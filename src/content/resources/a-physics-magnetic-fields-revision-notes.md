---
title: "A Level Physics: Magnetic Fields — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Magnetic fields"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 20.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "a-magnetic-fields"
    subtopic: "a-concept-of-a-magnetic-field"
  - qualification: "a-level"
    topic: "a-magnetic-fields"
    subtopic: "a-force-on-a-current-carrying-conductor"
  - qualification: "a-level"
    topic: "a-magnetic-fields"
    subtopic: "a-force-on-a-moving-charge"
  - qualification: "a-level"
    topic: "a-magnetic-fields"
    subtopic: "a-magnetic-fields-due-to-currents"
  - qualification: "a-level"
    topic: "a-magnetic-fields"
    subtopic: "a-electromagnetic-induction"
description: "Condensed recall notes on F = BIL, F = BQv, flux, electromagnetic induction and Faraday\u2019s and Lenz\u2019s laws for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29; 2026-11-08: reviewed by hassan."
publishedDate: 2026-08-22
updatedDate: 2026-09-27
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Magnetic Fields study guide](/resources/a-physics-magnetic-fields/).

## Forces

```
On a current-carrying wire:   F = B I L sin(theta)
On a moving charge:           F = B Q v sin(theta)

theta = angle between the field and the current/velocity
Maximum force when theta = 90 degrees; ZERO when parallel
```

**Defining the tesla:** the tesla is the flux density that produces a force of **1 N per metre** of conductor carrying **1 A**, when the conductor is **perpendicular** to the field.

**Fleming's left-hand rule** (motor effect): **F**irst finger = **F**ield, se**C**ond finger = **C**urrent, thu**M**b = **M**otion.

For a **negative** charge, current direction is **opposite** to the velocity — reverse the answer. This catches almost everyone at least once.

**Worked example.** A wire of length 0.20 m carries a current of 5.0 A perpendicular to a field of flux density 0.30 T.

```
F = B I L = 0.30 x 5.0 x 0.20 = 0.30 N
```

If the wire instead ran **parallel** to the field, θ = 0° and sin θ = 0, so the force would be **zero** regardless of current or field strength.

## Charged particle in a magnetic field

The force is always **perpendicular to velocity**, so it changes direction but never speed. The particle moves in a **circle**:

```
B Q v = m v^2 / r      ->      r = m v / (B Q)
```

Because the force is perpendicular to motion, **no work is done** and kinetic energy is constant.

Larger mass or speed → larger radius. Stronger field or greater charge → tighter circle.

**Worked example.** An electron (Q = 1.6 × 10⁻¹⁹ C) moves at 2.0 × 10⁶ m s⁻¹ perpendicular to a field of flux density 0.50 T.

```
F = B Q v = 0.50 x 1.6x10^-19 x 2.0x10^6 = 1.6x10^-13 N
```

## Magnetic flux and flux linkage

```
flux            phi = B A cos(theta)          webers (Wb)
flux linkage    N phi = B A N cos(theta)      weber-turns
```

θ is measured between the field and the **normal** to the area — not the plane. Flux is maximum when the field is perpendicular to the area, zero when parallel to it — measuring θ from the coil's plane instead of its normal is a common source of a sign or magnitude error.

## Electromagnetic induction

**Faraday's law** — the magnitude of the induced e.m.f. equals the **rate of change of flux linkage**:

```
E = - d(N phi) / dt
```

**Lenz's law** — the induced e.m.f. opposes the change producing it. That is the **minus sign**, and it is a statement of conservation of energy: if the induced current helped the change, energy would be created from nothing.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--01-fields-due-to-currents.webp" width="900" height="1210" alt="Three panels show field lines of a long straight wire (circles, with B falling as 1/r), a flat circular coil and a long solenoid. The wire panel has a 1/r graph; the coil and solenoid lines are computed with the Biot-Savart law. The solenoid has a uniform field inside and a bar-magnet pattern outside." loading="lazy">
  <figcaption>Field lines of a straight wire, a flat coil and a solenoid, with B falling as 1/r away from the wire.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--02-force-on-a-wire.webp" width="900" height="1050" alt="A wire carrying current into the page between a north pole on the left and a south pole on the right feels a downward force (Fleming left-hand rule: thumb force, first finger field, second finger current). A top view defines theta, and a graph of F = BIL sin theta (B = 0.35 T, I = 4.5 A, L = 0.080 m) gives 0 at 0 degrees, 0.081 N at 40 degrees and 0.126 N at 90 degrees." loading="lazy">
  <figcaption>The force on a wire in a field depends on sin theta and is greatest at 90 degrees.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--03-charged-particle-circles.webp" width="900" height="920" alt="A proton accelerated through 1500 V enters a uniform 0.20 T field pointing into the page, moving upward. The magnetic force points left, so it circles; the radius is 2.8 cm at speed v and 5.6 cm at 2v. Both take the same time, T = 3.3 x 10^-7 s. An electron through the same voltage has a 43 times smaller radius and the opposite sense." loading="lazy">
  <figcaption>A faster charged particle moves on a bigger circle but takes the same time per revolution.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--04-crossed-fields-balance.webp" width="900" height="1195" alt="Top: charged particles pass between plates with E down and B into the page; qE and qBv balance when v = E/B so that particle goes straight, slower ones bend down and faster ones bend up (trajectories integrated numerically). Bottom (Cambridge only): current I through a slice of width d in a field B; carriers pile up on one edge until qE_H = Bqv, giving V_H = BI/(ntq)." loading="lazy">
  <figcaption>Equal electric and magnetic forces give v = E/B for the selector and V_H = BI/(ntq) for the Hall slice.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--05-lenz-law-magnet-coil.webp" width="900" height="1110" alt="Three rows show a bar magnet with its north pole facing a coil and a centre-zero meter. Moving in: the near end of the coil becomes a north pole and repels the magnet. Held still: no deflection. Moving out: the near end becomes a south pole and attracts the magnet, and the meter deflection reverses." loading="lazy">
  <figcaption>The induced pole always opposes the magnet movement, so the meter deflects one way going in and the other way coming out.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--06-rotating-coil-generator.webp" width="900" height="1165" alt="Four end-on pictures show a coil turning in a uniform field at 0, 90, 180 and 270 degrees. Graphs for one 40 ms period (120 turns, 0.25 T, 4.5e-3 m2, 25 Hz) show N phi = NBA cos wt between plus and minus 0.135 Wb turns and E = NBAw sin wt with peak 21.2 V. E is zero when flux linkage is maximum and largest when it changes fastest." loading="lazy">
  <figcaption>The e.m.f. of a rotating coil is minus the gradient of the flux linkage, so a cosine flux linkage gives a sine e.m.f.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--07-transformer.webp" width="900" height="935" alt="A laminated iron core carries a primary coil of 1840 turns on 230 V a.c. and a secondary of 120 turns on a 15 V, 30 W load. The changing flux links both coils; Ip = 0.13 A and Is = 2.0 A, so power in equals power out for an ideal transformer. Eddy currents are big loops in a solid core and small loops in a laminated core. A real transformer draws 34.5 W for 30 W out, 87 percent efficient." loading="lazy">
  <figcaption>An ideal transformer has Ns/Np = Vs/Vp = Ip/Is; the laminated core reduces eddy-current losses.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--08-ac-rms-and-power.webp" width="900" height="945" alt="A mains voltage with peak 325 V and period 20 ms is plotted for two cycles with dashed lines at 230 V r.m.s. and a 650 V peak-to-peak arrow. Below, the power in a resistor, proportional to sin squared and never negative, has a mean of exactly half the peak power." loading="lazy">
  <figcaption>The r.m.s. value is the peak divided by root 2, and the mean power is half the peak power.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--09-rectification-smoothing.webp" width="900" height="1140" alt="Three graphs share the same 50 Hz input (dashed). One diode gives half-wave rectification with a gap; a bridge of four diodes gives full-wave rectification with no gap and pulses at twice the frequency; a smoothing capacitor fills the gaps, with small RC giving large ripple and large RC giving small ripple." loading="lazy">
  <figcaption>Half-wave leaves gaps, full-wave does not, and a capacitor with a larger time constant RC gives a smoother output.</figcaption>
</figure>


## Induction experiments (20.5)

Coil (or wire) connected to a **sensitive centre-zero galvanometer**:

- **Magnet into coil** → brief deflection; **magnet at rest** → none; **magnet out** → deflection the other way. Only a *changing* flux linkage induces an e.m.f.
- **Wire moved through a U-shaped magnet's field** → deflection while it cuts the field lines; none when still or moving parallel to them.
- **Bigger e.m.f.** with a faster movement, a stronger magnet, or more turns — all raise the rate of change of flux linkage. A larger coil area does not help with a bar magnet (a wider loop also encloses the magnet's return field); it does for a coil in a **uniform** field, such as between a U-shaped magnet's poles, where flux linkage is NBA.
- **Direction (Lenz):** a north pole approaching makes the near end of the coil a north pole (repels); a north pole withdrawn makes it a south pole (attracts). Work must be done against this force, which supplies the electrical energy.

## The three ways to induce an e.m.f.

1. Change the **field strength** B.
2. Change the **area** A.
3. Change the **angle** θ (rotation — this is how a generator works).

For a coil rotating at angular frequency ω, the e.m.f. varies sinusoidally with peak value **NBAω** *(extension — not a 9702 requirement)*.

## Exam traps

- Forgetting to reverse the direction for a negative charge in Fleming's left-hand rule.
- Measuring θ from the plane of the coil instead of from the **normal**.
- Saying a magnetic field does work on a moving charge — it never does; the force is perpendicular to motion.
- Omitting the minus sign in Faraday's law, or failing to explain it as Lenz's law.
- Confusing flux (BA) with flux linkage (NBA).
- Using F = BIL when the wire is parallel to the field — the force is then zero.
- Forgetting the tesla is defined **per metre of conductor per ampere**, not simply "a unit of field strength" with no numerical anchor.

## Self-test

1. State Fleming's left-hand rule and what each digit represents.
2. An electron moves at right angles to a magnetic field. Describe its path and explain why its speed is unchanged.
3. Give the equation for the radius of that path.
4. State Faraday's and Lenz's laws.
5. Why does Lenz's law follow from conservation of energy?
6. Define the tesla in terms of force, current and length.
7. An electron (Q = 1.6 × 10⁻¹⁹ C) moves at 2.0 × 10⁶ m s⁻¹ perpendicular to a 0.50 T field. Find the force on it.
8. A wire of length 0.20 m carries 5.0 A perpendicular to a 0.30 T field. Find the force, and state what happens if the wire instead runs parallel to the field.

**Answers:** 1. First finger = field, second finger = current, thumb = motion (force); all mutually perpendicular. 2. A circle — the force is always perpendicular to the velocity, so it changes direction continuously but does no work, leaving the speed and kinetic energy constant. 3. r = mv/(BQ). 4. Faraday: the induced e.m.f. is proportional to the rate of change of flux linkage. Lenz: the induced e.m.f. acts to oppose the change causing it. 5. If the induced effect reinforced the change, the change would grow without limit and energy would be created from nothing; opposing it means work must be done to sustain the change. 6. The flux density that produces a force of 1 N per metre of conductor carrying 1 A, perpendicular to the field. 7. F = BQv = 0.50 × 1.6×10⁻¹⁹ × 2.0×10⁶ = **1.6×10⁻¹³ N**. 8. F = BIL = 0.30 × 5.0 × 0.20 = **0.30 N**; parallel to the field, θ = 0° so sin θ = 0 and the force is zero.

## Frequently asked questions

**How is the tesla defined?**
One tesla is the magnetic flux density that produces a force of 1 N per metre of conductor carrying a current of 1 A, when the conductor is perpendicular to the field.

**What is the difference between magnetic flux and flux linkage?**
Magnetic flux is Φ = BA cos θ, measured in webers, with θ measured from the normal to the area. Flux linkage is NΦ, the flux multiplied by the number of turns of the coil, and Faraday's law is stated in terms of flux linkage.

**Does a magnetic field do work on a moving charge?**
No. The magnetic force is always perpendicular to the velocity, so it changes the direction of motion but not the speed, and the kinetic energy stays constant.

**How do you increase the e.m.f. induced by a magnet moving into a coil?**
Move the magnet faster, use a stronger magnet, or use a coil with more turns; each raises the rate of change of flux linkage. A larger coil area does not help with a bar magnet, because a wider loop also encloses the magnet's return field.
