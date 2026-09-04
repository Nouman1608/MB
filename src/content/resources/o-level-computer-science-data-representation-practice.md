---
title: "O Level Computer Science: Data Representation — Practice Questions"
resourceType: "practice-questions"
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
description: "Original exam-style practice questions with full worked answers on number bases, binary arithmetic, character sets and data storage."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---
> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions —
> examination boards hold copyright in their own papers. Use these alongside the
> official past papers available free from your board.

Related: [Data Representation revision notes](/resources/o-level-computer-science-data-representation-revision-notes/)

---

## Section A

**1.** State the number of bits in a nibble, a byte and a word (typical). **[2]**

**2.** List these units in ascending order: KB, TB, GB, MB, bit, byte. **[2]**

## Section B

**3.** Convert:

**(a)** 11001110₂ to denary **[2]**
**(b)** 173₁₀ to binary **[2]**
**(c)** 9F₁₆ to denary **[2]**

**4.** Perform a **logical left shift of 2 places** on 00010110.

**(a)** State the result. **[1]**
**(b)** State the effect on the denary value. **[2]**
**(c)** Explain what happens if a left shift causes a 1 to be lost. **[2]**

**5.** Explain how characters are represented in a computer.

**(a)** State how many characters ASCII can represent and why. **[2]**
**(b)** Explain **two** advantages of Unicode over ASCII. **[4]**
**(c)** Explain why the code for "A" is 65 and deduce the code for "D". **[2]**

**6.** A sound file is recorded for 30 seconds at a sample rate of 44 100 Hz with a sample resolution of 16 bits, in mono.

**(a)** Calculate the file size in megabytes. **[4]**
**(b)** State **two** ways the file size could be reduced and the drawback of each. **[4]**

**7.** An 8-bit register holds the value 11111111 (255 in denary), and 00000001 (1) is added to it.

**(a)** Perform the addition and state the 8-bit result. **[2]**
**(b)** Explain why this is described as an overflow error. **[2]**

**8.** A bitmap image is 200 pixels wide and 150 pixels high, with a colour depth of 8 bits per pixel.

**(a)** Calculate the file size in kilobytes. **[3]**
**(b)** State **one** way the file size could be reduced, and the effect this has on image quality. **[2]**
**(c)** State **one** advantage of storing this image as a vector graphic instead, and **one** situation where a vector graphic would be unsuitable. **[2]**

**9.** Run-length encoding is a lossless compression method.

**(a)** Describe how run-length encoding compresses data. **[2]**
**(b)** Explain why run-length encoding can sometimes produce a **larger** file than the original, and give an example of the kind of data where this happens. **[2]**

---

## Answers

**1.** Nibble = **4 bits**; byte = **8 bits** [1]; a word is typically **32 or 64 bits** [1].

**2.** bit, byte, KB, MB, GB, TB [2 — 1 mark if one is misplaced].

**3. (a)** 128 + 64 + 8 + 4 + 2 = **206** [1] [1].
**(b)** **10101101** [1] [1].
**(c)** 9 × 16 + 15 = **159** [1] [1].

**4. (a)** **01011000** [1].
**(b)** The value is **multiplied by 4** — from 22 to 88 [1] [1].
**(c)** The bit is **shifted out of the register and lost** [1], so the value is **no longer a correct multiplication — the result is wrong** because the register cannot hold a number that large [1].

**5. (a)** **128 characters** [1], because standard ASCII uses **7 bits and 2⁷ = 128** [1].
**(b)** Unicode uses **more bits per character**, so it can represent **far more characters — over a million code points** [1] [1]. This means it can represent the **alphabets of all the world's languages, plus symbols and emoji**, so text can be exchanged internationally without corruption [1]; it is also **backwards compatible with ASCII** for the first 128 characters [1].
**(c)** The character codes are **allocated in sequence starting at 65 for "A"** [1]; "D" is three places later, so its code is **68** [1].

**6. (a)** Bits = 44 100 × 16 × 30 [1] [1] = 21 168 000 bits [1]; ÷ 8 ÷ 1 000 000 = **2.65 MB** [1].
**(b)** **Reduce the sample rate** — the file gets smaller but **higher frequencies are lost and quality falls** [1] [1]. **Reduce the sample resolution** to 8 bits — smaller file but **less precise amplitude measurement, so more background noise and distortion** [1] [1]. (Also accept: apply lossy compression, which loses data permanently.)

**7. (a)** 11111111 + 00000001 = **00000000** (with a carry out of the register) [1] [1].
**(b)** The true sum, 256, **needs 9 bits** but the register can only hold 8 [1], so **the result is too large for the number of bits allocated** and the stored value (0) is incorrect [1].

**8. (a)** file size = 200 × 150 × 8 [1] = 240 000 bits ÷ 8 = 30 000 bytes [1] = **30 KB** [1].
**(b)** **Reduce the colour depth** (e.g. to 4 bits) — smaller file, but **fewer colours can be represented, so the image quality falls** [1] [1].
**(c)** Vector graphics **scale without loss of quality** and are usually smaller for line art [1]; they would be **unsuitable for a photograph**, which needs the pixel-level detail a bitmap captures [1].

**9. (a)** It replaces **runs of identical, repeated values** with a single value and a count of how many times it repeats [1], so repetitive data is stored far more compactly [1].
**(b)** On **noisy or photographic data**, where pixel values rarely repeat exactly, encoding each short "run" (value, count) can take **more space than the original data** [1] — for example, a photograph with continuously varying colours, unlike an image with large uniform blocks of colour [1].

---

## Where marks are usually lost

- Forgetting that a left shift of n multiplies by 2ⁿ, not by n.
- Saying ASCII uses 8 bits (extended ASCII does; standard ASCII uses 7).
- Not converting bits to bytes in file size calculations.
- Confusing sample rate with sample resolution when suggesting reductions.
- Forgetting that overflow means the true result needs more bits than the register holds, not simply that "the answer is wrong".
- Assuming compression always reduces file size — run-length encoding can enlarge noisy or photographic data with few repeated runs.
