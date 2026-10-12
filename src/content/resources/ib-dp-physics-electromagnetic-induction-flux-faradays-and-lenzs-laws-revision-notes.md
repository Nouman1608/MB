---
title: "IB DP Physics: Electromagnetic induction: flux, Faraday's and Lenz's laws and generators (DP Physics) -- Revision Notes"
seoTitle: "IB DP Physics D.4 Induction (HL) Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["ib"]
topic: "Electromagnetic induction: flux, Faraday's and Lenz's laws and generators"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Physics"]
syllabusSeries: "First assessment 2025"
order: 293
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-physics-topic-d"
    subtopic: "ib-dp-physics-d-4"
description: "Condensed HL revision notes for IB DP Physics D.4 induction: formulas, Lenz's law method, generator results, a self-test and common mark losses."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes condense **sub-topic D.4, Induction**, from Topic D of the IB Diploma Programme *Physics guide*, first assessment 2025. D.4 is **additional higher level (HL only)**; there is no standard level content. For full explanations and worked examples, read the [study guide](/resources/ib-dp-physics-electromagnetic-induction-flux-faradays-and-lenzs-laws/), then test yourself with the [practice questions](/resources/ib-dp-physics-electromagnetic-induction-flux-faradays-and-lenzs-laws-practice/). Track your progress on the [IB Physics hub](/boards/ib/ib-dp/physics/) and the [printable checklist](/checklists/ib/ib-dp/physics/). To find weak spots first, try the [free 10-minute diagnostics](/diagnostics/).

## Key results

| Result | Meaning and conditions | Tier |
|---|---|---|
| Φ = BA cos θ | Flux in Wb (= T m²); θ is the angle between B and the **normal** to the area; uniform B, flat area | HL only |
| ε = −N ΔΦ/Δt | Induced emf for N turns; depends on rate of change of flux | HL only |
| ε = BvL | Straight conductor, with B, v and the conductor mutually perpendicular | HL only |
| Lenz's law | Induced current opposes the **change** in flux; follows from energy conservation | HL only |
| ε = NBAω sin ωt | Coil rotating at constant ω = 2πf in uniform B, timed from flux maximum | HL only |
| ε_max = NBAω | Peak emf of that coil; scales with f, N, B and A | HL only |

## Flux: what can change it

Flux changes if **B** changes (time-varying field), if **A** changes (coil entering, leaving or stretching in a field) or if **θ** changes (coil rotating). If none of these changes, there is no emf, however large the flux.

- Field along the normal: θ = 0°, flux = BA (largest).
- Field lying in the surface: θ = 90°, flux = 0.
- If the angle is given to the surface, use θ = 90° minus that angle.

## Method: size of an induced emf

1. Name what is changing: B, A or θ.
2. Find the change in flux per turn, ΔΦ, and the time Δt (or read the gradient of a Φ–t graph).
3. Multiply by N and divide by Δt.
4. For a rod or one side of a coil in a uniform field, BvL is a faster route to the same answer.

On a Φ–t graph: steep means large emf, flat means zero emf, negative gradient means reversed emf.

## Method: direction (Lenz's law)

1. Is the flux through the loop rising or falling? Which way does it point?
2. The induced current's own field **opposes the change**: against the flux if rising, along it if falling.
3. Use the right-hand grip rule on that field to get the current direction.
4. Check with energy: the force on the induced current must oppose the motion, so that work is done to produce the electrical energy.

Quick pictures: an approaching north pole meets a north-facing coil face and is repelled. A receding north pole is attracted back by a south-facing face. In both cases you do work against the force.

## Energy for a moving rod

For a rod on rails at constant speed v, with circuit resistance R:

- emf: ε = BvL, and current I = ε/R
- magnetic force: F = BIL, which opposes the motion
- power you supply: Fv, which equals the heating power I²R

If you stop pushing, the rod slows down and its kinetic energy goes into heating the circuit. A rod pulled by a constant force reaches a terminal speed when the magnetic force matches the pull.

## Rotating-coil generator

| Feature | Result |
|---|---|
| Flux | Φ = BA cos ωt (timed from the plane perpendicular to B) |
| emf | ε = NBAω sin ωt, a sine wave |
| Peak emf | ε_max = NBAω |
| Emf zero | Plane perpendicular to B (flux maximum, rate of change zero) |
| Emf peak | Plane parallel to B (flux zero, rate of change largest) |
| Period | T = 1/f = 2π/ω |

**Changing the frequency of rotation:** if f is multiplied by a factor k, then the peak emf is multiplied by k and the period is divided by k. The waveform is taller and narrower. To raise the output you can also raise N, B or A.

If timing starts with the plane parallel to B, the same wave starts at its peak and is a cosine.

## Small worked reminders

**Flux graph.** A coil of 60 turns has flux rising uniformly from 0 to 4.0 × 10⁻³ Wb in 0.50 s, then constant for 0.50 s. During the first 0.50 s the magnitude of the emf is 60 × 4.0 × 10⁻³ / 0.50 = 0.48 V. During the next 0.50 s it is zero, because the gradient is zero.

**Generator comparison.** A coil of N turns rotating at 20 Hz gives a peak emf of 8.0 V. Rotating at 30 Hz, with N, B and A unchanged, gives 8.0 × 30/20 = 12 V, and the period shortens from 50 ms to 33 ms.

**Rotating coil, emf at a time.** If ε_max = 20 V and f = 50 Hz, then at t = 2.5 ms, ωt = 2π × 50 × 0.0025 = 0.785 rad, so ε = 20 × sin 0.785 = 14 V.

## Must-know distinctions

- **Flux vs rate of change of flux.** The emf follows the rate of change. Maximum flux means zero emf in a rotating coil.
- **Opposes the change vs opposes the field.** Lenz's law never says the induced field is opposite to the original field. It is opposite to the **change**.
- **Emf vs current.** An emf is induced whether or not the circuit is complete. Current needs a closed circuit.
- **Cutting field lines vs flux change.** BvL and Faraday's law describe the same thing; use whichever fits the data.
- **Self-induction (qualitative).** A changing current in a coil induces an emf in that same coil, opposing the change in current. A current in an inductive circuit therefore rises or falls gradually instead of jumping, and opening a switch can cause a spark. Nothing more is required.

## Quick self-test

1. A loop of area 0.020 m² sits in a field of 0.50 T with its normal at 60° to the field. Find the flux.
2. A coil of 50 turns has its flux changed by 3.0 × 10⁻³ Wb in 0.10 s. Find the magnitude of the emf.
3. A rod 0.25 m long moves at 2.0 m s⁻¹ perpendicular to a field of 0.12 T. Find the emf across its ends.
4. The rod in question 3 is part of a circuit of resistance 0.040 Ω. Find the current, the magnetic force on the rod and the power needed to hold the speed steady.
5. A south pole is pushed towards a coil. State the polarity of the face of the coil nearest the magnet, and why.
6. A coil of 100 turns and area 0.010 m² rotates at 10 Hz in a field of 0.20 T. Find the peak emf.
7. The frequency in question 6 is doubled. State the new peak emf and the new period.
8. At which orientation of a rotating coil is the induced emf zero?
9. Give the unit weber in terms of tesla and metres.
10. A coil with an iron core is in series with a switch and a battery. Explain, in words, why the current takes time to reach its final value after the switch is closed.

### Answers

1. Φ = 0.50 × 0.020 × cos 60° = **5.0 × 10⁻³ Wb**.
2. ε = 50 × 3.0 × 10⁻³ / 0.10 = **1.5 V**.
3. ε = 0.12 × 2.0 × 0.25 = **0.060 V**.
4. I = 0.060 / 0.040 = **1.5 A**; F = BIL = 0.12 × 1.5 × 0.25 = **0.045 N**; P = Fv = 0.045 × 2.0 = **0.090 W**, which equals I²R = 2.25 × 0.040 = 0.090 W.
5. A south pole facing the coil. The induced current opposes the increase in flux, so it makes the near face repel the approaching pole. This opposition is required by energy conservation.
6. ω = 2π × 10 = 62.8 rad s⁻¹; ε_max = 100 × 0.20 × 0.010 × 62.8 = **12.6 V**.
7. Peak emf **25.1 V**; period falls from 0.10 s to **0.050 s**.
8. When the coil's plane is perpendicular to the field (flux at its maximum).
9. 1 Wb = **1 T m²**.
10. The growing current changes the flux through the coil itself, inducing an emf that opposes the rise in current, so the current increases gradually.

## Where marks are usually lost

- Measuring θ from the surface of the loop rather than from its normal.
- Saying the induced field opposes the original field instead of the change in flux.
- Giving a direction with no reasoning. State whether the flux is rising or falling, then the opposing field, then the current.
- Forgetting N when a coil has many turns.
- Using f instead of ω = 2πf in the peak emf.
- Claiming an emf in a coil that is wholly inside a uniform field and moving without rotating.
- Writing "emf is maximum when flux is maximum" for a rotating coil.
- Treating the minus sign in Faraday's law as a negative magnitude, rather than as the sign that expresses opposition.
- Describing self-induction without saying that the emf opposes the **change in current**.

## Official syllabus

These notes follow sub-topic D.4 (Induction) of the IB Diploma Programme *Physics guide*, first assessment 2025, published by the International Baccalaureate Organization. D.4 is additional higher level content only.
