---
title: "Cambridge A Level Mathematics (9709): Energy, work and power"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 4 – Mechanics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 4.5
syllabusTopics:
  - qualification: "a-level"
    topic: "mechanics-cambridge-alevel-maths"
    subtopic: "energy-work-and-power-cambridge-alevel-maths"
description: "Cambridge 9709 Mechanics 4.5 in depth: work done by angled forces, the work-energy principle, average and instantaneous power, and vehicles on hills."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 4.5 Energy, work and power gives you a second way to solve many Paper 4 problems. Newton's second law works with forces and accelerations at an instant; energy methods compare the start and end of a motion and skip everything in between. That is why energy is the only practical method when a path is curved, and often the quickest method when it is straight. This guide sets out each syllabus statement, then works through the three problem types that appear most often: a force at an angle doing work against friction, a motion with an unknown resistance, and a vehicle working at constant power.

The [Mechanics study guide](/resources/a-level-maths-9709-mechanics/) summarises all of Paper 4. This page goes further on 4.5 alone, and is paired with the [energy, work and power revision notes](/resources/cambridge-a-level-mathematics-9709-energy-work-and-power-revision-notes/) and the [energy, work and power practice questions](/resources/cambridge-a-level-mathematics-9709-energy-work-and-power-practice/).

## What the syllabus asks for

Candidates should be able to:

- understand the work done by a force and calculate the work done by a constant force "when its point of application undergoes a displacement not necessarily parallel to the force", using W = Fd cos θ (the scalar product is not required);
- understand gravitational potential energy and kinetic energy, and use the formulae;
- understand and use the relationship between the change in energy of a system and the work done by the external forces, including the principle of conservation of energy and cases where the motion is not linear, such as a child on a smooth curved slide;
- use power as the rate at which a force does work, including average power = work done ÷ time taken, and P = Fv for a force acting in the direction of motion;
- solve problems such as the instantaneous acceleration of a car moving on a hill against a resistance.

## Work done by a constant force

Work done = Fd cos θ, where θ is the angle between the force and the displacement. Three special cases recur:

- **θ = 0**: the force acts along the motion, so W = Fd (driving force, tension along a slope).
- **θ = 90°**: the force does no work. The normal reaction on a particle sliding along a surface never does work, and nor does the weight of a particle moving horizontally.
- **θ = 180°**: the force opposes the motion, so W = −Fd. This is the work done *by* friction; candidates usually describe it as Fd of work done *against* friction.

Work is a scalar and is measured in joules. A force does positive work when it has a component along the motion and negative work when its component opposes the motion.

## Energy and the work–energy principle

Kinetic energy is ½mv² and the change in gravitational potential energy when a particle rises a vertical height h is mgh. The useful form of the work–energy principle for 9709 is:

```
Initial KE + initial PE + work done by driving forces
      = Final KE + final PE + work done against resistances
```

If there are no resistances and no driving forces, this reduces to conservation of mechanical energy: KE + PE is constant. Only the vertical height change matters for potential energy, so the shape of the path is irrelevant. This is the reason the syllabus can set curved-slide questions without any calculus or resolving.

## Worked example 1: a sledge pulled at an angle

A sledge of mass 12 kg starts from rest on rough horizontal snow. It is pulled 15 m by a rope at 30° above the horizontal with a tension of 40 N. The coefficient of friction is 0.2. Find the speed of the sledge after 15 m.

**Normal reaction:** R + 40 sin 30° = 120, so R = 100 N, and friction F = 0.2 × 100 = 20 N.

**Work done by the tension:** 40 cos 30° × 15 = 519.6 J.

**Work done against friction:** 20 × 15 = 300 J.

**Energy equation:** 519.6 − 300 = ½ × 12 × v², so 6v² = 219.6 and v² = 36.60, giving **v = 6.05 m s⁻¹**.

*Annotation:* the vertical component of the tension does no work, because the sledge does not move vertically, but it still matters: it reduces the normal reaction and therefore the friction. Ignoring it gives R = 120 N, F = 24 N and a wrong answer.

## Worked example 2: an unknown resistance on a curved road

A cyclist and bicycle have total mass 80 kg. Starting from rest at A, the cyclist freewheels down a winding road to B, which is 12 m vertically below A. The length of the road from A to B is 200 m. The speed at B is 10 m s⁻¹. Find the work done against resistance, and the average resistance.

```
PE lost   = 80 × 10 × 12   = 9600 J
KE gained = ½ × 80 × 10²   = 4000 J
Work done against resistance = 9600 − 4000 = 5600 J
Average resistance = 5600 ÷ 200 = 28 N
```

The road is not straight, so a Newton's second law method is impossible here. Notice that the resistance is found as an average over the whole path; the work-energy method cannot say how it varied.

## Power

Power is the rate at which a force does work, measured in watts (1 W = 1 J s⁻¹). Two formulae are needed:

- **Average power** = work done ÷ time taken. Use this when a task is described in total: raising a load through a height in a given time, or a car gaining a known amount of energy over a known interval.
- **Instantaneous power** P = Fv, where F is the force in the direction of motion and v is the current speed. Use this for engines: the driving force at speed v is D = P ÷ v.

If the power is constant, the driving force falls as the speed rises. A car accelerates until the driving force equals the total resistance; at that point a = 0 and the car has reached its **maximum (terminal) speed**, v_max = P ÷ (total resistance).

## Worked example 3: a lorry on level ground and on a hill

A lorry of mass 8000 kg has an engine working at a constant 60 kW. The resistance to motion is a constant 2000 N.

**(a) Maximum speed on a level road.** At maximum speed D = 2000 N, so v = 60 000 ÷ 2000 = **30 m s⁻¹**.

**(b) Acceleration on the level at 20 m s⁻¹.** D = 60 000 ÷ 20 = 3000 N, so 3000 − 2000 = 8000a and **a = 0.125 m s⁻²**.

**(c) Maximum speed up a hill inclined at θ, where sin θ = 0.02.** The weight component down the hill is 8000 × 10 × 0.02 = 1600 N, so the total resistance to motion is 3600 N and v = 60 000 ÷ 3600 = **16.7 m s⁻¹**.

*Annotation:* the weight component along the slope acts like an extra resistance going uphill, and like an extra driving force going downhill. Write it into the Newton's second law equation with the correct sign; do not add it to the power.

## Combining average power with work–energy

Questions sometimes ask for the work done by an engine when the driving force is not constant. Work–energy still answers this. A car of mass 900 kg accelerates from 10 m s⁻¹ to 20 m s⁻¹ over 300 m of level road in 20 s, against a constant resistance of 500 N. The increase in kinetic energy is ½ × 900 × (20² − 10²) = 135 000 J and the work done against resistance is 500 × 300 = 150 000 J, so the engine does 285 000 J of work. Its average power is 285 000 ÷ 20 = 14 250 W, or **14.3 kW**.

## Common mistakes

- Using the full force rather than F cos θ for work done.
- Using the distance along a slope instead of the vertical height in mgh.
- Forgetting that an angled force changes the normal reaction and so the friction.
- Using P = Fv with the total power and the net force; F in P = Fv is the driving force only.
- Writing "work done by friction" as positive energy gained.
- Mixing kilowatts and watts: 60 kW is 60 000 W.

## Exam technique

- **Use an energy method:** the question requires the work-energy principle; a correct answer by Newton's second law and kinematics may not earn the method marks.
- **Find the work done against** a resistance: write a full energy equation with every term labelled before solving.
- **Find the greatest speed** or **maximum speed:** set a = 0, so driving force = total resistance, then use v = P ÷ F.
- **Find the acceleration at the instant when...:** find D = P ÷ v first, then use Newton's second law with every force along the motion.
- Give energies in joules and power in watts or kilowatts as the question uses them.

## Official syllabus

Cambridge International, *Cambridge International AS & A Level Mathematics (9709) syllabus for examination in 2026 and 2027*: [official syllabus PDF](https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf), Subject content, section 4.5 "Energy, work and power" (Mechanics, Paper 4).
