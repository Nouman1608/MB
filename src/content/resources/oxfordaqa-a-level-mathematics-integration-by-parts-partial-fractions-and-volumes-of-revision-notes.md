---
title: "OxfordAQA International AS and A-level Mathematics: Integration by parts, partial fractions and volumes of revolution (9660) -- Revision Notes"
seoTitle: "OxfordAQA Maths 9660 Parts and Volumes Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Integration by parts, partial fractions and volumes of revolution"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 196
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-integration-oxfordaqa-alevel-maths"
description: "Condensed revision notes on integration by parts, partial fractions and volumes of revolution, with a self-test, for OxfordAQA International A-level Maths."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense section P2.7 (the second part of Integration) of the *OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2*: integration by parts, partial fractions and volumes of revolution. The content is part of Unit P2 (Pure Maths) in the International A-level and is not examined at International AS. For full explanations, read the [study guide](/resources/oxfordaqa-a-level-mathematics-integration-by-parts-partial-fractions-and-volumes-of/), then test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-integration-by-parts-partial-fractions-and-volumes-of-practice/).

Other links: [OxfordAQA A-level Mathematics course page](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/). Inspection and substitution are taught on a separate page and are not repeated here.

## Key results

| Topic | Result |
|---|---|
| Integration by parts | ∫ u v′ dx = uv − ∫ u′ v dx, with v′ = dv/dx |
| Origin | The product rule, (uv)′ = u v′ + u′ v, integrated and rearranged |
| Linear denominator | k/(ax + b) integrates to (k/a) ln\|ax + b\| + c |
| Volume about the x-axis | V = π ∫ y² dx between x-limits |
| Volume about the y-axis | V = π ∫ x² dy between y-limits |

## Integration by parts: method

1. Decide which factor is u and which is dv/dx.
2. Differentiate u to get du/dx. Integrate dv/dx to get v. Leave out the constant in v.
3. Write uv − ∫ u′ v dx.
4. Integrate what remains. Add + c at the end.
5. For a definite integral, apply the limits to uv and to the new integral, using the same limits for both.

**Choosing u**

- x with an exponential: u = x.
- x with a sine or cosine: u = x.
- A power of x with ln x: u = ln x.
- x² with an exponential or trigonometric function: u = x² on the first pass, then u = x on the second.

**Worked reminder.** ∫ x e^(4x) dx with u = x and v = ¼ e^(4x):

```
= ¼ x e^(4x) − ¼ ∫ e^(4x) dx = ¼ x e^(4x) − (1/16) e^(4x) + c
```

**Worked reminder.** ∫ x ln x dx with u = ln x and v = x²/2:

```
= (x²/2) ln x − ∫ (x²/2)(1/x) dx = (x²/2) ln x − x²/4 + c
```

**Worked reminder (definite, with limits).** ∫ from 0 to 1 of x e^(3x) dx:

```
u = x, v = (1/3) e^(3x)
= [x e^(3x)/3] from 0 to 1 − (1/3) ∫ from 0 to 1 of e^(3x) dx
= e³/3 − (1/9)(e³ − 1) = (2e³ + 1)/9
```

**Repeated use.** If the polynomial factor is x², differentiate it twice. Each pass lowers the power by one, and the last pass leaves a pure exponential or trigonometric integral. Two passes give three terms in the answer.

**Check by differentiation.** Differentiate your answer. If you get back the original integrand, the result is right. This is quick and catches sign errors.

## Partial fractions: method

1. Compare degrees. If the top is not lower than the bottom, divide first.
2. Write the proper fraction as A/(first factor) + B/(second factor).
3. Multiply through by the denominator.
4. Substitute the value of x that makes each factor zero to find A and B.
5. Check with one more value of x.
6. Integrate each term, remembering the factor 1/a for each bracket.
7. Combine logarithms only if the question asks for a single logarithm.

**Worked reminder.** 7/((x − 2)(x + 5)):

```
7 = A(x + 5) + B(x − 2)
x = 2: 7 = 7A, A = 1.   x = −5: 7 = −7B, B = −1.
7/((x − 2)(x + 5)) = 1/(x − 2) − 1/(x + 5)
∫ = ln|x − 2| − ln|x + 5| + c = ln|(x − 2)/(x + 5)| + c
```

**Definite version.** ∫ from 3 to 6 of 7/((x − 2)(x + 5)) dx:

```
[ln|x − 2| − ln|x + 5|] from 3 to 6
= (ln 4 − ln 11) − (ln 1 − ln 8) = ln 4 + ln 8 − ln 11 = ln(32/11)
```

**Form of the denominator.** Factors such as (3x − 4) are fine. After splitting, 1/(3x − 4) integrates to (1/3) ln|3x − 4|. The integral of a sum of fractions is the sum of the integrals, so treat each term on its own.

**Improper fractions.** x²/((x − 1)(x + 1)): the denominator is x² − 1, so x² = (x² − 1) + 1 and

```
x²/((x − 1)(x + 1)) = 1 + 1/((x − 1)(x + 1)) = 1 + (½)/(x − 1) − (½)/(x + 1)
```

## Volumes of revolution: method

1. Identify the axis of rotation. Only the x-axis and the y-axis are used.
2. Write the right expression: y² in terms of x for the x-axis, or x² in terms of y for the y-axis.
3. Take the limits in the same variable as the integration: x-limits for dx, y-limits for dy.
4. Leave π outside the integral until the end.
5. Give the exact answer if the question asks for it. Otherwise round sensibly.

**Worked reminder (x-axis).** y = 2x from x = 0 to x = 3:

```
V = π ∫ 4x² dx = π [4x³/3] from 0 to 3 = 36π
```

This matches a cone of radius 6 and height 3: (1/3)π(6²)(3) = 36π.

**Worked reminder (y-axis).** y = x² from y = 0 to y = 4, so x² = y:

```
V = π ∫ y dy = π [y²/2] from 0 to 4 = 8π
```

**Worked reminder (parts inside a volume).** y = √(x) e^x, from x = 0 to x = 1, about the x-axis. Then y² = x e^(2x), and

```
V = π ∫ x e^(2x) dx = π (e² + 1)/4
```

using the result in question 11 of the self-test.

**Worked reminder (y-axis, curve given as y = f(x)).** For y = ½x² from y = 2 to y = 8, write x² = 2y. Then V = π ∫ from 2 to 8 of 2y dy = π [y²] from 2 to 8 = 60π.

## Must-know distinctions

- **dx with x-limits, dy with y-limits.** Mixing them is the commonest volume error.
- **Square the function, not the integral.** π ∫ y² dx is not π (∫ y dx)².
- **Parts versus substitution.** Use parts for a product of two different types of function, such as x and e^(kx). Use substitution when one factor is the derivative of the inside of the other.
- **Proper versus improper.** Divide first when the top is not of lower degree than the bottom.
- **Logarithm as u.** When x^n multiplies ln x, the logarithm must be u, because you cannot yet integrate ln x directly. Differentiating it gives 1/x, which cancels against a power of x and leaves a simple power to integrate.
- **Region versus solid.** The region is flat. The solid is what you get after a full turn of 360°. The formula sums thin discs, so the radius of each disc is the distance from the curve to the axis.
- **ln|…| versus ln(…).** The modulus is needed in indefinite integrals, because the bracket may be negative.

## Quick self-test

1. Find ∫ x e^(−x) dx.
2. Find ∫ x sin 5x dx.
3. Find ∫ x⁴ ln x dx.
4. Write 7/((x − 2)(x + 5)) in partial fractions.
5. Find ∫ (x + 7)/((x + 1)(x + 3)) dx.
6. Find ∫ 4/(3x − 2) dx.
7. Find the volume formed when y = 2x, 0 ≤ x ≤ 3, is rotated about the x-axis.
8. Find the volume formed when y = x², 0 ≤ y ≤ 4, is rotated about the y-axis (x ≥ 0).
9. Give the exact volume of the solid formed by rotating the region under y = eˣ, for 0 ≤ x ≤ 1, about the x-axis.
10. Split x²/((x − 1)(x + 1)) into a constant and partial fractions.
11. Evaluate ∫ from 0 to 1 of x e^(2x) dx.
12. Differentiate x ln x, and use the result to find ∫ ln x dx.

### Answers

1. −(x + 1) e^(−x) + c
2. −(x cos 5x)/5 + (sin 5x)/25 + c
3. (x⁵ ln x)/5 − x⁵/25 + c
4. 1/(x − 2) − 1/(x + 5)
5. Partial fractions 3/(x + 1) − 2/(x + 3), so 3 ln|x + 1| − 2 ln|x + 3| + c
6. (4/3) ln|3x − 2| + c
7. 36π
8. 8π
9. π (e² − 1)/2
10. 1 + (½)/(x − 1) − (½)/(x + 1)
11. (e² + 1)/4
12. ln x + 1. Since ∫ (ln x + 1) dx = x ln x + c, we get ∫ ln x dx = x ln x − x + c.

## Where marks are usually lost

- Dropping the minus sign before the new integral, especially when v is negative.
- Differentiating the wrong factor, so the new integral is as hard as the original.
- Forgetting a second pass on an x² integrand, or forgetting to bracket the second result.
- Omitting the 1/a when integrating 1/(ax + b).
- Matching A and B without dividing first on an improper fraction.
- Applying limits to only part of the parts result, instead of the whole uv term and the remaining integral.
- Writing the volume formula with y instead of y², or integrating y² dx with y-limits.
- Not showing the line where you substitute the limits, which makes an arithmetic slip hard to trace.
- Rounding too early when an exact answer is asked for, or leaving ln terms uncombined when the question asks for a single logarithm.

## Official syllabus

*OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2*, published by OxfordAQA, for International AS exams from May/June 2018 and International A-level exams from May/June 2019. See section P2.7 (Integration).
