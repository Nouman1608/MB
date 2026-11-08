---
title: "Cambridge International AS & A Level Mathematics 9709: Mechanics -- Revision Notes"
seoTitle: "Cambridge 9709 Mechanics Revision Notes (Paper 4)"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Mechanics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 4
syllabusTopics:
  - qualification: "a-level"
    topic: "mechanics-cambridge-alevel-maths"
  - qualification: "a-level"
    topic: "mechanics-cambridge-alevel-maths"
    subtopic: "forces-and-equilibrium-cambridge-alevel-maths"
  - qualification: "a-level"
    topic: "mechanics-cambridge-alevel-maths"
    subtopic: "kinematics-of-motion-in-a-straight-line-cambridge"
  - qualification: "a-level"
    topic: "mechanics-cambridge-alevel-maths"
    subtopic: "momentum-cambridge-alevel-maths"
  - qualification: "a-level"
    topic: "mechanics-cambridge-alevel-maths"
    subtopic: "newtons-laws-of-motion-cambridge-alevel-maths"
  - qualification: "a-level"
    topic: "mechanics-cambridge-alevel-maths"
    subtopic: "energy-work-and-power-cambridge-alevel-maths"
description: "Condensed revision notes for Cambridge 9709 Mechanics (Paper 4): formulae, method steps, key distinctions and a 12-question self-test with answers."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

These notes condense **Mechanics**, topic 4 of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4), sections 4.1 to 4.5. The content is examined only on **Paper 4** (1 hour 15 minutes, 50 marks), which counts towards both the AS Level and the A Level. For full explanations and worked examples, read the [Mechanics study guide](/resources/a-level-maths-9709-mechanics/) first.

Practise with the [Mechanics practice questions](/resources/a-level-mathematics-mechanics-practice/). Course hub: [Cambridge A Level Mathematics](/boards/cambridge/a-level/mathematics/). Checklist: [9709 printable checklist](/checklists/cambridge/a-level/mathematics/). Quick checks: [AS diagnostic](/practice/9709/diagnostic/as/) and [A Level diagnostic](/practice/9709/diagnostic/a-level/).

Use g = 10 m s⁻² throughout, as the syllabus expects.

## Formula table

| Quantity | Formula | In MF19? |
|---|---|---|
| Constant acceleration | v = u + at, s = ½(u + v)t, s = ut + ½at², v² = u² + 2as | Yes |
| Weight | W = mg | No |
| Friction | F ≤ μR; F = μR when limiting or sliding | No |
| Newton's second law | resultant force = ma | No |
| Momentum | mv | No |
| Work done by a constant force | Fd cos θ | No |
| Kinetic energy | ½mv² | No |
| Gravitational potential energy | mgh | No |
| Power | work done ÷ time; P = Fv | No |
| Calculus in t | v = ds/dt, a = dv/dt; s = ∫v dt, v = ∫a dt | No |

## 4.1 Forces and equilibrium

- Resolve along and perpendicular to a convenient direction (on a slope: along and perpendicular to the plane).
- Weight components on a plane at angle α: mg sin α down the slope, mg cos α into the slope.
- Equilibrium: the sum of components in every direction is zero.
- Smooth contact: no friction. This is a model, not reality.
- "About to slip" means limiting equilibrium, so F = μR.
- Newton's third law: forces between two bodies are equal in size and opposite in direction.

**Method: equilibrium with friction**
1. Draw the diagram with every force labelled.
2. Decide which way the particle would move, and draw friction opposite to it.
3. Resolve perpendicular to the surface to find R.
4. Resolve along the surface.
5. Use F = μR only if the particle is limiting or moving; otherwise F ≤ μR.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--02-amth-forces-two-strings.webp" width="900" height="960" alt="A 5 kg particle hangs on two strings at 30 and 45 degrees to the horizontal. Solving the horizontal and vertical balances gives T1 = 35.9 N and T2 = 43.9 N. Drawn head to tail, W, T1 and T2 form a closed triangle, so the resultant is zero." loading="lazy">
  <figcaption>In equilibrium the forces sum to zero in every direction, so they close into a triangle.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--06-amth-forces-rope-angle.webp" width="900" height="970" alt="A 12 kg box on rough ground (μ = 0.4) on the point of sliding. Pulled by a rope at 25 degrees above horizontal, T = 43.7 N and R = 99.1 N, less than the weight 117.6 N. Pushed at 25 degrees below horizontal, P = 63.8 N and R = 144.6 N, more than the weight. Dashed lines show components." loading="lazy">
  <figcaption>A pull at an angle lowers R and so the friction limit; a push at an angle raises it.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--07-amth-forces-slope.webp" width="900" height="920" alt="A 4 kg block on a 30 degree rough slope with μ = 0.25. Weight 39.2 N splits into mg sin 30 = 19.6 N down the slope and mg cos 30 = 33.9 N into it, so R = 33.9 N and F = 8.49 N up the slope. 19.6 − 8.49 = 4a gives a = 2.78 m per second squared down the slope." loading="lazy">
  <figcaption>Resolve the weight along and across the slope: R = mg cos θ and the net force down the slope is mg sin θ − μR.</figcaption>
</figure>


## 4.2 Kinematics

- Distance and speed are scalars; displacement, velocity and acceleration are vectors.
- s–t graph: gradient = velocity. v–t graph: gradient = acceleration; area = displacement.
- Constant a → MF19 formulae. Variable a (a function of t) → calculus.
- Maximum or minimum velocity: set a = dv/dt = 0.
- At rest (instantaneously): set v = 0.

**Worked reminder: two particles.** P starts from rest at O with acceleration 2 m s⁻². At the same moment, Q passes O at a constant 12 m s⁻¹ in the same direction. P catches Q when t² = 12t, so t = 12 s, 144 m from O.

## 4.3 Momentum

- Total momentum before = total momentum after (direct impact, one dimension).
- Coalesce: the bodies join and move with one common velocity.
- Choose a positive direction first; velocities the other way are negative.
- A negative answer for a velocity means the body moves in the negative direction.
- Kinetic energy is usually lost in an impact, even though momentum is conserved.

**Worked reminder: a rebound.** A 0.4 kg ball moving at 5 m s⁻¹ hits a stationary 0.6 kg ball and rebounds at 1 m s⁻¹. Taking the ball's first direction as positive: 0.4 × 5 = 0.4 × (−1) + 0.6v, so 2 = −0.4 + 0.6v and v = 4 m s⁻¹. The rebound velocity is entered as −1, not +1.

## 4.4 Newton's laws

**Method: connected particles**
1. Draw a separate diagram for each particle.
2. Write resultant force = ma for each particle in its own direction of motion.
3. Use the fact that the string (or tow-bar) gives both the same acceleration.
4. Add the equations to eliminate the tension, or use the whole system.
5. Find the tension from one particle's equation.

**Worked reminder: particles over a pulley.** Particles of masses 3 kg and 2 kg hang on either side of a smooth pulley. System: 30 − 20 = 5a, so a = 2 m s⁻². For the 2 kg particle: T − 20 = 2 × 2, so T = 24 N. Check with the 3 kg particle: 30 − T = 3 × 2 gives T = 24 N.

- Smooth plane at α: a = g sin α down the plane (5 m s⁻² at 30°).
- Rough plane: acceleration going up is not the same as coming down, because friction reverses.
- A string once taut then slack: after it goes slack, each particle moves under its own forces only.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--01-amth-forces-lift.webp" width="900" height="1010" alt="Free-body diagrams of a 65 kg person in a lift with g = 9.8. At rest R = 637 N; accelerating up at 0.8 m per second squared R = 689 N; accelerating down R = 585 N. Arrow lengths are proportional to the forces. A strip below shows the third-law pair: the floor pushes the person up with R and the person pushes the floor down with R, on different bodies." loading="lazy">
  <figcaption>The reaction R is larger than the weight when the lift accelerates upwards and smaller when it accelerates downwards; third-law pairs act on different bodies.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--03-amth-forces-pulley.webp" width="900" height="1210" alt="(Top) A 3 kg particle on a smooth table joined over a smooth pulley to a 2 kg hanging particle: T = 3a and 2g − T = 2a give a = 3.92 m per second squared, T = 11.8 N. (Bottom) 7 kg and 4 kg hanging masses: a = 3g/11 = 2.67 m per second squared, T = 49.9 N. Tension is the same on both sides." loading="lazy">
  <figcaption>Write one F = ma equation per particle; tension is the same each side of a smooth pulley.</figcaption>
</figure>


## 4.5 Energy, work and power

**Method: work–energy**
1. Choose the start and end positions.
2. Write the KE and PE at each.
3. Find the work done against resistance (resistance × distance) and by any driving force.
4. Initial energy + work by driving forces = final energy + work against resistances.

**Method: power and acceleration**
1. Driving force D = P/v, with v the speed at that instant.
2. Resultant force = D − resistance (− mg sin θ on a hill going up).
3. Resultant force = ma. At maximum (steady) speed, a = 0.

**Worked reminder: average power.** Raising 50 kg through 6 m at constant speed in 4 s needs 50 × 10 × 6 = 3000 J of work, so the average power is 750 W.

## Must-know distinctions

- **Mass vs weight**: mass in kg; weight mg in newtons.
- **Distance vs displacement**: distance adds all motion; displacement is the net change in position.
- **Speed vs velocity**: velocity has a sign; speed does not.
- **Tension vs thrust**: a string can only pull; a rod or tow-bar can pull (tension) or push (thrust).
- **Limiting vs not limiting**: F = μR only at the point of slipping or while sliding.
- **Momentum vs kinetic energy**: momentum is conserved in impacts; kinetic energy is generally not.
- **Driving force vs resultant force**: P = Fv uses the driving force, not the resultant.

## Quick self-test

1. Find the magnitude of the resultant of forces 6 N and 8 N at right angles, and its angle with the 6 N force.
2. A 5 kg box is on rough horizontal ground with μ = 0.4. Find the least horizontal force that makes it move.
3. A particle starts from rest with acceleration 3 m s⁻². Find its speed and distance after 4 s.
4. A stone is dropped from rest and falls 45 m. Find the time taken and its final speed.
5. A car accelerates uniformly from rest to 10 m s⁻¹ in 5 s, stays at 10 m s⁻¹ for 10 s, then decelerates uniformly to rest in 5 s. Find the total distance.
6. A particle has velocity v = 3t² − 12t m s⁻¹. When, for t > 0, is it instantaneously at rest?
7. A 2 kg particle moving at 6 m s⁻¹ hits a stationary 4 kg particle and they coalesce. Find their common speed.
8. A 60 kg person stands in a lift accelerating upwards at 1.5 m s⁻². Find the normal contact force from the floor.
9. Find the work done by a 20 N force at 60° to the direction of motion over 5 m.
10. A car moves at a steady 30 m s⁻¹ on a level road with its engine working at 24 kW. Find the resistance.
11. Find the gain in potential energy when a 3 kg mass is raised 4 m.
12. A car of mass 800 kg works at 16 kW against a resistance of 400 N on level ground. Find its acceleration at 10 m s⁻¹.

### Answers

1. √(6² + 8²) = **10 N**; tan θ = 8/6, **θ = 53.1°**.
2. R = 50 N, so the force is 0.4 × 50 = **20 N**.
3. v = 3 × 4 = **12 m s⁻¹**; s = ½ × 3 × 16 = **24 m**.
4. 45 = 5t², **t = 3 s**; v = 10 × 3 = **30 m s⁻¹**.
5. Area = 25 + 100 + 25 = **150 m**.
6. 3t(t − 4) = 0, so **t = 4 s**.
7. 2 × 6 = 6v, **v = 2 m s⁻¹**.
8. R − 600 = 60 × 1.5, **R = 690 N**.
9. 20 cos 60° × 5 = **50 J**.
10. Steady speed so D = resistance: 24 000/30 = **800 N**.
11. 3 × 10 × 4 = **120 J**.
12. D = 16 000/10 = 1600 N; 1600 − 400 = 800a, **a = 1.5 m s⁻²**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--04-amth-forces-tow.webp" width="900" height="1010" alt="Whole system of 2000 kg: 3300 − 800 = 2000a gives a = 1.25 m per second squared. Trailer alone: T − 300 = 800 × 1.25 gives T = 1300 N. With a rigid bar and braking, the system slows at 1.15 m per second squared and the bar pushes back on the trailer with 620 N thrust (Cambridge 9709, OxfordAQA)." loading="lazy">
  <figcaption>Treat the whole system first, then one part to find the tow-bar force; a rigid bar can push (thrust).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--05-amth-forces-friction-model.webp" width="900" height="940" alt="Graph of friction against push for a 5 kg box with μ = 0.4 (R = 49 N, maximum friction 19.6 N). F equals P until P = 19.6 N, then stays at 19.6 N when the box slides. P = 15 N gives F = 15 N, not 19.6 N. Three mini diagrams show at rest, limiting and sliding (a = 1.08 m per second squared)." loading="lazy">
  <figcaption>Friction matches the push up to a maximum μR; only when on the point of moving or sliding is F = μR.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--09-amth-forces-conical.webp" width="900" height="940" alt="A 0.4 kg bob on a 1.2 m string moves in a horizontal circle at 5 rad per second. T = mLω² = 12 N, cos θ = g/(Lω²) = 0.327 so θ = 70.9 degrees, r = 1.13 m, v = 5.67 m per second. Tension plus weight give a horizontal resultant 11.3 N to the centre; from above, v is tangent and a = 28.3 m per second squared points to the centre." loading="lazy">
  <figcaption>The resultant of tension and weight points to the centre of the circle and equals mrω².</figcaption>
</figure>


## Where marks are usually lost

- Leaving out a force from the diagram, most often friction or the normal contact force on a slope.
- Taking R = mg on a slope or when a pulling force has a vertical component.
- Drawing friction the wrong way; it opposes the motion that would happen.
- Using constant-acceleration formulae when acceleration varies with time.
- Confusing distance with displacement when a particle changes direction.
- Not choosing a positive direction before a momentum calculation.
- Missing the weight component mg sin θ when a car climbs a hill.
- Using P = Fv with the resultant force instead of the driving force.
- Rounding intermediate values to 2 or 3 significant figures, so the final answer is inaccurate.

## Frequently asked questions

**Which mechanics formulae are given in the Cambridge 9709 formula list (MF19)?**
Only the constant acceleration formulae (v = u + at, s = ½(u + v)t, s = ut + ½at² and v² = u² + 2as) are in MF19. Formulae such as W = mg, F = μR, P = Fv, kinetic energy and potential energy must be learned.

**When can you use F = μR?**
Only when the particle is in limiting equilibrium (about to slip) or already sliding. Otherwise friction satisfies F ≤ μR and its value comes from resolving forces.

**How do you solve a connected particles problem?**
Draw a separate diagram for each particle, write resultant force = ma for each in its own direction of motion, and use the same acceleration for both. Add the equations to eliminate the tension, then find the tension from one equation.

**How do you find the acceleration of a car working at a given power?**
Find the driving force with D = P/v at that speed, subtract the resistance (and mg sin θ on a hill), then set the resultant force equal to ma. At maximum steady speed, a = 0.

**Is kinetic energy conserved in a collision?**
Not in general. Momentum is conserved in a direct impact, but kinetic energy is usually lost.

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027, Version 4, Cambridge Assessment International Education (part of Cambridge University Press & Assessment). Topic 4, Mechanics (for Paper 4).
