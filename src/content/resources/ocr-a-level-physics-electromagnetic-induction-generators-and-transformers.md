---
title: "OCR A Level Physics A: Electromagnetic induction, generators and transformers (H556)"
seoTitle: "OCR A Level Physics Induction, Generators, Transformers"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Electromagnetic induction, generators and transformers"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 69
syllabusTopics:
  - qualification: "a-level"
    topic: "particles-and-medical-physics"
    subtopic: "electromagnetism-ocr-alevel"
description: "Study guide to magnetic flux, Faraday's and Lenz's laws, search coils, the a.c. generator and transformers for OCR A Level Physics A (H556)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
This guide covers statements 6.3.3(a) to 6.3.3(f) of the OCR Advanced GCE in Physics A specification (H556), Version 3.0 (March 2026), for first assessment in 2017. It follows the full A level course. The force on conductors and moving charges is taught in other Marlbridge guides. Use the [revision notes](/resources/ocr-a-level-physics-electromagnetic-induction-generators-and-transformers-revision-notes/) and the [practice questions](/resources/ocr-a-level-physics-electromagnetic-induction-generators-and-transformers-practice/).

Useful links: [OCR A Level Physics hub](/boards/ocr/a-level/physics/), [printable checklist](/checklists/ocr/a-level/physics/) and [free diagnostics](/diagnostics/).

## What this unit covers

| Statement | What you must be able to do |
|---|---|
| 6.3.3(a) | Define magnetic flux, use Φ = BA cos θ, and state the unit weber |
| 6.3.3(b) | Define and calculate magnetic flux linkage |
| 6.3.3(c) | State and apply Faraday's law and Lenz's law |
| 6.3.3(d)(i) | Use e.m.f. = −rate of change of flux linkage, E = −Δ(NΦ)/Δt |
| 6.3.3(d)(ii) | Describe techniques and procedures for investigating flux with search coils |
| 6.3.3(e) | Explain a simple a.c. generator |
| 6.3.3(f)(i) | Explain a simple laminated iron-cored transformer and use Ns/Np = Vs/Vp = Ip/Is for an ideal transformer |
| 6.3.3(f)(ii) | Describe techniques and procedures for investigating transformers |

## 6.3.3(a) Magnetic flux and the weber

A magnetic field is described by its flux density B, measured in tesla. Magnetic flux Φ measures how much field passes through a flat area A in a uniform field:

Φ = BA cos θ

Here θ is the angle between the field lines and the normal to the surface, which is the line at 90° to it. If the field is perpendicular to the surface, the field lines run along the normal, θ = 0 and Φ = BA. If the field lines run parallel to the surface, θ = 90° and Φ = 0, because no lines pass through it.

The unit of flux is the weber (Wb). One weber is the flux through an area of 1 m² that is perpendicular to a uniform flux density of 1 T, so 1 Wb = 1 T m².

**Worked example 1.** A rectangular frame measures 0.080 m by 0.050 m. It sits in a uniform field of flux density 0.35 T, with the normal to the frame at 30° to the field. Find the flux through it.

1. A = 0.080 × 0.050 = 4.0 × 10⁻³ m²
2. Φ = BA cos θ = 0.35 × 4.0 × 10⁻³ × cos 30°
3. Φ = 1.21 × 10⁻³ Wb (1.2 × 10⁻³ Wb to two significant figures)

With the normal along the field the same frame has Φ = 1.4 × 10⁻³ Wb, its largest value.

## 6.3.3(b) Magnetic flux linkage

A coil of N turns has the same flux Φ passing through every turn. Each turn is linked by the flux, so the total is the flux linkage:

flux linkage = NΦ = NBA cos θ

Its unit is the weber turn (Wb turn).

**Worked example 2.** A circular coil has 250 turns and radius 2.0 cm. It is placed with its plane perpendicular to a uniform field of 0.18 T. Find the flux linkage, then find it when the coil is turned so that its normal makes 60° with the field.

1. A = πr² = π × (0.020)² = 1.257 × 10⁻³ m²
2. Perpendicular: NΦ = NBA = 250 × 0.18 × 1.257 × 10⁻³ = 5.65 × 10⁻² Wb turns
3. At 60°: NΦ = 5.65 × 10⁻² × cos 60° = 2.83 × 10⁻² Wb turns

## 6.3.3(c) Faraday's law and Lenz's law

An e.m.f. is induced in a conductor or coil whenever the flux linking it changes. The change can come from a moving magnet, a moving coil, a changing current nearby, or a rotating coil.

- **Faraday's law:** the size of the induced e.m.f. is directly proportional to how fast the magnetic flux linkage changes.
- **Lenz's law:** the direction of the induced e.m.f. (and of any current it drives in a closed circuit) is such that it opposes the change that produces it.

Lenz's law is conservation of energy. Push the north pole of a magnet towards a coil. The induced current makes the nearest face a north pole, which repels the magnet. The work you do against that repulsion becomes electrical energy. If the coil attracted the magnet instead, the magnet would gain kinetic energy while also driving a current, creating energy from nothing.

If the circuit is open, an e.m.f. is still induced but no current flows.

## 6.3.3(d)(i) Calculating induced e.m.f.

Combining the two laws gives, for a change of flux linkage ΔNΦ in a time Δt:

E = −Δ(NΦ)/Δt

The minus sign is Lenz's law. Ignore it for magnitudes, but give the direction when asked.

On a graph of flux linkage against time, the induced e.m.f. is minus the gradient. On an e.m.f. against time graph, the area under the line gives the change in flux linkage.

**Worked example 3.** The coil of worked example 2, with its plane perpendicular to the field, is pulled out of the field in 0.40 s. Find the mean e.m.f.

1. Initial flux linkage 5.65 × 10⁻² Wb turns, final 0
2. |E| = ΔNΦ/Δt = 5.65 × 10⁻² / 0.40
3. |E| = 0.14 V

**Worked example 4.** The same coil is instead flipped through 180° in 0.25 s. The flux linkage changes from +5.65 × 10⁻² to −5.65 × 10⁻² Wb turns, so the change is 2 × 5.65 × 10⁻² = 0.113 Wb turns. Then |E| = 0.113 / 0.25 = 0.45 V.

## 6.3.3(d)(ii) Investigating flux with search coils

A search coil is a small coil of many turns, connected to a voltmeter or oscilloscope. Its small area samples the field at a point and its many turns give a measurable e.m.f.

A common arrangement is to drive a large coil or solenoid with an alternating current from a signal generator. The flux density at a point varies as B = B₀ sin ωt, where ω = 2πf. The search coil, with N turns and area A, has flux linkage NAB₀ sin ωt. Its e.m.f. therefore has the same frequency as the field and a peak value

E₀ = NAωB₀

so B₀ = E₀/(NAω).

**Worked example 5.** A search coil has 400 turns and area 1.2 × 10⁻⁴ m². The field alternates at 50 Hz and the peak e.m.f. is 38 mV. Find the peak flux density.

1. ω = 2π × 50 = 314 rad s⁻¹
2. NAω = 400 × 1.2 × 10⁻⁴ × 314 = 15.1
3. B₀ = 0.038 / 15.1 = 2.5 × 10⁻³ T

**Procedure for investigating how flux varies with orientation.**

1. Fix the frequency and current of the signal generator driving the field coil.
2. Hold the search coil with its normal along the axis. Record the peak e.m.f. from the oscilloscope.
3. Rotate the search coil in 20° steps using a protractor, repeating each reading.
4. Keep the distance, current and frequency constant.

A set of results for a search coil, with the maximum reading 38.0 mV, is 38.0, 35.7, 29.1, 19.0 and 6.6 mV at angles of 0°, 20°, 40°, 60° and 80°. A graph of peak e.m.f. against cos θ is a straight line through the origin, which confirms Φ ∝ cos θ.

To map B against distance, move the search coil along the axis. At fixed frequency and area E₀ ∝ B₀, so the graph has the same shape.

## 6.3.3(e) The simple a.c. generator

A simple a.c. generator has a rectangular coil rotating at constant angular speed ω in a uniform magnetic field. The coil is connected to the external circuit through two slip rings. Carbon brushes press against the rings and carry the current. The rings let the coil turn continuously without twisting the wires.

If θ is the angle between the field and the normal to the coil, θ = ωt when timing starts with the normal along the field. The flux linkage is NBA cos ωt. The gradient of a cosine is a negative sine, so:

E = NBAω sin ωt, with peak value E₀ = NBAω

- Plane perpendicular to the field: flux linkage is at its maximum but its gradient is zero, so E = 0.
- Plane parallel to the field: flux linkage is zero but changing most rapidly, so E is at its maximum.
- The e.m.f. changes sign every half turn, so the output alternates.

**Worked example 6.** A generator coil has 120 turns, area 4.5 × 10⁻³ m² and rotates at 25 Hz in a uniform field of 0.25 T. Find the peak e.m.f. and the effect of doubling the rotation frequency.

1. ω = 2π × 25 = 157 rad s⁻¹
2. E₀ = NBAω = 120 × 0.25 × 4.5 × 10⁻³ × 157 = 21.2 V
3. Doubling f doubles ω, so E₀ becomes 42.4 V and the period falls from 0.040 s to 0.020 s


## 6.3.3(f)(i) The transformer

A simple transformer has two coils, the primary and the secondary, wound on a laminated iron core. An alternating p.d. across the primary drives an alternating current, which produces an alternating flux in the core. The iron concentrates the flux and links it to the secondary, where the changing flux linkage induces an e.m.f. A direct supply gives a constant flux, so no e.m.f. is induced.

The core is built from thin sheets (laminations) insulated from each other. The changing flux induces circulating (eddy) currents in the iron. Laminations restrict them, so less energy is wasted as heat.

For an ideal transformer, with no energy losses and all the flux linking both coils:

Ns/Np = Vs/Vp = Ip/Is

The current ratio is inverted. This follows from power in equalling power out: VpIp = VsIs. A step-up transformer raises voltage and lowers current, and a step-down transformer does the reverse.

**Worked example 7.** An ideal transformer has 1840 turns on its primary, connected to 230 V. The secondary supplies 15 V to a 30 W load. Find the number of secondary turns and the primary current.

1. Ns = Np × Vs/Vp = 1840 × 15/230 = 120 turns
2. Is = P/Vs = 30/15 = 2.0 A
3. Ip = Is × Ns/Np = 2.0 × 120/1840 = 0.13 A

**Worked example 8.** A real transformer with the same load draws 0.150 A from 230 V. Input power = 34.5 W, so efficiency = 30/34.5 = 87%.

## 6.3.3(f)(ii) Investigating transformers

1. Use a low-voltage a.c. supply and a transformer with removable coils.
2. Fix Np and Vp. Change Ns in steps, measuring Vs with an a.c. voltmeter.
3. Plot Vs against Ns. For an ideal transformer the line is straight through the origin with gradient Vp/Np.
4. Fix Ns and vary Np to test the inverse relationship.
5. To test the current ratio, put a.c. ammeters in the primary and secondary circuits, with a load resistor.

Sample data with Np = 200 and Vp = 4.0 V give Vs = 0.95, 1.92, 3.84, 7.64 and 11.4 V for Ns = 50, 100, 200, 400 and 600. The gradient is about 0.019 V per turn, compared with the ideal Vp/Np = 0.020 V per turn, so the values are about 5% low. The shortfall is systematic and points to energy losses and flux that does not link both coils.

Keep voltages low and switch off before changing coils.

## Common errors

- Using the angle between the field and the plane as θ in Φ = BA cos θ. Check which angle you were given.
- Forgetting N when the question asks for flux linkage or e.m.f.
- Saying Lenz's law stops the change. It opposes the change.
- Inverting the current ratio. Ip/Is = Ns/Np, not Np/Ns.

## Official syllabus

This guide follows the OCR Advanced GCE in Physics A (H556) specification, Version 3.0 (March 2026), for first assessment in 2017, published by OCR, section 6.3.3 (Electromagnetism), statements (a) to (f).
