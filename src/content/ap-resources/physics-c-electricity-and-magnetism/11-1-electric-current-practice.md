---
resourceId: "mb-ap-physcem-11.1-practice"
title: "Electric Current: Practice Questions (Physics C: E&M 11.1)"
description: "Seven original Marlbridge practice questions on electric current: I = dq/dt, drift velocity, current density, integrating J over a wire and current direction, with full solutions."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.1"]
resourceType: "practice-questions"
prerequisites:
  - "The definitions I = dq/dt, I = nqv_dA and J = nqv_d"
prerequisiteResources: ["mb-ap-physcem-11.1-study-guide"]
learningObjectives:
  - "Use I = dq/dt and q = ∫I dt with changing currents"
  - "Calculate drift speed and current density, and predict factors of change"
  - "Integrate a non-uniform current density to find a total current"
  - "Reason about the direction of current, carrier motion and current density"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "e = 1.60 × 10⁻¹⁹ C. Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-11.1-study-guide", "mb-ap-physcem-11.1-revision-notes", "mb-ap-physcem-11.1-checklist"]
next: "mb-ap-physcem-11.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Questions 4 and 6 need calculus: set up the integral before you evaluate it."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data for every question: elementary charge e = 1.60 × 10⁻¹⁹ C. Materials in Questions 5 and 6 are fictional, with values chosen for the question. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

A metal wire is disconnected from any circuit, so the current in it is zero. Which statement best describes the free electrons in the wire?

- (A) They are at rest, because no field acts on them.
- (B) They move rapidly in random directions, with no net flow through any cross-section.
- (C) They all drift slowly in the same direction, but no charge crosses the ends.
- (D) They have left the wire, so the wire contains no free charge.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Free electrons in a metal always move fast and randomly, colliding with the ions. Over any cross-section, as many cross one way as the other, so the net charge flow, and the current, is zero.

- (A) confuses zero **net** motion with zero motion. Individual electrons have large speeds even when I = 0.
- (C) describes a drift. A common drift through every cross-section would be a current, which contradicts I = 0.
- (D) is wrong: a neutral metal still contains its free electrons; zero current says nothing about how many carriers are present.
</details>

## Question 2 (multiple choice · core)

Wires P and Q are made of the same metal and carry the same steady current. Wire Q has **twice the diameter** of wire P. What is the ratio of the drift speed in Q to the drift speed in P?

- (A) 4
- (B) 2
- (C) 1/2
- (D) 1/4

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** v_d = I/(nqA). I, n and q are the same for both wires. Doubling the diameter doubles the radius, so A = πr² becomes 2² = 4 times larger, and v_d becomes 1/4 as large.

- (A) inverts the relationship: a larger area needs a **smaller** drift speed for the same current.
- (B) assumes v_d is proportional to diameter.
- (C) treats area as proportional to diameter instead of diameter squared.
</details>

## Question 3 (multiple choice · core)

Three straight wires meet at a junction. A current of 2.0 A flows **into** the junction along a wire running north–south. A current of 3.0 A flows **into** the junction along a wire running east–west. The third wire leaves the junction at some angle. What is the current in the third wire?

- (A) 1.0 A
- (B) 3.6 A
- (C) 5.0 A
- (D) It depends on the angle of the third wire.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Charge is conserved and does not build up at the junction, so the charge per second leaving equals the charge per second arriving: 2.0 A + 3.0 A = 5.0 A out along the third wire. Current is a scalar; its direction is "along this wire", not a direction in space.

- (A) subtracts the currents, as if one of them were leaving.
- (B) is √(2.0² + 3.0²): it adds the currents as perpendicular vectors.
- (D) would be true only if current had vector components. It does not.
</details>

## Question 4 (calculation · core)

During a test, the current in a cable falls steadily according to I(t) = 6.0 − 1.5t, with I in amperes and t in seconds, from t = 0 until it reaches zero.

(a) At what time does the current reach zero?
(b) Find the total charge that passes a cross-section of the cable in that time.
(c) How many electrons is this?
(d) Find the average current over the interval.

<details>
<summary>Worked solution</summary>

1. (a) 6.0 − 1.5t = 0 gives **t = 4.0 s**.
2. (b) q = ∫₀⁴ (6.0 − 1.5t) dt = [6.0t − 0.75t²]₀⁴ = 24 − 12 = **12 C**. (Check: the I–t graph is a triangle with area ½ × 4.0 s × 6.0 A = 12 C.)
3. (c) N = q/e = 12 ÷ (1.60 × 10⁻¹⁹) = **7.5 × 10¹⁹ electrons**.
4. (d) I_avg = q/Δt = 12 C ÷ 4.0 s = **3.0 A**, which is the mean of 6.0 A and 0 A, as expected for a linear fall.

Suggested mark points (4): 1 for t = 4.0 s; 1 for setting up q = ∫I dt (or the graph area) with correct limits; 1 for 12 C and 7.5 × 10¹⁹ electrons; 1 for 3.0 A.

Common error: q = 6.0 A × 4.0 s = 24 C, which uses the starting current for the whole time.
</details>

## Question 5 (calculation · core)

A wire made of a (fictional) metal has radius 0.50 mm. The metal has 6.0 × 10²⁸ free electrons per m³ and resistivity 2.8 × 10⁻⁸ Ω·m. The wire carries a steady current of 2.5 A from end X to end Y.

(a) Calculate the current density.
(b) Calculate the drift speed of the electrons, and state their direction of drift.
(c) Calculate the magnitude of the electric field inside the wire, and state its direction.

<details>
<summary>Worked solution</summary>

1. (a) A = π(0.50 × 10⁻³ m)² = 7.85 × 10⁻⁷ m². J = I/A = 2.5 ÷ (7.85 × 10⁻⁷) = **3.2 × 10⁶ A/m²**, pointing from X to Y.
2. (b) v_d = J/(ne) = 3.18 × 10⁶ ÷ (6.0 × 10²⁸ × 1.60 × 10⁻¹⁹) = **3.3 × 10⁻⁴ m/s**. The electrons are negative, so they drift **from Y to X**, opposite to the conventional current.
3. (c) E = ρJ = (2.8 × 10⁻⁸ Ω·m)(3.18 × 10⁶ A/m²) = **0.089 V/m**, pointing **from X to Y**, the same way as J. The field pushes the negative electrons the opposite way, from Y to X, consistent with (b).

Suggested mark points (4): 1 for the area using the radius in metres; 1 for J; 1 for v_d **with** the drift direction Y to X; 1 for E with direction X to Y.

Common error: using 1.0 mm as the radius gives J = 8.0 × 10⁵ A/m², four times too small.
</details>

## Question 6 (constructed response · core)

In a wire of radius R, the current density points along the wire and has magnitude J(r) = J₀(1 − r/R), where r is the distance from the axis and J₀ is a positive constant.

(a) Explain why the total current is **not** J₀πR².
(b) Show that the total current is I = πJ₀R²/3.
(c) Find the current inside the radius r = R/2, as a fraction of the total.
(d) Calculate I for J₀ = 3.0 × 10⁶ A/m² and R = 1.2 mm.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** J₀ is the current density only on the axis. J falls to zero at the surface, so J₀πR² overestimates the current. Because J varies, the current must be found by adding up J dA over the cross-section.

**(b)** Use thin rings of area dA = 2πr dr:
I = ∫₀ᴿ J₀(1 − r/R) 2πr dr = 2πJ₀ ∫₀ᴿ (r − r²/R) dr = 2πJ₀(R²/2 − R²/3) = 2πJ₀R²/6 = **πJ₀R²/3**.

**(c)** I(R/2) = 2πJ₀[(R/2)²/2 − (R/2)³/(3R)] = 2πJ₀R²(1/8 − 1/24) = πJ₀R²/6. That is **half** the total current. The flow is concentrated near the axis, so the inner quarter of the area carries half the current.

**(d)** I = π(3.0 × 10⁶ A/m²)(1.2 × 10⁻³ m)² ÷ 3 = **4.5 A**. (The shortcut J₀πR² would give 13.6 A, three times too large.)

| Point | What earns it |
|---|---|
| 1 | Explains that J varies across the wire, so J × area does not apply |
| 1 | Sets up I = ∫J(r) 2πr dr with limits 0 to R |
| 1 | Evaluates the integral to πJ₀R²/3 |
| 1 | Finds the current inside R/2 as πJ₀R²/6, half the total |
| 1 | 4.5 A with the radius converted to metres |

Accept the integral written as ∫J·dA with a clear statement that dA = 2πr dr. Carry forward an error in (b) into (c) and (d) once.
</details>

## Question 7 (constructed response · stretch)

A particle accelerator produces a beam of singly charged positive ions (charge +e each). The beam has a uniform cross-section of area 1.0 mm². The beam contains 2.0 × 10¹⁴ ions per m³, all moving in the same direction at 3.0 × 10⁵ m/s.

(a) Using a labelled sketch of a length of the beam, derive an expression for the current in terms of n, q, v and A.
(b) Calculate the current and the current density.
(c) How many ions reach the target in 10 s?
(d) A second beam of electrons has the same number density and speed and moves in the same direction. Compare its current with the ion beam's current, in size and direction.
(e) The ion source is adjusted so the number density doubles and the speed halves. What happens to the current? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Sketch a cylinder of the beam with cross-section A and a slice of length vΔt just behind a chosen cross-section. In time Δt, every ion within the slice crosses the section. The slice has volume AvΔt and contains nAvΔt ions, carrying charge Δq = nqAvΔt. So I = Δq/Δt = **nqvA**.

**(b)** I = (2.0 × 10¹⁴ m⁻³)(1.60 × 10⁻¹⁹ C)(3.0 × 10⁵ m/s)(1.0 × 10⁻⁶ m²) = **9.6 × 10⁻⁶ A** (9.6 μA). J = I/A = **9.6 A/m²**, in the direction the ions move.

**(c)** q = It = 9.6 × 10⁻⁶ × 10 = 9.6 × 10⁻⁵ C, so N = q/e = **6.0 × 10¹⁴ ions**.

**(d)** The electron beam carries the **same size** of current, 9.6 μA, because |q|, n, v and A are the same. Its current points in the **opposite** direction to the electrons' motion, so it is opposite to the ion beam's current.

**(e)** I ∝ nv. Doubling n and halving v leaves nv unchanged, so the **current stays 9.6 μA**. Twice as many ions per metre arrive half as fast, so the same charge crosses a section each second.

| Point | What earns it |
|---|---|
| 1 | Sketch with A and a slice of length vΔt (or v dt) labelled |
| 1 | Charge in the slice nqAvΔt, divided by Δt to give I = nqvA |
| 1 | I = 9.6 × 10⁻⁶ A and J = 9.6 A/m² |
| 1 | 6.0 × 10¹⁴ ions |
| 1 | Electron beam: same magnitude, opposite current direction, with reason |
| 1 | Current unchanged, using I ∝ nv |

Accept a derivation using dq = nqA dx and dx/dt = v.
</details>

## How did you do?

- **Q1 wrong:** re-read "Drift velocity: how charge carriers really move" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-1-electric-current-study-guide/).
- **Q2 or Q5 wrong:** revisit "Deriving I = nqv_dA" and Worked example 1.
- **Q3 or Q7(d) wrong:** revisit "The direction of current".
- **Q4 wrong:** revisit "What current measures", especially q = ∫I dt.
- **Q6 incomplete:** work through Worked example 2 again.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-1-electric-current-checklist/).
