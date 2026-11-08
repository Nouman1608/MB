---
title: "Magnetic Fields"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Magnetic fields"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 20.1
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
description: "Magnetic forces F = BIL sin θ and F = BQv sin θ, the Hall effect, velocity selection, field patterns and electromagnetic induction: Topic 20 of Cambridge 9702."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
reviewedDate: 2026-09-29
publishedDate: 2026-08-18
updatedDate: 2026-09-27
featured: false
---

This guide covers Topic 20, Magnetic fields, in full — subtopics **20.1
Concept of a magnetic field**, **20.2 Force on a current-carrying
conductor**, **20.3 Force on a moving charge**, **20.4 Magnetic fields due
to currents** and **20.5 Electromagnetic induction** — from Cambridge
International AS & A Level Physics 9702, 2025–2027 series. This is A Level
content and the most extensive single topic in the electricity and
magnetism strand.

## Before studying this

This resource assumes electric current from [Electricity: Current,
Potential Difference and Resistance](/resources/as-physics-electricity/),
and circular motion from [Motion in a
Circle](/resources/a-physics-motion-in-a-circle/).

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL PHYSICS 9702 — A Level, Topic 20**

**20.1 Concept of a magnetic field** — understanding that a magnetic field
is an example of a field of force produced either by moving charges or by
permanent magnets; representing a magnetic field by field lines.

**20.2 Force on a current-carrying conductor** — recalling and using
F = BIL sin θ for the force on a current-carrying conductor in a magnetic
field; understanding how the force on a current-carrying conductor can be
used to define magnetic flux density, and defining the tesla; explaining
the forces between current-carrying conductors and predicting the
direction of these forces.

**20.3 Force on a moving charge** — recalling and using F = BQv sin θ for
the force on a charge moving in a magnetic field; understanding how the
magnetic force can provide the centripetal force needed for the circular
motion of charged particles in a uniform magnetic field; deriving and
using the Hall voltage V_H = BI/(ntq), and explaining how the Hall effect
is used in a Hall probe to measure magnetic flux density; describing the
use of crossed (perpendicular) electric and magnetic fields in velocity
selection.

**20.4 Magnetic fields due to currents** — sketching magnetic field
patterns due to currents in a long straight wire, a flat circular coil and a
long solenoid; understanding that the magnetic field due to a current
increases with current and decreases with distance from a current-carrying
conductor; understanding the effect of a ferrous core on the strength of
the magnetic field produced by a solenoid.

**20.5 Electromagnetic induction** — defining magnetic flux and magnetic
flux linkage; understanding and explaining experiments that demonstrate
induction, the direction of the induced e.m.f. and the factors affecting its
size; recalling and using Faraday's law of electromagnetic induction;
recalling and using Lenz's law to determine the direction of an induced
e.m.f.

## The magnetic field concept

A **magnetic field** is a field of force produced by moving charges
(electric currents) or permanent magnets, represented using field lines that
form closed loops, running from north to south poles outside a magnet.

## Force on a current-carrying conductor

A current-carrying conductor placed in a magnetic field experiences a force:

```
F = BIL sin θ
```

where B is the magnetic flux density, I is the current, L is the length of
conductor in the field, and θ is the angle between the current direction and
the field. This defines magnetic flux density: the **tesla** is the flux
density that produces a force of 1 N per metre of conductor carrying 1 A,
perpendicular to the field.

### Forces between current-carrying conductors

Each current-carrying conductor produces its own magnetic field, so two
parallel conductors each experience a force due to the other's field.
**Two wires carrying current in the same direction attract**; **two wires
carrying current in opposite directions repel**. The size of each force
follows from F = BIL, with B taken as the flux density produced by one
wire at the location of the other — so the force per unit length
increases with both currents and decreases with the separation between
the wires.

## Force on a moving charge

A charge moving through a magnetic field also experiences a force:

```
F = BQv sin θ
```

Because this force acts perpendicular to velocity, it does no work and
changes only the direction of motion, not its speed. When a charged particle
enters a uniform field perpendicular to its velocity, this magnetic force
provides exactly the centripetal force needed for uniform circular motion —
connecting directly to F = mv²/r from circular motion.

**Worked example.** An electron (charge 1.6 × 10⁻¹⁹ C) moves at 2.0 × 10⁶ m
s⁻¹ perpendicular to a magnetic field of flux density 0.50 T. The force on
it:

```
F = BQv = 0.50 × 1.6 × 10⁻¹⁹ × 2.0 × 10⁶ = 1.6 × 10⁻¹³ N
```

### The Hall effect and the Hall probe

When a current-carrying slice of material (typically a semiconductor) is
placed in a magnetic field perpendicular to the current, the magnetic
force on the moving charge carriers pushes them sideways, building up a
charge imbalance across the slice until the resulting electric field
exerts an equal and opposite force on the carriers. This sideways
potential difference is the **Hall voltage**:

```
V_H = BI / (ntq)
```

where B is the magnetic flux density, I is the current, n is the number
density of charge carriers, t is the thickness of the slice in the
direction of B, and q is the charge on each carrier. Because V_H is
proportional to B for a given slice, current and carrier density, this
effect is used in a **Hall probe**: a calibrated Hall slice whose voltage
output gives a direct reading of magnetic flux density.

**Deriving the Hall voltage.** Let the slice have width d (the dimension
across which V_H appears) and thickness t (in the direction of B), so its
cross-sectional area is A = dt. Each carrier, of charge q and drift speed v,
feels a magnetic force Bqv. The Hall voltage builds up until the electric
force from the Hall field E = V_H/d balances it:

```
qE = Bqv   ⟹   V_H / d = Bv   ⟹   V_H = Bvd
```

The current is I = nAvq = n(dt)vq, so v = I/(ndtq). Substituting:

```
V_H = B × I/(ndtq) × d = BI/(ntq)
```

The width d cancels, which is why V_H depends on the thickness t but not on
the width of the slice. A small n (as in a semiconductor) gives a larger,
more easily measured Hall voltage.

### Velocity selection

A **velocity selector** uses crossed (perpendicular) electric and
magnetic fields to allow only charged particles of one particular speed
through undeflected. The electric force (qE) and the magnetic force
(qBv) act in opposite directions on the particle; only when these
balance,

```
qE = qBv₀   ⟹   v₀ = E/B
```

does the particle pass through in a straight line — particles with any
other speed experience a net sideways force and are deflected out of the
beam.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--04-crossed-fields-balance.webp" width="900" height="1195" alt="Top: charged particles pass between plates with E down and B into the page; qE and qBv balance when v = E/B so that particle goes straight, slower ones bend down and faster ones bend up (trajectories integrated numerically). Bottom (Cambridge only): current I through a slice of width d in a field B; carriers pile up on one edge until qE_H = Bqv, giving V_H = BI/(ntq)." loading="lazy">
  <figcaption>Equal electric and magnetic forces give v = E/B for the selector and V_H = BI/(ntq) for the Hall slice.</figcaption>
</figure>


## Magnetic fields due to currents

A long straight current-carrying wire produces a field of concentric
circles around it, whose flux density increases with current and decreases
with distance from the wire. A flat circular coil produces a field
resembling that of a short bar magnet at its centre. A long solenoid
produces a strong, uniform field inside it, similar to a bar magnet's field
but concentrated and controllable via the current.

Placing a **ferrous (iron) core** inside a solenoid greatly increases the
flux density produced for the same current, because the core itself
becomes magnetised and adds its own much stronger field to the solenoid's
— this is the basis of an **electromagnet**, and is why relays and
electric bells use an iron-cored coil rather than an air-cored one.

## Electromagnetic induction

**Magnetic flux** Φ through an area is the product of magnetic flux density
and the area perpendicular to the field. **Magnetic flux linkage** is the
product of flux and the number of turns of a coil, NΦ.

**Faraday's law** states that the magnitude of an induced e.m.f. is
proportional to the rate of change of magnetic flux linkage. **Lenz's law**
states that an induced e.m.f. always acts in a direction to oppose the
change producing it — this determines the direction (sign) of the induced
e.m.f. and is a direct consequence of conservation of energy.

### Experiments that demonstrate electromagnetic induction

The syllabus (20.5) asks you to understand and explain experiments showing
three things: that a changing magnetic flux can induce an e.m.f. in a
circuit; that the induced e.m.f. is in a direction that opposes the change
producing it; and which factors affect the size of the induced e.m.f. The
standard demonstrations use a coil of many turns (or a single wire)
connected to a **sensitive centre-zero ammeter (galvanometer)**, which shows
both the size and the direction of a small current.

**1. A changing flux induces an e.m.f.**

- **Magnet and coil.** Push a bar magnet into the coil: the meter deflects
briefly. Hold the magnet still inside the coil: the reading returns to
zero, even though flux still links the coil. Pull the magnet out: the meter
deflects the other way. Moving the coil instead of the magnet gives the same
results. An e.m.f. is induced only while the flux linkage is **changing**.
- **Wire and magnet.** Move a straight wire, connected to the meter, down
through the field between the poles of a U-shaped magnet: the meter
deflects while the wire cuts across the field lines. Moving it up gives a
deflection the other way. Holding it still, or moving it parallel to the
field lines, gives no deflection, because the flux through the circuit does
not change.
- **Two coils, no motion.** Wind two coils on the same iron core, one
connected to a cell and switch, the other to the meter. The meter deflects
briefly when the switch is closed and, the other way, when it is opened, but
not while a steady current flows. A changing flux induces an e.m.f. even
when nothing moves.

The meter detects the current that the induced e.m.f. drives round the
complete circuit. The e.m.f. is induced whether or not the circuit is
complete; it can be shown with a high-resistance voltmeter or an
oscilloscope instead.

**2. Factors that affect the size of the induced e.m.f.**

With the magnet-and-coil arrangement, the maximum deflection is larger when:

- the magnet is moved **faster** (the flux linkage changes in less time);
- a **stronger magnet** is used (a larger change in flux density B);
- the coil has **more turns** N (a larger change in flux linkage NΦ);
- the coil is wound on an **iron core** and the magnet is moved towards its
end, so that the iron concentrates more of the magnet's flux through the turns.

A larger coil area does **not** help here: a wider loop around a bar magnet
also encloses more of the magnet's return field, which points the opposite
way, so the net flux linked is not increased. Area matters for a coil in a
**uniform** field (for example between the poles of a U-shaped magnet), where
a larger area gives a larger flux linkage NBA.

Each of these increases the **rate of change of flux linkage**, which is
exactly what Faraday's law says the induced e.m.f. is proportional to.
Pushing the magnet in and pulling it out at the same speed gives deflections
of the same size in opposite directions.

**3. The direction of the induced e.m.f. (Lenz's law)**

First find which way the meter deflects for a known current direction (for
example, briefly connect a cell through a large resistor). Then:

- as the **north pole approaches** the coil, the induced current makes the
end of the coil nearest the magnet a **north pole**, which **repels** the
magnet and opposes its approach;
- as the **north pole is withdrawn**, the induced current reverses and that
end becomes a **south pole**, which **attracts** the magnet and opposes its
withdrawal.

The pole produced at the coil's end can be checked against the direction of
the induced current using the right-hand grip rule for a coil. Because the
induced effect always opposes the motion, **work must be done** to move the
magnet, and that work is the source of the electrical energy — Lenz's law is
conservation of energy. In the same way, a magnet dropped through a vertical
copper tube falls more slowly than through a plastic one: currents induced
in the copper oppose its fall.

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


## Common mistakes

- **Forgetting the sin θ term in F = BIL sin θ or F = BQv sin θ** — the
force is maximum when the current/velocity is perpendicular to the field
(θ = 90°) and zero when parallel to it (θ = 0°).
- **Assuming the magnetic force on a moving charge does work on it** — since
the force is always perpendicular to velocity, it changes direction only,
never speed or kinetic energy.
- **Confusing magnetic flux (Φ, through one turn) with flux linkage (NΦ, for
a coil of N turns)** — Faraday's law is stated in terms of flux linkage.
- **Getting the direction from Lenz's law wrong** — the induced effect always
opposes the change that caused it, never reinforces it.
- **Mixing up the directions in the parallel-conductor force rule** — same
directions attract, opposite directions repel; check with F = BIL and the
right-hand/left-hand rule rather than trying to memorise it directly.
- **Forgetting that a velocity selector only passes one speed** — any charge
moving faster or slower than v₀ = E/B feels a net force and is deflected.

## Quick revision checklist

- F = BIL sin θ, and defining the tesla from it
- Forces between current-carrying conductors: same direction attracts, opposite repels
- F = BQv sin θ, and how it provides centripetal force for charged particles in circular motion
- V_H = BI/(ntq), the Hall voltage: its origin, its derivation from qE = Bqv and I = nAvq, and how a Hall probe measures B
- Velocity selection: v₀ = E/B when the electric and magnetic forces balance
- Field patterns for a straight wire, flat coil and solenoid, and the effect of a ferrous core
- Faraday's law (rate of change of flux linkage) and Lenz's law (opposing direction)
- The induction experiments: magnet and coil with a galvanometer, a wire moved through a magnet's field, the factors that increase the induced e.m.f., and finding its direction with Lenz's law

## Frequently asked questions

**What is the Hall voltage formula?**
The Hall voltage is V_H = BI/(ntq), where n is the number density of charge carriers, t is the thickness of the slice in the direction of B and q is the charge on each carrier. Because V_H is proportional to B, a Hall probe can measure magnetic flux density.

**How does a velocity selector work?**
A velocity selector uses crossed electric and magnetic fields whose forces act in opposite directions on a charged particle. Only particles with speed v₀ = E/B feel balanced forces and pass through undeflected.

**Do parallel wires carrying current attract or repel?**
Two parallel wires carrying current in the same direction attract, and wires carrying current in opposite directions repel. Each wire experiences a force F = BIL in the field produced by the other.

**What does an iron core do inside a solenoid?**
A ferrous core greatly increases the magnetic flux density produced for the same current, because the core becomes magnetised and adds its own field. This is the basis of an electromagnet.

## Related resources

- [Capacitance](/resources/a-physics-capacitance/) — the previous A Level topic
- [Alternating Currents](/resources/a-physics-alternating-currents/) — the next A Level topic, built on electromagnetic induction
- [Cambridge AS & A Level Physics hub](/boards/cambridge/a-level/physics/)

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027
series. Always check the current syllabus for your examination year.*
