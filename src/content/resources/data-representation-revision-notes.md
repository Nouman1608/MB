---
title: "Data Representation: Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Data representation"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-0478"
description: "Condensed recall notes on binary, hexadecimal, character sets, images, sound and compression for Cambridge IGCSE Computer Science 0478."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For worked examples, use the
[Data Representation study guide](/resources/igcse-computer-science-data-representation/),
which covers Topic 1 (1.1 Number systems, 1.2 Text/sound/images, 1.3
Data storage and compression) in full for Cambridge IGCSE Computer
Science 0478, 2026–2028 series. For further exam-style practice with
worked answers on this topic, see the [Data Representation practice
questions](/resources/data-representation-practice/).

## Number conversions

```
Denary -> Binary : subtract place values 128 64 32 16 8 4 2 1
Binary -> Hex    : split into NIBBLES (4 bits), convert each
Hex digits       : 0-9 then A=10 B=11 C=12 D=13 E=14 F=15

Example  217  ->  11011001  ->  1101 1001  ->  D9
```

Hex is used because it is compact and readable for humans: MAC addresses, IPv6, colour codes, memory dumps, error codes.

## Binary arithmetic

- Add column by column, carrying when the total reaches 2.
- **Overflow** — the result needs more bits than the register holds; the extra bit is lost and the answer is wrong.
- **Logical shift left** = ×2 per place. **Right** = ÷2 per place. Bits shifted out are lost.

## Character sets

| Set | Bits | Characters |
|---|---|---|
| ASCII | 7 | 128 |
| Extended ASCII | 8 | 256 |
| Unicode | 16+ | Very wide range of writing systems |

Unicode supports a very wide range of languages and scripts but can produce **larger file sizes** than ASCII, though UTF-8 keeps ASCII characters at a single byte.

## File size formulas

```
IMAGE  size (bits) = width x height x colour depth
SOUND  size (bits) = sample rate x sample resolution x seconds

bits -> bytes : / 8
bytes -> KB   : / 1024      KB -> MB : / 1024
```

- **Resolution** = number of pixels. **Colour depth** = bits per pixel; n bits gives 2ⁿ colours.
- **Sample rate** = samples per second (Hz). **Sample resolution** = bits per sample.
- Increasing any of these improves quality **and** increases file size.

## Two's complement

Represents **negative** numbers in binary. The most significant bit
has a **negative place value**:

```
8-bit place values:  -128  64  32  16  8  4  2  1

Example: represent -19
  19 in binary        = 00010011
  Flip every bit      = 11101100
  Add 1               = 11101101   <- this is -19

Check: -128+64+32+8+4+1 = -19 (correct)
```

To convert back to denary, sum the place values directly using the
**negative** value for the leftmost bit — there is no need to reverse
the flip-and-add-one process to read a two's complement number.

## Compression

| | Lossless | Lossy |
|---|---|---|
| Data | All recoverable | Permanently discarded |
| Method | Removes redundancy (e.g. RLE) | Removes detail humans barely notice |
| File size | Larger | Much smaller |
| Use for | Text, program files, spreadsheets | Photos, music, video |

Never use lossy for a file where every byte matters — a program would not run.

**Run length encoding (RLE)** replaces a run of identical repeated
values with a single value-and-count pair:

```
Original:   WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW
RLE:        12W 1B 12W 3B 24W 1B 14W
```

RLE works best on images with large blocks of a single colour (simple
graphics, icons); it barely helps a photograph, where colour varies
pixel to pixel.

## Data storage units

Each unit is **1024** times the one before it:

```
bit -> nibble (4 bits) -> byte (8 bits) -> kibibyte (KiB)
    -> mebibyte (MiB) -> gibibyte (GiB) -> tebibyte (TiB)
    -> pebibyte (PiB) -> exbibyte (EiB)
```

The "-bi-" (kibi, mebi, gibi...) naming makes explicit that the factor
is 1024, not 1000 — a distinction the syllabus is specific about, even
though "KB" and "MB" remain the everyday terms candidates are used to
seeing.

## Exam traps

- Divide by **1024**, not 1000, for KB and MB.
- Don't forget bits → bytes (÷8) before converting further.
- Sample **rate** vs sample **resolution** — these are different things.
- Hexadecimal is for human readability; the computer stores **binary**.
- Lossy compression is **permanent** — the data cannot be restored.
- In two's complement, forgetting to **add 1** after flipping the bits — the flip alone gives one's complement, not two's complement.
- Applying RLE to a photograph and expecting a large saving — natural images rarely have long runs of identical values, so lossy compression (e.g. JPEG) suits them far better.
- Writing "KB" when the calculation actually used a factor of 1024 throughout — recognise that kibibyte (KiB) is the technically precise term, even though "KB" is still accepted informally.

## Self-test

1. Convert denary 174 to binary and hex.
2. An image is 1024 × 768 with 24-bit colour. Give the size in MB.
3. What causes overflow?
4. Why is Unicode preferred over ASCII for a multilingual website?
5. Which compression type suits a spreadsheet, and why?
6. Represent −19 in 8-bit two's complement.
7. Why does RLE compress a simple icon well but a photograph poorly?

**Answers:** 1. 10101110 → nibbles 1010 1110 → **AE**. 2. 1024×768×24 = 18,874,368 bits ÷ 8 = 2,359,296 bytes ÷ 1024 = 2304 KB ÷ 1024 = **2.25 MB**. 3. The result of a calculation requires more bits than the register can hold, so the most significant bit is lost. 4. ASCII cannot represent non-Latin scripts; Unicode covers a very wide range of the world's writing systems. 5. Lossless — any discarded data would corrupt values and formulas. 6. Write 19 as 00010011, flip every bit to get 11101100, then add 1 to get **11101101**. 7. An icon typically has long runs of identical pixel values that RLE can replace with a single value-and-count pair, while a photograph's colours vary almost pixel to pixel, giving very few long runs to compress.
