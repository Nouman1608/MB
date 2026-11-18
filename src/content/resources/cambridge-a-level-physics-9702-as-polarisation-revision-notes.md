---
title: "Cambridge AS & A Level Physics (9702): Polarisation -- Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Waves"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 7.5
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "as-waves"
    subtopic: "as-polarisation"
description: "Condensed recall for Cambridge AS Physics 9702 subtopic 7.5: polarisation of transverse waves, Malus's law and series of polarising filters, with a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed notes on subtopic 7.5 Polarisation (Cambridge 9702, AS Topic 7). For
full explanations and worked examples, use the
[polarisation study guide](/resources/cambridge-a-level-physics-9702-as-polarisation/);
for the whole topic, see the [Waves revision notes](/resources/as-physics-waves-revision-notes/).

## What 7.5 asks you to do

- Understand that polarisation is a phenomenon associated with **transverse** waves
- Recall and use Malus's law, I = I₀cos²θ, for a **plane-polarised** electromagnetic wave passing through one filter or a **series** of filters
- Not required: calculating the effect of a filter on **unpolarised** waves

## Definitions

> **Plane-polarised wave**: a transverse wave whose oscillations are confined to one direction perpendicular to the direction of travel (for an EM wave, the electric field direction).

> **Unpolarised wave**: oscillations in many directions perpendicular to the direction of travel.

- Only transverse waves can be polarised.
- Longitudinal waves (sound) oscillate along the direction of travel, so there is no perpendicular direction to restrict.
- Light can be polarised → evidence that light is transverse.

## Malus's law

```
I = I0 cos^2(theta)
I0    = intensity of plane-polarised wave reaching the filter
theta = angle between plane of polarisation and filter's transmission axis
```

**Why cos²:** amplitude transmitted = A₀cos θ; intensity ∝ amplitude², so I ∝ cos²θ.

After the filter, the wave is plane-polarised **along the filter's axis**.

| θ | 0° | 30° | 45° | 60° | 90° |
|---|---|---|---|---|---|
| cos²θ | 1 | 0.75 | 0.50 | 0.25 | 0 |
| Amplitude fraction cos θ | 1 | 0.87 | 0.71 | 0.50 | 0 |

## Series of filters: the method

1. Find θ₁ between the incident plane of polarisation and filter 1. I₁ = I₀cos²θ₁.
2. Find θ₂ between the axes of filter 1 and filter 2 (not from the original plane). I₂ = I₁cos²θ₂.
3. Repeat for each further filter.

**Example.** I₀ = 200 W m⁻²; filter 1 at 25° to the original plane; filter 2 at 65° to the original plane.

```
I1 = 200 cos^2(25) = 164 W m^-2
relative angle = 65 - 25 = 40 degrees
I2 = 164 cos^2(40) = 96 W m^-2
```

**Crossed filters with a middle filter at 45°:** I = I₀ × 0.50 × 0.50 = **0.25I₀**, although the crossed pair alone transmits nothing.

**Example — finding the angle.** A filter transmits 36% of the intensity of plane-polarised light.

```
cos^2(theta) = 0.36     cos(theta) = 0.60     theta = 53 degrees
```

**Example — three filters.** I₀ = 40 W m⁻²; the filters are at 20°, 40° and 90° to the original plane.

```
relative angles: 20, 20, 50 degrees
I = 40 x cos^2(20) x cos^2(20) x cos^2(50) = 12.9 W m^-2
```

Always list the **relative** angles first, then multiply the cos² factors.

## Demonstrations

| Set-up | Observation |
|---|---|
| Two polarising filters, second rotated | Maximum when axes parallel, zero when crossed; two maxima and two zeros per 360° |
| Microwave transmitter and receiver, receiver rotated | Signal falls from maximum to near zero after 90° |
| Metal grille between microwave transmitter and receiver | Blocks when rods parallel to the electric field; transmits when perpendicular |

## I–θ graph

- Shape: cos²θ, never negative.
- Maxima at 0°, 180°, 360°; zeros at 90°, 270°.
- Period 180°.

## Key terms

| Term | Meaning to recall |
|---|---|
| Polarisation | Restriction of a transverse wave's oscillations to one direction perpendicular to travel |
| Plane of polarisation | Plane containing the direction of travel and the oscillation direction |
| Polarising filter | Transmits only the oscillation component along its transmission axis |
| Crossed filters | Two filters with axes at 90°; no transmission |
| Malus's law | I = I₀cos²θ for plane-polarised waves |

## Exam traps

- cos θ used instead of cos²θ.
- Second filter's angle measured from the original plane, not from the first filter.
- Calculator in radians.
- Malus's law applied to unpolarised light (not required by the syllabus).
- "Sound is not polarised because it is not electromagnetic" — the reason is that it is longitudinal.
- Amplitude and intensity fractions confused: at 60°, amplitude halves but intensity quarters.

## Self-test

1. What is a plane-polarised wave?
2. Why can only transverse waves be polarised?
3. State Malus's law and define θ.
4. Plane-polarised light of 50 W m⁻² passes through a filter at 30° to its plane. Find the transmitted intensity.
5. What is transmitted when θ = 90°?
6. A filter transmits 75% of the intensity of plane-polarised light. Find θ.
7. Light of 80 W m⁻² passes through filters at 20° and 50° to the original plane of polarisation. Find the final intensity.
8. A filter at 45° is placed between two crossed filters. What fraction of the plane-polarised light reaching the first filter emerges?
9. Why can sound not be polarised?
10. A metal grille's rods are parallel to the electric field of plane-polarised microwaves. Are the microwaves transmitted?
11. At θ = 60°, what fraction of the amplitude is transmitted?
12. How many times does the transmitted intensity fall to zero as an analyser is rotated through 360°?

**Answers:**
1. A transverse wave with oscillations in one direction only, perpendicular to the direction of travel.
2. Polarisation restricts oscillations perpendicular to the direction of travel; longitudinal waves have none.
3. I = I₀cos²θ; θ is the angle between the plane of polarisation of the incident wave and the filter's transmission axis.
4. 50 × 0.75 = **37.5 W m⁻²**.
5. **Nothing** (I = 0).
6. cos²θ = 0.75, cos θ = 0.866, θ = **30°**.
7. 80 × cos²20° = 70.6 W m⁻²; then × cos²30° = **53 W m⁻²**.
8. 0.50 × 0.50 = **0.25** (if the first crossed filter is aligned with the incident plane).
9. It is longitudinal: it oscillates along its direction of travel.
10. **No**: rods parallel to the field block the microwaves.
11. cos 60° = **0.50**.
12. **Twice**.
