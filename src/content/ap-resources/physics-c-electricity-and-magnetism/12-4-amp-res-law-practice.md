---
resourceId: "mb-ap-physcem-12.4-practice"
title: "Ampère's Law: Practice Questions (Physics C: E&M 12.4)"
description: "Seven original Marlbridge practice questions on Ampère's law: enclosed current, solenoids, coaxial cables, hollow conductors, slabs and non-uniform current density, with full solutions."
course: "physics-c-electricity-and-magnetism"
unit: 12
topics: ["12.4"]
resourceType: "practice-questions"
prerequisites:
  - "Choosing an Amperian loop by symmetry"
prerequisiteResources: ["mb-ap-physcem-12.4-study-guide"]
learningObjectives:
  - "Use Ampère's law with the sign rule to find ∮B·dℓ"
  - "Derive B for wires, hollow and solid cylinders, slabs and solenoids"
  - "Integrate a non-uniform current density to find I_enc and B(r)"
  - "Explain Maxwell's addition qualitatively"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "μ₀ = 4π × 10⁻⁷ T·m/A; μ₀/(2π) = 2 × 10⁻⁷ T·m/A. Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-12.4-study-guide", "mb-ap-physcem-12.4-revision-notes", "mb-ap-physcem-12.4-checklist"]
next: "mb-ap-physcem-12.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Questions 6 and 7 need a full derivation: choose the loop and justify it first."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data for every question: μ₀ = 4π × 10⁻⁷ T·m/A, so μ₀/(2π) = 2 × 10⁻⁷ T·m/A. "Long" wires, cylinders and solenoids, and "large" slabs, are much bigger than the distances involved. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

Three long straight wires are perpendicular to the page. Wire A carries 4.0 A out of the page and wire B carries 7.0 A into the page; both pass through a circular Amperian loop drawn on the page. Wire C carries 2.0 A out of the page and lies outside the loop. The loop is traversed anticlockwise. What is ∮B·dℓ?

- (A) −3.8 × 10⁻⁶ T·m
- (B) +3.8 × 10⁻⁶ T·m
- (C) −1.3 × 10⁻⁶ T·m
- (D) +1.4 × 10⁻⁵ T·m

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** With the loop traversed anticlockwise, the right-hand rule makes currents out of the page positive. I_enc = +4.0 − 7.0 = −3.0 A, so ∮B·dℓ = μ₀I_enc = (4π × 10⁻⁷)(−3.0) = −3.8 × 10⁻⁶ T·m.

- (B) has the right size but the wrong sign: it treats currents into the page as positive for an anticlockwise loop.
- (C) includes wire C (4.0 − 7.0 + 2.0 = −1.0 A). Currents outside the loop add nothing to ∮B·dℓ, even though they change B on the loop.
- (D) adds the sizes of the two enclosed currents (4.0 + 7.0 = 11 A). Currents in opposite directions must subtract.
</details>

## Question 2 (multiple choice · core)

An ideal solenoid has its number of turns doubled and its radius doubled. Its length and current stay the same. By what factor does the field inside change?

- (A) 2
- (B) 1
- (C) 4
- (D) 8

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** B = μ₀nI with n = N/L. Doubling N at fixed L doubles n, so B doubles. The radius does not appear: the Amperian rectangle gives Bℓ = μ₀nℓI wherever its inside side sits.

- (B) treats the solenoid like a single loop, B ∝ N/R, so that the two factors cancel.
- (C) multiplies by the radius factor as well, as if B ∝ NR.
- (D) multiplies by the change in cross-sectional area (4) as well as N. That would affect flux (Unit 13), not B.
</details>

## Question 3 (multiple choice · core)

A long coaxial cable has a thin inner wire carrying current I along the axis and a thin outer cylindrical shell carrying the same current I in the opposite direction. What is the size of B at a distance r outside the cable?

- (A) 0
- (B) μ₀I/(2πr)
- (C) μ₀I/(πr)
- (D) μ₀I/(4πr)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A coaxial circle of radius r outside the cable encloses I − I = 0. By symmetry B is the same size all round the circle and tangent to it, so B(2πr) = 0 and B = 0.

- (B) counts only the inner wire. That is the field **between** the wire and the shell.
- (C) adds the two currents instead of subtracting them.
- (D) has no basis in the geometry; it halves the single-wire result.
</details>

## Question 4 (calculation · core)

A long hollow metal tube has inner radius 2.0 mm and outer radius 4.0 mm. It carries 9.0 A along its length, spread uniformly over the metal. Find B at (a) 1.0 mm, (b) 3.0 mm and (c) 8.0 mm from the axis.

<details>
<summary>Worked solution</summary>

Use coaxial circles; by symmetry B is tangent to each and constant on it, so B(2πr) = μ₀I_enc.

1. (a) r = 1.0 mm is in the hollow space. I_enc = 0, so **B = 0**.
2. (b) r = 3.0 mm is in the metal. The current fraction enclosed is the area fraction: (r² − a²)/(b² − a²) = (9 − 4)/(16 − 4) = 5/12. I_enc = 9.0 × 5/12 = 3.75 A. B = (2 × 10⁻⁷)(3.75) ÷ (3.0 × 10⁻³) = **2.5 × 10⁻⁴ T**.
3. (c) r = 8.0 mm is outside. I_enc = 9.0 A. B = (2 × 10⁻⁷)(9.0) ÷ (8.0 × 10⁻³) = **2.25 × 10⁻⁴ T** (2.3 × 10⁻⁴ T).

Suggested mark points (4): 1 for B = 0 in the hollow with a reason; 1 for the enclosed fraction (r² − a²)/(b² − a²); 1 for 2.5 × 10⁻⁴ T; 1 for 2.25 × 10⁻⁴ T outside.

Common error: using the solid-wire result μ₀Ir/(2πb²) in the metal. That gives 3.4 × 10⁻⁴ T, because it wrongly counts current in the hollow core.
</details>

## Question 5 (calculation · core)

A large flat conducting slab is 4.0 cm thick. It carries a uniform current density J = 5.0 × 10⁴ A/m² in the +x direction, parallel to its faces. The mid-plane of the slab is z = 0, so the slab fills −0.020 m ≤ z ≤ 0.020 m.

(a) Find B at z = 0.010 m. (b) Find B at z = 0.050 m and at z = 0.10 m. (c) State the direction of B above the slab (z > 0.020 m).

<details>
<summary>Worked solution</summary>

Use a rectangle of length ℓ along y, placed symmetrically about the mid-plane, with its long sides at +z and −z. By symmetry B is parallel to y, equal in size and opposite in direction at ±z. The short sides are along z, perpendicular to B, so ∮B·dℓ = 2Bℓ.

1. (a) Inside: I_enc = J(2z)ℓ, so B = μ₀Jz = (4π × 10⁻⁷)(5.0 × 10⁴)(0.010) = **6.3 × 10⁻⁴ T**.
2. (b) Outside: I_enc = Jtℓ, so B = μ₀Jt/2 = (4π × 10⁻⁷)(5.0 × 10⁴)(0.040)/2 = **1.26 × 10⁻³ T** at **both** distances.
3. (c) dℓ along +x and r̂ with a +z component give x̂ × ẑ = −ŷ. Above the slab, **B points in −y** (and in +y below it).

Suggested mark points (4): 1 for a symmetric rectangle with ∮B·dℓ = 2Bℓ; 1 for 6.3 × 10⁻⁴ T inside; 1 for 1.26 × 10⁻³ T outside with the statement that it does not depend on distance; 1 for the direction −y above.

Common error: using the symmetric rectangle but writing ∮B·dℓ = Bℓ, counting only one long side. Both long sides lie in the field, so this doubles the answers.
</details>

## Question 6 (constructed response · core)

A long cylindrical conductor of radius R carries current along its axis with current density J(r) = α/r for 0 < r ≤ R, where α is a positive constant.

(a) Show that the total current is I = 2παR.
(b) Use Ampère's law to derive B(r) for r ≤ R and for r > R. Justify your Amperian loop.
(c) Show that your two results agree at r = R.
(d) For R = 3.0 mm and I = 6.0 A, find α and B at r = R/2 and at r = 2R.
(e) Compare B at r = R/2 with a conductor of the same R and I carrying a uniform current density.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** I_enc(r) = ∫₀ʳ (α/r′) 2πr′ dr′ = 2πα ∫₀ʳ dr′ = 2παr. At r = R, **I = 2παR**.

**(b)** Use a coaxial circle of radius r. By symmetry B is tangent to the circle and has the same size at every point on it, so ∮B·dℓ = B(2πr).
Inside: B(2πr) = μ₀(2παr), so **B = μ₀α**, the **same at every r** inside.
Outside: B(2πr) = μ₀I, so **B = μ₀I/(2πr)**.

**(c)** At r = R, the outside result is μ₀(2παR)/(2πR) = μ₀α, the same as inside.

**(d)** α = I/(2πR) = 6.0 ÷ (2π × 3.0 × 10⁻³) = **318 A/m**. Inside, B = μ₀α = μ₀I/(2πR) = (2 × 10⁻⁷)(6.0) ÷ (3.0 × 10⁻³) = **4.0 × 10⁻⁴ T** at r = R/2. At r = 2R, B = **2.0 × 10⁻⁴ T**.

**(e)** Uniform J: B = μ₀Ir/(2πR²), which is half the surface value at R/2, so 2.0 × 10⁻⁴ T. The α/r conductor gives **twice** this, because its current is concentrated near the axis, so more current is enclosed by small circles.

| Point | What earns it |
|---|---|
| 1 | Sets up I_enc = ∫J 2πr′ dr′ and gets 2παr, so I = 2παR |
| 1 | Coaxial circle justified: B tangent and constant by symmetry |
| 1 | Inside result B = μ₀α (constant) |
| 1 | Outside result μ₀I/(2πr) and continuity at r = R shown |
| 1 | α = 318 A/m and B values 4.0 × 10⁻⁴ T and 2.0 × 10⁻⁴ T |
| 1 | Comparison: uniform case gives 2.0 × 10⁻⁴ T at R/2, with a reason based on where the current flows |

Accept α in A/m or equivalent units. Carry forward an error in I_enc once.
</details>

## Question 7 (constructed response · stretch)

A long solenoid is 0.25 m long, has 400 turns and carries 0.80 A.

(a) Draw a suitable Amperian loop on a sketch of a section through the solenoid, and use it to derive B = μ₀nI. State each assumption you make.
(b) Calculate B inside.
(c) A student says: "If I move the inside side of my loop closer to the windings, the enclosed current is the same, so B there must be the same." Is the student right? Explain.
(d) The solenoid is replaced by a parallel-plate capacitor that is being charged. A circular loop is drawn in the gap between the plates, parallel to them, and no charge crosses any flat surface bounded by it. Explain why there is nevertheless a magnetic field around this loop.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A rectangle with one side of length ℓ inside the solenoid, parallel to the axis, and the opposite side outside. Assumptions: the solenoid is ideal, so B inside is uniform and parallel to the axis, and B outside is negligible. Inside side: Bℓ. The two short sides are perpendicular to B inside and in zero field outside: 0. Outside side: 0. Enclosed current: nℓ turns each carrying I. So Bℓ = μ₀nℓI and **B = μ₀nI**.

**(b)** n = 400/0.25 = 1600 m⁻¹. B = (4π × 10⁻⁷)(1600)(0.80) = **1.6 × 10⁻³ T** (1.61 × 10⁻³ T).

**(c)** Yes. Any position of the inside side encloses the same nℓ turns, and gives Bℓ = μ₀nℓI, so B is the same everywhere inside an ideal solenoid. This is why the field inside is uniform.

**(d)** As the capacitor charges, the electric field between the plates grows, so the electric flux through the loop changes. Maxwell's addition to Ampère's law says a changing electric field produces a magnetic field, just as a current does. So a magnetic field circles the gap even though no charge flows across it.

| Point | What earns it |
|---|---|
| 1 | Rectangular loop with one side inside along the axis and one outside, drawn or described |
| 1 | Ideal-solenoid assumptions stated (uniform B inside, negligible outside) |
| 1 | Each side's contribution justified, giving Bℓ = μ₀nℓI |
| 1 | n = 1600 m⁻¹ and B = 1.6 × 10⁻³ T |
| 1 | Agrees with the student, linking the same enclosed current to the same B (uniform field) |
| 1 | A changing electric field (changing electric flux) produces a magnetic field |

Do not require the Maxwell equation in symbols for (d); a clear statement of the idea earns the point. A common error in (b) is using L = 25 cm, which gives n = 16 and a field 100 times too small.
</details>

## How did you do?

- **Q1 wrong:** re-read the sign rule in "From the long-wire field to Ampère's law" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-4-amp-res-law-study-guide/).
- **Q2 or Q7 wrong:** revisit "Long solenoids" and Figure 2.
- **Q3 or Q4 wrong:** revisit "Wires and cylinders", especially hollow cylinders and coaxial cables.
- **Q5 wrong:** revisit "Slabs and current sheets".
- **Q6 incomplete:** work through Worked example 2 again, step by step.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/12-4-amp-res-law-checklist/).
