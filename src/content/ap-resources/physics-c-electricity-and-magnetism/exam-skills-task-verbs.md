---
resourceId: "mb-ap-physcem-exam-skills-task-verbs"
title: "Task Verbs and Free-Response Technique: Exam Skills Guide (Physics C: E&M)"
description: "What each free-response task verb asks for in calculus-based electricity and magnetism, how much to write, how to plan the section and set out working, with original examples, rubrics and practice."
course: "physics-c-electricity-and-magnetism"
unit: 8
topics: []
resourceType: "exam-skills"
prerequisites:
  - "You have studied most of the course, Units 8 to 13"
  - "You can integrate simple powers and solve a first-order differential equation by separating variables"
learningObjectives:
  - "Say in your own words what each free-response task verb asks you to produce"
  - "Decide how much to write for a part from its verb and the symbols it allows"
  - "Plan your time across the four free-response questions"
  - "Lay out a derivation or calculation so that each step can earn credit"
  - "Recognise answers that lose credit and rewrite them as strong answers"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic, logs and exponentials. k = 8.99 × 10⁹ N·m²/C²; ε₀ = 8.85 × 10⁻¹² C²/(N·m²); μ₀ = 4π × 10⁻⁷ T·m/A; e = 1.60 × 10⁻¹⁹ C; electron mass 9.11 × 10⁻³¹ kg. Give answers to 2 or 3 significant figures"
calculusScope: "ab-and-bc"
related: ["mb-ap-physcem-8.6-study-guide", "mb-ap-physcem-10.3-study-guide", "mb-ap-physcem-12.3-study-guide", "mb-ap-physcem-11.8-study-guide", "mb-ap-physcem-13.3-study-guide", "mb-ap-physcem-exam-skills-representations-derivations"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "The verb sets the kind of answer: a bare result (indicate, rank), working (calculate, derive, determine, estimate), a picture (draw, sketch, plot, label) or sentences of physics reasoning (justify, describe, compare, verify)."
  - "A derivation begins at a basic law, such as Gauss's law, the loop rule or Faraday's law, and ends in the symbols the question allows."
  - "A calculation shows the equation, the substituted values and a final answer with units. An estimate needs no steps."
  - "Justify means sentences that connect a named law to this situation. An equation on its own does not justify."
  - "Give each question time in line with its points, and never leave a later part blank because an earlier one went wrong."
faqs:
  - question: "Can extra statements cost me credit?"
    answer: "Yes, if they contradict what you said first. A marker cannot tell which of two explanations you mean. Give one clear line of reasoning and cross out anything you reject."
  - question: "Should my answer be in words or in symbols?"
    answer: "Let the verb decide. Derive and calculate want symbols and numbers. Justify, describe and compare want sentences, which an equation may support but cannot replace."
  - question: "What should I do if I cannot finish an early part?"
    answer: "Write a named symbol or a clearly marked trial value in its place and keep going. Later parts are usually judged on whether your method is right for the value you used."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Each free-response part starts with a **task verb**, and the verb tells you what kind of answer earns credit.

## How to use this guide

This guide is for students who have covered most of the course. Read the verb table, work through the three worked examples comparing weak and strong answers, then try the practice tasks.

Every question here is **original Marlbridge practice**, not past exam material, and all data are invented. The marks shown are a **suggested Marlbridge rubric** to help you judge your work, not official scoring.

## The free-response section at a glance

Section II has **4 questions in 95 minutes and counts for 50%** of the exam. You read the questions on screen and handwrite answers in a paper booklet. A four-function, scientific or graphing calculator is allowed, and an equation sheet is provided. The questions always come in this order:

| Question | Type | Points | Suggested time | Main demand |
|---|---|---|---|---|
| 1 | Mathematical Routines | 10 | 20–25 min | Derive and calculate, with a supporting diagram or graph |
| 2 | Translation Between Representations | 12 | 25–30 min | Diagram, equations and graph of one situation, then link them |
| 3 | Experimental Design and Analysis | 10 | 25–30 min | Design a procedure, then graph given data to find a quantity |
| 4 | Qualitative/Quantitative Translation | 8 | 15–20 min | A justified claim, a derivation, then link the two |

Questions 2 and 4 end with a linking part: say whether two of your answers agree and why, or use your equation or graph to predict a new case.

## The task verbs and what each one wants

Fourteen task verbs appear in free-response questions. This is our own summary.

| Verb | What you produce | How much to write |
|---|---|---|
| **Indicate** | A plain answer: a direction, sign or choice | A word or short phrase |
| **Rank** | Quantities in order, ties shown | One line, such as X > Y = Z |
| **Calculate** | A number reached by visible steps | Equation, substitution, answer with units |
| **Derive** | An expression built from a basic law | The law, then each step, ending in the allowed symbols |
| **Determine** | A value or a decision | Enough working or reasoning to show how |
| **Estimate** | A rough value, size or sign from data | The answer; no steps needed |
| **Draw** | A diagram or circuit schematic | A clear diagram, labelled if asked |
| **Sketch** | The shape of a relationship | Right shape, key values and trends |
| **Plot** | Data points on axes | Accurate points on a scale that fills the grid |
| **Label** | Names, units, scales or parts | Short labels in the right places |
| **Justify** | Physics reasons for a claim | Two to four sentences tying a law to this case |
| **Describe** | The relevant features of something | A few precise statements |
| **Compare** | Similarities or differences | A statement about both, using greater, less or equal |
| **Verify** | A check that a law's conditions hold, or that data support an idea | State the condition or test, then show it is met |

The verbs fall into four groups.

### Answer-only verbs: indicate, rank

Write the result and stop. A wrong reason added to a right answer can make it unclear.

**Example (Unit 10).** Rank the energy stored in capacitor A (2.0 μF at 10 V), B (4.0 μF at 5.0 V) and C (1.0 μF at 10 V).

**Answer:** A > B = C (U = ½CV² gives 100, 50 and 50 μJ). Writing A > B > C loses the mark: the tie must be shown.

### Working verbs: calculate, derive, determine, estimate

**Calculate** ends in a number with units. **Derive** ends in an expression and must start from a basic law: Gauss's law, ΔV = −∫E·dr, the loop or junction rule, the Biot–Savart law, Ampère's law or Faraday's law. Starting from a formula that is already the answer earns little. **Determine** ends in a number or a decision, with reasoning shown. **Estimate** needs no working.

**Example (Unit 9).** An electron moves at 2.0 × 10⁶ m/s straight towards a plate at −15 V relative to its starting point. Determine whether it reaches the plate.

**Answer:** Its kinetic energy is ½mv² = 1.8 × 10⁻¹⁸ J. Reaching the plate needs qΔV = (−e)(−15 V) = 2.4 × 10⁻¹⁸ J. It has too little, so **it turns back before the plate**.

### Picture verbs: draw, sketch, plot, label

These score on features, not neatness. A circuit diagram uses standard symbols in the right places. A sketch is checked for shape, starting value, long-time value and agreement with your equations.

**Example (Unit 13).** At t = 0 a switch joins a battery of emf ε to a resistor R and an inductor L in series. Sketch the current I against t.

**Answer:** A curve starting at **zero**, steepest at first (slope ε/L), levelling off towards **ε/R**, shown as a dashed line. A straight line, or a curve starting at ε/R, loses the shape mark.

### Reasoning verbs: justify, describe, compare, verify

These need sentences. An equation shows *what* happens; a justification says *why*, naming a law and applying it here.

**Example (Unit 11).** A resistor gives 0.20 A at 1.0 V, 0.40 A at 2.0 V, 0.61 A at 3.0 V and 0.80 A at 4.0 V. Verify that it is ohmic over this range.

**Answer:** A resistor is ohmic if V/I is constant. The ratios are 5.0, 5.0, 4.9 and 5.0 Ω, equal within measurement uncertainty, so it is ohmic here.

## Reading a multi-part question

Spend a minute on the whole question first.

1. **Find the system.** Mark the given values and what you may ignore, such as wire resistance.
2. **Circle each verb**, and mark the parts that need sentences.
3. **Read every "in terms of" list.** Use only those symbols plus constants such as ε₀, μ₀ and π.
4. **Find the chain.** Later parts build on earlier ones. Make your sketch, equation and words describe the same physics.
5. **Watch for a change.** If the plates move closer or the current grows, base your prediction on your earlier equation or graph, and say how.

If an early part defeats you, write a named symbol or trial value in its place and carry on. A blank earns nothing.

## Planning your time

The suggested times total 85–105 minutes, but you have 95. A plan that fits: 2 minutes reading all four questions and circling verbs, then about **22 minutes on Question 1, 27 on Question 2, 27 on Question 3 and 17 on Question 4**, a little over two minutes per point. If a part stalls you for three minutes, leave space and return later.

## Showing work on calculations

1. **Start from a law in symbols:** ∮E·dA = q_enc/ε₀, ε − IR − q/C = 0, ∮B·dℓ = μ₀I_enc, ε = −dΦ_B/dt.
2. **Apply it to this case.** Write each integral with its variable and limits before evaluating it.
3. **Solve in symbols first**, then substitute. The symbolic line often earns its own point.
4. **Substitute with units**; give 2 or 3 significant figures. Watch the prefixes μ, n and p.
5. **Check** units, sign and a limiting case, such as large r or t → 0.

Box final answers, and cross out rejected work completely.

## What earns and loses credit

| Earns credit | Loses credit |
|---|---|
| A law in symbols, then applied | A number with no starting equation |
| Symmetry stated before E or B leaves a Gauss or Ampère integral | E or B taken out of the integral with no reason |
| Units on every final number | Missing units or a lost prefix |
| An expression in only the allowed symbols | A leftover symbol such as q or t |
| A direction backed by Lenz's law or a right-hand rule | A bare direction when the verb is justify |
| A best-fit line on labelled axes | Points joined dot to dot |

## Worked example 1: Derive and calculate (Unit 8)

A large, flat insulating slab fills the region −a ≤ x ≤ a, with a = 0.050 m. Its charge density is ρ = β|x|, where β = 1.0 × 10⁻⁴ C/m⁴. (a) **Derive** the electric field magnitude inside the slab at distance x from its middle plane, in terms of β, x and constants. (b) **Calculate** it at x = 0.030 m.

**Weak answer:** "Charge inside = ρ × volume = βx × 2Ax = 2βAx², so E(2A) = 2βAx²/ε₀ and E = βx²/ε₀ = 1.0 × 10⁴ N/C."

**What it misses.** ρ × volume works only for uniform density; here ρ varies, so the enclosed charge needs an integral. The symmetry is never stated. The answer is twice too large.

**Strong answer.** (a) The slab is symmetric about its middle plane, so E is perpendicular to the slab, points away from the middle plane and has the same size at +x and −x. Take a box with end faces of area A at +x and −x; its sides carry no flux. Gauss's law gives 2EA = q_enc/ε₀, with thin slices of volume A dx′:

q_enc = ∫ from −x to x of β|x′| A dx′ = βAx²

So **E = βx²/(2ε₀)**, directed away from the middle plane.

(b) E = (1.0 × 10⁻⁴)(0.030)² ÷ (2 × 8.85 × 10⁻¹²) = **5.1 × 10³ N/C**. Check: at x = a this gives 1.41 × 10⁴ N/C, equal to σ/(2ε₀) with σ = βa², the slab's total charge per area.

| Point | Suggested Marlbridge rubric |
|---|---|
| 1 | Gauss's law on a box straddling the middle plane, with symmetry stated |
| 1 | Enclosed charge as an integral over thin slices, limits −x to x |
| 1 | E = βx²/(2ε₀) |
| 1 | 5.1 × 10³ N/C with units |

## Worked example 2: Compare and justify (Unit 10)

A 20 pF parallel-plate capacitor is charged to 50 V. The battery is then **disconnected** and the plate separation is slowly doubled. (a) **Calculate** the new potential difference. (b) **Compare** the stored energy before and after, and **justify** your answer.

**Weak answer:** "(a) Still 50 V. (b) C halves, so U = ½CV² halves. The energy decreases because the plates are further apart."

**What it misses.** With the battery gone, charge cannot leave the plates, so Q, not V, is constant. Using ½CV² with the old V gives the wrong direction of change, and the reason names no physics.

**Strong answer.** (a) The plates are isolated, so Q = C₀V₀ = 1.0 nC stays fixed. Doubling d halves C to 10 pF, so V = Q/C = **100 V**.

(b) U = ½QV: 25 nJ before, 50 nJ after. **The stored energy doubles.** With Q fixed, the field between the plates is unchanged, but it now fills twice the volume. The extra 25 nJ is work done by whoever pulls the plates apart against their attraction.

| Point | Suggested Marlbridge rubric |
|---|---|
| 1 | Charge constant because the capacitor is isolated |
| 1 | V = 100 V with working |
| 1 | Energy increases (doubles), supported by values |
| 1 | Reason: positive work against the plates' attraction, or the same field in a larger volume |

## Worked example 3: Describe, plot and determine (Unit 12)

A student wants the current I in a long straight wire. She has a magnetic field sensor that can be zeroed, a ruler and a clamp. (a) **Describe** a procedure. (b) **Indicate** what to plot for a straight line, then **determine** I from these results.

| Distance from wire r (m) | 0.010 | 0.015 | 0.020 | 0.030 | 0.040 |
|---|---|---|---|---|---|
| Field B (μT) | 158 | 108 | 81 | 52 | 41 |

**Weak answer:** "(a) Measure the field near the wire. (b) Plot B against r. With r = 0.020 m and B = 81 μT, B = μ₀I/(2πr) gives I = 8.1 A."

**What it misses.** No independent variable, no range, no repeats, no control of sensor direction. B against r is a curve, and one point ignores the rest. The number is close, but the method earns few analysis points.

**Strong answer.** (a) Zero the sensor with the current off, to remove the Earth's field. Clamp it with its axis tangent to a circle around the wire. Switch on and record B at five or more distances from 0.010 m to 0.040 m, measured from the wire's centre, keeping the orientation fixed and repeating each reading. Since B = (μ₀I/2π)(1/r), plot B against 1/r; the slope is μ₀I/(2π).

(b) Plot **B against 1/r** (100, 66.7, 50, 33.3 and 25 m⁻¹) and draw a best-fit line. Points on the line, (25 m⁻¹, 40 μT) and (100 m⁻¹, 159 μT), give a slope of 119 μT ÷ 75 m⁻¹ = 1.59 × 10⁻⁶ T·m, so I = 2π × slope ÷ μ₀ = **7.9 A**. The line passes near the origin, as the model predicts.

| Point | Suggested Marlbridge rubric |
|---|---|
| 1 | Varies r over five or more values with a zeroed, aligned sensor |
| 1 | Plots B against 1/r, with the reason |
| 1 | Slope from the best-fit line, not single points |
| 1 | I ≈ 7.9 A (7.6 to 8.2 A from a hand-drawn line) |

## Common mistakes

- Answering a **justify** part with an equation and no sentence naming a law.
- Using ρ × volume for enclosed charge when the density is not uniform.
- Taking E or B out of a Gauss or Ampère integral without stating the symmetry.
- Holding V constant after a capacitor is disconnected, or Q constant while it stays on a battery.
- Giving a current or force direction with no rule when the verb is justify.
- Writing X > Y > Z when two quantities are equal.
- Sketching an RC or LR graph that disagrees with your own exponential equation.
- Taking a slope from two data points instead of the best-fit line.

## Practise it

Write a full answer before opening each model answer.

**Task 1 (Unit 9).** A +4.0 nC charge is fixed at the origin. A −2.0 nC charge moves from 0.30 m to 0.10 m from it. (a) **Indicate** whether the system's electric potential energy increases or decreases. (b) **Calculate** the work done by the electric force.

<details>
<summary>Model answer</summary>

(a) **Decreases**: the charges attract and move closer.

(b) U = kq₁q₂/r goes from −2.40 × 10⁻⁷ J to −7.19 × 10⁻⁷ J, so ΔU = −4.79 × 10⁻⁷ J and W = −ΔU = **+4.8 × 10⁻⁷ J**. Positive, as force and motion point the same way.
</details>

**Task 2 (Unit 11).** An uncharged 40 μF capacitor, a 25 kΩ resistor, a 6.0 V battery and a switch are in series; the switch closes at t = 0. (a) **Indicate** the current just after closing and long after. (b) **Derive** the time for the capacitor to reach three-quarters of its final charge, in terms of R and C, and **calculate** it.

<details>
<summary>Model answer</summary>

(a) Just after: **ε/R = 0.24 mA**, since an uncharged capacitor has no potential difference. Long after: **zero**.

(b) Loop rule: ε − R(dq/dt) − q/C = 0. Separating variables with q = 0 at t = 0 gives q = Cε(1 − e^(−t/RC)). Setting q = 3Cε/4 gives e^(−t/RC) = ¼, so **t = RC ln 4** = 1.0 s × 1.386 = **1.4 s**.
</details>

**Task 3 (Unit 12).** In a uniform 0.50 T field: P is a proton at 2.0 × 10⁵ m/s perpendicular to the field; Q is an electron at 4.0 × 10⁵ m/s at 30° to the field; R is an alpha particle (+2e) at 1.5 × 10⁵ m/s perpendicular to the field. **Rank** the magnetic force magnitudes and **justify**.

<details>
<summary>Model answer</summary>

**R > P = Q.** F = |q|vB sin θ gives P 1.6 × 10⁻¹⁴ N, Q 1.6 × 10⁻¹⁴ N and R 2.4 × 10⁻¹⁴ N. Q is fastest, but only its velocity component perpendicular to B counts. The sign of the charge changes the force's direction, not its size.
</details>

**Task 4 (Unit 13).** A 0.40 m rod slides at a steady 3.0 m/s on rails joined at one end, in a uniform 0.25 T field perpendicular to the rails. The circuit resistance is 1.5 Ω. (a) **Calculate** the emf and current. (b) **Indicate** the direction of the magnetic force on the rod relative to its velocity, and **justify**. (c) **Verify** that the pulling power equals the thermal power.

<details>
<summary>Model answer</summary>

(a) ε = BLv = **0.30 V**; I = ε/R = **0.20 A**.

(b) **Opposite to the velocity.** By Lenz's law the induced current opposes the flux change causing it, so the force resists the motion. A forward force would create energy from nothing.

(c) ILB = 0.020 N, so pulling power Fv = 0.020 × 3.0 = 0.060 W. Thermal power I²R = 0.20² × 1.5 = 0.060 W. **They are equal.**
</details>

## Where to practise next

- [Gauss's law: practice set](/advanced-course-resources/physics-c-electricity-and-magnetism/8-6-gauss-law-practice/)
- [Capacitors: study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/10-3-capacitors-study-guide/)
- [Resistor-capacitor (RC) circuits: practice set](/advanced-course-resources/physics-c-electricity-and-magnetism/11-8-resistor-capacitor-rc-circuits-practice/)
- [Magnetic fields of current-carrying wires: study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-3-magnetic-fields-current-carrying-wires-study-guide/)
- [Induced currents and magnetic forces: practice set](/advanced-course-resources/physics-c-electricity-and-magnetism/13-3-induced-currents-magnetic-forces-practice/)
- [Conservation of electric energy: practice set](/advanced-course-resources/physics-c-electricity-and-magnetism/9-3-conservation-electric-energy-practice/)
- [Unit 8 review](/advanced-course-resources/physics-c-electricity-and-magnetism/unit-8-review/) and [Unit 13 review](/advanced-course-resources/physics-c-electricity-and-magnetism/unit-13-review/)
