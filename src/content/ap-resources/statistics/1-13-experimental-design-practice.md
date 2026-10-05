---
resourceId: "mb-ap-stats-1.13-practice"
title: "Experimental Design: Practice Questions (Statistics 1.13)"
description: "Seven original Marlbridge practice questions on the principles of experimental design, placebos, blinding, random assignment, block and matched pairs designs and conclusions, with suggested rubrics."
course: "statistics"
unit: 1
topics: ["1.13"]
resourceType: "practice-questions"
prerequisites:
  - "Experimental units, treatments and response variables (Topic 1.10)"
prerequisiteResources: ["mb-ap-stats-1.13-study-guide"]
learningObjectives:
  - "Identify the elements of a well-designed experiment and the role of random assignment"
  - "Recognise single- and double-blind experiments and calculate a placebo effect"
  - "Describe a completely randomized design and a randomized block design in full"
  - "Justify a design choice and the scope of a conclusion in context"
skills: ["2"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Only simple arithmetic is needed. Describe any random assignment so that someone else could carry it out."
related: ["mb-ap-stats-1.13-study-guide", "mb-ap-stats-1.13-revision-notes", "mb-ap-stats-1.13-checklist"]
next: "mb-ap-stats-1.13-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written answers."
  - "Every design description must be specific enough for someone else to carry out."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All studies, products and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: "random number generator" means any calculator or software function that picks integers at random; a description of random assignment should say how units are labelled, how labels are chosen, how repeats are handled and which labels get which treatment.

## Question 1 (multiple choice · foundation)

Amira wants to know whether a liquid plant food makes basil plants grow taller. She takes two similar basil plants and flips a coin to decide which one gets the plant food; the other gets plain water. Both plants sit on the same windowsill and get the same amount of liquid each day. After three weeks she measures their heights.

Which principle of a well-designed experiment is most clearly missing?

- (A) Comparison of treatments
- (B) Random assignment
- (C) Replication
- (D) Direct control

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Each treatment is given to only one plant. With one plant per treatment, Amira cannot tell whether a difference in height comes from the plant food or from natural differences between two plants. She needs several plants for each treatment.

- (A) is present: plant food is compared with plain water.
- (B) is present: the coin flip decides which plant gets which treatment.
- (D) is present: the windowsill and the amount of liquid are kept the same for both plants.
</details>

## Question 2 (multiple choice · core)

What is the main purpose of randomly assigning treatments to experimental units?

- (A) To make sure the results can be generalised to everyone in the population
- (B) To create treatment groups that are roughly similar on extraneous variables, so that differences in the response can be attributed to the treatments
- (C) To prevent participants from knowing which treatment they receive
- (D) To remove all variation in the response variable

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Chance spreads extraneous variables, known and unknown, roughly evenly across the groups. This reduces confounding, which is what allows a cause-and-effect conclusion.

- (A) describes random **selection** of units from a population, not random assignment.
- (C) describes **blinding**.
- (D) is impossible: units still differ naturally. Random assignment balances the variation across groups; it does not remove it.
</details>

## Question 3 (multiple choice · core)

In a fictional trial of two eye drops for dry eyes, each patient receives a bottle marked only with a code, and the two drops look identical. The nurse who puts in the drops and later scores each patient's eye redness has a list showing which code is which drop. Which description fits this experiment?

- (A) Double-blind, because the bottles are coded
- (B) Single-blind, because the patients do not know their treatment but the nurse does
- (C) Not blind at all, because someone knows the treatments
- (D) Double-blind, because there are two treatments

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The patients cannot tell which drop they have, but the nurse who interacts with them and measures the response knows. Only one side is blinded.

- (A) The coding hides the treatment from the patients only; the nurse has the list, so it is not double-blind.
- (C) In any experiment someone must know the treatments (for example, the person who prepared the codes). Blinding is about the participants and the researchers who interact with them.
- (D) "Double" refers to two groups of **people** being unaware (participants and researchers), not to the number of treatments.
</details>

## Question 4 (multiple choice · core)

Volunteers with sore leg muscles were randomly assigned to three groups. The mean reductions in pain, on a 0–10 scale, were:

| Treatment | Mean reduction in pain |
|---|---|
| New cream | 3.1 |
| Placebo cream (no active ingredient) | 1.8 |
| No cream | 0.6 |

What is the estimated placebo effect?

- (A) 1.2 points
- (B) 1.3 points
- (C) 1.8 points
- (D) 2.5 points

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The placebo effect is the mean response to the placebo minus the mean response to no treatment: 1.8 − 0.6 = 1.2 points.

- (B) is 3.1 − 1.8, the effect of the new cream **beyond** the placebo.
- (C) is the placebo group's mean on its own, with no comparison to the no-treatment group.
- (D) is 3.1 − 0.6, the new cream compared with no cream, which mixes the cream's effect with the placebo effect.
</details>

## Question 5 (constructed response · core)

A language school has 48 adult volunteers who want to learn basic Portuguese. It wants to compare two ways of learning vocabulary: paper flashcards and a spaced-repetition app. After three weeks, each learner takes the same 50-word vocabulary test.

(a) Identify the experimental units, the explanatory variable, the treatments and the response variable.
(b) Describe how to carry out a completely randomized design with equal group sizes.
(c) Name two variables the school should directly control, and say why.
(d) Explain why using 24 learners per treatment is better than using 1 learner per treatment.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Units: the 48 adult volunteers. Explanatory variable: vocabulary method. Treatments: paper flashcards, spaced-repetition app. Response: score on the 50-word test.

**(b)** Label the learners 1 to 48. Use a random number generator to choose integers from 1 to 48, ignoring repeats, until 24 different labels have been chosen. Those 24 learners use paper flashcards; the other 24 use the app. Compare the two groups' test scores.

**(c)** For example: the same list of words to learn (so both groups have equally hard material), the same daily study time (so one group does not simply practise more), and the same test conditions (same room, same time limit). Any two sensible variables that could affect the score, with a reason, are acceptable.

**(d)** Learners differ in memory, prior knowledge and motivation. With one learner per treatment, a difference in scores could just be a difference between two people. With 24 per group, these individual differences tend to balance out, and you can see how much scores vary within each method, so a real difference between methods is easier to detect.

| Point | What earns it |
|---|---|
| 1 | All four of units, explanatory variable, treatments and response correctly identified in context |
| 1 | Random assignment described fully: labels, random generator, repeats ignored, 24 to each named treatment |
| 1 | Two appropriate variables to control, each linked to the response |
| 1 | Replication explained: one unit per treatment confuses treatment differences with natural differences between individuals |

Slips of paper (24 marked "cards" and 24 marked "app", mixed and drawn without replacement) also earn point 2. "Randomly split the learners into two groups" with no method does not.
</details>

## Question 6 (constructed response · stretch)

A greenhouse tests two fertilisers, F and G, on pepper plants. There are 20 plants: 10 of a fictional variety called Red Star and 10 of a fictional variety called Sunbell. Red Star plants usually yield much more fruit than Sunbell plants.

(a) Explain why a randomized block design, blocking by variety, is better here than a completely randomized design.
(b) Describe how to carry out the randomized block design.
(c) The mean yields per plant (kg) were:

| Variety | Fertiliser F | Fertiliser G |
|---|---|---|
| Red Star | 2.4 | 2.1 |
| Sunbell | 1.3 | 1.0 |

Compare the fertilisers using the blocks.

(d) Suppose a completely randomized design had, by chance, given fertiliser F to 3 Red Star and 7 Sunbell plants, and fertiliser G to 7 Red Star and 3 Sunbell plants. If each plant yielded the mean for its variety and fertiliser in the table above, what would the overall mean yields for F and G be? What would a researcher wrongly conclude?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Variety strongly affects yield. Blocking by variety puts similar plants together, so each fertiliser is tested on both varieties and the comparison is made within plants of the same variety. This separates the large variation due to variety from the comparison of fertilisers, giving a more precise comparison. In a completely randomized design, one fertiliser could, by chance, get more Red Star plants and look better because of the variety.

**(b)** Block 1 is the 10 Red Star plants; block 2 is the 10 Sunbell plants. In block 1, label the plants 1 to 10 and use a random number generator to choose 5 different labels (ignoring repeats); those plants get F and the other 5 get G. Repeat separately in block 2. Keep watering, temperature and light the same for all plants.

**(c)** In both blocks F gives a higher mean yield than G by the same amount: 2.4 − 2.1 = 0.3 kg for Red Star and 1.3 − 1.0 = 0.3 kg for Sunbell. So F is better by about 0.3 kg per plant for both varieties. The difference between varieties (1.1 kg under each fertiliser) is much larger than the difference between fertilisers, which is why blocking matters.

**(d)** F: (3 × 2.4 + 7 × 1.3) ÷ 10 = (7.2 + 9.1) ÷ 10 = **1.63 kg**. G: (7 × 2.1 + 3 × 1.0) ÷ 10 = (14.7 + 3.0) ÷ 10 = **1.77 kg**. G would appear better by 0.14 kg, the opposite of the truth. Variety would be confounded with fertiliser.

| Point | What earns it |
|---|---|
| 1 | Blocking justified: variety affects yield, so comparing within variety gives a more precise comparison (or prevents an unbalanced split) |
| 1 | Random assignment carried out separately within each block, 5 plants per fertiliser per block, with a method |
| 1 | Within-block comparison: F higher by 0.3 kg in both varieties, in context |
| 1 | Correct means 1.63 kg and 1.77 kg and the conclusion that G would wrongly appear better because variety is confounded with fertiliser |

Do not award point 2 if the fertilisers are assigned to whole blocks (for example, "all Red Star plants get F"). That would confound variety with fertiliser completely.
</details>

## Question 7 (explanation · stretch)

A fictional sunscreen company recruits 30 volunteers at a beach. Each volunteer has sunscreen P put on one forearm and sunscreen Q on the other. A coin flip decides which arm gets P. After two hours in the sun, a technician who does not know which arm got which sunscreen measures the redness of each forearm. Sunscreen P gives less redness on most volunteers.

(a) Name the design and explain why it is a good choice here.
(b) Why should the arm for sunscreen P be chosen by a coin flip rather than always using the left arm?
(c) Can the company conclude that P causes less redness than Q? To whom does the conclusion apply? Explain both answers.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** A **matched pairs design**: each volunteer is a block of two forearms, and each forearm gets one treatment. Skin type and the amount of sun a person gets differ a lot between people and affect redness. Comparing two arms of the same person removes this variation, so the comparison of P and Q is more precise than comparing two separate groups of people.

**(b)** The two arms may not get the same sun exposure. For example, a person might lie on one side, or hold a book that shades one arm. If P always went on the left arm, any advantage of the left arm would be confounded with sunscreen P. The coin flip makes each arm equally likely to get P, so such differences are balanced across the treatments.

**(c)** **Cause and effect: yes.** The treatments were randomly assigned to the arms, which reduces confounding, so less redness can be attributed to sunscreen P (as long as the difference is too large to be just chance; a later unit shows how to test this). **Population: only people similar to these 30 volunteers.** They were not randomly selected (they volunteered at one beach), so the result should not be generalised to all sunscreen users.

| Point | What earns it |
|---|---|
| 1 | Identifies matched pairs (or block) design **and** explains that comparing within a person removes variation between people |
| 1 | Explains that a fixed arm could be confounded with an arm-related difference in sun exposure, and that random assignment balances it |
| 1 | Cause-and-effect conclusion justified by random assignment |
| 1 | Generalisation limited to people like the volunteers, justified by the lack of random selection |

Mentioning that the technician is blind is good practice but does not earn a point by itself.
</details>

## How did you do?

- **Q1 wrong:** re-read "The four principles of a well-designed experiment" in the [study guide](/advanced-course-resources/statistics/1-13-experimental-design-study-guide/).
- **Q2 or Q7(c) wrong:** revisit "Extraneous variables, confounding and random assignment" and "What can you conclude?".
- **Q3 wrong:** revisit "Blinding".
- **Q4 wrong:** revisit "Control groups, placebos and the placebo effect" and Worked example 1.
- **Q5 incomplete:** compare your random assignment with the steps in "How to describe random assignment".
- **Q6 or Q7(a) wrong:** work through Worked examples 2 and 3 again.

Then tick off the [topic checklist](/advanced-course-resources/statistics/1-13-experimental-design-checklist/).
