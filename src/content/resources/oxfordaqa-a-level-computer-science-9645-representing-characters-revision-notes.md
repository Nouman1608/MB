---
title: "OxfordAQA A-Level Computer Science (9645): Representing characters -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Representing Characters Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 5 – Representing data"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 5.4
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "representing-data"
  - qualification: "a-level"
    topic: "representing-data"
    subtopic: "representing-characters-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.5.4: character sets, ASCII, Unicode, UTF-8, character blocks, digit codes and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.5.4 Representing characters** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.5 Representing data). For worked examples, see the [representing characters study guide](/resources/oxfordaqa-a-level-computer-science-9645-representing-characters/); then practise with the [representing characters practice questions](/resources/oxfordaqa-a-level-computer-science-9645-representing-characters-practice/).

## What the specification requires

- Characters are represented using a **character set** in which each character has a **unique code**. Codes are numbers stored as bit patterns.
- **Describe ASCII and Unicode**, and **explain why Unicode was introduced**.
- ASCII is a **7-bit** encoding and can represent 2^7 = **128** characters.
- Unicode has **more than one encoding system**.
- **UTF-8** is the most widely used Unicode encoding, is **variable length** (8, 16, 24 or 32 bits per character) and was designed for **backwards compatibility with ASCII**: the numbers 0 to 127 represent the same characters in both.
- Characters are grouped into **blocks**: digits start at **48**, English upper case at **65**, English lower case at **97**.
- You do not need to remember particular codes, but you may be given one code in a block and asked for another.
- Understand the difference between the **character code of a digit** and its **pure binary** value.

## Key terms

| Term | Meaning |
|---|---|
| Character set | The list of characters a system can represent, each with a unique code |
| Code (code point) | The number assigned to a character |
| Encoding | The way a character code is turned into bits |
| ASCII | 7-bit encoding, 128 characters |
| Unicode | Character set covering the world's writing systems, with several encodings |
| UTF-8 | A variable-length (8, 16, 24 or 32 bit) Unicode encoding compatible with ASCII |
| Block | A run of consecutive codes for related characters |

## Blocks and offsets

| Block | First code | Example |
|---|---|---|
| Digits | 48 (`0`) | `7` is 48 + 7 = 55 |
| Upper case | 65 (`A`) | `T` is 65 + 19 = 84 |
| Lower case | 97 (`a`) | `p` is 97 + 15 = 112 |

Method: find how many places the character is after the first in its block, then add that to the first code.

Recomputed:

| Question | Working | Answer |
|---|---|---|
| Code of `G`, given `A` = 65 | 65 + 6 | 71 |
| Code of `k`, given `a` = 97 | 97 + 10 | 107 |
| Character with code 82, given `A` = 65 | 65 + 17 | R |
| Character with code 109, given `a` = 97 | 97 + 12 | m |
| Lower case `f` to upper case | 102 − 32 | 70 (`F`) |

A lower-case letter's code is **32 more** than the upper-case one. Letters are in alphabetical order, so within one case, codes sort text alphabetically.

## Digits: character code versus pure binary

| Item | Value |
|---|---|
| Pure binary of the number 8 | 1000 |
| ASCII code of the character `8` | 56, 7-bit pattern 0111000 |
| UTF-8 code of the character `8` | 00111000 |
| Pure binary of the number 6 | 110 |
| ASCII code of the character `6` | 54 = 0110110 |

Digit character to value: subtract 48. `3` and `4` have codes 51 and 52. Adding the codes gives 103, but adding the values gives 7.

## ASCII, Unicode and UTF-8

| | ASCII | UTF-8 (Unicode) |
|---|---|---|
| Bits per character | 7 (stored in 8) | 8, 16, 24 or 32 |
| Characters | 128 | Whole Unicode set |
| Languages | English | All writing systems |
| Compatibility | | Codes 0 to 127 are the same as ASCII |

**Why Unicode?** ASCII cannot represent accented letters, other alphabets, many symbols or emoji. Different local 8-bit character sets conflicted, so one code could mean different characters in different systems. Unicode gives one unique code to each character, so many languages can be mixed in one document.

**Why is UTF-8 efficient?** English text uses 1 byte per character, as in ASCII; rarer characters use more.

Recomputed sizes in UTF-8:

| Text | Bits |
|---|---|
| Code (4 ASCII letters) | 32 |
| naive | 40 |
| naïve | 48 (the ï needs 16 bits) |
| 5 ASCII characters | 40 |

## Encoding example

`Hi5` in 7-bit ASCII:

| Character | Code | 7-bit pattern |
|---|---|---|
| H | 72 | 1001000 |
| i | 105 | 1101001 |
| 5 | 53 | 0110101 |

In UTF-8 each would be a full byte: 01001000, 01101001 and 00110101.

## Exam traps

- **ASCII is 7 bit,** not 8 (although stored in a byte).
- **UTF-8 is variable length,** not always 8 bits.
- **Unicode is not the same as UTF-8.** UTF-8 is one encoding.
- **Digit characters are not their values.** Subtract 48.
- **Offsets start at 0.** `A` is the first letter, offset 0.
- **Explain Unicode with a limitation of ASCII,** such as too few characters for other languages.
- **Same code, same character:** 0 to 127 in ASCII and UTF-8.

## Quick self-test

1. How many characters can 7-bit ASCII represent?
2. Give the first code of the lower-case block.
3. What is the code of `G` if `A` is 65?
4. What is the code of `p` if `a` is 97?
5. State the possible code lengths, in bits, of one UTF-8 character.
6. State one reason Unicode was introduced.
7. In what way is UTF-8 compatible with ASCII?
8. What is the pure binary form of 6, and what is the ASCII 7-bit pattern of the character `6`?
9. How do you find the value of a digit character from its code?
10. How many bits does "Code" take in UTF-8?
11. Why is English text efficient in UTF-8?
12. Is Unicode the same as UTF-8?

### Answers

1. 128.
2. 97.
3. 71.
4. 112.
5. It uses 8, 16, 24 or 32 bits per character.
6. ASCII cannot represent the characters of other languages and many symbols; Unicode gives all of them unique codes.
7. Codes 0 to 127 are the same characters in both, so ASCII text is valid UTF-8.
8. 110; 0110110.
9. Subtract 48.
10. 32 bits (4 characters at 8 bits each).
11. Common characters use only 8 bits each.
12. No. Unicode is a character set with several encodings, and UTF-8 is one of them.

## More on this topic

- [Representing characters study guide](/resources/oxfordaqa-a-level-computer-science-9645-representing-characters/)
- [Representing characters practice questions](/resources/oxfordaqa-a-level-computer-science-9645-representing-characters-practice/)
- [Units of information revision notes](/resources/oxfordaqa-a-level-computer-science-9645-units-of-information-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.4 Representing characters.
