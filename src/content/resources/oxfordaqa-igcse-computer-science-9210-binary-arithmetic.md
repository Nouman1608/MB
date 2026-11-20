---
title: "OxfordAQA IGCSE Computer Science (9210): Binary arithmetic -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Binary Arithmetic Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Data representation"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 3.04
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-9210"
  - qualification: "igcse"
    topic: "data-representation-9210"
    subtopic: "binary-arithmetic-9210"
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.3.4: adding two 8-bit binary numbers, logical binary shifts and their use for multiplying and dividing by powers of 2."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.3.4 Binary arithmetic** of OxfordAQA International GCSE Computer Science (9210). You
must be able to **add together two binary numbers**, to **apply a binary shift** to a binary number, and to
**describe situations where binary shifts can be used**. The additional information sets firm limits. Numbers have a
**maximum of 8 bits**. Answers to additions are **at most 8 bits** and "will not involve carrying beyond the eighth
bit". Only a **logical binary shift** is used. You do not need fractional representations. Shifts "can be used to
perform simple multiplication/division by powers of 2".

## Adding two binary numbers

Binary addition is like decimal column addition, except that a column holds only the digits 0 and 1. You add from the
**right** to the **left**, and carry into the next column when a column total reaches 2 or more.

There are only four possible results for a column that also receives a carry of 0 or 1:

| Column total | Write | Carry |
|---|---|---|
| 0 + 0 = 0 | 0 | 0 |
| 0 + 1 = 1 | 1 | 0 |
| 1 + 1 = 2 (binary 10) | 0 | 1 |
| 1 + 1 + 1 = 3 (binary 11) | 1 | 1 |

Remember that 1 + 1 gives 10 in binary: **write 0 and carry 1**. Three 1s give 11: **write 1 and carry 1**.

### Worked example 1: 0010 1101 + 0001 1011

In decimal this is 45 + 27. Work column by column from the right (column 1).

| Column | First number | Second number | Carry in | Result bit | Carry out |
|---|---|---|---|---|---|
| 1 (units) | 1 | 1 | 0 | 0 | 1 |
| 2 | 0 | 1 | 1 | 0 | 1 |
| 3 | 1 | 0 | 1 | 0 | 1 |
| 4 | 1 | 1 | 1 | 1 | 1 |
| 5 | 0 | 1 | 1 | 0 | 1 |
| 6 | 1 | 0 | 1 | 0 | 1 |
| 7 | 0 | 0 | 1 | 1 | 0 |
| 8 | 0 | 0 | 0 | 0 | 0 |

Reading the result bits from column 8 to column 1 gives **0100 1000**. Check in decimal: 64 + 8 = 72, and 45 + 27 = 72.

### Worked example 2: 0110 1011 + 0011 0101

In decimal this is 107 + 53 = 160. Written in columns, with the carry into each column shown above it:

```
 carries:  1 1 1 1 1 1 1 0
           0 1 1 0 1 0 1 1
         + 0 0 1 1 0 1 0 1
           ---------------
           1 0 1 0 0 0 0 0
```

The answer is **1010 0000**, which is 128 + 32 = 160. The numbers have eight bits and the sum fits in eight bits, so
there is no carry out of the eighth column.

### Worked example 3: 0011 1011 + 0010 0110

In decimal this is 59 + 38 = 97. The result is **0110 0001**, which is 64 + 32 + 1 = 97. In the units column, 1 + 0 = 1 with no
carry; in the second column, 1 + 1 = 10, so write 0 and carry 1; the carry then ripples up through the higher columns.

### Checking an addition

1. Convert both numbers and the answer to decimal and check that the sum is right.
2. Check that the units bit is correct: the units bit of the answer is 1 only if exactly one of the two units bits is
   1 (with no carry into that column).
3. Check that you have not forgotten a carry. A forgotten carry is the most common error.

## Binary shifts

A **binary shift** moves every bit in a binary number a number of places to the left or to the right. The
specification only requires a **logical shift**, where the empty places are filled with **0**s and the bits that are
shifted out of the number are **lost**.

### Shift left

In a **left shift** each bit moves to the left, the leftmost bits fall off the end, and zeros enter on the right.

**Left shift by 2: 0000 0110** (6).

- Move every bit two places to the left: 0001 1000.
- The two new places on the right are filled with 0.

The result is 0001 1000, which is 24. Notice that 24 = 6 × 4. A left shift by 1 **doubles** the number, by 2 gives
× 4, and by 3 gives × 8.

**Left shift by 3: 0000 1101** (13) gives 0110 1000, which is 104 = 13 × 8.

### Shift right

In a **right shift** each bit moves to the right, the rightmost bits fall off the end, and zeros enter on the left.

**Right shift by 3: 0010 1000** (40) gives 0000 0101, which is 5 = 40 ÷ 8.

A right shift by 1 **halves** the number, by 2 divides by 4, and by 3 divides by 8.

**Right shift by 2: 0000 1101** (13) gives 0000 0011, which is 3. The bits 01 at the right-hand end have been lost. The
true result of 13 ÷ 4 is 3.25, so the shift gives the whole-number part. Right shifts never produce fractions
in this specification; they **round down** by throwing away the bits that fall off.

### What happens when bits are lost

If a 1 is shifted off the left of an 8-bit number, the value is wrong, because the answer cannot fit into 8 bits.

**Left shift by 1: 1010 0110** (166). Shifting gives 0100 1100 (76), not 332, because the leading 1 is lost.

This is why you check that the leading bits are 0 before you use a left shift as a multiplication. In exam questions
you will usually be asked to show the shifted pattern, and you should show the lost bit rather than try to recover it.

### Summary of shifts

| Shift | Effect on the bits | Effect on the value |
|---|---|---|
| Left by n places | Bits move left; n zeros enter on the right; bits that pass the left end are lost | Multiplies by 2ⁿ (provided no 1 is lost) |
| Right by n places | Bits move right; n zeros enter on the left; bits that pass the right end are lost | Divides by 2ⁿ, ignoring any remainder |

## When are binary shifts used?

The specification wants you to describe situations where shifts are used. The main idea is that a shift is a fast, simple
way to **multiply or divide by a power of 2** (2, 4, 8, 16 and so on).

- Multiplying a whole number by 2, 4 or 8, for example to double a value or to scale it.
- Dividing a whole number by 2, 4 or 8 and keeping the whole-number part.
- Moving to a different position in a pattern of bits, as when processing data stored in groups of bits.

On a processor, a shift is a quick operation compared with a full multiplication, which is why programmers sometimes
use it. A good exam answer says: "a left shift by n places multiplies the number by 2 to the power n, and a right shift
by n places divides it by 2 to the power n".

### Worked example 4: using a shift to multiply

Multiply the binary number 0001 1001 (25) by 2 using a binary shift. Shift left by one place: **0011 0010**, which is
50. This is correct because the leading bits were 0, so no 1 was lost.

### Worked example 5: using a shift to divide

Divide 0011 0010 (50) by 4. Shift right by two places: 0000 1100, which is **12**. The exact answer is 12.5, and the lost bits (10) account for
the remainder, so the shift gives 12.

## Common mistakes

- Forgetting to **carry** when 1 + 1 gives 10.
- Adding from the left instead of from the **right**.
- Writing 1 + 1 = 2 in a column. A column holds only 0 or 1: write **0 and carry 1**.
- Writing the carry beneath the next column's answer, but then forgetting to include it in the addition.
- Moving the bits but not **filling the empty places with zeros**, so the number has the wrong length.
- Shifting in the wrong direction. **Left** gets bigger (×), **right** gets smaller (÷).
- Giving a left shift result with more than 8 bits. The bits that go beyond the eighth place are **lost**.
- Describing the use of shifts as "faster" and nothing else. The key idea is multiplying or dividing by powers of 2.
- Using an arithmetic or circular shift. Only the logical shift is required here.

## Exam technique

- **Addition:** write the two numbers one above the other with the columns aligned, and write the carries above the
  next column. Show your carries, since examiners award marks for method.
- **Shift:** show the original pattern, then write the new eight-bit pattern. Count the bits, because the answer must be
  8 bits long.
- **Describe a use:** say that a shift multiplies or divides by a power of 2, and give the number of places to
  the power, such as "left shift by 3 multiplies by 8".
- **Check by converting** to decimal if you have time, for both additions and shifts.

## Next steps

For a condensed summary and self-test, use the [Binary arithmetic revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-binary-arithmetic-revision-notes/), and practise with the
[Binary arithmetic practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-binary-arithmetic-practice/).
