---
resourceId: "mb-ap-phys1-4.1-study-guide"
title: "Linear Momentum: Study Guide (Physics 1 4.1)"
description: "Define momentum as p = mv, use its sign and direction in one and two dimensions, add momenta for a system, and model short interactions as collisions or explosions."
course: "physics-1"
unit: 4
topics: ["4.1"]
resourceType: "study-guide"
prerequisites:
  - "Velocity as a signed quantity along a chosen axis (Topic 1.2)"
  - "Splitting a vector into x and y components (Topic 1.5)"
  - "Choosing a system and telling internal forces from external ones (Topic 2.1)"
  - "Kinetic energy K = ½mv² (Unit 3)"
prerequisiteResources: ["mb-ap-phys1-3.5-study-guide"]
learningObjectives:
  - "Calculate the momentum of an object from its mass and velocity, with a sign or direction that matches the velocity"
  - "Find the total momentum of a system by adding the momenta of its parts as vectors"
  - "Predict how momentum changes when mass or speed changes, and compare it with how kinetic energy changes"
  - "Sketch momentum against velocity, or against time, from a description of the motion"
  - "Decide when an interaction can be modelled as a collision or an explosion, and explain why the object model is allowed"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus. Masses in kg and velocities in m/s give momentum in kg·m/s. Answers to 2 significant figures unless the data justify more"
related: ["mb-ap-phys1-4.1-revision-notes", "mb-ap-phys1-4.1-practice", "mb-ap-phys1-4.1-checklist"]
next: "mb-ap-phys1-4.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Momentum is mass times velocity: p = mv. Its unit is kg·m/s."
  - "Momentum is a vector. It always points the same way as the velocity, so in one dimension it takes the sign of v_x."
  - "The momentum of a system is the vector sum of the momenta of its parts. Opposite momenta can cancel even when everything is moving."
  - "Momentum is proportional to speed, but kinetic energy is proportional to speed squared. The two quantities scale differently."
  - "A collision is an interaction where the forces between the objects are much larger than any net external force; an explosion is one where internal forces push parts apart."
faqs:
  - question: "Is momentum the same as kinetic energy?"
    answer: "No. Momentum p = mv is a vector and can cancel between objects. Kinetic energy K = ½mv² is a scalar and is never negative. Two objects can have the same momentum but very different kinetic energies."
  - question: "Does \"momentum\" in this course ever mean angular momentum?"
    answer: "Not unless the question says so. On its own, the word momentum means linear momentum. Angular momentum is a separate quantity met later in the course."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course** and opens Unit 4, Linear Momentum. Everything here uses algebra and diagrams. You already know two ways to describe a moving object: its velocity (Unit 1) and its kinetic energy (Unit 3). Momentum is a third description. It turns out to be the best tool for short, violent interactions such as crashes, kicks and things breaking apart.

## Momentum in everyday speech and in physics

In everyday speech, "momentum" means something like "hard to stop" or "keeps going". A team on a winning streak "has momentum". Physics uses the word for one exact quantity:

**p = mv**

- p is the **linear momentum** (kg·m/s),
- m is the mass (kg),
- v is the velocity (m/s).

The everyday idea is not far off. A heavy, fast object has a lot of momentum, and you will see in Topic 4.2 that it takes a large push, or a push for a long time, to change it. But the physics definition has two features that everyday speech misses:

1. Momentum depends on **both** mass and velocity. A slow, massive object can have more momentum than a fast, light one.
2. Momentum has a **direction**.

Unless a question says otherwise, the single word "momentum" in this course means linear momentum.

## Momentum is a vector

Mass is never negative, so multiplying a velocity by a mass does not change its direction. **Momentum always points the same way as the velocity.**

In one dimension, choose an axis first, for example **"+x to the right"**. Then

**p_x = m v_x**

and p_x takes the sign of v_x. A 0.20 kg ball moving at 3.0 m/s to the right has p_x = +0.60 kg·m/s. The same ball moving at 3.0 m/s to the left has p_x = −0.60 kg·m/s. Its speed and its kinetic energy are the same in both cases, but its momentum is not. This is why a ball that bounces straight back has had its momentum changed, even if its speed has not. Topic 4.2 measures that change.

### Example values

These are rounded example values to give you a feel for the sizes involved:

| Object (example values) | m (kg) | speed (m/s) | size of momentum (kg·m/s) |
|---|---|---|---|
| marble rolling across a table | 0.010 | 2.0 | 0.020 |
| basketball thrown in a pass | 0.60 | 8.0 | 4.8 |
| runner | 70 | 5.0 | 350 |
| car in town traffic | 1200 | 15 | 18 000 |

### Factors of change

Because p = mv is a simple product, you can predict changes without a full calculation:

- Double the speed, same mass: momentum doubles.
- Triple the mass and halve the speed: momentum changes by 3 × ½ = 1.5.
- Same speed, direction reversed: same size of momentum, opposite sign.

## Momentum of a system

In Topic 2.1 you chose systems of more than one object. The **total momentum of a system** is the vector sum of the momenta of its parts:

**p_sys = p₁ + p₂ + p₃ + …**

In one dimension, "vector sum" means you add the signed values. Momenta in opposite directions partly or fully cancel. A system can have zero total momentum even though every part of it is moving.

<figure>
<svg viewBox="0 0 560 310" role="img" aria-labelledby="p4-1a-title p4-1a-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p4-1a-title">Momentum arrows for two carts and for the system</title>
<desc id="p4-1a-desc">Two carts on a straight track with +x to the right. Cart A, mass 1.2 kg, moves right at 0.50 m/s. Cart B, mass 0.80 kg, moves left at 1.5 m/s. Below the track, momentum arrows are drawn to a scale of 100 pixels per 1 kg·m/s. The arrow for cart A points right with length 0.60 kg·m/s. Starting at its tip, the arrow for cart B points left with length 1.2 kg·m/s. A thick dashed arrow from the start of A's arrow to the tip of B's arrow shows the system momentum: 0.60 kg·m/s to the left.</desc>
<defs>
<marker id="p41-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
</defs>
<rect x="0" y="0" width="560" height="310" fill="#ffffff"/>
<path d="M40 115 H520" stroke="#1d2b44" stroke-width="2"/>
<rect x="120" y="80" width="80" height="30" rx="4" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="135" cy="112" r="5" fill="#1d2b44"/><circle cx="185" cy="112" r="5" fill="#1d2b44"/>
<text x="160" y="100" font-size="12" fill="#1d2b44" text-anchor="middle">A 1.2 kg</text>
<rect x="370" y="85" width="60" height="25" rx="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="382" cy="112" r="5" fill="#1d2b44"/><circle cx="418" cy="112" r="5" fill="#1d2b44"/>
<text x="400" y="102" font-size="12" fill="#1d2b44" text-anchor="middle">B 0.80 kg</text>
<path d="M160 62 H210" stroke="#1d2b44" stroke-width="2" marker-end="url(#p41-ah)"/>
<text x="150" y="50" font-size="12" fill="#1d2b44">v_A = +0.50 m/s</text>
<path d="M420 62 H270" stroke="#1d2b44" stroke-width="2" marker-end="url(#p41-ah)"/>
<text x="300" y="50" font-size="12" fill="#1d2b44">v_B = −1.5 m/s</text>
<path d="M40 145 H90" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#p41-ah)"/>
<text x="96" y="149" font-size="12" fill="#1d2b44">+x</text>
<path d="M280 170 V295" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<text x="280" y="165" font-size="11" fill="#1d2b44" text-anchor="middle">start</text>
<path d="M280 195 H340" stroke="#1d2b44" stroke-width="3" marker-end="url(#p41-ah)"/>
<text x="350" y="199" font-size="12" fill="#1d2b44">p_A = +0.60 kg·m/s</text>
<path d="M340 230 H220" stroke="#1d2b44" stroke-width="3" marker-end="url(#p41-ah)"/>
<text x="350" y="234" font-size="12" fill="#1d2b44">p_B = −1.2 kg·m/s</text>
<path d="M280 270 H220" stroke="#1d2b44" stroke-width="4" stroke-dasharray="8 4" marker-end="url(#p41-ah)"/>
<text x="290" y="274" font-size="12" fill="#1d2b44" font-weight="600">p_sys = −0.60 kg·m/s (dashed)</text>
</svg>
<figcaption>Figure 1. Adding momenta for a two-cart system, +x to the right. Arrow lengths are to scale. Placing p_B tip-to-tail after p_A gives the system momentum, which points left because cart B's momentum is larger in size.</figcaption>
</figure>

Notice that cart A is heavier but cart B has more momentum, because B is three times faster. Mass alone does not decide which object "has more momentum".

Topic 4.3 builds on this sum. It links the system momentum to the velocity of the system's center of mass and shows when the total stays constant.

## Momentum in two dimensions

In two dimensions, use components. Each component of momentum is the mass times the matching component of velocity:

**p_x = m v_x    p_y = m v_y**

Then combine them with Pythagoras, as you did for velocity in Topic 1.5.

For example, take **+x east, +y north**. A 2.0 kg delivery drone flies with v_x = +3.0 m/s and v_y = +4.0 m/s. Its momentum components are p_x = +6.0 kg·m/s and p_y = +8.0 kg·m/s. The size of its momentum is √(6.0² + 8.0²) = **10 kg·m/s**, at tan⁻¹(8.0 ÷ 6.0) = 53° north of east. That is exactly the direction of its velocity, as it must be.

## Graphs of momentum

You may be asked to sketch, not calculate, how momentum depends on another quantity.

**Momentum against velocity.** For a fixed mass, p_x = m v_x is a straight line through the origin. Its slope is the mass. Negative velocities give negative momenta, so the line continues into the third quadrant. A heavier object gives a steeper line.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="p4-1b-title p4-1b-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p4-1b-title">Momentum against velocity for two masses</title>
<desc id="p4-1b-desc">Momentum p_x in kg·m/s from −6 to +6 on the vertical axis against velocity v_x in m/s from −3 to +3 on the horizontal axis. Two straight lines pass through the origin. The solid line for a 1.0 kg object runs from (−3 m/s, −3 kg·m/s) to (+3 m/s, +3 kg·m/s), slope 1.0 kg. The dashed line for a 2.0 kg object runs from (−3 m/s, −6 kg·m/s) to (+3 m/s, +6 kg·m/s), slope 2.0 kg, twice as steep.</desc>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M70 50 V290 M140 50 V290 M210 50 V290 M350 50 V290 M420 50 V290 M490 50 V290"/>
<path d="M70 50 H490 M70 90 H490 M70 130 H490 M70 210 H490 M70 250 H490 M70 290 H490"/>
</g>
<path d="M60 170 H505 M280 40 V300" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="186">−3</text><text x="140" y="186">−2</text><text x="210" y="186">−1</text><text x="350" y="186">1</text><text x="420" y="186">2</text><text x="490" y="186">3</text>
<text x="470" y="318" font-size="13">velocity, v_x (m/s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="274" y="54">+6</text><text x="274" y="94">+4</text><text x="274" y="134">+2</text><text x="274" y="214">−2</text><text x="274" y="254">−4</text><text x="274" y="294">−6</text>
</g>
<text x="292" y="34" font-size="13" fill="#1d2b44">momentum, p_x (kg·m/s)</text>
<path d="M70 230 L490 110" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M70 290 L490 50" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 5"/>
<text x="78" y="70" font-size="12" fill="#1d2b44">dashed: m = 2.0 kg (slope 2.0 kg)</text>
<text x="78" y="90" font-size="12" fill="#1d2b44">solid: m = 1.0 kg (slope 1.0 kg)</text>
</svg>
<figcaption>Figure 2. Momentum against velocity, +x to the right. Each line passes through the origin (no velocity, no momentum) and its slope equals the mass. The 2.0 kg line is twice as steep as the 1.0 kg line.</figcaption>
</figure>

**Momentum against time.** Because p_x = m v_x and m is constant, a momentum–time graph has the **same shape** as the velocity–time graph, stretched vertically by a factor m. If v_x is constant, p_x is a horizontal line. If v_x changes steadily, p_x changes steadily too. If the object reverses, p_x crosses zero at the instant it is momentarily at rest. Topic 4.2 shows that the slope of this graph is the net external force.

## Collisions and explosions as models

Momentum is most useful for interactions that are short and intense. The course names two models.

A **collision** is an interaction in which the forces the objects exert **on each other** are much larger than the **net external force** on them while the interaction lasts. Picture two lab carts bumping. During a contact lasting a few hundredths of a second, they might push on each other with tens of newtons, while friction from the track is well under a newton. During that brief moment, the external forces hardly matter.

Because we compare only the state **just before** and **just after** a collision, we do not need to know how the objects squash and spring back during contact. That is why the **object model** is allowed: each object can be treated as a single point with a mass and a velocity.

An **explosion** is an interaction in which forces **inside** the system push its parts apart. The word covers far more than fireworks. A skater pushing off a partner, a compressed spring launching two carts in opposite directions, and a cannon firing a ball are all explosions in this sense.

Not every interaction fits these models. A sled sliding slowly to a stop on rough snow is not a collision: the only important horizontal force is friction from the ground, which is external, and it acts over a long time.

## Worked example 1: total momentum of two carts

**Question.** Take **+x to the right**. Cart A (1.2 kg) moves right at 0.50 m/s. Cart B (0.80 kg) moves left at 1.5 m/s. Find the total momentum of the system of both carts. (This is the situation in Figure 1.)

1. Signed velocities: v_A = +0.50 m/s, v_B = −1.5 m/s.
2. Momentum of A: p_A = m_A v_A = 1.2 kg × (+0.50 m/s) = **+0.60 kg·m/s**.
3. Momentum of B: p_B = m_B v_B = 0.80 kg × (−1.5 m/s) = **−1.2 kg·m/s**.
4. System: p_sys = p_A + p_B = 0.60 + (−1.2) = **−0.60 kg·m/s**, that is, 0.60 kg·m/s to the left.

**Check.** Two tempting shortcuts both fail. Adding sizes, 0.60 + 1.2 = 1.8 kg·m/s, ignores direction. Multiplying the plain mean velocity by the total mass, ½(0.50 − 1.5) × 2.0 = −1.0 kg·m/s, ignores that the carts have different masses. Momentum must be found object by object, then added with signs.

## Worked example 2: same momentum, different kinetic energy

**Question.** A 1500 kg car moves at 12 m/s. A 9000 kg truck moves at 2.0 m/s in the same direction. Compare (a) their momenta and (b) their kinetic energies.

1. Car: p = 1500 kg × 12 m/s = **18 000 kg·m/s**.
2. Truck: p = 9000 kg × 2.0 m/s = **18 000 kg·m/s**. The momenta are equal.
3. Car: K = ½ × 1500 × 12² = **108 000 J** (about 1.1 × 10⁵ J).
4. Truck: K = ½ × 9000 × 2.0² = **18 000 J**.
5. Ratio: the car has 108 000 ÷ 18 000 = **6** times the kinetic energy of the truck.

**Interpretation.** Momentum grows with v, but kinetic energy grows with v². The car is 6 times faster but 6 times lighter, so the factors cancel for momentum. For kinetic energy, the speed factor counts twice (6² = 36) while the mass factor counts once (÷ 6), leaving a factor of 6.

**Check.** Substituting v = p/m into K = ½mv² gives K = p² ÷ (2m). With equal p, the object with the smaller mass has the larger K: 18 000² ÷ (2 × 1500) = 108 000 J, and 18 000² ÷ (2 × 9000) = 18 000 J. Both match.

## Common misconceptions

- **"Momentum and kinetic energy are the same idea."** They are not. Momentum is a vector and scales with v; kinetic energy is a scalar and scales with v² (Worked example 2).
- **"The heavier object always has more momentum."** Only at the same speed. Speed matters just as much as mass (Figure 1).
- **"Total momentum is the sum of the sizes."** Add signed values or vectors. Opposite momenta cancel (Worked example 1).
- **"A ball that bounces back at the same speed has the same momentum."** Its momentum has reversed sign, so it has changed.
- **"A system with zero momentum must be at rest."** Its parts can move in opposite directions with momenta that cancel.
- **"Momentum can be negative, so it can be 'less than nothing'."** The sign shows direction along your chosen axis, not an amount below zero.
- **"Collisions are only between things that crash hard."** The model only needs the internal forces to be much larger than the net external force during the interaction.
- **"Explosions need fire."** Any internal push that sends parts of a system apart, such as a released spring, counts.

## Where this leads

Momentum on its own is a description. Its power comes from how it changes. Topic 4.2, [Change in Momentum and Impulse](/advanced-course-resources/physics-1/4-2-change-momentum-impulse-study-guide/), links the change in momentum to force and time, and Topic 4.3 shows when the total momentum of a system stays the same. Try the [practice questions](/advanced-course-resources/physics-1/4-1-linear-momentum-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/4-1-linear-momentum-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/4-1-linear-momentum-checklist/) to consolidate. You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
