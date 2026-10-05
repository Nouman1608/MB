---
resourceId: "mb-ap-physcem-exam-skills-representations-derivations"
title: "Representations, Derivations and Experimental Design: Exam Skills Guide (Physics C: E&M)"
description: "How to draw field, equipotential and circuit diagrams, choose Gaussian surfaces and Amperian loops, set out calculus derivations, check results and linearise lab data."
course: "physics-c-electricity-and-magnetism"
unit: 8
topics: []
resourceType: "exam-skills"
prerequisites:
  - "You have studied most of Units 8 to 13 and are revising for the free-response section"
  - "Integrating with limits, differentiating, and separating variables in a first-order differential equation"
learningObjectives:
  - "Draw field-line, equipotential, magnetic-field and circuit diagrams that follow the conventions markers expect"
  - "Choose a Gaussian surface or Amperian loop that matches the symmetry, and say in words why it works"
  - "Set out a derivation from a fundamental principle, including a charge-distribution integral, a circuit differential equation and an enclosed-current integral"
  - "Check a symbolic result with units, limiting cases, continuity and known bounds"
  - "Design a workable electrical experiment and linearise data so that a slope or intercept gives the quantity you want"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic, exponentials and best-fit slopes. k = 8.99 × 10⁹ N·m²/C², μ₀ = 4π × 10⁻⁷ T·m/A, e⁻¹ ≈ 0.368. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcem-8.4-study-guide", "mb-ap-physcem-9.2-study-guide", "mb-ap-physcem-11.8-study-guide", "mb-ap-physcem-12.4-study-guide", "mb-ap-physcem-13.5-study-guide", "mb-ap-physcem-exam-skills-task-verbs"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Field lines start on positive charge and end on negative charge, never cross, and meet conductors at right angles. Equipotentials are always perpendicular to them."
  - "Pick a Gaussian surface or Amperian loop on which the field is constant and perpendicular, or parallel, on every piece, and say so in words."
  - "A derivation starts from a fundamental principle in general form (dE = k dq/r², Gauss's law, Ampère's law, the loop rule, Faraday's law), then substitutes and solves."
  - "Check every result: units, a limiting case (far away, t = 0, t → ∞), continuity at a boundary and a known bound."
  - "In a lab question, change one variable, measure one, and rearrange the theory into a straight line whose slope or intercept gives the quantity you want."
faqs:
  - question: "Do I have to draw a Gaussian surface if the question does not ask for one?"
    answer: "It is not always marked, but a quick sketch or one sentence naming the surface (for example, a coaxial cylinder of radius r and length ℓ) makes your flux step clear and protects the derivation marks."
  - question: "Which way should I go round the loop when I write the loop rule?"
    answer: "Either way. Mark a current direction on the diagram first, then keep the same direction for every term. If a current comes out negative, it simply flows the other way."
  - question: "How do I measure a time constant of a few milliseconds?"
    answer: "Use a voltage or current sensor with a data logger, or an oscilloscope. A stopwatch is fine only when RC or L/R is several seconds or more."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## How to use this guide

This guide is for Physics C: Electricity and Magnetism students who know the physics but lose free-response marks on diagrams, derivations or graphs. It covers Units 8 to 13.

Every question here is **original Marlbridge practice**, not past exam material. The marks shown are a **suggested Marlbridge rubric** to help you judge your own work. They are not official scoring.

## The free-response section at a glance

Section II has **4 questions in 95 minutes**, worth 50% of the exam. A four-function, scientific or graphing calculator is allowed. The order is fixed:

| Question | Type | Points | Suggested time | What it rewards |
|---|---|---|---|---|
| 1 | Mathematical Routines (MR) | 10 | 20–25 min | Deriving and calculating, helped by a diagram or sketch |
| 2 | Translation Between Representations (TBR) | 12 | 25–30 min | Diagram, derivation and graph of one scenario, then linking them |
| 3 | Experimental Design and Analysis (LAB) | 10 | 25–30 min | A workable procedure, then a linear graph of given data |
| 4 | Qualitative/Quantitative Translation (QQT) | 8 | 15–20 min | A justified claim linked to a derivation |

Creating representations (Science Practice 1) is tested **only** in this section. In the LAB question, the data you analyse come from an experiment related to, but not the same as, the one you designed.

## Representations that earn marks

**Electric field diagrams.** Field lines start on positive charge and end on negative charge (or run off to a great distance). Draw more lines from a bigger charge. Lines never cross, crowd together where the field is stronger, and meet a conductor's surface at right angles.

**Equipotential maps.** Equipotentials are always perpendicular to field lines. The field points from high potential to low, so a positive charge released from rest moves towards lower V. With equal steps in V, closer lines mean a stronger field: E ≈ ΔV/Δs. A conductor in equilibrium is one equipotential.

**Magnetic field diagrams.** Use ⊙ for out of the page and ⊗ for into it. Field lines form closed loops; round a straight wire they are right-hand-rule circles.

**Gaussian surfaces and Amperian loops.** Make the surface or loop closed and pass it through the point where you want the field. On every piece, the field should be either constant and perpendicular to it, or parallel to it so that it adds nothing. Say this in words: it is the symmetry step the derivation depends on.

| Shape | Gaussian surface | Amperian loop |
|---|---|---|
| Point charge or sphere | Concentric sphere, radius r | — |
| Long line, cylinder or wire | Coaxial cylinder, radius r, length ℓ | Coaxial circle, radius r |
| Large sheet or slab | Pillbox crossing the sheet | Rectangle crossing the sheet |
| Long solenoid | — | Rectangle with one long side inside |

**Circuit diagrams.** Label every element. Mark the battery's positive terminal (long line), the switch, a conventional-current arrow and the signs on the capacitor plates. Ammeters go in series, voltmeters in parallel.

**Sketches against time.** Get the starting value, final value and curvature right. RC charge and RL current rise, concave down, to a final value; RC current decays to zero; LC charge and current are sinusoids a quarter-period apart. For an exponential, the tangent at t = 0 meets the final value at t = τ.

## Derivations: the routine markers look for

A "derive" answer has four visible parts: **start** from a fundamental principle in general form (or a reference-sheet equation); **substitute** this scenario's quantities, with signs that match your diagram; **solve**, showing each step; and **finish** with the requested quantity in the allowed symbols only.

| Routine | Starting point | Key step | Common trap |
|---|---|---|---|
| Field of a continuous charge | dE = k dq/r² | dq = λ dx or λR dθ; components; symmetry | Integrating magnitudes of vectors that point different ways |
| Gauss or Ampère, non-uniform density | ∮E·dA = q_enc/ε₀; ∮B·dℓ = μ₀I_enc | q_enc = ∫ρ dV; I_enc = ∫J·2πr dr | Multiplying a varying density by a volume or area |
| Circuit differential equation | Loop rule, with I = dq/dt and −L dI/dt for an inductor | Separate variables; the initial value is the lower limit | Treating a changing current as constant |
| Flux and induced emf | Φ_B = ∫B·dA; ℰ = −dΦ_B/dt | Strip dA = w dx when B varies with x; Lenz's law for direction | Writing Φ = BA when B is not uniform |

**Check every result.**

- **Units.** RC, L/R and √(LC) are in seconds; kQ/r² is in N/C.
- **Limiting cases.** Far from a finite charge, E → kQ/r². At t = 0 an uncharged capacitor acts like a wire and an inductor like a break; after a long time the roles swap.
- **Continuity.** E is continuous where there is no surface charge; B is continuous at a wire's surface.
- **Bounds.** The answer should sit between two simple cases.

## Translating between representations

TBR and QQT questions often ask whether two of your answers agree.

| From | To | What must match |
|---|---|---|
| Field-line diagram | Equipotential map | Right angles everywhere; crowded lines, crowded equipotentials |
| Circuit diagram | Loop and junction equations | One term per element, signs set by your current arrow |
| Equation for ΔV_C(t) or I(t) | Sketch against t | Starting value, final value, initial slope, curvature |
| Formula for B(r) or E(r) | Sketch against r | Zeros, maximum, continuity, 1/r or 1/r² tail |

Name both representations, the shared feature and the linking physics.

## Designing an experiment and linearising data

A sound procedure changes **one** variable, measures **one** and keeps the rest fixed. It names realistic equipment (multimeter, voltage sensor with data logger, oscilloscope, magnetic field sensor, resistor box) and what each measures, uses at least five values over a wide range with repeats, and says what to plot.

**Linearising.** Rearrange the theory into y = (slope)x + (intercept), where y and x are measured or calculated.

| Theory | Plot (y against x) | Slope | Intercept |
|---|---|---|---|
| ΔV_C = ΔV₀e^(−t/RC) (discharge) | ln ΔV_C against t | −1/(RC) | ln ΔV₀ |
| C = κε₀A/d (parallel plates) | C against 1/d | κε₀A | 0 |

Label axes with units. Draw one best-fit line, never dot-to-dot, and take the slope from two far-apart points **on the line**.

## Worked example 1: a non-uniform semicircle (Unit 8)

**Question.** A thin plastic rod is bent into a semicircle of radius R, centred on O, in the upper half of the xy-plane. It carries total charge +Q, spread so that λ = λ₀ sin θ, with θ measured from the +x-axis. (a) Derive the field at O in terms of Q, R and k. (b) Show that it is reasonable. (c) Calculate E for Q = 6.0 nC and R = 0.10 m.

**Weak answer.** "E = ∫₀^π kλ₀R sin θ dθ/R² = 2kλ₀/R = kQ/R² = 5.4 × 10³ N/C."

**What it misses.** It adds sizes of vectors that point different ways, as if all the charge sat at the top. No direction, no check.

**Strong answer.**

1. Start from dE = k dq/r². A piece at angle θ has dq = λ₀R sin θ dθ, is a distance R from O, and its field at O points along (−cos θ, −sin θ).
2. Q = ∫₀^π λ₀R sin θ dθ = 2λ₀R, so λ₀ = Q/(2R).
3. E_x = −(kλ₀/R)∫₀^π sin θ cos θ dθ = 0: pieces at θ and π − θ carry equal charge, so their x-components cancel.
4. E_y = −(kλ₀/R)∫₀^π sin²θ dθ = −πkλ₀/(2R), so **E = πkQ/(4R²) ≈ 0.79kQ/R², along −y**.
5. (b) A uniform semicircle gives 2kQ/(πR²) ≈ 0.64kQ/R²; all the charge at the top would give kQ/R². This charge is bunched towards the top, so the answer should lie between, and it does. Units: N/C.
6. (c) E = π(8.99 × 10⁹)(6.0 × 10⁻⁹) ÷ (4 × 0.10²) = **4.2 × 10³ N/C**.

| Suggested Marlbridge rubric | Point |
|---|---|
| Starts from dE = k dq/r² with dq = λR dθ | 1 |
| Components, with symmetry giving E_x = 0 | 1 |
| Relates λ₀ to Q by integration | 1 |
| Correct magnitude and direction | 1 |
| Valid check (units or bounds) | 1 |

## Worked example 2: a capacitor that starts charged (Unit 11)

**Question.** A capacitor C has potential difference ΔV₀ across it, top plate positive. At t = 0 a switch connects it in series with resistor R to a battery of emf ℰ > ΔV₀, positive terminal towards the top plate. (a) Draw the circuit. (b) Derive ΔV_C(t). (c) Sketch ΔV_C against t for ℰ = 12 V, ΔV₀ = 4.0 V, R = 20 kΩ and C = 100 μF. (d) Justify that your graph's initial slope agrees with your circuit.

**Weak answer.** "ΔV_C = ℰ(1 − e^(−t/RC)). The graph starts at zero and rises to 12 V. It agrees because the capacitor charges up."

**What it misses.** It copies the uncharged-capacitor result, so the graph contradicts the given 4.0 V. The justification names no feature.

**Strong answer.**

1. (a) One loop: battery (positive terminal at the top), switch, R and C, with +q on the top plate and a clockwise current arrow I.
2. (b) Loop rule: ℰ − IR − q/C = 0, with I = dq/dt, so R dq/dt = ℰ − q/C.
3. Separate, with the starting charge CΔV₀ as the lower limit: ln[(Cℰ − q)/(Cℰ − CΔV₀)] = −t/(RC). So **ΔV_C = ℰ − (ℰ − ΔV₀)e^(−t/RC)**. Checks: ΔV₀ = 0 gives the familiar result; ΔV₀ = ℰ gives no change.
4. (c) τ = RC = 2.0 s. The graph starts at 4.0 V and rises, concave down, towards 12 V, passing 9.1 V at 2.0 s and 11.6 V at 6.0 s.
5. (d) At first the resistor has 12 − 4.0 = 8.0 V across it, so I = 8.0 V ÷ 20 kΩ = 0.40 mA and dΔV_C/dt = I/C = 4.0 V/s. That is my graph's starting slope; its tangent meets 12 V at t = τ.

| Suggested Marlbridge rubric | Point |
|---|---|
| Labelled circuit with current direction and plate signs | 1 |
| Loop rule with I = dq/dt | 1 |
| Correct solution using the starting charge | 2 |
| Graph starts at 4.0 V, concave down, approaches 12 V | 1 |
| Justification links initial current to initial slope | 1 |

## Worked example 3: current crowded towards the axis (Unit 12)

**Question.** A long wire of radius R carries current I with density J = J₀(1 − r²/R²). (a) Derive B inside in terms of μ₀, I, r and R. (b) Sketch B against r from 0 to 3R, for I = 6.0 A and R = 2.0 mm. (c) A student says B must be largest at the surface. Respond using (a) and (b).

**Weak answer.** "∮B·dℓ = μ₀I, so B = μ₀Ir/(2πR²), rising to a peak at the surface. The student is right."

**What it misses.** That is the uniform-wire result. With this J, the enclosed current must be found by integration.

**Strong answer.**

1. Ampère's law, with a coaxial circle of radius r. By symmetry B is tangent and constant on it: B(2πr) = μ₀I_enc.
2. I_enc = ∫₀^r J₀(1 − r′²/R²) 2πr′ dr′ = πJ₀(r² − r⁴/(2R²)). At r = R this equals I, so J₀ = 2I/(πR²).
3. **B = [μ₀Ir/(2πR²)](2 − r²/R²)** inside; B = μ₀I/(2πr) outside. Both give μ₀I/(2πR) at r = R, so B is continuous.
4. (b) dB/dr = 0 at r = R√(2/3) ≈ 0.82R. The sketch rises from zero to a peak of 6.5 × 10⁻⁴ T at 1.6 mm, dips to 6.0 × 10⁻⁴ T at the surface, then falls as 1/r: 3.0 × 10⁻⁴ T at 2R and 2.0 × 10⁻⁴ T at 3R.
5. (c) The student is wrong here. Beyond 0.82R, J is so small that I_enc grows more slowly than the circumference 2πr, so B falls. My formula and my sketch both show the peak inside the wire.

| Suggested Marlbridge rubric | Point |
|---|---|
| Coaxial loop, with symmetry stated | 1 |
| I_enc by integrating J·2πr dr; J₀ linked to I | 1 |
| Correct B inside | 1 |
| Sketch continuous at R, peak inside, 1/r outside | 1 |
| Response uses the derivation or graph with physical reasoning | 1 |

## Worked example 4: an inductance from a linear graph (Unit 13)

**Question.** Students have a coil of unknown inductance L and winding resistance R_L, a 6.0 V supply, a resistor box, a switch, and a voltage sensor with a data logger. (a) Describe a procedure that uses a linear graph to find L. (b) Use their results to find L and R_L.

| R (Ω) | 20 | 40 | 60 | 80 | 100 |
|---|---|---|---|---|---|
| τ (ms) | 12.4 | 8.4 | 6.2 | 5.0 | 4.2 |

**Weak answer.** "Time with a stopwatch until the current is steady. From the last column, L = τR = 0.42 H."

**What it misses.** A stopwatch cannot time milliseconds, and "steady" is not a defined time. It ignores the coil's resistance and uses one point, not a graph.

**Strong answer.**

(a) Connect the coil, resistor box and switch in series with the supply, with the sensor across the resistor box (ΔV_R = IR tracks the current). Close the switch and log ΔV_R; τ is the time to reach 63% of the final value. Vary R from 20 Ω to 100 Ω in five steps, keeping the coil and supply the same. Repeat each value three times.

(b) τ = L/(R + R_L), so **1/τ = (1/L)R + R_L/L**. Plot 1/τ against R.

- 1/τ values: 81, 119, 161, 200, 238 s⁻¹.
- Best-fit slope **1.98 s⁻¹/Ω** (1/H); intercept **41 s⁻¹**.
- L = 1/slope = **0.51 H**; R_L = intercept ÷ slope = **21 Ω**.

| Suggested Marlbridge rubric | Point |
|---|---|
| Variables and controls named | 1 |
| Equipment that can time milliseconds; how τ is read; repeats | 2 |
| Linear plot of 1/τ against R with a best-fit line | 2 |
| L from the slope; R_L from the intercept | 2 |

## Common mistakes

- Field lines that cross, or meet a conductor at an angle; equipotentials not perpendicular to them.
- Choosing a Gaussian surface or Amperian loop without saying why E or B is constant on it.
- Integrating magnitudes instead of components for a charge distribution.
- Using the uniform-density result when ρ or J varies with r.
- Copying a standard RC or RL solution without checking the initial condition.
- Sketching a graph whose starting value or curvature contradicts your own equation.

## Practise it

**Task 1 (Unit 9).** Along the x-axis, V(x) = V₀(1 − x²/a²), with V₀ = 50 V and a = 0.20 m. (a) Find E_x at x = 0.10 m. (b) A proton is released from rest there. Which way does it move? Justify from the graphs of V and E_x.

<details><summary>Model answer</summary>

(a) E_x = −dV/dx = 2V₀x/a² = **250 V/m**, in +x. (b) It moves in +x. E_x > 0 for x > 0, so the force qE_x points in +x. V is a downward parabola, falling as x increases for x > 0, so the proton moves "downhill". Both agree because E_x is minus the slope of V.

</details>

**Task 2 (Unit 10).** A student writes C = 4πε₀ab/(b − a) for a spherical capacitor with radii a < b. Test it with units and two limiting cases.

<details><summary>Model answer</summary>

Units: ε₀ (F/m) × ab/(b − a) (m) gives farads. Thin gap d = b − a: C ≈ 4πε₀a²/d = ε₀A/d, the parallel-plate result. b → ∞: C → 4πε₀a, an isolated sphere. It passes all three.

</details>

**Task 3 (Units 11 and 12).** What would you plot, and how do you get the target? (a) A battery's ℰ and internal resistance r: ΔV = ℰ − Ir. (b) Resistivity ρ from R at several lengths ℓ of one wire. (c) Turns per metre n from B at a solenoid's centre at several currents. (d) μ₀ from the force F on length ℓ of one of two long parallel wires, with fixed currents I₁ and I₂, at several separations d.

<details><summary>Model answer</summary>

(a) ΔV against I: slope −r, intercept ℰ. (b) R against ℓ: ρ = slope × A. (c) B against I: n = slope/μ₀. (d) F against 1/d: μ₀ = 2π × slope/(ℓI₁I₂).

</details>

**Task 4 (Unit 13).** For a battery ℰ, resistor R and inductor L in series, switched on at t = 0, a student writes I = (ℰ/R)(1 − e^(−tL/R)). Judge it with units, correct it, and check two limits.

<details><summary>Model answer</summary>

tL/R is in s × (Ω·s)/Ω = s², but an exponent must have no units. From ℰ − IR − L dI/dt = 0: **I = (ℰ/R)(1 − e^(−Rt/L))**. At t = 0, I = 0 (the inductor opposes sudden change); as t → ∞, I → ℰ/R (it acts like a wire).

</details>

## Where to practise next

- [Topic 8.4 study guide: Electric Fields of Charge Distributions](/advanced-course-resources/physics-c-electricity-and-magnetism/8-4-electric-fields-charge-distributions-study-guide/)
- [Topic 8.6 practice: Gauss's Law](/advanced-course-resources/physics-c-electricity-and-magnetism/8-6-gauss-law-practice/)
- [Topic 9.2 study guide: Electric Potential](/advanced-course-resources/physics-c-electricity-and-magnetism/9-2-electric-potential-study-guide/)
- [Topic 11.8 practice: RC Circuits](/advanced-course-resources/physics-c-electricity-and-magnetism/11-8-resistor-capacitor-rc-circuits-practice/)
- [Topic 12.4 study guide: Ampère's Law](/advanced-course-resources/physics-c-electricity-and-magnetism/12-4-amp-res-law-study-guide/)
- [Topic 13.5 practice: LR Circuits](/advanced-course-resources/physics-c-electricity-and-magnetism/13-5-circuits-resistors-inductors-lr-circuits-practice/)
