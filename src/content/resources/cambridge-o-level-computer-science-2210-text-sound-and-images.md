---
title: "Cambridge O Level Computer Science (2210): Text, sound and images"
seoTitle: "Cambridge O Level CS 2210 Text, Sound, Images Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 1 – Data representation"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 1.2
syllabusTopics:
  - qualification: "o-level"
    topic: "data-representation-2210"
  - qualification: "o-level"
    topic: "data-representation-2210"
    subtopic: "text-sound-and-images-2210"
description: "Study guide to Cambridge O Level Computer Science 2210 section 1.2: character sets (ASCII and Unicode), sampling sound, and representing images with pixels, resolution and colour depth."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Section 1.2 of Cambridge O Level Computer Science 2210 has three learning statements. Candidates should understand how and why a computer represents **text**, with character sets including ASCII and Unicode; **sound**, including the effects of sample rate and sample resolution; and **images**, including the effects of resolution and colour depth. All three rest on one idea: a computer can only store binary, so each kind of data must first be converted into patterns of 0s and 1s.

This guide explains each in turn, with worked examples and the wording that earns marks. File size calculations belong to the next section of the syllabus (1.3), so here we focus on how the data is represented and what changes when the settings change.

## Part 1: representing text

### Why a character set is needed

A keyboard has letters, digits and symbols. A processor has only binary. A **character set** is the agreed list of characters a computer can recognise, with a unique binary number (a **character code**) for each one. When you press a key, the code for that character is stored. When the text is displayed, the code is looked up again and the matching shape is drawn.

Everyone must use the same table, otherwise a file written on one computer would show the wrong characters on another.

### ASCII

**ASCII** stands for American standard code for information interchange. It gives each character a code number. The code values are ordered, which helps in sorting and in working out other codes:

| Character | Denary code | 8-bit binary |
|---|---|---|
| 0 | 48 | 00110000 |
| A | 65 | 01000001 |
| B | 66 | 01000010 |
| C | 67 | 01000011 |
| a | 97 | 01100001 |

Because the capital letters are in order, B is one more than A, and C is one more than B. Lower-case letters are 32 above their capitals (a is 97, A is 65).

**Worked example:** the word CAB is stored as three codes, 67, 65 and 66, which in binary are 01000011, 01000001 and 01000010. If you are told that H has code 72, then I has code 73 and the binary for I is 01001001.

ASCII has a limited number of codes. It covers English letters, digits, punctuation and control characters, but it cannot cover many other alphabets.

### Unicode

**Unicode** is a much larger character set. It allows a greater range of characters and symbols than ASCII, including characters from **different languages** and **emojis**. To hold so many different codes it needs **more bits per character** than ASCII.

| | ASCII | Unicode |
|---|---|---|
| Range of characters | Smaller | Much greater |
| Languages | Mainly English | Many languages and scripts |
| Emojis and symbols | No | Yes |
| Bits per character | Fewer | More |
| Size of a text file | Smaller | Larger for the same number of characters |

The cost of Unicode is storage: the same text takes up more space, because every character uses more bits. The benefit is that text in any language and emojis can be stored and shown correctly.

## Part 2: representing sound

Real sound is an analogue wave: its height (amplitude) changes smoothly and continuously. A computer cannot store a continuous wave, so it takes **samples**.

1. A microphone converts the sound wave to an electrical signal.
2. At regular intervals, the height of the wave is measured. Each measurement is a **sample**.
3. Each sample is converted to a binary number and stored.

To play the sound back, the binary values are converted to a signal again, and the speaker reproduces the wave from the stored points.

### Sample rate

The **sample rate** is the number of samples taken in one second. It is measured in hertz (Hz). A rate of 8000 Hz means 8000 samples every second.

### Sample resolution

The **sample resolution** is the number of **bits per sample**. It decides how many different heights each sample can take. With *n* bits there are 2 to the power *n* possible levels.

| Resolution | Number of levels |
|---|---|
| 3 bits | 8 |
| 8 bits | 256 |
| 16 bits | 65,536 |

**Worked example:** a system uses a 3-bit resolution, so each sample is one of eight levels, 0 to 7. Five samples read 2, 5, 7, 4 and 1. They are stored as 010, 101, 111, 100 and 001, which is 15 bits in total. If the wave actually lay at a height between two levels, the nearest level would be stored, so some detail is lost.

### Effects of changing the settings

| Change | Accuracy of the recording | File size |
|---|---|---|
| Higher sample rate | Higher: the shape of the wave is followed more closely | Larger |
| Lower sample rate | Lower: detail between samples is missed | Smaller |
| Higher sample resolution | Higher: the heights are closer to the real values | Larger |
| Lower sample resolution | Lower: heights are rounded more roughly | Smaller |

So **the accuracy of the recording and the file size both increase as the sample rate and the resolution increase**. This is the key idea examiners test. You must always link the two: better quality costs more storage.

## Part 3: representing images

An image is made of a grid of tiny squares called **pixels**. Each pixel has a single colour, and that colour is stored as a binary number. A large number of small pixels looks like a smooth picture when viewed from normal distance.

### Resolution

The **resolution** of an image is the **number of pixels** in it. It is often given as width by height, such as 800 by 600, which gives 480,000 pixels.

### Colour depth

The **colour depth** is the **number of bits used to represent each colour** (per pixel). With *n* bits there are 2 to the power *n* possible colours.

| Colour depth | Number of colours |
|---|---|
| 1 bit | 2 (for example black and white) |
| 4 bits | 16 |
| 8 bits | 256 |
| 24 bits | 16,777,216 |

### A worked example: a one-bit image

Let 1 mean black and 0 mean white. A very small image, six pixels wide and six pixels high, is stored row by row:

```
111111
001100
001100
001100
001100
001100
```

When the pixels are drawn, the black pixels form the letter T. The colour depth is 1 bit and the resolution is 36 pixels, so the picture needs 36 bits. To store it, the computer also needs to know the width and height, so it can split the bits into rows again.

### Effects of changing the settings

| Change | Quality of the image | File size |
|---|---|---|
| Higher resolution (more pixels) | Better: finer detail | Larger |
| Lower resolution | Worse: blocky when enlarged | Smaller |
| Higher colour depth | Better: more shades and colours | Larger |
| Lower colour depth | Worse: fewer colours, banding | Smaller |

Again the rule is two-sided: the **quality and the file size of the image increase as the resolution and the colour depth increase**.

## Common mistakes

- **Mixing up the sound terms.** Sample rate is samples per second. Sample resolution is bits per sample.
- **Mixing up the image terms.** Resolution is the number of pixels. Colour depth is bits per pixel.
- **Saying Unicode "has more bits".** Say that it needs more bits per character, which is why it can hold more characters.
- **Forgetting the downside.** A higher setting always costs file size. If you only write the improvement, you lose the second mark.
- **Saying the computer "stores the sound wave".** It stores binary samples of the wave.
- **Describing a pixel as a unit of colour depth.** A pixel is one square; colour depth is the number of bits for its colour.

## Exam technique

- **Explain why a computer uses a character set**: each character needs a unique binary code so it can be stored and processed; the same set must be used to display it.
- **Compare ASCII and Unicode**: range of characters, languages and emojis, and the number of bits per character.
- **Describe how sound is stored**: sampled at regular intervals, each sample converted to binary.
- **Explain the effect of a change**: name the setting, say what happens to quality or accuracy, and then say what happens to file size.

## Quick check

1. If A has code 65, what is the denary code of E? *69.*
2. How many different colours can be stored with a colour depth of 8 bits? *256.*
3. What is meant by a sample rate of 44,100 Hz? *44,100 samples are taken every second.*
4. A sound is re-recorded with a lower resolution. Give one effect. *The recording is less accurate and the file is smaller.*
5. Why does a text file in Unicode usually take more space than the same text in ASCII? *Each character needs more bits.*

## Continue with

Revise with the [Data Representation revision notes](/resources/o-level-computer-science-data-representation-revision-notes/) and practise with the [Text, sound and images practice questions](/resources/cambridge-o-level-computer-science-2210-text-sound-and-images-practice/).
