---
title: "OxfordAQA IGCSE Computer Science (9210): String handling operations in a programming language -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.08
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "string-handling-operations-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.2.8: string operations, character codes, conversions, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-17
featured: false
---

Condensed notes for section **3.2.8 String handling operations in a programming language** of OxfordAQA
International GCSE Computer Science (9210). The worked examples (a shift cipher and a username generator) are in
the [string handling study guide](/resources/oxfordaqa-igcse-computer-science-9210-string-handling-operations/).

## What the specification asks

Understand and use: **length, position, substring, concatenation, convert character to character code, convert
character code to character, string conversion operations** (string to integer, string to real, integer to
string, real to string).

## Operations on `s ← "Harare"` (positions from 0)

```
H  a  r  a  r  e
0  1  2  3  4  5
```

| Operation | Expression | Result |
|---|---|---|
| Length | `LEN(s)` | `6` |
| Position (first occurrence) | `POSITION(s, "r")` | `2` |
| Substring (start and end included) | `SUBSTRING(2, 4, s)` | `"rar"` |
| One character | `SUBSTRING(0, 0, s)` | `"H"` |
| Last character | `SUBSTRING(LEN(s) - 1, LEN(s) - 1, s)` | `"e"` |
| Concatenation | `s + " city"` | `"Harare city"` |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-string-handling-operations--01-string-positions.webp" width="900" height="545" alt="The string &quot;Accra&quot; with its characters at positions 0 to 4. LEN(&quot;Accra&quot;) is 5, so the last position is 4. POSITION(&quot;Accra&quot;, &quot;r&quot;) is 3. SUBSTRING(1, 3, s) includes both ends and returns &quot;ccr&quot;, while Python’s &quot;Accra&quot;[1:4] gives the same result by excluding the end." loading="lazy">
  <figcaption>Positions start at 0, so the last character is at LEN(s) − 1.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-string-handling-operations--02-length-and-position.webp" width="900" height="620" alt="&quot;New York&quot; has 8 characters, because the space counts. In &quot;banana&quot;, the letter a appears at positions 1, 3 and 5, but POSITION(&quot;banana&quot;, &quot;a&quot;) returns 1, the first appearance." loading="lazy">
  <figcaption>LEN counts every character; POSITION finds only the first match.</figcaption>
</figure>

## Character codes (ASCII)

| Characters | Codes |
|---|---|
| `"0"` to `"9"` | 48 to 57 |
| `"A"` to `"Z"` | 65 to 90 |
| `"a"` to `"z"` | 97 to 122 |
| Space | 32 |

- Codes run **in sequence**, so `CHAR_TO_CODE("C") - CHAR_TO_CODE("A")` is `2`.
- Lower case = upper case **+ 32**.
- `CODE_TO_CHAR(CHAR_TO_CODE(c) + 1)` gives the next character.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-string-handling-operations--05-character-codes.webp" width="900" height="699" alt="In ASCII, A to Z have codes 65 to 90, a to z have 97 to 122 and the digits 0 to 9 have 48 to 57. Because they run in sequence, adding 1 to the code of D gives E, adding 32 to the code of G gives g, and range tests on the code check for a capital letter or a digit." loading="lazy">
  <figcaption>Codes run in sequence, so arithmetic on them moves through the alphabet.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-string-handling-operations--06-shift-cipher.webp" width="900" height="846" alt="The cipher subtracts 65 to turn A to Z into 0 to 25, adds 3, wraps with MOD 26 and adds 65 back. Z (90) becomes 28, then 2, then 67, which is C; each O (79) becomes 17, then 82, which is R. &quot;ZOO&quot; is output as CRR." loading="lazy">
  <figcaption>Subtract 65, shift, MOD 26 to wrap from Z to A, then add 65 back.</figcaption>
</figure>

## Conversions

| From → To | Function | Example | Why needed |
|---|---|---|---|
| String → integer | `STRING_TO_INT` | `"15"` → `15` | Arithmetic on input |
| String → real | `STRING_TO_REAL` | `"2.75"` → `2.75` | Arithmetic on decimal input |
| Integer → string | `INT_TO_STRING` | `15` → `"15"` | Joining to text; taking digits as characters |
| Real → string | `REAL_TO_STRING` | `2.75` → `"2.75"` | Joining to text in output |

Converting text that is not a number (`"twelve"`) causes an error in most languages.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-string-handling-operations--07-building-a-username.webp" width="900" height="688" alt="The username takes SUBSTRING(0, 2) of &quot;Okafor&quot;, which is &quot;Oka&quot;, and SUBSTRING(2, 3) of the year converted to the string &quot;2009&quot;, which is &quot;09&quot;, joining them as &quot;Oka09&quot;. Using INT_TO_STRING(year MOD 100) instead would give &quot;9&quot; and lose the leading zero." loading="lazy">
  <figcaption>Convert the year to a string first, so the substring keeps the leading zero.</figcaption>
</figure>

## Template loops

```
reversed ← ""                         -- reverse a string
FOR i ← LEN(s) - 1 TO 0 STEP -1
  reversed ← reversed + SUBSTRING(i, i, s)
ENDFOR

spaces ← 0                            -- count spaces
FOR i ← 0 TO LEN(s) - 1
  IF SUBSTRING(i, i, s) = " " THEN
    spaces ← spaces + 1
  ENDIF
ENDFOR
```

(An alternative to the counting-down loop is `reversed ← SUBSTRING(i, i, s) + reversed` with a normal loop from
0, which adds each character to the front.)

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-string-handling-operations--03-character-loop.webp" width="900" height="673" alt="A FOR loop runs i from 0 to LEN(word) - 1 over &quot;programming&quot;, taking one character each pass with SUBSTRING(i, i, word). The vowels o, a and i at positions 2, 5 and 8 are counted, so the output is 3." loading="lazy">
  <figcaption>Loop over every position and take one character with SUBSTRING(i, i, s).</figcaption>
</figure>

## Common patterns

| Task | Method |
|---|---|
| Initials from `"Lena Park"` | First character, plus the character after the space: `SUBSTRING(0, 0, n) + SUBSTRING(POSITION(n, " ") + 1, POSITION(n, " ") + 1, n)` → `"LP"` |
| Split at a separator | `p ← POSITION(s, ":")`; before: `SUBSTRING(0, p - 1, s)`; after: `SUBSTRING(p + 1, LEN(s) - 1, s)` |
| Check minimum length | `LEN(pwd) ≥ 8` |
| Check a string is empty | `LEN(s) = 0` (or `s = ""`) |
| Capital letter test | `CHAR_TO_CODE(c) ≥ 65 AND CHAR_TO_CODE(c) ≤ 90` |
| Number of words (single spaces) | Count spaces, then add 1 |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-string-handling-operations--04-split-at-space.webp" width="900" height="596" alt="In &quot;Amara Diallo&quot; the space is at position 5, so gap is 5. first is SUBSTRING(0, 4), giving &quot;Amara&quot;, and last is SUBSTRING(6, 11), giving &quot;Diallo&quot;; the − 1 and + 1 leave out the space." loading="lazy">
  <figcaption>Find the separator with POSITION, then cut either side of it with SUBSTRING.</figcaption>
</figure>

## Mini trace: changing case

```
word ← "cat"
result ← ""
FOR i ← 0 TO LEN(word) - 1
  code ← CHAR_TO_CODE(SUBSTRING(i, i, word))
  result ← result + CODE_TO_CHAR(code - 32)
ENDFOR
```

| i | character | code | code − 32 | result |
|---|---|---|---|---|
| 0 | c | 99 | 67 | `"C"` |
| 1 | a | 97 | 65 | `"CA"` |
| 2 | t | 116 | 84 | `"CAT"` |

The loop only works correctly if every character is a lower-case letter: a space (code 32) would become code 0,
which is not a printable character. A complete version would test each code is in the range 97 to 122 first.

## Key terms

| Term | Meaning |
|---|---|
| String | A sequence of characters |
| Length | The number of characters in a string, including spaces |
| Position | The index at which a character first appears in a string |
| Substring | Part of a string, taken from a start position to an end position |
| Concatenation | Joining two or more strings end to end |
| Character code | The number used to represent a character, such as its ASCII code |
| String conversion | Changing a value between string and numeric types |

## Exam traps

- Positions start at **0** here; Python slices exclude the end position. State your convention.
- `POSITION` gives a **number**; `SUBSTRING` gives a **string**.
- `"3" + "4"` is `"34"`; convert to numbers to get 7.
- A number joined to text needs `INT_TO_STRING` or `REAL_TO_STRING`.
- `INT_TO_STRING(7 MOD 100)` gives `"7"`, not `"07"`: leading zeros need string methods.
- Capital and lower-case letters have different codes, so `"a" = "A"` is False.

## Self-test

1. State `LEN("Cape Town")`.
2. State `POSITION("Mississippi", "s")`, counting from 0.
3. State `SUBSTRING(0, 3, "Kingston")`.
4. State `SUBSTRING(4, 7, "Kingston")`.
5. State `CHAR_TO_CODE("E")`.
6. State `CODE_TO_CHAR(100)`.
7. State `CODE_TO_CHAR(CHAR_TO_CODE("m") - 32)`.
8. State the result of `"10" + "5"`, and of `STRING_TO_INT("10") + 5`.
9. Write an expression that gives the last character of a string `word`.
10. Write a condition that is true when the single character `ch` is a digit, using its character code.
11. Explain why `"Score: " + points` may cause an error when `points` is an integer.
12. A user types `4.5`. Name the conversion needed before it is multiplied by 2.

**Answers:**
1. 9 (the space counts).
2. 2.
3. `"King"`.
4. `"ston"`.
5. 69.
6. `"d"`.
7. `"M"`.
8. `"105"`; `15`.
9. `SUBSTRING(LEN(word) - 1, LEN(word) - 1, word)`.
10. `CHAR_TO_CODE(ch) ≥ 48 AND CHAR_TO_CODE(ch) ≤ 57`.
11. `+` cannot join a string and an integer in many languages; convert with `INT_TO_STRING(points)` first.
12. String to real (`STRING_TO_REAL`).

## More resources on this topic

- [String handling study guide](/resources/oxfordaqa-igcse-computer-science-9210-string-handling-operations/)
- [String handling practice questions](/resources/oxfordaqa-igcse-computer-science-9210-string-handling-operations-practice/)
- [Data types revision notes](/resources/oxfordaqa-igcse-computer-science-9210-data-types-revision-notes/)
