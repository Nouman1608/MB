---
title: "OxfordAQA International AS and A-level Mathematics: Integration by inspection and substitution (9660) -- Revision Notes"
seoTitle: "OxfordAQA 9660 Inspection and Substitution Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Integration by inspection and substitution"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 195
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-integration-oxfordaqa-alevel-maths"
description: "Condensed revision notes on P2.7 integration by inspection and substitution for OxfordAQA International A-level Mathematics 9660, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These notes condense the first part of section P2.7 (Integration) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2: standard integrals, the reverse chain rule by inspection and substitution, and f′(x)/f(x). The specification places this content in International A-level (A2) Unit P2 (Pure Maths); it is not examined at International AS. For full explanations and longer worked examples, read the [study guide](/resources/oxfordaqa-a-level-mathematics-integration-by-inspection-and-substitution/), then test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-integration-by-inspection-and-substitution-practice/). Course links: the [OxfordAQA A-level Mathematics hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) and the [free diagnostics](/diagnostics/). Powers of x are covered in the [P1.4 integration notes](/resources/oxfordaqa-a-level-mathematics-integration-indefinite-definite-integrals-areas-and-revision-notes/).

## Results to know

Use radians. Constants k and a are non-zero.

| Integrand | Integral |
|---|---|
| eˣ | eˣ + c |
| e^(kx) | e^(kx)/k + c |
| 1/x | ln\|x\| + c |
| 1/(ax + b) | (1/a) ln\|ax + b\| + c |
| sin kx | −cos(kx)/k + c |
| cos kx | sin(kx)/k + c |
| f′(x)/f(x) | ln\|f(x)\| + c |
| tan x (from f′/f) | −ln\|cos x\| + c |

Rule of thumb for a linear argument: integrate as if the argument were just x, then divide by the coefficient of x.

## Reverse chain rule by inspection

The chain rule backwards:

```
∫ F′(g(x)) × g′(x) dx = F(g(x)) + c
```

Method in steps:

1. Find the inside function g(x). Check that its derivative is present, up to a constant.
2. Write the answer as if the derivative were there.
3. Differentiate your guess.
4. Divide by the extra constant that appears.

Small worked reminders:

```
∫ x²(x³ − 7)⁴ dx:   guess (x³ − 7)⁵; derivative 5(x³ − 7)⁴ × 3x² = 15x²(x³ − 7)⁴
                    so the answer is (x³ − 7)⁵/15 + c
∫ cos x e^(sin x) dx = e^(sin x) + c    (derivative of the exponent is cos x)
∫ x sin(x²) dx = −½ cos(x²) + c
```

Typical patterns that call for inspection:

| Pattern | Inside function g | Answer shape |
|---|---|---|
| g′ × gⁿ | the bracket or base | gⁿ⁺¹/(n + 1), adjusted |
| g′ × e^g | the exponent | e^g, adjusted |
| g′ × sin g or g′ × cos g | the angle | −cos g or sin g, adjusted |
| sin x × cosⁿ x, or cos x × sinⁿ x | cos x, or sin x | −cosⁿ⁺¹x/(n + 1), or sinⁿ⁺¹x/(n + 1) |
| g′/g | the denominator | ln\|g\|, adjusted |

## f′(x)/f(x)

```
∫ f′(x)/f(x) dx = ln|f(x)| + c
```

- The numerator must be the derivative of the denominator, or a constant multiple of it. Pull the constant out front.
- Drop the modulus only if f(x) is always positive, for example x² + 9.
- In a definite integral, check that f(x) does not change sign between the limits.

Worked reminder:

```
∫ from 0 to 2 of 3x²/(x³ + 1) dx = [ln(x³ + 1)] from 0 to 2 = ln 9 − ln 1 = ln 9 = 2 ln 3
```

More recognitions with the same rule:

```
∫ from 0 to π/2 of cos x/(3 + sin x) dx = [ln(3 + sin x)] from 0 to π/2 = ln 4 − ln 3 = ln(4/3)
∫ from 0 to 2 of 1/(3x + 1) dx = [⅓ ln(3x + 1)] from 0 to 2 = ⅓ ln 7
```

Not a match: ∫ 1/(x² + 1) dx, ∫ x/(x + 1) dx. In these the numerator is not a multiple of the derivative of the denominator, so a different method is needed.

## Substitution

Method in steps:

1. Choose u, usually the inside function or the awkward bracket.
2. Work out du/dx and rearrange for dx.
3. Replace every x and dx. If an x remains, write it in terms of u from u = ...
4. Change the limits at the same time (definite integrals).
5. Integrate in u. For an indefinite integral, return to x.

Worked reminder with a leftover x:

```
∫ from 1 to 5 of x√(x − 1) dx,   u = x − 1,  dx = du,  x = u + 1
Limits: x = 1 → u = 0;   x = 5 → u = 4
∫ from 0 to 4 of (u + 1)u^(1/2) du = [ (2/5)u^(5/2) + (2/3)u^(3/2) ] from 0 to 4
                                    = (2/5)(32) + (2/3)(8) = 64/5 + 16/3 = 272/15
```

Worked reminder with x² and a linear u:

```
∫ from 2 to 6 of x²√(2x − 3) dx,   u = 2x − 3,  dx = du/2,  x = (u + 3)/2
Limits: x = 2 → u = 1;   x = 6 → u = 9
= (1/8) ∫ from 1 to 9 of (u^(5/2) + 6u^(3/2) + 9u^(1/2)) du
= (1/8) [ (2/7)u^(7/2) + (12/5)u^(5/2) + 6u^(3/2) ] from 1 to 9 = 5956/35
```

Worked reminder where a ratio of exponentials appears:

```
∫ from 0 to 1 of e^x/(e^x + 2) dx   is f′/f with f = e^x + 2
= [ln(e^x + 2)] from 0 to 1 = ln(e + 2) − ln 3
```

Worked reminder with a trigonometric power:

```
∫ from 0 to π/2 of sin x cos²x dx,  u = cos x,  du = −sin x dx
Limits: x = 0 → u = 1;   x = π/2 → u = 0
= ∫ from 1 to 0 of −u² du = ∫ from 0 to 1 of u² du = 1/3
```

## Exam technique

- Read the instruction. If the question names a substitution, use that one. If it says "exact", leave answers in terms of ln, e or π.
- Decide inspection or substitution before writing. A quick differentiation of your guess takes seconds and catches a missing constant.
- For a definite integral by substitution, write the new limits on the line where you first write the u-integral. This avoids carrying the wrong limits into the evaluation.
- Show enough lines for a reader to follow: the choice of u, du, the new limits, the integral in u, the antiderivative and the evaluation.
- When one answer can be written in several equivalent forms, such as ln 9 and 2 ln 3, choose a form that is simple and give it exactly.
- Sketch-based or area questions often use these integrals. If the curve lies below the x-axis, the integral is negative, so check the sign before you report an area.

A final check on a definite integral:

```
∫ from 0 to ln 2 of e^(−2x) dx = [−½ e^(−2x)] from 0 to ln 2 = −½ (¼) + ½ = 3/8
```

Here e^(−2 ln 2) = 2^(−2) = ¼. The result is positive, as it must be for a positive integrand over an interval from a smaller to a larger number.

## Must-know distinctions

| Idea | Careful point |
|---|---|
| ∫ e^(kx) dx | Divide by k. It does not multiply by k. |
| ∫ sin kx dx | −cos(kx)/k. The sign is negative. |
| ∫ cos kx dx | sin(kx)/k. The sign is positive. |
| ln\|x\| and ln x | Use the modulus unless the argument is known to be positive. |
| ln of a product or quotient | Keep it as one logarithm, or split it using the laws of logarithms. |
| Changed limits | After changing to u-limits, evaluate in u. Do not go back to x. |
| Inspection and substitution | Both are the chain rule backwards. They give the same answer. |

## Quick self-test

1. Find ∫ e^(−5x) dx.
2. Find ∫ cos(x/2) dx.
3. Find ∫ 4/(5x − 1) dx.
4. Find ∫ sin(2x + 1) dx.
5. Find ∫ x²(x³ + 1)⁴ dx.
6. Find ∫ 2x/(x² + 9) dx.
7. Evaluate ∫ from 0 to 1 of e^(3x) dx, giving an exact answer.
8. Find ∫ cot x dx, where cot x = cos x/sin x.
9. Evaluate ∫ from 0 to 2 of x/(x² + 1) dx, giving an exact answer.
10. Use u = x + 1 to evaluate ∫ from 0 to 3 of x/(x + 1)² dx, giving an exact answer.
11. Evaluate ∫ from 0 to π/2 of sin x/(1 + cos x) dx.
12. Use u = x − 1 to evaluate ∫ from 1 to 2 of x(x − 1)³ dx.

### Answers

1. −e^(−5x)/5 + c
2. 2 sin(x/2) + c
3. (4/5) ln|5x − 1| + c
4. −½ cos(2x + 1) + c
5. (x³ + 1)⁵/15 + c
6. ln(x² + 9) + c
7. (e³ − 1)/3
8. ln|sin x| + c
9. ½ ln 5
10. With u = x + 1, x = u − 1 and the limits become 1 and 4: ∫ (u − 1)/u² du = ∫ (1/u − 1/u²) du = [ln u + 1/u] from 1 to 4 = ln 4 + ¼ − 1 = ln 4 − ¾.
11. ln 2 (f′/f with f = 1 + cos x gives −ln(1 + cos x); the limits give −ln 1 + ln 2)
12. 9/20 (with x = u + 1 and limits 0 to 1: ∫ (u⁴ + u³) du = 1/5 + 1/4)

## Where marks are usually lost

- Omitting the 1/k factor for e^(kx), sin kx and cos kx.
- Giving +cos(kx)/k as the integral of sin kx.
- Forgetting the modulus in ln|f(x)| in an indefinite integral, or forgetting + c.
- Applying f′/f when the numerator is not a constant multiple of the derivative.
- Leaving an x in the integral after substituting, or forgetting to replace dx.
- Changing the limits and then substituting x-values into the u-answer (or the reverse).
- Writing a "show that" substitution with steps missing: write out u, du, the new limits and the integral in u.
- Typing the result as a decimal when the question asks for an exact value.
- Not checking by differentiating when time allows.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA. These notes follow the content and additional information listed under P2.7.
