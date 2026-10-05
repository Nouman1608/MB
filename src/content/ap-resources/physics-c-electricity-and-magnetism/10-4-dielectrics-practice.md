---
resourceId: "mb-ap-physcem-10.4-practice"
title: "Dielectrics: Practice Questions (Physics C: E&M 10.4)"
description: "Seven original Marlbridge practice questions on dielectrics: polarization, E = E₀/κ, C = κC₀, isolated and connected capacitors, measuring κ from a graph and a partial slab."
course: "physics-c-electricity-and-magnetism"
unit: 10
topics: ["10.4"]
resourceType: "practice-questions"
prerequisites:
  - "C = Q/ΔV, C = ε₀A/d and U = Q²/(2C) = ½C(ΔV)²"
prerequisiteResources: ["mb-ap-physcem-10.4-study-guide"]
learningObjectives:
  - "Predict how a dielectric changes E, ΔV, C, Q and U with Q fixed or ΔV fixed"
  - "Calculate capacitance, field and induced charge for a capacitor filled with a dielectric"
  - "Plan an experiment to measure κ and find κ from the gradient of a linearised graph"
  - "Derive the capacitance of a capacitor partly filled with a dielectric slab"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "ε₀ = 8.85 × 10⁻¹² C²/(N·m²). Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-10.4-study-guide", "mb-ap-physcem-10.4-revision-notes", "mb-ap-physcem-10.4-checklist"]
next: "mb-ap-physcem-10.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Question 6 asks you to plan an experiment and analyse data with a graph."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data for every question: ε₀ = 8.85 × 10⁻¹² C²/(N·m²). "Air" means κ = 1. Unless a question says otherwise, a dielectric fills the whole gap, and edge effects can be ignored. The materials and data are invented for practice. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

A parallel-plate capacitor is charged and then disconnected from the battery. A slab of dielectric constant κ is then slid in to fill the gap. What happens to the electric field between the plates?

- (A) It increases by a factor of κ.
- (B) It decreases by a factor of κ.
- (C) It stays the same.
- (D) It becomes zero.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The free charge on the isolated plates is fixed. The polarized dielectric produces a field opposite to the applied field, so the net field falls to E₀/κ.

- (A) has the direction of the change backwards: the induced field opposes the applied field.
- (C) would be true if the battery stayed connected (ΔV and d fixed, so E = ΔV/d fixed), but here the capacitor is isolated.
- (D) describes a conductor. In a dielectric the bound charges shift only slightly, so σᵢ = σ(1 − 1/κ) is less than σ and some field remains.
</details>

## Question 2 (multiple choice · core)

A capacitor stays connected to a battery and stores energy U. A slab with κ = 3 is inserted to fill the gap. What is the new stored energy?

- (A) U/3
- (B) U
- (C) 3U
- (D) 9U

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** ΔV is fixed by the battery and C becomes 3C, so U = ½C(ΔV)² triples.

- (A) is the result for an **isolated** capacitor, where Q is fixed and U = Q²/(2C).
- (B) assumes nothing changes because ΔV is fixed; but C, Q and U all change.
- (D) squares the factor, as if both C and ΔV tripled. ΔV cannot change while the battery is connected.
</details>

## Question 3 (multiple choice · core)

An isolated parallel-plate capacitor has a potential difference of 60 V across it. When a dielectric slab is inserted to fill the gap, the potential difference falls to 25 V. What is the dielectric constant of the slab?

- (A) 0.42
- (B) 1.4
- (C) 2.4
- (D) 5.8

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** With Q fixed, ΔV = ΔV₀/κ, so κ = 60 ÷ 25 = 2.4.

- (A) is 25 ÷ 60, the ratio upside down. A dielectric constant below 1 would raise ΔV, not lower it.
- (B) is 60/25 − 1, the fractional **change**, not the ratio.
- (D) is (60/25)², as if ΔV depended on κ squared.
</details>

## Question 4 (calculation · core)

An isolated parallel-plate capacitor has plate area 0.020 m², gap 0.40 mm and charge 5.0 × 10⁻⁹ C on each plate. A sheet of material with κ = 3.6 is slid in to fill the gap.

(a) Calculate the capacitance, the potential difference and the field before and after.
(b) Calculate the induced surface charge density on the dielectric and show it accounts for the change in field.

<details>
<summary>Worked solution</summary>

1. (a) C₀ = ε₀A/d = (8.85 × 10⁻¹²)(0.020) ÷ (0.40 × 10⁻³) = **4.43 × 10⁻¹⁰ F**. After: C = κC₀ = **1.59 × 10⁻⁹ F**.
2. ΔV₀ = Q/C₀ = 5.0 × 10⁻⁹ ÷ 4.425 × 10⁻¹⁰ = **11.3 V**. After: ΔV = 11.3 ÷ 3.6 = **3.14 V**.
3. E₀ = ΔV₀/d = **2.82 × 10⁴ V/m**. After: E = E₀/κ = **7.85 × 10³ V/m**.
4. (b) σ = Q/A = 2.5 × 10⁻⁷ C/m². σᵢ = σ(1 − 1/κ) = 2.5 × 10⁻⁷ × (1 − 1/3.6) = **1.81 × 10⁻⁷ C/m²**.
5. Check: σᵢ/ε₀ = 2.04 × 10⁴ V/m, and E₀ − E = 2.82 × 10⁴ − 0.785 × 10⁴ = 2.04 × 10⁴ V/m. They agree.

Suggested mark points (4): 1 for C₀ and C; 1 for both potential differences with Q held fixed; 1 for both fields; 1 for σᵢ with the check that σᵢ/ε₀ equals the drop in field.

Common error: keeping ΔV at 11.3 V after insertion. The capacitor is isolated, so Q, not ΔV, is fixed.
</details>

## Question 5 (calculation · core)

A 250 pF air capacitor is connected to a 12 V battery and left connected. A slab with κ = 2.5 is inserted to fill the gap.

(a) How much charge flows from the battery while the slab goes in?
(b) By what factor does the field between the plates change? Explain.
(c) Find the stored energy before and after.

<details>
<summary>Worked solution</summary>

1. (a) Q₀ = C₀ΔV = (250 × 10⁻¹²)(12) = 3.0 × 10⁻⁹ C. C = 2.5 × 250 pF = 625 pF, so Q = 7.5 × 10⁻⁹ C. Charge from the battery: **4.5 × 10⁻⁹ C**.
2. (b) **No change (factor 1).** ΔV and d are both fixed, so E = ΔV/d is fixed. The bound charge would reduce the field, but the battery adds free charge until E is back to ΔV/d.
3. (c) U₀ = ½C₀(ΔV)² = **1.8 × 10⁻⁸ J**; U = ½C(ΔV)² = **4.5 × 10⁻⁸ J**, κ times larger.

Suggested mark points (3): 1 for 4.5 × 10⁻⁹ C; 1 for "E unchanged" with the reason E = ΔV/d; 1 for both energies.

Common error: using E = E₀/κ here. That rule is for an isolated capacitor.
</details>

## Question 6 (constructed response · experimental design and graph)

A student wants to find the dielectric constant of a new plastic film. She has two square metal plates 0.20 m by 0.20 m, a capacitance meter, a micrometer and many identical sheets of the film. The micrometer shows that one sheet is 0.10 mm thick. She stacks n sheets between the plates, presses them flat and records the capacitance.

| n (sheets) | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| C (nF) | 11.4 | 5.7 | 3.8 | 2.8 | 2.3 |

(a) Describe the procedure, naming the independent and dependent variables and two quantities to keep constant.
(b) Show that a graph of C against 1/n should be a straight line, and state what its gradient represents.
(c) Plot C against 1/n (on paper or a spreadsheet), draw a best-fit line and find its gradient.
(d) Calculate κ for the film.
(e) Suggest one source of systematic error and say whether it makes the calculated κ too large or too small.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Independent variable: the number of sheets n, which sets the gap d = nt. Dependent variable: C, read from the meter. Keep constant: the same plates (same A), the same film, the same leads and meter range, and the way the plates are pressed. Zero the meter with the leads disconnected from the plates; take each reading twice and average.

**(b)** With the gap filled, C = κε₀A/d = κε₀A/(nt) = (κε₀A/t) × (1/n). This has the form y = mx with x = 1/n, so C against 1/n is a straight line through the origin with **gradient κε₀A/t**.

**(c)** The values of 1/n are 1, 0.50, 0.33, 0.25 and 0.20. The points lie close to a straight line. A least-squares line gives a gradient of about **11.4 nF** (any careful best-fit line between 11.2 and 11.6 nF is fine), with an intercept very close to zero.

**(d)** κ = gradient × t/(ε₀A) = (11.4 × 10⁻⁹ F)(0.10 × 10⁻³ m) ÷ [(8.85 × 10⁻¹²)(0.040)] = **3.2**. (Accept 3.1 to 3.3.)

**(e)** Thin air gaps between sheets (or between the film and the plates) add a layer with κ = 1. This lowers C, so κ comes out **too small**. Pressing the stack firmly, or measuring the gap directly, reduces the error. Alternatively, stray capacitance of the leads adds to every reading; it shows up as a small intercept and does not affect the gradient.

| Point | What earns it |
|---|---|
| 1 | Variables identified, with at least two sensible controls |
| 1 | A practical detail that improves reliability (zeroing the meter, repeat readings, pressing the sheets flat) |
| 1 | Shows C = (κε₀A/t)(1/n) and identifies the gradient |
| 1 | Graph with labelled axes and units, sensible scale and a best-fit line (not joining dots) |
| 1 | Gradient in the range 11.2–11.6 nF, found from the line, not a single data point |
| 1 | κ ≈ 3.2 with correct use of t and A in SI units |
| 1 | A systematic error with the correct direction of its effect |

Also accept a graph of 1/C against n (gradient t/(κε₀A), about 0.088 nF⁻¹ with these data), with κ worked out correctly from it.
</details>

## Question 7 (constructed response · stretch)

An isolated parallel-plate capacitor has plate area A, gap d and charge Q, and a capacitance C₀ = ε₀A/d with air. A slab of thickness t (less than d) and dielectric constant κ is placed between the plates, parallel to them, leaving air in the rest of the gap.

(a) State the field in the air and in the slab, in terms of Q, A, ε₀ and κ.
(b) Sketch the field magnitude against position across the gap.
(c) Show that the capacitance is C = ε₀A/(d − t + t/κ).
(d) Check your result for t = 0 and for t = d. Does the position of the slab in the gap matter?
(e) For d = 2.0 mm, t = 1.0 mm and κ = 4.0, find C/C₀.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** In the air: E₀ = σ/ε₀ = **Q/(ε₀A)**, the same as with no slab. In the slab: **E₀/κ = Q/(κε₀A)**.

**(b)** A step graph: E₀ across the air, dropping to E₀/κ across the slab, then back up to E₀ in any air on the other side.

**(c)** ΔV = ∫E dx = E₀(d − t) + (E₀/κ)t = [Q/(ε₀A)](d − t + t/κ). So C = Q/ΔV = **ε₀A/(d − t + t/κ)**.

**(d)** t = 0 gives ε₀A/d = C₀. t = d gives ε₀A/(d/κ) = κε₀A/d = κC₀. Both match the known results. The position does not matter: ΔV depends only on the total air thickness and the slab thickness, not on where the slab sits.

**(e)** C/C₀ = d/(d − t + t/κ) = 2.0 ÷ (2.0 − 1.0 + 0.25) = **1.6**.

| Point | What earns it |
|---|---|
| 1 | Field in the air Q/(ε₀A) and in the slab Q/(κε₀A) |
| 1 | Step-shaped sketch, lower in the slab by the factor κ |
| 1 | ΔV found as a sum (or integral) over the two regions |
| 1 | C = ε₀A/(d − t + t/κ) |
| 1 | Both limits checked, and position-independence stated with a reason |
| 1 | C/C₀ = 1.6 |

Accept a solution that treats the air and the slab as two capacitors in series (Unit 11) if it reaches the same result.
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "The induced field and the dielectric constant" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/10-4-dielectrics-study-guide/).
- **Q2 or Q5 wrong:** revisit "Isolated or connected: two different stories" and Worked example 2.
- **Q4 wrong:** work through Worked example 1 again, including the check on σᵢ.
- **Q6 incomplete:** re-read "Measuring κ in the lab" and study Figure 2.
- **Q7 incomplete:** go back to the field picture in Figure 1, then try again region by region.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/10-4-dielectrics-checklist/).
