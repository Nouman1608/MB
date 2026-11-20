---
title: "OxfordAQA A-Level Computer Science (9645): Representing characters"
seoTitle: "OxfordAQA A-Level CS 9645 Representing Characters Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.5.4 in depth: character sets, ASCII, Unicode and UTF-8, character blocks, working out codes, and digits as characters."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.5.4 Representing characters** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.5 Representing data (AS). The specification asks you to understand that characters are represented using a **character set** in which each character has a **unique code**; to describe **ASCII** and **Unicode** and explain **why Unicode was introduced**; to know that ASCII is a **7-bit** encoding and that Unicode has **more than one encoding**, including **UTF-8**; to know how characters are **grouped into blocks**; and to understand the difference between the **character code of a decimal digit** and its **pure binary** representation.

For quick recall use the [representing characters revision notes](/resources/oxfordaqa-a-level-computer-science-9645-representing-characters-revision-notes/), then try the [representing characters practice questions](/resources/oxfordaqa-a-level-computer-science-9645-representing-characters-practice/). The topic-level [representing data study guide](/resources/oxfordaqa-a-level-computer-science-representing-data/) covers all of section 3.5. Calculations below were recomputed with a script.

## Character sets and codes

A computer stores only bit patterns, so every character (letter, digit, punctuation mark, space or symbol) needs a number. A **character set** is the agreed list of characters a system can represent, with a **unique code** for each. The code is a number, stored as a bit pattern. When the letter `A` is stored, the computer stores the code 65 (binary 1000001), not a picture of the letter. Software reads the code and uses a font to draw the letter on screen.

For this to work, sender and receiver must use the **same character set**. If they do not, the codes are read as the wrong characters and the text looks garbled.

## ASCII

**ASCII** is a character set and coding system that uses **7 bits** per character. 2^7 = **128** different codes are possible, numbered 0 to 127. They cover:

- English upper-case and lower-case letters;
- the digits 0 to 9;
- punctuation marks and symbols;
- the space;
- control codes, such as a new line or a tab (these are not printable characters).

Characters are stored in 8-bit bytes in practice, with a leading 0 added to the 7-bit code. For example, `A` has code 65, which is 1000001 in 7 bits and 01000001 in a byte.

### Blocks of characters

In ASCII and Unicode, related characters are grouped in **blocks** of consecutive codes. The specification names three blocks:

| Block | Starts at code | Last character code |
|---|---|---|
| Numeric digits `0` to `9` | 48 | 57 |
| English upper-case letters `A` to `Z` | 65 | 90 |
| English lower-case letters `a` to `z` | 97 | 122 |

You are not expected to remember the code for individual characters in the exam, but you may need to **work out the code of another character in a block** if you are given the first. For example, if told that the ASCII code for `A` is 65, you can work out `G`: `G` is 6 places after `A` (A, B, C, D, E, F, G), so its code is 65 + 6 = **71**.

### Worked example 1: finding codes in a block

Given that the code for `a` is 97, find the code for `k`. `k` is the 11th letter, 10 places after `a`, so the code is 97 + 10 = **107**.

Given that the code for `A` is 65, find the character with code 77. The offset is 77 − 65 = 12, so the character is the one 12 places after `A`, which is **M**.

### Worked example 2: upper case and lower case

The lower-case block starts at 97 and the upper-case block at 65, so each lower-case letter has a code **32 more** than its upper-case partner. `K` is 75 and `k` is 107. In binary they are 1001011 and 1101011, differing in only one bit (the bit worth 32). A program can convert case by adding or subtracting 32: the upper-case form of `c` (99) is 99 − 32 = 67, which is `C`.

Because the letters are in alphabetical order, comparing character codes also sorts text alphabetically within one case. Upper-case letters all sort before lower-case letters, because 65 to 90 is below 97 to 122.

### Worked example 3: encoding a word

Encode `Hello` in ASCII (7 bits).

| Character | Code | 7-bit binary |
|---|---|---|
| H | 72 | 1001000 |
| e | 101 | 1100101 |
| l | 108 | 1101100 |
| l | 108 | 1101100 |
| o | 111 | 1101111 |

Stored in bytes, the five characters use 5 bytes (40 bits). The codes are 72, 101, 108, 108, 111.

## Why Unicode was introduced

ASCII with 128 codes is enough for English text, but it cannot represent:

- letters with accents (such as é) in other European languages;
- other writing systems, such as Arabic, Chinese, Devanagari and Cyrillic;
- many mathematical, currency and other symbols;
- emoji.

Using many different extended 8-bit character sets for different languages led to confusion, as the same code meant different characters in different sets, and a document could not mix languages. **Unicode** was introduced to provide **one unique code for every character in all the world's writing systems**, so text in any language, and in several languages at once, can be stored and exchanged.

## Unicode and its encodings

Unicode is a character set that assigns a number to each character. How that number is turned into bits is called an **encoding**. The specification says Unicode has **more than one encoding system**. The most widely used is **UTF-8**.

### UTF-8

- It is the **most widely used** Unicode encoding.
- It is **variable length**: a character uses **8, 16, 24 or 32 bits** (one to four bytes), depending on the character.
- It was designed for **backwards compatibility with ASCII**. In both UTF-8 and ASCII the numbers **0 to 127 represent the same characters**, so a valid ASCII file is also a valid UTF-8 file.

Recomputed examples of how many bits UTF-8 uses:

| Text | Characters | Bits per character | Total bits |
|---|---|---|---|
| A | A | 8 | 8 |
| café | c, a, f, é | 8, 8, 8, 16 | 40 |
| €5 | €, 5 | 24, 8 | 32 |
| 日本 | two Japanese characters | 24, 24 | 48 |
| A smiling-face emoji | one character | 32 | 32 |

Common English text therefore takes one byte per character, which keeps files small, while rarer characters take more.

### Comparing ASCII and UTF-8

| | ASCII | UTF-8 |
|---|---|---|
| Code length | 7 bits (usually stored in 8) | 8, 16, 24 or 32 bits (variable) |
| Number of characters | 128 | Very many (all of Unicode) |
| Languages | English only | All writing systems |
| Compatibility | | Codes 0 to 127 match ASCII |

## Digits as characters and as binary numbers

The character `6` and the number 6 are different things.

- The **pure binary** representation of the number 6 is **110**.
- The **ASCII character code** of the digit character `6` is 54, which in 7 bits is **0110110**.
- In UTF-8 (one byte) the same character is **00110110**.

The digit block starts at code 48, so the code of any digit character is **48 + its value**. `0` is 48, `7` is 55 and `9` is 57. To convert a digit character to its value, subtract 48: the characters `2`, `0`, `4`, `7` give the values 2, 0, 4, 7 after subtracting 48 from each of 50, 48, 52, 55. This matters when a program reads digits from the keyboard: it receives character codes, not numbers, and must convert before doing arithmetic. Adding the characters `4` and `1` as codes gives 52 + 49 = 101, not 5.

## Exam technique

- **Define terms precisely:** character set, code, encoding.
- **Use the block starts** (48, 65, 97) and count places to find a code.
- **Write the bit patterns** with the correct number of bits (7 for ASCII, 8 for a UTF-8 byte).
- **Explain Unicode** by giving what ASCII cannot do, not just "it is bigger".
- **For digits,** show both the pure binary form and the character code form.

## Common mistakes

- Saying ASCII is 8 bit. It is 7 bit (although it is stored in a byte).
- Saying UTF-8 always uses 8 bits per character.
- Confusing the code of the digit `6` (54) with the value 6.
- Forgetting that the offset from the first letter of a block is one less than the letter's position (A is position 1 and offset 0).
- Saying Unicode "is" UTF-8. UTF-8 is one encoding of Unicode.
- Counting codes from 1 instead of from 0 when working out the number of characters 2^7 = 128 (codes 0 to 127).

## Next steps

- [Representing characters revision notes](/resources/oxfordaqa-a-level-computer-science-9645-representing-characters-revision-notes/)
- [Representing characters practice questions](/resources/oxfordaqa-a-level-computer-science-9645-representing-characters-practice/)
- [Units of information study guide](/resources/oxfordaqa-a-level-computer-science-9645-units-of-information/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.4 Representing characters.
