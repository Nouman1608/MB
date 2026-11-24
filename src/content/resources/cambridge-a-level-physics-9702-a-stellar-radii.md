---
title: "Cambridge A Level Physics (9702): Stellar radii"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Astronomy and cosmology"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 25.2
syllabusTopics:
  - qualification: "a-level"
    topic: "a-astronomy-and-cosmology"
    subtopic: "a-stellar-radii"
description: "A focused guide to 25.2 Stellar radii in Cambridge A Level Physics 9702: Wien's displacement law, the Stefan-Boltzmann law and estimating the radius of a star."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **25.2 Stellar radii** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Astronomy and Cosmology study guide](/resources/a-physics-astronomy-and-cosmology/) states the two laws and the method; this page goes further into what each law says physically, ratio reasoning for comparing stars, the full three-step calculation from measured data to a radius, and why the answer is only an estimate. For quick recall use the [Stellar radii revision notes](/resources/cambridge-a-level-physics-9702-a-stellar-radii-revision-notes/), and for exam-style questions the [Stellar radii practice questions](/resources/cambridge-a-level-physics-9702-a-stellar-radii-practice/).

## What 25.2 asks you to do

The syllabus lists three outcomes. Candidates should be able to:

- recall and use **Wien's displacement law λ_max ∝ 1/T** to estimate the peak surface temperature of a star
- use the **Stefan-Boltzmann law L = 4πσr²T⁴**
- use Wien's displacement law and the Stefan-Boltzmann law to **estimate the radius of a star**

The Stefan-Boltzmann law and the constant σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴ appear on the data sheet. Wien's law must be recalled; when a calculation needs it, the question gives the constant (written here as λ_max T = 2.9 × 10⁻³ m K).

## Stars as black bodies

Both laws apply to a **black body**: an ideal object that absorbs all radiation falling on it and emits a continuous spectrum that depends only on its temperature. A star's spectrum is close to this shape, so a star can be treated as approximately a black body. The word "estimate" in the syllabus reflects this approximation.

A black-body spectrum (intensity against wavelength) is a smooth curve with a single peak. As temperature rises:

- the curve rises at **every** wavelength, so the total power emitted increases sharply
- the **peak moves to shorter wavelengths**

These two features are exactly what the two laws describe.

## Wien's displacement law

```
λ_max ∝ 1/T        λ_max T = constant = 2.9 × 10⁻³ m K
```

λ_max is the wavelength at which the star emits the greatest power per unit wavelength; T is its surface temperature in **kelvin**.

- A star with λ_max = 500 nm has T = 2.9 × 10⁻³ / 500 × 10⁻⁹ = 5800 K, close to the Sun's surface temperature.
- A cooler star (about 3000 K) peaks in the infrared near 970 nm and looks red; a hotter star (about 10 000 K) peaks near 290 nm in the ultraviolet and looks blue-white.

So the colour of a star is a rough thermometer: red stars are cool, blue stars are hot.

**Ratio form.** If star B has twice the surface temperature of star A, λ_max for B is half that for A.

## The Stefan-Boltzmann law

```
L = 4πσr²T⁴
```

Read it as: luminosity = surface area of the sphere (4πr²) × power emitted per unit area (σT⁴). Two consequences:

- L ∝ r² at fixed T: a star twice the radius, at the same temperature, has four times the luminosity.
- L ∝ T⁴ at fixed r: doubling the temperature multiplies the luminosity by 16.

Rearranged for the radius:

```
r = √( L / (4πσT⁴) )        so        r ∝ √L / T²
```

This explains how large but cool stars (red giants) can be very luminous: their huge surface area makes up for the low power per unit area. Small but hot stars (white dwarfs) are faint because their surface area is tiny.

## The method for a stellar radius

1. **Temperature** from the spectrum: measure λ_max, then T = (2.9 × 10⁻³) / λ_max.
2. **Luminosity**, either given or found from a standard-candle style measurement: L = 4πd²F, where d is the star's distance and F its measured radiant flux intensity (subtopic 25.1).
3. **Radius**: r = √(L / (4πσT⁴)).

## Worked example 1: a red giant

A star has λ_max = 970 nm and luminosity 1.5 × 10²⁹ W. Estimate its radius.

```
T = 2.9 × 10⁻³ / 970 × 10⁻⁹ = 2990 K
T⁴ = (2990)⁴ = 7.99 × 10¹³ K⁴
r = √( 1.5 × 10²⁹ / (4π × 5.67 × 10⁻⁸ × 7.99 × 10¹³) )
  = √( 1.5 × 10²⁹ / 5.69 × 10⁷ )
  = √(2.64 × 10²¹) = 5.1 × 10¹⁰ m
```

*Annotation.* This is about 75 times the radius of the Sun (about 7 × 10⁸ m), as expected for a red giant. Raising T to the fourth power is the step where calculator errors are most common; working out T⁴ on a separate line reduces them.

## Worked example 2: from measurements to radius

A star at a distance of 4.0 × 10¹⁷ m has a measured radiant flux intensity at the Earth of 2.5 × 10⁻⁹ W m⁻². Its spectrum peaks at 414 nm. Estimate its radius.

```
L = 4πd²F = 4π × (4.0 × 10¹⁷)² × 2.5 × 10⁻⁹ = 5.0 × 10²⁷ W
T = 2.9 × 10⁻³ / 414 × 10⁻⁹ = 7000 K
r = √( 5.0 × 10²⁷ / (4π × 5.67 × 10⁻⁸ × 7000⁴) ) = 1.7 × 10⁹ m
```

*Annotation.* Three separate laws are chained: the inverse square law gives L, Wien's law gives T, and the Stefan-Boltzmann law gives r. Show each stage, so an error early on does not cost every mark.

## Worked example 3: ratio reasoning

Star X has surface temperature 12 000 K and star Y has 6000 K. Both have the same luminosity. Compare their radii.

```
r ∝ √L / T²,  L equal  ⇒  r_X / r_Y = (T_Y / T_X)² = (6000 / 12 000)² = 0.25
```

Star X has a quarter of the radius of star Y. *Annotation.* Ratio questions are quicker and safer without σ and 4π, which cancel.

## Why the radius is only an estimate

- Stars are not perfect black bodies, so λ_max gives an approximate temperature.
- The surface temperature varies across a star's surface; T is an average.
- L may carry uncertainty from the distance measurement and from absorption by dust.
- Because r ∝ 1/T², a 5 % error in T gives about a 10 % error in r.

## Common mistakes

- **Using temperature in °C** instead of kelvin.
- **Forgetting to convert nm to m** in Wien's law.
- **Using T² instead of T⁴**, or forgetting the square root for r.
- **Using the star's distance d in place of its radius r** in the Stefan-Boltzmann law. L = 4πσr²T⁴ uses the star's own radius; F = L/(4πd²) uses the distance to the observer.
- **Saying a red star is hotter** because red "looks warm". Red stars are the coolest.
- **Assuming the most luminous star is the hottest.** Luminosity depends on r² as well as T⁴.

## Exam technique for the command words

- **State** (Wien's displacement law): the wavelength at which maximum power is emitted is inversely proportional to the thermodynamic temperature.
- **Calculate** (temperature): T = constant / λ_max, with λ in metres.
- **Calculate** (radius): show T, then T⁴ (or L), then r.
- **Determine** (a ratio): write the proportionality first, then substitute.
- **Explain** (why a cool star can be very luminous): L = 4πσr²T⁴, so a large radius compensates for low temperature.
- **Suggest** (why the radius is an estimate): stars are not perfect black bodies.

## More resources on this topic

- [Astronomy and Cosmology study guide](/resources/a-physics-astronomy-and-cosmology/) — the whole of Topic 25
- [Stellar radii revision notes](/resources/cambridge-a-level-physics-9702-a-stellar-radii-revision-notes/)
- [Stellar radii practice questions](/resources/cambridge-a-level-physics-9702-a-stellar-radii-practice/)
- [Standard candles](/resources/cambridge-a-level-physics-9702-a-standard-candles/) — subtopic 25.1, luminosity and radiant flux intensity
- [Temperature](/resources/a-physics-temperature/) — the kelvin scale

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
