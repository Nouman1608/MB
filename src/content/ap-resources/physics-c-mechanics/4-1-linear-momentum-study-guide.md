---
resourceId: "mb-ap-physcm-4.1-study-guide"
title: "Linear Momentum: Study Guide (Physics C: Mechanics 4.1)"
description: "Calculus-based linear momentum: p = mv as a vector, momentum of a system, momentum from position functions, the link to kinetic energy, and the collision and explosion models."
course: "physics-c-mechanics"
unit: 4
topics: ["4.1"]
resourceType: "study-guide"
prerequisites:
  - "Vector components, magnitude and direction (Topic 1.1)"
  - "Velocity as the derivative of position (Topic 1.2)"
  - "Translational kinetic energy, K = ½mv² (Topic 3.1)"
prerequisiteResources: ["mb-ap-physcm-3.5-study-guide"]
learningObjectives:
  - "Calculate the momentum of an object from p = mv and give its direction as the direction of the velocity"
  - "Add momentum vectors by components to find the momentum of a system of objects"
  - "Find p(t) from a position function x(t) and sketch a momentum–time graph from it"
  - "Predict how momentum and kinetic energy change when mass or speed changes, using K = p²/(2m)"
  - "Decide whether an interaction can be modelled as a collision or an explosion, and justify the choice by comparing forces"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Exact calculus by hand; a calculator for arithmetic and inverse tangents. Use g = 9.8 m/s², the value on the course equation table"
related: ["mb-ap-physcm-4.1-revision-notes", "mb-ap-physcm-4.1-practice", "mb-ap-physcm-4.1-checklist"]
next: "mb-ap-physcm-4.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Linear momentum is p = mv. Its SI unit is kg·m/s, which is the same as N·s."
  - "Momentum is a vector that always points the same way as the velocity. Add momenta by components, never by sizes."
  - "If you know x(t), then p_x(t) = m dx/dt. A momentum–time graph has the same shape as the velocity–time graph, scaled by m."
  - "Kinetic energy and momentum are linked by K = p²/(2m). Doubling the speed doubles p but quadruples K."
  - "A collision is an interaction whose internal forces are much larger than the net external force. An explosion is one where internal forces push parts of the system apart."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 4.1?"
    answer: "They are separate courses with the same topic title. The definition p = mv and the collision and explosion models are shared. Physics C: Mechanics adds calculus: you find momentum from a position function by differentiating, sketch how momentum varies with time, and work with momentum vectors in two dimensions as a matter of routine."
  - question: "Is N·s really the same unit as kg·m/s?"
    answer: "Yes. A newton is kg·m/s², so a newton-second is kg·m/s² × s = kg·m/s. You will use N·s for impulse in Topic 4.2."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both open Unit 4 with a topic called Linear Momentum. This guide is the **calculus-based** one. It finds momentum from position functions by differentiating and treats momentum as a two-dimensional vector throughout. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/4-1-linear-momentum-study-guide/); do not mix the two when you revise.

Unit 3 described motion with energy, a scalar. Unit 4 adds a second quantity that every moving object carries: **linear momentum**. Unlike kinetic energy, it keeps track of direction. That makes it the right tool for short, violent interactions such as impacts, kicks and things breaking apart.

## The definition: p = mv

The **linear momentum** of an object of mass m moving with velocity **v** is

**p = mv**

- p is the momentum in **kg·m/s**. Because 1 N = 1 kg·m/s², this is the same unit as **N·s**.
- m is the mass in kg, a positive scalar.
- **v** is the velocity in m/s, a vector.

"Linear" separates it from angular momentum, which comes later in the course. On its own, "momentum" in this unit means linear momentum.

Multiplying a vector by a positive scalar changes its length but not its direction. So **momentum always points the same way as the velocity**. In one dimension that means p_x has the same sign as v_x. Take +x to the right: a 3.0 kg trolley moving left at 2.0 m/s has p_x = 3.0 × (−2.0) = −6.0 kg·m/s.

## Momentum as a vector in two dimensions

In two dimensions, work component by component:

**p_x = m v_x** and **p_y = m v_y**

The size of the momentum is |p| = √(p_x² + p_y²) = m|v|, and its direction is the angle θ with tan θ = p_y/p_x. Always check the quadrant from the signs of the components, because a calculator's inverse tangent cannot tell (+, +) from (−, −).

## Momentum of a system

A **system** is whatever collection of objects you choose to study (Topic 2.1). The momentum of a system is the **vector sum** of the momenta of its parts:

**p_sys = p₁ + p₂ + p₃ + …**

Two features follow at once:

- Momenta in opposite directions **cancel**. Two identical carts moving apart at equal speeds have a total momentum of zero, even though both are moving.
- Kinetic energies **never cancel**. K is a scalar and is never negative, so the total kinetic energy of the same two carts is the sum of two positive numbers.

Topic 4.3 shows that, in the absence of a net external force, the system momentum stays constant. For now, the job is to find it correctly.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="pcm41-vec-title pcm41-vec-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm41-vec-title">Adding the momenta of two pucks tip to tail</title>
<desc id="pcm41-vec-desc">Axes with +x to the right and +y up, drawn to a scale of 150 pixels per 1 kg·m/s. A solid arrow p_A starts at the origin and points right and slightly up, with components 1.0 and 0.40 kg·m/s. From its tip a second solid arrow p_B points left and up, with components −0.50 and 0.80 kg·m/s. A thick dashed arrow from the origin to the tip of p_B shows the system momentum, with components 0.50 and 1.20 kg·m/s, size 1.30 kg·m/s at 67 degrees above +x.</desc>
<defs><marker id="pcm41-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M195 290 V40 M270 290 V40 M345 290 V40 M420 290 V40"/>
<path d="M60 205 H470 M60 130 H470 M60 55 H470"/>
</g>
<path d="M120 280 H480 M120 300 V30" stroke="#1d2b44" stroke-width="2" fill="none"/>
<text x="486" y="284" font-size="13" fill="#1d2b44">+x</text>
<text x="112" y="24" font-size="13" fill="#1d2b44">+y</text>
<g font-size="11" fill="#1d2b44" text-anchor="middle">
<text x="195" y="318">0.5</text><text x="270" y="318">1.0</text><text x="345" y="318">1.5</text><text x="420" y="318">2.0</text>
</g>
<g font-size="11" fill="#1d2b44" text-anchor="end">
<text x="112" y="209">0.5</text><text x="112" y="134">1.0</text><text x="112" y="59">1.5</text>
</g>
<text x="440" y="318" font-size="12" fill="#1d2b44">(kg·m/s)</text>
<path d="M120 280 L268 221" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm41-arrow)"/>
<path d="M270 220 L197 102" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm41-arrow)"/>
<path d="M120 280 L193 104" stroke="#1d2b44" stroke-width="3" stroke-dasharray="9 6" marker-end="url(#pcm41-arrow)"/>
<text x="200" y="268" font-size="12" fill="#1d2b44">p_A = (1.0, 0.40)</text>
<text x="246" y="150" font-size="12" fill="#1d2b44">p_B = (−0.50, 0.80)</text>
<text x="210" y="62" font-size="12" fill="#1d2b44" font-weight="600">p_sys (dashed) = (0.50, 1.20)</text>
<text x="210" y="79" font-size="12" fill="#1d2b44">size 1.30 at 67° above +x</text>
</svg>
<figcaption>Figure 1. Momentum vectors for Worked example 1, +x to the right and +y up. Placing p_B at the tip of p_A gives the system momentum (dashed). Its size, 1.30 kg·m/s, is less than the sum of the two sizes, about 2.02 kg·m/s, because the x-components partly cancel.</figcaption>
</figure>

## Worked example 1: the momentum of two pucks

**Question.** Take **+x to the right and +y up** across an air table seen from above. Puck A (0.40 kg) moves with velocity (2.5, 1.0) m/s. Puck B (0.25 kg) moves with velocity (−2.0, 3.2) m/s. Find (a) the momentum of each puck, (b) the momentum of the two-puck system, and (c) the total kinetic energy.

1. Puck A: p_A = 0.40 × (2.5, 1.0) = **(1.0, 0.40) kg·m/s**. Size √(1.0² + 0.40²) ≈ 1.08 kg·m/s.
2. Puck B: p_B = 0.25 × (−2.0, 3.2) = **(−0.50, 0.80) kg·m/s**. Size ≈ 0.94 kg·m/s.
3. System, by components: p_x = 1.0 + (−0.50) = 0.50 kg·m/s; p_y = 0.40 + 0.80 = 1.20 kg·m/s.
4. Size: √(0.50² + 1.20²) = **1.30 kg·m/s**. Direction: tan θ = 1.20 ÷ 0.50, so θ ≈ **67° above +x**. Both components are positive, so the angle is in the first quadrant.
5. Kinetic energy: K_A = ½ × 0.40 × (2.5² + 1.0²) = 1.45 J; K_B = ½ × 0.25 × (2.0² + 3.2²) = 1.78 J. Total **K = 3.23 J**.

**Check.** Adding the sizes, 1.08 + 0.94 ≈ 2.02 kg·m/s, would ignore direction. The x-components point opposite ways and partly cancel, so the true total is smaller. The energies, being scalars, simply add.

## Momentum that changes with time

If an object's position is known as a function of time, its momentum follows by differentiating:

**p_x(t) = m v_x(t) = m dx/dt**

For constant mass, the momentum–time graph has exactly the shape of the velocity–time graph, stretched vertically by m. So the features you learned to read in Topic 1.2 carry over:

- p_x = 0 wherever the object is momentarily at rest.
- p_x changes sign wherever the object turns around.
- p_x has a maximum or minimum where its slope dp_x/dt is zero.

The slope dp_x/dt has the unit kg·m/s², which is a newton. Topic 4.2 shows that this slope is the net force on the object.

## Worked example 2: momentum from a position function

**Question.** Take **+x along a straight track**. A 2.0 kg box moves with x(t) = (1.5 m/s²)t² − (0.25 m/s³)t³ for 0 ≤ t ≤ 6.0 s. Find p_x(t), when the box has zero momentum, its greatest positive momentum, and its momentum and kinetic energy at 6.0 s. Sketch p_x against t.

1. Velocity: v_x = dx/dt = 3.0t − 0.75t² (m/s).
2. Momentum: p_x = m v_x = 2.0(3.0t − 0.75t²) = **6.0t − 1.5t²** (kg·m/s).
3. Zero momentum: 1.5t(4.0 − t) = 0, so **t = 0 and t = 4.0 s**. At 4.0 s the box turns round, at x = 8.0 m.
4. Greatest positive momentum: dp_x/dt = 6.0 − 3.0t = 0 at t = 2.0 s, so p_max = 12 − 6.0 = **6.0 kg·m/s**.
5. At t = 6.0 s: p_x = 36 − 54 = **−18 kg·m/s** (18 kg·m/s backwards along the track).
6. Kinetic energy at 6.0 s: K = p²/(2m) = 18² ÷ (2 × 2.0) = **81 J**.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="pcm41-pt-title pcm41-pt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm41-pt-title">Momentum–time graph for p = 6.0t − 1.5t²</title>
<desc id="pcm41-pt-desc">Momentum p_x in kg·m/s from −18 to +8 against time t in seconds from 0 to 6. The curve is a downward-opening parabola. It starts at zero, rises to a maximum of 6.0 kg·m/s at t = 2 s where a short flat tangent is drawn, falls back to zero at t = 4 s, and ends at −18 kg·m/s at t = 6 s. The part of the curve below the time axis, from 4 to 6 s, is drawn dashed.</desc>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M140 290 V30 M210 290 V30 M280 290 V30 M350 290 V30 M420 290 V30 M490 290 V30"/>
<path d="M70 50 H500 M70 170 H500 M70 230 H500 M70 290 H500"/>
</g>
<path d="M70 300 V25 M70 110 H510" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="140" y="126">1</text><text x="210" y="126">2</text><text x="280" y="126">3</text><text x="420" y="126">5</text><text x="490" y="126">6</text>
<text x="350" y="100">4</text>
<text x="300" y="322" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="54">6</text><text x="62" y="114">0</text><text x="62" y="174">−6</text><text x="62" y="234">−12</text><text x="62" y="294">−18</text>
</g>
<text x="22" y="165" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 165)">momentum, p_x (kg·m/s)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,110.0 77.0,104.2 84.0,98.6 91.0,93.3 98.0,88.4 105.0,83.8 112.0,79.4 119.0,75.3 126.0,71.6 133.0,68.1 140.0,65.0 147.0,62.1 154.0,59.6 161.0,57.3 168.0,55.4 175.0,53.8 182.0,52.4 189.0,51.3 196.0,50.6 203.0,50.2 210.0,50.0 217.0,50.1 224.0,50.6 231.0,51.4 238.0,52.4 245.0,53.8 252.0,55.4 259.0,57.3 266.0,59.6 273.0,62.1 280.0,65.0 287.0,68.2 294.0,71.6 301.0,75.4 308.0,79.4 315.0,83.8 322.0,88.4 329.0,93.4 336.0,98.6 343.0,104.2 350.0,110.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5" points="350.0,110.0 357.0,116.2 364.0,122.6 371.0,129.4 378.0,136.4 385.0,143.8 392.0,151.4 399.0,159.4 406.0,167.6 413.0,176.2 420.0,185.0 427.0,194.2 434.0,203.6 441.0,213.4 448.0,223.4 455.0,233.8 462.0,244.4 469.0,255.3 476.0,266.6 483.0,278.1 490.0,290.0"/>
<path d="M170 50 H250" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="210" cy="50" r="4" fill="#1d2b44"/>
<circle cx="350" cy="110" r="4" fill="#1d2b44"/>
<circle cx="490" cy="290" r="4" fill="#1d2b44"/>
<text x="222" y="40" font-size="12" fill="#1d2b44">maximum 6.0 kg·m/s at 2.0 s (flat tangent)</text>
<text x="300" y="150" font-size="12" fill="#1d2b44" text-anchor="end">p = 0 at 4.0 s: box turns round</text>
<text x="380" y="296" font-size="12" fill="#1d2b44" text-anchor="end">−18 kg·m/s at 6.0 s</text>
<text x="420" y="214" font-size="12" fill="#1d2b44" text-anchor="end">dashed: moving backwards</text>
</svg>
<figcaption>Figure 2. Momentum–time graph for Worked example 2, +x along the track. It has the shape of the velocity–time graph scaled by m = 2.0 kg. The flat tangent at 2.0 s marks the greatest positive momentum; the axis crossing at 4.0 s marks the turnaround.</figcaption>
</figure>

**Check.** At t = 2.0 s, v_x = 3.0 m/s, so ½mv² = ½ × 2.0 × 9.0 = 9.0 J, and p²/(2m) = 36 ÷ 4.0 = 9.0 J. The two routes to K agree.

**Interpretation.** Between 4.0 s and 6.0 s the size of the momentum grows from 0 to 18 kg·m/s while the box moves backwards. A growing *size* of momentum with a negative sign is still "speeding up".

## Momentum and kinetic energy

Both p and K depend on mass and speed, but differently. Substitute v = p/m into K = ½mv²:

**K = p²/(2m)**, or equivalently **|p| = √(2mK)**

This makes factor-of-change questions quick.

| Change | Factor on p | Factor on K |
|---|---|---|
| Speed doubled, mass fixed | × 2 | × 4 |
| Mass doubled, speed fixed | × 2 | × 2 |
| Mass halved, speed × 4 | × 2 | × 8 |
| Mass tripled, speed ÷ 3 | × 1 (unchanged) | ÷ 3 |

The last row shows why the two quantities tell different stories. With the same momentum, the **lighter** object always has the larger kinetic energy, because K = p²/(2m) falls as m rises.

## Collisions and explosions as models

Momentum is most useful for interactions that are over quickly. Two models describe them.

**The collision model.** An interaction is a **collision** when the forces the objects exert on each other are much larger than the net external force on them during the interaction. Then, over the short contact time, external forces have almost no effect.

For example, suppose a bat pushes on a 0.15 kg ball with an average force of about 8000 N for 1.2 ms (invented but realistic figures). The ball's weight is 0.15 × 9.8 = 1.47 N, more than 5000 times smaller. Over the contact, the bat changes the ball's velocity by about (8000 ÷ 0.15) × 0.0012 = 64 m/s; gravity changes it by only 9.8 × 0.0012 ≈ 0.012 m/s. Ignoring gravity during the hit is safe.

**The object model in collisions.** In a collision you usually compare only the state **just before** with the state **just after**. You do not follow the squashing and twisting during contact. So each colliding body can be treated as a single object, even though it deforms.

**The explosion model.** An interaction is an **explosion** when forces **internal** to the system push its parts apart. A firework shell bursting, a spring released between two carts, a person stepping off a canoe and a gun recoiling as it fires are all explosions in this sense. The word does not require fire or noise.

When neither model applies, for example a box sliding slowly into a soft cushion while friction from the floor is comparable to the cushion's push, external forces matter during the interaction and must be included.

## Common misconceptions

- **"Momentum is just another word for kinetic energy."** Momentum is a vector, proportional to v; kinetic energy is a scalar, proportional to v². They scale differently and only momentum can cancel.
- **Adding sizes of momenta.** Add components with signs (Worked example 1).
- **Dropping the sign in one dimension.** p_x takes the sign of v_x.
- **Forgetting the quadrant.** Check the signs of p_x and p_y after using an inverse tangent.
- **"Zero total momentum means nothing is moving."** Equal and opposite momenta give zero total while both objects move.
- **"Same momentum means same kinetic energy."** For equal momenta, the lighter object has more kinetic energy.
- **"An explosion must involve burning."** The model only requires internal forces that push parts of the system apart.
- **Applying the collision model to slow interactions.** If external forces act for a long time compared with the impact, they cannot be ignored.

## Where this leads

Topic 4.2 asks what changes momentum. It shows that the slope of a momentum–time graph is the net force, and that the area under a force–time graph is the change in momentum: start the [Change in Momentum and Impulse study guide](/advanced-course-resources/physics-c-mechanics/4-2-change-momentum-impulse-study-guide/) next. Topics 4.3 and 4.4 then use system momentum to analyse collisions and explosions. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/4-1-linear-momentum-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/4-1-linear-momentum-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/4-1-linear-momentum-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
