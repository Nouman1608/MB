---
title: "Edexcel IAL Physics: Electric and Magnetic Fields — Revision Notes"
seoTitle: "Edexcel IAL Physics Unit 4 Fields Revision Notes (WPH14)"
seoDescription: "Quick-recall notes for Edexcel International A Level Physics Unit 4 (WPH14): electric fields, capacitance, magnetic flux density and electromagnetic induction."
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
description: "Condensed recall notes on electric fields, capacitance, magnetic flux density and electromagnetic induction for Edexcel International A Level Physics YPH11 (Unit 4, WPH14)."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-fields-revision-notes--10-radial-vs-uniform.webp" width="900" height="975" alt="Two small pictures show a radial field around a point charge and a uniform field between parallel plates. A graph of field strength against distance shows the radial field of a 2.0 nanocoulomb point charge falling as one over r squared, from 4.5 times ten to the 4 volts per metre at 2 centimetres to 1.1 times ten to the 4 at 4 centimetres, a quarter. The uniform field between plates 1500 volts across 3.0 centimetres is a constant 5.0 times ten to the 4 volts per metre." loading="lazy">
  <figcaption>Do not apply the inverse square law to a uniform field.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-fields-revision-notes--01-radial-vs-uniform-field-strength.webp" width="900" height="1090" alt="A point charge has a radial field: E falls to a quarter each time the distance doubles (899, 225, 56 V per metre at 0.1, 0.2, 0.4 m for 1.0 nC). Between parallel plates 3.0 cm apart at 1500 V the field is uniform at 5.0 x 10^4 V per metre everywhere." loading="lazy">
  <figcaption>Radial field strength follows an inverse square law; between parallel plates it is constant.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-electric-fields--01-field-line-patterns.webp" width="900" height="1100" alt="Field lines for a positive point charge point radially outwards and for a negative charge radially inwards. Two opposite charges give curved lines from + to −. Parallel plates give evenly spaced lines in the middle, bending outwards at the edges. Closer lines mean a stronger field." loading="lazy">
  <figcaption>Field lines show the direction of force on a positive test charge; closer lines mean a stronger field.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-electric-fields--02-coulombs-law.webp" width="900" height="1100" alt="Like charges repel and unlike charges attract, with equal and opposite forces. +4.8 nC and −3.2 nC at 6.0 cm exert 3.8×10⁻⁵ N on each other. Doubling one charge and tripling the separation multiplies the force by 2/9, from 0.80 mN to 0.18 mN." loading="lazy">
  <figcaption>The force between point charges follows an inverse square law and acts along the line joining them.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-electric-fields--06-particle-in-uniform-field.webp" width="900" height="840" alt="An electron enters midway between plates at 2.0×10⁷ m s⁻¹. Along the plates its speed is constant (t = 2.5 ns); across them it accelerates at 1.76×10¹⁵ m s⁻², deflecting 5.5 mm towards the positive plate and leaving at 12.4° to its original path." loading="lazy">
  <figcaption>The path is a parabola between the plates and a straight line after them.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-electric-fields--07-electric-potential.webp" width="900" height="1290" alt="Equipotentials cross field lines at right angles: rings around a point charge get further apart, and are evenly spaced in a uniform field. A V–r graph for +4.0 nC falls as 1/r; its gradient at 0.10 m is −3600 V m⁻¹, so E = 3600 N C⁻¹, and moving 2.0 nC from 0.30 m to 0.10 m takes 4.8×10⁻⁷ J." loading="lazy">
  <figcaption>Field strength is minus the gradient of the potential–distance graph.</figcaption>
</figure>


## Capacitance

```
C = Q / V              W = 1/2 QV = 1/2 CV^2 = Q^2 / 2C
```

*Background — beyond the specification, not examinable (the only combination
outcome in the whole specification is for resistors):* capacitors combine
the opposite way to resistors — in parallel, capacitance adds (`C = C1 + C2`);
in series, reciprocals add (`1/C = 1/C1 + 1/C2`).

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-fields-revision-notes--06-discharge-worked-example.webp" width="900" height="1000" alt="Graph of potential difference against time for a 220 microfarad capacitor charged to 9.0 volts and discharged through 47 kilohms. The time constant RC is 10.3 seconds. After one time constant the p.d. is 3.3 volts, 37 percent of the start. After five time constants, 52 seconds, only 0.06 volts remain, so it is effectively fully discharged." loading="lazy">
  <figcaption>Worked discharge example with tau = 10.3 s.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-fields-revision-notes--07-capacitor-energy-half.webp" width="900" height="990" alt="A graph of p.d. against charge is a straight line through the origin, ending at 9.0 volts when 1.98 millicoulombs are stored on a 220 microfarad capacitor. The area under the line is a triangle, half of the dashed rectangle QV, because the p.d. rises from zero to V so its average is V over 2. The energy is half QV, 8.9 millijoules, equal to half C V squared and Q squared over 2C." loading="lazy">
  <figcaption>The half in W = 1/2 QV comes from the average p.d.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-fields-revision-notes--02-capacitor-energy-half-qv.webp" width="900" height="910" alt="V-Q graph for a 220 microfarad capacitor charged to 9.0 V (Q = 1.98 mC). The triangle under the line is the energy, 8.9 mJ; a rectangle at the average p.d. 4.5 V has the same area, explaining the half." loading="lazy">
  <figcaption>Energy stored is the area under the V-Q line, which is why W = half QV.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--07-time-constant-tau.webp" width="900" height="930" alt="A discharge curve plotted against multiples of the time constant falls to 36.8, 13.5 and 5.0 percent at 1, 2 and 3 tau. The tangent at t = 0 meets the time axis at t = RC. For 470 microfarad and 33 kilohm tau is 15.5 s, and 37 percent is still left after one tau." loading="lazy">
  <figcaption>After one time constant a capacitor has not fully discharged: 37% remains.</figcaption>
</figure>


## Magnetic fields

```
F = B I L sin(theta)      force on a current-carrying conductor
F = B Q v sin(theta)      force on a moving charge
```

**Fleming's left-hand rule** — First finger Field, seCond finger Current, thuMb Motion.

**The force is zero when motion is parallel to the field** and maximum when perpendicular.

**A charged particle moving perpendicular to a uniform magnetic field travels in a circle**, because the magnetic force is always perpendicular to the velocity — the definition of centripetal force. Setting `BQv = mv²/r` gives `r = mv/BQ`, the basis of mass spectrometry and particle accelerators.

Note this contrasts with an electric field, which gives a **parabolic** path because the force there has a fixed direction. That comparison is examined.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-fields-revision-notes--08-parabola-vs-circle.webp" width="900" height="1140" alt="Top: a positively charged particle enters a uniform electric field between plates, with the force always pointing the same way towards the negative plate, so it follows a parabola. Bottom: the same kind of particle moves in a uniform magnetic field into the page; the force is always perpendicular to the velocity and points to the centre, so the particle moves in a circle of radius mv over BQ at constant speed." loading="lazy">
  <figcaption>Electric field gives a parabola, magnetic field a circle.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--02-force-on-a-wire.webp" width="900" height="1050" alt="A wire carrying current into the page between a north pole on the left and a south pole on the right feels a downward force (Fleming left-hand rule: thumb force, first finger field, second finger current). A top view defines theta, and a graph of F = BIL sin theta (B = 0.35 T, I = 4.5 A, L = 0.080 m) gives 0 at 0 degrees, 0.081 N at 40 degrees and 0.126 N at 90 degrees." loading="lazy">
  <figcaption>The force on a wire in a field depends on sin theta and is greatest at 90 degrees.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--03-charged-particle-circles.webp" width="900" height="920" alt="A proton accelerated through 1500 V enters a uniform 0.20 T field pointing into the page, moving upward. The magnetic force points left, so it circles; the radius is 2.8 cm at speed v and 5.6 cm at 2v. Both take the same time, T = 3.3 x 10^-7 s. An electron through the same voltage has a 43 times smaller radius and the opposite sense." loading="lazy">
  <figcaption>A faster charged particle moves on a bigger circle but takes the same time per revolution.</figcaption>
</figure>


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
- Forgetting the ½ in capacitor energy, or why it is there.
- Using the right hand for the motor effect.
- Saying a magnetic field gives a parabolic path — it gives a circular one.
- Omitting sin θ when the conductor is not perpendicular to the field.
- Drawing equipotentials parallel to field lines instead of perpendicular to them.

## Self-test

1. Distinguish a radial from a uniform electric field.
2. *(Background, not examinable.)* How do capacitors combine in series and in parallel?
3. Why is there a factor of ½ in the energy stored on a capacitor?
4. Why does a magnetic field produce circular motion but an electric field a parabola?
5. State Lenz's law and the principle it follows from.
6. How are equipotentials oriented relative to field lines?

**Answers:** 1. A radial field obeys an inverse square law and points towards or away from a point charge; a uniform field has constant strength and parallel field lines, as between charged parallel plates. 2. *(Background, not examinable.)* In parallel capacitances add; in series the reciprocals add — the opposite of resistors. 3. Energy is the area under the Q–V graph, and since p.d. rises linearly from zero to V, the average p.d. during charging is V/2. 4. The magnetic force is always perpendicular to the velocity, so it continuously changes direction, giving circular motion; the electric force has a fixed direction, giving constant acceleration in one direction and hence a parabola. 5. The induced current opposes the change producing it; it follows from conservation of energy. 6. Always perpendicular to the field lines, for both radial and uniform fields.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-fields-revision-notes--09-transformer-needs-ac.webp" width="900" height="1000" alt="Two graphs of magnetic flux and induced e.m.f. against time. With d.c. the flux in the core is constant, its rate of change is zero, so no e.m.f. is induced in the secondary coil. With a.c. the flux varies as a sine wave and the induced e.m.f. follows the negative of its gradient, a cosine wave, so a continuously changing flux gives a continuous induced e.m.f. The minus sign is Lenz's law." loading="lazy">
  <figcaption>Only changing flux induces an e.m.f.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--05-lenz-law-magnet-coil.webp" width="900" height="1110" alt="Three rows show a bar magnet with its north pole facing a coil and a centre-zero meter. Moving in: the near end of the coil becomes a north pole and repels the magnet. Held still: no deflection. Moving out: the near end becomes a south pole and attracts the magnet, and the meter deflection reverses." loading="lazy">
  <figcaption>The induced pole always opposes the magnet movement, so the meter deflects one way going in and the other way coming out.</figcaption>
</figure>

