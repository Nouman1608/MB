---
title: "Cambridge A Level Physics (9702): SI units"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Physical quantities and units"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 1.2
syllabusTopics:
  - qualification: "a-level"
    topic: "as-physical-quantities-and-units"
    subtopic: "as-si-units"
description: "Subtopic 1.2 of Cambridge AS Physics 9702 in depth: base quantities, derived units in base units, homogeneity checks, finding units of constants, and prefixes."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **1.2 SI units** of Cambridge International AS & A Level Physics 9702, 2025–2027 series. The [Physical Quantities, Units and Measurement study guide](/resources/as-physics-physical-quantities-units-and-measurement/) lists the base units and prefixes for the whole of Topic 1; this page goes further, building the base-unit form of the derived units you meet later in the course, finding the unit of an unknown constant, and showing what a homogeneity check can and cannot prove. For quick recall use the [SI units revision notes](/resources/cambridge-a-level-physics-9702-as-si-units-revision-notes/), and for exam-style questions the [SI units practice questions](/resources/cambridge-a-level-physics-9702-as-si-units-practice/).

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL PHYSICS 9702 — AS Level, Topic 1.2**

Candidates should be able to:

1. recall the following SI base quantities and their units: mass (kg), length (m), time (s), current (A), temperature (K);
2. express derived units as products or quotients of the SI base units and use the derived units for quantities listed in this syllabus as appropriate;
3. use SI base units to check the homogeneity of physical equations;
4. recall and use the prefixes pico (p), nano (n), micro (μ), milli (m), centi (c), deci (d), kilo (k), mega (M), giga (G) and tera (T).

Amount of substance, with base unit the mole, is also an SI base quantity, but the syllabus introduces it in Topic 15 (Ideal gases) rather than here.

## Two details about the base units

- The **kilogram** is the only base unit that already carries a prefix. A mass of 350 g is 0.350 kg; the gram is not a base unit.
- **Temperature** has the base unit kelvin. The degree Celsius is used for Celsius temperature, but it is not an SI base unit, so a homogeneity check uses K.

## Building derived units from base units

Every derived unit comes from a defining equation. Write the equation, replace each quantity by its base units, and simplify. Learn the method, not a list: any derived unit can be rebuilt in under a minute.

| Quantity | Defining equation | Base units |
|---|---|---|
| Momentum | p = mv | kg m s⁻¹ |
| Force (newton) | F = ma | kg m s⁻² |
| Pressure (pascal) | p = F/A | kg m s⁻² ÷ m² = kg m⁻¹ s⁻² |
| Energy (joule) | W = Fs | kg m² s⁻² |
| Power (watt) | P = W/t | kg m² s⁻³ |
| Charge (coulomb) | Q = It | A s |
| Potential difference (volt) | V = P/I | kg m² s⁻³ A⁻¹ |
| Resistance (ohm) | R = V/I | kg m² s⁻³ A⁻² |
| Spring constant | k = F/x | kg s⁻² |
| Density | ρ = m/V | kg m⁻³ |

Notice the chain: each line uses a unit worked out in a line above. The volt, for example, is a watt per ampere, so it inherits the kg m² s⁻³ of the watt and gains A⁻¹.

### Worked example 1: the volt from the definition of p.d.

The volt can also be found from V = W/Q (energy per unit charge):

```
[W] = kg m^2 s^-2      [Q] = A s
[V] = kg m^2 s^-2 / (A s) = kg m^2 s^-3 A^-1
```

The same result as from V = P/I, as it must be. Getting the same base units by two routes is a good self-check in an exam.

## Checking homogeneity

An equation is **homogeneous** when every term has the same base units. A physically correct equation must be homogeneous, so a non-homogeneous equation is certainly wrong.

### Worked example 2: is Δp = ρgΔh homogeneous?

```
left:   [p] = kg m^-1 s^-2
right:  [rho][g][h] = kg m^-3 x m s^-2 x m = kg m^-1 s^-2
```

Both sides match, so the equation is homogeneous.

### Worked example 3: a wrong equation exposed

A student writes v = u + at² for uniform acceleration.

```
[v] = m s^-1      [u] = m s^-1      [a t^2] = m s^-2 x s^2 = m
```

The third term has units of metres, not m s⁻¹. Terms that are added or subtracted must have identical units, so the equation is not homogeneous and is wrong.

### What homogeneity cannot tell you

A homogeneous equation may still be wrong, because base units ignore pure numbers. s = ut + at² is homogeneous (every term is in metres) but wrong: the correct equation has ½ in front of at². Homogeneity cannot detect a missing or wrong numerical factor, a missing dimensionless term, or a wrong sign. In a "show that an equation is homogeneous" question, add a sentence saying this if you are asked what the check proves.

## Finding the unit of an unknown constant

Rearrange the equation to make the constant the subject, then substitute base units.

### Worked example 4: a drag constant

A simple model of air resistance is F = kv², where F is the drag force and v the speed.

```
k = F / v^2
[k] = kg m s^-2 / (m s^-1)^2 = kg m s^-2 / (m^2 s^-2) = kg m^-1
```

If the drag on a cyclist is 12 N at 20 m s⁻¹, then k = 12 ÷ 20² = 0.030 kg m⁻¹. The unit is part of the answer.

## Prefixes in practice

The ten prefixes run from pico (10⁻¹²) to tera (10¹²). Three habits prevent most errors:

1. **Replace the prefix by its power of ten before substituting.** 4.7 kΩ becomes 4.7 × 10³ Ω; 220 pF becomes 220 × 10⁻¹² F = 2.2 × 10⁻¹⁰ F.
2. **Raise the prefix to the same power as the unit.** 0.25 mm² = 0.25 × (10⁻³ m)² = 2.5 × 10⁻⁷ m². 5.0 μm² = 5.0 × 10⁻¹² m².
3. **Convert each unit in a compound unit separately.** 2.7 g cm⁻³ = 2.7 × 10⁻³ kg ÷ 10⁻⁶ m³ = 2700 kg m⁻³.

Watch the symbols: m is milli as a prefix but metre as a unit, so "mm" is millimetre and "m s" is metre second. M (mega) and m (milli) differ by a factor of 10⁹.

## Common mistakes

- **Writing the gram as a base unit**, or using a mass in grams in F = ma.
- **Leaving a named unit in a base-unit answer.** "kg m² s⁻² per coulomb" is not finished: the coulomb must become A s.
- **Treating a homogeneous equation as proved correct.**
- **Squaring the number but not the prefix**, or the prefix but not the number.
- **Confusing unit symbols with quantity symbols**: the quantity "m" (mass) has the unit "kg"; the unit "m" belongs to length.

## Exam technique for the command words

- **State** the base units: one line, units only, in the order that falls out of the equation.
- **Show that** an equation is homogeneous: write the base units of each side (or each term) separately, then a concluding sentence.
- **Determine** the unit of a constant: rearrange first, substitute base units, simplify, and give the final unit.
- **Explain** why an equation may be homogeneous yet incorrect: refer to pure-number factors that base units cannot reveal.

## Frequently asked questions

**How many SI base quantities does Cambridge 9702 use?**
Topic 1.2 lists five: mass, length, time, current and temperature. Amount of substance (mol) is added in Topic 15.

**Can a homogeneous equation be wrong?**
Yes. Homogeneity only checks units, so a missing factor such as ½, or a wrong sign, is not detected.

**Is the newton a base unit?**
No. The newton is a derived unit, equal to kg m s⁻².

## Related resources

- [SI units revision notes](/resources/cambridge-a-level-physics-9702-as-si-units-revision-notes/)
- [SI units practice questions](/resources/cambridge-a-level-physics-9702-as-si-units-practice/)
- [Physical quantities study guide](/resources/cambridge-a-level-physics-9702-as-physical-quantities/) — the previous subtopic
- [Errors and uncertainties study guide](/resources/cambridge-a-level-physics-9702-as-errors-and-uncertainties/) — the next subtopic

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
