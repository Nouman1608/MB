---
title: "Cambridge A Level Computer Science (9618): Bit manipulation -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 4 – Processor Fundamentals"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 4.3
syllabusTopics:
  - qualification: "a-level"
    topic: "processor-fundamentals"
    subtopic: "bit-manipulation"
description: "Revision notes for Cambridge 9618 section 4.3: shift types, bit masks with AND, OR and XOR, device monitoring and control code, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "Please check the description of an arithmetic left shift against the course textbook in use; conventions on whether the sign bit is held fixed differ between sources."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 4.3 Bit manipulation of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, AS content assessed on Paper 1: binary shifts (logical, arithmetic, cyclic; left and right) and using bit manipulation to monitor and control a device, including testing and setting bits with masks. The [bit manipulation study guide](/resources/cambridge-a-level-computer-science-9618-bit-manipulation/) has worked examples; the [bit manipulation practice questions](/resources/cambridge-a-level-computer-science-9618-bit-manipulation-practice/) test them.

## Key terms

| Term | Meaning |
|---|---|
| Shift | Moving every bit in a register a number of places left or right |
| Logical shift | Zeros fill the vacated positions; bits shifted out are lost |
| Arithmetic shift | Shift that preserves the sign of a two's complement number |
| Cyclic shift (rotate) | Bits shifted out at one end re-enter at the other |
| Mask | A bit pattern combined with a value to select, set, clear or toggle bits |
| Bitwise operation | AND, OR or XOR applied to each pair of corresponding bits |
| Test a bit | Find out whether a particular bit is 1 or 0 |
| Set a bit | Make a particular bit 1 |
| Clear a bit | Make a particular bit 0 |
| Toggle a bit | Invert a particular bit |

## Shift summary

| Shift | What enters the vacated end | Bits shifted out | Use |
|---|---|---|---|
| Logical left (LSL) | 0s on the right | Lost | Unsigned × 2ⁿ |
| Logical right (LSR) | 0s on the left | Lost | Unsigned ÷ 2ⁿ (remainder discarded) |
| Arithmetic right | Copies of the sign bit on the left | Lost | Signed ÷ 2ⁿ |
| Arithmetic left | 0s on the right; sign must not change | Lost | Signed × 2ⁿ; overflow if the sign would change |
| Cyclic left / right | The bits shifted out | Re-enter at other end | Examine each bit in turn; nothing lost |

Examples (8 bits):

```
LSL #1      00110101 (53)  → 01101010 (106)
LSR #2      00110101 (53)  → 00001101 (13)
Arith. R 1  11101000 (−24) → 11110100 (−12)
Cyclic L 1  10110001       → 01100011
Cyclic R 1  10110001       → 11011000
```

## Masks

| Goal | Operation | Mask | Example |
|---|---|---|---|
| Test bit n | AND | 1 in bit n only | 00101010 AND 00001000 = 00001000 → bit 3 is 1 |
| Clear bit n | AND | 0 in bit n, 1s elsewhere | 10000011 AND 01111111 = 00000011 |
| Set bit n | OR | 1 in bit n only | 10000001 OR 00000010 = 10000011 |
| Toggle bit n | XOR | 1 in bit n only | 00000011 XOR 00000001 = 00000010 |
| Keep low nibble | AND | 00001111 | 01101101 AND 00001111 = 00001101 |
| Invert all bits | XOR | 11111111 | 01101101 XOR 11111111 = 10010010 |

Bit n has place value 2ⁿ: bit 0 = 1, bit 3 = 8, bit 7 = 128.

## Code patterns

**Test a bit and branch:**

```
LDD STATUS
AND B00010000     ; keep bit 4
CMP B00010000
JPE BITSET        ; jump if bit 4 was 1
```

**Set, clear or toggle a bit:**

```
LDD CONTROL
OR  B00000100     ; set bit 2   (use AND B11111011 to clear, XOR B00000100 to toggle)
STO CONTROL
```

Always **load → mask → store**. Writing a whole new value with LDM would overwrite the other bits.

## Why bit manipulation suits device control

- One byte can hold eight on/off states, such as sensors or switches.
- Each device can be read or changed on its own without affecting the others.
- Bitwise instructions are fast: one instruction acts on all eight bits at once.

## Exam traps

- Testing with OR instead of AND.
- Clear mask written the wrong way round (it needs a 0 only at the target bit).
- Forgetting STO after changing a control byte.
- Using a logical right shift for a negative number.
- Counting bit positions from the wrong end.
- Thinking cyclic shifts lose data.
- Forgetting that LSL can lose a 1 off the left end, giving a wrong product.

## Self-test

1. Perform LSL #3 on 00000101. What denary multiplication has taken place?
2. Perform LSR #1 on 00010111 and state the denary result.
3. Why is an arithmetic right shift used for negative numbers?
4. Perform an arithmetic right shift by 2 on 10110000.
5. Perform a cyclic left shift by 2 on 10010110.
6. Which operation and mask test whether bit 6 is set?
7. Which operation and mask clear bit 2 and keep all other bits?
8. Which operation and mask toggle bits 0 and 1?
9. CONTROL holds 01010000. What does it hold after OR B00001001?
10. STATUS holds 11001010. Is bit 3 set?
11. Why is LDM #1 followed by STO CONTROL a poor way to switch on the device controlled by bit 0?
12. What is the result of 11110000 XOR 10101010?

### Answers

1. **00101000** (40): multiplied by 2³ = 8 (5 × 8 = 40).
2. **00001011** = 11 (23 ÷ 2 = 11 remainder 1, remainder lost).
3. It copies the sign bit into the vacated positions, so the result stays negative and is the correct quotient.
4. **11101100** (−80 ÷ 4 = −20).
5. **01011010**.
6. **AND B01000000**, then compare with B01000000 (or with 0).
7. **AND B11111011**.
8. **XOR B00000011**.
9. **01011001**.
10. 11001010 AND 00001000 = 00001000, so **yes**.
11. It sets every other bit of CONTROL to 0, switching off or changing the other devices.
12. **01011010**.

## Official syllabus

Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, Subject content, section 4.3 Bit manipulation. Published by Cambridge International.
