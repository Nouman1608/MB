---
resourceId: "mb-ap-csp-3.16-practice"
title: "Simulations: Practice Questions (Computer Science Principles 3.16)"
description: "Ten original Marlbridge practice questions on simulations: purposes, abstraction, bias, random variability, tracing a small simulation and evaluating a model, with explanations and a suggested rubric."
course: "computer-science-principles"
unit: 3
topics: ["3.16"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csp-3.16-study-guide"]
learningObjectives:
  - "Explain what a simulation is and when it is most useful"
  - "Describe how abstraction (removing detail) shapes a simulation"
  - "Explain how random numbers represent real-world variability"
  - "Explain why each wrong option is wrong, not only why the right one is right"
skills: ["1"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.16-study-guide", "mb-ap-csp-3.16-revision-notes", "mb-ap-csp-3.16-checklist"]
next: "mb-ap-csp-3.16-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "10 original questions: multiple choice, multiple select and constructed response."
  - "Every answer explains why each wrong option fails."
  - "Constructed-response answers come with a suggested Marlbridge rubric."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. The code is Marlbridge's rendering of the exam reference notation (`←` assignment, `=` equality test, lists start at index 1, `DISPLAY` shows a value). Mark points are a **suggested Marlbridge rubric**, not an official scoring guideline. No calculator is needed or allowed. Try each question before opening its answer.

## Question 1 (multiple choice · foundation)

Which statement best describes a simulation?

- (A) An abstraction of a more complex object or phenomenon, built for a specific purpose.
- (B) An exact copy of a real object that includes every detail.
- (C) A list of data collected from the real world.
- (D) A program that always gives the same output.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A simulation simplifies reality for a purpose.

- (B) A simulation removes details.
- (C) Collected data is not a model.
- (D) Simulations often use random values.

</details>

## Question 2 (multiple choice · core)

For which situation is a simulation most useful?

- (A) Reading a list of names aloud.
- (B) Testing how a new bridge design responds to extreme storms.
- (C) Checking the spelling of one word.
- (D) Adding two small numbers.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Real storms are dangerous, rare and expensive to reproduce, so simulating is the practical choice.

- (A), (C) and (D) are simple tasks with no need for a model.

</details>

## Question 3 (multiple choice · core)

A designer builds a simulation of airport security queues that ignores bags. Which statement about this choice is correct?

- (A) The designer has made an error because simulations must include all details.
- (B) The omission has no possible effect on the results.
- (C) The designer has simplified the model by removing a detail, which may affect how realistic it is.
- (D) The simulation will not run without a model of bags.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Abstraction means removing details. Whether the omission matters depends on the question.

- (A) Simulations are always simplified.
- (B) It could change screening time.
- (D) A simulation can run with a simplified model.

</details>

## Question 4 (multiple choice · core)

Why would a programmer use random numbers in a simulation of customers arriving at a shop?

- (A) To make the program run faster.
- (B) To remove the need for a model.
- (C) To represent the variability of real arrival times.
- (D) To make the results exactly the same each time.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Random numbers imitate real-world variability.

- (A) Randomness does not speed a program.
- (B) A model is still needed.
- (D) Randomness makes results vary.

</details>

## Question 5 (multiple choice · core)

A flight simulator for pilot training omits strong cross-winds. Which is the most likely effect?

- (A) The simulator will become more accurate.
- (B) Trainees will find real flying easier than the simulator.
- (C) The simulator will not run.
- (D) Trainees may find the real aircraft harder to handle in wind than the simulator suggests.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The omitted detail makes the simulator easier than the real situation: a bias.

- (A) and (C) do not follow from the omission.
- (B) reverses the effect.

</details>

## Question 6 (multiple choice · core)

Assume the three calls to `RANDOM(1, 6)` return 4, 6 and 2, in that order. What is displayed?

```text
total ← 0
sixes ← 0
REPEAT 3 TIMES
{
  roll ← RANDOM(1, 6)
  total ← total + roll
  IF(roll = 6)
  {
    sixes ← sixes + 1
  }
}
DISPLAY(total)
DISPLAY(sixes)
```

- (A) 12 1
- (B) 12 0
- (C) 12 3
- (D) 6 1

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `total` is 4 + 6 + 2 = 12. Only the 6 counts as a six, so `sixes` is 1.

- (B) misses the six.
- (C) counts every roll as a six.
- (D) displays the largest roll as the total.

</details>

## Question 7 (multiple choice · core)

Which is **not** a reason to use a simulation?

- (A) The real event is too dangerous to try.
- (B) The real event is easy to repeat many times and cheap to measure exactly.
- (C) The real event is too expensive to repeat.
- (D) The real event is too slow to observe.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** When real measurement is easy and cheap, a real experiment is usually better.

- (A), (C) and (D) are the classic reasons.

</details>

## Question 8 (multiple select, choose two · core)

Which **two** situations are best suited to simulation?

- (A) Testing how a building responds to an earthquake
- (B) Writing your name on a form
- (C) Adding 4 and 5
- (D) Predicting the spread of an infection through a large city
- (E) Counting the pencils on your desk

<details>
<summary>Answer and explanation</summary>

**Answers: (A) and (D).** Both are too large, dangerous or costly to experiment on directly.

- (B), (C) and (E) are simple and directly observable.

</details>

## Question 9 (constructed response · core)

A fictional bus company simulates one route to decide how many buses it needs. The model assumes that traffic is always light, that every passenger boards in exactly 5 seconds, and that no bus ever breaks down. (a) State two ways the simulation is an abstraction. (b) Explain how two of these simplifications could bias the results. (c) Suggest one way to check the simulation against the real world.

<details>
<summary>Answer and explanation</summary>

(a) It removes specific details of the real route, such as varying traffic and breakdowns, and it simplifies functionality by using one fixed boarding time for every passenger.

(b) Assuming light traffic makes the simulated journeys faster than real ones, so the simulation may suggest fewer buses are needed than the route really requires. Assuming no breakdowns means real capacity is lower than modelled at times, again biasing the result toward needing fewer buses.

(c) Record real journey times and passenger counts on several days and compare them with the simulation's output for the same conditions. If they differ, adjust the model (for example, add random traffic delays) and re-test.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| (a) Identifies at least one removed or simplified detail | 1 |
| (a) Identifies a second simplification | 1 |
| (b) Links an omitted detail to a direction of bias with reasoning | 1 |
| (b) A second correct link between detail and effect | 1 |
| (c) A sensible comparison with real data | 1 |

</details>

## Question 10 (constructed response · core)

A basketball player scores 60% of free throws. (a) Write a simulation that uses `RANDOM(1, 10)` to model 10 free throws and displays how many are scored. (b) Suppose the ten calls return 3, 8, 6, 7, 1, 10, 5, 2, 9, 4 in order. State what is displayed. (c) Explain why running the program several times gives different counts, and what that tells us about one run.

<details>
<summary>Answer and explanation</summary>

(a) One correct answer:

```text
scored ← 0
REPEAT 10 TIMES
{
  IF(RANDOM(1, 10) ≤ 6)
  {
    scored ← scored + 1
  }
}
DISPLAY(scored)
```

Six of the ten equally likely values (1 to 6) count as a score, a 60% chance.

(b) The values at most 6 are 3, 6, 1, 5, 2 and 4, which is 6 throws. `6` is displayed.

(c) Each run uses a new set of random values, so the count varies from run to run. One run is only one possible outcome; running many times shows the typical result (about 6) and its variation.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| (a) Counter initialised and a loop of 10 throws | 1 |
| (a) Condition `RANDOM(1, 10) ≤ 6` (or equivalent 60%) | 1 |
| (a) Increments the counter and displays it | 1 |
| (b) 6 | 1 |
| (c) Explains that random values differ between runs and one run is one outcome | 1 |

</details>

## How did you do?

Count the questions you got right first time, then read the explanation for every one you missed, including the wrong options you rejected correctly, because the distractors show you the typical slips. Anything you missed twice goes onto your revision list for the [revision notes](/advanced-course-resources/computer-science-principles/3-16-simulations-revision-notes/); re-read the matching section of the [study guide](/advanced-course-resources/computer-science-principles/3-16-simulations-study-guide/) before trying again.
