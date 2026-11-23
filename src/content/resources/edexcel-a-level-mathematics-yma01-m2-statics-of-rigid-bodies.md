---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Statics of rigid bodies"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit M2: Mechanics 2"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 6.5
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m2-mechanics-2-edexcel-alevel-maths"
    subtopic: "m2-statics-of-rigid-bodies-edexcel-alevel-maths"
description: "Edexcel IAL Maths M2 statics of rigid bodies: moments, hinge reactions, rods on pegs and ladders on rough ground, with three fully worked examples."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 5 of **Unit M2: Mechanics 2** in Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics (YMA01), Specification Issue 3: "Moment of a force" (5.1) and "Equilibrium of rigid bodies" (5.2). The guidance for 5.2 names "problems involving parallel and non-parallel coplanar forces" and "rods or ladders resting against smooth or rough vertical walls and on smooth or rough ground".

The wider M2 guide on [centres of mass and rigid body equilibrium](/resources/edexcel-ial-mathematics-centres-of-mass-and-equilibrium-of-rigid-bodies/) sets out the basic method. This page goes further into the situations that cost the most marks: hinged rods with an oblique string, rods resting on pegs, and ladders where you must decide whether equilibrium is possible at all. Condensed recall is in the [statics of rigid bodies revision notes](/resources/edexcel-a-level-mathematics-yma01-m2-statics-of-rigid-bodies-revision-notes/), and twelve exam-style questions are in the [statics of rigid bodies practice set](/resources/edexcel-a-level-mathematics-yma01-m2-statics-of-rigid-bodies-practice/).

## The two ideas the whole subtopic rests on

**The moment of a force** about a point P is the magnitude of the force multiplied by the perpendicular distance from P to the line of action of the force. There are two equally valid ways to find it when the force is not at right angles to the rod:

- multiply the force by the perpendicular distance, found with trigonometry; or
- resolve the force into components along and perpendicular to the rod. The component along the rod passes through P (if P is on the rod) and has no moment, so only the perpendicular component counts.

When a force is given in vector form, F = (X i + Y j) N acting at the point (x, y) m, the anticlockwise moment about the origin is xY − yX. This is simply the sum of the moments of the two components, each with its own sign.

**Equilibrium of a rigid body** needs two conditions at once:

1. the resultant force is zero, so the forces balance when resolved in any two directions; and
2. the sum of the moments about any point is zero.

A particle needs only the first condition. A rigid body can have zero resultant force and still turn, which is why the second condition exists. In practice this gives you up to three independent equations: two resolutions and one moments equation. Taking moments about a second point is allowed and often quicker, but it does not give a fourth independent equation.

## Modelling the forces at each contact

Most lost marks start with a missing or misdirected force, so draw the diagram before writing any equation.

| Contact | Force or forces to draw |
|---|---|
| Smooth wall | Normal reaction only, perpendicular to the wall (horizontal) |
| Rough wall | Normal reaction plus friction **along the wall** (vertical), opposing the likely motion |
| Smooth ground | Normal reaction only (vertical) |
| Rough ground | Normal reaction plus horizontal friction |
| Smooth peg or rail | Single reaction **perpendicular to the rod**, not vertical |
| Hinge or pivot | Unknown reaction: draw horizontal and vertical components, H and V |
| Light string | Tension along the string |

The modelling words also matter. "Uniform" puts the weight at the midpoint. "Non-uniform" means the centre of mass is somewhere you must find or be given. "Light" means no weight. "Rod" means the body does not bend; "plank" or "beam" are treated the same way.

**Friction.** F ≤ μR always. You may write F = μR only when the question says the body is in **limiting equilibrium**, or is **about to slip**. If a question asks you to show that a body can rest, find the friction needed and show it does not exceed μR.

## Choosing where to take moments

Take moments about the point where the most unknown forces act, because their moments vanish. For a hinged rod that is the hinge, which removes both H and V at once. For a ladder on rough ground it is usually the foot, which removes the normal reaction and the friction there. Then resolve to find what remains.

## Worked example 1: a hinged rod with an oblique string (non-parallel forces)

A uniform rod AB of length 2 m and mass 6 kg is freely hinged at A to a vertical wall. A particle of mass 4 kg hangs from B. The rod is held horizontal by a light string joining B to the point C on the wall, 1.5 m vertically above A. Find the tension and the magnitude and direction of the force at the hinge. Take g = 9.8.

The string, the rod and the wall form a 1.5, 2, 2.5 right-angled triangle, so the string makes angle θ with the rod where sin θ = 0.6 and cos θ = 0.8.

```
Moments about A:  T sin θ × 2 = 6g × 1 + 4g × 2
                  1.2 T = 14g
                  T = 114.33... = 114 N (3 s.f.)

Horizontally:     H = T cos θ = 0.8 T = 91.5 N
Vertically:       V + T sin θ = 10g
                  V = 98 − 68.6 = 29.4 N

Magnitude:        √(91.47² + 29.4²) = 96.1 N
Direction:        tan⁻¹(29.4 / 91.47) = 17.8° above the horizontal
```

The string pulls B towards the wall, so H pushes the rod away from the wall. V comes out positive, so the hinge pushes upwards. A negative answer would simply mean the component acts the other way; it is not an error.

## Worked example 2: a ladder on rough ground (limiting equilibrium)

A uniform ladder of length 5 m and mass 20 kg rests with its foot on rough horizontal ground and its top against a smooth vertical wall. The ladder makes angle θ with the ground, where tan θ = 4/3. The coefficient of friction at the ground is 0.4. A man of mass 70 kg climbs the ladder. How far up the ladder can he go before it slips?

Since tan θ = 4/3, sin θ = 0.8 and cos θ = 0.6. Let R and F be the reaction and friction at the foot, and S the reaction at the wall.

```
Vertically:    R = 90g
Limiting:      F = 0.4 × 90g = 36g
Horizontally:  S = F = 36g

Moments about the foot (x m up the ladder):
S × 5 sin θ = 20g × 2.5 cos θ + 70g × x cos θ
36g × 4     = 20g × 1.5 + 70g × 0.6x
144         = 30 + 42x
x           = 2.71 m (3 s.f.)
```

Notice that g cancels: the answer does not depend on the value of g. The ladder slips when the man is 2.71 m from the foot, a little over halfway up.

**The general result.** With no one on the ladder, the same method gives S = (W/2) cot θ and R = W, so the ladder can rest only if (1/2) cot θ ≤ μ, that is tan θ ≥ 1/(2μ). Deriving this in a "show that" question is common: keep W and the length as letters until the last line.

## Worked example 3: a rod resting on a smooth peg

A uniform rod AB of length 2a and weight W rests with A on rough horizontal ground. The rod touches a smooth peg at C, where AC = 1.5a, and makes an angle of 30° with the horizontal. The rod is about to slip. Find the coefficient of friction.

The peg reaction N is perpendicular to the rod, so it acts at 30° to the vertical.

```
Moments about A:  N × 1.5a = W × a cos 30°
                  N = W/√3
Vertically:       R + N cos 30° = W
                  R = W − W/2 = W/2
Horizontally:     F = N sin 30° = W/(2√3)
Limiting:         μ = F/R = 1/√3 = 0.577 (3 s.f.)
```

The trap is drawing N vertically. A smooth contact always pushes perpendicular to the surfaces in contact, and here the surface is the rod.

## Common mistakes

- Using the distance along the rod instead of the perpendicular distance when a weight acts on an inclined rod: the moment arm for a vertical weight is the horizontal distance.
- Assuming the hinge reaction acts along the rod. It only does so for a light rod with forces at its ends.
- Writing F = μR when the body is merely "in equilibrium".
- Drawing friction at a rough wall horizontally; it acts along the wall.
- Placing a non-uniform rod's weight at its midpoint.
- Forgetting the weight of the rod itself when a load is added.
- Rounding T early and carrying the rounded value into H and V, which can shift the third figure of the hinge reaction.

## Exam technique

- **"Find"** questions expect an equation for each step: label every equation, for example "M(A):" or "R(↑):", so method marks can be awarded even if an arithmetic slip follows.
- **"Show that"** questions give the answer. Every line must follow from the one before, with no gaps, and the final line must state the printed result.
- **"Explain why"** or **"State how you have used the modelling assumption"** questions want a short sentence linked to the force diagram: "the rod is uniform, so its weight acts at the midpoint", or "the wall is smooth, so there is no friction at the wall".
- **"Determine whether"** questions need a comparison. Find the friction required, find μR, and write a conclusion.
- When g = 9.8 has been used, give final answers to 2 or 3 significant figures.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, Unit M2, section 5 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
