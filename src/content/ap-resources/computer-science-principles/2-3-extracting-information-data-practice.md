---
resourceId: "mb-ap-csp-2.3-practice"
title: "Extracting Information from Data: Practice Questions (Computer Science Principles 2.3)"
description: "Ten original practice questions on metadata, data cleaning, correlation versus causation, bias, filtering and large datasets, with full explanations and suggested rubrics."
course: "computer-science-principles"
unit: 2
topics: ["2.3"]
resourceType: "practice-questions"
prerequisites: 
  - "Topic 2.1 (data stored as bits)"
prerequisiteResources: ["mb-ap-csp-2.3-study-guide"]
learningObjectives: 
  - "Apply extracting information from data to unfamiliar situations"
  - "Explain your reasoning in full sentences, as constructed responses require"
skills: ["1", "4", "5"]
studyMinutes: 50
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-2.3-study-guide", "mb-ap-csp-2.3-revision-notes", "mb-ap-csp-2.3-checklist"]
next: "mb-ap-csp-2.3-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. All data sets are fictional. The rubrics are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is needed.

## Question 1 (multiple choice · foundation)

A fictional video file has a title, a duration and a date of upload stored with it. These items are best described as

- (A) the primary data
- (B) metadata
- (C) a syntax error
- (D) lossy compression

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** They describe the video; they are data about data.

- (A) the video frames and sound are the primary data.
- (C) and (D) are unrelated ideas.
</details>

## Question 2 (multiple choice · foundation)

A user deletes the location tag from a photo. Which statement is correct?

- (A) The photograph itself is unchanged, but the information about where it was taken is gone.
- (B) The photograph is deleted.
- (C) The picture becomes lossy.
- (D) The picture is automatically cleaned.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Changes and deletions made to metadata do not change the primary data.

- (B) the primary data remain.
- (C) and (D) are unrelated to metadata edits.
</details>

## Question 3 (multiple choice · core)

A fictional online form lets users type their country. The entries include `UK`, `U.K.`, `United Kingdom` and `united kingdom`. A programmer replaces all four with `United Kingdom`. This is an example of

- (A) cleaning data
- (B) compressing data
- (C) creating bias
- (D) a run-time error

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The entries mean the same thing; making them uniform is cleaning.

- (B) no bits are being removed.
- (C) the change does not favour any group; it does not change meaning.
- (D) no error occurred during execution.
</details>

## Question 4 (multiple choice · core)

A fictional study finds that towns with more libraries also have more bakeries. Which conclusion is best supported?

- (A) Libraries cause bakeries to open.
- (B) Bakeries cause libraries to open.
- (C) The two are correlated, but the data alone do not show that either causes the other; town size could affect both.
- (D) The data are invalid.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Correlation does not show causation; a third factor such as population may explain both.

- (A) and (B) claim a causal direction without evidence.
- (D) nothing suggests the data are invalid.
</details>

## Question 5 (multiple choice, select two · core)

Which **two** are challenges that arise when processing data sets, regardless of size?

- (A) Some records are incomplete.
- (B) Metadata always change the primary data.
- (C) Entries typed by different people may not be uniform.
- (D) Data are always free of bias if collected by a computer.

<details>
<summary>Answer and explanation</summary>

**Answer: (A) and (C).**

- (B) is false: metadata do not change primary data.
- (D) is false: bias arises from the type or source of data, however collected.
</details>

## Question 6 (multiple choice · core)

A teacher has a list of 200 student records and wants a list that contains only students who scored at least 70. This is best described as

- (A) filtering
- (B) transforming every element
- (C) visualising
- (D) compressing

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Keeping only the elements that meet a condition is filtering.

- (B) would apply the same change to all 200 records.
- (C) would draw a chart.
- (D) would reduce the number of bits.
</details>

## Question 7 (multiple choice · stretch)

A fictional app asks 100,000 people who are all members of one gaming forum about their weekly exercise, and finds that 85 percent exercise daily. A researcher claims the result describes all adults because "100,000 is a very large sample". Which reply is best?

- (A) Correct, because a large sample always represents everyone.
- (B) Incorrect: the size does not remove the bias from drawing only from one forum; the source is unrepresentative.
- (C) Correct, because computers collected the data.
- (D) Incorrect: only data from a small sample are reliable.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Bias created by the source of the data is not eliminated by collecting more data.

- (A) and (C) ignore the source of the bias.
- (D) overcorrects: size matters for the amount of information, but it does not fix bias.
</details>

## Question 8 (constructed response · core)

A fictional club lets members type their favourite sport. The entries are:

`Tennis`, `tennis`, `Football`, `football `, `FOOTBALL`, `Swimming`, `swimming`, `tennis`, (blank), `Football`

(The fourth entry has a trailing space.)

(a) Count each exact string, and say what the most common answer appears to be. (2 points)

(b) Describe how to clean the data, including what to do with the blank. (2 points)

(c) Give the counts after cleaning, and state the most common sport. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (6 points).**

| Point | Award when the response… |
|---|---|
| 1 | counts the exact strings (tennis 2, Tennis 1, Football 2, `football ` 1, FOOTBALL 1, Swimming 1, swimming 1, blank 1) |
| 2 | notes that the exact counts make "tennis" and "Football" tie, at 2 |
| 3 | describes making entries uniform (one capitalisation, remove extra spaces) without changing meaning |
| 4 | handles the blank as incomplete data (exclude and note, or follow up) |
| 5 | gives football 4, tennis 3, swimming 2 (total 9 usable records) |
| 6 | states football is the most common (4 of 9) |

**Sample response.** (a) Exact counts: tennis 2, Tennis 1, Football 2, "football " 1, FOOTBALL 1, Swimming 1, swimming 1, blank 1. It looks like a tie between tennis and Football. (b) Convert to lower case and trim spaces so equivalent entries match; the blank is incomplete, so exclude it and note it. (c) football 4, tennis 3, swimming 2; football is most common.
</details>

## Question 9 (constructed response · core)

A fictional city records, for 12 weeks, the number of umbrellas sold and the number of people who catch colds. Both rise in the autumn weeks and fall in the summer weeks.

(a) State the relationship shown by the data. (1 point)

(b) A newspaper says "umbrellas cause colds". Explain why this does not follow from the data. (2 points)

(c) Suggest **one** additional data source to help investigate and say what it could show. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | identifies a positive correlation (both rise and fall together) |
| 2 | says correlation does not show causation |
| 3 | proposes a plausible third factor (rainy or cold weather increases both) |
| 4 | names a data source (weather records: rainfall and temperature, or visitor counts) |
| 5 | says what it could show (whether both counts follow the weather, or whether the link remains once weather is considered) |

**Sample response.** (a) Both go up and down together: a positive correlation. (b) That they move together does not show one causes the other; rainy cold weather could lead people to buy umbrellas and also to catch colds. (c) Weather records. They could show whether both counts follow rainfall and temperature.
</details>

## Question 10 (constructed response · stretch)

A fictional company wants to analyse 50 billion records of customer purchases.

(a) Explain **two** challenges the company faces because of the size of the data. (2 points)

(b) The records came only from customers of the company's website, not its shops. Explain one problem this creates that more website data cannot fix. (2 points)

(c) Describe one process the company could use to extract information from the records. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | gives a first size-related challenge (too large for one computer, so parallel systems are needed) |
| 2 | gives a second (storage, processing time, or scalability of the system) |
| 3 | identifies bias from the source: website customers may differ from shop customers |
| 4 | explains that more website data repeats the same bias rather than fixing it |
| 5 | names a process (filter purchases by region, combine with other data, transform, visualise trends) |

**Sample response.** (a) The data are too large to process on one computer, so a parallel system is needed, and the system must scale as the data grow. (b) Website customers may be younger or buy different products from shop customers, so conclusions would be biased toward them; adding more website records would only strengthen the same bias. (c) Filter to purchases in one region, then visualise how sales changed each month.
</details>

## How did you do?

Questions 1 to 7 are multiple choice; 8 to 10 are written. If you lost marks in Question 9, check that you separated what the data show from what they do not. Re-read "Correlation is not causation" in the [study guide](/advanced-course-resources/computer-science-principles/2-3-extracting-information-data-study-guide/) if needed, then use the [checklist](/advanced-course-resources/computer-science-principles/2-3-extracting-information-data-checklist/).
