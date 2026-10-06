---
title: "OxfordAQA A-Level Computer Science: Representing data (9645)"
seoTitle: "OxfordAQA A-Level CS Representing Data Study Guide"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA International AS/A-level Computer Science section 3.5: binary, floating point, characters, images, sound, ciphers and errors."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches section 3.5, Representing data, of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams from May/June 2025 and International A-level exams from May/June 2026. It covers every outcome in sections 3.5.1 to 3.5.8. All of it is AS content, assessed in the Unit 2 written exam; none of it is International A-level only.

Links: [course hub](/boards/oxfordaqa/a-level/computer-science/) · [printable checklist](/checklists/oxfordaqa/a-level/computer-science/) · [revision notes](/resources/oxfordaqa-a-level-computer-science-representing-data-revision-notes/) · [practice questions](/resources/oxfordaqa-a-level-computer-science-representing-data-practice/) · [free diagnostics](/diagnostics/) · [Procedural Programming](/resources/a-level-oxfordaqa-computer-science-procedural-programming/) · [exam preparation](/resources/oxfordaqa-a-level-computer-science-exam-preparation/).

## What this topic covers

| Section | What you must be able to do |
|---|---|
| 3.5.1 Number bases | Decimal, binary, hex; convert between them |
| 3.5.2 Units | Bits, bytes, 2ⁿ values; binary and decimal prefixes |
| 3.5.3.1 to 3.5.3.3 | Unsigned range, addition, multiplication; two's complement |
| 3.5.3.4 to 3.5.3.9 | Fixed and floating point; errors; overflow, underflow; normalisation |
| 3.5.4 Characters | ASCII, Unicode, UTF-8, code blocks |
| 3.5.5 Graphics | Bitmaps, storage, metadata; vectors; comparison |
| 3.5.6 Sound | ADC, DAC, sampling, file size, Nyquist |
| 3.5.7 Encryption | Caesar, Vernam, security, key exchange |
| 3.5.8 Error detection | Parity, majority voting, checksums |

Base conversions are not examined on their own, but you need them inside other questions.

## 3.5.1 and 3.5.2 Number bases and units

Decimal is base 10, binary is base 2 and hexadecimal is base 16 (digits 0 to 9, then A to F for 10 to 15). One hex digit stands for four bits, so hex is shorthand for binary.

**Worked example.** Convert 179 to binary and hex.

```
179 = 128 + 32 + 16 + 2 + 1
binary: 10110011
nibbles: 1011 | 0011 = B | 3  -> B3
```

Going back, hex 3E = 3 × 16 + 14 = 62 = 111110 in binary.

The **bit** is the fundamental unit of information; a **byte** is 8 bits. With n bits you can make 2ⁿ different patterns, so 6 bits give 2⁶ = 64 values.

| Binary prefix | Value | Decimal prefix | Value |
|---|---|---|---|
| kibi, Ki | 2¹⁰ | kilo, k | 10³ |
| mebi, Mi | 2²⁰ | mega, M | 10⁶ |
| gibi, Gi | 2³⁰ | giga, G | 10⁹ |
| tebi, Ti | 2⁴⁰ | tera, T | 10¹² |

So 3 MiB = 3 × 2²⁰ = 3,145,728 bytes. 3 MB is only 3,000,000 bytes.

## 3.5.3.1 to 3.5.3.3 Integers in binary

**Unsigned** binary holds only zero and positive numbers, from 0 to 2ⁿ − 1 in n bits. **Signed** binary can also hold negatives.

**Addition.** Work right to left: 1 + 1 = 10 (write 0, carry 1); 1 + 1 + 1 = 11 (write 1, carry 1).

```
  01101011   (107)
+ 00110110   ( 54)
  --------
  10100001   (161)
```

**Multiplication.** Add a shifted copy of the first number for each 1 in the second.

```
      1101   (13)
    ×  101   ( 5)
      1101
    110100   (shifted two places)
   1000001   (65)
```

**Two's complement.** The most significant bit has a negative place value. In 8 bits the place values are −128, 64, 32, 16, 8, 4, 2, 1.

- Decimal to two's complement, for −89: write +89 = 01011001, flip every bit (10100110), add 1, giving **10100111**.
- Two's complement to decimal, for 11010110: −128 + 64 + 16 + 4 + 2 = **−42**.
- **Subtraction** adds the negative. 45 − 72: 00101101 + 10111000 = 11100101 = **−27**.

The range of n-bit two's complement is −2ⁿ⁻¹ to +2ⁿ⁻¹ − 1. For 10 bits that is −512 to +511.

## 3.5.3.4 Numbers with a fractional part

**Fixed point** puts the binary point in a fixed position. In an 8-bit unsigned format with four bits before the point and four after, the place values are 8, 4, 2, 1 . ½, ¼, ⅛, 1/16.

So 6.6875 = 4 + 2 + 0.5 + 0.125 + 0.0625 = **0110.1011**.

**Floating point** stores a **mantissa** and an **exponent**, both in two's complement in exam questions. The value is mantissa × 2^exponent. Here the mantissa is 8 bits with the point after its first bit, and the exponent is 4 bits (the IEEE standard is not required).

**Binary to decimal.** Mantissa 0.1101000, exponent 0011.

```
exponent 0011 = +3
move the point 3 places right: 0110.1000 = 6.5
```

Negative mantissa 1.0110000, exponent 0010: the mantissa is −1 + 0.25 + 0.125 = −0.625, and −0.625 × 2² = **−2.5**.

**Decimal to binary.** Represent 13.25.

```
13.25 = 1101.01
      = 0.110101 × 2^4        point moved 4 places left
mantissa 0.1101010   exponent 0100
```

For −5.75, first build +5.75 = 101.11 = 0.1011100 × 2³. Then take the two's complement of the mantissa: 0.1011100 becomes **1.0100100**, with exponent **0011**. Check: (−1 + 0.25 + 0.03125) × 8 = −5.75.

**Precision and range.** More mantissa bits give **greater precision**; more exponent bits give **greater range**. For a fixed total, one is traded against the other. Here the largest positive value is 0.1111111 × 2⁷ = 127.

## 3.5.3.5 to 3.5.3.7 Errors, overflow and underflow

A value is stored exactly only if it is a binary fraction that fits the format. Some never can be: 0.1 recurs in binary, so fixed and floating point both store an approximation, a **rounding error**.

**Worked example.** Store 2.3 in the 4.4 fixed point format above. The nearest values are 0010.0100 = 2.25 and 0010.0101 = 2.3125; 2.3125 is closer.

```
absolute error = |stored − true| = |2.3125 − 2.3| = 0.0125
relative error = absolute error / true value
               = 0.0125 / 2.3 = 0.00543... (about 0.54%)
```

**Relative error is more useful** because it compares the error with the size of the value: 0.0125 is negligible on 5,000 but serious on 0.03.

**Overflow** happens when a result is too large for the available bits: 200 + 90 = 290 cannot fit in 8-bit unsigned binary, whose maximum is 255. **Underflow** happens when a result is so close to zero that its nearest representation in the format is zero. In the floating point format above, 2⁻¹⁹ is far below the smallest value the format can hold, so it underflows to zero.

## 3.5.3.8 and 3.5.3.9 Fixed vs floating point, and normalisation

| | Fixed point | Floating point |
|---|---|---|
| Range | Smaller for the same number of bits | Much larger |
| Precision | Fixed absolute precision | Set by mantissa size; similar relative precision across the range |
| Speed | Faster: arithmetic like integers | Slower: exponents must be handled |

**Normalisation** gives each value one unique representation and uses every mantissa bit, maximising precision. A normalised positive mantissa starts **0.1**; a negative one starts **1.0**. Shift the mantissa left until it does, and subtract the places shifted from the exponent.

```
positive: 0.0010110  exp 0110 (+6)
          shift left 2 -> 0.1011000, exp 6 − 2 = 4 -> 0100
          check: 0.6875 × 16 = 11 (same value)

negative: 1.1101100  exp 0011 (+3)
          shift left 2 -> 1.0110000, exp 3 − 2 = 1 -> 0001
          check: −0.625 × 2 = −1.25 (same value)
```

## 3.5.4 Representing characters

A **character set** gives each character a unique code, stored as a bit pattern. **ASCII** is 7-bit, so it has 2⁷ = 128 characters: English letters, digits, punctuation and control codes, but not other alphabets. **Unicode** was introduced to give characters from all the world's writing systems unique codes. It has more than one encoding; **UTF-8**, the most widely used, is variable-length (8, 16, 24 or 32 bits) and backwards compatible with ASCII, so codes 0 to 127 match.

Codes are grouped in blocks: digits start at 48, uppercase letters at 65, lowercase at 97. Given one code you can work out others: if A is 65, K is 10 letters later, so 75.

The **character code** of a digit is not its **pure binary** value. The digit 9 is 1001 in pure binary, but its ASCII code is 57, which is 0111001 in 7 bits and 00111001 in UTF-8.

## 3.5.5 Representing graphics

A **bitmap** is a grid of pixels, each holding a binary colour code. **Size in pixels** is width × height; **colour depth** is bits per pixel.

```
storage (bits) = width × height × colour depth   (excluding metadata)

1440 × 960 pixels, colour depth 12 bits:
1440 × 960 = 1,382,400 pixels
1,382,400 × 12 = 16,588,800 bits = 2,073,600 bytes
(12 bits allow 2^12 = 4096 colours)
```

Files may also hold **metadata** such as width, height and colour depth.

A **vector graphic** stores a list of objects with properties: x and y coordinates of the top left corner, outline colour, outline line width, fill colour.

| | Bitmap | Vector |
|---|---|---|
| Scaling | Pixelates when enlarged | Scales without losing quality |
| File size | Depends on pixels and colour depth | Depends on number of objects; often small |
| Suits | Photographs, detailed scenes | Logos, diagrams, maps, fonts |

## 3.5.6 Representing sound

An **analogue** quantity varies continuously; a **digital** one takes discrete values. When recording, an **ADC** samples a microphone's analogue voltage at regular intervals and converts each sample to the nearest binary value. For playback, a **DAC** turns stored numbers back into voltages that drive a speaker.

**Sample resolution** is bits per sample; **sampling rate** is samples per second (Hz).

```
file size (bits) = rate (Hz) × resolution × seconds
22,050 Hz, 16-bit, 40 s:
22,050 × 16 × 40 = 14,112,000 bits = 1,764,000 bytes
```

**Nyquist's theorem**: to represent a sound accurately, sample at a rate at least twice its highest frequency. A sound whose highest frequency is 9 kHz needs at least 18 kHz.

## 3.5.7 Basic encryption methods

**Encryption** uses an algorithm (a **cipher**) to turn **plaintext** into **ciphertext** that a third party cannot easily understand without the method and the **key**, a value such as letters or bits.

**Caesar cipher.** Shift each letter a fixed number of places, wrapping from Z to A. With shift 7, SIGNAL becomes ZPNUHS (L + 7 wraps past Z to S). Decrypt by shifting back. It is easily cracked: only 25 possible keys, letter frequencies survive (frequency analysis), and one letter's shift reveals all.

**Vernam cipher** (one-time pad): XOR each bit with a key bit; XOR again to decrypt.

```
plaintext H   01001000
key           10110101
ciphertext    11111101   (XOR: 1 where bits differ)
XOR with key  01001000 -> H again
```

**Perfect security** means nothing can be learned about the plaintext from the ciphertext. Vernam is perfectly secure if the key is completely random, at least as long as the plaintext, used once, and known only to sender and receiver. Caesar gives very little security. Most computer ciphers are **computationally secure**: information is in the ciphertext, but cracking takes unfeasible time or rarely succeeds.

The **key exchange problem** is sharing the key without interception. **Symmetric** ciphers (Caesar, Vernam) use one key for both directions; **asymmetric** ciphers use different, mathematically related keys, so the problem does not apply.

## 3.5.8 Error detection and correction

- **Parity bit**: an extra bit makes the count of 1s even (even parity) or odd. 1011001 has four 1s, so its even parity bit is 0. It detects an odd number of flipped bits, misses an even number, and cannot correct.
- **Majority voting**: each bit is sent several times, for example three, and the receiver takes the majority. Received 110 001 111 decodes to 1 0 1. It corrects one error per group but triples the data.
- **Checksum**: a value calculated from the data is sent with it and recalculated on arrival. In one simple scheme, the bytes 01101100, 10011011 and 00110101 (108 + 155 + 53 = 316) give 316 mod 256 = 60. A mismatch shows an error, not its position, so data is resent.

**Comparing them:** parity is cheapest (one bit) but weakest; majority voting can correct but costs the most bandwidth; checksums cover whole blocks and catch more errors than one parity bit, but cannot correct.

## Common errors

- Forgetting to add 1 after flipping bits.
- Reading a mantissa that starts with 1 as positive.
- Adding, not subtracting, the shift when normalising.

Next: the [revision notes](/resources/oxfordaqa-a-level-computer-science-representing-data-revision-notes/), then the [practice questions](/resources/oxfordaqa-a-level-computer-science-representing-data-practice/).

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards (OxfordAQA), section 3.5 Representing data.
