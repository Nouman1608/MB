---
resourceId: "mb-ap-phys1-3.3-practice"
title: "Potential Energy: Practice Questions (Physics 1 3.3)"
description: "Seven original Marlbridge practice questions on potential energy: choosing systems and zeros, spring and gravitational energy, factors of change and summing pairs, with worked solutions."
course: "physics-1"
unit: 3
topics: ["3.3"]
resourceType: "practice-questions"
prerequisites:
  - "Hooke's law and Newton's law of gravitation"
prerequisiteResources: ["mb-ap-phys1-3.3-study-guide"]
learningObjectives:
  - "Identify which systems can have potential energy"
  - "Calculate spring and gravitational potential energy, including with different choices of zero"
  - "Predict how potential energy changes when a stretch or a separation changes"
  - "Add pair energies for a system of three objects"
  - "Justify why the change in potential energy does not depend on path or on the choice of zero"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 N/kg and G = 6.67 × 10⁻¹¹ N·m²/kg². Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-3.3-study-guide", "mb-ap-phys1-3.3-revision-notes", "mb-ap-phys1-3.3-checklist"]
next: "mb-ap-phys1-3.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1", "exam-physics-1"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Name the system and the zero of potential energy before you calculate."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 N/kg and G = 6.67 × 10⁻¹¹ N·m²/kg². Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end. Any scientific calculator is fine.

## Question 1 (multiple choice · foundation)

Which of these systems can have potential energy?

- (A) A single tennis ball moving through the air, with the system chosen as the ball only
- (B) A tennis ball and Earth
- (C) A crate sliding across a rough floor, with the system chosen as the crate only
- (D) A single spacecraft drifting in deep space, far from any other object

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Potential energy needs two or more objects that interact through a conservative force. The ball and Earth attract each other by gravity, which is conservative, so the ball–Earth system has gravitational potential energy.

- (A) The ball alone is one object. Gravity from Earth acts on it from outside the system, so the system has kinetic energy only.
- (C) The crate alone is one object, and friction is not conservative anyway. There is no "friction potential energy".
- (D) One object with nothing to interact with can have kinetic energy but no potential energy.
</details>

## Question 2 (multiple choice · core)

An ideal spring stores 0.50 J when it is compressed by 2.0 cm. How much energy does it store when it is compressed by 6.0 cm?

- (A) 1.5 J
- (B) 4.5 J
- (C) 13.5 J
- (D) 0.056 J

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** U_s = ½kΔx², so U_s ∝ Δx². The compression is 3 times bigger, so the energy is 3² = 9 times bigger: 9 × 0.50 J = 4.5 J.

- (A) treats U_s as proportional to Δx (×3). That would be true for the spring *force*, not the energy.
- (C) multiplies by 3³ = 27, as if the energy went as Δx³.
- (D) divides by 9, as if the energy fell with distance like an inverse-square law.
</details>

## Question 3 (multiple choice · core)

Take **+y upward**. A 0.40 kg book rests on a shelf 2.0 m above the floor. The ceiling is 3.0 m above the floor. A student chooses **U_g = 0 at the ceiling**. What is the gravitational potential energy of the book–Earth system?

- (A) +7.8 J
- (B) −3.9 J
- (C) +3.9 J
- (D) −12 J

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Measured from the chosen zero, the book is at y = 2.0 m − 3.0 m = −1.0 m. U_g = mgy = 0.40 kg × 9.8 N/kg × (−1.0 m) = −3.9 J. The value is negative because the book is below the zero.

- (A) is the value with the zero at the floor, not the ceiling the student chose.
- (C) has the right size but drops the sign: the book is below the zero, so U_g must be negative.
- (D) uses the ceiling height (3.0 m) as the distance, instead of the book's distance from the ceiling.
</details>

## Question 4 (multiple choice · core)

A moon orbits a planet. The gravitational potential energy of the planet–moon system is U_g, a negative number. If the centre-to-centre separation were doubled, the potential energy would be

- (A) U_g / 4
- (B) U_g / 2
- (C) 2U_g
- (D) 4U_g

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** U_g = −Gm₁m₂/r, so U_g ∝ 1/r. Doubling r halves the value. Because U_g is negative, U_g / 2 is closer to zero: the potential energy has **increased**, as it should when two attracting objects move apart.

- (A) uses 1/r², which is how the gravitational *force* changes, not the energy.
- (C) and (D) make the value more negative, which would mean the system lost energy by moving apart. That gets the dependence the wrong way round.
</details>

## Question 5 (calculation · core)

A spring has k = 160 N/m.

(a) Calculate the elastic potential energy when it is stretched 5.0 cm from its relaxed length.
(b) How far must it be stretched to store 1.0 J?
(c) How much energy does it store when **compressed** 5.0 cm? Explain briefly.
(d) A second spring has k = 640 N/m. What stretch makes it store the same energy as in (a)?

<details>
<summary>Worked solution</summary>

**(a)** Δx = 0.050 m. U_s = ½ × 160 × (0.050)² = **0.20 J**.

**(b)** Δx = √(2U_s / k) = √(2 × 1.0 ÷ 160) = 0.112 m ≈ **0.11 m** (11 cm).

**(c)** **0.20 J**. Δx is squared, so a compression and a stretch of the same size store the same energy.

**(d)** k is 4 times bigger. For the same U_s, Δx² must be 4 times smaller, so Δx is halved: **2.5 cm** (0.025 m). Check: ½ × 640 × (0.025)² = 0.20 J.

Suggested mark points (4): 1 for (a) with Δx in metres; 1 for (b); 1 for (c) with the squaring reason; 1 for (d) by scaling or by substitution.

Common error: substituting Δx = 5.0 (cm) gives 2000 J, a factor of 10 000 too big.
</details>

## Question 6 (constructed response · stretch)

Three identical asteroids, each of mass m, are held at the corners of an equilateral triangle of side d. Treat them as spheres.

(a) Derive an expression for the total gravitational potential energy of the three-asteroid system, in terms of m, d and G.
(b) Calculate it for m = 2.0 × 10¹² kg and d = 5.0 × 10³ m.
(c) The triangle grows to side 2d. Predict the new total potential energy and state whether the system's potential energy has increased or decreased.
(d) A student adds the energy of only two pairs, because "each asteroid only needs to be counted once". Explain the error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Each pair is a distance d apart, so each pair contributes −Gm·m/d = −Gm²/d. There are three pairs (AB, BC, AC). **U_total = −3Gm²/d**.

**(b)** U_total = −3 × (6.67 × 10⁻¹¹) × (2.0 × 10¹²)² ÷ (5.0 × 10³) = **−1.6 × 10¹¹ J**.

**(c)** Every pair term halves, so U_total = −3Gm²/(2d) = **−8.0 × 10¹⁰ J**. This is less negative, so the potential energy has **increased** (by 8.0 × 10¹⁰ J).

**(d)** Potential energy belongs to **pairs**, not to individual objects. Each of the three pairs interacts, and every pair must be counted once. Counting two pairs misses one interaction, giving −2Gm²/d.

| Point | What earns it |
|---|---|
| 1 | Writes −Gm²/d for one pair, with r = d |
| 1 | Three pairs, so −3Gm²/d |
| 1 | −1.6 × 10¹¹ J, with the negative sign |
| 1 | Halving for side 2d, stated as an increase |
| 1 | Explains that energy is counted per pair, and three pairs exist |

</details>

## Question 7 (constructed response · stretch)

Take **+y upward**. A 0.60 kg ball is carried from the ground to a balcony 4.5 m higher. One student carries it up a straight staircase; another walks it up a long winding ramp. Student P says: "The ball has 26 J of potential energy on the balcony." Student Q says: "The ramp route gives a bigger increase in potential energy, because the path is longer."

(a) Calculate the change in gravitational potential energy for the trip.
(b) Evaluate statement P. Identify two things that need correcting or adding.
(c) Evaluate statement Q, using the type of force involved.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** ΔU_g = mgΔy = 0.60 kg × 9.8 N/kg × 4.5 m = **+26 J** (26.46 J).

**(b)** The number is right as a **change**, but P's wording needs two corrections. First, potential energy belongs to the **ball–Earth system**, not to the ball alone. Second, "26 J" is the value only if U_g = 0 is chosen at the ground. With another zero (say, the balcony) the value would be different; only the change of +26 J is the same for every choice.

**(c)** Q is **incorrect**. Gravity is a conservative force, so the work it does, and therefore ΔU_g = −W_gravity, depends only on the start and end heights, not the path. Both routes rise 4.5 m, so both give ΔU_g = +26 J. A longer path would matter for a non-conservative force such as friction, not for gravity.

| Point | What earns it |
|---|---|
| 1 | +26 J with the method shown |
| 1 | States that potential energy belongs to the ball–Earth system |
| 1 | States that the value depends on the chosen zero, but the change does not |
| 1 | Q is wrong because gravity is conservative: its work depends only on the end points |
| 1 | Concludes both routes give the same ΔU_g, linked to the equal height change |

</details>

## How did you do?

- **Q1 or Q7(b) wrong:** re-read "Potential energy belongs to a system" in the [study guide](/advanced-course-resources/physics-1/3-3-potential-energy-study-guide/).
- **Q2 or Q5 wrong:** go back to the spring section and Worked example 1. Square Δx, in metres.
- **Q3 wrong:** work through Worked example 2 and its table of two zeros.
- **Q4 or Q6 wrong:** revisit the general gravitational form, Figure 1(b) and "Systems with more than two objects".
- **Q7(c) incomplete:** your reasoning needs the *why*: gravity is conservative, so only the start and end matter.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/3-3-potential-energy-checklist/).
