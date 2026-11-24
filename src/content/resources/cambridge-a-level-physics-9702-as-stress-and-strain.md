---
title: "Cambridge AS & A Level Physics (9702): Stress and strain"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Deformation of solids"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 6.1
syllabusTopics:
  - qualification: "a-level"
    topic: "as-deformation-of-solids"
    subtopic: "as-stress-and-strain"
description: "Subtopic 6.1 of Cambridge AS Physics 9702 in depth: Hooke's law, the spring constant, stress, strain, the Young modulus and its wire experiment."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into **6.1 Stress and strain**, the first subtopic of AS
Topic 6, Deformation of solids, in Cambridge International AS & A Level Physics
9702 (2025–2027 series). The topic as a whole is covered in the
[Deformation of Solids study guide](/resources/as-physics-deformation-of-solids/);
here the focus is on calculation technique, compression as well as tension,
proportional reasoning and the analysis of the Young modulus experiment,
including its uncertainties. For quick recall, use the
[stress and strain revision notes](/resources/cambridge-a-level-physics-9702-as-stress-and-strain-revision-notes/),
and practise with the [stress and strain practice questions](/resources/cambridge-a-level-physics-9702-as-stress-and-strain-practice/).

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL PHYSICS 9702 — AS Level, 6.1 Stress and strain**

Candidates should be able to:

- understand that deformation is caused by tensile or compressive forces
(forces and deformations are assumed to be in one dimension only)
- understand and use the terms load, extension, compression and limit of
proportionality
- recall and use Hooke's law, and the formula for the spring constant k = F/x
- define and use the terms stress, strain and the Young modulus
- describe an experiment to determine the Young modulus of a metal in the form
of a wire

## Tension, compression and the vocabulary

A **tensile** force stretches an object; a **compressive** force squashes it.
In this subtopic both act along one line, so a deformation is simply a change
in length.

- **Load**: the force applied to the object (often a weight hung from it).
- **Extension**: the increase in length, new length − original length.
- **Compression**: the decrease in length, original length − new length.
- **Limit of proportionality**: the point beyond which force is no longer
proportional to extension.

Extension is a *change* in length. If a 0.400 m spring becomes 0.436 m long,
the extension is 0.036 m, not 0.436 m.

## Hooke's law and the spring constant

**Hooke's law**: the extension of an object is directly proportional to the
force applied, provided the limit of proportionality is not exceeded.

```
F = k x        k = F / x        unit of k: N m^-1
```

On a force–extension graph, k is the **gradient of the straight-line
section**. A stiffer spring has a steeper line. The spring constant belongs to
the *object*: cut a spring in half and each half has a different k from the
original, even though the metal is the same.

**Worked example.** A spring extends by 24 mm when a 6.0 N load is hung from
it. k = F/x = 6.0 ÷ 0.024 = **250 N m⁻¹**. Converting millimetres to metres
first is essential.

## Stress, strain and the Young modulus

To compare *materials* rather than individual objects, the dimensions must be
removed:

```
stress  sigma = F / A        Pa (N m^-2)    A = cross-sectional area
strain  epsilon = x / L      no unit         L = original length
Young modulus  E = stress / strain = F L / (A x)     Pa
```

The **Young modulus** is the ratio of stress to strain while the material
obeys Hooke's law. It is a property of the material: a thick and a thin wire
of the same steel have the same Young modulus, but different spring constants.
Rearranging gives the extension directly:

```
x = F L / (A E)
```

So, for a fixed load and material, extension is proportional to length and
inversely proportional to cross-sectional area (and therefore to diameter
squared).

**Worked example — tension.** A steel wire is 3.0 m long and 0.80 mm in
diameter. It supports a load of 120 N. The Young modulus of steel is
2.0 × 10¹¹ Pa. Find the extension.

```
A = pi r^2 = pi (0.40 x 10^-3)^2 = 5.03 x 10^-7 m^2     (radius, in metres)
stress = F / A = 120 / 5.03 x 10^-7 = 2.39 x 10^8 Pa
strain = stress / E = 2.39 x 10^8 / 2.0 x 10^11 = 1.19 x 10^-3
x = strain x L = 1.19 x 10^-3 x 3.0 = 3.6 x 10^-3 m  (3.6 mm)
```

**Worked example — compression.** A brass rod 0.50 m long, of cross-sectional
area 2.0 × 10⁻⁴ m², supports a compressive load of 8.0 kN. Taking the Young
modulus of brass as 1.0 × 10¹¹ Pa and assuming Hooke's law applies in
compression:

```
stress = 8000 / 2.0 x 10^-4 = 4.0 x 10^7 Pa
strain = 4.0 x 10^7 / 1.0 x 10^11 = 4.0 x 10^-4
compression = 4.0 x 10^-4 x 0.50 = 2.0 x 10^-4 m  (0.20 mm)
```

**Proportional reasoning.** Two wires of the same metal carry the same load.
Wire Q is twice as long and has twice the diameter of wire P. Since x ∝ L/d²,
the extension of Q is 2/2² = ½ that of P. No numbers are needed.

## Describing the Young modulus experiment

"Describe an experiment" questions reward a sequence a reader could follow.
A complete answer covers:

1. **Set-up.** A long, thin wire of the metal is clamped at one end and passes
over a pulley, or hangs vertically beside an identical reference wire, with a
marker or vernier scale to show changes in length.
2. **Original length L.** Measured from the clamp to the marker with a metre
rule or tape measure.
3. **Diameter d.** Measured with a micrometer screw gauge at several points
along the wire and in different orientations; a mean is taken, and
A = πd²/4.
4. **Loading.** Masses are added in equal steps; for each load F = mg, the
extension x is read against the scale.
5. **Checking elastic behaviour.** Loads are removed again to confirm the wire
returns to the original reading.
6. **Analysis.** Plot F against x. The gradient of the straight section equals
F/x, so E = gradient × L/A.

Safety (eye protection in case the wire snaps, and a box or sand tray under the
masses) is good practice and is often credited.

## Uncertainty in the Young modulus

Because A = πd²/4, the percentage uncertainty in d is **doubled** in A. The
diameter is the smallest measured quantity, so it usually dominates.

**Worked example.** A student finds d = 0.50 ± 0.01 mm, L = 2.00 ± 0.005 m and
a force–extension gradient of 1.95 × 10⁴ N m⁻¹ with an uncertainty of 3%.

```
A = pi (0.25 x 10^-3)^2 = 1.96 x 10^-7 m^2
E = gradient x L / A = 1.95 x 10^4 x 2.00 / 1.96 x 10^-7 = 1.99 x 10^11 Pa

% uncertainty in d = 0.01 / 0.50 x 100 = 2%,  so in A = 4%
% uncertainty in L = 0.005 / 2.00 x 100 = 0.25%
% uncertainty in E = 4 + 0.25 + 3 = 7.25%  (about 7%)
E = (2.0 +/- 0.1) x 10^11 Pa
```

This calculation explains *why* a micrometer, rather than a ruler, is used for
the diameter, and why a long wire is chosen: a larger L gives a larger
extension, reducing its percentage uncertainty.

## Exam technique

- **State Hooke's law**: include "provided the limit of proportionality is not
exceeded".
- **Define stress / strain**: force per unit cross-sectional area;
extension per unit original length. Word definitions earn the marks.
- **Describe an experiment**: name instruments, say what is measured and how
the result is processed. Lists of apparatus alone score little.
- **Calculate**: convert mm to m and mm² to m² (1 mm² = 10⁻⁶ m²) before
substituting; use the radius, not the diameter, in πr².

## Common mistakes

- Using the new length instead of the original length in strain.
- Using the diameter in πr², which makes the area four times too large.
- Giving strain a unit, or quoting the Young modulus in N m⁻¹ (that is the
unit of k).
- Saying a thicker wire has a larger Young modulus; it has a larger spring
constant.
- Treating 1 mm² as 10⁻³ m².

## Quick revision checklist

- Tensile and compressive forces; load, extension, compression, limit of
proportionality
- Hooke's law and k = F/x as the gradient of the linear section
- Stress = F/A, strain = x/L, E = stress/strain = FL/(Ax)
- x ∝ L/d² for the same load and material
- The Young modulus experiment, its graph and its dominant uncertainty

## Frequently asked questions

**Is the Young modulus a property of the wire or of the material?**
Of the material. Changing the length or thickness of the wire changes its
spring constant, but not its Young modulus.

**Why is strain unitless?**
It is a length divided by a length, so the units cancel.

**Which graph gives the Young modulus directly?**
The gradient of a stress–strain graph in its linear region equals E. A
force–extension graph gives F/x, which must be multiplied by L/A.

## More resources on this topic

- [Deformation of Solids](/resources/as-physics-deformation-of-solids/) — the whole of Topic 6 in one guide
- [Elastic and plastic behaviour](/resources/cambridge-a-level-physics-9702-as-elastic-and-plastic-behaviour/) — subtopic 6.2, elastic limits and stored energy
- [Physical Quantities, Units and Measurement](/resources/as-physics-physical-quantities-units-and-measurement/) — combining uncertainties
- [Cambridge AS & A Level Physics hub](/boards/cambridge/a-level/physics/)

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027
series. Always check the current syllabus for your examination year.*
