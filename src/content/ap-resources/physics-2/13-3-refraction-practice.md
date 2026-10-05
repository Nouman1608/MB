---
resourceId: "mb-ap-phys2-13.3-practice"
title: "Refraction: Practice Questions (Physics 2 13.3)"
description: "Seven original Marlbridge practice questions on n = c/v, Snell's law, bending direction, graphing angle data and total internal reflection, with full solutions and mark points."
course: "physics-2"
unit: 13
topics: ["13.3"]
resourceType: "practice-questions"
prerequisites:
  - "Using Snell's law with angles measured from the normal"
prerequisiteResources: ["mb-ap-phys2-13.3-study-guide"]
learningObjectives:
  - "Calculate speeds and angles using n = c/v and Snell's law"
  - "Decide when total internal reflection can happen"
  - "Plan a refraction experiment and find n from a linearised graph"
  - "Evaluate claims about refraction using the critical angle"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "c = 3.00 × 10⁸ m/s; n_air = 1.00. Calculator in degree mode. Give answers to 3 significant figures unless the data justify fewer"
related: ["mb-ap-phys2-13.3-study-guide", "mb-ap-phys2-13.3-revision-notes", "mb-ap-phys2-13.3-checklist"]
next: "mb-ap-phys2-13.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Every angle is measured from the normal."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: c = 3.00 × 10⁸ m/s; n_air = 1.00; all angles are measured from the normal; every medium is uniform. All experimental data are invented for practice. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

A new transparent plastic has an index of refraction of 1.60. What is the speed of light in the plastic?

- (A) 4.80 × 10⁸ m/s
- (B) 3.00 × 10⁸ m/s
- (C) 1.88 × 10⁸ m/s
- (D) 1.17 × 10⁸ m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** n = c / v, so v = c / n = (3.00 × 10⁸ m/s) / 1.60 = 1.875 × 10⁸ m/s ≈ 1.88 × 10⁸ m/s.

- (A) multiplies by n instead of dividing. Light can never travel faster than c in a material.
- (B) assumes the speed does not change. If it did not change, there would be no refraction.
- (D) divides by n twice (c / n²).
</details>

## Question 2 (multiple choice · core)

A ray of light inside a glass block (n = 1.52) meets a flat boundary with water (n = 1.33) at 35° to the normal. Which statement describes the light that crosses into the water?

- (A) It travels at about 41° to the normal, bending away from the normal.
- (B) It travels at about 30° to the normal, bending toward the normal.
- (C) It continues at 35°, because both media are transparent.
- (D) No light crosses: the ray is totally internally reflected.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Snell's law: 1.52 sin 35° = 1.33 sin θ₂, so sin θ₂ = 0.656 and θ₂ = 41.0°. The light enters a lower n, so it bends away from the normal.

- (B) swaps the indices (1.33 sin 35° = 1.52 sin θ₂), which gives 30.1°. Toward the normal is the rule for entering a **higher** n.
- (C) ignores the change in speed. Being transparent does not stop refraction; the indices differ, so the ray bends.
- (D) TIR is possible here, but only beyond the critical angle, sin⁻¹(1.33/1.52) = 61.0°. At 35° most of the light gets through.
</details>

## Question 3 (multiple choice · core)

A small lamp sits on the floor of a garden pond (n_water = 1.33). One ray from the lamp meets the water surface at 30.0° to the normal. At what angle to the normal does it travel in the air?

- (A) 22.1°
- (B) 30.0°
- (C) 39.9°
- (D) 41.7°

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** 1.33 sin 30.0° = 1.00 sin θ_air, so sin θ_air = 0.665 and θ_air = 41.7°. Leaving water for air, the ray bends away from the normal, so the answer must be larger than 30°.

- (A) uses sin θ = sin 30.0° / 1.33, the formula for light going the other way, from air into water.
- (B) ignores refraction.
- (C) multiplies the angle by 1.33 (30.0 × 1.33 = 39.9). Snell's law links the **sines**, not the angles.
</details>

## Question 4 (multiple choice · core)

In each case a ray in medium X meets a flat boundary with medium Y at 50° to the normal. In which case is the ray totally internally reflected? (n_glass = 1.50, n_water = 1.33.)

- (A) X is glass, Y is air
- (B) X is air, Y is glass
- (C) X is glass, Y is water
- (D) X is water, Y is glass

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** TIR needs light going into a lower n **and** an angle beyond the critical angle. Glass to air: sin θc = 1.00/1.50, θc = 41.8°. 50° > 41.8°, so the ray is totally reflected.

- (B) goes into a higher n. The ray bends toward the normal (to 30.7°); TIR is impossible.
- (C) goes into a lower n, but θc = sin⁻¹(1.33/1.50) = 62.5°. 50° is below this, so the ray refracts into the water at 59.8°.
- (D) goes into a higher n, so TIR is impossible. The ray refracts at 42.8°.
</details>

## Question 5 (calculation · core)

A thin layer of oil (n = 1.45) floats on water (n = 1.33). A ray of light in air meets the top of the oil at 50.0° to the normal. The oil and water surfaces are horizontal and parallel.

(a) Calculate the angle of refraction in the oil.
(b) Calculate the angle of the ray in the water.
(c) Calculate the speed of light in the oil.
(d) Show that the answer to (b) is the same as it would be with no oil layer, and explain why.

<details>
<summary>Worked solution</summary>

1. (a) 1.00 sin 50.0° = 1.45 sin θ_oil, so sin θ_oil = 0.766 / 1.45 = 0.528 and θ_oil = **31.9°**.
2. (b) The ray meets the oil–water boundary at 31.9°, because the boundaries are parallel. 1.45 sin 31.9° = 1.33 sin θ_w, so sin θ_w = 0.766 / 1.33 = 0.576 and θ_w = **35.2°**.
3. (c) v = c / n = (3.00 × 10⁸ m/s) / 1.45 = **2.07 × 10⁸ m/s**.
4. (d) With no oil: 1.00 sin 50.0° = 1.33 sin θ_w gives the same 0.576 and the same **35.2°**. Across parallel boundaries the product n sin θ stays the same at each one, so 1.00 sin 50.0° = 1.45 sin θ_oil = 1.33 sin θ_w. The oil only shifts the ray sideways.

Suggested mark points (4): 1 for θ_oil = 31.9°; 1 for using the oil angle as the incidence angle at the second boundary and getting 35.2°; 1 for v = 2.07 × 10⁸ m/s; 1 for showing the direct calculation gives the same angle **and** explaining with the constant n sin θ.

Common error: measuring the oil–water incidence angle from the surface (58.1°). Both boundaries are horizontal, so the normal is vertical at both.
</details>

## Question 6 (experimental design and analysis · core)

A student wants to find the index of refraction n of a clear liquid. A waterproof laser inside a tank points upward at the flat liquid surface, and the student measures the angle θ_L of the beam in the liquid and the angle θ_A of the beam in the air above. These are the invented results:

| θ_L (°) | 10 | 15 | 20 | 25 | 30 | 35 | 40 |
|---|---|---|---|---|---|---|---|
| θ_A (°) | 14.5 | 22.5 | 30.0 | 38.5 | 47.5 | 57.5 | 71.0 |

At θ_L = 45°, no beam comes out into the air.

(a) Describe how the student could measure θ_L and θ_A, and state one step that improves the reliability of the results.
(b) State which quantities to plot so that the graph is a straight line, and what the slope represents.
(c) Plot the graph and use it to find n.
(d) Is the observation at θ_L = 45° consistent with your value of n? Justify with a calculation.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** For example: mount a vertical protractor or angle scale against the side of the tank with its centre where the beam meets the surface, and draw (or mark) the vertical normal there. Read the beam direction below and above the surface against the normal; a little mist or a card held in the beam makes it visible. Repeat each reading and average, keep the surface still, and use a wide range of angles.

**(b)** Snell's law: n sin θ_L = 1.00 sin θ_A. Plot **sin θ_A** (vertical) against **sin θ_L** (horizontal). The graph is a straight line through the origin whose **slope is n**.

**(c)** The sines are:

| sin θ_L | 0.174 | 0.259 | 0.342 | 0.423 | 0.500 | 0.574 | 0.643 |
|---|---|---|---|---|---|---|---|
| sin θ_A | 0.250 | 0.383 | 0.500 | 0.623 | 0.737 | 0.843 | 0.946 |

The points lie close to a line through the origin. Two points read from the best-fit line, for example (0.17, 0.25) and (0.64, 0.94), give slope = 0.69 / 0.47 = 1.47. So **n ≈ 1.47**.

**(d)** sin θc = 1.00 / 1.47, so θc = 42.9°. At θ_L = 45°, the angle is beyond θc, so the beam is totally internally reflected and no beam leaves the surface. **Consistent.** The data also agree: at 40° (just below θc) the beam leaves at 71°, close to grazing the surface.

| Point | What earns it |
|---|---|
| 1 | A workable way to measure both angles from a normal at the point where the beam meets the surface |
| 1 | One valid reliability step (repeats and averages, wide range, still surface, fine beam) |
| 1 | Plots sin θ_A against sin θ_L (or the reverse) and states that the slope is n (or 1/n for the reverse) |
| 1 | Correct sines plotted on labelled axes with a sensible scale and a best-fit line through or near the origin |
| 1 | Slope found from two points on the line, giving n in the range 1.45 to 1.49 |
| 1 | θc found from the student's own n (about 43°) and compared with 45° to conclude TIR is expected |

Do not award the slope point for averaging θ_A/θ_L: the angles are not proportional. Accept n from the mean of sin θ_A/sin θ_L for the slope point only if a graph is also drawn.
</details>

## Question 7 (constructed response · stretch)

A small LED is set 3.0 cm below the flat top surface of a large block of clear resin (n = 1.55). Viewed from directly above, the top surface shows a bright disc of light centred above the LED, with darkness outside it.

(a) Explain why light leaves the top surface only inside a disc.
(b) Calculate the radius of the disc.
(c) The block is placed at the bottom of a tank of water (n = 1.33), so the top surface is now in contact with water. A student claims: "The disc stays the same size, because the LED is still 3.0 cm below the surface." Evaluate the claim with a calculation.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Light from the LED meets the top surface at larger and larger angles to the normal as you move away from the point directly above it. Going from resin into air is going into a lower n, so beyond the critical angle the light is totally internally reflected and none gets out. Light only escapes where the angle is less than θc, which is inside a circle.

**(b)** sin θc = 1.00 / 1.55, so θc = 40.2°. The edge of the disc is where the ray meets the surface at θc. From the right triangle: r = (3.0 cm) tan 40.2° = **2.5 cm** (2.53 cm).

**(c)** The claim is **wrong**. The critical angle depends on both indices. Resin to water: sin θc = 1.33 / 1.55, θc = 59.1°. Then r = (3.0 cm) tan 59.1° = **5.0 cm**. The radius roughly doubles (factor 1.98), so the disc area becomes about 3.9 times larger. The depth is the same, but the larger critical angle lets light escape over a wider circle.

| Point | What earns it |
|---|---|
| 1 | Links the dark region to rays beyond the critical angle being totally internally reflected |
| 1 | States that TIR is possible because the light goes into a lower n |
| 1 | θc = 40.2° for resin to air |
| 1 | r = d tan θc with a correct right-triangle geometry, giving 2.5 cm |
| 1 | θc = 59.1° for resin to water, using n₂ = 1.33 |
| 1 | r ≈ 5.0 cm and a clear conclusion that the claim is false because θc, not the depth alone, sets the radius |

Carry forward an error in θc from (b) into the geometry of (c) once.
</details>

## How did you do?

- **Q1 wrong:** re-read "The index of refraction" in the [study guide](/advanced-course-resources/physics-2/13-3-refraction-study-guide/).
- **Q2, Q3 or Q5 wrong:** revisit "Snell's law" and the toward/away rules. Pair each n with the angle in the same medium.
- **Q4 or Q7 wrong:** work through "Total internal reflection" and Worked example 3.
- **Q6 incomplete:** compare your graph with Worked example 2 and Figure 3.

Then tick off the [topic checklist](/advanced-course-resources/physics-2/13-3-refraction-checklist/).
