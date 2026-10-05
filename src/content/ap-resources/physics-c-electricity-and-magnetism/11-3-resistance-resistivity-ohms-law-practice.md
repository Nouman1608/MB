---
resourceId: "mb-ap-physcem-11.3-practice"
title: "Resistance, Resistivity and Ohm's Law: Practice Questions (Physics C: E&M 11.3)"
description: "Seven original Marlbridge practice questions on resistance: R = ρℓ/A, stretched wires, non-ohmic lamps, finding resistivity from plotted data and integrating a varying resistivity."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.3"]
resourceType: "practice-questions"
prerequisites:
  - "R = ΔV/I and R = ρℓ/A"
prerequisiteResources: ["mb-ap-physcem-11.3-study-guide"]
learningObjectives:
  - "Calculate resistance from the dimensions and resistivity of a wire"
  - "Predict factors of change in resistance when a wire is resized or stretched"
  - "Decide from data whether an element is ohmic, and explain why a lamp is not"
  - "Plan an experiment and find resistivity from the slope of a graph"
  - "Integrate a varying resistivity to find resistance and how potential difference is shared"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "All materials are fictional, with values chosen for the question. Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-11.3-study-guide", "mb-ap-physcem-11.3-revision-notes", "mb-ap-physcem-11.3-checklist"]
next: "mb-ap-physcem-11.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Question 6 asks you to plan an experiment and use a graph; Question 7 needs calculus."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. All materials are fictional, with values chosen for the question. Connecting wires have negligible resistance, and an element is ohmic unless the question says otherwise. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

A graph of current I (vertical axis) against potential difference ΔV (horizontal axis) for a resistor is a straight line through the origin. The line passes through the point ΔV = 6.0 V, I = 300 mA. What is the resistance of the resistor?

- (A) 0.020 Ω
- (B) 0.050 Ω
- (C) 1.8 Ω
- (D) 20 Ω

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Convert the current: 300 mA = 0.300 A. R = ΔV/I = 6.0 V ÷ 0.300 A = 20 Ω. Equivalently, the slope is 0.300 A ÷ 6.0 V = 0.050 A/V, and R = 1/slope = 20 Ω.

- (A) divides 6.0 by 300, using the current in milliamperes without converting it.
- (B) is the slope of the graph, 0.050 A/V. With I on the vertical axis the slope is 1/R, not R.
- (C) multiplies ΔV by I. That product is the power in watts (Topic 11.4), not a resistance.
</details>

## Question 2 (multiple choice · core)

A uniform wire has resistance R. It is pulled evenly until it is three times its original length. Its volume and resistivity do not change. What is its new resistance?

- (A) R
- (B) 3R
- (C) 9R
- (D) R/3

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The volume Aℓ is fixed, so tripling ℓ makes the area A/3. Then R_new = ρ(3ℓ)/(A/3) = 9ρℓ/A = 9R.

- (A) argues that the resistivity is unchanged, so the resistance is too. Resistivity is a material property; resistance also depends on shape.
- (B) accounts for the extra length but forgets that the wire also becomes thinner.
- (D) treats resistance as inversely proportional to length.
</details>

## Question 3 (multiple choice · core)

Wires X and Y are made of the same metal at the same temperature. Wire Y is twice as long as wire X and has twice its diameter. What is the ratio R_Y/R_X?

- (A) 1/2
- (B) 1
- (C) 2
- (D) 8

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** R = ρℓ/A with A = πd²/4. Doubling d makes A four times larger. So R_Y/R_X = (2ℓ/4A) ÷ (ℓ/A) = 2/4 = 1/2.

- (B) treats the area as proportional to the diameter, so the two factors of 2 seem to cancel.
- (C) includes the longer length but ignores the change in area.
- (D) multiplies by the area factor instead of dividing: a larger cross-section **lowers** resistance.
</details>

## Question 4 (calculation · core)

A wire of a fictional alloy has resistivity 4.9 × 10⁻⁷ Ω·m, length 3.0 m and diameter 0.40 mm. A potential difference of 9.0 V is applied between its ends.

(a) Calculate the resistance of the wire.
(b) Calculate the current.
(c) Calculate the electric field inside the wire in two ways: from ΔV and ℓ, and from E = ρJ.
(d) What length of the same wire would have a resistance of 5.0 Ω?

<details>
<summary>Worked solution</summary>

1. Area: r = 0.20 mm = 2.0 × 10⁻⁴ m, so A = π(2.0 × 10⁻⁴)² = 1.26 × 10⁻⁷ m².
2. (a) R = ρℓ/A = (4.9 × 10⁻⁷)(3.0) ÷ (1.26 × 10⁻⁷) = **11.7 Ω** (about 12 Ω).
3. (b) I = ΔV/R = 9.0 ÷ 11.7 = **0.77 A**.
4. (c) E = ΔV/ℓ = 9.0 V ÷ 3.0 m = **3.0 V/m**. Also J = I/A = 0.769 ÷ (1.26 × 10⁻⁷) = 6.12 × 10⁶ A/m², and ρJ = (4.9 × 10⁻⁷)(6.12 × 10⁶) = **3.0 V/m**. They agree.
5. (d) ℓ = RA/ρ = (5.0)(1.26 × 10⁻⁷) ÷ (4.9 × 10⁻⁷) = **1.3 m** (1.28 m).

Suggested mark points (4): 1 for the area using the radius in metres; 1 for R; 1 for I and E by both methods; 1 for the length in (d).

Common error: using 0.40 mm as the radius gives A four times too large and R = 2.9 Ω.
</details>

## Question 5 (constructed response · core)

A student measures the current in a small filament lamp at four potential differences.

| ΔV (V) | 1.0 | 2.0 | 4.0 | 6.0 |
|---|---|---|---|---|
| I (A) | 0.10 | 0.16 | 0.24 | 0.30 |

(a) Calculate the resistance of the lamp at each potential difference.
(b) Is the lamp ohmic? Justify your answer using your results.
(c) Explain, in terms of the filament's resistivity, why the resistance changes in the way it does.
(d) A second student says: "Between 2.0 V and 6.0 V the slope of the I–ΔV graph is 0.035 A/V, so the resistance at 4.0 V is 1/0.035 = 29 Ω." Explain what is wrong.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** R = ΔV/I: **10 Ω, 12.5 Ω, 16.7 Ω, 20 Ω**.

**(b)** **No.** An ohmic element has the same resistance at every current. Here R doubles from 10 Ω to 20 Ω as ΔV rises from 1.0 V to 6.0 V. On an I–ΔV graph the points would lie on a curve that bends towards the ΔV axis, not a straight line. (If it were ohmic with R = 10 Ω, the current at 6.0 V would be 0.60 A, not 0.30 A.)

**(c)** As the current increases, the lamp converts electrical energy to thermal energy at a greater rate, so the filament gets hotter. The filament is a metal, and the resistivity of a metal increases with temperature because the vibrating ions scatter the drifting electrons more often. Since R = ρℓ/A and ℓ and A barely change, R rises with ρ.

**(d)** The 1/slope rule gives resistance only for an **ohmic** element, whose graph is a straight line through the origin. For a non-ohmic element, the resistance at a point is ΔV/I at that point: 4.0 V ÷ 0.24 A = 16.7 Ω. The slope of a chord or tangent tells you how the current **changes**, not the ratio ΔV/I.

| Point | What earns it |
|---|---|
| 1 | All four resistances correct |
| 1 | Not ohmic, with a reason based on the changing R (or a curved graph) |
| 1 | Higher current, so more thermal energy and a hotter filament |
| 1 | Resistivity of the metal increases with temperature, so R increases |
| 1 | Explains that R = ΔV/I at the point, giving 16.7 Ω, and that 1/slope applies only to a straight line through the origin |

Accept a reason in (b) given by comparing ΔV/I for any two rows.
</details>

## Question 6 (constructed response · core)

You are given a reel of fictional alloy wire of diameter 0.25 mm, a battery, a variable resistor, an ammeter, a voltmeter, a metre rule, crocodile clips and connecting leads.

(a) Describe a procedure to find the resistivity of the alloy. Say what you would measure, what you would vary, and how you would avoid the wire heating up.
(b) A student's results are below. Plot R against ℓ, draw a best-fit line and find its slope.

| ℓ (m) | 0.20 | 0.40 | 0.60 | 0.80 | 1.00 |
|---|---|---|---|---|---|
| R (Ω) | 2.1 | 4.0 | 6.1 | 7.9 | 10.1 |

(c) Use the slope to find the resistivity.
(d) Give one advantage of using a graph of R against ℓ rather than one measurement on a single length.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Clamp the wire straight along the metre rule. Connect the battery, variable resistor, ammeter and the length of wire in one loop, with the voltmeter across the length of wire between two crocodile clips. Measure the length ℓ between the clips with the metre rule. Read ΔV and I, and calculate R = ΔV/I. Repeat for at least five different lengths. Keep the current small (adjust the variable resistor) and open the circuit between readings so the wire does not warm up, because its resistivity would change. Use the given diameter to find the cross-sectional area A.

**(b)** The points lie close to a straight line. The best-fit line has slope ≈ **10 Ω/m** (least-squares value 9.95 Ω/m, with a small intercept of 0.07 Ω).

**(c)** Since R = (ρ/A)ℓ, the slope is ρ/A. A = π(1.25 × 10⁻⁴ m)² = 4.91 × 10⁻⁸ m². ρ = slope × A = (9.95 Ω/m)(4.91 × 10⁻⁸ m²) = **4.9 × 10⁻⁷ Ω·m**.

**(d)** Any one: the best-fit line averages out random errors in individual readings; a constant extra resistance (such as at the clips) shows up as an intercept and does not affect the slope; the straight line checks that R really is proportional to ℓ.

| Point | What earns it |
|---|---|
| 1 | Measures ΔV and I across a measured length and uses R = ΔV/I |
| 1 | Varies the length over at least five values |
| 1 | A sensible step to limit heating (small current, or switch off between readings) |
| 1 | Graph with labelled axes and units, sensible scales and a best-fit line; slope 9.8–10.2 Ω/m |
| 1 | Identifies slope = ρ/A and finds ρ in the range 4.8–5.0 × 10⁻⁷ Ω·m |
| 1 | A valid advantage of the graphical method |

Accept a method that plots ΔV/I against ℓ directly from raw readings, or one that keeps the current fixed and plots ΔV against ℓ (slope = ρI/A).
</details>

## Question 7 (constructed response · stretch)

A rod of length L and uniform cross-sectional area A has resistivity that varies along it as ρ(x) = ρ₀(1 + x/L)², where x is measured from end P.

(a) Show that the resistance of the rod is R = 7ρ₀L/(3A).
(b) A potential difference ΔV is applied between the ends. Find the fraction of ΔV that appears across the half of the rod nearer P.
(c) Find the ratio of the electric field at the far end (x = L) to the field at P.
(d) Calculate R for ρ₀ = 2.0 × 10⁻⁶ Ω·m, L = 0.60 m and A = 1.5 × 10⁻⁷ m², and the potential difference across the half nearer P when ΔV = 5.6 V.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Thin slices are in series, so R = (1/A)∫₀ᴸ ρ₀(1 + x/L)² dx. Let u = x/L, dx = L du:
R = (ρ₀L/A)∫₀¹ (1 + u)² du = (ρ₀L/A)[(1 + u)³/3]₀¹ = (ρ₀L/A)(8 − 1)/3 = **7ρ₀L/(3A)**.

**(b)** The same current passes through every slice, so the potential difference is shared in proportion to resistance. Half nearer P: (ρ₀L/A)[(1 + u)³/3] from 0 to 1/2 = (ρ₀L/A)(3.375 − 1)/3 = (19/24)(ρ₀L/A). Fraction = (19/24) ÷ (7/3) = **19/56 ≈ 0.34**.

**(c)** J = I/A is the same everywhere, so E = ρJ ∝ ρ. E(L)/E(0) = ρ₀(2)² ÷ ρ₀(1)² = **4**.

**(d)** R = 7(2.0 × 10⁻⁶)(0.60) ÷ (3 × 1.5 × 10⁻⁷) = **18.7 Ω**. Then I = 5.6 ÷ 18.7 = 0.30 A, and the half nearer P takes (19/56)(5.6 V) = **1.9 V**.

| Point | What earns it |
|---|---|
| 1 | Sets up R = (1/A)∫ρ(x) dx with limits 0 to L, with a reason (slices in series) |
| 1 | Evaluates the integral correctly to give 7ρ₀L/(3A) |
| 1 | States that the current is the same in every slice, so ΔV divides in proportion to resistance |
| 1 | Fraction 19/56 |
| 1 | Uses E = ρJ with J constant to get the ratio 4 |
| 1 | R = 18.7 Ω and 1.9 V |

Common error: using the resistivity at the midpoint, ρ₀(1.5)² = 2.25ρ₀, as an average. The true average is 7ρ₀/3 ≈ 2.33ρ₀, because ρ(x) is not linear. Carry forward an error in (a) into (d) once.
</details>

## How did you do?

- **Q1 or Q5 wrong:** re-read "Ohm's law" and Figure 1 in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-3-resistance-resistivity-ohms-law-study-guide/).
- **Q2, Q3 or Q4 wrong:** revisit "From E = ρJ to R = ρℓ/A" and Worked example 1.
- **Q6 incomplete:** work through Worked example 2, focusing on the best-fit line and the slope.
- **Q7 incomplete:** go through Worked example 3 again, step by step.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-3-resistance-resistivity-ohms-law-checklist/).
