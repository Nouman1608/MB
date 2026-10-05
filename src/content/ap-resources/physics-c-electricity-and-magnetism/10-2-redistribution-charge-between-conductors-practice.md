---
resourceId: "mb-ap-physcem-10.2-practice"
title: "Redistribution of Charge Between Conductors: Practice Questions (Physics C: E&M 10.2)"
description: "Seven original Marlbridge practice questions on charge sharing between conductors: equal potentials, spheres on a wire, nested conductors, grounding and induced charge, with solutions."
course: "physics-c-electricity-and-magnetism"
unit: 10
topics: ["10.2"]
resourceType: "practice-questions"
prerequisites:
  - "Conductors are equipotentials; potential of a charged sphere"
prerequisiteResources: ["mb-ap-physcem-10.2-study-guide"]
learningObjectives:
  - "Use equal potential and conservation of charge to find final charges on connected conductors"
  - "Compare surface charge densities and fields of connected spheres"
  - "Predict charge flow when conductors are nested, connected or grounded"
  - "Derive an induced charge by setting a grounded conductor's potential to zero"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "ε₀ = 8.85 × 10⁻¹² C²/(N·m²); 1/(4πε₀) = 8.99 × 10⁹ N·m²/C²; e = 1.602 × 10⁻¹⁹ C. Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-10.2-study-guide", "mb-ap-physcem-10.2-revision-notes", "mb-ap-physcem-10.2-checklist"]
next: "mb-ap-physcem-10.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Question 7 needs calculus: integrate E to find the potential, then set it to zero."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data for every question: ε₀ = 8.85 × 10⁻¹² C²/(N·m²), 1/(4πε₀) = 8.99 × 10⁹ N·m²/C² and e = 1.602 × 10⁻¹⁹ C. Take V = 0 far away and at ground. Spheres "joined by a long thin wire" are far apart and the wire holds negligible charge. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

A small metal cube with charge +5 nC touches a large, uncharged metal plate. Once charge stops moving, which quantity must be the same for the cube and the plate?

- (A) Their electric potential
- (B) Their net charge
- (C) Their surface charge density
- (D) The field just outside their surfaces

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** In contact they form one conductor, and a conductor in equilibrium is an equipotential. Charge flows until the potentials are equal.

- (B) holds only for identical conductors. The large plate will take most of the charge.
- (C) and (D) depend on the local shape and curvature. Even on a single conductor, σ and the surface field vary from place to place; only V is the same everywhere.
</details>

## Question 2 (multiple choice · core)

Two metal spheres of radii 2.0 cm and 5.0 cm are joined by a long thin wire. Together they carry +14 nC. What is the final charge on the **smaller** sphere?

- (A) 4.0 nC
- (B) 7.0 nC
- (C) 10 nC
- (D) 1.9 nC

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Equal potentials give q/R the same for both, so q ∝ R: q_small = (14 nC)(2.0)/(2.0 + 5.0) = 4.0 nC. The larger sphere has 10 nC.

- (B) shares the charge equally, which is only correct for identical spheres.
- (C) is the larger sphere's charge: the ratio has been applied the wrong way round.
- (D) shares the charge in proportion to R² (surface area), which would give equal σ, not equal potential.
</details>

## Question 3 (multiple choice · core)

For the two spheres in Question 2, what is the ratio E_small / E_large of the fields just outside their surfaces?

- (A) 2.5
- (B) 0.40
- (C) 1.0
- (D) 6.25

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The field just outside each sphere is E = σ/ε₀ = V/R. Both are at the same V, so E ∝ 1/R and E_small/E_large = 5.0/2.0 = 2.5.

- (B) is the inverse. It assumes the sphere with more charge has the stronger field.
- (C) assumes equal potential means equal field. It does not: the field also depends on the radius.
- (D) uses (R_large/R_small)², the ratio you would get for equal charges, kq/R². Here the charges are not equal.
</details>

## Question 4 (calculation · core)

An isolated metal sphere of radius 0.10 m carries +8.0 nC.

(a) Find its potential.
(b) The sphere is connected to ground, with no other charges nearby. State its final charge, and find the number of electrons that flow and their direction.
(c) The sphere, now neutral, is grounded again while a point charge of −4.0 nC is held 0.40 m from its centre. Find the charge induced on the sphere.

<details>
<summary>Worked solution</summary>

1. (a) V = kQ/R = (8.99 × 10⁹)(8.0 × 10⁻⁹) ÷ 0.10 = **719 V**.
2. (b) Grounding sets V = 0. With nothing nearby, V = kQ/R = 0 requires **Q = 0**. The sphere was positive, so electrons flow **from ground into the sphere**: 8.0 × 10⁻⁹ ÷ 1.602 × 10⁻¹⁹ = **5.0 × 10¹⁰ electrons**.
3. (c) At the centre: kq/d + kQ′/R = 0, so Q′ = −qR/d = −(−4.0 nC)(0.10)/(0.40) = **+1.0 nC**. The negative point charge pushes electrons out of the sphere into the ground (6.2 × 10⁹ of them).

Suggested mark points (3): 1 for 719 V; 1 for Q = 0 with electrons flowing from ground and the correct number; 1 for +1.0 nC from setting the potential at the centre to zero.

Common error: giving Q′ = −1.0 nC. The induced charge has the **opposite** sign to the nearby charge.
</details>

## Question 5 (calculation · core)

A small metal sphere of radius 0.020 m carries +5.0 nC. It sits at the centre of a neutral, thick metal shell with inner radius 0.080 m and outer radius 0.10 m.

(a) State the charge on the sphere and on each surface of the shell.
(b) Find the potential of the shell and of the inner sphere.
(c) A wire is now passed through a small hole to join the sphere to the shell. State the final charges and the final potential, and describe the charge flow.

<details>
<summary>Worked solution</summary>

1. (a) Sphere: +5.0 nC. A Gaussian surface in the shell's metal encloses zero net charge, so the inner surface has **−5.0 nC** and the outer surface **+5.0 nC**.
2. (b) Outside, the field is that of +5.0 nC at the centre, so V_shell = (8.99 × 10⁹)(5.0 × 10⁻⁹) ÷ 0.10 = **450 V** (449.5 V). In the gap, E = kq/r², so the sphere is higher by kq(1/0.020 − 1/0.080). V_sphere = (8.99 × 10⁹)(5.0 × 10⁻⁹)(1/0.020 − 1/0.080 + 1/0.10) = **2.14 × 10³ V**.
3. (c) The sphere and shell become one conductor. Any charge left on the sphere would make a field in the gap and a potential difference, so the sphere ends with **0**, the inner surface with **0** and the outer surface with **+5.0 nC**. Positive charge "flows" from the sphere (2.14 kV) to the shell (450 V); in the metal, 3.1 × 10¹⁰ electrons move from the shell to the sphere. The final potential is **450 V**, unchanged for the shell.

Suggested mark points (4): 1 for the surface charges in (a); 1 for V_shell = 450 V; 1 for V_sphere = 2.14 × 10³ V with the gap term; 1 for all charge on the outer surface and the flow direction in (c).

Common error: sharing the 5.0 nC between the sphere and the shell in proportion to radius. That rule is for **distant** spheres, not for one inside the other.
</details>

## Question 6 (constructed response · core)

A point charge of +3.0 nC hangs on an insulating thread at the centre of a closed, neutral metal box. The box stands on an insulating base.

(a) Without equations, make a claim about whether there is an electric field outside the box, and justify it.
(b) The box is connected to ground. Describe the charge flow and the field outside afterwards.
(c) The ground wire is then removed, with the point charge still inside. A charged rod is brought near the outside of the box. Does the field at the point charge change? Explain.
(d) Explain why grounding was needed to shield the outside from the charge, but not needed to shield the inside from the rod.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Yes. The field in the box's metal is zero, so a Gaussian surface in the metal encloses zero charge: the inner surface carries −3.0 nC. The box is neutral, so +3.0 nC sits on the outer surface. That charge produces a field outside.

**(b)** Grounding forces the box to V = 0. The outer +3.0 nC is removed: electrons (1.9 × 10¹⁰ of them) flow from ground onto the box and cancel it. The inner −3.0 nC stays, held by the point charge. The field outside becomes **zero**.

**(c)** No. The rod induces charges on the **outer** surface only. They cancel the rod's field everywhere inside the outer surface, including the cavity. The field in the cavity is still due only to the point charge and the −3.0 nC on the wall.

**(d)** Outside fields are always cancelled inside a closed conductor by induced outer-surface charge. But a charge inside always forces an equal charge onto the outer surface of an isolated box (by conservation and Gauss's law). Only a connection to ground, which can supply or absorb charge, can remove that outer charge.

| Point | What earns it |
|---|---|
| 1 | Claim: there is a field outside, justified by −3.0 nC on the inner wall and +3.0 nC on the outer surface |
| 1 | Electrons flow from ground; outer charge becomes zero |
| 1 | Field outside zero after grounding, with the inner −3.0 nC still present |
| 1 | Field at the charge unchanged, because the rod's induced charges are on the outer surface |
| 1 | Contrast in (d): ground supplies or absorbs charge; an isolated box conserves its net charge |
</details>

## Question 7 (constructed response · stretch)

A metal sphere of radius a = 0.050 m sits at the centre of a thin, concentric metal shell of radius b = 0.20 m. The shell carries a fixed charge Q = +8.0 nC and is insulated. The inner sphere is connected to ground through a thin insulated wire that passes through a small hole in the shell. Let q′ be the charge induced on the inner sphere.

(a) Write expressions for E(r) for a < r < b and for r > b in terms of q′ and Q.
(b) By integrating E from infinity, show that V(a) = kQ/b + kq′/a, and hence that q′ = −Qa/b.
(c) Evaluate q′ and the charges on the inner and outer surfaces of the shell.
(d) Find the potential of the shell and the field just outside it.
(e) State how many electrons flowed through the ground wire, and in which direction.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Spherical symmetry. For a < r < b: q_enc = q′, so **E = kq′/r²** (radial). For r > b: q_enc = Q + q′, so **E = k(Q + q′)/r²**.

**(b)** V(b) = −∫_∞^b k(Q + q′)/r² dr = k(Q + q′)/b.
V(a) = V(b) − ∫_b^a kq′/r² dr = k(Q + q′)/b + kq′(1/a − 1/b) = **kQ/b + kq′/a**.
The sphere is grounded, so V(a) = 0: **q′ = −Qa/b**.

**(c)** q′ = −(8.0 nC)(0.050)/(0.20) = **−2.0 nC**. Shell inner surface: **+2.0 nC** (Gauss's law in the shell's metal). Shell outer surface: 8.0 − 2.0 = **+6.0 nC**.

**(d)** V_shell = k(Q + q′)/b = (8.99 × 10⁹)(6.0 × 10⁻⁹) ÷ 0.20 = **270 V**. Just outside: E = (8.99 × 10⁹)(6.0 × 10⁻⁹) ÷ 0.20² = **1.35 × 10³ N/C, outward**. (In the gap at r = 0.10 m, E = 1.80 × 10³ N/C, pointing inward towards the negative sphere.)

**(e)** The sphere gained −2.0 nC, so 2.0 × 10⁻⁹ ÷ 1.602 × 10⁻¹⁹ = **1.2 × 10¹⁰ electrons flowed from ground to the sphere**.

| Point | What earns it |
|---|---|
| 1 | Both field expressions with correct enclosed charges |
| 1 | Integral set up from infinity to b with E for r > b |
| 1 | Integral across the gap added, giving V(a) = kQ/b + kq′/a |
| 1 | V(a) = 0 used to obtain q′ = −Qa/b = −2.0 nC |
| 1 | Shell surface charges +2.0 nC and +6.0 nC |
| 1 | V_shell = 270 V and E = 1.35 × 10³ N/C outward |

For the second and third points, accept a superposition argument (the shell's charge adds kQ/b everywhere inside it; the sphere's charge adds kq′/a at its own surface) as an alternative to the integral. Carry forward an error in q′ into (c)–(e) once. Part (e) is a quick check and is not marked separately.
</details>

## How did you do?

- **Q1 wrong:** re-read "Contact means equal potential, not equal charge" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/10-2-redistribution-charge-between-conductors-study-guide/).
- **Q2 or Q3 wrong:** work through "Two spheres joined by a long wire", Figure 1 and Worked example 1.
- **Q4 or Q7 wrong:** revisit "Ground: the ideal reference" and Worked example 2.
- **Q5 wrong:** see "Conductors inside conductors".
- **Q6 incomplete:** compare "Grounding a shell around a charge" with the shielding section of Topic 10.1.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/10-2-redistribution-charge-between-conductors-checklist/).
