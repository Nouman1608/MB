---
resourceId: "mb-ap-phys1-5.2-practice"
title: "Connecting Linear and Rotational Motion: Practice Questions (Physics 1 5.2)"
description: "Seven original Marlbridge practice questions linking angle, angular velocity and angular acceleration to arc length, speed and acceleration of points, belts and strings, with suggested mark points."
course: "physics-1"
unit: 5
topics: ["5.2"]
resourceType: "practice-questions"
prerequisites:
  - "Angular velocity and angular acceleration in radians (Topic 5.1)"
  - "Centripetal acceleration a_c = v²/r (Topic 2.9)"
prerequisiteResources: ["mb-ap-phys1-5.2-study-guide"]
learningObjectives:
  - "Use Δs = rΔθ, v = rω and a_T = rα in both directions"
  - "Compare linear and angular quantities for points at different distances from the axis"
  - "Use the shared linear speed of belts, chains and strings to link two rotating parts"
  - "Sketch speed–time and speed–radius graphs for points on a rotating body"
  - "Derive a symbolic result and use it to evaluate a claim"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. Use radians in s = rθ, v = rω and a = rα. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-phys1-5.2-study-guide", "mb-ap-phys1-5.2-revision-notes", "mb-ap-phys1-5.2-checklist"]
next: "mb-ap-phys1-5.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Ask first: do these parts share ω (one rigid body) or share v (belt, chain, string)?"
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use 1 rev = 2π rad, and use radians in every linear–rotational link. Round final answers to 2 significant figures unless told otherwise. Any scientific calculator is fine.

## Question 1 (multiple choice · foundation)

Two children sit on a playground roundabout that turns at a steady rate. Child A sits 1.0 m from the axis; child B sits 2.0 m from the axis. Which statement is correct?

- (A) B has twice the angular velocity of A, and the same linear speed.
- (B) A and B have the same angular velocity, and B has twice the linear speed of A.
- (C) A and B have the same linear speed, and A has twice the angular velocity of B.
- (D) B has twice the angular velocity and twice the linear speed of A.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The roundabout is one rigid body, so every point turns through the same angle in the same time: ω is shared. Then v = rω, so doubling r doubles v.

- (A) puts the difference in the wrong quantity. ω cannot differ between points on one rigid body.
- (C) is the rule for belt-linked pulleys (same v), not for points on one body.
- (D) doubles both. If ω also doubled, B would get ahead of A and the roundabout would not be rigid.
</details>

## Question 2 (multiple choice · core)

A small pulley of radius 3.0 cm is joined by a belt to a large pulley of radius 9.0 cm. The belt does not slip. The small pulley turns at 60 rad/s. What is the angular velocity of the large pulley?

- (A) 180 rad/s
- (B) 60 rad/s
- (C) 20 rad/s
- (D) 6.7 rad/s

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The belt gives both rims the same linear speed: r₁ω₁ = r₂ω₂. So ω₂ = 60 × (3.0 ÷ 9.0) = 20 rad/s. (Belt speed: 0.030 m × 60 rad/s = 1.8 m/s.)

- (A) multiplies by the radius ratio the wrong way round. The larger pulley must turn more slowly.
- (B) assumes both pulleys share ω, as points on one rigid body do. They are separate bodies linked by a belt.
- (D) divides 60 by 9.0 without using the small pulley's radius at all.
</details>

## Question 3 (multiple choice · core)

A disc spins at a constant angular velocity. Point A is on the rim, at distance R from the axis. Point B is at distance R/2. What is the ratio of B's centripetal acceleration to A's, a_c,B / a_c,A?

- (A) 2
- (B) 1
- (C) ½
- (D) ¼

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Both points share ω. Using v = rω in a_c = v²/r gives a_c = ω²r, which is proportional to r. Halving r halves a_c.

- (A) uses a_c = v²/r as if v were the same for both points. On one body v also halves, and v² falls by 4, so the net effect is a factor of ½, not 2.
- (B) assumes every point on the disc has the same acceleration because it has the same ω.
- (D) squares the radius ratio, as if a_c depended on r².
</details>

## Question 4 (calculation · core)

A kite line is wound on a reel of radius 4.0 cm. Treat the line as thin, so the radius stays 4.0 cm. The kite pulls 12 m of line off the reel without slipping.

(a) Through what angle does the reel turn? Give your answer in radians and in revolutions.
(b) Later, the line is leaving the reel at 2.0 m/s and its speed is decreasing at 0.60 m/s². Find the size of the reel's angular velocity and angular acceleration at that moment, and say whether the reel is speeding up or slowing down.

<details>
<summary>Worked solution</summary>

**(a)** Δθ = Δs / r = 12 m ÷ 0.040 m = **300 rad**. Revolutions: 300 ÷ 2π ≈ **48 rev**.

**(b)** ω = v / r = 2.0 ÷ 0.040 = **50 rad/s**. α = a_T / r = 0.60 ÷ 0.040 = **15 rad/s²**. The line's speed is falling, so the reel's rate of spin is falling: it is **slowing down** (α is opposite in sense to ω).

Suggested mark points (4): 1 for 300 rad using r in metres; 1 for converting to about 48 rev; 1 for ω = 50 rad/s; 1 for α = 15 rad/s² with "slowing down".

Common error: using r = 4.0 (in cm) gives 3.0 rad, a hundred times too small. Always use metres.
</details>

## Question 5 (sketch graphs · core)

A turntable starts from rest at t = 0 and turns counterclockwise with constant angular acceleration. Point P is a distance r from the axis; point Q is a distance 2r from the axis.

(a) On one set of axes, sketch the linear speed against time for P and for Q, from t = 0 to a later time t₁. Label each line.
(b) On a second set of axes, sketch the angular velocity against time for P and for Q over the same interval.
(c) Sketch the linear speed at time t₁ against distance from the axis, for points from the axis out to the rim.
(d) Explain, using equations, how the slopes of your lines in (a) compare.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Two straight lines starting at the origin. Q's line is twice as steep as P's, so at every time v_Q = 2v_P.

**(b)** A single straight line through the origin, shared by P and Q (both labelled on it). ω = αt is the same for every point on the body.

**(c)** A straight line through the origin (v = 0 at the axis), rising in proportion to r up to the rim, with slope equal to ω at time t₁.

**(d)** v = rω = r(αt), so the slope of a v–t line is rα, the tangential acceleration. Q has twice the r, so its slope is twice P's: a_T,Q = 2rα = 2a_T,P.

| Point | What earns it |
|---|---|
| 1 | (a) both lines straight and through the origin |
| 1 | (a) Q's line clearly steeper, about twice P's slope |
| 1 | (b) one line for both points, straight through the origin |
| 1 | (c) straight line through the origin |
| 1 | (d) slope = rα, so Q's slope is twice P's |

</details>

## Question 6 (constructed response · stretch)

A coin rests on a record turntable, 0.12 m from the axis, and does not slide. The turntable starts from rest with a constant angular acceleration of 0.50 rad/s².

(a) At t = 4.0 s, find the coin's linear speed, its tangential acceleration and its centripetal acceleration.
(b) Find the size of the coin's total acceleration at t = 4.0 s.
(c) At first the coin's tangential acceleration is larger than its centripetal acceleration. Derive an expression for the time at which they become equal, and evaluate it.
(d) A student claims: "A coin placed farther from the axis would reach this point at a later time, because it moves faster." Evaluate the claim using your expression from (c).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ω = αt = 0.50 × 4.0 = 2.0 rad/s.
v = rω = 0.12 × 2.0 = **0.24 m/s**. a_T = rα = 0.12 × 0.50 = **0.060 m/s²**. a_c = ω²r = 2.0² × 0.12 = **0.48 m/s²**.

**(b)** The two parts are perpendicular: a = √(0.48² + 0.060²) ≈ **0.48 m/s²** (0.484 m/s² to 3 s.f.).

**(c)** Set ω²r = rα. The r cancels, so ω² = α, giving ω = √α. With ω = αt: αt = √α, so **t = 1/√α**. Numerically t = 1 ÷ √0.50 ≈ **1.4 s**.

**(d)** The claim is **incorrect**. The expression t = 1/√α does not contain r: both a_c and a_T are proportional to r, so r cancels when they are set equal. A coin farther out does move faster, but both of its accelerations are larger by the same factor, so the moment when they are equal is the same for every point on the turntable.

| Point | What earns it |
|---|---|
| 1 | v and a_T correct with units |
| 1 | a_c = 0.48 m/s² using ω²r or v²/r |
| 1 | Total acceleration from the perpendicular parts |
| 1 | Derives t = 1/√α (or ω² = α) with r cancelling |
| 1 | t ≈ 1.4 s |
| 1 | Rejects the claim **because** r cancels, so the time is the same at every radius |

</details>

## Question 7 (constructed response · stretch)

On a bicycle, the pedals turn a front chainring of radius 10 cm. A chain links the chainring to a rear sprocket of radius 4.0 cm, which is fixed to the rear wheel. The rear wheel has radius 0.34 m. A rider turns the pedals at a steady 6.0 rad/s. The chain does not slip. The bicycle is on a stand, so the wheel turns in the air.

(a) Find the speed of the chain.
(b) Find the angular velocity of the rear wheel and the linear speed of a point on its rim.
(c) Derive an expression for the rim speed v_rim in terms of the pedal angular velocity ω_p, the chainring radius r_c, the sprocket radius r_s and the wheel radius R.
(d) A student claims that fitting a larger rear sprocket, of radius 5.0 cm, would make the rim move faster for the same pedalling rate. Evaluate the claim.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Chain speed = rim speed of the chainring: v = r_c ω_p = 0.10 × 6.0 = **0.60 m/s**.

**(b)** The chain gives the sprocket the same linear speed: ω_s = v / r_s = 0.60 ÷ 0.040 = **15 rad/s**. The wheel is fixed to the sprocket, so it shares this ω (one rigid body). Rim speed = Rω = 0.34 × 15 = **5.1 m/s**.

**(c)** v_chain = r_c ω_p; ω_wheel = v_chain / r_s; so **v_rim = R r_c ω_p / r_s**.

**(d)** The claim is **incorrect**. v_rim is inversely proportional to r_s. With r_s = 5.0 cm: ω_wheel = 0.60 ÷ 0.050 = 12 rad/s and v_rim = 0.34 × 12 ≈ 4.1 m/s, slower than 5.1 m/s. A larger sprocket turns more slowly for the same chain speed. (It makes pedalling easier, which is why riders use it on hills, but that is a torque idea from later in the unit.)

| Point | What earns it |
|---|---|
| 1 | Chain speed 0.60 m/s from r_c ω_p |
| 1 | Uses the shared chain speed to get ω of the sprocket (15 rad/s) |
| 1 | Uses the shared ω of sprocket and wheel to get 5.1 m/s |
| 1 | Correct expression v_rim = R r_c ω_p / r_s |
| 1 | Rejects the claim using the inverse dependence on r_s, with the new value or factor (4/5) |

</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "Same ω, different v" and Worked example 3 in the [study guide](/advanced-course-resources/physics-1/5-2-connecting-linear-rotational-motion-study-guide/).
- **Q2 or Q7 wrong:** revisit "Things that share a linear speed" and Worked example 2. Ask: one body (same ω) or linked by a belt or chain (same v)?
- **Q4 wrong:** go back to "Arc length and the radian" and Worked example 1. Check your units.
- **Q5 incomplete:** compare your sketches with Figure 1.
- **Q6 incomplete:** combine a_T = rα with a_c = ω²r, and look for quantities that cancel.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/5-2-connecting-linear-rotational-motion-checklist/).
