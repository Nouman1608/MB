---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.6 The Pythagorean identity and double angle identities"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.06
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-6"
description: "IB Maths AA 3.6 study guide: the Pythagorean identity, sin 2θ and cos 2θ, finding one ratio from another and proving identities, with worked examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 3.6 of the IB *Mathematics: analysis and approaches guide* (first assessment 2021) asks for three things: the Pythagorean identity cos²θ + sin²θ = 1, the double angle identities for sine and cosine, and the relationship between the trigonometric ratios. It is SL and HL content, and it is examined on both papers, most heavily on the calculator-free Paper 1, where answers must be exact.

This page goes deeper on 3.6 alone. For the whole circular functions unit, see the [circular functions and identities study guide](/resources/ib-dp-mathematics-aa-circular-functions-trig-identities/). Condense this page with the [3.6 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-6-revision-notes/) and test yourself with the [3.6 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-6-practice/).

## Identity or equation?

An **identity** is true for every value of θ for which both sides are defined. It is sometimes written with ≡. An **equation** such as sin θ = 0.3 is true only for particular values. The distinction matters in the exam: you *prove* or *show* an identity, but you *solve* an equation.

The Pythagorean identity comes straight from the unit circle. The point at angle θ is (cos θ, sin θ), and every point on a circle of radius 1 centred at the origin satisfies x² + y² = 1. So

**cos²θ + sin²θ = 1** for every θ.

Rearranged, it gives the two forms you use most:

- sin²θ = 1 − cos²θ
- cos²θ = 1 − sin²θ

It also factorises usefully: 1 − cos²θ = (1 − cos θ)(1 + cos θ) = sin²θ. Spotting a difference of two squares like this is often the key step in a "show that" question.

## The relationship between the ratios

The guide's phrase "relationship between trigonometric ratios" covers tan θ = sin θ / cos θ together with the Pythagorean identity. Together they let you find any ratio from any other without finding θ itself.

**Method**

1. Use the identity (or a right-angled triangle) to find the size of the missing ratio.
2. Decide the sign from the quadrant that the question gives.
3. If the question gives no quadrant, keep both signs.

A sketch of a right-angled triangle is often quicker than algebra when one ratio is a simple fraction. If tan θ = −2, draw a triangle with opposite 2 and adjacent 1; the hypotenuse is √5. That gives the sizes |sin θ| = 2/√5 and |cos θ| = 1/√5, and the quadrant gives the signs.

## The double angle identities

For every θ:

- **sin 2θ = 2 sin θ cos θ**
- **cos 2θ = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ**

The second and third forms of cos 2θ come from replacing sin²θ or cos²θ with the Pythagorean identity. Choose the form that uses only the ratio you know, or the one that turns an expression into a single ratio.

Two rearrangements of the cos 2θ forms are worth knowing, because they turn a square into a first power:

- cos²θ = (1 + cos 2θ)/2
- sin²θ = (1 − cos 2θ)/2

"Double angle" means the angle on the left is twice the angle on the right, whatever the angle is called. So sin 4x = 2 sin 2x cos 2x, and cos x = 1 − 2sin²(x/2) are also double angle identities. The guide notes that simple diagrams or technology may be used to illustrate these identities; you can check one on your GDC by graphing both sides and seeing that the curves coincide.

## Worked examples

### Example 1: all the ratios from one

Given that tan θ = −2 and 3π/2 < θ < 2π, find the exact values of sin θ, cos θ, sin 2θ and cos 2θ.

```
Triangle: opposite 2, adjacent 1, hypotenuse √5
Fourth quadrant: cos positive, sin negative
sin θ = −2/√5 = −2√5/5        cos θ = 1/√5 = √5/5
sin 2θ = 2(−2/√5)(1/√5) = −4/5
cos 2θ = cos²θ − sin²θ = 1/5 − 4/5 = −3/5
```

Check: sin²2θ + cos²2θ = 16/25 + 9/25 = 1, so the pair is consistent. Both values are negative, so 2θ points into the third quadrant. That fits: 2θ lies between 3π and 4π, which covers the same positions on the circle as π to 2π.

### Example 2: applying the identity twice

Given that cos θ = 1/4, find the exact value of cos 4θ.

```
cos 2θ = 2cos²θ − 1 = 2(1/16) − 1 = −7/8
cos 4θ = 2cos²(2θ) − 1 = 2(49/64) − 1 = 17/32
```

Treat 4θ as "double 2θ". No quadrant is needed here because cos²θ fixes cos 2θ uniquely.

### Example 3: working backwards to the single angle

Given that cos 2A = 7/25 and A is acute, find sin A and tan A.

```
1 − 2sin²A = 7/25  →  sin²A = 9/25  →  sin A = 3/5   (A acute, so positive)
cos²A = 1 − 9/25 = 16/25  →  cos A = 4/5
tan A = 3/4
```

Using the form 1 − 2sin²A is the efficient choice because the question asks for sin A.

### Example 4: an annotated "show that"

Show that (sin 2θ)/(1 + cos 2θ) = tan θ, for cos θ ≠ 0.

```
1 + cos 2θ = 1 + (2cos²θ − 1) = 2cos²θ        ← choose the form that cancels the 1
sin 2θ / (1 + cos 2θ) = 2 sin θ cos θ / 2cos²θ
                      = sin θ / cos θ
                      = tan θ                   ← finish with the right-hand side
```

The annotations show the reasoning examiners look for: one side is transformed, step by step, into exactly the other. The condition cos θ ≠ 0 is needed because cos θ appears in a denominator.

## Using the identities to simplify

Many questions use 3.6 inside a larger task, especially in calculus and equation solving.

- **Turning a mixed expression into one ratio.** cos 2x + sin x = 1 − 2sin²x + sin x is a quadratic in sin x. Section 3.8 uses exactly this step to solve equations; see the [3.8 solving trigonometric equations guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-8/).
- **Reducing powers.** sin²x = (1 − cos 2x)/2 lets you integrate sin²x, which you meet in the calculus topic.
- **Factorising a difference of squares.** cos⁴θ − sin⁴θ = (cos²θ − sin²θ)(cos²θ + sin²θ) = cos 2θ × 1 = cos 2θ.
- **Spotting a hidden sin 2θ.** sin θ cos θ = ½ sin 2θ, so the greatest value of 6 sin x cos x is 3, since it equals 3 sin 2x.

## Common mistakes

- Writing sin 2θ = 2 sin θ. The angle is doubled, not the ratio; for θ = π/2, sin 2θ = 0 but 2 sin θ = 2.
- Treating cos²θ + sin²θ = 1 as cos θ + sin θ = 1. Squares do not "cancel".
- Taking a square root and forgetting the sign: sin²θ = 9/25 gives sin θ = ±3/5 until the quadrant decides.
- Using the wrong quadrant for 2θ. The sign of sin 2θ comes from 2 sin θ cos θ, not from the quadrant of θ.
- Writing sin²θ as sin θ². The first means (sin θ)²; the second means the sine of θ².
- Working on both sides of a "show that" at once and meeting in the middle without a clear chain of equalities.

## Exam technique: the command words

- **Find the exact value**: give surds, fractions or multiples of π, not decimals. Decimals lose the accuracy mark on Paper 1.
- **Show that**: the answer is given, so every step must be written. Start from one side, usually the more complicated one, and end with the other side written out in full.
- **Hence**: use the result of the previous part. A "hence" after a cos 2θ result usually means substitute it, not start again.
- **Write down**: little or no working is needed, for example writing sin 2θ = 2 sin θ cos θ from memory.
- **Prove**: as for "show that", but the result may need a condition, such as cos θ ≠ 0, stated clearly.

The identities cos²θ + sin²θ = 1 and the double angle identities for sine and cosine appear in the formula booklet, but recognising which form to use is the skill being tested.

## Where to go next

- Recall the essentials with the [3.6 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-6-revision-notes/).
- Test yourself with the [3.6 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-6-practice/).
- HL students extend these results with the [3.10 compound angle identities guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-10/), which derives the double angle identities.
