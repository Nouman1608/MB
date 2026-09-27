#!/usr/bin/env python3
"""
Content-breadth sprint (owner brief, 27 Sep 2026) -- writes content-gap-report.md at the repo root.

For each syllabus in SCOPE it reads the CURRENT official topic list from
src/data/academic/syllabus-topics.ts (the build-validated transcription of the
board's own document -- no topic name here is invented) and the syllabusTopics
mapping of every resource in src/content/resources/, then reports, per topic,
whether a study guide, revision notes and a practice set exist.

Counting rules (kept deliberately strict, so "covered" is never overstated):
  * A topic has type T if at least one resource of type T maps to that topic
    (at topic level or at any of its subtopics) for the same qualification.
  * Where the syllabus data lists subtopics, subtopic coverage is also
    reported: a subtopic has type T only if a resource of type T maps to that
    exact subtopic. A topic-level mapping does not count as covering every
    subtopic inside it.
  * "Complete" means all three types present for every topic.
  * exam-preparation / subject-guides pages are counted separately and never
    stand in for a study guide, revision notes or practice set.

Run: python3 scripts/content-gap-report.py   (no dependencies)
"""
import glob, os, re, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TS = open(os.path.join(ROOT, 'src/data/academic/syllabus-topics.ts'), encoding='utf-8').read()

SCOPE = [
    # (group, board, qualification, subject, code)
    ('IB placeholder hubs', 'ib', 'ib-dp', 'mathematics-analysis-and-approaches', 'DP Mathematics: Analysis and Approaches'),
    ('IB placeholder hubs', 'ib', 'ib-dp', 'mathematics-applications-and-interpretation', 'DP Mathematics: Applications and Interpretation'),
    ('IB placeholder hubs', 'ib', 'ib-dp', 'language-a-language-and-literature', 'DP Language A: Language and Literature'),
    ('IB placeholder hubs', 'ib', 'ib-dp', 'language-a-literature', 'DP Language A: Literature'),
    ('IB placeholder hubs', 'ib', 'ib-dp', 'environmental-systems-and-societies', 'DP Environmental Systems and Societies'),
    ('IB placeholder hubs', 'ib', 'ib-dp', 'global-politics', 'DP Global Politics'),
    ('IB placeholder hubs', 'ib', 'ib-dp', 'language-b', 'DP Language B'),
    ('IB placeholder hubs', 'ib', 'ib-myp', 'myp-language-acquisition', 'MYP Language Acquisition'),
    ('IB placeholder hubs', 'ib', 'ib-myp', 'myp-sciences', 'MYP Sciences'),
    ('IB placeholder hubs', 'ib', 'ib-myp', 'myp-design', 'MYP Design'),
    ('IB placeholder hubs', 'ib', 'ib-myp', 'myp-individuals-and-societies', 'MYP Individuals and Societies'),
    ('Core sciences and maths', 'cambridge', 'igcse', None, '0580'),
    ('Core sciences and maths', 'cambridge', 'igcse', None, '0620'),
    ('Core sciences and maths', 'cambridge', 'igcse', None, '0625'),
    ('Core sciences and maths', 'cambridge', 'igcse', None, '0610'),
    ('Core sciences and maths', 'cambridge', 'a-level', None, '9701'),
    ('Core sciences and maths', 'cambridge', 'a-level', None, '9702'),
    ('Core sciences and maths', 'cambridge', 'a-level', None, '9700'),
    ('Core sciences and maths', 'cambridge', 'a-level', None, '9709'),
    ('Core sciences and maths', 'edexcel', 'igcse', None, '4MA1'),
    ('Core sciences and maths', 'edexcel', 'igcse', None, '4CH1'),
    ('Core sciences and maths', 'edexcel', 'igcse', None, '4PH1'),
    ('Core sciences and maths', 'edexcel', 'igcse', None, '4BI1'),
    ('Core sciences and maths', 'aqa', 'gcse', None, '8461'),
    ('Core sciences and maths', 'aqa', 'gcse', None, '8462'),
    ('Core sciences and maths', 'aqa', 'gcse', None, '8463'),
    ('Core sciences and maths', 'aqa', 'gcse', None, '8300'),
]
TYPES = [('study-guides', 'SG'), ('revision-notes', 'RN'), ('practice-questions', 'PQ')]

STR = r"'((?:[^'\\]|\\.)*)'|\"((?:[^\"\\]|\\.)*)\""


def unq(m, i):
    return (m.group(i) if m.group(i) is not None else m.group(i + 1)).replace("\\'", "'")


def syllabus_blocks():
    starts = [m.start() for m in re.finditer(r"boardSlug:\s*'", TS)]
    for i, s in enumerate(starts):
        yield TS[s: starts[i + 1] if i + 1 < len(starts) else len(TS)]


def parse_block(b):
    g = lambda k: (re.search(rf"{k}:\s*'([^']*)'", b) or [None, None])[1]
    out = dict(board=g('boardSlug'), qual=g('qualificationSlug'), subject=g('subjectSlug'),
               code=g('syllabusCode'), series=g('syllabusSeries'), status=g('status'), topics=[])
    tpos = b.find('topics:')
    body = b[tpos:] if tpos >= 0 else ''
    item = re.compile(r"\{\s*number:\s*([^,]+),\s*name:\s*(?:" + STR + r"),\s*slug:\s*'([^']+)'")
    cur = None
    for m in item.finditer(body):
        num = m.group(1).strip().strip("'")
        name, slug = unq(m, 2), m.group(4)
        after = body[m.end():m.end() + 60]
        if re.match(r"(?:,\s*stage:\s*'[^']*')?,\s*subtopics:", after):
            cur = dict(number=num, name=name, slug=slug, subtopics=[])
            out['topics'].append(cur)
        elif cur is not None:
            cur['subtopics'].append(dict(number=num, name=name, slug=slug))
    return out


def resources():
    res = []
    for f in glob.glob(os.path.join(ROOT, 'src/content/resources/*.md')):
        raw = open(f, encoding='utf-8').read()
        fm = raw.split('---', 2)[1]
        rt = re.search(r'^resourceType:\s*"?([\w-]+)', fm, re.M).group(1)
        maps = []
        blk = re.search(r'syllabusTopics:\n((?:\s+-[^\n]*\n(?:\s{4,}[^\n]*\n)*)*)', fm)
        if blk:
            for e in re.split(r'\n\s+-\s', '\n' + blk.group(1)):
                q = re.search(r'qualification:\s*"?([\w-]+)', e)
                t = re.search(r'topic:\s*"?([^"\n]+)', e)
                s = re.search(r'subtopic:\s*"?([^"\n]+)', e)
                if q and t:
                    maps.append((q.group(1), t.group(1).strip(), s.group(1).strip() if s else None))
        codes = re.findall(r'"([^"]+)"', (re.search(r'^syllabusCodes:\s*\[(.*?)\]', fm, re.M) or [None, ''])[1])
        res.append(dict(slug=os.path.basename(f)[:-3], type=rt, maps=maps, codes=codes))
    return res


def main():
    sylls = [parse_block(b) for b in syllabus_blocks()]
    res = resources()
    now = datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=5)))
    lines = [
        '# Content gap report',
        '',
        f'**Generated {now:%d %b %Y, %H:%M} PKT** by `python3 scripts/content-gap-report.py` (content-breadth sprint).',
        '',
        'Topic lists come from `src/data/academic/syllabus-topics.ts` (the current series only), which is the build-validated transcription of each board\'s official document. A topic counts as having a study guide (SG), revision notes (RN) or practice set (PQ) only if a resource of that type maps to it. Subtopic columns count exact subtopic mappings only. Nothing here says a page has been teacher-reviewed: all resources remain `review-pending`.',
        '',
        '## Summary',
        '',
        '| Syllabus | Series | Resources | SG / RN / PQ | Topics with all 3 types | Subtopics with all 3 types | Status |',
        '|---|---|---|---|---|---|---|',
    ]
    detail = []
    for group, board, qual, subject, code in SCOPE:
        cands = [s for s in sylls if s['code'] == code and s['status'] == 'current' and s['board'] == board]
        if not cands:
            lines.append(f'| {code} | -- | -- | -- | no current topic data | -- | not auditable |')
            continue
        s = cands[0]
        mine = [r for r in res if any(q == s['qual'] and t in {tp['slug'] for tp in s['topics']} for q, t, _ in r['maps'])]
        n_by_type = {k: sum(1 for r in mine if r['type'] == k) for k, _ in TYPES}
        topic_rows, full_topics, sub_total, sub_full = [], 0, 0, 0
        for tp in s['topics']:
            have = {}
            for k, ab in TYPES:
                have[ab] = sum(1 for r in mine if r['type'] == k and any(q == s['qual'] and t == tp['slug'] for q, t, _ in r['maps']))
            complete = all(have.values())
            full_topics += complete
            missing_subs = []
            for st in tp['subtopics']:
                sub_total += 1
                sh = {ab: any(r['type'] == k and any(q == s['qual'] and sb == st['slug'] for q, _, sb in r['maps']) for r in mine) for k, ab in TYPES}
                if all(sh.values()):
                    sub_full += 1
                else:
                    missing_subs.append(f"{st['number']} ({'/'.join(a for a, v in sh.items() if not v)})")
            topic_rows.append((tp, have, complete, missing_subs))
        ntop = len(s['topics'])
        status = 'complete' if full_topics == ntop and ntop else 'gaps remain'
        subtxt = f'{sub_full} / {sub_total}' if sub_total else 'no subtopic data'
        lines.append(f"| {code} ({s['subject']}) | {s['series']} | {len(mine)} | {n_by_type['study-guides']} / {n_by_type['revision-notes']} / {n_by_type['practice-questions']} | {full_topics} / {ntop} | {subtxt} | {status} |")
        detail += ['', f"### {code} -- {s['subject']} ({s['board']} {s['qual']}, {s['series']})", '',
                   '| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |', '|---|---|---|---|---|---|']
        for tp, have, complete, missing_subs in topic_rows:
            ms = ', '.join(missing_subs) if missing_subs else ('--' if tp['subtopics'] else 'topic has no subtopic data')
            detail.append(f"| {tp['number']} | {tp['name']} | {have['SG']} | {have['RN']} | {have['PQ']} | {ms} |")
    lines += ['', '## Detail by syllabus'] + detail
    open(os.path.join(ROOT, 'content-gap-report.md'), 'w', encoding='utf-8').write('\n'.join(lines) + '\n')
    print('\n'.join(lines[:12 + len(SCOPE)]))


if __name__ == '__main__':
    main()
