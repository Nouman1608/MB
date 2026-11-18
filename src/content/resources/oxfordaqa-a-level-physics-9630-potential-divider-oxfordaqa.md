---
title: "OxfordAQA A-Level Physics (9630): Potential divider"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA 9630 section 3.4.5: potential dividers for fixed and variable pd, loading, and sensor circuits with thermistors and LDRs."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.4.5, Potential divider, in Section 3.4 Electricity. It is shared International AS and A-level content. Sections 3.4.4 to 3.4.6 are taught together in the [DC circuits, potential dividers, emf and internal resistance study guide](/resources/oxfordaqa-a-level-physics-dc-circuits-potential-dividers-emf-and-internal/). After this page, condense it with the [potential divider revision notes](/resources/oxfordaqa-a-level-physics-9630-potential-divider-oxfordaqa-revision-notes/) and test yourself with the [potential divider practice questions](/resources/oxfordaqa-a-level-physics-9630-potential-divider-oxfordaqa-practice/).

Supplies on this page have negligible internal resistance.

## What the specification asks for

| Statement in 3.4.5 | What you must be able to do |
|---|---|
| The potential divider used to supply constant or variable potential difference from a power supply | Calculate output pds; explain how a fixed or adjustable output is obtained |
| Examples should include variable resistors, thermistors and light dependent resistors (LDRs) | Analyse sensor circuits and predict how the output changes |
| The use of the potentiometer as a measuring instrument is not required | (Not examined) |

## How a potential divider works

Two or more resistors in series across a supply share the supply pd. The current I is the same through each, so the pd across each is IR: the pds are in the same ratio as the resistances.

V₁ / V₂ = R₁ / R₂

If the output is taken across R₂:

V_out = V_in × R₂ / (R₁ + R₂)

This is a consequence of section 3.4.4: series resistance and conservation of energy round the loop. The larger resistor always takes the larger share of the pd.

### Worked example 1: a fixed output

A 9.0 V supply is connected across a 2.2 kΩ resistor in series with a 6.8 kΩ resistor. Find the pd across each.

V across 6.8 kΩ = 9.0 × 6.8 / (2.2 + 6.8) = **6.8 V**. V across 2.2 kΩ = 9.0 − 6.8 = **2.2 V**.

Kilohms can stay as kΩ, because only the ratio matters. The current is 9.0 V / 9.0 kΩ = 1.0 mA.

## Constant and variable outputs

- **Constant pd:** two fixed resistors give an output that is a fixed fraction of the supply pd.
- **Variable pd from a variable resistor:** replacing one fixed resistor with a variable resistor changes the ratio, so the output can be adjusted, but not all the way to zero or to the full supply pd (unless the variable resistor can reach zero resistance).
- **Variable pd from a potentiometer (slider) arrangement:** the whole supply pd is across a resistance track and the output is taken between one end and a sliding contact. Moving the slider varies the output smoothly from 0 to the full supply pd. This is why it is used to supply pd when plotting I-V characteristics (section 3.4.2).

## Loading: what happens when you connect something to the output

The output equation assumes no current is drawn from the output. If a load (a meter, lamp or another circuit) is connected across R₂, the load and R₂ are in parallel. Their combined resistance is less than R₂, so the output pd falls.

### Worked example 2: the effect of a load

Two 10 kΩ resistors form a divider across 9.0 V, giving 4.5 V. Find the output when (a) a 10 kΩ load and (b) a 1.0 MΩ load is connected across the lower resistor.

(a) 10 kΩ in parallel with 10 kΩ = 5.0 kΩ. V_out = 9.0 × 5.0 / (10 + 5.0) = **3.0 V**.

(b) 10 kΩ in parallel with 1000 kΩ = 9.90 kΩ. V_out = 9.0 × 9.90 / (10 + 9.90) = **4.48 V**.

A load much larger than R₂ barely changes the output. This is also why the voltmeter used to measure the output should have a very high resistance.

### Worked example 3: a loaded slider

A 12 V supply is across a 1.0 kΩ track. The slider is set 30% of the way along from the bottom, so the lower part is 300 Ω and the upper part is 700 Ω. Find the output with no load and with a 1.0 kΩ load across the lower part.

No load: V_out = 12 × 300 / 1000 = **3.6 V**.

With load: 300 Ω in parallel with 1000 Ω = 231 Ω. V_out = 12 × 231 / (231 + 700) = **3.0 V**.

## Sensor circuits

Replace one resistor with a component whose resistance depends on a physical condition, and the output pd becomes a measure of that condition.

- **Ntc thermistor:** resistance falls as temperature rises (section 3.4.3).
- **LDR:** resistance falls as light intensity increases.

### Which way does the output go?

Use the rule "the larger resistance takes the larger share". If a sensor's resistance falls:

- the pd across the **sensor** falls;
- the pd across the **fixed resistor** rises.

So the designer chooses where to take the output. For an output that rises as it gets hotter, take the output across the fixed resistor in series with an ntc thermistor. For an output that rises as it gets darker, take it across the LDR.

### Worked example 4: an LDR for darkness

An LDR (500 kΩ in the dark, 2.0 kΩ in bright light) is in series with a 20 kΩ resistor across 6.0 V. The output is taken across the LDR.

Dark: V_out = 6.0 × 500 / 520 = **5.8 V**. Bright: V_out = 6.0 × 2.0 / 22 = **0.55 V**.

The output is high in the dark and low in bright light, which suits a circuit that switches on a light at night.

### Worked example 5: choosing the fixed resistor

An ntc thermistor has resistance 1.5 kΩ at 50 °C. It is in series with a fixed resistor R across a 5.0 V supply, and the output across R must be 3.0 V at 50 °C. Find R.

pd across the thermistor = 5.0 − 3.0 = 2.0 V. The pds are in the ratio of resistances:

R / 1.5 kΩ = 3.0 / 2.0, so R = **2.25 kΩ**.

Above 50 °C the thermistor's resistance falls further, so the output across R rises above 3.0 V. A switching circuit set to act at 3.0 V would then operate whenever the temperature exceeds 50 °C. Using a variable resistor for R would let the user adjust the temperature at which this happens.

## Common mistakes

- Putting R₁ instead of R₂ on the top of the fraction (check which resistor the output is across).
- Forgetting that a falling sensor resistance makes the pd across the other resistor rise.
- Ignoring loading when a load of similar resistance to R₂ is connected.
- Saying a variable resistor in series can give an output down to zero.
- Saying an LDR's resistance increases with light intensity.
- Mixing kΩ and Ω in the same ratio.

## Exam technique

- **Calculate**: write the ratio equation, then substitute; show the pd across the other resistor too, as a check that they add to the supply pd.
- **Explain** how the output changes: sensor condition → sensor resistance → share of pd → output, in that order.
- **Suggest** a design: state where to connect the output and why, and whether the fixed resistor should be variable to allow adjustment.
- **Describe** loading: the load is in parallel with part of the divider, reducing that part's resistance and so its pd.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.4.5 Potential divider, published by OxfordAQA.
