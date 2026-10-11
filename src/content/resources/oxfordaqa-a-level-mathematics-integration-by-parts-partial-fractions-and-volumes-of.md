---
title: "OxfordAQA International AS and A-level Mathematics: Integration by parts, partial fractions and volumes of revolution (9660)"
seoTitle: "OxfordAQA Maths 9660 Parts, Partial Fractions, Volumes"
resourceType: "study-guides"
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
description: "Study guide to integration by parts, partial fractions and volumes of revolution, with worked examples, for OxfordAQA International A-level Maths (P2)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide follows the *OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2*, section P2.7 (the second part of Integration): integration by parts, integration using partial fractions, and volumes of revolution. This content sits in Unit P2 (Pure Maths), which is part of the International A-level. It is not examined at International AS. The specification applies to International AS exams from May/June 2018 and International A-level exams from May/June 2019.

Use it with the [revision notes](/resources/oxfordaqa-a-level-mathematics-integration-by-parts-partial-fractions-and-volumes-of-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-mathematics-integration-by-parts-partial-fractions-and-volumes-of-practice/). The course page is [OxfordAQA A-level Mathematics](/boards/oxfordaqa/a-level/mathematics/) and the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) lets you tick off each outcome. For the P1 integration you build on, see [integration: indefinite and definite integrals and areas](/resources/oxfordaqa-a-level-mathematics-integration-indefinite-definite-integrals-areas-and/). The [free 10-minute diagnostics](/diagnostics/) show which topics need work first.

## What this guide covers

| Specification item | What you must be able to do |
|---|---|
| P2.7 | Integrate by parts, as the reverse of the product rule |
| P2.7 examples | Integrals such as x e^(2x), x sin 3x and x ln x |
| P2.7 | Integrate using partial fractions in simple cases |
| P2.7 examples | (1 − 4x)/((3x − 4)(x + 3)) and x²/((x + 5)(x − 3)) |
| P2.7 | Evaluate a volume of revolution, with the x-axis or the y-axis as the axis of rotation |

Integration by inspection and by substitution are also in P2.7 but are covered on their own page, so they are not taught here. The guide uses ln|x| for the integral of 1/x, and you should do the same.

## Integration by parts

Write v′ for dv/dx and u′ for du/dx. The product rule says (uv)′ = u v′ + u′ v. Integrate both sides and rearrange:

```
∫ u v′ dx = uv − ∫ u′ v dx
```

You swap one integral for another. The method pays off when the new integral is simpler than the old one.

**Choosing u.** Pick u so that u′ is simpler than u, and pick v′ so that you can integrate it. In practice:

- For x times an exponential, take u = x and let the exponential be v′.
- For x times a sine or cosine, take u = x and let the trigonometric function be v′.
- For a power of x times ln x, take u = ln x and let the power be v′.

For xⁿ ln x you cannot integrate ln x yet, so ln x must be u. Differentiating it gives 1/x, which cancels nicely against a power of x.

### Worked example 1: exponential

Find ∫ x e^(−3x) dx.

```
u = x          dv/dx = e^(−3x)
du/dx = 1      v = −⅓ e^(−3x)

∫ x e^(−3x) dx = −⅓ x e^(−3x) − ∫ (−⅓ e^(−3x)) dx
               = −⅓ x e^(−3x) + ⅓ ∫ e^(−3x) dx
               = −⅓ x e^(−3x) − (1/9) e^(−3x) + c
               = −(1/9) (3x + 1) e^(−3x) + c
```

Check by differentiating the answer. It should return x e^(−3x).

### Worked example 2: trigonometric, definite

Evaluate ∫ from 0 to π/2 of x cos 2x dx.

```
u = x          dv/dx = cos 2x
du/dx = 1      v = ½ sin 2x

∫ x cos 2x dx = ½ x sin 2x − ∫ ½ sin 2x dx
              = ½ x sin 2x + ¼ cos 2x
```

Apply the limits to the whole expression:

```
At π/2:  ½ (π/2)(sin π) + ¼ cos π = 0 − ¼ = −¼
At 0:    0 + ¼ cos 0 = ¼
Value = −¼ − ¼ = −½
```

The answer is negative because x cos 2x is positive only on 0 to π/4, and the negative part on π/4 to π/2 is larger.

### Worked example 3: logarithm

Find ∫ (ln x)/x² dx, then evaluate it from 1 to e.

Write the integrand as ln x × x⁻². The logarithm is u, because you cannot integrate it directly.

```
u = ln x       dv/dx = x⁻²
du/dx = 1/x    v = −1/x

∫ (ln x)/x² dx = −(ln x)/x + ∫ (1/x)(1/x) dx
               = −(ln x)/x + ∫ x⁻² dx
               = −(ln x)/x − 1/x + c
```

For the limits, ln e = 1 and ln 1 = 0:

```
At e:  −1/e − 1/e = −2/e
At 1:  0 − 1 = −1
Value = −2/e − (−1) = 1 − 2/e ≈ 0.264
```

The same choice works for the specification example x ln x: with u = ln x and v = x²/2, ∫ x ln x dx = (x²/2) ln x − x²/4 + c.

### Worked example 4: using parts twice

Find ∫ x² e^(3x) dx. Taking u = x² gives du/dx = 2x, which is still not constant, so apply the rule again.

```
First pass:  u = x², v = ⅓ e^(3x)
∫ x² e^(3x) dx = ⅓ x² e^(3x) − ⅔ ∫ x e^(3x) dx

Second pass on ∫ x e^(3x) dx:  u = x, v = ⅓ e^(3x)
∫ x e^(3x) dx = ⅓ x e^(3x) − (1/9) e^(3x)

So ∫ x² e^(3x) dx = ⅓ x² e^(3x) − (2/9) x e^(3x) + (2/27) e^(3x) + c
                  = e^(3x) (x²/3 − 2x/9 + 2/27) + c
```

Take care with the minus sign in front of the second integral. Put the bracket round the whole second pass before you subtract.

## Integration using partial fractions

A rational function with a product of linear factors in the denominator is awkward to integrate directly. Split it into simpler fractions, each with one linear denominator, and integrate term by term. Each term of the form k/(ax + b) integrates to (k/a) ln|ax + b|, so the factor 1/a must always appear.

### Proper fractions

A fraction is proper when the degree of the numerator is less than the degree of the denominator.

**Worked example 5.** Find ∫ (7x + 3)/((2x + 3)(x − 1)) dx, then evaluate it from 2 to 5.

Write the fraction in partial fractions:

```
(7x + 3)/((2x + 3)(x − 1)) = A/(2x + 3) + B/(x − 1)
7x + 3 = A(x − 1) + B(2x + 3)
```

Choose values of x that remove one bracket at a time.

```
x = 1:    10 = B(5)       so B = 2
x = −3/2: −15/2 = A(−5/2) so A = 3
```

Check by choosing x = 0: left side 3, right side 3(−1) + 2(3) = 3. Correct.

```
∫ (7x + 3)/((2x + 3)(x − 1)) dx = ∫ 3/(2x + 3) + 2/(x − 1) dx
                                = (3/2) ln|2x + 3| + 2 ln|x − 1| + c
```

For the definite integral:

```
At 5: (3/2) ln 13 + 2 ln 4
At 2: (3/2) ln 7 + 2 ln 1 = (3/2) ln 7
Value = (3/2) ln(13/7) + 4 ln 2 ≈ 3.70
```

### Improper fractions

If the degree of the numerator is equal to or greater than the degree of the denominator, divide first. Only the remainder is split into partial fractions.

**Worked example 6.** Evaluate ∫ from 2 to 4 of (x² + 1)/((x − 1)(x + 2)) dx.

The denominator expands to x² + x − 2. Then x² + 1 = (x² + x − 2) + (3 − x), so

```
(x² + 1)/((x − 1)(x + 2)) = 1 + (3 − x)/((x − 1)(x + 2))
```

Split the remainder:

```
3 − x = A(x + 2) + B(x − 1)
x = 1:  2 = 3A     so A = 2/3
x = −2: 5 = −3B    so B = −5/3
```

Then:

```
∫ [1 + (2/3)/(x − 1) − (5/3)/(x + 2)] dx
   = x + (2/3) ln|x − 1| − (5/3) ln|x + 2|
At 4: 4 + (2/3) ln 3 − (5/3) ln 6
At 2: 2 + 0 − (5/3) ln 4
Value = 2 + (2/3) ln 3 − (5/3) ln(3/2) = 2 − ln 3 + (5/3) ln 2 ≈ 2.06
```

Always check that the limits do not make a bracket zero. Here x − 1 and x + 2 are positive on the interval, so the modulus signs behave.

## Volumes of revolution

Rotate the region between a curve and an axis through 360° about that axis. The resulting solid is a volume of revolution. Slice it into thin discs. Each disc has radius equal to the curve's distance from the axis and thickness equal to the small step along the axis. Summing the discs gives:

| Axis of revolution | Volume |
|---|---|
| x-axis, from x = a to x = b | V = π ∫ y² dx |
| y-axis, from y = c to y = d | V = π ∫ x² dy |

The specification restricts the axes of revolution to the x-axis and the y-axis. The key habit is to square the whole function, not just part of it. For the y-axis you must rewrite the curve as x² in terms of y and use y-limits.

```
Sketch (x-axis):         a thin disc at position x

   y |        ___---o         radius = y
     |   _--``      |         thickness = dx
     |  /           |
     | |            |
   --+-+------------+----> x
       a            b
```

### Worked example 7: about the x-axis

Find the exact volume formed when the region under y = √(3x + 1), between x = 0 and x = 5, is rotated about the x-axis.

```
y² = 3x + 1
V = π ∫ from 0 to 5 of (3x + 1) dx = π [3x²/2 + x] from 0 to 5
  = π (75/2 + 5) = 85π/2
```

### Worked example 8: about the y-axis

Find the exact volume formed when the region bounded by the curve y = 2 ln x, the y-axis and the lines y = 0 and y = 3 is rotated about the y-axis.

Make x the subject: x = e^(y/2), so x² = e^y.

```
V = π ∫ from 0 to 3 of e^y dy = π [e^y] from 0 to 3
  = π (e³ − 1) ≈ 60.0
```

### Worked example 9: combining with other methods

Find the exact volume formed when the region under y = x e^(3x/2), between x = 0 and x = 1, is rotated about the x-axis.

Here y² = x² e^(3x). This is the integral from worked example 4:

```
V = π ∫ from 0 to 1 of x² e^(3x) dx
  = π [e^(3x) (x²/3 − 2x/9 + 2/27)] from 0 to 1
  = π [e³ (9 − 6 + 2)/27 − 2/27] = π (5e³ − 2)/27 ≈ 11.5
```

**Worked example 10: partial fractions in a volume.** The region under y = 1/√((x + 1)(x + 2)) from x = 0 to x = 2 is rotated about the x-axis. Then y² = 1/((x + 1)(x + 2)) = 1/(x + 1) − 1/(x + 2), so

```
V = π [ln|x + 1| − ln|x + 2|] from 0 to 2
  = π [ln(3/4) − ln(1/2)] = π ln(3/2)
```

## Common errors

- Forgetting the minus sign in front of the new integral, or losing it on a second pass.
- Choosing the exponential or the sine as u in a product with x, which makes the new integral harder, not easier.
- Using only the first-pass result when the integrand has x² and a second pass is needed.
- Writing the partial fraction for 1/(2x − 1) as ln|2x − 1| and forgetting the factor 1/2.
- Splitting an improper fraction without dividing first, so the constants A and B cannot be matched.
- Writing π ∫ y dx, or π (∫ y dx)², instead of π ∫ y² dx.
- Using x-limits for a rotation about the y-axis, or leaving the curve as y instead of x² in terms of y.
- Putting π inside the bracket evaluation and then dropping it at the end.

## Where next

Work through the [practice questions](/resources/oxfordaqa-a-level-mathematics-integration-by-parts-partial-fractions-and-volumes-of-practice/), then use the [revision notes](/resources/oxfordaqa-a-level-mathematics-integration-by-parts-partial-fractions-and-volumes-of-revision-notes/) for the final weeks.

## Official syllabus

*OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2*, published by OxfordAQA, for International AS exams from May/June 2018 and International A-level exams from May/June 2019. See section P2.7 (Integration).
