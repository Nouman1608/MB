---
resourceId: "mb-ap-physcem-13.5-study-guide"
title: "Circuits with Resistors and Inductors (LR Circuits): Study Guide (Physics C: E&M 13.5)"
description: "Calculus-based guide to LR circuits: the loop-rule differential equation, the time constant L/R, current growth and decay, switching behaviour and energy dissipated in resistors."
course: "physics-c-electricity-and-magnetism"
unit: 13
topics: ["13.5"]
resourceType: "study-guide"
prerequisites:
  - "Inductance, the induced emf ℰ = −L dI/dt and the stored energy U = ½LI² (Topic 13.4)"
  - "Kirchhoff's loop and junction rules (Topics 11.6 and 11.7)"
  - "Solving a first-order differential equation by separating variables, as for RC circuits (Topic 11.8)"
prerequisiteResources: ["mb-ap-physcem-13.4-study-guide"]
learningObjectives:
  - "Apply the loop rule to a series LR circuit and write the differential equation for the current"
  - "Solve the equation for a growing and a decaying current, and interpret the time constant τ = L/R"
  - "Predict currents and potential differences just after a switch is closed or opened, and after a long time"
  - "Sketch current, inductor voltage and stored energy against time with the correct asymptotes"
  - "Track energy: from the battery into the inductor's magnetic field, and from the field into the resistors"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "core"
calculator: "scientific"
calculatorNote: "1 H = 1 V·s/A, so L/R is in seconds. e⁻¹ ≈ 0.368 and 1 − e⁻¹ ≈ 0.632. Keep unrounded values until the final step"
related: ["mb-ap-physcem-13.5-revision-notes", "mb-ap-physcem-13.5-practice", "mb-ap-physcem-13.5-checklist"]
next: "mb-ap-physcem-13.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "The loop rule for a battery, resistor and inductor in series gives ℰ = IR + L dI/dt."
  - "The time constant is τ = L/R. A growing current reaches about 63% of its final value after one τ; a decaying current falls to about 37% of its starting value."
  - "The current in an inductor cannot jump. Just after a switch moves, it has the value it had just before."
  - "After many time constants the current is steady, so the inductor acts like a wire with zero resistance."
  - "Energy stored in the inductor, ½LI², is dissipated as thermal energy in the resistors when the current dies away."
faqs:
  - question: "Does a bigger resistance make an LR circuit slower or faster?"
    answer: "Faster. τ = L/R, so a larger R gives a smaller time constant. The current reaches its steady value sooner, but that steady value, ℰ/R, is smaller."
  - question: "Why can a spark appear when you open a switch in a circuit with a large inductor?"
    answer: "The inductor's current cannot drop to zero instantly. If the switch leaves no other path, dI/dt becomes very large, so the induced emf L dI/dt becomes very large too, and it can drive charge across the gap in the switch."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 13.5. You will set up and solve a first-order differential equation. The method is the same one you used for RC circuits in Topic 11.8; only the physics of the element changes.

## What an inductor does in a circuit

In Topic 13.4 you met the inductor, a coil whose own magnetic flux changes when its current changes. Faraday's law then gives a self-induced emf:

**ℰ_L = −L dI/dt**

The minus sign is Lenz's law: the induced emf **opposes the change** in current, not the current itself. Two rules follow, and almost every LR question uses one of them.

- **The current in an inductor cannot change suddenly.** A sudden jump would need dI/dt to be infinite, so the induced emf would be infinite. So just after a switch moves, the inductor's current has the same value as just before.
- **A steady current needs no potential difference.** If dI/dt = 0, the inductor's emf is zero. After a long time, an ideal inductor behaves as a wire with zero resistance.

A useful way to say this: just after switching, an inductor with zero current acts like a **break in the wire**; long after, it acts like a **plain wire**. Between these two moments, everything changes exponentially.

## The loop rule and the differential equation

Take a battery of emf ℰ, a resistor R, an inductor L and a switch, all in series. The switch is closed at t = 0, when the current is zero.

Walk round the loop in the direction of the current. The battery raises the potential by ℰ. The resistor lowers it by IR. While the current grows, the inductor's induced emf pushes back, so the potential also drops by L dI/dt across the inductor. Kirchhoff's loop rule says the changes add to zero:

ℰ − IR − L dI/dt = 0, so **ℰ = IR + L dI/dt**

This is a differential equation for I(t). Before solving it, read off the two ends:

- At t = 0, I = 0, so ℰ = L dI/dt. The **initial rate** of increase is dI/dt = ℰ/L, and the whole battery emf appears across the inductor.
- After a long time, dI/dt → 0, so ℰ = IR. The **final current** is I_f = ℰ/R, as if the inductor were not there.

**Solving it.** Separate the variables:

dI / (ℰ/R − I) = (R/L) dt

Integrate from I = 0 at t = 0 to I at time t:

−ln[(ℰ/R − I)/(ℰ/R)] = Rt/L

So **I(t) = (ℰ/R)(1 − e^(−t/τ))**, with **τ = L/R**.

Check the units: a henry is a volt-second per ampere and an ohm is a volt per ampere, so L/R is in seconds.

From I(t) you get everything else:

- Inductor voltage: V_L = L dI/dt = **ℰ e^(−t/τ)**, falling from ℰ to zero.
- Resistor voltage: V_R = IR = **ℰ(1 − e^(−t/τ))**, rising from zero to ℰ. At every instant V_L + V_R = ℰ.
- Stored energy: U_L = ½LI² = ½L(ℰ/R)²(1 − e^(−t/τ))², rising to ½L(ℰ/R)².

## The time constant τ = L/R

The time constant tells you how quickly the circuit settles into its steady state. There are three ways to read it.

1. **Initial-rate meaning.** If the current kept rising at its starting rate ℰ/L, it would reach ℰ/R after exactly (ℰ/R) ÷ (ℰ/L) = L/R = τ. In Figure 1, the straight tangent at t = 0 meets the final value at t = τ.
2. **Growth from zero.** After one τ, I = (1 − e⁻¹)I_f ≈ **0.63 I_f**. After 5τ, I is more than 99% of I_f, so "a long time" in practice means several τ.
3. **Decay from a starting current.** If an inductor carrying I₀ is connected to a resistor with no battery, the loop rule gives 0 = IR + L dI/dt, so **I(t) = I₀ e^(−t/τ)**. After one τ the current is about **0.37 I₀**.

A large L makes the circuit sluggish (a bigger τ). A large R makes it settle faster, but to a smaller final current.

<figure>
<svg viewBox="0 0 560 370" role="img" aria-labelledby="lr-grow-title lr-grow-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="lr-grow-title">Current and inductor voltage against time after an LR circuit is switched on</title>
<desc id="lr-grow-desc">Horizontal axis: time in units of the time constant, from 0 to 5. Vertical axis: fraction of the final value, from 0 to 1. A solid curve for the current rises from 0, reaches 0.63 at one time constant and approaches 1. A dashed curve for the inductor voltage starts at 1 and falls, reaching 0.37 at one time constant and approaching 0. A dotted straight line, the tangent to the current curve at t equals 0, rises from the origin and reaches 1 at exactly one time constant. A dotted horizontal line at 1 marks the final value.</desc>
<defs><marker id="lrg-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="70" y1="300" x2="545" y2="300" stroke="#1d2b44" stroke-width="2" marker-end="url(#lrg-arr)"/>
<line x1="70" y1="300" x2="70" y2="45" stroke="#1d2b44" stroke-width="2" marker-end="url(#lrg-arr)"/>
<line x1="70" y1="80" x2="530" y2="80" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<line x1="160" y1="300" x2="160" y2="80" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<line x1="70" y1="300" x2="160" y2="80" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="160" y1="300" x2="160" y2="306" stroke="#1d2b44"/><text x="160" y="320">1</text>
<line x1="250" y1="300" x2="250" y2="306" stroke="#1d2b44"/><text x="250" y="320">2</text>
<line x1="340" y1="300" x2="340" y2="306" stroke="#1d2b44"/><text x="340" y="320">3</text>
<line x1="430" y1="300" x2="430" y2="306" stroke="#1d2b44"/><text x="430" y="320">4</text>
<line x1="520" y1="300" x2="520" y2="306" stroke="#1d2b44"/><text x="520" y="320">5</text>
<text x="300" y="350" font-size="13">Time, t / τ (no unit)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="64" y1="219" x2="70" y2="219" stroke="#1d2b44"/><text x="60" y="223">0.37</text>
<line x1="64" y1="161" x2="70" y2="161" stroke="#1d2b44"/><text x="60" y="165">0.63</text>
<line x1="64" y1="80" x2="70" y2="80" stroke="#1d2b44"/><text x="60" y="84">1.00</text>
<text x="60" y="304">0</text>
</g>
<text x="18" y="190" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 18 190)">Fraction of final value</text>
<polyline points="70.0,300.0 92.5,251.3 115.0,213.4 137.5,183.9 160.0,160.9 182.5,143.0 205.0,129.1 227.5,118.2 250.0,109.8 272.5,103.2 295.0,98.1 317.5,94.1 340.0,91.0 362.5,88.5 385.0,86.6 407.5,85.2 430.0,84.0 452.5,83.1 475.0,82.4 497.5,81.9 520.0,81.5" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="70.0,80.0 92.5,128.7 115.0,166.6 137.5,196.1 160.0,219.1 182.5,237.0 205.0,250.9 227.5,261.8 250.0,270.2 272.5,276.8 295.0,281.9 317.5,285.9 340.0,289.0 362.5,291.5 385.0,293.4 407.5,294.8 430.0,296.0 452.5,296.9 475.0,297.6 497.5,298.1 520.0,298.5" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="7 5"/>
<circle cx="160" cy="161" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="160" cy="219" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="300" y="118">current, I / I_f = 1 − e^(−t/τ)</text>
<text x="230" y="240">inductor voltage, V_L / ℰ = e^(−t/τ)</text>
<text x="168" y="70">tangent at t = 0 reaches 1 at t = τ</text>
</g>
</svg>
<figcaption>Figure 1. Switching on a series LR circuit. The solid curve is the current as a fraction of ℰ/R; the dashed curve is the inductor voltage as a fraction of ℰ. The open circles mark t = τ, where the current is 63% of its final value and the inductor voltage is 37% of ℰ. The dotted tangent shows the initial-rate meaning of τ. The same dashed shape describes a current decaying from I₀ (with I₀ in place of ℰ).</figcaption>
</figure>

## Energy in an LR circuit

Multiply the loop equation by I:

ℰI = I²R + LI dI/dt = I²R + d/dt(½LI²)

Each term is a power. The battery supplies energy at the rate ℰI. Part is dissipated in the resistor at the rate I²R, and the rest goes into the inductor's magnetic field at the rate d/dt(½LI²). Once the current is steady, the field stops gaining energy and all the battery's power is dissipated in R.

When the battery is removed and the current decays, the stored energy has to go somewhere. The resistor dissipates it:

∫₀^∞ I²R dt = I₀²R ∫₀^∞ e^(−2t/τ) dt = I₀²R (τ/2) = **½LI₀²**

All of the energy stored in the inductor ends up as thermal energy in the resistor. Notice the factor 2 in the exponent: because U ∝ I², the stored energy decays as e^(−2t/τ), twice as fast as the current. (In Topic 13.6 you will see the other possibility: the stored energy is used to charge a capacitor instead.)

## Circuits with more than one resistor

With several resistors and one inductor, use the two rules from the first section instead of solving the whole equation straight away.

- **Just after a switch moves:** keep the inductor's current at its old value. If that value is zero, treat the inductor's branch as open. The induced emf is then equal in size and opposite in direction to the potential difference applied across the inductor's branch.
- **A long time after:** replace the inductor with a plain wire.
- **In between:** quantities change exponentially from the first value to the second. The time constant is L divided by the resistance in the loop (or network) the inductor's current flows through. For a decay, this is the loop that remains when the battery is cut off.

## Worked example 1: switching on a series LR circuit

**Question.** A 12 V battery with negligible internal resistance, a 40 Ω resistor, a 0.20 H inductor and an open switch are in series. The switch is closed at t = 0. Find (a) τ and the final current, (b) the initial rate of change of current, (c) the current and both voltages at t = τ, (d) when the current is 0.25 A and (e) the energy finally stored.

1. (a) τ = L/R = 0.20 H ÷ 40 Ω = **5.0 ms**. I_f = ℰ/R = 12 V ÷ 40 Ω = **0.30 A**.
2. (b) At t = 0 the current is zero, so the resistor has no voltage and V_L = ℰ = 12 V. dI/dt = ℰ/L = 12 ÷ 0.20 = **60 A/s**.
3. (c) I(τ) = 0.30 × (1 − e⁻¹) = **0.19 A**. V_L = 12e⁻¹ = **4.4 V** and V_R = 12(1 − e⁻¹) = **7.6 V**. They add to 12 V.
4. (d) 0.25 = 0.30(1 − e^(−t/τ)), so e^(−t/τ) = 1/6 and t = τ ln 6 = 5.0 ms × 1.79 = **9.0 ms**.
5. (e) U = ½LI_f² = ½ × 0.20 × (0.30)² = **9.0 × 10⁻³ J** (9.0 mJ).

**Check.** At the initial rate of 60 A/s the current would reach 0.30 A in 0.30 ÷ 60 = 5.0 ms, which is τ, as it should be. At t = 2τ the inductor voltage has fallen to 12e⁻² = 1.6 V, so the circuit is already close to steady.

## Worked example 2: a branch with an inductor, switched on and off

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="lr-net-title lr-net-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="lr-net-title">Battery, switch and resistor R1 feeding R2 and an inductor in parallel</title>
<desc id="lr-net-desc">A battery of emf ℰ on the left, positive terminal at the top. The top wire runs from the battery through an open switch S and then through resistor R1 to junction P. From P, one branch goes straight down through resistor R2 to junction Q on the bottom wire. The top wire continues right from P to a second branch, which goes down through inductor L to the bottom wire. An arrow labelled I_L beside the inductor points down. The bottom wire joins Q and returns to the negative terminal of the battery.</desc>
<defs><marker id="lrn-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="80" y1="60" x2="80" y2="149"/><line x1="62" y1="149" x2="98" y2="149" stroke-width="2.5"/><line x1="71" y1="161" x2="89" y2="161" stroke-width="5"/><line x1="80" y1="161" x2="80" y2="250"/>
<line x1="80" y1="60" x2="137" y2="60"/><circle cx="140" cy="60" r="3"/><line x1="143" y1="58" x2="180" y2="40"/><circle cx="184" cy="60" r="3"/><line x1="187" y1="60" x2="220" y2="60"/>
<polyline points="220,60 225,50 235,70 245,50 255,70 265,50 275,70 280,60"/>
<line x1="280" y1="60" x2="480" y2="60"/>
<line x1="360" y1="60" x2="360" y2="120"/>
<polyline points="360,120 350,125 370,135 350,145 370,155 350,165 370,175 360,180"/>
<line x1="360" y1="180" x2="360" y2="250"/>
<line x1="480" y1="60" x2="480" y2="120"/>
<path d="M480 120 a8 8 0 0 1 0 16 a8 8 0 0 1 0 16 a8 8 0 0 1 0 16 a8 8 0 0 1 0 16"/>
<line x1="480" y1="184" x2="480" y2="250"/>
<line x1="80" y1="250" x2="480" y2="250"/>
<line x1="512" y1="125" x2="512" y2="180" marker-end="url(#lrn-arr)"/>
</g>
<circle cx="360" cy="60" r="4" fill="#1d2b44"/><circle cx="360" cy="250" r="4" fill="#1d2b44"/>
<g font-size="14" fill="#1d2b44" text-anchor="middle">
<text x="108" y="146" font-weight="bold">+</text>
<text x="44" y="160">ℰ</text>
<text x="162" y="84">S</text>
<text x="250" y="40">R₁</text>
<text x="335" y="155">R₂</text>
<text x="458" y="157">L</text>
<text x="532" y="157">I_L</text>
<text x="360" y="44">P</text>
<text x="360" y="274">Q</text>
</g>
</svg>
<figcaption>Figure 2. The circuit for Worked example 2 and Practice Question 7. R₁ is in series with the battery; R₂ and the inductor are in parallel between junctions P and Q. The arrow shows the direction of the inductor current while the battery drives it.</figcaption>
</figure>

**Question.** In Figure 2, ℰ = 9.0 V, R₁ = 30 Ω, R₂ = 60 Ω and L = 0.45 H. The switch has been open for a long time and is closed at t = 0. (a) Find the current in each resistor and the inductor voltage just after closing. (b) Find the currents a long time later. (c) The switch is then opened again. Find the current in R₂ and the potential difference across it just after opening, and the time constant of the decay. (d) How much energy is dissipated in R₂ after opening?

**(a) Just after closing.** The inductor's current was zero, so it is still zero: treat its branch as open. R₁ and R₂ are then in series: I = 9.0 V ÷ 90 Ω = **0.10 A** in both. The inductor is in parallel with R₂, so V_L = IR₂ = 0.10 × 60 = **6.0 V**. The induced emf is 6.0 V, equal and opposite to the potential difference applied across the branch. The inductor current is starting to grow at dI_L/dt = 6.0 ÷ 0.45 = 13 A/s.

**(b) A long time later.** The inductor acts as a wire. It shorts out R₂, so V_PQ = 0 and the current in R₂ is **zero**. The current in R₁ and in the inductor is ℰ/R₁ = 9.0 ÷ 30 = **0.30 A**. (While the current grows, the inductor "sees" R₁ and R₂ in parallel, 20 Ω, so the charging time constant is 0.45 ÷ 20 = 22.5 ms, not L/R₁. Practice Question 7 asks you to derive this.)

**(c) Just after opening.** The battery and R₁ are cut off. The inductor current cannot change instantly, so 0.30 A keeps flowing down through L and must return **up** through R₂. The current in R₂ is **0.30 A**, in the opposite direction to part (a). The potential difference across R₂ is 0.30 × 60 = **18 V**, twice the battery emf. The decay loop contains only L and R₂, so τ = L/R₂ = 0.45 ÷ 60 = **7.5 ms**, and I = 0.30e^(−t/7.5 ms) A.

**(d) Energy.** All the stored energy is dissipated in R₂: ½LI² = ½ × 0.45 × (0.30)² = **0.020 J** (20 mJ).

**Interpretation.** Opening a switch can produce a voltage much larger than the battery emf, because the inductor forces its current through whatever path is left. With no path at all, the induced emf would be large enough to cause a spark across the switch.

## Common misconceptions

- **"The current jumps to ℰ/R when the switch closes."** It starts at zero and grows. Only the current in an inductor-free branch can jump.
- **"The induced emf opposes the current."** It opposes the **change** in current. While a current decays, the induced emf acts in the same direction as the current, keeping it going.
- **Writing τ = RL or R/L.** τ = L/R. Check the units: H/Ω = s.
- **"After one time constant the current has reached its final value."** It has reached 63% of it. The tangent at t = 0 reaches the final value at τ; the curve does not.
- **"A larger resistance makes the circuit slower."** It makes τ smaller, so the circuit settles faster, to a smaller current.
- **"An inductor blocks steady current."** That is a capacitor. A steady current passes through an ideal inductor with no voltage across it.
- **"No voltage across the inductor means no stored energy."** At steady state V_L = 0, but the inductor stores ½LI².
- **Using the charging τ for the decay.** The decay τ uses the resistance in the loop that is left after switching, which may be different.
- **"The energy decays with time constant τ."** U ∝ I², so U decays as e^(−2t/τ).

## Where this leads

Next, in Topic 13.6, the inductor's energy is passed to a capacitor instead of a resistor, and the circuit oscillates: see the [LC circuits study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-6-circuits-capacitors-inductors-lc-circuits-study-guide/). Compare this topic with the [RC circuits guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-8-resistor-capacitor-rc-circuits-study-guide/): there τ = RC, and the capacitor's voltage (not current) cannot jump. Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/13-5-circuits-resistors-inductors-lr-circuits-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/13-5-circuits-resistors-inductors-lr-circuits-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/13-5-circuits-resistors-inductors-lr-circuits-checklist/).
