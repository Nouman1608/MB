---
title: "Data Representation: Practice Questions"
resourceType: "practice-questions"
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
description: "Original exam-style practice questions with full worked answers on binary, hexadecimal, character sets, images, sound and compression."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---
> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions —
> examination boards hold copyright in their own papers. Use these alongside the
> official past papers available free from your board.

Related: [Data Representation revision notes](/resources/data-representation-revision-notes/)

---

## Section A

**1.** Convert 10110101₂ to denary and to hexadecimal. **[3]**

**2.** Convert 2E₁₆ to denary and to binary. **[3]**

## Section B

**3.** Explain why computers use binary. **[3]**

**4.** Explain why hexadecimal is used by programmers, giving **two** reasons. **[4]**

**5.** Perform the following, stating whether overflow occurs in an 8-bit register:

**(a)** 01101100 + 00110101 **[3]**
**(b)** 11010010 + 01100011 **[3]**

**6.** An image is 800 × 600 pixels with a colour depth of 24 bits.

**(a)** Calculate the file size in megabytes. **[4]**
**(b)** Explain the effect of halving the colour depth on quality and file size. **[3]**

**7.** Explain the difference between lossy and lossless compression, giving a suitable use for each. **[4]**

**8.** Explain how sound is sampled, and the effect of increasing the sample rate. **[4]**

---

## Answers

**1.** 128 + 32 + 16 + 4 + 1 = **181** [1] [1]; in hex, 1011 = B and 0101 = 5, so **B5** [1].

**2.** 2 × 16 + 14 = **46** [1] [1]; **00101110** [1].

**3.** Computers are built from **transistors and other components that have only two stable states** — on and off, high and low voltage [1] [1]. Binary maps directly onto those two states, making circuits **simple, cheap and reliable**, and less vulnerable to errors caused by small voltage fluctuations [1].

**4.** It is **much shorter than binary** — one hex digit represents exactly four bits — so long values are **quicker to write and easier to read without losing your place** [1] [1]. Conversion between hex and binary is **direct and simple**, unlike denary, so it is easy to see the underlying bit pattern [1]; it is widely used for **memory addresses, colour codes and MAC addresses** [1].

**5. (a)** 01101100 = 108; 00110101 = 53 [1]; sum = **10100001** = 161 [1]; this fits in 8 bits, so **no overflow** [1].
**(b)** 11010010 = 210; 01100011 = 99 [1]; sum = 309, which requires **9 bits (100110101)** [1]; the ninth bit is lost, so **overflow occurs** [1].

**6. (a)** Total bits = 800 × 600 × 24 [1] = 11 520 000 bits [1]; ÷ 8 = 1 440 000 bytes [1]; ÷ 1 000 000 (or 1 048 576) = **1.44 MB** (or 1.37 MiB) [1].
**(b)** File size **halves to about 0.72 MB** [1]; the number of available colours falls from about 16.7 million to 4096 [1], so **colour banding appears in gradients and the image looks less realistic** [1].

**7. Lossless** compression **reduces file size without discarding any data**, so the original can be restored exactly [1]; suitable for **text documents, spreadsheets and program files**, where any change would corrupt the file [1]. **Lossy** compression **permanently removes data the user is unlikely to notice** [1]; suitable for **photographs, music and video streaming**, where a much smaller file matters more than perfect fidelity [1].

**8.** The **amplitude of the analogue sound wave is measured at regular intervals** [1] and each measurement is **stored as a binary number** [1]. Increasing the sample rate means **more measurements per second**, so the digital version follows the original wave more closely and **sound quality improves** [1] — but the **file size increases proportionally** [1].

---

## Where marks are usually lost

- Converting binary to hex via denary and making an arithmetic slip — split into nibbles instead.
- Forgetting to divide bits by 8 to get bytes.
- Saying lossy compression can be reversed.
- Confusing sample rate with sample resolution (bit depth).
