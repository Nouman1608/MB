---
resourceId: "mb-ap-phys1-2.8-practice"
title: "Spring Forces: Practice Questions (Physics 1 2.8)"
description: "Seven original Marlbridge practice questions on ideal springs and Hooke's law, including graphing data, testing whether a band is ideal, and springs with friction, with suggested mark points."
course: "physics-1"
unit: 2
topics: ["2.8"]
resourceType: "practice-questions"
prerequisites:
  - "Free-body diagrams and Newton's second law; static friction (Topic 2.7)"
prerequisiteResources: ["mb-ap-phys1-2.8-study-guide"]
learningObjectives:
  - "Calculate spring forces from changes in length, with direction"
  - "Compare spring constants between two springs"
  - "Derive and use symbolic expressions for the stretch of a loaded spring"
  - "Find k and the relaxed length from a graph of data"
  - "Design and analyse a test of whether a stretchy object obeys Hooke's law"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s². Convert centimetres to metres. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-phys1-2.8-study-guide", "mb-ap-phys1-2.8-revision-notes", "mb-ap-phys1-2.8-checklist"]
next: "mb-ap-phys1-2.8-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis. Use it for every sign."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 m/s². All springs are ideal unless a question says otherwise, and all data are invented for these questions. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Take **+x in the direction of the stretch**. A spring with k = 50 N/m has a relaxed length of 12 cm. It is stretched to a length of 18 cm. What is the size of the force the spring exerts?

- (A) 3.0 N
- (B) 9.0 N
- (C) 6.0 N
- (D) 300 N

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The change in length is 18 cm − 12 cm = 6.0 cm = 0.060 m. |F_s| = k|Δx| = 50 N/m × 0.060 m = 3.0 N (pulling in the −x direction).

- (B) uses the total length, 0.18 m, instead of the change in length.
- (C) uses the relaxed length, 0.12 m.
- (D) uses 6.0 cm without converting to metres.
</details>

## Question 2 (multiple choice · core)

Take **+x to the right**. A cart on a smooth horizontal track is attached to a spring. The other end of the spring is fixed to a post on the left. The equilibrium position is x = 0. At one instant the cart is at x = −4.0 cm and is moving to the **left**. Which statement about the spring force on the cart at that instant is correct?

- (A) It points left, because the cart is moving left.
- (B) It points right, because the spring is compressed.
- (C) It is zero, because the cart is moving at a steady speed past this point.
- (D) It points left, because the spring is stretched.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** At x = −4.0 cm the cart is closer to the post than at equilibrium, so the spring is **compressed**. A compressed spring pushes the cart away from the post, toward x = 0: to the right. The force depends on position, not on the direction of motion. Here the force is opposite to the velocity, so the cart is slowing down.

- (A) assumes force points the way an object moves. That is not true for a spring.
- (C) is wrong: the spring force is zero only at x = 0. At x = −4.0 cm the cart cannot move at a steady speed.
- (D) gets the state of the spring wrong. Left of equilibrium, with the post on the left, the spring is shorter than relaxed.
</details>

## Question 3 (multiple choice · core)

A force of 2.0 N stretches spring A by 6.0 cm. A force of 3.0 N stretches spring B by 3.0 cm. What is the ratio k_B ÷ k_A?

- (A) 3.0
- (B) 0.50
- (C) 1.5
- (D) 0.33

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** k_A = 2.0 N ÷ 0.060 m = 33 N/m and k_B = 3.0 N ÷ 0.030 m = 100 N/m. So k_B ÷ k_A = 3.0. Spring B is three times as stiff.

- (B) is the ratio of the extensions (3.0 cm ÷ 6.0 cm), not of the spring constants.
- (C) is the ratio of the forces only. It ignores that B stretches less.
- (D) is k_A ÷ k_B, the ratio upside down.
</details>

## Question 4 (derivation · core)

Take **+y downward**. An object of mass M hangs at rest from a vertical spring and stretches it by a distance d from its relaxed length.

(a) Derive an expression for the spring constant k in terms of M, d and g.
(b) A second, identical object is hung from the first one. Derive an expression for the new total stretch, and justify it.
(c) For M = 0.50 kg and d = 6.2 cm, calculate k.

<details>
<summary>Worked solution</summary>

**(a)** The object is at rest, so the forces on it balance: the spring pulls up with kd and gravity pulls down with Mg. kd = Mg, so **k = Mg ÷ d**.

**(b)** The spring now holds both objects, total weight 2Mg. At rest, kΔx = 2Mg, so Δx = 2Mg ÷ k = 2Mg ÷ (Mg/d) = **2d**. Doubling the force doubles the stretch, because force is proportional to change in length.

**(c)** k = (0.50 × 9.8) ÷ 0.062 = 4.9 N ÷ 0.062 m = **79 N/m**.

Suggested mark points (4): 1 for kd = Mg from a force balance; 1 for k = Mg/d; 1 for 2d with the proportionality reason; 1 for 79 N/m with d in metres.
</details>

## Question 5 (graph · core)

A student measures the **total length** L of a spring for different hanging forces F:

| F (N) | 0 | 1.0 | 2.0 | 3.0 | 4.0 |
|---|---|---|---|---|---|
| L (cm) | 15.0 | 17.6 | 20.1 | 22.4 | 25.0 |

(a) She plots L (vertical axis) against F (horizontal axis). Describe the shape of the graph and explain why it does not pass through the origin.
(b) Use the graph to find the relaxed length of the spring and its spring constant.
(c) A friend says the spring constant is 4.0 N ÷ 0.250 m = 16 N/m. Explain the error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A straight line with a positive slope. It meets the L axis at about 15 cm, not at zero, because L is the **total** length. Even with no force the spring has its relaxed length.

**(b)** The intercept gives the relaxed length: **15 cm** (a best-fit line gives 15.1 cm). Slope = (0.250 − 0.150) m ÷ (4.0 − 0) N = 0.025 m/N. This is metres of stretch per newton, so k = 1 ÷ slope = **40 N/m**. (A least-squares line gives a slope of 0.0248 m/N and k = 40 N/m.)

**(c)** Hooke's law uses the **change** in length. At 4.0 N the stretch is 25.0 − 15.0 = 10.0 cm, so k = 4.0 N ÷ 0.100 m = 40 N/m. Dividing by the total length (0.250 m) gives a value that is far too small.

| Point | What earns it |
|---|---|
| 1 | Straight line, with the non-zero intercept explained by the relaxed length |
| 1 | Relaxed length about 15 cm from the intercept |
| 1 | Slope found from two points on the line, with units m/N |
| 1 | k = 1 ÷ slope = 40 N/m |
| 1 | Error identified: total length used instead of change in length |
</details>

## Question 6 (experimental design · stretch)

A student wants to know whether a rubber band behaves like an ideal spring.

(a) Describe a procedure she could use, naming the equipment and the measurements.
(b) Her results are below. Use them to decide whether the band obeys Hooke's law over this range, with a reason.

| F (N) | 1.0 | 2.0 | 3.0 | 4.0 | 5.0 |
|---|---|---|---|---|---|
| Δx (cm) | 2.0 | 4.1 | 6.6 | 9.8 | 14.0 |

(c) Describe how a graph of her data would show your conclusion.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Hang the band from a clamp stand. Measure its relaxed length with a metre rule. Hang a mass hanger and add known masses one at a time; for each, wait until it is at rest and measure the new length. Calculate F = mg and Δx = new length − relaxed length. Use at least five loads, and repeat with the loads removed to check the band returns to its relaxed length.

**(b)** If the band obeyed Hooke's law, F ÷ Δx would be the same for every load. Here it is 50, 49, 45, 41 and 36 N/m: it falls steadily. Equal 1.0 N steps give stretches that grow (2.1, 2.5, 3.2 and 4.2 cm). So the band does **not** obey Hooke's law over this range: it becomes easier to stretch as it lengthens.

**(c)** A graph of F against Δx would curve, with a slope that gets smaller as Δx increases, instead of a straight line through the origin.

| Point | What earns it |
|---|---|
| 1 | Measures the relaxed length and calculates Δx from it |
| 1 | Uses known masses with F = mg, reading the length with the band at rest |
| 1 | Uses enough loads (five or more) or repeats to reduce uncertainty |
| 1 | Calculates F/Δx (or compares equal force steps) |
| 1 | Concludes "not Hooke's law" **because** the ratio is not constant |
| 1 | Graph described as curved, with a decreasing slope |

**Alternative method.** Plotting the graph first and showing it is not a straight line through the origin earns the fourth and fifth points if the curvature is stated as the reason.
</details>

## Question 7 (constructed response · stretch)

Take **+x to the right**. A 2.0 kg block sits on a rough, level floor. It is attached to a horizontal spring with k = 150 N/m, whose other end is fixed to a wall on the left. For the block and floor, μ_s = 0.40. The spring is relaxed when the block is at x = 0.

The block is moved to x = +3.0 cm and released from rest. It stays where it is.

(a) Find the size and direction of the static friction force on the block.
(b) Derive an expression for the largest distance d from x = 0 at which the block can be released from rest and stay there, in terms of μ_s, m, g and k. Then calculate it.
(c) A student says: "If the block is released at x = +6.0 cm, the spring force is less than its weight, so the block will stay put." Evaluate this claim.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The spring is stretched by 0.030 m, so F_s = −kΔx = −150 × 0.030 = −4.5 N (to the left, toward the wall). The block stays at rest, so static friction balances it: **4.5 N to the right**. This is below the maximum, μ_s mg = 0.40 × 2.0 × 9.8 = 7.84 N.

**(b)** At the limit, the spring force equals the maximum static friction: kd = μ_s mg, so **d = μ_s mg ÷ k** = 7.84 ÷ 150 = 0.052 m = **5.2 cm**.

**(c)** The claim is **incorrect**. The weight acts vertically and is not the force that stops the block sliding horizontally. What matters is the maximum static friction, μ_s mg = 7.84 N. At x = +6.0 cm the spring pulls with 150 × 0.060 = 9.0 N, which is more than 7.84 N, so static friction cannot hold the block and it slides toward the wall. (6.0 cm is also beyond the 5.2 cm limit from (b).)

| Point | What earns it |
|---|---|
| 1 | Spring force 4.5 N toward the wall, with Δx in metres |
| 1 | Static friction 4.5 N away from the wall, from the force balance (not μ_s mg) |
| 1 | kd = μ_s mg leading to d = μ_s mg ÷ k |
| 1 | d = 0.052 m (5.2 cm) |
| 1 | Compares the 9.0 N spring force with the 7.84 N maximum static friction, not with the weight |
| 1 | Concludes the block slides toward the wall |
</details>

## How did you do?

- **Q1 or Q5 wrong:** re-read "The ideal spring" and "Designing the experiment well" in the [study guide](/advanced-course-resources/physics-1/2-8-spring-forces-study-guide/). Always use the change in length, in metres.
- **Q2 wrong:** revisit Figure 1 and Worked example 3. Position decides the force, not velocity.
- **Q3 or Q4 wrong:** work through Worked examples 1 and 2.
- **Q6 incomplete:** your reasoning needs the *why*: Hooke's law means force ÷ change in length is constant.
- **Q7 incomplete:** combine this topic with static friction from [Topic 2.7](/advanced-course-resources/physics-1/2-7-kinetic-static-friction-study-guide/).

Then tick off the [topic checklist](/advanced-course-resources/physics-1/2-8-spring-forces-checklist/).
