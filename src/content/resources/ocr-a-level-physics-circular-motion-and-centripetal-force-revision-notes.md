---
title: "OCR A Level Physics A: Circular motion and centripetal force (H556) -- Revision Notes"
seoTitle: "OCR A Level Physics Circular Motion Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Circular motion and centripetal force"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 58
syllabusTopics:
  - qualification: "a-level"
    topic: "newtonian-world-and-astrophysics"
    subtopic: "circular-motion-ocr-alevel"
description: "Condensed formulae, methods, distinctions and a self-test on circular motion and the whirling bung for OCR A Level Physics A (H556) section 5.2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

Condensed recall for section 5.2 (Circular motion) of the H556 Physics A specification from OCR (Version 3.0, March 2026), covering 5.2.1 Kinematics of circular motion and 5.2.2 Centripetal force. For full explanations and worked derivations use the [study guide](/resources/ocr-a-level-physics-circular-motion-and-centripetal-force/). Next, attempt the [practice questions](/resources/ocr-a-level-physics-circular-motion-and-centripetal-force-practice/). Also useful: the subject [hub](/boards/ocr/a-level/physics/), the [checklist to print](/checklists/ocr/a-level/physics/) and the [free 10-minute diagnostics](/diagnostics/).

## Definitions and key equations

| Reference | Quantity or idea | Equation or statement |
|---|---|---|
| 5.2.1(a) | Radian | angle at the centre that cuts off an arc as long as the radius; θ = s/r |
| 5.2.1(a) | Full turn | 2π rad = 360°, so 1 rad = 57.3° |
| 5.2.1(b) | Period T | time for one revolution, in s |
| 5.2.1(b) | Frequency f | revolutions per second, in Hz; f = 1/T |
| 5.2.1(c) | Angular velocity ω | ω = Δθ/Δt = 2π/T = 2πf, in rad s⁻¹ |
| 5.2.2(a) | Cause of circular path | a constant net force perpendicular to the velocity |
| 5.2.2(b) | Speed in a circle | v = ωr = 2πr/T |
| 5.2.2(c) | Centripetal acceleration | a = v²/r = ω²r, towards the centre |
| 5.2.2(d)(i) | Centripetal force | F = mv²/r = mω²r = 4π²mr/T² |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--06-shm-graphs.webp" width="900" height="1110" alt="Three stacked graphs over one period for amplitude 0.050 m and omega 4.0 per second: x is a cosine, v a negative sine with maximum 0.20 m/s a quarter cycle ahead of x, and a a negative cosine with maximum 0.80 m/s^2 in antiphase with x. Dotted lines mark quarter periods." loading="lazy">
  <figcaption>v leads x by a quarter cycle and a is in antiphase with x.</figcaption>
</figure>


## Radians and conversions

- Going from degrees to radians, multiply by π/180; going back, multiply by 180/π.
- Arc length s = rθ only works when θ is in radians.
- Being arc length divided by radius, a radian has no dimensions.

| Angle | 90° | 180° | 270° | 360° |
|---|---|---|---|---|
| In radians | π/2 | π | 3π/2 | 2π |

## Method: solving a circular motion problem

1. Convert everything to SI units: seconds, metres, kilograms, and hertz or rad s⁻¹ rather than revolutions per minute.
2. List what you are given: any two of r, v, ω, T, f, m, a, F.
3. Find ω from T or f if you need it: ω = 2π/T = 2πf.
4. Find v = ωr, or choose the acceleration form that matches your data.
5. Use F = ma with the acceleration towards the centre.
6. Identify the real force that supplies it: tension, friction, normal contact, gravity or a magnetic force.
7. Check units and give the answer to a suitable number of significant figures.

**Worked reminder.** A mass of 0.90 kg is swung at a steady 2.0 revolutions per second on a rope of radius 0.35 m.

ω = 2πf = 2π × 2.0 = 12.57 rad s⁻¹
v = ωr = 12.57 × 0.35 = 4.4 m s⁻¹
a = ω²r = 12.57² × 0.35 = 55.3 m s⁻²
F = ma = 0.90 × 55.3 = 50 N (two significant figures)

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--05-shm-restoring-force.webp" width="900" height="1000" alt="A 0.40 kg mass on a 25 N/m spring at x = -0.050 m, 0 and +0.050 m with restoring force arrows to scale (1.25 N towards equilibrium, zero at equilibrium). An acceleration-displacement graph is a straight line through the origin with gradient -omega squared = -62.5 per second squared, so omega squared = k/m and T = 0.795 s." loading="lazy">
  <figcaption>The restoring force and acceleration are proportional to displacement and opposite to it.</figcaption>
</figure>


## Why there must be a net force

- Velocity has a direction, so turning counts as changing velocity: the object accelerates even at constant speed.
- The net force and the acceleration both point to the centre of the circle.
- The force is perpendicular to the velocity, so it changes the direction but not the speed, and does no work. The kinetic energy stays constant.
- If the force stops acting, the object moves in a straight line along the tangent at constant speed.
- Centripetal force is the name for the net force towards the centre. It is supplied by a real force. Do not draw it as an extra arrow beside the real force on a free-body diagram.

| Situation | Real force providing the centripetal force |
|---|---|
| Bung on a string | tension |
| Coin on a turntable | friction |
| Rider against the wall of a spinning drum | normal contact force |
| Charged particle in a magnetic field | magnetic force |
| Planet in orbit | gravity |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--02-centripetal-acceleration.webp" width="900" height="710" alt="Balls on a circle have tangent velocity arrows of equal length and acceleration arrows pointing to the centre, at right angles to the velocity. A vector triangle shows v1 and v2 and their difference delta v pointing towards the centre. A dashed line shows a ball moving straight on if the force is removed." loading="lazy">
  <figcaption>Speed is constant but the velocity turns, so the change in velocity and the acceleration point towards the centre.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--03-centripetal-force-sources.webp" width="900" height="1090" alt="Four top-view pictures: a bung on a string (tension), a coin on a turntable (friction), a rider in a spinning drum (push of the wall) and a satellite (gravity). In each the real force points to the centre and the velocity is tangent. The resultant is mv^2/r = m omega^2 r." loading="lazy">
  <figcaption>Centripetal force is not an extra force: it is the real force or resultant pointing to the centre.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--07-shm-energy.webp" width="900" height="1080" alt="For a 0.250 kg oscillator with A 0.080 m and f 1.8 Hz the total energy is 0.102 J. Against displacement, Ep is an upright parabola and Ek an inverted parabola under a flat total line, crossing at plus and minus A over root 2. Against time each energy completes two cycles per oscillation and they are in antiphase." loading="lazy">
  <figcaption>Energy swaps between kinetic and potential, with the total constant when there is no damping.</figcaption>
</figure>


## Model explanations

- **Why does a net force act?** The velocity changes direction, so the object accelerates. By F = ma there must be a net force, in the direction of the acceleration, which is towards the centre.
- **Why does the speed stay constant?** The force is perpendicular to the velocity, so it has no component along the motion. It does no work and cannot change the kinetic energy.
- **What happens if the string breaks?** No net force acts, so Newton's first law says the object keeps going in a straight line, at constant velocity, on the tangent where it was released.

## Proportionality rules

For F = mv²/r:

- Double the speed, same r and m: force is four times as large.
- Double the radius, same v and m: force is halved.
- Double the mass, same v and r: force is doubled.

For F = mω²r:

- Double ω, same r and m: force is four times as large.
- Double the radius, same ω and m: force is doubled.

Notice that radius appears in the denominator in the first form but in the numerator in the second. Choose the form that matches what is held constant.

## Whirling bung investigation (5.2.2(d)(ii))

| Aspect | Notes |
|---|---|
| Set-up | bung on a string through a smooth tube; weight holder with masses below; tape marker sets the radius |
| Centripetal force | the weight Mg of the hanging masses, because the tension in the string equals it for steady motion |
| Independent variable | hanging mass (force), radius or bung mass, one at a time |
| Dependent variable | period T from the time for 20 revolutions divided by 20 |
| Controls | keep the other two of F, r and m constant |
| Graph for F | F against f² (or 1/T²): straight line through the origin, gradient 4π²mr |
| Graph for r | T² against r: straight line through the origin, gradient 4π²m/F |
| Reducing uncertainty | time many revolutions, repeat and average, keep the marker at a constant position |
| Systematic effect | the string cannot be exactly horizontal, and friction at the tube changes the tension slightly |
| Safety | eye protection, firm knot, clear space around the circle, tray under the masses |

## Must-know distinctions

- **Frequency or angular velocity.** f counts turns per second; ω counts radians per second. ω = 2πf.
- **Speed or angular velocity.** v is distance per second along the circle; ω is angle per second. They are related by v = ωr.
- **Constant speed or constant velocity.** The speed is constant; the velocity is not, because its direction changes.
- **Centripetal or centrifugal.** Centripetal means towards the centre and describes the net force on the object. There is no outward force acting on the object itself.
- **Period or time for several turns.** Divide the total time by the number of revolutions.

## Quick self-test

1. Define the radian.
2. Convert 2.5 rad to degrees.
3. Convert 72° to radians, as a multiple of π.
4. A wheel has a period of 0.80 s. Find its frequency and angular velocity.
5. A point 0.30 m from the axis of a disc rotates with ω = 6.0 rad s⁻¹. Find its speed.
6. A particle moves at 12 m s⁻¹ in a circle of radius 0.50 m. Find its centripetal acceleration.
7. A mass of 0.50 kg moves with ω = 8.0 rad s⁻¹ at a radius of 0.25 m. Find the centripetal force.
8. By what factor does the force change if the speed is tripled at constant radius and mass?
9. Explain why a body moving round a circle at constant speed is accelerating.
10. A whirling bung of mass 0.040 kg is used at a radius of 0.50 m. What is the expected gradient of a graph of F against f², with units?
11. A mass of 0.15 kg moves in a circle of radius 0.40 m with period 0.50 s. Find the force needed.

### Answers

1. The angle at the centre of a circle that cuts off an arc whose length is the same as the radius.
2. 2.5 × 180/π = 143° (143.2°).
3. 72 × π/180 = 2π/5 rad (1.26 rad).
4. f = 1/0.80 = 1.25 Hz; ω = 2π/0.80 = 7.9 rad s⁻¹ (7.85).
5. v = ωr = 6.0 × 0.30 = 1.8 m s⁻¹.
6. a = v²/r = 144/0.50 = 288 m s⁻² (2.9 × 10² m s⁻²).
7. F = mω²r = 0.50 × 64 × 0.25 = 8.0 N.
8. 3² = 9, so the force is nine times as large.
9. Its direction of travel keeps changing, so its velocity keeps changing even though the speed does not. That rate of change is an acceleration, directed towards the centre.
10. Gradient = 4π²mr = 4π² × 0.040 × 0.50 = 0.79 N s² (equivalently kg m).
11. F = 4π²mr/T² = 4π² × 0.15 × 0.40/0.50² = 9.5 N.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--01-radian-omega-v.webp" width="900" height="1160" alt="A circle with a 1 radian sector: the arc along the edge is as long as the radius and the angle is about 57.3 degrees, with quarter, half and three-quarter turns marked as pi/2, pi, 3pi/2 and 2pi. Below, a turntable at 45 rpm has omega 4.71 rad/s everywhere; a point at 0.10 m moves at 0.47 m/s and a point at 0.20 m at 0.94 m/s, so v = omega r." loading="lazy">
  <figcaption>One radian is the angle whose arc equals the radius, and at the same ω a point further out moves faster.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--04-vertical-circle.webp" width="900" height="810" alt="A 0.50 kg ball on a 0.80 m string. At the top (4.0 m/s) tension 5.1 N and weight 4.9 N both point down; at the bottom (6.9 m/s) tension 34.5 N points up and weight 4.9 N down, arrows to scale. The bottom tension exceeds the top by 6mg = 29.4 N, and the minimum speed at the top (T = 0) is sqrt(gr) = 2.8 m/s." loading="lazy">
  <figcaption>Tension is least at the top and greatest at the bottom, differing by 6mg for a freely moving ball.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--09-moment-of-inertia.webp" width="900" height="1050" alt="Three beads of 0.20, 0.50 and 0.10 kg at 0.10, 0.30 and 0.60 m from an axis contribute mr^2 of 0.0020, 0.045 and 0.036 kg m^2, giving I = 0.083 kg m^2 and a kinetic energy of 1.5 J at 6.0 rad/s. A 3.0 kg 1.2 m rod has I = 0.36 kg m^2 about its centre and 1.44 kg m^2 about an end." loading="lazy">
  <figcaption>I = Σmr² grows with the square of each mass’s distance from the axis, so the same object is harder to spin about its end.</figcaption>
</figure>


## Where marks are usually lost

- Using degrees for s = rθ, or forgetting to convert revolutions per minute.
- Writing "centripetal force" as a separate force on a diagram.
- Saying the object has no acceleration because the speed is constant.
- Using the diameter as the radius.
- Forgetting to square, or to take the square root, when rearranging v² or ω².
- Saying that a broken string sends the object radially outwards. The motion is along the tangent at constant speed.
- Not stating that the hanging weight equals the tension, which is why it gives the centripetal force in the bung investigation.
- Timing one revolution only, instead of many revolutions, in the investigation.
- Missing the units of a gradient, which are N s² for F against f².

## Frequently asked questions

**How do you convert revolutions per minute to angular velocity?**
Divide revolutions per minute by 60 to get the frequency in hertz, then use ω = 2πf to get the angular velocity in rad s⁻¹.

**What happens to centripetal force if the speed doubles?**
For a fixed mass and radius, F = mv²/r, so the force is proportional to v². Doubling the speed needs four times the centripetal force, not twice.

**Does centripetal force do work on an object moving in a circle?**
No. The force is perpendicular to the velocity at every instant, so it does no work and the kinetic energy and speed stay constant; it only changes the direction of the velocity.

**What does section 5.2 of OCR A Level Physics A cover?**
Section 5.2 of OCR H556 covers the radian, period, frequency and angular velocity (5.2.1) and centripetal acceleration, centripetal force and the whirling bung investigation (5.2.2).

## Official syllabus

Source: the OCR *Physics A (H556)* specification, Version 3.0 (March 2026), first assessment 2017. Section 5.2 Circular motion; outcomes 5.2.1(a)-(c) and 5.2.2(a)-(d).
