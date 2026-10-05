---
resourceId: "mb-ap-phys1-3.2-study-guide"
title: "Work: Study Guide (Physics 1 3.2)"
description: "Work as an energy transfer by a force: W = Fd cos θ, positive, negative and zero work, the work-energy theorem, conservative and nonconservative forces, friction losses and area under force–displacement graphs."
course: "physics-1"
unit: 3
topics: ["3.2"]
resourceType: "study-guide"
prerequisites:
  - "Translational kinetic energy, K = ½mv² (Topic 3.1)"
  - "Splitting a force into components parallel and perpendicular to a direction (Topics 1.5 and 2.2)"
  - "Kinetic friction, F_f = μ_k F_N (Topic 2.7)"
prerequisiteResources: ["mb-ap-phys1-3.1-study-guide"]
learningObjectives:
  - "Describe work as energy transferred into or out of a system by a force exerted over a distance"
  - "Calculate the work done by a constant force from the force component parallel to the displacement, and decide whether it is positive, negative or zero"
  - "Use the work-energy theorem to link the net work on an object to its change in kinetic energy"
  - "Tell conservative forces from nonconservative ones by whether their work depends on the path"
  - "Find work from the area under a force–displacement graph, and predict how stopping distance scales with speed"
  - "Decide when a system can be modelled as an object by comparing how far its center of mass and the point where a force acts move"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s², as on the course equation table. Answers to 2 or 3 significant figures"
related: ["mb-ap-phys1-3.2-revision-notes", "mb-ap-phys1-3.2-practice", "mb-ap-phys1-3.2-checklist"]
next: "mb-ap-phys1-3.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Work is energy transferred into or out of a system by a force acting over a distance. It is a scalar and can be positive, negative or zero."
  - "For a constant force, W = F∥d = Fd cos θ, where θ is the angle between the force and the displacement."
  - "A force perpendicular to the motion does no work. It can change the direction of motion but not the kinetic energy."
  - "Work-energy theorem: ΔK = W_net, the sum of the work done by every force on the object."
  - "Work by a conservative force (such as gravity) depends only on the start and end points. Work by friction depends on the path, and the energy dissipated is friction × path length."
  - "Work is the area under a force–displacement graph, with area below the axis counting as negative."
faqs:
  - question: "Is a joule the same as a newton-metre?"
    answer: "Yes. Work is force × distance, so its unit is N·m, and 1 N·m = 1 J. (Torque in Unit 5 is also written in N·m, but it is not an energy, so it is not written in joules.)"
  - question: "If I hold a heavy bag still, why do I get tired if I do no work on it?"
    answer: "Your force on the bag acts over zero displacement, so it does no work on the bag. Your muscles still use chemical energy internally to stay tense, and that energy ends up as thermal energy in your body."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Topic 3.1 told you how much kinetic energy an object has. This topic explains how forces change it. No calculus is needed.

## Work is an energy transfer

First choose a **system**: the object or group of objects you are studying (Topic 2.1). Forces from outside the system can move energy into it or out of it. When a force is exerted on a system and the point where it acts moves, that force does **work**.

**Work is the energy transferred into or out of a system by a force exerted over a distance.**

- **Positive work** adds energy to the system.
- **Negative work** takes energy out of the system.
- **Zero work** transfers no energy.

Work is a **scalar**. It has a sign, but no direction. Its unit is the joule: 1 J = 1 N·m.

## Work done by a constant force

Only the part of a force **along the displacement** transfers energy. For a constant force F whose point of application moves a displacement of size d:

**W = F∥ d = F d cos θ**

Here F∥ is the force component parallel to the displacement, and θ is the angle between the force and the displacement.

<figure>
<svg viewBox="0 0 600 320" role="img" aria-labelledby="p1-w-title p1-w-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-w-title">A force at an angle to the displacement, split into components</title>
<desc id="p1-w-desc">A block sits on a horizontal floor. A 50 newton force pulls on the block at 30 degrees above the horizontal. A dashed horizontal component labelled F cos theta equals 43 newtons runs along the floor direction, and a dashed vertical component labelled F sin theta equals 25 newtons points up. Below the block, a displacement arrow 4.0 metres long points to the right. The text states that the work done is F d cos theta, which is 50 times 4.0 times cos 30 degrees, equal to 173 joules. The vertical component is perpendicular to the displacement and does no work.</desc>
<defs><marker id="p1-w-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="600" height="320" fill="#ffffff"/>
<path d="M40 230 H560" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1"><path d="M60 230 l-10 10 M100 230 l-10 10 M140 230 l-10 10 M180 230 l-10 10 M220 230 l-10 10 M260 230 l-10 10 M300 230 l-10 10 M340 230 l-10 10 M380 230 l-10 10 M420 230 l-10 10 M460 230 l-10 10 M500 230 l-10 10 M540 230 l-10 10"/></g>
<rect x="120" y="170" width="100" height="60" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="170" y="205" font-size="13" fill="#1d2b44" text-anchor="middle">block</text>
<path d="M220 200 L358.6 120" stroke="#1d2b44" stroke-width="3" marker-end="url(#p1-w-arrow)"/>
<path d="M220 200 H358.6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#p1-w-arrow)"/>
<path d="M358.6 200 V120" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<path d="M262 200 A42 42 0 0 0 256.4 179" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="268" y="192" font-size="12" fill="#1d2b44">θ = 30°</text>
<text x="300" y="110" font-size="13" fill="#1d2b44" font-weight="600">F = 50 N</text>
<text x="368" y="160" font-size="12" fill="#1d2b44">F sin θ = 25 N (⊥, no work)</text>
<text x="250" y="218" font-size="12" fill="#1d2b44">F cos θ = 43 N (∥)</text>
<path d="M120 270 H440" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-w-arrow)"/>
<text x="280" y="292" font-size="13" fill="#1d2b44" text-anchor="middle">displacement d = 4.0 m</text>
<text x="40" y="40" font-size="13" fill="#1d2b44">W = F d cos θ = 50 N × 4.0 m × cos 30° = 173 J</text>
</svg>
<figcaption>Figure 1. Only the component of the force along the displacement does work. Here F∥ = 50 cos 30° = 43 N, so W = 43 N × 4.0 m = 173 J. The 25 N vertical component is perpendicular to the motion and does no work (it does change the normal force, and so the friction).</figcaption>
</figure>

### Positive, negative or zero

The sign of cos θ decides the sign of the work:

| Angle between F and d | cos θ | Work | Example |
|---|---|---|---|
| 0° (same direction) | 1 | positive, W = Fd | pushing a trolley forwards |
| between 0° and 90° | positive | positive | pulling a sled with a rope at an angle |
| 90° (perpendicular) | 0 | zero | gravity on a puck sliding on a level table |
| between 90° and 180° | negative | negative | air resistance on a ball thrown at an angle |
| 180° (opposite) | −1 | negative, W = −Fd | kinetic friction on a sliding box |

A force perpendicular to the motion can still **change the direction** of the motion. The tension in a string that whirls a ball in a horizontal circle (Topic 2.9) always points to the centre, at 90° to the velocity. It turns the ball but does no work, so the ball's kinetic energy stays the same.

## Net work and the work-energy theorem

Several forces may act at once. Each does its own work. Adding them gives the **net work**. The **work-energy theorem** says:

**ΔK = ΣW = W_net**

The change in an object's kinetic energy equals the total work done on it by all the forces. If W_net is positive, the object speeds up; if negative, it slows down; if zero, its speed is unchanged.

You can find W_net in two ways: add the work of each force, or multiply the net force component along the displacement by d. Both give the same answer, which makes a useful check.

## Worked example 1: dragging a training tyre

**Question.** An athlete drags a 40 kg tyre across a level field with a rope. The rope pulls with 200 N at 30° above the horizontal. The coefficient of kinetic friction is 0.50. The tyre starts from rest. Find the work done by each force over 10 m, and the tyre's speed at the end.

1. **Forces.** Weight mg = 40 × 9.8 = 392 N down. Rope 200 N at 30°. Normal force up. Friction backwards.
2. **Normal force.** Vertically, there is no acceleration: F_N + 200 sin 30° = 392, so F_N = 392 − 100 = 292 N.
3. **Friction.** F_f = μ_k F_N = 0.50 × 292 = 146 N.
4. **Work by each force** (d = 10 m, to the right):
   - Rope: W = 200 × 10 × cos 30° = **+1732 J**.
   - Friction: W = 146 × 10 × cos 180° = **−1460 J**.
   - Weight and normal force: perpendicular to the motion, so **0 J** each.
5. **Net work.** W_net = 1732 − 1460 + 0 + 0 = **+272 J**.
6. **Speed.** ΔK = W_net, and K₀ = 0, so ½ × 40 × v² = 272 J, giving v = √(2 × 272 ÷ 40) = **3.7 m/s**.

**Check.** Net force along the ground = 173.2 − 146 = 27.2 N, so a = 27.2 ÷ 40 = 0.680 m/s². From Topic 1.3, v² = 2ad = 2 × 0.680 × 10 = 13.6, so v = 3.7 m/s. Both methods agree.

**Trap.** Using F_f = μ_k mg = 196 N ignores the upward pull of the rope. It would give W_net = −228 J, which would mean a tyre starting from rest slows down. That is impossible, so the mistake shows itself.

## Conservative and nonconservative forces

Lift a 3.0 kg box from the floor onto a shelf 1.5 m higher. Gravity does W = −mgh = −3.0 × 9.8 × 1.5 = **−44 J** on the box. It does not matter whether you lift it straight up, carry it up a staircase or slide it up a ramp. The work done by gravity depends only on the **start and end positions**. Bring the box back to the floor, and gravity's total work for the round trip is **zero**.

A force with these properties is called **conservative**:

- the work it does is **path-independent**: it depends only on the initial and final configuration;
- its work around any closed path, back to the start, is **zero**.

Gravity and ideal spring forces are conservative. Only conservative forces have a **potential energy** linked to them; you will meet this in Topic 3.3.

Friction and air resistance are **nonconservative**: their work depends on the path. Slide a box across a floor where friction is 6.0 N. Moving it 4.0 m straight from A to B, friction does −24 J. Taking a 7.0 m detour between the same points, friction does −42 J. Push it out and back over a total of 8.0 m, and friction does −48 J, not zero.

### Where friction's energy goes

The energy removed by kinetic friction is:

**energy dissipated = F_f × (length of path)**

Use the **path length**, not the displacement. In this course you only track **mechanical** energy, but you should know where the dissipated energy goes: it becomes **thermal energy** (the surfaces warm up) and some **sound**.

## Work from a force–displacement graph

If a force changes as the object moves, W = Fd cos θ no longer works directly. Instead, draw a graph of the force component along the motion against position. **The work is the area between the graph and the position axis.** Area above the axis is positive work; area below it is negative work.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="p1-fx-title p1-fx-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-fx-title">Force against position for a cart, with positive and negative areas</title>
<desc id="p1-fx-desc">Force F_x in newtons from minus 10 to plus 25 against position x in metres from 0 to 0.80. The force rises in a straight line from 0 at x = 0 to 20 newtons at 0.20 metres, stays at 20 newtons until 0.50 metres, then falls in a straight line to 0 at 0.60 metres. It then jumps to minus 10 newtons and stays there until 0.80 metres. The region above the axis, from 0 to 0.60 metres, is shaded and labelled plus 9.0 joules. The rectangle below the axis, from 0.60 to 0.80 metres, is hatched and labelled minus 2.0 joules.</desc>
<defs><pattern id="p1-fx-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V8" stroke="#1d2b44" stroke-width="1"/></pattern></defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M70 120 H480 M70 70 H480 M70 220 H480"/>
<path d="M170 40 V230 M270 40 V230 M370 40 V230 M470 40 V230"/>
</g>
<polygon points="70,170 170,70 320,70 370,170" fill="#fdf6e3" stroke="none"/>
<rect x="370" y="170" width="100" height="50" fill="url(#p1-fx-hatch)" stroke="none"/>
<path d="M70 240 V35 M70 170 H490" stroke="#1d2b44" stroke-width="2" fill="none"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70,170 170,70 320,70 370,170 370,220 470,220"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="170" y="186">0.20</text><text x="270" y="186">0.40</text><text x="355" y="186">0.60</text><text x="470" y="160">0.80</text>
<text x="290" y="270" font-size="13">position, x (m)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="74">20</text><text x="62" y="124">10</text><text x="62" y="174">0</text><text x="62" y="224">−10</text>
</g>
<text x="22" y="140" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 140)">force, F_x (N)</text>
<text x="200" y="125" font-size="13" fill="#1d2b44" font-weight="600">shaded area = +9.0 J</text>
<text x="380" y="245" font-size="13" fill="#1d2b44" font-weight="600">hatched area = −2.0 J</text>
</svg>
<figcaption>Figure 2. Work from a force–position graph. The shaded area above the axis is a triangle (2.0 J), a rectangle (6.0 J) and a triangle (1.0 J): +9.0 J. The hatched rectangle below the axis is −10 N × 0.20 m = −2.0 J. Total work from 0 to 0.80 m: +7.0 J.</figcaption>
</figure>

## Worked example 2: using a force–position graph

**Question.** A 2.0 kg cart moves in the +x direction at 1.5 m/s on a level, frictionless track. From x = 0 it is pushed by a varying horizontal force, then pulled back by a constant 10 N, as in Figure 2. Find (a) the total work done on the cart from 0 to 0.80 m, (b) its speed at 0.80 m and (c) its greatest speed.

1. **(a)** Areas: ½ × 0.20 × 20 = 2.0 J; 0.30 × 20 = 6.0 J; ½ × 0.10 × 20 = 1.0 J; −10 × 0.20 = −2.0 J. Total **W = +7.0 J**.
2. **(b)** K₀ = ½ × 2.0 × 1.5² = 2.25 J. By the work-energy theorem, K = 2.25 + 7.0 = 9.25 J, so v = √(2 × 9.25 ÷ 2.0) = **3.0 m/s**.
3. **(c)** The cart speeds up while the force is positive and slows down once it is negative, so its greatest speed is at x = 0.60 m. There K = 2.25 + 9.0 = 11.25 J, so v = √11.25 = **3.4 m/s**.

**Check.** Weight and normal force are vertical, so they add no work. The final speed is less than the greatest speed, as it must be after negative work.

## Worked example 3: stopping distance and speed

**Question.** A 1200 kg car brakes with a constant friction force of 8400 N. Find its stopping distance from (a) 14 m/s and (b) 28 m/s. (c) State the factor of change.

1. **(a)** K₀ = ½ × 1200 × 14² = 117 600 J. To stop, friction must do −117 600 J, so 8400 × d = 117 600 and **d = 14 m**.
2. **(b)** K₀ = ½ × 1200 × 28² = 470 400 J, so d = 470 400 ÷ 8400 = **56 m**.
3. **(c)** In symbols, F_f d = ½mv₀², so **d = mv₀² / (2F_f)**: d ∝ v₀². Doubling the speed makes the stopping distance **4 times** longer.

**Interpretation.** In each case, all the kinetic energy is dissipated by friction, mostly as thermal energy in the brakes. This is why a small rise in speed makes a large difference to safe following distances.

## Where the force acts: when is a system an object?

The d in W = Fd cos θ is the displacement of the **point where the force is exerted**. Usually that point moves with the whole object, so its center of mass and the point of application move the same distance. Then the system can be modelled as an **object**, and the work done by the force can only change its **kinetic energy**.

Sometimes they move differently. A roller skater pushes off a wall. Her hands touch the wall, and the wall pushes on her hands, but her hands do not move while in contact. The wall's force acts over **zero** distance, so the **wall does no work** on her. Yet she gains kinetic energy. The energy comes from inside the system, from chemical energy in her muscles, as her body changes shape. The skater must be treated as a system with internal structure, not as a single object.

## Common misconceptions

- **"Any force does work."** A force does work only if its point of application moves, and only through its component along that motion.
- **"Holding a heavy box still is hard work, so I do work on it."** No displacement, no work on the box.
- **"Carrying a box across a level room at constant velocity, my upward force does work on it."** Your force is vertical and the motion is horizontal, so your force does no work on the box.
- **"Work is a vector because force and displacement are vectors."** Work is a scalar. Its sign shows energy in or out, not a direction.
- **"Negative work means no energy is involved."** Negative work removes energy from the system.
- **"Friction always does negative work."** Not always. A box on the bed of a speeding-up truck is carried along by static friction, which does positive work on the box.
- **"The normal force never does work."** In a lift moving upward, the floor's normal force points along your motion and does positive work on you.
- **Using W = Fd when the force is at an angle.** Use the parallel component, F cos θ.
- **Using displacement instead of path length for friction.** Friction's energy loss depends on the whole path.

## Where this leads

Work is how energy moves between a system and its surroundings. In [Topic 3.3, Potential Energy](/advanced-course-resources/physics-1/3-3-potential-energy-study-guide/), you will see that the work done by conservative forces can be stored as potential energy. Topic 3.4 combines kinetic and potential energy into conservation of energy, and Topic 3.5 asks how fast work is done (power). Try the [practice questions](/advanced-course-resources/physics-1/3-2-work-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/3-2-work-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/3-2-work-checklist/). You can also review [Topic 3.1, Translational Kinetic Energy](/advanced-course-resources/physics-1/3-1-translational-kinetic-energy-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
