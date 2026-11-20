---
title: "Cambridge O Level Computer Science (2210): Number systems -- Practice Questions"
seoTitle: "Cambridge O Level CS 2210 Number Systems Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 1 – Data representation"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 1.1
syllabusTopics:
  - qualification: "o-level"
    topic: "data-representation-2210"
  - qualification: "o-level"
    topic: "data-representation-2210"
    subtopic: "number-systems-2210"
description: "Original questions with answers on Cambridge O Level Computer Science 2210 section 1.1: binary, denary and hexadecimal conversions, 8-bit addition, overflow, shifts and two's complement."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs. Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Number systems study guide](/resources/cambridge-o-level-computer-science-2210-number-systems/)

---

## Section A

**1.** State why computers use binary to represent all forms of data. **[1]**

**2.** Convert the binary number 01011011 to denary. **[1]**

**3.** Convert the denary number 117 to an 8-bit binary number. **[2]**

**4.** Convert the hexadecimal number 9B to binary. **[2]**

**5.** Convert the binary number 11010110 to hexadecimal. **[2]**

**6.** Convert the denary number 180 to hexadecimal. **[2]**

**7.** State the range of denary values that can be stored in an 8-bit register as an unsigned binary integer. **[1]**

## Section B

**8.** A web designer writes the colour of a heading as a hexadecimal code rather than as a long binary number.

**(a)** Give **two** reasons why hexadecimal is easier for people to use than binary. **[2]**

**(b)** Give **one** other area of computer science where hexadecimal is used. **[1]**

**9.** Add the two 8-bit binary integers 00101101 and 01010110. Show your working. **[3]**

**10.** A program adds 10010110 and 01101010 in an 8-bit register.

**(a)** Work out the true result of the addition in binary. **[2]**

**(b)** Explain why an overflow error occurs. **[2]**

**11.** The register contains 00001101.

**(a)** Perform a logical left shift of three places. **[2]**

**(b)** State the effect that this shift has on the denary value of the number. **[1]**

**12.** The register contains 01101001.

**(a)** Perform a logical right shift of two places. **[2]**

**(b)** State what happens to the bits that are moved out of the register. **[1]**

**13.** The register contains 11001001. A logical left shift of two places is performed.

**(a)** Write the new contents of the register. **[2]**

**(b)** Explain why the new denary value is not four times the original value. **[2]**

**14.** An 8-bit register uses two's complement.

**(a)** Convert 11100110 to denary. **[2]**

**(b)** Convert −52 to an 8-bit two's complement binary number. Show your working. **[3]**

**(c)** State the smallest denary number that the register can store. **[1]**

**15.** A 16-bit register contains 0000001010110000.

**(a)** Write the contents as a four-digit hexadecimal number. **[2]**

**(b)** Convert the contents to denary. **[2]**

---

## Answers

**1.** Computers are made of electronic components and logic gates that have two states (on and off), so every form of data must be stored and processed as 0s and 1s [1].

**2.** 64 + 16 + 8 + 2 + 1 = **91** [1].

**3.** 117 = 64 + 32 + 16 + 4 + 1 [1], so the 8-bit number is **01110101** [1].

**4.** 9 = 1001 and B (11) = 1011 [1], giving **10011011** [1].

**5.** The groups are 1101 and 0110 [1]. 1101 is D and 0110 is 6, so the answer is **D6** [1].

**6.** 180 ÷ 16 = 11 remainder 4 [1]. 11 is B, so the answer is **B4** [1].

**7.** 0 to 255 [1].

**8. (a)** Any two: it is shorter than binary, so fewer digits to read and type [1]; each hex digit stands for exactly four bits, so conversion is simple [1]; people make fewer mistakes copying it [1]. Maximum 2.
**(b)** Any one: MAC addresses; memory addresses or memory dumps; error codes; machine code or assembly language listings [1].

**9.** Adds column by column from the right, using 1 + 1 = 0 carry 1 [1]. Carries are passed correctly along the whole byte [1]. Correct result **10000011** [1]. Check: 45 + 86 = 131.

**10. (a)** 10010110 + 01101010 = **100000000** (nine bits) [2]. Award 1 mark if the sum is correct except for one wrong bit. Check: 150 + 106 = 256.
**(b)** The true result needs nine bits, but an 8-bit register can only hold values up to 255 [1]. The ninth bit has nowhere to go, so the register is left holding 00000000 and the answer is wrong, which is an overflow error [1].

**11. (a)** Bits move three places left, three zeros enter on the right: **01101000** [2]. Award 1 mark for a correct shift of one or two places.
**(b)** The value is multiplied by 8 (from 13 to 104) [1].

**12. (a)** Bits move two places right, two zeros enter on the left: **00011010** [2]. Award 1 mark for a correct shift of one place (00110100).
**(b)** They are lost / discarded [1].

**13. (a)** **00100100** [2]. Award 1 mark for 00100100 with one error.
**(b)** The two leftmost bits (both 1) were lost from the register [1]. The value 201 × 4 = 804 needs more than eight bits, so the register keeps only 36 [1].

**14. (a)** −128 + 64 + 32 + 4 + 2 [1] = **−26** [1].
**(b)** 52 in binary is 00110100 [1]. Invert the bits to get 11001011 [1]. Add 1 to get **11001100** [1].
**(c)** −128 [1].

**15. (a)** Split into groups of four: 0000, 0010, 1011, 0000 [1], giving **02B0** [1].
**(b)** 2 × 256 + 11 × 16 + 0 = **688** [2]. Award 1 mark for a correct method with one slip.

---

## Where marks are usually lost

- Question 3: not writing eight bits, or not showing the subtraction of place values.
- Question 6: dividing 180 by 16 but writing the remainder as a number above 9 (it must be a letter).
- Question 8: saying hexadecimal is "faster for the computer". It is easier for humans; the computer works in binary.
- Question 10: giving the answer 00000000 with no mention of the ninth bit. Write the true result first.
- Question 11 and Question 12: shifting the wrong way, or filling the empty places with 1s instead of 0s.
- Question 13: saying "the answer is wrong" without saying why. Name the lost bits.
- Question 14: forgetting that the leftmost column is worth −128, or forgetting to add 1 after inverting.

## Checking your conversions

Convert each answer back to the form it started from. For Question 5, D6 gives 13 × 16 + 6 = 214, and 11010110 is 128 + 64 + 16 + 4 + 2 = 214. If the two denary values match, the conversion is right.
