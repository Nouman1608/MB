---
title: "Cambridge A Level Computer Science (9618): Bit manipulation"
resourceType: "study-guides"
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
description: "Study guide to Cambridge 9618 section 4.3: logical, arithmetic and cyclic shifts, and AND, OR and XOR masks to test, set, clear and toggle bits for a device."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "Please check the description of an arithmetic left shift against the course textbook in use; conventions on whether the sign bit is held fixed differ between sources."
publishedDate: 2026-11-18
featured: false
---

Section 4.3 Bit manipulation of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026 is AS content assessed on Paper 1, Theory Fundamentals. It has two learning outcomes: "show understanding of and perform binary shifts" (logical, arithmetic and cyclic; left and right), and "show understanding of how bit manipulation can be used to monitor/control a device", including carrying out bit manipulation operations and testing and setting a bit using bit masking. The syllabus adds AND, OR, XOR, LSL and LSR to the instruction set used in questions, and labels for instructions and data.

The [Processor Fundamentals study guide](/resources/a-level-computer-science-processor-fundamentals/) includes one masking example. This page covers every shift type and builds complete assembly language fragments for monitoring and controlling a device. Recall: [bit manipulation revision notes](/resources/cambridge-a-level-computer-science-9618-bit-manipulation-revision-notes/) · Questions: [bit manipulation practice set](/resources/cambridge-a-level-computer-science-9618-bit-manipulation-practice/).

## Numbering bits

In an 8-bit value, bits are usually numbered 7 (most significant, left) down to 0 (least significant, right). Bit n has the place value 2ⁿ, so bit 3 is worth 8. Questions sometimes number from the left or from 1, so read the definition given.

## Shifts

A shift moves every bit a set number of places to the left or right. What fills the empty positions, and what happens to the bits pushed out, depends on the type.

### Logical shifts

Zeros enter at the vacated end; bits pushed out are lost (the last one out typically goes into the carry flag).

```
LSL #2:  00010110 (22)  →  01011000 (88)    × 4
LSR #1:  10010110 (150) →  01001011 (75)    ÷ 2
```

For unsigned numbers, a logical left shift by n multiplies by 2ⁿ and a logical right shift by n divides by 2ⁿ, discarding any remainder. A logical left shift goes wrong if a 1 is pushed out of the left: 11000001 LSL #1 gives 10000010, because the leading 1 is lost.

### Arithmetic shifts

Arithmetic shifts treat the value as a signed two's complement number and preserve its sign, so they can multiply or divide signed values.

- **Arithmetic right shift**: the sign bit is copied into the vacated positions on the left.

```
11101000 (−24), arithmetic right shift 1 → 11110100 (−12)
```

A logical right shift of the same value would give 01110100 (+116): the sign is lost, which is why the arithmetic version exists.

- **Arithmetic left shift**: bits move left and zeros enter on the right, as in a logical left shift, with the result read as a signed number. The result is correct only while the sign bit does not need to change; if a bit different from the sign bit would move into the sign position, the result has overflowed.

### Cyclic shifts (rotation)

Bits pushed out at one end re-enter at the other, so no bits are lost.

```
10110001, cyclic left shift 1  → 01100011
10110001, cyclic right shift 1 → 11011000
```

Cyclic shifts are useful when every bit must be examined in turn and the original value restored: after eight single cyclic shifts of an 8-bit value, it is back where it started.

### Worked example 1: multiplying by 10 with shifts

x × 10 = (x × 8) + (x × 2). The fragment below multiplies the value at NUM (13) by 10.

```
       LDD NUM      ; ACC = 00001101 (13)
       LSL #1       ; ACC = 00011010 (26)
       STO TEMP
       LDD NUM      ; ACC = 00001101
       LSL #3       ; ACC = 01101000 (104)
       ADD TEMP     ; ACC = 10000010 (130)
       STO RESULT
       END
NUM:   13
TEMP:  0
RESULT: 0
```

This needs only a few instructions, whereas repeated addition needs one pass of a loop for every unit of the multiplier.

## Bit masks

A **mask** is a binary value used with AND, OR or XOR to work on chosen bits while leaving others unchanged.

| Operation | Mask bits | Effect on chosen bits | Effect on other bits | Use |
|---|---|---|---|---|
| AND | 1 where you want to keep, 0 elsewhere | Kept | Cleared to 0 | **Test** a bit; **clear** bits |
| OR | 1 where you want to set | Set to 1 | Unchanged | **Set** a bit |
| XOR | 1 where you want to flip | Inverted | Unchanged | **Toggle** a bit |

To **clear** one bit, AND with a mask that has 0 in that position and 1 everywhere else.

## Monitoring and controlling a device

Many devices are connected to the processor through registers or memory locations in which each bit has a meaning. This lets one byte report or control eight separate things.

**Worked example 2: a home security panel.** An 8-bit location SENSORS is updated by the hardware:

| Bit | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|---|---|---|---|---|---|---|---|---|
| Meaning | unused | unused | unused | unused | motion detected | window open | back door open | front door open |

A second location, CONTROL, is read by the hardware: bit 0 switches the siren on, bit 1 switches the porch light on, and bit 7 is a "panel armed" indicator.

**Monitoring: test bit 3.**

```
       LDD SENSORS      ; e.g. 00101010
       AND B00001000    ; keep bit 3 only → 00001000
       CMP B00001000    ; was bit 3 a 1?
       JPE MOTION       ; yes: jump to the routine that handles motion
```

AND keeps only bit 3, so the result is either 00001000 (motion) or 00000000 (no motion), whatever the other sensors show.

**Monitoring several bits at once.** Are both doors closed? AND with B00000011 keeps bits 0 and 1. If the result is 0, both doors are closed:

```
       LDD SENSORS
       AND B00000011
       CMP #0
       JPE DOORSOK
```

**Control: set bit 1 (porch light on) without changing anything else.**

```
       LDD CONTROL      ; e.g. 10000001
       OR B00000010     ; → 10000011
       STO CONTROL
```

**Control: clear bit 7 (disarm) without changing anything else.**

```
       LDD CONTROL      ; 10000011
       AND B01111111    ; → 00000011
       STO CONTROL
```

**Control: toggle bit 0 (siren on/off).**

```
       LDD CONTROL      ; 00000011
       XOR B00000001    ; → 00000010
       STO CONTROL
```

Notice the pattern: always **load, apply the mask, store**. Writing a whole new value instead, for example LDM #2 then STO CONTROL, would switch the light on but also wipe every other bit, which is why masks are used.

## Common mistakes

- Using OR to test a bit: OR changes bits; testing uses AND.
- Clearing a bit with a mask of 0s everywhere except the target (that clears everything else instead).
- Forgetting to STO the result, so the device never sees the change.
- Using a logical right shift on a negative number and expecting a negative result.
- Counting bit positions from the wrong end.
- Saying a cyclic shift loses bits.

## Exam technique

- **Perform a shift**: write the 8 bits before and after, stating what entered at the vacated end.
- **Explain a mask**: name the operation, give the mask in binary and say which bits change and which stay the same.
- **Write code to test a bit**: LDD, AND mask, CMP, then JPE or JPN to the right label.
- **Write code to set, clear or toggle**: LDD, OR/AND/XOR mask, STO.

Next: condense the rules with the [bit manipulation revision notes](/resources/cambridge-a-level-computer-science-9618-bit-manipulation-revision-notes/), then try the [bit manipulation practice questions](/resources/cambridge-a-level-computer-science-9618-bit-manipulation-practice/). The rest of the instruction set is explained in the [assembly language study guide](/resources/cambridge-a-level-computer-science-9618-assembly-language/).

## Official syllabus

Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, Subject content, section 4.3 Bit manipulation, including its instruction set. Published by Cambridge International.
