---
title: "OxfordAQA International GCSE Physics: Transformers and the National Grid (9203) -- Revision Notes"
seoTitle: "OxfordAQA IGCSE Physics Transformers Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on transformers, the grid, turns ratios and switch mode transformers for OxfordAQA International GCSE Physics, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
These notes condense section 3.6.2 (electricity transmission and distribution) of the OxfordAQA International GCSE Physics (9203) specification, for exams May/June 2018 onwards. For full explanations read the [study guide](/resources/oxfordaqa-igcse-physics-transformers-and-the-national-grid/), then test yourself with the [practice questions](/resources/oxfordaqa-igcse-physics-transformers-and-the-national-grid-practice/).

Other useful pages: the [course hub](/boards/oxfordaqa/igcse/physics/), the [printable checklist](/checklists/oxfordaqa/igcse/physics/), the [10-minute diagnostics](/diagnostics/) and the [exam preparation page](/resources/oxfordaqa-igcse-physics-exam-preparation/).

## The system in one line

Power station, then step-up transformer, then transmission cables, then step-down transformer(s), then consumers. Transformers are at both ends of the cables (3.6.2 a). Be ready to label an unlabelled diagram of this chain.

## Why high voltage (3.6.2 b)

Say it as a chain, every link:

1. Power = potential difference × current, so for the same power a higher voltage means a lower current.
2. A lower current means less heating in the resistance of the cables.
3. Less energy is wasted as heat, so the system is more efficient.

Extra detail you can use: the power lost in a cable is I² × R, so halving the current cuts the loss to one quarter.

## Transformer structure and operation (3.6.2 c)

| Part | What it is |
| --- | --- |
| Primary coil | Input coil, connected to the supply |
| Secondary coil | Output coil, connected to the load |
| Soft iron core | Joins the coils magnetically and carries the changing field |

**Operation in steps**

1. Alternating current in the primary coil gives a changing magnetic field.
2. The field in the iron core also passes through the secondary coil.
3. The changing field induces a changing potential difference across the secondary coil.
4. In a complete circuit, an alternating current flows in the secondary coil.

Laminations and eddy currents are not required. A transformer needs ac (or a changing current) because only a changing field induces a potential difference.

## Step-up and step-down (3.6.2 d)

| Type | Vs compared with Vp | Turns | Where used |
| --- | --- | --- | --- |
| Step-up | Vs greater than Vp | ns greater than np | Before the distribution lines |
| Step-down | Vs less than Vp | ns less than np | At the end, for a safer voltage for local consumers |

## Formulas (3.6.2 e and f)

| Relationship | Equation | Use when |
| --- | --- | --- |
| Turns ratio | Vp / Vs = np / ns | Finding a voltage or a number of turns |
| 100% efficient transformer | Vp × Ip = Vs × Is | Finding a current |
| Power | P = V × I | Finding current from power |
| Cable heating | power lost = I² × R | Comparing losses |

The turns ratio is selected to produce the required output from the input.

## Method in steps: turns ratio

1. Write the equation Vp / Vs = np / ns.
2. Put in the three values you know with units.
3. Rearrange for the unknown.
4. Check the direction: more turns on the secondary means a bigger secondary voltage.

**Reminder.** A transformer has Vp = 1500 V, np = 600 and Vs = 75 V. Find ns.

```
ns = np × Vs / Vp = 600 × 75 / 1500 = 30 turns
```

The primary-to-secondary ratio is 20 : 1, so this is a step-down transformer.

## Method in steps: current across a transformer

1. Find the power from the side you know: P = V × I.
2. For a 100% efficient transformer the other side has the same power.
3. Divide by the voltage on that side.

**Reminder.** A 100% efficient step-down transformer delivers 6.0 V at 2.0 A. The primary voltage is 12 V. Power is 6.0 × 2.0 = 12 W, so Ip = 12 / 12 = 1.0 A. Note that the primary current is smaller than the secondary current because the voltage was higher.

## Switch mode transformers (3.6.2 g)

- High frequency, often between 50 kHz and 200 kHz.
- Much lighter and smaller than traditional transformers that work from a 50 Hz mains supply, so useful in applications such as mobile phone chargers.
- Use very little power when switched on but with no load applied.

## Must-know distinctions

| Pair | Difference |
| --- | --- |
| Primary and secondary | Input coil and output coil |
| Step-up and step-down | Output voltage greater than input, or less than input |
| Voltage and current across a transformer | One goes up as the other goes down, with power unchanged for a 100% efficient transformer |
| Transmission cable and local distribution | High voltage over long distances, then lowered to a safer voltage for consumers |
| Traditional and switch mode | 50 Hz mains and heavy, or high frequency, light and small |

## Method in steps: comparing cable losses

1. Convert the power and voltages to W and V.
2. Find each current from I = P / V.
3. Find each loss from I² × R, or compare the currents and square the ratio.
4. Finish with a sentence saying which is more efficient and why.

**Reminder.** A farm sends 2.7 MW through a cable of resistance 3.0 Ω. At 90 kV the current is 2 700 000 / 90 000 = 30 A, so the loss is 30² × 3.0 = 2700 W. At 270 kV the current is 10 A, so the loss is 10² × 3.0 = 300 W. Tripling the voltage cut the current to one third and the loss to one ninth.

## Command words for this unit

| Command word | What your answer needs |
| --- | --- |
| Label | Name each part of the chain in the right place on the diagram |
| State | A short fact, such as the three features of a switch mode transformer |
| Describe | What a transformer is made of and what happens in it, in order |
| Explain | A reason joined to a cause, such as high voltage, then low current, then less heating |
| Calculate | Equation, substitution, answer with unit |

## Answer templates

**Why is electricity transmitted at a high voltage?** For a given power, a high voltage means a low current. A low current heats the cables less. Less energy is lost, and efficiency rises.

**How does a transformer work?** The primary coil carries an alternating current, so the magnetic field in the soft iron core keeps changing. The core links this field to the secondary coil, where a changing potential difference is induced. A complete circuit lets an alternating current flow there.

**Why is a step-down transformer used near homes?** To reduce the potential difference to a safer value for local consumers.

## Quick self-test

1. A transformer has 920 turns on the primary and 40 turns on the secondary. The primary voltage is 230 V. Find the secondary voltage.
2. A transformer with 50 turns on the primary is connected to 12 V. The output is 480 V. How many turns are on the secondary?
3. A 100% efficient transformer supplies 9.0 W at 150 V. What is the secondary current?
4. A 100% efficient transformer has a primary of 150 V and 0.20 A. The secondary is 6.0 V. Find the secondary current.
5. For the same power, the transmission voltage is raised four times. By what factor does the cable current change, and what happens to the heat loss?
6. Name the three main parts of a basic transformer.
7. Why does a transformer not work when its primary is connected to a battery with a steady current?
8. Is the transformer in question 2 step-up or step-down? Give a reason.
9. State two features of a switch mode transformer that make it useful in a phone charger.
10. State where step-down transformers are used in the grid, and why.

### Answers

1. Vs = Vp × ns / np = 230 × 40 / 920 = **10 V**.
2. ns = np × Vs / Vp = 50 × 480 / 12 = **2000 turns**.
3. Is = P / V = 9.0 / 150 = **0.060 A**.
4. Input power = 150 × 0.20 = 30 W. Is = 30 / 6.0 = **5.0 A**.
5. The current falls to one quarter. The loss (I² R) falls to one sixteenth, because (1/4)² = 1/16.
6. Primary coil, secondary coil and a soft iron core.
7. Direct current from a battery gives a field that stays constant. Only a changing field induces a potential difference in the secondary coil.
8. Step-up: the output (480 V) is greater than the input (12 V), and the secondary has more turns.
9. Any two of: much lighter and smaller than a traditional transformer, uses very little power when switched on with no load, operates at high frequency (50 kHz to 200 kHz).
10. At the end of the distribution, to reduce the voltage to a safer value for local consumers.

## Where marks are usually lost

- Leaving out the link between high voltage and low current in an answer on grid losses.
- Calling the output coil "the primary", or the reverse.
- Writing that a step-up transformer "increases the power" or "makes more energy".
- Inverting the turns ratio and getting a step-up answer for a step-down transformer.
- Forgetting to convert kV or MW before substituting.
- Giving no unit, or the wrong unit (watts for current, for example).
- Saying a transformer can run from a battery without mentioning the changing field.
- Listing only "it is smaller" for switch mode transformers without relating it to the phone charger or to no-load power.
- Not labelling transformers as step-up or step-down on a grid diagram.

## Official syllabus

OxfordAQA International GCSE Physics (9203), specification for exams May/June 2018 onwards, published by OxfordAQA, section 3.6.2.
