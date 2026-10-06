---
title: "AQA A-Level Physics: Astrophysics (7408)"
seoTitle: "AQA A-Level Physics Astrophysics (7408) Study Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Astrophysics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 9
syllabusTopics:
  - qualification: "a-level"
    topic: "astrophysics-aqa-alevel"
  - qualification: "a-level"
    topic: "astrophysics-aqa-alevel"
    subtopic: "telescopes-aqa-alevel"
  - qualification: "a-level"
    topic: "astrophysics-aqa-alevel"
    subtopic: "classification-of-stars-aqa-alevel"
  - qualification: "a-level"
    topic: "astrophysics-aqa-alevel"
    subtopic: "cosmology-aqa-alevel"
description: "Study guide to the AQA A-Level Physics 7408 Astrophysics option: telescopes, magnitudes, black bodies, HR diagram, Doppler, Hubble and exoplanets."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide teaches section 3.9 Astrophysics of the AQA AS and A-level Physics specification (7407/7408, version 1.4, AS and A-level exams June 2016 onwards), sub-sections 3.9.1 to 3.9.3. Astrophysics is one of the five options (sections 3.9 to 3.13): you study one, and it is assessed in Paper 3 Section B (35 of the paper's 80 marks). Section A of Paper 3 assesses practical skills and data analysis. All of section 3.9 is A-level only.

The [course hub](/boards/aqa/a-level/physics/) lists every topic, the [printable checklist](/checklists/aqa/a-level/physics/) tracks outcomes, and the free [diagnostics](/diagnostics/) find weak spots. For recall use the [revision notes](/resources/aqa-a-level-physics-astrophysics-revision-notes/); to test yourself use the [practice questions](/resources/aqa-a-level-physics-astrophysics-practice/).

## What this topic covers (A-level only, option)

| Spec ref | Content |
|---|---|
| 3.9.1.1–3.9.1.4 | Refracting and Cassegrain telescopes, aberrations, radio/IR/UV/X-ray telescopes, Rayleigh criterion, collecting power, eye vs CCD |
| 3.9.2.1–3.9.2.6 | Magnitudes, parsec and light year, black bodies, spectral classes, HR diagram, supernovae, neutron stars, black holes |
| 3.9.3.1–3.9.3.4 | Doppler shift, Hubble's law, Big Bang evidence, quasars, exoplanets |

Angles are in radians throughout.

## 3.9.1 Telescopes

### Two-lens refracting telescope

A long-focus **objective** (fₒ) and a short-focus **eyepiece** (fₑ). In **normal adjustment** their principal foci coincide, so the lenses are fₒ + fₑ apart and the final image is at infinity.

Ray diagram: parallel rays from a distant object meet the objective at angle α to the axis. The ray through the objective's centre is undeviated; all the rays meet at one point in the shared focal plane (a real, inverted intermediate image). Draw a construction line from that point through the eyepiece centre; the rays leave the eyepiece parallel to it, at angle β.

**M = (angle subtended by image at eye)/(angle subtended by object at unaided eye) = β/α = fₒ/fₑ**. The final image is inverted.

**Worked example 1.** fₒ = 1.50 m, fₑ = 30 mm; a crater subtends 6.0 × 10⁻⁴ rad.

```
M = 1.50 / 0.030 = 50
separation = 1.50 + 0.030 = 1.53 m
β = 50 × 6.0 × 10⁻⁴ = 3.0 × 10⁻² rad
```

### Cassegrain reflector

A **parabolic concave primary mirror** reflects light towards its focus; a **convex secondary mirror** reflects it back through a hole in the primary to the eyepiece behind. In the ray diagram, parallel rays converge from the primary to the secondary, then converge less steeply through the hole to a focus just behind the primary.

- **Spherical aberration**: a spherical mirror or lens focuses rays far from the axis at a different point from rays near the axis, blurring the image. A parabolic mirror focuses all rays parallel to the axis at one point.
- **Chromatic aberration**: a lens refracts blue more than red, so colours focus at different points (coloured fringes). Mirrors have none.

**Reflectors** win because: no chromatic aberration; a mirror can be supported from behind, so it can be very large; only one surface must be perfect. **Refractors** suffer because large lenses sag (supported only at the rim), glass must be flawless throughout and absorbs some wavelengths. A reflector's secondary mirror does block some light and adds diffraction.

### Radio, I-R, U-V and X-ray telescopes

A single-dish **radio telescope** is a parabolic dish reflecting radio waves to an antenna at its focus.

- **Structure**: both radio and optical use parabolic reflectors; a radio dish can be wire mesh if the gaps are much smaller than λ.
- **Positioning and use**: the atmosphere is transparent to most radio waves, so radio dishes work on the ground, by day and through cloud, but suffer man-made interference. They are steered to map radio sources.
- **Resolving power**: much poorer than an optical telescope of the same size, because λ is far longer.
- **Collecting power**: dishes can be built far larger than mirrors.

**Infrared** is absorbed by water vapour, so IR telescopes sit on high, dry sites or in space, with cooled detectors. **UV** and **X-ray** telescopes must be in space because the atmosphere absorbs these wavelengths; X-ray mirrors work only at grazing incidence.

### Advantages of large diameter

**Rayleigh criterion**: two sources are just resolved when the central maximum of one diffraction pattern falls on the first minimum of the other: **θ ≈ λ/D**. **Collecting power ∝ D²** (it depends on area), so larger telescopes see fainter objects.

**Worked example 2.**

```
4.0 m mirror at 500 nm:  θ ≈ 500 × 10⁻⁹ / 4.0 = 1.25 × 10⁻⁷ rad
100 m dish at 6.0 cm:    θ ≈ 0.060 / 100 = 6.0 × 10⁻⁴ rad
collecting power ratio = (100/4.0)² = 625
```

**Eye vs CCD**: a CCD has much higher **quantum efficiency** (fraction of photons detected); its **resolution** depends on pixel spacing, which can be finer than the spacing of the eye's receptor cells; it is more **convenient** because it can integrate long exposures and gives a digital image to store and process. The eye gives a real-time view with no equipment.

## 3.9.2 Classification of stars

### Apparent and absolute magnitude

**Apparent magnitude m**: how bright a star appears from Earth. On the **Hipparcos scale** the dimmest visible stars have m = 6; brighter objects have lower (even negative) values. **Brightness is subjective.** A magnitude difference of 1 is an **intensity ratio of 2.51**, so Δm gives 2.51^Δm.

**Light year**: distance light travels in one year (≈ 9.46 × 10¹⁵ m). **Parsec**: distance at which one astronomical unit subtends 1 arcsecond (≈ 3.08 × 10¹⁶ m).

**Absolute magnitude M**: the apparent magnitude at 10 pc. **m − M = 5 log₁₀(d/10)**, d in parsecs.

**Worked example 3.** m = 2.0 and m = 6.0 differ by 4: ratio 2.51⁴ = **39.7**. A star with m = 9.0, M = 1.5: d = 10 × 10^(7.5/5) = **316 pc** = 9.74 × 10¹⁸ m.

### Black-body radiation

Treat a star as a **black body**. Black-body curves rise to one peak; a hotter body is higher at every wavelength and peaks at a shorter wavelength.

- **Wien**: λₘₐₓT = 2.9 × 10⁻³ m K, used to estimate surface temperature.
- **Stefan**: P = σAT⁴, A = 4πr². Use it to compare power, temperature and size.
- **Inverse square law**: I = P/4πd², assuming the star radiates equally in all directions and nothing absorbs radiation on the way.

**Worked example 4.** Peak at 500 nm: T = 2.9 × 10⁻³/500 × 10⁻⁹ = **5800 K**. A 3000 K star with 50 times the radius of a 6000 K star: P ratio = 50² × (0.5)⁴ = **156**.

### Spectral classes

| Class | Colour | T / K | Prominent absorption lines |
|---|---|---|---|
| O | blue | 25 000 – 50 000 | He⁺, He, H |
| B | blue | 11 000 – 25 000 | He, H |
| A | blue-white | 7 500 – 11 000 | H (strongest), ionised metals |
| F | white | 6 000 – 7 500 | ionised metals |
| G | yellow-white | 5 000 – 6 000 | ionised and neutral metals |
| K | orange | 3 500 – 5 000 | neutral metals |
| M | red | < 3 500 | neutral atoms, TiO |

**Balmer lines** need hydrogen atoms with electrons in **n = 2**, which absorb visible photons. Cool stars have few atoms excited to n = 2; in the hottest stars most hydrogen is ionised. So the lines are strongest in A stars. Energy levels are covered in [Particles and radiation](/resources/aqa-a-level-physics-particles-and-radiation/).

### HR diagram

Absolute magnitude (+15 bottom to −10 top) against temperature **falling** left to right (50 000 K to 2 500 K), or class O to M. The **main sequence** runs top left to bottom right; **giants** and supergiants are top right (cool, luminous, large); **white dwarfs** bottom left (hot, faint, small). The **Sun** is a G-class main-sequence star, M about +5, about 5800 K.

**Sun-like star**: protostar → main sequence → expands and cools up and right to a red giant → loses its outer layers; the core moves left and down to a white dwarf.

### Supernovae, neutron stars and black holes

- **Supernova**: rapid increase in absolute magnitude.
- **Neutron star**: made almost entirely of neutrons, density similar to a nucleus (of order 10¹⁷ kg m⁻³).
- **Black hole**: escape velocity > c (escape velocity is in [Fields and their consequences](/resources/aqa-a-level-physics-fields-and-their-consequences/)); event horizon at **Rs ≈ 2GM/c²**.
- **Gamma ray bursts**: from supergiants collapsing to neutron stars or black holes. Compare energy with the Sun's lifetime output (power × lifetime in seconds).
- **Supermassive black holes** sit at galaxy centres.
- **Type 1a standard candles**: the light curve rises quickly to a peak and declines slowly over months; the peak absolute magnitude is about the same each time (about −19), so m gives d. Distant ones were fainter than expected, suggesting accelerating expansion and **dark energy** — controversial because dark energy's nature is unknown and the method assumes identical peaks.

**Worked example 5.** 6.0 solar masses (1.99 × 10³⁰ kg each): Rs = 2 × 6.67 × 10⁻¹¹ × 1.194 × 10³¹/(3.00 × 10⁸)² = **1.77 × 10⁴ m**. A type 1a peaks at m = 14.2 with M = −19.3: d = 10 × 10^(33.5/5) = **5.0 × 10⁷ pc**.

## 3.9.3 Cosmology

### Doppler effect

For v ≪ c: **Δf/f = v/c** and **z = Δλ/λ = −v/c** (v positive for approach). Recession gives red shift (λ increases); use magnitudes, z = v/c. It applies to optical and radio frequencies, galaxies and quasars.

**Binary stars in the plane of orbit**: lines shift periodically. Maximum shift → orbital speed v; cycle time → period T; r = vT/2π.

**Worked example 6.** A 589.0 nm line shifts up to ±0.025 nm every 3.0 days: v = 3.00 × 10⁸ × 0.025/589.0 = **1.27 × 10⁴ m s⁻¹**; r = vT/2π = **5.25 × 10⁸ m**.

### Hubble's law and the Big Bang

**v = Hd**: the Universe is expanding. If H is constant, age ≈ **1/H** (H in s⁻¹).

**Worked example 7.** Hα (656.3 nm) observed at 669.4 nm; H = 70 km s⁻¹ Mpc⁻¹.

```
z = 13.1/656.3 = 0.0200;  v = zc = 5.99 × 10⁶ m s⁻¹
d = 5990 / 70 = 85.5 Mpc
H = 70 × 10³ / 3.08 × 10²² = 2.27 × 10⁻¹⁸ s⁻¹
age ≈ 1/H = 4.40 × 10¹⁷ s = 1.40 × 10¹⁰ years
```

**Big Bang (qualitative)**: the Universe began hot and dense, and has expanded and cooled. Evidence: the **cosmological microwave background radiation**, black-body radiation at about 2.7 K arriving almost uniformly from every direction, is stretched radiation from the hot early Universe; the **relative abundance of hydrogen and helium** (roughly 3 : 1 by mass) matches fusion predicted in the early Universe.

### Quasars

The **most distant measurable objects**, discovered as **bright radio sources**, with **large optical red shifts**. Large z → large d by Hubble's law; with I = P/4πd² this gives enormous power. They form from **active supermassive black holes**.

**Worked example 8.** z = 0.10, I = 2.0 × 10⁻¹² W m⁻², H = 70 km s⁻¹ Mpc⁻¹: v = 30 000 km s⁻¹, d = 429 Mpc = 1.32 × 10²⁵ m, P = 4πd²I = **4.4 × 10³⁹ W**.

### Exoplanets

**Direct detection is hard**: the planet is faint beside a bright star, and the angular separation is tiny. **Radial velocity**: the star orbits the common centre of mass, so its lines show a periodic Doppler shift. **Transit**: the planet crosses the star and intensity dips; the light curve is flat, dips to a flat bottom, recovers, and repeats each orbit. Fractional dip ≈ (r_planet/r_star)².

## Common errors

- Using M = fₑ/fₒ, or θ in degrees in θ ≈ λ/D.
- Forgetting a lower magnitude means brighter, or using d in metres in m − M = 5 log(d/10).
- Leaving H in km s⁻¹ Mpc⁻¹ when finding 1/H.

Then try the [practice questions](/resources/aqa-a-level-physics-astrophysics-practice/). For Paper 3 planning see [exam preparation](/resources/aqa-a-level-physics-exam-preparation/).

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), version 1.4, July 2026, AS and A-level exams June 2016 onwards: section 3.9 Astrophysics (A-level only).
