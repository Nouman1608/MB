---
title: "AQA A-Level Computer Science (7517): Information coding systems -- Practice Questions"
seoTitle: "AQA A-Level CS Information Coding Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data representation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 5.5
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
    subtopic: "information-coding-systems-7517"
description: "Original AQA 7517 section 4.5.5 questions with answers: character codes, ASCII, Unicode, parity bits, majority voting, checksums and check digits."
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

Related: [Information coding systems study guide](/resources/aqa-a-level-computer-science-7517-information-coding-systems/) | [Information coding systems revision notes](/resources/aqa-a-level-computer-science-7517-information-coding-systems-revision-notes/)

In ASCII, the character A has the code 65, a has the code 97 and 0 has the code 48.

---

## Section A

**1.** State the number of bits used by standard ASCII and the number of characters it can represent. **[2]**

**2.** State why Unicode was introduced. **[1]**

**3.** State what is meant by a parity bit. **[1]**

**4.** State one limitation of using a single parity bit. **[1]**

**5.** State the purpose of a check digit. **[1]**

## Section B

**6.** The character D is held as an ASCII code.

**(a)** State the code of D, in decimal, and write it in 7-bit binary. **[2]**
**(b)** State the code of d. **[1]**

**7.** Explain the difference between the character code for the digit 4 and the pure binary representation of the number 4. Give both as 8-bit patterns. **[3]**

**8.** A program stores the number 25 as two characters.

**(a)** Give the two ASCII codes in 8-bit binary. **[2]**
**(b)** State how many bytes would be needed to hold 25 as a pure binary integer and explain why character form needs more. **[2]**

**9.** Even parity is used with 7 data bits and 1 parity bit.

**(a)** Calculate the parity bit for the data 1101001. **[1]**
**(b)** Calculate the parity bit for the data 1110101. **[1]**
**(c)** A receiver gets the byte 01101101. State whether it contains an error, and explain how you know. **[2]**
**(d)** Explain why the receiver cannot correct the error. **[1]**

**10.** Two bits are corrupted in a byte transmitted with even parity. Explain what the receiver concludes. **[2]**

**11.** Each bit is sent three times, and the receiver uses majority voting. The receiver gets 101 011 000 111.

**(a)** State the bits that the receiver decides were sent. **[2]**
**(b)** State one advantage and one disadvantage of this method. **[2]**

**12.** Three bytes of data have the values 120, 85 and 60. A checksum is calculated as the sum of the bytes modulo 256.

**(a)** Calculate the checksum. **[2]**
**(b)** The receiver finds that the data arrives as 120, 87 and 60, but the checksum arrives as sent. Explain how the receiver detects the problem. **[2]**

**13.** A check digit is calculated for a four-digit code. The digits are multiplied by the weights 5, 4, 3 and 2 from left to right, the products are added, and the check digit is the amount that must be added to make the total a multiple of 11 (a check digit of 11 is written as 0).

**(a)** Calculate the check digit for the code 3659. **[3]**
**(b)** The full code 36595 is typed as 36955. Show that the check digit calculation (with weight 1 for the final digit) detects the error. **[3]**

**14.** Explain why a checksum is not suitable for correcting errors, and state what happens instead when an error is found. **[2]**

**15.** A company sends text in many languages. Explain why it should use Unicode rather than ASCII, and state one disadvantage. **[3]**

---

## Answers

**1.** 7 bits [1]; 128 characters [1].

**2.** ASCII could not represent the characters of many languages, so Unicode was introduced to provide one universal code for all writing systems [1].

**3.** An extra bit added to a group of bits so that the total number of 1s is always even (even parity) or always odd (odd parity) [1].

**4.** Any one: it cannot correct errors; it cannot detect an even number of bit errors [1].

**5.** To detect mistakes made when a number is typed in, scanned or transmitted [1].

**6. (a)** D is 4 letters after A, so 65 + 3 = 68 [1]; 1000100 [1].
**(b)** 100 [1]. (a is 97, d is three further on; lower case is upper case + 32, so 68 + 32 = 100.)

**7.** The character code is the code for the symbol "4" [1]: 00110100 (decimal 52) [1]; the pure binary value of the number 4 is 00000100 [1]. Pure binary is used for calculation and character code for display and input.

**8. (a)** "2" is 00110010 [1]; "5" is 00110101 [1].
**(b)** One byte (25 is 00011001) [1]; character form stores each digit as a separate 8-bit code, so a number with more digits needs one byte for every digit [1].

**9. (a)** 1101001 has four 1s, which is even, so the parity bit is 0 [1].
**(b)** 1110101 has five 1s, so the parity bit is 1 [1].
**(c)** Yes [1]; the byte has five 1s (an odd number), which breaks even parity [1].
**(d)** The parity check shows only that an error exists, not which bit is wrong, so the original value cannot be worked out [1].

**10.** Two flipped bits change the number of 1s by an even amount (or leave it the same), so the byte still has even parity [1]; the receiver wrongly concludes the byte is correct, so the error goes undetected [1].

**11. (a)** Groups: 101 gives 1, 011 gives 1, 000 gives 0, 111 gives 1, so 1101 [2]. (One mark for the first two groups correct.)
**(b)** Advantage: it can correct errors (one error per group) [1]. Disadvantage: it needs three times as many bits to be sent, so it is inefficient [1].

**12. (a)** 120 + 85 + 60 = 265 [1]; 265 mod 256 = 9 [1].
**(b)** The receiver calculates 120 + 87 + 60 = 267, and 267 mod 256 = 11 [1]; this differs from the checksum received (9), so the data has been corrupted [1].

**13. (a)** 3 × 5 = 15, 6 × 4 = 24, 5 × 3 = 15, 9 × 2 = 18, total 72 [1]; 72 mod 11 = 6, so 72 is 6 more than a multiple of 11 (66) [1]; the check digit is 11 − 6 = 5 [1].
**(b)** For 36595: 72 + 5 = 77, a multiple of 11, so it is valid [1]. For 36955: 3 × 5 + 6 × 4 + 9 × 3 + 5 × 2 + 5 × 1 = 15 + 24 + 27 + 10 + 5 = 81 [1]; 81 is not a multiple of 11 (it leaves a remainder of 4), so the error is detected [1].

**14.** A checksum shows only that the data differs from what was sent, not where or how [1]; the receiver normally asks for the data to be sent again [1].

**15.** Unicode has code points for the characters of all languages, whereas ASCII has only 128 characters and cannot represent most alphabets [1]; the text can be stored and exchanged between systems without conflicting extensions [1]; a disadvantage is that more bits per character may be needed, so files can be larger [1].

---

## Where marks are usually lost

- Confusing the character "7" with the number 7.
- Saying that a parity bit can correct errors or detect all of them.
- Reading majority voting groups wrongly or failing to mention the cost of sending three times the data.
- Ignoring the weights when calculating a check digit.
- Describing a checksum as encryption or as a way of repairing data.
