---
title: "AQA A-Level Physics (7408): Rotational dynamics"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Engineering physics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 11.1
syllabusTopics:
  - qualification: "a-level"
    topic: "engineering-physics-aqa-alevel"
    subtopic: "rotational-dynamics-aqa-alevel"
description: "AQA A-level Physics 7408 section 3.11.1 in depth: moment of inertia, flywheels, angular motion graphs, torque, angular momentum, work and power."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section **3.11.1 Rotational dynamics** of the AQA AS and A-level Physics specification (7407/7408), part of the A-level only Engineering physics option assessed in Paper 3 Section B. It has six content statements, 3.11.1.1 to 3.11.1.6: moment of inertia, rotational kinetic energy, rotational motion, torque and angular acceleration, angular momentum, and work and power. The specification notes that questions can be set in unfamiliar contexts, with the necessary information given, and that expressions for the moment of inertia of particular shapes will be given where needed.

The [Engineering physics study guide](/resources/aqa-a-level-physics-engineering-physics/) summarises the whole option. Use the [rotational dynamics revision notes](/resources/aqa-a-level-physics-7408-rotational-dynamics-aqa-alevel-revision-notes/) for recall and the [rotational dynamics practice questions](/resources/aqa-a-level-physics-7408-rotational-dynamics-aqa-alevel-practice/) to test yourself. Radian measure and angular speed come from [Further mechanics and thermal physics](/resources/aqa-a-level-physics-further-mechanics-and-thermal-physics/).

## The analogy that organises the topic

The specification expects you to be aware of the analogy between rotational and translational dynamics. Every rotational equation is a linear one with substitutions.

| Linear | Rotational | Link |
|---|---|---|
| displacement s (m) | angular displacement θ (rad) | s = rθ for a point at radius r |
| velocity v | angular velocity ω (rad s⁻¹) | v = rω |
| acceleration a | angular acceleration α (rad s⁻²) | a = rα (tangential) |
| mass m | moment of inertia I (kg m²) | I = Σmr² |
| force F | torque T (N m) | T = Fr |
| F = ma | T = Iα | resultant torque |
| E_k = ½mv² | E_k = ½Iω² | |
| momentum mv | angular momentum Iω | |
| impulse FΔt | angular impulse TΔt = Δ(Iω) | |
| W = Fs, P = Fv | W = Tθ, P = Tω | |

## 3.11.1.1 Moment of inertia

**I = mr²** for a point mass at distance r from the axis; **I = Σmr²** for an extended object, summing over all its parts. Moment of inertia measures resistance to angular acceleration, just as mass measures resistance to linear acceleration.

Qualitative factors (the specification asks for these):

- **Total mass**: more mass, larger I.
- **Distribution of mass**: mass further from the axis counts much more, because r is squared.
- **Position of the axis**: the same object has a different I about different axes.

**Worked example 1.** A ring flywheel of mass 12 kg and radius 0.25 m has I = MR² = 12 × 0.25² = **0.75 kg m²** (expression given). A uniform disc of the same mass and radius has I = ½MR² = **0.375 kg m²**. The ring stores twice the energy at the same ω because its mass is all at the rim.

## 3.11.1.2 Rotational kinetic energy and flywheels

**E_k = ½Iω²**. A flywheel's **energy storage capacity** depends on:

- **I**: more mass, concentrated near the rim (heavy rim, light spokes);
- **ω**: energy rises with ω², so high speed is very effective;
- the **maximum safe ω**, set by the strength of the material, because the rim must be held in circular motion by tension;
- **friction** at bearings and air resistance, which drain stored energy (reduced by good bearings, or running in a vacuum).

Named uses: **smoothing** torque and speed (an engine's pulsed torque, or a varying load, is evened out because a large I changes ω only slowly); **energy storage in vehicles** (regenerative braking); and **production machines** such as presses and punches, where a small motor gradually spins up the flywheel and the stored energy is released in a short, large burst.

**Worked example 2.** A vehicle flywheel (I = 4.0 kg m²) is spun up from 200 rad s⁻¹ to 400 rad s⁻¹ by braking.

```
ΔE_k = ½ × 4.0 × (400² − 200²) = 2.4 × 10⁵ J
```

Doubling ω quadrupled the stored energy, from 8.0 × 10⁴ J to 3.2 × 10⁵ J.

## 3.11.1.3 Rotational motion and graphs

ω = Δθ/Δt and α = Δω/Δt. Angular velocity has a direction (the sense of rotation); angular speed does not.

**Graphical methods.** On an ω–t graph, **gradient = α** and **area under the graph = θ**. A straight line means uniform α; a curve means non-uniform α, found from the tangent at a point. On a θ–t graph the gradient is ω.

The uniform-α equations:

```
ω₂ = ω₁ + αt          θ = ½(ω₁ + ω₂)t
θ = ω₁t + ½αt²        ω₂² = ω₁² + 2αθ
```

**Worked example 3.** A motor accelerates uniformly from rest to 60 rad s⁻¹ in 8.0 s, runs at 60 rad s⁻¹ for 10 s, then decelerates uniformly to rest in 12 s. Find each angular acceleration and the total number of revolutions.

```
α: 60/8.0 = 7.5 rad s⁻²;  0;  −60/12 = −5.0 rad s⁻²
θ = area = ½ × 8.0 × 60 + 60 × 10 + ½ × 12 × 60 = 240 + 600 + 360 = 1200 rad
revolutions = 1200/2π = 191
```

## 3.11.1.4 Torque and angular acceleration

**T = Fr**, with r the perpendicular distance from the axis to the line of action of the force. **T = Iα**, where T is the **resultant** torque, including any frictional torque acting against the motion.

**Worked example 4: measuring I.** A string wound round an axle of radius 0.020 m carries a 0.50 kg mass. Released from rest, the mass falls 1.2 m in 4.0 s. Find I for the wheel and axle, ignoring friction (g = 9.81 m s⁻²).

```
a = 2s/t² = 2 × 1.2/4.0² = 0.15 m s⁻²
tension = m(g − a) = 0.50 × (9.81 − 0.15) = 4.83 N
torque = 4.83 × 0.020 = 0.0966 N m;   α = a/r = 7.5 rad s⁻²
I = T/α = 0.0966/7.5 = 0.013 kg m²
```

Check with energy: mgh = 5.89 J; the mass gains ½mv² = 0.09 J (v = 0.60 m s⁻¹); the wheel gains ½Iω² = ½ × 0.0129 × 30² = 5.80 J. The totals agree. Friction would make the measured I too large, because some of the torque overcomes friction rather than accelerating the wheel.

## 3.11.1.5 Angular momentum

**Angular momentum = Iω** (N m s, equivalent to kg m² s⁻¹). **Angular impulse TΔt = Δ(Iω)** when T is constant; for a varying torque, the angular impulse is the area under a torque–time graph.

**Conservation**: if no external resultant torque acts, the total angular momentum of a system stays constant. Applications from sport:

- A **skater** spinning with arms out pulls them in: I falls, so ω rises.
- A **diver** or gymnast tucks to spin quickly, then opens out to slow the rotation before entering the water or landing.
- A **long jumper** circles the arms forwards in flight; because the total angular momentum stays fixed, the forward rotation of the rest of the body is reduced.

**Worked example 5.** A diver leaves the board rotating at 2.0 rad s⁻¹ with I = 12 kg m², then tucks to I = 3.0 kg m².

```
Iω conserved: 12 × 2.0 = 3.0 × ω  →  ω = 8.0 rad s⁻¹
E_k before = ½ × 12 × 2.0² = 24 J;  after = ½ × 3.0 × 8.0² = 96 J
```

The extra 72 J comes from the work done by the diver's muscles pulling the limbs inwards.

**Worked example 6.** A constant torque of 0.80 N m acts for 2.5 s on a wheel (I = 0.40 kg m²) initially at rest: Δ(Iω) = 0.80 × 2.5 = 2.0 N m s, so ω = 2.0/0.40 = **5.0 rad s⁻¹**.

## 3.11.1.6 Work and power

**W = Tθ** and **P = Tω**. Rotating machinery always has **frictional torque** at bearings and from air resistance. At constant speed the driving torque equals the frictional torque, and all the input power is dissipated.

**Worked example 7: run-down test.** A flywheel (I = 2.5 kg m²) is disconnected and coasts from 300 rad s⁻¹ to 240 rad s⁻¹ in 30 s. Assume the frictional torque is constant.

```
α = (240 − 300)/30 = −2.0 rad s⁻²
frictional torque = Iα = 2.5 × 2.0 = 5.0 N m
power lost to friction at 300 rad s⁻¹ = 5.0 × 300 = 1500 W
```

To keep the flywheel at 300 rad s⁻¹, a motor must supply 1.5 kW. In 40 revolutions, a 25 N m torque does W = 25 × 40 × 2π = 6.3 × 10³ J of work.

## Common mistakes

- Using rpm or revolutions in equations that need rad s⁻¹ or rad.
- Using the applied torque in T = Iα when friction acts.
- Assuming kinetic energy is conserved when angular momentum is.
- Forgetting to square r in I = mr².
- Treating the falling mass's tension as mg.

## Exam technique

- **Calculate**: convert to radians first (1 rev = 2π rad), and state the equation before substituting.
- **Explain** flywheel design using both I and ω, and name the strength limit.
- **Explain** a spinning skater with conservation of angular momentum: no external torque, I decreases, so ω increases.
- **Use graphs**: say "gradient" or "area" explicitly and quote the units.

Next, try the [rotational dynamics practice questions](/resources/aqa-a-level-physics-7408-rotational-dynamics-aqa-alevel-practice/).

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.11.1 Rotational dynamics (A-level only), content statements 3.11.1.1 to 3.11.1.6.
