---
resourceId: "mb-ap-calcab-u4-diagnostic"
title: "Contextual Applications of Differentiation: Unit Diagnostic (Calculus AB Unit 4)"
description: "Ten short original questions, one or two per topic of Contextual Applications of Differentiation, to show which topics you should revisit, with explanations and links."
course: "calculus-ab"
unit: 4
topics: []
resourceType: "unit-diagnostic"
calculusScope: "ab-and-bc"
prerequisites:
  - "Differentiation rules from Units 2 and 3, including the chain, product and quotient rules"
  - "Writing the equation of a tangent line"
learningObjectives:
  - "Find out which Unit 4 topics are secure and which need more work"
  - "Check interpretation, motion, related rates, tangent line and limit skills quickly"
  - "Practise short written justifications for motion, related rates and approximation questions"
skills: ["1", "2", "3"]
studyMinutes: 30
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator. Leave e and π in exact answers; no constants or data beyond those in each question are needed."
related: ["mb-ap-calcab-u4-review", "mb-ap-calcab-4.2-study-guide", "mb-ap-calcab-4.5-study-guide", "mb-ap-calcab-4.6-study-guide"]
next: "mb-ap-calcab-u4-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Use this before revising Unit 4, to decide which of the 7 topics to revisit first."
  - "Each question is labelled with its topic number, and each answer links to that topic's study guide."
  - "These are original Marlbridge practice questions, not past exam questions, and the result is not a predicted score."
  - "Shared diagnostic for Calculus AB and Calculus BC students; every question applies to both courses."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**What this is for.** Use this diagnostic to find which topics of Unit 4, Contextual Applications of Differentiation, to revisit. There is one question per topic, and two for Topics 4.2, 4.5 and 4.6. These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are invented. The questions are not calibrated, and your result is not a predicted score.

**Rules.** No calculator; about 30 minutes. Answer everything before opening any answer. Give units with every rate. The unit is shared by Calculus AB and Calculus BC, and there are no BC-only questions: every question is for both courses.

## Question 1 (multiple choice · 4.1)

A city sells S(p) bus passes per week when the price of a pass is p dollars. It is given that S′(12) = −35. Which is the best interpretation?

- (A) When the price is $12, the city sells 35 fewer passes per week than usual.
- (B) When the price is $12, weekly sales are decreasing at a rate of 35 passes per week for each dollar the price goes up.
- (C) When the price is $12, weekly sales are falling by 35 passes every week.
- (D) When the price is $12, the price is decreasing at a rate of 35 dollars per pass.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The input is price, so S′ has units of (passes per week) ÷ dollars. The negative sign means sales fall as the price rises.

- (A) treats the rate as an amount.
- (C) treats the input as time. The input here is price, so the rate is per dollar, not per week.
- (D) swaps input and output.

**If you missed this:** [Topic 4.1 study guide](/advanced-course-resources/calculus-ab/4-1-interpreting-meaning-derivative-context-study-guide/).
</details>

## Question 2 (multiple choice · 4.2)

A particle moves along the x-axis with position x(t) = t³ − 6t² + 9t + 2 for t ≥ 0. What is the **speed** of the particle at the moment its acceleration is 0?

- (A) −3
- (B) 3
- (C) 0
- (D) 4

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** v(t) = 3t² − 12t + 9 and a(t) = 6t − 12, so a = 0 at t = 2. v(2) = 12 − 24 + 9 = −3, and speed is |v| = 3.

- (A) is the velocity, not the speed.
- (C) mixes up a = 0 with v = 0.
- (D) is the position x(2).

**If you missed this:** [Topic 4.2 study guide](/advanced-course-resources/calculus-ab/4-2-straight-line-motion-connecting-position-study-guide/).
</details>

## Question 3 (short answer · 4.2)

A particle moves along a line with velocity v(t) = (t − 1)²(t − 4) cm per second, for 0 ≤ t ≤ 6.

(a) At what times is the particle at rest?
(b) At which of these times does it change direction? Justify.
(c) Given that a(t) = 3(t − 1)(t − 3), is the particle speeding up or slowing down at t = 2? At t = 3.5? Justify.

<details>
<summary>Worked answer</summary>

**(a)** v(t) = 0 at **t = 1 and t = 4**.

**(b)** (t − 1)² ≥ 0, so the sign of v is the sign of t − 4 (except at t = 1). v < 0 on both sides of t = 1, so there is **no change of direction at t = 1**. v changes from negative to positive at t = 4, so the particle **changes direction at t = 4**.

**(c)** At t = 2: v(2) = −2 and a(2) = −3. Same signs, so it is **speeding up**. At t = 3.5: v(3.5) = −3.125 and a(3.5) = 3.75. Opposite signs, so it is **slowing down**.

**If you missed this:** "Direction of motion" and "Speeding up and slowing down" in the [Topic 4.2 study guide](/advanced-course-resources/calculus-ab/4-2-straight-line-motion-connecting-position-study-guide/).
</details>

## Question 4 (multiple choice · 4.3)

The temperature of a cup of tea t minutes after it is poured is modelled by H(t) = 20 + 70e^(−0.1t) °C. What is H′(10)?

- (A) −7/e °C per minute
- (B) 20 + 70/e °C
- (C) −70/e °C per minute
- (D) −7e °C per minute

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** By the chain rule, H′(t) = 70 × (−0.1)e^(−0.1t) = −7e^(−0.1t). So H′(10) = −7e^(−1) = −7/e, about −2.6 °C per minute: the tea is cooling at about 2.6 °C per minute.

- (B) is H(10), an amount, with the wrong units for a rate.
- (C) drops the factor 0.1 from the chain rule.
- (D) uses e^(+1) instead of e^(−1).

**If you missed this:** [Topic 4.3 study guide](/advanced-course-resources/calculus-ab/4-3-rates-change-applied-contexts-other-study-guide/).
</details>

## Question 5 (multiple choice · 4.4)

The circumference of a circular oil slick is increasing at 4π metres per minute. How fast is its area increasing when the radius is 10 m?

- (A) 2 m² per minute
- (B) 20π m² per minute
- (C) 40π m² per minute
- (D) 80π² m² per minute

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** C = 2πr, so dC/dt = 2π · dr/dt and dr/dt = 4π/(2π) = 2 m per minute. A = πr², so dA/dt = 2πr · dr/dt = 2π(10)(2) = 40π m² per minute.

- (A) is dr/dt, with area units attached.
- (B) differentiates πr² as πr.
- (D) uses 4π as dr/dt instead of dC/dt.

**If you missed this:** the reference table for differentiating with respect to t in the [Topic 4.4 study guide](/advanced-course-resources/calculus-ab/4-4-introduction-related-rates-study-guide/).
</details>

## Question 6 (multiple choice · 4.5)

A cyclist leaves a junction riding east at 4 m/s. At the same moment, a walker 100 m north of the junction starts walking south towards it at 2 m/s. At t = 20 seconds, how fast is the distance between them changing?

- (A) Increasing at 2 m/s
- (B) Increasing at 4.4 m/s
- (C) Increasing at 6 m/s
- (D) Increasing at √20 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Let x be the cyclist's distance east and y the walker's distance north, so D² = x² + y². At t = 20, x = 80, y = 100 − 40 = 60 and D = 100. Differentiate: D · dD/dt = x · dx/dt + y · dy/dt = 80(4) + 60(−2) = 200. So dD/dt = 2 m/s.

- (B) takes dy/dt = +2. The walker's distance from the junction is decreasing.
- (C) adds the two speeds.
- (D) is the size of their relative velocity, √(4² + 2²). Only part of it points along the line joining them.

**If you missed this:** Worked example 1 in the [Topic 4.5 study guide](/advanced-course-resources/calculus-ab/4-5-solving-related-rates-problems-study-guide/).
</details>

## Question 7 (short answer · 4.5)

A vase is shaped like an upside-down square pyramid: the opening is a square of side 12 cm, and the vase is 18 cm deep. Water is poured in at 24 cm³ per second. When the water is h cm deep, its surface is a square of side s cm.

(a) Show that s = 2h/3 and V = 4h³/27, where V is the volume of water.
(b) How fast is the depth rising when h = 9 cm?
(c) Explain, in context, why the depth rises more slowly as the vase fills.

<details>
<summary>Worked answer</summary>

**(a)** The water forms a smaller pyramid similar to the vase, so s/h = 12/18 = 2/3 and s = 2h/3. Then V = (1/3)s²h = (1/3)(4h²/9)h = **4h³/27**.

**(b)** dV/dt = (4h²/9) · dh/dt. At h = 9: 24 = 36 · dh/dt, so **dh/dt = 2/3 cm per second**. At that moment the water level is rising at 2/3 cm per second.

**(c)** In general dh/dt = 24/(4h²/9) = 54/h², which falls as h grows. Higher up, the water surface is wider (area 4h²/9 cm²), so each 24 cm³ spreads over a bigger square and raises the level less.

**If you missed this:** "Removing a variable with similar triangles" and "Interpreting the answer" in the [Topic 4.5 study guide](/advanced-course-resources/calculus-ab/4-5-solving-related-rates-problems-study-guide/).
</details>

## Question 8 (multiple choice · 4.6)

The tangent line to y = ln x at x = 1 is used to estimate ln(0.96). Which statement is true?

- (A) The estimate is −0.04, and it is an overestimate.
- (B) The estimate is −0.04, and it is an underestimate.
- (C) The estimate is 0.04, and it is an overestimate.
- (D) The estimate is 0.96, and it is an underestimate.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** ln 1 = 0 and the slope at 1 is 1/1 = 1, so L(x) = x − 1 and L(0.96) = −0.04. The second derivative is −1/x² < 0, so the graph bends downward and the tangent line lies above it: −0.04 is an overestimate. (The true value is about −0.0408.)

- (B) reverses the concavity rule.
- (C) gets the sign of the step 0.96 − 1 wrong.
- (D) leaves out the "− 1", so the line does not pass through (1, 0).

**If you missed this:** [Topic 4.6 study guide](/advanced-course-resources/calculus-ab/4-6-approximating-values-function-local-linearity-study-guide/).
</details>

## Question 9 (short answer · 4.6)

D(t) is the distance, in metres, a runner has covered t seconds after the start of a race. D(40) = 236 and D′(40) = 7. The runner is tiring, so D″(t) < 0 for 40 ≤ t ≤ 50.

(a) Use the tangent line at t = 40 to estimate D(41.5).
(b) Is your estimate too high or too low? Justify.
(c) Use the same line to estimate when the runner reaches the 250 m mark. Does the runner actually reach it before or after this time? Explain.

<details>
<summary>Worked answer</summary>

**(a)** L(t) = 236 + 7(t − 40), so D(41.5) ≈ 236 + 7(1.5) = **246.5 m**.

**(b)** D″ < 0, so the graph of D bends downward and the tangent line lies above it. The estimate is **too high**.

**(c)** 236 + 7(t − 40) = 250 gives **t = 42**. Because the line lies above the graph, D(42) < 250: the runner has not yet reached 250 m at t = 42, so the runner reaches it **after** t = 42 seconds.

**If you missed this:** "Overestimate or underestimate?" and Worked example 2 in the [Topic 4.6 study guide](/advanced-course-resources/calculus-ab/4-6-approximating-values-function-local-linearity-study-guide/).
</details>

## Question 10 (multiple choice · 4.7)

What is lim (x → 1) (x³ − 1)/ln x?

- (A) 3
- (B) 1/3
- (C) 0
- (D) It does not exist, because ln 1 = 0.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Check the form: lim (x → 1) (x³ − 1) = 0 and lim (x → 1) ln x = 0, so the form is 0/0 and L'Hospital's Rule applies. lim (x → 1) 3x²/(1/x) = lim (x → 1) 3x³ = 3.

- (B) puts the derivative of the bottom on top.
- (C) treats the label 0/0 as the number 0.
- (D) A zero denominator alone does not decide a limit; 0/0 is indeterminate.

**If you missed this:** [Topic 4.7 study guide](/advanced-course-resources/calculus-ab/4-7-lhospitals-rule-determining-limits-indeterminate-study-guide/).
</details>

## Your next step

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 4.1 Derivative in context | 1 | [Guide 4.1](/advanced-course-resources/calculus-ab/4-1-interpreting-meaning-derivative-context-study-guide/) |
| 4.2 Straight-line motion | 2, 3 | [Guide 4.2](/advanced-course-resources/calculus-ab/4-2-straight-line-motion-connecting-position-study-guide/) |
| 4.3 Other applied rates | 4 | [Guide 4.3](/advanced-course-resources/calculus-ab/4-3-rates-change-applied-contexts-other-study-guide/) |
| 4.4 Introduction to related rates | 5 | [Guide 4.4](/advanced-course-resources/calculus-ab/4-4-introduction-related-rates-study-guide/) |
| 4.5 Solving related rates problems | 6, 7 | [Guide 4.5](/advanced-course-resources/calculus-ab/4-5-solving-related-rates-problems-study-guide/) |
| 4.6 Local linearity | 8, 9 | [Guide 4.6](/advanced-course-resources/calculus-ab/4-6-approximating-values-function-local-linearity-study-guide/) |
| 4.7 L'Hospital's Rule | 10 | [Guide 4.7](/advanced-course-resources/calculus-ab/4-7-lhospitals-rule-determining-limits-indeterminate-study-guide/) |

## How to use your result

- **Mark each topic** secure, shaky (unsure or a slip) or gap (wrong).
- **Fix gaps in Topics 4.1 and 4.4 first.** Units and interpretation (4.1) are needed in every context question, and differentiating with respect to time (4.4) is the engine of every related rates problem.
- **Check your written answers** to Questions 3, 7 and 9 as well as the values. Did you give a reason (signs of v and a, the sign of the second derivative) and not just a conclusion?
- **For a gap**, read the guide, then do the topic's practice set.
- **Then try the [Unit 4 mixed review](/advanced-course-resources/calculus-ab/unit-4-review/)**, where each question combines topics.
