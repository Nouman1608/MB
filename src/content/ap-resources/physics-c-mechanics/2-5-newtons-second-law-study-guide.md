---
resourceId: "mb-ap-physcm-2.5-study-guide"
title: "Newton’s Second Law: Study Guide (Physics C: Mechanics 2.5)"
description: "Calculus-based Newton’s second law: when a system’s velocity changes, a = ΣF/m in components, choosing systems so internal forces cancel, and forces that change with time handled by integration."
course: "physics-c-mechanics"
unit: 2
topics: ["2.5"]
resourceType: "study-guide"
prerequisites:
  - "Drawing free-body diagrams and splitting forces into components (Topic 2.2)"
  - "Balanced forces and inertial reference frames (Topic 2.4)"
  - "Integrating a_x(t) with initial conditions (Topic 1.2)"
prerequisiteResources: ["mb-ap-physcm-2.4-study-guide"]
learningObjectives:
  - "Explain that a system’s velocity changes only when the net external force on it is not zero"
  - "Apply a_cm = ΣF/m_sys as a vector equation, one component at a time, and state that the acceleration points along the net force"
  - "Choose a system so that internal forces cancel, then find an internal force from a second, smaller system"
  - "Find v_x(t) and x(t) from a force that changes with time by dividing by mass and integrating"
  - "Predict factors of change in acceleration when net force or mass changes, and plan a cart experiment that tests a ∝ F and a ∝ 1/m"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic. We use g = 9.8 m/s², the value on the course equation table"
related: ["mb-ap-physcm-2.5-revision-notes", "mb-ap-physcm-2.5-practice", "mb-ap-physcm-2.5-checklist"]
next: "mb-ap-physcm-2.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "A system’s velocity changes only when the net external force on it is not zero. Balanced forces mean constant velocity, which may be zero."
  - "Newton’s second law: a_cm = ΣF/m_sys. The acceleration has the direction of the net force, not of the velocity."
  - "Use it one component at a time: ΣF_x = m a_x and ΣF_y = m a_y."
  - "Internal forces cancel in pairs, so only external forces change the motion of the system’s center of mass."
  - "If the net force depends on time, a_x(t) = ΣF_x(t)/m; integrate with initial conditions to get v_x(t) and x(t)."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 2.5?"
    answer: "They are separate courses with the same topic title. Physics 1 uses the law with constant forces and algebra. Physics C: Mechanics adds calculus: forces that change with time, integration to find velocity and position, and derivations in symbols."
  - question: "Is ma a force that I should draw on a free-body diagram?"
    answer: "No. The free-body diagram shows only forces exerted by other objects. The product m a is what their vector sum equals; it is the result, not another push or pull."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 2.5 with this title. This guide is the **calculus-based** one: alongside constant forces, it handles forces that change with time and uses integration to get velocity and position. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/2-5-newtons-second-law-study-guide/); do not mix the two when you revise.

## When does velocity change?

Start with the system. A **system** is the object or group of objects you choose to study. Every force on it is either **internal** (one part of the system on another part) or **external** (something outside the system on a part of it).

Forces on a system are **unbalanced** when their vector sum, the **net force** ΣF, is not zero. The rule for this topic is simple:

**The velocity of a system's center of mass changes only if a nonzero net external force is exerted on the system.**

"Velocity changes" means its size changes, its direction changes, or both. If ΣF = 0, the center of mass keeps a constant velocity (Topic 2.4). That velocity can be zero, but it does not have to be. A spacecraft coasting far from any planet needs no force to keep moving.

Internal forces come in Newton's-third-law pairs (Topic 2.3). Each pair adds to zero, so internal forces cannot change the velocity of the system's center of mass. Two people on ice can push each other apart, but their shared center of mass stays where it was.

## The law and its parts

**Newton's second law:** the acceleration of a system's center of mass is proportional to the net external force and inversely proportional to the system's mass.

**a_cm = ΣF / m_sys**

Three things are packed into this equation:

1. **Size.** Double the net force and the acceleration doubles. Double the mass with the same net force and the acceleration halves.
2. **Direction.** a and ΣF point the **same way**. The velocity can point anywhere. A ball thrown upward moves up while its acceleration points down.
3. **Units.** 1 N = 1 kg·m/s². This is how the newton is defined.

It is a vector equation. In practice you use it one axis at a time:

**ΣF_x = m a_x  and  ΣF_y = m a_y**

If the object cannot move along an axis (for example, a cart on level ground does not move vertically), then the acceleration along that axis is zero and the forces along it balance.

**The method.**

1. Choose the system and say so.
2. Draw a free-body diagram of external forces only.
3. Choose axes. Put one axis along the acceleration if you know its direction.
4. Write ΣF = ma for each axis, with signs from your axes.
5. Solve, then check units, signs and limiting cases.

## Worked example 1: net force in two dimensions

**Question.** Take **+x forward (to the right) and +y upward**. A delivery drone of mass 1.2 kg is flying in a crosswind. Its rotors push it with a thrust of 15.0 N directed 25° forward of vertical. The wind pushes it backward with a horizontal force of 2.0 N. Find its acceleration.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="pcm25-fbd-title pcm25-fbd-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm25-fbd-title">Free-body diagram of the drone and its net force</title>
<desc id="pcm25-fbd-desc">Left: the drone drawn as a dot with three force arrows. Thrust, 15.0 newtons, points up and to the right at 25 degrees from the vertical. Weight, 11.76 newtons, points straight down. Wind force, 2.0 newtons, points to the left. Axes show plus x to the right and plus y up. Right: the vector sum of the three forces, a net force of 4.71 newtons pointing 22.9 degrees above the plus x direction, drawn with a double line, next to the acceleration arrow of 3.93 metres per second squared in the same direction, drawn dashed.</desc>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<defs><marker id="pcm25-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<path d="M170 190 L233.4 54.1" stroke="#1d2b44" stroke-width="3" marker-end="url(#pcm25-arr)"/>
<path d="M170 190 L170 307" stroke="#1d2b44" stroke-width="3" marker-end="url(#pcm25-arr)"/>
<path d="M170 190 L120 190" stroke="#1d2b44" stroke-width="3" marker-end="url(#pcm25-arr)"/>
<path d="M170 190 V110" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<path d="M170 140 A50 50 0 0 1 191 144.7" stroke="#1d2b44" stroke-width="1.2" fill="none"/>
<text x="178" y="130" font-size="12" fill="#1d2b44">25°</text>
<circle cx="170" cy="190" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="240" y="60" font-size="13" fill="#1d2b44">thrust T = 15.0 N</text>
<text x="180" y="300" font-size="13" fill="#1d2b44">weight mg = 11.76 N</text>
<text x="22" y="186" font-size="13" fill="#1d2b44">wind 2.0 N</text>
<g stroke="#1d2b44" stroke-width="1.5"><path d="M40 280 H80" marker-end="url(#pcm25-arr)"/><path d="M40 280 V240" marker-end="url(#pcm25-arr)"/></g>
<text x="84" y="285" font-size="12" fill="#1d2b44">+x</text><text x="32" y="236" font-size="12" fill="#1d2b44">+y</text>
<path d="M300 20 V310" stroke="#1d2b44" stroke-width="1" opacity="0.4"/>
<text x="330" y="40" font-size="13" fill="#1d2b44" font-weight="600">Result (not a force on the drone)</text>
<path d="M340 200 L467.3 146.2" stroke="#1d2b44" stroke-width="5" marker-end="url(#pcm25-arr)"/>
<path d="M340 200 L467.3 146.2" stroke="#ffffff" stroke-width="2"/>
<text x="350" y="130" font-size="13" fill="#1d2b44">ΣF = 4.71 N (double line)</text>
<path d="M340 250 L446.1 205.2" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5" marker-end="url(#pcm25-arr)"/>
<text x="350" y="280" font-size="13" fill="#1d2b44">a = 3.93 m/s² (dashed)</text>
<text x="350" y="298" font-size="12" fill="#1d2b44">both 22.9° above +x</text>
</svg>
<figcaption>Figure 1. Left: free-body diagram of the drone, external forces only (thrust and weight to scale; the short wind arrow is drawn longer for clarity). Right: their vector sum and the resulting acceleration, which point the same way. The net force is not drawn on the free-body diagram.</figcaption>
</figure>

1. **System:** the drone. External forces: thrust, weight, wind.
2. Weight: mg = 1.2 × 9.8 = 11.76 N downward.
3. Components of thrust: T_x = 15.0 sin 25° = 6.34 N; T_y = 15.0 cos 25° = 13.59 N. (The angle is from the vertical, so sine goes with x.)
4. **x:** ΣF_x = 6.34 − 2.0 = 4.34 N, so a_x = 4.34 ÷ 1.2 = **3.62 m/s²**.
5. **y:** ΣF_y = 13.59 − 11.76 = 1.83 N, so a_y = 1.83 ÷ 1.2 = **1.53 m/s²**.
6. Magnitude: a = √(3.62² + 1.53²) = **3.9 m/s²**, at tan⁻¹(1.53/3.62) = **23° above the forward horizontal**.

**Check.** The net force is √(4.34² + 1.83²) = 4.71 N at the same 22.9°, and 4.71 ÷ 1.2 = 3.93 m/s². Same direction, as the law requires. Forgetting the weight gives a_y = 11.3 m/s², far too large.

## Worked example 2: choosing the system

**Question.** Take **+x in the direction of pull**. A warehouse robot pulls two trolleys joined by a light rigid bar across a smooth level floor. It pulls the front trolley (8.0 kg) with a horizontal force of 36 N. The rear trolley has mass 4.0 kg. Find the acceleration and the force the bar exerts on the rear trolley.

1. **System A: both trolleys and the bar.** The bar's pulls on the two trolleys are internal and cancel. The only horizontal external force is 36 N. So a_x = 36 ÷ (8.0 + 4.0) = **3.0 m/s²**.
2. Vertically, each trolley has a_y = 0, so the floor's normal force balances the weight on each (78.4 N and 39.2 N). These do not affect a_x.
3. **System B: the rear trolley alone.** Its only horizontal external force is the bar. ΣF_x = m a_x gives F_bar = 4.0 × 3.0 = **12 N**, forward.
4. **Check with the front trolley.** 36 N forward and 12 N backward from the bar (third-law partner of step 3): 36 − 12 = 24 N = 8.0 × 3.0. Consistent.

Using 36 ÷ 8.0 = 4.5 m/s² would treat the front trolley as if nothing held it back. The choice of system decides which forces are "external", so state it every time.

## Forces that change with time

When the net force depends on time, the law still holds at every instant:

**a_x(t) = ΣF_x(t) / m**

Then the calculus of Topic 1.2 does the rest:

**v_x(t) = v_x0 + (1/m) ∫₀ᵗ ΣF_x dt  and  x(t) = x₀ + ∫₀ᵗ v_x dt**

So the change in velocity equals the signed area under the ΣF_x–t graph divided by the mass. Two consequences matter:

- The velocity keeps **changing** as long as ΣF_x ≠ 0, even while the force is getting smaller.
- When ΣF_x returns to zero, the velocity stops changing. It does **not** return to zero.

## Worked example 3: a fan cart with a changing force

**Question.** Take **+x along the track**, origin at the start. A 0.50 kg fan cart starts from rest on a level, low-friction track. Its fan produces a net force F_x(t) = (1.2 N/s)t − (0.30 N/s²)t² for 0 ≤ t ≤ 4.0 s, then switches off. Find a_x(t), v_x(t) and x(t), the greatest acceleration, and the velocity and position at 4.0 s. Describe the motion after 4.0 s.

1. a_x = F_x/m = (1.2t − 0.30t²) ÷ 0.50 = **2.4t − 0.60t²** (m/s², t in s).
2. v_x = 0 + ∫₀ᵗ (2.4t − 0.60t²) dt = **1.2t² − 0.20t³** (m/s).
3. x = 0 + ∫₀ᵗ (1.2t² − 0.20t³) dt = **0.40t³ − 0.050t⁴** (m).
4. Greatest acceleration: da_x/dt = 2.4 − 1.2t = 0 at t = 2.0 s, where F_x = 1.2 N and a_x = **2.4 m/s²**. At that moment v_x is only 3.2 m/s.
5. At t = 4.0 s: v_x = 19.2 − 12.8 = **6.4 m/s**; x = 25.6 − 12.8 = **12.8 m**.
6. After 4.0 s the net force is zero, so the cart moves at a **constant 6.4 m/s**.

<figure>
<svg viewBox="0 0 620 530" role="img" aria-labelledby="pcm25-ft-title pcm25-ft-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm25-ft-title">Force–time and velocity–time graphs for the fan cart</title>
<desc id="pcm25-ft-desc">Top graph: net force in newtons from 0 to 1.2 against time from 0 to 5 seconds. The force rises from zero along a curve to a peak of 1.2 newtons at 2 seconds, falls back to zero at 4 seconds, and stays at zero to 5 seconds. The area under the curve is shaded and labelled 3.2 newton seconds. Bottom graph: velocity in metres per second from 0 to 6.4 against time on the same scale. The velocity rises from zero, steepest at 2 seconds where it is 3.2 metres per second, reaches 6.4 metres per second at 4 seconds and then stays level at 6.4 metres per second to 5 seconds.</desc>
<rect x="0" y="0" width="620" height="530" fill="#ffffff"/>
<polygon fill="#fdf6e3" stroke="none" points="70.0,230.0 80.0,216.0 90.0,202.6 100.0,190.0 110.0,178.2 120.0,167.0 130.0,156.6 140.0,146.8 150.0,137.8 160.0,129.6 170.0,122.0 180.0,115.2 190.0,109.0 200.0,103.6 210.0,99.0 220.0,95.0 230.0,91.8 240.0,89.2 250.0,87.4 260.0,86.4 270.0,86.0 280.0,86.4 290.0,87.4 300.0,89.2 310.0,91.8 320.0,95.0 330.0,99.0 340.0,103.6 350.0,109.0 360.0,115.2 370.0,122.0 380.0,129.6 390.0,137.8 400.0,146.8 410.0,156.6 420.0,167.0 430.0,178.2 440.0,190.0 450.0,202.6 460.0,216.0 470.0,230.0"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M270 230 V60 M470 230 V60 M270 470 V300 M470 470 V300"/>
<path d="M70 86 H580 M70 390 H580 M70 310 H580"/>
</g>
<path d="M70 230 H585 M70 230 V55 M70 470 H585 M70 470 V295" stroke="#1d2b44" stroke-width="2" fill="none"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,230.0 80.0,216.0 90.0,202.6 100.0,190.0 110.0,178.2 120.0,167.0 130.0,156.6 140.0,146.8 150.0,137.8 160.0,129.6 170.0,122.0 180.0,115.2 190.0,109.0 200.0,103.6 210.0,99.0 220.0,95.0 230.0,91.8 240.0,89.2 250.0,87.4 260.0,86.4 270.0,86.0 280.0,86.4 290.0,87.4 300.0,89.2 310.0,91.8 320.0,95.0 330.0,99.0 340.0,103.6 350.0,109.0 360.0,115.2 370.0,122.0 380.0,129.6 390.0,137.8 400.0,146.8 410.0,156.6 420.0,167.0 430.0,178.2 440.0,190.0 450.0,202.6 460.0,216.0 470.0,230.0 570,230"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,470.0 80.0,469.7 90.0,468.8 100.0,467.4 110.0,465.5 120.0,463.1 130.0,460.3 140.0,457.0 150.0,453.4 160.0,449.3 170.0,445.0 180.0,440.4 190.0,435.4 200.0,430.3 210.0,424.9 220.0,419.4 230.0,413.7 240.0,407.9 250.0,402.0 260.0,396.0 270.0,390.0 280.0,384.0 290.0,378.0 300.0,372.1 310.0,366.3 320.0,360.6 330.0,355.1 340.0,349.7 350.0,344.6 360.0,339.6 370.0,335.0 380.0,330.7 390.0,326.6 400.0,323.0 410.0,319.7 420.0,316.9 430.0,314.5 440.0,312.6 450.0,311.2 460.0,310.3 470.0,310.0 570,310"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="248">0</text><text x="170" y="248">1</text><text x="270" y="248">2</text><text x="370" y="248">3</text><text x="470" y="248">4</text><text x="570" y="248">5</text>
<text x="70" y="488">0</text><text x="170" y="488">1</text><text x="270" y="488">2</text><text x="370" y="488">3</text><text x="470" y="488">4</text><text x="570" y="488">5</text>
<text x="330" y="515" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="234">0</text><text x="62" y="160">0.6</text><text x="62" y="90">1.2</text>
<text x="62" y="474">0</text><text x="62" y="394">3.2</text><text x="62" y="314">6.4</text>
</g>
<path d="M66 158 H70" stroke="#1d2b44" stroke-width="1.5"/>
<text x="22" y="145" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 145)">net force, F_x (N)</text>
<text x="22" y="385" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 385)">velocity, v_x (m/s)</text>
<text x="230" y="185" font-size="12" fill="#1d2b44" font-weight="600">shaded area = 3.2 N·s</text>
<text x="480" y="220" font-size="12" fill="#1d2b44">fan off: F = 0</text>
<text x="480" y="300" font-size="12" fill="#1d2b44">constant 6.4 m/s</text>
<circle cx="270" cy="390" r="4" fill="#1d2b44"/>
<text x="280" y="408" font-size="12" fill="#1d2b44">steepest at 2 s (a = 2.4 m/s²)</text>
</svg>
<figcaption>Figure 2. Net force (top) and velocity (bottom) on the same time axis. The force peaks at 2.0 s, where the v–t graph is steepest. Area under the force curve ÷ mass = 3.2 N·s ÷ 0.50 kg = 6.4 m/s, the final velocity. When the force returns to zero the velocity stays at 6.4 m/s.</figcaption>
</figure>

**Check.** ∫₀⁴ F_x dt = 0.60t² − 0.10t³ evaluated at 4.0 s = 9.6 − 6.4 = 3.2 N·s, and 3.2 ÷ 0.50 = 6.4 m/s. Treating the peak force 1.2 N as constant for 4.0 s would give 9.6 m/s, which is too large: the force is below its peak for most of the run.

## Testing the law in the lab

You can test both proportionalities with a cart on a level, low-friction track, a force sensor and a motion sensor (or a light gate).

**a ∝ F at constant mass.** Keep the total mass of the moving system constant. Apply different steady pulls, read the net force from the force sensor, and find a from the slope of the v–t graph. Plot **a (vertical) against F (horizontal)**. The law predicts a straight line through the origin with slope 1/m.

A fictional set for a 0.80 kg system:

| F (N) | 0.20 | 0.40 | 0.60 | 0.80 | 1.00 |
|---|---|---|---|---|---|
| a (m/s²) | 0.26 | 0.49 | 0.76 | 0.99 | 1.26 |

The best-fit slope is 1.25 kg⁻¹, so m = 1 ÷ 1.25 = 0.80 kg, matching the cart. A clear positive intercept on the F axis (a needs some force before the cart moves) would point to friction you have not included.

**a ∝ 1/m at constant force.** Keep the net force the same and add mass to the cart. Plot **a against 1/m**: a straight line through the origin, slope ΣF.

Good practice: level the track first (a cart nudged gently should coast at constant speed), repeat each run, and change only one variable at a time.

## Common misconceptions

- **"A moving object needs a net force to keep moving."** No. A net force changes velocity. Constant velocity needs ΣF = 0.
- **"The acceleration points the way the object moves."** It points along ΣF. A cart rolling forward while braking accelerates backward.
- **Drawing ma on the free-body diagram.** m a is the result of the forces, not one of them (Figure 1).
- **Including internal forces.** The bar in Worked example 2 does not change the motion of the two-trolley system.
- **"Biggest force means biggest velocity."** The biggest force gives the biggest *acceleration*. In Worked example 3 the velocity was greatest at the end, when the force had already fallen to zero.
- **"When the force stops, the object stops."** It keeps the velocity it has reached.
- **Using constant-acceleration equations with a changing force.** If F depends on t, a does too. Integrate.

## Where this leads

Earlier: [Topic 2.4, Newton's First Law](/advanced-course-resources/physics-c-mechanics/2-4-newtons-first-law-study-guide/), the ΣF = 0 case. Next, [Topic 2.6, Gravitational Force](/advanced-course-resources/physics-c-mechanics/2-6-gravitational-force-study-guide/), gives you the weight force and shows what a scale reads when the system accelerates. Friction, springs and drag (Topics 2.7 to 2.9) add forces that depend on position or velocity, and Topic 2.10 uses the same law for circular motion. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/2-5-newtons-second-law-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/2-5-newtons-second-law-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/2-5-newtons-second-law-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
