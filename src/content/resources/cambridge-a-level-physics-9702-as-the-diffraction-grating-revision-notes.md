---
title: "Cambridge A Level Physics (9702): The diffraction grating -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge AS Physics 9702 8.4 The diffraction grating: d sin θ = nλ, grating spacing, highest order, spectra, method, traps and self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Subtopic 8.4 of Cambridge International AS & A Level Physics 9702 (2025–2027) has two outcomes: recall and use d sin θ = nλ, and describe how a diffraction grating is used to determine the wavelength of light (the spectrometer itself is not included). These notes are for fast recall; for derivations and annotated worked examples read the [diffraction grating study guide](/resources/cambridge-a-level-physics-9702-as-the-diffraction-grating/), then test yourself with the [diffraction grating practice questions](/resources/cambridge-a-level-physics-9702-as-the-diffraction-grating-practice/).

## The equation

```
d sin θ = nλ
d = grating spacing (centre of one slit to the next), in m
θ = angle from the normal (straight-through direction) to the maximum
n = order: 0, 1, 2, ...
λ = wavelength
```

**Origin in one line:** adjacent slits have path difference d sin θ; a maximum needs this to equal nλ, and then every slit reinforces every other.

## Grating spacing from lines per millimetre

```
d = 1 / (lines per metre) = 1 / (N × 1000)   with N in lines per mm
```

| Lines per mm | d |
|---|---|
| 100 | 1.00 × 10⁻⁵ m |
| 250 | 4.00 × 10⁻⁶ m |
| 300 | 3.33 × 10⁻⁶ m |
| 500 | 2.00 × 10⁻⁶ m |
| 600 | 1.67 × 10⁻⁶ m |

More lines per mm means smaller d, so larger angles for the same λ.

## Highest order and number of maxima

- sin θ ≤ 1, so n ≤ d/λ.
- Highest observable order = whole-number part of d/λ (never round up; if d/λ is exactly whole, subtract one, because that order would be at 90°).
- Number of maxima = 2n_max + 1.

**Example:** d = 2.22 × 10⁻⁶ m, λ = 520 nm: d/λ = 4.27, so n_max = 4 and 9 maxima are seen.

## Grating compared with a double slit

| Feature | Double slit | Grating |
|---|---|---|
| Number of slits | 2 | Hundreds per millimetre |
| Maxima | Broad, gradually fading | Very sharp and bright, dark between |
| Angles | Small | Large |
| Equation | λ = ax/D (small angles) | d sin θ = nλ (any angle) |
| Accuracy of λ | Lower | Higher: angles measured precisely |

## White light

- Zero order: white (θ = 0 for all λ).
- Each higher order is a spectrum: **violet nearest the centre, red furthest out** (sin θ ∝ λ).
- From the second order onwards, spectra can overlap: compare the angle of the longest wavelength in order n with the shortest wavelength in order n + 1.
- Compare with a prism: a prism deviates violet most; a grating deviates red most.

## Method to determine λ (no spectrometer)

1. Laser beam normal to the grating.
2. Measure grating-to-screen distance L.
3. Measure the distance between the two nth-order maxima; halve it to get y.
4. tan θ = y/L, so find θ.
5. λ = d sin θ / n.
6. Repeat for other orders; or plot sin θ against n: straight line through origin, gradient = λ/d.

Use tan θ = y/L and then sin θ: **do not assume sin θ ≈ tan θ** at grating angles.

## Key terms

| Term | Meaning |
|---|---|
| Diffraction grating | Many equally spaced parallel slits |
| Grating spacing d | Distance between centres of adjacent slits |
| Order n | Whole number labelling a maximum; zero order is straight through |
| Normal incidence | Light meets the grating at 90° to its surface |
| First-order spectrum | The n = 1 maxima for all wavelengths in the source |
| Angular separation | Difference in θ between two maxima |

## Exam traps

- Substituting lines per mm for d.
- Rounding n_max up.
- Measuring θ from the grating surface instead of the normal.
- Forgetting maxima exist on both sides when counting.
- Using the small-angle approximation for a grating.
- Stating that violet is deviated most by a grating.
- Halving the angle between the two first-order maxima and forgetting you have done so (θ is half the angle between them).
- Describing a spectrometer when the syllabus excludes it; a laser, screen and rule are enough.

## Self-test

1. State the meaning of each symbol in d sin θ = nλ.
2. Calculate d for a grating with 400 lines per mm.
3. Light of wavelength 600 nm is used with d = 2.50 × 10⁻⁶ m. Find the highest order.
4. How many maxima are seen in question 3?
5. Why is the zero order white when white light is used?
6. Which colour is furthest from the centre in a first-order spectrum?
7. The angle between the two first-order maxima is 30.0°. What is θ for the first order?
8. Why is a grating more accurate than a double slit for measuring λ?
9. A graph of sin θ against n has gradient 0.270 for d = 2.00 × 10⁻⁶ m. Find λ.
10. Why must you not use sin θ ≈ tan θ for a grating?
11. If a grating is replaced by one with twice as many lines per mm, what happens to sin θ for a given order?

**Answers:** 1. d is the grating spacing, θ the angle from the normal to the maximum, n the order (a whole number), λ the wavelength. 2. d = 1 ÷ (4.00 × 10⁵) = 2.50 × 10⁻⁶ m. 3. d/λ = 4.17, so n_max = 4. 4. 2(4) + 1 = 9. 5. Every wavelength has its zero-order maximum at θ = 0, so all colours combine there. 6. Red. 7. 15.0°. 8. The maxima are sharper and brighter and at larger angles, so their positions and angles are measured with smaller percentage uncertainty. 9. λ = gradient × d = 0.270 × 2.00 × 10⁻⁶ = 5.40 × 10⁻⁷ m. 10. The angles are large, so sin θ and tan θ differ significantly. 11. d halves, so sin θ doubles (if this gives sin θ > 1, that order disappears).

## Related resources

- [Superposition revision notes](/resources/as-physics-superposition-revision-notes/) — the whole of Topic 8
- [Interference revision notes](/resources/cambridge-a-level-physics-9702-as-interference-revision-notes/) — subtopic 8.3
- [Diffraction grating practice questions](/resources/cambridge-a-level-physics-9702-as-the-diffraction-grating-practice/)
