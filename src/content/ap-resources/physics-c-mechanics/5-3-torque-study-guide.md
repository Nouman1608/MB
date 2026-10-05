---
resourceId: "mb-ap-physcm-5.3-study-guide"
title: "Torque: Study Guide (Physics C: Mechanics 5.3)"
description: "Torque on a rigid system: the perpendicular force component, lever arms, force diagrams, the cross product τ = r × F with the right-hand rule, and signed net torque about a chosen axis."
course: "physics-c-mechanics"
unit: 5
topics: ["5.3"]
resourceType: "study-guide"
prerequisites:
  - "Angular displacement, velocity and acceleration and the sign convention for rotation (Topics 5.1 and 5.2)"
  - "Vector components, magnitudes and angles between vectors (Topic 1.1)"
  - "Free-body diagrams and the centre of mass (Topics 2.1 and 2.2)"
prerequisiteResources: ["mb-ap-physcm-5.2-study-guide"]
learningObjectives:
  - "Explain why only the force component perpendicular to r produces a torque about an axis"
  - "Find a lever arm as the perpendicular distance from the axis to the line of action of a force"
  - "Draw a force diagram that shows where each force acts relative to the axis"
  - "Calculate a torque as τ = r × F, giving its size rF sin θ and its direction by the right-hand rule"
  - "Add torques with signs about a stated axis and explain why the result depends on the axis"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Trigonometry and arithmetic only. g = 9.8 m/s² where weight appears. Answers to 2 or 3 significant figures"
related: ["mb-ap-physcm-5.3-revision-notes", "mb-ap-physcm-5.3-practice", "mb-ap-physcm-5.3-checklist"]
next: "mb-ap-physcm-5.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Torque is defined about a chosen axis: τ = r × F, where r runs from the axis to the point where the force acts."
  - "Size: τ = rF sin θ = rF⊥ = r⊥F. Only the part of F perpendicular to r turns the object."
  - "The lever arm r⊥ is the perpendicular distance from the axis to the line of action of the force."
  - "Direction: perpendicular to both r and F, found with the right-hand rule. Out of the page means counterclockwise."
  - "A force whose line of action passes through the axis exerts zero torque about that axis."
  - "Change the axis and the torques change. Always state the axis before you calculate."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 5.3?"
    answer: "They are separate courses with the same topic title. Physics 1 works with the size of a torque and its turning sense. Physics C: Mechanics also treats torque as a vector, the cross product r × F, with a direction found by the right-hand rule."
  - question: "Is a newton metre of torque the same as a joule?"
    answer: "The base units match, but they are different quantities. Write torque in N·m and energy in J so the two are never confused."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 5.3 called Torque. This guide is the one for the **calculus-based** course. It uses the same three ways of finding the size of a torque, and it adds the **vector** form, τ = r × F, with a direction found by the right-hand rule. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/5-3-torque-study-guide/); do not mix the two when you revise.

## What makes a rigid system turn

Topics 5.1 and 5.2 described rotation. Now you ask what **changes** it. A **rigid system** is one whose shape does not change, so every part turns through the same angle about the axis. Push on it and it may move along, turn, or both. The turning effect of a force about an axis is its **torque**, τ.

Three things set the torque of one force:

- **How big the force is.** Double F and τ doubles.
- **Where it acts.** The **position vector r** runs from the axis to the point where the force is exerted. Push far from the axis and the torque is larger.
- **Which way it points.** Push straight towards or away from the axis and nothing turns, however hard you push.

So torque is always torque **about a chosen axis**. Before any calculation, write the axis down, for example "axis: the hinge line at O".

## Only the perpendicular component turns

Split the force into two components, relative to r:

- **F∥ = F cos θ**, along r. It pulls straight away from (or pushes towards) the axis. It exerts **no torque**.
- **F⊥ = F sin θ**, perpendicular to r. This is the only part that turns the object.

Here θ is the angle between r and F when the two vectors are drawn tail to tail. That gives the size of the torque:

**τ = rF⊥ = rF sin θ**

There is a second way to read the same product. Extend the force in both directions to get its **line of action**. The **lever arm** r⊥ is the **perpendicular distance from the axis to the line of action**. Geometry gives r⊥ = r sin θ, so

**τ = r⊥F**

All three forms give the same number. Pick the one that suits the information you have. If you can see the line of action and the axis, the lever arm is often quickest. If you know r and θ, use rF sin θ.

<figure>
<svg viewBox="0 0 620 450" role="img" aria-labelledby="pcm-tq-title pcm-tq-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm-tq-title">Position vector, force components and lever arm for one force</title>
<desc id="pcm-tq-desc">An axis O is marked on the left. A solid arrow labelled r runs horizontally from O to point P on the right, where a force F acts. F points up and to the right at angle theta to the extension of r. From P, a solid arrow pointing straight up is labelled F perpendicular equals F sin theta, and a dashed arrow continuing along r is labelled F parallel equals F cos theta, no torque. A long dashed line extends F backwards through P as its line of action. A solid line from O meets that line of action at a right angle; it is labelled lever arm r perpendicular equals r sin theta.</desc>
<rect x="0" y="0" width="620" height="450" fill="#ffffff"/>
<defs><marker id="pcm-tq-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<path d="M173.9 426.4 L562.9 154.0" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="8 6" fill="none"/>
<path d="M80 240 L436 240" stroke="#1d2b44" stroke-width="3" marker-end="url(#pcm-tq-ar)"/>
<path d="M440 240 L560 156" stroke="#1d2b44" stroke-width="3.5" marker-end="url(#pcm-tq-ar)"/>
<path d="M440 240 L440 158" stroke="#1d2b44" stroke-width="2" marker-end="url(#pcm-tq-ar)"/>
<path d="M440 240 L559 240" stroke="#1d2b44" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#pcm-tq-ar)"/>
<path d="M80 240 L198.4 409.1" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M188.6 416.0 L181.7 406.2 L191.6 399.3" stroke="#1d2b44" stroke-width="1.5" fill="none"/>
<path d="M480 240 A40 40 0 0 0 472.8 217.1" stroke="#1d2b44" stroke-width="1.5" fill="none"/>
<circle cx="80" cy="240" r="7" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="440" cy="240" r="4" fill="#1d2b44"/>
<g font-size="13" fill="#1d2b44">
<text x="52" y="230">O (axis)</text>
<text x="250" y="230" font-weight="600">r</text>
<text x="446" y="262">P</text>
<text x="566" y="150" font-weight="600">F</text>
<text x="488" y="232">θ</text>
<text x="330" y="150">F⊥ = F sin θ</text>
<text x="460" y="282">F∥ = F cos θ</text>
<text x="460" y="298">(no torque)</text>
<text x="20" y="352">lever arm</text>
<text x="20" y="368">r⊥ = r sin θ</text>
<text x="300" y="380">line of action of F (dashed)</text>
</g>
</svg>
<figcaption>Figure 1. One force F acting at P, with the axis at O. Only F⊥ turns the object. The lever arm r⊥ meets the dashed line of action at a right angle. Both routes give τ = rF sin θ.</figcaption>
</figure>

Two special cases follow at once:

- **θ = 90°**: the force is perpendicular to r and τ = rF, the largest torque that force can give at that point.
- **θ = 0° or 180°**, or r = 0: the line of action passes through the axis and **τ = 0**. A hinge or axle force always exerts zero torque about its own hinge or axle.

## Force diagrams for rigid systems

For a point object, a free-body diagram shows forces at a single dot. For a rigid system that can turn, **where** a force acts matters, so you draw a **force diagram** instead. It is like a free-body diagram with three extra rules:

1. Draw the object's **outline**, roughly to scale, and mark the **axis**.
2. Start each force arrow **at the point where that force is exerted**, with its length showing the relative size and its direction correct.
3. Label distances from the axis to each point of application, or to each line of action.

Weight acts at the **centre of mass** when g is uniform (Topic 2.1), so a uniform rod's weight arrow starts at its midpoint. Contact forces start where the contact is. A rope's pull starts where the rope is tied. Figure 2 below is a force diagram.

## Torque as a vector: the cross product

Torque has a direction as well as a size. It is defined by the **cross product** of r and F:

**τ = r × F**

For any two vectors A and B with angle θ between them (tail to tail), the cross product A × B is a vector with:

- **Size** |A × B| = AB sin θ. That is why τ = rF sin θ.
- **Direction** perpendicular to both A and B, so normal to the plane they define.
- **Sense** given by the **right-hand rule**: point the fingers of your right hand along A, curl them towards B through the smaller angle, and your thumb points along A × B.

Order matters: B × A = −(A × B). Always write **r first, then F**.

For forces in the plane of the page, r × F points straight **out of** the page or straight **into** it. Use the right-hand rule a second way to link that to the turning: curl your fingers the way the object would turn, and your thumb gives the torque direction. So:

- **out of the page (+z)** ↔ tends to turn the object **counterclockwise**;
- **into the page (−z)** ↔ tends to turn it **clockwise**.

The usual sign convention is **counterclockwise positive**, matching +z out of the page. State your convention whenever you add torques.

**Working with components.** With unit vectors, î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ, and any vector crossed with itself is zero. For r = xî + yĵ and F = F_xî + F_yĵ in the xy-plane, this gives

**τ = (xF_y − yF_x) k̂**

Each term is a "distance times perpendicular component". The term xF_y is the turning effect of F_y with lever arm x. The term yF_x is the turning effect of F_x with lever arm y, and its minus sign shows that a positive F_x above the axis turns things clockwise.

## Net torque about an axis

Several forces usually act at once. The **net torque** about an axis is the **sum of the individual torques about that same axis**, with signs. For forces in one plane, add the z-components:

**τ_net = τ₁ + τ₂ + τ₃ + …** (counterclockwise +, clockwise −)

Torques about different axes must never be added together. Topics 5.5 and 5.6 use the net torque to decide whether rotation stays steady or changes.

## Worked example 1: a guy rope on a tent pole

**Question.** A tent pole 2.5 m tall is hinged at its base, which is the axis. A guy rope tied to the top pulls with a tension of 140 N. The angle between the pole and the rope is 25°. Find the size of the torque the rope exerts about the base three ways, and the largest torque a 140 N pull at the top could give.

1. **τ = rF sin θ** = 2.5 m × 140 N × sin 25° = 2.5 × 140 × 0.4226 = **148 N·m** (147.9 N·m before rounding).
2. **Perpendicular component.** F⊥ = 140 sin 25° = 59.2 N. τ = rF⊥ = 2.5 × 59.2 = **148 N·m**. The component along the pole, 140 cos 25° = 127 N, presses the pole into its base and turns nothing.
3. **Lever arm.** r⊥ = 2.5 sin 25° = 1.06 m. τ = r⊥F = 1.06 × 140 = **148 N·m**.
4. **Largest torque.** A pull at right angles to the pole gives τ = rF = 2.5 × 140 = **350 N·m**.

**Interpretation.** A guy rope at a small angle to the pole uses less than half of its pull for turning. Most of the tension squeezes the pole downwards.

## Worked example 2: the cross product in components

**Question.** A flat bracket can turn about an axle along the z-axis, through the origin. Take +x to the right and +y up the page, so +z points out of the page. A force F = (−24î + 18ĵ) N acts at the point r = (1.2î + 0.50ĵ) m. Find τ = r × F, say which way it tends to turn the bracket, and find the lever arm.

1. **Components.** τ_z = xF_y − yF_x = (1.2)(18) − (0.50)(−24) = 21.6 + 12.0 = **33.6 N·m**. So **τ = +33.6k̂ N·m**.
2. **Direction.** +k̂ is out of the page, so the force tends to turn the bracket **counterclockwise**. Check with the right-hand rule: fingers along r (right and a little up), curled towards F (up and to the left). Your thumb points out of the page.
3. **Check with rF sin θ.** |r| = √(1.2² + 0.50²) = 1.3 m and |F| = √(24² + 18²) = 30 N. Then sin θ = 33.6 ÷ (1.3 × 30) = 0.862. From the dot product, cos θ = (r · F)/(rF) = (−28.8 + 9.0) ÷ 39 = −0.508, so θ = 120.5°. Sin 120.5° = sin 59.5° = 0.862, which matches.
4. **Lever arm.** r⊥ = τ ÷ F = 33.6 ÷ 30 = **1.12 m**, a little less than |r| = 1.3 m, as it must be.

**Check the order.** F × r would give −33.6k̂ N·m, the wrong sense. Always put r first.

## Worked example 3: net torque about two different axes

**Question.** A uniform plank 3.0 m long lies on smooth ice. You look down on it from above (Figure 2). Take +x along the plank to the right, +y across it (up the page) and counterclockwise positive. Three people pull on ropes: **A**, 40 N in +y at the left end; **B**, 60 N in −y at 2.0 m from the left end; **C**, 50 N at the right end, with components 30 N in +x and 40 N in +y. Find the net torque (a) about axis 1 at the left end and (b) about axis 2 at the midpoint.

<figure>
<svg viewBox="0 0 600 360" role="img" aria-labelledby="pcm-tq2-title pcm-tq2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm-tq2-title">Force diagram of a plank on ice, seen from above</title>
<desc id="pcm-tq2-desc">A long horizontal rectangle represents a 3.0 m plank, with a scale marked at 0, 1.5, 2.0 and 3.0 m from the left end. Axis 1 is a hollow circle at the left end; axis 2 is a cross at the midpoint, 1.5 m. Force A, 40 N, is an arrow pointing up the page from the left end. Force B, 60 N, is a longer arrow pointing down the page from the 2.0 m mark. Force C, 50 N, points up and to the right from the right end, with a dashed 30 N component along the plank and a dashed 40 N component across it.</desc>
<rect x="0" y="0" width="600" height="360" fill="#ffffff"/>
<defs><marker id="pcm-tq2-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="100" y="192" width="360" height="16" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M100 196 L100 124" stroke="#1d2b44" stroke-width="3" marker-end="url(#pcm-tq2-ar)"/>
<path d="M340 204 L340 316" stroke="#1d2b44" stroke-width="3" marker-end="url(#pcm-tq2-ar)"/>
<path d="M460 196 L516 124" stroke="#1d2b44" stroke-width="3" marker-end="url(#pcm-tq2-ar)"/>
<path d="M460 200 L516 200" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#pcm-tq2-ar)"/>
<path d="M460 200 L460 124" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#pcm-tq2-ar)"/>
<circle cx="100" cy="200" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M272 192 L288 208 M288 192 L272 208" stroke="#1d2b44" stroke-width="2.5"/>
<g font-size="13" fill="#1d2b44">
<text x="70" y="112">A: 40 N</text>
<text x="350" y="300">B: 60 N</text>
<text x="500" y="112">C: 50 N</text>
<text x="522" y="205">30 N</text>
<text x="420" y="150">40 N</text>
<text x="40" y="240">axis 1</text>
<text x="40" y="256">(left end)</text>
<text x="252" y="240">axis 2</text>
<text x="244" y="256">(midpoint)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<path d="M100 340 H460 M100 334 V346 M280 334 V346 M340 334 V346 M460 334 V346" stroke="#1d2b44" stroke-width="1.5"/>
<text x="100" y="328">0</text><text x="280" y="328">1.5 m</text><text x="340" y="328">2.0 m</text><text x="460" y="328">3.0 m</text>
</g>
</svg>
<figcaption>Figure 2. Force diagram (top view). Each arrow starts where its force acts. Axis 1 is the hollow circle at the left end; axis 2 is the cross at the midpoint. C is shown with its components as dashed arrows.</figcaption>
</figure>

**(a) Axis 1, the left end.**

- A acts at the axis, so r = 0 and **τ_A = 0**.
- B: lever arm 2.0 m, pushing towards −y on the right of the axis, so clockwise. **τ_B = −(2.0)(60) = −120 N·m**.
- C: the 30 N component lies along the plank, through the axis, so it gives no torque. The 40 N component has lever arm 3.0 m and turns the plank counterclockwise. **τ_C = +(3.0)(40) = +120 N·m**. (Check: rF sin θ = 3.0 × 50 × 0.80 = 120 N·m.)
- **Net torque about axis 1: 0.**

**(b) Axis 2, the midpoint.** Use τ_z = xF_y − yF_x with x measured from the midpoint. Every force acts on the plank's centre line, so y = 0 throughout.

- A: x = −1.5 m, F_y = +40 N. **τ_A = (−1.5)(40) = −60 N·m** (clockwise: an upward pull on the left half).
- B: x = +0.50 m, F_y = −60 N. **τ_B = (0.50)(−60) = −30 N·m**.
- C: x = +1.5 m, F_y = +40 N. **τ_C = (1.5)(40) = +60 N·m**.
- **Net torque about axis 2: −30 N·m**, that is, 30 N·m clockwise.

**Interpretation.** The net torque is zero about one axis and not about another. That is possible because the net **force** here is not zero: it is (30î + 20ĵ) N. The lesson for later topics: a zero net torque about one point does not by itself tell you the plank will not start to turn. You must state the axis, and Topic 5.5 shows when the choice stops mattering.

## Common misconceptions

- **"Torque = force × distance to the point."** Only if the force is perpendicular to r. In general τ = rF sin θ (Worked example 1).
- **"A bigger force always gives a bigger torque."** A large force aimed at the axis gives zero torque (the 30 N component of C in Worked example 3).
- **Measuring the lever arm to the point of application.** The lever arm is the perpendicular distance to the line of action, not the distance r.
- **Writing F × r.** The order reverses the direction. The definition is r × F.
- **"The torque vector points the way the object moves."** It points along the axis, perpendicular to the plane of r and F.
- **Mixing axes.** Every torque in one sum must be about the same axis.
- **Forgetting signs.** A clockwise torque is negative under the counterclockwise-positive convention. State the convention first.
- **Writing N·m as J.** Same base units, different quantity.

## Where this leads

Topic 5.4, [Rotational Inertia](/advanced-course-resources/physics-c-mechanics/5-4-rotational-inertia-study-guide/), describes how hard it is to change an object's rotation. Topic 5.5 then uses net torque for rotational equilibrium, and Topic 5.6 links net torque, rotational inertia and angular acceleration. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/5-3-torque-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/5-3-torque-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/5-3-torque-checklist/). You can also go back to [Topic 5.2](/advanced-course-resources/physics-c-mechanics/5-2-connecting-linear-rotational-motion-study-guide/) or the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
