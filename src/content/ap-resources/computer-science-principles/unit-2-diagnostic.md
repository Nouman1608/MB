---
resourceId: "mb-ap-csp-u2-diagnostic"
title: "Data: Unit Diagnostic (Computer Science Principles Unit 2)"
description: "A 30-minute check with short questions on every topic of Unit 2: binary numbers, data compression, extracting information from data and using programs with data."
course: "computer-science-principles"
unit: 2
topics: []
resourceType: "unit-diagnostic"
prerequisites: 
  - "You have studied some or all of Topics 2.1 to 2.4"
learningObjectives: 
  - "Find out which Unit 2 topics are secure and which need more work"
  - "Practise short questions on binary conversion, compression, metadata, cleaning and list processing"
  - "Use the answer explanations to see why common wrong answers are tempting"
  - "Choose the study guides to read next"
skills: ["1", "3", "4", "5"]
studyMinutes: 30
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-u2-review", "mb-ap-csp-2.1-study-guide", "mb-ap-csp-2.2-study-guide", "mb-ap-csp-2.3-study-guide", "mb-ap-csp-2.4-study-guide"]
next: "mb-ap-csp-u2-review"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Twelve short questions: at least two for each of the four topics in Unit 2."
  - "Ten are multiple choice (one selects two answers); two need a short written answer."
  - "Each answer links to the study guide to read if you missed it."
  - "It shows where to focus. It does not give or predict a score."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Use this diagnostic to find **which Unit 2 topics to revisit**: at least two questions for each topic.

These are **original Marlbridge practice questions**, not past exam questions, with fictional scenarios. The diagnostic is not calibrated and gives **no predicted score**.

**How to take it.** Allow 30 minutes and answer everything before opening any answer. No calculator. Code uses Marlbridge's rendering of the course's reference notation (lists in square brackets, `FOR EACH`, `←`, `DISPLAY`).

## Question 1 (multiple choice · 2.1)

What is the decimal value of the binary number 1101?

- (A) 11
- (B) 12
- (C) 13
- (D) 15

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** 8 + 4 + 0 + 1 = 13.

- (A) 11 is 1011.
- (B) 12 is 1100.
- (D) 15 is 1111.

**If you missed this:** [Topic 2.1 study guide](/advanced-course-resources/computer-science-principles/2-1-binary-numbers-study-guide/).
</details>

## Question 2 (multiple choice · 2.1)

A fictional game stores each player's level using 6 bits. How many different levels can be stored?

- (A) 6
- (B) 12
- (C) 36
- (D) 64

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** 2 to the power 6 = 64.

- (A) is the number of bits.
- (B) doubles 6 rather than doubling the count for each bit.
- (C) is 6 squared.

**If you missed this:** [Topic 2.1 study guide](/advanced-course-resources/computer-science-principles/2-1-binary-numbers-study-guide/).
</details>

## Question 3 (multiple choice · 2.1)

Which binary number equals decimal 37?

- (A) 100011
- (B) 100101
- (C) 101001
- (D) 110001

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** 37 = 32 + 4 + 1, so the 32, 4 and 1 places are 1: 100101.

- (A) 100011 is 32 + 2 + 1 = 35.
- (C) 101001 is 32 + 8 + 1 = 41.
- (D) 110001 is 32 + 16 + 1 = 49.

**If you missed this:** [Topic 2.1 study guide](/advanced-course-resources/computer-science-principles/2-1-binary-numbers-study-guide/).
</details>

## Question 4 (multiple choice · 2.1)

A fictional recorder measures the loudness of a sound 40 times each second and stores each measurement as a binary number. Which statement is correct?

- (A) The stored data are an exact copy of the analog sound.
- (B) The stored data approximate the analog sound by sampling it at regular intervals.
- (C) The stored data are analog, because sound is analog.
- (D) Sampling makes the sound lossless.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Sampling measures an analog signal at regular intervals and approximates it digitally.

- (A) only the values at sample times are stored.
- (C) the stored measurements are digital.
- (D) "lossless" describes compression, not sampling.

**If you missed this:** [Topic 2.1 study guide](/advanced-course-resources/computer-science-principles/2-1-binary-numbers-study-guide/).
</details>

## Question 5 (multiple choice · 2.2)

A hospital must keep medical scans so they can be reproduced exactly. Which compression is most appropriate?

- (A) Lossy, because it gives the smallest files
- (B) Lossless, because it allows complete reconstruction of the original
- (C) Neither: compressed files cannot be stored
- (D) Lossy, because quality does not matter for scans

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** When exact reconstruction matters most, lossless is chosen.

- (A) size is not the priority here.
- (C) compressed files can be stored.
- (D) quality matters a great deal for scans.

**If you missed this:** [Topic 2.2 study guide](/advanced-course-resources/computer-science-principles/2-2-data-compression-study-guide/).
</details>

## Question 6 (multiple choice · 2.2)

What is the run-length encoding (count before character) of `BBBBBBWW`?

- (A) 6B2W
- (B) B6W2
- (C) 8BW
- (D) BW

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Six B's followed by two W's.

- (B) puts the count after the character.
- (C) loses the separate runs.
- (D) loses the counts.

**If you missed this:** [Topic 2.2 study guide](/advanced-course-resources/computer-science-principles/2-2-data-compression-study-guide/).
</details>

## Question 7 (multiple choice · 2.3)

A fictional study finds that days when more people wear sunglasses are also days when more people buy cold drinks. Which conclusion is best supported?

- (A) Wearing sunglasses causes people to buy cold drinks.
- (B) Buying cold drinks causes people to wear sunglasses.
- (C) The two are correlated; the data alone do not show a cause, and hot sunny weather may affect both.
- (D) The data must be invalid.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Correlation does not show causation; a third factor may explain both.

- (A), (B) claim a cause without evidence.
- (D) nothing indicates invalid data.

**If you missed this:** [Topic 2.3 study guide](/advanced-course-resources/computer-science-principles/2-3-extracting-information-data-study-guide/).
</details>

## Question 8 (multiple choice, select two · 2.3)

Which **two** statements are correct?

- (A) Deleting a photo's date metadata does not change the picture itself.
- (B) Collecting more data from the same biased source removes the bias.
- (C) Cleaning data makes them uniform without changing their meaning.
- (D) Metadata are the primary data.

<details>
<summary>Answer and explanation</summary>

**Answer: (A) and (C).**

- (B) bias from the source is not eliminated by more data.
- (D) metadata are data about the primary data.

**If you missed this:** [Topic 2.3 study guide](/advanced-course-resources/computer-science-principles/2-3-extracting-information-data-study-guide/).
</details>

## Question 9 (multiple choice · 2.4)

```text
total ← 0
FOR EACH n IN [5, 15, 8, 20]
{
  IF (n > 10)
  {
    total ← total + n
  }
}
DISPLAY(total)
```

What is displayed?

- (A) 48
- (B) 35
- (C) 2
- (D) 15

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The elements above 10 are 15 and 20: 15 + 20 = 35.

- (A) is the sum of all four: 5 + 15 + 8 + 20 = 48.
- (C) is how many elements pass, not their sum.
- (D) is only the first element that passes.

**If you missed this:** [Topic 2.4 study guide](/advanced-course-resources/computer-science-principles/2-4-using-programs-data-study-guide/).
</details>

## Question 10 (multiple choice · 2.4)

A program takes a list of prices and produces a new list in which every price has had 10 added. This is best described as

- (A) a filter
- (B) a transform of every element
- (C) a lossy compression
- (D) a metadata edit

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The same operation is applied to every element.

- (A) a filter would keep only some elements.
- (C) and (D) are unrelated.

**If you missed this:** [Topic 2.4 study guide](/advanced-course-resources/computer-science-principles/2-4-using-programs-data-study-guide/).
</details>

## Question 11 (constructed response · 2.1)

A fictional sensor stores each reading as a binary number using 5 bits. (a) How many different readings can it store? (b) What is the largest whole-number reading it can store, written in binary and in decimal? (c) What happens if the reading is 32? (3 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (3 points).**

| Point | Award when the response… |
|---|---|
| 1 | says 32 readings (2 to the power 5) |
| 2 | gives 11111 in binary and 31 in decimal |
| 3 | says 32 needs 6 bits, so it cannot be stored: an overflow error |

**Sample response.** (a) 32. (b) 11111, which is 31. (c) 32 is 100000, which needs 6 bits, so it overflows.

**If you missed this:** [Topic 2.1 study guide](/advanced-course-resources/computer-science-principles/2-1-binary-numbers-study-guide/).
</details>

## Question 12 (constructed response · 2.3 and 2.4)

A fictional club collects favourite pets by free typing: `Cat`, `cat`, `Dog`, `dog`, `DOG`, `Bird`. (a) Explain why counting the exact entries gives a misleading picture. (b) Clean the data and give the counts. (c) State what a program could do next to show the result. (3 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (3 points).**

| Point | Award when the response… |
|---|---|
| 1 | says the same answer is spelled differently, so equivalent entries are counted separately |
| 2 | cleans to a uniform form and gives dog 3, cat 2, bird 1 |
| 3 | suggests visualising the counts (for example, a bar chart) or filtering |

**Sample response.** (a) `Dog`, `dog` and `DOG` look different to a program, so each would be counted alone. (b) Convert to lower case: dog 3, cat 2, bird 1. (c) Draw a bar chart of the counts.

**If you missed this:** [Topic 2.3 study guide](/advanced-course-resources/computer-science-principles/2-3-extracting-information-data-study-guide/) and [Topic 2.4 study guide](/advanced-course-resources/computer-science-principles/2-4-using-programs-data-study-guide/).
</details>

## What next?

For each question you missed, read the study guide linked in its answer. If you missed two or more in one topic, work through that topic's practice questions. When you are ready, try the [Unit 2 mixed review](/advanced-course-resources/computer-science-principles/unit-2-review/).
