---
title: "AQA A-Level Physics: Fields and their consequences (7408)"
seoTitle: "AQA A-Level Physics Fields (7408) Study Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Fields and their consequences"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 7
syllabusTopics:
  - qualification: "a-level"
    topic: "fields-and-their-consequences"
  - qualification: "a-level"
    topic: "fields-and-their-consequences"
    subtopic: "fields-aqa-alevel"
  - qualification: "a-level"
    topic: "fields-and-their-consequences"
    subtopic: "gravitational-fields-aqa-alevel"
  - qualification: "a-level"
    topic: "fields-and-their-consequences"
    subtopic: "electric-fields-aqa-alevel"
  - qualification: "a-level"
    topic: "fields-and-their-consequences"
    subtopic: "capacitance-aqa-alevel"
  - qualification: "a-level"
    topic: "fields-and-their-consequences"
    subtopic: "magnetic-fields-aqa-alevel"
description: "Study guide to AQA A-Level Physics 7408 Fields: gravitational and electric fields, orbits, capacitors, magnetic forces, induction and transformers."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide teaches section 3.7 Fields and their consequences of the AQA AS and A-level Physics specification (7407/7408, version 1.4, AS and A-level exams June 2016 onwards), sub-sections 3.7.1 to 3.7.5. The whole section is A-level only and is assessed in Paper 2. It is core content: sections 3.9 to 3.13 are the options, of which you study one for Paper 3 Section B.

The [course hub](/boards/aqa/a-level/physics/) lists every topic, the [printable checklist](/checklists/aqa/a-level/physics/) tracks outcomes, and the free [diagnostics](/diagnostics/) find weak spots.

Values used: G = 6.67 × 10⁻¹¹ N m² kg⁻², ε₀ = 8.85 × 10⁻¹² F m⁻¹, e = 1.60 × 10⁻¹⁹ C, mₑ = 9.11 × 10⁻³¹ kg, mₚ = 1.67 × 10⁻²⁷ kg; Earth: M = 5.97 × 10²⁴ kg, R = 6.37 × 10⁶ m.

## What this topic covers (all A-level only)

| Specification | You must be able to |
|---|---|
| 3.7.1 Fields | Define a force field; compare gravity and electrostatics |
| 3.7.2 Gravitational fields | Newton's law; g; V; equipotentials; orbits, escape velocity, geostationary orbits |
| 3.7.3 Electric fields | Coulomb's law; E in uniform and radial fields; deflection; potential |
| 3.7.4 Capacitance | C = Q/V; dielectrics; energy; charge and discharge; Required practical 9 |
| 3.7.5 Magnetic fields | F = BIl, F = BQv; flux linkage; induction; ac; transformers; Required practicals 10 and 11 |

## 3.7.1 Fields

A **force field** is a region in which a body experiences a non-contact force. Field strength is a vector; find its direction by inspection (which way would a test mass, or a positive test charge, be pushed?). Fields arise from mass, from static charge, and between moving charges.

Gravitational and electrostatic forces both follow inverse-square laws and both use field lines, potential and equipotential surfaces. The difference: masses always attract, but charges may attract or repel.

## 3.7.2 Gravitational fields

Gravity is a universal attractive force between all matter. For point masses, **F = Gm₁m₂/r²**, with r between centres.

**Field strength** is force per unit mass, **g = F/m**. In a radial field **g = GM/r²**. Field lines point towards the mass.

### Worked example 1: g above Earth

```
r = 6.37 × 10⁶ + 4.0 × 10⁵ = 6.77 × 10⁶ m   (400 km up)
g = GM/r² = 6.67 × 10⁻¹¹ × 5.97 × 10²⁴ / (6.77 × 10⁶)² = 8.69 N kg⁻¹
```

**Gravitational potential** V is the work done per unit mass bringing a small mass from infinity, where V = 0. Work must be done to take a mass out to infinity, so V is negative everywhere: **V = −GM/r**. Work done moving mass m through potential difference ΔV is **ΔW = mΔV**. No work is done moving along an **equipotential surface**; equipotentials cross field lines at right angles.

**g = −ΔV/Δr**: g is minus the gradient of a V–r graph, and ΔV is the area under a g–r graph. Outside the mass, g falls as 1/r² while V rises towards zero as −1/r.

### Worked example 2: lifting a satellite

Work to lift 500 kg from Earth's surface to 400 km:

```
V(surface) = −GM/R = −6.251 × 10⁷ J kg⁻¹
V(400 km)  = −GM/r = −5.882 × 10⁷ J kg⁻¹
ΔW = mΔV = 500 × 3.69 × 10⁶ = 1.85 × 10⁹ J
```

**Orbits.** Gravity provides the centripetal force:

```
mv²/r = GMm/r²  →  v = √(GM/r)
v = 2πr/T       →  T² = (4π²/GM) r³
```

So **T² ∝ r³**; log T against log r is a straight line of gradient 1.5.

A satellite of mass m has kinetic energy GMm/2r and potential energy −GMm/r, so **total energy = −GMm/2r**. A higher orbit has more total energy but less kinetic energy.

**Escape velocity** is the minimum launch speed to reach infinity unpowered: ½mv² = GMm/R gives **v = √(2GM/R)**, independent of m (1.12 × 10⁴ m s⁻¹ for Earth).

A **synchronous orbit** has a period equal to the rotation period of the body orbited. A **geostationary** satellite is synchronous, in the equatorial plane and moving west to east, so it stays above one point and dishes need no tracking. **Low orbits** have short periods and suit close observation, but each satellite is overhead only briefly.

### Worked example 3: geostationary radius

```
T = 24 h = 86 400 s
r³ = GMT²/4π²  →  r = 4.22 × 10⁷ m (about 3.6 × 10⁷ m above the surface)
```

## 3.7.3 Electric fields

**Coulomb's law** (point charges, vacuum): **F = (1/4πε₀) Q₁Q₂/r²**. Air can be treated as a vacuum. For a charged sphere, treat the charge as at its centre.

### Worked example 4: proton and electron

```
F_E/F_G = e² / (4πε₀ G mₑ mₚ)        (r² cancels)
        = 8.99 × 10⁹ × (1.60 × 10⁻¹⁹)² / (6.67 × 10⁻¹¹ × 9.11 × 10⁻³¹ × 1.67 × 10⁻²⁷)
        = 2.27 × 10³⁹
```

Gravity is negligible between subatomic particles.

**Field strength** is force per unit positive charge, **E = F/Q**. Lines run from positive to negative. Between parallel plates the field is uniform, **E = V/d**: the work done moving Q across the gap is Fd = QΔV, so F/Q = ΔV/d. For a point charge, **E = (1/4πε₀) Q/r²**. Map patterns with conducting paper (2D) or an electrolytic tank (3D).

A charged particle entering a uniform field at right angles keeps constant velocity along the plates and accelerates uniformly across them, so it follows a parabola.

### Worked example 5: electron between plates

Plates 2.0 cm apart and 5.0 cm long at 200 V; the electron enters midway at 2.0 × 10⁷ m s⁻¹.

```
E = V/d = 200/0.020 = 1.0 × 10⁴ V m⁻¹
a = eE/mₑ = 1.76 × 10¹⁵ m s⁻²
t = 0.050 / 2.0 × 10⁷ = 2.5 × 10⁻⁹ s
y = ½at² = 5.5 mm towards the positive plate
```

**Electric potential** V is the work done per unit positive charge bringing it from infinity (V = 0). **ΔW = QΔV**. Radial field: **V = (1/4πε₀) Q/r**, negative for a negative charge. No work is done along equipotentials. Outside a point charge E falls as 1/r² and V as 1/r. The magnitude of E is the gradient of a V–r graph, **E = ΔV/Δr**, and ΔV is the area under an E–r graph.

### Worked example 6: charged sphere

Sphere radius 0.10 m, charge +4.0 nC. Work to bring +2.0 nC from 0.30 m to the surface:

```
V(0.10) = 8.99 × 10⁹ × 4.0 × 10⁻⁹ / 0.10 = 360 V;  V(0.30) = 120 V
ΔW = QΔV = 2.0 × 10⁻⁹ × 240 = 4.8 × 10⁻⁷ J
```

## 3.7.4 Capacitance

**C = Q/V**. Parallel plates: **C = Aε₀εᵣ/d**, where εᵣ is the relative permittivity (dielectric constant). In a dielectric of polar molecules, each molecule rotates so its positive end faces the negative plate. Their field opposes the applied field, so for the same charge the p.d. is lower and C is larger.

**Energy** is the area under the straight-line graph of charge against p.d.: **E = ½QV = ½CV² = ½Q²/C**.

### Worked example 7

```
A = 0.040 m², d = 0.50 mm, εᵣ = 3.0, V = 50 V
C = 0.040 × 8.85 × 10⁻¹² × 3.0 / 5.0 × 10⁻⁴ = 2.12 × 10⁻⁹ F
E = ½CV² = 2.66 × 10⁻⁶ J
```

**Charge and discharge through a resistor.** On discharge Q, V and I all fall exponentially. On charging, Q and V rise towards final values while I falls. The gradient of a Q–t graph is I; the area under an I–t graph is Q.

- Time constant **RC**: in one RC, discharge leaves 37% of Q₀.
- **T½ = 0.69RC**.
- Discharge: **Q = Q₀e^(−t/RC)**, same form for V and I.
- Charge: **Q = Q₀(1 − e^(−t/RC))**, likewise V; I = I₀e^(−t/RC).

### Worked example 8

470 μF at 12 V discharges through 10 kΩ.

```
RC = 4.7 s    T½ = 0.69 × 4.7 = 3.2 s
V(10 s) = 12 e^(−10/4.7) = 1.4 V
Charging, Q = 0.90Q₀ when t = RC ln 10 = 10.8 s
```

**Required practical 9**: record V during charge and discharge. A graph of ln V against t for discharge is a straight line of gradient −1/RC.

## 3.7.5 Magnetic fields

**F = BIl** when field and current are perpendicular, direction by **Fleming's left-hand rule** (First finger Field, seCond finger Current, thuMb Motion). 1 **tesla** is the flux density giving 1 N on 1 m of wire carrying 1 A at right angles to the field.

**Required practical 10**: a magnet sits on a top pan balance with a fixed wire through its field. The equal and opposite force on the magnet changes the reading; F = Δm × g. Vary B, I and l in turn.

**Moving charges**: **F = BQv** with v perpendicular to B. Apply the left-hand rule with current in the direction of positive charge flow; reverse it for negative particles. The force is perpendicular to velocity, so speed is constant and the path is a circle: BQv = mv²/r, **r = mv/BQ**. In a **cyclotron** the time per orbit, 2πm/BQ, does not depend on speed, so a fixed-frequency alternating p.d. accelerates particles each half-turn.

### Worked example 9

Proton at 3.0 × 10⁶ m s⁻¹ in 0.20 T:

```
r = mv/BQ = 1.67 × 10⁻²⁷ × 3.0 × 10⁶ / (0.20 × 1.60 × 10⁻¹⁹) = 0.16 m
f = BQ/2πm = 3.0 × 10⁶ Hz
```

**Flux**: **Φ = BA** (weber) with B normal to A. **Flux linkage** NΦ. For a coil whose normal makes angle θ with B: **NΦ = BAN cos θ**. **Required practical 11** uses a search coil and oscilloscope to show how flux linkage varies with this angle.

**Induction.** A magnet moved into a coil induces a current only while it moves. **Faraday's law:** emf = rate of change of flux linkage, **ε = NΔΦ/Δt**. **Lenz's law:** the induced current opposes the change causing it. A rod of length l moving at v across B sweeps area lv per second, so ε = Blv: 0.30 m at 4.0 m s⁻¹ in 0.25 T gives 0.30 V.

A coil rotating at ω gives **ε = BANω sin ωt**. With B = 0.050 T, A = 4.0 × 10⁻³ m², N = 200 at 50 Hz, peak emf = 0.050 × 4.0 × 10⁻³ × 200 × 2π × 50 = 12.6 V. The emf peaks when the coil plane is parallel to B.

**Alternating current** (sinusoidal only): **I_rms = I₀/√2, V_rms = V₀/√2**; peak-to-peak = 2V₀. 230 V rms mains has peak 325 V and peak-to-peak 651 V. On an **oscilloscope**, divisions × Y-gain (V/div) gives voltage (d.c. shifts the trace); divisions × time-base (s/div) gives time, and f = 1/T.

**Transformers**: **Nₛ/Nₚ = Vₛ/Vₚ**; efficiency = IₛVₛ/IₚVₚ. Changing flux induces **eddy currents** in the core, heating it; laminating the core reduces them. Other losses: coil resistance, magnetising and demagnetising the core, and flux leakage.

### Worked example 10

230 V to 12 V, 1150 primary turns, Iₛ = 4.0 A, Iₚ = 0.22 A:

```
Nₛ = 1150 × 12/230 = 60
efficiency = 48 / 50.6 = 0.95
```

**Transmission**: for fixed P = IV, higher V means lower I, and line loss is I²R. Sending 1.0 MW through 5.0 Ω: at 11 kV the loss is 41 kW; at 33 kV it is 4.6 kW.

## Common errors

- Using height above the surface, not distance from the centre.
- Dropping the minus sign in V = −GM/r.
- Leaving area in cm² or separation in mm in C = Aε₀εᵣ/d.
- Confusing T½ = 0.69RC with RC.
- Measuring θ from the coil plane instead of the normal.
- Giving peak voltage when rms is asked for.

## Next steps

Revise with the [revision notes](/resources/aqa-a-level-physics-fields-and-their-consequences-revision-notes/), then try the [practice questions](/resources/aqa-a-level-physics-fields-and-their-consequences-practice/) and the [exam preparation guide](/resources/aqa-a-level-physics-exam-preparation/).

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), version 1.4, July 2026, AS and A-level exams June 2016 onwards, published by AQA. Section 3.7 Fields and their consequences.
