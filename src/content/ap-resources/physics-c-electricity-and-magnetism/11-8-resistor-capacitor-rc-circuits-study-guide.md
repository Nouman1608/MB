---
resourceId: "mb-ap-physcem-11.8-study-guide"
title: "Resistor-Capacitor (RC) Circuits: Study Guide (Physics C: E&M 11.8)"
description: "Calculus-based guide to RC circuits: capacitors in series and parallel, the differential equations for charging and discharging, the time constant RC, and initial and steady-state behaviour."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.8"]
resourceType: "study-guide"
prerequisites:
  - "Capacitance C = Q/ΔV and stored energy U = ½CΔV² (Topic 10.3)"
  - "Kirchhoff's loop and junction rules (Topics 11.6 and 11.7)"
  - "Separating variables in a first-order differential equation, and natural logarithms"
prerequisiteResources: ["mb-ap-physcem-11.7-study-guide"]
learningObjectives:
  - "Find the equivalent capacitance of capacitors in series and in parallel, and the charge and potential difference on each"
  - "Derive and solve the differential equations for a capacitor charging and discharging through a resistor"
  - "Use the time constant τ = RC to predict charge, potential difference and current at any time"
  - "Find currents just after a switch moves and after a long time by treating capacitors as wires or as breaks"
  - "Describe how stored energy changes, and plan a measurement of a time constant using a linearised graph"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "core"
calculator: "scientific"
calculatorNote: "e ≈ 2.718; 1 − 1/e ≈ 0.632 and 1/e ≈ 0.368. Batteries, wires and meters are ideal unless stated. Keep unrounded values until the final step"
related: ["mb-ap-physcem-11.8-revision-notes", "mb-ap-physcem-11.8-practice", "mb-ap-physcem-11.8-checklist"]
next: "mb-ap-physcem-11.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Parallel capacitors add: C_eq = C₁ + C₂ + …. Series capacitors combine as 1/C_eq = 1/C₁ + 1/C₂ + …, and all carry the same charge."
  - "The loop rule gives R dq/dt + q/C = ℰ for charging and R dq/dt + q/C = 0 for discharging."
  - "Charging: q = Cℰ(1 − e^(−t/RC)). Discharging: q = Q₀e^(−t/RC). Current decays as e^(−t/RC) in both."
  - "The time constant τ = RC: after one τ a charging capacitor has about 63% of its final charge; a discharging one keeps about 37%."
  - "Just after closing a switch, an uncharged capacitor acts like a wire; after a long time, it acts like a break with zero current."
faqs:
  - question: "Does a capacitor ever finish charging?"
    answer: "In the model, the charge approaches its final value but never reaches it exactly. In practice, after about 5τ it is within 1% of the final value, so you can treat it as fully charged."
  - question: "Why is it called RC circuits rather than capacitor circuits?"
    answer: "The resistor controls how fast charge can flow, and the capacitor sets how much charge is needed. Their product RC, which has units of seconds, sets the time scale of everything that happens."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 11.8. The algebra-based Physics 2 course also meets RC circuits; this course adds the differential equations, their solutions and energy by integration. You will use both Kirchhoff rules from Topics 11.6 and 11.7, now applied at every instant while currents change.

## Capacitors in combination

Before adding resistors, you need to combine capacitors. As with resistors, a group of capacitors can be replaced by one **equivalent capacitance**, C_eq, that stores the same charge for the same potential difference.

**Parallel.** Capacitors in parallel share the same two junctions, so each has the same potential difference ΔV. Their charges add: Q = C₁ΔV + C₂ΔV + … = (C₁ + C₂ + …)ΔV. So:

**C_eq = C₁ + C₂ + C₃ + …** (parallel)

Parallel plates in effect make a bigger plate area, so the capacitance grows.

**Series.** Look at two capacitors in series. The right plate of C₁ and the left plate of C₂ are joined by a wire, and nothing else connects to that wire. Together they form an isolated conductor that started neutral. If +Q arrives on the left plate of C₁, then −Q gathers on its right plate, so +Q must be left on the left plate of C₂, by **conservation of charge**. So every capacitor in series carries the **same magnitude of charge**. The potential differences add (loop rule): ΔV = Q/C₁ + Q/C₂ + …. Dividing by Q:

**1/C_eq = 1/C₁ + 1/C₂ + 1/C₃ + …** (series)

Each term on the right is positive, so 1/C_eq is larger than 1/C for any single capacitor. That means **C_eq is less than the smallest capacitance** in the series group.

| | Same for each element | Equivalent value |
|---|---|---|
| Capacitors in parallel | ΔV | C₁ + C₂ + … (adds) |
| Capacitors in series | Q | 1/C_eq = Σ 1/Cᵢ (less than the smallest) |
| Resistors in series | I | R₁ + R₂ + … (adds) |
| Resistors in parallel | ΔV | 1/R_eq = Σ 1/Rᵢ (less than the smallest) |

The rules are "swapped" compared with resistors. Capacitance is Q/ΔV, while resistance is ΔV/I, so the roles flip.

## Worked example 1: a capacitor network

**Question.** In Figure 1, C₁ = 6.0 μF is in series with a parallel pair, C₂ = 2.0 μF and C₃ = 1.0 μF, across a 12.0 V battery. The capacitors were uncharged before connection. Find C_eq, and the charge and potential difference for each capacitor.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="rc-net-title rc-net-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rc-net-title">Capacitor network for Worked example 1</title>
<desc id="rc-net-desc">A battery on the left, positive terminal at the top, labelled 12.0 volts. The top wire runs right through capacitor C one, 6.0 microfarads, drawn as two equal parallel vertical lines, to junction P. From P one branch goes down through capacitor C two, 2.0 microfarads, to junction Q on the bottom wire. The top wire continues right from P to a second branch that goes down through capacitor C three, 1.0 microfarad, to the bottom wire. The bottom wire returns to the negative terminal.</desc>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="80" y1="60" x2="80" y2="149"/><line x1="62" y1="149" x2="98" y2="149" stroke-width="2.5"/><line x1="71" y1="161" x2="89" y2="161" stroke-width="5"/><line x1="80" y1="161" x2="80" y2="250"/>
<line x1="80" y1="60" x2="189" y2="60"/><line x1="189" y1="40" x2="189" y2="80" stroke-width="2.5"/><line x1="201" y1="40" x2="201" y2="80" stroke-width="2.5"/><line x1="201" y1="60" x2="460" y2="60"/>
<line x1="320" y1="60" x2="320" y2="149"/><line x1="300" y1="149" x2="340" y2="149" stroke-width="2.5"/><line x1="300" y1="161" x2="340" y2="161" stroke-width="2.5"/><line x1="320" y1="161" x2="320" y2="250"/>
<line x1="460" y1="60" x2="460" y2="149"/><line x1="440" y1="149" x2="480" y2="149" stroke-width="2.5"/><line x1="440" y1="161" x2="480" y2="161" stroke-width="2.5"/><line x1="460" y1="161" x2="460" y2="250"/>
<line x1="80" y1="250" x2="460" y2="250"/>
</g>
<circle cx="320" cy="60" r="4" fill="#1d2b44"/><circle cx="320" cy="250" r="4" fill="#1d2b44"/>
<g font-size="14" fill="#1d2b44" text-anchor="middle">
<text x="108" y="146" font-weight="bold">+</text>
<text x="40" y="160">12.0 V</text>
<text x="195" y="28">C₁ = 6.0 μF</text>
<text x="320" y="44">P</text>
<text x="320" y="275">Q</text>
<text x="385" y="160">C₂ = 2.0 μF</text>
<text x="515" y="185">C₃ =</text>
<text x="515" y="203">1.0 μF</text>
</g>
</svg>
<figcaption>Figure 1. C₁ in series with the parallel pair C₂ and C₃. The capacitor symbol is two equal lines; the battery symbol has one long and one short line.</figcaption>
</figure>

1. **Parallel pair.** C₂₃ = 2.0 + 1.0 = 3.0 μF.
2. **Series with C₁.** 1/C_eq = 1/6.0 + 1/3.0 = 1/2.0, so **C_eq = 2.0 μF**. This is less than 3.0 μF, the smaller of the two, as it must be.
3. **Total charge.** Q = C_eq ΔV = (2.0 μF)(12.0 V) = **24 μC**. C₁ and the pair are in series, so each carries 24 μC.
4. **C₁.** ΔV₁ = Q/C₁ = 24 μC ÷ 6.0 μF = **4.0 V**.
5. **Pair.** ΔV₂₃ = 24 μC ÷ 3.0 μF = **8.0 V** across both C₂ and C₃. Then **Q₂ = 16 μC** and **Q₃ = 8.0 μC**.

**Check.** Loop: 4.0 V + 8.0 V = 12.0 V. Charge at P: the −24 μC on C₁'s right plate and the +16 μC and +8.0 μC on the top plates of C₂ and C₃ add to zero, so the isolated conductor round P stays neutral. The total stored energy, ½C_eqΔV² = 144 μJ, equals 48 + 64 + 32 μJ from the three capacitors.

## Charging a capacitor through a resistor

Figure 2 shows the basic RC circuit. The capacitor starts uncharged. At t = 0 the switch closes.

<figure>
<svg viewBox="0 0 560 260" role="img" aria-labelledby="rc-loop-title rc-loop-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rc-loop-title">A charging RC circuit</title>
<desc id="rc-loop-desc">A single loop. A battery of emf script E on the left side, positive terminal at the top. The top wire runs right through an open switch S, then through a resistor R. The right side of the loop goes down through a capacitor C. The bottom wire returns to the negative terminal. An arrow labelled I on the top wire points right, and the top plate of the capacitor is marked plus q, the bottom plate minus q.</desc>
<defs><marker id="rcl-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="100" y1="50" x2="100" y2="119"/><line x1="82" y1="119" x2="118" y2="119" stroke-width="2.5"/><line x1="91" y1="131" x2="109" y2="131" stroke-width="5"/><line x1="100" y1="131" x2="100" y2="210"/>
<line x1="100" y1="50" x2="170" y2="50"/><circle cx="173" cy="50" r="3"/><line x1="176" y1="48" x2="208" y2="33"/><circle cx="207" cy="50" r="3"/><line x1="210" y1="50" x2="290" y2="50"/>
<polyline points="290,50 295,40 305,60 315,40 325,60 335,40 345,60 350,50"/><line x1="350" y1="50" x2="440" y2="50"/>
<line x1="440" y1="50" x2="440" y2="119"/><line x1="420" y1="119" x2="460" y2="119" stroke-width="2.5"/><line x1="420" y1="131" x2="460" y2="131" stroke-width="2.5"/><line x1="440" y1="131" x2="440" y2="210"/>
<line x1="100" y1="210" x2="440" y2="210"/>
<line x1="370" y1="50" x2="410" y2="50" marker-end="url(#rcl-arr)"/>
</g>
<g font-size="14" fill="#1d2b44" text-anchor="middle">
<text x="128" y="116" font-weight="bold">+</text>
<text x="62" y="130">ℰ</text>
<text x="190" y="26">S</text>
<text x="320" y="28">R</text>
<text x="390" y="38">I</text>
<text x="492" y="130">C</text>
<text x="472" y="112">+q</text>
<text x="472" y="152">−q</text>
</g>
</svg>
<figcaption>Figure 2. A battery, switch, resistor and capacitor in one loop. With the switch closed, conventional current I flows clockwise and charges the top plate positive.</figcaption>
</figure>

**Set up the equation.** Go round the loop clockwise from the negative terminal: rise ℰ across the battery, drop IR across the resistor, drop q/C across the capacitor. The loop rule gives:

ℰ − IR − q/C = 0

The current in this branch is the rate at which charge arrives on the capacitor plate, I = dq/dt. Substituting:

**R (dq/dt) + q/C = ℰ**

This is the differential equation for charging. Every RC result comes from it.

**Solve it.** Rearrange as dq/dt = (Cℰ − q)/(RC) and separate the variables:

∫₀^q dq′/(Cℰ − q′) = ∫₀^t dt′/(RC)

−ln[(Cℰ − q)/(Cℰ)] = t/(RC)

**q(t) = Cℰ(1 − e^(−t/RC))**

Differentiate to get the current, and divide by C to get the potential difference:

**I(t) = (ℰ/R) e^(−t/RC)** and **ΔV_C(t) = ℰ(1 − e^(−t/RC))**

**The time constant.** The combination **τ = RC** sets the time scale. Its unit is the second: an ohm is a volt per ampere and a farad is a coulomb per volt, so Ω·F = C/A = s. After one time constant, q = Cℰ(1 − e^(−1)) ≈ 0.63Cℰ: **about 63% of the final charge**. After 2τ it is about 86%, after 3τ about 95% and after 5τ more than 99%.

## Discharging

Now take a capacitor with initial charge Q₀ and connect it across a resistor R at t = 0. There is no battery. The loop rule gives q/C − IR = 0. The capacitor's charge is now **decreasing**, and the current is the rate of decrease, so I = −dq/dt:

**R (dq/dt) + q/C = 0**

Separating variables gives ln(q/Q₀) = −t/(RC), so:

**q(t) = Q₀ e^(−t/RC)**, **ΔV_C(t) = ΔV₀ e^(−t/RC)** and **I(t) = (ΔV₀/R) e^(−t/RC)**, where ΔV₀ = Q₀/C.

After one time constant the charge is Q₀e^(−1): **about 37% of its starting value**. The charge, the potential difference and the current all fall together.

<figure>
<svg viewBox="0 0 560 370" role="img" aria-labelledby="rc-graph-title rc-graph-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rc-graph-title">Charge against time for charging and discharging</title>
<desc id="rc-graph-desc">Horizontal axis time in units of tau from 0 to 5; vertical axis charge as a fraction of the final or initial charge, from 0 to 1. Solid curve, charging: rises from 0, steeply at first, then levels off towards 1. A dotted straight line, the tangent at t equals 0, reaches the value 1 at one time constant. Dashed curve, discharging: falls from 1, steeply at first, then levels off towards 0. At one time constant, an open circle on the solid curve marks 0.63 and an open circle on the dashed curve marks 0.37.</desc>
<defs><marker id="rcg-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="70" y1="300" x2="545" y2="300" stroke="#1d2b44" stroke-width="2" marker-end="url(#rcg-arr)"/>
<line x1="70" y1="300" x2="70" y2="45" stroke="#1d2b44" stroke-width="2" marker-end="url(#rcg-arr)"/>
<line x1="70" y1="80" x2="530" y2="80" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<line x1="160" y1="300" x2="160" y2="80" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
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
<text x="18" y="190" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 18 190)">Charge fraction (no unit)</text>
<line x1="70" y1="300" x2="160" y2="80" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 3"/>
<polyline points="70.0,300.0 92.5,251.3 115.0,213.4 137.5,183.9 160.0,160.9 182.5,143.0 205.0,129.1 227.5,118.2 250.0,109.8 272.5,103.2 295.0,98.1 317.5,94.1 340.0,91.0 362.5,88.5 385.0,86.6 407.5,85.2 430.0,84.0 452.5,83.1 475.0,82.4 497.5,81.9 520.0,81.5" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="70.0,80.0 92.5,128.7 115.0,166.6 137.5,196.1 160.0,219.1 182.5,237.0 205.0,250.9 227.5,261.8 250.0,270.2 272.5,276.8 295.0,281.9 317.5,285.9 340.0,289.0 362.5,291.5 385.0,293.4 407.5,294.8 430.0,296.0 452.5,296.9 475.0,297.6 497.5,298.1 520.0,298.5" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="7 5"/>
<circle cx="160" cy="161" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="160" cy="219" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="300" y="120">charging: q/(Cℰ) = 1 − e^(−t/τ)</text>
<text x="300" y="265">discharging: q/Q₀ = e^(−t/τ)</text>
<text x="168" y="62">tangent at t = 0 reaches 1 at t = τ</text>
</g>
</svg>
<figcaption>Figure 3. Charging (solid) and discharging (dashed) curves for the same time constant. At t = τ the charging capacitor has 63% of its final charge and the discharging one keeps 37%. The current in both cases has the shape of the dashed curve: largest at t = 0, falling towards zero.</figcaption>
</figure>

## Just after and long after

You often need the circuit only at the two ends of the process. Two rules, both from q = CΔV_C, handle this, even in circuits with several branches.

- **Just after a switch moves, the charge on a capacitor has not changed yet.** A finite current needs time to move charge. So an **uncharged** capacitor has ΔV_C = 0 and **acts like a wire**: charge flows freely to and from its plates. A charged capacitor keeps its ΔV for that instant and acts like a battery of that potential difference. Immediately after discharging starts, its charge and stored energy begin to fall.
- **After a long time (t ≫ τ), the circuit reaches a steady state.** The charge stops changing, so dq/dt = 0 and there is **no current in the capacitor's branch**. The capacitor **acts like a break** in that branch, with the largest potential difference it will reach.

**Example.** A 6.0 V battery drives current through R₁ = 100 Ω to junction P. From P, R₂ = 200 Ω and an uncharged capacitor C are in parallel back to the battery. Just after closing the switch, C acts like a wire and shorts out R₂: the battery current is 6.0 V ÷ 100 Ω = 60 mA, all of it into the capacitor, and R₂ has none. Long after, the capacitor branch has no current, so 6.0 V ÷ 300 Ω = 20 mA flows through R₁ and R₂, and C holds ΔV = (20 mA)(200 Ω) = 4.0 V. At every instant in between, the junction rule at P still holds: I₁ = I₂ + dq/dt.

## Energy in an RC circuit

The stored energy is U = q²/(2C) = ½CΔV_C². While charging, U rises from zero towards ½Cℰ²; while discharging, it falls as U₀e^(−2t/RC), twice as fast as the charge, because U depends on q².

Where does the energy go during charging? The battery moves total charge Cℰ through emf ℰ, so it does work **Cℰ²**. The resistor dissipates:

∫₀^∞ I²R dt = (ℰ²/R) ∫₀^∞ e^(−2t/RC) dt = (ℰ²/R)(RC/2) = **½Cℰ²**

So exactly **half** the battery's energy is stored and half is dissipated, whatever the value of R. A larger R only makes the process slower.

## Worked example 2: charging with numbers

**Question.** In the circuit of Figure 2, ℰ = 9.0 V, R = 40 kΩ and C = 50 μF, and the capacitor starts uncharged. Find (a) τ and the current just after the switch closes, (b) the charge and current at t = 3.0 s, (c) the time at which ΔV_C = 6.0 V and (d) the final stored energy and the energy dissipated in the resistor.

1. **(a)** τ = RC = (40 × 10³ Ω)(50 × 10⁻⁶ F) = **2.0 s**. Just after closing, ΔV_C = 0, so I₀ = ℰ/R = 9.0 V ÷ 40 × 10³ Ω = **0.225 mA** (2.3 × 10⁻⁴ A).
2. **(b)** Final charge Cℰ = (50 μF)(9.0 V) = 450 μC. At t = 3.0 s, t/τ = 1.5 and e^(−1.5) = 0.223. q = 450 μC × (1 − 0.223) = **350 μC**. I = 0.225 mA × 0.223 = **0.050 mA**.
3. **(c)** 6.0 = 9.0(1 − e^(−t/τ)), so e^(−t/τ) = 1/3 and t = τ ln 3 = 2.0 s × 1.099 = **2.2 s**.
4. **(d)** U = ½Cℰ² = ½(50 × 10⁻⁶)(9.0)² = **2.0 mJ** (2.025 mJ). The battery supplies Cℰ² = 4.05 mJ, so the resistor dissipates the other **2.0 mJ**.

**Check.** At t = 3.0 s the potential differences are ΔV_C = 350 μC ÷ 50 μF = 7.0 V and ΔV_R = (0.050 mA)(40 kΩ) = 2.0 V. They add to 9.0 V, as the loop rule requires. The answer to (c), 2.2 s, is a little more than τ, which fits: 6.0 V is 67% of the final value, just past the 63% mark.

## Measuring a time constant

Taking natural logs of the discharge equation gives a straight line:

**ln ΔV_C = ln ΔV₀ − t/(RC)**

So a plan to find an unknown capacitance is: charge the capacitor, discharge it through a known large resistor, record ΔV_C with a voltmeter at regular times, and plot ln ΔV_C against t. The slope is −1/(RC), so C = −1/(R × slope). Choose R so that τ is several seconds or more, which makes timing easy. The voltmeter's own resistance is a second discharge path in parallel with R, so it should be much larger than R; otherwise the measured τ is too small.

## Common misconceptions

- **"Capacitors in series share the charge."** Each one in series carries the **same** charge as the whole group.
- **"Series capacitors add, like series resistors."** For capacitors, series combines as reciprocals, and C_eq is smaller than the smallest.
- **"The current in an RC circuit is constant."** It is largest at the start and decays exponentially.
- **"After one time constant the capacitor is half charged."** It is 63% charged; half charge takes τ ln 2 ≈ 0.69τ.
- **"An uncharged capacitor blocks current at first."** The opposite: at first it acts like a wire. It blocks steady current only after a long time.
- **"A bigger resistor stores more energy or wastes more."** The final stored and dissipated energies are each ½Cℰ², whatever R is. R changes only how long it takes.
- **Dropping the minus sign when discharging.** The current is the rate at which the capacitor's charge **decreases**, so I = −dq/dt.

## Where this leads

The equation R dq/dt + q/C = ℰ is your first circuit differential equation. In Unit 13 you will meet the same exponential shapes in LR circuits and a new kind of equation in LC circuits. Next comes Unit 12, starting with [Topic 12.1, Magnetic Fields](/advanced-course-resources/physics-c-electricity-and-magnetism/12-1-magnetic-fields-study-guide/). To review junctions, go back to [Topic 11.7](/advanced-course-resources/physics-c-electricity-and-magnetism/11-7-kirchhoffs-junction-rule-study-guide/). Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/11-8-resistor-capacitor-rc-circuits-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/11-8-resistor-capacitor-rc-circuits-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-8-resistor-capacitor-rc-circuits-checklist/).
