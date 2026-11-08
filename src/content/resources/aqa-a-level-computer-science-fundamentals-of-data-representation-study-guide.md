---
title: "AQA A Level Computer Science (7517): Fundamentals of data representation -- Study Guide"
resourceType: "study-guides"
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
description: "Number systems, two's complement, floating point, character sets, images, sound, compression and encryption for AQA A Level Computer Science, with worked examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Every piece of data in a computer, from a bank balance to a photograph, is stored as patterns of bits. This guide covers how numbers, text, images and sound are encoded, how data is compressed and protected, and the arithmetic you must carry out by hand, including floating-point conversions that appear regularly in the written papers.

## Where this fits in the specification

Fundamentals of data representation is section 4.5 of AQA 7517 and is examined on Paper 2 (the written paper). It links to [Fundamentals of algorithms](/resources/aqa-a-level-computer-science-fundamentals-of-algorithms/) through compression and encryption methods, and to computer architecture through binary arithmetic. Questions mix short conversions with extended explanations, so practise the calculations until they are automatic.

## Number systems and bases

You should classify numbers: **natural** (0, 1, 2, ...), **integer** (including negatives), **rational** (expressible as a fraction of integers), **irrational** (such as the square root of 2, which cannot be written as such a fraction), and **real** (all of these together). **Ordinal** numbers give position (first, second); **cardinal** numbers give quantity.

Computers use **binary** (base 2). **Hexadecimal** (base 16, digits 0-9 and A-F) is a compact human-friendly shorthand because one hex digit equals exactly four bits. To convert 10101100 to hex, split into nibbles: 1010 = A and 1100 = C, giving AC. To convert 2F to decimal: 2 x 16 + 15 = 47. Remember that hexadecimal is used because it is shorter and easier to read and check, not because computers store it.

Units: a bit is one binary digit, a byte is 8 bits. Decimal prefixes (kilo = 1000, mega = 10^6) differ from binary prefixes (kibi = 1024, mebi = 1024^2), so state which you use.

## Signed binary and arithmetic

**Sign and magnitude** uses the leftmost bit for the sign and the rest for the size, so it has two representations of zero. **Two's complement** gives the leftmost bit a negative place value, so in 8 bits it is worth -128. The range is -128 to +127, there is only one zero, and addition works with the same circuit for positive and negative numbers.

To negate a number, invert all the bits and add 1. To subtract, add the two's complement. **Overflow** occurs when a result is outside the range that can be stored.

You must also be able to add and multiply binary numbers, and apply the bitwise operations **AND**, **OR**, **XOR** and **NOT**. A logical shift left multiplies an unsigned number by 2, and a shift right divides by 2 (with the remainder lost).

## Fixed and floating point

**Fixed point** places the binary point at a set position, so the range and precision are both limited. **Floating point** stores a number as **mantissa x 2^exponent**, with both parts in two's complement. The mantissa holds the significant digits and the exponent moves the binary point, which gives a much larger range for the same number of bits.

Trade-offs: more bits in the mantissa give greater **precision**; more bits in the exponent give greater **range**. A floating-point number is **normalised** when the first two bits of the mantissa are different (01 for positive, 10 for negative), which gives the maximum precision and a unique representation. Many values, such as 0.1, cannot be stored exactly in binary, which causes **rounding errors**. **Absolute error** is the difference between the true and stored values; **relative error** is the absolute error divided by the true value. **Underflow** occurs when a number is too small to be represented and **overflow** when it is too large.

## Worked example 1: two's complement and floating point

**(a)** Represent -45 in 8-bit two's complement.

+45 is 00101101 (32 + 8 + 4 + 1). Invert: 11010010. Add 1: 11010011. Check: -128 + 64 + 16 + 2 + 1 = -45. Correct.

**(b)** Represent 5.75 in a format with an 8-bit mantissa (binary point after the first bit) and a 4-bit exponent, both in two's complement.

5.75 = 101.11 in binary. Normalise by moving the point three places left: 0.10111 x 2^3. Mantissa: 0.1011100. As 8 bits: 01011100. Exponent 3: 0011. Answer: mantissa 01011100, exponent 0011. Check: 0.1011100 = 0.5 + 0.125 + 0.0625 + 0.03125 = 0.71875; and 0.71875 x 8 = 5.75.

**(c)** Represent -2.5 in the same format.

2.5 = 10.1 = 0.101 x 2^2. Positive mantissa: 0.1010000. Two's complement of this is 1.0110000, which starts 10 so it is normalised. Exponent 2: 0010. Check: 1.0110000 = -1 + 0.25 + 0.125 = -0.625; -0.625 x 4 = -2.5.

## Character sets and error detection

**ASCII** uses 7 bits (128 characters); **Unicode** uses more bits per character and can represent the characters of almost every writing system, with ASCII as a subset. In ASCII, 'A' is 65 and 'a' is 97, so lower case is upper case plus 32. Characters in a code are in a meaningful order, which allows sorting by character code.

Error detection methods:

- **Parity bit**: one bit added so that the count of 1s is even (even parity) or odd. It detects an odd number of changed bits but cannot say where, and misses two flipped bits.
- **Majority voting**: each bit is sent three times and the most common value is taken, so a single error per group is corrected.
- **Checksum**: a value calculated from the data is sent with it and recalculated on arrival.
- **Check digit**: a final digit calculated from the others, as in an ISBN. For ISBN-10, multiply digits by weights 10 down to 1 and the total must be divisible by 11. For 0-306-40615-2 the sum is 0 + 27 + 0 + 42 + 24 + 0 + 24 + 3 + 10 + 2 = 132, and 132 = 11 x 12, so it is valid.

## Images and sound

A **bitmap** image is a grid of pixels, each stored as a number. **Colour depth** is the bits per pixel and **resolution** is the pixel dimensions. **File size (bits) = width x height x colour depth**, plus metadata. A **vector** image stores shapes as properties (type, position, size, colour) as a list of drawing instructions, so it scales without loss and is suited to logos and diagrams, but not photographs.

Sound is stored by **sampling** the amplitude at regular intervals. **Sample rate** is samples per second (Hz); **sample resolution** is bits per sample. **File size = sample rate x resolution x seconds x channels.** The **Nyquist theorem** states that the sample rate must be at least twice the highest frequency in the sound to be reproduced faithfully. **MIDI** stores instructions about notes (instrument, pitch, duration) instead of waveforms, so files are small.

### Worked example 2: file sizes

An image is 800 x 600 pixels at 24 bits per pixel. Size = 800 x 600 x 24 = 11,520,000 bits = 1,440,000 bytes, which is 1.44 MB (1,406.25 KiB).

A stereo recording lasts 40 seconds at 22,050 Hz with 16-bit samples. Size = 22,050 x 16 x 40 x 2 = 28,224,000 bits = 3,528,000 bytes, which is about 3.53 MB.

## Compression and encryption

**Lossless** compression allows the original to be rebuilt exactly; **lossy** compression permanently discards detail (JPEG and MP3). **Run-length encoding** (RLE) stores each run as a value and a count: WWWWBBWWWWWWB becomes (W,4), (B,2), (W,6), (B,1): 13 characters become 4 pairs. RLE works well on long runs, and badly on varied data. **Dictionary-based** compression replaces repeated sequences with short references to a table of entries. A larger dictionary can find more repeats, but the dictionary itself takes space.

**Encryption** protects data from unauthorised reading. The **Caesar cipher** shifts each letter by a fixed amount: with a shift of 5, CABLE becomes HFGQJ. It is easily broken by trying all 25 shifts or by frequency analysis. The **Vernam cipher** (one-time pad) XORs the data with a truly random key at least as long as the message, used only once. With plaintext 1001101 and key 0110111, the ciphertext is 1111010; XOR again with the key to recover 1001101. Used correctly it cannot be broken, but the key must be shared securely and never reused, which is hard in practice.

## Common mistakes

- Forgetting to add 1 after inverting in two's complement, or giving the range of 8-bit two's complement as -127 to 128.
- Writing a mantissa that is not normalised, so the answer is not unique.
- Mixing bits and bytes in file-size questions; divide by 8 last.
- Saying parity "corrects" errors. It only detects.
- Saying hexadecimal saves memory. It is only a notation.

## Exam technique

**Convert**, **calculate** and **show** need full working because marks are given for method. For "explain" questions about compression, state the type, the mechanism and one consequence (for example, "lossy removes detail the ear is unlikely to notice, so the file is smaller but cannot be restored"). Always give units.

## Check your understanding

1. Give the 8-bit two's complement of -1. *Answer: 11111111.*
2. Convert 11010011 (unsigned) to hexadecimal. *Answer: D3 (1101 = D, 0011 = 3).*
3. Why is a normalised floating-point mantissa preferred? *Answer: it uses all the bits for precision and gives each number a single representation.*
4. What does increasing the exponent size do? *Answer: it increases the range, but with a fixed total number of bits it reduces the mantissa and so the precision.*
5. Compute the size of a 640 x 480 image with 8-bit colour, in bytes. *Answer: 640 x 480 x 8 / 8 = 307,200 bytes.*
6. Apply RLE to AAABBBBC. *Answer: (A,3), (B,4), (C,1).*
7. State why a one-time pad is unbreakable when used correctly. *Answer: the key is random, as long as the message and never reused, so every plaintext is equally likely.*
8. Even parity is used. The seven data bits 1011001 contain four 1s. What is the parity bit? *Answer: 0.*
