---
resourceId: "mb-ap-phys2-9.3-practice"
title: "Thermal Energy Transfer and Equilibrium: Practice Questions (Physics 2 9.3)"
description: "Seven original Marlbridge practice questions on heating and cooling, thermal processes, collisions between atoms and thermal equilibrium, with full solutions."
course: "physics-2"
unit: 9
topics: ["9.3"]
resourceType: "practice-questions"
prerequisites:
  - "Describing energy transfer between systems at different temperatures"
prerequisiteResources: ["mb-ap-phys2-9.3-study-guide"]
learningObjectives:
  - "Use heating, cooling and thermal equilibrium correctly"
  - "Identify conduction, convection and radiation in a situation"
  - "Explain the hot-to-cold rule using collisions and speed distributions"
  - "Calculate a final temperature and the energy transferred for two gas samples"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "k_B = 1.38 × 10⁻²³ J/K. Gases are ideal and monatomic. Give answers to 3 significant figures unless the data justify fewer"
related: ["mb-ap-phys2-9.3-study-guide", "mb-ap-phys2-9.3-revision-notes", "mb-ap-phys2-9.3-checklist"]
next: "mb-ap-phys2-9.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Temperature, not internal energy, sets the direction of net energy transfer."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: k_B = 1.38 × 10⁻²³ J/K; the average kinetic energy of a gas atom is K_avg = (3/2)k_B T; every gas is ideal and monatomic, so the internal energy of a sample of N atoms is N × K_avg; "isolated" means no energy is exchanged with anything outside the systems named. All atom masses and speeds are invented. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

A sealed can of juice at 5 °C is taken out of a fridge and left in a room at 25 °C. Which statement is correct?

- (A) Energy is transferred from the room air to the can by thermal processes, so the can is heated.
- (B) Cold is transferred from the can to the room air, so the air is cooled.
- (C) No energy is transferred until the can reaches 25 °C.
- (D) Energy is transferred from the can to the room air, because the can's atoms are moving more slowly.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The room air is at the higher temperature, so net energy moves spontaneously from the air into the can. Energy moving into a system by thermal processes is called heating.

- (B) treats "cold" as something that flows. Only energy flows; the air is indeed cooled, but because it loses energy to the can.
- (C) has it backwards: energy transfer happens *because* the temperatures differ. When the can reaches 25 °C, the net transfer stops.
- (D) gets the direction wrong. Slower average motion means a lower temperature, so the can receives energy.
</details>

## Question 2 (multiple choice · core)

A drinks bottle has two glass walls with a vacuum between them. Which thermal process or processes can transfer energy across the vacuum gap?

- (A) Conduction only
- (B) Convection only
- (C) Radiation only
- (D) Conduction and convection, but not radiation

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Radiation is carried by electromagnetic waves, which need no matter. A vacuum contains (almost) no particles, so there is nothing to collide (conduction) and no fluid to move (convection).

- (A) Conduction needs particles colliding with their neighbours. There are none in the gap.
- (B) Convection needs a fluid that moves and carries energy. A vacuum has none.
- (D) reverses the truth: the vacuum blocks exactly these two processes and lets radiation through.
</details>

## Question 3 (multiple choice · core)

A small steel ball at 350 K is placed in thermal contact with a large steel block at 300 K. The pair is isolated. The block has more internal energy than the ball. Which statement is correct?

- (A) Net energy moves from the block to the ball, because the block has more internal energy.
- (B) Net energy moves from the ball to the block until both have the same internal energy.
- (C) Net energy moves from the ball to the block until both have the same temperature.
- (D) No net energy moves, because the larger internal energy of the block balances the higher temperature of the ball.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The direction of net energy transfer is set by temperature: the ball is hotter, so it is cooled and the block is heated. The transfer stops when the temperatures are equal, which is thermal equilibrium.

- (A) uses internal energy to decide the direction. Temperature decides it.
- (B) has the right direction but the wrong end point. At equilibrium the block, with many more atoms, still has far more internal energy than the ball.
- (D) invents a balance between two different quantities. Systems at different temperatures in thermal contact are not in equilibrium.
</details>

## Question 4 (multiple choice · core)

Two rigid boxes of the same monatomic gas are joined by a thin metal wall, and the pair is isolated. Box P holds 1.0 × 10²² atoms at 500 K. Box Q holds 4.0 × 10²² atoms at 300 K. What is the final temperature of both boxes?

- (A) 340 K
- (B) 400 K
- (C) 460 K
- (D) 300 K

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Total energy is conserved and each atom ends with the same average energy, so T_f = (N_P T_P + N_Q T_Q)/(N_P + N_Q) = (1.0 × 500 + 4.0 × 300)/5.0 = 1700/5.0 = 340 K.

- (B) is the simple average of 500 K and 300 K. It ignores that box Q has four times as many atoms.
- (C) swaps the weights, giving the 500 K box four times the influence: (4.0 × 500 + 1.0 × 300)/5.0 = 460 K.
- (D) assumes the larger box does not change temperature. Q is heated, so it must warm up a little.
</details>

## Question 5 (calculation · core)

An atom from a hot gas (mass 3.0 × 10⁻²⁶ kg) moving at +800 m/s collides head-on with an atom from a cold gas (mass 5.0 × 10⁻²⁶ kg) moving at −200 m/s. After the collision their velocities are −450 m/s and +550 m/s respectively.

(a) Show that momentum is conserved.
(b) Show that the collision is elastic.
(c) Calculate the energy transferred and state its direction.
(d) A student concludes: "This proves that energy always passes from the hot atom to the cold atom." Comment on the conclusion.

<details>
<summary>Worked solution</summary>

1. (a) Before: (3.0 × 10⁻²⁶)(800) + (5.0 × 10⁻²⁶)(−200) = 2.4 × 10⁻²³ − 1.0 × 10⁻²³ = **1.4 × 10⁻²³ kg·m/s**. After: (3.0 × 10⁻²⁶)(−450) + (5.0 × 10⁻²⁶)(550) = −1.35 × 10⁻²³ + 2.75 × 10⁻²³ = **1.4 × 10⁻²³ kg·m/s**. Equal, so momentum is conserved.
2. (b) Before: ½(3.0 × 10⁻²⁶)(800)² = 9.6 × 10⁻²¹ J and ½(5.0 × 10⁻²⁶)(200)² = 1.0 × 10⁻²¹ J; total 1.06 × 10⁻²⁰ J. After: ½(3.0 × 10⁻²⁶)(450)² = 3.0375 × 10⁻²¹ J and ½(5.0 × 10⁻²⁶)(550)² = 7.5625 × 10⁻²¹ J; total 1.06 × 10⁻²⁰ J. Total kinetic energy is unchanged, so the collision is **elastic**.
3. (c) The hot atom's kinetic energy falls by 9.6 × 10⁻²¹ − 3.0375 × 10⁻²¹ = **6.56 × 10⁻²¹ J**, and the cold atom's rises by the same amount. Energy passes **from the hot-gas atom to the cold-gas atom**.
4. (d) One collision cannot prove a rule about all collisions. Energy is **most likely** to pass from the higher-energy atom to the lower-energy one, but some collisions go the other way. The hot-to-cold rule describes the net result of a very large number of collisions.

Suggested mark points (4): 1 for both momentum totals equal at 1.4 × 10⁻²³ kg·m/s; 1 for both kinetic energy totals equal at 1.06 × 10⁻²⁰ J; 1 for 6.56 × 10⁻²¹ J with direction "hot atom to cold atom"; 1 for stating that a single collision can go either way and the rule is about the most probable outcome of many collisions.

Common error: giving the cold atom's *final* kinetic energy (7.56 × 10⁻²¹ J) as the energy transferred. The energy transferred is the *change* in kinetic energy, 6.56 × 10⁻²¹ J.
</details>

## Question 6 (constructed response · core)

Sample A of a monatomic gas is at 250 K. Sample B of the same gas, with the same number of atoms, is at 450 K. The samples are placed in thermal contact and isolated.

(a) On one set of axes, sketch the speed distribution of each sample before contact. Label each curve.
(b) Using collisions between atoms, explain why net energy moves from B to A, even though some individual collisions transfer energy from an atom of A to an atom of B.
(c) Describe the speed distributions of A and B once thermal equilibrium has been reached, and state the final temperature.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Both curves start at zero speed, rise to a peak and fall towards zero at high speed. The 450 K curve (B) peaks at a **higher speed**, is **wider** and has a **lower peak**. The areas under the two curves are equal, because the samples have the same number of atoms.

**(b)** B's atoms have a larger average kinetic energy, because K_avg = (3/2)k_B T and B is hotter. When atoms of A and B collide, energy is most likely to pass from the higher-energy atom to the lower-energy one, and the higher-energy atom is more often from B. The distributions overlap, so sometimes a fast atom of A meets a slow atom of B and energy passes from A to B. These collisions are less common. Over very many collisions, the net effect is that B loses energy and A gains it.

**(c)** At equilibrium both samples are at the **same temperature**, so they have the **same distribution**, lying between the two starting curves. With equal numbers of atoms, T_f = (250 + 450)/2 = **350 K**.

| Point | What earns it |
|---|---|
| 1 | Sketch: both curves labelled, the hotter curve peaking at a higher speed |
| 1 | Sketch: the hotter curve wider with a lower peak (equal areas) |
| 1 | B's atoms have the larger average kinetic energy, linked to B's higher temperature |
| 1 | Explains that energy is most likely to pass from higher-energy to lower-energy atoms, and that collisions the "wrong way" happen but are less frequent, so the net transfer is B → A |
| 1 | Both samples end with the same distribution, between the original two |
| 1 | Final temperature 350 K, justified by equal numbers of atoms and energy conservation |

Do not award the (b) explanation point for "heat flows from hot to cold" with no reference to atoms or collisions.
</details>

## Question 7 (constructed response · stretch)

Two rigid boxes of the same monatomic gas share a thin metal wall, and the pair is isolated.

- Box X: 3.0 × 10²² atoms at 360 K
- Box Y: 1.0 × 10²² atoms at 640 K

(a) Calculate the internal energy of each box at the start.
(b) A student says: "Box X has more internal energy, so energy will flow from X to Y." Evaluate this claim.
(c) Calculate the final temperature and the energy transferred.
(d) A second student says: "Once both boxes reach the final temperature, the atoms near the metal wall stop transferring energy." Evaluate this claim.
(e) Sketch the temperature of each box against time, from contact until long afterwards.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** U_X = (3.0 × 10²²)(3/2)(1.38 × 10⁻²³ J/K)(360 K) = **224 J** (223.56 J). U_Y = (1.0 × 10²²)(3/2)(1.38 × 10⁻²³)(640) = **132 J** (132.48 J).

**(b)** The claim is **wrong**. The direction of net transfer depends on temperature, not on total internal energy. Y is hotter, so its atoms have the larger average kinetic energy: 1.32 × 10⁻²⁰ J against 7.45 × 10⁻²¹ J for X. Net energy moves from **Y to X**.

**(c)** T_f = (3.0 × 360 + 1.0 × 640)/4.0 = 1720/4.0 = **430 K**. Energy transferred = (1.0 × 10²²)(3/2)(1.38 × 10⁻²³)(640 − 430) = **43.5 J** (43.47 J), from Y to X. Check: X gains (3.0 × 10²²)(3/2)(1.38 × 10⁻²³)(430 − 360) = 43.47 J. The same.

**(d)** The claim is **wrong**. At thermal equilibrium the atoms still move and still collide at the wall, and individual collisions still pass energy in both directions. What becomes zero is the **net** transfer: on average, the energy passing each way is equal.

**(e)** X's curve starts at 360 K and rises; Y's curve starts at 640 K and falls. Both are steepest at the start and level off at 430 K. Y changes by 210 K and X by only 70 K, because X has three times as many atoms.

| Point | What earns it |
|---|---|
| 1 | Both internal energies correct (224 J and 132 J) |
| 1 | Rejects the claim in (b), stating that temperature (average kinetic energy per atom), not total internal energy, sets the direction |
| 1 | Final temperature 430 K |
| 1 | Energy transferred 43.5 J, with direction Y → X |
| 1 | (d): collisions and exchange continue; only the net transfer is zero |
| 1 | (e): curves meet at 430 K, steepest at the start, with Y's change three times the size of X's |

Accept (c) by first finding the total energy (356.04 J) and dividing by (3/2)k_B(N_X + N_Y). Carry forward an error from (a) into (c) once.
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "Systems in thermal contact" and the end of "Why energy flows from hot to cold" in the [study guide](/advanced-course-resources/physics-2/9-3-thermal-energy-transfer-equilibrium-study-guide/). Ask "which is hotter?", not "which has more energy?".
- **Q2 wrong:** revisit the "Three thermal processes" table.
- **Q4 or Q7 wrong:** work through Worked example 2 again.
- **Q5 or Q6 incomplete:** compare Worked example 1 (a) and (b), and Figure 2.

Then tick off the [topic checklist](/advanced-course-resources/physics-2/9-3-thermal-energy-transfer-equilibrium-checklist/).
