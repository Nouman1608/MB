---
title: "Edexcel International A Level Mathematics (YMA01): Exponentials and logarithms (P3.3) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P3: Pure Mathematics 3"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 3.3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p3-pure-mathematics-3-edexcel-alevel-maths"
    subtopic: "p3-exponentials-and-logarithms-edexcel-alevel-maths"
description: "Condensed notes on e^x, ln x, solving e^(ax+b) = p and ln(ax+b) = q, and logarithmic graphs for Edexcel IAL Maths Unit P3, with exam traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 3 of Unit P3 (Pearson Edexcel International Advanced Level Mathematics, YMA01, Issue 3): "the function eˣ and its graph", "the function ln x and its graph; ln x as the inverse function of eˣ", and "use logarithmic graphs to estimate parameters in relationships of the form y = axⁿ and y = kbˣ". For full worked examples, use the [P3 exponentials and logarithms study guide](/resources/edexcel-a-level-mathematics-yma01-p3-exponentials-and-logarithms-edexcel-alevel-maths/), then try the [P3 exponentials and logarithms practice questions](/resources/edexcel-a-level-mathematics-yma01-p3-exponentials-and-logarithms-edexcel-alevel-maths-practice/).

## Graph facts

| Feature | y = eˣ | y = ln x |
|---|---|---|
| Domain | all real x | x > 0 |
| Range | y > 0 | all real y |
| Key point | (0, 1) | (1, 0) |
| Asymptote | y = 0 | x = 0 |
| Behaviour | increasing | increasing |

The two graphs are reflections of each other in y = x, because each function is the inverse of the other.

**Transformed exponentials.** y = A e^(ax + b) + c:

- asymptote y = c
- y-intercept A e^b + c
- x-intercept (if any) from A e^(ax + b) = −c
- range y > c if A > 0, y < c if A < 0

**Transformed logarithms.** y = ln(ax + b): domain ax + b > 0, asymptote where ax + b = 0.

## Inverse relationships

- e^(ln x) = x (x > 0) and ln(eˣ) = x
- ln 1 = 0, ln e = 1, ln(1/x) = −ln x
- e^(ax + b) = p ⇒ x = (ln p − b)/a, for p > 0
- ln(ax + b) = q ⇒ x = (e^q − b)/a
- Inverse of f(x) = e^(ax) + c: f⁻¹(x) = (1/a) ln(x − c), domain x > c when a > 0

## Equation types

| Form | Method |
|---|---|
| e^(ax + b) = p | Take ln of both sides |
| ln(ax + b) = q | Take e of both sides |
| e^(2x) + p eˣ + q = 0 | u = eˣ, solve the quadratic, reject u ≤ 0 |
| p eˣ + q e^(−x) = r | Multiply by eˣ, then as above |
| ln f(x) ± ln g(x) = ... | Combine using the laws, then remove ln |
| A product such as e^(2x) = 3eˣ | Divide by eˣ (never zero) or take ln of both sides |

## Logarithmic graphs

| Model | Straight line | Gradient | Vertical intercept |
|---|---|---|---|
| y = axⁿ | log y against log x | n | log a |
| y = kbˣ | log y against x | log b | log k |

- Undo with the same base: if lg a = 0.7 then a = 10^0.7; if ln k = 2.4 then k = e^2.4.
- Gradient from two points on the line, not from two data points that lie off it.
- For y = kbˣ, b > 1 means growth (positive gradient); 0 < b < 1 means decay.

**Mini example.** A graph of ln y against x is a straight line through (1, 2.0) and (4, 2.9). Gradient = 0.9/3 = 0.3 = ln b, so b = e^0.3 ≈ 1.35. Then 2.0 = ln k + 0.3 × 1, so ln k = 1.7 and k = e^1.7 ≈ 5.47. The model is y ≈ 5.47 × 1.35ˣ.

## Key terms

| Term | Meaning |
|---|---|
| e | The constant 2.718..., the base for which the gradient of eˣ equals eˣ |
| Natural logarithm | ln x = logₑ x |
| Inverse function | A function that reverses another; ln and e^ undo each other |
| Asymptote | A line the curve approaches; y = c for e^(...) + c, and x = 0 for ln x |
| Power law | y = axⁿ |
| Exponential law | y = kbˣ |
| Parameter | A constant in a model, such as a, n, k or b |

## Exam traps

- e^(x + 2) = e² × eˣ, not eˣ + 2.
- ln(x + 2) cannot be split.
- eˣ is always positive: reject eˣ = −2 or eˣ = 0, and dividing an equation by eˣ is always safe.
- Domain checks: x = −5 cannot be a solution if ln x appears.
- Exact form: ln 9 − 1 can be written 2 ln 3 − 1; both are exact, a decimal is not.
- Log graphs: confusing which axis carries log x and which carries x.
- Using 10^ to undo ln, or e^ to undo lg.

## Self-test

**1.** Simplify e^(ln 7).

**2.** Simplify ln(e³).

**3.** Solve eˣ = 5.

**4.** Solve ln x = −1.

**5.** State the asymptote of y = 3e^(2x) − 4.

**6.** State the asymptote and domain of y = ln(x − 2).

**7.** Solve e^(2x + 1) = 9, giving x exactly.

**8.** Solve ln(3x) = 2.

**9.** State the range of y = 2 + e^(−x).

**10.** A graph of lg y against lg x has gradient 3 and intercept 0.5. Find the relationship between y and x.

**11.** A graph of ln y against x has gradient 0.1 and intercept 2. Find k and b in y = kbˣ.

**12.** Solve e^(2x) = 3eˣ.

### Answers

**1.** 7.

**2.** 3.

**3.** x = ln 5.

**4.** x = e⁻¹ = 1/e.

**5.** y = −4.

**6.** Asymptote x = 2; domain x > 2.

**7.** 2x + 1 = ln 9, so x = (ln 9 − 1)/2 = ln 3 − ½.

**8.** 3x = e², so x = e²/3.

**9.** y > 2.

**10.** n = 3 and lg a = 0.5, so a = 10^0.5 ≈ 3.16: y ≈ 3.16x³.

**11.** k = e² ≈ 7.39 and b = e^0.1 ≈ 1.11.

**12.** eˣ(eˣ − 3) = 0; eˣ ≠ 0, so eˣ = 3 and x = ln 3.

## Related resources

- [P3 exponentials and logarithms study guide](/resources/edexcel-a-level-mathematics-yma01-p3-exponentials-and-logarithms-edexcel-alevel-maths/)
- [P3 exponentials and logarithms practice questions](/resources/edexcel-a-level-mathematics-yma01-p3-exponentials-and-logarithms-edexcel-alevel-maths-practice/)
- [Exponential and natural logarithm functions revision notes](/resources/edexcel-ial-mathematics-the-exponential-and-natural-logarithm-functions-revision-notes/)
- [P2 exponentials and logarithms revision notes](/resources/edexcel-a-level-mathematics-yma01-p2-exponentials-and-logarithms-edexcel-alevel-maths-revision-notes/)
