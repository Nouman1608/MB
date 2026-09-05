---
title: "A Level Physics: Astronomy and Cosmology — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Astronomy and cosmology"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 25.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "a-astronomy-and-cosmology"
    subtopic: "a-standard-candles"
  - qualification: "a-level"
    topic: "a-astronomy-and-cosmology"
    subtopic: "a-stellar-radii"
  - qualification: "a-level"
    topic: "a-astronomy-and-cosmology"
    subtopic: "a-hubbles-law-and-the-big-bang-theory"
description: "Condensed recall notes on luminosity, standard candles, Wien and Stefan laws, redshift and Hubble law for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Astronomy and Cosmology study guide](/resources/a-physics-astronomy-and-cosmology/).

## Luminosity and flux

```
luminosity L   = total power radiated by a star        W
radiant flux F = power received per unit area          W m^-2
F = L / (4 pi d^2)
```

**The inverse square law is the whole basis of distance measurement.** If you know a star's luminosity and measure its flux, you can find its distance.

**Standard candle** — an object of **known luminosity**, so that measuring its flux gives its distance. Type Ia supernovae are the standard example, and they work because they all explode at the same critical mass and therefore the same peak luminosity, giving a reliably consistent reference point across enormous cosmic distances.

## Stefan–Boltzmann and Wien

```
Stefan-Boltzmann:  L = 4 pi r^2 sigma T^4
Wien's law:        lambda_max T = 2.9 x 10^-3 m K
```

*Wien's displacement law and its constant are not listed in the standard
9702 data/formulae section — check a recent past paper or the published
data booklet to see whether the constant is supplied in the question. If
it is not supplied, this value should be memorised.*

**Wien gives the temperature; Stefan then gives the radius.** That two-step route is the standard calculation: measure the peak wavelength, find T, then combine with luminosity to get r. Stefan's equation alone has two unknowns (r and T), so applying it before Wien's law leaves the problem unsolvable.

Note `L ∝ T⁴` — a modest temperature increase produces an enormous luminosity increase, which is why hot stars are so much brighter.

**Worked example.** A star has peak emission wavelength 480 nm and luminosity 4.6 × 10²⁶ W.

```
T = 2.9x10^-3 / (480x10^-9) = 6042 K
L = 4 pi r^2 sigma T^4
r = sqrt( L / (4 pi sigma T^4) ) = 6.95x10^8 m
```

## Redshift and Hubble's law

```
Doppler (v << c):   delta-lambda / lambda  =  v / c
Hubble's law:       v = H0 d
```

**Redshift** means observed wavelength is **longer** than emitted — the source is receding, and Δλ is always (observed − laboratory), never the other way round.

**The key inference:** almost all galaxies show redshift, and the redshift increases with distance. Combined, these mean the universe is **expanding**, with more distant galaxies receding faster.

Crucially, this does **not** mean we are at the centre. The expansion is of space itself, so every observer in every galaxy would see the same pattern. Stating that explicitly is what distinguishes a strong answer. It is space itself expanding, not galaxies moving through fixed space — every point recedes from every other point, so an observer in any other galaxy would measure the same distance–velocity relationship.

```
age of the universe  ~  1 / H0
```

**Worked example.** A galaxy shows a spectral line at 660.4 nm with laboratory wavelength 656.3 nm (H₀ = 2.3 × 10⁻¹⁸ s⁻¹).

```
delta-lambda = 660.4 - 656.3 = 4.1 nm
v = c x (delta-lambda / lambda) = 3.00x10^8 x (4.1/656.3) = 1.87x10^6 m/s
d = v / H0 = 1.87x10^6 / 2.3x10^-18 = 8.15x10^23 m
age = 1/H0 = 1/2.3x10^-18 = 4.35x10^17 s  (~13.8 billion years)
```

## The Big Bang

The syllabus evidence point is **redshift of galaxies**, and the marks are for saying what it shows:

1. **Redshift of galaxies** → the universe is expanding, so it was smaller and denser in the past.

*Beyond the syllabus — background only, not examinable under 9702: two further pieces of evidence often quoted for the Big Bang are the cosmic microwave background radiation (the cooled remnant of the hot early universe, with a black-body spectrum corresponding to about 2.7 K) and the relative abundance of hydrogen and helium (matching the ratio predicted by nucleosynthesis in the first minutes after the Big Bang).*

## Exam traps

- Confusing luminosity (emitted) with radiant flux (received).
- Forgetting the 4πd² in the inverse square law.
- Doing Stefan before Wien, so temperature is unknown.
- Saying redshift proves Earth is at the centre of the universe.
- Giving Big Bang evidence without saying what it demonstrates.
- Using degrees Celsius in Wien's or Stefan's law.
- Mixing up which wavelength is observed vs laboratory in the Doppler formula (Δλ = observed − laboratory, and the ratio Δλ/λ is used as-is, not squared).

## Self-test

1. Distinguish luminosity from radiant flux.
2. What is a standard candle, and why do Type Ia supernovae qualify?
3. In what order do you apply Wien's and Stefan's laws to find a star's radius?
4. Why does universal redshift not place us at the centre?
5. Give the syllabus piece of evidence for the Big Bang and what it shows. *(Extension: give two further pieces of evidence beyond the syllabus.)*
6. A star has peak emission wavelength 480 nm and luminosity 4.6 × 10²⁶ W. Find its surface temperature.
7. A galaxy's spectral line is observed at 660.4 nm against a laboratory value of 656.3 nm. Find its recession velocity.

**Answers:** 1. Luminosity is the total power radiated by the star; radiant flux is the power received per unit area at the observer. 2. An object of known luminosity, so measuring its flux gives its distance; Type Ia supernovae explode at a fixed critical mass and so have a consistent peak luminosity. 3. Wien's law first, using peak wavelength to find temperature; then Stefan's law with the luminosity to find the radius. 4. Space itself is expanding, so every observer everywhere sees all other galaxies receding, with the same distance–velocity relationship. 5. Galactic redshift shows the universe is expanding (the syllabus-required evidence). Extension, beyond the syllabus: the cosmic microwave background is the cooled remnant of a hot dense early state; the hydrogen-to-helium abundance ratio matches Big Bang nucleosynthesis predictions. 6. T = 2.9×10⁻³ ÷ (480×10⁻⁹) = **6042 K**. 7. Δλ = 660.4 − 656.3 = 4.1 nm; v = c × (Δλ/λ) = 3.00×10⁸ × (4.1/656.3) = **1.87×10⁶ m/s**.
