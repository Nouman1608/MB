---
title: "OxfordAQA International GCSE Physics: Transformers and the National Grid (9203)"
seoTitle: "OxfordAQA IGCSE Physics Transformers Study Guide"
resourceType: "study-guides"
subject: "physics"
level: ["igcse"]
topic: "Transformers and the National Grid"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9203"]
syllabusSeries: "For exams May/June 2018 onwards"
order: 91
syllabusTopics:
  - qualification: "igcse"
    topic: "generating-and-distributing-electricity-and-household-use"
    subtopic: "electricity-transmission-and-distribution"
description: "Study guide to electricity transmission and distribution for OxfordAQA International GCSE Physics: transformers, turns ratios, grid losses and switch mode."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
This guide covers section 3.6.2 (electricity transmission and distribution) of the OxfordAQA International GCSE Physics (9203) specification, for exams May/June 2018 onwards. It teaches every statement a to g from scratch, with worked examples. The qualification is untiered, so there is one route through the content.

Links: [revision notes](/resources/oxfordaqa-igcse-physics-transformers-and-the-national-grid-revision-notes/), [practice questions](/resources/oxfordaqa-igcse-physics-transformers-and-the-national-grid-practice/), [course hub](/boards/oxfordaqa/igcse/physics/), [printable checklist](/checklists/oxfordaqa/igcse/physics/) and the [10-minute diagnostics](/diagnostics/). For energy and power basics see the [energy revision notes](/resources/oxfordaqa-igcse-physics-energy-revision-notes/).

## What this unit covers

| Section | What you must be able to do |
| --- | --- |
| 3.6.2 a | Describe how electricity travels from power stations to consumers along transmission cables with transformers at both ends. Identify and label the essential parts of the system. |
| 3.6.2 b | Explain why a high distribution voltage reduces the current, cuts heating losses and makes the system more efficient. |
| 3.6.2 c | Describe the basic structure and operation of a transformer: primary coil, secondary coil, soft iron core. |
| 3.6.2 d | Distinguish step-up from step-down transformers and say where each is used. |
| 3.6.2 e | Use Vp / Vs = np / ns. |
| 3.6.2 f | Use Vp × Ip = Vs × Is for a 100% efficient transformer. Know that the turns ratio is chosen to give the output needed. |
| 3.6.2 g | State the features of switch mode transformers and why they suit mobile phone chargers. |

The specification says you do not need laminations or eddy currents in the core, so this guide leaves them out.

## 3.6.2 a: the system from power station to home

A power station generates electricity at a fairly modest potential difference. The energy then has to reach homes, schools and factories many kilometres away. The route has these essential parts, in order:

```
Power station (generator)
   -> step-up transformer
   -> transmission cables (overhead lines on pylons, or buried cables)
   -> step-down transformer(s)
   -> local distribution to consumers (homes, shops, factories)
```

Transformers sit at both ends of the transmission cables. The first one raises the potential difference. The last one lowers it again. If a question gives you a blank diagram with boxes, the box straight after the generator is a step-up transformer and the box just before the consumers is a step-down transformer. Put "transformer" alone and you have not said which way it works.

The cables carry alternating current. A transformer only works with a changing current, which is why the grid uses ac (see "How a transformer works" below).

## 3.6.2 b: why the grid uses a high voltage

Electrical power is potential difference multiplied by current: P = V × I. For a fixed power, raising V lowers I.

Every cable has resistance, so a current in it makes it hot. Energy transferred to heat in the cable is wasted. The rate of wasting is the power loss. Because V = I × R, the potential difference along the cable is I × R, so:

power lost in the cable = I × (I × R) = I² × R

The current is squared. Halve the current and the loss falls to a quarter. That is why a small rise in transmission voltage has a large effect.

**Worked example 1.** A wind farm delivers 4.8 MW into a cable of total resistance 2.5 Ω. Compare transmitting at 60 kV and at 120 kV.

```
At 60 kV:  I = P / V = 4 800 000 / 60 000 = 80 A
           loss = I² R = 80² × 2.5 = 16 000 W = 16 kW
At 120 kV: I = 4 800 000 / 120 000 = 40 A
           loss = 40² × 2.5 = 4 000 W = 4.0 kW
```

Doubling the voltage halved the current and cut the loss to one quarter. As a share of the 4.8 MW, the loss falls from 0.33% to 0.083%. The system is more efficient because less of the energy is wasted as heating in the cables.

A good written answer has a chain: higher voltage gives a lower current for the same power, which gives weaker heating of the cables, which means less wasted energy and higher efficiency. Missing one link is the usual way to lose credit.

Why not just use thick cables with low resistance instead? You could, but thick cables cost more and are heavy to hold up. Raising the voltage is the cheaper fix. (This is background, not something the specification asks you to state.)

## 3.6.2 c: structure and operation of a transformer

A basic transformer has three parts:

- a **primary coil**, wound on one side of the core and connected to the input supply
- a **secondary coil**, wound on another part of the core, where the output is taken
- a **soft iron core** that links the two coils.

The coils are insulated wires, and they are not connected electrically to each other. Only the core joins them magnetically.

How it works:

1. The alternating current in the primary coil sets up a magnetic field that keeps changing.
2. The soft iron core guides that field, so it links the secondary coil too.
3. A changing field through a coil induces a changing potential difference across its ends.
4. The secondary coil is part of a complete circuit, so an alternating current flows in it.

Soft iron is used because it is easily magnetised and demagnetised, so it follows the changing field. A steady direct current gives a steady field. A steady field does not change, so nothing is induced in the secondary coil. That is why a transformer will not run from a battery. (A battery connected to the primary produces a brief output only at the moment of switching on or off, while the field is changing.)

## 3.6.2 d: step-up and step-down

- In a **step-up transformer** the potential difference across the secondary coil is greater than across the primary coil.
- In a **step-down transformer** the potential difference across the secondary coil is less than across the primary coil.

Step-up transformers are used to increase the potential difference before the distribution lines. Step-down transformers are used at the end to produce a safer potential difference for local consumers. Do not write that a step-up transformer "creates extra energy". It raises the potential difference and lowers the current. The power does not rise.

## 3.6.2 e: the turns ratio

The potential differences across the coils are related to the number of turns on each:

```
Vp / Vs = np / ns
```

Vp and Vs are the potential differences across the primary and secondary coils. np and ns are the numbers of turns. More turns on the secondary than the primary gives a step-up transformer. Fewer turns gives a step-down transformer.

**Worked example 2.** A step-down transformer has a primary potential difference of 9000 V. The primary has 7200 turns and the secondary gives 225 V. Find the number of turns on the secondary.

```
Vp / Vs = np / ns
9000 / 225 = 7200 / ns
ns = 7200 × 225 / 9000 = 180 turns
```

The turns ratio np : ns is 40 : 1, the same as the voltage ratio 9000 : 225 = 40 : 1. As a check, the secondary has fewer turns and the output is smaller, which fits a step-down transformer.

Rearranging: Vs = Vp × ns / np, and ns = np × Vs / Vp. Choose the form that has your unknown on its own before you substitute.

The specification says the turns ratio is selected to produce the required output from the input. A designer picks np and ns to give the output potential difference needed from a known input.

## 3.6.2 f: power in and power out

For a 100% efficient transformer, the electrical power output equals the electrical power input. Vp and Ip are the power input (primary coil). Vs and Is are the power output (secondary coil):

```
Vp × Ip = Vs × Is
```

So if the voltage goes up, the current goes down by the same factor. A step-up transformer has a smaller current in its secondary coil than in its primary coil. This is exactly why the grid uses step-up transformers: it gets a high voltage and a low current.

Real transformers are slightly less than 100% efficient, and the equation is the ideal case you are told to use.

**Worked example 3.** A 100% efficient transformer has an input of 24 V and 2.5 A. Its output is 300 V. Find (a) the output current, (b) the turns ratio ns / np, and (c) ns if np = 72.

```
(a) input power = 24 × 2.5 = 60 W
    Is = 60 / 300 = 0.20 A
(b) ns / np = Vs / Vp = 300 / 24 = 12.5
(c) ns = 12.5 × 72 = 900 turns
```

The voltage went up 12.5 times and the current fell to 1/12.5 of its input. The power is the same, 60 W, at both coils.

## 3.6.2 g: switch mode transformers

Switch mode transformers:

- operate at a high frequency, often between 50 kHz and 200 kHz
- are much lighter and smaller than traditional transformers that work from a 50 Hz mains supply, which makes them useful for applications such as mobile phone chargers
- use very little power when they are switched on but no load is applied.

The last point means a phone charger left plugged in with no phone attached wastes very little energy. A traditional transformer that works from the 50 Hz mains supply is much heavier and larger. Do not claim more than the specification gives you: the three features above are what you must know.

**Worked example 4.** A phone charger delivers 5.0 V at 2.0 A from a 230 V supply. Taking the charger as 100% efficient, find the input current. Then compare the time for one cycle at 100 kHz with one cycle at 50 Hz.

```
output power = 5.0 × 2.0 = 10 W
Ip = 10 / 230 = 0.0435 A = 43 mA   (to 2 significant figures)
period at 100 kHz = 1 / 100 000 = 0.000 010 s = 10 microseconds
period at 50 Hz   = 1 / 50 = 0.020 s
```

One 50 Hz cycle lasts 2000 times as long as one 100 kHz cycle. The charger's input current is small because the input voltage is high.

## Common errors

- Writing "the transformer increases power". Power out cannot exceed power in.
- Mixing up primary and secondary. The primary is the input coil and the secondary is the output coil.
- Using a ratio the wrong way up. If the answer for a step-up transformer comes out smaller than the input, you have inverted it.
- Giving the explanation of grid losses without current. "High voltage means less loss" skips the reason.
- Saying transformers work with direct current.
- Forgetting units, or leaving kV unconverted: 120 kV is 120 000 V before you divide.

Try the [practice questions](/resources/oxfordaqa-igcse-physics-transformers-and-the-national-grid-practice/) next.

## Official syllabus

OxfordAQA International GCSE Physics (9203), specification for exams May/June 2018 onwards, published by OxfordAQA, section 3.6.2.
