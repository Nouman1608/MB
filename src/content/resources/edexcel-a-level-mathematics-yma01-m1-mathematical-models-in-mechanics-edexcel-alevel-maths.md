---
title: "Edexcel International A Level Mathematics (YMA01): M1 Mathematical models in mechanics"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit M1: Mechanics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 5.1
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m1-mechanics-1-edexcel-alevel-maths"
    subtopic: "m1-mathematical-models-in-mechanics-edexcel-alevel-maths"
description: "Edexcel IAL Maths M1 modelling: particles, rods, laminas, strings, pulleys, pegs and beads, where each assumption enters your working, and judging a model."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 1 of Unit M1: Mechanics 1 in the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3: "The basic ideas of mathematical modelling as applied in Mechanics." The guidance lists the terms you must know: "particle, lamina, rigid body, rod (light, uniform, non-uniform), inextensible string, smooth and rough surface, light smooth pulley, bead, wire, peg", and adds that you "should be familiar with the assumptions made in using these models".

Modelling questions are usually short, often one or two marks at the end of a longer question. They are easy marks to lose, because a vague answer gets no credit. This guide shows exactly where each assumption changes your working.

## What the specification asks for

| You must be able to | Typical wording |
|---|---|
| Say what each modelling term means | "State what is meant by the word *light* in this context" |
| Say how an assumption was used in a solution | "Explain how you have used the fact that the string is inextensible" |
| Name a modelling assumption | "State one modelling assumption you have made" |
| Judge or improve a model | "Suggest a refinement to the model" or "Comment on the answer" |

## The modelling cycle

Mechanics replaces a real situation with a simpler one you can solve:

1. **Simplify.** Choose assumptions: treat the car as a particle, ignore air resistance.
2. **Set up equations.** Use the laws of mechanics with those assumptions.
3. **Solve.** Find the answer in the model.
4. **Interpret and check.** Ask whether the answer is realistic.
5. **Refine.** If it is not, remove an assumption, for example by adding a resistance force, and solve again.

Questions test stages 1, 4 and 5 in words. Stage 2 is where you show that you know what each assumption does.

## The models, one at a time

**Particle.** The object's mass is treated as concentrated at a single point. Its size and shape are ignored, so it cannot rotate, and all forces act through that point. A particle still has mass. In working: you resolve all forces at one point and there are no moments.

**Rod.** A long, thin object with length but no thickness. It is rigid, so it does not bend.
- **Light rod:** its mass is negligible, so it has no weight in your equations.
- **Uniform rod:** its mass is spread evenly, so its weight acts at the midpoint.
- **Non-uniform rod:** its weight acts at its centre of mass, which is not the midpoint. Finding where it acts is often part of the question.

**Lamina.** A flat object whose thickness is negligible, such as a sheet of metal or a sign. It has area but no depth, so it is treated in two dimensions.

**Rigid body.** An object that keeps its shape under forces: it does not stretch, bend or squash. Distances within it stay fixed, which is why lever arms in a moments equation are known lengths.

**Light string.** The string's mass is negligible, so the tension is the same all along it. **Inextensible string:** it does not stretch, so two particles joined by a taut string move with the same speed and the same size of acceleration.

**Smooth and rough surfaces.** A smooth surface exerts no friction. The only contact force is the normal reaction, at right angles to the surface. A rough surface also exerts friction along the surface, up to a limit, with F ≤ μR.

**Light smooth pulley.** Light: the pulley has no mass, so no force is needed to turn it. Smooth: there is no friction where the string passes over it. Together these mean the tension is the same on both sides of the pulley.

**Bead and wire.** A bead is a particle with a hole through it, threaded on a wire or string. A wire is rigid and thin, so it can be modelled as a line. If the wire is smooth, the force it exerts on the bead is at right angles to the wire.

**Peg.** A fixed support, such as a nail or small rod, over which a string can pass or on which a rod can rest. A smooth peg exerts a force at right angles to the string or rod in contact with it, and the tension is the same on both sides of it.

## Other standard assumptions

- **Air resistance is ignored.** This is the most common one in projectile and vertical-motion problems.
- **The acceleration due to gravity is constant.** Edexcel mechanics papers tell you to take g = 9.8 m s⁻². Because g itself is given to 2 significant figures, final answers that use it are usually given to 2 or 3 significant figures.
- **Forces such as resistance are constant.** In reality they usually change with speed.
- **The coefficient of friction is constant** over the whole surface.

## Worked example 1: where the assumptions go

A particle A of mass 3 kg lies on a smooth horizontal table. It is joined by a light inextensible string, passing over a light smooth pulley at the edge of the table, to a particle B of mass 2 kg hanging freely. The system is released from rest. Find the acceleration and the tension.

```
B (down):  2g - T = 2a
A (along): T = 3a          (table smooth: no friction on A)
adding:    2g = 5a,  so a = 2(9.8)/5 = 3.92 m s^-2
           T = 3(3.92) = 11.76 = 11.8 N  (3 s.f.)
```

Here is where each assumption entered:

- **Particles:** each body is a single point, so the forces on it are resolved in one direction.
- **Light string:** the same T appears in both equations, along the whole string.
- **Inextensible string:** the same a appears in both equations.
- **Light smooth pulley:** the tension does not change as the string passes over it, so it is still T on B's side.
- **Smooth table:** there is no friction term in A's equation.

If an exam asks "how did you use the fact that the string is inextensible?", the answer is the fourth line of that list: the accelerations of A and B have the same magnitude. Saying "the string doesn't stretch" only restates the word.

## Worked example 2: commenting on a model

A ball is thrown vertically upwards at 14 m s⁻¹ and is modelled as a particle moving freely under gravity. Find its greatest height above the point of projection, and comment on whether the real ball would go higher or lower.

```
v^2 = u^2 + 2as with v = 0, a = -9.8:
0 = 196 - 19.6s,  so s = 10 m
```

The model ignores air resistance. A real ball experiences a resistance that opposes its motion, so its upward deceleration is greater than 9.8 m s⁻². It would therefore reach a height of less than 10 m. A good comment names the assumption, says what it changes, and says which way the answer moves.

## Worked example 3: a plank and a person

A plank rests on two supports and a child stands on it. A typical model treats the plank as a **uniform rod** and the child as a **particle**. Here is what each assumption does:

- **Rod:** the plank's width and thickness are ignored, so all forces act along one line and distances are measured along it.
- **Rigid:** the plank does not bend, so the distances to the supports stay fixed.
- **Uniform:** the plank's weight acts at its midpoint.
- **Child as a particle:** the child's weight acts at a single point. In reality the child's weight is spread over the area of their feet.

If the plank were described as **non-uniform**, you could not put its weight at the midpoint. You would have to call the distance x, or find it from another condition.

## Common mistakes

- **Mixing up light and inextensible.** Light means the same tension throughout; inextensible means the same acceleration. They are different assumptions.
- **Saying a particle has no mass.** A particle has mass but no size.
- **Saying a smooth pulley means "no tension".** It means no friction, so the tension is the same on both sides.
- **Giving the word instead of the effect.** "The rod is uniform" earns nothing if the question asks how you used it. Say "so its weight acts at the midpoint".
- **Naming an assumption the question already states.** If the question says "ignore air resistance", that is not one you made.
- **Using "light" and "uniform" together for a rod.** A light rod has no weight to place anywhere.

## Exam technique

- **"State"** needs a short phrase, without reasons.
- **"Explain how you have used…"** needs the effect on your equations: "so the tension is the same throughout", "so the accelerations are equal".
- **"Suggest"** or **"Suggest a refinement"** wants one specific change: "include air resistance", "allow the resistance to vary with speed", "take the mass of the string into account".
- **"Comment on"** wants a judgement linked to an assumption, often whether the real answer would be larger or smaller.
- Use the specification's terms exactly. "Light", "inextensible", "smooth", "uniform" and "particle" are the words mark schemes look for.

## Where next

- [M1 mathematical models revision notes](/resources/edexcel-a-level-mathematics-yma01-m1-mathematical-models-in-mechanics-edexcel-alevel-maths-revision-notes/) for a one-page table of terms and a self-test.
- [M1 mathematical models practice questions](/resources/edexcel-a-level-mathematics-yma01-m1-mathematical-models-in-mechanics-edexcel-alevel-maths-practice/) with mark schemes.
- [Models, vectors and constant acceleration](/resources/edexcel-ial-mathematics-mathematical-models-vectors-in-mechanics-and-constant/), the broader M1 guide.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification, Issue 3, April 2019 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
