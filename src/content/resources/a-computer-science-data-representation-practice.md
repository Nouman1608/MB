---
title: "A Level Computer Science: Information Representation — Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Information representation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2027-2029"
order: 1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "information-representation"
description: "Original exam-style practice questions with full worked answers on two's complement, overflow, character sets and compression for AS Computer Science. Floating point is full-A-Level-only content and is not covered by these AS-stage questions."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Information Representation revision notes](/resources/a-computer-science-data-representation-revision-notes/)

---

## Section A

**1.** Represent −45 in 8-bit two's complement, showing your working. **[3]**

**2.** State the range of values representable in 8-bit two's complement. **[2]**

## Section B

**3.** Perform the following in 8-bit two's complement, stating whether overflow occurs:

**(a)** 00110101 + 01011010 **[3]**
**(b)** 01000000 − 11000000 **[3]**

**4.** An 8-bit register performs the unsigned addition 11111111 + 00000001.

**(a)** State the 8-bit result stored in the register, and whether the **carry flag** is set. **[2]**
**(b)** Explain why the **overflow flag** is not the correct flag to check for this case, and describe the situation in which the overflow flag would be set instead. **[3]**

**5.** State **two** reasons why hexadecimal, rather than binary, is used to represent values such as memory addresses and colour codes. **[2]**

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

**4. (a)** The true sum is 100000000 (9 bits), but the 8-bit register can only store the lower 8 bits, so the stored result is **00000000** [1]; because an unsigned result exceeded the register's range, the **carry flag is set** [1].
**(b)** The overflow flag detects **invalid signed (two's complement) results** — for example, adding two positive numbers and getting a result with a negative sign bit, or adding two negatives and getting a positive sign bit [1] [1]. This addition is being evaluated as **unsigned**, so the relevant boundary is the register's unsigned range (255), not the sign bit, which is why the carry flag — not the overflow flag — is the one that applies here [1].

**5.** Any two, 1 mark each: hexadecimal is **far more compact than binary**, so long binary values such as memory addresses are shorter and easier for people to read, write and compare [1]; each hex digit maps to **exactly four binary digits**, making conversion between the two trivial [1]; using hexadecimal **reduces the chance of human transcription error** compared with copying out long strings of 1s and 0s [1].

**6.** Run-length encoding **replaces a run of identical consecutive values with the value and a count of how many times it repeats** [1] [1]. AAAABBBCCCCCCD becomes **4A3B6C1D** [1] — from 14 characters to 8.
It would **increase the file size where there are few or no repeated runs** [1], for example ABCDEFG, which would become 1A1B1C1D1E1F1G — twice the length [1].

**7.** Split into 4-bit groups from the right: 1011 0110 [1] → **B6** [1]. Hexadecimal is used in preference to binary because it is far more compact and each hex digit maps to exactly four binary digits, making conversion straightforward.

**8.** A logical left shift by 2 gives 00001100, equivalent to **multiplying by 4** (2² = 4) [1]. A logical right shift would **discard the sign bit and turn a negative number positive** [1]; an arithmetic right shift **preserves the sign bit**, so it works correctly on negative two's complement values [1].

**9.** File size = width × height × colour depth = 200 × 150 × 8 [1] = **240,000 bits** [1].

**10.** Advantage: Unicode can represent **a very wide range of the world's writing systems**, not just Latin script [1]. Cost: Unicode text can require **more storage per character** than ASCII — though UTF-8, the most common Unicode encoding, keeps plain ASCII characters at one byte, so the extra storage cost applies mainly to non-ASCII characters [1].

---

## Where marks are usually lost

- Forgetting to add 1 after inverting the bits.
- Naming the overflow flag for an unsigned range overflow — that case sets the carry flag; the overflow flag is for signed (two's complement) overflow only.
- Defining resolution as a pixel density rather than a pixel count.
- Splitting a binary number into 4-bit groups from the left rather than the right when converting to hexadecimal.
- Using a logical right shift on a negative two's complement value instead of an arithmetic one.
- Forgetting to convert file size from bits to bytes (divide by 8) when a question asks for bytes specifically.
