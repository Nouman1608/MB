---
title: "OxfordAQA A-Level Computer Science: Representing data (9645) -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS Representing Data Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Representing data"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
stage: "AS"
order: 5
syllabusTopics:
  - qualification: "a-level"
    topic: "representing-data"
description: "Original practice questions with worked answers on binary, floating point, characters, graphics, sound, ciphers and error checks for OxfordAQA AS 3.5."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover section 3.5, Representing data (3.5.1 to 3.5.8), of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams from May/June 2025 and International A-level exams from May/June 2026. All of it is AS content, assessed in the Unit 2 written exam; none is International A-level only.

Links: [study guide](/resources/oxfordaqa-a-level-computer-science-representing-data/) · [revision notes](/resources/oxfordaqa-a-level-computer-science-representing-data-revision-notes/) · [course hub](/boards/oxfordaqa/a-level/computer-science/) · [printable checklist](/checklists/oxfordaqa/a-level/computer-science/) · [free diagnostics](/diagnostics/)

## Questions

**1.** Number bases and units.

**(a)** State the number of bytes in 4 KiB and in 4 kB. **[2]**
**(b)** Convert hexadecimal 9C to binary and to decimal. **[2]**
**(c)** Convert 214 to hexadecimal. **[1]**

**2.** Unsigned binary.

**(a)** State the largest value that 7-bit unsigned binary can represent. **[1]**
**(b)** Add the unsigned binary numbers 01011110 and 01101101. Show your working. **[2]**
**(c)** Multiply the unsigned binary numbers 1011 and 110. Give your answer in binary. **[2]**
**(d)** Explain what would happen if the result of (b) had to be stored in 7 bits. **[1]**

**3.** Two's complement, 8 bits unless stated.

**(a)** Represent −100. **[2]**
**(b)** Convert 11100011 to decimal. **[1]**
**(c)** Calculate 58 − 91 using two's complement. Show your working. **[3]**
**(d)** State the range of 12-bit two's complement. **[1]**

**4.** A system uses 10-bit unsigned fixed point: four bits before the binary point and six after.

**(a)** Represent 9.375. **[2]**
**(b)** 3.7 cannot be stored exactly. Give the closest value it can store, then calculate the absolute error and the relative error. **[4]**
**(c)** Explain why relative error is a more useful measure than absolute error. **[2]**

**5.** A floating point format has an 8-bit mantissa and a 4-bit exponent, both in two's complement, with the binary point after the first mantissa bit.

**(a)** Convert mantissa 0.1010110, exponent 0101 to decimal. **[2]**
**(b)** Convert mantissa 1.0011000, exponent 0100 to decimal. **[2]**
**(c)** Represent −0.21875 as a normalised number in this format. **[3]**
**(d)** The format is changed to a 9-bit mantissa and 3-bit exponent. State the effect on precision and on range. **[2]**

**6.** Using the format from question 5:

**(a)** Normalise mantissa 0.0001101, exponent 0010. **[2]**
**(b)** Normalise mantissa 1.1110010, exponent 0100. **[2]**
**(c)** Give two reasons why floating point numbers are normalised. **[2]**

**7.** A weather station stores readings from 0.002 to 85,000.

**(a)** Compare fixed point and floating point for this data in terms of range, precision and speed of calculation. **[6]**
**(b)** Explain what underflow is and when it occurs. **[2]**

**8.** Characters.

**(a)** The ASCII code for A is 65. Give the code for P in decimal and in 7-bit binary. **[2]**
**(b)** Explain why Unicode was introduced. **[2]**
**(c)** Explain how UTF-8 was designed to be backwards compatible with ASCII. **[2]**
**(d)** Give the pure binary representation of the digit 5 and its 7-bit ASCII code in binary. **[2]**

**9.** Graphics.

**(a)** Calculate the storage, in MiB, of a 2048 × 1536 bitmap with a colour depth of 4 bits, excluding metadata. **[3]**
**(b)** State how many colours this colour depth allows. **[1]**
**(c)** A club logo will be printed on badges and on large banners. Explain why a vector graphic suits this, and give two properties stored for each object. **[3]**

**10.** Sound.

**(a)** Describe how an ADC is used when recording analogue audio. **[3]**
**(b)** A mono clip lasts 3 minutes, sampled at 32,000 Hz with a sample resolution of 8 bits. Calculate its size in MB. **[3]**
**(c)** The highest frequency in the clip is 12 kHz. Use Nyquist's theorem to decide whether 32,000 Hz is enough. **[2]**

**11.** Encryption.

**(a)** Encrypt BRIDGE with a Caesar cipher, shift 9. **[2]**
**(b)** Give two reasons why the Caesar cipher is easily cracked. **[2]**
**(c)** In a Vernam cipher the character K (01001011) is XORed with the key bits 01110010. Give the ciphertext. **[2]**
**(d)** Compare the Vernam cipher with ciphers that rely on computational security. **[4]**

**12.** Error detection.

**(a)** Give the 8 bits sent for 0110010 with an even parity bit added at the start. **[1]**
**(b)** Explain why a parity check may not detect corruption. **[1]**
**(c)** With majority voting, each bit is sent three times. Decode 101 000 011 110. **[2]**
**(d)** A checksum is the sum of the data bytes modulo 256. Calculate it, in binary, for 11001010 and 01110001. **[2]**
**(e)** Compare the effectiveness of parity bits and majority voting. **[2]**

## Answers

**1. (a)** 4 × 2¹⁰ = **4096 bytes** [1]; 4 × 10³ = **4000 bytes** [1].
**(b)** 9 = 1001, C = 1100, so **10011100** [1]; 9 × 16 + 12 = **156** [1].
**(c)** 214 = 1101 0110 = **D6** [1].
*Examiner insight:* Show the nibble grouping; a bare hex answer leaves nothing to credit if one digit is wrong.

**2. (a)** 2⁷ − 1 = **127** [1].
**(b)** Carries shown column by column [1]; 01011110 + 01101101 = **11001011** (94 + 109 = 203) [1].
**(c)** Partial products 10110 and 101100 [1]; sum **1000010** (11 × 6 = 66) [1].
**(d)** 203 is more than 127, so **overflow**: the result cannot be represented in 7 bits [1].
*Examiner insight:* Write carries above the columns so a correct method is visible.

**3. (a)** +100 = 01100100, flip to 10011011 [1], add 1: **10011100** [1].
**(b)** −128 + 64 + 32 + 2 + 1 = **−29** [1].
**(c)** 58 = 00111010 [1]; −91 = 10100101 [1]; sum 11011111 = **−33** [1].
**(d)** **−2048 to +2047** [1].
*Examiner insight:* "Using two's complement" means showing the negative number being added; a decimal subtraction does not show the method asked for.

**4. (a)** 9.375 = 8 + 1 + 0.25 + 0.125 [1] = **1001.011000** [1].
**(b)** 3.7 × 64 = 236.8, so use 237/64 [1]: **0011.101101 = 3.703125** [1]. Absolute error = 3.703125 − 3.7 = **0.003125** [1]. Relative error = 0.003125 ÷ 3.7 = **0.000845** (about 0.0845%) [1].
**(c)** Relative error compares the error with the size of the value [1], so the same absolute error, such as 0.5, is tiny on 1000 (0.05%) but large on 2 (25%) [1].
*Examiner insight:* Divide by the true value, not the stored one, and show the closest value before the errors.

**5. (a)** Exponent +5 [1]; 010101.10 = **21.5** [1].
**(b)** Mantissa −1 + 0.125 + 0.0625 = −0.8125, exponent +4 [1]; −0.8125 × 16 = **−13** [1].
**(c)** 0.21875 = 0.00111 = 0.111 × 2⁻² [1]; exponent −2 = **1110** [1]; two's complement of 0.1110000 is **1.0010000** [1].
**(d)** One more mantissa bit gives **greater precision** [1]; one fewer exponent bit gives a **smaller range** [1].
*Examiner insight:* For a negative value, give the final mantissa in two's complement; a positive mantissa with a minus sign written in front is not this format.

**6. (a)** Shift left 3: mantissa **0.1101000** [1]; exponent 2 − 3 = −1 = **1111** [1].
**(b)** Shift left 3: mantissa **1.0010000** [1]; exponent 4 − 3 = 1 = **0001** [1].
**(c)** Each number has **one unique representation** [1], and **precision is maximised** because no mantissa bits are wasted on redundant leading bits [1].
*Examiner insight:* Check the value is unchanged (0.40625 in (a), −1.75 in (b)); a changed value means the exponent moved the wrong way.

**7. (a)** Range: floating point covers both ends because the exponent scales the value [1]; fixed point would need many bits [1]. Precision: fixed point has the same absolute precision everywhere, so small readings lose significant figures [1]; floating point precision is set by the mantissa and stays similar relative to each value [1]. Speed: fixed point is faster, like integer arithmetic [1]; floating point is slower as exponents must be handled [1].
**(b)** A result so close to zero [1] that its closest representation is zero, for example when two very small numbers are multiplied [1].
*Examiner insight:* Cover both representations under each criterion; one-sided points are not a comparison.

**8. (a)** 65 + 15 = **80** [1]; **1010000** [1].
**(b)** ASCII has only 128 characters, too few for other alphabets and symbols [1]; Unicode gives characters from the world's writing systems unique codes [1].
**(c)** UTF-8 uses 8 bits for codes 0 to 127 [1], and these codes represent the same characters as in ASCII, so ASCII text is valid UTF-8 [1].
**(d)** Pure binary **101** [1]; ASCII code 53 = **0110101** [1].
*Examiner insight:* Link Unicode to ASCII's 128-character limit; "more characters" alone is thin.

**9. (a)** 2048 × 1536 = 3,145,728 pixels [1]; × 4 = 12,582,912 bits [1]; ÷ 8 = 1,572,864 bytes = **1.5 MiB** [1].
**(b)** 2⁴ = **16** [1].
**(c)** Vectors scale to any size without losing quality, so one file serves badges and banners [1]. Any two properties, one mark each [1] [1]: x and y coordinates of the top left corner; outline colour; outline line width; fill colour.
*Examiner insight:* MiB means dividing by 2²⁰; dividing by 1,000,000 answers a different question.

**10. (a)** The microphone gives an analogue voltage [1]; the ADC samples it at regular intervals [1] and converts each sample to the nearest binary value using the sample resolution [1].
**(b)** 3 minutes = 180 s; 32,000 × 8 × 180 = 46,080,000 bits [1]; ÷ 8 = 5,760,000 bytes [1] = **5.76 MB** [1].
**(c)** Minimum rate = 2 × 12 kHz = 24 kHz [1]; 32 kHz is more than this, so **yes** [1].
*Examiner insight:* Convert minutes to seconds before using the formula, and say which unit each line of working is in.

**11. (a)** Each letter moved 9 places, wrapping Z to A [1]: **KARMPN** [1].
**(b)** Any two, one mark each [1] [1]: only 25 possible keys; letter frequencies survive, allowing frequency analysis; finding one letter's shift reveals all the others.
**(c)** XOR bit by bit, 1 where the bits differ [1]: **00111001** [1].
**(d)** Vernam can be perfectly secure: nothing about the plaintext can be learned from the ciphertext [1], if the key is random, at least as long as the plaintext, used once and known only to sender and receiver [1]. Computationally secure ciphers leak some information, but cracking takes unfeasible time [1]. Vernam needs a new message-length key shared securely each time, so the key exchange problem recurs [1].
*Examiner insight:* When perfect security is part of a comparison, state all four key conditions; a vague "the key is secret" does not cover them.

**12. (a)** Three 1s, so the parity bit is 1: **10110010** [1].
**(b)** If an even number of bits flip, the count of 1s stays even [1].
**(c)** Majority of each group [1]: **1 0 1 1** [1].
**(d)** 202 + 113 = 315; 315 mod 256 = 59 [1] = **00111011** [1].
**(e)** Parity adds one bit but only detects odd numbers of errors [1]; majority voting can correct isolated errors but sends three times the data [1].
*Examiner insight:* Compare cost and capability; describing each method separately is not a comparison.

## Where marks are usually lost

- Flipping bits for a negative number but not adding 1.
- Reading a mantissa starting 1 as positive.
- Moving the point the wrong way for a negative exponent.
- Adding, not subtracting, the shift when normalising.
- Forgetting to convert minutes to seconds in sound calculations.
- Describing parity as able to correct errors.

## Next steps

- [Representing data revision notes](/resources/oxfordaqa-a-level-computer-science-representing-data-revision-notes/)
- [Representing data study guide](/resources/oxfordaqa-a-level-computer-science-representing-data/)
- [Exam preparation](/resources/oxfordaqa-a-level-computer-science-exam-preparation/)
- [Course hub](/boards/oxfordaqa/a-level/computer-science/) and [printable checklist](/checklists/oxfordaqa/a-level/computer-science/)
- [All free 10-minute diagnostics](/diagnostics/)
- [Book a free trial class](/trial/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards (OxfordAQA), section 3.5 Representing data.
