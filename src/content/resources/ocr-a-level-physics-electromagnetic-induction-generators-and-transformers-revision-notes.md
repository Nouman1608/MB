---
title: "OCR A Level Physics A: Electromagnetic induction, generators and transformers (H556) -- Revision Notes"
seoTitle: "OCR A Level Physics Induction & Transformers Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on flux, flux linkage, Faraday and Lenz, search coils, a.c. generators and transformers for OCR A Level Physics A (H556)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
These notes condense statements 6.3.3(a) to 6.3.3(f) of the OCR Advanced GCE in Physics A specification (H556), Version 3.0 (March 2026), for first assessment in 2017. The [study guide](/resources/ocr-a-level-physics-electromagnetic-induction-generators-and-transformers/) has the full explanations, and these notes are for recall. Afterwards use the [practice questions](/resources/ocr-a-level-physics-electromagnetic-induction-generators-and-transformers-practice/).

Links: [OCR A Level Physics hub](/boards/ocr/a-level/physics/), [printable checklist](/checklists/ocr/a-level/physics/) and [free diagnostics](/diagnostics/).

## Key results

| Statement | Result | Unit |
|---|---|---|
| 6.3.3(a) | Φ = BA cos θ, with θ between B and the normal to the area | weber, Wb = T m² |
| 6.3.3(b) | flux linkage = NΦ = NBA cos θ | Wb turns |
| 6.3.3(c) | Faraday: induced e.m.f. proportional to rate of change of flux linkage. Lenz: induced effect opposes the change | none |
| 6.3.3(d)(i) | E = −Δ(NΦ)/Δt | volt, V |
| 6.3.3(e) | generator coil: E = NBAω sin ωt, peak E₀ = NBAω | V |
| 6.3.3(f)(i) | ideal transformer: Ns/Np = Vs/Vp = Ip/Is | none |

## Definitions to learn

- **Weber:** the flux through an area of 1 m² perpendicular to a uniform field of flux density 1 T.
- **Magnetic flux:** the product of the flux density and the area, resolved perpendicular to the field: Φ = BA cos θ.
- **Flux linkage:** the flux through a coil multiplied by its number of turns, NΦ.
- **Faraday's law:** the size of the induced e.m.f. is directly proportional to how fast the magnetic flux linkage changes.
- **Lenz's law:** the direction of the induced e.m.f. is such that it opposes the change that causes it.

## 6.3.3(a) and (b) Flux and flux linkage

Method in steps:

1. Find the area A in m². For a circle use πr², so convert centimetres to metres first.
2. Work out the angle between the field and the normal to the area. If you are given the angle to the plane, subtract it from 90°.
3. Calculate Φ = BA cos θ.
4. For a coil, multiply by N to get the flux linkage.

Worked reminder: a coil of 150 turns and area 2.0 × 10⁻³ m² has its normal at 40° to a field of 0.30 T. Φ = 0.30 × 2.0 × 10⁻³ × cos 40° = 4.6 × 10⁻⁴ Wb. NΦ = 150 × 4.6 × 10⁻⁴ = 0.069 Wb turns.

Key points: Φ is largest when the field is perpendicular to the surface (θ = 0) and zero when the field is parallel to it (θ = 90°). Flux changes sign if the coil is turned over.

## 6.3.3(c) Faraday and Lenz

Flux linkage can change because the field changes, because the area changes, or because the angle changes. All three induce an e.m.f.

Lenz's law, in steps:

1. Decide whether the flux linkage through the coil is increasing or decreasing, and in which direction it points.
2. The induced current produces a field that opposes that change: it points against an increase and with a decrease.
3. Use the right-hand grip rule to turn that field direction into a current direction.

Lenz's law and energy: pushing a magnet into a coil needs a force because the induced current opposes the motion. The work done is the energy transferred to the circuit. If the induced effect helped the change, energy would be created from nothing.

An open circuit has an induced e.m.f. but no current, so there is no opposing force.

## 6.3.3(d)(i) Induced e.m.f.

E = −Δ(NΦ)/Δt

- The minus sign records Lenz's law. Use magnitudes in calculations unless the direction is asked for.
- On a flux linkage against time graph, E is minus the gradient. A flat line means E = 0.
- On an e.m.f. against time graph, the area under the line is the change in flux linkage.
- Turning a coil through 180° reverses the flux, so the change is 2NΦ, not NΦ.

Worked reminder: a flux linkage falls uniformly from 0.072 Wb turns to 0.012 Wb turns in 0.30 s. |E| = (0.072 − 0.012)/0.30 = 0.20 V.

## 6.3.3(d)(ii) Search coil investigations

A search coil is a small coil with many turns, joined to an oscilloscope or voltmeter.

- Alternating field B₀ sin ωt gives a search coil e.m.f. with peak E₀ = NAωB₀, so B₀ = E₀/(NAω).
- Peak e.m.f. is proportional to cos θ as the coil is rotated, so a graph of E₀ against cos θ is a straight line through the origin.
- At fixed frequency and area, E₀ is proportional to B₀, so E₀ plotted against position shows how B varies.

Procedure checklist:

1. Fix the frequency and current of the supply to the field coil.
2. Place the search coil with its normal along the field axis and read the peak e.m.f.
3. Rotate or move it in equal steps, repeating each reading.
4. Control distance, current and frequency, and say which one you vary.

Worked reminder: a search coil with 200 turns and area 2.5 × 10⁻⁴ m² gives a peak e.m.f. of 25 mV at 100 Hz. ω = 628 rad s⁻¹, so B₀ = 0.025/(200 × 2.5 × 10⁻⁴ × 628) = 8.0 × 10⁻⁴ T.

## 6.3.3(e) The a.c. generator

Parts and their jobs:

| Part | Job |
|---|---|
| Rotating coil | Flux linkage changes as it turns, so an e.m.f. is induced |
| Magnets | Provide a uniform field |
| Slip rings | Rotate with the coil and keep the connection unbroken |
| Brushes | Fixed carbon contacts that touch the rings and carry the current to the circuit |

- Flux linkage = NBA cos ωt. The e.m.f. is zero when the coil is perpendicular to the field and has its peak value when it is parallel.
- E₀ = NBAω, so doubling the rotation frequency doubles both the peak e.m.f. and the frequency of the output.
- The output graph is a sine wave, the same shape as the minus gradient of a cosine flux linkage graph.

Worked reminder: N = 60, A = 0.010 m², B = 0.15 T, f = 50 Hz. ω = 314 rad s⁻¹, so E₀ = 60 × 0.15 × 0.010 × 314 = 28 V.

## 6.3.3(f)(i) The transformer

Construction: a primary and a secondary coil on a laminated soft iron core.

How it works:

1. An alternating p.d. across the primary causes an alternating current and an alternating flux in the core.
2. The core links the flux to the secondary.
3. The changing flux linkage in the secondary induces an alternating e.m.f.

Ideal transformer: no energy losses, so VpIp = VsIs.

| Type | Ns compared with Np | Vs | Is |
|---|---|---|---|
| Step-up | greater | greater | smaller |
| Step-down | smaller | smaller | greater |

The core is laminated to reduce eddy currents and the energy transferred as heat. A transformer needs an alternating input, because a steady current gives no changing flux.

Worked reminder: an ideal transformer has Np = 500 and Ns = 25. The primary p.d. is 120 V and the secondary current is 4.0 A. Vs = 120 × 25/500 = 6.0 V. Ip = 4.0 × 25/500 = 0.20 A. Check: 120 × 0.20 = 24 W and 6.0 × 4.0 = 24 W.

Efficiency = output power/input power × 100%.

## 6.3.3(f)(ii) Transformer investigations

- Use a low-voltage a.c. supply and coils with a changeable number of turns.
- Vary Ns at fixed Np and Vp, and plot Vs against Ns. The gradient should be Vp/Np.
- Vary Np at fixed Ns, and plot Vs against 1/Np. The gradient is VpNs.
- Measured Vs below the ideal value is a systematic effect from losses, not a random error.
- Safety: low voltage only, switch off before changing coils.

## Must-know distinctions

- Flux Φ compared with flux linkage NΦ: one has no N.
- Rate of change of flux linkage compared with the change of flux linkage: Faraday's law needs the rate.
- Opposes the change compared with opposes the field: Lenz's law applies to the change.
- In a generator, flux is greatest when E is zero.
- Ip/Is = Ns/Np, whereas Vs/Vp = Ns/Np.

## Quick self-test

1. A flat coil of area 6.0 × 10⁻³ m² is in a uniform field of 0.20 T with the normal at 25° to the field. Calculate the flux.
2. State the unit weber in terms of the tesla.
3. A coil of 300 turns links a flux of 2.0 × 10⁻⁴ Wb. State the flux linkage.
4. The flux linkage in a coil falls from 0.048 to 0.018 Wb turns in 0.15 s. Find the magnitude of the induced e.m.f.
5. Why does the south pole of a magnet entering a coil feel a repelling force?
6. A generator coil spins at 30 Hz. What is the frequency of its output, and what happens to the peak e.m.f. if it spins at 60 Hz?
7. State the job of the slip rings.
8. A search coil has 100 turns and area 1.0 × 10⁻⁴ m². It sees a field with peak 5.0 × 10⁻³ T alternating at 50 Hz. Find the peak e.m.f.
9. An ideal transformer has 400 primary turns and 100 secondary turns. The primary p.d. is 80 V. Find the secondary p.d.
10. The primary current in question 9 is 0.50 A. Find the secondary current.
11. Give two reasons why a real transformer is less than 100% efficient.

### Answers

1. Φ = 0.20 × 6.0 × 10⁻³ × cos 25° = 1.1 × 10⁻³ Wb
2. 1 Wb = 1 T m²
3. NΦ = 300 × 2.0 × 10⁻⁴ = 0.060 Wb turns
4. (0.048 − 0.018)/0.15 = 0.20 V
5. The induced current opposes the change, so the coil face nearest the south pole becomes a south pole and repels it. Otherwise energy would not be conserved.
6. 30 Hz. Peak e.m.f. doubles.
7. They keep the rotating coil connected to the fixed brushes and so the external circuit.
8. E₀ = 100 × 1.0 × 10⁻⁴ × (2π × 50) × 5.0 × 10⁻³ = 1.6 × 10⁻² V
9. Vs = 80 × 100/400 = 20 V
10. Is = 0.50 × 400/100 = 2.0 A
11. Any two from: resistance of the windings (heating), eddy currents in the core, flux that does not link both coils.

## Where marks are usually lost

- Using the angle to the plane instead of the angle to the normal in Φ = BA cos θ.
- Leaving out N in a flux linkage or e.m.f. calculation.
- Not converting centimetres to metres before squaring a radius.
- Writing "opposes the change" without saying which change.
- Forgetting that flipping a coil doubles the change in flux linkage.
- Inverting the current ratio in the transformer equation.
- Stating the e.m.f. is highest when the flux is highest in a generator.
- Calling a transformer loss a random error, or forgetting to say what was held constant in an investigation.

## Official syllabus

These notes follow the OCR Advanced GCE in Physics A (H556) specification, Version 3.0 (March 2026), for first assessment in 2017, published by OCR, section 6.3.3 (Electromagnetism), statements (a) to (f).
