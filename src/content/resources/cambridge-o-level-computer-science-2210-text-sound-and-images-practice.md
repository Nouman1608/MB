---
title: "Cambridge O Level Computer Science (2210): Text, sound and images -- Practice Questions"
seoTitle: "Cambridge O Level CS 2210 Text, Sound, Images Questions"
resourceType: "practice-questions"
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
description: "Original questions with answers on Cambridge O Level Computer Science 2210 section 1.2: character sets, ASCII and Unicode, sample rate and resolution, image resolution and colour depth."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Text, sound and images study guide](/resources/cambridge-o-level-computer-science-2210-text-sound-and-images/)

---

## Section A

**1.** State what is meant by a character set. **[1]**

**2.** In an ASCII table the capital letter A has the denary code 65. Give the denary code of the capital letter D. **[1]**

**3.** Give the 8-bit binary code for the denary code 71. **[2]**

**4.** State what is meant by the sample rate of a sound recording. **[1]**

**5.** State what is meant by the sample resolution of a sound recording. **[1]**

**6.** State what is meant by the colour depth of an image. **[1]**

**7.** State the number of different colours that can be stored with a colour depth of 4 bits. **[1]**

## Section B

**8.** A messaging app lets users write in many languages and send emojis.

**(a)** Explain why the app uses Unicode rather than ASCII. **[2]**

**(b)** State **one** disadvantage of using Unicode instead of ASCII for the text. **[1]**

**9.** A sound system uses a sample resolution of 2 bits. Five samples are taken of a sound wave.

**(a)** State the number of different levels that each sample can take. **[1]**

**(b)** The five samples have the levels 3, 0, 2, 1 and 3. Write the sample values in binary, in order. **[2]**

**(c)** State the total number of bits needed to store the five samples. **[1]**

**10.** A sound engineer increases the sample rate and the sample resolution of a recording.

**(a)** Describe the effect on the accuracy of the recording. **[2]**

**(b)** Describe the effect on the file size. **[1]**

**11.** Explain how a computer stores a sound that starts as an analogue wave. **[3]**

**12.** An image is a grid of pixels. Black pixels are shown as # and white pixels as a full stop.

```
#....#
.#..#.
..##..
..##..
.#..#.
#....#
```

**(a)** The image has a colour depth of 1 bit, with 1 for black and 0 for white. Write the binary data for the first three rows of the image. **[3]**

**(b)** State the number of bits needed to store the whole image. **[1]**

**(c)** The image is changed so that each pixel can be one of four colours. State the new colour depth and the new number of bits needed to store the image. **[2]**

**13.** A photographer wants to email a large number of photographs to a client. She considers reducing the resolution of each photograph.

**(a)** Explain the effect on the quality of the photographs. **[2]**

**(b)** Explain the benefit of reducing the resolution. **[2]**

**14.** Compare ASCII and Unicode. **[4]**

**15.** A student says: "A higher sample rate means more bits per sample." Explain why the student is wrong. **[2]**

---

## Answers

**1.** A set of characters that the computer can recognise, each with its own unique binary code [1].

**2.** **68** [1]. (The codes follow the order of the alphabet: A is 65, B is 66, C is 67, D is 68.)

**3.** 71 = 64 + 4 + 2 + 1 [1], giving **01000111** [1].

**4.** The number of samples taken in one second [1].

**5.** The number of bits used for each sample [1].

**6.** The number of bits used to represent the colour of each pixel [1].

**7.** 16 (because 2 to the power 4 is 16) [1].

**8. (a)** Unicode has a much greater range of characters than ASCII, including different languages and emojis [1]. ASCII does not have enough codes to store these characters [1].
**(b)** Unicode needs more bits per character, so the text takes more storage space and more data to send [1].

**9. (a)** 4 levels (2 to the power 2) [1].
**(b)** 11, 00, 10, 01, 11 [2]. Award 1 mark for at least three of the five correct.
**(c)** 10 bits (5 samples × 2 bits) [1].

**10. (a)** The recording is more accurate [1] because the wave is measured more often and each measurement is closer to the real height of the wave [1].
**(b)** The file size increases [1].

**11.** The sound wave is sampled / its height is measured at regular intervals [1]. Each sample is converted to a binary number (using the sample resolution as the number of bits) [1]. The binary numbers are stored as the recording, and are converted back to a signal to play the sound [1].

**12. (a)** Row 1: 100001 [1]. Row 2: 010010 [1]. Row 3: 001100 [1].
**(b)** 36 bits (6 × 6 pixels, 1 bit each) [1].
**(c)** The colour depth is 2 bits (2 bits give 4 colours) [1]. The new size is 72 bits (36 pixels × 2 bits) [1].

**13. (a)** A lower resolution means fewer pixels [1], so the photograph has less fine detail and looks blocky or blurred, especially when enlarged [1].
**(b)** The file size is smaller [1], so each email needs less bandwidth / is quicker to send / fits more easily within a size limit [1].

**14.** ASCII has a smaller range of characters, while Unicode has a much greater range [1]. Unicode includes characters from different languages and emojis, while ASCII is mainly limited to English letters, digits and punctuation [1]. Unicode needs more bits per character than ASCII [1]. For the same text, a Unicode file is therefore larger than an ASCII file [1].

**15.** The sample rate is the number of samples taken per second, not the number of bits in each sample [1]. The number of bits per sample is the sample resolution [1].

---

## Where marks are usually lost

- Question 3: writing the answer in seven bits, or adding the place values incorrectly.
- Question 8: saying only that Unicode is "newer" or "better". Name emojis or different languages.
- Question 9: writing the levels in denary instead of binary.
- Question 10: describing quality but forgetting the file size, or the other way round.
- Question 11: writing that the computer "records the sound" without mentioning samples or binary.
- Question 12: reading the picture column by column instead of row by row.
- Question 13: saying the picture is "worse" without saying why (fewer pixels).
- Question 15: mixing up sample rate and sample resolution. The rate is per second; the resolution is per sample.

## Checking your colour numbers

The number of colours is 2 multiplied by itself as many times as there are bits. If you know the colours, you can work backwards: 4 colours needs 2 bits, 16 colours needs 4 bits, 256 colours needs 8 bits.
