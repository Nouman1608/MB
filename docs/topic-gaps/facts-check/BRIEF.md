# Facts check -- topic-gaps sprint (D-399), October 2026

You are checking real-world facts on newly written revision pages for an education website. Your group's page
list is /home/claude/gaps/facts/<group>.txt (one absolute path per line). The official specification/syllabus texts are:
7405: /home/claude/syllabi/aqa-current/7405-current.txt; 7408: /home/claude/syllabi/aqa-current/7408-current.txt;
7127: /home/claude/syllabi/aqa-current/7127-current.txt; 7357: /home/claude/syllabi/aqa-current/7357-current.txt;
9626: /home/claude/syllabi/9626.txt; 5090: /home/claude/syllabi/5090.txt.

## What to check

Read every page in your list. Pick out each **real-world factual claim that the official text above does not itself
state** -- data values (constants, half-lives, energies, E⦵ values, boiling points, bit lengths, ranges), colours and
observations, named examples, reagents and conditions, laws, standards, organisations, dates, software or protocol
behaviour. Skip anything the official text states, anything that is pure method or definition the official text gives,
values a question explicitly supplies as given data ("treat as", "use", invented data), and pure arithmetic.

Check each claim online. WebFetch only accepts URLs that came from a search result, so run **WebSearch (mode
"standard") first** and then WebFetch the most authoritative result (official body, standards organisation, legislation
site, NIST/IUPAC/NNDC, publisher documentation such as MDN or Microsoft Support, Wikipedia as a last resort). Batch
several searches in one turn. Do not use curl or any other route to websites.

For each claim decide:
- **Confirmed** -- leave it.
- **Wrong** -- correct it on every page where it appears (grep the whole list), and recompute anything that depends on
  it (worked examples, answers, mark points). Keep each page's meaning and structure.
- **Can't confirm after two searches** -- soften it (e.g. "about", "typically") if the softened form is safe, or remove
  the specific figure/name. Never replace it with another unchecked figure.

Rules that still apply: author/frontmatter untouched; no reviewer fields; never state a resource count; no claims about
mark schemes, formula booklets or exam-paper contents beyond the official text; practice questions stay original. Every
edited page must still pass `python3 /home/claude/sprint/check_new.py <file>` (1,500-2,100 words; a "LaTeX $...$" flag
is a known false positive only for spreadsheet cell references like `$A$2` in code). Edit only files in your list.

## Report

Write /home/claude/gaps/facts/<group>-results.md: a table of every claim checked (claim, page(s), verdict, source URL),
then the list of edits. Reply in under 150 words: counts confirmed / corrected / softened-or-removed, each correction in
a few words, and anything you could not resolve.
