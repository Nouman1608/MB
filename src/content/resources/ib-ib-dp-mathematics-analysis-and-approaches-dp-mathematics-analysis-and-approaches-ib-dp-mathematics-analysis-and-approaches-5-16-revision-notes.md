---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.16 Integration by substitution and by parts (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.16
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-16"
description: "Revision notes for IB DP Maths AA HL section 5.16: substitution with new limits, integration by parts, repeated and cyclic parts, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 5.16 of IB DP Mathematics: Analysis and Approaches: integration by substitution, integration by parts and repeated integration by parts**. It is AHL content, examined at HL only. Worked examples are in the [section 5.16 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-16/).

## Substitution

1. From the substitution, write x and dx in terms of u and du.
2. Replace every x-term and dx.
3. Definite integral: convert the limits to u-values; do not substitute back.
4. Indefinite integral: substitute back to x; add + C.

- In examinations, a substitution is provided unless the integral is of the form ∫ k g′(x) f(g(x)) dx.
- Typical substitutions: u = ax + b (removes a leftover x), u = x² + c, u = √x or 1 + √x, u = eˣ, x = sin θ (for √(1 − x²)).
- Check: the integrand must contain no x after step 2.

## Integration by parts

```
∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx
∫ₐᵇ u (dv/dx) dx = [uv]ₐᵇ − ∫ₐᵇ v (du/dx) dx
```

- Choose u: logarithm, then inverse trig, then power of x, then trig or exponential.
- ln x, arcsin x, arctan x on their own: write as 1 × f(x) with u = f(x), dv/dx = 1.
- xⁿ times eˣ, sin or cos: n applications.
- eᵃˣ sin bx or eᵃˣ cos bx: two applications return the original integral I; keep the same type of u both times; solve the linear equation for I.

## Standard results worth recognising

| Integral | Result (+ C) |
|---|---|
| ∫ ln x dx | x ln x − x |
| ∫ x eˣ dx | (x − 1)eˣ |
| ∫ x sin x dx | sin x − x cos x |
| ∫ x cos x dx | cos x + x sin x |
| ∫ arcsin x dx | x arcsin x + √(1 − x²) |
| ∫ arctan x dx | x arctan x − (1/2) ln(1 + x²) |

## Worked mini-examples

**Leftover x.** ∫ x√(2x − 1) dx with u = 2x − 1: x = (u + 1)/2, dx = du/2, so (1/4)∫ (u^(3/2) + u^(1/2)) du = (1/10)(2x − 1)^(5/2) + (1/6)(2x − 1)^(3/2) + C.

**Changing limits.** ∫₀^(ln √3) eˣ/(e^(2x) + 1) dx with u = eˣ: limits 1 and √3, integrand 1/(u² + 1), answer π/3 − π/4 = π/12.

**Cyclic.** For ∫ e^(2x) sin x dx, two applications give I = (1/2)e^(2x) sin x − (1/4)e^(2x) cos x − (1/4)I, so I = (1/5)e^(2x)(2 sin x − cos x) + C.

## Key terms

| Term | Meaning |
|---|---|
| Substitution | change of variable u = g(x) or x = h(u) to simplify an integral |
| Changing the limits | replacing x-limits by the corresponding u-values |
| Integration by parts | the integral form of the product rule |
| Repeated parts | applying parts more than once, each time simplifying u |
| Cyclic integral | one where parts returns a multiple of the original integral |

## Exam traps

- A dx left unconverted: x dx and du are not interchangeable without the factor.
- New limits forgotten, or old and new limits mixed.
- u chosen as the factor that gets harder (u = eˣ next to x, or u = x² next to ln x).
- v from sin x is −cos x: track the sign through every line.
- [uv] not evaluated at the limits in a definite integral.
- Dividing by the wrong coefficient when solving a cyclic integral for I.

## Self-test

1. Use u = x + 1 to find ∫ x(x + 1)⁵ dx.
2. Use u = x + 1 to find ∫ x/(x + 1)³ dx.
3. ∫ x e^(−2x) dx
4. ∫ (ln x)/x² dx
5. ∫ x sec²x dx
6. ∫ arcsin x dx
7. ∫ eˣ cos 2x dx
8. ∫₀¹ x² eˣ dx
9. ∫₁^e x ln x dx
10. Use x = 2 sin θ to show that ∫₀² √(4 − x²) dx = π.
11. Use u = 4 − x² to find ∫₀¹ x/√(4 − x²) dx.
12. Explain why u = x is a poor choice for ∫ x ln x dx.

## Answers

1. x = u − 1: ∫ (u⁶ − u⁵) du = (x + 1)⁷/7 − (x + 1)⁶/6 + C
2. ∫ (u − 1)/u³ du = ∫ (u⁻² − u⁻³) du = −1/(x + 1) + 1/(2(x + 1)²) + C
3. u = x, v = −(1/2)e^(−2x): −(x/2)e^(−2x) − (1/4)e^(−2x) + C
4. u = ln x, v = −1/x: −(ln x)/x − 1/x + C
5. u = x, v = tan x: x tan x − ∫ tan x dx = x tan x + ln|cos x| + C
6. x arcsin x − ∫ x/√(1 − x²) dx = x arcsin x + √(1 − x²) + C
7. Two applications with u = cos 2x then u = sin 2x: (1/5)eˣ(cos 2x + 2 sin 2x) + C
8. [x²eˣ]₀¹ − 2∫₀¹ x eˣ dx = e − 2(1) = e − 2
9. [(x²/2) ln x]₁^e − ∫₁^e x/2 dx = e²/2 − (e² − 1)/4 = (e² + 1)/4
10. dx = 2 cos θ dθ, limits 0 to π/2: ∫ 4 cos²θ dθ = [2θ + sin 2θ]₀^(π/2) = π
11. du = −2x dx, limits 4 to 3: (1/2)∫₃⁴ u^(−1/2) du = [√u]₃⁴ = 2 − √3
12. dv/dx would be ln x, which you would have to integrate; take u = ln x, dv/dx = x instead.

## Where next

Practise with the [section 5.16 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-16-practice/), and see the [AA HL further calculus revision notes](/resources/ib-dp-mathematics-aa-hl-further-calculus-revision-notes/) for the wider HL unit.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section AHL 5.16.
