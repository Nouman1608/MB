---
title: "Astronomy and Cosmology"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Astronomy and cosmology"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 25.1
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
description: "Standard candles and the inverse square law, stellar radii from Wien's and Stefan-Boltzmann laws, redshift and Hubble's law: Topic 25 of Cambridge 9702 Physics."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29; 2026-11-08: reviewed by hassan."
publishedDate: 2026-08-18
updatedDate: 2026-08-18
featured: false
---

This guide covers Topic 25, Astronomy and cosmology, in full — subtopics
**25.1 Standard candles**, **25.2 Stellar radii** and **25.3 Hubble's law
and the Big Bang theory** — from Cambridge International AS & A Level
Physics 9702, 2025–2027 series. This is the final A Level topic, completing
the full 9702 syllabus, and draws on radiation and wave concepts from
earlier in the course.

## Before studying this

This resource assumes the electromagnetic spectrum from [Waves: Progressive
Waves, the Doppler Effect and Polarisation](/resources/as-physics-waves/),
and photon energy from [Quantum Physics](/resources/a-physics-quantum-physics/).

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL PHYSICS 9702 — A Level, Topic 25**

**25.1 Standard candles** — understanding the term luminosity as the total
power of radiation emitted by a star; recalling and using the inverse square
law for radiant flux intensity F = L/(4πd²); understanding that an object of
known luminosity is called a standard candle; understanding the use of
standard candles to determine distances to galaxies.

**25.2 Stellar radii** — recalling and using Wien's displacement law
λₘₐₓ ∝ 1/T to estimate the peak surface temperature of a star; using the
Stefan–Boltzmann law L = 4πσr²T⁴; using Wien's displacement law and the
Stefan–Boltzmann law to estimate the radius of a star.

**25.3 Hubble's law and the Big Bang theory** — understanding that the lines
in the emission and absorption spectra from distant objects show an increase
in wavelength from their known values; using Δλ/λ ≈ Δf/f ≈ v/c for the
redshift of electromagnetic radiation from a source moving relative to an
observer; explaining why redshift leads to the idea that the Universe is
expanding; recalling and using Hubble's law v ≈ H₀d and explaining how this
leads to the Big Bang theory (candidates are only required to use SI units).

## Luminosity and standard candles

A star's **luminosity** L is the total power of radiation it emits, in
watts. A **standard candle** is any astronomical object whose luminosity is
already known (or can be reliably assumed), so that measuring how bright it
appears from Earth allows its distance to be calculated. Standard candles in
distant galaxies are how the distances to those galaxies are found.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-astronomy-and-cosmology--02-aphy-astro-inverse-square.webp" width="900" height="1130" alt="A star emits light in a widening cone. At 2d the same light covers 4 times the area and at 3d 9 times, so the flux falls to F/4 and F/9. A standard candle has known L, so measuring F gives d; the worked example gives 5.6e18 m." loading="lazy">
  <figcaption>Flux falls as 1/d^2, so a standard candle of known luminosity gives its distance.</figcaption>
</figure>


## Radiant flux intensity and distance

The **radiant flux intensity** F (how bright an object appears, i.e. power
received per unit area) falls off with the square of distance:

```
F = L / (4πd²)
```

If an object's luminosity L is known (it is a standard candle) and its
flux F can be measured from Earth, this equation can be rearranged to find
its distance d — the basis of the standard-candle distance-measurement
method used throughout astronomy.

**Worked example.** A standard candle has luminosity 4.0 × 10²⁶ W and is
measured to have flux 1.0 × 10⁻¹² W m⁻² at Earth. Its distance:

```
d = √(L / 4πF) = √(4.0 × 10²⁶ / (4π × 1.0 × 10⁻¹²)) ≈ 5.64 × 10¹⁸ m
```

## Stellar radii

**Wien's law** relates a star's peak emission wavelength λₘₐₓ to its
surface temperature:

```
λₘₐₓT = constant
```

(equivalently λₘₐₓ ∝ 1/T). The **Stefan–Boltzmann law** relates a star's
luminosity to its radius r and surface temperature T:

```
L = 4πσr²T⁴
```

where σ is the Stefan–Boltzmann constant. Measuring a star's spectrum gives
λₘₐₓ, and hence its temperature T via Wien's law. Combining this temperature with the star's luminosity
(found, for example, from its measured flux and known distance using
F = L/(4πd²)) in the
Stefan-Boltzmann law, L = 4πr²σT⁴, allows the star's radius r to be
calculated — a two-step method connecting the two laws covered in this
topic.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-astronomy-and-cosmology--01-aphy-astro-parallax.webp" width="900" height="1000" alt="Earth at opposite ends of its orbit sees a nearby star shift against far more distant stars. The parallax angle p is the angle at the star subtended by 1 AU. For p in arcseconds, d in parsecs is 1/p; 0.0625 arcsec gives 16.0 pc or 52.3 ly. The drawing is not to scale." loading="lazy">
  <figcaption>Parallax angle p subtends 1 AU at the star, so d (pc) = 1/p (arcsec).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-astronomy-and-cosmology--03-aphy-astro-blackbody.webp" width="900" height="980" alt="Planck curves for 4800 K, 5800 K and 7000 K. Hotter stars are higher at every wavelength and peak at shorter wavelengths (604, 500, 414 nm from Wien). Area under each curve scales as T^4 (Stefan)." loading="lazy">
  <figcaption>Hotter black bodies emit more at every wavelength and peak at shorter wavelength; total power scales as T^4.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-astronomy-and-cosmology--05-aphy-astro-star-life-cycle.webp" width="900" height="1210" alt="A low-mass star goes from gas cloud to protostar, main sequence, red giant, planetary nebula and white dwarf (electron degeneracy pressure, at most 1.4 solar masses). A massive star ends as a red supergiant, supernova, then a neutron star or black hole. A main-sequence star is stable because gas and radiation pressure balance gravity." loading="lazy">
  <figcaption>Mass decides whether a star ends as a white dwarf, neutron star or black hole.</figcaption>
</figure>


## The Doppler effect and redshift

The lines in the emission and absorption spectra of distant galaxies are
observed at longer wavelengths than their known laboratory values. Light
from a receding astronomical source is shifted to longer wavelengths
(**redshift**), an application of the Doppler effect to electromagnetic
waves:

```
Δλ/λ ≈ Δf/f ≈ v/c
```

where v is the recession speed of the source and c is the speed of light.
Measuring the redshift of light from a distant galaxy therefore gives its
recession speed.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-astronomy-and-cosmology--06-aphy-astro-redshift.webp" width="900" height="980" alt="Hydrogen absorption lines at 434.0, 486.1 and 656.3 nm in the laboratory are shifted to 442.7, 495.8 and 669.4 nm in a distant galaxy, all by the same fraction z = 0.020. z = delta lambda / lambda = v/c gives a recession speed of about 6.0e6 m/s." loading="lazy">
  <figcaption>Spectral lines of a receding galaxy shift to longer wavelength by z = v/c.</figcaption>
</figure>


## Hubble's law and the Big Bang

**Hubble's law** states that a galaxy's recession speed is proportional to
its distance from Earth:

```
v = H₀d
```

where H₀ is the **Hubble constant**. Its value is not precisely known;
measurements give about **2.3 × 10⁻¹⁸ s⁻¹**. The syllabus states that
candidates will only be required to use SI units with Hubble's law, so work
with H₀ in s⁻¹ and distances in metres. (Astronomers often quote the same
value as roughly 70 km s⁻¹ Mpc⁻¹, a non-SI form you will not need: with
1 Mpc = 3.086 × 10²² m it converts to 2.3 × 10⁻¹⁸ s⁻¹.) Because more distant galaxies
recede faster, Hubble's law is direct observational evidence that the
universe is expanding — and running this expansion backward in time
implies the universe originated from an extremely small, dense state at a
finite time in the past, consistent with the **Big Bang theory**. (As
background beyond what the syllabus requires: the reciprocal of the
Hubble constant, 1/H₀, gives an order-of-magnitude estimate for the age of
the universe.)

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-astronomy-and-cosmology--07-aphy-astro-hubble.webp" width="900" height="1140" alt="Speed against distance is a straight line through the origin with gradient H0 = 70 km/s/Mpc, including the worked example 85.5 Mpc at 5990 km/s. Farther galaxies recede proportionally faster. H0 = 2.3e-18 per second, so age is about 1/H0 = 4.4e17 s or 1.4e10 years." loading="lazy">
  <figcaption>Recession speed is proportional to distance (v = H0 d), and 1/H0 estimates the age of the universe.</figcaption>
</figure>


## Common mistakes

- **Confusing luminosity (total power radiated, in watts) with radiant flux
intensity (power received per unit area at a given distance, in W m⁻²)** —
these are related by the inverse square law but are not the same quantity.
- **Applying Wien's law and the Stefan-Boltzmann law independently without
connecting them** — finding a stellar radius requires combining temperature
from Wien's law with luminosity in the Stefan-Boltzmann law.
- **Treating the Hubble constant as a precisely known, fixed number** — its
measured value is uncertain; about 2.3 × 10⁻¹⁸ s⁻¹ in the SI units the
syllabus requires.
- **Assuming redshift implies motion through space in the everyday sense**
rather than the large-scale expansion of space itself — a subtlety beyond
what is required at this level, but worth being aware of conceptually.

## Quick revision checklist

- L = 4πr²σT⁴ (Stefan-Boltzmann law, stellar radii) and F = L/(4πd²) (inverse square law, standard candles)
- Combining Wien's law (λₘₐₓT = constant) with the Stefan-Boltzmann law to find stellar radius
- Δλ/λ ≈ v/c for redshift, and v = H₀d for Hubble's law
- Hubble's law as evidence for universal expansion and the Big Bang theory

## Frequently asked questions

**What is a standard candle in astronomy?**
A standard candle is an astronomical object of known luminosity. Measuring its radiant flux intensity at Earth and using F = L/(4πd²) gives its distance, which is how distances to galaxies are found.

**What is the difference between luminosity and radiant flux intensity?**
Luminosity is the total power of radiation a star emits, in watts. Radiant flux intensity is the power received per unit area at a given distance, in W m⁻², and the two are linked by the inverse square law.

**How do you find the radius of a star?**
Use Wien's displacement law with the peak wavelength of the star's spectrum to find its surface temperature, then put that temperature and the star's luminosity into the Stefan-Boltzmann law L = 4πσr²T⁴ and solve for r.

**What units do you use for the Hubble constant in Cambridge 9702?**
The Cambridge 9702 syllabus only requires SI units with Hubble's law, so use H₀ in s⁻¹ (about 2.3 × 10⁻¹⁸ s⁻¹) with distance in metres and speed in m s⁻¹.

## Related resources

- [Medical Physics](/resources/a-physics-medical-physics/) — the previous A Level topic
- [Cambridge AS & A Level Physics hub](/boards/cambridge/a-level/physics/) — the complete syllabus, now fully covered

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027
series. Always check the current syllabus for your examination year.*
