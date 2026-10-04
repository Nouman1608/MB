---
resourceId: "mb-ap-physcm-1.2-study-guide"
title: "Displacement, Velocity, and Acceleration: Study Guide (Physics C: Mechanics 1.2)"
description: "Calculus-based kinematics in one dimension: velocity and acceleration as derivatives, position and velocity by integration, non-constant acceleration, and the constant-acceleration equations derived."
course: "physics-c-mechanics"
unit: 1
topics: ["1.2"]
resourceType: "study-guide"
prerequisites:
  - "Choosing an axis and using + and − signs for direction (Topic 1.1)"
  - "Differentiating and integrating polynomials (calculus taken before or alongside the course)"
learningObjectives:
  - "Describe displacement, average velocity and average acceleration from initial and final states"
  - "Define instantaneous velocity and acceleration as limits of averages, v_x = dx/dt and a_x = dv_x/dt"
  - "Find v_x(t) and x(t) from a non-constant a_x(t) by integration, using initial conditions"
  - "Derive the constant-acceleration equations by integration and state when they apply"
  - "Interpret tangent slopes and signed areas on position–time and velocity–time graphs"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Exact calculus by hand; a calculator only for arithmetic. Where gravity appears we use g = 9.8 m/s², the value on the course equation table"
related: ["mb-ap-physcm-1.2-revision-notes", "mb-ap-physcm-1.2-practice", "mb-ap-physcm-1.2-checklist"]
next: "mb-ap-physcm-1.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Instantaneous velocity is the limit of Δx/Δt as Δt → 0: v_x = dx/dt. Acceleration is a_x = dv_x/dt."
  - "Going backwards needs integrals and initial conditions: v_x(t) = v_x0 + ∫a_x dt and x(t) = x₀ + ∫v_x dt."
  - "The three constant-acceleration equations are a special case. Never use them when a_x depends on time."
  - "Same signs of v_x and a_x: speeding up. Opposite signs: slowing down."
  - "Displacement is ∫v_x dt; distance travelled is ∫|v_x| dt."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 1.2?"
    answer: "They are separate courses. Physics 1 is algebra-based: it finds instantaneous values by shrinking intervals and drawing tangents, and does not calculate with changing acceleration. Physics C: Mechanics is calculus-based: it uses derivatives and integrals and expects you to handle acceleration that changes with time."
  - question: "Can I always use v_x² = v_x0² + 2a_x(x − x₀)?"
    answer: "Only when a_x is constant. The derivation below integrates a constant a_x; if a_x changes, the result is not valid."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 1.2 with the same title. This guide is the **calculus-based** one. It defines velocity and acceleration as derivatives, uses integrals to go back from acceleration to position, and handles acceleration that changes with time. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/1-2-displacement-velocity-acceleration-study-guide/); do not mix the two when you revise.

## Object, axis and displacement

We treat the moving thing as a **point object**: its size, shape and internal structure are ignored. Then we fix a **coordinate system**: an origin, a positive direction and a unit. Write it down every time, for example **"+x to the right, origin at the start"**. Every sign below depends on it.

**Position** x(t) is a function of time. **Displacement** over an interval is the change in position:

**Δx = x − x₀**

In two or three dimensions the same idea uses the position vector: Δr = r − r₀. This guide stays in one dimension, where a sign gives the direction completely.

**Distance travelled** is the total path length. It is never negative and equals |Δx| only if the object never turns around.

## Average values

Averages use only the initial and final states over an interval Δt:

**Average velocity: v_avg = Δx / Δt**

**Average acceleration: a_avg = Δv_x / Δt**

An object is accelerating whenever its velocity changes, in size, in direction, or both.

## From averages to derivatives

Shrink the interval. As Δt → 0, the average approaches the value **at an instant**:

**v_x = lim (Δt → 0) Δx/Δt = dx/dt**

**a_x = lim (Δt → 0) Δv_x/Δt = dv_x/dt = d²x/dt²**

Here is the limit in action for the motion in Worked example 1, x(t) = 2t³ − 9t² + 12t (x in m, t in s), at t = 0.50 s, where x = 4.0 m:

| Δt (s) | Δx = x(0.50 + Δt) − x(0.50) (m) | Δx/Δt (m/s) |
|---|---|---|
| 0.1 | 0.392 | 3.92 |
| 0.01 | 0.044402 | 4.4402 |
| 0.001 | 0.004494002 | 4.494002 |
| → 0 | | **4.5** (= dx/dt at 0.50 s) |

The derivative dx/dt = 6t² − 18t + 12 gives exactly 4.5 m/s at t = 0.50 s. On a graph, the secant slope becomes the **tangent slope**.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="pcm-xt-title pcm-xt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm-xt-title">Position–time graph for x = 2t³ − 9t² + 12t</title>
<desc id="pcm-xt-desc">Position x in metres from 0 to 10 against time t in seconds from 0 to 3. The curve rises from the origin to a local maximum of 5 m at t = 1 s, falls to a local minimum of 4 m at t = 2 s, then rises to 9 m at t = 3 s. A dashed tangent line touches the curve at t = 0.5 s, x = 4 m, with slope 4.5 m/s. Short flat tangent lines at t = 1 s and t = 2 s show zero velocity there.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M210 290 V50 M350 290 V50 M490 290 V50"/>
<path d="M70 242 H500 M70 194 H500 M70 146 H500 M70 98 H500 M70 50 H500"/>
</g>
<path d="M70 290 H515 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="210" y="308">1</text><text x="350" y="308">2</text><text x="490" y="308">3</text>
<text x="280" y="330" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="246">2</text><text x="62" y="198">4</text><text x="62" y="150">6</text><text x="62" y="102">8</text><text x="62" y="54">10</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">position, x (m)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,290.0 77.0,276.1 84.0,263.3 91.0,251.5 98.0,240.7 105.0,230.8 112.0,221.7 119.0,213.6 126.0,206.3 133.0,199.8 140.0,194.0 147.0,189.0 154.0,184.6 161.0,180.9 168.0,177.8 175.0,175.2 182.0,173.3 189.0,171.8 196.0,170.8 203.0,170.2 210.0,170.0 217.0,170.2 224.0,170.7 231.0,171.5 238.0,172.5 245.0,173.8 252.0,175.2 259.0,176.8 266.0,178.4 273.0,180.2 280.0,182.0 287.0,183.8 294.0,185.6 301.0,187.2 308.0,188.8 315.0,190.2 322.0,191.5 329.0,192.5 336.0,193.3 343.0,193.8 350.0,194.0 357.0,193.8 364.0,193.2 371.0,192.2 378.0,190.7 385.0,188.8 392.0,186.2 399.0,183.1 406.0,179.4 413.0,175.0 420.0,170.0 427.0,164.2 434.0,157.7 441.0,150.4 448.0,142.3 455.0,133.2 462.0,123.3 469.0,112.5 476.0,100.7 483.0,87.9 490.0,74.0"/>
<path d="M70 248 L252 107.6" stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="7 5"/>
<path d="M170 170 H250 M310 194 H390" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="140" cy="194" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="210" cy="170" r="4" fill="#1d2b44"/>
<circle cx="350" cy="194" r="4" fill="#1d2b44"/>
<text x="150" y="214" font-size="12" fill="#1d2b44">P (0.5 s, 4.0 m)</text>
<text x="262" y="96" font-size="12" fill="#1d2b44">dashed tangent at P: slope 4.5 m/s</text>
<text x="190" y="160" font-size="12" fill="#1d2b44">v = 0 (1 s, 5 m)</text>
<text x="320" y="214" font-size="12" fill="#1d2b44">v = 0 (2 s, 4 m)</text>
<text x="420" y="64" font-size="12" fill="#1d2b44">(3 s, 9 m)</text>
</svg>
<figcaption>Figure 1. Position–time graph, +x to the right. The dashed tangent at P has slope dx/dt = 4.5 m/s. The flat solid tangents at t = 1 s and t = 2 s show where v_x = 0 and the object turns around.</figcaption>
</figure>

## From derivatives back to position: integration

If you know a_x(t), you can rebuild the motion. Integrating undoes differentiating, but you need **initial conditions** to fix the constants:

**v_x(t) = v_x0 + ∫₀ᵗ a_x dt**

**x(t) = x₀ + ∫₀ᵗ v_x dt**

Graphically, the integral is the **signed area** between the curve and the time axis. Area below the axis counts as negative. So:

- **Displacement** from t₁ to t₂ = ∫ v_x dt (signed area under the v_x–t graph).
- **Distance travelled** = ∫ |v_x| dt (all areas counted as positive).
- **Change in velocity** = ∫ a_x dt (signed area under the a_x–t graph).

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="pcm-vt-title pcm-vt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm-vt-title">Velocity–time graph for v = 6t² − 18t + 12 with signed areas</title>
<desc id="pcm-vt-desc">Velocity v_x in metres per second from −2 to 12 against time t in seconds from 0 to 3. A parabola starts at 12 m/s, falls to zero at t = 1 s, reaches a minimum of −1.5 m/s at t = 1.5 s, returns to zero at t = 2 s and rises to 12 m/s at t = 3 s. The region between the curve and the axis from 0 to 1 s is shaded and labelled +5 m. The region from 1 to 2 s is below the axis, hatched, and labelled −1 m. The region from 2 to 3 s is shaded and labelled +5 m.</desc>
<defs><pattern id="pcm-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V6" stroke="#1d2b44" stroke-width="1"/></pattern></defs>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<polygon fill="#fdf6e3" stroke="none" points="70.0,58.0 77.0,72.2 84.0,85.8 91.0,99.0 98.0,111.8 105.0,124.0 112.0,135.8 119.0,147.0 126.0,157.8 133.0,168.2 140.0,178.0 147.0,187.4 154.0,196.2 161.0,204.6 168.0,212.6 175.0,220.0 182.0,227.0 189.0,233.4 196.0,239.4 203.0,245.0 210.0,250.0 70,250"/>
<polygon fill="url(#pcm-hatch)" stroke="none" points="210.0,250.0 217.0,254.6 224.0,258.6 231.0,262.2 238.0,265.4 245.0,268.0 252.0,270.2 259.0,271.8 266.0,273.0 273.0,273.8 280.0,274.0 287.0,273.8 294.0,273.0 301.0,271.8 308.0,270.2 315.0,268.0 322.0,265.4 329.0,262.2 336.0,258.6 343.0,254.6 350.0,250.0"/>
<polygon fill="#fdf6e3" stroke="none" points="350.0,250.0 357.0,245.0 364.0,239.4 371.0,233.4 378.0,227.0 385.0,220.0 392.0,212.6 399.0,204.6 406.0,196.2 413.0,187.4 420.0,178.0 427.0,168.2 434.0,157.8 441.0,147.0 448.0,135.8 455.0,124.0 462.0,111.8 469.0,99.0 476.0,85.8 483.0,72.2 490.0,58.0 490,250"/>
<path d="M70 300 V40 M70 250 H515" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="210" y="300">1</text><text x="350" y="300">2</text><text x="490" y="300">3</text>
<text x="420" y="320" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="286">−2</text><text x="62" y="254">0</text><text x="62" y="222">2</text><text x="62" y="190">4</text><text x="62" y="158">6</text><text x="62" y="126">8</text><text x="62" y="94">10</text><text x="62" y="62">12</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">velocity, v_x (m/s)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,58.0 77.0,72.2 84.0,85.8 91.0,99.0 98.0,111.8 105.0,124.0 112.0,135.8 119.0,147.0 126.0,157.8 133.0,168.2 140.0,178.0 147.0,187.4 154.0,196.2 161.0,204.6 168.0,212.6 175.0,220.0 182.0,227.0 189.0,233.4 196.0,239.4 203.0,245.0 210.0,250.0 217.0,254.6 224.0,258.6 231.0,262.2 238.0,265.4 245.0,268.0 252.0,270.2 259.0,271.8 266.0,273.0 273.0,273.8 280.0,274.0 287.0,273.8 294.0,273.0 301.0,271.8 308.0,270.2 315.0,268.0 322.0,265.4 329.0,262.2 336.0,258.6 343.0,254.6 350.0,250.0 357.0,245.0 364.0,239.4 371.0,233.4 378.0,227.0 385.0,220.0 392.0,212.6 399.0,204.6 406.0,196.2 413.0,187.4 420.0,178.0 427.0,168.2 434.0,157.8 441.0,147.0 448.0,135.8 455.0,124.0 462.0,111.8 469.0,99.0 476.0,85.8 483.0,72.2 490.0,58.0"/>
<text x="90" y="235" font-size="12" fill="#1d2b44" font-weight="600">area +5 m</text>
<text x="280" y="316" font-size="12" fill="#1d2b44" font-weight="600" text-anchor="middle">area −1 m (hatched)</text>
<text x="420" y="235" font-size="12" fill="#1d2b44" font-weight="600">area +5 m</text>
<text x="230" y="120" font-size="12" fill="#1d2b44">minimum −1.5 m/s at t = 1.5 s</text>
<text x="230" y="138" font-size="12" fill="#1d2b44">(slope a_x = 0 there)</text>
</svg>
<figcaption>Figure 2. Velocity–time graph for the same motion. Signed areas give displacement: +5 − 1 + 5 = +9 m from 0 to 3 s. Adding the sizes gives the distance travelled: 5 + 1 + 5 = 11 m.</figcaption>
</figure>

## Deriving the constant-acceleration equations

When a_x is constant, integrate twice from t = 0:

1. v_x(t) = v_x0 + ∫₀ᵗ a_x dt = **v_x0 + a_x t**
2. x(t) = x₀ + ∫₀ᵗ (v_x0 + a_x t) dt = **x₀ + v_x0 t + ½a_x t²**
3. For the third equation, use the chain rule: a_x = dv_x/dt = (dv_x/dx)(dx/dt) = v_x (dv_x/dx). So a_x dx = v_x dv_x. Integrate both sides from (x₀, v_x0) to (x, v_x): a_x(x − x₀) = ½(v_x² − v_x0²), which gives **v_x² = v_x0² + 2a_x(x − x₀)**.

Each step pulled a_x outside an integral. That is only allowed because a_x is constant. So these three equations are a **limiting case** of the general method, valid only for constant acceleration (for example, free fall near Earth's surface, with g = 9.8 m/s² and air resistance ignored).

## Speeding up or slowing down

Compare signs of v_x and a_x: **same sign → speeding up; opposite signs → slowing down**. The sign of a_x on its own tells you only the direction of the acceleration.

## Worked example 1: from x(t) to v(t) and a(t)

**Question.** Take **+x to the right**. An object moves with x(t) = (2.0 m/s³)t³ − (9.0 m/s²)t² + (12 m/s)t for 0 ≤ t ≤ 3.0 s. Find v_x(t) and a_x(t), when it is at rest, when it speeds up or slows down, and its displacement and distance travelled.

1. Differentiate: v_x = dx/dt = 6.0t² − 18t + 12 = **6.0(t − 1)(t − 2)** m/s.
2. Differentiate again: a_x = dv_x/dt = **12t − 18** m/s². It is zero at t = 1.5 s.
3. At rest when v_x = 0: **t = 1.0 s and t = 2.0 s**. Positions: x(1) = 5.0 m, x(2) = 4.0 m.
4. Sign chart:

| Interval (s) | v_x | a_x | Motion |
|---|---|---|---|
| 0 to 1.0 | + | − | slowing down |
| 1.0 to 1.5 | − | − | speeding up (moving left) |
| 1.5 to 2.0 | − | + | slowing down |
| 2.0 to 3.0 | + | + | speeding up |

5. Displacement: Δx = x(3) − x(0) = 9.0 m − 0 = **+9.0 m**.
6. Distance: legs |5 − 0| + |4 − 5| + |9 − 4| = 5 + 1 + 5 = **11 m**.

**Check.** The integrals of v_x over [0, 1], [1, 2] and [2, 3] are +5, −1 and +5 m, matching Figure 2. Average velocity is 9.0 m ÷ 3.0 s = 3.0 m/s, while average speed is 11 m ÷ 3.0 s ≈ 3.7 m/s.

## Worked example 2: non-constant acceleration by integration

**Question.** Take **+x forward along a test track**, origin at the start. A sled starts from rest at x₀ = 0. Its acceleration is a_x(t) = (4.0 m/s²) − (1.0 m/s³)t for 0 ≤ t ≤ 6.0 s. Find v_x(t), x(t), the velocity and position at 6.0 s, and the greatest velocity.

1. Velocity: v_x = 0 + ∫₀ᵗ (4.0 − 1.0t) dt = **4.0t − 0.50t²** (m/s, t in s).
2. Position: x = 0 + ∫₀ᵗ (4.0t − 0.50t²) dt = **2.0t² − t³/6** (m).
3. At t = 6.0 s: v_x = 24 − 18 = **6.0 m/s**; x = 72 − 36 = **36 m**.
4. Greatest velocity: dv_x/dt = a_x = 0 at t = 4.0 s, so v_max = 16 − 8.0 = **8.0 m/s**. After 4.0 s, a_x < 0 while v_x > 0, so the sled slows down but keeps moving forward.

**Check the units.** The constant 1.0 m/s³ times t (s) gives m/s², as an acceleration must.

**Why the constant-acceleration equations fail here.** Using x = ½a_x t² with the starting value a_x = 4.0 m/s² gives 72 m, twice the true 36 m. Acceleration falls during the run, so that equation does not apply.

## Common misconceptions

- **Using constant-acceleration equations for a(t).** Integrate instead (Worked example 2).
- **Forgetting initial conditions.** ∫a_x dt gives a change in velocity. Add v_x0 to get v_x.
- **"Negative a_x means slowing down."** Compare the signs of v_x and a_x.
- **Treating ∫v_x dt as distance.** It is displacement. For distance, split the integral where v_x = 0 and add the sizes.
- **"v = 0 means a = 0."** At t = 1.0 s in Worked example 1, v_x = 0 but a_x = −6.0 m/s².
- **Reading a secant slope as instantaneous velocity.** Take the limit, or the derivative.
- **Dropping units on coefficients.** In x = 2.0t³, the 2.0 has unit m/s³.

## Where this leads

Topic 1.3 (Representing Motion) builds on these graph and equation links, and Topics 1.4 and 1.5 extend them to reference frames and to two and three dimensions. Later, when acceleration depends on velocity, such as a_x = −kv_x for a drag force, you will separate variables and integrate; that belongs to Topic 2.9, Resistive Forces. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/1-2-displacement-velocity-acceleration-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/1-2-displacement-velocity-acceleration-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/1-2-displacement-velocity-acceleration-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
