---
title: "Edexcel International A Level Mathematics (YMA01): M2 Work and energy"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit M2: Mechanics 2"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 6.3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m2-mechanics-2-edexcel-alevel-maths"
    subtopic: "m2-work-and-energy-edexcel-alevel-maths"
description: "Edexcel IAL Maths M2 work and energy: kinetic and potential energy, the work-energy principle on rough slopes, conservation of energy and power with P = Fv."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section 3 of Unit M2: Mechanics 2 in the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3: "Kinetic and potential energy, work and power. The work-energy principle. The principle of conservation of mechanical energy." The guidance adds that "problems involving motion under a constant resistance and/or up and down an inclined plane may be set". Kinetic energy ½mv² and potential energy mgh are on the list of formulae you must know.

The broader [work, energy, power and collisions guide](/resources/edexcel-ial-mathematics-work-energy-and-power-and-collisions-with-the/) introduces each idea. This guide goes deeper into the two most common long question types: a particle that goes up a rough slope and comes back down, and a vehicle working at a given power.

## What the specification asks for

| Idea | Formula or statement |
|---|---|
| Kinetic energy | KE = ½mv² |
| Gravitational potential energy | PE = mgh, with h the vertical height above a chosen level |
| Work done by a constant force | Work = force × distance moved in the direction of the force |
| Work–energy principle | Work done by the forces equals the change in kinetic energy |
| Conservation of mechanical energy | KE + PE stays constant when only gravity does work |
| Power | Rate of doing work; for a driving force F at speed v, P = Fv |

Energy and work are measured in joules (J); power in watts (W), where 1 W = 1 J s⁻¹.

## Work done

A constant force F moving its point of application a distance s does work:

```
work = F s cos θ
```

where θ is the angle between the force and the direction of motion. Three cases come up again and again:

- **Against gravity**, moving a distance d up a slope at angle α: the height gained is d sin α, so the work against gravity is mgd sin α.
- **Against friction** on a slope: the friction is μR = μmg cos α (if no other force changes R), so the work against friction is μmg cos α × d.
- **By a force at an angle θ to the motion**: F cos θ × s.

The normal reaction does no work, because it is perpendicular to the motion.

## The energy equation

Most problems are best written as one balance:

```
initial KE + initial PE + work done by driving forces
    = final KE + final PE + work done against resistances
```

This is the work–energy principle with gravity written as potential energy. It works for any path, including curved ones where the acceleration is not constant and suvat formulae cannot be used.

## Conservation of mechanical energy

If the only force doing work is gravity (smooth surfaces, no driving force, no resistance), then KE + PE is constant. A particle falling or sliding through a vertical height h from rest gains speed √(2gh), whatever the shape of the path.

## Worked example 1: up a rough slope and back down

A particle of mass 2 kg is projected up a line of greatest slope of a rough plane inclined at 30° to the horizontal, with speed 8 m s⁻¹. The coefficient of friction is 0.3. **(a)** Find how far up the slope it travels. **(b)** Show that it slides back down, and find its speed when it returns to its starting point.

```
R = 2g cos 30° = 16.97 N
friction F = 0.3 × 16.97 = 5.092 N
```

**(a)** Going up, both gravity and friction act against the motion. Let it travel d m.

```
initial KE = final PE + work against friction
(1/2)(2)(8^2) = 2g(d sin 30°) + 5.092d
64 = 9.8d + 5.092d = 14.892d
d = 4.30 m
```

**(b)** At the top, the component of weight down the slope is 2g sin 30° = 9.8 N. The greatest friction is 5.092 N, which is less, so the particle slides back. Friction now acts up the slope, still against the motion.

```
PE lost = KE gained + work against friction
9.8 × 4.298 = (1/2)(2)v^2 + 5.092 × 4.298
v^2 = (9.8 - 5.092) × 4.298 = 20.23
v = 4.50 m s^-1
```

The particle returns slower than it set off, because friction did work on both legs. Equivalently, μ = 0.3 < tan 30° = 0.577, which is the condition for sliding back.

## Worked example 2: a smooth curve, then a rough floor

A small block is released from rest at the top of a smooth curved slide, 5 m above a rough horizontal floor. At the bottom it moves onto the floor, where the coefficient of friction is 0.4. Find its speed at the bottom of the slide, and how far it travels along the floor.

```
smooth slide: mgh = (1/2)mv^2,  v = √(2 × 9.8 × 5) = 9.90 m s^-1
rough floor:  (1/2)mv^2 = 0.4mg × d
              mg(5) = 0.4mg d,  so  d = 12.5 m
```

The mass cancels in both lines, so it is not needed. The slide is curved, so the only way to find the speed is by energy.

## Power

Power is the rate at which a force does work. For a vehicle with driving force F moving at speed v:

```
P = Fv,   so   F = P/v
```

- **Maximum speed:** the vehicle stops accelerating when the driving force equals the total resistance. On a level road with resistance R: v_max = P/R. Up a slope, add mg sin α to the resistance.
- **Acceleration at a given speed:** find F = P/v, then use Newton's second law: F − R − mg sin α = ma (with the slope term only if climbing).
- **Units:** convert kilowatts to watts before dividing.

## Worked example 3: a car working at constant power

A car of mass 1200 kg has a maximum power of 30 kW. The resistance to motion is a constant 600 N.

**(a)** Find the maximum speed on a level road. **(b)** Find the maximum speed up a hill inclined at α, where sin α = 1/20. **(c)** Find the acceleration on the level road at the instant the car is moving at 15 m s⁻¹ with the engine at full power.

```
(a) F = R:  30000/v = 600,  v = 50 m s^-1
(b) F = 600 + 1200g sin α = 600 + 588 = 1188 N
    v = 30000/1188 = 25.3 m s^-1
(c) F = 30000/15 = 2000 N
    2000 - 600 = 1200a,  a = 1.17 m s^-2
```

Part (c) combines power with Newton's second law. The work–energy principle is not the tool there, because the question asks about one instant.

## Common mistakes

- Using the distance along a slope in mgh instead of the vertical height.
- Using R = mg on a slope, so the friction and its work are wrong.
- Forgetting that friction acts against the motion in both directions, so it removes energy on the way up and on the way down.
- Putting the work done against resistance on the wrong side of the energy equation.
- Leaving power in kilowatts.
- Using P = Fv with the resistance instead of the driving force.

## Exam technique

- **"Use the work–energy principle"** means you must write an energy equation. A solution by Newton's second law and suvat may not get the marks.
- **"Find the work done against friction"** wants a value in joules; state which force and which distance.
- **"Show that the particle slides back"** needs the comparison of mg sin α with the greatest friction, or of μ with tan α, in words.
- **"Find the maximum speed"** means zero acceleration: driving force equals resistance.
- Give answers that use g = 9.8 to 2 or 3 significant figures.

## Where next

- [M2 work and energy revision notes](/resources/edexcel-a-level-mathematics-yma01-m2-work-and-energy-edexcel-alevel-maths-revision-notes/) for the formulae and a self-test.
- [M2 work and energy practice questions](/resources/edexcel-a-level-mathematics-yma01-m2-work-and-energy-edexcel-alevel-maths-practice/) with mark schemes.
- [M2 collisions study guide](/resources/edexcel-a-level-mathematics-yma01-m2-collisions-edexcel-alevel-maths/), where kinetic energy lost in impacts is calculated.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification, Issue 3, April 2019 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
