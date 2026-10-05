---
resourceId: "mb-ap-phys1-4.3-study-guide"
title: "Conservation of Linear Momentum: Study Guide (Physics 1 4.3)"
description: "Total momentum of a system, centre-of-mass velocity, how the choice of system decides whether momentum changes, and collisions and explosions in one and two dimensions, with algebra only."
course: "physics-1"
unit: 4
topics: ["4.3"]
resourceType: "study-guide"
prerequisites:
  - "Momentum p = mv as a vector with the direction of the velocity (Topic 4.1)"
  - "Impulse J = F_avg Δt and the link J = Δp (Topic 4.2)"
  - "Newton's third law and the difference between internal and external forces (Topic 2.3)"
  - "Centre of mass of a system of particles (Topic 2.1)"
prerequisiteResources: ["mb-ap-phys1-4.2-study-guide"]
learningObjectives:
  - "Find the total momentum of a system by adding the signed momenta of its parts, and find the velocity of its centre of mass"
  - "Explain, using Newton's third law, why forces inside a system cannot change the system's total momentum"
  - "Decide whether a chosen system's momentum stays constant, and link any change to the impulse from outside the system"
  - "Use conservation of momentum to find a velocity immediately before or after a collision or an explosion in one dimension"
  - "Set up momentum conservation in two dimensions component by component, and reason about how changing a mass, speed or angle affects the other quantities"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s², as on the course equation table. Answers to 2 significant figures unless the data justify more"
related: ["mb-ap-phys1-4.3-revision-notes", "mb-ap-phys1-4.3-practice", "mb-ap-phys1-4.3-checklist"]
next: "mb-ap-phys1-4.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "The total momentum of a system is the vector sum of the momenta of its parts: p_sys = m₁v₁ + m₂v₂ + …"
  - "The centre-of-mass velocity is v_cm = p_sys / (total mass). With no net external force, it stays constant."
  - "Internal forces come in third-law pairs, so their impulses cancel. Only an external impulse can change a system's momentum: Δp_sys = F_net,ext Δt."
  - "Whether momentum is constant depends on the system you choose. Momentum is never created or destroyed; it is moved between a system and its surroundings."
  - "In a short collision or explosion, external impulses are tiny, so total momentum just before equals total momentum just after."
faqs:
  - question: "Is momentum conserved when friction acts?"
    answer: "Momentum is always conserved overall, but a system's momentum is constant only if the net external force on it is zero. If friction from the floor is external to your system, the system's momentum changes and the floor (with Earth) gains an equal and opposite change. During a very short collision, friction's impulse is usually small enough to ignore."
  - question: "Do I need to solve simultaneous equations for two-dimensional collisions?"
    answer: "No. In this course you set up the x and y momentum equations correctly and reason with them, for example about how a larger mass or angle changes a speed. Full two-dimensional solutions belong to the Physics 2 course."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. You will combine three earlier ideas: momentum (Topic 4.1), impulse (Topic 4.2) and Newton's third law (Topic 2.3). No calculus is needed.

## One system, one total momentum

A **system** is the object or collection of objects you choose to study. Everything else is the **surroundings**. Each object in the system has its own momentum, p = mv, pointing the same way as its velocity.

The **total momentum** of the system is the vector sum of the parts:

**p_sys = m₁v₁ + m₂v₂ + m₃v₃ + …**

In one dimension, "vector sum" means you add **signed** values. State your axis first.

**Example.** Take **+x to the right**. A 0.50 kg cart moves at +2.0 m/s and a 1.5 kg cart moves at −0.40 m/s.

- p₁ = 0.50 kg × (+2.0 m/s) = +1.0 kg·m/s
- p₂ = 1.5 kg × (−0.40 m/s) = −0.60 kg·m/s
- p_sys = +1.0 + (−0.60) = **+0.40 kg·m/s**

The unit kg·m/s is the same as N·s.

### The centre-of-mass velocity

A whole collection of moving objects can be described as one object moving with one velocity: the velocity of its **centre of mass** (Topic 2.1).

**v_cm = (m₁v₁ + m₂v₂ + …) / (m₁ + m₂ + …) = p_sys / M_total**

For the two carts, v_cm = +0.40 kg·m/s ÷ 2.0 kg = **+0.20 m/s**. Notice that this is a mass-weighted average. The plain mean of the two velocities, (2.0 + (−0.40)) ÷ 2 = +0.80 m/s, is wrong because the heavier cart counts for more.

This gives a powerful shortcut: **if no net external force acts on a system, its centre-of-mass velocity is constant.** The parts may crash, bounce or fly apart, but the centre of mass keeps moving in a straight line at a steady speed.

## Why forces inside a system cannot change its momentum

Suppose object A pushes object B during an interaction. By Newton's third law, B pushes A with a force of the same size in the opposite direction, at every instant. Both forces act for the same time interval Δt. So the impulses are equal and opposite:

**J_on B = −J_on A**

From Topic 4.2, an impulse equals a change in momentum. So

**Δp_B = −Δp_A**

Whatever momentum A loses, B gains. Add them: Δp_A + Δp_B = 0. The total does not change. This is true however large, brief or complicated the forces are, as long as both objects are **inside** the system. Forces between parts of the system are **internal forces**, and they can only move momentum around within the system.

An **external force** is exerted on the system by something outside it. Its third-law partner acts on the surroundings, not on the system, so nothing inside cancels it. External forces are the only way to change a system's total momentum.

## Choosing the system decides whether momentum changes

Momentum is conserved in **every** interaction: none is ever created or destroyed. What changes from problem to problem is whether momentum stays inside the system you chose.

| Net external force on the chosen system | What happens to p_sys |
|---|---|
| Zero | p_sys is constant (and so is v_cm) |
| Not zero | Momentum is transferred between the system and its surroundings |

When momentum is transferred, the change equals the impulse from outside:

**Δp_sys = J_ext = F_net,ext Δt**

So you can often pick a system on purpose so that its momentum **is** constant. If two carts collide, choose both carts as the system: the forces between them become internal. If a ball falls, the ball alone is not a good choice, because gravity from Earth is external. The ball **and Earth** together form a system whose momentum stays constant (see Worked example 3).

## Representing momentum: bar charts

A **momentum bar chart** shows each object's signed momentum before and after an interaction, plus the system total. It is a quick way to check your algebra before you solve, and it makes the third-law pattern visible.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="p43-bar-title p43-bar-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p43-bar-title">Momentum bar chart for two gliders before and after a collision</title>
<desc id="p43-bar-desc">Momentum in kilogram metres per second, with +x to the right, for glider A, glider B and the system A plus B. Before the collision: A is +0.32, B is −0.18 and the system is +0.14. After the collision: A is −0.10, B is +0.24 and the system is still +0.14. A's bars are plain, B's bars are hatched and the system bars are solid dark. A loses 0.42 and B gains 0.42.</desc>
<defs><pattern id="p43-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V8" stroke="#1d2b44" stroke-width="1.2"/></pattern></defs>
<rect x="0" y="0" width="560" height="320" fill="#ffffff"/>
<path d="M70 170 H530" stroke="#1d2b44" stroke-width="2"/>
<path d="M70 30 V290" stroke="#1d2b44" stroke-width="2"/>
<path d="M290 30 V290" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="54">+0.3</text><text x="62" y="94">+0.2</text><text x="62" y="134">+0.1</text><text x="62" y="174">0</text><text x="62" y="214">−0.1</text><text x="62" y="254">−0.2</text>
</g>
<g stroke="#1d2b44" stroke-width="1"><path d="M66 50 H74 M66 90 H74 M66 130 H74 M66 210 H74 M66 250 H74"/></g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">momentum, p_x (kg·m/s)</text>
<text x="180" y="22" font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="600">Before collision</text>
<text x="410" y="22" font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="600">After collision</text>
<rect x="95" y="42" width="40" height="128" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="160" y="170" width="40" height="72" fill="url(#p43-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="225" y="114" width="40" height="56" fill="#1d2b44"/>
<rect x="320" y="170" width="40" height="40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="385" y="74" width="40" height="96" fill="url(#p43-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="450" y="114" width="40" height="56" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="115" y="36">+0.32</text><text x="180" y="258">−0.18</text><text x="245" y="108">+0.14</text>
<text x="340" y="226">−0.10</text><text x="405" y="68">+0.24</text><text x="470" y="108">+0.14</text>
<text x="115" y="290">A</text><text x="180" y="290">B</text><text x="245" y="290">A + B</text>
<text x="340" y="290">A</text><text x="405" y="290">B</text><text x="470" y="290">A + B</text>
</g>
<text x="290" y="312" font-size="12" fill="#1d2b44" text-anchor="middle">plain = glider A · hatched = glider B · solid = whole system</text>
</svg>
<figcaption>Figure 1. Momentum bar chart for Worked example 1, with +x to the right. A's momentum falls by 0.42 kg·m/s and B's rises by 0.42 kg·m/s, so the system bar (+0.14 kg·m/s) is the same height before and after.</figcaption>
</figure>

To draw one: pick the axis, draw a bar for each object (up for +, down for −), then a bar for the system total. If no external impulse acts, the system bars must match. The changes in the individual bars must be equal and opposite.

## Collisions and explosions

In Topic 4.1 a **collision** was modelled as an interaction in which the forces between the objects are much larger than any external force, and an **explosion** as one in which internal forces push parts of a system apart.

During a collision lasting, say, 0.05 s, a friction force of a few newtons gives an impulse of only a fraction of a newton-second. The impulse between the objects is much bigger. So for the short time of the collision we can treat the system as having zero external impulse:

**total momentum immediately before = total momentum immediately after**

The words "immediately" matter. Over a longer time (a puck sliding to a stop afterwards), external forces do change the momentum.

## Worked example 1: two gliders collide

**Question.** Take **+x to the right**. On a level air track, glider A (0.40 kg) moves right at 0.80 m/s and glider B (0.60 kg) moves left at 0.30 m/s. They collide. Immediately afterwards, A moves left at 0.25 m/s. Find B's velocity immediately after the collision.

1. **System:** both gliders. The forces between them are internal; the air track is level and nearly frictionless, so the net external force is about zero.
2. **Signed velocities before:** v_A = +0.80 m/s, v_B = −0.30 m/s.
3. **Total momentum before:** (0.40)(+0.80) + (0.60)(−0.30) = +0.32 − 0.18 = **+0.14 kg·m/s**.
4. **After:** A's momentum is (0.40)(−0.25) = −0.10 kg·m/s.
5. **Conservation:** +0.14 = −0.10 + (0.60)v_B′, so (0.60)v_B′ = +0.24 kg·m/s and **v_B′ = +0.40 m/s** (0.40 m/s to the right).

**Check.** Δp_A = −0.10 − 0.32 = −0.42 kg·m/s and Δp_B = +0.24 − (−0.18) = +0.42 kg·m/s: equal and opposite, as the third law demands (Figure 1). The centre of mass moves at +0.14 ÷ 1.00 = +0.14 m/s both before and after. If the contact lasted 0.050 s, the average force on B was 0.42 ÷ 0.050 = 8.4 N to the right, and on A 8.4 N to the left.

## Worked example 2: a moving system splits apart

**Question.** Take **+x forward along a level, frictionless track**. A 3.0 kg test cart moves forward at 12 m/s. A spring inside it releases and splits it into a 1.0 kg front section and a 2.0 kg rear section. Immediately after the split, the rear section moves forward at 9.0 m/s. Find the velocity of the front section.

1. **System:** the whole cart (both sections). The spring force is internal.
2. **Before:** p = (3.0 kg)(+12 m/s) = **+36 kg·m/s**.
3. **After:** rear section p = (2.0)(+9.0) = +18 kg·m/s.
4. **Conservation:** +36 = +18 + (1.0)v_front, so **v_front = +18 m/s** (forward).

**Interpretation.** The spring pushed the front forward and the rear backward. The front gained +6.0 kg·m/s; the rear lost 6.0 kg·m/s. An explosion does not need to start from rest.

**Check.** v_cm after = (1.0 × 18 + 2.0 × 9.0) ÷ 3.0 = 12 m/s, the same as before. The pieces fly apart, but their centre of mass carries on as if nothing happened.

## Worked example 3: when the system's momentum changes

**Question.** Take **+y upward**. A 0.50 kg ball is released from rest and falls freely for 0.60 s. Ignore air resistance. (a) Using the ball as the system, find the change in its momentum. (b) Choose a system whose momentum stays constant, and say what happens to the rest of it.

**(a)** The ball alone has one external force on it: its weight, F_g = mg = 0.50 × 9.8 = 4.9 N downward. The impulse is

J = F_net,ext Δt = (−4.9 N)(0.60 s) = **−2.9 kg·m/s** (2.94 kg·m/s downward).

Since the ball started from rest, its momentum is now −2.9 kg·m/s. Check: v = gt = 5.88 m/s downward, and mv = 0.50 × 5.88 = 2.94 kg·m/s. The ball's momentum is **not** constant, because gravity is external to this system.

**(b)** Choose the **ball and Earth** as the system. Now the gravitational pull of Earth on the ball and of the ball on Earth are an internal third-law pair. The system's momentum stays zero. Earth gains +2.94 kg·m/s upward. With Earth's mass about 5.97 × 10²⁴ kg, its velocity changes by about 4.9 × 10⁻²⁵ m/s: far too small to notice, but exactly balancing the ball.

**Lesson.** The same event can show "momentum changing" or "momentum constant". The difference is only which objects you put inside the system.

## Momentum in two dimensions

Momentum is a vector, so in two dimensions conservation holds **separately for each component**:

**Σp_x before = Σp_x after** and **Σp_y before = Σp_y after**

In this course you need to **set up** these equations and **reason** with them. You will not be asked to solve two simultaneous equations for two unknowns.

**Example.** Take **+x along the original motion**. A 0.20 kg puck slides at 3.0 m/s and hits an identical puck at rest on smooth ice. The total momentum is 0.60 kg·m/s in the +x direction, and the y-momentum is zero. Afterwards, puck 1 moves off at 35° above the x-axis and puck 2 at 35° below it.

- **y-components:** they must add to zero, so (0.20)v₁ sin 35° = (0.20)v₂ sin 35°. With equal masses and equal angles, the speeds must be equal.
- **x-components:** each puck carries half of the 0.60 kg·m/s, so 0.30 kg·m/s each. That gives v cos 35° = 1.5 m/s, so each speed is about 1.8 m/s.

<figure>
<svg viewBox="0 0 560 250" role="img" aria-labelledby="p43-2d-title p43-2d-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p43-2d-title">Momentum vectors after a glancing collision, drawn tip to tail</title>
<desc id="p43-2d-desc">A dashed horizontal arrow 300 units long shows the total momentum before the collision, 0.60 kilogram metres per second in the +x direction. Two solid arrows drawn tip to tail make a triangle above it: puck 1's momentum after, at 35 degrees above the x-axis, then puck 2's momentum after, at 35 degrees below the x-axis. They end at the tip of the dashed arrow, so their vector sum equals the total momentum before. Each has an x-component of 0.30 and a y-component of plus or minus 0.21.</desc>
<defs><marker id="p43-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="250" fill="#ffffff"/>
<path d="M100 200 L400 200" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 5" marker-end="url(#p43-arrow)"/>
<path d="M100 200 L250 95" stroke="#1d2b44" stroke-width="3" marker-end="url(#p43-arrow)"/>
<path d="M250 95 L400 200" stroke="#1d2b44" stroke-width="3" marker-end="url(#p43-arrow)"/>
<path d="M250 95 V200" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 4"/>
<path d="M150 200 A50 50 0 0 0 141 171" stroke="#1d2b44" stroke-width="1.2" fill="none"/>
<g font-size="12" fill="#1d2b44">
<text x="155" y="188">35°</text>
<text x="105" y="128">p₁′ (puck 1 after)</text>
<text x="320" y="128">p₂′ (puck 2 after)</text>
<text x="200" y="222">p before = 0.60 kg·m/s (+x)</text>
<text x="258" y="160">y: +0.21 then −0.21</text>
<text x="420" y="204">+x</text>
</g>
</svg>
<figcaption>Figure 2. In a two-dimensional collision the momentum vectors after (solid) must add tip to tail to the momentum vector before (dashed). The y-components cancel; the x-components share the original 0.60 kg·m/s.</figcaption>
</figure>

**Reasoning without solving.** Suppose that in another trial puck 2 leaves at a **smaller** angle below the axis than puck 1's angle above it (θ₂ < θ₁). Which puck is faster? For the y-components to cancel with equal masses, v₂ sin θ₂ = v₁ sin θ₁. Since sin θ₂ is smaller than sin θ₁, v₂ must be **larger** than v₁: the puck closer to the original line moves faster. Questions like this test whether you can predict the direction of a change from the set-up, without finding every number.

## Limiting cases worth knowing

- **Starting at rest.** If a system at rest splits into two parts, p_sys = 0 before and after, so m₁v₁ = −m₂v₂. The lighter part moves faster, in the opposite direction. A 0.80 kg cart pushed off at −0.90 m/s by a spring sends a 1.2 kg cart away at +0.60 m/s.
- **Very heavy partner.** When one object is enormous (Earth, a wall), it takes up any momentum change with a velocity change too small to measure. Momentum is still conserved.
- **Long times.** Over a long interval, small external forces add up to a large impulse. Conservation "immediately before and after" does not mean "forever after".
- **Zero momentum does not mean nothing moves.** Two equal carts moving apart at equal speeds have total momentum zero.

## Common misconceptions

- **"Momentum is lost in a crash."** Total momentum of the colliding objects is the same just before and just after, even when they crumple. (Kinetic energy is a different story: see Topic 4.4.)
- **"Momentum is not conserved because friction acts."** It is conserved; it is transferred to the surroundings. Your chosen system's momentum changes only if there is a net external force.
- **"The bigger object exerts the bigger force, so it has the bigger momentum change."** The forces, the impulses and the momentum changes are equal in size and opposite in direction. The **velocity** changes differ because the masses differ.
- **"v_cm is the average of the velocities."** It is weighted by mass: v_cm = p_sys / M_total.
- **Forgetting signs.** Two objects moving in opposite directions have momenta of opposite sign. Adding speeds instead of velocities is the most common error.
- **Treating the x and y equations as one.** In two dimensions, conserve each component separately. Speeds do not add as plain numbers.
- **"An object at rest has no part to play."** A stationary target has zero momentum before, but it can carry a large momentum after.

## Where this leads

Conservation of momentum tells you about velocities, but not whether kinetic energy survives the collision. Topic 4.4 sorts collisions into elastic and inelastic: continue with the [Topic 4.4 study guide on elastic and inelastic collisions](/advanced-course-resources/physics-1/4-4-elastic-inelastic-collisions-study-guide/). First, try the [practice questions](/advanced-course-resources/physics-1/4-3-conservation-linear-momentum-practice/), then use the [revision notes](/advanced-course-resources/physics-1/4-3-conservation-linear-momentum-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/4-3-conservation-linear-momentum-checklist/). You can also review [Topic 4.2, Change in Momentum and Impulse](/advanced-course-resources/physics-1/4-2-change-momentum-impulse-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
