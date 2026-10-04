---
resourceId: "mb-ap-physcem-8.5-practice"
title: "Electric Flux: Practice Questions (Physics C: E&M 8.5)"
description: "Seven original Marlbridge practice questions on electric flux: tilted surfaces, signs, closed surfaces and surface integrals for non-uniform fields, with full solutions."
course: "physics-c-electricity-and-magnetism"
unit: 8
topics: ["8.5"]
resourceType: "practice-questions"
prerequisites:
  - "Flux through a flat surface, Φ_E = E·A, and the outward area vector"
prerequisiteResources: ["mb-ap-physcem-8.5-study-guide"]
learningObjectives:
  - "Calculate flux through flat surfaces from magnitudes and angles or from components"
  - "Assign signs to flux using area vectors, including outward normals on closed surfaces"
  - "Use the zero net flux of a closed surface in a uniform field to find flux through curved surfaces"
  - "Set up and evaluate ∫E·dA for a field that changes across a surface"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Angles in degrees. Give numerical answers to 2 or 3 significant figures, with units of N·m²/C"
related: ["mb-ap-physcem-8.5-study-guide", "mb-ap-physcem-8.5-revision-notes", "mb-ap-physcem-8.5-checklist"]
next: "mb-ap-physcem-8.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Question 7 needs calculus: set up the strip integral before you evaluate it."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. All fields are electrostatic and all data are invented for practice. Flux is measured in N·m²/C. Unit vectors î, ĵ and k̂ point along +x, +y and +z. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

A flat square of side 0.10 m is placed in a uniform electric field of 800 N/C. The field makes an angle of 30° with the **plane of the square**. What is the magnitude of the electric flux through the square?

- (A) 4.0 N·m²/C
- (B) 6.9 N·m²/C
- (C) 8.0 N·m²/C
- (D) 0

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The area is (0.10 m)² = 0.010 m². The field makes 30° with the surface, so it makes θ = 90° − 30° = 60° with the area vector. |Φ_E| = EA cos 60° = (800)(0.010)(0.500) = 4.0 N·m²/C. Equivalently, EA sin 30° = 4.0 N·m²/C.

- (B) uses cos 30°, measuring the angle from the surface instead of from the area vector.
- (C) is EA, the flux only if the field were perpendicular to the square.
- (D) would be correct only if the field were parallel to the square (θ = 90°).
</details>

## Question 2 (multiple choice · core)

A closed cylindrical can of radius 0.050 m lies with its axis along the x-axis in a uniform field E = 500 î N/C. What is the electric flux through the **left end cap** (the end at smaller x)?

- (A) −3.9 N·m²/C
- (B) +3.9 N·m²/C
- (C) 0
- (D) −16 N·m²/C

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The end cap has area π(0.050 m)² = 7.85 × 10⁻³ m². On a closed surface the area vector points outward, which for the left cap is −î, against the field. So Φ_E = −EA = −(500)(7.85 × 10⁻³) = −3.93 N·m²/C. Field lines enter the can here.

- (B) has the right size but uses an inward normal (+î). On a closed surface the normal is always outward.
- (C) confuses one cap with the whole can. The **net** flux through the closed can is zero, but each end cap has a non-zero flux.
- (D) uses the diameter, 0.10 m, as the radius: π(0.10)² × 500 = 15.7 N·m²/C.
</details>

## Question 3 (multiple choice · core)

A flat surface starts facing a uniform field head-on, with its area vector parallel to E. Then the field strength is doubled **and** the surface is turned so that its area vector makes 60° with the field. By what factor does the flux change?

- (A) It halves.
- (B) It stays the same.
- (C) It increases by a factor of about 1.7.
- (D) It doubles.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Φ_E = EA cos θ. The new flux is (2E)(A) cos 60° = 2EA × 0.500 = EA, the same as the starting flux EA cos 0°.

- (A) includes the rotation (× 0.500) but forgets that the field doubled.
- (C) uses sin 60° = 0.866, giving 2 × 0.866 = 1.73. The angle given is between E and the area vector, so cos is correct.
- (D) includes the doubled field but ignores the rotation.
</details>

## Question 4 (calculation · core)

A uniform field is E = (3.0 î + 4.0 ĵ − 2.0 k̂) × 10³ N/C. A flat rectangle measures 0.20 m by 0.50 m.

(a) The rectangle lies in the xz-plane with area vector +ĵ. Find the flux through it.
(b) The rectangle is moved to the yz-plane with area vector −î. Find the flux.
(c) For the situation in (a), find the angle between E and the area vector, and use EA cos θ to confirm your answer to (a).

<details>
<summary>Worked solution</summary>

The area is A = 0.20 m × 0.50 m = 0.10 m².

1. (a) A = 0.10 ĵ m². Φ_E = E·A = (4.0 × 10³)(0.10) = **+4.0 × 10² N·m²/C**. Only E_y crosses a surface in the xz-plane.
2. (b) A = −0.10 î m². Φ_E = (3.0 × 10³)(−0.10) = **−3.0 × 10² N·m²/C**. The field has a component against the chosen area vector, so the flux is negative.
3. (c) |E| = √(3.0² + 4.0² + 2.0²) × 10³ = 5.39 × 10³ N/C. cos θ = E_y/|E| = 4.0/5.39 = 0.743, so **θ = 42°**. Then EA cos θ = (5.39 × 10³)(0.10)(0.743) = 4.0 × 10² N·m²/C, which agrees with (a).

Suggested mark points (4): 1 for the area 0.10 m² and the idea that only the normal component counts; 1 for +400 N·m²/C in (a); 1 for −300 N·m²/C in (b), **with** the negative sign; 1 for θ = 42° and the consistency check.

Common error: using |E| × A = 539 N·m²/C in (a). That assumes E is perpendicular to the surface, which it is not.
</details>

## Question 5 (calculation · core)

A closed rectangular box has edges 0.10 m along x, 0.20 m along y and 0.30 m along z. It sits in a uniform field E = (600 î + 250 k̂) N/C. Using outward area vectors, find the flux through each of the six faces and the net flux through the box.

<details>
<summary>Worked solution</summary>

1. Faces perpendicular to x have area 0.20 × 0.30 = 0.060 m². The +x face: Φ = (600)(0.060) = **+36 N·m²/C**. The −x face (outward normal −î): **−36 N·m²/C**.
2. Faces perpendicular to y have area 0.10 × 0.30 = 0.030 m². E has no y-component, so each has **zero** flux.
3. Faces perpendicular to z have area 0.10 × 0.20 = 0.020 m². The +z face: (250)(0.020) = **+5.0 N·m²/C**. The −z face: **−5.0 N·m²/C**.
4. Net flux: 36 − 36 + 0 + 0 + 5.0 − 5.0 = **0**.

**Interpretation.** In a uniform field every field line that enters the box also leaves it, so the net flux through the closed surface is zero.

Suggested mark points (4): 1 for the three face areas; 1 for ±36 N·m²/C on the x-faces with correct signs; 1 for 0 on the y-faces and ±5.0 N·m²/C on the z-faces; 1 for a net flux of zero with a reason.

Common error: adding the sizes of all six fluxes to get 82 N·m²/C. Flux is signed; the entering flux cancels the leaving flux.
</details>

## Question 6 (constructed response · core)

A cone-shaped paper funnel has a circular rim of radius 0.15 m. Its tip points straight down and its rim is horizontal. A uniform field of 1.2 × 10³ N/C points **downward** at 40° to the vertical.

(a) Explain why you can find the flux through the funnel's curved surface without knowing its height or curved area.
(b) Calculate the flux through the curved surface, taking its area vector to point away from the cone's axis and downward (outward from the funnel, if it were closed by a flat lid).
(c) State the field direction that would make this flux as large as possible, and calculate that largest value.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Add a flat circular lid across the rim. The funnel plus lid is a closed surface. In a uniform field, every field line that enters a closed surface leaves it, so the net flux is zero. The flux through the curved surface must therefore be equal and opposite to the flux through the flat lid, which only needs the rim area.

**(b)** Lid area: π(0.15 m)² = 0.0707 m². The lid's outward area vector points **up**. The field points downward at 40° to the vertical, so the angle between E and the lid's area vector is 180° − 40° = 140°.
Φ_lid = (1.2 × 10³)(0.0707) cos 140° = −65.0 N·m²/C.
Net flux is zero, so **Φ_funnel = +65 N·m²/C**. The field enters through the lid and leaves through the curved surface.

**(c)** The flux is largest when the field is **vertical (straight down)**, along the cone's axis: Φ_max = EπR² = (1.2 × 10³)(0.0707) = **85 N·m²/C**.

| Point | What earns it |
|---|---|
| 1 | Closes the surface with a flat lid across the rim |
| 1 | States that the net flux through a closed surface in a uniform field is zero, so the curved and flat fluxes cancel |
| 1 | Correct rim area 0.0707 m² and angle (40° or 140°) between E and the lid's normal |
| 1 | +65 N·m²/C for the funnel, with the sign explained |
| 1 | Field along the axis, giving 85 N·m²/C |

Accept a magnitude of 65 N·m²/C in (b) with a clear statement that the field leaves through the curved surface. Do not accept answers that use the cone's curved area.
</details>

## Question 7 (constructed response · stretch)

A flat triangle lies in the xy-plane with corners at (0, 0), (a, 0) and (0, a). Its area vector is +k̂. In this region the field is E = βx k̂, where β is a positive constant.

(a) Explain why strips parallel to the y-axis are a good choice, and write the area dA of the strip at position x.
(b) Set up and evaluate an integral to show that the flux through the triangle is βa³/6.
(c) Evaluate the flux for β = 3.0 × 10⁴ N/(C·m) and a = 0.20 m.
(d) A student estimates the flux as (largest field on the triangle) × (area of the triangle). Calculate this estimate and explain why it is too large.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** E depends on x only, so it is constant along any strip parallel to the y-axis. The slanted edge is the line y = a − x, so the strip at position x runs from y = 0 to y = a − x. Its area is **dA = (a − x) dx**.

**(b)** E is parallel to k̂, the area vector, so E·dA = βx(a − x) dx.

Φ_E = ∫₀ᵃ βx(a − x) dx = β[ax²/2 − x³/3]₀ᵃ = β(a³/2 − a³/3) = **βa³/6**

Unit check: N/(C·m) × m³ = N·m²/C.

**(c)** Φ_E = (3.0 × 10⁴)(0.20)³ ÷ 6 = **40 N·m²/C**.

**(d)** The largest field is at x = a: βa = 6.0 × 10³ N/C. The area is a²/2 = 0.020 m². The estimate is 6.0 × 10³ × 0.020 = **120 N·m²/C**, three times the true value. It is too large because most of the triangle lies at small x, where the field is weak, and the strips get shorter as x grows toward a.

| Point | What earns it |
|---|---|
| 1 | Strips parallel to y, with the reason that E is constant along each strip |
| 1 | Strip length a − x from the edge y = a − x, so dA = (a − x) dx |
| 1 | Integral ∫₀ᵃ βx(a − x) dx set up with correct limits |
| 1 | Evaluates to βa³/6 |
| 1 | 40 N·m²/C |
| 1 | Estimate of 120 N·m²/C with a reason it overestimates (weak field over most of the area) |

Accept strips parallel to the x-axis if the integral is set up correctly (a double integral or strips of varying field). Carry forward an error in (b) into (c) once. A strip of length a instead of a − x gives 120 N·m²/C in (c); that loses the second and fourth points.
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "Flux through a flat surface in a uniform field" and Figure 1 in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/8-5-electric-flux-study-guide/).
- **Q2, Q4 or Q5 wrong:** revisit "The area vector", the sign rule and Figure 2; check that every normal on a closed surface points outward.
- **Q6 incomplete:** work through Worked example 3 again.
- **Q7 incomplete:** go back to "Flux as a surface integral" and Worked example 2.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/8-5-electric-flux-checklist/).
