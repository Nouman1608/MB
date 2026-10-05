---
resourceId: "mb-ap-physcm-2.3-study-guide"
title: "Newton’s Third Law: Study Guide (Physics C: Mechanics 2.3)"
description: "Calculus-based guide to Newton’s third law: paired forces between two objects, why internal forces cannot move a centre of mass, tension in ideal and heavy strings, and ideal pulleys."
course: "physics-c-mechanics"
unit: 2
topics: ["2.3"]
resourceType: "study-guide"
prerequisites:
  - "Choosing a system and locating its centre of mass (Topic 2.1)"
  - "Drawing free-body diagrams with one arrow per force (Topic 2.2)"
  - "Integrating simple polynomials (calculus taken before or alongside the course)"
prerequisiteResources: ["mb-ap-physcm-2.2-study-guide"]
learningObjectives:
  - "Describe any interaction between two objects as a pair of forces, one on each object"
  - "Test whether two forces form a genuine third-law pair, and show the pair on separate free-body diagrams"
  - "Explain why forces between parts of a system cancel and cannot change the motion of its centre of mass"
  - "Use the ideal-string and ideal-pulley models, and state what each assumption means"
  - "Find how tension varies along a string with mass, using dT/dy = λg for a hanging string"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator only for arithmetic. We use g = 9.8 m/s², the value on the course equation table, and give answers to 2 significant figures"
related: ["mb-ap-physcm-2.3-revision-notes", "mb-ap-physcm-2.3-practice", "mb-ap-physcm-2.3-checklist"]
next: "mb-ap-physcm-2.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "If A exerts a force on B, then B exerts a force on A of equal size and opposite direction, at the same instant: F_B on A = −F_A on B."
  - "The two forces of a pair act on different objects, so they never cancel on one free-body diagram."
  - "Forces between parts of a system come in pairs that add to zero. Only external forces change how the centre of mass moves."
  - "An ideal string has negligible mass and does not stretch; its tension is the same everywhere. An ideal pulley only changes the string’s direction."
  - "In a string with mass, tension changes along it. For a hanging string at rest, dT/dy = λg, so tension is largest at the top."
faqs:
  - question: "If the forces are equal and opposite, how can anything start moving?"
    answer: "The two forces act on different objects. Whether an object speeds up depends only on the forces exerted on that object, and its partner force is on something else."
  - question: "Are an object’s weight and the normal force on it a third-law pair?"
    answer: "No. Both act on the same object, and they are different types of force. The partner of the weight is the object’s gravitational pull on Earth; the partner of the normal force is the object’s push on the surface."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Which course this is for.** This guide is for the **calculus-based** Physics C: Mechanics course. Physics 1 also teaches Newton’s third law, but without the calculus used below for strings with mass. Keep the two separate when you revise.

## Every force is half of an interaction

In Topic 2.2 you saw that a force is always exerted **by** one object **on** another. Newton’s third law adds the key fact: interactions are mutual. If object A exerts a force on object B, then B exerts a force on A at the same instant, with **equal magnitude** and **opposite direction**:

**F_B on A = −F_A on B**

Read the subscripts aloud: "the force exerted *by* B *on* A". The third-law partner of a force is found by **swapping the two names**. Nothing else changes.

Some consequences:

- The two forces are always the **same type**. A gravitational pull is paired with a gravitational pull; a contact push with a contact push; friction with friction.
- They exist **at the same time**. There is no delay and no "action first, reaction later".
- They act on **different objects**. One belongs on A’s free-body diagram, the other on B’s.
- Their sizes are equal **whatever the masses, speeds or accelerations**. A light car and a heavy lorry in a collision push on each other equally hard.

An object cannot exert a net force on itself (Topic 2.2). The third law shows why: any force one part of an object exerts on another part comes with an equal and opposite partner inside the same object.

## Testing whether two forces form a pair

Use this four-question test. Two forces are a third-law pair only if **all four** answers are yes.

1. Do they involve the **same two objects**, with the names swapped?
2. Are they the **same type** of force?
3. Are they **equal in size**?
4. Do they point in **opposite directions**?

The classic trap is a book resting on a table. The book’s weight (Earth on book, down) and the normal force (table on book, up) are equal and opposite here. But they fail tests 1 and 2: they involve different object pairs and different types. They are equal only because the book is at rest, which is a first-law argument (Topic 2.4), not a third-law one. If the table were in an accelerating lift, they would no longer be equal, but each would still have its own partner.

| Force on the book | Its third-law partner |
|---|---|
| Gravitational, Earth on book, down | Gravitational, book on Earth, up |
| Normal (contact), table on book, up | Normal (contact), book on table, down |

## Representing paired forces

To show a pair, draw **separate** free-body diagrams for the two objects. Put one force of the pair on each diagram, with arrows of the same length in opposite directions, and label both so the link is clear. Figure 1 does this for two blocks pushed along a smooth floor.

<figure>
<svg viewBox="0 0 560 360" role="img" aria-labelledby="pcm23-fbd-title pcm23-fbd-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm23-fbd-title">Separate free-body diagrams for two blocks in contact</title>
<desc id="pcm23-fbd-desc">Top: a hand pushes block A to the right, and block A pushes block B, which sits to its right on a smooth floor. Below, two free-body diagrams. Block A, drawn as a dot, has four arrows: the hand’s push P to the right, the force from B on A to the left, weight down and normal force up. Block B, drawn as a dot, has three arrows: the force from A on B to the right, weight down and normal force up. The two contact forces between the blocks have equal length, opposite directions, and each carries two short tick marks to show they form a third-law pair.</desc>
<defs><marker id="pcm23-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="360" fill="#ffffff"/>
<path d="M150 80 H410" stroke="#1d2b44" stroke-width="2"/>
<rect x="210" y="30" width="80" height="50" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="290" y="40" width="60" height="40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="250" y="60" font-size="14" fill="#1d2b44" text-anchor="middle">A</text>
<text x="320" y="65" font-size="14" fill="#1d2b44" text-anchor="middle">B</text>
<path d="M150 55 H205" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm23-ah)"/>
<text x="150" y="45" font-size="12" fill="#1d2b44">hand</text>
<text x="420" y="84" font-size="12" fill="#1d2b44">smooth floor</text>
<line x1="0" y1="105" x2="560" y2="105" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="3 4"/>
<text x="150" y="128" font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="600">Free-body diagram of A</text>
<text x="410" y="128" font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="600">Free-body diagram of B</text>
<circle cx="150" cy="230" r="5" fill="#1d2b44"/>
<path d="M150 230 H260" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm23-ah)"/>
<path d="M150 230 H80" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm23-ah)"/>
<path d="M150 230 V150" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm23-ah)"/>
<path d="M150 230 V310" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm23-ah)"/>
<path d="M108 223 V237 M114 223 V237" stroke="#1d2b44" stroke-width="1.5"/>
<text x="232" y="220" font-size="12" fill="#1d2b44">P (hand on A)</text>
<text x="20" y="252" font-size="12" fill="#1d2b44">F_B on A</text>
<text x="160" y="160" font-size="12" fill="#1d2b44">F_N (floor on A)</text>
<text x="160" y="305" font-size="12" fill="#1d2b44">F_g (Earth on A)</text>
<circle cx="410" cy="230" r="5" fill="#1d2b44"/>
<path d="M410 230 H480" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm23-ah)"/>
<path d="M410 230 V170" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm23-ah)"/>
<path d="M410 230 V290" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm23-ah)"/>
<path d="M442 223 V237 M448 223 V237" stroke="#1d2b44" stroke-width="1.5"/>
<text x="445" y="252" font-size="12" fill="#1d2b44">F_A on B</text>
<text x="420" y="180" font-size="12" fill="#1d2b44">F_N (floor on B)</text>
<text x="420" y="290" font-size="12" fill="#1d2b44">F_g (Earth on B)</text>
<text x="280" y="345" font-size="12" fill="#1d2b44" text-anchor="middle">Double ticks: F_B on A and F_A on B form a third-law pair</text>
</svg>
<figcaption>Figure 1. Separate free-body diagrams for blocks A and B. The contact forces between the blocks, each marked with two ticks, form a third-law pair: same size, opposite directions, one on each block. The hand’s push appears only on A, because the hand touches only A.</figcaption>
</figure>

Notice what is **not** on B’s diagram: the hand’s push. The hand touches A, not B. B speeds up only because A pushes on it.

## Internal forces and the centre of mass

Now treat A and B together as **one system**. The forces between them are **internal**. Every internal force has its partner inside the same system, and each pair adds to zero:

F_A on B + F_B on A = 0

For a system of many particles, add up every force on every particle. The forces split into external forces (from outside the system) and internal pairs:

ΣF (all forces on all parts) = ΣF_ext + Σ(pairs that each add to zero) = **ΣF_ext**

So only **external** forces can change how the system’s **centre of mass** moves. Internal forces can move the parts relative to one another, but they cannot move the centre of mass on their own. This is why you cannot lift yourself by pulling up on your own belt, and why a passenger pushing on the dashboard of a car does not move the car-plus-passenger system.

Choosing the system is a decision you make. With A alone as the system, F_B on A is external and appears on the diagram. With A + B as the system, it is internal and disappears from the system’s diagram.

## Tension: a chain of third-law pairs

A string, rope, cable or chain pulls on whatever it is tied to. That pull is **tension**. Imagine the string cut into tiny segments. Each segment pulls on its neighbours, and each neighbour pulls back equally (third law). Tension is the overall result of all these segment-on-segment pairs, set up in response to the forces pulling on the ends.

Take a tiny segment of a **hanging** string, length dy, at height y measured up from the bottom end. Its mass is dm = λ dy, where λ is the mass per unit length. The string above pulls it up with T(y + dy); the string below pulls it down with T(y); Earth pulls it down with λg dy. If the string is at rest, these balance:

T(y + dy) − T(y) = λg dy, so **dT/dy = λg**

Two models follow from this one result.

- **Ideal string:** negligible mass (λ → 0) and it does not stretch. Then dT/dy = 0: the tension is the **same at every point**. "Does not stretch" means everything tied to it moves together along the string.
- **String with mass:** λ > 0, so tension **changes** along the string. For a hanging string it grows towards the top, because each point supports everything below it. Integrating gives T(y) = T(0) + ∫₀ʸ λg dy′.

An **ideal pulley** has negligible mass and turns on a frictionless axle through its centre of mass. An ideal string passing over it has the **same tension on both sides**. The pulley changes the direction of the pull, not its size.

## Worked example 1: pairs in a tow

**Question.** A tow truck pulls a broken-down car of mass 1100 kg along a level road, using a light tow rope that you can treat as ideal. The rope tension is 1500 N. Take **+x forward**, the direction of travel.

(a) List the forces exerted on the car, and give the third-law partner of each.
(b) What force does the rope exert on the truck?
(c) The rope pulls the truck backwards. What pushes the truck forwards?
(d) Does the car exert a force directly on the truck?

1. **(a)** Forces on the car and their partners:

| Force on the car | Size and direction | Partner (names swapped) |
|---|---|---|
| Rope on car (tension) | 1500 N, +x | Car on rope: 1500 N, −x |
| Earth on car (gravity) | 1100 × 9.8 ≈ 1.1 × 10⁴ N, down | Car on Earth: ≈ 1.1 × 10⁴ N, up |
| Road on car (normal) | up | Car on road: down |
| Road on car’s tyres (friction) | −x | Car’s tyres on road: +x |

2. **(b)** The rope is ideal, so its tension is 1500 N at both ends. The rope pulls the truck with **1500 N in the −x direction**. Its partner is the truck’s pull on the rope, 1500 N in +x.
3. **(c)** The truck’s driven tyres push backwards on the road. By the third law, the **road pushes forwards on the tyres** with a friction force of equal size. That forward force is on the truck; the rope’s backward pull is also on the truck. Comparing these horizontal forces (with any drag) decides whether the truck speeds up (Topics 2.4 and 2.5).
4. **(d)** No. The car and truck interact only **through the rope**. The rope transmits the pull, which is why its tension appears on both diagrams.

**Check.** Every partner in the table involves the same two objects as its force, with the names swapped, and the same type of force. None of the partners appears on the car’s own diagram.

## Worked example 2: tension in a hanging chain

**Question.** A lamp of mass 4.0 kg hangs from the bottom of a uniform chain of length 1.5 m and mass 1.8 kg. The top of the chain is fixed to a ceiling hook, and everything is at rest. Measure y **upward from the bottom of the chain**. Find the tension T(y), its value at the bottom, middle and top, and the force the chain exerts on the hook.

1. Mass per unit length: λ = 1.8 kg ÷ 1.5 m = **1.2 kg/m**.
2. At the bottom (y = 0), the chain holds only the lamp, which is at rest: T(0) = 4.0 × 9.8 = **39.2 N** (≈ 39 N).
3. Integrate dT/dy = λg: T(y) = 39.2 + (1.2)(9.8)y = **(4.0 + 1.2y)(9.8) N**, with y in m. The slope is λg = 11.76 N/m.
4. Middle (y = 0.75 m): T = (4.0 + 0.90)(9.8) ≈ **48 N**.
5. Top (y = 1.5 m): T = (5.8)(9.8) = 56.84 ≈ **57 N**.
6. The hook pulls up on the top of the chain with 57 N. By the third law, the **chain pulls down on the hook with 57 N**.

**Interpretation.** If you treated the chain as ideal, you would predict 39 N everywhere. The real tension at the top is 45% larger. The ideal model is good only when the string’s mass is small compared with what it supports.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="pcm23-tens-title pcm23-tens-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm23-tens-title">Tension against height for the chain in Worked example 2</title>
<desc id="pcm23-tens-desc">Tension T in newtons from 0 to 60 against height y above the bottom of the chain, in metres, from 0 to 1.5. A solid straight line rises from 39.2 N at y = 0 to 56.8 N at y = 1.5 m, with slope 11.8 newtons per metre. A dashed horizontal line at 39.2 N shows the ideal-string prediction. The gap between the lines grows towards the top.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M210 290 V50 M350 290 V50 M490 290 V50"/>
<path d="M70 210 H500 M70 130 H500 M70 50 H500"/>
</g>
<path d="M70 290 H515 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="210" y="308">0.5</text><text x="350" y="308">1.0</text><text x="490" y="308">1.5</text>
<text x="280" y="330" font-size="13">height above bottom of chain, y (m)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="214">20</text><text x="62" y="134">40</text><text x="62" y="54">60</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">tension, T (N)</text>
<path d="M70 133.2 L490 62.6" stroke="#1d2b44" stroke-width="2.5" fill="none"/>
<path d="M70 133.2 H490" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 6" fill="none"/>
<circle cx="70" cy="133.2" r="4" fill="#1d2b44"/>
<circle cx="280" cy="98" r="4" fill="#1d2b44"/>
<circle cx="490" cy="62.6" r="4" fill="#1d2b44"/>
<text x="80" y="160" font-size="12" fill="#1d2b44">bottom: 39 N (lamp only)</text>
<text x="250" y="86" font-size="12" fill="#1d2b44">middle: 48 N</text>
<text x="400" y="52" font-size="12" fill="#1d2b44">top: 57 N</text>
<text x="240" y="160" font-size="12" fill="#1d2b44">dashed: ideal-string model, 39 N everywhere</text>
<text x="240" y="190" font-size="12" fill="#1d2b44">solid: real chain, slope λg = 11.76 N/m</text>
</svg>
<figcaption>Figure 2. Tension along the chain in Worked example 2. The solid line is the real chain; the dashed line is the ideal-string prediction. The difference at any height is the weight of chain below that point.</figcaption>
</figure>

## Common misconceptions

- **"Weight and normal force are an action–reaction pair."** They act on the same object and are different types. Use the four-question test.
- **"The heavier or faster object pushes harder."** In any interaction the two forces are equal in size, whatever the masses or speeds.
- **"Third-law forces cancel, so nothing can move."** They act on different objects, so they never appear on the same free-body diagram.
- **"The reaction comes after the action."** The two forces exist at the same instant and disappear together.
- **"Internal forces can move a system."** They can rearrange the parts, but they cannot change how the centre of mass moves.
- **"Tension is the same everywhere in any rope."** Only for an ideal (massless) string. In a hanging chain it increases towards the top.
- **"A pulley changes the tension."** An ideal pulley changes only the direction. A pulley with mass or friction is a different model.

## Where this leads

Topic 2.4, Newton’s First Law, uses the forces you can now identify to decide when a system’s velocity stays constant. Topic 2.5 then links net force to acceleration, and you will meet pulleys and connected objects again there. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/2-3-newtons-third-law-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/2-3-newtons-third-law-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/2-3-newtons-third-law-checklist/). Next topic: [Newton’s first law](/advanced-course-resources/physics-c-mechanics/2-4-newtons-first-law-study-guide/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
