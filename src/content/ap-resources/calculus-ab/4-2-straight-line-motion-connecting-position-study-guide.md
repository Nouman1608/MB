---
resourceId: "mb-ap-calcab-4.2-study-guide"
title: "Straight-Line Motion: Connecting Position, Velocity, and Acceleration: Study Guide (Calculus AB 4.2)"
description: "Learn how position, velocity, acceleration and speed are linked by derivatives, how to tell the direction of motion, and how to decide when an object speeds up or slows down."
course: "calculus-ab"
unit: 4
topics: ["4.2"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Interpreting a derivative in context, with units (Topic 4.1)"
  - "Differentiation rules, including the product and chain rules (Units 2 and 3)"
  - "Second derivatives (Topic 3.6)"
  - "Solving polynomial equations by factoring and sign analysis"
prerequisiteResources: ["mb-ap-calcab-4.1-study-guide"]
learningObjectives:
  - "Find velocity and acceleration from a position function, and state their units"
  - "Use the sign of velocity to decide the direction of motion and when an object is at rest or changes direction"
  - "Tell velocity and speed apart, and decide whether an object is speeding up or slowing down from the signs of velocity and acceleration"
  - "Read velocity and acceleration from position and velocity graphs"
  - "Find displacement and total distance travelled from positions at the turning points"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "The worked examples are done by hand. Some exam motion questions allow a graphing calculator; Practice Q6 is one of these."
related: ["mb-ap-calcab-4.2-revision-notes", "mb-ap-calcab-4.2-practice", "mb-ap-calcab-4.2-checklist"]
next: "mb-ap-calcab-4.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Velocity is the derivative of position, v(t) = x′(t). Acceleration is the derivative of velocity, a(t) = v′(t) = x″(t)."
  - "The sign of v(t) gives the direction of motion. The object changes direction only where v(t) changes sign."
  - "Speed is |v(t)|. The object speeds up when v and a have the same sign, and slows down when they have opposite signs."
  - "Total distance travelled adds the distances between turning points; displacement is just final position minus initial position."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 4.2 is common content, so the same page serves AB and BC students. BC students later extend these ideas to motion in a plane."
  - question: "If the acceleration is negative, is the object slowing down?"
    answer: "Not necessarily. Negative acceleration slows down an object moving in the positive direction, but it speeds up an object that is already moving in the negative direction. Compare the signs of velocity and acceleration."
  - question: "Does v(t) = 0 mean the object changes direction?"
    answer: "It means the object is at rest at that instant. It changes direction only if v(t) changes sign there, so check the sign on each side."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## Setting up straight-line motion

"Straight-line" (or rectilinear) motion means an object moves back and forth along one line, such as a bead on a wire, a lift in a shaft or a car on a straight road. To describe it you need:

- **An origin**, the point where position is 0.
- **A positive direction**, usually right (on a horizontal line) or up (on a vertical line).
- **A clock**, so position is a function of time, x(t).

Position can be negative: that just means the object is on the negative side of the origin.

## Position, velocity and acceleration

Topic 4.1 showed that a derivative is a rate of change with units. Motion uses that idea twice:

| Quantity | Definition | Meaning | Units (x in metres, t in seconds) |
|---|---|---|---|
| Position | x(t) | Where the object is | m |
| Velocity | v(t) = x′(t) | Rate of change of position | m/s |
| Acceleration | a(t) = v′(t) = x″(t) | Rate of change of velocity | m/s² (metres per second per second) |
| Speed | \|v(t)\| | How fast, ignoring direction | m/s |

Two related ideas from earlier topics:

- **Average velocity** over [t₁, t₂] is (x(t₂) − x(t₁))/(t₂ − t₁). Instantaneous velocity v(t) is the limit of this as the interval shrinks.
- **Average acceleration** over [t₁, t₂] is (v(t₂) − v(t₁))/(t₂ − t₁).

## Direction of motion

Velocity carries direction in its sign:

| Sign of v(t) | The object is... |
|---|---|
| v(t) > 0 | moving in the positive direction (right, or up) |
| v(t) < 0 | moving in the negative direction (left, or down) |
| v(t) = 0 | at rest at that instant |

**Changing direction.** An object changes direction at time c only if v(t) **changes sign** at c. Being at rest is not enough. For example, x(t) = t³ has v(t) = 3t², which is 0 at t = 0, but v is positive on both sides, so the object pauses and then carries on in the same direction.

**Velocity and speed are different.** Velocity −5 m/s and velocity 5 m/s have the same speed, 5 m/s. Speed is never negative.

## Speeding up and slowing down

Speed is |v|. It increases when the velocity moves **away from 0**, and decreases when the velocity moves **towards 0**. Since acceleration tells you which way velocity is moving:

| v(t) | a(t) | Velocity is moving... | Speed is... |
|---|---|---|---|
| positive | positive | further above 0 | increasing (speeding up) |
| negative | negative | further below 0 | increasing (speeding up) |
| positive | negative | down towards 0 | decreasing (slowing down) |
| negative | positive | up towards 0 | decreasing (slowing down) |

> **Rule.** Same signs: speeding up. Opposite signs: slowing down.

A common trap: "negative acceleration means slowing down." That is only true when the velocity is positive. A falling stone has negative velocity and negative acceleration (with up as positive), and it is speeding up.

## Reading motion from graphs

- On a **position–time graph**, the slope is the velocity. Rising graph: moving in the positive direction. Horizontal tangent: at rest.
- On a **velocity–time graph**, the slope is the acceleration. Above the axis: moving in the positive direction. Crossing the axis: changing direction.
- **Speed from a velocity graph:** speed is the distance of the graph from the t-axis. The object speeds up where the graph moves away from the axis and slows down where it moves towards the axis.

## Displacement and total distance

- **Displacement** over [t₁, t₂] is x(t₂) − x(t₁). It can be negative.
- **Total distance travelled** counts every metre covered, whichever way the object moves. Split the time interval at each point where the object changes direction, find the distance covered on each piece, and add.

If an object goes 10 m right and then 4 m left, its displacement is 6 m but it has travelled 14 m. In Unit 8 you will find these quantities from velocity using integrals. In this topic you use positions at the turning points.

## Worked example 1: a particle on a line

**Question.** A particle moves along the x-axis. Its position, in centimetres, at time t seconds is

**x(t) = 2t³ − 21t² + 60t + 5, for 0 ≤ t ≤ 6.**

(a) Find v(t) and a(t). (b) When is the particle at rest, and when is it moving left? (c) On which intervals is it speeding up? (d) Find its speed at t = 3.5. (e) Find the total distance travelled from t = 0 to t = 6.

1. **Differentiate.** v(t) = 6t² − 42t + 60 = 6(t² − 7t + 10) = **6(t − 2)(t − 5)** cm/s. a(t) = 12t − 42 = **6(2t − 7)** cm/s².
2. **At rest:** v(t) = 0 when **t = 2 and t = 5** seconds.
3. **Sign of v.** On (0, 2) both factors (t − 2) and (t − 5) are negative, so v > 0. On (2, 5) they have opposite signs, so v < 0. On (5, 6] both are positive, so v > 0. The particle **moves left for 2 < t < 5**, and changes direction at t = 2 and t = 5.
4. **Sign of a.** a(t) = 0 at t = 3.5. a < 0 on [0, 3.5) and a > 0 on (3.5, 6].
5. **Compare signs.**

| Interval | v | a | Motion |
|---|---|---|---|
| 0 < t < 2 | + | − | slowing down |
| 2 < t < 3.5 | − | − | speeding up |
| 3.5 < t < 5 | − | + | slowing down |
| 5 < t < 6 | + | + | speeding up |

   So it is **speeding up on (2, 3.5) and (5, 6)**.
6. **Speed at t = 3.5.** v(3.5) = 6(1.5)(−1.5) = −13.5, so the speed is **13.5 cm/s**. (This is the greatest speed while moving left, because a changes sign there.)
7. **Positions at the endpoints and turning points.** x(0) = 5, x(2) = 16 − 84 + 120 + 5 = 57, x(5) = 250 − 525 + 300 + 5 = 30, x(6) = 432 − 756 + 360 + 5 = 41.
8. **Total distance.** |57 − 5| + |30 − 57| + |41 − 30| = 52 + 27 + 11 = **90 cm**.

**Check.** The displacement is x(6) − x(0) = 41 − 5 = 36 cm, which is less than 90 cm, as it must be when the particle doubles back.

<figure>
<svg viewBox="0 0 520 220" role="img" aria-labelledby="path-title path-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="path-title">The path of the particle in Worked example 1, drawn above a number line</title>
<desc id="path-desc">A horizontal number line from 0 to 60 centimetres. Three arrows are drawn above it, one above the other. The top arrow points right from 5 to 57 and is labelled t from 0 to 2, 52 centimetres. The middle arrow points left from 57 to 30 and is labelled t from 2 to 5, 27 centimetres. The bottom arrow points right from 30 to 41 and is labelled t from 5 to 6, 11 centimetres. Total distance is 90 centimetres.</desc>
<rect x="0" y="0" width="520" height="220" fill="#ffffff"/>
<defs>
<marker id="arrow42" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker>
</defs>
<line x1="50" y1="180" x2="490" y2="180" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="60" y1="175" x2="60" y2="185"/><line x1="130" y1="175" x2="130" y2="185"/><line x1="200" y1="175" x2="200" y2="185"/><line x1="270" y1="175" x2="270" y2="185"/><line x1="340" y1="175" x2="340" y2="185"/><line x1="410" y1="175" x2="410" y2="185"/><line x1="480" y1="175" x2="480" y2="185"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="200">0</text><text x="130" y="200">10</text><text x="200" y="200">20</text><text x="270" y="200">30</text><text x="340" y="200">40</text><text x="410" y="200">50</text><text x="480" y="200">60</text>
<text x="270" y="216">position x (cm)</text>
</g>
<line x1="95" y1="45" x2="459" y2="45" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#arrow42)"/>
<circle cx="95" cy="45" r="4" fill="#1d2b44"/>
<text x="277" y="35" font-size="12" fill="#1d2b44" text-anchor="middle">0 ≤ t ≤ 2: right, 5 → 57, 52 cm</text>
<line x1="459" y1="95" x2="270" y2="95" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 4" marker-end="url(#arrow42)"/>
<text x="450" y="85" font-size="12" fill="#1d2b44" text-anchor="end">2 ≤ t ≤ 5: left, 57 → 30, 27 cm</text>
<line x1="270" y1="145" x2="347" y2="145" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#arrow42)"/>
<text x="280" y="135" font-size="12" fill="#1d2b44">5 ≤ t ≤ 6: right, 30 → 41, 11 cm</text>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3">
<line x1="459" y1="45" x2="459" y2="95"/><line x1="270" y1="95" x2="270" y2="145"/><line x1="95" y1="45" x2="95" y2="180"/><line x1="347" y1="145" x2="347" y2="180"/>
</g>
</svg>
<figcaption>Figure 1. The particle's path, stacked in time order from top to bottom. The dashed arrow shows the leftward leg. Turning points are at x = 57 (t = 2) and x = 30 (t = 5). Adding the three legs gives a total distance of 90 cm, while the displacement is only 41 − 5 = 36 cm.</figcaption>
</figure>

## Worked example 2: reading a velocity graph

**Question.** A lift moves in a vertical shaft, with up as the positive direction. Figure 2 shows its velocity v(t), in metres per second, for 0 ≤ t ≤ 15 seconds. The graph is made of straight segments joining (0, 0), (2, 3), (6, 3), (8, 0), (9, −2), (13, −2) and (15, 0).

<figure>
<svg viewBox="0 0 520 280" role="img" aria-labelledby="lift-title lift-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="lift-title">Velocity–time graph of a lift, made of straight segments</title>
<desc id="lift-desc">Horizontal axis t in seconds from 0 to 15. Vertical axis v in metres per second from −3 to 4. The graph rises in a straight line from (0, 0) to (2, 3), stays at 3 until t = 6, falls to (8, 0), continues falling to (9, −2), stays at −2 until t = 13, then rises to (15, 0). Above the axis from t = 0 to 8 the lift moves up; below the axis from t = 8 to 15 it moves down. Marked points: (7, 1.5) where the lift is slowing down, (8.5, −1) where it is speeding up downwards, and (14, −1) where it is slowing down.</desc>
<rect x="0" y="0" width="520" height="280" fill="#ffffff"/>
<line x1="60" y1="150" x2="495" y2="150" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="260" x2="60" y2="15" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="116" y1="146" x2="116" y2="154"/><line x1="172" y1="146" x2="172" y2="154"/><line x1="228" y1="146" x2="228" y2="154"/><line x1="284" y1="146" x2="284" y2="154"/><line x1="340" y1="146" x2="340" y2="154"/><line x1="396" y1="146" x2="396" y2="154"/><line x1="452" y1="146" x2="452" y2="154"/>
<line x1="56" y1="45" x2="64" y2="45"/><line x1="56" y1="80" x2="64" y2="80"/><line x1="56" y1="115" x2="64" y2="115"/><line x1="56" y1="185" x2="64" y2="185"/><line x1="56" y1="220" x2="64" y2="220"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="116" y="166">2</text><text x="172" y="166">4</text><text x="228" y="166">6</text><text x="284" y="139">8</text><text x="340" y="166">10</text><text x="396" y="166">12</text><text x="452" y="166">14</text>
<text x="500" y="145">t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="52" y="49">3</text><text x="52" y="84">2</text><text x="52" y="119">1</text><text x="52" y="154">0</text><text x="52" y="189">−1</text><text x="52" y="224">−2</text>
<text x="90" y="14">v (m/s)</text>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60,150 116,45 228,45 284,150 312,220 424,220 480,150"/>
<circle cx="256" cy="97.5" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="298" cy="185" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="452" cy="185" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="264" y="92" font-size="12" fill="#1d2b44">t = 7</text>
<text x="306" y="182" font-size="12" fill="#1d2b44">t = 8.5</text>
<text x="420" y="200" font-size="12" fill="#1d2b44" text-anchor="end">t = 14</text>
<text x="150" y="100" font-size="12" fill="#1d2b44">moving up (v &gt; 0)</text>
<text x="330" y="250" font-size="12" fill="#1d2b44">moving down (v &lt; 0)</text>
</svg>
<figcaption>Figure 2. Velocity of the lift. The slope of each segment is the acceleration. Speed is the distance from the t-axis, so the lift speeds up where the graph moves away from the axis and slows down where it moves towards it.</figcaption>
</figure>

(a) Find a(1) and a(7). (b) Is the lift speeding up or slowing down at t = 7, t = 8.5 and t = 14? (c) When does the lift change direction? (d) Find the average acceleration over [6, 9].

1. **Acceleration is the slope.** On [0, 2] the slope is 3/2, so **a(1) = 1.5 m/s²**. On [6, 8] the slope is (0 − 3)/2, so **a(7) = −1.5 m/s²**.
2. **t = 7.** v(7) = 1.5 > 0 and a(7) = −1.5 < 0. Opposite signs: **slowing down** (moving up, coming to a stop).
3. **t = 8.5.** v(8.5) = −1 < 0 and the slope on [8, 9] is −2, so a(8.5) = −2 < 0. Same signs: **speeding up** (moving down faster), even though the acceleration is negative.
4. **t = 14.** v(14) = −1 < 0 and the slope on [13, 15] is 1, so a(14) = 1 > 0. Opposite signs: **slowing down**.
5. **Change of direction.** v changes from positive to negative at **t = 8**, so the lift switches from going up to going down there. At t = 0 and t = 15 it is at rest but these are the ends of the interval, not changes of direction.
6. **Average acceleration** over [6, 9]: (v(9) − v(6))/(9 − 6) = (−2 − 3)/3 = **−5/3 m/s²**, about −1.67 m/s².

**Interpretation.** On [2, 6] and [9, 13], a = 0 and the lift moves at constant speed (3 m/s up, then 2 m/s down). a(t) does not exist at the corners of the graph, such as t = 2, because the slope jumps there.

## Common misconceptions

- **"Negative acceleration means slowing down."** Only if the velocity is positive. Compare the signs of v and a.
- **"v = 0 means it changes direction."** Only if v changes sign. Check both sides.
- **Mixing up velocity and speed.** Speed is |v|. A velocity of −13.5 cm/s is a speed of 13.5 cm/s.
- **Using a(t) = 0 as the turning point.** The object turns where v changes sign, not where a = 0.
- **Total distance = |final − initial position|.** That is the size of the displacement. If the object turns, add the legs separately.
- **Wrong units.** Acceleration is in m/s² (velocity units per second), not m/s.
- **Reading the height of a velocity graph as position.** On a velocity graph, height is velocity, and slope is acceleration.
- **Forgetting the positive direction.** Before deciding "up" or "down", check which way the problem calls positive.

## Where this leads

Topic 4.3 uses the same reasoning for rates in other contexts, such as filling tanks and growing populations. In Unit 5, the same sign analysis of a derivative tells you where any function increases or decreases. In Unit 8 you go the other way: integrals turn velocity back into displacement and total distance. BC students later extend motion to curves in a plane, using parametric and vector-valued functions. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Next topic: [Rates of Change in Applied Contexts Other Than Motion](/advanced-course-resources/calculus-ab/4-3-rates-change-applied-contexts-other-study-guide/).

Try the [practice questions](/advanced-course-resources/calculus-ab/4-2-straight-line-motion-connecting-position-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/4-2-straight-line-motion-connecting-position-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/4-2-straight-line-motion-connecting-position-checklist/) to consolidate.
