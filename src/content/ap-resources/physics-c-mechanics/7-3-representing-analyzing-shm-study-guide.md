---
resourceId: "mb-ap-physcm-7.3-study-guide"
title: "Representing and Analyzing SHM: Study Guide (Physics C: Mechanics 7.3)"
description: "Calculus-based simple harmonic motion: the differential equation from Newton's second law, x = A cos(ωt + φ₀), velocity and acceleration by differentiation, graphs, and resonance."
course: "physics-c-mechanics"
unit: 7
topics: ["7.3"]
resourceType: "study-guide"
prerequisites:
  - "Restoring forces, equilibrium and the definition of SHM (Topic 7.1)"
  - "Period, frequency and angular frequency, including T = 2π√(m/k) (Topic 7.2)"
  - "Differentiating sine and cosine, and Newton's second law (Topics 1.2 and 2.5)"
prerequisiteResources: ["mb-ap-physcm-7.2-study-guide"]
learningObjectives:
  - "Apply Newton's second law to an oscillator to obtain d²x/dt² = −ω²x and read off ω"
  - "Use x(t) = A cos(ωt + φ₀) and find A and φ₀ from the position and velocity at t = 0"
  - "Differentiate x(t) to find v_x(t) and a_x(t), and show that a_x = −ω²x, v_max = Aω and a_max = Aω²"
  - "Locate the zeros and extremes of displacement, velocity and acceleration on graphs and in time"
  - "Explain why the period does not depend on the amplitude, and describe resonance under a sinusoidal driving force"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic only. Set the calculator to radians for every sine and cosine. Answers to 2 or 3 significant figures"
related: ["mb-ap-physcm-7.3-revision-notes", "mb-ap-physcm-7.3-practice", "mb-ap-physcm-7.3-checklist"]
next: "mb-ap-physcm-7.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Newton's second law with a restoring force F_x = −kx gives d²x/dt² = −ω²x. Any system that reduces to this form moves in SHM, with ω² equal to the constant."
  - "The solution is x = A cos(ωt + φ₀) (or a sine form). A and φ₀ come from the starting position and velocity; ω comes from the system."
  - "Differentiate: v_x = −Aω sin(ωt + φ₀) and a_x = −Aω² cos(ωt + φ₀) = −ω²x. So v_max = Aω and a_max = Aω²."
  - "At x = ±A the object is at rest and |a_x| is largest. At x = 0 the speed is largest and a_x = 0."
  - "The period depends only on ω, not on A. Driving a system at its natural frequency (resonance) makes the amplitude grow."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 7.3?"
    answer: "They are separate courses. Physics 1 uses x = A cos(2πft) and reads features from graphs. Physics C: Mechanics obtains the differential equation from Newton's second law, uses a phase constant φ₀, and finds velocity and acceleration by differentiating x(t)."
  - question: "Do I have to prove that A cos(ωt + φ₀) solves the equation?"
    answer: "No. You need to know the solution, recognise the equation d²x/dt² = −ω²x when Newton's second law produces it, and use the solution. Differentiating twice to check it is a quick habit, not a required proof."
  - question: "Why must my calculator be in radians?"
    answer: "ωt + φ₀ is an angle in radians because ω is in rad/s. In degree mode cos(2.0) means cos of 2 degrees, which is almost 1, and every answer will be wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 7.3 called Representing and Analyzing SHM. This guide is the **calculus-based** one. It builds the equation of motion from Newton's second law, uses a phase constant, and finds velocity and acceleration by differentiation. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/7-3-representing-analyzing-shm-study-guide/); do not mix the two when you revise.

## From Newton's second law to the SHM equation

Take a block of mass m on a frictionless horizontal surface, attached to an ideal spring of constant k. Measure x from the **equilibrium position**, where the net force is zero, with **+x to the right**. When the block is at x, the spring exerts the restoring force F_x = −kx. Newton's second law gives:

**m d²x/dt² = −kx, so d²x/dt² = −(k/m)x**

Write the positive constant k/m as ω². Then:

**d²x/dt² = −ω²x, with ω = √(k/m)**

This is a **second-order differential equation**: it links x to its own second derivative. Read it in words: the acceleration is always proportional to the displacement and points the other way.

This gives you a test for SHM in any system. Apply Newton's second law (or its rotational form), write the result for the displacement from equilibrium, and see whether it takes the form d²x/dt² = −(positive constant) × x. If it does, the motion is simple harmonic and ω is the square root of that constant. If the constant depends on x, or the force is not proportional to x, the motion may be periodic but it is not SHM.

## The solution: x = A cos(ωt + φ₀)

The function that satisfies d²x/dt² = −ω²x is a sinusoid:

**x(t) = A cos(ωt + φ₀)**

- **A** is the **amplitude**, the largest displacement from equilibrium (in m, always positive).
- **ω** is the **angular frequency** (rad/s). It is set by the system, here √(k/m). Then T = 2π/ω and f = ω/2π (Topic 7.2).
- **φ₀** is the **phase constant** (rad). It says where in the cycle the object is at t = 0.

The sine form x = A sin(ωt + φ₁) describes the same motion with φ₁ = φ₀ + π/2. Use whichever makes the starting condition simplest:

- Released from rest at x = +A at t = 0: **x = A cos(ωt)** (φ₀ = 0).
- Passing through x = 0 moving in +x at t = 0: **x = A sin(ωt)**.

You do not have to prove that this solves the equation. A quick check is still useful: differentiate twice and you get −ω² times the original function.

**Finding A and φ₀ in general.** Suppose that at t = 0 the object is at x₀ with velocity v_x0. From x(0) = A cos φ₀ and v_x(0) = −Aω sin φ₀:

**A = √(x₀² + (v_x0/ω)²)**, then **cos φ₀ = x₀/A** and **sin φ₀ = −v_x0/(Aω)**.

Use both the cosine and the sine to choose the right quadrant for φ₀. Using tan φ₀ on its own can give an angle that is π out.

## Velocity and acceleration by differentiation

Differentiate x(t) once and then again:

**v_x = dx/dt = −Aω sin(ωt + φ₀)**

**a_x = dv_x/dt = −Aω² cos(ωt + φ₀) = −ω²x**

Three results follow directly:

- **a_x = −ω²x.** The acceleration is proportional to the displacement and opposite to it. This is the differential equation again, which is a good check.
- **v_max = Aω**, because the largest value of |sin| is 1.
- **a_max = Aω²**, because the largest value of |cos| is 1.

Using sin² + cos² = 1 you can also write the speed at any position: **|v_x| = ω√(A² − x²)**. This is zero at x = ±A and equal to Aω at x = 0.

## Zeros and extremes

The three graphs in Figure 1 are for x = A cos(ωt). Each is a sinusoid with the same period. The velocity graph is a quarter-cycle ahead of the displacement graph, and the acceleration graph is the displacement graph turned upside down and scaled by ω².

| Where the object is | Displacement | Velocity | Acceleration |
|---|---|---|---|
| Turning point x = +A | maximum, +A | zero | −Aω² (most negative) |
| Equilibrium, moving in −x | zero | −Aω (most negative) | zero |
| Turning point x = −A | minimum, −A | zero | +Aω² (most positive) |
| Equilibrium, moving in +x | zero | +Aω (most positive) | zero |

Two features are worth knowing without thinking. Wherever **v_x = 0**, the object is at a turning point and **|a_x| is largest**. Wherever **a_x = 0**, the object is at equilibrium and the **speed is largest**. On the x–t graph, velocity is the tangent slope, so the slope is zero at the peaks and steepest where the curve crosses the axis.

<figure>
<svg viewBox="0 0 560 470" role="img" aria-labelledby="pcm73-xva-title pcm73-xva-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm73-xva-title">Displacement, velocity and acceleration against time for x = A cos(ωt)</title>
<desc id="pcm73-xva-desc">Three stacked graphs share a time axis marked 0, T/4, T/2, 3T/4 and T. Top graph, displacement x: starts at +A at t = 0, crosses zero at T/4, reaches −A at T/2, crosses zero at 3T/4 and returns to +A at T. Middle graph, velocity v_x: starts at zero, reaches −Aω at T/4, zero at T/2, +Aω at 3T/4 and zero at T. Bottom graph, acceleration a_x: starts at −Aω² at t = 0, zero at T/4, +Aω² at T/2, zero at 3T/4 and −Aω² at T. Dashed vertical lines at each quarter period show that velocity is zero where displacement and acceleration are extreme, and acceleration is zero where velocity is extreme.</desc>
<rect x="0" y="0" width="560" height="470" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4" opacity="0.6">
<path d="M190 30 V420 M290 30 V420 M390 30 V420 M490 30 V420"/>
</g>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<path d="M90 30 V140 M90 85 H505"/>
<path d="M90 170 V280 M90 225 H505"/>
<path d="M90 310 V420 M90 365 H505"/>
</g>
<g stroke="#1d2b44" stroke-width="0.6" stroke-dasharray="2 4" opacity="0.6">
<path d="M90 40 H490 M90 130 H490 M90 180 H490 M90 270 H490 M90 320 H490 M90 410 H490"/>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="90.0,40.0 95.0,40.1 100.0,40.6 105.0,41.2 110.0,42.2 115.0,43.4 120.0,44.9 125.0,46.6 130.0,48.6 135.0,50.8 140.0,53.2 145.0,55.8 150.0,58.5 155.0,61.5 160.0,64.6 165.0,67.8 170.0,71.1 175.0,74.5 180.0,78.0 185.0,81.5 190.0,85.0 195.0,88.5 200.0,92.0 205.0,95.5 210.0,98.9 215.0,102.2 220.0,105.4 225.0,108.5 230.0,111.5 235.0,114.2 240.0,116.8 245.0,119.2 250.0,121.4 255.0,123.4 260.0,125.1 265.0,126.6 270.0,127.8 275.0,128.8 280.0,129.4 285.0,129.9 290.0,130.0 295.0,129.9 300.0,129.4 305.0,128.8 310.0,127.8 315.0,126.6 320.0,125.1 325.0,123.4 330.0,121.4 335.0,119.2 340.0,116.8 345.0,114.2 350.0,111.5 355.0,108.5 360.0,105.4 365.0,102.2 370.0,98.9 375.0,95.5 380.0,92.0 385.0,88.5 390.0,85.0 395.0,81.5 400.0,78.0 405.0,74.5 410.0,71.1 415.0,67.8 420.0,64.6 425.0,61.5 430.0,58.5 435.0,55.8 440.0,53.2 445.0,50.8 450.0,48.6 455.0,46.6 460.0,44.9 465.0,43.4 470.0,42.2 475.0,41.2 480.0,40.6 485.0,40.1 490.0,40.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="90.0,225.0 95.0,228.5 100.0,232.0 105.0,235.5 110.0,238.9 115.0,242.2 120.0,245.4 125.0,248.5 130.0,251.5 135.0,254.2 140.0,256.8 145.0,259.2 150.0,261.4 155.0,263.4 160.0,265.1 165.0,266.6 170.0,267.8 175.0,268.8 180.0,269.4 185.0,269.9 190.0,270.0 195.0,269.9 200.0,269.4 205.0,268.8 210.0,267.8 215.0,266.6 220.0,265.1 225.0,263.4 230.0,261.4 235.0,259.2 240.0,256.8 245.0,254.2 250.0,251.5 255.0,248.5 260.0,245.4 265.0,242.2 270.0,238.9 275.0,235.5 280.0,232.0 285.0,228.5 290.0,225.0 295.0,221.5 300.0,218.0 305.0,214.5 310.0,211.1 315.0,207.8 320.0,204.6 325.0,201.5 330.0,198.5 335.0,195.8 340.0,193.2 345.0,190.8 350.0,188.6 355.0,186.6 360.0,184.9 365.0,183.4 370.0,182.2 375.0,181.2 380.0,180.6 385.0,180.1 390.0,180.0 395.0,180.1 400.0,180.6 405.0,181.2 410.0,182.2 415.0,183.4 420.0,184.9 425.0,186.6 430.0,188.6 435.0,190.8 440.0,193.2 445.0,195.8 450.0,198.5 455.0,201.5 460.0,204.6 465.0,207.8 470.0,211.1 475.0,214.5 480.0,218.0 485.0,221.5 490.0,225.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="90.0,410.0 95.0,409.9 100.0,409.4 105.0,408.8 110.0,407.8 115.0,406.6 120.0,405.1 125.0,403.4 130.0,401.4 135.0,399.2 140.0,396.8 145.0,394.2 150.0,391.5 155.0,388.5 160.0,385.4 165.0,382.2 170.0,378.9 175.0,375.5 180.0,372.0 185.0,368.5 190.0,365.0 195.0,361.5 200.0,358.0 205.0,354.5 210.0,351.1 215.0,347.8 220.0,344.6 225.0,341.5 230.0,338.5 235.0,335.8 240.0,333.2 245.0,330.8 250.0,328.6 255.0,326.6 260.0,324.9 265.0,323.4 270.0,322.2 275.0,321.2 280.0,320.6 285.0,320.1 290.0,320.0 295.0,320.1 300.0,320.6 305.0,321.2 310.0,322.2 315.0,323.4 320.0,324.9 325.0,326.6 330.0,328.6 335.0,330.8 340.0,333.2 345.0,335.8 350.0,338.5 355.0,341.5 360.0,344.6 365.0,347.8 370.0,351.1 375.0,354.5 380.0,358.0 385.0,361.5 390.0,365.0 395.0,368.5 400.0,372.0 405.0,375.5 410.0,378.9 415.0,382.2 420.0,385.4 425.0,388.5 430.0,391.5 435.0,394.2 440.0,396.8 445.0,399.2 450.0,401.4 455.0,403.4 460.0,405.1 465.0,406.6 470.0,407.8 475.0,408.8 480.0,409.4 485.0,409.9 490.0,410.0"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="84" y="44">+A</text><text x="84" y="89">0</text><text x="84" y="134">−A</text>
<text x="84" y="184">+Aω</text><text x="84" y="229">0</text><text x="84" y="274">−Aω</text>
<text x="84" y="324">+Aω²</text><text x="84" y="369">0</text><text x="84" y="414">−Aω²</text>
</g>
<g font-size="13" fill="#1d2b44" font-weight="600">
<text x="510" y="89">x</text><text x="510" y="229">v_x</text><text x="510" y="369">a_x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="90" y="440">0</text><text x="190" y="440">T/4</text><text x="290" y="440">T/2</text><text x="390" y="440">3T/4</text><text x="490" y="440">T</text>
<text x="290" y="462" font-size="13">time, t</text>
</g>
<circle cx="90" cy="40" r="4" fill="#1d2b44"/><circle cx="90" cy="225" r="4" fill="#1d2b44"/><circle cx="90" cy="410" r="4" fill="#1d2b44"/>
<circle cx="190" cy="85" r="4" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/><circle cx="190" cy="270" r="4" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/><circle cx="190" cy="365" r="4" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
</svg>
<figcaption>Figure 1. x, v_x and a_x against time for x = A cos(ωt), +x to the right. Filled dots at t = 0: the object is at +A, at rest, with the most negative acceleration. Open dots at t = T/4: it passes equilibrium at top speed, moving in −x, with zero acceleration. The a_x graph is the x graph upside down.</figcaption>
</figure>

## Amplitude does not change the period

In d²x/dt² = −ω²x, ω depends only on the system (k and m for a spring). A does not appear in it. Double the amplitude and the object has twice as far to go, but the restoring force at each point is also twice as large, so it moves twice as fast at each matching point of the cycle. The two effects cancel exactly: **the period stays the same**. What does change: v_max = Aω and a_max = Aω² both double.

This is true for ideal SHM, where the restoring force is exactly proportional to the displacement. For a pendulum it holds only for small angles (Topic 7.5).

## Reading SHM from graphs

- **From an x–t graph:** the amplitude is the height of a peak above the equilibrium line; the period is the time between matching points; φ₀ comes from where the cycle is at t = 0. The tangent slope at any instant is v_x.
- **From a v_x–t graph:** the peak gives v_max = Aω. The signed area under the graph over an interval is the displacement (Topic 1.2), so each half-loop has area of size 2A.
- **From an a_x–x graph:** SHM gives a **straight line through the origin with negative slope**. The slope is −ω². A curved line, or one that misses the origin, means the motion is not SHM about that origin.

## Resonance

The **natural frequency** of a system is the frequency it oscillates at when you displace it from equilibrium and let go: f₀ = ω/2π. Now push it with an external force that varies sinusoidally in time at a driving frequency f. If **f equals the natural frequency**, each push arrives at the same point in every cycle and is in the direction the object is already moving. Energy is added every cycle, so **the amplitude grows**. This is **resonance**.

Driving at other frequencies gives a smaller amplitude, because the pushes are only sometimes in step with the motion. Figure 2 sketches the pattern.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="pcm73-res-title pcm73-res-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm73-res-title">Sketch of amplitude against driving frequency for a lightly damped oscillator</title>
<desc id="pcm73-res-desc">A qualitative graph with no numbers on the vertical axis. The horizontal axis is driving frequency from zero to twice the natural frequency f₀. The amplitude starts at a small value at low driving frequency, rises slowly, then rises steeply to a sharp peak at the natural frequency f₀ (for light damping the peak is very close to f₀), then falls steeply and continues to fall towards zero at high driving frequency. A dashed vertical line marks f₀.</desc>
<rect x="0" y="0" width="560" height="320" fill="#ffffff"/>
<path d="M80 270 H500 M80 270 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<path d="M280 270 V50" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 5"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="80.0,235.0 84.0,235.0 88.0,234.9 92.0,234.9 96.0,234.8 100.0,234.7 104.0,234.5 108.0,234.3 112.0,234.1 116.0,233.8 120.0,233.6 124.0,233.2 128.0,232.9 132.0,232.5 136.0,232.1 140.0,231.6 144.0,231.1 148.0,230.5 152.0,229.9 156.0,229.2 160.0,228.5 164.0,227.7 168.0,226.8 172.0,225.8 176.0,224.8 180.0,223.6 184.0,222.4 188.0,221.0 192.0,219.5 196.0,217.8 200.0,216.0 204.0,213.9 208.0,211.7 212.0,209.1 216.0,206.3 220.0,203.1 224.0,199.5 228.0,195.4 232.0,190.6 236.0,185.2 240.0,178.8 244.0,171.4 248.0,162.6 252.0,152.3 256.0,139.9 260.0,125.4 264.0,108.7 268.0,90.7 272.0,73.6 276.0,61.7 280.0,60.0 284.0,69.7 288.0,87.3 292.0,107.7 296.0,127.2 300.0,144.4 304.0,159.1 308.0,171.3 312.0,181.6 316.0,190.3 320.0,197.6 324.0,203.8 328.0,209.2 332.0,213.9 336.0,218.0 340.0,221.6 344.0,224.8 348.0,227.6 352.0,230.2 356.0,232.5 360.0,234.6 364.0,236.5 368.0,238.2 372.0,239.8 376.0,241.2 380.0,242.5 384.0,243.8 388.0,244.9 392.0,246.0 396.0,247.0 400.0,247.9 404.0,248.7 408.0,249.6 412.0,250.3 416.0,251.0 420.0,251.7 424.0,252.3 428.0,252.9 432.0,253.5 436.0,254.0 440.0,254.5 444.0,255.0 448.0,255.4 452.0,255.9 456.0,256.3 460.0,256.7 464.0,257.1 468.0,257.4 472.0,257.8 476.0,258.1 480.0,258.4"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="288">0</text><text x="280" y="288">f₀</text><text x="480" y="288">2f₀</text>
<text x="290" y="310" font-size="13">driving frequency, f</text>
</g>
<text x="22" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 160)">amplitude (no scale)</text>
<text x="292" y="58" font-size="12" fill="#1d2b44">peak at the natural frequency</text>
</svg>
<figcaption>Figure 2. Qualitative sketch: the steady amplitude of a driven oscillator against driving frequency. The amplitude is largest when the driving frequency equals the natural frequency f₀. The height of the peak is limited by friction (damping), which is background only here.</figcaption>
</figure>

## Worked example 1: from starting conditions to x(t)

**Question.** Take **+x to the right**, origin at equilibrium. A 0.50 kg cart on a level, frictionless track is held between springs that act together like one spring with k = 32 N/m. At t = 0 the cart is at x₀ = +0.030 m moving with v_x0 = +0.32 m/s. Find ω, the amplitude, the phase constant for the cosine form, v_max, a_max, and the first time the cart passes through equilibrium.

1. **Angular frequency:** ω = √(k/m) = √(32/0.50) = **8.0 rad/s**. So T = 2π/8.0 = 0.785 s.
2. **Amplitude:** v_x0/ω = 0.32/8.0 = 0.040 m. A = √(0.030² + 0.040²) = **0.050 m**.
3. **Phase constant:** cos φ₀ = 0.030/0.050 = 0.60 and sin φ₀ = −0.32/(0.050 × 8.0) = −0.80. Cosine positive and sine negative put φ₀ in the fourth quadrant: **φ₀ = −0.93 rad**. So **x(t) = (0.050 m) cos(8.0t − 0.93)**.
4. **Maxima:** v_max = Aω = 0.050 × 8.0 = **0.40 m/s**; a_max = Aω² = 0.050 × 64 = **3.2 m/s²**.
5. **First passage through equilibrium:** the cart is moving right, so it first reaches x = +A when 8.0t − 0.93 = 0, at t = 0.116 s. It then returns, and x = 0 when 8.0t − 0.927 = π/2: t = (1.571 + 0.927)/8.0 = **0.31 s**, moving in −x at 0.40 m/s.

**Check.** At t = 0, a_x = −ω²x₀ = −64 × 0.030 = −1.92 m/s²: negative while x is positive, as it must be. And |v_x| = ω√(A² − x₀²) = 8.0 × 0.040 = 0.32 m/s, the speed we started with.

## Worked example 2: working from a velocity–time graph

**Question.** Take **+x to the right**, origin at equilibrium. A glider oscillates in SHM. Its velocity–time graph (Figure 3) is a sine curve with v_x = 0 at t = 0, a peak of +0.40 m/s, and a period of 0.628 s. Find ω, A, the glider's position at t = 0, its acceleration at t = 0, and the distance it covers in the first half-period.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="pcm73-vt-title pcm73-vt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm73-vt-title">Velocity–time graph for a glider, v = 0.40 sin(10t)</title>
<desc id="pcm73-vt-desc">Velocity v_x in metres per second from −0.5 to 0.5 against time t in seconds from 0 to 0.7. The curve starts at zero, rises to a maximum of +0.40 m/s at t = 0.157 s, returns to zero at 0.314 s, reaches −0.40 m/s at 0.471 s, returns to zero at 0.628 s and begins to rise again. The first loop, above the axis, is shaded and labelled area +0.080 m. The second loop, below the axis, is hatched and labelled area −0.080 m.</desc>
<defs><pattern id="pcm73-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V6" stroke="#1d2b44" stroke-width="1"/></pattern></defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<polygon fill="#fdf6e3" stroke="none" points="80.0,150.0 86.1,141.1 92.2,132.3 98.2,123.7 104.3,115.3 110.4,107.3 116.5,99.7 122.6,92.7 128.6,86.2 134.7,80.4 140.8,75.3 146.9,71.0 153.0,67.5 159.0,64.8 165.1,63.0 171.2,62.1 177.3,62.1 183.4,63.0 189.4,64.8 195.5,67.5 201.6,71.0 207.7,75.3 213.8,80.4 219.9,86.2 225.9,92.7 232.0,99.7 238.1,107.3 244.2,115.3 250.3,123.7 256.3,132.3 262.4,141.1 268.5,150.0"/>
<polygon fill="url(#pcm73-hatch)" stroke="none" points="268.5,150.0 274.6,158.9 280.7,167.7 286.7,176.3 292.8,184.7 298.9,192.7 305.0,200.3 311.1,207.3 317.1,213.8 323.2,219.6 329.3,224.7 335.4,229.0 341.5,232.5 347.5,235.2 353.6,237.0 359.7,237.9 365.8,237.9 371.9,237.0 377.9,235.2 384.0,232.5 390.1,229.0 396.2,224.7 402.3,219.6 408.3,213.8 414.4,207.3 420.5,200.3 426.6,192.7 432.7,184.7 438.7,176.3 444.8,167.7 450.9,158.9 457.0,150.0"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.6">
<path d="M80 62 H500 M80 238 H500"/>
</g>
<path d="M80 40 V260 M80 150 H515" stroke="#1d2b44" stroke-width="2" fill="none"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="80.0,150.0 86.0,141.2 92.0,132.5 98.0,124.0 104.0,115.7 110.0,107.8 116.0,100.3 122.0,93.3 128.0,86.9 134.0,81.1 140.0,76.0 146.0,71.6 152.0,68.0 158.0,65.2 164.0,63.3 170.0,62.2 176.0,62.0 182.0,62.7 188.0,64.3 194.0,66.7 200.0,70.0 206.0,74.0 212.0,78.9 218.0,84.4 224.0,90.6 230.0,97.3 236.0,104.6 242.0,112.4 248.0,120.5 254.0,128.9 260.0,137.6 266.0,146.3 272.0,155.1 278.0,163.9 284.0,172.5 290.0,180.9 296.0,188.9 302.0,196.6 308.0,203.8 314.0,210.5 320.0,216.6 326.0,222.0 332.0,226.7 338.0,230.6 344.0,233.7 350.0,236.0 356.0,237.4 362.0,238.0 368.0,237.7 374.0,236.5 380.0,234.4 386.0,231.5 392.0,227.7 398.0,223.2 404.0,218.0 410.0,212.1 416.0,205.6 422.0,198.5 428.0,190.9 434.0,182.9 440.0,174.6 446.0,166.0 452.0,157.3 458.0,148.5 464.0,139.7 470.0,131.1 476.0,122.6 482.0,114.4 488.0,106.5 494.0,99.1 500.0,92.2"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="140" y="168">0.1</text><text x="200" y="168">0.2</text><text x="320" y="142">0.4</text><text x="380" y="142">0.5</text><text x="440" y="142">0.6</text><text x="500" y="142">0.7</text>
<text x="300" y="290" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="72" y="66">0.40</text><text x="72" y="154">0</text><text x="72" y="242">−0.40</text>
</g>
<text x="22" y="150" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 150)">velocity, v_x (m/s)</text>
<text x="175" y="125" font-size="12" fill="#1d2b44" font-weight="600" text-anchor="middle">area +0.080 m</text>
<text x="362" y="262" font-size="12" fill="#1d2b44" font-weight="600" text-anchor="middle">area −0.080 m (hatched)</text>
<text x="268" y="168" font-size="11" fill="#1d2b44" text-anchor="middle">0.314</text>
<text x="457" y="168" font-size="11" fill="#1d2b44" text-anchor="middle">0.628</text>
</svg>
<figcaption>Figure 3. Velocity–time graph for Worked example 2, +x to the right. Each half-loop has area of size 2A = 0.080 m, the distance between the two turning points.</figcaption>
</figure>

1. **Angular frequency:** ω = 2π/T = 2π/0.628 = **10 rad/s**.
2. **Amplitude:** v_max = Aω, so A = 0.40/10 = **0.040 m**.
3. **Velocity function:** the graph is v_x = (0.40 m/s) sin(10t).
4. **Position by integration:** x = ∫v_x dt = −(0.040 m) cos(10t) + C. The motion is centred on the origin (equilibrium), so C = 0. At t = 0: **x = −0.040 m = −A**. The glider starts at the left turning point, which fits v_x = 0 there.
5. **Acceleration by differentiation:** a_x = dv_x/dt = (4.0 m/s²) cos(10t). At t = 0, **a_x = +4.0 m/s²**, the largest value. Check with a_x = −ω²x = −100 × (−0.040) = +4.0 m/s².
6. **Distance in the first half-period:** v_x is positive throughout, so distance = area of the first loop = ∫₀^0.314 0.40 sin(10t) dt = **0.080 m**. That is 2A: from −A to +A.

**Interpretation.** A velocity graph that starts at zero and rises means the object starts at rest and is pushed in +x. The push in +x at a turning point only happens at x = −A.

## Common misconceptions

- **"The speed is greatest at the ends."** The object is momentarily at rest at x = ±A. The speed is greatest at equilibrium.
- **"a_x = 0 means v_x = 0."** At equilibrium a_x = 0 but the speed is v_max.
- **"Bigger amplitude, longer period."** For ideal SHM the period is independent of A. Only v_max and a_max scale with A.
- **Mixing up ω and f.** ω is in rad/s and f in Hz; ω = 2πf. v_max = Aω, not Af.
- **Calculator in degrees.** ωt + φ₀ is in radians.
- **Choosing φ₀ from tan alone.** Check the signs of cos φ₀ and sin φ₀ to get the right quadrant.
- **"Any repeating motion is SHM."** A ball bouncing on the floor repeats, but the force on it is not proportional to its displacement, so it is periodic but not simple harmonic.
- **"Any regular push makes a big amplitude."** Only pushes at (or very close to) the natural frequency produce resonance.

## Where this leads

Topic 7.4 (Energy of Simple Harmonic Oscillators) uses x(t) and v_x(t) from this guide to show that kinetic and potential energy trade back and forth while their sum stays constant: read the [Topic 7.4 study guide](/advanced-course-resources/physics-c-mechanics/7-4-energy-simple-harmonic-oscillators-study-guide/). Topic 7.5 applies the same differential-equation test to pendulums. Now try the [practice questions](/advanced-course-resources/physics-c-mechanics/7-3-representing-analyzing-shm-practice/), then use the [revision notes](/advanced-course-resources/physics-c-mechanics/7-3-representing-analyzing-shm-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/7-3-representing-analyzing-shm-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
