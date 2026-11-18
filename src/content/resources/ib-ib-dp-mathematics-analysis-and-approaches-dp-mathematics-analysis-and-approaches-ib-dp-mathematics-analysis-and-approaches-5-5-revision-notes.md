---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.5 Introduction to integration as anti-differentiation -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 5 – Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.05
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-5"
description: "Revision notes on IB DP Maths AA section 5.5: anti-derivatives of integer powers, the constant of integration, boundary conditions, area by GDC and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **section 5.5, integration as anti-differentiation**, in IB DP Mathematics:
Analysis and Approaches (first assessment 2021), examined at SL and HL. The
[5.5 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-5/)
explains each idea with worked examples; the
[5.5 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-5-practice/)
test them. Later integration sections are summarised in the
[integration and kinematics revision notes](/resources/ib-dp-mathematics-aa-sl-integration-kinematics-revision-notes/).

## The rules

```
∫ axⁿ dx = a xⁿ⁺¹/(n + 1) + C     n ∈ ℤ, n ≠ −1
∫ k dx = kx + C                    constants
∫ (f + g) dx = ∫ f dx + ∫ g dx     term by term
∫ₐᵇ f(x) dx = area under y = f(x) from a to b, when f(x) > 0 on [a, b]
```

## Condensed recall

- **Scope of 5.5.** Integer powers except −1; boundary conditions; definite integrals and areas
  (f(x) > 0) found with technology. Roots, trigonometric, exponential and 1/x integrals come in 5.10;
  definite integrals by hand and areas below the axis in 5.11.
- **Indefinite integral.** A family of functions; always add +C.
- **Definite integral.** A single number; no +C.
- **Check by differentiating.** The derivative of your answer must be the original integrand.
- **Rewrite first.** k/xⁿ = kx⁻ⁿ; expand brackets; divide quotients term by term.
- **Boundary condition.** Substitute the known point into the anti-derivative (not the derivative) to
  find C. Words such as "initially", "starts from rest" or "is empty at t = 0" are boundary
  conditions.
- **Rates of change.** If dQ/dt is known, Q = ∫ (dQ/dt) dt + C. Integrating a rate recovers the
  quantity.
- **Area by GDC.** Check that f(x) > 0 on the interval, write the integral with its limits, then
  evaluate with technology.

## Key terms

| Term | Meaning |
|---|---|
| Anti-derivative | A function F with F′(x) = f(x) |
| Indefinite integral | ∫ f(x) dx, the general anti-derivative including +C |
| Constant of integration | The arbitrary constant C in an indefinite integral |
| Boundary condition | A known value of the function used to find C |
| Definite integral | ∫ₐᵇ f(x) dx, a number found between limits a and b |
| Limits of integration | The values a (lower) and b (upper) in a definite integral |
| Integrand | The function being integrated |

## Quick conversions

| Integrand | Anti-derivative |
|---|---|
| 5x⁴ | x⁵ + C |
| 6/x³ = 6x⁻³ | −3x⁻² + C |
| x⁻² | −x⁻¹ + C |
| (x + 2)(x − 2) = x² − 4 | x³/3 − 4x + C |
| (x² − 3)/x² = 1 − 3x⁻² | x + 3x⁻¹ + C |

## Mini-example

The gradient of a curve is dy/dx = 4x − 3, and the curve passes through (2, 5). Find its equation.

```
y = 2x² − 3x + C
5 = 8 − 6 + C,  so C = 3
y = 2x² − 3x + 3
```

## Exam traps

- **Trap: missing +C.** On an indefinite integral it usually costs a mark.
- **Trap: multiplying instead of dividing.** ∫ x⁵ dx = x⁶/6.
- **Trap: negative powers.** ∫ x⁻⁴ dx = x⁻³/(−3) = −1/(3x³), not 1/(3x³) or x⁻⁵/(−5).
- **Trap: the condition in the wrong function.** If f(2) = 7 is given, substitute into f, not f′.
- **Trap: area with a negative region.** At 5.5 areas are only for f(x) > 0; check the sign before
  calling a definite integral an area.
- **Trap: GDC answer with no integral.** Write the integral with limits; it carries the method mark.

## Self-test

1. Find ∫ 6x⁵ dx.
2. Find ∫ (3x² − 4x + 1) dx.
3. Find ∫ 8/x³ dx.
4. Find ∫ (x + 1)(x − 4) dx.
5. Find ∫ (x⁴ + 1)/x² dx.
6. Why does ∫ x⁻¹ dx not follow the rule?
7. f′(x) = 6x² and f(1) = 5. Find f(x).
8. dy/dx = 2 − 3/x² and y = 4 when x = 1. Find y.
9. A ball's velocity is v = 20 − 10t m s⁻¹, and s = 0 at t = 0. Find s in terms of t.
10. Why is there no +C in a definite integral?
11. A GDC gives ∫₀² (x³ + 1) dx = 6. What does this represent, and why is that interpretation valid?
12. F(x) = x³ − x is an anti-derivative of f. Write down another anti-derivative of f.

**Answers**

1. x⁶ + C.
2. x³ − 2x² + x + C.
3. 8x⁻³ → −4x⁻² + C = −4/x² + C.
4. x² − 3x − 4 → x³/3 − 3x²/2 − 4x + C.
5. x² + x⁻² → x³/3 − x⁻¹ + C.
6. The rule would divide by n + 1 = 0; the anti-derivative of 1/x is a logarithm (section 5.10).
7. f(x) = 2x³ + C; 2 + C = 5, so f(x) = 2x³ + 3.
8. y = 2x + 3x⁻¹ + C; 2 + 3 + C = 4, so C = −1 and y = 2x + 3/x − 1.
9. s = 20t − 5t² + C with C = 0, so s = 20t − 5t².
10. The constant appears in both F(b) and F(a) and cancels when you subtract.
11. The area between y = x³ + 1, the x-axis, x = 0 and x = 2; valid because x³ + 1 > 0 on [0, 2].
12. Any x³ − x + c with c constant, for example x³ − x + 7.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section SL 5.5: integration as anti-differentiation of integer powers
(n ≠ −1); definite integrals using technology; area where f(x) > 0; boundary conditions.
