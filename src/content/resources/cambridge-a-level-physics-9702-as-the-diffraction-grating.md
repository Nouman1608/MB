---
title: "Cambridge A Level Physics (9702): The diffraction grating"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Superposition"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 8.4
syllabusTopics:
  - qualification: "a-level"
    topic: "as-superposition"
    subtopic: "as-the-diffraction-grating"
description: "A focused guide to 8.4 The diffraction grating in Cambridge AS Physics 9702: d sin θ = nλ, highest order, white-light spectra and measuring a wavelength."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **8.4 The diffraction grating** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (AS Level). The broader [Superposition study guide](/resources/as-physics-superposition/) states the grating equation alongside the rest of Topic 8; this page works through it in depth: where the equation comes from, how to find the grating spacing and the highest order, what a white-light spectrum looks like and when orders overlap, and how to determine the wavelength of light in the laboratory. For quick recall use the [diffraction grating revision notes](/resources/cambridge-a-level-physics-9702-as-the-diffraction-grating-revision-notes/), and for exam-style questions the [diffraction grating practice questions](/resources/cambridge-a-level-physics-9702-as-the-diffraction-grating-practice/).

## What 8.4 asks you to do

Candidates should be able to:

- recall and use **d sin θ = nλ**
- describe the use of a diffraction grating to determine the **wavelength of light** (the structure and use of the spectrometer are not included)

The second outcome means you describe a method using a grating, a light source such as a laser, and simple measurements of distance or angle. You are not expected to describe a spectrometer's collimator, telescope or vernier scale.

## What a grating is and why it gives sharp maxima

A diffraction grating is a plate with a very large number of equally spaced, parallel slits (lines). The **grating spacing d** is the distance between the centres of adjacent slits. Gratings are usually labelled by the number of lines per millimetre, N, so:

```
d = 1 / N      (with N in lines per metre)
e.g. 300 lines per mm = 3.00 × 10⁵ lines per m, so d = 3.33 × 10⁻⁶ m
```

Light diffracts at every slit. In most directions the waves from the many slits arrive with a spread of phases and cancel almost completely. Only in particular directions do the waves from **all** the slits arrive in phase, giving very bright, very narrow maxima with darkness between them. This is the key difference from a double slit, whose maxima are broad and fade gradually into the minima.

## Where d sin θ = nλ comes from

Consider light incident normally on the grating and leaving at angle θ to the normal. Waves from two adjacent slits travel parallel paths, but one path is longer by d sin θ (the side of the small right-angled triangle formed between the two slits). For all slits to reinforce, this path difference must be a whole number of wavelengths:

```
d sin θ = nλ
n = order of the maximum (0, 1, 2, ...)
θ = angle between the maximum and the straight-through direction (the normal)
```

Because every adjacent pair has the same path difference, if one pair is in phase then all pairs are.

**The zero order** (n = 0) is at θ = 0 for every wavelength. Maxima of each order appear on **both sides** of the zero order, at +θ and −θ.

## The highest order and the number of maxima

Since sin θ cannot exceed 1, the order is limited by:

```
n ≤ d / λ
```

Take the **whole-number part** of d/λ. Never round up: if d/λ = 4.27, the highest order is 4. If d/λ comes out as an exact whole number, that order would be at 90°, travelling along the grating surface, and cannot be observed, so the highest observable order is one less.

Total number of maxima = 2n_max + 1 (both sides plus the zero order).

**Example.** A grating with 450 lines per mm is used with light of wavelength 520 nm.

```
d = 1 / (450 × 10³) = 2.22 × 10⁻⁶ m
d / λ = 2.22 × 10⁻⁶ / 520 × 10⁻⁹ = 4.27
highest order = 4;  total maxima = 2(4) + 1 = 9
```

## White light: spectra and overlapping orders

With white light, the zero order is white because θ = 0 for every wavelength. For every other order, sin θ ∝ λ, so each colour leaves at a different angle: **violet is deviated least and red most**. Each order is therefore a full spectrum, violet on the inside and red on the outside. Notice that this is the *opposite* order to dispersion by a glass prism, where violet is deviated most.

Higher orders are spread over larger angles, and from the second order onwards, spectra can **overlap**: the start of one order may lie inside the end of the previous one.

## Worked example 1: determining a laser wavelength

A laser beam is directed normally at a grating with 300 lines per mm. On a screen 1.50 m from the grating, the distance between the two **second-order** maxima is 1.27 m. Calculate the wavelength.

```
d = 1 / (300 × 10³) = 3.33 × 10⁻⁶ m
distance from centre to one second-order maximum = 1.27 / 2 = 0.635 m
tan θ = 0.635 / 1.50 = 0.423   →   θ = 22.9°
λ = d sin θ / n = (3.33 × 10⁻⁶ × sin 22.9°) / 2 = 6.5 × 10⁻⁷ m  (650 nm)
```

*Annotation.* The angle is large, so you **must** find θ from tan θ = (distance from centre) ÷ (distance to screen) and then take sin θ. The small-angle shortcut used for double slits does not work here. Measuring between the two second-order maxima and halving reduces the uncertainty, and removes the need to locate the exact centre of the zero order.

## Worked example 2: do the orders overlap?

White light containing wavelengths from 400 nm to 700 nm is incident normally on a grating with 500 lines per mm, so d = 2.00 × 10⁻⁶ m. Show that the second-order and third-order spectra overlap.

```
second order, red (700 nm):    sin θ = 2(700 × 10⁻⁹) / 2.00 × 10⁻⁶ = 0.70   →  θ = 44.4°
third order, violet (400 nm):  sin θ = 3(400 × 10⁻⁹) / 2.00 × 10⁻⁶ = 0.60   →  θ = 36.9°
```

The third-order violet appears at a **smaller** angle than the second-order red, so the two spectra overlap between 36.9° and 44.4°. Third-order red would need sin θ = 1.05, which is impossible, so the third-order spectrum is incomplete. The first and second orders, by contrast, do not overlap: first-order red (θ = 20.5°) comes before second-order violet (θ = 23.6°).

## Describing the experiment

A full description of determining wavelength with a grating has these points:

1. Direct a laser (or light from a narrow, monochromatic source) **normally** at the grating, so the grating equation in its simple form applies.
2. Measure the distance L from the grating to a screen with a metre rule or tape.
3. Measure the distance between the two maxima of the same order n on either side of the centre, and halve it to get y.
4. Calculate θ from tan θ = y/L; calculate d from the lines per millimetre.
5. Calculate λ = d sin θ / n. Repeat for several orders and find the mean, or plot sin θ against n: the graph is a straight line through the origin with gradient λ/d.

Grating maxima are sharp and bright, and the angles are large, so the percentage uncertainty in θ is small. That is why a grating gives a more accurate wavelength than a double slit.

## Common mistakes

- **Leaving d as lines per millimetre.** d is a distance, the reciprocal of the number of lines per metre.
- **Rounding the highest order up.** Always take the whole-number part of d/λ.
- **Using sin θ ≈ tan θ.** Grating angles are often far too large for this.
- **Measuring θ from the grating surface** rather than from the normal (the zero-order direction).
- **Forgetting the maxima on the other side** when counting the total number of maxima.
- **Mixing up the order of colours.** In a grating spectrum red is deviated most; in a prism, violet is.
- **Using λ = ax/D for a grating.** That equation is for the double slit in [Interference](/resources/cambridge-a-level-physics-9702-as-interference/).

## Exam technique for the command words

- **State** or **recall**: write d sin θ = nλ and define each symbol, including that θ is measured from the normal.
- **Calculate**: convert lines per millimetre to d in metres first; give angles to three significant figures and final answers to the precision of the data.
- **Determine** (the highest order or the number of maxima): show d/λ, then state the whole-number part, then count both sides plus zero.
- **Show that** (orders overlap): calculate both angles and compare them explicitly in a final sentence.
- **Describe** (the experiment): give apparatus, what is measured, how θ is found, the equation used, and one way of improving reliability.
- **Explain** (why a grating is better than a double slit): sharper, brighter maxima at larger angles, so angles are measured more precisely.

## More resources on this topic

- [Superposition study guide](/resources/as-physics-superposition/) — the whole of Topic 8
- [Diffraction grating revision notes](/resources/cambridge-a-level-physics-9702-as-the-diffraction-grating-revision-notes/)
- [Diffraction grating practice questions](/resources/cambridge-a-level-physics-9702-as-the-diffraction-grating-practice/)
- [Interference](/resources/cambridge-a-level-physics-9702-as-interference/) — subtopic 8.3

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
