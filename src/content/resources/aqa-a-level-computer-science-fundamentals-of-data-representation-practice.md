---
title: "AQA A-Level Computer Science: Fundamentals of Data Representation — Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 5: Fundamentals of data representation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 5
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
description: "Original practice questions with answers on two's complement, floating point, errors, parity, file sizes, compression and ciphers for AQA A-Level CS 7517."
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

Related: [Fundamentals of data representation study guide](/resources/aqa-a-level-computer-science-fundamentals-of-data-representation-study-guide/) | [Fundamentals of data representation revision notes](/resources/aqa-a-level-computer-science-fundamentals-of-data-representation-revision-notes/)

These questions cover section 4.5 of the AQA A-Level Computer Science (7517) specification, which is assessed
on Paper 2. Floating point questions use the AQA format: mantissa and exponent both in two's complement. Show
all working.

---

## Section A: number systems, bases and units

**1.** State the most appropriate number set for: (a) the number of people in a queue (b) the length of a
table in metres (c) √2. **[3]**

**2.** **(a)** Convert 10110110₂ to decimal and to hexadecimal. **[2]**
**(b)** Convert 3F₁₆ to binary and to decimal. **[2]**
**(c)** Explain why hexadecimal is used as a shorthand for binary. **[1]**

**3.** **(a)** State how many different values can be represented with 10 bits, and the largest unsigned
integer. **[2]**
**(b)** State the number of bytes in 5 MiB and in 5 MB. **[2]**

## Section B: binary arithmetic

**4.** **(a)** Add the unsigned binary numbers 01101011 and 00110110. **[2]**
**(b)** Multiply the unsigned binary numbers 1011 and 101. **[2]**

**5.** Using 8-bit two's complement:
**(a)** Represent -77. **[2]**
**(b)** Convert 10011100 to decimal. **[1]**
**(c)** Calculate 50 - 75 by adding the two's complement of 75, showing your working. **[3]**
**(d)** State the range of integers that can be represented in 12-bit two's complement. **[1]**

## Section C: fixed and floating point

**6.** An 8-bit unsigned fixed point format has 3 bits after the binary point.
**(a)** Convert 01011101 (i.e. 01011.101) to decimal. **[1]**
**(b)** Represent 6.4 as closely as possible in this format. **[2]**
**(c)** Calculate the absolute and relative errors in your answer to (b). **[2]**

**7.** A floating point format uses an 8-bit mantissa followed by a 4-bit exponent, both in two's complement.
**(a)** Convert mantissa 0.1011000, exponent 0100 to decimal. **[2]**
**(b)** Convert mantissa 1.0100000, exponent 1110 to decimal. **[2]**
**(c)** Represent 3.25 as a normalised floating point number. **[2]**
**(d)** Represent -3.25 as a normalised floating point number. **[3]**
**(e)** Normalise mantissa 1.1101000, exponent 0011. **[2]**

**8.** **(a)** Explain why floating point numbers are normalised. **[2]**
**(b)** Compare fixed point and floating point in terms of range, precision and speed of calculation. **[3]**
**(c)** Explain the difference between overflow and underflow. **[2]**

## Section D: coding systems and error checking

**9.** Explain the difference between the character code of the digit '5' and its pure binary representation,
given that ASCII '0' is 48. **[2]**

**10.** Explain why Unicode was introduced. **[2]**

**11.** **(a)** State the even parity bit for the 7-bit data 1011001. **[1]**
**(b)** Using majority voting, each bit is sent three times. The receiver gets 111 010 001 110. State the data
received and explain an advantage and a disadvantage of majority voting. **[3]**
**(c)** Describe how a check digit is used. **[2]**

## Section E: images, sound and other data

**12.** A bitmap is 800 × 600 pixels and can show 16 colours.
**(a)** State the colour depth. **[1]**
**(b)** Calculate the file size in kilobytes, ignoring metadata. **[2]**
**(c)** State one item of metadata stored with the image. **[1]**

**13.** A mono recording lasts 2 minutes, sampled at 48 kHz with 24-bit sample resolution.
**(a)** Calculate the file size in megabytes. **[2]**
**(b)** Humans hear up to about 20 kHz. Use the Nyquist theorem to state the minimum sampling rate needed. **[1]**

**14.** **(a)** Give two properties stored for a circle in a vector graphic. **[2]**
**(b)** Explain why a photograph is stored as a bitmap rather than a vector graphic. **[1]**

**15.** Describe what MIDI stores and give two advantages of MIDI files over sampled sound. **[3]**

**16.** Describe the role of an ADC in a digital thermometer, and the most common use of a DAC. **[3]**

## Section F: compression and encryption

**17.** **(a)** Compress "AAAABBBCCD" using run length encoding. **[1]**
**(b)** Explain why lossless compression must be used for a text file. **[1]**
**(c)** Explain the principle of dictionary-based compression. **[2]**

**18.** **(a)** "LIPPS" was encrypted with a Caesar cipher with a shift of 4. Decrypt it. **[1]**
**(b)** Explain why a Caesar cipher is easily cracked. **[2]**
**(c)** Encrypt the character code 01000001 with the Vernam key 00110110 using XOR, and show that applying the
key again recovers the plaintext. **[2]**
**(d)** Explain why the Vernam cipher offers perfect security, and how this differs from ciphers that rely on
computational security. **[4]**

---

## Answers

**1.** (a) Natural numbers ℕ -- used for counting [1] (b) Real numbers ℝ -- used for measurement [1]
(c) Irrational (part of ℝ) -- it cannot be written as a fraction [1].

**2. (a)** 128 + 32 + 16 + 4 + 2 = **182** [1]; 1011 0110 = **B6₁₆** [1].
**(b)** 3 = 0011, F = 1111 -> **00111111₂** [1] = **63** [1].
**(c)** Each hex digit represents exactly 4 bits, so it is shorter and easier for people to read and write with
fewer errors [1].

**3. (a)** 2¹⁰ = **1,024** values [1]; largest unsigned value **1,023** [1].
**(b)** 5 MiB = 5 × 2²⁰ = **5,242,880** bytes [1]; 5 MB = 5 × 10⁶ = **5,000,000** bytes [1].

**4. (a)** 01101011 + 00110110 = **10100001** (107 + 54 = 161) [2].
**(b)** 1011 × 101 = 1011 + 101100 = **110111** (11 × 5 = 55) [2].

**5. (a)** 77 = 01001101 [1]; invert and add 1 -> **10110011** [1].
**(b)** -128 + 16 + 8 + 4 = **-100** [1].
**(c)** 75 = 01001011, so -75 = 10110101 [1]. 00110010 + 10110101 = **11100111** [1] = -128 + 64 + 32 + 4 + 2 + 1
= **-25** [1].
**(d)** **-2048 to 2047** [1].

**6. (a)** 8 + 2 + 1 + 0.5 + 0.125 = **11.625** [1].
**(b)** 6.4 lies between 110.011 (6.375) and 110.100 (6.5); 6.375 is closer [1], so **00110011** (00110.011) [1].
**(c)** Absolute error = 6.4 - 6.375 = **0.025** [1]. Relative error = 0.025 ÷ 6.4 = **0.0039** (about 0.39%) [1].

**7. (a)** 0.1011 = 0.6875 [1]; × 2⁴ = **11** [1].
**(b)** Mantissa = -1 + 0.25 = -0.75; exponent 1110 = -2 [1]; -0.75 × 2⁻² = **-0.1875** [1].
**(c)** 3.25 = 11.01₂ = 0.1101 × 2² [1] -> mantissa **0.1101000**, exponent **0010** [1].
**(d)** 3.25 = 011.01; two's complement: invert -> 100.10, add 0.01 -> **100.11** (= -4 + 0.5 + 0.25) [1].
Normalised so it starts 1.0: 1.0011 × 2² [1] -> mantissa **1.0011000**, exponent **0010** [1].
**(e)** The mantissa starts 1.1, so shift left until it starts 1.0: two places -> **1.0100000** [1]; reduce the
exponent by 2 -> **0001** [1]. (Both forms equal -1.5.)

**8. (a)** To give the **maximum precision** for the number of bits in the mantissa [1] and a **unique**
representation of each value [1].
**(b)** Floating point has a much greater **range** for the same number of bits [1]; fixed point has constant
**precision** but floating point precision varies with the size of the number [1]; fixed point is **faster** to
process because no exponent handling or normalising is needed [1].
**(c)** **Overflow**: the result is too large in magnitude to be represented [1]. **Underflow**: the result is too
small (too close to zero) to be represented, e.g. a very small number divided by a very large one [1].

**9.** The character '5' has ASCII code 48 + 5 = **53** = 0110101, which is used for text input and display [1].
Its pure binary value is **101**, which is used for arithmetic [1].

**10.** ASCII's 7 bits allow only 128 characters, enough for English but not other alphabets [1]. Unicode uses
more bits per character so it can represent the characters of the world's writing systems and many symbols [1].

**11. (a)** 1011001 has four 1s, so the even parity bit is **0** [1].
**(b)** Majority of each group: 111 -> 1, 010 -> 0, 001 -> 0, 110 -> 1, so **1001** [1]. Advantage: single-bit errors
in a group can be **corrected**, not just detected [1]. Disadvantage: three times as much data is sent [1].
**(c)** A check digit is calculated from the other digits of a code using an agreed algorithm and added to it [1];
when the code is entered the calculation is repeated and, if the results differ, an error is reported [1].

**12. (a)** 16 = 2⁴, so **4 bits** per pixel [1].
**(b)** 800 × 600 × 4 = 1,920,000 bits ÷ 8 = 240,000 bytes [1] = **240 kB** [1].
**(c)** Any one: width, height, colour depth [1].

**13. (a)** 48,000 × 24 × 120 = 138,240,000 bits [1] ÷ 8 = 17,280,000 bytes = **17.28 MB** [1].
**(b)** At least **40 kHz** -- twice the highest frequency [1].

**14. (a)** Any two: centre coordinates, radius, line colour, line thickness, fill colour [2].
**(b)** A photograph has continuous variation in colour that cannot be described efficiently as a list of
geometric shapes [1].

**15.** MIDI stores **event messages** -- instructions such as which note to play, when, and how loudly -- rather
than samples of the sound wave [1]. Advantages (any two): much smaller files; easy to edit the music, e.g. change
tempo, key or instrument; the sound is generated at playback on the chosen instrument [2].

**16.** The temperature sensor produces an analogue signal [1]; the ADC samples it at intervals and converts each
sample to a binary number the processor can use [1]. A DAC's most common use is converting a digital audio
signal to an analogue signal for a speaker or headphones [1].

**17. (a)** **4A3B2C1D** [1].
**(b)** Every character must be restored exactly, or the text's meaning changes [1].
**(c)** Repeated patterns (such as words) are stored once in a dictionary [1], and each occurrence in the data is
replaced by a shorter reference to its dictionary entry [1].

**18. (a)** **HELLO** [1].
**(b)** There are only 25 possible shifts, so all can be tried quickly (brute force) [1]; letter frequencies are
unchanged, so frequency analysis reveals the shift [1].
**(c)** 01000001 XOR 00110110 = **01110111** [1]; 01110111 XOR 00110110 = 01000001, the original plaintext [1].
**(d)** The key is **truly random**, at least **as long as the message** and **used only once** [1], so the
ciphertext is uniformly distributed and gives no information about the plaintext [1]. Vernam is the only cipher
mathematically proven to be completely secure [1]. Other ciphers are computationally secure: they could in theory
be broken given enough ciphertext and time, but this would take an impractically long time with current
computing power [1].

---

## Where marks are usually lost

- Writing a two's complement mantissa's first bit as +1 instead of -1.
- Adjusting the exponent in the wrong direction when normalising.
- Using 1,024 for "kB" or 1,000 for "KiB".
- Forgetting to divide by 8 to convert bits to bytes, or to multiply minutes by 60.
- Stating that parity can correct an error.

## Frequently asked questions

**Will I be told the floating point format in the exam?**
Yes. AQA 7517 questions state the number of mantissa and exponent bits, and both are in two's complement. You
are not expected to know the IEEE standard.

**Do I need to remember the ASCII table?**
No. Questions give you any codes you need, as question 9 does. What you must know is the difference between a
digit's character code and its pure binary value, and why Unicode was introduced.
