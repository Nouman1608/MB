---
resourceId: "mb-ap-csp-2.2-practice"
title: "Data Compression: Practice Questions (Computer Science Principles 2.2)"
description: "Ten original practice questions on lossless and lossy compression, run-length encoding, size savings and choosing a method, with full explanations and suggested rubrics."
course: "computer-science-principles"
unit: 2
topics: ["2.2"]
resourceType: "practice-questions"
prerequisites: 
  - "Topic 2.1 (bits, bytes and how data are stored in binary)"
prerequisiteResources: ["mb-ap-csp-2.2-study-guide"]
learningObjectives: 
  - "Apply data compression to unfamiliar situations"
  - "Explain your reasoning in full sentences, as constructed responses require"
skills: ["1", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-2.2-study-guide", "mb-ap-csp-2.2-revision-notes", "mb-ap-csp-2.2-checklist"]
next: "mb-ap-csp-2.2-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Where bits are counted, each character is assumed to use 8 bits. The rubrics are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is needed.

## Question 1 (multiple choice · foundation)

Which statement correctly describes **lossless** compression?

- (A) It discards details so that the file is as small as possible.
- (B) It reduces the number of bits and allows the original data to be rebuilt exactly.
- (C) It always produces a smaller file than lossy compression.
- (D) It can only be used on photographs.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Lossless means complete reconstruction of the original.

- (A) describes lossy compression.
- (C) lossy methods can usually reduce size more.
- (D) lossless methods work on many kinds of data.
</details>

## Question 2 (multiple choice · foundation)

A student says: "if a file has fewer bits it must contain less information." Which reply is best?

- (A) Correct, because bits are information.
- (B) Incorrect: lossless compression can use fewer bits and keep all the information.
- (C) Correct, because compression always deletes data.
- (D) Incorrect: fewer bits means more information.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Removing redundancy reduces bits without losing information.

- (A) and (C) ignore lossless methods.
- (D) overcorrects; fewer bits does not mean more information.
</details>

## Question 3 (multiple choice · core)

What is the run-length encoding of `AAAABBB`, writing the count before the character?

- (A) 4A3B
- (B) A4B3
- (C) 7AB
- (D) AABB

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Four A's and three B's: 4A3B, with the count first.

- (B) has the count after the letter, which is a valid style but not the one asked for.
- (C) loses the separate counts and cannot be decoded.
- (D) is just a shortened string and cannot be decoded to the original.
</details>

## Question 4 (multiple choice · core)

The run-length code `3X2Y1Z` (count then character) is decoded. What is the result?

- (A) XXXYYZ
- (B) 3X2Y1Z
- (C) XYZ
- (D) XXXYYYZ

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Three X's, two Y's and one Z.

- (B) is the unchanged code.
- (C) ignores the counts.
- (D) has three Y's instead of two.
</details>

## Question 5 (multiple choice, select two · core)

Which **two** statements about lossy compression are correct?

- (A) It can usually reduce the number of bits more than lossless compression.
- (B) It lets you reconstruct the original exactly.
- (C) It allows only an approximation of the original to be reconstructed.
- (D) It cannot be applied to sound.

<details>
<summary>Answer and explanation</summary>

**Answer: (A) and (C).**

- (B) is false: only an approximation can be rebuilt.
- (D) is false: lossy methods are often applied to sound.
</details>

## Question 6 (multiple choice · core)

A fictional law firm stores scanned contracts for many years and must be able to reproduce every character. Which is the best choice?

- (A) Lossy compression, to make the files as small as possible
- (B) Lossless compression, because exact reconstruction matters most
- (C) No storage at all
- (D) Lossy compression, because it is always faster

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Quality and the ability to rebuild the exact original are the priority.

- (A) risks changing details that matter.
- (C) does not meet the need.
- (D) the claim "always faster" is unsupported and speed is not the priority.
</details>

## Question 7 (multiple choice · stretch)

Which data would run-length encoding compress **most** effectively?

- (A) `QWERTYUIOP`
- (B) `AAAAAAAAAAAAAAAAAAAA`
- (C) `ABABABABABABABABABAB`
- (D) `A1B2C3D4E5F6G7H8I9J0`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** One long run of 20 A's becomes a short code such as 20A.

- (A) has no repeats; the code would be longer than the original.
- (C) alternates, so there are 20 runs of length 1.
- (D) has no adjacent repeats either.
</details>

## Question 8 (constructed response · core)

The fictional string `YYYYYYYYYYYYBBBBBBBBGGGG` (letters are colour codes) is stored using 8 bits per character.

(a) Encode it using run-length encoding with the count before the character. (2 points)

(b) Calculate the number of bits before and after, and the percentage saved. (3 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | counts the runs correctly (12 Y, 8 B, 4 G, total 24) |
| 2 | writes `12Y8B4G` |
| 3 | gives the original size: 24 × 8 = 192 bits |
| 4 | gives the compressed size: 7 characters (12Y8B4G) × 8 = 56 bits |
| 5 | gives the saving: (192 - 56) ÷ 192 = 136 ÷ 192, about 70.8% |

**Sample response.** (a) 12Y8B4G. (b) Before: 192 bits. After: 56 bits. Saved: 136 bits, which is about 70.8% of the original.
</details>

## Question 9 (constructed response · core)

A fictional streaming company stores a master copy of each film and also sends the film to viewers on mobile phones.

(a) Recommend the type of compression for the master copy and justify. (2 points)

(b) Recommend the type of compression for the phone stream and justify. (2 points)

(c) State one trade-off of your choice in (b). (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | recommends lossless for the master |
| 2 | justifies: quality and exact reconstruction matter most for the copy from which others are made |
| 3 | recommends lossy for the stream |
| 4 | justifies: smaller size and faster transmission matter most over mobile connections, and small quality loss is acceptable |
| 5 | states a trade-off: some detail is lost permanently, so quality is lower than the original |

**Sample response.** (a) Lossless: the master must be rebuilt exactly. (b) Lossy: the stream must be small enough to send quickly, and viewers will not notice small losses on a phone. (c) The picture is slightly worse than the master because some detail is gone.
</details>

## Question 10 (constructed response · stretch)

A programmer says: "run-length encoding always makes a file smaller." (a) Give an example string of at least six characters that shows the claim is false, with its run-length encoding (count before the character). (2 points) (b) Explain what property of the data causes the result. (1 point) (c) Is run-length encoding lossy or lossless? Explain. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (4 points).**

| Point | Award when the response… |
|---|---|
| 1 | gives a string with few or no repeats, such as `ABCDEF` |
| 2 | gives its encoding with counts, `1A1B1C1D1E1F`, and notes it is longer (12 against 6 characters) |
| 3 | says the data have little or no redundancy (no repeated runs) |
| 4 | says lossless, because decoding rebuilds the original exactly |

**Sample response.** (a) `ABCDEF` becomes `1A1B1C1D1E1F`: 12 characters instead of 6. (b) There are no repeated runs, so the counts only add length. (c) It is lossless because decoding gives back exactly the original string.
</details>

## How did you do?

Questions 1 to 7 are multiple choice; 8 to 10 are written. If you lost marks in Question 8, check that you divided the saving by the **original** size. Re-read "Lossless compression" and "Choosing between them" in the [study guide](/advanced-course-resources/computer-science-principles/2-2-data-compression-study-guide/) if needed, then use the [checklist](/advanced-course-resources/computer-science-principles/2-2-data-compression-checklist/).
