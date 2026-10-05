---
resourceId: "mb-ap-physcm-5.5-study-guide"
title: "Rotational Equilibrium and Newton’s First Law in Rotational Form: Study Guide (Physics C: Mechanics 5.5)"
description: "Calculus-based rotational equilibrium: when angular velocity stays constant, extended force diagrams, the torque of a distributed weight by integration, and why the two equilibrium conditions are independent."
course: "physics-c-mechanics"
unit: 5
topics: ["5.5"]
resourceType: "study-guide"
prerequisites:
  - "Torque as τ = r⊥F with a sign for direction (Topic 5.3)"
  - "Rotational inertia of rigid systems (Topic 5.4)"
  - "Balanced forces and Newton’s first law (Topic 2.4); center of mass by integration (Topic 2.1)"
prerequisiteResources: ["mb-ap-physcm-5.4-study-guide"]
learningObjectives:
  - "State that a rigid system keeps a constant angular velocity, possibly zero, only when the net torque on it is zero"
  - "Draw extended force diagrams that show where each force acts, and find the torque of a distributed weight as Mg times the lever arm of the center of mass"
  - "Show that when the net force is zero the net torque is the same about every point, and use this to choose a convenient torque point"
  - "Apply ΣF = 0 and Στ = 0 together to find unknown support forces, including for objects with non-uniform mass"
  - "Explain with examples that rotational and translational equilibrium are independent, and that unbalanced torques mean a changing angular velocity"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic. We use g = 9.8 m/s², the value on the course equation table. Counterclockwise torques are positive unless stated"
related: ["mb-ap-physcm-5.5-revision-notes", "mb-ap-physcm-5.5-practice", "mb-ap-physcm-5.5-checklist"]
next: "mb-ap-physcm-5.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Rotational equilibrium means the net torque on the system is zero: Στ = 0. Then the angular velocity is constant, and that constant may be zero or not."
  - "Rotational and translational equilibrium are separate conditions. A system can satisfy one without the other."
  - "The weight of an extended object acts at its center of mass: its torque is Mg times the horizontal distance from the axis to the center of mass, found by integration if the mass is non-uniform."
  - "If ΣF = 0, the net torque has the same value about every point, so you may take torques about whichever point removes the most unknowns."
  - "If the torques are not balanced, the angular velocity must be changing (Topic 5.6 says how fast)."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 5.5?"
    answer: "They are separate courses with the same topic title. Physics 1 works with uniform objects and algebra. Physics C: Mechanics adds calculus (the torque of a non-uniform mass found by integration), symbolic derivations, and a proof that the torque point does not matter when the net force is zero."
  - question: "Do I need to handle objects turning in two planes at once?"
    answer: "No. The course only asks you to analyse rotation in one plane at a time, so every torque is either clockwise or counterclockwise about a single axis."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 5.5 with this title. This guide is the **calculus-based** one: it finds the torque of a non-uniform object by integration, proves why the torque point can be chosen freely, and derives results in symbols. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/5-5-rotational-equilibrium-newtons-first-law-study-guide/); do not mix the two when you revise.

## Two kinds of equilibrium

A rigid system can do two things at once: its center of mass can move, and the system can turn about an axis. Each motion has its own condition.

- **Translational equilibrium:** the net external force is zero, ΣF = 0. The velocity of the center of mass is constant (Topic 2.4).
- **Rotational equilibrium:** the net external torque is zero, Στ = 0. The angular velocity is constant.

In this course every rotation happens in **one plane**, about one axis. So each torque is a signed number: we take **counterclockwise as positive** and clockwise as negative, and we say so at the start of every problem. Recall from Topic 5.3 that the size of a torque is τ = rF sin θ = r⊥F, where r⊥ is the perpendicular distance from the axis to the line of action of the force (the lever arm).

Written out, rotational equilibrium is simply

**Στ = τ₁ + τ₂ + τ₃ + … = 0**

## Newton’s first law in rotational form

The rotational version of Newton’s first law says:

**A system has a constant angular velocity only if the net torque exerted on it is zero.**

"Constant" includes zero. A shelf bracket that never moves has ω = 0 at all times, and that is rotational equilibrium. A ceiling fan turning at a steady 12 rad/s is also in rotational equilibrium: the motor’s torque is exactly cancelled by the drag torque from the air. The fan does not need a net torque to keep turning, just as a puck on ice does not need a net force to keep sliding.

The other half of the statement is the **corollary**: if the torques on a rigid system are **not** balanced, its angular velocity **must be changing**, in size, in direction of turning, or both. Topic 5.6 turns this into an equation, Στ = Iα.

## Extended force diagrams

A free-body diagram for translation can treat the object as a dot. For rotation that is not enough, because the **point where a force acts** changes its lever arm. So you draw an **extended force diagram**: the object’s outline, each force as an arrow starting at the point where it acts, and the axis or pivot marked.

**Where does the weight act?** Gravity pulls on every small piece of mass dm. Put the pivot at x = 0 on a horizontal object and take +x to the right. A piece at position x has weight g dm and lever arm x, and pulling down to the right of the pivot gives a clockwise (negative) torque. Adding all the pieces:

**τ_grav = −∫ x g dm = −g ∫ x dm = −Mg x_cm**

because ∫ x dm = M x_cm by the definition of the center of mass (Topic 2.1). So, **for torque purposes, the whole weight acts at the center of mass**. For a uniform object this is the geometric middle. For a non-uniform object you find x_cm by integration first, as in Worked example 1.

## Choosing the point for torques

When an object is fixed on an axle, you take torques about the axle. But for a beam resting on supports, or a door on hinges, there is no single obvious axis. Which point should you use?

Suppose forces F₁, F₂, … act at positions r₁, r₂, … measured from a point P. The net torque about P is τ_P = Σ rᵢ × Fᵢ. Now move to a point Q at position d from P. The position of each force from Q is rᵢ − d, so

**τ_Q = Σ (rᵢ − d) × Fᵢ = τ_P − d × ΣF**

If the object is in translational equilibrium, ΣF = 0, and the last term vanishes: **τ_Q = τ_P for every point Q**. So when ΣF = 0 and Στ = 0 about one point, Στ = 0 about all points.

This gives you a free choice. **Take torques about the point where an unknown force acts**: that force then has zero lever arm and drops out of the equation. Use a second torque equation, or ΣF = 0, to check your answer.

Be careful with the reverse case. If ΣF ≠ 0, the net torque depends on the point you choose, and you must use the actual axis or the center of mass.

## Worked example 1: a tapered beam on two supports

**Question.** Take **+x to the right**, origin at the left end, **counterclockwise positive**. A wooden beam is 2.0 m long and lies horizontally. It is thicker at the left end: its linear mass density is λ(x) = (6.0 kg/m) − (2.0 kg/m²)x for 0 ≤ x ≤ 2.0 m. It rests on support A at x = 0 and support B at x = 1.5 m. (a) Find the upward force from each support. (b) A can of paint is placed on the far right end, x = 2.0 m. What is the largest mass of can the beam can hold before it tips?

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="pcm55-beam-title pcm55-beam-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm55-beam-title">Extended force diagram of the tapered beam</title>
<desc id="pcm55-beam-desc">A horizontal beam 2.0 metres long, drawn three times thicker at the left end than at the right end. Three force arrows act on it. An upward arrow labelled N_A, 35 newtons, acts at the left end, x = 0. An upward arrow labelled N_B, 44 newtons, acts at x = 1.5 metres. A downward arrow labelled Mg, 78.4 newtons, acts at the center of mass, x = 0.83 metres, which is left of the middle. A thin hatched strip at a general position x is labelled dm. A scale below the beam marks 0, 0.83, 1.50 and 2.00 metres.</desc>
<defs>
<marker id="pcm55-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
<pattern id="pcm55-hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V5" stroke="#1d2b44" stroke-width="1.2"/></pattern>
</defs>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<polygon points="80,140 480,140 480,152 80,176" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="314" y="140" width="12" height="22" fill="url(#pcm55-hatch)" stroke="#1d2b44" stroke-width="1"/>
<text x="320" y="128" font-size="12" fill="#1d2b44" text-anchor="middle">dm = λ dx at x</text>
<line x1="80" y1="240" x2="80" y2="182" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm55-arr)"/>
<text x="90" y="236" font-size="13" fill="#1d2b44">N_A = 35 N</text>
<line x1="380" y1="226" x2="380" y2="164" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm55-arr)"/>
<text x="390" y="222" font-size="13" fill="#1d2b44">N_B = 44 N</text>
<line x1="247" y1="160" x2="247" y2="268" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 4" marker-end="url(#pcm55-arr)"/>
<circle cx="247" cy="160" r="4" fill="#1d2b44"/>
<text x="257" y="262" font-size="13" fill="#1d2b44">Mg = 78.4 N (dashed)</text>
<text x="160" y="100" font-size="12" fill="#1d2b44">thick end: λ = 6.0 kg/m</text>
<text x="400" y="100" font-size="12" fill="#1d2b44">thin end: 2.0 kg/m</text>
<path d="M80 296 H480" stroke="#1d2b44" stroke-width="1.2"/>
<path d="M80 290 V302 M247 290 V302 M380 290 V302 M480 290 V302" stroke="#1d2b44" stroke-width="1.2"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="318">0</text><text x="247" y="318">x_cm = 0.83 m</text><text x="380" y="318">1.50 m</text><text x="480" y="318">2.00 m</text>
</g>
<path d="M500 60 H545" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#pcm55-arr)"/>
<text x="520" y="52" font-size="12" fill="#1d2b44" text-anchor="middle">+x</text>
</svg>
<figcaption>Figure 1. Extended force diagram of the tapered beam (arrow lengths roughly to scale). Each force starts where it acts. The weight, drawn dashed, acts at the center of mass, which sits left of the middle because the left end is heavier.</figcaption>
</figure>

**(a)**

1. **Mass:** M = ∫₀^2.0 (6.0 − 2.0x) dx = 12 − 4.0 = **8.0 kg**, so Mg = 78.4 N.
2. **Center of mass:** ∫₀^2.0 x(6.0 − 2.0x) dx = 12 − 16/3 = 6.67 kg·m, so x_cm = 6.67 ÷ 8.0 = **0.83 m** (exactly 5/6 m).
3. **Torques about A** (N_A has zero lever arm and drops out): N_B(1.5) − (78.4)(0.833) = 0, so N_B = 65.3 ÷ 1.5 = **44 N** (43.6 N).
4. **Forces, vertical:** N_A + N_B − 78.4 = 0, so N_A = **35 N** (34.8 N).

**Check.** Torques about B: −N_A(1.5) + 78.4(1.5 − 0.833) = −52.3 + 52.3 = 0. If you had put the weight at the middle (x = 1.0 m), you would get N_B = 52 N, which is wrong because the beam is not uniform.

**(b)** As the can gets heavier, the beam presses less on A. It is about to tip about B when **N_A = 0**. Take torques about B. The beam’s weight acts 1.5 − 0.833 = 0.667 m to the left of B (counterclockwise); the can acts 0.50 m to the right (clockwise):

(8.0)(9.8)(0.667) − m(9.8)(0.50) = 0, so m = (8.0 × 0.667) ÷ 0.50 = **11 kg** (10.7 kg).

Notice that g cancels. Any can lighter than this leaves N_A > 0 and the beam stays put.

## Worked example 2: the forces on a door’s hinges

**Question.** Take **+x away from the wall (to the right), +y upward, counterclockwise positive** as seen facing the door. A uniform door of mass M and width w hangs from two hinges on its left edge, a vertical distance h apart. The door is at rest. (a) Derive the horizontal force each hinge exerts on the door. (b) Evaluate it for M = 24 kg, w = 0.90 m and h = 1.6 m. (c) What can and cannot be found about the vertical hinge forces?

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="pcm55-door-title pcm55-door-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm55-door-title">Extended force diagram of a door on two hinges</title>
<desc id="pcm55-door-desc">A tall rectangular door seen face on, with its left edge next to a wall. Two hinges on the left edge are 1.6 metres apart. At the top hinge, a horizontal arrow labelled H points left, towards the wall. At the bottom hinge, a horizontal arrow labelled H points right, away from the wall. Short upward dashed arrows starting at both hinges are labelled V_top and V_bottom. A downward arrow labelled Mg acts at the center of the door, 0.45 metres from the hinge line. Dimension lines show h = 1.6 m between the hinges and w/2 = 0.45 m from the hinge line to the center.</desc>
<defs><marker id="pcm55-arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
<pattern id="pcm55-wall" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V8" stroke="#1d2b44" stroke-width="1"/></pattern></defs>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<rect x="160" y="20" width="24" height="290" fill="url(#pcm55-wall)" stroke="#1d2b44" stroke-width="1"/>
<text x="172" y="14" font-size="12" fill="#1d2b44" text-anchor="middle">wall</text>
<rect x="200" y="40" width="108" height="250" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="196" y="58" width="8" height="14" fill="#1d2b44"/>
<rect x="196" y="250" width="8" height="14" fill="#1d2b44"/>
<line x1="200" y1="65" x2="128" y2="65" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm55-arr2)"/>
<text x="96" y="58" font-size="13" fill="#1d2b44">H (top)</text>
<line x1="128" y1="257" x2="196" y2="257" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm55-arr2)"/>
<text x="84" y="250" font-size="13" fill="#1d2b44">H (bottom)</text>
<line x1="210" y1="65" x2="210" y2="28" stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="5 3" marker-end="url(#pcm55-arr2)"/>
<text x="216" y="34" font-size="12" fill="#1d2b44">V_top</text>
<line x1="210" y1="257" x2="210" y2="220" stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="5 3" marker-end="url(#pcm55-arr2)"/>
<text x="216" y="228" font-size="12" fill="#1d2b44">V_bottom</text>
<circle cx="254" cy="165" r="4" fill="#1d2b44"/>
<line x1="254" y1="165" x2="254" y2="235" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm55-arr2)"/>
<text x="262" y="226" font-size="13" fill="#1d2b44">Mg</text>
<path d="M360 65 V257 M352 65 H368 M352 257 H368" stroke="#1d2b44" stroke-width="1.2"/>
<text x="374" y="165" font-size="13" fill="#1d2b44">h = 1.6 m</text>
<path d="M200 155 H254 M200 149 V161 M254 149 V161" stroke="#1d2b44" stroke-width="1.2"/>
<text x="227" y="146" font-size="12" fill="#1d2b44" text-anchor="middle">w/2 = 0.45 m</text>
<text x="390" y="40" font-size="12" fill="#1d2b44">+x away from wall</text>
<path d="M390 50 H440" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#pcm55-arr2)"/>
</svg>
<figcaption>Figure 2. Extended force diagram of the door. The weight would turn the door clockwise about the bottom hinge, pulling its top away from the wall. The top hinge pulls the door back towards the wall; the bottom hinge pushes it away. The vertical hinge forces are dashed because only their sum is known.</figcaption>
</figure>

**(a)**

1. **Unknowns:** a horizontal and a vertical force at each hinge (four in all). Equilibrium gives three equations: ΣF_x = 0, ΣF_y = 0, Στ = 0.
2. **Torques about the bottom hinge.** Both bottom-hinge forces drop out. The vertical top-hinge force acts along the hinge line, so its lever arm is zero too. The weight acts w/2 to the right: torque −Mg(w/2). The top hinge’s horizontal force H_top acts at height h; pointing towards the wall (−x) it gives a counterclockwise torque +H_top h.
3. Στ = 0: H_top h − Mg(w/2) = 0, so **H_top = Mgw / (2h)**, towards the wall.
4. ΣF_x = 0: the bottom hinge pushes with the **same size, away from the wall**.

**(b)** H = (24)(9.8)(0.90) ÷ (2 × 1.6) = 211.7 ÷ 3.2 = **66 N**.

**(c)** ΣF_y = 0 gives only V_top + V_bottom = Mg = 235 N. The three equations cannot split this sum between the hinges; that depends on how tightly each hinge is fitted. Such a problem is called **statically indeterminate**. If you are told the hinges share the weight equally, each carries 118 N upward, and the top hinge’s total force on the door is √(66² + 118²) ≈ 135 N.

**Interpret.** H ∝ 1/h: double the hinge spacing and the horizontal forces halve, to 33 N. That is why tall, heavy doors have hinges near the top and bottom. Taking torques about the top hinge instead gives the same H: a useful check that follows from the "any point" result above.

## Equilibrium of one kind only

The two conditions are **independent**. Check each one separately.

- **Translational but not rotational equilibrium.** A driver pushes one side of a steering wheel up and the other side down, each with 20 N, at 0.19 m from the center. The forces cancel, so ΣF = 0. But both torques are in the same sense: Στ = 2 × 20 × 0.19 = 7.6 N·m. Such a pair of equal, opposite, offset forces is a **couple**. The wheel’s angular velocity changes even though its center does not accelerate.
- **Rotational but not translational equilibrium.** A spanner is tossed so that it tumbles end over end. Ignore air resistance. The only force is gravity, which acts at the center of mass, so its torque about the center of mass is zero. The spanner keeps turning at a **constant angular velocity** about its center of mass, while its center of mass accelerates downward at g. In 0.50 s its vertical velocity changes by 4.9 m/s, but its spin does not change.
- **Both.** The steady ceiling fan, or the beam in Worked example 1.
- **Neither.** A door swinging shut while a person pushes it.

Whenever the torques do not balance, expect a changing ω. That is the corollary, and the start of Topic 5.6.

## Common misconceptions

- **"A spinning object is not in equilibrium."** Constant ω, even a large one, means Στ = 0.
- **"ΣF = 0, so nothing can start to rotate."** A couple has ΣF = 0 and a nonzero torque.
- **"The weight of a beam acts at its middle."** Only for a uniform beam. Otherwise find x_cm by integration (Worked example 1).
- **Using the force’s full distance instead of the lever arm.** Use r⊥, or r sin θ.
- **Thinking the answer depends on the torque point.** When ΣF = 0 it does not. Choose the point that removes unknowns.
- **Forgetting the pivot force.** It has no torque about the pivot, but it still belongs in ΣF = 0.
- **Expecting statics to find every force.** Three equations cannot find four unknowns (Worked example 2).

## Where this leads

Earlier: [Topic 5.4, Rotational Inertia](/advanced-course-resources/physics-c-mechanics/5-4-rotational-inertia-study-guide/). Next, [Topic 5.6, Newton’s Second Law in Rotational Form](/advanced-course-resources/physics-c-mechanics/5-6-newtons-second-law-rotational-form-study-guide/), tells you how quickly ω changes when the torques do not balance: α = Στ/I. Unit 6 then adds energy and angular momentum to rotating systems. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/5-5-rotational-equilibrium-newtons-first-law-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/5-5-rotational-equilibrium-newtons-first-law-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/5-5-rotational-equilibrium-newtons-first-law-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
