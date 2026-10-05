---
resourceId: "mb-ap-phys1-2.7-study-guide"
title: "Kinetic and Static Friction: Study Guide (Physics 1 2.7)"
description: "Kinetic and static friction from first principles: direction, the normal force, the maximum static value, angled pulls and slopes, with worked examples and a friction-force graph."
course: "physics-1"
unit: 2
topics: ["2.7"]
resourceType: "study-guide"
prerequisites:
  - "Drawing free-body diagrams and choosing axes, including axes tilted along a slope (Topics 2.2 and 2.5)"
  - "Applying Newton's second law along each axis (Topic 2.5)"
  - "Weight near Earth's surface, F_g = mg (Topic 2.6)"
prerequisiteResources: ["mb-ap-phys1-2.6-study-guide"]
learningObjectives:
  - "Explain when kinetic friction acts, find its direction on each surface, and calculate its size from μ_k and the normal force"
  - "Find the normal force from Newton's second law perpendicular to the surface instead of assuming it equals mg"
  - "Explain how static friction takes whatever size and direction stops slipping, up to a maximum of μ_s F_n"
  - "Decide whether an object stays at rest or slides by comparing the force needed with the maximum static friction"
  - "Sketch how the friction force changes as an applied push grows from zero until the object slides"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra and trigonometry only, no calculus. g = 9.8 m/s². Keep unrounded values until the last step and give answers to 2 significant figures"
related: ["mb-ap-phys1-2.7-revision-notes", "mb-ap-phys1-2.7-practice", "mb-ap-phys1-2.7-checklist"]
next: "mb-ap-phys1-2.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Kinetic friction acts when surfaces slide over each other. Its size is F_f,k = μ_k F_n, and it opposes the motion of each surface relative to the other."
  - "Static friction acts when surfaces do not slide. It takes whatever size and direction is needed to stop slipping, up to F_f,s,max = μ_s F_n."
  - "Static friction is only equal to μ_s F_n at the point of slipping. Below that, find it from Newton's second law."
  - "The normal force is not always mg. Find it from the forces perpendicular to the surface."
  - "In this model friction does not depend on contact area, and μ_s is usually larger than μ_k for the same pair of surfaces."
faqs:
  - question: "Does friction always point backwards, against the motion?"
    answer: "No. Friction opposes sliding between the two surfaces, not motion in general. When you walk, static friction on your foot points forwards, in the direction you move."
  - question: "Why is it harder to start a heavy box moving than to keep it moving?"
    answer: "Because the maximum static friction (μ_s F_n) is usually larger than kinetic friction (μ_k F_n) for the same surfaces. Once the box slides, the friction force drops."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Everything here uses algebra, trigonometry and free-body diagrams. You will need Newton's second law from Topic 2.5 and weight, F_g = mg, from Topic 2.6.

## What a surface does to an object

When an object touches a surface, the surface exerts **one contact force** on it. It is easiest to split that force into two components:

- The **normal force**, F_n: the component **perpendicular** to the surface. It always points **away from** the surface, pushing the object out. "Normal" means perpendicular.
- The **friction force**, F_f: the component **parallel** to the surface. It acts against sliding between the two surfaces.

There are two kinds of friction, and the first question in any problem is always: **are the two surfaces sliding over each other or not?**

| Situation | Kind of friction | Size |
|---|---|---|
| Surfaces slide relative to each other | kinetic | F_f,k = μ_k F_n (fixed by the surfaces and F_n) |
| Surfaces do not slide relative to each other | static | anything from 0 up to F_f,s,max = μ_s F_n |

μ (the Greek letter "mu") is the **coefficient of friction**. It has no units, because it is a ratio of two forces. Its value depends on the **materials** of the two surfaces: rubber on dry concrete, wood on wood, steel on ice. You are always told the value, or asked to measure it.

## Kinetic friction

**Kinetic friction** acts whenever two surfaces in contact **move relative to each other**: a crate sliding across a floor, a sledge on snow, brakes rubbing a wheel.

**Direction.** On each surface, kinetic friction points **opposite to the motion of that surface relative to the other one**. Think about a book sliding to the right across a table:

- Relative to the table, the book moves right. So friction **on the book** points **left**.
- Relative to the book, the table moves left. So friction **on the table** points **right**.

These two forces are a Newton's third law pair: equal in size, opposite in direction, acting on different objects.

**Size.**

**F_f,k = μ_k F_n**

This is a relationship between **magnitudes**. Friction is parallel to the surface and F_n is perpendicular to it, so the two forces never point the same way. The equation only links their sizes.

In this model, kinetic friction:

- depends only on the materials (through μ_k) and on how hard the surfaces are pressed together (through F_n);
- does **not** depend on the area of contact. A brick slides with the same friction on its large face as on its narrow side;
- is treated as the same at every sliding speed.

### Finding the normal force

Never assume F_n = mg. The normal force is whatever it needs to be to stop the object moving into, or lifting off, the surface. Apply Newton's second law **perpendicular to the surface**. If the object does not accelerate in that direction, the perpendicular forces balance:

- Level floor, no other vertical forces: F_n = mg.
- Level floor, rope pulling **up** at angle θ: F_n = mg − T sin θ (smaller, so less friction).
- Level floor, someone pushing **down** at angle θ: F_n = mg + F sin θ (larger, so more friction).
- Slope at angle θ: F_n = mg cos θ.

## Static friction

**Static friction** acts between surfaces that are in contact but **not moving relative to each other**. A parked car on a hill, a book resting on a tilted desk, and the sole of your shoe while it is planted on the ground all rely on static friction.

Static friction is a **responsive** force. It takes **whatever size and direction** stops the surfaces from slipping. Push a heavy cupboard gently with 20 N and static friction is 20 N backwards. Push with 60 N and it becomes 60 N backwards. Stop pushing and it drops to zero.

There is a limit. For a given pair of surfaces there is a **maximum** static friction:

**F_f,s ≤ μ_s F_n, so F_f,s,max = μ_s F_n**

If keeping the object at rest would need more friction than μ_s F_n, the surfaces start to **slip**: they move relative to each other, and kinetic friction takes over.

For the same pair of surfaces, μ_s is **usually larger** than μ_k. That is why a heavy box needs a big shove to get going, but less force to keep it sliding.

**The most common error in this topic:** writing F_f,s = μ_s F_n for an object that is simply at rest. That equation gives the static friction **only at the point of slipping**. In every other case, find static friction from Newton's second law.

### Friction can point the way you move

Friction opposes **sliding between surfaces**, not motion in general. When you walk forwards, your planted foot pushes **backwards** on the ground. Without friction your foot would slip backwards. So static friction from the ground on your foot points **forwards**, and that forward force is what accelerates you. The ground is not "resisting" your motion; it is causing it.

## Representing friction on a graph

Imagine a block of mass 5.0 kg on a level floor, with μ_s = 0.60 and μ_k = 0.40. The normal force is F_n = mg = 49 N. A horizontal push starts at zero and slowly increases.

- Maximum static friction: 0.60 × 49 N = **29.4 N**.
- Kinetic friction: 0.40 × 49 N = **19.6 N**.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="p1-fric-title p1-fric-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-fric-title">Friction force against applied force for a block on a level floor</title>
<desc id="p1-fric-desc">Friction force in newtons from 0 to 40 against applied horizontal force in newtons from 0 to 50. A solid straight line rises from the origin with slope 1, labelled static: friction equals push, up to a peak at 29.4 N applied force and 29.4 N friction, marked as the maximum static friction. At that point the block starts to slide, and a dashed vertical drop goes down to 19.6 N. A thick horizontal line then continues at 19.6 N to 50 N applied force, labelled kinetic friction, constant.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M158 290 V50 M246 290 V50 M334 290 V50 M422 290 V50 M510 290 V50"/>
<path d="M70 230 H510 M70 170 H510 M70 110 H510 M70 50 H510"/>
</g>
<path d="M70 290 H520 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="158" y="308">10</text><text x="246" y="308">20</text><text x="334" y="308">30</text><text x="422" y="308">40</text><text x="510" y="308">50</text>
<text x="295" y="330" font-size="13">applied horizontal force (N)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="234">10</text><text x="62" y="174">20</text><text x="62" y="114">30</text><text x="62" y="54">40</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">friction force (N)</text>
<path d="M70 290 L328.7 113.6" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M328.7 113.6 V172.4" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<path d="M328.7 172.4 H510" stroke="#1d2b44" stroke-width="4"/>
<circle cx="328.7" cy="113.6" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="200" y="250" font-size="12" fill="#1d2b44">static: friction = push</text>
<text x="200" y="266" font-size="12" fill="#1d2b44">(block at rest)</text>
<text x="230" y="92" font-size="12" fill="#1d2b44">maximum static friction 29.4 N = μ_s F_n</text>
<text x="338" y="150" font-size="12" fill="#1d2b44">block starts to slide</text>
<text x="350" y="194" font-size="12" fill="#1d2b44">kinetic friction 19.6 N = μ_k F_n</text>
</svg>
<figcaption>Figure 1. A 5.0 kg block on a level floor (μ_s = 0.60, μ_k = 0.40) pushed by a slowly increasing horizontal force. While the block is at rest, static friction matches the push exactly. At 29.4 N the block slips, and friction falls to the constant kinetic value of 19.6 N.</figcaption>
</figure>

Three things to notice in Figure 1:

1. Below 29.4 N, the static line has slope 1: the friction **equals** the push, because the block stays at rest.
2. Static friction is only equal to μ_s F_n at one point, the peak.
3. After slipping, friction stays at 19.6 N however hard you push. Extra push now goes into acceleration.

## Worked example 1: will the crate move?

**Question.** A 40 kg crate rests on a level floor. For this crate and floor, μ_s = 0.50 and μ_k = 0.35. Take **+x in the direction of the push**. (a) A worker pushes horizontally with 150 N. What is the friction force? (b) She pushes with 250 N instead. Find the crate's acceleration.

1. Normal force: nothing else acts vertically, so F_n = mg = 40 kg × 9.8 m/s² = **392 N**.
2. Maximum static friction: F_f,s,max = μ_s F_n = 0.50 × 392 N = **196 N**.
3. **(a)** The push (150 N) is less than 196 N, so static friction can hold the crate. The crate stays at rest, so the net force is zero: static friction is **150 N** in the −x direction. It is **not** 196 N.
4. **(b)** 250 N is more than 196 N, so the crate slides. Now friction is kinetic: F_f,k = μ_k F_n = 0.35 × 392 N = **137.2 N**, in the −x direction.
5. Newton's second law along x: a_x = (250 N − 137.2 N) ÷ 40 kg = 112.8 N ÷ 40 kg = **+2.8 m/s²**.

**Check.** Once it is sliding, could she push with less than 196 N and keep it moving? Yes. At 170 N the net force is 170 − 137.2 = 32.8 N and a_x = +0.82 m/s². It still speeds up, because 170 N is more than kinetic friction. That is the "harder to start than to keep going" effect.

## Worked example 2: pulling at an angle changes friction

**Question.** A child of total mass 25 kg (with sled) is pulled across level snow. The rope tension is 120 N and the sled is already sliding, with μ_k = 0.20. Take **+x forwards and +y up**. Compare the acceleration when (a) the rope pulls **upwards** at 30° above the horizontal and (b) a parent instead **pushes** with 120 N directed **downwards** at 30° below the horizontal.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="p1-sled-title p1-sled-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-sled-title">Free-body diagram of the sled pulled at 30 degrees above the horizontal</title>
<desc id="p1-sled-desc">A dot represents the sled. Four arrows start from the dot, drawn roughly to scale. The weight, F_g = 245 N, points straight down and is the longest arrow. The normal force, F_n = 185 N, points straight up and is shorter than the weight. The rope tension, T = 120 N, points up and to the right at 30 degrees above the horizontal, with a dashed reference line along the horizontal. Kinetic friction, F_f,k = 37 N, points to the left, the shortest arrow.</desc>
<defs><marker id="p1-fr-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="400" fill="#ffffff"/>
<path d="M280 170 H420" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<path d="M280 170 V366" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-fr-ah)"/>
<path d="M280 170 V22" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-fr-ah)"/>
<path d="M280 170 L363.1 122" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-fr-ah)"/>
<path d="M280 170 H250.4" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-fr-ah)"/>
<circle cx="280" cy="170" r="6" fill="#1d2b44"/>
<text x="292" y="350" font-size="13" fill="#1d2b44">F_g = mg = 245 N</text>
<text x="292" y="40" font-size="13" fill="#1d2b44">F_n = 185 N</text>
<text x="372" y="118" font-size="13" fill="#1d2b44">T = 120 N</text>
<text x="330" y="164" font-size="12" fill="#1d2b44">30°</text>
<text x="140" y="164" font-size="13" fill="#1d2b44">F_f,k = 37 N</text>
<text x="400" y="250" font-size="12" fill="#1d2b44">+x forwards, +y up</text>
</svg>
<figcaption>Figure 2. Free-body diagram for case (a). The upward part of the tension (60 N) takes some of the weight, so the snow pushes up with only 185 N, and kinetic friction is 0.20 × 185 N = 37 N.</figcaption>
</figure>

1. Weight: mg = 25 × 9.8 = **245 N**. Components of the 120 N force: horizontal 120 cos 30° = **103.9 N**; vertical 120 sin 30° = **60 N**.
2. **(a) Pull upwards.** Along y, a_y = 0: F_n + 60 N − 245 N = 0, so F_n = **185 N**. Friction: 0.20 × 185 N = **37 N**. Along x: a_x = (103.9 − 37) N ÷ 25 kg = **+2.7 m/s²**.
3. **(b) Push downwards.** Along y: F_n − 60 N − 245 N = 0, so F_n = **305 N**. Friction: 0.20 × 305 N = **61 N**. Along x: a_x = (103.9 − 61) N ÷ 25 kg = **+1.7 m/s²**.

**Interpretation.** The same 120 N force, at the same angle, gives a much smaller acceleration when it presses the sled into the snow. The difference is entirely in the normal force. Pulling upwards is a much better choice than pushing downwards.

**Check.** If the 120 N pulled horizontally, F_n would be 245 N and friction 49 N, giving a_x = (120 − 49) ÷ 25 = 2.84 m/s². That is a little more than case (a): the upward pull reduces friction by 12 N, but it also loses 16 N of forward force. At 30° and μ_k = 0.20 the loss wins slightly. Pushing downwards is worst, because it loses forward force **and** adds friction.

## Worked example 3: a block resting on a slope

**Question.** A student tilts a wooden plank slowly. A small block on it starts to slip when the plank reaches 31° to the horizontal. (a) Find μ_s for the block and plank. (b) The plank is lowered to 20°. A 2.0 kg block of the same material rests on it. Find the size and direction of the static friction. Take **+x down the slope** and **+y perpendicular to the slope, away from it**.

1. **(a)** Just before slipping, static friction is at its maximum and the block is still in equilibrium. Along the slope: mg sin θ = μ_s F_n. Perpendicular: F_n = mg cos θ. Divide: μ_s = sin θ ÷ cos θ = **tan θ**. So μ_s = tan 31° = **0.60**. Notice that the mass cancels.
2. **(b)** Perpendicular: F_n = mg cos 20° = 2.0 × 9.8 × cos 20° = **18.4 N**.
3. The pull of gravity down the slope is mg sin 20° = **6.7 N**.
4. The most static friction can supply is μ_s F_n = 0.60 × 18.4 N = **11 N**. That is more than 6.7 N, so the block stays at rest.
5. At rest, the forces along the slope balance, so static friction is **6.7 N, directed up the slope** (−x). Again, it is **not** 11 N.

**Check.** The block slips only when tan θ > μ_s. Here tan 20° = 0.36, below 0.60, so it holds whatever its mass. This tilting method is a simple way to measure μ_s in the lab: it only needs a protractor.

## Why contact area does not matter

It seems natural that a wider block "grips" more. In this model it does not. If you turn a brick onto a face with twice the area, the weight is spread over twice the area, so each part of the surface is pressed half as hard. The total friction stays the same. This is why F_f = μ F_n contains no area. (Real surfaces only touch at tiny high points, which is the deeper reason, but you do not need it for this course.)

## Common misconceptions

- **"Static friction always equals μ_s F_n."** Only at the point of slipping. A crate pushed with 150 N, as in Worked example 1, has 150 N of static friction, not 196 N.
- **"The normal force always equals mg."** Not with an angled pull or push, on a slope, or in an accelerating lift (Worked examples 2 and 3).
- **"Friction always opposes motion."** It opposes **sliding between surfaces**. Static friction drives you forwards when you walk.
- **"An object at rest has no friction on it."** A block resting on a slope needs static friction to stay there (Worked example 3).
- **"A larger contact area means more friction."** Not in this model.
- **"Friction and the normal force are in the same direction."** They are perpendicular. F_f = μ F_n relates only their sizes.
- **"Kinetic friction is bigger if you push harder."** Kinetic friction depends on μ_k and F_n. A harder horizontal push leaves it unchanged and increases the acceleration instead (Figure 1).

## Where this leads

Friction appears in almost every force problem from here on. Next, Topic 2.8 adds another force you can model with one simple equation: the [spring force](/advanced-course-resources/physics-1/2-8-spring-forces-study-guide/). Friction returns in Unit 3, where kinetic friction transfers energy out of a system. Try the [practice questions](/advanced-course-resources/physics-1/2-7-kinetic-static-friction-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/2-7-kinetic-static-friction-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/2-7-kinetic-static-friction-checklist/) to consolidate. You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
