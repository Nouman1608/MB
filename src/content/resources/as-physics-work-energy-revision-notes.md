---
title: "AS Physics: Work, Energy and Power: Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Work, energy and power"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 5.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "as-work-energy-and-power"
    subtopic: "as-energy-conservation"
  - qualification: "a-level"
    topic: "as-work-energy-and-power"
    subtopic: "as-gravitational-potential-energy-and-kinetic-energy"
description: "Condensed recall notes on work done, kinetic and potential energy, conservation, power and efficiency for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Work, Energy and Power study guide](/resources/as-physics-work-energy-and-power/).

## Equations

```
work done          W = F s cos(theta)     theta = angle between F and s
kinetic energy     Ek = 1/2 m v^2
grav. potential    Ep = m g h             (near the Earth's surface)
power              P = W / t  =  F v
efficiency         = useful output / total input  x 100%
```

The `cos θ` matters: work is done only by the component of force **along the displacement**. A force perpendicular to motion does **zero** work — which is why circular motion at constant speed involves no work by the centripetal force.

## Conservation of energy

Energy cannot be created or destroyed, only transferred between stores.

```
Falling body (no resistance):   m g h = 1/2 m v^2   ->   v = sqrt(2 g h)
```

Mass cancels, so all objects reach the same speed after the same drop in the absence of air resistance.

**With** resistance: `Ep = Ek + work done against resistance`, so the impact speed is lower and the difference appears as internal energy.

## Power in two forms

```
P = W / t       energy transferred per second
P = F v         useful when force and velocity are both known
```

`P = Fv` is the one to reach for in vehicle problems: at **constant velocity**, the driving force equals total resistance, so `P = (resistive force) × v`.

## Deriving Ek

From `v² = u² + 2as` with u = 0 and `F = ma`:

```
v^2 = 2as       ->    s = v^2 / 2a
W = F s = ma x v^2/(2a) = 1/2 m v^2
```

Being asked to derive rather than quote is common on Paper 2.

## Efficiency and dissipation

No real device is 100% efficient. Energy is **dissipated** — usually as internal energy to the surroundings — where it becomes too spread out to be useful. It is not destroyed.

## Exam traps

- Omitting `cos θ` where force and displacement are not parallel.
- Saying energy is "lost" rather than dissipated or transferred.
- Using the slope length instead of the **vertical height** in mgh.
- Forgetting that at constant velocity the driving force equals resistance, so acceleration is zero.
- Ek depends on v², so doubling speed **quadruples** kinetic energy.
- Efficiency above 100% means the useful and total values have been swapped.

## Self-test

1. A 50 N force pulls a crate 8 m at 30° to the horizontal. Find the work done.
2. Derive Ek = ½mv² from the equations of motion.
3. A car travels at constant 25 m/s against 800 N of resistance. Find the engine's useful power output.
4. Why does a centripetal force do no work?
5. A ball is dropped 20 m. Find its impact speed, ignoring air resistance (g = 9.81).

**Answers:** 1. W = 50 × 8 × cos 30° = **346 J**. 2. From v² = u² + 2as with u = 0, s = v²/2a; W = Fs = ma × v²/2a = ½mv². 3. At constant velocity the driving force equals resistance, so P = Fv = 800 × 25 = **20 kW**. 4. It acts perpendicular to the velocity at every instant, so cos θ = cos 90° = 0 and no work is done. 5. v = √(2 × 9.81 × 20) = **19.8 m/s**.
