---
resourceId: "mb-ap-physcm-1.4-study-guide"
title: "Reference Frames and Relative Motion: Study Guide (Physics C: Mechanics 1.4)"
description: "Calculus-based relative motion: what a reference frame is, converting position and velocity between inertial frames by vector addition, and why every inertial observer measures the same acceleration."
course: "physics-c-mechanics"
unit: 1
topics: ["1.4"]
resourceType: "study-guide"
prerequisites:
  - "Adding and subtracting vectors by components, and finding a magnitude and angle (Topic 1.1)"
  - "Velocity and acceleration as derivatives of position (Topic 1.2)"
prerequisiteResources: ["mb-ap-physcm-1.3-study-guide"]
learningObjectives:
  - "Say which observer a measurement belongs to, and describe that observer's frame: origin, axes and motion"
  - "Explain why speed and direction depend on the frame, using a one-dimensional example"
  - "Convert a velocity from one frame to another with v_PA = v_PB + v_BA, in one, two or three dimensions"
  - "Differentiate the position link r_PA = r_PB + r_BA to show that inertial observers measure the same acceleration"
  - "Solve heading-and-drift problems by drawing a vector triangle and using components"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "A calculator for arithmetic, square roots and inverse trigonometry. Where gravity appears we use g = 9.8 m/s², the value on the course equation table"
related: ["mb-ap-physcm-1.4-revision-notes", "mb-ap-physcm-1.4-practice", "mb-ap-physcm-1.4-checklist"]
next: "mb-ap-physcm-1.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "A velocity has no meaning until you say who measures it. Write it as v_PA: the velocity of P relative to A."
  - "Velocities between frames combine as vectors: v_PA = v_PB + v_BA. The inner letters match and drop out."
  - "Swapping the order flips the sign: v_BA = −v_AB."
  - "Differentiate the link: if v_BA is constant, a_PA = a_PB. Every inertial observer measures the same acceleration."
  - "Unless a problem says otherwise, assume the frame is inertial."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 1.4?"
    answer: "They are separate courses with the same topic title. In Physics 1, adding velocities between frames is limited to one dimension. In Physics C: Mechanics you add them as full vectors in two or three dimensions, and you can prove the acceleration result by differentiating."
  - question: "Is the ground an inertial frame?"
    answer: "Not exactly, because Earth rotates, but the effects are tiny for the motions in this course. Treat the ground, and anything moving at constant velocity relative to it, as inertial unless told otherwise."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 1.4 with this title. In Physics 1, adding velocities between frames stays in one dimension. In this **calculus-based** course you add them as full vectors in two or three dimensions, and you prove the acceleration rule by differentiating. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/1-4-reference-frames-relative-motion-study-guide/); do not mix the two when you revise.

## What a reference frame is

A **reference frame** is the viewpoint of an observer, made precise. It has:

- an **origin** (the observer's zero of position),
- a set of **axes** with positive directions (for example +x east, +y north),
- a **clock**, and
- a **motion** of its own relative to other frames (at rest on the ground, riding in a train, flying in the air mass).

Every position, displacement, velocity and acceleration in physics is measured **in some frame**. Two observers who use different frames can report **different sizes and different directions** for the same quantity. Neither is wrong. They are describing the same motion from different places.

A quick example. You sit in a bus that moves east at 15 m/s. A cup rests on your tray. In your frame the cup has velocity 0. In the frame of a person on the pavement, the cup moves east at 15 m/s. Both statements are true, because each belongs to a different frame.

So always write down **whose** frame you are using, as well as the axis, before you write any number.

## Notation: subscripts that name the observer

We write **v_PA** for "the velocity of P **relative to** A", that is, as measured by an observer at rest in frame A. The first letter is the object; the second is the frame. The same pattern works for position r_PA and acceleration a_PA.

Two rules follow directly:

- **Reversal:** the velocity of A relative to P is the opposite vector, **v_AP = −v_PA**.
- **Chaining:** to get from P to A through a third frame B, add the vectors with matching inner letters:

**v_PA = v_PB + v_BA**

Read it as "P relative to B, plus B relative to A". The inner B's match and drop out of the result. You can extend the chain: v_PA = v_PC + v_CB + v_BA.

### One dimension first

Take **+x east**, with all velocities measured relative to the ground G. Car A moves at v_AG = +28 m/s. Truck B moves at v_BG = +22 m/s. Car C comes the other way at v_CG = −25 m/s.

- Velocity of A relative to B: v_AB = v_AG + v_GB = v_AG − v_BG = 28 − 22 = **+6.0 m/s**. The driver of the truck sees the car pull ahead slowly.
- Reversed: v_BA = **−6.0 m/s**. From the car, the truck drifts backwards.
- Velocity of C relative to A: v_CA = v_CG − v_AG = −25 − 28 = **−53 m/s**. The oncoming car closes at 53 m/s.

The same quantity, the truck's velocity, is +22 m/s for the ground and −6.0 m/s for car A. The frame decides both the size and the sign.

## Converting measurements between frames

Here is where the velocity rule comes from. Let frame S be the ground and frame S′ be a cart that moves along +x at a **constant** velocity V relative to S. Their origins match at t = 0. After a time t, the origin O′ is a distance Vt from O. A point P is at x in S and at x′ in S′.

<figure>
<svg viewBox="0 0 560 260" role="img" aria-labelledby="pcm14-frames-title pcm14-frames-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm14-frames-title">Position of point P measured in two frames</title>
<desc id="pcm14-frames-desc">A solid ground axis labelled x, frame S, has origin O on the left. Above it a cart carries a dashed axis labelled x prime, frame S prime, with origin O prime further right. An arrow labelled V shows the cart moving to the right at constant velocity. A point P sits on the ground axis further right, with a dotted line up to the cart's axis. Measurement lines below show that O to O prime is V t, O prime to P is x prime, and O to P is x, so x equals x prime plus V t.</desc>
<rect x="0" y="0" width="560" height="260" fill="#ffffff"/>
<path d="M205 80 H525" stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="7 5" fill="none"/>
<path d="M525 80 l-9 -5 v10 z" fill="#1d2b44"/>
<text x="532" y="84" font-size="13" fill="#1d2b44">x′</text>
<circle cx="220" cy="80" r="4" fill="#1d2b44"/>
<text x="220" y="68" font-size="12" fill="#1d2b44" text-anchor="middle">O′</text>
<rect x="200" y="90" width="150" height="40" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<text x="275" y="114" font-size="11" fill="#1d2b44" text-anchor="middle">frame S′ rides on the cart</text>
<path d="M235 148 H305" stroke="#1d2b44" stroke-width="2" fill="none"/>
<path d="M312 148 l-9 -5 v10 z" fill="#1d2b44"/>
<text x="318" y="152" font-size="12" fill="#1d2b44">V (constant)</text>
<path d="M40 175 H525" stroke="#1d2b44" stroke-width="2" fill="none"/>
<path d="M525 175 l-9 -5 v10 z" fill="#1d2b44"/>
<text x="532" y="179" font-size="13" fill="#1d2b44">x</text>
<circle cx="60" cy="175" r="4" fill="#1d2b44"/>
<text x="60" y="163" font-size="12" fill="#1d2b44" text-anchor="middle">O</text>
<text x="80" y="163" font-size="11" fill="#1d2b44">frame S (ground)</text>
<path d="M440 80 V175" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<circle cx="440" cy="175" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="450" y="166" font-size="13" fill="#1d2b44" font-weight="600">P</text>
<path d="M60 202 H218 M60 196 V208 M218 196 V208 M222 202 H440 M222 196 V208 M440 196 V208 M60 232 H440 M60 226 V238 M440 226 V238" stroke="#1d2b44" stroke-width="1.3" fill="none"/>
<text x="139" y="218" font-size="12" fill="#1d2b44" text-anchor="middle">Vt</text>
<text x="331" y="218" font-size="12" fill="#1d2b44" text-anchor="middle">x′</text>
<text x="250" y="252" font-size="12" fill="#1d2b44" text-anchor="middle">x = x′ + Vt</text>
</svg>
<figcaption>Figure 1. One point, two frames. The ground axis (solid) and the cart's axis (dashed) measure P from different origins, so x = x′ + Vt.</figcaption>
</figure>

From the figure, **x′ = x − Vt**. This converts a position measured in S into a position measured in S′. Now differentiate with respect to time, remembering that V is constant:

1. Velocity: dx′/dt = dx/dt − V, so **v′ = v − V**. This is v_PS′ = v_PS + v_SS′ in one dimension, since v_SS′ = −V.
2. Acceleration: d²x′/dt² = d²x/dt² − dV/dt = d²x/dt², so **a′ = a**.

In three dimensions the same steps use vectors. The position link is r_PA = r_PB + r_BA. Differentiating once gives v_PA = v_PB + v_BA. Differentiating again gives a_PA = a_PB + a_BA. When frame B moves at constant velocity relative to A, a_BA = 0 and

**a_PA = a_PB**

This is why **all inertial observers measure the same acceleration** for an object, even though they disagree about its position and velocity.

### Inertial frames and the boundary

An **inertial frame** is one that does not accelerate. Any frame moving at constant velocity relative to an inertial frame is also inertial. If frame B *did* accelerate relative to A, then a_BA ≠ 0 and the two observers would disagree about accelerations. A passenger in a braking bus sees a loose bag slide forward with no push; that is the sign of a non-inertial frame. In this course, **assume every frame is inertial unless a problem tells you otherwise**. The ground is close enough to inertial for the motions you will meet.

**Background (not assessed in this topic):** these rules hold for everyday speeds. For speeds approaching the speed of light, velocities do not simply add, and special relativity replaces them.

## Worked example 1: a drone in a crosswind

**Question.** Take **+x east and +y north**, relative to the ground G. A delivery drone D flies at 12 m/s relative to the air A. A steady wind carries the air east at 5.0 m/s relative to the ground. (a) The drone points due north. Find its velocity relative to the ground and how far east it drifts while it moves 600 m north. (b) Which way must it point so that it travels due north over the ground, and how long does the 600 m trip then take?

**(a) Heading north.**

1. Write the chain with matching inner letters: v_DG = v_DA + v_AG.
2. Components: v_DA = (0, 12) m/s and v_AG = (5.0, 0) m/s. So v_DG = (5.0, 12) m/s.
3. Magnitude: |v_DG| = √(5.0² + 12²) = **13 m/s**. Direction: tan θ = 5.0/12, so θ = **22.6° east of north**.
4. Time to move 600 m north: the north component is 12 m/s, so t = 600 ÷ 12 = 50 s. Drift east = 5.0 × 50 = **250 m**.

**(b) Tracking due north.**

1. Now v_DG must have no east component. The drone must point partly **west**, into the wind, at an angle θ west of north.
2. East components: −12 sin θ + 5.0 = 0, so sin θ = 5.0/12 and θ = **24.6° west of north**.
3. North component: 12 cos θ = √(12² − 5.0²) = √119 ≈ **10.9 m/s**. This is the ground speed.
4. Time: 600 ÷ 10.9 = **55 s**.

<figure>
<svg viewBox="0 0 560 360" role="img" aria-labelledby="pcm14-drone-title pcm14-drone-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm14-drone-title">Velocity triangles for the drone in a crosswind</title>
<desc id="pcm14-drone-desc">Two vector triangles, drawn to scale. Panel (a): the drone's velocity relative to the air, 12 metres per second, points straight up toward north. From its tip, the wind velocity of 5.0 metres per second points east. A thick dashed arrow from the start to the final tip is the drone's velocity relative to the ground, 13 metres per second at 22.6 degrees east of north. Panel (b): the drone's velocity relative to the air, 12 metres per second, points up and to the left at 24.6 degrees west of north. The 5.0 metres per second wind arrow points east from its tip and ends directly above the start. A thick dashed vertical arrow from the start is the ground velocity, 10.9 metres per second due north.</desc>
<defs><marker id="pcm14-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="360" fill="#ffffff"/>
<path d="M110 310 V72" stroke="#1d2b44" stroke-width="2" marker-end="url(#pcm14-arr)"/>
<path d="M110 70 H208" stroke="#1d2b44" stroke-width="2" marker-end="url(#pcm14-arr)"/>
<path d="M110 310 L209 72" stroke="#1d2b44" stroke-width="3" stroke-dasharray="9 5" marker-end="url(#pcm14-arr)"/>
<text x="100" y="190" font-size="12" fill="#1d2b44" text-anchor="end">v_DA</text>
<text x="100" y="206" font-size="12" fill="#1d2b44" text-anchor="end">12 m/s</text>
<text x="160" y="60" font-size="12" fill="#1d2b44" text-anchor="middle">v_AG = 5.0 m/s</text>
<text x="172" y="200" font-size="12" fill="#1d2b44" font-weight="600">v_DG = 13 m/s</text>
<text x="124" y="262" font-size="12" fill="#1d2b44">22.6°</text>
<text x="110" y="340" font-size="12" fill="#1d2b44">(a) pointing north</text>
<path d="M430 310 L331 93" stroke="#1d2b44" stroke-width="2" marker-end="url(#pcm14-arr)"/>
<path d="M330 92 H428" stroke="#1d2b44" stroke-width="2" marker-end="url(#pcm14-arr)"/>
<path d="M430 310 V95" stroke="#1d2b44" stroke-width="3" stroke-dasharray="9 5" marker-end="url(#pcm14-arr)"/>
<text x="372" y="214" font-size="12" fill="#1d2b44" text-anchor="end">v_DA</text>
<text x="372" y="230" font-size="12" fill="#1d2b44" text-anchor="end">12 m/s</text>
<text x="380" y="82" font-size="12" fill="#1d2b44" text-anchor="middle">v_AG = 5.0 m/s</text>
<text x="440" y="200" font-size="12" fill="#1d2b44" font-weight="600">v_DG = 10.9 m/s</text>
<text x="420" y="268" font-size="12" fill="#1d2b44" text-anchor="end">24.6°</text>
<text x="330" y="340" font-size="12" fill="#1d2b44">(b) pointing 24.6° west of north</text>
<path d="M530 70 V30" stroke="#1d2b44" stroke-width="2" marker-end="url(#pcm14-arr)"/>
<text x="530" y="22" font-size="12" fill="#1d2b44" text-anchor="middle">N</text>
</svg>
<figcaption>Figure 2. Vector triangles for Worked example 1, to scale. Solid arrows are the drone relative to the air and the air relative to the ground; the thick dashed arrow is their sum, the drone relative to the ground.</figcaption>
</figure>

**Check.** In (b) the ground speed (10.9 m/s) is less than the airspeed (12 m/s), because part of the drone's effort cancels the wind. That is why the trip takes 55 s instead of 50 s. Adding speeds as numbers, 12 + 5.0 = 17 m/s, would be wrong in both parts: the vectors are not parallel.

## Worked example 2: a bolt in a moving lift

**Question.** Take **+y upward**. A lift (elevator) E rises at a constant 2.0 m/s relative to the building B. A bolt comes loose from the ceiling, 2.5 m above the lift floor. Ignore air resistance and use g = 9.8 m/s². Describe the fall in the lift frame and in the building frame, and compare the two descriptions.

**In the lift frame E** (origin on the lift floor):

1. The bolt starts at rest: v_bolt,E = 0 at t = 0, at y′ = 2.5 m.
2. a_bolt,E = −9.8 m/s², so y′(t) = 2.5 − 4.9t².
3. It reaches the floor when y′ = 0: t = √(2.5/4.9) = **0.71 s**.
4. Velocity relative to the lift at impact: −9.8 × 0.714 = **−7.0 m/s**.

**In the building frame B** (origin where the lift floor was at t = 0):

1. The bolt starts with the lift's velocity: v_bolt,B = v_bolt,E + v_EB = 0 + 2.0 = +2.0 m/s.
2. Position: y(t) = y′(t) + 2.0t = **2.5 + 2.0t − 4.9t²**. Differentiate twice: a = **−9.8 m/s²**, the same as in the lift frame.
3. The bolt first rises: it is at rest relative to the building at t = 2.0/9.8 = 0.20 s, 0.20 m above its release point.
4. At t = 0.714 s: v_bolt,B = −7.0 + 2.0 = **−5.0 m/s**. The bolt's displacement is 2.0(0.714) − 4.9(0.714)² = **−1.07 m**, while the floor has risen 2.0 × 0.714 = **+1.43 m**.

**Compare.**

| Quantity | Lift frame | Building frame |
|---|---|---|
| Initial velocity of bolt | 0 | +2.0 m/s |
| Acceleration of bolt | −9.8 m/s² | −9.8 m/s² |
| Time to hit floor | 0.71 s | 0.71 s |
| Velocity at impact | −7.0 m/s | −5.0 m/s |
| Bolt's displacement | −2.5 m | −1.07 m |

**Check.** The gap closed is the bolt's displacement minus the floor's: −1.07 − 1.43 = −2.5 m, matching the lift frame. Both frames are inertial, so acceleration and time agree; velocity and displacement do not.

## Common misconceptions

- **"An object has one true speed."** Speed and direction depend on the observer's frame. The bolt hits the floor at 7.0 m/s or 5.0 m/s, depending on who measures.
- **Adding speeds as numbers.** Only parallel velocities add as plain numbers. In Worked example 1, 12 and 5.0 combine to 13, not 17. Use components.
- **Mixing up the subscript order.** v_AB is A relative to B, and v_BA = −v_AB. Check that the inner letters match in every chain.
- **"Pointing direction = travel direction."** The drone points north but moves 22.6° east of north over the ground.
- **"Different observers measure different accelerations."** Not if both frames are inertial. Differentiate r_PA = r_PB + r_BA to see why.
- **"In the moving frame, a dropped object falls behind."** In a lift or train moving at constant velocity, a dropped object falls straight down relative to that frame (air resistance ignored). It only lands "behind" if the frame accelerates, which is non-inertial.
- **Forgetting the initial velocity in a frame change.** The bolt starts at rest in the lift but at +2.0 m/s in the building frame.

## Where this leads

Topic 1.5, [Motion in Two or Three Dimensions](/advanced-course-resources/physics-c-mechanics/1-5-motion-two-three-dimensions-study-guide/), uses the same vector components for projectiles. A ball thrown from a moving vehicle is a relative-motion problem first. In Unit 2, Newton's laws are stated for inertial frames, which is why the frame matters. Earlier topics: [Topic 1.3, Representing Motion](/advanced-course-resources/physics-c-mechanics/1-3-representing-motion-study-guide/). Try the [practice questions](/advanced-course-resources/physics-c-mechanics/1-4-reference-frames-relative-motion-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/1-4-reference-frames-relative-motion-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/1-4-reference-frames-relative-motion-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
