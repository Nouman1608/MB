---
resourceId: "mb-ap-physcem-13.3-revision-notes"
title: "Induced Currents and Magnetic Forces: Revision Notes (Physics C: E&M 13.3)"
description: "One-page recap of magnetic forces on induced currents: which segments feel a force, magnetic braking, F = B²L²v/R, exponential slowing and terminal speed."
course: "physics-c-electricity-and-magnetism"
unit: 13
topics: ["13.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-13.3-study-guide"]
learningObjectives:
  - "Recall the chain from motional emf to current to magnetic force"
  - "Spot direction, segment and energy errors before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-13.3-study-guide", "mb-ap-physcem-13.3-practice", "mb-ap-physcem-13.3-checklist"]
next: "mb-ap-physcem-13.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "ℰ = BLv, I = BLv/R, F = ILB = B²L²v/R."
  - "The force on an induced current opposes the relative motion."
  - "m dv/dt = −B²L²v/R gives v = v₀e^(−t/τ), τ = mR/(B²L²)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the diagrams, derivations and worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-3-induced-currents-magnetic-forces-study-guide/). This topic is in the calculus-based course.

## Recap

- A changing flux induces a current in a conducting loop. The external field then exerts a force F = I L × B on that current.
- Only segments **inside** the field feel a force. In a uniform field, forces on opposite segments that are both inside cancel.
- By Lenz's law the force always **opposes the relative motion** (magnetic braking), whether the loop enters or leaves the field.
- No change in flux means no current and no magnetic force, even in a strong field.
- The forces can cause translational acceleration (net force) or rotational acceleration (torque).
- The force grows with speed, so the acceleration is not constant: use Newton's second law as a differential equation.

## Key relationships

| Quantity | Expression | Notes |
|---|---|---|
| Motional emf | ℰ = BLv | edge of length L, v ⊥ B |
| Induced current | I = BLv/R | R is the total resistance of the circuit |
| Magnetic force on the edge | F = ILB = B²L²v/R | opposes v |
| Power dissipated | I²R = B²L²v²/R = Fv | equals the power an agent supplies at constant v |
| Coasting (no other force) | v = v₀e^(−t/τ), τ = mR/(B²L²) | stopping distance v₀τ |
| Steady force F₀ (pull or weight) | v_T = F₀R/(B²L²); from rest v = v_T(1 − e^(−t/τ)) | falling loop: F₀ = mg |

## Assumptions behind the results

- The field is uniform inside its region and zero outside; edges are perpendicular to B and v.
- Rails and connecting wires have negligible resistance unless stated; there is no friction.
- The loop's own magnetic field is small compared with the external field (self-inductance comes in Topic 13.4).

## Mistakes to avoid

1. **Force helping the motion.** It never does; check with Lenz's law.
2. **Counting segments outside the field.** They feel no force.
3. **Constant-acceleration equations.** F depends on v, so a changes as the rod slows.
4. **"More resistance, more braking."** Larger R gives a smaller current and weaker braking.
5. **Missing energy.** Work against the magnetic force becomes thermal energy, I²R.

## Quick self-check

1. A rod is pulled at constant speed. You double the speed. By what factor does the pulling power change? *(× 4, since P = B²L²v²/R)*
2. A square loop is wholly inside a uniform field, moving sideways. What is the magnetic force on it? *(Zero: the flux is constant, so there is no current)*
3. A falling loop reaches terminal speed. You double B. What happens to v_T? *(It falls to 1/4, since v_T = mgR/(B²L²))*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/13-3-induced-currents-magnetic-forces-practice/).
