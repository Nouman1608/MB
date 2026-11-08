---
resourceId: "mb-ap-csa-4.1-practice"
title: "Ethical and Social Issues Around Data Collection: Practice Questions (Computer Science A 4.1)"
description: "Nine original Marlbridge practice questions on privacy, algorithmic bias, biased collection methods, data quality and choosing an appropriate data set, with suggested rubrics."
course: "computer-science-a"
unit: 4
topics: ["4.1"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csa-4.1-study-guide"]
learningObjectives:
  - "Explain the risks to privacy from collecting and storing personal data and what programmers can do about them"
  - "Define algorithmic bias and explain how biased or unrepresentative data can produce it"
  - "Judge a data collection method for the bias it may introduce before drawing conclusions"
  - "Explain how incomplete or inaccurate data can make a program work incorrectly, and trace an example"
  - "Decide whether a data set is appropriate for a particular question"
skills: ["5", "1"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-4.1-study-guide", "mb-ap-csa-4.1-revision-notes", "mb-ap-csa-4.1-checklist"]
next: "mb-ap-csa-4.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "Questions 1 to 6 are multiple choice; Questions 7 to 9 need written code, a trace or an explanation."
  - "Every answer explains why the wrong options are wrong."
  - "Mark points are a suggested Marlbridge rubric, not an official scoring guideline."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All organisations, apps and data are fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is allowed. The classes `NaiveSensor` and `CleanSensor` are printed in the [study guide](/advanced-course-resources/computer-science-a/4-1-ethical-social-issues-data-collection-study-guide/), and their outputs were confirmed by running them.

## Question 1 (multiple choice · foundation)

A fitness app stores each user's running routes, including start and end points. What is the **main privacy risk** of storing this data?

- (A) The app will use more battery.
- (B) The stored locations could reveal where users live or spend time if the data is leaked or shared.
- (C) The routes will be too short to be useful.
- (D) The data set will be too small for statistics.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Personal location data can reveal sensitive information about a person, and storing it creates the risk.

- (A) is a technical matter, not a privacy risk.
- (C) and (D) concern usefulness of the data, not privacy.
</details>

## Question 2 (multiple choice · foundation)

Which situation is the best example of **algorithmic bias**?

- (A) A program crashes once when a user types an unexpected character.
- (B) A face-matching tool is repeatedly less accurate for people in one age group because the data it learned from included few of them.
- (C) A program runs more slowly on an older computer.
- (D) A website is unavailable for an hour during maintenance.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The errors are systemic and repeated, and they create unfair outcomes for a specific group.

- (A) is a single error that could affect anyone.
- (C) and (D) are performance and availability matters with no unfair pattern against a group.
</details>

## Question 3 (multiple choice · core)

A school wants to know how many hours Year 9 students sleep on school nights. It collects data by emailing a survey to all students and analysing the replies. Only 12% reply, mostly students who describe themselves as good sleepers. What is the **best** concern about drawing conclusions from this data?

- (A) The sample is too small to be stored.
- (B) The responses may be biased because the students who replied are not representative of all Year 9 students.
- (C) Email is the wrong way to send a survey.
- (D) Sleeping hours cannot be recorded as data.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The collection method (self-selected replies) is likely to over-represent one kind of student, so conclusions about all of Year 9 may be biased.

- (A) is irrelevant: a small set can be stored.
- (C) is not the issue: the problem is who replied.
- (D) is false: hours of sleep can be recorded.
</details>

## Question 4 (multiple choice · core)

```java
NaiveSensor n = new NaiveSensor();
n.record(20.5);
n.record(-999.0);
n.record(22.5);
System.out.println(n.average());
```

`record` adds each reading to `sum` and increments `count`; `-999.0` is the sensor's code for "no reading". The program prints `-318.6666666666667`. What is the **best explanation**?

- (A) The method `average` has a syntax error.
- (B) The code for "no reading" was treated as a real value, so inaccurate data corrupted the result.
- (C) Doubles cannot store negative numbers.
- (D) The sensor stopped working after the second reading.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The sum is 20.5 − 999.0 + 22.5 = −956.0 and −956.0 ÷ 3 is about −318.67. The code means "no data" and should have been skipped.

- (A) is wrong: the code compiles and runs.
- (C) is false: a `double` can be negative.
- (D) is not what the data show: the third reading arrived.
</details>

## Question 5 (multiple choice · core)

A city has a data set of every taxi journey made in the capital over three years. A student wants to use it to decide whether to build a new bus route in a small rural village 200 miles away. Which statement is best?

- (A) The data set is appropriate because it is large.
- (B) The data set is not appropriate, because it relates to a different place and way of travelling than the question.
- (C) The data set is appropriate because taxis and buses are both vehicles.
- (D) The data set is appropriate if it is sorted by date.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A data set built for one question or place may not answer a different question or location.

- (A) confuses size with relevance.
- (C) ignores the difference between a city and a village.
- (D) sorting does not make irrelevant data relevant.
</details>

## Question 6 (multiple choice · core)

Which action best **safeguards the personal privacy** of the users of a new homework app?

- (A) Collect users' full names, home addresses and locations in case they are useful later.
- (B) Collect only the data needed to run the app and store it securely.
- (C) Share users' data with other companies by default.
- (D) Keep all data forever.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Limiting collection to what is needed, and securing it, reduces the risk.

- (A), (C) and (D) each increase the amount of personal data held or exposed.
</details>

## Question 7 (constructed response · core)

A fictional lender, *CredFast*, builds a program that approves or rejects loan applications. It was developed using ten years of the lender's past decisions, in which applicants from two postcodes were approved far less often than others.

(a) Explain how the program could show algorithmic bias.

(b) Name the group that could be harmed and describe one harm.

(c) Suggest two steps the developers could take.

<details>
<summary>Answer and explanation</summary>

**(a)** The program learns patterns from past decisions. If those decisions were unfair to the two postcodes, the program repeats them: it would reject applicants from those postcodes systematically and repeatedly, creating unfair outcomes for a specific group.

**(b)** Applicants living in the two postcodes could be denied loans they could repay, which limits their ability to buy a home or start a business.

**(c)** Examples: examine the data and results for differences between groups; remove or rebalance data that reflects unfair past decisions; test the program on applicants from every area before use; allow a human to review rejections.

**Suggested Marlbridge rubric (5 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): the data reflect past unfair decisions |
| 1 | Part (a): the program repeats the pattern systematically against a group |
| 1 | Part (b): identifies the group (applicants from those postcodes) |
| 1 | Part (b): a specific harm |
| 1 | Part (c): two sensible, distinct steps (award one mark for two, or one mark for each of two with a developed reason) |
</details>

## Question 8 (constructed response · core)

A `CleanSensor` ignores readings equal to `-999.0` and records how many it skipped. Its `average()` returns `sum / count`, where `count` is the number of valid readings.

(a) State the value of `average()` and the number skipped after `record(10.0)`, `record(12.0)`, `record(-999.0)`, `record(14.0)`.

(b) State what a `NaiveSensor` would give for the same four readings, and why this is a problem.

(c) A `CleanSensor` that only ever receives `-999.0` is asked for its average. State what happens and suggest how to handle it.

<details>
<summary>Answer and explanation</summary>

**(a)** The valid readings are 10.0, 12.0 and 14.0: sum 36.0, count 3, average 12.0, with 1 skipped. The compiled program printed `12.0 1`.

**(b)** The naive sensor adds −999.0 and counts it, giving (36.0 − 999.0) ÷ 4 = −240.75. This is not a possible temperature; inaccurate data has made the program work incorrectly.

**(c)** `count` is 0, so `0.0 / 0` evaluates to `NaN` for a `double` (the program printed `NaN`). The method should test `count == 0` first and return a special value or signal that there is no average.

**Suggested Marlbridge rubric (6 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): average 12.0 |
| 1 | Part (a): 1 skipped |
| 1 | Part (b): −240.75 |
| 1 | Part (b): the code for no reading was treated as data |
| 1 | Part (c): division with a count of 0 gives `NaN` |
| 1 | Part (c): a suitable guard such as checking `count == 0` |
</details>

## Question 9 (constructed response · stretch)

A student wants to answer the question "Do students at Ridgeway School get enough sleep on school nights?" Two data sets are available.

- Data set A: a national survey of adults' sleep, 20,000 respondents.
- Data set B: an anonymous survey of Ridgeway students, with 150 students chosen at random from class registers.

(a) State which data set is more appropriate and why.

(b) Give one remaining limitation of that data set.

(c) Name one privacy safeguard for collecting data set B.

<details>
<summary>Answer and explanation</summary>

**(a)** Data set B, because it describes the group the question is about, Ridgeway students, and the random choice from registers reduces collection bias. Data set A describes a different group (adults), so it may not answer the question, however large it is.

**(b)** Some chosen students may not reply, or may not report their sleep accurately; 150 students is a limited sample, so the result applies only to Ridgeway in that period.

**(c)** Keep the survey anonymous, collect only what is needed, and store the replies securely (any one of these).

**Suggested Marlbridge rubric (4 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): chooses B |
| 1 | Part (a): reason based on matching the group and the collection method |
| 1 | Part (b): a valid limitation |
| 1 | Part (c): a valid safeguard |
</details>

## How did you do?

- Questions 1 to 6 right and the rubrics mostly met: move on to the [Introduction to Using Data Sets study guide](/advanced-course-resources/computer-science-a/4-2-introduction-using-data-sets-study-guide/).
- Missed Questions 1 or 6: reread "1. Privacy" in the [study guide](/advanced-course-resources/computer-science-a/4-1-ethical-social-issues-data-collection-study-guide/).
- Missed Questions 2, 3 or 7: reread "2. Algorithmic bias" and "3. How the data was collected".
- Missed Questions 4, 5, 8 or 9: reread "4. Data quality and the right data set", then tick the [topic checklist](/advanced-course-resources/computer-science-a/4-1-ethical-social-issues-data-collection-checklist/).
