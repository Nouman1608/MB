---
title: "OCR A Level Physics A: Capacitance, capacitor combinations and stored energy (H556)"
seoTitle: "OCR A Level Physics Capacitance and Stored Energy Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Capacitance, capacitor combinations and stored energy"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 65
syllabusTopics:
  - qualification: "a-level"
    topic: "particles-and-medical-physics"
    subtopic: "capacitors-ocr-alevel"
description: "Study guide to capacitance, series and parallel capacitors, circuits with resistors and stored energy for OCR A Level Physics A (H556), with examples"
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide is aligned to the OCR A Level Physics A (H556) specification, Version 3.0 (March 2026), for first assessment in 2017. It covers Module 6 sections 6.1.1(a)-(e) and 6.1.2(a)-(c): capacitance, charge flow, capacitors in series and parallel, simple circuits and the energy stored. How the p.d. and charge change with time through a resistor is taught separately, so it is not repeated here.

Related pages: [revision notes](/resources/ocr-a-level-physics-capacitance-capacitor-combinations-and-stored-energy-revision-notes/), [practice questions](/resources/ocr-a-level-physics-capacitance-capacitor-combinations-and-stored-energy-practice/), the [OCR A Level Physics hub](/boards/ocr/a-level/physics/), the [printable checklist](/checklists/ocr/a-level/physics/) and the [free diagnostics](/diagnostics/). For units and uncertainties, see [Foundations of Physics](/resources/ocr-a-level-physics-foundations-of-physics/). For practical write-ups, see [Development of practical skills](/resources/ocr-a-level-physics-development-of-practical-skills/).

## What you must be able to do

| Spec ref | Outcome in short |
|---|---|
| 6.1.1(a) | Define capacitance, C = Q/V, and the farad |
| 6.1.1(b) | Describe charging and discharging in terms of electron flow |
| 6.1.1(c) | Combine capacitors in series: 1/C = 1/C₁ + 1/C₂ + ... |
| 6.1.1(d) | Combine capacitors in parallel: C = C₁ + C₂ + ... |
| 6.1.1(e)(i) | Analyse circuits with capacitors, including resistors |
| 6.1.1(e)(ii) | Techniques for investigating series and parallel combinations with ammeters and voltmeters (linked to PAG9) |
| 6.1.2(a) | p.d.-charge graph; energy is the area under it |
| 6.1.2(b) | W = ½QV = ½Q²/C = ½V²C |
| 6.1.2(c) | Uses of capacitors as stores of energy |

## 6.1.1(a) Capacitance and the farad

A capacitor is two conducting plates separated by an insulator (a dielectric). When a p.d. V is applied, one plate holds charge +Q and the other −Q. In these equations Q means the size of the charge on one plate. The capacitor as a whole is neutral.

**Capacitance** is the charge stored per unit p.d. across the capacitor:

C = Q/V

The **farad** (F) is one coulomb per volt, 1 F = 1 C V⁻¹. In SI base units that is A² s⁴ kg⁻¹ m⁻². A farad is huge, so you will meet µF (10⁻⁶ F), nF (10⁻⁹ F) and pF (10⁻¹² F). Convert to farads first.

For a given capacitor Q is directly proportional to V. On a Q-V graph this appears as a straight line from the origin, with gradient C.

**Worked example 1.** A 33 µF capacitor is connected across a 24 V supply. Find the charge on one plate.

```
Q = CV = 33 × 10⁻⁶ × 24 = 7.92 × 10⁻⁴ C
```

The charge is 7.9 × 10⁻⁴ C (0.79 mC) to 2 s.f.

## 6.1.1(b) Charging and discharging: electron flow

No electrons cross the insulating gap. Charge is moved from one plate to the other by the circuit.

**Charging from a cell or supply.**
1. Electrons are pushed from the negative terminal onto the plate connected to it, which becomes negative.
2. At the same moment electrons leave the other plate and move towards the positive terminal. That plate loses electrons and becomes positive by the same amount.
3. The capacitor's p.d. grows as charge builds up and opposes the supply, so the current falls.
4. Flow stops when the p.d. across the capacitor equals the supply e.m.f. (taking the supply as ideal).

The current is the same in the wires on both sides of the capacitor at any instant. Conventional current is drawn towards the positive plate during charging.

**Discharging through a resistor.** The supply is removed and the plates are joined through a resistor. Electrons flow from the negative plate round the circuit to the positive plate, until both plates are neutral and the p.d. is zero. The current is in the opposite direction through the capacitor to the charging current. It falls as the p.d. falls.

In answers, say which plate electrons leave, which they reach, and that they travel through the external circuit.

## 6.1.1(c) Capacitors in series

For C₁, C₂ and C₃ in series:

- The same charge Q flows to each. Between neighbouring capacitors the joined plates are isolated, so their total charge stays zero. Each capacitor therefore holds magnitude Q.
- The p.d.s add: V = V₁ + V₂ + V₃.

Divide by Q and use V = Q/C for each:

V/Q = V₁/Q + V₂/Q + V₃/Q, so **1/C = 1/C₁ + 1/C₂ + 1/C₃**

The total is smaller than the smallest capacitor. With the same Q on each, V = Q/C, so the **smaller capacitor takes the larger p.d.** For two capacitors, C = C₁C₂/(C₁ + C₂).

**Worked example 2.** A 10 µF and a 15 µF capacitor in series are connected across 15 V. Find the total capacitance, the charge, and the p.d. across each.

```
1/C = 1/10 + 1/15 = 3/30 + 2/30 = 5/30   so C = 6.0 µF
Q = CV = 6.0 × 10⁻⁶ × 15 = 9.0 × 10⁻⁵ C
V across 10 µF = Q/C = 9.0 × 10⁻⁵ / 10 × 10⁻⁶ = 9.0 V
V across 15 µF = 9.0 × 10⁻⁵ / 15 × 10⁻⁶ = 6.0 V
```

Check: 9.0 + 6.0 = 15 V.

## 6.1.1(d) Capacitors in parallel

- The p.d. V is the same across each capacitor.
- The charges add: Q = Q₁ + Q₂ + Q₃.

Since Q = CV for each, C V = C₁V + C₂V + C₃V, so **C = C₁ + C₂ + C₃**.

The total is larger than any single capacitor.


**Worked example 3.** A 60 µF capacitor is in parallel with a 30 µF and a 20 µF capacitor that are in series with each other. Find the total.

```
Series pair: 1/C = 1/30 + 1/20 = 2/60 + 3/60 = 5/60   so C = 12 µF
Total = 60 + 12 = 72 µF
```

Reduce each group to one value, working inside out.

## 6.1.1(e)(i) Circuits with capacitors and resistors

Here you analyse a circuit once nothing is changing (the steady state). A fully charged capacitor passes no current, so for a d.c. source it behaves like a break in that branch. This gives three rules.

- **No current flows in the capacitor's branch.** Current in a resistor in series with only a charged capacitor is zero, so there is no p.d. across that resistor.
- **A capacitor in parallel with a resistor** has the same p.d. as that resistor, because parallel components share the p.d.
- **Use the rest of the circuit with the usual rules** (V = IR, resistors in series, potential divider) to find that p.d., then use Q = CV.

**Worked example 4.** A 12 V cell of negligible internal resistance is connected across a 2.2 kΩ resistor in series with a 4.7 kΩ resistor. A 330 µF capacitor is connected across the 4.7 kΩ resistor and is fully charged. Find the charge on the capacitor.

```
Current in the resistors = 12 / (2200 + 4700) = 1.739 × 10⁻³ A
p.d. across 4.7 kΩ = 1.739 × 10⁻³ × 4700 = 8.17 V
Q = CV = 330 × 10⁻⁶ × 8.17 = 2.70 × 10⁻³ C
```

The charge is 2.7 mC. The capacitor does not change the steady current.

**Joining capacitors.** If a charged capacitor is joined in parallel to an uncharged one, charge flows until the p.d.s match. Total charge is conserved, so the final p.d. is total charge divided by total capacitance.

## 6.1.1(e)(ii) Investigating series and parallel combinations

The specification names ammeters and voltmeters. One approach uses a reed switch. It measures C for one capacitor, then for series and parallel combinations.

1. A vibrating reed switch (or a signal-generator-driven switch) of known frequency f connects the capacitor alternately to a supply of known p.d. V and to a microammeter.
2. Each cycle the capacitor is charged to V, then discharged through the meter. The meter shows the mean current I = fQ = fCV.
3. So C = I/(fV). Record I for several values of V; a graph of I against V is a straight line through the origin with gradient fC.
4. Repeat with two capacitors in series, then in parallel, and compare each measured C with the value from the rules above.

A voltmeter across the capacitor confirms V. It needs very high resistance, or it will discharge the capacitor.

**Worked example 5.** With f = 50 Hz and V = 6.0 V, a capacitor gives a mean current of 9.0 µA.

```
C = I / (fV) = 9.0 × 10⁻⁶ / (50 × 6.0) = 3.0 × 10⁻⁸ F = 30 nF
```

Two such capacitors in series should give 15 nF, so at the same f and V the reading should be 4.5 µA. In parallel they give 60 nF and 18 µA.

**Safety and technique.**
- Check the polarity of electrolytic capacitors and never exceed the rated voltage.
- Discharge capacitors before changing the circuit.
- Compare measured and predicted C within the uncertainties of the meters and of f.

## 6.1.2(a) The p.d.-charge graph and energy stored

Plot p.d. V on the vertical axis against charge Q on the horizontal axis. Because V = Q/C, the graph is a straight line from the origin, and its gradient is 1/C.

When a small charge ΔQ is moved onto a capacitor that is already at p.d. V, the work done is V ΔQ. That is the area of a thin strip under the graph. Adding all the strips, **the energy stored is the area under the V-Q graph**.

For charging from zero to Q, the area is a triangle, so W = ½QV.

For charging from Q₁ to Q₂ the area is a trapezium, so W = ½(V₁ + V₂)(Q₂ − Q₁).

## 6.1.2(b) Energy stored

Start with W = ½QV:

- **W = ½QV**
- **W = ½Q²/C** (substitute V = Q/C)
- **W = ½V²C** (substitute Q = CV)

Choose the form that uses the two quantities you know. If V doubles at fixed C, W rises fourfold.

**Worked example 6.** A 2200 µF capacitor is charged to 16 V.

```
W = ½CV² = 0.5 × 2200 × 10⁻⁶ × 16² = 0.2816 J
```

The energy stored is 0.28 J.

**Energy taken from a battery.** When a battery of e.m.f. V charges a capacitor to the same p.d., the battery transfers QV of energy. The capacitor stores only ½QV. The other half is transferred as thermal energy in the resistance of the circuit.

## 6.1.2(c) Uses of capacitors as energy stores

A capacitor can release its energy in a very short time, so the power can be large.

- **Defibrillator.** A capacitor is charged slowly, then discharged through the patient in a short pulse.
- **Camera flash.** A small battery charges a capacitor over several seconds. The flash tube discharges it in a fraction of a second.
- **Back-up supplies.** A capacitor can keep a memory circuit powered through a short interruption.
- **Supercapacitors.** With very large capacitance they can store energy recovered during braking and release it quickly.

For the same mass, a capacitor stores much less energy than a battery. That is why capacitors suit short, high-power pulses rather than long-term supply.

**Worked example 7.** A defibrillator capacitor of 80 µF is charged to 3.0 kV. It delivers its energy in 4.0 ms.

```
W = ½CV² = 0.5 × 80 × 10⁻⁶ × (3.0 × 10³)² = 360 J
Mean power = W / t = 360 / 4.0 × 10⁻³ = 9.0 × 10⁴ W
```

The mean power is about 90 kW.

## Common errors

- Leaving capacitance in µF. Convert to farads, then convert the answer back sensibly.
- Adding reciprocals in parallel, or adding capacitances in series.
- Forgetting to invert after summing 1/C. A series answer above the smallest capacitor is wrong.
- Saying that charge flows through the capacitor. It flows to and from the plates.
- Using the e.m.f. as the p.d. across a capacitor that sits across one resistor.
- Writing W = QV. The factor ½ comes from the p.d. rising during charging.

## Official syllabus

OCR, *Advanced GCE in Physics A (H556)* specification, Version 3.0, March 2026, first assessment 2017, sections 6.1.1 and 6.1.2.
