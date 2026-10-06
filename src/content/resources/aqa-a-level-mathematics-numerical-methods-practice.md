---
title: "AQA A-Level Mathematics: I: Numerical methods (7357) -- Practice Questions"
seoTitle: "AQA A-Level Maths 7357 Numerical Methods Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "I: Numerical methods"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 10
syllabusTopics:
  - qualification: "a-level"
    topic: "i-numerical-methods-aqa-alevel-maths"
description: "Original practice questions with marked, worked answers on AQA A-Level Maths numerical methods: roots, iteration, Newton-Raphson and the trapezium rule."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **Section I: Numerical methods** (I1 to I4) of the **AQA A-level
Mathematics (7357) specification**, version 1.3, for A-level exams from June 2018 onwards.
Section I is Paper 1 content, and Papers 2 and 3 can also assess any Paper 1 content. A
calculator is required in every 7357 paper, so every question here assumes you have one. Work
in radians wherever trigonometry appears.

Learn the methods first in the [Numerical methods study guide](/resources/aqa-a-level-mathematics-numerical-methods/)
and the [Numerical methods revision notes](/resources/aqa-a-level-mathematics-numerical-methods-revision-notes/).
The [7357 course hub](/boards/aqa/a-level/mathematics/) and the
[printable checklist](/checklists/aqa/a-level/mathematics/) list the rest of the course, and the
free [10-minute diagnostics](/diagnostics/) show which topic to practise next.

## Questions

**1.** Show that the equation x⁴ − 3x − 5 = 0 has a root between x = 1.7 and x = 1.8. **[3]**

**2.** A student says: "f(x) = 3/(x − 2) gives f(1) = −3 and f(3) = 3, so f(x) = 0 has a root
between 1 and 3." Explain why the student is wrong. **[2]**

**3.** The sequence x_(n+1) = ∛(2x_n + 7) has x₁ = 2. Find x₂, x₃ and x₄, giving each to 4
decimal places. **[3]**

**4.** The equation e^x + x² − 4 = 0 has one positive root, α.

**(a)** Show that the equation can be written as x = ln(4 − x²). **[1]**
**(b)** Use x_(n+1) = ln(4 − x_n²) with x₁ = 1 to find x₂, x₃ and x₄ to 4 decimal places. **[2]**
**(c)** Given that g(x) = ln(4 − x²) has g′(x) = −2x/(4 − x²), state whether the iteration
gives a staircase or a cobweb diagram near α ≈ 1.06, and whether it converges. Give a reason. **[2]**

**5.** Use the Newton-Raphson method with x₁ = 1 to find x₂ and x₃ for the equation
x e^x − 3 = 0. Give your answers to 4 decimal places. **[4]**

**6.** f(x) = x³ − 6x² + 9x + 1. The equation f(x) = 0 has one real root, near x = −0.1.

**(a)** Explain why x₁ = 3 cannot be used as a starting value for the Newton-Raphson method. **[1]**
**(b)** Find x₂ when x₁ = 1.1, and explain why this starting value is a poor choice. **[3]**

**7.** I = ∫ from 1 to 2 of √(x³ + 1) dx.

**(a)** Use the trapezium rule with 4 strips to estimate I, to 3 decimal places. **[4]**
**(b)** Given that the second derivative of √(x³ + 1) is 3x(x³ + 4) / [4(x³ + 1)^(3/2)], state
whether your answer to (a) is an overestimate or an underestimate. Give a reason. **[2]**

**8.** The curve y = 1/(1 + x²) is decreasing for x > 0. Using four rectangles of width 0.5,
find a lower bound and an upper bound for ∫ from 0 to 2 of 1/(1 + x²) dx. **[5]**

**9.** The equation x³ − 6x + 2 = 0 has three real roots, near −2.60, 0.34 and 2.26. It is
rearranged as x = (x³ + 2)/6 and the iteration x_(n+1) = (x_n³ + 2)/6 is used.

**(a)** With x₁ = 1, find x₂, x₃ and x₄ to 4 decimal places. **[2]**
**(b)** Describe the shape of the diagram for this iteration near the root 0.34, giving a reason. **[2]**
**(c)** Explain why this iteration cannot be used to find the root near 2.26. **[2]**

**10.** A car moves from rest. Its velocity, v m s⁻¹, is recorded every 2 seconds.

| t (s) | 0 | 2 | 4 | 6 | 8 |
|---|---|---|---|---|---|
| v (m s⁻¹) | 0 | 5.41 | 8.39 | 10.02 | 10.91 |

**(a)** Use the trapezium rule with all the readings to estimate the distance travelled in the
first 8 seconds. **[3]**
**(b)** The velocity is modelled by v = 12(1 − e^(−0.3t)). Use integration to find the distance
predicted by the model for 0 ≤ t ≤ 8, to 2 decimal places. **[3]**
**(c)** Explain, with reference to the shape of the velocity-time graph, why your answer to (a)
is smaller than your answer to (b). **[2]**

**11.** A chord of a circle with radius r subtends an angle θ radians at the centre. The minor
segment it cuts off has an area equal to one third of the area of the circle.

**(a)** Show that θ − sin θ − 2π/3 = 0. **[2]**
**(b)** Show that this equation has a root between θ = 2.5 and θ = 2.7. **[2]**
**(c)** Use the Newton-Raphson method with θ₁ = 2.6 to find θ₂, to 4 decimal places. **[3]**
**(d)** Show that θ = 2.61 to 3 significant figures. **[2]**

## Answers

**1.** Let p(x) = x⁴ − 3x − 5. p(1.7) = −1.7479 and p(1.8) = 0.0976 [1]. One is negative and
one positive: a change of sign [1]. p is a polynomial, so it is continuous, and **there is a root
between 1.7 and 1.8** [1]. **[3]**
*Examiner insight:* the conclusion needs both the change of sign and a statement that there is a root in the interval; values with no concluding sentence usually lose the final mark.

**2.** f is not continuous on [1, 3]: it has a vertical asymptote at x = 2, where the sign
changes [1]. 3/(x − 2) is never zero, so **there is no root** [1]. **[2]**
*Examiner insight:* name the discontinuity at x = 2 specifically; "the graph is weird" or "f is not well-behaved" with no location is too vague for credit.

**3.** x₂ = ∛11 = **2.2240** [1], x₃ = **2.2538** [1], x₄ = **2.2577** [1]. **[3]**
*Examiner insight:* keep full calculator values between steps (use Ans); rounding x₂ before finding x₃ can change the fourth decimal place.

**4. (a)** e^x = 4 − x², so taking natural logs, x = ln(4 − x²) [1].
**(b)** x₂ = ln 3 = 1.0986 [1]; **x₃ = 1.0271, x₄ = 1.0801** [1].
**(c)** g′(1.06) ≈ −2.12/2.88 ≈ −0.74, which is between −1 and 0 [1]. So it is a **cobweb**
and it **converges**: the iterates alternate either side of α, as in (b) [1]. **[5]**
*Examiner insight:* a "show that" with one mark still needs the step e^x = 4 − x² written before taking logs; jumping straight to the printed result earns nothing.

**5.** f(x) = x e^x − 3, so f′(x) = (x + 1)e^x [1].
x₂ = 1 − (e − 3)/(2e) = 1 − (−0.28172)/5.43656 [1] = **1.0518** [1].
x₃ = 1.05182 − 0.01121/5.8741 = **1.0499** [1]. **[4]**
*Examiner insight:* differentiating with the product rule is a method step in its own right; a wrong f′ usually loses the accuracy marks that follow, so check it before iterating.

**6. (a)** f′(x) = 3x² − 12x + 9, so f′(3) = 0: the tangent is horizontal and the formula
would divide by zero [1].
**(b)** f(1.1) = 4.971 and f′(1.1) = −0.57 [1]. x₂ = 1.1 − 4.971/(−0.57) = **9.821** [1].
x₁ = 1.1 is close to the stationary point at x = 1, so f′ is small and the step is very large;
x₂ is far from the root near −0.1 [1]. **[4]**
*Examiner insight:* the explanation must link the failure to the stationary point (small or zero gradient), not just say "the answer is wrong".

**7. (a)** h = 0.25 [1]. Ordinates: 1.4142, 1.7185, 2.0917, 2.5218, 3 [1].
I ≈ 0.125 × [1.4142 + 3 + 2(1.7185 + 2.0917 + 2.5218)] [1] = **2.135** [1].
**(b)** For 1 ≤ x ≤ 2 every factor is positive, so the second derivative is positive and the
curve is convex [1]. The chords lie above the curve, so it is an **overestimate** [1]. **[6]**
*Examiner insight:* "overestimate" with no reason is not enough; the mark goes to the link between the sign of the second derivative and where the chords lie.

**8.** y-values at x = 0, 0.5, 1, 1.5, 2: 1, 0.8, 0.5, 0.3077, 0.2 [1].
The curve is decreasing, so left-hand heights give an upper bound [1]:
0.5 × (1 + 0.8 + 0.5 + 0.3077) = **1.3038** [1].
Right-hand heights give a lower bound: 0.5 × (0.8 + 0.5 + 0.3077 + 0.2) = **0.9038** [1].
So **0.9038 < I < 1.3038** [1]. **[5]**
*Examiner insight:* say which rectangles go with which bound and why; swapping them for a decreasing curve gives the right numbers attached to the wrong bounds.

**9. (a)** x₂ = 0.5 [1]; **x₃ = 0.3542, x₄ = 0.3407** [1].
**(b)** g′(x) = x²/2, and g′(0.34) ≈ 0.058, which is between 0 and 1 [1]. So it is a converging
**staircase**: the iterates approach from one side, as in (a) [1].
**(c)** g′(2.26) ≈ 2.55 > 1 [1], so iterates move away from that root (for example, x₁ = 3
gives 4.833, 19.15, ...) and **it cannot be found this way** [1]. **[6]**
*Examiner insight:* a numerical gradient value at the root, compared with 1, makes the reason checkable; "it diverges" alone is usually not enough.

**10. (a)** h = 2 [1]. Distance ≈ (2/2) × [0 + 10.91 + 2(5.41 + 8.39 + 10.02)] [1]
= **58.55 m (about 58.6 m)** [1].
**(b)** ∫ 12(1 − e^(−0.3t)) dt = 12t + 40e^(−0.3t) [1].
[12t + 40e^(−0.3t)] from 0 to 8 = (96 + 40e^(−2.4)) − 40 [1] = **59.63 m** [1].
**(c)** The graph is concave: velocity increases at a decreasing rate [1]. Chords lie below the
curve, so the trapezium rule underestimates the area, which is the distance [1]. **[8]**
*Examiner insight:* units (m) are expected on a distance in context, and the explanation must connect area under the graph to distance travelled.

**11. (a)** Segment area = sector − triangle = ½r²θ − ½r² sin θ [1].
Setting this equal to ⅓πr² and multiplying by 2/r² gives θ − sin θ = 2π/3, so
θ − sin θ − 2π/3 = 0 [1].
**(b)** Let S(θ) = θ − sin θ − 2π/3. S(2.5) = −0.1929 and S(2.7) = 0.1782 [1]. S is continuous,
and there is a change of sign, so **there is a root between 2.5 and 2.7** [1].
**(c)** S′(θ) = 1 − cos θ [1]. θ₂ = 2.6 − (−0.0099)/1.85689 [1] = **2.6053** [1].
**(d)** S(2.605) = −0.00061 and S(2.615) = 0.01801 [1]. Change of sign, so
2.605 < θ < 2.615 and **θ = 2.61 to 3 s.f.** [1]. **[9]**
*Examiner insight:* in (d) the interval must be the rounding bounds 2.605 and 2.615; checking 2.61 and 2.62 does not show the root rounds to 2.61.

## Where marks are usually lost

- Calculator left in degrees for questions 11(b) to 11(d), which gives wrong values for sin θ
  and cos θ.
- A change of sign stated with no values, or with no conclusion about the root.
- Rounding bounds missed when confirming a root to a given accuracy.
- Only the final iterate written when several were asked for.
- Wrong f′ in Newton-Raphson, often a missed product rule term.
- n strips confused with n + 1 ordinates, so h is wrong.
- Over- or underestimate claimed without a reason based on the curve's shape.
- Upper and lower rectangle sums swapped for a decreasing function.
- Context answers given with no units or to an unrealistic accuracy.

## Next steps

- [Numerical methods revision notes](/resources/aqa-a-level-mathematics-numerical-methods-revision-notes/)
- [Numerical methods study guide](/resources/aqa-a-level-mathematics-numerical-methods/)
- [Differentiation practice questions](/resources/aqa-a-level-mathematics-differentiation-practice/), for the f′ work Newton-Raphson needs
- [AQA A-level Mathematics course hub](/boards/aqa/a-level/mathematics/)
- [Printable 7357 checklist](/checklists/aqa/a-level/mathematics/)
- [All free 10-minute diagnostics](/diagnostics/)
- [Book a free trial class](/trial/)

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams
June 2018 onwards, published by AQA. Section 3.10, I: Numerical methods.
