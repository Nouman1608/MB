---
resourceId: "mb-ap-physcem-13.1-practice"
title: "Magnetic Flux: Practice Questions (Physics C: E&M 13.1)"
description: "Seven original Marlbridge practice questions on magnetic flux: angles and signs, components, solenoids, closed surfaces and an integral over a non-uniform field, with solutions."
course: "physics-c-electricity-and-magnetism"
unit: 13
topics: ["13.1"]
resourceType: "practice-questions"
prerequisites:
  - "Using Φ_B = BA cos θ and the area vector"
prerequisiteResources: ["mb-ap-physcem-13.1-study-guide"]
learningObjectives:
  - "Calculate magnetic flux for flat surfaces at different orientations, including signs"
  - "Use the solenoid field and Gauss's law for magnetism to find flux through loops and closed surfaces"
  - "Set up and evaluate ∫B·dA for a field that varies across a surface"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "μ₀ = 4π × 10⁻⁷ T·m/A. Use degree mode. Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-13.1-study-guide", "mb-ap-physcem-13.1-revision-notes", "mb-ap-physcem-13.1-checklist"]
next: "mb-ap-physcem-13.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism", "exam-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Question 7 needs calculus: set up the ring integral before you evaluate it."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data for every question: μ₀ = 4π × 10⁻⁷ T·m/A and 1 Wb = 1 T·m². Solenoids are long and ideal (uniform field inside, negligible field outside). A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

A flat circular loop of radius 0.10 m is in a uniform magnetic field of 0.50 T. The plane of the loop makes an angle of 30° with the field direction. What is the magnitude of the magnetic flux through the loop?

- (A) 1.4 × 10⁻² Wb
- (B) 7.9 × 10⁻³ Wb
- (C) 1.6 × 10⁻² Wb
- (D) 0

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The area is π(0.10 m)² = 0.0314 m². The angle between B and the **area vector** is 90° − 30° = 60°. So Φ_B = (0.50 T)(0.0314 m²) cos 60° = 7.9 × 10⁻³ Wb.

- (A) uses cos 30°, treating the angle to the plane as if it were the angle to the normal.
- (C) is BA, the flux only when the loop faces the field squarely (θ = 0°).
- (D) assumes no flux unless the field is exactly perpendicular to the loop. Any field with a component along the normal gives flux; zero needs the plane to lie along the field.
</details>

## Question 2 (multiple choice · core)

A square of side 0.30 m lies in the yz-plane. Its area vector is chosen as +î. The uniform magnetic field in the region is B = (0.40 î − 0.25 ĵ + 0.10 k̂) T. What is the flux through the square?

- (A) 4.3 × 10⁻² Wb
- (B) 2.3 × 10⁻² Wb
- (C) 3.6 × 10⁻² Wb
- (D) 9.0 × 10⁻³ Wb

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A = (0.30 m)² î = 0.090 î m². Only the component of B along A counts: Φ_B = B·A = (0.40 T)(0.090 m²) = 3.6 × 10⁻² Wb.

- (A) multiplies the full magnitude |B| = 0.48 T by the area. The ĵ and k̂ components lie in the plane of the square, so they pass along it, not through it.
- (B) adds all three components (0.40 − 0.25 + 0.10 = 0.25 T). Components are not added like this in a dot product.
- (D) uses the k̂ component, as if the square lay in the xy-plane.
</details>

## Question 3 (multiple choice · core)

A closed plastic box completely surrounds the north-pole end of a strong bar magnet. The south-pole end is outside the box. What is the net magnetic flux through the surface of the box?

- (A) Zero
- (B) Positive, because field lines leave the north pole and go out through the box
- (C) Negative, because the field inside a magnet points from south to north
- (D) It depends on the strength of the magnet and the size of the box

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Gauss's law for magnetism: ∮B·dA = 0 for every closed surface. Magnetic field lines form closed loops. The lines that leave the box outside the magnet are exactly balanced by the lines that enter the box inside the magnet, where the field runs from the south end towards the north end.

- (B) counts only the lines leaving through the outside of the magnet and forgets the lines entering along the inside of the magnet.
- (C) counts only the lines inside the magnet.
- (D) would be true for the flux through part of the box, but not for the whole closed surface. No magnetic monopole exists to make the net flux non-zero.
</details>

## Question 4 (calculation · core)

A square loop of side 0.080 m is in a uniform field of 0.25 T. The field makes an angle of 40° with the plane of the loop.

(a) Calculate the flux through the loop, choosing the area vector on the side that gives a positive value.
(b) The loop is turned over (half a revolution). Find the new flux, keeping the area vector fixed to the loop, and the change in flux.
(c) At what angle between B and the area vector would the flux be half its maximum value?

<details>
<summary>Worked solution</summary>

1. (a) A = (0.080 m)² = 6.4 × 10⁻³ m². The angle between B and the normal is 90° − 40° = 50°. Φ_B = (0.25)(6.4 × 10⁻³) cos 50° = **1.03 × 10⁻³ Wb**.
2. (b) After a half turn, the area vector points the other way relative to B, so θ = 130° and Φ_B = **−1.03 × 10⁻³ Wb**. The change is ΔΦ_B = −1.03 × 10⁻³ − 1.03 × 10⁻³ = **−2.06 × 10⁻³ Wb**.
3. (c) The maximum is BA = 1.6 × 10⁻³ Wb. Half of it needs cos θ = 0.5, so **θ = 60°** (the plane of the loop then makes 30° with B).

Suggested mark points (3): 1 for using 50° (not 40°) in (a); 1 for the negative flux and a change of size 2 × 1.03 × 10⁻³ Wb in (b); 1 for θ = 60° in (c).

Common error: using cos 40°, which gives 1.23 × 10⁻³ Wb.
</details>

## Question 5 (calculation · core)

A long solenoid of radius 0.015 m has 1500 turns per metre and carries a current of 2.0 A.

(a) Find the magnetic field inside the solenoid.
(b) Find the flux through a coaxial circular loop of radius 0.010 m inside the solenoid.
(c) Find the flux through a coaxial circular loop of radius 0.040 m around the outside of the solenoid.
(d) The 0.040 m loop is now tilted so that its axis makes 35° with the solenoid's axis, while it still encircles the solenoid. Does the flux through it change? Explain.

<details>
<summary>Worked solution</summary>

1. (a) B = μ₀nI = (4π × 10⁻⁷)(1500)(2.0) = **3.77 × 10⁻³ T**, along the axis.
2. (b) The whole loop is in the uniform field: Φ_B = Bπr² = (3.77 × 10⁻³)π(0.010)² = **1.18 × 10⁻⁶ Wb**.
3. (c) The field outside the solenoid is negligible, so only the solenoid's own cross-section counts: Φ_B = Bπ(0.015)² = **2.66 × 10⁻⁶ Wb**.
4. (d) **No.** The flux through the tilted loop is still 2.66 × 10⁻⁶ Wb. Reason 1: any flat surface bounded by the loop cuts the solenoid in an ellipse of area π(0.015)²/cos 35°, but only the component B cos 35° is normal to that surface, so the product is unchanged. Reason 2: the tilted surface and the solenoid's cross-section together bound a closed region, and ∮B·dA = 0, so the same field lines pass through both.

Suggested mark points (4): 1 for B = 3.77 × 10⁻³ T; 1 for using r = 0.010 m in (b); 1 for using the solenoid radius (not 0.040 m) in (c); 1 for "unchanged" with a valid reason in (d).

Common error in (c): using the loop's radius, which gives 1.9 × 10⁻⁵ Wb, about seven times too big.
</details>

## Question 6 (constructed response · core)

A closed metal can (a cylinder with both ends on) sits near a magnet. Using outward area vectors, a student measures the flux through the flat bottom of the can as −4.0 × 10⁻⁵ Wb and the flux through the flat top as +1.5 × 10⁻⁵ Wb.

(a) State the value of the net magnetic flux through the whole can and the law you are using.
(b) Calculate the flux through the curved side of the can.
(c) Describe in words what your answer to (b) tells you about the field lines.
(d) A classmate says: "If we push the north pole of the magnet inside the can, the net flux will become positive, because all the field lines start at the north pole." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The net flux is **zero**, by Gauss's law for magnetism, ∮B·dA = 0.

**(b)** Φ_bottom + Φ_top + Φ_side = 0, so Φ_side = −(−4.0 × 10⁻⁵ + 1.5 × 10⁻⁵) = **+2.5 × 10⁻⁵ Wb**.

**(c)** The positive sign means that, overall, field lines leave the can through the curved side. Lines enter through the bottom (negative flux); some leave through the top and the rest leave through the side.

**(d)** The claim is wrong. Field lines do not start at the north pole: inside the magnet they run from the south end to the north end, so they form closed loops. With the north end inside the can, the lines leaving it outside the magnet are balanced by the lines entering it inside the magnet. The net flux is still zero. A non-zero net flux would need a magnetic monopole, and none has been observed.

| Point | What earns it |
|---|---|
| 1 | Net flux zero, naming Gauss's law for magnetism (or "field lines form closed loops") |
| 1 | Correct equation of the three fluxes with outward normals |
| 1 | Φ_side = +2.5 × 10⁻⁵ Wb, with the correct sign |
| 1 | Interprets the sign: net outward flow of field lines through the side |
| 1 | Rejects the claim, explaining that field lines continue inside the magnet so the net flux stays zero |

</details>

## Question 7 (constructed response · stretch)

Near the face of an electromagnet, the component of the field perpendicular to a flat circular disc of radius R is B⊥(r) = B₀(1 − r/(2R)), where r is the distance from the centre of the disc and B₀ is a constant.

(a) Explain why thin rings are a good choice of area element, and write dA for a ring.
(b) Show that the flux through the whole disc is Φ_B = (2/3)πR²B₀.
(c) Evaluate the flux for B₀ = 0.80 T and R = 0.050 m.
(d) Find the average perpendicular field over the disc. Explain why it is not equal to B⊥ at r = R/2.
(e) What fraction of the total flux passes through the inner region r ≤ R/2?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** B⊥ depends only on r, so it is constant around a thin ring of radius r. A ring of width dr has area **dA = 2πr dr**.

**(b)** Φ_B = ∫₀ᴿ B₀(1 − r/(2R)) 2πr dr = 2πB₀[r²/2 − r³/(6R)] from 0 to R = 2πB₀(R²/2 − R²/6) = 2πB₀(R²/3) = **(2/3)πR²B₀**.

**(c)** Φ_B = (2/3)π(0.050 m)²(0.80 T) = **4.19 × 10⁻³ Wb**.

**(d)** Average field = Φ_B ÷ (πR²) = (2/3)B₀ = **0.53 T**. At r = R/2, B⊥ = 0.75B₀ = 0.60 T, which is larger. The outer rings have more area than the inner rings (dA grows with r), so the weaker field near the edge counts for more of the average.

**(e)** Φ_inner = 2πB₀[(R/2)²/2 − (R/2)³/(6R)] = 2πB₀(R²/8 − R²/48) = (5/24)πR²B₀. Fraction = (5/24) ÷ (2/3) = **5/16 ≈ 0.31**. Only about a third of the flux passes through the inner region, even though the field is strongest there, because that region is only a quarter of the area.

| Point | What earns it |
|---|---|
| 1 | Ring element dA = 2πr dr, justified by B depending only on r |
| 1 | Correct integral with limits 0 to R |
| 1 | Evaluates to (2/3)πR²B₀ |
| 1 | 4.19 × 10⁻³ Wb |
| 1 | Average 0.53 T with the area-weighting explanation |
| 1 | Fraction 5/16 (or 0.31), with a sensible comment |

Accept equivalent integration steps. Carry forward an error from (b) into (c)–(e) once.
</details>

## How did you do?

- **Q1, Q2 or Q4 wrong:** re-read "The area vector and the sign of flux" and Worked example 1 in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-1-magnetic-flux-study-guide/).
- **Q3 or Q6 wrong:** revisit "Closed surfaces: zero net magnetic flux".
- **Q5 wrong:** see "Flux through a solenoid".
- **Q7 incomplete:** work through "Flux as a surface integral" and Worked example 2 again.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/13-1-magnetic-flux-checklist/).
