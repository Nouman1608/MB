---
title: "Cambridge A Level Mathematics (9709): Differential equations (Pure Mathematics 3) -- Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 3 – Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.8
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "differential-equations-cambridge-alevel-maths"
description: "Twelve original Cambridge 9709 Paper 3 differential equations questions with marked answers on forming, separating, particular solutions and context."
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

These questions cover section **3.8 Differential equations** of Pure Mathematics 3 (Paper 3) in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027. All equations are first order with separable variables. Give non-exact answers to 3 significant figures. The number in square brackets after the last part of each question is the total for the whole question.

Related: the [3.8 study guide](/resources/cambridge-a-level-mathematics-9709-differential-equations/) and the [3.8 revision notes](/resources/cambridge-a-level-mathematics-9709-differential-equations-revision-notes/).

## Questions

### Section A: short questions

**1.** The mass m grams of a substance decreases at a rate proportional to the square root of m. Write down a differential equation relating m and the time t. **[2]**

**2.** At every point (x, y) on a curve, the gradient is proportional to the product of x and y. At the point (1, 2) the gradient is 3. Form a differential equation for the curve, evaluating the constant of proportionality. **[2]**

**3.** Find the general solution of dy/dx = 3x²y, giving y in terms of x. **[3]**

**4.** Solve the differential equation dy/dx = e^(x + y), given that y = 0 when x = 0. Give y in terms of x. **[4]**

**5.** Solve dy/dx = (y + 1)/x, for x > 0, given that y = 2 when x = 1. **[3]**

**6.** Solve dy/dx = cos²y, given that y = π/4 when x = 0. Give y in terms of x. **[3]**

### Section B: longer questions

**7.** A cup of coffee is left in a room kept at 20°C. At time t minutes its temperature is θ °C. The rate of decrease of θ is proportional to θ − 20. When t = 0, θ = 90, and when t = 5, θ = 62.

**(a)** Write down a differential equation relating θ and t.

**(b)** Solve it to find θ in terms of t.

**(c)** Find the time at which the temperature reaches 40°C.

**(d)** State what happens to θ as t becomes large. **[8]**

**8.** The variables x and y satisfy dy/dx = xe^(2x)/y, and y = 1 when x = 0. Solve the differential equation, giving y in terms of x. **[6]**

**9.** The variables x and t satisfy dx/dt = ½(9 − x²), where 0 ≤ x < 3, and x = 0 when t = 0.

**(a)** Express 1/(9 − x²) in partial fractions.

**(b)** Solve the differential equation, giving x in terms of t.

**(c)** State what happens to x as t becomes large. **[8]**

**10.** Solve the differential equation dy/dx = (1 + y²) sin x, given that y = 0 when x = 0, and find the value of y when x = π/3. **[5]**

**11.** Water is poured into a container at a constant rate of 30 cm³ per second. Water leaks out at a rate proportional to the volume V cm³ in the container. When V = 1000, the volume is increasing at 10 cm³ per second. Initially the container is empty.

**(a)** Show that dV/dt = 30 − 0.02V.

**(b)** Solve this equation to find V in terms of t.

**(c)** State the volume that the model predicts in the long term. **[8]**

**12.** The variables x and y satisfy dy/dx = (x + 1)e^(−y), and y = 0 when x = 0.

**(a)** Solve the differential equation, giving y in terms of x.

**(b)** Find the positive value of x for which y = ln 5. **[6]**

## Answers

**1.** dm/dt is proportional to √m [1]. **dm/dt = −k√m**, where k is a positive constant [1]

**2.** dy/dx = kxy [1]. At (1, 2): 3 = 2k, so k = 3/2 and **dy/dx = 3xy/2** [1]

**3.** ∫ 1/y dy = ∫ 3x² dx [1]. ln|y| = x³ + c [1]. **y = Ae^(x³)** [1]

**4.** ∫ e^(−y) dy = ∫ eˣ dx [1]. −e^(−y) = eˣ + c [1]. x = 0, y = 0: −1 = 1 + c, so c = −2 [1]. e^(−y) = 2 − eˣ, so **y = −ln(2 − eˣ)** [1]

*Examiner insight:* e^(x + y) = eˣeʸ; dividing by eʸ gives e^(−y) on the left, which is where the minus signs come from.

**5.** ∫ 1/(y + 1) dy = ∫ 1/x dx, so ln|y + 1| = ln x + c [1]. y + 1 = Ax, and x = 1, y = 2 gives A = 3 [1]. **y = 3x − 1** [1]

**6.** ∫ sec²y dy = ∫ 1 dx [1]. tan y = x + c, and y = π/4 at x = 0 gives c = 1 [1]. **y = tan⁻¹(x + 1)** [1]

**7.** **(a)** **dθ/dt = −k(θ − 20)**, k > 0 [1]

**(b)** ∫ 1/(θ − 20) dθ = ∫ −k dt, so ln(θ − 20) = −kt + c [1]. t = 0: c = ln 70 [1]. t = 5: ln 42 = −5k + ln 70, so k = (1/5) ln(5/3) = 0.102 [1]. **θ = 20 + 70e^(−0.102t)** [1]

**(c)** 70e^(−kt) = 20, so e^(−kt) = 2/7 [1]. t = ln 3.5/0.10217 = **12.3 minutes** [1]

**(d)** e^(−kt) → 0, so θ approaches **20°C**, the room temperature [1]

**8.** ∫ y dy = ∫ xe^(2x) dx [1]. By parts: ∫ xe^(2x) dx = ½xe^(2x) − ∫ ½e^(2x) dx [1] = ½xe^(2x) − ¼e^(2x) [1]. y²/2 = ½xe^(2x) − ¼e^(2x) + c, and x = 0, y = 1 gives ½ = −¼ + c, so c = ¾ [1]. y² = xe^(2x) − ½e^(2x) + 3/2 [1]. y = 1 > 0 at the start, so **y = √(xe^(2x) − ½e^(2x) + 3/2)** [1]

**9.** **(a)** 1 ≡ A(3 + x) + B(3 − x) [1]. A = B = 1/6: **1/(9 − x²) = 1/(6(3 − x)) + 1/(6(3 + x))** [1]

**(b)** ∫ 2/(9 − x²) dx = ∫ 1 dt [1]. ⅓[−ln(3 − x) + ln(3 + x)] [1] = t + c, so ⅓ ln((3 + x)/(3 − x)) = t + c [1]. t = 0, x = 0: c = 0 [1]. (3 + x)/(3 − x) = e^(3t), so **x = 3(e^(3t) − 1)/(e^(3t) + 1)** [1]

**(c)** Dividing by e^(3t), x = 3(1 − e^(−3t))/(1 + e^(−3t)) → **3** [1]

*Examiner insight:* the negative sign from ∫ 1/(3 − x) dx is the step most often lost; differentiate your answer to check.

**10.** ∫ 1/(1 + y²) dy = ∫ sin x dx [1]. tan⁻¹ y = −cos x + c [1]. x = 0, y = 0: c = 1 [1]. **y = tan(1 − cos x)** [1]. At x = π/3: y = tan(½) = **0.546** [1]

**11.** **(a)** Water in at 30, out at kV, so dV/dt = 30 − kV [1]. 10 = 30 − 1000k gives k = 0.02, so dV/dt = 30 − 0.02V [1]

**(b)** ∫ 1/(30 − 0.02V) dV = ∫ dt [1]. −50 ln(30 − 0.02V) = t + c [1]. t = 0, V = 0: c = −50 ln 30 [1]. ln(30/(30 − 0.02V)) = t/50, so 30 − 0.02V = 30e^(−t/50) [1]. **V = 1500(1 − e^(−t/50))** [1]

**(c)** As t → ∞, V approaches **1500 cm³** [1]

*Examiner insight:* the long-term value is also where dV/dt = 0, that is 30 = 0.02V, which gives a quick check.

**12.** **(a)** ∫ eʸ dy = ∫ (x + 1) dx [1]. eʸ = ½x² + x + c [1]. x = 0, y = 0: c = 1 [1]. **y = ln(½x² + x + 1)** [1]

**(b)** ½x² + x + 1 = 5, so x² + 2x − 8 = 0 [1]. (x + 4)(x − 2) = 0, so **x = 2** [1]

## Where marks are usually lost

- A missing minus sign for a decreasing quantity.
- Integrating before separating, or adding a constant to both sides.
- Writing e^(g(x) + c) as e^(g(x)) + c.
- Losing the minus sign from ∫ 1/(a − x) dx.
- Stopping at an implicit relation when y in terms of x is required.
- Context answers without units or without reference to the situation.

## Next steps

- [3.8 study guide](/resources/cambridge-a-level-mathematics-9709-differential-equations/)
- [3.8 revision notes](/resources/cambridge-a-level-mathematics-9709-differential-equations-revision-notes/)
- Mixed questions: [Pure 3 algebra and calculus practice](/resources/a-level-mathematics-pure-3-algebra-calculus-practice/)

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for examination in 2026 and 2027, Cambridge University Press & Assessment. Topic 3, Pure Mathematics 3 (for Paper 3): section 3.8 Differential equations.
