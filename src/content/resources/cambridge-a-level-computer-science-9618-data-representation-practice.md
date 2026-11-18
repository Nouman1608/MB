---
title: "Cambridge A Level Computer Science (9618): Data Representation -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 1 – Information representation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 1.1
syllabusTopics:
  - qualification: "a-level"
    topic: "information-representation"
    subtopic: "data-representation"
description: "Original questions with mark-scheme answers on Cambridge 9618 section 1.1: prefixes, hexadecimal, BCD, two's complement, overflow and character sets."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers available from your board.

These questions practise section 1.1 Data Representation of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026: binary and decimal prefixes, number bases, BCD, one's and two's complement, binary addition and subtraction, overflow, and character sets. Learn the methods first in the [data representation study guide](/resources/cambridge-a-level-computer-science-9618-data-representation/) and the [data representation revision notes](/resources/cambridge-a-level-computer-science-9618-data-representation-revision-notes/).

## Section A

**1.** State the number of bytes in 6 KiB and in 6 kB. **[2]**

**2.** A hard disk is advertised as 2 TB. Calculate its capacity in TiB, to two decimal places. Show your working. **[2]**

**3.** Convert the denary number 181 into:

**(a)** 8-bit binary **[1]**

**(b)** hexadecimal. **[1]**

**4.** Convert &7C into denary. **[1]**

**5.** Write the denary number 58 in BCD, and decode the BCD value 0011 0110 0001. **[2]**

**6.** Give the 8-bit two's complement representation of −100. Show your working. **[2]**

**7.** Convert each of the following 8-bit values into denary.

**(a)** 10110010, a two's complement integer **[1]**

**(b)** 11110000, a one's complement integer. **[1]**

**8.** State the range of integers that can be stored in 12-bit two's complement. **[2]**

## Section B

**9.** Two 8-bit two's complement numbers, 01100100 and 00110010, are added.

**(a)** Carry out the addition. **[1]**

**(b)** Explain why the result is not correct. **[2]**

**10.** Show how 30 − 12 is calculated in 8-bit binary using two's complement. Show your working. **[3]**

**11.** A digital clock displays hours and minutes. Explain why the clock might store each digit in BCD rather than storing the time in pure binary. **[2]**

**12.** Explain **two** practical reasons why hexadecimal is used to show colour codes and memory addresses instead of binary. **[2]**

**13.** A messaging app was first designed to store text using extended ASCII. It is being changed to use Unicode.

**(a)** Explain why the change is needed. **[2]**

**(b)** State **one** drawback of the change. **[1]**

**14.** Given that the character "K" has the ASCII code 75, state the denary code of "N" and write it as 8-bit binary. **[2]**

## Answers

**1.** 6 × 1,024 = **6,144 bytes** [1]; 6 × 1,000 = **6,000 bytes** [1]. **[2]**

**2.** 2 × 10¹² ÷ 2⁴⁰ = 2,000,000,000,000 ÷ 1,099,511,627,776 [1] = **1.82 TiB** [1]. **[2]**

*Examiner insight:* The answer is smaller than 2 because a tebibyte is larger than a terabyte. If your conversion gives a bigger number, you have multiplied where you should have divided.

**3. (a)** **10110101** [1].

**(b)** 1011 = B, 0101 = 5, so **&B5** [1]. **[2]**

*Examiner insight:* Check by converting back: (11 × 16) + 5 = 181. Grouping from the right matters when the number of bits is not a multiple of four.

**4.** (7 × 16) + 12 = **124** [1]. **[1]**

**5.** 58 = **0101 1000** [1]; 0011 0110 0001 = **361** [1]. **[2]**

**6.** 100 = 01100100; inverted = 10011011 [1]; add 1 = **10011100** [1]. **[2]**

*Examiner insight:* A quick check is to read the answer with a negative MSB: −128 + 16 + 8 + 4 = −100. Stopping after the inversion gives the one's complement form, 10011011, which scores only the first mark.

**7. (a)** −128 + 32 + 16 + 2 = **−78** [1].

**(b)** Invert to get 00001111 = 15, so the value is **−15** [1]. **[2]**

**8.** −2¹¹ to 2¹¹ − 1 [1], which is **−2048 to +2047** [1]. **[2]**

**9. (a)** **10010110** [1].

**(b)** The numbers are 100 and 50, so the true answer is 150 [1]; 150 is above the largest 8-bit two's complement value (+127), so overflow has occurred and the MSB of 1 makes the result read as −106, a negative answer from two positive numbers [1]. **[3]**

*Examiner insight:* Full answers give the true result, the range that has been exceeded and what the stored pattern wrongly represents. "The number is too big" alone is not enough.

**10.** 30 = 00011110 and 12 = 00001100, so −12 = 11110100 [1]. Add: 00011110 + 11110100 = 1 00010010 [1]. Discard the carry out of the MSB to give **00010010 = 18** [1]. **[3]**

*Examiner insight:* The carry out of the MSB is not an overflow here. A positive and a negative number are being added, and that can never overflow.

**11.** Each digit of the time is shown on its own display unit, and BCD stores each denary digit separately [1], so each 4-bit code can drive one digit directly without converting a whole binary number back to denary first [1]. **[2]**

**12.** One hex digit represents exactly four bits, so values are much shorter to read and write, e.g. two digits per byte of colour [1]; shorter values are easier for people to remember and copy, so fewer errors are made than with long strings of 0s and 1s, and conversion to binary is still simple [1]. **[2]**

**13. (a)** Extended ASCII has only 256 codes, which cannot represent characters in many of the world's writing systems or emoji [1]; Unicode uses up to 32 bits per character, so it can give a unique code to far more characters, allowing users to message in any language [1].

**(b)** Text takes more storage space and more data to transmit, because many characters need more than one byte [1]. **[3]**

*Examiner insight:* Link the reason to the app's users: a messaging app with users who write in many languages needs characters that extended ASCII cannot represent.

**14.** "N" is three letters after "K", so its code is 75 + 3 = **78** [1]; 78 = **01001110** [1]. **[2]**

## Where marks are usually lost

- Using 1,000 for a binary prefix question, or 1,024 for a decimal one.
- Grouping bits for hex from the left.
- Stopping after inverting the bits, which gives one's complement.
- Describing overflow without stating the range that has been exceeded.
- Keeping the carry out of the MSB in a two's complement subtraction.
- Saying Unicode is "better" without explaining that it represents more characters.
