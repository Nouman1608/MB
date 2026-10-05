---
resourceId: "mb-ap-physcm-6.2-study-guide"
title: "Torque and Work: Study Guide (Physics C: Mechanics 6.2)"
description: "Calculus-based work done by torques: W = ∫τ dθ derived from force work, signs of work, area under a torque–angle graph, and the rotational work–energy theorem from τ = Iα."
course: "physics-c-mechanics"
unit: 6
topics: ["6.2"]
resourceType: "study-guide"
prerequisites:
  - "Work as W = ∫F·dr and the work–energy theorem (Topics 3.1 and 3.2)"
  - "Torque τ = rF sin φ and Newton's second law in rotational form, τ_net = Iα (Topics 5.3 and 5.6)"
  - "Rotational kinetic energy K = ½Iω² (Topic 6.1)"
prerequisiteResources: ["mb-ap-physcm-6.1-study-guide"]
learningObjectives:
  - "Explain why a torque transfers energy only when the body turns through an angle while the torque acts"
  - "Derive W = ∫τ dθ from the work done by a force on a point of a rotating body"
  - "Calculate the work done by constant and angle-dependent torques, with correct signs, including from the area under a τ–θ graph"
  - "Derive the rotational work–energy theorem from τ_net = Iα using the chain rule, and use it to find angular velocities"
  - "Compare the work and energy changes produced by different torques, angles and rotational inertias"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Integrals by hand; calculator for arithmetic only. Angles must be in radians. Answers to 2 or 3 significant figures"
related: ["mb-ap-physcm-6.2-revision-notes", "mb-ap-physcm-6.2-practice", "mb-ap-physcm-6.2-checklist"]
next: "mb-ap-physcm-6.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "A torque does work only if the body turns while the torque acts: W = ∫τ dθ, with θ in radians."
  - "For a constant torque, W = τΔθ. For a torque that changes with angle, integrate or find the area under the τ–θ graph."
  - "Work is positive when the torque acts in the direction of rotation, negative when it opposes it, and zero if τ = 0 or Δθ = 0."
  - "For a rigid body on a fixed axis, the net work by all torques equals the change in rotational kinetic energy: ∫τ_net dθ = ½Iω² − ½Iω₀²."
  - "Torque is measured in N·m and work in J. They share base units, but a torque is not an energy."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 6.2?"
    answer: "They are separate courses. Physics 1 uses W = τΔθ and finds areas of simple shapes on torque–angle graphs. Physics C: Mechanics writes W = ∫τ dθ, integrates torques that depend on angle, and derives the work–energy theorem from τ = Iα with the chain rule."
  - question: "Why must the angle be in radians?"
    answer: "The derivation uses arc length ds = r dθ, which is only true for θ in radians. Using revolutions or degrees gives a number that is not in joules."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 6.2 called Torque and Work. This guide is the **calculus-based** one. It derives W = ∫τ dθ, integrates torques that change with angle, and builds the rotational work–energy theorem from τ = Iα. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/6-2-torque-work-study-guide/); do not mix the two when you revise.

## A torque transfers energy only through an angle

In Topic 3.2, a force does work on an object only if the point where it acts moves along the line of the force. The rotational version is similar: **a torque transfers energy into or out of a rigid body only if the body turns through an angle while the torque acts.**

- A mechanic leans on a spanner but the rusted nut does not move. There is a large torque, but Δθ = 0, so **no work** is done and no energy is transferred to the nut.
- An electric drill turns a bit through many revolutions while exerting a torque in the direction of rotation. Energy flows from the motor into the bit: **positive work**.
- Friction in a bearing exerts a torque against the rotation. Energy leaves the rotating body: **negative work**.

## From force work to torque work

Take a rigid body turning about a fixed axis through O. A force F acts at point P, a distance r from the axis, at angle φ between the position vector r and F (Figure 1).

1. When the body turns through a small angle dθ, point P moves along a circular arc of length **ds = r dθ** (θ in radians). The displacement is tangent to the circle.
2. Only the **tangential** component of the force, F_t = F sin φ, lies along that displacement. The radial component, F cos φ, is perpendicular to it and does no work.
3. So the work done is dW = F_t ds = (F sin φ)(r dθ) = (rF sin φ) dθ.
4. The bracket is the torque about the axis from Topic 5.3: **τ = rF sin φ**. So **dW = τ dθ**.
5. Add up over the whole rotation from θ₁ to θ₂:

**W = ∫ τ dθ** (from θ₁ to θ₂)

If the torque is constant, it comes outside the integral: **W = τΔθ**.

**Units.** τ in N·m times θ in rad gives N·m = J, because the radian is dimensionless. Torque and energy share base units, but they are different quantities: always write torques in N·m and work in J.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="pcm-62-arc-title pcm-62-arc-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm-62-arc-title">Work done by a force on a point of a rotating body</title>
<desc id="pcm-62-arc-desc">A circle of radius r centred on the axis O represents the path of point P on a rotating body. A solid radius line runs from O to P, which is 30 degrees above the horizontal on the right. A thick solid arrow labelled F acts at P, pointing mostly upward and slightly outward. It is split into two dashed component arrows: a long tangential component F sin φ along the tangent to the circle, and a shorter radial component F cos φ pointing directly away from O. A short thick arc from P to a point slightly further counterclockwise is labelled ds = r dθ, and the small angle dθ is marked at O between the two radius lines. A curved arrow shows the body turning counterclockwise.</desc>
<defs>
<marker id="pcm-62-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
</defs>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<circle cx="200" cy="190" r="110" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 4"/>
<circle cx="200" cy="190" r="5" fill="#1d2b44"/>
<path d="M200 190 L295.3 135" stroke="#1d2b44" stroke-width="2"/>
<path d="M200 190 L270.7 105.7" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="3 3"/>
<path d="M295.3 135 A110 110 0 0 0 270.7 105.7" fill="none" stroke="#1d2b44" stroke-width="5"/>
<path d="M232 171.5 A37 37 0 0 0 223.8 161.6" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M295.3 135 L307.3 37" stroke="#1d2b44" stroke-width="3" marker-end="url(#pcm-62-arr)"/>
<path d="M295.3 135 L255.3 65.7" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#pcm-62-arr)"/>
<path d="M295.3 135 L347.3 105" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#pcm-62-arr)"/>
<path d="M120 300 A115 115 0 0 1 90 230" fill="none" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#pcm-62-arr)"/>
<g font-size="12" fill="#1d2b44">
<text x="180" y="212">O (axis)</text>
<text x="240" y="178">r</text>
<text x="236" y="150">dθ</text>
<text x="302" y="148">P</text>
<text x="314" y="44">F</text>
<text x="168" y="62">tangential: F sin φ</text>
<text x="352" y="124">radial: F cos φ</text>
<text x="352" y="140">(does no work)</text>
<text x="190" y="112">ds = r dθ</text>
<text x="30" y="290">rotation</text>
<text x="360" y="200">dW = F sin φ · r dθ = τ dθ</text>
</g>
</svg>
<figcaption>Figure 1. When the body turns through dθ, point P moves a distance ds = r dθ along the tangent. Only the tangential component of F does work on it, so dW = (F sin φ)(r dθ) = τ dθ. The thick arc is ds; the solid arrow is F; the dashed arrows are its components.</figcaption>
</figure>

## Positive, negative and zero work

Choose a positive sense of rotation (for example, counterclockwise positive). Then τ and dθ carry signs, and τ dθ gives the sign of the work automatically:

| Situation | Sign of τ dθ | Work |
|---|---|---|
| Torque in the same sense as the rotation | + | positive: energy in |
| Torque opposite to the rotation (friction, brakes) | − | negative: energy out |
| Force through the axis, or along the radius | τ = 0 | zero |
| Body does not turn (Δθ = 0) | dθ = 0 | zero |

**A collection of torques.** Each torque does its own work, W_i = ∫τ_i dθ. Because every point of a rigid body turns through the same dθ, the total is W_net = ∫(τ₁ + τ₂ + …) dθ = **∫τ_net dθ**.

## The rotational work–energy theorem

Start from Newton's second law in rotational form (Topic 5.6), for a rigid body on a fixed axis: τ_net = Iα.

1. Use the chain rule to write α in terms of angle: α = dω/dt = (dω/dθ)(dθ/dt) = **ω dω/dθ**.
2. So τ_net = Iω dω/dθ, which rearranges to τ_net dθ = Iω dω.
3. Integrate from (θ₀, ω₀) to (θ, ω): ∫τ_net dθ = I∫ω dω = **½Iω² − ½Iω₀²**.

**W_net = ΔK_rot**

This is the rotational partner of the translational work–energy theorem from Topic 3.2, and it uses the same chain-rule step as the derivation of v² = v₀² + 2a(x − x₀) in Topic 1.2. It needs a **rigid** body (so I is constant) and a **fixed axis**. It also explains the straight K–θ graph from Topic 6.1: with a constant net torque, K grows by τ_net for every radian.

## Area under a torque–angle graph

Since W = ∫τ dθ, the work done by a torque between two angles is the **signed area** between its τ–θ graph and the θ-axis. Area above the axis is positive work; area below is negative work. When a torque changes with angle, the area is often easier than a formula: count squares, use trapezia, or integrate the equation of the line. Figure 2 shows this for Worked example 1.

**Comparing scenarios.** The theorem lets you compare without solving everything:

- Doubling a constant torque, or doubling the angle it acts through, doubles the work and so doubles the change in rotational kinetic energy.
- The same work gives the same change in kinetic energy **whatever the rotational inertia**. A body with larger I ends up with a smaller ω, because K = ½Iω².
- A torque that changes with angle does not do equal work in equal angles. Look at where the graph is high.

## Worked example 1: a motor whose torque falls with angle

**Question.** Take counterclockwise as positive. A grinding wheel with rotational inertia I = 0.40 kg·m² starts from rest. A motor drives it with a torque that falls as the wheel turns: τ_m(θ) = 12 − 1.5θ (τ in N·m, θ in rad) for 0 ≤ θ ≤ 8.0 rad. A constant friction torque of 1.0 N·m opposes the rotation throughout. (a) Find the work done by the motor and by friction over the 8.0 rad. (b) Find the wheel's angular velocity at θ = 8.0 rad. (c) Find the greatest angular velocity, and the angle where it happens.

**(a) Work by each torque.**

1. Motor: W_m = ∫₀^8.0 (12 − 1.5θ) dθ = [12θ − 0.75θ²]₀^8.0 = 96 − 48 = **+48 J**. On Figure 2 this is the triangle under the motor line: ½ × 8.0 rad × 12 N·m = 48 J. ✓
2. Friction: τ_f = −1.0 N·m (it opposes counterclockwise rotation). W_f = ∫₀^8.0 (−1.0) dθ = **−8.0 J**.

**(b) Final angular velocity.**

1. W_net = 48 − 8.0 = 40 J = ½Iω² − 0.
2. ω = √(2 × 40/0.40) = √200 = **14.1 rad/s ≈ 14 rad/s**.

**(c) Greatest angular velocity.**

1. ω is greatest where dω/dt = α = 0, that is where τ_net = 0: 12 − 1.5θ − 1.0 = 0, so θ = 7.33 rad.
2. W_net up to there: ∫₀^7.33 (11 − 1.5θ) dθ = 11 × 7.33 − 0.75 × 7.33² = 40.3 J.
3. ω_max = √(2 × 40.3/0.40) = **14.2 rad/s**, at **θ = 7.3 rad**. After that, friction exceeds the motor torque, net work is negative, and the wheel slows slightly before θ = 8.0 rad.

**Check.** A student who treats the motor torque as a constant 12 N·m gets W_m = 96 J and ω ≈ 21 rad/s, far too high. The torque falls with angle, so you must integrate (or use the area).

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="pcm-62-tt-title pcm-62-tt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm-62-tt-title">Torque against angle for the grinding wheel</title>
<desc id="pcm-62-tt-desc">Torque in newton metres from −2 to 13 against angular position in radians from 0 to 8. The motor torque is a solid straight line falling from 12 N·m at 0 rad to 0 at 8 rad; the triangle under it is shaded and labelled +48 J. The friction torque is a dashed horizontal line at −1 N·m from 0 to 8 rad; the strip between it and the axis is hatched and labelled −8 J. A marker at 7.33 rad, where the motor torque equals 1 N·m, is labelled net torque zero, greatest angular velocity.</desc>
<defs><pattern id="pcm-62-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V6" stroke="#1d2b44" stroke-width="1"/></pattern></defs>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M170 280 V50 M270 280 V50 M370 280 V50 M470 280 V50"/>
<path d="M70 190 H500 M70 130 H500 M70 70 H500"/>
</g>
<polygon points="70,70 470,250 70,250" fill="#fdf6e3" stroke="none"/>
<rect x="70" y="250" width="400" height="15" fill="url(#pcm-62-hatch)" stroke="none"/>
<path d="M70 250 H515 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<path d="M70 70 L470 250" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M70 265 H470" stroke="#1d2b44" stroke-width="2" stroke-dasharray="9 6"/>
<path d="M436.7 235 V290" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="3 3"/>
<circle cx="436.7" cy="235" r="4" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="306">0</text><text x="170" y="306">2</text><text x="270" y="306">4</text><text x="370" y="306">6</text><text x="470" y="306">8</text>
<text x="290" y="326" font-size="13">angular position, θ (rad)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="284">−2</text><text x="62" y="254">0</text><text x="62" y="194">4</text><text x="62" y="134">8</text><text x="62" y="74">12</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">torque, τ (N·m)</text>
<g font-size="12" fill="#1d2b44">
<text x="190" y="96">motor: τ = 12 − 1.5θ (solid)</text>
<text x="120" y="200" font-weight="600">area +48 J</text>
<text x="110" y="282">friction −1.0 N·m (dashed), area −8.0 J (hatched)</text>
<text x="340" y="196">θ = 7.33 rad: net τ = 0,</text>
<text x="340" y="212">greatest ω</text>
</g>
</svg>
<figcaption>Figure 2. Torque–angle graph for Worked example 1, counterclockwise positive. The shaded triangle is the motor's work (+48 J); the hatched strip below the axis is friction's work (−8.0 J). The net work, 40 J, is the change in rotational kinetic energy.</figcaption>
</figure>

## Worked example 2: a gate with a return spring

**Question.** A rotating gate turns about a vertical axis and has rotational inertia I about it. A spring pulls it back towards the closed position with a torque −κθ, where θ is the angle from closed (opening is positive). Starting from rest at θ = 0, a person pushes it open with a constant torque τ_p. Friction is negligible. (a) Derive ω(θ). (b) Find the angle at which the gate turns fastest, and the angle at which it stops. (c) Evaluate both, and the greatest ω, for I = 25 kg·m², κ = 40 N·m/rad and τ_p = 30 N·m.

**(a) Derive ω(θ).**

1. Work by the person: W_p = ∫₀^θ τ_p dθ = τ_p θ (positive).
2. Work by the spring: W_s = ∫₀^θ (−κθ) dθ = −½κθ² (negative: the spring torque opposes the opening).
3. Work–energy theorem: τ_p θ − ½κθ² = ½Iω² − 0.
4. So **ω(θ) = √((2τ_p θ − κθ²)/I)**.

**(b) Fastest and stopping angles.**

1. ω is greatest where the net work stops increasing: d(τ_p θ − ½κθ²)/dθ = τ_p − κθ = 0, so **θ = τ_p/κ**. This is where the net torque is zero, as in Worked example 1.
2. The gate stops when ω = 0 again: 2τ_p θ − κθ² = 0, so **θ = 2τ_p/κ**. There, the positive work by the person exactly cancels the negative work by the spring.

**(c) Numbers.**

1. Fastest at θ = 30/40 = **0.75 rad**. Net work there: 30 × 0.75 − 20 × 0.75² = 22.5 − 11.25 = 11.25 J. ω_max = √(2 × 11.25/25) = **0.95 rad/s**.
2. Stops at θ = 2 × 30/40 = **1.5 rad** (about 86°).

**Check the units.** κθ² has units (N·m/rad)(rad²) = N·m·rad = J. ✓ **Interpretation.** Doubling the push τ_p doubles both angles. The net work at the fastest point is τ_p²/(2κ), so it grows four times and the greatest ω doubles.

## Common misconceptions

- **"A large torque always does a lot of work."** No rotation, no work. A torque on a stuck nut transfers no energy.
- **Using revolutions or degrees in W = τΔθ.** Convert to radians: 1 rev = 2π rad.
- **W = τΔθ for a torque that changes with angle.** Integrate τ(θ), or use the area under the graph.
- **Forgetting negative work.** Friction and brake torques take energy out; include them in W_net.
- **Calling torque an energy because both can be written in N·m.** Write torque in N·m and work in J.
- **"The radial component of a force does some work."** It is perpendicular to the motion of the point and does none.
- **Confusing ∫τ dθ with ∫τ dt.** The area under τ against θ is work; the area under τ against t is something else (Topic 6.3).
- **Thinking the fastest moment is the end of the push.** ω is greatest where the net torque falls to zero.

## Where this leads

Topic 6.3, Angular Momentum and Angular Impulse, asks what a torque does over a **time** interval instead of an angle: ∫τ dt changes angular momentum, just as ∫τ dθ changes rotational kinetic energy. Topic 6.5, Rolling, combines both kinds of kinetic energy with the work done by forces and torques. Next, try the [practice questions](/advanced-course-resources/physics-c-mechanics/6-2-torque-work-practice/), then use the [revision notes](/advanced-course-resources/physics-c-mechanics/6-2-torque-work-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/6-2-torque-work-checklist/). When you are ready, move on to [Topic 6.3, Angular Momentum and Angular Impulse](/advanced-course-resources/physics-c-mechanics/6-3-angular-momentum-angular-impulse-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
