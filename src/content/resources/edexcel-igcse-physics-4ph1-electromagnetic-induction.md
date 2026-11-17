---
title: "Pearson Edexcel International GCSE Physics (4PH1): Electromagnetic induction"
resourceType: "study-guides"
subject: "physics"
level: ["igcse"]
topic: "Magnetism and electromagnetism"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4PH1"]
syllabusSeries: "Issue 4"
order: 6.4
syllabusTopics:
  - qualification: "igcse"
    topic: "magnetism-and-electromagnetism"
    subtopic: "electromagnetic-induction"
description: "Induced voltage, generators, transformer structure, the turns ratio, VpIp = VsIs and high-voltage transmission for Edexcel IGCSE Physics 4PH1 sub-topic 6d."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-17
featured: false
---

This guide covers sub-topic **6(d) Electromagnetic induction** of the
Pearson Edexcel International GCSE in Physics (4PH1), Issue 4
specification: statements 6.15 to 6.20. Statements 6.15 and 6.16 are core;
6.17P to 6.20P, all on transformers, are Physics-only and assessed on
Paper 2P. A shorter overview of the whole topic is in the
[Magnetism and Electromagnetism study guide](/resources/edexcel-igcse-physics-magnetism-and-electromagnetism/).
It helps to know the field patterns from the
[Electromagnetism study guide](/resources/edexcel-igcse-physics-4ph1-electromagnetism/)
and P = I × V from
[Electricity](/resources/edexcel-igcse-physics-electricity/).

## What the specification asks for

- **6.15** know that a voltage is induced in a conductor or a coil when it moves through a magnetic field or when a magnetic field changes through it, and describe the factors that affect the size of the induced voltage
- **6.16** describe the generation of electricity by the rotation of a magnet within a coil of wire and of a coil of wire within a magnetic field, and describe the factors that affect the size of the induced voltage
- **6.17P** describe the structure of a transformer and understand that a transformer changes the size of an alternating voltage by having different numbers of turns on the input and output sides
- **6.18P** explain the use of step-up and step-down transformers in the large-scale generation and transmission of electrical energy
- **6.19P** know and use the turns-ratio relationship
- **6.20P** know and use input power = output power, VpIp = VsIs, for 100% efficiency

Both transformer equations are on the specification's list of
relationships that are **not** given in the exam, so learn them.

## Inducing a voltage (6.15)

A voltage is **induced** across a conductor when there is relative
movement between it and a magnetic field, so that the conductor "cuts"
field lines, or when the magnetic field passing through a coil
**changes**. If the conductor is part of a complete circuit, the induced
voltage drives an induced current.

The classic demonstration uses a coil connected to a sensitive
centre-zero meter:

| Action | Meter reading |
|---|---|
| Push the N pole of a magnet into the coil | Deflects one way |
| Hold the magnet still inside the coil | Zero |
| Pull the magnet out | Deflects the opposite way |
| Push the S pole in | Deflects the opposite way to the N pole going in |
| Push the magnet in faster | Larger deflection |

The key word is **change**. A strong magnet sitting still inside a coil
induces nothing.

**Factors that increase the induced voltage:**

- moving the magnet or conductor **faster** (a faster rate of change)
- using a **stronger magnet**
- using **more turns** on the coil
- (for a coil) winding it on an **iron core**, which strengthens the field through it

Reversing the direction of motion, or the pole used, reverses the induced
voltage.

## Generators (6.16)

A generator turns kinetic energy into electrical energy by keeping the
field through a coil continually changing.

**A magnet rotating inside a coil.** As the magnet turns, each pole in
turn sweeps past the coil, so the field through the coil keeps rising,
falling and reversing. The induced voltage therefore keeps reversing: the
output is **alternating**. Bicycle dynamos and large power-station
generators work this way.

**A coil rotating in a magnetic field.** As the coil rotates between the
poles of a magnet, its sides cut the field lines, first moving one way
through the field and then, half a turn later, the other way. The
induced voltage reverses every half turn, again giving an alternating
output. The voltage is greatest when the sides of the coil move at right
angles to the field lines (coil horizontal in the usual diagram) and zero
for the instant they move along them (coil vertical).

**Factors that increase the induced voltage in a generator:**

- **faster rotation**: this also increases the **frequency** of the a.c., since there are more turns per second
- a **stronger magnetic field**
- **more turns** on the coil
- (for a rotating coil) a larger area of coil, and a soft iron core inside it

A common exam point: rotating faster changes both the peak voltage and
the frequency, while a stronger magnet or more turns change only the peak
voltage.

## Transformers (6.17P)

A transformer has three parts:

- a **primary (input) coil**, connected to an alternating supply
- a **secondary (output) coil**, connected to the load
- a **soft iron core** linking the two coils (in practice made of thin insulated sheets, called laminations, to reduce energy losses)

The coils are not electrically connected to each other. The alternating
current in the primary coil produces a magnetic field in the core that is
continually changing in size and direction. The core carries this
changing field through the secondary coil, so an alternating voltage is
induced in the secondary.

A transformer **does not work with d.c.**: a steady current gives a
steady field, and a steady field induces no voltage.

**Step-up** transformers have more turns on the secondary than on the
primary, so the output voltage is larger. **Step-down** transformers have
fewer secondary turns, so the output voltage is smaller.

## The equations (6.19P, 6.20P)

```
input (primary) voltage / output (secondary) voltage = primary turns / secondary turns
Vp / Vs = Np / Ns

input power = output power (100% efficiency)
Vp × Ip = Vs × Is
```

The second equation means that a transformer that steps the voltage **up**
steps the current **down** by the same factor, and the other way round.

## Transmission of electrical energy (6.18P)

Power stations generate at a voltage of tens of kilovolts. A step-up
transformer raises this to hundreds of kilovolts for the transmission
lines. Because P = V × I, transmitting the same power at a higher voltage
needs a **smaller current**. A smaller current causes **less heating** of
the cables, so less energy is wasted. Step-down transformers near towns
and homes then reduce the voltage to a safer value for consumers.

## Worked examples

**Example 1 (turns ratio).** A charger's transformer has 2000 primary
turns and runs from a 230 V supply. It must give an output of 11.5 V.
Calculate the number of secondary turns.

```
Vp / Vs = Np / Ns
230 / 11.5 = 2000 / Ns
Ns = 2000 × 11.5 / 230 = 100 turns
```

**Example 2 (power and current).** The same transformer, assumed 100%
efficient, supplies 2.0 A to a device at 12 V from a 230 V primary.
Calculate the primary current.

```
Vp × Ip = Vs × Is
230 × Ip = 12 × 2.0 = 24 W
Ip = 24 / 230 = 0.10 A (2 s.f.)
```

**Example 3 (why step up?).** *Illustrative figures.* A power station
sends 100 MW. At 25 kV, the current would be I = P / V = 100 000 000 /
25 000 = 4000 A. Stepped up to 400 kV (a turns ratio of 1 : 16), the
current is 100 000 000 / 400 000 = 250 A, sixteen times smaller, so the
cables are heated far less.

## Common mistakes

- Saying a voltage is induced by a magnet "being near" a coil. It needs movement or a changing field.
- Writing that a transformer "makes more power" when it steps up voltage. Power out cannot exceed power in.
- Inverting the ratio: check that the larger voltage is on the side with more turns.
- Stating that high-voltage transmission reduces resistance. It reduces the **current**; the cables' resistance is unchanged.
- Claiming the coils of a transformer are connected by wire. The link is the changing magnetic field in the core.
- Forgetting that faster rotation raises the frequency as well as the voltage.

## Exam technique

- **Calculate:** write the equation, substitute with units, and give the answer with a unit and sensible significant figures.
- **Explain** (transmission): chain three links: higher voltage → lower current for the same power → less heating, less energy wasted.
- **Describe** (transformer structure): name all three parts and say what each is connected to.
- **Describe the factors** (6.15, 6.16): use comparatives ("faster", "stronger", "more turns") linked to "larger induced voltage".

## Related resources

- [Electromagnetic induction revision notes](/resources/edexcel-igcse-physics-4ph1-electromagnetic-induction-revision-notes/) for a fast recap and self-test
- [Electromagnetic induction practice questions](/resources/edexcel-igcse-physics-4ph1-electromagnetic-induction-practice/), including transformer calculations
- [Radioactivity and Particles](/resources/edexcel-igcse-physics-radioactivity-and-particles/), the next topic

*Written against the Pearson Edexcel International GCSE in Physics (4PH1)
specification, Issue 4. Always check the current specification for your
examination year.*
