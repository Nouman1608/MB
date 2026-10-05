---
resourceId: "mb-ap-physcm-2.3-practice"
title: "Newton’s Third Law: Practice Questions (Physics C: Mechanics 2.3)"
description: "Seven original Marlbridge practice questions on third-law pairs, internal forces and the centre of mass, ideal pulleys, and tension in hanging cables with mass, using calculus."
course: "physics-c-mechanics"
unit: 2
topics: ["2.3"]
resourceType: "practice-questions"
prerequisites:
  - "Free-body diagrams (Topic 2.2) and centre of mass (Topic 2.1)"
  - "Integrating polynomials"
prerequisiteResources: ["mb-ap-physcm-2.3-study-guide"]
learningObjectives:
  - "Identify the third-law partner of a force and reject false pairs"
  - "Compare the forces in an interaction between objects of very different mass"
  - "Use the ideal-string and ideal-pulley models to find tensions and forces on a pulley"
  - "Derive and use dT/dy = λg for a hanging cable whose mass per unit length varies"
  - "Use the centre of mass to predict motion caused only by internal forces"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic only. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-2.3-study-guide", "mb-ap-physcm-2.3-revision-notes", "mb-ap-physcm-2.3-checklist"]
next: "mb-ap-physcm-2.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every situation is at rest or involves only internal forces, so no second-law calculation is needed."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. Use g = 9.8 m/s². Treat strings as ideal unless a question gives their mass. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

A crate rests on a warehouse floor. Which force is the third-law partner of the normal force that the floor exerts on the crate?

- (A) The gravitational force that Earth exerts on the crate
- (B) The downward contact force that the crate exerts on the floor
- (C) The gravitational force that the crate exerts on Earth
- (D) The friction force that the floor exerts on the crate

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Swap the names: "floor on crate" becomes "crate on floor". The partner is the same type (a normal, contact force), equal in size and opposite in direction: the crate pushes down on the floor.

- (A) is equal and opposite here only because the crate is at rest. It acts on the same object (the crate) and is gravitational, not contact, so it fails the pair test.
- (C) is the partner of the crate’s **weight**, not of the normal force. It involves the crate and Earth, not the crate and the floor.
- (D) is another force from the floor on the crate. It acts on the same object, and on a crate at rest on a level floor it is zero anyway.
</details>

## Question 2 (multiple choice · foundation)

A small car of mass 1200 kg runs into the back of a stationary lorry of mass 9000 kg. During the collision, how does the force the car exerts on the lorry compare with the force the lorry exerts on the car?

- (A) The force on the lorry is 7.5 times larger.
- (B) The force on the car is 7.5 times larger.
- (C) The forces are equal in size and opposite in direction.
- (D) Only the car exerts a force, because the lorry was not moving.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The two forces are a third-law pair. They are equal in size and opposite in direction at every instant of the collision, whatever the masses or speeds.

- (A) scales the force with the lorry’s mass (9000 ÷ 1200 = 7.5). Mass affects how each vehicle responds, not the size of the forces between them.
- (B) uses the same wrong ratio the other way round, assuming the heavier object "wins".
- (D) assumes only a moving object can push. Any interaction gives a force on each object, moving or not.
</details>

## Question 3 (multiple choice · core)

A uniform rope of mass m hangs at rest from a hook, with nothing attached to its lower end. What is the tension at a point one quarter of the rope’s length below the hook?

- (A) mg/4
- (B) mg/2
- (C) 3mg/4
- (D) mg

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The rope at that point holds up everything below it: three quarters of the rope, mass 3m/4. That piece is at rest, so the tension is **3mg/4**. Equivalently, integrate dT/dy = λg from the bottom, where T = 0.

- (A) uses the mass **above** the point. The rope above does not hang from this point; it is held by the hook.
- (B) is the tension at the middle, or the average tension along the rope.
- (D) is the tension at the hook. Using it everywhere treats the rope as if tension were uniform, which is true only for a massless string.
</details>

## Question 4 (calculation · core)

A 2.5 kg block hangs at rest from an ideal string. The string runs vertically up to an ideal pulley, passes over it, and then runs horizontally to a hook on a wall. Take **+x towards the wall** and **+y upward**.

(a) Find the tension in the horizontal part of the string.
(b) Find the size and direction of the total force the string exerts on the pulley.
(c) State the third-law partner of your answer to (b).

<details>
<summary>Worked solution</summary>

1. **(a)** The block is at rest, so the string pulls it up with a force equal to its weight: T = 2.5 × 9.8 = 24.5 N. The string and pulley are ideal, so the tension is the same on both sides: **T ≈ 25 N** in the horizontal part.
2. **(b)** The string pulls on the pulley along each of its two parts: 24.5 N in −y (down, towards the block) and 24.5 N in +x (towards the wall). Add the vectors: (24.5, −24.5) N. Size = 24.5√2 ≈ **35 N**, directed **45° below the horizontal, towards the wall**.
3. **(c)** The pulley exerts 35 N on the string, at 45° **above** the horizontal, **away from the wall**.

Suggested mark points (3): 1 for T from the block at rest with the ideal-pulley reason for equal tension; 1 for adding the two pulls as vectors to get 35 N at 45°; 1 for the partner with names swapped and direction reversed.

Common error: giving 49 N, which adds the two tensions as if they were parallel.
</details>

## Question 5 (constructed response · core)

A fridge magnet of mass 15 g stays at rest on the vertical steel door of a fridge.

(a) List every force exerted on the magnet, stating the object that exerts it and its direction.
(b) For each force in (a), state its third-law partner: what it acts on and its direction.
(c) Find the size of the friction force on the magnet and of its partner.
(d) A student says: "The door pulls the magnet in and pushes it out with equal force, so those two forces are a third-law pair." Explain whether the student is right.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Four forces on the magnet: gravity (Earth on magnet, down); magnetic attraction (door on magnet, horizontal, towards the door); normal force (door on magnet, horizontal, away from the door); static friction (door on magnet, up).

**(b)** Partners: the magnet pulls **Earth** up (gravitational); the magnet pulls the **door** towards the magnet (magnetic); the magnet pushes the **door** away from the magnet, into the fridge (normal, contact); the magnet’s friction on the **door** points down.

**(c)** The magnet is at rest, so the upward friction balances its weight: f = 0.015 × 9.8 = 0.147 ≈ **0.15 N, up**. Its partner is **0.15 N, down**, exerted by the magnet on the door.

**(d)** The student is **wrong**. Both forces act on the **same object** (the magnet), and they are **different types** (magnetic and contact). They are equal only because the magnet is at rest. Each has its own partner on the door.

| Point | What earns it |
|---|---|
| 1 | (a) All four forces, each with its source and direction |
| 1 | (b) Each partner acts on the other object (Earth or door) with direction reversed |
| 1 | (b) Each partner is the same type as its force |
| 1 | (c) 0.15 N for friction, with the partner on the door pointing down |
| 1 | (d) Rejects the pair: same object and different types; equal only because of equilibrium |
</details>

## Question 6 (constructed response · stretch)

A cable of length L = 20 m hangs at rest down a vertical shaft, with a 10 kg instrument package tied to its lower end. The cable is thicker near the top. Measuring y **upward from the lower end**, its mass per unit length is λ(y) = λ₀(1 + y/L), with λ₀ = 0.50 kg/m.

(a) By considering a small segment of cable of length dy, show that dT/dy = λ(y)g.
(b) Find an expression for the tension T(y).
(c) Find the tension at the lower end, the midpoint and the top.
(d) Find the height y at which the tension is 200 N.
(e) A student models the cable as an ideal string. State the tension the model predicts and explain why it fails here.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The segment has mass λ(y) dy. The cable above pulls it up with T(y + dy); the cable below pulls it down with T(y); Earth pulls it down with λ(y)g dy. It is at rest, so T(y + dy) − T(y) = λ(y)g dy, and dividing by dy gives **dT/dy = λ(y)g**.

**(b)** At y = 0 the cable holds only the package: T(0) = 10 × 9.8 = 98 N. Integrate:

T(y) = 98 + g∫₀ʸ λ₀(1 + y/L) dy = **g[10 + λ₀(y + y²/(2L))]** (N, with y in m)

**(c)** Lower end: **98 N**. Midpoint (y = 10 m): 9.8 × [10 + 0.50(10 + 2.5)] = 9.8 × 16.25 ≈ **160 N**. Top (y = 20 m): 9.8 × [10 + 0.50(20 + 10)] = 9.8 × 25 = 245 N ≈ **2.5 × 10² N**. Check: the cable’s total mass is ∫₀ᴸ λ dy = 15 kg, and 10 + 15 = 25 kg is held at the top.

**(d)** Set T = 200 N: 10 + 0.50(y + y²/40) = 200/9.8 = 20.41, so y² + 40y − 832.7 = 0. The positive root is **y ≈ 15 m**.

**(e)** The ideal model predicts **98 N everywhere**. It fails because the cable’s mass (15 kg) is larger than the package’s (10 kg), so each point must also hold up the cable below it. The slope dT/dy even grows with height, from 4.9 N/m at the bottom to 9.8 N/m at the top, because the cable gets heavier per metre.

| Point | What earns it |
|---|---|
| 1 | (a) Three forces on the segment and the equilibrium step leading to dT/dy = λg |
| 1 | (b) Integrates λ(y) correctly, with T(0) = 98 N as the initial condition |
| 1 | (c) 160 N and 2.5 × 10² N (carry forward an incorrect T(y)) |
| 1 | (d) Solves the quadratic and rejects the negative root, giving about 15 m |
| 1 | (e) 98 N everywhere, with the reason that the cable’s mass is not negligible |

**Alternative method.** For (b) and (c), you may instead find the mass of cable below y directly, m(y) = λ₀(y + y²/(2L)), and write T = (10 + m(y))g. This earns the same points.
</details>

## Question 7 (explanation · stretch)

Two astronauts float at rest inside a large space-station module, 7.0 m apart, without touching the walls. Astronaut P has mass 80 kg (with suit) and astronaut Q has mass 60 kg. Each holds one end of a light rope, and both pull hand over hand until they meet. Take **+x from P towards Q**, with P initially at x = 0.

(a) Compare the size of the force the rope exerts on P with the size of the force it exerts on Q.
(b) Explain why the centre of mass of the two astronauts stays at rest.
(c) Find where they meet.
(d) P says: "I moved less, so Q must have pulled harder than I did." Evaluate this claim.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** **Equal.** The rope is light (ideal), so its tension is the same at both ends. Each astronaut’s pull on the rope is paired with the rope’s equal pull back on that astronaut.

**(b)** Take the system as P + Q + rope. The forces between the astronauts and the rope are internal and cancel in pairs. Nothing outside the system pushes on them horizontally (no walls, air resistance ignored). With no external force, internal forces cannot change the motion of the centre of mass, which started at rest.

**(c)** x_cm = (80 × 0 + 60 × 7.0) ÷ (80 + 60) = **3.0 m**. They meet at the centre of mass: P moves **3.0 m** in +x and Q moves **4.0 m** in −x.

**(d)** The claim is **wrong**. The forces on P and Q are equal at every instant. P moves less because P has more mass: keeping the centre of mass fixed needs 80 × 3.0 = 60 × 4.0, so the distances are in the inverse ratio of the masses.

| Point | What earns it |
|---|---|
| 1 | (a) Equal forces, with the ideal-rope or third-law reason |
| 1 | (b) Identifies the rope forces as internal and notes there is no external horizontal force |
| 1 | (c) 3.0 m from P’s start, using the centre of mass |
| 1 | (d) Rejects the claim: equal forces, with the different distances explained by the different masses |
</details>

## How did you do?

- **Q1 or Q5 wrong:** use the four-question pair test in "Testing whether two forces form a pair" in the [study guide](/advanced-course-resources/physics-c-mechanics/2-3-newtons-third-law-study-guide/).
- **Q2 or Q7(d) wrong:** re-read "Every force is half of an interaction". The forces are equal whatever the masses.
- **Q3, Q4 or Q6 incomplete:** revisit "Tension: a chain of third-law pairs" and Worked example 2.
- **Q7(b) or (c) incomplete:** revisit "Internal forces and the centre of mass".

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/2-3-newtons-third-law-checklist/).
