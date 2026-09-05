---
title: "A Level Computer Science: Information Representation — Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Information representation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
order: 1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "information-representation"
description: "Original exam-style practice questions with full worked answers on two's complement, floating point, character sets and compression."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---
> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions —
> examination boards hold copyright in their own papers. Use these alongside the
> official past papers available free from your board.

Related: [Information Representation revision notes](/resources/a-computer-science-data-representation-revision-notes/)

---

## Section A

**1.** Represent −45 in 8-bit two's complement, showing your working. **[3]**

**2.** State the range of values representable in 8-bit two's complement. **[2]**

## Section B

**3.** Perform the following in 8-bit two's complement, stating whether overflow occurs:

**(a)** 00110101 + 01011010 **[3]**
**(b)** 01000000 − 11000000 **[3]**

**4.** A floating point number uses a 6-bit mantissa and a 4-bit exponent, both in two's complement.

**(a)** Convert 0.1101 × 2³ into this format. **[3]**
**(b)** Explain what normalisation means and why it is used. **[4]**
**(c)** Explain the trade-off between allocating more bits to the mantissa and more to the exponent. **[4]**

**5.** Explain **two** causes of error in floating point representation. **[4]**

**6.** Explain how run-length encoding works, apply it to the string AAAABBBCCCCCCD, and state one case where it would increase the file size. **[5]**

**7.** Convert the binary number 10110110 into hexadecimal, showing your working. **[2]**

**8.** State the effect of a logical left shift by 2 places on the 8-bit value 00000011, and explain why an arithmetic (not logical) right shift is needed for a negative two's complement number. **[3]**

**9.** Calculate the file size, in bits, of an uncompressed image measuring 200 × 150 pixels with a colour depth of 8 bits per pixel. **[2]**

**10.** State one advantage of Unicode over ASCII, and one cost of this advantage. **[2]**

---

## Answers

**1.** 45 in binary = 00101101 [1]; invert all bits = 11010010 [1]; add 1 = **11010011** [1].

**2.** **−128 to +127** [1] [1].

**3. (a)** 00110101 = 53; 01011010 = 90 [1]; sum = **10001111** [1]. Adding two positives has produced a **negative sign bit**, so **overflow occurs** — 143 exceeds +127 [1].
**(b)** 11000000 = −64, so this is 64 − (−64) = 64 + 64 [1]; result = **10000000** [1]; the sign bit is negative although both operands imply a positive result, so **overflow occurs** — 128 exceeds +127 [1].

**4. (a)** Mantissa **011010** (the leading 0 is the sign bit, then .11010) [1]; exponent 3 = **0011** [1]; full representation **011010 0011** [1].
**(b)** A normalised number has its **mantissa adjusted so that the first bit after the sign bit is different from the sign bit** — 01... for a positive number, 10... for a negative one [1] [1]. It is used so that each value has **exactly one representation**, which avoids ambiguity [1], and so that the **maximum number of significant bits is retained**, giving the greatest possible precision for the bits available [1].
**(c)** More bits in the **mantissa give greater precision** — more significant figures, so less rounding error [1] [1]. More bits in the **exponent give greater range** — much larger and much smaller magnitudes can be represented [1]. Since the total number of bits is fixed, **increasing one necessarily reduces the other**, so the designer must decide whether the application needs accuracy or reach [1].

**5.** Any two, 2 marks each: many values, such as 0.1 in denary, **cannot be represented exactly in binary**, so they are stored as the nearest available value — a rounding error [1] [1]. **Truncation** — when a result needs more bits than the mantissa provides, the surplus bits are discarded [1] [1]. **Accumulated error** — small errors compound over repeated calculations, so a long loop can produce a significantly wrong result [1] [1].

**6.** Run-length encoding **replaces a run of identical consecutive values with the value and a count of how many times it repeats** [1] [1]. AAAABBBCCCCCCD becomes **4A3B6C1D** [1] — from 14 characters to 8.
It would **increase the file size where there are few or no repeated runs** [1], for example ABCDEFG, which would become 1A1B1C1D1E1F1G — twice the length [1].

**7.** Split into 4-bit groups from the right: 1011 0110 [1] → **B6** [1]. Hexadecimal is used in preference to binary because it is far more compact and each hex digit maps to exactly four binary digits, making conversion straightforward.

**8.** A logical left shift by 2 gives 00001100, equivalent to **multiplying by 4** (2² = 4) [1]. A logical right shift would **discard the sign bit and turn a negative number positive** [1]; an arithmetic right shift **preserves the sign bit**, so it works correctly on negative two's complement values [1].

**9.** File size = width × height × colour depth = 200 × 150 × 8 [1] = **240,000 bits** [1].

**10.** Advantage: Unicode can represent **a very wide range of the world's writing systems**, not just Latin script [1]. Cost: Unicode text can require **more storage per character** than ASCII — though UTF-8, the most common Unicode encoding, keeps plain ASCII characters at one byte, so the extra storage cost applies mainly to non-ASCII characters [1].

---

## Where marks are usually lost

- Forgetting to add 1 after inverting the bits.
- Saying overflow has occurred whenever a carry is generated — check the sign bit.
- Normalising by making the first two bits the same rather than different.
- Not stating the precision/range trade-off explicitly.
- Splitting a binary number into 4-bit groups from the left rather than the right when converting to hexadecimal.
- Using a logical right shift on a negative two's complement value instead of an arithmetic one.
- Forgetting to convert file size from bits to bytes (divide by 8) when a question asks for bytes specifically.
