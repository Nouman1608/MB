---
resourceId: "mb-ap-physcm-3.2-study-guide"
title: "Work: Study Guide (Physics C: Mechanics 3.2)"
description: "Calculus-based guide to work: the dot product, W = ∫F·dr for variable forces, areas under force–position graphs, the work–energy theorem derived, and conservative versus nonconservative forces."
course: "physics-c-mechanics"
unit: 3
topics: ["3.2"]
resourceType: "study-guide"
prerequisites:
  - "Translational kinetic energy, K = ½mv² (Topic 3.1)"
  - "Free-body diagrams, Newton's second law, friction and spring forces (Topics 2.2, 2.5, 2.7 and 2.8)"
  - "Integrating polynomials (Topic 1.2)"
prerequisiteResources: ["mb-ap-physcm-3.1-study-guide"]
learningObjectives:
  - "Describe work as energy transferred into or out of a system by a force acting over a displacement"
  - "Calculate work with the dot product, W = F·d = Fd cos θ, using magnitudes and angle or components"
  - "Calculate the work done by a variable force by integrating along the path, and as the area under a graph of the parallel force against position"
  - "Derive the work–energy theorem from Newton's second law and use it to find speeds"
  - "Distinguish conservative from nonconservative forces by path dependence, and find the energy dissipated by friction"
  - "Decide when a system can be modelled as an object by comparing the motion of the force's point of application with the centre of mass"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic and trigonometry. g = 9.8 m/s², the value on the course equation table. Answers to 2 significant figures unless stated"
related: ["mb-ap-physcm-3.2-revision-notes", "mb-ap-physcm-3.2-practice", "mb-ap-physcm-3.2-checklist"]
next: "mb-ap-physcm-3.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Work is energy transferred into (W > 0) or out of (W < 0) a system by a force acting over a displacement. It is a scalar, measured in joules."
  - "W = ∫ F·dr along the path. For a constant force, W = F·d = Fd cos θ. Only the force component parallel to the displacement does work."
  - "Work is the signed area under a graph of F‖ against position."
  - "Work–energy theorem: the net work done on an object equals its change in kinetic energy, W_net = ΔK."
  - "Conservative forces (gravity, springs) do path-independent work and zero work round a closed path. Nonconservative forces (friction, air resistance) do path-dependent work."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 3.2?"
    answer: "They are separate courses with the same topic title. Physics C: Mechanics defines work as an integral of the dot product along a path, so it expects you to integrate variable forces, use vector components, and derive the work–energy theorem from Newton's second law with calculus."
  - question: "Can work be negative?"
    answer: "Yes. Work is negative when the force has a component opposite to the displacement, so the force takes energy out of the system. Kinetic friction on a sliding block is an example."
  - question: "Do I need to calculate the thermal energy produced by friction?"
    answer: "Only as the mechanical energy removed: friction force times path length. The course analyses mechanical energy, though you should know the energy ends up as thermal energy and sound."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 3.2 called Work. This guide is the **calculus-based** one. It defines work as an integral of a dot product along a path, integrates forces that change with position, and derives the work–energy theorem from Newton's second law. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/3-2-work-study-guide/); do not mix the two when you revise. This topic follows [Topic 3.1, Translational Kinetic Energy](/advanced-course-resources/physics-c-mechanics/3-1-translational-kinetic-energy-study-guide/).

## Work is an energy transfer

Choose a **system** first. A force exerted on that system by something outside it can transfer energy **into** or **out of** the system as the point where the force acts moves. That transfer is **work**.

- **W > 0:** energy goes into the system.
- **W < 0:** energy leaves the system.
- **W = 0:** no energy is transferred by that force.

Work is a **scalar**, measured in joules: 1 J = 1 N·m. A force does no work if its point of application does not move, however large the force is.

## The dot product and constant forces

Work uses the **dot product** of two vectors. For vectors **A** and **B** at angle θ:

**A · B = AB cos θ = A_xB_x + A_yB_y + A_zB_z**

The result is a scalar. For a **constant** force **F** whose point of application undergoes displacement **d**:

**W = F · d = Fd cos θ**

- θ < 90°: W > 0. θ = 90°: W = 0. 90° < θ ≤ 180°: W < 0.
- F cos θ is the component of the force **parallel** to the displacement, F‖. So W = F‖d. Only that component changes the system's energy.
- The **perpendicular** component does no work. It can change the direction of motion without changing K. The tension on a ball in uniform circular motion (Topic 2.10) is always perpendicular to the velocity, so it does zero work and the speed stays constant.

**Component example.** **F** = (3.0, 4.0) N acts while its point of application moves **d** = (2.0, −1.0) m. W = (3.0)(2.0) + (4.0)(−1.0) = **2.0 J**. You never needed the angle; with magnitudes 5.0 N and 2.24 m, it is about 80°.

## Variable forces: integrate along the path

If the force changes along the path, split the path into tiny displacements d**r**. Over each, the force is nearly constant, so the work is **F** · d**r**. Add them all:

**W = ∫ₐᵇ F · dr**

The integral runs along the actual path from a to b. In one dimension, with the force and motion along x, this becomes **W = ∫ F_x dx**.

**Graph meaning.** Work is the **signed area** under a graph of F‖ against position. Area above the axis is positive work; area below is negative.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="pcm32-fx-title pcm32-fx-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm32-fx-title">Force against position for F = 12 − 3x², with work as area</title>
<desc id="pcm32-fx-desc">Force F_x in newtons from 0 to 12 against position x in metres from 0 to 2. The curve starts at 12 N at x = 0, is 9 N at x = 1 m and falls to 0 at x = 2 m. The area under the curve from 0 to 1 m is shaded and labelled 11 J. The area from 1 to 2 m is hatched and labelled 5 J. Total 16 J.</desc>
<defs><pattern id="pcm32-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V6" stroke="#1d2b44" stroke-width="1"/></pattern></defs>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<polygon fill="#fdf6e3" stroke="none" points="80.0,90.0 90.0,90.1 100.0,90.4 110.0,91.0 120.0,91.8 130.0,92.8 140.0,94.0 150.0,95.5 160.0,97.2 170.0,99.1 180.0,101.2 190.0,103.6 200.0,106.2 210.0,109.0 220.0,112.1 230.0,115.3 240.0,118.8 250.0,122.5 260.0,126.4 270.0,130.6 280.0,135.0 280,270 80,270"/>
<polygon fill="url(#pcm32-hatch)" stroke="none" points="280.0,135.0 290.0,139.6 300.0,144.5 310.0,149.5 320.0,154.8 330.0,160.3 340.0,166.1 350.0,172.0 360.0,178.2 370.0,184.6 380.0,191.2 390.0,198.1 400.0,205.2 410.0,212.5 420.0,220.1 430.0,227.8 440.0,235.8 450.0,244.0 460.0,252.5 470.0,261.1 480.0,270.0 280,270"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M70 210 H500 M70 150 H500 M70 90 H500"/>
</g>
<path d="M80 270 H515 M80 270 V45" stroke="#1d2b44" stroke-width="2" fill="none"/>
<path d="M280 270 V135" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="80.0,90.0 90.0,90.1 100.0,90.4 110.0,91.0 120.0,91.8 130.0,92.8 140.0,94.0 150.0,95.5 160.0,97.2 170.0,99.1 180.0,101.2 190.0,103.6 200.0,106.2 210.0,109.0 220.0,112.1 230.0,115.3 240.0,118.8 250.0,122.5 260.0,126.4 270.0,130.6 280.0,135.0 290.0,139.6 300.0,144.5 310.0,149.5 320.0,154.8 330.0,160.3 340.0,166.1 350.0,172.0 360.0,178.2 370.0,184.6 380.0,191.2 390.0,198.1 400.0,205.2 410.0,212.5 420.0,220.1 430.0,227.8 440.0,235.8 450.0,244.0 460.0,252.5 470.0,261.1 480.0,270.0"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="288">0</text><text x="180" y="288">0.5</text><text x="280" y="288">1.0</text><text x="380" y="288">1.5</text><text x="480" y="288">2.0</text>
<text x="290" y="315" font-size="13">position, x (m)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="72" y="274">0</text><text x="72" y="214">4</text><text x="72" y="154">8</text><text x="72" y="94">12</text>
</g>
<text x="24" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 170)">force, F_x (N)</text>
<text x="180" y="200" font-size="13" fill="#1d2b44" font-weight="600" text-anchor="middle">area 11 J</text>
<text x="335" y="250" font-size="13" fill="#1d2b44" font-weight="600" text-anchor="middle">area 5 J (hatched)</text>
<text x="300" y="80" font-size="12" fill="#1d2b44">F_x = 12 − 3x² (N, x in m)</text>
<text x="300" y="98" font-size="12" fill="#1d2b44">total area 0 to 2.0 m: 16 J</text>
</svg>
<figcaption>Figure 1. Force–position graph for Worked example 1. The work done by the force is the area under the curve: 11 J from 0 to 1.0 m (shaded) plus 5 J from 1.0 to 2.0 m (hatched), 16 J in total.</figcaption>
</figure>

**Spring force.** An ideal spring (Topic 2.8) exerts F_s,x = −kx, with x measured from the relaxed length. The work it does as the end moves from x_i to x_f is

**W_s = ∫ (−kx) dx = −½k(x_f² − x_i²)**

Stretching a 150 N/m spring from 0 to 0.10 m, the spring does −0.75 J of work on whatever pulls it. Letting it return to 0, the spring does +0.75 J. Round the full trip, the total is zero.

## Net work and the work–energy theorem

The **net work** is the sum of the work done by every force on the object, or the work done by the net force. Newton's second law turns it into a change in kinetic energy. In one dimension, use the chain rule as in Topic 1.2:

F_net,x = m dv_x/dt = m (dv_x/dx)(dx/dt) = m v_x dv_x/dx

So F_net,x dx = m v_x dv_x. Integrate from the initial to the final state:

**W_net = ∫ F_net,x dx = ½mv_f² − ½mv_i² = ΔK**

This is the **work–energy theorem**. In three dimensions the same steps use **F**_net · d**r** = m (d**v**/dt) · **v** dt = d(½mv²). It links straight back to Topic 3.1: dK/dt = **F**_net · **v**.

## Worked example 1: a variable push

**Question.** Take **+x along a level, frictionless track**. A 2.0 kg cart starts from rest at x = 0. A launcher pushes it with F_x = (12 N) − (3.0 N/m²)x² from x = 0 to x = 2.0 m, where the push falls to zero. Find the work done and the cart's speed at x = 1.0 m and at x = 2.0 m.

1. Gravity and the normal force are perpendicular to the displacement, so they do no work. The push is the only force doing work.
2. Work from 0 to 2.0 m: W = ∫₀² (12 − 3.0x²) dx = [12x − x³]₀² = 24 − 8.0 = **16 J**.
3. Work–energy theorem: ½(2.0)v² = 16, so v = **4.0 m/s** at x = 2.0 m.
4. At x = 1.0 m: W = 12 − 1.0 = 11 J, so v = √(2 × 11 ÷ 2.0) = **3.3 m/s**.

**Check.** The areas in Figure 1 are 11 J and 5 J; they add to 16 J. Using the starting force for the whole distance, 12 N × 2.0 m = 24 J, overestimates the work because the force falls. The speed keeps rising all the way to x = 2.0 m, because F_x stays positive.

## Worked example 2: several constant forces on a ramp

**Question.** Take **+x down the slope**. A 4.0 kg box slides 3.0 m down a ramp inclined at 30°. The coefficient of kinetic friction is 0.20. The box starts at 1.0 m/s. Find the work done by each force and the final speed.

1. **Gravity.** The parallel component is mg sin 30° = 19.6 N, down the slope. W_g = (19.6)(3.0) = **+59 J** (58.8 J). Check with components, +y up: **F**_g = (0, −39.2) N and **d** = (2.60, −1.50) m, so W_g = (−39.2)(−1.50) = 58.8 J. Only the vertical drop of 1.5 m matters.
2. **Normal force.** Perpendicular to the ramp, so W_N = **0**. Its size is mg cos 30° = 33.9 N.
3. **Friction.** f = 0.20 × 33.9 = 6.79 N, up the slope, opposite to **d**. W_f = −(6.79)(3.0) = **−20 J** (−20.4 J).
4. **Net work:** 58.8 + 0 − 20.4 = **+38 J** (38.4 J).
5. **Final speed:** K_i = ½(4.0)(1.0)² = 2.0 J. K_f = 2.0 + 38.4 = 40.4 J. v = √(2 × 40.4 ÷ 4.0) = **4.5 m/s**.

**Interpretation.** Gravity transfers energy into the box; friction takes 20 J out. That 20 J does not vanish: it becomes thermal energy and some sound in the box and ramp. This course tracks the mechanical energy only.

## Conservative and nonconservative forces

Some forces do the **same work whatever path** the object takes between two points. These are **conservative** forces.

- The work depends only on the start and end configurations of the system.
- Round any closed path, the total work is zero.
- Only conservative forces have a **potential energy** linked to them. Gravity and ideal springs are the examples you know; Topic 3.3 builds potential energy from them.

Other forces do work that **depends on the path**. These are **nonconservative**. The common ones are **kinetic friction** and **air resistance**. A longer path means more work done against them. The mechanical energy removed by friction is usually taken as **friction force × path length**.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="pcm32-path-title pcm32-path-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm32-path-title">Two paths between A and B on a rough floor, seen from above</title>
<desc id="pcm32-path-desc">Top view of a floor. Point A is at the lower left and point B is up and to the right. Path 1 is a dashed straight line from A to B, labelled 5.0 m. Path 2 is a solid line going 3.0 m right from A to a corner C, then 4.0 m up to B. Friction does −24.5 J along path 1 and −34.3 J along path 2. Gravity does zero work on both paths because the floor is level.</desc>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<path d="M100 250 L250 250 L250 50" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M100 250 L250 50" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 6"/>
<circle cx="100" cy="250" r="6" fill="#1d2b44"/>
<circle cx="250" cy="50" r="6" fill="#1d2b44"/>
<circle cx="250" cy="250" r="4" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<g font-size="13" fill="#1d2b44">
<text x="78" y="272">A</text><text x="262" y="48">B</text><text x="260" y="272">C</text>
<text x="150" y="272">3.0 m</text><text x="262" y="155">4.0 m</text>
<text x="165" y="150" text-anchor="end">5.0 m</text>
</g>
<g font-size="12" fill="#1d2b44">
<text x="320" y="90">Path 1 (dashed, straight): 5.0 m</text>
<text x="320" y="110">W_friction = −4.9 N × 5.0 m = −24.5 J</text>
<text x="320" y="150">Path 2 (solid, A → C → B): 7.0 m</text>
<text x="320" y="170">W_friction = −4.9 N × 7.0 m = −34.3 J</text>
<text x="320" y="210">Gravity: 0 on both (level floor)</text>
</g>
</svg>
<figcaption>Figure 2. Seen from above, a 2.0 kg block is pushed from A to B on a level floor with μ_k = 0.25 by two routes. Friction's work depends on the path length; gravity's does not.</figcaption>
</figure>

## Worked example 3: path dependence

**Question.** A 2.0 kg block is pushed at constant speed across a level floor from A to B (Figure 2), with μ_k = 0.25. Find the work done by friction along each path, and round the closed trip A → B → A along path 1. Then compare with the work done by gravity when the same block is lifted 1.5 m onto a shelf by any route.

1. Friction force: f = μ_k mg = 0.25 × 2.0 × 9.8 = 4.9 N, always opposite to the motion.
2. Path 1 (5.0 m): W_f = −4.9 × 5.0 = **−24.5 J**. Path 2 (7.0 m): W_f = **−34.3 J**. Different paths, different work: friction is **nonconservative**.
3. Closed trip along path 1 and back: friction still opposes the motion on the way back. W_f = −4.9 × 10 = **−49 J**, not zero.
4. Lifting by 1.5 m: gravity's work is W_g = −mgΔy = −2.0 × 9.8 × 1.5 = **−29 J** (−29.4 J), whether the block goes straight up, up a ramp, or along a zigzag. Bring it back down and gravity does +29.4 J: zero round the loop. Gravity is **conservative**.

## Object or system: where does the force act?

The work done by a force uses the displacement of the **point where the force acts**, not automatically the displacement of the centre of mass.

- If the point of application and the centre of mass move **the same distance** (a crate pushed by a rigid rod), the system can be modelled as an **object**. The work done by the external force then shows up only as a change in K.
- If they move **differently**, the system's internal configuration can change. When you push off a wall, the wall's force on your hands does **no work**, because your hands do not move while the force acts. Your centre of mass still speeds up. The energy came from inside you (chemical energy in your muscles), not from the wall. You cannot treat yourself as a single object here.

## Common misconceptions

- **"A large force always does a lot of work."** No displacement of the point of application, no work.
- **"Work has a direction."** It is a scalar. Its sign shows whether energy goes in or out.
- **Using F × d for a varying force.** Integrate, or find the area under the F‖–x graph (Worked example 1).
- **"The normal force always does no work."** It does none when it is perpendicular to the displacement, as on a fixed ramp. The floor of a lift that is moving upward pushes up on you through a displacement, so it does positive work on you.
- **"Centripetal force does work because it acts all the way round."** It is perpendicular to the velocity at every instant, so W = 0.
- **"Friction's work only depends on start and end points."** It depends on the path length (Worked example 3).
- **Applying W_net = ΔK to only one force.** The theorem uses the work done by **all** forces.

## Where this leads

[Topic 3.3, Potential Energy](/advanced-course-resources/physics-c-mechanics/3-3-potential-energy-study-guide/) turns the work done by conservative forces into stored energy, using ΔU = −W. Topic 3.4 combines work, kinetic energy and potential energy into energy conservation, and Topic 3.5 treats the rate of doing work as power. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/3-2-work-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/3-2-work-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/3-2-work-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
