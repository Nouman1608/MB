---
resourceId: "mb-ap-physcm-2.1-practice"
title: "Systems and Center of Mass: Practice Questions (Physics C: Mechanics 2.1)"
description: "Seven original Marlbridge calculus-based practice questions on systems, the center of mass of particles and composite shapes, and integrating linear and area mass density."
course: "physics-c-mechanics"
unit: 2
topics: ["2.1"]
resourceType: "practice-questions"
prerequisites:
  - "Definite integrals of polynomials"
prerequisiteResources: ["mb-ap-physcm-2.1-study-guide"]
learningObjectives:
  - "Calculate the center of mass of particles and of composite shapes, including shapes with holes"
  - "Integrate a linear or area mass density to find mass and center of mass"
  - "Derive a symbolic center of mass and check it with limiting cases"
  - "Decide when a system can be treated as one object and explain when its internal structure matters"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Integrals by hand; calculator for arithmetic only. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-2.1-study-guide", "mb-ap-physcm-2.1-revision-notes", "mb-ap-physcm-2.1-checklist"]
next: "mb-ap-physcm-2.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axes. Density coefficients carry units."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. In every density function, x is in m, λ in kg/m and σ in kg/m², so each numerical coefficient carries whatever unit makes the term correct. Round final answers to 2 significant figures unless told otherwise. A calculator is used only for arithmetic.

## Question 1 (multiple choice · foundation)

Take **+x to the right**. Three small beads sit on a straight wire: 2.0 kg at x = −0.30 m, 3.0 kg at x = +0.20 m and 5.0 kg at x = +0.50 m. Where is the center of mass of the three beads?

- (A) x = +0.13 m
- (B) x = +0.25 m
- (C) x = +0.37 m
- (D) x = +2.5 m

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Σmᵢxᵢ = (2.0)(−0.30) + (3.0)(0.20) + (5.0)(0.50) = −0.60 + 0.60 + 2.5 = 2.5 kg·m. Divide by M = 10 kg: x_cm = **+0.25 m**.

- (A) averages the three positions without weighting by mass: (−0.30 + 0.20 + 0.50) ÷ 3. The heavy bead at +0.50 m should count for more.
- (C) drops the minus sign on −0.30 m, so the 2.0 kg bead pulls the wrong way.
- (D) is Σmᵢxᵢ before dividing by the total mass. Its unit is kg·m, not m.
</details>

## Question 2 (multiple choice · core)

A thin rod lies along the x-axis from x = 0 to x = L. Its linear mass density is λ(x) = Cx², where C is a positive constant. Where is its center of mass?

- (A) x = L/3
- (B) x = L/2
- (C) x = 2L/3
- (D) x = 3L/4

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** M = ∫₀ᴸ Cx² dx = CL³/3. ∫₀ᴸ x · Cx² dx = CL⁴/4. So x_cm = (CL⁴/4) ÷ (CL³/3) = **3L/4**.

- (A) is on the wrong side of the midpoint. The density grows with x, so the center of mass must be past L/2.
- (B) is correct only for a uniform rod.
- (C) is the answer for λ = Cx, a density that grows linearly. With x² the far end is even heavier, so the center of mass is further out.
</details>

## Question 3 (multiple choice · core)

For which question **must** you model the internal structure of the system, rather than treat it as a single object at its center of mass?

- (A) How long a sealed sack of flour takes to fall 1.5 m from a shelf.
- (B) How far a delivery van travels in 10 s at constant speed.
- (C) Whether a tall stack of loose boxes on a trolley topples when the trolley stops suddenly.
- (D) The horizontal distance travelled by the center of mass of a thrown, half-full water bottle.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Whether the stack topples depends on how the boxes are arranged and how they push on each other. That is internal structure, and it can change during the stop.

- (A) The packing of the flour does not affect when the sack lands; a point at its center of mass is enough.
- (B) Only the van's motion as a whole is asked for.
- (D) The question asks only about the center of mass. The water may slosh inside, but with air resistance ignored the center of mass follows a projectile path whatever the water does, so a single object at that point is enough.
</details>

## Question 4 (calculation · core)

A flat uniform metal plate is a rectangle 0.50 m wide and 0.30 m tall, with area density σ = 12 kg/m². A square hole, 0.10 m × 0.10 m, is cut out with its center at (0.40 m, 0.15 m). Take the origin at the bottom-left corner of the plate, **+x to the right and +y up**. Find the center of mass of the plate with the hole, to 3 significant figures.

<details>
<summary>Worked solution</summary>

1. Full plate (no hole): mass 12 × 0.50 × 0.30 = 1.80 kg, center at (0.25 m, 0.15 m) by symmetry.
2. Removed square: mass 12 × 0.10 × 0.10 = 0.120 kg, center at (0.40 m, 0.15 m).
3. Treat the hole as negative mass. Remaining mass M = 1.80 − 0.120 = 1.68 kg.
4. x_cm = (1.80 × 0.25 − 0.120 × 0.40) ÷ 1.68 = (0.450 − 0.048) ÷ 1.68 = **0.239 m**.
5. y_cm = **0.150 m**: the hole is centered on the plate's horizontal line of symmetry, so that line is still a line of symmetry.

**Check.** Removing metal from the right-hand side moves the center of mass left of 0.25 m, as found (by about 0.011 m).

Suggested mark points (3): 1 for both masses and both centers; 1 for subtracting the hole and dividing by the remaining mass; 1 for y_cm by symmetry with a reason.

Common errors: adding the hole instead of subtracting it (gives 0.259 m), or dividing by the full mass 1.80 kg (gives 0.223 m).
</details>

## Question 5 (constructed response · core)

A thin rod lies along the x-axis from x = 0 to x = L. Its linear mass density is λ(x) = λ₀(1 + 2x/L), where λ₀ is a positive constant.

(a) State the density at each end of the rod.
(b) Derive an expression for the rod's mass M in terms of λ₀ and L.
(c) Derive an expression for the position of its center of mass.
(d) Show that your answer is reasonable by comparing it with two limiting cases.
(e) For L = 0.90 m and λ₀ = 0.40 kg/m, calculate M and x_cm.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** At x = 0, λ = λ₀. At x = L, λ = 3λ₀.

**(b)** M = ∫₀ᴸ λ₀(1 + 2x/L) dx = λ₀[x + x²/L]₀ᴸ = λ₀(L + L) = **2λ₀L**.

**(c)** ∫₀ᴸ x λ₀(1 + 2x/L) dx = λ₀[x²/2 + 2x³/(3L)]₀ᴸ = λ₀(L²/2 + 2L²/3) = 7λ₀L²/6. Then x_cm = (7λ₀L²/6) ÷ (2λ₀L) = **7L/12**.

**(d)** For a uniform rod (λ = λ₀ everywhere) x_cm = L/2 = 6L/12. For λ ∝ x (zero density at x = 0, mass weighted towards the far end) x_cm = 2L/3 = 8L/12. This rod is in between: denser at x = L than a uniform rod, but not zero at x = 0. So 7L/12 lies between 6L/12 and 8L/12, as it should.

**(e)** M = 2 × 0.40 × 0.90 = **0.72 kg**. x_cm = 7 × 0.90 ÷ 12 = **0.53 m** (0.525 m).

| Point | What earns it |
|---|---|
| 1 | (a) Both end densities, including 3λ₀ |
| 1 | (b) Integrates λ dx over 0 to L to reach 2λ₀L |
| 1 | (c) Sets up ∫x λ dx correctly and integrates it |
| 1 | (c) Divides by M to reach 7L/12 |
| 1 | (d) Compares with both limiting cases (uniform rod, L/2; λ ∝ x, 2L/3) and shows 7L/12 lies between them |
| 1 | (e) Both numerical answers with units (carry forward from (b) and (c)) |

**Alternative method.** Split the rod into a uniform rod of density λ₀ (mass λ₀L at L/2) plus a rod with density 2λ₀x/L (mass λ₀L at 2L/3). Combining the two as particles gives (L/2 + 2L/3)/2 = 7L/12 and earns the (c) points.
</details>

## Question 6 (constructed response · stretch)

A thin square plate has side a = 0.30 m. Take the origin at its bottom-left corner, **+x to the right and +y up**, so the plate covers 0 ≤ x ≤ a and 0 ≤ y ≤ a. Its area density changes only with x: σ(x) = σ₀x/a, where σ₀ = 8.0 kg/m².

(a) Explain why it is sensible to divide the plate into thin vertical strips, and write the mass dm of a strip of width dx.
(b) Find the plate's mass, symbolically and then as a number.
(c) Find x_cm and y_cm.
(d) A student calculates the mass as σ₀a² = 0.72 kg. Explain the error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** σ depends only on x, so every point in a vertical strip at position x has the same density. A strip has area a dx, so **dm = σ(x) a dx = σ₀x dx**. The two-dimensional integral becomes a one-dimensional one.

**(b)** M = ∫₀ᵃ σ₀x dx = **σ₀a²/2** = 8.0 × 0.090 ÷ 2 = **0.36 kg**.

**(c)** x_cm = (1/M) ∫₀ᵃ x · σ₀x dx = (σ₀a³/3) ÷ (σ₀a²/2) = **2a/3 = 0.20 m**. The density does not change with y, so the horizontal line y = a/2 is a line of symmetry: **y_cm = a/2 = 0.15 m**.

**(d)** σ₀a² assumes the whole plate has the density σ₀, which is only reached at the right-hand edge. The density varies, so it must be integrated. The true mass is half that value.

| Point | What earns it |
|---|---|
| 1 | (a) Reason for vertical strips (σ constant along each strip) and dm = σ₀x dx |
| 1 | (b) M = σ₀a²/2 = 0.36 kg |
| 1 | (c) Correct moment integral divided by M, giving x_cm = 0.20 m |
| 1 | (c) y_cm = 0.15 m with a symmetry reason |
| 1 | (d) Identifies that σ₀ is the maximum density, not the average, so σ must be integrated |

**Alternative method.** A double integral ∫∫σ dx dy over the square gives the same results and earns full credit.
</details>

## Question 7 (explanation · stretch)

A tanker lorry carries an open-topped tank. Take **+x forward along the lorry**, with the origin at the back of the tank. The empty tank has mass 100 kg with its center of mass at x = 1.0 m. It holds 400 kg of water, which at steady speed has its center of mass at x = 1.0 m. When the lorry brakes hard, the water surges forward and its center of mass moves to x = 1.3 m.

(a) Choose a system that includes both the tank and the water. Find the center of mass of this system at steady speed and while braking.
(b) Explain, using ideas about systems, why the tank–water system cannot always be modelled as a single rigid object.
(c) Describe one change to the situation that would let the system be treated as one rigid object during braking, and explain why.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Steady speed: x_cm = (100 × 1.0 + 400 × 1.0) ÷ 500 = **1.0 m**. Braking: x_cm = (100 × 1.0 + 400 × 1.3) ÷ 500 = 620 ÷ 500 = **1.24 m** (1.2 m to 2 s.f.). The center of mass has moved 0.24 m forward relative to the tank.

**(b)** The water is a part of the system that can move relative to the tank. During braking the tank and the water behave differently: the water surges forward relative to the tank. So the system's internal structure changes, and a change outside the system (the braking) caused it. A single rigid object at a fixed point in the tank would miss this shift, which matters for questions such as how the load on the front wheels changes.

**(c)** Fill the tank completely and seal it (or freeze the water, or use baffles that stop the surge). Then the water cannot move relative to the tank, the internal arrangement stays fixed, and the center of mass stays at the same place in the tank. The system then behaves as one rigid object.

| Point | What earns it |
|---|---|
| 1 | (a) Both centers of mass, 1.0 m and 1.24 m, with the mass-weighted method |
| 1 | (b) Parts of the system (water and tank) behave differently from each other |
| 1 | (b) Links the change of internal structure to a change outside the system (braking) |
| 1 | (c) A valid change with the reason that the parts can no longer move relative to each other |

A system of the water alone is acceptable in (b) only if the answer still explains why it cannot be one rigid object.
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "Center of mass of particles" and "Symmetry and uniform pieces", then Worked example 1 of the [study guide](/advanced-course-resources/physics-c-mechanics/2-1-systems-center-mass-study-guide/).
- **Q2, Q5 or Q6 wrong:** revisit "Center of mass of a continuous object" and Worked example 2. Write dm in terms of dx first, then integrate twice: once for M, once for ∫x dm.
- **Q3 or Q7 incomplete:** go back to "Choosing a system". Your answer must say which parts move differently and why that matters for the question asked.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/2-1-systems-center-mass-checklist/).
