---
title: "AQA A-Level Mathematics: S: Moments (7357)"
seoTitle: "AQA A-Level Maths 7357 Moments Study Guide"
resourceType: "study-guides"
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
description: "Study guide for AQA A-level Maths (7357) Section S: moments of forces, rigid bodies in equilibrium, beams on supports, tilting, hinged rods and ladders."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches **Section S: Moments (S1)** of the AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams from June 2018 onwards. The specification lists Section S under **Paper 2**, alongside vectors, quantities and units, kinematics, and forces and Newton's laws. A calculator is required in every 7357 paper.

Section S is a single statement, but it draws on most of the mechanics before it. You need resolving and friction from Section R, units from Section P, and the modelling assumptions from the overarching theme OT3.

Use this guide with the [Moments revision notes](/resources/aqa-a-level-mathematics-moments-revision-notes/) and the [Moments practice questions](/resources/aqa-a-level-mathematics-moments-practice/). The course hub is at [/boards/aqa/a-level/mathematics/](/boards/aqa/a-level/mathematics/), the printable checklist at [/checklists/aqa/a-level/mathematics/](/checklists/aqa/a-level/mathematics/), and you can find your weak spots first with the [free 10-minute diagnostics](/diagnostics/).

## What Section S covers

The specification's whole statement is: **S1: Understand and use moments in simple static contexts.** The table splits it into the skills it needs.

| Ref | What you must be able to do |
|---|---|
| S1 | Find the moment of a force about a point, with its sense (clockwise or anticlockwise) |
| S1 | Find the resultant moment of several forces about a point |
| S1 | Use the two conditions for a rigid body in equilibrium |
| S1 | Find reactions on beams and rods resting on supports, including "on the point of tilting" |
| S1 | Locate the centre of mass of a non-uniform rod from equilibrium information |
| S1 | Take moments of forces that act at an angle, then combine with resolving and friction (R4, R6) |

The unit of moment, the newton metre, belongs to Section P. The [Quantities and units study guide](/resources/aqa-a-level-mathematics-quantities-and-units-in-mechanics/) introduces it with a spanner example. This guide does not repeat that; it starts where P stops.

## Modelling assumptions you will use

OT3.5 asks you to understand and use modelling assumptions. In moments questions the words carry meaning:

| Word | What it lets you do |
|---|---|
| **rigid body** / **rod** / **beam** | The object does not bend, so distances along it stay fixed |
| **light** | Ignore the weight of the rod |
| **uniform** | The weight acts at the midpoint |
| **non-uniform** | The weight acts at an unknown point you may need to find |
| **particle** (a person, a load) | Its weight acts at a single point |
| **smooth** contact | The reaction is perpendicular to the surface; no friction |
| **rough** contact | Friction acts as well, with F ≤ μR |

The [Overarching themes guide](/resources/aqa-a-level-mathematics-overarching-themes/) covers the wider modelling cycle.

## The moment of a force

The moment of a force F about a point O measures its turning effect:

    moment = F × d

where d is the **perpendicular** distance from O to the **line of action** of the force. Give the sense as well as the size: clockwise or anticlockwise. If the line of action passes through O, the moment is zero.

**Resultant moment.** Add the moments in one sense and subtract those in the other.

**Worked example 1.** A light rod AB, 4 m long, rests horizontally on a pivot at P, where AP = 1.5 m. Vertical downward forces act: 30 N at A, 10 N at C where AC = 3 m, and 18 N at B. A is on the left. Find the resultant moment about P and say which way the rod turns.

    30 N at A:  1.5 m left of P   → 30 × 1.5 = 45 N m anticlockwise
    10 N at C:  1.5 m right of P  → 10 × 1.5 = 15 N m clockwise
    18 N at B:  2.5 m right of P  → 18 × 2.5 = 45 N m clockwise

    clockwise total = 60 N m, anticlockwise total = 45 N m
    resultant = 15 N m clockwise

The rod starts to turn clockwise, so the B end goes down.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--01-moment-of-a-force.webp" width="900" height="860" alt="A 24 N force acts at A on a 2.5 m rod OA at 40 degrees to the rod. The perpendicular distance from O to the line of action is 2.5 sin 40 = 1.61 m, and F sin theta turns the rod while F cos theta passes through O. Moment = 24 x 2.5 x sin 40 = 38.6 N m anticlockwise." loading="lazy">
  <figcaption>Only the part of the force at right angles to the rod turns it: moment = F d sin theta.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--02-resultant-moment.webp" width="900" height="1050" alt="A 4 m light rod is pivoted 1.5 m from A with downward forces 30 N at A, 10 N at C and 18 N at B. Moments about P are 45 N m anticlockwise against 15 + 45 = 60 N m clockwise, a resultant of 15 N m clockwise." loading="lazy">
  <figcaption>Add the moments in one sense and subtract those in the other to find which way the rod turns.</figcaption>
</figure>


## Equilibrium of a rigid body

A particle is in equilibrium when the resultant force is zero (R4). A rigid body needs **two** conditions:

1. The resultant force is zero (resolve in two perpendicular directions).
2. The resultant moment about **any** point is zero.

Condition 2 holds about every point, so you choose the point. Take moments about a point where an unknown force acts: that force has zero moment there and drops out of the equation.

### Beams on two supports

**Worked example 2.** A uniform beam AB has length 6 m and mass 40 kg. It rests horizontally on two supports, C and D, where AC = 1 m and AD = 4.5 m. A child of mass 30 kg stands on the beam 5.5 m from A. Take g = 9.8 m s⁻². Find the reactions at C and D.

The beam's weight, 40g N, acts at its midpoint, 3 m from A. Model the child as a particle.

    Moments about C (removes R_C):
    R_D × 3.5 = 40g × 2 + 30g × 4.5 = 215g
    R_D = 215g ÷ 3.5 = 602 N

    Resolve vertically:
    R_C + R_D = 70g = 686
    R_C = 686 − 602 = 84 N

**Check** by taking moments about D: 84 × 3.5 + 30g × 1 = 294 + 294 = 588 = 40g × 1.5. The moments balance.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--03-beam-two-supports.webp" width="900" height="1100" alt="A 6 m uniform beam of 40 kg rests on supports 1 m and 4.5 m from A with a 30 kg child at 5.5 m. Moments about C remove R_C and give R_D = 602 N; resolving vertically gives R_C = 84 N." loading="lazy">
  <figcaption>Take moments about a support so one unknown reaction drops out, then resolve vertically for the other.</figcaption>
</figure>


### On the point of tilting

As the child walks towards B, R_D grows and R_C shrinks. When the beam is **about to tilt about D**, it is just losing contact with C, so **R_C = 0**. This is the key fact in every tilting question.

**Worked example 3.** Using the beam above, how far from A can the child stand before the beam tilts? A person stands at B instead. Find the greatest mass the person can have.

    About to tilt about D, R_C = 0. Child at x m from A.
    Moments about D:  40g × (4.5 − 3) = 30g × (x − 4.5)
                      60 = 30(x − 4.5)
                      x = 6.5

6.5 m is beyond the end of the 6 m beam, so the child can stand anywhere on it, including at B, without it tilting.

    Person of mass M kg at B, R_C = 0.
    Moments about D:  40g × 1.5 = Mg × 1.5
                      M = 40

The greatest mass is **40 kg**. At exactly 40 kg the beam is in limiting equilibrium; any heavier and it tilts.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--04-point-of-tilting.webp" width="900" height="1060" alt="The beam is about to tilt about D, so R_C = 0. Moments about D give 40g x 1.5 = Mg x 1.5, so M = 40 kg; a number line shows the beam stays level below 40 kg and tilts above it. The 30 kg child would need to stand 6.5 m from A, beyond the 6 m beam." loading="lazy">
  <figcaption>When a beam is about to tilt about one support, the reaction at the other support is zero.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--09-lamina-hanging-freely.webp" width="900" height="1002" alt="A right-angled triangle ABC with AB = 12 cm and BC = 9 cm hangs freely from A. G is at (3, 4) with B at the origin and must lie vertically below A, so AG is 3 across and 8 down. The angle between AB and the vertical has tan = 3/8, giving 20.6 degrees." loading="lazy">
  <figcaption>A freely suspended lamina settles with its centre of mass directly below the suspension point.</figcaption>
</figure>


### Non-uniform rods

When the rod is non-uniform, put its weight at an unknown distance x from one end, then use moments to find x.

**Worked example 4.** A non-uniform rod AB of length 2.5 m hangs horizontally from two vertical strings, one at A and one at C, where CB = 0.5 m. The tensions are 30 N at A and 45 N at C. Find the mass of the rod and the distance of its centre of mass from A. Take g = 9.8 m s⁻².

    Resolve vertically: W = 30 + 45 = 75 N
    mass = 75 ÷ 9.8 = 7.65 kg (3 s.f.)

    Moments about A (AC = 2 m):
    45 × 2 = 75 × x
    x = 1.2 m

The centre of mass is **1.2 m from A**, not at the midpoint (1.25 m). That is consistent with the rod being non-uniform.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--08-lamina-with-hole.webp" width="900" height="1090" alt="A 12 cm by 8 cm uniform rectangle has a circular hole of radius 2 cm centred at (9, 3). Treating the hole as area -4 pi, the centre of mass is at x = 5.55 cm and y = 4.15 cm, shifted away from the hole." loading="lazy">
  <figcaption>Use areas as masses and give a hole a negative area.</figcaption>
</figure>


## Forces at an angle

When a force acts at angle θ to a rod, at distance d along the rod from O, you have two equivalent methods:

- **Perpendicular distance:** the perpendicular distance from O to the line of action is d sin θ, so the moment is F d sin θ.
- **Components:** split F into F sin θ perpendicular to the rod and F cos θ along it. The component along the rod passes through O, so its moment is zero. The moment is (F sin θ) × d.

Both give the same answer. Use whichever is clearer on the diagram.

### Hinged rods

A hinge can push or pull in any direction. Its force is unknown in size and direction, so treat it as two components: horizontal H and vertical V. Taking moments about the hinge removes both.

**Worked example 5.** A uniform rod AB, of length 1.8 m and mass 4 kg, is hinged at A to a vertical wall. It is held horizontal by a light string attached at B and to a point on the wall above A. The string makes 40° with the rod. A particle of mass 2 kg hangs from the rod 1.5 m from A. Take g = 9.8 m s⁻². Find the tension in the string and the magnitude and direction of the force at the hinge.

    Moments about A:
    T sin 40° × 1.8 = 4g × 0.9 + 2g × 1.5 = 6.6g
    T = 6.6 × 9.8 ÷ (1.8 sin 40°) = 55.9 N (3 s.f.)

    Resolve horizontally (string pulls B towards the wall):
    H = T cos 40° = 42.8 N, acting away from the wall

    Resolve vertically:
    V + T sin 40° = 6g
    V = 58.8 − 35.93... = 22.9 N upwards

    Magnitude = √(H² + V²) = 48.5 N
    Direction: tan⁻¹(V ÷ H) = 28.1° above the horizontal

Keep unrounded values in your calculator between steps. Rounding T to 55.9 before finding H and V can shift the last figure.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--05-hinged-rod.webp" width="900" height="1000" alt="A 1.8 m, 4 kg rod is hinged at A and held horizontal by a string at 40 degrees to the rod, with a 2 kg particle 1.5 m from A. Moments about A give T = 55.9 N; resolving gives H = 42.8 N and V = 22.9 N, a hinge force of 48.5 N at 28.1 degrees above the horizontal." loading="lazy">
  <figcaption>Taking moments about the hinge removes both hinge components, leaving the tension to find first.</figcaption>
</figure>


### Ladders

A ladder question combines S1 with friction (R6: limiting friction and statics). The usual model is a uniform ladder, a rough horizontal floor and a smooth vertical wall. A smooth wall gives only a normal reaction, which is horizontal.

**Worked example 6.** A uniform ladder AB, of length 5 m and mass 18 kg, rests with A on rough horizontal ground and B against a smooth vertical wall. The ladder makes 70° with the ground and is about to slip. Find the coefficient of friction.

Let R be the normal reaction at the ground, F the friction there (towards the wall) and S the reaction at the wall.

    Resolve vertically:    R = 18g = 176.4 N
    Resolve horizontally:  F = S

    Moments about A (removes R and F):
    S × 5 sin 70° = 18g × 2.5 cos 70°
    S = 32.1 N (3 s.f.)

    Limiting friction:  F = μR
    μ = 32.1... ÷ 176.4 = 0.182 (3 s.f.)

Notice the distances. The weight acts vertically, so its perpendicular distance from A is the horizontal distance, 2.5 cos 70°. The wall reaction acts horizontally, so its perpendicular distance from A is the height of B, 5 sin 70°.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--06-ladder-smooth-wall.webp" width="900" height="1120" alt="A 5 m, 18 kg uniform ladder rests at 70 degrees against a smooth wall. Moments about A use the horizontal arm 2.5 cos 70 for the weight and the vertical arm 5 sin 70 for the wall reaction, giving S = 32.1 N. With R = 176.4 N, mu = 0.182." loading="lazy">
  <figcaption>Weight acts at a horizontal distance, the wall reaction at a vertical height: cos and sin must not be swapped.</figcaption>
</figure>


## Common errors

- Using the distance along the rod for an angled force, instead of d sin θ.
- Mixing up the horizontal and vertical distances on a ladder (cos and sin swapped).
- Taking moments about a point, then also counting the force acting through that point.
- Putting a non-uniform rod's weight at the midpoint.
- Forgetting that R = 0 at the far support when a beam is about to tilt.
- Treating a hinge force as vertical without checking: a string at an angle gives the hinge a horizontal component too.
- Using F = μR when the question says nothing about limiting equilibrium. Use F ≤ μR.
- Giving the moment without its sense, or in N instead of N m.

## Next steps

- Condensed recall: [Moments revision notes](/resources/aqa-a-level-mathematics-moments-revision-notes/).
- Test yourself: [Moments practice questions](/resources/aqa-a-level-mathematics-moments-practice/).
- Units first: [Quantities and units revision notes](/resources/aqa-a-level-mathematics-quantities-and-units-in-mechanics-revision-notes/).
- Forces as vectors: [Vectors study guide](/resources/aqa-a-level-mathematics-vectors/).
- Resolving and friction: [Forces and Newton's laws study guide](/resources/aqa-a-level-mathematics-forces-and-newtons-laws/); motion: [Kinematics study guide](/resources/aqa-a-level-mathematics-kinematics/).
- Exam planning: [AQA A-level Maths exam preparation](/resources/aqa-a-level-mathematics-exam-preparation/).
- [All free 10-minute diagnostics](/diagnostics/).

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3, 31 January 2018, for A-level exams June 2018 onwards: Section 3.20 S: Moments (S1), with Section 3.19 R: Forces and Newton's laws (R4, R6) and Section 3.1.3 OT3: Mathematical modelling.
