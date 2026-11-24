---
title: "OxfordAQA IGCSE Computer Science (9210): Character encoding -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Character Encoding Study Guide"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.3.5: character sets, 7-bit ASCII, Unicode, using encoding tables and calculating codes in sequence."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.3.5 Character encoding** of OxfordAQA International GCSE Computer Science (9210).
The specification asks you to understand what a **character set** is and to describe two encoding methods,
**7-bit ASCII** and **Unicode**. You must be able to use a **given character encoding table** to convert characters to
character codes and character codes to characters. You must understand that character codes are commonly **grouped
and run in sequence** within the table. You must also describe the **purpose of Unicode** and its **advantages over
ASCII**, and know that "Unicode uses the same codes as ASCII up to 127". It is not necessary to know UTF-8, UTF-16 or
other versions of Unicode.

## Why characters need codes

A computer stores only bits, so every letter, digit and symbol in a text must be turned into a **number**, and the
number stored in binary. A **character set** is the agreed list of characters that a system can represent, together
with the code for each one. If the sender and the receiver use the same character set, then a text written on one
computer can be read correctly on another. If they use different sets, the text is shown as the wrong characters.

The code for a character is called a **character code**. The code is a whole number, and the computer stores it in
binary like any other number. For instance, the capital letter A has the code 65, which is 1000001 in binary.

## 7-bit ASCII

**ASCII** is a character set. Each character has a **7-bit** code, and 7 bits can represent 2⁷ = **128** different
patterns, so ASCII has 128 characters, with codes 0 to 127. It covers:

- the 26 capital letters and 26 lower-case letters of the English alphabet,
- the digits 0 to 9,
- punctuation and symbols such as the full stop, the comma and the question mark,
- the space character,
- control codes (such as the code for a new line), which are not printed.

The parts of the table that you should know are shown below. In an exam, you are normally given an encoding table, so
the important thing is how to use it.

| Characters | Codes |
|---|---|
| Space | 32 |
| Digits 0 to 9 | 48 to 57 |
| Capital letters A to Z | 65 to 90 |
| Lower-case letters a to z | 97 to 122 |

### Codes run in sequence

The characters in a group have consecutive codes. A is 65, B is 66, C is 67, and so on. The digits go 48, 49, ... 57.
The lower-case letters go from a = 97. Because of this, you only need **one code from a group** to work out every
other code in the group.

- Code for G, given that A is 65: G is the 7th letter, which is 6 places after A, so 65 + 6 = **71**.
- Code for the 12th capital letter, L: A is the first, so L is 11 places after A: 65 + 11 = **76**.
- Code for o: the 15th lower-case letter, 14 places after a (97): 97 + 14 = **111**.
- Code for the digit character 7: 48 + 7 = **55**.
- A capital letter and the matching lower-case letter differ by **32** (for example A = 65 and a = 97), so m is 77 + 32 =
  109, and the capital for the code 116 (t) is 116 - 32 = 84, which is T.

### Digits are characters too

The character '7' is not the same as the number 7. The character '7' has the code 55, because it is a symbol in a text.
The number 7, stored as an integer, is the binary pattern 0000 0111. When you type 7 into a text document, the
computer stores the code 55 in binary (011 0111 in 7 bits). This is why a program must convert a string of digits to a number
before it can do arithmetic.

## Using an encoding table

Questions usually give a table or an extract of one, and ask you to carry out one of two conversions.

### Characters to codes: "HELLO"

Look up each character in the table.

| Character | H | E | L | L | O |
|---|---|---|---|---|---|
| Code (decimal) | 72 | 69 | 76 | 76 | 79 |
| 7-bit binary | 1001000 | 1000101 | 1001100 | 1001100 | 1001111 |

The word HELLO has 5 characters, so it needs 5 × 7 = **35 bits** in 7-bit ASCII.

### Codes to characters: 80, 76, 65, 89

Look up each number. The codes 80, 76, 65 and 89 are the capital letters P, L, A and Y, so the message is **PLAY**.

### Binary to a character

Convert the binary code to decimal, then look up the character. The 7-bit code 1100001 is 64 + 32 + 1 = 97, which is
the lower-case letter **a**.

### A mixed example: "Hi 5"

| Character | H | i | space | 5 |
|---|---|---|---|---|
| Code (decimal) | 72 | 105 | 32 | 53 |

The space and the digit are characters with codes of their own. The text is 4 characters, so 4 × 7 = 28 bits.

## The limits of ASCII

7-bit ASCII was designed for English. With only 128 codes there is no room for the letters of other alphabets, such as
Greek, Arabic, Chinese or Hindi, for accented letters such as é and ü, or for many symbols such as the euro sign or
emoji. A text in another language could not be stored correctly using ASCII alone. Different countries therefore
used different extra codes, and a file from one country could look wrong in another.

## Unicode

**Unicode** is a character set that was created to solve this problem. Its purpose is to give a **single, shared code
for the characters of all the world's writing systems**, as well as special symbols.

Advantages of Unicode over ASCII:

- It can represent **many more characters**, because it uses more bits for each character. This includes the
  alphabets of many languages and a wide range of special symbols and emoji.
- It gives **one standard**, so text in any language can be stored, sent and displayed correctly on any system that
  supports it.
- It lets one document contain **several languages** at once.
- It is **compatible** with ASCII: the codes up to **127 are the same** as in ASCII. A plain English text therefore
  has the same codes in both sets.

Disadvantage: because each character may need more bits than the 7 used by ASCII, a text stored in Unicode can
need **more storage space** than the same text stored in ASCII.

### Worked comparison

A message has 200 characters, all of them English letters, digits and punctuation.

- In 7-bit ASCII it needs 200 × 7 = **1,400 bits**.
- In Unicode, the codes for these characters are the same as in ASCII, but each character may use more bits, so
  the file can be larger. The characters are still the same, so the message is displayed identically.

The key facts to state are that Unicode has more characters, more bits per character, and the same first 128 codes.

## Choosing between ASCII and Unicode

| Situation | Better choice | Reason |
|---|---|---|
| A short English-only text file where saving space matters | ASCII | 7 bits per character is compact |
| A web page with French, Arabic and Japanese text | Unicode | ASCII cannot represent these characters |
| A message containing emoji | Unicode | The symbols are not in ASCII |
| A system that must share text between countries | Unicode | A single standard |

## Common mistakes

- Saying that ASCII has **256** characters. 7-bit ASCII has **128** (2 to the power 7).
- Confusing the character '7' (code 55) with the number 7.
- Forgetting that the space is a character with its own code (32).
- Mixing up the capital and lower-case letter codes. Capitals are **65 onwards**, lower-case are **97 onwards**.
- Counting the wrong number of places in a sequence, such as G = 65 + 7 instead of 65 + 6.
- Saying that Unicode uses different codes for English letters. Up to 127 the codes are the **same** as ASCII.
- Describing Unicode only as "newer" or "better". Give the reason: **more characters**, so more languages and symbols.
- Naming UTF-8 or UTF-16. They are not required, so any detail you add may be wrong.
- Not showing the sum in a calculation of a code, so a slip cannot earn a method mark.

## Exam technique

- **Convert** questions: copy the table lookup into your answer, one character per code, and keep the order.
- **Calculate a code** questions: give the starting code and the number of places, such as "A is 65; G is 6 places
  later; 65 + 6 = 71".
- **Define a character set**: "a list of characters, each with a unique code, that a computer can represent".
- **Explain the need for Unicode**: say that ASCII has only 128 codes, which is not enough for the characters of many
  languages and symbols, and that Unicode provides far more.
- **Bits for a text**: multiply the number of characters by the bits for each character (7 for ASCII).

## More on this topic

For a condensed summary and a self-test, use the [Character encoding revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-character-encoding-revision-notes/), and practise with the
[Character encoding practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-character-encoding-practice/).
