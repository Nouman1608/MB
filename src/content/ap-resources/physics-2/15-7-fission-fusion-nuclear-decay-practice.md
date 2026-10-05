---
resourceId: "mb-ap-phys2-15.7-practice"
title: "Fission, Fusion and Nuclear Decay: Practice Questions (Physics 2 15.7)"
description: "Seven original Marlbridge practice questions on balancing nuclear reactions, E = mc², half-life, decay data and momentum in fission, with full solutions and suggested mark points."
course: "physics-2"
unit: 15
topics: ["15.7"]
resourceType: "practice-questions"
prerequisites:
  - "Balancing nucleon number and charge, and using λ = ln 2 / t½"
prerequisiteResources: ["mb-ap-phys2-15.7-study-guide"]
learningObjectives:
  - "Find a missing product using conservation of nucleon number and charge"
  - "Calculate energy released from a mass change"
  - "Use half-life, the decay constant and N = N₀e^(−λt) to find amounts and times"
  - "Design a half-life measurement and find λ from a linearised graph"
  - "Use momentum conservation to share the energy released in fission"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "c = 3.00 × 10⁸ m/s, 1 eV = 1.60 × 10⁻¹⁹ J, 1 u = 1.66 × 10⁻²⁷ kg = 931 MeV/c². Give answers to 3 significant figures unless the data justify fewer"
related: ["mb-ap-phys2-15.7-study-guide", "mb-ap-phys2-15.7-revision-notes", "mb-ap-phys2-15.7-checklist"]
next: "mb-ap-phys2-15.7-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2", "exam-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Balance A and Z first; then think about energy and momentum."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data for every question: c = 3.00 × 10⁸ m/s; 1 eV = 1.60 × 10⁻¹⁹ J; 1 u = 1.66 × 10⁻²⁷ kg = 931 MeV/c²; λ = ln 2 / t½; N = N₀e^(−λt). Data in Questions 5–7 are invented for practice. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

A uranium-235 nucleus absorbs a neutron and splits:

¹₀n + ²³⁵₉₂U → ⁹⁴₃₈Sr + ¹⁴⁰₅₄Xe + x ¹₀n

What is x?

- (A) 1
- (B) 2
- (C) 3
- (D) 0

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Nucleon number on the left is 1 + 235 = 236. On the right, 94 + 140 + x = 236, so x = 2. Charge check: 92 = 38 + 54, and neutrons carry no charge.

- (A) forgets to count the incoming neutron on the left: 235 − 234 = 1.
- (C) copies the 3 neutrons from the barium–krypton fission. Different fissions give different numbers of neutrons.
- (D) checks only charge (92 = 38 + 54) and forgets that nucleon number must balance as well.
</details>

## Question 2 (multiple choice · core)

The background-corrected count rate from a radioactive source falls from 6400 counts per minute to 400 counts per minute in 36 minutes. What is the half-life?

- (A) 9.0 min
- (B) 2.25 min
- (C) 12 min
- (D) 4.5 min

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** 6400 ÷ 400 = 16 = 2⁴, so 4 half-lives have passed. t½ = 36 min ÷ 4 = 9.0 min.

- (B) divides the time by 16, treating the factor by which the rate fell as the number of half-lives.
- (C) counts only 3 halvings (6400 → 3200 → 1600 → 800 → 400 is four steps).
- (D) divides by 8, as if a fall to 1/16 took 8 half-lives.
</details>

## Question 3 (multiple choice · core)

A sample contains just 4 undecayed nuclei of an isotope with a half-life of 1.0 min. Which statement is correct?

- (A) After 1.0 min, exactly 2 nuclei will remain.
- (B) Each nucleus has a 50% chance of decaying within the next 1.0 min, so after 1.0 min any number from 0 to 4 could remain.
- (C) The nucleus that has existed longest will decay first.
- (D) After 2.0 min, all 4 nuclei will have decayed.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The half-life describes a probability for each nucleus. With only 4 nuclei, chance matters a lot: 2 is the most likely number left, but 0, 1, 3 or 4 are all possible.

- (A) treats a prediction for large samples as exact. It is only the expected value.
- (C) gives nuclei a memory. Every undecayed nucleus has the same chance, whatever its age.
- (D) thinks two half-lives remove everything. The expected number left after 2.0 min is 1.
</details>

## Question 4 (multiple choice · core)

In a nuclear reaction the total rest mass decreases by 3.0 × 10⁻³⁰ kg. How much energy is released?

- (A) 2.7 × 10⁻¹³ J
- (B) 9.0 × 10⁻²² J
- (C) 1.35 × 10⁻¹³ J
- (D) 0 J, because mass is conserved

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** E = Δm c² = (3.0 × 10⁻³⁰ kg)(3.00 × 10⁸ m/s)² = 2.7 × 10⁻¹³ J, which is about 1.7 MeV.

- (B) multiplies by c instead of c².
- (C) uses ½Δm c², mixing the rest-energy formula with the kinetic-energy formula.
- (D) is wrong because mass is not conserved in a nuclear reaction; nucleon number is. The mass decrease is the source of the energy.
</details>

## Question 5 (calculation · core)

An isotope used to trace a chemical has a half-life of 2.5 days. A sample starts with 3.2 × 10¹⁰ undecayed nuclei.

(a) Calculate the decay constant in s⁻¹.
(b) Calculate the number of undecayed nuclei after 10 days.
(c) Calculate how long it takes for 90% of the nuclei to decay.

<details>
<summary>Worked solution</summary>

1. (a) λ = ln 2 / t½ = 0.693 / 2.5 days = 0.2773 day⁻¹. One day is 86 400 s, so λ = 0.2773 ÷ 86 400 = **3.21 × 10⁻⁶ s⁻¹**.
2. (b) 10 days is 10/2.5 = 4 half-lives. N = 3.2 × 10¹⁰ × (½)⁴ = **2.0 × 10⁹**.
3. (c) If 90% decay, 10% remain: N/N₀ = 0.10. t = ln(N₀/N) / λ = ln 10 / 0.2773 day⁻¹ = **8.30 days**.

Suggested mark points (4): 1 for λ in day⁻¹ or h⁻¹; 1 for the correct conversion to 3.21 × 10⁻⁶ s⁻¹; 1 for N = 2.0 × 10⁹; 1 for t = 8.30 days. A method in seconds throughout (t = 7.17 × 10⁵ s) is equally valid.

Common error: using N/N₀ = 0.90 in (c). That gives the time for 10% to decay, not 90%. A quick check helps: 90% decay must take more than 3 half-lives (87.5%) and less than 4 (93.75%), so between 7.5 and 10 days.
</details>

## Question 6 (constructed response · core)

A student wants to measure the half-life of a short-lived source using a detector connected to a counter.

(a) Describe a procedure the student could follow. Include how to deal with background radiation.

The student records a background count rate of 24 counts per minute, then these readings with the source in place:

| Time t (min) | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Measured count rate (counts/min) | 986 | 625 | 409 | 262 | 178 | 117 |

(b) Calculate the corrected count rate R at each time and plot a graph of ln R against t, with labelled axes and a best-fit line.
(c) Use the graph to find the decay constant and the half-life.
(d) A second student forgets to subtract the background. State whether their half-life would be too large or too small, and explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** With the source far away, record counts for several minutes and find the background rate. Place the source at a fixed distance from the detector and keep that distance the same throughout. Record the count over a fixed interval at regular times (for example every minute). Subtract the background from each reading. Repeat the whole run, or use longer counting intervals, to reduce random variation.

**(b)** R = measured − 24: 962, 601, 385, 238, 154, 93 counts/min. ln R: 6.869, 6.399, 5.953, 5.472, 5.037, 4.533. Axes: ln R (no unit) against t (min). The points lie close to a straight line.

**(c)** Gradient of the best-fit line ≈ −0.464 min⁻¹ (between −0.45 and −0.48 is acceptable). Since ln R = ln R₀ − λt, the gradient is −λ, so λ ≈ 0.464 min⁻¹ and t½ = ln 2 / λ ≈ **1.5 min**. (Check: the corrected rate halves from 962 to 481 at roughly t = 1.5 min.)

**(d)** Too **large**. Background adds the same amount to every reading. That makes a bigger proportional difference to the later, smaller readings, so they fall more slowly in proportion. A fit to uncorrected data gives about 1.6 min.

| Point | What earns it |
|---|---|
| 1 | Measures background without the source and subtracts it from each reading |
| 1 | Keeps the source–detector distance fixed and records counts over equal intervals at regular times |
| 1 | Correct corrected rates and ln R values (allow small rounding) |
| 1 | Graph: labelled axes with units for t, sensible scale, points plotted, straight best-fit line |
| 1 | Gradient read from the line (not two data points far from it) and identified as −λ |
| 1 | t½ in the range 1.4–1.6 min from ln 2 / λ |
| 1 | (d) "Too large", with reasoning that a constant background is a bigger fraction of the later readings |

Accept a graph of R against t with the half-life read directly from the curve, if the halving is shown at two different starting points; withhold the gradient point in that case.
</details>

## Question 7 (constructed response · stretch)

A heavy nucleus with nucleon number 240, at rest, undergoes spontaneous fission into just two fragments, with nucleon numbers 144 and 96. The fragments share 180 MeV of kinetic energy. Take the mass of each fragment as A × 1.66 × 10⁻²⁷ kg.

(a) Explain why the two fragments move in opposite directions.
(b) Calculate the kinetic energy of each fragment.
(c) Calculate the speed of the lighter fragment.
(d) A student says: "Energy was released, so the fragments must have more mass than the original nucleus." Evaluate this claim, and find the change in mass.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The nucleus is at rest, so the total momentum is zero before the fission. No external force acts, so total momentum stays zero. The two fragments must have momenta that are **equal in size and opposite in direction**.

**(b)** With equal p, K = p²/2m is inversely proportional to mass. So K_light / K_heavy = 144/96 = 1.5. Sharing 180 MeV in the ratio 3 : 2 gives **K(96) = 108 MeV** and **K(144) = 72 MeV**.

**(c)** m = 96 × 1.66 × 10⁻²⁷ kg = 1.594 × 10⁻²⁵ kg. K = 108 × 10⁶ × 1.60 × 10⁻¹⁹ J = 1.728 × 10⁻¹¹ J. v = √(2K/m) = **1.47 × 10⁷ m/s**, about 5% of c, so K = ½mv² is a fair approximation.

**(d)** The claim is wrong. Total energy is conserved, including rest energy. The fragments gained 180 MeV of kinetic energy, so they must have **less** rest energy, and so less mass. Δm = 180 MeV ÷ 931 MeV/u = **0.193 u** (3.2 × 10⁻²⁸ kg) less than the original nucleus. The fragments are more tightly bound per nucleon than the heavy nucleus.

| Point | What earns it |
|---|---|
| 1 | Total momentum zero before and after, so the momenta are equal and opposite |
| 1 | K inversely proportional to mass for equal momenta (or equivalent algebra) |
| 1 | K values 108 MeV and 72 MeV, with the larger on the lighter fragment |
| 1 | Converts K to joules and mass to kilograms correctly |
| 1 | v = 1.47 × 10⁷ m/s |
| 1 | Rejects the claim: the energy released comes from a decrease in rest mass |
| 1 | Δm = 0.193 u (or 3.2 × 10⁻²⁸ kg) |

Carry forward an error in (b) into (c) once. Accept a momentum method for (c): p = √(2mK) for one fragment, then v = p/m.
</details>

## How did you do?

- **Q1 wrong:** re-read "Rules that every nuclear reaction obeys" and the fission section of the [study guide](/advanced-course-resources/physics-2/15-7-fission-fusion-nuclear-decay-study-guide/).
- **Q2, Q3 or Q5 wrong:** work through "Radioactive decay is random" and Worked example 2 again.
- **Q4 or Q7(d) wrong:** revisit "Mass and energy" and Worked example 3.
- **Q6 incomplete:** reread the paragraph on count rates and background in the guide.
- **Q7(a)–(c) wrong:** redo Worked example 1, which uses the same momentum argument.

Then tick off the [topic checklist](/advanced-course-resources/physics-2/15-7-fission-fusion-nuclear-decay-checklist/).
