---
title: "Cambridge A Level Mathematics (9709): Newton's laws of motion"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 4 – Mechanics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 4.4
syllabusTopics:
  - qualification: "a-level"
    topic: "mechanics-cambridge-alevel-maths"
    subtopic: "newtons-laws-of-motion-cambridge-alevel-maths"
description: "Cambridge 9709 Mechanics 4.4 in depth: F = ma for vertical motion, slopes, angled pulls, pulleys and tow-bars, and motion after a string goes slack."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 4.4 Newton's laws of motion is the engine room of Cambridge 9709 Paper 4. Kinematics (4.2) tells you how a particle moves once you know its acceleration; Newton's second law is how you find that acceleration from the forces. This guide concentrates on setting up the equations correctly in the situations the syllabus names, and on the two-phase problems where a string breaks or goes slack part-way through.

For an overview of the whole Mechanics paper, see the [Mechanics study guide](/resources/a-level-maths-9709-mechanics/). The [Newton's laws revision notes](/resources/cambridge-a-level-mathematics-9709-newtons-laws-of-motion-cambridge-alevel-maths-revision-notes/) condense this page, and the [Newton's laws practice questions](/resources/cambridge-a-level-mathematics-9709-newtons-laws-of-motion-cambridge-alevel-maths-practice/) give twelve exam-style problems with mark schemes.

## What the syllabus asks for

Candidates should be able to:

- apply Newton's laws to "the linear motion of a particle of constant mass moving under the action of constant forces, which may include friction, tension in an inextensible string and thrust in a connecting rod";
- use W = mg, with g = 10 m s⁻²;
- solve problems modelled as a particle moving vertically or on an inclined plane with constant acceleration, including a rough plane where the acceleration up the plane differs from the acceleration down it;
- solve problems on connected particles, such as particles joined by a light inextensible string over a smooth pulley, or a car towing a trailer by a light rope or a light rigid tow-bar.

The notes add that any resistance other than those listed, such as air resistance, will be stated in the question. If a question does not mention a resistance, there is none.

## The three laws as working tools

**First law.** A particle moves with constant velocity (including staying at rest) exactly when the resultant force on it is zero. In practice: any direction in which the particle does not accelerate gives an equilibrium equation. On a slope, that is the direction perpendicular to the plane; for horizontal motion, it is the vertical.

**Second law.** In the direction of the acceleration, resultant force = ma. Write the forces in the direction of motion as positive and those against it as negative, then set the total equal to ma.

**Third law.** The force A exerts on B is equal and opposite to the force B exerts on A. For connected particles this is why the same tension T appears in both particles' equations, acting towards the string in each case, and why a tow-bar pushes the car forwards with the same thrust with which it pushes the trailer backwards.

## A routine that works for every question

1. Draw a force diagram for each particle separately: weight, normal reaction, friction, tension or thrust, driving force and any stated resistance.
2. Mark the direction of acceleration with a double-headed arrow.
3. Resolve perpendicular to the motion (no acceleration) to find the normal reaction.
4. If the surface is rough and the particle is moving, friction = μR, opposing motion.
5. Resolve along the motion and write resultant force = ma.

Step 3 is where most errors start. The normal reaction is not always mg. It is mg cos α on a slope, and it changes when an applied force has a vertical component.

## Pulling at an angle on rough ground

A box of mass 5 kg is pulled along rough horizontal ground by a rope at 20° above the horizontal. The tension is 30 N and μ = 0.3. Find the acceleration.

```
Vertical (no acceleration):   R + 30 sin 20° = 50      →  R = 39.74 N
Friction:                     F = 0.3 × 39.74 = 11.92 N
Horizontal:                   30 cos 20° − 11.92 = 5a  →  28.19 − 11.92 = 5a
                              a = 3.25 m s⁻²
```

The upward component of the pull reduces the normal reaction, and so reduces friction. If the same force pushed downwards at 20° below the horizontal, R would increase to 50 + 30 sin 20°, friction would rise and the acceleration would fall. Comparing the two cases is a favourite follow-up part.

## Vertical motion

For a particle moving vertically, the only forces are usually weight and one other force: the tension in a cable, the normal reaction from a lift floor, or a stated air resistance. Take the direction of acceleration as positive.

- A lift of mass m accelerating **upwards** at a: T − mg = ma, so the tension exceeds the weight.
- The same lift accelerating **downwards** at a (or moving upwards while slowing down): mg − T = ma, so the tension is less than the weight.
- At constant velocity, T = mg in either direction.

"Moving upwards" and "accelerating upwards" are not the same thing. A lift moving up while slowing down has a downward acceleration. Decide the direction of acceleration from the change in speed, not from the direction of travel.

## Connected particles over a pulley

Particles A (3 kg) and B (2 kg) are attached to the ends of a light inextensible string passing over a smooth fixed pulley. They are released from rest with the string taut and A 1.5 m above the floor. Find the tension, the speed of A when it reaches the floor, and the greatest height B rises above its starting point.

**Phase 1, string taut.** A accelerates down and B up, at the same rate.

```
A:  30 − T = 3a
B:  T − 20 = 2a
Add:  10 = 5a   →   a = 2 m s⁻²,   T = 30 − 6 = 24 N
```

A falls 1.5 m from rest: v² = 2 × 2 × 1.5 = 6, so v = √6 ≈ 2.45 m s⁻¹.

**Phase 2, string slack.** When A hits the floor, the string goes slack and B is a free particle moving upwards at √6 m s⁻¹ with acceleration −10 m s⁻². It rises a further 6 ÷ 20 = 0.3 m. B's greatest height above its starting point is 1.5 + 0.3 = **1.8 m**.

*Annotation:* the second phase is pure kinematics, but the starting speed comes from the first phase. Questions often hide this two-phase structure behind a single phrase such as "find the greatest height reached by B".

Two features make the pulley model work. The string is **light**, so the tension is the same on both sides of a smooth pulley. It is **inextensible**, so both particles have the same speed and the same magnitude of acceleration while the string is taut.

## Inclined planes and the up-down difference

On a rough plane inclined at α, the normal reaction is mg cos α and the component of weight down the plane is mg sin α. Friction acts against the direction of motion, so:

```
Moving up the plane:     −mg sin α − μmg cos α = ma   (decelerating)
Moving down the plane:    mg sin α − μmg cos α = ma
```

After coming to rest on the way up, the particle slides back only if mg sin α exceeds the maximum friction μmg cos α, that is, if tan α > μ. If tan α ≤ μ, it stays at rest. Many questions ask you to "determine whether" the particle moves back down, and this comparison is the required reasoning.

## Tow-bars and ropes

For a car towing a trailer, consider the whole system to find the acceleration when the internal force is not needed, then the trailer alone to find the tension or thrust.

- A light **rope** can only pull. If the car brakes harder than the trailer's own resistance would decelerate it, the rope goes slack and the trailer moves on its own.
- A light rigid **tow-bar** can pull (tension) or push (thrust). When the car decelerates, the tow-bar is usually in thrust, pushing back on the trailer.

If your calculated tension is negative, the force in the tow-bar is a thrust of that magnitude; for a rope, a negative tension means your model is wrong and the rope is slack.

## Common mistakes

- Taking R = mg when an applied force has a vertical component, or when the particle is on a slope.
- Using the system equation to find a tension: the tension is internal, so it cancels and cannot be found that way.
- Forgetting that the particles' accelerations are equal only while the string is taut.
- Using g = 9.8 or 9.81: 9709 Paper 4 expects g = 10 m s⁻².
- Leaving friction in the same direction after the particle reverses.
- Treating "mass" and "weight" as interchangeable: a 4 kg particle has weight 40 N.

## Exam technique

- **Find** the tension or acceleration: show the equation for each particle. Mark schemes usually credit each correct Newton's second law equation separately.
- **Show that** the acceleration is a given value: the system equation alone may be accepted, but write both particle equations if tension is also needed.
- **Determine whether** a particle moves: compare the driving component with the maximum friction and state the conclusion.
- **Find the greatest height** or **the total distance**: check whether the motion has two phases, and handle each with its own acceleration.

## Official syllabus

Cambridge International, *Cambridge International AS & A Level Mathematics (9709) syllabus for examination in 2026 and 2027*: [official syllabus PDF](https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf), Subject content, section 4.4 "Newton's laws of motion" (Mechanics, Paper 4).
