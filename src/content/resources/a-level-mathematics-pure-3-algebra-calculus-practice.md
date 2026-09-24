---
title: "A Level Mathematics: Pure Mathematics 3 Algebra and Calculus — Practice Questions (Cambridge 9709)"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.1
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
description: "Original exam-style questions with full worked answers on the modulus function, exponential equations, binomial expansions with negative and fractional powers, partial fractions, parametric differentiation, integration by parts and by substitution, and separable differential equations, for Cambridge International AS & A Level Mathematics (9709)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-24
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Each question practises a skill tested in Pure Mathematics 3, most of them skills tested in the June 2025 Paper 32. After each answer there is a tip and, where the paper has a matching question, the real question to try next.

---

## Questions

**1.** Solve the inequality `|3x − 2| < |x + 4|`. **[3]**

**2.** Solve the equation `(2eˣ + 3e⁻ˣ)/(eˣ − 1) = 5`, giving x to 3 decimal places. **[4]**

**3.** **(a)** Find the first three terms, in ascending powers of x, of the expansion of `(2 − x)(1 + 4x)^(−½)`, with each coefficient in its simplest form.
**(b)** For which values of x is this expansion valid? **[4]**

**4.** Express `(5x + 4)/((x − 1)(x + 2)²)` in partial fractions. **[4]**

**5.** A curve is defined by the parametric equations `x = t² + 1` and `y = t³ − 2t`. Find the gradient of the curve at the point where t = 2. **[2]**

**6.** Find the exact value of `∫₁ᵉ x² ln x dx`. **[4]**

**7.** The variables x and y satisfy the differential equation `dy/dx = (2y + 1) tan x`, and y = 1 when x = 0. Solve the differential equation, giving y in terms of x. **[5]**

**8.** By using the substitution u = sin x, find the exact value of `∫₀^(π/2) sin 2x/(1 + sin x) dx`. **[4]**

---

## Answers

**1.** Both sides are non-negative, so square: `9x² − 12x + 4 < x² + 8x + 16` [1]. This gives `8x² − 20x − 12 < 0`, so `2x² − 5x − 3 < 0`, which factorises as `(2x + 1)(x − 3) < 0`, with critical values −½ and 3 [1]. The quadratic is negative between its roots: **−½ < x < 3** [1].

*Tip:* squaring both sides is safe here because both sides are moduli, so both are non-negative. Always check which side of the critical values you need by testing a value such as x = 0.

**2.** Multiply up: `2eˣ + 3e⁻ˣ = 5eˣ − 5`, so `3eˣ − 5 − 3e⁻ˣ = 0` [1]. Multiply by eˣ and let u = eˣ: `3u² − 5u − 3 = 0` [1]. u = (5 ± √61)/6; eˣ must be positive, so u = (5 + √61)/6 = 2.1350… [1]. x = ln 2.1350… = **0.758** [1].

*Tip:* multiplying through by eˣ turns e⁻ˣ into a constant and gives a quadratic in eˣ. Reject any negative value of eˣ and say why.

*Try the real question next:* Cambridge International AS & A Level Mathematics 9709, June 2025, Paper 32, Question 1.

**3.** **(a)** `(1 + 4x)^(−½) = 1 + (−½)(4x) + [(−½)(−3/2)/2](4x)² + …` [1] `= 1 − 2x + 6x² + …` [1]. Then `(2 − x)(1 − 2x + 6x²) = 2 − 4x + 12x² − x + 2x² + …` = **2 − 5x + 14x²** [1].
**(b)** Valid for |4x| < 1, that is **|x| < ¼** [1].

*Tip:* with a fractional power, square the whole term (4x)², not just x, and multiply by the extra bracket only after the series is simplified.

*Try the real question next:* Cambridge International AS & A Level Mathematics 9709, June 2025, Paper 32, Question 2.

**4.** Write `(5x + 4)/((x − 1)(x + 2)²) ≡ A/(x − 1) + B/(x + 2) + C/(x + 2)²`, so `5x + 4 ≡ A(x + 2)² + B(x − 1)(x + 2) + C(x − 1)` [1]. x = 1 gives 9 = 9A, so A = 1; x = −2 gives −6 = −3C, so C = 2 [1]. x = 0 gives 4 = 4A − 2B − C = 2 − 2B, so B = −1 [1]. Answer: **1/(x − 1) − 1/(x + 2) + 2/(x + 2)²** [1].

*Tip:* a repeated factor (x + 2)² needs two fractions, one over (x + 2) and one over (x + 2)². Leaving one out makes the identity impossible to satisfy.

**5.** dx/dt = 2t and dy/dt = 3t² − 2, so dy/dx = (3t² − 2)/(2t) [1]. When t = 2, dy/dx = 10/4 = **5/2** [1].

*Tip:* divide dy/dt by dx/dt, not the other way round.

**6.** Take u = ln x and dv/dx = x², so du/dx = 1/x and v = x³/3 [1]. `∫ x² ln x dx = (x³/3) ln x − ∫ x²/3 dx = (x³/3) ln x − x³/9` [1]. Limits: (e³/3 − e³/9) − (0 − 1/9) [1] = **(2e³ + 1)/9** [1].

*Tip:* when one factor is a logarithm (or an inverse trig function), let u be that factor, because it becomes simpler when you differentiate it.

*Try the real question next:* Cambridge International AS & A Level Mathematics 9709, June 2025, Paper 32, Question 10(b).

**7.** Separate: `∫ 1/(2y + 1) dy = ∫ tan x dx` [1]. `½ ln(2y + 1) = −ln(cos x) + c` [1]. So `ln(2y + 1) = −2 ln(cos x) + k`. When x = 0, y = 1: ln 3 = k [1]. Then `ln(2y + 1) = ln(3 sec² x)`, so `2y + 1 = 3 sec² x` [1], giving **y = (3 sec² x − 1)/2** [1].

*Tip:* remember the ½ when you integrate 1/(2y + 1), and find the constant before you remove the logarithms.

*Try the real question next:* Cambridge International AS & A Level Mathematics 9709, June 2025, Paper 32, Question 8.

**8.** sin 2x = 2 sin x cos x and du = cos x dx, so the integral becomes `∫ 2u/(1 + u) du` [1]. Limits: x = 0 gives u = 0, x = π/2 gives u = 1 [1]. `2u/(1 + u) = 2 − 2/(1 + u)`, so the integral is `[2u − 2 ln(1 + u)]` from 0 to 1 [1] = **2 − 2 ln 2** [1].

*Tip:* change the limits to values of u as soon as you substitute, then you never need to go back to x.

*Try the real question next:* Cambridge International AS & A Level Mathematics 9709, June 2025, Paper 32, Question 11(b).

---

## Where marks are usually lost

- Negative values of eˣ kept instead of being rejected.
- The x in a binomial bracket not multiplied by its coefficient, for example writing x² instead of (4x)².
- A repeated factor in partial fractions given only one fraction.
- The constant of integration found after the logarithms have been removed, or missed altogether.
- Limits left in terms of x after a substitution.
