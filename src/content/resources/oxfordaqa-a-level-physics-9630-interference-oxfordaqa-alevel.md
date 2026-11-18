---
title: "OxfordAQA International AS and A-level Physics (9630): Interference"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.5 – Oscillations and waves"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "AS"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 5.06
syllabusTopics:
  - qualification: "a-level"
    topic: "oscillations-and-waves-oxfordaqa-alevel"
    subtopic: "interference-oxfordaqa-alevel"
description: "Deeper study guide to 9630 section 3.5.6 interference: coherence, sources in antiphase, Young's slits uncertainties, microwaves, white light and laser safety."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section **3.5.6 Interference** of the OxfordAQA International AS and A-level Physics (9630) specification. The section lists "path difference. Coherence", interference and diffraction "using a laser as a source of monochromatic light", Young's double-slit experiment with the fringe spacing w = λD/s, the pattern produced with white light, awareness of laser safety, and interference "produced with sound and electromagnetic waves". It includes Required practical 5, "investigation of interference effects to include the Young's slit experiment and interference by a diffraction grating". You do not need to describe how a laser works.

The broader [study guide to interference and diffraction with double slits and gratings](/resources/oxfordaqa-a-level-physics-interference-and-diffraction-double-slits-and-gratings/) introduces the formula and its derivation. This page tackles the harder cases: sources that are not in phase, a full uncertainty analysis of a Young's slits result, and microwave interference where the small-angle formula breaks down. Afterwards use the [interference revision notes](/resources/oxfordaqa-a-level-physics-9630-interference-oxfordaqa-alevel-revision-notes/) and the [interference practice questions](/resources/oxfordaqa-a-level-physics-9630-interference-oxfordaqa-alevel-practice/).

## Coherence, more carefully

Two sources are **coherent** when they have the same frequency and a **constant** phase difference. The phase difference does not have to be zero. What matters is that it does not change, so the pattern of maxima and minima stays in the same place long enough to be seen.

- Two loudspeakers wired to one signal generator are coherent. If one speaker's leads are swapped, they are still coherent, but now in antiphase.
- Two slits lit by the same laser beam are coherent, because any change in the phase of the light reaches both slits together.
- Two separate filament lamps are not coherent. Each emits light in short, random bursts, so the phase difference between them changes continually and any pattern averages away.

Monochromatic means a single wavelength. Coherent sources must be monochromatic in the sense of sharing a frequency, but two monochromatic sources are not automatically coherent.

## The general condition for a maximum

For sources that oscillate **in phase**:

| Path difference | Arrival | Result |
|---|---|---|
| nλ (n = 0, 1, 2 ...) | In phase | Constructive interference: maximum |
| (n + ½)λ | In antiphase | Destructive interference: minimum |

If the sources are in **antiphase**, every condition swaps: a path difference of nλ now gives a minimum and (n + ½)λ gives a maximum. The safest method is to add the phase difference the waves start with to the phase difference from the paths.

### Worked example 1: loudspeakers in antiphase

Two loudspeakers are driven at 1000 Hz from one signal generator, but one is connected the wrong way round so they emit in antiphase. Sound travels at 340 m s⁻¹. Point P is the same distance from both. Point Q is 0.17 m further from one speaker than the other.

```
λ = c / f = 340 / 1000 = 0.34 m
P: path difference = 0, so waves arrive in antiphase → quiet
Q: path difference = 0.17 m = λ/2, which adds half a cycle to the half cycle the sources already differ by → in phase → loud
```

The centre line, normally the loudest place, is now quiet. The whole pattern has shifted by half a fringe, but the spacing is unchanged.

## Young's slits: what each variable does

w = λD/s holds when D is much larger than s, so the angles are small.

| Change | Effect on w | Why |
|---|---|---|
| Double D | w doubles | The same angle spreads over a larger distance |
| Halve s | w doubles | A given path difference needs a larger angle |
| Red light replaced by blue | w decreases | Shorter λ needs a smaller path difference for each order |
| Laser made brighter | No change | Intensity changes brightness, not position |
| One slit covered | Fringes disappear | Only one source remains, so only the single-slit diffraction pattern is left |

## Required practical 5: a full analysis

Examiners often give data and ask for the wavelength and its uncertainty. The method is to find each percentage uncertainty, add them for a quotient, and identify the largest.

### Worked example 2: wavelength with an uncertainty

A laser lights a double slit with s = 0.25 ± 0.01 mm. The screen is D = 2.400 ± 0.005 m away. The distance across ten fringe spacings is 58 ± 1 mm.

```
w = 58 / 10 = 5.8 mm
λ = ws / D = 5.8 × 10⁻³ × 0.25 × 10⁻³ / 2.400 = 6.04 × 10⁻⁷ m

% uncertainty in s:      0.01 / 0.25 × 100 = 4.0%
% uncertainty in D:      0.005 / 2.400 × 100 = 0.2%
% uncertainty in 10w:    1 / 58 × 100 = 1.7%
total:                   4.0 + 0.2 + 1.7 = 5.9%

λ = (6.0 ± 0.4) × 10⁻⁷ m
```

The slit separation dominates. Measuring more fringes or a longer D would barely help; the improvement that matters is measuring s more precisely, for example with a travelling microscope. Measuring across ten spacings divides the ruler's uncertainty by ten for each spacing, which is why the fringe term is small.

A second method, which uses several readings, is to vary D and plot w against D. The gradient is λ/s, and a line through the origin checks that there is no systematic error in measuring D.

## Interference with microwaves and sound

The same three-step explanation works for any wave: coherent sources, path difference at the point, arrival in phase or in antiphase. With microwaves and sound, the wavelength is centimetres, not hundreds of nanometres, and that changes the arithmetic.

### Worked example 3: when w = λD/s fails

Microwaves of wavelength 2.8 cm pass through two slits 8.0 cm apart in a metal plate. A detector moves along a line 0.60 m beyond the plate. Find the angle to the first maximum.

The small-angle condition is not met, so use the path difference directly. For a distant point at angle θ, the path difference from the two slits is s sin θ. The first maximum needs a path difference of λ:

```
sin θ = λ / s = 2.8 / 8.0 = 0.35
θ = 20.5°
distance along the detector line ≈ 0.60 × tan 20.5° = 0.22 m
w = λD / s would give 0.028 × 0.60 / 0.080 = 0.21 m
```

The two answers differ by several per cent, and the gap grows for higher orders. With light, s is often a thousand times λ, and the formula is excellent.

Two radio transmitters broadcasting the same signal produce the same effect on a large scale: a car moving between them passes through regions of strong and weak reception.

## White light fringes

Every wavelength forms its own pattern, all with a maximum at the centre. So the central fringe is white. Each side fringe is a small spectrum, with violet nearest the centre and red furthest out, because w is proportional to λ. Only a few fringes are seen before the colours overlap and wash out to an even, pale illumination. White light is useful for locating the central fringe; a laser is better for measuring λ.

## Laser safety

The specification expects awareness of the hazards. The main hazard is that a laser beam stays narrow, so the eye's lens focuses it onto a tiny spot on the retina.

- Use a low-power laser and never look along the beam.
- Watch for reflections from shiny surfaces, including watches and rings.
- End the beam at a matt, non-reflective stop.
- Keep the beam below eye level and warn others in the room.

## Common mistakes

- Defining coherence as "in phase". The phase difference must be constant, not necessarily zero.
- Using the in-phase conditions when the sources are in antiphase.
- Dividing a distance across n fringes by n rather than by the number of spacings.
- Using w = λD/s with microwaves when the slit separation is only a few wavelengths.
- Saying a brighter laser gives wider fringes.
- Listing "wear goggles" as the only safety measure: the key point is never to let the beam or a reflection enter the eye.

## Exam technique

- **Explain** a pattern: name coherent sources, give the path difference, state in phase or antiphase, and link to maximum or minimum. Each step is usually a mark.
- **Calculate** λ from fringes: show the number of spacings, convert mm to m, and give the answer to the same significant figures as the data.
- **Evaluate** a method: identify the largest percentage uncertainty and suggest a specific instrument or technique to reduce it.
- **Describe** the white-light pattern: central white fringe, coloured fringes with violet inside and red outside, few fringes visible.

## Next steps

Condense this page with the [interference revision notes](/resources/oxfordaqa-a-level-physics-9630-interference-oxfordaqa-alevel-revision-notes/) and test yourself with the [interference practice questions](/resources/oxfordaqa-a-level-physics-9630-interference-oxfordaqa-alevel-practice/). Gratings are treated in depth in the [diffraction study guide](/resources/oxfordaqa-a-level-physics-9630-diffraction-oxfordaqa-alevel/), and the uncertainty rules are in the [measurements and their errors guide](/resources/a-level-oxfordaqa-physics-measurements-and-their-errors/).
