---
resourceId: "mb-ap-physcem-10.3-practice"
title: "Capacitors: Practice Questions (Physics C: E&M 10.3)"
description: "Seven original Marlbridge practice questions on capacitors: capacitance, parallel-plate and spherical results, particles between plates and stored energy, with full solutions."
course: "physics-c-electricity-and-magnetism"
unit: 10
topics: ["10.3"]
resourceType: "practice-questions"
prerequisites:
  - "C = Q/ΔV and the parallel-plate field E = σ/ε₀"
prerequisiteResources: ["mb-ap-physcem-10.3-study-guide"]
learningObjectives:
  - "Predict how C, ΔV, E and U change when a capacitor's geometry changes"
  - "Calculate C, Q, E and U for a parallel-plate capacitor"
  - "Derive the capacitance of a spherical capacitor and check its limits"
  - "Analyse a charged particle between plates as constant-acceleration motion"
  - "Derive the stored energy and the force between plates"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "ε₀ = 8.85 × 10⁻¹² C²/(N·m²); 1/(4πε₀) = 8.99 × 10⁹ N·m²/C²; e = 1.60 × 10⁻¹⁹ C; proton mass 1.67 × 10⁻²⁷ kg. Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-10.3-study-guide", "mb-ap-physcem-10.3-revision-notes", "mb-ap-physcem-10.3-checklist"]
next: "mb-ap-physcem-10.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Questions 6 and 7 need calculus: set up each integral before you evaluate it."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data for every question: ε₀ = 8.85 × 10⁻¹² C²/(N·m²), 1/(4πε₀) = 8.99 × 10⁹ N·m²/C², e = 1.60 × 10⁻¹⁹ C and proton mass = 1.67 × 10⁻²⁷ kg. All capacitors have air (κ = 1) between the conductors, and edge effects can be ignored. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

A parallel-plate capacitor is connected to a battery. Which single change **doubles** its capacitance?

- (A) Doubling the charge on each plate
- (B) Halving the distance between the plates
- (C) Doubling the potential difference of the battery
- (D) Halving the area of each plate

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** C = ε₀A/d depends only on geometry. Halving d doubles C.

- (A) More charge raises ΔV in proportion, so Q/ΔV, and therefore C, stays the same.
- (C) A bigger battery doubles Q as well as ΔV. C does not change.
- (D) Halving A **halves** C, the opposite of what is wanted.
</details>

## Question 2 (multiple choice · core)

A parallel-plate capacitor is charged and then disconnected from the battery. Its stored energy is U. The plates are then pulled apart until their separation is three times as large. What is the new stored energy?

- (A) U/3
- (B) U
- (C) 3U
- (D) 9U

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The capacitor is isolated, so Q is fixed. C = ε₀A/d falls to C/3. With Q fixed, U = Q²/(2C), so U triples. The extra energy is the work done pulling the attracting plates apart.

- (A) uses U = ½C(ΔV)² with ΔV held fixed. That would be correct only if the battery stayed connected.
- (B) assumes energy cannot change without adding charge. It ignores the work done by the person pulling.
- (D) squares the factor, perhaps from thinking ΔV triples and U ∝ (ΔV)² with C unchanged. But C changes too: ½(C/3)(3ΔV)² = 3U.
</details>

## Question 3 (multiple choice · core)

A spherical capacitor has an inner conducting sphere of radius 0.10 m and a thin concentric outer shell of radius 0.12 m. What is its capacitance?

- (A) 11 pF
- (B) 56 pF
- (C) 67 pF
- (D) 80 pF

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** C = 4πε₀ab/(b − a) = (0.10 × 0.12) ÷ [(8.99 × 10⁹)(0.020)] = 6.67 × 10⁻¹¹ F = 67 pF.

- (A) is 4πε₀a, the capacitance of the inner sphere on its own, with no outer shell.
- (B) uses the parallel-plate formula ε₀A/d with A = 4πa², the area of the **inner** sphere. The gap is not thin enough for that approximation.
- (D) uses the parallel-plate formula with the area of the **outer** shell, 4πb². The exact answer lies between (B) and (D), as expected.
</details>

## Question 4 (calculation · core)

Two square plates, 0.15 m by 0.15 m, are 2.0 mm apart and connected to a 9.0 V battery.

(a) Calculate the capacitance, the charge on each plate, the field between the plates and the stored energy.
(b) With the battery **still connected**, the gap is reduced to 1.0 mm. Find the new charge, field and stored energy.

<details>
<summary>Worked solution</summary>

1. (a) A = 0.0225 m². C = ε₀A/d = (8.85 × 10⁻¹²)(0.0225) ÷ (2.0 × 10⁻³) = **9.96 × 10⁻¹¹ F (99.6 pF)**.
2. Q = CΔV = (9.956 × 10⁻¹¹)(9.0) = **8.96 × 10⁻¹⁰ C**.
3. E = ΔV/d = 9.0 ÷ 2.0 × 10⁻³ = **4.5 × 10³ V/m**.
4. U = ½C(ΔV)² = ½(9.956 × 10⁻¹¹)(9.0)² = **4.03 × 10⁻⁹ J**.
5. (b) ΔV stays 9.0 V. C doubles to 1.99 × 10⁻¹⁰ F, so Q doubles to **1.79 × 10⁻⁹ C**. E = 9.0 ÷ 1.0 × 10⁻³ = **9.0 × 10³ V/m** (doubled). U = ½C(ΔV)² = **8.06 × 10⁻⁹ J** (doubled).

Suggested mark points (4): 1 for C; 1 for Q and E; 1 for U with units; 1 for part (b), using ΔV fixed so that Q, E and U all double.

Common error: in (b), using U = Q²/(2C) with the **old** Q. That gives 2.02 × 10⁻⁹ J, half the original energy, which would be correct only for an isolated capacitor.
</details>

## Question 5 (calculation · core)

A proton enters the gap between two horizontal parallel plates, exactly midway between them, moving at 2.0 × 10⁵ m/s parallel to the plates. The plates are 4.0 cm long and 1.0 cm apart, with a potential difference of 50 V. The upper plate is positive.

(a) Find the acceleration of the proton and its direction.
(b) Show that the proton hits a plate, and find how far along the plate it lands.
(c) Justify ignoring gravity.

<details>
<summary>Worked solution</summary>

1. (a) E = ΔV/d = 50 ÷ 0.010 = 5.0 × 10³ V/m, pointing down (from + to −). a = eE/m = (1.60 × 10⁻¹⁹)(5.0 × 10³) ÷ (1.67 × 10⁻²⁷) = **4.79 × 10¹¹ m/s², downward**, towards the negative plate.
2. (b) If the proton stayed between the plates for their full length, the time would be t = 0.040 ÷ 2.0 × 10⁵ = 2.0 × 10⁻⁷ s, and the drop would be ½at² = ½(4.79 × 10¹¹)(2.0 × 10⁻⁷)² = 9.6 × 10⁻³ m = 9.6 mm. The proton starts only 5.0 mm from the lower plate, so it **hits** it.
3. Time to fall 5.0 mm: t = √(2 × 0.0050 ÷ 4.79 × 10¹¹) = 1.44 × 10⁻⁷ s. Horizontal distance = (2.0 × 10⁵)(1.44 × 10⁻⁷) = **2.9 × 10⁻² m (2.9 cm)** from the entrance.
4. (c) The electric force is eE = 8.0 × 10⁻¹⁶ N; the weight is mg = 1.6 × 10⁻²⁶ N, about 5 × 10¹⁰ times smaller.

Suggested mark points (4): 1 for a with direction; 1 for comparing a drop with the 5.0 mm available (or the time to fall 5.0 mm with the transit time); 1 for 2.9 cm; 1 for a numerical force comparison in (c).

Common error: using the full 1.0 cm gap as the fall distance. The proton starts in the middle, so it only needs to fall 5.0 mm. (Using 1.0 cm gives 4.1 cm, beyond the end of the plates.)
</details>

## Question 6 (constructed response · core)

A spherical capacitor has an inner conducting sphere of radius a carrying +Q and a thin concentric conducting shell of radius b carrying −Q, with air between them.

(a) Use Gauss's law to find E for a < r < b. State the Gaussian surface you use.
(b) Find the potential difference between the conductors by integration.
(c) Show that C = 4πε₀ab/(b − a).
(d) Show that when b − a = d is very small compared with a, C approaches the parallel-plate result. State what plays the role of A.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A concentric sphere of radius r, with a < r < b. By symmetry E is radial and constant on it, and it encloses +Q: E(4πr²) = Q/ε₀, so **E = Q/(4πε₀r²)**, pointing outward.

**(b)** ΔV = ∫ₐᵇ E dr = (Q/4πε₀)[−1/r]ₐᵇ = (Q/4πε₀)(1/a − 1/b) = **Q(b − a)/(4πε₀ab)**. The inner sphere is at the higher potential.

**(c)** C = Q/ΔV = 4πε₀ab/(b − a). Q cancels, so C depends only on a and b.

**(d)** Write b = a + d. Then ab = a(a + d) ≈ a² when d ≪ a, so C ≈ 4πε₀a²/d = ε₀(4πa²)/d. This is ε₀A/d with **A = 4πa²**, the area of the sphere. Up close, the narrow gap looks like two flat plates.

| Point | What earns it |
|---|---|
| 1 | Concentric spherical Gaussian surface between the conductors, enclosing +Q only |
| 1 | E = Q/(4πε₀r²) |
| 1 | Correct integral with limits a to b |
| 1 | ΔV = Q(b − a)/(4πε₀ab), or the equivalent (Q/4πε₀)(1/a − 1/b) |
| 1 | C = 4πε₀ab/(b − a), with Q seen to cancel |
| 1 | Thin-gap limit to ε₀A/d with A = 4πa² identified |

Also accept, for an extra comment, that b → ∞ gives 4πε₀a, the isolated sphere. Carry forward an error in E into (b) and (c) once.
</details>

## Question 7 (constructed response · stretch)

An isolated parallel-plate capacitor with plate area A = 0.010 m² holds charge Q = 2.0 × 10⁻⁸ C. The plate separation is x.

(a) Sketch a graph of the potential difference against the charge q as the capacitor is charged from 0 to Q at fixed x. Explain what the area under the graph represents.
(b) Starting from dW = (q/C) dq, derive U = Q²/(2C). Hence write U as a function of x.
(c) The plates are pulled apart slowly from x = 1.0 mm to x = 2.0 mm. Calculate the work done by the external force.
(d) Show that the force on one plate from the other is Q²/(2ε₀A), explaining why you must use σ/(2ε₀) and not σ/ε₀. Check that this force times the distance moved agrees with (c).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A straight line through the origin with gradient 1/C, ending at (Q, Q/C). Each thin strip of width dq has area (q/C) dq, the work to move that charge. The total area, a triangle, is the stored energy ½QΔV.

**(b)** U = ∫₀^Q (q/C) dq = Q²/(2C). With C = ε₀A/x: **U = Q²x/(2ε₀A)**. U grows linearly with x.

**(c)** W = U(2.0 mm) − U(1.0 mm) = Q²(Δx)/(2ε₀A) = (2.0 × 10⁻⁸)²(1.0 × 10⁻³) ÷ (2 × 8.85 × 10⁻¹² × 0.010) = **2.26 × 10⁻⁶ J**. (U goes from 2.26 × 10⁻⁶ J to 4.52 × 10⁻⁶ J.)

**(d)** One plate cannot exert a force on itself, so a plate feels only the field of the **other** plate: σ/(2ε₀). The total σ/ε₀ between the plates includes the plate's own field. F = Q × σ/(2ε₀) = Q²/(2ε₀A) = (2.0 × 10⁻⁸)² ÷ (2 × 8.85 × 10⁻¹² × 0.010) = 2.26 × 10⁻³ N. This does not depend on x, so W = F × Δx = (2.26 × 10⁻³)(1.0 × 10⁻³) = 2.26 × 10⁻⁶ J, matching (c).

| Point | What earns it |
|---|---|
| 1 | Straight-line sketch through the origin, with the area identified as stored energy |
| 1 | Integral of (q/C) dq evaluated to Q²/(2C) |
| 1 | U = Q²x/(2ε₀A) |
| 1 | W = 2.26 × 10⁻⁶ J from the change in U, with Q kept constant |
| 1 | Uses only the other plate's field, σ/(2ε₀), with a reason |
| 1 | F = 2.26 × 10⁻³ N and F × Δx agrees with (c) |

Using σ/ε₀ gives 4.52 × 10⁻³ N and twice the work, which breaks energy conservation; credit a student who spots this as the reason for the factor ½.
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "What a capacitor is" and "A method for any capacitor" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/10-3-capacitors-study-guide/).
- **Q2 or Q4 wrong:** revisit "Fixed charge or fixed potential difference?" and Worked example 1.
- **Q5 wrong:** work through Worked example 3 again.
- **Q6 or Q7 incomplete:** redo the spherical derivation and the "Energy stored in a capacitor" section step by step.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/10-3-capacitors-checklist/).
