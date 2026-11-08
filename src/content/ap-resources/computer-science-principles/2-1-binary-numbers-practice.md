---
resourceId: "mb-ap-csp-2.1-practice"
title: "Binary Numbers: Practice Questions (Computer Science Principles 2.1)"
description: "Ten original practice questions on binary and decimal conversion, ordering binary numbers, how many values n bits can hold, overflow and sampling, with full explanations and rubrics."
course: "computer-science-principles"
unit: 2
topics: ["2.1"]
resourceType: "practice-questions"
prerequisites: 
  - "Place value in decimal numbers and powers of 2"
prerequisiteResources: ["mb-ap-csp-2.1-study-guide"]
learningObjectives: 
  - "Apply binary numbers to unfamiliar situations"
  - "Explain your reasoning in full sentences, as constructed responses require"
skills: ["1", "3", "4"]
studyMinutes: 50
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-2.1-study-guide", "mb-ap-csp-2.1-revision-notes", "mb-ap-csp-2.1-checklist"]
next: "mb-ap-csp-2.1-checklist"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Original questions with fictional scenarios and Marlbridge-rendered pseudocode where code appears."
  - "Every answer explains why each wrong option is wrong."
  - "Rubrics are a suggested Marlbridge rubric, not official scoring."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "drafted"
---

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. All binary numbers are non-negative whole numbers unless stated. The rubrics are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is needed; do the arithmetic by hand.

## Question 1 (multiple choice · foundation)

What is the decimal value of the binary number 1011?

- (A) 7
- (B) 9
- (C) 11
- (D) 13

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The place values are 8, 4, 2, 1 over bits 1, 0, 1, 1. Sum: 8 + 0 + 2 + 1 = 11.

- (A) 7 is 0111, which uses 4, 2, 1.
- (B) 9 is 1001, with 8 and 1 only.
- (D) 13 is 1101, which has a 4 instead of a 2.
</details>

## Question 2 (multiple choice · foundation)

Which binary number is equal to decimal 20?

- (A) 10010
- (B) 10100
- (C) 11000
- (D) 10101

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** 20 = 16 + 4, so the bits for 16 and 4 are 1: 10100.

- (A) 10010 is 16 + 2 = 18.
- (C) 11000 is 16 + 8 = 24.
- (D) 10101 is 16 + 4 + 1 = 21.
</details>

## Question 3 (multiple choice · core)

A fictional game stores each character's skill level as a binary number using 5 bits. How many different skill levels can be stored?

- (A) 5
- (B) 10
- (C) 25
- (D) 32

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** 5 bits give 2 to the power 5 = 32 patterns.

- (A) counts the number of bits, not the number of patterns.
- (B) doubles the bits instead of doubling the patterns per bit.
- (C) is 5 squared, not 2 to the power 5.
</details>

## Question 4 (multiple choice · core)

Which of these binary numbers is **largest**?

- (A) 1111
- (B) 10001
- (C) 10011
- (D) 11000

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** In decimal: 1111 is 15, 10001 is 17, 10011 is 19 and 11000 is 24. The first place from the left where (C) and (D) differ is the second: (D) has a 1 there.

- (A) has only four digits, so it is smaller than the five-digit numbers.
- (B) and (C) both start 10 and are smaller than 11000.
</details>

## Question 5 (multiple choice, select two · core)

Which **two** statements about data representation are correct?

- (A) The same sequence of bits can represent different kinds of data in different contexts.
- (B) A byte consists of 4 bits.
- (C) Sampling an analog signal produces an approximation of it.
- (D) Binary numbers cannot be converted to decimal.

<details>
<summary>Answer and explanation</summary>

**Answer: (A) and (C).**

- (B) a byte is 8 bits.
- (D) conversion between binary and decimal is routine.
</details>

## Question 6 (multiple choice · core)

A fictional counter stores whole numbers in 4 bits. It currently holds 1111 and 1 is added. Which statement best describes what happens?

- (A) The result is 10000, which needs 5 bits, so the counter cannot hold it: an overflow error.
- (B) The result is 0001, with no error.
- (C) The counter switches to storing real numbers.
- (D) The value is stored exactly because binary is always exact.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** 1111 is 15, the largest 4-bit value. Adding 1 gives 16, or 10000, which needs 5 bits.

- (B) is not what addition gives; 0001 would be 1.
- (C) a counter does not change type by itself.
- (D) claims exactness and ignores the range limit.
</details>

## Question 7 (multiple choice · stretch)

A fictional picture file stores a colour as 24 bits. A fictional text file stores the letter "A" as the byte 01000001, which is 65 as a whole number. A student says: "so the colour in the picture file and the number 65 in a spreadsheet must use the same kind of data". Which reply is best?

- (A) Correct: all data in a computer are numbers, so they are the same kind.
- (B) Incorrect: the bits are the same kind (binary digits), but what they stand for (a colour, a character, a number) depends on the context in which they are interpreted.
- (C) Correct, because 24 bits are three bytes.
- (D) Incorrect: bits can only represent numbers, never colours.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Bits are the common building block; abstraction groups them and context gives them meaning.

- (A) mixes the representation (bits) with the interpretation.
- (C) the byte count is not the issue.
- (D) bits can represent colours and characters through agreed groupings.
</details>

## Question 8 (constructed response · core)

(a) Convert the decimal number 77 to binary. Show your method. (3 points)

(b) Add 1 to your answer, in binary, and state the decimal value. (1 point)

(c) State the minimum number of bits needed to store 77 in binary and explain how you know. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | shows a valid method (place values 64, 32, 16, 8, 4, 2, 1 or repeated division by 2) |
| 2 | correctly decomposes: 77 = 64 + 8 + 4 + 1 |
| 3 | gives 1001101 |
| 4 | gives 1001110 which is 78 (adding 1 turns the final 01 into 10 with the 1 carried) |
| 5 | says 7 bits, because 2 to the power 6 = 64 is less than 77 and 2 to the power 7 = 128 is enough |

**Sample response.** (a) Place values 64, 32, 16, 8, 4, 2, 1. 77 - 64 = 13, no 32, no 16, 13 - 8 = 5, 5 - 4 = 1, no 2, 1 - 1 = 0. Bits: 1001101. (b) 1001101 + 1 = 1001110, which is 78. (c) 7 bits, because 6 bits can hold only up to 63.
</details>

## Question 9 (constructed response · core)

A fictional weather station measures air temperature, which changes smoothly all day, and stores one reading every minute.

(a) Is the temperature itself analog or digital? Is the stored list of readings analog or digital? (2 points)

(b) Explain how the stored data are an approximation of the real temperature. (1 point)

(c) Give **one** way the station could make the approximation closer to the real changes, and one cost of doing so. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | says the real temperature is analog (changes smoothly) |
| 2 | says the stored readings are digital (discrete values stored as bits) |
| 3 | explains that sampling measures only at intervals, so changes between samples are missed |
| 4 | suggests a valid improvement (more frequent samples or more bits per sample) |
| 5 | states a valid cost (more bits to store, more processing or transmission) |

**Sample response.** (a) The air temperature is analog; the stored readings are digital. (b) Only the values at each minute are kept, so any rise and fall between minutes is not recorded. (c) Sample every 10 seconds. This gives a closer picture but uses six times as much storage.
</details>

## Question 10 (constructed response · stretch)

A fictional photo app lets users pick from a palette of colours. The designer wants a palette of 100 different colours, and each colour is stored as a binary number.

(a) What is the minimum number of bits needed? Show your reasoning. (2 points)

(b) With that number of bits, how many colour patterns are unused? (1 point)

(c) A teammate proposes 6 bits "to save space". Explain why that does not work. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (4 points).**

| Point | Award when the response… |
|---|---|
| 1 | shows that 6 bits give 64 patterns, fewer than 100 |
| 2 | shows that 7 bits give 128 patterns, enough, so the answer is 7 |
| 3 | gives 128 - 100 = 28 unused patterns |
| 4 | says that 6 bits can represent only 64 different colours, so 36 colours could not be given their own pattern |

**Sample response.** (a) 2 to the power 6 is 64, which is too few; 2 to the power 7 is 128, enough, so 7 bits. (b) 128 - 100 = 28 unused. (c) 6 bits can distinguish only 64 colours, so 36 of the 100 would have no pattern.
</details>

## How did you do?

Questions 1 to 7 are multiple choice; 8 to 10 are written. If you missed Question 3 or question 10, re-read "How many values can n bits represent?" in the [study guide](/advanced-course-resources/computer-science-principles/2-1-binary-numbers-study-guide/). For conversions, redo Worked example 1 without looking. Then use the [checklist](/advanced-course-resources/computer-science-principles/2-1-binary-numbers-checklist/).
