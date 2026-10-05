---
resourceId: "mb-ap-physcem-12.3-practice"
title: "Magnetic Fields of Current-Carrying Wires and the Biot-Savart Law: Practice Questions (Physics C: E&M 12.3)"
description: "Seven original Marlbridge practice questions on the Biot-Savart law: field directions, loops, finite wires, coils on axis and forces on wires, with full solutions and suggested mark points."
course: "physics-c-electricity-and-magnetism"
unit: 12
topics: ["12.3"]
resourceType: "practice-questions"
prerequisites:
  - "The Biot-Savart law and the right-hand grip rule"
prerequisiteResources: ["mb-ap-physcem-12.3-study-guide"]
learningObjectives:
  - "Find the direction of the field from a current-carrying wire"
  - "Use the Biot-Savart results for finite wires, loops and points on a loop's axis"
  - "Combine fields from several wires and loops by superposition"
  - "Calculate forces on current-carrying wires, including by integration"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "μ₀ = 4π × 10⁻⁷ T·m/A; μ₀/(2π) = 2 × 10⁻⁷ T·m/A. Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-12.3-study-guide", "mb-ap-physcem-12.3-revision-notes", "mb-ap-physcem-12.3-checklist"]
next: "mb-ap-physcem-12.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Questions 6 and 7 need calculus or a full derivation: set up before you evaluate."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data for every question: μ₀ = 4π × 10⁻⁷ T·m/A, so μ₀/(2π) = 2 × 10⁻⁷ T·m/A. "Long" wires are much longer than the distances involved. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

A long straight wire lies along the x-axis and carries a current in the +x direction. Point P is on the +y axis. In which direction is the magnetic field at P?

- (A) +z
- (B) −z
- (C) +y
- (D) +x

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** By the Biot-Savart law, dB is along dℓ × r̂. Here dℓ points along +x and r̂ (from the wire to P) points along +y, so x̂ × ŷ = +ẑ. The grip rule agrees: right thumb along +x, and your fingers come up out of the xy-plane on the +y side.

- (B) reverses the cross product (r̂ × dℓ), or uses the left hand.
- (C) points away from the wire, as an electric field from a line charge would. A magnetic field has no component toward or away from the wire.
- (D) points along the current. The field has no component parallel to the wire.
</details>

## Question 2 (multiple choice · core)

A circular loop carries current I and has radius R. A second loop has radius 2R and carries current 3I. What is the ratio B₂/B₁ of the fields at their centres?

- (A) 3/2
- (B) 3/4
- (C) 6
- (D) 2/3

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** At the centre, B = μ₀I/(2R), so B ∝ I/R. The ratio is (3I/2R) ÷ (I/R) = 3/2.

- (B) treats B as ∝ I/R², as if each piece of wire were the only source. The length of wire also doubles, so one factor of R cancels.
- (C) multiplies the factors (3 × 2) instead of dividing by the radius factor.
- (D) is the inverse ratio, B₁/B₂.
</details>

## Question 3 (multiple choice · core)

A straight wire 25 cm long carries 4.0 A. It sits in a uniform magnetic field of 0.080 T, at an angle of 30° to the field. What is the size of the magnetic force on it?

- (A) 0.040 N
- (B) 0.069 N
- (C) 0.080 N
- (D) 4.0 N

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** F = IℓB sin θ = (4.0 A)(0.25 m)(0.080 T)(sin 30°) = 0.040 N.

- (B) uses cos 30° instead of sin 30°. The force depends on the component of the wire perpendicular to B.
- (C) leaves out the angle, which is only right when the wire is perpendicular to B.
- (D) uses ℓ = 25 (centimetres) without converting to metres.
</details>

## Question 4 (calculation · core)

A square loop of wire, side 0.10 m, carries 2.0 A. (a) Use the result for a finite straight wire to find B at the centre of the square. (b) Compare it with the field at the centre of a circular loop of radius 0.050 m (the circle that just fits inside the square) carrying the same current.

<details>
<summary>Worked solution</summary>

1. (a) The centre lies on the perpendicular bisector of each side, at distance a = s/2 = 0.050 m. For one side, L = s = 0.10 m: B₁ = μ₀IL / [2πa√(L² + 4a²)] = (2 × 10⁻⁷)(2.0)(0.10) ÷ [(0.050)√(0.010 + 0.010)] = 5.66 × 10⁻⁶ T.
2. All four sides carry current round the loop in the same sense, so all four fields point the same way at the centre (perpendicular to the loop). B = 4B₁ = **2.26 × 10⁻⁵ T**. Symbolically, B = 2√2 μ₀I/(πs).
3. (b) Circle: B = μ₀I/(2R) = (4π × 10⁻⁷)(2.0) ÷ (2 × 0.050) = **2.51 × 10⁻⁵ T**.
4. The square's field is 2√2/π ≈ 0.90 of the circle's. Most of the square's wire (the corners) is farther from the centre than 0.050 m, so it contributes less.

Suggested mark points (4): 1 for a = 0.050 m and L = 0.10 m in the finite-wire result; 1 for B from one side; 1 for adding four equal, same-direction contributions to get 2.3 × 10⁻⁵ T; 1 for the circle value with a reasoned comparison.

Common error: using the long-wire result μ₀I/(2πa) for each side. That gives 3.2 × 10⁻⁵ T, which is too large, because each side is only twice as long as its distance from the centre.
</details>

## Question 5 (calculation · core)

A flat circular coil of 50 turns and radius 0.040 m carries 0.60 A. Find B on its axis (a) at the centre, (b) 0.030 m from the centre, and (c) 0.40 m from the centre. (d) Show that (c) agrees with the far-field form μ₀NIR²/(2z³) to within about 2%.

<details>
<summary>Worked solution</summary>

1. (a) B₀ = μ₀NI/(2R) = (4π × 10⁻⁷)(50)(0.60) ÷ (2 × 0.040) = **4.71 × 10⁻⁴ T**.
2. (b) B = μ₀NIR² / [2(R² + z²)^(3/2)] = B₀ × [R²/(R² + z²)]^(3/2). With R = 0.040 m and z = 0.030 m, √(R² + z²) = 0.050 m, so the factor is (0.040/0.050)³ = 0.512. B = **2.41 × 10⁻⁴ T**.
3. (c) z = 0.40 m: factor = [0.0016/(0.0016 + 0.16)]^(3/2) = 9.85 × 10⁻⁴, so B = **4.64 × 10⁻⁷ T**.
4. (d) Far-field form: (4π × 10⁻⁷)(50)(0.60)(0.040)² ÷ [2(0.40)³] = 4.71 × 10⁻⁷ T. This is 1.5% above the exact value, so the 1/z³ form is a good model when z = 10R.

Suggested mark points (4): 1 for multiplying the single-loop result by N; 1 for the centre value; 1 for the axis value at 0.030 m using (R² + z²)^(3/2); 1 for the far-field comparison.

Common error: writing (R² + z²)^(1/2) or forgetting the R² in the numerator. Check: the formula must reduce to μ₀NI/(2R) at z = 0.
</details>

## Question 6 (constructed response · core)

Two identical single-turn circular loops, each of radius R = 0.050 m, share the same axis and are 0.10 m apart. Each carries 2.0 A in the same direction round the axis.

(a) Starting from the Biot-Savart law, explain why the field of one loop at a point on its axis points along the axis.
(b) Find B at the point on the axis midway between the loops.
(c) Find B at the centre of one loop.
(d) One current is now reversed. What is B at the midpoint? Explain.
(e) Sketch B along the axis for the original currents, from the centre of one loop to the centre of the other.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Each piece dℓ is perpendicular to the line r to the point, so each dB is perpendicular to r. That dB has a component along the axis and a sideways component. The piece on the opposite side of the loop has an equal sideways component in the opposite direction. These cancel round the loop, leaving only the axial components, which all point the same way.

**(b)** The midpoint is z = 0.050 m = R from each loop. One loop gives B = μ₀IR² / [2(2R²)^(3/2)] = μ₀I/(4√2 R) = (4π × 10⁻⁷)(2.0) ÷ (4√2 × 0.050) = 8.89 × 10⁻⁶ T. Both point the same way, so **B = 1.78 × 10⁻⁵ T** along the axis.

**(c)** Own loop: μ₀I/(2R) = 2.51 × 10⁻⁵ T. Other loop at z = 2R: μ₀IR² / [2(5R²)^(3/2)] = 2.25 × 10⁻⁶ T. Total **B = 2.74 × 10⁻⁵ T**.

**(d)** **Zero.** The two loops are the same distance from the midpoint, so their fields there have the same size. Reversing one current reverses its field, so they cancel.

**(e)** A smooth curve, symmetric about the midpoint, with its highest values (about 2.74 × 10⁻⁵ T) at or very close to the two loop centres and a dip to 1.78 × 10⁻⁵ T at the midpoint. B never reaches zero between the loops.

| Point | What earns it |
|---|---|
| 1 | Sideways components cancel in pairs by symmetry; axial components add |
| 1 | Uses z = R in the axis formula for each loop |
| 1 | B at midpoint = 1.8 × 10⁻⁵ T from adding two equal contributions |
| 1 | B at a loop centre: adds μ₀I/(2R) and the other loop's field at z = 2R |
| 1 | Zero at the midpoint with a reason based on equal sizes and opposite directions |
| 1 | Sketch: symmetric, highest near the loop centres, minimum (not zero) at the midpoint |

Accept answers to 2 significant figures. Carry forward an error in the single-loop field once.
</details>

## Question 7 (constructed response · stretch)

A long straight wire lies along the y-axis and carries I₁ = 20 A in the +y direction. A straight metal rod lies along the x-axis from x = 0.020 m to x = 0.10 m and carries I₂ = 3.0 A in the +x direction (away from the long wire). Both are in the xy-plane.

(a) State the direction of the long wire's field at points on the rod.
(b) Explain why you cannot use F = I₂ℓB directly for the whole rod.
(c) Set up and evaluate an integral for the force on the rod.
(d) Give the direction of the force.
(e) A student estimates the force using the field at the rod's midpoint. Find this estimate and explain why it is too small.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** At a point on the +x axis, dℓ for the long wire is along +y and r̂ is along +x. ŷ × x̂ = −ẑ, so B points in the **−z direction** (into the page if the page is the xy-plane).

**(b)** B = μ₀I₁/(2πx) changes along the rod: it is five times stronger at x = 0.020 m than at x = 0.10 m. F = I₂ℓB needs a uniform field.

**(c)** A piece dx of the rod is perpendicular to B, so dF = I₂B dx = I₂μ₀I₁/(2πx) dx.
F = (μ₀I₁I₂/2π) ∫ dx/x from 0.020 to 0.10 = (μ₀I₁I₂/2π) ln(0.10/0.020) = (2 × 10⁻⁷)(20)(3.0) ln 5
F = (1.2 × 10⁻⁵)(1.609) = **1.93 × 10⁻⁵ N**.

**(d)** dF is along I₂dℓ × B = x̂ × (−ẑ) = +ŷ. The force is in the **+y direction**, parallel to the long wire's current.

**(e)** At the midpoint x = 0.060 m, B = (2 × 10⁻⁷)(20)/0.060 = 6.67 × 10⁻⁵ T, so F ≈ (3.0)(0.080)(6.67 × 10⁻⁵) = 1.60 × 10⁻⁵ N. This is too small because B ∝ 1/x rises steeply near the wire: the extra force on the near half is larger than the shortfall on the far half.

| Point | What earns it |
|---|---|
| 1 | B in the −z direction, with a cross-product or grip-rule reason |
| 1 | B varies with x, so the force must be integrated |
| 1 | dF = I₂μ₀I₁dx/(2πx), with limits 0.020 m and 0.10 m |
| 1 | F = (μ₀I₁I₂/2π) ln 5 = 1.9 × 10⁻⁵ N |
| 1 | Force in +y, from I₂dℓ × B |
| 1 | Midpoint estimate 1.6 × 10⁻⁵ N, with the reason that 1/x is curved, so the average of B is larger than B at the midpoint |

Accept the force direction stated as "parallel to I₁". Carry forward a sign error in (a) into (d) once.
</details>

## How did you do?

- **Q1 wrong:** re-read "Direction: the right-hand grip rule" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-3-magnetic-fields-current-carrying-wires-study-guide/).
- **Q2 or Q5 wrong:** revisit "Loops and arcs" and "The field on the axis of a loop".
- **Q4 wrong:** work through the finite-wire derivation and Worked example 1 again.
- **Q3 or Q7 wrong:** revisit "Force on a current-carrying wire" and Worked example 3.
- **Q6 incomplete:** practise using components and symmetry before adding fields.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/12-3-magnetic-fields-current-carrying-wires-checklist/).
