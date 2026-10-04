---
resourceId: "mb-ap-phys1-1.2-study-guide"
title: "Displacement, Velocity, and Acceleration: Study Guide (Physics 1 1.2)"
description: "Build displacement, average and instantaneous velocity, and acceleration from first principles with algebra and graphs only, including signs, tangent slopes and limiting cases."
course: "physics-1"
unit: 1
topics: ["1.2"]
resourceType: "study-guide"
prerequisites:
  - "Choosing an axis and using + and − signs for direction in one dimension (Topic 1.1)"
  - "Finding the slope of a straight line from two points"
learningObjectives:
  - "Describe a change in position as a displacement Δx = x − x₀ and tell it apart from distance travelled"
  - "Calculate average velocity and average acceleration from initial and final values over a time interval"
  - "Estimate an instantaneous velocity from shrinking time intervals or from the slope of a tangent line on a position–time graph"
  - "Decide whether an object is speeding up or slowing down from the signs of v_x and a_x"
skills: ["1", "2"]
studyMinutes: 40
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus is used anywhere in this course. Where gravity appears we use g = 9.8 m/s², the value on the course equation table"
related: ["mb-ap-phys1-1.2-revision-notes", "mb-ap-phys1-1.2-practice", "mb-ap-phys1-1.2-checklist"]
next: "mb-ap-phys1-1.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Displacement is the change in position, Δx = x − x₀. It has a sign; distance travelled does not."
  - "Average velocity is v_avg = Δx / Δt. Average acceleration is a_avg = Δv_x / Δt."
  - "Instantaneous velocity is the average velocity over a very short interval: the slope of the tangent line on a position–time graph."
  - "Same signs for v_x and a_x means speeding up; opposite signs means slowing down. A negative a_x does not by itself mean slowing down."
  - "Always state your axis first, for example \"+x to the right\". Every sign in the answer depends on it."
faqs:
  - question: "Is speed the same as velocity?"
    answer: "No. In one dimension, velocity v_x has a sign that shows direction; speed is its size, |v_x|, and is never negative. Average speed (distance ÷ time) can differ a lot from the size of the average velocity (displacement ÷ time)."
  - question: "Does this course use calculus for instantaneous velocity?"
    answer: "No. This is the algebra-based course. You find instantaneous velocity by taking average velocities over smaller and smaller intervals, or by drawing a tangent line on a graph and measuring its slope."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Everything here uses algebra and graphs. If you are taking the calculus-based Physics C: Mechanics course, it has its own separate guide for its Topic 1.2.

## Start with an object and an axis

To describe motion we first simplify the moving thing. In the **object model**, a car, a ball or a runner is treated as a single point. We ignore its size, shape and what is happening inside it. We only track where that point is.

Next we choose a **coordinate system**. In one dimension that means three choices:

1. Where is the origin (x = 0)?
2. Which direction is positive?
3. What unit do we measure in? (In this course: metres, m.)

Write the choice down every time, for example **"+x to the right, origin at the start line"**. The physics does not depend on this choice, but every sign in your answer does.

**Position**, x, tells you where the object is relative to the origin. A position of x = −3.0 m means 3.0 m on the negative side of the origin.

## Displacement and distance

**Displacement** is the change in position:

**Δx = x − x₀**

Here x₀ is the initial position and x is the final position. Δx has a sign. Positive Δx means the net change was in the +x direction.

**Distance travelled** is the total length of path covered. It has no direction and is never negative. If you walk 5 m forward and 5 m back, your distance travelled is 10 m but your displacement is 0 m.

Displacement only cares about where you start and finish. Distance cares about every step on the way.

## Average velocity and average speed

Averages use only the **initial and final states** over a time interval Δt = t − t₀.

**Average velocity: v_avg = Δx / Δt**

**Average speed = distance travelled / Δt**

Average velocity carries a sign and has units m/s. Average speed is never negative. The two are equal in size only when the object never turns around.

## Average acceleration

Velocity can change. **Average acceleration** measures how fast velocity changes:

**Average acceleration: a_avg = Δv_x / Δt = (v_x − v_x0) / Δt**

The unit is (m/s) per s, written m/s². An object is accelerating whenever its velocity changes. In one dimension that means its speed changes, its direction reverses, or both.

### Speeding up or slowing down?

The sign of a_x alone does **not** tell you whether an object is speeding up. Compare the signs of v_x and a_x:

| v_x | a_x | What happens to the speed |
|---|---|---|
| + | + | speeding up (moving in +x, faster) |
| − | − | speeding up (moving in −x, faster) |
| + | − | slowing down |
| − | + | slowing down |
| any | 0 | constant velocity |

**Same signs → speeding up. Opposite signs → slowing down.**

## Instantaneous velocity without calculus

A speedometer shows velocity **at an instant**, not over an interval. How can an average become an instantaneous value? Make the interval very short.

Take a cart that starts from rest with **+x to the right**. Its position is x = (1.0 m/s²)t², so at t = 2.0 s it is at x = 4.0 m. Work out average velocities starting at t = 2.0 s:

| Interval | Δx (m) | Δt (s) | v_avg = Δx / Δt (m/s) |
|---|---|---|---|
| 2.0 s → 3.0 s | 9.0 − 4.0 = 5.0 | 1.0 | 5.0 |
| 2.0 s → 2.5 s | 6.25 − 4.0 = 2.25 | 0.5 | 4.5 |
| 2.0 s → 2.1 s | 4.41 − 4.0 = 0.41 | 0.1 | 4.1 |
| 2.0 s → 2.01 s | 4.0401 − 4.0 = 0.0401 | 0.01 | 4.01 |

As Δt shrinks, the average velocity settles on **4.0 m/s**. That is the instantaneous velocity at t = 2.0 s.

On a position–time graph, each average velocity is the slope of a **secant line** joining two points on the curve. As the second point slides towards the first, the secant turns into the **tangent line**: the straight line that just touches the curve at that instant.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="p1-xt-title p1-xt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-xt-title">Position–time graph with a secant line and a tangent line</title>
<desc id="p1-xt-desc">Position x in metres from 0 to 16 against time t in seconds from 0 to 4 for a cart with x equals 1.0 times t squared. The curve bends upward. A dashed secant line joins the point at t = 2 s, x = 4 m to the point at t = 3 s, x = 9 m; its slope is 5.0 m/s. A solid tangent line touches the curve at t = 2 s and passes through t = 1 s, x = 0 and t = 3 s, x = 8 m; its slope is 4.0 m/s, the instantaneous velocity at t = 2 s.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M180 290 V50 M290 290 V50 M400 290 V50 M510 290 V50"/>
<path d="M70 230 H510 M70 170 H510 M70 110 H510 M70 50 H510"/>
</g>
<path d="M70 290 H520 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="180" y="308">1</text><text x="290" y="308">2</text><text x="400" y="308">3</text><text x="510" y="308">4</text>
<text x="295" y="330" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="234">4</text><text x="62" y="174">8</text><text x="62" y="114">12</text><text x="62" y="54">16</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">position, x (m)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,290.0 83.8,289.8 97.5,289.1 111.2,287.9 125.0,286.2 138.8,284.1 152.5,281.6 166.2,278.5 180.0,275.0 193.8,271.0 207.5,266.6 221.2,261.6 235.0,256.2 248.8,250.4 262.5,244.1 276.2,237.3 290.0,230.0 303.8,222.3 317.5,214.1 331.2,205.4 345.0,196.2 358.8,186.6 372.5,176.6 386.2,166.0 400.0,155.0 413.8,143.5 427.5,131.6 441.2,119.1 455.0,106.2 468.8,92.9 482.5,79.1 496.2,64.8 510.0,50.0"/>
<path d="M290 230 L400 155" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<path d="M180 290 L400 170" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="290" cy="230" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="400" cy="155" r="4" fill="#1d2b44"/>
<circle cx="400" cy="170" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="300" y="250" font-size="12" fill="#1d2b44">P (2.0 s, 4.0 m)</text>
<text x="408" y="150" font-size="12" fill="#1d2b44">(3.0 s, 9.0 m)</text>
<text x="408" y="186" font-size="12" fill="#1d2b44">(3.0 s, 8.0 m)</text>
<text x="160" y="130" font-size="12" fill="#1d2b44">dashed secant: slope 5.0 m/s</text>
<text x="160" y="148" font-size="12" fill="#1d2b44">solid tangent at P: slope 4.0 m/s</text>
<text x="440" y="80" font-size="12" fill="#1d2b44">x = (1.0 m/s²)t²</text>
</svg>
<figcaption>Figure 1. Position–time graph for a cart, +x to the right. The dashed secant from 2.0 s to 3.0 s has slope (9.0 − 4.0) m ÷ 1.0 s = 5.0 m/s, the average velocity. The thin solid tangent at P has slope (8.0 − 0) m ÷ (3.0 − 1.0) s = 4.0 m/s, the instantaneous velocity at 2.0 s.</figcaption>
</figure>

To measure a tangent slope on a real graph: draw the tangent carefully with a ruler, pick two points **far apart on the tangent line** (not on the curve), and divide rise by run. In Figure 1 those points are (1.0 s, 0 m) and (3.0 s, 8.0 m).

The same idea works for acceleration. Instantaneous acceleration is the average acceleration over a very short interval: the slope of the tangent on a **velocity–time** graph.

## Reading a velocity–time graph

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="p1-vt-title p1-vt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-vt-title">Velocity–time graph for a cart rolled up a ramp</title>
<desc id="p1-vt-desc">Velocity v_x in metres per second from −4 to +4 against time t in seconds from 0 to 4, with +x up the ramp. A straight line falls from +3.0 m/s at t = 0 to 0 at t = 2.0 s and to −3.0 m/s at t = 4.0 s, so the slope is −1.5 m/s². The triangle above the time axis from 0 to 2 s is shaded and labelled area +3.0 m, slowing down. The triangle below the axis from 2 to 4 s is hatched and labelled area −3.0 m, speeding up in the −x direction.</desc>
<defs><pattern id="p1-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V8" stroke="#1d2b44" stroke-width="1"/></pattern></defs>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<polygon points="70,80 290,170 70,170" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1"/>
<polygon points="290,170 510,260 510,170" fill="url(#p1-hatch)" stroke="#1d2b44" stroke-width="1"/>
<path d="M70 300 V40 M70 170 H520" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="180" y="186">1</text><text x="290" y="186">2</text><text x="400" y="186">3</text><text x="510" y="186">4</text>
<text x="470" y="160" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="54">+4</text><text x="62" y="84">+3</text><text x="62" y="114">+2</text><text x="62" y="144">+1</text><text x="62" y="174">0</text><text x="62" y="204">−1</text><text x="62" y="234">−2</text><text x="62" y="264">−3</text><text x="62" y="294">−4</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">velocity, v_x (m/s)</text>
<path d="M70 80 L510 260" stroke="#1d2b44" stroke-width="2.5"/>
<text x="90" y="140" font-size="12" fill="#1d2b44">area +3.0 m</text>
<text x="90" y="62" font-size="12" fill="#1d2b44">0–2 s: slowing down (v_x +, a_x −)</text>
<text x="340" y="252" font-size="12" fill="#1d2b44" font-weight="600">area −3.0 m (hatched)</text>
<text x="300" y="300" font-size="12" fill="#1d2b44">2–4 s: speeding up in −x (v_x −, a_x −)</text>
<text x="300" y="110" font-size="12" fill="#1d2b44">slope = −6.0 m/s ÷ 4.0 s = −1.5 m/s²</text>
</svg>
<figcaption>Figure 2. A cart is pushed up a ramp and released, with +x up the ramp. The acceleration is −1.5 m/s² the whole time. The shaded area (+3.0 m) is the displacement up the ramp; the hatched area (−3.0 m) is the displacement back down. Net displacement 0 m; distance travelled 6.0 m.</figcaption>
</figure>

Two facts to read from Figure 2:

- The **slope** of a velocity–time graph is the acceleration: (−3.0 − 3.0) m/s ÷ 4.0 s = −1.5 m/s².
- The **area** between the line and the time axis is the displacement, with area below the axis counting as negative. Each triangle has area ½ × 2.0 s × 3.0 m/s = 3.0 m.

Notice that a_x is negative throughout. For the first 2 s the cart slows down; for the last 2 s it speeds up. The sign comparison in the table above explains both halves. Topic 1.3 develops these graph links in full.

## Worked example 1: distance, displacement and two kinds of average

**Question.** Take **+x as east**, with the origin at a bus stop. A cyclist starts at x₀ = +20 m. She rides east to x = +140 m in 30 s, then rides west to x = +80 m in a further 20 s. Find (a) the distance travelled, (b) the displacement, (c) the average velocity and (d) the average speed for the whole 50 s.

1. Distance, leg 1: |140 − 20| = 120 m. Leg 2: |80 − 140| = 60 m. Total distance = 120 + 60 = **180 m**.
2. Displacement: Δx = x − x₀ = 80 m − 20 m = **+60 m** (60 m east of where she started).
3. Average velocity: v_avg = Δx / Δt = +60 m ÷ 50 s = **+1.2 m/s** (east).
4. Average speed: 180 m ÷ 50 s = **3.6 m/s**.

**Check.** The leg velocities are +120 m ÷ 30 s = +4.0 m/s and −60 m ÷ 20 s = −3.0 m/s. Their plain mean is +0.5 m/s, **not** +1.2 m/s, because she spent longer on the first leg. A time-weighted mean agrees: (4.0 × 30 + (−3.0) × 20) ÷ 50 = +1.2 m/s. Average speed is bigger than the size of the average velocity because she turned around.

## Worked example 2: positive acceleration while slowing down

**Question.** Take **+x as east**. A car travels west and brakes. Its velocity changes from v_x0 = −18 m/s to v_x = −6.0 m/s in 4.0 s. Find its average acceleration and say whether it is speeding up or slowing down.

1. Change in velocity: Δv_x = v_x − v_x0 = (−6.0 m/s) − (−18 m/s) = **+12 m/s**.
2. Average acceleration: a_avg = Δv_x / Δt = +12 m/s ÷ 4.0 s = **+3.0 m/s²**.
3. Compare signs: v_x is negative (moving west) and a_x is positive. Opposite signs, so the car is **slowing down**.

**Interpretation.** "Positive acceleration" here means the acceleration points east, opposite to the motion. Its speed falls from 18 m/s to 6.0 m/s.

**Check.** If you dropped the signs and wrote (6 − 18) ÷ 4 = −3.0 m/s², you would get the right size but the wrong direction. Always substitute signed velocities.

## Limiting cases worth knowing

Testing extreme cases is a quick way to check your understanding.

- **Very short Δt.** The average value becomes the instantaneous value (the table and Figure 1).
- **Back to the start.** If x = x₀, then Δx = 0 and v_avg = 0, even though the object moved. Its average speed is not zero.
- **Momentarily at rest is not the same as zero acceleration.** Throw a ball straight up and take **+y upward**. With g = 9.8 m/s², its velocity changes from +14.7 m/s to 0 at the top after 1.5 s, and to −4.9 m/s after 2.0 s. Average acceleration over 0–2.0 s = (−4.9 − 14.7) m/s ÷ 2.0 s = −9.8 m/s². At the top v_y = 0, but its velocity is still changing, so a_y = −9.8 m/s², not 0.
- **Zero acceleration does not mean at rest.** A puck gliding at a steady +2.0 m/s has a_x = 0.

## Preview: constant-acceleration equations

When a_x is constant, Topic 1.3 gives three equations that link x, v_x, a_x and t:

| Equation | Missing quantity |
|---|---|
| v_x = v_x0 + a_x t | x |
| x = x₀ + v_x0 t + ½ a_x t² | v_x |
| v_x² = v_x0² + 2a_x(x − x₀) | t |

They are valid **only** when acceleration is constant. This course describes changing acceleration in words and sketches, but does not ask you to calculate with it. The first equation is just the definition of average acceleration rearranged, because for constant acceleration the average and instantaneous values are equal.

## Common misconceptions

- **"Negative acceleration means slowing down."** No. Compare the signs of v_x and a_x (Worked example 2 and Figure 2).
- **"Displacement and distance are the same thing."** Only when the object never reverses direction (Worked example 1).
- **"Average velocity is the mean of the starting and ending velocities."** That only works for constant acceleration. Use Δx / Δt.
- **"If v = 0, then a = 0."** A ball at the top of its flight has v_y = 0 and a_y = −9.8 m/s².
- **"The slope of a curve is the slope between two points on it."** That is a secant (an average). The instantaneous value needs the tangent line.
- **Reading the height of a position–time graph as velocity.** Velocity is the slope, not the height. A high, flat line means far away and at rest.
- **Forgetting to state the axis.** Without "+x to the right" (or similar), a negative answer has no meaning.

## Where this leads

These definitions are the language of all of kinematics. Topic 1.3 (Representing Motion) adds the full graph links and the constant-acceleration equations; Topics 1.4 and 1.5 extend them to moving reference frames and two dimensions. Try the [practice questions](/advanced-course-resources/physics-1/1-2-displacement-velocity-acceleration-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/1-2-displacement-velocity-acceleration-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/1-2-displacement-velocity-acceleration-checklist/) to consolidate. You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
