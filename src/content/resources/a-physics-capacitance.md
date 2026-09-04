---
title: "Capacitance"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Capacitance"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 19.1
syllabusTopics:
  - qualification: "a-level"
    topic: "a-capacitance"
    subtopic: "a-capacitors-and-capacitance"
  - qualification: "a-level"
    topic: "a-capacitance"
    subtopic: "a-energy-stored-in-a-capacitor"
  - qualification: "a-level"
    topic: "a-capacitance"
    subtopic: "a-discharging-a-capacitor"
description: "Capacitors and the definition of capacitance, capacitor combinations, energy stored in a charged capacitor, and the exponential discharge of a capacitor through a resistor, for Cambridge International AS & A Level Physics 9702."
author: "iftikhar-azeemi"
reviewer: "iftikhar-azeemi"
publishedDate: 2026-08-18
updatedDate: 2026-08-18
featured: false
---

This guide covers Topic 19, Capacitance, in full — subtopics **19.1
Capacitors and capacitance**, **19.2 Energy stored in a capacitor** and
**19.3 Discharging a capacitor** — from Cambridge International AS & A
Level Physics 9702, 2025–2027 series. This is A Level content, building
directly on uniform electric fields from Topic 18.

## Before studying this

This resource assumes uniform electric fields from [Electric
Fields](/resources/a-physics-electric-fields/), and D.C. circuit analysis
from [D.C. Circuits: Kirchhoff's Laws and Potential
Dividers](/resources/as-physics-dc-circuits/).

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL PHYSICS 9702 — A Level, Topic 19**

**19.1 Capacitors and capacitance** — defining capacitance as C = Q/V;
recalling and using C = Q/V; deriving, using the formula for capacitors in
series and in parallel, and using these formulas for capacitor networks;
describing the action of a capacitor in a simple circuit.

**19.2 Energy stored in a capacitor** — recalling and using the fact that
the area under a potential–charge graph is the energy stored; deriving,
using the area under a potential–charge graph, the equation
W = ½QV = ½CV²; recalling and using W = ½QV = ½CV².

**19.3 Discharging a capacitor** — analysing graphically the discharge of
a capacitor through a resistor; recalling and using τ = RC for the time
constant of a discharging (or charging) circuit; recalling and using
equations of the form x = x₀e^(−t/RC) where x could represent current,
charge or voltage in a discharging capacitor circuit.

## Capacitors and capacitance

A **capacitor** stores charge on two conducting plates separated by an
insulator. Its **capacitance** C is defined as the charge stored per unit
potential difference across it:

```
C = Q/V
```

Capacitance is measured in farads (F), where 1 F = 1 C V⁻¹.

## Capacitors in series and parallel

For capacitors connected in **series**, the reciprocals of the individual
capacitances add:

```
1/C = 1/C₁ + 1/C₂ + ...
```

For capacitors connected in **parallel**, the capacitances themselves add
directly:

```
C = C₁ + C₂ + ...
```

This is the reverse pattern from resistors: resistors in series add
directly, while capacitors in series add reciprocally, and vice versa for
parallel.

## Energy stored in a capacitor

As a capacitor charges, the potential difference across it rises as charge
accumulates, so the work done to add each successive increment of charge is
not constant. Plotting potential difference V against charge Q gives a
straight line through the origin, and the energy stored is the area under
this graph (a triangle):

```
W = ½QV
```

Substituting Q = CV gives an equivalent form:

```
W = ½CV²
```

**Worked example.** A 470 μF capacitor is charged to 12 V. The energy
stored:

```
W = ½CV² = 0.5 × 470 × 10⁻⁶ × 12² = 0.0338 J
```

## Discharging a capacitor

When a charged capacitor discharges through a resistor, the current, charge
and voltage all decay **exponentially** with time:

```
x = x₀ e^(−t/RC)
```

where x can represent current I, charge Q, or voltage V, and x₀ is its
initial value. The quantity RC is called the **time constant**, τ:

```
τ = RC
```

The time constant is the time taken for the quantity to fall to 1/e (about
37%) of its initial value, and gives a measure of how quickly a capacitor
discharges through a given resistance: a larger RC means slower discharge.

## Charging a capacitor

Charging is the reverse process. Charge and p.d. **rise** towards their
final value:

```
Q = Q₀(1 − e^(−t/RC))
```

while the current **decays** exponentially, starting at its maximum value
V₀/R (when the capacitor is uncharged and offers no opposing p.d.) and
falling towards zero as the capacitor's own p.d. increasingly opposes the
supply:

```
I = I₀ e^(−t/RC)
```

**Current always decays exponentially in both charging and discharging** —
the difference is what charge and p.d. do: they rise during charging and
fall during discharging. The time constant τ = RC has exactly the same
meaning in both cases, and is independent of the capacitor's initial
charge.

## Common mistakes

- **Using the resistor-style formula for capacitors in series or parallel**
— the rules are reversed compared with resistors.
- **Using W = QV instead of W = ½QV**, forgetting the factor of ½ that
comes from the linearly rising voltage during charging.
- **Assuming discharge is linear rather than exponential** — current,
charge and voltage all fall off exponentially, never reaching exactly zero
in a finite time.
- **Confusing the time constant τ = RC with the time for complete
discharge** — τ is the time to fall to 1/e of the initial value, not the
total discharge time.
- **Assuming charge or current rises linearly during charging** — the
current decays exponentially even while the charge is rising, since it is
the *rate* of charge delivery that falls as the capacitor's own p.d.
increasingly opposes the supply.

## Quick revision checklist

- C = Q/V, and combining capacitors in series (reciprocal) and parallel (direct)
- W = ½QV = ½CV² for energy stored, from the area under a V-Q graph
- x = x₀e^(−t/RC) for exponential discharge of current, charge or voltage
- Q = Q₀(1 − e^(−t/RC)) for charge rising during charging, while current still decays exponentially
- τ = RC as the time constant, with the same meaning in charging and discharging

## Related resources

- [Electric Fields](/resources/a-physics-electric-fields/) — the previous A Level topic
- [Magnetic Fields](/resources/a-physics-magnetic-fields/) — the next A Level topic
- [Cambridge AS & A Level Physics hub](/boards/cambridge/a-level/physics/)

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027
series. Always check the current syllabus for your examination year.*
