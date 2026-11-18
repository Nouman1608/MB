---
title: "AQA GCSE Physics (8463): Domestic uses and safety"
resourceType: "study-guides"
subject: "physics"
level: ["gcse"]
topic: "Electricity"
boards: ["aqa"]
qualifications: ["gcse"]
syllabusCodes: ["8463"]
syllabusSeries: "For first teaching 2016"
order: 2.3
syllabusTopics:
  - qualification: "gcse"
    topic: "electricity-aqa-gcse"
    subtopic: "domestic-uses-and-safety"
description: "AQA GCSE Physics 4.2.3 in depth: ac and dc, the 50 Hz 230 V mains supply, three-core cable, why a live wire is dangerous and why live-to-earth faults matter."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide explains one subtopic of AQA GCSE Physics (8463) in depth: **4.2.3 Domestic uses and safety**, made
up of 4.2.3.1 Direct and alternating potential difference and 4.2.3.2 Mains electricity. It is examined on
Paper 1 at both tiers. The content is short, but questions on it are often extended "explain" answers, so the
reasoning matters as much as the facts.

For quick recall, use the [domestic uses and safety revision notes](/resources/aqa-gcse-physics-8463-domestic-uses-and-safety-revision-notes/),
then try the [domestic uses and safety practice questions](/resources/aqa-gcse-physics-8463-domestic-uses-and-safety-practice/).
Section 4.2 as a whole is covered in the [Electricity study guide](/resources/aqa-gcse-physics-8463-electricity/).

## What the specification asks for

- Mains electricity is an **ac supply**. In the UK the domestic supply has a **frequency of 50 Hz** and is
  **about 230 V**.
- Explain the difference between **direct** and **alternating** potential difference.
- Most appliances connect to the mains with **three-core cable**, with colour-coded insulation.
- Know what each wire does and its potential.
- Explain why a **live wire may be dangerous even when a switch in the mains circuit is open**.
- Explain the **dangers of providing any connection between the live wire and earth**.

## Direct and alternating potential difference

A **direct pd** stays in one direction. The current it drives always flows the same way round the circuit. Cells
and batteries supply direct pd, and the current is called direct current (dc).

An **alternating pd** keeps reversing its direction. The current it drives keeps changing direction, flowing one
way and then the other. Mains electricity is an alternating supply, giving alternating current (ac).

**What 50 Hz means.** The mains pd completes 50 full cycles (forwards, then backwards) every second. One cycle
takes 1 ÷ 50 = 0.02 s, which is 20 ms, so the current reverses direction 100 times each second.

**Recognising them on a trace.** If pd is plotted against time, a direct pd from a cell is a horizontal line on
one side of zero. An alternating pd is a wave that rises above zero, falls below it and repeats. To find the
frequency of a trace, read the time for one complete cycle and divide 1 by it.

**Worked example 1.** A trace of an alternating supply shows two complete cycles in 0.050 s. Find the frequency
and state whether it could be the UK mains.

```
time for one cycle = 0.050 ÷ 2 = 0.025 s
frequency = 1 ÷ 0.025 = 40 Hz
Not UK mains, which is 50 Hz.
```

## Three-core cable

| Wire | Insulation colour | Job | Potential |
|---|---|---|---|
| Live | Brown | Carries the alternating pd from the supply | About 230 V relative to earth |
| Neutral | Blue | Completes the circuit | At, or close to, earth potential (0 V) |
| Earth | Green and yellow stripes | Safety wire that stops the appliance becoming live | 0 V; carries a current only if there is a fault |

The colours exist **for easy identification**: anyone wiring a plug or appliance can tell the wires apart at a
glance, which reduces the chance of connecting them wrongly.

**Neutral versus earth.** Both are at or near 0 V, which confuses many students. The difference is current. The
neutral wire is part of the normal circuit, so current flows in it whenever the appliance is on. The earth wire
carries no current in normal use; it only carries current when something has gone wrong.

## Why the live wire is dangerous even with the switch open

The supply side of the live wire stays at about 230 V whether or not the appliance's switch is closed. An open
switch only breaks the path **through the appliance**; it does not lower the potential of the live wire before
the switch.

Your body is at, or close to, earth potential (0 V), because you are in contact with the ground. If you touch the
live wire, there is a pd of about 230 V across your body. That pd drives a current through you to earth, and that
current is an electric shock. A closed path exists through you, even though the appliance's own circuit is open.

So "the switch is off" is not the same as "it is safe". This is why an appliance is unplugged, or the supply
isolated, before anyone works on it.

## Why any connection between live and earth is dangerous

The earth wire and the ground have a very low resistance. If the live wire touches anything connected to earth,
the 230 V pd is across a path of very low resistance, so a **very large current** flows. Consequences:

- The large current heats the wires strongly, which can cause a **fire**.
- If the path to earth passes **through a person**, for example someone holding a metal appliance whose casing has
  become live, the current through them can cause a serious or fatal **shock**.

### How the earth wire protects

The earth wire is connected to the metal casing of an appliance. If a fault lets the live wire touch the casing,
current flows from the casing along the earth wire instead of staying on the casing. The casing is held at 0 V,
so it does not become live, and a person touching it does not have 230 V across their body.

## Annotated model answer

**Question.** A metal toaster is connected to the mains by three-core cable. Explain how the earth wire protects
the user if the live wire becomes loose and touches the metal case. **[4]**

> The earth wire is connected to the metal case (1). If the loose live wire touches the case, current flows
> through the earth wire to earth (1). This keeps the case at 0 V, so the case does not become live (1). A user
> who touches the case does not have a large pd across their body, so no current flows through them and they do
> not get a shock (1).

*Why it scores:* each sentence adds one link in the chain: connection, current path, potential of the case,
consequence for the user. An answer that just says "the earth wire stops you getting a shock" earns at most one
mark, because it states the outcome without the steps.

## Worked example 2: reasoning about potentials

A lamp is wired correctly and switched off. State the pd between: (a) the live wire and the neutral wire on the
supply side of the switch; (b) the neutral wire and earth.

```
(a) live is about 230 V, neutral about 0 V  →  pd about 230 V
(b) neutral at or close to 0 V, earth 0 V   →  pd about 0 V
```

The live wire is at about 230 V even with the lamp off, which is why (a) is still about 230 V.

## Common mistakes

- Saying ac "flows faster" or "has more energy" than dc. The difference is direction: ac reverses, dc does not.
- Stating 50 Hz as the pd or 230 V as the frequency.
- Saying the neutral wire carries no current; that describes the earth wire.
- Saying the earth wire "carries the current away all the time".
- Writing that a switched-off appliance is safe to touch inside.
- Describing a shock as "electricity going into you" without the pd across the body and the current through it.
- Mixing up the colours: brown live, blue neutral, green and yellow earth.

## Exam technique

- **Explain** questions about danger need the chain: potential of the wire, pd across the body (or a
  low-resistance path), current, harm.
- **Describe the difference** between ac and dc: write a matching pair, one sentence for each.
- **State** questions on the supply need both numbers with units: 50 Hz and about 230 V.
- Use "potential difference", not "power", when you mean volts.

## Official syllabus

AQA GCSE Physics (8463) specification, for teaching from September 2016 onwards, for exams in 2018 onwards
(Version 1.1, 30 September 2019), published by AQA. This guide covers 4.2.3 Domestic uses and safety.
