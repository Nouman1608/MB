---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.6 Standard derivatives and the chain, product and quotient rules -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 5 – Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.06
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-6"
description: "Revision notes on IB DP Maths AA section 5.6: standard derivatives, chain, product and quotient rules, choosing a rule, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **section 5.6, standard derivatives and the chain, product and quotient
rules**, in IB DP Mathematics: Analysis and Approaches (first assessment 2021), examined at SL and HL.
The
[5.6 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-6/)
works through combined examples in full; the
[5.6 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-6-practice/)
test them. The rest of the differentiation unit is in the
[differentiation revision notes](/resources/ib-dp-mathematics-aa-sl-differentiation-revision-notes/).

## Formula sheet

```
d/dx xⁿ = nxⁿ⁻¹ (n ∈ ℚ)     d/dx sin x = cos x      d/dx cos x = −sin x
d/dx eˣ = eˣ                d/dx ln x = 1/x  (x > 0)

Chain:     y = f(g(x))   dy/dx = f′(g(x)) × g′(x)
Product:   y = uv        dy/dx = u v′ + v u′
Quotient:  y = u/v       dy/dx = (v u′ − u v′)/v²
```

## Useful chain-rule results

| y | dy/dx |
|---|---|
| e^(kx) | k e^(kx) |
| e^(f(x)) | f′(x) e^(f(x)) |
| sin(kx) | k cos(kx) |
| cos(kx) | −k sin(kx) |
| ln(f(x)) | f′(x)/f(x) |
| [f(x)]ⁿ | n[f(x)]ⁿ⁻¹ f′(x) |
| √(f(x)) | f′(x)/(2√(f(x))) |

## Condensed recall

- **Last operation decides the rule.** A bracket raised to a power or a function of an inside
  expression: chain. Two factors multiplied: product. One divided by another: quotient.
- **Simplify first.** Divide out (x² + 3)/x; use log laws such as ln(x⁴) = 4 ln x and
  ln(2x) = ln 2 + ln x; write roots as powers.
- **Nested rules.** Inside a product or quotient, each part may need the chain rule.
- **Constant multiples.** 5/(2x + 1) is 5(2x + 1)⁻¹; the chain rule is quicker than the quotient
  rule.
- **Factorise the answer.** Common factors such as eˣ, x² or a bracket make dy/dx = 0 easy to solve.
- **Exponentials are never zero.** In f′(x) = eˣ(x − 3), only x − 3 = 0 gives a stationary point.
- **Radians.** sin and cos derivatives require radians.

## Key terms

| Term | Meaning |
|---|---|
| Composite function | A function of a function, f(g(x)) |
| Inner function | g(x) in f(g(x)) |
| Outer function | f in f(g(x)) |
| Chain rule | Derivative of a composite: outer derivative × inner derivative |
| Product rule | Derivative of uv: uv′ + vu′ |
| Quotient rule | Derivative of u/v: (vu′ − uv′)/v² |
| Rational exponent | A power that is a fraction, such as x^(2/3) = ∛(x²) |

## Mini-example

Differentiate y = (2x + 1)³ e^(−x), a product in which both factors need the chain rule.

```
u = (2x + 1)³,  u′ = 6(2x + 1)²
v = e^(−x),     v′ = −e^(−x)
dy/dx = (2x + 1)³(−e^(−x)) + e^(−x) × 6(2x + 1)²
      = e^(−x)(2x + 1)²[6 − (2x + 1)]
      = e^(−x)(2x + 1)²(5 − 2x)
```

## Rule-choice drill

| Function | First rule | Why |
|---|---|---|
| sin(eˣ) | chain | sine of an inner function |
| eˣ sin x | product | two functions multiplied |
| (ln x)/(x + 1) | quotient | one function divided by another |
| ln(x² + 4)³ = 3 ln(x² + 4) | chain, after a log law | the power comes out as a multiple |
| (x³ − x)/x² | none: simplify to x − x⁻¹ | division by a single power of x |
| 4/(3x − 2)² = 4(3x − 2)⁻² | chain | a constant over a bracket is a power of the bracket |

## Second mini-example: a quotient

Differentiate y = (x² + 1)/(2x − 1).

```
u = x² + 1,  u′ = 2x
v = 2x − 1,  v′ = 2
dy/dx = [(2x − 1)(2x) − (x² + 1)(2)]/(2x − 1)²
      = (4x² − 2x − 2x² − 2)/(2x − 1)²
      = 2(x² − x − 1)/(2x − 1)²
```

Expand the numerator carefully: the minus sign applies to every term of (x² + 1)(2).

## Exam traps

- **Trap: the missing inner derivative.** d/dx e^(3x²) = 6x e^(3x²).
- **Trap: the quotient rule order.** "v u′ − u v′": bottom times derivative of top first.
- **Trap: v² means the original v squared.**
- **Trap: cos to sin.** d/dx cos(2x) = −2 sin(2x); both the sign and the 2 matter.
- **Trap: log of a sum.** ln(x + 3) does not split; its derivative is 1/(x + 3).
- **Trap: rational powers.** d/dx x^(−1/2) = −(1/2)x^(−3/2): subtract 1 from −1/2 to get −3/2.

## Self-test

1. Differentiate x^(5/2).
2. Differentiate 6/√x.
3. Differentiate 3 sin x − 4 cos x.
4. Differentiate e^(5x).
5. Differentiate ln(3x² + 2).
6. Differentiate (4 − x³)⁶.
7. Differentiate x² ln x.
8. Differentiate sin x / x.
9. Differentiate cos²x.
10. Differentiate √(2x − 1).
11. f(x) = x eˣ. Find f′(x) and the x-coordinate of the stationary point.
12. Which rule is needed first for e^(sin x)? Find its derivative.

**Answers**

1. (5/2)x^(3/2).
2. 6x^(−1/2) → −3x^(−3/2) = −3/(x√x).
3. 3 cos x + 4 sin x.
4. 5e^(5x).
5. 6x/(3x² + 2).
6. 6(4 − x³)⁵ × (−3x²) = −18x²(4 − x³)⁵.
7. 2x ln x + x² × (1/x) = 2x ln x + x = x(2 ln x + 1).
8. (x cos x − sin x)/x².
9. 2 cos x × (−sin x) = −2 sin x cos x.
10. (1/2)(2x − 1)^(−1/2) × 2 = 1/√(2x − 1).
11. f′(x) = eˣ + x eˣ = eˣ(1 + x); stationary at x = −1.
12. The chain rule (exponential of sin x): cos x e^(sin x).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section SL 5.6: derivatives of xⁿ (n ∈ ℚ), sin x, cos x, eˣ and ln x;
sums and multiples; the chain rule; the product and quotient rules.
