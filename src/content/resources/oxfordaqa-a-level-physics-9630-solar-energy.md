---
title: "OxfordAQA A-Level Physics (9630): Solar energy"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.13 – Energy sources"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "A"
order: 13.3
syllabusTopics:
  - qualification: "a-level"
    topic: "energy-sources-oxfordaqa-alevel"
    subtopic: "solar-energy-oxfordaqa-alevel-physics"
description: "Study guide to OxfordAQA 9630 section 3.13.3: solar intensity, I = P/4πr², solar cell V-I curves, maximum power, arrays and Required practical 10."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.13.3, Solar energy, part of Section 3.13 Energy sources, which is International A-level only. A first set of examples, including the intensity at Earth and Mercury, one V-I table and the 1/√G method for Required practical 10, is in the [wind, solar and hydroelectric energy study guide](/resources/oxfordaqa-a-level-physics-wind-solar-and-hydroelectric-energy/). This page works from the measured intensity back to the Sun's power, explains how light intensity changes the V-I curve, designs an array to a specification and analyses Required practical 10 using LDR resistance. Condense it with the [solar energy revision notes](/resources/oxfordaqa-a-level-physics-9630-solar-energy-revision-notes/) and test yourself with the [solar energy practice questions](/resources/oxfordaqa-a-level-physics-9630-solar-energy-practice/).

## What the specification asks for

| Statement | What you must be able to do |
|---|---|
| Intensity of energy from the Sun at the Earth's surface | Explain what affects it |
| Use of inverse square law to determine intensity at different distances from the Sun: I = P/4πr² | Calculate intensity, distance or solar power |
| V-I characteristic and maximum power for a solar cell | Interpret the curve; find maximum power and the matching load |
| Arrangement of cells in solar arrays | Combine cells in series and parallel to meet a requirement |
| Required practical 10 | Investigate the inverse square law for light using an LDR and a point source |

## Intensity at the Earth's surface

**Intensity** is the power arriving per unit area at right angles to the radiation, in W m⁻². Just above the atmosphere it is about 1.4 × 10³ W m⁻². At the surface it is lower and changes all the time:

- The atmosphere absorbs and scatters part of the radiation, so on a clear day with the Sun high the surface intensity is roughly 1 × 10³ W m⁻².
- When the Sun is low, its light passes through a longer path in the atmosphere, and the same beam is spread over a larger area of ground, so the intensity on a horizontal surface is smaller. Panels are tilted to face the Sun.
- Cloud reduces it further, and at night it is zero, so the average over a day is much smaller than the peak.

## The inverse square law for the Sun

The Sun radiates power P equally in all directions. At distance r that power is spread over a sphere of area 4πr², so

I = P / 4πr²

This assumes no absorption in the space between. It gives a ratio method too: I₂/I₁ = (r₁/r₂)².

### Worked example 1: from intensity to the Sun's power

Above the atmosphere, 1.50 × 10¹¹ m from the Sun, the intensity is 1.36 × 10³ W m⁻². Find the power output of the Sun, and the intensity at Mars (2.28 × 10¹¹ m) and at Jupiter (7.78 × 10¹¹ m).

P = 4πr²I = 4π × (1.50 × 10¹¹)² × 1.36 × 10³ = **3.85 × 10²⁶ W**
Mars: I = 1.36 × 10³ × (1.50/2.28)² = **589 W m⁻²**
Jupiter: I = 1.36 × 10³ × (1.50/7.78)² = **50.6 W m⁻²**

At Jupiter a solar panel collects under 4% of what it would near Earth, so spacecraft there need very large panels.

## The solar cell V-I characteristic

A solar cell in light acts as a source of emf. As the load resistance is increased from zero:

- at **short circuit** (V = 0) the current is largest; this current is proportional to the light intensity
- the current stays almost constant over most of the voltage range
- near the **open-circuit voltage** the current falls steeply to zero

Power delivered is P = IV. It is zero at both ends and has a single maximum near the "knee" of the curve. The load resistance that draws maximum power is R = V/I at that point.

### Worked example 2: finding maximum power

A cell of area 0.0156 m² under 1.00 × 10³ W m⁻² gives these readings.

| V / V | 0 | 0.10 | 0.20 | 0.30 | 0.40 | 0.45 | 0.50 | 0.55 | 0.58 |
|---|---|---|---|---|---|---|---|---|---|
| I / A | 6.40 | 6.38 | 6.36 | 6.30 | 6.10 | 5.80 | 5.10 | 3.40 | 0 |
| P / W | 0 | 0.64 | 1.27 | 1.89 | 2.44 | 2.61 | 2.55 | 1.87 | 0 |

Maximum power = **2.61 W**, at 0.45 V and 5.80 A.
Load resistance = 0.45/5.80 = **0.078 Ω**.
Input power = 1.00 × 10³ × 0.0156 = 15.6 W, so efficiency = 2.61/15.6 = **17%**.

### Changing the light intensity

If the intensity halves, the short-circuit current halves, while the open-circuit voltage drops only slightly. The whole flat part of the curve moves down to about half its height, so the maximum power is roughly halved, and it now occurs at a larger load resistance. This is why the load must be adjusted as conditions change if maximum power is to be drawn.

## Arranging cells in arrays

| Arrangement | Voltage | Current | Weakness |
|---|---|---|---|
| Cells in series (a string) | Adds | Same through all | One shaded cell limits the current of the whole string |
| Strings in parallel | Same as one string | Adds | Strings must have matching voltages |

### Worked example 3: designing an array

Each cell gives 0.50 V and 3.0 A at maximum power. An array must supply at least 24 V and 9.0 A.

Cells in series per string = 24/0.50 = **48**
Strings in parallel = 9.0/3.0 = **3**
Total cells = 144; power = 24 × 9.0 = **216 W** (check: 144 × 0.50 × 3.0 = 216 W)

If one cell in a string is shaded, its current falls and it limits the current of every cell in series with it, so that string's output drops sharply. The other strings, in parallel, are unaffected.

## Required practical 10: inverse square law with an LDR

The specification names an investigation of the inverse square law for light using an LDR and a point source. A small filament lamp approximates the point source; the LDR faces it along a metre rule in a darkened room.

### Worked example 4: analysing LDR resistance

Readings of LDR resistance R at distance d from the filament:

| d / m | 0.20 | 0.30 | 0.40 | 0.50 | 0.60 |
|---|---|---|---|---|---|
| R / kΩ | 1.02 | 2.21 | 4.05 | 6.20 | 9.10 |
| R/d² / kΩ m⁻² | 25.5 | 24.6 | 25.3 | 24.8 | 25.3 |

R/d² is constant to within about 2%, so R ∝ d². The conductance 1/R is then proportional to 1/d². **If** the LDR's conductance is proportional to the light intensity, this shows I ∝ 1/d². The conclusion rests on that assumption about the LDR, so a careful answer states it. An alternative is to plot lg R against lg d, which should give a straight line of gradient 2.

Good practice:
- Measure d to the filament, not to the glass of the bulb.
- Record the reading with the lamp off and remove the effect of background light.
- Keep the LDR facing the lamp at every distance and avoid reflections from nearby surfaces.
- Avoid distances so small that the lamp no longer acts as a point source.
- The lamp gets hot: let it cool before handling.

## Common mistakes

- Using the Earth's radius instead of the Sun–Earth distance in I = P/4πr².
- Forgetting to square the ratio of distances.
- Reading maximum power at the open-circuit voltage or the short-circuit current, where P is zero.
- Adding currents for cells in series or voltages for strings in parallel.
- Concluding I ∝ 1/d² from LDR readings without stating the assumption about the LDR.
- Measuring distances to the bulb casing in Required practical 10.

## Exam technique

- **Calculate** intensity: use I = P/4πr², or the ratio (r₁/r₂)² when no power is given.
- **Sketch** a V-I characteristic: flat region, knee, steep fall to the open-circuit voltage; mark the maximum power point.
- **Determine** maximum power from data: compute IV for each point, choose the largest, and state the voltage and current there.
- **Design** an array: series for voltage, parallel for current; check with total power.
- **Evaluate** Required practical 10: name systematic errors (filament position, background light) and how each is reduced.

## Where next

- Condense with the [solar energy revision notes](/resources/oxfordaqa-a-level-physics-9630-solar-energy-revision-notes/).
- Try the [solar energy practice questions](/resources/oxfordaqa-a-level-physics-9630-solar-energy-practice/).
- Continue with the [hydroelectric power and pumped storage study guide](/resources/oxfordaqa-a-level-physics-9630-hydroelectric-power-and-pumped-storage/).

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.13.3 Solar energy, published by OxfordAQA.
