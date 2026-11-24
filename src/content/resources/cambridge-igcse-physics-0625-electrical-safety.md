---
title: "Cambridge IGCSE Physics (0625): Electrical safety"
resourceType: "study-guides"
subject: "physics"
level: ["igcse"]
topic: "Electricity and magnetism"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0625"]
syllabusSeries: "For examination in 2026, 2027 and 2028"
order: 4.4
syllabusTopics:
  - qualification: "igcse"
    topic: "electricity-and-magnetism-cambridge-igcse-physics"
    subtopic: "electrical-safety-cambridge-igcse-physics"
description: "Study guide for Cambridge IGCSE Physics 0625 section 4.4 Electrical safety: mains hazards, live, neutral and earth, fuses, trip switches and double insulation."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to iftikhar-azeemi (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-17
featured: false
---

This guide covers one subtopic of the Cambridge IGCSE Physics 0625 syllabus (for examination in 2026, 2027 and 2028): **4.4 Electrical safety**. The whole of 4.4 is **Core** content, so every candidate needs all of it; there is no Supplement material in this section. The [Electricity and magnetism study guide](/resources/igcse-physics-0625-electricity-and-magnetism/) gives a short summary and one fuse calculation; this page explains each safety feature as a chain of cause and effect, which is how 4.4 questions are marked.

## What 4.4 asks you to do

1. State the hazards of damaged insulation, overheating cables, damp conditions, and excess current from overloading plugs, extension leads, single and multiple sockets, when using a mains supply.
2. Know that a mains circuit has a **live** (line) wire, a **neutral** wire and an **earth** wire, and explain why the switch must be in the live wire.
3. Explain the use and operation of **trip switches** and **fuses**, and choose fuse ratings and trip switch settings.
4. Explain why an appliance's outer casing must be either **non-conducting (double-insulated)** or **earthed**.
5. State that a fuse without an earth wire protects the circuit and cabling for a double-insulated appliance.

## The three wires

| Wire | Job | Normal p.d. relative to earth |
|---|---|---|
| **Live (line)** | Carries the alternating p.d. from the supply to the appliance | High (the mains voltage) |
| **Neutral** | Completes the circuit back to the supply | Close to zero |
| **Earth** | A safety wire connecting a metal casing to the ground; carries current only when there is a fault | Zero |

The danger is the **live** wire. A person touching it while also in contact with the ground (or with the neutral) becomes part of a circuit, and current flows through their body: an electric shock.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-physics-0625-electrical-safety-cambridge-igcse-physics--01-live-neutral-earth.webp" width="900" height="610" alt="A mains supply connected to an appliance with a metal case. The live wire, at a high p.d., runs through a fuse and a switch to the working parts; the neutral wire, close to 0 V, completes the circuit; the earth wire, at 0 V, connects to the metal case and carries current only when there is a fault." loading="lazy">
  <figcaption>Fuse and switch sit in the live wire; the earth wire joins the metal case to the ground.</figcaption>
</figure>

## Why the switch goes in the live wire

With the switch in the live wire, turning the appliance **off** disconnects it from the high p.d. Everything beyond the switch is then safe to touch.

If the switch were in the **neutral** wire, the appliance would stop working when switched off, because the circuit is broken, but its internal parts would **still be connected to the live wire** at the mains voltage. Someone changing a lamp or touching an internal fault could still receive a shock. The same reasoning puts **fuses** in the live wire: a blown fuse must disconnect the live supply, not just stop the current.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-physics-0625-electrical-safety-cambridge-igcse-physics--02-switch-in-live-wire.webp" width="900" height="620" alt="Two circuits with the switch off. With the switch in the live wire, the lamp holder is cut off from the high p.d. and is safe. With the switch in the neutral wire, the lamp goes out but the holder is still connected to the live wire, so it can still give a shock." loading="lazy">
  <figcaption>Both switch positions turn the lamp off, but only a live-wire switch makes it safe.</figcaption>
</figure>

## The four hazards

| Hazard | What goes wrong | Result |
|---|---|---|
| **Damaged insulation** | Live wire exposed, or touching the case | Electric shock; possible fire if live touches neutral (short circuit) |
| **Overheating cables** | Current too large for the cable, or a cable coiled up so it cannot lose heat | Insulation melts, exposing wires; fire |
| **Damp conditions** | Water (impure) conducts | Current can flow through water and a person to earth: shock |
| **Overloading** | Too many appliances on one plug, extension lead or socket | Total current is too large; cables and sockets overheat; fire |

**Overloading in numbers.** Each appliance in parallel draws its own current, and the currents add. On a 230 V supply, a 2.5 kW kettle (10.9 A), a 2.0 kW heater (8.7 A) and a 1.2 kW iron (5.2 A) on one extension lead draw a total of about 24.8 A. If the lead is designed for 13 A, its cable heats up far beyond its safe limit.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-physics-0625-electrical-safety-cambridge-igcse-physics--03-overloading.webp" width="900" height="580" alt="A kettle (2.5 kW, 10.9 A), a heater (2.0 kW, 8.7 A) and an iron (1.2 kW, 5.2 A) plugged into one extension lead designed for 13 A on 230 V. The currents add to 24.8 A, so the cable overheats, its insulation can melt and a fire can start." loading="lazy">
  <figcaption>Each appliance adds its own current; too many on one lead overheats the cable.</figcaption>
</figure>

## Fuses

A **fuse** is a short piece of thin wire in a holder, connected in the live wire. When the current is larger than the fuse's **rating**, the wire heats up enough to **melt**, breaking the circuit and cutting off the live supply. A blown fuse must be replaced, after the fault has been found and repaired.

**Choosing a fuse rating:** calculate the normal current with I = P / V, then choose the fuse with the **smallest rating that is above** the normal current.

- Too low a rating: the fuse blows in normal use.
- Too high a rating: a fault current can flow without the fuse melting, so cables can overheat and the appliance is not protected.

### Worked example 1

Fuses of 3 A, 5 A and 13 A are available. Choose the fuse for (a) a 1.2 kW hair dryer and (b) a 650 W drill, both on 230 V.

```
(a) I = P / V = 1200 / 230 = 5.2 A
    5 A is below 5.2 A, so it would blow in normal use   → 13 A fuse
(b) I = 650 / 230 = 2.8 A
    3 A is the smallest rating above 2.8 A               → 3 A fuse
```

Always show the current: a correct fuse with no calculation usually scores only part of the marks.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-physics-0625-electrical-safety-cambridge-igcse-physics--04-choosing-a-fuse.webp" width="900" height="684" alt="A current scale from 0 to 14 A with fuse ratings of 3 A, 5 A and 13 A. A 650 W drill draws 2.8 A, so the 3 A fuse is chosen; a 1.2 kW hair dryer draws 5.2 A, above 5 A, so it needs the 13 A fuse." loading="lazy">
  <figcaption>Calculate I = P/V, then pick the smallest rating just above it.</figcaption>
</figure>

## Trip switches

A **trip switch** (circuit breaker) does the same job as a fuse but is an automatic switch rather than a wire that melts. When the current exceeds its **setting**, the switch **opens** (trips), cutting off the live supply. Once the fault is fixed it can simply be **reset** by hand, so nothing needs replacing.

Choosing a trip switch setting follows the same rule as a fuse: just above the normal maximum current of the circuit it protects. A circuit of appliances totalling 4.0 kW on 230 V carries 17.4 A; from settings of 6 A, 20 A and 32 A, choose **20 A**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-physics-0625-electrical-safety-cambridge-igcse-physics--05-fuse-vs-trip-switch.webp" width="900" height="600" alt="A fuse is a thin wire in the live wire that melts when the current exceeds its rating and must be replaced; a trip switch opens when the current exceeds its setting and is reset by hand. A 4.0 kW circuit on 230 V carries 17.4 A, so from 6 A, 20 A and 32 A the 20 A setting is chosen." loading="lazy">
  <figcaption>Both cut off the live supply when the current is too large; a trip switch can be reset.</figcaption>
</figure>

## Earthing a metal casing

Many appliances (kettles, toasters, washing machines) have **metal** cases. The earth wire connects the case to the ground through a very low-resistance path.

**Explaining how earthing protects you, step by step:**

1. A fault occurs: the live wire comes loose and touches the metal case.
2. A large current flows from the live wire, through the case and the earth wire, to the ground (low resistance path).
3. This large current is greater than the fuse rating, so the fuse melts (or the trip switch opens).
4. The appliance is disconnected from the live supply, so the case is no longer at a high p.d.
5. Anyone touching the case is safe.

**Without** an earth wire, the case would stay at the mains p.d. with no current flowing, and the fault would go unnoticed until someone touched the case and the current flowed through their body instead.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-physics-0625-electrical-safety-cambridge-igcse-physics--06-earthing-chain.webp" width="900" height="610" alt="A loose live wire touches the metal case of an appliance. A large current flows from the live wire through the case and the earth wire to the ground, the fuse in the live wire melts, the appliance is disconnected and the case is safe to touch." loading="lazy">
  <figcaption>Fault, large current to earth, fuse melts, live disconnected.</figcaption>
</figure>

## Double insulation

A **double-insulated** appliance has an outer casing made of a **non-conducting** material such as plastic, with the live parts also insulated inside. Even if a wire comes loose, the case cannot become live, so **no earth wire is needed**. Hair dryers and many power tools are made this way.

Such an appliance still has a **fuse** in its plug or circuit. With no earth wire, the fuse is not there to protect the user from a live case; it **protects the circuit and the cabling**, melting if a fault such as a short circuit makes the current too large.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-physics-0625-electrical-safety-cambridge-igcse-physics--07-double-insulation.webp" width="900" height="520" alt="A double-insulated appliance has a plastic, non-conducting case around insulated live parts and only live and neutral wires, with no earth wire. A fuse in the live wire remains to protect the circuit and the cabling." loading="lazy">
  <figcaption>A non-conducting case cannot become live; the fuse protects the circuit and cabling.</figcaption>
</figure>

## Common mistakes

- Saying the switch is in the live wire "so the appliance turns off". It would turn off with the switch in either wire; the reason is that it is **disconnected from the high p.d.**
- Saying a fuse "stops the current getting too high". It **melts** when the current is too high and breaks the circuit.
- Saying the earth wire "absorbs" or "stores" the electricity.
- Choosing a fuse rating below the normal current, or far above it.
- Saying a double-insulated appliance needs no fuse.
- Describing damp conditions as dangerous "because water and electricity don't mix" without saying water conducts.

## Exam technique

- **State** a hazard: name the hazard and its result (shock or fire).
- **Explain** why the switch is in the live wire: say what is still live if it is not.
- **Explain** earthing: give the chain (fault, large current to earth, fuse melts, live disconnected).
- **Choose** a fuse: calculate I = P / V, then pick the smallest rating above it and say why.
- **State** the role of the fuse in a double-insulated appliance using the syllabus words: protects the circuit and the cabling.

## More on this topic

Condense this with the [electrical safety revision notes](/resources/cambridge-igcse-physics-0625-electrical-safety-revision-notes/) and practise with the [electrical safety practice questions](/resources/cambridge-igcse-physics-0625-electrical-safety-practice/). The previous subtopic is [electric circuits](/resources/cambridge-igcse-physics-0625-electric-circuits/) and the next is [electromagnetic effects](/resources/cambridge-igcse-physics-0625-electromagnetic-effects/).

## Official syllabus

Cambridge International, *Cambridge IGCSE Physics 0625 syllabus for examination in 2026, 2027 and 2028*, Topic 4 Electricity and magnetism, section 4.4 Electrical safety.
