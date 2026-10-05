---
resourceId: "mb-ap-phys2-14.8-practice"
title: "Double-Slit Interference and Diffraction Gratings: Practice Questions (Physics 2 14.8)"
description: "Seven original Marlbridge practice questions on double-slit fringes, path difference, gratings, white-light spectra, graphing data and the diffraction envelope, with full solutions."
course: "physics-2"
unit: 14
topics: ["14.8"]
resourceType: "practice-questions"
prerequisites:
  - "Using d sin θ = mλ and y_max = mλL/d"
  - "Single-slit diffraction from Topic 14.7"
prerequisiteResources: ["mb-ap-phys2-14.8-study-guide"]
learningObjectives:
  - "Use path difference to identify bright and dark fringes"
  - "Predict factor changes in fringe spacing"
  - "Find wavelengths and orders for a diffraction grating at large angles"
  - "Analyse double-slit data with a straight-line graph and plan the measurement"
  - "Interpret fringes inside a single-slit envelope"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "1 nm = 10⁻⁹ m, 1 mm = 10⁻³ m. For N lines per millimetre, d = (1/N) mm. Use the small-angle form only when θ is under about 10°. Give answers to 3 significant figures unless the data justify fewer"
related: ["mb-ap-phys2-14.8-study-guide", "mb-ap-phys2-14.8-revision-notes", "mb-ap-phys2-14.8-checklist"]
next: "mb-ap-phys2-14.8-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "For two slits or a grating, d sin θ = mλ gives the bright fringes."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: the light is monochromatic unless stated; d is the slit separation (or grating spacing), a the width of one slit, L the slit-to-screen distance and y the distance from the middle of the central bright fringe; bright fringes are at d sin θ = mλ, and for θ under about 10°, y_max = mλL/d. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

Monochromatic light passes through two narrow slits onto a distant screen. Which observation is the strongest evidence that light behaves as a wave?

- (A) There are dark fringes at places that receive light from both slits.
- (B) There is a bright line on the screen directly behind each slit.
- (C) The light travels from the slits to the screen in straight lines.
- (D) The pattern becomes brighter when a more powerful laser is used.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** At a dark fringe, light arrives from both slits but the total is darkness. Waves can do this: they arrive half a wavelength out of step and cancel. Two streams of particles cannot add up to nothing.

- (B) is what a simple particle model predicts. It is not what is seen with narrow, closely spaced slits.
- (C) is not observed: each slit spreads the light by diffraction. Straight-line travel would not explain the fringes anyway.
- (D) is true but tells you nothing about waves or particles; more energy arrives either way.
</details>

## Question 2 (multiple choice · core)

In a double-slit pattern, what is the path length difference between the two waves at the **second** dark fringe from the centre?

- (A) 2λ
- (B) 1.5λ
- (C) 2.5λ
- (D) 0.5λ

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Dark fringes need a half-odd number of wavelengths: 0.5λ, 1.5λ, 2.5λ, … The first dark fringe is at 0.5λ, so the second is at 1.5λ.

- (A) is the second **bright** fringe (m = 2), where the waves arrive in step.
- (C) puts m = 2 into (m + ½)λ, but that formula counts from m = 0, so m = 2 is the third dark fringe.
- (D) is the first dark fringe, next to the central maximum.
</details>

## Question 3 (multiple choice · core)

In a double-slit experiment, the slit separation is halved and the screen is moved from 1.20 m to 1.80 m from the slits. The wavelength is unchanged. By what factor does the fringe spacing change?

- (A) 3
- (B) 0.75
- (C) 1/3
- (D) 1.5

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Spacing = λL/d. L is multiplied by 1.80 ÷ 1.20 = 1.5 and d by 0.5, so the spacing is multiplied by 1.5 ÷ 0.5 = 3.

- (B) multiplies by 0.5 instead of dividing, as if the spacing were proportional to d.
- (C) inverts both factors.
- (D) includes only the change in L and ignores the change in d.
</details>

## Question 4 (multiple choice · core)

White light falls on a diffraction grating. Which statement describes the pattern correctly?

- (A) The central maximum is white, and in each spectrum red light is farther from the centre than violet light.
- (B) The central maximum is a full spectrum, with red at the middle.
- (C) In each spectrum violet light is farthest from the centre, because it has the highest frequency.
- (D) All colours appear together at each order, because the grating spacing is the same for every colour.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** At θ = 0 every wavelength has zero path difference, so all colours are bright together and the centre is white. For m ≥ 1, sin θ = mλ/d, so the longest wavelength (red) goes to the largest angle.

- (B) confuses the central maximum with the higher orders. There is no path difference at the centre to separate the colours.
- (C) carries over the prism order (violet bent most by refraction). For a grating, the angle grows with wavelength, not frequency.
- (D) forgets that θ depends on λ as well as d.
</details>

## Question 5 (calculation · core)

A laser beam shines straight onto a grating with 300 lines/mm. On a screen 1.10 m from the grating, each first-order spot is 0.184 m from the central spot. (a) Find the angle of the first-order spots. (b) Find the wavelength of the laser. (c) Find how far from the central spot the second-order spots appear, and show that the small-angle form would give the wrong answer. (d) What is the highest order the grating can produce for this light?

<details>
<summary>Worked solution</summary>

1. d = (1/300) mm = 3.33 × 10⁻⁶ m.
2. (a) tan θ₁ = 0.184 ÷ 1.10, so θ₁ = **9.50°**.
3. (b) λ = d sin θ₁ = (3.333 × 10⁻⁶ m)(sin 9.50°) = **5.50 × 10⁻⁷ m** (550 nm).
4. (c) sin θ₂ = 2λ/d = 0.330, so θ₂ = 19.3°. y₂ = L tan θ₂ = 1.10 × tan 19.27° = **0.384 m**. The small-angle form gives y₂ = 2λL/d = 0.363 m, about 6% too small, because θ₂ is well above 10°.
5. (d) m ≤ d/λ = 3.333 × 10⁻⁶ ÷ 5.50 × 10⁻⁷ = 6.06, so the highest order is **m = 6** (at 81.8°, so it would not land on a flat screen of any practical size).

Suggested mark points (5): 1 for d = 3.33 × 10⁻⁶ m; 1 for θ₁ = 9.50° from tan θ = y/L; 1 for λ = 550 nm; 1 for y₂ = 0.384 m with a comparison to 0.363 m; 1 for m = 6 from d/λ. For (b), accept 550–558 nm: the small-angle estimate λ = dy/(mL) gives 558 nm, about 1.4% high, because θ₁ is close to 10°.

Common error: taking d = 300 m or 1/300 m. The grating has 300 lines in each millimetre.
</details>

## Question 6 (constructed response · core)

A student wants to find the separation d of a pair of slits. She uses a laser of wavelength 520 nm. For each screen distance L she measures y₂, the distance from the central bright fringe to the second-order bright fringe:

| L (m) | 0.80 | 1.20 | 1.60 | 2.00 | 2.40 |
|---|---|---|---|---|---|
| y₂ (mm) | 2.1 | 3.0 | 4.2 | 5.3 | 6.2 |

(a) The fringes are only about 1–3 mm apart. Describe how she should measure y₂ to reduce the uncertainty.
(b) Describe the graph she should plot, including suitable axes and scales, and state what the gradient represents.
(c) Use the data to find d.
(d) Predict y₂ for L = 3.00 m.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Measure the distance between the m = −2 and m = +2 bright fringes (on opposite sides of the centre) and halve it. A longer distance has a smaller percentage uncertainty, and it avoids having to judge exactly where the centre of the central fringe is. Measure to the centres of the fringes, mark them on paper on the screen, and repeat each reading.

**(b)** Plot y₂ (vertical, in mm, from 0 to 7 mm) against L (horizontal, in m, from 0 to 2.5 m). Use scales that make the points fill most of the grid. From y₂ = 2λL/d, the line should pass through the origin with **gradient 2λ/d**.

**(c)** A best-fit line gives a gradient of about 2.6 × 10⁻³ (2.63 mm per metre). Then d = 2λ ÷ gradient = 2(5.20 × 10⁻⁷ m) ÷ (2.63 × 10⁻³) = 3.95 × 10⁻⁴ m ≈ **0.40 mm**.

**(d)** y₂ = gradient × L = (2.63 × 10⁻³)(3.00 m) = 7.9 × 10⁻³ m ≈ **7.9 mm**.

| Point | What earns it |
|---|---|
| 1 | Measures across several fringes (for example from m = −2 to m = +2) and divides, with a reason (smaller percentage uncertainty) |
| 1 | Axes: y₂ against L, labelled with units, with sensible linear scales starting at zero |
| 1 | Gradient identified as 2λ/d (or y₂ ∝ L) |
| 1 | Gradient found from a best-fit line using points far apart (2.5–2.7 mm per metre) |
| 1 | d = 0.40 mm (accept 0.39–0.42 mm), with units |
| 1 | y₂ ≈ 7.9 mm at 3.00 m (accept 7.6–8.1 mm), from the gradient or by proportion |

Do not award the gradient point for a value taken from a single data point. Accept a graph of y₂ against L with gradient λ/(d/2), if the student then finds d correctly.
</details>

## Question 7 (constructed response · stretch)

A double-slit pattern is made with light of wavelength 600 nm on a screen 2.00 m from the slits. The bright fringes are 4.0 mm apart. They fade away from the centre and vanish completely at 12.0 mm on each side, so the central band of the envelope is 24.0 mm wide.

(a) Find the slit separation d.
(b) Find the width a of each slit.
(c) How many bright fringes can be seen inside the central band of the envelope? Explain why the fringes at ±12.0 mm are missing.
(d) One slit is now covered. Describe the new pattern.
(e) The double slit is replaced by a grating with the same slit separation d. Compare the new pattern with the double-slit pattern.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Fringe spacing = λL/d, so d = λL ÷ spacing = (6.00 × 10⁻⁷ m)(2.00 m) ÷ (4.0 × 10⁻³ m) = **3.0 × 10⁻⁴ m** (0.30 mm).

**(b)** The envelope's first minimum is at y = λL/a = 12.0 mm, so a = (6.00 × 10⁻⁷)(2.00) ÷ (1.20 × 10⁻²) = **1.0 × 10⁻⁴ m** (0.10 mm).

**(c)** 12.0 mm is 3 fringe spacings (d/a = 3), so the third-order fringes would sit exactly at the envelope minima. There, each slit on its own sends no light, so there is nothing to interfere and the fringe is missing. Inside the central band: m = 0, ±1, ±2, which is **5 bright fringes**.

**(d)** With one slit there is no second wave to interfere with, so the fringes disappear. The screen shows the single-slit pattern of that slit: a central band 24.0 mm wide, with dimmer side bands. It is less bright overall, because only one slit lets light through.

**(e)** The maxima stay at the **same positions** (every 4.0 mm for small angles), because d sin θ = mλ still holds. With many slits, each maximum becomes much **narrower and brighter**, with wide dark regions between them.

| Point | What earns it |
|---|---|
| 1 | d = 0.30 mm from spacing = λL/d |
| 1 | a = 0.10 mm, using the envelope minimum at 12.0 mm (or the 24.0 mm width = 2λL/a) |
| 1 | Missing fringes explained: the envelope is zero there because each slit alone sends no light |
| 1 | 5 bright fringes inside the central band |
| 1 | One slit covered: fringes vanish, single-slit pattern remains, dimmer |
| 1 | Grating: same positions, narrower and brighter maxima |

Accept the count in (c) from d/a = 3 without screen distances. Do not award the (d) point for "the pattern disappears".
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "Two slits, one light source" and "Path difference decides bright or dark" in the [study guide](/advanced-course-resources/physics-2/14-8-double-slit-interference-diffraction-gratings-study-guide/).
- **Q3 or Q6 wrong:** revisit "The small-angle form" and "Planning a measurement".
- **Q4 or Q5 wrong:** work through Worked example 2 and Figure 3 again.
- **Q7 incomplete:** redo Worked example 1 and study Figure 2.

Then tick off the [topic checklist](/advanced-course-resources/physics-2/14-8-double-slit-interference-diffraction-gratings-checklist/).
