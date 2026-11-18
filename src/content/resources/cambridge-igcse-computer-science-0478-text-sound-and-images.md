---
title: "Cambridge IGCSE Computer Science (0478): Text, sound and images"
resourceType: "study-guides"
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
description: "Cambridge IGCSE Computer Science 0478 text, sound and images in depth: character sets, ASCII and Unicode, sampling sound, pixels, resolution and colour depth."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into **1.2 Text, sound and images**, the second subtopic of Topic 1, Data representation, in
the Cambridge IGCSE Computer Science 0478 syllabus for 2026 to 2028, examined on Paper 1, Computer systems. The
[Data Representation study guide](/resources/igcse-computer-science-data-representation/) summarises the whole
topic. This page explains **how** and **why** each type of data is turned into binary, with worked examples on
character codes, sample resolution and colour depth. File-size calculations belong to 1.3 and are taught in the
[Data storage and compression study guide](/resources/cambridge-igcse-computer-science-0478-data-storage-and-compression/).
For quick recall, use the
[Text, sound and images revision notes](/resources/cambridge-igcse-computer-science-0478-text-sound-and-images-revision-notes/),
and test yourself with the
[Text, sound and images practice questions](/resources/cambridge-igcse-computer-science-0478-text-sound-and-images-practice/).

## What 1.2 asks you to do

- Understand how and why a computer represents **text**, and the use of **character sets**, including **ASCII** and
  **Unicode**.
- Understand how and why a computer represents **sound**, including the effects of the **sample rate** and **sample
  resolution**.
- Understand how and why a computer represents an **image**, including the effects of the **resolution** and
  **colour depth**.

The "why" in every case is the same: a computer can only process and store binary, so text, sound and images must
all be converted into binary first.

## Text and character sets

When you press a key, the computer stores a binary number for that character. A **character set** is the list of
all the characters a computer can represent, with a **unique binary code** for each one. Sender and receiver must use
the same character set, or the codes will be turned back into the wrong characters.

### ASCII

**ASCII** (American Standard Code for Information Interchange) uses **7 bits** per character, giving 2⁷ = **128**
different codes. It covers the English alphabet in upper and lower case, the digits 0 to 9, punctuation and some
control characters. An extended version uses 8 bits for 256 characters.

Codes run in order, which lets programs sort and convert text:

| Character | Denary code | 7-bit binary |
|---|---|---|
| A | 65 | 1000001 |
| C | 67 | 1000011 |
| T | 84 | 1010100 |
| a | 97 | 1100001 |
| 0 (the digit) | 48 | 0110000 |

**Worked example 1.** Using the table, the word CAT is stored as 1000011 1000001 1010100. If A is 65, then E, four
letters later, must be 69, and the lower-case letter is always 32 more than its capital (a = 97).

Note that the **digit** "0" has code 48. Storing a number as text (the characters "4" and "2") is not the same as
storing the value 42 in binary.

### Unicode

ASCII cannot represent characters outside its small set, such as letters from other alphabets, many symbols, or
emojis. **Unicode** was created to represent a far **greater range of characters and symbols**, including **different
languages** and **emojis**.

The cost is space: **Unicode requires more bits per character than ASCII**. A document stored in Unicode can be
larger than the same English text stored in ASCII.

| | ASCII | Unicode |
|---|---|---|
| Bits per character | 7 (8 for extended) | More than ASCII |
| Range | 128 characters (256 extended) | Very large: many languages and symbols |
| Emojis and non-Latin scripts | No | Yes |
| File size for the same text | Smaller | Larger |

**Choosing a character set in a scenario.** A website for users who write in many languages needs Unicode, because
ASCII cannot represent their characters. A small embedded device that only ever displays English digits and capital
letters could use ASCII to keep the data small.

## Sound

Sound is **analogue**: it is a continuously varying wave. To store it, the computer must convert it to **digital**
form. It does this by **sampling**: measuring the amplitude (height) of the sound wave at regular intervals and
storing each measurement as a binary number.

- **Sample rate**: the **number of samples taken in a second**, measured in hertz (Hz).
- **Sample resolution**: the **number of bits used to store each sample**.

### Effect of sample rate

More samples per second means the measurements are closer together in time. The stored version follows the shape of
the original wave more closely, so it is **more accurate**. But more samples must be stored, so the **file size
increases**.

### Effect of sample resolution

With n bits per sample, each measurement can be one of 2ⁿ values.

**Worked example 2.**

```
4-bit resolution  → 2⁴  = 16 possible amplitude levels
8-bit resolution  → 2⁸  = 256 levels
16-bit resolution → 2¹⁶ = 65 536 levels
```

With only 16 levels, the true amplitude is rounded to the nearest of a few steps, so the recording is less accurate.
With 65 536 levels, each sample is much closer to the true value. More bits per sample means **greater accuracy** and
a **larger file**.

**Summary of the trade-off:** increasing either the sample rate or the sample resolution increases the accuracy of
the recording and increases the file size.

## Images

A bitmap image is made of a grid of **pixels** (picture elements). The colour of each pixel is stored as a binary
number.

- **Resolution**: the **number of pixels** in the image, usually given as width × height, such as 1920 × 1080.
- **Colour depth**: the **number of bits used to represent each colour** (the bits stored for each pixel).

### Effect of colour depth

With n bits per pixel, 2ⁿ different colours are possible.

**Worked example 3.**

```
1-bit  → 2 colours (for example black and white)
4-bit  → 16 colours
8-bit  → 256 colours
24-bit → 16 777 216 colours
```

An artist needs 50 different colours. 5 bits give only 32, so the colour depth must be at least **6 bits** (64
colours).

A greater colour depth allows more colours and smoother shading, so the image looks more realistic, but each pixel
takes more bits, so the **file size increases**.

### Effect of resolution

More pixels means more detail, and the image stays sharp when it is enlarged. Fewer pixels make edges look blocky
(pixelated). Every extra pixel must be stored, so a **higher resolution increases the file size**.

**Summary of the trade-off:** increasing resolution or colour depth improves image quality and increases file size.

## Common mistakes

- Defining a character set as "the keyboard". It is the set of characters a computer can represent, each with a
  unique binary code.
- Saying Unicode "uses less memory". It uses more bits per character than ASCII.
- Mixing up sample rate (samples per second) and sample resolution (bits per sample).
- Saying sampling "records the frequency". It records the amplitude at regular intervals.
- Defining resolution as "the quality of the image". Resolution is the number of pixels.
- Giving the number of colours for n bits as 2n instead of 2ⁿ.
- Describing only one side of a trade-off: always give the quality effect and the file-size effect.

## Exam technique

**Explain how** a computer represents sound: give the process in order (analogue wave, sampled at intervals,
amplitude measured, stored as binary). **Explain the effect** of a change: name what improves and say that the file
size increases. **Describe** a character set by mentioning the unique binary code for each character. If a scenario
asks you to **justify** ASCII or Unicode, link the choice to the characters needed and to the file size.

## Official syllabus

Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028 (Cambridge International) -- Topic 1 Data
representation, 1.2 Text, sound and images.
