---
title: "OxfordAQA IGCSE Computer Science (9210): Binary arithmetic -- Practice Questions"
seoTitle: "OxfordAQA IGCSE CS 9210 Binary Arithmetic Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Data representation"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 3.04
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-9210"
  - qualification: "igcse"
    topic: "data-representation-9210"
    subtopic: "binary-arithmetic-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on adding 8-bit binary numbers, logical shifts and the uses of binary shifts."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Binary arithmetic study guide](/resources/oxfordaqa-igcse-computer-science-9210-binary-arithmetic/) | [Binary arithmetic revision notes](/resources/oxfordaqa-igcse-computer-science-9210-binary-arithmetic-revision-notes/)

These questions cover section 3.3.4 Binary arithmetic of the OxfordAQA International GCSE Computer Science (9210)
specification.

---

## Section A

**1.** Add these pairs of binary numbers. Each answer fits in eight bits.

**(a)** 0000 0101 + 0000 0011 **[1]**

**(b)** 0001 1011 + 0000 0111 **[2]**

**2.** State the result of 1 + 1 in a single column of a binary addition, giving the digit written and the carry. **[2]**

**3.** State what happens to the bits that are shifted off the end of an eight-bit number in a logical shift. **[1]**

**4.** Apply each logical shift to the eight-bit binary number given.

**(a)** 0000 0101 shifted left by 3 places **[1]**

**(b)** 1100 1000 shifted right by 2 places **[1]**

## Section B

**5.** Add the binary numbers 0101 1011 and 0010 0100. Show your working, including the carries. **[3]**

**6.** Add the binary numbers 0100 1101 and 0101 0101.

**(a)** Show the result as an eight-bit binary number. **[3]**

**(b)** Show that your answer is correct by using decimal numbers. **[2]**

**7.** Add the binary numbers 0011 0110 and 0100 1010. State the decimal value of the answer. **[3]**

**8.** A student adds 0010 0110 and 0010 1101 and gets the answer 0100 1011. Calculate the correct answer, and
state what the student probably forgot to do. **[3]**

**9.** The eight-bit binary number 0001 0110 has the decimal value 22.

**(a)** Shift the number left by one place and state the decimal value of the result. **[2]**

**(b)** State the relationship between the decimal value before and after the shift. **[1]**

**10.** The eight-bit binary number 1011 0000 has the decimal value 176.

**(a)** Shift the number right by four places and state the decimal value of the result. **[2]**

**(b)** Explain how the same result is obtained by calculation. **[1]**

**11.** The binary number 0001 0101 is shifted right by two places.

**(a)** State the result as an eight-bit binary number. **[1]**

**(b)** The exact value of 21 ÷ 4 is 5.25. Explain why the result of the shift is not 5.25. **[2]**

**12.** The binary number 0010 0011 (35) is shifted left by three places.

**(a)** State the result as an eight-bit binary number. **[1]**

**(b)** Explain why the result is not 280 in decimal. **[2]**

**13.** Describe one situation in which a binary shift can be used. **[2]**

**14.** A program needs to multiply a whole number by 16 using binary shifts. State the direction and the number of
places of the shift, and explain your answer. **[3]**

---

## Answers

**1.** **(a)** 0000 1000 [1]. **(b)** 0010 0010 [2] (one mark for correct carries, one for the correct answer).

**2.** Write 0 [1] and carry 1 [1].

**3.** They are lost (discarded) [1].

**4.** **(a)** 0010 1000 [1]. **(b)** 0011 0010 [1].

**5.**

```
 carries:  0 0 0 0 0 0 0 0
           0 1 0 1 1 0 1 1
         + 0 0 1 0 0 1 0 0
           ---------------
           0 1 1 1 1 1 1 1
```

There are no carries, because no column has two 1s [1]. Correct columns for the right-hand four bits [1]; correct
answer 0111 1111 [1]. (In decimal, 91 + 36 = 127.)

**6.** **(a)** 1010 0010 [3] (one mark for correct working from the right, one mark for correct carries, one mark for the
correct final answer). **(b)** 0100 1101 is 77 and 0101 0101 is 85 [1]; 77 + 85 = 162 and 1010 0010 is 128 + 32 + 2 =
162 [1].

**7.** 1000 0000 [2]; 128 [1] (54 + 74 = 128; the carry ripples through every column).

**8.** The correct answer is 0101 0011 [2] (38 + 45 = 83). The student forgot to add a carry [1] (the carry from
the third column into the fourth, since 1 + 1 gives 0 carry 1).

**9.** **(a)** 0010 1100 [1]; 44 [1]. **(b)** The value is doubled (multiplied by 2) [1].

**10.** **(a)** 0000 1011 [1]; 11 [1]. **(b)** 176 ÷ 16 = 11 [1] (a right shift by four places divides by 2 to the power 4).

**11.** **(a)** 0000 0101 [1]. **(b)** The two bits shifted off the right-hand end are lost [1], so the shift gives
only the whole number part of the division and no fractions [1].

**12.** **(a)** 0001 1000 [1]. **(b)** The result would need nine bits, so the leading 1 is shifted off the left-hand end
and lost [1]; an eight-bit number cannot hold a value above 255 [1].

**13.** A left shift can be used to multiply a whole number by a power of 2 (or a right shift to divide by a power of
2) [1]; for example, shifting left by one place doubles the value [1].

**14.** Left [1]; 4 places [1]; because each place shifted left multiplies by 2, and 2 to the power 4 is 16 [1].

---

## Where marks are usually lost

- Forgetting to carry, as the student did in Question 8.
- Writing 2 in a column instead of 0 with a carry of 1.
- Shifting in the wrong direction, or not filling the empty places with 0.
- Keeping a bit that has been shifted off the end, as in Question 12.
- Describing the use of a shift without mentioning powers of 2.
