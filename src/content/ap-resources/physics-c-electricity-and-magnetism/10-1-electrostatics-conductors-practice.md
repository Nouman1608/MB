---
resourceId: "mb-ap-physcem-10.1-practice"
title: "Electrostatics with Conductors: Practice Questions (Physics C: E&M 10.1)"
description: "Seven original Marlbridge practice questions on conductors in equilibrium: surface charge, sharp points, cavities, E = σ/ε₀, polarization and shielding, with full solutions."
course: "physics-c-electricity-and-magnetism"
unit: 10
topics: ["10.1"]
resourceType: "practice-questions"
prerequisites:
  - "Gauss's law with spherical and planar symmetry"
prerequisiteResources: ["mb-ap-physcem-10.1-study-guide"]
learningObjectives:
  - "Use Gauss's law to find charges on the surfaces of hollow conductors"
  - "Use E = σ/ε₀ for the field just outside a conductor"
  - "Explain polarization, the charge build-up at sharp points and electrostatic shielding"
  - "Combine conductor results with an integrated non-uniform charge density"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "ε₀ = 8.85 × 10⁻¹² C²/(N·m²); 1/(4πε₀) = 8.99 × 10⁹ N·m²/C². Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-10.1-study-guide", "mb-ap-physcem-10.1-revision-notes", "mb-ap-physcem-10.1-checklist"]
next: "mb-ap-physcem-10.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Question 7 needs calculus: integrate the charge density before you use Gauss's law."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data for every question: ε₀ = 8.85 × 10⁻¹² C²/(N·m²) and 1/(4πε₀) = 8.99 × 10⁹ N·m²/C². All conductors are in electrostatic equilibrium. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

A solid metal sphere on an insulating stand is given an excess charge of −6.0 nC. Once equilibrium is reached, which statement is correct?

- (A) The excess electrons are spread evenly through the volume of the sphere, and E at the centre is zero by symmetry.
- (B) The excess electrons sit on the surface, and E is zero everywhere inside the metal.
- (C) The excess electrons sit on the surface, and E inside points towards the centre.
- (D) The excess electrons collect at the centre, where they are furthest from the air.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** In equilibrium E = 0 inside the metal; otherwise free electrons would still be moving. A Gaussian surface just inside the metal then encloses no net charge, so the excess electrons are all on the surface.

- (A) describes an insulator with charge spread through its volume. E would then be zero only at the centre, not throughout.
- (C) gets the location right but not the field. A field inside would push electrons, so the sphere would not be in equilibrium.
- (D) is the opposite of what repulsion does: like charges push one another as far apart as possible, which is onto the surface.
</details>

## Question 2 (multiple choice · core)

An isolated metal object is shaped like a teardrop: one end is a broad, gently curved dome and the other end narrows to a sharp tip. It carries a positive charge. Where is the electric field just outside the object strongest, and why?

- (A) Near the sharp tip, because the surface charge density is greatest there.
- (B) Near the broad dome, because more of the charge is spread over that larger area.
- (C) The same everywhere, because the object is an equipotential.
- (D) Near the sharp tip, because the potential is greatest there.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Just outside a conductor, E = σ/ε₀. Charge is densest where the surface curves most sharply, so σ, and therefore E, is greatest at the tip.

- (B) confuses the total charge on a region with the charge per area. The dome may hold more charge in total, but σ there is smaller.
- (C) mixes up equal potential with equal field. The surface is an equipotential, but the field just outside depends on the local σ.
- (D) gives the right place for the wrong reason: every point on a conductor is at the same potential.
</details>

## Question 3 (multiple choice · core)

A point charge of +4.0 nC is placed at the centre of the spherical cavity in a thick, **neutral** metal shell. It is then moved off-centre, still inside the cavity and not touching the wall. Which statement describes the change?

- (A) The charge on the inner surface becomes less than 4.0 nC in size, because part of it moves to the outer surface.
- (B) The outer surface charge, +4.0 nC, gathers on the side nearest the point charge.
- (C) Only the distribution of the −4.0 nC on the inner surface changes; the outer surface still has +4.0 nC spread uniformly.
- (D) Nothing changes, because the shell is neutral.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A Gaussian surface inside the metal has E = 0 on it, so it encloses zero net charge. The inner wall must therefore carry −4.0 nC wherever the point charge is. The inner charge gathers more on the side nearer the point charge. The outer surface carries the remaining +4.0 nC. The metal between them is field-free, so the outer charge "sees" no trace of where the point charge is, and on a sphere it spreads uniformly.

- (A) breaks Gauss's law: q_enc for a surface in the metal must stay zero.
- (B) assumes the field of the point charge reaches the outer surface. The inner surface charge cancels it inside the metal.
- (D) is wrong: the induced charges are present even though the net charge of the shell is zero, and the inner distribution does change.
</details>

## Question 4 (calculation · core)

A thin, flat metal plate on an insulating stand has a face area of 0.20 m² on each side. It carries a total charge of +4.0 × 10⁻⁸ C. Ignore edge effects.

(a) State how the charge is shared between the two faces and find σ on each face.
(b) Use a Gaussian pillbox to find E just outside one face.
(c) Show that your answer agrees with treating the plate as a single thin sheet carrying the total charge.

<details>
<summary>Worked solution</summary>

1. (a) The plate is isolated and symmetric, so the charge splits equally: +2.0 × 10⁻⁸ C on each face. σ = (2.0 × 10⁻⁸) ÷ 0.20 = **1.0 × 10⁻⁷ C/m²** on each face.
2. (b) Put one end of the pillbox inside the metal (E = 0) and the other just outside. The side has no flux. EA = σA/ε₀, so E = σ/ε₀ = (1.0 × 10⁻⁷) ÷ (8.85 × 10⁻¹²) = **1.13 × 10⁴ N/C**, directed away from the plate.
3. (c) As a single sheet, σ_total = (4.0 × 10⁻⁸) ÷ 0.20 = 2.0 × 10⁻⁷ C/m², and E = σ_total/(2ε₀) = 1.13 × 10⁴ N/C. Same answer: the conductor formula uses half the charge per face, but all the flux leaves through one end of the pillbox.

Suggested mark points (3): 1 for equal sharing between the faces and σ = 1.0 × 10⁻⁷ C/m²; 1 for E = σ/ε₀ = 1.13 × 10⁴ N/C with the pillbox reasoning; 1 for the agreement with σ_total/(2ε₀).

Common errors: using σ_total/ε₀ (2.26 × 10⁴ N/C, double counting) or σ_face/(2ε₀) (5.65 × 10³ N/C, ignoring that the inside end of the pillbox has no flux).
</details>

## Question 5 (calculation · core)

A point charge of +5.0 nC sits at the centre of a thick metal shell with inner radius 0.12 m and outer radius 0.18 m. The shell's net charge is −8.0 nC.

(a) Find the charge on the inner and outer surfaces of the shell.
(b) Find the magnitude and direction of E at r = 0.060 m, 0.15 m and 0.25 m.
(c) Find the potential of the shell, taking V = 0 far away, and state the potential at its inner surface.

<details>
<summary>Worked solution</summary>

1. (a) A Gaussian sphere inside the metal (for example r = 0.15 m) has E = 0, so q_enc = 0. Inner surface: **−5.0 nC**. Outer surface: −8.0 − (−5.0) = **−3.0 nC**.
2. (b) r = 0.060 m: q_enc = +5.0 nC, E = (8.99 × 10⁹)(5.0 × 10⁻⁹) ÷ 0.060² = **1.25 × 10⁴ N/C, outward**.
   r = 0.15 m: inside the metal, **E = 0**.
   r = 0.25 m: q_enc = −3.0 nC, E = (8.99 × 10⁹)(3.0 × 10⁻⁹) ÷ 0.25² = **4.3 × 10² N/C (432 N/C), inward**.
3. (c) Outside, the field is that of a point charge −3.0 nC at the centre, so at the outer surface V = (8.99 × 10⁹)(−3.0 × 10⁻⁹) ÷ 0.18 = **−150 V**. The shell is one conductor, so its inner surface is also at **−150 V**.

Suggested mark points (4): 1 for −5.0 nC on the inner surface using Gauss's law in the metal; 1 for −3.0 nC on the outer surface; 1 for all three fields with correct directions; 1 for V = −150 V and the statement that the inner surface has the same potential.

Common error: putting −8.0 nC on the outer surface and nothing on the inner surface. That ignores the induced charge needed to make E = 0 in the metal.
</details>

## Question 6 (constructed response · core)

An uncharged metal sphere hangs on an insulating thread in a region where there is a uniform electric field pointing to the right.

(a) Without using equations, make a claim about the electric field inside the metal and support it with a physical argument.
(b) Sketch the sphere with its induced charges and about six field lines near it. Describe what your sketch shows.
(c) Explain why the field lines meet the surface at 90°.
(d) While the field is still on, the sphere is split into left and right halves along a vertical plane, using insulating handles, and the halves are moved apart. The field is then switched off. State the sign of the charge on each half and explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The field inside the metal is zero. If there were a field inside, the free electrons would feel a force and keep moving, so the sphere would not be in equilibrium. Electrons shift until the field of the induced charges exactly cancels the external field inside.

**(b)** Negative charge on the left surface (electrons move against the field), equal positive charge on the right surface. Field lines approach from the left and end on the negative charges; new lines start on the positive charges and continue to the right. No lines inside. Lines near the top and bottom bend slightly towards the sphere.

**(c)** The surface of a conductor in equilibrium is an equipotential. Field lines are always perpendicular to equipotentials. Equivalently, a field component along the surface would push surface charges sideways, so equilibrium would not have been reached.

**(d)** The left half is **negative** and the right half is **positive**, with charges of equal size. Splitting the sphere while it is polarized traps the separated charges; switching off the field cannot bring them back together because the halves are no longer in contact. Charge is conserved: the total is still zero.

| Point | What earns it |
|---|---|
| 1 | Claim E = 0 inside, with the free-electron argument |
| 1 | Sketch: − on the left, + on the right, equal amounts |
| 1 | Sketch: lines end on − and start on +, none inside the metal |
| 1 | Perpendicularity explained using equipotential or the sideways-force argument |
| 1 | Correct signs in (d), with the reasoning that the separation is locked in and net charge is conserved |

Accept a sketch with field lines drawn as in Figure 1 of the study guide.
</details>

## Question 7 (constructed response · stretch)

An insulating sphere of radius R has charge density ρ(r) = ρ₀(r/R)² for r ≤ R, where ρ₀ > 0. It sits at the centre of the cavity in a thick, **neutral** metal shell with inner radius 2R and outer radius 3R.

(a) Show that the insulating sphere's total charge is Q = 4πρ₀R³/5.
(b) State the charge on the shell's inner and outer surfaces.
(c) Derive E(r) for r < R, R < r < 2R, 2R < r < 3R and r > 3R.
(d) Find the surface charge density on the shell's outer surface and show that σ/ε₀ equals your field from (c) at r = 3R.
(e) By what factor does E change between r = R and r = R/2?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** q_enc(r) = ∫₀ʳ ρ₀(r′/R)² 4πr′² dr′ = (4πρ₀/R²)(r⁵/5) = 4πρ₀r⁵/(5R²). At r = R: **Q = 4πρ₀R³/5**.

**(b)** Gauss's law inside the metal gives inner surface **−Q** and outer surface **+Q** (the shell is neutral).

**(c)** Concentric spherical Gaussian surfaces, E(4πr²) = q_enc/ε₀:
- r < R: **E = ρ₀r³/(5ε₀R²)**
- R < r < 2R: q_enc = Q, **E = ρ₀R³/(5ε₀r²)**
- 2R < r < 3R: inside the metal, **E = 0**
- r > 3R: q_enc = Q − Q + Q = Q, **E = ρ₀R³/(5ε₀r²)**

All fields point outward.

**(d)** σ_out = Q/(4π(3R)²) = **ρ₀R/45**. Then σ_out/ε₀ = ρ₀R/(45ε₀). From (c) at r = 3R: ρ₀R³/(5ε₀ × 9R²) = ρ₀R/(45ε₀). They agree. (Similarly σ_in = −ρ₀R/20, and |σ_in|/ε₀ matches the cavity field at r = 2R.)

**(e)** Inside, E ∝ r³, so E(R/2) = (1/2)³ E(R) = **E(R)/8**.

| Point | What earns it |
|---|---|
| 1 | Sets up ∫ρ 4πr′² dr′ and obtains Q = 4πρ₀R³/5 |
| 1 | Inner surface −Q and outer surface +Q, justified with a Gaussian surface in the metal |
| 1 | Correct E for r < R using q_enc(r), not Q |
| 1 | Correct E in the cavity and E = 0 in the metal |
| 1 | Correct E for r > 3R, with net enclosed charge Q |
| 1 | σ_out = ρ₀R/45 and the check against E at r = 3R |

Accept E for r > 3R written as Q/(4πε₀r²). Carry forward an error in Q from (a) once. Part (e) is a quick check and is not marked separately.
</details>

## How did you do?

- **Q1 wrong:** re-read "Four results for a conductor in equilibrium" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/10-1-electrostatics-conductors-study-guide/).
- **Q2 wrong:** revisit "Where the surface charge gathers: points and edges".
- **Q3, Q5 or Q7(b) wrong:** work through "Cavities and electrostatic shielding" and Worked example 1.
- **Q4 wrong:** compare "The field just outside: E = σ/ε₀" with the thin-sheet result.
- **Q6 incomplete:** look again at Figure 1 and Worked example 2.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/10-1-electrostatics-conductors-checklist/).
