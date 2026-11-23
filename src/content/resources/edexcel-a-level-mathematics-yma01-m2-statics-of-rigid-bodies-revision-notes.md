---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Statics of rigid bodies -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Edexcel IAL Maths M2 statics of rigid bodies: moments, equilibrium conditions, contact forces, ladders, pegs, hinges and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for Unit M2, section 5: "Moment of a force" and "Equilibrium of rigid bodies", including parallel and non-parallel coplanar forces and rods or ladders against smooth or rough walls and ground. For full explanations and worked examples, use the [statics of rigid bodies study guide](/resources/edexcel-a-level-mathematics-yma01-m2-statics-of-rigid-bodies/).

## Moments in one box

```
moment about P = force × perpendicular distance from P to the line of action
units: N m
force F at angle α to a rod, applied d from P along the rod:  moment = F d sin α
force X i + Y j at (x, y), about the origin:                  moment = xY − yX (anticlockwise +)
```

A vertical weight on a rod inclined at θ to the horizontal has moment arm (distance along rod) × cos θ about a point on the rod. A horizontal force on the same rod has arm (distance along rod) × sin θ.

## Equilibrium conditions

- Resultant force zero: resolve in two perpendicular directions (usually horizontal and vertical).
- Sum of moments zero about **any** point.
- That gives at most three independent equations, so at most three unknowns can be found from one body.

**Order of work:** diagram → moments about the point with the most unknowns → resolve → friction inequality or equation → answer to 2 or 3 s.f. if g = 9.8 was used.

## Key terms

| Term | Meaning in the model |
|---|---|
| Rigid body | Does not bend or stretch; forces can act at different points |
| Uniform | Weight acts at the geometric centre (midpoint of a rod) |
| Non-uniform | Centre of mass not at the midpoint; position given or to be found |
| Light | Mass ignored; no weight drawn |
| Smooth | No friction; reaction perpendicular to the surface |
| Rough | Friction acts; F ≤ μR |
| Limiting equilibrium | On the point of moving; F = μR at every rough contact that is about to slip |
| Coplanar forces | All forces in one plane, so moments are taken about a point in that plane |
| Hinge reaction | Unknown force at a hinge, found as components H and V |
| Peg reaction | Perpendicular to the rod at the point of contact |

## Contact forces at a glance

- **Smooth wall:** horizontal reaction only.
- **Rough wall:** horizontal reaction and **vertical** friction.
- **Rough ground:** vertical reaction and **horizontal** friction.
- **Smooth peg:** one reaction perpendicular to the rod.
- **Hinge:** H and V, directions guessed; a negative answer reverses the guess.

## Parallel forces: tilting

A beam on two supports is **about to tilt** about one support when the reaction at the other support is zero. Set that reaction to zero and take moments about the tilting support.

**Mini example.** A uniform plank PQ of length 4 m and weight 200 N rests on supports at P and at R, where PR = 3 m. How far beyond R can a child of weight 400 N stand before the plank tilts? Reaction at P is zero; moments about R: 400d = 200 × 1, so d = 0.5 m.

## Ladders: standard results

For a uniform ladder of weight W at angle θ to the horizontal, with a smooth wall and rough ground (coefficient μ) and no one on it:

```
R = W        S = F = (W/2) cot θ        equilibrium possible only if tan θ ≥ 1/(2μ)
```

With **both** contacts rough (μ₁ at the ground, μ₂ at the wall) and the ladder about to slip:

```
tan θ = (1 − μ₁μ₂) / (2μ₁)
```

Derive these in the exam; quote them only to check an answer.

## Hinged rods

- Moments about the hinge first: H and V both disappear.
- An oblique string at angle α to the rod contributes T sin α × (distance from hinge) to the moment.
- Magnitude of hinge force: √(H² + V²). Direction: tan⁻¹(V/H) to the horizontal, stating above or below.

## Exam traps

- Using the length along the rod as the moment arm for a vertical force on an inclined rod.
- Drawing the peg reaction vertically.
- Friction at the wall drawn horizontally.
- Writing F = μR when the question says only "rests in equilibrium".
- Forgetting that friction can act either way: on a ladder, friction at the foot points **towards** the wall when the ladder is about to slide out.
- Dropping the weight of the rod when a particle is added.
- Not stating a conclusion for "determine whether the ladder slips": compare the friction needed with μR.

## Self-test

1. Define the moment of a force about a point.
2. A force (2i + 5j) N acts at the point (3, −1) m. Find its moment about the origin, stating the sense.
3. What are the two conditions for a rigid body to be in equilibrium?
4. In which direction does friction act at a rough vertical wall?
5. In which direction does a smooth peg push on a rod?
6. A uniform rod of length 2 m and weight 30 N is at 60° to the horizontal. Find the moment of its weight about its lower end.
7. When may you write F = μR?
8. Why do you usually take moments about a hinge first?
9. A uniform ladder rests against a smooth wall on rough ground with μ = 0.5. Find the least angle with the horizontal at which it can rest.
10. A beam rests on two supports. What condition tells you it is about to tilt about one of them?
11. A hinge reaction has components H = 12 N and V = 5 N. Find its magnitude.
12. What does "uniform" allow you to assume about a rod?

**Answers:** 1. The force multiplied by the perpendicular distance from the point to the force's line of action. 2. xY − yX = 3(5) − (−1)(2) = 17 N m, anticlockwise. 3. Resultant force zero, and sum of moments about any point zero. 4. Vertically, along the wall. 5. Perpendicular to the rod. 6. 30 × 1 × cos 60° = 15 N m. 7. Only in limiting equilibrium, when the body is on the point of slipping. 8. Both unknown hinge components pass through the hinge, so they have no moment and drop out. 9. tan θ ≥ 1/(2 × 0.5) = 1, so θ = 45°. 10. The reaction at the other support is zero. 11. √(144 + 25) = 13 N. 12. Its weight acts at its midpoint.
