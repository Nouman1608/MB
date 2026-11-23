---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.10 Compound angle identities (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.10
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-10"
description: "IB Maths AA HL 3.10 study guide: sin, cos and tan of A ± B, the double angle identity for tan, exact values, proofs and equations, with worked examples."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 3.10 of the IB *Mathematics: analysis and approaches guide* (first assessment 2021) covers the compound angle identities and the double angle identity for tan. It is additional higher level (AHL) content, examined at HL only. The identities are in the formula booklet; what the exam tests is choosing and applying them accurately, often without a calculator.

This page goes deeper on 3.10 alone; the [circular functions and identities study guide](/resources/ib-dp-mathematics-aa-circular-functions-trig-identities/) gives the overview. Condense this page with the [3.10 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-3-10-revision-notes/) and test yourself with the [3.10 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-3-10-practice/).

## The identities

```
sin(A ± B) = sin A cos B ± cos A sin B
cos(A ± B) = cos A cos B ∓ sin A sin B
tan(A ± B) = (tan A ± tan B) / (1 ∓ tan A tan B)
tan 2A     = 2 tan A / (1 − tan²A)
```

Read ± and ∓ together: take the top sign throughout or the bottom sign throughout. So cos(A + B) has a **minus** in the middle and cos(A − B) has a **plus**. sin keeps the sign of the bracket.

A compound angle is not split like a bracket in algebra: sin(A + B) is not sin A + sin B. Test with A = B = π/4: sin(π/2) = 1, but sin(π/4) + sin(π/4) = √2.

## Where the other identities come from

The compound angle identities generate most of the trigonometric identities in the course.

**Double angles.** Put B = A:

```
sin 2A = sin A cos A + cos A sin A = 2 sin A cos A
cos 2A = cos A cos A − sin A sin A = cos²A − sin²A
tan 2A = (tan A + tan A)/(1 − tan A tan A) = 2 tan A/(1 − tan²A)
```

**The tan identity from sin and cos.** Divide the numerator and denominator of sin(A + B)/cos(A + B) by cos A cos B:

```
tan(A + B) = (sin A cos B + cos A sin B)/(cos A cos B − sin A sin B)
           = (tan A + tan B)/(1 − tan A tan B)
```

**Symmetry results.** cos(π/2 − θ) = cos(π/2)cos θ + sin(π/2)sin θ = sin θ. Results like this are studied in their own right in [section 3.11](/resources/ib-dp-mathematics-analysis-and-approaches-3-11/).

## Worked examples

### Example 1: exact values

Find the exact values of cos 75° and tan 75°.

```
cos 75° = cos(45° + 30°) = cos 45° cos 30° − sin 45° sin 30°
        = (√2/2)(√3/2) − (√2/2)(1/2) = (√6 − √2)/4

tan 75° = (tan 45° + tan 30°)/(1 − tan 45° tan 30°) = (1 + 1/√3)/(1 − 1/√3)
        = (√3 + 1)/(√3 − 1) = (√3 + 1)²/2 = (4 + 2√3)/2 = 2 + √3
```

Multiplying the top and bottom by √3 first clears the fractions; rationalising the denominator gives the simplest form. In radians, the same values are cos(5π/12) and tan(5π/12).

### Example 2: two angles in different quadrants

Given sin A = 3/5 with A acute, and cos B = −5/13 with B obtuse, find sin(A + B), cos(A + B) and tan(A + B).

```
cos A = 4/5 (acute)        sin B = 12/13 (obtuse, so sin positive)
sin(A + B) = (3/5)(−5/13) + (4/5)(12/13) = −15/65 + 48/65 = 33/65
cos(A + B) = (4/5)(−5/13) − (3/5)(12/13) = −20/65 − 36/65 = −56/65
tan(A + B) = (33/65)/(−56/65) = −33/56
```

sin(A + B) > 0 and cos(A + B) < 0, so A + B is obtuse. A check: 33² + 56² = 1089 + 3136 = 4225 = 65².

### Example 3: an equation

Solve sin(x + π/6) = 2 cos x for 0 ≤ x ≤ 2π.

```
sin x cos(π/6) + cos x sin(π/6) = 2 cos x
(√3/2) sin x + (1/2) cos x = 2 cos x
(√3/2) sin x = (3/2) cos x
```

If cos x = 0, then sin x = ±1 and the left side would be ±√3/2 ≠ 0, so dividing by cos x is safe:

```
tan x = 3/√3 = √3   →   x = π/3, 4π/3
```

Check x = π/3: sin(π/2) = 1 and 2 cos(π/3) = 1.

### Example 4: a triple angle by "show that"

Show that cos 3θ = 4cos³θ − 3 cos θ.

```
cos 3θ = cos(2θ + θ) = cos 2θ cos θ − sin 2θ sin θ
       = (2cos²θ − 1) cos θ − 2 sin θ cos θ sin θ
       = 2cos³θ − cos θ − 2 cos θ (1 − cos²θ)
       = 4cos³θ − 3 cos θ
```

Writing 3θ as 2θ + θ and then choosing the form of cos 2θ in terms of cos θ only are the two decisions that earn the method marks.

### Example 5: working backwards from tan 2A

Given tan 2A = 3/4 and A is acute, find tan A.

```
2t/(1 − t²) = 3/4, with t = tan A
8t = 3 − 3t²   →   3t² + 8t − 3 = 0   →   (3t − 1)(t + 3) = 0
t = 1/3 or t = −3; A is acute, so tan A = 1/3
```

Check: 2(1/3)/(1 − 1/9) = (2/3)/(8/9) = 3/4.

### Example 6: one expression as a single function

Show that sin x + cos x = √2 sin(x + π/4), and hence find the greatest value of sin x + cos x.

```
√2 sin(x + π/4) = √2 (sin x cos(π/4) + cos x sin(π/4))
                = √2 (sin x (√2/2) + cos x (√2/2)) = sin x + cos x
```

The greatest value of sin(x + π/4) is 1, so the greatest value of sin x + cos x is **√2**, when x + π/4 = π/2, that is x = π/4. Expanding the given right-hand side is the efficient route here.

## Common mistakes

- Writing cos(A + B) = cos A cos B + sin A sin B. The middle sign is opposite to the bracket.
- Distributing: sin(A + B) = sin A + sin B.
- Wrong signs for sin B or cos B because the quadrant of B was ignored.
- Choosing a form of cos 2θ that leaves both sin and cos in a triple angle proof.
- In tan(A − B), writing 1 − tan A tan B in the denominator; for a difference it is 1 + tan A tan B.
- Accepting both roots of a quadratic in tan A without using the given range of A.
- Leaving a denominator such as √3 − 1 unrationalised when "simplest form" is asked.

## Exam technique

- **Find the exact value**: split the angle into two standard angles (30°, 45°, 60° or their radian forms), and show the substitution before simplifying.
- **Show that**: name the identity you use, expand, then simplify in a single chain from one side.
- **Hence**: the previous result is the intended tool; for example, an identity for cos 3θ is "hence" used to solve a cubic in cos θ.
- **Express in the form**: expand the given form and compare, as in Example 6.
- On Paper 1, keep values exact throughout; on Paper 2, a GDC can check an identity by graphing both sides.

## Where to go next

- Recall the identities with the [3.10 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-3-10-revision-notes/) and practise with the [3.10 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-3-10-practice/).
- Revise the SL double angle identities in the [3.6 guide](/resources/ib-dp-mathematics-analysis-and-approaches-3-6/).
- Continue to the [3.11 graph symmetry guide](/resources/ib-dp-mathematics-analysis-and-approaches-3-11/).
