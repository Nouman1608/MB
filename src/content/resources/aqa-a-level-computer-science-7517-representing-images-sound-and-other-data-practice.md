---
title: "AQA A-Level Computer Science (7517): Representing images, sound and other data -- Practice Questions"
seoTitle: "AQA A-Level CS Images, Sound and Data Practice Questions"
resourceType: "practice-questions"
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
description: "Original AQA 7517 section 4.5.6 questions with answers: bitmap and vector graphics, sound, MIDI, compression and encryption, with calculations."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs, because examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Representing images, sound and other data study guide](/resources/aqa-a-level-computer-science-7517-representing-images-sound-and-other-data/) | [Representing images, sound and other data revision notes](/resources/aqa-a-level-computer-science-7517-representing-images-sound-and-other-data-revision-notes/)

Ignore metadata in the storage calculations. Use 1 KiB = 1,024 bytes and 1 MiB = 1,048,576 bytes.

---

## Section A

**1.** State the colour depth needed to store 16 different colours. **[1]**

**2.** State the difference between lossless and lossy compression. **[2]**

**3.** State what a MIDI file contains. **[2]**

**4.** Give two properties that would be stored for a circle in a vector graphic. **[2]**

**5.** State the purpose of an analogue to digital converter, and give one device that uses one. **[2]**

## Section B

**6.** A bitmap image is 512 pixels wide and 512 pixels high, with a colour depth of 4 bits.

**(a)** State the number of colours that can be shown. **[1]**
**(b)** Calculate the file size in bytes. **[2]**
**(c)** Express the size in KiB. **[1]**

**7.** A photograph is 640 pixels wide and 480 pixels high with 24-bit colour.

**(a)** Calculate the size in bytes. **[2]**
**(b)** The colour depth is reduced to 8 bits. Calculate the new size and state the effect on the image. **[3]**

**8.** State two items of metadata that a bitmap file is likely to hold, and explain why the file is larger than the pixel data alone. **[3]**

**9.** A company needs its logo for a business card and for a poster the size of a wall. Explain which type of graphic it should use and why. **[3]**

**10.** A recording of stereo sound is made at 22,050 samples per second with a sample resolution of 16 bits. The recording lasts 30 seconds.

**(a)** Calculate the file size in bytes. **[3]**
**(b)** Express the size in MiB to two decimal places. **[1]**

**11.** The highest frequency in a sound is 4 kHz.

**(a)** State the minimum sampling rate according to the Nyquist theorem. **[1]**
**(b)** Explain what is likely to happen to the recorded sound if it is sampled at a lower rate. **[2]**

**12.** Explain what happens to the size of a sound file if the sampling rate is doubled and the sample resolution is doubled, with the duration and channels unchanged. **[2]**

**13.** Encode the row of pixel colours WWWBBWWWWW using run length encoding, giving each run as a number and a letter. **[2]**

**14.** Explain why run length encoding is unsuitable for a photograph. **[2]**

**15.** Encrypt the word MEETME with a Caesar cipher using a shift of 4. **[2]**

**16.** A Vernam cipher uses the bitwise XOR of the plaintext with the key. The plaintext byte is 11010010 and the key is 01101100.

**(a)** Calculate the ciphertext. **[2]**
**(b)** Show how the plaintext is recovered. **[2]**

**17.** Explain why the Vernam cipher is considered to have perfect security, and state one practical difficulty in using it. **[4]**

**18.** A musician wants to store a piano piece so that the notes can be edited later. Compare storing it as a MIDI file with storing it as a sampled sound file. **[4]**

---

## Answers

**1.** 4 bits (2⁴ = 16) [1].

**2.** Lossless compression reduces file size without losing any data, so the original can be recovered exactly [1]; lossy compression permanently removes some data, so the original cannot be recovered [1].

**3.** A series of event messages [1], such as note on and note off, change of instrument or volume (not the sound itself) [1].

**4.** Any two from: position (centre); radius; line colour; line thickness; fill colour [2].

**5.** It converts an analogue signal into digital data (a binary number) [1]; any one device, for example a microphone or a temperature sensor [1].

**6. (a)** 2⁴ = 16 [1].
**(b)** 512 × 512 = 262,144 pixels [1]; × 4 bits ÷ 8 = 131,072 bytes [1].
**(c)** 131,072 ÷ 1,024 = 128 KiB [1].

**7. (a)** 640 × 480 = 307,200 pixels [1]; × 3 bytes (24 bits) = 921,600 bytes [1].
**(b)** 307,200 × 8 ÷ 8 = 307,200 bytes [1]; one third of the size [1]; the image can show only 256 colours so the quality is lower, with less smooth colour [1].

**8.** Any two from: width; height; colour depth [2]; the metadata is stored in addition to the pixel data, so the file is larger [1].

**9.** A vector graphic [1]; it is stored as objects and properties, so it can be scaled to any size without loss of quality (no pixelation) [1]; a bitmap enlarged to wall size would look blocky, and the file would be very large for a high resolution image [1].

**10. (a)** 22,050 × 16 × 30 × 2 [2] = 21,168,000 bits, which is 2,646,000 bytes [1].
**(b)** 2,646,000 ÷ 1,048,576 = 2.52 MiB [1].

**11. (a)** 8 kHz (twice 4 kHz) [1].
**(b)** The samples would be too far apart to capture the highest frequencies [1]; the sound would be distorted, with high frequencies lost or appearing as false lower frequencies [1].

**12.** Doubling the sampling rate doubles the number of samples [1]; doubling the resolution doubles the bits per sample, so the size becomes four times as large [1].

**13.** (3, W), (2, B), (5, W) [2]. (One mark for the first two runs, one for all three.)

**14.** A photograph has few runs of identical pixels, because neighbouring pixels differ slightly in colour [1]; so each run is short, and storing a count and a value for each pixel would make the file larger [1].

**15.** M becomes Q, E becomes I, E becomes I, T becomes X, M becomes Q, E becomes I: QIIXQI [2]. (One mark if one or two letters are wrong.)

**16. (a)** 11010010 XOR 01101100 = 10111110 [2].
**(b)** XOR the ciphertext with the same key: 10111110 XOR 01101100 [1] = 11010010 [1].

**17.** The key is random, as long as the message, and used once [1]; so for any ciphertext, every plaintext of that length is equally likely [1]; the ciphertext therefore gives an attacker no information about the plaintext [1]; practical difficulty: a random key as long as the message must be created, delivered securely and never reused (accept any one of these) [1].

**18.** A MIDI file stores events (which note, when, how hard, which instrument) [1]; so individual notes, the tempo and the instrument can be changed easily [1]; and the file is very small [1]; a sampled file stores the actual sound as a long list of samples, so it is much larger and individual notes cannot easily be edited, but it reproduces exactly the recorded sound [1].

---

## Where marks are usually lost

- Leaving out colour depth, or giving bits when bytes are asked for.
- Forgetting the number of channels in a sound calculation.
- Describing MIDI as recorded sound.
- Saying lossy compression can be reversed.
- Describing the Vernam cipher as secure without stating that the key is random, as long as the message and used once.
