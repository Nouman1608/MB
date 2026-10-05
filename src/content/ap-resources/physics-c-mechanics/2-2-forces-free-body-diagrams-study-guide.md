---
resourceId: "mb-ap-physcm-2.2-study-guide"
title: "Forces and Free-Body Diagrams: Study Guide (Physics C: Mechanics 2.2)"
description: "Forces as interactions between objects, contact forces from electric interactions, free-body diagrams drawn to the course conventions, tilted axes on slopes, and forces that change with time."
course: "physics-c-mechanics"
unit: 2
topics: ["2.2"]
resourceType: "study-guide"
prerequisites:
  - "Resolving vectors and adding them in unit-vector notation (Topics 1.1 and 1.5)"
  - "Choosing a system and locating its center of mass (Topic 2.1)"
prerequisiteResources: ["mb-ap-physcm-2.1-study-guide"]
learningObjectives:
  - "Describe every force as an interaction, naming the object that exerts it and the object it acts on"
  - "Explain why an object or system cannot exert a net force on itself"
  - "Explain contact forces as the large-scale result of electric forces between atoms"
  - "Draw free-body diagrams to the course conventions: a dot for the center of mass, separate straight arrows, side-by-side arrows for forces in the same direction, no components"
  - "Choose axes with one axis along the acceleration, including tilted axes on a slope, and turn a free-body diagram into component equations"
  - "Draw free-body diagrams for different choices of system, and as snapshots when a force changes with time"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "A calculator for arithmetic and trigonometry (set to degrees). We use g = 9.8 m/s², the value on the course equation table"
related: ["mb-ap-physcm-2.2-revision-notes", "mb-ap-physcm-2.2-practice", "mb-ap-physcm-2.2-checklist"]
next: "mb-ap-physcm-2.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "A force is a vector that describes an interaction between two objects or systems. Every force has a 'by what' and an 'on what'."
  - "An object or system cannot exert a net force on itself. Forces between its own parts cancel out."
  - "Contact forces (normal, friction, tension) are the large-scale effect of electric forces between atoms."
  - "A free-body diagram shows only the forces exerted on the chosen system by its environment, as separate straight arrows from a dot at the center of mass."
  - "Do not draw components on the diagram. Forces in the same direction go side by side, not on top of each other."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 2.2?"
    answer: "They are separate courses with the same diagram conventions. Physics C: Mechanics uses unit-vector notation more, and later in the unit it expects you to work with forces that change with time, position or velocity, so this guide includes a force that changes with time."
  - question: "Should I draw the components of a force on my free-body diagram?"
    answer: "No. The course expects whole forces only, each as one straight arrow from the dot. Work out components separately, beside the diagram or in your equations."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses**, and both have a Topic 2.2 with the same title and the same diagram rules. This guide is the **calculus-based** one. It writes forces in unit-vector notation and treats a force that changes with time, which prepares you for the time-, position- and velocity-dependent forces later in the unit. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/2-2-forces-free-body-diagrams-study-guide/); do not mix the two when you revise.

## A force is an interaction

A **force** describes an interaction between two objects or systems. It is a **vector**: it has a size, measured in newtons (N), and a direction.

Every force has two objects attached to it: the one that **exerts** it and the one it **acts on**. Get into the habit of naming both: "F_N, floor on box", "F_T, cable on crate". If you cannot say what exerts a force, it is not a force. "The force of motion" fails this test, and so does "the force of inertia".

### Nothing can push itself

**An object or system cannot exert a net force on itself.** Inside any system, the parts push and pull on each other, but these internal forces cancel in pairs (why they cancel is Topic 2.3). So they never change the motion of the system as a whole.

That explains some everyday puzzles:

- You cannot lift yourself by pulling up on your own belt. Your hands pull up, your belt pulls your hands down, and both are inside the system "you".
- A car's engine does not push the car forward. The engine turns the wheels, the tyres push backward on the road, and **the road pushes the car forward** through friction. The forward force on the car is exerted by something outside it.

## Contact forces and long-range forces

**Contact forces** act where two objects touch: the normal force, friction, tension in a string or cable, the push of a spring, the drag of air or water. At the scale of atoms there is no "touching". The electrons of the atoms in one surface repel the electrons in the other, and the atoms pull on each other when they are stretched apart. Contact forces are the **large-scale effect of these electric forces between atoms**.

**Long-range forces** act without contact. In this course the main one is the **gravitational force**, which Earth exerts on every object near it. Electric and magnetic forces can also act at a distance.

## Forces as vectors

Because forces are vectors, you add them by components. Take **+x to the right and +y up**. A 15 kg crate is held by two ropes and pulled down by gravity:

- F₁ = (120 i + 50 j) N, rope 1 on crate
- F₂ = (−40 i + 90 j) N, rope 2 on crate
- F_g = (−147 j) N, Earth on crate, since mg = 15 × 9.8 = 147 N

Sum: ΣF = (120 − 40) i + (50 + 90 − 147) j = **(80 i − 7 j) N**, of size 80 N, about 5° below the +x direction.

A force can also **change with time**. A cable might pull with T(t) = 400 + 80t (T in N, t in s). Then a free-body diagram is a **snapshot**: it shows the forces at one instant, and the arrows can change length, or even appear and disappear, as time goes on (Worked example 2).

## What a free-body diagram shows

A **free-body diagram** shows **each force exerted on one chosen object or system by its environment**. You use it to see all the forces at once and to write the equations for the situation.

The course has firm conventions for these diagrams. Exam answers are expected to follow them:

1. Represent the object or system by a **dot**. The dot stands for the **center of mass** (Topic 2.1): the system is treated as if all its mass were there.
2. Draw **each force as its own straight arrow, starting on the dot** and pointing in the direction of the force.
3. **Do not draw components** on the diagram. Work them out separately.
4. If two or more forces point the **same way, draw them side by side**, not overlapping, so each one can still be seen.
5. **Label** each arrow with what exerts it and what it acts on, and make bigger forces look longer.

Leave off anything that is not a force on the system: velocity, acceleration, "ma", the net force, and forces the system exerts on other things.

### A method that never misses a force

1. Name the system and picture its boundary.
2. Draw the dot.
3. Add the **long-range** force: Earth's gravitational force, straight down.
4. Go round the boundary. Every place where something **touches** the system can give a contact force: a surface (normal force, maybe friction), a rope (tension), a hand (applied force).
5. Check each arrow: "by what, on what?"

## Choosing axes

The diagram is a picture; the equations need components. Choose a coordinate system with **one axis parallel to the acceleration** (or the direction of motion). Then most forces lie along an axis, and only a few need splitting.

On a slope, the object moves along the surface, so tilt your axes: **+x along the slope, +y perpendicular to it**. The normal force then lies along +y, friction along ±x, and only gravity (and any rope at an angle) needs components. For gravity on a slope of angle θ, the component along the slope is mg sin θ and the component into the slope is mg cos θ.

## Worked example 1: a skier on a tow rope

**Question.** A 70 kg skier is towed up a snowy slope inclined at 15° to the horizontal. The tow rope pulls at 20° above the slope surface. The snow exerts a friction force of 40 N down the slope, and the skier moves up the slope at a steady speed. (a) Draw the free-body diagram. (b) Using tilted axes, **+x up the slope and +y perpendicular to it, away from the snow**, find the rope's tension and the normal force. (A steady velocity means the forces balance; Topic 2.4 explains why.)

**(a)** Earth (long-range), the snow (touching) and the rope (attached) interact with the skier. So there are four forces: F_g (Earth on skier) straight down; F_N (snow on skier) perpendicular to the slope; F_f (snow on skier) down the slope; F_T (rope on skier) 20° above the slope.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="pcm22-ski-title pcm22-ski-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm22-ski-title">Free-body diagram of a skier towed up a 15 degree slope</title>
<desc id="pcm22-ski-desc">Left: a dot for the skier with four separate arrows starting on it. The longest arrow points straight down, labelled F_g, Earth on skier, 686 N. A slightly shorter arrow points up and to the left, perpendicular to the slope, labelled F_N, snow on skier. A medium arrow points up and to the right at 20 degrees above the slope direction, labelled F_T, rope on skier. A short arrow points down the slope, to the left and slightly down, labelled F_f, snow on skier, 40 N. Right, in a dashed box headed chosen axes, not part of the diagram: a +x arrow up the slope at 15 degrees above horizontal and a +y arrow perpendicular to it.</desc>
<defs><marker id="pcm22-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm22-ah)" fill="none">
<path d="M200 180 V300"/>
<path d="M200 180 L174 81"/>
<path d="M200 180 L245 148"/>
<path d="M200 180 L165 189"/>
</g>
<circle cx="200" cy="180" r="6" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="210" y="300">F_g (Earth on skier) 686 N</text>
<text x="96" y="70">F_N (snow on skier)</text>
<text x="244" y="136">F_T (rope on skier)</text>
<text x="30" y="212">F_f (snow on skier) 40 N</text>
</g>
<rect x="360" y="60" width="190" height="170" fill="none" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<text x="370" y="80" font-size="12" fill="#1d2b44">chosen axes, not part of</text>
<text x="370" y="96" font-size="12" fill="#1d2b44">the free-body diagram:</text>
<g stroke="#1d2b44" stroke-width="2" marker-end="url(#pcm22-ah)" fill="none">
<path d="M440 200 L517 179"/>
<path d="M440 200 L419 123"/>
</g>
<path d="M440 200 H520" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<g font-size="12" fill="#1d2b44">
<text x="452" y="166">+x (up slope)</text>
<text x="400" y="118">+y</text>
<text x="524" y="196">15°</text>
</g>
</svg>
<figcaption>Figure 1. The skier's free-body diagram: four separate arrows from one dot, with no components drawn. Arrow lengths show the order of sizes only; the 40 N friction arrow is drawn longer than scale so it can be seen. The tilted axes are shown apart from the diagram.</figcaption>
</figure>

**(b)** Components along the tilted axes:

| Force | x-component (up slope) | y-component (away from slope) |
|---|---|---|
| F_g, 686 N | −686 sin 15° = −177.5 N | −686 cos 15° = −662.6 N |
| F_N | 0 | +F_N |
| F_f, 40 N | −40 N | 0 |
| F_T | +F_T cos 20° | +F_T sin 20° |

x: F_T cos 20° − 177.5 − 40 = 0, so F_T = 217.5 ÷ cos 20° = **232 N** (231.5 N).

y: F_N + F_T sin 20° − 662.6 = 0, so F_N = 662.6 − 79.2 = **583 N**.

**Interpretation.** The normal force is less than mg cos 15° because the rope pulls partly away from the slope. With tilted axes, only two forces needed splitting; with horizontal and vertical axes, three would.

## Worked example 2: a force that changes with time

**Question.** A 50 kg crate rests on the ground. At t = 0 a winch starts to pull straight up on it with a cable. The cable's tension is T(t) = 400 + 80t, with T in N and t in s. Take **+y up**. (a) Draw the free-body diagram at t = 0 and find the normal force. (b) Find N(t) while the crate is still on the ground, and when the crate leaves the ground. (c) Draw the free-body diagram at t = 2.0 s.

**(a)** Three forces at t = 0: F_g (Earth on crate) = 50 × 9.8 = 490 N down; T (cable on crate) = 400 N up; F_N (ground on crate) up. Two forces point up, so on the diagram the T and F_N arrows go **side by side**. The crate is at rest, so the forces balance: F_N = 490 − 400 = **90 N**.

**(b)** While the crate stays on the ground: F_N(t) = 490 − (400 + 80t) = **90 − 80t** (N). The ground can only push, so F_N cannot be negative. It reaches zero at t = 90 ÷ 80 = **1.1 s** (1.125 s). That is when the crate starts to rise.

**(c)** At t = 2.0 s the crate is off the ground, so there is **no normal force**. Only two arrows remain: T = 400 + 160 = 560 N up and F_g = 490 N down. The upward arrow is now longer. The forces no longer balance; Topic 2.5 shows what the 70 N difference does.

**The point.** Each free-body diagram is a snapshot. As T grows, the F_N arrow shrinks and then disappears.

## Worked example 3: the system changes the diagram

**Question.** Block A (2.0 kg) sits on block B (5.0 kg) on a rough floor. A horizontal string ties A to a wall on the left, so A cannot move. A hand pulls B to the right with force F, and B slides out at a steady speed. The surfaces between A and B and between B and the floor are rough. Draw free-body diagrams for (a) A, (b) B and (c) the system A + B.

**(a) Block A:** F_g (Earth on A) 19.6 N down; F_N (B on A) 19.6 N up; F_T (string on A) to the left; friction (B on A) to the **right**, because B slides right under A and drags it along.

**(b) Block B:** F_g (Earth on B) 49 N down; F_N (A on B), A pressing down on B, 19.6 N down; F_N (floor on B) 68.6 N up; F (hand on B) to the right; friction (A on B) to the left; friction (floor on B) to the left. **Two pairs of forces share a direction**, so they are drawn side by side (Figure 2).

<figure>
<svg viewBox="0 0 560 380" role="img" aria-labelledby="pcm22-blockb-title pcm22-blockb-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm22-blockb-title">Free-body diagram of the lower block, with side-by-side arrows</title>
<desc id="pcm22-blockb-desc">A dot for block B with six separate arrows starting on it. One long arrow points up, labelled F_N, floor on B, 68.6 N. Two parallel arrows point down, side by side: the longer one labelled F_g, Earth on B, 49 N, and the shorter one labelled F_N, A on B, 19.6 N. One arrow points right, labelled F, hand on B. Two parallel arrows point left, side by side: one labelled f, A on B, and the other labelled f, floor on B.</desc>
<defs><marker id="pcm22-ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="380" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm22-ah2)" fill="none">
<path d="M280 180 V29"/>
<path d="M270 180 V288"/>
<path d="M290 180 V223"/>
<path d="M280 180 H410"/>
<path d="M280 170 H230"/>
<path d="M280 190 H200"/>
</g>
<circle cx="280" cy="180" r="16" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="292" y="40">F_N (floor on B) 68.6 N</text>
<text x="258" y="282" text-anchor="end">F_g (Earth on B) 49 N</text>
<text x="300" y="226">F_N (A on B) 19.6 N</text>
<text x="418" y="184">F (hand on B)</text>
<text x="222" y="160" text-anchor="end">f (A on B)</text>
<text x="192" y="206" text-anchor="end">f (floor on B)</text>
</g>
<text x="280" y="342" font-size="12" fill="#1d2b44" text-anchor="middle">Vertical arrows to scale. Horizontal arrows drawn for steady speed,</text>
<text x="280" y="360" font-size="12" fill="#1d2b44" text-anchor="middle">so F equals the sum of the two friction forces.</text>
</svg>
<figcaption>Figure 2. Block B. The two downward forces and the two leftward forces are drawn as separate arrows side by side, each starting on the dot, never merged into one arrow and never overlapping.</figcaption>
</figure>

**(c) System A + B:** the forces between A and B (the normal pair and the friction pair) are now **internal**, so they disappear from the diagram. What remains: F_g (Earth on A + B) 68.6 N down; F_N (floor on B) 68.6 N up; F (hand) to the right; F_T (string on A) to the left; friction (floor on B) to the left. The last two share a direction, so they go side by side.

**Check.** The same physical situation gave three different diagrams. The choice of system decides which forces are external, which is why you name the system first.

## Common misconceptions

- **Drawing components on the diagram.** The course wants whole forces only; split them in your working.
- **Merging same-direction forces into one arrow.** Draw them side by side, each from the dot.
- **Adding a "force of motion" or "ma" arrow.** Neither has a "by what". They are not forces.
- **Including forces the system exerts on others.** A free-body diagram shows forces **on** the system only.
- **"The engine pushes the car."** Internal forces cannot move a system; the road pushes the car.
- **"The normal force always equals mg."** In Worked example 1 it is 583 N, not 686 N; in Worked example 2 it falls to zero.
- **"Contact forces are a different kind of force."** They are electric forces between atoms, seen on a large scale.
- **Keeping horizontal axes on a slope.** Tilt them so one axis runs along the motion.

## Where this leads

Every force on a free-body diagram is one half of an interaction. The other half acts on a different object, which is the subject of [Topic 2.3, Newton's Third Law](/advanced-course-resources/physics-c-mechanics/2-3-newtons-third-law-study-guide/). Topics 2.4 and 2.5 then turn the component sums from your diagrams into equations of motion, and Topics 2.8 and 2.9 bring forces that depend on position and velocity. Earlier: [Topic 2.1, Systems and Center of Mass](/advanced-course-resources/physics-c-mechanics/2-1-systems-center-mass-study-guide/). Try the [practice questions](/advanced-course-resources/physics-c-mechanics/2-2-forces-free-body-diagrams-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/2-2-forces-free-body-diagrams-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/2-2-forces-free-body-diagrams-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
