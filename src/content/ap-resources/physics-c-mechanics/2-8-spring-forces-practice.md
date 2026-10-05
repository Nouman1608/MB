---
resourceId: "mb-ap-physcm-2.8-practice"
title: "Spring Forces: Practice Questions (Physics C: Mechanics 2.8)"
description: "Seven original Marlbridge practice questions on spring forces: Hooke's law with signs, hanging blocks, series and parallel springs, cut springs, data analysis and a spring with mass."
course: "physics-c-mechanics"
unit: 2
topics: ["2.8"]
resourceType: "practice-questions"
prerequisites:
  - "Newton's second law and free-body diagrams"
  - "Integrating a simple polynomial (Topic 1.2)"
prerequisiteResources: ["mb-ap-physcm-2.8-study-guide"]
learningObjectives:
  - "Calculate a spring force with its direction using F_s,x = −kx"
  - "Distinguish the spring force from the net force on a hanging block"
  - "Find and derive equivalent spring constants for series and parallel springs, and predict factors of change"
  - "Find k from force–extension data and judge whether a spring is ideal"
  - "Explain and estimate the effect of a spring's own mass"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-2.8-study-guide", "mb-ap-physcm-2.8-revision-notes", "mb-ap-physcm-2.8-checklist"]
next: "mb-ap-physcm-2.8-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis. Springs are ideal unless the question says otherwise."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. Springs are ideal unless stated. Use g = 9.8 m/s². Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Take **+x to the right**. A spring with k = 250 N/m is fixed to a wall on its left end. A block on its right end is pushed left so that the spring is compressed by 4.0 cm and held still. What force does the spring exert on the block?

- (A) −10 N
- (B) +5.0 N
- (C) +10 N
- (D) +1.0 × 10³ N

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** With the origin at the relaxed position, x = −0.040 m. F_s,x = −kx = −250 × (−0.040) = +10 N. A compressed spring pushes the block away from the wall, back towards the relaxed position.

- (A) has the right size but the wrong direction. It points the force the way the block was pushed, not back towards the relaxed length.
- (B) uses ½kx, which is not a force. (That kind of expression appears in Unit 3, in energy.)
- (D) uses 4.0 instead of 0.040 m. With k in N/m, the compression must be in metres.
</details>

## Question 2 (multiple choice · core)

Three identical ideal springs, each of constant k, are used to hold the same block at rest. First they are joined end to end in series; then they are arranged side by side in parallel, sharing the load equally. What is the ratio of the extension in series to the extension in parallel?

- (A) 1/9
- (B) 1/3
- (C) 3
- (D) 9

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** In series, 1/k_eq = 3/k, so k_eq = k/3. In parallel, k_eq = 3k. For the same load F, extension = F/k_eq, so the ratio is (3F/k) ÷ (F/3k) = **9**.

- (A) inverts the ratio. A series chain is softer, so it stretches more, not less.
- (B) compares the parallel arrangement with a single spring (one-third of the single-spring extension) instead of with the series arrangement.
- (C) compares the series arrangement with a single spring (3 times the single-spring extension) and misses that the parallel extension is also different, one-third of it.
</details>

## Question 3 (multiple choice · core)

Take **+y upward**. A 0.40 kg block hangs from a vertical spring with k = 40 N/m and is set bouncing. At one instant the spring is stretched by 0.050 m from its relaxed length. Which describes the spring force on the block and the net force on it at that instant?

- (A) Spring force 2.0 N upward; net force 1.9 N downward.
- (B) Spring force 2.0 N downward, because the block is above equilibrium and the spring force points towards equilibrium; net force 5.9 N downward.
- (C) Spring force 3.9 N upward; net force zero.
- (D) Spring force 2.0 N upward; net force 2.0 N upward.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The spring is stretched, so it pulls up: k × 0.050 = 2.0 N. The weight is 0.40 × 9.8 = 3.92 N down. Net force: 2.0 − 3.92 = −1.92 N, so 1.9 N **downward**. Equilibrium is at a stretch of 3.92 ÷ 40 = 0.098 m, below the block, so the net force points towards it.

- (B) applies "towards equilibrium" to the spring force. The spring force points towards the **relaxed length**; it is the net force that points towards the hanging equilibrium.
- (C) uses the equilibrium stretch, as if the block were at equilibrium. It is not.
- (D) forgets the weight. The net force includes gravity.
</details>

## Question 4 (calculation · core)

Take **+y upward**. A spring with k = 120 N/m is cut into two equal halves. The halves are hung side by side from a ceiling and attached to a light bar, which stays level. A 2.0 kg block hangs from the middle of the bar.

(a) Find the spring constant of each half.
(b) Find the extension of each half.
(c) By what factor is this smaller than the extension if the block hung from the uncut spring?

<details>
<summary>Worked solution</summary>

1. **(a)** The uncut spring is two halves in series: 1/120 = 2/k_half, so **k_half = 240 N/m**.
2. **(b)** In parallel: k_eq = 240 + 240 = 480 N/m. Extension = mg/k_eq = 19.6 ÷ 480 = 0.0408 m ≈ **4.1 cm**.
3. **(c)** Uncut: 19.6 ÷ 120 = 0.163 m. Ratio 0.163 ÷ 0.0408 = **4**. Cutting doubles k, and putting the halves in parallel doubles it again.

Suggested mark points (3): 1 for k_half = 240 N/m with the series reasoning; 1 for k_eq = 480 N/m and the extension; 1 for the factor of 4.

Common error: halving k when cutting the spring. A shorter piece of the same spring stretches less for the same force, so it is stiffer.
</details>

## Question 5 (derivation · core)

Take **+x along the springs, in the direction of stretching**. Several ideal springs with constants k₁, k₂, …, k_n act on one object.

(a) For springs in series, derive 1/k_eq = 1/k₁ + 1/k₂ + … + 1/k_n. State where you use the fact that the springs are massless.
(b) Show that k_eq in series is smaller than the smallest kᵢ.
(c) For springs in parallel, derive k_eq = k₁ + k₂ + … + k_n, and state the condition on the extensions.
(d) A student hangs two identical springs in series and says that one spring of twice the length would behave the same way. Is she right? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Each spring is massless, so the net force on it is zero; the same force F therefore acts at both ends of each spring and throughout the chain. Spring i stretches by xᵢ = F/kᵢ. The total stretch is x = Σxᵢ = F Σ(1/kᵢ). Defining k_eq by x = F/k_eq gives **1/k_eq = Σ 1/kᵢ**.

**(b)** Every term 1/kᵢ is positive, so Σ1/kᵢ > 1/k_min. Taking reciprocals reverses the inequality: **k_eq < k_min**.

**(c)** All springs have the **same extension x**. The forces add: F = Σkᵢx = (Σkᵢ)x, so **k_eq = Σkᵢ**.

**(d)** Yes, if the longer spring is made the same way (same wire, same coils per unit length). Two identical springs in series give k_eq = k/2. A spring twice as long is two such pieces in series, so it also has k/2.

| Point | What earns it |
|---|---|
| 1 | (a) Same force through each spring, justified by negligible mass |
| 1 | (a) Adds extensions and reaches 1/k_eq = Σ1/kᵢ |
| 1 | (b) Inequality argument from positive terms |
| 1 | (c) Same extension and adding forces gives k_eq = Σkᵢ |
| 1 | (d) Agrees, with the k/2 reasoning and the "made the same way" condition |
</details>

## Question 6 (data analysis · core)

A student hangs slotted masses from a spring and measures the extension from its relaxed length. The results (fictional) are:

| mass (g) | 100 | 200 | 300 | 400 | 500 | 600 |
|---|---|---|---|---|---|---|
| extension (cm) | 3.9 | 7.8 | 11.8 | 15.7 | 21.5 | 29.0 |

(a) Calculate the spring force for each mass, and state what to plot to find k.
(b) Use the first four readings to find k.
(c) Is the spring ideal over the whole range? Support your answer with the data.
(d) Predict the extension for a 250 g mass, and say how confident you are.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** At rest, the spring force equals the weight: F = mg = 0.98, 1.96, 2.94, 3.92, 4.90, 5.88 N. Plot **F (N) on the vertical axis against extension (m) on the horizontal axis**; the slope is k.

**(b)** For the first four points, F ÷ extension = 25.1, 25.1, 24.9, 25.0 N/m. A best-fit line through the origin gives **k ≈ 25 N/m**.

**(c)** **No.** At 500 g and 600 g, F ÷ extension falls to 22.8 N/m and 20.3 N/m. An ideal spring with k = 25 N/m would stretch 19.6 cm and 23.5 cm, but the measured values are 21.5 cm and 29.0 cm. The graph curves towards the extension axis: the force is no longer proportional to the extension, so the spring is nonideal there.

**(d)** 250 g lies inside the straight-line region, so use k = 25 N/m: extension = 2.45 ÷ 25 = 0.098 m = **9.8 cm**. This is an interpolation within the ideal range, so it is reliable.

| Point | What earns it |
|---|---|
| 1 | (a) F = mg values and F against extension, slope k |
| 1 | (b) k = 25 N/m (24 to 26 accepted) from the linear region |
| 1 | (c) Not ideal, with a numerical comparison for the last two points |
| 1 | (d) 9.8 cm, with the reason that 250 g is inside the linear range |

**Alternative method for (b).** A least-squares line (not forced through the origin) gives a slope of about 24.9 N/m and a tiny intercept; this earns the point.
</details>

## Question 7 (constructed response · stretch)

Take **+y upward**. A uniform spring has mass m_s = 0.060 kg, spring constant k = 20 N/m and relaxed length L. It hangs from a ceiling with a block of mass M = 0.30 kg on its lower end, at rest.

(a) Find the tension in the spring at its top and at its bottom. Explain why this spring is not ideal.
(b) A piece of the spring of relaxed length dy behaves like a spring of constant kL/dy. Let y be the relaxed distance of the piece above the bottom of the spring. Write the tension at y, and show that the total stretch of the spring is (M + m_s/2)g/k.
(c) Calculate the stretch, and compare it with the value you would get by treating the spring as ideal.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** At the bottom the spring holds only the block: T = Mg = **2.9 N**. At the top it holds the block and the whole spring: T = (M + m_s)g = **3.5 N**. The tension differs along the spring because the spring has mass, so it is **nonideal**: an ideal spring has the same force at both ends.

**(b)** The piece at height y supports the block plus the part of the spring below it, of mass m_s y/L. So T(y) = Mg + m_s g y/L. That piece stretches by T(y) dy/(kL). Add (integrate) over the whole spring:

stretch = (1/kL) ∫₀ᴸ (Mg + m_s g y/L) dy = (1/kL)(MgL + m_s gL/2) = **(M + m_s/2)g/k**.

**(c)** Stretch = (0.30 + 0.030) × 9.8 ÷ 20 = **0.16 m**. Treating the spring as ideal (massless) gives Mg/k = 0.147 m. The real stretch is 10% larger: the spring's own mass acts as if half of it hung at the bottom.

| Point | What earns it |
|---|---|
| 1 | (a) Both tensions, with the reason they differ (spring has mass) |
| 1 | (b) T(y) includes the mass of spring below the piece |
| 1 | (b) Sets up and evaluates the integral to reach (M + m_s/2)g/k |
| 1 | (c) 0.16 m and the comparison with 0.147 m |

**Alternative method for (b).** Arguing that the tension grows linearly from Mg to (M + m_s)g, so the average tension is (M + m_s/2)g, earns both (b) points if the linear growth is justified.
</details>

## How did you do?

- **Q1 wrong:** re-read "Hooke's law and its direction" in the [study guide](/advanced-course-resources/physics-c-mechanics/2-8-spring-forces-study-guide/). Convert to metres and check the sign.
- **Q3 wrong:** study "A hanging block: two different centres".
- **Q2, Q4 or Q5 wrong:** go back to "Combining springs" and Worked example 1. Ask "same force or same extension?"
- **Q6 incomplete:** revisit "Graphs: k as a slope" and Figure 1.
- **Q7 incomplete:** review the ideal spring model and why a massless spring has the same force at both ends.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/2-8-spring-forces-checklist/).
