---
resourceId: "mb-ap-phys2-11.8-study-guide"
title: "Resistor-Capacitor (RC) Circuits: Study Guide (Physics 2 11.8)"
description: "Capacitors in series and parallel, how charge, potential difference and current change as a capacitor charges or discharges, the time constant RC, and start and end states."
course: "physics-2"
unit: 11
topics: ["11.8"]
resourceType: "study-guide"
prerequisites:
  - "Capacitance Q = CΔV and stored energy U = ½QΔV (Topic 10.6)"
  - "Kirchhoff's loop and junction rules (Topics 11.6 and 11.7)"
  - "Equivalent resistance in series and parallel (Topic 11.5)"
prerequisiteResources: ["mb-ap-phys2-11.7-study-guide"]
learningObjectives:
  - "Find the equivalent capacitance of capacitors in series, in parallel and in simple combinations"
  - "Explain why capacitors in series carry equal charge and why their equivalent capacitance is below the smallest one"
  - "Describe and sketch how charge, potential difference, current and stored energy change while a capacitor charges or discharges"
  - "Use τ = RC to compare how quickly circuits charge or discharge, including the 63% and 37% benchmarks"
  - "Calculate currents, potential differences, charge and energy just after a switch moves and after a long time"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "1 μF = 10⁻⁶ F, 1 kΩ = 10³ Ω, 1 mA = 10⁻³ A. Batteries, wires and switches are ideal. Keep unrounded values until the final step"
related: ["mb-ap-phys2-11.8-revision-notes", "mb-ap-phys2-11.8-practice", "mb-ap-phys2-11.8-checklist"]
next: "mb-ap-phys2-11.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Parallel capacitors add: C_eq = C₁ + C₂ + … . Series capacitors combine as 1/C_eq = 1/C₁ + 1/C₂ + … ."
  - "Capacitors in series all carry the same charge, and C_eq is smaller than the smallest capacitor."
  - "Just after a switch closes, an uncharged capacitor acts like a wire. After a long time, it acts like a break: no current in its branch."
  - "The time constant τ = RC: charging reaches about 63% of the final charge after τ; discharging falls to about 37% after τ."
  - "In this course you describe RC behaviour qualitatively and calculate start and end states, not values at a given time."
faqs:
  - question: "Do I need the exponential equations for charging and discharging?"
    answer: "No. In this course you describe how the quantities change, sketch the graphs, use τ = RC and the 63% and 37% benchmarks, and calculate the initial and final states. You are not expected to model the values mathematically at any given time."
  - question: "Does charge flow through the gap in a capacitor?"
    answer: "No. Charge flows onto one plate and an equal amount flows off the other plate, so there is a current in the wires on both sides. No charge crosses the gap between the plates."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Capacitors in combination

In Topic 10.6 a capacitor stored charge +Q on one plate and −Q on the other, with Q = CΔV. In a circuit, several capacitors can be replaced by one **equivalent capacitance** C_eq that stores the same charge for the same potential difference.

**Parallel.** Each capacitor is connected across the same two points, so each has the **same ΔV**. The charges add: Q = C₁ΔV + C₂ΔV. So:

**C_eq = C₁ + C₂ + …**

Adding a capacitor in parallel is like making the plates bigger, so C_eq goes up.

**Series.** Look at the inner plates of two capacitors in series: the right plate of C₁ and the left plate of C₂, joined by a wire (the dashed box in Figure 1). Nothing else connects to them, and they start uncharged. Charge is conserved, so their total charge stays zero. If −Q moves onto one, +Q must be left on the other. So **every capacitor in series carries the same charge Q**. The potential differences add: ΔV = Q/C₁ + Q/C₂. So:

**1/C_eq = 1/C₁ + 1/C₂ + …**

Because each term 1/C is positive, 1/C_eq is larger than any single 1/C. So **C_eq is smaller than the smallest capacitor** in the series. For example, two 2.0 μF capacitors give 1.0 μF in series and 4.0 μF in parallel.

Notice the pattern is the reverse of resistors: series resistances add, but parallel capacitances add.

<figure>
<svg viewBox="0 0 560 230" role="img" aria-labelledby="cap-title cap-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cap-title">Two capacitors in series and two capacitors in parallel</title>
<desc id="cap-desc">Left: capacitors C1 and C2 in series on one wire. The plates are marked plus Q, minus Q, plus Q, minus Q from left to right. A dashed box encloses the right plate of C1, the left plate of C2 and the wire between them, labelled isolated, net charge zero. Right: C1 and C2 in parallel, on two branches between the same two junctions, with charges Q1 and Q2. Captions below give the series and parallel rules.</desc>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="20" y1="100" x2="94" y2="100"/><line x1="94" y1="78" x2="94" y2="122"/><line x1="106" y1="78" x2="106" y2="122"/><line x1="106" y1="100" x2="184" y2="100"/><line x1="184" y1="78" x2="184" y2="122"/><line x1="196" y1="78" x2="196" y2="122"/><line x1="196" y1="100" x2="270" y2="100"/>
<rect x="100" y="60" width="90" height="80" stroke-dasharray="5 4" stroke-width="1.5"/>
<line x1="300" y1="110" x2="340" y2="110"/><line x1="340" y1="60" x2="340" y2="160"/>
<line x1="340" y1="60" x2="414" y2="60"/><line x1="414" y1="40" x2="414" y2="80"/><line x1="426" y1="40" x2="426" y2="80"/><line x1="426" y1="60" x2="500" y2="60"/>
<line x1="340" y1="160" x2="414" y2="160"/><line x1="414" y1="140" x2="414" y2="180"/><line x1="426" y1="140" x2="426" y2="180"/><line x1="426" y1="160" x2="500" y2="160"/>
<line x1="500" y1="60" x2="500" y2="160"/><line x1="500" y1="110" x2="540" y2="110"/>
</g>
<circle cx="340" cy="110" r="4" fill="#1d2b44"/><circle cx="500" cy="110" r="4" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="86" y="74">+Q</text><text x="116" y="152">−Q</text><text x="176" y="152">+Q</text><text x="206" y="74">−Q</text>
<text x="100" y="40">C₁</text><text x="190" y="40">C₂</text>
<text x="145" y="54">isolated: net charge 0</text>
<text x="420" y="30">C₁, charge Q₁</text><text x="420" y="198">C₂, charge Q₂</text>
<text x="145" y="190">Series: same Q, ΔV adds</text><text x="145" y="208">1/C_eq = 1/C₁ + 1/C₂</text>
<text x="420" y="214">Parallel: same ΔV, Q adds; C_eq = C₁ + C₂</text>
</g>
</svg>
<figcaption>Figure 1. Left: in series, the inner plates and the wire between them (dashed box) are isolated, so their net charge stays zero and both capacitors carry the same Q. Right: in parallel, both capacitors have the same ΔV and their charges add.</figcaption>
</figure>

## Charging a capacitor through a resistor

Connect an uncharged capacitor C, a resistor R, a switch and an ideal battery of emf ℰ in one loop, then close the switch. The loop rule holds at every instant:

**ℰ = ΔV_R + ΔV_C = IR + Q/C**

Follow what happens.

- **Just after closing.** Q = 0, so ΔV_C = 0. The capacitor acts like a **plain wire**: charge flows easily onto its plates. The whole emf is across the resistor, so the current is largest: **I₀ = ℰ/R**.
- **While charging.** Charge builds up, so ΔV_C = Q/C rises. Then ΔV_R = ℰ − ΔV_C falls, so the current falls. The stored energy U = ½QΔV_C rises.
- **After a long time.** ΔV_C approaches ℰ. Then ΔV_R approaches 0 and the current approaches **zero**. The capacitor holds its maximum charge **Q = Cℰ** and acts like a **break** in its branch.

Each quantity changes quickly at first, then more and more slowly, approaching its final value **asymptotically**.

The current is in the wires on both sides of the capacitor: charge flows onto one plate and the same amount flows off the other. No charge crosses the gap.

## Discharging a capacitor

Now connect a charged capacitor (potential difference ΔV₀) across a resistor. The capacitor drives the current, so the current in its branch flows **the opposite way** to the charging current.

- **Just after the connection,** ΔV_R = ΔV₀, so the current is largest, ΔV₀/R. At once, the charge and stored energy start to fall.
- **While discharging,** Q, ΔV_C and I all decrease together, quickly at first and then more slowly.
- **After a long time,** all three approach zero.

## The time constant τ = RC

How fast these changes happen depends on the **time constant**:

**τ = RC**

Units: Ω × F = (V/A) × (C/V) = C/A = s. So τ is a time.

- **Charging:** after one time constant, the charge (and ΔV_C) has reached about **63%** of its final value.
- **Discharging:** after one time constant, the charge (and ΔV_C and I) has fallen to about **37%** of its starting value.

<figure>
<svg viewBox="0 0 560 260" role="img" aria-labelledby="rc-title rc-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rc-title">Charge and current against time while a capacitor charges</title>
<desc id="rc-desc">Two sketch graphs. Left: charge Q against time rises steeply from zero, then levels off towards a dashed line at Q max equals C times emf; at t equals tau it is at 63 percent of Q max. Right: current I against time falls from emf over R towards zero; at t equals tau it is at 37 percent of its initial value.</desc>
<defs><marker id="rc-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="60" y1="200" x2="275" y2="200" marker-end="url(#rc-arr)"/><line x1="60" y1="200" x2="60" y2="35" marker-end="url(#rc-arr)"/>
<line x1="320" y1="200" x2="535" y2="200" marker-end="url(#rc-arr)"/><line x1="320" y1="200" x2="320" y2="35" marker-end="url(#rc-arr)"/>
<polyline stroke-width="2.5" points="60.0,200.0,70.0,169.0,80.0,144.9,90.0,126.1,100.0,111.5,110.0,100.1,120.0,91.2,130.0,84.3,140.0,78.9,150.0,74.8,160.0,71.5,170.0,68.9,180.0,67.0,190.0,65.4,200.0,64.2,210.0,63.3,220.0,62.6,230.0,62.0,240.0,61.6,250.0,61.2,260.0,60.9"/>
<polyline stroke-width="2.5" points="320.0,60.0,330.0,91.0,340.0,115.1,350.0,133.9,360.0,148.5,370.0,159.9,380.0,168.8,390.0,175.7,400.0,181.1,410.0,185.2,420.0,188.5,430.0,191.1,440.0,193.0,450.0,194.6,460.0,195.8,470.0,196.7,480.0,197.4,490.0,198.0,500.0,198.4,510.0,198.8,520.0,199.1"/>
</g>
<g stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="5 4" fill="none">
<line x1="60" y1="60" x2="265" y2="60"/>
<line x1="60" y1="111.5" x2="100" y2="111.5"/><line x1="100" y1="111.5" x2="100" y2="200"/>
<line x1="320" y1="148.5" x2="360" y2="148.5"/><line x1="360" y1="148.5" x2="360" y2="200"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="100" y="216">τ</text><text x="360" y="216">τ</text>
<text x="265" y="220">t</text><text x="525" y="220">t</text>
<text x="60" y="26">Q</text><text x="320" y="26">I</text>
<text x="200" y="52">Q_max = Cℰ</text>
<text x="54" y="115" text-anchor="end">0.63</text><text x="54" y="128" text-anchor="end">Q_max</text>
<text x="300" y="64" text-anchor="end">ℰ/R</text>
<text x="300" y="146" text-anchor="end">0.37</text><text x="300" y="159" text-anchor="end">ℰ/R</text>
<text x="160" y="245">Charging: charge</text><text x="420" y="245">Charging: current</text>
</g>
</svg>
<figcaption>Figure 2. Sketch graphs for a capacitor charging through a resistor. The charge (and ΔV_C) rises towards Cℰ; the current falls from ℰ/R towards zero. The dashed guides mark one time constant τ. A discharging capacitor's charge, ΔV_C and current (in size) all have the shape of the right-hand graph.</figcaption>
</figure>

Why RC? A larger R means a smaller current for the same potential difference, so charge moves more slowly. A larger C means more charge must move to reach the same potential difference. Either way the process takes longer. The emf does **not** change τ: a bigger emf means more charge to move, but also a proportionally bigger current.

*Background, not assessed:* the 63% and 37% figures come from an exponential model (37% ≈ 1/e). After about 5τ the capacitor is within 1% of its final state, which is why "after a long time" means many time constants.

## Capacitors in circuits with branches

For circuits with more than one branch, use two snapshots and Kirchhoff's rules.

1. **Just after a switch closes:** replace each **uncharged** capacitor with a wire. Solve for the currents.
2. **After a long time:** replace each capacitor with a **break**. Its branch carries no current. Solve for the currents, then find ΔV_C from the loop rule. ΔV_C equals the potential difference across whatever the capacitor's branch is connected in parallel with.

Between these two states, every quantity changes smoothly from its first value to its last.

## Worked example 1: equivalent capacitance

**Question.** C₁ = 6.0 μF is connected in series with a parallel pair, C₂ = 1.0 μF and C₃ = 2.0 μF. The combination is connected to a 9.0 V battery and fully charged. Find C_eq, the charge and potential difference for each capacitor, and the total stored energy.

1. Parallel pair: C₂₃ = 1.0 + 2.0 = 3.0 μF.
2. In series with C₁: 1/C_eq = 1/6.0 + 1/3.0 = 1/2.0, so **C_eq = 2.0 μF**. (Smaller than 3.0 μF, as it must be.)
3. Total charge: Q = C_eq ΔV = (2.0 μF)(9.0 V) = **18 μC**. C₁ and the pair are in series, so each carries 18 μC.
4. ΔV₁ = 18 μC ÷ 6.0 μF = **3.0 V**. ΔV₂₃ = 18 μC ÷ 3.0 μF = **6.0 V**.
5. Q₂ = (1.0 μF)(6.0 V) = **6.0 μC**; Q₃ = (2.0 μF)(6.0 V) = **12 μC**.
6. Energy: U = ½C_eq(ΔV)² = ½(2.0 × 10⁻⁶ F)(9.0 V)² = **81 μJ**.

**Check.** 3.0 V + 6.0 V = 9.0 V (loop rule). 6.0 μC + 12 μC = 18 μC (charge conservation). Energy by parts: ½(18 μC)(3.0 V) + ½(18 μC)(6.0 V) = 27 + 54 = 81 μJ.

## Worked example 2: start and end states

**Question.** An ideal 12 V battery, a switch and R₁ = 2.0 kΩ are in series. After R₁ the circuit splits into two parallel branches: an uncharged capacitor C = 50 μF, and a resistor R₂ = 4.0 kΩ. The switch is closed at t = 0. Find the currents just after closing and after a long time, and the final charge and energy on C.

1. **Just after closing,** C acts like a wire. It is in parallel with R₂, so R₂ is short-circuited: ΔV across R₂ is 0 and I_R₂ = 0.
2. All the emf is across R₁: I₁ = 12 V ÷ 2000 Ω = **6.0 mA**. By the junction rule, I_C = I₁ − I_R₂ = **6.0 mA**.
3. **After a long time,** C acts like a break, so I_C = 0. The junction rule gives I_R₂ = I₁.
4. One loop through R₁ and R₂: I₁ = 12 V ÷ 6000 Ω = **2.0 mA**, so I_R₂ = **2.0 mA**.
5. ΔV_C = ΔV across R₂ = (2.0 mA)(4.0 kΩ) = **8.0 V**, not 12 V. The other 4.0 V is across R₁.
6. Q = CΔV_C = (50 μF)(8.0 V) = **400 μC**. U = ½C(ΔV_C)² = ½(50 × 10⁻⁶ F)(8.0 V)² = **1.6 mJ**.

**Interpretation.** The battery current falls from 6.0 mA to 2.0 mA while the R₂ current rises from 0 to 2.0 mA. The capacitor only reaches the potential difference of the element it is in parallel with.

## Worked example 3: finding τ from discharge data

**Question.** A student charges a capacitor, then discharges it through a 60 kΩ resistor, recording ΔV_C (fictional data): 8.0 V at 0 s, 5.3 V at 5 s, 3.5 V at 10 s, 2.3 V at 15 s, 1.5 V at 20 s, 1.0 V at 25 s and 0.66 V at 30 s. Estimate τ and the capacitance.

<figure>
<svg viewBox="0 0 540 350" role="img" aria-labelledby="dis-title dis-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="dis-title">Discharge data: capacitor potential difference against time</title>
<desc id="dis-desc">Potential difference, 0 to 8 volts, against time, 0 to 30 seconds. Seven data points, drawn as squares, lie on a smooth falling curve from 8.0 volts to 0.66 volts. A dotted line at 2.96 volts meets the curve at about 12 seconds.</desc>
<defs><marker id="dis-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="70" y1="300" x2="515" y2="300" marker-end="url(#dis-arr)"/><line x1="70" y1="300" x2="70" y2="40" marker-end="url(#dis-arr)"/>
<polyline stroke-width="1.5" points="70.0,60.0,84.0,79.2,98.0,96.8,112.0,113.1,126.0,128.0,140.0,141.8,154.0,154.4,168.0,166.1,182.0,176.8,196.0,186.6,210.0,195.7,224.0,204.0,238.0,211.7,252.0,218.8,266.0,225.3,280.0,231.2,294.0,236.7,308.0,241.8,322.0,246.4,336.0,250.7,350.0,254.7,364.0,258.3,378.0,261.6,392.0,264.7,406.0,267.5,420.0,270.1,434.0,272.5,448.0,274.7,462.0,276.7,476.0,278.6,490.0,280.3"/>
</g>
<g stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="2 4" fill="none">
<line x1="70" y1="211.2" x2="238" y2="211.2"/><line x1="238" y1="211.2" x2="238" y2="300"/>
</g>
<g fill="#1d2b44">
<rect x="66" y="56" width="8" height="8"/><rect x="136" y="137" width="8" height="8"/><rect x="206" y="191" width="8" height="8"/><rect x="276" y="227" width="8" height="8"/><rect x="346" y="251" width="8" height="8"/><rect x="416" y="266" width="8" height="8"/><rect x="486" y="276.2" width="8" height="8"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="140" y1="300" x2="140" y2="306" stroke="#1d2b44"/><text x="140" y="320">5</text>
<line x1="210" y1="300" x2="210" y2="306" stroke="#1d2b44"/><text x="210" y="320">10</text>
<line x1="280" y1="300" x2="280" y2="306" stroke="#1d2b44"/><text x="280" y="320">15</text>
<line x1="350" y1="300" x2="350" y2="306" stroke="#1d2b44"/><text x="350" y="320">20</text>
<line x1="420" y1="300" x2="420" y2="306" stroke="#1d2b44"/><text x="420" y="320">25</text>
<line x1="490" y1="300" x2="490" y2="306" stroke="#1d2b44"/><text x="490" y="320">30</text>
<text x="290" y="342" font-size="13">Time t (s)</text>
<text x="246" y="290" text-anchor="start">τ ≈ 12 s</text>
<text x="160" y="205">2.96 V</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="64" y1="240" x2="70" y2="240" stroke="#1d2b44"/><text x="60" y="244">2</text>
<line x1="64" y1="180" x2="70" y2="180" stroke="#1d2b44"/><text x="60" y="184">4</text>
<line x1="64" y1="120" x2="70" y2="120" stroke="#1d2b44"/><text x="60" y="124">6</text>
<line x1="64" y1="60" x2="70" y2="60" stroke="#1d2b44"/><text x="60" y="64">8</text>
</g>
<text x="22" y="180" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 180)">ΔV_C (V)</text>
</svg>
<figcaption>Figure 3. The student's discharge data (squares) with a smooth curve through them. The dotted lines show where ΔV_C has fallen to 37% of its starting value.</figcaption>
</figure>

1. Plot ΔV_C against t with even scales and draw a smooth curve (Figure 3).
2. After one time constant, ΔV_C is about 37% of its starting value: 0.37 × 8.0 V = 2.96 V.
3. 2.96 V lies between 3.5 V (10 s) and 2.3 V (15 s). Reading from the curve, or interpolating, gives **τ ≈ 12 s**.
4. C = τ/R = 12 s ÷ (60 × 10³ Ω) = 2.0 × 10⁻⁴ F = **200 μF**.

**Check.** After another 12 s (t ≈ 24 s), ΔV_C should be about 37% of 2.96 V, roughly 1.1 V. The data give about 1.1 V between 20 s and 25 s. To improve the estimate, repeat the run and measure the time to fall to 37% from several starting points.

## Common misconceptions

- **"Capacitors combine like resistors."** The rules swap: parallel capacitances add; series capacitances combine as reciprocals.
- **"Capacitors in series have different charges."** They all carry the same Q. It is their ΔV values that differ, with the largest ΔV across the smallest capacitor.
- **"An uncharged capacitor blocks current at first."** The reverse: at first it acts like a wire. It blocks steady current only once it is charged.
- **"Charge flows through the capacitor."** Charge flows onto one plate and off the other. None crosses the gap.
- **"The capacitor is full after one time constant."** After τ it has about 63% of its final charge. It approaches full charge only after many time constants.
- **"A bigger battery charges the capacitor faster."** τ = RC does not depend on the emf.
- **"The final ΔV_C always equals the battery emf."** Only if no current flows in the rest of the loop. In Worked example 2 it is 8.0 V, not 12 V.
- **"The current in a discharging capacitor flows the same way as when charging."** The capacitor now drives the current, so in its branch it flows the other way.

## Where this leads

This completes the circuits unit. Next, [Topic 12.1, Magnetic Fields](/advanced-course-resources/physics-2/12-1-magnetic-fields-study-guide/), starts magnetism, where moving charges and currents produce and feel magnetic forces. First test yourself with the [practice questions](/advanced-course-resources/physics-2/11-8-resistor-capacitor-rc-circuits-practice/), then use the [revision notes](/advanced-course-resources/physics-2/11-8-resistor-capacitor-rc-circuits-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/11-8-resistor-capacitor-rc-circuits-checklist/) to consolidate. To revise the junction rule used in Worked example 2, return to [Topic 11.7](/advanced-course-resources/physics-2/11-7-kirchhoffs-junction-rule-study-guide/).
