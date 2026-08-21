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
[Data Representation study guide](/resources/igcse-computer-science-data-representation/).

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
| Unicode | 16+ | Every writing system |

Unicode supports all languages but produces **larger file sizes**.

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

## Compression

| | Lossless | Lossy |
|---|---|---|
| Data | All recoverable | Permanently discarded |
| Method | Removes redundancy (e.g. RLE) | Removes detail humans barely notice |
| File size | Larger | Much smaller |
| Use for | Text, program files, spreadsheets | Photos, music, video |

Never use lossy for a file where every byte matters — a program would not run.

## Exam traps

- Divide by **1024**, not 1000, for KB and MB.
- Don't forget bits → bytes (÷8) before converting further.
- Sample **rate** vs sample **resolution** — these are different things.
- Hexadecimal is for human readability; the computer stores **binary**.
- Lossy compression is **permanent** — the data cannot be restored.

## Self-test

1. Convert denary 174 to binary and hex.
2. An image is 1024 × 768 with 24-bit colour. Give the size in MB.
3. What causes overflow?
4. Why is Unicode preferred over ASCII for a multilingual website?
5. Which compression type suits a spreadsheet, and why?

**Answers:** 1. 10101110 → nibbles 1010 1110 → **AE**. 2. 1024×768×24 = 18,874,368 bits ÷ 8 = 2,359,296 bytes ÷ 1024 = 2304 KB ÷ 1024 = **2.25 MB**. 3. The result of a calculation requires more bits than the register can hold, so the most significant bit is lost. 4. ASCII cannot represent non-Latin scripts; Unicode covers every writing system. 5. Lossless — any discarded data would corrupt values and formulas.
