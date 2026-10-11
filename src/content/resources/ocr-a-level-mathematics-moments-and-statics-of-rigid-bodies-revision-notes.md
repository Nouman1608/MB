---
title: "OCR A Level Mathematics A: Moments and statics of rigid bodies (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Moments and Statics Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Moments and statics of rigid bodies"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 136
syllabusTopics:
  - qualification: "a-level"
    topic: "mechanics-ocr-alevel-maths"
    subtopic: "moments-ocr-alevel-maths"
description: "Condensed revision notes on moments, equilibrium, beams, hinges, ladders and tilting for OCR A Level Mathematics A (H240), with a self-test and answers."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense moments and statics of rigid bodies for OCR A Level Mathematics A (H240), content references 3.04a to 3.04c of the Cambridge OCR specification, Version 3.1 (August 2026). All of 3.04 is Stage 2, so it is A Level only. For full explanations and longer worked examples, read the [study guide](/resources/ocr-a-level-mathematics-moments-and-statics-of-rigid-bodies/), then try the [practice questions](/resources/ocr-a-level-mathematics-moments-and-statics-of-rigid-bodies-practice/). Wider links: the [course hub](/boards/ocr/a-level/mathematics/), the [checklist](/checklists/ocr/a-level/mathematics/) and the [free diagnostics](/diagnostics/).

## Key facts at a glance

| Reference | Idea | Remember |
|---|---|---|
| 3.04a | Moment about a point | force × perpendicular distance, unit N m |
| 3.04a | Force at angle θ to a rod | moment = F d sin θ, where d is along the rod |
| 3.04a | Force through the point | moment is zero |
| 3.04b | Equilibrium | resultant force zero and resultant moment zero |
| 3.04c | Uniform rod | weight at the midpoint |
| 3.04c | Rectangular lamina | weight at the point of symmetry |
| 3.04c | Non-uniform rod | weight at a given point, or find the point by moments |

The specification excludes the vector nature of moments. Use clockwise and anticlockwise, with a positive sense chosen once. Problems are set with rectangular laminas and uniform or non-uniform rods only. Use g = 9.8 m s⁻² unless told otherwise.

## Moments (3.04a)

- Moment = force × shortest distance from the point to the force's line of action.
- If the force is not perpendicular to the rod, either use d sin θ or resolve the force and use the perpendicular component.
- A force can slide along its own line of action without changing its moment.
- The resultant moment is the sum of the signed moments: anticlockwise positive, clockwise negative.

**Reminder.** A force of 18 N acts at 0.5 m from O along a rod, at 60° to the rod. Moment about O = 18 × 0.5 × sin 60° = 7.79 N m (3 s.f.).

## Equilibrium (3.04b)

A rigid body in equilibrium needs both:

1. Resultant force zero: resolve horizontally and vertically.
2. Resultant moment zero about any point.

Take moments about a point that removes the most unknowns. A reaction or hinge force that acts at the chosen point has zero moment, so it does not appear in the equation.

### Method in steps

1. Draw a large diagram. Show every force: weights at the right points, reactions, tensions, friction.
2. Mark every distance from the point you will use.
3. Take moments about the point where most unknowns act.
4. Resolve vertically, and horizontally if needed.
5. Check with moments about a different point. The equation must also hold there.

## Beams and tilting (3.04c)

For a horizontal beam on two vertical supports, moments about one support find the other reaction.

**Reminder.** A uniform beam AB, 7 m, mass 28 kg, rests on supports at A and B. A particle of mass 14 kg sits 2 m from A.

```
Moments about A: R_B × 7 = 28g × 3.5 + 14g × 2 = 126g
R_B = 18g = 176.4 N
R_A = 42g − 18g = 24g = 235.2 N
```

**Tilting.** A beam on two supports is about to tilt when the reaction at the other support is zero. Set that reaction to zero and take moments about the support that remains in contact. The reaction at the working support then equals the total weight.

| Wording | What it means |
|---|---|
| "about to tilt about D" | the reaction at the other support is zero |
| "in equilibrium on both supports" | both reactions are zero or positive |
| "greatest mass without tilting" | set the other reaction to zero and solve |

## Non-uniform rods and laminas (3.04c)

- If the rod is non-uniform and the position of G is not given, call it x from one end. Set up a moments equation and solve for x.
- When the rod rests on supports at its ends, the reaction at A is W × (BG ÷ AB) and the reaction at B is W × (AG ÷ AB). The bigger reaction is at the end nearer G.
- For a rectangular lamina, the weight acts at the centre of the rectangle. Distances for moments are measured from that centre.

## Hinges (3.04c)

A hinge supplies a force of unknown direction. Split it into a horizontal component H and a vertical component V. Take moments about the hinge to find a tension or other force first. Then resolve to find H and V. If you are asked for the magnitude and direction of the hinge force, use √(H² + V²) and tan⁻¹(V ÷ H), and state the direction with respect to the horizontal.

## Ladders (3.04c)

For a uniform ladder of weight W and length L at angle θ to the ground, against a smooth vertical wall:

| Force | Value |
|---|---|
| Normal reaction at the ground, R | W (plus the weight of any person or load) |
| Wall reaction, S | found by moments about the foot |
| Friction at the ground, F | S, by resolving horizontally |

With nothing else on the ladder, moments about the foot give S × L sin θ = W × (L ÷ 2) cos θ. So S = W ÷ (2 tan θ). Friction is covered by specification item 3.03t. In limiting equilibrium F = μR, and otherwise F ≤ μR. So the smallest coefficient of friction that stops slipping is S ÷ R.

## Must-know distinctions

- Moment (N m) versus force (N). Quote the correct unit.
- Perpendicular distance versus distance along the rod.
- Equilibrium (balance) versus limiting equilibrium (about to move or tilt).
- Light rod (no weight) versus uniform rod (weight at midpoint) versus non-uniform rod (weight at a point you may need to find).

## Quick self-test

1. Find the moment of a 12 N force about a point at perpendicular distance 0.35 m from its line of action.
2. A force of 30 N acts at 25° to a rod, at 0.8 m from the end O along the rod. Find its moment about O.
3. What is the moment of a force about a point on its line of action?
4. A light rod AB, 1.2 m long, balances on a pivot 0.4 m from A. A mass of 8 kg hangs at A. Find the mass that must hang at B.
5. A uniform beam, length 5 m and mass 20 kg, rests on supports at its ends A and B. A mass of 15 kg sits 1 m from A. Find both reactions.
6. A uniform beam of length 7 m and mass 35 kg rests on supports 1 m from each end. Find the greatest mass that can be placed at one end without tilting.
7. A uniform ladder at 60° to the ground rests against a smooth vertical wall. Find the least coefficient of friction needed, as an exact value and to 3 s.f.
8. A non-uniform rod of length 2 m and mass 5 kg rests on supports at its ends. The reaction at A is 29.4 N. Find AG.
9. A uniform horizontal rod of mass 6 kg is hinged at one end and held by a vertical string at the other end. Find the tension and the hinge force.
10. Name the two requirements for a rigid body to stay in equilibrium, and say where the weight of a rectangular lamina acts.

### Answers

1. 12 × 0.35 = **4.2 N m**.
2. 30 × 0.8 × sin 25° = **10.1 N m** (3 s.f.).
3. **Zero**, because the perpendicular distance is zero.
4. 8 × 0.4 = m × 0.8, so m = **4 kg**.
5. Moments about A: R_B × 5 = 20g × 2.5 + 15g × 1 = 65g, so R_B = 13g = **127.4 N**. R_A = 35g − 13g = 22g = **215.6 N**.
6. Moments about the support near that end: m × 1 = 35 × 2.5, so m = **87.5 kg**.
7. S = W ÷ (2 tan 60°) and R = W, so μ = 1 ÷ (2√3) = √3 ÷ 6 = **0.289** (3 s.f.).
8. Total weight = 5g = 49 N, so R_B = 49 − 29.4 = 19.6 N. Moments about A: 19.6 × 2 = 49 × AG, so AG = **0.8 m**.
9. Moments about the hinge: T × L = 6g × (L ÷ 2), so T = 3g = **29.4 N**. Vertically, the hinge force is 6g − 29.4 = **29.4 N upwards**, and there is no horizontal component.
10. The resultant force is zero and the resultant moment is zero. The weight acts at the **centre of the rectangle** (its point of symmetry).

## Where marks are usually lost

- Using the length along the rod when the force is angled, instead of the perpendicular distance.
- Taking moments about a point but leaving out one of the forces, usually the weight of the rod.
- Putting the weight of a uniform rod at one end rather than its midpoint.
- Stopping after one equation when the question needs the other reaction as well, so no resolving is done.
- Writing a final moment without a unit, or a resultant moment without its sense.
- Giving the hinge force as a single component when both horizontal and vertical components exist.
- Treating friction as equal to μR on a ladder that is not in limiting equilibrium.
- Not stating the assumption (for example a uniform rod, or a smooth wall) that justifies the model.
- Rounding too early. Keep full values, then round the answer to 3 significant figures unless told otherwise.

## Official syllabus

Cambridge OCR Level 3 Advanced GCE in Mathematics A (H240), Version 3.1 (August 2026), first assessment 2018, published by OCR. Content references 3.04a to 3.04c.
