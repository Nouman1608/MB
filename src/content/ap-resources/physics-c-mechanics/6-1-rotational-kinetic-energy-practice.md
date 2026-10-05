---
resourceId: "mb-ap-physcm-6.1-practice"
title: "Rotational Kinetic Energy: Practice Questions (Physics C: Mechanics 6.1)"
description: "Seven original Marlbridge calculus-based practice questions on rotational kinetic energy: K = ½Iω², non-uniform rods, the translation-plus-rotation split, graphs and a falling-mass experiment."
course: "physics-c-mechanics"
unit: 6
topics: ["6.1"]
resourceType: "practice-questions"
prerequisites:
  - "Integrating polynomials; rotational inertia I = ∫r² dm (Topic 5.4)"
prerequisiteResources: ["mb-ap-physcm-6.1-study-guide"]
learningObjectives:
  - "Calculate rotational kinetic energy from I and ω, with ω found by differentiating θ(t)"
  - "Integrate ½v² dm for a rod of non-uniform density"
  - "Derive and use K = ½Mv_cm² + ½I_cm ω² without double counting"
  - "Sketch and interpret graphs of kinetic energy for a rotating body"
  - "Use energy data from a falling-mass experiment to find a rotational inertia"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic only. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-6.1-study-guide", "mb-ap-physcm-6.1-revision-notes", "mb-ap-physcm-6.1-checklist"]
next: "mb-ap-physcm-6.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics", "exam-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Angular velocity is always in rad/s. Polynomial coefficients carry units."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. In every formula, θ is in rad, ω in rad/s, t in s, x in m and λ in kg/m, so each numerical coefficient carries whatever unit makes the term correct. Use g = 9.8 m/s². Round final answers to 2 significant figures unless told otherwise. A calculator is used only for arithmetic.

## Question 1 (multiple choice · foundation)

A rigid body turns about a fixed axle. Its angular position is θ(t) = 2.0t², and its rotational inertia about the axle is 0.50 kg·m². What is its kinetic energy at t = 3.0 s?

- (A) 4.0 J
- (B) 36 J
- (C) 72 J
- (D) 81 J

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** ω = dθ/dt = 4.0t, so ω = 12 rad/s at t = 3.0 s. K = ½Iω² = ½ × 0.50 × 12² = 36 J.

- (A) uses the angular acceleration α = d²θ/dt² = 4.0 rad/s² in place of ω. Kinetic energy depends on how fast the body turns, not on how fast that rate changes.
- (C) leaves out the ½: 0.50 × 144 = 72 J.
- (D) puts the angular position θ(3.0) = 18 rad into ½Iθ². Position is not angular velocity.
</details>

## Question 2 (multiple choice · core)

A uniform rod of mass M and length L swings about a fixed pivot at one end with angular velocity ω. Its rotational inertia is ML²/3 about the pivot and ML²/12 about its centre of mass. What is its kinetic energy?

- (A) ML²ω²/24
- (B) ML²ω²/8
- (C) ML²ω²/6
- (D) 7ML²ω²/24

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The rod turns about a fixed axis, so K = ½I_pivot ω² = ½(ML²/3)ω² = ML²ω²/6. Check by splitting: v_cm = (L/2)ω, so ½Mv_cm² = ML²ω²/8, and ½I_cm ω² = ML²ω²/24. The sum is 3/24 + 1/24 = 4/24 = 1/6. ✓

- (A) is only the rotation about the centre of mass. It leaves out the motion of the centre of mass around the pivot.
- (B) is only the translational part, ½M(Lω/2)². It leaves out the rotation about the centre of mass.
- (D) adds ½I_pivot ω² and ½Mv_cm². I_pivot already includes the centre-of-mass motion (through the Md² term), so this counts it twice.
</details>

## Question 3 (multiple choice · core)

A turntable starts from rest on a frictionless axle. A motor gives it a constant angular acceleration. Which statement correctly describes the graph of its kinetic energy K against time t?

- (A) A straight line through the origin, because ω increases steadily.
- (B) A curve through the origin that starts flat and gets steeper, because K ∝ t².
- (C) A horizontal line, because the angular acceleration is constant.
- (D) A curve through the origin that starts steep and levels off, because K ∝ √t.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** With constant α from rest, ω = αt, so K = ½Iω² = ½Iα²t². That is a parabola: its slope dK/dt = Iα²t is zero at t = 0 and grows with time.

- (A) describes ω against t, not K. Squaring ω turns the straight line into a parabola.
- (C) confuses a constant angular acceleration with a constant kinetic energy. K is constant only when ω is constant.
- (D) has the shape of K against t the wrong way round. K ∝ √t would need ω ∝ t^¼, which is not constant acceleration.
</details>

## Question 4 (calculation · core)

A thin rod of length 1.2 m lies along the x-axis from a pivot at x = 0. Its linear density is λ(x) = 0.50 + 1.5x. It turns about the pivot at 3.0 rad/s, in the plane of the page.

(a) Find the mass of the rod.
(b) Find the rod's kinetic energy by integration.
(c) What fraction of the kinetic energy is in the outer half of the rod (0.60 m ≤ x ≤ 1.2 m)? Compare it with the fraction of the mass in the outer half.

<details>
<summary>Worked solution</summary>

1. **(a)** M = ∫₀^1.2 (0.50 + 1.5x) dx = 0.50 × 1.2 + 0.75 × 1.2² = 0.60 + 1.08 = **1.68 kg ≈ 1.7 kg**.
2. **(b)** I = ∫₀^1.2 x²(0.50 + 1.5x) dx = 0.50 × 1.2³/3 + 1.5 × 1.2⁴/4 = 0.288 + 0.7776 = 1.0656 kg·m². K = ½Iω² = ½ × 1.0656 × 9.0 = **4.80 J ≈ 4.8 J**.
3. **(c)** I_outer = ∫ from 0.60 to 1.2 of x²(0.50 + 1.5x) dx = 0.981 kg·m², so K_outer = 4.41 J. Fraction = 0.981 ÷ 1.0656 = **0.92 (92 %)**. Mass in the outer half: ∫ from 0.60 to 1.2 of (0.50 + 1.5x) dx = 1.11 kg, a fraction of **0.66**. The outer half carries far more of the energy than of the mass, because each piece contributes ½x²ω² dm.

Suggested mark points (4): 1 for M; 1 for setting up I = ∫x²λ dx (or ∫½(xω)²λ dx); 1 for K = 4.8 J; 1 for both fractions with the r² reason.

Common error: using I = ML²/3 for a uniform rod. That gives 0.81 kg·m² and 3.6 J. The density is not uniform, so the formula does not apply.
</details>

## Question 5 (constructed response · core)

A dumbbell is two small balls, each of mass m, joined by a light rod. Each ball is a distance d from the centre. The dumbbell slides across frictionless ice: its centre moves at speed v and it spins at angular velocity ω about its centre. At one instant the rod is perpendicular to the centre's velocity, and the ball on one side moves forward relative to the centre while the other moves backward.

(a) Write the speed of each ball at that instant.
(b) Add the two kinetic energies and show that the total equals ½(2m)v² + ½(2md²)ω².
(c) Explain why no term containing both v and ω appears in the final answer.
(d) Evaluate the total kinetic energy for m = 0.30 kg, d = 0.25 m, v = 4.0 m/s and ω = 10 rad/s, and check your answer using the speeds from (a).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Relative to the centre, each ball moves at dω, perpendicular to the rod. So the speeds are **v + dω** and **v − dω** (or |v − dω|).

**(b)** K = ½m(v + dω)² + ½m(v − dω)² = ½m(v² + 2vdω + d²ω²) + ½m(v² − 2vdω + d²ω²) = mv² + md²ω² = **½(2m)v² + ½(2md²)ω²**. The first term is ½Mv_cm² with M = 2m; the second is ½I_cm ω² with I_cm = 2md².

**(c)** The cross terms +mvdω and −mvdω cancel. They cancel because the balls' velocities relative to the centre of mass are equal and opposite: the total momentum relative to the centre of mass is zero. That holds for any rigid body, so the split never has a mixed term.

**(d)** ½(0.60)(4.0)² + ½(2 × 0.30 × 0.25²)(10)² = 4.8 + ½(0.0375)(100) = 4.8 + 1.875 = **6.7 J** (6.675 J). Check: speeds 6.5 m/s and 1.5 m/s; ½(0.30)(6.5² + 1.5²) = 0.15 × 44.5 = 6.675 J. ✓

| Point | What earns it |
|---|---|
| 1 | (a) Both speeds, v ± dω |
| 1 | (b) Expands both squares correctly |
| 1 | (b) Collects terms and identifies 2m as M and 2md² as I_cm |
| 1 | (c) Cross terms cancel because the relative velocities (or momenta about the centre of mass) are equal and opposite |
| 1 | (d) 6.7 J, with the check from the individual speeds |

**Alternative method for (c).** Quoting the general argument (∫v′ dm = 0 in the centre-of-mass frame) earns the point if it is linked to this dumbbell.
</details>

## Question 6 (constructed response · stretch)

A light string is wound around an axle of radius r = 0.050 m fixed to a wheel. A block of mass m = 0.20 kg hangs from the string. The block is released from rest and falls a height h, turning the wheel without the string slipping. A photogate measures the wheel's angular velocity ω after each drop. Friction is assumed negligible. A student records:

| h (m) | 0.10 | 0.20 | 0.30 | 0.40 | 0.50 |
|---|---|---|---|---|---|
| ω (rad/s) | 5.62 | 7.90 | 9.72 | 11.17 | 12.54 |

(a) Using energy, show that ω² = 2mgh/(I + mr²), where I is the rotational inertia of the wheel and axle.
(b) State what to plot to obtain a straight line through the origin, and give the slope in symbols.
(c) Use the data to find I.
(d) Find the fraction of the block's lost gravitational energy that ends up as kinetic energy of the wheel.
(e) Real bearings have some friction. State whether ignoring it makes the value of I in (c) too large or too small, and explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The block–wheel–Earth system loses gravitational potential energy mgh. With no friction, it all becomes kinetic energy: mgh = ½mv² + ½Iω². The string does not slip, so v = rω. Then mgh = ½(mr² + I)ω², so **ω² = 2mgh/(I + mr²)**.

**(b)** Plot **ω² (rad²/s²) against h (m)**. The slope is **2mg/(I + mr²)**.

**(c)** ω² values: 31.6, 62.4, 94.5, 124.8, 157.3 rad²/s². Each ω²/h is close to 314, and a best-fit line through the origin gives a slope of about 314 rad²/(s²·m). Then I + mr² = 2mg/slope = 2 × 0.20 × 9.8/314 = 0.0125 kg·m², and mr² = 0.20 × 0.050² = 0.0005 kg·m². So **I ≈ 0.012 kg·m²**.

**(d)** The wheel's share is ½Iω² ÷ ½(I + mr²)ω² = I/(I + mr²) = 0.0120/0.0125 = **0.96**. Almost all the energy goes into the wheel, because its rotational inertia is much larger than mr².

**(e)** Too **large**. Friction takes some energy, so each ω is smaller than the friction-free model predicts. The slope is smaller, and I = 2mg/slope − mr² comes out larger than the true value. The analysis puts the "missing" energy into the wheel's inertia.

| Point | What earns it |
|---|---|
| 1 | (a) Energy conservation with both kinetic energy terms and v = rω |
| 1 | (b) ω² against h, slope 2mg/(I + mr²) |
| 1 | (c) Slope near 314 rad²/(s²·m) from the data (not from one point only) |
| 1 | (c) I ≈ 0.012 kg·m², subtracting mr² (accept 0.0125 kg·m² if mr² is explicitly neglected with a reason) |
| 1 | (d) 0.96, **and** (e) "too large" with the reasoning about the smaller slope |

**Alternative for (c).** Plotting ω against √h and squaring the slope earns the slope point if the working is clear.
</details>

## Question 7 (explanation · stretch)

A thin hoop and a uniform disc have the same mass M and radius R. Each spins about its central axis, perpendicular to its plane.

(a) Treat the disc as a set of thin rings of radius r and width dr. Show by integrating ½v² dm that the disc's kinetic energy is ¼MR²ω².
(b) The hoop and the disc are given the **same** kinetic energy. Find ω_hoop/ω_disc.
(c) A student says: "The hoop always has more kinetic energy than the disc, because its mass is further from the axis." Explain when this claim is correct and when it is not.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The disc's surface density is σ = M/(πR²). A ring of radius r and width dr has mass dm = σ(2πr dr) and every point on it moves at v = rω. So K = ∫₀ᴿ ½(rω)²σ2πr dr = πσω² ∫₀ᴿ r³ dr = πσω²R⁴/4 = (M/(πR²)) × πω²R⁴/4 = **¼MR²ω²**.

**(b)** The hoop's mass is all at radius R, so K_hoop = ½MR²ω_hoop². Setting ½MR²ω_hoop² = ¼MR²ω_disc² gives ω_hoop² = ½ω_disc², so **ω_hoop/ω_disc = 1/√2 ≈ 0.71**.

**(c)** The claim is correct **only at the same angular velocity**. Then every piece of the hoop moves at the rim speed Rω, while most of the disc moves slower, so K_hoop = 2K_disc. But kinetic energy depends on ω as well as on the mass distribution. If the disc spins fast enough (faster than √2 times the hoop's ω), it has more kinetic energy. "Further from the axis" means larger I, not automatically larger K.

| Point | What earns it |
|---|---|
| 1 | (a) Ring mass dm = (M/πR²)2πr dr with v = rω |
| 1 | (a) Integrates to ¼MR²ω² |
| 1 | (b) ω_hoop/ω_disc = 1/√2 |
| 1 | (c) Claim true at equal ω (K_hoop = 2K_disc), false in general because K also depends on ω, with an example or condition |
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "From ½v² dm to ½Iω²" and "Graphs and comparisons" in the [study guide](/advanced-course-resources/physics-c-mechanics/6-1-rotational-kinetic-energy-study-guide/).
- **Q2 or Q5 wrong:** revisit "Moving and spinning: translation plus rotation" and Worked example 1(b). Use one method, never both.
- **Q4 or Q7 incomplete:** practise setting up dm = λ dx (or σ2πr dr) and v = rω before integrating, as in Worked example 1(a).
- **Q6 incomplete:** link each step of the analysis to energy conservation, and say which way an ignored effect pushes your result.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/6-1-rotational-kinetic-energy-checklist/).
