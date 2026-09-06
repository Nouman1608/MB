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

## Series and parallel circuits

**Series:** current is the same everywhere; voltage is shared between components.
**Parallel:** voltage is the same across every branch; current divides between branches.

Domestic lighting is wired in parallel so one bulb failing does not switch off the others, and so each appliance gets the full mains voltage.

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

## Electric charge (Physics only)

Conductors (metals) allow charge to flow; insulators (plastics) do not. Rubbing two insulators together transfers electrons: the surface that **loses** electrons becomes **positive**; the one that **gains** electrons becomes **negative**. Like charges repel; unlike charges attract. Applications: photocopiers, inkjet printers. Hazards: sparks during aircraft/tanker fuelling — hence static-dissipation design in fuelling equipment.


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
