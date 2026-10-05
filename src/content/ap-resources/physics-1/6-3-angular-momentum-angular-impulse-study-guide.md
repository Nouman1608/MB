---
resourceId: "mb-ap-phys1-6.3-study-guide"
title: "Angular Momentum and Angular Impulse: Study Guide (Physics 1 6.3)"
description: "Angular momentum of spinning bodies and of objects moving in straight lines, angular impulse as torque × time, and the rotational impulse–momentum theorem, using algebra and graphs."
course: "physics-1"
unit: 6
topics: ["6.3"]
resourceType: "study-guide"
prerequisites:
  - "Torque as force × lever arm, with a sign for each sense of rotation (Unit 5)"
  - "Rotational inertia and Newton's second law in rotational form, τ_net = Iα (Unit 5)"
  - "Linear impulse and change in momentum (Topic 4.2)"
prerequisiteResources: ["mb-ap-phys1-6.2-study-guide"]
learningObjectives:
  - "Calculate the angular momentum of a rigid body from L = Iω, with a sign for its sense of rotation"
  - "Calculate the angular momentum of an object moving in a straight line about a chosen point, using L = rmv sin θ"
  - "Explain why the value of angular momentum depends on the axis or reference point you choose"
  - "Find an angular impulse from τΔt or from the area under a torque–time graph"
  - "Use the rotational impulse–momentum theorem, τ_net Δt = ΔL, and read net torque as the slope of an angular momentum–time graph"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus. Angles in degrees for sin θ; angular speeds in rad/s. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-phys1-6.3-revision-notes", "mb-ap-phys1-6.3-practice", "mb-ap-phys1-6.3-checklist"]
next: "mb-ap-phys1-6.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "A rigid body turning about a fixed axis has angular momentum L = Iω, measured in kg·m²/s."
  - "An object moving in a straight line also has angular momentum about a point: L = rmv sin θ, which equals mv times the perpendicular distance from the point to the line of motion."
  - "Angular impulse is torque × time, τΔt. On a torque–time graph it is the area under the curve."
  - "Rotational impulse–momentum theorem: τ_net Δt = ΔL = L − L₀. The slope of an L–t graph is the net torque."
  - "Choose a sense of rotation as positive (for example counterclockwise) and give every L and τ a sign. Directions of L in three dimensions are not tested."
faqs:
  - question: "Can something moving in a straight line really have angular momentum?"
    answer: "Yes, about any point that is not on its line of motion. A puck sliding past a post has angular momentum mvd about the post, where d is the perpendicular distance from the post to the puck's path."
  - question: "Do I need the right-hand rule for this topic?"
    answer: "No. The direction of angular momentum and angular impulse in three dimensions is outside this course. You only use a + or − sign for the two senses of rotation about one axis."
  - question: "What unit is angular impulse measured in?"
    answer: "N·m·s. This is the same as kg·m²/s, the unit of angular momentum, which is why the two can be set equal."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. It uses algebra and graphs only. Topic 6.2 showed how a torque does work on a rotating body. Here you meet the rotational partner of linear momentum, and the rotational partner of impulse.

## The idea: a rotational version of momentum

In Unit 4 you met linear momentum, p = mv, and the impulse–momentum theorem, FΔt = Δp. A force acting for a time changes an object's momentum.

Rotation has the same structure. Swap each linear quantity for its rotational partner:

| Linear | Rotational |
|---|---|
| mass m | rotational inertia I |
| velocity v | angular velocity ω |
| momentum p = mv | angular momentum L = Iω |
| force F | torque τ |
| impulse FΔt | angular impulse τΔt |
| FΔt = Δp | τΔt = ΔL |

If you understand the left column, you already understand most of this topic. The new idea is that angular momentum is always measured **about an axis or a point**, and the value depends on that choice.

## Angular momentum of a rigid body

A rigid body spinning about a fixed axis has angular momentum

**L = Iω**

where I is its rotational inertia about that axis (kg·m²) and ω is its angular velocity (rad/s). The unit of L is **kg·m²/s**.

Example: a flywheel with I = 0.050 kg·m² spins at 40 rad/s. Its angular momentum is L = 0.050 × 40 = **2.0 kg·m²/s**.

Two things increase L: spinning faster, or having more mass far from the axis. A wheel and a ring of the same mass and speed do not have the same L if the ring's mass sits further out.

**Signs, not directions.** Pick one sense of rotation as positive and say so, for example "counterclockwise as seen from above is +". Then a wheel turning clockwise has negative ω and negative L. This course only asks you to work with signs about one axis. Finding the three-dimensional direction of L (with the right-hand rule) is beyond its scope.

## Angular momentum of an object moving in a straight line

An object does not need to go round in a circle to have angular momentum. Take any fixed reference point. An object of mass m moving with speed v has angular momentum about that point of

**L = rmv sin θ**

Here r is the distance from the reference point to the object, and θ is the angle between the line from the point to the object (the radial line) and the object's velocity.

There is a simpler way to see it. The quantity r sin θ is the **perpendicular distance d** from the reference point to the object's line of motion. So

**L = mv × d**

This is just like torque, where you multiply a force by its lever arm. Here you multiply the momentum by its "lever arm".

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="p1-63-pt-title p1-63-pt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-63-pt-title">A ball moving in a straight line past a reference point</title>
<desc id="p1-63-pt-desc">A ball of mass 0.20 kg moves to the right at 3.0 m/s along a horizontal straight line. Reference point A is 0.50 m below the line. The ball is shown at three positions. At P1, before it passes A, the dashed radial line from A is 1.0 m long and makes an angle of 150 degrees with the velocity. At P2, directly above A, the radial line is 0.50 m long and perpendicular to the velocity. At P3, after passing A, the radial line is 1.0 m long and makes 30 degrees with the velocity. In every position the perpendicular distance from A to the line of motion is 0.50 m, so the angular momentum about A is 0.30 kilogram metre squared per second each time. Point B lies on the line of motion, and the ball's angular momentum about B is zero.</desc>
<defs><marker id="p1-63-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<path d="M30 100 H540" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="3 4"/>
<text x="540" y="90" font-size="12" fill="#1d2b44" text-anchor="end">line of motion</text>
<g stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 5" fill="none">
<path d="M280 200 L107 100"/>
<path d="M280 200 L280 100"/>
<path d="M280 200 L453 100"/>
</g>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="2">
<circle cx="107" cy="100" r="9"/><circle cx="280" cy="100" r="9"/><circle cx="453" cy="100" r="9"/>
</g>
<g stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-63-arr)">
<path d="M118 100 H165"/><path d="M291 100 H338"/><path d="M464 100 H511"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="95" y="80">P1</text><text x="268" y="80">P2</text><text x="441" y="80">P3</text>
<text x="128" y="122">θ = 150°</text>
<text x="400" y="122">θ = 30°</text>
<text x="172" y="168">r = 1.0 m</text>
<text x="370" y="168">r = 1.0 m</text>
<text x="288" y="155">d = 0.50 m</text>
<text x="160" y="96">v = 3.0 m/s</text>
</g>
<circle cx="280" cy="200" r="5" fill="#1d2b44"/>
<text x="290" y="218" font-size="13" fill="#1d2b44" font-weight="600">A (reference point)</text>
<rect x="36" y="94" width="12" height="12" fill="#1d2b44"/>
<text x="30" y="128" font-size="12" fill="#1d2b44">B (on the line)</text>
<text x="30" y="262" font-size="12" fill="#1d2b44">About A: L = rmv sin θ = 1.0 × 0.20 × 3.0 × sin 150° = 0.30 kg·m²/s at P1, and the same at P2 and P3.</text>
<text x="30" y="282" font-size="12" fill="#1d2b44">About B: d = 0, so L = 0 at every position.</text>
</svg>
<figcaption>Figure 1. A 0.20 kg ball moves right at 3.0 m/s past point A. Dashed lines are radial lines from A. Because r sin θ always equals d = 0.50 m, the angular momentum about A stays 0.30 kg·m²/s. About point B, on the line of motion, it is zero.</figcaption>
</figure>

Work through Figure 1 with the formula:

| Position | r (m) | θ | sin θ | L = rmv sin θ (kg·m²/s) |
|---|---|---|---|---|
| P1 (approaching) | 1.0 | 150° | 0.50 | 1.0 × 0.20 × 3.0 × 0.50 = 0.30 |
| P2 (closest) | 0.50 | 90° | 1.0 | 0.50 × 0.20 × 3.0 × 1.0 = 0.30 |
| P3 (moving away) | 1.0 | 30° | 0.50 | 1.0 × 0.20 × 3.0 × 0.50 = 0.30 |

Three lessons come from this table.

1. **The reference point matters.** About A the angular momentum is 0.30 kg·m²/s. About B, on the line of motion, it is zero. About a point C that is 1.5 m from the line, it would be 0.20 × 3.0 × 1.5 = 0.90 kg·m²/s. Always say which point or axis you are using.
2. **What L depends on.** The distance from the point, the mass, the speed and the angle between r and v. If the velocity points straight towards or away from the point, sin θ = 0 and L = 0.
3. **Constant velocity gives constant L.** A ball moving at steady speed in a straight line keeps the same d, so its angular momentum about any fixed point stays the same. This makes sense: no net force acts, so no net torque acts about any point.

## Angular impulse

A torque that acts for a time interval delivers an **angular impulse**:

**angular impulse = τΔt**

The unit is N·m·s, which is the same as kg·m²/s. The angular impulse has the same sign as the torque that delivers it. A large torque for a short time can give the same angular impulse as a small torque for a long time.

If the torque changes with time, use a graph. The angular impulse is the **area under a torque–time graph**, in the same way that linear impulse is the area under a force–time graph. Area below the time axis counts as negative.

## The rotational impulse–momentum theorem

Start from Newton's second law in rotational form, for a body whose rotational inertia I stays constant:

τ_net = Iα = I(Δω / Δt)

Multiply both sides by Δt:

τ_net Δt = IΔω = Iω − Iω₀ = L − L₀

So

**τ_net Δt = ΔL**

In words: the net angular impulse on an object or rigid system equals its change in angular momentum. The change in angular momentum is found by comparing the final and initial values, ΔL = L − L₀, with signs.

Two graph readings follow from this:

- **Slope of an L–t graph = net torque.** Rearranging, τ_net = ΔL / Δt. A straight L–t line means constant net torque. A curved one means the torque is changing.
- **Area under a τ_net–t graph = ΔL.** This is the graph form of the theorem.

### Reading an angular momentum–time graph

A desk fan is switched off. Take its spin direction as +. Measurements give:

| t (s) | 0 | 2.0 | 4.0 | 6.0 | 8.0 |
|---|---|---|---|---|---|
| L (kg·m²/s) | 3.0 | 2.4 | 1.8 | 1.2 | 0.60 |

Plotted against time, these points lie on a straight line. Its slope is (0.60 − 3.0) ÷ 8.0 = **−0.30 N·m**. That is the net torque from friction in the bearings and air drag. It is constant and opposite to the spin. If it stays the same, the fan stops 3.0 ÷ 0.30 = 10 s after switch-off.

## Worked example 1: angular impulse from a torque–time graph

**Question.** Take **counterclockwise (seen from above) as +**. A potter's wheel has rotational inertia I = 0.60 kg·m² and is turning at ω₀ = +2.0 rad/s. A motor then applies the torque shown in Figure 2, and friction is negligible. Find the wheel's angular speed (a) at t = 2.0 s and (b) at t = 4.0 s.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="p1-63-tt-title p1-63-tt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-63-tt-title">Torque–time graph for a motor turning a potter's wheel</title>
<desc id="p1-63-tt-desc">Torque in newton metres from 0 to 3.5 against time in seconds from 0 to 4. The torque rises in a straight line from 0 at t = 0 to 3.0 N·m at t = 2.0 s, stays at 3.0 N·m until t = 4.0 s, then drops to zero. The triangle under the first part is hatched and labelled area 3.0 N·m·s. The rectangle under the second part is shaded and labelled area 6.0 N·m·s. The total area, 9.0 N·m·s, is the angular impulse.</desc>
<defs><pattern id="p1-63-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V8" stroke="#1d2b44" stroke-width="1"/></pattern></defs>
<rect x="0" y="0" width="560" height="320" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M170 260 V50 M270 260 V50 M370 260 V50 M470 260 V50"/>
<path d="M70 200 H500 M70 140 H500 M70 80 H500"/>
</g>
<polygon points="70,260 270,80 270,260" fill="url(#p1-63-hatch)" stroke="#1d2b44" stroke-width="1"/>
<rect x="270" y="80" width="200" height="180" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1"/>
<path d="M70 260 H510 M70 260 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<path d="M70 260 L270 80 L470 80 L470 260" stroke="#1d2b44" stroke-width="2.5" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="278">0</text><text x="170" y="278">1</text><text x="270" y="278">2</text><text x="370" y="278">3</text><text x="470" y="278">4</text>
<text x="290" y="305" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="264">0</text><text x="62" y="204">1</text><text x="62" y="144">2</text><text x="62" y="84">3</text>
</g>
<text x="22" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 160)">torque, τ (N·m)</text>
<rect x="176" y="222" width="88" height="20" fill="#ffffff"/>
<text x="180" y="236" font-size="12" fill="#1d2b44" font-weight="600">area 3.0 N·m·s</text>
<text x="315" y="175" font-size="12" fill="#1d2b44" font-weight="600">area 6.0 N·m·s</text>
<text x="300" y="66" font-size="12" fill="#1d2b44">constant 3.0 N·m</text>
</svg>
<figcaption>Figure 2. Torque from the motor, counterclockwise positive. The hatched triangle (0–2.0 s) has area ½ × 2.0 s × 3.0 N·m = 3.0 N·m·s. The shaded rectangle (2.0–4.0 s) has area 2.0 s × 3.0 N·m = 6.0 N·m·s. Total angular impulse 9.0 N·m·s.</figcaption>
</figure>

1. Initial angular momentum: L₀ = Iω₀ = 0.60 × 2.0 = **+1.2 kg·m²/s**.
2. Angular impulse from 0 to 2.0 s (triangle): ½ × 2.0 s × 3.0 N·m = **+3.0 N·m·s**.
3. (a) L at 2.0 s = 1.2 + 3.0 = 4.2 kg·m²/s, so ω = 4.2 ÷ 0.60 = **7.0 rad/s**.
4. Angular impulse from 2.0 s to 4.0 s (rectangle): 2.0 s × 3.0 N·m = **+6.0 N·m·s**. Total angular impulse = 9.0 N·m·s.
5. (b) L at 4.0 s = 1.2 + 9.0 = 10.2 kg·m²/s, so ω = 10.2 ÷ 0.60 = **17 rad/s**.

**Check.** The average torque over the 4.0 s is 9.0 ÷ 4.0 = 2.25 N·m, which sits sensibly between 0 and 3.0 N·m. A common slip is to forget the starting angular momentum and give 9.0 ÷ 0.60 = 15 rad/s. The theorem gives the *change* in L, so you must add L₀.

## Worked example 2: deriving a stopping time

**Question.** A wheel with rotational inertia I spins at ω₀ on a frictionless axle. A brake pad presses on the rim at radius R with a constant friction force of size f, tangent to the rim. (a) Derive an expression for the time t the wheel takes to stop. (b) Evaluate it for I = 0.12 kg·m², ω₀ = 25 rad/s, f = 6.0 N and R = 0.25 m. (c) Predict what happens to t if the pad is moved to act at radius 2R with the same force.

Take the wheel's initial spin as +.

1. The friction force is tangent to the rim, so its lever arm is R. The torque it exerts opposes the spin: τ_net = −fR.
2. Initial angular momentum: L₀ = Iω₀. Final: L = 0. So ΔL = 0 − Iω₀ = −Iω₀.
3. Theorem: τ_net Δt = ΔL gives (−fR)t = −Iω₀.
4. (a) Solve: **t = Iω₀ / (fR)**.
5. (b) Torque size: fR = 6.0 × 0.25 = 1.5 N·m. L₀ = 0.12 × 25 = 3.0 kg·m²/s. t = 3.0 ÷ 1.5 = **2.0 s**.
6. (c) t is inversely proportional to R. Doubling R halves the stopping time: **1.0 s**.

**Check the expression.** Units: (kg·m²)(1/s) ÷ (N·m) = kg·m²/s ÷ (kg·m²/s²) = s. Correct. Limiting cases: a heavier wheel (bigger I) or faster start (bigger ω₀) takes longer to stop; a harder press (bigger f) stops it sooner. All are sensible. You can also check with Unit 5 methods: α = fR / I = 12.5 rad/s², and t = ω₀ / α = 2.0 s again.

## Factors of change

The theorem is ideal for "what happens if…" questions. Write the relationship, then hold everything else fixed.

- Same torque, twice the time: angular impulse doubles, so **ΔL doubles**.
- Same angular impulse given to a wheel with four times the rotational inertia: ΔL is the same, so **Δω is one quarter** as big.
- A ball moving in a straight line passes twice as far from a point at the same speed: **L about that point doubles**, because d doubles.
- A rigid body at the same ω with mass moved further out: I rises, so **L rises** in the same ratio.

## Common misconceptions

- **"Only spinning things have angular momentum."** An object moving in a straight line has angular momentum about any point off its path (Figure 1).
- **"Angular momentum has one true value."** It depends on the axis or point chosen. About a point on the line of motion, it is zero.
- **"L = rmv, whatever the angle."** Only when the velocity is perpendicular to r. In general use rmv sin θ, or mv times the perpendicular distance.
- **"A bigger torque always gives a bigger change in L."** The time matters too. Compare τΔt, not τ alone.
- **"The theorem gives the final angular momentum."** It gives the change. Add L₀ to find L (Worked example 1).
- **Forgetting signs.** If a torque opposes the spin, its angular impulse is negative. Mixing up signs is the most common way to lose marks here.
- **Using one torque instead of the net torque.** The theorem uses the net external torque on the object. Include friction if it is not negligible.
- **Confusing angular impulse with linear impulse.** Force × time has unit N·s. Angular impulse needs the lever arm: torque × time, N·m·s.

## Where this leads

Topic 6.4 (Conservation of Angular Momentum) asks what happens when the net external torque on a system is zero, so that ΔL = 0. That one idea explains a turntable that slows when a ring lands on it and a spinner that speeds up when it pulls its mass in. Read the [Topic 6.4 study guide](/advanced-course-resources/physics-1/6-4-conservation-angular-momentum-study-guide/) next. First, try the [practice questions](/advanced-course-resources/physics-1/6-3-angular-momentum-angular-impulse-practice/), then use the [revision notes](/advanced-course-resources/physics-1/6-3-angular-momentum-angular-impulse-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/6-3-angular-momentum-angular-impulse-checklist/) to consolidate. You can also go back to [Topic 6.2](/advanced-course-resources/physics-1/6-2-torque-work-study-guide/) or the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
