---
resourceId: "mb-ap-phys1-2.5-study-guide"
title: "Newton’s Second Law: Study Guide (Physics 1 2.5)"
description: "Learn when a system’s velocity changes and how to use a = ΣF / m with free-body diagrams, system choice, factor-of-change reasoning and symbolic derivations."
course: "physics-1"
unit: 2
topics: ["2.5"]
resourceType: "study-guide"
prerequisites:
  - "Drawing free-body diagrams with labelled force arrows (Topic 2.2)"
  - "Balanced forces and constant velocity (Topic 2.4)"
  - "Constant-acceleration equations (Topic 1.3)"
prerequisiteResources: ["mb-ap-phys1-2.4-study-guide"]
learningObjectives:
  - "Explain that a system’s velocity changes only when the net external force on it is not zero"
  - "Use a = ΣF / m, with the acceleration in the direction of the net force, to find an acceleration, a force or a mass"
  - "Choose a system, draw its free-body diagram and write the second law separately along each axis"
  - "Predict how the acceleration changes when the net force or the mass changes by a given factor"
  - "Derive a symbolic expression for the acceleration of a connected system and test it with limiting cases"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus. We use g = 9.8 m/s², the value on the course equation table (the course also accepts 10 m/s² where stated)"
related: ["mb-ap-phys1-2.5-revision-notes", "mb-ap-phys1-2.5-practice", "mb-ap-phys1-2.5-checklist"]
next: "mb-ap-phys1-2.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "If the net external force on a system is not zero, the forces are unbalanced and the system’s velocity changes."
  - "Newton’s second law: a = ΣF / m. The acceleration points in the same direction as the net force."
  - "For a fixed mass, a is proportional to ΣF. For a fixed net force, a is inversely proportional to m."
  - "Only external forces count. Forces between parts of the system cancel and cannot change the motion of its centre of mass."
  - "ma is not a force. Never draw it on a free-body diagram."
faqs:
  - question: "Is F = ma the same as a = ΣF / m?"
    answer: "They are the same law rearranged. Writing a = ΣF / m is safer, because it reminds you that the net force is the cause and the acceleration is the result, and that F means the vector sum of all external forces."
  - question: "Does the net force point in the direction the object is moving?"
    answer: "Not always. The net force points in the direction of the acceleration. A car braking while moving east has a net force pointing west."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Everything here uses algebra, diagrams and graphs. If you are taking the calculus-based Physics C: Mechanics course, it has its own separate guide.

## From balanced to unbalanced forces

Topic 2.4 showed that when the forces on a system are **balanced** (net force zero), its velocity stays constant. Now take away that condition.

When the net force on a system is **not zero**, the forces are **unbalanced**. An unbalanced force changes the system’s velocity: it can speed the system up, slow it down, change its direction, or do several of these at once.

The **net force** ΣF is the vector sum of every external force on the system. "External" means exerted by something outside the system. Find it one axis at a time, with signs:

ΣF_x = (sum of all x-components of the forces)

The velocity changes only along an axis where the net force is not zero. A box sliding across a floor can have balanced vertical forces and an unbalanced horizontal force at the same time. Its vertical velocity stays zero while its horizontal velocity changes.

## Newton’s second law

**Newton’s second law:** the acceleration of a system’s centre of mass is in the same direction as the net external force on the system, and its size is proportional to the size of that net force.

**a = ΣF / m**

Here m is the system’s mass in kg, ΣF is the net external force in newtons (N), and a is the acceleration of the centre of mass in m/s². The equation also defines the newton: **1 N = 1 kg·m/s²**, the net force that gives a 1 kg mass an acceleration of 1 m/s².

Use the law one axis at a time:

**ΣF_x = m a_x** and **ΣF_y = m a_y**

### Functional dependence: what happens if you change F or m?

The law tells you how acceleration depends on each variable.

- **a ∝ ΣF** (fixed mass). Double the net force and the acceleration doubles.
- **a ∝ 1/m** (fixed net force). Double the mass and the acceleration halves.

| Mass (kg) | Net force (N) | Acceleration (m/s²) |
|---|---|---|
| 2.0 | 1.0 | 0.50 |
| 2.0 | 2.0 | 1.0 |
| 2.0 | 4.0 | 2.0 |
| 4.0 | 2.0 | 0.50 |

To predict a factor of change, write the new acceleration as a ratio. If the net force triples and the mass doubles:

a_new / a_old = (3ΣF / 2m) ÷ (ΣF / m) = 3/2

The new acceleration is **1.5 times** the old one. No numbers are needed.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="p1-25a-title p1-25a-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-25a-title">Acceleration against net force for two carts</title>
<desc id="p1-25a-desc">Acceleration a in metres per second squared from 0 to 4 against net force in newtons from 0 to 2.0. Two straight lines start at the origin. The steeper solid line, with filled circle data points, is for a 0.50 kg cart and reaches 4.0 m/s² at 2.0 N, so its slope is 2.0 per kilogram. The shallower dashed line, with open square data points, is for a 1.0 kg cart and reaches 2.0 m/s² at 2.0 N, so its slope is 1.0 per kilogram. The slope of each line is one divided by the mass.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M175 290 V50 M280 290 V50 M385 290 V50 M490 290 V50"/>
<path d="M70 230 H490 M70 170 H490 M70 110 H490 M70 50 H490"/>
</g>
<path d="M70 290 H500 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="175" y="308">0.5</text><text x="280" y="308">1.0</text><text x="385" y="308">1.5</text><text x="490" y="308">2.0</text>
<text x="280" y="330" font-size="13">net force, ΣF (N)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="234">1</text><text x="62" y="174">2</text><text x="62" y="114">3</text><text x="62" y="54">4</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">acceleration, a (m/s²)</text>
<path d="M70 290 L490 50" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M70 290 L490 170" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 5"/>
<g fill="#1d2b44"><circle cx="175" cy="230" r="5"/><circle cx="280" cy="170" r="5"/><circle cx="385" cy="110" r="5"/><circle cx="490" cy="50" r="5"/></g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2"><rect x="170" y="255" width="10" height="10"/><rect x="275" y="225" width="10" height="10"/><rect x="380" y="195" width="10" height="10"/><rect x="485" y="165" width="10" height="10"/></g>
<text x="80" y="70" font-size="12" fill="#1d2b44">solid line, filled circles:</text>
<text x="80" y="86" font-size="12" fill="#1d2b44">m = 0.50 kg, slope 2.0 kg⁻¹</text>
<text x="300" y="262" font-size="12" fill="#1d2b44">dashed line, open squares:</text>
<text x="300" y="278" font-size="12" fill="#1d2b44">m = 1.0 kg, slope 1.0 kg⁻¹</text>
</svg>
<figcaption>Figure 1. For a fixed mass, acceleration is proportional to net force: a straight line through the origin. The slope is 1/m, so the lighter cart (solid line) has the steeper line. At the same net force of 1.0 N, the 0.50 kg cart accelerates at 2.0 m/s² and the 1.0 kg cart at 1.0 m/s².</figcaption>
</figure>

Figure 1 also shows how to **measure a mass** with the second law: vary the net force on a cart, measure each acceleration, plot a against ΣF, and take m = 1 / slope.

## A routine for every second-law problem

1. **Choose the system.** Say in words what is inside it.
2. **Draw a free-body diagram** for that system. Each force is a separate straight arrow from a dot, labelled with what exerts it.
3. **Choose axes**, ideally with one axis along the acceleration.
4. **Write ΣF = ma along each axis**, with signs from your axes.
5. **Solve**, then check units, signs and a limiting case.

The quantity ma is the *result* of the forces, not another force. It never goes on the free-body diagram.

## Worked example 1: dragging a crate

**Question.** Take **+x to the right** and **+y up**. A 25 kg crate starts from rest on a level floor. A worker pulls it with a horizontal rope force of 120 N to the right. The floor exerts a friction force of 45 N to the left (Topic 2.7 explains where this value comes from). Find (a) the normal force, (b) the crate’s acceleration and (c) its speed and displacement after 2.0 s.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="p1-25b-title p1-25b-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-25b-title">Free-body diagram of a crate pulled across a floor</title>
<desc id="p1-25b-desc">A dot represents the 25 kg crate. Four separate straight arrows start on the dot. An arrow pointing right, labelled rope force 120 N exerted by the rope. A shorter arrow pointing left, labelled friction 45 N exerted by the floor. A long arrow pointing up, labelled normal force 245 N exerted by the floor. An equally long arrow pointing down, labelled gravitational force 245 N exerted by Earth. Beside the diagram, a separate dashed arrow pointing right is labelled acceleration 3.0 m/s², not a force.</desc>
<defs><marker id="p1-25-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-25-ah)">
<path d="M220 165 H280"/>
<path d="M220 165 H197.5"/>
<path d="M220 165 V42.5"/>
<path d="M220 165 V287.5"/>
</g>
<circle cx="220" cy="165" r="6" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="288" y="160">F_rope = 120 N (rope)</text>
<text x="70" y="158">f = 45 N (floor)</text>
<text x="230" y="50">F_N = 245 N (floor)</text>
<text x="230" y="290">F_g = 245 N (Earth)</text>
</g>
<path d="M410 240 H500" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#p1-25-ah)"/>
<text x="400" y="225" font-size="12" fill="#1d2b44">a = 3.0 m/s²</text>
<text x="400" y="265" font-size="12" fill="#1d2b44">(not a force: drawn</text>
<text x="400" y="281" font-size="12" fill="#1d2b44">away from the dot)</text>
<text x="40" y="318" font-size="12" fill="#1d2b44">+x to the right, +y up. Arrow lengths to scale.</text>
</svg>
<figcaption>Figure 2. Free-body diagram for the crate. Vertical forces balance; horizontal forces do not. The acceleration is shown separately as a dashed arrow because it is the result of the forces, not one of them.</figcaption>
</figure>

1. **System:** the crate. Forces: rope, friction (floor), normal (floor), gravity (Earth).
2. **Vertical axis.** The crate stays on the floor, so a_y = 0:
   ΣF_y = F_N − F_g = 0, so F_N = F_g = mg = 25 kg × 9.8 m/s² = **245 N** (about 250 N to 2 significant figures).
3. **Horizontal axis.** ΣF_x = +120 N − 45 N = +75 N.
   a_x = ΣF_x / m = 75 N ÷ 25 kg = **+3.0 m/s²** (to the right).
4. **Kinematics** (Topic 1.3), constant acceleration from rest:
   v_x = 0 + (3.0 m/s²)(2.0 s) = **6.0 m/s**;
   Δx = ½ (3.0 m/s²)(2.0 s)² = **6.0 m** to the right.

**Check.** Units: N ÷ kg = (kg·m/s²) ÷ kg = m/s². The acceleration points the same way as the net force (right). If the friction were 120 N, the net force would be zero and a_x = 0, as Topic 2.4 predicts.

## Choosing the system: external and internal forces

The second law uses only **external** forces. Forces that one part of the system exerts on another part come in Newton’s third-law pairs (Topic 2.3). Both forces of a pair are inside the system, so they cancel in ΣF.

That gives a strong result: **the velocity of a system’s centre of mass changes only if a non-zero net external force acts on the system.** Internal pushes and pulls cannot change it.

**Example.** Two skaters stand at rest on smooth ice: A (60 kg) and B (40 kg). They push on each other with forces of 120 N for 0.50 s. Take +x towards B’s side.

- On A: a = −120 N ÷ 60 kg = −2.0 m/s², so A ends at −1.0 m/s.
- On B: a = +120 N ÷ 40 kg = +3.0 m/s², so B ends at +1.5 m/s.
- Centre-of-mass velocity: (60 × (−1.0) + 40 × 1.5) ÷ 100 = **0 m/s**.

Each skater speeds up, but the two-skater system’s centre of mass does not move. The ice exerts no horizontal force, so there is no net external force on the system.

## Worked example 2: two blocks, two systems

**Question.** Take **+x to the right**. Block A (4.0 kg) and block B (2.0 kg) sit on a frictionless horizontal surface, joined by a light string with B behind A. A student pulls A to the right with a force of 18 N. Find the acceleration and the string tension.

1. **System 1: A and B together.** The string forces are internal and cancel. The only horizontal external force is 18 N.
   a = 18 N ÷ (4.0 kg + 2.0 kg) = **3.0 m/s²** to the right.
2. **System 2: B alone.** Its only horizontal force is the string tension T, pulling right.
   T = m_B a = 2.0 kg × 3.0 m/s² = **6.0 N**.
3. **Check with System 3: A alone.** Forces: 18 N right, 6.0 N left (string).
   ΣF_x = 18 − 6.0 = 12 N, and m_A a = 4.0 × 3.0 = 12 N. ✓

**Interpretation.** The whole-system view gives the acceleration fastest, because the unknown tension does not appear. Splitting the system is how you find an internal force. The tension (6.0 N) is less than the pull (18 N) because the string only has to accelerate B.

## Worked example 3: deriving a symbolic expression

**Question.** A cart of mass m₁ sits on a level, frictionless track. A light string runs from the cart over a light, frictionless pulley to a hanging block of mass m₂. The system is released from rest. Derive expressions for the acceleration a and the string tension T, then evaluate them for m₁ = 0.80 kg and m₂ = 0.20 kg.

<figure>
<svg viewBox="0 0 560 260" role="img" aria-labelledby="p1-25c-title p1-25c-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-25c-title">Cart on a level track joined over a pulley to a hanging block</title>
<desc id="p1-25c-desc">A cart labelled m₁ sits on a horizontal track. A string runs horizontally from the cart to a pulley at the right end of the track, then hangs straight down to a block labelled m₂. An arrow beside the cart points right, labelled a, and an arrow beside the hanging block points down, labelled a, showing that both move with the same size of acceleration.</desc>
<defs><marker id="p1-25-ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="260" fill="#ffffff"/>
<path d="M40 120 H420 V250" stroke="#1d2b44" stroke-width="3" fill="none"/>
<rect x="140" y="72" width="110" height="40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="165" cy="116" r="5" fill="#1d2b44"/><circle cx="225" cy="116" r="5" fill="#1d2b44"/>
<text x="195" y="97" font-size="14" fill="#1d2b44" text-anchor="middle">m₁</text>
<path d="M250 92 H425" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="425" cy="105" r="13" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<path d="M438 105 V170" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="418" y="170" width="40" height="40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="438" y="195" font-size="14" fill="#1d2b44" text-anchor="middle">m₂</text>
<path d="M150 50 H230" stroke="#1d2b44" stroke-width="2" marker-end="url(#p1-25-ah2)"/>
<text x="235" y="54" font-size="12" fill="#1d2b44">a</text>
<path d="M490 160 V220" stroke="#1d2b44" stroke-width="2" marker-end="url(#p1-25-ah2)"/>
<text x="498" y="195" font-size="12" fill="#1d2b44">a</text>
<text x="40" y="160" font-size="12" fill="#1d2b44">frictionless track; light string and pulley</text>
</svg>
<figcaption>Figure 3. The string keeps the cart and the hanging block moving together, so they have the same size of acceleration. Take the positive direction for each object to be its direction of motion: right for the cart, down for the block.</figcaption>
</figure>

1. **Cart (m₁), horizontal:** the only horizontal force is the tension. T = m₁a.
2. **Hanging block (m₂), +down:** gravity m₂g down, tension T up. m₂g − T = m₂a.
3. **Add the two equations** to remove T: m₂g = (m₁ + m₂)a, so
   **a = m₂g / (m₁ + m₂)**.
4. **Substitute back:** **T = m₁a = m₁m₂g / (m₁ + m₂)**.
5. **Numbers:** a = (0.20 × 9.8) ÷ 1.00 = **1.96 m/s² ≈ 2.0 m/s²**; T = 0.80 × 1.96 = **1.568 N ≈ 1.6 N**.

**Check with limiting cases.**

- If m₁ → 0, then a → g: with no cart to drag, the block falls freely. ✓
- If m₂ is very small compared with m₁, a ≈ m₂g / m₁: a tiny weight barely moves a heavy cart. ✓
- T (1.6 N) is less than m₂g (1.96 N). It must be, or the block could not accelerate downward. ✓

**Shortcut.** Treat cart, string and block as one system. The only unbalanced external force along the string’s path is m₂g, and the mass being accelerated is m₁ + m₂. That gives step 3 in one line.

## Common misconceptions

- **"An object moves in the direction of the net force."** The *acceleration* is in the direction of the net force. A car moving east while braking has a net force west.
- **"Something must push an object forward to keep it moving."** A non-zero net force changes velocity. Constant velocity needs zero net force (Topic 2.4).
- **"ma is a force, so draw it on the diagram."** ma is what the forces produce. Drawing it counts it twice.
- **"The tension in a string always equals the hanging weight."** Only when the hanging object is not accelerating. In Worked example 3 the tension is 1.6 N, not 1.96 N.
- **"Internal forces can move a system."** The skaters speed up, but their combined centre of mass stays put.
- **Using a force instead of the net force.** In Worked example 1, 120 N ÷ 25 kg = 4.8 m/s² is wrong: friction also acts.
- **Mixing up mass and weight.** Mass (kg) goes in the denominator; weight is a force (N) and goes in ΣF.

## Where this leads

The second law turns every force model into motion. Topic 2.6 (Gravitational Force) explains the weight force mg and shows why an object’s apparent weight changes when it accelerates; Topics 2.7 and 2.8 add friction and spring forces; Topic 2.9 applies a = ΣF / m to circular motion. Try the [practice questions](/advanced-course-resources/physics-1/2-5-newtons-second-law-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/2-5-newtons-second-law-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/2-5-newtons-second-law-checklist/) to consolidate. Next topic: [Gravitational Force](/advanced-course-resources/physics-1/2-6-gravitational-force-study-guide/). You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
