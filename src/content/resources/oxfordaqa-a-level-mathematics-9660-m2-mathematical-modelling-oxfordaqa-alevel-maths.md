---
title: "OxfordAQA A-level Mathematics (9660): Mathematical modelling"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit M2: Mechanics (International A-level)"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 7.1
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m2-mechanics-oxfordaqa-alevel-maths"
    subtopic: "m2-mathematical-modelling-oxfordaqa-alevel-maths"
description: "OxfordAQA 9660 M2.1 study guide: the modelling cycle, what each modelling word assumes, refining a model from data, and judging validity and range of use."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section M2.1 (Mathematical modelling) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. M2.1 opens Unit M2 (Mechanics), the mechanics option of the International A-level. It has no formulae of its own: it describes how every later mechanics problem should be set up and judged.

The broader [modelling and kinematics with vectors guide](/resources/oxfordaqa-a-level-mathematics-mathematical-modelling-and-kinematics-with-vectors-and/) gives a table of modelling terms and a first example. This page goes further: it follows the full modelling cycle, uses data to refine a model, shows how to say which way an assumption moves a prediction, and shows how to find the range of times for which a model can be used. Condense it with the [mathematical modelling revision notes](/resources/oxfordaqa-a-level-mathematics-9660-m2-mathematical-modelling-oxfordaqa-alevel-maths-revision-notes/) and test yourself with the [mathematical modelling practice questions](/resources/oxfordaqa-a-level-mathematics-9660-m2-mathematical-modelling-oxfordaqa-alevel-maths-practice/).

## What the specification asks for

| Content | Additional information |
|---|---|
| Use of assumptions in simplifying reality | Students are expected to use mathematical models to solve problems |
| Mathematical analysis of models | Modelling will include the appreciation that it is appropriate at times to treat relatively large moving bodies as point masses |
| Interpretation and validity of models | Students should be able to comment on the modelling assumptions made when using terms such as particle, light, inextensible string, smooth surface and motion under gravity |

In the exam this appears as parts that ask you to state an assumption, explain what a word such as "light" means for the model, or comment on whether an answer is realistic.

## 1. The modelling cycle

1. **Describe the real problem.** What do you want to predict?
2. **Make assumptions** that simplify it, such as treating a box as a particle or a floor as smooth.
3. **Formulate** the mathematics: force diagram, equations of motion, constant acceleration equations.
4. **Solve** the equations.
5. **Interpret** the answer in context, with units and a sensible degree of accuracy.
6. **Validate**: compare the prediction with observation or common sense.
7. **Refine** if the prediction is poor: remove or change the assumption most likely to be responsible, and repeat.

Most exam marks for modelling come from steps 2, 5 and 6, which students often skip because they involve words rather than algebra.

## 2. What each modelling word assumes

Each word removes one feature of reality. A good comment names the feature removed and says what effect that has.

| Word | Feature removed | Consequence in the equations |
|---|---|---|
| Particle | Size, shape, rotation | All forces act at one point; no moments; no air resistance from shape |
| Light (string, rod, pulley) | Mass of that object | Tension is the same all along a string; no weight term for it |
| Inextensible string | Stretching | Connected bodies have equal speeds and accelerations along the string |
| Smooth surface or pulley | Friction | Contact force is perpendicular to the surface; tension is unchanged round a smooth pulley |
| Rough surface | (adds friction back) | Friction up to µR opposes motion or tendency to move |
| Motion under gravity | Air resistance and other forces | Acceleration is g = 9.8 m s⁻² downwards and constant |
| Uniform rod or lamina | Uneven mass distribution | Centre of mass at the geometric centre |
| Rigid body | Bending | Distances within the body do not change, so moments can be taken |

### Treating a large body as a point mass

The specification says it is "appropriate at times" to model relatively large moving bodies as point masses. The test is whether the body's size matters to the question.

**Worked example 1.** A lorry 16 m long travels at a constant 15 m s⁻¹ over a bridge 40 m long. Find the time taken for the lorry to cross the bridge completely, first modelling it as a particle and then allowing for its length.

```
Particle model:   time = 40 / 15 = 2.67 s (3 s.f.)
Allowing length:  the front must travel 40 + 16 = 56 m before the back leaves
                  time = 56 / 15 = 3.73 s (3 s.f.)
```

The particle model underestimates by more than a second, because the lorry's length is comparable with the bridge. For a 300 km journey, the same 16 m would make no practical difference, and the particle model is entirely suitable.

## 3. Saying which way an assumption moves a prediction

"Air resistance has been ignored" is only half a comment. Add what that does to the answer.

**Worked example 2.** A ball is thrown vertically upwards at 14 m s⁻¹. Modelling it as a particle moving under gravity, find the greatest height reached and the time to reach it. Comment on the effect of air resistance.

```
v² = u² + 2as:  0 = 14² − 2(9.8)s, so s = 196/19.6 = 10 m
v = u + at:     0 = 14 − 9.8t, so t = 1.43 s (3 s.f.)
```

Air resistance acts against the motion, adding to gravity on the way up. The deceleration is therefore greater than 9.8 m s⁻², so the real ball rises to less than 10 m and reaches its top in less than 1.43 s. On the way down, air resistance opposes gravity, so the ball takes longer to fall than to rise and returns with a speed below 14 m s⁻¹.

## 4. Refining a model using data

**Worked example 3.** A child pulls a sledge across level snow with a horizontal rope. The total mass of the sledge and its load is 30 kg and the tension in the rope is 45 N. The sledge starts from rest.

**(a)** Model the snow as smooth. Find the distance travelled in 6 seconds.

```
F = ma:  45 = 30a, so a = 1.5 m s⁻²
s = ut + ½at² = 0 + ½(1.5)(36) = 27 m
```

**(b)** In fact the sledge travels 18 m in 6 seconds. Refine the model by including a constant frictional force, and find the coefficient of friction.

```
18 = ½a(36), so a = 1 m s⁻²
45 − F = 30(1), so F = 15 N
R = 30 × 9.8 = 294 N
µ = F/R = 15/294 = 0.0510 (3 s.f.)
```

**(c)** State one further assumption still in the refined model, and its likely effect.

The model still treats the rope as horizontal. If the rope is pulled upwards at an angle, part of the tension lifts the sledge, R is less than 294 N, and the true coefficient of friction is larger than 0.0510.

The structure "predict, compare with data, refine one assumption, re-predict" is exactly the cycle in section 1.

## 5. Connected bodies and the words "light", "inextensible" and "smooth"

**Worked example 4.** Particles A (3 kg) and B (2 kg) hang on either side of a pulley, connected by a light inextensible string passing over the pulley, which is smooth. They are released from rest. Find the acceleration and the tension.

```
A (down):  3g − T = 3a
B (up):    T − 2g = 2a
Add:       g = 5a, so a = 9.8/5 = 1.96 m s⁻²
T = 2(9.8 + 1.96) = 23.52 = 23.5 N (3 s.f.)
```

Each word was used:

- **light** string: the tension is the same at both ends, so one letter T is enough;
- **inextensible** string: A and B have the same size of acceleration, so one letter a is enough;
- **smooth** pulley: friction at the pulley does not change the tension from one side to the other;
- **particles**: the size of the bodies and air resistance are ignored.

A real pulley has friction and mass, so the measured acceleration would be less than 1.96 m s⁻².

## 6. The range of validity of a model

A model can be correct for a while and then fail. Find where it stops making sense.

**Worked example 5.** A car travelling at 20 m s⁻¹ brakes with a constant deceleration of 2.5 m s⁻². Its displacement after t seconds is modelled by s = 20t − 1.25t². For what values of t is this model valid?

```
v = 20 − 2.5t = 0 when t = 8
At t = 8:   s = 160 − 80 = 80 m
At t = 10:  s = 200 − 125 = 75 m
```

The formula says the car moves backwards after t = 8, which a braking car does not do: once stopped, it stays still. The model is valid for 0 ≤ t ≤ 8 only. Stating such a restriction is part of interpreting a model.

## Common mistakes

- Listing assumptions that the question already states, instead of ones you added.
- Writing "the model is wrong" without naming an assumption.
- Saying an assumption affects "accuracy" without saying in which direction.
- Describing "light" as "small"; it means negligible mass.
- Thinking "inextensible" means the tension is equal; that follows from "light". Inextensible gives equal accelerations.
- Applying a formula outside the time interval in which the model holds.

## Exam technique

- **State an assumption**: one short sentence in context, such as "the sledge is a particle".
- **Explain what is meant by** a term: give its definition and its effect on the equations.
- **Comment on** an answer or model: compare with data or reality, and say whether the model over- or underestimates and why.
- **Suggest a refinement**: name the change (include friction, include air resistance, allow for size) and say how it would alter the result.
- Use g = 9.8 m s⁻² and give answers to 3 significant figures; an answer quoted to many more figures than the data justify is itself a modelling weakness.

## Where next

Work through the [mathematical modelling practice questions](/resources/oxfordaqa-a-level-mathematics-9660-m2-mathematical-modelling-oxfordaqa-alevel-maths-practice/), then condense with the [mathematical modelling revision notes](/resources/oxfordaqa-a-level-mathematics-9660-m2-mathematical-modelling-oxfordaqa-alevel-maths-revision-notes/). For friction and force diagrams in Unit M2, see the [statics, force diagrams and friction guide](/resources/oxfordaqa-a-level-mathematics-statics-force-diagrams-friction-resolving-forces-and/).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section M2.1 Mathematical modelling, published by OxfordAQA.
