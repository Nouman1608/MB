---
resourceId: "mb-ap-phys1-8.4-practice"
title: "Fluids and Conservation Laws: Practice Questions (Physics 1 8.4)"
description: "Seven original Marlbridge practice questions on flow rate, continuity, Bernoulli's equation, Torricelli's result and a jet-range experiment, with worked solutions and suggested mark points."
course: "physics-1"
unit: 8
topics: ["8.4"]
resourceType: "practice-questions"
prerequisites:
  - "Pressure, gauge pressure and the depth rule (Topic 8.2)"
  - "Kinetic and gravitational potential energy (Unit 3) and horizontal projectile motion (Topic 1.5)"
prerequisiteResources: ["mb-ap-phys1-8.4-study-guide"]
learningObjectives:
  - "Use the continuity equation and the volume flow rate to compare speeds and find filling times"
  - "Use Bernoulli's equation to find pressures at different speeds and heights"
  - "Predict how an exit speed changes when the water level changes"
  - "Derive a straight-line relationship from Torricelli's result and use plotted data to test it"
  - "Draw Bernoulli bar charts and use them, with Newton's second law, to evaluate a claim about pressure"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s², density of water 1000 kg/m³, 1 atm = 1.0 × 10⁵ Pa. Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-8.4-study-guide", "mb-ap-phys1-8.4-revision-notes", "mb-ap-phys1-8.4-checklist"]
next: "mb-ap-phys1-8.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every fluid is ideal and every pipe is full unless the question says otherwise."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 m/s², a density of 1000 kg/m³ for water and 1 atm = 1.0 × 10⁵ Pa. Treat every fluid as ideal (incompressible, no viscosity) and every pipe as completely full unless told otherwise. Round final answers to 2 significant figures unless told otherwise. Any scientific calculator is fine.

## Question 1 (multiple choice · foundation)

Water flows at speed v through a full pipe. Further along, the pipe's inner diameter is half as large. What is the water's speed in the narrower part?

- (A) v / 2
- (B) v
- (C) 2v
- (D) 4v

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Continuity: A₁v₁ = A₂v₂. Area is proportional to diameter squared, so halving the diameter makes the area one quarter. The speed must be four times larger to keep the same volume flow rate.

- (A) assumes a narrow pipe slows the water, as if it were "squeezed back". An incompressible fluid in a full pipe must speed up.
- (B) confuses equal **flow rate** with equal **speed**.
- (C) uses the diameter ratio instead of the area ratio.
</details>

## Question 2 (multiple choice · core)

Water flows steadily to the right through a horizontal pipe. Section X is wide, section Y is narrow and section Z is as wide as X. How do the pressures P_X, P_Y and P_Z compare?

- (A) P_X = P_Z > P_Y
- (B) P_Y > P_X = P_Z
- (C) P_X > P_Y > P_Z
- (D) P_X = P_Y = P_Z

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The water is fastest in Y (continuity). The pipe is level, so Bernoulli gives P + ½ρv² = constant: highest speed means lowest pressure. X and Z have the same area, so the same speed and the same pressure. In force terms, the water entering Y speeds up, so the pressure behind it (in X) must be higher than in Y.

- (B) is the "fast fluid pushes harder" misconception.
- (C) treats the pressure as steadily "used up" along the pipe. That happens in real viscous flow, but an ideal fluid loses no energy.
- (D) ignores the change in kinetic energy per volume.
</details>

## Question 3 (multiple choice · core)

A wide tank of water has a small hole in its side, open to the air. When the surface is 1.8 m above the hole, water leaves at about 5.9 m/s. Later the surface has fallen to 0.45 m above the hole. What is the exit speed now?

- (A) 5.9 m/s
- (B) 3.0 m/s
- (C) 1.5 m/s
- (D) 2.1 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** v = √(2gh), so v ∝ √h. The depth falls by a factor of 4 (1.8 ÷ 0.45), so the speed falls by a factor of √4 = 2: 5.94 ÷ 2 = 2.97 ≈ 3.0 m/s. Check directly: √(2 × 9.8 × 0.45) = 2.97 m/s.

- (A) assumes the speed depends on the hole, not on the water above it.
- (C) divides the speed by 4, as if v were proportional to h.
- (D) recalculates with v = √(gh), dropping the factor 2 that comes from ½ρv². √(9.8 × 0.45) = 2.1 m/s.
</details>

## Question 4 (calculation · core)

A gardener fills a pond with a hose. The water leaves the nozzle at 7.5 m/s. The nozzle's opening has area 1.2 × 10⁻⁴ m², and the hose itself has inner area 4.5 × 10⁻⁴ m².

(a) Calculate the volume flow rate and the mass flow rate.
(b) The pond needs 0.27 m³ of water. How long does it take to fill?
(c) Calculate the speed of the water inside the hose.

<details>
<summary>Worked solution</summary>

**(a)** V/t = Av = 1.2 × 10⁻⁴ × 7.5 = **9.0 × 10⁻⁴ m³/s**. Mass flow rate = ρAv = 1000 × 9.0 × 10⁻⁴ = **0.90 kg/s**.

**(b)** t = 0.27 ÷ 9.0 × 10⁻⁴ = **300 s** (5.0 minutes).

**(c)** Continuity: v_hose = 9.0 × 10⁻⁴ ÷ 4.5 × 10⁻⁴ = **2.0 m/s**.

Suggested mark points (4): 1 for V/t = Av with the nozzle values; 1 for the mass flow rate with unit; 1 for the time; 1 for the hose speed from equal flow rates.

Common error: using the hose area with the nozzle speed. Each speed belongs with its own area.
</details>

## Question 5 (calculation · core)

Water enters a building through a pipe at ground level, where the absolute pressure is 3.0 × 10⁵ Pa and the speed is 1.0 m/s. A pipe to a second-floor bathroom is 5.0 m higher and has half the cross-sectional area.

(a) Find the water's speed in the second-floor pipe.
(b) Find the absolute pressure in the second-floor pipe.
(c) Estimate the greatest height above the ground-level pipe at which an open tap could still deliver water, if the water there is almost at rest.

<details>
<summary>Worked solution</summary>

**(a)** Continuity: half the area means twice the speed, v₂ = **2.0 m/s**.

**(b)** Take y = 0 at ground level. Bernoulli:

P₂ = P₁ − ρg(y₂ − y₁) − ½ρ(v₂² − v₁²)
= 3.0 × 10⁵ − (1000)(9.8)(5.0) − ½(1000)(4.0 − 1.0)
= 3.0 × 10⁵ − 49 000 − 1500 = 249 500 Pa ≈ **2.5 × 10⁵ Pa**.

Most of the pressure drop comes from the height, not the speed change.

**(c)** At the highest working tap, the water just reaches atmospheric pressure with v ≈ 0:

P₁ + ½ρv₁² = P_atm + ρgy, so y = (3.0 × 10⁵ + 500 − 1.0 × 10⁵) ÷ (1000 × 9.8) = **20 m**.

Suggested mark points (5): 1 for v₂ = 2.0 m/s; 1 for including both the ρgy and ½ρv² changes; 1 for P₂ ≈ 2.5 × 10⁵ Pa; 1 for setting P = P_atm and v ≈ 0 at the top tap; 1 for y ≈ 20 m.

A student who ignores the small ½ρv₁² term in (c) also gets 20 m (20.4 m), and earns full credit.
</details>

## Question 6 (experiment and graph · stretch)

A student tests Torricelli's result. A small hole in the side of a wide container is H = 0.20 m above a bench. The student keeps the water surface at a height h above the hole, and measures the horizontal distance R from the hole to where the jet lands on the bench.

| h (m) | 0.10 | 0.20 | 0.30 | 0.40 | 0.50 |
|---|---|---|---|---|---|
| R (m) | 0.274 | 0.388 | 0.476 | 0.548 | 0.614 |

(a) Describe how the student should take each measurement so that the results are reliable.
(b) Starting from v = √(2gh) and projectile motion, show that R² = 4Hh.
(c) State what to plot to get a straight line, and find its slope from the data.
(d) Compare the slope with the prediction, and suggest a physical reason for any difference.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Any sensible procedure, for example: keep h constant during each reading (top up the container, or use a wide container and read quickly); measure h from the hole's centre to the surface with a ruler at eye level; mark where the jet lands and measure R along the bench from directly below the hole; repeat each R several times and average.

**(b)** The jet leaves horizontally at v = √(2gh). Fall time from height H: H = ½gt², so t = √(2H/g). Range: R = vt = √(2gh) × √(2H/g) = √(4Hh). Squaring: **R² = 4Hh**.

**(c)** Plot **R² against h**. Processed data:

| h (m) | 0.10 | 0.20 | 0.30 | 0.40 | 0.50 |
|---|---|---|---|---|---|
| R² (m²) | 0.0751 | 0.151 | 0.227 | 0.300 | 0.377 |

The points lie on a straight line through the origin. Slope ≈ (0.377 − 0.0751) ÷ (0.50 − 0.10) = **0.75 m** (a best-fit line gives 0.754 m).

**(d)** Predicted slope = 4H = 4 × 0.20 = 0.80 m. The measured slope is about 6% lower, so the measured speeds are about 3% below √(2gh). The **straight line through the origin supports** the form of Torricelli's result. The smaller slope is reasonable for a real fluid: water has some viscosity, so a little mechanical energy becomes thermal energy as it passes through the hole, and air resistance slows the jet slightly. (A slope well **above** 0.80 m would suggest a measurement error, since an ideal fluid sets the upper limit.)

| Point | What earns it |
|---|---|
| 1 | A procedure that keeps h steady and measures R repeatably |
| 1 | Correct fall time √(2H/g) combined with v = √(2gh) |
| 1 | R² = 4Hh shown clearly |
| 1 | Plots R² against h (or v² against h with v = R ÷ t) and finds slope ≈ 0.75 m |
| 1 | Compares with 0.80 m and gives a valid physical reason (viscosity at the hole, air resistance on the jet) |

**Alternative.** Converting each R to a speed with t = √(2H/g) = 0.202 s and plotting v² against h gives a slope of about 18 m/s², compared with the predicted 2g = 19.6 m/s². This earns full credit.
</details>

## Question 7 (constructed response · stretch)

Water flows steadily to the right through a horizontal pipe. In section 1 the area is 3.0 × 10⁻⁴ m², the speed is 0.80 m/s and the gauge pressure is 6000 Pa. Section 2 has area 1.0 × 10⁻⁴ m².

(a) Calculate the speed in section 2.
(b) Calculate the gauge pressure in section 2.
(c) Sketch Bernoulli bar charts for sections 1 and 2 (bars for P, ρgy and ½ρv², with y = 0 on the pipe's axis), with values.
(d) A student claims: "The water in section 2 is moving faster, so it must push harder on the pipe walls. The pressure in section 2 is higher." Evaluate the claim using **both** Newton's second law and conservation of energy.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** v₂ = (3.0 / 1.0) × 0.80 = **2.4 m/s**.

**(b)** P₂ = P₁ − ½ρ(v₂² − v₁²) = 6000 − 500 × (5.76 − 0.64) = 6000 − 2560 = **3.4 × 10³ Pa** (3440 Pa gauge).

**(c)**

| Section | P (gauge) | ρgy | ½ρv² | Total |
|---|---|---|---|---|
| 1 | 6000 | 0 | 320 | 6320 J/m³ |
| 2 | 3440 | 0 | 2880 | 6320 J/m³ |

The P bar shrinks and the ½ρv² bar grows by the same amount, 2560 J/m³.

**(d)** The claim is **incorrect**. *Newton's second law:* water entering section 2 speeds up, so the net force on it points forward (to the right). The only horizontal forces are pressure forces, so the pressure behind it (section 1) must be greater than the pressure ahead (section 2). *Energy:* for an ideal fluid in a level pipe, P + ½ρv² is constant. A larger ½ρv² must be matched by a smaller P. Both arguments give P₂ < P₁. The student confuses the fluid's speed with the push it exerts on the walls.

| Point | What earns it |
|---|---|
| 1 | v₂ = 2.4 m/s |
| 1 | P₂ ≈ 3.4 × 10³ Pa gauge |
| 1 | Bar charts with equal totals and correct relative bar sizes |
| 1 | Newton's second law argument: speeding up needs higher pressure behind |
| 1 | Energy argument: larger ½ρv² means smaller P, so the claim is rejected |
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read the continuity section and Figure 1 in the [study guide](/advanced-course-resources/physics-1/8-4-fluids-conservation-laws-study-guide/). Square the diameter ratio.
- **Q2 or Q7 wrong:** revisit Worked example 2 and the "level pipe" check. Faster means lower pressure.
- **Q3 wrong:** go back to Torricelli's result: v ∝ √h.
- **Q5 incomplete:** make sure every Bernoulli equation has all three terms at both points.
- **Q6 incomplete:** see Worked example 3 and "Designing an experiment".

Then tick off the [topic checklist](/advanced-course-resources/physics-1/8-4-fluids-conservation-laws-checklist/).
