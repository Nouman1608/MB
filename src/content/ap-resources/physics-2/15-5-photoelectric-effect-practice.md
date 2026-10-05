---
resourceId: "mb-ap-phys2-15.5-practice"
title: "The Photoelectric Effect: Practice Questions (Physics 2 15.5)"
description: "Seven original Marlbridge practice questions on threshold frequency, K_max = hf − φ, stopping potential, intensity and graphing photoelectric data, with full solutions."
course: "physics-2"
unit: 15
topics: ["15.5"]
resourceType: "practice-questions"
prerequisites:
  - "Using E = hf = hc/λ and K_max = hf − φ"
prerequisiteResources: ["mb-ap-phys2-15.5-study-guide"]
learningObjectives:
  - "Decide whether light of a given frequency or wavelength ejects electrons"
  - "Calculate K_max, stopping potential and photon rates"
  - "Design a stopping-potential experiment and analyse its data with a graph"
  - "Explain the effects of intensity and frequency using the photon model"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "h = 6.63 × 10⁻³⁴ J·s = 4.14 × 10⁻¹⁵ eV·s, c = 3.00 × 10⁸ m/s, hc = 1240 eV·nm, e = 1.60 × 10⁻¹⁹ C, 1 eV = 1.60 × 10⁻¹⁹ J. Give answers to 3 significant figures unless the data justify fewer"
related: ["mb-ap-phys2-15.5-study-guide", "mb-ap-phys2-15.5-revision-notes", "mb-ap-phys2-15.5-checklist"]
next: "mb-ap-phys2-15.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "All metals and data are fictional; work functions are given."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: h = 6.63 × 10⁻³⁴ J·s = 4.14 × 10⁻¹⁵ eV·s; c = 3.00 × 10⁸ m/s; hc = 1240 eV·nm; e = 1.60 × 10⁻¹⁹ C; 1 eV = 1.60 × 10⁻¹⁹ J. All metals and measurements are invented for practice. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

Monochromatic light above the threshold frequency falls on a metal plate, and electrons are emitted. The intensity of the light is increased, while its frequency stays the same. Which of the following describes the result?

- (A) More electrons are emitted per second, and their maximum kinetic energy is unchanged.
- (B) The same number of electrons are emitted per second, and their maximum kinetic energy increases.
- (C) More electrons are emitted per second, and their maximum kinetic energy increases.
- (D) The threshold frequency of the metal decreases.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** At a fixed frequency, higher intensity means more photons per second, each with the same energy hf. More photons free more electrons per second, but each electron still gets hf, so K_max = hf − φ is unchanged.

- (B) is the wave-model prediction (more energy per electron from a bigger amplitude). Experiments do not show it.
- (C) gets the number right but wrongly links K_max to brightness.
- (D) is wrong because f₀ = φ/h depends only on the material, not on the light.
</details>

## Question 2 (multiple choice · core)

Light of wavelength 400 nm falls on a metal with a work function of 2.25 eV. What is the stopping potential?

- (A) 0.85 V
- (B) 3.10 V
- (C) 5.35 V
- (D) 2.25 V

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** E = 1240 eV·nm ÷ 400 nm = 3.10 eV. K_max = 3.10 eV − 2.25 eV = 0.85 eV. Since eV_s = K_max, V_s = 0.85 V.

- (B) is the photon energy in eV written as a voltage. It forgets that φ is used up freeing the electron.
- (C) adds the work function instead of subtracting it.
- (D) is the work function written as a voltage. The stopping potential measures what is left over, not what was needed to escape.
</details>

## Question 3 (multiple choice · core)

A student plots K_max against frequency for two metals, P and Q. Both graphs are straight lines. Line P crosses the frequency axis at 5.0 × 10¹⁴ Hz and line Q crosses it at 7.0 × 10¹⁴ Hz. Which statement is correct?

- (A) Metal Q has the larger work function, and the two lines are parallel.
- (B) Metal P has the larger work function, and the two lines are parallel.
- (C) Metal Q has the larger work function, and line Q is steeper.
- (D) The two metals have the same work function, because both lines have slope h.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The horizontal intercept is f₀ = φ/h, so the larger f₀ means the larger work function: φ_Q = (4.14 × 10⁻¹⁵ eV·s)(7.0 × 10¹⁴ Hz) = 2.90 eV and φ_P = 2.07 eV. Every line has slope h, so they are parallel.

- (B) reverses the link between f₀ and φ.
- (C) thinks the slope depends on the metal. The slope is Planck's constant for every material.
- (D) confuses the slope (the same) with the intercept (different).
</details>

## Question 4 (multiple choice · core)

A metal has a work function of 3.60 eV. Light of which wavelength will **not** eject electrons from it?

- (A) 250 nm
- (B) 300 nm
- (C) 340 nm
- (D) 420 nm

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The threshold wavelength is λ₀ = 1240 eV·nm ÷ 3.60 eV = 344 nm. Light with a longer wavelength has photons with too little energy. At 420 nm, E = 1240 ÷ 420 = 2.95 eV, which is less than 3.60 eV.

- (A) gives 4.96 eV, well above φ.
- (B) gives 4.13 eV, above φ.
- (C) gives 3.65 eV, just above φ. Students who think "near the threshold means no emission" pick this, but any photon energy at or above φ works.
</details>

## Question 5 (calculation · core)

A laser of wavelength 405 nm and power 1.5 mW shines on a metal with a work function of 2.40 eV. All the light hits the metal.

(a) Calculate the energy of one photon, in joules and in electron volts.
(b) Calculate the maximum kinetic energy of the emitted electrons, in joules.
(c) Calculate the number of photons that hit the metal each second.
(d) The laser is replaced by one of the same wavelength and power 3.0 mW. By what factor does each of the following change: the number of photons per second, and K_max?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

1. (a) E = hc/λ = (6.63 × 10⁻³⁴ J·s)(3.00 × 10⁸ m/s) ÷ (405 × 10⁻⁹ m) = **4.91 × 10⁻¹⁹ J**. In eV: 4.911 × 10⁻¹⁹ ÷ 1.60 × 10⁻¹⁹ = **3.07 eV**. (Using hc = 1240 eV·nm gives 3.06 eV; accept either.)
2. (b) K_max = 3.069 eV − 2.40 eV = 0.669 eV = 0.669 × 1.60 × 10⁻¹⁹ J = **1.07 × 10⁻¹⁹ J**.
3. (c) Photons per second = power ÷ energy per photon = (1.5 × 10⁻³ J/s) ÷ (4.911 × 10⁻¹⁹ J) = **3.05 × 10¹⁵ photons per second**.
4. (d) Twice the power at the same wavelength means twice as many photons per second, each with the same energy: the photon rate changes by a **factor of 2** (to 6.11 × 10¹⁵ per second), and K_max changes by a **factor of 1** (no change).

| Point | What earns it |
|---|---|
| 1 | Photon energy 4.91 × 10⁻¹⁹ J and 3.07 eV (or 3.06 eV) |
| 1 | K_max = 1.07 × 10⁻¹⁹ J, subtracting φ in consistent units |
| 1 | Photon rate 3.05 × 10¹⁵ s⁻¹ from P ÷ E |
| 1 | Photon rate doubles **and** K_max unchanged, with a reason linked to energy per photon |

Common error: in (b), subtracting 2.40 from 4.91 × 10⁻¹⁹ directly. Convert one value first.
</details>

## Question 6 (constructed response · core)

You are asked to design an experiment to find the work function of a metal sample and to test the value of Planck's constant. You have: an evacuated tube containing the metal sample as one plate and a second metal plate; a variable source of potential difference; an ideal voltmeter; a sensitive ammeter; wires; and five light sources, each of a different, known single frequency, all above the threshold frequency.

(a) Describe a procedure. Say what you would measure and how you would make the measurements reliable.
(b) State what you would plot on each axis to get a straight line.
(c) Explain how you would use the graph to find the work function and Planck's constant.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Connect the source so that the second plate (collector) is at a lower potential than the metal sample. Shine one light source on the sample. Increase the potential difference slowly from zero until the ammeter reads zero, and record the voltmeter reading as the stopping potential V_s. Repeat for each light source. Reliability: repeat each reading several times and average; approach the zero-current point slowly; keep the same sample and the same position of the light source throughout.

**(b)** Plot V_s on the vertical axis against frequency f on the horizontal axis. (K_max = eV_s against f is equally good.)

**(c)** Draw a best-fit line. From eV_s = hf − φ, V_s = (h/e)f − φ/e. The slope equals h/e, so h = e × slope. Extend the line to f = 0: the vertical intercept is −φ/e, so φ = −e × intercept (or, in eV, φ equals the size of the intercept in volts). Alternatively find f₀ from the horizontal intercept and use φ = hf₀.

| Point | What earns it |
|---|---|
| 1 | Collector made negative relative to the emitter, and V_s found as the potential difference at which the current just becomes zero |
| 1 | Repeat for several frequencies, with one valid reliability step (repeats, slow approach to zero current, fixed set-up) |
| 1 | Axes: V_s (or K_max) against f |
| 1 | Planck's constant from slope × e (or slope directly if K_max is in J) |
| 1 | Work function from the vertical intercept, or from φ = hf₀ using the horizontal intercept |

Do not award the first point for "measure the speed of the electrons" with no method. Changing the intensity is not a valid way to vary K_max.
</details>

## Question 7 (constructed response · stretch)

A student shines four filtered light sources on a fictional metal and measures the stopping potential for each.

| λ (nm) | 365 | 405 | 436 | 546 |
|---|---|---|---|---|
| V_s (V) | 1.45 | 1.10 | 0.90 | 0.32 |

(a) Calculate the frequency for each wavelength and plot V_s against f. Draw a best-fit line.
(b) Use your line to find Planck's constant and the work function of the metal.
(c) Find the threshold wavelength of the metal.
(d) The student says: "Red light of 680 nm gives no current at all, but a very bright 680 nm lamp would." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f = c/λ: 8.22, 7.41, 6.88 and 5.49 (all × 10¹⁴ Hz). The four points lie close to a straight line. Sensible scales: f from 0 to 9 × 10¹⁴ Hz and V_s from −2.0 V to 1.5 V, so the line can be extended to f = 0.

**(b)** A least-squares line has slope 4.13 × 10⁻¹⁵ V/Hz and vertical intercept −1.95 V. So h = e × slope = (1.60 × 10⁻¹⁹)(4.13 × 10⁻¹⁵) = **6.61 × 10⁻³⁴ J·s**, and **φ = 1.95 eV**. A hand-drawn line will give slightly different values; anything from about 6.5 × 10⁻³⁴ to 6.8 × 10⁻³⁴ J·s and 1.9 to 2.0 eV is consistent with these data.

**(c)** The horizontal intercept is f₀ = 1.95 ÷ (4.13 × 10⁻¹⁵) = 4.72 × 10¹⁴ Hz, so λ₀ = c/f₀ = 636 nm. (Using λ₀ = 1240 ÷ 1.95 = 636 nm gives the same.)

**(d)** The claim is wrong. A 680 nm photon has E = 1240 ÷ 680 = 1.82 eV, which is less than φ = 1.95 eV (680 nm is longer than λ₀ = 636 nm). Each electron can absorb only one photon, so no single photon can free an electron. A brighter lamp sends more photons per second but does not change the energy of each, so there is still no emission.

| Point | What earns it |
|---|---|
| 1 | All four frequencies correct and plotted with labelled axes, units and sensible scales |
| 1 | Best-fit straight line (not joining dots) extended towards f = 0 |
| 1 | h from slope × e, in the range 6.5–6.8 × 10⁻³⁴ J·s |
| 1 | φ from the vertical intercept (or hf₀), in the range 1.9–2.0 eV |
| 1 | λ₀ ≈ 636 nm (consistent with the student's own φ) |
| 1 | Rejects the claim: photon energy below φ **and** intensity changes photon number, not photon energy |

Carry forward the student's own values of h and φ into (c) and (d).
</details>

## How did you do?

- **Q1 or Q7(d) wrong:** re-read "The photon explanation" in the [study guide](/advanced-course-resources/physics-2/15-5-photoelectric-effect-study-guide/), especially the point about intensity.
- **Q2, Q4 or Q5 wrong:** redo Worked example 1, watching your units.
- **Q3 wrong:** revisit "The K_max–frequency graph".
- **Q6 or Q7 incomplete:** work through "Measuring K_max: the stopping potential" and Worked example 2.

Then tick off the [topic checklist](/advanced-course-resources/physics-2/15-5-photoelectric-effect-checklist/).
