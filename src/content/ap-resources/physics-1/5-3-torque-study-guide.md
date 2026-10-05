---
resourceId: "mb-ap-phys1-5.3-study-guide"
title: "Torque: Study Guide (Physics 1 5.3)"
description: "What torque is, why only the perpendicular part of a force turns a rigid object, lever arms, force diagrams, and τ = rF sin θ, with algebra only and three worked examples."
course: "physics-1"
unit: 5
topics: ["5.3"]
resourceType: "study-guide"
prerequisites:
  - "Angular displacement, velocity and acceleration of a rotating rigid object (Topics 5.1 and 5.2)"
  - "Drawing free-body diagrams and finding the centre of mass of a system (Topics 2.1 and 2.2)"
  - "Resolving a force into perpendicular components with sine and cosine (Topic 1.5)"
prerequisiteResources: ["mb-ap-phys1-5.2-study-guide"]
learningObjectives:
  - "Explain why only the part of a force perpendicular to the line from the axis to the point of application can turn a rigid object"
  - "Find the lever arm of a force as the perpendicular distance from the axis to the force's line of action"
  - "Calculate the size of a torque with τ = rF sin θ, τ = rF⊥ or τ = r⊥F, and get the same answer each way"
  - "Draw a force diagram that shows where each force acts relative to the axis, and identify the torque each force exerts"
  - "Predict how a torque changes when the force, the distance or the angle changes"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra and trigonometry only; no calculus. Set your calculator to degrees. g = 9.8 m/s². Answers to 2 significant figures unless told otherwise"
related: ["mb-ap-phys1-5.3-revision-notes", "mb-ap-phys1-5.3-practice", "mb-ap-phys1-5.3-checklist"]
next: "mb-ap-phys1-5.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Torque measures how strongly a force tends to turn a rigid object about a chosen axis. Its size is τ = rF sin θ, in N·m."
  - "Only the force component perpendicular to r turns the object: τ = rF⊥. The component along r does nothing to the rotation."
  - "The lever arm r⊥ is the perpendicular distance from the axis to the line of action of the force: τ = r⊥F."
  - "A force whose line of action passes through the axis exerts zero torque about that axis, however large it is."
  - "A force diagram is like a free-body diagram, but each force is drawn where it acts. You need that position to find the torque."
faqs:
  - question: "Is torque the same as force?"
    answer: "No. A force can push an object along; a torque tends to turn it. The same force can exert a large torque, a small torque or none at all, depending on where it acts and in which direction."
  - question: "Do I need to give the direction of a torque as a vector?"
    answer: "No. In this course you work with the size of a torque. You will often say whether a torque tends to turn an object clockwise or counterclockwise so you can add torques later, but the vector direction of torque is outside the course."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Topics 5.1 and 5.2 described rotation: angles, angular velocity and angular acceleration. Now you start asking *what causes* a change in rotation. The answer is torque. No calculus is needed.

## Rigid systems and the axis of rotation

In this unit we model objects such as doors, spanners, see-saws and wheels as **rigid systems**. A rigid system keeps its shape: the distance between any two points on it does not change. That lets you describe the whole object with one angle, one angular velocity and one angular acceleration.

Every torque calculation starts with an **axis of rotation**: the line the object turns about (or could turn about). For a door, the axis runs through the hinges. For a spanner on a bolt, it runs along the bolt. When nothing is fixed, you may *choose* an axis. Always say which axis you are using, just as you state "+x to the right" in kinematics. A torque has no meaning until the axis is named.

## What makes an object turn?

Try opening a heavy door. Three things change how easily it swings:

- **How hard you push.** A bigger force turns it more readily.
- **Where you push.** A push of 20 N at right angles at the handle, 0.75 m from the hinges, is far more effective than the same push 0.25 m from the hinges.
- **Which way you push.** Push straight towards the hinges, along the door, and nothing turns at all, however hard you push.

Torque combines all three. For the door, the push at the handle gives a torque of 0.75 m × 20 N = 15 N·m. The same push near the hinge gives 0.25 m × 20 N = 5.0 N·m: three times the distance, three times the torque. The push along the door gives 0 N·m.

## The torque equation

Draw a vector **r** from the axis to the **point of application** of the force F, the exact point where the force acts. Let θ be the angle between r and F (put the two vectors tail to tail to measure it). The size of the torque is:

**τ = rF sin θ**

The unit is the newton-metre, **N·m**. Torque is not energy, so do not write joules.

The sin θ factor is the key. Here is how it behaves:

| Angle θ between r and F | sin θ | Torque |
|---|---|---|
| 0° (F points straight away from the axis) | 0 | zero |
| 30° or 150° | 0.50 | half the maximum |
| 60° or 120° | 0.87 | 87% of the maximum |
| 90° (F at right angles to r) | 1 | maximum, rF |
| 180° (F points straight at the axis) | 0 | zero |

### Two other ways to read the same equation

You can group the factors in two ways. Both give the same number.

1. **Perpendicular component.** Split F into a part along r and a part at right angles to r. The part along r only pulls or pushes on the axis; it cannot turn anything. The perpendicular part, **F⊥ = F sin θ**, does all the turning:
   **τ = rF⊥**
2. **Lever arm.** Extend the force arrow into a long straight line in both directions. This is the **line of action** of the force. The **lever arm** r⊥ is the perpendicular distance from the axis to that line. Because r⊥ = r sin θ:
   **τ = r⊥F**

The lever arm is *not* the distance from the axis to the point of application (that is r). It is the shortest distance from the axis to the line of action. The two are equal only when the force is at 90° to r.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="p1t-wr-title p1t-wr-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1t-wr-title">A spanner turning a bolt, showing r, F, its components and the lever arm</title>
<desc id="p1t-wr-desc">A horizontal spanner runs from the bolt at the axis O on the left to the point of application P, 0.30 m to the right. A force F of 80 N acts at P at 60 degrees to the spanner, pointing up and to the right. Its component perpendicular to the spanner, 69 N, points straight up; its component along the spanner, 40 N, points to the right and exerts no torque. The line of action of F is extended down and to the left as a dashed line. A solid line from O meets the line of action at a right angle; this is the lever arm, 0.26 m long.</desc>
<rect x="0" y="0" width="560" height="400" fill="#ffffff"/>
<rect x="120" y="210" width="305" height="20" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="120" cy="220" r="26" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="120" cy="220" r="5" fill="#1d2b44"/>
<text x="62" y="270" font-size="13" fill="#1d2b44">axis O (bolt)</text>
<path d="M520 46.8 L330 375.9" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 5"/>
<text x="350" y="382" font-size="12" fill="#1d2b44">line of action of F</text>
<path d="M120 220 L345 349.9" stroke="#1d2b44" stroke-width="2"/>
<path d="M351 339.5 L340.6 333.5 L334.6 343.9" stroke="#1d2b44" stroke-width="1.5" fill="none"/>
<text x="30" y="350" font-size="12" fill="#1d2b44">lever arm r⊥ = r sin θ = 0.26 m</text>
<path d="M420 220 L420 92" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/>
<path d="M413 100 L420 84 L427 100" fill="#1d2b44"/>
<text x="330" y="105" font-size="12" fill="#1d2b44">F⊥ = 69 N</text>
<path d="M420 220 L492 220" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/>
<path d="M486 213 L502 220 L486 227" fill="#1d2b44"/>
<text x="476" y="250" font-size="12" fill="#1d2b44">F∥ = 40 N</text>
<text x="458" y="266" font-size="12" fill="#1d2b44">(no torque)</text>
<path d="M420 220 L494 91.8" stroke="#1d2b44" stroke-width="3"/>
<path d="M486.5 93.9 L500 81.4 L498.6 100.9 Z" fill="#1d2b44"/>
<text x="425" y="70" font-size="13" fill="#1d2b44" font-weight="600">F = 80 N</text>
<path d="M460 220 A40 40 0 0 0 440 185.4" stroke="#1d2b44" stroke-width="1.5" fill="none"/>
<text x="452" y="196" font-size="12" fill="#1d2b44">θ = 60°</text>
<circle cx="420" cy="220" r="4" fill="#1d2b44"/>
<text x="395" y="250" font-size="12" fill="#1d2b44">P</text>
<path d="M120 180 L420 180" stroke="#1d2b44" stroke-width="1"/>
<path d="M120 174 V186 M420 174 V186" stroke="#1d2b44" stroke-width="1"/>
<text x="230" y="172" font-size="12" fill="#1d2b44">r = 0.30 m</text>
</svg>
<figcaption>Figure 1. A spanner seen from above, axis through the bolt at O. The 80 N force acts at P, 0.30 m from O, at 60° to r. Only the perpendicular component (69 N, dashed, upward) turns the bolt; the component along the spanner (40 N, dashed, to the right) does not. The lever arm is the perpendicular distance from O to the dashed line of action: 0.26 m. All three methods give τ ≈ 21 N·m (Worked example 1).</figcaption>
</figure>

### Clockwise or counterclockwise?

When several forces act, some tend to turn the object one way and some the other. Label each torque **clockwise** or **counterclockwise** as seen in your diagram. This bookkeeping lets you add torques in Topics 5.5 and 5.6. You do not need the vector direction of torque in this course; you only work with sizes and this turning sense.

## Force diagrams for rigid systems

In Unit 2 you drew **free-body diagrams**, with every force starting from one dot. That was fine for an object that only moves along. For rotation, *where* a force acts matters, so you draw a **force diagram** instead.

A force diagram is like a free-body diagram in most ways:

- Show every force exerted **on** the system, and only those.
- Label each force with what exerts it, for example "weight of rod (Earth on rod)".
- Draw the arrows with their correct directions and roughly correct relative lengths.

The difference: **each arrow starts at the point where the force acts**. Draw the object (often as a simple bar), mark the axis clearly, and mark the distances from the axis. Gravity on a rigid object acts at its **centre of mass** (Topic 2.1); for a uniform rod that is the middle.

Once the diagram is drawn, go through the forces one by one and ask: *what is r, what is θ, and so what is τ about this axis?*

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="p1t-fd-title p1t-fd-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1t-fd-title">Force diagram for a hinged rod holding a lamp</title>
<desc id="p1t-fd-desc">A horizontal uniform rod 2.0 m long is hinged to a wall at its left end, which is the axis. Four forces are drawn where they act. At the hinge, a short dashed line (no arrowhead, since its direction is not needed) labelled hinge force, with torque zero. At 1.0 m, the rod's weight, 49 N, points down. At 1.5 m, the pull of the lamp, 29 N, points down. At 2.0 m, the cable tension, 93 N, points up and to the left at 30 degrees above the rod. The cable's line of action is extended as a dashed line; a solid line from the hinge meets it at a right angle, marking a lever arm of 1.0 m.</desc>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<path d="M60 40 V300" stroke="#1d2b44" stroke-width="4"/>
<g stroke="#1d2b44" stroke-width="1"><path d="M60 60 L48 72 M60 100 L48 112 M60 140 L48 152 M60 180 L48 192 M60 220 L48 232 M60 260 L48 272"/></g>
<rect x="80" y="222" width="400" height="16" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="80" cy="230" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="66" y="274" font-size="12" fill="#1d2b44">axis (hinge)</text>
<path d="M80 230 L104 206" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/>
<text x="96" y="256" font-size="12" fill="#1d2b44">F_hinge: acts at axis, τ = 0</text>
<path d="M280 230 L280 272" stroke="#1d2b44" stroke-width="3"/>
<path d="M273 266 L280 282 L287 266 Z" fill="#1d2b44"/>
<text x="274" y="294" font-size="12" fill="#1d2b44" text-anchor="end">rod weight 49 N</text>
<path d="M380 230 L380 252" stroke="#1d2b44" stroke-width="3"/>
<path d="M373 248 L380 262 L387 248 Z" fill="#1d2b44"/>
<text x="356" y="282" font-size="12" fill="#1d2b44">lamp 29 N</text>
<path d="M480 230 L407 188" stroke="#1d2b44" stroke-width="3"/>
<path d="M415.6 187.2 L399.5 183.5 L408.6 199.3 Z" fill="#1d2b44"/>
<text x="420" y="172" font-size="12" fill="#1d2b44" font-weight="600">cable 93 N</text>
<path d="M440 230 A40 40 0 0 1 445.4 210" stroke="#1d2b44" stroke-width="1.5" fill="none"/>
<text x="414" y="220" font-size="12" fill="#1d2b44">30°</text>
<path d="M480 230 L150 39.5" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 5"/>
<path d="M80 230 L180 56.8" stroke="#1d2b44" stroke-width="2"/>
<path d="M169.6 50.8 L163.6 61.2 L174 67.2" stroke="#1d2b44" stroke-width="1.5" fill="none"/>
<text x="148" y="130" font-size="12" fill="#1d2b44">lever arm 1.0 m</text>
<g font-size="11" fill="#1d2b44" text-anchor="middle">
<path d="M80 318 H480 M80 312 V324 M280 312 V324 M380 312 V324 M480 312 V324" stroke="#1d2b44" stroke-width="1"/>
<text x="80" y="308">0</text><text x="280" y="308">1.0 m</text><text x="380" y="308">1.5 m</text><text x="480" y="308">2.0 m</text>
</g>
</svg>
<figcaption>Figure 2. Force diagram for Worked example 2. Unlike a free-body diagram, each force starts where it acts. The hinge force acts at the axis, so its torque is zero whatever its direction (shown dashed because we do not need it). The cable's line of action passes 1.0 m from the hinge.</figcaption>
</figure>

## Predicting changes: functional dependence

Because τ = rF sin θ is a product, factor-of-change questions are quick:

- Double F (same r and θ): torque doubles.
- Double r (same F and θ): torque doubles.
- Double r **and** change θ from 90° to 30°: 2 × sin 30° = 1, so the torque is **unchanged**.
- Halve the lever arm and double the force: torque unchanged.

Write the ratio τ_new / τ_old as a product of factors, and cancel anything that stays the same.

## Worked example 1: a spanner at an angle

**Question.** In Figure 1, the axis is the centre of the bolt. A mechanic pulls on a spanner with a force F = 80 N at a point 0.30 m from the axis. The angle between r and F is 60°. Find the size of the torque on the bolt three ways, and the largest torque this force could give.

1. **Equation:** τ = rF sin θ = 0.30 m × 80 N × sin 60° = 0.30 × 80 × 0.866 = 20.8 N·m ≈ **21 N·m**.
2. **Perpendicular component:** F⊥ = 80 N × sin 60° = 69.3 N. τ = rF⊥ = 0.30 m × 69.3 N = **21 N·m**.
3. **Lever arm:** r⊥ = r sin θ = 0.30 m × 0.866 = 0.260 m. τ = r⊥F = 0.260 m × 80 N = **21 N·m**.
4. **Largest torque:** at θ = 90°, sin θ = 1, so τ_max = 0.30 m × 80 N = **24 N·m**.

**Interpretation.** Pulling at 60° gives 87% of the best possible torque. The 40 N component along the spanner (80 N × cos 60°) only pulls on the bolt; it does no turning.

**Check.** All three methods agree, as they must: they are the same product grouped differently.

## Worked example 2: identifying torques from a force diagram

**Question.** A uniform rod of mass 5.0 kg and length 2.0 m is hinged to a wall at its left end and held horizontal (Figure 2). A 3.0 kg lamp hangs from the rod 1.5 m from the hinge. A cable fixed to the right-hand end pulls on the rod with a tension of 93 N, at 30° above the rod. Taking the hinge as the axis, find the torque exerted by each force and state its turning sense.

1. **List the forces on the rod** (the system): the hinge force, the rod's weight, the pull of the lamp's string, and the cable tension. Draw them where they act (Figure 2).
2. **Hinge force.** It acts at the axis, so r = 0 and **τ = 0**. You do not need to know its size or direction.
3. **Rod's weight.** W = mg = 5.0 kg × 9.8 m/s² = 49 N, acting at the centre, r = 1.0 m, at 90° to the rod. τ = 1.0 m × 49 N = **49 N·m, clockwise**.
4. **Lamp.** The string pulls down with the lamp's weight, 3.0 kg × 9.8 m/s² = 29.4 N, at r = 1.5 m, at 90°. τ = 1.5 m × 29.4 N = **44 N·m, clockwise**.
5. **Cable.** r = 2.0 m and θ = 30°. τ = 2.0 m × 93 N × sin 30° = **93 N·m, counterclockwise**. The lever-arm view gives the same: r⊥ = 2.0 m × sin 30° = 1.0 m, and 1.0 m × 93 N = 93 N·m.

**Interpretation.** The clockwise torques add to 49 + 44.1 = 93.1 N·m, about the same as the counterclockwise 93 N·m. That is no accident: the rod is not starting to rotate. Topic 5.5 turns this observation into the condition for rotational equilibrium.

**Check the choice of axis.** If you took the axis at the right-hand end instead, the cable would exert zero torque and the hinge force would not. The torques depend on the axis you choose, which is why you must always state it.

## Worked example 3: deriving a torque for a raised barrier

**Question.** A car-park barrier is a uniform arm of mass M and length L, pivoted at one end. It is raised to an angle φ above the horizontal. (a) Derive an expression for the torque exerted by gravity on the arm about the pivot. (b) Evaluate it for M = 12 kg and L = 4.0 m at φ = 0 and φ = 60°. (c) What happens at φ = 90°?

**(a)** Gravity acts at the centre of mass, a distance L/2 along the arm from the pivot. The weight Mg points straight down. The line of action is vertical, so the lever arm is the *horizontal* distance from the pivot to the centre of mass:

r⊥ = (L/2) cos φ

so **τ = ½MgL cos φ**.

Check with τ = rF sin θ: the angle between r (along the arm, φ above horizontal) and the downward weight is 90° + φ, and sin(90° + φ) = cos φ. Same result.

**(b)** Mg = 12 kg × 9.8 m/s² = 117.6 N.
At φ = 0: τ = ½ × 117.6 N × 4.0 m × 1 = **240 N·m** (235.2 N·m).
At φ = 60°: τ = 235.2 N·m × cos 60° = **120 N·m** (117.6 N·m). The lever arm has shrunk from 2.0 m to 1.0 m.

**(c)** At φ = 90° the arm is vertical, cos 90° = 0, and the torque is **zero**: the weight's line of action passes through the pivot.

**Functional dependence.** τ is proportional to L for a fixed mass. A barrier twice as long with the same mass needs twice the torque to hold horizontal. If the mass also doubled, the torque would quadruple.

## Common misconceptions

- **"Torque is just a bigger or smaller force."** Torque depends on force, distance *and* angle. A 60 N push straight towards a hinge gives no torque; a 30 N push at the edge can give plenty.
- **"r is always the lever arm."** r is the distance to the point of application. The lever arm is the perpendicular distance to the line of action. They are equal only at 90° (Figure 1).
- **"A large force at the axis must exert a large torque."** A force acting at the axis, or one whose line of action passes through it, exerts zero torque about that axis (Worked example 2, step 2).
- **"Further out always means more torque."** Not if the angle changes too: doubling r while going from 90° to 30° leaves τ unchanged.
- **Using the angle between F and the object's surface without checking.** θ must be the angle between r and F. If you are given a different angle, convert it first (Worked example 3).
- **Drawing every force from the centre of the object.** That is a free-body diagram. For torque, each force must start where it acts.
- **Writing joules.** Torque is in N·m. It is not work or energy.
- **Forgetting to state the axis.** The same force has different torques about different axes.

## Where this leads

Torque is the "cause" in rotational dynamics. Topic 5.4, [Rotational Inertia](/advanced-course-resources/physics-1/5-4-rotational-inertia-study-guide/), describes how hard an object is to set turning; Topics 5.5 and 5.6 put torque and rotational inertia together in rotational versions of Newton's first and second laws. Try the [practice questions](/advanced-course-resources/physics-1/5-3-torque-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/5-3-torque-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/5-3-torque-checklist/). You can also go back to [Topic 5.2](/advanced-course-resources/physics-1/5-2-connecting-linear-rotational-motion-study-guide/) or the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
