---
resourceId: "mb-ap-physcem-u11-diagnostic"
title: "Electric Circuits: Unit Diagnostic (Physics C: E&M Unit 11)"
description: "A 30-minute check of Unit 11: ten original Marlbridge questions on current, loops, resistance, power, compound circuits, Kirchhoff's rules and RC circuits, each linked to the guide to revisit."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: []
resourceType: "unit-diagnostic"
prerequisites:
  - "You have studied, or at least started, Topics 11.1 to 11.8"
learningObjectives:
  - "Find out which Unit 11 topics you can already use with confidence"
  - "Spot the specific mistakes behind any wrong answers"
  - "Choose the study guide to revisit for each topic you missed"
skills: ["1", "2", "3"]
studyMinutes: 30
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Batteries, wires and meters are ideal unless a question says otherwise. Give answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-u11-review", "mb-ap-physcem-11.1-study-guide", "mb-ap-physcem-11.5-study-guide", "mb-ap-physcem-11.7-study-guide", "mb-ap-physcem-11.8-study-guide"]
next: "mb-ap-physcem-u11-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Ten short questions cover all eight Unit 11 topics; allow about 30 minutes."
  - "Questions 6 and 10 need short written working; the rest are multiple choice."
  - "Every answer says why each wrong option is tempting and which guide to read if you missed it."
  - "This is a check of what to revisit, not a score prediction."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**What this is for.** This diagnostic shows which Unit 11 topics to revisit, with at least one question per topic. These are **original Marlbridge practice questions**, not past exam questions. They are not calibrated against real exam results, and your result is **not** a predicted score.

**How to take it.** Work without notes for about 30 minutes, writing each answer before opening the explanation. A scientific calculator is assumed. Batteries, wires and meters are ideal unless a question says otherwise, resistors are ohmic, and current means conventional current. All data are invented for practice.

## Question 1 (multiple choice · 11.1)

A wire of radius R carries a current whose density is directed along the wire and rises linearly from zero at the centre: J(r) = J₀r/R. What is the total current?

- (A) 2πJ₀R²/3
- (B) πJ₀R²
- (C) πJ₀R²/2
- (D) πJ₀R²/3

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Use rings of area 2πr dr: I = ∫₀ᴿ (J₀r/R)(2πr) dr = (2πJ₀/R)(R³/3) = **2πJ₀R²/3**.

- (B) multiplies the largest J by the whole area, as if J were uniform.
- (C) uses the average J over the radius, J₀/2. Outer rings have more area, so they count for more.
- (D) is the result for J = J₀(1 − r/R), which is largest on the axis instead.

**If you missed this:** read "Non-uniform current density: I = ∫J·dA" in the [11.1 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-1-electric-current-study-guide/).
</details>

## Question 2 (multiple choice · 11.2)

A battery, a resistor R and an uncharged capacitor are connected in a single loop. A bulb is then connected across the capacitor, joined to the wires on each side of it. Which statement about the closed loops is correct?

- (A) There are three loops, and each element is in exactly two of them.
- (B) There is one loop (battery, R, bulb), because charge cannot cross the capacitor's gap.
- (C) There are two loops: battery–R–capacitor and battery–R–bulb.
- (D) There are three loops, and the battery is in all three.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The loops are battery–R–capacitor, battery–R–bulb and capacitor–bulb. The battery and R are in the first two; the capacitor is in the first and third; the bulb is in the second and third.

- (B) A capacitor is a loop element. Charge flows round loops containing it while it charges or discharges.
- (C) misses the small capacitor–bulb loop, through which the capacitor can discharge.
- (D) The capacitor–bulb loop does not pass through the battery.

**If you missed this:** read "Loops: one element, several loops" and "Capacitors, inductors and meters in loops" in the [11.2 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-2-simple-circuits-study-guide/).
</details>

## Question 3 (multiple choice · 11.3)

A solid rod of radius a and a hollow tube with inner radius a and outer radius 2a are made of the same metal and have the same length. Current flows along each. What is R_tube/R_rod?

- (A) 1/3
- (B) 1/4
- (C) 1/2
- (D) 3

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** R = ρℓ/A, with ρ and ℓ the same. The tube's metal has area π(2a)² − πa² = 3πa², three times the rod's πa². So R_tube = R_rod/3.

- (B) uses the tube's full outer area, π(2a)², and forgets the hole.
- (C) compares radii, not areas.
- (D) inverts the ratio: more area means **less** resistance.

**If you missed this:** read "From E = ρJ to R = ρℓ/A" in the [11.3 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-3-resistance-resistivity-ohms-law-study-guide/).
</details>

## Question 4 (multiple choice · 11.4)

A heating wire connected to a fixed supply dissipates power P. The wire is cut into two equal halves, and the halves are connected in parallel to the same supply. What is the new total power?

- (A) 4P
- (B) 2P
- (C) P
- (D) P/4

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Each half has resistance R/2, and two in parallel give R/4. With ΔV fixed, P = ΔV²/R, so the power becomes **4P**.

- (B) finds one half's resistance, R/2, but does not combine the two in parallel.
- (C) The new arrangement has a different resistance.
- (D) uses P = I²R as if I stayed the same. With a fixed supply, ΔV stays the same.

**If you missed this:** read "Power in a resistor: three forms" in the [11.4 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-4-electric-power-study-guide/).
</details>

## Question 5 (multiple choice · 11.5)

A 10 kΩ resistor and a 30 kΩ resistor are in series across an ideal 12 V battery. A voltmeter with resistance 60 kΩ is connected across the 30 kΩ resistor. What does it read?

- (A) 8.0 V
- (B) 9.0 V
- (C) 4.0 V
- (D) 3.0 V

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The meter and the 30 kΩ resistor form a 20 kΩ parallel pair, in series with the 10 kΩ. The 12 V divides in the ratio 20 : 10, so the meter reads 12 × 20/30 = **8.0 V**.

- (B) is the reading an **ideal** voltmeter would give. This meter draws current.
- (C) is the potential difference across the **other** resistor.
- (D) is the ideal potential difference across the 10 kΩ resistor.

**If you missed this:** read "Measuring current and potential difference" in the [11.5 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-5-compound-direct-current-circuits-study-guide/).
</details>

## Question 6 (short answer · 11.5 and 11.4)

A battery of emf 12 V and internal resistance 1.0 Ω is connected to two branches in parallel: R₁ = 6.0 Ω, and R₂ = 2.0 Ω in series with R₃ = 4.0 Ω.

(a) Find the battery current and the terminal voltage.
(b) Find the current in R₃ and the power dissipated in it.
(c) The R₁ branch is disconnected. Find the new power in R₃, and explain why the current in R₃ changes, although its own branch is unchanged.

<details>
<summary>Answer and explanation</summary>

**(a)** The branches are 6.0 Ω and 2.0 + 4.0 = 6.0 Ω, so in parallel they give 3.0 Ω. I = ℰ/(R_eq + r) = 12 ÷ 4.0 = **3.0 A**. Terminal voltage ΔV = ℰ − Ir = 12 − 3.0 = **9.0 V**.

**(b)** The R₂–R₃ branch has 9.0 V across it: I₃ = 9.0 ÷ 6.0 = **1.5 A**, and P₃ = I²R₃ = (1.5)²(4.0) = **9.0 W**.

**(c)** Now I = 12 ÷ (6.0 + 1.0) = **1.71 A**, all of it in R₃, so P₃ = (1.714)²(4.0) = **11.8 W**. The battery current is smaller, so less is lost across r: the terminal voltage rises to 10.3 V and drives more current through R₃. With an ideal battery, I₃ would stay at 2.0 A.

Check yourself: 1 mark each for the current and terminal voltage, I₃ and P₃, the new P₃, and the explanation in terms of Ir (4 in total).

**If you missed this:** read "Real batteries and real wires" in the [11.5 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-5-compound-direct-current-circuits-study-guide/); for P₃, "Power in a resistor: three forms" in the [11.4 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-4-electric-power-study-guide/).
</details>

## Question 7 (multiple choice · 11.6)

A single loop is followed clockwise from point A. It passes through a 9.0 V battery from − to +, then a 2.0 Ω resistor to point B, then a 3.0 V battery from + to −, then a 4.0 Ω resistor back to A. What is V_B − V_A?

- (A) +7.0 V
- (B) +5.0 V
- (C) +9.0 V
- (D) −7.0 V

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The batteries oppose each other, so I = (9.0 − 3.0) ÷ (2.0 + 4.0) = 1.0 A, clockwise. From A to B: +9.0 − (1.0)(2.0) = **+7.0 V**. Check: going from A to B the other way, back through the 4.0 Ω (+4.0 V) and the 3.0 V battery from − to + (+3.0 V), also gives 7.0 V.

- (B) adds the emfs, giving I = 2.0 A.
- (C) forgets the drop across the 2.0 Ω resistor.
- (D) has the sign reversed: potential **falls** along the current in a resistor.

**If you missed this:** read "Writing a loop equation" in the [11.6 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-6-kirchhoffs-loop-rule-study-guide/).
</details>

## Question 8 (multiple choice · 11.7)

At junction J, 1.20 A arrives from a battery. A student draws I₁, I₂ and I₃ all leaving J along three other wires. Solving Kirchhoff's equations gives I₁ = 0.80 A and I₂ = −0.30 A. What is I₃?

- (A) 0.70 A, leaving J
- (B) 0.10 A, leaving J
- (C) 0.40 A, leaving J
- (D) 0.70 A, entering J

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** In = out: 1.20 = 0.80 + (−0.30) + I₃, so I₃ = **0.70 A**. It is positive, so it flows the way it was drawn, out of J. The negative I₂ simply means 0.30 A flows **into** J along that wire.

- (B) treats I₂ as 0.30 A leaving J, ignoring its sign.
- (C) leaves out the I₂ wire.
- (D) A positive result means the drawn direction is right.

**If you missed this:** read "Using the rule" and "Combining the junction and loop rules" in the [11.7 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-7-kirchhoffs-junction-rule-study-guide/).
</details>

## Question 9 (multiple choice · 11.8)

Uncharged 2.0 μF and 8.0 μF capacitors are connected in series across a 10 V battery. Which statement is correct once they are charged?

- (A) Each holds 16 μC; the 2.0 μF capacitor has 8.0 V across it.
- (B) Each holds 16 μC; the 8.0 μF capacitor has 8.0 V across it.
- (C) They hold 20 μC and 80 μC; each has 10 V across it.
- (D) Each holds 100 μC; together they have 10 V across them.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** C_eq = (1/2.0 + 1/8.0)⁻¹ = 1.6 μF, so Q = (1.6 μF)(10 V) = 16 μC on each, because charge is conserved on the wire between them. ΔV = Q/C gives 8.0 V on 2.0 μF and 2.0 V on 8.0 μF.

- (B) The **smaller** capacitance needs the **larger** ΔV for the same Q.
- (C) is the parallel result.
- (D) adds the capacitances as if they were resistors in series: 10 μF × 10 V.

**If you missed this:** read "Capacitors in combination" in the [11.8 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-8-resistor-capacitor-rc-circuits-study-guide/).
</details>

## Question 10 (short answer · 11.8)

A 9.0 V battery, a switch and R₁ = 6.0 kΩ are in series with a parallel pair: R₂ = 12 kΩ and an uncharged 25 μF capacitor. The switch closes at t = 0.

(a) Find the current in R₁ and in R₂ just after the switch closes.
(b) Find the current in R₂ and the charge on the capacitor a long time later.
(c) The switch is then opened, so the capacitor discharges through R₂ alone. Find the time constant, and the time for the current in R₂ to fall to 25% of its starting value.
(d) Find the energy dissipated in R₂ during the whole discharge.

<details>
<summary>Answer and explanation</summary>

**(a)** An uncharged capacitor acts like a wire, so ΔV across R₂ is zero: I₂ = **0**. All the current, 9.0 V ÷ 6.0 kΩ = **1.5 mA**, flows through R₁ and into the capacitor.

**(b)** No current flows in the capacitor's branch, so R₁ and R₂ are in series: I = 9.0 ÷ 18 kΩ = **0.50 mA**. The capacitor has the same ΔV as R₂, (0.50 mA)(12 kΩ) = 6.0 V, so Q = CΔV = **150 μC**.

**(c)** τ = R₂C = (12 × 10³)(25 × 10⁻⁶) = **0.30 s**. The current is I₀e^(−t/τ), so e^(−t/τ) = 0.25 gives t = τ ln 4 = **0.42 s** (0.416 s).

**(d)** All the stored energy is dissipated: ½C(ΔV)² = ½(25 × 10⁻⁶)(6.0)² = **4.5 × 10⁻⁴ J**.

Check yourself: 1 mark each for (a), (b), τ with the time, and the energy (4 in total). Putting all 9.0 V across the capacitor in (b) is the common slip: R₁ takes 3.0 V.

**If you missed this:** read "Just after and long after", "Discharging" and "Energy in an RC circuit" in the [11.8 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-8-resistor-capacitor-rc-circuits-study-guide/).
</details>

## Your next step

Count a short answer as missed if you lost more than one mark.

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 11.1 Electric current | 1 | [11.1 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-1-electric-current-study-guide/) |
| 11.2 Simple circuits | 2 | [11.2 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-2-simple-circuits-study-guide/) |
| 11.3 Resistance, resistivity and Ohm's law | 3 | [11.3 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-3-resistance-resistivity-ohms-law-study-guide/) |
| 11.4 Electric power | 4, 6(b)–(c) | [11.4 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-4-electric-power-study-guide/) |
| 11.5 Compound direct current circuits | 5, 6 | [11.5 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-5-compound-direct-current-circuits-study-guide/) |
| 11.6 Kirchhoff's loop rule | 7 | [11.6 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-6-kirchhoffs-loop-rule-study-guide/) |
| 11.7 Kirchhoff's junction rule | 8 | [11.7 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-7-kirchhoffs-junction-rule-study-guide/) |
| 11.8 Resistor-capacitor (RC) circuits | 9, 10 | [11.8 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-8-resistor-capacitor-rc-circuits-study-guide/) |

## How to use your result

- **Missed nothing in a topic?** Skip its study guide for now and go straight to the [mixed unit review](/advanced-course-resources/physics-c-electricity-and-magnetism/unit-11-review/), which joins the topics together.
- **Missed one or two topics?** Read those study guides, then do their practice sets before the review.
- **Missed four or more topics?** Work through 11.1 to 11.8 in order; later topics build on the earlier ones.
- **Got it right but guessed?** Treat it as missed.
