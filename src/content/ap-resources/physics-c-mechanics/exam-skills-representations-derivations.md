---
resourceId: "mb-ap-physcm-exam-skills-representations-derivations"
title: "Representations, Derivations and Experimental Design: Exam Skills Guide (Physics C: Mechanics)"
description: "How to draw free-body diagrams, motion graphs and energy charts, set out calculus derivations, check results with units and limits, and design and linearise experiments."
course: "physics-c-mechanics"
unit: 1
topics: []
resourceType: "exam-skills"
prerequisites:
  - "You have studied most of Units 1 to 7 and are revising for the free-response section"
  - "Differentiating, integrating with limits and separating variables"
learningObjectives:
  - "Draw free-body diagrams, motion graphs and energy representations that follow the conventions markers expect"
  - "Set out a derivation from a fundamental principle, including a differential equation, a variable-force integral and a rotational inertia integral"
  - "Check a symbolic result with units, limiting cases and known bounds"
  - "Explain whether a diagram, an equation and a graph of one scenario agree"
  - "Design a sound experiment and linearise data so that a slope gives the quantity you want"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic, powers, roots and best-fit slopes. Use g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-2.9-study-guide", "mb-ap-physcm-3.2-study-guide", "mb-ap-physcm-5.4-study-guide", "mb-ap-physcm-2.7-study-guide", "mb-ap-physcm-7.3-study-guide", "mb-ap-physcm-exam-skills-task-verbs"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "A free-body diagram shows only real forces on the object, one labelled arrow each, starting on the object. No components, no net-force arrow, no velocity."
  - "A derivation starts from a fundamental principle written in general form, then substitutes, then solves for the requested quantity in the allowed symbols only."
  - "If a force depends on position, velocity or time, integrate or solve a differential equation. Constant-acceleration equations do not apply."
  - "Check every symbolic answer: units, a limiting case (set something to zero or make it very large) and a known bound."
  - "In an experiment, change one variable, measure one, and rearrange the theory into a straight line whose slope contains the quantity you want."
faqs:
  - question: "Do I lose marks if my free-body diagram has components on it?"
    answer: "Often, yes. Draw each force once, as a single arrow. If components help you, draw them on a separate sketch or show them clearly as dashed lines next to the diagram, never as extra forces."
  - question: "What counts as a fundamental principle to start a derivation?"
    answer: "A general law or definition such as ΣF = ma, the work-energy theorem, conservation of energy or momentum, τ = Iα, or I = ∫r² dm, or an equation from the reference sheet. Write it first, in general form, before you substitute anything."
  - question: "Should I force my best-fit line through the origin?"
    answer: "No. Draw the line that best fits the points. If the theory predicts a zero intercept and your line misses it, mention the intercept and suggest a reason, but use the slope as measured."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## How to use this guide

This guide is for Physics C: Mechanics students who know the physics but lose free-response marks on diagrams, derivations and graphs. It covers Units 1 to 7. Try each worked example before reading the strong answer.

Every question here is **original Marlbridge practice**, not past exam material. The marks shown are a **suggested Marlbridge rubric** to help you judge your own work. They are not official scoring.

## The free-response section at a glance

Section II has **4 questions in 95 minutes**, worth 50% of the exam. You read them in the Bluebook app and write answers by hand in a paper booklet. A four-function, scientific or graphing calculator is allowed. The order is fixed:

| Question | Type | Points | Suggested time | What it rewards |
|---|---|---|---|---|
| 1 | Mathematical Routines (MR) | 10 | 20–25 min | Deriving and calculating, helped by a diagram or sketch |
| 2 | Translation Between Representations (TBR) | 12 | 25–30 min | Diagram, derivation and graph of one scenario, then linking them |
| 3 | Experimental Design and Analysis (LAB) | 10 | 25–30 min | A workable procedure, then a linear graph of given data |
| 4 | Qualitative/Quantitative Translation (QQT) | 8 | 15–20 min | A justified claim linked to a derivation |

Creating representations (Science Practice 1) is tested **only** in this section, not in multiple choice.

## Representations that earn marks

**Free-body diagrams.** Follow these rules unless the question says otherwise.

- Draw the object as a dot. For torque problems, draw its outline and put each force where it acts.
- Draw **one arrow per force**, starting on the object and pointing away from it.
- Label each force so its source is clear: F_g (Earth on block), F_N (floor on block), T (rope on block).
- Show only real forces **on** the object: no "ma", net-force or velocity arrow, no components.
- If asked for relative lengths, make equal forces equal and bigger forces longer.

**Motion graphs.** Read the slope and the area.

| Graph | Slope gives | Area under it gives |
|---|---|---|
| x against t | velocity v | — |
| v against t | acceleration a | displacement Δx |
| a against t | — | change in velocity Δv |
| F against t or F against x | — | impulse J, or work W |

A sketch needs no exact values, but its features must be right: starting value, sign, zeros, curvature and any asymptote.

**Energy representations.** For a bar chart, name the system first, draw one bar per kind of energy at the start and end, and one for work by external forces. The bars must balance. On a U(x) graph, F_x = −dU/dx (the force points downhill), turning points are where the total-energy line meets U(x), and equilibrium is where the slope is zero.

## Derivations: the routine markers look for

A "derive" answer has four visible parts.

1. **Start from a fundamental principle** in general form (ΣF = ma, W_net = ΔK, τ = Iα, I = ∫r² dm) or a reference-sheet equation.
2. **Substitute** this scenario's forces or quantities, with signs matching your axis.
3. **Solve**, showing each step.
4. **Finish** with the requested quantity alone, in the allowed symbols only.

Three calculus routines come up again and again.

| Routine | Starting point | Key step | Common trap |
|---|---|---|---|
| Differential equation from the second law | m dv/dt = ΣF(v), or m d²x/dt² = −kx | Separate variables with matching limits, or recognise d²x/dt² = −ω²x | Using constant-acceleration equations |
| Integrating a variable force | W = ∫F(x) dx, J = ∫F(t) dt | Integrate between the start and end values | Multiplying the force by the distance or time |
| Rotational inertia by integration | I = ∫r² dm | Write dm = λ dx (rod) or dm = σ·2πr dr (disk), with all of dm at one distance r | Using a uniform-object formula for a non-uniform object |

Full methods are in [Topic 2.9](/advanced-course-resources/physics-c-mechanics/2-9-resistive-forces-study-guide/), [Topic 3.2](/advanced-course-resources/physics-c-mechanics/3-2-work-study-guide/) and [Topic 5.4](/advanced-course-resources/physics-c-mechanics/5-4-rotational-inertia-study-guide/).

**Check every result.**

- **Units.** Added terms share units; the answer has the units of the quantity asked for.
- **Limiting cases.** With no friction, a light pulley or equal masses, does the answer reduce to a result you know?
- **Bounds and trends.** Is the answer between two simple cases? Does it grow when it should?

If a question asks whether an answer is reasonable, a check like this is the evidence it wants.

## Translating between representations

One scenario can be described in words, a diagram, an equation and a graph. TBR and QQT questions often ask whether two of your answers agree, so decide which feature links them.

| From | To | What must match |
|---|---|---|
| Free-body diagram | Second-law equation | One term per arrow, same direction and sign |
| Equation for v(t) | Sketch of v against t | Starting value, sign, zeros, asymptote, curvature |
| Energy bar chart | Energy equation | One term per bar; totals balance |
| Words ("speeds up ever more slowly") | v–t graph | Rising, concave-down curve |

A strong "do they agree?" answer names both representations, the shared feature and the physics linking them.

## Designing an experiment and linearising data

**The design part.** A sound procedure:

- changes **one** variable, measures **one**, and says what is kept the same;
- names realistic equipment (metre stick, calipers, balance, photogate, motion sensor, force sensor) and what each measures;
- uses at least five values over a wide range, repeating and averaging to reduce uncertainty;
- says what to plot and what the slope or intercept will tell you.

**Linearising.** Rearrange the theory into y = (slope)x + (intercept), where y and x are measured or calculated. The slope then contains the quantity you want.

| Theory | Plot (y against x) | Slope | Expected intercept |
|---|---|---|---|
| T = 2π√(m/k) for a mass on a spring | T² against m | 4π²/k | 0 |
| v = v₀e^(−t/τ) for coasting with drag | ln v against t | −1/τ | ln v₀ |

Label axes with units and use most of the grid. Draw one best-fit line; never join the dots. Take the slope from two far-apart points **on the line**, not from data points. If the line misses the expected intercept, say so and suggest a reason.

## Worked example 1: a nonlinear bumper (Unit 3)

**Question.** A cart of mass m moves at speed v₀ along a level, frictionless track towards a rubber bumper. When the bumper is compressed by x, it exerts a force of magnitude αx² on the cart, where α is a positive constant. (a) Derive an expression for the greatest compression x_max in terms of m, v₀ and α. (b) Calculate x_max for m = 0.80 kg, v₀ = 1.5 m/s and α = 400 N/m².

**Weak answer.** "½mv₀² = ½αx², so x = v₀√(m/α) = 0.067 m."

**What it misses.** It treats the bumper as a Hooke's-law spring and starts from a remembered formula, not a principle. Units expose it: α is in N/m², so ½αx² is in newtons, not joules.

**Strong answer.**

1. Work-energy theorem for the cart: W_net = ΔK.
2. Take +x into the bumper. The bumper force is F_x = −αx², so W = ∫₀^x_max (−αx²) dx = −αx_max³/3.
3. ΔK = 0 − ½mv₀². So −αx_max³/3 = −½mv₀², giving **x_max = (3mv₀²/(2α))^(1/3)**.
4. Check. mv₀²/α is in (kg·m²/s²) ÷ (N/m²) = m³, so x_max is in metres. v₀ → 0 gives x_max → 0; a stiffer bumper gives less compression.
5. (b) x_max = (3 × 0.80 × 1.5² ÷ 800)^(1/3) = (0.00675)^(1/3) = **0.19 m**.

| Suggested Marlbridge rubric | Point |
|---|---|
| Starts from the work-energy theorem or energy conservation, with work as an integral | 1 |
| Correct integral of the variable force with correct limits | 1 |
| Correct expression for x_max | 1 |
| Correct value with unit | 1 |

## Worked example 2: a non-uniform rod (Unit 5)

**Question.** A thin rod of length L and mass M is pivoted at one end, x = 0. Its linear mass density is greatest at the pivot and falls steadily to zero at the free end: λ = λ₀(1 − x/L). (a) Derive its rotational inertia about the pivot in terms of M and L. (b) Show that your answer is reasonable.

**Weak answer.** "I = ⅓ML² for a rod about its end."

**What it misses.** That formula is for a **uniform** rod. There is no integral, no link between λ₀ and M, and no check.

**Strong answer.**

1. I = ∫r² dm, with r = x and dm = λ dx = λ₀(1 − x/L) dx.
2. Mass: M = ∫₀ᴸ λ₀(1 − x/L) dx = λ₀L/2, so λ₀ = 2M/L.
3. I = ∫₀ᴸ x²λ₀(1 − x/L) dx = λ₀(L³/3 − L³/4) = λ₀L³/12 = **⅙ML²**.
4. Check. Less mass is far from the pivot than in a uniform rod, so I should be below ⅓ML². The centre of mass is at L/3, and I about the pivot cannot be less than M(L/3)² = ML²/9. 1/9 < ⅙ < ⅓, so the answer is reasonable. Units: kg·m².

| Suggested Marlbridge rubric | Point |
|---|---|
| Sets up I = ∫x²λ dx with the given λ | 1 |
| Relates λ₀ to M by integrating λ | 1 |
| Correct result ⅙ML² | 1 |
| Justifies with a valid bound or comparison | 1 |

## Worked example 3: friction from a tilted board (Unit 2)

**Question.** Students want to find the coefficient of kinetic friction μ_k between a wooden block and a board. (a) Describe a procedure that changes the angle θ of the board. (b) They release the block from rest at five angles and measure its acceleration a down the board. Use the data to find μ_k.

| θ (°) | 25 | 30 | 35 | 40 | 45 |
|---|---|---|---|---|---|
| a (m/s²) | 1.52 | 2.32 | 3.24 | 4.01 | 4.87 |

**Weak answer.** "Tilt the board until the block slides; then μ = tan θ. Using 45°, μ = 1.0."

**What it misses.** μ = tan θ holds only at constant velocity; this block speeds up. It ignores the measured a, names no equipment or repeats, and uses no graph.

**Strong answer.**

(a) Vary θ over five values from 25° to 45°, finding sin θ = height ÷ length of the board with a metre stick. Keep the block, surface and release point the same. A motion sensor at the top gives v against t; its slope is a. Repeat three times at each angle and average.

(b) Along the board: mg sin θ − μ_k mg cos θ = ma. Divide by m cos θ: **a/cos θ = g tan θ − μ_k g**. Plot a/cos θ against tan θ; the slope should be g and the intercept is −μ_k g.

- tan θ: 0.47, 0.58, 0.70, 0.84, 1.00; a/cos θ: 1.68, 2.68, 3.96, 5.23, 6.89 m/s².
- Best-fit slope **9.8 m/s²**; intercept **−2.9 m/s²**.
- μ_k = −intercept ÷ slope = 2.9 ÷ 9.8 = **0.30**.

The slope matching g supports the model ([Topic 2.7](/advanced-course-resources/physics-c-mechanics/2-7-kinetic-static-friction-study-guide/)).

| Suggested Marlbridge rubric | Point |
|---|---|
| Variable changed, variable measured and controls named | 1 |
| Equipment that can actually measure θ and a; repeats over a range | 2 |
| Linear plot of a/cos θ against tan θ with a best-fit line | 2 |
| Uses the intercept and slope to find μ_k | 1 |

## Worked example 4: one oscillator, four representations (Unit 7)

**Question.** A 0.50 kg block on a frictionless horizontal surface is attached to a spring with k = 50 N/m. It is pulled to x = +0.10 m and released from rest at t = 0. (a) Draw the free-body diagram at t = 0. (b) Starting from Newton's second law, derive the differential equation for x and find ω. (c) Sketch v and a against t for one period. (d) Justify that your answers to (a) and (c) agree.

**Weak answer.** A spring arrow plus a "force of motion" arrow; a v–t graph starting at its maximum; "they agree because the spring pulls it back".

**What it misses.** There is no force of motion. The block starts from rest, so v starts at zero. The justification names no feature of either representation.

**Strong answer.**

1. (a) Three arrows: F_s (spring on block) in −x, of size kA = 5.0 N; F_g (Earth on block) down; F_N (surface on block) up, as long as F_g.
2. (b) ΣF_x = ma_x gives −kx = m d²x/dt², so **d²x/dt² = −(k/m)x**: SHM with ω = √(k/m) = **10 rad/s**, T = 0.63 s and x = 0.10 cos(10t).
3. (c) v = −1.0 sin(10t) m/s: starts at zero, goes negative first, reaching −1.0 m/s at T/4 = 0.16 s. a = −10 cos(10t) m/s²: starts at −10 m/s², zero at T/4, +10 m/s² at T/2.
4. (d) The diagram's only horizontal force gives a net force of −5.0 N; ÷ 0.50 kg gives −10 m/s², the starting value of my a–t graph. With v = 0 at release and a negative, the v–t graph must start at zero and head down, as drawn.

| Suggested Marlbridge rubric | Point |
|---|---|
| Correct, labelled forces and nothing extra | 1 |
| Differential equation from the second law; correct ω | 2 |
| v–t starts at zero and goes negative; a–t starts at its most negative value | 2 |
| Justification links the net force to the graph's starting value | 1 |

## Common mistakes

- Adding components, a net-force arrow or an "ma" arrow to a free-body diagram.
- Using constant-acceleration equations when the force depends on position, velocity or time.
- Multiplying a variable force by a distance, or using a uniform-object formula for a non-uniform object.
- Leaving numbers or unlisted symbols in a "derive" answer.
- Sketching a graph whose starting value or curvature contradicts your own equation.
- Joining data points dot-to-dot, or taking the slope from data points instead of the best-fit line.
- Writing a procedure that changes two things at once, or measures something no school lab could measure.
- Justifying by repeating an equation, without naming the physics.

## Practise it

**Task 1 (Unit 1).** A cart has velocity v = 6t − 3t² (m/s, t in s) and is at x = 0 when t = 0. (a) Find x(t). (b) Describe the shape of the x–t graph from 0 to 3.0 s. (c) Find the displacement and the distance travelled in that time.

<details><summary>Model answer</summary>

(a) Integrate: x = 3t² − t³. (b) v = 0 at t = 2.0 s, so x peaks at 4.0 m there. a = 6 − 6t, so the graph is concave up until t = 1.0 s, then concave down. At 3.0 s it is back at x = 0, falling steeply (v = −9.0 m/s). (c) Displacement 0; distance 4.0 + 4.0 = **8.0 m**.

</details>

**Task 2 (Unit 2).** A crate of mass m slides on a rough floor (coefficient μ_k), pushed by a handle with force P at angle θ below the horizontal. List the forces on its free-body diagram, derive its acceleration, and check your result with two limiting cases.

<details><summary>Model answer</summary>

Forces: P along the handle, F_g down, F_N up, f_k backward. F_N = mg + P sin θ (not mg), and P cos θ − μ_kF_N = ma, so **a = [P cos θ − μ_k(mg + P sin θ)]/m**. Checks: μ_k = 0 gives P cos θ/m; θ = 0 gives (P − μ_kmg)/m. Units: N/kg = m/s².

</details>

**Task 3 (Unit 4).** A bat pushes a 0.15 kg ball, at rest on a stand, with force F = 4F₀t(τ − t)/τ² for 0 ≤ t ≤ τ. Derive the impulse, then calculate the ball's speed for F₀ = 600 N and τ = 0.010 s. Check your answer with the average force.

<details><summary>Model answer</summary>

J = ∫₀^τ 4F₀t(τ − t)/τ² dt = (4F₀/τ²)(τ³/2 − τ³/3) = **⅔F₀τ** = 4.0 N·s. v = J/m = **27 m/s**. Average force J/τ = ⅔F₀ = 400 N is below the 600 N peak, as it must be.

</details>

**Task 4 (Units 1, 2, 6, 7).** What would you plot to get a straight line, and how do you get the target from the slope? (a) g from a pendulum: T = 2π√(ℓ/g). (b) Earth's mass from satellite orbits: T² = 4π²r³/(GM). (c) A drag constant k from the terminal speeds of same-shaped objects of different mass: v_T = mg/k. (d) g from a ball launched horizontally at fixed speed v from heights H, landing d away: d = v√(2H/g).

<details><summary>Model answer</summary>

(a) T² against ℓ; g = 4π²/slope. (b) T² against r³; M = 4π²/(G × slope). (c) v_T against m; k = g/slope. (d) d² against H; g = 2v²/slope.

</details>

**Task 5 (Unit 5).** For two hanging masses m₁ < m₂ over a pulley of radius R and rotational inertia I, a student writes a = (m₂ − m₁)g/(m₁ + m₂ + IR²). Use units and limiting cases to judge this, and correct it.

<details><summary>Model answer</summary>

IR² is in kg·m⁴ and cannot be added to a mass, so the result is wrong. From m₂g − T₂ = m₂a, T₁ − m₁g = m₁a and (T₂ − T₁)R = I(a/R): **a = (m₂ − m₁)g/(m₁ + m₂ + I/R²)**. Checks: I/R² is in kg; I → 0 gives the light-pulley result; m₁ = m₂ gives a = 0; larger I gives smaller a.

</details>

## Where to practise next

- [Topic 1.3 study guide: Representing Motion](/advanced-course-resources/physics-c-mechanics/1-3-representing-motion-study-guide/)
- [Topic 2.2 study guide: Forces and Free-Body Diagrams](/advanced-course-resources/physics-c-mechanics/2-2-forces-free-body-diagrams-study-guide/)
- [Topic 2.9 practice: Resistive Forces](/advanced-course-resources/physics-c-mechanics/2-9-resistive-forces-practice/)
- [Topic 3.2 practice: Work](/advanced-course-resources/physics-c-mechanics/3-2-work-practice/)
- [Topic 5.4 practice: Rotational Inertia](/advanced-course-resources/physics-c-mechanics/5-4-rotational-inertia-practice/)
- [Topic 7.2 study guide: Frequency and Period of SHM](/advanced-course-resources/physics-c-mechanics/7-2-frequency-period-shm-study-guide/)
- [Unit 7 review: Oscillations](/advanced-course-resources/physics-c-mechanics/unit-7-review/)
