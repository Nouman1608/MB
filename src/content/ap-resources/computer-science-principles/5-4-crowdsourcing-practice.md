---
resourceId: "mb-ap-csp-5.4-practice"
title: "Crowdsourcing: Practice Questions (Computer Science Principles 5.4)"
description: "Ten original practice questions on crowdsourcing, citizen science, public data, data quality and participation, with full explanations and suggested rubrics."
course: "computer-science-principles"
unit: 5
topics: ["5.4"]
resourceType: "practice-questions"
prerequisites: 
  - "Topic 2.3 (cleaning data and bias in data sources)"
prerequisiteResources: ["mb-ap-csp-5.4-study-guide"]
learningObjectives: 
  - "Apply crowdsourcing to unfamiliar situations"
  - "Explain your reasoning in full sentences, as constructed responses require"
skills: ["1", "5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-5.4-study-guide", "mb-ap-csp-5.4-revision-notes", "mb-ap-csp-5.4-checklist"]
next: "mb-ap-csp-5.4-checklist"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Original questions with fictional scenarios and Marlbridge-rendered pseudocode where code appears."
  - "Every answer explains why each wrong option is wrong."
  - "Rubrics are a suggested Marlbridge rubric, not official scoring."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All projects, places and numbers are fictional. The rubrics are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is needed.

## Question 1 (multiple choice · foundation)

Which best defines **crowdsourcing**?

- (A) Obtaining input or information from a large number of people via the Internet
- (B) Storing data on one very large computer
- (C) Compressing a file so it uses fewer bits
- (D) Writing a program with no input

<details>
<summary>Answer and explanation</summary>

**Answer: (A).**

- (B), (C) and (D) describe other ideas.
</details>

## Question 2 (multiple choice · foundation)

A fictional project asks volunteers to photograph a rare flower with their own phones and upload the picture with its location. Researchers use the data to map where the flower grows. This is an example of

- (A) citizen science
- (B) overflow
- (C) lossless compression
- (D) a fault-tolerant network

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Distributed volunteers, many not scientists, contribute data using their own devices.

- (B), (C) and (D) are unrelated.
</details>

## Question 3 (multiple choice · core)

A fictional charity lets many people each give a small amount of money online to fund a community garden. This is best described as

- (A) a new model of collaboration that connects a social cause with funding
- (B) a syntax error
- (C) parallel computing
- (D) a digital divide

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Crowdsourcing can connect social causes with funding.

- (B), (C) and (D) do not describe it.
</details>

## Question 4 (multiple choice · core)

A traffic app accepts reports of accidents from drivers. To reduce false reports it only displays an accident when at least 4 different drivers report it. Which is a possible **drawback**?

- (A) A real accident in a quiet area may never reach 4 reports, so it is not displayed.
- (B) The app will run faster.
- (C) The rule increases the number of false reports.
- (D) The reports will become lossless.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A high threshold guards against false reports but can miss real events in places with few users.

- (B) and (D) are not effects of the rule.
- (C) the rule is meant to reduce false reports.
</details>

## Question 5 (multiple choice, select two · core)

Which **two** are challenges of crowdsourced data?

- (A) The quality of contributions can vary.
- (B) Contributors are always spread equally across every area.
- (C) Participation may be uneven, so some groups or places are under-represented.
- (D) Crowdsourced data never need checking.

<details>
<summary>Answer and explanation</summary>

**Answer: (A) and (C).**

- (B) participation is usually uneven.
- (D) data usually need checking and cleaning.
</details>

## Question 6 (multiple choice · core)

A fictional astronomy project has 5,000 volunteers who each classify 20 images of galaxies. Which statement best explains why the project uses volunteers?

- (A) A very large group working at the same time can examine far more images than a few experts can in the same time.
- (B) Volunteers are always more accurate than experts.
- (C) Computers cannot be used on images.
- (D) Volunteers do not need an Internet connection.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** 5,000 × 20 = 100,000 classifications; scale is the main advantage.

- (B) is unsupported.
- (C) computers are used to deliver the images.
- (D) volunteers use the Internet.
</details>

## Question 7 (multiple choice · stretch)

Read this passage written by Marlbridge.

*"A fictional city asks residents to use an app to report noise problems. Last month 900 reports came from the busy downtown area and 30 from the outer suburbs. A councillor says: 'The suburbs are quiet, so we do not need to check noise there.'"*

Which reply is **best**?

- (A) The conclusion may not follow, because few reports could reflect fewer app users or lower awareness in the suburbs rather than less noise.
- (B) The councillor is correct, because fewer reports always means less noise.
- (C) The data are lossless.
- (D) Reports cannot be used for any purpose.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Counts depend on who takes part as well as on what is happening.

- (B) overstates what the data show.
- (C) unrelated.
- (D) the reports are useful, but must be interpreted with care.
</details>

## Question 8 (constructed response · core)

A fictional app collects 1,000 reports of broken benches in a town. 600 come from the town centre, 300 from the east and 100 from the west. The share of the town's benches in each area is 30% centre, 30% east and 40% west.

(a) Calculate each area's share of the reports. (3 points)

(b) Say what the comparison with the benches' shares suggests. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | gives centre 600 ÷ 1000 = 60% |
| 2 | gives east 30% |
| 3 | gives west 10% (and shares add to 100%) |
| 4 | says the centre is over-represented (60% of reports from 30% of benches) and the west under-represented (10% of reports from 40% of benches) |
| 5 | says the data may not reflect where benches are broken, so the town should check the west directly or encourage reporting there |

**Sample response.** (a) Centre 60%, east 30%, west 10%. (b) The centre has twice its share of reports and the west has only a quarter of its share, so the west may be under-reported, and the town should inspect there directly.
</details>

## Question 9 (constructed response · core)

A fictional wildlife organisation wants the public to report fox sightings through a website.

(a) Explain **two** benefits of using crowdsourcing for this task. (2 points)

(b) Describe **two** steps the organisation could take to improve the reliability of the reports. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (4 points).**

| Point | Award when the response… |
|---|---|
| 1 | gives a first benefit (many people in many places can report, more than a small team could cover) |
| 2 | gives a second benefit (low cost; quick reports; includes places experts rarely visit) |
| 3 | gives a first reliability step (ask for a photo, or a location and time) |
| 4 | gives a second step (require several reports before confirming; have an expert review unusual reports) |

**Sample response.** (a) Many people across the country can report, which covers far more places than the staff could; it is also cheap and quick. (b) Ask for a photo and location with each report, and have an expert check any sighting reported in an area where foxes are not expected.
</details>

## Question 10 (constructed response · stretch)

A fictional university runs a citizen-science project in which volunteers use a phone app to record the noise level where they live. After a year, the project has data from 20,000 volunteers, mostly students and staff living close to the campus.

(a) Explain **one** strength and **one** limitation of the data. (2 points)

(b) Explain how the digital divide could affect who takes part. (1 point)

(c) Suggest one change to improve how well the data represent the whole region. (1 point)

(d) State one privacy concern for volunteers. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | gives a strength (a large amount of data from many locations and times, collected cheaply) |
| 2 | gives a limitation (most data come from near campus, so the region is not represented) |
| 3 | says people without a smartphone, data plan or time may be less able to take part |
| 4 | suggests a change (recruit volunteers in other areas, lend sensors, partner with local groups) |
| 5 | gives a privacy concern (location data can show where volunteers live and when they are at home) |

**Sample response.** (a) Strength: 20,000 volunteers give lots of data. Limitation: nearly all the data come from near campus, so other districts are missing. (b) People without a smartphone or data plan cannot take part. (c) Recruit volunteers through community groups in other districts. (d) The location of each recording could reveal where a volunteer lives.
</details>

## How did you do?

Questions 1 to 7 are multiple choice; 8 to 10 are written. If you lost marks on Question 8, check that you compared each area's share of **reports** with its share of **benches**. Re-read "Challenges and limits" in the [study guide](/advanced-course-resources/computer-science-principles/5-4-crowdsourcing-study-guide/) if needed, then use the [checklist](/advanced-course-resources/computer-science-principles/5-4-crowdsourcing-checklist/).
