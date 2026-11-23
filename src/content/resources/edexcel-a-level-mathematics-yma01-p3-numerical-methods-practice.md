---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Numerical methods (P3.6) -- Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P3: Pure Mathematics 3"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 3.6
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p3-pure-mathematics-3-edexcel-alevel-maths"
    subtopic: "p3-numerical-methods-edexcel-alevel-maths"
description: "Original practice questions with full answers on locating roots by change of sign and solving equations by iteration for Edexcel IAL Maths Unit P3 (YMA01)."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

These questions cover section 6 of Unit P3 (YMA01, Issue 3): locating roots by change of sign and approximate solution of equations by iteration. Revise first with the [P3 numerical methods study guide](/resources/edexcel-a-level-mathematics-yma01-p3-numerical-methods/) and the [P3 numerical methods revision notes](/resources/edexcel-a-level-mathematics-yma01-p3-numerical-methods-revision-notes/). Angles are in radians throughout.

---

## Section A

**1.** Show that the equation x³ + x − 3 = 0 has a root between x = 1 and x = 2. **[2]**

**2.** A student evaluates tan 1 and tan 2 and concludes that tan x = 0 has a root between x = 1 and x = 2. Explain why the student is wrong. **[2]**

**3.** f(x) = x² − 3x + 2.

**(a)** Find f(0.5) and f(2.5). **[1]**

**(b)** A student concludes that f(x) = 0 has no roots between 0.5 and 2.5. Explain why this is wrong, and state the roots. **[2]**

**4.** g(x) = (2x − 3)/(x − 1), x ≠ 1.

**(a)** Find g(0) and g(2). **[1]**

**(b)** g(x) = 0 has a root at x = 1.5. Explain why there is no change of sign between g(0) and g(2). **[2]**

## Section B

**5.** f(x) = x⁴ − 3x − 5.

**(a)** Show that f(x) = 0 has a root α in the interval [1.7, 1.8]. **[2]**

**(b)** Show that f(x) = 0 can be written as x = (3x + 5)^(1/4). **[1]**

**(c)** Use the iteration xₙ₊₁ = (3xₙ + 5)^(1/4) with x₀ = 1.8 to find x₁, x₂ and x₃, giving each to 4 decimal places. **[3]**

**(d)** By choosing a suitable interval, show that α = 1.795 correct to 3 decimal places. **[3]**

**6.** f(x) = x ln x − 2, x > 0.

**(a)** Show that f(x) = 0 has a root α between x = 2 and x = 3. **[2]**

**(b)** Show that f(x) = 0 can be written as x = e^(2/x). **[2]**

**(c)** Use xₙ₊₁ = e^(2/xₙ) with x₀ = 2.3 to find x₁, x₂ and x₃ to 3 decimal places. **[2]**

**(d)** Describe how the values in part (c) approach α. **[1]**

**(e)** Another student uses xₙ₊₁ = 2/ln xₙ with x₀ = 2.3 and obtains 2.401, 2.283, 2.423, 2.260, ... State what these values suggest about this iteration. **[1]**

**7.** f(x) = x³ − 5x + 1.

**(a)** Show that f(x) = 0 has a root α between 0 and 1. **[2]**

**(b)** Use xₙ₊₁ = (xₙ³ + 1)/5 with x₀ = 0.5 to find x₁, x₂ and x₃ to 4 decimal places. **[3]**

**(c)** Show that α = 0.202 correct to 3 decimal places. **[3]**

**8.** Show that the equation e^(−x) = x has a root α with α = 0.567 correct to 3 decimal places. **[3]**

**9.** f(x) = x³ + 2x² − 7.

**(a)** Show that f(x) = 0 has a root α between 1 and 2. **[2]**

**(b)** Show that f(x) = 0 can be written as x = √(7/(x + 2)). **[2]**

**(c)** Use xₙ₊₁ = √(7/(xₙ + 2)) with x₀ = 1.5 to find x₁, x₂ and x₃ to 4 decimal places. **[3]**

**(d)** Show that α = 1.429 correct to 3 decimal places. **[3]**

**10.** f(x) = 3 sin x − x − 1.

**(a)** Show that f(x) = 0 has a root α in the interval [0.5, 0.6]. **[2]**

**(b)** Show that f(x) = 0 can be written as x = arcsin((x + 1)/3). **[1]**

**(c)** Use xₙ₊₁ = arcsin((xₙ + 1)/3) with x₀ = 0.5 to find x₁, x₂ and x₃ to 4 decimal places. **[3]**

**(d)** Show that α = 0.538 correct to 3 decimal places. **[3]**

---

## Answers

**1.** Let f(x) = x³ + x − 3. f(1) = −1 < 0 and f(2) = 7 > 0 [1]. There is a change of sign and f is continuous, so there is a root between 1 and 2 [1].

**2.** tan 1 = 1.557 > 0 and tan 2 = −2.185 < 0, so there is a change of sign [1]. But tan x is not continuous on [1, 2]: it has an asymptote at x = π/2 ≈ 1.571, where the sign changes without a root (tan x = 0 only at multiples of π) [1].

**3. (a)** f(0.5) = 0.25 − 1.5 + 2 = **0.75** and f(2.5) = 6.25 − 7.5 + 2 = **0.75** [1].

**(b)** No change of sign does not mean no root: there could be an even number of roots in the interval [1]. Here f(x) = (x − 1)(x − 2), so the roots are **x = 1 and x = 2** [1].

Total: 3

**4. (a)** g(0) = (−3)/(−1) = **3** and g(2) = 1/1 = **1** [1].

**(b)** g is not continuous on [0, 2]: it has an asymptote at x = 1 [1]. The sign changes at the asymptote and again at the root x = 1.5, so the two changes cancel and g(0) and g(2) have the same sign [1].

Total: 3

**5. (a)** f(1.7) = 8.3521 − 5.1 − 5 = −1.748 < 0 and f(1.8) = 10.4976 − 5.4 − 5 = 0.0976 > 0 [1]. Change of sign, and f is continuous, so there is a root in [1.7, 1.8] [1].

**(b)** x⁴ − 3x − 5 = 0 ⇒ x⁴ = 3x + 5 ⇒ x = (3x + 5)^(1/4), taking the positive root [1].

**(c)** **x₁ = 1.7958** [1], **x₂ = 1.7953** [1], **x₃ = 1.7952** [1].

**(d)** Choose [1.7945, 1.7955] [1]. f(1.7945) = −0.0136 < 0 and f(1.7955) = 0.0065 > 0 [1]. Change of sign and f continuous, so 1.7945 < α < 1.7955, and α = 1.795 to 3 decimal places [1].

Total: 9

**6. (a)** f(2) = 2 ln 2 − 2 = −0.614 < 0 and f(3) = 3 ln 3 − 2 = 1.296 > 0 [1]. Change of sign, and f is continuous for x > 0, so there is a root between 2 and 3 [1].

**(b)** x ln x − 2 = 0 ⇒ ln x = 2/x [1] ⇒ x = e^(2/x) [1].

**(c)** **x₁ = 2.386, x₂ = 2.312** [1], **x₃ = 2.375** [1].

**(d)** The values lie alternately above and below α and get closer to it (a cobweb pattern of convergence) [1].

**(e)** The values move alternately up and down and further apart, so this iteration diverges and does not find α [1].

Total: 8

**7. (a)** f(0) = 1 > 0 and f(1) = 1 − 5 + 1 = −3 < 0 [1]. Change of sign, and f is continuous, so there is a root between 0 and 1 [1].

**(b)** **x₁ = 0.2250** [1], **x₂ = 0.2023** [1], **x₃ = 0.2017** [1].

**(c)** Choose [0.2015, 0.2025] [1]. f(0.2015) = 0.00068 > 0 and f(0.2025) = −0.0042 < 0 [1]. Change of sign and f continuous, so α = 0.202 to 3 decimal places [1].

Total: 8

**8.** Let f(x) = e^(−x) − x and choose the interval [0.5665, 0.5675] [1]. f(0.5665) = 0.0010 > 0 and f(0.5675) = −0.00056 < 0 [1]. There is a change of sign and f is continuous, so 0.5665 < α < 0.5675 and α = 0.567 to 3 decimal places [1].

**9. (a)** f(1) = 1 + 2 − 7 = −4 < 0 and f(2) = 8 + 8 − 7 = 9 > 0 [1]. Change of sign, and f is continuous, so there is a root between 1 and 2 [1].

**(b)** x³ + 2x² = 7 ⇒ x²(x + 2) = 7 [1] ⇒ x² = 7/(x + 2) ⇒ x = √(7/(x + 2)), taking the positive root [1].

**(c)** **x₁ = 1.4142** [1], **x₂ = 1.4319** [1], **x₃ = 1.4282** [1].

**(d)** Choose [1.4285, 1.4295] [1]. f(1.4285) = −0.0038 < 0 and f(1.4295) = 0.0081 > 0 [1]. Change of sign and f continuous, so α = 1.429 to 3 decimal places [1].

Total: 10

**10. (a)** f(0.5) = 3 sin 0.5 − 1.5 = −0.0617 < 0 and f(0.6) = 3 sin 0.6 − 1.6 = 0.0939 > 0 [1]. Change of sign, and f is continuous, so there is a root in [0.5, 0.6] [1].

**(b)** 3 sin x = x + 1 ⇒ sin x = (x + 1)/3 ⇒ x = arcsin((x + 1)/3), for a root in the range of arcsin [1].

**(c)** **x₁ = arcsin 0.5 = 0.5236** [1], **x₂ = 0.5327** [1], **x₃ = 0.5362** [1].

**(d)** Choose [0.5375, 0.5385] [1]. f(0.5375) = −0.0015 < 0 and f(0.5385) = 0.000047 > 0 [1]. Change of sign and f continuous, so α = 0.538 to 3 decimal places [1].

Total: 9

## Where marks are usually lost

- Leaving out "f is continuous" from a change-of-sign conclusion.
- In Questions 5(d), 7(c), 9(d) and 10(d), testing the wrong interval, such as 1.794 and 1.796 instead of the rounding bounds.
- Giving iterates to the wrong number of decimal places, or rounding and retyping them.
- In Question 10, using degrees: arcsin 0.5 must be 0.5236 radians, not 30.
- In Questions 2 to 4, saying only "the test does not work" without naming the reason (a discontinuity, or an even number of roots).
