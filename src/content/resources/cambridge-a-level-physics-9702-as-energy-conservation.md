---
title: "Cambridge AS & A Level Physics (9702): Energy conservation"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Work, energy and power"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 5.1
syllabusTopics:
  - qualification: "a-level"
    topic: "as-work-energy-and-power"
    subtopic: "as-energy-conservation"
description: "Subtopic 5.1 of Cambridge AS Physics 9702 in depth: the sign of work done, energy accounts, efficiency of chains, power and deriving P = Fv."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of Cambridge International AS & A Level
Physics 9702 (2025–2027 series): **5.1 Energy conservation**, the first half of
AS Topic 5, Work, energy and power. The whole topic is summarised in the
[Work, Energy and Power study guide](/resources/as-physics-work-energy-and-power/);
this page concentrates on the reasoning behind work, energy accounts, efficiency
and power, with examples that the topic guide does not use. Condense it with the
[energy conservation revision notes](/resources/cambridge-a-level-physics-9702-as-energy-conservation-revision-notes/)
and test yourself with the [energy conservation practice questions](/resources/cambridge-a-level-physics-9702-as-energy-conservation-practice/).

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL PHYSICS 9702 — AS Level, 5.1 Energy conservation**

Candidates should be able to:

- understand the concept of work, and recall and use work done = force ×
displacement in the direction of the force
- recall and apply the principle of conservation of energy
- recall and understand that the efficiency of a system is the ratio of useful
energy output from the system to the total energy input, and use the concept
of efficiency to solve problems
- define power as work done per unit time, solve problems using P = W/t, and
derive P = Fv and use it to solve problems

The syllabus assumes the forms of energy and energy transfers from IGCSE/O Level.

## Work done: what the definition really says

Work is done when a force moves its point of application. The amount is the
force multiplied by the displacement **in the direction of the force**:

```
W = F s cos(theta)      theta = angle between the force and the displacement
```

Three consequences follow, and each one is examined.

- **Work can be negative.** When θ is greater than 90°, cos θ is negative. A
force that opposes the motion (friction, air resistance, a braking force)
does negative work on the object, and the object's energy decreases.
- **A force at right angles to the motion does no work.** The normal contact
force on a block sliding along a level floor, or the tension in a pendulum
string at any instant, is perpendicular to the displacement, so it transfers
no energy to the object.
- **"Work done by" and "work done against" have opposite signs.** If friction
does −40 J of work on a box, then 40 J of work is done *against* friction,
and 40 J is transferred to internal energy of the box and the floor.

**Worked example — a lift descending at constant speed.** A lift of mass
600 kg descends 12 m at constant speed. Find the work done on the lift by
gravity and by the cable tension.

```
constant speed, so tension T = weight = mg = 600 x 9.81 = 5886 N

work done by gravity  = (mg)(s)cos 0   = 5886 x 12      = +7.06 x 10^4 J
work done by tension  = (T)(s)cos 180  = 5886 x 12 x -1 = -7.06 x 10^4 J
total work done       = 0, so the kinetic energy does not change
```

The gravitational potential energy lost by the lift is not "used up": it is
transferred, through the cable, to the motor and braking system. Asking "what
does each force do to the energy of the object?" keeps the signs straight.

## Conservation of energy as an energy account

The **principle of conservation of energy** states that energy cannot be
created or destroyed; it can only be transferred from one store to another,
so the total energy of a closed system is constant.

In problems, use the principle as an account that must balance between two
chosen moments:

```
energy at start + energy supplied = energy at end + energy dissipated
```

The terms you will meet most often are kinetic energy, gravitational
potential energy, elastic potential energy, the work done by a driving force
(energy supplied) and the work done against resistive forces (energy
dissipated, equal to resistive force × distance moved). Writing the account
in words before substituting numbers is the habit that prevents missing
terms.

**Why "dissipated", not "lost".** Energy transferred to internal energy of
the surroundings is still there; it has spread out so widely that it can no
longer do useful work. An answer that says energy is "lost" or "used up"
contradicts the principle you are applying.

## Efficiency

The syllabus defines efficiency as the ratio of the useful energy output from
a system to the total energy input. Because both energies are transferred in
the same time, the same ratio can be written with powers:

```
efficiency = useful energy output / total energy input
           = useful power output  / total power input
```

Efficiency has no unit. It may be given as a decimal (0.74) or a percentage
(74%), and it can never exceed 1, because the output would then include
energy that had been created.

**Systems in a chain.** When the output of one device is the input of the
next, the overall efficiency is the product of the individual efficiencies.
A pump that is 0.80 efficient driven by a motor that is 0.90 efficient has an
overall efficiency of 0.80 × 0.90 = 0.72. This follows directly from the
definition, so it can be used without being separately stated.

**Worked example — a small hydroelectric generator.** Water flows through a
turbine at 120 kg every second after falling through a vertical height of
45 m. The turbine and generator together have an efficiency of 85%. Find the
electrical power output.

```
energy input per second = (mass per second) x g x h
                        = 120 x 9.81 x 45 = 5.30 x 10^4 W
useful power output     = 0.85 x 5.30 x 10^4 = 4.50 x 10^4 W  (45 kW)
```

The key step is treating "mass per second" as the quantity to multiply by gh:
the answer is then a power directly, with no time to find.

## Power and the derivation of P = Fv

**Power** is defined as the work done per unit time (equivalently, the rate
of energy transfer). Its unit, the watt, is one joule per second.

```
P = W / t
```

The syllabus requires you to **derive** P = Fv. A full derivation for a
constant force F moving an object at velocity v in the direction of the
force:

```
P = W / t                     definition of power
W = F s                       work done, force parallel to displacement
P = F s / t
s / t = v                     velocity
P = F v
```

Over a very short time interval this gives the instantaneous power, so P = Fv
is valid while an object accelerates as well as at constant velocity.

**Worked example — a car with a fixed power output.** A car of mass 1100 kg
has a constant engine output power of 36 kW. The total resistive force is a
constant 1200 N. Find (a) the maximum speed on a level road and (b) the
acceleration when the speed is 12 m s⁻¹.

```
(a) at maximum speed, driving force = resistive force = 1200 N
    v_max = P / F = 36 000 / 1200 = 30 m/s

(b) driving force at 12 m/s:  F = P / v = 36 000 / 12 = 3000 N
    resultant force = 3000 - 1200 = 1800 N
    a = F / m = 1800 / 1100 = 1.6 m/s^2
```

Part (b) is where many candidates go wrong: they use F = 1200 N, forgetting
that at a lower speed the same power produces a larger driving force.

## Exam technique: command words for this subtopic

- **Define** (power, efficiency): give the word equation in full, such as
"work done per unit time". A bare symbol equation with undefined symbols
rarely earns the mark.
- **State** (the principle of conservation of energy): include both halves —
energy is not created or destroyed, and it is transferred between forms.
- **Derive** (P = Fv): start from the definitions and show every substitution
in order, as in the derivation above.
- **Show that**: work to at least one more significant figure than the value
you are given, and state the final value.
- **Calculate**: final answers normally to two or three significant figures,
matching the data, with the unit.

## Common mistakes

- **Using the slope length instead of the vertical height, or the total
displacement instead of its component along the force.**
- **Leaving out the work done against friction** from an energy account, or
adding it to the wrong side.
- **Using the resistive force in P = Fv during acceleration**, when the
driving force is needed.
- **Quoting an efficiency greater than 100%** after inverting the ratio.
- **Saying a perpendicular force "does negative work"** — it does none.

## Quick revision checklist

- W = Fs cos θ; work is negative when the force opposes the motion and zero
when it is perpendicular
- Conservation of energy written as a balanced account between two moments
- Efficiency = useful output ÷ total input, using energies or powers; chains
multiply
- P = W/t, and the step-by-step derivation of P = Fv
- At maximum speed, driving force = resistive force

## Frequently asked questions

**Can work done be negative?**
Yes. When the angle between the force and the displacement exceeds 90°, the
work done by that force is negative and the object's energy decreases, as
with friction or a braking force.

**Does P = Fv only work at constant speed?**
No. It gives the instantaneous power at any speed. At constant speed it is
simply easier to use, because the driving force then equals the resistive
force.

**Should efficiency be a percentage or a decimal?**
Either is acceptable, provided you are consistent and never exceed 100% or 1.

## Related resources

- [Work, Energy and Power](/resources/as-physics-work-energy-and-power/) — the whole of Topic 5 in one guide
- [Gravitational potential energy and kinetic energy](/resources/cambridge-a-level-physics-9702-as-gravitational-potential-energy-and-kinetic-energy/) — subtopic 5.2, the energy stores used in most energy accounts
- [Cambridge AS & A Level Physics hub](/boards/cambridge/a-level/physics/)

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027
series. Always check the current syllabus for your examination year.*
