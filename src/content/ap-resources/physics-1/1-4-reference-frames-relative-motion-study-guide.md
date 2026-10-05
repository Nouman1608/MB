---
resourceId: "mb-ap-phys1-1.4-study-guide"
title: "Reference Frames and Relative Motion: Study Guide (Physics 1 1.4)"
description: "Describe motion from different observers' points of view: reference frames, relative velocity along one line, converting positions between frames, and why acceleration is frame-independent."
course: "physics-1"
unit: 1
topics: ["1.4"]
resourceType: "study-guide"
prerequisites:
  - "Using + and − signs for direction along one axis (Topics 1.1 and 1.2)"
  - "Reading slopes of position–time and velocity–time graphs (Topic 1.3)"
prerequisiteResources: ["mb-ap-phys1-1.3-study-guide"]
learningObjectives:
  - "Say which observer a measurement belongs to and describe that observer's reference frame"
  - "Combine the velocity of an object and the velocity of an observer along one line to find the velocity that observer measures"
  - "Convert positions and displacements measured in one frame into those measured in another"
  - "Explain, with an algebraic argument or a graph, why all inertial observers measure the same acceleration"
  - "Sketch how a velocity–time graph changes when the same motion is viewed from a moving frame"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus is used anywhere in this course. Where gravity appears we use g = 9.8 m/s², the value on the course equation table"
related: ["mb-ap-phys1-1.4-revision-notes", "mb-ap-phys1-1.4-practice", "mb-ap-phys1-1.4-checklist"]
next: "mb-ap-phys1-1.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Every position, velocity and displacement is measured by some observer. Name the observer, then the axis."
  - "Write v_AB for the velocity of A relative to B. Then v_AC = v_AB + v_BC, and v_BA = −v_AB."
  - "In this course, relative velocities are combined along one line only, using signs."
  - "Observers in different inertial frames disagree about position and velocity, but they measure the same acceleration."
  - "Assume every frame is inertial (not accelerating) unless a question says otherwise."
faqs:
  - question: "Is one reference frame the 'true' one?"
    answer: "No. Any inertial frame is equally valid. The ground is often the easiest to use, but a passenger's measurements are just as correct in the passenger's own frame."
  - question: "Do I need to add relative velocities at an angle, such as a boat crossing a river?"
    answer: "Not in this course. Relative-velocity questions stay on one straight line, so you add and subtract signed numbers. Topic 1.5 uses vectors in two dimensions for other kinds of motion."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Everything here uses algebra, signs and graphs. If you are taking the calculus-based Physics C: Mechanics course, it has its own separate guide for its Topic 1.4.

## Every measurement has an observer

Sit in a train moving east at 20 m/s and put a cup on the table. To you, the cup is at rest. To someone standing on the platform, the same cup is moving east at 20 m/s. Who is right?

Both are. Each person measures from their own **reference frame**: an origin, a positive direction and a clock that travel with that observer. A measurement only has meaning once you know whose frame it belongs to.

So in this topic you make **two** choices before writing a sign:

1. **Which observer?** For example, "measured by the passenger" or "measured from the platform".
2. **Which axis?** For example, "+x east".

Changing the observer can change both the **size** and the **direction** of a velocity or displacement. The passenger says the cup's velocity is 0; the platform says +20 m/s. A passenger walking towards the back of the train can even have a velocity that is negative in one frame and positive in another (Worked example 1).

## Inertial frames

An **inertial reference frame** is one that is not accelerating: it is at rest or moves at constant velocity. In an inertial frame, an object with nothing pushing or pulling it carries on at constant velocity.

A frame that speeds up, slows down or turns is **non-inertial**. You have felt one: when a bus brakes hard, a ball on the floor rolls towards the front, though nothing in the bus pushed it. Unit 2 explains why. Here, follow the course rule: **treat every frame as inertial unless the question says otherwise.** The ground counts as inertial for this course. (Earth's rotation makes it very slightly non-inertial, but the effect is far too small to matter in these problems.)

## Relative velocity along one line

Use two subscripts. **v_AB** means "the velocity of A, measured by observer B" (or "A relative to B"). Common letters: G for ground, T for train, P for passenger.

**The combination rule:**

**v_AC = v_AB + v_BC**

Read the subscripts like a chain: the inner letters (B and B) match, and the outer letters give the answer (A and C). The rule says the object's velocity relative to the frame, plus the frame's velocity, gives the velocity seen by the outside observer.

**The reversal rule:**

**v_BA = −v_AB**

If the train moves at +20 m/s relative to the ground, the ground moves at −20 m/s relative to the train. That is why scenery seems to slide backwards past a train window.

Because this course keeps relative motion on **one line**, every velocity is a signed number. Adding or subtracting vectors becomes adding or subtracting signed numbers. The sign does all the work of direction.

<figure>
<svg viewBox="0 0 560 250" role="img" aria-labelledby="p1-rel-title p1-rel-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-rel-title">Tip-to-tail diagram combining velocities along one line</title>
<desc id="p1-rel-desc">A horizontal axis with +x pointing east. A solid arrow 20 units long shows the train's velocity relative to the ground, +20 m/s. From its tip, a short dashed arrow points back west 1.5 units, showing the passenger's velocity relative to the train, −1.5 m/s. Below, a double-thickness arrow from the same start point ends where the dashed arrow ends, showing the passenger's velocity relative to the ground, +18.5 m/s.</desc>
<defs>
<marker id="p1-rel-head" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
</defs>
<rect x="0" y="0" width="560" height="250" fill="#ffffff"/>
<path d="M60 215 H520" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#p1-rel-head)"/>
<text x="525" y="235" font-size="12" fill="#1d2b44" text-anchor="end">+x (east)</text>
<g font-size="11" fill="#1d2b44" text-anchor="middle">
<path d="M80 210 V220 M180 210 V220 M280 210 V220 M380 210 V220 M480 210 V220" stroke="#1d2b44" stroke-width="1"/>
<text x="80" y="234">0</text><text x="180" y="234">5</text><text x="280" y="234">10</text><text x="380" y="234">15</text><text x="480" y="234">20 m/s</text>
</g>
<path d="M80 70 H478" stroke="#1d2b44" stroke-width="3" marker-end="url(#p1-rel-head)"/>
<text x="90" y="56" font-size="12" fill="#1d2b44">solid: v_TG = +20 m/s (train relative to ground)</text>
<path d="M480 100 H452" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#p1-rel-head)"/>
<path d="M480 64 V106" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<text x="200" y="120" font-size="12" fill="#1d2b44">dashed: v_PT = −1.5 m/s (passenger relative to train)</text>
<path d="M80 165 H448" stroke="#1d2b44" stroke-width="7" marker-end="url(#p1-rel-head)"/>
<path d="M80 165 H440" stroke="#ffffff" stroke-width="2.5"/>
<path d="M450 100 V170" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<text x="90" y="150" font-size="12" fill="#1d2b44" font-weight="600">double: v_PG = v_PT + v_TG = +18.5 m/s</text>
</svg>
<figcaption>Figure 1. Tip-to-tail along one line, +x east. Start with the frame's velocity relative to the ground (solid, +20 m/s). Add the passenger's velocity relative to the train (dashed, −1.5 m/s). The result (double line) is the passenger's velocity relative to the ground, +18.5 m/s.</figcaption>
</figure>

## Converting positions and displacements

The same idea works for positions. If both positions are measured from the ground, the position of A as measured by B is

**x_AB = x_AG − x_BG**

Example: a car is at x = 50 m and a bike at x = 30 m, both measured from a lamp post with +x east. Measured by the cyclist, the car is at **+20 m** (20 m ahead). Measured by the driver, the bike is at **−20 m**.

Over a time interval, every observer's clock reads the same Δt in this course. So displacements combine the same way as velocities:

**Δx_AC = Δx_AB + Δx_BC**

Observers disagree about how far something moved, because their own frames move during the interval.

## Worked example 1: walking the wrong way on a train

**Question.** Take **+x east**. A train moves east at 20 m/s relative to the platform. A passenger walks towards the back of the train at 1.5 m/s relative to the train, for 5.0 s.
(a) Find the passenger's velocity relative to the platform.
(b) Find the passenger's displacement in 5.0 s, measured by someone on the train and by someone on the platform.
(c) What velocity does the passenger measure for a person standing still on the platform?

1. Name the velocities with signs: v_TG = +20 m/s; v_PT = −1.5 m/s (towards the back means west).
2. **(a)** v_PG = v_PT + v_TG = (−1.5) + (+20) = **+18.5 m/s**, east (Figure 1).
3. **(b)** Train frame: Δx_PT = v_PT Δt = (−1.5 m/s)(5.0 s) = **−7.5 m**, so 7.5 m towards the back.
4. Platform frame: Δx_PG = v_PG Δt = (+18.5 m/s)(5.0 s) = **+92.5 m**, east.
5. **(c)** The person on the platform is at rest in the ground frame, so their velocity relative to the passenger is v_GP = −v_PG = **−18.5 m/s**: 18.5 m/s west.

**Check.** The train moves Δx_TG = (+20)(5.0) = +100 m. Adding displacements: −7.5 m + 100 m = +92.5 m, which matches step 4.

**Interpretation.** The same walk is "west" in one frame and "east" in the other. Neither is wrong. The answer depends on the observer, which is why you name one.

## Acceleration is the same for every inertial observer

Velocities change from frame to frame. Accelerations do not. Here is why, using only algebra.

Let B be an inertial observer, so v_BG is constant. From the combination rule, v_AB = v_AG − v_BG. Over any time interval:

**Δv_AB = Δv_AG − Δv_BG = Δv_AG − 0 = Δv_AG**

The change in velocity is the same in both frames, and so is Δt. So **a_AB = a_AG**.

A table makes the idea concrete. Take **+x east**. A cart starts from rest relative to the ground and speeds up at 1.5 m/s². A cyclist rides east at a steady 4.0 m/s.

| t (s) | v_x of cart, ground frame (m/s) | v_x of cart, cyclist's frame (m/s) |
|---|---|---|
| 0 | 0 | −4.0 |
| 2.0 | +3.0 | −1.0 |
| 4.0 | +6.0 | +2.0 |

Every value in the cyclist's column is 4.0 m/s less than in the ground column. Both columns rise by 3.0 m/s every 2.0 s, so both give **a_x = 1.5 m/s²**.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="p1-vt2-title p1-vt2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-vt2-title">Velocity–time graphs of one cart seen from two frames</title>
<desc id="p1-vt2-desc">Velocity v_x in metres per second from −4 to +6 against time t in seconds from 0 to 4, with +x east. A solid line for the ground frame rises from 0 at t = 0 to +6.0 m/s at t = 4 s. A dashed line for the cyclist's frame rises from −4.0 m/s at t = 0 to +2.0 m/s at t = 4 s. The lines are parallel, 4.0 m/s apart, both with slope 1.5 m/s squared. The dashed line crosses zero at about t = 2.7 s, marked with a circle, where the cart is momentarily at rest relative to the cyclist.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M180 300 V50 M280 300 V50 M380 300 V50 M480 300 V50"/>
<path d="M80 50 H480 M80 100 H480 M80 150 H480 M80 250 H480 M80 300 H480"/>
</g>
<path d="M80 310 V40 M80 200 H500" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="180" y="216">1</text><text x="280" y="216">2</text><text x="380" y="216">3</text><text x="480" y="216">4</text>
<text x="470" y="190" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="72" y="54">+6</text><text x="72" y="104">+4</text><text x="72" y="154">+2</text><text x="72" y="204">0</text><text x="72" y="254">−2</text><text x="72" y="304">−4</text>
</g>
<text x="24" y="175" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 175)">velocity, v_x (m/s)</text>
<path d="M80 200 L480 50" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M80 300 L480 150" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5"/>
<circle cx="346.7" cy="200" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="100" y="62" font-size="12" fill="#1d2b44">solid: ground frame</text>
<text x="100" y="78" font-size="12" fill="#1d2b44">0 → +6.0 m/s</text>
<text x="360" y="268" font-size="12" fill="#1d2b44">dashed: cyclist's frame</text>
<text x="360" y="284" font-size="12" fill="#1d2b44">−4.0 → +2.0 m/s</text>
<text x="262" y="236" font-size="12" fill="#1d2b44">circle: at rest relative to cyclist</text>
<text x="100" y="110" font-size="12" fill="#1d2b44">both slopes = 1.5 m/s²</text>
</svg>
<figcaption>Figure 2. One cart, two observers, +x east. Viewing from a frame moving at +4.0 m/s shifts the whole velocity–time graph down by 4.0 m/s. The slope, which is the acceleration, does not change. The circle marks the instant the cart's ground speed equals the cyclist's speed: t = 4.0 ÷ 1.5 ≈ 2.7 s.</figcaption>
</figure>

**Sketching rule.** To sketch a velocity–time graph in a frame moving at constant velocity v_BG, slide the whole graph by −v_BG. The shape and slopes stay the same. On a position–time graph, a parked car seen from a cyclist moving at +4.0 m/s becomes a straight line sloping downward at −4.0 m/s.

## Worked example 2: overtaking, first in symbols

**Question.** On a straight road, a car moves at constant speed v_C and a truck ahead moves the same way at constant speed v_T, with v_C > v_T. To overtake safely, the car must gain a distance L on the truck (from a safe gap behind it to a safe gap in front). (a) Derive an expression for the overtaking time t. (b) Evaluate it for v_C = 27 m/s, v_T = 22 m/s and L = 60 m.

1. Choose the truck's frame and take **+x in the direction of travel**. In this frame the truck is at rest and the road distance to gain is L.
2. Car relative to truck: v_CT = v_CG + v_GT = v_C + (−v_T) = v_C − v_T.
3. In the truck's frame the car moves L at a steady v_CT, so **t = L ÷ (v_C − v_T)**.
4. **(b)** t = 60 m ÷ (27 − 22) m/s = 60 ÷ 5.0 = **12 s**.

**Check in the ground frame.** In 12 s the car travels 27 × 12 = 324 m and the truck travels 22 × 12 = 264 m. The difference is 60 m = L, as required.

**Limiting cases.**
- If v_C gets close to v_T, the denominator gets close to zero and t becomes very long. At equal speeds the car never gains.
- If a vehicle comes the **other** way at 22 m/s, its velocity relative to the car is −22 − 27 = −49 m/s. A 60 m gap closes in 60 ÷ 49 ≈ 1.2 s. Oncoming vehicles close at the **sum** of the speeds, which is why overtaking on a two-way road needs so much clear space.

The truck's frame made the problem one step long. Choosing a smart frame is a real problem-solving tool, not just a definition.

## Common misconceptions

- **"One of the two observers must be wrong."** Both are right in their own frames. Name the observer, then compare.
- **"Relative velocity is just the difference in speeds."** Use signed velocities. Objects moving towards each other have a relative speed equal to the **sum** of their speeds.
- **Subtracting the wrong way round.** v_AB = v_AG − v_BG: the object first, the observer second. Getting it backwards flips the sign (and gives v_BA).
- **"A moving observer measures a different acceleration."** Not if the observer moves at constant velocity. Only the velocity graph shifts (Figure 2).
- **"Time runs differently for the passenger."** In this course, all observers agree on time intervals. (At speeds near the speed of light this fails, but that is beyond the course.)
- **Using a braking or turning vehicle as an inertial frame.** It is not. Use the ground unless the question says a frame moves at constant velocity.
- **Adding relative velocities at an angle.** This course keeps relative motion on one line; do not invent a second dimension.

## Where this leads

Reference frames return in Unit 2, where Newton's first law holds only in inertial frames, and in Unit 3, where different observers can measure different kinetic energies for the same object. If the graph links in Figure 2 feel shaky, revisit [Topic 1.3, Representing Motion](/advanced-course-resources/physics-1/1-3-representing-motion-study-guide/). Next comes [Topic 1.5, Vectors and Motion in Two Dimensions](/advanced-course-resources/physics-1/1-5-vectors-motion-two-dimensions-study-guide/), where velocity gets two components. Try the [practice questions](/advanced-course-resources/physics-1/1-4-reference-frames-relative-motion-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/1-4-reference-frames-relative-motion-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/1-4-reference-frames-relative-motion-checklist/) to consolidate. You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
