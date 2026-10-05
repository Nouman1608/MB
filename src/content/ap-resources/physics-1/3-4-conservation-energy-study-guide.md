---
resourceId: "mb-ap-phys1-3.4-study-guide"
title: "Conservation of Energy: Study Guide (Physics 1 3.4)"
description: "Use conservation of energy with algebra only: which energies a system can hold, how the choice of system decides whether its energy changes, energy bar charts, and energy lost to friction."
course: "physics-1"
unit: 3
topics: ["3.4"]
resourceType: "study-guide"
prerequisites:
  - "Kinetic energy, K = ½mv² (Topic 3.1), and work done by a force (Topic 3.2)"
  - "Spring and gravitational potential energy and choosing a zero (Topic 3.3)"
prerequisiteResources: ["mb-ap-phys1-3.3-study-guide"]
learningObjectives:
  - "Decide which energies a chosen system can have: kinetic only for a single object, kinetic and potential for interacting or deformable objects"
  - "Write mechanical energy as K + U and balance every change in one form against a change in another or a transfer across the system boundary"
  - "Explain how the choice of system decides whether the system's energy stays constant, using the work done by outside forces"
  - "Derive and calculate speeds and heights from conservation of mechanical energy, and predict factors of change"
  - "Draw and read energy bar charts for a process"
  - "Account for mechanical energy dissipated as thermal energy or sound by friction and air resistance"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus. g = 9.8 m/s² (9.8 N/kg), as on the course equation table. The course framework says exam questions use g = 10 m/s², and 9.8 m/s² is also accepted. Air resistance is ignored unless a question says otherwise"
related: ["mb-ap-phys1-3.4-revision-notes", "mb-ap-phys1-3.4-practice", "mb-ap-phys1-3.4-checklist"]
next: "mb-ap-phys1-3.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Energy is never created or destroyed. It moves between forms inside a system, or crosses the boundary as work."
  - "A single-object system can only have kinetic energy. Add a second interacting object (or a spring) and potential energy becomes possible."
  - "Mechanical energy is K + U. It stays constant when no outside force does work on the system and nothing inside it is non-conservative."
  - "Choose the system to make the bookkeeping easy: including Earth turns gravity's work into a change in U_g."
  - "Friction and air resistance turn mechanical energy into thermal energy and sound. Total energy is still conserved."
faqs:
  - question: "Is energy conserved when there is friction?"
    answer: "Total energy, yes, always. Mechanical energy, no. Friction converts some kinetic or potential energy into thermal energy (and sound). If the warmed surfaces are part of your system and no outside force does work, the system's total energy stays constant."
  - question: "Should I include Earth in my system?"
    answer: "Usually, yes. With Earth inside, gravity's effect appears as gravitational potential energy and you do not need to calculate its work. If you leave Earth out, gravity is an outside force and you must count its work as energy entering or leaving."
  - question: "Do I need forces and time to use energy methods?"
    answer: "No. Energy methods link positions and speeds directly. They do not tell you how long a motion takes or which way the object moves, so use them when the question asks for a speed, a height or a stretch."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Everything here uses algebra and graphs. If you are taking the calculus-based Physics C: Mechanics course, it has its own separate guide.

## What energies can a system have?

Start every energy problem by drawing a boundary around the **system**: the objects you choose to track. Everything outside is the **surroundings** (or environment). What energy the system can hold depends on what is inside.

| System | Energies it can have | Why |
|---|---|---|
| One object (a ball on its own) | kinetic only | potential energy needs two interacting objects (Topic 3.3) |
| Ball + Earth | kinetic and gravitational potential | ball and Earth attract by a conservative force |
| Block + spring | kinetic and elastic potential | the spring changes shape reversibly |
| Block + spring + Earth | kinetic, elastic and gravitational potential | two conservative interactions |
| Sled + snowy slope + Earth | kinetic, gravitational potential and thermal | friction inside the system warms the surfaces |

**Mechanical energy** is the sum of a system's kinetic and potential energies:

**E_mech = K + U**

Here K = ½mv² for each moving object, and U is the total of all the potential energy terms (U_s, U_g) in the system.

## The energy rule

Energy is **conserved in every interaction**. It is never created or destroyed. It can only do two things:

1. **Change form inside the system.** A drop in one type of energy is matched by an equal rise in other types. Falling: U_g goes down, K goes up by the same amount.
2. **Cross the boundary.** When an outside force does work on the system, energy moves in (positive work) or out (negative work).

Put together:

**ΔE_system = W (work done on the system by outside forces)**

If W = 0, the system's total energy is constant. If W is not zero, the system's energy changes by exactly W. Energy is still conserved overall; it has simply moved between the system and its surroundings.

## Choosing the system

The same event can be described in different ways depending on the system you choose. A 0.50 kg ball is dropped from rest and falls 2.0 m. Ignore air resistance. Take U_g = 0 at the landing point.

| | System: ball only | System: ball + Earth |
|---|---|---|
| Energies inside | K | K and U_g |
| Is gravity inside or outside? | outside: Earth pulls on the system | inside: an interaction between two system objects |
| Work by outside forces | W = mgh = 0.50 × 9.8 × 2.0 = **+9.8 J** | **0** |
| ΔK | +9.8 J | +9.8 J |
| ΔU_g | (not part of this system) | **−9.8 J** |
| Does the system's energy change? | yes, by +9.8 J | no: +9.8 − 9.8 = 0 |

Both descriptions give the same answer for the ball's speed. The ball + Earth system is usually easier, because you never calculate gravity's work: it is already counted as ΔU_g. Choosing a system whose total energy is constant is the main skill of this topic.

## When is mechanical energy constant?

The mechanical energy of a system stays constant when **both** of these are true:

1. **No outside force does work** on the system (W = 0).
2. **No non-conservative interactions** happen inside it. Friction, air resistance and crumpling or squashing objects are non-conservative.

Then K_i + U_i = K_f + U_f.

When friction or air resistance acts, some mechanical energy is **dissipated**: it becomes **thermal energy** (the surfaces warm up) and **sound**. It does not come back as kinetic or potential energy. If the surfaces that warm up are inside the system and W = 0, the **total** energy is still constant:

K_i + U_i = K_f + U_f + ΔE_thermal

Here ΔE_thermal includes any energy carried off as sound. You do not need to calculate how much goes to each.

## Energy bar charts

An **energy bar chart** shows how much of each type of energy the system has at chosen moments. To draw one:

1. Name the system and mark the zero of each potential energy.
2. Pick the moments to compare (start, a middle point, the end).
3. Draw one bar for each energy type at each moment. Bar heights must be to scale, or at least in the right ratio.
4. If W is not zero, add a bar for energy crossing the boundary. If friction acts, add a bar for ΔE_thermal.
5. Check: the total height must be the same at every moment when W = 0.

<figure>
<svg viewBox="0 0 580 330" role="img" aria-labelledby="p1-34-bar-title p1-34-bar-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-34-bar-title">Energy bar charts for a spring launcher firing a ball straight up</title>
<desc id="p1-34-bar-desc">Three groups of bars for the system ball plus spring plus Earth, each with bars labelled K, U_g and U_s, with U_g = 0 at the ball's starting position. Moment A, spring compressed and ball at rest: K 0, U_g 0, U_s 0.72 J. Moment B, ball just leaving the spring 0.060 m higher: K 0.69 J, U_g 0.03 J, U_s 0. Moment C, ball at the top of its flight: K 0, U_g 0.72 J, U_s 0. The total is 0.72 J at every moment. K bars are solid, U_g bars are hatched with diagonal lines, U_s bars are dotted.</desc>
<defs>
<pattern id="p1-34-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V8" stroke="#1d2b44" stroke-width="1.5"/></pattern>
<pattern id="p1-34-dots" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1.2" fill="#1d2b44"/></pattern>
</defs>
<rect x="0" y="0" width="580" height="330" fill="#ffffff"/>
<path d="M60 240 H550" stroke="#1d2b44" stroke-width="2"/>
<path d="M60 240 V45" stroke="#1d2b44" stroke-width="2"/>
<path d="M55 60 H550" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="4 4"/>
<text x="54" y="64" font-size="11" fill="#1d2b44" text-anchor="end">0.72 J</text>
<text x="54" y="244" font-size="11" fill="#1d2b44" text-anchor="end">0</text>
<text x="20" y="150" font-size="12" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 150)">energy (J)</text>
<rect x="164" y="60" width="30" height="180" fill="url(#p1-34-dots)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="240" y="67.4" width="30" height="172.6" fill="#1d2b44"/>
<rect x="282" y="232.6" width="30" height="7.4" fill="url(#p1-34-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="442" y="60" width="30" height="180" fill="url(#p1-34-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="11" fill="#1d2b44" text-anchor="middle">
<text x="95" y="234">0</text><text x="137" y="234">0</text><text x="179" y="54">0.72</text>
<text x="255" y="61">0.69</text><text x="297" y="226">0.03</text><text x="339" y="234">0</text>
<text x="415" y="234">0</text><text x="457" y="54">0.72</text><text x="499" y="234">0</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="95" y="258">K</text><text x="137" y="258">U_g</text><text x="179" y="258">U_s</text>
<text x="255" y="258">K</text><text x="297" y="258">U_g</text><text x="339" y="258">U_s</text>
<text x="415" y="258">K</text><text x="457" y="258">U_g</text><text x="499" y="258">U_s</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle" font-weight="600">
<text x="137" y="282">A: compressed, at rest</text>
<text x="297" y="282">B: leaving the spring</text>
<text x="457" y="282">C: top of flight</text>
</g>
<text x="300" y="310" font-size="12" fill="#1d2b44" text-anchor="middle">Key: K solid · U_g hatched · U_s dotted. Total 0.72 J at A, B and C; no work from outside.</text>
</svg>
<figcaption>Figure 1. Energy bar charts for Worked example 2, system = ball + spring + Earth, U_g = 0 at the ball's starting position. Energy moves from the spring (A) to kinetic energy (B) to gravitational potential energy (C). The total stays at 0.72 J because no outside force does work and there is no friction.</figcaption>
</figure>

## Worked example 1: speed on a smooth track

**Question.** A cart is released from rest at the top of a smooth (frictionless) curved track, 1.8 m above the lowest point. Ignore air resistance. (a) Derive an expression for the cart's speed at the lowest point. (b) Calculate it. (c) Find the speed where the track is 0.80 m above the lowest point.

**System:** cart + Earth. The track's normal force is always perpendicular to the motion, so it does no work. No friction. So mechanical energy is constant. Take U_g = 0 at the lowest point.

1. **(a)** Start: K_i = 0 and U_i = mgh. Lowest point: K_f = ½mv² and U_f = 0.
2. mgh = ½mv². The mass cancels: **v = √(2gh)**.
3. **(b)** v = √(2 × 9.8 × 1.8) = **5.9 m/s**.
4. **(c)** The cart has dropped 1.8 − 0.80 = 1.0 m. mg(1.8 m) = mg(0.80 m) + ½mv², so v = √(2 × 9.8 × 1.0) = **4.4 m/s**.

**Interpretation.** The answer does not depend on the cart's mass or on the shape of the track. Only the drop in height matters. Energy cannot tell you how long the trip takes, because that does depend on the shape.

**Check.** √(2gh) has units √(m/s² × m) = m/s. A bigger drop gives a bigger speed, as it should.

## Worked example 2: a spring launcher

**Question.** A toy launcher fires a 0.050 kg ball straight up. Its spring has k = 400 N/m and is compressed by 0.060 m. The ball leaves the spring when it reaches the spring's relaxed length. Ignore air resistance and the spring's mass. Take **+y upward** and U_g = 0 at the ball's starting position. (a) How high above its starting position does the ball rise? (b) How fast is it moving as it leaves the spring? (c) Predict the height if the compression is doubled.

**System:** ball + spring + Earth. No outside work, no friction, so K + U_s + U_g is constant (Figure 1).

1. Energy stored: U_s = ½kΔx² = ½ × 400 × (0.060)² = **0.72 J**.
2. **(a)** At the top, K = 0 and U_s = 0, so all 0.72 J is U_g: mgh = 0.72 J. h = 0.72 ÷ (0.050 × 9.8) = **1.5 m** (1.47 m).
3. **(b)** When the ball leaves the spring it has risen 0.060 m, so U_g = 0.050 × 9.8 × 0.060 = 0.029 J. Then K = 0.72 − 0.029 = 0.69 J. v = √(2K / m) = √(2 × 0.69 ÷ 0.050) = **5.3 m/s**.
4. **(c)** h = kΔx² / (2mg), so h ∝ Δx². Doubling Δx multiplies h by 4: about **5.9 m**.

**Check.** The bar heights in Figure 1 add to 0.72 J at A, B and C. If you forgot U_g at B, you would get 5.4 m/s, slightly too fast.

## Worked example 3: a slide with friction

**Question.** A 40 kg child starts from rest at the top of a playground slide 3.0 m high and reaches the bottom at 6.0 m/s. (a) How much mechanical energy is dissipated? (b) Where does it go? (c) What speed would she reach on a frictionless slide?

**System:** child + slide + Earth. Take U_g = 0 at the bottom.

1. **(a)** Start: U_g = mgh = 40 × 9.8 × 3.0 = 1176 J ≈ **1200 J**; K = 0.
2. Bottom: K = ½ × 40 × 6.0² = **720 J**; U_g = 0.
3. Mechanical energy dissipated = 1176 − 720 = **460 J** (456 J), about 39% of the start value.
4. **(b)** Friction between the child and the slide turns it into **thermal energy** in her clothes and the slide surface, plus a little sound. Both surfaces are inside the system and no outside force does work, so the **total** energy of the system is still 1176 J.
5. **(c)** Without friction, v = √(2gh) = √(2 × 9.8 × 3.0) = **7.7 m/s**.

**Interpretation.** Mechanical energy decreased but energy was not destroyed. The "missing" 456 J is in the warmed surfaces.

## Comparing scenarios with energy

Energy methods make some comparisons almost instant.

**Three throws from a cliff.** Three identical stones are thrown from the same 15 m cliff top at 12 m/s: one straight up, one horizontally, one straight down. Ignore air resistance. With the system stone + Earth, each starts with the same K and the same U_g, and falls the same 15 m. So each lands with the **same speed**: v = √(12² + 2 × 9.8 × 15) = **21 m/s**. Their paths and flight times differ, and the horizontal throw lands at an angle while the other two land moving straight down, but the speed does not depend on any of those.

**Testing conservation with data.** If mechanical energy is conserved for a low-friction cart with light wheels running down a ramp from rest, then ½mv² = mgh, so v² = 2gh. A graph of v² against h should be a straight line through the origin with slope 2g = 19.6 m/s². A smaller slope is evidence that some mechanical energy is being dissipated. Practice Q7 works through a data set like this.

## Common misconceptions

- **"A falling ball's potential energy turns into kinetic energy."** Only for the ball + Earth system. For the ball alone, there is no potential energy: gravity does work from outside.
- **"Energy is lost when there is friction."** Mechanical energy decreases; total energy does not. It becomes thermal energy and sound (Worked example 3).
- **"Heavier objects reach the bottom of a smooth slope faster."** The mass cancels in mgh = ½mv² (Worked example 1).
- **"The steeper or longer path gives a different final speed."** On frictionless paths only the change in height matters.
- **"Doubling the spring compression doubles the height."** U_s ∝ Δx², so the height quadruples (Worked example 2).
- **"The normal force from a track adds energy."** It acts perpendicular to the motion and does no work.
- **"Conservation of energy means a system's energy can never change."** It changes whenever outside forces do work on it. The choice of system decides this.
- **Mixing two zeros.** Pick one zero for U_g and use it at every moment in the same problem.

## Where this leads

Topic 3.5, [Power](/advanced-course-resources/physics-1/3-5-power-study-guide/), asks how **fast** energy is transferred, not just how much. Try the [practice questions](/advanced-course-resources/physics-1/3-4-conservation-energy-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/3-4-conservation-energy-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/3-4-conservation-energy-checklist/) to consolidate. You can also look back at [Topic 3.3, Potential Energy](/advanced-course-resources/physics-1/3-3-potential-energy-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
