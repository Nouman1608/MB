---
title: "Edexcel IGCSE Physics: Electricity — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["igcse"]
topic: "Electricity"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4PH1"]
syllabusSeries: "Issue 4"
order: 2.1
syllabusTopics:
  - qualification: "igcse"
    topic: "electricity"
    subtopic: "units-electricity"
  - qualification: "igcse"
    topic: "electricity"
    subtopic: "mains-electricity"
  - qualification: "igcse"
    topic: "electricity"
    subtopic: "energy-and-voltage-in-circuits"
  - qualification: "igcse"
    topic: "electricity"
    subtopic: "electric-charge"
description: "Condensed recall notes on mains safety, series and parallel circuits, resistance and electrostatic charge for Edexcel International GCSE Physics 4PH1."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
reviewedDate: 2026-09-29
publishedDate: 2026-09-06
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Electricity study guide](/resources/edexcel-igcse-physics-electricity/).

## Mains electricity and safety

Mains supply is **alternating current (a.c.)**, reversing direction periodically; cells and batteries supply **direct current (d.c.)**, which flows one way only. Insulation, double insulation, earthing, fuses and circuit breakers protect users and devices.

```
P = I V              E = I V t
```

Use `P = IV` to choose the correct fuse rating for an appliance — the fuse must exceed normal operating current but blow before wiring overheats.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-electricity--01-ac-vs-dc.webp" width="900" height="950" alt="Two graphs of voltage against time. Top: d.c. is a flat line at a constant positive voltage, so current flows one way. Bottom: a.c. is a sine wave that goes above and below zero, so current keeps reversing. Shapes are illustrative." loading="lazy">
  <figcaption>a.c. mains reverses direction; a cell or battery gives one-direction d.c.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-electricity--02-fuse-selection.webp" width="900" height="975" alt="A circuit with mains, a fuse and a 920 W heater at 230 V. I = P/V = 4.0 A. On a 0-14 A number line, 3, 5 and 13 A fuses are marked; the next rating above 4.0 A, the 5 A fuse, is chosen." loading="lazy">
  <figcaption>Use I = P/V, then choose the fuse rating just above the current.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-electricity--08-double-insulation-breaker.webp" width="900" height="1050" alt="A double-insulated appliance has two insulating layers and no earth wire, with its square-in-a-square symbol. A circuit breaker has a closed switch normally and springs open when a large current makes its coil pull the lever." loading="lazy">
  <figcaption>Double insulation needs no earth wire; a circuit breaker opens when current is too large.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-electricity--12-resistor-heating.webp" width="900" height="950" alt="Electrons drifting through a wire collide with its ions, the ions vibrate more and the wire heats, so electrical energy becomes thermal energy as in kettles and heaters." loading="lazy">
  <figcaption>A current heats a resistor because electrons collide with its ions.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-physics-energy-resources-trends-in-use-and-mains-electricity--11-live-to-earth-fault.webp" width="900" height="950" alt="A loose live wire at about 230 V touches the earthed metal case of a toaster. A large current flows through the case and the earth wire to earth rather than through the user. For example 230 V across 46 ohms gives 5 A, and more if the resistance is lower." loading="lazy">
  <figcaption>A live-to-earth connection gives a large current in the earth wire, protecting the user.</figcaption>
</figure>


## Series and parallel circuits

**Series:** current is the same everywhere; voltage is shared between components.
**Parallel:** voltage is the same across every branch; current divides between branches.

Domestic lighting is wired in parallel so one bulb failing does not switch off the others, and so each appliance gets the full mains voltage.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-electricity--10-series-circuit-calc.webp" width="900" height="1090" alt="A 12 V supply drives 1.0 A through 4 ohm and 8 ohm resistors in series. The voltages are 4 V and 8 V, adding to 12 V. Example numbers." loading="lazy">
  <figcaption>Series: the same current everywhere and the supply voltage shared between components.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-physics-0625-electricity-and-magnetism--03-series-parallel.webp" width="900" height="870" alt="Two circuits with a 6.0 V cell and 20 and 40 ohm resistors. In series, 0.10 A flows everywhere and the p.d.s are 2.0 V and 4.0 V, adding to 6.0 V. In parallel each branch has 6.0 V; branch currents 0.30 A and 0.15 A add to 0.45 A." loading="lazy">
  <figcaption>In series the current is shared by one path; in parallel the branches share the current and each gets the full p.d.</figcaption>
</figure>


## Current, voltage, resistance

```
Q = I t              V = I R              E = Q V
```

A volt is a joule per coulomb (1 V = 1 J/C). A lamp lighting or an LED glowing is a simple qualitative check that current is flowing, before taking a meter reading.

**Worked example.** A 6.0 V battery drives 0.50 A through a resistor. `R = V/I = 6.0/0.50 = 12 Ω`.

**Component behaviour on a current–voltage graph:**
- Resistor (constant temp): straight line through the origin (proportional).
- Filament lamp: curves as resistance rises with temperature.
- Diode: conducts one way only; almost no current in reverse.
- **LDR:** resistance **falls** as light **increases**.
- **Thermistor:** resistance **falls** as temperature **increases**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-electricity--03-ldr-thermistor.webp" width="900" height="1000" alt="Two graphs of resistance against light level (LDR) and against temperature (thermistor). Both curves fall as the quantity increases. Shapes are illustrative." loading="lazy">
  <figcaption>Both an LDR and a thermistor lose resistance as light or temperature rises.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-electricity--09-iv-q-e-chain.webp" width="900" height="1040" alt="A 6.0 V battery drives 0.50 A through a resistor. V = IR gives 12 ohm, Q = It gives 30 C in an example 60 s, and E = QV and E = IVt both give 180 J." loading="lazy">
  <figcaption>One circuit worked through V = IR, Q = It, E = QV and E = IVt.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-physics-0625-electricity-and-magnetism--04-iv-graphs.webp" width="900" height="1192" alt="Three I-V graphs: a fixed resistor gives a straight line through the origin; a filament lamp gives a curve that gets less steep because resistance rises; a diode carries no current in reverse and rises steeply forward after about 0.6 V." loading="lazy">
  <figcaption>The shape of each I-V graph tells you how the resistance behaves.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-physics-0625-electricity-and-magnetism--02-circuit-symbols.webp" width="900" height="986" alt="Fourteen standard circuit symbols with names: cell, battery, open switch, fixed resistor, variable resistor, lamp, ammeter, voltmeter, fuse, thermistor, LDR, motor, and (Extended) diode and LED." loading="lazy">
  <figcaption>The standard symbols to draw and recognise; diode and LED are Extended only.</figcaption>
</figure>


## Electric charge (Physics only)

Conductors (metals) allow charge to flow; insulators (plastics) do not. Rubbing two insulators together transfers electrons: the surface that **loses** electrons becomes **positive**; the one that **gains** electrons becomes **negative**. Like charges repel; unlike charges attract. Applications: photocopiers, inkjet printers. Hazards: sparks during aircraft/tanker fuelling — hence static-dissipation design in fuelling equipment.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-electricity--04-charging-by-friction.webp" width="900" height="980" alt="A cloth and a rod each with 6 positive and 6 negative charges, neutral. After rubbing 3 electrons move to the rod: cloth net +3, rod net -3, total still zero." loading="lazy">
  <figcaption>Rubbing moves electrons; the one that loses them is positive, the one that gains them is negative.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-electricity--11-charge-forces.webp" width="900" height="950" alt="Two positive charges and two negative charges are pushed apart; a positive and a negative charge are pulled together. Forces are equal and opposite." loading="lazy">
  <figcaption>Like charges repel; unlike charges attract.</figcaption>
</figure>



## Energy transferred worked example

A kettle rated at 230 V draws a current of 10 A and runs for 3 minutes (180 s).

```
E = I V t = 10 x 230 x 180 = 414,000 J = 414 kJ
```

The same current and voltage also give the kettle's power: `P = IV = 10 x 230 = 2300 W`. Checking a worked answer both ways (via `P = IV` then `E = Pt`, and directly via `E = IVt`) is a fast way to confirm no arithmetic slip has crept in — both routes give the same 414,000 J.

## Charge and current worked example

A charge of 15 C passes a point in a wire in 5.0 s.

```
I = Q/t = 15/5.0 = 3.0 A
```

If that same wire has a potential difference of 4.0 V across it, the resistance is `R = V/I = 4.0/3.0 = 1.3 Ω` (2 s.f.), and the energy transferred per second (i.e. the power) is `P = IV = 3.0 x 4.0 = 12 W`. Being able to move fluently between Q, I, V, R, E and P from just two given quantities is exactly the kind of multi-step numerical question this topic sets.

## Exam traps

- Applying `V = IR` to a filament lamp or diode as if resistance were constant — it isn't.
- Swapping the series/parallel rules: voltage is shared in series, current is shared in parallel (not the reverse).
- Mixing up LDR and thermistor: both decrease resistance as their condition (light/temperature) increases, but respond to different quantities.
- Treating a.c. and d.c. as interchangeable — mains is a.c.; batteries/cells are d.c.
- Forgetting that charging by friction only **transfers** electrons between two objects; it does not create charge.
- Quoting a resistance value read off a filament lamp's curved graph at the wrong point — resistance from a current-voltage graph is `V/I` at a *specific* point on the curve, not the gradient, which only equals resistance for a straight-line, origin-passing graph.

## Self-test

1. State the equation linking power, current and voltage, and its use in choosing a fuse.
2. What is shared, and what is equal, in a series circuit versus a parallel circuit?
3. Why is domestic lighting wired in parallel?
4. How does an LDR's resistance change with light? How does a thermistor's resistance change with temperature?
5. Define the volt in terms of energy and charge.
6. A 9.0 V supply drives 0.30 A through a resistor. Calculate its resistance.
7. Explain, in terms of electrons, how rubbing two insulating materials together produces a positive charge on one and a negative charge on the other.

**Answers:** 1. `P = IV`; the fuse rating must exceed the appliance's normal current but blow before excessive current (e.g. from a fault) causes overheating. 2. Series: current is equal throughout, voltage is shared; parallel: voltage is equal across every branch, current is shared (divided) between branches. 3. So that one bulb failing does not break the circuit for the others, and each appliance receives full mains voltage. 4. LDR resistance falls as light increases; thermistor resistance falls as temperature increases. 5. A volt is one joule of energy transferred per coulomb of charge passed (1 V = 1 J/C). 6. `R = V/I = 9.0/0.30 = 30 Ω`. 7. Friction transfers electrons from one surface to the other; the surface that loses electrons is left with a net positive charge, and the surface that gains electrons is left with a net negative charge.

## Frequently asked questions

**What is the difference between a.c. and d.c.?**
Mains supply is alternating current, which reverses direction periodically. Cells and batteries supply direct current, which flows one way only.

**What is a volt?**
A volt is a joule per coulomb, 1 V = 1 J/C: one joule of energy is transferred for every coulomb of charge that passes.

**Can you find resistance from the gradient of a curved I-V graph?**
No. Resistance is V/I at a specific point on the curve. The gradient only equals the resistance for a straight-line graph through the origin.

**Does rubbing two insulators together create charge?**
No. Charging by friction only transfers electrons between the two objects; the surface that loses electrons becomes positive and the one that gains them becomes negative.
