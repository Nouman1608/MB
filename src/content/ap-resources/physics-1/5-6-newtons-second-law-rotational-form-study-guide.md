---
resourceId: "mb-ap-phys1-5.6-study-guide"
title: "Newton's Second Law in Rotational Form: Study Guide (Physics 1 5.6)"
description: "How net torque changes angular velocity: α = τ_net / I, where it comes from, how α depends on torque and rotational inertia, and how to combine linear and rotational analyses for pulleys and drums."
course: "physics-1"
unit: 5
topics: ["5.6"]
resourceType: "study-guide"
prerequisites:
  - "Rotational equilibrium and the rotational first law (Topic 5.5)"
  - "Rotational inertia, I = Σmr², and given values for extended objects (Topic 5.4)"
  - "Linking a = rα for a rope that does not slip (Topic 5.2)"
  - "Newton's second law for linear motion, a = ΣF / m (Topic 2.5)"
prerequisiteResources: ["mb-ap-phys1-5.5-study-guide"]
learningObjectives:
  - "Use α = τ_net / I to find the angular acceleration of a rigid system, with its sense matching the net torque"
  - "Derive the rotational second law from F = ma for a point mass moving in a circle"
  - "Predict how α changes when the net torque or the rotational inertia changes"
  - "Draw force diagrams for a rotating object and a connected object, and solve them together using a = rα"
  - "Explain why linear and rotational analyses of the same object are carried out separately"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus is used anywhere in this course. Where gravity appears we use g = 9.8 m/s², the value on the course equation table. Rotational inertias of extended objects are given in each problem"
related: ["mb-ap-phys1-5.6-revision-notes", "mb-ap-phys1-5.6-practice", "mb-ap-phys1-5.6-checklist"]
next: "mb-ap-phys1-5.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Rotational second law: α = τ_net / I. The angular acceleration has the same sense (clockwise or counterclockwise) as the net torque."
  - "α is directly proportional to the net torque and inversely proportional to the rotational inertia."
  - "Any non-zero net torque changes the angular velocity. Zero net torque is the special case from Topic 5.5."
  - "Analyse the linear motion (ΣF = ma) and the rotation (Στ = Iα) separately, then link them with a = rα if a rope or contact point does not slip."
  - "A rope over a pulley with rotational inertia has different tensions on its two sides."
faqs:
  - question: "Is the angular acceleration always in the same direction as the angular velocity?"
    answer: "No. α has the same sense as the net torque. If a wheel spins counterclockwise and the net torque is clockwise, α is clockwise and the wheel slows down."
  - question: "Do I need to memorise rotational inertias like ½MR²?"
    answer: "No. For extended objects such as disks and hoops, the value is given in the question. You should know I = mr² for a point mass and that mass further from the axis gives a larger I."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Everything here uses algebra and diagrams. If you are taking the calculus-based Physics C: Mechanics course, it has its own separate guide.

## From "is ω changing?" to "how fast?"

Topic 5.5 gave a yes-or-no rule. If the net torque on a rigid system is zero, its angular velocity stays constant. If it is not zero, the angular velocity changes. This topic answers the next question: **how fast** does it change?

The answer is the **rotational form of Newton's second law**:

**α = τ_net / I**, or equivalently **Στ = Iα**

- α is the angular acceleration (rad/s²).
- τ_net = Στ is the net torque on the system (N·m), added with signs.
- I is the rotational inertia of the system about the same axis (kg·m²).

Two facts are built into this equation.

1. **Direct proportion to torque.** Double the net torque and you double α.
2. **Inverse proportion to rotational inertia.** Double I and you halve α.

The sense of α is the same as the sense of the net torque. In this course that means clockwise or counterclockwise about the chosen axis. As before, state a sign convention; in this guide **counterclockwise (ccw) is positive**.

## Where the equation comes from

You do not need to take α = τ_net / I on trust. Build it from the linear second law.

Picture one small mass m on the end of a light rod of length r, free to turn about the other end. Push the mass with a force F that is **tangential** (perpendicular to the rod).

1. Linear second law along the tangent: F = m a_T.
2. From Topic 5.2, the tangential acceleration of a point at radius r is a_T = rα. So F = m r α.
3. Multiply both sides by r: rF = m r² α.
4. The left side is the torque, τ = rF. The right side contains m r², which is the rotational inertia of a point mass. So **τ = Iα**.

For a rigid object made of many pieces, every piece has the same α (Topic 5.2). Adding the equations for all the pieces gives Στ = (Σmr²)α = Iα. Forces that pieces exert on each other come in third-law pairs and their torques cancel, so only **external** torques count.

## Using functional dependence

Exam questions often ask "what happens to α if…?" without giving numbers. Use the proportions directly.

Take a light rod with two 0.50 kg masses, each 0.20 m from a central axle. Then I = 2 × (0.50 kg)(0.20 m)² = 0.040 kg·m². A net torque of 0.80 N·m gives α = 0.80 ÷ 0.040 = 20 rad/s².

| Change | Effect on I | Effect on α | New α |
|---|---|---|---|
| Double the net torque | none | × 2 | 40 rad/s² |
| Move both masses out to 0.40 m | × 4 (I ∝ r²) | × ¼ | 5.0 rad/s² |
| Double both masses | × 2 | × ½ | 10 rad/s² |

The middle row is the one that catches people out. Doubling the distance of each mass **quadruples** I, because I depends on r². The same torque now produces only a quarter of the angular acceleration.

The same idea compares objects of the same mass. A hoop has all its mass at the rim; a solid disk of the same mass and radius has much of it near the centre. So the hoop has the larger I, and the same torque gives the hoop the **smaller** α.

## Linear and rotational analyses are separate

A rigid object can move in two ways at once: its centre of mass can accelerate, and it can spin faster or slower. The two are governed by **separate** equations:

- **Linear:** ΣF = m a_cm (all forces, wherever they act).
- **Rotational:** Στ = Iα (torques about the chosen axis).

Neither one replaces the other. A pulley on a fixed axle shows this clearly: its centre of mass does not move, so ΣF = 0, yet its angular velocity changes, so Στ ≠ 0. The force from the axle makes the forces balance, but it acts at the axis, so it makes no torque.

When two objects are connected by a rope that does not slip on a pulley or drum, the rope's acceleration and the drum's angular acceleration are linked by **a = Rα**, where R is the radius at which the rope leaves the drum. That link is what lets you solve the equations together.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="p1-56-drum-title p1-56-drum-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-56-drum-title">Force diagrams for a well drum and a bucket</title>
<desc id="p1-56-drum-desc">Two separate force diagrams. Left: a circular drum of radius R on a fixed axle. An upward axle force of 147 newtons and a downward weight of 117.6 newtons both act at the centre. A downward rope tension of 29.4 newtons acts at the right-hand edge of the drum, a distance R from the axle, so it gives the drum a clockwise torque. A curved arrow marks the clockwise angular acceleration alpha. Right: the bucket as a box, with an upward rope tension of 29.4 newtons from its top and a downward weight of 58.8 newtons from its bottom, and an arrow showing its downward acceleration a. Arrow lengths are drawn to scale.</desc>
<rect x="0" y="0" width="560" height="320" fill="#ffffff"/>
<circle cx="150" cy="170" r="50" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="150" cy="170" r="4" fill="#1d2b44"/>
<path d="M150 170 H200" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 3"/>
<text x="168" y="164" font-size="12" fill="#1d2b44">R</text>
<g stroke="#1d2b44" stroke-width="3" fill="#1d2b44">
<path d="M150 170 V62.4"/><path d="M150 52.4 l-6 10 h12 z" stroke-width="1"/>
<path d="M150 170 V254.1"/><path d="M150 264.1 l-6 -10 h12 z" stroke-width="1"/>
<path d="M200 170 V183.5"/><path d="M200 193.5 l-6 -10 h12 z" stroke-width="1"/>
</g>
<path d="M112 120 A62 62 0 0 1 196 128" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 3"/>
<path d="M196 128 l-10 -2 l5 -8 z" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="160" y="58">axle force 147 N</text>
<text x="160" y="268">Mg = 117.6 N</text>
<text x="208" y="200">T = 29.4 N</text>
<text x="40" y="112">α (clockwise)</text>
<text x="70" y="315">drum (rotates, centre stays still)</text>
</g>
<rect x="380" y="140" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="410" y="165" font-size="11" fill="#1d2b44" text-anchor="middle">bucket</text>
<g stroke="#1d2b44" stroke-width="3" fill="#1d2b44">
<path d="M410 140 V126.5"/><path d="M410 116.5 l-6 10 h12 z" stroke-width="1"/>
<path d="M410 180 V217"/><path d="M410 227 l-6 -10 h12 z" stroke-width="1"/>
</g>
<path d="M480 140 V200" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 3"/>
<path d="M480 210 l-5 -10 h10 z" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="420" y="112">T = 29.4 N</text>
<text x="420" y="240">mg = 58.8 N</text>
<text x="488" y="180">a</text>
<text x="360" y="315">bucket (moves, no rotation)</text>
</g>
</svg>
<figcaption>Figure 1. Separate force diagrams for Worked example 2. Solid arrows are forces, drawn to scale (0.8 pixel per newton) from the point where each acts. Dashed arrows show the drum's clockwise angular acceleration and the bucket's downward acceleration. The axle force and the drum's weight act at the axis, so only the rope tension gives the drum a torque.</figcaption>
</figure>

## Worked example 1: a flywheel slowed by a brake pad

**Question.** The flywheel of an exercise bike has rotational inertia I = 0.80 kg·m² and spins counterclockwise at 12 rad/s. With the pedals disconnected, a brake pad presses against the flywheel's rim, 0.25 m from the axle, with a normal force of 20 N. The coefficient of kinetic friction between pad and rim is 0.40. Ignore other friction. Find (a) the angular acceleration, (b) the time to stop and (c) the number of turns the flywheel makes while stopping.

1. **Friction force.** f = μ_k F_N = 0.40 × 20 N = 8.0 N, tangent to the rim and opposing the motion.
2. **Torque.** The normal force points at the axle (zero lever arm, no torque). Friction is perpendicular to the radius: τ = rf = (0.25 m)(8.0 N) = 2.0 N·m, clockwise, so τ_net = −2.0 N·m.
3. **(a)** α = τ_net / I = −2.0 N·m ÷ 0.80 kg·m² = **−2.5 rad/s²** (clockwise, opposite to ω, so the flywheel slows down).
4. **(b)** From Topic 5.1, ω = ω₀ + αt: 0 = 12 + (−2.5)t, so **t = 4.8 s**.
5. **(c)** ω² = ω₀² + 2αΔθ: 0 = 144 + 2(−2.5)Δθ, so Δθ = 28.8 rad. Dividing by 2π rad per turn gives **about 4.6 turns**.

**Check.** The average angular velocity is (12 + 0)/2 = 6.0 rad/s; over 4.8 s that is 28.8 rad. It agrees.

**Two analyses.** The flywheel's centre does not move, so ΣF = 0: the axle pushes back against the 20 N normal force and the 8.0 N friction. Yet Στ ≠ 0 and ω changes. This is the separation from the section above.

## Worked example 2: lowering a bucket on a well drum

**Question.** A bucket of water (mass m = 6.0 kg) hangs from a rope wound around a drum. The drum is a solid cylinder of mass M = 12 kg and radius R = 0.10 m, with rotational inertia I = ½MR² (given). It turns on a fixed axle without friction. The bucket is released from rest and the rope does not slip. (a) Derive an expression for the bucket's acceleration. (b) Find a, the rope tension T and the drum's α. (c) Find the force from the axle.

**(a) Symbolic.** Draw separate force diagrams (Figure 1). Take **down as positive** for the bucket and **clockwise as positive** for the drum, so both directions describe the same motion.

- Bucket (linear): mg − T = ma.
- Drum (rotational, about the axle): the tension acts at radius R, perpendicular to the radius, so TR = Iα.
- Link (no slip): a = Rα, so α = a/R.

From the drum: T = Iα/R = Ia/R². Substitute into the bucket equation: mg − (I/R²)a = ma, so

**a = mg / (m + I/R²)**

**(b) Numbers.** I = ½(12 kg)(0.10 m)² = 0.060 kg·m², so I/R² = 6.0 kg.
a = (6.0 kg)(9.8 m/s²) ÷ (6.0 kg + 6.0 kg) = **4.9 m/s²**.
T = m(g − a) = (6.0 kg)(9.8 − 4.9) m/s² = **29.4 N ≈ 29 N**.
α = a/R = 4.9 ÷ 0.10 = **49 rad/s²** (clockwise in Figure 1).

**Check.** TR = (29.4 N)(0.10 m) = 2.94 N·m and Iα = (0.060)(49) = 2.94 N·m. They agree. Also T is less than the bucket's weight (58.8 N), as it must be for the bucket to accelerate downward.

**(c) Axle force.** The drum's centre does not accelerate, so the linear analysis gives F_axle = Mg + T = 117.6 N + 29.4 N = **147 N** upward. This force makes no torque because it acts at the axis.

**Limiting cases.** If the drum were very light (I → 0), a → g and T → 0: the bucket would free-fall. If the drum were a hoop of the same mass and radius (I = MR², given), I/R² = 12 kg and a = 58.8 ÷ 18 ≈ 3.3 m/s², smaller because the hoop has more rotational inertia. A massive drum "uses up" part of the bucket's weight to spin itself up.

## Comparing scenarios

Exam questions often ask you to rank or compare. Keep the torque fixed and change I, or keep I fixed and change the torque. With the same 1.5 N·m net torque:

| Object (I given) | I (kg·m²) | α = τ_net / I (rad/s²) |
|---|---|---|
| Disk A | 0.050 | 30 |
| Hoop of the same mass and radius as A | 0.10 | 15 |
| Disk with half the mass of A, same radius | 0.025 | 60 |

The order of α is the reverse of the order of I.

## Common misconceptions

- **"α points the same way as ω."** α has the sense of the net **torque**. Opposite senses mean the object slows down (Worked example 1).
- **"The tension equals the hanging weight."** Only if the bucket is not accelerating. In Worked example 2, T = 29.4 N while mg = 58.8 N.
- **"The tension is the same on both sides of every pulley."** That is only true for a light (massless) pulley. A pulley with rotational inertia needs a net torque to speed up, so the two tensions must differ.
- **"The axle force makes a torque."** It acts at the axis, so its lever arm is zero.
- **"Same mass means same α."** I depends on how the mass is spread out. A hoop and a disk of equal mass behave differently.
- **"Moving masses twice as far halves α."** I ∝ r², so α falls to a quarter.
- **"If the object spins, the linear equation does not apply."** Both equations apply, separately: ΣF = ma_cm and Στ = Iα.

## Where this leads

Torque now has two jobs: it changes angular velocity (this topic) and, in Unit 6, it does work. The next topic, [Rotational Kinetic Energy](/advanced-course-resources/physics-1/6-1-rotational-kinetic-energy-study-guide/), looks at the energy stored in spinning objects such as the drum in Worked example 2. Try the [practice questions](/advanced-course-resources/physics-1/5-6-newtons-second-law-rotational-form-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/5-6-newtons-second-law-rotational-form-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/5-6-newtons-second-law-rotational-form-checklist/) to consolidate. You can also go back to [Topic 5.5, Rotational Equilibrium](/advanced-course-resources/physics-1/5-5-rotational-equilibrium-newtons-first-law-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
