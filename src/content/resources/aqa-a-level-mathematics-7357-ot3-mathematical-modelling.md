---
title: "AQA A-Level Mathematics (7357): OT3 Mathematical modelling"
resourceType: "study-guides"
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
description: "Study guide to AQA A-level Maths 7357 theme OT3: building models with assumptions, choosing inputs, interpreting outputs, refining models and judging fit."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide teaches overarching theme **OT3 Mathematical modelling** of the AQA A-level Mathematics (7357) specification, for first teaching 2017. It covers all five statements, OT3.1 to OT3.5. Like the other overarching themes, OT3 is applied across the whole of the content, so modelling marks appear inside questions on exponentials, calculus, mechanics and statistics on all three papers. A calculator is required in every 7357 assessment.

The [problem-solving cycle, numerical accuracy and modelling study guide](/resources/aqa-a-level-mathematics-problem-solving-cycle-numerical-accuracy-and/) gives one mechanics model and a table of common assumptions. This page takes modelling on its own and follows three complete models from three different parts of the course (an exponential model, a kinematics model and a binomial model), showing every OT3 statement at work in each. Afterwards use the [OT3 revision notes](/resources/aqa-a-level-mathematics-7357-ot3-mathematical-modelling-revision-notes/) and the [OT3 practice questions](/resources/aqa-a-level-mathematics-7357-ot3-mathematical-modelling-practice/).

## What OT3 covers

| Ref | Statement in brief |
|---|---|
| OT3.1 | Translate a situation in context into a mathematical model, making simplifying assumptions |
| OT3.2 | Use a mathematical model with suitable inputs to engage with and explore situations |
| OT3.3 | Interpret the outputs of a mathematical model in the context of the original situation |
| OT3.4 | Understand that a model can be refined by considering its outputs and simplifying assumptions; evaluate whether the model is appropriate |
| OT3.5 | Understand and use modelling assumptions |

OT3.2 and OT3.3 apply both to a model you are given and to one you construct or select yourself.

## The modelling cycle

1. **Formulate (OT3.1, OT3.5)**: choose variables, state assumptions, write equations.
2. **Solve and use (OT3.2)**: find parameters from data; substitute inputs that make sense.
3. **Interpret (OT3.3)**: turn outputs into statements about the situation, with units.
4. **Evaluate and refine (OT3.4)**: compare with reality; identify the assumption most responsible for any mismatch; change it and repeat.

## Model 1: a cooling drink (exponential)

A cup of tea is made at 90 °C in a room at 20 °C. After 5 minutes it is at 60 °C.

**Formulate.** Assume the room temperature stays at 20 °C and that the excess temperature above the room decays exponentially. Then

T = 20 + 70e^(−kt), t in minutes.

**Use: find k.** At t = 5, T = 60: 40 = 70e^(−5k), so e^(−5k) = 4/7 and

k = (1/5) ln(7/4) = **0.112** (3 s.f.).

**Use: predictions.**

- At t = 15: T = 20 + 70e^(−1.679) = **33.1 °C**.
- Time to cool to a drinkable 45 °C: e^(−kt) = 25/70, so t = ln(70/25)/k = **9.2 minutes**.

**Interpret.** k is a rate constant: each minute the excess temperature above the room is multiplied by e^(−0.112) = 0.894, so it falls by about 11% per minute. The 20 in the model is the long-term temperature: the model predicts the tea approaches, but never falls below, room temperature, which is sensible.

**Evaluate and refine.** Suppose a thermometer reads 36 °C at t = 15, not 33.1 °C. The model cools too fast. Recalculating k from this reading gives k = (1/15) ln(70/16) = 0.098, a different value, so a single constant k does not fit both readings. Possible refinements:

- The room may be warmer near the cup than 20 °C: change the 20.
- A lid or a thick mug changes the heat loss: k depends on the container.
- Evaporation cools the drink quickly when it is hottest: a model with two stages could fit better.

The model is still appropriate for a rough answer ("drinkable after about 10 minutes"), but not for precise times.

## Model 2: a dropped ball (kinematics)

A ball is dropped from rest from a window 20 m above the ground.

**Formulate (OT3.5).** Assume:

- the ball is a **particle** (its size and spin do not matter);
- **air resistance is negligible**;
- **g = 9.8 m s⁻²**, constant over 20 m.

Then constant acceleration applies: s = ut + ½at² with u = 0, a = 9.8.

**Use.** 20 = 4.9t², so t = √(20/4.9) = **2.02 s**. Speed on landing: v = 9.8 × 2.02 = **19.8 m s⁻¹**.

**Evaluate.** A stopwatch gives 2.3 s. The model predicts a shorter time than observed. The most likely cause is the "no air resistance" assumption: air resistance reduces the acceleration, so the real ball takes longer and lands more slowly. (Human reaction time also adds error to a stopwatch reading, which is a limitation of the data rather than the model.)

**Refine.** Treat the acceleration as an unknown constant a and fit it to the data: 20 = ½a(2.3)², so a = 7.56 m s⁻². This is a crude refinement, because air resistance actually increases with speed, so the acceleration is not constant; but it gives a better prediction for similar balls dropped from similar heights.

## Model 3: germinating seeds (binomial)

A packet says 85% of seeds germinate. A gardener plants 20 seeds in a tray.

**Formulate.** Let X be the number that germinate. Model X ~ B(20, 0.85). The assumptions behind the binomial model are:

- a fixed number of trials (20 seeds);
- each seed either germinates or does not;
- the probability of germination is the same, 0.85, for every seed;
- seeds germinate **independently** of each other.

**Use.** P(X ≥ 18) = P(18) + P(19) + P(20) = **0.405** (3 s.f., from a calculator's binomial functions).

**Interpret.** There is roughly a 40% chance that at least 18 of the 20 seeds germinate, so the gardener should not rely on getting 18 seedlings from 20 seeds.

**Evaluate.** Seeds in the same tray share soil, water and temperature, so if conditions are poor, many fail together. This breaks the independence assumption, and the real variation will be larger than the model suggests. The 85% figure may also apply to ideal conditions only. Sowing seeds in several trays, in different places, would make independence more reasonable.

## OT3.5 Assumptions: say what and why

A good assumption statement has three parts: **what** is assumed, **what it allows** you to do, and **its likely effect** on the prediction.

| Context | Assumption | Allows | Likely effect |
|---|---|---|---|
| Mechanics | Particle | Ignore size and rotation | Ignores spin and air flow |
| Mechanics | No air resistance | Constant acceleration g | Times too short, speeds too high |
| Mechanics | Smooth surface | No friction | Acceleration too large |
| Growth | Constant growth rate | Exponential model | Overestimates once resources limit growth |
| Cooling | Constant surroundings temperature | Single exponential | Fails if the room warms or cools |
| Statistics | Independence | Binomial or multiplication of probabilities | Underestimates variation when outcomes are linked |
| Statistics | Random sample | Sample represents population | Bias if sampling method is not random |

## Judging whether a model is appropriate (OT3.4)

Ask four questions:

1. **Does it fit the data available?** Compare predictions with observations; note the size and direction of errors.
2. **Does it behave sensibly at the extremes?** For example, a linear model of population that becomes negative, or a cooling model that falls below room temperature, is unrealistic outside a limited range.
3. **Is it accurate enough for its purpose?** A rough answer may be all that is needed.
4. **Which assumption is weakest?** Name it and say how changing it would alter the predictions.

## Common mistakes

- "The model is unrealistic" with no named assumption or direction of error.
- Listing an assumption without saying how it affects the prediction.
- Using inputs outside the range for which the model was built (extrapolation), then trusting the output.
- Interpreting a parameter without units or context, for example "k is 0.112".
- Claiming a model is wrong because it does not fit perfectly. Models are simplifications; the question is whether they are good enough.

## Exam technique

- **State an assumption**: one sentence naming it, in the context of the question ("the ball is modelled as a particle").
- **Interpret**: refer to the context and give units ("the tea reaches 45 °C after about 9 minutes").
- **Evaluate** or **comment on the model**: compare a prediction with given data, name the weakest assumption, and say how to refine it.
- **Refine**: change one assumption or parameter, recalculate, and check the new prediction against the data.

## Official syllabus

Source: AQA A-level Mathematics 7357, overarching theme OT3 Mathematical modelling (OT3.1 to OT3.5), published by AQA, for first teaching 2017.
