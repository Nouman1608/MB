---
title: "Cambridge A Level Mathematics (9709): Momentum"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 4 – Mechanics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 4.3
syllabusTopics:
  - qualification: "a-level"
    topic: "mechanics-cambridge-alevel-maths"
    subtopic: "momentum-cambridge-alevel-maths"
description: "Cambridge 9709 Mechanics subtopic 4.3 in depth: momentum as a vector, conservation in direct impacts, coalescence, multi-stage problems and further collisions."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 4.3 Momentum is the shortest section of the Mechanics content for Paper 4 of Cambridge International AS & A Level Mathematics 9709, but it is rarely examined on its own. A momentum question usually sits inside a longer problem: a particle decelerates under friction, collides with another, and the combined body then slides to rest. This guide takes the two syllabus statements apart, shows how they join up with kinematics, Newton's laws and energy, and works through the situations that cost candidates marks.

For the whole of Paper 4 in one place, see the [Mechanics study guide](/resources/a-level-maths-9709-mechanics/). For condensed recall and exam-style questions on this subtopic, use the [momentum revision notes](/resources/cambridge-a-level-mathematics-9709-momentum-revision-notes/) and the [momentum practice questions](/resources/cambridge-a-level-mathematics-9709-momentum-practice/).

## What the syllabus asks for

The 2026-2027 syllabus says candidates should be able to:

- "use the definition of linear momentum and show understanding of its vector nature", for motion in one dimension only;
- "use conservation of linear momentum to solve problems that may be modelled as the direct impact of two bodies", including bodies that coalesce on impact.

The notes also state that impulse and the coefficient of restitution are not required. That boundary matters: every collision you meet gives you enough information (usually one velocity after impact, or the fact that the bodies coalesce) for conservation of momentum alone to finish the problem. If you find yourself with two unknowns and one equation, re-read the question for a condition you have missed.

## Momentum as a vector

The momentum of a particle of mass m moving with velocity v is mv, measured in kg m s⁻¹ (equivalently N s). Because the motion is in a straight line, the vector nature reduces to a sign. Before writing any equation, choose a positive direction and mark it on a sketch. Every velocity in that direction is positive; every velocity in the opposite direction is negative.

The sign convention matters most when a body changes direction. A ball of mass 0.2 kg moving at 6 m s⁻¹ hits a wall and rebounds at 4 m s⁻¹. Taking the original direction as positive:

```
momentum before = 0.2 × 6 = 1.2 kg m s⁻¹
momentum after  = 0.2 × (−4) = −0.8 kg m s⁻¹
change          = −0.8 − 1.2 = −2 kg m s⁻¹
```

The magnitude of the change is 2 kg m s⁻¹, not 0.4 kg m s⁻¹. Subtracting speeds instead of velocities is the classic error this example guards against. The ball's momentum is not conserved here because the wall exerts an external force on it; conservation applies to a system of two bodies that exert forces only on each other during the impact.

## Conservation in a direct impact

When two bodies collide directly, the forces they exert on each other are equal and opposite (Newton's third law) and act for the same short time. Their effects on momentum therefore cancel, and

```
m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂
```

where u stands for velocities before impact and v for velocities after. If the bodies coalesce, they move on with a common velocity V:

```
m₁u₁ + m₂u₂ = (m₁ + m₂)V
```

Two habits make this reliable:

1. Write every velocity with its sign in the equation, including unknown ones. Leave an unknown velocity as +v and let the algebra decide its direction.
2. Interpret the sign of your answer in words. A negative answer means the body moves in the negative direction after the impact; say so explicitly, because questions frequently ask for "the speed and direction".

The model assumes that no external horizontal force acts during the impact. On a smooth surface this is exact. On a rough surface friction acts, but the impact is treated as instantaneous, so friction has no time to change the momentum during the collision itself. It does change the velocities before and after, which is where Newton's laws come back in.

## Worked example 1: finding a velocity after impact

Particle P, of mass 0.4 kg, moves at 5 m s⁻¹ on a smooth horizontal surface towards particle Q, of mass 0.6 kg, which moves at 2 m s⁻¹ towards P. After the collision P's direction of motion is reversed and its speed is 1 m s⁻¹. Find the velocity of Q after the collision, and the loss of kinetic energy.

Take P's original direction as positive. Q's initial velocity is −2 and P's final velocity is −1.

```
0.4(5) + 0.6(−2) = 0.4(−1) + 0.6v
        2 − 1.2 = −0.4 + 0.6v
           0.8 + 0.4 = 0.6v   →   v = 2
```

Q moves at **2 m s⁻¹ in P's original direction**: both particles have reversed.

Kinetic energy before: ½(0.4)(5²) + ½(0.6)(2²) = 5 + 1.2 = 6.2 J. After: ½(0.4)(1²) + ½(0.6)(2²) = 0.2 + 1.2 = 1.4 J. The loss is **4.8 J**. Kinetic energy is squared speed, so signs disappear; do not carry negative velocities into it as negative energies.

*Annotation:* the statement "P's direction of motion is reversed" is the piece of information that fixes the sign of P's final velocity. Without it there would be two possible answers.

## Worked example 2: a multi-stage problem

Particle A, of mass 2 kg, is projected at 7 m s⁻¹ along a rough horizontal surface for which the coefficient of friction is 0.15. After travelling 5 m it hits particle B, of mass 3 kg, which is at rest. The particles coalesce. Find how far the combined particle travels before coming to rest. Take g = 10 m s⁻².

**Stage 1, before the impact (Newton's second law and kinematics).** Friction on A is 0.15 × 2 × 10 = 3 N, so the deceleration is 3 ÷ 2 = 1.5 m s⁻². Then v² = 7² − 2(1.5)(5) = 34, so A arrives at √34 ≈ 5.83 m s⁻¹.

**Stage 2, the impact (momentum).** 2√34 = 5V, so V = 0.4√34 ≈ 2.33 m s⁻¹.

**Stage 3, after the impact.** The friction on the 5 kg particle is 0.15 × 5 × 10 = 7.5 N, so the deceleration is again 1.5 m s⁻². Then 0 = V² − 2(1.5)s with V² = 0.16 × 34 = 5.44, giving s = 5.44 ÷ 3 ≈ **1.81 m**.

*Annotation:* keeping √34 exact until the end avoids rounding drift. Notice also that the deceleration μg does not depend on mass, which is why it is the same in stages 1 and 3.

## Worked example 3: chains of collisions

Particles A (0.5 kg), B (0.3 kg) and C (m kg) lie in a straight line on a smooth surface, in that order. A is projected towards B at 4 m s⁻¹; B and C are at rest. After A hits B, A continues in the same direction at 1 m s⁻¹. B then hits C and they coalesce, moving at 2 m s⁻¹. Find m and decide whether A collides with B again.

First impact: 0.5(4) = 0.5(1) + 0.3v, so v = 5 m s⁻¹.

Second impact: 0.3(5) = (0.3 + m)(2), so 1.5 = 0.6 + 2m and **m = 0.45**.

After both impacts A moves at 1 m s⁻¹ and the combined particle BC moves at 2 m s⁻¹ ahead of it in the same direction. BC is faster, so the gap grows: **there is no further collision**.

The syllabus restricts you to the direct impact of two bodies, so a chain is always handled one impact at a time. The "further collision" check is a comparison of velocities: a rear body collides again only if it moves faster, in the same direction, than the body in front, or if the two move towards each other.

## Common mistakes

- **Losing the sign of a velocity.** A body moving "towards" another needs a negative velocity if the other body's direction is positive.
- **Answering "speed" when "velocity" or "direction" is asked.** State the direction in words relative to a named original direction.
- **Treating kinetic energy as conserved.** It almost never is in these questions; the loss is often what a later part asks for.
- **Applying conservation to one body against a wall or the ground.** The wall supplies an external force; only the change in momentum of the single body can be found.
- **Rounding a speed before the impact equation.** Carry surds or at least four significant figures through each stage, then give the final answer to 3 significant figures.

## Exam technique for the command words

- **Find** or **Calculate:** write the momentum equation with every term visible, then solve. A bare answer risks losing method marks if the arithmetic slips.
- **Show that:** the answer is given, so every line must appear, including the substitution with signs. Finish by stating the given result.
- **State the direction** or **in which direction:** answer in a sentence such as "Q moves in the direction in which P was originally moving".
- **Determine whether** a further collision occurs: compare velocities after the last impact and give a reason, not just "yes" or "no".

Mark schemes typically give a method mark for a momentum equation with the correct number of terms. You can earn it despite a later sign slip only if you show the equation, so never combine the substitution and the solving into one line of mental arithmetic.

## Official syllabus

Cambridge International, *Cambridge International AS & A Level Mathematics (9709) syllabus for examination in 2026 and 2027*: [official syllabus PDF](https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf), Subject content, section 4.3 "Momentum" (Mechanics, Paper 4).
