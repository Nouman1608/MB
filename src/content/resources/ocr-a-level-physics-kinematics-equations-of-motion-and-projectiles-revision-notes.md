---
title: "OCR A Level Physics A: Kinematics, equations of motion and projectiles (H556) -- Revision Notes"
seoTitle: "OCR A Level Physics Kinematics Revision Notes (H556)"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Kinematics, equations of motion and projectiles"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 42
syllabusTopics:
  - qualification: "a-level"
    topic: "forces-and-motion-ocr-alevel"
    subtopic: "motion-ocr-alevel"
description: "Condensed revision notes for OCR A Level Physics A (H556) 3.1 Motion: formulae, graph rules, g experiments, stopping distance, projectiles and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes condense section 3.1 (Motion, outcomes 3.1.1 to 3.1.3) of OCR A Level Physics A (H556), Version 3.0 (March 2026). Full explanations and worked examples are in the [study guide](/resources/ocr-a-level-physics-kinematics-equations-of-motion-and-projectiles/); test yourself with the [practice questions](/resources/ocr-a-level-physics-kinematics-equations-of-motion-and-projectiles-practice/). Hub: [OCR A Level Physics](/boards/ocr/a-level/physics/). Checklist: [printable checklist](/checklists/ocr/a-level/physics/). Not sure where to start? Take a [free diagnostic](/diagnostics/).

## 3.1.1 Definitions

| Quantity | Definition | Type | Unit |
|---|---|---|---|
| Distance | Length of path travelled | Scalar | m |
| Displacement | Straight-line distance from start in a stated direction | Vector | m |
| Average speed | Total distance / total time | Scalar | m s⁻¹ |
| Instantaneous speed | Speed at one instant | Scalar | m s⁻¹ |
| Velocity | Rate of change of displacement | Vector | m s⁻¹ |
| Acceleration | Rate of change of velocity, a = Δv/Δt | Vector | m s⁻² |

Acceleration is in the direction of the change in velocity. A decelerating body has acceleration opposite to its velocity.

## 3.1.1(b)-(d) Graph rules

| Graph | Gradient | Area under line |
|---|---|---|
| Displacement-time | Velocity | None used |
| Velocity-time | Acceleration | Displacement |
| Acceleration-time | None used | Change in velocity |

- Straight line on s-t: constant velocity. Curve getting steeper: accelerating.
- Straight line on v-t: constant acceleration. Horizontal line: constant velocity. Line crossing the axis: the direction reverses.
- Area below the time axis counts as negative displacement.
- Curved graph, instantaneous gradient: draw a tangent and use a large triangle.
- Curved graph, area: split into equal strips and use trapezia (area of strip = width × mean of the two heights), or count squares.

### Method in steps: estimating an area

1. Read the heights at equal time steps.
2. Find the mean of each pair of heights.
3. Multiply by the strip width and add.
4. Comment on whether the estimate is high or low: a concave-down curve gives an underestimate, a concave-up curve an overestimate.

Worked reminder: speeds 0, 4, 6, 7 m s⁻¹ at 0, 3, 6, 9 s give 3 × (2 + 5 + 6.5) = **40.5 m**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-equations-of-motion--08-terminal-speed.webp" width="900" height="1020" alt="A speed-time graph for an 80 kg skydiver starts with gradient g and flattens at about 55 m/s. Force diagrams show A: drag 0, a = 9.81; B: drag 500 N, a = 3.56 m/s squared; C: drag = weight = 785 N, a = 0." loading="lazy">
  <figcaption>At terminal speed drag equals weight, the resultant force is zero and the speed is constant.</figcaption>
</figure>


## 3.1.2(a) Equations of motion

Constant acceleration, straight line:

| Equation | Missing variable |
|---|---|
| v = u + at | s |
| s = ½(u + v)t | a |
| s = ut + ½at² | v |
| v² = u² + 2as | t |

- Choose a positive direction first. Signs follow from it: upward positive makes a = −g for a projectile.
- At the highest point of vertical motion, v = 0.
- Falling from rest: u = 0 and s = ½gt².
- Use these equations only when a is constant. They apply to free fall without air resistance with a = g.

### Method in steps

1. Sketch and mark the positive direction.
2. List the five variables with signs.
3. Choose the equation with the unknown and three knowns.
4. Rearrange first, substitute second.

Worked reminder: a train slows from 30 m s⁻¹ to 12 m s⁻¹ in 360 m. a = (12² − 30²)/(2 × 360) = −756/720 = **−1.05 m s⁻²**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-equations-of-motion--01-v-t-graph-gradient-area.webp" width="900" height="1160" alt="A velocity-time graph rises from 0 to 8 m/s in 4 s, stays at 8 m/s for 4 s, then falls to -4 m/s over 3 s. The areas are +16, +32, +8 m above the axis and -2 m below it, so displacement is 54 m and distance is 58 m. An acceleration-time graph beneath shows the gradients +2, 0 and -4 m/s squared." loading="lazy">
  <figcaption>Gradient of a v-t graph is acceleration; area is signed displacement, and distance adds the magnitudes.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-equations-of-motion--02-suvat-from-graph.webp" width="900" height="1000" alt="A v-t graph for 6.0 to 22 m/s over 120 m has gradient 1.87 m/s squared and total area 120 m, split into a rectangle ut (51 m) and a triangle half a t squared (69 m). Four cards list the equations and which variable each leaves out." loading="lazy">
  <figcaption>The area under a v-t graph for constant acceleration gives s = ut + half a t squared; each suvat equation omits one variable.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-equations-of-motion--05-horizontal-launch.webp" width="900" height="1210" alt="A ball thrown horizontally at 14 m/s from a 45 m cliff and a ball dropped at the same moment are shown every 0.5 s: always at the same height, landing together after 3.03 s. The thrown ball covers 7.0 m sideways each interval. It lands 42 m away at 33 m/s, 65 degrees below horizontal." loading="lazy">
  <figcaption>The horizontal and vertical motions are independent and share only the time.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-equations-of-motion--06-angled-projectile.webp" width="900" height="880" alt="A ball launched at 28 m/s, 35 degrees, has vx = 22.9 and vy = 16.1 m/s, flight time 3.27 s, range 75 m and maximum height 13.1 m. At the top the velocity is the horizontal component only and the acceleration is still g downwards." loading="lazy">
  <figcaption>At the top vertical velocity is zero but the speed equals vx and the acceleration is still g.</figcaption>
</figure>


## Investigating motion and collisions (3.1.2(a)(ii))

| Apparatus | What it gives |
|---|---|
| Ticker timer | Dots at fixed time intervals; spacing shows velocity |
| Light gates and timer | Average speed over a card, d/Δt; two gates give acceleration |
| Data-logger and motion sensor | Direct s-t or v-t graphs |
| Video | Position against time from frame rate, with a scale in view |
| Air track | Almost frictionless motion for constant acceleration and collisions |

## 3.1.2(b) Free fall and measuring g

- g is the acceleration of free fall, about 9.81 m s⁻² near the Earth's surface, downwards.
- **Trapdoor and electromagnet:** drop height h, time t, u = 0. h = ½gt², so plot h against t². Gradient = g/2, so g = 2 × gradient.
- **Light gates:** v = d/Δt for card width d. Two gates: g = (v₂ − v₁)/t. One gate after a drop of h: v² = 2gh, so a graph of v² against h has gradient 2g.
- Improve results by repeating and averaging, using a wide range of heights, and measuring h with a set square or plumb line.
- Possible systematic errors: late release from residual magnetism, and a card that is not vertical.

Worked reminder: gradient of h against t² is 4.95 m s⁻², so g = 2 × 4.95 = **9.90 m s⁻²**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-equations-of-motion--03-measuring-g.webp" width="900" height="1170" alt="An electromagnet releases a steel ball and starts a timer; a trapdoor stops it. Plotting h against t squared gives a straight line through the origin with gradient g over 2 = 4.90 m/s squared, so g = 9.80 m/s squared (data from the OCR worked example)." loading="lazy">
  <figcaption>h = half g t squared, so the gradient of h against t squared is g/2.</figcaption>
</figure>


## 3.1.2(c) Stopping distance

| Term | Meaning | Depends on |
|---|---|---|
| Thinking distance | Speed × reaction time | Speed (proportional), reaction time |
| Braking distance | v²/(2a) for constant deceleration | Speed squared, road, tyres, brakes, load |
| Stopping distance | Thinking + braking | All of the above |

Reaction time is lengthened by tiredness, alcohol, drugs and distraction.

Worked reminder: 15 m s⁻¹, reaction time 0.80 s, deceleration 5.0 m s⁻². Thinking = 12 m, braking = 225/10 = 22.5 m, stopping = **34.5 m**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-equations-of-motion--04-stopping-distance.webp" width="900" height="950" alt="Two bars to scale: at 20 m/s thinking 13 m plus braking 28.6 m gives 42 m; at 30 m/s thinking 19.5 m plus braking 64.3 m gives 84 m. A 50 percent rise in speed multiplies braking distance by 2.25 and roughly doubles stopping distance." loading="lazy">
  <figcaption>Thinking distance is proportional to speed; braking distance to speed squared (OCR only).</figcaption>
</figure>


## 3.1.3 Projectiles

- Horizontal velocity is constant: x = vₓt.
- Vertical motion has a = g downwards, using the equations of motion.
- Only t is shared between the two directions.
- Launch at speed v and angle θ: vₓ = v cos θ, vᵧ = v sin θ.
- On level ground: time of flight T = 2vᵧ/g, range = vₓT, maximum height = vᵧ²/(2g).
- At the top, vᵧ = 0 but vₓ is unchanged, so the speed is vₓ.
- Speed on landing = √(vₓ² + vᵧ²), at tan⁻¹(vᵧ/vₓ) to the horizontal.
- Launch from a height: solve s = vᵧt − ½gt² with s equal to minus the height. Take the positive root.

Worked reminder: ball thrown horizontally at 6.0 m s⁻¹ from 2.0 m. t = √(2 × 2.0/9.81) = 0.64 s, so x = **3.8 m**.

Worked reminder (angled launch): 20 m s⁻¹ at 30° from level ground. vₓ = 17.3 m s⁻¹, vᵧ = 10.0 m s⁻¹. T = 2 × 10.0/9.81 = 2.04 s, range = 17.3 × 2.04 = **35 m**, maximum height = 100/19.62 = **5.1 m**.

Worked reminder (light gates): a 0.040 m card takes 0.020 s to pass gate 1 and 0.008 s to pass gate 2, with 0.30 s between the gates. v₁ = 2.0 m s⁻¹, v₂ = 5.0 m s⁻¹, so a = 3.0/0.30 = **10 m s⁻²**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-equations-of-motion--07-higher-landing.webp" width="900" height="880" alt="A ball thrown at 15 m/s, 60 degrees, crosses the 3.0 m platform height at 0.256 s (rising) and 2.39 s (falling). Only the second root is the landing, with vy = -10.5 m/s and horizontal distance 17.9 m." loading="lazy">
  <figcaption>A quadratic gives two times at the platform height; the landing is the later one, when vy is negative.</figcaption>
</figure>


## Explaining in words

- Independence: the horizontal velocity is constant because no horizontal force acts, while gravity changes only the vertical velocity. Two balls released from the same height, one dropped and one launched sideways, land together.
- Why braking distance grows faster than thinking distance: kinetic energy rises with v², so the work done by the brakes, and the distance needed, rises with v².
- Why a longer fall improves a g measurement: the timing uncertainty is a smaller fraction of a longer time.

## Must-know distinctions

- Speed is a scalar; velocity is a vector. Average speed and average velocity differ when direction changes.
- Gradient of s-t is velocity; gradient of v-t is acceleration.
- Thinking distance is proportional to speed; braking distance to speed squared.
- Horizontal: constant velocity. Vertical: constant acceleration.

## Quick self-test

1. A cyclist rides once round a 300 m circular track in 40 s. State the average speed and the average velocity.
2. A car accelerates from rest at 2.5 m s⁻² for 8.0 s. Find the distance travelled.
3. A ball is dropped from rest from 20 m. Find its speed on landing (g = 9.81 m s⁻²).
4. State what the area under a velocity-time graph represents.
5. A body's velocity rises steadily from 5.0 m s⁻¹ at 0 s to 20 m s⁻¹ at 5.0 s. Find the acceleration and the displacement.
6. In a trapdoor experiment h = 0.50 m and t = 0.32 s. Calculate g.
7. State why a narrower card improves a light-gate speed measurement.
8. A car at 24 m s⁻¹ has a reaction time of 0.50 s. Find the thinking distance.
9. A stone leaves a horizontal surface at 3.0 m s⁻¹. How long does it take to fall 0.80 m?
10. State two factors that increase braking distance but not thinking distance.

### Answers

1. Average speed = 300/40 = **7.5 m s⁻¹**; displacement is zero, so average velocity = **0**.
2. s = ½at² = 0.5 × 2.5 × 64 = **80 m**.
3. v² = 2gs = 2 × 9.81 × 20 = 392.4, so v = **19.8 m s⁻¹**.
4. Displacement (distance on a speed-time graph).
5. a = 15/5.0 = **3.0 m s⁻²**; s = ½ × (5.0 + 20) × 5.0 = **62.5 m**.
6. g = 2h/t² = 1.0/0.1024 = **9.8 m s⁻²** (9.77 before rounding).
7. The card's average speed is then closer to the speed at the gate.
8. 24 × 0.50 = **12 m**.
9. t = √(2 × 0.80/9.81) = **0.40 s** (0.404 s); the horizontal speed does not matter.
10. Any two of: higher mass or load, worn tyres, worn brakes, wet or icy road.

## Where marks are usually lost

- Writing a distance when a displacement with direction is asked for.
- Not stating a sign convention, then mixing up the signs of g and u.
- Reading the gradient from a short chord instead of a long tangent.
- Counting the area below the axis as positive.
- Using v = u + at for the whole of a problem in which the acceleration changes.
- Plotting h against t when the straight-line graph is h against t².
- Giving thinking distance as proportional to speed squared.
- Using the vertical speed alone as the landing speed.
- Missing units, or giving answers to too many significant figures.

## Official syllabus

OCR, *A Level GCE Physics A H556 Specification*, Version 3.0 (March 2026), first assessment 2017, section 3.1 Motion (3.1.1 to 3.1.3) in Module 3: Forces and motion.
