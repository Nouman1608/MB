---
resourceId: "mb-ap-phys1-5.1-practice"
title: "Rotational Kinematics: Practice Questions (Physics 1 5.1)"
description: "Seven original Marlbridge practice questions on angular displacement, angular velocity, angular acceleration, rotation graphs and wheel data, with worked solutions and suggested mark points."
course: "physics-1"
unit: 5
topics: ["5.1"]
resourceType: "practice-questions"
prerequisites:
  - "Using clockwise and counterclockwise as signed directions"
  - "The constant-acceleration equations from Topic 1.3"
prerequisiteResources: ["mb-ap-phys1-5.1-study-guide"]
learningObjectives:
  - "Convert revolutions and rpm to radians and rad/s and calculate average angular velocity and acceleration with signs"
  - "Apply the constant-angular-acceleration equations to spin-up and slow-down problems"
  - "Predict how a stopping angle changes when the starting angular velocity changes"
  - "Read angular acceleration and angular displacement from an angular velocity–time graph"
  - "Process angle–time data to test a claim that angular acceleration is constant"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. 1 rev = 2π rad. Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-5.1-study-guide", "mb-ap-phys1-5.1-revision-notes", "mb-ap-phys1-5.1-checklist"]
next: "mb-ap-phys1-5.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its positive rotation sense. Use it for every sign."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use 1 rev = 2π rad. Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end. Any scientific calculator is fine.

## Question 1 (multiple choice · foundation)

A bicycle wheel on a repair stand turns steadily through 3.0 revolutions in 2.0 s. What is its average angular velocity?

- (A) 1.5 rad/s
- (B) 9.4 rad/s
- (C) 4.7 rad/s
- (D) 19 rad/s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Convert to radians first: Δθ = 3.0 rev × 2π rad/rev = 6π rad ≈ 18.8 rad. Then ω_avg = Δθ / Δt = 18.8 rad ÷ 2.0 s ≈ 9.4 rad/s.

- (A) is 1.5 rev/s. The number is right for revolutions per second, but it is labelled with the wrong unit.
- (C) converts with π rad per revolution instead of 2π.
- (D) is the angular displacement in radians (18.8 rad). It has not been divided by the time.
</details>

## Question 2 (multiple choice · core)

Take **counterclockwise as positive**. A motorised turntable on a film set turns counterclockwise at 4.0 rad/s. Over 3.0 s its motor reverses it, and it ends up turning clockwise at 2.0 rad/s. What is its average angular acceleration?

- (A) −2.0 rad/s²
- (B) −0.67 rad/s²
- (C) +2.0 rad/s²
- (D) −6.0 rad/s²

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Signed values: ω₀ = +4.0 rad/s and ω = −2.0 rad/s. Δω = (−2.0) − (+4.0) = −6.0 rad/s, so α_avg = −6.0 ÷ 3.0 = −2.0 rad/s² (2.0 rad/s² clockwise).

- (B) uses rates of spin without signs: (2.0 − 4.0) ÷ 3.0. It ignores the reversal of direction.
- (C) subtracts the wrong way round (ω₀ − ω), which flips the sign.
- (D) is Δω, not divided by the 3.0 s.
</details>

## Question 3 (multiple choice · core)

A turntable spinning at angular velocity ω₀ is switched off. It slows at a constant angular acceleration and turns through an angle Δθ before it stops. The turntable is now started at 3ω₀ and switched off. The angular acceleration is the same as before. Through what angle does it turn before it stops?

- (A) 3Δθ
- (B) 9Δθ
- (C) √3 Δθ
- (D) Δθ

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** From ω² = ω₀² + 2αΔθ with ω = 0, the stopping angle has size ω₀² / (2|α|). It depends on the **square** of ω₀, so tripling ω₀ multiplies the angle by 3² = 9.

- (A) assumes the angle is proportional to ω₀. That is true of the stopping **time**, t = ω₀ / |α|, not the angle.
- (C) turns the relationship upside down. It would be right if ω₀ depended on the square of the angle, but it is the angle that depends on the square of ω₀.
- (D) assumes the angle depends only on α. A faster start needs more turning to stop.
</details>

## Question 4 (calculation · core)

Take **counterclockwise as positive**. A laboratory centrifuge starts from rest and reaches 3000 rpm counterclockwise in 12 s, with constant angular acceleration.

(a) Convert 3000 rpm to rad/s.
(b) Calculate the angular acceleration.
(c) Calculate the number of revolutions the rotor makes while speeding up.

<details>
<summary>Worked solution</summary>

**(a)** ω = 3000 × 2π ÷ 60 = 100π ≈ **314 rad/s** (3.1 × 10² rad/s).

**(b)** α = (ω − ω₀) / t = 314.16 ÷ 12 ≈ **+26 rad/s²**.

**(c)** Δθ = ½(ω₀ + ω)t = ½ × 314.16 × 12 ≈ 1885 rad. Revolutions = 1885 ÷ 2π = **300 rev**.

**Check.** The average rate is 1500 rpm. 1500 rev/min × 0.20 min = 300 rev. ✓

Suggested mark points (3): 1 for the conversion with 2π and 60; 1 for α with unit; 1 for 300 rev with a valid method (either the angle equation or the average-rate check).
</details>

## Question 5 (graph · core)

Take **counterclockwise as positive**. A rotating shop display is driven by a motor that reverses it. Its angular velocity–time graph is one straight line from (0 s, +6.0 rad/s) to (5.0 s, −4.0 rad/s).

(a) Find the angular acceleration.
(b) At what time is the display momentarily at rest?
(c) Over which time interval is it slowing down, and over which is it speeding up? Give a reason.
(d) Find the net angular displacement and the total angle turned from 0 to 5.0 s.
(e) Describe the shape of the angle–time graph for the same 5.0 s, starting from θ = 0.

<details>
<summary>Worked solution</summary>

**(a)** Slope = (−4.0 − 6.0) rad/s ÷ 5.0 s = **−2.0 rad/s²**.

**(b)** ω falls by 2.0 rad/s each second, so it reaches 0 after 6.0 ÷ 2.0 = **3.0 s**.

**(c)** 0–3.0 s: ω positive, α negative, opposite signs, so **slowing down**. 3.0–5.0 s: ω negative, α negative, same signs, so **speeding up** (clockwise).

**(d)** Area 0–3.0 s: ½ × 3.0 × 6.0 = +9.0 rad. Area 3.0–5.0 s: ½ × 2.0 × (−4.0) = −4.0 rad.
Net Δθ = 9.0 − 4.0 = **+5.0 rad**. Total angle turned = 9.0 + 4.0 = **13 rad**.
Check with θ = ω₀t + ½αt² = 6.0 × 5.0 + ½ × (−2.0) × 25 = +5.0 rad. ✓

**(e)** θ rises from 0 with a slope that gets less steep (concave down), reaches a maximum of +9.0 rad at 3.0 s where the slope is zero, then falls with an increasingly steep negative slope to +5.0 rad at 5.0 s.

Suggested mark points (6): 1 for (a); 1 for (b); 1 for (c) with the sign-comparison reason; 1 for the net displacement with the negative area subtracted; 1 for the total angle with both areas added; 1 for (e) showing the maximum at 3.0 s with zero slope there.
</details>

## Question 6 (constructed response · stretch)

Take **counterclockwise as positive**. A student spins a bicycle wheel on a stand and lets it slow down by itself. She films a marker on the rim and records its angular position each second, counting whole turns:

| t (s) | 0 | 1.0 | 2.0 | 3.0 | 4.0 | 5.0 |
|---|---|---|---|---|---|---|
| θ (rad) | 0 | 11.5 | 22.0 | 31.5 | 40.0 | 47.5 |

She claims the wheel slows with a constant angular acceleration.

(a) Describe how to process these data into a graph that should be a straight line if her claim is true. Say what to plot on each axis.
(b) Carry out the processing. Find the angular acceleration and the angular velocity at t = 0.
(c) State whether the data support the claim, with a reason.
(d) Assuming the angular acceleration stays the same, predict when the wheel stops and how many revolutions it makes in total from t = 0.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** For each 1.0 s interval, find ω_avg = Δθ / Δt. For constant α, this equals the instantaneous ω at the **midpoint** of the interval. Plot ω_avg (vertical, rad/s) against midpoint time (horizontal, s). Constant α gives a straight line whose slope is α.

**(b)**

| Interval (s) | Midpoint t (s) | Δθ (rad) | ω_avg (rad/s) |
|---|---|---|---|
| 0–1.0 | 0.5 | 11.5 | 11.5 |
| 1.0–2.0 | 1.5 | 10.5 | 10.5 |
| 2.0–3.0 | 2.5 | 9.5 | 9.5 |
| 3.0–4.0 | 3.5 | 8.5 | 8.5 |
| 4.0–5.0 | 4.5 | 7.5 | 7.5 |

Slope = (7.5 − 11.5) rad/s ÷ (4.5 − 0.5) s = **−1.0 rad/s²**. Extending the line back 0.5 s from the first point: ω₀ = 11.5 + 1.0 × 0.5 = **12 rad/s**.

**(c)** The data **support** the claim. ω_avg falls by the same 1.0 rad/s in each equal 1.0 s step, so the points lie on one straight line.

**(d)** Stops when ω = 0: t = 12 ÷ 1.0 = **12 s**. Total angle = ω₀² / (2|α|) = 144 ÷ 2.0 = 72 rad, which is 72 ÷ 2π ≈ **11 rev** (11.5 rev to 3 significant figures).

| Point | What earns it |
|---|---|
| 1 | Calculates ω_avg = Δθ / Δt for each interval |
| 1 | Plots against midpoint times and names both axes |
| 1 | α = −1.0 rad/s² with sign and unit |
| 1 | ω₀ = 12 rad/s from the intercept or an equivalent argument |
| 1 | Supports the claim **because** ω falls by equal amounts in equal times |
| 1 | Stopping time 12 s and about 11 rev, with method |

**Alternative method for (b).** Using θ = ω₀t + ½αt² with two data points (for example t = 1.0 s and 2.0 s) and solving the pair of equations gives the same ω₀ and α. Full credit if the working is shown, but this does not by itself test the claim in (c) unless all points are checked.
</details>

## Question 7 (constructed response · stretch)

Two identical desk fans, A and B, start from rest and each speed up with constant angular acceleration to the same final angular velocity, 24 rad/s. Fan A takes 3.0 s; fan B takes 6.0 s.

Student 1 says: "Fan B speeds up for twice as long, but with half the angular acceleration, so it turns through twice the angle that fan A does." Student 2 says: "Fan B turns through four times the angle, because the angle turned depends on t², and t is doubled."

(a) Derive an expression for the angle turned by a fan that starts from rest and reaches angular velocity ω_f in time T, in terms of ω_f and T only.
(b) Use your expression to decide which student is right, and calculate the angle turned by each fan.
(c) Explain the error made by the student who is wrong.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** From rest, α = ω_f / T. Then Δθ = ½αT² = ½(ω_f / T)T² = **½ω_f T**. (Equivalently, Δθ is the area of the triangle under the ω–t graph: ½ × base T × height ω_f.)

**(b)** With ω_f the same, Δθ is proportional to T. Doubling T doubles the angle, so **Student 1** is right.
Fan A: ½ × 24 × 3.0 = **36 rad**. Fan B: ½ × 24 × 6.0 = **72 rad**. (α_A = 8.0 rad/s², α_B = 4.0 rad/s².)

**(c)** Student 2 used Δθ ∝ t², which holds only when α is **kept the same**. Here α is not the same: B's α is half of A's. Halving α and multiplying t² by 4 gives a factor of ½ × 4 = 2, not 4.

| Point | What earns it |
|---|---|
| 1 | Uses α = ω_f / T (or the area of the ω–t triangle) |
| 1 | Reaches Δθ = ½ω_f T |
| 1 | Chooses Student 1, linked to Δθ ∝ T at fixed ω_f |
| 1 | 36 rad and 72 rad |
| 1 | Explains that Δθ ∝ t² needs constant α, and α changes here |

</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "Measure angles in radians" in the [study guide](/advanced-course-resources/physics-1/5-1-rotational-kinematics-study-guide/) and Worked example 1.
- **Q2 wrong:** revisit the speeding-up table and Worked example 2. Always substitute signed angular velocities.
- **Q3 or Q7 wrong:** go back to "Functional dependence: predicting changes". Write the symbolic expression before reading off a factor.
- **Q5 incomplete:** work through Figure 2 (slopes and areas of an ω–t graph).
- **Q6 incomplete:** see "Investigating rotation in the lab". Your reasoning needs the *why*: equal changes in ω in equal times.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/5-1-rotational-kinematics-checklist/).
