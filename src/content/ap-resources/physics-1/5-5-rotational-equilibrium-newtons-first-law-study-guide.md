---
resourceId: "mb-ap-phys1-5.5-study-guide"
title: "Rotational Equilibrium and Newton's First Law in Rotational Form: Study Guide (Physics 1 5.5)"
description: "When does angular velocity stay constant? Net torque, rotational equilibrium, the rotational first law, force diagrams and balance problems, and why the two kinds of equilibrium are independent."
course: "physics-1"
unit: 5
topics: ["5.5"]
resourceType: "study-guide"
prerequisites:
  - "Calculating torque as τ = r⊥F = rF sin θ and naming its sense as clockwise or counterclockwise (Topic 5.3)"
  - "Translational equilibrium and Newton's first law, ΣF = 0 (Topic 2.4)"
  - "Angular velocity and angular acceleration (Topic 5.1)"
prerequisiteResources: ["mb-ap-phys1-5.4-study-guide"]
learningObjectives:
  - "State the condition for rotational equilibrium, Στ = 0, and link it to a constant angular velocity"
  - "Draw a force diagram that shows where each force acts on a rigid system and use it to write a torque equation"
  - "Solve balance problems by choosing a pivot point that removes an unknown force from the torque equation"
  - "Explain, with examples, that a system can be in rotational equilibrium without translational equilibrium, and the reverse"
  - "Use the rule that unbalanced torques mean a changing angular velocity, and sketch angular velocity–time graphs that show it"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra and trigonometry only; no calculus is used anywhere in this course. Where gravity appears we use g = 9.8 m/s², the value on the course equation table"
related: ["mb-ap-phys1-5.5-revision-notes", "mb-ap-phys1-5.5-practice", "mb-ap-phys1-5.5-checklist"]
next: "mb-ap-phys1-5.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Rotational equilibrium means the net torque on the system is zero: Στ = 0."
  - "Rotational first law: a rigid system keeps a constant angular velocity (which may be zero) only if the net torque on it is zero."
  - "If the torques are unbalanced, the angular velocity must be changing."
  - "Rotational and translational equilibrium are separate conditions. A system can have one without the other."
  - "For an object at rest, the net torque is zero about every point, so put the pivot where an unknown force acts."
faqs:
  - question: "Does rotational equilibrium mean the object is not rotating?"
    answer: "No. It means the angular velocity is constant. A ceiling fan turning at a steady rate is in rotational equilibrium, just like a fan that is switched off."
  - question: "Which point should I take torques about?"
    answer: "For an object in both translational and rotational equilibrium, any point gives a correct equation. Choose the point where an unknown force acts, because that force then has zero lever arm and drops out."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Everything here uses algebra, trigonometry and diagrams. If you are taking the calculus-based Physics C: Mechanics course, it has its own separate guide.

## From balanced forces to balanced torques

In Topic 2.4 you met **translational equilibrium**: if the net force on a system is zero, the velocity of its centre of mass stays constant. Unit 5 asks the same question about rotation. When does a rigid system keep spinning at the same rate?

The answer uses torque instead of force. From Topic 5.3, a force F exerted a distance r from an axis gives a torque

**τ = r⊥F = rF sin θ**

where θ is the angle between the force and the line from the axis to where the force acts, and r⊥ is the lever arm. In this course the sense of a torque is described only as **clockwise** or **counterclockwise** about a chosen axis.

Pick a sign convention and write it down, just as you write "+x to the right" in kinematics. In this guide: **counterclockwise (ccw) is positive, clockwise (cw) is negative.**

**Rotational equilibrium** is a set of torques that add to zero:

**Στ = 0** (net torque on the system is zero)

## Newton's first law in rotational form

The rotational version of the first law says:

> A rigid system has a **constant angular velocity** only if the **net torque** on it is zero.

"Constant angular velocity" includes ω = 0. So both of these are in rotational equilibrium:

- a see-saw sitting level and still (ω = 0, constant);
- a ceiling fan turning at a steady 20 rad/s, where the torque from the motor exactly cancels the torque from air drag and friction at the bearing.

The fan is the one students often get wrong. It is spinning, yet the net torque on it is zero. A spinning object does not need a net torque to **keep** spinning. It needs a net torque only to **change** how fast it spins.

There is a second half to the rule, a **corollary of Newton's second law**:

> If the torques on a rigid system are **not balanced**, its angular velocity **must be changing**.

Topic 5.6 turns this into an equation (α = τ_net / I). For now, the yes-or-no version is enough: balanced torques mean ω stays the same; unbalanced torques mean ω changes.

## Force diagrams: where the force acts matters

A **free-body diagram** (Topic 2.2) shows each force as an arrow from a single dot, because for linear motion only the size and direction of each force matter. For rotation that is not enough. A 10 N push near a door's hinge and a 10 N push at its handle have very different effects.

A **force diagram** for a rigid system therefore draws the object's shape and puts each arrow's tail **at the point where that force is exerted**. It still shows the relative sizes and directions of the forces, and it also shows where each one acts relative to the axis. Gravity on a uniform object acts at its centre, the centre of mass.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="p1-55-beam-title p1-55-beam-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-55-beam-title">Force diagram of a uniform beam carrying a box</title>
<desc id="p1-55-beam-desc">A horizontal beam 3.0 m long rests on two supports, one at each end. A box sits on the beam 1.0 m from the left end. Four vertical arrows start where each force acts: an upward support force F_L of 254.8 newtons at the left end, an upward support force F_R of 156.8 newtons at the right end, the beam's weight of 117.6 newtons pointing down from the middle of the beam at 1.5 m, and the box's weight of 294 newtons pointing down from 1.0 m. Arrow lengths are drawn to scale. Distance markers below the beam show 1.0 m, 1.5 m and 3.0 m from the left end.</desc>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<rect x="60" y="130" width="450" height="16" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="185" y="96" width="50" height="34" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="210" y="118" font-size="11" fill="#1d2b44" text-anchor="middle">box</text>
<g stroke="#1d2b44" stroke-width="3" fill="#1d2b44">
<path d="M60 130 V76.3"/><path d="M60 66.3 l-6 10 h12 z" stroke-width="1"/>
<path d="M510 130 V100.8"/><path d="M510 90.8 l-6 10 h12 z" stroke-width="1"/>
<path d="M285 146 V165.4"/><path d="M285 175.4 l-6 -10 h12 z" stroke-width="1"/>
<path d="M210 146 V209.5"/><path d="M210 219.5 l-6 -10 h12 z" stroke-width="1"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="70" y="62">F_L = 254.8 N (up)</text>
<text x="380" y="80">F_R = 156.8 N (up)</text>
<text x="295" y="178">W_beam = 117.6 N</text>
<text x="104" y="232">W_box = 294 N</text>
</g>
<g stroke="#1d2b44" stroke-width="1" fill="none">
<path d="M60 250 V270 M210 250 V270 M285 250 V270 M510 250 V270"/>
<path d="M60 262 H510" stroke-dasharray="4 3"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="290">0</text><text x="210" y="290">1.0 m</text><text x="285" y="290">1.5 m</text><text x="510" y="290">3.0 m</text>
</g>
</svg>
<figcaption>Figure 1. Force diagram for Worked example 1. Unlike a free-body diagram, each arrow starts where its force acts. Upward arrows are the support forces; downward arrows are weights. Arrow lengths are to scale (0.25 pixel per newton).</figcaption>
</figure>

## Choosing the pivot

For an object that is in **both** kinds of equilibrium (for example, a beam at rest), the net torque is zero about **every** point, not just the real hinge. That gives you a free choice. The smart choice is the point where an **unknown force** acts: that force has zero lever arm there, so it drops out of the torque equation.

A good routine for balance problems:

1. Draw a force diagram with each force at its point of action.
2. State your sign convention (ccw positive) and your chosen pivot.
3. Write Στ = 0 about that pivot and solve for one unknown.
4. Write ΣF_x = 0 and ΣF_y = 0 for the remaining unknowns.
5. Check by taking torques about a **different** point.

## Worked example 1: a beam on two supports

**Question.** A uniform beam is 3.0 m long and has a mass of 12 kg. It rests horizontally on two supports, one under each end. A 30 kg box sits on the beam 1.0 m from the left end. Find the upward force from each support (Figure 1).

1. Weights: W_beam = 12 kg × 9.8 m/s² = 117.6 N, acting at the centre (1.5 m). W_box = 30 kg × 9.8 m/s² = 294 N, acting at 1.0 m.
2. Pivot at the **left end**, ccw positive. F_L acts at the pivot, so its torque is zero.
3. Torques: F_R pushes up at 3.0 m (ccw, +). Both weights pull down to the right of the pivot (cw, −).
   Στ = F_R(3.0 m) − (117.6 N)(1.5 m) − (294 N)(1.0 m) = 0
   F_R(3.0 m) = 176.4 N·m + 294 N·m = 470.4 N·m, so **F_R = 156.8 N ≈ 160 N**.
4. Forces: F_L + F_R = 117.6 N + 294 N = 411.6 N, so **F_L = 254.8 N ≈ 250 N**.

**Check.** Take torques about the **right end** instead. F_L now has a 3.0 m lever arm (cw, −); the beam's weight acts 1.5 m away and the box 2.0 m away (both ccw, +):
F_L(3.0 m) = (117.6 N)(1.5 m) + (294 N)(2.0 m) = 764.4 N·m, so F_L = 254.8 N. The two methods agree.

**Interpretation.** The left support carries more because the box is closer to it. If the box sat at the centre, each support would carry half of 411.6 N.

## Worked example 2: a hanging sign and a cable

**Question.** A uniform rod of mass m_r = 4.0 kg and length L = 1.2 m sticks out horizontally from a wall, held by a hinge. A sign of mass M = 10 kg hangs from the rod at d = 0.90 m from the wall. A cable runs from the far end of the rod up to the wall, making θ = 35° with the rod. (a) Derive an expression for the cable tension T. (b) Calculate T. (c) Find the force from the hinge.

**(a) Symbolic.** Take torques about the **hinge**, so the unknown hinge force drops out. Only the part of T perpendicular to the rod, T sin θ, makes a torque. It acts at distance L and turns the rod ccw. The rod's weight (at L/2) and the sign's weight (at d) both turn it cw.

Στ = T sin θ · L − m_r g (L/2) − M g d = 0

**T = g(m_r L/2 + M d) / (L sin θ)**

**(b) Numbers.** Clockwise torques: (4.0)(9.8)(0.60) + (10)(9.8)(0.90) = 23.52 + 88.2 = 111.72 N·m. Then T = 111.72 N·m ÷ (1.2 m × sin 35°) = 111.72 ÷ 0.6883 = **162 N ≈ 160 N**.

**(c) Hinge force.** Now use forces. Horizontal: the cable pulls the rod towards the wall with T cos 35° = 133 N, so the hinge pushes the rod away from the wall with **H_x ≈ 130 N**. Vertical: the cable pulls up with T sin 35° = 93.1 N; total weight is 14 kg × 9.8 m/s² = 137.2 N; so the hinge pushes up with **H_y = 137.2 − 93.1 = 44.1 N ≈ 44 N**.

**Check the expression.** As θ gets smaller, sin θ gets smaller and T gets larger: at 10° the tension would be about 540 N. A nearly flat cable has a tiny lever arm, so it must pull very hard. At θ = 90° (cable straight up) T is smallest, 93.1 N. A cable cannot hold the rod at θ = 0, which the expression shows as division by zero.

## The two kinds of equilibrium are independent

Translational equilibrium (ΣF = 0) and rotational equilibrium (Στ = 0) are **separate conditions**. Each can hold without the other.

**Translational but not rotational.** A driver starts to turn a steering wheel of radius 0.18 m by pushing up with 25 N on one side and down with 25 N on the other. The two forces cancel, so ΣF = 0 and the wheel's centre does not accelerate. But both forces turn the wheel the same way. The net torque is 2 × (0.18 m)(25 N) = 9.0 N·m, so the wheel's angular velocity starts to change. A pair of equal and opposite forces that do not act along the same line is called a **couple**.

**Rotational but not translational.** A spinning ball is thrown, with air resistance ignored. The only force on it is gravity, which acts at its centre of mass. About an axis through the centre of mass that force has zero lever arm, so Στ = 0 and the ball keeps spinning at a constant rate. Yet the net force is mg downward, so the ball's centre accelerates at g. Rotational equilibrium, not translational.

**Both.** The beam in Worked example 1 and a steadily turning fan on a fixed mount.

**Neither.** A car wheel while the car brakes: its centre slows down and its spin slows down.

## Picturing the rule on a graph

The quickest picture of rotational equilibrium is an angular velocity–time graph. A **horizontal** section means constant ω, so Στ = 0. A **sloping** section means ω is changing, so the torques are unbalanced.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="p1-55-fan-title p1-55-fan-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-55-fan-title">Sketch of angular velocity against time for a fan</title>
<desc id="p1-55-fan-desc">A qualitative graph of angular velocity omega against time t for a ceiling fan, counterclockwise positive. Stage A: after the fan is switched on, omega rises in a straight line from zero; motor torque is larger than friction torque, so net torque is not zero. Stage B: omega stays constant on a horizontal line; motor torque equals friction torque, net torque zero, rotational equilibrium. Stage C: after the fan is switched off, omega falls in a straight line back to zero, less steeply than it rose; only the friction torque acts, so net torque is not zero. Stage D: omega stays at zero; no torques, rotational equilibrium.</desc>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<path d="M70 250 H530 M70 250 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<text x="520" y="272" font-size="13" fill="#1d2b44" text-anchor="end">time, t</text>
<text x="26" y="150" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 26 150)">angular velocity, ω (ccw +)</text>
<g stroke="#1d2b44" stroke-width="0.8" stroke-dasharray="3 4">
<path d="M150 250 V60 M310 250 V60 M470 250 V60"/>
</g>
<polyline points="70,250 150,90 310,90 470,250 530,250" fill="none" stroke="#1d2b44" stroke-width="3"/>
<g font-size="15" fill="#1d2b44" font-weight="700" text-anchor="middle">
<text x="110" y="62">A</text><text x="230" y="62">B</text><text x="390" y="62">C</text><text x="500" y="62">D</text>
</g>
<g font-size="11" fill="#1d2b44" text-anchor="middle">
<text x="112" y="200">Στ ≠ 0</text><text x="112" y="214">ω rises</text>
<text x="230" y="120">Στ = 0</text><text x="230" y="134">ω constant</text>
<text x="398" y="140">Στ ≠ 0</text><text x="398" y="154">ω falls</text>
<text x="500" y="236">Στ = 0</text>
</g>
</svg>
<figcaption>Figure 2. A ceiling fan, sketched. A: switched on, the motor torque exceeds the friction torque, so ω increases. B: steady speed, the two torques balance. C: switched off, only the friction torque acts, so ω decreases. D: at rest. Stages B and D are both rotational equilibrium.</figcaption>
</figure>

Notice that the fan is in rotational equilibrium at full speed (B) and at rest (D). What these stages share is a **flat** line, not a particular value of ω.

## Unbalanced torques: a changing angular velocity

Two children sit on a see-saw, each 1.5 m from the pivot. One has a mass of 30 kg, the other 25 kg. The net torque about the pivot is (30 − 25) kg × 9.8 m/s² × 1.5 m = 73.5 N·m towards the heavier child. The torques are not balanced, so the see-saw's angular velocity must change: starting from rest, it starts to turn. To balance, the lighter child would need to sit 30 × 1.5 ÷ 25 = 1.8 m from the pivot.

This course only asks you to analyse rotation in **one plane** at a time (for example, a see-saw turning in a vertical plane). You will not need to combine rotations about two different axes.

## Common misconceptions

- **"A spinning object needs a net torque to keep spinning."** No. Constant ω needs zero net torque (Figure 2, stage B).
- **"Equilibrium means at rest."** Rotational equilibrium means **constant** angular velocity, which includes steady spinning.
- **"If ΣF = 0, the object cannot start to rotate."** A couple has ΣF = 0 but a non-zero torque (the steering wheel).
- **"If something accelerates, it cannot be in rotational equilibrium."** The thrown spinning ball accelerates at g but keeps a constant spin.
- **"Use the full force in the torque."** Only the perpendicular part makes a torque: T sin θ in Worked example 2.
- **"You must take torques about the real hinge."** For an object in equilibrium, any point works. Choose the one that removes an unknown.
- **Mixing signs.** Decide ccw positive (or cw positive) once, and use it for every torque in the equation.
- **Drawing a free-body dot for a torque problem.** You need a force diagram that shows where each force acts.

## Where this leads

Rotational equilibrium is the "zero net torque" case. The next topic, [Newton's Second Law in Rotational Form](/advanced-course-resources/physics-1/5-6-newtons-second-law-rotational-form-study-guide/), tells you how fast ω changes when the torques do not balance: α = τ_net / I. Try the [practice questions](/advanced-course-resources/physics-1/5-5-rotational-equilibrium-newtons-first-law-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/5-5-rotational-equilibrium-newtons-first-law-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/5-5-rotational-equilibrium-newtons-first-law-checklist/) to consolidate. You can also go back to [Topic 5.4, Rotational Inertia](/advanced-course-resources/physics-1/5-4-rotational-inertia-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
