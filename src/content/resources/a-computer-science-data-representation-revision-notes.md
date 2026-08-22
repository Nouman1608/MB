---
title: "A Level Computer Science: Information Representation — Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed recall notes on number bases, binary arithmetic, two-s complement, floating point, character sets and compression for A Level Computer Science."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Information Representation study guide](/resources/a-level-computer-science-information-representation/).

## Number bases

```
binary  base 2    denary base 10    hexadecimal base 16
```

**Denary → binary:** repeatedly divide by 2, read the remainders **upwards**.
**Binary → denary:** add the place values where a 1 appears.
**Binary → hex:** split into groups of **4 bits from the right** and convert each nibble.

Hexadecimal is used because it is far more compact than binary and each hex digit maps to exactly **four** binary digits, making conversion trivial and human error less likely — used for memory addresses, colour codes and MAC addresses.

## Binary addition and overflow

```
0+0=0    0+1=1    1+1=10 (carry 1)    1+1+1=11 (carry 1)
```

**Overflow** occurs when the result needs more bits than are available. In an 8-bit register the largest unsigned value is 255; adding beyond that produces an incorrect result and sets the overflow flag. Explaining overflow as "the number is too big for the number of bits allocated" is the phrasing that scores.

## Signed integers — two's complement

To negate a number: **invert all the bits and add 1.**

```
+5  = 00000101
invert = 11111010
add 1  = 11111011  = -5
```

Range for n bits: **−2ⁿ⁻¹ to 2ⁿ⁻¹ − 1**. For 8 bits, −128 to +127.

**Why two's complement rather than sign-and-magnitude:** it has only **one representation of zero**, and subtraction can be performed by ordinary addition — so the hardware needs no separate subtraction circuit. That reason is the answer to the standard comparison question.

The **most significant bit indicates the sign**: 0 positive, 1 negative.

## Binary shifts

- **Logical left shift** by n → multiply by 2ⁿ.
- **Logical right shift** by n → divide by 2ⁿ, discarding the remainder.
- **Arithmetic right shift** preserves the sign bit, so it works correctly on negative two's complement values.

Using a logical right shift on a negative number turns it positive — which is why arithmetic shift exists.

## Floating point

```
number = mantissa x 2^exponent
```

Both mantissa and exponent are usually stored in **two's complement**.

**Normalisation** means adjusting the mantissa so it begins `0.1` for a positive number or `1.0` for a negative one. Two reasons, and questions want both:

1. It gives the **maximum precision** for the bits available.
2. It ensures each number has a **unique** representation.

**The fundamental trade-off:** for a fixed total word length, more mantissa bits give greater **precision** but fewer exponent bits give a smaller **range** — and vice versa. You cannot improve both.

**Floating point cannot represent all decimals exactly** — 0.1 has no finite binary representation — which is why comparing floating-point values for exact equality is unreliable and why currency is usually stored as integers of the smallest unit.

## Character sets

- **ASCII** — 7 bits, 128 characters. Extended ASCII uses 8 bits for 256.
- **Unicode** — up to 32 bits, representing every writing system in the world.

Unicode was needed because ASCII could not represent non-Latin scripts. The cost is that Unicode text can require more storage per character, which is why UTF-8 uses a variable-length encoding that keeps ASCII characters at one byte.

## Images and sound

```
image file size  = width x height x colour depth
sound file size  = sample rate x bit depth x duration x channels
```

- **Resolution** — pixels per unit area. **Colour depth** — bits per pixel; n bits give 2ⁿ colours.
- **Sample rate** — samples per second. **Bit depth** — bits per sample.

**Higher sample rate and bit depth give better quality but larger files.** That trade-off is the answer to most multimedia questions.

**Vector graphics** store objects and their properties rather than pixels, so they scale without loss and are usually smaller for line art — but are unsuitable for photographs.

## Compression

| | Lossless | Lossy |
|---|---|---|
| Data | **Fully recoverable** | Permanently discarded |
| Use | Text, program files, spreadsheets | Images, audio, video |
| Methods | Run-length encoding, dictionary encoding | JPEG, MP3 |

**Lossless must be used where every bit matters** — a compressed program or spreadsheet that lost data would be corrupt. Lossy is acceptable where the discarded data is imperceptible to human senses.

**Run-length encoding** replaces runs of identical values with a value and a count. It works well on images with large blocks of uniform colour and **badly on noisy or photographic data**, where it can produce a larger file than the original.

## Exam traps

- Forgetting to add 1 after inverting in two's complement.
- Using a logical rather than arithmetic right shift on a signed value.
- Giving only one reason for normalisation.
- Saying floating point can represent all decimals.
- Claiming lossy compression is always worse — it is appropriate for perceptual media.
- Assuming RLE always reduces file size.

## Self-test

1. Convert 202 to binary and to hexadecimal.
2. Give the two's complement of +5 in 8 bits, and the 8-bit range.
3. Why is two's complement preferred to sign-and-magnitude?
4. Give both reasons for normalising a floating-point number.
5. When is run-length encoding a poor choice?

**Answers:** 1. 11001010 and CA. 2. −5 is 11111011; the range is −128 to +127. 3. It has a single representation of zero and allows subtraction to be carried out by addition, so no separate subtraction hardware is needed. 4. It maximises the precision available from the mantissa bits, and it gives each value a unique representation. 5. On noisy or photographic data with few repeated adjacent values — it can produce a file larger than the original.
