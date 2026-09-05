---
title: "Alternating Currents"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Alternating currents"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 21.1
syllabusTopics:
  - qualification: "a-level"
    topic: "a-alternating-currents"
    subtopic: "a-characteristics-of-alternating-currents"
  - qualification: "a-level"
    topic: "a-alternating-currents"
    subtopic: "a-rectification-and-smoothing"
description: "Characteristics of alternating currents and voltages, root-mean-square values and power, and rectification and smoothing, for Cambridge International AS & A Level Physics 9702."
author: "iftikhar-azeemi"
reviewer: "iftikhar-azeemi"
publishedDate: 2026-08-18
updatedDate: 2026-08-18
featured: false
---

This guide covers Topic 21, Alternating currents, in full — subtopics
**21.1 Characteristics of alternating currents** and **21.2 Rectification
and smoothing** — from Cambridge International AS & A Level Physics 9702,
2025–2027 series. This is A Level content, building directly on
electromagnetic induction from Magnetic Fields and capacitor behaviour from
Capacitance. It also recaps transformers and power transmission, which the
syllabus assumes from IGCSE/O Level Physics rather than listing as new
Topic 21 outcomes -- included here as prerequisite context, not as part of
the Topic 21 coverage itself.

## Before studying this

This resource assumes electromagnetic induction from [Magnetic
Fields](/resources/a-physics-magnetic-fields/), and capacitor charging and
discharging from [Capacitance](/resources/a-physics-capacitance/).

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL PHYSICS 9702 — A Level, Topic 21**

**21.1 Characteristics of alternating currents** — understanding and using
the terms period, frequency and peak value as applied to an alternating
current or voltage; using equations of the form x = x₀ sin ωt to represent
a sinusoidally alternating current or voltage; recalling and using the fact
that the mean power in a resistive load is half the maximum power for a
sinusoidal alternating current; distinguishing between r.m.s. and peak
values, and recalling and using Iᵣₘₛ = I₀/√2 and Vᵣₘₛ = V₀/√2 for a
sinusoidal alternating current or voltage.

**21.2 Rectification and smoothing** — distinguishing **graphically**
between half-wave and full-wave rectification; explaining the use of a
single diode for the half-wave rectification of an alternating current;
explaining the use of four diodes (a bridge rectifier) for full-wave
rectification; analysing the effect of a single capacitor in smoothing,
including the effect of the values of capacitance and the load
resistance.

## Alternating current and voltage

An **alternating current** (a.c.) periodically reverses direction, unlike
the constant, one-directional flow of direct current (d.c.). For a
sinusoidal a.c. supply, current and voltage each have a **peak value** (I₀
or V₀), and vary continuously with time at a given **frequency** and
**period**. The instantaneous value at time t is given by an equation of
the form:

```
x = x0 sin(omega t)          omega = 2*pi*f = 2*pi/T
```

where x stands for the instantaneous current or voltage, x₀ its peak value,
ω the angular frequency (rad s⁻¹), f the frequency and T the period. At
t = 0 the quantity is momentarily zero and rising; a quarter-period later
(ωt = π/2) it reaches its peak x₀.

**Worked example.** A sinusoidal current has peak value 5.0 A and frequency
50 Hz. Find its instantaneous value 2.0 ms after it was last zero and
rising.

```
omega = 2*pi*f = 2*pi(50) = 314 rad/s
x = x0 sin(omega t) = 5.0 sin(314 x 0.0020) = 5.0 sin(0.628 rad) = 5.0 x 0.588 = 2.9 A
```

## Root-mean-square values

Because instantaneous current and voltage in an a.c. supply are constantly
changing (and average to zero over a full cycle), a more useful measure is
the **root-mean-square (r.m.s.) value** — the direct current (or voltage)
that would produce the same average power dissipation in a resistor as the
alternating supply:

```
Iᵣₘₛ = I₀ / √2       Vᵣₘₛ = V₀ / √2
```

These relationships hold specifically for a sinusoidal alternating supply.
A domestic mains supply rating (e.g. 230 V) is always quoted as an r.m.s.
value, not a peak value.

**Worked example.** A sinusoidal supply has a peak voltage of 325 V. Its
r.m.s. voltage:

```
Vᵣₘₛ = V₀/√2 = 325/√2 ≈ 230 V
```

This is exactly the r.m.s. voltage of a standard 230 V mains supply.

## Power in a resistive load

Because power dissipated in a resistor is proportional to the square of
current (or voltage), and the square of a sinusoidal quantity averages to
half its peak-squared value over a cycle, the mean power delivered to a
resistive load by a sinusoidal a.c. supply is exactly half the maximum
(instantaneous peak) power:

```
Pₐᵥₑᵣₐgₑ = ½ P₀
```

This is consistent with, and can be verified using, the r.m.s. current and
voltage values directly in P = IᵣₘₛVᵣₘₛ.

## Transformers and power transmission (prerequisite knowledge)

The current (2025-2027) Cambridge 9702 syllabus does not list transformers
among the Topic 21 outcomes above -- it only assumes, from IGCSE/O Level
Physics or equivalent, an understanding of the practical and economic
advantages of transmitting power at high voltage. Transformers themselves
are IGCSE/O Level content, not something newly examined here. This section
recaps that assumed background, since it underpins *why* power transmission
matters and is routinely needed to answer A Level questions that build on
it, but it is not itself an outcome of Topic 21.

A **transformer** changes the voltage of an alternating supply while (ideally) conserving power:

```
N_s / N_p = V_s / V_p          I_p V_p = I_s V_s  (ideal, 100% efficient)
```

A **step-up** transformer increases voltage and decreases current in the same proportion; a **step-down** transformer does the reverse. The operating principle is electromagnetic induction: an alternating current in the primary coil produces a continuously changing magnetic flux in the soft-iron core, and this changing flux links the secondary coil, inducing an alternating e.m.f. there via Faraday's law. **A transformer cannot work on direct current** — a steady current produces a constant flux with no rate of change, so no e.m.f. is induced in the secondary. This is a common point of confusion when transformer background is drawn into an A Level question.

Real transformers lose some power, through **eddy currents** (reduced by laminating the core into insulated layers), **resistive (I²R) heating** in the windings (reduced with thick, low-resistance wire), **hysteresis** (energy needed to repeatedly re-magnetise the core, reduced by using a soft iron core), and **flux leakage** (reduced by a well-designed, fully linked core).

**Power transmission** is why transformers matter beyond the laboratory. Electricity is transmitted at **high voltage and low current**, because the power lost as heat in the cables is `I²R` — it depends on the **square of the current**, not the voltage. Stepping the transmission voltage up by a factor of 10 divides the current by 10 for the same power delivered, and so cuts the transmission loss by a factor of 100. Stating the reason in terms of current squared, rather than voltage, is what earns the explanation mark.

## Rectification

**Rectification** converts alternating current into a current that flows in
one direction only (unidirectional, though not necessarily constant). The
syllabus specifically requires distinguishing half-wave from full-wave
rectification **graphically** — by the shape of the output against time —
not only in words, so picture (or sketch) each of the following against the
same sinusoidal input:

- **Input**: a smooth sine wave, equal positive and negative half-cycles,
crossing zero twice per period.
- **Half-wave output** (single diode): only the positive half-cycles
survive, each an unmodified hump of the original sine shape; the negative
half-cycles are cut to zero entirely, leaving a flat gap of zero output for
half of every period.
- **Full-wave output** (bridge of four diodes): every half-cycle produces a
hump — the negative half-cycles are inverted onto the positive side instead
of being blocked — so the output is a continuous train of humps at twice
the frequency of the half-wave case, with no flat gaps at zero.

**Half-wave rectification** uses a single diode, which only allows current
to flow during the half of each cycle when it is forward-biased, blocking
the reverse half entirely — so current flows in pulses, with a gap between
each. **Full-wave rectification** uses four diodes in a bridge arrangement,
which route current through the load in the same direction on both halves
of the input cycle, so current flows during both halves, producing pulses
with no gaps, giving a smoother, more continuous output for the same
input.

## Smoothing

Even full-wave rectified output still varies significantly between pulses.
A **capacitor** connected across the load smooths this variation: it
charges up during each pulse and discharges gradually between pulses,
reducing the fall in voltage that would otherwise occur. Increasing the
smoothing capacitance, or increasing the load resistance, both increase the
time constant of the discharge (τ = RC), so the voltage falls more slowly
between pulses and the output is smoother.

## Common mistakes

- **Using peak values where r.m.s. values are required (or vice versa)** —
mains ratings, and most quoted a.c. values, are r.m.s. unless stated
otherwise.
- **Assuming average power equals peak power** for a sinusoidal a.c. supply
— it is exactly half the peak power.
- **Confusing half-wave and full-wave rectification**, or forgetting that
half-wave rectification leaves gaps in the output where full-wave does not.
- **Thinking a larger smoothing capacitor removes ripple completely** — it
reduces the ripple, governed by the time constant RC, but does not produce a
perfectly constant output.

## Quick revision checklist

- x = x₀ sin ωt for a sinusoidal a.c. supply, with ω = 2πf = 2π/T
- Iᵣₘₛ = I₀/√2 and Vᵣₘₛ = V₀/√2 for a sinusoidal a.c. supply
- Mean power in a resistive load = half the peak power
- Half-wave rectification (single diode, gaps) vs full-wave (bridge of four diodes, no gaps) -- know the graphical shape of each output, not just the description
- Smoothing with a capacitor, and how R and C affect the ripple via τ = RC
- Transformers and power transmission are prerequisite (IGCSE/O Level) background, not new Topic 21 outcomes

## Related resources

- [Magnetic Fields](/resources/a-physics-magnetic-fields/) — the previous A Level topic
- [Quantum Physics](/resources/a-physics-quantum-physics/) — the next A Level topic
- [Cambridge AS & A Level Physics hub](/boards/cambridge/a-level/physics/)

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027
series. Always check the current syllabus for your examination year.*
