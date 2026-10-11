---
title: "OxfordAQA International AS and A-level Mathematics: Compound and double angle formulae and R-form (9660) -- Revision Notes"
seoTitle: "OxfordAQA 9660 Compound, Double Angle, R-form Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Compound and double angle formulae, R-form, identities and equations"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 192
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-trigonometry-oxfordaqa-alevel-maths"
description: "Condensed notes on compound and double angle formulae, the R-form, identities, integration and equations for OxfordAQA International A-level Unit P2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

Condensed recall for the second part of content area P2.4 (Trigonometry) in the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification places it in International A-level Unit P2, so it is A2 content and not examined at International AS. For full explanations use the [study guide](/resources/oxfordaqa-a-level-mathematics-compound-and-double-angle-formulae-r-form-identities/), and for questions use the [practice set](/resources/oxfordaqa-a-level-mathematics-compound-and-double-angle-formulae-r-form-identities-practice/). The [course hub](/boards/oxfordaqa/a-level/mathematics/), the [checklist](/checklists/oxfordaqa/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/) help you plan. Inverse and reciprocal functions are in their [own notes](/resources/oxfordaqa-a-level-mathematics-inverse-trigonometric-functions-and-secant-cosecant-revision-notes/).

## Formulae to know

| Result | Statement |
|---|---|
| sin(A ± B) | sin A cos B ± cos A sin B |
| cos(A ± B) | cos A cos B ∓ sin A sin B |
| tan(A ± B) | (tan A ± tan B)/(1 ∓ tan A tan B) |
| sin 2x | 2 sin x cos x |
| cos 2x | cos² x − sin² x = 2cos² x − 1 = 1 − 2sin² x |
| tan 2x | 2 tan x/(1 − tan² x) |
| Power reduction | cos² x = (1 + cos 2x)/2 and sin² x = (1 − cos 2x)/2 |

The specification says the double angle formulae, including all three forms of cos 2x, are expected knowledge. In cos(A ± B) the sign on the right is the opposite of the sign on the left. The power-reduction results are the cos 2x forms rearranged, so you can rebuild them in one line.

## Method boxes

**Exact values from compound angles**

1. Split the angle into two with known values, for example 105° = 60° + 45° or 15° = 45° − 30°.
2. Write the formula, substitute the exact values, then simplify.

**Values from a given ratio**

1. Draw or imagine the right-angled triangle to get the missing ratio.
2. Fix its sign from the quadrant given (acute or obtuse).
3. Substitute into the formula.

**Proving an identity**

1. Start from one side, usually the more complicated one.
2. Convert everything to one angle using double or compound formulae.
3. Choose the form of cos 2x that cancels best, then finish on the other side exactly.

**R-form for a cos θ + b sin θ**

1. Pick the form: r cos(θ − α) or r sin(θ + α) when a and b are both positive. Use r cos(θ + α) when a is positive and b is negative, and r sin(θ − α) when b is positive and a is negative.
2. Expand the form, match the coefficients of cos θ and sin θ, and write down r cos α and r sin α.
3. r = √(a² + b²), tan α = (r sin α)/(r cos α), with α acute.
4. To solve: divide by r, find the principal value, then use the symmetry of sine or cosine over the shifted interval.

**Integrating a square or a product**

1. Replace cos² (or sin²) with the power-reduction form, or a product with sin 2x.
2. Integrate term by term, remembering to divide by the coefficient of x inside the angle.

**Equations**

1. Reduce to one function of one angle.
2. Factorise. Never divide by a function that may be zero.
3. List all solutions in the interval for each factor, and check the interval.

## Worked reminders

**Exact value.** sin 15° = sin(45° − 30°) = (√2/2)(√3/2) − (√2/2)(1/2) = (√6 − √2)/4.

**Double angle from a ratio.** If sin θ = 1/4, then cos 2θ = 1 − 2(1/16) = 7/8.

**R-form with a minus sign.** Write 5 cos θ − 3 sin θ as r cos(θ + α). Expanding gives r cos α = 5 and r sin α = 3, so r = √34 and tan α = 3/5, giving α = 31.0°. Then 5 cos θ − 3 sin θ = 2 means cos(θ + 31.0°) = 2/√34, so θ + 31.0° = 69.9° or 290.1°, and **θ = 39.0° or 259.1°** in 0° ≤ θ ≤ 360°.

**Equation with a product.** sin 2x = cos x gives cos x (2 sin x − 1) = 0, so for 0 ≤ x ≤ 2π the solutions are x = π/6, π/2, 5π/6, 3π/2.

**Integration.** 2cos² 4x = 1 + cos 8x, so ∫ 2cos² 4x dx = x + sin 8x/8 + c.

## Exact values from 15° and 75°

| Angle | sin | cos | tan |
|---|---|---|---|
| 15° | (√6 − √2)/4 | (√6 + √2)/4 | 2 − √3 |
| 75° | (√6 + √2)/4 | (√6 − √2)/4 | 2 + √3 |

All of these come from 45° ± 30° and the compound formulae. You can rebuild a row in about four lines, so learn the method and not the table. Note that sin 75° = cos 15° and sin 15° = cos 75°, because the angles are complementary.

## How the results connect

1. The compound angle formulae are the base. Everything else follows from them.
2. Put B = A and you get the double angle formulae.
3. Replace sin² x with 1 − cos² x, or cos² x with 1 − sin² x, to move between the three forms of cos 2x.
4. Rearrange two of those forms for the power-reduction results used in integration.
5. Write 2x + x, then use the double angle and compound formulae, to reach sin 3x and cos 3x.
6. Use the compound formulae in reverse to get the R-form. The matching of coefficients is just a cos(θ − α) expansion read from right to left.

The triple angle results are sin 3x = 3 sin x − 4 sin³ x and cos 3x = 4cos³ x − 3 cos x. Be ready to derive them inside a proof rather than only quote them.

## Choosing the right move in an equation

| What you see | Move |
|---|---|
| sin 2x beside sin x or cos x | Replace sin 2x with 2 sin x cos x, then factorise |
| cos 2x beside sin x | Use 1 − 2 sin² x to form a quadratic in sin x |
| cos 2x beside cos x | Use 2cos² x − 1 to form a quadratic in cos x |
| tan 2x beside tan x | Use the tan 2x formula, then factorise to keep tan x = 0 |
| sin(x ± k) or cos(x ± k) with a plain sin x or cos x | Expand, then divide through to form tan x, after checking the zero case |
| a cos x + b sin x = c | Write in R-form, divide by r, then use the shifted interval |

Always write the interval for the whole angle, such as x + α, before you list angles.

## Must-know distinctions

| Often confused | Difference |
|---|---|
| sin 2x and 2 sin x | sin 2x = 2 sin x cos x. It is not double sin x |
| cos² x and cos 2x | cos² x = (1 + cos 2x)/2. They are different functions |
| r cos(θ − α) and r sin(θ + α) | Both can represent the same expression, with different α. Check α after you choose |
| An identity and an equation | An identity (≡) holds for every x. An equation holds only for some values |
| Principal value and all solutions | The inverse function gives one angle. The shifted interval gives the full set |

## Quick self-test

1. Expand cos(A + B).
2. Find the exact value of sin 195°.
3. tan A = 4 and tan B = 3/5. Find tan(A − B).
4. Simplify 1 − 2 sin² 3x to a single term.
5. Find tan 2x given that tan x = 1/3.
6. Write 12 cos θ + 5 sin θ in the form r cos(θ − α), with α in degrees to 1 decimal place.
7. State the greatest value of 4 + 12 cos θ + 5 sin θ.
8. Find ∫ 2cos² 4x dx.
9. Solve sin 2x = 3 sin x for 0 ≤ x ≤ 2π.
10. Which of the three forms of cos 2x is best for solving 3 cos 2θ + sin θ + 2 = 0, and why?

### Answers

1. cos A cos B − sin A sin B.
2. sin 195° = sin(150° + 45°) = sin 150° cos 45° + cos 150° sin 45° = (1/2)(√2/2) − (√3/2)(√2/2) = **(√2 − √6)/4**.
3. (4 − 3/5)/(1 + 12/5) = (17/5)/(17/5) = **1**.
4. **cos 6x**.
5. (2/3)/(1 − 1/9) = (2/3)/(8/9) = **3/4**.
6. r = √(144 + 25) = 13 and tan α = 5/12, so **13 cos(θ − 22.6°)**.
7. 4 + 13 = **17**.
8. **x + (sin 8x)/8 + c**.
9. sin x (2 cos x − 3) = 0. Since cos x = 3/2 is impossible, only sin x = 0 remains: **x = 0, π, 2π**.
10. 1 − 2 sin² θ, because the other terms contain sin θ, so the equation becomes a quadratic in sin θ alone.

## Where marks are usually lost

- Changing the wrong sign in cos(A ± B), which gives the wrong exact value.
- Taking the wrong sign for the missing ratio when a quadrant or an acute or obtuse angle is given.
- Cancelling a factor of sin x or cos x from both sides of an equation and losing x = 0, π or similar solutions.
- Proving an identity by working on both sides together, or by writing the target on the final line without a justified step.
- Using a form of cos 2x that leaves two different functions in one equation.
- Choosing an R-form whose matching gives a negative cos α, so that α is not acute and tan α has the wrong sign.
- Rounding α early, so that the solutions are out in the last digit.
- Solving R-form equations without listing the second solution from the symmetry of sine or cosine.
- Missing the extra solutions when the interval is longer than one full turn, for instance 0 ≤ x ≤ 3π.
- Integrating cos 2x as sin 2x without the factor 1/2, or leaving out the constant of integration.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA: content area P2.4 Trigonometry (compound angle and double angle formulae, the forms r cos(θ ± α) and r sin(θ ± α), identities, integration and equations), International A-level Unit P2.
