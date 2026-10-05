---
resourceId: "mb-ap-calcab-u1-review"
title: "Limits and Continuity: Mixed Unit Review (Calculus AB Unit 1)"
description: "The big ideas of Limits and Continuity in one place, a methods summary table, and seven original mixed questions that combine topics, with worked solutions and rubrics."
course: "calculus-ab"
unit: 1
topics: []
resourceType: "unit-review"
calculusScope: "ab-and-bc"
prerequisites:
  - "Work through the Unit 1 topics, or at least the Unit 1 diagnostic"
prerequisiteResources: ["mb-ap-calcab-u1-diagnostic"]
learningObjectives:
  - "Connect limits, continuity, asymptotes and the Intermediate Value Theorem as one set of ideas"
  - "Choose a limit method by reading the form of an expression"
  - "Answer multi-part questions that combine several Unit 1 topics"
  - "Write complete justifications that name a definition or theorem and check its conditions"
skills: ["1", "2", "3", "4"]
studyMinutes: 60
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. All values are designed to be found by hand."
related: ["mb-ap-calcab-u1-diagnostic", "mb-ap-calcab-1.1-checklist", "mb-ap-calcab-1.2-checklist", "mb-ap-calcab-1.3-checklist", "mb-ap-calcab-1.4-checklist", "mb-ap-calcab-1.5-checklist", "mb-ap-calcab-1.6-checklist", "mb-ap-calcab-1.7-checklist", "mb-ap-calcab-1.8-checklist", "mb-ap-calcab-1.9-checklist", "mb-ap-calcab-1.10-checklist", "mb-ap-calcab-1.11-checklist", "mb-ap-calcab-1.12-checklist", "mb-ap-calcab-1.13-checklist", "mb-ap-calcab-1.14-checklist", "mb-ap-calcab-1.15-checklist", "mb-ap-calcab-1.16-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "A limit describes where values head; continuity asks whether the function actually arrives there."
  - "Substitute first, then let the result (a number, 0/0 or nonzero/0) choose your next method."
  - "Asymptotes are limits involving infinity: vertical ones from infinite limits, horizontal ones from limits at infinity."
  - "The Intermediate Value Theorem needs continuity on a closed interval, which you check with Topics 1.11–1.13."
  - "Shared review for Calculus AB and Calculus BC students."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Use this page after you have studied the topics of Unit 1, Limits and Continuity, or after the [Unit 1 diagnostic](/advanced-course-resources/calculus-ab/unit-1-diagnostic/). The unit is shared by Calculus AB and Calculus BC. The questions below are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not official scoring. No calculator for any question.

## Big ideas of the unit

- **A rate at an instant is a limit of average rates.** You cannot divide by a zero change in x, so you watch what the averages approach ([Topic 1.1](/advanced-course-resources/calculus-ab/1-1-introducing-calculus-change-occur-instant-study-guide/)). This is why the whole unit studies limits.
- **A limit is about values near c, never at c.** lim (x → c) f(x) can exist when f(c) is undefined or different ([Topic 1.2](/advanced-course-resources/calculus-ab/1-2-defining-limits-limit-notation-study-guide/)).
- **Graphs and tables estimate; algebra decides.** Graphs can hide behaviour because of scale, and tables can mislead with badly chosen x values ([Topic 1.3](/advanced-course-resources/calculus-ab/1-3-estimating-limit-values-graphs-study-guide/), [Topic 1.4](/advanced-course-resources/calculus-ab/1-4-estimating-limit-values-tables-study-guide/)). A limit fails to exist when the two sides disagree, when values are unbounded, or when they oscillate.
- **Limit properties let you build big limits from small ones**, as long as each piece has a limit and no denominator tends to 0 ([Topic 1.5](/advanced-course-resources/calculus-ab/1-5-determining-limits-algebraic-properties-limits-study-guide/)).
- **The form after substitution tells you what to do.** A number is the answer; 0/0 means rewrite (factor, conjugate, combine fractions, trig identity); nonzero/0 means check signs for unbounded behaviour ([Topic 1.6](/advanced-course-resources/calculus-ab/1-6-limits-by-algebraic-manipulation-study-guide/), [Topic 1.7](/advanced-course-resources/calculus-ab/1-7-selecting-procedures-determining-limits-study-guide/)).
- **When rewriting fails, trap the function.** The squeeze theorem handles oscillating factors and proves lim (x → 0) (sin x)/x = 1 ([Topic 1.8](/advanced-course-resources/calculus-ab/1-8-determining-limits-squeeze-theorem-study-guide/)).
- **One limit, many representations.** You should move freely between a graph, a table, a formula and a sentence ([Topic 1.9](/advanced-course-resources/calculus-ab/1-9-connecting-multiple-representations-limits-study-guide/)).
- **Continuity is three conditions:** f(c) exists, the limit exists, and they are equal. Each failure gives a type of discontinuity: removable, jump or asymptote ([Topic 1.10](/advanced-course-resources/calculus-ab/1-10-exploring-types-discontinuities-study-guide/), [Topic 1.11](/advanced-course-resources/calculus-ab/1-11-defining-continuity-point-study-guide/)). Familiar functions are continuous on their domains ([Topic 1.12](/advanced-course-resources/calculus-ab/1-12-confirming-continuity-over-interval-study-guide/)), and a break can be repaired only if the limit exists ([Topic 1.13](/advanced-course-resources/calculus-ab/1-13-removing-discontinuities-study-guide/)).
- **Asymptotes are limits involving infinity.** Infinite limits give vertical asymptotes; limits at infinity give horizontal asymptotes and compare growth rates ([Topic 1.14](/advanced-course-resources/calculus-ab/1-14-connecting-infinite-limits-vertical-asymptotes-study-guide/), [Topic 1.15](/advanced-course-resources/calculus-ab/1-15-connecting-limits-infinity-horizontal-asymptotes-study-guide/)).
- **Continuity pays off in the Intermediate Value Theorem**, which proves a value is reached without finding where ([Topic 1.16](/advanced-course-resources/calculus-ab/1-16-working-intermediate-value-theorem-ivt-study-guide/)).

## Key relationships and methods

| You see or need | What it means or what to do | Topics |
|---|---|---|
| Rate at an instant | Limit of average rates as the interval shrinks | 1.1 |
| Substitution gives a number (bottom not 0) | That number is the limit | 1.5, 1.7 |
| 0/0 with polynomials | Factor and cancel the common factor | 1.6 |
| 0/0 with a square root | Multiply by the conjugate | 1.6 |
| 0/0 with sin or cos | Trig identity, or the form (sin u)/u → 1 | 1.6, 1.8 |
| Nonzero/0 | Sign check on each side: ±∞, and a vertical asymptote | 1.14 |
| Bounded factor × something → 0, or an oscillating term | Squeeze theorem | 1.8 |
| Piecewise or absolute value at a join | Find both one-sided limits | 1.5, 1.7 |
| One-sided limits differ | Limit does not exist; jump discontinuity | 1.3, 1.10 |
| Limit exists but ≠ f(c), or f(c) undefined | Removable; define f(c) = the limit | 1.10, 1.13 |
| x → ±∞ | Divide by the fastest-growing term in the denominator; check both directions | 1.15 |
| "Show a value is reached" | Continuity on [a, b] + value between f(a) and f(b) + name the IVT | 1.16 |

## Question 1 (multiple choice · mixed)

Functions f and g are defined for all x. You are told:

| | lim (x → 2⁻) | lim (x → 2⁺) | value at x = 2 |
|---|---|---|---|
| f | 3 | 1 | f(2) = 1 |
| g | −1 | 1 | g(2) = 1 |

Which function is continuous at x = 2?

- (A) f + g
- (B) f · g
- (C) f − g
- (D) g

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** One-sided limits combine using the limit properties. For f + g: left 3 + (−1) = 2, right 1 + 1 = 2, so the limit is 2, and (f + g)(2) = 1 + 1 = 2. All three conditions hold.

- (B) Left 3 × (−1) = −3, right 1 × 1 = 1. The limit does not exist (a jump).
- (C) Left 4, right 0. The limit does not exist.
- (D) g has a jump: −1 on the left, 1 on the right.

Topics: 1.5, 1.10, 1.11.
</details>

## Question 2 (multiple choice · mixed)

Let R(x) = (x² − 4x + 3)/(x² − x − 6). Which statement is true?

- (A) The graph has a hole at (3, 2/5), a vertical asymptote x = −2 and a horizontal asymptote y = 1.
- (B) The graph has vertical asymptotes x = 3 and x = −2 and a horizontal asymptote y = 1.
- (C) The graph has a hole at x = 3 and a vertical asymptote x = −2, but no horizontal asymptote.
- (D) The graph has a hole at x = −2, a vertical asymptote x = 3 and a horizontal asymptote y = 1.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Factor: (x − 1)(x − 3)/((x − 3)(x + 2)) = (x − 1)/(x + 2) for x ≠ 3. At x = 3 the limit is 2/5, so there is a hole (removable). At x = −2 the simplified bottom is 0 but the top is −3, so the values are unbounded: a vertical asymptote. Top and bottom have equal degree, so R(x) → 1 as x → ±∞.

- (B) ignores the cancelled factor: x = 3 is a hole, not an asymptote.
- (C) forgets that equal degrees give a horizontal asymptote at the ratio of leading coefficients.
- (D) swaps the roles of the two factors.

Topics: 1.6, 1.10, 1.13, 1.14, 1.15.
</details>

## Question 3 (multiple choice · mixed)

What is lim (x → ∞) (3x + cos x)/(x + 2)?

- (A) 0
- (B) 3
- (C) +∞
- (D) The limit does not exist, because cos x oscillates.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** −1 ≤ cos x ≤ 1, so for x > 0, (3x − 1)/(x + 2) ≤ (3x + cos x)/(x + 2) ≤ (3x + 1)/(x + 2). Both bounds tend to 3 as x → ∞ (divide by x). By the squeeze theorem, the limit is 3.

- (A) treats the bounded term as if it made everything vanish.
- (C) looks only at the numerator growing; the denominator grows at the same rate.
- (D) The oscillation is bounded, and dividing by x + 2 makes its effect shrink to 0.

Topics: 1.8, 1.15.
</details>

## Question 4 (constructed response · mixed)

A test oven in a fictional kitchen heats up. Its temperature T(t), in °C, is a continuous function of time t minutes. Some values are shown (invented data).

| t (minutes) | 0 | 4 | 6 | 7 | 8 | 12 |
|---|---|---|---|---|---|---|
| T(t) (°C) | 20 | 140 | 175 | 182 | 186 | 170 |

(a) Find the average rate of change of T over [0, 12]. Include units.
(b) Use the table to estimate the rate of change of T at t = 7. Show your interval.
(c) Justify that the oven's temperature was exactly 150 °C at some time in (4, 6).
(d) What is the least number of times in (0, 12) at which the temperature must equal 180 °C? Justify.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** (T(12) − T(0))/(12 − 0) = (170 − 20)/12 = 150/12 = **12.5 °C per minute**.

**(b)** Use the shortest interval in the table with 7 inside it, [6, 8]: (186 − 175)/(8 − 6) = 11/2 = **5.5 °C per minute**. (The one-sided intervals give 7 and 4 °C per minute; 5.5 lies between them.)

**(c)** T is continuous on [4, 6]. T(4) = 140 and T(6) = 175, and 140 < 150 < 175. By the Intermediate Value Theorem, T(t) = 150 for at least one t in (4, 6).

**(d)** **At least two.** T is continuous on [6, 7] with T(6) = 175 < 180 < 182 = T(7), so T = 180 somewhere in (6, 7). T is continuous on [8, 12] with T(8) = 186 > 180 > 170 = T(12), so T = 180 somewhere in (8, 12). These intervals do not overlap, so there are at least two such times.

| Point | What earns it |
|---|---|
| 1 | 12.5 °C per minute with units |
| 1 | An estimate from an interval containing t = 7, with the quotient shown (5.5, or 7 or 4 from a one-sided interval) |
| 1 | (c): continuity on [4, 6] stated, with T(4) and T(6) shown to trap 150 |
| 1 | (c): conclusion that names the Intermediate Value Theorem |
| 1 | (d): "two", with both intervals and their end values |

Total: 5 points. Topics: 1.1, 1.4, 1.16.
</details>

## Question 5 (constructed response · mixed)

For constants a and b, a function f is defined by

- f(x) = sin(a(x − 1))/(x − 1) for x < 1
- f(1) = b
- f(x) = (√(2x + 7) − 3)/(x − 1) for x > 1

(a) Find lim (x → 1⁺) f(x). Name the procedure you use and say why it fits.
(b) Find lim (x → 1⁻) f(x) in terms of a, for a ≠ 0. Justify.
(c) Find a and b so that f is continuous at x = 1. Justify using the definition of continuity.
(d) Now let a = 1 and b = 1/3. Classify the discontinuity of f at x = 1.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Substitution gives (√9 − 3)/0 = 0/0, and the 0 on top comes from a square root, so multiply by the conjugate √(2x + 7) + 3:

(2x + 7 − 9)/((x − 1)(√(2x + 7) + 3)) = 2(x − 1)/((x − 1)(√(2x + 7) + 3)) = 2/(√(2x + 7) + 3), for x ≠ 1.

So lim (x → 1⁺) f(x) = 2/(3 + 3) = **1/3**.

**(b)** Let u = x − 1, so u → 0⁻ as x → 1⁻. Then sin(au)/u = a × sin(au)/(au). As u → 0, au → 0, and sin(au)/(au) → 1. So lim (x → 1⁻) f(x) = **a**.

**(c)** The limit at 1 exists only if the one-sided limits agree: a = 1/3. Then lim (x → 1) f(x) = 1/3. For continuity, f(1) must exist and equal this limit, so b = 1/3. With **a = 1/3 and b = 1/3**, f(1) is defined, the limit exists, and they are equal.

**(d)** With a = 1 the left-hand limit is 1 and the right-hand limit is 1/3. They differ, so the limit does not exist: a **jump discontinuity**. (The value b = 1/3 cannot fix it.)

| Point | What earns it |
|---|---|
| 1 | Conjugate method chosen, with the 0/0 form from a square root as the reason |
| 1 | Right-hand limit 1/3, with correct algebra |
| 1 | Left-hand limit a, using sin u/u → 1 |
| 1 | a = 1/3 from equal one-sided limits |
| 1 | b = 1/3, with all three continuity conditions stated |
| 1 | Jump, because the one-sided limits (1 and 1/3) differ |

Total: 6 points. Topics: 1.6, 1.7, 1.8, 1.10, 1.11, 1.13.
</details>

## Question 6 (constructed response · mixed)

Let R(x) = (x² − 5x + 4)/(2x² − 2x − 24).

(a) State the largest intervals on which R is continuous. Give a reason.
(b) Classify each discontinuity of R. Justify with limits, and give the coordinates of any hole.
(c) Find lim (x → −3⁻) R(x) and lim (x → −3⁺) R(x).
(d) Find lim (x → ∞) R(x) and lim (x → −∞) R(x). Does the graph of R ever cross its horizontal asymptote? Show your reasoning.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

Factor: top (x − 1)(x − 4); bottom 2(x² − x − 12) = 2(x − 4)(x + 3). For x ≠ 4, R(x) = (x − 1)/(2(x + 3)).

**(a)** R is rational, so it is continuous on its domain. The bottom is 0 at x = 4 and x = −3. Largest intervals: **(−∞, −3), (−3, 4) and (4, ∞)**.

**(b)** At x = 4: lim (x → 4) R(x) = 3/(2 × 7) = 3/14, a finite limit, but R(4) is undefined. **Removable**, with a hole at **(4, 3/14)**. At x = −3: the simplified top is −4 and the bottom tends to 0, so R is unbounded. **Discontinuity due to a vertical asymptote**, x = −3.

**(c)** Top → −4 (negative). For x just below −3, 2(x + 3) is small and negative, so R → **+∞**. For x just above −3, the bottom is small and positive, so R → **−∞**.

**(d)** Divide by x: (1 − 1/x)/(2 + 6/x) → **1/2** in both directions. So y = 1/2 is the horizontal asymptote. Solve (x − 1)/(2x + 6) = 1/2: 2x − 2 = 2x + 6, which gives −2 = 6, impossible. **The graph never crosses y = 1/2.**

| Point | What earns it |
|---|---|
| 1 | Three intervals, with the reason (rational, continuous on its domain) |
| 1 | x = 4 removable, justified by the finite limit, with hole (4, 3/14) |
| 1 | x = −3 vertical asymptote, justified by unbounded values |
| 1 | Both one-sided limits at −3 with a sign argument |
| 1 | Both limits at infinity equal 1/2 |
| 1 | Shows the equation R(x) = 1/2 has no solution |

Total: 6 points. Topics: 1.10, 1.12, 1.13, 1.14, 1.15.
</details>

## Question 7 (constructed response · mixed)

Let h(x) = x² cos(π/x) + 2 for x ≠ 0, and h(0) = k, where k is a constant.

(a) Show that cos(π/x) equals 1 at x = 1/2, 1/4, 1/6, … and −1 at x = 1/3, 1/5, 1/7, …. Explain why this means the limit properties cannot be used to find lim (x → 0) h(x).
(b) Use the squeeze theorem to find lim (x → 0) h(x).
(c) Find k so that h is continuous at x = 0.
(d) Using your value of k, show that h(c) = 1.5 for some c in (0, 1).
(e) If instead k = 5, does the Intermediate Value Theorem still guarantee a c in (0, 1) with h(c) = 1.5? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** At x = 1/(2n), π/x = 2nπ and cos(2nπ) = 1. At x = 1/(2n + 1), π/x = (2n + 1)π and cos((2n + 1)π) = −1. Both kinds of point occur as close to 0 as you like, so cos(π/x) oscillates and has no limit at 0. The product property needs the limit of each factor, so it cannot be used on x² cos(π/x).

**(b)** For x ≠ 0, −1 ≤ cos(π/x) ≤ 1. Multiply by x² > 0 and add 2: 2 − x² ≤ h(x) ≤ 2 + x². Both bounds tend to 2 as x → 0. By the squeeze theorem, **lim (x → 0) h(x) = 2**.

**(c)** Continuity needs h(0) = lim (x → 0) h(x), so **k = 2**.

**(d)** For x ≠ 0, h is built from continuous functions (π/x is continuous for x ≠ 0, cos is continuous), so h is continuous on (0, 1]. With k = 2 it is also continuous at 0, so h is continuous on [0, 1]. h(0) = 2 and h(1) = cos(π) + 2 = 1. Since 1 < 1.5 < 2, the Intermediate Value Theorem gives c in (0, 1) with h(c) = 1.5.

**(e)** No. With k = 5, h is not continuous at 0 (h(0) = 5 but the limit is 2), so h is not continuous on [0, 1] and the theorem does not apply. This does not mean no such c exists; the theorem simply makes no promise.

| Point | What earns it |
|---|---|
| 1 | Both values of cos(π/x) shown, and the reason the product property fails |
| 1 | Correct bounds 2 − x² ≤ h(x) ≤ 2 + x² for x ≠ 0 |
| 1 | Limit 2, with both bounds shown to tend to 2 |
| 1 | k = 2 |
| 1 | (d): continuity on [0, 1] (including x = 0), h(0) and h(1), the theorem named |
| 1 | (e): theorem does not apply because continuity at 0 fails; "no guarantee" is not "no solution" |

Total: 6 points. Topics: 1.3, 1.8, 1.11, 1.13, 1.16.
</details>

## How did you do?

Add up your points from Questions 4–7 (23 in total) and your correct answers to Questions 1–3. The total is only a guide to how secure you are across the unit; it is not a predicted exam score. More useful is to look at **which topics** your lost points came from (each answer lists them), then tick off those topic checklists:

[1.1](/advanced-course-resources/calculus-ab/1-1-introducing-calculus-change-occur-instant-checklist/) ·
[1.2](/advanced-course-resources/calculus-ab/1-2-defining-limits-limit-notation-checklist/) ·
[1.3](/advanced-course-resources/calculus-ab/1-3-estimating-limit-values-graphs-checklist/) ·
[1.4](/advanced-course-resources/calculus-ab/1-4-estimating-limit-values-tables-checklist/) ·
[1.5](/advanced-course-resources/calculus-ab/1-5-determining-limits-algebraic-properties-limits-checklist/) ·
[1.6](/advanced-course-resources/calculus-ab/1-6-limits-by-algebraic-manipulation-checklist/) ·
[1.7](/advanced-course-resources/calculus-ab/1-7-selecting-procedures-determining-limits-checklist/) ·
[1.8](/advanced-course-resources/calculus-ab/1-8-determining-limits-squeeze-theorem-checklist/) ·
[1.9](/advanced-course-resources/calculus-ab/1-9-connecting-multiple-representations-limits-checklist/) ·
[1.10](/advanced-course-resources/calculus-ab/1-10-exploring-types-discontinuities-checklist/) ·
[1.11](/advanced-course-resources/calculus-ab/1-11-defining-continuity-point-checklist/) ·
[1.12](/advanced-course-resources/calculus-ab/1-12-confirming-continuity-over-interval-checklist/) ·
[1.13](/advanced-course-resources/calculus-ab/1-13-removing-discontinuities-checklist/) ·
[1.14](/advanced-course-resources/calculus-ab/1-14-connecting-infinite-limits-vertical-asymptotes-checklist/) ·
[1.15](/advanced-course-resources/calculus-ab/1-15-connecting-limits-infinity-horizontal-asymptotes-checklist/) ·
[1.16](/advanced-course-resources/calculus-ab/1-16-working-intermediate-value-theorem-ivt-checklist/)

If many topics need work, go back to the [Unit 1 diagnostic](/advanced-course-resources/calculus-ab/unit-1-diagnostic/) and use its "Your next step" table to choose where to start.
