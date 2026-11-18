---
title: "OxfordAQA A-Level Physics (9630): Radius of the nucleus"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.12 – Nuclear energy"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "A"
order: 12.1
syllabusTopics:
  - qualification: "a-level"
    topic: "nuclear-energy-oxfordaqa-alevel"
    subtopic: "radius-of-the-nucleus-oxfordaqa-alevel-physics"
description: "Study guide to OxfordAQA 9630 section 3.12.1: closest approach of alpha particles, electron diffraction, R = R₀A^(1/3) from data and constant nuclear density."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.12.1, Radius of the nucleus, part of Section 3.12 Nuclear energy, which is International A-level only. The first worked examples on closest approach, electron diffraction and nuclear density are in the [nuclear radius, mass-energy and binding energy study guide](/resources/oxfordaqa-a-level-physics-nuclear-radius-mass-energy-and-binding-energy/). This page compares the two methods, analyses radius data on a logarithmic graph and works out what constant density means at the scale of single nucleons. Condense it with the [nuclear radius revision notes](/resources/oxfordaqa-a-level-physics-9630-radius-of-the-nucleus-oxfordaqa-alevel-physics-revision-notes/) and test yourself with the [nuclear radius practice questions](/resources/oxfordaqa-a-level-physics-9630-radius-of-the-nucleus-oxfordaqa-alevel-physics-practice/).

Values used: e = 1.60 × 10⁻¹⁹ C, 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻², h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, 1 MeV = 1.60 × 10⁻¹³ J, 1 u = 1.66 × 10⁻²⁷ kg, 1 fm = 10⁻¹⁵ m.

## What the specification asks for

| Statement | What you must be able to do |
|---|---|
| Estimate of radius from closest approach of alpha particles, using the Coulomb equation | Equate kinetic energy to electric potential energy and solve for the separation |
| Determination of radius from electron diffraction; the graph of intensity against angle | Explain why electrons are used; describe and interpret the graph |
| Knowledge of typical values for nuclear radius | Quote the order of magnitude and compare with the atom |
| R = R₀A^(1/3) derived from experimental data | Use the equation; find R₀ and the power from data |
| Interpretation as evidence for constant density; calculation of nuclear density | Show that density does not depend on A; calculate it |

## Method 1: closest approach of alpha particles

An alpha particle (charge +2e) heads straight for a nucleus of charge +Ze. As it approaches, the repulsion slows it. At the closest point it stops for an instant, so its initial kinetic energy has all become electric potential energy:

E_k = (2e)(Ze) / (4πε₀d), so d = 2Ze² / (4πε₀E_k)

### Worked example 1: gold

An alpha particle of kinetic energy 5.0 MeV approaches a gold nucleus (Z = 79) head-on. Find the distance of closest approach.

E_k = 5.0 × 1.60 × 10⁻¹³ = 8.0 × 10⁻¹³ J
d = (8.99 × 10⁹ × 2 × 79 × (1.60 × 10⁻¹⁹)²) / 8.0 × 10⁻¹³ = 3.64 × 10⁻²⁶ / 8.0 × 10⁻¹³ = **4.5 × 10⁻¹⁴ m** (45 fm)

### What the estimate tells you, and what it does not

The alpha particle has not touched the nucleus, so the radius is **less than** d. This is an **upper limit**, not a measurement. Doubling the alpha energy halves d (d ∝ 1/E_k), so faster alpha particles give a tighter limit. If the energy is raised far enough, the alpha particle reaches the nucleus, the strong interaction acts as well as the electric force, and scattering no longer follows the Coulomb prediction. The energy at which that departure first appears gives a better estimate of the radius.

Three assumptions sit behind the calculation:
- the collision is head-on, so all the kinetic energy becomes potential energy
- the nucleus is so much heavier that its recoil can be ignored
- only the electric force acts, and both particles behave as point charges

## Method 2: electron diffraction

Electrons are **leptons**: they do not feel the strong interaction, so they probe the charge of the nucleus without being pulled into it. Alpha particles, protons and neutrons do feel the strong interaction near the nucleus, which complicates any measurement.

For electrons to diffract from an object a few femtometres across, their de Broglie wavelength must be similar in size. That needs energies of hundreds of MeV. At these energies the electrons move at almost the speed of light, and the wavelength is found from λ = hc/E, where E is the electron energy.

Treating the nucleus as a small circular obstacle, the first minimum is at angle θ where sin θ ≈ 1.22λ/2R. A question gives you this relation if it is needed.

### The intensity against angle graph

- A large central maximum at 0°.
- Intensity falls to a first minimum, then rises to a much weaker second maximum.
- Further minima and maxima follow, each maximum lower than the last.
- The minima do not reach zero, because the edge of a nucleus is not sharp.
- A smaller nucleus, or electrons of shorter wavelength, push the first minimum to a larger angle.

### Worked example 2: choosing the electron energy

Carbon-12 has radius R = 1.2 × 12^(1/3) = 2.75 fm. What electron energy places the first minimum at 50°?

λ = 2R sin θ / 1.22 = (5.49 × 10⁻¹⁵ × sin 50°) / 1.22 = 3.45 × 10⁻¹⁵ m
E = hc/λ = (6.63 × 10⁻³⁴ × 3.00 × 10⁸) / 3.45 × 10⁻¹⁵ = 5.77 × 10⁻¹¹ J = **360 MeV**

### Comparing the two methods

| | Alpha closest approach | Electron diffraction |
|---|---|---|
| What it measures | An upper limit on the radius | The radius itself, from the minimum |
| Force involved | Electric repulsion only (until contact) | Electric attraction; no strong interaction |
| Typical energy | A few MeV | Hundreds of MeV |
| Main limitation | Never actually reaches the nucleus | Needs very high-energy beams; nucleus has no sharp edge |

## Typical values and R = R₀A^(1/3)

Nuclear radii range from about 1 fm for the lightest nuclei to about 7 fm for the heaviest. Atomic radii are of order 10⁻¹⁰ m, roughly ten thousand to a hundred thousand times larger.

Measurements on many nuclei fit **R = R₀A^(1/3)**, with R₀ ≈ 1.2 fm. Because this relation was found from data, you may be asked to extract it from data.

### Worked example 3: finding the relation from data

These radii (rounded, for illustration) were obtained by electron diffraction:

| A | 4 | 16 | 56 | 120 | 208 |
|---|---|---|---|---|---|
| R / fm | 1.9 | 3.0 | 4.6 | 5.9 | 7.1 |

If R = R₀A^n, then lg R = n lg A + lg R₀. A graph of lg R against lg A should be a straight line of gradient n and intercept lg R₀.

Using the end points: lg 1.9 = 0.279, lg 7.1 = 0.851, lg 4 = 0.602, lg 208 = 2.318.
Gradient n = (0.851 − 0.279) / (2.318 − 0.602) = 0.572 / 1.716 = **0.333**, so n = 1/3.
Intercept: lg R₀ = 0.851 − (1/3) × 2.318 = 0.079, so R₀ = 10^0.079 = **1.2 fm**.

On a real graph use a best-fit line through all the points, not two data points.

### Using ratios

Since R ∝ A^(1/3), the ratio of two radii is the cube root of the ratio of nucleon numbers. Uranium-238 compared with helium-4: (238/4)^(1/3) = 59.5^(1/3) = **3.9**. A nucleus with nearly sixty times as many nucleons is only about four times as wide.

## Constant density, nucleon by nucleon

Volume = (4/3)πR³ = (4/3)πR₀³A, so the volume of a nucleus is proportional to its nucleon number. Each nucleon takes up the same volume, whatever nucleus it is in. Mass is also proportional to A, so the density is the same for all nuclei: about 2.3 × 10¹⁷ kg m⁻³ using R₀ = 1.2 fm.

### Worked example 4: how closely packed are nucleons?

The number of nucleons per cubic metre in nuclear matter is

n = A / ((4/3)πR₀³A) = 3 / (4πR₀³) = 3 / (4π × (1.2 × 10⁻¹⁵)³) = **1.4 × 10⁴⁴ m⁻³**

The volume per nucleon is 1/n = 7.2 × 10⁻⁴⁵ m³, a cube of side (7.2 × 10⁻⁴⁵)^(1/3) = **1.9 fm**. Nucleons sit about 2 fm apart, roughly their own size: they are packed in contact, like the drops of an incompressible liquid. This is what constant density means physically.

### Worked example 5: how empty is the atom?

A gold nucleus (A = 197) has R = 1.2 × 197^(1/3) = 6.98 fm. Take the radius of a gold atom as 1.4 × 10⁻¹⁰ m. The fraction of the atom's volume filled by the nucleus is (6.98 × 10⁻¹⁵ / 1.4 × 10⁻¹⁰)³ = **1.2 × 10⁻¹³**. Almost all of the atom's mass is in about one ten-millionth of a millionth of its volume, which explains both the huge nuclear density and why most alpha particles pass through gold foil undeflected.

## Common mistakes

- Using charge e, not 2e, for the alpha particle.
- Leaving E_k in MeV in the Coulomb equation.
- Calling the closest approach "the radius" rather than an upper limit.
- Writing R = R₀A, or forgetting to cube when going from R to volume.
- Using λ = h/mv with the rest mass for electrons of hundreds of MeV; at these energies use λ = hc/E as the question directs.
- Saying a larger nucleus moves the first diffraction minimum to a larger angle. It moves it to a smaller angle.

## Exam technique

- **Estimate:** list the assumptions you make, then give a one- or two-significant-figure answer.
- **Explain why electrons are used:** say they are leptons and are not affected by the strong interaction, and that high energy gives a wavelength comparable with the nucleus.
- **Sketch** the intensity graph: central maximum, minima that do not reach zero, maxima falling in height.
- **Show that** density is constant: write ρ = mass/volume with both proportional to A and cancel A.
- **Determine** from data: plot lg R against lg A and use the gradient and intercept.

## Where next

- Condense with the [nuclear radius revision notes](/resources/oxfordaqa-a-level-physics-9630-radius-of-the-nucleus-oxfordaqa-alevel-physics-revision-notes/).
- Try the [nuclear radius practice questions](/resources/oxfordaqa-a-level-physics-9630-radius-of-the-nucleus-oxfordaqa-alevel-physics-practice/).
- Continue with the [mass and energy study guide](/resources/oxfordaqa-a-level-physics-9630-mass-and-energy-oxfordaqa-alevel-physics/).

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.12.1 Radius of the nucleus, published by OxfordAQA.
