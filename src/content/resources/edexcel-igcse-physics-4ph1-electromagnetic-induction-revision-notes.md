---
title: "Pearson Edexcel International GCSE Physics (4PH1): Electromagnetic induction -- Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes for Edexcel 4PH1 sub-topic 6d: induced voltage, generators, transformers, turns ratio, VpIp = VsIs and transmission, with a self-test."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-17
featured: false
---

Condensed notes for sub-topic **6(d) Electromagnetic induction**
(statements 6.15 to 6.20) of Pearson Edexcel International GCSE Physics
(4PH1). Transformer content (6.17P to 6.20P) is Physics-only and assessed
on Paper 2P. Full explanations are in the
[Electromagnetic induction study guide](/resources/edexcel-igcse-physics-4ph1-electromagnetic-induction/).

## When is a voltage induced?

- When a conductor **moves through** a magnetic field (cuts field lines).
- When the magnetic field **through a coil changes**.
- Complete circuit → induced current flows.
- No relative movement, no change → **no** induced voltage.

**Size increases with:** faster movement; stronger magnet; more turns on the coil; iron core in the coil.

**Direction reverses when:** the motion reverses; the magnet's pole is swapped.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-electromagnetic-induction--01-coil-and-meter-induction.webp" width="900" height="760" alt="A magnet and a coil joined to a centre-zero meter in five cases: pushing the N pole in deflects the needle one way, holding still gives zero, pulling out deflects it the other way, pushing the S pole in reverses it, and moving faster gives a larger deflection." loading="lazy">
  <figcaption>A voltage is induced only while the field through the coil is changing.</figcaption>
</figure>

## Generators

| Type | What moves | Output |
|---|---|---|
| Magnet in a coil | Magnet rotates; poles sweep past the coil | a.c. |
| Coil in a field | Coil rotates between magnet poles | a.c. (reverses every half turn) |

- Voltage is maximum when the coil's sides cut across the field at right angles; zero at the instant they move along it.
- Faster rotation → larger peak voltage **and** higher frequency.
- Stronger field or more turns → larger peak voltage, same frequency.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-electromagnetic-induction--02-two-kinds-of-generator.webp" width="900" height="600" alt="Left: a bar magnet rotates inside a coil connected to a voltmeter. Right: a coil rotating between N and S poles, seen end-on; when the coil is horizontal its sides move at right angles to the field and the voltage is greatest, and when vertical they move along the field and the voltage is zero." loading="lazy">
  <figcaption>Rotation keeps the field through the coil changing, so an alternating voltage is induced.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-electromagnetic-induction--03-generator-output-and-factors.webp" width="900" height="745" alt="Voltage against time for a rotating coil: a wave that is greatest when the coil is horizontal, zero when it is vertical, and reverses every half turn. Small graphs: faster rotation gives a bigger peak and more cycles; a stronger field or more turns gives a bigger peak at the same frequency." loading="lazy">
  <figcaption>Faster rotation raises both peak voltage and frequency; a stronger field or more turns raises only the peak.</figcaption>
</figure>

## Transformers (P)

**Structure:** primary coil (to a.c. supply) + secondary coil (to load) + soft iron core.

**How it works:**

1. a.c. in the primary coil
2. → changing magnetic field in the iron core
3. → changing field through the secondary coil
4. → alternating voltage induced in the secondary

- **d.c. will not work:** a steady field induces nothing.
- **Step-up:** Ns > Np, so Vs > Vp. **Step-down:** Ns < Np, so Vs < Vp.

**Equations (both must be recalled):**

```
Vp / Vs = Np / Ns
Vp × Ip = Vs × Is      (100% efficient)
```

Voltage up by a factor → current down by the same factor.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-electromagnetic-induction--04-transformer-structure.webp" width="900" height="780" alt="A soft iron core with a primary coil on one side connected to an a.c. supply and a secondary coil with more turns on the other side connected to a load. Step-up transformers have more secondary turns; step-down have fewer." loading="lazy">
  <figcaption>Alternating current in the primary makes a changing field that induces a voltage in the secondary.</figcaption>
</figure>

## Transmission (P)

- Step-up transformer at the power station → very high voltage in the cables.
- Same power (P = V × I) at higher voltage → **lower current**.
- Lower current → **less heating** of the cables → less energy wasted.
- Step-down transformers near users → safer voltage for homes.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-electromagnetic-induction--06-transmission-step-up-step-down.webp" width="900" height="660" alt="A power station generates at tens of kilovolts; a step-up transformer raises this to hundreds of kilovolts for the lines; a step-down transformer lowers it for homes. Sending 100 MW at 25 kV needs 4000 A, but at 400 kV only 250 A." loading="lazy">
  <figcaption>Same power at a higher voltage means a smaller current and less heating in the cables.</figcaption>
</figure>

## Quick calculation pattern

*Illustrative figures.* A transformer has 500 primary turns, 25 secondary turns and a 240 V primary.

- Vs = 240 × 25 / 500 = **12 V** (step-down by a factor of 20).
- If Is = 3.0 A and it is 100% efficient: Ip = (12 × 3.0) / 240 = **0.15 A**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-electromagnetic-induction--05-transformer-worked-examples.webp" width="900" height="520" alt="Example 1: with 2000 primary turns, 230 V in and 11.5 V out, Ns = 2000 × 11.5 / 230 = 100 turns. Example 2: 12 V at 2.0 A is 24 W, so the primary current from 230 V is 24 / 230 = 0.10 A." loading="lazy">
  <figcaption>Use the turns ratio for voltages and power in = power out for currents.</figcaption>
</figure>

## Key terms

| Term | Meaning |
|---|---|
| Electromagnetic induction | Producing a voltage by relative movement of a conductor and a field, or by a changing field |
| Induced voltage | The voltage produced by electromagnetic induction |
| Generator | Device that rotates a magnet or coil to induce an alternating voltage |
| Primary coil | Input coil of a transformer, connected to the a.c. supply |
| Secondary coil | Output coil of a transformer, connected to the load |
| Turns ratio | Np : Ns, equal to Vp : Vs |
| Step-up transformer | More secondary turns; raises voltage, lowers current |
| Step-down transformer | Fewer secondary turns; lowers voltage, raises current |

## Exam traps

- "A magnet inside a coil induces a voltage": only if it moves or the field changes.
- Upside-down ratios: the side with more turns always has the larger voltage.
- Step-up does **not** increase power; it trades current for voltage.
- High-voltage transmission lowers **current**, not resistance.
- Missing the iron core, or saying the coils are wired together.
- Answering "rotate faster" without also noting the frequency rises, when the question asks about the output trace.

## Self-test

1. State two ways of inducing a voltage in a coil.
2. A magnet rests inside a coil connected to a meter. What does the meter read? Why?
3. Give three ways of increasing the voltage induced when a magnet is pushed into a coil.
4. Why is the output of a simple generator alternating?
5. A generator's coil is rotated twice as fast. Describe two changes to the output.
6. Name the three parts of a transformer.
7. Explain why a transformer will not work from a battery.
8. A transformer has 1200 primary turns and 60 secondary turns. The primary voltage is 230 V. Calculate the secondary voltage.
9. Is the transformer in question 8 step-up or step-down?
10. A 100% efficient transformer has Vp = 11 000 V, Vs = 230 V, Is = 50 A. Calculate Ip.
11. Explain why electricity is transmitted at high voltage.
12. Why are step-down transformers needed before electricity reaches homes?

## Answers

1. Move a magnet into or out of the coil (relative movement); change the magnetic field through the coil (for example, switch a nearby electromagnet on or off).
2. Zero: the field through the coil is not changing, so no voltage is induced.
3. Push it in faster; use a stronger magnet; use a coil with more turns.
4. Each side of the coil (or each pole of the magnet) moves first one way through the field and then the other, so the induced voltage keeps reversing.
5. The peak voltage increases; the frequency doubles.
6. Primary coil, secondary coil, soft iron core.
7. A battery gives d.c., which produces a steady magnetic field; a steady field induces no voltage in the secondary.
8. Vs = 230 × 60 / 1200 = 11.5 V.
9. Step-down (fewer secondary turns).
10. Ip = (230 × 50) / 11 000 = 1.05 A, so about 1.0 A.
11. For a given power, a higher voltage means a lower current; a lower current heats the cables less, so less energy is wasted.
12. The transmission voltage is far too high to be used safely in homes, so it is reduced to a safer value.

## Frequently asked questions

**Is the generator content Physics-only in 4PH1?**
No. Statements 6.15 and 6.16, on induced voltage and generators, are core. Only the transformer statements, 6.17P to 6.20P, carry a "P" reference.

**Do I need to know about laminated cores?**
The specification asks for the structure of a transformer, which is two coils on an iron core. Laminations are useful background but are not named in the statements.

Next, try the
[Electromagnetic induction practice questions](/resources/edexcel-igcse-physics-4ph1-electromagnetic-induction-practice/).
