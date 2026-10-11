---
title: "OxfordAQA International AS and A-level Mathematics: Parametric equations and exponential and logarithmic functions (9660) -- Revision Notes"
seoTitle: "OxfordAQA Maths 9660 Parametric and Exp/Log Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Parametric equations and exponential and logarithmic functions"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 190
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-coordinate-geometry-oxfordaqa-alevel-maths"
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-exponentials-and-logarithms-oxfordaqa-alevel-maths"
description: "Condensed revision notes on parametric equations, e^x, ln x and exponential growth and decay for OxfordAQA International A-level Maths, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense the [study guide](/resources/oxfordaqa-a-level-mathematics-parametric-equations-and-exponential-and-logarithmic/) for the *OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2*, sections P2.3 (Cartesian and parametric equations) and P2.5 (eˣ, ln x, growth and decay). This content sits in Unit P2 (Pure Maths), part of the International A-level only. It applies to International AS exams from May/June 2018 and International A-level exams from May/June 2019.

Other pages: the [practice questions](/resources/oxfordaqa-a-level-mathematics-parametric-equations-and-exponential-and-logarithmic-practice/), the [course page](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) and the International AS page on [logarithm laws and a^x = b](/resources/oxfordaqa-a-level-mathematics-exponential-functions-logarithms-and-solving-a-x-b-revision-notes/). To find weak spots first, try a [free 10-minute diagnostic](/diagnostics/).

## Key definitions

| Term | Meaning |
|---|---|
| Parameter | A third variable (t or θ) that both x and y depend on |
| Parametric equations | x = f(t), y = g(t); each value of the parameter gives one point |
| Cartesian equation | An equation in x and y only |
| e | An irrational constant, about 2.71828 |
| ln x | logₑx, the inverse of eˣ |
| Growth / decay | N = Aeᵏᵗ with k > 0 (growth); N = Ae⁻ᵏᵗ with k > 0 (decay) |

## The four curves named in the specification

| Parametric form | Cartesian form | Shape and restriction |
|---|---|---|
| x = t², y = 2t | y² = 4x | Parabola, all t |
| x = a cosθ, y = b sinθ | x²/a² + y²/b² = 1 | Ellipse, circle if a = b |
| x = 1/t, y = 3t | xy = 3 | Rectangular hyperbola, t ≠ 0 |
| x = t + 1/t, y = t − 1/t | x² − y² = 4 | Hyperbola; t > 0 gives only x ≥ 2 |

## Method: parametric to Cartesian

1. Look for the easier equation to rearrange for the parameter.
2. Substitute into the other equation and simplify.
3. If both equations are trigonometric, use sin²θ + cos²θ = 1, or a double-angle identity such as cos2θ = 2cos²θ − 1.
4. If the equations have forms like t + 1/t, add and subtract them, then multiply the results.
5. Write down any restriction on x or y from the range of cosθ, sinθ, or the sign of t.

**Reminder.** x = 3 sinθ, y = 1 − cos2θ: since cos2θ = 1 − 2sin²θ, y = 2sin²θ = 2(x/3)² = 2x²/9, with −3 ≤ x ≤ 3.

## Method: Cartesian to parametric

- y = f(x): put x = t, y = f(t).
- Circle (x − p)² + (y − q)² = r²: x = p + r cosθ, y = q + r sinθ.
- Ellipse x²/a² + y²/b² = 1: x = a cosθ, y = b sinθ.
- Product curve xy = c: x = t, y = c/t.

Several parametrisations are correct. Check yours by substituting back.

## Method: curve meets a line

Substitute the parametric x and y into the line equation. Solve for the parameter, then find the points using the parametric equations. Check one point in the Cartesian equation.

**Reminder.** x = 1/t, y = 3t meets y = 5 − x. Then 3t = 5 − 1/t, so 3t² − 5t + 1 = 0. The roots are t = (5 ± √13)/6, not integers, so keep the exact form.

## eˣ and ln x

| Feature | y = eˣ | y = ln x |
|---|---|---|
| Inputs allowed | all real x | x > 0 only |
| Outputs produced | y > 0 only | all real y |
| Passes through | (0, 1) | (1, 0) |
| Other key point | (1, e) | (e, 1) |
| Asymptote | y = 0 | x = 0 |
| Relationship | Inverse of ln x | Inverse of eˣ |

Reflect either graph in the line y = x to get the other.

Inverse identities:

```
ln(eˣ) = x  (all x)         e^(ln x) = x  (x > 0)
ln a + ln b = ln(ab)        ln a − ln b = ln(a/b)
k ln a = ln(aᵏ)             ln 1 = 0,  ln e = 1
```

## Transforming the graphs

| Equation | Effect | Asymptote | Axis crossing |
|---|---|---|---|
| y = eˣ + c | Translate up c | y = c | (0, 1 + c) |
| y = eˣ⁻ᵃ | Translate right a | y = 0 | (0, e⁻ᵃ) |
| y = e⁻ˣ | Reflect in y-axis | y = 0 | (0, 1) |
| y = A eˣ | Stretch, factor A | y = 0 | (0, A) |
| y = ln(x − a) | Translate right a | x = a | (a + 1, 0) |
| y = ln x + c | Translate up c | x = 0 | (e⁻ᶜ, 0) |

## Method: solving equations with e and ln

1. Isolate the exponential or the logarithm.
2. Take ln of both sides (for eˣ) or convert to index form (for ln x).
3. For e²ˣ + a eˣ + b = 0, substitute u = eˣ and solve the quadratic.
4. Reject values where eˣ ≤ 0 or where a logarithm would have a non-positive argument.
5. Give exact answers (ln 3, (e³ − 1)/2) unless a decimal is asked for.

**Reminder.** Solve e²ˣ − 7eˣ + 10 = 0. Then (eˣ − 2)(eˣ − 5) = 0, so x = ln 2 or x = ln 5.

**Inverse function reminder.** For f(x) = 3eˣ + 2, put y = 3eˣ + 2, so x = ln[(y − 2)/3] and f⁻¹(x) = ln[(x − 2)/3], with domain x > 2.

## Growth and decay formulas

| Situation | Model | Useful results |
|---|---|---|
| Growth | N = Aeᵏᵗ, k > 0 | A = value at t = 0; doubling time = ln 2/k |
| Decay | N = Ae⁻ᵏᵗ, k > 0 | Half-life = ln 2/k |
| Decay to a limit | T = L + Be⁻ᵏᵗ | T → L as t → ∞; initial T = L + B |

Method in steps for a model problem:

1. Use the first condition to find A (often given by t = 0).
2. Use a second condition to form an equation in k: e^(kt) = ratio, so k = (ln ratio)/t.
3. Keep k as an exact logarithm until the last step.
4. For a time, take ln to solve e^(kt) = value.
5. Interpret the answer with units, and say if the model is unrealistic (for example, unlimited growth).

**Reminder.** N = 50e^(0.2t). N = 200 when e^(0.2t) = 4, so t = ln 4/0.2 ≈ 6.93.

## Must-know distinctions

- **ln(a + b) is not ln a + ln b.** Logs turn products into sums, not sums into sums.
- **eˣ is not x to a power.** The variable is in the index; the graph is never zero or negative.
- **Growth k versus decay k.** In N = Ae⁻ᵏᵗ the sign is already in the formula, so k is positive.
- **Asymptote versus intercept.** For y = 2eˣ − 5 the asymptote is y = −5 and the intercept is (0, −3).
- **Domain of the parameter versus the curve.** x = 2cosθ gives only −2 ≤ x ≤ 2, whatever the Cartesian equation allows.

## Quick self-test

1. Find the Cartesian equation of x = 3t, y = t² − 2.
2. Find the Cartesian equation of x = 4cosθ, y = 7sinθ.
3. Find the Cartesian equation of x = 1/t, y = 3t.
4. Show that x = t + 1/t, y = t − 1/t satisfy x² − y² = 4.
5. Write y = x³ − x in parametric form.
6. State the asymptote and the y-intercept of y = eˣ − 4.
7. State the set of inputs and the set of outputs of y = ln x.
8. Solve ln x = −2.
9. Solve e³ˣ = 7, giving x to 3 significant figures.
10. Find f⁻¹(x) when f(x) = ln(x − 1), x > 1.
11. A substance has half-life 5 years and decays as m = m₀e⁻ᵏᵗ. Find k to 3 significant figures.
12. N = 50e^(0.2t). Find when N = 200, to 3 significant figures.

### Answers

1. t = x/3, so y = x²/9 − 2.
2. x²/16 + y²/49 = 1.
3. y = 3/x (that is, xy = 3).
4. (x + y)(x − y) = (2t)(2/t) = 4, so x² − y² = 4.
5. For example x = t, y = t³ − t.
6. Asymptote y = −4; y-intercept (0, −3).
7. Inputs x > 0; outputs all real numbers.
8. x = e⁻² (about 0.135).
9. 3x = ln 7, so x = 0.649.
10. y = ln(x − 1) gives x = eʸ + 1, so f⁻¹(x) = eˣ + 1.
11. e⁻⁵ᵏ = 1/2, so k = ln 2/5 = 0.139.
12. e^(0.2t) = 4, so t = ln 4/0.2 = 6.93.

## Where marks are usually lost

- Leaving out the restriction on x (for example −2 ≤ x ≤ 2) after eliminating a trig parameter.
- Writing x² + y² = 1 for an ellipse, or forgetting to divide by a² and b².
- Not squaring both fractions: (x/5)² is x²/25, not x²/5.
- Splitting ln(a + b) into two logarithms.
- Keeping a root with ln of a negative number, such as x = −1 in ln x + ln(x − 2) = ln 3.
- Stating the range of f⁻¹ as the domain, or the domain of f⁻¹ as all real numbers.
- Rounding k early and then getting a final time that is out in the third significant figure.
- Giving a time with no units, or with no comment when the question asks for one.
- Showing too little working on a "show that" question: write every line from the start to the target.

## Official syllabus

*OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2*, published by OxfordAQA. Sections P2.3 (Cartesian and parametric equations of curves and conversion between the two forms) and P2.5 (the function eˣ and its graph, ln x as the inverse of eˣ, exponential growth and decay including exponential functions as models).
