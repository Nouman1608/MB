---
title: "AQA A-Level Mathematics (7357): OT3 Mathematical modelling -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Overarching themes"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 1.3
syllabusTopics:
  - qualification: "a-level"
    topic: "overarching-themes-aqa-alevel-maths"
    subtopic: "ot3-mathematical-modelling-aqa-alevel-maths"
description: "Condensed recall for AQA A-level Maths 7357 OT3: the modelling cycle, assumptions and their effects, interpreting outputs, and refining and evaluating models."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

New to this content? Start with the [OT3 study guide](/resources/aqa-a-level-mathematics-7357-ot3-mathematical-modelling/), which follows three complete models through every stage.

These notes condense overarching theme **OT3 Mathematical modelling** (OT3.1 to OT3.5) of the AQA A-level Mathematics (7357) specification, for first teaching 2017. OT3 is assessed inside questions on any content, on all three papers. Test yourself with the [OT3 practice questions](/resources/aqa-a-level-mathematics-7357-ot3-mathematical-modelling-practice/).

## Key terms

| Term | Meaning to learn |
|---|---|
| Mathematical model | A mathematical description (equations, functions, distributions) of a real situation |
| Simplifying assumption | A deliberate simplification that makes the mathematics manageable |
| Parameter | A constant in a model found from data, e.g. k in T = 20 + 70e^(−kt) |
| Input | A value substituted into the model, e.g. a time or a mass |
| Output | The model's prediction |
| Refine | Change an assumption or parameter to improve the model |
| Appropriate | Accurate enough for its purpose over the range in which it is used |
| Extrapolation | Using a model outside the range of the data it was built from |

## The modelling cycle: method in steps

1. **Formulate**: variables, assumptions, equations (OT3.1, OT3.5).
2. **Use**: find parameters; choose suitable inputs (OT3.2).
3. **Interpret**: outputs in context, with units (OT3.3).
4. **Evaluate**: compare with data; check extremes; is it good enough? (OT3.4).
5. **Refine** the weakest assumption and repeat.

## Assumptions bank (OT3.5)

| Area | Assumption | Effect if false |
|---|---|---|
| Mechanics | Particle | Rotation and air flow ignored |
| Mechanics | No air resistance | Predicted times too short, speeds too high |
| Mechanics | Smooth surface or pulley | Acceleration overestimated |
| Mechanics | Light, inextensible string | Tension not the same throughout; connected objects not moving together |
| Mechanics | Constant g | Error over very large heights |
| Growth | Constant percentage growth | Overestimates once resources limit growth |
| Cooling | Constant room temperature | Long-term prediction wrong |
| Statistics | Independent trials | Variation underestimated |
| Statistics | Constant probability | Binomial model invalid |
| Statistics | Random sample | Results biased |

**Assumption statement formula:** *what* is assumed + *what it allows* + *its effect on predictions*.

## Interpreting parameters (OT3.3)

| Model | Parameter | Meaning |
|---|---|---|
| T = 20 + 70e^(−kt) | 20 | Room (long-term) temperature |
| | 70 | Initial excess temperature above the room |
| | k | Rate of cooling; excess multiplied by e^(−k) each unit of time |
| V = 800 − 24t (linear) | 24 | Rate of decrease per unit time |
| P = P₀ × 1.03ᵗ | 1.03 | 3% growth per unit time |
| X ~ B(n, p) | p | Probability of success on each trial |

*Worked reminder:* T = 20 + 70e^(−kt), T = 60 at t = 5 → k = (1/5) ln(7/4) = **0.112**.

## Evaluating a model (OT3.4)

1. Compare prediction with observation: how big is the error, and which way?
2. Check extremes: does the model give impossible values (negative lengths, temperatures below the room)?
3. Purpose: is it accurate enough for what it is used for?
4. Name the weakest assumption and suggest a refinement.

*Worked reminder:* dropped ball, 20 m, no air resistance → t = 2.02 s; observed 2.3 s → model too fast → air resistance not negligible; fitted a = 2 × 20/2.3² = **7.56 m s⁻²**.

## Choosing suitable inputs (OT3.2)

- Keep inputs within the range of the data (interpolation is safer than extrapolation).
- Check the domain: time t ≥ 0; counts are whole numbers; probabilities between 0 and 1.
- For a linear decrease, find when the model reaches zero; beyond that it has no meaning.

## Exam traps

- "Unrealistic" without naming an assumption.
- Assumptions that are not in context ("assume it is a particle" without saying what "it" is).
- Over-precise outputs from a rough model.
- Saying a model is "wrong" rather than evaluating whether it is appropriate.
- Forgetting that independence is the binomial assumption most likely to fail in context.
- Assumptions given without their effect.
- Interpretations without units or context.
- Refinements that are vague ("make it more accurate") rather than a specific change.

## Quick self-test

1. What is a simplifying assumption?
2. Give the stages of the modelling cycle.
3. State two assumptions in modelling a stone thrown off a cliff.
4. A model predicts a dropped object lands in 1.5 s; it takes 1.8 s. Which assumption is most likely to blame?
5. In T = 18 + 62e^(−0.1t), what does 18 represent?
6. A population model is P = 500 × 1.04ᵗ. Interpret 1.04.
7. Why might P = 500 × 1.04ᵗ be inappropriate for large t?
8. A tank model is V = 600 − 15t. For which values of t is the model valid?
9. State two conditions for a binomial model.
10. Why might the independence assumption fail for students' test results in one class?
11. What is extrapolation, and why is it risky?
12. How would you refine a mechanics model that ignores friction but overestimates acceleration?

### Answers

1. A deliberate simplification that makes a situation easier to model mathematically.
2. Formulate; use (solve with inputs); interpret; evaluate; refine and repeat.
3. Any two: stone as a particle; no air resistance; constant g; no wind.
4. Air resistance is negligible.
5. The temperature of the surroundings (long-term temperature).
6. The population grows by 4% per unit of time.
7. Exponential growth is unlimited; in reality resources limit growth.
8. 0 ≤ t ≤ 40, since V = 0 at t = 40.
9. Any two: fixed number of trials; two outcomes; constant probability of success; independent trials.
10. Students share a teacher and lessons, so results are linked.
11. Using a model beyond the data range; the relationship may not continue.
12. Include a friction force F = μR, find μ from data, then test the refined model.

## Official syllabus

Source: AQA A-level Mathematics 7357, overarching theme OT3 Mathematical modelling, published by AQA, for first teaching 2017.
