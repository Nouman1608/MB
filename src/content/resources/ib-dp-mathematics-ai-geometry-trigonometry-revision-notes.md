---
title: "IB DP Mathematics: Applications and Interpretation -- Geometry and Trigonometry Strand Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessment 2021"
order: 4
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
description: "Condensed revision notes on the Geometry and trigonometry strand of IB Diploma Programme Mathematics: Applications and Interpretation -- real-world spatial problems, vectors, and technology-driven modelling -- with worked reminders and self-test questions."
author: "marlbridge-academic-team"
publishedDate: 2026-09-03
featured: false
---

Geometry and trigonometry carries 18 hours at SL and jumps to 46 at HL -- the largest proportional
SL-to-HL increase of the five strands, as the
[full syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/)
sets out. That jump is almost entirely HL-only vector work and further geometric reasoning. These
notes work through the strand's applied, technology-driven approach, alongside the
[strand revision notes for Statistics and probability](/resources/ib-dp-mathematics-ai-statistics-probability-revision-notes/)
and the [subject overview](/resources/ib-dp-mathematics-applications-and-interpretation-subject-guide/)
already on the site.

## What makes this strand distinctive in Applications and Interpretation

Unlike Analysis and Approaches' more abstract, proof-oriented treatment of the same strand name, this
course frames geometry and trigonometry around **real-world spatial problems** -- navigation, design,
and physical measurement contexts -- and every external paper allows technology throughout, so
questions routinely expect a graphical display calculator to be used, not avoided.

## Core content

- **Geometry** -- properties of shapes in two and three dimensions, surface area and volume of
  compound solids, and geometric reasoning applied to real contexts such as construction or design.
- **Trigonometry** -- right-angled and non-right-angled triangle trigonometry (sine rule, cosine rule,
  area of a triangle formula), angles of elevation and depression, and bearings -- the classic
  navigation-style application this course favours.
- **Vectors (HL only)** -- position and displacement vectors, the vector equation of a line, and
  applications to problems of motion and intersection, extended further than the SL treatment.
- **Further geometric reasoning (HL only)** -- additional depth building on the SL geometry content,
  reflecting the strand's large HL hour allocation.

## Worked example: bearings and the cosine rule

A ship sails from port A on a bearing of $070°$ for 40 km to point B, then changes course to a bearing
of $150°$ and sails a further 25 km to point C. Find the distance AC.

This is a two-sides-and-the-included-angle (SAS) setup, so the cosine rule applies -- not the sine
rule, per the table above.

```
Back-bearing
at B:            the bearing from B back to A is the bearing A-to-B
                 (070 deg) plus 180 deg, i.e. 250 deg -- this is the
                 step most students lose marks on, since it must be
                 found before the interior angle can be
Angle at B:      interior angle ABC = back-bearing (250 deg) minus the
                 onward bearing (150 deg) = 100 deg
Apply cosine
rule:            AC^2 = AB^2 + BC^2 - 2(AB)(BC)cos(angle ABC)
Substitute:      AC^2 = 40^2 + 25^2 - 2(40)(25)cos(100 deg)
                 Because angle ABC = 100 deg is obtuse, cos(100 deg) is
                 NEGATIVE (approx -0.1736), which makes the whole
                 "-2(40)(25)cos(100 deg)" term ADDITIVE, not
                 subtractive:
                 AC^2 = 1600 + 625 - 2000(-0.1736) = 2225 + 347.3 = 2572.3
Solve:           AC = sqrt(2572.3) = 50.7 km (3 sig figs)
```

The mathematics (cosine rule) is routine once the angle is correctly identified -- the applied skill
this course specifically tests is converting bearings into an interior angle correctly, which is why
bearings problems reward a clear diagram before any calculation begins. A student who mis-derives the
angle as 80° instead of 100° (by forgetting the back-bearing step) would get AC = 43.3 km instead --
exactly the kind of error this worked example is designed to defuse.

## Sine rule vs cosine rule -- which to use

| Given | Use |
|---|---|
| Two sides and the angle between them (SAS), or three sides (SSS) | Cosine rule |
| Two angles and a side, or two sides and a non-included angle | Sine rule |

Always sketch the triangle first and label knowns before choosing a rule -- misapplying the sine rule
to an SAS triangle is one of the most common technique errors in this strand.

## Surface area and volume of compound solids

Because this course frames geometry around real-world design and construction contexts, questions
frequently present a **compound solid** — for example a cylinder topped with a hemisphere, or a
pyramid combined with a cuboid — rather than a single standard shape. The reliable method is to
split the compound solid into its recognisable component shapes, calculate each one's surface area
or volume separately using the standard formulae, then add or subtract components as the shape
requires (subtracting, for instance, where one solid has a cavity removed from another). Sketching
the solid and labelling which faces are "internal" (and therefore excluded from a surface area total)
before calculating is the single most effective way to avoid the most common error in this content:
including or excluding the wrong faces from a compound surface area.

## Exam traps

- Converting a bearing into an interior triangle angle incorrectly, especially when the bearing at the
  vertex is a "reverse" bearing (add or subtract 180°) rather than the forward one.
- Choosing the sine rule for an SAS or SSS triangle where the cosine rule is required.
- Forgetting that HL vector questions on lines and intersection require setting the parametric forms
  of two lines equal and solving simultaneously, not just comparing direction vectors alone.
- Not using the graphical display calculator to sanity-check an answer, when every paper in this
  course permits technology throughout.

## Quick revision checklist

- Practise converting a bearing into an interior triangle angle correctly before attempting the
  cosine or sine rule calculation.
- Memorise which rule (sine or cosine) applies to SAS, SSS, ASA and SSA triangle information.
- Split at least three different compound-solid shapes into components and practise both surface area
  and volume calculations for each.
- For HL vectors, practise setting two lines' parametric equations equal to test for intersection.

## Self-test

1. Which rule should be used when given two sides and the included angle?
2. What is the first practical step recommended for any bearings problem?
3. Which parts of this strand are HL-only?
4. How does this strand's framing differ from Analysis and Approaches' treatment of the same strand
   name?
5. Why is checking with a graphical display calculator especially relevant in this course?

**Answers:** 1. The cosine rule (SAS). 2. Sketching the triangle and clearly labelling the known
sides, angles and bearings before starting any calculation. 3. Vectors, and further geometric
reasoning beyond the SL content. 4. Applications and Interpretation frames geometry and trigonometry
around real-world spatial problems (navigation, design) with heavy technology use, whereas Analysis
and Approaches treats the same strand more abstractly with less emphasis on applied context. 5.
Because every external paper in this course allows technology throughout, so using the calculator to
verify an algebraic or trigonometric answer is both permitted and expected, unlike Analysis and
Approaches' no-technology Paper 1.
