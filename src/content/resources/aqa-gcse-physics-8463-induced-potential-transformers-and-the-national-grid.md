---
title: "AQA GCSE Physics (8463): Induced potential, transformers and the National Grid"
resourceType: "study-guides"
subject: "physics"
level: ["gcse"]
topic: "Magnetism and electromagnetism"
boards: ["aqa"]
qualifications: ["gcse"]
syllabusCodes: ["8463"]
syllabusSeries: "For first teaching 2016"
order: 7.3
syllabusTopics:
  - qualification: "gcse"
    topic: "magnetism-and-electromagnetism-aqa-gcse"
    subtopic: "induced-potential-transformers-and-the-national-grid"
description: "AQA GCSE Physics 8463 section 4.7.3 in depth: the generator effect, alternators, dynamos, microphones, transformers and high-voltage transmission."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section **4.7.3 Induced potential, transformers and the National Grid** of the AQA
GCSE Physics (8463) specification, for first teaching 2016. It is examined on Paper 2, and **the whole of 4.7.3 is
Higher tier only**.

The [Magnetism and electromagnetism study guide](/resources/aqa-gcse-physics-8463-magnetism-and-electromagnetism/)
summarises this section. This page adds the reasoning behind the generator effect, how to read generator graphs,
and fuller transformer and transmission calculations. The National Grid itself (step-up and step-down
transformers between power stations and homes) also appears in the
[Electricity study guide](/resources/aqa-gcse-physics-8463-electricity/). For quick recall, use the
[revision notes](/resources/aqa-gcse-physics-8463-induced-potential-transformers-and-the-national-grid-revision-notes/),
and test yourself with the
[practice questions](/resources/aqa-gcse-physics-8463-induced-potential-transformers-and-the-national-grid-practice/).

## What this subtopic covers

| Spec | What you must be able to do |
|---|---|
| 4.7.3.1 Induced potential | Describe the generator effect; recall the factors affecting the size and direction of the induced p.d. or current; explain that the induced current opposes the change; apply the generator effect in a given context |
| 4.7.3.2 Uses of the generator effect | Explain how an alternator produces a.c. and a dynamo produces d.c.; draw and interpret p.d.–time graphs |
| 4.7.3.3 Microphones | Explain how a moving-coil microphone turns pressure variations in sound into variations in current |
| 4.7.3.4 Transformers | Explain how a transformer works; use Vp/Vs = np/ns and VsIs = VpIp; calculate the current drawn from the supply; relate these to the advantages of transmitting at high p.d. |

The two transformer equations are on the Physics equation sheet.

## 4.7.3.1 The generator effect

A **potential difference is induced** across the ends of a conductor when:

- the conductor **moves relative to a magnetic field**, cutting across field lines, or
- the **magnetic field around the conductor changes**.

If the conductor is part of a **complete circuit**, the induced p.d. drives an **induced current**. This is the
**generator effect**.

The key word is **change**. A magnet held still inside a coil induces nothing, however strong it is. A wire moving
**along** the field lines (parallel to them) induces nothing either, because it does not cut across them.

### Size and direction

| The induced p.d. is larger when | The direction reverses when |
|---|---|
| the movement is faster (the field changes more quickly) | the direction of movement reverses |
| the magnetic field is stronger | the magnetic field is reversed |
| the coil has more turns | |

### The induced current opposes the change

An induced current produces its own magnetic field, and that field **opposes the original change**: the movement of
the conductor, or the change in field.

Apply this step by step. A magnet's S pole is pushed into a coil connected to a meter:

1. The field through the coil changes, so a current is induced.
2. The induced current makes the end of the coil facing the magnet an **S pole**, which repels the incoming S pole.
3. Work must be done to push the magnet in against this force. That work is the source of the electrical energy.

Pull the magnet out and the facing end becomes an **N pole**, which attracts the S pole and opposes the removal.

## 4.7.3.2 Alternators and dynamos

Both rotate a coil in a magnetic field (or rotate a magnet near a coil). As the coil turns, the field through it
changes all the time, so a p.d. is induced. The difference is in the connection to the outside circuit:

- An **alternator** uses **slip rings** and brushes. Each end of the coil stays connected to the same side of the
  circuit, so the induced p.d. reverses every half turn. It produces **alternating current**.
- A **dynamo** uses a **split-ring commutator**. The connections swap every half turn, just as the induced p.d.
  reverses, so the output never changes direction. It produces **direct current**.

### Reading the graphs

On a p.d.–time graph:

- An alternator gives a smooth wave above and below the time axis.
- A dynamo gives a series of humps, all on the same side of the axis, falling to zero twice per rotation.
- If the coil turns **faster**, two things change: the **peak p.d. is higher** (faster change of field) and the
  **cycles are closer together** (more rotations per second, so a shorter time for each cycle).

**Worked example 1.** An alternator's graph shows one full cycle every 0.040 s. How many rotations per second is the
coil making, and what changes on the graph if this doubles?

```
one cycle = one rotation
rotations per second = 1 / 0.040 = 25
```

At 50 rotations per second, each cycle takes 0.020 s, and the peak p.d. is higher.

## 4.7.3.3 Microphones

A moving-coil microphone uses the generator effect to turn **pressure variations in sound waves** into
**variations in current**:

1. Sound waves make a flexible diaphragm vibrate.
2. The diaphragm is attached to a coil in the field of a permanent magnet, so the coil moves back and forth.
3. A p.d. is induced in the moving coil, reversing as the movement reverses.
4. The current in the circuit varies in the same pattern as the sound waves.

It is the reverse of a loudspeaker, which uses the motor effect.

## 4.7.3.4 Transformers

A basic transformer has a **primary coil** and a **secondary coil** wound on an **iron core**. Iron is used because
it is easily magnetised.

How it works, as a chain:

1. An **alternating current** in the primary coil produces a **changing magnetic field** in the core.
2. The iron core carries this changing field through the secondary coil.
3. The changing field induces an **alternating p.d.** across the secondary coil.
4. If the secondary is in a complete circuit, an alternating current flows in it.

A steady d.c. would give a constant field, so nothing would be induced once it was switched on.

### The turns ratio

The ratio of the p.d.s depends on the ratio of the turns:

**Vp / Vs = np / ns**

- **Step-up** transformer: more turns on the secondary, so Vs > Vp.
- **Step-down** transformer: fewer turns on the secondary, so Vs < Vp.

**Worked example 2.** A doorbell transformer steps 230 V down to 6.0 V. The primary coil has 2300 turns. Calculate
the number of turns on the secondary.

```
ns = np × Vs / Vp = 2300 × 6.0 / 230 = 60 turns
```

### Power and current

For a transformer that is **100% efficient**, the output power equals the input power:

**Vs × Is = Vp × Ip**

**Worked example 3.** The doorbell transformer supplies 1.5 A to the bell at 6.0 V. Calculate the current drawn
from the 230 V mains.

```
power output = Vs × Is = 6.0 × 1.5 = 9.0 W
Ip = 9.0 / 230 = 0.039 A (2 s.f.)
```

Stepping the p.d. **down** steps the current **up** by the same factor, and the reverse.

## Transmission at high potential difference

Electrical power is transferred from power stations to consumers through the **National Grid**. **Step-up
transformers** increase the p.d. from the power station for transmission; **step-down transformers** reduce it to a
much lower value for homes.

Why go to the trouble? For a given power, P = VI, so a higher p.d. means a **smaller current**. The power wasted
heating the cables is P = I²R, so the loss depends on the **square** of the current.

**Worked example 4.** These figures are invented. A power station sends 2.0 MW through transmission cables with a total
resistance of 4.0 Ω.

```
at 20 kV:   I = 2.0 × 10⁶ / 20 000  = 100 A    loss = 100² × 4.0 = 40 000 W
at 200 kV:  I = 2.0 × 10⁶ / 200 000 = 10 A     loss = 10² × 4.0  = 400 W
```

Ten times the p.d. gives one tenth of the current and **one hundredth** of the power loss. Less energy is wasted, so
the system is more efficient.

## Common mistakes

- Saying a stationary magnet in a coil induces a p.d.
- Forgetting that the induced current opposes the change, or saying it "helps" the motion.
- Mixing up slip rings (alternator, a.c.) and split-ring commutator (dynamo, d.c.).
- Saying faster rotation changes only the peak p.d.; the frequency increases too.
- Saying a transformer "creates power"; at best, power out equals power in.
- Saying high p.d. "reduces resistance"; it reduces the current and so the I²R loss.
- Mixing primary and secondary values in the turns-ratio equation.

## Exam technique

**Explain** questions on transformers and microphones are marked as a chain: give each step and join them with
"so". In **calculate** questions, write the equation from the sheet, rearrange before substituting, and keep
p-values together and s-values together. **Describe** a graph change by naming both the height and the time per
cycle. If asked to **apply** the generator effect to an unfamiliar device (a bicycle light, a wind-up torch), name
what moves relative to what, and say that the field through the coil changes.

## Official syllabus

AQA GCSE Physics (8463) specification, for first teaching 2016, published by AQA -- section 4.7.3 Induced potential,
transformers and the National Grid (4.7.3.1 Induced potential; 4.7.3.2 Uses of the generator effect; 4.7.3.3
Microphones; 4.7.3.4 Transformers).
