---
resourceId: "mb-ap-stats-1.2-practice"
title: "Variables: Practice Questions (Statistics 1.2)"
description: "Seven original Marlbridge practice questions on observational units, variable types, discrete and continuous data, and parameters versus statistics, with full solutions and rubrics."
course: "statistics"
unit: 1
topics: ["1.2"]
resourceType: "practice-questions"
prerequisites:
  - "The meaning of population and sample"
prerequisiteResources: ["mb-ap-stats-1.2-study-guide"]
learningObjectives:
  - "Identify the observational units, population and sample in an unfamiliar study"
  - "Classify variables as categorical, discrete quantitative or continuous quantitative, with a reason"
  - "Decide whether a summary is a parameter or a statistic and explain why a statistic varies from sample to sample"
  - "Correct common errors in classifying variables"
skills: ["2"]
studyMinutes: 40
difficulty: "mixed"
calculator: "none-needed"
calculatorNote: "Only one mean and one proportion need calculating (Question 6). Any calculator will do."
related: ["mb-ap-stats-1.2-study-guide", "mb-ap-stats-1.2-revision-notes", "mb-ap-stats-1.2-checklist"]
next: "mb-ap-stats-1.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written answers."
  - "Every classification needs a reason, not just a label."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All studies, places and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: "random sample" means the units were chosen at random from the population named; a variable is classified by what the characteristic is, not by how its values happen to be displayed.

## Question 1 (multiple choice · foundation)

A courier company records four variables for each of 50 parcels delivered on one day. Which variable is **categorical**?

- (A) Mass of the parcel, in kilograms
- (B) Number of items packed inside the parcel
- (C) Delivery postcode district, recorded as a two-digit number such as 14, 22 or 37
- (D) Time from dispatch to delivery, in hours

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The district numbers are labels for areas. Adding or averaging them gives a meaningless result ("the mean district is 24.3"), so the variable is categorical even though it is written with digits.

- (A) is a measured amount with units (kg), so it is quantitative (continuous).
- (B) is a count of items, so it is quantitative (discrete).
- (D) is a measured amount of time with units (hours), so it is quantitative (continuous).
</details>

## Question 2 (multiple choice · core)

A fictional basketball league has 412 registered players. The league office measured every player and reports that their mean height is 183.4 cm. A coach measures 25 players chosen at random from the league and finds that their mean height is 181.9 cm. Which statement is correct?

- (A) 183.4 cm is a statistic and 181.9 cm is a parameter.
- (B) 183.4 cm is a parameter and 181.9 cm is a statistic.
- (C) Both values are parameters, because both describe players in the league.
- (D) Both values are statistics, because both are means.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The 183.4 cm summarises all 412 players, the whole population, so it is a parameter. The 181.9 cm summarises only the 25 sampled players, so it is a statistic. The 1.5 cm difference is ordinary sample-to-sample variation, not an error.

- (A) reverses the definitions. Population goes with parameter; sample goes with statistic.
- (C) ignores that the coach measured only 25 of the 412 players.
- (D) assumes the type of summary decides the answer. A mean can be either; what matters is whether it comes from the population or a sample.
</details>

## Question 3 (multiple choice · core)

A wildlife team chooses 120 photos at random from the 5,600 photos taken last year by camera traps in a fictional nature reserve. For each chosen photo they record the species of the largest animal shown, the number of animals in the photo, and the air temperature printed in the corner of the photo. What are the **observational units** in this study?

- (A) The 120 photos
- (B) The animals that appear in the photos
- (C) The species recorded
- (D) The camera traps

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Each recorded value (species, number of animals, temperature) describes one photo. So one row of the data set is one photo, and the observational units are the 120 photos.

- (B) cannot be right: "number of animals in the photo" is a single value for each photo, and a photo may show several animals or none.
- (C) confuses a variable's values with the units. "Species" is a categorical variable recorded for each photo.
- (D) is the equipment that took the photos. One trap can take many photos, and the data are recorded per photo, not per trap.
</details>

## Question 4 (multiple choice · core)

A fictional gym surveys its members. Which of these variables is **discrete quantitative**?

- (A) Membership type (basic, standard or premium)
- (B) Number of fitness classes attended last month
- (C) Time spent on the treadmill on the member's last visit, in minutes
- (D) Membership card number

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The number of classes is a count. It can only be 0, 1, 2, …, so its values are countable: it is discrete quantitative.

- (A) has category names as values, so it is categorical.
- (C) is a measured time. It can take any value in an interval (for example 23.4 or 23.45 minutes), so it is continuous, even if the treadmill display rounds it.
- (D) is an identification label. Its values are numbers, but arithmetic on them means nothing, so it is categorical.
</details>

## Question 5 (constructed response · core)

A marine-biology club studies a fictional stretch of coastline with about 2,000 rock pools. The club chooses 80 pools at random. At each chosen pool a member takes one photograph and records:

- water temperature (°C)
- number of crabs visible in the photograph
- main colour of seaweed in the pool (green, brown or red)
- greatest depth of the pool (cm)
- the pool's map reference code (for example, 0417)

(a) Identify the observational units, the population and the sample.
(b) Classify each of the five variables as categorical, discrete quantitative or continuous quantitative. Give a reason for each.
(c) The club reports that "the mean water temperature was 14.2 °C". Is 14.2 °C a parameter or a statistic? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Each set of measurements describes one rock pool, so the **observational units are rock pools**. The **population** is all (about 2,000) rock pools on this stretch of coastline. The **sample** is the 80 pools chosen at random.

**(b)**

| Variable | Type | Reason |
|---|---|---|
| Water temperature | continuous quantitative | a measured amount in °C; can take any value in an interval |
| Number of crabs visible | discrete quantitative | a count: 0, 1, 2, … |
| Main seaweed colour | categorical | values are colour names |
| Greatest depth | continuous quantitative | a measured length in cm; any value in an interval |
| Map reference code | categorical | the digits are a label; a mean code would mean nothing |

**(c)** It is a **statistic**. It was calculated from the 80 sampled pools only, not from all the pools on the coastline. The mean temperature of all the pools (the parameter) is unknown.

| Point | What earns it |
|---|---|
| 1 | Units are rock pools, **and** population (all pools on the coastline) and sample (the 80 chosen pools) both correct |
| 1 | Temperature and depth continuous, crabs discrete, each with a reason (measured on a scale / counted) |
| 1 | Seaweed colour and map code both categorical, with a reason that says the code is a label |
| 1 | Statistic, justified by the value coming from the sample of 80, not the whole population |

Do not award point 1 for "the units are crabs" or "the units are photos": the photo is the source of one variable, but every variable describes a pool. Do not award point 3 if the map code is called quantitative because it is a number.
</details>

## Question 6 (constructed response · core)

A fictional bakery chain, Crumbwell, has 1,500 loyalty-card members. Its database shows that the mean number of visits last month for **all** 1,500 members was 3.4. A manager chooses 10 members at random and records, for each, the number of visits last month and whether they bought bread at any time last month.

| Member | A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|---|
| Visits last month | 2 | 5 | 0 | 3 | 4 | 1 | 6 | 3 | 2 | 4 |
| Bought bread? | Yes | Yes | No | Yes | Yes | No | Yes | Yes | No | Yes |

(a) Calculate the mean number of visits for the sample, and the proportion of sampled members who bought bread.
(b) For 3.4 and for each of your answers to (a), state whether it is a parameter or a statistic.
(c) The manager says: "Our sample mean is not 3.4, so we must have made an arithmetic error or chosen the sample badly." Explain why this is not necessarily true.
(d) Describe, in context, the parameter that your proportion in (a) estimates.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Sum of visits = 2 + 5 + 0 + 3 + 4 + 1 + 6 + 3 + 2 + 4 = 30. Mean = 30 ÷ 10 = **3.0 visits**. Seven of the 10 members bought bread, so the proportion is 7 ÷ 10 = **0.7**.

**(b)** 3.4 visits uses all 1,500 members: a **parameter**. The mean of 3.0 visits and the proportion 0.7 come from the 10 sampled members: both are **statistics**.

**(c)** A statistic is usually not equal to the parameter. A random sample of 10 contains only some members, and a different sample of 10 would give a different mean. A difference of 0.4 visits is the kind of variation expected from one sample to another, so it does not on its own show a mistake or a bad sample.

**(d)** The proportion of **all 1,500** Crumbwell loyalty-card members who bought bread at any time last month.

| Point | What earns it |
|---|---|
| 1 | Mean = 3.0 visits **and** proportion = 0.7, with the working shown |
| 1 | 3.4 identified as a parameter and both sample values as statistics |
| 1 | Explains that statistics vary from sample to sample, so a statistic is usually not equal to the parameter |
| 1 | Parameter described as a proportion of all 1,500 members, with the bread variable named |

A mean of 3.33 (dividing 30 by 9) does not earn point 1. In (c), "the sample is too small" alone does not earn the point; the answer must say that different samples give different values.
</details>

## Question 7 (explanation · stretch)

An athletics club records data on its 60 sprinters. A student makes four claims. For each one, say whether it is correct and explain.

(a) "Each sprinter's vest number is quantitative, because it is a number."
(b) "The number of races each sprinter has won is continuous, because there is no upper limit to it."
(c) "Each sprinter's best 100 m time is discrete, because the electronic timer only shows times to 0.01 s."
(d) "The club could record a characteristic about speed as a categorical variable instead of a quantitative one." Give an example that shows whether this is possible.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a) Incorrect.** A vest number is a label that identifies a sprinter. The mean vest number would mean nothing, so the variable is **categorical**.

**(b) Incorrect.** The number of races won is a count: 0, 1, 2, … Even with no fixed maximum, the possible values can be listed one by one, so they are countable. The variable is **discrete** quantitative.

**(c) Incorrect.** A time can take any value in an interval; the timer only rounds it to two decimal places. The characteristic is continuous, so the variable is **continuous** quantitative.

**(d) Correct.** For example, the club could record whether each sprinter's best 100 m time is "under 12 s" or "12 s or more". The values are now group labels, so this new variable is categorical, even though it describes the same characteristic as the times.

| Point | What earns it |
|---|---|
| 1 | (a) categorical, because the number is a label (arithmetic on it is meaningless) |
| 1 | (b) discrete, because counts are countable even with no maximum |
| 1 | (c) continuous, because rounding by the instrument does not change the characteristic |
| 1 | (d) a valid example that turns a measured quantity into groups, with the new type named |

Accept any sensible grouping in (d), for example "fast / medium / slow" with stated cut-offs.
</details>

## How did you do?

- **Q1, Q4 or Q7(a) wrong:** re-read "Categorical and quantitative variables" in the [study guide](/advanced-course-resources/statistics/1-2-variables-study-guide/). A number used as a label is categorical.
- **Q2 or Q6(b)–(d) wrong:** revisit "Parameters and statistics" and Worked example 2.
- **Q3 or Q5(a) wrong:** revisit "Observational units: who or what the data describe". Ask "one row describes one what?"
- **Q4, Q5(b), Q7(b) or Q7(c) wrong:** revisit "Discrete and continuous quantitative variables" and Figure 1.
- **Q6(c) incomplete:** an explanation must say that different random samples give different statistics.

Then tick off the [topic checklist](/advanced-course-resources/statistics/1-2-variables-checklist/).
