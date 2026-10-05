---
resourceId: "mb-ap-physcm-5.1-study-guide"
title: "Rotational Kinematics: Study Guide (Physics C: Mechanics 5.1)"
description: "Calculus-based rotational kinematics about a fixed axis: angular displacement, ω = dθ/dt and α = dω/dt, integrating α(t) with initial conditions, the constant-α equations, and θ–t and ω–t graphs."
course: "physics-c-mechanics"
unit: 5
topics: ["5.1"]
resourceType: "study-guide"
prerequisites:
  - "Velocity and acceleration as derivatives, and integration with initial conditions (Topic 1.2)"
  - "Differentiating and integrating polynomials and exponentials"
prerequisiteResources: ["mb-ap-physcm-4.4-study-guide"]
learningObjectives:
  - "Explain when a rotating body must be treated as a rigid system and when it can be treated as a single object"
  - "Measure angular displacement in radians about a stated axis, with clockwise or counterclockwise as the positive sense"
  - "Define angular velocity and angular acceleration as derivatives, ω = dθ/dt and α = dω/dt, and find them from θ(t)"
  - "Find ω(t) and θ(t) from a non-constant α(t) by integration, using initial conditions"
  - "Use the constant-α equations, predict how results scale when one quantity changes, and read slopes and areas on rotation graphs"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Exact calculus by hand; a calculator for arithmetic and exponentials. Angles in radians unless stated; 1 rev = 2π rad"
related: ["mb-ap-physcm-5.1-revision-notes", "mb-ap-physcm-5.1-practice", "mb-ap-physcm-5.1-checklist"]
next: "mb-ap-physcm-5.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Rotation about one fixed axis is one-dimensional motion in the variable θ: choose clockwise or counterclockwise as positive and say which."
  - "Angular velocity ω = dθ/dt (rad/s); angular acceleration α = dω/dt = d²θ/dt² (rad/s²)."
  - "Going back needs integrals and initial conditions: ω(t) = ω₀ + ∫α dt and θ(t) = θ₀ + ∫ω dt."
  - "The constant-α equations are a special case. Never use them when α changes with time."
  - "Same signs of ω and α: spinning faster. Opposite signs: spinning slower."
faqs:
  - question: "Do I need to give the direction of the angular velocity vector?"
    answer: "No. You must handle signs correctly, but directions are only described as clockwise or counterclockwise about the stated axis. Vector directions along the axis are not assessed in this course."
  - question: "Can I work in degrees or revolutions?"
    answer: "You can convert at the end, but do the calculus in radians. Later, s = rθ and v = rω (Topic 5.2) only work with θ in radians."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 5.1 with this title. This guide is the **calculus-based** one: it defines ω and α as derivatives, integrates angular accelerations that change with time, and derives the constant-α equations rather than just using them. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/5-1-rotational-kinematics-study-guide/); do not mix the two when you revise.

## Rigid systems and the choice of model

Up to now you have treated most moving things as **objects**: points with no size. That works when every part of the thing moves the same way. A spinning wheel breaks this model. The rim on one side moves up while the rim on the other side moves down. Different points move in **different directions** at the same instant, so no single velocity describes the wheel.

A **rigid system** keeps its shape, but its points can move in different directions as it rotates. You cannot model it as a single object. Instead, you describe how the whole system turns about an **axis of rotation**.

The choice of model depends on the question. A thrown frisbee spins, but if you only want to know where it lands and its spin does not affect the path, you can track its centre of mass and treat it as an object. If the question is about how fast its edge moves, you need the rigid-system description. Ask: **does the rotation matter for what I am asked?** If not, the object model is fine.

In this course every rotation is about **one fixed axis**. That makes rotation a one-dimensional problem, with the angle θ playing the part that x played in Unit 1.

## Angular position and angular displacement

Pick a fixed reference line through the axis. The **angular position** θ of a point is the angle between that line and the line from the axis to the point. The **angular displacement** over an interval is

**Δθ = θ − θ₀**

measured in **radians**. One full turn is 2π rad, so 1 rev = 2π rad = 360°, and 1 rad ≈ 57.3°.

You must also choose a **positive sense**. Usually counterclockwise is positive and clockwise is negative, but either choice is allowed. What matters is that you **say which, and say from where you are looking** (for example "counterclockwise as seen from above is positive"). A wheel that turns 3.0 rad clockwise then has Δθ = −3.0 rad.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="pcm51-disc-title pcm51-disc-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm51-disc-title">Angular position of points on a disc rotating about a fixed axis</title>
<desc id="pcm51-disc-desc">A disc seen face-on with its fixed axis at the centre. A dashed reference line runs from the axis to the right, labelled theta equals zero. A solid radius line runs from the axis up and to the right at an angle theta above the reference line. Point Q lies on this line close to the axis and point P lies on it at the rim. A small arc between the reference line and the radius line is labelled theta. A large curved arrow outside the disc points counterclockwise and is labelled counterclockwise is positive. A note says P and Q turn through the same angle.</desc>
<rect x="0" y="0" width="560" height="320" fill="#ffffff"/>
<circle cx="180" cy="170" r="110" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="180" cy="170" r="5" fill="#1d2b44"/>
<path d="M180 170 H320" stroke="#1d2b44" stroke-width="1.6" stroke-dasharray="7 5"/>
<path d="M180 170 L250.7 85.7" stroke="#1d2b44" stroke-width="2.2"/>
<path d="M220 170 A40 40 0 0 0 205.7 139.4" fill="none" stroke="#1d2b44" stroke-width="1.6"/>
<text x="226" y="152" font-size="14" fill="#1d2b44" font-style="italic">θ</text>
<circle cx="250.7" cy="85.7" r="5.5" fill="#1d2b44"/>
<circle cx="215.4" cy="127.9" r="5.5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="258" y="80" font-size="13" fill="#1d2b44" font-weight="600">P (rim)</text>
<text x="188" y="118" font-size="13" fill="#1d2b44" font-weight="600">Q</text>
<text x="326" y="174" font-size="12" fill="#1d2b44">reference line, θ = 0</text>
<path d="M156.6 37.0 A135 135 0 0 0 53.1 123.8" fill="none" stroke="#1d2b44" stroke-width="2"/>
<polygon points="49.7,133.2 58.5,123.6 49.1,120.2" fill="#1d2b44"/>
<text x="12" y="17" font-size="12" fill="#1d2b44">counterclockwise is positive</text>
<text x="12" y="32" font-size="12" fill="#1d2b44">(seen from the front)</text>
<text x="186" y="200" font-size="12" fill="#1d2b44">fixed axis</text>
<text x="318" y="236" font-size="12" fill="#1d2b44">P and Q share one radius line,</text>
<text x="318" y="252" font-size="12" fill="#1d2b44">so they have the same θ, ω and α,</text>
<text x="318" y="268" font-size="12" fill="#1d2b44">but P travels further.</text>
</svg>
<figcaption>Figure 1. Angular position θ is measured from a fixed reference line, here with counterclockwise positive. Every point of a rigid system turns through the same angle, which is why one variable θ can describe the whole rotation.</figcaption>
</figure>

## Angular velocity and angular acceleration as derivatives

The definitions copy Unit 1 exactly, with θ in place of x.

**Average angular velocity: ω_avg = Δθ / Δt**

**Instantaneous angular velocity: ω = lim (Δt → 0) Δθ/Δt = dθ/dt**

**Average angular acceleration: α_avg = Δω / Δt**

**Instantaneous angular acceleration: α = dω/dt = d²θ/dt²**

Units: ω in rad/s, α in rad/s². The radian is a ratio of two lengths, so it often "disappears" from units; keep it in your working anyway so you know an angle is involved. Speeds in revolutions per minute (rpm) must be converted before you use calculus: multiply by 2π rad/rev and divide by 60 s/min. For example, 60 rpm = 2π rad/s ≈ 6.28 rad/s.

Every point of a rigid system turns through the same angle in the same time. So **all points share the same θ, ω and α** (Figure 1). Points further out move further, but that is a linear quantity and belongs to Topic 5.2.

**Spinning faster or slower.** Compare signs, just as in Unit 1: **ω and α with the same sign → spinning faster; opposite signs → spinning slower.** A negative α on its own does not mean slowing down. It means the angular acceleration is clockwise (if counterclockwise is positive).

## The analogy with linear motion

| Linear (one dimension) | Rotational (one fixed axis) |
|---|---|
| position x (m) | angular position θ (rad) |
| v_x = dx/dt (m/s) | ω = dθ/dt (rad/s) |
| a_x = dv_x/dt (m/s²) | α = dω/dt (rad/s²) |
| v_x(t) = v_x0 + ∫₀ᵗ a_x dt | ω(t) = ω₀ + ∫₀ᵗ α dt |
| x(t) = x₀ + ∫₀ᵗ v_x dt | θ(t) = θ₀ + ∫₀ᵗ ω dt |

Because the mathematics is the same, every tool from Topic 1.2 carries over: tangent slopes, signed areas, sign charts and integration with initial conditions.

**Graphs.** On a θ–t graph, the tangent slope is ω. On an ω–t graph, the tangent slope is α and the **signed area** under the curve is Δθ. On an α–t graph, the signed area is Δω. Area below the time axis counts as negative (clockwise, if counterclockwise is positive). The **total angle turned** adds the sizes of all areas, just as distance travelled did in Unit 1.

## Deriving the constant-α equations

If α is constant, integrate from t = 0:

1. ω(t) = ω₀ + ∫₀ᵗ α dt = **ω₀ + αt**
2. θ(t) = θ₀ + ∫₀ᵗ (ω₀ + αt) dt = **θ₀ + ω₀t + ½αt²**
3. Chain rule: α = dω/dt = (dω/dθ)(dθ/dt) = ω(dω/dθ), so α dθ = ω dω. Integrate from (θ₀, ω₀) to (θ, ω): α(θ − θ₀) = ½(ω² − ω₀²), so **ω² = ω₀² + 2α(θ − θ₀)**.

Each step takes α outside an integral. That is allowed **only because α is constant**. If α depends on time, go back to the integrals.

**Predicting changes.** The constant-α equations show how quantities depend on each other. Starting from rest:

- At fixed α, the time to reach ω is t = ω/α, so doubling the target ω **doubles** the time.
- The angle turned is Δθ = ω²/(2α), so doubling the target ω **quadruples** the angle, while doubling α (same target ω) **halves** it.

Worked example 3 uses these.

## Worked example 1: a camera mount that pans and returns

**Question.** Take **counterclockwise (seen from above) as positive**, with θ = 0 at the start. A motorised camera mount turns about a vertical axis with θ(t) = (0.60 rad/s²)t² − (0.10 rad/s³)t³ for 0 ≤ t ≤ 6.0 s. Find ω(t) and α(t), when the mount is momentarily at rest, when it spins faster or slower, its greatest counterclockwise angular velocity, and its angular displacement and total angle turned.

1. Differentiate: ω = dθ/dt = 1.2t − 0.30t² = **0.30t(4.0 − t)** rad/s.
2. Differentiate again: α = dω/dt = **1.2 − 0.60t** rad/s². It is zero at t = 2.0 s.
3. Momentarily at rest when ω = 0: **t = 0 and t = 4.0 s**. At 4.0 s, θ = 9.6 − 6.4 = **3.2 rad** (about 183°), the furthest counterclockwise position.
4. Greatest counterclockwise ω: where α = 0, at t = 2.0 s: ω = 2.4 − 1.2 = **1.2 rad/s**.
5. Sign chart:

| Interval (s) | ω | α | Rotation |
|---|---|---|---|
| 0 to 2.0 | + | + | counterclockwise, spinning faster |
| 2.0 to 4.0 | + | − | counterclockwise, spinning slower |
| 4.0 to 6.0 | − | − | clockwise, spinning faster |

6. At 6.0 s: θ = 21.6 − 21.6 = 0 and ω = 7.2 − 10.8 = −3.6 rad/s. Angular displacement over 0 to 6.0 s is **zero**: the mount is back where it started, now turning clockwise at 3.6 rad/s.
7. Total angle turned: 3.2 rad out plus 3.2 rad back = **6.4 rad**.

**Check.** In Figure 2 the area under the ω–t curve from 0 to 4.0 s is +3.2 rad and from 4.0 to 6.0 s is −3.2 rad. Their sum is zero, matching step 6.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="pcm51-wt-title pcm51-wt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm51-wt-title">Angular velocity–time graph for the camera mount, ω = 1.2t − 0.30t²</title>
<desc id="pcm51-wt-desc">Angular velocity omega in radians per second from −4 to 2 against time t in seconds from 0 to 6. A parabola starts at zero, rises to a maximum of 1.2 rad/s at t = 2 s, returns to zero at t = 4 s and falls to −3.6 rad/s at t = 6 s. The region between the curve and the time axis from 0 to 4 s is shaded and labelled +3.2 rad, counterclockwise. The region from 4 to 6 s is below the axis, hatched, and labelled −3.2 rad, clockwise. A flat solid tangent at the maximum shows alpha equals zero there.</desc>
<defs><pattern id="pcm51-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V6" stroke="#1d2b44" stroke-width="1"/></pattern></defs>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M140 60 V300 M210 60 V300 M280 60 V300 M350 60 V300 M420 60 V300 M490 60 V300"/>
<path d="M70 60 H500 M70 100 H500 M70 180 H500 M70 220 H500 M70 260 H500 M70 300 H500"/>
</g>
<polygon fill="#fdf6e3" stroke="none" points="70.0,140.0 78.8,134.2 87.5,128.8 96.2,123.7 105.0,119.0 113.8,114.7 122.5,110.8 131.2,107.2 140.0,104.0 148.8,101.2 157.5,98.8 166.2,96.7 175.0,95.0 183.8,93.7 192.5,92.8 201.2,92.2 210.0,92.0 218.8,92.2 227.5,92.8 236.2,93.7 245.0,95.0 253.8,96.7 262.5,98.8 271.2,101.2 280.0,104.0 288.8,107.2 297.5,110.8 306.2,114.7 315.0,119.0 323.8,123.7 332.5,128.8 341.2,134.2 350.0,140.0"/>
<polygon fill="url(#pcm51-hatch)" stroke="none" points="350.0,140.0 358.8,146.2 367.5,152.8 376.2,159.7 385.0,167.0 393.8,174.7 402.5,182.8 411.2,191.2 420.0,200.0 428.8,209.2 437.5,218.7 446.2,228.7 455.0,239.0 463.8,249.7 472.5,260.8 481.2,272.2 490.0,284.0 490,140"/>
<path d="M70 50 V305 M70 140 H515" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="140" y="156">1</text><text x="210" y="156">2</text><text x="280" y="156">3</text><text x="350" y="156">4</text><text x="420" y="132">5</text><text x="490" y="132">6</text>
<text x="290" y="330" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="64">2</text><text x="62" y="104">1</text><text x="62" y="144">0</text><text x="62" y="184">−1</text><text x="62" y="224">−2</text><text x="62" y="264">−3</text><text x="62" y="304">−4</text>
</g>
<text x="22" y="180" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 180)">angular velocity, ω (rad/s)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,140.0 78.8,134.2 87.5,128.8 96.2,123.7 105.0,119.0 113.8,114.7 122.5,110.8 131.2,107.2 140.0,104.0 148.8,101.2 157.5,98.8 166.2,96.7 175.0,95.0 183.8,93.7 192.5,92.8 201.2,92.2 210.0,92.0 218.8,92.2 227.5,92.8 236.2,93.7 245.0,95.0 253.8,96.7 262.5,98.8 271.2,101.2 280.0,104.0 288.8,107.2 297.5,110.8 306.2,114.7 315.0,119.0 323.8,123.7 332.5,128.8 341.2,134.2 350.0,140.0 358.8,146.2 367.5,152.8 376.2,159.7 385.0,167.0 393.8,174.7 402.5,182.8 411.2,191.2 420.0,200.0 428.8,209.2 437.5,218.7 446.2,228.7 455.0,239.0 463.8,249.7 472.5,260.8 481.2,272.2 490.0,284.0"/>
<path d="M170 92 H250" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="210" cy="92" r="4" fill="#1d2b44"/>
<text x="176" y="80" font-size="12" fill="#1d2b44">max 1.2 rad/s at 2 s (α = 0)</text>
<text x="160" y="128" font-size="12" fill="#1d2b44" font-weight="600">area +3.2 rad (counterclockwise)</text>
<text x="300" y="240" font-size="12" fill="#1d2b44" font-weight="600">area −3.2 rad</text>
<text x="300" y="256" font-size="12" fill="#1d2b44" font-weight="600">(hatched, clockwise)</text>
<circle cx="490" cy="284" r="4" fill="#1d2b44"/>
<text x="436" y="300" font-size="12" fill="#1d2b44">(6 s, −3.6 rad/s)</text>
</svg>
<figcaption>Figure 2. ω–t graph for Worked example 1, counterclockwise positive. Signed areas give angular displacement: +3.2 − 3.2 = 0 over 6.0 s. Adding sizes gives the total angle turned, 6.4 rad. The slope is α: positive before 2.0 s, zero at the peak, negative after.</figcaption>
</figure>

## Worked example 2: an angular acceleration that dies away

**Question.** Take **counterclockwise as positive**. A test flywheel starts from rest at θ₀ = 0. Its drive gives α(t) = (8.0 rad/s²)e^(−t/2.5 s). Find ω(t), θ(t), the values at t = 5.0 s and the angular velocity the flywheel approaches.

1. ω = 0 + ∫₀ᵗ 8.0e^(−t/2.5) dt = 8.0 × 2.5 [1 − e^(−t/2.5)] = **20(1 − e^(−t/2.5)) rad/s**.
2. θ = 0 + ∫₀ᵗ 20(1 − e^(−t/2.5)) dt = **20t − 50(1 − e^(−t/2.5)) rad**.
3. At t = 5.0 s, e^(−2) ≈ 0.135: ω = 20 × 0.865 ≈ **17 rad/s** and θ = 100 − 50 × 0.865 ≈ **57 rad** (about 9.0 revolutions).
4. As t → ∞, e^(−t/2.5) → 0, so ω → **20 rad/s**. The flywheel never quite reaches it; after 5.0 s it has about 86% of that value.

**Check the units.** 8.0 rad/s² × 2.5 s = 20 rad/s. The integral of a rad/s² quantity over seconds gives rad/s, as it must.

**Why the constant-α equations fail here.** Using the starting value α = 8.0 rad/s² for the whole 5.0 s gives ω = 40 rad/s and θ = 100 rad, both far too large. The angular acceleration shrinks as time goes on.

## Worked example 3: constant α and scaling

**Question.** Take **counterclockwise as positive**. A lab spin-coater platter starts from rest and reaches 300 rad/s in 1.5 s with constant angular acceleration. (a) Find α and the angle turned. (b) A new recipe needs 600 rad/s with the same α. Predict the new time and angle without repeating the full calculation.

1. **(a)** α = Δω/Δt = 300 ÷ 1.5 = **200 rad/s²**.
2. Δθ = ½(ω₀ + ω)t = ½(0 + 300)(1.5) = **225 rad**, about 36 revolutions.
3. Check with the third equation: ω² = 2αΔθ gives 300² = 90 000 and 2 × 200 × 225 = 90 000. ✓
4. **(b)** From rest at fixed α, t = ω/α ∝ ω: doubling ω doubles the time to **3.0 s**.
5. Δθ = ω²/(2α) ∝ ω²: doubling ω quadruples the angle to **900 rad**.

**Interpretation.** Twice the final speed costs twice the time but four times the turning, because the platter spends the extra time at higher angular velocities. On the ω–t graph, the triangle is twice as tall and twice as wide, so its area is four times larger.

## Common misconceptions

- **Using constant-α equations for α(t).** Integrate instead (Worked example 2).
- **Forgetting ω₀ or θ₀.** ∫α dt gives only the change in ω.
- **Working in rpm or degrees inside the calculus.** Convert to rad/s and rad first.
- **"Negative α means slowing down."** Compare the signs of ω and α. In Worked example 1, from 4.0 to 6.0 s both are negative and the mount spins faster.
- **"ω = 0 means α = 0."** At t = 4.0 s in Worked example 1, ω = 0 but α = −1.2 rad/s².
- **"Points further out have a larger ω."** Every point of a rigid system has the same ω and α. Points further out have larger linear speeds (Topic 5.2).
- **Treating ∫ω dt as total angle turned.** It is angular displacement. Split where ω = 0 and add sizes.
- **Not stating the positive sense.** "α = −2.0 rad/s²" means nothing until you say which way is positive.

## Where this leads

Topic 5.2 connects these angular quantities to the linear motion of points on the rotating system, through s = rθ, v = rω and a_T = rα. Later in Unit 5, torque explains *why* α is what it is, and Newton's second law in rotational form links the two. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/5-1-rotational-kinematics-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/5-1-rotational-kinematics-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/5-1-rotational-kinematics-checklist/). The next topic is [Connecting Linear and Rotational Motion](/advanced-course-resources/physics-c-mechanics/5-2-connecting-linear-rotational-motion-study-guide/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
