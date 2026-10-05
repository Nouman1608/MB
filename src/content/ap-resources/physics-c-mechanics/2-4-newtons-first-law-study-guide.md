---
resourceId: "mb-ap-physcm-2.4-study-guide"
title: "Newton’s First Law: Study Guide (Physics C: Mechanics 2.4)"
description: "Calculus-based guide to Newton’s first law: net force as a vector sum, translational equilibrium, forces balanced in one direction but not another, and inertial reference frames."
course: "physics-c-mechanics"
unit: 2
topics: ["2.4"]
resourceType: "study-guide"
prerequisites:
  - "Adding vectors by components (Topic 1.1)"
  - "Velocity and acceleration as derivatives (Topic 1.2) and relative motion (Topic 1.4)"
  - "Free-body diagrams and third-law pairs (Topics 2.2 and 2.3)"
prerequisiteResources: ["mb-ap-physcm-2.3-study-guide"]
learningObjectives:
  - "Find the net force on a system as the vector sum of all forces exerted on it"
  - "State the condition for translational equilibrium and use it, component by component, to find unknown forces"
  - "Explain, using the first law, why a system with zero net force keeps a constant velocity, including zero"
  - "Decide from position or velocity functions in which directions the forces on a system are balanced"
  - "Describe an inertial reference frame and recognise when an observer’s frame is not inertial"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Trigonometry and calculus as in Unit 1; a calculator for arithmetic and sines and cosines. We use g = 9.8 m/s², the value on the course equation table, and give answers to 2 significant figures"
related: ["mb-ap-physcm-2.4-revision-notes", "mb-ap-physcm-2.4-practice", "mb-ap-physcm-2.4-checklist"]
next: "mb-ap-physcm-2.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "The net force is the vector sum of every force exerted on the system: ΣF = F₁ + F₂ + F₃ + …"
  - "Translational equilibrium means ΣF = 0, which you apply as ΣF_x = 0 and ΣF_y = 0 separately."
  - "First law: if the net force on a system is zero, its velocity stays constant in size and direction. Being at rest is one case."
  - "Forces can balance along one axis but not another. The velocity then changes only along the unbalanced direction."
  - "An inertial reference frame is one in which the first law is observed to hold. An accelerating observer’s frame is not inertial."
faqs:
  - question: "Does a moving object need a force to keep it moving?"
    answer: "No. With zero net force, a moving object keeps the same velocity. Everyday objects slow down because forces such as friction and air resistance act on them, not because motion needs a push."
  - question: "Is an object momentarily at rest always in equilibrium?"
    answer: "No. Equilibrium needs zero net force, not zero velocity. A ball at the top of a vertical throw is at rest for an instant, but gravity still acts, so its velocity is changing."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Which course this is for.** This guide is for the **calculus-based** Physics C: Mechanics course. Physics 1 also covers Newton’s first law; here we also connect it to velocity as a derivative. Keep the two separate when you revise.

## Net force: add every force as a vector

In Topic 2.3 you learned to find every force on a system and its partner. Now add up the forces **on the system only**. The **net force** is their vector sum:

**ΣF = F₁ + F₂ + F₃ + …**

Forces are vectors, so add them by components. Choose axes first, then:

ΣF_x = F₁ₓ + F₂ₓ + F₃ₓ + … and ΣF_y = F₁ᵧ + F₂ᵧ + F₃ᵧ + …

Two rules keep this honest:

- Include **only forces exerted on the system** by things outside it. Third-law partners act on other objects, so they never enter this sum. Internal forces cancel in pairs (Topic 2.3).
- Keep the signs. A force of 40 N in −x contributes −40 N to ΣF_x.

## Translational equilibrium

A system is in **translational equilibrium** when the forces on it add to zero:

**ΣF = 0**, which in components means **ΣF_x = 0 and ΣF_y = 0** (and ΣF_z = 0 in three dimensions).

Each component equation is a separate condition. That is useful: in two dimensions, equilibrium gives you **two equations**, so you can find two unknowns, such as two tensions.

Equilibrium does **not** require the system to be at rest. A lift moving up at a steady 2 m/s is in equilibrium, exactly like a lift parked at a floor.

## Newton’s first law

**If the net force on a system is zero, the velocity of the system stays constant.** Constant means **both** speed and direction stay the same. Rest (v = 0) is one special case.

In the language of Unit 1: constant velocity means

a = dv/dt = 0, so the position is a straight-line function of time: **r(t) = r₀ + v t**.

So you can read the first law in both directions on a graph:

- If an x–t graph is a straight line (constant slope), the forces along x are balanced.
- If the slope of x–t is changing, the net force along x is not zero.

Three consequences are worth stating plainly.

1. **Motion does not need a force.** A puck sliding on smooth ice keeps going with no forward push. Everyday objects slow down because friction or drag acts on them.
2. **A change in velocity needs a net force.** Speeding up, slowing down or turning all need ΣF ≠ 0. A car rounding a bend at constant speed is **not** in equilibrium, because its direction is changing.
3. **"At rest for an instant" is not equilibrium.** A ball at the top of its flight has v = 0 for an instant, but gravity acts on it, so its velocity keeps changing.

## Balanced in one direction, unbalanced in another

The component equations work independently. Forces can be balanced along x while unbalanced along y. Then:

- the velocity component along the **balanced** axis stays constant;
- the velocity component along the **unbalanced** axis changes;
- the velocity changes **only in the direction of the unbalanced force**.

A projectile with air resistance ignored is the familiar case. Gravity acts only vertically, so ΣF_x = 0: the horizontal velocity stays constant while the vertical velocity changes. Worked example 2 shows the same idea for a drone.

## Inertial reference frames

Velocity depends on who is measuring it (Topic 1.4). So "constant velocity" needs a reference frame. An **inertial reference frame** is one in which an observer finds the first law holds: objects with zero net force keep a constant velocity.

Test a frame by watching an object with no net horizontal force. Picture a ball resting on the smooth floor of a train carriage. When the train brakes:

- A **platform** observer sees the ball keep moving forwards at the same velocity, because no horizontal force acts on it. The carriage slows down underneath it. The first law holds: this frame is inertial (to a very good approximation).
- A **passenger** sees the ball start to roll forwards from rest, even though nothing pushes it forwards. The first law fails in the braking carriage’s frame: that frame is **not inertial**.

Any frame moving at **constant velocity** relative to an inertial frame is also inertial. Any frame that **accelerates** (speeds up, slows down or turns) relative to an inertial frame is not. In this course, the ground is treated as an inertial frame unless a question says otherwise.

## Worked example 1: a banner held by two cables

**Question.** A banner of mass 12 kg hangs at rest from two cables. Cable 1 pulls up and to the left at **35° above the horizontal**; cable 2 pulls up and to the right at **50° above the horizontal**. Take **+x to the right** and **+y upward**. Find the two tensions.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="pcm24-ban-title pcm24-ban-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm24-ban-title">Free-body diagram and closed vector triangle for the banner</title>
<desc id="pcm24-ban-desc">Left: a free-body diagram. The banner is a dot with three arrows from it: T1 up and to the left at 35 degrees above the horizontal, T2 up and to the right at 50 degrees above the horizontal, and the weight F_g straight down. Arrow lengths are drawn to scale: about 76 N, 97 N and 118 N. Right: the same three forces placed tip to tail form a closed triangle. The weight points down, T1 then points up and left, and T2 returns to the starting point, showing that the vector sum is zero.</desc>
<defs><marker id="pcm24-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<text x="180" y="24" font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="600">Free-body diagram (to scale)</text>
<text x="420" y="24" font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="600">Forces tip to tail: ΣF = 0</text>
<path d="M90 150 H270" stroke="#1d2b44" stroke-width="0.8" stroke-dasharray="3 4"/>
<circle cx="180" cy="150" r="5" fill="#1d2b44"/>
<path d="M180 150 L105.4 97.8" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm24-ah)"/>
<path d="M180 150 L254.6 61.1" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm24-ah)"/>
<path d="M180 150 V291" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm24-ah)"/>
<text x="62" y="90" font-size="12" fill="#1d2b44">T₁ ≈ 76 N</text>
<text x="230" y="52" font-size="12" fill="#1d2b44">T₂ ≈ 97 N</text>
<text x="190" y="285" font-size="12" fill="#1d2b44">F_g = 118 N</text>
<text x="128" y="143" font-size="12" fill="#1d2b44">35°</text>
<text x="208" y="143" font-size="12" fill="#1d2b44">50°</text>
<path d="M380 60 V201" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm24-ah)"/>
<path d="M380 201 L305.4 148.8" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm24-ah)"/>
<path d="M305.4 148.8 L380 59.9" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="7 4" marker-end="url(#pcm24-ah)"/>
<text x="390" y="135" font-size="12" fill="#1d2b44">F_g</text>
<text x="330" y="196" font-size="12" fill="#1d2b44">T₁</text>
<text x="300" y="100" font-size="12" fill="#1d2b44">T₂ (dashed)</text>
<text x="420" y="250" font-size="12" fill="#1d2b44" text-anchor="middle">The arrows close: no gap, so the net force is zero</text>
</svg>
<figcaption>Figure 1. Left: the free-body diagram, with each force drawn as a single arrow from the dot, as the course expects (no components drawn on the diagram). Right: the same forces tip to tail form a closed triangle, which is what ΣF = 0 looks like.</figcaption>
</figure>

1. Weight: F_g = mg = 12 × 9.8 = **117.6 N**, in −y.
2. Components of the tensions: T₁ = (−T₁ cos 35°, T₁ sin 35°) and T₂ = (T₂ cos 50°, T₂ sin 50°).
3. The banner is at rest, so ΣF_x = 0: −T₁ cos 35° + T₂ cos 50° = 0, which gives T₂ = T₁ cos 35° / cos 50° ≈ 1.274 T₁.
4. ΣF_y = 0: T₁ sin 35° + T₂ sin 50° − 117.6 = 0.
5. Substitute: T₁(0.5736 + 1.274 × 0.7660) = 117.6, so T₁ ≈ **76 N** and T₂ ≈ **97 N**.

**Check.** Horizontal components: 76 cos 35° ≈ 62 N left and 97 cos 50° ≈ 62 N right, so they balance. Vertical components: 43.5 N + 74.1 N = 117.6 N, matching the weight. The steeper cable carries more tension, which is what you should expect: it does more of the lifting.

## Worked example 2: balanced along one axis only

**Question.** Take **+x horizontal, along the flight path** and **+y upward**. A camera drone’s position, measured from its take-off point, is x(t) = (3.0 m/s)t and y(t) = (0.25 m/s²)t² for 0 ≤ t ≤ 4.0 s. After 4.0 s it climbs at a steady rate while x continues as before. Decide in which directions the forces on the drone are balanced, describe the net force, and sketch v_x and v_y against time from 0 to 8.0 s.

1. Differentiate: v_x = dx/dt = **3.0 m/s** (constant); v_y = dy/dt = **0.50t m/s**.
2. Differentiate again: a_x = **0**; a_y = **0.50 m/s²**.
3. **Horizontal:** v_x is constant, so by the first law the horizontal forces are balanced: **ΣF_x = 0**.
4. **Vertical (0 to 4.0 s):** v_y is changing, so **ΣF_y ≠ 0**. The net force points in **+y** (v_y is increasing). The drone is **not** in equilibrium, even though it moves at a steady 3.0 m/s horizontally.
5. **At t = 4.0 s:** v_y = 2.0 m/s and y = 4.0 m. After that, v_y stays at 2.0 m/s, so **ΣF = 0** in both directions: the drone is in equilibrium, moving at √(3.0² + 2.0²) ≈ **3.6 m/s** at about **34° above the horizontal**.

We did not need to know the separate forces (rotor thrust, weight, air resistance). The motion alone tells us which components of the net force are zero.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="pcm24-v-title pcm24-v-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm24-v-title">Sketch of velocity components against time for the drone</title>
<desc id="pcm24-v-desc">Velocity in metres per second from 0 to 4 against time in seconds from 0 to 8. A solid horizontal line at 3.0 m/s shows v_x, constant throughout. A dashed line shows v_y: it rises in a straight line from 0 at t = 0 to 2.0 m/s at t = 4 s, then stays flat at 2.0 m/s until 8 s. A vertical dotted line at 4 s divides the graph into two regions: the first labelled net force upward, not in equilibrium; the second labelled net force zero, in equilibrium.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M175 290 V50 M385 290 V50"/>
<path d="M70 230 H500 M70 170 H500 M70 110 H500 M70 50 H500"/>
</g>
<path d="M70 290 H515 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<path d="M280 290 V45" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 3"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="175" y="308">2</text><text x="280" y="308">4</text><text x="385" y="308">6</text><text x="490" y="308">8</text>
<text x="280" y="330" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="234">1</text><text x="62" y="174">2</text><text x="62" y="114">3</text><text x="62" y="54">4</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">velocity (m/s)</text>
<path d="M70 110 H490" stroke="#1d2b44" stroke-width="2.5" fill="none"/>
<path d="M70 290 L280 170 H490" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 5" fill="none"/>
<text x="400" y="100" font-size="12" fill="#1d2b44">v_x = 3.0 m/s (solid)</text>
<text x="400" y="160" font-size="12" fill="#1d2b44">v_y = 2.0 m/s (dashed)</text>
<text x="150" y="240" font-size="12" fill="#1d2b44">v_y = 0.50t (dashed)</text>
<text x="80" y="70" font-size="12" fill="#1d2b44">0–4 s: ΣF_y ≠ 0, net force up</text>
<text x="290" y="70" font-size="12" fill="#1d2b44">4–8 s: ΣF = 0, equilibrium</text>
</svg>
<figcaption>Figure 2. Velocity components of the drone in Worked example 2. A flat line means the forces along that axis are balanced; a sloping line means they are not. The horizontal forces are balanced throughout; the vertical forces balance only after 4 s.</figcaption>
</figure>

## Common misconceptions

- **"A moving object needs a force to keep moving."** With zero net force it keeps its velocity. Friction and drag are what slow real objects.
- **"Equilibrium means at rest."** It means ΣF = 0. Constant velocity counts.
- **"v = 0, so the forces are balanced."** At the top of a throw, v = 0 for an instant but gravity is unbalanced.
- **"Constant speed means equilibrium."** Turning at constant speed is a change in velocity, so the net force is not zero.
- **"If any force is unbalanced, the whole velocity changes."** Only the component along the unbalanced direction changes (Worked example 2).
- **Adding third-law partners into ΣF.** Only forces exerted on the chosen system belong in the sum.
- **Using the first law in an accelerating frame.** In a braking train or a turning car, the first law appears to fail. Analyse from an inertial frame, such as the ground.

## Where this leads

Topic 2.5, Newton’s Second Law, tells you what happens when ΣF is **not** zero: the net force sets the acceleration. Equilibrium problems like Worked example 1 return throughout the course, and in Unit 5 you will add a second condition for objects that can rotate. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/2-4-newtons-first-law-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/2-4-newtons-first-law-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/2-4-newtons-first-law-checklist/). Next topic: [Newton’s second law](/advanced-course-resources/physics-c-mechanics/2-5-newtons-second-law-study-guide/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
