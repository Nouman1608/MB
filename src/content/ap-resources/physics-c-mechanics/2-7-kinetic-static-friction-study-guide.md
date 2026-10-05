---
resourceId: "mb-ap-physcm-2.7-study-guide"
title: "Kinetic and Static Friction: Study Guide (Physics C: Mechanics 2.7)"
description: "Calculus-based friction: kinetic friction μ_k F_N opposite relative motion, static friction up to μ_s F_N, slipping under a growing force, stacked blocks and symbolic slope results."
course: "physics-c-mechanics"
unit: 2
topics: ["2.7"]
resourceType: "study-guide"
prerequisites:
  - "Drawing free-body diagrams and choosing axes (Topic 2.2)"
  - "Applying Newton's second law along each axis (Topic 2.5)"
  - "Integrating a time-dependent acceleration with initial conditions (Topic 1.2)"
prerequisiteResources: ["mb-ap-physcm-2.6-study-guide"]
learningObjectives:
  - "Describe when kinetic friction acts, which way it points on each surface, and calculate its size as μ_k F_N"
  - "Find the normal force from Newton's second law perpendicular to the surface instead of assuming F_N = mg"
  - "Explain why static friction takes whatever value prevents slipping, up to a maximum of μ_s F_N"
  - "Test whether two surfaces slip by comparing the friction needed with the maximum available"
  - "Derive symbolic results for friction on a slope and for stacked objects, and integrate the motion after slipping starts"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Use g = 9.8 m/s², the value on the course equation table. Calculator for arithmetic and trigonometry; calculus by hand"
related: ["mb-ap-physcm-2.7-revision-notes", "mb-ap-physcm-2.7-practice", "mb-ap-physcm-2.7-checklist"]
next: "mb-ap-physcm-2.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Kinetic friction acts when surfaces slide: size μ_k F_N, direction opposite the motion of each surface relative to the other."
  - "Static friction acts when surfaces do not slide. It takes the value needed to stop slipping, with |F_f,s| ≤ μ_s F_N."
  - "Find F_N from Newton's second law perpendicular to the surface. It equals mg only in special cases."
  - "Friction does not depend on the area of contact. μ depends on the two materials, and usually μ_s > μ_k."
  - "To test for slipping: assume no slip, find the friction needed, and compare it with μ_s F_N."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 2.7?"
    answer: "They are separate courses with the same topic title and the same friction model. Physics C: Mechanics expects more symbolic derivation and combines friction with calculus, for example a pulling force that grows with time, so you integrate the acceleration after slipping begins."
  - question: "Is static friction always equal to μ_s F_N?"
    answer: "No. μ_s F_N is only the largest value static friction can reach. Below that, static friction equals whatever the other forces require for no slipping, and it can be zero."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 2.7 on kinetic and static friction. The friction model is the same. This guide is the **calculus-based** one: it leans on symbolic derivations, on objects that interact through friction, and on forces that change with time, so you integrate the motion once slipping starts. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/2-7-kinetic-static-friction-study-guide/); do not mix the two when you revise. This topic uses the free-body diagrams and Newton's second law from earlier in Unit 2, and follows [Topic 2.6, Gravitational Force](/advanced-course-resources/physics-c-mechanics/2-6-gravitational-force-study-guide/).

## Two parts of one contact force

When two surfaces touch, each pushes on the other. It helps to split that contact force into two components:

- The **normal force** F_N is the component **perpendicular** to the surface. It points **away from** the surface that exerts it.
- The **friction force** F_f is the component **parallel** to the surface.

The two are linked, but F_N is not a fixed number. You find it from Newton's second law along the axis perpendicular to the surface. On a level floor with no other vertical forces, F_N = mg. Push down on the object, pull up on it, tilt the surface or accelerate the floor, and F_N changes. Friction changes with it.

**Background (not assessed).** Real surfaces are rough on a tiny scale. They touch only at many small high points. Pressing harder squashes more high points into contact, so the true contact area grows in proportion to the load. That is one reason friction depends on F_N but **not** on the apparent area of contact.

## Kinetic friction: surfaces sliding

**Kinetic friction** acts when two surfaces in contact **move relative to each other**. Its direction on each surface is opposite to that surface's motion **relative to the other surface**. Its size is

**F_f,k = μ_k F_N**

- μ_k is the **coefficient of kinetic friction**. It has no unit, and it depends on the materials of both surfaces (and their condition, such as wet or dry).
- In this model, F_f,k does not depend on the area of contact or on the sliding speed.

Read the direction rule carefully. It says "relative to the other surface", not "opposite to the motion". If a box slides backwards on a truck bed that is speeding up, the box may be moving **forwards** relative to the road while kinetic friction on it also points **forwards**. What matters is the box's motion relative to the bed.

Friction forces come in Newton's third-law pairs. If the floor exerts friction on a block towards −x, the block exerts friction on the floor towards +x, with the same size.

## Static friction: no sliding

**Static friction** may act between surfaces that are **not** moving relative to each other. It is a responsive force. It takes **whatever size and direction** is needed to stop the surfaces from slipping, up to a limit:

**|F_f,s| ≤ μ_s F_N**, so the maximum is **F_f,s,max = μ_s F_N**

- "Slipping" or "sliding" means the two surfaces move relative to each other.
- μ_s is the **coefficient of static friction**. For a given pair of surfaces, μ_s is **usually larger** than μ_k. That is why it takes a bigger push to start an object moving than to keep it moving.
- Static friction can be zero, for example on a block resting on a level floor with no horizontal push.

### How to handle static friction in a problem

1. **Assume no slipping.** Treat the surfaces as moving together (or both at rest).
2. Use Newton's second law to find the friction F_f,s **needed** for that.
3. Find F_N and compute the **maximum** μ_s F_N.
4. If |F_f,s needed| ≤ μ_s F_N, the assumption holds and the answer from step 2 stands.
5. If not, the surfaces slip. Start again with kinetic friction μ_k F_N, pointing opposite the relative motion.

Never write F_f,s = μ_s F_N unless the problem tells you slipping is just about to start.

## Friction on a slope, symbolically

Take a block of mass m on a slope at angle θ. Use **+x down the slope** and **+y perpendicular to the slope, away from it**. Perpendicular to the slope there is no acceleration, so

F_N − mg cos θ = 0, which gives **F_N = mg cos θ**.

**Block at rest.** Along the slope, mg sin θ − F_f,s = 0, so static friction points **up the slope** with size mg sin θ. No slipping requires mg sin θ ≤ μ_s mg cos θ, which simplifies to

**tan θ ≤ μ_s**

The mass cancels, so a heavy block and a light block of the same material start to slip at the same angle.

**Block sliding down.** Now kinetic friction points up the slope: ma_x = mg sin θ − μ_k mg cos θ, so

**a_x = g(sin θ − μ_k cos θ)**

Check the limits. With μ_k = 0 you get g sin θ, the frictionless result. With θ = 90° you get g, free fall, because the normal force (and so friction) vanishes on a vertical wall with nothing pressing the block against it.

## Worked example 1: a push that grows with time

**Question.** Take **+x in the direction of the push**. A 4.0 kg block rests on a level floor. For the block and floor, μ_s = 0.45 and μ_k = 0.30. From t = 0 a horizontal push P = (6.0 N/s)t is applied. (a) Find the friction force at t = 1.0 s. (b) Find when the block starts to slide. (c) Find a_x(t) once it slides. (d) Find the block's velocity at t = 5.0 s.

1. **Normal force.** Vertically, F_N − mg = 0, so F_N = 4.0 × 9.8 = **39.2 N**.
2. **Limits.** Maximum static friction: μ_s F_N = 0.45 × 39.2 = **17.64 N**. Kinetic friction: μ_k F_N = 0.30 × 39.2 = **11.76 N**.
3. **(a)** At t = 1.0 s, P = 6.0 N. Assume no slipping: friction must balance the push, so F_f,s = **6.0 N towards −x**. This is below 17.64 N, so the assumption holds.
4. **(b)** Slipping starts when the needed friction reaches the maximum: 6.0t = 17.64, so **t = 2.94 s** (2.9 s to 2 s.f.).
5. **(c)** After that, kinetic friction 11.76 N acts towards −x. Newton's second law: 4.0a_x = 6.0t − 11.76, so **a_x = 1.5t − 2.94** (m/s², t in s). Just after slipping starts, a_x = 1.5 × 2.94 − 2.94 = 1.47 m/s². The acceleration jumps from 0 to about 1.5 m/s², because friction drops from 17.64 N to 11.76 N.
6. **(d)** The block starts from rest at t = 2.94 s. Integrate:
   v_x = ∫ from 2.94 to t of (1.5t − 2.94) dt = 0.75(t² − 2.94²) − 2.94(t − 2.94).
   At t = 5.0 s: v_x = 0.75(25 − 8.644) − 2.94 × 2.06 = 12.27 − 6.06 = **6.2 m/s**.

**Check.** Do not use v_x = a_x t: the acceleration is not constant. The lower limit of the integral is the moment slipping begins, not t = 0, because before that the velocity stays zero.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="pcm27-ft-title pcm27-ft-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm27-ft-title">Friction force and applied push against time for Worked example 1</title>
<desc id="pcm27-ft-desc">Force in newtons from 0 to 30 against time in seconds from 0 to 5. A dashed straight line shows the push rising from 0 at t = 0 to 30 N at t = 5 s. A solid line shows the friction force. From 0 to 2.94 s the solid line lies on the dashed line, rising to 17.64 N, labelled static friction equals push. At 2.94 s the solid line drops vertically to 11.76 N and then stays flat to 5 s, labelled kinetic friction. A horizontal dotted line at 17.64 N is labelled maximum static friction.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M154 290 V50 M238 290 V50 M322 290 V50 M406 290 V50 M490 290 V50"/>
<path d="M70 210 H500 M70 130 H500 M70 50 H500"/>
</g>
<path d="M70 290 H515 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="154" y="308">1</text><text x="238" y="308">2</text><text x="322" y="308">3</text><text x="406" y="308">4</text><text x="490" y="308">5</text>
<text x="280" y="330" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="214">10</text><text x="62" y="134">20</text><text x="62" y="54">30</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">force (N)</text>
<path d="M70 290 L490 50" stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="7 5" fill="none"/>
<path d="M70 148.9 H500" stroke="#1d2b44" stroke-width="1" stroke-dasharray="1 3" fill="none"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="3" points="70,290 317,148.9 317,195.9 490,195.9"/>
<circle cx="317" cy="148.9" r="4" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="395" y="78" font-size="12" fill="#1d2b44">push P = 6.0t (dashed)</text>
<text x="120" y="140" font-size="12" fill="#1d2b44">max static 17.64 N (dotted)</text>
<text x="110" y="250" font-size="12" fill="#1d2b44">static friction = push</text>
<text x="360" y="216" font-size="12" fill="#1d2b44">kinetic friction 11.76 N</text>
<text x="326" y="170" font-size="12" fill="#1d2b44">slips at 2.94 s</text>
</svg>
<figcaption>Figure 1. Friction on the block in Worked example 1, with the push for comparison. Static friction matches the push until it reaches μ_s F_N. Then the block slips and friction drops to the constant kinetic value μ_k F_N, while the push keeps growing.</figcaption>
</figure>

## Worked example 2: stacked blocks and relative motion

**Question.** Take **+x to the right**. A 1.5 kg block A sits on top of a 3.5 kg block B, which rests on a frictionless floor. Between A and B, μ_s = 0.40 and μ_k = 0.25. A horizontal force P to the right acts on **B only**. (a) Find the largest P for which the blocks move together. (b) Find the acceleration of each block when P = 30 N.

The only horizontal force on A is friction from B. So friction from B on A must point **+x**: it is what drags A forwards. By Newton's third law, friction from A on B points **−x**.

<figure>
<svg viewBox="0 0 560 250" role="img" aria-labelledby="pcm27-fbd-title pcm27-fbd-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm27-fbd-title">Free-body diagrams for stacked blocks A and B</title>
<desc id="pcm27-fbd-desc">Left: block A with three arrows. Weight m_A g points down, normal force from B points up, and friction from B on A points right. Right: block B with five arrows. Weight m_B g points down, normal force from the floor points up, the push of A on B points down, the push P points right, and friction from A on B points left.</desc>
<defs><marker id="pcm27-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="250" fill="#ffffff"/>
<rect x="90" y="100" width="80" height="50" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="130" y="130" font-size="14" fill="#1d2b44" text-anchor="middle">A</text>
<g stroke="#1d2b44" stroke-width="2" marker-end="url(#pcm27-ah)">
<path d="M130 150 V210"/><path d="M130 100 V45"/><path d="M170 125 H235"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="138" y="215">m_A g</text><text x="138" y="45">F_N from B</text><text x="176" y="113">friction from B (+x)</text>
</g>
<rect x="350" y="95" width="110" height="60" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="405" y="130" font-size="14" fill="#1d2b44" text-anchor="middle">B</text>
<g stroke="#1d2b44" stroke-width="2" marker-end="url(#pcm27-ah)">
<path d="M385 155 V215"/><path d="M425 95 V35"/><path d="M385 40 V93"/><path d="M460 125 H530"/><path d="M350 125 H290"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="393" y="232">m_B g</text><text x="433" y="38">F_N from floor</text><text x="300" y="30">push of A on B</text><text x="490" y="115">P</text><text x="322" y="148" text-anchor="end">friction from A (−x)</text>
</g>
</svg>
<figcaption>Figure 2. Free-body diagrams. Friction from B on A and friction from A on B are a third-law pair: equal in size, opposite in direction. Arrow lengths are not to scale.</figcaption>
</figure>

1. **(a)** For A: F_N = m_A g = 14.7 N, so the largest static friction is 0.40 × 14.7 = 5.88 N. The largest acceleration A can have is a_max = μ_s F_N / m_A = **μ_s g** = 3.92 m/s².
2. Moving together, the whole system (A + B) has only P as a horizontal external force. So P_max = (m_A + m_B) μ_s g = 5.0 × 3.92 = **19.6 N** (20 N to 2 s.f.).
3. **(b)** Test the no-slip assumption at P = 30 N. Together, a = 30 ÷ 5.0 = 6.0 m/s². A would need 1.5 × 6.0 = 9.0 N of friction, but only 5.88 N is available. So **A slips** on B.
4. B moves to the right faster than A, so A moves **left relative to B**. Kinetic friction on A therefore points **+x**, with size μ_k m_A g = 0.25 × 14.7 = 3.675 N.
5. Block A: a_A = 3.675 ÷ 1.5 = **2.45 m/s²** (= μ_k g), to the right.
6. Block B: 3.5a_B = 30 − 3.675, so a_B = **7.5 m/s²** to the right.

**Check.** a_B > a_A, which agrees with B sliding forwards under A. Both blocks move to the right relative to the floor, yet friction on B points left. Friction opposes **relative** motion, not motion.

## Common misconceptions

- **"F_N = mg always."** Find F_N from the forces perpendicular to the surface. It changes on slopes, with angled pulls, and in accelerating lifts.
- **"Static friction = μ_s F_N."** That is only the maximum. Static friction equals what is needed (Worked example 1, part (a)).
- **"Friction always opposes motion."** It opposes the motion of one surface **relative to the other**. Friction is what makes block A in Worked example 2 speed up.
- **"Bigger contact area, more friction."** In this model, friction does not depend on the area of contact.
- **"μ_k is larger, because moving objects rub more."** For a given pair of surfaces μ_s is usually the larger one.
- **"Use a = constant equations after slipping."** If the applied force changes with time, the acceleration does too. Integrate from the moment slipping starts.
- **Forgetting the third-law partner.** Friction on A from B has an equal and opposite partner on B from A.

## Where this leads

Next, [Topic 2.8, Spring Forces](/advanced-course-resources/physics-c-mechanics/2-8-spring-forces-study-guide/) adds a force that depends on position. Topic 2.9, Resistive Forces, then treats drag that depends on **velocity**, which is different from the constant kinetic friction here. In Unit 3 you will find the work done by friction, and in rolling (Unit 6) static friction acts at the contact point. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/2-7-kinetic-static-friction-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/2-7-kinetic-static-friction-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/2-7-kinetic-static-friction-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
