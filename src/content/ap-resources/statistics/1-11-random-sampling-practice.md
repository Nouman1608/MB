---
resourceId: "mb-ap-stats-1.11-practice"
title: "Random Sampling: Practice Questions (Statistics 1.11)"
description: "Seven original Marlbridge practice questions on simple random, stratified, cluster and systematic samples and on sampling with or without replacement, with solutions and suggested rubrics."
course: "statistics"
unit: 1
topics: ["1.11"]
resourceType: "practice-questions"
prerequisites:
  - "Population, sample and census"
prerequisiteResources: ["mb-ap-stats-1.11-study-guide"]
learningObjectives:
  - "Identify the random sampling method used in a described study"
  - "Describe how to select a simple random, stratified, cluster or systematic random sample"
  - "Explain the difference between sampling with and without replacement"
  - "Justify the choice of a sampling method in context"
skills: ["2"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "A random number generator is useful but not required. Lines of random digits are given where needed."
related: ["mb-ap-stats-1.11-study-guide", "mb-ap-stats-1.11-revision-notes", "mb-ap-stats-1.11-checklist"]
next: "mb-ap-stats-1.11-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written answers."
  - "Every description of a sampling method names the labels, the chance process and what to do with repeats."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All places, organisations and numbers are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: sampling is **without replacement** unless the question says otherwise; labels all have the same number of digits; when you read a line of random digits, read from the left in groups of three and ignore the spaces.

## Question 1 (multiple choice · foundation)

A fictional airline wants to survey passengers about seat comfort. On one Saturday it runs 48 flights. It numbers the flights 1 to 48, uses a random number generator to choose 3 flights, and asks every passenger on those 3 flights to complete the survey. Which sampling method is this?

- (A) Simple random sample
- (B) Stratified random sample
- (C) Cluster random sample
- (D) Systematic random sample

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The flights are clusters. A random sample of flights is chosen, and data are collected from **every** passenger on the chosen flights.

- (A) is wrong because a sample made of a few passengers from each of many flights is impossible, so not every sample is equally likely.
- (B) is wrong because 45 of the 48 flights give no passengers; a stratified sample takes some from every group.
- (D) is wrong because there is no random start followed by a fixed interval.
</details>

## Question 2 (multiple choice · core)

A fictional school has 120 students in Year 11: 60 boys and 60 girls, taught in 4 classes of 30. The head of year has an alphabetical list of all 120 students. She wants a sample of 10. Which plan gives a **simple random sample** of 10 students?

- (A) Choose a random number from 1 to 12, take that student on the list, and then every 12th student after it.
- (B) Write each student's name on an identical slip, mix the slips well in a box, and draw 10 slips without replacing them.
- (C) Choose one of the 4 classes at random, then choose 10 students at random from that class.
- (D) Choose 5 boys at random and 5 girls at random.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Every set of 10 different students has the same chance of being the 10 slips drawn, which is the definition of an SRS.

- (A) is a systematic random sample. Only 12 different samples are possible (one for each start), so most sets of 10 students can never be chosen.
- (C) can only produce samples from a single class. A sample with students from two classes is impossible, so it is not an SRS.
- (D) is a stratified random sample with gender as strata. A sample of 6 boys and 4 girls is impossible, so it is not an SRS.
</details>

## Question 3 (multiple choice · core)

A fictional university with 8,000 students wants to estimate the mean number of hours of paid work its students do each week. It plans a stratified random sample. Which characteristic would give the most useful strata?

- (A) The first letter of the student's surname
- (B) Whether the student studies full-time or part-time
- (C) Whether the student's ID number is odd or even
- (D) The month in which the student was born

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Part-time students are likely to do many more hours of paid work than full-time students. Hours worked should be similar within each stratum and different between strata, which is when stratifying helps most. It also guarantees both groups are represented.

- (A), (C) and (D) have no likely link to hours of paid work. Each stratum would contain the same mix of students, so stratifying would give no benefit over an SRS.
</details>

## Question 4 (constructed response · foundation)

A fictional games club has 30 members. It needs 4 members to form a committee. Two plans are suggested. In both, each member's name is written on an identical slip and the slips are mixed in a box.

- **Plan A.** Draw a slip, record the name, put the slip back and mix again. Repeat until 4 names are recorded.
- **Plan B.** Draw 4 slips, one at a time, without putting any back.

(a) Which plan samples with replacement?
(b) Explain why Plan A might not give 4 different members.
(c) Which plan should the club use to choose the committee? Explain.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** **Plan A**, because each slip is returned before the next draw.

**(b)** In Plan A, a member's slip is back in the box after it is drawn, so the same member could be drawn again on a later draw. The 4 recorded names could include a repeat, giving only 3 (or fewer) different members.

**(c)** **Plan B.** A committee needs 4 different people. Sampling without replacement means a chosen member cannot be chosen again, so the 4 slips always give 4 different members.

| Point | What earns it |
|---|---|
| 1 | Identifies Plan A as sampling with replacement |
| 1 | Explains that a returned slip can be drawn again, so a member could be recorded twice |
| 1 | Chooses Plan B **and** links "without replacement" to needing 4 different members |

Also accept Plan A with the rule "ignore a name already chosen", if the answer says this makes it sampling without replacement.
</details>

## Question 5 (constructed response · core)

The fictional Westbrook College has 340 students. The librarian wants an SRS of 15 students to ask about opening hours. She has an alphabetical list of all students.

(a) Describe how the librarian could use a random number generator to select the SRS.
(b) Instead, the librarian uses this line of random digits. Identify the first 3 students chosen. Explain any numbers you skip.

**21094 19873 90210 02312 68714 50300**

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Number the students on the list from 1 to 340. Generate random whole numbers from 1 to 340, ignoring any number already chosen, until there are 15 different numbers. Survey those 15 students.

**(b)** Label the students 001 to 340. Read in groups of three: 210, 941, 987, 390, 210, 023, 126, …

| Group | Decision |
|---|---|
| 210 | take |
| 941 | skip: greater than 340 |
| 987 | skip: greater than 340 |
| 390 | skip: greater than 340 |
| 210 | skip: already chosen |
| 023 | take |
| 126 | take |

The first 3 students are those labelled **210, 023 and 126**.

| Point | What earns it |
|---|---|
| 1 | Labels all 340 students with distinct numbers (1 to 340, or 001 to 340) |
| 1 | Describes the random number generator range **and** what to do with repeats, and when to stop (15 different students) |
| 1 | Correctly skips 941, 987 and 390 as not labels |
| 1 | Correctly skips the repeated 210 and gives 210, 023 and 126 |

Do not award point 2 for "pick 15 students at random" with no method. Accept the slips-in-a-box method in (a) if it states identical slips, mixing, and drawing without replacement.
</details>

## Question 6 (constructed response · stretch)

(a) A fictional supermarket has 600 receipts from one day, stored in time order. The manager wants a systematic random sample of 40 receipts to check for pricing errors. Describe how to select the sample, and give the first three and last receipt numbers if the random start turns out to be 9.

(b) A fictional factory fills bottles using a machine with 8 moulds, used in strict rotation: bottle 1 comes from mould 1, bottle 2 from mould 2, … , bottle 8 from mould 8, bottle 9 from mould 1 again, and so on. An inspector takes a systematic sample from 800 bottles: a random start from 1 to 8, then every 8th bottle. Mould 3 is faulty. Explain why this sampling plan is a poor way to estimate the proportion of faulty bottles.

(c) Suggest a different random sampling plan for the bottles that avoids the problem in (b).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Number the receipts 1 to 600 in time order. Interval k = 600 ÷ 40 = 15. Choose a random whole number from 1 to 15 as the start. With a start of 9, the sample is receipts **9, 24, 39**, … , **594** (40 receipts in all).

**(b)** The interval 8 matches the rotation of the moulds, so every sampled bottle comes from the **same** mould. With a start of 5, all 100 sampled bottles come from mould 5 and none from the faulty mould 3, so the estimate is far too low. With a start of 3, every sampled bottle is from the faulty mould, so the estimate is far too high. Either way, the sample does not represent the 8 moulds.

**(c)** Any one of these:
- Take an SRS of bottles: number them 1 to 800 and use a random number generator, ignoring repeats.
- Take a stratified random sample with the moulds as strata: an SRS of bottles from each mould.
- Use a systematic sample with an interval that does not follow the rotation, for example k = 7, which reaches all 8 moulds.

| Point | What earns it |
|---|---|
| 1 | k = 15, random start from 1 to 15, then every 15th receipt |
| 1 | Receipts 9, 24, 39 and 594 |
| 1 | Explains that every sampled bottle comes from one mould because the interval matches the 8-mould rotation |
| 1 | Gives a valid alternative random plan **and** says why it includes bottles from every mould (or from all moulds by chance) |

Point 3 needs the link to the repeating pattern, not just "systematic samples can be biased".
</details>

## Question 7 (constructed response · stretch)

The fictional island of Kestra has 1,800 households in 20 villages, about 90 households per village. The council has a list of every household and its main occupation: 1,080 are fishing households and 720 are farming households. Every village contains both types. The council wants to estimate the proportion of households with reliable internet access.

(a) Describe how to select a stratified random sample of 90 households, using occupation as the strata, with each stratum sampled in proportion to its size.
(b) Describe how to select a cluster random sample using the villages.
(c) Interviewers must travel between villages by boat, which is expensive. The council believes internet access is about the same in every village. Which of the two methods should it use? Justify your answer.
(d) Explain why the cluster sample in (b) is not a simple random sample.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Fishing households are 1,080 ÷ 1,800 = 0.6 of the island, so take 0.6 × 90 = **54** fishing households; farming households are 0.4, so take **36**. Number the fishing households 1 to 1,080 and use a random number generator to choose 54 different numbers. Number the farming households 1 to 720 and choose 36 different numbers in the same way. Combine the 90 households into one sample.

**(b)** Number the villages 1 to 20. Use a random number generator to choose, for example, 2 different villages. Survey **every** household in the chosen villages (about 180 households).

**(c)** **The cluster sample.** The villages are similar in internet access and each contains both types of household, so each village is like a small copy of the island and a few whole villages should represent it well. It is also much cheaper: interviewers visit only 2 villages, while the stratified sample would probably need boat trips to most of the 20.

**(d)** In an SRS every possible set of households of that size is equally likely. In the cluster sample, a set made of households from many different villages can never be chosen, because only whole villages are selected.

| Point | What earns it |
|---|---|
| 1 | Stratified: 54 fishing and 36 farming, with an SRS described **within** each stratum and the results combined |
| 1 | Cluster: SRS of villages, then **all** households in the chosen villages |
| 1 | Chooses cluster **and** justifies it with both cost/travel and villages being similar to each other (mirroring the island) |
| 1 | Explains that some samples (households from many villages) are impossible, so not every sample is equally likely |

No point 1 if the villages are used as strata; no point 2 if only some households in each chosen village are surveyed. Any number of villages is fine in (b).
</details>

## How did you do?

- **Q1 or Q7(b) wrong:** re-read "Cluster random sample" and the "Strata versus clusters" table in the [study guide](/advanced-course-resources/statistics/1-11-random-sampling-study-guide/).
- **Q2 or Q7(d) wrong:** revisit "Simple random sample (SRS)", especially what "every sample of size n" means.
- **Q3 wrong:** revisit "Stratified random sample" and "Choosing a method".
- **Q4 wrong:** revisit "Sampling without replacement and with replacement".
- **Q5 wrong:** work through Worked example 1 again: labels, tool, repeats, stopping rule.
- **Q6 wrong:** revisit "Systematic random sample", especially the warning about repeating patterns.
- **Q7(c) incomplete:** use this population and this question. See Worked example 2.

Then tick off the [topic checklist](/advanced-course-resources/statistics/1-11-random-sampling-checklist/).
