---
title: "AQA A-Level Physics (7408): Magnetic fields"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Fields and their consequences"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 7.5
syllabusTopics:
  - qualification: "a-level"
    topic: "fields-and-their-consequences"
    subtopic: "magnetic-fields-aqa-alevel"
description: "AQA A-Level Physics 7408 magnetic fields in depth: F = BIl, charged particles, flux linkage, Faraday and Lenz, ac values, oscilloscopes and transformers."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This study guide goes deeper into sub-section 3.7.5 Magnetic fields of the AQA AS and A-level Physics specification (7407/7408, AS and A-level exams June 2016 onwards), from 3.7.5.1 Magnetic flux density to 3.7.5.6 The operation of a transformer. It is **A-level only** and assessed in Paper 2. It contains Required practicals 10 and 11.

The [Fields and their consequences study guide](/resources/aqa-a-level-physics-fields-and-their-consequences/) summarises section 3.7. For recall use the [magnetic fields revision notes](/resources/aqa-a-level-physics-7408-magnetic-fields-revision-notes/); to test yourself use the [magnetic fields practice questions](/resources/aqa-a-level-physics-7408-magnetic-fields-practice/).

Values used: e = 1.60 × 10⁻¹⁹ C, mₑ = 9.11 × 10⁻³¹ kg, g = 9.81 N kg⁻¹.

## What this subtopic covers

| Spec ref | Content |
|---|---|
| 3.7.5.1 | F = BIl (field perpendicular to current); Fleming's left-hand rule; B and the tesla; Required practical 10 |
| 3.7.5.2 | F = BQv; direction for positive and negative particles; circular paths; the cyclotron |
| 3.7.5.3 | Φ = BA; flux linkage NΦ; NΦ = BAN cos θ for a rotating coil; Required practical 11 |
| 3.7.5.4 | Faraday's and Lenz's laws; ε = NΔΦ/Δt; straight conductor moving in a field; ε = BANω sin ωt |
| 3.7.5.5 | Sinusoidal ac: rms, peak, peak-to-peak; mains values; oscilloscope as a voltmeter and timer |
| 3.7.5.6 | Nₛ/Nₚ = Vₛ/Vₚ; efficiency = IₛVₛ/IₚVₚ; eddy currents; causes of inefficiency; high-voltage transmission |

## Force on a current

A wire carrying current I at right angles to a field of flux density B experiences F = BIl over the length l in the field. **One tesla** is the flux density that produces a force of 1 N on 1 m of wire carrying 1 A perpendicular to the field. Direction: Fleming's left-hand rule (first finger field, second finger conventional current, thumb motion). If the wire is parallel to the field there is no force.

**Worked example 1: Required practical 10.** A magnet on a top pan balance has 0.080 m of fixed wire passing through its 0.050 T field. With 3.0 A in the wire, by how much does the reading change?

```
F = BIl = 0.050 × 3.0 × 0.080 = 0.012 N
Δm = F/g = 0.012/9.81 = 1.2 × 10⁻³ kg = 1.2 g
```

The wire is fixed, so by Newton's third law an equal and opposite force acts on the magnet and changes the reading. Reversing the current reverses the change. A graph of F against I (B and l fixed) is a straight line of gradient Bl.

## Charged particles in a magnetic field

A charge Q moving at v perpendicular to B feels F = BQv. Use the left-hand rule with the second finger along the direction of **positive** charge flow; for an electron, point it opposite to the electron's velocity.

The force is always perpendicular to the velocity, so it does no work: the speed is constant and the path is a circle. Setting BQv = mv²/r gives **r = mv/BQ**.

**Worked example 2: an electron beam.** Electrons at 4.0 × 10⁶ m s⁻¹ enter a 2.0 mT field at right angles.

```
r = mv/BQ = 9.11 × 10⁻³¹ × 4.0 × 10⁶/(2.0 × 10⁻³ × 1.60 × 10⁻¹⁹) = 1.1 × 10⁻² m
T = 2πr/v = 2πm/BQ = 1.8 × 10⁻⁸ s
```

The period does not depend on speed: a faster particle travels a larger circle in the same time. That is the principle of the **cyclotron**. Two hollow semicircular electrodes sit in a uniform field; an alternating p.d. between them, at the fixed frequency BQ/2πm, accelerates the particles each time they cross the gap, so they spiral outwards with increasing speed.

## Flux and flux linkage

**Magnetic flux** Φ = BA (weber, Wb) when B is normal to the area A. **Flux linkage** is NΦ for a coil of N turns. For a coil whose normal is at angle θ to B, **NΦ = BAN cos θ**: maximum when the coil faces the field (θ = 0), zero when its plane is parallel to the field.

**Worked example 3.** A 200-turn coil of area 2.5 × 10⁻³ m² in a 0.080 T field: maximum flux linkage = 0.080 × 2.5 × 10⁻³ × 200 = 0.040 Wb turns. With its normal at 30° to the field: 0.040 cos 30° = 0.035 Wb turns.

**Required practical 11** uses a small search coil connected to an oscilloscope, placed in the alternating field of a current-carrying coil. The induced emf peak is proportional to the flux linkage; rotating the search coil shows the peak varying as cos θ.

## Electromagnetic induction

**Faraday's law**: the induced emf equals the rate of change of flux linkage, ε = NΔΦ/Δt. **Lenz's law**: the induced current flows in a direction that opposes the change producing it. Lenz's law is conservation of energy: if the induced current aided the change, energy would appear from nowhere.

**Worked example 4: pulling a coil out of a field.** A 500-turn coil of area 4.0 × 10⁻⁴ m² is pulled out of a 0.15 T field in 0.20 s.

```
ε = NΔΦ/Δt = 500 × 0.15 × 4.0 × 10⁻⁴/0.20 = 0.15 V (average)
```

The induced current makes the coil's own field reinforce the disappearing flux, so the coil is attracted back: you must do work to pull it out, and that work becomes electrical energy.

**A straight conductor.** A rod of length l moving at v perpendicular to B sweeps area lv each second, so ε = Blv. An aircraft with a 30 m wingspan flying at 250 m s⁻¹ where the vertical component of the Earth's field is 4.0 × 10⁻⁵ T has ε = 4.0 × 10⁻⁵ × 30 × 250 = 0.30 V between its wingtips. No current flows round a complete circuit, because any connecting wire moves with the plane and has the same emf induced in it.

**A rotating coil.** At constant angular speed ω, NΦ = BAN cos ωt, and the emf is ε = BANω sin ωt. The emf is greatest when the flux linkage is changing fastest, which is when the coil plane is **parallel** to the field (flux linkage zero).

**Worked example 5: a generator.** N = 120, A = 0.015 m², B = 0.12 T, 3000 revolutions per minute.

```
ω = (3000/60) × 2π = 314 rad s⁻¹
ε₀ = BANω = 0.12 × 0.015 × 120 × 314 = 68 V peak
V_rms = 68/√2 = 48 V
```

Doubling the rotation rate doubles both the peak emf and the frequency.

## Alternating current and the oscilloscope

For sinusoidal ac, **V_rms = V₀/√2** and I_rms = I₀/√2. The rms value is the steady d.c. value that would dissipate the same mean power in a resistor. Peak-to-peak is 2V₀. UK mains is quoted as 230 V rms, so V₀ = 325 V and V_pp = 651 V.

**Worked example 6: reading a trace.** Y-gain 2.0 V div⁻¹, time base 5.0 ms div⁻¹. The trace spans 6.4 divisions from top to bottom and one cycle covers 4.0 divisions.

```
V_pp = 6.4 × 2.0 = 12.8 V;  V₀ = 6.4 V;  V_rms = 4.5 V
T = 4.0 × 5.0 ms = 20 ms;   f = 1/T = 50 Hz
```

With the time base off, an ac input shows a vertical line whose length is V_pp; a d.c. input simply shifts the spot or trace up or down.

## Transformers and transmission

An alternating current in the primary coil produces a changing flux in the iron core, which links the secondary and induces an emf. **Nₛ/Nₚ = Vₛ/Vₚ** for an ideal transformer; efficiency = IₛVₛ/IₚVₚ.

**Worked example 7.** A 240 V to 6.0 V transformer has 2000 primary turns and supplies 2.5 A at 90% efficiency.

```
Nₛ = 2000 × 6.0/240 = 50 turns
Pₛ = 6.0 × 2.5 = 15 W;  Pₚ = 15/0.90 = 16.7 W;  Iₚ = 16.7/240 = 0.069 A
```

**Losses**: eddy currents induced in the core heat it (reduced by laminating the core with insulated sheets); resistance of the windings (thick, low-resistance wire); energy to magnetise and demagnetise the core each cycle (soft iron); flux leakage (coils wound together on one core).

**Transmission.** For fixed power P = IV, raising V lowers I, and cable loss is I²R. Sending 500 kW through 4.0 Ω: at 25 kV, I = 20 A and the loss is 1.6 kW (0.32%); at 5.0 kV, I = 100 A and the loss is 40 kW (8%). Five times the voltage cuts the loss by a factor of 25.

## Common mistakes

- Using the right-hand rule, or forgetting to reverse it for electrons.
- Measuring θ from the coil plane in NΦ = BAN cos θ.
- Saying the emf is maximum when the flux linkage is maximum.
- Quoting peak voltage when rms is asked for.
- Using P = V²/R with the transmission voltage instead of the voltage drop along the cable.

## Exam technique for AQA command words

- **Explain** (Lenz): name the change, state that the induced current opposes it, and link to energy or the direction of force.
- **Describe** (Required practicals 10 and 11): give what is varied, what is kept constant, what is measured and the graph plotted.
- **Calculate**: state rms or peak clearly, and convert rpm to rad s⁻¹ before using BANω.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.7.5 Magnetic fields (A-level only).
