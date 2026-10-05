---
resourceId: "mb-ap-physcm-7.5-practice"
title: "Simple and Physical Pendulums: Practice Questions (Physics C: Mechanics 7.5)"
description: "Seven original Marlbridge calculus-based practice questions on physical, simple and torsion pendulums: periods, derivations from τ = Iα, linearised timing data and adding mass."
course: "physics-c-mechanics"
unit: 7
topics: ["7.5"]
resourceType: "practice-questions"
prerequisites:
  - "Rotational inertia and the parallel axis theorem (Topic 5.4)"
  - "The SHM equation and T = 2π/ω (Topics 7.1 to 7.3)"
prerequisiteResources: ["mb-ap-physcm-7.5-study-guide"]
learningObjectives:
  - "Calculate the period of physical, simple and torsion pendulums, using I about the pivot"
  - "Distinguish angular frequency from angular velocity in angular SHM"
  - "Derive the physical pendulum period from Newton's second law in rotational form and the small-angle approximation"
  - "Plan a pendulum measurement and linearise timing data to find g and a rotational inertia"
  - "Test claims about how adding mass changes a pendulum's period"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Angles in radians. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-7.5-study-guide", "mb-ap-physcm-7.5-revision-notes", "mb-ap-physcm-7.5-checklist"]
next: "mb-ap-physcm-7.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "All amplitudes are small unless a question says otherwise. Every rotational inertia must be about the pivot."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. Use g = 9.8 m/s² and keep angles in radians. Assume small amplitudes unless told otherwise. Useful rotational inertias: thin hoop about its centre, MR²; uniform rod about its centre, ML²/12; uniform rod about one end, ML²/3. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

A thin metal hoop of radius 0.20 m hangs on a horizontal peg that passes through a point on its rim. The hoop swings in its own plane with small amplitude. What is its period?

- (A) 0.20 s
- (B) 0.90 s
- (C) 1.1 s
- (D) 1.3 s

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The centre of mass is at the hoop's centre, so d = R = 0.20 m. Parallel axis: I = MR² + MR² = 2MR². T = 2π√(I/(Mgd)) = 2π√(2MR²/(MgR)) = 2π√(2R/g) = 2π√(0.40/9.8) = **1.3 s**.

- (A) leaves out the 2π: √(2R/g) = 0.20 s is 1/ω, not the period.
- (B) uses I = MR², the value about the centre, and forgets the parallel axis term. The hoop turns about the peg, not its centre.
- (C) uses the disk value ½MR² for I_cm. A hoop has all its mass at radius R, so I_cm = MR².
</details>

## Question 2 (multiple choice · core)

A simple pendulum and a torsion pendulum (a disk on a vertical wire) each have a period of 2.0 s on Earth. Both are taken to a moon where the gravitational field is g/6. What are their new periods?

- (A) Simple 4.9 s; torsion 4.9 s
- (B) Simple 4.9 s; torsion 2.0 s
- (C) Simple 0.82 s; torsion 2.0 s
- (D) Simple 2.0 s; torsion 2.0 s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** For the simple pendulum T = 2π√(l/g), so T ∝ 1/√g. With g divided by 6, T is multiplied by √6: 2.0 × 2.45 = **4.9 s**. The torsion pendulum has T = 2π√(I/κ). Its restoring torque comes from the twisted wire, so g does not appear and T stays **2.0 s**.

- (A) assumes both depend on g. The torsion pendulum's weight gives no restoring torque.
- (C) gets the direction wrong: a weaker restoring torque means slower swings and a **longer** period.
- (D) assumes the simple pendulum period depends on length alone. Weaker gravity means a weaker restoring torque.
</details>

## Question 3 (multiple choice · core)

A physical pendulum swings with angular amplitude 0.10 rad and angular frequency ω = 3.0 rad/s. What is its greatest angular speed?

- (A) 0.30 rad/s
- (B) 0.48 rad/s
- (C) 3.0 rad/s
- (D) 30 rad/s

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** θ = θ_max cos(ωt + φ), so dθ/dt = −ωθ_max sin(ωt + φ). The greatest size is ωθ_max = 3.0 × 0.10 = **0.30 rad/s**, reached at the bottom of the swing.

- (B) is the frequency f = ω/2π = 0.48 Hz, which counts oscillations per second. It is not an angular speed.
- (C) treats the angular frequency ω as the angular velocity. ω is constant; the angular speed varies from 0 to 0.30 rad/s.
- (D) divides ω by θ_max instead of multiplying. Check units: rad/s ÷ rad does not give rad/s.
</details>

## Question 4 (calculation · core)

A uniform rod of mass 0.40 kg and length 0.60 m is pivoted at its top end. A small 0.20 kg block, which you can treat as a point mass, is fixed to its bottom end. The system swings with small amplitude. Find (a) the rotational inertia about the pivot, (b) the distance from the pivot to the centre of mass, (c) the period, and (d) the length of a simple pendulum with the same period.

<details>
<summary>Worked solution</summary>

1. **(a)** I = (1/3)(0.40)(0.60)² + (0.20)(0.60)² = 0.048 + 0.072 = **0.12 kg·m²**.
2. **(b)** d = (0.40 × 0.30 + 0.20 × 0.60) ÷ 0.60 = 0.24 ÷ 0.60 = **0.40 m**.
3. **(c)** mgd = (0.60)(9.8)(0.40) = 2.35 N·m. T = 2π√(0.12 ÷ 2.35) = **1.4 s** (1.42 s to 3 s.f.).
4. **(d)** l_eq = I/(md) = 0.12 ÷ (0.60 × 0.40) = **0.50 m**.

Suggested mark points (4): 1 for I as the sum of the rod and point-mass terms about the pivot; 1 for d from the centre-of-mass formula; 1 for the period from T = 2π√(I/mgd); 1 for l_eq.

**Alternative for mgd.** Add the two gravitational torques: (0.40)(9.8)(0.30) + (0.20)(9.8)(0.60) = 2.35 N·m, without finding d.

Common error: treating the system as a simple pendulum of length 0.60 m gives 1.6 s. The rod's mass is spread out, so the effective length is only 0.50 m.
</details>

## Question 5 (constructed response · core)

A rigid body of mass m swings about a fixed horizontal axis. Its centre of mass is a distance d from the axis, and its rotational inertia about the axis is I. Let θ be the angle between the line from the axis to the centre of mass and the vertical, with counterclockwise positive.

(a) Write an expression for the torque about the axis exerted by gravity, and explain the sign.
(b) Use Newton's second law in rotational form and a suitable approximation to derive a differential equation for θ(t).
(c) Hence derive an expression for the period.
(d) Show that your result gives T = 2π√(l/g) for a simple pendulum of length l.
(e) Explain how the true period changes if the amplitude is made large, giving a reason.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** τ = **−mgd sin θ**. The weight's lever arm is d sin θ. The minus sign shows the torque always turns the body back towards θ = 0.

**(b)** τ = Iα = I d²θ/dt², so I d²θ/dt² = −mgd sin θ. For small θ in radians, sin θ ≈ θ, giving **d²θ/dt² = −(mgd/I)θ**.

**(c)** This has the SHM form d²θ/dt² = −ω²θ, so ω = √(mgd/I) and **T = 2π/ω = 2π√(I/(mgd))**.

**(d)** For a point mass on a light string, d = l and I = ml². T = 2π√(ml²/(mgl)) = **2π√(l/g)**.

**(e)** At large angles sin θ < θ, so the true restoring torque is weaker than the model predicts. The body returns more slowly and the **period is longer** than 2π√(I/(mgd)). The motion is no longer exactly SHM.

| Point | What earns it |
|---|---|
| 1 | (a) −mgd sin θ, with the lever arm d sin θ or the restoring direction explained |
| 1 | (b) Applies τ = I d²θ/dt² with the gravitational torque |
| 1 | (b) Uses sin θ ≈ θ (radians) to reach d²θ/dt² = −(mgd/I)θ |
| 1 | (c) Identifies ω² = mgd/I and gives T = 2π√(I/(mgd)) |
| 1 | (d) Substitutes I = ml² and d = l and shows m cancels |
| 1 | (e) Longer period, because sin θ < θ makes the restoring torque weaker |

**Alternative for (c).** Substituting θ = θ_max cos(ωt) into the equation and solving for ω earns the point.
</details>

## Question 6 (constructed response · stretch)

A student wants to measure g with a uniform bar of length 1.000 m that has holes drilled at several distances d from its centre. For each hole she hangs the bar on a knife-edge, sets it swinging with a small amplitude and times 20 oscillations.

| d (m) | 0.100 | 0.200 | 0.300 | 0.400 | 0.500 |
|---|---|---|---|---|---|
| time for 20 oscillations (s) | 38.7 | 31.6 | 30.5 | 31.3 | 32.8 |

(a) Explain two features of her procedure that reduce uncertainty, and suggest one further improvement.
(b) Write I about a hole as I = m(k² + d²), where k² = I_cm/m. Show that T²d = (4π²/g)d² + (4π²/g)k².
(c) Calculate T²d and d² for each hole. Plot T²d against d² and draw a best-fit line.
(d) Use your line to find g and k². Compare k² with the value expected for a uniform bar.
(e) Show that the period is smallest when d = k, and find that d.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Timing 20 oscillations cuts a 0.2 s reaction-time error to about 0.01 s per period. A small amplitude keeps sin θ ≈ θ valid. Improvements: time from the vertical position, where the bar moves fastest; repeat and average; measure d to the balance point.

**(b)** T = 2π√(I/(mgd)) = 2π√((k² + d²)/(gd)). Square: T² = 4π²(k² + d²)/(gd). Multiply by d: **T²d = (4π²/g)d² + (4π²/g)k²**. So T²d against d² is a straight line.

**(c)**

| d (m) | 0.100 | 0.200 | 0.300 | 0.400 | 0.500 |
|---|---|---|---|---|---|
| T (s) | 1.935 | 1.580 | 1.525 | 1.565 | 1.640 |
| d² (m²) | 0.0100 | 0.0400 | 0.0900 | 0.160 | 0.250 |
| T²d (s²·m) | 0.374 | 0.499 | 0.698 | 0.980 | 1.345 |

Plot T²d (s²·m, 0 to 1.4) against d² (m², 0 to 0.25). The points lie close to a straight line.

**(d)** The best-fit line has slope ≈ 4.04 s²/m and intercept ≈ 0.335 s²·m. So g = 4π²/slope = 39.5 ÷ 4.04 ≈ **9.8 m/s²**, and k² = intercept ÷ slope = 0.335 ÷ 4.04 ≈ **0.083 m²**. For a uniform bar, I_cm/m = L²/12 = 1.000²/12 = 0.0833 m², which agrees.

**(e)** T² = (4π²/g)(k²/d + d). d(T²)/dd = (4π²/g)(1 − k²/d²) = 0 when **d = k** (the second derivative is positive, so it is a minimum). Here d = √0.083 ≈ **0.29 m**, consistent with the shortest timing in the table.

| Point | What earns it |
|---|---|
| 1 | (a) Two valid uncertainty-reducing features explained, plus one sensible improvement |
| 1 | (b) Substitutes I = m(k² + d²) and rearranges to the linear form |
| 1 | (c) Correct T²d and d² values, with axes labelled with quantities and units and sensible scales |
| 1 | (d) g ≈ 9.8 m/s² from the slope (accept 9.6–10.0 m/s²) |
| 1 | (d) k² ≈ 0.083 m² from intercept ÷ slope, compared with L²/12 |
| 1 | (e) Differentiates and sets the derivative to zero to show d = k, with d ≈ 0.29 m |

**Alternatives.** In (d), two well-separated points on the best-fit line earn both marks. In (e), differentiating T instead of T² is equally valid.
</details>

## Question 7 (explanation · stretch)

A uniform rod of mass M and length L = 0.90 m swings about a pivot at its top end. A student says: "Mass cancels out in pendulum formulas, so sticking a lump of putty of mass M anywhere on the rod will not change its period."

(a) Find the period of the rod alone.
(b) Find the period when the putty (treated as a point mass) is fixed at the bottom end.
(c) Show that there is one point below the pivot where the putty leaves the period unchanged, and find it.
(d) Explain when the student's claim is true and why it fails in general.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** I = ML²/3, d = L/2. T₀ = 2π√((ML²/3)/(MgL/2)) = 2π√(2L/(3g)) = 2π√(0.60/9.8) = **1.6 s** (1.55 s to 3 s.f.).

**(b)** I = ML²/3 + ML² = 4ML²/3. The gravitational torque factor is Mg(L/2) + MgL = 3MgL/2. T = 2π√((4L²/3)/(3gL/2)) = 2π√(8L/(9g)) = **1.8 s** (1.80 s). The period grows by a factor √(4/3) ≈ 1.15.

**(c)** With putty of mass m at distance r below the pivot, the period is unchanged if (ML²/3 + mr²)/(ML/2 + mr) = 2L/3. Cross-multiply: ML²/3 + mr² = ML²/3 + (2L/3)mr, so mr² = (2L/3)mr. Apart from r = 0, this gives **r = 2L/3 = 0.60 m**, exactly the equivalent simple pendulum length I/(Md).

**(d)** The claim is true when **all the mass is scaled by the same factor**, as when the whole rod is made denser: I and mgd grow together. It fails in general because added mass raises I by mr² but the torque factor by only mgr. Their ratio, r, matches the pendulum's own I/(Md) only at r = l_eq (or at the pivot, where the putty adds nothing to either).

| Point | What earns it |
|---|---|
| 1 | (a) T₀ from I = ML²/3 and d = L/2 |
| 1 | (b) Adds ML² to I **and** MgL to the torque factor, giving about 1.8 s |
| 1 | (c) Sets up the equal-ratio condition and solves r = 2L/3 |
| 1 | (d) Explains that I grows with r² but the torque grows with r, so mass placement matters |

Finding 0.60 m by trying positions numerically earns the (c) point if checked by substitution.
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read Worked example 1 in the [study guide](/advanced-course-resources/physics-c-mechanics/7-5-simple-physical-pendulums-study-guide/): I about the pivot, d to the centre of mass.
- **Q2 wrong:** revisit "The torsion pendulum" and compare its restoring torque with gravity's.
- **Q3 wrong:** go back to "From τ = Iα to SHM" and the difference between ω and dθ/dt.
- **Q5 incomplete:** follow Figure 1 and the derivation step by step, then the small-angle table.
- **Q6 or Q7 incomplete:** read "Designing a pendulum experiment" and why mass cancels for a simple pendulum.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/7-5-simple-physical-pendulums-checklist/).
