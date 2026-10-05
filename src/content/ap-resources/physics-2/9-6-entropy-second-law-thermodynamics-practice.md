---
resourceId: "mb-ap-phys2-9.6-practice"
title: "Entropy and the Second Law of Thermodynamics: Practice Questions (Physics 2 9.6)"
description: "Seven original Marlbridge practice questions on entropy, the second law, state functions, equilibrium and closed systems, with full solutions and suggested mark points."
course: "physics-2"
unit: 9
topics: ["9.6"]
resourceType: "practice-questions"
prerequisites:
  - "Describing entropy changes for isolated and closed systems"
prerequisiteResources: ["mb-ap-phys2-9.6-study-guide"]
learningObjectives:
  - "Apply the second law to decide whether a process can happen in an isolated system"
  - "Describe and justify the entropy change of a closed system and of its surroundings"
  - "Use the state-function property to compare entropy changes along different paths"
  - "Represent the approach to equilibrium on temperature and entropy graphs"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "c for water = 4180 J/(kg·K); R = 8.31 J/(mol·K). Entropy is never calculated, only described. Give numerical answers to 3 significant figures unless the data justify fewer"
related: ["mb-ap-phys2-9.6-study-guide", "mb-ap-phys2-9.6-revision-notes", "mb-ap-phys2-9.6-checklist"]
next: "mb-ap-phys2-9.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2", "exam-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Before every entropy statement, say which system you mean and whether it is isolated or closed."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: c for water = 4180 J/(kg·K); R = 8.31 J/(mol·K); gases are ideal; W is the work done **on** the gas, so ΔU = Q + W. "Insulated" means no energy is transferred by heating through the walls. Entropy is described in words, never calculated. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

Which statement about the total entropy of an isolated system is correct?

- (A) It can never decrease, and it stays constant only if every process in the system is reversible.
- (B) It always stays constant, because the total energy of an isolated system is constant.
- (C) It can decrease if part of the system cools down.
- (D) It always increases, even after the system has reached equilibrium.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** This is the second law. Real (irreversible) processes raise the total entropy; only the ideal reversible limit keeps it constant.

- (B) confuses entropy with energy. Energy is conserved, but entropy is not: it increases in every real process.
- (C) mixes up a part with the whole. One part can lose entropy as it cools, but other parts gain more, so the total does not fall.
- (D) ignores equilibrium. At equilibrium the entropy is already at its maximum, so it stops changing.
</details>

## Question 2 (multiple choice · core)

A tray of water is placed in a freezer and turns to ice. Which statement is correct?

- (A) The entropy of the water decreases; the total entropy of the water, freezer, room and power supply increases.
- (B) The entropy of the water increases, because the freezer does work on the system.
- (C) The entropy of the water decreases, and so does the total entropy, which shows that a freezer breaks the second law.
- (D) The entropy of the water decreases, and the total entropy stays constant because energy is conserved.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The water is a closed system. Energy leaves it by cooling, and its entropy can fall. The freezer passes this energy, plus the work from its motor, to the room. The room's entropy rises by more than the water's falls, so the total entropy of the larger isolated system increases.

- (B) gets the direction wrong for the water. Energy leaves the water, and freezing it into a regular solid lowers its entropy.
- (C) has the water right but the total wrong. The total entropy of an isolated system cannot fall, so a working freezer does not lower it and does not break the second law.
- (D) uses energy conservation to reason about entropy. A real freezer runs irreversible processes, so the total entropy increases.
</details>

## Question 3 (multiple choice · core)

An ideal gas is taken from state X to state Y by path 1 (constant pressure, then constant volume) and, separately, from X to Y by path 2 (a straight line on the PV diagram). Which row compares the two paths correctly?

- (A) ΔU and ΔS_gas are the same for both paths; W and Q are different.
- (B) ΔU, W and Q are the same for both paths; ΔS_gas is different.
- (C) ΔU is the same for both paths; ΔS_gas, W and Q are all different.
- (D) W and Q are the same for both paths; ΔU and ΔS_gas are different.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** U and S are state functions: their changes depend only on X and Y. W is the area under the path, which differs between the paths, so Q = ΔU − W also differs.

- (B) swaps the roles: it treats W and Q as path-independent and S as path-dependent.
- (C) correctly treats U as a state function but forgets that S is one too.
- (D) treats W and Q as fixed by the end points. The areas under the two paths are different.
</details>

## Question 4 (multiple choice · core)

A rigid, insulated container is divided into two equal chambers. One chamber holds an ideal gas; the other is empty. The divider is removed and the gas fills the whole container. Which row is correct for the gas?

- (A) Q = 0, ΔU = 0, and the entropy of the gas increases
- (B) Q = 0, ΔU = 0, and the entropy of the gas does not change
- (C) Q = 0, ΔU < 0, and the entropy of the gas increases
- (D) Q > 0, ΔU = 0, and the entropy of the gas increases

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The container is insulated, so Q = 0. The gas pushes on nothing as it rushes into the empty chamber, so W = 0. Then ΔU = 0 and, for an ideal gas, T is unchanged. The gas spreads into twice the volume, so its entropy increases. This is a free expansion: irreversible, and the gas never gathers back by itself.

- (B) assumes that no heating means no entropy change. Entropy depends on the state, and the state has changed.
- (C) assumes the expanding gas does work and cools. With nothing to push against, W = 0.
- (D) assumes an entropy increase needs heating. The walls are insulated, so Q = 0.
</details>

## Question 5 (calculation · core)

0.20 kg of water at 70 °C is poured into 0.30 kg of water at 20 °C in an insulated flask. Ignore the flask's own heat capacity.

(a) Calculate the final temperature.
(b) Calculate the energy transferred from the hot water to the cold water.
(c) Describe the entropy change of the hot water, the cold water and the total. Justify your answer.
(d) Explain why the mixture never separates by itself back into water at 70 °C and water at 20 °C, even though that would conserve energy.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

1. (a) Energy lost by hot water = energy gained by cold water: (0.20)(4180)(70 − T_f) = (0.30)(4180)(T_f − 20). The 4180 cancels: T_f = (0.20 × 70 + 0.30 × 20) ÷ 0.50 = **40 °C**.
2. (b) Q = mcΔT = (0.20 kg)(4180 J/(kg·K))(30 K) = **2.51 × 10⁴ J** (25 080 J). Check: (0.30)(4180)(20) = 25 080 J.
3. (c) The hot water is cooled, so its entropy **decreases**. The cold water is heated, so its entropy **increases**. The insulated flask makes the two waters an isolated system, and mixing at different temperatures is irreversible. So the **total entropy increases**: the cold water's gain exceeds the hot water's loss.
4. (d) Separating again would mean energy flowing spontaneously from the cooler part to the hotter part. That would lower the total entropy of an isolated system, which the second law forbids. The mixture is at equilibrium, where its entropy is already at its maximum.

| Point | What earns it |
|---|---|
| 1 | T_f = 40 °C from energy lost = energy gained |
| 1 | Q = 2.51 × 10⁴ J (or 2.5 × 10⁴ J) |
| 1 | Hot water's entropy decreases and cold water's increases, each linked to cooling or heating |
| 1 | Total entropy increases, **because** the system is isolated and the process is irreversible (second law) |
| 1 | (d) Reverse would lower total entropy of an isolated system; reference to the second law or to maximum entropy at equilibrium |

Do not award the (d) point for "energy would not be conserved": it would be. Accept "energy does not flow spontaneously from cold to hot" only if it is linked to entropy or the second law.
</details>

## Question 6 (constructed response · core)

Two identical metal blocks, one at 360 K and one at 280 K, are placed in contact inside an insulated box at time t = 0. They reach equilibrium after some time.

(a) On one set of axes, sketch the temperature of each block against time. Label each curve and mark the final temperature.
(b) On a second set of axes, sketch the total entropy of the two blocks against time.
(c) Explain the shape of your graph in (b), including why it stops changing.
(d) A student says: "The hotter block's entropy went down, so the second law was broken." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The blocks are identical, so they end at the average temperature: (360 + 280) ÷ 2 = **320 K**. The hot block's curve falls from 360 K and the cold block's rises from 280 K. Both change quickly at first, then level off at 320 K from opposite sides without crossing.

**(b)** Total entropy rises, steeply at first, then levels off at a maximum when the temperatures become equal. It never falls.

**(c)** While there is a temperature difference, energy flows from hot to cold. This is irreversible, so the total entropy of the isolated box increases. As the temperature difference shrinks, the flow slows, so S rises more slowly. At equilibrium there is no net flow, the entropy is at its maximum, and nothing changes any more.

**(d)** The student is right that the hot block's entropy falls: energy leaves it. But each block alone is a closed system, and the second law limits only the **total** entropy of an isolated system. The cold block's entropy rises by more, so the total increases. The second law is obeyed.

| Point | What earns it |
|---|---|
| 1 | (a) Both temperature curves level off at 320 K from opposite sides, without crossing, labelled |
| 1 | (b) Entropy curve rises and levels off; never decreases |
| 1 | (c) Rise linked to irreversible energy flow across a temperature difference in an isolated system |
| 1 | (c) Levelling off linked to equilibrium: no net flow, entropy at its maximum |
| 1 | (d) Rejects the claim: the block is a closed system; the second law applies to the total, which increases |

Do not award the first (c) point for "entropy always increases" without reference to the isolated system.
</details>

## Question 7 (constructed response · stretch)

In each cycle of a heat engine, the working gas takes in 500 J by heating from a hot reservoir, does 150 J of net work on its surroundings and gives energy to a cold reservoir. The gas ends each cycle in its starting state.

(a) Use the first law to calculate the energy the gas gives to the cold reservoir in each cycle.
(b) State ΔU and ΔS for the gas over one cycle. Justify each.
(c) A student says: "The gas's entropy change is zero, so running this engine causes no entropy increase anywhere." Evaluate this claim.
(d) An inventor claims a new engine that takes 500 J from the hot reservoir and does 500 J of work each cycle, with no energy to the cold reservoir. Use entropy to explain why this is impossible.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Over a cycle ΔU = 0, so Q_net = −W_net. The gas does 150 J of work, so W_net = −150 J and Q_net = +150 J. It takes in 500 J, so it gives out 500 − 150 = **350 J** to the cold reservoir.

**(b)** ΔU = **0** and ΔS_gas = **0**. Both U and S are state functions, and the gas returns to its starting state.

**(c)** The claim is wrong. The gas is only part of the system. The hot reservoir loses energy, so its entropy falls. The cold reservoir gains 350 J, so its entropy rises. For a real engine (friction, heating across temperature differences) the processes are irreversible, so the total entropy of gas + reservoirs + surroundings **increases** each cycle. Only an ideal reversible engine would leave the total unchanged.

**(d)** In the proposed engine the hot reservoir still loses energy, so its entropy falls. The gas returns to its start, so ΔS_gas = 0. Work done on the surroundings (for example lifting a load) does not spread energy out, so it adds no entropy. Nothing gains entropy to balance the hot reservoir's loss, so the total entropy of an isolated system would decrease. The second law forbids this, so some energy must go to the cold reservoir.

| Point | What earns it |
|---|---|
| 1 | (a) Uses ΔU_cycle = 0 to get 350 J to the cold reservoir |
| 1 | (b) ΔU = 0 and ΔS_gas = 0, justified by "state function, same start and end state" |
| 1 | (c) Hot reservoir's entropy falls and cold reservoir's rises |
| 1 | (c) Total entropy increases for a real (irreversible) engine; constant only in the reversible limit |
| 1 | (d) Identifies that the hot reservoir's entropy decreases with nothing to balance it (ΔS_gas = 0; work adds no entropy) |
| 1 | (d) Concludes the total entropy of an isolated system would fall, which the second law forbids |

Carry an error in (a) forward without further penalty. In (c), "the engine gets warm" with no link to entropy earns no credit.
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "The second law" and "Isolated systems and closed systems" in the [study guide](/advanced-course-resources/physics-2/9-6-entropy-second-law-thermodynamics-study-guide/), and look again at Figure 2.
- **Q3 or Q4 wrong:** revisit "Entropy is a state function" and Worked example 2.
- **Q5 or Q6 incomplete:** work through Worked example 1 and Figure 1 again.
- **Q7 incomplete:** read the background note on engines, then try (c) and (d) again.

Then tick off the [topic checklist](/advanced-course-resources/physics-2/9-6-entropy-second-law-thermodynamics-checklist/).
