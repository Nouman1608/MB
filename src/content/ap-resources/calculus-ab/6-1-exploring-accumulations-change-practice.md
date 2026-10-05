---
resourceId: "mb-ap-calcab-6.1-practice"
title: "Exploring Accumulations of Change: Practice Questions (Calculus AB 6.1)"
description: "Seven original Marlbridge practice questions on areas under rate graphs: units, signs, geometry, net change versus total change and interpretation, with full solutions."
course: "calculus-ab"
unit: 6
topics: ["6.1"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Area formulas for triangles, rectangles, trapezoids and circles"
prerequisiteResources: ["mb-ap-calcab-6.1-study-guide"]
learningObjectives:
  - "Find accumulated change from a rate graph using geometry"
  - "Give accumulated change the correct sign and units"
  - "Tell net change apart from total amount of change"
  - "Interpret an area under a rate graph in context and combine it with a starting amount"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Leave answers with π exact, or give three decimal places."
related: ["mb-ap-calcab-6.1-study-guide", "mb-ap-calcab-6.1-revision-notes", "mb-ap-calcab-6.1-checklist"]
next: "mb-ap-calcab-6.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written reasoning."
  - "Shared practice for Calculus AB and Calculus BC students."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**; "area" means the area of the region between the graph and the horizontal axis over the stated interval; all contexts and data are invented. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Sand is poured onto a pile. r(t) is the rate at which sand is added, in kilograms per hour, and t is measured in hours. What are the units of the area between the graph of r and the t-axis from t = 1 to t = 4?

- (A) kilograms
- (B) kilograms per hour
- (C) kilograms per hour per hour
- (D) hours

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The area is (units of the rate) × (units of the input) = (kg/h) × h = kg. It is the mass of sand added between t = 1 and t = 4.

- (B) is the unit of the rate itself. The height of the graph has these units; the area does not.
- (C) divides by hours again. That would be the unit of the rate's derivative, r′(t), not of an area.
- (D) is the unit of the width only. It forgets to multiply by the height.
</details>

## Question 2 (multiple choice · core)

Water flows into a tank at a rate f(t) litres per minute. The graph of f is a straight line from (0, 0) to (4, 12), followed by the horizontal line f = 12 from t = 4 to t = 9. How much water flows into the tank from t = 0 to t = 9?

- (A) 12 litres
- (B) 60 litres
- (C) 84 litres
- (D) 108 litres

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Triangle from 0 to 4: ½ × 4 × 12 = 24. Rectangle from 4 to 9: 5 × 12 = 60. Total 24 + 60 = 84 litres.

- (A) is the rate at t = 9, in litres per minute. A rate at one instant is not an amount.
- (B) is the rectangle only; it leaves out the water that flowed in while the rate was building up.
- (D) treats the rate as 12 for all 9 minutes (12 × 9), or forgets the ½ in the triangle (48 + 60). Both give 108.
</details>

## Question 3 (multiple choice · core)

The temperature of a cold-storage room is 4 °C at t = 0, where t is in hours. R(t), in °C per hour, is the rate of change of the temperature. R(t) < 0 for 0 < t < 5 and R(t) > 0 for 5 < t < 8. The area between the graph of R and the t-axis is 14 on [0, 5] and 9 on [5, 8]. What is the temperature at t = 8?

- (A) −10 °C
- (B) −1 °C
- (C) 9 °C
- (D) 27 °C

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** On [0, 5] the rate is negative, so the temperature falls by 14 °C. On [5, 8] it is positive, so it rises by 9 °C. Temperature: 4 − 14 + 9 = −1 °C.

- (A) stops at t = 5 (4 − 14) and leaves out the warming.
- (C) uses 14 − 9 = 5 with the wrong sign, as if the room warmed overall: 4 + 5.
- (D) adds every area as an increase, ignoring that R is negative on [0, 5].
</details>

## Question 4 (multiple choice · core)

D(t) is the rate at which a new app is downloaded, in thousands of downloads per day, t days after launch. D(t) > 0 for all t. The area between the graph of D and the t-axis from t = 2 to t = 5 is 18. Which statement is true?

- (A) At t = 5, the app has been downloaded 18 thousand times in total.
- (B) Between t = 2 and t = 5, the app was downloaded 18 thousand times.
- (C) At t = 5, the app is being downloaded at a rate of 18 thousand per day.
- (D) Between t = 2 and t = 5, the app was downloaded at an average rate of 18 thousand per day.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The area is the accumulated change in the number of downloads over [2, 5]. Units: (thousand/day) × days = thousand downloads.

- (A) confuses the change with the total. Downloads before t = 2 are not included in the area.
- (C) confuses the area with the height of the graph at one instant.
- (D) forgets to divide by the 3-day width. The average rate is 18 ÷ 3 = 6 thousand per day.
</details>

## Question 5 (graph · core)

A storm-water tank holds 50 m³ of water at t = 0, where t is in hours. R(t), in cubic metres per hour, is the rate of change of the volume of water in the tank. The graph of R, for 0 ≤ t ≤ 10, is made of straight segments joining (0, 0), (2, 40), (4, 40), (6, 0), (7, −30) and (10, −30).

(a) Find the change in the volume of water from t = 0 to t = 6. Give units.
(b) Find the change in volume from t = 6 to t = 10, and explain what it means in context.
(c) Find the volume of water in the tank at t = 10.
(d) At what time in 0 ≤ t ≤ 10 does the tank hold the most water? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Above the axis: triangle ½ × 2 × 40 = 40, rectangle 2 × 40 = 80, triangle ½ × 2 × 40 = 40. Total **160 m³**, an increase. Units: (m³/h) × h = m³.

**(b)** Below the axis: triangle ½ × 1 × 30 = 15, rectangle 3 × 30 = 90. Total size 105, so the change is **−105 m³**. Between t = 6 and t = 10 the volume of water in the tank decreased by 105 m³ (water was pumped or drained out).

**(c)** 50 + 160 − 105 = **105 m³**.

**(d)** At **t = 6**. R(t) ≥ 0 on [0, 6], so the volume never decreases there; R(t) < 0 on (6, 10], so the volume falls after t = 6. The volume at t = 6 is 50 + 160 = 210 m³.

| Point | What earns it |
|---|---|
| 1 | Change of 160 on [0, 6], from correct geometry, with units m³ |
| 1 | −105 m³ on [6, 10] **and** a statement that the volume decreased by 105 m³ between t = 6 and t = 10 |
| 1 | 105 m³ at t = 10, using the starting volume 50 |
| 1 | t = 6, justified by R changing from positive to negative there |
</details>

## Question 6 (constructed response · core)

A phone's battery level B(t) is measured in percentage points, t minutes after 18:00. B(0) = 62. While a video streams, for 0 < t < 50, the battery level changes at a constant −0.4 percentage points per minute. The phone is then plugged in, and for 50 < t < 80 the level changes at a constant +1.5 percentage points per minute.

(a) Describe the graph of the rate of change of B for 0 ≤ t ≤ 80, and the two regions it makes with the t-axis.
(b) Find the net change in the battery level from t = 0 to t = 80.
(c) Find the total amount of change in the battery level over the same interval, and explain why it differs from (b).
(d) Find B(80), and interpret the area of the region between the rate graph and the t-axis from t = 0 to t = 50 in context.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Two horizontal segments: height −0.4 from t = 0 to t = 50 (below the axis), and height 1.5 from t = 50 to t = 80 (above the axis). Each region is a rectangle.

**(b)** Below: 50 × 0.4 = 20, counted as −20. Above: 30 × 1.5 = 45. Net change = −20 + 45 = **+25 percentage points**.

**(c)** Total amount of change = 20 + 45 = **65 percentage points**. It is larger than 25 because the level went down and then up. The net change lets the fall and the rise partly cancel; the total adds the size of every change.

**(d)** B(80) = 62 + 25 = **87%**. The area from t = 0 to t = 50 is 20: between 18:00 and 18:50, while the video streamed, the battery level **fell by 20 percentage points** (from 62% to 42%).

| Point | What earns it |
|---|---|
| 1 | Two rectangles with correct sizes 20 and 45, and the first counted as negative |
| 1 | Net change +25 **and** total change 65 |
| 1 | Explains that the total adds sizes while net change lets decreases cancel increases |
| 1 | B(80) = 87 with a correct interpretation: interval, decrease, 20 percentage points |

"Units" note: "percentage points" is better than "percent" for a change in a percentage, but either is accepted here.
</details>

## Question 7 (constructed response · stretch)

A small boat moves along a straight canal. Its velocity is v(t) metres per second, t seconds after it leaves a jetty; positive velocity means moving away from the jetty. The graph of v is:

- for 0 ≤ t ≤ 4, a quarter of a circle with centre (4, 0) and radius 4, rising from (0, 0) to (4, 4);
- v = 4 for 4 ≤ t ≤ 8;
- a straight segment from (8, 4) to (10, 0), then a straight segment from (10, 0) to (12, −2);
- v = −2 for all t ≥ 12.

(a) Find the boat's displacement from t = 0 to t = 12.
(b) Find the total distance the boat travels from t = 0 to t = 12.
(c) Find the time T when the boat is back at the jetty.
(d) Explain why, for 0 ≤ t ≤ T, the boat is farthest from the jetty at t = 10.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Above the axis: quarter circle ¼ × π × 4² = 4π; rectangle 4 × 4 = 16; triangle ½ × 2 × 4 = 4. Below: triangle ½ × 2 × 2 = 2. Displacement = 4π + 16 + 4 − 2 = **4π + 18 ≈ 30.566 m**.

**(b)** Total distance = 4π + 16 + 4 + 2 = **4π + 22 ≈ 34.566 m**.

**(c)** At t = 12 the boat is 4π + 18 metres from the jetty, moving back at 2 m/s. It returns when the extra area below the axis, 2(T − 12), equals 4π + 18:

2(T − 12) = 4π + 18, so T − 12 = 2π + 9, and **T = 21 + 2π ≈ 27.283 s**.

**(d)** v(t) > 0 on (0, 10), so the boat moves away from the jetty throughout that time. v(t) < 0 for t > 10, so from t = 10 until it reaches the jetty at t = T it moves back towards the jetty. On 0 ≤ t ≤ T the distance from the jetty therefore reaches its greatest value, 4π + 20 ≈ 32.566 m, at t = 10. (After T the boat carries on past the jetty, which is why the question limits the interval.)

| Point | What earns it |
|---|---|
| 1 | Quarter-circle area 4π |
| 1 | Displacement 4π + 18, with the area on [10, 12] subtracted |
| 1 | Total distance 4π + 22 |
| 1 | Sets up 2(T − 12) = 4π + 18 (or equivalent) |
| 1 | T = 21 + 2π |
| 1 | Reasons from the sign change of v at t = 10 |

Acceptable alternative for (c): the boat travels 4π + 20 m away from the jetty in total and must come back the same distance: 2 + 2(T − 12) = 4π + 20 gives the same T.
</details>

## How did you do?

- **Q1 or Q4 wrong:** reread "Units of an accumulated change" and Worked example 3 in the [study guide](/advanced-course-resources/calculus-ab/6-1-exploring-accumulations-change-study-guide/).
- **Q2 or Q5 wrong:** redo Worked example 1 (the battery) and split each region into shapes.
- **Q3 or Q6 wrong:** reread "The sign of an accumulated change": area below the axis is a decrease.
- **Q7 wrong:** redo Worked example 2 (the drone), then try (c) again.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/6-1-exploring-accumulations-change-checklist/).
