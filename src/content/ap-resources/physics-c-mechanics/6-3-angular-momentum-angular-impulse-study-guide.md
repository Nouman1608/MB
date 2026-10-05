---
resourceId: "mb-ap-physcm-6.3-study-guide"
title: "Angular Momentum and Angular Impulse: Study Guide (Physics C: Mechanics 6.3)"
description: "Calculus-based angular momentum: L = Iω and L = r × p, the role of the chosen axis, angular impulse as ∫τ dt, and τ_net = dL/dt derived from Newton's second law."
course: "physics-c-mechanics"
unit: 6
topics: ["6.3"]
resourceType: "study-guide"
prerequisites:
  - "Linear momentum and impulse, J = ∫F dt (Topics 4.1 and 4.2)"
  - "Torque as τ = r × F and Newton's second law in rotational form, τ_net = Iα (Topics 5.3 and 5.6)"
  - "Vector (cross) products in components; integrating polynomials"
prerequisiteResources: ["mb-ap-physcm-6.2-study-guide"]
learningObjectives:
  - "Calculate the angular momentum of a rigid body about a fixed axis from L = Iω, with a sign or direction"
  - "Calculate the angular momentum of a point object about a chosen point from L = r × p, and explain why the choice of point matters"
  - "Find the angular impulse of a torque that changes with time by integration or from the area under a torque–time graph"
  - "Derive τ_net = dL/dt and the rotational impulse–momentum theorem from Newton's second law"
  - "Sketch and interpret torque–time and angular momentum–time graphs, using slopes and areas"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Integrals by hand; calculator for arithmetic only. g = 9.8 m/s². Answers to 2 or 3 significant figures"
related: ["mb-ap-physcm-6.3-revision-notes", "mb-ap-physcm-6.3-practice", "mb-ap-physcm-6.3-checklist"]
next: "mb-ap-physcm-6.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "A rigid body turning about a fixed axis has angular momentum L = Iω, in kg·m²/s, with the same sign as ω."
  - "A point object has angular momentum L = r × p about a chosen point, of size mvr sin φ. It can be nonzero even when the object moves in a straight line."
  - "Angular momentum always belongs to a chosen axis or point. Change the point and L changes."
  - "Angular impulse is ∫τ dt: the signed area under a torque–time graph. It points the same way as the torque."
  - "τ_net = dL/dt, so the angular impulse of the net torque equals the change in angular momentum, ΔL = ∫τ_net dt."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 6.3?"
    answer: "They are separate courses. Physics 1 uses L = Iω, L = mvr sin θ and areas of simple shapes on torque–time graphs. Physics C: Mechanics also writes L = r × p as a vector product, integrates torques that change with time, and derives τ_net = dL/dt from Newton's second law."
  - question: "Is angular impulse measured in the same unit as angular momentum?"
    answer: "Yes. N·m·s and kg·m²/s are the same unit, because 1 N = 1 kg·m/s². That is why the two can be set equal in ΔL = ∫τ_net dt."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 6.3 called Angular Momentum and Angular Impulse. This guide is the **calculus-based** one. It writes angular momentum as the vector product r × p, integrates torques that change with time, and derives τ_net = dL/dt from Newton's second law. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/6-3-angular-momentum-angular-impulse-study-guide/); do not mix the two when you revise.

## The rotational partner of momentum

In Unit 4, linear momentum p = mv measured "how much motion" an object has, and an impulse ∫F dt changed it. Rotation has the same pair of ideas:

| Translation (Unit 4) | Rotation (this topic) |
|---|---|
| momentum p = mv | angular momentum L = Iω (rigid body) or L = r × p (point object) |
| impulse J = ∫F dt | angular impulse = ∫τ dt |
| F_net = dp/dt | τ_net = dL/dt |
| J_net = Δp | ∫τ_net dt = ΔL |

The unit of angular momentum is **kg·m²/s**. The unit of angular impulse is **N·m·s**. They are the same, since 1 N = 1 kg·m/s².

## Angular momentum of a rigid body

For a rigid body turning about a fixed axis, every particle moves in a circle around that axis with the same ω. A particle of mass mᵢ at distance rᵢ has speed rᵢω, so its angular momentum about the axis is rᵢ(mᵢrᵢω) = mᵢrᵢ²ω. Add up all the particles:

**L = (Σmᵢrᵢ²)ω = Iω**

Here I is the rotational inertia **about the same axis** (Topic 5.4). Choose a positive sense of rotation, and L carries the same sign as ω. For example, a drum with I = 0.30 kg·m² turning clockwise at 6.0 rad/s, with counterclockwise positive, has L = 0.30 × (−6.0) = **−1.8 kg·m²/s**.

As a vector, L points along the axis, given by the right-hand rule: curl the fingers of your right hand in the sense of rotation, and your thumb points along L.

## Angular momentum of a point object

For a single object treated as a point, angular momentum is defined **about a chosen point O**:

**L = r × p = m(r × v)**

where r is the position vector from O to the object. Its size is

**L = rmv sin φ = mv d**

where φ is the angle between r and v, and **d = r sin φ** is the perpendicular distance from O to the line along which the object is moving. In the xy-plane, with z out of the page, the vector product reduces to one component:

**L_z = x p_y − y p_x**

Positive L_z means counterclockwise as you look at the page; negative means clockwise.

**An object moving in a straight line can have angular momentum.** It is not turning, but its position vector from O is sweeping round. Figure 1 shows a 0.50 kg object moving at 4.0 m/s in the +x direction along the line y = 2.0 m.

- At A (x = −3.0 m): L_z = x(0) − (2.0)(0.50 × 4.0) = **−4.0 kg·m²/s**.
- At B (x = +3.0 m): the same, −4.0 kg·m²/s. The distance r is the same, and so is sin φ. In fact, **any** point on the line gives the same answer, because d = 2.0 m never changes. With no net force on the object, its angular momentum about O is constant.
- About P, a point on the line of motion, d = 0, so **L = 0**.
- About Q at (0, −1.0 m), d = 3.0 m, so L_z = −6.0 kg·m²/s.

So the angular momentum of a moving object depends on four things: its **mass**, its **speed**, its **distance** from the reference point and the **angle** between r and v. The last two combine into d. Always say which point or axis you are using.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="pcm-63-rp-title pcm-63-rp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm-63-rp-title">Angular momentum of an object moving in a straight line</title>
<desc id="pcm-63-rp-desc">A horizontal dashed line shows the path of an object moving to the right at constant velocity, 2.0 metres above a reference point O. The object is drawn at two positions, A on the left and B on the right, each with a short solid velocity arrow pointing right. Solid position-vector arrows run from O to A and from O to B. A dotted vertical line from O up to the path is labelled d = 2.0 m, the perpendicular distance. At A, a small arc marks the angle phi between the extended position vector and the velocity. A point P on the path directly above O is labelled L = 0 about P. A text box states that about O the angular momentum is m v d = 4.0 kilogram metres squared per second, clockwise, at both A and B.</desc>
<defs>
<marker id="pcm-63-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
</defs>
<rect x="0" y="0" width="560" height="320" fill="#ffffff"/>
<path d="M40 160 H530" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="8 5"/>
<path d="M280 260 V160" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<path d="M280 260 L136 164" stroke="#1d2b44" stroke-width="2" marker-end="url(#pcm-63-arr)"/>
<path d="M280 260 L424 164" stroke="#1d2b44" stroke-width="2" marker-end="url(#pcm-63-arr)"/>
<path d="M130 160 L85 130" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="3 3"/>
<path d="M155 160 A25 25 0 0 0 109.2 146.1" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M130 160 H200" stroke="#1d2b44" stroke-width="3" marker-end="url(#pcm-63-arr)"/>
<path d="M430 160 H500" stroke="#1d2b44" stroke-width="3" marker-end="url(#pcm-63-arr)"/>
<circle cx="130" cy="160" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="430" cy="160" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="280" cy="260" r="5" fill="#1d2b44"/>
<circle cx="280" cy="160" r="4" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="120" y="186">A</text>
<text x="424" y="186">B</text>
<text x="176" y="150">v</text>
<text x="476" y="150">v</text>
<text x="128" y="128">φ</text>
<text x="190" y="226">r_A</text>
<text x="350" y="226">r_B</text>
<text x="288" y="216">d = 2.0 m</text>
<text x="290" y="278">O (reference point)</text>
<text x="246" y="148">P: L = 0 about P</text>
<text x="40" y="40">m = 0.50 kg, v = 4.0 m/s along y = 2.0 m</text>
<text x="40" y="58">About O: L = rmv sin φ = mvd = 4.0 kg·m²/s, clockwise,</text>
<text x="40" y="76">the same at A and at B (L_z = −4.0 kg·m²/s)</text>
</g>
</svg>
<figcaption>Figure 1. An object moving in a straight line at constant velocity. About O, its angular momentum has size mvd, where d is the perpendicular distance from O to the path, so it is the same at A and B. About P, on the path itself, it is zero. The thick arrows are velocities; the thinner solid arrows are position vectors from O.</figcaption>
</figure>

## Angular impulse

A torque acting for a time changes rotation, just as a force acting for a time changes motion. The **angular impulse** of a torque over a time interval is

**angular impulse = ∫τ dt** (from t₁ to t₂)

If the torque is constant, this is simply τΔt. If it changes with time, integrate, or find the **signed area under the torque–time graph**. Area above the t-axis is a positive angular impulse; area below is negative. Angular impulse has the **same direction as the torque** that delivers it, not necessarily the direction the body is turning.

Be careful not to confuse the two areas you now know for a torque graph. The area under τ against **θ** is work (Topic 6.2). The area under τ against **t** is angular impulse.

## The rotational impulse–momentum theorem

**Rigid body, fixed axis.** Start from Newton's second law in rotational form, τ_net = Iα (Topic 5.6). Since α = dω/dt and I is constant for a rigid body:

τ_net = I(dω/dt) = d(Iω)/dt, so **τ_net = dL/dt**

Multiply by dt and integrate from t₁ to t₂:

**∫τ_net dt = L₂ − L₁ = ΔL**

The angular impulse of the **net** torque equals the change in angular momentum. Two graph readings follow straight away:

- The **slope** of an L–t graph is the net torque.
- The **area** under a τ_net–t graph is the change in L.

**Point object (extension of the same idea).** Differentiate L = r × p with the product rule:

dL/dt = (dr/dt × p) + (r × dp/dt) = (v × mv) + (r × F_net)

The first term is zero, because the vector product of a vector with itself (or a parallel vector) vanishes. The second term is the torque of the net force about O. So again **dL/dt = τ_net**. This is why the object in Figure 1 keeps a constant L about any fixed point: with no net force, there is no torque.

**Comparing initial and final values.** With a sign convention on a fixed axis, ΔL = L₂ − L₁ with signs included. If the body keeps turning the same way, the size of ΔL is the difference of the sizes, |L₂| − |L₁|. If it reverses, the sizes add: going from −1.8 to +3.6 kg·m²/s is a change of 5.4 kg·m²/s, not 1.8.

**Comparing scenarios.** The same angular impulse gives every body the same ΔL, whatever its rotational inertia. A body with a larger I ends up with a smaller change in ω, since Δω = ΔL/I. A force pushing at a larger radius for the same time delivers a larger angular impulse, because the torque is larger.

## Worked example 1: a reversing washing-machine drum

**Question.** Take counterclockwise (seen from the front) as positive. A washing-machine drum with its load has rotational inertia I = 0.30 kg·m² about its axle. At t = 0 it is turning clockwise at 6.0 rad/s. The motor then applies a net torque τ(t) = 0.90t − 0.15t² (τ in N·m, t in s) for 0 ≤ t ≤ 6.0 s. (a) Find the angular impulse delivered over the 6.0 s. (b) Find L(t) and the angular velocity at 6.0 s. (c) Find when the drum is momentarily at rest. (d) Describe the L–t graph.

**(a) Angular impulse.**

1. ∫₀^6.0 (0.90t − 0.15t²) dt = [0.45t² − 0.05t³]₀^6.0 = 16.2 − 10.8 = **+5.4 N·m·s**.
2. It is positive because the torque is counterclockwise throughout, even though the drum starts clockwise.

**(b) Angular momentum and final ω.**

1. L₀ = Iω₀ = 0.30 × (−6.0) = −1.8 kg·m²/s.
2. L(t) = L₀ + ∫₀ᵗ τ dt = **−1.8 + 0.45t² − 0.05t³** (kg·m²/s).
3. L(6.0) = −1.8 + 5.4 = +3.6 kg·m²/s, so ω = 3.6/0.30 = **+12 rad/s**, counterclockwise.

**(c) Momentarily at rest.**

1. Set L = 0: 0.45t² − 0.05t³ = 1.8. Solving (numerically, or by trial) gives **t ≈ 2.3 s** (2.32 s), the only root between 0 and 6.0 s.
2. Before this the drum turns clockwise and slows; after it, it turns counterclockwise and speeds up.

**(d) The L–t graph (Figure 2).**

1. Its slope is τ(t). At t = 0 the torque is zero, so the graph starts flat.
2. The torque is greatest at t = 3.0 s (dτ/dt = 0.90 − 0.30t = 0), where τ = 1.35 N·m. That is where the L–t graph is steepest.
3. At t = 6.0 s the torque is zero again, so the graph levels off at +3.6 kg·m²/s.

**Check.** A student who multiplies the largest torque by the whole time gets 1.35 × 6.0 = 8.1 N·m·s and ω = 21 rad/s, far too high. The torque is that large only at one instant, so you must integrate.

<figure>
<svg viewBox="0 0 560 360" role="img" aria-labelledby="pcm-63-tl-title pcm-63-tl-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm-63-tl-title">Torque–time and angular momentum–time graphs for the washing-machine drum</title>
<desc id="pcm-63-tl-desc">Two graphs share a time axis from 0 to 6 seconds. Top: torque in newton metres against time. The curve is an arch starting at 0, rising to a peak of 1.35 N·m at 3 s and returning to 0 at 6 s; the region under it is shaded and labelled area equals angular impulse, +5.4 N·m·s. Bottom: angular momentum in kilogram metres squared per second against time, axis from −2 to 4. The curve starts flat at −1.8, rises slowly, crosses zero at about 2.3 s, is steepest at 3 s where a dashed tangent of slope 1.35 is drawn, and levels off at +3.6 at 6 s.</desc>
<rect x="0" y="0" width="560" height="360" fill="#ffffff"/>
<polygon fill="#fdf6e3" stroke="none" points="70.0,150.0 84.0,137.2 98.0,125.4 112.0,114.4 126.0,104.2 140.0,95.0 154.0,86.6 168.0,79.2 182.0,72.6 196.0,66.8 210.0,62.0 224.0,58.0 238.0,55.0 252.0,52.8 266.0,51.4 280.0,51.0 294.0,51.4 308.0,52.8 322.0,55.0 336.0,58.0 350.0,62.0 364.0,66.8 378.0,72.6 392.0,79.2 406.0,86.6 420.0,95.0 434.0,104.2 448.0,114.4 462.0,125.4 476.0,137.2 490.0,150.0"/>
<path d="M70 150 H510 M70 155 V30" stroke="#1d2b44" stroke-width="2" fill="none"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,150.0 84.0,137.2 98.0,125.4 112.0,114.4 126.0,104.2 140.0,95.0 154.0,86.6 168.0,79.2 182.0,72.6 196.0,66.8 210.0,62.0 224.0,58.0 238.0,55.0 252.0,52.8 266.0,51.4 280.0,51.0 294.0,51.4 308.0,52.8 322.0,55.0 336.0,58.0 350.0,62.0 364.0,66.8 378.0,72.6 392.0,79.2 406.0,86.6 420.0,95.0 434.0,104.2 448.0,114.4 462.0,125.4 476.0,137.2 490.0,150.0"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="154">0</text><text x="62" y="81">1.0</text><text x="62" y="55">1.35</text>
</g>
<text x="20" y="95" font-size="12" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 95)">τ (N·m)</text>
<text x="200" y="128" font-size="12" fill="#1d2b44" font-weight="600">area = angular impulse = +5.4 N·m·s</text>
<text x="290" y="42" font-size="12" fill="#1d2b44">peak 1.35 N·m at 3.0 s</text>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M70 230 H510 M70 310 H510 M70 190 H510"/>
<path d="M280 30 V330"/>
</g>
<path d="M70 270 H510 M70 335 V180" stroke="#1d2b44" stroke-width="2" fill="none"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,306.0 84.0,305.6 98.0,304.6 112.0,303.0 126.0,300.8 140.0,298.0 154.0,294.8 168.0,291.1 182.0,287.1 196.0,282.7 210.0,278.0 224.0,273.1 238.0,268.0 252.0,262.7 266.0,257.4 280.0,252.0 294.0,246.6 308.0,241.3 322.0,236.0 336.0,230.9 350.0,226.0 364.0,221.3 378.0,216.9 392.0,212.9 406.0,209.2 420.0,206.0 434.0,203.2 448.0,201.0 462.0,199.4 476.0,198.4 490.0,198.0"/>
<path d="M210 279 L350 225" stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="7 5"/>
<circle cx="232.5" cy="270" r="4" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="314">−2</text><text x="62" y="274">0</text><text x="62" y="234">2</text><text x="62" y="194">4</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="350">0</text><text x="140" y="350">1</text><text x="210" y="350">2</text><text x="280" y="350">3</text><text x="350" y="350">4</text><text x="420" y="350">5</text><text x="490" y="350">6</text>
</g>
<text x="530" y="350" font-size="12" fill="#1d2b44" text-anchor="end">t (s)</text>
<text x="20" y="260" font-size="12" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 260)">L (kg·m²/s)</text>
<g font-size="12" fill="#1d2b44">
<text x="80" y="326">starts at −1.8, slope 0</text>
<text x="240" y="290">L = 0 at 2.3 s</text>
<text x="80" y="215">dashed tangent at 3.0 s: slope 1.35 N·m</text>
<text x="420" y="190">+3.6 at 6.0 s</text>
</g>
</svg>
<figcaption>Figure 2. Worked example 1, counterclockwise positive. Top: the shaded area under the torque–time graph is the angular impulse, +5.4 N·m·s. Bottom: L(t) rises by exactly that amount, from −1.8 to +3.6 kg·m²/s. Its slope at any time equals the torque, so it is flat at 0 s and 6 s and steepest at 3.0 s.</figcaption>
</figure>

## Worked example 2: a ball leaving a table, about a point on the floor

**Question.** Take +x to the right, +y up and z out of the page. A small ball of mass 0.20 kg slides without rolling along a frictionless table top at 3.0 m/s, then leaves the edge and falls 0.80 m to the floor. The reference point O is on the floor directly below the table edge. (a) Find the ball's angular momentum about O while it slides on the table. (b) Derive L_z(t) about O after it leaves the edge, and show that dL_z/dt equals the torque of gravity about O. (c) Find L_z just before it lands. (d) What is the angular momentum about the table edge E while the ball slides?

**(a) On the table.**

1. The ball moves along a line 0.80 m above O, so d = 0.80 m and L = mvd = 0.20 × 3.0 × 0.80 = 0.48 kg·m²/s.
2. Direction: L_z = x p_y − y p_x = 0 − (0.80)(0.60) = **−0.48 kg·m²/s** (clockwise).
3. It stays constant: gravity and the normal force cancel, so there is no net force and no net torque.

**(b) After leaving the edge** (t = 0 at the edge).

1. Position: x = v₀t, y = h − ½gt². Momentum: p_x = mv₀, p_y = −mgt.
2. L_z = x p_y − y p_x = (v₀t)(−mgt) − (h − ½gt²)(mv₀) = **−mv₀h − ½mgv₀t²**.
3. Differentiate: dL_z/dt = −mgv₀t.
4. Torque of gravity about O: τ_z = x F_y − y F_x = (v₀t)(−mg) − 0 = −mgv₀t. ✓ The two agree, so τ_net = dL/dt holds here.

**(c) Just before landing.**

1. Fall time: t = √(2h/g) = √(1.6/9.8) = 0.404 s.
2. Angular impulse of gravity: −½mgv₀t² = −½mgv₀(2h/g) = −mv₀h = −0.48 kg·m²/s.
3. L_z = −0.48 − 0.48 = **−0.96 kg·m²/s**: twice the value on the table.

**(d) About E.** The table edge lies on the ball's line of motion, so d = 0 and **L = 0** while it slides. The same ball, at the same moment, has different angular momenta about O and about E.

**Interpretation.** Gravity points straight down, but about O it has a lever arm that grows as the ball moves out horizontally. That growing torque steadily adds clockwise angular momentum.

## Common misconceptions

- **"Only spinning objects have angular momentum."** A point object moving in a straight line has L = mvd about any point not on its path.
- **"Angular momentum is a property of the object alone."** It depends on the chosen axis or point. Always name it.
- **Using L = Iω for a point object moving in a straight line.** Use r × p, or mvd.
- **Angular impulse = τΔt for a changing torque.** Integrate τ(t), or find the area under the graph.
- **Confusing the area under τ–θ (work) with the area under τ–t (angular impulse).**
- **Dropping the sign of the initial angular momentum.** If the body reverses, the change is the sum of the sizes.
- **"Angular impulse points the way the body is turning."** It points the way the torque acts.
- **"Zero torque at an instant means zero angular momentum."** Zero torque means zero slope on the L–t graph, not L = 0.

## Where this leads

Topic 6.4, Conservation of Angular Momentum, applies τ_net = dL/dt to whole systems: when no net external torque acts, the total L stays constant, even if the system changes shape. Topic 6.6 uses the same idea for orbiting satellites. Next, try the [practice questions](/advanced-course-resources/physics-c-mechanics/6-3-angular-momentum-angular-impulse-practice/), then use the [revision notes](/advanced-course-resources/physics-c-mechanics/6-3-angular-momentum-angular-impulse-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/6-3-angular-momentum-angular-impulse-checklist/). When you are ready, move on to [Topic 6.4, Conservation of Angular Momentum](/advanced-course-resources/physics-c-mechanics/6-4-conservation-angular-momentum-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
