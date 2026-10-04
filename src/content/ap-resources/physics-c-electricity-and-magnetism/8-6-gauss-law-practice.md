---
resourceId: "mb-ap-physcem-8.6-practice"
title: "Gauss's Law: Practice Questions (Physics C: E&M 8.6)"
description: "Seven original Marlbridge practice questions on Gauss's law: flux, spheres, lines, sheets and integrated non-uniform densities, with full solutions and suggested mark points."
course: "physics-c-electricity-and-magnetism"
unit: 8
topics: ["8.6"]
resourceType: "practice-questions"
prerequisites:
  - "Choosing a Gaussian surface by symmetry"
prerequisiteResources: ["mb-ap-physcem-8.6-study-guide"]
learningObjectives:
  - "Use Gauss's law to find flux and enclosed charge"
  - "Derive E for spherical, cylindrical and planar charge distributions"
  - "Integrate a non-uniform charge density to find q_enc and E(r)"
  - "Check results using continuity and large-r limits"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "ε₀ = 8.85 × 10⁻¹² C²/(N·m²); 1/(4πε₀) = 8.99 × 10⁹ N·m²/C². Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-8.6-study-guide", "mb-ap-physcem-8.6-revision-notes", "mb-ap-physcem-8.6-checklist"]
next: "mb-ap-physcem-8.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism", "exam-physics-c-electricity-and-magnetism"]
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

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data for every question: ε₀ = 8.85 × 10⁻¹² C²/(N·m²) and 1/(4πε₀) = 8.99 × 10⁹ N·m²/C². "Infinite" lines and sheets model objects much larger than the distances involved. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

A point charge +q sits at the exact centre of a closed cube. What is the electric flux through **one face** of the cube?

- (A) q/(6ε₀)
- (B) q/ε₀
- (C) q/(4πε₀)
- (D) 0

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** By Gauss's law the flux through the whole closed cube is q_enc/ε₀ = q/ε₀. The charge is at the centre, so by symmetry each of the six identical faces receives the same share: q/(6ε₀).

- (B) is the flux through the **whole** cube, not one face.
- (C) mixes up ε₀ with the Coulomb constant: it is what you get by thinking "flux = kq". Its units are those of flux, but the value is wrong: the total flux is q/ε₀ = 4πkq, and one face receives a sixth of that, q/(6ε₀).
- (D) is the result for a charge **outside** the cube, where every field line that enters also leaves.
</details>

## Question 2 (multiple choice · core)

A long straight wire carries a uniform charge per unit length λ = 3.0 × 10⁻⁸ C/m. What is the magnitude of the electric field 0.20 m from the wire, far from its ends?

- (A) 27 N/C
- (B) 2.7 × 10³ N/C
- (C) 6.7 × 10³ N/C
- (D) 1.3 × 10⁴ N/C

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A coaxial cylinder of radius r and length L gives E(2πrL) = λL/ε₀, so E = λ/(2πε₀r) = (3.0 × 10⁻⁸) ÷ (2π × 8.85 × 10⁻¹² × 0.20) = 2.70 × 10³ N/C.

- (A) puts r = 20 (centimetres) into an SI formula without converting to metres.
- (C) treats the wire as a point charge λ and uses λ/(4πε₀r²). That ignores the cylindrical symmetry, and the units do not even come out as N/C.
- (D) uses λ/(2πε₀r²), squaring r by habit from the point-charge formula. The curved area of the cylinder is 2πrL, which is first order in r.
</details>

## Question 3 (multiple choice · core)

A sphere of radius R has charge density ρ = ρ₀ r/R. What is the ratio E(R/2) / E(R)?

- (A) 1/2
- (B) 1/4
- (C) 1/16
- (D) 4

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Integrating gives q_enc(r) = πρ₀r⁴/R, so E = q_enc/(4πε₀r²) = ρ₀r²/(4ε₀R). E ∝ r², so halving r gives (1/2)² = 1/4. Alternatively: q_enc(R/2) is 1/16 of Q, and the Gaussian area is 1/4 as large, so E is (1/16) ÷ (1/4) = 1/4 of E(R).

- (A) uses E ∝ r, which is only true for a **uniform** density.
- (C) is the enclosed-charge fraction. It forgets to divide by the smaller Gaussian area.
- (D) uses the outside rule E ∝ 1/r² at a point **inside** the sphere.
</details>

## Question 4 (calculation · core)

A thin spherical shell of radius 0.25 m carries +6.0 × 10⁻⁹ C spread uniformly over its surface. A point charge of −2.0 × 10⁻⁹ C is fixed at its centre. Find the magnitude and direction of E at (a) r = 0.10 m and (b) r = 0.40 m from the centre.

<details>
<summary>Worked solution</summary>

Use concentric spherical Gaussian surfaces; by symmetry E is radial and constant on each.

1. (a) r = 0.10 m is inside the shell, so q_enc = −2.0 × 10⁻⁹ C only. E = |q_enc|/(4πε₀r²) = (8.99 × 10⁹)(2.0 × 10⁻⁹) ÷ (0.10)² = **1.8 × 10³ N/C, pointing inward** (towards the centre), because q_enc is negative.
2. (b) r = 0.40 m is outside, so q_enc = +6.0 × 10⁻⁹ − 2.0 × 10⁻⁹ = +4.0 × 10⁻⁹ C. E = (8.99 × 10⁹)(4.0 × 10⁻⁹) ÷ (0.40)² = **2.2 × 10² N/C (225 N/C), pointing outward**.

Suggested mark points (3): 1 for using only the central charge inside the shell; 1 for the net enclosed charge +4.0 × 10⁻⁹ C outside; 1 for both magnitudes **with** correct directions.

Common error: including the shell's charge at r = 0.10 m. The shell lies outside that Gaussian surface, so it adds nothing to the flux, and by symmetry nothing to E there.
</details>

## Question 5 (calculation · core)

A large, thin, flat insulating sheet carries a uniform surface charge density σ = 5.0 × 10⁻⁹ C/m². (a) Use a Gaussian pillbox to derive the field near the sheet. (b) Calculate E at 0.010 m and at 0.50 m from the sheet.

<details>
<summary>Worked solution</summary>

1. (a) By symmetry E is perpendicular to the sheet and points away from it on both sides. Take a cylinder (pillbox) with end area A that straddles the sheet. The curved side is parallel to E, so its flux is zero. Each end has flux EA. Enclosed charge = σA.
2. Gauss's law: 2EA = σA/ε₀, so **E = σ/(2ε₀)**.
3. (b) E = (5.0 × 10⁻⁹ C/m²) ÷ (2 × 8.85 × 10⁻¹² C²/(N·m²)) = **2.8 × 10² N/C (282 N/C)** at **both** distances. The field of an infinite sheet does not depend on distance.

Suggested mark points (3): 1 for a pillbox with zero flux through the curved side; 1 for 2EA = σA/ε₀; 1 for 282 N/C at both points with a statement that E does not depend on distance.

Common error: writing EA = σA/ε₀ (only one end), which gives 565 N/C. That would be the field just outside a **conductor**, where the field inside is zero (Unit 10), not for a thin isolated sheet.
</details>

## Question 6 (constructed response · core)

A very long solid insulating cylinder of radius R has a uniform volume charge density ρ > 0.

(a) Describe a Gaussian surface you would use and explain why it makes the integral simple.
(b) Derive E(r) for r < R and for r > R.
(c) Show that your two expressions agree at r = R.
(d) Sketch E against r from r = 0 to r = 3R, labelling the value at r = R.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A coaxial cylinder of radius r and length L. By symmetry E points radially outward with the same size at every point on the curved side, so ∮E·dA there is E(2πrL). E is parallel to the flat ends, so they contribute zero flux.

**(b)** Inside: q_enc = ρπr²L, so E(2πrL) = ρπr²L/ε₀ and **E = ρr/(2ε₀)**.
Outside: q_enc = ρπR²L, so E(2πrL) = ρπR²L/ε₀ and **E = ρR²/(2ε₀r)**.

**(c)** At r = R, inside gives ρR/(2ε₀) and outside gives ρR²/(2ε₀R) = ρR/(2ε₀). They agree, so E is continuous.

**(d)** A straight line from (0, 0) rising to ρR/(2ε₀) at r = R, then a 1/r curve falling to half that value at 2R and one third at 3R. The curve outside falls more slowly than the 1/r² curve of a sphere.

| Point | What earns it |
|---|---|
| 1 | Coaxial cylinder, with a reason: E is perpendicular and constant on the curved side and the ends give zero flux |
| 1 | Correct inside result ρr/(2ε₀), using enclosed charge ρπr²L |
| 1 | Correct outside result ρR²/(2ε₀r), using all the charge within radius R |
| 1 | Continuity check at r = R shown, not just stated |
| 1 | Sketch: linear inside, 1/r outside, peak value ρR/(2ε₀) labelled at r = R |

Accept the outside field written as λ/(2πε₀r) with λ = ρπR², the charge per unit length, which is equivalent.
</details>

## Question 7 (constructed response · stretch)

A sphere of radius R has charge density ρ(r) = ρ₀(1 − r/R) for r ≤ R, where ρ₀ > 0. There is no charge outside the sphere.

(a) Show that the total charge is Q = πρ₀R³/3.
(b) Derive E(r) for r ≤ R.
(c) Show that your result matches the field outside the sphere at r = R.
(d) Find the distance from the centre at which E is greatest, and the maximum value of E.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** q_enc(r) = ∫₀ʳ ρ₀(1 − r′/R) 4πr′² dr′ = 4πρ₀[r³/3 − r⁴/(4R)].
At r = R: Q = 4πρ₀R³(1/3 − 1/4) = 4πρ₀R³/12 = **πρ₀R³/3**.

**(b)** Spherical Gaussian surface, radius r: E(4πr²) = q_enc/ε₀, so
**E = (ρ₀/ε₀)[r/3 − r²/(4R)]** for r ≤ R.

**(c)** Inside formula at r = R: (ρ₀/ε₀)(R/3 − R/4) = ρ₀R/(12ε₀). Outside, E = Q/(4πε₀r²); at r = R this is (πρ₀R³/3)/(4πε₀R²) = ρ₀R/(12ε₀). They match.

**(d)** dE/dr = (ρ₀/ε₀)[1/3 − r/(2R)] = 0 gives **r = 2R/3**. The second derivative, −ρ₀/(2ε₀R), is negative, so this is a maximum. E_max = (ρ₀/ε₀)[2R/9 − (4R²/9)/(4R)] = (ρ₀/ε₀)(2R/9 − R/9) = **ρ₀R/(9ε₀)**. This is larger than the surface value ρ₀R/(12ε₀): because the density is highest at the centre, the field peaks *inside* the sphere.

| Point | What earns it |
|---|---|
| 1 | Sets up q_enc as ∫ρ 4πr′² dr′ with correct limits |
| 1 | Evaluates the integral and gets Q = πρ₀R³/3 |
| 1 | Uses a spherical Gaussian surface with q_enc(r), not Q, to get E inside |
| 1 | Continuity check at r = R against Q/(4πε₀R²) |
| 1 | Sets dE/dr = 0 and finds r = 2R/3 |
| 1 | E_max = ρ₀R/(9ε₀), with a comment that it exceeds the surface value |

Accept a justification of the maximum from the shape of E(r) (a downward parabola in r) instead of the second derivative. Carry forward an error in q_enc into (b)–(d) once.
</details>

## How did you do?

- **Q1 wrong:** re-read "From flux to Gauss's law" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/8-6-gauss-law-study-guide/).
- **Q2, Q5 or Q6 wrong:** revisit "Choosing a Gaussian surface" and "Standard results", especially the line and sheet derivations.
- **Q3, Q4 wrong:** check which charge is enclosed; see Worked example 1.
- **Q7 incomplete:** work through Worked example 2 again, step by step.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/8-6-gauss-law-checklist/).
