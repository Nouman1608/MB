---
title: "OxfordAQA A-Level Physics (9630): Electric field strength"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.8 – Electric fields and capacitance"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "A"
order: 8.2
syllabusTopics:
  - qualification: "a-level"
    topic: "electric-fields-and-capacitance"
    subtopic: "electric-field-strength-oxfordaqa"
description: "Study guide to OxfordAQA 9630 section 3.8.2: field lines, E = F/Q, E = V/d, radial fields, adding fields and charged particles crossing uniform fields."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.8.2, Electric field strength, in Section 3.8 Electric fields and capacitance (International A-level only). For a first pass through the whole of 3.8.1 and 3.8.2, use the [Coulomb's law and electric field strength study guide](/resources/oxfordaqa-a-level-physics-coulombs-law-and-electric-field-strength/). After this page, condense it with the [electric field strength revision notes](/resources/oxfordaqa-a-level-physics-9630-electric-field-strength-oxfordaqa-revision-notes/) and test yourself with the [electric field strength practice questions](/resources/oxfordaqa-a-level-physics-9630-electric-field-strength-oxfordaqa-practice/).

Data used: 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻²; e = 1.60 × 10⁻¹⁹ C; electron mass 9.11 × 10⁻³¹ kg.

## What the specification asks for

| Statement in 3.8.2 | What you must be able to do |
|---|---|
| Representation of electric fields by electric field lines | Draw and read field-line patterns |
| E as force per unit charge, E = F/Q | Define E, treat it as a vector, convert between N C⁻¹ and V m⁻¹ |
| Magnitude of E in a uniform field, E = V/d | Use it for parallel plates |
| Derivation from work done moving charge between plates, Fd = QΔV | Reproduce the derivation |
| Trajectory of a moving charged particle entering a uniform field initially at right angles | Calculate deflection, exit velocity and the p.d. needed for a given deflection |
| Magnitude of E in a radial field, E = Q/(4πε₀r²) | Use it and the inverse-square relationship |

## Field strength as a vector

E = F/Q is the force per unit positive charge. A test charge must be small enough not to disturb the charges that create the field. Because E is defined for a positive charge, its direction is the direction of the force on a positive charge; a negative charge is pushed the opposite way.

The two units are equivalent. From E = V/d, the unit is V m⁻¹. A volt is a joule per coulomb, and a joule is a newton metre, so V m⁻¹ = J C⁻¹ m⁻¹ = N m C⁻¹ m⁻¹ = **N C⁻¹**.

### Reading and drawing field lines

The pattern rules (arrows show the force on a positive charge, lines never cross, closer lines mean a stronger field) apply to every arrangement. Two arrangements go beyond a single charge or a pair of plates:

| Arrangement | What the lines do |
|---|---|
| Two equal positive charges | Lines leave both charges and bend away from each other. Midway between them no lines pass: this is a neutral point, where E = 0 |
| Equal positive and negative charges | Lines leave the positive charge and curve round to end on the negative charge. The field is strong and roughly parallel on the line between them |

Field lines always meet the surface of a conductor at right angles. Near the edges of parallel plates the lines bow outwards, so the field there is weaker and not uniform. E = V/d applies to the central region only.

## Adding fields from more than one charge

Calculate the field from each charge as if it were alone, using E = Q/(4πε₀r²), give each a direction (away from positive, towards negative), then add as vectors.

### Worked example 1: midpoint between unlike charges

A +6.0 nC charge and a −2.0 nC charge are 0.20 m apart. Find the field strength at the midpoint.

From the +6.0 nC charge, at 0.10 m: E₁ = 8.99 × 10⁹ × 6.0 × 10⁻⁹ / 0.10² = 5.39 × 10³ N C⁻¹, pointing away from it, towards the negative charge.

From the −2.0 nC charge, at 0.10 m: E₂ = 8.99 × 10⁹ × 2.0 × 10⁻⁹ / 0.10² = 1.80 × 10³ N C⁻¹, pointing towards it.

Both point the same way, so E = 5.39 × 10³ + 1.80 × 10³ = **7.2 × 10³ N C⁻¹ towards the negative charge**.

Students often subtract here because the charges have opposite signs. Draw the arrows first; the sign of the charge decides the direction of each field, not whether you add or subtract.

### Worked example 2: a neutral point

Charges of +4.0 nC and +1.0 nC are 0.15 m apart. Between like charges the fields point in opposite directions, so there is a point where they cancel. At distance x from the 4.0 nC charge:

4.0/x² = 1.0/(0.15 − x)², so 2/x = 1/(0.15 − x), giving **x = 0.10 m**.

A small charge placed there feels no resultant force. The neutral point is nearer the smaller charge.

### Off the line

For a point not on the line through the charges, resolve each field into two perpendicular components, add the components, then use Pythagoras. For example, with +3.0 nC at the origin, −3.0 nC at 0.080 m along the x-axis and a point P at 0.060 m up the y-axis, the fields at P are 7.49 × 10³ N C⁻¹ (straight up, away from the positive charge) and 2.70 × 10³ N C⁻¹ (towards the negative charge, along the 0.10 m line). Resolving the second into 2.16 × 10³ along x and 1.62 × 10³ down, the resultant is about 6.3 × 10³ N C⁻¹ at 70° above the x-axis.

## The uniform field between plates

E = V/d holds wherever the field is uniform. The derivation: moving charge Q a distance d against force F takes work Fd; the work per unit charge is the p.d., so the work is also QΔV; with F = QE, QEd = QΔV and E = ΔV/d.

Two consequences are tested often:

- **At fixed V**, halving d doubles E. Pushing plates together while still connected to the supply strengthens the field.
- **The force on a charge is the same everywhere between the plates** (away from the edges), so its acceleration is constant. That is what makes the motion of a charged particle a projectile problem.

## A charged particle entering at right angles

Along the plates there is no force, so the velocity component v stays constant. Across the plates the force QE is constant, so the particle accelerates uniformly from zero sideways speed. With plate length L, the time between the plates is t = L/v and the sideways displacement is y = ½(QE/m)t².

Writing x for the distance along the plates, t = x/v, so y = (QE / 2mv²)x². The path is a parabola, exactly like a horizontally launched projectile, with QE/m in place of g. After leaving the plates the particle moves in a straight line.

### Worked example 3: the p.d. that just lets an electron through

An electron enters midway between two horizontal plates at 2.5 × 10⁷ m s⁻¹, parallel to them. The plates are 5.0 cm long and 1.0 cm apart. Find the largest p.d. for which the electron leaves the plates without hitting one.

The electron can move at most 0.50 cm sideways.

Time between the plates: t = 0.050 / 2.5 × 10⁷ = 2.0 × 10⁻⁹ s.

Acceleration needed: from y = ½at², a = 2y/t² = 2 × 0.0050 / (2.0 × 10⁻⁹)² = 2.5 × 10¹⁵ m s⁻².

Field needed: E = ma/e, and V = Ed, so V = mad/e = 9.11 × 10⁻³¹ × 2.5 × 10¹⁵ × 0.010 / 1.60 × 10⁻¹⁹ = **140 V** (142 V before rounding).

On leaving, the sideways speed is at = 5.0 × 10⁶ m s⁻¹, so the beam is deflected by tan⁻¹(5.0 × 10⁶ / 2.5 × 10⁷) = **11°**.

The electron's kinetic energy rises, because the field does work on it: it moves through a p.d. of E × y = (142/0.010) × 0.0050 = 71 V, gaining 71 eV. It does not gain the full plate p.d., because it crosses only half the gap.

### Checking which way it bends

A positive particle bends towards the negative plate; an electron bends towards the positive plate. For particles with the same charge and entry speed, the deflection is proportional to 1/m, so a proton is deflected about 1840 times less than an electron.

## The radial field

E = Q/(4πε₀r²) applies outside a point charge or a charged sphere, with r measured from the centre. Because E ∝ 1/r², a single measurement gives the field anywhere else:

E₂ = E₁ (r₁/r₂)²

### Worked example 4: from one measurement

The field strength 0.20 m from the centre of a charged sphere is 4.5 × 10⁴ N C⁻¹. Find the charge on the sphere and the field strength 0.50 m from the centre.

Q = E × r² / (8.99 × 10⁹) = 4.5 × 10⁴ × 0.20² / 8.99 × 10⁹ = **2.0 × 10⁻⁷ C**.

E at 0.50 m = 4.5 × 10⁴ × (0.20/0.50)² = **7.2 × 10³ N C⁻¹**.

## Uniform and radial compared

| Feature | Uniform field (plates) | Radial field (point charge) |
|---|---|---|
| Equation | E = V/d | E = Q/(4πε₀r²) |
| Field lines | Parallel, equally spaced | Radial, spreading out |
| E with position | Constant | Falls as 1/r² |
| Force on a charge | Constant | Changes with distance |

## Common mistakes

- Subtracting fields from unlike charges at a point between them, where both fields point the same way.
- Using E = V/d near the edges of plates, or for a sphere.
- Using the whole plate separation as the sideways displacement when the particle enters midway.
- Using the plate p.d. for the energy gained by a particle that does not cross the full gap.
- Treating the path between plates as circular. It is parabolic.

## Exam technique

- **Define** electric field strength: force per unit positive charge, on a small test charge, at that point.
- **Sketch** field lines: arrows on every line, lines meeting conductors at right angles, closer spacing where the field is stronger.
- **Derive**: write the three statements (W = Fd, W = QΔV, F = QE) before combining them.
- **Calculate** a trajectory: list the steps (E, F, a, t, y) and keep unrounded values between them.
- **Explain** a parabolic path: constant velocity along the plates, constant acceleration across them, as for a projectile.

## Related resources

- [Electric field strength revision notes](/resources/oxfordaqa-a-level-physics-9630-electric-field-strength-oxfordaqa-revision-notes/)
- [Electric field strength practice questions](/resources/oxfordaqa-a-level-physics-9630-electric-field-strength-oxfordaqa-practice/)
- [Coulomb's law study guide](/resources/oxfordaqa-a-level-physics-9630-coulombs-law-oxfordaqa/)
- [Electric potential study guide](/resources/oxfordaqa-a-level-physics-9630-electric-potential-oxfordaqa/)

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.8.2 Electric field strength, published by OxfordAQA. Check the board's website for the current version of the specification.
