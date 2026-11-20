---
title: "OxfordAQA IGCSE Computer Science (9210): Character encoding -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 Character Encoding Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Data representation"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 3.05
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-9210"
  - qualification: "igcse"
    topic: "data-representation-9210"
    subtopic: "character-encoding-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.3.5: character sets, 7-bit ASCII, Unicode, using encoding tables, sequences and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.3.5 Character encoding** of OxfordAQA International GCSE Computer Science (9210).
Worked examples are in the [Character encoding study
guide](/resources/oxfordaqa-igcse-computer-science-9210-character-encoding/).

## What the specification asks

- Understand what a **character set** is. Describe **7-bit ASCII** and **Unicode**.
- Use a **given encoding table** to convert characters to codes and codes to characters.
- Know that codes are **grouped and run in sequence**.
- Describe the **purpose of Unicode** and its **advantages over ASCII**.
- Know that Unicode uses the **same codes as ASCII up to 127**.
- UTF-8, UTF-16 and other versions are **not required**.

## Key facts

| Term | Meaning |
|---|---|
| Character set | A list of the characters a system can represent, each with a code |
| Character code | The number (stored in binary) that stands for a character |
| 7-bit ASCII | Each code uses 7 bits, giving 2⁷ = 128 characters (codes 0 to 127) |
| Unicode | A character set with codes for the characters of many languages and symbols |

## Parts of the ASCII table

| Characters | Codes |
|---|---|
| Space | 32 |
| Digits 0 to 9 | 48 to 57 |
| Capitals A to Z | 65 to 90 |
| Lower case a to z | 97 to 122 |

Codes in each group are **consecutive**: A 65, B 66, C 67 ... and a 97, b 98, c 99 ...

A capital and its lower-case letter differ by **32**.

## Calculating codes in a sequence

1. Find the position of the letter in the group (A is 0 places from A).
2. Add that number of places to the code you know.

| Wanted | Method | Result |
|---|---|---|
| Code for G | 65 + 6 | 71 |
| Code for L | 65 + 11 | 76 |
| Code for o | 97 + 14 | 111 |
| Code for digit 7 | 48 + 7 | 55 |
| Code for m | 77 + 32 | 109 |

## Examples of conversions

| Text | Codes | Bits in 7-bit ASCII |
|---|---|---|
| HELLO | 72, 69, 76, 76, 79 | 35 |
| Cat | 67, 97, 116 | 21 |
| bat | 98, 97, 116 | 21 |
| Hi 5 | 72, 105, 32, 53 | 28 |

- Bits for a text = number of characters × 7.
- Binary code 1000011 is 64 + 2 + 1 = 67, the letter C.
- Binary code 1100001 is 97, the letter a.
- The codes 80, 76, 65, 89 spell PLAY.

## The character '7' is not the number 7

The character '7' has code 55 (011 0111). The integer 7 is stored as 0000 0111. A program must convert text digits to a
number before it does arithmetic.

## Limits of ASCII

- Only 128 characters, with English letters, digits, punctuation and control codes.
- No room for other alphabets, accented letters or many symbols.

## Purpose and advantages of Unicode

**Purpose:** one standard code for the characters of the world's writing systems and special symbols.

**Advantages over ASCII:**

- **Far more characters**, such as other alphabets and symbols, because more bits are used per character.
- **One standard**, so text displays correctly on different systems.
- Several languages can appear in **one document**.
- **Same codes as ASCII up to 127**, so English text keeps the same codes.

**Disadvantage:** more bits per character, so files can be larger.

## Which to choose

| Situation | Choice |
|---|---|
| Short English-only text where space matters | ASCII |
| Text in several languages | Unicode |
| Text including emoji or special symbols | Unicode |

## Model answers

**Explain why Unicode was developed. [3 marks]** 7-bit ASCII has only 128 codes, which is enough for English letters,
digits and punctuation but not for the characters of other languages and many symbols. Unicode gives a single standard with
far more codes, so text in many languages can be stored and shared. Its codes up to 127 are the same as ASCII.

**The ASCII code for 'A' is 65. Calculate the code for 'T'. [2 marks]** T is the 20th letter, 19 places after A, so 65 + 19 =
84.

## Exam traps

- **ASCII has 256 characters.** 7-bit ASCII has 128.
- **'7' and 7 confused.** The character has the code 55.
- **Forgetting the space** (code 32).
- **Capital and lower-case codes swapped.** Capitals start at 65; lower case at 97.
- **Off by one in a sequence.** G is 6 places after A, not 7.
- **Unicode "has different codes for English".** Up to 127 the codes are the same as ASCII.
- **Vague "Unicode is better".** Say it has more characters, so more languages and symbols.
- **Naming UTF-8 or UTF-16.** Not required.

## Key terms

| Term | Meaning |
|---|---|
| Encoding | Turning characters into codes |
| Control code | A code that does not print, such as a new line |
| Compatible | Works with the earlier standard (Unicode with ASCII up to 127) |

## Self-test

1. State what is meant by a character set.
2. State the number of characters in 7-bit ASCII and show how it is calculated.
3. The code for A is 65. State the code for E.
4. The code for a is 97. State the code for k.
5. State the character with the code 84, given that A is 65.
6. State the number of bits needed to store the word PLAY in 7-bit ASCII.
7. State the 7-bit binary code for C (code 67).
8. State why the character '3' is not the same as the number 3.
9. State one advantage of Unicode over ASCII.
10. State what is true of the Unicode codes from 0 to 127.

**Answers:**
1. A list of characters that a system can represent, each with a code.
2. 128 (2 to the power 7).
3. 69 (65 + 4).
4. 107 (97 + 10).
5. T (84 - 65 = 19 places after A).
6. 28 (4 × 7).
7. 1000011.
8. The character '3' has the code 51 and is text; the number 3 is stored as the integer 0000 0011.
9. It can represent many more characters (so many languages and symbols).
10. They are the same as the ASCII codes.

## Related resources

- [Character encoding study guide](/resources/oxfordaqa-igcse-computer-science-9210-character-encoding/)
- [Character encoding practice questions](/resources/oxfordaqa-igcse-computer-science-9210-character-encoding-practice/)
- [Representing images revision notes](/resources/oxfordaqa-igcse-computer-science-9210-representing-images-revision-notes/)
