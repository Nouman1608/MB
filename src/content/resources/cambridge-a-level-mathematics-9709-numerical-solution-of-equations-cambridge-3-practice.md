---
title: "Cambridge A Level Mathematics (9709): Numerical solution of equations (Pure Mathematics 3) -- Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 3 – Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.6
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "numerical-solution-of-equations-cambridge-3"
description: "Eleven original Cambridge 9709 Paper 3 questions on numerical methods, with marked answers on sign change, iteration, divergence and roots in context."
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
> these alongside the official past papers from your board or school.

These questions cover section **3.6 Numerical solution of equations** of Pure Mathematics 3 (Paper 3) in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027. Use radians throughout. Unless a question says otherwise, show each iterate to 4 decimal places. The number in square brackets after the last part of each question is the total for the whole question.

Related: the [3.6 study guide](/resources/cambridge-a-level-mathematics-9709-numerical-solution-of-equations-cambridge-3/) and the [3.6 revision notes](/resources/cambridge-a-level-mathematics-9709-numerical-solution-of-equations-cambridge-3-revision-notes/).

## Questions

### Section A: short questions

**1.** Show by calculation that the equation x³ − 5x + 1 = 0 has a root between x = 2 and x = 3. **[2]**

**2.** By sketching suitable graphs on the same diagram, state the number of real roots of the equation eˣ = 4 − x², and give a reason. **[2]**

**3.** The sequence defined by xₙ₊₁ = √(5 + 2/xₙ), with x₁ = 2, converges to α.

**(a)** Show that α³ − 5α − 2 = 0.

**(b)** Given that α > 0, find the exact value of α. **[4]**

**4.** Use the iterative formula xₙ₊₁ = ∛(5xₙ − 1), with x₁ = 2, to find the root of x³ − 5x + 1 = 0 between 2 and 3, correct to 2 decimal places. **[3]**

**5.** A student uses the iteration xₙ₊₁ = (xₙ³ + 1)/5 with x₁ = 2 to try to find the root of x³ − 5x + 1 = 0 between 2 and 3. Calculate x₂, x₃ and x₄, and explain why this iteration does not find that root. **[3]**

**6.** Show by calculation that the root of x³ − 5x + 1 = 0 between 2 and 3 is 2.13 correct to 2 decimal places. **[2]**

### Section B: longer questions

**7.** A circle has centre O and radius r. The points A and B lie on the circle, and angle AOB is θ radians. The length of the minor arc AB is 1.5 times the length of the chord AB.

**(a)** Show that θ = 3 sin(½θ).

**(b)** Verify by calculation that this equation has a root between 2.5 and 3.

**(c)** Use the iterative formula θₙ₊₁ = 3 sin(½θₙ), with θ₁ = 2.5, to find θ correct to 2 decimal places. **[7]**

**8.** It is given that ∫₁^a ln x dx = 2, where a > 1.

**(a)** Show that a = e^(1 + 1/a).

**(b)** Verify by calculation that a lies between 3 and 4.

**(c)** Use the iterative formula aₙ₊₁ = e^(1 + 1/aₙ), with a₁ = 3.5, to find a correct to 2 decimal places. **[8]**

**9.** The curve y = x cos x, for 0 ≤ x ≤ ½π, has a maximum point M.

**(a)** Show that the x-coordinate of M satisfies x = tan⁻¹(1/x).

**(b)** Show by calculation that the x-coordinate of M lies between 0.8 and 0.9.

**(c)** Use the iterative formula xₙ₊₁ = tan⁻¹(1/xₙ), with x₁ = 0.8, to find the x-coordinate of M correct to 2 decimal places. **[8]**

**10.** The sequence defined by xₙ₊₁ = (4xₙ + 18/xₙ³)/5, with x₁ = 2, converges to α.

**(a)** Find the equation satisfied by α and hence state the exact value of α.

**(b)** Use the iteration to find α correct to 3 decimal places, showing each iterate to 5 decimal places. **[6]**

**11.** **(a)** Show that the equation x³ + x − 3 = 0 has a root between 1 and 2.

**(b)** Show that the iteration xₙ₊₁ = 3 − xₙ³, with x₁ = 1.2, does not converge.

**(c)** Use the iteration xₙ₊₁ = ∛(3 − xₙ), with x₁ = 1.2, to find the root correct to 2 decimal places. **[7]**

## Answers

**1.** f(2) = 8 − 10 + 1 = −1 and f(3) = 27 − 15 + 1 = 13 [1]. f is continuous and changes sign, so there is a root between 2 and 3 [1]

**2.** Sketch the increasing curve y = eˣ and the inverted parabola y = 4 − x², which meet twice: once for negative x and once for positive x [1]. **Two** real roots [1]

**3.** **(a)** α = √(5 + 2/α), so α² = 5 + 2/α [1], and multiplying by α gives α³ − 5α − 2 = 0 [1]

**(b)** α = −2 is a root, so α³ − 5α − 2 = (α + 2)(α² − 2α − 1) [1]. α = 1 ± √2; α > 0 and α = −2 is rejected, so **α = 1 + √2** [1]

*Examiner insight:* 1 − √2 is negative, so it cannot be the limit of a sequence of positive square roots.

**4.** x₂ = 2.0801, x₃ = 2.1105, x₄ = 2.1218, x₅ = 2.1260 [1], x₆ = 2.1275, x₇ = 2.1281, x₈ = 2.1283 [1]. Root **2.13** to 2 d.p. [1]

**5.** x₂ = 1.8, x₃ = 1.3664, x₄ = 0.7102 [1]. The iterates move away from the interval 2 to 3 and settle near 0.2016 [1], which is a different root of the equation, so this iteration does not find the root between 2 and 3 [1]

**6.** f(2.125) = −0.0293 and f(2.135) = 0.0568 [1]. The sign changes, so the root lies between 2.125 and 2.135 and is 2.13 to 2 d.p. [1]

**7.** **(a)** Arc AB = rθ; chord AB = 2r sin(½θ) [1]. rθ = 1.5 × 2r sin(½θ), so θ = 3 sin(½θ) [1]

**(b)** Let f(θ) = θ − 3 sin(½θ). f(2.5) = −0.347 and f(3) = 0.0075 [1]. Sign change, so a root lies between 2.5 and 3 [1]

**(c)** 2.8470, 2.9675, 2.9886 [1], 2.9912, 2.9915, 2.9916 [1]. **θ = 2.99** to 2 d.p. [1]

*Examiner insight:* the chord length 2r sin(½θ) comes from splitting the isosceles triangle OAB into two right-angled triangles.

**8.** **(a)** ∫ ln x dx = x ln x − x, by parts [1]. (a ln a − a) − (0 − 1) = 2, so a ln a = a + 1 [1]. ln a = 1 + 1/a, so a = e^(1 + 1/a) [1]

**(b)** Let h(a) = a ln a − a − 1. h(3) = −0.704 and h(4) = 0.545 [1]. Sign change, so 3 < a < 4 [1]

**(c)** 3.6173, 3.5839, 3.5931 [1], 3.5906, 3.5913, 3.5911 [1]. **a = 3.59** to 2 d.p. [1]

**9.** **(a)** dy/dx = cos x − x sin x [1]. At M, cos x = x sin x, so tan x = 1/x [1]. Hence x = tan⁻¹(1/x) [1]

**(b)** Let k(x) = cos x − x sin x. k(0.8) = 0.1228 and k(0.9) = −0.0834 [1]. Sign change, so M has x-coordinate between 0.8 and 0.9 [1]

**(c)** 0.8961, 0.8402, 0.8720, 0.8536 [1], 0.8642, 0.8581, 0.8616, 0.8596, 0.8608 [1]. **x = 0.86** to 2 d.p. [1]

*Examiner insight:* this iteration oscillates, so successive values lie on opposite sides of the root; wait until two successive values round to the same answer.

**10.** **(a)** α = (4α + 18/α³)/5 [1], so 5α = 4α + 18/α³ and α⁴ = 18 [1]. **α = ⁴√18** [1]

**(b)** 2.05000, 2.05787, 2.05939 [1], 2.05969, 2.05975, 2.05976 [1]. **α = 2.060** to 3 d.p. [1]

**11.** **(a)** f(1) = 1 + 1 − 3 = −1 and f(2) = 8 + 2 − 3 = 7; f is continuous with a sign change, so there is a root between 1 and 2 [2]

**(b)** x₂ = 1.272, x₃ = 0.9419, x₄ = 2.1643, x₅ = −7.1381 [1]. The values move further and further from the root, so the iteration diverges [1]

**(c)** 1.2164, 1.2127 [1], 1.2136, 1.2134 [1]. Root **1.21** to 2 d.p. [1]

## Where marks are usually lost

- Sign-change answers with no conclusion, or no mention of continuity.
- Rounding iterates before feeding them back into the formula.
- Stopping when only one iterate has reached the required accuracy.
- Leaving a calculator in degrees for an iteration with sin or tan⁻¹.
- Claiming a diverging or wrongly converging iteration gives the required root.
- Losing the exact form when asked for the limit, such as ⁴√18 or 1 + √2.

## Next steps

- [3.6 study guide](/resources/cambridge-a-level-mathematics-9709-numerical-solution-of-equations-cambridge-3/)
- [3.6 revision notes](/resources/cambridge-a-level-mathematics-9709-numerical-solution-of-equations-cambridge-3-revision-notes/)
- Mixed questions: [Pure 3 trigonometry, vectors and complex numbers practice](/resources/a-level-mathematics-pure-3-trig-vectors-complex-practice/)

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for examination in 2026 and 2027, Cambridge University Press & Assessment. Topic 3, Pure Mathematics 3 (for Paper 3): section 3.6 Numerical solution of equations.
