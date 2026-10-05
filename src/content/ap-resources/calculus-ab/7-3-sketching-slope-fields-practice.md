---
resourceId: "mb-ap-calcab-7.3-practice"
title: "Sketching Slope Fields: Practice Questions (Calculus AB 7.3)"
description: "Seven original Marlbridge practice questions on drawing slope fields, reading their patterns and matching equations to fields, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 7
topics: ["7.3"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Evaluating an expression in x and y at a point"
  - "Slopes of straight lines"
prerequisiteResources: ["mb-ap-calcab-7.3-study-guide"]
learningObjectives:
  - "Compute the slope of a slope-field segment at a point"
  - "Sketch a slope field at a given set of points"
  - "Match a differential equation to a slope field using structure, zero slopes and test points"
  - "Interpret the segments of a slope field in context"
skills: ["2", "1", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Draw the slope fields on paper; the solutions give tables and a model sketch to compare with."
related: ["mb-ap-calcab-7.3-study-guide", "mb-ap-calcab-7.3-revision-notes", "mb-ap-calcab-7.3-checklist"]
next: "mb-ap-calcab-7.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need sketches or written reasoning."
  - "Shared practice for Calculus AB and Calculus BC students."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, axes drawn with equal scales, and coordinates written (x, y) unless a question uses other variable names. Draw slope fields on paper with short segments centred on each point. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

In the slope field for dy/dx = y² − 2x, what is the slope of the segment drawn at the point (1, −2)?

- (A) −6
- (B) −4
- (C) 2
- (D) 5

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Substitute x = 1 and y = −2: dy/dx = (−2)² − 2(1) = 4 − 2 = 2. The segment rises steeply.

- (A) squares only the 2 and keeps the minus sign outside: −(2²) − 2 = −6. The whole of y is squared, so (−2)² = 4.
- (B) forgets the square and uses y − 2x = −2 − 2 = −4.
- (D) swaps the coordinates, computing x² − 2y = 1 + 4 = 5. In (1, −2), the first number is x.
</details>

## Question 2 (multiple choice · core)

A slope field has these features: every segment in a vertical column has the same slope; the segments along the y-axis are horizontal; segments rise to the right of the y-axis and fall to the left of it. Which differential equation could it show?

- (A) dy/dx = 2x
- (B) dy/dx = 2y
- (C) dy/dx = x²
- (D) dy/dx = x + y

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Identical columns mean dy/dx depends on x only. For 2x: at x = 0 the slope is 0 (horizontal on the y-axis), for x > 0 it is positive and for x < 0 it is negative. All three features hold.

- (B) depends on y only, so it would make identical **rows**, with horizontal segments along the x-axis instead.
- (C) depends on x only and is 0 on the y-axis, but x² is never negative, so segments would rise on **both** sides.
- (D) depends on both variables. For example, at (0, 2) it gives 2, not 0, so the y-axis segments would not all be horizontal.
</details>

## Question 3 (multiple choice · core)

The slope field below is drawn at the 25 points with x and y each equal to −2, −1, 0, 1 or 2. Which differential equation does it show?

<figure>
<svg viewBox="0 0 354 334" role="img" aria-labelledby="sf73q3-title sf73q3-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sf73q3-title">Slope field for practice question 3</title>
<desc id="sf73q3-desc">Twenty-five short segments at the points with x and y each equal to −2, −1, 0, 1 or 2. Segments are horizontal at (−1, 2), (0, 1), (1, 0) and (2, −1), which lie on a line running from upper left to lower right. Above and to the right of that line the segments rise, getting steeper towards (2, 2). Below and to the left they fall, getting steeper towards (−2, −2). At the origin the segment falls at 45 degrees.</desc>
<rect x="0" y="0" width="354" height="334" fill="#ffffff"/>
<defs><clipPath id="sf73q3-clip"><rect x="44" y="24" width="280" height="280"/></clipPath></defs>
<line x1="44" y1="164" x2="324" y2="164" stroke="#8a94a6" stroke-width="1"/>
<line x1="184" y1="304" x2="184" y2="24" stroke="#8a94a6" stroke-width="1"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="72" y="322">−2</text>
<text x="128" y="322">−1</text>
<text x="184" y="322">0</text>
<text x="240" y="322">1</text>
<text x="296" y="322">2</text>
<text x="338" y="322">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="36" y="280">−2</text>
<text x="36" y="224">−1</text>
<text x="36" y="168">0</text>
<text x="36" y="112">1</text>
<text x="36" y="56">2</text>
<text x="36" y="16">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1.8" stroke-linecap="round">
<line x1="68.6" y1="259" x2="75.4" y2="293"/>
<line x1="67.8" y1="203.2" x2="76.2" y2="236.8"/>
<line x1="66.5" y1="147.5" x2="77.5" y2="180.5"/>
<line x1="64.2" y1="92.5" x2="79.8" y2="123.5"/>
<line x1="59.7" y1="39.7" x2="84.3" y2="64.3"/>
<line x1="123.8" y1="259.2" x2="132.2" y2="292.8"/>
<line x1="122.5" y1="203.5" x2="133.5" y2="236.5"/>
<line x1="120.2" y1="148.5" x2="135.8" y2="179.5"/>
<line x1="115.7" y1="95.7" x2="140.3" y2="120.3"/>
<line x1="110.6" y1="52" x2="145.4" y2="52"/>
<line x1="178.5" y1="259.5" x2="189.5" y2="292.5"/>
<line x1="176.2" y1="204.5" x2="191.8" y2="235.5"/>
<line x1="171.7" y1="151.7" x2="196.3" y2="176.3"/>
<line x1="166.6" y1="108" x2="201.4" y2="108"/>
<line x1="171.7" y1="64.3" x2="196.3" y2="39.7"/>
<line x1="232.2" y1="260.5" x2="247.8" y2="291.5"/>
<line x1="227.7" y1="207.7" x2="252.3" y2="232.3"/>
<line x1="222.6" y1="164" x2="257.4" y2="164"/>
<line x1="227.7" y1="120.3" x2="252.3" y2="95.7"/>
<line x1="232.2" y1="67.5" x2="247.8" y2="36.5"/>
<line x1="283.7" y1="263.7" x2="308.3" y2="288.3"/>
<line x1="278.6" y1="220" x2="313.4" y2="220"/>
<line x1="283.7" y1="176.3" x2="308.3" y2="151.7"/>
<line x1="288.2" y1="123.5" x2="303.8" y2="92.5"/>
<line x1="290.5" y1="68.5" x2="301.5" y2="35.5"/>
</g>
</svg>
<figcaption>Slope field for Question 3, drawn at 25 points. Axes are unitless and use equal scales.</figcaption>
</figure>

- (A) dy/dx = x − y + 1
- (B) dy/dx = x + y − 1
- (C) dy/dx = xy − 1
- (D) dy/dx = 1 − x − y

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The horizontal segments lie at (−1, 2), (0, 1), (1, 0) and (2, −1), all on the line x + y = 1. At the origin the segment falls at 45°, so the slope there is −1. Option (B) is 0 on that line and gives 0 + 0 − 1 = −1 at the origin. As a final check, at (2, 2) the field is very steep and rising; (B) gives 3.

- (A) gives 1 at the origin, so that segment would rise. Its zero slopes lie on y = x + 1, a different line.
- (C) gives −1 at (1, 0), but the field is horizontal there.
- (D) has exactly the same horizontal segments as (B), but the opposite sign everywhere else: it gives +1 at the origin. Zero slopes alone cannot separate (B) and (D); a test point can.
</details>

## Question 4 (multiple choice · core)

In the slope field for dy/dx = (y − 2)(x + 1), where are the segments horizontal?

- (A) Only along the line y = 2
- (B) Along the line y = 2 and along the line x = −1
- (C) Along the line y = −2 and along the line x = 1
- (D) Only at the point (−1, 2)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A segment is horizontal where dy/dx = 0. A product is 0 when either factor is 0: y − 2 = 0 gives the line y = 2, and x + 1 = 0 gives the line x = −1. For example, at (−1, 5) the slope is 3 × 0 = 0.

- (A) misses the second factor. Every point with x = −1 also gives a zero slope.
- (C) solves each factor with the wrong sign.
- (D) requires both factors to be 0 at once. Only one factor needs to be 0.
</details>

## Question 5 (sketch · core)

Consider the differential equation dy/dx = y − x².

(a) On paper, sketch the slope field at the nine points with x = −1, 0, 1 and y = −1, 0, 1. Show a table of the slopes.
(b) Explain why the segments in the column x = −1 match those in the column x = 1.
(c) Describe the set of all points in the plane where the segments are horizontal.
(d) Is the slope positive or negative at points above that set? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Substitute each point into y − x²:

| | x = −1 | x = 0 | x = 1 |
|---|---|---|---|
| **y = 1** | 0 | 1 | 0 |
| **y = 0** | −1 | 0 | −1 |
| **y = −1** | −2 | −1 | −2 |

<figure>
<svg viewBox="0 0 330 310" role="img" aria-labelledby="sf73q5-title sf73q5-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sf73q5-title">Slope field for dy/dx = y − x² at nine points</title>
<desc id="sf73q5-desc">Nine short segments at x = −1, 0, 1 and y = −1, 0, 1. Horizontal segments at (−1, 1), (0, 0) and (1, 1). Slope 1 at (0, 1), rising at 45 degrees. Slope −1 at (−1, 0), (1, 0) and (0, −1), falling at 45 degrees. Slope −2 at (−1, −1) and (1, −1), falling steeply. The left and right columns are identical.</desc>
<rect x="0" y="0" width="330" height="310" fill="#ffffff"/>
<defs><clipPath id="sf73q5-clip"><rect x="44" y="24" width="256" height="256"/></clipPath></defs>
<line x1="44" y1="152" x2="300" y2="152" stroke="#8a94a6" stroke-width="1"/>
<line x1="172" y1="280" x2="172" y2="24" stroke="#8a94a6" stroke-width="1"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="92" y="298">−1</text>
<text x="172" y="298">0</text>
<text x="252" y="298">1</text>
<text x="314" y="298">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="36" y="236">−1</text>
<text x="36" y="156">0</text>
<text x="36" y="76">1</text>
<text x="36" y="16">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1.8" stroke-linecap="round">
<line x1="80.9" y1="209.8" x2="103.1" y2="254.2"/>
<line x1="74.5" y1="134.5" x2="109.5" y2="169.5"/>
<line x1="67.2" y1="72" x2="116.8" y2="72"/>
<line x1="154.5" y1="214.5" x2="189.5" y2="249.5"/>
<line x1="147.2" y1="152" x2="196.8" y2="152"/>
<line x1="154.5" y1="89.5" x2="189.5" y2="54.5"/>
<line x1="240.9" y1="209.8" x2="263.1" y2="254.2"/>
<line x1="234.5" y1="134.5" x2="269.5" y2="169.5"/>
<line x1="227.2" y1="72" x2="276.8" y2="72"/>
</g>
</svg>
<figcaption>Model answer for Question 5(a): the slope field for dy/dx = y − x². The columns x = −1 and x = 1 are identical because (−1)² = 1². Axes are unitless and use equal scales.</figcaption>
</figure>

**(b)** The x-values −1 and 1 give the same x², namely 1. So for each y, dy/dx = y − 1 in both columns, and the segments are identical.

**(c)** dy/dx = 0 when y = x². The segments are horizontal at every point on the parabola y = x². In the grid this includes (−1, 1), (0, 0) and (1, 1).

**(d)** Above the parabola, y > x², so y − x² > 0. The slope is **positive**: segments rise. For example, at (0, 1) the slope is 1.

| Point | What earns it |
|---|---|
| 1 | All nine slopes correct (a table or clearly labelled sketch) |
| 1 | Segments drawn short, centred and with consistent relative steepness, including horizontal segments where the slope is 0 |
| 1 | (b) Explains that (−1)² = 1² so each row has equal slopes in the two outer columns |
| 1 | (c) and (d) Names the parabola y = x² and justifies the positive sign from y > x² |

Acceptable alternative for (b): noting that y − x² is unchanged when x is replaced by −x, so the field is a mirror image across the y-axis, earns the point.
</details>

## Question 6 (constructed response · core)

A cup of tea is left in a room. An invented model for its temperature H (°C) at time t (minutes) is

**dH/dt = −(H − 30)/10**

(a) Sketch the slope field, with t on the horizontal axis and H on the vertical axis, at the nine points with t = 0, 5, 10 and H = 30, 50, 70. Show a table of slopes.
(b) Explain, using the equation, why every row of your sketch contains three parallel segments.
(c) What do the segments along H = 30 tell you about the tea?
(d) Compare the segments at H = 70 with those at H = 50. What does this say about how quickly the tea cools?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Substitute each H-value. The value of t does not matter.

| | t = 0 | t = 5 | t = 10 |
|---|---|---|---|
| **H = 70** | −4 | −4 | −4 |
| **H = 50** | −2 | −2 | −2 |
| **H = 30** | 0 | 0 | 0 |

Draw horizontal segments along H = 30, falling segments with slope −2 along H = 50 and steeper falling segments with slope −4 along H = 70. On axes with different scales for t and H, keep the relative steepness right: the H = 70 segments are steeper than the H = 50 ones.

**(b)** The right-hand side contains H but not t. Points in the same row share the same H, so they have the same value of dH/dt and the segments are parallel.

**(c)** At H = 30, dH/dt = 0. A tea at 30 °C would not change temperature: it is already at the room's temperature in this model.

**(d)** At H = 70 the slope is −4 °C per minute; at H = 50 it is −2 °C per minute. The steeper segments show the tea cools faster when it is hotter, that is, further above 30 °C.

| Point | What earns it |
|---|---|
| 1 | Correct table: 0, −2, −4 in the three rows |
| 1 | Sketch with three parallel segments per row, horizontal at H = 30 and steeper at H = 70 than at H = 50 |
| 1 | (b) Links the parallel rows to dH/dt not depending on t |
| 1 | (c) and (d) Interprets zero slope as no temperature change at 30 °C, and steeper segments as faster cooling, with units °C per minute |
</details>

## Question 7 (constructed response · stretch)

A slope field is described by four conditions:

1. Segments are horizontal at every point of the line y = 3.
2. Segments are horizontal at every point of the y-axis.
3. Segments rise wherever x > 0 and y > 3.
4. Segments fall wherever x < 0 and y > 3.

(a) Show that dy/dx = x(y − 3) satisfies all four conditions.
(b) A student proposes dy/dx = x²(y − 3). Which conditions does it satisfy, and which does it fail? Use a test point.
(c) Write a different differential equation (not a constant multiple of the one in (a)) that also satisfies all four conditions, and check it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** On y = 3 the factor y − 3 is 0, so dy/dx = 0: condition 1. On the y-axis x = 0, so dy/dx = 0: condition 2. If x > 0 and y > 3, both factors are positive and dy/dx > 0: condition 3. If x < 0 and y > 3, the factors have opposite signs and dy/dx < 0: condition 4.

**(b)** x²(y − 3) is 0 on y = 3 and on x = 0, so it meets conditions 1 and 2. For x > 0 and y > 3 it is positive, so it meets condition 3. It **fails condition 4**: at (−1, 4), dy/dx = (−1)²(4 − 3) = 1 > 0, so the segment rises. Because x² is never negative, the sign does not change across the y-axis.

**(c)** One answer: dy/dx = x³(y − 3). It is 0 on y = 3 and on x = 0. x³ has the same sign as x, so the signs match those in (a): at (1, 4) it gives 1 and at (−1, 4) it gives −1. Other valid answers include x(y − 3)³ or x(y − 3)(y² + 1).

| Point | What earns it |
|---|---|
| 1 | (a) Checks all four conditions, with a sign argument for 3 and 4 |
| 1 | (b) Identifies that conditions 1 to 3 hold |
| 1 | (b) Shows condition 4 fails with a correct test point and explains why x² causes it |
| 1 | (c) A valid new equation with a check of the zero lines and of the signs in both regions |

The field is not fixed by the four conditions alone, so many equations are correct in (c). Any answer that meets all four and is checked earns the point.
</details>

## How did you do?

- **Q1 or Q5(a) wrong:** redo the table in Worked example 1 of the [study guide](/advanced-course-resources/calculus-ab/7-3-sketching-slope-fields-study-guide/), substituting x first, then y.
- **Q2 or Q6(b) wrong:** reread "Patterns that let you read a field quickly": x only gives identical columns; y only gives identical rows.
- **Q3 wrong:** follow the matching order in Worked example 2: structure, zero slopes, then a test point for the sign.
- **Q4, Q5(c) or Q7 wrong:** practise solving dy/dx = 0 and using signs of factors to describe regions.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/7-3-sketching-slope-fields-checklist/).
