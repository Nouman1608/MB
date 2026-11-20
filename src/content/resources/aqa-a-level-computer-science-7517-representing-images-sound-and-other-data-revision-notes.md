---
title: "AQA A-Level Computer Science (7517): Representing images, sound and other data -- Revision Notes"
seoTitle: "AQA A-Level CS Images, Sound and Data Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data representation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 5.6
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
    subtopic: "representing-images-sound-and-other-data-7517"
description: "Condensed AQA 7517 section 4.5.6 recall: bitmaps, vectors, sound, MIDI, ADC and DAC, compression and encryption, with calculations and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.5.6 Representing images, sound and other data**, AQA A-Level Computer Science (7517). Fuller explanations are in the [representing images, sound and other data study guide](/resources/aqa-a-level-computer-science-7517-representing-images-sound-and-other-data/); exam-style questions are in the [representing images, sound and other data practice questions](/resources/aqa-a-level-computer-science-7517-representing-images-sound-and-other-data-practice/).

## Bit patterns, analogue and digital

- Bit patterns can represent numbers, text, images, sound and other data; the **interpretation** decides which.
- **Analogue:** varies continuously. **Digital:** discrete values only.
- **ADC:** sample the signal, round to the nearest level, output a binary number. Used with **analogue sensors**.
- **DAC:** convert binary values to voltages and smooth them. Most common use: digital audio to an analogue signal.

## Bitmaps

- Grid of **pixels**; each pixel stored as a binary colour value.
- **Size in pixels** = width × height. **Colour depth** = bits per pixel (n bits give 2ⁿ colours). **Resolution** = dots (pixels) per inch.
- **Storage (without metadata)** = width × height × colour depth (bits).
- **Metadata:** for example width, height and colour depth.

| Image | Calculation | Size |
|---|---|---|
| 800 × 600, 24-bit | 480,000 × 24 ÷ 8 | 1,440,000 bytes (about 1.37 MiB) |
| 1024 × 768, 8-bit | 786,432 × 8 ÷ 8 | 786,432 bytes (768 KiB) |
| 64 × 64, 8-bit | 4,096 × 1 | 4,096 bytes |
| 20 × 20, 1-bit | 400 ÷ 8 | 50 bytes |

## Vector graphics

- Stored as a **list of objects** with **properties** (shape, position, size, line colour, fill colour).
- **Scale without loss of quality**. Small files for simple images. Easy to edit objects.
- Uses: logos, diagrams, signs, technical drawings.

| | Bitmap | Vector |
|---|---|---|
| Scaling | Pixelates | Clean |
| File size | Pixels × depth | Number of objects |
| Best for | Photographs | Logos, diagrams |

## Sound

- **Sampling rate:** samples per second. **Sample resolution:** bits per sample.
- **Nyquist theorem:** sampling rate at least **twice the highest frequency** in the sound.
- **Size** = rate × resolution × seconds × channels (bits).
- 3 minutes of stereo at 44,100 Hz, 16 bits: 44,100 × 16 × 180 × 2 = 254,016,000 bits = 31,752,000 bytes (about 30.3 MiB).
- Mono, 8,000 Hz, 8 bits, 10 seconds: 80,000 bytes.
- Telephone speech up to 4 kHz needs a rate of at least 8 kHz.

## MIDI

- Stores **event messages**, not sound: note on and off, instrument, volume, pitch bend.
- **Advantages:** very small files; easy to edit notes, tempo and instruments; same file can drive different instruments.
- **Disadvantages:** no recorded speech or sound; result depends on the playback device.

## Compression

| | Lossless | Lossy |
|---|---|---|
| Data lost | None | Some, permanently |
| Original restored | Yes | No |
| Size reduction | Moderate | Large |
| Use | Text, programs, images where all detail is needed | Photographs, music, video |

**Why compress:** save storage space and reduce transmission time.

**RLE:** store each run as value and count. AAAABBBCCD becomes (4, A), (3, B), (2, C), (1, D). The bit row 0000011111100 becomes (5, 0), (6, 1), (2, 0). Works well with long runs and badly where few values repeat.

**Dictionary methods:** replace repeated sequences with short codes that point to dictionary entries. Good for text and data with repeated patterns.

## Encryption

- **Plaintext**, **ciphertext**, **cipher**, **key**.
- **Caesar:** shift each letter by a fixed number. HELLO with shift 3 gives KHOOR. Decrypt by shifting back. **Easily cracked:** only 25 shifts to try, and letter frequencies are preserved.
- **Vernam (one-time pad):** random key as long as the message, used **once only**. Binary: **XOR** plaintext with key. 01001000 XOR 10110101 = 11111101; XOR with the key again returns 01001000. Letters: add positions modulo 26; CAT with key DOG gives FOZ.
- **Perfect security:** the ciphertext reveals nothing about the plaintext, because the key is random and used once. Proved mathematically.
- **Computational security:** all other ciphers could be broken in theory with enough ciphertext and time, but it would take too long to be practical.
- Vernam is hard to use: long random keys must be created, shared safely and never reused.

## Exam traps

- **Bits against bytes** in a size.
- **Channels** forgotten in sound size.
- **Nyquist** misquoted. It relates sampling rate to the highest frequency.
- **MIDI** described as recorded sound.
- **Lossy** described as reversible.
- **Vernam** described as unbreakable without the conditions: random, as long as the message, used once.
- **Vectors** said to use pixels.

## Key terms

| Term | Definition |
|---|---|
| Pixel | The smallest element of a bitmap image |
| Colour depth | The number of bits stored for each pixel |
| Metadata | Data about data, such as the width and height of an image |
| Sampling rate | The number of sound samples taken per second |
| Sample resolution | The number of bits per sound sample |
| ADC | A converter from analogue to digital |
| DAC | A converter from digital to analogue |
| Lossless compression | Compression with no loss of data |
| Lossy compression | Compression that permanently removes data |
| Plaintext | The original message before encryption |
| Ciphertext | The message after encryption |

## Self-test

1. How many colours can be shown with a colour depth of 8 bits?
2. Calculate the size in bytes of a 100 × 50 image with 24-bit colour.
3. Why do vector graphics not pixelate when enlarged?
4. What is the minimum sampling rate for sound with highest frequency 15 kHz?
5. Calculate the size in bytes of 1 minute of mono sound at 44,100 Hz and 16 bits.
6. What does a MIDI message contain?
7. Give the RLE of AAABCCCC.
8. Encrypt CAT with a Caesar shift of 3.
9. Why is the Caesar cipher easy to crack?
10. Why does the Vernam cipher have perfect security?

**Answers**

1. 2⁸ = 256.
2. 100 × 50 × 24 ÷ 8 = 15,000 bytes.
3. The image is stored as shapes and properties and is redrawn at the new size.
4. At least 30 kHz (twice 15 kHz).
5. 44,100 × 16 × 60 ÷ 8 = 5,292,000 bytes.
6. An event, such as note on, note off, instrument change or volume, not the sound itself.
7. (3, A), (1, B), (4, C).
8. FDW.
9. Only 25 shifts, and letter frequencies are kept.
10. The key is random, as long as the message and used once, so the ciphertext gives no information about the plaintext.

## Related resources

- [Representing images, sound and other data study guide](/resources/aqa-a-level-computer-science-7517-representing-images-sound-and-other-data/)
- [Representing images, sound and other data practice questions](/resources/aqa-a-level-computer-science-7517-representing-images-sound-and-other-data-practice/)
- [Units of information revision notes](/resources/aqa-a-level-computer-science-7517-units-of-information-revision-notes/)
- [Information coding systems revision notes](/resources/aqa-a-level-computer-science-7517-information-coding-systems-revision-notes/)
