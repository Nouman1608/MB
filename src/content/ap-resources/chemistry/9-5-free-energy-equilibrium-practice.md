---
resourceId: "mb-ap-chem-9.5-practice"
title: "Free Energy and Equilibrium: Practice Questions (Chemistry 9.5)"
description: "Seven original Marlbridge practice questions on linking ΔG° and K, estimating K from ΔG°, and the effect of temperature, with worked solutions and suggested mark points."
course: "chemistry"
unit: 9
topics: ["9.5"]
resourceType: "practice-questions"
prerequisites:
  - "Using ΔG° = ΔH° − TΔS° (Topic 9.3)"
prerequisiteResources: ["mb-ap-chem-9.5-study-guide"]
learningObjectives:
  - "Link the sign of ΔG° to the size of K"
  - "Convert between ΔG° and K with consistent units"
  - "Estimate K from ΔG° by comparing with RT"
  - "Justify a claim about favourability and product formation with a calculation"
skills: ["5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "R = 8.314 J mol⁻¹ K⁻¹. T(K) = T(°C) + 273. Use ln and eˣ. All reaction data are invented for practice"
related: ["mb-ap-chem-9.5-study-guide", "mb-ap-chem-9.5-revision-notes", "mb-ap-chem-9.5-checklist"]
next: "mb-ap-chem-9.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry", "exam-chemistry"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Convert ΔG° to J mol⁻¹ and T to kelvin before using R."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data for every question: R = 8.314 J mol⁻¹ K⁻¹; ΔG° = −RT ln K; K = e^(−ΔG°/RT); ΔG° = ΔH° − TΔS°. All reactions and values are invented for practice.

## Question 1 (multiple choice · foundation)

For a reaction at 298 K, ΔG° = +8.0 kJ mol⁻¹. Which statement about its equilibrium constant is correct?

- (A) K is negative.
- (B) K is between 0 and 1.
- (C) K is exactly 1.
- (D) K is greater than 1.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A positive ΔG° makes −ΔG°/RT negative, and e raised to a negative power lies between 0 and 1. Here K = e^(−8000/2477.6) = 0.040. Reactants are favoured, but some product forms.

- (A) K is never negative: e raised to any power is positive. The sign of ΔG° decides whether K is above or below 1.
- (C) K = 1 only when ΔG° = 0.
- (D) K > 1 needs a negative ΔG°.
</details>

## Question 2 (multiple choice · core)

For an invented reaction at 298 K, ΔG° = −5.00 kJ mol⁻¹. What is K?

- (A) 1.00
- (B) 0.133
- (C) 7.52
- (D) 104

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** RT = 8.314 × 298 = 2477.6 J mol⁻¹. −ΔG°/RT = 5000 ÷ 2477.6 = 2.018. K = e^2.018 = 7.52.

- (A) leaves ΔG° in kJ: e^(5.00/2477.6) = 1.002. The tell-tale sign is a K that is almost exactly 1 for a ΔG° of several kJ mol⁻¹.
- (B) drops the minus sign, giving e^(−2.018). A negative ΔG° must give K > 1.
- (D) uses 10^2.018 instead of e^2.018. The relationship uses the natural log, so the inverse is eˣ.
</details>

## Question 3 (multiple choice · core)

Without a full calculation, estimate K at 298 K for a reaction with ΔG° = +28.5 kJ mol⁻¹.

- (A) about 1 × 10⁻⁵
- (B) about 1 × 10⁵
- (C) about 3 × 10⁻¹²
- (D) about 0.99

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** At 298 K, each 5.7 kJ mol⁻¹ of ΔG° changes K by a factor of 10. 28.5 ÷ 5.7 = 5.0, and ΔG° is positive, so K ≈ 10⁻⁵. The full calculation agrees: K = e^(−28 500/2477.6) = e^(−11.50) = 1.0 × 10⁻⁵.

- (B) has the right size but the wrong direction. A positive ΔG° means K < 1.
- (C) treats ΔG°/RT = 11.5 as a power of ten: 10⁻¹¹·⁵ = 3 × 10⁻¹². The exponent belongs to e, not 10.
- (D) forgets to convert kJ to J, which makes ΔG°/RT tiny and K almost 1.
</details>

## Question 4 (calculation · core)

An invented enzyme-catalysed reaction has K = 4.5 × 10³ at 310 K. Calculate ΔG° at 310 K, in kJ mol⁻¹, and state whether the reaction is thermodynamically favoured.

<details>
<summary>Worked solution</summary>

1. RT = 8.314 J mol⁻¹ K⁻¹ × 310 K = 2577.3 J mol⁻¹.
2. ln K = ln(4.5 × 10³) = 8.412.
3. ΔG° = −RT ln K = −(2577.3)(8.412) = −21 680 J mol⁻¹ = **−21.7 kJ mol⁻¹**.
4. ΔG° < 0 and K > 1, so the reaction **is** thermodynamically favoured: products are favoured at equilibrium.

Suggested mark points (2): 1 for the correct substitution with T = 310 K and ln K; 1 for −21.7 kJ mol⁻¹ with the sign **and** the conclusion that it is favoured.

Common error: using log instead of ln gives −9.42 kJ mol⁻¹, which is too small in size by a factor of 2.303. Note that the catalyst does not change ΔG° or K; it only changes the rate.
</details>

## Question 5 (constructed response · core)

For an invented reaction, ΔH° = −30.0 kJ mol⁻¹ and ΔS° = −80.0 J mol⁻¹ K⁻¹. Assume both are constant with temperature.

(a) Calculate ΔG° and K at 298 K.
(b) Calculate ΔG° and K at 500 K.
(c) Calculate the temperature at which K = 1.
(d) Explain, in terms of ΔH° and ΔS°, why K becomes smaller as the temperature rises.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ΔG° = ΔH° − TΔS° = −30.0 − (298)(−0.0800) = −30.0 + 23.84 = **−6.16 kJ mol⁻¹**.
K = e^(6160 / 2477.6) = e^2.486 = **12.0**.

**(b)** ΔG° = −30.0 − (500)(−0.0800) = −30.0 + 40.0 = **+10.0 kJ mol⁻¹**.
RT = 8.314 × 500 = 4157 J mol⁻¹, so K = e^(−10 000/4157) = e^(−2.406) = **0.090**.

**(c)** K = 1 when ΔG° = 0: T = ΔH° ÷ ΔS° = (−30.0) ÷ (−0.0800) = **375 K**.

**(d)** ΔH° is negative, which favours products at every temperature. ΔS° is negative, so the −TΔS° term is **positive** and grows as T rises. Above 375 K this unfavourable entropy term outweighs the favourable enthalpy term, so ΔG° becomes positive and K drops below 1.

| Point | What earns it |
|---|---|
| 1 | ΔG° at 298 K = −6.16 kJ mol⁻¹ with ΔS° converted to kJ mol⁻¹ K⁻¹ |
| 1 | K at 298 K = 12.0 from a correctly signed exponent |
| 1 | ΔG° = +10.0 kJ mol⁻¹ and K = 0.090 at 500 K, using T = 500 K in RT |
| 1 | 375 K from ΔG° = 0 |
| 1 | Explains that −TΔS° is positive and grows with T, eventually outweighing the negative ΔH° |

Accept answers carried forward from an earlier part. In (b), using RT for 298 K instead of 500 K loses the third point.
</details>

## Question 6 (constructed response · core)

For the invented reaction A(aq) ⇌ B(aq), ΔG° = +15.0 kJ mol⁻¹ at 298 K. A student says: "ΔG° is positive, so no B forms when A is dissolved in water."

(a) Calculate K at 298 K.
(b) A solution is made with [A] = 0.500 mol L⁻¹ and no B. Calculate [B] at equilibrium.
(c) Evaluate the student's claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** −ΔG°/RT = −15 000 ÷ 2477.6 = −6.054. K = e^(−6.054) = **2.35 × 10⁻³**.

**(b)** Let x = [B] at equilibrium. Then [A] = 0.500 − x and K = x / (0.500 − x) = 2.35 × 10⁻³.
Solving: x = 0.500K / (1 + K) = **1.17 × 10⁻³ mol L⁻¹**. (Because K is small, the approximation x ≈ 0.500K = 1.17 × 10⁻³ gives the same answer to 3 significant figures.)

**(c)** The claim is **incorrect**. A positive ΔG° means K is less than 1, so reactants are favoured, but K is not zero. B does form: about 1.17 × 10⁻³ mol L⁻¹, roughly 0.23% of the A. A correct statement would be "only a small amount of B forms".

| Point | What earns it |
|---|---|
| 1 | K = 2.35 × 10⁻³ with ΔG° in J mol⁻¹ |
| 1 | Correct K expression set up with the equilibrium amounts |
| 1 | [B] = 1.17 × 10⁻³ mol L⁻¹ |
| 1 | States the claim is wrong **and** explains that ΔG° > 0 gives a small, non-zero K, so some B forms |

Do not award the last point for "the claim is wrong" without the link to K.
</details>

## Question 7 (explanation · stretch)

At 298 K, reaction 1 has a ΔG° that is 11.4 kJ mol⁻¹ more negative than the ΔG° of reaction 2.

(a) Show that K₁ is about 100 times larger than K₂.
(b) A student says: "11.4 kJ mol⁻¹ is a small energy, so the two reactions must have similar equilibrium mixtures." Explain why the size of ΔG° should be compared with RT, and use this to respond to the student.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** K₁ / K₂ = e^(−ΔG°₁/RT) ÷ e^(−ΔG°₂/RT) = e^(−(ΔG°₁ − ΔG°₂)/RT) = e^(11 400/2477.6) = e^4.601 = **99.6**, which is about 100.
Quick check with the estimation rule: 11.4 ÷ 5.7 = 2.0, so a factor of 10² = 100.

**(b)** K depends on ΔG° divided by RT, through an exponential. RT is the natural energy scale at a given temperature: about 2.5 kJ mol⁻¹ at 298 K. An energy of 11.4 kJ mol⁻¹ is about 4.6 times RT, so it is **not** small on this scale. Because the dependence is exponential, it changes K by a factor of about 100. For example, if K₂ = 0.45 (reactants slightly favoured), then K₁ ≈ 45 (products clearly favoured). The equilibrium mixtures are very different, so the student is wrong.

| Point | What earns it |
|---|---|
| 1 | Correct ratio with the difference in ΔG° divided by RT (in consistent units) |
| 1 | States that ΔG° must be compared with RT (about 2.5 kJ mol⁻¹ at 298 K) |
| 1 | Uses the exponential link to conclude that a 100-fold difference in K gives clearly different mixtures |
</details>

## How did you do?

- **Q1 or Q6 wrong:** re-read the sign table in "Two ways of saying products are favoured" in the [study guide](/advanced-course-resources/chemistry/9-5-free-energy-equilibrium-study-guide/).
- **Q2 or Q4 wrong:** check units (J, not kJ) and ln, not log, using Worked examples 1 and 2.
- **Q3 or Q7 wrong:** practise the "5.7 kJ mol⁻¹ = factor of 10" rule and Figure 1.
- **Q5 incomplete:** revisit Worked example 3 on temperature.

Then tick off the [topic checklist](/advanced-course-resources/chemistry/9-5-free-energy-equilibrium-checklist/).
