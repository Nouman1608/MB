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
description: "Capacitance C = Q/V, capacitors in series and parallel, energy W = ½CV² and exponential RC discharge: Topic 19 of Cambridge A Level Physics 9702."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
reviewedDate: 2026-09-29
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
describing the action of a capacitor in a simple circuit; applying the
definition C = Q/V to an isolated spherical conductor to derive
C = 4πε₀r.

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

### The capacitance of an isolated sphere

The definition C = Q/V applies just as well to a single isolated charged
conducting sphere as to a pair of plates. An isolated sphere of radius r
carrying charge Q has surface potential V = Q/(4πε₀r) (from the electric
potential of a point charge, since the sphere behaves as a point charge at
its centre for points on or outside its surface), so its capacitance is:

```
C = Q/V = 4πε₀r
```

showing that the capacitance of an isolated sphere depends only on its
radius — larger spheres store more charge for the same potential.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--01-charge-flow-in-circuit.webp" width="900" height="1140" alt="Two circuits show a capacitor charging from a cell and discharging through a resistor. Teal arrows show electron flow round the circuit and gold arrows the conventional current, opposite in direction. No electrons cross the gap: charge is moved from one plate to the other by the circuit. The p.d. rises to the cell p.d. while charging and falls to zero while discharging." loading="lazy">
  <figcaption>Electrons move round the circuit, never across the gap, and the current reverses on discharge.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--04-dielectric-polar-molecules.webp" width="900" height="1090" alt="Polar molecules between capacitor plates point randomly with no field. When the plates are charged they line up, leaving layers of negative ends facing the positive plate and positive ends facing the negative plate. These layers reduce the net field, so the p.d. is smaller for the same charge and C = Q/V rises. For the lesson example, 916 pF with the dielectric against 398 pF in air." loading="lazy">
  <figcaption>Aligned polar molecules reduce the field, so the same charge gives a smaller p.d. and a larger capacitance.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--05-isolated-sphere-capacitance.webp" width="900" height="980" alt="Two isolated spheres with radii 0.10 m and 0.20 m are shown at the same potential, 1000 V. C = 4 pi epsilon0 r depends only on the radius, so the larger sphere has capacitance 22.2 pF against 11.1 pF and holds twice the charge, 22.2 nC against 11.1 nC." loading="lazy">
  <figcaption>The capacitance of an isolated sphere is proportional to its radius.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--03-series-parallel-capacitors.webp" width="900" height="1100" alt="The same two capacitors, 10 and 15 microfarad, are connected across 15 V. In series each holds 90 microcoulombs and the p.d.s (9.0 V and 6.0 V) add, giving 6.0 microfarad. In parallel each has 15 V and the charges (150 and 225 microcoulombs) add, giving 25 microfarad." loading="lazy">
  <figcaption>Series: same charge, p.d.s add, smaller C. Parallel: same p.d., charges add, larger C.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--02-energy-stored-vq-graph.webp" width="900" height="1010" alt="A straight V-Q graph from the origin has gradient 1/C. A thin strip is the work V delta Q and the triangle under the line is the energy stored, 1/2 QV = 1/2 CV^2 = Q^2/2C. For 470 microfarad at 12 V the energy is 33.8 mJ. OCR only: charging from a 12 V battery takes QV = 67.7 mJ, half stored and half lost as heat." loading="lazy">
  <figcaption>The energy stored is the area under the V-Q graph, half of QV.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--06-rc-charge-discharge-curves.webp" width="900" height="1130" alt="Against time in units of RC, charging makes Q and the capacitor p.d. rise towards their final values (63 percent at one RC) while the current and resistor p.d. fall from their maximum. V_R + V_C always equals V0. Discharging makes Q, V and I all fall with the same exponential shape (37 percent at one RC)." loading="lazy">
  <figcaption>Charge and p.d. rise or fall, but the current always decays exponentially.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--07-time-constant-tau.webp" width="900" height="930" alt="A discharge curve plotted against multiples of the time constant falls to 36.8, 13.5 and 5.0 percent at 1, 2 and 3 tau. The tangent at t = 0 meets the time axis at t = RC. For 470 microfarad and 33 kilohm tau is 15.5 s, and 37 percent is still left after one tau." loading="lazy">
  <figcaption>After one time constant a capacitor has not fully discharged: 37% remains.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--08-half-time-constant-ratio.webp" width="900" height="930" alt="An exponential decay halves in every equal time step T1/2 = 0.693 RC, wherever you start. For RC = 47 s, T1/2 is about 33 s. A straight-line fall loses a constant amount; a decay loses a constant fraction." loading="lazy">
  <figcaption>Each half-time halves the quantity, which is the constant-ratio property of exponential decay.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--09-ln-graph-find-rc.webp" width="900" height="1230" alt="Potential difference readings for a discharging capacitor lie on a curve. Plotting ln V against t gives a straight line of gradient minus 0.0500 per second, so RC = 20.0 s. With R = 100 kilohm, C = 200 microfarad. For charging, plot ln(V0 - V) instead." loading="lazy">
  <figcaption>A ln V against t graph is a straight line whose gradient is minus 1/RC.</figcaption>
</figure>


## Charging a capacitor (beyond 19.3 — background only, not examinable)

Subtopic 19.3 is titled "Discharging a capacitor" and the syllabus coverage above only requires the discharge form x = x₀e^(−t/RC); the charging equations below are included for context and conceptual completeness only, not as recall or exam-required material.

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
- C = 4πε₀r for an isolated spherical conductor
- W = ½QV = ½CV² for energy stored, from the area under a V-Q graph
- x = x₀e^(−t/RC) for exponential discharge of current, charge or voltage
- τ = RC as the time constant, with the same meaning in charging and discharging

*Extension, beyond 19.3 (background only, not examinable): Q = Q₀(1 − e^(−t/RC)) for charge rising during charging, while current still decays exponentially.*

## Frequently asked questions

**What is the capacitance of an isolated sphere?**
Applying C = Q/V to an isolated conducting sphere of radius r, whose surface potential is Q/(4πε₀r), gives C = 4πε₀r. Its capacitance depends only on its radius.

**What does the time constant RC tell you?**
The time constant τ = RC is the time for the current, charge or voltage of a discharging capacitor to fall to 1/e, about 37%, of its initial value. It is not the time for complete discharge, and a larger RC means slower discharge.

**Is capacitor charging examinable in Cambridge 9702?**
Subtopic 19.3 of Cambridge 9702 covers discharging a capacitor and requires the form x = x₀e^(−t/RC). The charging equation Q = Q₀(1 − e^(−t/RC)) is included on this page as background only.

**Where does the energy stored in a capacitor come from on a graph?**
The energy stored is the area under a graph of potential difference against charge. Because that graph is a straight line through the origin, the area is a triangle, giving W = ½QV = ½CV².

## Related resources

- [Electric Fields](/resources/a-physics-electric-fields/) — the previous A Level topic
- [Magnetic Fields](/resources/a-physics-magnetic-fields/) — the next A Level topic
- [Cambridge AS & A Level Physics hub](/boards/cambridge/a-level/physics/)

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027
series. Always check the current syllabus for your examination year.*
