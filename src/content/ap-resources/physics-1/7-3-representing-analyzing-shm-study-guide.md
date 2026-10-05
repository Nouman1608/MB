---
resourceId: "mb-ap-phys1-7.3-study-guide"
title: "Representing and Analyzing SHM: Study Guide (Physics 1 7.3)"
description: "Describe simple harmonic motion with x = A cos(2πft) and x = A sin(2πft), read position, velocity and acceleration graphs, and show why amplitude does not change the period."
course: "physics-1"
unit: 7
topics: ["7.3"]
resourceType: "study-guide"
prerequisites:
  - "Restoring force, equilibrium position and the condition for SHM (Topic 7.1)"
  - "Period, frequency, T = 1/f and the period of a spring–object system or a pendulum (Topic 7.2)"
  - "Velocity as the slope of a position–time graph (Topic 1.2) and Newton's second law (Topic 2.5)"
prerequisiteResources: ["mb-ap-phys1-7.2-study-guide"]
learningObjectives:
  - "Write and use x = A cos(2πft) or x = A sin(2πft) to find an oscillator's displacement at a given time"
  - "Choose between the cosine and sine forms from how the motion starts"
  - "Locate the positions and times where displacement, velocity and acceleration are zero or at their largest"
  - "Sketch velocity–time and acceleration–time graphs from a position–time graph of SHM"
  - "Explain, with evidence or reasoning, why changing the amplitude leaves the period unchanged"
  - "Find amplitude, period, frequency and k/m from graphs of SHM"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus. Set your calculator to RADIANS for cos(2πft) and sin(2πft). g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-phys1-7.3-revision-notes", "mb-ap-phys1-7.3-practice", "mb-ap-phys1-7.3-checklist"]
next: "mb-ap-phys1-7.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Displacement from equilibrium in SHM is x = A cos(2πft) if the object starts at x = +A, or x = A sin(2πft) if it starts at equilibrium moving in +x."
  - "At the turning points (x = ±A) the velocity is zero and the acceleration is largest. At equilibrium (x = 0) the speed is largest and the acceleration is zero."
  - "Acceleration always points towards equilibrium: a = −(k/m)x for a spring–object system, so the a–t graph is the x–t graph flipped upside down."
  - "Changing the amplitude does not change the period. A bigger amplitude means a bigger restoring force, so the object covers the longer path in the same time."
  - "Velocity is the slope of the x–t graph: zero at the peaks and troughs, steepest where the graph crosses x = 0."
faqs:
  - question: "Do I need calculus to get the velocity and acceleration graphs?"
    answer: "No. This is the algebra-based course. You get the velocity graph from the slope of the position graph, and the acceleration graph from Newton's second law, a = F_net/m, with a restoring force that is proportional to displacement."
  - question: "Why does my calculator give the wrong position?"
    answer: "Almost always because it is in degree mode. The angle 2πft is in radians. One full cycle is 2π radians, not 360 of anything on a calculator set to degrees."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Everything here uses algebra, graphs and Newton's second law. No calculus is needed. Topic 7.1 defined SHM and Topic 7.2 gave its period; this topic shows how to **describe and read** the motion itself.

## Displacement as a function of time

In SHM an object moves back and forth about an **equilibrium position**. We measure its **displacement x from equilibrium**, not from a wall or the floor. The largest displacement is the **amplitude A**. The motion repeats every **period T**, and the frequency is f = 1/T.

The course uses two equations for displacement against time:

**x = A cos(2πft)** or **x = A sin(2πft)**

The quantity 2πft is an angle in **radians**. Each time t increases by one period, 2πft increases by 2π and the motion repeats. Put your calculator in radian mode before you use either equation.

### Cosine or sine?

The two equations describe the same motion. They differ only in where the clock starts.

| How the motion starts at t = 0 | Equation | x at t = 0 |
|---|---|---|
| Released from rest at x = +A | x = A cos(2πft) | +A |
| Passing through equilibrium, moving in +x | x = A sin(2πft) | 0 |

Pick the form that matches the starting state. If an object is released from x = −A instead, you can write x = −A cos(2πft), or choose +x on the side where it starts.

## Where the zeros and extremes are

Take the cosine case (released from x = +A, with +x to the right) and step through one period in quarters:

| Time | x | v_x | a_x |
|---|---|---|---|
| 0 | +A (max) | 0 | most negative |
| T/4 | 0 | most negative (fastest, moving −x) | 0 |
| T/2 | −A (min) | 0 | most positive |
| 3T/4 | 0 | most positive (fastest, moving +x) | 0 |
| T | +A | 0 | most negative |

Two rules sum up the table:

- **At a turning point (x = ±A):** the object stops for an instant, so v_x = 0. The restoring force is largest there, so the size of a_x is largest, pointing back towards equilibrium.
- **At equilibrium (x = 0):** the restoring force is zero, so a_x = 0. The object has been speeded up all the way in, so its speed is largest here.

### Where the velocity graph comes from

Velocity is the **slope of the position–time graph** (Topic 1.2). On an x–t graph of SHM, the slope is zero at every peak and trough. It is steepest where the curve crosses x = 0. Going down through x = 0 the slope is negative; going up it is positive. Sketch those slopes and you get the v–t graph.

### Where the acceleration graph comes from

For a spring–object system the net force is the restoring force, F = −kx. Newton's second law gives:

**a_x = F_net / m = −(k/m)x**

So the acceleration is always proportional to the displacement and **opposite in sign**. The a–t graph is the x–t graph turned upside down and rescaled. The largest acceleration is a_max = kA/m, at x = ±A.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="p1-73-stack-title p1-73-stack-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-73-stack-title">Position, velocity and acceleration against time for one period of SHM</title>
<desc id="p1-73-stack-desc">Three graphs share one time axis marked 0, T/4, T/2, 3T/4 and T. Top: position x is a cosine curve starting at +A, crossing zero at T/4, reaching −A at T/2, crossing zero at 3T/4 and returning to +A at T. Middle: velocity v_x starts at zero, is most negative at T/4, zero at T/2, most positive at 3T/4 and zero at T. Bottom: acceleration a_x starts at its most negative value, is zero at T/4, most positive at T/2, zero at 3T/4 and most negative at T. Dashed vertical lines at each quarter period show that when x is at a peak, v is zero and a is at the opposite peak.</desc>
<rect x="0" y="0" width="560" height="400" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.8" stroke-dasharray="4 4" opacity="0.6">
<path d="M170 25 V365 M270 25 V365 M370 25 V365 M470 25 V365"/>
</g>
<path d="M70 75 H490 M70 195 H490 M70 315 H490" stroke="#1d2b44" stroke-width="1.2"/>
<path d="M70 25 V125 M70 145 V245 M70 265 V365" stroke="#1d2b44" stroke-width="2"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,35.0 80.0,35.5 90.0,37.0 100.0,39.4 110.0,42.6 120.0,46.7 130.0,51.5 140.0,56.8 150.0,62.6 160.0,68.7 170.0,75.0 180.0,81.3 190.0,87.4 200.0,93.2 210.0,98.5 220.0,103.3 230.0,107.4 240.0,110.6 250.0,113.0 260.0,114.5 270.0,115.0 280.0,114.5 290.0,113.0 300.0,110.6 310.0,107.4 320.0,103.3 330.0,98.5 340.0,93.2 350.0,87.4 360.0,81.3 370.0,75.0 380.0,68.7 390.0,62.6 400.0,56.8 410.0,51.5 420.0,46.7 430.0,42.6 440.0,39.4 450.0,37.0 460.0,35.5 470.0,35.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 4" points="70.0,195.0 80.0,201.3 90.0,207.4 100.0,213.2 110.0,218.5 120.0,223.3 130.0,227.4 140.0,230.6 150.0,233.0 160.0,234.5 170.0,235.0 180.0,234.5 190.0,233.0 200.0,230.6 210.0,227.4 220.0,223.3 230.0,218.5 240.0,213.2 250.0,207.4 260.0,201.3 270.0,195.0 280.0,188.7 290.0,182.6 300.0,176.8 310.0,171.5 320.0,166.7 330.0,162.6 340.0,159.4 350.0,157.0 360.0,155.5 370.0,155.0 380.0,155.5 390.0,157.0 400.0,159.4 410.0,162.6 420.0,166.7 430.0,171.5 440.0,176.8 450.0,182.6 460.0,188.7 470.0,195.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="2 4" points="70.0,355.0 80.0,354.5 90.0,353.0 100.0,350.6 110.0,347.4 120.0,343.3 130.0,338.5 140.0,333.2 150.0,327.4 160.0,321.3 170.0,315.0 180.0,308.7 190.0,302.6 200.0,296.8 210.0,291.5 220.0,286.7 230.0,282.6 240.0,279.4 250.0,277.0 260.0,275.5 270.0,275.0 280.0,275.5 290.0,277.0 300.0,279.4 310.0,282.6 320.0,286.7 330.0,291.5 340.0,296.8 350.0,302.6 360.0,308.7 370.0,315.0 380.0,321.3 390.0,327.4 400.0,333.2 410.0,338.5 420.0,343.3 430.0,347.4 440.0,350.6 450.0,353.0 460.0,354.5 470.0,355.0"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="64" y="39">+A</text><text x="64" y="79">0</text><text x="64" y="119">−A</text>
<text x="64" y="159">+v_max</text><text x="64" y="199">0</text><text x="64" y="239">−v_max</text>
<text x="64" y="279">+a_max</text><text x="64" y="319">0</text><text x="64" y="359">−a_max</text>
</g>
<g font-size="13" fill="#1d2b44" font-weight="600">
<text x="496" y="60">x</text><text x="496" y="180">v_x</text><text x="496" y="300">a_x</text>
</g>
<g font-size="12" fill="#1d2b44">
<text x="496" y="80">solid</text><text x="496" y="200">dashed</text><text x="496" y="320">dotted</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="384">0</text><text x="170" y="384">T/4</text><text x="270" y="384">T/2</text><text x="370" y="384">3T/4</text><text x="470" y="384">T</text>
<text x="270" y="398">time, t</text>
</g>
</svg>
<figcaption>Figure 1. One period of SHM for an object released from x = +A (+x to the right). Position (solid), velocity (dashed) and acceleration (dotted) share the time axis. Where x is at a peak, v_x is zero and a_x is at the opposite peak. Where x crosses zero, the speed is largest and a_x is zero.</figcaption>
</figure>

## Amplitude does not change the period

Pull a spring–object system twice as far and let go. It travels twice as far each cycle, yet its period is the same.

At every point on the path, the displacement is twice as large, so the restoring force is twice as large (F = −kx). That doubles the acceleration everywhere. The object speeds up more, reaches twice the speed, and covers twice the distance **in the same time**. The equation from Topic 7.2, T = 2π√(m/k), contains no A at all. The same is true for a pendulum, T = 2π√(ℓ/g), as long as the angle stays small.

On a graph, changing A only stretches the x–t curve vertically. Every slope doubles (so the maximum speed doubles), the a–t curve doubles too, but the times where the curve crosses zero stay put.

## Reading SHM from graphs

You can pull a lot out of graphs of SHM:

- **x–t graph:** A is the height of a peak above the equilibrium line. T is the time from one peak to the **next** peak (not peak to trough, which is T/2). Then f = 1/T.
- **Slope of the x–t graph:** the sign tells you which way the object is moving at that instant.
- **a–x graph:** for SHM it is a straight line through the origin with a **negative** slope. Since a = −(k/m)x, the slope equals −k/m. A straight line through the origin is direct evidence that the restoring force is proportional to displacement.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="p1-73-ax-title p1-73-ax-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-73-ax-title">Acceleration against displacement for a spring–object system</title>
<desc id="p1-73-ax-desc">Acceleration a_x in metres per second squared from −16 to +16 against displacement x in metres from −0.10 to +0.10, for a 0.25 kg object on a 40 N/m spring. A straight line runs from (−0.10 m, +16 m/s²) through the origin to (+0.10 m, −16 m/s²), so the slope is −160 per second squared. Open circles at x = −0.05 m (a = +8 m/s²) and x = +0.05 m (a = −8 m/s²) mark the ends of the motion for amplitude 0.05 m. Filled squares at the ends of the line mark the ends of the motion for amplitude 0.10 m.</desc>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M90 40 V280 M190 40 V280 M390 40 V280 M490 40 V280"/>
<path d="M90 40 H490 M90 100 H490 M90 220 H490 M90 280 H490"/>
</g>
<path d="M90 160 H500 M290 30 V290" stroke="#1d2b44" stroke-width="2" fill="none"/>
<path d="M90 40 L490 280" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="190" cy="100" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="390" cy="220" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="84" y="34" width="12" height="12" fill="#1d2b44"/>
<rect x="484" y="274" width="12" height="12" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="90" y="300">−0.10</text><text x="190" y="300">−0.05</text><text x="390" y="300">+0.05</text><text x="490" y="300">+0.10</text>
<text x="290" y="320" font-size="13">displacement, x (m)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="284" y="44">+16</text><text x="284" y="104">+8</text><text x="284" y="224">−8</text><text x="284" y="284">−16</text>
</g>
<text x="22" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 160)">acceleration, a_x (m/s²)</text>
<text x="330" y="70" font-size="12" fill="#1d2b44">slope = −16 ÷ 0.10 = −160 s⁻² = −k/m</text>
<text x="330" y="88" font-size="12" fill="#1d2b44">circles: ends for A = 0.05 m</text>
<text x="330" y="106" font-size="12" fill="#1d2b44">squares: ends for A = 0.10 m</text>
</svg>
<figcaption>Figure 2. Acceleration against displacement for the system in Worked example 2 (m = 0.25 kg, k = 40 N/m). The line has slope −k/m = −160 s⁻². A larger amplitude uses more of the same line; the slope, and so the period, does not change.</figcaption>
</figure>

## Worked example 1: using x = A cos(2πft)

**Question.** Take **+x upward**, with x measured from the equilibrium position of an object hanging on a spring. The object is pulled up to x = +0.040 m and released from rest at t = 0. Its period is 0.80 s. Find (a) its displacement at t = 0.10 s, 0.20 s and 0.30 s, (b) its direction of motion at t = 0.30 s, and (c) the first time it is at x = −0.020 m.

1. It starts at +A from rest, so use the cosine form. f = 1/T = 1/0.80 s = 1.25 Hz, and x = (0.040 m) cos(2π × 1.25 × t).
2. At t = 0.10 s: angle = 2π × 1.25 × 0.10 = 0.785 rad. x = 0.040 × cos(0.785) = **+0.028 m**.
3. At t = 0.20 s: angle = 1.571 rad (a quarter cycle). x = **0** (at equilibrium).
4. At t = 0.30 s: angle = 2.356 rad. x = **−0.028 m**.
5. (b) Between T/4 = 0.20 s and T/2 = 0.40 s the object goes from equilibrium down to x = −A. So at 0.30 s it is **moving downward** (−x) and slowing down.
6. (c) Set −0.020 = 0.040 cos(2π × 1.25 × t), so cos(angle) = −0.50. The first angle with this cosine is 2π/3 = 2.094 rad. Then t = 2.094 ÷ (2π × 1.25) = **0.27 s**, which is T/3.

**Check.** If your calculator is in degrees, step 2 gives 0.040 m, which is wrong: the object would barely have moved in an eighth of a cycle. Halfway between x = +A and 0 in position is **not** halfway in time; the object moves slowly near the turning point and fast near equilibrium.

## Worked example 2: amplitude, period and the largest acceleration

**Question.** A 0.25 kg glider on a level, frictionless air track is attached to a spring with k = 40 N/m. Take **+x to the right** of equilibrium. (a) Find the period. (b) Find the largest acceleration when the amplitude is 0.050 m, and then 0.10 m. (c) Find the acceleration when the glider is at x = −0.030 m.

1. (a) T = 2π√(m/k) = 2π√(0.25 ÷ 40) = **0.50 s** (0.497 s unrounded).
2. (b) The largest restoring force is at x = ±A: F_max = kA = 40 × 0.050 = 2.0 N. So a_max = F_max/m = 2.0 ÷ 0.25 = **8.0 m/s²**.
3. With A = 0.10 m: F_max = 4.0 N, so a_max = **16 m/s²**. The period is still 0.50 s, because T does not contain A.
4. (c) a_x = −(k/m)x = −(40 ÷ 0.25) × (−0.030) = **+4.8 m/s²**, pointing right, towards equilibrium.

**Interpretation.** Doubling the amplitude doubled the largest acceleration, but the period stayed the same. Figure 2 shows this: both amplitudes sit on one straight line with slope −160 s⁻².

## Worked example 3: reading a position–time graph

**Question.** A motion sensor tracks a pendulum bob's horizontal displacement, with **+x to the right**. The graph starts at x = 0 with a positive slope, reaches +0.060 m, and first returns to x = 0 with a positive slope at t = 1.8 s. (a) Write an equation for x. (b) At which times in the first cycle is the bob fastest, and which way is it moving? (c) When is its acceleration largest and positive? (d) Find x at t = 0.30 s.

1. (a) A = 0.060 m. One full cycle (zero going up to zero going up) takes T = 1.8 s, so f = 1/1.8 = 0.56 Hz. It starts at equilibrium moving +x, so **x = (0.060 m) sin(2πt/1.8 s)**.
2. (b) Fastest where x = 0: at **t = 0 and 1.8 s** (moving right, positive slope) and **t = 0.90 s** (moving left, negative slope).
3. (c) a_x is most positive where x is most negative: at x = −A, which is three-quarters of a cycle, **t = 1.35 s**.
4. (d) x = 0.060 × sin(2π × 0.30 ÷ 1.8) = 0.060 × sin(1.047) = 0.060 × 0.866 = **+0.052 m**.

**Check.** Using T = 2π√(ℓ/g) from Topic 7.2, ℓ = gT²/(4π²) = 9.8 × 1.8² ÷ 39.5 ≈ 0.80 m. Then 0.060 m out of 0.80 m is an angle of about 4°, small enough for the SHM model to apply.

## Common misconceptions

- **"The acceleration is largest where the speed is largest."** The reverse. At equilibrium the speed is largest and a = 0. At the turning points v = 0 and |a| is largest.
- **"At the turning point a = 0, because the object has stopped."** It has stopped for an instant, but the restoring force is at its largest, so it starts moving back straight away.
- **"Acceleration and displacement point the same way."** For SHM they always point opposite ways: a = −(k/m)x.
- **"A bigger amplitude means a longer period."** Not for SHM. The bigger force makes the object cover the longer path in the same time (Worked example 2).
- **"Halfway out in position means halfway through in time."** No. In Worked example 1 the object reaches x = −A/2 at T/3, not at 3T/8.
- **Reading T from peak to trough.** That is T/2. Measure from one peak to the next, or from one zero crossing to the next one in the same direction.
- **Degrees mode.** The angle 2πft is in radians.

## Where this leads

Topic 7.4 (Energy of Simple Harmonic Oscillators) explains the same motion with energy: why the speed is largest at equilibrium, and how to calculate that maximum speed. Read the [Topic 7.4 study guide](/advanced-course-resources/physics-1/7-4-energy-simple-harmonic-oscillators-study-guide/) next. First try the [practice questions](/advanced-course-resources/physics-1/7-3-representing-analyzing-shm-practice/), then use the [revision notes](/advanced-course-resources/physics-1/7-3-representing-analyzing-shm-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/7-3-representing-analyzing-shm-checklist/). To review period and frequency, go back to [Topic 7.2](/advanced-course-resources/physics-1/7-2-frequency-period-shm-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
