---
resourceId: "mb-ap-physcm-4.4-study-guide"
title: "Elastic and Inelastic Collisions: Study Guide (Physics C: Mechanics 4.4)"
description: "Classifying collisions by what happens to kinetic energy: elastic, inelastic and perfectly inelastic cases, where the lost energy goes, and solving one- and two-dimensional collisions."
course: "physics-c-mechanics"
unit: 4
topics: ["4.4"]
resourceType: "study-guide"
prerequisites:
  - "Conservation of momentum for a system, in components (Topic 4.3)"
  - "Kinetic energy K = ½mv² and energy transfer by nonconservative forces (Unit 3)"
prerequisiteResources: ["mb-ap-physcm-4.3-study-guide"]
learningObjectives:
  - "Classify a collision as elastic, inelastic or perfectly inelastic by comparing the system's total kinetic energy before and after"
  - "Explain why individual kinetic energies can change in an elastic collision while the total stays the same"
  - "Describe where kinetic energy goes in an inelastic collision and which forces transform it"
  - "Find the common velocity after a perfectly inelastic collision and the kinetic energy transformed, in one or two dimensions"
  - "Solve a one-dimensional elastic collision using momentum conservation and kinetic energy conservation together"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Calculator for arithmetic and trigonometry. Answers to 2 significant figures unless told otherwise; energies are sometimes given in mJ (1 mJ = 0.001 J)"
related: ["mb-ap-physcm-4.4-revision-notes", "mb-ap-physcm-4.4-practice", "mb-ap-physcm-4.4-checklist"]
next: "mb-ap-physcm-4.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Momentum is conserved across every collision of an isolated system. Kinetic energy decides the type."
  - "Elastic: total kinetic energy after equals total before, though each object's share can change."
  - "Inelastic: total kinetic energy decreases. Nonconservative forces during contact turn some of it into internal energy, sound and permanent deformation."
  - "Perfectly inelastic: the objects stick together and move at the center-of-mass velocity. This loses the most kinetic energy that momentum conservation allows."
  - "In a one-dimensional elastic collision, the relative velocity reverses: v₂ − v₁ = −(u₂ − u₁)."
faqs:
  - question: "Is momentum conserved in an inelastic collision?"
    answer: "Yes, if the system is isolated over the collision. 'Inelastic' describes kinetic energy only."
  - question: "Can kinetic energy increase in a collision?"
    answer: "Not in the collisions this topic classifies. It increases in explosions, where stored energy (a compressed spring, chemical energy) becomes kinetic energy."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Topic 4.3 showed that total momentum is the same just before and just after a collision. That is true for every collision of an isolated system, so momentum cannot tell collisions apart. **Kinetic energy** can. This topic sorts collisions by what happens to the system's total kinetic energy, and shows how to use that extra information.

## Two checks for every collision

For a system of colliding objects, compare **just before** with **just after** (Topic 4.3):

1. **Momentum:** P_before = P_after (vector, in components). This holds for elastic and inelastic collisions alike.
2. **Kinetic energy:** compare K_before = Σ ½mᵢuᵢ² with K_after = Σ ½mᵢvᵢ².

Here u stands for velocities before and v for velocities after. The result of check 2 gives the type:

| Type | Total kinetic energy | What the objects do |
|---|---|---|
| Elastic | K_after = K_before | separate |
| Inelastic | K_after < K_before | usually separate |
| Perfectly inelastic | K_after < K_before, by the largest amount allowed | stick together, one common velocity |

Kinetic energy is a scalar, so add the kinetic energies of the objects as plain numbers. Never add them as vectors.

## Elastic collisions

In an **elastic** collision the system's total kinetic energy after equals the total before. That does **not** mean each object keeps its own kinetic energy. Energy is usually **transferred** from one object to the other. In Worked example 1, an elastic outcome would leave the first glider with only 2.2 mJ of its 54 mJ; the rest moves to the second glider.

Elastic collisions happen when the contact forces are close to conservative: the objects deform and spring back fully, like stiff steel spheres, or never touch at all, like carts with repelling magnets. **During** the contact, some kinetic energy is stored as elastic potential energy, so the system's kinetic energy dips and then recovers. "Elastic" is a statement about **before and after only**.

### Solving a one-dimensional elastic collision

Take objects 1 and 2 on the x-axis, with velocities u₁, u₂ before and v₁, v₂ after. Two equations hold:

- Momentum: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂, so **m₁(u₁ − v₁) = m₂(v₂ − u₂)**.
- Kinetic energy: ½m₁u₁² + ½m₂u₂² = ½m₁v₁² + ½m₂v₂², so **m₁(u₁² − v₁²) = m₂(v₂² − u₂²)**.

Factor the second as m₁(u₁ − v₁)(u₁ + v₁) = m₂(v₂ − u₂)(v₂ + u₂) and divide by the first (allowed when the objects really do collide, so u₁ ≠ v₁). This leaves u₁ + v₁ = v₂ + u₂, which rearranges to

**v₂ − v₁ = −(u₂ − u₁)**

The **relative velocity reverses**: the objects separate as fast as they approached. This linear equation replaces the quadratic energy equation. Solve it with the momentum equation. For object 2 initially at rest (u₂ = 0):

**v₁ = (m₁ − m₂)u₁ / (m₁ + m₂)** and **v₂ = 2m₁u₁ / (m₁ + m₂)**

Check the limits. Equal masses: v₁ = 0 and v₂ = u₁, so the objects swap velocities. A very heavy target (m₂ ≫ m₁): v₁ ≈ −u₁, so the light object bounces straight back. A very light target (m₂ ≪ m₁): v₂ ≈ 2u₁.

## Inelastic and perfectly inelastic collisions

In an **inelastic** collision the total kinetic energy **decreases**. During contact, **nonconservative forces** act between the objects: forces that permanently bend metal, crush foam, rub surfaces or make them vibrate. These forces transform some of the kinetic energy into other forms: internal (thermal) energy of the objects, sound, and the energy stored in permanent deformation. That energy does not come back as kinetic energy when the objects separate.

In a **perfectly inelastic** collision the objects **stick together** and move off with one common velocity. Momentum conservation fixes it:

**v = (m₁u₁ + m₂u₂) / (m₁ + m₂) = v_cm**

The joined object moves at the center-of-mass velocity, which no collision can change.

### Why sticking loses the most

Split the system's kinetic energy into two parts: K = ½Mv_cm² + K_rel. The first part belongs to the motion of the center of mass. It cannot change, because v_cm is constant. The second part, K_rel, belongs to the motion of the objects **relative to** the center of mass. Only K_rel is available to be transformed. When the objects stick, they have no motion relative to the center of mass, so all of K_rel is gone. For two objects:

**K_lost (perfectly inelastic) = ½ · m₁m₂/(m₁ + m₂) · |u₁ − u₂|²**

This is a useful extension rather than a required formula. You can always get the same answer by finding K_before and K_after directly.

### A quick test in one dimension: approach and separation speeds

For a head-on collision, compare how fast the objects **separate** after with how fast they **approached** before:

- Separation speed equal to approach speed: **elastic** (the relative velocity reversed).
- Separation speed smaller, but not zero: **inelastic**.
- Separation speed zero: **perfectly inelastic** (they move together).

This test needs only velocities, so it is quick to apply to sensor data. It agrees with the kinetic energy test because, for a fixed total momentum, only the relative motion carries the kinetic energy that can be transformed. When data have uncertainties, decide whether a small difference in speeds, or a small fall in kinetic energy, is larger than the measurements can explain before you call a collision inelastic.

### Background: explosions run the other way

In an explosion, stored energy (a compressed spring, a chemical reaction) becomes kinetic energy, so the system's kinetic energy **increases**. Momentum is still conserved. This topic's three labels describe collisions, where kinetic energy can only stay the same or fall.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="pcm44-ke-title pcm44-ke-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm44-ke-title">Total kinetic energy before and after three possible outcomes of the same collision</title>
<desc id="pcm44-ke-desc">Bar chart of total kinetic energy in millijoules, axis from 0 to 60. Four bars: before the collision, 54 millijoules, solid outline with light fill; elastic outcome, 54 millijoules, light fill with dots; measured outcome, 42 millijoules, light fill with diagonal hatching; perfectly inelastic outcome, 32.4 millijoules, cross-hatched. A dashed horizontal line marks the initial 54 millijoules. Every outcome has the same total momentum, 0.18 kilogram metres per second.</desc>
<defs>
<pattern id="pcm44-dots" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="4" cy="4" r="1.3" fill="#1d2b44"/></pattern>
<pattern id="pcm44-diag" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V7" stroke="#1d2b44" stroke-width="1"/></pattern>
<pattern id="pcm44-cross" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M0 0 L8 8 M8 0 L0 8" stroke="#1d2b44" stroke-width="1"/></pattern>
</defs>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M80 220 H530 M80 160 H530 M80 100 H530 M80 40 H530"/>
</g>
<path d="M80 280 H530 M80 280 V30" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="72" y="284">0</text><text x="72" y="224">15</text><text x="72" y="164">30</text><text x="72" y="104">45</text><text x="72" y="44">60</text>
</g>
<text x="24" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 160)">total kinetic energy (mJ)</text>
<rect x="105" y="64" width="70" height="216" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="215" y="64" width="70" height="216" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="215" y="64" width="70" height="216" fill="url(#pcm44-dots)" stroke="none"/>
<rect x="325" y="112" width="70" height="168" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="325" y="112" width="70" height="168" fill="url(#pcm44-diag)" stroke="none"/>
<rect x="435" y="150.4" width="70" height="129.6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="435" y="150.4" width="70" height="129.6" fill="url(#pcm44-cross)" stroke="none"/>
<path d="M80 64 H530" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle" font-weight="600">
<text x="140" y="56">54</text><text x="250" y="56">54</text><text x="360" y="104">42</text><text x="470" y="142">32.4</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="140" y="298">before</text>
<text x="250" y="298">elastic</text><text x="250" y="312">(dots)</text>
<text x="360" y="298">measured</text><text x="360" y="312">(hatched)</text>
<text x="470" y="298">stick together</text><text x="470" y="312">(cross-hatched)</text>
<text x="305" y="332">all four: total momentum 0.18 kg·m/s</text>
</g>
</svg>
<figcaption>Figure 1. Total kinetic energy for Worked example 1. Momentum is the same in every case. The elastic outcome keeps all 54 mJ, the measured outcome keeps 42 mJ (78%), and sticking together keeps only 32.4 mJ (60%), the least that momentum conservation allows.</figcaption>
</figure>

## Worked example 1: classifying a glider collision

**Question.** Take **+x along a level air track**. Glider A (0.30 kg) moves at +0.60 m/s towards glider B (0.20 kg), which is at rest. Just after the collision, B moves at +0.60 m/s. Find (a) A's velocity after, (b) whether the collision is elastic, and (c) how the result compares with the elastic and perfectly inelastic outcomes.

1. **System:** both gliders. The track is level and frictionless, so P_x is conserved.
2. P_before = 0.30 × 0.60 = **0.18 kg·m/s**.
3. **(a)** 0.18 = 0.30v_A + 0.20 × 0.60, so 0.30v_A = 0.06 and **v_A = +0.20 m/s**. A keeps moving forward, more slowly.
4. **(b)** K_before = ½ × 0.30 × 0.60² = **0.054 J** (54 mJ). K_after = ½ × 0.30 × 0.20² + ½ × 0.20 × 0.60² = 0.006 + 0.036 = **0.042 J** (42 mJ). K fell, so the collision is **inelastic**. 0.012 J became internal energy and sound.
5. **(c) Elastic limit:** v_A = (0.30 − 0.20)(0.60) ÷ 0.50 = **+0.12 m/s** and v_B = 2(0.30)(0.60) ÷ 0.50 = **+0.72 m/s**. K = 2.16 + 51.84 = 54 mJ, as required.
6. **Perfectly inelastic limit:** v = 0.18 ÷ 0.50 = **+0.36 m/s**, K = ½ × 0.50 × 0.36² = **0.0324 J** (32.4 mJ).

**Interpretation.** The measured outcome lies between the two limits (Figure 1). Another sign: the gliders separate at 0.60 − 0.20 = 0.40 m/s, slower than their approach speed of 0.60 m/s. In an elastic collision the two speeds would be equal.

## Worked example 2: two pucks that stick, in two dimensions

**Question.** On a level air table, take **+x east and +y north**. Puck 1 (0.20 kg) slides east at 3.0 m/s. Puck 2 (0.30 kg) slides north at 2.0 m/s. Both have sticky edges, and they lock together when they meet. Find (a) their velocity just after and (b) the fraction of kinetic energy transformed.

1. **System:** both pucks; no horizontal external force, so P_x and P_y are conserved.
2. P_x = 0.20 × 3.0 = 0.60 kg·m/s; P_y = 0.30 × 2.0 = 0.60 kg·m/s.
3. **(a)** Combined mass 0.50 kg: v_x = 0.60 ÷ 0.50 = 1.2 m/s and v_y = 1.2 m/s. So v = √(1.2² + 1.2²) ≈ **1.7 m/s** at **45° north of east**.
4. **(b)** K_before = ½(0.20)(3.0)² + ½(0.30)(2.0)² = 0.90 + 0.60 = **1.5 J**. K_after = ½(0.50)(1.70)² ≈ **0.72 J**. Transformed: 0.78 J, which is **52%** of the original.

**Check with the extension formula.** The relative velocity has size √(3.0² + 2.0²), so |u₁ − u₂|² = 13 m²/s². ½ × (0.20 × 0.30 ÷ 0.50) × 13 = ½ × 0.12 × 13 = **0.78 J**. The two methods agree.

## Common misconceptions

- **"Inelastic means momentum is not conserved."** Momentum is conserved in both types. The labels describe kinetic energy only.
- **"In an elastic collision each object keeps its kinetic energy."** Only the total is kept. Energy moves between objects.
- **"Kinetic energy is conserved during an elastic collision."** It dips during contact while energy is stored elastically; it is restored afterwards.
- **"Perfectly inelastic means all the kinetic energy is lost."** Only the energy of motion relative to the center of mass is lost. If v_cm ≠ 0, the joined object still moves.
- **Adding kinetic energies as vectors.** Kinetic energy is a scalar. Add ½mv² values for all objects.
- **Using the elastic formulas without checking the type.** v₂ − v₁ = −(u₂ − u₁) holds only if kinetic energy is conserved.
- **"The lost energy is destroyed."** It is transformed into internal energy, sound and deformation; total energy is conserved.

## Where this leads

Collisions often start or end other motion. A common pattern is "collision, then energy": use momentum across the short collision, then energy conservation (Unit 3) for the motion afterwards, never energy across an inelastic collision. Unit 5 begins with [Topic 5.1, Rotational Kinematics](/advanced-course-resources/physics-c-mechanics/5-1-rotational-kinematics-study-guide/). Try the [practice questions](/advanced-course-resources/physics-c-mechanics/4-4-elastic-inelastic-collisions-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/4-4-elastic-inelastic-collisions-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/4-4-elastic-inelastic-collisions-checklist/). To review conservation of momentum itself, go back to [Topic 4.3](/advanced-course-resources/physics-c-mechanics/4-3-conservation-linear-momentum-study-guide/).
