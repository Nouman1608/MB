---
title: "AS Physics: Work, Energy and Power — Revision Notes"
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
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29; 2026-11-08: reviewed by hassan."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Work, Energy and Power study guide](/resources/as-physics-work-energy-and-power/),
and test yourself with the [practice questions](/resources/as-physics-work-energy-practice/).

## Equations

```
work done          W = F s cos(theta)     theta = angle between F and s
kinetic energy     Ek = 1/2 m v^2
grav. potential    Ep = m g h             (near the Earth's surface)
power              P = W / t  =  F v
efficiency         = useful output / total input  x 100%
```

The `cos θ` matters: work is done only by the component of force **along the displacement**. A force perpendicular to motion does **zero** work — which is why circular motion at constant speed involves no work by the centripetal force.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-work-energy-and-power--01-work-cos-theta.webp" width="900" height="1250" alt="A case is pulled 18 m by a 64 N strap at 35 degrees above horizontal; the 52.4 N horizontal component moves it and the 36.7 N vertical component does no work, so W = 64 x 18 x cos 35 = 944 J. A graph of work against angle for the same F and x falls from 1152 J at 0 degrees through 0 J at 90 degrees to -1152 J at 180 degrees." loading="lazy">
  <figcaption>Only the component of the force along the displacement does work: W = Fx cos θ.</figcaption>
</figure>


## Conservation of energy

Energy cannot be created or destroyed, only transferred between stores.

```
Falling body (no resistance):   m g h = 1/2 m v^2   ->   v = sqrt(2 g h)
```

Mass cancels, so all objects reach the same speed after the same drop in the absence of air resistance.

**With** resistance: `Ep = Ek + work done against resistance`, so the impact speed is lower and the difference appears as internal energy — the same reasoning used to find the energy dissipated when a dropped ball rebounds to a lower height than it fell from.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-work-energy-and-power--05-ep-ek-exchange.webp" width="900" height="1270" alt="A 0.35 kg pendulum bob released 0.18 m above its lowest point has 0.62 J, all potential at the top, half and half halfway down (1.33 m/s) and all kinetic at the bottom (1.88 m/s); the string tension does no work. A 450 kg car falling 16 m and reaching 15.0 m/s turns 70.6 kJ of potential energy into 50.6 kJ kinetic and 20.0 kJ dissipated as thermal energy." loading="lazy">
  <figcaption>Without resistive forces Ep + Ek stays constant; with them the difference is dissipated as thermal energy.</figcaption>
</figure>


## Power in two forms

```
P = W / t       energy transferred per second
P = F v         useful when force and velocity are both known
```

`P = Fv` is the one to reach for in vehicle problems: at **constant velocity**, the driving force equals total resistance, so `P = (resistive force) × v` — and the acceleration is zero, since the resultant force is zero.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-work-energy-and-power--07-power-fv.webp" width="900" height="1190" alt="A car at a steady 28 m/s on a level road with 650 N of resistance needs P = 650 x 28 = 18.2 kW. A 1800 kg van climbing a 1 in 12 slope at 15 m/s needs a driving force of 650 + 1472 = 2122 N, so P = 31.8 kW. Arrows are drawn to the same scale." loading="lazy">
  <figcaption>At steady speed the driving force balances resistance (plus weight down a slope), and P = Fv.</figcaption>
</figure>


## Deriving Ek

From `v² = u² + 2as` with u = 0 and `F = ma`:

```
v^2 = 2as       ->    s = v^2 / 2a
W = F s = ma x v^2/(2a) = 1/2 m v^2
```

Being asked to derive rather than quote is common on Paper 2 — know every step, not just the final formula.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-work-energy-and-power--03-kinetic-energy.webp" width="900" height="1280" alt="A mass accelerated from rest by a constant force F over distance x gains work W = Fx = ma x v²/2a = ½mv². The graph of Ek against v for a 7500 kg lorry is a parabola: 1.2 MJ at 18 m/s and 4.9 MJ at 36 m/s, four times as much for double the speed." loading="lazy">
  <figcaption>Ek = ½mv² follows from W = Fx and v² = 2ax; doubling speed quadruples Ek.</figcaption>
</figure>


## Efficiency and dissipation

Most real devices are not 100% efficient, because some energy is **dissipated** -- usually as internal energy to the surroundings -- where it becomes too spread out to be useful; that energy is not destroyed, only transferred to a form that can no longer do the intended job. Efficiency can never *exceed* 100%, but 100% itself isn't automatically impossible: it depends what the "useful" output is defined as. A heater intended to produce heat can convert essentially all of its electrical input into that useful output, since there's no other form for the energy to escape to.

**Worked example.** A pump raises 300 kg of water through 10 m in 25 s, while drawing 1500 W of electrical power.

```
useful power = mgh / t = 300 x 9.81 x 10 / 25 = 1177 W

efficiency = (useful output / total input) x 100 = (1177 / 1500) x 100 = 78.5%
```

**Worked example.** A 0.40 kg ball is dropped from 6.0 m and rebounds to 3.5 m. Find the energy dissipated during the bounce.

```
GPE lost falling  = mgh1 = 0.40 x 9.81 x 6.0 = 23.5 J
GPE regained on rebound = mgh2 = 0.40 x 9.81 x 3.5 = 13.7 J
energy dissipated = 23.5 - 13.7 = 9.81 J
```

## Exam traps

- Omitting `cos θ` where force and displacement are not parallel.
- Saying energy is "lost" rather than dissipated or transferred.
- Using the slope length instead of the **vertical height** in mgh.
- Forgetting that at constant velocity the driving force equals resistance, so acceleration is zero.
- Ek depends on v², so doubling speed **quadruples** kinetic energy.
- Efficiency above 100% means the useful and total values have been swapped.
- On a rebound problem, forgetting to find GPE at **both** heights before subtracting — the dissipated energy is a difference, not either value alone.
- Mixing up "useful power output" (found from mgh/t) with "total power input" (given, or drawn from the supply) when substituting into the efficiency formula.

## Self-test

1. A 50 N force pulls a crate 8 m at 30° to the horizontal. Find the work done.
2. Derive Ek = ½mv² from the equations of motion.
3. A car travels at constant 25 m/s against 800 N of resistance. Find the engine's useful power output.
4. Why does a centripetal force do no work?
5. A ball is dropped 20 m. Find its impact speed, ignoring air resistance (g = 9.81).
6. A pump raises 200 kg of water through 8.0 m in 20 s, drawing 1000 W. Find its efficiency.
7. A 0.50 kg ball is dropped from 4.0 m and rebounds to 2.0 m. Find the energy dissipated during the bounce.

**Answers:** 1. W = 50 × 8 × cos 30° = **346 J**. 2. From v² = u² + 2as with u = 0, s = v²/2a; W = Fs = ma × v²/2a = ½mv². 3. At constant velocity the driving force equals resistance, so P = Fv = 800 × 25 = **20 kW**. 4. It acts perpendicular to the velocity at every instant, so cos θ = cos 90° = 0 and no work is done. 5. v = √(2 × 9.81 × 20) = **19.8 m/s**. 6. Useful power = mgh/t = 200 × 9.81 × 8.0 ÷ 20 = **784.8 W**; efficiency = (784.8 ÷ 1000) × 100 = **78.5%**. 7. GPE lost = 0.50 × 9.81 × 4.0 = 19.6 J; GPE regained = 0.50 × 9.81 × 2.0 = 9.81 J; energy dissipated = 19.6 − 9.81 = **9.81 J**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-work-energy-revision-notes--01-rebound-dissipation.webp" width="900" height="800" alt="A 0.40 kg ball is dropped from 6.0 m and rebounds to 3.5 m. Gravitational potential energy at the top is 23.5 J and at the rebound peak 13.7 J. The 9.81 J difference is the energy dissipated, found by subtracting the two values." loading="lazy">
  <figcaption>Dissipated energy is the difference between the GPE at the two heights.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-work-energy-and-power--08-efficiency.webp" width="900" height="1200" alt="A hoist drawing 2400 W lifts 150 kg at 0.90 m/s, giving 1324 W useful output; the Sankey diagram shows 1076 W wasted as heat and sound, so efficiency is 55 percent. OCR only: an 80 percent motor driving a 90 percent gearbox gives 72 percent overall, and 1 kW h = 3.6 x 10^6 J." loading="lazy">
  <figcaption>Efficiency = useful output / total input; efficiencies of machines in series multiply.</figcaption>
</figure>

## Frequently asked questions

**What is the formula for work done?**
Work done is W = Fs cos θ, where θ is the angle between the force and the displacement. Only the component of force along the displacement does work, so a perpendicular force does no work.

**How do you find the speed of a falling object using energy?**
With no air resistance, the loss of gravitational potential energy equals the gain in kinetic energy, mgh = ½mv², so v = √(2gh). Mass cancels, so all objects reach the same speed after the same drop.

**How do you find the power of a vehicle at constant speed?**
At constant velocity the driving force equals the total resistive force, so the power is P = Fv = resistive force × speed.

**How do you derive the kinetic energy formula?**
Start from v² = u² + 2as with u = 0, so s = v²/2a. Then work done W = Fs = ma × v²/2a = ½mv², which is the kinetic energy gained.
