---
resourceId: "mb-ap-physcm-4.2-study-guide"
title: "Change in Momentum and Impulse: Study Guide (Physics C: Mechanics 4.2)"
description: "Calculus-based impulse and momentum: net force as dp/dt, impulse as the integral of force over time, graph areas and slopes, the impulse–momentum theorem, and systems that gain mass at constant velocity."
course: "physics-c-mechanics"
unit: 4
topics: ["4.2"]
resourceType: "study-guide"
prerequisites:
  - "Linear momentum as a vector, p = mv (Topic 4.1)"
  - "Newton's second law and free-body diagrams (Topics 2.2 and 2.5)"
  - "Definite integrals as signed areas (Topic 1.2)"
prerequisiteResources: ["mb-ap-physcm-4.1-study-guide"]
learningObjectives:
  - "State that the net external force on a system equals the rate of change of its momentum, and read it as the slope of a momentum–time graph"
  - "Calculate impulse as the integral of force over time, including from a force given as a function of time and from the area under a force–time graph"
  - "Apply the impulse–momentum theorem in one and two dimensions, giving the impulse its direction"
  - "Derive Newton's second law from F_net = dp/dt for constant mass, and F = v dm/dt for a system gaining mass at constant velocity"
  - "Compare the impulses and average forces in different interactions"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Exact calculus by hand; a calculator for arithmetic and trigonometry. Use g = 9.8 m/s², the value on the course equation table"
related: ["mb-ap-physcm-4.2-revision-notes", "mb-ap-physcm-4.2-practice", "mb-ap-physcm-4.2-checklist"]
next: "mb-ap-physcm-4.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "The net external force on a system is the rate of change of its momentum: F_net = dp/dt. It is the slope of a momentum–time graph."
  - "Impulse is J = ∫F dt, measured in N·s. It is the signed area under a force–time graph and points the same way as the net force."
  - "Impulse–momentum theorem: the impulse of the net external force equals the change in momentum, J = Δp = p_f − p_i."
  - "For constant mass, F_net = dp/dt becomes F_net = ma. For mass gained at constant velocity, it becomes F = v dm/dt."
  - "Average force over an interaction is J/Δt, which is always less than the peak force of a smooth pulse."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 4.2?"
    answer: "They are separate courses with the same topic title. Physics C: Mechanics defines impulse as an integral, so you integrate forces given as functions of time. It also includes systems whose mass changes while their velocity stays constant, which Physics 1 does not ask you to calculate."
  - question: "Is impulse the same as the change in momentum?"
    answer: "Only for the net force. The impulse of the net external force equals Δp. The impulse of a single force, such as the floor's push, equals Δp only if no other force acts or the others are negligible."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 4.2 with this title. This guide is the **calculus-based** one. It defines impulse as an integral, uses forces that change with time, and treats systems that gain mass at constant velocity. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/4-2-change-momentum-impulse-study-guide/); do not mix the two when you revise.

In Topic 4.1 you defined momentum, p = mv. This topic asks what changes it, and by how much.

## Net force is the rate of change of momentum

The most general form of Newton's second law is written with momentum:

**F_net = dp/dt**

Here F_net is the net **external** force on the system you have chosen, and p is the system's total momentum. Internal forces between parts of the system come in third-law pairs and cancel in the sum, so they cannot change the total.

Read it as a graph statement: **the net external force is the slope of the momentum–time graph**. A flat p–t graph means zero net force. A steep one means a large net force. In two dimensions it holds for each component: F_net,x = dp_x/dt and F_net,y = dp_y/dt.

## Impulse

Rearrange to dp = F_net dt and add up the small changes over an interval. The quantity on the right is called **impulse**. For any force F acting from t_i to t_f:

**J = ∫ F dt** (from t_i to t_f)

- Unit: **N·s**, the same as kg·m/s.
- Impulse is a **vector**. The impulse of the net force points the same way as the net force. If the force keeps one direction, so does the impulse.
- On a graph of force against time, the impulse is the **signed area** between the curve and the time axis. Area below the axis counts as negative.
- The **average force** over the interval is defined by F_avg = J/Δt: the constant force that would give the same impulse in the same time.

## Two graph rules

Every impulse question with a graph uses one of two rules. Decide which graph you have before you start.

| Graph | Read the… | It gives | Unit |
|---|---|---|---|
| Net force against time | signed area under it | impulse J = Δp | N·s |
| Momentum against time | slope (tangent for a curve) | net external force F_net | N |

The two graphs are linked in the same way as velocity and acceleration graphs in Topic 1.2: integrate the force graph to build the momentum graph (adding the initial momentum), or differentiate the momentum graph to get the force graph.

## The impulse–momentum theorem

The **change in momentum** is final minus initial, with signs:

**Δp = p_f − p_i**

Integrating F_net = dp/dt over the interval gives the **impulse–momentum theorem**:

**J_net = ∫ F_net dt = Δp**

The impulse of the net external force equals the change in momentum. Two consequences are worth stating plainly:

- **Same Δp, longer time, smaller average force.** A crumple zone or a padded landing does not reduce the impulse needed to stop an object. It stretches the time, so F_avg = Δp/Δt falls.
- **Reversals need bigger impulses.** To bounce something back, the force must first remove its momentum and then give it momentum the other way.

<figure>
<svg viewBox="0 0 560 375" role="img" aria-labelledby="pcm42-fp-title pcm42-fp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm42-fp-title">Force–time and momentum–time graphs for a kick</title>
<desc id="pcm42-fp-desc">Two graphs share a time axis from 0 to 8 milliseconds. Top: net force from 0 to 1500 newtons. The force rises from zero along a smooth arch to a peak of 1500 N at 4 ms and returns to zero at 8 ms; the area under it is shaded and labelled 8.0 N·s. Bottom: momentum from −2 to +6 kg·m/s. It starts at −2.0 kg·m/s with a flat slope, crosses zero at about 2.6 ms, is steepest at 4 ms where a dashed tangent of slope 1500 N is drawn, and levels off at +6.0 kg·m/s at 8 ms.</desc>
<rect x="0" y="0" width="560" height="375" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M180 35 V150 M280 35 V150 M380 35 V150 M480 35 V150"/>
<path d="M180 195 V325 M280 195 V325 M380 195 V325 M480 195 V325"/>
<path d="M80 113.3 H490 M80 76.7 H490 M80 40 H490"/>
<path d="M80 320 H490 M80 260 H490 M80 230 H490 M80 200 H490"/>
</g>
<polygon fill="#fdf6e3" stroke="none" points="80.0,150.0 90.0,139.3 100.0,129.1 110.0,119.5 120.0,110.4 130.0,101.9 140.0,93.9 150.0,86.5 160.0,79.6 170.0,73.3 180.0,67.5 190.0,62.3 200.0,57.6 210.0,53.5 220.0,49.9 230.0,46.9 240.0,44.4 250.0,42.5 260.0,41.1 270.0,40.3 280.0,40.0 290.0,40.3 300.0,41.1 310.0,42.5 320.0,44.4 330.0,46.9 340.0,49.9 350.0,53.5 360.0,57.6 370.0,62.3 380.0,67.5 390.0,73.3 400.0,79.6 410.0,86.5 420.0,93.9 430.0,101.9 440.0,110.4 450.0,119.5 460.0,129.1 470.0,139.3 480.0,150.0"/>
<path d="M80 30 V150 H495" stroke="#1d2b44" stroke-width="2" fill="none"/>
<path d="M80 190 V325 M80 290 H495" stroke="#1d2b44" stroke-width="2" fill="none"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="80.0,150.0 90.0,139.3 100.0,129.1 110.0,119.5 120.0,110.4 130.0,101.9 140.0,93.9 150.0,86.5 160.0,79.6 170.0,73.3 180.0,67.5 190.0,62.3 200.0,57.6 210.0,53.5 220.0,49.9 230.0,46.9 240.0,44.4 250.0,42.5 260.0,41.1 270.0,40.3 280.0,40.0 290.0,40.3 300.0,41.1 310.0,42.5 320.0,44.4 330.0,46.9 340.0,49.9 350.0,53.5 360.0,57.6 370.0,62.3 380.0,67.5 390.0,73.3 400.0,79.6 410.0,86.5 420.0,93.9 430.0,101.9 440.0,110.4 450.0,119.5 460.0,129.1 470.0,139.3 480.0,150.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="80.0,320.0 90.0,319.8 100.0,319.1 110.0,318.1 120.0,316.6 130.0,314.8 140.0,312.7 150.0,310.3 160.0,307.5 170.0,304.5 180.0,301.2 190.0,297.8 200.0,294.1 210.0,290.2 220.0,286.2 230.0,282.0 240.0,277.8 250.0,273.4 260.0,269.0 270.0,264.5 280.0,260.0 290.0,255.5 300.0,251.0 310.0,246.6 320.0,242.2 330.0,238.0 340.0,233.8 350.0,229.8 360.0,225.9 370.0,222.2 380.0,218.8 390.0,215.5 400.0,212.5 410.0,209.7 420.0,207.3 430.0,205.2 440.0,203.4 450.0,201.9 460.0,200.9 470.0,200.2 480.0,200.0"/>
<path d="M225 284.75 L335 235.25" stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="7 5"/>
<circle cx="210.5" cy="290" r="4" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="72" y="154">0</text><text x="72" y="117">500</text><text x="72" y="81">1000</text><text x="72" y="44">1500</text>
<text x="72" y="324">−2</text><text x="72" y="294">0</text><text x="72" y="264">2</text><text x="72" y="234">4</text><text x="72" y="204">6</text>
</g>
<text x="22" y="95" font-size="12" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 95)">net force, F_x (N)</text>
<text x="22" y="262" font-size="12" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 262)">momentum, p_x (kg·m/s)</text>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="342">0</text><text x="180" y="342">2</text><text x="280" y="342">4</text><text x="380" y="342">6</text><text x="480" y="342">8</text>
<text x="280" y="364" font-size="13">time, t (ms)</text>
</g>
<text x="280" y="125" font-size="12" fill="#1d2b44" font-weight="600" text-anchor="middle">shaded area = impulse = 8.0 N·s</text>
<text x="300" y="34" font-size="12" fill="#1d2b44">peak 1500 N at 4 ms</text>
<text x="96" y="276" font-size="12" fill="#1d2b44">p = 0 near 2.6 ms</text>
<text x="345" y="248" font-size="12" fill="#1d2b44">dashed tangent: slope 1500 N</text>
<text x="400" y="190" font-size="12" fill="#1d2b44">+6.0 (flat: force over)</text>
</svg>
<figcaption>Figure 1. Worked example 1, +x in the direction of the kick. Top: the area under the force–time curve is the impulse, 8.0 N·s. Bottom: momentum rises by exactly that amount, from −2.0 to +6.0 kg·m/s. The momentum graph is steepest where the force is largest and flat where the force is zero, because its slope is the net force.</figcaption>
</figure>

## Worked example 1: a kick measured by a force sensor

**Question.** Take **+x in the direction of the kick**. A 0.40 kg ball rolls towards a kicker at 5.0 m/s. A force plate shows that the net force on the ball during the 8.0 ms contact is F_x(t) = kt(T − t), with T = 8.0 ms and a peak of 1500 N at t = 4.0 ms. Find (a) k, (b) the impulse, (c) the ball's velocity after the kick and (d) the average force.

1. **(a)** At t = T/2 the force is kT²/4 = 1500 N, so k = 1500 ÷ (0.0040)² ≈ **9.4 × 10⁷ N/s²** (9.375 × 10⁷).
2. **(b)** J = ∫₀ᵀ k(Tt − t²) dt = k(T³/2 − T³/3) = kT³/6. Substituting gives **J = +8.0 N·s**. A neat check: kT³/6 = (2/3) × 1500 N × 0.0080 s = 8.0 N·s.
3. **(c)** Initial momentum: p_i = 0.40 × (−5.0) = −2.0 kg·m/s. Then p_f = p_i + J = −2.0 + 8.0 = +6.0 kg·m/s, so **v_f = +15 m/s**.
4. **(d)** F_avg = J ÷ Δt = 8.0 ÷ 0.0080 = **1000 N**, two-thirds of the peak.
5. **Momentum during contact.** p_x(t) = −2.0 + k(Tt²/2 − t³/3) in kg·m/s, with t in s. Its slope is F_x(t), so it is steepest at 4.0 ms. Setting p_x = 0 and solving numerically gives t ≈ 2.6 ms.

**Check.** The ball's weight is 0.40 × 9.8 ≈ 3.9 N, under 0.3% of the peak force. Treating the force plate's force as the net force is the collision model of Topic 4.1. Figure 1 shows the momentum passing through zero at about 2.6 ms: the ball is stopped and then driven the other way within one smooth push.

## Worked example 2: a glancing bounce

**Question.** Take **+x perpendicular to a wall, pointing away from it, and +y along the wall**. A 0.16 kg ball hits the wall at 9.0 m/s, travelling at 35° to the normal, and leaves at the same speed and the same angle on the other side of the normal. Contact lasts 15 ms and friction from the wall is negligible. Find (a) the impulse from the wall and (b) the average force. (c) Compare with a head-on bounce at the same speed.

1. Velocity components: before, v = (−9.0 cos 35°, +9.0 sin 35°) = (−7.37, +5.16) m/s; after, v = (+7.37, +5.16) m/s.
2. **(a)** Δp_x = 0.16 × (7.37 − (−7.37)) = **+2.36 N·s**; Δp_y = 0.16 × (5.16 − 5.16) = **0**. So **J = 2.4 N·s, perpendicular to the wall, away from it**. Symbolically, J = 2mv cos θ.
3. **(b)** F_avg = 2.36 ÷ 0.015 ≈ **160 N** (157 N), also perpendicular to the wall.
4. **(c)** Head-on, θ = 0 and J = 2mv = 2 × 0.16 × 9.0 = **2.9 N·s**. The glancing impulse is cos 35° ≈ 0.82 of this.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="pcm42-wall-title pcm42-wall-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm42-wall-title">Glancing bounce off a wall and the vector change in momentum</title>
<desc id="pcm42-wall-desc">Left: a vertical wall on the left edge with hatching behind it. A ball's path arrives from the lower right, moving up and to the left at 35 degrees to a dashed horizontal normal line, touches the wall, and leaves up and to the right at 35 degrees on the other side of the normal. Right: a vector diagram. A solid arrow p_f points up and to the right. From its tip, a solid arrow labelled minus p_i points down and to the right. A thick dashed arrow from the start of p_f to the tip of minus p_i points straight to the right, perpendicular to the wall, and is labelled delta p equals 2.36 kilogram metres per second.</desc>
<defs>
<marker id="pcm42-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
<pattern id="pcm42-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V6" stroke="#1d2b44" stroke-width="1"/></pattern>
</defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<rect x="40" y="20" width="20" height="260" fill="url(#pcm42-hatch)"/>
<path d="M60 20 V280" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M60 160 H260" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="5 4"/>
<path d="M240 286 L62 161" stroke="#1d2b44" stroke-width="2.2" marker-end="url(#pcm42-arrow)"/>
<path d="M62 159 L238 36" stroke="#1d2b44" stroke-width="2.2" marker-end="url(#pcm42-arrow)"/>
<circle cx="68" cy="160" r="7" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="130" y="200" font-size="12" fill="#1d2b44">in, 9.0 m/s</text>
<text x="150" y="135" font-size="12" fill="#1d2b44">out, 9.0 m/s</text>
<text x="110" y="176" font-size="12" fill="#1d2b44">35°</text>
<text x="110" y="153" font-size="12" fill="#1d2b44">35°</text>
<text x="200" y="174" font-size="12" fill="#1d2b44">normal</text>
<path d="M300 270 H340" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#pcm42-arrow)"/>
<path d="M300 270 V230" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#pcm42-arrow)"/>
<text x="344" y="274" font-size="12" fill="#1d2b44">+x</text>
<text x="292" y="224" font-size="12" fill="#1d2b44">+y</text>
<path d="M340 170 L409 121.5" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm42-arrow)"/>
<path d="M411 120 L480 168.5" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm42-arrow)"/>
<path d="M340 170 L479 170" stroke="#1d2b44" stroke-width="3" stroke-dasharray="9 6" marker-end="url(#pcm42-arrow)"/>
<text x="330" y="132" font-size="12" fill="#1d2b44" text-anchor="end">p_f = (1.18, 0.83)</text>
<text x="425" y="120" font-size="12" fill="#1d2b44">−p_i = (1.18, −0.83)</text>
<text x="410" y="196" font-size="12" fill="#1d2b44" font-weight="600" text-anchor="middle">Δp (dashed) = (2.36, 0) N·s</text>
<text x="410" y="214" font-size="12" fill="#1d2b44" text-anchor="middle">perpendicular to the wall</text>
</svg>
<figcaption>Figure 2. Worked example 2. Left: the path, with equal 35° angles on each side of the normal. Right: Δp = p_f + (−p_i), drawn tip to tail at 60 pixels per kg·m/s. The components along the wall cancel, so the impulse, and the wall's average force, point straight out from the wall.</figcaption>
</figure>

**Interpretation.** The impulse points the way of the net force (the wall's push), not the way the ball moves. The ball's momentum along the wall never changes, because no force acts along the wall.

## Newton's second law as a special case

Apply the product rule to p = mv:

**F_net = dp/dt = m dv/dt + v dm/dt**

- **Constant mass** (dm/dt = 0): F_net = m dv/dt = **ma**. Newton's second law in its familiar form is the impulse–momentum idea applied to a system whose mass does not change.
- **Constant velocity, changing mass** (dv/dt = 0): F_net = **v dm/dt**. A force is still needed, because new mass must be given momentum as it joins the moving system. This form assumes the added mass arrives with no momentum along the direction of motion.

Only these two cases are in this topic. Problems where mass and velocity both change, such as a rocket, use the same law but need a carefully chosen system.

## Worked example 3: gravel on a conveyor belt

**Question.** Take **+x along the belt**. A hopper drops gravel straight down onto a horizontal conveyor belt at 15 kg/s. A motor keeps the belt moving at a constant 1.2 m/s. Find (a) the extra horizontal force the motor must supply, (b) the extra power and (c) the rate at which the gravel gains kinetic energy. Explain the difference between (b) and (c).

1. **(a)** The gravel arrives with no horizontal momentum and leaves the loading zone moving at 1.2 m/s. F = v dm/dt = 1.2 × 15 = **18 N** in +x.
2. **(b)** Power (Topic 3.5): P = Fv = 18 × 1.2 ≈ **22 W** (21.6 W).
3. **(c)** dK/dt = ½v² dm/dt = ½ × 1.2² × 15 ≈ **11 W** (10.8 W).
4. **Explanation.** Each lump of gravel slides on the belt before it reaches belt speed. Kinetic friction between gravel and belt turns the other half of the motor's output, 10.8 W, into thermal energy. The result does not depend on the friction coefficient: a lower coefficient means a longer slide, but the same energy loss.

**Check.** In 10 s the belt picks up 150 kg of gravel, which gains 150 × 1.2 = 180 kg·m/s of momentum. The impulse of 18 N for 10 s is 180 N·s. They match.

## Common misconceptions

- **"Impulse is a kind of force."** Impulse is force integrated over time, in N·s. A small force for a long time can give the same impulse as a large force briefly.
- **Using speeds instead of signed velocities in Δp.** A reversal from −5.0 to +15 m/s is a change of 20 m/s, not 10 m/s.
- **"Impulse points the way the object moves."** It points the way the net force acts (Worked example 2).
- **Treating one force's impulse as Δp when other forces matter.** Only the net force's impulse equals Δp.
- **Using the peak force as the average.** For a smooth pulse, F_avg = J/Δt is smaller than the peak.
- **Using F = ma when mass changes.** Start from F_net = dp/dt.
- **"Zero net force means the momentum graph is at zero."** It means the graph is flat, at any value.

## Where this leads

Topic 4.3 applies F_net = dp/dt to a whole system: if the net external force is zero, the system's momentum stays constant, and the impulses objects exert on each other are equal and opposite. Continue with the [Conservation of Linear Momentum study guide](/advanced-course-resources/physics-c-mechanics/4-3-conservation-linear-momentum-study-guide/). Try the [practice questions](/advanced-course-resources/physics-c-mechanics/4-2-change-momentum-impulse-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/4-2-change-momentum-impulse-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/4-2-change-momentum-impulse-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
