---
resourceId: "mb-ap-physcm-2.9-study-guide"
title: "Resistive Forces: Study Guide (Physics C: Mechanics 2.9)"
description: "Velocity-dependent resistive forces F = −kv: setting up the differential equation, separating variables, exponential velocity and position, and terminal velocity."
course: "physics-c-mechanics"
unit: 2
topics: ["2.9"]
resourceType: "study-guide"
prerequisites:
  - "Newton's second law and free-body diagrams (Topics 2.2 and 2.5)"
  - "Velocity and acceleration as derivatives, and integration with initial conditions (Topic 1.2)"
  - "Integrating 1/u and working with e and natural logarithms"
prerequisiteResources: ["mb-ap-physcm-2.8-study-guide"]
learningObjectives:
  - "Describe a resistive force as one that depends on velocity and points against it, using F_r = −kv"
  - "Write Newton's second law for an object with a resistive force as a differential equation for velocity"
  - "Solve that equation by separating variables and integrating between matching limits"
  - "Find acceleration and position from v(t) using derivatives, integrals and initial conditions"
  - "Explain terminal velocity as the zero-net-force condition and find it from the forces"
  - "Sketch exponential velocity–time graphs and read the time constant and the asymptote from them"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Use g = 9.8 m/s², the value on the course equation table. You need the e^x and ln keys. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-2.9-revision-notes", "mb-ap-physcm-2.9-practice", "mb-ap-physcm-2.9-checklist"]
next: "mb-ap-physcm-2.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "A resistive force depends on velocity and points opposite to it. The course model is F_r = −kv, with k in kg/s."
  - "Newton's second law then gives a differential equation, such as m dv/dt = −kv. Separate variables and integrate between matching limits."
  - "Solutions are exponential with time constant τ = m/k. Velocity approaches an asymptote but never quite reaches it."
  - "Terminal velocity is reached when the resistive force balances the constant force, so the net force is zero: v_T = F/k, or mg/k for falling."
  - "The constant-acceleration equations never apply here, because the acceleration changes as the velocity changes."
faqs:
  - question: "Is there a Physics 1 version of this topic?"
    answer: "No. Resistive forces that depend on velocity are only in the calculus-based Physics C: Mechanics course, because solving them needs a differential equation."
  - question: "Is real air resistance proportional to v?"
    answer: "Only roughly, and mainly for slow, small objects or objects moving through thick liquids. Fast objects in air feel a drag closer to v². The course works with F_r = −kv, and every question on this page uses that model."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**A topic only in the calculus-based course.** Physics 1 has no Topic 2.9 on resistive forces. Here the force depends on velocity, so Newton's second law becomes a **differential equation**, and you need calculus to solve it. This topic follows [Topic 2.8, Spring Forces](/advanced-course-resources/physics-c-mechanics/2-8-spring-forces-study-guide/), where the force depended on position instead.

## What makes a force resistive

A **resistive force** depends on the object's velocity and points **opposite to the velocity**. Air resistance on a falling seed, water drag on a coasting boat and the braking force from a magnet on a moving metal plate are all examples.

The model used in this course is a force proportional to velocity:

**F_r = −kv**

- k is a positive constant. It depends on the object's size and shape and on the fluid (or magnet) it moves through.
- The minus sign makes the force point against v. If v is in +x, F_r is in −x. If v reverses, F_r reverses too.
- Units: k = F/v, so k is in N/(m/s) = N·s/m = **kg/s**.

Because F_r changes as v changes, the acceleration changes too. So the constant-acceleration equations from Topic 1.2 **never** apply to motion with a resistive force.

## Newton's second law becomes a differential equation

Write Newton's second law as m dv/dt = ΣF. With a resistive force, v appears on both sides, so you get an equation for the **function** v(t), not a number.

**Case A: only the resistive force acts along the motion.** An object coasts on a level surface with no friction and no engine. Take +x along the initial velocity v₀:

m dv/dt = −kv

**Case B: a constant force acts as well.** An object falls from rest with drag. Take **+y downward**, so gravity is positive and drag is negative while the object moves down:

m dv/dt = mg − kv

Write the axis down first. Every sign in the equation depends on it.

## Separation of variables

The method has four steps.

1. Put every v on one side and every t on the other.
2. Integrate both sides **between matching limits**: the lower limits are the initial state (t = 0, v = v₀) and the upper limits are a general state (t, v).
3. Use ∫ du/u = ln|u|.
4. Undo the logarithm with the exponential function.

**Case A.** dv/v = −(k/m) dt. Integrate from v₀ to v and from 0 to t:

ln(v/v₀) = −(k/m)t, so **v(t) = v₀ e^(−t/τ)**, where **τ = m/k**.

τ is the **time constant**. It has units kg ÷ (kg/s) = s. After one time constant the velocity has fallen to e^(−1) ≈ 0.37 of v₀.

**Case B.** dv/(mg − kv) = dt/m. Let u = mg − kv, so du = −k dv. Integrating from 0 to v and from 0 to t gives −(1/k) ln[(mg − kv)/mg] = t/m. Rearranging:

**v(t) = (mg/k)(1 − e^(−t/τ))**, again with τ = m/k.

## Acceleration and position from v(t)

Once you have v(t), use the calculus from Topic 1.2. Differentiate for acceleration. Integrate, with the initial position, for position.

| | Case A: coasting, v₀ along +x | Case B: falling from rest, +y down |
|---|---|---|
| v(t) | v₀ e^(−t/τ) | v_T(1 − e^(−t/τ)), with v_T = mg/k |
| a(t) = dv/dt | −(v₀/τ) e^(−t/τ) | g e^(−t/τ) |
| position | x = x₀ + v₀τ(1 − e^(−t/τ)) | y = y₀ + v_T t − v_Tτ(1 − e^(−t/τ)) |
| as t → ∞ | v → 0, a → 0, x → x₀ + v₀τ | v → v_T, a → 0, y keeps increasing at rate v_T |

Each **asymptote** is set by the initial conditions and the forces. In Case A the object never quite stops, but its total displacement is finite: v₀τ = mv₀/k. In Case B the velocity heads towards v_T, whatever value it starts from.

Check a(t) in Case B at t = 0: a = g. At the instant of release v = 0, so there is no drag yet, and gravity alone accelerates the object.

## Terminal velocity

When a constant force (such as gravity) and a resistive force act in **opposite directions**, the object speeds up until the resistive force grows to match the constant force. Then:

ΣF = 0, so mg − kv_T = 0, giving **v_T = mg/k**.

This is the **terminal velocity**: the greatest speed an object reaches under these forces when it starts from rest (or from any speed below v_T). The acceleration is then zero, so the velocity stops changing.

If an object starts **faster** than v_T (thrown down hard, say), the resistive force is bigger than mg. The net force points up, against the motion, and the object **slows down** towards v_T. The same equation, solved with v(0) = v₀, gives:

v(t) = v_T + (v₀ − v_T) e^(−t/τ)

Either way, the asymptote is v_T. The time constant also has a graph meaning: the tangent to the v–t curve at t = 0 meets the asymptote at t = τ. For falling from rest, τ = v_T/g.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="pcm29-vt-title pcm29-vt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm29-vt-title">Velocity–time graphs approaching terminal velocity</title>
<desc id="pcm29-vt-desc">Velocity in metres per second from 0 to 10 against time in seconds from 0 to 2.5, for an object with terminal velocity 4.9 m/s and time constant 0.50 s, positive downward. A solid curve starts at 0 and rises steeply, then levels off towards a horizontal dashed line at 4.9 m/s. A dotted straight tangent from the origin with slope 9.8 m/s² meets the dashed line at t = 0.50 s, where the solid curve is at 3.1 m/s. A second curve, drawn with long dashes and square markers, starts at 9.8 m/s and falls, levelling off towards the same dashed line from above.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M154 290 V50 M238 290 V50 M322 290 V50 M406 290 V50 M490 290 V50"/>
<path d="M70 242 H500 M70 194 H500 M70 146 H500 M70 98 H500 M70 50 H500"/>
</g>
<path d="M70 290 H515 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="154" y="308">0.5</text><text x="238" y="308">1.0</text><text x="322" y="308">1.5</text><text x="406" y="308">2.0</text><text x="490" y="308">2.5</text>
<text x="280" y="330" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="246">2</text><text x="62" y="198">4</text><text x="62" y="150">6</text><text x="62" y="102">8</text><text x="62" y="54">10</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">velocity, v (m/s), +y down</text>
<path d="M70 172.4 H505" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="8 5"/>
<path d="M70 290 L154 172.4" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 3"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,290.0 78.4,278.8 86.8,268.7 95.2,259.5 103.6,251.2 112.0,243.7 120.4,236.9 128.8,230.8 137.2,225.2 145.6,220.2 154.0,215.7 162.4,211.5 170.8,207.8 179.2,204.4 187.6,201.4 196.0,198.6 204.4,196.1 212.8,193.9 221.2,191.8 229.6,190.0 238.0,188.3 246.4,186.8 254.8,185.4 263.2,184.2 271.6,183.1 280.0,182.1 288.4,181.1 296.8,180.3 305.2,179.6 313.6,178.9 322.0,178.3 330.4,177.7 338.8,177.2 347.2,176.7 355.6,176.3 364.0,176.0 372.4,175.6 380.8,175.3 389.2,175.0 397.6,174.8 406.0,174.6 414.4,174.3 422.8,174.2 431.2,174.0 439.6,173.8 448.0,173.7 456.4,173.6 464.8,173.5 473.2,173.4 481.6,173.3 490.0,173.2"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="12 6" points="70.0,54.8 78.4,66.0 86.8,76.1 95.2,85.3 103.6,93.6 112.0,101.1 120.4,107.9 128.8,114.0 137.2,119.6 145.6,124.6 154.0,129.1 162.4,133.3 170.8,137.0 179.2,140.4 187.6,143.4 196.0,146.2 204.4,148.7 212.8,150.9 221.2,153.0 229.6,154.8 238.0,156.5 246.4,158.0 254.8,159.4 263.2,160.6 271.6,161.7 280.0,162.7 288.4,163.7 296.8,164.5 305.2,165.2 313.6,165.9 322.0,166.5 330.4,167.1 338.8,167.6 347.2,168.1 355.6,168.5 364.0,168.8 372.4,169.2 380.8,169.5 389.2,169.8 397.6,170.0 406.0,170.2 414.4,170.5 422.8,170.6 431.2,170.8 439.6,171.0 448.0,171.1 456.4,171.2 464.8,171.3 473.2,171.4 481.6,171.5 490.0,171.6"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="1.5">
<rect x="66" y="50.8" width="8" height="8"/><rect x="150" y="125.1" width="8" height="8"/><rect x="234" y="152.5" width="8" height="8"/><rect x="318" y="162.5" width="8" height="8"/><rect x="402" y="166.2" width="8" height="8"/><rect x="486" y="167.6" width="8" height="8"/>
</g>
<circle cx="154" cy="215.7" r="4.5" fill="#1d2b44"/>
<circle cx="154" cy="172.4" r="4.5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="360" y="194" font-size="12" fill="#1d2b44">dashed line: v_T = 4.9 m/s</text>
<text x="164" y="232" font-size="12" fill="#1d2b44">(0.50 s, 3.1 m/s) = 63% of v_T</text>
<text x="100" y="166" font-size="12" fill="#1d2b44">t = τ</text>
<text x="84" y="270" font-size="12" fill="#1d2b44" transform="rotate(-54 84 270)">slope g</text>
<text x="200" y="90" font-size="12" fill="#1d2b44">squares: thrown down at 9.8 m/s</text>
<text x="300" y="260" font-size="12" fill="#1d2b44">solid: released from rest</text>
</svg>
<figcaption>Figure 1. Velocity against time (+y down) for an object with v_T = 4.9 m/s and τ = 0.50 s. Released from rest (solid), it starts with slope g and rises towards v_T. Thrown down at 9.8 m/s (long dashes, squares), it slows towards the same v_T. The dotted initial tangent meets the asymptote at t = τ.</figcaption>
</figure>

## Worked example 1: a coasting underwater drone

**Question.** Take **+x along the drone's initial velocity**, origin where the motor stops. A 6.0 kg underwater drone moves horizontally at 1.2 m/s when its motor cuts out. Model the water drag as F_r = −kv with k = 3.0 kg/s, and ignore all other horizontal forces. Find (a) v(t), (b) the initial acceleration, (c) the time for the speed to halve, (d) the velocity and position at t = 3.0 s and (e) the greatest distance the drone can coast.

1. **Equation.** m dv/dt = −kv. Separate: dv/v = −(k/m) dt.
2. **(a)** Integrate from (0, 1.2 m/s) to (t, v): ln(v/1.2) = −t/τ with τ = m/k = 6.0/3.0 = **2.0 s**. So **v = 1.2 e^(−t/2.0)** (m/s, t in s).
3. **(b)** a = dv/dt = −(1.2/2.0) e^(−t/2.0). At t = 0: **a = −0.60 m/s²**. Check with forces: −kv₀/m = −3.0 × 1.2 ÷ 6.0 = −0.60 m/s².
4. **(c)** v = v₀/2 when e^(−t/τ) = ½, so t = τ ln 2 = 2.0 × 0.693 = **1.4 s**.
5. **(d)** At 3.0 s: v = 1.2 e^(−1.5) = **0.27 m/s**. Position: x = v₀τ(1 − e^(−t/τ)) = 1.2 × 2.0 × (1 − e^(−1.5)) = **1.9 m**. Acceleration then is −0.13 m/s², smaller because the drone is slower.
6. **(e)** As t → ∞, x → v₀τ = mv₀/k = **2.4 m**.

**Interpretation.** The drone never quite stops, but it never passes 2.4 m. A constant-acceleration answer, using a = −0.60 m/s² throughout, would say it stops after 2.0 s and 1.2 m. That is wrong: the drag weakens as the drone slows, so it coasts further and for longer.

## Worked example 2: a falling seed pod

**Question.** Take **+y downward**, origin at the release point. A 0.020 kg seed pod is released from rest. Model the air resistance as F_r = −kv with k = 0.040 kg/s. Find (a) the terminal velocity and the time constant, (b) v(t), (c) the velocity and distance fallen after 1.0 s, compared with free fall, and (d) the acceleration at t = 0 and at t = 1.0 s.

1. **(a)** At terminal velocity ΣF = 0: mg = kv_T, so v_T = mg/k = 0.020 × 9.8 ÷ 0.040 = **4.9 m/s**. τ = m/k = 0.020 ÷ 0.040 = **0.50 s**.
2. **(b)** Newton's second law: m dv/dt = mg − kv. Separate and integrate from (0, 0) to (t, v), as in Case B: **v = 4.9(1 − e^(−t/0.50))** (m/s, t in s).
3. **(c)** At 1.0 s: v = 4.9(1 − e^(−2.0)) = **4.2 m/s**. Integrate for the distance: y = v_T t − v_Tτ(1 − e^(−t/τ)) = 4.9 − 4.9 × 0.50 × (1 − e^(−2.0)) = **2.8 m**. In free fall it would have reached 9.8 m/s and fallen 4.9 m.
4. **(d)** a = dv/dt = g e^(−t/τ). At t = 0, **a = 9.8 m/s²**: no drag yet. At 1.0 s, a = 9.8 e^(−2.0) = **1.3 m/s²**.

**Check with forces at 1.0 s.** Drag = kv = 0.040 × 4.24 = 0.170 N; weight = 0.196 N; net force = 0.027 N down, and 0.027 N ÷ 0.020 kg ≈ 1.3 m/s². The calculus and the free-body diagram agree.

**How long to "reach" v_T?** Never exactly. It reaches 90% of v_T when e^(−t/τ) = 0.10, at t = τ ln 10 ≈ 1.2 s, and 99% at about 2.3 s.

## Common misconceptions

- **"At terminal velocity there is no force on the object."** Gravity and drag both still act. They are equal and opposite, so the **net** force is zero.
- **"Drag always points up."** It points opposite to the **velocity**. On a ball thrown upwards, drag points down, adding to gravity, until the top.
- **"The acceleration is zero at the start because the object is not moving yet."** Released from rest, a = g at t = 0. The acceleration falls to zero as v approaches v_T.
- **"A heavier object of the same shape has a bigger acceleration at release."** Both start with a = g. The heavier one has the larger v_T = mg/k and takes longer (τ = m/k) to approach it.
- **Using the constant-acceleration equations.** Acceleration changes with v, so integrate (Worked example 1).
- **Mismatched limits.** If the lower limit of the v integral is v₀, the lower limit of the t integral must be the time when v = v₀.
- **"Infinite time means infinite distance."** A coasting object never stops, yet its displacement approaches the finite value mv₀/k.

## Where this leads

Next, [Topic 2.10, Circular Motion](/advanced-course-resources/physics-c-mechanics/2-10-circular-motion-study-guide/), applies Newton's second law along a curved path. The same separation-of-variables method returns whenever a rate of change depends on the quantity itself. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/2-9-resistive-forces-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/2-9-resistive-forces-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/2-9-resistive-forces-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
