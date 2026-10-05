---
resourceId: "mb-ap-phys1-6.2-study-guide"
title: "Torque and Work: Study Guide (Physics 1 6.2)"
description: "How a torque acting through an angle does work on a rigid system, W = τΔθ, signs of work, area under a torque–angle graph and the link to rotational kinetic energy, with algebra only."
course: "physics-1"
unit: 6
topics: ["6.2"]
resourceType: "study-guide"
prerequisites:
  - "Work done by a constant force, W = Fd cos θ, and the work–energy theorem (Topic 3.2)"
  - "Torque, τ = rF sin θ = rF⊥, and angular displacement in radians (Topics 5.1 and 5.3)"
  - "Rotational kinetic energy, K = ½Iω² (Topic 6.1)"
prerequisiteResources: ["mb-ap-phys1-6.1-study-guide"]
learningObjectives:
  - "Derive W = τΔθ from the work done by a force acting along an arc"
  - "Calculate the work done by a constant torque, with Δθ in radians and the correct sign"
  - "Find the work done by a changing torque from the area under a torque–angle graph"
  - "Use the net work done by torques to find the change in rotational kinetic energy and the final angular velocity"
  - "Predict how work, angular displacement or final angular velocity change when torque or angle changes, and plan an experiment to measure the work done by a torque"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. Angular displacement must be in radians (1 rev = 2π rad). Answers to 2 or 3 significant figures"
related: ["mb-ap-phys1-6.2-revision-notes", "mb-ap-phys1-6.2-practice", "mb-ap-phys1-6.2-checklist"]
next: "mb-ap-phys1-6.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "A torque transfers energy into or out of a rigid system only if the system turns while the torque acts."
  - "For a constant torque, W = τΔθ, with Δθ in radians. The unit is the joule."
  - "Work is positive when the torque acts in the same sense as the rotation, and negative when it opposes the rotation."
  - "For a changing torque, the work is the area under the torque–angle graph."
  - "The net work done by all the torques equals the change in rotational kinetic energy: W_net = ½Iω² − ½Iω₀²."
faqs:
  - question: "Torque and work are both measured in N·m. Are they the same thing?"
    answer: "No. Torque is a turning effect and is written in N·m. Work is energy transferred and is written in joules. A torque does work only when it acts through an angle: W = τΔθ, and the radian has no unit, so N·m × rad = J."
  - question: "Can I use W = τΔθ if the torque changes?"
    answer: "Not with a single value of τ. Draw or use the torque–angle graph and find the area under it. You can split the area into rectangles and triangles."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. In Unit 3 a force did work by acting through a distance. Here a torque does work by acting through an angle. No calculus is needed.

## Torque transfers energy only when something turns

Push hard on a spanner gripping a bolt that will not move. You exert a large torque, but the bolt does not turn. No energy goes into the bolt. Now push the same spanner on a loose bolt, and it turns. Energy is transferred.

The rule is the same as for forces. A force does work only if its point of application moves. A torque does work only if the object **turns** while the torque acts. A torque with zero angular displacement does zero work, however large it is.

## Deriving W = τΔθ

Take a force F acting at the rim of a wheel, at distance r from the axle, always perpendicular to the radius (tangent to the circle). Let the wheel turn through angle Δθ.

1. The point where the force acts moves along an arc. The arc length is **s = rΔθ**, with Δθ in radians.
2. The force points along the arc the whole time, so the work it does is W = Fs.
3. Substitute s: W = F(rΔθ) = (rF)Δθ.
4. For a perpendicular force, rF is the torque τ. So:

**Work done by a constant torque: W = τΔθ**

If the force is at an angle to the radius, only the perpendicular component F⊥ moves along the arc, and the parallel component does nothing. Since τ = rF⊥, the result is the same. A force pointing straight at the axle has F⊥ = 0, so it exerts no torque and does no work on the rotation.

**Units.** N·m × rad = J, because a radian is a ratio of two lengths and has no dimension. Always put Δθ in **radians**. One revolution is 2π rad; 90° is π/2 rad. With degrees, a torque of 8.0 N·m turned through 90° would seem to do 720 J; the correct value is 8.0 × π/2 = 12.6 J.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="p1-62-arc-title p1-62-arc-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-62-arc-title">A tangential force doing work on a roundabout seen from above</title>
<desc id="p1-62-arc-desc">Top view of a circular roundabout with its axle at the centre O and radius r = 1.5 m. A force F of 60 N acts at point P on the rim, tangent to the circle. The roundabout turns counterclockwise through a quarter turn, delta theta equals pi over 2 radians, carrying P along a dashed arc to the top of the circle. The arc length s equals r delta theta, 2.36 m. A note shows W = F s = F r delta theta = tau delta theta.</desc>
<defs><marker id="p1-62-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<circle cx="180" cy="180" r="110" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="180" cy="180" r="5" fill="#1d2b44"/>
<path d="M180 180 H290" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M180 180 V70" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 4"/>
<path d="M290 180 A110 110 0 0 0 180 70" fill="none" stroke="#1d2b44" stroke-width="3" stroke-dasharray="8 5" marker-end="url(#p1-62-arr)"/>
<path d="M215 180 A35 35 0 0 0 180 145" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M290 180 V95" stroke="#1d2b44" stroke-width="3" marker-end="url(#p1-62-arr)"/>
<circle cx="290" cy="180" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="166" y="200">O</text>
<text x="222" y="198">r = 1.5 m</text>
<text x="300" y="196">P (start)</text>
<text x="300" y="112">F = 60 N</text>
<text x="300" y="127">(tangent to rim)</text>
<text x="196" y="160">Δθ = π/2 rad</text>
<text x="252" y="80">arc s = rΔθ</text>
<text x="252" y="95">= 2.36 m</text>
<text x="380" y="190">W = Fs</text>
<text x="380" y="210">= F(rΔθ)</text>
<text x="380" y="230">= (rF)Δθ = τΔθ</text>
<text x="380" y="260">= 90 N·m × π/2 rad</text>
<text x="380" y="280">= 141 J</text>
</g>
</svg>
<figcaption>Figure 1. Top view of the roundabout in Worked example 1, axle at O. The 60 N push at P stays tangent to the rim while the roundabout turns counterclockwise through a quarter turn. P moves along an arc of length s = rΔθ, so the work is F × rΔθ = τΔθ.</figcaption>
</figure>

## Positive, negative and zero work

Choose a positive sense of rotation, for example counterclockwise. Then:

| Torque compared with rotation | Sign of work | Energy |
|---|---|---|
| Same sense (a motor driving a fan) | positive | into the system; it speeds up if nothing else acts |
| Opposite sense (friction at an axle, a brake) | negative | out of the system; it slows down if nothing else acts |
| No rotation while it acts (a stuck bolt) | zero | no transfer |
| Force through the axle (radial) | zero | no transfer |

When several torques act, add their works with signs. The total is the **net work**, which also equals τ_net × Δθ when every torque is constant.

## Torque, work and rotational kinetic energy

In Unit 3 you met the work–energy theorem: net work on an object equals its change in kinetic energy. The rotational version is the same idea. For a rigid object turning about a fixed axis:

**W_net = ΔK = ½Iω² − ½Iω₀²**

Positive net work speeds the object up; negative net work slows it down. This is often the fastest route to a final angular velocity, because it skips time and angular acceleration completely.

You can check the link with Topic 5.6. For a constant net torque, α = τ_net / I, and rotational kinematics gives ω² = ω₀² + 2αΔθ. Multiply by ½I: ½Iω² − ½Iω₀² = IαΔθ = τ_net Δθ. The two approaches agree.

## When the torque changes: area under the graph

Many torques change as an object turns: a wind-up spring loses torque as it unwinds, and a motor's torque depends on how it is driven. For a changing torque, plot **torque (vertical) against angular position (horizontal)**. The work done is the **area between the graph and the angle axis**.

- Split the area into rectangles (constant torque) and triangles (torque changing steadily).
- Area below the axis (negative torque while θ increases) counts as negative work.
- A rectangle of height τ and width Δθ gives back W = τΔθ, so the area rule includes the constant-torque case.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="p1-62-graph-title p1-62-graph-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-62-graph-title">Torque against angular position for a motor spinning up a wheel</title>
<desc id="p1-62-graph-desc">Torque in newton metres from 0 to 8 against angular position in radians from 0 to 7. The torque rises in a straight line from 0 at 0 rad to 6.0 N·m at 2.0 rad, stays at 6.0 N·m until 5.0 rad, then falls in a straight line to 0 at 7.0 rad. The area under the graph is split into a hatched triangle of 6 J from 0 to 2 rad, a shaded rectangle of 18 J from 2 to 5 rad and a hatched triangle of 6 J from 5 to 7 rad. Total area 30 J.</desc>
<defs><pattern id="p1-62-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V8" stroke="#1d2b44" stroke-width="1"/></pattern></defs>
<rect x="0" y="0" width="560" height="320" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M130 260 V60 M190 260 V60 M250 260 V60 M310 260 V60 M370 260 V60 M430 260 V60 M490 260 V60"/>
<path d="M70 210 H500 M70 160 H500 M70 110 H500 M70 60 H500"/>
</g>
<polygon points="70,260 190,110 190,260" fill="url(#p1-62-hatch)" stroke="#1d2b44" stroke-width="1"/>
<rect x="190" y="110" width="180" height="150" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1"/>
<polygon points="370,110 490,260 370,260" fill="url(#p1-62-hatch)" stroke="#1d2b44" stroke-width="1"/>
<path d="M70 260 H510 M70 260 V45" stroke="#1d2b44" stroke-width="2" fill="none"/>
<polyline points="70,260 190,110 370,110 490,260" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="278">0</text><text x="130" y="278">1</text><text x="190" y="278">2</text><text x="250" y="278">3</text><text x="310" y="278">4</text><text x="370" y="278">5</text><text x="430" y="278">6</text><text x="490" y="278">7</text>
<text x="290" y="305" font-size="13">angular position, θ (rad)</text>
<text x="160" y="235" font-weight="600">6 J</text>
<text x="280" y="190" font-weight="600">18 J</text>
<text x="400" y="235" font-weight="600">6 J</text>
<text x="280" y="96">6.0 N·m (constant)</text>
<text x="430" y="70">total area = 30 J</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="264">0</text><text x="62" y="214">2</text><text x="62" y="164">4</text><text x="62" y="114">6</text><text x="62" y="64">8</text>
</g>
<text x="24" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 160)">torque, τ (N·m)</text>
</svg>
<figcaption>Figure 2. Torque–angle graph for Worked example 2. The work done is the area under the line: two hatched triangles of 6 J each and a shaded rectangle of 18 J, 30 J in total. Multiplying the largest torque by the whole angle (6.0 × 7.0 = 42 J) overestimates it.</figcaption>
</figure>

## Worked example 1: pushing a roundabout

**Question.** A playground roundabout has rotational inertia 180 kg·m² about its axle and starts at rest. A parent pushes tangentially at the rim, 1.5 m from the axle, with a constant force of 60 N while it turns through a quarter turn (Figure 1). Friction at the axle exerts a constant opposing torque of 12 N·m. Take counterclockwise (the direction of the push) as positive. Find (a) the work done by the push, (b) the work done by friction, and (c) the angular velocity after the quarter turn.

1. Angular displacement: a quarter turn is Δθ = 2π ÷ 4 = π/2 = **1.57 rad**.
2. Torque of the push: τ = rF = 1.5 m × 60 N = 90 N·m.
3. **(a)** W_push = τΔθ = 90 × 1.571 = **+141 J**. Check: arc length s = 1.5 × 1.571 = 2.36 m, and Fs = 60 × 2.36 = 141 J. ✓
4. **(b)** W_friction = −12 × 1.571 = **−18.8 J**. It is negative because the friction torque opposes the rotation.
5. Net work: 141.4 − 18.8 = **122.5 J**. (Or τ_net Δθ = (90 − 12) × 1.571 = 122.5 J.)
6. **(c)** Starting from rest, W_net = ½Iω², so ω = √(2W_net / I) = √(2 × 122.5 ÷ 180) = √1.361 = **1.17 rad/s**.

**Check.** The rim then moves at rω = 1.5 × 1.17 = 1.75 m/s, a sensible walking-pace speed for a gentle push. Without friction, ω would be √(2 × 141.4 ÷ 180) = 1.25 rad/s, a little larger, as expected.

## Worked example 2: a changing torque from a graph

**Question.** A motor spins a wheel up from rest. The wheel's rotational inertia is 0.15 kg·m², and friction is negligible. The motor's torque varies with angular position as in Figure 2. Find the work done by the motor and the wheel's final angular velocity.

1. Split the area under the graph.
   - 0 to 2.0 rad, triangle: ½ × 2.0 rad × 6.0 N·m = **6.0 J**.
   - 2.0 to 5.0 rad, rectangle: 3.0 rad × 6.0 N·m = **18 J**.
   - 5.0 to 7.0 rad, triangle: ½ × 2.0 rad × 6.0 N·m = **6.0 J**.
2. Total work: 6.0 + 18 + 6.0 = **30 J**.
3. All of it becomes rotational kinetic energy: ½Iω² = 30 J, so ω = √(2 × 30 ÷ 0.15) = √400 = **20 rad/s**.

**Interpretation.** The wheel keeps speeding up all the way to 7.0 rad, even while the torque is falling, because the torque is still positive and still doing positive work. Speeding up only stops when the torque reaches zero. Using one torque value (6.0 N·m × 7.0 rad = 42 J) would overestimate the work, because the torque is smaller than 6.0 N·m for part of the turn.

## Worked example 3: deriving a coasting angle

**Question.** A ceiling fan with rotational inertia I is spinning at ω₀ when it is switched off. A constant friction torque of size τ_f slows it to rest. (a) Derive an expression for the angle it turns through before stopping. (b) Evaluate it for I = 0.20 kg·m², ω₀ = 25 rad/s and τ_f = 0.050 N·m. (c) If the fan had been spinning twice as fast, how would the stopping angle change?

1. **(a)** Only friction does work, and it opposes the motion: W_net = −τ_f Δθ.
2. Work–energy: −τ_f Δθ = 0 − ½Iω₀².
3. So **Δθ = Iω₀² / (2τ_f)**.
4. **(b)** Δθ = 0.20 × 25² ÷ (2 × 0.050) = 125 ÷ 0.10 = **1250 rad**, which is 1250 ÷ 2π ≈ **199 revolutions**. The initial kinetic energy was ½ × 0.20 × 625 = 62.5 J.
5. **(c)** Δθ depends on ω₀², so doubling ω₀ makes the stopping angle **4 times** larger: 5000 rad, or about 796 revolutions.

**Check the expression.** Larger I or larger ω₀ means more stored energy, so more turning before it is used up. A larger friction torque removes energy faster per radian, so the fan stops sooner. The units are kg·m² × (rad/s)² ÷ N·m = J ÷ N·m = rad. ✓

## Planning an experiment

To measure the work done by a torque in the lab, you need the torque at each angle and the angle turned:

- Wrap a string around an axle of known radius r and pull it with a force sensor, keeping the string tangent to the axle.
- The torque at each moment is τ = rF. The angle turned equals the length of string unwound divided by r (Δθ = d / r), or you can read it with a rotary motion sensor.
- Plot τ against θ and find the area. Compare it with the change in ½Iω², measuring ω at the end with a photogate or the rotary sensor.

Repeat runs and use a low-friction axle, or measure the friction torque separately by timing a free spin-down, so you can account for negative work done by friction.

## Common misconceptions

- **"A large torque always does a lot of work."** Without rotation, the work is zero.
- **"Torque and work are the same because both are in N·m."** Torque is a turning effect; work is energy transferred, and a torque does work only through an angle.
- **Using degrees or revolutions in W = τΔθ.** Convert to radians first.
- **"Friction torque does positive work because it is a torque."** It opposes the rotation, so its work is negative.
- **Multiplying the largest torque by the whole angle when the torque changes.** Use the area under the torque–angle graph (Worked example 2).
- **"The wheel slows down when the torque starts to fall."** It keeps speeding up while the net torque is in the direction of rotation.
- **Using the whole force instead of its perpendicular part.** Only F⊥ = F sin θ, where θ is the angle between the radius and the force, contributes to the torque and the work.

## Where this leads

Topic 6.3 looks at the same torque from a different angle: a torque acting for a **time** gives an angular impulse and changes angular momentum, just as a torque acting through an **angle** does work and changes kinetic energy. Topic 6.5 uses work and energy with rolling objects. Try the [practice questions](/advanced-course-resources/physics-1/6-2-torque-work-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/6-2-torque-work-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/6-2-torque-work-checklist/) to consolidate. Next topic: [Angular Momentum and Angular Impulse](/advanced-course-resources/physics-1/6-3-angular-momentum-angular-impulse-study-guide/). You can also go back to [Topic 6.1](/advanced-course-resources/physics-1/6-1-rotational-kinetic-energy-study-guide/) or the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
