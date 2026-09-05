---
title: "AS Physics: Waves — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Waves"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 7.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "as-waves"
    subtopic: "as-progressive-waves"
  - qualification: "a-level"
    topic: "as-waves"
    subtopic: "as-transverse-and-longitudinal-waves"
  - qualification: "a-level"
    topic: "as-waves"
    subtopic: "as-doppler-effect-for-sound-waves"
  - qualification: "a-level"
    topic: "as-waves"
    subtopic: "as-electromagnetic-spectrum"
  - qualification: "a-level"
    topic: "as-waves"
    subtopic: "as-polarisation"
description: "Condensed recall notes on wave properties, the wave equation, the electromagnetic spectrum, polarisation and the Doppler effect for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Waves study guide](/resources/as-physics-waves/).

## Wave quantities

| Quantity | Symbol | Meaning |
|---|---|---|
| Displacement | x | Distance of a point from equilibrium |
| Amplitude | A | Maximum displacement |
| Wavelength | λ | Distance between adjacent points in phase |
| Period | T | Time for one complete oscillation |
| Frequency | f | Oscillations per second (Hz) |
| Wave speed | v | Distance travelled per second |

```
v = f λ            f = 1 / T
```

**Intensity ∝ amplitude²** — doubling the amplitude quadruples the intensity. And intensity ∝ 1/r² for an **ideal isotropic point source radiating equally in all directions with negligible absorption**, since the same total power is spread over the surface of an ever-larger sphere as distance from the source increases — doubling the distance from such a source cuts the intensity to a quarter, not a half. A directional source, a source near a reflecting boundary, or significant absorption in the medium can all make the real fall-off deviate from a simple inverse-square law.

## Transverse vs longitudinal

| | Transverse | Longitudinal |
|---|---|---|
| Oscillation | **Perpendicular** to energy transfer | **Parallel** to energy transfer |
| Structure | Crests and troughs | Compressions and rarefactions |
| Polarisable? | **Yes** | **No** |
| Examples | Light, all EM waves, water waves | Sound, ultrasound |

Only transverse waves can be polarised — the standard reason sound cannot be, since a longitudinal oscillation has only one direction (parallel to travel) to begin with, so there is no second plane for a filter to restrict it to.

## Polarisation and Malus's law

Unpolarised light has oscillations in all planes perpendicular to travel. A polariser transmits one plane only, halving the intensity.

```
I = I0 cos^2(theta)

Worked example: plane-polarised light of intensity 8.0 W/m2 passes through
a filter at 30 degrees to the plane of polarisation.
I = 8.0 x cos^2(30) = 8.0 x 0.75 = 6.0 W/m2
```

This formula applies to light that is **already plane-polarised** — the case tested at this level, not the separate question of what happens when unpolarised light first meets a polariser. θ is measured between the filter's own transmission axis and the plane in which the incoming light is already polarised, not any other reference direction.

Two polarisers at 90° ("crossed") transmit **zero** intensity.

## The electromagnetic spectrum

```
radio -> microwave -> infrared -> VISIBLE -> ultraviolet -> X-ray -> gamma
LONGEST wavelength, LOWEST frequency ------> SHORTEST, HIGHEST
```

Visible light: roughly 400 nm (violet) to 700 nm (red). All EM waves are **transverse**, travel at **3.00 × 10⁸ m/s** in a vacuum, and are progressive transfers of energy — carrying energy from source to receiver without transferring matter, exactly like every other wave in this topic.

## The Doppler effect

For a source moving relative to an observer:

```
f_observed = f_source x v / (v +/- v_s)

approaching -> use MINUS in the denominator -> frequency INCREASES
receding    -> use PLUS                     -> frequency DECREASES
```

The wavelength is compressed ahead of the source and stretched behind it. The source frequency itself does not change.

```
Worked example: a train's horn emits sound at 500 Hz and approaches a
platform at 20 m/s. Speed of sound = 340 m/s.
f_observed = 500 x 340 / (340 - 20) = 500 x 340 / 320 = 531 Hz
```

Only the **stationary observer, moving source** case is required at this level — the more general case, where the observer also moves, isn't examined at AS. See the [Waves practice questions](/resources/as-physics-waves-practice/) for the full worked-answer versions of both calculations above.

## Exam traps

- Intensity ∝ amplitude **squared**, not amplitude.
- Sound cannot be polarised — it is longitudinal.
- Phase difference in **radians** (2π per cycle) or degrees (360° per cycle); state which.
- In the Doppler equation, approaching gives a *smaller* denominator and therefore a higher frequency.
- Wave speed depends on the **medium**; frequency is set by the source and does not change on refraction — the wavelength does.
- Malus's law (I = I₀cos²θ) only applies to light that is **already plane-polarised** — this specification does not require the separate case of unpolarised light meeting a first filter.
- Crossed polarisers (90° apart) give **zero**, not a small non-zero, transmitted intensity — cos²(90°) = 0 exactly.

## Self-test

1. State the wave equation and the relationship between f and T.
2. Why can light be polarised but sound cannot?
3. Amplitude is doubled. What happens to intensity?
4. Order the EM spectrum from longest to shortest wavelength.
5. A siren approaches you. Does the observed frequency rise or fall, and why?
6. Plane-polarised light of intensity 12 W/m² passes through a filter at 60° to the plane of polarisation. Find the transmitted intensity.
7. Two polarisers are crossed at 90°. What intensity is transmitted, and why?

**Answers:** 1. v = fλ; f = 1/T. 2. Light is transverse, so oscillations occur in many planes perpendicular to travel and one plane can be selected; sound is longitudinal, oscillating parallel to travel, so there is no plane to filter. 3. It quadruples (I ∝ A²). 4. Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma. 5. It rises — the wavefronts ahead of the source are compressed, shortening the observed wavelength and raising the observed frequency, although the source frequency is unchanged. 6. I = 12 × cos²(60°) = 12 × 0.25 = **3.0 W/m²**. 7. Zero — cos²(90°) = 0, so no light with its plane of polarisation at 90° to the filter's transmission axis can pass through.
