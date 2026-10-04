---
resourceId: "mb-ap-phys1-1.1-study-guide"
title: "Scalars and Vectors in One Dimension: Study Guide (Physics 1 1.1)"
description: "Tell scalars from vectors, draw vectors as scaled arrows, use signs for direction along one axis and add one-dimensional vectors tip to tail, with worked examples."
course: "physics-1"
unit: 1
topics: ["1.1"]
resourceType: "study-guide"
prerequisites:
  - "Using positive and negative numbers on a number line"
  - "Absolute value (the size of a number, ignoring its sign)"
learningObjectives:
  - "Sort physical quantities into scalars (size only) and vectors (size and direction), including distance, speed, position, displacement, velocity and acceleration"
  - "Draw a vector as an arrow whose length is in proportion to its size, using a stated scale"
  - "Read and write vector notation, and use a signed component such as v_x when motion is along one axis"
  - "Add and subtract vectors in one dimension by giving opposite directions opposite signs"
  - "Compare the sizes and directions of vectors, and use the sign convention to support or reject a claim"
skills: ["1", "2", "3"]
studyMinutes: 35
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus is used anywhere in this course. Where gravity appears we use g = 9.8 m/s², the value on the course equation table"
related: ["mb-ap-phys1-1.1-revision-notes", "mb-ap-phys1-1.1-practice", "mb-ap-phys1-1.1-checklist"]
next: "mb-ap-phys1-1.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "A scalar has a size only. A vector has a size and a direction."
  - "Distance and speed are scalars. Position, displacement, velocity and acceleration are vectors."
  - "Draw a vector as an arrow: it points in the vector's direction, and its length is in proportion to its size."
  - "Along one axis, the sign of a component gives the direction. State the axis first, for example \"+x to the right\"."
  - "To add vectors in one dimension, give opposite directions opposite signs and add the signed numbers."
faqs:
  - question: "Is a negative velocity smaller than a positive one?"
    answer: "Not in size. The sign only shows direction. A velocity of −6 m/s is faster than +4 m/s, because its size (the speed) is 6 m/s."
  - question: "Do I have to draw arrows over symbols in my answers?"
    answer: "Use an arrow over a symbol, such as v⃗, when you mean the full vector. When you work along one axis you can use the component, such as v_x, with no arrow; its sign shows the direction."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Everything here uses algebra, number lines and arrows. If you are taking the calculus-based Physics C: Mechanics course, it has its own separate guides.

## Two kinds of quantity

Every quantity in physics has a **size**, also called its **magnitude**. A mass of 2.0 kg has a magnitude of 2.0 kg. Some quantities also need a **direction** before they make sense.

- A **scalar** is described by its magnitude only. Time, mass and temperature are scalars. So are **distance** and **speed**.
- A **vector** is described by its magnitude **and** its direction. **Position**, **displacement**, **velocity** and **acceleration** are vectors.

A quick test: ask "which way?". If the question has no meaning, the quantity is a scalar. "The lesson lasted 40 minutes, which way?" makes no sense, so time is a scalar. "The car moved 300 m, which way?" is a fair question. If you mean the change in position, you need the direction, so displacement is a vector.

The same motion can be described with a scalar or with a vector:

| Scalar (size only) | Matching vector (size and direction) |
|---|---|
| distance travelled: 50 m | displacement: 50 m east |
| speed: 8.0 m/s | velocity: 8.0 m/s downward |

Speed is the magnitude of velocity. Distance travelled is the total length of path covered. Topic 1.2 shows why distance and the size of the displacement are not always equal.

## Drawing vectors as arrows

A vector can be drawn as an **arrow**:

- the arrow **points** in the direction of the vector;
- the arrow's **length** is in proportion to the vector's magnitude.

To make the lengths mean something, choose a **scale** and write it on the diagram, for example "1 grid square = 5 m/s". A velocity of 15 m/s then needs an arrow 3 squares long, and 10 m/s needs 2 squares.

<figure>
<svg viewBox="0 0 560 230" role="img" aria-labelledby="p11-arrows-title p11-arrows-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p11-arrows-title">Velocity arrows for two cars drawn to scale</title>
<desc id="p11-arrows-desc">A grid of squares with the scale one square equals 5 metres per second, and a reference arrow showing the positive x direction to the right. Car P's velocity arrow starts at the centre line and points right, 3 squares long, labelled v_x = +15 m/s. Car Q's velocity arrow starts at the same line and points left, 2 squares long, labelled v_x = −10 m/s. Car P's arrow is one and a half times as long as car Q's, so car P is faster.</desc>
<defs><marker id="p11-head" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="230" fill="#ffffff"/>
<path d="M60 30 H500" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#p11-head)"/>
<text x="508" y="35" font-size="13" fill="#1d2b44">+x</text>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.6">
<path d="M120 55 V175 M160 55 V175 M200 55 V175 M240 55 V175 M320 55 V175 M360 55 V175 M400 55 V175 M440 55 V175"/>
<path d="M120 55 H440 M120 115 H440 M120 175 H440"/>
</g>
<path d="M280 50 V180" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M280 90 H400" stroke="#1d2b44" stroke-width="3" marker-end="url(#p11-head)"/>
<circle cx="280" cy="90" r="4" fill="#1d2b44"/>
<text x="290" y="80" font-size="12" fill="#1d2b44">car P: v_x = +15 m/s (3 squares, right)</text>
<path d="M280 145 H200" stroke="#1d2b44" stroke-width="3" stroke-dasharray="8 4" marker-end="url(#p11-head)"/>
<circle cx="280" cy="145" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="272" y="135" font-size="12" fill="#1d2b44" text-anchor="end">car Q: v_x = −10 m/s (2 squares, left)</text>
<path d="M120 205 H160" stroke="#1d2b44" stroke-width="2"/>
<path d="M120 199 V211 M160 199 V211" stroke="#1d2b44" stroke-width="2"/>
<text x="170" y="209" font-size="12" fill="#1d2b44">scale: 1 square = 5 m/s</text>
</svg>
<figcaption>Figure 1. Velocity arrows drawn to scale, with +x to the right. Car P's solid arrow is 3 squares long (15 m/s to the right). Car Q's dashed arrow is 2 squares long (10 m/s to the left). The longer arrow belongs to the faster car, whichever way it points.</figcaption>
</figure>

Two arrows are **equal vectors** only if they have the same length **and** point the same way. Car P and a third car moving at 15 m/s to the left would have equal speeds but different velocities.

## Vector notation and components

When you mean the whole vector, write its symbol with a small arrow on top: v⃗ for velocity, a⃗ for acceleration, x⃗ for position. A relationship between vectors can then be written in vector form, such as

**v⃗ = v⃗₀ + a⃗t**

This says the velocity at time t equals the starting velocity plus the acceleration multiplied by the time. Topic 1.3 shows when this holds (constant acceleration); here we only care about how to read it.

In one dimension, every vector lies along a single axis. You can then replace each vector with its **component** along that axis, such as v_x, a_x or x. A component is a signed number:

- its **sign** gives the direction (+ for the positive direction of the axis, − for the opposite one);
- its **absolute value** gives the magnitude.

So the vector equation above becomes an ordinary equation in signed numbers:

**v_x = v_x0 + a_x t**

No arrows are needed on components, because the sign already carries the direction. For example, with **+x to the right**, v_x = −10 m/s means "10 m/s to the left". The speed is |v_x| = 10 m/s.

## Choosing an axis

Before you write any sign, choose a positive direction and say it in words: "+x to the right", "+x east", "+y upward". You may also need an origin, the point where x = 0.

The choice is yours. Nature does not care which way you call positive. If you choose the other direction, every sign flips, but the physical answer (size and real direction) stays the same. Worked example 2 shows this.

A sign is meaningless without its axis. "v_x = −4 m/s" tells you nothing until you know which way +x points.

## Adding vectors in one dimension

A **vector sum** (also called a **resultant**) is the single vector that has the same effect as two or more vectors together. For displacements, it is where you end up after several moves.

Two ways to find a one-dimensional vector sum always agree:

1. **Arrows, tip to tail.** Draw the first arrow. Start the second arrow at the tip of the first, and so on. The sum is the arrow from the tail of the first to the tip of the last.
2. **Signed numbers.** Give each vector a sign from your axis (opposite directions get opposite signs) and add the numbers. The sign of the answer gives the direction of the sum.

Scalars add differently. Distances simply add as positive numbers, because distance has no direction. Walk 5 m forward and 5 m back: the distances add to 10 m, but the displacements add to (+5 m) + (−5 m) = 0.

**Subtracting a vector** is the same as adding its opposite (same size, reversed direction). For example, with +x to the right, a change from x₀ = +5 m to x = −2 m is x − x₀ = (−2 m) − (+5 m) = (−2 m) + (−5 m) = −7 m: a change of 7 m to the left. You will meet this change, the displacement, in Topic 1.2.

## Worked example 1: a three-leg trip

**Question.** A floor-cleaning robot moves along a straight corridor. Take **+x east, origin at the robot's charger**. The robot moves 12 m east, then 20 m west, then 5.0 m east. Find (a) its total displacement as a vector sum and (b) the total distance it travelled. (c) Draw the vector sum tip to tail.

1. Write each displacement as a signed component: d₁ = +12 m, d₂ = −20 m, d₃ = +5.0 m. West is opposite to east, so it gets the opposite sign.
2. Add the signed numbers: (+12 m) + (−20 m) + (+5.0 m) = **−3.0 m**. The robot ends **3.0 m west** of the charger.
3. Distance is a scalar, so add the magnitudes: 12 m + 20 m + 5.0 m = **37 m**.
4. Track the position after each leg as a check: x = +12 m, then +12 − 20 = −8.0 m, then −8.0 + 5.0 = −3.0 m. This matches step 2.

<figure>
<svg viewBox="0 0 560 270" role="img" aria-labelledby="p11-sum-title p11-sum-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p11-sum-title">Tip-to-tail vector sum of three displacements</title>
<desc id="p11-sum-desc">A number line for position x in metres from −10 to +14, with +x east and the charger at 0. Leg 1 is an arrow from 0 to +12 m labelled +12 m. Leg 2 starts at the tip of leg 1 and points west from +12 m to −8 m, labelled −20 m. Leg 3 starts at the tip of leg 2 and points east from −8 m to −3 m, labelled +5.0 m. A thick dashed resultant arrow goes from 0 to −3 m and is labelled net −3.0 m, meaning 3.0 m west of the charger.</desc>
<defs><marker id="p11-head2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="270" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.8" stroke-dasharray="2 3" opacity="0.7">
<path d="M490 60 V100 M90 100 V140 M190 140 V180 M250 160 V180"/>
</g>
<path d="M250 60 H490" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p11-head2)"/>
<text x="300" y="52" font-size="12" fill="#1d2b44">leg 1: +12 m (east)</text>
<path d="M490 100 H90" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p11-head2)"/>
<text x="300" y="92" font-size="12" fill="#1d2b44">leg 2: −20 m (west)</text>
<path d="M90 140 H190" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p11-head2)"/>
<text x="200" y="145" font-size="12" fill="#1d2b44">leg 3: +5.0 m (east)</text>
<path d="M250 180 H190" stroke="#1d2b44" stroke-width="4" stroke-dasharray="7 4" marker-end="url(#p11-head2)"/>
<text x="262" y="185" font-size="12" fill="#1d2b44" font-weight="600">net (dashed): −3.0 m, 3.0 m west</text>
<path d="M40 220 H535" stroke="#1d2b44" stroke-width="2" marker-end="url(#p11-head2)"/>
<g stroke="#1d2b44" stroke-width="1.5">
<path d="M50 214 V226 M90 214 V226 M130 214 V226 M170 214 V226 M210 214 V226 M250 210 V230 M290 214 V226 M330 214 V226 M370 214 V226 M410 214 V226 M450 214 V226 M490 214 V226 M530 214 V226"/>
</g>
<g font-size="11" fill="#1d2b44" text-anchor="middle">
<text x="50" y="242">−10</text><text x="90" y="242">−8</text><text x="130" y="242">−6</text><text x="170" y="242">−4</text><text x="210" y="242">−2</text><text x="250" y="242">0</text><text x="290" y="242">2</text><text x="330" y="242">4</text><text x="370" y="242">6</text><text x="410" y="242">8</text><text x="450" y="242">10</text><text x="490" y="242">12</text><text x="530" y="242">14</text>
<text x="250" y="262" font-size="12">charger (origin)</text>
</g>
<text x="545" y="212" font-size="12" fill="#1d2b44" text-anchor="end">x (m), +x east</text>
</svg>
<figcaption>Figure 2. Each leg starts at the tip of the one before (tip to tail). The thick dashed resultant runs from the start of leg 1 to the end of leg 3: −3.0 m, so the robot finishes 3.0 m west of its charger. Scale: 1 m on the line is the same length for every arrow.</figcaption>
</figure>

**Interpretation.** The arrows in Figure 2 are long, but the resultant is short, because the westward leg cancels most of the eastward legs. That is why the size of the vector sum (3.0 m) is much less than the scalar sum of distances (37 m).

**Check.** If you add the magnitudes (12 + 20 + 5.0 = 37 m) and call it the displacement, you have treated displacement as a scalar. A displacement of 37 m would put the robot far outside the corridor section it actually used.

## Worked example 2: same motion, two axes

**Question.** A ball is thrown straight up at 12 m/s. Ignore air resistance, so its acceleration is 9.8 m/s² downward the whole time. Use v_x = v_x0 + a_x t (written with y for a vertical axis) to find the ball's velocity 2.0 s after it is thrown. Do it twice: (a) with **+y upward** and (b) with **+y downward**. Compare the answers.

**(a) +y upward.**

1. Signs: the throw is upward, so v_y0 = +12 m/s. Gravity is downward, so a_y = −9.8 m/s².
2. Substitute: v_y = (+12 m/s) + (−9.8 m/s²)(2.0 s) = 12 − 19.6 = **−7.6 m/s**.
3. Read the sign: negative means opposite to +y, so the ball moves **downward at 7.6 m/s**.

**(b) +y downward.**

1. Signs: the throw is now against the positive direction, so v_y0 = −12 m/s. Gravity points along +y, so a_y = +9.8 m/s².
2. Substitute: v_y = (−12 m/s) + (+9.8 m/s²)(2.0 s) = −12 + 19.6 = **+7.6 m/s**.
3. Read the sign: positive means along +y, so the ball moves **downward at 7.6 m/s**.

**Comparison.** The two components have opposite signs, but they describe the **same vector**: 7.6 m/s downward. Changing the axis flips every sign; it never changes the physics.

**Check.** The ball stops rising when 12 m/s of upward velocity has been removed at 9.8 m/s each second, which takes about 12 ÷ 9.8 ≈ 1.2 s. So at 2.0 s it should already be falling, which agrees. At 1.0 s, axis (a) gives v_y = 12 − 9.8 = +2.2 m/s: still rising, as expected.

## Comparing vectors

Many questions ask you to compare quantities between two objects, or at two times. With vectors, compare two things separately.

- **Magnitudes.** Compare the absolute values. With +x to the right, a cart at −6.0 m/s is faster than a cart at +4.0 m/s, because 6.0 m/s > 4.0 m/s. Its speed is 1.5 times as large.
- **Directions.** Compare the signs. Same sign: same direction. Opposite signs: opposite directions.

Two vectors are equal only if both comparisons match. Two runners each moving at 5.0 m/s have the **same speed**. If one runs north and the other south, they have **different velocities**: +5.0 m/s and −5.0 m/s with +x north.

On a number line, −6 is "less than" +4. In physics, do not use "less than" for vectors with different directions unless you say what you are comparing. Say "the speed of A is greater" or "A's velocity component is more negative", not "A's velocity is smaller".

## Making a claim with the sign convention

Exam questions often ask you to **support or reject a claim**. With vectors, a good argument names the axis, writes each quantity with its sign, applies the rule (opposite directions, opposite signs; magnitudes compared as absolute values), and then states the conclusion with "because".

**Claim:** "A cart at −3.0 m/s has a smaller velocity than a cart at +2.0 m/s, so it is slower."

**Response:** The claim is incorrect. With +x to the right, the negative sign only says the first cart moves left. Its speed is |−3.0| = 3.0 m/s, which is greater than 2.0 m/s. So the first cart is **faster**, and the two carts move in opposite directions.

## Common misconceptions

- **"Negative means small."** The sign shows direction only. −8 m/s is a bigger velocity in size than +5 m/s.
- **"Speed and velocity are the same thing."** Speed is a scalar (size only). Velocity is a vector. Equal speeds can be different velocities.
- **"To add vectors, add their sizes."** That gives the total distance, a scalar sum. A vector sum uses signs, so opposite vectors partly or fully cancel (Worked example 1).
- **"A negative answer means I made a mistake."** A negative component is often correct. It means the vector points opposite to your chosen +x direction (Worked example 2).
- **"Two students with opposite signs must disagree."** Not if they chose opposite axes. Check both axes before judging.
- **"Arrow length does not matter in a sketch."** It does. Longer arrows must mean bigger magnitudes, and equal vectors must have equal lengths.
- **Leaving out the axis.** Without "+x to the right" (or similar), a sign has no meaning and the answer cannot be checked.

## Where this leads

Scalars, vectors and signed components are the language for the rest of the course. Topic 1.2 uses them to define displacement, velocity and acceleration: see [Displacement, Velocity, and Acceleration](/advanced-course-resources/physics-1/1-2-displacement-velocity-acceleration-study-guide/). Later, forces and momentum are also vectors and add in exactly the same way along one axis, and Topic 1.5 splits vectors into perpendicular components for two-dimensional motion.

Try the [practice questions](/advanced-course-resources/physics-1/1-1-scalars-vectors-one-dimension-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/1-1-scalars-vectors-one-dimension-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/1-1-scalars-vectors-one-dimension-checklist/) to consolidate. You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
