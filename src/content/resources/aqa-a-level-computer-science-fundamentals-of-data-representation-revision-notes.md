---
title: "AQA A-Level Computer Science: Fundamentals of Data Representation — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 5: Fundamentals of data representation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 5
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
description: "Recall notes on number bases, two's complement, floating point, errors, character codes, images, sound, compression and ciphers for AQA A-Level CS 7517."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Fundamentals of data representation (section 4.5 of AQA A-Level Computer Science 7517) explains how
numbers, characters, images and sound are stored as bits, how data is checked for errors, compressed and
encrypted. Paper 2 tests it with hand calculations -- two's complement, floating point, file sizes -- and
short explanations, so learn the methods until they are automatic.

Condensed for the final weeks. For the full explanation, use the
[Fundamentals of data representation study guide](/resources/aqa-a-level-computer-science-fundamentals-of-data-representation-study-guide/).
Practise with the [Fundamentals of data representation practice questions](/resources/aqa-a-level-computer-science-fundamentals-of-data-representation-practice/).

## Syllabus coverage

AQA 7517 specification (Version 1.6, 31 July 2023), section 4.5, assessed on Paper 2:

- **4.5.1** Number systems -- natural, integer, rational, irrational, real, ordinal; counting and measurement
- **4.5.2** Number bases -- decimal, binary, hexadecimal
- **4.5.3** Units of information -- bits, bytes, binary and decimal prefixes
- **4.5.4** Binary number system -- unsigned binary and arithmetic, two's complement, fixed and floating
  point, rounding, absolute and relative errors, range and precision, normalisation, underflow and overflow
- **4.5.5** Information coding systems -- character form of a digit, ASCII and Unicode, error checking
- **4.5.6** Representing images, sound and other data -- ADC/DAC, bitmaps, vectors, sound, MIDI,
  compression, encryption

## Number sets and units

| Set | Symbol | Meaning |
|---|---|---|
| Natural | ℕ | {0, 1, 2, 3, ...} -- includes zero; used for **counting** |
| Integer | ℤ | {..., -2, -1, 0, 1, 2, ...} |
| Rational | ℚ | Can be written as a fraction of integers; includes the integers (7 = 7/1) |
| Irrational | -- | Cannot be written as a fraction, e.g. √2 |
| Real | ℝ | All of the above; used for **measurement** |
| Ordinal | -- | Gives position: 1st, 2nd, 3rd |

**n bits give 2ⁿ different values.** Binary prefixes are powers of 2: kibi (Ki) 2¹⁰, mebi (Mi) 2²⁰, gibi
(Gi) 2³⁰, tebi (Ti) 2⁴⁰. Decimal prefixes are powers of 10: kilo 10³, mega 10⁶, giga 10⁹, tera 10¹².
So 1 KiB = 1,024 bytes but 1 kB = 1,000 bytes.

**Hexadecimal** is a shorthand for binary: one hex digit = 4 bits, so it is shorter to write and less
error-prone to read. Write the base as a subscript: 67₁₀, 10011011₂, AE₁₆.

## Unsigned binary and two's complement

- Unsigned n bits: range **0 to 2ⁿ - 1**.
- Two's complement n bits: range **-2ⁿ⁻¹ to 2ⁿ⁻¹ - 1** (8 bits: -128 to 127). The most significant bit has
  a negative place value (-128 in 8 bits).
- To negate: **invert all bits and add 1**. -45: 45 = 00101101 -> 11010010 -> **11010011**.
- **Subtraction** = add the two's complement: 23 - 45 = 00010111 + 11010011 = 11101010 = -22.
- Two's complement is the only signed representation AQA examines.

## Fixed point and floating point

**Fixed point**: the binary point is in a fixed position. With 4 bits after the point, 0110.1010 =
4 + 2 + 0.5 + 0.125 = **6.625**.

**Floating point (AQA format)**: mantissa × 2^exponent, with **both mantissa and exponent in two's
complement**. You do not need the IEEE standard.

### Worked example: floating point to decimal

8-bit mantissa 1.0110000, 4-bit exponent 0010 (= 2).

```
Mantissa 1.0110000 = -1 + 0.25 + 0.125 = -0.625
Value = -0.625 × 2² = -2.5
(Check: move the point 2 places right: 101.10000 = -4 + 1 + 0.5 = -2.5)
```

### Normalisation

A normalised mantissa starts **0.1** (positive) or **1.0** (negative). Normalising gives the **maximum
precision** for the bits available and a **unique** representation of each number.

Unnormalised 0.0011000 × 2^0101 (5): shift the mantissa 2 places left -> 0.1100000, subtract 2 from the
exponent -> 0011 (3). Value is unchanged: 0.11₂ × 2³ = 110₂ = 6.

### Range, precision and errors

| | Fixed point | Floating point |
|---|---|---|
| Range | Smaller for the same bits | Much larger |
| Precision | Constant across the range | Varies; more bits in the mantissa = more precision |
| Speed | Faster to process | Slower (needs normalising and exponent handling) |

- **Rounding errors**: a value is exact only if it is a binary fraction that fits the bits; 0.1₁₀ can
  never be stored exactly.
- **Absolute error** = |actual - stored|. **Relative error** = absolute error ÷ actual value.
  Storing 6.7 with 4 fractional bits gives 6.6875: absolute error 0.0125, relative error ≈ 0.0019 (0.19%).
  The same absolute error is far more serious for a small number than a large one.
- **Overflow**: the result is too large to represent. **Underflow**: the result is too small (too close to
  zero) to represent, e.g. dividing a very small number by a very large one.

## Characters and error checking

- The **character code** for a digit is not its binary value: '7' is 0110111 (55) in ASCII, but 7 in pure
  binary is 0111.
- **ASCII** uses 7 bits (128 characters, English only). **Unicode** was introduced to represent the
  characters of **all the world's writing systems** and symbols; the first 128 Unicode codes match ASCII.
- **Parity bit**: added so the number of 1s is even (or odd); detects a single-bit error but not which bit.
- **Majority voting**: each bit is sent (e.g.) three times and the receiver takes the majority -- this can
  **correct** an error, at the cost of extra data.
- **Checksum**: a value calculated from the data and sent with it; the receiver recalculates and compares.
- **Check digit**: a digit calculated from the other digits of a code (e.g. ISBN, barcode) to catch entry errors.

## Images and sound

- **ADC**: samples an analogue signal and converts each sample to a binary number; used with analogue
  sensors. **DAC**: converts digital to analogue; most commonly digital audio to an analogue signal.
- **Bitmap**: a grid of pixels. Size in pixels = width × height; **colour depth** = bits per pixel;
  **resolution** = dots (pixels) per inch. Storage (ignoring metadata) = width × height × colour depth.
  Metadata includes width, height and colour depth.
- **Vector graphic**: a list of objects (e.g. circle, rectangle) with properties (position, radius, line
  colour, fill colour). Scales without losing quality and is usually smaller for simple drawings; bitmaps
  suit photographs.
- **Sound**: **sampling rate** = samples per second (Hz); **sample resolution** = bits per sample.
  Size in bytes = rate × resolution × seconds ÷ 8. **Nyquist theorem**: sample at least **twice the highest
  frequency** to reproduce the sound accurately.
- **MIDI**: stores **event messages** (instructions such as which note to play and when) rather than
  sampled sound. Files are small and the music is easy to edit, e.g. changing tempo or instrument.

### Worked example: file sizes

```
Bitmap: 1920 × 1080 pixels, 24-bit colour
  1920 × 1080 × 24 = 49,766,400 bits ÷ 8 = 6,220,800 bytes ≈ 6.2 MB

Sound: 30 s, 44,100 Hz, 16-bit, one channel
  44,100 × 16 × 30 = 21,168,000 bits ÷ 8 = 2,646,000 bytes ≈ 2.6 MB
```

## Compression and encryption

- **Lossless** compression keeps all the data (needed for text and program files); **lossy** removes
  data permanently for much smaller files (acceptable for images and sound).
- **Run length encoding**: replace runs of the same value with a count and the value.
- **Dictionary-based**: store repeated patterns once in a dictionary and replace each occurrence with a
  reference to its entry.
- **Encryption**: turning **plaintext** into **ciphertext** using a **cipher** and key so it is
  unintelligible without the key.
- **Caesar cipher**: shift each letter by a fixed amount (shift 3: HELLO -> KHOOR). Easily cracked: only 25
  possible shifts to try, and letter frequencies survive.
- **Vernam cipher (one-time pad)**: XOR each character with a key that is truly random, at least as long as
  the message and **used once only**. It is the only cipher proven to offer **perfect security**, because
  the ciphertext is uniformly distributed. All other ciphers rely on **computational security** -- they
  could in theory be broken given enough ciphertext and time.

## Common mistakes / exam traps

- Forgetting the negative place value of the mantissa's first bit in floating point.
- Normalising by shifting the mantissa but not adjusting the exponent (or adjusting it the wrong way).
- Mixing KiB (1,024) and kB (1,000) in a calculation.
- Dividing by 8 twice, or not at all, when converting bits to bytes.
- Saying a parity bit can correct an error -- it only detects one; majority voting can correct.
- Describing Vernam as secure without stating all three key conditions: random, as long as the message, used once.

## Frequently asked questions

**Why are floating point numbers normalised?**
Normalising puts the most significant bits in the mantissa, which gives the greatest precision for the
number of bits and a single unique representation for each value.

**Why can 0.1 not be stored exactly in binary?**
0.1 in decimal is a recurring fraction in binary, so it cannot be written exactly as a sum of 1/2, 1/4, 1/8
and so on in a finite number of bits. A rounding error always results.

**What is the difference between absolute and relative error?**
Absolute error is the difference between the true and stored value. Relative error divides that by the true
value, so it shows how significant the error is compared with the size of the number.

## Related resources

[Fundamentals of data representation study guide](/resources/aqa-a-level-computer-science-fundamentals-of-data-representation-study-guide/) |
[Fundamentals of data representation practice questions](/resources/aqa-a-level-computer-science-fundamentals-of-data-representation-practice/)

## Official syllabus

AQA AS and A-level Computer Science (7516/7517) specification, Version 1.6 (31 July 2023), section 4.5 --
[aqa.org.uk/7517](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
