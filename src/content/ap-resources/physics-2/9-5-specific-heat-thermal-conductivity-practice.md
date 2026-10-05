---
resourceId: "mb-ap-phys2-9.5-practice"
title: "Specific Heat and Thermal Conductivity: Practice Questions (Physics 2 9.5)"
description: "Seven original Marlbridge practice questions on Q = mcΔT, mixing to equilibrium, conduction rates, designing a specific heat experiment and a two-layer wall, with full solutions."
course: "physics-2"
unit: 9
topics: ["9.5"]
resourceType: "practice-questions"
prerequisites:
  - "Using Q = mcΔT and Q/Δt = kAΔT/L"
prerequisiteResources: ["mb-ap-phys2-9.5-study-guide"]
learningObjectives:
  - "Calculate energy, temperature change and specific heat with Q = mcΔT"
  - "Find a final temperature using energy conservation in an isolated system"
  - "Predict how the rate of conduction changes when the dimensions of a conductor change"
  - "Design an experiment to measure a specific heat and analyse its data with a graph"
  - "Apply the conduction equation to two layers in steady state"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "c for water = 4180 J/(kg·K). Temperature changes are the same in K and °C. Give answers to 3 significant figures unless the data justify fewer"
related: ["mb-ap-phys2-9.5-study-guide", "mb-ap-phys2-9.5-revision-notes", "mb-ap-phys2-9.5-checklist"]
next: "mb-ap-phys2-9.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Question 6 asks you to plan an experiment and plot data, so have graph paper ready."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: specific heat of water c = 4180 J/(kg·K); specific heats do not change with temperature; no substance changes state; temperature changes are the same in K and °C. Any other material values are given in the question and are chosen for the question. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

2.0 kg of a liquid with specific heat 2400 J/(kg·K) is heated from 20 °C to 35 °C. How much energy is transferred to the liquid?

- (A) 18,000 J
- (B) 72,000 J
- (C) 168,000 J
- (D) 1,480,000 J

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** ΔT = 35 °C − 20 °C = 15 K. Q = mcΔT = (2.0 kg)(2400 J/(kg·K))(15 K) = 72,000 J.

- (A) divides by the mass instead of multiplying: 2400 × 15 ÷ 2.0 = 18,000 J.
- (C) uses the final temperature, 35, instead of the temperature **change**.
- (D) converts the final temperature to kelvin (308 K) and uses it as ΔT. A change of 15 °C is a change of 15 K.
</details>

## Question 2 (multiple choice · core)

In an insulated flask, 0.20 kg of water at 70 °C is mixed with 0.60 kg of water at 10 °C. What is the final temperature of the mixture?

- (A) 25 °C
- (B) 40 °C
- (C) 55 °C
- (D) −20 °C

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Energy lost by the hot water = energy gained by the cold water. Both are water, so c cancels: 0.20(70 − T_f) = 0.60(T_f − 10). Then 14 − 0.20 T_f = 0.60 T_f − 6, so 20 = 0.80 T_f and T_f = 25 °C. Check: the hot water loses 0.20 × 4180 × 45 = 37,620 J and the cold water gains 0.60 × 4180 × 15 = 37,620 J.

- (B) is the simple average. It ignores the fact that there is three times as much cold water.
- (C) swaps the masses, as if there were more hot water than cold.
- (D) writes both changes as (T_f − T_initial) and sets them equal, which is a sign error. Any answer outside the range 10 °C to 70 °C must be wrong.
</details>

## Question 3 (multiple choice · core)

A metal rod conducts energy between two reservoirs at fixed temperatures. Its sides are insulated. The rod is replaced by a rod of the same metal that is **twice as long** and has **twice the diameter**. The reservoirs are unchanged. By what factor does the rate of energy transfer change?

- (A) × ½
- (B) × 1
- (C) × 2
- (D) × 8

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Q/Δt = kAΔT/L. Doubling the diameter multiplies the cross-sectional area by 2² = 4. Doubling the length divides the rate by 2. Overall: 4 ÷ 2 = 2, so the rate doubles. k and ΔT are unchanged.

- (A) includes the longer length but ignores the larger area.
- (B) treats a doubled diameter as a doubled area. Area depends on the diameter squared.
- (D) multiplies by the length instead of dividing: a longer rod conducts more slowly.
</details>

## Question 4 (multiple choice · core)

On a cold morning a park bench has a steel armrest and a wooden seat. Both have been outside all night. A student touches each and says the steel feels much colder. Which statement best explains this?

- (A) The steel is at a lower temperature than the wood.
- (B) Steel has a higher thermal conductivity, so energy is conducted away from the student's hand faster.
- (C) Wood has a lower thermal conductivity, so it conducts cold into the hand more slowly.
- (D) Steel has a larger specific heat, so it absorbs more energy from the hand per kelvin.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** After a night outside, both are in thermal equilibrium with the air, so they are at the same temperature. The hand is warmer, so energy flows from the hand into each material. Steel's much higher k carries energy away from the skin much faster, so the skin cools faster and feels colder.

- (A) contradicts thermal equilibrium: objects left in the same surroundings reach the same temperature.
- (C) talks about "cold" flowing. Only energy is transferred, from higher to lower temperature.
- (D) is false and misses the point. Steel's specific heat per kilogram is lower than wood's, and the sensation depends on how fast energy leaves the skin, which is set by conduction.
</details>

## Question 5 (calculation · core)

An electric kettle element supplies energy at 1.5 kW. The kettle holds 1.2 kg of water at 18 °C. It is switched on and switched off when the water reaches 90 °C, which takes 290 s.

(a) Calculate the energy needed to warm the water from 18 °C to 90 °C.
(b) Calculate the shortest possible time to do this with a 1.5 kW element.
(c) Calculate the fraction of the energy supplied by the element that ends up in the water.
(d) Suggest **two** places where the rest of the energy goes.

<details>
<summary>Worked solution</summary>

1. (a) Q = mcΔT = (1.2 kg)(4180 J/(kg·K))(72 K) = 361,152 J ≈ **3.61 × 10⁵ J**.
2. (b) If all the energy went into the water: Δt = Q/P = 361,152 J ÷ 1500 W = **241 s**.
3. (c) Energy supplied = PΔt = (1500 W)(290 s) = 435,000 J. Fraction = 361,152 ÷ 435,000 = **0.830** (83%).
4. (d) The remaining 73,800 J (about 17%) goes into (i) warming the kettle itself, its element and walls, which also need mcΔT, and (ii) energy that leaves to the room by conduction through the walls and lid and by the warm air and steam above the water.

Suggested mark points (4): 1 for Q = 3.61 × 10⁵ J with ΔT = 72 K; 1 for 241 s; 1 for 0.830 (or 83%) using the energy supplied in 290 s; 1 for two distinct, sensible destinations (warming the kettle; transfer to the surroundings).

Common error: using ΔT = 90 K. The water starts at 18 °C, not 0 °C.
</details>

## Question 6 (constructed response · core)

A student wants to measure the specific heat of a liquid, L. She has a beaker of the liquid, an immersion heater of known power 50 W, a balance, a thermometer, a stopwatch, a stirrer and some insulating material.

(a) Describe a procedure she could use. Say what she should measure and how she should reduce errors.

(b) Her results for 0.40 kg of liquid L are:

| Time t (s) | 0 | 60 | 120 | 180 | 240 | 300 |
|---|---|---|---|---|---|---|
| Temperature T (°C) | 20.0 | 23.1 | 25.9 | 29.0 | 32.1 | 35.0 |

Plot a graph of T against t, draw a best-fit line and use its slope to find the specific heat of liquid L.

(c) In a real experiment some energy escapes to the room. Explain whether this makes her value of c too large or too small.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Measure the mass of the liquid with the balance (weigh the empty beaker, then the beaker with liquid). Wrap the beaker in insulation and add a lid. Put the heater and thermometer in the liquid. Record the starting temperature, switch on the heater and start the stopwatch. Stir gently and record the temperature every 60 s for about 5 minutes. The energy supplied is Q = PΔt.

**(b)** Plot T (vertical, °C) against t (horizontal, s) with even scales that use most of the grid. The points lie close to a straight line. A best-fit line through them passes very close to (0 s, 20.0 °C) and (300 s, 35.0 °C), so its slope ≈ 15.0 K ÷ 300 s = 0.0500 K/s (a least-squares fit gives 0.0500 K/s to 3 significant figures). Since T rises at a rate P/(mc):

c = P ÷ (m × slope) = 50 W ÷ (0.40 kg × 0.0500 K/s) = **2.50 × 10³ J/(kg·K)**.

Any slope read correctly from a sensible best-fit line, between about 0.049 and 0.051 K/s, gives c between about 2450 and 2550 J/(kg·K), which is acceptable.

**(c)** If energy escapes, less than PΔt goes into the liquid, so the temperature rises less than it would. The measured slope is too small. Because c = P/(m × slope), a smaller slope gives a value of c that is **too large**.

| Point | What earns it |
|---|---|
| 1 | Measures the mass of liquid and the temperature at regular time intervals (or the total time and the temperature change) |
| 1 | At least one valid way to reduce error: insulation or lid, stirring, heater fully immersed, reading the thermometer at eye level |
| 1 | Axes labelled with quantities and units, sensible scale, points plotted correctly |
| 1 | Straight best-fit line and slope found from the line (not from one data pair), about 0.050 K/s |
| 1 | Uses slope = P/(mc) to get c ≈ 2.5 × 10³ J/(kg·K) with units |
| 1 | Energy losses → smaller temperature rise (smaller slope) → c too large, with the chain of reasoning stated |

Accept, in (b), a method that uses the line to read ΔT over a stated time interval and then c = PΔt/(mΔT). Do not award the slope point for using only the first and last table values without drawing a line.
</details>

## Question 7 (constructed response · stretch)

The wall of a small cold-storage room is made of two layers of equal area 0.60 m², pressed tightly together: a wooden board 2.0 cm thick (k = 0.12 W/(m·K)) and a foam layer 2.0 cm thick (k = 0.030 W/(m·K)). The wood faces the outside air. The outer surface of the wood is at 25 °C and the inner surface of the foam is at 5 °C. The temperatures are steady.

(a) Explain why the rate of energy transfer through the wood must equal the rate through the foam.
(b) Find the temperature at the boundary between the wood and the foam, and the rate of energy transfer through the wall.
(c) A student says: "If the foam faced the outside instead, less energy would get through." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The temperatures are steady, so the boundary between the layers is not warming up or cooling down. Its internal energy is constant, so every joule per second that enters it from the wood must leave it into the foam. So the two rates are equal.

**(b)** Let ΔT_w and ΔT_f be the temperature differences across the wood and the foam. Equal rates and equal thicknesses and areas give k_w ΔT_w = k_f ΔT_f, so 0.12 ΔT_w = 0.030 ΔT_f, which means ΔT_f = 4ΔT_w. The total is ΔT_w + ΔT_f = 25 − 5 = 20 K, so ΔT_w = **4.0 K** and ΔT_f = **16 K**.

Boundary temperature = 25 °C − 4.0 K = **21 °C**.

Rate: Q/Δt = k_w A ΔT_w / L = (0.12)(0.60)(4.0) ÷ 0.020 = **14.4 W**. Check with the foam: (0.030)(0.60)(16) ÷ 0.020 = 14.4 W.

**(c)** The claim is wrong. Swapping the order does not change either layer's k, A or L, and the total temperature difference is still 20 K. The same two equations give the same split (4.0 K across the wood, 16 K across the foam), so the rate is still **14.4 W**. Only the boundary temperature changes: it becomes 25 − 16 = 9 °C.

| Point | What earns it |
|---|---|
| 1 | Links steady temperatures to no build-up of energy at the boundary, so rate in = rate out |
| 1 | Sets up equal rates, k_w ΔT_w / L = k_f ΔT_f / L (or equivalent) |
| 1 | Uses ΔT_w + ΔT_f = 20 K to get 4.0 K and 16 K |
| 1 | Boundary temperature 21 °C |
| 1 | Rate 14.4 W with units |
| 1 | Rejects the claim **with reasoning**: same k, A, L and total ΔT give the same rate; may add that the boundary temperature becomes 9 °C |

Accept a method that treats each layer's L/(kA) as adding in series, as long as it is applied correctly. Carry forward an error in ΔT_w into the rate once.
</details>

## How did you do?

- **Q1 or Q5 wrong:** re-read "Energy to change temperature" in the [study guide](/advanced-course-resources/physics-2/9-5-specific-heat-thermal-conductivity-study-guide/). Check that you used the temperature **change**.
- **Q2 wrong:** work through Worked example 2 and the two checks in "Thermal equilibrium and mixing".
- **Q3 or Q7 wrong:** revisit "Conduction through a slab" and Worked example 3, especially the factor-of-change steps.
- **Q4 wrong:** re-read "Why thermal conductivity depends on the material".
- **Q6 incomplete:** compare your plan and graph with "Reading a temperature–energy graph" and Worked example 1.

Then tick off the [topic checklist](/advanced-course-resources/physics-2/9-5-specific-heat-thermal-conductivity-checklist/).
