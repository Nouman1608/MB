---
title: "AQA A-Level Mathematics: S: Moments (7357) -- Revision Notes"
seoTitle: "AQA A-Level Maths 7357 Moments Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "S: Moments"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 20
syllabusTopics:
  - qualification: "a-level"
    topic: "s-moments-aqa-alevel-maths"
description: "Condensed notes on moments for AQA A-level Maths (7357) Section S: rigid-body equilibrium, tilting, non-uniform rods, hinges and ladders, with a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-06
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---

These notes condense **Section S: Moments (S1)** of the AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams from June 2018 onwards. The specification lists Section S under **Paper 2**, and a calculator is required in every 7357 paper. For full explanations and six worked examples, use the [Moments study guide](/resources/aqa-a-level-mathematics-moments/).

Practise afterwards with the [Moments practice questions](/resources/aqa-a-level-mathematics-moments-practice/). Course hub: [/boards/aqa/a-level/mathematics/](/boards/aqa/a-level/mathematics/). Checklist: [/checklists/aqa/a-level/mathematics/](/checklists/aqa/a-level/mathematics/). Check your gaps with the [free 10-minute diagnostics](/diagnostics/).

## S1 in one line

The specification says: **Understand and use moments in simple static contexts.** In practice that means turning effects of forces on rods, beams, planks, hinged rods and ladders that are at rest.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--02-resultant-moment.webp" width="900" height="1050" alt="A 4 m light rod is pivoted 1.5 m from A with downward forces 30 N at A, 10 N at C and 18 N at B. Moments about P are 45 N m anticlockwise against 15 + 45 = 60 N m clockwise, a resultant of 15 N m clockwise." loading="lazy">
  <figcaption>Add the moments in one sense and subtract those in the other to find which way the rod turns.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--03-beam-two-supports.webp" width="900" height="1100" alt="A 6 m uniform beam of 40 kg rests on supports 1 m and 4.5 m from A with a 30 kg child at 5.5 m. Moments about C remove R_C and give R_D = 602 N; resolving vertically gives R_C = 84 N." loading="lazy">
  <figcaption>Take moments about a support so one unknown reaction drops out, then resolve vertically for the other.</figcaption>
</figure>


## Definitions

| Term | Meaning |
|---|---|
| Moment of F about O | F × perpendicular distance from O to the line of action of F |
| Unit | newton metre, N m |
| Sense | clockwise or anticlockwise; always state it |
| Resultant moment | sum of moments in one sense minus the sum in the other |
| Line of action | the line along which a force acts, extended both ways |
| Rigid body | an object that keeps its shape; distances along it are fixed |
| Centre of mass | the point where the weight of the body acts |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--07-centre-of-mass-particles.webp" width="900" height="1260" alt="Particles of 4 kg at (-1, 2), 1 kg at (3, 5) and 3 kg at (2, -3) have sum m = 8, sum mx = 5 and sum my = 4. The centre of mass G is at (0.625, 0.5), marked on the axes." loading="lazy">
  <figcaption>The centre of mass is the mass-weighted average of the positions.</figcaption>
</figure>


## Key results

| Situation | Result |
|---|---|
| Force at right angles, distance d | moment = F d |
| Force at angle θ to the rod, distance d along rod | moment = F d sin θ |
| Force whose line of action passes through O | moment = 0 |
| Rigid body in equilibrium | resultant force = 0 **and** resultant moment about any point = 0 |
| Beam about to tilt about support D | reaction at the other support = 0 |
| Weight of a uniform rod | acts at the midpoint |
| Smooth contact | reaction perpendicular to the surface, no friction |
| Rough contact | friction F ≤ μR; F = μR only in limiting equilibrium |

Appendix B of the specification lists formulae you must recall. For mechanics it includes weight = mass × g and F ≤ μR, both used in almost every moments question.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--01-moment-of-a-force.webp" width="900" height="860" alt="A 24 N force acts at A on a 2.5 m rod OA at 40 degrees to the rod. The perpendicular distance from O to the line of action is 2.5 sin 40 = 1.61 m, and F sin theta turns the rod while F cos theta passes through O. Moment = 24 x 2.5 x sin 40 = 38.6 N m anticlockwise." loading="lazy">
  <figcaption>Only the part of the force at right angles to the rod turns it: moment = F d sin theta.</figcaption>
</figure>


## Modelling words

- **Light**: no weight.
- **Uniform**: weight at the midpoint.
- **Non-uniform**: weight at an unknown point; find it with moments.
- **Particle**: a person or load treated as a point.
- **Rigid**: does not bend.
- **Smooth / rough**: no friction / friction acts.

These come from OT3.5 (understand and use modelling assumptions). The [Overarching themes guide](/resources/aqa-a-level-mathematics-overarching-themes/) covers the modelling cycle.

Related mechanics notes: [Forces and Newton's laws](/resources/aqa-a-level-mathematics-forces-and-newtons-laws-revision-notes/) (resolving, friction) and [Kinematics](/resources/aqa-a-level-mathematics-kinematics-revision-notes/).

## Method in steps: rigid body in equilibrium

    1. Draw a clear diagram. Mark every force: weights, reactions,
       tensions, friction, hinge components.
    2. Put each weight at the right point (midpoint if uniform).
    3. Take moments about the point where the most unknowns act.
    4. Resolve vertically and horizontally for any remaining unknowns.
    5. Check with moments about a second point if time allows.

## Method in steps: on the point of tilting

    1. Identify the support it tilts about (call it D).
    2. Set the reaction at the other support to zero.
    3. Take moments about D.
    4. Solve for the unknown mass, distance or force.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--04-point-of-tilting.webp" width="900" height="1060" alt="The beam is about to tilt about D, so R_C = 0. Moments about D give 40g x 1.5 = Mg x 1.5, so M = 40 kg; a number line shows the beam stays level below 40 kg and tilts above it. The 30 kg child would need to stand 6.5 m from A, beyond the 6 m beam." loading="lazy">
  <figcaption>When a beam is about to tilt about one support, the reaction at the other support is zero.</figcaption>
</figure>


## Method in steps: ladders

    1. Smooth wall: one horizontal reaction S.
    2. Rough ground: normal reaction R (up) and friction F (towards the wall).
    3. Resolve vertically: R = total weight.
    4. Resolve horizontally: F = S.
    5. Moments about the foot: S × (height of top) = weights × (horizontal distances).
    6. If about to slip, F = μR; otherwise F ≤ μR.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--06-ladder-smooth-wall.webp" width="900" height="1120" alt="A 5 m, 18 kg uniform ladder rests at 70 degrees against a smooth wall. Moments about A use the horizontal arm 2.5 cos 70 for the weight and the vertical arm 5 sin 70 for the wall reaction, giving S = 32.1 N. With R = 176.4 N, mu = 0.182." loading="lazy">
  <figcaption>Weight acts at a horizontal distance, the wall reaction at a vertical height: cos and sin must not be swapped.</figcaption>
</figure>


## Small worked reminders

**Plank with an overhang load.** A uniform plank AB, 5 m long and of mass 12 kg, rests on supports at A and at C, where AC = 4 m. A 6 kg load sits at B. With g = 9.8 m s⁻²:

    Moments about A:  R_C × 4 = 12g × 2.5 + 6g × 5 = 60g
    R_C = 15g = 147 N
    R_A = 18g − 15g = 3g = 29.4 N

**Angled force.** A 40 N force acts at 50° to a rod, 0.9 m from a hinge:

    moment = 40 × 0.9 × sin 50° = 27.6 N m (3 s.f.)

**Hinge with a vertical string.** A uniform rod AB, 2 m long and of mass 6 kg, is hinged at A and held horizontal by a vertical string at B:

    Moments about A:  T × 2 = 6g × 1
    T = 3g = 29.4 N
    Hinge: V + T = 6g, so V = 3g = 29.4 N upwards, and H = 0

With a vertical string there is no horizontal force at all. An angled string gives the hinge a horizontal component too.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--05-hinged-rod.webp" width="900" height="1000" alt="A 1.8 m, 4 kg rod is hinged at A and held horizontal by a string at 40 degrees to the rod, with a 2 kg particle 1.5 m from A. Moments about A give T = 55.9 N; resolving gives H = 42.8 N and V = 22.9 N, a hinge force of 48.5 N at 28.1 degrees above the horizontal." loading="lazy">
  <figcaption>Taking moments about the hinge removes both hinge components, leaving the tension to find first.</figcaption>
</figure>


## Choosing where to take moments

| Unknowns in the problem | Take moments about |
|---|---|
| Two support reactions | one support (the other reaction is then found by resolving) |
| A hinge force and a tension | the hinge |
| Ladder: ground reaction, friction, wall reaction | the foot of the ladder |
| Beam about to tilt | the support it tilts about |
| Position of an unknown centre of mass | the end you measure from, or a support |

A second moments equation, about a different point, can replace the resolving step. It is also the quickest check on your answers.

## Must-know distinctions

- **Particle vs rigid body:** a particle needs only resultant force zero. A rigid body also needs resultant moment zero.
- **Distance along the rod vs perpendicular distance:** they are equal only when the force is at right angles to the rod.
- **Horizontal vs vertical distance on an inclined rod:** a vertical force (weight) uses the horizontal distance, d cos θ, where θ is the rod's angle to the horizontal. A horizontal force (smooth wall) uses the vertical distance, d sin θ.
- **Uniform vs non-uniform:** never assume the midpoint for a non-uniform rod.
- **F = μR vs F ≤ μR:** equality only when slipping is about to happen.
- **Tilting vs slipping:** tilting means a reaction becomes zero; slipping means friction reaches μR.

## Quick self-test

1. What is the SI unit of a moment?
2. Find the moment of an 18 N force at a perpendicular distance of 25 cm from a point.
3. A 50 N force acts 1.2 m along a rod from a pivot, at 30° to the rod. Find its moment about the pivot.
4. State the two conditions for a rigid body to be in equilibrium.
5. Where does the weight of a uniform rod of length 1.5 m act?
6. A child of mass 28 kg sits 1.5 m from the pivot of a seesaw. How far from the pivot, on the other side, must a 35 kg child sit to balance it? Treat the seesaw as uniform and pivoted at its centre.
7. A light rod AB of length 3 m rests on supports at A and B. A 60 N load hangs 1 m from A. Find both reactions.
8. A plank is about to tilt about support D. What is the reaction at the other support?
9. A non-uniform rod AB of length 2 m and weight 40 N has its centre of mass 0.8 m from A. It rests on supports at A and B. Find both reactions.
10. A ladder rests against a smooth vertical wall. In which direction does the wall push on the ladder?
11. Why do you usually take moments about a hinge?

### Answers

1. The newton metre, **N m**.
2. 18 × 0.25 = **4.5 N m**.
3. 50 × 1.2 × sin 30° = **30 N m**.
4. Resultant force is zero, **and** resultant moment about any point is zero.
5. At its midpoint, **0.75 m** from either end.
6. 28g × 1.5 = 35g × x, so x = **1.2 m**.
7. Moments about A: R_B × 3 = 60 × 1, so **R_B = 20 N** and **R_A = 40 N**.
8. **Zero**: the plank is just losing contact there.
9. Moments about A: R_B × 2 = 40 × 0.8, so **R_B = 16 N** and **R_A = 24 N**.
10. **Horizontally**, perpendicular to the wall, away from it.
11. The hinge force has unknown components; their moments about the hinge are zero, so they drop out.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--09-lamina-hanging-freely.webp" width="900" height="1002" alt="A right-angled triangle ABC with AB = 12 cm and BC = 9 cm hangs freely from A. G is at (3, 4) with B at the origin and must lie vertically below A, so AG is 3 across and 8 down. The angle between AB and the vertical has tan = 3/8, giving 20.6 degrees." loading="lazy">
  <figcaption>A freely suspended lamina settles with its centre of mass directly below the suspension point.</figcaption>
</figure>


## Where marks are usually lost

- Multiplying by the distance along the rod when the force is at an angle; you need d sin θ.
- Swapping sin and cos for the distances on a ladder or an inclined rod.
- Forgetting the weight of the rod itself when it is not described as light.
- Placing a non-uniform rod's weight at the midpoint.
- Not setting the far reaction to zero in a tilting question, or setting the wrong one to zero.
- Writing F = μR when the ladder is not stated to be about to slip.
- Leaving the hinge force as a single vertical force when a string pulls at an angle.
- Dropping the direction in a "magnitude and direction" answer.
- Using centimetres in a moment and giving an answer 100 times too large.
- Rounding a tension early, then using it to find a reaction.

## Frequently asked questions

**What are the conditions for a rigid body to be in equilibrium?**
The resultant force is zero and the resultant moment about any point is zero. A particle only needs the first condition.

**What is the unit of a moment?**
The moment of a force is measured in newton metres (N m), so distances must be in metres. Using centimetres gives an answer 100 times too large.

**Where should you take moments about?**
Take moments about the point where the most unknown forces act, such as a hinge, a support or the foot of a ladder, so their moments are zero and drop out.

**What is the difference between tilting and slipping?**
Tilting means a support reaction becomes zero. Slipping means friction reaches its limiting value μR.

**Which distances do you use for forces on a ladder?**
A vertical force such as weight uses the horizontal distance, d cos θ, and a horizontal force such as the reaction from a smooth wall uses the vertical distance, d sin θ, where θ is the angle to the horizontal.

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3, 31 January 2018, for A-level exams June 2018 onwards: Section 3.20 S: Moments (S1), with Section 3.19 R: Forces and Newton's laws (R4, R6), Section 3.1.3 OT3: Mathematical modelling, and Appendix B: mathematical formulae and identities.
