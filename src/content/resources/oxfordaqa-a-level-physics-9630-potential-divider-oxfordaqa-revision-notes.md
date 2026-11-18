---
title: "OxfordAQA A-Level Physics (9630): Potential divider -- Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.4 – Electricity"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "AS"
order: 4.5
syllabusTopics:
  - qualification: "a-level"
    topic: "electricity-oxfordaqa-alevel"
    subtopic: "potential-divider-oxfordaqa"
description: "Revision notes for OxfordAQA 9630 section 3.4.5: divider equation, fixed and variable outputs, loading, thermistor and LDR sensors, and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 3.4.5, Potential divider, of OxfordAQA International AS and A-level Physics (9630), shared International AS and A-level content. For full explanations and worked examples, read the [potential divider study guide](/resources/oxfordaqa-a-level-physics-9630-potential-divider-oxfordaqa/), then test yourself with the [potential divider practice questions](/resources/oxfordaqa-a-level-physics-9630-potential-divider-oxfordaqa-practice/). Sections 3.4.4 to 3.4.6 are summarised together in the [DC circuits, potential dividers, emf and internal resistance revision notes](/resources/oxfordaqa-a-level-physics-dc-circuits-potential-dividers-emf-and-internal-revision-notes/).

## The equations

For R₁ and R₂ in series across V_in, with the output across R₂:

- V_out = V_in × R₂ / (R₁ + R₂)
- V₁ / V₂ = R₁ / R₂
- V₁ + V₂ = V_in

Only ratios matter, so kΩ can be used throughout as long as every resistance is in kΩ.

## Key terms

| Term | Meaning |
|---|---|
| Potential divider | Resistors in series across a supply, sharing its pd in the ratio of their resistances |
| Output pd | pd taken across one part of the divider |
| Variable resistor | Resistor whose resistance can be adjusted |
| Slider (potentiometer) arrangement | Full supply across a track; output between one end and a sliding contact; gives 0 to V_in |
| Load | Anything connected across the output; it draws current |
| LDR | Light dependent resistor: resistance falls as light intensity increases |
| Ntc thermistor | Resistance falls as temperature increases |

## Fixed or variable output

| Arrangement | Output |
|---|---|
| Two fixed resistors | Constant fraction of V_in |
| One fixed, one variable resistor | Adjustable over a limited range |
| Slider arrangement | Adjustable from 0 to V_in |

The potentiometer as a measuring instrument is not required.

## Which way does the output move?

| Sensor change | Sensor resistance | pd across sensor | pd across fixed resistor |
|---|---|---|---|
| Thermistor gets hotter | Falls | Falls | Rises |
| Thermistor gets colder | Rises | Rises | Falls |
| LDR gets brighter | Falls | Falls | Rises |
| LDR gets darker | Rises | Rises | Falls |

Rule: the larger resistance takes the larger share of the pd.

## Loading

- A load across R₂ is in parallel with R₂, so the combined resistance is less than R₂ and V_out falls.
- A load much larger than R₂ has little effect; a load similar to R₂ has a large effect.
- A voltmeter measuring the output should have a very high resistance for the same reason.

## Design method

1. Decide which component the output must be across, from how the output should change.
2. Write the pd needed across each part at the switching condition.
3. Use V₁/V₂ = R₁/R₂ to find the fixed resistance.
4. Make it variable if the switching point must be adjustable.

## Worked reminder

An LDR has resistance 15 kΩ at dusk and is in series with a fixed resistor across a 9.0 V supply. The output across the LDR must be 6.0 V at dusk.

1. pd across the fixed resistor = 9.0 − 6.0 = 3.0 V.
2. R / 15 kΩ = 3.0 / 6.0, so R = 7.5 kΩ.
3. As it gets darker the LDR's resistance rises, so the output rises above 6.0 V.

## Exam traps

- R₁ and R₂ swapped in the fraction.
- Output direction predicted for the wrong component.
- Loading ignored when a load of similar resistance is connected.
- kΩ mixed with Ω.
- "LDR resistance increases with light": it decreases.
- A series variable resistor said to give zero output.

## Quick self-test

1. A 12 V supply is across 3.0 kΩ and 1.0 kΩ in series. Find the pd across the 1.0 kΩ resistor.
2. Write the potential divider equation for the output across R₂.
3. A 6.0 V supply is across 10 kΩ and 4.7 kΩ in series. Find the pd across the 4.7 kΩ resistor.
4. Two resistors in series have pds of 2.0 V and 3.0 V. The first is 2.0 kΩ. Find the second.
5. An ntc thermistor is in series with a fixed resistor; the output is across the thermistor. What happens to the output as the temperature rises?
6. An LDR is in series with a fixed resistor; the output is across the fixed resistor. What happens to the output as the light gets brighter?
7. Why can a slider arrangement give an output of 0 V?
8. Two 4.0 kΩ resistors divide 9.0 V. A 4.0 kΩ load is connected across the lower one. Find the new output.
9. Why should a voltmeter measuring the output of a divider have a very high resistance?
10. An ntc thermistor (2.2 kΩ hot, 40 kΩ cold) is in series with a 10 kΩ resistor across 5.0 V, with the output across the fixed resistor. Find the output hot and cold.
11. A 6.0 V supply is across an LDR of 8.0 kΩ and a fixed resistor. The output across the fixed resistor must be 2.0 V. Find the fixed resistance.
12. Which use of the potentiometer is not required by this specification?

### Answers

1. 12 × 1.0 / 4.0 = 3.0 V.
2. V_out = V_in × R₂ / (R₁ + R₂).
3. 6.0 × 4.7 / 14.7 = 1.9 V.
4. R₂ = 2.0 × 3.0 / 2.0 = 3.0 kΩ.
5. The thermistor's resistance falls, so its share of the pd, the output, falls.
6. The LDR's resistance falls, so the pd across the fixed resistor rises.
7. The slider can be moved to the end of the track, so there is no resistance between the output terminals.
8. Lower part = 2.0 kΩ; V_out = 9.0 × 2.0 / 6.0 = 3.0 V.
9. So it draws negligible current and does not lower the output it is measuring.
10. Hot: 5.0 × 10 / 12.2 = 4.1 V. Cold: 5.0 × 10 / 50 = 1.0 V.
11. LDR pd = 4.0 V; R = 8.0 × 2.0 / 4.0 = 4.0 kΩ.
12. Its use as a measuring instrument.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.4.5 Potential divider, published by OxfordAQA.
