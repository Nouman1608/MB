---
resourceId: "mb-ap-phys1-2.3-study-guide"
title: "Newton's Third Law: Study Guide (Physics 1 2.3)"
description: "Every force is one half of an interaction. Learn to find third-law force pairs, explain why internal forces leave the centre of mass alone, and reason about tension in strings and ropes."
course: "physics-1"
unit: 2
topics: ["2.3"]
resourceType: "study-guide"
prerequisites:
  - "Describing a force as an interaction and drawing free-body diagrams (Topic 2.2)"
  - "Choosing a system and locating its centre of mass (Topic 2.1)"
prerequisiteResources: ["mb-ap-phys1-2.2-study-guide"]
learningObjectives:
  - "Name the third-law partner of any force by swapping the two objects in its label"
  - "Explain why the two forces in a third-law pair never cancel each other, using free-body diagrams of both objects"
  - "Use the idea that internal forces cannot change the motion of a system's centre of mass"
  - "Describe tension as the pull that neighbouring pieces of a string exert on each other, and say when it is the same everywhere"
  - "Predict how the sizes of paired forces compare when the two objects differ in mass, speed or size"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus is used anywhere in this course. Where gravity appears we use g = 9.8 m/s², the value on the course equation table"
related: ["mb-ap-phys1-2.3-revision-notes", "mb-ap-phys1-2.3-practice", "mb-ap-phys1-2.3-checklist"]
next: "mb-ap-phys1-2.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Forces come in pairs: if A pushes or pulls on B, then B pushes or pulls on A. F_(A on B) = −F_(B on A)."
  - "The two forces in a pair are equal in size, opposite in direction, the same type, and act at the same time on different objects."
  - "Because they act on different objects, the two forces in a pair never appear on the same free-body diagram and never cancel each other."
  - "Forces between parts of a system are internal. They cannot change the motion of the system's centre of mass."
  - "An ideal string has negligible mass and does not stretch. Its tension is the same all along it. A heavy rope or chain can have different tensions at different points."
faqs:
  - question: "If the forces in a pair are equal and opposite, how does anything ever move?"
    answer: "The two forces act on different objects. To decide how one object moves, you add only the forces exerted on that object. Its partner force acts on something else and does not appear in the sum."
  - question: "Are the weight of a book and the normal force on it a third-law pair?"
    answer: "No. Both act on the book, and they are different types of force. The partner of Earth's pull on the book is the book's pull on Earth. The partner of the table's push on the book is the book's push on the table."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Everything here uses algebra, diagrams and careful wording. If you are taking the calculus-based Physics C: Mechanics course, it has its own separate guide.

## Every force is half of an interaction

Topic 2.2 described a force as an **interaction** between two objects. Newton's third law says what that means in practice: an interaction always produces **two forces**, one on each object.

When you push a wall, the wall pushes back on you. When Earth pulls a falling apple down, the apple pulls Earth up. When a swimmer pushes water backwards, the water pushes the swimmer forwards.

Write the force that object A exerts on object B as F_(A on B). The third law is:

**F_(A on B) = −F_(B on A)**

The minus sign means "opposite direction". So the two forces in a pair:

1. have the **same size** (magnitude);
2. point in **opposite directions**;
3. are the **same type** of force (both contact pushes, both friction, both gravitational, and so on);
4. act **at the same time**. Neither one is a "reaction" that comes later;
5. act on **different objects**: one on A, one on B.

Point 5 is the one that matters most. It is why the pair never cancels.

The law holds whatever the objects are doing. It does not matter whether they are at rest or moving, speeding up or slowing down, light or heavy, hard or soft. A mosquito hitting a windscreen exerts a force on the windscreen exactly as large as the force the windscreen exerts on the mosquito. The two forces have very different **effects**, because the objects are very different, but they are equal in size.

### Which forces act at a distance?

Most forces in this course are **contact forces**: normal forces, friction, tension, spring forces, air resistance. At the scale of atoms these are electric forces, but you treat them as pushes and pulls between touching objects. In Physics 1 the only force between objects that do **not** touch is **gravity**. Electric and magnetic forces at a distance belong to Physics 2.

## How to find a third-law pair

Use this recipe every time:

1. Write the force in words as "**[type] force of A on B**".
2. Swap the two objects: "**[type] force of B on A**". That is its partner.
3. Check: same type, opposite direction, different object.

For a book resting on a table:

| Force on the book | Its third-law partner | Partner acts on |
|---|---|---|
| Gravitational force of **Earth on book** (down) | Gravitational force of **book on Earth** (up) | Earth |
| Normal force of **table on book** (up) | Normal force of **book on table** (down) | the table |

Notice that the two forces on the book (the weight and the normal force) are **not** a pair. They are different types, and they both act on the same object. They happen to be equal in size here only because the book is at rest; Topic 2.4 explains why. Push down on the book with your hand and the normal force grows, but the book's weight does not change.

<figure>
<svg viewBox="0 0 560 360" role="img" aria-labelledby="p23-fbd-title p23-fbd-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p23-fbd-title">Free-body diagrams of a book and the table it rests on</title>
<desc id="p23-fbd-desc">Two free-body diagrams side by side, drawn to the same scale. Left: the book, shown as a dot, with an upward arrow labelled normal force of table on book, marked pair 1, and an equal downward arrow labelled gravitational force of Earth on book, marked pair 2. Right: the table, shown as a dot, with a long upward arrow labelled floor on table, and two downward arrows drawn side by side: Earth on table, and book on table, marked pair 1. The book-on-table arrow has the same length as the table-on-book arrow, and the floor-on-table arrow is as long as the two downward arrows together. A note says the partner of pair 2, the book pulling on Earth, acts on Earth and is not drawn.</desc>
<defs><marker id="p23-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="360" fill="#ffffff"/>
<text x="150" y="24" font-size="13" font-weight="600" fill="#1d2b44" text-anchor="middle">Free-body diagram: book</text>
<text x="410" y="24" font-size="13" font-weight="600" fill="#1d2b44" text-anchor="middle">Free-body diagram: table</text>
<path d="M280 36 V340" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4" opacity="0.6"/>
<g stroke="#1d2b44" stroke-width="2.5" fill="none" marker-end="url(#p23-ah)">
<path d="M150 190 V130"/>
<path d="M150 190 V250"/>
<path d="M410 190 V40"/>
<path d="M404 190 V280"/>
<path d="M416 190 V250"/>
</g>
<circle cx="150" cy="190" r="6" fill="#1d2b44"/>
<circle cx="410" cy="190" r="6" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="160" y="140">F_N: table on book  ①</text>
<text x="160" y="248">F_g: Earth on book  ②</text>
<text x="420" y="60">floor on table</text>
<text x="392" y="296" text-anchor="end">Earth on table</text>
<text x="428" y="248">book on table  ①</text>
<text x="20" y="300">② partner: book on Earth</text>
<text x="20" y="316">(acts on Earth, not drawn)</text>
<text x="300" y="330">① same length as ① on the book</text>
</g>
</svg>
<figcaption>Figure 1. A book rests on a table. Each dot is one object's free-body diagram. Pair ① is the normal-force interaction between table and book: one force on each diagram, equal in length, opposite in direction. The partner of ② acts on Earth. The two forces on the book are not a pair, even though they are equal here.</figcaption>
</figure>

Two drawing rules from Topic 2.2 apply. Draw each force as its own straight arrow starting on the dot. When two forces on the same object point the same way, draw them **side by side**, not on top of each other, as on the table's diagram.

## Why the pair never cancels

Forces cancel only when they act on the **same** object. To work out how an object moves, you add the forces **on that object**: the arrows on its own free-body diagram. Its third-law partners are on other diagrams.

So "the cart pulls back on the horse as hard as the horse pulls the cart" is true, and the horse and cart still move. Worked example 2 shows how.

## Worked example 1: a push-off in a warehouse

**Question.** Take **+x to the right**. Sana stands on a skateboard next to a loaded trolley on a smooth, level warehouse floor. Sana plus skateboard have mass 50 kg; the trolley has mass 75 kg. Both start at rest, and rolling friction is negligible. Sana pushes the trolley with a constant 150 N force to the right for 0.40 s, and they roll apart.

(a) What force does the trolley exert on Sana during the push?
(b) A friend says: "Sana did the pushing, so the trolley must have pushed back less." Is the friend right?
(c) Which ends up moving faster, and by what factor?
(d) Where is the centre of mass of the Sana + trolley system 2.0 s after the push ends?

1. **(a)** By the third law, F_(trolley on Sana) = −F_(Sana on trolley) = **−150 N**: 150 N to the left.
2. **(b)** No. One interaction produces both forces. It does not matter which object "started" it, or that a trolley cannot try to push. Sana's hands and the trolley's handle press on each other with the same 150 N.
3. **(c)** Same force, same time, different masses. A given force changes the velocity of a smaller mass more. Topic 2.5 makes this exact: acceleration = net force ÷ mass. Here a_Sana = 150 N ÷ 50 kg = 3.0 m/s² (left) and a_trolley = 150 N ÷ 75 kg = 2.0 m/s² (right). After 0.40 s, Sana rolls at 1.2 m/s to the left and the trolley at 0.80 m/s to the right. **Sana is faster, by a factor of 1.5**, which is the mass ratio 75 ÷ 50.
4. **(d)** Take the origin at the original centre of mass. During the push Sana moves ½ × 3.0 × 0.40² = 0.24 m left and the trolley moves ½ × 2.0 × 0.40² = 0.16 m right. In the next 2.0 s, Sana rolls another 1.2 × 2.0 = 2.4 m and the trolley another 0.80 × 2.0 = 1.6 m. So x_Sana = −2.64 m and x_trolley = +1.76 m.

   x_cm = (50 × (−2.64) + 75 × 1.76) ÷ 125 = (−132 + 132) ÷ 125 = **0 m**.

**Interpretation.** The centre of mass has not moved. The pushes are **internal** forces of the Sana + trolley system: they come in equal and opposite pairs inside it. Internal forces cannot change the motion of the system's centre of mass. Only a force from **outside** the system can do that.

**Check.** The distances from the centre of mass are in the ratio 1.76 ÷ 2.64 = 2/3, the inverse of the mass ratio. The heavier object ends up closer to the centre of mass, as Topic 2.1 says it must.

## Internal and external forces

Whether a force is internal or external depends on the **system you choose**:

- **System = Sana alone.** The trolley's push on Sana is external. It changes Sana's motion.
- **System = Sana + trolley.** Both pushes are internal. They cancel in the sum for the system, so the centre of mass carries on as before (here, at rest).

You cannot lift yourself by pulling up on your own belt, and a car cannot speed up by its passengers pushing on the dashboard. Those forces are internal, and an object or system cannot exert a net force on itself.

## Tension: the string pulls both ways

A **tension** force is the pull of a string, rope, cable or chain. Think of the rope as many short segments in a line. When you pull one end, each segment pulls on its neighbours, and each neighbour pulls back with an equal force (the third law again). Tension is the overall result of all those segment-on-segment pulls.

An **ideal string** has negligible mass and does not stretch. For an ideal string:

- the tension is the **same at every point**;
- the string pulls on the object at **each end** with that same tension, along the string and away from the object.

An **ideal pulley** has negligible mass and turns on a frictionless axle through its centre. It changes the direction of an ideal string without changing the tension.

### When tension is not the same everywhere

A real rope or chain **with mass** can have different tensions at different points. Picture a heavy chain hanging from a hook. The top link holds up every link below it. A link near the bottom holds up only a few. So the **tension is largest at the top** and falls to almost zero at the free bottom end. In this course you only describe this kind of variation in words; you do not calculate it.

A common trap: two people pull the ends of an ideal rope with 80 N each. The tension is **80 N**, not 160 N. Tie one end to a wall and pull the other with 80 N: the wall pulls back with 80 N and the tension is still 80 N. The rope cannot tell the difference.

## Worked example 2: a tractor towing a trailer

**Question.** Take **+x forward**. A tractor tows a trailer with an ideal rope along a level road. Both are speeding up. The tension in the rope is 3,000 N. The ground's friction pushes forward on the tractor's driving tyres with 3,600 N. Resistance forces on the trailer total 2,400 N backwards.

(a) The trailer pulls back on the rope just as hard as the rope pulls forward on it. Explain how the trailer can still speed up.
(b) Find the net horizontal force on the tractor, on the trailer and on the whole system.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="p23-tow-title p23-tow-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p23-tow-title">Horizontal forces on a tractor and a trailer joined by a rope</title>
<desc id="p23-tow-desc">Top: a sketch of a trailer on the left joined by a rope to a tractor on the right, moving to the right. Bottom: horizontal forces only, drawn to scale, inside a dashed box labelled system tractor plus rope plus trailer. Trailer dot: an arrow right labelled rope on trailer 3,000 N, and a shorter arrow left labelled resistance 2,400 N. Tractor dot: an arrow left labelled rope on tractor 3,000 N, and a longer arrow right labelled ground on tractor 3,600 N. The two rope arrows have equal length and are marked internal.</desc>
<defs><marker id="p23-ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<rect x="60" y="45" width="140" height="45" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M300 90 V45 H400 V30 H460 V90 Z" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<path d="M200 70 H300" stroke="#1d2b44" stroke-width="2"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2"><circle cx="90" cy="95" r="9"/><circle cx="170" cy="95" r="9"/><circle cx="325" cy="95" r="9"/><circle cx="430" cy="90" r="14"/></g>
<path d="M30 105 H540" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="130" y="38">trailer</text><text x="250" y="62">rope</text><text x="380" y="22">tractor</text></g>
<path d="M470 20 H530" stroke="#1d2b44" stroke-width="2" marker-end="url(#p23-ah2)"/>
<text x="500" y="40" font-size="11" fill="#1d2b44" text-anchor="middle">+x</text>
<rect x="20" y="125" width="520" height="160" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="8 5"/>
<text x="30" y="143" font-size="12" fill="#1d2b44">system: tractor + rope + trailer (horizontal forces only)</text>
<g stroke="#1d2b44" stroke-width="2.5" fill="none" marker-end="url(#p23-ah2)">
<path d="M130 210 H250"/>
<path d="M130 210 H34"/>
<path d="M380 210 H260"/>
<path d="M380 210 H524"/>
</g>
<circle cx="130" cy="210" r="6" fill="#1d2b44"/>
<circle cx="380" cy="210" r="6" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="138" y="196">rope on trailer</text><text x="138" y="234">3,000 N (internal)</text>
<text x="36" y="196">resistance</text><text x="36" y="234">2,400 N</text>
<text x="268" y="196">rope on tractor</text><text x="268" y="256">3,000 N (internal)</text>
<text x="400" y="196">ground on tractor</text><text x="420" y="234">3,600 N</text>
<text x="130" y="272" text-anchor="middle">trailer</text><text x="380" y="272" text-anchor="middle">tractor</text>
</g>
</svg>
<figcaption>Figure 2. Horizontal forces on the tractor and the trailer, drawn to the same scale (vertical forces balance and are left out). The rope's pulls on the two vehicles are equal in size; inside the dashed system they are internal and cancel. The external forces are 3,600 N forward and 2,400 N backward.</figcaption>
</figure>

1. **(a)** The trailer's backward pull acts on the **rope**, not on the trailer. (The ideal rope passes it on as its backward pull on the tractor.) To decide how the trailer moves, add only the forces **on the trailer**: 3,000 N forward from the rope and 2,400 N backward resistance. Forward wins.
2. **(b)** Tractor: +3,600 − 3,000 = **+600 N**. Trailer: +3,000 − 2,400 = **+600 N**. Both are forward, so both speed up.
3. System: the two rope forces are internal and cancel. External forces: +3,600 − 2,400 = **+1,200 N**, which equals 600 N + 600 N.

**Interpretation.** What drives the tractor forward? Its tyres push **backwards** on the road. By the third law, the road pushes **forwards** on the tyres with friction. That external force from the ground is what speeds up the whole system.

**Check.** If the tractor and trailer each have mass 2,000 kg, each net force of 600 N gives 0.30 m/s², and the system's 1,200 N on 4,000 kg also gives 0.30 m/s² (a preview of Topic 2.5). The rope is taut and the two move together, so equal accelerations are what you expect.

## Predicting with the third law

The third law lets you predict force sizes without any calculation:

- **A bus and a scooter collide.** The force on the scooter equals the force on the bus. The scooter's velocity changes far more, because its mass is far smaller.
- **An apple (0.15 kg) falls.** Earth pulls it with about 0.15 × 9.8 ≈ 1.5 N. The apple pulls Earth up with the same 1.5 N. Earth's mass is about 6 × 10²⁴ kg, so its acceleration is about 2.5 × 10⁻²⁵ m/s². Equal forces, wildly unequal effects.
- **Factor of change.** If one object's mass doubles and the interaction force stays the same, the force on each object is unchanged, but the acceleration of the object whose mass doubled halves.

## Common misconceptions

- **"The bigger, faster or harder object exerts the bigger force."** No. The forces in a pair are always equal in size (Worked example 1, "Predicting with the third law").
- **"Weight and the normal force are a third-law pair."** No. They act on the same object and are different types (Figure 1).
- **"Third-law forces cancel, so nothing can accelerate."** Pairs act on different objects. Only forces on the same object can cancel (Worked example 2).
- **"The reaction happens after the action."** Both forces exist at the same instant, for exactly as long as the interaction lasts.
- **"Pulling both ends of a rope with 80 N gives 160 N of tension."** The tension in an ideal rope is 80 N.
- **"Tension is the same all along any rope."** Only for an ideal (massless) string. A heavy hanging chain has more tension near the top.
- **"A system can speed itself up with internal forces."** Internal forces cannot change the motion of the centre of mass. Something outside the system must push or pull.
- **"Two magnets or charged balloons pull each other, so that is in the course."** In Physics 1, the only force at a distance is gravity.

## Where this leads

Newton's third law tells you how forces come in pairs between objects. Topic 2.4, [Newton's First Law](/advanced-course-resources/physics-1/2-4-newtons-first-law-study-guide/), asks what happens when the forces **on one object** add to zero. Try the [practice questions](/advanced-course-resources/physics-1/2-3-newtons-third-law-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/2-3-newtons-third-law-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/2-3-newtons-third-law-checklist/) to consolidate. To review free-body diagrams first, see [Topic 2.2](/advanced-course-resources/physics-1/2-2-forces-free-body-diagrams-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
