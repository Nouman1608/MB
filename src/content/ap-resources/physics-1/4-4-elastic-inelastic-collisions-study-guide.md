---
resourceId: "mb-ap-phys1-4.4-study-guide"
title: "Elastic and Inelastic Collisions: Study Guide (Physics 1 4.4)"
description: "Classify collisions as elastic, inelastic or perfectly inelastic by comparing system kinetic energy before and after, with momentum conserved throughout, using algebra, graphs and data."
course: "physics-1"
unit: 4
topics: ["4.4"]
resourceType: "study-guide"
prerequisites:
  - "Conservation of momentum for a system with no net external force (Topic 4.3)"
  - "Translational kinetic energy K = ½mv² (Topic 3.1)"
  - "Conservation of energy and the role of nonconservative forces (Topic 3.4)"
prerequisiteResources: ["mb-ap-phys1-4.3-study-guide"]
learningObjectives:
  - "Decide whether a collision is elastic or inelastic by comparing the total kinetic energy of the system before and after"
  - "Explain that each object's kinetic energy can change in an elastic collision while the system total stays the same"
  - "Explain where the missing kinetic energy goes in an inelastic collision"
  - "Use momentum conservation to find the common velocity after a perfectly inelastic collision, and calculate the kinetic energy transformed"
  - "Derive and use symbolic expressions, such as the fraction of kinetic energy lost when objects stick together"
  - "Plan and analyse an experiment that tests whether a collision is elastic"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s², as on the course equation table. Keep kinetic energies to 2 or 3 significant figures so that small differences are not hidden by rounding"
related: ["mb-ap-phys1-4.4-revision-notes", "mb-ap-phys1-4.4-practice", "mb-ap-phys1-4.4-checklist"]
next: "mb-ap-phys1-4.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "In any collision of an isolated system, total momentum is conserved. Kinetic energy is a separate question."
  - "Elastic: total kinetic energy of the system is the same before and after. Individual objects' kinetic energies can still change."
  - "Inelastic: total kinetic energy decreases. Nonconservative forces turn some of it into internal (thermal) energy, sound and deformation."
  - "Perfectly inelastic: the objects stick together and share one final velocity."
  - "Never use kinetic-energy conservation across a collision unless you know it is elastic. Use momentum for the collision, then energy for what follows."
faqs:
  - question: "If kinetic energy is lost in an inelastic collision, is energy conservation broken?"
    answer: "No. The total energy is conserved. The kinetic energy that disappears becomes other forms, mainly internal (thermal) energy of the objects, plus sound and permanent changes of shape."
  - question: "Does 'elastic' mean the objects bounce?"
    answer: "Not exactly. Elastic means the system's kinetic energy is unchanged. Objects that bounce apart can still lose kinetic energy (an inelastic collision), so you must compare the totals. Objects that stick together are always inelastic."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. It joins the momentum ideas of Topic 4.3 to the kinetic energy you met in Unit 3. No calculus is needed.

## Two conservation questions for every collision

When two objects collide and no net external force acts on the pair (or the collision is too short for external forces to matter), Topic 4.3 tells you:

**total momentum before = total momentum after**

That is true for **every** collision of such a system. A second, separate question is what happens to the **kinetic energy** of the system:

**K_sys = ½m₁v₁² + ½m₂v₂² + …**

Kinetic energy is a scalar. It is never negative, and direction does not matter: square the speed. The answer to the kinetic-energy question sorts collisions into types.

| Type | Total kinetic energy of the system | What the objects do |
|---|---|---|
| **Elastic** | Same before and after | Separate; individual kinetic energies may change |
| **Inelastic** | Decreases | Usually separate, with some kinetic energy transformed |
| **Perfectly inelastic** | Decreases (the largest possible loss for that momentum) | Stick together and move with one common velocity |

Momentum is conserved in all three rows.

## Elastic collisions

In an **elastic collision**, the total kinetic energy of the system after the collision equals the total before. While the objects are squashed together, kinetic energy is stored briefly (like energy in a compressed spring) and then fully returned as they spring apart.

The **system** total is what stays the same. One object can lose kinetic energy while the other gains exactly the same amount. Worked example 2 shows this.

Real collisions are never perfectly elastic, but some come close: hardened steel balls, gliders on an air track with magnetic bumpers, and collisions between gas molecules. Treat a collision as elastic only if the question says so or the data show it.

## Inelastic collisions

In an **inelastic collision**, the total kinetic energy of the system **decreases**. Some of it is not returned as the objects separate. Nonconservative forces during the contact (forces that deform materials, rub surfaces or crush crumple zones) transform it into:

- internal energy, which shows up as a small temperature rise;
- sound;
- energy of permanent deformation (dents, crumpled metal, squashed clay).

**Total energy is still conserved.** It has only changed form. The phrase "kinetic energy is lost" means lost **from kinetic form**.

In a **perfectly inelastic collision** the objects stick together, so after the collision they share **one velocity**. For a given total momentum, this leaves the least kinetic energy possible: the pair keeps only the kinetic energy of its centre-of-mass motion.

## Representations: a velocity–time graph and an energy bar chart

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="p44-vt-title p44-vt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p44-vt-title">Velocity–time graph of a perfectly inelastic collision between two carts</title>
<desc id="p44-vt-desc">Velocity in metres per second from 0 to 2.0 against time in seconds from 0 to 1.0, with +x in cart A's direction. Cart A, solid line, moves at 2.0 m/s until 0.50 s. Cart B, dashed line, is at rest until 0.50 s. During a shaded contact interval from 0.50 s to 0.55 s, A's velocity falls and B's rises, and both reach 1.2 m/s. After 0.55 s the two lines join into one horizontal line at 1.2 m/s, because the carts are stuck together.</desc>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<rect x="290" y="40" width="22" height="230" fill="#fdf6e3" stroke="#1d2b44" stroke-width="0.8" stroke-dasharray="3 3"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M70 160 H510 M70 50 H510 M70 138 H510"/>
</g>
<path d="M70 270 H520 M70 270 V35" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="288">0</text><text x="180" y="288">0.25</text><text x="290" y="288">0.50</text><text x="400" y="288">0.75</text><text x="510" y="288">1.00</text>
<text x="295" y="312" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="274">0</text><text x="62" y="164">1.0</text><text x="62" y="142">1.2</text><text x="62" y="54">2.0</text>
</g>
<text x="22" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 160)">velocity, v_x (m/s)</text>
<polyline points="70,50 290,50 312,138 510,138" fill="none" stroke="#1d2b44" stroke-width="3"/>
<polyline points="70,270 290,270 312,138" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5"/>
<g font-size="12" fill="#1d2b44">
<text x="100" y="42">cart A (solid), 0.30 kg: 2.0 m/s</text>
<text x="100" y="262">cart B (dashed), 0.20 kg: at rest</text>
<text x="330" y="128">A and B together: 1.2 m/s</text>
<text x="318" y="200">contact</text>
<text x="318" y="214">0.50–0.55 s</text>
</g>
</svg>
<figcaption>Figure 1. Worked example 1 on a velocity–time graph, +x in A's direction. During the short contact, A's line falls and B's rises until they meet at 1.2 m/s. Two lines that merge after the collision are the signature of a perfectly inelastic collision.</figcaption>
</figure>

<figure>
<svg viewBox="0 0 560 290" role="img" aria-labelledby="p44-bar-title p44-bar-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p44-bar-title">Energy bar chart for the same collision</title>
<desc id="p44-bar-desc">Energy in joules. Before the collision, cart A has 0.60 J of kinetic energy and cart B has 0 J. After the collision, the joined carts have 0.36 J of kinetic energy, and 0.24 J is shown as a hatched bar labelled internal energy, sound and deformation. The total after, 0.36 plus 0.24, equals the 0.60 J before.</desc>
<defs><pattern id="p44-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V8" stroke="#1d2b44" stroke-width="1.2"/></pattern></defs>
<rect x="0" y="0" width="560" height="290" fill="#ffffff"/>
<path d="M70 240 H530 M70 240 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<path d="M290 40 V250" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="62" y="244">0</text><text x="62" y="154">0.30</text><text x="62" y="64">0.60</text></g>
<g stroke="#1d2b44" stroke-width="1"><path d="M66 150 H74 M66 60 H74"/></g>
<text x="22" y="150" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 150)">energy (J)</text>
<text x="180" y="28" font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="600">Before</text>
<text x="410" y="28" font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="600">After</text>
<rect x="110" y="60" width="50" height="180" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M200 240 H250" stroke="#1d2b44" stroke-width="3"/>
<rect x="335" y="132" width="50" height="108" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="435" y="168" width="50" height="72" fill="url(#p44-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="135" y="54">0.60</text><text x="225" y="232">0</text><text x="360" y="126">0.36</text><text x="460" y="162">0.24</text>
<text x="135" y="258">K of A</text><text x="225" y="258">K of B</text><text x="360" y="258">K of A + B</text><text x="460" y="258">internal etc.</text>
</g>
<text x="290" y="282" font-size="12" fill="#1d2b44" text-anchor="middle">plain bars = kinetic energy · hatched bar = internal energy, sound, deformation</text>
</svg>
<figcaption>Figure 2. Energy bar chart for Worked example 1. Kinetic energy falls from 0.60 J to 0.36 J; the other 0.24 J is transformed by nonconservative forces. Total energy is unchanged.</figcaption>
</figure>

## Worked example 1: carts that stick together

**Question.** Take **+x in cart A's direction**. Cart A (0.30 kg) rolls at 2.0 m/s towards cart B (0.20 kg), which is at rest. Hook-and-loop pads make them stick together. Find (a) their velocity just after the collision, (b) the kinetic energy transformed, and (c) a general expression for the fraction of kinetic energy transformed when a moving object sticks to one at rest.

**(a)** Momentum before = (0.30)(2.0) + 0 = 0.60 kg·m/s. After, both move at v_f:
0.60 = (0.30 + 0.20)v_f, so **v_f = +1.2 m/s**.

**(b)** K before = ½(0.30)(2.0)² = 0.60 J. K after = ½(0.50)(1.2)² = 0.36 J.
Kinetic energy transformed = 0.60 − 0.36 = **0.24 J** (40% of the original).

**(c)** Let A (mass m₁, speed v) stick to B (mass m₂, at rest). Momentum gives v_f = m₁v / (m₁ + m₂). Then

K_after / K_before = [½(m₁ + m₂)v_f²] / [½m₁v²] = m₁ / (m₁ + m₂)

so the **fraction transformed = m₂ / (m₁ + m₂)**.

**Check.** m₂ / (m₁ + m₂) = 0.20 ÷ 0.50 = 0.40, matching (b). If the target is very light (m₂ → 0), almost nothing is lost; if it is very heavy, almost all the kinetic energy is transformed.

## Worked example 2: is this collision elastic?

**Question.** Take **+x to the right**. Glider A (0.25 kg) moves right at 0.60 m/s towards glider B (0.50 kg) at rest on an air track. After they collide, A moves at −0.20 m/s and B at +0.40 m/s. Show that momentum is conserved, and decide whether the collision is elastic.

1. **Momentum before:** (0.25)(+0.60) + 0 = +0.15 kg·m/s.
2. **Momentum after:** (0.25)(−0.20) + (0.50)(+0.40) = −0.05 + 0.20 = +0.15 kg·m/s. Conserved.
3. **Kinetic energy before:** ½(0.25)(0.60)² = 0.045 J (B has none).
4. **Kinetic energy after:** A: ½(0.25)(0.20)² = 0.005 J. B: ½(0.50)(0.40)² = 0.040 J. Total 0.045 J.

Total kinetic energy is unchanged, so the collision is **elastic**.

**Interpretation.** A's kinetic energy fell from 0.045 J to 0.005 J, and B's rose from 0 to 0.040 J. Individual kinetic energies changed; only the system total stayed the same. Notice also that A bounced back: the lighter glider rebounds from the heavier one.

You will not be asked to solve for **both** unknown final velocities of an elastic collision (that needs simultaneous equations). You may be given one final velocity, as here, and asked to find the other and classify the collision.

## Worked example 3: zero total momentum, but not zero kinetic energy

**Question.** Take **+x to the right**. A 0.40 kg ball moving at +3.0 m/s meets a 0.60 kg ball moving at −2.0 m/s head-on. Afterwards the 0.40 kg ball moves at −1.5 m/s. Find the other ball's velocity and classify the collision.

1. **Momentum before:** (0.40)(3.0) + (0.60)(−2.0) = 1.2 − 1.2 = **0**.
2. **After:** (0.40)(−1.5) + (0.60)v₂ = 0, so −0.60 + 0.60v₂ = 0 and **v₂ = +1.0 m/s**.
3. **K before:** ½(0.40)(3.0)² + ½(0.60)(2.0)² = 1.8 + 1.2 = 3.0 J.
4. **K after:** ½(0.40)(1.5)² + ½(0.60)(1.0)² = 0.45 + 0.30 = 0.75 J.

The kinetic energy fell by 2.25 J (75%), so the collision is **inelastic** but not perfectly inelastic: the balls separate.

**Interpretation.** Zero total momentum does not mean zero kinetic energy. If these balls had stuck together, momentum would require them to stop dead, and **all** 3.0 J would have been transformed. That is the extreme case of a perfectly inelastic collision.

## Comparing scenarios with the expressions

Symbolic results let you predict a change without new numbers. For a moving object (m₁, speed v) that sticks to one at rest (m₂):

- **Double the launch speed.** v_f doubles, since v_f = m₁v / (m₁ + m₂). Both kinetic energies are proportional to v², so the kinetic energy transformed is **4 times** as large, but the **fraction** transformed, m₂ / (m₁ + m₂), does not change.
- **Make the target heavier.** v_f gets smaller and the fraction transformed gets larger. With m₂ = m₁ the fraction is ½; with m₂ = 3m₁ it is ¾.
- **Swap which object moves** (same speed). The momentum and so v_f change, and so does the fraction: a heavy object hitting a light one keeps most of its kinetic energy.

Always say which quantities you are holding constant when you make a comparison like this.

## Explosions: the reverse of sticking together

In an explosion (Topic 4.3), internal forces push parts apart, so the system's kinetic energy **increases**. The extra comes from stored energy, such as a compressed spring or chemical energy. In Topic 4.3's Worked example 2, the 3.0 kg cart at 12 m/s had 216 J of kinetic energy; after the spring split it, the parts had 162 J + 81 J = 243 J. The spring supplied 27 J. Momentum was conserved throughout.

## Testing whether a collision is elastic

An experiment needs the masses and the velocities just before and just after.

1. Measure each mass with a balance.
2. Use motion sensors (or photogates) to measure each velocity shortly before and shortly after the collision, on a level, low-friction track.
3. Calculate the total momentum and total kinetic energy before and after.
4. Repeat for a range of launch speeds. Plot **K_after against K_before**. For an elastic collision the slope should be 1. For two equal carts that stick, Worked example 1's result predicts a slope of m₁/(m₁ + m₂) = 0.5.

Check momentum as well: if momentum does not agree within experimental uncertainty, external forces or measurement errors are too large to trust the energy result.

## Limiting cases worth knowing

- **Equal masses, elastic, target at rest.** The moving object stops and the target moves off with the original velocity. Check: momentum mv = 0 + mv, and kinetic energy ½mv² = 0 + ½mv².
- **Elastic bounce off a very heavy wall.** The object rebounds with nearly the same speed. Its momentum change is about 2mv, but its kinetic energy is unchanged.
- **Stick together with zero total momentum.** The pair ends at rest, and all the kinetic energy is transformed (Worked example 3).
- **Light object hits a heavy one and sticks.** Most of the kinetic energy is transformed (Worked example 1(c)).

## Common misconceptions

- **"Momentum is lost in an inelastic collision."** No. Kinetic energy decreases; momentum is conserved in every collision of an isolated system.
- **"Energy is destroyed in an inelastic collision."** Kinetic energy is transformed into internal energy, sound and deformation. Total energy is conserved.
- **"In an elastic collision each object keeps its kinetic energy."** Only the system total is the same (Worked example 2).
- **"If the objects bounce apart, the collision is elastic."** Bouncing apart is not enough; compare the totals (Worked example 3).
- **"Use energy conservation to find the speed just after a sticky collision."** You cannot: kinetic energy is not conserved. Use momentum for the collision, then energy for any later motion, such as rolling up a ramp.
- **Adding kinetic energies with signs.** Kinetic energy is never negative. Square the speed; direction does not matter.
- **Rounding too early.** Small differences in kinetic energy can vanish if you round velocities before squaring.

## Where this leads

This topic completes Unit 4. Unit 5 begins rotational motion, where similar ideas return for spinning objects: continue with [Topic 5.1, Rotational Kinematics](/advanced-course-resources/physics-1/5-1-rotational-kinematics-study-guide/). Angular momentum and its conservation follow in Unit 6. Before moving on, try the [practice questions](/advanced-course-resources/physics-1/4-4-elastic-inelastic-collisions-practice/), then use the [revision notes](/advanced-course-resources/physics-1/4-4-elastic-inelastic-collisions-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/4-4-elastic-inelastic-collisions-checklist/). You can also review [Topic 4.3, Conservation of Linear Momentum](/advanced-course-resources/physics-1/4-3-conservation-linear-momentum-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
