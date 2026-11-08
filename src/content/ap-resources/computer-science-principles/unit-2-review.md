---
resourceId: "mb-ap-csp-u2-review"
title: "Data: Mixed Unit Review (Computer Science Principles Unit 2)"
description: "Big ideas, a one-table method summary and six original exam-style questions that combine Unit 2 topics, with worked solutions and suggested rubrics."
course: "computer-science-principles"
unit: 2
topics: []
resourceType: "unit-review"
prerequisites: 
  - "You have studied Topics 2.1 to 2.4"
  - "You have tried the Unit 2 diagnostic and closed any gaps it showed"
prerequisiteResources: ["mb-ap-csp-u2-diagnostic"]
learningObjectives: 
  - "Connect the ideas of Unit 2: binary representation, compression, information from data and programs that process data"
  - "Choose the right idea for a scenario and justify the choice"
  - "Answer multi-part questions that combine calculation, tracing and judgement"
  - "Interpret data and results in context without overclaiming"
skills: ["1", "3", "4", "5"]
studyMinutes: 55
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-u2-diagnostic", "mb-ap-csp-2.1-checklist", "mb-ap-csp-2.2-checklist", "mb-ap-csp-2.3-checklist", "mb-ap-csp-2.4-checklist"]
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Everything digital is bits: n bits give 2 to the power n patterns, and fixed sizes bring overflow and round-off."
  - "Compression trades bits against fidelity: lossless rebuilds the original; lossy approximates it more compactly."
  - "Information is extracted from data by cleaning, filtering, transforming, combining and visualising; correlation is not causation and bias is not cured by more data."
  - "Programs make analysis fast and repeatable, but people still interpret the result and decide whether the data were good enough."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Read the big ideas and the method table, then try the six questions without notes.

These are **original Marlbridge practice questions**, not past exam questions, with fictional scenarios. The rubrics are a **suggested Marlbridge rubric**, not official scoring. Code uses Marlbridge's rendering of the course's reference notation. No calculator is needed.

## Big ideas of the unit

- **Bits are the common currency.** A bit is 0 or 1; n bits give 2 to the power n patterns; context decides what a pattern means; fixed sizes limit range (overflow) and precision (round-off); analog data are approximated by sampling ([2.1](/advanced-course-resources/computer-science-principles/2-1-binary-numbers-study-guide/)).
- **Smaller is possible, but it has a price.** Compression reduces bits. Lossless guarantees a perfect rebuild; lossy discards detail for greater savings. The saving depends on redundancy ([2.2](/advanced-course-resources/computer-science-principles/2-2-data-compression-study-guide/)).
- **Data become information through processing.** Metadata help organise data; cleaning, combining and filtering prepare them; correlation is not causation; bias is not cured by size ([2.3](/advanced-course-resources/computer-science-principles/2-3-extracting-information-data-study-guide/)).
- **Programs make the processing repeatable.** Transform, filter, combine and visualise, iteratively and interactively, with human judgement on the result ([2.4](/advanced-course-resources/computer-science-principles/2-4-using-programs-data-study-guide/)).

## Key relationships and methods

| If the question asks you to... | Use... | Watch out for... |
|---|---|---|
| Convert between binary and decimal | Place values 128, 64, 32, 16, 8, 4, 2, 1 | Reading binary as decimal |
| Find how many values or bits | 2 to the power n; smallest n with 2 to the power n at least the count | Saying n bits gives n values |
| Compare compression methods | Lossless: exact rebuild. Lossy: smaller, approximate | Choosing lossy for text or code |
| Calculate a saving | (original - compressed) ÷ original | Dividing by the compressed size |
| Judge a cause | Separate what the data show from what they do not | Writing "causes" for a correlation |
| Clean data | Make entries uniform without changing meaning | Merging entries that mean different things |
| Trace list code | Table of loop variable and every changing variable | Missing the starting value |
| Judge a data source | Who or what is missing? | Believing more data removes bias |

## Question 1 (multiple choice · mixed)

A fictional audio app stores a sound by measuring its loudness at regular intervals and saving each measurement as a binary number. The developers want the stored sound to be **closer** to the original analog sound. Which change would achieve this, and what is the cost?

- (A) Measure fewer times per second; the cost is a longer recording.
- (B) Measure more times per second; the cost is more bits to store.
- (C) Delete the metadata; the cost is that the artist name is lost.
- (D) Apply lossy compression; the cost is that the file becomes exact.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** More samples approximate the smooth signal more closely, at the cost of more data.

- (A) fewer samples give a rougher approximation, and the recording is not longer.
- (C) metadata do not change how close the sound is.
- (D) lossy compression makes the approximation less exact, and "exact" is wrong.
</details>

## Question 2 (multiple choice · mixed)

A fictional video of 80 MB is compressed to 20 MB. What percentage of the original size has been saved?

- (A) 25%
- (B) 60%
- (C) 75%
- (D) 400%

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** (80 - 20) ÷ 80 = 60 ÷ 80 = 0.75, or 75%.

- (A) is the compressed size as a percentage of the original (20 ÷ 80), not the saving.
- (B) subtracts the numbers as if they were percentages.
- (D) is the ratio 80 ÷ 20 written as a percentage; it is not a saving.
</details>

## Question 3 (multiple choice, select two · mixed)

A school combines a table of lunch purchases with a table of student year groups and finds that Year 9 students buy the most salads. Which **two** statements are correct?

- (A) The programs filtered, combined and compared the data to gain insight.
- (B) The result proves that being in Year 9 makes students choose salads.
- (C) The shared student number is used to combine the two tables.
- (D) Combining tables removes the need to check for incomplete records.

<details>
<summary>Answer and explanation</summary>

**Answer: (A) and (C).**

- (B) a pattern in data does not prove a cause.
- (D) incomplete records can still exist and need handling.
</details>

## Question 4 (constructed response · 2.1 and 2.2)

A fictional tile game has 150 different tile types, each stored as one binary number. A row of 30 tiles is shown with one letter per tile: `GGGGGGGGGGGGWWWWWWWWSSSSSSSSSS` (12 G, 8 W, 10 S).

(a) What is the minimum number of bits needed to give each tile type its own pattern? Show your reasoning. (2 points)

(b) Run-length encode the row (count before the letter). (1 point)

(c) Assuming each character of the string takes 8 bits, calculate the percentage saved. (2 points)

(d) Is this lossless or lossy? Explain. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (6 points).**

| Point | Award when the response… |
|---|---|
| 1 | shows that 7 bits give 128 patterns, fewer than 150 |
| 2 | shows that 8 bits give 256, enough, so the answer is 8 |
| 3 | writes `12G8W10S` |
| 4 | gives the sizes: 30 × 8 = 240 bits before; 8 characters × 8 = 64 bits after |
| 5 | gives the saving: (240 - 64) ÷ 240 = 176 ÷ 240, about 73.3% |
| 6 | says lossless, because decoding rebuilds exactly the original row |

**Sample response.** (a) 2 to the power 7 is 128, too few; 2 to the power 8 is 256, enough: 8 bits. (b) 12G8W10S. (c) Before: 240 bits. After: 8 characters, 64 bits. Saved: 176 bits, about 73.3%. (d) Lossless: expanding the runs gives back exactly the original 30 letters.
</details>

## Question 5 (constructed response · 2.3 and 2.4)

```text
sales ← [120, 90, 200, 150]
bonus ← []
FOR EACH s IN sales
{
  IF (s >= 100)
  {
    APPEND(bonus, s + 10)
  }
}
DISPLAY(bonus)
```

(a) State the output and which two kinds of process the code uses. (3 points)

(b) A manager notices that stores whose staff receive bonuses have higher sales and says: "bonuses cause higher sales". Explain why the data alone do not support this and suggest one way to investigate further. (3 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (6 points).**

| Point | Award when the response… |
|---|---|
| 1 | gives the output [130, 210, 160] (90 is left out) |
| 2 | identifies filtering (only sales of 100 or more) |
| 3 | identifies transforming (adding 10 to each kept value) |
| 4 | says the data show a correlation, not a cause |
| 5 | gives an alternative explanation (stores with higher sales may be able to afford bonuses, or are in busier areas) |
| 6 | suggests a way to investigate (compare stores before and after a bonus scheme begins, or combine with data on store size and location) |

**Sample response.** (a) [130, 210, 160]. It filters (keeps sales of at least 100) and transforms (adds 10). (b) The data show that bonuses and sales go together, not that one causes the other. Busy stores may earn more and so pay more bonuses. The manager could compare each store's sales before and after bonuses were introduced.
</details>

## Question 6 (constructed response · 2.2, 2.3 and 2.4)

A fictional city app lets residents report potholes. Each report has a photo, a free-text street name and an automatically stored time and location.

(a) Identify the primary data in a report and **two** items of metadata. (2 points)

(b) Street names such as `High St`, `high street` and `High Street` appear for the same road. Explain the problem this causes when counting reports per street and describe the fix. (2 points)

(c) Almost all reports come from residents of two wealthy districts. Explain why collecting many more reports through the same app will not fix the problem for deciding where repairs are needed. (1 point)

(d) The app compresses uploaded photos. Recommend lossy or lossless for the photos and justify, naming a trade-off. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (7 points).**

| Point | Award when the response… |
|---|---|
| 1 | identifies the photo as the primary data |
| 2 | gives two metadata items (time, location, file size) |
| 3 | says equivalent spellings are counted as different streets, so counts per street are too low and misleading |
| 4 | describes cleaning: convert to a uniform form without changing the meaning |
| 5 | says the bias comes from the source of the data, and more reports from the same districts repeat it |
| 6 | recommends lossy (acceptable for report photos) or lossless with a clear justification tied to size or detail |
| 7 | names a trade-off (lossy: smaller, faster uploads but fine detail is lost; lossless: exact detail but larger files) |

**Sample response.** (a) The photo is the primary data; the time and location are metadata. (b) The three spellings would be counted as three streets, so no street looks as bad as it is. Cleaning makes them one uniform name, such as "high street". (c) The reports come from where residents use the app, so more of them would just add more from the same districts; potholes elsewhere would still be under-reported. (d) Lossy: a slightly lower-quality photo is enough to see a pothole and uploads quickly on a weak signal. The trade-off is that fine detail is lost for good.
</details>

## How did you do?

If you lost marks on the scenario questions, check whether you named the specific idea asked for (sampling, redundancy, bias, filtering) and linked it to the scenario. For gaps, return to the topic checklists: [2.1](/advanced-course-resources/computer-science-principles/2-1-binary-numbers-checklist/), [2.2](/advanced-course-resources/computer-science-principles/2-2-data-compression-checklist/), [2.3](/advanced-course-resources/computer-science-principles/2-3-extracting-information-data-checklist/) and [2.4](/advanced-course-resources/computer-science-principles/2-4-using-programs-data-checklist/).
