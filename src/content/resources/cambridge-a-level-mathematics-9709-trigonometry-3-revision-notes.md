---
title: "Cambridge A Level Mathematics (9709): Trigonometry (Pure Mathematics 3) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 3 – Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.3
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "trigonometry-cambridge-alevel-maths-3"
description: "Revision notes for Cambridge 9709 Paper 3 section 3.3 Trigonometry: reciprocal graphs, identities, compound and double angles, R-form, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section **3.3 Trigonometry** of Pure Mathematics 3 (Paper 3) in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027. Full explanations are in the [3.3 study guide](/resources/cambridge-a-level-mathematics-9709-trigonometry-3/); marked questions are in the [3.3 practice questions](/resources/cambridge-a-level-mathematics-9709-trigonometry-3-practice/).

## Identities (all in MF19 except the R-form)

```text
sec θ = 1/cos θ     cosec θ = 1/sin θ     cot θ = cos θ/sin θ
sec²θ ≡ 1 + tan²θ           cosec²θ ≡ 1 + cot²θ
sin(A ± B) ≡ sin A cos B ± cos A sin B
cos(A ± B) ≡ cos A cos B ∓ sin A sin B
tan(A ± B) ≡ (tan A ± tan B)/(1 ∓ tan A tan B)
sin 2A ≡ 2 sin A cos A
cos 2A ≡ cos²A − sin²A ≡ 2cos²A − 1 ≡ 1 − 2sin²A
tan 2A ≡ 2 tan A/(1 − tan²A)
```

Note the sign swap in cos(A ± B): the plus form has a minus in the middle.

## Reciprocal graphs at a glance

| | sec θ | cosec θ | cot θ |
|---|---|---|---|
| Undefined where | cos θ = 0 | sin θ = 0 | sin θ = 0 |
| Range | ≤ −1 or ≥ 1 | ≤ −1 or ≥ 1 | all real |
| Period | 360° (2π) | 360° (2π) | 180° (π) |
| Turning points | (0°, 1), (180°, −1), … | (90°, 1), (270°, −1), … | none |

## R-form recipe

1. Expand the form asked for, for example R sin(θ − α) = R sin θ cos α − R cos θ sin α.
2. Match coefficients: R cos α = a, R sin α = b (with the signs from step 1).
3. R = √(a² + b²); tan α = (R sin α)/(R cos α).
4. To solve a sin θ + b cos θ = c: R sin(θ − α) = c, so sin(θ − α) = c/R. Shift the interval by α before finding angles.
5. Greatest value of R sin(θ − α) is R and least is −R; for 1/(k + R sin(θ − α)) the extremes swap.

## Which identity?

| You see | Do this |
|---|---|
| tan² with sec, or sec² with tan | Replace with sec²θ ≡ 1 + tan²θ |
| cot² with cosec, or cosec² with cot | Replace with cosec²θ ≡ 1 + cot²θ |
| cos 2θ with cos θ | 2cos²θ − 1 |
| cos 2θ with sin θ | 1 − 2sin²θ |
| sin 2θ with sin θ or cos θ | 2 sin θ cos θ, then factorise |
| θ + 60°, 45° − θ, etc. | Expand with compound angles |
| a sin θ + b cos θ = c | R-form |
| sin 3θ or cos 3θ | Write as sin(2θ + θ) and expand twice |

## Key terms

| Term | Meaning |
|---|---|
| Reciprocal function | sec, cosec or cot: 1 over cos, sin or tan |
| Identity (≡) | True for every value of the variable where defined |
| Compound angle | An angle written as a sum or difference, A ± B |
| Double angle | 2A, expressed through A |
| R-form | R sin(θ ± α) or R cos(θ ± α) equal to a sin θ + b cos θ |
| Principal value | The value given by sin⁻¹, cos⁻¹ or tan⁻¹ on a calculator |
| Exact value | A value in surds and fractions, not a decimal |

## Exam traps

- **Dividing out a factor.** cos θ(4 sin θ − 3) = 0 gives two families; dividing by cos θ loses one.
- **Impossible values.** sin θ = 2, sec θ = 0.5 and cosec θ = 1/3 have no solutions. State that, then move on.
- **Units.** π in the interval means radians.
- **Multiple angles.** For sin 2θ in 0° < θ < 360°, solve for 2θ in 0° < 2θ < 720°, then halve.
- **R-form α.** Check the quadrant: with R cos α and R sin α both positive, α is acute.
- **Proofs.** Start from one side; do not work on both sides at once, and do not start with the result.
- **Exact answers.** tan 15° = 2 − √3, not 0.268.

## Self-test

1. Find the exact value of sin 15°.
2. State the range of y = sec x.
3. Solve cosec θ = 2 for 0° < θ < 360°.
4. Simplify (1 − cos 2θ)/sin 2θ.
5. Express 3 cos θ + 4 sin θ as R cos(θ − α), 0° < α < 90°.
6. State the greatest value of 3 cos θ + 4 sin θ + 2.
7. Given tan A = 2, find tan 2A.
8. Solve cot θ = 3 for 0° < θ < 180°.
9. Solve sin 2θ = sin θ for 0° ≤ θ ≤ 180°.
10. Write cos(θ + 60°) in terms of sin θ and cos θ.
11. Solve sec²θ = 4 for 0° < θ < 180°.
12. Explain why 2 sin θ + 5 = 0 has no solutions.

**Answers**

1. sin(45° − 30°) = (√2/2)(√3/2) − (√2/2)(½) = **(√6 − √2)/4**.
2. **y ≤ −1 or y ≥ 1**.
3. sin θ = ½: **θ = 30°, 150°**.
4. 2sin²θ/(2 sin θ cos θ) = **tan θ**.
5. R = 5, tan α = 4/3, α = 53.1°: **5 cos(θ − 53.1°)**.
6. 5 + 2 = **7**.
7. 2(2)/(1 − 4) = **−4/3**.
8. tan θ = 1/3: **θ = 18.4°** (the next value, 198.4°, is outside the interval).
9. sin θ(2 cos θ − 1) = 0: sin θ = 0 gives 0°, 180°; cos θ = ½ gives 60°. **θ = 0°, 60°, 180°**.
10. **½ cos θ − (√3/2) sin θ**.
11. cos²θ = ¼, cos θ = ±½: **θ = 60°, 120°**.
12. sin θ = −2.5, but −1 ≤ sin θ ≤ 1, so there are no solutions.

## Links

- Full explanations: [3.3 study guide](/resources/cambridge-a-level-mathematics-9709-trigonometry-3/)
- Marked questions: [3.3 practice questions](/resources/cambridge-a-level-mathematics-9709-trigonometry-3-practice/)
- Paper 3 summary: [Pure Mathematics 3 revision notes](/resources/a-level-maths-9709-pure-mathematics-3-revision-notes/)
