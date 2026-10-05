---
resourceId: "mb-ap-phys1-5.1-study-guide"
title: "Rotational Kinematics: Study Guide (Physics 1 5.1)"
description: "Describe rotation with angular displacement, angular velocity and angular acceleration in radians, use the constant-angular-acceleration equations and read angle and angular velocity graphs."
course: "physics-1"
unit: 5
topics: ["5.1"]
resourceType: "study-guide"
prerequisites:
  - "Displacement, velocity and acceleration in one dimension, with signs (Topics 1.1 and 1.2)"
  - "The constant-acceleration equations and the slopes and areas of motion graphs (Topic 1.3)"
  - "Period and frequency of circular motion (Topic 2.9)"
prerequisiteResources: ["mb-ap-phys1-4.4-study-guide"]
learningObjectives:
  - "Explain when a spinning body must be treated as a rigid system and when it can still be modelled as a single object"
  - "Measure angular displacement in radians, convert from revolutions, degrees and rpm, and give it a sign using a stated clockwise or counterclockwise convention"
  - "Calculate average angular velocity and average angular acceleration, and decide whether a rotation is speeding up or slowing down from their signs"
  - "Use the three constant-angular-acceleration equations, and predict how a stopping angle or time changes when the starting angular velocity or the angular acceleration changes"
  - "Find angular velocity, angular acceleration and angular displacement from the slopes and areas of angle–time and angular velocity–time graphs"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. Angles in radians: 1 rev = 2π rad. Answers to 2 or 3 significant figures; keep unrounded values until the last step"
related: ["mb-ap-phys1-5.1-revision-notes", "mb-ap-phys1-5.1-practice", "mb-ap-phys1-5.1-checklist"]
next: "mb-ap-phys1-5.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "A spinning wheel is a rigid system: it keeps its shape, but its points move in different directions, so it cannot be treated as one point."
  - "Angular displacement Δθ is measured in radians. One revolution is 2π rad. Pick clockwise or counterclockwise as positive and say which."
  - "Average angular velocity is ω_avg = Δθ / Δt (rad/s). Average angular acceleration is α_avg = Δω / Δt (rad/s²)."
  - "For constant α, the three Unit 1 equations work with θ, ω and α in place of x, v_x and a_x."
  - "Same signs of ω and α: the rotation speeds up. Opposite signs: it slows down."
faqs:
  - question: "Why must I use radians instead of degrees or revolutions?"
    answer: "The angular equations work in any consistent angle unit, but the links to linear motion in Topic 5.2 (s = rθ, v = rω) only work in radians. Converting to radians at the start avoids errors later."
  - question: "Do I need the right-hand rule for the direction of angular velocity?"
    answer: "No. In this course a rotation direction is described only as clockwise or counterclockwise about a stated axis. You choose one of them as positive."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Unit 5 builds rotational versions of the ideas you used in Units 1 and 2. If you are comfortable with displacement, velocity and acceleration along a line, you already know most of the mathematics here. No calculus is needed.

## When a point is not enough: rigid systems

Until now we have used the **object model**: a car or a block is treated as a single point. That works when every part of the thing moves the same way.

A spinning wheel breaks this model. While the wheel turns, a point at the top moves one way and a point at the bottom moves the opposite way. The centre of the wheel may not move at all. No single point describes the motion.

So we use a new model, the **rigid system**:

- it keeps its shape (the distances between its parts do not change);
- different points on it move in **different directions** as it rotates;
- it rotates about an **axis**, a line that the whole body turns around.

A rigid system **cannot** be modelled as an object while you care about its rotation.

The object model still has a place. If the rotation does not affect the question, you can describe the motion of the system's centre of mass and treat it as a point. A cricket ball spins as it flies, but if you only want its range you can model it as one object at its centre of mass. The spin matters only if the question is about the spin itself (or about effects that come from it, such as the curving path of a football kicked with spin).

## Angular position and angular displacement

To describe rotation, choose:

1. **An axis of rotation**, for example the axle of a wheel.
2. **A reference line**, from the axis out to a starting direction, where θ = 0.
3. **A positive direction**: clockwise or counterclockwise. Either is fine, but write it down, for example "**counterclockwise positive**".

The **angular position** θ of a point on the body is the angle between the reference line and the line from the axis to that point. The **angular displacement** is the change in angular position:

**Δθ = θ − θ₀**

Δθ has a sign. With counterclockwise positive, a wheel that turns a quarter-turn clockwise has Δθ = −π/2 rad.

### Measure angles in radians

The radian is the natural unit for rotation. One full revolution is **2π rad**.

| Revolutions | Degrees | Radians |
|---|---|---|
| 1 rev | 360° | 2π rad ≈ 6.28 rad |
| ½ rev | 180° | π rad |
| ¼ rev | 90° | π/2 rad ≈ 1.57 rad |
| 1/(2π) rev | about 57.3° | 1 rad |

Rotation rates are often quoted in **revolutions per minute (rpm)**. To convert to rad/s, multiply by 2π (rad per rev) and divide by 60 (s per min). For example, 45 rpm = 45 × 2π ÷ 60 ≈ 4.71 rad/s.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="p1-rk-ang-title p1-rk-ang-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-rk-ang-title">Angular position on a rotating disc</title>
<desc id="p1-rk-ang-desc">A disc rotates about an axis through its centre, perpendicular to the page. A dashed horizontal reference line runs from the centre to the right and marks theta equals zero. A solid line from the centre to a marked point P makes an angle theta of 60 degrees, or pi over 3 radians, measured counterclockwise from the reference line. A curved arrow outside the disc points counterclockwise and is labelled positive direction, counterclockwise. A second curved arrow points clockwise and is labelled negative.</desc>
<defs><marker id="p1-rk-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<circle cx="180" cy="150" r="110" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="180" cy="150" r="5" fill="#1d2b44"/>
<path d="M180 150 H300" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<path d="M180 150 L235 54.7" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="235" cy="54.7" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<path d="M230 150 A50 50 0 0 0 205 106.7" fill="none" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#p1-rk-arr)"/>
<text x="238" y="128" font-size="13" fill="#1d2b44">θ = 60° = π/3 rad</text>
<text x="246" y="50" font-size="13" fill="#1d2b44">P</text>
<text x="304" y="154" font-size="12" fill="#1d2b44">reference line, θ = 0</text>
<text x="150" y="176" font-size="12" fill="#1d2b44">axis</text>
<path d="M330 80 A150 150 0 0 0 250 20" fill="none" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-rk-arr)"/>
<text x="340" y="70" font-size="13" fill="#1d2b44" font-weight="600">+ counterclockwise</text>
<path d="M250 280 A150 150 0 0 0 330 220" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4" marker-start="url(#p1-rk-arr)"/>
<text x="340" y="244" font-size="13" fill="#1d2b44">− clockwise (dashed)</text>
</svg>
<figcaption>Figure 1. Angular position θ of point P, measured from a stated reference line, with counterclockwise chosen as positive. The axis passes through the centre, perpendicular to the page. A clockwise rotation would give a negative Δθ.</figcaption>
</figure>

## Angular velocity and angular acceleration

These are defined exactly like their linear partners.

**Average angular velocity: ω_avg = Δθ / Δt** (unit rad/s)

**Average angular acceleration: α_avg = Δω / Δt = (ω − ω₀) / Δt** (unit rad/s²)

ω (omega) and α (alpha) carry the same sign convention as θ. With counterclockwise positive, a wheel turning clockwise has negative ω.

**Every point on a rigid body has the same θ change, the same ω and the same α at a given instant.** A point near the axle and a point on the rim both turn through one revolution when the wheel does. (How fast each point *moves along its path* does depend on its distance from the axis; that is Topic 5.2.)

### Speeding up or slowing down?

The sign rule from Topic 1.2 carries straight over:

| ω | α | What happens to the rate of spin |
|---|---|---|
| + | + | speeding up (turning counterclockwise, faster) |
| − | − | speeding up (turning clockwise, faster) |
| + | − | slowing down |
| − | + | slowing down |
| any | 0 | constant angular velocity |

(The table assumes counterclockwise is positive.)

A negative α does **not** by itself mean the rotation is slowing.

### Instantaneous values

An instantaneous angular velocity is the average angular velocity over a very short interval. Suppose a turntable starts from rest and its angle is θ = (0.75 rad/s²)t², so θ = 3.0 rad at t = 2.0 s. Average angular velocities starting at t = 2.0 s:

| Interval | Δθ (rad) | Δt (s) | ω_avg (rad/s) |
|---|---|---|---|
| 2.0 s → 3.0 s | 3.75 | 1.0 | 3.75 |
| 2.0 s → 2.5 s | 1.6875 | 0.5 | 3.375 |
| 2.0 s → 2.1 s | 0.3075 | 0.1 | 3.075 |
| 2.0 s → 2.01 s | 0.030075 | 0.01 | 3.0075 |

The values settle on **3.0 rad/s**, the instantaneous angular velocity at 2.0 s. On an angle–time graph it is the slope of the tangent line at that instant.

## The analogy with linear motion

Rotation about one fixed axis follows the same mathematics as motion along one line. Swap the symbols and every Unit 1 tool still works.

| Linear (one dimension) | Rotational (one axis) |
|---|---|
| position x (m) | angular position θ (rad) |
| displacement Δx | angular displacement Δθ |
| velocity v_x (m/s) | angular velocity ω (rad/s) |
| acceleration a_x (m/s²) | angular acceleration α (rad/s²) |
| v_x = v_x0 + a_x t | ω = ω₀ + αt |
| x = x₀ + v_x0 t + ½a_x t² | θ = θ₀ + ω₀t + ½αt² |
| v_x² = v_x0² + 2a_x(x − x₀) | ω² = ω₀² + 2α(θ − θ₀) |

The three equations on the right are valid **only when α is constant**. As in Unit 1, choose the equation that leaves out the quantity you neither know nor need. For constant α you can also use Δθ = ½(ω₀ + ω)t, the area under a straight-line ω–t graph.

### Functional dependence: predicting changes

Exam questions often ask how one quantity changes when another does. For a rotation that slows to rest with constant α, the third equation gives 0 = ω₀² + 2αΔθ, so the size of the stopping angle is

**|Δθ| = ω₀² / (2|α|)**

- Double the starting angular velocity (same α): the stopping angle becomes **2² = 4 times** larger.
- Double the size of α (same ω₀): the stopping angle **halves**.

The stopping time is t = ω₀ / |α|, so doubling ω₀ only **doubles** the time. Write the symbolic expression first, then read off the factor.

## Graphs of rotation

The graph rules of Topic 1.3 transfer directly:

- **Slope of an angle–time graph** = angular velocity.
- **Slope of an angular velocity–time graph** = angular acceleration.
- **Area under an ω–t graph** = angular displacement (area below the axis is negative).
- **Area under an α–t graph** = change in angular velocity.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="p1-rk-wt-title p1-rk-wt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-rk-wt-title">Angular velocity–time graph for a washing-machine drum</title>
<desc id="p1-rk-wt-desc">Angular velocity omega in radians per second, from 0 to 12, against time t in seconds, from 0 to 13, with counterclockwise positive. The line rises straight from 0 at t = 0 to 12 rad/s at t = 4 s, stays flat at 12 rad/s until t = 10 s, then falls straight to 0 at t = 13 s. Dashed vertical lines at 4 s and 10 s split the area under the line into three parts. The first triangle is shaded and labelled 24 rad, slope plus 3 rad per second squared. The rectangle is hatched and labelled 72 rad, slope 0. The last triangle is shaded and labelled 18 rad, slope minus 4 rad per second squared. Total angular displacement is 114 rad.</desc>
<defs><pattern id="p1-rk-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V8" stroke="#1d2b44" stroke-width="1"/></pattern></defs>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<polygon points="70,290 210,50 210,290" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1"/>
<polygon points="210,50 420,50 420,290 210,290" fill="url(#p1-rk-hatch)" stroke="#1d2b44" stroke-width="1"/>
<polygon points="420,50 525,290 420,290" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1"/>
<path d="M210 290 V50 M420 290 V50" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<path d="M70 290 H535 M70 290 V35" stroke="#1d2b44" stroke-width="2" fill="none"/>
<polyline points="70,290 210,50 420,50 525,290" fill="none" stroke="#1d2b44" stroke-width="3"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="140" y="308">2</text><text x="210" y="308">4</text><text x="280" y="308">6</text><text x="350" y="308">8</text><text x="420" y="308">10</text><text x="490" y="308">12</text><text x="525" y="322">13</text>
<text x="300" y="332" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="234">3</text><text x="62" y="174">6</text><text x="62" y="114">9</text><text x="62" y="54">12</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">angular velocity, ω (rad/s)</text>
<text x="150" y="270" font-size="12" fill="#1d2b44">24 rad</text>
<text x="88" y="110" font-size="12" fill="#1d2b44">slope +3 rad/s²</text>
<rect x="282" y="150" width="70" height="22" fill="#ffffff"/>
<text x="290" y="166" font-size="13" fill="#1d2b44" font-weight="600">72 rad</text>
<text x="285" y="42" font-size="12" fill="#1d2b44">slope 0</text>
<text x="428" y="270" font-size="12" fill="#1d2b44">18 rad</text>
<text x="440" y="110" font-size="12" fill="#1d2b44">slope −4 rad/s²</text>
</svg>
<figcaption>Figure 2. A washing-machine drum (counterclockwise positive) speeds up for 4 s, spins steadily for 6 s, then slows to rest in 3 s. Slopes give α: +3 rad/s², 0 and −4 rad/s². Areas give Δθ: 24 rad + 72 rad + 18 rad = 114 rad, about 18 revolutions.</figcaption>
</figure>

Reading Figure 2: from 10 s to 13 s, ω is positive and α is negative, so the drum is slowing down. The total angle turned is 114 rad ÷ 2π ≈ 18.1 rev.

## Worked example 1: a potter's wheel speeding up

**Question.** Take **counterclockwise as positive** (seen from above). A potter's wheel starts from rest and speeds up steadily, reaching 90 rpm counterclockwise after 6.0 s. Find (a) its final angular velocity in rad/s, (b) its angular acceleration and (c) how many revolutions it makes in the 6.0 s.

1. Convert: ω = 90 rev/min × 2π rad/rev ÷ 60 s/min = 3π rad/s ≈ **+9.42 rad/s**.
2. Angular acceleration: α = (ω − ω₀) / t = (9.42 − 0) ÷ 6.0 = π/2 ≈ **+1.57 rad/s²**.
3. Angular displacement (constant α): Δθ = ½(ω₀ + ω)t = ½ × (0 + 9.42) × 6.0 ≈ 28.3 rad.
4. Revolutions: 28.3 rad ÷ 2π rad/rev = **4.5 rev**.

**Check.** Use a different equation: ω² = 2αΔθ gives 2 × 1.57 × 28.3 ≈ 88.8, and 9.42² ≈ 88.8. A second check: the average rate is 45 rpm, and 45 rev/min for 0.10 min is 4.5 rev.

## Worked example 2: a grinding wheel slowing down clockwise

**Question.** Take **counterclockwise as positive**. A bench grinding wheel spins clockwise at 42 rad/s. It is switched off and slows at a constant rate, turning through 63 rad before it stops. Find (a) its angular acceleration, (b) the time it takes to stop and (c) the number of revolutions.

1. Signed values: ω₀ = **−42 rad/s** (clockwise), ω = 0, Δθ = **−63 rad** (the wheel still turns clockwise while it slows).
2. Time is not given or needed for (a), so use ω² = ω₀² + 2αΔθ:
   0 = (−42)² + 2α(−63), so α = 1764 ÷ 126 = **+14 rad/s²**.
3. Time: t = (ω − ω₀) / α = (0 − (−42)) ÷ 14 = **3.0 s**.
4. Revolutions: 63 ÷ 2π ≈ **10 rev**.

**Interpretation.** α is positive while the wheel slows down, because ω is negative. Opposite signs mean slowing down. "Positive α" here means "acting counterclockwise", against the spin.

**Check.** Δθ = ½(ω₀ + ω)t = ½ × (−42 + 0) × 3.0 = −63 rad. ✓

## Investigating rotation in the lab

A typical question asks how you would test whether a wheel's angular acceleration is constant. One sound plan:

1. Fix a small marker to the rim of the wheel and film it from the front, with a timer or known frame rate in view.
2. Choose counterclockwise as positive and a reference line (for example, horizontal to the right).
3. From the video, record the marker's angular position every fixed time interval, counting whole turns so θ keeps increasing (do not reset at 2π).
4. For each interval find ω_avg = Δθ / Δt and plot it against the **midpoint time** of the interval.
5. A straight line means constant α; its slope is α and its intercept is ω₀.

Repeat the run and average, and use short intervals so the averages are close to instantaneous values. A photogate counting spokes as they pass is another good way to measure ω.

## Common misconceptions

- **"Points on the rim spin faster, so they have a bigger ω."** Every point on a rigid body has the same ω. Rim points have greater *linear* speed (Topic 5.2).
- **"Negative α means slowing down."** Compare signs (Worked example 2).
- **Mixing angle units.** Quoting rpm in an equation with rad/s², or degrees with rad/s, gives nonsense. Convert to radians first.
- **Resetting the angle after each turn.** Over many turns Δθ keeps growing: 3 rev is 6π rad, not 0.
- **Using the constant-α equations when α changes.** Split the motion into stages, as in Figure 2.
- **"A spinning object can always be treated as a point."** Only when its rotation does not matter to the question.
- **Doubling ω₀ doubles the stopping angle.** It quadruples it, because |Δθ| = ω₀² / (2|α|).

## Where this leads

Topic 5.2, [Connecting Linear and Rotational Motion](/advanced-course-resources/physics-1/5-2-connecting-linear-rotational-motion-study-guide/), links θ, ω and α to the distance, speed and tangential acceleration of each point on the body. Later topics ask *what causes* angular acceleration: torque (Topic 5.3) and rotational inertia (Topic 5.4). Try the [practice questions](/advanced-course-resources/physics-1/5-1-rotational-kinematics-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/5-1-rotational-kinematics-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/5-1-rotational-kinematics-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
