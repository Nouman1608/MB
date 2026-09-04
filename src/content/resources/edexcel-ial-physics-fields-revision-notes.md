---
title: "Edexcel IAL Physics: Electric and Magnetic Fields — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Unit 4: Further Mechanics, Fields and Particles"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YPH11"]
syllabusSeries: "Issue 3"
order: 4.4
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-4-further-mechanics-fields-and-particles"
    subtopic: "electric-and-magnetic-fields"
description: "Condensed recall notes on electric fields, capacitance, magnetic flux density and electromagnetic induction for Edexcel International A Level Physics WPH14."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Electric and Magnetic Fields study guide](/resources/edexcel-ial-physics-electric-and-magnetic-fields/).

## Electric fields

```
E = F / Q                      field strength, N C^-1 or V m^-1
E = Q / (4 pi epsilon0 r^2)    radial field
E = V / d                      uniform field between parallel plates
F = Q1 Q2 / (4 pi epsilon0 r^2)   Coulomb's law
```

**Field strength is force per unit positive charge**, so field lines run from positive to negative.

**Radial fields obey an inverse square law; uniform fields do not vary with position.** Applying the inverse square to parallel plates is a routine error.

**A charged particle in a uniform field follows a parabolic path**, exactly like a projectile in gravity — constant acceleration perpendicular to the initial velocity. The mathematics is identical, which is why the projectile method works.

**Electric potential** falls in the direction the field points, and field strength is (minus) the potential gradient. For a radial field, V = Q/4πε₀r. **Equipotentials** — surfaces of constant potential — are always **perpendicular** to field lines, for both radial and uniform fields.

## Capacitance

```
C = Q / V              W = 1/2 QV = 1/2 CV^2 = Q^2 / 2C
series:    1/C = 1/C1 + 1/C2
parallel:  C = C1 + C2
```

**Capacitors combine the opposite way to resistors** — parallel adds, series is reciprocal. Getting this backwards is very common.

**Energy stored is the area under a Q–V graph**, which is why the ½ appears: the p.d. rises from zero to V as charge accumulates, so the average is V/2.

**Discharge:**

```
Q = Q0 e^(-t/RC)        time constant  tau = RC
```

After one time constant, the charge falls to **37%** of its initial value. After 5RC it is effectively fully discharged. A **larger RC** gives slower discharge — larger capacitance stores more charge, larger resistance limits the current.

**CORE PRACTICAL 11** uses an oscilloscope or data logger to display and analyse the p.d. across a capacitor as it charges and discharges through a resistor.

**Worked example.** A 220 μF capacitor is charged to 9.0 V, then discharged through a 47 kΩ resistor. Find the time constant and the p.d. after one time constant.

```
RC = (220 x 10^-6) x (47 x 10^3) = 10.34 s  (approx 10 s)
V = V0 x e^-1 = 9.0 x 0.368 = 3.3 V
```

## Magnetic fields

```
F = B I L sin(theta)      force on a current-carrying conductor
F = B Q v                 force on a moving charge
```

**Fleming's left-hand rule** — First finger Field, seCond finger Current, thuMb Motion.

**The force is zero when motion is parallel to the field** and maximum when perpendicular.

**A charged particle moving perpendicular to a uniform magnetic field travels in a circle**, because the magnetic force is always perpendicular to the velocity — the definition of centripetal force. Setting `BQv = mv²/r` gives `r = mv/BQ`, the basis of mass spectrometry and particle accelerators.

Note this contrasts with an electric field, which gives a **parabolic** path because the force there has a fixed direction. That comparison is examined.

## Electromagnetic induction

```
flux            phi = B A
flux linkage    N phi
Faraday:  induced e.m.f. = -d(N phi)/dt
```

**Faraday's law** — the induced e.m.f. is proportional to the **rate of change of flux linkage**.

**Lenz's law** — the induced current opposes the change producing it. The minus sign in Faraday's law *is* Lenz's law, and it follows from **conservation of energy**: if the induced effect assisted the change, energy would be created from nothing.

**A transformer requires a.c.** because only a continuously changing flux gives a rate of change and hence an induced e.m.f. Direct current produces constant flux and no induction.

## Exam traps

- Applying the inverse square law to a uniform field.
- Combining capacitors like resistors.
- Forgetting the ½ in capacitor energy, or why it is there.
- Using the right hand for the motor effect.
- Saying a magnetic field gives a parabolic path — it gives a circular one.
- Omitting sin θ when the conductor is not perpendicular to the field.
- Drawing equipotentials parallel to field lines instead of perpendicular to them.

## Self-test

1. Distinguish a radial from a uniform electric field.
2. How do capacitors combine in series and in parallel?
3. Why is there a factor of ½ in the energy stored on a capacitor?
4. Why does a magnetic field produce circular motion but an electric field a parabola?
5. State Lenz's law and the principle it follows from.
6. How are equipotentials oriented relative to field lines?

**Answers:** 1. A radial field obeys an inverse square law and points towards or away from a point charge; a uniform field has constant strength and parallel field lines, as between charged parallel plates. 2. In parallel capacitances add; in series the reciprocals add — the opposite of resistors. 3. Energy is the area under the Q–V graph, and since p.d. rises linearly from zero to V, the average p.d. during charging is V/2. 4. The magnetic force is always perpendicular to the velocity, so it continuously changes direction, giving circular motion; the electric force has a fixed direction, giving constant acceleration in one direction and hence a parabola. 5. The induced current opposes the change producing it; it follows from conservation of energy. 6. Always perpendicular to the field lines, for both radial and uniform fields.
