---
resourceId: "mb-ap-physcem-13.2-practice"
title: "Electromagnetic Induction: Practice Questions (Physics C: E&M 13.2)"
description: "Seven original Marlbridge practice questions on Faraday's and Lenz's laws: directions, flux graphs, generators, changing areas, an experiment and a decaying current."
course: "physics-c-electricity-and-magnetism"
unit: 13
topics: ["13.2"]
resourceType: "practice-questions"
prerequisites:
  - "Faraday's law and Lenz's law"
prerequisiteResources: ["mb-ap-physcem-13.2-study-guide"]
learningObjectives:
  - "Find the size and direction of induced emfs and currents"
  - "Use functional dependence to predict how an emf changes"
  - "Design and analyse a measurement of induced emf using a linear graph"
  - "Combine a flux integral with Faraday's law for a time-dependent current"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "μ₀ = 4π × 10⁻⁷ T·m/A. Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-13.2-study-guide", "mb-ap-physcem-13.2-revision-notes", "mb-ap-physcem-13.2-checklist"]
next: "mb-ap-physcem-13.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism", "exam-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Question 6 is an experimental-design and graph question; Question 7 needs calculus."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data for every question: μ₀ = 4π × 10⁻⁷ T·m/A and 1 Wb/s = 1 V. Solenoids are long and ideal. Ignore the self-inductance of loops unless a question says otherwise. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

A horizontal copper ring is fixed in place. A bar magnet sits on the ring's axis, below the ring, with its north pole pointing up towards the ring. The magnet is pulled straight down, away from the ring. Viewed from above, what is the induced current in the ring?

- (A) Clockwise
- (B) Anticlockwise
- (C) Zero, because the field through the ring still points upward
- (D) Clockwise at first, then anticlockwise as the magnet gets further away

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The field from the north pole passes up through the ring. As the magnet moves away, this upward flux **decreases**. By Lenz's law the induced current makes an upward field inside the ring, to oppose the decrease. Thumb up, viewed from above: the fingers curl anticlockwise.

- (A) is the direction for an **increasing** upward flux (magnet moving towards the ring). It opposes the field instead of the change.
- (C) confuses flux with change in flux. The flux is still upward, but it is changing, so there is an emf.
- (D) has no basis: the flux decreases the whole time, so the direction does not reverse; only the size of the current falls.
</details>

## Question 2 (multiple choice · core)

The flux through each turn of a 40-turn coil falls steadily from +8.0 mWb to −8.0 mWb in 0.040 s, as the field through it reverses. What is the size of the average induced emf?

- (A) 8.0 V
- (B) 0.40 V
- (C) 16 V
- (D) 0

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The change in flux per turn is −8.0 − (+8.0) = −16 mWb. So |ℰ| = N|ΔΦ_B|/Δt = 40 × 0.016 Wb ÷ 0.040 s = 16 V.

- (A) uses a change of 8.0 mWb, forgetting that the flux passes through zero and reverses.
- (B) forgets to multiply by the 40 turns.
- (D) treats the start and end fluxes as cancelling. The flux changes throughout, so an emf is induced throughout.
</details>

## Question 3 (multiple choice · core)

A simple generator has a flat coil rotating at constant angular speed in a uniform magnetic field. The coil is rewound with **half** as many turns (same area) and then spun **twice** as fast. Compared with before, what happens to the peak emf and to the frequency of the emf?

- (A) The peak emf doubles; the frequency doubles.
- (B) The peak emf is unchanged; the frequency is unchanged.
- (C) The peak emf halves; the frequency doubles.
- (D) The peak emf is unchanged; the frequency doubles.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** ℰ = NBAω sin ωt, so the peak is NBAω. Halving N and doubling ω gives (1/2)(2) = 1: the peak is unchanged. The emf goes through one full cycle per revolution, so doubling the spin rate doubles the frequency.

- (A) includes the effect of ω but forgets that N was halved.
- (B) misses that the frequency follows the rotation rate.
- (C) includes the effect of N but forgets that ω also appears in the peak emf.
</details>

## Question 4 (calculation · core)

A square coil of side 0.12 m has 60 turns and a total resistance of 3.0 Ω. Its ends are joined. A uniform field points into the page, perpendicular to the coil. The field decreases steadily from 0.80 T to 0.20 T in 0.50 s.

(a) Calculate the induced emf. (b) Calculate the current and state its direction as seen on the page. (c) Calculate the total charge that flows round the coil.

<details>
<summary>Worked solution</summary>

1. (a) A = (0.12 m)² = 0.0144 m². dB/dt = (0.20 − 0.80) T ÷ 0.50 s = −1.2 T/s. |ℰ| = NA|dB/dt| = (60)(0.0144)(1.2) = **1.04 V**.
2. (b) I = 1.04 V ÷ 3.0 Ω = **0.35 A** (0.346 A). The flux into the page is decreasing, so the induced field inside the coil points into the page. Thumb into the page: the current is **clockwise** as seen on the page.
3. (c) q = IΔt = 0.346 A × 0.50 s = **0.17 C** (0.173 C). Check: q = NΔΦ_B/R = 60 × 0.0144 × 0.60 ÷ 3.0 = 0.173 C. The charge depends only on the total flux change, not on how fast it happens.

Suggested mark points (3): 1 for 1.04 V, including N; 1 for 0.35 A with clockwise and a Lenz's-law reason; 1 for 0.17 C.

Common error: leaving out N gives 0.017 V and a current 60 times too small.
</details>

## Question 5 (calculation · core)

A circular loop made of conducting elastic material lies in a uniform 0.60 T field that points out of the page, perpendicular to the loop. The loop is being squeezed so that its radius **decreases** at a steady 0.020 m/s.

(a) Find the induced emf when the radius is 0.15 m. (b) State the direction of the induced current as seen on the page, with a reason. (c) How long after the moment in (a) will the emf be half as big?

<details>
<summary>Worked solution</summary>

1. (a) Φ_B = Bπr², so |ℰ| = B d(πr²)/dt = B(2πr)|dr/dt| = (0.60)(2π × 0.15)(0.020) = **1.1 × 10⁻² V** (11.3 mV).
2. (b) The flux out of the page is decreasing, so the induced field inside the loop points out of the page, to oppose the decrease. The current is **anticlockwise** as seen on the page.
3. (c) With B and dr/dt fixed, ℰ ∝ r. The emf halves when r = 0.075 m. The radius falls by 0.075 m at 0.020 m/s, which takes **3.75 s** (about 3.8 s).

Suggested mark points (3): 1 for using dA/dt = 2πr dr/dt (chain rule); 1 for anticlockwise with a reason; 1 for r = 0.075 m and 3.75 s.

Common error: using ℰ = B × (change in area) without dividing by time, or using πr² dB/dt, which is zero here because B is constant.
</details>

## Question 6 (constructed response · experimental · core)

A student has a flat search coil of area 4.0 × 10⁻⁴ m² but does not know how many turns it has. She also has a long solenoid with a known number of turns per metre, a power supply whose current can be made to rise at a steady, adjustable rate, an ammeter, a data logger that records voltage, and a ruler.

(a) Describe a procedure she could use to find the number of turns on the search coil. Say what she should keep constant.

She obtains the following (fictional) data.

| dB/dt inside the solenoid (T/s) | 0.010 | 0.020 | 0.030 | 0.040 | 0.050 |
|---|---|---|---|---|---|
| Measured emf (mV) | 1.1 | 1.9 | 3.1 | 4.0 | 4.9 |

(b) Plot a graph of emf against dB/dt, with labelled axes and units, and draw a best-fit line.
(c) Use the gradient to find the number of turns.
(d) Explain why her graph should pass through the origin, and what she should see if she held the current steady.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Place the search coil inside the solenoid, near the middle, with its axis along the solenoid's axis (so the field is uniform and perpendicular to the coil). Connect the coil to the data logger. Make the solenoid current rise at a steady rate and measure dI/dt from the ammeter readings (or the supply setting); then dB/dt = μ₀n dI/dt. Record the steady emf. Repeat for at least five different ramp rates. Keep the coil's position and orientation fixed throughout.

**(b)** Emf (mV, vertical) against dB/dt (T/s, horizontal), with evenly spaced scales starting at zero. The points lie close to a straight line through (or very near) the origin.

**(c)** Faraday's law with constant area: ℰ = NA (dB/dt), so the gradient is NA. A best-fit line gives a gradient of about 0.097 V/(T/s) = 0.097 m². N = 0.097 ÷ (4.0 × 10⁻⁴) ≈ **240 turns**. (Answers from 235 to 250 are reasonable from a hand-drawn line.)

**(d)** If dB/dt = 0 there is no change in flux, so Faraday's law gives no emf: the line should pass through the origin. With the current held steady, the emf should read zero (apart from noise), even though the field inside the solenoid is strong.

| Point | What earns it |
|---|---|
| 1 | Coil inside the solenoid with axes aligned, and a way of setting a known dB/dt (μ₀n dI/dt) |
| 1 | Several ramp rates, with position and orientation kept constant |
| 1 | Axes labelled with quantities and units, sensible scales, points plotted correctly |
| 1 | Straight best-fit line (not joining dot to dot) |
| 1 | Identifies gradient = NA |
| 1 | N ≈ 240 from the gradient |
| 1 | Origin explained by "no change in flux, no emf", including the steady-current case |

</details>

## Question 7 (constructed response · stretch)

A long straight wire carries a current to the right, I(t) = I₀e^(−t/τ), with I₀ = 40 A and τ = 0.050 s. A rectangular loop lies in the plane of the page **above** the wire, with two sides parallel to it. The near side is d = 0.020 m from the wire, the far side is 0.050 m from it (so the loop is b = 0.030 m wide), and the loop is ℓ = 0.20 m long. The loop's resistance is 0.020 Ω.

(a) Derive an expression for the flux through the loop as a function of time.
(b) Find the induced emf and the induced current at t = 0.
(c) State the direction of the induced current, as seen on the page, with a reason.
(d) Find the total charge that flows round the loop as the current dies away.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Above a current flowing to the right, the field points **out of the page** and has size μ₀I/(2πx). Use strips parallel to the wire, of area ℓ dx:

Φ_B(t) = ∫ from d to d+b of [μ₀I(t)/(2πx)] ℓ dx = **(μ₀ℓ/2π) ln[(d + b)/d] I₀e^(−t/τ)**

With ln(0.050/0.020) = ln 2.5 = 0.916, the constant μ₀ℓ ln 2.5/(2π) = 3.67 × 10⁻⁸ Wb/A, so Φ_B(0) = 1.47 × 10⁻⁶ Wb.

**(b)** ℰ = −dΦ_B/dt = (μ₀ℓ/2π) ln 2.5 × (I₀/τ) e^(−t/τ). At t = 0: ℰ = 3.67 × 10⁻⁸ × (40 ÷ 0.050) = **2.93 × 10⁻⁵ V**. Current: I = 2.93 × 10⁻⁵ V ÷ 0.020 Ω = **1.47 × 10⁻³ A**.

**(c)** The flux out of the page is decreasing, so the induced field inside the loop must point out of the page. The induced current is **anticlockwise** as seen on the page.

**(d)** q = ∫I dt = (1/R)∫|ℰ| dt = |ΔΦ_B|/R = Φ_B(0)/R = 1.47 × 10⁻⁶ ÷ 0.020 = **7.3 × 10⁻⁵ C**. Check: I(0) × τ = 1.47 × 10⁻³ × 0.050 = 7.3 × 10⁻⁵ C.

| Point | What earns it |
|---|---|
| 1 | Field of the wire μ₀I/(2πx), out of the page above it, with strip area ℓ dx |
| 1 | Correct integral giving (μ₀ℓ/2π) ln[(d + b)/d] I(t) |
| 1 | Differentiates the exponential correctly to get ℰ(t) |
| 1 | ℰ(0) = 2.9 × 10⁻⁵ V and I(0) = 1.5 × 10⁻³ A |
| 1 | Anticlockwise, with "flux out of the page decreasing" as the reason |
| 1 | q = ΔΦ_B/R = 7.3 × 10⁻⁵ C (or by integrating I(t)) |

Carry forward an error in (a) into (b) and (d) once.
</details>

## How did you do?

- **Q1, Q4(b), Q5(b) or Q7(c) direction wrong:** re-read "Lenz's law: the direction" and Figure 1 in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-2-electromagnetic-induction-study-guide/).
- **Q2 or Q4 wrong:** see "Faraday's law" and Worked example 1.
- **Q3 wrong:** revisit the rotating coil in "Three ways to change the flux".
- **Q5 wrong:** compare with Worked example 2, where the area also changes.
- **Q6 incomplete:** read "Measuring an induced emf".
- **Q7 incomplete:** work through Worked example 2 of the [Topic 13.1 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-1-magnetic-flux-study-guide/) for the flux integral, then try again.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/13-2-electromagnetic-induction-checklist/).
