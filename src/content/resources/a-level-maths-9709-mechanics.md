---
title: "Cambridge International AS & A Level Mathematics 9709: Mechanics -- Study Guide"
seoTitle: "Cambridge 9709 Mechanics Study Guide (Paper 4)"
resourceType: "study-guides"
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
description: "Study guide to Cambridge 9709 Mechanics (Paper 4): forces, kinematics, momentum, Newton's laws, and energy, work and power, with worked examples."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

This guide teaches **Mechanics**, topic 4 of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). It covers syllabus sections 4.1 to 4.5. The topic is examined only on **Paper 4**: 1 hour 15 minutes, 50 marks, 6 to 8 structured questions. Paper 4 is worth 40% of the AS Level on the Paper 1 and Paper 4 route, and 20% of the A Level on the Papers 1, 3, 4 and 5 route. It cannot be combined with Paper 6. The syllabus assumes the algebra from Paper 1.

Course hub: [Cambridge A Level Mathematics](/boards/cambridge/a-level/mathematics/). Printable list: [9709 checklist](/checklists/cambridge/a-level/mathematics/). Both 10-minute diagnostics include a Mechanics question: the [AS diagnostic](/practice/9709/diagnostic/as/) and the [A Level diagnostic](/practice/9709/diagnostic/a-level/).

## What this topic covers

| Section | What you must be able to do |
|---|---|
| 4.1 Forces and equilibrium | Draw force diagrams; resolve forces; use equilibrium; use friction, F = μR or F ≤ μR; use Newton's third law |
| 4.2 Kinematics of motion in a straight line | Use displacement–time and velocity–time graphs; use calculus in t; use the constant-acceleration formulae |
| 4.3 Momentum | Use momentum = mv in one dimension; conserve momentum in direct impacts, including coalescence |
| 4.4 Newton's laws of motion | Use F = ma for a particle and for connected particles; use W = mg; solve vertical and inclined-plane problems |
| 4.5 Energy, work and power | Work done W = Fd cos θ; kinetic and potential energy; the work–energy principle; power P = Fv |

**Paper conventions from the syllabus.** Take g = 10 m s⁻². Questions are mainly numerical. Bodies are modelled as particles, so every force acts at one point. Vector notation is not used in the question papers. You need these trig facts: sin(90° − θ) = cos θ, cos(90° − θ) = sin θ, tan θ = sin θ/cos θ and sin²θ + cos²θ = 1. Give non-exact answers to 3 significant figures, or 1 decimal place for angles in degrees.

## 4.1 Forces and equilibrium

Start every problem with a clear force diagram: weight, normal contact force, friction, tension or thrust, and any applied force. A force P at angle θ to a direction has component P cos θ along that direction and P sin θ perpendicular to it.

A particle is in **equilibrium** when the resultant force is zero. In practice, resolve in two perpendicular directions and set each sum to zero. You must calculate; scale drawings earn nothing.

*Worked example (two strings).* A particle of weight 20 N hangs from two light strings. One string makes 30° with the horizontal and has tension A. The other makes 60° with the horizontal and has tension B. Find A and B.

```
Horizontal:  A cos 30° = B cos 60°   →   B = A√3
Vertical:    A sin 30° + B sin 60° = 20
             ½A + (A√3)(√3/2) = 20   →   2A = 20
A = 10 N,  B = 10√3 = 17.3 N
```

**Friction.** A contact force between two surfaces has a normal component R and a frictional component F. On a smooth contact, F = 0; this model ignores all friction, so it is only an approximation. On a rough contact, F ≤ μR. When the particle is in **limiting equilibrium** (also described as "about to slip"), F = μR. Friction acts against the direction the particle would move.

*Worked example (limiting equilibrium).* A box of mass 4 kg rests on rough horizontal ground, μ = 0.35. A rope pulls it with tension T at 20° above the horizontal. The box is about to move. Find T.

```
Vertical:    R + T sin 20° = 40        →   R = 40 − T sin 20°
Horizontal:  T cos 20° = F = 0.35R
T cos 20° = 0.35(40 − T sin 20°)
T (cos 20° + 0.35 sin 20°) = 14      →   T = 13.2 N
```

The upward component of T reduces R, so the friction limit is less than 0.35 × 40 = 14 N.

**Newton's third law.** If body A exerts a force on B, then B exerts an equal and opposite force on A. The ground pushes up on a particle with R, and the particle pushes down on the ground with R.

## 4.2 Kinematics of motion in a straight line

Distance and speed are scalars. Displacement, velocity and acceleration are vectors; in one dimension their sign shows direction. "Deceleration" can mean the speed is decreasing.

**Graphs.**

- Gradient of a displacement–time graph = velocity.
- Gradient of a velocity–time graph = acceleration.
- Area under a velocity–time graph = displacement. Area below the axis counts as negative displacement, but it still adds to the distance travelled.

**Calculus.** v = ds/dt and a = dv/dt. Going the other way, s = ∫v dt and v = ∫a dt, with a constant found from the starting conditions. Only Paper 1 calculus is needed.

*Worked example.* A particle starts from rest at O. Its acceleration is a = 8 − 4t m s⁻². Find when it is next at rest, and its displacement from O then.

```
v = ∫(8 − 4t) dt = 8t − 2t² + c;  v = 0 at t = 0, so c = 0
v = 0:  2t(4 − t) = 0   →   t = 4 s
s = ∫(8t − 2t²) dt = 4t² − (2/3)t³   (s = 0 at t = 0)
s(4) = 64 − 128/3 = 64/3 = 21.3 m
```

**Constant acceleration.** The formulae v = u + at, s = ½(u + v)t, s = ut + ½at² and v² = u² + 2as are in the formula list (MF19). Use them only when a is constant. Choose one positive direction and keep to it.

*Worked example (vertical motion).* A ball is thrown vertically upwards at 15 m s⁻¹ from a point 20 m above the ground. Find the time it takes to reach the ground.

Take upwards as positive: s = −20, u = 15, a = −10. Then −20 = 15t − 5t², so t² − 3t − 4 = 0 and (t − 4)(t + 1) = 0. The ball lands after **4 s**; reject t = −1.

## 4.3 Momentum

Momentum = mv. It is a vector, so in one dimension its sign gives its direction. In a direct impact between two bodies, total momentum before = total momentum after. If the bodies coalesce, they move on together with one common velocity. Impulse and the coefficient of restitution are not in this syllabus.

*Worked example.* A (3 kg) moves at 5 m s⁻¹ towards B (2 kg), which moves at 4 m s⁻¹ towards A. After the impact A moves at 1 m s⁻¹ in its original direction. Find B's velocity after impact.

Take A's original direction as positive: 3(5) + 2(−4) = 3(1) + 2v. So 7 = 3 + 2v and v = 2 m s⁻¹. B now moves at 2 m s⁻¹ in A's original direction: its direction has reversed.

Kinetic energy is not conserved in general. Here it falls from 53.5 J to 5.5 J.

## 4.4 Newton's laws of motion

Newton's second law for a particle of constant mass: resultant force = ma. Weight W = mg. Resistances such as air resistance are included only when the question says so.

**Rough inclined plane.** The acceleration up the plane differs from the acceleration down it, because friction reverses.

*Worked example.* A particle of mass 2 kg is projected at 8 m s⁻¹ up a line of greatest slope of a rough plane. The plane is inclined at α with sin α = 0.6 and cos α = 0.8, and μ = 0.25. Find the distance it travels up the plane and its speed when it returns to the start.

```
R = 2 × 10 × 0.8 = 16 N,   F = 0.25 × 16 = 4 N
Weight component down the plane = 2 × 10 × 0.6 = 12 N
Up:    −(12 + 4) = 2a   →   a = −8 m s⁻²
       0 = 8² − 2 × 8 × s   →   s = 4 m
Down:  12 − 4 = 2a   →   a = 4 m s⁻²
       v² = 0 + 2 × 4 × 4 = 32   →   v = 5.66 m s⁻¹
```

It does slide back, because 12 N down the plane is more than the maximum friction of 4 N.

**Connected particles.** Treat each particle separately, or the whole system when the internal force is not needed. A light inextensible string has the same tension throughout and gives both particles the same speed. A rigid tow-bar can be in tension or in thrust.

*Worked example (car and trailer).* A car of mass 1200 kg tows a trailer of mass 400 kg with a light rigid tow-bar. The driving force is 2400 N. Resistances are 300 N on the car and 100 N on the trailer.

Whole system: 2400 − 300 − 100 = 1600a, so a = 1.25 m s⁻². Trailer: T − 100 = 400 × 1.25, so the tension is T = 600 N.

If the engine is switched off and the car brakes with a force of 1800 N, the system decelerates at (1800 + 300 + 100)/1600 = 1.375 m s⁻². For the trailer, 100 + T = 400 × 1.375, so the tow-bar pushes back on the trailer with a thrust of 450 N.

## 4.5 Energy, work and power

- Work done by a constant force: W = Fd cos θ, where θ is the angle between the force and the displacement.
- Kinetic energy = ½mv². Gravitational potential energy = mgh.
- Work–energy principle: the change in total mechanical energy equals the work done by forces other than weight. With no friction or other resistance, mechanical energy is conserved.
- Power is the rate of doing work. Average power = work done ÷ time taken. For a force in the direction of motion, P = Fv.

*Worked example (curved slide).* A child moves down a smooth curved slide from a point 3.2 m above the bottom, starting at 2 m s⁻¹. Energy: ½v² = ½(2²) + 10 × 3.2, so v² = 68 and **v = 8.25 m s⁻¹**. The shape of the slide does not matter: only the overall height change counts.

*Worked example (car on a hill).* A car of mass 1000 kg has an engine working at 30 kW. It moves up a hill inclined at θ to the horizontal, where sin θ = 0.05, against a resistance of 600 N. Find its acceleration when its speed is 20 m s⁻¹.

```
Driving force = P/v = 30 000/20 = 1500 N
Weight component down the hill = 1000 × 10 × 0.05 = 500 N
1500 − 600 − 500 = 1000a   →   a = 0.4 m s⁻²
```

At maximum speed a = 0. On level ground with the same power and resistance, the maximum speed is 30 000/600 = 50 m s⁻¹.

## Common errors

- Using R = mg when a force at an angle also has a vertical component.
- Using F = μR when the particle is not in limiting equilibrium or moving.
- Using constant-acceleration formulae when a depends on t.
- Adding areas below the time axis as positive when displacement is asked for.
- Giving both momenta the same sign when the bodies move towards each other.
- Using the same acceleration for motion up and down a rough plane.
- Using the full force instead of F cos θ for work done.
- Using P = Fv with the resistance instead of the driving force.

## Next steps

Condensed notes and a self-test are in the [Mechanics revision notes](/resources/a-level-maths-9709-mechanics-revision-notes/). Then work through the [Mechanics practice questions](/resources/a-level-mathematics-mechanics-practice/), which use different numbers and situations from the examples here.

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027, Version 4, Cambridge Assessment International Education (part of Cambridge University Press & Assessment). Topic 4, Mechanics (for Paper 4).
