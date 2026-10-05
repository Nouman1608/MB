---
resourceId: "mb-ap-physcem-8.4-practice"
title: "Electric Fields of Charge Distributions: Practice Questions (Physics C: E&M 8.4)"
description: "Seven original Marlbridge practice questions on fields of continuous charge: rods, rings, arcs and long lines, with full solutions and suggested mark points."
course: "physics-c-electricity-and-magnetism"
unit: 8
topics: ["8.4"]
resourceType: "practice-questions"
prerequisites:
  - "Writing dq = λ dx or λR dθ and resolving dE into components"
prerequisiteResources: ["mb-ap-physcem-8.4-study-guide"]
learningObjectives:
  - "Use symmetry to find the direction of E and the components that cancel"
  - "Derive and evaluate E for rods, rings and arcs by integration"
  - "Compare exact results with point-charge and infinite-line models"
  - "Check results using far-away limits"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "ε₀ = 8.85 × 10⁻¹² C²/(N·m²); k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C². Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-8.4-study-guide", "mb-ap-physcem-8.4-revision-notes", "mb-ap-physcem-8.4-checklist"]
next: "mb-ap-physcem-8.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Questions 6 and 7 need calculus: set up the integral before you evaluate it."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data for every question: ε₀ = 8.85 × 10⁻¹² C²/(N·m²) and k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C². All rods, rings and arcs are thin, and their charge is uniform unless a density function is given. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

A thin ring of radius a carries a charge +Q spread uniformly around it. What is the magnitude of the electric field at the **centre** of the ring?

- (A) kQ/a²
- (B) 2kQ/(πa²)
- (C) 2kQ/(3√3 a²)
- (D) 0

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Every small piece dq has a partner directly opposite it, at the same distance a from the centre. Their fields at the centre are equal in size and opposite in direction, so they cancel. Adding all the pairs gives E = 0.

- (A) adds the magnitudes k dq/a² of all the pieces as if every dE pointed the same way. E is a vector, so you must add components.
- (B) is the field at the centre of a **semicircle** of radius a carrying Q. The other half of the full ring cancels it.
- (C) is the **largest** field on the ring's axis, found at z = a/√2, not at the centre.
</details>

## Question 2 (multiple choice · core)

A thin rod of length 0.20 m carries +4.0 × 10⁻⁹ C. Point P lies on the line of the rod, 0.10 m beyond one end. What is the magnitude of the electric field at P?

- (A) 4.0 × 10² N/C
- (B) 9.0 × 10² N/C
- (C) 1.2 × 10³ N/C
- (D) 3.6 × 10³ N/C

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Integrating k λ ds/(distance)² along the rod gives E = kQ/[d(d + L)] = (8.99 × 10⁹)(4.0 × 10⁻⁹) ÷ [(0.10)(0.30)] = 35.96 ÷ 0.030 = 1.20 × 10³ N/C.

- (A) puts all the charge at the **far** end, 0.30 m away: kQ/(0.30)². Every piece is closer than that, so this is too small.
- (B) puts all the charge at the **centre**, 0.20 m away: kQ/(0.20)² = 899 N/C. Because of the 1/r² rule, the near half adds more than the far half takes away, so the true field is larger.
- (D) puts all the charge at the **near** end, 0.10 m away: kQ/(0.10)². Every piece is further than that, so this is too large.
</details>

## Question 3 (multiple choice · core)

A thin rod bent into a semicircle of radius R carries a uniform charge per unit length λ. The field at the centre has magnitude E₀. One half of the rod (a quarter circle) is removed. The remaining quarter circle keeps the same λ. What is the magnitude of the field at the centre now?

- (A) E₀/2
- (B) E₀/√2
- (C) E₀
- (D) 2E₀

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** For the semicircle, E₀ = 2kλ/R. Each quarter contributes kλ/R along the semicircle's symmetry line and kλ/R across it; the two across-components cancel. The single quarter keeps both of its components, kλ/R and kλ/R, at right angles. Its field is √[(kλ/R)² + (kλ/R)²] = √2 kλ/R = E₀/√2 ≈ 0.71E₀.

- (A) assumes the field is proportional to the amount of charge. That ignores direction: the remaining quarter's across-component is no longer cancelled.
- (C) assumes the removed quarter added nothing to E₀. It added kλ/R along the symmetry line.
- (D) assumes removing charge doubles the field. Only the across-component stops cancelling.
</details>

## Question 4 (calculation · core)

A thin ring of radius 0.040 m carries +5.0 × 10⁻⁹ C. Point P is on the ring's axis, 0.030 m from its centre.

(a) Find the magnitude and direction of E at P.
(b) Explain why your answer is smaller than kQ/r², where r is the distance from the ring to P.
(c) A small charge of −2.0 × 10⁻⁹ C is placed at P. Find the force on it.

<details>
<summary>Worked solution</summary>

1. (a) Every piece of the ring is r = √(0.030² + 0.040²) = 0.050 m from P. Using E = kQz/(z² + a²)^(3/2) = (8.99 × 10⁹)(5.0 × 10⁻⁹)(0.030) ÷ (0.050)³ = **1.08 × 10⁴ N/C**, along the axis, **away from the ring**.
2. (b) kQ/r² = 1.80 × 10⁴ N/C is what you get by adding the sizes of all the dE vectors. By symmetry only their axial components survive, each multiplied by cos θ = z/r = 0.60. So E = 0.60 × 1.80 × 10⁴ = 1.08 × 10⁴ N/C. The components across the axis cancel in pairs.
3. (c) F = qE = (2.0 × 10⁻⁹)(1.08 × 10⁴) = **2.2 × 10⁻⁵ N**, directed along the axis **towards the ring's centre**, because the charge is negative.

Suggested mark points (3): 1 for E = 1.08 × 10⁴ N/C with direction along the axis away from the ring; 1 for explaining the cancellation of the components across the axis (or the factor cos θ = z/r); 1 for the force 2.2 × 10⁻⁵ N with the correct (towards the centre) direction.

Common error: using kQ/z² = 5.0 × 10⁴ N/C, which treats the ring as a point charge at its centre. P is closer to the ring's centre than its radius, so this model is badly wrong.
</details>

## Question 5 (calculation · core)

A thin rod of length 0.60 m carries +3.0 × 10⁻⁹ C. Point P lies on the rod's perpendicular bisector. The exact field there is E = kQ/[x√(x² + L²/4)], where x is the distance from the rod.

(a) At x = 0.040 m, calculate E exactly and with the infinite-line model E = 2kλ/x. Comment on the difference.
(b) At x = 3.0 m, calculate E exactly and with the point-charge model E = kQ/x². Comment on the difference.

<details>
<summary>Worked solution</summary>

1. λ = Q/L = 3.0 × 10⁻⁹ ÷ 0.60 = 5.0 × 10⁻⁹ C/m, and kQ = 26.97 N·m²/C.
2. (a) Exact: √(0.040² + 0.30²) = 0.3027 m, so E = 26.97 ÷ (0.040 × 0.3027) = **2.23 × 10³ N/C**. Infinite line: E = 2(8.99 × 10⁹)(5.0 × 10⁻⁹) ÷ 0.040 = **2.25 × 10³ N/C**, less than 1% high. P is very close to a long rod, so the rod looks infinite from P.
3. (b) Exact: √(3.0² + 0.30²) = 3.015 m, so E = 26.97 ÷ (3.0 × 3.015) = **2.98 N/C**. Point charge: E = 26.97 ÷ 9.0 = **3.00 N/C**, only 0.5% high. P is far from a short rod, so the rod looks like a point.
4. Both directions are perpendicular to the rod, away from it.

Suggested mark points (4): 1 for the exact value at 0.040 m; 1 for the infinite-line value and a comment that the model fits because x is much smaller than L; 1 for the exact value at 3.0 m; 1 for the point-charge value and a comment that the model fits because x is much larger than L.

Common error: swapping the models. The infinite-line model at 3.0 m gives 30 N/C, about ten times too big; the point-charge model at 0.040 m gives 1.7 × 10⁴ N/C, more than seven times too big.
</details>

## Question 6 (constructed response · core)

A thin rod is bent into a semicircle of radius R, centred on point O. It lies to the right of O, running from (0, R) through (R, 0) to (0, −R). The upper quarter carries +Q and the lower quarter carries +3Q, each spread uniformly along its own quarter.

(a) Show by integration that the upper quarter alone gives field components E_x = E_y = −2kQ/(πR²) at O.
(b) Use symmetry to write down the components of the field at O due to the lower quarter, without a new integral. Give your reason.
(c) Find the magnitude and direction of the total field at O.
(d) Evaluate (c) for Q = 3.0 × 10⁻⁹ C and R = 0.15 m.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The upper quarter has length πR/2, so λ₁ = Q/(πR/2) = 2Q/(πR). A piece at angle θ (0 to π/2) has dq = λ₁R dθ, is a distance R from O, and pushes a positive test charge at O in the direction (−cos θ, −sin θ). So:
E_x = −(kλ₁/R) ∫₀^(π/2) cos θ dθ = −kλ₁/R and E_y = −(kλ₁/R) ∫₀^(π/2) sin θ dθ = −kλ₁/R.
With λ₁ = 2Q/(πR), **E_x = E_y = −2kQ/(πR²)**.

**(b)** The lower quarter is the mirror image of the upper quarter in the x-axis. Reflecting the charge reflects its field: E_x stays the same and E_y changes sign. With 3 times the charge, each component is 3 times larger: **E_x = −6kQ/(πR²) and E_y = +6kQ/(πR²)**.

**(c)** Add the components: E_x = −8kQ/(πR²) and E_y = +4kQ/(πR²). The magnitude is √(8² + 4²) kQ/(πR²) = **4√5 kQ/(πR²) ≈ 2.85kQ/R²**. The direction is tan⁻¹(4/8) = **26.6° above the −x direction**, tilted away from the more heavily charged lower quarter.
Check: if both quarters carried +Q, the y-components would cancel and E = 4kQ/(πR²) along −x, which is the semicircle result 2kλ/R.

**(d)** kQ/(πR²) = (8.99 × 10⁹)(3.0 × 10⁻⁹) ÷ [π(0.15)²] = 381.5 N/C, so E = 4√5 × 381.5 = **3.4 × 10³ N/C** (3413 N/C), at 26.6° above the −x direction.

| Point | What earns it |
|---|---|
| 1 | λ₁ = 2Q/(πR), dq = λ₁R dθ and distance R for every piece |
| 1 | Both integrals for the upper quarter, giving −2kQ/(πR²) for each component |
| 1 | (b) E_x unchanged, E_y reversed and both tripled, with the mirror-symmetry reason |
| 1 | (c) Magnitude 4√5 kQ/(πR²) with direction 26.6° above −x |
| 1 | (d) 3.4 × 10³ N/C with direction |

Accept a direct integral over the lower quarter (θ from −π/2 to 0, λ₂ = 6Q/(πR)) in (b).
</details>

## Question 7 (constructed response · stretch)

A thin rod lies on the x-axis from x = 0 to x = L. Its charge per unit length is λ(x) = βx, where β is a positive constant. Point P is on the x-axis at x = −d.

(a) Show that the total charge is Q = βL²/2.
(b) Show that the field at P has magnitude E = kβ[ln((L + d)/d) − L/(L + d)], and state its direction.
(c) Show that E approaches kQ/d² when d is much larger than L.
(d) Evaluate E for β = 4.0 × 10⁻⁸ C/m², L = 0.50 m and d = 0.10 m. Compare it with the field of a **uniform** rod with the same total charge, and explain the difference.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Q = ∫₀ᴸ βx dx = **βL²/2**.

**(b)** A piece at x has dq = βx dx and is a distance (x + d) from P. Every piece is to the right of P and positive, so every dE points in the **−x direction** (away from the rod). So:

E = kβ ∫₀ᴸ x dx/(x + d)²

Substitute u = x + d: ∫(u − d)/u² du = ln u + d/u. Evaluate from u = d to u = L + d:

E = kβ[ln((L + d)/d) + d/(L + d) − 1] = **kβ[ln((L + d)/d) − L/(L + d)]**

**(c)** Let ε = L/d, which is small. Then ln(1 + ε) ≈ ε − ε²/2 + ε³/3 and L/(L + d) = ε/(1 + ε) ≈ ε − ε² + ε³. The bracket is about ε²/2 − 2ε³/3, so E ≈ kβL²/(2d²) = **kQ/d²**, a point charge.

**(d)** Q = (4.0 × 10⁻⁸)(0.50)²/2 = 5.0 × 10⁻⁹ C. The bracket is ln 6 − 0.50/0.60 = 1.7918 − 0.8333 = 0.9584. E = (8.99 × 10⁹)(4.0 × 10⁻⁸)(0.9584) = **3.4 × 10² N/C** (345 N/C), in the −x direction.
A uniform rod with the same Q gives kQ/[d(d + L)] = 44.95 ÷ (0.10 × 0.60) = **7.5 × 10² N/C**. The non-uniform rod's field is less than half of that, because most of its charge sits near x = L, far from P, while the uniform rod has more charge near P.

| Point | What earns it |
|---|---|
| 1 | Q = ∫βx dx = βL²/2 |
| 1 | dq = βx dx and distance x + d, with all dE in the same direction (−x) |
| 1 | Correct evaluation of the integral (any valid method) |
| 1 | Far-away limit shown using a series (or another valid argument), giving kQ/d² |
| 1 | E ≈ 345 N/C with direction |
| 1 | Uniform-rod value 749 N/C and a reason based on where the charge sits |

Carry forward an error in (b) into (d) once. Accept the bracket in the equivalent form ln(1 + L/d) − L/(L + d).
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "Symmetry does half the work" and "Arcs: a semicircle at its centre" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/8-4-electric-fields-charge-distributions-study-guide/).
- **Q2 or Q7 wrong:** work through Worked example 1 (the rod on its own line) again.
- **Q4 wrong:** revisit Worked example 2 and Figure 1 on the ring.
- **Q5 wrong:** re-read "The finite rod on its perpendicular bisector, and the infinite line".
- **Q6 incomplete:** practise resolving dE for each quarter separately, then add.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/8-4-electric-fields-charge-distributions-checklist/).
