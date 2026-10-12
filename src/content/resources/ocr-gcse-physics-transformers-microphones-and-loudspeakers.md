---
title: "OCR GCSE Physics A: Transformers, microphones and loudspeakers (J249)"
seoTitle: "OCR GCSE Physics Transformers & Loudspeakers Guide"
resourceType: "study-guides"
subject: "physics"
level: ["gcse"]
topic: "Transformers, microphones and loudspeakers"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J249"]
syllabusSeries: "Version 5.0 (July 2026), for first assessment in 2018"
order: 23
syllabusTopics:
  - qualification: "gcse"
    topic: "magnetism-and-magnetic-fields-ocr-gcse"
    subtopic: "uses-of-magnetism-ocr-gcse"
description: "Study guide to transformers, turns ratios, the microphone, loudspeaker and headphones for OCR GCSE (9-1) Physics A (J249), with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide covers statements P4.2g to P4.2j of topic P4.2, Uses of magnetism, in the OCR GCSE (9-1) Gateway Science Physics A (J249) specification, Version 5.0 (July 2026). It teaches how a transformer works, how its potential differences relate to its turns, and how microphones, loudspeakers and headphones turn sound into current and back again. **All four statements are in bold in the specification, so they are tested only in the Higher Tier papers.** Foundation Tier candidates do not need this page.

Course pages: the [hub](/boards/ocr/gcse/physics/) and the [printable checklist](/checklists/ocr/gcse/physics/). Companion pages: the [revision notes](/resources/ocr-gcse-physics-transformers-microphones-and-loudspeakers-revision-notes/) and the [practice questions](/resources/ocr-gcse-physics-transformers-microphones-and-loudspeakers-practice/). For the magnetic fields behind all of this, see [magnets, magnetic fields and electromagnets](/resources/ocr-gcse-physics-magnets-magnetic-fields-and-electromagnets/). To find out where you stand first, try the [free 10-minute diagnostics](/diagnostics/).

## What this guide covers

| Statement | What you must be able to do | Tier |
|---|---|---|
| P4.2g | Explain how an alternating current in one circuit inducing a current in another is used in transformers | Higher Tier only |
| P4.2h | Explain how the ratio of the potential differences across the two coils depends on the ratio of the numbers of turns | Higher Tier only |
| P4.2i | Apply the equations linking the potential differences and the numbers of turns in the two coils | Higher Tier only |
| P4.2j | Explain the action of the microphone (sound pressure variations into current variations) and the reverse effect in loudspeakers and headphones | Higher Tier only |

The specification also lists an equation for power in a transformer: potential difference across the primary coil × current in the primary coil = potential difference across the secondary coil × current in the secondary coil. It appears in topic P8.2 on the National Grid, not in P4.2. This guide uses it briefly because it is the natural partner of the turns equation. The motor effect and electromagnetic induction have their own pages; here you only need the ideas that a changing field induces a potential difference, and that a current in a field feels a force.

## The transformer (P4.2g)

A transformer changes the size of an alternating potential difference. It has two separate coils of insulated wire, wound on the same core. The core is normally made of iron, which is easily magnetised, so it carries the magnetic field from one coil to the other.

- The **primary coil** is connected to the input supply.
- The **secondary coil** is connected to the output (the load).
- There is **no electrical connection** between the two coils. Energy passes between them through the magnetic field in the core.

### How it works, step by step

1. An alternating current flows in the primary coil.
2. A current in a coil produces a magnetic field, so the primary coil magnetises the core.
3. The current keeps changing size and direction, so the magnetic field in the core keeps changing size and direction.
4. The secondary coil is wound on the same core, so it is in a changing magnetic field.
5. A changing field around a coil induces a potential difference across its ends.
6. If the secondary circuit is complete, this potential difference drives an alternating current in it.

Step 3 is the one that gains or loses marks. The effect needs a **changing** field. A battery gives a steady direct current, which produces a steady field. A steady field induces nothing, so a transformer connected to a battery gives no output (apart from a brief pulse at the moment of switching on or off, when the field changes).

### Worked example 1: why d.c. fails

A student connects the primary coil of a transformer to a 6 V battery and a voltmeter to the secondary. The voltmeter reads zero after the first instant. Explain why.

The battery gives direct current, so the current in the primary is steady. A steady current gives a steady magnetic field in the core. The secondary coil is not in a changing field, so no potential difference is induced. Replacing the battery with a 6 V a.c. supply would give a reading.

## Turns and potential difference (P4.2h)

The potential difference induced in a coil depends on how many turns it has, because every turn is in the same changing field and each adds its own share. More turns on the secondary coil means a larger induced potential difference. For a fixed input, more turns on the primary coil means a smaller potential difference per turn, so the secondary output falls.

The result is the key relationship: **the ratio of the potential differences equals the ratio of the numbers of turns.**

- If the secondary has **more turns** than the primary, the output potential difference is larger than the input. This is a **step-up transformer**.
- If the secondary has **fewer turns** than the primary, the output potential difference is smaller. This is a **step-down transformer**.
- If both coils have the same number of turns, the potential difference does not change.

| Type | Turns | Output compared with input |
|---|---|---|
| Step-up | Ns > Np | Vs > Vp |
| Step-down | Ns < Np | Vs < Vp |

Explaining the dependence means linking all three steps: more secondary turns, so more turns in the changing field, so a greater induced potential difference. Do not just say "more turns gives more voltage".

If you build a transformer in class, you can keep Np and Vp fixed, change Ns, and record Vs each time. A graph of Vs against Ns is close to a straight line through the origin, because Vs is proportional to Ns. Measured values usually fall a little below the predicted ones, since a real transformer wastes some energy.

## The turns equation (P4.2i)

For the potential difference across the primary coil (Vp, in volts), the potential difference across the secondary coil (Vs, in volts), and the numbers of turns Np and Ns:

**Vp / Vs = Np / Ns**

Turns have no unit. Vp and Vs can be in volts or kilovolts as long as both use the same unit.

### Rearranging

| To find | Rearrange to |
|---|---|
| Vs | Vs = Vp × Ns / Np |
| Vp | Vp = Vs × Np / Ns |
| Ns | Ns = Np × Vs / Vp |
| Np | Np = Ns × Vp / Vs |

A quick check: the **bigger** potential difference always goes with the **bigger** number of turns.

### Worked example 2: finding the output

A transformer has 300 turns on its primary coil and 1800 turns on its secondary coil. The primary is connected to a 24 V a.c. supply. Calculate the secondary potential difference and state the type of transformer.

```
Vs = Vp × Ns / Np
Vs = 24 × 1800 / 300
Vs = 24 × 6
Vs = 144 V
```

The secondary has more turns than the primary, and the output is larger than the input, so this is a **step-up** transformer.

### Worked example 3: finding the turns

A step-down transformer connects a 400 V a.c. supply to a device that needs 25 V. The primary coil has 2000 turns. Calculate the number of turns on the secondary coil.

```
Ns = Np × Vs / Vp
Ns = 2000 × 25 / 400
Ns = 2000 × 0.0625
Ns = 125 turns
```

Check: 125 is less than 2000, as a step-down transformer needs.

### Power in an ideal transformer

In an **ideal** transformer, with no energy wasted, the power in equals the power out:

**Vp × Ip = Vs × Is**

Here Ip and Is are the currents (in amperes) in the primary and secondary. A step-up transformer raises the potential difference, so it lowers the current by the same factor. A step-down transformer does the opposite.

### Worked example 4: current in the primary

An ideal transformer gives an output of 9.0 V and 2.5 A from a 225 V primary supply. Calculate the primary current.

```
Power out = Vs × Is = 9.0 × 2.5 = 22.5 W
Vp × Ip = 22.5
Ip = 22.5 / 225
Ip = 0.10 A
```

The potential difference is stepped down by a factor of 25 (225 to 9.0) and the current is stepped up by the same factor (0.10 A to 2.5 A). Real transformers waste some energy as thermal energy, so their output power is a little below the input power.

## Microphones and loudspeakers (P4.2j)

The specification says you should understand how **dynamic** microphones work using electromagnetic induction. A loudspeaker uses the opposite energy transfer. Both have the same main parts: a coil of wire in the field of a permanent magnet, joined to a flexible cone or diaphragm.

### The microphone

A microphone converts the pressure variations in a sound wave into variations in current in an electrical circuit.

1. The pressure variations in the sound wave push on the diaphragm, so it vibrates with the same frequency as the sound.
2. The coil is attached to the diaphragm, so it moves backwards and forwards in the magnetic field of the permanent magnet.
3. The coil is cutting through the magnetic field as it moves, so a potential difference is induced across its ends.
4. The induced potential difference changes direction as the coil changes direction, so an alternating current flows in the circuit.
5. A louder sound moves the diaphragm further and faster, giving a larger induced potential difference. A higher pitch makes the coil vibrate faster, giving a higher frequency of the current.

The current is an electrical copy of the sound wave.

### The loudspeaker and headphones

A loudspeaker converts variations in current into the pressure variations of a sound wave. This is the reverse effect.

1. An alternating current from an amplifier flows in the coil.
2. The coil is in the field of the permanent magnet, so a current-carrying conductor in a field experiences a force.
3. The current changes direction, so the force on the coil changes direction. The coil moves back and forth.
4. The coil is attached to the cone, so the cone vibrates with the same frequency as the current.
5. The cone pushes and pulls on the air, producing pressure variations (compressions and rarefactions). These are the sound wave.

A larger current gives a larger force and a larger movement, so a louder sound. **Headphones** work in the same way as a loudspeaker, on a smaller scale, with the sound sent directly to the ear.

### Worked example 5: a speaker used as a microphone

A student joins the terminals of a small loudspeaker to a sensitive voltmeter, taps the cone with a finger and sees the needle flick. Explain why.

The tap moves the cone and the coil attached to it. The coil moves through the magnetic field of the permanent magnet, so a potential difference is induced across its ends. The voltmeter detects it. The loudspeaker has behaved as a microphone: the movement of the cone, not a current, is the input.

### Microphone and loudspeaker compared

| | Microphone | Loudspeaker or headphones |
|---|---|---|
| Input | Sound (pressure variations) | Varying current |
| Output | Varying current | Sound (pressure variations) |
| Key idea | Moving coil in a field induces a potential difference | Current in a field gives a force on the coil |
| What moves first | Diaphragm, then coil | Coil, then cone |

## Common errors

- Writing that a transformer works with direct current. It needs a changing field, so it needs a.c.
- Saying current "flows through" the core from the primary to the secondary. The link is the changing magnetic field, not a flow of charge.
- Writing the turns equation with Vp over Vs on one side and Ns over Np on the other. Both fractions must have the primary on the same level.
- Calling a transformer with Ns < Np a step-up transformer because the "step" sounds bigger. Check the turns first.
- Saying a step-up transformer produces more power. The power out is at most the power in.
- Mixing up the two devices: in a microphone sound goes in, in a loudspeaker current goes in.

## Next steps

Practise with the [practice questions](/resources/ocr-gcse-physics-transformers-microphones-and-loudspeakers-practice/), then condense with the [revision notes](/resources/ocr-gcse-physics-transformers-microphones-and-loudspeakers-revision-notes/). Tick the statements off on the [checklist](/checklists/ocr/gcse/physics/), or book a [free trial class](/trial/).

## Official syllabus

OCR GCSE (9-1) Gateway Science Physics A (J249), specification Version 5.0 (July 2026), first assessment 2018, published by OCR. This page covers statements P4.2g to P4.2j.
