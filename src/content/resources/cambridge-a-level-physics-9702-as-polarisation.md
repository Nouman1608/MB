---
title: "Cambridge AS & A Level Physics (9702): Polarisation"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Waves"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 7.5
syllabusTopics:
  - qualification: "a-level"
    topic: "as-waves"
    subtopic: "as-polarisation"
description: "Subtopic 7.5 of Cambridge AS Physics 9702 in depth: polarisation as a transverse-wave effect, Malus's law from amplitudes, and series of polarising filters."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into **7.5 Polarisation**, the final subtopic of AS
Topic 7, Waves, in Cambridge International AS & A Level Physics 9702
(2025–2027 series). The [Waves study guide](/resources/as-physics-waves/)
states Malus's law; this page explains where the cos² comes from, how
microwave and filter demonstrations work, and how to handle a series of
polarising filters, which the syllabus names explicitly. For quick recall, use
the [polarisation revision notes](/resources/cambridge-a-level-physics-9702-as-polarisation-revision-notes/),
then try the [polarisation practice questions](/resources/cambridge-a-level-physics-9702-as-polarisation-practice/).

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL PHYSICS 9702 — AS Level, 7.5 Polarisation**

Candidates should be able to:

- understand that polarisation is a phenomenon associated with transverse
waves
- recall and use Malus's law (I = I₀cos²θ) to calculate the intensity of a
plane-polarised electromagnetic wave after transmission through a polarising
filter or a series of polarising filters

The syllabus adds that calculation of the effect of a polarising filter on the
intensity of an **unpolarised** wave is not required. Every Malus's law
calculation therefore starts with a wave that is already plane-polarised.

## What polarisation is

In a transverse wave the oscillations are perpendicular to the direction of
travel, but that still leaves a choice of direction within the perpendicular
plane.

- In an **unpolarised** transverse wave, such as light from a filament lamp or
the Sun, the oscillations occur in many directions perpendicular to the
direction of travel, changing randomly.
- In a **plane-polarised** wave, the oscillations are confined to **one
direction** perpendicular to the direction of travel; together with the
direction of travel this defines a single plane. For an electromagnetic wave,
the direction of polarisation is the direction in which the electric field
oscillates.

A **longitudinal** wave oscillates along its direction of travel, so there is
no perpendicular direction to choose and nothing to restrict: longitudinal
waves **cannot** be polarised. That is why the observation that light can be
polarised is evidence that light is a transverse wave, and why sound cannot be
polarised.

## Demonstrations

**Two polarising filters with light.** Unpolarised light passes through a
first filter (the polariser) and becomes plane-polarised. A second filter (the
analyser) is rotated in front of it. The transmitted brightness is greatest
when the two transmission axes are parallel, falls as the analyser is turned,
and is zero when the axes are at 90° ("crossed"). It rises again to a maximum
at 180°: two maxima and two minima per full turn.

**Microwaves.** A typical school microwave transmitter emits plane-polarised
microwaves. If the receiver is rotated about the line joining it to the
transmitter, the signal falls from a maximum to nearly zero after a quarter
turn. A grille of parallel metal rods placed between them blocks the
microwaves when the rods are **parallel** to the electric field oscillation,
and lets them through when the rods are **perpendicular** to it. The grille
behaves as a polarising filter, with its transmission direction at right
angles to the rods.

## Malus's law and where it comes from

Plane-polarised light of intensity I₀ meets a polarising filter whose
transmission axis is at angle θ to the plane of polarisation.

```
amplitude transmitted:  A = A0 cos(theta)     (component along the filter axis)
intensity ∝ amplitude^2,  so
I = I0 cos^2(theta)
```

The filter passes only the **component** of the oscillation along its
transmission axis; the component perpendicular to the axis is absorbed. Since
intensity is proportional to amplitude squared (subtopic 7.1), the cosine is
squared. After the filter, the wave is plane-polarised **along the filter's
axis**, which matters for the next filter in a series.

Key values to recognise without a calculator:

| θ | cos²θ | Fraction transmitted |
|---|---|---|
| 0° | 1 | all |
| 30° | 0.75 | three quarters |
| 45° | 0.50 | half |
| 60° | 0.25 | one quarter |
| 90° | 0 | none |

**Worked example 1 — finding the angle.** Plane-polarised light passes
through a filter and emerges with one quarter of its original intensity. Find
the angle between the plane of polarisation and the transmission axis.

```
I / I0 = cos^2(theta) = 0.25
cos(theta) = 0.50
theta = 60 degrees
```

A common error is to take cos θ = 0.25 (θ = 75.5°), forgetting the square.

## A series of polarising filters

For two or more filters, apply Malus's law **once for each filter**, each time
using the angle between that filter's axis and the plane of polarisation of
the light reaching it (the axis of the filter before it).

**Worked example 2.** Plane-polarised light of intensity 120 W m⁻² passes
through two filters. The first filter's axis is at 30° to the original plane
of polarisation; the second is at 70° to the original plane.

```
after filter 1:  I1 = 120 cos^2(30) = 120 x 0.75 = 90 W m^-2
angle between filter axes = 70 - 30 = 40 degrees
after filter 2:  I2 = 90 cos^2(40) = 90 x 0.587 = 53 W m^-2
```

Using 70° for the second filter (giving 120 × cos²70° = 14 W m⁻²) is the
characteristic mistake.

**Worked example 3 — the surprising middle filter.** Plane-polarised light of
intensity I₀ meets a filter at 90° to its plane of polarisation, so nothing
gets through. A third filter is now inserted *before* the crossed filter, with
its axis at 45° to the original plane.

```
after the 45 degree filter:   I0 cos^2(45) = 0.50 I0
after the crossed filter (at 45 degrees to the middle filter):
                              0.50 I0 x cos^2(45) = 0.25 I0
```

Adding a filter lets *more* light through. The middle filter changes the
plane of polarisation, so the last filter is no longer at 90° to the light
reaching it. With the middle filter at 30° instead, the result would be
I₀ × cos²30° × cos²60° = 0.1875I₀: 45° gives the most.

## The shape of the I–θ graph

A graph of transmitted intensity against θ follows cos²θ: maximum at 0° and
180°, zero at 90° and 270°, and never negative. Its period is 180°, half that
of a cosine graph, because turning a filter through 180° leaves its axis
along the same line.

## Exam technique

- **Explain why sound cannot be polarised**: sound is longitudinal; its
oscillations are along the direction of travel, so they cannot be restricted
to one plane perpendicular to it.
- **Calculate**: write I = I₀cos²θ, state θ, and check the calculator is in
degrees.
- **Series of filters**: label the intensity after each filter and state the
angle used each time.
- **Describe an observation**: say how the intensity changes as the filter is
rotated through 360° (two maxima, two minima).

## Common mistakes

- Using cos θ instead of cos²θ.
- Measuring each angle from the original plane instead of from the previous
filter.
- Applying Malus's law to unpolarised light, which the syllabus does not
require.
- Saying a polarising filter "blocks all light at 45°".
- Claiming that longitudinal waves can be partly polarised.

## Quick revision checklist

- Polarisation restricts oscillations to one direction perpendicular to
travel; transverse waves only
- Light and microwaves can be polarised; sound cannot
- Malus's law I = I₀cos²θ comes from A = A₀cos θ and I ∝ A²
- After a filter the light is polarised along that filter's axis
- Series of filters: apply the law at each filter with the relative angle

## Frequently asked questions

**Why is the cosine squared in Malus's law?**
The filter transmits the amplitude component A₀cos θ, and intensity is
proportional to amplitude squared.

**Can adding a polarising filter increase the light transmitted?**
Yes. Inserting a filter at 45° between two crossed filters lets a quarter of
the incident intensity through, because it rotates the plane of
polarisation.

**Do I need to calculate what happens to unpolarised light at a filter?**
No. The 9702 syllabus states that this calculation is not required.

## More resources on this topic

- [Waves](/resources/as-physics-waves/) — the whole of Topic 7 in one guide
- [Transverse and longitudinal waves](/resources/cambridge-a-level-physics-9702-as-transverse-and-longitudinal-waves/) — subtopic 7.2, the distinction polarisation depends on
- [Electromagnetic spectrum](/resources/cambridge-a-level-physics-9702-as-electromagnetic-spectrum/) — subtopic 7.4, why all electromagnetic waves can be polarised
- [Cambridge AS & A Level Physics hub](/boards/cambridge/a-level/physics/)

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027
series. Always check the current syllabus for your examination year.*
