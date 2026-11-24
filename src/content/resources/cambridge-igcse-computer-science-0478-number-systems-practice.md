---
title: "Cambridge IGCSE Computer Science (0478): Number systems -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 1: Data representation"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 1.1
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-0478"
    subtopic: "number-systems-0478"
description: "Thirteen original Cambridge IGCSE Computer Science 0478 questions on conversions, hex, binary addition, overflow, shifts and two's complement, with answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

These questions cover **1.1 Number systems** in Topic 1, Data representation, of the Cambridge IGCSE Computer
Science 0478 syllabus for 2026 to 2028. No calculator is needed; show your working.

Related: [Number systems study guide](/resources/cambridge-igcse-computer-science-0478-number-systems/) and
[Number systems revision notes](/resources/cambridge-igcse-computer-science-0478-number-systems-revision-notes/)

---

## Section A

**1.** Convert the binary number 10011101 to denary. **[1]**

**2.** Convert the hexadecimal number 3C to 8-bit binary. **[1]**

**3.** Convert the denary number 250 to hexadecimal. Show your working. **[2]**

**4.** State the range of denary values that can be represented in 8-bit two's complement. **[1]**

**5.** Convert the 16-bit binary number 0010 1110 0101 1011 to hexadecimal. **[1]**

**6.** State why a computer must convert all data to binary before processing it. **[1]**

## Section B

**7.** A sensor sends the denary value 9000 to a computer.

**(a)** Convert 9000 to 16-bit binary. **[2]**
**(b)** Convert your answer to (a) to hexadecimal. **[1]**

**8.** Two positive integers are added in an 8-bit register.

**(a)** Add 00101101 and 01010110. Give the answer in binary. **[2]**
**(b)** Add 11100001 and 00111111. Give the 8-bit result stored, and explain what has happened. **[3]**

**9.** Logical shifts are performed on positive 8-bit integers.

**(a)** Perform a logical left shift of three places on 00011010. Give the result and state the effect on the
denary value. **[2]**
**(b)** Perform a logical right shift of two places on 01101011. Explain why the result is not exactly one quarter
of the original value. **[2]**
**(c)** A logical left shift of two places is performed on 01110001. Explain why the result is incorrect. **[2]**

**10.** Two's complement is used to store temperatures.

**(a)** Represent −73 in 8-bit two's complement. Show your working. **[2]**
**(b)** Convert the two's complement value 11101100 to denary. **[1]**
**(c)** Explain why +200 cannot be stored in an 8-bit two's complement register. **[1]**

**11.** A web designer uses the HTML colour code #1E90FF.

**(a)** Each pair of hex digits gives the intensity of red, green and blue. Convert each pair to denary. **[3]**
**(b)** Give two reasons why the designer works with hexadecimal codes rather than binary. **[2]**

**12.** Give **two** other uses of hexadecimal in computer science, apart from colour codes. **[2]**

**13.** A student says: "A logical left shift of two places always multiplies an 8-bit number by 4." Use the number
01000000 to show that the student is not always right, and explain why. **[3]**

---

## Answers

**1.** 128 + 16 + 8 + 4 + 1 = **157** [1]

**2.** 3 = 0011, C = 1100, so **00111100** [1]

**3.** 250 = 11111010 (or 250 ÷ 16 = 15 remainder 10) [1]; = **FA** [1]

**4.** **−128 to +127** [1]

**5.** **2E5B** [1]

**6.** A computer processes data with logic gates and stores it in registers that can only hold two states, 0 and 1 [1]

**7. (a)** 9000 = 8192 + 512 + 256 + 32 + 8 [1]; = **0010 0011 0010 1000** [1]
**(b)** **2328** [1] **[3]**
*Examiner insight:* A 16-bit answer must have 16 digits; dropping the leading zeros can lose the mark.

**8. (a)** 45 + 86 = 131 [1]; **10000011** [1]
**(b)** 225 + 63 = 288, which needs 9 bits (100100000) [1]; the stored 8-bit result is **00100000** (32) [1]; overflow has occurred: the result is greater than 255, so the ninth bit is lost and the stored value is wrong [1] **[5]**
*Examiner insight:* "It overflowed" with no reason earns only one of the explanation marks; say why (greater than 255) and what happens (bit lost).

**9. (a)** **11010000** [1]; the value is multiplied by 8 (26 becomes 208) [1]
**(b)** **00011010** (26) [1]; the two right-hand bits (11) are shifted out and lost, so the remainder is lost: 107 ÷ 4 = 26.75, but only 26 is stored [1]
**(c)** The leftmost 1 bit is shifted out and lost [1]; 113 × 4 = 452 is too large for 8 bits, so the result, 11000100 (196), is wrong [1] **[6]**

**10. (a)** 73 = 01001001; flip the bits: 10110110 [1]; add 1: **10110111** [1]
**(b)** −128 + 64 + 32 + 8 + 4 = **−20** [1]
**(c)** The largest positive value in 8-bit two's complement is 127, and 200 is greater than this [1] **[4]**
*Examiner insight:* In (a), stopping at 10110110 gives one's complement and earns only the first mark.

**11. (a)** Red 1E = **30** [1]; green 90 = **144** [1]; blue FF = **255** [1]
**(b)** Any two from: it is shorter than binary (each hex digit represents four bits) [1]; it is easier for people to read and remember [1]; fewer mistakes are made when copying or entering it [1]; it converts easily to binary [1] **[5]**

**12.** Any two from: error codes [1]; MAC addresses [1]; IPv6 addresses [1]; memory dumps or addresses when debugging [1]

**13.** 01000000 shifted left two places gives **00000000** [1]; 64 × 4 = 256 should be the answer, but the result is 0 [1]; the 1 bit is shifted out of the left of the register and lost, because 256 is too large for 8 bits [1]
*Examiner insight:* The explanation mark needs the idea that a bit is lost off the end; "it overflows" alone is not enough.

---

## Where marks are usually lost

- Converting between binary and hex through denary and making an arithmetic slip.
- Leaving out leading zeros in a 16-bit or 8-bit answer.
- Calling an addition "overflow" without naming the 255 limit or the lost ninth bit.
- Describing a shift without saying what happens to the bits moved off the end.
- Two's complement answers that flip the bits but forget to add 1.
- Saying hexadecimal is used because the computer stores it or because it saves memory.

## More on this topic

- [Number systems study guide](/resources/cambridge-igcse-computer-science-0478-number-systems/)
- [Number systems revision notes](/resources/cambridge-igcse-computer-science-0478-number-systems-revision-notes/)
- [Data Representation practice questions](/resources/data-representation-practice/) for the whole topic

## Official syllabus

Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028 (Cambridge International) -- Topic 1 Data
representation, 1.1 Number systems.
