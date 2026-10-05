---
resourceId: "mb-ap-physcm-7.1-study-guide"
title: "Defining Simple Harmonic Motion (SHM): Study Guide (Physics C: Mechanics 7.1)"
description: "Calculus-based definition of simple harmonic motion: equilibrium, restoring forces proportional to displacement, d²x/dt² = −(k/m)x, vertical springs, and small oscillations about a U(x) minimum."
course: "physics-c-mechanics"
unit: 7
topics: ["7.1"]
resourceType: "study-guide"
prerequisites:
  - "Hooke's law F_s = −kΔx and ideal springs (Topic 2.8)"
  - "Newton's second law written with derivatives, F_net = m d²x/dt² (Topics 1.2 and 2.5)"
  - "Force from potential energy, F_x = −dU/dx, and stability on a U(x) graph (Topic 3.3)"
prerequisiteResources: ["mb-ap-physcm-6.6-study-guide"]
learningObjectives:
  - "Explain how simple harmonic motion differs from other periodic motion"
  - "Locate an equilibrium position by setting the net force to zero, and measure displacement from it"
  - "Test a force law, a data set or a potential energy function for the SHM condition m a_x = −kΔx"
  - "Use Newton's second law to write the SHM equation d²x/dt² = −(k/m)x, including for a vertical spring"
  - "Find the effective spring constant for small oscillations about a stable equilibrium from d²U/dx²"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Derivatives by hand; calculator for arithmetic only. g = 9.8 m/s². Angles in radians. Answers to 2 or 3 significant figures"
related: ["mb-ap-physcm-7.1-revision-notes", "mb-ap-physcm-7.1-practice", "mb-ap-physcm-7.1-checklist"]
next: "mb-ap-physcm-7.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Simple harmonic motion (SHM) is one special kind of periodic motion."
  - "The equilibrium position is where the net force is zero. Measure the displacement x from there."
  - "SHM happens when the net force is a restoring force whose size is proportional to displacement: m a_x = −kΔx, with Δx measured from equilibrium."
  - "Newton's second law then gives d²x/dt² = −(k/m)x. Any system whose equation has this form is in SHM."
  - "Near a minimum of U(x), small oscillations are close to SHM with an effective spring constant k = d²U/dx² at the minimum."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 7.1?"
    answer: "They are separate courses. Physics 1 tests SHM with force data and algebra. Physics C: Mechanics writes Newton's second law as a differential equation, d²x/dt² = −(k/m)x, and finds effective spring constants from potential energy functions with derivatives."
  - question: "Does a constant force, such as gravity, stop the motion being SHM?"
    answer: "No. A constant force only moves the equilibrium position. Measured from the new equilibrium, the net force is still −kx, with the same k."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 7.1 with this title. This guide is the **calculus-based** one. It writes Newton's second law as a differential equation and uses derivatives of potential energy to decide whether motion is simple harmonic. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/7-1-defining-simple-harmonic-motion-shm-study-guide/); do not mix the two when you revise.

## Periodic motion and SHM

Motion that repeats itself in equal time intervals is **periodic**. A ball bouncing on a floor, a planet in orbit and a block on a spring are all periodic.

**Simple harmonic motion (SHM)** is a special case of periodic motion. It is not defined by the shape of the path or by how often the motion repeats. It is defined by the **force** that drives it. To state that force, you need two ideas.

## Equilibrium position and restoring force

The **equilibrium position** is a place where the **net force** on the object or system is **zero**. If the object sits there at rest, it stays at rest.

- A glider on a level air track attached to a horizontal spring: equilibrium is where the spring is relaxed.
- A block hanging from a vertical spring: equilibrium is where the spring's upward pull balances the weight (Worked example 2).

Take the axis along the motion and put **x = 0 at equilibrium**. Then x is the **displacement from equilibrium**.

A **restoring force** points **opposite to the displacement**: back toward equilibrium. When x > 0 it points in −x, and when x < 0 it points in +x.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="pcm71-spr-title pcm71-spr-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm71-spr-title">Restoring force on a block attached to a horizontal spring</title>
<desc id="pcm71-spr-desc">Three drawings of the same block on a smooth floor, attached by a spring to a wall on the left. A dashed vertical line marks the equilibrium position x = 0. Top: the block is to the left of equilibrium at x = −A; an arrow labelled F points right, toward equilibrium. Middle: the block is at equilibrium and the label says net force is zero. Bottom: the block is to the right at x = +A; an arrow labelled F points left, toward equilibrium. The two arrows have the same length because the displacements have the same size.</desc>
<defs><marker id="pcm71-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="320" fill="#ffffff"/>
<path d="M300 20 V300" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 5"/>
<text x="300" y="314" font-size="12" fill="#1d2b44" text-anchor="middle">x = 0 (equilibrium)</text>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<path d="M40 40 V100 M40 140 V200 M40 240 V300"/>
<path d="M40 90 H520 M40 190 H520 M40 290 H520"/>
<polyline points="40,70 62,70 68,60 79,80 91,60 102,80 114,60 126,80 138,60 149,80 161,60 172,80 178,70 190,70"/>
<polyline points="40,170 68,170 78,160 96,180 114,160 132,180 151,160 169,180 188,160 206,180 224,160 242,180 252,170 270,170"/>
<polyline points="40,270 75,270 88,260 112,280 138,260 162,280 188,260 212,280 238,260 262,280 288,260 312,280 325,270 350,270"/>
</g>
<rect x="190" y="50" width="60" height="40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="270" y="150" width="60" height="40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="350" y="250" width="60" height="40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M222 38 H292" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm71-arr)"/>
<path d="M378 238 H308" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm71-arr)"/>
<g font-size="12" fill="#1d2b44">
<text x="258" y="30">F</text><text x="338" y="230">F</text>
<text x="430" y="66">x = −A (left)</text><text x="430" y="82">F points +x</text>
<text x="430" y="166">x = 0</text><text x="430" y="182">F_net = 0</text>
<text x="430" y="266">x = +A (right)</text><text x="430" y="282">F points −x</text>
</g>
</svg>
<figcaption>Figure 1. The restoring force always points toward the equilibrium line. Equal displacements on either side give equal-sized forces in opposite directions.</figcaption>
</figure>

## The condition for SHM

An object moves in SHM when the net force on it is a restoring force whose **size is proportional to the displacement** from equilibrium. Put that force into Newton's second law along x, and you get the equation for this topic:

**m a_x = −kΔx**

The left side is the net force, F_net,x = m a_x. Δx is the displacement **from the equilibrium position**, and k is a positive constant (in N/m). The minus sign makes the force restoring. The proportionality means doubling the displacement doubles the force. For an ideal spring on a level, smooth surface, k is the spring constant from Topic 2.8. For other systems, k is an **effective** spring constant.

If you put the origin at equilibrium, Δx is simply x, so F_net,x = −kx. Now write a_x = d²x/dt²:

**m d²x/dt² = −kx, so d²x/dt² = −(k/m)x**

This is a second-order differential equation. It says the acceleration is proportional to the displacement and opposite to it. It is the **signature of SHM**: any system whose equation of motion can be put in this form, for any variable (a position, an arc length, an angle), is in SHM. Topic 7.2 names the constant √(k/m) the angular frequency ω and uses it for the period. Topic 7.3 gives the solution x(t); you do not need to prove that it solves the equation.

Three equivalent tests for SHM:

1. **Force law.** m a_x = F_net,x = −kΔx about some equilibrium position, with k constant.
2. **Graph.** A plot of net force (or acceleration) against displacement is a straight line through the equilibrium point with a **negative** slope.
3. **Potential energy.** U(x) is a parabola, U = ½kx² + constant, about its minimum, since F_x = −dU/dx = −kx.

## Constant forces shift the equilibrium

Suppose F_net,x = F₀ − kx, where F₀ is constant. Set F_net = 0: equilibrium is at x_e = F₀/k. Let u = x − x_e be the displacement from that point. Then F_net = F₀ − k(u + x_e) = **−ku**. The motion is still SHM, with the same k, centred on x_e. Gravity on a vertical spring is the commonest case.

## Small oscillations about any stable equilibrium

This section is an extension: it combines Topic 7.1 with the stability ideas of Topic 3.3, and uses a second derivative that the Topic 7.1 statements do not ask for directly. Many systems have a force that is not exactly linear. Near a **stable** equilibrium at x₀ (a minimum of U, Topic 3.3), expand U to second order:

U(x) ≈ U(x₀) + ½U″(x₀)(x − x₀)²

The first-derivative term is missing because U′(x₀) = 0 at equilibrium. So for small displacements the force is F_x ≈ −U″(x₀)(x − x₀): **approximately SHM, with k_eff = d²U/dx² at the minimum**. The approximation gets worse as the displacement grows (Worked example 3). At a maximum of U, U″ < 0, the force pushes the object away, and there is no oscillation at all.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="pcm71-u-title pcm71-u-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm71-u-title">Potential energy U = 4x⁴ − 8x² with a parabola fitted at the minimum</title>
<desc id="pcm71-u-desc">Potential energy U in joules from −4 to 6 against position x in metres from −1.5 to 1.5. The solid curve is a double well: it falls from about 5.7 J at x = −1.6 m to a minimum of −4 J at x = −1 m, rises to a local maximum of 0 at x = 0, falls to a second minimum of −4 J at x = +1 m, and rises again. A dashed parabola, U = −4 + 16(x − 1)², touches the curve at the right-hand minimum. Close to x = 1 m the two curves overlap; further away they separate, with the dashed parabola higher on the left side and lower on the right side.</desc>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M152.5 290 V40 M427.5 290 V40"/>
<path d="M70 267.3 H510 M70 221.8 H510 M70 130.9 H510 M70 85.5 H510"/>
</g>
<path d="M70 176.4 H515 M290 300 V35" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="83.8" y="312">−1.5</text><text x="152.5" y="312">−1</text><text x="221.3" y="312">−0.5</text><text x="358.8" y="312">0.5</text><text x="427.5" y="312">1</text><text x="496.3" y="312">1.5</text>
<text x="400" y="328" font-size="13">position, x (m)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="284" y="271">−4</text><text x="284" y="226">−2</text><text x="284" y="173">0</text><text x="284" y="135">2</text><text x="284" y="89">4</text><text x="284" y="44">6</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">potential energy, U (J)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,46.0 76.9,88.5 83.8,125.2 90.6,156.8 97.5,183.5 104.4,205.8 111.2,224.0 118.1,238.5 125.0,249.7 131.9,257.8 138.8,263.3 145.6,266.3 152.5,267.3 159.4,266.4 166.2,264.0 173.1,260.3 180.0,255.5 186.9,249.9 193.8,243.6 200.6,237.0 207.5,230.0 214.4,223.0 221.2,216.1 228.1,209.5 235.0,203.1 241.9,197.3 248.8,192.0 255.6,187.4 262.5,183.5 269.4,180.4 276.2,178.2 283.1,176.8 290.0,176.4 296.9,176.8 303.8,178.2 310.6,180.4 317.5,183.5 324.4,187.4 331.2,192.0 338.1,197.3 345.0,203.1 351.9,209.5 358.8,216.1 365.6,223.0 372.5,230.0 379.4,237.0 386.2,243.6 393.1,249.9 400.0,255.5 406.9,260.3 413.8,264.0 420.6,266.4 427.5,267.3 434.4,266.3 441.2,263.3 448.1,257.8 455.0,249.7 461.9,238.5 468.8,224.0 475.6,205.8 482.5,183.5 489.4,156.8 496.2,125.2 503.1,88.5 510.0,46.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5" points="365.6,193.6 372.5,209.1 379.4,222.7 386.2,234.5 393.1,244.5 400.0,252.7 406.9,259.1 413.8,263.6 420.6,266.4 427.5,267.3 434.4,266.4 441.2,263.6 448.1,259.1 455.0,252.7 461.9,244.5 468.7,234.5 475.6,222.7 482.5,209.1 489.4,193.6"/>
<circle cx="427.5" cy="267.3" r="4" fill="#1d2b44"/>
<circle cx="290" cy="176.4" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="300" y="160" font-size="12" fill="#1d2b44">unstable: U″ &lt; 0</text>
<text x="390" y="290" font-size="12" fill="#1d2b44">stable: U″ = 32 J/m²</text>
<text x="330" y="120" font-size="12" fill="#1d2b44">dashed: parabola −4 + 16(x − 1)²</text>
</svg>
<figcaption>Figure 2. The potential energy in Worked example 3. Near the minimum at x = 1 m, the solid curve and the dashed parabola almost coincide, so small oscillations there are close to SHM. Further out they separate, and the SHM model becomes less accurate.</figcaption>
</figure>

## The pendulum: SHM in an angle

A simple pendulum (bob of mass m on a light string of length ℓ) has a restoring **torque** about the pivot: τ = −mgℓ sin θ. With I = mℓ² and τ = I d²θ/dt² (Topic 5.6):

d²θ/dt² = −(g/ℓ) sin θ

This is **not** exactly the SHM equation, because sin θ is not proportional to θ. For small angles in radians, sin θ ≈ θ, and the equation becomes d²θ/dt² = −(g/ℓ)θ: SHM in the angle. At θ = 0.20 rad (about 11°), sin θ = 0.199, only 0.67% smaller than θ. Topic 7.2 uses this result for the period.

## Worked example 1: is it SHM?

**Question.** Take **+x to the right**. Each of three 0.50 kg objects moves along x, and the net force on it is given (x in m, F in N). For each, find any equilibrium position and decide whether the motion is SHM.

(a) F_a = 6.0 − 40x  (b) F_b = −250x³  (c) F_c = +30x

1. **(a)** Set F_a = 0: x_e = 6.0 ÷ 40 = **0.15 m**. With u = x − 0.15, F_a = −40u. This is a restoring force proportional to displacement from 0.15 m, so the motion **is SHM** with k = 40 N/m. The equation of motion is d²u/dt² = −(40 ÷ 0.50)u = −(80 s⁻²)u. At x = 0.25 m (u = +0.10 m), a_x = −8.0 m/s².
2. **(b)** F_b = 0 only at x = 0. The force is restoring (negative for x > 0, positive for x < 0), so the object oscillates. But F_b/x = −250x² is not constant: at x = 0.10 m the force is −0.25 N, at 0.20 m it is −2.0 N. Doubling x multiplies the force by 8, not 2. The motion is **periodic but not SHM**.
3. **(c)** F_c = 0 at x = 0, but at x = +0.10 m the force is **+3.0 N**, pointing away from equilibrium. Any small push grows. This equilibrium is **unstable**, and there is **no oscillation**.

**Check.** Only (a) passes the straight-line, negative-slope test on an F–x graph. (b) is curved; (c) is straight but has a positive slope.

## Worked example 2: a vertical spring

**Question.** Take **+y upward**. A 0.80 kg block hangs from an ideal spring with k = 240 N/m. (a) How far is the spring stretched at equilibrium? Let y be the block's displacement from equilibrium. (b) Show that the net force is −ky. (c) Find the net force and acceleration at y = −5.0 cm and at y = +5.0 cm, and describe the spring force in each case.

1. **(a)** At equilibrium the spring force balances the weight: kd = mg, so d = (0.80 × 9.8) ÷ 240 = **0.0327 m ≈ 3.3 cm**.
2. **(b)** When the block is at displacement y, the stretch is d − y. Spring force (up) = +k(d − y). Net force: F_net,y = k(d − y) − mg = (kd − mg) − ky = **−ky**, since kd = mg. So d²y/dt² = −(k/m)y = −(300 s⁻²)y: SHM about the equilibrium position.
3. **(c)** At y = −0.050 m: stretch = 0.0827 m, spring force = 19.8 N up, weight = 7.84 N down. F_net = **+12 N**, a_y = **+15 m/s²**.
4. At y = +0.050 m: stretch = 0.0327 − 0.050 = −0.0173 m. The spring is **compressed** by 1.7 cm and pushes **down** with 4.16 N. F_net = −4.16 − 7.84 = **−12 N**, a_y = **−15 m/s²**.

**Interpretation.** The net force has the same size at equal distances above and below equilibrium, as −ky requires. The spring force alone does not: it is 19.8 N in one case and 4.16 N in the other. The restoring force in SHM is the **net** force, not the spring force.

## Worked example 3: small oscillations in a double well

**Question.** Take **+x to the right**. A 0.50 kg particle moves along x in a system with U(x) = (4.0 J/m⁴)x⁴ − (8.0 J/m²)x² (Figure 2). (a) Find the equilibrium positions and their stability. (b) Find k_eff for small oscillations about x = 1.0 m and write the approximate equation of motion. (c) Compare the exact force with the SHM model at x = 1.01 m and x = 1.05 m.

1. **(a)** F_x = −dU/dx = −16x³ + 16x = 16x(1 − x²). F_x = 0 at **x = 0 and x = ±1.0 m**. U″ = 48x² − 16. At x = ±1.0 m, U″ = +32 J/m² > 0: **stable** (minima, U = −4.0 J). At x = 0, U″ = −16 J/m² < 0: **unstable** (a maximum).
2. **(b)** k_eff = U″(1.0) = **32 N/m**. For small u = x − 1.0, d²u/dt² ≈ −(32 ÷ 0.50)u = **−(64 s⁻²)u**.
3. **(c)** At x = 1.01 m: exact F = −0.325 N, model −32 × 0.01 = −0.320 N. They differ by about 1.5%.
4. At x = 1.05 m: exact F = −1.72 N, model −1.60 N. They now differ by about 7%. On the other side, at x = 0.95 m, exact F = +1.48 N against the model's +1.60 N.

**Interpretation.** The SHM model is excellent for small displacements and gets worse for larger ones. The errors also differ in sign on the two sides, because the well is not symmetric about x = 1.0 m.

## Common misconceptions

- **"Any repeating motion is SHM."** Periodic is not enough; the net force must be −kΔx (Worked example 1(b)).
- **"Restoring force means spring force."** In a vertical spring, the restoring force is the net of spring force and weight (Worked example 2).
- **"Gravity spoils SHM."** A constant force only shifts the equilibrium.
- **Measuring x from the wrong point.** x must be measured from equilibrium, not from the relaxed spring length, when a constant force acts.
- **"A positive force constant means SHM."** F = +kx pushes away from equilibrium: no oscillation.
- **Forgetting the small-oscillation condition.** k_eff = U″ is only an approximation near the minimum; pendulums need small angles.
- **Using degrees in sin θ ≈ θ.** The approximation needs radians.

## Where this leads

Topic 7.2 turns d²x/dt² = −(k/m)x into the period and frequency of the motion, for springs and small-angle pendulums. Topic 7.3 gives x(t) and the velocity and acceleration graphs, Topic 7.4 adds energy, and Topic 7.5 extends the pendulum to rigid bodies. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/7-1-defining-simple-harmonic-motion-shm-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/7-1-defining-simple-harmonic-motion-shm-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/7-1-defining-simple-harmonic-motion-shm-checklist/). When you are ready, move on to [Topic 7.2, Frequency and Period of SHM](/advanced-course-resources/physics-c-mechanics/7-2-frequency-period-shm-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
