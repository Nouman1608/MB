---
title: "OCR A Level Mathematics A (H240): Quantities and units in mechanics"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Mechanics"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 3.1
syllabusTopics:
  - qualification: "a-level"
    topic: "mechanics-ocr-alevel-maths"
    subtopic: "quantities-and-units-in-mechanics-ocr-alevel-maths"
description: "Study guide to SI base units, derived units for velocity, acceleration, force, weight and moment, unit conversion and unit checks for OCR A Level Maths H240."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 3.01, Quantities and Units in Mechanics, of OCR A Level Mathematics A (H240), specification Version 3.1 (August 2026), for first assessment in 2018. References 3.01a and 3.01b are Stage 1 content, shared with AS Level H230. Reference 3.01c, the unit for moment, is Stage 2 and so A Level only. The section is short in the specification, but every mechanics answer depends on it: a correct number with a missing or wrong unit is not a complete answer.

Use it with the [quantities and units revision notes](/resources/ocr-a-level-mathematics-h240-quantities-and-units-in-mechanics-revision-notes/) and the [quantities and units practice questions](/resources/ocr-a-level-mathematics-h240-quantities-and-units-in-mechanics-practice/). Kinematics, which applies these units straight away, is taught in the [quantities, units and kinematics study guide](/resources/ocr-a-level-mathematics-quantities-units-and-kinematics-with-constant/), and weight and forces in the [Newton's laws, weight and equilibrium guide](/resources/ocr-a-level-mathematics-newtons-laws-weight-and-equilibrium-in-one-dimension/).

## Scope at a glance

| Ref | What the specification asks | Stage |
|---|---|---|
| 3.01a | Use the fundamental quantities and units of the S.I. system: length (metres), time (seconds), mass (kilograms); understand that these three base quantities are mutually independent | Stage 1 |
| 3.01b | Use derived quantities and units: velocity (m/s or m s⁻¹), acceleration (m/s² or m s⁻²), force (N), weight (N); add the appropriate unit to a given quantity | Stage 1 |
| 3.01c | Use the unit for moment (N m) | Stage 2, A Level only |

## The three base quantities (3.01a)

In H240 mechanics every quantity is built from three base quantities:

| Base quantity | S.I. unit | Symbol |
|---|---|---|
| Length | metre | m |
| Time | second | s |
| Mass | kilogram | kg |

**Mutually independent** means that none of the three can be written in terms of the other two. A metre cannot be made out of seconds and kilograms, and so on. This matters for two reasons.

1. Every other unit in the course is a product of powers of m, s and kg, and only in one way. The newton, for example, is exactly kg m s⁻².
2. Because the base units are independent, the two sides of a correct equation must match in each of m, s and kg separately. That gives a quick check on any formula you write down or derive (see the section on unit checks below).

Notice that the base unit of mass is the kilogram, not the gram, even though "kilo" is a prefix. Masses given in grams or tonnes must be converted to kilograms before they go into a force calculation: 1 tonne = 1000 kg and 1 g = 0.001 kg.

## Derived quantities and units (3.01b and 3.01c)

A derived quantity is defined by an equation linking base quantities, and its unit comes from that equation.

| Quantity | Defined from | Unit | In base units |
|---|---|---|---|
| Velocity | displacement ÷ time | m s⁻¹ | m s⁻¹ |
| Acceleration | change in velocity ÷ time | m s⁻² | m s⁻² |
| Force | F = ma | newton, N | kg m s⁻² |
| Weight | W = mg | N | kg m s⁻² |
| Moment (A Level only) | force × perpendicular distance | N m | kg m² s⁻² |

The specification accepts both forms of notation: m/s and m s⁻¹ mean the same thing, as do m/s² and m s⁻². Use one form consistently within an answer.

**The newton.** One newton is the resultant force that gives a mass of 1 kg an acceleration of 1 m s⁻². From F = ma, the unit is kg × m s⁻² = kg m s⁻².

**Weight is a force.** Weight is the force of gravity on a body, W = mg, so it is measured in newtons, never in kilograms. In everyday speech "it weighs 5 kg" gives the mass; in a mechanics answer the weight of that body is 5 × 9.8 = 49 N. The specification allows g to be taken as a constant 9.8 m s⁻², while noting that g is not a universal constant: it depends on location. If a question gives a different value, such as g = 1.6 m s⁻² for a body on the Moon, use the value given.

**Moment (A Level only).** The moment of a force about a point is the force multiplied by the perpendicular distance from the point to its line of action. Newtons times metres gives N m. Write the unit as N m, with a space or a dot between the symbols, so that it cannot be misread as mN (millinewtons).

## Adding the appropriate unit to a given quantity

The specification says learners should be able to add the appropriate unit to a given quantity. In practice this means two things.

- When a question gives values without units in the working ("a particle of mass 3 kg has acceleration 2.5 m s⁻²"), your final answer still needs one: the resultant force is 7.5 **N**.
- When a question asks "state the units of k" for a constant in a model, work out the unit from the equation. If a resistance force is modelled as R = kv, then k = R/v has unit N ÷ m s⁻¹ = N s m⁻¹, which is kg s⁻¹ in base units.

## Converting units before you calculate

Mechanics formulae only give S.I. answers when every input is in S.I. units. Convert first, then substitute.

| From | To | Rule |
|---|---|---|
| km h⁻¹ | m s⁻¹ | divide by 3.6 (1000 m ÷ 3600 s) |
| cm, mm | m | divide by 100, by 1000 |
| minutes, hours | s | multiply by 60, by 3600 |
| g, tonnes | kg | divide by 1000, multiply by 1000 |
| cm s⁻² | m s⁻² | divide by 100 |

### Worked example 1: a conversion chain

A car of mass 1.2 tonnes speeds up uniformly from 18 km h⁻¹ to 54 km h⁻¹ in 8 s. Find its acceleration and the resultant force on it.

```
mass      : 1.2 tonnes = 1200 kg
speeds    : 18 ÷ 3.6 = 5 m s⁻¹      54 ÷ 3.6 = 15 m s⁻¹
a         = (15 − 5) ÷ 8 = 1.25 m s⁻²
F = ma    = 1200 × 1.25 = 1500 N
```

The acceleration is 1.25 m s⁻² and the resultant force is 1500 N. Substituting 18 and 54 directly would give a = 4.5, which is in km h⁻¹ per second, a mixed unit that cannot go into F = ma.

### Worked example 2: weight from a mass in grams

Find the weight of a 450 g bag of flour, using g = 9.8 m s⁻².

```
m = 450 g = 0.45 kg
W = mg = 0.45 × 9.8 = 4.41 N
```

### Worked example 3: a moment with a distance in centimetres (A Level only)

A force of 20 N acts at right angles to a rod at a point 40 cm from a hinge. Its moment about the hinge is 20 × 0.40 = **8 N m**. Using 40 instead of 0.40 gives 800, which would be in N cm.

## Checking an equation with units

Because m, s and kg are independent, every term added or equated in a valid formula must have the same unit. This catches many slips in derivations and in remembered formulae.

### Worked example 4: testing two formulae

A student writes two expressions for the distance d needed to stop from speed v with constant deceleration a. Test each.

```
d = v² ÷ (2a) : (m s⁻¹)² ÷ (m s⁻²) = m² s⁻² ÷ m s⁻² = m      consistent
d = v ÷ (2a)  : (m s⁻¹) ÷ (m s⁻²)  = s                      not a length
```

The second must be wrong. The first passes the check. The check does not prove it right, because numbers such as 2 or ½ have no unit and a wrong numerical factor would still pass.

### Worked example 5: a model with a constant

The period T of a simple pendulum of length l is modelled as T = 2π√(l/g). Show the units are consistent.

l/g has unit m ÷ m s⁻² = s², and √(s²) = s, which is the unit of time. 2π is a pure number, so it does not affect the check.

## Accuracy and the value of g

Follow the instructions on the front of the paper about accuracy; OCR papers normally ask for non-exact answers to 3 significant figures unless a question says otherwise. Keep full calculator values during working and round only at the end. If you round the speed 13.888... m s⁻¹ (50 km h⁻¹) to 13.9 too early and then square it, the error grows. When g = 9.8 is used, an answer more precise than 3 significant figures is not meaningful.

## Common mistakes

- Giving weight in kilograms, or writing a mass in newtons.
- Substituting km h⁻¹, grams or centimetres straight into a formula.
- Leaving the unit off a final answer, or giving the unit of a different quantity (m s⁻¹ for an acceleration).
- Writing mN or Nm with no space for a moment, which can be misread.
- Squaring a unit's number but not its prefix: 1 cm² = 0.0001 m², not 0.01 m².
- Treating a unit check as proof that a formula is correct, when it cannot detect a missing numerical factor.

## Exam technique

- **State** the unit: one word or symbol is enough, but it must be the S.I. unit unless the question asks otherwise.
- **Find** or **Calculate**: show the conversion as its own line so a method mark can be given even if a later step slips.
- **Show that** an expression has a given unit: write the units of each factor, combine them step by step and end on the required unit.
- **Write down** the base units of a quantity: give them in m, s and kg only, with negative powers, such as kg m s⁻².

## Official syllabus

*OCR Level 3 Advanced GCE in Mathematics A (H240)* specification, Version 3.1 (August 2026), for first assessment in 2018, published by OCR: section 3.01, Quantities and Units in Mechanics, references 3.01a and 3.01b (Stage 1) and 3.01c (Stage 2), with the value of g as stated under reference 3.03g.
