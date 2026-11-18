---
title: "Cambridge A Level Computer Science (9618): Bit manipulation -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original questions with mark-scheme answers on Cambridge 9618 section 4.3: logical, arithmetic and cyclic shifts, bit masks and device monitoring code."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers available from your board.

These questions practise section 4.3 Bit manipulation of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026. All values are 8 bits, and bits are numbered 7 (left) to 0 (right). Code uses the syllabus instruction set (including AND, OR, XOR, LSL and LSR) with the Accumulator as the only general purpose register. Revise first with the [bit manipulation study guide](/resources/cambridge-a-level-computer-science-9618-bit-manipulation/) and the [bit manipulation revision notes](/resources/cambridge-a-level-computer-science-9618-bit-manipulation-revision-notes/).

## Section A

**1.** Explain the difference between a logical right shift and an arithmetic right shift. **[2]**

**2.** The ACC holds 00011011. Give the contents of the ACC after LSL #2 and state the effect on the denary value. **[2]**

**3.** The ACC holds 11001000, an unsigned integer. Give the contents after LSR #3 and the denary value before and after. **[2]**

**4.** The two's complement value 11010100 is shifted one place right using an arithmetic shift. Give the result in binary and in denary. **[2]**

**5.** Perform a cyclic right shift of two places on 01100111. **[1]**

**6.** The ACC holds 10011100. Give the result of each operation.

**(a)** AND B00111100 **[1]**

**(b)** OR B00111100 **[1]**

**(c)** XOR B00111100 **[1]**

**7.** State the operation and the mask needed to:

**(a)** set bit 5 **[1]**

**(b)** clear bit 0 **[1]**

**(c)** toggle bit 7 **[1]**

leaving all other bits unchanged.

## Section B

**8.** The ACC holds 10000110, an unsigned integer. Explain why LSL #1 does not double its value. **[2]**

**9.** A greenhouse controller reads an 8-bit location SENSORS. Bit 2 is 1 when the temperature is too high. Write assembly language code to test bit 2 and jump to the label HOT if it is set. **[4]**

**10.** The same controller writes to an 8-bit location OUTPUTS. Bit 4 switches the fan on and bit 1 switches the heater on.

**(a)** Write code to switch the fan on without changing any other bit. **[3]**

**(b)** Write code to switch the heater off without changing any other bit. **[3]**

**11.** Trace this code and give the final contents of RESULT in binary and denary. VALUE holds 00101101.

```
LDD VALUE
AND B00001111
LSL #2
STO RESULT
END
```

**[3]**

**12.** Explain **two** reasons why bit manipulation is suitable for monitoring and controlling devices such as those in question 9. **[2]**

**13.** A program must examine each of the 8 bits of a value in turn and leave the value unchanged when it has finished. Explain why it should use a cyclic shift rather than a logical shift. **[2]**

**14.** An 8-bit location LIGHTS controls eight lamps on a stage, one per bit. Write code that changes the state of the lamps controlled by bits 0 and 3, whatever their current state, and leaves the other lamps unchanged. Explain your choice of operation. **[3]**

## Answers

**1.** In a logical right shift, zeros are moved into the vacated positions on the left [1]; in an arithmetic right shift, the sign bit is copied into the vacated positions, so a negative two's complement number stays negative [1]. **[2]**

**2.** **01101100** [1]; the value is multiplied by 4, from 27 to 108 [1]. **[2]**

*Examiner insight:* Shifting left by n places multiplies by 2ⁿ, so two places means × 4. State both denary values to show the effect rather than just naming it.

**3.** **00011001** [1]; 200 before and 25 after (divided by 8) [1]. **[2]**

**4.** **11101010** [1]; −44 becomes **−22** [1]. **[2]**

*Examiner insight:* A 1 enters on the left because the sign bit is copied. A logical shift would have given 01101010, a positive number, which is the error this question is designed to expose.

**5.** **11011001** [1]. **[1]**

**6. (a)** **00011100** [1].

**(b)** **10111100** [1].

**(c)** **10100000** [1]. **[3]**

**7. (a)** OR with B00100000 [1].

**(b)** AND with B11111110 [1].

**(c)** XOR with B10000000 [1]. **[3]**

**8.** The leftmost bit is 1, and a logical left shift pushes it out of the register, where it is lost [1]; the result is 00001100 (12), not 268, because 268 is too large for 8 bits [1]. **[2]**

**9.**

```
LDD SENSORS
AND B00000100
CMP B00000100
JPE HOT
```

LDD SENSORS [1]; AND with the mask B00000100 (or #4) [1]; CMP with B00000100 (or compare with 0 and use JPN) [1]; JPE HOT [1]. **[4]**

**10. (a)** LDD OUTPUTS [1]; OR B00010000 [1]; STO OUTPUTS [1].

**(b)** LDD OUTPUTS [1]; AND B11111101 [1]; STO OUTPUTS [1]. **[6]**

**11.** After AND the ACC holds 00001101, keeping only the low four bits [1]; after LSL #2 it holds 00110100 [1]; RESULT = **00110100 = 52** [1]. **[3]**

**12.** Each bit can represent one sensor or device, so a single byte stores up to eight states compactly [1]; masks allow one bit to be tested or changed without affecting the others, using fast single instructions [1]. **[2]**

**13.** A logical shift loses each bit pushed out of the register, so after eight shifts the value would be 0 [1]; a cyclic shift puts each bit back in at the other end, so every bit can be examined and after eight single shifts the original value is restored [1]. **[2]**

**14.** LDD LIGHTS; XOR B00001001; STO LIGHTS [2] (one mark for the correct XOR mask, one for loading and storing LIGHTS). XOR with a 1 inverts a bit whatever its current value, while XOR with 0 leaves a bit unchanged, so only lamps 0 and 3 change state [1]. **[3]**

*Examiner insight:* OR would switch the two lamps on but never off, and AND would switch them off but never on; only XOR toggles.

## Where marks are usually lost

- Testing a bit with OR, which changes the value instead of reading it.
- Writing a clear mask with a single 1 instead of a single 0.
- Forgetting the STO, so the output location never changes.
- Using a logical shift on a signed negative number.
- Counting bit positions from the left when the question counts from the right.
- Losing track of bits shifted out of a register.
