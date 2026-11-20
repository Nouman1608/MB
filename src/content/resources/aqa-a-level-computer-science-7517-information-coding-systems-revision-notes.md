---
title: "AQA A-Level Computer Science (7517): Information coding systems -- Revision Notes"
seoTitle: "AQA A-Level CS Information Coding Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data representation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 5.5
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
    subtopic: "information-coding-systems-7517"
description: "Condensed AQA 7517 section 4.5.5 recall: character form of digits, ASCII, Unicode, and parity bits, majority voting, checksums and check digits."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.5.5 Information coding systems**, AQA A-Level Computer Science (7517): the character form of a decimal digit, **ASCII and Unicode**, and error checking and correction with **parity bits, majority voting, checksums and check digits**. Fuller explanations are in the [information coding systems study guide](/resources/aqa-a-level-computer-science-7517-information-coding-systems/); exam-style questions are in the [information coding systems practice questions](/resources/aqa-a-level-computer-science-7517-information-coding-systems-practice/).

## Character form against pure binary

| | Pure binary | Character code (ASCII) |
|---|---|---|
| Meaning | The **value** of the number | The code for the **symbol** that looks like the digit |
| The digit 7 | 00000111 | 00110111 (55) |
| The number 25 | 00011001 (1 byte) | 00110010 00110101 (2 bytes) |
| Used for | Calculation | Display and input |

- ASCII digits run from 48 (for 0) to 57 (for 9). Subtract 48 to get the value.
- Typed input arrives as characters and must be converted before arithmetic.

## ASCII

- **7 bits**, so **128** codes. Extended versions use 8 bits (256).
- A is 65 and Z is 90. a is 97 and z is 122. 0 is 48 and 9 is 57. Space is 32.
- Letters are in alphabetical order, so comparing codes sorts text.
- Lower case = upper case + 32.
- **Limit:** too few codes for other alphabets and large character sets.

| Character | Code | Binary (7 bits) |
|---|---|---|
| A | 65 | 1000001 |
| a | 97 | 1100001 |
| 0 | 48 | 0110000 |

## Unicode

- A code point for **every character in every writing system**, written U+ plus hex, for example U+0041 for A.
- Over a million possible code points, including symbols and emoji.
- First 128 code points are the **same as ASCII**.
- Encodings: **UTF-8** (1 to 4 bytes per character), UTF-16, UTF-32.
- **Why introduced:** ASCII could not represent the characters of other languages. Unicode is one universal standard that avoids conflicting national extensions.
- **Cost:** more bits per character, so files can be bigger.

## Error checking and correction

Errors arise from interference or faults in transmission and storage. Methods add **redundant** data.

### Parity bit

- Extra bit makes the number of 1s **even** (even parity) or **odd** (odd parity).
- 1011001 has four 1s, so the even parity bit is 0. 0110111 has five 1s, so the even parity bit is 1.
- The receiver counts the 1s. Wrong parity means an error.
- Detects **single-bit errors** (any odd number of errors). **Misses** two-bit errors. **Cannot correct**, because it does not show which bit is wrong.

### Majority voting

- Each bit is sent **three times** (or more). The receiver takes the value that appears most.
- 1011 is sent as 111 000 111 111. The group 101 is read as 1.
- **Corrects** one error per group. Costs **three times the data**.

### Checksum

- A value calculated from a whole block of data (for example the sum of the bytes modulo 256), sent with the data.
- The receiver repeats the calculation and compares.
- Example: bytes 200, 150, 90 sum to 440, and 440 mod 256 = **184**.
- Detects most errors in a block; cannot correct, so the block is resent.

### Check digit

- An extra digit calculated from the other digits of a number, usually with **weights** and a **modulus**.
- Used for typed or scanned numbers: product codes, ISBNs, card numbers.
- Example (weights 5, 4, 3, 2; modulus 11): code 2784 gives 10 + 28 + 24 + 8 = 70. 70 mod 11 = 4, so the check digit is 11 − 4 = **7**. Code 27847 has a total of 77 with weight 1 on the check digit, a multiple of 11.
- Catches **typing and scanning** mistakes, including many swapped digits.

## Comparison

| Method | Detects | Corrects | Overhead |
|---|---|---|---|
| Parity bit | Single-bit errors | No | 1 bit per group |
| Majority voting | Errors | Yes | Three times the data |
| Checksum | Most errors in a block | No | Small, per block |
| Check digit | Typing mistakes | No | One digit per number |

## Worked checks

- Even parity for 0101011: four 1s, so parity bit 0.
- A received byte 01101101 has five 1s, so under even parity it contains an error.
- Majority vote on 101 011 000 111: 1, 1, 0, 1.
- Checksum of 120, 85, 60: 265, and 265 − 256 = 9.
- Check digit for 3659 with the weights above: 15 + 24 + 15 + 18 = 72, 72 mod 11 = 6, check digit 5.

## Exam traps

- **Confusing** the character "5" (00110101) with the number 5 (00000101).
- **ASCII has 256 characters.** Standard ASCII has 128.
- **Unicode reason missing.** Say it represents characters from all languages.
- **Parity can correct.** It cannot.
- **Parity detects all errors.** It misses even numbers of errors.
- **Checksum called encryption.** It only checks for errors.
- **Weights ignored** when calculating a check digit.

## Key terms

| Term | Definition |
|---|---|
| Character set | The set of characters a coding system can represent |
| ASCII | A 7-bit character code with 128 characters |
| Unicode | A universal character coding system covering all writing systems |
| Code point | The number assigned to a character in Unicode |
| Parity bit | An extra bit that makes the count of 1s even or odd |
| Majority voting | Sending each bit several times and taking the most common value |
| Checksum | A value calculated from a block of data to detect corruption |
| Check digit | A digit calculated from the other digits of a number to catch input errors |
| Redundancy | Extra data added to allow errors to be detected |

## Self-test

1. What is the ASCII code of the character "0"?
2. Give the 8-bit binary for the number 4 and for the character "4".
3. How many different characters can standard ASCII represent?
4. Why was Unicode introduced?
5. Give the even parity bit for 1110101.
6. Why can a parity bit not correct an error?
7. Decode the majority vote 110 001 101.
8. Why is majority voting inefficient?
9. What does a receiver do with a checksum?
10. What is a check digit used for?

**Answers**

1. 48.
2. The number 4 is 00000100; the character "4" is 00110100.
3. 128.
4. ASCII had too few codes for the characters of other languages; Unicode is a single universal standard for all of them.
5. 1 (there are five 1s, so one more makes six).
6. It shows that something is wrong, but not which bit.
7. 1, 0, 1.
8. Three times as many bits have to be sent for the same data.
9. It recalculates the checksum from the received data and compares it with the one sent.
10. To catch mistakes in typing or scanning a number.

## Related resources

- [Information coding systems study guide](/resources/aqa-a-level-computer-science-7517-information-coding-systems/)
- [Information coding systems practice questions](/resources/aqa-a-level-computer-science-7517-information-coding-systems-practice/)
- [Binary number system revision notes](/resources/aqa-a-level-computer-science-7517-binary-number-system-revision-notes/)
- [Representing images, sound and other data revision notes](/resources/aqa-a-level-computer-science-7517-representing-images-sound-and-other-data-revision-notes/)
