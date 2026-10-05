---
resourceId: "mb-ap-physcem-11.4-practice"
title: "Electric Power: Practice Questions (Physics C: E&M 11.4)"
description: "Seven original Marlbridge practice questions on electric power: P = IΔV, I²R and ΔV²/R, comparing bulbs, a generator's energy balance, power ratings and integrating power over time."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.4"]
resourceType: "practice-questions"
prerequisites:
  - "P = IΔV and the forms I²R and ΔV²/R"
prerequisiteResources: ["mb-ap-physcem-11.4-study-guide"]
learningObjectives:
  - "Calculate power in a resistor using the most suitable form"
  - "Predict how power changes when resistance or potential difference changes"
  - "Compare the powers of elements in series and in parallel"
  - "Apply energy conservation to transfers between electrical and mechanical energy"
  - "Integrate a time-varying power to find the energy transferred"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "g = 9.8 m/s². Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-11.4-study-guide", "mb-ap-physcem-11.4-revision-notes", "mb-ap-physcem-11.4-checklist"]
next: "mb-ap-physcem-11.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Question 6 needs calculus: set up the integral before you evaluate it."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data for every question: g = 9.8 m/s². Resistors, bulbs and heating elements are ohmic, batteries and supplies are ideal, and connecting wires have negligible resistance, unless the question says otherwise. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

A potential difference of 6.0 V is applied across a 15 Ω resistor. At what rate is energy dissipated in the resistor?

- (A) 0.40 W
- (B) 2.4 W
- (C) 36 W
- (D) 90 W

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** P = ΔV²/R = (6.0 V)² ÷ 15 Ω = 2.4 W. Equivalently, I = 6.0 ÷ 15 = 0.40 A and P = IΔV = (0.40 A)(6.0 V) = 2.4 W.

- (A) is the current, 0.40 A, given the unit of power.
- (C) squares ΔV but forgets to divide by R.
- (D) multiplies ΔV by R, which is not a power (its unit is V·Ω).
</details>

## Question 2 (multiple choice · core)

A heating element of resistance R is connected to a fixed supply and dissipates power P. It is replaced by an element of resistance R/2 connected to the same supply. What power does the new element dissipate?

- (A) P/2
- (B) P
- (C) 2P
- (D) 4P

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The supply fixes the potential difference, so use P = ΔV²/R. Halving R doubles the power: ΔV²/(R/2) = 2ΔV²/R = 2P. (The current also doubles, so P = IΔV doubles.)

- (A) uses P = I²R as if the current stayed the same. With a fixed supply, the current changes when R changes.
- (B) assumes a supply always delivers the same power. It fixes ΔV, not P.
- (D) squares the factor of 2, but R is not squared in ΔV²/R.
</details>

## Question 3 (multiple choice · core)

Lamp A is rated 24 W and lamp B is rated 6.0 W, both for use on a 12 V supply. Which lamp has the greater resistance when operating normally, and by what factor?

- (A) Lamp A, by a factor of 4
- (B) Lamp B, by a factor of 4
- (C) Lamp B, by a factor of 16
- (D) Neither: they have the same resistance because they use the same supply

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** At the same ΔV, P = ΔV²/R, so R = ΔV²/P. R_A = (12)² ÷ 24 = 6.0 Ω and R_B = (12)² ÷ 6.0 = 24 Ω. Lamp B has 4 times the resistance of lamp A.

- (A) assumes more power needs more resistance. That is true only at the same **current**; these lamps share the same **potential difference**.
- (C) squares the power ratio. R is inversely proportional to P, not to P².
- (D) confuses the supply's potential difference with the lamps' resistance. Different resistances at the same ΔV give different powers.
</details>

## Question 4 (calculation · core)

In a classroom demonstration, a 2.0 kg mass hangs from a cord wound round the axle of a small generator. As the mass falls at a constant 0.50 m/s, the generator lights a lamp. The potential difference across the lamp is 6.0 V and the current in it is 1.2 A.

(a) Calculate the rate at which the falling mass loses gravitational potential energy.
(b) Calculate the electrical power delivered to the lamp, and the efficiency of the energy transfer.
(c) State what happens to the rest of the energy.
(d) Calculate the energy delivered to the lamp while the mass falls 1.5 m.

<details>
<summary>Worked solution</summary>

1. (a) P_mech = mgv = (2.0 kg)(9.8 m/s²)(0.50 m/s) = **9.8 W**.
2. (b) P_lamp = IΔV = (1.2 A)(6.0 V) = **7.2 W**. Efficiency = 7.2 ÷ 9.8 = **0.73** (73%).
3. (c) The remaining 2.6 W is dissipated as **thermal energy**, in the generator's coils (as I²r) and through friction at the axle.
4. (d) Time to fall 1.5 m at 0.50 m/s: 3.0 s. Energy to the lamp = 7.2 W × 3.0 s = **22 J** (21.6 J), out of mgh = 29.4 J lost by the mass.

Suggested mark points (4): 1 for mgv = 9.8 W; 1 for 7.2 W **and** the efficiency; 1 for identifying the missing 2.6 W as thermal energy; 1 for 22 J using the time (or for (7.2 ÷ 9.8) × 29.4 J).

Common error: treating the lamp's power as the mechanical input, which ignores the generator's losses and gives 100% efficiency.
</details>

## Question 5 (calculation · core)

A 470 Ω resistor has a maximum safe power rating of 0.25 W.

(a) Find the largest potential difference that can safely be applied across it.
(b) Find the largest safe current.
(c) A student connects it directly across a 12 V supply. Show whether this is safe.
(d) What is the smallest resistance that could safely be connected across the 12 V supply, if its power rating is also 0.25 W?

<details>
<summary>Worked solution</summary>

1. (a) P = ΔV²/R, so ΔV_max = √(PR) = √(0.25 × 470) = **10.8 V**.
2. (b) P = I²R, so I_max = √(P/R) = √(0.25 ÷ 470) = 0.0231 A = **23 mA**. Check: (10.8 V)(0.0231 A) = 0.25 W.
3. (c) P = (12 V)² ÷ 470 Ω = **0.31 W**, which is more than 0.25 W. **Not safe**: the resistor would dissipate thermal energy faster than it is designed to and could overheat.
4. (d) R_min = ΔV²/P = (12)² ÷ 0.25 = **576 Ω**. A larger resistance would dissipate less power at 12 V.

Suggested mark points (4): 1 for ΔV_max; 1 for I_max; 1 for 0.31 W with the conclusion "not safe"; 1 for 576 Ω.

Common error in (d): thinking a **smaller** resistance is safer. At fixed ΔV, a smaller R draws more current and dissipates more power.
</details>

## Question 6 (constructed response · core)

A current in a 4.0 Ω resistor falls steadily according to I(t) = 3.0 − 0.50t, with I in amperes and t in seconds, from t = 0 until it reaches zero at t = 6.0 s.

(a) Write an expression for the power P(t) dissipated in the resistor, and find P at t = 0 and t = 3.0 s.
(b) Sketch P against t from t = 0 to t = 6.0 s, labelling the value at t = 0.
(c) Calculate the total energy dissipated.
(d) A student uses the average current, 1.5 A, to estimate the energy as (1.5 A)²(4.0 Ω)(6.0 s). Calculate this estimate and explain why it is wrong.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** P(t) = I²R = **4.0(3.0 − 0.50t)² W**. At t = 0: 4.0 × 9.0 = **36 W**. At t = 3.0 s: I = 1.5 A, so P = **9.0 W**, a quarter of the starting value even though the current has only halved.

**(b)** A curve starting at 36 W at t = 0 and falling to 0 at t = 6.0 s. It is part of a parabola, curving upward (concave up): steep at first, then flattening as it reaches zero with zero slope.

**(c)** E = ∫₀⁶ 4.0(3.0 − 0.50t)² dt. Let u = 3.0 − 0.50t, so dt = −2 du, with u going from 3.0 to 0:
E = 4.0 × 2 ∫₀³ u² du = 8.0 × [u³/3]₀³ = 8.0 × 9.0 = **72 J**.

**(d)** The estimate is (2.25)(4.0)(6.0) = **54 J**, too small. Power depends on I², and the average of I² (here 3.0 A²) is larger than the square of the average current (2.25 A²). The early, large currents contribute much more energy than the late, small ones. You must integrate P, not square an average current.

| Point | What earns it |
|---|---|
| 1 | P(t) = I²R written correctly, with 36 W and 9.0 W |
| 1 | Sketch: starts at 36 W, reaches zero at 6.0 s, concave up |
| 1 | Sets up E = ∫P dt with limits 0 and 6.0 s |
| 1 | Evaluates the integral to get 72 J |
| 1 | 54 J, with an explanation based on P ∝ I² (average of the square is not the square of the average) |

Accept expanding the bracket, 4.0(9.0 − 3.0t + 0.25t²), and integrating term by term. Accept a geometric argument for the integral if it is correct.
</details>

## Question 7 (constructed response · stretch)

A fictional fan heater runs from a 230 V supply. It has two heating elements, R₁ = 40 Ω and R₂ = 60 Ω, and a switch with four settings:

- **Low:** R₁ and R₂ in series across the supply.
- **Medium 1:** R₁ alone across the supply.
- **Medium 2:** R₂ alone across the supply.
- **High:** R₁ and R₂ each connected directly across the supply (in parallel).

(a) Calculate the total power for each setting, and rank the settings from lowest to highest power.
(b) On the Low setting, which element dissipates more power? Find the ratio of the two powers.
(c) On the High setting, which element dissipates more power? Explain why the answer is different from (b).
(d) The heater runs on High for 30 minutes. Calculate the energy transferred in joules and in kilowatt-hours.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)**
- Low: the current is the same in both elements, and their potential differences add to 230 V, so I(40 Ω) + I(60 Ω) = 230 V and I = 2.3 A. P = (230 V)(2.3 A) = **529 W**.
- Medium 1: P = (230)² ÷ 40 = **1320 W** (1322.5 W).
- Medium 2: P = (230)² ÷ 60 = **882 W**.
- High: each element has the full 230 V across it, so P = 1322.5 + 881.7 = **2200 W** (2204 W).

Ranking: Low (529 W) < Medium 2 (882 W) < Medium 1 (1320 W) < High (2200 W).

**(b)** Same current, so P = I²R. P₁ = (2.3)²(40) = 212 W and P₂ = (2.3)²(60) = 317 W. **R₂ dissipates more**; P₂/P₁ = 60/40 = **1.5**.

**(c)** On High each element has the same potential difference, 230 V, so P = ΔV²/R. P₁ = 1322.5 W and P₂ = 881.7 W, so **R₁ dissipates more**, by the same factor of 1.5. In series the elements share a current, which favours the larger R; in parallel they share a potential difference, which favours the smaller R.

**(d)** E = P t = (2204 W)(30 × 60 s) = **3.97 × 10⁶ J**. In kilowatt-hours: 3.97 × 10⁶ ÷ (3.6 × 10⁶) = **1.10 kWh** (or 2.204 kW × 0.50 h).

| Point | What earns it |
|---|---|
| 1 | Low setting: current 2.3 A from the shared current, and 529 W |
| 1 | Both Medium settings correct using ΔV²/R |
| 1 | High setting as the sum of the two element powers, and a correct ranking |
| 1 | (b) R₂ larger, ratio 1.5, using I²R with the same current |
| 1 | (c) R₁ larger, with the explanation: same ΔV, so P ∝ 1/R |
| 1 | (d) Energy in J and in kWh, consistent with each other |

Carry forward an error in a power from (a) into (d) once. Accept 1.1 kWh.
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "Power in a resistor: three forms" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-4-electric-power-study-guide/).
- **Q3 or Q7 wrong:** revisit "Predicting the brightness of bulbs" and Worked example 1.
- **Q4 incomplete:** work through Worked example 2 and Figure 2 again.
- **Q5 wrong:** practise rearranging P = I²R and P = ΔV²/R.
- **Q6 incomplete:** go through Worked example 3, step by step.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-4-electric-power-checklist/).
