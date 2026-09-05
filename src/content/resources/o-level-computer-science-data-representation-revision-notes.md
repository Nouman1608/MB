---
title: "O Level Computer Science: Data Representation — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 1 – Data Representation"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 1
syllabusTopics:
  - qualification: "o-level"
    topic: "data-representation-2210"
description: "Condensed recall notes on binary, hexadecimal, character sets, images, sound and compression for Cambridge O Level Computer Science 2210."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Data Representation study guide](/resources/o-level-cambridge-computer-science-data-representation/).

## Number bases

**Denary to binary:** repeatedly divide by 2 and read the remainders **upwards**.
**Binary to denary:** add the place values where a 1 appears.
**Binary to hex:** split into groups of **four bits from the right** and convert each.

**Why hexadecimal is used:** it is far more compact than binary, and **each hex digit maps to exactly four binary digits**, so conversion is trivial and human error is much less likely. Used for memory addresses, MAC addresses, colour codes and error codes.

**Worked example.** Convert denary 205 to hexadecimal.

```
Denary 205  ->  Binary 11001101  ->  Hex CD

128 64 32 16  8  4  2  1
  1  1  0  0  1  1  0  1     = 128+64+8+4+1 = 205

Split into nibbles: 1100 = 12 = C,  1101 = 13 = D  ->  CD
```

## Binary addition and overflow

```
0+0=0    0+1=1    1+1=10 (carry)   1+1+1=11 (carry)
```

**Overflow** occurs when the result needs more bits than the register holds. In 8 bits the largest unsigned value is 255, so adding beyond that gives an incorrect result. The phrasing that scores is *"the result is too large for the number of bits allocated"*.

## Binary shifts

- **Left shift** by n → multiply by 2ⁿ.
- **Right shift** by n → divide by 2ⁿ, discarding the remainder.

Bits shifted out are lost, so shifting can lose data — which is why repeated shifting is not reversible.

## Character sets

**ASCII** — 7 bits, 128 characters; extended ASCII uses 8 bits for 256.
**Unicode** — up to 32 bits in a fixed-width encoding, covering a very wide range of the world's writing systems.

**Unicode was needed because ASCII could not represent non-Latin scripts** such as Arabic, Chinese or Urdu. The trade-off is that Unicode text can require more storage per character.

Note that character codes are ordered, so `'A'` (65) is less than `'a'` (97), which is why case-sensitive sorting behaves as it does.

## Images

**Bitmap images** are grids of pixels.

```
file size = width x height x colour depth
```

- **Resolution** — number of pixels.
- **Colour depth** — bits per pixel; n bits give **2ⁿ** colours.

**Higher resolution and colour depth give better quality but larger files.** That trade-off answers most image questions.

**Vector graphics** store the properties of objects rather than pixels, so they **scale without loss of quality** and are usually smaller for line art — but they are unsuitable for photographs.

**Worked example.** An image is 800 by 600 pixels with a colour depth of 24 bits. Find the file size in megabytes.

```
bits  = 800 x 600 x 24 = 11 520 000 bits
bytes = 11 520 000 / 8 = 1 440 000 bytes
KB    = 1 440 000 / 1024 = 1406.25 KB
MB    = 1406.25 / 1024   = 1.37 MB
```

Dividing by 8 to reach bytes, then by 1024 **twice** to reach MB, is where most marks are lost.

## Sound

```
file size = sample rate x bit depth x duration
```

- **Sample rate** — samples per second (Hz).
- **Bit depth (resolution)** — bits per sample.

**Sampling is an approximation of a continuous wave.** A higher sample rate captures the waveform more faithfully and a higher bit depth records each amplitude more precisely — so both improve accuracy at the cost of file size.

## Compression

| | Lossless | Lossy |
|---|---|---|
| Data | **Fully recoverable** | Permanently removed |
| Use | Text, program files, spreadsheets | Images, audio, video |
| Method | Run-length encoding | JPEG, MP3 |

**Lossless must be used where every bit matters** — a compressed program or spreadsheet missing data would be corrupt. Lossy is acceptable where the removed data is imperceptible to human senses.

**Run-length encoding** replaces runs of identical values with a value and a count. It works well on images with large uniform areas but **can produce a larger file** on noisy or photographic data — so compression does not always reduce size.

## Exam traps

- Reading binary remainders downwards.
- Saying hex is used because computers work in it — they work in binary.
- Confusing resolution with colour depth.
- Saying lossy compression is always worse.
- Assuming RLE always shrinks a file.
- Forgetting that shifting can lose bits.
- Dividing by 1024 only once when converting bits to megabytes, instead of twice (bits to bytes, then bytes to KB, then KB to MB).
- Splitting a binary number into nibbles from the wrong end when converting to hex.

## Self-test

1. Why is hexadecimal used rather than binary?
2. What is overflow, and how should it be described?
3. Why was Unicode introduced?
4. Give the two file-size formulae for images and sound.
5. When is run-length encoding a poor choice?
6. Convert denary 205 to hexadecimal, showing the binary intermediate step.
7. An image is 800 × 600 pixels with a colour depth of 24 bits. Calculate its file size in megabytes.

**Answers:** 1. It is far more compact and each hex digit corresponds to exactly four binary digits, making conversion straightforward and reducing human error. 2. When the result of a calculation requires more bits than the register can hold, so the stored value is incorrect. 3. ASCII could not represent non-Latin writing systems, so a larger character set was needed to cover a very wide range of the world's scripts. 4. Image: width × height × colour depth. Sound: sample rate × bit depth × duration. 5. On noisy or photographic data with few repeated adjacent values, where it can produce a file larger than the original. 6. 205 = 11001101 in binary, split into nibbles 1100 (C) and 1101 (D), giving CD in hexadecimal. 7. 800 × 600 × 24 = 11,520,000 bits ÷ 8 = 1,440,000 bytes ÷ 1024 = 1406.25 KB ÷ 1024 ≈ 1.37 MB.
