---
title: "OxfordAQA International AS and A-level Physics: Rotational motion and angular momentum (9630)"
seoTitle: "OxfordAQA A-level Physics Rotational Motion Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Rotational motion: moment of inertia, torque and angular momentum"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 128
syllabusTopics:
  - qualification: "a-level"
    topic: "energy-sources-oxfordaqa-alevel"
    subtopic: "rotational-motion-oxfordaqa-alevel-physics"
description: "Study guide to rotational motion for OxfordAQA International A-level Physics (9630): moment of inertia, torque, angular momentum, energy and power."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide teaches section 3.13.1 (Rotational motion) of the OxfordAQA International AS and A-level Physics (9630) specification, Version 4.4, in exams from May/June 2020. The topic sits under 3.13 (Energy sources), which the specification labels International A-level only, so International AS candidates can leave it out. Use it with the [course hub](/boards/oxfordaqa/a-level/physics/) and tick points off on the [printable checklist](/checklists/oxfordaqa/a-level/physics/).

Other pages for this topic: [revision notes](/resources/oxfordaqa-a-level-physics-rotational-motion-moment-of-inertia-torque-and-angular-revision-notes/) and [practice questions](/resources/oxfordaqa-a-level-physics-rotational-motion-moment-of-inertia-torque-and-angular-practice/). You should already be comfortable with [circular motion and angular speed](/resources/oxfordaqa-a-level-physics-circular-motion-angular-speed-and-centripetal-force/) and with [vectors and moments](/resources/oxfordaqa-a-level-physics-vectors-equilibrium-of-forces-and-moments/). To find which topics need work first, take a [free diagnostic](/diagnostics/).

## What the specification asks for

| Outcome | What you must be able to do |
|---|---|
| I = mr² and I = Σmr² | Find the moment of inertia of a point mass and of a set of point masses |
| Factors affecting I | Say qualitatively how mass, its distribution and the axis change I |
| Angular quantities | Describe and use displacement, speed, velocity and acceleration for turning motion |
| Uniform angular acceleration | Use the four equations for constant α |
| Torque = Fr = Iα | Find torque and use it to find angular acceleration |
| Angular momentum Iω | Calculate it, and use conservation of angular momentum |
| Ek(rot) = ½Iω² | Calculate rotational kinetic energy |
| W = Tθ and P = Tω | Find work done and power for a torque |
| Analogy | Link each rotational quantity to its translational partner |

The specification says that formulae for the moment of inertia of particular solids are supplied when needed. So you do not need to memorise the formula for a particular solid. You do need to use a given expression correctly, and you must know I = mr² and I = Σmr².

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--04-vertical-circle.webp" width="900" height="810" alt="A 0.50 kg ball on a 0.80 m string. At the top (4.0 m/s) tension 5.1 N and weight 4.9 N both point down; at the bottom (6.9 m/s) tension 34.5 N points up and weight 4.9 N down, arrows to scale. The bottom tension exceeds the top by 6mg = 29.4 N, and the minimum speed at the top (T = 0) is sqrt(gr) = 2.8 m/s." loading="lazy">
  <figcaption>Tension is least at the top and greatest at the bottom, differing by 6mg for a freely moving ball.</figcaption>
</figure>


## Moment of inertia

Moment of inertia, I, measures how hard it is to change the rotation of an object about a chosen axis. It plays the part that mass plays in straight-line motion. Its unit is kg m².

For one point mass at perpendicular distance r from the axis:

I = mr²

For an extended object, imagine it split into small pieces. Add up the value for each piece:

I = Σmr²

### Factors that affect I

- **Total mass.** More mass gives a larger I, if the distribution is similar.
- **How the mass is distributed.** Mass far from the axis counts for much more than mass near it, because r is squared.
- **The position of the axis.** The same object has a different I about a different axis.

Shape matters because of the second factor. A ring and a solid disc can have the same mass and radius, yet the ring has the larger I because all its mass sits at the full radius.

**Worked example 1: adding point masses.** Three small beads are fixed to a light rod. The rod turns about an axis through one end. The beads are 0.20 kg at 0.10 m, 0.50 kg at 0.30 m and 0.10 kg at 0.60 m from the axis. Calculate I, and the rotational kinetic energy when the rod turns at 6.0 rad s⁻¹.

```
I = 0.20 × 0.10² + 0.50 × 0.30² + 0.10 × 0.60²
  = 0.0020 + 0.045 + 0.036
  = 0.083 kg m²
Ek(rot) = ½ × 0.083 × 6.0² = 1.5 J
```

The 0.10 kg bead is the lightest, yet it contributes almost as much as the 0.50 kg bead, because it is twice as far out.

**Worked example 2: a given expression.** A uniform rod of mass 3.0 kg and length 1.2 m is given as having I = ML²/12 about an axis through its centre and I = ML²/3 about an axis through one end.

```
centre: I = 3.0 × 1.2² / 12 = 0.36 kg m²
end:    I = 3.0 × 1.2² / 3  = 1.44 kg m²
```

The same rod is four times harder to spin about its end. Half the rod is further from the axis, and r is squared.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--09-moment-of-inertia.webp" width="900" height="1050" alt="Three beads of 0.20, 0.50 and 0.10 kg at 0.10, 0.30 and 0.60 m from an axis contribute mr^2 of 0.0020, 0.045 and 0.036 kg m^2, giving I = 0.083 kg m^2 and a kinetic energy of 1.5 J at 6.0 rad/s. A 3.0 kg 1.2 m rod has I = 0.36 kg m^2 about its centre and 1.44 kg m^2 about an end." loading="lazy">
  <figcaption>I = Σmr² grows with the square of each mass’s distance from the axis, so the same object is harder to spin about its end.</figcaption>
</figure>


## Angular displacement, speed, velocity and acceleration

These match the linear quantities one for one.

- **Angular displacement, θ.** The angle turned through, in radians. One revolution is 2π rad.
- **Angular speed, ω.** The rate of change of angle: ω = Δθ/Δt, in rad s⁻¹. It has size only.
- **Angular velocity.** Angular speed with a direction, which is the sense of rotation. In a problem with a single axis, choose one sense as positive and give the opposite sense a negative sign.
- **Angular acceleration, α.** The rate of change of angular velocity: α = Δω/Δt, in rad s⁻².

Convert before you calculate. For a rotation rate in revolutions per minute, multiply by 2π and divide by 60. A point at distance r from the axis has linear speed v = rω and tangential acceleration a = rα.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--01-radian-omega-v.webp" width="900" height="1160" alt="A circle with a 1 radian sector: the arc along the edge is as long as the radius and the angle is about 57.3 degrees, with quarter, half and three-quarter turns marked as pi/2, pi, 3pi/2 and 2pi. Below, a turntable at 45 rpm has omega 4.71 rad/s everywhere; a point at 0.10 m moves at 0.47 m/s and a point at 0.20 m at 0.94 m/s, so v = omega r." loading="lazy">
  <figcaption>One radian is the angle whose arc equals the radius, and at the same ω a point further out moves faster.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--02-centripetal-acceleration.webp" width="900" height="710" alt="Balls on a circle have tangent velocity arrows of equal length and acceleration arrows pointing to the centre, at right angles to the velocity. A vector triangle shows v1 and v2 and their difference delta v pointing towards the centre. A dashed line shows a ball moving straight on if the force is removed." loading="lazy">
  <figcaption>Speed is constant but the velocity turns, so the change in velocity and the acceleration point towards the centre.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--05-shm-restoring-force.webp" width="900" height="1000" alt="A 0.40 kg mass on a 25 N/m spring at x = -0.050 m, 0 and +0.050 m with restoring force arrows to scale (1.25 N towards equilibrium, zero at equilibrium). An acceleration-displacement graph is a straight line through the origin with gradient -omega squared = -62.5 per second squared, so omega squared = k/m and T = 0.795 s." loading="lazy">
  <figcaption>The restoring force and acceleration are proportional to displacement and opposite to it.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--06-shm-graphs.webp" width="900" height="1110" alt="Three stacked graphs over one period for amplitude 0.050 m and omega 4.0 per second: x is a cosine, v a negative sine with maximum 0.20 m/s a quarter cycle ahead of x, and a a negative cosine with maximum 0.80 m/s^2 in antiphase with x. Dotted lines mark quarter periods." loading="lazy">
  <figcaption>v leads x by a quarter cycle and a is in antiphase with x.</figcaption>
</figure>


## Equations for uniform angular acceleration

For constant α these have the same form as the equations for constant linear acceleration:

| Equation | Missing quantity |
|---|---|
| ω = ω₀ + αt | θ |
| θ = (ω₀ + ω)t / 2 | α |
| θ = ω₀t + ½αt² | ω |
| ω² = ω₀² + 2αθ | t |

Here ω₀ is the initial angular speed and ω the final. List the known symbols, name the unknown, and choose the equation that links them without needing a fifth quantity.

**Worked example 3: a carousel.** A carousel speeds up uniformly from rest to 1.5 rad s⁻¹ in 12 s. Find α and the angle turned through, in revolutions.

```
α = (1.5 − 0) / 12 = 0.125 rad s⁻²
θ = ½αt² = ½ × 0.125 × 12² = 9.0 rad
revolutions = 9.0 / 2π = 1.4
```

**Worked example 4: slowing to rest.** A grinding wheel turns at 3000 revolutions per minute. It is brought to rest uniformly in 40 revolutions. Find the angular acceleration and the time taken.

```
ω₀ = 3000 × 2π / 60 = 314 rad s⁻¹
θ  = 40 × 2π = 251 rad
ω² = ω₀² + 2αθ  →  0 = 314² + 2α(251)
α  = −314² / (2 × 251) = −196 rad s⁻²
t  = 2θ / ω₀ = 2 × 251 / 314 = 1.6 s
```

The negative sign means the angular acceleration opposes the rotation. A graph of ω against t is a straight line, its gradient is α, and the area under it is θ.

## Torque and Fr = Iα

The torque of a force about an axis is

T = Fr

where r is measured at right angles from the axis to the line along which the force acts. The unit is N m. Torque is the cause of angular acceleration, as force is for linear acceleration:

T = Iα

Here T is the **resultant** torque. If a driving torque and an opposing torque act, subtract them first. A larger I means a smaller α for the same torque.

**Worked example 5: a pulley wheel.** A string is wrapped round a uniform disc of mass 2.0 kg and radius 0.15 m. The disc is given as having I = ½MR² about its axis. A steady tangential pull of 2.4 N acts at the rim, and the disc starts from rest. Find α, the angular speed after 2.5 s, and the work done by the torque in that time.

```
I = ½ × 2.0 × 0.15² = 0.0225 kg m²
T = Fr = 2.4 × 0.15 = 0.36 N m
α = T / I = 0.36 / 0.0225 = 16 rad s⁻²
ω = αt = 16 × 2.5 = 40 rad s⁻¹
θ = ½αt² = ½ × 16 × 2.5² = 50 rad
W = Tθ = 0.36 × 50 = 18 J
```

Check: Ek(rot) = ½ × 0.0225 × 40² = 18 J. The work done equals the energy gained.

## Angular momentum and its conservation

The angular momentum of a body turning about a fixed axis is

L = Iω

with unit kg m² s⁻¹ (equivalently N m s). Like linear momentum, it is conserved: **the total angular momentum of a system stays constant when no external resultant torque acts on it.**

Two common cases:

1. **I changes, same object.** If I falls, ω rises so that Iω stays constant.
2. **Two bodies join.** When one rotating body locks onto another about the same axis, (I₁ + I₂)ω_f = I₁ω₁ + I₂ω₂.

**Worked example 6: a disc dropped onto a disc.** Disc A (I = 0.50 kg m²) spins freely at 8.0 rad s⁻¹. Disc B (I = 0.30 kg m²), at rest on the same axis, is lowered onto it and the two turn together.

```
0.50 × 8.0 = (0.50 + 0.30) × ω_f
ω_f = 4.0 / 0.80 = 5.0 rad s⁻¹
Ek before = ½ × 0.50 × 8.0² = 16 J
Ek after  = ½ × 0.80 × 5.0² = 10 J
```

Angular momentum is conserved but 6 J of kinetic energy is not. It becomes thermal energy as the surfaces slip against each other before they lock, as in an inelastic collision.

## Rotational kinetic energy, work and power

Rotational kinetic energy is Ek(rot) = ½Iω². Each small mass in the object has kinetic energy ½m(rω)², and adding them gives ½Iω².

A constant torque T turning a body through θ does work **W = Tθ**. Dividing by time gives the power **P = Tω**.

**Worked example 7: power from a motor.** A motor turns a shaft at 1800 revolutions per minute against a steady torque of 12 N m.

```
ω = 1800 × 2π / 60 = 188 rad s⁻¹
P = Tω = 12 × 188 = 2.3 × 10³ W
```

Use W = Tθ for energy transfer over an angle, and Ek(rot) = ½Iω² for energy stored in the rotation. When a resultant torque speeds up a body, W = Tθ equals the gain in Ek(rot), as in example 5.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--07-shm-energy.webp" width="900" height="1080" alt="For a 0.250 kg oscillator with A 0.080 m and f 1.8 Hz the total energy is 0.102 J. Against displacement, Ep is an upright parabola and Ek an inverted parabola under a flat total line, crossing at plus and minus A over root 2. Against time each energy completes two cycles per oscillation and they are in antiphase." loading="lazy">
  <figcaption>Energy swaps between kinetic and potential, with the total constant when there is no damping.</figcaption>
</figure>


## The analogy with translational dynamics

| Translational | Rotational |
|---|---|
| displacement s | angular displacement θ |
| velocity v | angular velocity ω |
| acceleration a | angular acceleration α |
| mass m | moment of inertia I |
| force F | torque T |
| F = ma | T = Iα |
| momentum mv | angular momentum Iω |
| Ek = ½mv² | Ek(rot) = ½Iω² |
| W = Fs | W = Tθ |
| P = Fv | P = Tω |

If you forget a rotational equation, write the translational one and swap each symbol. The one thing that does not carry over is the role of distance: I depends on where the mass is, but mass m does not.

## Common errors

- Using revolutions per minute, or degrees, in a formula. Convert to rad s⁻¹ and radians first.
- Measuring r to the wrong place. In I = mr² the distance is to the axis, not to the centre of the object.
- Using the applied torque in T = Iα when an opposing torque also acts. Use the resultant.
- Using a value of I for the wrong axis, for example the centre value when the object turns about its end.
- Assuming kinetic energy is conserved because angular momentum is.
- Leaving out the sign on α when the body slows down.

## Next steps

Test yourself with the [practice questions](/resources/oxfordaqa-a-level-physics-rotational-motion-moment-of-inertia-torque-and-angular-practice/), and condense the topic with the [revision notes](/resources/oxfordaqa-a-level-physics-rotational-motion-moment-of-inertia-torque-and-angular-revision-notes/).

## Frequently asked questions

**What is the difference between angular speed and angular velocity?**
Angular speed, ω = Δθ/Δt in rad s⁻¹, has size only. Angular velocity also has a direction, the sense of rotation, so in a single-axis problem one sense is positive and the other negative.

**What are the equations for uniform angular acceleration?**
They match the SUVAT equations: ω = ω₀ + αt, θ = (ω₀ + ω)t/2, θ = ω₀t + ½αt² and ω² = ω₀² + 2αθ. Each leaves out one quantity, so pick the one that omits the quantity you do not have.

**What unit is angular displacement measured in?**
Angular displacement is measured in radians, and one revolution is 2π rad. Convert degrees and revolutions per minute to radians and rad s⁻¹ before using any rotational formula.

**Which section of the OxfordAQA 9630 specification does this guide cover?**
It covers section 3.13.1 (rotational motion) of OxfordAQA International AS and A-level Physics (9630), Version 4.4, which is International A-level only.

## Official syllabus

Published by OxfordAQA: International AS and A-level Physics (9630), specification Version 4.4, which applies to exams from May/June 2020. Source for this page: section 3.13.1, Rotational motion.
