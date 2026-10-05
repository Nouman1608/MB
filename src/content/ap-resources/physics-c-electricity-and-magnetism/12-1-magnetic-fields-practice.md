---
resourceId: "mb-ap-physcem-12.1-practice"
title: "Magnetic Fields: Practice Questions (Physics C: E&M 12.1)"
description: "Seven original Marlbridge practice questions on magnetic fields: dipoles, field maps, Gauss's law for magnetism, materials and permeability, with full solutions and suggested mark points."
course: "physics-c-electricity-and-magnetism"
unit: 12
topics: ["12.1"]
resourceType: "practice-questions"
prerequisites:
  - "Gauss's law for magnetism and outward area vectors"
prerequisiteResources: ["mb-ap-physcem-12.1-study-guide"]
learningObjectives:
  - "Use ∮B·dA = 0 to find fluxes through parts of closed surfaces"
  - "Explain the behaviour of magnets and materials in terms of dipole alignment"
  - "Draw and interpret field-line maps and compass directions"
  - "Derive and use the radial field of an axially symmetric field"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "μ₀ = 4π × 10⁻⁷ T·m/A; 1 Wb = 1 T·m². Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-12.1-study-guide", "mb-ap-physcem-12.1-revision-notes", "mb-ap-physcem-12.1-checklist"]
next: "mb-ap-physcem-12.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Question 7 needs calculus: set up the thin-cylinder argument before you differentiate."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data: μ₀ = 4π × 10⁻⁷ T·m/A and 1 Wb = 1 T·m². All field values are invented for practice. Area vectors on closed surfaces point outward. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

A closed spherical surface is drawn around the north end of a long bar magnet. The surface cuts through the magnet, so the south end is outside it. What is the net magnetic flux through the closed surface?

- (A) Zero
- (B) Positive, because field lines leave the north pole
- (C) Negative, because field lines enter the surface inside the magnet
- (D) It depends on the radius of the sphere

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Gauss's law for magnetism, ∮B·dA = 0, holds for every closed surface. Lines leaving through the outer part of the sphere come back in where it cuts the magnet, because inside the magnet B runs from S to N.

- (B) counts only the lines leaving outside the magnet, not their return inside it.
- (C) counts only the lines entering inside the magnet; inward and outward flux are equal.
- (D) would need enclosed magnetic "charge". With no monopoles, the flux is zero at every radius.
</details>

## Question 2 (multiple choice · core)

A student measures μ/μ₀ ≈ 1500 for a sample of soft iron at room temperature in a weak external field. Which prediction is best supported by physics?

- (A) Every sample of iron has μ/μ₀ = 1500 in every field, because permeability is a property of the material only.
- (B) Heating the sample to 900 °C leaves μ/μ₀ at about 1500, because heating does not change the magnetic dipoles.
- (C) In a much stronger external field, μ/μ₀ for the same sample can be quite different.
- (D) In a much stronger field the sample becomes diamagnetic, so μ/μ₀ falls below 1.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The permeability of a material is not a constant. It depends on the strength of the external field (as well as on temperature and orientation). In a strong field the domains are nearly all aligned already, so μ falls.

- (A) treats μ like μ₀, which is the only fixed constant.
- (B) is wrong: heating iron above its Curie temperature (about 770 °C) destroys the domain alignment, and it stops being ferromagnetic.
- (D) confuses a fall in μ with a change of type. Iron stays ferromagnetic, with μ much greater than μ₀.
</details>

## Question 3 (multiple choice · core)

A closed cylinder sits in a non-uniform magnetic field. The flux through one flat end is +4.0 × 10⁻⁵ Wb and the flux through the other flat end is −1.5 × 10⁻⁵ Wb. What is the flux through the curved side?

- (A) −2.5 × 10⁻⁵ Wb
- (B) +2.5 × 10⁻⁵ Wb
- (C) +5.5 × 10⁻⁵ Wb
- (D) 0

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The total through the closed surface is zero: (+4.0 − 1.5) × 10⁻⁵ + Φ_side = 0, so Φ_side = −2.5 × 10⁻⁵ Wb. Net flux leaves through the ends, so it must enter through the side.

- (B) forgets the sign change that makes the total zero.
- (C) adds the sizes 4.0 and 1.5, ignoring that the negative flux is flux going **in**.
- (D) assumes the side carries no flux. Then the end fluxes would have to be equal and opposite, and they are not.
</details>

## Question 4 (calculation · core)

At an invented site, Earth's field has a horizontal component of 1.8 × 10⁻⁵ T pointing north and a vertical component of 4.5 × 10⁻⁵ T pointing down. A closed rectangular box shelter stands on level ground. Its floor is 1.2 m (north–south) by 0.80 m (east–west), and its walls are 0.50 m high.

(a) Find the magnitude of the field and its angle below the horizontal.
(b) Find the magnetic flux through the floor.
(c) Without working out each face, find the total flux through the roof and four walls.
(d) Find the flux through the north-facing wall.

<details>
<summary>Worked solution</summary>

1. (a) B = √[(1.8 × 10⁻⁵)² + (4.5 × 10⁻⁵)²] = **4.8 × 10⁻⁵ T**. Angle below horizontal: tan⁻¹(4.5/1.8) = **68°**.
2. (b) Floor area = 1.2 × 0.80 = 0.96 m². Its outward normal points **down**, the same way as the vertical component. Only the vertical component crosses the floor: Φ = +(4.5 × 10⁻⁵)(0.96) = **+4.3 × 10⁻⁵ Wb** (lines leave through the floor).
3. (c) ∮B·dA = 0, so the other five faces together carry **−4.3 × 10⁻⁵ Wb** (net flux entering).
4. (d) The north wall is 0.80 m wide and 0.50 m high: area 0.40 m², outward normal pointing north. Φ = +(1.8 × 10⁻⁵)(0.40) = **+7.2 × 10⁻⁶ Wb**. (Check: the south wall gives −7.2 × 10⁻⁶ Wb, east and west give zero and the roof gives −4.32 × 10⁻⁵ Wb, which add to (c).)

Suggested mark points (4): 1 for the magnitude and angle; 1 for the floor flux using only the vertical component, with a positive sign; 1 for using Gauss's law for magnetism to get −4.3 × 10⁻⁵ Wb; 1 for the north-wall flux using the horizontal component and the 0.40 m² wall area.

Common error: using the full 4.8 × 10⁻⁵ T for the floor (4.7 × 10⁻⁵ Wb). Only the normal component counts.
</details>

## Question 5 (constructed response · core)

A technician tests three unlabelled rods, P, Q and R, with a strong magnet. (Invented observations.)

- P is strongly attracted to **either** pole. After the magnet is taken away, P can pick up paper clips.
- Q is weakly attracted to either pole. After the magnet is taken away, Q has no effect on paper clips.
- R is weakly **repelled** by either pole.

(a) Classify each rod as ferromagnetic, paramagnetic or diamagnetic.
(b) Explain, in terms of magnetic dipoles, why P is attracted to **both** poles.
(c) Explain why R is repelled.
(d) A student says "R cannot contain any magnetic dipoles". Comment.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** P: ferromagnetic. Q: paramagnetic. R: diamagnetic.

**(b)** The magnet's field lines up the domains (groups of aligned atomic dipoles) in P. The end of P nearest the magnet becomes the opposite pole to the magnet's nearby pole, so they attract. Reverse the magnet and the induced poles reverse too, so P is attracted again. P keeps much of the alignment, so it is now a permanent magnet.

**(c)** In a diamagnetic material, the external field changes the electrons' motion so that a weak alignment of dipole moments forms **opposite** to the field. The end of R nearest a pole therefore has the **same** polarity as that pole, and like poles repel.

**(d)** Wrong. R's moving electrons give it dipoles, and the field creates a weak alignment opposite to itself. All materials have this diamagnetic response; in P and Q a stronger effect hides it.

| Point | What earns it |
|---|---|
| 1 | All three classifications correct |
| 1 | P: field aligns domains/dipoles, near end becomes the opposite pole, so attraction for either pole |
| 1 | P keeps its alignment, which explains picking up paper clips (permanent magnetism) |
| 1 | R: alignment opposite to the field, so the near end is a like pole and is repelled |
| 1 | (d): diamagnetism comes from electron motion and is present in all materials |
</details>

## Question 6 (constructed response · core)

Two identical bar magnets lie on a table along the same line, with their **north poles facing each other** and a gap between them. Point M is midway between the two N poles. Point T is directly above M, a little way up the page (on the table, not in the gap).

(a) Sketch the field lines in and around the gap.
(b) What is the magnetic field at M? Explain.
(c) Which way does a small compass at T point? Explain using the fields of both magnets.
(d) A student draws a closed box around the two N ends only, cutting through both magnets. She says: "There are two north poles inside and no south poles, so the net flux out of the box is positive." Explain her mistake.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Lines leave each N pole and curve away from the gap, up and down the page, then loop back to that magnet's own S pole. No line crosses the middle of the gap, and no lines cross each other.

**(b)** **B = 0 at M.** Each N pole's field at M points away from that pole. The magnets are identical and M is the same distance from each, so the two fields are equal in size and opposite in direction. M is a neutral point.

**(c)** At T, each magnet's field points away from its N pole. The parts along the line of the magnets are equal and opposite and cancel. The parts perpendicular to that line both point away from the magnets, up the page. So the compass N end points **straight up the page**, away from the gap. (The far S poles pull slightly the other way, but they are much farther away, so the N poles dominate.)

**(d)** Inside each magnet the field runs from S to N, so lines **enter** the box where it cuts the magnets. That inward flux cancels the outward flux near the N ends. Poles are not magnetic charges; ∮B·dA = 0 always.

| Point | What earns it |
|---|---|
| 1 | Sketch: lines leave both N poles, bend away from the gap, no lines crossing |
| 1 | B = 0 at M, with the equal-and-opposite argument |
| 1 | Compass at T points away from the gap, perpendicular to the magnets' line |
| 1 | Reason for (c): components along the line cancel, perpendicular components add |
| 1 | (d): lines re-enter inside the magnets, so the net flux is zero by Gauss's law for magnetism |
</details>

## Question 7 (constructed response · stretch)

Near the axis of a short coil, the field is symmetric about the z-axis. Along the axis its z-component is

B_z(z) = B₀ / (1 + z²/d²)^(3/2)

with B₀ = 5.0 mT and d = 0.040 m. (Just use it; its origin comes in Topic 12.3.)

(a) Apply Gauss's law for magnetism to a thin cylinder of radius r between z and z + dz to show that, close to the axis, B_r = −(r/2) dB_z/dz.
(b) Find B_r at r = 5.0 mm and z = d/2, and the angle between B and the axis there.
(c) Find the flux through the curved side of a cylinder of radius 5.0 mm running from z = 0 to z = d.
(d) At a fixed small r, find the value of z (z > 0) at which B_r is greatest.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Near the axis, B_z is uniform across each end. End flux: [B_z(z + dz) − B_z(z)]πr² = (dB_z/dz)πr² dz. Flux through the side: B_r(2πr dz). The total is zero, so **B_r = −(r/2) dB_z/dz**.

**(b)** dB_z/dz = −3B₀d³z / (d² + z²)^(5/2). At z = d/2 = 0.020 m this is −0.107 T/m. So B_r = −(0.0050/2)(−0.107) = **+2.7 × 10⁻⁴ T**, pointing away from the axis. B_z there is 5.0 mT × (1.25)^(−3/2) = 3.58 mT. Angle from the axis: tan⁻¹(0.268/3.58) = tan⁻¹(0.075) = **4.3°**.

**(c)** Use the closed cylinder: bottom end −B₀πa² = −3.93 × 10⁻⁷ Wb; top end +B_z(d)πa² with B_z(d) = B₀ × 2^(−3/2) = 1.77 mT, giving +1.39 × 10⁻⁷ Wb. So Φ_side = πa²[B₀ − B_z(d)] = **+2.5 × 10⁻⁷ Wb** (leaving).

**(d)** At fixed r, B_r ∝ −dB_z/dz, so it is greatest where d²B_z/dz² = 0. Differentiating gives d²B_z/dz² ∝ (4z² − d²), which is zero at **z = d/2**. (B_r is zero at z = 0 and as z → ∞, so this is a maximum.) There, B_r = (24√5/125) B₀r/d ≈ 0.43 B₀r/d, which matches the 2.7 × 10⁻⁴ T found in (b).

| Point | What earns it |
|---|---|
| 1 | End fluxes written as (dB_z/dz)πr² dz with correct signs |
| 1 | Side flux B_r(2πr dz) and total set to zero, giving B_r = −(r/2) dB_z/dz |
| 1 | Correct derivative of B_z and B_r = 2.7 × 10⁻⁴ T at the stated point |
| 1 | Angle about 4.3° from the axis, using B_z(d/2) = 3.58 mT |
| 1 | Side flux 2.5 × 10⁻⁷ Wb from the end fluxes and Gauss's law for magnetism |
| 1 | Sets d²B_z/dz² = 0 and finds z = d/2, with a reason it is a maximum |

Accept (c) found by integrating B_r(a, z) 2πa dz from 0 to d. Carry forward an error in dB_z/dz once.
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "No monopoles: Gauss's law for magnetism" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-1-magnetic-fields-study-guide/).
- **Q2 or Q5 wrong:** revisit "How materials respond to a field" and "Magnetic permeability".
- **Q4 wrong:** check signs and components; see Worked example 1.
- **Q6 wrong:** revisit "Field-line maps and dipoles" and Figure 1.
- **Q7 incomplete:** work through Worked example 2 again, step by step.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/12-1-magnetic-fields-checklist/).
