---
resourceId: "mb-ap-phys1-1.4-practice"
title: "Reference Frames and Relative Motion: Practice Questions (Physics 1 1.4)"
description: "Seven original Marlbridge practice questions on reference frames, relative velocity along one line, converting between frames and frame-independent acceleration, with worked solutions and suggested mark points."
course: "physics-1"
unit: 1
topics: ["1.4"]
resourceType: "practice-questions"
prerequisites:
  - "Using + and − signs for direction along one axis"
  - "Finding acceleration from interval midpoints and the constant-acceleration equations (Topics 1.2 and 1.3)"
prerequisiteResources: ["mb-ap-phys1-1.4-study-guide"]
learningObjectives:
  - "Combine signed velocities along one line to find what a given observer measures"
  - "Use relative velocity to find meeting and overtaking times"
  - "Derive and test a symbolic expression for a trip on a moving walkway"
  - "Use motion data from two frames to support a claim about acceleration"
  - "Describe how a velocity–time graph changes when viewed from a moving frame"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-1.4-study-guide", "mb-ap-phys1-1.4-revision-notes", "mb-ap-phys1-1.4-checklist"]
next: "mb-ap-phys1-1.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis and names the observers. Use them for every sign."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 m/s² where gravity appears. Treat every frame as inertial unless a question says otherwise. Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end. Any scientific calculator is fine.

## Question 1 (multiple choice · foundation)

Take **+x east**. A canal current flows east at 1.5 m/s relative to the bank. A boat heads west and moves at 4.0 m/s relative to the water. What is the boat's velocity relative to the bank?

- (A) −5.5 m/s
- (B) +2.5 m/s
- (C) −2.5 m/s
- (D) −4.0 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Use v_BG = v_BW + v_WG, where B is the boat, W the water and G the bank.
v_BG = (−4.0 m/s) + (+1.5 m/s) = −2.5 m/s. The boat still moves west, but the current slows it.

- (A) subtracts the current instead of adding it, as if the water flowed west and helped the boat.
- (B) has the right size but drops the boat's minus sign, so it says the boat moves east.
- (D) is the boat's velocity relative to the water. It ignores the motion of the frame.
</details>

## Question 2 (multiple choice · core)

Take **+x north**. On a straight path, runner P is south of runner Q. P moves at +5.0 m/s and Q moves at −3.0 m/s, both relative to the ground. What is the velocity of P measured by Q?

- (A) +2.0 m/s
- (B) +8.0 m/s
- (C) −8.0 m/s
- (D) −2.0 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** v_PQ = v_PG − v_QG = (+5.0) − (−3.0) = +8.0 m/s. To Q, runner P approaches from the south at 8.0 m/s. The runners move towards each other, so the relative speed is the sum of their speeds.

- (A) adds the signed velocities (or subtracts the speeds), treating runners moving towards each other like runners moving the same way.
- (C) is v_QP, the velocity of Q measured by P. The subscripts are reversed.
- (D) subtracts the speeds the wrong way round (3.0 − 5.0) and ignores direction.
</details>

## Question 3 (multiple choice · core)

Take **+x east**. A truck moves east at a constant 20 m/s. As the truck passes, a car starts from rest and speeds up east with a constant acceleration of 2.0 m/s² relative to the road. Which description fits the car's velocity–time graph **as measured by the truck driver**?

- (A) A horizontal line at −20 m/s
- (B) A straight line starting at 0 with a slope less than 2.0 m/s²
- (C) A straight line starting at +20 m/s with a slope of 2.0 m/s²
- (D) A straight line starting at −20 m/s with a slope of 2.0 m/s²

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** In the truck's frame, v_CT = v_CG − v_TG = v_CG − 20 m/s. At t = 0 that is 0 − 20 = −20 m/s. The truck is inertial, so the slope stays 2.0 m/s²: the road-frame graph shifted down by 20 m/s. It crosses zero at 20 ÷ 2.0 = 10 s, when the car matches the truck's speed.

- (A) keeps the shift but loses the acceleration.
- (B) assumes a moving observer measures a smaller acceleration and forgets the shift.
- (C) shifts the graph the wrong way (adds v_TG instead of subtracting it).
</details>

## Question 4 (calculation · core)

Take **+x east**. On parallel straight tracks, train P moves east at 30 m/s and train Q moves west at 20 m/s, both relative to the ground. At t = 0 their fronts are 2.0 km apart and approaching each other.

(a) Find the velocity of Q measured by a passenger on P.
(b) How long after t = 0 do the fronts of the trains pass each other?
(c) How far does train P move relative to the ground in that time?

<details>
<summary>Worked solution</summary>

1. **(a)** v_QP = v_QG − v_PG = (−20) − (+30) = **−50 m/s** (50 m/s west, towards the passenger).
2. **(b)** In P's frame, Q's front covers 2000 m at 50 m/s: t = 2000 m ÷ 50 m/s = **40 s**.
3. **(c)** Δx_PG = (+30 m/s)(40 s) = **+1200 m** (1.2 km east).

**Check.** Q moves (−20)(40) = −800 m; 1200 m + 800 m = 2000 m closes the gap.

Suggested mark points (3): 1 for −50 m/s with the sign (or "50 m/s west"); 1 for 40 s using the relative speed; 1 for 1200 m using the ground-frame velocity of P.

Common error: subtracting speeds (30 − 20 = 10 m/s) gives 200 s. Approaching trains close at the sum of their speeds.
</details>

## Question 5 (derivation · core)

An airport walkway of length L moves at constant speed u relative to the floor. A traveller walks at constant speed w relative to the walkway, where w > u. She walks the full length in the walkway's direction of motion, then turns and walks back the full length against it.

(a) Derive expressions, in terms of L, u and w, for the time t₁ for the forward trip and the time t₂ for the return trip.
(b) Show that the total time is t₁ + t₂ = 2Lw ÷ (w² − u²).
(c) Evaluate t₁, t₂ and the total for L = 40 m, u = 0.50 m/s and w = 1.5 m/s. Compare the total with the time to walk 40 m and back on the fixed floor.
(d) Explain what happens to the return time as u gets closer to w.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

Take **+x in the walkway's direction of motion**, measured relative to the floor.

**(a)** Forward: v = +w + u, so **t₁ = L ÷ (w + u)**. Return: v = −w + u = −(w − u), so **t₂ = L ÷ (w − u)**. (The traveller must cover length L of the floor each way, because the walkway's ends are fixed to the floor.)

**(b)** t₁ + t₂ = L(w − u) ÷ (w² − u²) + L(w + u) ÷ (w² − u²) = **2Lw ÷ (w² − u²)**.

**(c)** t₁ = 40 ÷ 2.0 = **20 s**; t₂ = 40 ÷ 1.0 = **40 s**; total **60 s**. On a fixed floor: 2L ÷ w = 80 ÷ 1.5 ≈ **53 s**. The round trip takes about 6.7 s **longer**: less time is saved going forward than is lost coming back.

**(d)** As u approaches w, (w − u) approaches 0, so t₂ grows without limit. At u = w she walks on the spot relative to the floor.

| Point | What earns it |
|---|---|
| 1 | Forward velocity w + u relative to the floor, giving t₁ = L ÷ (w + u) |
| 1 | Return velocity of size w − u, giving t₂ = L ÷ (w − u) |
| 1 | Correct algebra to 2Lw ÷ (w² − u²) using a common denominator |
| 1 | 20 s, 40 s and 60 s, compared with 53 s on the floor |
| 1 | Return time grows without limit as u → w, with the physical reason |

**Check.** If u = 0, (b) gives 2L ÷ w, the fixed-floor result.
</details>

## Question 6 (constructed response · stretch)

Take **+x forward** along a straight track. Cart A moves forward at a constant 0.40 m/s relative to the floor. Cart B is ahead of it. A motion detector fixed to the floor and a motion detector fixed to cart A both measure cart B's position (readings to the nearest millimetre):

| t (s) | 0 | 0.50 | 1.00 | 1.50 | 2.00 |
|---|---|---|---|---|---|
| x of B, floor detector (m) | 1.000 | 1.150 | 1.400 | 1.750 | 2.200 |
| x of B, detector on A (m) | 1.000 | 0.950 | 1.000 | 1.150 | 1.400 |

A student claims: "The detector on cart A is moving, so it must measure a different acceleration for cart B than the floor detector does."

(a) Use the data to find cart B's acceleration in each frame. Show your method.
(b) Evaluate the student's claim using your results.
(c) The velocities you found in the two frames differ by the same amount in every interval. State that amount and explain what it represents.
(d) Describe the shape of the position–time graph of B measured from cart A, and explain what is happening to B at t = 0.50 s.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** For each 0.50 s interval, average velocity v_avg = Δx ÷ Δt, assigned to the midpoint time (as in Topic 1.2).

| Midpoint t (s) | v_avg, floor frame (m/s) | v_avg, A's frame (m/s) |
|---|---|---|
| 0.25 | 0.30 | −0.10 |
| 0.75 | 0.50 | +0.10 |
| 1.25 | 0.70 | +0.30 |
| 1.75 | 0.90 | +0.50 |

Floor: slope = (0.90 − 0.30) m/s ÷ (1.75 − 0.25) s = 0.60 ÷ 1.50 = **0.40 m/s²**.
A's frame: slope = (0.50 − (−0.10)) m/s ÷ 1.50 s = 0.60 ÷ 1.50 = **0.40 m/s²**.

**(b)** The claim is **not supported**. Both data sets give 0.40 m/s². Cart A moves at constant velocity, so it is an inertial frame, and inertial observers measure the same acceleration.

**(c)** Each floor-frame velocity is **0.40 m/s** greater than the A-frame value. That is v_AG, the velocity of cart A relative to the floor, because v_BG = v_BA + v_AG.

**(d)** The graph is a curve that dips to a minimum of 0.950 m at t = 0.50 s and then rises ever more steeply. At t = 0.50 s, B is **momentarily at rest relative to A**: its floor velocity has risen to 0.40 m/s, matching A, so the gap stops shrinking and starts growing.

| Point | What earns it |
|---|---|
| 1 | Average velocities as Δx ÷ Δt at interval midpoints, in both frames |
| 1 | 0.40 m/s² in both frames, from slopes, with unit |
| 1 | Rejects the claim **because** both frames give the same acceleration, linked to A moving at constant velocity |
| 1 | 0.40 m/s identified as cart A's velocity relative to the floor |
| 1 | Curve with minimum near 0.50 s, explained as B matching A's velocity |

**Alternative for (c).** Subtracting the second row from the first gives cart A's floor position: 0, 0.200, 0.400, 0.600, 0.800 m, so A moves at a steady 0.40 m/s.
</details>

## Question 7 (constructed response · stretch)

Take **+y upward**. A lift moves **down** at a constant 3.0 m/s relative to the building. A passenger holds a key 1.2 m above the lift floor and releases it from rest relative to the lift.

(a) State the key's velocity relative to the building at the moment of release.
(b) State the key's acceleration measured by the passenger and measured by someone at rest in the building. Justify your answer.
(c) Calculate how long the key takes to reach the lift floor, working in the lift's frame.
(d) A student says: "In the building's frame the floor is moving down, away from the key, so the key must take longer to land." Show, by calculating in the building's frame, that the time is the same as in (c).

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The key moves with the lift, so v_KG = v_KL + v_LG = 0 + (−3.0) = **−3.0 m/s** (3.0 m/s downward).

**(b)** **−9.8 m/s² in both frames.** The lift moves at constant velocity, so it is an inertial frame, and all inertial observers measure the same acceleration.

**(c)** In the lift's frame the key starts from rest and falls 1.2 m: 1.2 = ½(9.8)t², so t = √(2 × 1.2 ÷ 9.8) = **0.49 s**.

**(d)** In the building's frame, after time t:
- floor: Δy = −3.0t
- key: Δy = −3.0t − ½(9.8)t²

The key lands when it has dropped 1.2 m more than the floor: the −3.0t terms cancel, leaving ½(9.8)t² = 1.2, so **t = 0.49 s**, the same. The floor does move down (about 1.5 m), but the key starts with the floor's velocity, so relative to the floor it falls from rest, as in (c). The claim is wrong.

| Point | What earns it |
|---|---|
| 1 | −3.0 m/s (or 3.0 m/s down) at release |
| 1 | −9.8 m/s² in both frames, justified by the lift moving at constant velocity |
| 1 | 0.49 s from ½gt² = 1.2 m in the lift frame |
| 1 | Building-frame expressions for key and floor, with the −3.0t terms cancelling |
| 1 | Concludes the claim is wrong because key and floor share the same initial velocity |

At landing the key moves at about 4.8 m/s relative to the lift and 7.8 m/s relative to the building: different velocities, same time.
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "Relative velocity along one line" and Figure 1 in the [study guide](/advanced-course-resources/physics-1/1-4-reference-frames-relative-motion-study-guide/). Write subscripts before numbers.
- **Q3 wrong:** revisit Figure 2.
- **Q4 wrong:** revisit Worked example 2 and its oncoming-vehicle case.
- **Q5 incomplete:** work in the floor frame and sign each velocity before dividing.
- **Q6 or Q7 incomplete:** give the *why*: a constant-velocity observer measures the same acceleration.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/1-4-reference-frames-relative-motion-checklist/).
