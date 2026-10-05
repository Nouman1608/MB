---
resourceId: "mb-ap-physcem-11.4-study-guide"
title: "Electric Power: Study Guide (Physics C: E&M 11.4)"
description: "Calculus-based guide to electric power: deriving P = IΔV, the forms I²R and ΔV²/R, predicting bulb brightness, electrical and mechanical energy in motors, and integrating power over time."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.4"]
resourceType: "study-guide"
prerequisites:
  - "Electric potential difference as energy per unit charge (Unit 9)"
  - "Current as the rate of charge flow, I = dq/dt (Topic 11.1)"
  - "Resistance and Ohm's law, ΔV = IR (Topic 11.3)"
  - "Power as the rate of energy transfer, and P = Fv for a constant force"
prerequisiteResources: ["mb-ap-physcem-11.3-study-guide"]
learningObjectives:
  - "Derive P = IΔV from the energy per unit charge and the rate of charge flow"
  - "Use P = I²R and P = ΔV²/R, choosing the form that suits what is held fixed"
  - "Predict and compare the brightness of bulbs from the power each one receives"
  - "Account for the energy supplied to a motor as mechanical power plus energy dissipated as thermal energy"
  - "Find the energy transferred when the power changes with time by integrating P dt"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "g = 9.8 m/s². Resistors and bulbs are ohmic unless stated. Keep unrounded values until the final step"
related: ["mb-ap-physcem-11.4-revision-notes", "mb-ap-physcem-11.4-practice", "mb-ap-physcem-11.4-checklist"]
next: "mb-ap-physcem-11.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "The rate of energy transfer in a circuit element is P = IΔV, measured in watts (1 W = 1 J/s = 1 V·A)."
  - "For a resistor, ΔV = IR gives P = I²R = ΔV²/R."
  - "With the same current (series), more resistance means more power; with the same potential difference (parallel), more resistance means less."
  - "A bulb's brightness increases with the power it receives, so compare powers to compare brightness."
  - "When power changes with time, the energy transferred is E = ∫P dt, the area under a P–t graph."
faqs:
  - question: "Does a bulb with more resistance always glow more brightly?"
    answer: "No. It depends on what is the same for the two bulbs. In series they carry the same current, so P = I²R is larger for the larger resistance. In parallel they have the same potential difference, so P = ΔV²/R is larger for the smaller resistance."
  - question: "Is a kilowatt-hour a unit of power?"
    answer: "No. It is a unit of energy: the energy transferred in one hour at a rate of 1 kW. 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 11.4. The course's energy analysis centres on transfers between electrical and mechanical energy. You should also be aware that resistors dissipate electrical energy as thermal energy; the power formulas below give the rate. You will integrate power over time when it is not constant.

Value used throughout: **g = 9.8 m/s²**. Resistors and bulbs are treated as ohmic (Topic 11.3) unless a question says otherwise.

## Where electric power comes from

From Unit 9, the potential difference ΔV across an element tells you how much electric potential energy each coulomb of charge loses (or gains) as it crosses. So when a small charge dq moves through an element with potential difference ΔV across it, the energy transferred is

dU = ΔV dq

**Power** is the rate of energy transfer. Divide by dt and use I = dq/dt (Topic 11.1):

**P = dU/dt = ΔV (dq/dt) = IΔV**

- The unit is the **watt**: 1 W = 1 J/s. Since 1 V = 1 J/C and 1 A = 1 C/s, 1 V·A = 1 J/s = 1 W.
- P = IΔV works for **any** element: a resistor, a bulb, a motor, a battery being charged.

**Short example.** A 12 V supply drives a current of 2.0 A through a device. The power is P = (2.0 A)(12 V) = 24 W, so the device receives 24 J every second, or 1440 J in one minute.

## Sources and receivers of energy

In a circuit, energy is transferred **into** the circuit at some elements and **out of** it at others.

- A **battery** raises the potential energy of charge passing through it. Conventional current leaves its positive terminal, so charge gains energy inside it. The battery delivers power P = ℰI to the circuit (for an ideal battery with emf ℰ).
- A **resistor** or **bulb** lowers the potential energy of charge passing through it. Charge moves from higher to lower potential, and the energy is converted to thermal energy (and light, for a bulb).
- A **motor** converts electrical energy to mechanical energy (plus some thermal energy). A **generator** does the reverse.

Energy is conserved, so in any circuit the total power delivered by the sources equals the total power received by all the other elements. This is a useful check on every calculation.

## Power in a resistor: three forms

For a resistor, ΔV = IR. Substitute it into P = IΔV:

**P = IΔV = I²R = ΔV²/R**

All three give the same answer for the same resistor. Choose the one that uses what you know, or what is **the same** between two cases you are comparing:

| What is the same | Best form | So larger R gives |
|---|---|---|
| Current I (elements in series, in one loop) | P = I²R | **more** power |
| Potential difference ΔV (elements connected across the same two points) | P = ΔV²/R | **less** power |

This is why "does more resistance mean more power?" has no single answer. You must ask what is held fixed.

**Factors of change.** For a fixed resistor, P ∝ I² and P ∝ ΔV². Doubling the potential difference across a resistor doubles the current too, so the power becomes four times larger.

## Predicting the brightness of bulbs

The brightness of a light bulb increases with the power it receives. So to compare bulbs, **compare their powers**. You do not need to know how much of the power becomes light, only that more power means a brighter bulb.

<figure>
<svg viewBox="0 0 560 270" role="img" aria-labelledby="bulbs-title bulbs-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="bulbs-title">Two bulbs connected in parallel and in series</title>
<desc id="bulbs-desc">Two circuit diagrams side by side, each with a 6.0 volt battery whose positive terminal is at the top. Left, labelled (a) parallel: bulb X, 6.0 ohms, and bulb Y, 12 ohms, are on two separate vertical branches, each connected between the top wire and the bottom wire, so each has the battery's full potential difference across it. Right, labelled (b) series: bulb X and bulb Y sit one after the other along the top wire of a single loop, so the same current passes through both.</desc>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="50" y1="50" x2="50" y2="124"/><line x1="32" y1="124" x2="68" y2="124" stroke-width="2.5"/><line x1="41" y1="136" x2="59" y2="136" stroke-width="5"/><line x1="50" y1="136" x2="50" y2="210"/>
<line x1="50" y1="50" x2="240" y2="50"/><line x1="50" y1="210" x2="240" y2="210"/>
<line x1="150" y1="50" x2="150" y2="116"/>
<g transform="rotate(90 150 130)"><circle cx="150" cy="130" r="14"/><path d="M136 130 L141 130 C141 117 159 117 159 130 L164 130"/></g>
<line x1="150" y1="144" x2="150" y2="210"/>
<line x1="240" y1="50" x2="240" y2="116"/>
<g transform="rotate(90 240 130)"><circle cx="240" cy="130" r="14"/><path d="M226 130 L231 130 C231 117 249 117 249 130 L254 130"/></g>
<line x1="240" y1="144" x2="240" y2="210"/>
<line x1="320" y1="50" x2="320" y2="124"/><line x1="302" y1="124" x2="338" y2="124" stroke-width="2.5"/><line x1="311" y1="136" x2="329" y2="136" stroke-width="5"/><line x1="320" y1="136" x2="320" y2="210"/>
<line x1="320" y1="50" x2="386" y2="50"/><circle cx="400" cy="50" r="14"/><path d="M386 50 L391 50 C391 37 409 37 409 50 L414 50"/>
<line x1="414" y1="50" x2="466" y2="50"/><circle cx="480" cy="50" r="14"/><path d="M466 50 L471 50 C471 37 489 37 489 50 L494 50"/>
<line x1="494" y1="50" x2="530" y2="50"/><line x1="530" y1="50" x2="530" y2="210"/><line x1="530" y1="210" x2="320" y2="210"/>
</g>
<circle cx="150" cy="50" r="4" fill="#1d2b44"/><circle cx="150" cy="210" r="4" fill="#1d2b44"/>
<g font-size="14" fill="#1d2b44" font-weight="bold" text-anchor="middle">
<text x="76" y="120">+</text><text x="346" y="120">+</text>
<text x="176" y="128">X</text><text x="266" y="128">Y</text>
<text x="400" y="26">X</text><text x="480" y="26">Y</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="22" y="162">6.0 V</text><text x="362" y="175">6.0 V</text>
<text x="180" y="146">6.0 Ω</text><text x="268" y="146">12 Ω</text>
<text x="400" y="84">6.0 Ω</text><text x="480" y="84">12 Ω</text>
<text x="145" y="245">(a) parallel: same ΔV for X and Y</text>
<text x="425" y="245">(b) series: same I in X and Y</text>
</g>
</svg>
<figcaption>Figure 1. The two arrangements in Worked example 1. In (a) each bulb is connected directly across the battery. In (b) the bulbs are in one loop, so they carry the same current.</figcaption>
</figure>

## Worked example 1: which bulb is brighter?

**Question.** Bulb X has resistance 6.0 Ω and bulb Y has resistance 12 Ω. They are connected to an ideal 6.0 V battery, first in parallel and then in series (Figure 1). In each case, find the power in each bulb, say which is brighter, and check that energy is conserved.

**(a) Parallel.** Each bulb is connected across the battery, so each has ΔV = 6.0 V across it. Use P = ΔV²/R:

- P_X = (6.0 V)² ÷ 6.0 Ω = **6.0 W**
- P_Y = (6.0 V)² ÷ 12 Ω = **3.0 W**

**X is brighter**: same ΔV, so the smaller resistance gets more power. Check: the currents are 1.0 A and 0.50 A, so the battery supplies 1.5 A and delivers (6.0 V)(1.5 A) = 9.0 W = 6.0 W + 3.0 W.

**(b) Series.** One loop, so the same current I is in both bulbs. The potential differences across the bulbs add up to the battery's 6.0 V: I(6.0 Ω) + I(12 Ω) = 6.0 V, so I = 0.333 A. (Topic 11.5 develops this method.) Use P = I²R:

- P_X = (0.333 A)²(6.0 Ω) = **0.67 W**
- P_Y = (0.333 A)²(12 Ω) = **1.3 W**

**Y is brighter**: same I, so the larger resistance gets more power. Check: the battery delivers (6.0 V)(0.333 A) = 2.0 W = 0.67 W + 1.33 W.

**Interpretation.** The **same two bulbs** swap order of brightness when the arrangement changes. Both bulbs are dimmer in series than in parallel, because each gets only part of the battery's potential difference.

## Electrical and mechanical energy

A motor takes in electrical energy at the rate IΔV and does mechanical work. It is never perfect: some energy is dissipated as thermal energy, mostly in the resistance of its coils. Energy conservation gives

**IΔV = P_mechanical + P_thermal**

For a motor lifting a load at constant speed, the mechanical power is the rate of gain of gravitational potential energy: P_mechanical = Fv = mgv. A generator works the other way: mechanical power goes in and electrical power IΔV comes out, again with some thermal loss.

<figure>
<svg viewBox="0 0 560 250" role="img" aria-labelledby="flow-title flow-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="flow-title">Power bar chart for the winch motor</title>
<desc id="flow-desc">Two horizontal bars on the same power scale from 0 to 60 watts. Top bar, labelled power in: one plain block, electrical, 60 watts. Bottom bar, labelled power out: a plain block for mechanical power, 47 watts, followed by a diagonally hatched block for thermal power, 13 watts. The two bars have the same total length.</desc>
<defs><pattern id="flow-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="2"/></pattern></defs>
<rect x="110" y="40" width="420" height="44" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="110" y="120" width="329.3" height="44" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="439.3" y="120" width="90.7" height="44" fill="url(#flow-hatch)" stroke="#1d2b44" stroke-width="2"/>
<g font-size="13" fill="#1d2b44">
<text x="100" y="67" text-anchor="end">Power in</text>
<text x="100" y="147" text-anchor="end">Power out</text>
<text x="320" y="67" text-anchor="middle">electrical, IΔV = 60 W</text>
<text x="275" y="147" text-anchor="middle">mechanical, mgv = 47 W</text>
<text x="484.6" y="185" text-anchor="middle">thermal, 13 W (hatched)</text>
</g>
<line x1="110" y1="205" x2="530" y2="205" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="110" y1="205" x2="110" y2="211" stroke="#1d2b44"/><text x="110" y="225">0</text>
<line x1="250" y1="205" x2="250" y2="211" stroke="#1d2b44"/><text x="250" y="225">20</text>
<line x1="390" y1="205" x2="390" y2="211" stroke="#1d2b44"/><text x="390" y="225">40</text>
<line x1="530" y1="205" x2="530" y2="211" stroke="#1d2b44"/><text x="530" y="225">60</text>
<text x="320" y="245">Power (W)</text>
</g>
</svg>
<figcaption>Figure 2. Power bar chart for the winch in Worked example 2. The bars have equal length because energy is conserved: the electrical power in equals the mechanical power out plus the rate of thermal dissipation.</figcaption>
</figure>

## Worked example 2: a winch motor

**Question.** A small electric winch runs from a 24 V supply and draws a steady current of 2.5 A. It lifts a 4.0 kg crate vertically at a constant 1.2 m/s. (a) Find the electrical power in and the mechanical power out. (b) Find the rate at which energy is dissipated as thermal energy, and the efficiency. (c) If all the dissipation is in the motor's coil, find the coil's resistance. (d) Find the energy supplied while the crate rises 3.0 m.

1. (a) P_in = IΔV = (2.5 A)(24 V) = **60 W**. At constant speed the cable tension equals mg, so P_mech = mgv = (4.0 kg)(9.8 m/s²)(1.2 m/s) = **47 W** (47.04 W).
2. (b) P_thermal = 60 − 47.04 = **13 W** (12.96 W). Efficiency = 47.04 ÷ 60 = 0.784, about **78%**.
3. (c) The coil carries the full 2.5 A, so I²r = 12.96 W gives r = 12.96 ÷ (2.5)² = **2.1 Ω**.
4. (d) Time to rise 3.0 m at 1.2 m/s: 2.5 s. Electrical energy in = 60 W × 2.5 s = **150 J**. The crate gains mgh = (4.0)(9.8)(3.0) = 118 J; the other 32 J becomes thermal energy.

**Check.** Notice that ΔV/I = 24 ÷ 2.5 = 9.6 Ω is **not** the coil's resistance. A running motor is not a simple resistor: most of the supply's potential difference drives the mechanical output. Only the thermal part is given by I²r. Figure 2 shows the power balance.

## Power that changes with time

If the current or potential difference changes, so does the power. Since P = dU/dt, the energy transferred between t₁ and t₂ is

**E = ∫ P dt**

This is the area under a graph of P against t. Do not multiply "average current" or "average potential difference" by time: power depends on the **square** of I or ΔV, so averaging first gives the wrong answer.

## Worked example 3: a ramped supply

**Question.** The potential difference across an 8.0 Ω resistor is raised steadily from 0 to 16 V over 10 s, so ΔV = (1.6 V/s)t. (a) Write P(t). (b) Find the energy dissipated in the 10 s. (c) Find the average power, and compare with the power at the end. (d) Explain why using the average potential difference, 8.0 V, gives the wrong energy.

**(a)** P = ΔV²/R = (1.6t)² ÷ 8.0 = **0.32t² W** (t in seconds). At t = 10 s, P = 32 W.

**(b)** E = ∫₀¹⁰ 0.32t² dt = 0.32 [t³/3]₀¹⁰ = 0.32 × 1000 ÷ 3 = **107 J** (106.7 J).

**(c)** Average power = 106.7 J ÷ 10 s = **10.7 W**, one third of the final 32 W. Most of the energy is dissipated near the end, when ΔV is largest (Figure 3).

**(d)** At 8.0 V the power would be (8.0)² ÷ 8.0 = 8.0 W, giving 80 J in 10 s. This is too small because P ∝ ΔV²: the larger potential differences late in the ramp count for much more than the smaller ones early on.

<figure>
<svg viewBox="0 0 560 360" role="img" aria-labelledby="pt-title pt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pt-title">Power against time for the ramped supply</title>
<desc id="pt-desc">Horizontal axis: time in seconds from 0 to 10. Vertical axis: power in watts from 0 to 35. A solid curve rises from zero as a parabola, slowly at first and then steeply, reaching 32 watts at 10 seconds. A dashed horizontal line at 10.7 watts, labelled average power, runs across the graph. The area under the curve is labelled energy equals 107 joules.</desc>
<defs><marker id="pt-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="70" y1="300" x2="545" y2="300" stroke="#1d2b44" stroke-width="2" marker-end="url(#pt-arr)"/>
<line x1="70" y1="300" x2="70" y2="45" stroke="#1d2b44" stroke-width="2" marker-end="url(#pt-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="160" y1="300" x2="160" y2="306" stroke="#1d2b44"/><text x="160" y="320">2</text>
<line x1="250" y1="300" x2="250" y2="306" stroke="#1d2b44"/><text x="250" y="320">4</text>
<line x1="340" y1="300" x2="340" y2="306" stroke="#1d2b44"/><text x="340" y="320">6</text>
<line x1="430" y1="300" x2="430" y2="306" stroke="#1d2b44"/><text x="430" y="320">8</text>
<line x1="520" y1="300" x2="520" y2="306" stroke="#1d2b44"/><text x="520" y="320">10</text>
<text x="300" y="350" font-size="13">Time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="64" y1="231.4" x2="70" y2="231.4" stroke="#1d2b44"/><text x="60" y="235">10</text>
<line x1="64" y1="162.9" x2="70" y2="162.9" stroke="#1d2b44"/><text x="60" y="167">20</text>
<line x1="64" y1="94.3" x2="70" y2="94.3" stroke="#1d2b44"/><text x="60" y="98">30</text>
</g>
<text x="18" y="180" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 18 180)">Power, P (W)</text>
<polyline points="70.0,300.0 115.0,297.8 160.0,291.2 205.0,280.3 250.0,264.9 295.0,245.1 340.0,221.0 385.0,192.5 430.0,159.6 475.0,122.3 520.0,80.6" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="70" y1="226.9" x2="520" y2="226.9" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 5"/>
<g font-size="12" fill="#1d2b44">
<text x="90" y="218">average power = 10.7 W (dashed)</text>
<text x="380" y="270">area under curve = 107 J</text>
<text x="440" y="76">32 W</text>
</g>
</svg>
<figcaption>Figure 3. P(t) = 0.32t² for Worked example 3. The area under the curve is the energy dissipated, 107 J. The dashed line is the average power: a rectangle of that height over 10 s has the same area.</figcaption>
</figure>

**Check.** Units: W × s = J. The energy, 107 J, lies between 0 and the 320 J that 32 W would give for the full 10 s.

## A note on units of energy

Electricity suppliers measure energy in **kilowatt-hours**. 1 kWh is the energy transferred at 1 kW for 1 hour: 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J. It is a unit of energy, not power.

## Common misconceptions

- **"Bulbs use up current."** Charge is conserved; the same current leaves a bulb as enters it. Bulbs transfer **energy**.
- **"More resistance always means more power."** Only when the current is the same. At the same potential difference, less resistance means more power.
- **"The bulb nearer the battery is brighter."** In a single loop, every element carries the same current; position does not matter.
- **Using P = I²R for a motor's total power.** I²r gives only the thermal part. The input is IΔV.
- **Averaging I or ΔV before squaring.** When power changes with time, integrate P dt.
- **Treating kWh as power.** It is energy.
- **"Doubling ΔV doubles the power."** For a fixed resistor, it quadruples it, because the current doubles as well.

## Where this leads

Next, [Topic 11.5, Compound Direct Current Circuits](/advanced-course-resources/physics-c-electricity-and-magnetism/11-5-compound-direct-current-circuits-study-guide/), shows how to find currents and potential differences in series and parallel combinations, so you can predict brightness in larger circuits. Go back to [Topic 11.3, Resistance, Resistivity and Ohm's Law](/advanced-course-resources/physics-c-electricity-and-magnetism/11-3-resistance-resistivity-ohms-law-study-guide/) if ΔV = IR feels shaky. Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/11-4-electric-power-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/11-4-electric-power-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-4-electric-power-checklist/).
