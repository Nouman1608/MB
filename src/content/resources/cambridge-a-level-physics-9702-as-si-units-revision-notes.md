---
title: "Cambridge A Level Physics (9702): SI units -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed recall for Cambridge AS Physics 9702 subtopic 1.2: five base units, derived units in base form, homogeneity, units of constants, prefixes and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed for the final weeks. For the full method and worked examples, use the [SI units study guide](/resources/cambridge-a-level-physics-9702-as-si-units/); for exam-style questions, the [SI units practice questions](/resources/cambridge-a-level-physics-9702-as-si-units-practice/). These notes cover subtopic **1.2 SI units** of Cambridge International AS & A Level Physics 9702, 2025–2027 series.

## The five base quantities (recall exactly)

| Base quantity | Unit | Symbol |
|---|---|---|
| Mass | kilogram | kg |
| Length | metre | m |
| Time | second | s |
| Current | ampere | A |
| Temperature | kelvin | K |

The mole (amount of substance) is added in Topic 15. The kilogram is the only base unit with a prefix built in. °C is not a base unit.

## Derived units: the method

1. Write a defining equation for the quantity.
2. Replace every quantity on the right by its base units.
3. Collect powers of kg, m, s, A and K.

## Derived units to be able to rebuild

| Unit | From | Base units |
|---|---|---|
| N | F = ma | kg m s⁻² |
| Pa | p = F/A | kg m⁻¹ s⁻² |
| J | W = Fs | kg m² s⁻² |
| W | P = W/t | kg m² s⁻³ |
| C | Q = It | A s |
| V | V = W/Q | kg m² s⁻³ A⁻¹ |
| Ω | R = V/I | kg m² s⁻³ A⁻² |
| Hz | f = 1/T | s⁻¹ |
| N s (momentum or impulse) | p = mv | kg m s⁻¹ |
| N m⁻¹ (spring constant) | k = F/x | kg s⁻² |

**Two routes, one answer:** V = W/Q and V = P/I both give kg m² s⁻³ A⁻¹. Use a second route to check.

## Homogeneity

- **Homogeneous**: every term (each side, and each added or subtracted term) has the same base units.
- **Non-homogeneous ⇒ definitely wrong.**
- **Homogeneous ⇒ possibly right.** Base units cannot detect pure-number factors (½, 2π), dimensionless terms or signs.

**Quick checks to remember:**

| Equation | Verdict |
|---|---|
| E = ½mv² | kg m² s⁻² both sides: homogeneous |
| P = Fv | kg m² s⁻³ both sides: homogeneous |
| p = ρgh | kg m⁻¹ s⁻² both sides: homogeneous |
| v² = u² + 2as² | 2as² has m³ s⁻²: not homogeneous |
| s = ut + at² | homogeneous but wrong (½ missing) |

## Unit of an unknown constant

Make the constant the subject, then substitute.

- F = kv² → k = F/v² → **kg m⁻¹**
- F = bv (a linear drag model) → b = F/v → **kg s⁻¹**
- E = cT (energy proportional to temperature, for some constant c) → c = E/T → **kg m² s⁻² K⁻¹**

## Prefixes

| Prefix | Symbol | Factor | Prefix | Symbol | Factor |
|---|---|---|---|---|---|
| pico | p | 10⁻¹² | deci | d | 10⁻¹ |
| nano | n | 10⁻⁹ | kilo | k | 10³ |
| micro | μ | 10⁻⁶ | mega | M | 10⁶ |
| milli | m | 10⁻³ | giga | G | 10⁹ |
| centi | c | 10⁻² | tera | T | 10¹² |

- Prefix powers follow the unit's power: 1 mm³ = 10⁻⁹ m³; 1 cm² = 10⁻⁴ m².
- Convert compound units piece by piece: 1 g cm⁻³ = 1000 kg m⁻³.
- M (10⁶) and m (10⁻³) differ by 10⁹.

## Key terms

| Term | Meaning |
|---|---|
| Base quantity | One of the quantities from which all others are defined; at this stage mass, length, time, current, temperature |
| Derived unit | A unit formed as a product or quotient of base units |
| Homogeneous equation | Every term has the same base units |
| Prefix | A symbol placed before a unit to multiply it by a power of ten |
| Standard form | A number written as a × 10ⁿ with 1 ≤ a < 10 |

## Exam traps

- Giving "N m" or "J" when base units are asked for.
- Using grams in F = ma or E = ½mv².
- Concluding that a homogeneous equation must be correct.
- Forgetting that every added term must match, not just the two sides.
- Writing 1 cm³ = 10⁻² m³ instead of 10⁻⁶ m³.
- Writing "Kg" or "KM": the prefix kilo is lower-case k.
- Leaving a named derived unit (C, V, Ω) inside an answer that asked for base units.

## Self-test

1. State the five SI base quantities used in Topic 1.
2. Express the pascal in base units.
3. Express the watt in base units.
4. Express the ohm in base units.
5. What is the base unit form of momentum?
6. Show that P = Fv is homogeneous.
7. Explain why v = u + at² cannot be correct.
8. Give one reason a homogeneous equation can still be wrong.
9. Find the unit of k if F = kv².
10. Convert 0.40 mm² to m².
11. Convert 13.6 g cm⁻³ to kg m⁻³.
12. Write 470 nF in farads, in standard form.

### Answers

1. Mass, length, time, current, temperature.
2. kg m⁻¹ s⁻².
3. kg m² s⁻³.
4. kg m² s⁻³ A⁻².
5. kg m s⁻¹.
6. [F][v] = kg m s⁻² × m s⁻¹ = kg m² s⁻³, which is [P].
7. The term at² has units m s⁻² × s² = m, not m s⁻¹, so the terms do not match.
8. It may have a wrong or missing numerical factor (such as ½), which has no unit.
9. kg m⁻¹.
10. 0.40 × 10⁻⁶ = 4.0 × 10⁻⁷ m².
11. 13 600 kg m⁻³.
12. 4.7 × 10⁻⁷ F.
