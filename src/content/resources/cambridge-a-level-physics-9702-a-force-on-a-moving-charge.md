---
title: "Cambridge A Level Physics (9702): Force on a moving charge"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Magnetic fields"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 20.3
syllabusTopics:
  - qualification: "a-level"
    topic: "a-magnetic-fields"
    subtopic: "a-force-on-a-moving-charge"
description: "A focused guide to 20.3 Force on a moving charge in Cambridge A Level Physics 9702: F = BQv sin θ, circular paths, Hall probes and velocity selection."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **20.3 Force on a moving charge** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Magnetic Fields study guide](/resources/a-physics-magnetic-fields/) introduces the whole of Topic 20 and already derives the Hall voltage and the velocity-selector condition; this page goes further into the 20.3 outcomes: linking F = BQv to F = BIL, finding directions for negative charges, the radius and period of circular paths, why semiconductors make better Hall probes than metals, how a Hall probe is used in practice, and what happens to particles that a velocity selector lets through. For quick recall use the [Force on a moving charge revision notes](/resources/cambridge-a-level-physics-9702-a-force-on-a-moving-charge-revision-notes/), and for exam-style questions the [Force on a moving charge practice questions](/resources/cambridge-a-level-physics-9702-a-force-on-a-moving-charge-practice/).

## What 20.3 asks you to do

The syllabus lists six outcomes. Candidates should be able to:

- **determine the direction of the force on a charge moving in a magnetic field**
- **recall and use F = BQv sin θ**
- **understand the origin of the Hall voltage and derive and use the expression V_H = BI/(ntq)**, where t = thickness
- **understand the use of a Hall probe to measure magnetic flux density**
- **describe the motion of a charged particle moving in a uniform magnetic field perpendicular to the direction of motion of the particle**
- **explain how electric and magnetic fields can be used in velocity selection**

## From F = BIL to F = BQv

A wire of cross-sectional area A and length L contains n charge carriers per unit volume, each with charge q and drift speed v. The current is I = nAvq and the number of carriers in length L is N = nAL. The force on the wire at right angles to the field is shared equally among the carriers:

```
Force per carrier = BIL / N = B(nAvq)L / (nAL) = Bqv
```

With a general angle θ between the velocity and the field, F = BQv sin θ. The force on a wire really is the sum of the forces on its moving charges.

## Directions, including negative charges

Use Fleming's left-hand rule with the second finger along the direction of **conventional current**:

- For a **positive** charge, the "current" is in the direction of motion.
- For a **negative** charge (an electron), the "current" is **opposite** to the direction of motion.

| Particle | Moving | Field | Force |
|---|---|---|---|
| Proton | to the right | into the page | up the page |
| Electron | to the right | into the page | down the page |
| Proton | up the page | out of the page | to the right |
| Alpha particle | to the left | into the page | down the page |

The force is always at right angles to the velocity, so it **does no work**. The speed and kinetic energy of a charged particle are not changed by a magnetic field, only its direction.

## Circular motion in a uniform field

When a particle enters a uniform field with its velocity perpendicular to the field, the magnetic force BQv has constant magnitude and is always perpendicular to the velocity. These are exactly the conditions for uniform circular motion (Topic 12), so the path is a circle in the plane perpendicular to the field. The magnetic force supplies the centripetal force:

```
BQv = mv²/r   →   r = mv / (BQ)
```

Three consequences follow:

- **r ∝ mv = p.** A faster or heavier particle moves in a larger circle; the radius measures the momentum: p = BQr.
- **r ∝ 1/B.** A stronger field bends the path more tightly.
- **The period does not depend on speed.** T = 2πr/v = 2πm/(BQ). A faster particle travels a larger circle but takes the same time to go round.

If the particle loses energy as it moves (for example in a detector), its radius shrinks and the path becomes a spiral.

## Worked example 1: an electron in a circle

An electron moves at 3.0 × 10⁷ m s⁻¹ at right angles to a uniform field of 2.0 mT. Calculate the radius of its path and the time for one orbit. (m_e = 9.11 × 10⁻³¹ kg, e = 1.60 × 10⁻¹⁹ C)

```
r = mv / (Be) = 9.11 × 10⁻³¹ × 3.0 × 10⁷ / (2.0 × 10⁻³ × 1.60 × 10⁻¹⁹)
  = 0.085 m
T = 2πm / (Be) = 2π × 9.11 × 10⁻³¹ / (2.0 × 10⁻³ × 1.60 × 10⁻¹⁹)
  = 1.8 × 10⁻⁸ s
```

*Annotation.* Write the force equation BQv = mv²/r before rearranging; that line usually carries a mark. Note 2.0 mT = 2.0 × 10⁻³ T.

## The Hall voltage: origin and size

Pass a current along a thin slice of conductor placed with a magnetic field perpendicular to its face. The moving carriers feel a sideways magnetic force and collect on one edge, leaving the opposite edge with the opposite charge. This charge separation creates an electric field across the slice. Charge builds up until the electric force on each carrier balances the magnetic force, after which carriers pass straight along; the steady p.d. across the slice is the **Hall voltage**.

The broader guide gives the derivation in full. The result is:

```
V_H = BI / (ntq)      t = thickness of the slice (in the direction of B)
```

Points worth understanding:

- **V_H ∝ B** for a fixed current and slice: this is what makes a Hall probe work.
- **V_H ∝ 1/n.** Metals have an enormous carrier density, so their Hall voltage is tiny. Semiconductors have far fewer carriers, giving a much larger, measurable voltage.
- **V_H ∝ 1/t.** A thinner slice gives a larger voltage.
- **The sign of V_H reveals the sign of the carriers.** Positive and negative carriers moving to give the same current are pushed to the same edge, so they charge it oppositely.

## Worked example 2: metal or semiconductor?

Compare the Hall voltage in **(a)** a copper strip 0.10 mm thick carrying 2.0 A, with n = 8.5 × 10²⁸ m⁻³, and **(b)** a semiconductor slice 0.20 mm thick carrying 10 mA, with n = 1.0 × 10²² m⁻³ (an illustrative value). Both are in a field of 0.50 T.

```
(a) V_H = 0.50 × 2.0 / (8.5 × 10²⁸ × 1.0 × 10⁻⁴ × 1.60 × 10⁻¹⁹)
        = 7.4 × 10⁻⁷ V
(b) V_H = 0.50 × 0.010 / (1.0 × 10²² × 2.0 × 10⁻⁴ × 1.60 × 10⁻¹⁹)
        = 0.016 V
```

*Annotation.* Even with 200 times less current, the semiconductor gives a Hall voltage over 20 000 times larger, because its carrier density is millions of times smaller.

## Using a Hall probe

A Hall probe contains a small semiconductor slice, a constant current supply and a voltmeter for V_H. To measure B:

1. **Calibrate**: place the probe in a known field to find the constant k in V_H = kB (or use the manufacturer's calibration).
2. **Orient**: V_H depends on the component of B perpendicular to the slice's face. Rotate the probe until the reading is a **maximum**; the face is then perpendicular to the field.
3. **Keep the current constant**, because V_H ∝ I as well as B.
4. **Read V_H** and calculate B = V_H/k.

A zero reading does not prove there is no field: the probe face may simply be parallel to it.

## Velocity selection and beyond

In crossed fields, an electric force QE and a magnetic force BQv act in opposite directions. Only particles with v = E/B pass straight through. If the electric field is produced by parallel plates a distance d apart with p.d. V, then E = V/d.

**Worked example 3.** Plates 2.0 cm apart have a p.d. of 400 V; the magnetic field is 0.050 T. Protons that pass straight through then enter a region containing only the 0.050 T field. Find their speed and the radius of their path. (m_p = 1.67 × 10⁻²⁷ kg)

```
E = V/d = 400 / 0.020 = 2.0 × 10⁴ V m⁻¹
v = E/B = 2.0 × 10⁴ / 0.050 = 4.0 × 10⁵ m s⁻¹
r = mv / (BQ) = 1.67 × 10⁻²⁷ × 4.0 × 10⁵ / (0.050 × 1.60 × 10⁻¹⁹) = 0.084 m
```

*Annotation.* The selector picks one speed regardless of mass or charge, because Q cancels in QE = BQv. Once the speed is fixed, the radius in the second region depends only on m/Q, so ions of different mass separate. A faster particle than v = E/B feels a larger magnetic force and is deflected the way the magnetic force acts; a slower one is deflected the way the electric force acts.

## Common mistakes

- **Using the left-hand rule for an electron without reversing the current direction.**
- **Saying the magnetic force speeds up or slows down a particle.** It does no work.
- **Using the length of the slice, or its width, for t** in the Hall voltage. t is the thickness in the direction of B.
- **Forgetting that a velocity selector is independent of charge and mass.**
- **Writing mv²/r = BQv but then cancelling wrongly**, giving r = mv²/(BQ).
- **Assuming a faster particle completes its orbit sooner.** The period is independent of speed.

## Exam technique for the command words

- **Describe** (the motion of a charged particle perpendicular to a uniform field): circular path, constant speed, force always perpendicular to velocity towards the centre, in the plane perpendicular to the field.
- **Explain** (the origin of the Hall voltage): carriers deflected by the magnetic force, charge builds up on one side, electric field forms, equilibrium when QE = BQv.
- **Derive** V_H = BI/(ntq): state QE = BQv, E = V_H/d, I = nAvq with A = dt, and show the width d cancelling.
- **Explain** (velocity selection): the two forces are opposite; only for QE = BQv is the resultant zero; Q cancels, so v = E/B.
- **Calculate**: start from the force balance, rearrange symbolically, then substitute.

## Related resources

- [Magnetic Fields study guide](/resources/a-physics-magnetic-fields/) — the whole of Topic 20
- [Force on a moving charge revision notes](/resources/cambridge-a-level-physics-9702-a-force-on-a-moving-charge-revision-notes/)
- [Force on a moving charge practice questions](/resources/cambridge-a-level-physics-9702-a-force-on-a-moving-charge-practice/)
- [Force on a current-carrying conductor study guide](/resources/cambridge-a-level-physics-9702-a-force-on-a-current-carrying-conductor/) — the previous subtopic
- [Centripetal acceleration study guide](/resources/cambridge-a-level-physics-9702-a-centripetal-acceleration/) — the circular-motion equations used here

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
