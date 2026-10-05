---
resourceId: "mb-ap-physcm-4.3-study-guide"
title: "Conservation of Linear Momentum: Study Guide (Physics C: Mechanics 4.3)"
description: "Total momentum and center-of-mass velocity, why internal forces cannot change a system's momentum, choosing a system, and conservation in one and two dimensions."
course: "physics-c-mechanics"
unit: 4
topics: ["4.3"]
resourceType: "study-guide"
prerequisites:
  - "Momentum p = mv as a vector (Topic 4.1) and impulse J = ∫F dt = Δp (Topic 4.2)"
  - "Center of mass of a set of particles (Topic 2.1) and Newton's third law (Topic 2.3)"
  - "Resolving vectors into components (Unit 1)"
prerequisiteResources: ["mb-ap-physcm-4.2-study-guide"]
learningObjectives:
  - "Add the momenta of the parts of a system to find its total momentum, and relate it to the velocity of the center of mass"
  - "Explain, using Newton's third law, why forces inside a system cannot change its total momentum"
  - "Decide whether a chosen system's momentum is constant by checking the net external force, component by component"
  - "Find an external impulse from the change in a system's momentum"
  - "Use conservation of momentum to find velocities just before and just after collisions and explosions in one and two dimensions"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Calculator for arithmetic and trigonometry. Where gravity appears we use g = 9.8 m/s², the value on the course equation table. Answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-4.3-revision-notes", "mb-ap-physcm-4.3-practice", "mb-ap-physcm-4.3-checklist"]
next: "mb-ap-physcm-4.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "A system's total momentum is the vector sum of its parts' momenta, and it equals the total mass times the center-of-mass velocity."
  - "Internal forces come in third-law pairs, so their impulses cancel. Only external forces change a system's momentum: ΔP = ∫ΣF_ext dt."
  - "Momentum is conserved in every interaction. Whether a particular system's momentum stays constant depends on the system you choose."
  - "Apply conservation one component at a time. A component is conserved when the external forces in that direction add to zero."
  - "Across a short collision or explosion, external impulses are usually tiny, so total momentum just before equals total momentum just after."
faqs:
  - question: "Is momentum conserved when friction acts?"
    answer: "Momentum is always conserved overall, but a system's momentum changes if friction from outside the system acts on it. During a very short collision, the friction impulse is usually small enough to ignore."
  - question: "Do I need three dimensions?"
    answer: "No. You calculate in one or two dimensions. Three-dimensional cases are only discussed qualitatively."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Topic 4.2 showed that a net force changes one object's momentum. This topic looks at **systems**: groups of objects that push and pull on each other. The main result is simple. Forces between the parts cannot change the total momentum. Only something outside the system can.

## Total momentum and the center of mass

A system made of parts with masses m₁, m₂, … and velocities v₁, v₂, … has **total momentum**

**P = m₁v₁ + m₂v₂ + … = Σ mᵢvᵢ**

This is a **vector** sum. In one dimension, use signs. In two dimensions, add the x-components and the y-components separately.

From Topic 2.1, the center of mass is at x_cm = Σ mᵢxᵢ / M, where M = Σ mᵢ is the total mass. Differentiate with respect to time. The masses are constant, so

**v_cm = dx_cm/dt = Σ mᵢvᵢ / M = P / M**

So **P = M v_cm**. You can describe a whole collection of moving objects as **one object** of mass M moving with velocity v_cm. Its momentum is the system's total momentum.

## Why internal forces cancel

Pick two objects inside the system, A and B. During any interaction, Newton's third law says F_AB = −F_BA at every instant. Integrate over the time of the interaction:

**J_on A = ∫F_BA dt = −∫F_AB dt = −J_on B**

The impulses are **equal in size and opposite in direction**. So Δp_A = −Δp_B: whatever momentum A gains, B loses. Add every pair inside the system and all internal impulses cancel. What is left is

**dP/dt = ΣF_ext**, or over an interval, **ΔP = ∫ΣF_ext dt = J_ext**

This is the impulse–momentum theorem of Topic 4.2 applied to the whole system. Two results follow:

- If ΣF_ext = 0, then **P is constant**, and so **v_cm is constant**.
- If ΣF_ext ≠ 0, the change in P equals the **impulse from outside**. Momentum is transferred between the system and its surroundings.

## Choosing the system

Momentum is conserved in **all** interactions. Momentum that leaves one object always turns up somewhere else. What changes from problem to problem is whether **your chosen system** keeps it.

| Situation | System | External force? | P constant? |
|---|---|---|---|
| A car brakes on a level road | car only | friction from the road | no |
| A car brakes on a level road | car + Earth | none (road friction is internal) | yes |
| Two gliders collide on a level air track | both gliders | weight and normal force cancel | yes |
| A dropped ball falls | ball only | gravity from Earth | no (P_y grows) |

The ball-only and car-only systems are not "breaking" conservation. Their momentum goes to Earth, whose huge mass means its velocity change is far too small to notice. Choose the system so that the forces you do not know, or cannot measure, are **internal**. Then you can use P = constant.

**One component at a time.** Conservation is a vector statement, so it can hold in one direction and fail in another. Suppose a 0.60 kg sandbag is dropped straight down onto a 2.4 kg cart rolling at 1.5 m/s on a level, frictionless track, and it lands at 2.0 m/s and stays on. Take **+x along the track and +y upward**. There is no horizontal external force, so P_x is conserved:

2.4 × 1.5 = (2.4 + 0.60) v, so **v = 1.2 m/s**.

Vertically, the bag's momentum of 0.60 × 2.0 = 1.2 kg·m/s downward disappears. The track supplies an upward impulse of **1.2 N·s** through a large normal force during the landing. So P_y is **not** conserved for the cart-and-bag system.

## Collisions and explosions: "just before" and "just after"

In a **collision**, the forces between the objects are much larger than the external forces, and they act for a very short time. An **explosion** is the same in reverse: internal forces (from a spring, a chemical reaction, or someone pushing) drive parts apart.

Gravity, friction or air resistance still act during the interaction. But their impulse is F_ext Δt, and Δt is tiny. So compare states **immediately before** and **immediately after**:

**P_before = P_after**, written in components when needed.

Wait longer and external forces have time to matter. A ball that explodes in the air still has its center of mass follow the projectile path, because gravity keeps acting on the whole system.

**A method that works every time.**

1. Draw a **before** sketch and an **after** sketch. Label every mass and velocity, known or unknown.
2. State the **system** and the **axes**, for example "both carts; +x to the right".
3. List the external forces. Decide which components of P are conserved over the time you are comparing.
4. Write P_before = P_after for each conserved component, with signs.
5. Solve, then **check**: is the answer's direction sensible, does v_cm stay the same, and are the momentum changes of the parts equal and opposite?

Unknown directions are fine. If you guess a direction and the answer comes out negative, the object moves the other way.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="pcm43-pt-title pcm43-pt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm43-pt-title">Momentum–time graph for two carts pushed apart by a spring</title>
<desc id="pcm43-pt-desc">Momentum in kilogram metres per second, from −0.15 to 0.45, against time in seconds from 0 to 0.30. Cart A, a solid line, has constant momentum 0.12 until t = 0.10 s, then falls smoothly to −0.096 at t = 0.15 s and stays there. Cart B, a dashed line, has 0.18 until 0.10 s, rises smoothly to 0.396 at 0.15 s and stays there. The two curves are mirror images. The total, a thick dotted line, stays at 0.30 throughout.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<rect x="216.7" y="40" width="73.3" height="260" fill="#fdf6e3"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M70 300 H510 M70 170 H510 M70 105 H510 M70 40 H510"/>
</g>
<path d="M70 235 H515 M70 305 V35" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="252">0</text><text x="216.7" y="252">0.10</text><text x="290" y="252">0.15</text><text x="363.3" y="252">0.20</text><text x="510" y="252">0.30</text>
<text x="430" y="330" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="304">−0.15</text><text x="62" y="239">0</text><text x="62" y="174">0.15</text><text x="62" y="109">0.30</text><text x="62" y="44">0.45</text>
</g>
<text x="18" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 18 170)">momentum, p_x (kg·m/s)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70,183 216.7,183 224.0,185.6 231.3,192.7 238.7,203.2 246.0,215.9 253.3,229.8 260.7,243.7 268.0,256.4 275.3,266.9 282.7,274.0 290.0,276.6 510,276.6"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5" points="70,157 216.7,157 224.0,154.4 231.3,147.3 238.7,136.8 246.0,124.1 253.3,110.2 260.7,96.3 268.0,83.6 275.3,73.1 282.7,66.0 290.0,63.4 510,63.4"/>
<path d="M70 105 H510" stroke="#1d2b44" stroke-width="4" stroke-dasharray="1 6" stroke-linecap="round"/>
<g font-size="12" fill="#1d2b44">
<text x="80" y="200">cart A (solid): +0.12</text>
<text x="80" y="150">cart B (dashed): +0.18</text>
<text x="80" y="97">total (dotted): 0.30 at all times</text>
<text x="330" y="292">cart A: −0.096</text>
<text x="330" y="56">cart B: +0.396</text>
<text x="222" y="322">spring pushes (shaded)</text>
</g>
</svg>
<figcaption>Figure 1. Momentum of each cart in Worked example 1, +x along the track. The shaded band is the 0.050 s push. Cart A's curve falls by exactly as much as cart B's rises, because the spring exerts equal and opposite forces on them, so the slopes are equal and opposite at every instant. The total stays at 0.30 kg·m/s.</figcaption>
</figure>

## Worked example 1: carts pushed apart by a spring

**Question.** Take **+x along a level, low-friction track**. Cart A (0.60 kg) and cart B (0.90 kg) are held together by a latch, with a compressed spring between them. They roll together at +0.20 m/s. The latch is released and the spring pushes them apart for 0.050 s. Afterwards cart A moves at −0.16 m/s. Find (a) cart B's velocity, (b) the impulse on each cart, (c) the average force between them, and (d) the center-of-mass velocity afterwards.

1. **System:** both carts and the spring. Weight and normal force cancel; friction is negligible. So P_x is constant.
2. P_before = (0.60 + 0.90)(0.20) = **0.30 kg·m/s**.
3. P_after = (0.60)(−0.16) + (0.90)v_B = −0.096 + 0.90v_B.
4. **(a)** Set them equal: 0.90v_B = 0.396, so **v_B = +0.44 m/s**.
5. **(b)** Impulse on A = Δp_A = −0.096 − 0.12 = **−0.216 N·s**. Impulse on B = 0.396 − 0.18 = **+0.216 N·s**. Equal and opposite, as Newton's third law requires.
6. **(c)** Average force = |J| / Δt = 0.216 ÷ 0.050 ≈ **4.3 N** on each cart, in opposite directions.
7. **(d)** v_cm = P / M = 0.30 ÷ 1.50 = **+0.20 m/s**, the same as before the release.

**Check.** The spring is internal, so it cannot change v_cm. A slowed down and reversed; B sped up. Their momentum changes add to zero, matching Figure 1.

## Worked example 2: a glancing collision in two dimensions

**Question.** On a level air table, take **+x along puck A's first direction and +y to its left**. Puck A (0.40 kg) slides at 5.0 m/s and strikes puck B (0.60 kg), which is at rest. Just after, A moves at 2.5 m/s at 60° above the +x axis. Find B's velocity just after the collision.

1. **System:** both pucks. The air table removes friction; weight and normal force are vertical and cancel. So both P_x and P_y are conserved.
2. **Before:** P_x = 0.40 × 5.0 = 2.0 kg·m/s; P_y = 0.
3. **A after:** p_Ax = 0.40 × 2.5 × cos 60° = 0.50 kg·m/s; p_Ay = 0.40 × 2.5 × sin 60° ≈ 0.866 kg·m/s.
4. **x:** 2.0 = 0.50 + p_Bx, so p_Bx = **1.5 kg·m/s**.
5. **y:** 0 = 0.866 + p_By, so p_By ≈ **−0.866 kg·m/s**.
6. Size: |p_B| = √(1.5² + 0.866²) ≈ 1.73 kg·m/s, so v_B = 1.73 ÷ 0.60 ≈ **2.9 m/s**.
7. Direction: tan θ = −0.866 ÷ 1.5, so θ = **30° below the +x axis** (to the right of A's first path).

**Check.** The y-momenta of A and B after are equal and opposite, as they must be since there was no y-momentum before. The center of mass moves at 2.0 ÷ 1.00 = 2.0 m/s along +x before and after. Whether kinetic energy was conserved is a separate question, answered in Topic 4.4.

<figure>
<svg viewBox="0 0 520 280" role="img" aria-labelledby="pcm43-vec-title pcm43-vec-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm43-vec-title">Momentum vector triangle for the glancing collision</title>
<desc id="pcm43-vec-desc">A horizontal solid arrow, 2.0 kilogram metres per second long, shows the total momentum before the collision. Above it, a dashed arrow for puck A after the collision starts at the same tail and points up and to the right at 60 degrees, length 1.0. From the tip of that arrow, a dotted arrow for puck B points down and to the right at 30 degrees below horizontal, length 1.73, ending at the tip of the total momentum arrow. The two arrows after the collision add tip to tail to give the total.</desc>
<defs><marker id="pcm43-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="520" height="280" fill="#ffffff"/>
<path d="M60 220 H460" stroke="#1d2b44" stroke-width="3" marker-end="url(#pcm43-ah)"/>
<path d="M60 220 L160 46.8" stroke="#1d2b44" stroke-width="3" stroke-dasharray="9 5" marker-end="url(#pcm43-ah)"/>
<path d="M160 46.8 L460 220" stroke="#1d2b44" stroke-width="3" stroke-dasharray="2 5" stroke-linecap="round" marker-end="url(#pcm43-ah)"/>
<path d="M100 220 A40 40 0 0 0 80 185.4" fill="none" stroke="#1d2b44" stroke-width="1.2"/>
<path d="M410 220 A50 50 0 0 1 416.7 195" fill="none" stroke="#1d2b44" stroke-width="1.2"/>
<g font-size="13" fill="#1d2b44">
<text x="190" y="245">total P = 2.0 kg·m/s (before = after), solid</text>
<text x="104" y="112" text-anchor="end">p_A after</text>
<text x="102" y="130" text-anchor="end">= 1.0 (dashed)</text>
<text x="320" y="110">p_B after ≈ 1.73 (dotted)</text>
<text x="104" y="205">60°</text>
<text x="372" y="210">30°</text>
</g>
</svg>
<figcaption>Figure 2. Momentum vectors for Worked example 2, drawn to scale. Placed tip to tail, A's and B's momenta after the collision add to exactly the momentum A had before.</figcaption>
</figure>

## Testing conservation in the lab

A typical procedure: put two carts on a level track with a motion sensor at each end. Measure each cart's mass on a balance. Record velocity–time data before and after the carts interact. Multiply each velocity by its mass and **plot total momentum against time**. If momentum is conserved across the interaction, the values just before and just after match. Choose a time scale fine enough to see the short collision. A slow, steady drift in the total shows an external force such as friction; its size is the slope of that line, since ΣF_ext = dP/dt.

In three dimensions the same law holds, but here you only reason about it qualitatively. For example, an object at rest that splits into two pieces must send them in exactly opposite directions.

## Common misconceptions

- **"Momentum is conserved, so each object keeps its momentum."** Only the **total** is constant. Individual momenta change by equal and opposite amounts.
- **"Momentum is conserved only in some collisions."** In collisions it is the **kinetic energy** that may or may not be conserved (Topic 4.4). For an isolated system, momentum is always conserved.
- **Adding speeds instead of signed velocities.** Momentum is a vector. In one dimension, a leftward velocity is negative.
- **Using P = constant when an external force acts.** Check ΣF_ext for your chosen system first. Use ΔP = J_ext if it is not zero.
- **Conserving the wrong component.** In the sandbag example, P_x is conserved but P_y is not.
- **"An explosion changes the center-of-mass velocity."** Internal forces cannot change v_cm.
- **Comparing states long after a collision.** External forces have had time to act. Compare just before with just after.

## Where this leads

Topic 4.4, [Elastic and Inelastic Collisions](/advanced-course-resources/physics-c-mechanics/4-4-elastic-inelastic-collisions-study-guide/), keeps momentum conservation and adds the question of what happens to kinetic energy. In Unit 5 the same reasoning about internal and external influences returns for rotation. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/4-3-conservation-linear-momentum-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/4-3-conservation-linear-momentum-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/4-3-conservation-linear-momentum-checklist/). If impulse is still shaky, go back to [Topic 4.2](/advanced-course-resources/physics-c-mechanics/4-2-change-momentum-impulse-study-guide/).
