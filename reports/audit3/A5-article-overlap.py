#!/usr/bin/env python3
"""Item 45 (audit 3, A5): which sentences the six location articles share.

Method: body text only (front matter dropped); Markdown links reduced to their text, emphasis,
headings and list markers removed; split into sentences on . ! ? followed by a space or line end
(headings and list items count as one sentence each). Place words are normalised to <PLACE>, and
local currency / time-zone words to <CUR> / <TZ>, so "Singapore is three hours ahead of Lahore"
and "the UAE is one hour behind Lahore" compare on their structure. Two sentences are "shared" when
their normalised forms are identical (EXACT) or have a difflib ratio of at least 0.80 (NEAR).
Lahore and Pakistan are normalised too, but only where they are the article's own place
(the Lahore article); elsewhere "Lahore" is the academy's location and is kept, so it does not
inflate matches. Run: python3 reports/audit3/A5-article-overlap.py
"""
import re, sys, itertools, difflib, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[2] / 'src/content/articles'
ARTICLES = {
    'dubai': ('a-level-tuition-in-dubai-cambridge-or-edexcel.md', ['Dubai', 'United Arab Emirates', 'the UAE', 'UAE', 'Emirati', 'Abu Dhabi', 'Sharjah']),
    'qatar': ('edexcel-igcse-tutoring-in-qatar.md', ['Qatar', 'Doha', 'Qatari']),
    'uae': ('how-online-igcse-and-a-level-tuition-works-from-the-uae.md', ['Dubai', 'United Arab Emirates', 'the UAE', 'UAE', 'Emirati', 'Abu Dhabi', 'Sharjah']),
    'singapore': ('ib-tuition-in-singapore-online.md', ['Singapore', 'Singaporean']),
    'malaysia': ('igcse-tuition-in-malaysia-online.md', ['Malaysia', 'Kuala Lumpur', 'Malaysian', 'Penang', 'Johor']),
    'lahore': ('o-level-tuition-in-lahore-online-or-in-person.md', ['Lahore', 'Pakistan', 'Pakistani', 'Punjab']),
}
CUR = ['UAE dirhams', 'dirhams', 'dirham', 'AED', 'Qatari riyals', 'riyals', 'riyal', 'QAR', 'Singapore dollars', 'SGD',
       'Malaysian ringgit', 'ringgit', 'MYR', 'Pakistani rupees', 'rupees', 'PKR']
TZ = ['Gulf Standard Time', 'Gulf time', 'Singapore time', 'Malaysia time', 'Pakistan time', 'Arabia Standard Time']
NUM_WORDS = r'\b(one|two|three|four|five|six)\b'

def body(path):
    t = path.read_text(encoding='utf8')
    t = re.sub(r'^---\n.*?\n---\n', '', t, count=1, flags=re.S)
    t = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', t)
    t = re.sub(r'[*_`]', '', t)
    return t

def sentences(text):
    out = []
    for block in re.split(r'\n\s*\n', text):
        lines = block.split('\n')
        # list items and headings are their own units; wrapped prose lines are joined
        units, cur = [], []
        for ln in lines:
            s = ln.strip()
            if re.match(r'^(#+\s|[-*]\s|\d+\.\s)', s):
                if cur: units.append(' '.join(cur)); cur = []
                cur = [re.sub(r'^(#+\s|[-*]\s|\d+\.\s)', '', s)]
            else:
                cur.append(s)
        if cur: units.append(' '.join(cur))
        for u in units:
            for s in re.split(r'(?<=[.!?])\s+(?=[A-Z0-9"(])', u):
                s = s.strip()
                if len(s) > 3: out.append(s)
    return out

def norm(s, places):
    n = s
    for w in sorted(CUR, key=len, reverse=True): n = re.sub(re.escape(w), '<CUR>', n)
    for w in sorted(TZ, key=len, reverse=True): n = re.sub(re.escape(w), '<TZ>', n)
    for w in sorted(places, key=len, reverse=True): n = re.sub(r'\b' + re.escape(w) + r'\b', '<PLACE>', n)
    n = re.sub(NUM_WORDS, '<N>', n, flags=re.I)
    n = re.sub(r'\d+(:\d+)?', '<N>', n)
    return re.sub(r'\s+', ' ', n).strip().lower()

data = {k: [(s, norm(s, p)) for s in sentences(body(ROOT / f))] for k, (f, p) in ARTICLES.items()}
for k in data: print(f'{k}: {len(data[k])} sentences', file=sys.stderr)

# every sentence of each article, with the other articles that carry the same (or a near) sentence
results = {}
for a in data:
    for s, n in data[a]:
        hits = []
        for b in data:
            if b == a: continue
            best = max(((difflib.SequenceMatcher(None, n, m).ratio(), t) for t, m in data[b]), default=(0, ''))
            if best[0] >= 0.80: hits.append((b, round(best[0], 2), best[1]))
        results.setdefault(a, []).append((s, hits))

mode = sys.argv[1] if len(sys.argv) > 1 else 'summary'
for a, rows in results.items():
    shared = [r for r in rows if r[1]]
    print(f'\n## {ARTICLES[a][0]}: {len(shared)} of {len(rows)} sentences shared with at least one other location article')
    for s, hits in shared:
        tag = 'EXACT' if any(h[1] == 1.0 for h in hits) else 'NEAR'
        print(f'- [{tag}] "{s}"  <- also in: ' + ', '.join(f'{b} ({r})' for b, r, _ in hits))
