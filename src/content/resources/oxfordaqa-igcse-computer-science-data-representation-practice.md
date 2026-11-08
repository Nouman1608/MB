---
title: "OxfordAQA IGCSE Computer Science: Data Representation — Practice Questions (9210)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Data representation"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 3
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-9210"
description: "Original practice questions with answers on conversions, binary shifts, ASCII, image and sound file sizes, Huffman coding and RLE for OxfordAQA IGCSE 9210."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Data representation study guide](/resources/oxfordaqa-igcse-computer-science-data-representation-study-guide/) | [Data representation revision notes](/resources/oxfordaqa-igcse-computer-science-data-representation-revision-notes/)

These questions cover section 3.3 of the OxfordAQA International GCSE Computer Science (9210) specification,
which is assessed on Paper 2. Use powers of 10 for units (1 kB = 1,000 bytes) and show your working.

---

## Section A: number bases and units

**1.** Explain why computers use binary to represent data and instructions. **[2]**

**2.** Explain why hexadecimal is often used in computer science. **[2]**

**3.** **(a)** Convert the binary number 1011 0101 to decimal and to hexadecimal. **[2]**
**(b)** Convert the hexadecimal number 2F to decimal and to binary. **[2]**
**(c)** Convert the decimal number 156 to binary and to hexadecimal. **[2]**

**4.** **(a)** State how many bytes are in 3 kB. **[1]**
**(b)** A file is 2,500,000 bytes. State its size in megabytes. **[1]**
**(c)** State how many megabytes are in 4 GB. **[1]**

## Section B: binary arithmetic

**5.** Add the binary numbers 0110 0111 and 0001 1101. Give your answer in binary. **[2]**

**6.** **(a)** Apply a logical left shift of 3 places to 0000 1101 and state the effect on its value. **[2]**
**(b)** Apply a logical right shift of 2 places to 0110 1000 and state the result in decimal. **[2]**
**(c)** Describe one situation where a binary shift can be used. **[1]**

## Section C: character encoding

**7.** In ASCII the character 'A' has code 65 and 'a' has code 97.
**(a)** State the code for 'H' and for 'd'. **[2]**
**(b)** State the character with code 70. **[1]**
**(c)** Explain why the codes for the other letters can be worked out once the code for 'A' is known. **[1]**

**8.** Describe the purpose of Unicode and give one advantage it has over ASCII. **[3]**

## Section D: images and sound

**9.** **(a)** Explain what is meant by a pixel and by colour depth. **[2]**
**(b)** State the colour depth needed for an image with 256 colours. **[1]**
**(c)** Calculate the file size in megabytes of a 1200 × 800 pixel image with a colour depth of 24 bits. **[2]**
**(d)** Explain the effect on file size of halving both the width and the height of the image. **[2]**

**10.** A 4 × 4 black-and-white bitmap uses 1 for black and 0 for white. Its rows are:
`1001`, `0110`, `0110`, `1001`.
**(a)** Draw (or describe) the image. **[2]**
**(b)** Another 4 × 4 image has a black border one pixel wide around a white centre. Write the binary for each row.
**[2]**

**11.** **(a)** Explain why sound must be sampled before it can be stored on a computer. **[2]**
**(b)** Define **sampling rate** and **sample resolution**. **[2]**
**(c)** Calculate the file size in megabytes of a 3-minute recording sampled at 22,050 Hz with an 8-bit sample
resolution. **[3]**

## Section E: compression

**12.** Give two reasons why data may be compressed. **[2]**

**13.** **(a)** Represent the row `1111000000001111` using run length encoding frequency/data pairs. **[1]**
**(b)** Write the original bits for the RLE data `3 0 2 1 3 0`. **[1]**
**(c)** Explain why RLE would not compress the row `0101010101010101`. **[2]**

**14.** The string `COFFEE` is to be compressed with Huffman coding.
**(a)** Build a Huffman tree for the string. **[3]**
**(b)** Give the Huffman code for each character, from your tree. **[2]**
**(c)** Calculate the number of bits needed for `COFFEE` using your codes. **[2]**
**(d)** Calculate the number of bits needed in 7-bit ASCII and the number of bits saved. **[2]**

**15.** In a given Huffman tree, a left branch is 0 and a right branch is 1. The character T is reached from the root
by going right, then left, then left. State the code for T and explain why the most frequent characters have the
shortest codes. **[3]**

---

## Answers

**1.** The circuits in a computer have **two states** (e.g. on and off) [1], which can be represented reliably by
the two binary digits 0 and 1 [1].

**2.** It is a shorter way of representing binary -- one hex digit represents 4 bits [1] -- so it is easier for
people to read and write, with fewer mistakes [1].

**3. (a)** 128 + 32 + 16 + 4 + 1 = **181** [1]; 1011 = B, 0101 = 5 -> **B5** [1].
**(b)** 2 × 16 + 15 = **47** [1]; 2 = 0010, F = 1111 -> **0010 1111** [1].
**(c)** 156 = 128 + 16 + 8 + 4 -> **1001 1100** [1]; 1001 = 9, 1100 = C -> **9C** [1].

**4. (a)** **3,000** bytes [1] **(b)** **2.5 MB** [1] **(c)** **4,000 MB** [1].

**5.**
```
  0110 0111   (103)
+ 0001 1101   (29)
  1000 0100   (132)
```
Correct method with carries [1]; answer **1000 0100** [1].

**6. (a)** **0110 1000** [1]; the value is **multiplied by 8** (13 -> 104) [1].
**(b)** **0001 1010** [1] = **26** (104 ÷ 4) [1].
**(c)** Quick multiplication or division by a power of 2 [1].

**7. (a)** 'H' = 65 + 7 = **72** [1]; 'd' = 97 + 3 = **100** [1].
**(b)** 70 = 65 + 5 -> **'F'** [1].
**(c)** Character codes are grouped and run **in sequence**, so each letter's code is one more than the previous
letter's [1].

**8.** Unicode is a character set that can represent the characters of many different alphabets and special
symbols [1], so text in any language can be stored and exchanged [1]. Advantage: a far greater range of
characters than ASCII's 128 [1].

**9. (a)** A pixel (picture element) is a single point in a graphical image [1]. Colour depth is the number of bits
used to represent each pixel [1].
**(b)** 2⁸ = 256, so **8 bits** [1].
**(c)** 1200 × 800 × 24 = 23,040,000 bits ÷ 8 = 2,880,000 bytes [1] = **2.88 MB** [1].
**(d)** The number of pixels becomes ½ × ½ = ¼ [1], so the file size falls to a quarter (0.72 MB) [1].

**10. (a)** Black pixels in the four corners and the four centre squares, making an X-shaped pattern [2].
**(b)** `1111`, `1001`, `1001`, `1111` [2] (1 mark for top and bottom rows, 1 for the middle rows).

**11. (a)** Sound is **analogue** -- a continuously varying wave [1] -- but a computer can only store **digital**
(binary) values, so the amplitude is measured at regular intervals and each measurement is stored as a number [1].
**(b)** Sampling rate: the number of samples taken per second, measured in hertz [1]. Sample resolution: the number
of bits used for each sample [1].
**(c)** 3 minutes = 180 s [1]; 22,050 × 8 × 180 = 31,752,000 bits [1]; ÷ 8 = 3,969,000 bytes = **3.969 MB** [1].

**12.** Any two: files take up less storage space; files transfer faster across a network or the Internet; less
bandwidth is used [2].

**13. (a)** **4 1 8 0 4 1** [1].
**(b)** **00011000** [1].
**(c)** There are no runs: each value appears only once before it changes [1], so every bit needs its own pair
(1 0 1 1 1 0 ...), which makes the data **longer** than the original [1].

**14. (a)** Frequencies: C = 1, O = 1, F = 2, E = 2 [1]. Join C and O (total 2) [1]; join F and E (total 4); then join
(C, O) with (F, E) to make the root (total 6) [1]. (Other trees that always join the two lowest totals are also
correct.)
**(b)** From the tree described, with left = 0 and right = 1: C = 00, O = 01, F = 10, E = 11 [2].
**(c)** C 1 × 2 + O 1 × 2 + F 2 × 2 + E 2 × 2 = **12 bits** [2].
(Any correct Huffman tree gives 12 bits for this string.)
**(d)** 6 × 7 = **42 bits** [1]; saving = 42 - 12 = **30 bits** [1].

**15.** **100** [1]. Huffman coding places the most frequent characters closest to the root of the tree [1], so
they need fewer branches -- and therefore fewer bits -- which minimises the total size of the compressed data [1].

---

## Where marks are usually lost

- Using 1,024 for kilo: 9210 assessments use powers of 10.
- Forgetting to convert minutes to seconds in sound calculations.
- In Huffman questions, adding up code lengths for each distinct character instead of multiplying by its frequency.
- Writing RLE pairs as value-then-frequency.
- Shifting the bits but not saying what happens to the value when the question asks for the effect.

## Frequently asked questions

**How large will numbers be in 9210 conversion questions?**
The specification uses decimal values from 0 to 255, so at most 8 bits or two hex digits (FF).

**What if my Huffman tree is different from the mark scheme?**
Huffman trees can differ when frequencies tie. If you always join the two lowest totals, your codes will be valid and
the total number of bits will be the same.
