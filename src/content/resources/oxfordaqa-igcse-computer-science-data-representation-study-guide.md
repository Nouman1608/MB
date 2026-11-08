---
title: "OxfordAQA IGCSE Computer Science (9210): Data representation -- Study Guide"
resourceType: "study-guides"
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
description: "Binary, denary and hexadecimal, binary addition and shifts, character sets, bitmap images, sampled sound and compression for OxfordAQA International GCSE 9210."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "Check whether the 9210 specification requires Huffman coding or only run-length encoding, and whether hexadecimal is limited to 8-bit values."
publishedDate: 2026-11-08
featured: false
---

A computer can only store and process two states, which we write as 0 and 1. Data representation explains how numbers, text, pictures and sound are all turned into patterns of bits so that a computer can store them, process them and send them. In OxfordAQA International GCSE Computer Science (9210) the topic mixes short calculations with explanations, and the calculations are very reliable marks if your method is tidy.

## Where this fits in the specification

Data representation follows the algorithms and programming topics and comes before computer systems, which explains the hardware that stores and processes these bits. The topic uses the units and ideas that come back in networks (file sizes and transfer times) and in cyber security (encryption works on binary data). The written papers expect you to show working for every conversion and size calculation.

## Number bases

**Denary** (decimal) is base 10 and uses the digits 0 to 9. **Binary** is base 2 and uses 0 and 1. **Hexadecimal** is base 16 and uses 0 to 9 and the letters A to F, where A is 10, B is 11, C is 12, D is 13, E is 14 and F is 15.

The place values of an 8-bit binary number from left to right are 128, 64, 32, 16, 8, 4, 2, 1. A group of 8 bits is a **byte**, and 4 bits is a **nibble**. An 8-bit number can represent 2^8 = 256 different values, from 0 to 255.

Hexadecimal is used because it is a compact way of writing binary. One hex digit stands for exactly four bits, so one byte is two hex digits. It is easier for people to read and write, and less error-prone, than a long string of 0s and 1s. It is not used because the computer works in hex: the computer always works in binary.

### Converting

**Binary to denary**: add the place values where there is a 1. **Denary to binary**: subtract the largest place value that fits, write 1, and repeat. **Binary to hex**: split into nibbles from the right and convert each. **Hex to binary**: replace each hex digit with its 4-bit pattern.

## Binary arithmetic

To add two binary numbers, work from the right. 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10 (write 0, carry 1), and 1 + 1 + 1 = 11 (write 1, carry 1). If the answer needs more bits than the register holds (for 8 bits, a ninth bit), an **overflow error** occurs and the extra bit is lost.

A **binary shift** moves every bit left or right and fills the gap with zeros. Shifting left by one place multiplies by 2, and by n places multiplies by 2^n. Shifting right by n places divides by 2^n, ignoring any remainder. Bits shifted off the end are lost, which can make the result wrong if a 1 falls off the left of a left shift.

## Characters

A **character set** is the agreed list of characters and the binary code for each. In **ASCII** each character has a 7-bit code (often stored in 8 bits), which gives 128 characters: English letters, digits, punctuation and control codes. The codes are in order: 'A' is 65, 'B' is 66 and so on, and lower-case 'a' is 97. Because they are in order, you can work out other codes from one given code. **Unicode** uses more bits per character, so it can represent many more characters including other alphabets, symbols and emoji. The cost is that each character may need more storage than in ASCII.

## Images

A **bitmap** image is a grid of **pixels**. Each pixel is stored as a binary code for its colour. The **resolution** is the number of pixels (width x height), and the **colour depth** (bit depth) is the number of bits per pixel. With colour depth n you can have 2^n colours: 1 bit gives 2 colours, 3 bits give 8, and 8 bits give 256. More pixels and a greater colour depth give a better-quality image but a larger file.

The file size in bits is width x height x colour depth. Divide by 8 for bytes, and by 1,000 and 1,000,000 for kilobytes and megabytes (check which convention your papers use; this guide uses 1,000). Image **metadata**, such as the width and height and the colour depth, is stored with the pixel data so the image can be rebuilt.

## Sound

Sound is naturally analogue and is converted to digital by **sampling**: measuring the amplitude of the sound wave at regular intervals. The **sample rate** is the number of samples per second, in hertz (Hz). The **sample resolution** (bit depth) is the number of bits used for each sample. A higher sample rate and resolution record the wave more accurately, but increase the file size.

File size in bits = sample rate x sample resolution x duration in seconds (multiplied by 2 for stereo).

## Compression

**Compression** reduces file size so files take less storage and are quicker to send. **Lossless** compression reduces the size without losing any data, so the original can be rebuilt exactly. It is needed for text, programs and data where every bit matters. **Lossy** compression permanently removes some data that people are unlikely to notice, such as very fine detail in an image or sounds outside normal hearing. It gives smaller files but the original cannot be recovered.

**Run-length encoding (RLE)** is a lossless method that replaces a run of identical values with a count and the value. It works well on data with long runs, such as a simple graphic with large blocks of one colour, and badly on data where neighbouring values are all different, where it can make the file bigger. **Huffman coding** is another lossless method that gives shorter codes to the characters used most often.

## Worked example 1: conversions and addition

(a) Convert 10110101 to denary. Place values 128 + 32 + 16 + 4 + 1 = 181.

(b) Convert 181 to hexadecimal. The binary is 1011 0101. 1011 is 11, which is B, and 0101 is 5. The answer is B5. Check: 11 x 16 + 5 = 181.

(c) Add 01101101 and 00111011. 

```
  01101101   (109)
+ 00111011   ( 59)
  --------
  10101000   (168)
```

Working from the right, the carries move through the middle columns, and the result is 10101000, which is 128 + 32 + 8 = 168. This agrees with 109 + 59 = 168. No overflow occurred because the answer fits in 8 bits.

(d) Convert 200 to hexadecimal. 200 = 12 x 16 + 8, so the digits are C and 8. The answer is C8. In binary this is 1100 1000.

## Worked example 2: shifts

Take 00110101, which is 53. Shift left by 2 places: 11010100, which is 212. This is 53 x 4 = 212, so the shift multiplied by 4. Now shift 11010100 right by 3 places: 00011010, which is 26. This is 212 divided by 8 with the remainder dropped (212 / 8 = 26.5, so 26).

## Worked example 3: file sizes and RLE

An uncompressed image is 640 pixels wide and 480 pixels high with a colour depth of 24 bits. Size = 640 x 480 x 24 = 7,372,800 bits. Dividing by 8 gives 921,600 bytes, which is 921.6 kilobytes (about 0.92 megabytes).

A mono sound clip is sampled at 22,050 Hz with 16 bits per sample and lasts 20 seconds. Size = 22,050 x 16 x 20 = 7,056,000 bits, which is 882,000 bytes (882 kilobytes).

One row of a simple black-and-white graphic is WWWWBBWWWWWWB (13 pixels). RLE stores it as 4W 2B 6W 1B. That is four pairs instead of 13 values, so the row compresses well. The original is rebuilt exactly, so RLE is lossless.

## Common mistakes

- Writing the binary place values the wrong way round, or forgetting that the first value is 1, not 0.
- Saying hexadecimal is "faster for the computer". It is a human-friendly shorthand for binary.
- Forgetting to divide by 8 when converting bits to bytes.
- Using 8 bits for a character set that needs more, or saying ASCII supports all languages.
- Describing lossy compression as "the file is smaller because it uses fewer pixels" without saying that data is permanently removed.
- Overflow: giving a nine-bit answer when only eight bits are available.
- In shifts, using a shift left to divide, or shifting the wrong direction.

## Exam technique

For **convert** or **calculate**, show every step: the place-value row, the working and the answer with the unit. For file size questions, write the formula first, substitute the numbers and state the unit. For **explain** questions, give a reason: "hexadecimal is used because one digit represents four bits, so it is shorter and easier to read". For **describe the difference** between lossy and lossless compression, make a comparison for both, and give an example of when each is appropriate.

## Check your understanding

1. Convert 00101101 to denary. *32 + 8 + 4 + 1 = 45.*
2. Convert 3F to denary. *3 x 16 + 15 = 63.*
3. How many different colours can be stored with a colour depth of 5 bits? *2^5 = 32.*
4. State the effect on the value of shifting 00011000 left by 2 places. *The value is multiplied by 4 (24 becomes 96, 01100000).*
5. Why is Unicode used instead of ASCII for some text? *It has many more bits per character so it can represent characters from many languages and symbols.*
6. A sound recording has a sample rate of 8,000 Hz, a sample resolution of 8 bits and lasts 10 seconds (mono). Calculate its size in bytes. *8,000 x 8 x 10 = 640,000 bits = 80,000 bytes.*
7. Give one reason to use lossless compression. *To rebuild the original exactly, for example for a program file or text document.*
8. Why might run-length encoding increase the size of a photograph? *Neighbouring pixels rarely repeat exactly, so there are few runs and each value needs a count as well.*
