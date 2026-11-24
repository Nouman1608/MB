---
title: "AQA A-Level Computer Science (7517): Representing images, sound and other data"
seoTitle: "AQA A-Level CS Images, Sound and Data Study Guide"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.5.6: bitmap and vector graphics, sampled sound and MIDI, analogue and digital conversion, compression and encryption."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.5.6 Representing images, sound and other data** in AQA A-Level Computer Science (7517). Its ten content blocks are: bit patterns as data (4.5.6.1), analogue and digital (4.5.6.2), ADC and DAC (4.5.6.3), bitmapped graphics (4.5.6.4), vector graphics (4.5.6.5), comparing them (4.5.6.6), digital sound (4.5.6.7), MIDI (4.5.6.8), data compression (4.5.6.9) and encryption (4.5.6.10).

The wider [fundamentals of data representation study guide](/resources/aqa-a-level-computer-science-fundamentals-of-data-representation-study-guide/) covers all of section 4.5. Condensed notes are in the [representing images, sound and other data revision notes](/resources/aqa-a-level-computer-science-7517-representing-images-sound-and-other-data-revision-notes/), and exam-style questions are in the [representing images, sound and other data practice questions](/resources/aqa-a-level-computer-science-7517-representing-images-sound-and-other-data-practice/).

## Bit patterns, analogue and digital

A computer holds every kind of data as **bit patterns**. What a pattern means depends on how it is interpreted: the same eight bits could be an unsigned number, a character code, part of a pixel, or a sound sample. Programs and files agree on the interpretation.

**Analogue** data and signals vary **continuously**: a sound wave, a temperature or a voltage can take any value in a range. **Digital** data and signals use a **finite set of discrete values**, in a computer two (0 and 1). To process analogue quantities a computer must convert them to digital.

An **analogue to digital converter (ADC)** does this in three steps: it **samples** the signal's value at regular intervals, **rounds** each value to the nearest of a fixed set of levels (quantisation), and **outputs the level as a binary number**. ADCs are used with **analogue sensors** such as temperature sensors and microphones. A **digital to analogue converter (DAC)** does the reverse: it turns each binary value into a voltage and smooths the steps into a continuous signal. The most common use of a DAC is to convert a **digital audio signal to an analogue signal** to drive headphones or speakers.

## Bitmapped graphics

A **bitmap** divides an image into a grid of **pixels**. Each pixel is stored as a binary number giving its colour, and the pixels are stored in order, row by row.

- **Size in pixels** = width in pixels × height in pixels.
- **Colour depth** = the number of bits stored for each pixel. A depth of n bits allows 2ⁿ colours: 1 bit gives 2 (black and white), 8 bits give 256, 24 bits give 16,777,216.
- **Resolution** is expressed as the number of dots (pixels) per inch. The size of an image in pixels is also sometimes described as its resolution.

**Storage (ignoring metadata)** = size in pixels × colour depth.

**Worked example 1.** An 800 × 600 image with 24-bit colour: 800 × 600 = 480,000 pixels; × 24 = 11,520,000 bits; ÷ 8 = **1,440,000 bytes**, which is about 1.37 MiB.

**Worked example 2.** A 1024 × 768 image with 8-bit colour: 786,432 pixels × 8 bits = 6,291,456 bits = 786,432 bytes = **768 KiB**.

Increasing resolution or colour depth gives better quality and bigger files. A bitmap file also holds **metadata**, extra data about the image, for example its **width, height and colour depth** (needed to decode the pixel data) and sometimes the date or camera settings. The file is therefore slightly larger than the pixel data alone.

## Vector graphics

A **vector graphic** stores an image as a **list of objects** (such as lines, rectangles, ellipses and curves) with **properties** for each. Typical properties: the type of shape, its position, size, line colour and thickness, and fill colour.

Example list: `rectangle, x = 10, y = 20, width = 100, height = 50, fill = red` and `ellipse, centre = (80, 45), radii = 20 and 10, line = black`. A simple vector image is made by choosing **primitives** and giving each its properties.

When displayed, the picture is drawn from the list. This means it can be **scaled to any size without losing quality** (no pixelation), because the shapes are recalculated.

## Vector against bitmap

| | Bitmap | Vector |
|---|---|---|
| Stored as | Grid of pixels | List of objects and properties |
| Scaling | Loses quality (pixelated) | Scales without loss |
| File size | Grows with pixels × colour depth | Grows with the number of objects; small for simple pictures |
| Best for | Photographs, complex detail and shading | Logos, diagrams, cartoons, technical drawings, signs |
| Editing | Edit pixels | Edit individual objects easily |

## Digital representation of sound

Sound is analogue. To store it, the wave is **sampled**: its amplitude is measured at regular intervals and each measurement is stored as a binary number.

- **Sampling rate** is the number of samples taken per second (hertz). A higher rate follows the wave more closely.
- **Sample resolution** is the number of bits used for each sample. More bits give more levels and a closer match to the original amplitude.
- **Nyquist theorem:** to capture a sound accurately, the sampling rate must be **at least twice the highest frequency** in the sound. Human hearing reaches about 20 kHz, so a rate of 44.1 kHz is used for CDs. A telephone line carries up to 4 kHz, so a sampling rate of 8 kHz suffices.

**Sound sample size** = sampling rate × sample resolution × duration × number of channels.

**Worked example 3.** 3 minutes of stereo sound at 44,100 samples per second with 16-bit samples: 44,100 × 16 × 180 × 2 = 254,016,000 bits = **31,752,000 bytes**, about 30.3 MiB.

**Worked example 4.** Mono sound at 8,000 samples per second with 8-bit samples for 10 seconds: 8,000 × 8 × 10 = 640,000 bits = **80,000 bytes**.

## MIDI

**MIDI** (Musical Instrument Digital Interface) is a standard for communication between electronic instruments and computers. It does **not** store sound. A MIDI file holds a series of **event messages**, such as: note on (which note, how hard), note off, change instrument, change volume, pitch bend. The receiving synthesiser or software produces the sound.

**Advantages of MIDI files for music:** files are **very small**; the music is easily **edited** (change a note, tempo or instrument without re-recording); and the same file can be played on different instruments. A disadvantage is that it cannot store speech or recorded sounds, and the sound depends on the playback device.

## Data compression

Images and sound files are large, so they are often **compressed** to save **storage space** and reduce **transmission time**. Other files, such as text, can also be compressed.

- **Lossless compression** reduces size without losing any data; the original can be rebuilt exactly. Suitable for text, program files, and images where all detail matters. Savings are smaller.
- **Lossy compression** permanently removes some data, usually detail that is hard to notice, such as very high frequencies in sound or fine colour differences in pictures. Files are much smaller, but the original **cannot be restored**, and repeated lossy compression reduces quality further.

### Run length encoding (RLE)

RLE replaces a run of identical values with the **value and the number of times it repeats**. `AAAABBBCCD` becomes (4, A), (3, B), (2, C), (1, D). A row of bits 0000011111100 becomes (5, 0), (6, 1), (2, 0). RLE works well on images with large blocks of one colour, but makes data with few repeats larger.

### Dictionary-based methods

These replace repeated sequences with a short **code that refers to an entry in a dictionary**. In the text "the cat and the dog and the bird" the sequence "the " may be stored once in the dictionary and replaced by a code each time it appears. Repeated patterns therefore cost much less space. The dictionary is built from the data or sent with it.

## Encryption

**Encryption** is the process of transforming data so that it cannot be understood by anyone who does not have the key. Terms: **plaintext** (the original message), **ciphertext** (the encrypted message) and **cipher** (the algorithm used).

### Caesar cipher

Each letter is replaced by the letter a fixed number of places further on in the alphabet. With a shift of 3, HELLO becomes KHOOR. To decrypt, shift back by 3: "WKLV LV IXQ" becomes THIS IS FUN.

It is **easily cracked** because there are only 25 possible shifts, which can all be tried quickly (brute force), and because letter frequencies are preserved: the most common letter in the ciphertext probably stands for E.

### Vernam cipher (one-time pad)

The key is as long as the message and is made of **random** values. Each plaintext symbol is combined with the matching key symbol. With binary, combine with **XOR**. Plaintext 01001000 XOR key 10110101 gives ciphertext 11111101. XOR with the same key again returns the plaintext: 11111101 XOR 10110101 = 01001000. With letters, add the key letter's position to the plaintext letter's position modulo 26 (CAT with key DOG gives FOZ).

The key must be used **once only** (hence "one-time pad"). The Vernam cipher has **perfect security**: because the key is random, every possible plaintext of the same length is equally likely for any ciphertext, so the ciphertext tells an attacker nothing. It is the only cipher mathematically proved to be completely secure. The practical difficulty is that a key as long as the message must be generated randomly, shared safely and never reused.

### Computational security

All other ciphers rely on **computational security**: they could in theory be broken given enough ciphertext and time, but the work needed is so large that it is infeasible in practice. Caesar and Vernam are at opposite extremes, and real systems sit between them.

## Common mistakes

- Giving bitmap storage in bits when bytes are asked for, or leaving out colour depth.
- Saying vector graphics use pixels.
- Forgetting the number of channels in a sound size calculation (stereo is 2).
- Stating the Nyquist theorem as "twice the sample rate". It is a sampling rate of at least twice the highest frequency.
- Saying MIDI records sound.
- Saying lossy compression can be reversed.
- Calling the Vernam cipher perfect without saying that the key must be random, as long as the message and used once.

## Exam technique

- **Calculations**: write the formula, substitute, and convert units at the end.
- **Compare** with a use for each, such as photographs for bitmaps and logos for vectors.
- **Compression**: state what is lost (lossy) or not lost (lossless) and why that matters.
- **Encryption**: use the terms plaintext, ciphertext and key, and explain the weakness or strength.

## More resources on this topic

- [Representing images, sound and other data revision notes](/resources/aqa-a-level-computer-science-7517-representing-images-sound-and-other-data-revision-notes/)
- [Representing images, sound and other data practice questions](/resources/aqa-a-level-computer-science-7517-representing-images-sound-and-other-data-practice/)
- [Units of information study guide](/resources/aqa-a-level-computer-science-7517-units-of-information/)
- [Information coding systems study guide](/resources/aqa-a-level-computer-science-7517-information-coding-systems/)

*Written against the AQA A-level Computer Science (7517) specification, 4.5.6 Representing images, sound and other data. Always check the current specification on the AQA website.*
