---
resourceId: "mb-ap-phys2-u9-review"
title: "Thermodynamics: Mixed Unit Review (Physics 2 Unit 9)"
description: "Connect the thermodynamics topics: the big ideas, one summary table and six original questions that combine kinetic theory, gas laws, the first law, conduction and entropy."
course: "physics-2"
unit: 9
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 9.1 to 9.6"
  - "You have tried the Unit 9 diagnostic and revisited any weak topics"
prerequisiteResources: ["mb-ap-phys2-u9-diagnostic"]
learningObjectives:
  - "Link the atomic picture of temperature and pressure to the ideal gas law and to internal energy"
  - "Combine the ideal gas law, the first law and PV diagrams in one multi-step problem"
  - "Use specific heat, conduction and thermal equilibrium together with energy conservation"
  - "Describe entropy changes of a system and its surroundings in processes you have also analysed with numbers"
  - "Explain answers in words, with the reasoning a written exam answer needs"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "k_B = 1.38 × 10⁻²³ J/K, R = 8.31 J/(mol·K), c for water = 4180 J/(kg·K). All gases are ideal and monatomic. Temperatures in kelvin. Round only at the end"
related: ["mb-ap-phys2-u9-diagnostic", "mb-ap-phys2-9.1-checklist", "mb-ap-phys2-9.2-checklist", "mb-ap-phys2-9.3-checklist", "mb-ap-phys2-9.4-checklist", "mb-ap-phys2-9.5-checklist", "mb-ap-phys2-9.6-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Temperature is average atomic kinetic energy, so it links kinetic theory, PV = nRT and U = (3/2)nRT."
  - "The first law ΔU = Q + W is energy conservation; Q can come from conduction or mixing, and W from a moving piston."
  - "U and S are state functions; Q and W depend on the path."
  - "Temperature, not internal energy, sets the direction of net energy flow, and that flow raises total entropy."
  - "Questions 1–2 are multiple choice; Questions 3–6 are multi-part and each combines at least three topics."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

The questions in this review are **original Marlbridge practice questions**, not past exam questions, and each combines two or more topics. The rubrics are a **suggested Marlbridge rubric**, not official scoring. Data: k_B = 1.38 × 10⁻²³ J/K; R = 8.31 J/(mol·K); c for water = 4180 J/(kg·K); every gas is ideal and monatomic, so U = (3/2)nRT = (3/2)PV; W is the work done **on** the gas, so ΔU = Q + W. All data are invented.

## Big ideas of the unit

- **Large-scale properties come from atoms.** Pressure is the force per area from atoms changing momentum at a surface; temperature measures their average kinetic energy ([Topic 9.1](/advanced-course-resources/physics-2/9-1-kinetic-theory-temperature-pressure-study-guide/)).
- **One law links the gas variables.** PV = nRT = Nk_BT, with T in kelvin ([Topic 9.2](/advanced-course-resources/physics-2/9-2-ideal-gas-law-study-guide/)).
- **Temperature is the thread.** K_avg = (3/2)k_BT, PV = nRT and U = (3/2)nRT all contain T, so one change in T affects rms speed, pressure and internal energy.
- **Temperature sets the direction of flow.** Net energy flows from hotter to colder until thermal equilibrium, the most probable result of very many collisions ([Topic 9.3](/advanced-course-resources/physics-2/9-3-thermal-energy-transfer-equilibrium-study-guide/)).
- **The first law is energy conservation.** ΔU = Q + W. On a PV diagram the area under the path gives the size of W; the direction gives its sign ([Topic 9.4](/advanced-course-resources/physics-2/9-4-first-law-of-thermodynamics-study-guide/)).
- **Q can be calculated.** Q = mcΔT gives how much energy a temperature change needs; Q/Δt = kAΔT/L gives how fast conduction delivers it ([Topic 9.5](/advanced-course-resources/physics-2/9-5-specific-heat-thermal-conductivity-study-guide/)).
- **State functions and path quantities.** U and S depend only on the state; W and Q depend on the path.
- **The second law sets the direction.** The total entropy of an isolated system never decreases, though one part can lose entropy when energy leaves it ([Topic 9.6](/advanced-course-resources/physics-2/9-6-entropy-second-law-thermodynamics-study-guide/)).

## Key relationships and methods

| Idea | Relationship or method | Watch out for |
|---|---|---|
| Pressure (9.1) | Δp = 2m v cos θ per bounce; P = F⊥/A | Using mv, or v instead of v cos θ |
| Temperature and speed (9.1) | K_avg = (3/2)k_BT = ½m v_rms² | v_rms ∝ √T, not T |
| Ideal gas (9.2) | PV = nRT = Nk_BT; P₁V₁/T₁ = P₂V₂/T₂ | Celsius, litres, N used with R |
| Equilibrium (9.3) | Net flow hot → cold until temperatures are equal | Deciding by internal energy |
| Internal energy (9.4) | U = (3/2)nRT = (3/2)PV | U changes only if T changes |
| First law (9.4) | ΔU = Q + W; W = −PΔV; size of W = area under path | Sign of W |
| Cycles (9.4, 9.6) | ΔU = 0, ΔS_gas = 0; Q_net = −W_net | Clockwise loop: W_net < 0 |
| Specific heat (9.5) | Q = mcΔT; energy lost = energy gained | Final T lies between the starting values |
| Conduction (9.5) | Q/Δt = kAΔT/L | Thicker slab, smaller rate |
| Second law (9.6) | ΔS_total ≥ 0 for an isolated system | A closed system's entropy can fall |

## Question 1 (multiple choice · mixed)

*Topics 9.1, 9.2, 9.4.* A gas is in a sealed, rigid container. It is heated until its internal energy has doubled. Which row is correct?

- (A) The pressure doubles and the rms speed of the atoms is multiplied by 1.41.
- (B) The pressure doubles and the rms speed of the atoms doubles.
- (C) The pressure and the rms speed are each multiplied by 1.41.
- (D) The pressure stays the same and the rms speed is multiplied by 1.41.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** U = (3/2)nRT, so doubling U doubles the kelvin temperature. With n and V fixed, P ∝ T, so P doubles. v_rms ∝ √T, so it rises by √2 = 1.41.

- (B) treats speed as proportional to T. Kinetic energy is; speed goes as √T.
- (C) applies the square root to the pressure too. P ∝ T at constant volume.
- (D) forgets the container is rigid.
</details>

## Question 2 (multiple choice · mixed)

*Topics 9.4, 9.6.* The gas in an engine goes once around a **clockwise** cycle on a PV diagram and returns to its starting state. Which row is correct for the gas over the cycle?

- (A) ΔU = 0, ΔS_gas = 0, W_net < 0, Q_net > 0
- (B) ΔU = 0, ΔS_gas > 0, W_net < 0, Q_net > 0
- (C) ΔU = 0, ΔS_gas = 0, W_net > 0, Q_net < 0
- (D) ΔU = 0, ΔS_gas = 0, W_net = 0, Q_net = 0

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** U and S are state functions and the gas returns to its start, so both changes are zero. On a clockwise loop the expansion happens at higher pressure than the compression, so the gas does net work: W_net < 0, and Q_net = −W_net > 0.

- (B) applies "entropy increases" to the gas. The **total** entropy of gas and reservoirs increases; the gas's own entropy returns to its start.
- (C) describes a counterclockwise loop, or flips the sign of W.
- (D) treats W and Q as state functions. The enclosed area is not zero.
</details>

## Question 3 (constructed response · mixed)

*Topics 9.1, 9.2, 9.4.* A gas in a cylinder starts in state A: 2.0 × 10⁵ Pa, 1.5 × 10⁻³ m³, 300 K. It is compressed at constant pressure to state B (1.0 × 10⁻³ m³). The piston is then locked and the gas is heated to state C (4.0 × 10⁵ Pa).

(a) Calculate the amount of gas, and the temperatures at B and C.
(b) Calculate W, ΔU and Q for A → B and for B → C.
(c) An identical sample goes from A to C along a straight line on the PV diagram. Calculate W and Q for this path. Explain why ΔU is the same as for A → B → C but Q is not.
(d) By what factor is the rms speed of the atoms at C greater than at A?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** n = PV/(RT) = 300 J ÷ (8.31 × 300) J/mol = **0.120 mol**. For a fixed amount of gas T ∝ PV: T_B = 300 K × (200 J ÷ 300 J) = **200 K**; T_C = 300 K × (400 J ÷ 300 J) = **400 K**.

**(b)** U = (3/2)PV: U_A = 450 J, U_B = 300 J, U_C = 600 J.

| Step | W (J) | ΔU (J) | Q (J) |
|---|---|---|---|
| A → B | −(2.0 × 10⁵)(−0.5 × 10⁻³) = +100 | −150 | −250 |
| B → C | 0 | +300 | +300 |

**(c)** Area under the line (a trapezium): ½(2.0 × 10⁵ + 4.0 × 10⁵)(0.5 × 10⁻³) = 150 J. The gas is compressed, so **W = +150 J**. ΔU = U_C − U_A = +150 J, so **Q = 0**. Via B, W = +100 J and Q = +50 J. U is a state function, so ΔU depends only on A and C. W is the area under the path, which differs, so Q = ΔU − W differs.

**(d)** v_rms ∝ √T: √(400/300) = **1.15**.

| Point | What earns it |
|---|---|
| 1 | n = 0.120 mol |
| 1 | T_B = 200 K and T_C = 400 K |
| 1 | A → B: W = +100 J (positive for a compression) |
| 1 | Correct ΔU and Q for both steps |
| 1 | Straight path: W = +150 J and Q = 0 |
| 1 | U depends only on the state; W (and so Q) depends on the path |
| 1 | Factor 1.15 from v_rms ∝ √T |

Total: 7 points. Q = 0 here is a **net** value; the path is not adiabatic, because energy enters on part of it and leaves on another. Carry forward an error in n or T once.
</details>

## Question 4 (constructed response · mixed)

*Topics 9.3, 9.5, 9.6.* To find the specific heat of a metal, a student heats a 0.20 kg block to 95.0 °C. She moves it quickly into 0.30 kg of water at 20.0 °C in an insulated cup and stirs. Everything ends at 24.0 °C.

(a) Calculate the specific heat of the metal, ignoring the cup.
(b) The cup also warms from 20.0 °C to 24.0 °C, and its heat capacity (mc) is 40 J/K. Does ignoring the cup make the value in (a) too large or too small? Calculate a corrected value.
(c) Using collisions between particles, explain why net energy flows from the block to the water, and why the net flow stops at 24.0 °C.
(d) Describe the entropy changes of the block, of the water, and of block + water + cup together.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Energy gained by water = (0.30 kg)(4180 J/(kg·K))(4.0 K) = 5016 J. This is the energy the block lost: c = 5016 J ÷ [(0.20 kg)(71.0 K)] = **353 J/(kg·K)**.

**(b)** The block also gave (40 J/K)(4.0 K) = 160 J to the cup, so it really lost 5176 J. Ignoring the cup makes c **too small**. Corrected c = 5176 J ÷ [(0.20 kg)(71.0 K)] = **365 J/(kg·K)**, about 3% higher.

**(c)** The block's particles have the larger average kinetic energy. At the boundary, energy most often passes from the higher-energy particle to the lower-energy one, usually a block particle to a water particle. Some collisions go the other way, but the net flow is block → water. At 24.0 °C the average kinetic energies are equal, so the flows each way balance: collisions continue, but the net transfer is zero.

**(d)** The block is cooled, so its entropy **decreases**. The water is heated, so its entropy **increases**. Block, water and cup form an isolated system with energy flowing across a temperature difference, an irreversible process, so the **total entropy increases**.

| Point | What earns it |
|---|---|
| 1 | Energy gained by water 5016 J, using ΔT = 4.0 K |
| 1 | c = 353 J/(kg·K), using the block's ΔT = 71.0 K |
| 1 | Too small, because the block's true energy loss is larger |
| 1 | Corrected c = 365 J/(kg·K) |
| 1 | (c) Block particles have the higher average kinetic energy, so energy usually passes block → water; a net effect, not every collision |
| 1 | (c) At equal temperatures the flows balance, though collisions continue |
| 1 | (d) Block's entropy falls, water's rises, total rises, linked to an irreversible process in an isolated system |

Total: 7 points. "Heat flows from hot to cold" alone earns no (c) points.
</details>

## Question 5 (constructed response · mixed)

*Topics 9.1, 9.2, 9.4, 9.5.* A rigid glass flask of volume 2.5 × 10⁻³ m³ holds 0.10 mol of gas at 300 K. It is lowered into a warm bath. The glass wall has total area 0.020 m², thickness 5.0 mm and thermal conductivity 1.0 W/(m·K). In a simple model, the temperature difference across the glass stays at 0.25 K for 60 s. Ignore the energy needed to warm the glass.

(a) Calculate the rate of energy conduction through the glass.
(b) State W and calculate Q and ΔU for the gas over the 60 s.
(c) Calculate the temperature and pressure of the gas after 60 s.
(d) Explain, in terms of the atoms, why the pressure has risen. Include the factor by which their rms speed has changed.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Q/Δt = kAΔT/L = (1.0)(0.020)(0.25) ÷ (5.0 × 10⁻³) = **1.0 W**.

**(b)** The flask is rigid, so **W = 0**. Q = (1.0 W)(60 s) = **60 J**, so ΔU = **+60 J**.

**(c)** ΔT = ΔU ÷ (3/2)nR = 60 J ÷ (1.5 × 0.10 × 8.31 J/K) = 48.1 K, so T = **348 K**. P = nRT/V = (0.10)(8.31)(348.1) ÷ (2.5 × 10⁻³) = **1.16 × 10⁵ Pa**, up from 9.97 × 10⁴ Pa.

**(d)** The average kinetic energy of the atoms rose with T, and v_rms ∝ √T rose by √(348.1/300) = **1.08**. Faster atoms change momentum by more at each collision with the wall, and they hit the wall more often. N and the wall area are unchanged, so the force per unit area increases.

| Point | What earns it |
|---|---|
| 1 | Rate 1.0 W, with L in metres |
| 1 | W = 0 because the flask is rigid, and Q = ΔU = 60 J |
| 1 | Final temperature 348 K |
| 1 | Final pressure 1.16 × 10⁵ Pa |
| 1 | v_rms factor 1.08 |
| 1 | Bigger momentum change per collision **and** more frequent collisions |

Total: 6 points. Accept P₂ = P₁ × T₂/T₁ or ΔP = (2/3)ΔU/V = 1.6 × 10⁴ Pa.
</details>

## Question 6 (constructed response · mixed)

*Topics 9.1, 9.2, 9.4, 9.6.* The gas in an engine goes round this cycle:

- A → B: constant volume, from (2.0 × 10⁻³ m³, 1.0 × 10⁵ Pa) to (2.0 × 10⁻³ m³, 2.0 × 10⁵ Pa)
- B → C: constant pressure, to (4.0 × 10⁻³ m³, 2.0 × 10⁵ Pa)
- C → A: a straight line on the PV diagram back to A

(a) Sketch the cycle with arrows. Calculate the net work done on the gas in one cycle.
(b) Calculate W, ΔU and Q for each step. Find the energy taken in by heating per cycle and the fraction of it that becomes net work done by the gas.
(c) Which state has the highest temperature? Find T_C/T_A and the ratio of the rms speeds at C and A.
(d) State ΔS for the gas over a full cycle. Explain why the gas's entropy must decrease during part of every cycle, and why this does not break the second law.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The loop goes up (A → B), right (B → C), then down-left back to A: **clockwise**. Enclosed triangle: ½(2.0 × 10⁻³ m³)(1.0 × 10⁵ Pa) = 100 J, so **W_net = −100 J**.

**(b)** U = (3/2)PV: U_A = 300 J, U_B = 600 J, U_C = 1200 J.

| Step | W (J) | ΔU (J) | Q (J) |
|---|---|---|---|
| A → B | 0 | +300 | +300 |
| B → C | −(2.0 × 10⁵)(2.0 × 10⁻³) = −400 | +600 | +1000 |
| C → A | +½(2.0 + 1.0) × 10⁵ × 2.0 × 10⁻³ = +300 | −900 | −1200 |
| **Cycle** | **−100** | **0** | **+100** |

Energy taken in = 300 + 1000 = **1300 J**. Fraction = 100 ÷ 1300 = **0.077** (7.7%).

**(c)** T ∝ PV, which is largest at C (800 J), so **C** is hottest. T_C/T_A = 800 ÷ 200 = **4.0**, so the rms speed ratio is √4.0 = **2.0**.

**(d)** **ΔS_gas = 0**, because entropy is a state function and the gas returns to its start. Energy enters by heating in A → B and B → C, raising the gas's entropy, so it must fall in C → A, where 1200 J leaves. The gas is a closed system, not an isolated one. The cooler surroundings that receive the 1200 J gain at least as much entropy as the gas loses, so the total does not decrease.

| Point | What earns it |
|---|---|
| 1 | Sketch with correct corners and clockwise arrows |
| 1 | W_net = −100 J, sign linked to the clockwise direction |
| 1 | Correct W for all three steps |
| 1 | Correct ΔU and Q for all three steps, with ΔU summing to zero |
| 1 | 1300 J taken in and fraction 0.077 |
| 1 | C hottest, T_C/T_A = 4.0 and rms ratio 2.0 |
| 1 | ΔS_gas = 0 (state function), so the rise during heating must be matched by a fall when energy leaves |
| 1 | The gas is not isolated; the surroundings gain at least as much entropy |

Total: 8 points. Carry forward an error in a U value once.
</details>

## How did you do?

Questions 1–2 are worth 1 point each and Questions 3–6 are worth 28 in total. There is no pass mark: use the checklist that matches the points you lost.

- **rms speed, pressure from atoms, temperature ratios** (Q1, 3(d), 5(d), 6(c)): [Topic 9.1 checklist](/advanced-course-resources/physics-2/9-1-kinetic-theory-temperature-pressure-checklist/)
- **finding n, T or P** (Q3(a), 5(c)): [Topic 9.2 checklist](/advanced-course-resources/physics-2/9-2-ideal-gas-law-checklist/)
- **direction of flow and equilibrium** (Q4(c)): [Topic 9.3 checklist](/advanced-course-resources/physics-2/9-3-thermal-energy-transfer-equilibrium-checklist/)
- **signs of W and Q, PV areas, cycles** (Q2, 3, 6): [Topic 9.4 checklist](/advanced-course-resources/physics-2/9-4-first-law-of-thermodynamics-checklist/)
- **Q = mcΔT or conduction** (Q4(a)–(b), 5(a)): [Topic 9.5 checklist](/advanced-course-resources/physics-2/9-5-specific-heat-thermal-conductivity-checklist/)
- **entropy** (Q2, 4(d), 6(d)): [Topic 9.6 checklist](/advanced-course-resources/physics-2/9-6-entropy-second-law-thermodynamics-checklist/)

For a quicker topic-by-topic check, take the [Unit 9 diagnostic](/advanced-course-resources/physics-2/unit-9-diagnostic/).
