---
title: "OCR A Level Physics A: Stellar spectra, Wien's law, Stefan's law and stellar radius (H556) -- Revision Notes"
seoTitle: "OCR A Level Physics Stellar Spectra Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Stellar spectra, Wien's law, Stefan's law and stellar radius"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 63
syllabusTopics:
  - qualification: "a-level"
    topic: "newtonian-world-and-astrophysics"
    subtopic: "astrophysics-and-cosmology-ocr-alevel"
description: "Condensed revision notes with formulas, methods and a self-test on spectra, gratings, Wien's law and Stefan's law for OCR A Level Physics A (H556)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
These notes condense section 5.5.2 (Electromagnetic radiation from stars), outcomes (a) to (k), of the OCR Advanced GCE in Physics A specification (H556), Version 3.0 (March 2026), for first assessment in 2017. H556 is the full A level. For the full explanations and longer worked examples, read the [study guide](/resources/ocr-a-level-physics-stellar-spectra-wiens-law-stefans-law-and-stellar/).

Other links: [OCR A Level Physics hub](/boards/ocr/a-level/physics/), [printable checklist](/checklists/ocr/a-level/physics/), [practice questions](/resources/ocr-a-level-physics-stellar-spectra-wiens-law-stefans-law-and-stellar-practice/), [photons study guide](/resources/ocr-a-level-physics-photons-photoelectric-effect-and-wave-particle-duality/) and the [free diagnostics](/diagnostics/).

## Key formulas

| Idea | Equation | Notes |
|---|---|---|
| Photon from a transition | hf = ΔE | ΔE = higher level minus lower level, so positive |
| Same, using wavelength | hc/λ = ΔE | ΔE in joules, λ in metres |
| eV to J | multiply by 1.60 × 10⁻¹⁹ | Do this before using h and c |
| Grating maxima | d sin θ = nλ | d = 1 / (lines per metre); n = 0, 1, 2 ... |
| Highest order | n < d/λ, whole number | Total maxima = 2n + 1 |
| Wien's displacement law | λmax ∝ 1/T, so λmax T = constant | T in kelvin; constant 2.90 × 10⁻³ m K |
| Stefan's law | L = 4πr²σT⁴ | σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴ |
| Radius | r = √( L / (4πσT⁴) ) | Get T from Wien's law first |
| Ratio form | r/r₀ = √(L/L₀) × (T₀/T)² | No σ needed |

Use the constants stated in each question.

## Energy levels (5.5.2(a), (b))

- An electron in an isolated gas atom has discrete energy levels only.
- Levels are negative because zero is the energy of a free electron at rest. A bound electron has less energy than that.
- The ground state is the lowest, most negative level. Levels get closer together and closer to zero as they go up.
- Ionisation from a level needs energy equal to the level's magnitude, which is the climb to zero.

## Emission, identification and spectrum types (5.5.2(c) to (f))

Method for a transition, in steps:

1. Write both levels with their signs.
2. ΔE = higher − lower (positive).
3. Convert eV to J.
4. f = ΔE/h, or λ = hc/ΔE.

| Spectrum | Look | Cause |
|---|---|---|
| Continuous | All colours, no gaps | Hot dense source |
| Emission line | Bright lines on dark | Hot low pressure gas; electrons drop levels, photons emitted |
| Absorption line | Dark lines on bright | Continuous light through cooler gas; matching photons absorbed, re-emitted in all directions |

Must-know distinctions:

- Emission and absorption lines of one element sit at the same wavelengths.
- Different elements have different level spacings, so the line patterns differ. This is how elements are identified in stars: match the whole set of measured wavelengths to laboratory gases.
- A photon is absorbed only if its energy equals a level gap exactly. Other photons pass through.
- A hot dense source gives a continuous spectrum; a hot thin gas gives lines.

## Diffraction grating (5.5.2(g), (h))

Method for a grating question:

1. Find d: lines per mm gives d = 1.00 × 10⁻³ / N metres.
2. Use d sin θ = nλ with n as a whole number.
3. Check sin θ is at most 1. If not, that order does not exist.
4. For the total number of maxima, count both sides and the centre: 2n + 1.

Reminders: higher order means larger angle. Longer wavelength means larger angle. A grating with more lines per mm has smaller d and spreads the maxima further apart. Proof of the equation and the details of a spectrometer are not required.

Worked reminder: 500 lines per mm, λ = 450 nm. d = 2.00 × 10⁻⁶ m, so sin θ = 0.225 and θ = 13.0° for the first order. The third order has sin θ = 0.675, so θ = 42.5°. The fourth would need sin θ = 0.9 (fine); the fifth needs 1.125, which is impossible, so the highest order is 4 and there are 9 maxima.

## Wien's law and Stefan's law (5.5.2(i) to (k))

Method for temperature: T = (2.90 × 10⁻³) / λmax, in kelvin. For a peak at 1.0 μm, T = 2900 K.

Method for radius:

1. Wien: T = constant / λmax.
2. Stefan: r² = L / (4πσT⁴).
3. Square root at the end.
4. Quote r in metres, and compare with the Sun's radius if asked.

Scaling shortcuts:

- T doubles at fixed r: L × 16.
- r doubles at fixed T: L × 4.
- r × 3 and T × 0.5: L × 9 × 1/16 = 0.5625.
- A cool star can still be very luminous if its radius is very large.

Worked reminder: peak at 910 nm gives T = 2.90 × 10⁻³ / 910 × 10⁻⁹ = 3190 K (keep the unrounded value until the last step). With L = 3.0 × 10²⁹ W, 4πσT⁴ = 7.35 × 10⁷ W m⁻², so r² = 4.08 × 10²¹ m² and r = 6.39 × 10¹⁰ m.

## More worked reminders

Photon from a transition: levels −5.4 eV and −2.0 eV. ΔE = 3.4 eV = 5.44 × 10⁻¹⁹ J. λ = hc/ΔE = 1.989 × 10⁻²⁵ / 5.44 × 10⁻¹⁹ = 3.66 × 10⁻⁷ m, which is 366 nm. The frequency is f = ΔE/h = 8.2 × 10¹⁴ Hz.

Unknown wavelength from a grating: 200 lines per mm, first order at 7.0°. d = 5.00 × 10⁻⁶ m, so λ = 5.00 × 10⁻⁶ × sin 7.0° = 6.09 × 10⁻⁷ m, which is 609 nm.

Temperature ratio: star P peaks at 400 nm and star Q at 1200 nm. Q is three times as long, so P is three times as hot in kelvin.

## Must-know distinctions

- Emission line spectrum: bright lines, hot thin gas. Absorption line spectrum: dark lines, cooler gas in front of a continuous source.
- Wien's law fixes where the peak is. Stefan's law fixes how much power is emitted in total. Use Wien for T, then Stefan for r.
- Temperature in Stefan's law is raised to the fourth power; radius is squared.
- The order n counts the whole wavelengths of path difference. The grating spacing d is the slit separation, not the number of lines.

## Exam technique checklist

- Write the equation first, then the substitution, then the answer with a unit.
- Keep unrounded values until the last line, especially before a fourth power.
- For an identification question, quote the measured wavelengths and the laboratory values side by side.
- For a total number of maxima, state the highest order before doubling and adding one.

## Quick self-test

1. State the energy of an electron that has just escaped an atom.
2. A transition releases 4.1 × 10⁻¹⁹ J. Find the photon wavelength and frequency.
3. How many lines would you expect from an atom with five levels if every drop were allowed?
4. Light of wavelength 450 nm meets a grating with 500 lines per mm. What is the angle of the first maximum?
5. A star peaks at 1.0 μm. Find its temperature.
6. A star at 9000 K: what is its peak wavelength?
7. A star's temperature doubles with radius unchanged. By what factor does L change?
8. A star has three times the radius of another at the same temperature. Compare the luminosities.
9. A photon has frequency 6.0 × 10¹⁴ Hz. Find its energy in eV.
10. Why does a cool gas in front of a hot source give dark lines?

### Answers

1. Zero.
2. λ = hc/ΔE = 6.63 × 10⁻³⁴ × 3.00 × 10⁸ / 4.1 × 10⁻¹⁹ = 4.85 × 10⁻⁷ m, which is 485 nm. f = ΔE/h = 6.2 × 10¹⁴ Hz.
3. 4 + 3 + 2 + 1 = 10.
4. d = 2.00 × 10⁻⁶ m. sin θ = 450 × 10⁻⁹ / 2.00 × 10⁻⁶ = 0.225, so θ = 13.0°.
5. T = 2.90 × 10⁻³ / 1.0 × 10⁻⁶ = 2900 K.
6. λmax = 2.90 × 10⁻³ / 9000 = 3.2 × 10⁻⁷ m, which is 322 nm (ultraviolet).
7. L ∝ T⁴, so L increases by 2⁴ = 16.
8. L ∝ r², so the larger star is 9 times more luminous.
9. E = hf = 6.63 × 10⁻³⁴ × 6.0 × 10¹⁴ = 3.98 × 10⁻¹⁹ J, which is 2.49 eV.
10. Atoms absorb photons matching their level gaps. These are re-emitted in all directions, so the beam loses those wavelengths.

## Where marks are usually lost

- Putting a negative sign on ΔE for the photon, or a positive sign on an energy level.
- Using eV with h and c without converting to joules.
- Using d as lines per metre rather than its reciprocal.
- Forgetting that n must be a whole number when finding the highest order.
- Counting maxima on one side only.
- Using Celsius in Wien's law or Stefan's law.
- Rounding the temperature early and then raising it to the fourth power.
- Describing absorption as "the photons disappear" without saying they are re-emitted in random directions.
- Claiming one matching line proves an element is present, rather than a full set of lines.

## Official syllabus

This page follows section 5.5.2 of the OCR Advanced GCE in Physics A (H556) specification, Version 3.0 (March 2026), for first assessment in 2017, published by OCR.
