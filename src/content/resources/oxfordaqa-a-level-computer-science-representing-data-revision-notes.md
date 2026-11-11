---
title: "OxfordAQA A-Level Computer Science: Representing data (9645) -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS Representing Data Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Representing data"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
stage: "AS"
order: 5
syllabusTopics:
  - qualification: "a-level"
    topic: "representing-data"
description: "Condensed revision notes for OxfordAQA International AS Computer Science 3.5: methods, formulas, key distinctions and a quick self-test with answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-06
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Condensed recall for the final weeks. For full explanations and worked examples, use the [Representing data study guide](/resources/oxfordaqa-a-level-computer-science-representing-data/).

These notes cover section 3.5, Representing data (3.5.1 to 3.5.8), of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams from May/June 2025 and International A-level exams from May/June 2026. The whole section is AS content, assessed in the Unit 2 written exam; none of it is International A-level only.

Links: [course hub](/boards/oxfordaqa/a-level/computer-science/) · [printable checklist](/checklists/oxfordaqa/a-level/computer-science/) · [practice questions](/resources/oxfordaqa-a-level-computer-science-representing-data-practice/) · [free diagnostics](/diagnostics/) · [exam preparation](/resources/oxfordaqa-a-level-computer-science-exam-preparation/)

## Definitions to know word for word

| Term | Meaning |
|---|---|
| Bit | The fundamental unit of information |
| Byte | A group of 8 bits |
| Unsigned binary | Represents zero and positive integers only |
| Signed binary | Can also represent negative integers (two's complement here) |
| Mantissa | The significant digits of a floating point number |
| Exponent | The power of 2 the mantissa is multiplied by |
| Overflow | A result too large to be represented in the available bits |
| Underflow | A result so close to zero that its closest representation is zero |
| Character set | A set of characters, each with a unique code |
| Colour depth | Number of bits used to represent the colour of one pixel |
| Sample resolution | Number of bits used to represent one sample |
| Sampling rate | Number of samples taken per second (Hz) |
| Key | A value, such as letters or bits, applied to plaintext by a cipher |
| Perfect security | Nothing can be learned about the plaintext from the ciphertext |
| Computationally secure | Cracking takes an unfeasible time or has a very low chance of success |
| Key exchange problem | Sharing the key without it being intercepted |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-representing-data--13-rd-caesar-cipher.webp" width="900" height="740" alt="Two alphabets are stacked. The top row is the plaintext A to Z. The bottom row is the cipher alphabet, shifted 7 places, so A becomes H, and the letters T to Z wrap round to A to G. The word SIGNAL is encrypted letter by letter, with each letter shifted by 7, to ZPNUHS. Shifting back 7 decrypts it." loading="lazy">
  <figcaption>Every letter is shifted along by the key (here 7), wrapping from Z back to A.</figcaption>
</figure>


## Formulas and facts

| What | Rule |
|---|---|
| Patterns from n bits | 2ⁿ |
| Unsigned range, n bits | 0 to 2ⁿ − 1 |
| Two's complement range, n bits | −2ⁿ⁻¹ to +2ⁿ⁻¹ − 1 |
| Binary prefixes | Ki 2¹⁰, Mi 2²⁰, Gi 2³⁰, Ti 2⁴⁰ |
| Decimal prefixes | k 10³, M 10⁶, G 10⁹, T 10¹² |
| Floating point value | mantissa × 2^exponent |
| Absolute error | stored value − true value, ignoring sign |
| Relative error | absolute error ÷ true value |
| Bitmap size (bits) | width × height × colour depth (no metadata) |
| Sound file size (bits) | sampling rate (Hz) × resolution × seconds |
| Nyquist | sampling rate ≥ 2 × highest frequency |
| ASCII | 7-bit, 2⁷ = 128 characters |
| Code blocks | digits from 48, uppercase from 65, lowercase from 97 |

Divide bits by 8 for bytes.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-representing-data--11-rd-bitmap-size.webp" width="900" height="910" alt="An illustrative 8 by 8 grid of pixels forms a simple heart, with width 8 pixels and height 8 pixels. Each pixel holds a binary colour code. For the lesson example, 1440 by 960 pixels is 1,382,400 pixels; at 12 bits each that is 16,588,800 bits, which is 2,073,600 bytes. 12 bits allow 4096 colours." loading="lazy">
  <figcaption>Bitmap storage = width x height x colour depth, then divide by 8 for bytes.</figcaption>
</figure>


## Method in steps

**Decimal to two's complement (negative)**

```
1. Write the positive value in the given number of bits.
2. Flip every bit.
3. Add 1.
e.g. −20 in 6 bits: 010100 -> 101011 -> 101100
```

**Two's complement to decimal:** give the leftmost bit a negative place value and add up. 101100 = −32 + 8 + 4 = −20.

**Subtraction:** a − b = a + (two's complement of b). Ignore any carry out of the leftmost bit.

**Floating point to decimal**

```
1. Convert the exponent from two's complement.
2. Move the mantissa's point that many places
   (right if positive, left if negative).
3. Read the result as a two's complement fixed point value.
e.g. 0.1001000, exp 0010 (+2) -> 010.01000 = 2.25
```

For a negative mantissa you can instead find its value (1.1000000 = −0.5; 1.0100000 = −0.75) and multiply by 2^exponent.

**Decimal to floating point**

```
1. Write the positive value in binary.
2. Move the point so it reads 0.1...; the places moved
   left give the exponent (moving right gives a negative one).
3. If negative, take the two's complement of the mantissa.
4. Pad mantissa and exponent to their bit lengths.
```

**Normalising**

```
1. Shift the mantissa left until it starts 0.1 (positive)
   or 1.0 (negative).
2. Subtract the number of places shifted from the exponent.
e.g. 0.0101000, exp 0011 -> 0.1010000, exp 0010
     (both equal 2.5)
```

**Why normalise:** each value gets one unique representation, and no mantissa bits are wasted on leading 0s (or 1s), so precision is as high as the format allows.

**Caesar and Vernam**

```
Caesar: shift each letter by the key, wrapping Z to A.
        W + 5 -> B. Decrypt by shifting back by the key.
Vernam: ciphertext = plaintext XOR key
        plaintext  = ciphertext XOR key
        1010 XOR 0110 = 1100 (1 where the bits differ)
```

**Absolute and relative error.** 0.6 in a format with five fraction bits: 0.6 × 32 = 19.2, so the nearest is 19/32 = 0.59375. Absolute error 0.00625; relative error 0.00625 ÷ 0.6 ≈ 0.0104, about 1.04%.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-representing-data--09-rd-twos-complement.webp" width="900" height="720" alt="Eight columns have place values -128, 64, 32, 16, 8, 4, 2, 1. Start with +89 as 01011001. Flip every bit to get 10100110. Add 1 to get 10100111. Checking: -128 + 32 + 4 + 2 + 1 = -89. The leftmost bit has a negative place value." loading="lazy">
  <figcaption>To make a negative number, write the positive value, flip every bit, then add 1.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-representing-data--10-rd-floating-point.webp" width="900" height="680" alt="The mantissa 0.1101000 has its binary point after the first bit. The exponent 0011 is +3, so the point moves 3 places right, giving 0110.1000. The place values 4 + 2 + 0.5 add up to 6.5." loading="lazy">
  <figcaption>The exponent tells you how many places to move the binary point in the mantissa.</figcaption>
</figure>


## Must-know distinctions

- **Unsigned vs two's complement:** 8 bits give 0 to 255 unsigned, but −128 to +127 in two's complement.
- **Binary vs decimal prefixes:** 1 KiB = 1024 bytes; 1 kB = 1000 bytes. Use the one the question uses.
- **Mantissa vs exponent:** mantissa bits set **precision**; exponent bits set **range**.
- **Fixed vs floating point:** fixed is faster with a smaller range; floating point has a much larger range but slower arithmetic.
- **Absolute vs relative error:** relative error is more useful because it allows for the size of the number.
- **Overflow vs underflow:** too big to store vs too close to zero to store.
- **Character code vs pure binary:** the digit 4 is 100 in pure binary but its ASCII code is 52 (0110100).
- **ASCII vs Unicode:** ASCII has 128 characters; Unicode was introduced to cover the world's writing systems. UTF-8 is variable-length (8, 16, 24 or 32 bits) and matches ASCII for codes 0 to 127.
- **Bitmap vs vector:** pixels with colour codes vs a list of objects with properties. Bitmaps suit photographs; vectors scale without losing quality and suit logos and diagrams.
- **ADC vs DAC:** ADC samples analogue input into binary when recording; DAC turns binary into an analogue signal for playback.
- **Caesar vs Vernam:** both symmetric. Caesar has 25 keys and leaks letter frequencies; Vernam can be perfectly secure.
- **Vernam vs computationally secure ciphers:** Vernam leaks nothing (if its conditions hold); computationally secure ciphers leak information, but cracking them is unfeasible.
- **Symmetric vs asymmetric:** same key both ways vs different, mathematically related keys, which removes the key exchange problem.
- **Detect vs correct:** parity and checksums detect; majority voting can also correct.

## Vernam conditions for perfect security

The key must be:

1. chosen completely randomly
2. at least as long as the plaintext
3. used only once
4. known only to the sender and receiver.

## Error detection at a glance

| Method | How | Strength | Weakness |
|---|---|---|---|
| Parity bit | Extra bit makes count of 1s even (or odd) | One extra bit | Misses an even number of errors; cannot correct |
| Majority voting | Each bit sent several times; majority wins | Corrects isolated errors | Several times more data |
| Checksum | Value calculated from data, sent and recalculated | Checks a whole block | Detects only; data must be resent |

## Quick self-test

1. Convert hexadecimal B7 to decimal and to 8-bit binary.
2. How many different values can 11 bits represent?
3. How many bytes are in 2 GiB?
4. State the range of 8-bit two's complement.
5. Write −37 in 8-bit two's complement.
6. Convert the 8-bit two's complement number 10010110 to decimal.
7. The ASCII code for a is 97. What is the code for f?
8. Calculate the storage, in bytes, for an 800 × 500 bitmap with colour depth 8 bits, excluding metadata.
9. A sound's highest frequency is 15 kHz. State the minimum sampling rate by Nyquist's theorem.
10. Encrypt CODE with a Caesar cipher, shift 4.
11. With majority voting (each bit sent three times), what bit does the group 011 decode to?
12. Give the even parity bit for 1100111.
13. In unsigned fixed point with four integer and four fraction bits, what is 1011.0101?

### Answers

1. 11 × 16 + 7 = **183**; binary **10110111**.
2. 2¹¹ = **2048**.
3. 2 × 2³⁰ = **2,147,483,648 bytes**.
4. **−128 to +127**.
5. 37 = 00100101, flip to 11011010, add 1: **11011011**.
6. −128 + 16 + 4 + 2 = **−106**.
7. 97 + 5 = **102**.
8. 800 × 500 × 8 = 3,200,000 bits = **400,000 bytes**.
9. 2 × 15 = **30 kHz**.
10. **GSHI**.
11. **1** (two of the three bits are 1).
12. Five 1s, so the parity bit is **1** to make six.
13. 8 + 2 + 1 + 0.25 + 0.0625 = **11.3125**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-representing-data--08-rd-binary-hex.webp" width="900" height="710" alt="Eight boxes with place values 128, 64, 32, 16, 8, 4, 2, 1 hold the bits 1, 0, 1, 1, 0, 0, 1, 1, so 179 = 128 + 32 + 16 + 2 + 1 is 10110011 in binary. The bits are split into two groups of four. 1011 is 11, which is B in hex, and 0011 is 3, so 179 is B3 in hex." loading="lazy">
  <figcaption>Each 1 in binary adds its place value; one hex digit stands for a group of four bits (a nibble).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-representing-data--14-rd-error-detection.webp" width="900" height="990" alt="Parity bit: the data 1011001 has four 1s, so the even parity bit added is 0; it detects but cannot correct. Majority voting: each bit is sent three times; received groups 110, 001 and 111 decode to 1, 0 and 1 by majority, so one error per group is corrected. Checksum: the bytes 108, 155 and 53 add to 316, and 316 mod 256 is 60; a mismatch shows an error but not where." loading="lazy">
  <figcaption>Parity and checksum detect errors; majority voting can also correct them, at the cost of sending more data.</figcaption>
</figure>


## Where marks are usually lost

- Flipping the bits for a negative number but not adding 1.
- Treating a mantissa that starts with 1 as positive.
- Moving the point the wrong way for a negative exponent.
- Adding the shift to the exponent when normalising, instead of subtracting it.
- Leaving a normalised mantissa starting 1.1 (negative) or 0.0 (positive).
- Dividing by the stored value, not the true value, for relative error.
- Giving a bitmap or sound size in bits when the question asks for bytes, or mixing up 1000 and 1024.
- Writing "number of colours" for colour depth.
- Describing an ADC as "turning sound into binary" without sampling at intervals and approximating each sample.
- Listing only two Vernam conditions when the question needs all four.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-representing-data--12-rd-sound-sampling.webp" width="900" height="880" alt="A smooth analogue wave is measured at regular intervals. Each measurement is a vertical stem ending on the nearest of eight levels, which is a 3-bit illustrative resolution. For the lesson example, 22,050 Hz x 16 bits x 40 s = 14,112,000 bits = 1,764,000 bytes. Nyquist says to sample at least twice the highest frequency, so 9 kHz needs 18 kHz." loading="lazy">
  <figcaption>An ADC measures the wave at regular intervals and stores each sample as the nearest binary value.</figcaption>
</figure>


## Frequently asked questions

**What is the range of an 8-bit two's complement number?**
The range of n-bit two's complement is −2ⁿ⁻¹ to +2ⁿ⁻¹ − 1, so 8 bits give −128 to +127. The same 8 bits give 0 to 255 as unsigned binary.

**What is the difference between a kibibyte and a kilobyte?**
1 KiB is 2¹⁰ = 1024 bytes, using a binary prefix, while 1 kB is 10³ = 1000 bytes, using a decimal prefix. Use whichever prefix the question uses.

**How do you calculate the size of a sound file?**
Multiply the sampling rate in hertz by the sample resolution in bits and the length in seconds to get the size in bits, then divide by 8 for bytes. Convert minutes to seconds first.

**What are the four conditions for a Vernam cipher to have perfect security?**
The key must be chosen completely randomly, be at least as long as the plaintext, be used only once, and be known only to the sender and receiver. Questions on perfect security usually need all four.

**What does Nyquist's theorem say?**
The sampling rate must be at least twice the highest frequency in the sound. For example, a highest frequency of 15 kHz needs a sampling rate of at least 30 kHz.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards (OxfordAQA), section 3.5 Representing data.
