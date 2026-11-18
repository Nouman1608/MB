---
title: "Cambridge A Level Physics (9702): Electric force between point charges"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Electric fields"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 18.3
syllabusTopics:
  - qualification: "a-level"
    topic: "a-electric-fields"
    subtopic: "a-electric-force-between-point-charges"
description: "Cambridge A Level Physics 9702 subtopic 18.3: Coulomb's law, charged spheres as point charges, charge sharing and adding forces as vectors."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **18.3 Electric force between point charges** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Electric Fields study guide](/resources/a-physics-electric-fields/) states Coulomb's law within the whole of Topic 18; this page goes further: when a charged sphere can be treated as a point, how the force scales, how to combine forces from several charges, and how electric forces compare with gravitational ones. For quick recall use the [Electric force between point charges revision notes](/resources/cambridge-a-level-physics-9702-a-electric-force-between-point-charges-revision-notes/), and for exam-style questions the [Electric force between point charges practice questions](/resources/cambridge-a-level-physics-9702-a-electric-force-between-point-charges-practice/).

## What 18.3 asks you to do

Candidates should be able to:

- understand that, for a point **outside a spherical conductor**, the charge on the sphere may be considered to be a **point charge at its centre**
- **recall and use Coulomb's law** F = Q₁Q₂/(4πε₀r²) for the force between two point charges in free space

Coulomb's law is not on the data sheet; the value of ε₀ (and of 1/4πε₀ = 8.99 × 10⁹ m F⁻¹) is.

## Coulomb's law

> The electric force between two point charges is proportional to the product of the charges and inversely proportional to the square of their separation.

```
F = Q₁Q₂ / (4πε₀r²)
ε₀ = 8.85 × 10⁻¹² F m⁻¹ (permittivity of free space)
1/(4πε₀) = 8.99 × 10⁹ m F⁻¹ (equivalently N m² C⁻²)
```

Points to notice:

- **"In free space"**: the law as written applies in a vacuum. In air the force is almost identical, so air is treated as free space.
- The force acts **along the line joining the charges**, and the two charges feel **equal and opposite** forces (Newton's third law), even if one charge is much larger.
- **Sign:** if Q₁Q₂ is positive (like charges), the force is **repulsive**; if negative (unlike charges), it is **attractive**. Many students find it cleaner to calculate the magnitude with positive values and state the direction in words.

### How the force scales

| Change | Effect on F |
|---|---|
| One charge doubled | × 2 |
| Both charges doubled | × 4 |
| Separation doubled | × ¼ |
| Separation tripled, one charge doubled | × 2/9 |
| Separation halved | × 4 |

## Spheres as point charges

On a charged conducting sphere, the charge sits on the surface and, for an isolated sphere, spreads out uniformly. By symmetry, the field outside it is exactly the same as if all the charge were concentrated at the centre. So for points **outside** the sphere, Coulomb's law applies with **r measured from the centre**.

Two practical consequences:

- For two charged spheres, use the **centre-to-centre** distance, never the gap between their surfaces.
- When two conducting spheres are brought very close, their charges attract or repel each other across the gap and redistribute, so the distribution is no longer uniform. The point-charge treatment then becomes only an approximation, which is why the syllabus says the charge "may be considered" to be at the centre.

### Charge sharing between identical spheres

If two identical conducting spheres touch, charge flows until they share the total equally. Charge is conserved, so each ends up with half the algebraic sum. This often appears with Coulomb's law: the force before and after contact can be very different, and can even change from attraction to repulsion.

## Forces from several charges

Each pair of charges obeys Coulomb's law independently, and the forces on a charge add as **vectors**:

- **On a straight line:** choose a positive direction, find each magnitude, assign a sign from attraction or repulsion, and add.
- **At right angles:** find each magnitude and combine with Pythagoras; find the angle with tan⁻¹.
- **Zero-force point:** for two like charges, there is a point between them where a third charge feels no force. It is closer to the smaller charge.

## Electric and gravitational forces compared

| | Electric (Coulomb) | Gravitational (Newton) |
|---|---|---|
| Acts between | Charges | Masses |
| Dependence on distance | 1/r² | 1/r² |
| Direction | Attractive or repulsive | Always attractive |
| Constant | 1/(4πε₀) = 8.99 × 10⁹ | G = 6.67 × 10⁻¹¹ |

Both are inverse-square laws, so their ratio for a given pair of particles does not depend on separation.

## Worked example 1: before and after contact

Two identical small conducting spheres carry +6.0 nC and −2.0 nC. Their centres are 5.0 cm apart. They are touched together and returned to the same positions. Find the force after contact.

```
after contact each charge = (+6.0 + (−2.0)) / 2 = +2.0 nC
F = Q₁Q₂ / (4πε₀r²) = 8.99 × 10⁹ × (2.0 × 10⁻⁹)² / (0.050)²
F = 1.4 × 10⁻⁵ N, repulsive
```

*Annotation.* Before contact the force was attractive and three times larger (8.99 × 10⁹ × 6.0 × 10⁻⁹ × 2.0 × 10⁻⁹ ÷ 0.050² = 4.3 × 10⁻⁵ N). Sharing uses the algebraic sum, so signs matter.

## Worked example 2: three charges in a line

Charges of +4.0 nC, +2.0 nC and −6.0 nC are placed on a straight line at x = 0, x = 0.10 m and x = 0.25 m. Find the resultant force on the +2.0 nC charge.

```
from +4.0 nC (0.10 m away, repulsive, pushes in +x):
F = 8.99 × 10⁹ × 4.0 × 10⁻⁹ × 2.0 × 10⁻⁹ / 0.10² = 7.2 × 10⁻⁶ N
from −6.0 nC (0.15 m away, attractive, pulls in +x):
F = 8.99 × 10⁹ × 6.0 × 10⁻⁹ × 2.0 × 10⁻⁹ / 0.15² = 4.8 × 10⁻⁶ N
resultant = 7.2 × 10⁻⁶ + 4.8 × 10⁻⁶ = 1.2 × 10⁻⁵ N in the +x direction
```

*Annotation.* Decide each direction from the physics before adding. Here both forces point the same way, even though one charge is positive and the other negative.

## Worked example 3: the hydrogen atom

In a simple model of hydrogen, an electron is 5.3 × 10⁻¹¹ m from a proton. Compare the electric and gravitational forces between them.

```
F_E = 8.99 × 10⁹ × (1.60 × 10⁻¹⁹)² / (5.3 × 10⁻¹¹)² = 8.2 × 10⁻⁸ N
F_G = 6.67 × 10⁻¹¹ × 9.11 × 10⁻³¹ × 1.67 × 10⁻²⁷ / (5.3 × 10⁻¹¹)² = 3.6 × 10⁻⁴⁷ N
F_E / F_G ≈ 2 × 10³⁹
```

*Annotation.* Gravity is utterly negligible between charged particles. It dominates on astronomical scales only because large bodies are almost exactly electrically neutral.

## Common mistakes

- **Using the surface-to-surface gap** for spheres instead of the centre-to-centre distance.
- **Forgetting to square r**, or squaring only part of it.
- **Leaving nC or μC unconverted**: n = 10⁻⁹, μ = 10⁻⁶.
- **Adding forces as scalars** when they act in different directions.
- **Thinking the larger charge feels the larger force.** The forces on the two charges are equal and opposite.
- **Sharing charge by magnitude** instead of algebraic sum after contact.

## Exam technique for the command words

- **State** (Coulomb's law): proportional to the product of the charges, inversely proportional to the square of the separation, for point charges.
- **Calculate**: convert prefixes, square r, give the magnitude, then state "attractive" or "repulsive".
- **Explain** (why a sphere can be treated as a point charge): charge spread uniformly over the surface; by symmetry the field outside is as if the charge were at the centre; only for points outside the sphere.
- **Compare** (with gravitation): give one similarity (inverse square) and one difference (gravity only attracts), or a numerical ratio.
- **Determine** (a zero-force point): set the two force expressions equal and solve, taking square roots of both sides.

## Related resources

- [Electric Fields study guide](/resources/a-physics-electric-fields/) — the whole of Topic 18
- [Electric force between point charges revision notes](/resources/cambridge-a-level-physics-9702-a-electric-force-between-point-charges-revision-notes/)
- [Electric force between point charges practice questions](/resources/cambridge-a-level-physics-9702-a-electric-force-between-point-charges-practice/)
- [Electric field of a point charge study guide](/resources/cambridge-a-level-physics-9702-a-electric-field-of-a-point-charge/) — the next subtopic

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
