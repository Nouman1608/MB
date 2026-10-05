---
resourceId: "mb-ap-phys2-12.3-practice"
title: "Magnetism and Current-Carrying Wires: Practice Questions (Physics 2 12.3)"
description: "Seven original Marlbridge practice questions on wire fields, right-hand rules, adding fields, forces on wires and a current-balance experiment, with full solutions."
course: "physics-2"
unit: 12
topics: ["12.3"]
resourceType: "practice-questions"
prerequisites:
  - "Using B = μ₀I/(2πr) and F = IℓB sin θ with the right-hand rules"
prerequisiteResources: ["mb-ap-phys2-12.3-study-guide"]
learningObjectives:
  - "Find the direction and size of the field near one or more wires"
  - "Predict how B changes when the current or distance changes"
  - "Calculate the force on a wire in a field and between parallel wires"
  - "Analyse data from a current-balance experiment using a graph"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "μ₀ = 4π × 10⁻⁷ T·m/A, so μ₀/(2π) = 2 × 10⁻⁷ T·m/A; g = 9.8 m/s². Give answers to 2 or 3 significant figures"
related: ["mb-ap-phys2-12.3-study-guide", "mb-ap-phys2-12.3-revision-notes", "mb-ap-phys2-12.3-checklist"]
next: "mb-ap-phys2-12.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2", "exam-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Every wire is long and straight unless the question says otherwise."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: μ₀ = 4π × 10⁻⁷ T·m/A, so μ₀/(2π) = 2 × 10⁻⁷ T·m/A; g = 9.8 m/s²; current means conventional current; every wire is long and straight unless stated. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

A long straight wire lies in the plane of the page and carries a current towards the top of the page. Point X is in the plane of the page, 3 cm to the right of the wire. What is the direction of the magnetic field at X due to the wire?

- (A) Into the page
- (B) Out of the page
- (C) Towards the wire
- (D) Towards the top of the page

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Point your right thumb up the page along the current. Your fingers curl around the wire: they come out of the page on the left side and go **into the page on the right side**, where X is.

- (B) is the field on the left of the wire, or the result of using the left hand.
- (C) treats the field like the electric field of a charge, pointing along a radius. The field around a wire has no radial part.
- (D) points the field along the current. The field circles the wire; it has no part parallel to it.
</details>

## Question 2 (multiple choice · core)

At point Y, a long wire produces a magnetic field of size B₀. The current in the wire is tripled, and Y is replaced by a point twice as far from the wire. What is the size of the new field?

- (A) 1.5B₀
- (B) 0.75B₀
- (C) 6B₀
- (D) 12B₀

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** B = μ₀I/(2πr), so B ∝ I/r. The new field is (3/2)B₀ = 1.5B₀.

- (B) uses B ∝ I/r², the inverse-square law for a point charge: 3/4 = 0.75.
- (C) multiplies by both factors, as if B grew with distance.
- (D) uses B ∝ I × r², which mixes up both dependences.
</details>

## Question 3 (multiple choice · core)

Two long parallel wires are 10 cm apart. Wire 1 carries 2.0 A and wire 2 carries 6.0 A, in **opposite** directions. Which statement is correct?

- (A) The wires repel, and the forces on the two wires are equal in size.
- (B) The wires repel, and the force on wire 1 is three times the force on wire 2.
- (C) The wires attract, and the forces on the two wires are equal in size.
- (D) The wires attract, and the force on wire 2 is three times the force on wire 1.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Opposite currents repel. Each wire sits in the other's field, and F/ℓ = μ₀I₁I₂/(2πd) = (2 × 10⁻⁷)(2.0)(6.0) ÷ 0.10 = 2.4 × 10⁻⁵ N/m on **each** wire. The two forces are a Newton's third law pair.

- (B) gets the direction right but thinks the larger current pushes harder. The product I₁I₂ is the same for both wires.
- (C) uses the charge rule ("opposites attract"). For currents, opposite directions repel.
- (D) makes both errors.
</details>

## Question 4 (multiple choice · core)

A circular loop of wire lies flat on the page. Seen from above the page, the current flows anticlockwise. What is the direction of the magnetic field at the centre of the loop?

- (A) Out of the page
- (B) Into the page
- (C) In the plane of the page, towards the top
- (D) The field at the centre is zero because the contributions cancel

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Curl the fingers of your right hand anticlockwise around the loop. Your thumb points out of the page, so the field at the centre is **out of the page**, along the loop's axis.

- (B) is the result for a clockwise current.
- (C) puts the field in the plane of the loop. At the centre, every part of the loop contributes a field along the axis.
- (D) assumes opposite sides cancel. Opposite sides carry current in opposite directions **and** lie on opposite sides of the centre, so their fields at the centre point the same way and add.
</details>

## Question 5 (calculation · core)

A horizontal wire runs east–west and carries 6.0 A towards the east. A 0.25 m length of it is inside a uniform horizontal magnetic field of 0.080 T pointing north.

(a) Calculate the size of the magnetic force on the wire.
(b) State the direction of the force.
(c) The wire is turned in the horizontal plane until the current makes 30° with the field. Calculate the new force.
(d) For what direction of the current would the force be zero?

<details>
<summary>Worked solution</summary>

1. (a) The current (east) is at right angles to B (north), so sin θ = 1. F = IℓB = (6.0 A)(0.25 m)(0.080 T) = **0.12 N**.
2. (b) Fingers point east, curl them towards north: the thumb points **vertically upwards**. The force is at right angles to both the wire and the field.
3. (c) F = IℓB sin 30° = 0.12 N × 0.5 = **0.060 N**, still vertical.
4. (d) The force is zero when the current is **parallel or antiparallel to the field**: wire along the north–south line.

Suggested mark points (4): 1 for 0.12 N; 1 for "upwards" with a correct right-hand-rule argument; 1 for 0.060 N using sin 30° (not cos 30°, which gives 0.104 N); 1 for current along the field direction.

Common error: dividing instead of multiplying (Iℓ/B = 18.75 N). Check units: A × m × T = N.
</details>

## Question 6 (constructed response · core)

Point O is the origin. Wire A passes through the point 4.0 cm directly above O (up the page); wire B passes through the point 3.0 cm directly to the right of O. Both wires are at right angles to the page and both carry current **out of** the page: 10 A in A and 6.0 A in B.

(a) Find the size and direction of the field at O due to each wire.
(b) Find the size and direction of the total field at O.
(c) A student says: "The total field at O is 9.0 × 10⁻⁵ T because the fields add." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** B_A = (2 × 10⁻⁷)(10) ÷ 0.040 = **5.0 × 10⁻⁵ T**. Current out of the page circles anticlockwise. O is directly below A, and the bottom of an anticlockwise circle runs to the **right**. So B_A points right (+x).

B_B = (2 × 10⁻⁷)(6.0) ÷ 0.030 = **4.0 × 10⁻⁵ T**. O is directly to the left of B, and the left side of an anticlockwise circle runs **down**. So B_B points down the page.

**(b)** The two fields are at right angles. |B| = √[(5.0 × 10⁻⁵)² + (4.0 × 10⁻⁵)²] = **6.4 × 10⁻⁵ T**. Direction: tan⁻¹(4.0/5.0) = **39° below the +x direction** (to the right and down).

**(c)** The claim adds the magnitudes: 5.0 × 10⁻⁵ + 4.0 × 10⁻⁵ = 9.0 × 10⁻⁵ T. That is only correct if the fields point the same way. Here they are perpendicular, so they combine as vectors and the total is smaller, 6.4 × 10⁻⁵ T.

| Point | What earns it |
|---|---|
| 1 | Both magnitudes, 5.0 × 10⁻⁵ T and 4.0 × 10⁻⁵ T |
| 1 | B_A to the right, **with** reasoning from the anticlockwise field of an out-of-page current |
| 1 | B_B down the page, with reasoning |
| 1 | Net magnitude 6.4 × 10⁻⁵ T by vector addition |
| 1 | Direction about 39° below the +x axis (or 51° to the right of straight down) |
| 1 | Rejects the claim because the fields are perpendicular, so magnitudes cannot simply be added |

Carry forward direction errors from (a) into (b) once. A reason that only says "by the right-hand rule" without stating what it shows does not earn the direction points.
</details>

## Question 7 (constructed response · stretch)

A student wants to measure the strength B of the uniform field between the poles of a U-shaped magnet. The magnet sits on a digital balance. A stiff horizontal wire is clamped above the balance so that a 0.050 m length of it runs between the poles, at right angles to the field. The wire does not touch the magnet.

(a) Explain why the balance reading changes when a current flows in the wire.
(b) Describe a procedure to find B, including what to vary, what to measure and how to reduce uncertainty.
(c) The student records the (invented) data below, after converting each change in the balance reading to a force. Plot a suitable graph and use it to find B.

| I (A) | 1.0 | 2.0 | 3.0 | 4.0 | 5.0 |
|---|---|---|---|---|---|
| F (mN) | 3.1 | 5.9 | 9.2 | 11.9 | 15.1 |

(d) Predict the slope of the graph if the experiment were repeated with a magnet whose poles cover 0.10 m of the wire, with the same field strength.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The magnet's field exerts a force IℓB on the current. By Newton's third law the wire exerts an equal and opposite force on the magnet. That force adds to or subtracts from the magnet's weight on the balance, so the reading changes.

**(b)** Zero (tare) the balance with no current. Use a variable power supply and an ammeter in series with the wire. Set at least five currents, recording the balance reading at each, and repeat each reading with the current reversed (the change should be the same size, opposite sign; averaging the sizes cancels small drifts). Convert each mass change Δm to a force F = Δm × g. Plot F against I.

**(c)** F = (ℓB)I, so F against I should be a straight line through the origin with slope ℓB. The best-fit line has slope ≈ 3.0 mN/A = 3.0 × 10⁻³ N/A. So B = slope ÷ ℓ = 3.0 × 10⁻³ ÷ 0.050 = **0.060 T**.

**(d)** The slope is ℓB, so doubling ℓ doubles it: about **6.0 mN/A**.

| Point | What earns it |
|---|---|
| 1 | (a) Force on the wire **and** the equal and opposite force on the magnet (Newton's third law) |
| 1 | (b) Independent variable I, measured with an ammeter; dependent variable the balance reading converted to force |
| 1 | (b) A valid uncertainty step: taring, repeats, several currents, or reversing the current |
| 1 | (c) Graph of F against I with labelled axes, units and a best-fit line |
| 1 | (c) Uses slope = ℓB (not a single data point) to get B ≈ 0.060 T (accept 0.059–0.061 T) |
| 1 | (d) 6.0 mN/A with reasoning from slope = ℓB |

Accept a graph of F against Iℓ, with slope B. At 5.0 A the balance reading changes by about 1.5 g, which a 0.01 g balance can resolve well.
</details>

## How did you do?

- **Q1 or Q4 wrong:** practise the two right-hand rules in "The field around a long straight wire" and "The field at the centre of a loop" in the [study guide](/advanced-course-resources/physics-2/12-3-magnetism-current-carrying-wires-study-guide/).
- **Q2 wrong:** go back to the functional-dependence examples: B ∝ I/r.
- **Q3 or Q5 wrong:** re-read "The force on a current-carrying wire" and "Two parallel wires".
- **Q6 wrong:** redo Worked example 1, drawing each field vector before adding.
- **Q7 incomplete:** compare with Worked example 3, which also uses a straight-line graph.

Then tick off the [topic checklist](/advanced-course-resources/physics-2/12-3-magnetism-current-carrying-wires-checklist/).
