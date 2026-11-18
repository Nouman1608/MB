---
title: "Cambridge IGCSE Computer Science (0478): Text, sound and images -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 1: Data representation"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 1.2
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-0478"
    subtopic: "text-sound-and-images-0478"
description: "Condensed Cambridge IGCSE Computer Science 0478 notes on character sets, ASCII, Unicode, sound sampling, resolution and colour depth, with a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **1.2 Text, sound and images** from Topic 1, Data representation, of the Cambridge IGCSE
Computer Science 0478 syllabus for 2026 to 2028 (Paper 1, Computer systems). For explanations and worked examples,
read the [Text, sound and images study guide](/resources/cambridge-igcse-computer-science-0478-text-sound-and-images/),
then try the
[Text, sound and images practice questions](/resources/cambridge-igcse-computer-science-0478-text-sound-and-images-practice/).
File-size calculations are in the
[Data storage and compression revision notes](/resources/cambridge-igcse-computer-science-0478-data-storage-and-compression-revision-notes/).

## The big idea

Computers process and store only **binary**, so text, sound and images must all be **converted to binary**.

## Text

- **Character set**: all the characters a computer can represent, each with a **unique binary code**.
- Sender and receiver must use the **same** character set.
- **ASCII**: **7 bits** per character → **128** characters (extended ASCII: 8 bits → 256).
- ASCII covers English letters, digits, punctuation and control characters.
- Codes are **in sequence**: A = 65, B = 66 ... ; a = 97 (lower case = capital + 32); digit "0" = 48.
- **Unicode**: a **greater range** of characters and symbols, including **different languages** and **emojis**.
- Unicode needs **more bits per character** than ASCII → **larger files** for the same text.

| Use ASCII when | Use Unicode when |
|---|---|
| Only English letters, digits and basic symbols are needed | Several languages or scripts are needed |
| Data must be as small as possible | Emojis or special symbols are needed |

## Sound

```
analogue sound wave → amplitude measured at regular intervals (sampling)
→ each sample stored as a binary number → digital sound
```

| Term | Meaning | Increase it → |
|---|---|---|
| Sample rate | Number of samples taken per second (Hz) | More accurate; larger file |
| Sample resolution | Number of bits per sample | More accurate; larger file |

Levels from resolution: n bits → **2ⁿ** possible values (8-bit: 256; 16-bit: 65 536).

## Images

| Term | Meaning | Increase it → |
|---|---|---|
| Pixel | Smallest element of a bitmap image | -- |
| Resolution | Number of pixels in the image (width × height) | More detail, sharper when enlarged; larger file |
| Colour depth | Number of bits used to represent each colour (per pixel) | More colours, more realistic; larger file |

Colours from colour depth: n bits → **2ⁿ** colours.

```
1-bit = 2   4-bit = 16   8-bit = 256   16-bit = 65 536   24-bit = 16 777 216
```

**Method: minimum colour depth for k colours**

```
find the smallest n with 2ⁿ ≥ k
e.g. 50 colours: 2⁵ = 32 (too few), 2⁶ = 64 → 6 bits
```

## Sound and images side by side

The two media follow the same pattern, which makes "explain the effect" answers quicker to write.

| | Sound | Image |
|---|---|---|
| What is measured | Amplitude, at regular time intervals | Colour, at each pixel position |
| "How many" setting | Sample rate (samples per second) | Resolution (number of pixels) |
| "How precisely" setting | Sample resolution (bits per sample) | Colour depth (bits per pixel) |
| Raise either setting | More accurate; larger file | Better quality; larger file |
| Lower either setting | Less accurate; smaller file | Poorer quality; smaller file |

## Key terms

| Term | Meaning |
|---|---|
| Character set | Characters a computer can represent, each with a unique binary code |
| ASCII | 7-bit character set of 128 characters |
| Unicode | Character set with a much greater range, including other languages and emojis |
| Analogue | Continuously varying |
| Digital | Stored as discrete binary values |
| Sampling | Measuring the amplitude of a sound wave at regular intervals |
| Sample rate | Samples per second |
| Sample resolution | Bits per sample |
| Resolution (image) | Number of pixels |
| Colour depth | Bits per pixel (to represent each colour) |

## Exam traps

- "Unicode saves space": it uses **more** bits per character.
- Sample rate and sample resolution swapped.
- Sampling said to measure frequency instead of **amplitude**.
- Resolution defined as "quality" or "clarity" rather than **number of pixels**.
- 2 × n instead of 2ⁿ for the number of colours or levels.
- Trade-off answers that mention quality but not file size, or file size but not quality.
- Forgetting that the digit "5" stored as text is a character code, not the binary value 5.

## Quick self-test

1. What is a character set?
2. How many bits does ASCII use per character, and how many characters does that give?
3. The code for D is 68. What is the code for H?
4. The code for G is 71. What is the code for g?
5. Give two reasons a social media app would use Unicode rather than ASCII.
6. What is the drawback of Unicode compared with ASCII?
7. Why must sound be sampled before it is stored?
8. Define sample rate.
9. How many amplitude levels can a 12-bit sample resolution represent?
10. Define colour depth.
11. What is the smallest colour depth that allows 200 different colours?
12. State the effect on quality and on file size of reducing an image's resolution.

### Answers

1. All the characters a computer can represent, each with its own unique binary code.
2. 7 bits; 128 characters.
3. 72.
4. 103 (71 + 32).
5. Users write in many languages; users want to send emojis.
6. It uses more bits per character, so files are larger.
7. Sound is analogue; the computer can only store digital (binary) data.
8. The number of samples taken each second.
9. 2¹² = 4096.
10. The number of bits used to represent each colour (each pixel).
11. 8 bits (2⁷ = 128 is too few; 2⁸ = 256).
12. Quality falls (less detail, more pixelated); file size decreases.

## Official syllabus

Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028 (Cambridge International) -- Topic 1 Data
representation, 1.2 Text, sound and images.
