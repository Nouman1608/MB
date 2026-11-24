---
title: "AQA A-Level Computer Science (7517): Information coding systems"
seoTitle: "AQA A-Level CS Information Coding Systems Study Guide"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.5.5 Information coding systems: character codes for digits, ASCII and Unicode, and error checking with parity, majority voting, checksums and check digits."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.5.5 Information coding systems** in AQA A-Level Computer Science (7517). It has three content blocks:

- **4.5.5.1** differentiating the **character code representation of a decimal digit** from its **pure binary representation**;
- **4.5.5.2** describing **ASCII and Unicode** for coding character data, and explaining **why Unicode was introduced**;
- **4.5.5.3** describing and explaining the use of **parity bits, majority voting, checksums and check digits** for error checking and correction.

The wider [fundamentals of data representation study guide](/resources/aqa-a-level-computer-science-fundamentals-of-data-representation-study-guide/) covers all of section 4.5. Condensed notes are in the [information coding systems revision notes](/resources/aqa-a-level-computer-science-7517-information-coding-systems-revision-notes/), and exam-style questions are in the [information coding systems practice questions](/resources/aqa-a-level-computer-science-7517-information-coding-systems-practice/).

## Character form of a decimal digit

A digit can be stored in two quite different ways.

- **Pure binary** is the value of the number written in binary. The digit 7 is 00000111 in 8 bits. A whole number such as 25 is 00011001, held in **one byte**. Pure binary is what the processor uses for arithmetic.
- **Character code** is the code for the *symbol* that looks like the digit. The character "7" is a printable character with its own code, 55 in ASCII, which is 00110111. The number 25 written as the two characters "2" and "5" is stored as 00110010 and 00110101, which takes **two bytes**.

| | Pure binary | Character code (ASCII) |
|---|---|---|
| The digit 7 | 00000111 (value 7) | 00110111 (value 55) |
| The number 25 | 00011001 (1 byte) | 00110010 00110101 (2 bytes) |

The two representations are not interchangeable. A program that reads a number typed by a user receives **characters**, and must convert them to pure binary before it does arithmetic. If it added the character codes of "2" and "5" instead (50 + 53 = 103) the result would be meaningless. Character form is used for **display and input**; pure binary is used for **calculation**. Note that the ASCII codes for the digits 0 to 9 run in order from 48 to 57, so subtracting 48 from a digit's code gives its numerical value.

## ASCII

**ASCII** (the American Standard Code for Information Interchange) gives each character a number.

- The standard version uses **7 bits**, so it has 2⁷ = **128** codes. Extended versions use 8 bits for 256.
- Codes include upper case letters (A is 65, B is 66, … Z is 90), lower case letters (a is 97 … z is 122), the digits (0 is 48 … 9 is 57), punctuation, and control characters such as the new line.
- Letters appear in **alphabetical order**, so comparing codes sorts letters. This makes comparing and sorting text simple.
- Upper and lower case differ by 32: a is 97 and A is 65. In binary, the two differ in one bit.

| Character | Decimal code | 7-bit binary | Hex |
|---|---|---|---|
| A | 65 | 1000001 | 41 |
| Z | 90 | 1011010 | 5A |
| a | 97 | 1100001 | 61 |
| 0 | 48 | 0110000 | 30 |
| space | 32 | 0100000 | 20 |

**Limits.** 128 characters are enough for English text and basic punctuation, but there is no room for accented letters, other alphabets, or large character sets such as Chinese, Japanese or Arabic. Different countries produced different extensions that used the spare codes in conflicting ways, so a file could appear as nonsense on a different system.

## Unicode

**Unicode** is a coding system that gives every character in every writing system a unique **code point**, written as U+ followed by a hexadecimal number (for example U+0041 for A).

- It can represent **well over a million** code points (1,114,112), and currently defines characters for most of the world's languages, mathematical and technical symbols, and emoji.
- The first 128 code points are the same as ASCII, so ASCII text is valid Unicode.
- It is stored using encodings such as UTF-8 (one to four bytes per character, one byte for ASCII), UTF-16 and UTF-32.

**Why Unicode was introduced.** ASCII's character set was too small to represent the characters of other languages. Unicode provides **one universal standard**, so text from any language can be stored, displayed and exchanged between systems without conflicts between national extensions.

**Trade-off.** A wider code needs more bits per character. UTF-32 uses 32 bits for each character, which is four times the size of an 8-bit code, so text files can be larger. UTF-8 reduces this for English text.

## Error checking and correction

Data can be corrupted during transmission or storage by interference or faults, so a 0 becomes a 1 or the other way round. Error checking methods add **redundant** (extra) information so that errors can be **detected**, and sometimes **corrected**.

### Parity bits

A **parity bit** is an extra bit added to a group of data bits so that the total number of 1s is always even (**even parity**) or always odd (**odd parity**). A common arrangement is 7 data bits plus 1 parity bit in a byte.

Data 1011001 has four 1s, which is already even, so the even parity bit is **0**. The byte sent is 01011001 (parity bit first) or 10110010 (parity bit last), depending on convention. Data 0110111 has five 1s, so the even parity bit is **1**.

The receiver counts the 1s in each byte. With even parity, a byte arriving with an odd number of 1s must contain an error.

- A parity bit detects any **single-bit error**, or any odd number of flipped bits.
- It **cannot** detect an even number of errors (two bits flipped leave the parity unchanged).
- It cannot say **which bit** is wrong, so it cannot correct the error. The data would be sent again.

### Majority voting

In **majority voting** each bit is sent several times, typically **three**, and the receiver takes the value that appears most often in each group.

To send 1011, send 111 000 111 111. If the group 111 arrives as 101, the majority is still 1, so the error is **corrected**. The groups 110 001 101 are read as 1, 0 and 1.

- It can both **detect and correct** errors, provided that no more than one bit in each group is wrong.
- It is **inefficient**: three times as many bits must be sent, so only one third of the capacity carries useful data.

### Checksums

A **checksum** is a value calculated from a block of data by an agreed method, such as adding up the bytes and keeping the result within one byte (the sum modulo 256). The sender transmits the data **and** the checksum. The receiver repeats the calculation on the received data and compares its result with the checksum received. If they differ, the data has been corrupted.

Example: the bytes 200, 150 and 90 sum to 440. Modulo 256 the checksum is 440 − 256 = **184**. If a byte changes to 201 in transit, the receiver computes 441 mod 256 = 185, which does not match 184, so the error is found.

- It checks a **whole block**, so it uses little extra data.
- It can detect most errors, but not all (two changes that cancel out would go unnoticed), and it normally **cannot correct** the error.
- It is used for files, network packets and stored data.

### Check digits

A **check digit** is an extra digit added to a number such as a product code, book number or bank card number, calculated from the other digits. It is used to catch mistakes in **typing or scanning**.

A typical method gives each digit a **weight**, adds the weighted digits and uses the remainder after dividing by a modulus. In a simple scheme with weights 5, 4, 3, 2 and modulus 11, the code 2784 gives 2 × 5 = 10, 7 × 4 = 28, 8 × 3 = 24 and 4 × 2 = 8, a total of 70. 70 mod 11 = 4. The check digit is 11 − 4 = **7**, so the full code is 27847. Check: the weighted sum including the check digit (weight 1) is 70 + 7 = 77, a multiple of 11 ✓.

Suppose the third digit is mistyped, giving 27947. The weighted sum including the check digit is 10 + 28 + 27 + 8 + 7 = 80, which is not a multiple of 11, so the code is rejected at the point of entry.

The real-world ISBN-10 for books uses weights 10 down to 1 and modulus 11 in the same way.

- Check digits detect **single-digit errors** and many **transposition errors** (two digits swapped), depending on the scheme.
- They check one number, not a stream of data.

### Choosing a method

| Method | Used for | Detects | Corrects |
|---|---|---|---|
| Parity bit | Each byte or word in transmission or memory | Single-bit errors | No |
| Majority voting | Noisy channels | Errors | Yes, one bit per group |
| Checksum | Blocks of data, files, packets | Most errors | No (resend) |
| Check digit | Typed or scanned numbers | Typing and scanning mistakes | No |

## Common mistakes

- Treating the character "5" and the number 5 as the same bit pattern.
- Saying ASCII has 256 characters in its standard form. Standard ASCII has 128 (7 bits).
- Saying Unicode is "bigger ASCII" without stating the reason for its introduction: to represent the characters of all languages.
- Saying a parity bit can correct an error, or that it detects every error.
- Forgetting that majority voting needs at least three copies.
- Describing a checksum as encryption. It checks for errors only.
- Calculating a check digit by adding the digits without applying the weights.

## Exam technique

- **Distinguish** character code from pure binary with a concrete example, such as the digit 7 giving 00110111 as a character and 00000111 as a number.
- **Give a reason** for Unicode: more characters, universal standard.
- **Parity questions**: count the 1s, state whether the parity is even or odd, and say what the check can and cannot do.
- **Error checks**: say what is added, what the receiver does and what happens if the check fails.

## More resources on this topic

- [Information coding systems revision notes](/resources/aqa-a-level-computer-science-7517-information-coding-systems-revision-notes/)
- [Information coding systems practice questions](/resources/aqa-a-level-computer-science-7517-information-coding-systems-practice/)
- [Binary number system study guide](/resources/aqa-a-level-computer-science-7517-binary-number-system/)
- [Representing images, sound and other data study guide](/resources/aqa-a-level-computer-science-7517-representing-images-sound-and-other-data/)

*Written against the AQA A-level Computer Science (7517) specification, 4.5.5 Information coding systems. Always check the current specification on the AQA website.*
