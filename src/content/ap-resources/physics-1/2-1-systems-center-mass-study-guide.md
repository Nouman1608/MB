---
resourceId: "mb-ap-phys1-2.1-study-guide"
title: "Systems and Center of Mass: Study Guide (Physics 1 2.1)"
description: "Choose a system, decide when it can be treated as one object, and locate its center of mass by symmetry or with the weighted-average equation for up to five particles."
course: "physics-1"
unit: 2
topics: ["2.1"]
resourceType: "study-guide"
prerequisites:
  - "Choosing a positive direction and an origin (Topic 1.1)"
  - "Reading positions on x and y axes in two dimensions (Topic 1.5)"
prerequisiteResources: ["mb-ap-phys1-1.5-study-guide"]
learningObjectives:
  - "Choose a system, draw its boundary, and sort interactions into internal ones and external ones"
  - "Decide when a system of many parts can be modelled as a single object, and when its internal structure matters"
  - "Recognise when energy or mass crosses a system boundary, and explain how parts of a system can move differently from the whole"
  - "Locate a center of mass on a line of symmetry without calculation"
  - "Calculate the center of mass of up to five particles in one or two dimensions, or of a symmetric object plus particles"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus. Positions in metres and masses in kilograms; answers to 2 significant figures unless the data justify more"
related: ["mb-ap-phys1-2.1-revision-notes", "mb-ap-phys1-2.1-practice", "mb-ap-phys1-2.1-checklist"]
next: "mb-ap-phys1-2.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "A system is whatever you choose to study. Everything else is the environment. Interactions inside the boundary are internal; interactions across it are external."
  - "If the parts and their interactions do not matter for the question, the whole system can be treated as one object located at its center of mass."
  - "For a symmetric mass distribution, the center of mass lies on every line of symmetry."
  - "x_cm = (m₁x₁ + m₂x₂ + …) ÷ (m₁ + m₂ + …), and the same for y_cm. It is a mass-weighted average position."
  - "The center of mass is always closer to the heavier part, and it does not have to be inside any material."
faqs:
  - question: "Is the center of mass the same as the center of gravity?"
    answer: "Near Earth's surface, where g is the same across the object, they are at the same point. This course uses the term center of mass."
  - question: "How many particles will I be asked to handle?"
    answer: "The course expects calculations for up to five particles arranged in two dimensions, or for objects that are highly symmetric. Larger or irregular systems are described in words."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course** and opens Unit 2, Force and Translational Dynamics. Everything here uses algebra and diagrams. Before you can talk about forces, you need to decide *what* the forces act on. That choice is called the system.

## What is a system?

A **system** is the object or group of objects you choose to study. Everything outside it is the **environment**. You show the choice by drawing a **system boundary**, a closed dashed line, around the parts you include.

The choice is yours, and different choices suit different questions. Take a delivery robot towing a small wagon. You could choose:

- the robot alone,
- the wagon alone, or
- the robot and the wagon together.

Once the boundary is drawn, every interaction falls into one of two groups:

- **Internal interactions** happen between two parts that are both inside the system. The pull of the tow bar between robot and wagon is internal if both are in the system.
- **External interactions** happen between something inside and something outside. Earth's gravitational pull and the push of the ground are external for every choice above.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="p1-sys-title p1-sys-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-sys-title">A system boundary drawn around a robot and the wagon it tows</title>
<desc id="p1-sys-desc">A delivery robot on the right pulls a wagon on the left through a short tow bar along level ground. A dashed rounded rectangle encloses both the robot and the wagon and is labelled system boundary. The tow bar lies inside the boundary and is labelled internal interaction. Labels outside the boundary show the external interactions: Earth's gravity acting on the system, and the ground pushing up on the wheels and pushing along the ground at the robot's wheels.</desc>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<path d="M30 230 H530" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="2" fill="#fdf6e3">
<rect x="90" y="160" width="130" height="50"/>
<rect x="320" y="120" width="110" height="90"/>
</g>
<g stroke="#1d2b44" stroke-width="2" fill="#ffffff">
<circle cx="115" cy="218" r="12"/><circle cx="195" cy="218" r="12"/>
<circle cx="345" cy="218" r="12"/><circle cx="405" cy="218" r="12"/>
</g>
<path d="M220 185 H320" stroke="#1d2b44" stroke-width="4"/>
<text x="155" y="190" font-size="13" fill="#1d2b44" text-anchor="middle">wagon</text>
<text x="375" y="170" font-size="13" fill="#1d2b44" text-anchor="middle">robot</text>
<rect x="65" y="95" width="395" height="133" rx="16" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 6"/>
<text x="70" y="85" font-size="13" fill="#1d2b44">system boundary (dashed): robot + wagon</text>
<text x="270" y="175" font-size="12" fill="#1d2b44" text-anchor="middle">tow bar:</text>
<text x="270" y="205" font-size="12" fill="#1d2b44" text-anchor="middle">internal</text>
<text x="480" y="60" font-size="12" fill="#1d2b44" text-anchor="middle">external:</text>
<text x="480" y="76" font-size="12" fill="#1d2b44" text-anchor="middle">Earth's gravity</text>
<text x="280" y="270" font-size="12" fill="#1d2b44" text-anchor="middle">external: the ground pushes on every wheel (crosses the boundary)</text>
</svg>
<figcaption>Figure 1. With the robot and the wagon inside one boundary, the tow bar's pull is internal. Gravity and the ground's pushes act across the boundary, so they are external. Choose the wagon alone and the tow bar's pull becomes external.</figcaption>
</figure>

The same interaction can be internal for one choice and external for another. In Topic 2.2 you will draw the forces on a system, and only the external ones appear.

## The properties of a system come from its parts

A system's properties are set by what is inside it and how the parts interact. Its total mass is the sum of the parts' masses. Whether it holds its shape depends on the internal interactions. A brick holds together because of strong forces between its particles. A pile of sand slumps because the forces between grains are weak.

This is why the **internal structure** of a system affects how you analyse it. A steel ball dropped on a floor can be treated as one rigid lump. A water balloon dropped on the same floor wobbles and spreads, and its parts do very different things during the landing.

## When can a system be treated as one object?

In Unit 1 you treated a car as a single point. That was a choice, not a fact about cars. The rule is:

**If the properties and interactions of the parts do not matter for the question, the system can be treated as a single object.**

- To find how long a train takes to travel between two stations, treat it as one object.
- To find the pull in the coupling between the third and fourth carriages, you must look inside it.

When you treat a system as one object, you place it at its **center of mass** and give it the system's total mass.

### Parts can behave differently from the whole

Even when the system as a whole moves simply, its parts may not. Throw a spanner so that it spins across a room. Its ends trace loops, but its center of mass follows the same smooth curved path a small ball would (the projectile path from Topic 1.5). A diver tumbles, yet her center of mass follows one smooth arc.

Parts can also differ from each other. In a moving system, one part may speed up while another slows down, as long as the system as a whole moves in a way the external interactions allow.

### Changing the conditions can change the structure

As things outside a system change, its inner structure may change too. Push gently on the bottom box of a stack of two boxes and they move together, as one object. Push hard enough and the top box slides back off the lower one. The stack has stopped behaving as one object. The same is true when heating melts an ice block, or when a rope breaks under a large pull. A model that worked under one set of conditions can fail under another, so always check it still fits.

## Open and closed systems

Interactions with the environment can carry **energy** or **mass** across the boundary.

- A cup of hot tea cooling on a desk passes energy to the air around it.
- A cart carrying a leaking bucket of sand loses mass as sand falls out, if you draw the boundary around the cart, the bucket and the sand still in it.

A system that gains or loses mass is often called **open**. You can usually make it **closed** by moving the boundary. Include all the sand, even the sand already on the floor, and no mass crosses the boundary any more. Choosing a closed system often makes later work in Units 3 and 4 much simpler.

## The center of mass

The **center of mass** is the mass-weighted average position of all the parts of a system. It is the single point where you can imagine all the mass to be when you model the system as one object.

### Use symmetry first

**If the mass is spread symmetrically, the center of mass lies on every line of symmetry.** You can often find it without any arithmetic:

- a uniform rod or plank: at its midpoint;
- a uniform rectangle or square plate: where the diagonals cross;
- a uniform disc or ring: at the geometric centre;
- two equal masses: halfway between them.

A ring shows something important. Its center of mass is at the centre, where there is no material at all. A center of mass does **not** have to lie inside the object.

### The equation

For particles of mass m₁, m₂, m₃, … at positions x₁, x₂, x₃, … along an axis:

**x_cm = (m₁x₁ + m₂x₂ + m₃x₃ + …) ÷ (m₁ + m₂ + m₃ + …)**

In two dimensions, use the same equation a second time with the y-coordinates to find y_cm. Each axis is a separate one-dimensional calculation, just as in Topic 1.5.

Three habits help:

1. **State the origin and positive direction first.** The number x_cm depends on the origin; the physical point does not.
2. **Replace each symmetric part by a particle** at its own center of mass. A uniform plank becomes one particle at its midpoint.
3. **Sense-check the answer.** The center of mass must lie between the outermost particles and closer to the heavier ones.

The course expects you to calculate the center of mass for up to five particles arranged in two dimensions, or for highly symmetric systems.

## Worked example 1: two crates on a line

**Question.** Take **+x to the right**, with the origin at a 72 kg crate on a loading dock. A 48 kg crate sits 5.0 m to the right of it, at x = 5.0 m. Treat both crates as particles. Where is the center of mass of the two-crate system?

1. Total mass: 72 kg + 48 kg = 120 kg.
2. Weighted sum: (72 kg)(0) + (48 kg)(5.0 m) = 240 kg·m.
3. x_cm = 240 kg·m ÷ 120 kg = **2.0 m**, that is 2.0 m to the right of the 72 kg crate.

**Check 1: closer to the heavier crate.** The center of mass is 2.0 m from the 72 kg crate and 3.0 m from the 48 kg crate. The distance ratio 3.0 ÷ 2.0 = 1.5 equals the mass ratio 72 ÷ 48 = 1.5, the other way round. The heavier crate is nearer.

**Check 2: change the origin.** Put the origin at the 48 kg crate instead, so the 72 kg crate is at x = −5.0 m. Then x_cm = (72)(−5.0) ÷ 120 = −3.0 m: 3.0 m to the left of the lighter crate. That is the same physical point.

**Common error.** The midpoint, 2.5 m, ignores the masses. It is only correct when the masses are equal.

## Worked example 2: four masses on a frame

**Question.** Four small weights are fixed to the corners of a light rectangular frame 0.60 m wide and 0.40 m tall. Take the origin at the bottom-left corner, **+x to the right and +y up**. The masses are 2.0 kg at (0, 0), 1.0 kg at (0.60 m, 0), 3.0 kg at (0.60 m, 0.40 m) and 2.0 kg at (0, 0.40 m). Treat the frame's mass as negligible. Find the center of mass.

1. Total mass: 2.0 + 1.0 + 3.0 + 2.0 = 8.0 kg.
2. x-direction: Σmx = (2.0)(0) + (1.0)(0.60) + (3.0)(0.60) + (2.0)(0) = 2.4 kg·m.
   x_cm = 2.4 ÷ 8.0 = **0.30 m**.
3. y-direction: Σmy = (2.0)(0) + (1.0)(0) + (3.0)(0.40) + (2.0)(0.40) = 2.0 kg·m.
   y_cm = 2.0 ÷ 8.0 = **0.25 m**.

The center of mass is at **(0.30 m, 0.25 m)**.

<figure>
<svg viewBox="0 0 560 360" role="img" aria-labelledby="p1-cm-title p1-cm-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-cm-title">Four masses on a rectangular frame with the center of mass marked</title>
<desc id="p1-cm-desc">Axes x from 0 to 0.60 m and y from 0 to 0.40 m. A rectangle joins four masses at the corners: 2.0 kg at the origin, 1.0 kg at 0.60 m on the x-axis, 3.0 kg at the top right corner (0.60 m, 0.40 m) and 2.0 kg at the top left corner (0, 0.40 m). Circle sizes grow with mass and each is labelled. A circled cross marks the center of mass at (0.30 m, 0.25 m). A small plain cross marks the geometric centre of the rectangle at (0.30 m, 0.20 m), 0.05 m below the center of mass.</desc>
<rect x="0" y="0" width="560" height="360" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M200 300 V60 M320 300 V60 M80 240 H440 M80 180 H440 M80 120 H440"/>
</g>
<path d="M80 300 H480 M80 300 V30" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="320">0</text><text x="200" y="320">0.20</text><text x="320" y="320">0.40</text><text x="440" y="320">0.60</text>
<text x="280" y="345" font-size="13">x (m)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="72" y="304">0</text><text x="72" y="244">0.10</text><text x="72" y="184">0.20</text><text x="72" y="124">0.30</text><text x="72" y="64">0.40</text>
</g>
<text x="24" y="180" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 180)">y (m)</text>
<rect x="80" y="60" width="360" height="240" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="2">
<circle cx="80" cy="300" r="13"/><circle cx="440" cy="300" r="9"/><circle cx="440" cy="60" r="16"/><circle cx="80" cy="60" r="13"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="98" y="290">2.0 kg</text><text x="452" y="290">1.0 kg</text><text x="462" y="56">3.0 kg</text><text x="98" y="52">2.0 kg</text>
</g>
<circle cx="260" cy="150" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<path d="M251 150 H269 M260 141 V159" stroke="#1d2b44" stroke-width="2"/>
<text x="274" y="146" font-size="12" fill="#1d2b44">center of mass (0.30 m, 0.25 m)</text>
<path d="M255 175 L265 185 M265 175 L255 185" stroke="#1d2b44" stroke-width="1.5"/>
<text x="274" y="196" font-size="12" fill="#1d2b44">geometric centre (0.30 m, 0.20 m)</text>
</svg>
<figcaption>Figure 2. The circled cross is the center of mass. It sits directly above the plain cross (the geometric centre) because the top row holds 5.0 kg and the bottom row only 3.0 kg. Left and right columns both hold 4.0 kg, so x_cm is exactly halfway across.</figcaption>
</figure>

**Check.** If all four masses were equal, the center of mass would be at the geometric centre, (0.30 m, 0.20 m). Here the left column (2.0 + 2.0 = 4.0 kg) balances the right column (1.0 + 3.0 = 4.0 kg), so x_cm stays at 0.30 m. The top row (5.0 kg) is heavier than the bottom row (3.0 kg), so y_cm moves up from 0.20 m to 0.25 m. Both results match the sense-check.

## Worked example 3: a uniform pole with a lamp

**Question.** A uniform pole 2.0 m long has a mass of 1.2 kg. A 0.40 kg lamp is fixed to one end. Take the origin at the other end and **+x along the pole towards the lamp**. Find the center of mass of the pole–lamp system.

1. **Use symmetry for the pole.** A uniform pole has its center of mass at its midpoint, x = 1.0 m. Replace it with a 1.2 kg particle there.
2. The lamp is a 0.40 kg particle at x = 2.0 m.
3. x_cm = [(1.2)(1.0) + (0.40)(2.0)] ÷ (1.2 + 0.40) = 2.0 ÷ 1.6 = **1.25 m** from the bare end.

**Interpretation.** Without the lamp, the center of mass would be at 1.0 m. Adding mass at the lamp end shifts it 0.25 m towards that end, but not all the way, because the pole is three times heavier than the lamp.

## The system as one object

Once you know where the center of mass is, you can model the whole system as **one particle of the total mass at that point**. This is what you did, without saying so, every time you drew a car or a ball as a dot in Unit 1. In Unit 2 the dot on a free-body diagram represents the system's center of mass, and every force is drawn from it.

Two consequences are worth seeing now:

- The center of mass of a thrown, spinning object follows a projectile path, even though the parts do not.
- Two carts pushed apart by a spring between them both change velocity. The system's center of mass carries on as before, because the spring's push is internal. Topic 2.3 explains why internal forces cannot change the motion of the center of mass.

## Limiting cases worth knowing

- **Equal masses.** The center of mass is at the midpoint (or the geometric centre).
- **One mass much bigger.** A 1000 kg mass and a 1 kg mass 2.0 m apart have their center of mass only 0.002 m from the big one. The heavy object is effectively the whole system.
- **Adding mass at the center of mass.** Add 4.0 kg at (0.30 m, 0.25 m) in Worked example 2 and the center of mass does not move.
- **Moving the origin.** Every x_cm changes by the same amount, but the physical point stays put (Worked example 1).

## Common misconceptions

- **"The center of mass is halfway between the objects."** Only for equal masses. It is always closer to the heavier one (Worked example 1).
- **"The center of mass must be inside the object."** A ring's is at its empty centre. An L-shaped bracket's is often in the gap.
- **"The center of mass is the geometric centre."** Only when the mass is spread uniformly and symmetrically (Figure 2).
- **"Divide by the number of particles."** Divide by the **total mass**. Dividing by the count gives a length that may lie outside the system.
- **"Choosing a different system changes the physics."** It changes which interactions you call internal or external. The real motion is the same.
- **"If I can treat it as one object once, I always can."** The model fails when the parts start to move relative to each other in a way that matters, as in the sliding stack of boxes.
- **"All parts of a system move like its center of mass."** The ends of a spinning spanner do not.

## Where this leads

Topic 2.2 (Forces and Free-Body Diagrams) uses your system choice directly: a free-body diagram shows the external forces on the chosen system, drawn from a dot at its center of mass. Read the [Topic 2.2 study guide](/advanced-course-resources/physics-1/2-2-forces-free-body-diagrams-study-guide/) next. For coordinate systems and components in two dimensions, revisit the [Topic 1.5 study guide](/advanced-course-resources/physics-1/1-5-vectors-motion-two-dimensions-study-guide/). Try the [practice questions](/advanced-course-resources/physics-1/2-1-systems-center-mass-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/2-1-systems-center-mass-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/2-1-systems-center-mass-checklist/) to consolidate. You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
