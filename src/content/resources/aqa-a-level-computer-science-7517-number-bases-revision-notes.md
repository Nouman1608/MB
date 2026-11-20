---
title: "AQA A-Level Computer Science (7517): Number bases -- Revision Notes"
seoTitle: "AQA A-Level CS Number Bases Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data representation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 5.2
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
    subtopic: "number-bases-7517"
description: "Condensed AQA 7517 section 4.5.2 recall: decimal, binary and hexadecimal, conversion methods, hexadecimal as shorthand for binary, and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.5.2 Number bases**, AQA A-Level Computer Science (7517): decimal (base 10), binary (base 2) and hexadecimal (base 16), converting between them, and using **hexadecimal as a shorthand for binary**. Worked methods are in the [number bases study guide](/resources/aqa-a-level-computer-science-7517-number-bases/); exam-style questions are in the [number bases practice questions](/resources/aqa-a-level-computer-science-7517-number-bases-practice/).

## Notation

A number's base is written as a subscript: 67₁₀ (base 10), 10011011₂ (base 2), AE₁₆ (base 16).

## Place values

| Base | Digits | Place values (right to left) |
|---|---|---|
| 10 | 0 to 9 | 1, 10, 100, 1000 |
| 2 | 0, 1 | 1, 2, 4, 8, 16, 32, 64, 128 |
| 16 | 0 to 9, A to F | 1, 16, 256, 4096 |

## Hex digit table

| Hex | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| Binary | 0000 | 0001 | 0010 | 0011 | 0100 | 0101 | 0110 | 0111 |

| Hex | 8 | 9 | A | B | C | D | E | F |
|---|---|---|---|---|---|---|---|---|
| Binary | 1000 | 1001 | 1010 | 1011 | 1100 | 1101 | 1110 | 1111 |

A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.

## Conversion methods

| Conversion | Method |
|---|---|
| Binary to decimal | Add the place values of the 1 bits |
| Decimal to binary | Subtract place values from 128 downwards, **or** divide by 2 repeatedly and read remainders **bottom to top** |
| Hex to decimal | Multiply each digit by its power of 16 and add |
| Decimal to hex | Divide by 16 repeatedly; read remainders **bottom to top**; convert 10 to 15 into A to F |
| Binary to hex | Group bits in **fours from the right**; replace each group with a hex digit |
| Hex to binary | Replace each hex digit with its **four bits** |

## Worked checks

- **11010110₂ to decimal:** 128 + 64 + 16 + 4 + 2 = 214.
- **173₁₀ to binary:** 128 + 32 + 8 + 4 + 1 = 173, so 10101101₂.
- **10101101₂ to hex:** groups 1010 and 1101 give AD₁₆.
- **B7₁₆ to decimal:** 11 × 16 + 7 = 183.
- **1000₁₀ to hex:** 1000 ÷ 16 = 62 remainder 8; 62 ÷ 16 = 3 remainder 14 (E); 3 ÷ 16 = 0 remainder 3. Read upwards: 3E8₁₆.
- **3F₁₆ to binary:** 0011 and 1111, so 00111111₂ (which is 63₁₀).
- **110010₂ to hex:** pad to 0011 0010, giving 32₁₆.

## Why hexadecimal is used as shorthand for binary

- One hex digit stands for exactly **four bits** (a nibble), so a byte is **two** hex digits.
- A hex number is **a quarter of the length** of the binary one.
- It is **easier for people to read and copy**, with **fewer transcription errors**.
- Conversion is **direct**, with no arithmetic.
- Computers still store binary. Hex is for human convenience.
- Uses: memory addresses, colour codes, machine code listings, MAC addresses.

## Useful values

| Bits | Largest unsigned value | Hex |
|---|---|---|
| 4 | 15 | F |
| 8 | 255 | FF |
| 12 | 4095 | FFF |
| 16 | 65535 | FFFF |

## Doing a conversion safely

1. Decide the **route**. For hex and decimal it is often quickest to go through binary.
2. Write the **place values** or the **division table** and keep it in the answer.
3. Read remainders **from the bottom up**.
4. **Check** by converting back, or by comparing against a value you know, such as 255 = FF.
5. Add the **base subscript** if the question asks for it, to avoid confusion between, for example, 101₂ and 101₁₀.

## Exam traps

- **Remainders read top to bottom.**
- **Grouping from the left** in binary to hex.
- **Digit values:** A is 10, not 1; F is 15.
- **Wrong place values** in hex (powers of 16).
- **Dropping zeros inside a nibble**, for example 11 instead of 0011.
- **Claiming hex saves memory.** It only shortens what people write.

## Key terms

| Term | Definition |
|---|---|
| Number base | The number of different digits in a number system and the factor between place values |
| Binary | Base 2, using digits 0 and 1 |
| Decimal | Base 10, using digits 0 to 9 |
| Hexadecimal | Base 16, using digits 0 to 9 and A to F |
| Nibble | A group of four bits |
| Place value | The value of a digit's position in a number |

## Self-test

1. How many bits does one hex digit represent?
2. Convert 1101₂ to decimal.
3. Convert 45₁₀ to binary.
4. Convert 2C₁₆ to binary.
5. Convert 11110000₂ to hex.
6. Convert 7A₁₆ to decimal.
7. Convert 100₁₀ to hex.
8. State the hex value of 255₁₀.
9. Give two reasons why hexadecimal is used as shorthand for binary.
10. In which direction are remainders read in repeated division?

**Answers**

1. Four.
2. 8 + 4 + 1 = 13.
3. 32 + 8 + 4 + 1 = 45, so 101101₂.
4. 0010 and 1100 give 00101100₂.
5. F0₁₆.
6. 7 × 16 + 10 = 122.
7. 100 ÷ 16 = 6 remainder 4, so 64₁₆.
8. FF₁₆.
9. Any two: it is shorter; easier to read and remember; fewer errors when copying; each digit is exactly four bits so conversion is direct.
10. From the last remainder to the first (bottom to top).

## Related resources

- [Number bases study guide](/resources/aqa-a-level-computer-science-7517-number-bases/)
- [Number bases practice questions](/resources/aqa-a-level-computer-science-7517-number-bases-practice/)
- [Binary number system revision notes](/resources/aqa-a-level-computer-science-7517-binary-number-system-revision-notes/)
- [Units of information revision notes](/resources/aqa-a-level-computer-science-7517-units-of-information-revision-notes/)
