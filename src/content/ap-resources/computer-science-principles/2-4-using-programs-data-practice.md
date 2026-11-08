---
resourceId: "mb-ap-csp-2.4-practice"
title: "Using Programs with Data: Practice Questions (Computer Science Principles 2.4)"
description: "Ten original practice questions on tracing list-processing code, filtering, transforming, combining data sources and planning an analysis, with explanations and suggested rubrics."
course: "computer-science-principles"
unit: 2
topics: ["2.4"]
resourceType: "practice-questions"
prerequisites: 
  - "Topic 2.3 (data versus information, cleaning and filtering)"
prerequisiteResources: ["mb-ap-csp-2.4-study-guide"]
learningObjectives: 
  - "Apply using programs with data to unfamiliar situations"
  - "Explain your reasoning in full sentences, as constructed responses require"
skills: ["2", "4", "5"]
studyMinutes: 50
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-2.4-study-guide", "mb-ap-csp-2.4-revision-notes", "mb-ap-csp-2.4-checklist"]
next: "mb-ap-csp-2.4-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. All data sets are fictional. Code uses Marlbridge's rendering of the course's reference notation (lists in square brackets, `FOR EACH`, `APPEND`, `LENGTH`, `MOD`). The rubrics are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is needed.

## Question 1 (multiple choice · foundation)

A program keeps only the customers whose orders are above 50. This is an example of

- (A) filtering
- (B) transforming every element
- (C) lossless compression
- (D) overflow

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Keeping only items that meet a condition is filtering.

- (B) would change every element, not remove some.
- (C) and (D) are unrelated.
</details>

## Question 2 (multiple choice · core)

```text
nums ← [5, 12, 8, 20, 3]
result ← []
FOR EACH n IN nums
{
  IF (n MOD 2 = 0)
  {
    APPEND(result, n)
  }
}
DISPLAY(result)
```

What is displayed?

- (A) [5, 3]
- (B) [12, 8, 20]
- (C) [5, 12, 8, 20, 3]
- (D) [24, 16, 40]

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `n MOD 2 = 0` is true for even numbers: 12, 8 and 20.

- (A) lists the odd numbers.
- (C) would be the output with no filter.
- (D) doubles the even numbers, which the code does not do.
</details>

## Question 3 (multiple choice · core)

```text
nums ← [3, 5, 7]
out ← []
FOR EACH n IN nums
{
  APPEND(out, n * 2)
}
DISPLAY(out)
```

Which best describes the code?

- (A) A filter; the output is [3, 5, 7].
- (B) A transform; the output is [6, 10, 14].
- (C) A combine; the output is 15.
- (D) A transform; the output is [3, 5, 7, 6, 10, 14].

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Every element is doubled and added to the new list: [6, 10, 14].

- (A) has no condition, so nothing is filtered.
- (C) does not add the elements together.
- (D) only the doubled values are appended to `out`.
</details>

## Question 4 (multiple choice, select two · core)

Which **two** are ways a program can be used to gain insight from data?

- (A) Filtering a data set to keep only records that meet a condition
- (B) Visualising a data set as a chart to reveal a trend
- (C) Deleting all metadata
- (D) Replacing every value with zero

<details>
<summary>Answer and explanation</summary>

**Answer: (A) and (B).**

- (C) deleting metadata removes information about the data.
- (D) destroys the data without producing insight.
</details>

## Question 5 (multiple choice · core)

An analyst filters sales by region, views a chart, notices a dip in one month and then filters by product to investigate. This is best described as

- (A) an iterative and interactive use of a program to gain insight
- (B) a syntax error
- (C) lossy compression
- (D) a one-step transformation

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Each result prompts a refined question.

- (B), (C) and (D) do not describe the repeated back-and-forth.
</details>

## Question 6 (multiple choice · core)

A fictional shop has one table of purchases (customer number, item) and another of customers (customer number, town). A manager joins them using the customer number. What does this allow?

- (A) It shows which towns buy which items, which neither table shows alone.
- (B) It makes both tables smaller.
- (C) It removes the need for cleaning.
- (D) It changes the items in the purchases table.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Combining data sources can give insight that a single source cannot.

- (B) joining does not reduce size.
- (C) cleaning may still be needed.
- (D) the original table is unchanged.
</details>

## Question 7 (multiple choice · stretch)

```text
total ← 0
FOR EACH n IN [4, 9, 3, 12, 6]
{
  IF (n > 5)
  {
    total ← total + n
  }
}
DISPLAY(total)
```

What is displayed?

- (A) 34
- (B) 27
- (C) 3
- (D) 9

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The elements above 5 are 9, 12 and 6: 9 + 12 + 6 = 27.

- (A) is the sum of all elements: 4 + 9 + 3 + 12 + 6 = 34, ignoring the condition.
- (C) is the number of elements above 5, not their sum.
- (D) is the first element above 5.
</details>

## Question 8 (constructed response · core)

```text
temps ← [18, 25, 31, 22, 35, 28]
hot ← []
FOR EACH t IN temps
{
  IF (t > 30)
  {
    APPEND(hot, t)
  }
}
DISPLAY(hot)
DISPLAY(LENGTH(hot))
```

(a) Complete a trace table showing `t` and `hot` after each pass. (2 points)

(b) State the output. (1 point)

(c) Change **one condition** so that the code collects temperatures of 28 or more. State the new output. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| `t` | `hot` after |
|---|---|
| 18 | [] |
| 25 | [] |
| 31 | [31] |
| 22 | [31] |
| 35 | [31, 35] |
| 28 | [31, 35] |

| Point | Award when the response… |
|---|---|
| 1 | traces correctly through the first three passes |
| 2 | traces correctly through the last three passes (35 added; 28 not added) |
| 3 | states the output: [31, 35] and then 2 |
| 4 | changes the condition to `t >= 28` |
| 5 | states the new output: [31, 35, 28] and 3 |

**Sample response.** (b) [31, 35], then 2. (c) Use `IF (t >= 28)`: the list becomes [31, 35, 28], and the length displayed is 3.
</details>

## Question 9 (constructed response · core)

A fictional school has a table of 400 library loans: student number, book title, date borrowed. The librarian wants to know which month has the most loans and whether that changes by year group. A second table gives each student's year group, using the student number.

(a) Describe a sequence of **three** processing steps the librarian could use. (3 points)

(b) Explain why the librarian's first result might lead to a second pass. (1 point)

(c) Give one thing the librarian should check before trusting the result. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | combines the two tables using the student number |
| 2 | groups or counts loans by month (a combine or transform step) |
| 3 | visualises or compares by year group (for example, a chart per year group) |
| 4 | explains that a result such as a spike in one month prompts a new question (which year group, which books), so analysis is iterative |
| 5 | names a check (missing student numbers, duplicate loans, dates in different formats, or that one month has more school days) |

**Sample response.** (a) Join the loans table to the year-group table using the student number; count loans per month; draw a chart of loans per month for each year group. (b) If March is highest overall, the librarian may filter to March and ask which year group or books account for it. (c) Check for loans with missing or invalid student numbers and for dates entered in different formats.
</details>

## Question 10 (constructed response · stretch)

A fictional streaming service uses a program to **classify** each film into a genre and to **cluster** viewers who watch similar films.

(a) Explain the difference between classifying and clustering. (2 points)

(b) Describe one benefit of using a visualisation of the clusters. (1 point)

(c) Explain one risk of relying on the result without checking the data. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | says classifying assigns each item to a category |
| 2 | says clustering groups items that are similar to each other (without a fixed category list in advance) |
| 3 | gives a benefit of visualising (patterns, group sizes or outliers are easier to see) |
| 4 | identifies a risk (biased, incomplete or unrepresentative viewing data lead to misleading clusters) |
| 5 | explains the effect (viewers could be wrongly grouped, so recommendations or conclusions would be unfair or inaccurate) |

**Sample response.** (a) Classifying puts each film into a named genre; clustering finds groups of similar viewers. (b) A chart shows how big each cluster is and which ones overlap. (c) If the data come only from one age group, the clusters will reflect that group and recommendations will be less suitable for others.
</details>

## How did you do?

Questions 1 to 7 are multiple choice; 8 to 10 are written. If you missed Question 2 or 7, re-trace with a table showing the loop variable and each changing variable. If you lost marks in Question 9, check that your steps were in a sensible order and tied to the question. Re-read "Four processes on data" in the [study guide](/advanced-course-resources/computer-science-principles/2-4-using-programs-data-study-guide/) if needed, then use the [checklist](/advanced-course-resources/computer-science-principles/2-4-using-programs-data-checklist/).
