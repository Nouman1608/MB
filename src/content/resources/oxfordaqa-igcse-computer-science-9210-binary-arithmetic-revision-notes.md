---
title: "OxfordAQA IGCSE Computer Science (9210): Binary arithmetic -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 Binary Arithmetic Notes"
resourceType: "revision-notes"
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
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.3.4: binary addition with carries, logical shifts left and right, uses of shifts and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.3.4 Binary arithmetic** of OxfordAQA International GCSE Computer Science (9210).
Worked examples are in the [Binary arithmetic study
guide](/resources/oxfordaqa-igcse-computer-science-9210-binary-arithmetic/).

## What the specification asks

- **Add** two binary numbers. Maximum **8 bits**; the answer is at most 8 bits; no carry beyond the eighth bit.
- Apply a **binary shift** to a binary number. Maximum 8 bits; **logical shift only**; no fractions.
- **Describe situations** where shifts are used: simple multiplication or division by **powers of 2**.

## Binary addition rules

| Column sum | Write | Carry |
|---|---|---|
| 0 + 0 | 0 | 0 |
| 0 + 1 | 1 | 0 |
| 1 + 1 | 0 | 1 |
| 1 + 1 + 1 (with a carry in) | 1 | 1 |

Work from the **right** to the **left**. Add the two bits and any carry into the column.

### Example: 0100 1101 + 0101 0101

(77 + 85 = 162)

| Column | Bit 1 | Bit 2 | Carry in | Result | Carry out |
|---|---|---|---|---|---|
| 1 | 1 | 1 | 0 | 0 | 1 |
| 2 | 0 | 0 | 1 | 1 | 0 |
| 3 | 1 | 1 | 0 | 0 | 1 |
| 4 | 1 | 0 | 1 | 0 | 1 |
| 5 | 0 | 1 | 1 | 0 | 1 |
| 6 | 0 | 0 | 1 | 1 | 0 |
| 7 | 1 | 1 | 0 | 0 | 1 |
| 8 | 0 | 0 | 1 | 1 | 0 |

Reading from column 8 to column 1 gives **1010 0010**, which is 128 + 32 + 2 = 162.

**Check:** convert the numbers and the answer to decimal. Make sure no carry is forgotten.

## Logical binary shifts

A shift moves all the bits sideways. Empty places are filled with **0**. Bits shifted off the end are **lost**.

| Shift | Bits | Value |
|---|---|---|
| Left by n | Move left; n zeros enter on the right | × 2ⁿ |
| Right by n | Move right; n zeros enter on the left | ÷ 2ⁿ, whole-number part only |

### Examples

| Start | Shift | Result | Meaning |
|---|---|---|---|
| 0000 0101 (5) | Left 3 | 0010 1000 (40) | 5 × 8 |
| 0001 0110 (22) | Left 1 | 0010 1100 (44) | 22 × 2 |
| 0000 1001 (9) | Left 2 | 0010 0100 (36) | 9 × 4 |
| 1100 1000 (200) | Right 2 | 0011 0010 (50) | 200 ÷ 4 |
| 1011 0000 (176) | Right 4 | 0000 1011 (11) | 176 ÷ 16 |
| 0001 0101 (21) | Right 2 | 0000 0101 (5) | 21 ÷ 4 = 5.25, so 5 |

### Bits lost

- A left shift can push a 1 off the left end. 0010 0011 (35) shifted left by 3 gives 0001 1000 (24), not 280,
  because the leading 1 has been lost.
- A right shift loses the right-hand bits, so 21 shifted right by 2 gives 5, not 5.25. The remainder is discarded.

## Uses of shifts

- Multiply a whole number by 2, 4, 8, 16 ... (left shift by 1, 2, 3, 4 ...).
- Divide a whole number by 2, 4, 8, 16 ... (right shift) and keep the whole-number part.
- A quick operation for a processor compared with a general multiplication.

Sentence to use: "A left shift by n places multiplies by 2 to the power n; a right shift by n places divides by 2 to
the power n."

## Checking by converting to decimal

Convert both numbers and the answer to decimal. For 0100 1101 + 0101 0101, 77 + 85 = 162, and 1010 0010 = 128 + 32 + 2 =
162, so the addition is right. For a shift, multiply or divide by the power of 2 and compare: 0000 0101 shifted left by 3 is
5 × 8 = 40 = 0010 1000.

## Exam traps

- **Forgetting a carry.** 1 + 1 is 0 with a carry of 1.
- **Writing 1 + 1 = 2** in a column of the answer.
- **Adding from the left.** Start at the right.
- **Not filling shifted places with 0.** The answer must have eight bits.
- **Wrong direction.** Left multiplies, right divides.
- **Keeping a lost bit.** A 1 shifted out of the left end is gone.
- **Giving a fraction** after a right shift. The shift discards the remainder.
- **Using other shifts.** Only the logical shift is on the specification.
- **Only saying "faster".** Say that it multiplies or divides by a power of 2.

## Key terms

| Term | Meaning |
|---|---|
| Carry | The 1 passed to the next column when a column totals 2 or more |
| Logical shift | A shift where empty places are filled with 0 and bits that fall off the end are lost |
| Power of 2 | 2, 4, 8, 16 and so on |
| Overflow | A result too large to fit in the available bits |

## Self-test

1. Add 0000 0101 and 0000 0011.
2. Add 0101 1011 and 0010 0100.
3. Add 0001 1011 and 0000 0111.
4. Add 0011 0110 and 0100 1010 and state the decimal value of the answer.
5. Shift 0000 0110 left by 2 and state the decimal result.
6. Shift 0110 1000 right by 3 and state the decimal result.
7. Shift 0000 1101 right by 2 and explain why the result is not 3.25.
8. State what a left shift by 3 does to the value.
9. Explain why shifting 1100 0000 left by 1 does not double the value.
10. State one use of a binary shift.

**Answers:**
1. 0000 1000 (5 + 3 = 8).
2. 0111 1111 (91 + 36 = 127).
3. 0010 0010 (27 + 7 = 34).
4. 1000 0000, which is 128 (54 + 74).
5. 0001 1000, which is 24.
6. 0000 1101, which is 13 (104 ÷ 8).
7. The result is 0000 0011, which is 3, because the bits shifted out of the right-hand end are lost, and so the remainder is discarded.
8. Multiplies it by 8.
9. The leading 1 is shifted out of the left end and lost, so the result is 1000 0000 (128), not 384, which does not fit in 8 bits.
10. For example, a quick way to multiply or divide by a power of 2.

## More resources on this topic

- [Binary arithmetic study guide](/resources/oxfordaqa-igcse-computer-science-9210-binary-arithmetic/)
- [Binary arithmetic practice questions](/resources/oxfordaqa-igcse-computer-science-9210-binary-arithmetic-practice/)
- [Character encoding revision notes](/resources/oxfordaqa-igcse-computer-science-9210-character-encoding-revision-notes/)
