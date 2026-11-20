---
title: "Cambridge O Level Computer Science (2210): Number systems"
seoTitle: "Cambridge O Level Computer Science 2210 Number Systems Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 1 – Data representation"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 1.1
syllabusTopics:
  - qualification: "o-level"
    topic: "data-representation-2210"
  - qualification: "o-level"
    topic: "data-representation-2210"
    subtopic: "number-systems-2210"
description: "Study guide to Cambridge O Level Computer Science 2210 section 1.1: binary, denary and hexadecimal, conversions, 8-bit addition and overflow, logical shifts and two's complement."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Section 1.1 of Cambridge O Level Computer Science 2210 asks you to understand how and why computers use binary, to convert between denary, binary and hexadecimal, to add 8-bit binary integers, to explain overflow, to perform logical shifts and to use two's complement. This guide takes each skill in turn with every step written out, so you can copy the method in the exam.

## Part 1: why computers use binary

Any form of data (numbers, text, sound, images) has to be converted to **binary** before a computer can process it. Binary has only two digits, 0 and 1. That suits hardware because a circuit can be in one of two clear states, such as a low voltage or a high voltage, or off and on.

Data is processed using **logic gates**, which take binary inputs and produce binary outputs. Data is stored in **registers**, which are small, fast storage locations in the processor, each made of bits. One binary digit is a **bit**. Eight bits make a **byte**.

## Part 2: three number systems

| System | Base | Digits used |
|---|---|---|
| Denary | 10 | 0 to 9 |
| Binary | 2 | 0 and 1 |
| Hexadecimal | 16 | 0 to 9, then A to F |

In hexadecimal, A is 10, B is 11, C is 12, D is 13, E is 14 and F is 15.

Each column in a number has a **place value**. In denary the place values are 1, 10, 100 and so on. In binary each column is worth double the one to its right. For an 8-bit number the place values are:

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|---|---|---|---|---|---|---|---|

For a 16-bit number the place values continue to 256, 512, 1024, 2048, 4096, 8192, 16384 and 32768. The syllabus limits binary conversions to a maximum of 16 bits, and all values are integers.

## Part 3: converting between denary and binary

### Binary to denary

Write the place values above the bits and add the values where there is a 1.

**Example:** convert 10110101 to denary.

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|---|---|---|---|---|---|---|---|
| 1 | 0 | 1 | 1 | 0 | 1 | 0 | 1 |

128 + 32 + 16 + 4 + 1 = **181**.

### Denary to binary

Work from the largest place value down. If the place value fits into what is left, write 1 and subtract it. Otherwise write 0.

**Example:** convert 156 to 8-bit binary.

1. 128 fits into 156. Write 1. Left: 156 − 128 = 28.
2. 64 does not fit into 28. Write 0.
3. 32 does not fit into 28. Write 0.
4. 16 fits into 28. Write 1. Left: 12.
5. 8 fits into 12. Write 1. Left: 4.
6. 4 fits into 4. Write 1. Left: 0.
7. 2 does not fit. Write 0.
8. 1 does not fit. Write 0.

The answer is **10011100**. Check it: 128 + 16 + 8 + 4 = 156.

## Part 4: hexadecimal

### Why hexadecimal is used

One hexadecimal digit represents exactly four bits (a nibble). So an 8-bit byte needs only two hex digits, and a 16-bit value needs only four. This makes hexadecimal:

- **shorter** than binary, so there are fewer symbols to read and fewer mistakes when copying;
- **easier for humans** to read and remember than long strings of 0s and 1s.

Computers do not need hexadecimal. It is a convenience for people. The syllabus asks you to identify areas where it is used. Common ones are:

- colour codes in web pages and image software;
- MAC addresses;
- memory addresses and memory dumps when programmers debug;
- error messages that show a code;
- assembly language and machine code listings.

### Binary to hexadecimal

Split the binary number into groups of four bits, starting from the right. Convert each group.

**Example:** convert 10100111 to hexadecimal.

- Left group 1010 = 8 + 2 = 10, which is A.
- Right group 0111 = 4 + 2 + 1 = 7, which is 7.

The answer is **A7**.

### Hexadecimal to binary

Convert each hex digit into four bits.

**Example:** convert 3C to binary. 3 is 0011 and C (12) is 1100, so the answer is **00111100**.

### Denary to hexadecimal and back

For denary to hex, divide by 16. The whole number is the left digit and the remainder is the right digit.

**Example:** convert 203 to hexadecimal. 203 ÷ 16 = 12 remainder 11. 12 is C and 11 is B. The answer is **CB**.

For hex to denary, multiply the left digit by 16 and add the right digit.

**Example:** convert 7F to denary. 7 × 16 = 112, and F is 15, so 112 + 15 = **127**.

For a 16-bit value, 012C is 0 × 4096 + 1 × 256 + 2 × 16 + 12 = 300, which is 0000000100101100 in binary.

## Part 5: adding two 8-bit binary integers

Add column by column from the right, using these rules:

- 0 + 0 = 0
- 0 + 1 = 1
- 1 + 1 = 0 carry 1
- 1 + 1 + 1 (with a carry in) = 1 carry 1

**Example:** add 01101110 (110) and 00110111 (55).

```
  01101110
+ 00110111
----------
  10100101
```

Working from the right: 0 + 1 = 1. 1 + 1 = 0 carry 1. 1 + 1 + 1 = 1 carry 1. 1 + 0 + 1 = 0 carry 1. 0 + 1 + 1 = 0 carry 1. 1 + 1 + 1 = 1 carry 1. 1 + 0 + 1 = 0 carry 1. 0 + 0 + 1 = 1. The result is 10100101, which is 165. Check: 110 + 55 = 165.

### Overflow

An 8-bit register can hold values from 0 to 255 only. If the true answer is greater than 255, it needs a ninth bit that does not exist. This is an **overflow error**.

**Example:** add 11001000 (200) and 01100100 (100). The true total is 300, which is 100101100 in binary and needs nine bits. The 8-bit register would keep only 00101100 (44), which is wrong. The computer has a predefined limit on what it can store, and a value outside that limit should have been returned.

## Part 6: logical binary shifts

A **logical shift** moves every bit in the register left or right by a number of places. Bits pushed off the end are **lost**, and **zeros** are shifted in at the opposite end.

- A **left shift** by one place multiplies the number by 2. Two places multiply by 4, three by 8, and so on.
- A **right shift** by one place divides the number by 2. Two places divide by 4, three by 8.

**Example 1:** left shift 00010110 (22) by two places. The bits move left, the two leftmost bits (0 and 0) are lost and two zeros enter on the right. Result: 01011000, which is 88 (22 × 4).

**Example 2:** right shift 10110100 (180) by three places. The three rightmost bits (1, 0, 0) are lost and three zeros enter on the left. Result: 00010110, which is 22. The exact answer 22.5 cannot be kept, because the least significant bits were lost.

**Example 3:** left shift 10110100 (180) by one place. The most significant bit (a 1) is lost. Result: 01101000, which is 104, not 360. A left shift only multiplies correctly while no 1s fall off the left end.

## Part 7: two's complement

Two's complement lets an 8-bit register hold **positive and negative** integers. The left-hand bit has a place value of **−128** instead of +128. The other place values stay the same.

| −128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|---|---|---|---|---|---|---|---|

The range of 8-bit two's complement is **−128 to +127**. A negative number always has 1 in the leftmost bit.

### Two's complement binary to denary

**Example:** convert 10001010 to denary. The −128 column is 1, then 8 + 2 = 10. So −128 + 10 = **−118**.

### Denary to two's complement binary

**Example:** convert −45 to 8-bit two's complement.

1. Write 45 as positive 8-bit binary: 00101101.
2. Invert every bit (swap 0 and 1): 11010010.
3. Add 1: 11010011.

The answer is **11010011**. Check: −128 + 64 + 16 + 2 + 1 = −45.

To convert back, you can use the same two steps (invert, then add 1) to get the positive value, or use the −128 place value method above.

Positive numbers keep their usual form with a leading 0, so +45 is 00101101.

## Common mistakes

- **Forgetting leading zeros.** An 8-bit answer must have eight bits, so 22 is 00010110, not 10110.
- **Reading hex letters wrongly.** B is 11, not 12.
- **Grouping bits from the left** when converting to hex. Always start from the right.
- **Calling a lost bit an error in the shift.** Lost bits are expected; say that the number is no longer an exact multiple or division.
- **Saying overflow only happens in one place.** It happens whenever a result is beyond what the register can hold, such as above 255 in an 8-bit unsigned register.
- **Using the wrong tool for negatives.** A leading 1 in two's complement means the number is negative, but 10110101 as a plain binary integer is 181.

## Exam technique

- **Show your working.** Place values above the bits earn method marks even if you slip on the final addition.
- **Check by converting back.** It takes ten seconds.
- **For "explain why hexadecimal is used"**, say that it is shorter than binary and easier for humans to read, and give an example of where it is used.
- **For "describe the effect of a shift"**, state the direction, say what happens to the lost bits and the zeros, and say how the value is multiplied or divided.

## Quick check

1. Convert 00111010 to denary. *58 (32 + 16 + 8 + 2).*
2. Convert 251 to hexadecimal. *FB (251 ÷ 16 = 15 remainder 11).*
3. Add 01001101 and 00111010. *10000111 (77 + 58 = 135).*
4. State the result of shifting 01100100 right by two places. *00011001 (25).*
5. Give the 8-bit two's complement form of −3. *11111101.*

## Continue with

Revise with the [Data Representation revision notes](/resources/o-level-computer-science-data-representation-revision-notes/) and practise with the [Number systems practice questions](/resources/cambridge-o-level-computer-science-2210-number-systems-practice/).
