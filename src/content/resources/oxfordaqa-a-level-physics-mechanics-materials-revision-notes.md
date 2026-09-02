---
title: "OxfordAQA A Level Physics: Motion and Newton's Laws — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Mechanics and materials"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "Version 4.4"
order: 2
syllabusTopics:
  - qualification: "a-level"
    topic: "mechanics-and-materials-oxfordaqa-alevel"
    subtopic: "motion-along-a-straight-line-oxfordaqa"
description: "Condensed recall notes on the SUVAT equations, motion graphs, and Newton's three laws of motion, for OxfordAQA International A-Level Physics (9630), sub-topics 3.2.3 and 3.2.5."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Motion Along a Straight Line and Newton's Laws study guide](/resources/a-level-oxfordaqa-physics-motion-and-newtons-laws/).

## The SUVAT equations (3.2.3)

```
v = u + at
s = 1/2(u + v)t
s = ut + 1/2 at^2
v^2 = u^2 + 2as
```

Five variables: **s** displacement, **u** initial velocity, **v** final velocity, **a** acceleration, **t** time. Pick the single equation that connects the variables given and required — don't force an unnecessary two-step calculation.

## Reading motion graphs

| Graph | Gradient represents | Area under graph represents |
|---|---|---|
| Displacement–time | Velocity | — |
| Velocity–time | Acceleration | Displacement |
| Acceleration–time | — | Change in velocity |

These relationships are tested **independently of, and alongside**, the SUVAT equations.

## Newton's three laws (3.2.5)

1. **First law:** an object stays at rest or moves at constant velocity unless acted on by a resultant force.
2. **Second law:** F = ma (resultant force = mass x acceleration), applying **only where mass is constant**.
3. **Third law:** every action force has an equal and opposite reaction force, acting on a **different** object.

A "Newton's third law pair" acts on **two separate objects** — two forces balancing on the *same* object is an application of the first law, not the third. This is one of the most commonly tested confusions.

## Worked example: SUVAT + Newton's second law

A 2 kg object starts from rest; a constant resultant force of 6 N is applied. Find displacement after 4 s.

```
Step 1: a = F/m = 6/2 = 3 m/s^2
Step 2: choose s = ut + 1/2 at^2 (u=0, a=3, t=4)
Step 3: s = (0)(4) + 0.5(3)(4^2) = 24 m
```

This "Newton's second law to find a, then a SUVAT equation" sequence is one of the most frequently tested calculation patterns in this pair of sub-topics.

## Required practical: determining g by free fall

The specification names a required practical for 3.2.3: determining the acceleration due to gravity, g, by a free-fall method, including finding g from a graph.

```
Method outline: release an object from rest and time its fall over a
                measured distance (or use light gates for precision),
                repeating for several distances

Analysis:       since s = ut + 1/2 at^2 with u = 0, this simplifies to
                s = 1/2 g t^2, so a graph of s (y-axis) against t^2
                (x-axis) gives a straight line through the origin with
                gradient = g/2 -- so g = 2 x gradient
```

Plotting s against t² rather than s against t is the key technique this required practical is testing, since it linearises what would otherwise be a curved relationship — being able to explain *why* this specific graph choice produces a straight line, not just how to draw it, is what the specification's own practical-skills assessment rewards.

## Worked example: interpreting a velocity-time graph

A velocity-time graph shows an object accelerating uniformly from 0 to 12 m/s over 6 seconds, then travelling at constant 12 m/s for a further 4 seconds.

```
Gradient of first section = (12 - 0) / 6 = 2 m/s^2 (acceleration
                                                       during speed-up)
Gradient of second section = 0 (constant velocity, no acceleration)
Area under first section (triangle) = 1/2 x 6 x 12 = 36 m
Area under second section (rectangle) = 4 x 12 = 48 m
Total displacement = 36 + 48 = 84 m
```

Splitting the graph into geometric shapes (triangles, rectangles, trapezia) before calculating area is the reliable method for any velocity-time graph with more than one section, rather than attempting a single combined calculation.

## Key terms

**Displacement** — distance moved in a specified direction (vector), distinct from distance (scalar). **Velocity** — rate of change of displacement (vector), distinct from speed. **Acceleration** — rate of change of velocity. **Resultant force** — the single overall force once all individual forces are combined, taking direction into account.

## Common mistakes

- Selecting a SUVAT equation that needs a variable not given, forcing an unnecessary extra step.
- Confusing the meaning of a gradient versus an area on a motion graph.
- Quoting F = ma without noting it applies only when mass is constant.
- Stating only the second law when a question asks about "Newton's laws" generally.

## Quick self-test

1. State all four SUVAT equations.
2. What does the area under a velocity-time graph represent?
3. State Newton's first law.
4. Why is F = ma restricted to constant mass?
5. Why is a Newton's third law pair not the same as two forces balancing on one object?
6. State Newton's third law and identify what makes two forces a genuine "third law pair".

**Answers:** 1. v = u + at; s = ½(u + v)t; s = ut + ½at²; v² = u² + 2as. 2. Displacement. 3. An object stays at rest or moves at constant velocity unless a resultant force acts on it. 4. Because F = ma assumes mass does not change during the motion described; for changing mass, the momentum form F = Δp/Δt is needed instead. 5. Because a third law pair acts on two different objects, whereas balanced forces on one object (Newton's first law) can include forces of different types acting on that single object. 6. Every action force has an equal and opposite reaction force; a genuine pair must be equal in magnitude, opposite in direction, of the same type, and acting on two different objects.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630) specification, Version 4.4 —
[oxfordaqaexams.org.uk/9630](https://www.oxfordaqa.com/oaqaresources/specifications/oxfordaqa-international-as-and-a-level-physics-specification.pdf).
