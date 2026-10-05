---
resourceId: "mb-ap-physcm-2.8-study-guide"
title: "Spring Forces: Study Guide (Physics C: Mechanics 2.8)"
description: "Calculus-based spring forces: the ideal spring model, Hooke's law and its direction, nonideal springs, and deriving equivalent spring constants for springs in series and in parallel."
course: "physics-c-mechanics"
unit: 2
topics: ["2.8"]
resourceType: "study-guide"
prerequisites:
  - "Free-body diagrams and Newton's second law (Topics 2.2 and 2.5)"
  - "Kinetic and static friction (Topic 2.7)"
  - "Derivatives as slopes of graphs (Topic 1.2)"
prerequisiteResources: ["mb-ap-physcm-2.7-study-guide"]
learningObjectives:
  - "State what makes a spring ideal and describe two ways a real spring can be nonideal"
  - "Calculate a spring force with Hooke's law and give its direction from the spring's stretch or compression"
  - "Explain why a hanging block's net force points to its new equilibrium even though the spring force points to the relaxed length"
  - "Derive the equivalent spring constant for springs in series and in parallel, and predict factors of change"
  - "Use the slope of a force–extension graph to find k and to decide whether a spring is ideal"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Use g = 9.8 m/s², the value on the course equation table. Convert centimetres to metres before using k in N/m"
related: ["mb-ap-physcm-2.8-revision-notes", "mb-ap-physcm-2.8-practice", "mb-ap-physcm-2.8-checklist"]
next: "mb-ap-physcm-2.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "An ideal spring has negligible mass and a force proportional to its change in length from the relaxed length."
  - "Hooke's law: |F_s| = k|Δx|. In vector form along x, F_s,x = −kΔx, so the force points back towards the relaxed length."
  - "Springs in series: 1/k_eq = 1/k₁ + 1/k₂ + …, and k_eq is smaller than the smallest k."
  - "Springs in parallel: k_eq = k₁ + k₂ + …"
  - "k is the slope of a force–extension graph. A curved graph means a nonideal spring."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 2.8?"
    answer: "They are separate courses with the same topic title. Physics C: Mechanics adds springs combined in series and in parallel, with equivalent spring constants you derive, and uses calculus ideas such as the local slope dF/dx of a nonideal spring."
  - question: "Do I need to handle springs that are partly in series and partly in parallel?"
    answer: "No. The course only expects equivalent spring constants for springs that are all in series or all in parallel, not mixed arrangements."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 2.8 called Spring Forces. This guide is the **calculus-based** one. It covers the same ideal spring and Hooke's law, then adds combinations of springs in series and in parallel, derived from first principles, and treats the spring constant as a slope that can change for a nonideal spring. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/2-8-spring-forces-study-guide/); do not mix the two when you revise. This topic follows [Topic 2.7, Kinetic and Static Friction](/advanced-course-resources/physics-c-mechanics/2-7-kinetic-static-friction-study-guide/).

## The ideal spring model

A spring has a **relaxed length**: its length when nothing stretches or squeezes it. An **ideal spring** has two properties:

1. Its **mass is negligible**.
2. The force it exerts is **proportional to its change in length** from the relaxed length.

A spring that breaks either rule is **nonideal**. A heavy spring hanging under its own weight breaks rule 1. A rubber cord, or a metal spring stretched too far, breaks rule 2.

The first property has a useful consequence. Newton's second law for the spring itself is F_net = m_spring a. If m_spring ≈ 0, the net force on the spring must be zero, even when it accelerates. So an ideal spring pulls (or pushes) with the **same size of force at both ends**. That is why the same force passes through every spring in a series chain below.

## Hooke's law and its direction

For an ideal spring, the size of the force is

**|F_s| = k|Δx|**

- Δx is the change in length from the relaxed length: an extension or a compression.
- k is the **spring constant**, in **N/m**. A larger k means a stiffer spring.

**Direction.** A stretched spring pulls on the object; a compressed spring pushes on it. Either way, the force points back towards the position where the spring is relaxed. Put the origin at that position and take +x along the spring's axis. Then

**F_s,x = −kx**

The minus sign carries the direction. If x > 0 (stretched to the right of relaxed), the force is towards −x. If x < 0, it is towards +x. For a block on a level, smooth surface attached to a horizontal spring, the relaxed position is also the block's **equilibrium position**, so the spring force always points towards equilibrium.

### A hanging block: two different "centres"

Hang a block of mass m from a vertical spring. Take **+y upward**. Let s be the stretch. The spring pulls up with ks and the weight pulls down with mg. Equilibrium is where they balance: **s₀ = mg/k**.

At any stretch s, the net force is F_net,y = ks − mg = **k(s − s₀)**.

- The **spring force** always points towards the relaxed length. While the spring is stretched at all, it pulls **up**.
- The **net force** points towards the **new equilibrium** at s₀, with size k times the distance from it.

So between the relaxed length and the equilibrium position, the spring still pulls up, but the net force points **down**. Keep the two ideas separate. When a statement says a spring force points "towards equilibrium", apply it to the spring's own relaxed position, as for the horizontal spring above; with gravity also acting, it is the **net** force that points to the new equilibrium at s₀.

## Graphs: k as a slope

Plot the size of the spring force F against the extension Δx. For an ideal spring the graph is a straight line through the origin, and

**k = slope = dF/d(Δx)**

For a nonideal spring the graph curves. Then there is no single k, but the **local slope** dF/d(Δx) still tells you how stiff the spring is near a given extension.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="pcm28-fx-title pcm28-fx-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm28-fx-title">Force against extension for an ideal and a nonideal spring</title>
<desc id="pcm28-fx-desc">Force in newtons from 0 to 25 against extension in metres from 0 to 0.10. A solid straight line from the origin to 5 N at 0.10 m is labelled ideal spring, slope k = 50 N/m. A dashed curve starts along the same line near the origin, then bends upward more and more steeply, reaching 25 N at 0.10 m; it is labelled nonideal, stiffening. A short dotted tangent touches the curve at 0.06 m, 7.3 N, labelled local slope 266 N/m.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M154 290 V50 M238 290 V50 M322 290 V50 M406 290 V50 M490 290 V50"/>
<path d="M70 242 H500 M70 194 H500 M70 146 H500 M70 98 H500 M70 50 H500"/>
</g>
<path d="M70 290 H515 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="154" y="308">0.02</text><text x="238" y="308">0.04</text><text x="322" y="308">0.06</text><text x="406" y="308">0.08</text><text x="490" y="308">0.10</text>
<text x="280" y="330" font-size="13">extension, Δx (m)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="246">5</text><text x="62" y="198">10</text><text x="62" y="150">15</text><text x="62" y="102">20</text><text x="62" y="54">25</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">spring force, F (N)</text>
<path d="M70 290 L490 242" stroke="#1d2b44" stroke-width="2.5" fill="none"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5" points="70.0,290.0 78.4,289.0 86.8,288.1 95.2,287.1 103.6,286.1 112.0,285.0 120.4,283.9 128.8,282.8 137.2,281.5 145.6,280.2 154.0,278.9 162.4,277.4 170.8,275.8 179.2,274.1 187.6,272.3 196.0,270.4 204.4,268.3 212.8,266.1 221.2,263.8 229.6,261.2 238.0,258.5 246.4,255.6 254.8,252.5 263.2,249.2 271.6,245.7 280.0,242.0 288.4,238.0 296.8,233.8 305.2,229.4 313.6,224.7 322.0,219.7 330.4,214.5 338.8,208.9 347.2,203.1 355.6,197.0 364.0,190.5 372.4,183.8 380.8,176.7 389.2,169.2 397.6,161.4 406.0,153.3 414.4,144.8 422.8,135.9 431.2,126.6 439.6,116.9 448.0,106.8 456.4,96.3 464.8,85.4 473.2,74.1 481.6,62.3 490.0,50.0"/>
<path d="M238 270.8 L406 168.7" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="1 3"/>
<circle cx="322" cy="219.7" r="4" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="360" y="236" font-size="12" fill="#1d2b44">ideal (solid): slope k = 50 N/m</text>
<text x="250" y="80" font-size="12" fill="#1d2b44">nonideal, stiffening (dashed)</text>
<text x="160" y="190" font-size="12" fill="#1d2b44">dotted tangent at 0.06 m:</text>
<text x="160" y="206" font-size="12" fill="#1d2b44">local slope 266 N/m</text>
</svg>
<figcaption>Figure 1. Force–extension graphs. The ideal spring gives a straight line through the origin; its slope is k. The nonideal spring agrees at small extensions, then stiffens. Its local slope dF/d(Δx) at 0.06 m is about 266 N/m, more than five times the starting value. (Fictional springs; the nonideal one follows F = 50Δx + 20 000Δx³.)</figcaption>
</figure>

### Testing whether a real spring is ideal

You can check the model with a simple experiment.

1. Hang the spring vertically next to a ruler and record the position of its lower end with nothing attached. This is the relaxed position.
2. Add known masses one at a time. For each, wait until the mass is at rest and record the new position. The extension is the difference.
3. At rest, the spring force equals the weight, so F = mg for each load.
4. Plot F on the vertical axis against extension in metres on the horizontal axis.
5. If the points lie on a straight line through the origin, the spring is ideal over that range and the slope is k. If the graph curves, or the spring does not return to its relaxed length when the masses are removed, it is not.

Two practical points help. Read the ruler at eye level to avoid parallax. Take readings while loading and again while unloading: a gap between the two sets is another sign of nonideal behaviour. Any real spring is only close to ideal over a limited range, so state the range when you quote k.

### Representing spring forces

On a free-body diagram, draw the spring force from the point where the spring attaches, along the spring's axis. Label it F_s (not "k" or "kx"), and decide its direction from whether the spring is stretched or compressed. A spring attached to a block **and** a wall pulls (or pushes) on both with equal-sized forces in opposite directions. A spring scale reads the size of that force. So a spring scale pulled by two people with 30 N each reads 30 N, not 60 N.

## Combining springs

Several springs acting on one object can behave like a **single spring** with an **equivalent spring constant k_eq**. The course expects only two arrangements: **all in series** or **all in parallel**. You do not need mixed arrangements.

### Springs in series (end to end)

The springs form one chain. Because each ideal spring is massless, the **same force F** acts through every spring. Each spring stretches by F/kᵢ, and the total stretch is the sum:

x = F/k₁ + F/k₂ + … = F(1/k₁ + 1/k₂ + …)

Write x = F/k_eq and compare:

**1/k_eq = 1/k₁ + 1/k₂ + …**

Each term 1/kᵢ is positive, so 1/k_eq is larger than any single 1/kᵢ. That means **k_eq is smaller than the smallest kᵢ**. A chain is softer than its softest link.

**Cutting a spring.** A spring of constant k is like n identical pieces in series. If each piece has constant k_p, then 1/k = n/k_p, so **k_p = nk**. Cut a spring in half and each half is twice as stiff.

### Springs in parallel (side by side)

The springs share the load and all have the **same extension x** (for example, both attached to a bar that stays level). The forces add:

F = k₁x + k₂x + … = (k₁ + k₂ + …)x

**k_eq = k₁ + k₂ + …**

Parallel springs are stiffer than any one of them.

<figure>
<svg viewBox="0 0 560 280" role="img" aria-labelledby="pcm28-sp-title pcm28-sp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm28-sp-title">Springs in series and springs in parallel</title>
<desc id="pcm28-sp-desc">Left, labelled series: a spring of 300 N/m hangs from a ceiling, a spring of 600 N/m hangs from its lower end, and a 1.2 kg block hangs from the bottom. Right, labelled parallel: two springs, 300 N/m on the left and 600 N/m on the right, hang side by side from a ceiling and hold a light level bar. A 1.2 kg block hangs from the bar at a point two-thirds of the way from the left spring to the right spring.</desc>
<rect x="0" y="0" width="560" height="280" fill="#ffffff"/>
<path d="M90 40 H190 M330 40 H490" stroke="#1d2b44" stroke-width="4"/>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<path d="M140 40 V50 L150 53.1 L130 56.2 L150 59.4 L130 62.5 L150 65.6 L130 68.8 L150 71.9 L130 75.0 L150 78.1 L130 81.2 L150 84.4 L130 87.5 L150 90.6 L130 93.8 L150 96.9 L140 100.0 V110"/>
<path d="M140 110 V120 L150 123.1 L130 126.2 L150 129.4 L130 132.5 L150 135.6 L130 138.8 L150 141.9 L130 145.0 L150 148.1 L130 151.2 L150 154.4 L130 157.5 L150 160.6 L130 163.8 L150 166.9 L140 170.0 V180"/>
<path d="M370 40 V50 L380 55.6 L360 61.2 L380 66.9 L360 72.5 L380 78.1 L360 83.8 L380 89.4 L360 95.0 L380 100.6 L360 106.2 L380 111.9 L360 117.5 L380 123.1 L360 128.8 L380 134.4 L370 140.0 V150"/>
<path d="M450 40 V50 L460 55.6 L440 61.2 L460 66.9 L440 72.5 L460 78.1 L440 83.8 L460 89.4 L440 95.0 L460 100.6 L440 106.2 L460 111.9 L440 117.5 L460 123.1 L440 128.8 L460 134.4 L450 140.0 V150"/>
<path d="M423 158 V185"/>
</g>
<circle cx="140" cy="110" r="3" fill="#1d2b44"/>
<rect x="115" y="180" width="50" height="40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="355" y="150" width="110" height="8" fill="#1d2b44"/>
<rect x="398" y="185" width="50" height="40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="160" y="78">k₁ = 300 N/m</text><text x="160" y="148">k₂ = 600 N/m</text>
<text x="140" y="205" text-anchor="middle">1.2 kg</text><text x="423" y="210" text-anchor="middle">1.2 kg</text>
<text x="356" y="95" text-anchor="end">300 N/m</text><text x="466" y="95">600 N/m</text>
</g>
<g font-size="13" fill="#1d2b44" font-weight="600" text-anchor="middle">
<text x="140" y="258">series: same force</text><text x="410" y="258">parallel: same extension</text>
</g>
</svg>
<figcaption>Figure 2. The same two springs in series (left) and in parallel (right), as used in Worked example 1. In series every spring carries the full weight; in parallel the springs share it. In the parallel set-up the block hangs nearer the stiffer spring so that the bar stays level.</figcaption>
</figure>

## Worked example 1: the same springs, two arrangements

**Question.** Take **+y upward**. Springs with k₁ = 300 N/m and k₂ = 600 N/m are ideal. A 1.2 kg block hangs at rest from them, first (a) in series and then (b) in parallel, as in Figure 2. For each case find k_eq, the total extension and the force in each spring.

1. Weight: mg = 1.2 × 9.8 = **11.76 N**. At rest, the springs together must pull up with 11.76 N.
2. **(a) Series.** 1/k_eq = 1/300 + 1/600 = 3/600, so **k_eq = 200 N/m**. Check: smaller than 300 N/m, as it must be.
3. Total extension: 11.76 ÷ 200 = 0.0588 m ≈ **5.9 cm**.
4. Each spring carries the full **11.76 N**. Extensions: 11.76 ÷ 300 = 0.0392 m and 11.76 ÷ 600 = 0.0196 m. Sum: 0.0588 m, which agrees with step 3.
5. **(b) Parallel.** k_eq = 300 + 600 = **900 N/m**.
6. Common extension: 11.76 ÷ 900 = 0.01307 m ≈ **1.3 cm**.
7. Forces: 300 × 0.01307 = **3.92 N** and 600 × 0.01307 = **7.84 N**. Sum: 11.76 N. The stiffer spring carries twice the load.

**Factor of change.** The extension in series is 0.0588 ÷ 0.01307 = **4.5 times** the extension in parallel, because k_eq goes from 200 N/m to 900 N/m.

## Worked example 2: a block between two springs

**Question.** Take **+x to the right**. A 0.50 kg block on a smooth, level surface is attached to a spring of k₁ = 80 N/m on its left and a spring of k₂ = 120 N/m on its right. The far ends are fixed to walls. Both springs are relaxed when the block is at x = 0. Find the net force and acceleration of the block at (a) x = +0.050 m and (b) x = −0.030 m. (c) Show that the pair acts like one spring and find k_eq.

1. **(a)** At x = +0.050 m the left spring is **stretched** by 0.050 m. It pulls the block left: F₁,x = −80 × 0.050 = −4.0 N.
2. The right spring is **compressed** by 0.050 m. It pushes the block left: F₂,x = −120 × 0.050 = −6.0 N.
3. Net force: **−10 N**. Acceleration: −10 ÷ 0.50 = **−20 m/s²** (towards the left, back towards x = 0).
4. **(b)** At x = −0.030 m the left spring is compressed and pushes right with 2.4 N; the right spring is stretched and pulls right with 3.6 N. Net force **+6.0 N**; acceleration **+12 m/s²**.
5. **(c)** In general, F_net,x = −k₁x − k₂x = −(k₁ + k₂)x. That has the Hooke's law form with **k_eq = k₁ + k₂ = 200 N/m**.

**Check.** The springs sit on opposite sides, yet they combine like **parallel** springs. What decides the rule is the physics, not the picture: both springs have the **same change in length** as the block moves, and their forces add. Check: −200 × 0.050 = −10 N, matching step 3.

## Common misconceptions

- **"Springs drawn side by side are parallel; springs on opposite sides are series."** Decide by asking: same force (series) or same extension (parallel)? Worked example 2 is parallel.
- **"Series springs are stiffer because there are more of them."** k_eq in series is smaller than the smallest k.
- **Using centimetres with k in N/m.** Convert to metres first.
- **Mixing up spring force and net force for a hanging block.** The spring force points towards the relaxed length. Gravity moves the equilibrium down, and it is the **net** force that points towards that new equilibrium.
- **"Δx is the spring's length."** It is the change from the relaxed length.
- **"Cutting a spring in half halves k."** Each half has 2k.
- **"Any spring obeys F = kx."** Only an ideal one. Check that the force–extension graph is straight.

## Where this leads

Next, [Topic 2.9, Resistive Forces](/advanced-course-resources/physics-c-mechanics/2-9-resistive-forces-study-guide/) deals with forces that depend on velocity. In Unit 3 you will integrate F_s,x = −kx to find the work done by a spring and its potential energy, and in Unit 7 the restoring force −kx produces simple harmonic motion. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/2-8-spring-forces-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/2-8-spring-forces-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/2-8-spring-forces-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
