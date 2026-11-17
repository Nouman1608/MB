---
title: "Pearson Edexcel International GCSE Physics (4PH1): Units for Magnetism and Electromagnetism"
resourceType: "study-guides"
subject: "physics"
level: ["igcse"]
topic: "Magnetism and electromagnetism"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4PH1"]
syllabusSeries: "Issue 4"
order: 6.1
syllabusTopics:
  - qualification: "igcse"
    topic: "magnetism-and-electromagnetism"
    subtopic: "units-magnetism"
description: "The units of Topic 6 in Edexcel IGCSE Physics 4PH1: amperes, volts and watts in electromagnets, induction and transformers, with worked examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-17
featured: false
---

This guide covers sub-topic **6(a) Units** of Topic 6, Magnetism and electromagnetism, in the Pearson Edexcel
International GCSE in Physics (4PH1), Issue 4. Statement 6.1 asks you to "use the following units: ampere (A), volt (V)
and watt (W)". For the physics these units describe, see the
[Magnetism and Electromagnetism study guide](/resources/edexcel-igcse-physics-magnetism-and-electromagnetism/).

## Why only three units?

Topic 6 is mostly explained in words and diagrams: field patterns, the left-hand rule, the factors that affect an
induced voltage. The calculations in the topic are concentrated in the transformer statements (6.19P and 6.20P,
Physics-only, so assessed on Paper 2), and those use only current, voltage and power. The three units are the same
ones you used in Topic 2; what is new is where they appear.

## Where each unit appears in Topic 6

| Unit | Quantity | Topic 6 context |
|---|---|---|
| ampere (A) | current, I | the current in a wire, coil or solenoid that produces a magnetic field (6.8); the current in an electromagnet (6.9P); the current whose size affects the force on a wire in a field (6.14); primary and secondary currents in a transformer (6.20P) |
| volt (V) | voltage, V | the voltage induced when a conductor moves through a field or a field changes through a coil (6.15, 6.16); input (primary) and output (secondary) voltages of a transformer (6.17P to 6.20P) |
| watt (W) | power, P | input and output power of a transformer, `V_p × I_p = V_s × I_s` for 100% efficiency (6.20P); the power of motors and generators |

## How the three units link

```
power = current × voltage        so   1 W = 1 A × 1 V
```

This comes from Topic 2, and it is the reason the transformer power equation works: `V_p × I_p` is the input power in
watts and `V_s × I_s` is the output power in watts. You can also see it from the definitions: an ampere is a coulomb
per second and a volt is a joule per coulomb, so volts × amperes = joules per second = watts.

The **turns ratio** has no unit. In

```
input (primary) voltage / output (secondary) voltage = primary turns / secondary turns
```

the right-hand side is a number of turns divided by a number of turns, so the left-hand side must also be a pure
number. That is why both voltages can be in V, or both in kV, as long as they match: the unit cancels.

## Prefixes you will meet

| Prefix | Symbol | Multiply by | Typical Topic 6 use |
|---|---|---|---|
| milli | m | 10⁻³ | mA for small currents; mV for the voltage induced by a magnet moving in a small coil |
| kilo | k | 10³ | kV for transmission voltages; kW for motors |
| mega | M | 10⁶ | MW for the output of a power station |

Remember that **m** (milli) and **M** (mega) differ by a factor of a thousand million. A reading of 25 mV on a
sensitive meter in an induction experiment is 0.025 V.

## Worked examples

**Worked example 1 (P): a step-down transformer.** A phone charger contains a transformer that steps 230 V mains down
to 5.0 V. The output current is 2.0 A. Assume the transformer is 100% efficient.

```
output power = V_s × I_s = 5.0 × 2.0 = 10 W
input power = output power = 10 W
input current I_p = 10 / 230 = 0.043 A = 43 mA
turns ratio = V_p / V_s = 230 / 5.0 = 46, so 46 primary turns for every secondary turn
```

The current on the low-voltage side is much **larger** than on the high-voltage side. For an ideal transformer,
stepping the voltage down by a factor of 46 steps the current up by the same factor.

**Worked example 2 (P): transmission.** The figures here are invented for practice. A power station generator
delivers 400 MW at 25 kV. A step-up transformer raises the voltage to 400 kV for transmission.

```
current at 25 kV:   I = P / V = 400 × 10⁶ / 25 × 10³ = 16 000 A
current at 400 kV:  I = P / V = 400 × 10⁶ / 400 × 10³ = 1000 A
voltage ratio = 400 / 25 = 16, so the secondary coil has 16 times as many turns as the primary
```

The same power is carried with a current sixteen times smaller. A smaller current heats the transmission cables much
less, so less energy is wasted: this is the reason for step-up transformers in large-scale transmission (6.18P).
Step-down transformers near homes then reduce the voltage again for safe use.

Notice the unit handling: 400 MW became 400 × 10⁶ W and 25 kV became 25 × 10³ V before dividing, so the current came
out in amperes.

**Worked example 3: a motor.** A small d.c. motor runs on 6.0 V and draws 0.50 A.

```
P = I × V = 0.50 × 6.0 = 3.0 W
energy transferred in 2.0 minutes = P × t = 3.0 × 120 = 360 J
```

**Worked example 4 (P): a real transformer.** A transformer has an input power of 12 W and an output power of
10.8 W. Its efficiency is `10.8 / 12 × 100% = 90%`. The equation `V_p × I_p = V_s × I_s` assumes 100% efficiency;
for a real transformer the output power is a little less than the input power, mainly because the coils and core
heat up.

## Checking your answer

- In a step-up transformer the output voltage is **bigger** than the input and the output current is **smaller**. In a
  step-down transformer, the reverse. If your answer goes the other way, you have inverted a ratio.
- For an ideal transformer, the output power cannot exceed the input power. If your output power is bigger, recheck.
- Mains-voltage currents for everyday devices are usually a few amperes or less; transmission currents are hundreds
  or thousands of amperes; induced voltages in a classroom coil are often only millivolts.

## Common mistakes

- Treating kV as V: 11 kV is 11 000 V, not 11 V.
- Using the turns ratio for currents the same way up as for voltages. From `V_p × I_p = V_s × I_s`, the current
  ratio is the **inverse** of the voltage ratio.
- Writing a turns ratio with a unit ("46 V" or "46 turns/V"); it is just a number.
- Giving power in amperes or voltage in watts: check that the unit matches the quantity.
- Using `P = I × V` with one value in kV and the other in mA and forgetting to convert either.
- Lower-case unit symbols: the ampere (A), volt (V) and watt (W) take capitals.

## Exam technique

- **Calculate:** write the equation, convert all prefixed values to A, V and W, substitute, then convert the answer to
  the unit asked for (kV, mA, MW) if needed.
- **State the unit** of a quantity: power in watts (W), voltage in volts (V), current in amperes (A).
- **Explain** why transmission uses high voltage: link a higher voltage to a smaller current for the same power, and
  a smaller current to less heating in the cables.
- When a question gives a transformer's turns and one voltage, and asks for a current, it is a two-step problem: find
  the second voltage from the turns ratio, then use `V_p × I_p = V_s × I_s`.

## Keep going

- [Units for Topic 6 revision notes](/resources/edexcel-igcse-physics-4ph1-units-magnetism-revision-notes/)
- [Units for Topic 6 practice questions](/resources/edexcel-igcse-physics-4ph1-units-magnetism-practice/)
- [Magnetism and Electromagnetism revision notes](/resources/edexcel-igcse-physics-magnetism-revision-notes/)

*Written against the Pearson Edexcel International GCSE in Physics (4PH1) specification, Issue 4. Always check the
current specification for your examination year.*
