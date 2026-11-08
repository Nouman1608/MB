---
title: "OCR A Level Physics A: Capacitance, capacitor combinations and stored energy (H556) -- Revision Notes"
seoTitle: "OCR A Level Physics Capacitance Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on capacitance, series and parallel capacitors, simple capacitor circuits and stored energy for OCR A Level Physics A (H556)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

Condensed recall for OCR A Level Physics A (H556), specification Version 3.0 (March 2026), sections 6.1.1(a)-(e) and 6.1.2(a)-(c). Fuller explanations and longer examples are in the [study guide](/resources/ocr-a-level-physics-capacitance-capacitor-combinations-and-stored-energy/). Test yourself with the [practice questions](/resources/ocr-a-level-physics-capacitance-capacitor-combinations-and-stored-energy-practice/), tick topics off on the [printable checklist](/checklists/ocr/a-level/physics/), find the course on the [OCR A Level Physics hub](/boards/ocr/a-level/physics/), and try the [free diagnostics](/diagnostics/).

## Key equations

| Quantity | Equation | Notes |
|---|---|---|
| Capacitance | C = Q/V | Q is the charge on one plate; unit farad, F = C V⁻¹ |
| Series | 1/C = 1/C₁ + 1/C₂ + ... | Same Q on each; p.d.s add; total below the smallest |
| Parallel | C = C₁ + C₂ + ... | Same V across each; charges add; total above the largest |
| Energy | W = ½QV | Area under the V-Q graph |
| Energy | W = ½Q²/C | Use when Q and C are known |
| Energy | W = ½V²C | Use when V and C are known |

Prefixes: µ = 10⁻⁶, n = 10⁻⁹, p = 10⁻¹². Convert to farads before substituting.

## 6.1.1(a) Capacitance

- C = Q/V: charge stored per unit p.d.
- 1 F = 1 C V⁻¹.
- Q is proportional to V for a given capacitor. The Q-V graph is a straight line from the origin whose gradient is C.
- The capacitor as a whole is neutral. +Q on one plate, −Q on the other.

**Reminder.** 220 µF holding 0.68 mC:

```
V = Q/C = 0.68 × 10⁻³ / 220 × 10⁻⁶ = 3.1 V
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--01-charge-flow-in-circuit.webp" width="900" height="1140" alt="Two circuits show a capacitor charging from a cell and discharging through a resistor. Teal arrows show electron flow round the circuit and gold arrows the conventional current, opposite in direction. No electrons cross the gap: charge is moved from one plate to the other by the circuit. The p.d. rises to the cell p.d. while charging and falls to zero while discharging." loading="lazy">
  <figcaption>Electrons move round the circuit, never across the gap, and the current reverses on discharge.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--04-dielectric-polar-molecules.webp" width="900" height="1090" alt="Polar molecules between capacitor plates point randomly with no field. When the plates are charged they line up, leaving layers of negative ends facing the positive plate and positive ends facing the negative plate. These layers reduce the net field, so the p.d. is smaller for the same charge and C = Q/V rises. For the lesson example, 916 pF with the dielectric against 398 pF in air." loading="lazy">
  <figcaption>Aligned polar molecules reduce the field, so the same charge gives a smaller p.d. and a larger capacitance.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--05-isolated-sphere-capacitance.webp" width="900" height="980" alt="Two isolated spheres with radii 0.10 m and 0.20 m are shown at the same potential, 1000 V. C = 4 pi epsilon0 r depends only on the radius, so the larger sphere has capacitance 22.2 pF against 11.1 pF and holds twice the charge, 22.2 nC against 11.1 nC." loading="lazy">
  <figcaption>The capacitance of an isolated sphere is proportional to its radius.</figcaption>
</figure>


## 6.1.1(b) Electron flow

**Charging from a supply**
- Electrons move from the supply's negative terminal onto the connected plate.
- Electrons leave the other plate towards the positive terminal.
- No charge crosses the gap.
- Current falls as the capacitor's p.d. rises. It stops when that p.d. equals the supply e.m.f.

**Discharging through a resistor**
- Electrons flow from the negative plate round the external circuit to the positive plate.
- This is the reverse direction to the charging current.
- Current and p.d. fall to zero as the plates become neutral.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--06-rc-charge-discharge-curves.webp" width="900" height="1130" alt="Against time in units of RC, charging makes Q and the capacitor p.d. rise towards their final values (63 percent at one RC) while the current and resistor p.d. fall from their maximum. V_R + V_C always equals V0. Discharging makes Q, V and I all fall with the same exponential shape (37 percent at one RC)." loading="lazy">
  <figcaption>Charge and p.d. rise or fall, but the current always decays exponentially.</figcaption>
</figure>


## 6.1.1(c) and (d) Combinations

**Series**
- Charge: the same on every capacitor.
- P.d.: V = V₁ + V₂ + ...
- Smaller capacitance takes the larger share of the p.d.
- Two capacitors: C = C₁C₂/(C₁ + C₂).

**Parallel**
- P.d.: the same across every capacitor.
- Charge: Q = Q₁ + Q₂ + ...
- Add the capacitances.

**Method for a mixed network**
1. Find the innermost series or parallel group.
2. Replace it with one equivalent capacitor.
3. Repeat until one capacitor remains.
4. Use Q = CV with the supply p.d. to find the total charge.
5. Work back outwards, using "same charge in series" and "same p.d. in parallel".

**Reminders.**

```
Series 2.2, 6.8, 1.0 µF:   1/C = 0.4545 + 0.1471 + 1.0 = 1.6016    C = 0.62 µF
Parallel 2.2, 6.8, 1.0 µF: C = 10 µF
3.0 µF and 6.0 µF in series across 12 V: C = 2.0 µF, Q = 24 µC,
   V(3.0 µF) = 8.0 V, V(6.0 µF) = 4.0 V
```

## 6.1.1(e)(i) Circuits with resistors

For a d.c. circuit in the steady state:
- A fully charged capacitor carries no current, so its branch behaves like a break.
- A resistor in series with a charged capacitor has no p.d. across it.
- A capacitor in parallel with a resistor has the same p.d. as that resistor.
- Find that p.d. with V = IR or a potential divider, then use Q = CV.

**Joining capacitors.** Charged capacitor joined in parallel to an uncharged one: total Q is conserved, final V = total Q / total C. Some energy is transferred to the surroundings as thermal energy and radiation, so the total stored falls.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--07-time-constant-tau.webp" width="900" height="930" alt="A discharge curve plotted against multiples of the time constant falls to 36.8, 13.5 and 5.0 percent at 1, 2 and 3 tau. The tangent at t = 0 meets the time axis at t = RC. For 470 microfarad and 33 kilohm tau is 15.5 s, and 37 percent is still left after one tau." loading="lazy">
  <figcaption>After one time constant a capacitor has not fully discharged: 37% remains.</figcaption>
</figure>


## 6.1.1(e)(ii) Practical investigation

**Reed-switch method**
1. A reed switch of frequency f alternately connects the capacitor to a supply of p.d. V and to a microammeter.
2. The mean current is I = fQ = fCV.
3. So C = I/(fV). A graph of I against V has gradient fC.
4. Repeat with two capacitors in series, then in parallel. Compare with the combination rules.

**Points to state**
- A voltmeter across the capacitor must have a very high resistance.
- Check the polarity of electrolytic capacitors and stay below the rated voltage.
- Discharge capacitors before rewiring.
- Compare measured and predicted C within the uncertainties.

## 6.1.2(a) The V-Q graph

- Plot p.d. (vertical) against charge (horizontal). The line starts at the origin and its gradient is 1/C.
- Work done to add charge ΔQ at p.d. V is V ΔQ, a thin strip of area.
- **Energy stored = area under the graph.**
- From zero: triangle, ½QV.
- Between Q₁ and Q₂: trapezium, ½(V₁ + V₂)(Q₂ − Q₁).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--09-ln-graph-find-rc.webp" width="900" height="1230" alt="Potential difference readings for a discharging capacitor lie on a curve. Plotting ln V against t gives a straight line of gradient minus 0.0500 per second, so RC = 20.0 s. With R = 100 kilohm, C = 200 microfarad. For charging, plot ln(V0 - V) instead." loading="lazy">
  <figcaption>A ln V against t graph is a straight line whose gradient is minus 1/RC.</figcaption>
</figure>


## 6.1.2(b) Energy stored

Three forms: W = ½QV, W = ½Q²/C, W = ½V²C.

```
Q = 1.5 mC, C = 250 µF:  W = Q²/2C = (1.5 × 10⁻³)² / (2 × 250 × 10⁻⁶) = 4.5 × 10⁻³ J
W = 0.45 J at 30 V:      C = 2W/V² = 2 × 0.45 / 30² = 1.0 × 10⁻³ F
```

- At fixed C, doubling V gives four times the energy.
- At fixed Q, W = ½Q²/C, so halving C doubles the energy.
- A battery of e.m.f. V that charges a capacitor to V supplies QV. Half is stored and half is transferred as thermal energy in the circuit.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--02-energy-stored-vq-graph.webp" width="900" height="1010" alt="A straight V-Q graph from the origin has gradient 1/C. A thin strip is the work V delta Q and the triangle under the line is the energy stored, 1/2 QV = 1/2 CV^2 = Q^2/2C. For 470 microfarad at 12 V the energy is 33.8 mJ. OCR only: charging from a 12 V battery takes QV = 67.7 mJ, half stored and half lost as heat." loading="lazy">
  <figcaption>The energy stored is the area under the V-Q graph, half of QV.</figcaption>
</figure>


## 6.1.2(c) Uses as energy stores

- Defibrillator: slow charge, short high-power pulse through the patient.
- Camera flash: charged over seconds, discharged in a fraction of a second.
- Back-up supply for memory circuits during a short interruption.
- Supercapacitors: store energy from braking and release it quickly.
- Compared with a battery of the same mass a capacitor stores far less energy, but it can release it much faster.

## Must-know distinctions

- **Series versus parallel.** Series: same charge, p.d.s add, reciprocals add. Parallel: same p.d., charges add, capacitances add.
- **Charge stored versus charge flowing.** The capacitor holds +Q and −Q, so its net charge is zero. The charge that flows is Q.
- **Energy stored versus energy supplied.** Stored: ½QV. Supplied by a battery: QV.
- **Which equation for W.** Choose the one that uses your two known quantities.

## Quick self-test

1. State the definition of capacitance.
2. A 1.2 mF capacitor is charged to 5.0 V. What charge is on each plate?
3. Find the total capacitance of 3.0 µF and 6.0 µF in parallel, then in series.
4. Two capacitors are in series. Which takes the larger p.d., the larger or the smaller?
5. In terms of electrons, describe what happens at the plates when a capacitor is charged by a cell.
6. A capacitor stores 4.5 mJ when carrying 1.5 mC. What is its capacitance?
7. What does the area under a V-Q graph represent?
8. A fully charged capacitor is in series with a 10 kΩ resistor and a 6.0 V cell. What is the p.d. across the resistor?
9. A battery charges a capacitor to 9.0 V and transfers 0.12 J in total. How much energy is stored?
10. Why is a capacitor better than a battery for a camera flash?

### Answers

1. Charge stored per unit p.d. across the capacitor, C = Q/V.
2. Q = CV = 1.2 × 10⁻³ × 5.0 = **6.0 × 10⁻³ C** (6.0 mC).
3. Parallel: **9.0 µF**. Series: 1/C = 1/3.0 + 1/6.0 = 1/2.0, so **2.0 µF**.
4. The **smaller** capacitor, because V = Q/C with the same Q.
5. Electrons flow onto the plate joined to the negative terminal and off the other plate towards the positive terminal. No electrons cross the gap.
6. C = Q²/2W = (1.5 × 10⁻³)² / (2 × 4.5 × 10⁻³) = **2.5 × 10⁻⁴ F** (250 µF).
7. The energy stored in the capacitor.
8. **Zero.** No current flows in the series branch when the capacitor is fully charged, so V = IR gives 0 V.
9. Half of 0.12 J: **0.060 J**.
10. It can release its stored energy in a very short time, giving a high power pulse.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--03-series-parallel-capacitors.webp" width="900" height="1100" alt="The same two capacitors, 10 and 15 microfarad, are connected across 15 V. In series each holds 90 microcoulombs and the p.d.s (9.0 V and 6.0 V) add, giving 6.0 microfarad. In parallel each has 15 V and the charges (150 and 225 microcoulombs) add, giving 25 microfarad." loading="lazy">
  <figcaption>Series: same charge, p.d.s add, smaller C. Parallel: same p.d., charges add, larger C.</figcaption>
</figure>


## Where marks are usually lost

- Leaving capacitance in µF or mF when substituting.
- Adding capacitances in series, or adding reciprocals in parallel.
- Stopping at 1/C and giving the reciprocal as the answer.
- Saying that electrons flow through the capacitor or across the dielectric.
- Using the cell e.m.f. as the p.d. across a capacitor that sits across only one resistor.
- Using W = QV for the energy stored.
- Dropping the square when using W = ½V²C or W = ½Q²/C.
- Giving the series total as larger than the smallest capacitor and not noticing.
- Describing a practical method without saying what is measured and how C is calculated.

## Frequently asked questions

**How do you combine capacitors in series and parallel?**
In series the charge is the same, the p.d.s add and the reciprocals of the capacitances add: 1/C = 1/C₁ + 1/C₂. In parallel the p.d. is the same, the charges add and the capacitances add: C = C₁ + C₂.

**How can I check a series capacitor answer?**
The total capacitance of capacitors in series is always less than the smallest single capacitance. If your answer is larger, you have probably forgotten to invert 1/C.

**What does the gradient of a Q-V graph show?**
For a given capacitor, the Q-V graph is a straight line through the origin whose gradient is the capacitance C. The area under a V-Q graph is the energy stored.

**What are the equations for energy stored in a capacitor?**
W = ½QV = ½CV² = ½Q²/C. Choose the form that uses the two quantities you know, and do not drop the square.

## Official syllabus

OCR, *Advanced GCE in Physics A (H556)* specification, Version 3.0, March 2026, first assessment 2017, sections 6.1.1 and 6.1.2.
