---
title: "OxfordAQA International AS and A-level Mathematics: Work, energy and power (9660)"
seoTitle: "OxfordAQA A-level Maths Work, Energy and Power Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Work, energy and power"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 213
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m2-mechanics-oxfordaqa-alevel-maths"
    subtopic: "m2-work-and-energy-oxfordaqa-alevel-maths"
description: "Study guide to work done by a force, kinetic and potential energy, the work-energy principle and power (P = Fv) for OxfordAQA 9660 Unit M2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This study guide covers section M2.6 (Work and energy) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification states that this content is part of International A-level (A2) Unit M2 (Mechanics) and is not examined at International AS. Resolving forces and the constant-acceleration (suvat) equations are useful background.

Use it with the [revision notes](/resources/oxfordaqa-a-level-mathematics-work-energy-and-power-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-mathematics-work-energy-and-power-practice/). The course hub is at [OxfordAQA A-level Mathematics](/boards/oxfordaqa/a-level/mathematics/) and the printable [checklist](/checklists/oxfordaqa/a-level/mathematics/) lets you tick off each outcome. To find out where you stand first, try the [free diagnostics](/diagnostics/).

## What this unit covers

| Outcome | What you must be able to do |
|---|---|
| Work done by a constant force | Use work = Fd cos θ, with the force at any angle to the motion |
| Gravitational potential energy | Use GPE = mgh |
| Kinetic energy | Use KE = ½mv² |
| The work-energy principle | Use work done = change in kinetic energy |
| Conservation of mechanical energy | Solve problems using conservation of energy |
| Power | Treat power as the rate at which a force does work, and use P = Fv |

The specification lists work = Fd cos θ, GPE = mgh and KE = ½mv² among the formulae you should learn. It also says g is taken as 9.8 m s⁻² in this course, so use 9.8 unless a question says otherwise.

## 1. Work done by a constant force

A force does work when its point of application moves. For a constant force F (newtons) moving its point of application a distance d (metres) along a straight line, with θ the angle between the force and the direction of motion:

```
work done = F d cos θ        (unit: joule, J; 1 J = 1 N m)
```

Only the component of the force along the motion does work. This gives three useful cases.

| Angle θ | cos θ | Work done |
|---|---|---|
| 0° (force along the motion) | 1 | Fd, positive |
| 90° (force perpendicular) | 0 | zero |
| 180° (force opposing the motion) | −1 | −Fd, negative |

So the normal reaction and the tension in a pendulum string (perpendicular to the motion) do no work, while friction does negative work. Work is a scalar: add the works of different forces with their signs.

**Example 1.** A force of 40 N acts at 35° above the horizontal on a trolley that moves 12 m along a horizontal floor. Find the work done by the force.

```
work = 40 × 12 × cos 35°
     = 393.19... J
     = 393 J (3 s.f.)
```

**Example 2.** A 25 kg crate is pushed at constant speed 6 m up a rough slope inclined at 20° to the horizontal. The push acts parallel to the slope and the friction is a constant 30 N. Find the work done by the push.

At constant speed the forces along the slope balance:

```
push = 25 × 9.8 × sin 20° + 30
     = 83.79... + 30 = 113.79... N
work by push = 113.79... × 6 = 682.77... J = 683 J (3 s.f.)
```

Check by energy: the crate gains GPE of 25 × 9.8 × (6 sin 20°) = 502.77... J and the friction takes 30 × 6 = 180 J. The sum is again 682.77... J. The speed does not change, so the kinetic energy does not change.

## 2. Gravitational potential energy and kinetic energy

```
GPE = mgh      (h measured above any chosen zero level)
KE  = ½ m v²
```

Only changes in GPE matter, so choose the lowest point as h = 0 to keep the arithmetic simple. When a mass rises by a vertical height h, its GPE increases by mgh whatever path it takes. In Example 2 the vertical height gained is 6 sin 20°, not 6.

Kinetic energy depends on speed squared and has no direction. Doubling the speed multiplies the KE by four.

## 3. The work-energy principle

The work done by the resultant force on a particle equals the change in its kinetic energy:

```
total work done = ½ m v² − ½ m u²
```

Here the total work includes every force: driving force, resistances, and the component of weight along a slope. This is Newton's second law integrated over distance, so it saves you finding the acceleration and using suvat. It is especially good when the force or the path is awkward.

**Example 3.** A 4 kg block moving at 2 m s⁻¹ on a rough horizontal surface is pulled 5 m by a constant 30 N force at 25° above the horizontal. A constant friction force of 10 N opposes the motion. Find the final speed.

```
work by pull     = 30 × 5 × cos 25° = 135.95... J
work by friction = −10 × 5 = −50 J
weight and normal reaction: perpendicular to motion, no work
total work = 85.95... J
initial KE = ½ × 4 × 2² = 8 J
½ × 4 × v² = 8 + 85.95... = 93.95... 
v² = 46.97...      v = 6.85 m s⁻¹ (3 s.f.)
```

**Method in steps.**
1. Say which stage of the motion you are using (start and end points).
2. List every force and write the work each does, with its sign.
3. Add them and set the total equal to final KE minus initial KE.
4. Solve, then check the sign and size of the answer.

## 4. Conservation of mechanical energy

If the only forces that do work are gravity and conservative forces (no friction, drag or driving force), the total of KE and GPE stays constant:

```
½ m u² + m g h₁ = ½ m v² + m g h₂
```

Forces such as the normal reaction from a smooth surface, or the tension in a string, act at right angles to the motion and do no work, so they do not stop energy being conserved.

**Example 4.** A 0.3 kg ball is thrown from 1.5 m above the ground with speed 8 m s⁻¹, in any direction. Find its speed on reaching the ground, neglecting air resistance.

```
½(0.3)(8²) + 0.3(9.8)(1.5) = ½(0.3)v² + 0
9.6 + 4.41 = 0.15 v²
v² = 93.4       v = 9.66 m s⁻¹ (3 s.f.)
```

The mass cancels if you write the equation per kilogram: v² = u² + 2gh. The direction of the throw does not matter either, because energy has no direction.

When there is resistance, extend the equation: initial KE + initial GPE − work done against resistance = final KE + final GPE.

**Example 5.** A 0.5 kg stone is dropped from rest 20 m above the ground and hits the ground at 18 m s⁻¹. Find the average constant resistance force.

```
initial energy = 0.5 × 9.8 × 20 = 98 J
final KE = ½ × 0.5 × 18² = 81 J
work against resistance = 98 − 81 = 17 J
R × 20 = 17          R = 0.85 N
```

## 5. Power

Power is the rate at which a force does work. The unit is the watt, W (1 W = 1 J s⁻¹).

```
P = work done / time
```

For a force F that acts in the direction of motion of an object moving at speed v, the work done in a short time δt is F v δt, so:

```
P = F v
```

Often F is the driving force of an engine. For a car, the resultant force is F − R, so Newton's second law gives F − R = ma with F = P/v.

**Example 6.** A car of mass 1200 kg has a maximum engine power of 36 kW. The resistance to motion is a constant 900 N.

(a) Maximum speed on a level road: there is no acceleration, so F = 900 N and v = P/F = 36000/900 = 40 m s⁻¹.

(b) Acceleration at 15 m s⁻¹ on a level road: F = 36000/15 = 2400 N. Then 2400 − 900 = 1200a, so a = 1.25 m s⁻².

(c) Maximum speed up a slope with sin θ = 1/20: at constant speed, F = 900 + 1200 × 9.8 × (1/20) = 900 + 588 = 1488 N. So v = 36000/1488 = 24.2 m s⁻¹ (3 s.f.).

**Example 7.** A motor raises an 80 kg load at a steady 1.5 m s⁻¹. The tension equals the weight, 80 × 9.8 = 784 N, so the power output is 784 × 1.5 = 1176 W.

Do not confuse these: work is in joules and power is in watts. A kilowatt is 1000 W, so convert before using P = Fv.

## Common errors

- Using Fd when the force is at an angle. Include cos θ, and check that θ is the angle to the direction of motion, not to the vertical.
- Using the slope length as the height in mgh. The height is length × sin of the angle.
- Leaving out a force's work in the work-energy equation, usually friction or the weight component on a slope.
- Writing a positive value for work done against friction. In an energy equation, friction removes energy.
- Using conservation of energy when there is friction, drag or an engine.
- Using the speed in km h⁻¹ or power in kW without converting.
- Putting the net force into P = Fv. F is the force from the engine; the net force is F minus the resistances.

## Examiner insights

Show the stage of the motion each equation describes, because an energy equation with unlabelled terms is hard to give credit to if one number is wrong. Write each force's work as a separate line so a slip in one term does not hide your correct method elsewhere. State clearly the modelling assumptions you are using, such as no air resistance or a smooth surface, when a question asks you to comment on them.

## Next steps

Try the [practice questions](/resources/oxfordaqa-a-level-mathematics-work-energy-and-power-practice/), then condense the unit with the [revision notes](/resources/oxfordaqa-a-level-mathematics-work-energy-and-power-revision-notes/). Take a [free diagnostic](/diagnostics/) when you want to check readiness.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section M2.6 (Work and energy). Published by OxfordAQA for International AS exams from May/June 2018 and International A-level exams from May/June 2019.
