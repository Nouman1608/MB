---
resourceId: "mb-ap-phys1-2.8-study-guide"
title: "Spring Forces: Study Guide (Physics 1 2.8)"
description: "The ideal spring and Hooke's law from first principles: extension and compression, the spring constant, force direction, graphing data to find k, and springs on slopes."
course: "physics-1"
unit: 2
topics: ["2.8"]
resourceType: "study-guide"
prerequisites:
  - "Free-body diagrams and Newton's second law along chosen axes (Topics 2.2 and 2.5)"
  - "Weight near Earth's surface, F_g = mg (Topic 2.6)"
  - "Finding the slope of a best-fit straight line"
prerequisiteResources: ["mb-ap-phys1-2.7-study-guide"]
learningObjectives:
  - "Describe an ideal spring and measure its change in length from its relaxed length"
  - "Use Hooke's law, F_s = −kΔx, for the size and direction of a spring force"
  - "Explain why a spring force always points back toward the position where the spring is relaxed"
  - "Plot force against change in length and find the spring constant from the slope"
  - "Derive expressions for the stretch of a spring holding an object, and compare cases"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra and trigonometry only, no calculus. g = 9.8 m/s². Convert centimetres to metres before using k in N/m"
related: ["mb-ap-phys1-2.8-revision-notes", "mb-ap-phys1-2.8-practice", "mb-ap-phys1-2.8-checklist"]
next: "mb-ap-phys1-2.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "An ideal spring has negligible mass. The force it exerts is proportional to its change in length from its relaxed length."
  - "Hooke's law: F_s = −kΔx. The size is k|Δx|; the minus sign means the force points opposite to the stretch or compression."
  - "A spring force always points back toward the position where the spring is relaxed. For a block on a horizontal spring, that is the equilibrium position."
  - "The spring constant k (N/m) measures stiffness. It is the slope of a force–change-in-length graph."
  - "Δx is the change in length, not the length. Measure it from the relaxed length."
faqs:
  - question: "What does the minus sign in F_s = −kΔx mean?"
    answer: "It shows direction only. If the spring is stretched in the +x direction, it pulls in the −x direction, and the other way round. For the size of the force, use k|Δx|."
  - question: "Is a larger k a stiffer or a softer spring?"
    answer: "Stiffer. A larger k means more force for each metre of stretch, so the same force stretches it less."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Everything here uses algebra, graphs and free-body diagrams. You need Newton's second law (Topic 2.5) and weight, F_g = mg (Topic 2.6).

## The ideal spring

Real springs have mass, can be overstretched, and wobble. In this course we use a simple model, the **ideal spring**:

- Its mass is **negligible**. That means it pulls (or pushes) with the same size of force on whatever is attached at each end.
- The force it exerts is **proportional** to how much its length has changed from its **relaxed length** (its natural length, when nothing stretches or squashes it).

Write **Δx** for the change in length. If a spring is 20.0 cm long when relaxed and 26.0 cm long when stretched, Δx = 6.0 cm = 0.060 m. If it is squashed to 17.0 cm, the size of Δx is 3.0 cm = 0.030 m, a **compression**.

## Hooke's law

The size of the spring force is

**|F_s| = k|Δx|**

With a sign for direction, along one axis:

**F_s = −kΔx**

- **k** is the **spring constant**, measured in **newtons per metre (N/m)**. It tells you how many newtons it takes to change the length by one metre. A large k is a **stiff** spring; a small k is a **soft** one.
- **Δx** is measured from the relaxed length. Choose the axis so that Δx is positive when stretched in the +x direction.
- The **minus sign** means the force is opposite to the change in length. Stretch the spring towards +x and it pulls towards −x. Compress it towards −x and it pushes towards +x.

A spring force is a **restoring** force: it always acts to bring its own length back to the relaxed length. For a block attached to a horizontal spring on a smooth surface, the relaxed position is also the **equilibrium position** of the block–spring system, so the spring force always points back toward equilibrium. It does not matter which way the block is moving at that instant.

## Representing a spring force

<figure>
<svg viewBox="0 0 560 370" role="img" aria-labelledby="p1-spr-title p1-spr-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-spr-title">Spring force on a block at three positions</title>
<desc id="p1-spr-desc">Three rows show the same block attached to a horizontal spring fixed to a wall on the left. A dashed vertical line marks the equilibrium position, x = 0, where the spring is relaxed. Top row: the block is at x = +5.0 centimetres, the spring is stretched, and an arrow on the block points left, labelled F_s = −6.0 N. Middle row: the block is at x = −3.0 centimetres, the spring is compressed, and a shorter arrow points right, labelled F_s = +3.6 N. Bottom row: the block is at x = 0, the spring is relaxed, and there is no arrow; F_s = 0.</desc>
<defs><marker id="p1-spr-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="370" fill="#ffffff"/>
<rect x="28" y="40" width="12" height="300" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M280 30 V350" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<text x="286" y="362" font-size="12" fill="#1d2b44">x = 0 (relaxed, equilibrium)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" points="40,90 50,90 68.8,98 87.5,90 106.2,82 125.0,90 143.8,98 162.5,90 181.2,82 200.0,90 218.8,98 237.5,90 256.2,82 275.0,90 293.8,98 312.5,90 331.2,82 350.0,90 368.8,98 387.5,90 406.2,82 425.0,90 435,90"/>
<rect x="435" y="70" width="40" height="40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M455 55 H395" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-spr-ah)"/>
<text x="330" y="48" font-size="12" fill="#1d2b44">F_s = −6.0 N</text>
<text x="420" y="128" font-size="12" fill="#1d2b44">x = +5.0 cm, stretched</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" points="40,200 50,200 54.8,208 59.5,200 64.2,192 69.0,200 73.8,208 78.5,200 83.2,192 88.0,200 92.8,208 97.5,200 102.2,192 107.0,200 111.8,208 116.5,200 121.2,192 126.0,200 130.8,208 135.5,200 140.2,192 145.0,200 155,200"/>
<rect x="155" y="180" width="40" height="40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M175 165 H211" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-spr-ah)"/>
<text x="200" y="160" font-size="12" fill="#1d2b44">F_s = +3.6 N</text>
<text x="140" y="238" font-size="12" fill="#1d2b44">x = −3.0 cm, compressed</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" points="40,310 50,310 60.0,318 70.0,310 80.0,302 90.0,310 100.0,318 110.0,310 120.0,302 130.0,310 140.0,318 150.0,310 160.0,302 170.0,310 180.0,318 190.0,310 200.0,302 210.0,310 220.0,318 230.0,310 240.0,302 250.0,310 260,310"/>
<rect x="260" y="290" width="40" height="40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="310" y="306" font-size="12" fill="#1d2b44">x = 0: F_s = 0</text>
<text x="400" y="230" font-size="12" fill="#1d2b44">+x to the right</text>
</svg>
<figcaption>Figure 1. A block on a smooth horizontal surface, attached to a spring with k = 120 N/m. Arrow lengths are to scale. Wherever the block is, the spring force points back toward x = 0, and its size grows in proportion to the distance from x = 0.</figcaption>
</figure>

## Graphs: finding k from data

Hooke's law says force and change in length are **directly proportional**. So a graph of spring force (size) against change in length is a **straight line through the origin**, and its **slope is k**.

To find k in the lab, hang known masses from a spring and measure the stretch for each. While the mass hangs at rest, the spring force balances the weight, so |F_s| = mg.

## Worked example 1: k from a graph of data

**Question.** A student hangs masses from a spring and records the extension Δx from the relaxed length. Take **+y downward** for the extension.

| m (kg) | 0.050 | 0.100 | 0.150 | 0.200 | 0.250 |
|---|---|---|---|---|---|
| F = mg (N) | 0.49 | 0.98 | 1.47 | 1.96 | 2.45 |
| Δx (cm) | 2.4 | 5.0 | 7.3 | 9.9 | 12.2 |

Plot the data and find k.

1. Convert extensions to metres: 0.024, 0.050, 0.073, 0.099 and 0.122 m.
2. Plot F (vertical axis, N) against Δx (horizontal axis, m). Choose scales that use most of the grid: 0 to 0.14 m and 0 to 3.0 N.
3. Draw one **best-fit straight line**. It should pass close to every point and through (or very near) the origin. Do not join the dots.
4. Take two points **on the line**, far apart: (0.020 m, 0.40 N) and (0.120 m, 2.40 N).
5. k = slope = (2.40 − 0.40) N ÷ (0.120 − 0.020) m = 2.00 N ÷ 0.100 m = **20 N/m**.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="p1-hk-title p1-hk-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-hk-title">Force against extension for a hanging spring</title>
<desc id="p1-hk-desc">Spring force in newtons from 0 to 3.0 against extension in metres from 0 to 0.14. Five square data points lie close to a straight best-fit line through the origin: (0.024, 0.49), (0.050, 0.98), (0.073, 1.47), (0.099, 1.96) and (0.122, 2.45). Two hollow circles on the line, at (0.020 m, 0.40 N) and (0.120 m, 2.40 N), are joined by a dashed rise-and-run triangle. The slope is 20 newtons per metre.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M132.9 290 V50 M195.7 290 V50 M258.6 290 V50 M321.4 290 V50 M384.3 290 V50 M447.1 290 V50 M510 290 V50"/>
<path d="M70 250 H510 M70 210 H510 M70 170 H510 M70 130 H510 M70 90 H510 M70 50 H510"/>
</g>
<path d="M70 290 H520 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="132.9" y="308">0.02</text><text x="195.7" y="308">0.04</text><text x="258.6" y="308">0.06</text><text x="321.4" y="308">0.08</text><text x="384.3" y="308">0.10</text><text x="447.1" y="308">0.12</text><text x="510" y="308">0.14</text>
<text x="295" y="330" font-size="13">extension, Δx (m)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="254">0.5</text><text x="62" y="214">1.0</text><text x="62" y="174">1.5</text><text x="62" y="134">2.0</text><text x="62" y="94">2.5</text><text x="62" y="54">3.0</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">spring force, |F_s| (N)</text>
<path d="M70 290 L510 66" stroke="#1d2b44" stroke-width="2"/>
<path d="M132.9 258 H447.1 V98" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4" fill="none"/>
<g fill="#1d2b44">
<rect x="141.4" y="246.8" width="8" height="8"/><rect x="223.1" y="207.6" width="8" height="8"/><rect x="295.4" y="168.4" width="8" height="8"/><rect x="377.1" y="129.2" width="8" height="8"/><rect x="449.4" y="90" width="8" height="8"/>
</g>
<circle cx="132.9" cy="258" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="447.1" cy="98" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="250" y="276" font-size="12" fill="#1d2b44">run = 0.100 m</text>
<text x="455" y="190" font-size="12" fill="#1d2b44">rise =</text>
<text x="455" y="206" font-size="12" fill="#1d2b44">2.00 N</text>
<text x="110" y="80" font-size="12" fill="#1d2b44">squares: data · line: best fit</text>
<text x="110" y="98" font-size="12" fill="#1d2b44">slope k = 2.00 N ÷ 0.100 m = 20 N/m</text>
</svg>
<figcaption>Figure 2. Force against extension for the data in Worked example 1. The points lie close to a straight line through the origin, so the spring obeys Hooke's law over this range. The slope of the best-fit line, found from two points on the line (hollow circles), is the spring constant, 20 N/m.</figcaption>
</figure>

**Interpretation.** The line passes through the origin and the points lie close to it, so force is proportional to extension: Hooke's law holds over this range. Each F/Δx ratio is between 19.6 and 20.4 N/m, which agrees.

**Check.** Predict before you test: with 0.40 kg, the stretch should be mg/k = 3.92 N ÷ 20 N/m = 0.196 m. If a much larger stretch is measured, the spring may have gone past the range where it behaves ideally.

### Designing the experiment well

- Measure the **relaxed length** first, and calculate every Δx from it. Plotting the total length instead of Δx gives a line that does not pass through the origin (it meets the length axis at the relaxed length).
- Read the ruler at eye level, at the same point on the spring each time.
- Use a range of masses large enough to give clear stretches, but stop before the spring stays permanently stretched.
- Let each mass come to rest before reading, so the spring force really equals mg.

## Worked example 2: a spring on a slope

**Question.** A 0.80 kg block rests on a **smooth** (frictionless) slope at 30° to the horizontal. It is held by a spring with k = 40 N/m, fixed at the top of the slope and parallel to it. (a) Derive an expression for the stretch of the spring. (b) Calculate it. (c) Compare it with the stretch when the same block hangs vertically from the same spring. Take **+x down the slope**.

1. **Forces along the slope:** the component of gravity, mg sin θ, down the slope (+x), and the spring force, k Δx, up the slope (−x). The normal force is perpendicular to the slope and has no component along it.
2. **(a)** The block is at rest, so the forces along the slope balance: kΔx = mg sin θ, giving **Δx = mg sin θ ÷ k**.
3. **(b)** Δx = (0.80 × 9.8 × sin 30°) ÷ 40 = 3.92 N ÷ 40 N/m = **0.098 m** (9.8 cm).
4. **(c)** Hanging vertically, kΔx = mg, so Δx = mg ÷ k = 7.84 N ÷ 40 N/m = **0.196 m**. The stretch on the slope is exactly half, because sin 30° = 0.5.

**Check with limiting cases.** If θ = 0 (a level surface), Δx = 0: nothing pulls the block along, so the spring stays relaxed. If θ = 90°, sin θ = 1 and the expression becomes the vertical result, mg/k. Both make sense.

## Worked example 3: force and acceleration at different positions

**Question.** The block in Figure 1 has mass 0.60 kg and slides on a smooth horizontal surface. The spring has k = 120 N/m. Take **+x to the right**, with x = 0 where the spring is relaxed. Find the spring force and the block's acceleration when the block is at (a) x = +5.0 cm, (b) x = −3.0 cm and (c) x = 0.

1. **(a)** Δx = +0.050 m. F_s = −kΔx = −120 × 0.050 = **−6.0 N** (to the left). a_x = F_s ÷ m = −6.0 ÷ 0.60 = **−10 m/s²**.
2. **(b)** Δx = −0.030 m. F_s = −120 × (−0.030) = **+3.6 N** (to the right). a_x = 3.6 ÷ 0.60 = **+6.0 m/s²**.
3. **(c)** Δx = 0, so F_s = **0** and a_x = **0**.

**Interpretation.** The spring force and acceleration always point toward x = 0 and are largest furthest from it. At x = 0 the acceleration is zero, but the block may still be moving fast: zero force does not mean zero velocity. This back-and-forth pattern is the basis of oscillations in Unit 7.

## Comparing springs and situations

Many questions ask you to compare two cases rather than calculate one. Start from kΔx = F and ask what stays fixed.

- **Same force, different springs.** Δx = F ÷ k, so the stiffer spring stretches less. A spring with twice the k stretches half as far under the same load.
- **Same spring, different forces.** Δx is proportional to F. Three times the hanging mass gives three times the stretch, as long as the spring stays in its Hooke's-law range.
- **Both ends of one spring.** Because an ideal spring has negligible mass, the net force on it must be zero even when things accelerate. So it pulls with the **same size** of force on the objects at both ends. If a 4.0 N pull stretches it, it pulls back with 4.0 N on your hand and 4.0 N on the wall.
- **Stretched or compressed by the same amount.** The size of the force is the same, k|Δx|; only the direction changes.

## Common misconceptions

- **"Δx is the length of the spring."** It is the **change** in length from the relaxed length.
- **"The spring force points in the direction the block moves."** It points toward the relaxed position, whichever way the block is moving (Worked example 3).
- **"The minus sign means the force is negative in size."** The minus sign only gives the direction. The size is k|Δx|.
- **"A bigger k is a softer spring."** A bigger k is a stiffer spring: more force per metre.
- **"k changes with the mass hung on it."** k is a property of the spring. The stretch changes; k does not (Worked example 1).
- **"Use centimetres with k in N/m."** Convert to metres first, or your force will be 100 times too large.
- **"A compressed spring pulls."** A stretched spring pulls on what is attached to it; a compressed spring pushes.

## Where this leads

Unlike kinetic friction in Topic 2.7, which stays the same as an object slides, a spring force changes as the object moves. The next topic, [Circular Motion](/advanced-course-resources/physics-1/2-9-circular-motion-study-guide/), returns to forces that change direction. Springs return in Unit 3 (energy stored in a spring) and Unit 7 (oscillations). Try the [practice questions](/advanced-course-resources/physics-1/2-8-spring-forces-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/2-8-spring-forces-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/2-8-spring-forces-checklist/) to consolidate. You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
