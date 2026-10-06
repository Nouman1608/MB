---
title: "AQA A-Level Physics: Nuclear physics (7408)"
seoTitle: "AQA A-Level Physics Nuclear Physics Study Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Nuclear physics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 8
syllabusTopics:
  - qualification: "a-level"
    topic: "nuclear-physics-aqa-alevel"
  - qualification: "a-level"
    topic: "nuclear-physics-aqa-alevel"
    subtopic: "radioactivity-aqa-alevel"
description: "Study guide for AQA A-level Physics 7408 section 3.8: Rutherford scattering, radiation, decay, nuclear radius, binding energy, fission and reactors."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches section 3.8 Nuclear physics of the AQA AS and A-level Physics (7407/7408) specification, version 1.3 (AS and A-level exams June 2016 onwards). It covers 3.8.1 Radioactivity, every sub-section from 3.8.1.1 to 3.8.1.8. Section 3.8 is **A-level only**: it is not in the AS, and at A-level it is assessed in Paper 2 (sections 6.2, 7 and 8, with sections 1 to 6.1 assumed). Sections 3.9-3.13 are options -- you study one, assessed in Paper 3 Section B -- but nuclear physics is compulsory for everyone.

Links: [course hub](/boards/aqa/a-level/physics/), [printable checklist](/checklists/aqa/a-level/physics/), [free diagnostics](/diagnostics/), [revision notes](/resources/aqa-a-level-physics-nuclear-physics-revision-notes/) and [practice questions](/resources/aqa-a-level-physics-nuclear-physics-practice/). Nuclide notation and α and β⁻ decay equations are in [Particles and radiation](/resources/aqa-a-level-physics-particles-and-radiation/).

## What this topic covers

| Spec | What you must be able to do |
|---|---|
| 3.8.1.1 | Rutherford scattering (qualitative); how models of the nucleus changed |
| 3.8.1.2 | α, β, γ properties and identification; thickness gauges; inverse-square law; background; medical risk and benefit. Required practical 12 |
| 3.8.1.3 | Random decay, decay constant, activity, half-life; molar mass; half-life from graphs |
| 3.8.1.4 | N–Z graph; decay modes; changes in N and Z; excited states; technetium-99m |
| 3.8.1.5 | Radius by α closest approach and electron diffraction; R = R₀A^(1/3); nuclear density |
| 3.8.1.6 | E = mc², mass difference, binding energy, u; fission and fusion energies; binding energy per nucleon graph |
| 3.8.1.7 | Induced fission, chain reaction, critical mass; moderator, control rods, coolant |
| 3.8.1.8 | Fuel, remote handling, shielding, shut-down, waste; risk and benefit |

Constants used: e = 1.60 × 10⁻¹⁹ C, ε₀ = 8.85 × 10⁻¹² F m⁻¹, Nᴀ = 6.02 × 10²³ mol⁻¹, proton mass 1.007276 u, neutron mass 1.008665 u, electron mass 0.000549 u.

## 3.8.1.1 Rutherford scattering

α particles were fired at thin gold foil in a vacuum, with a detector moved round the foil.

- **Most α particles went straight through.** Most of the atom is empty space.
- **A few were deflected through large angles.** There is a concentrated positive charge that repels them.
- **A very small number bounced back** (more than 90°). The positive charge and most of the mass are in a tiny central **nucleus**.

This replaced the "plum pudding" model (positive charge spread through the atom, electrons embedded in it), which could not explain large-angle scattering. Later the neutron was discovered and nuclear size measured (3.8.1.5): models change when evidence cannot be explained.

## 3.8.1.2 α, β and γ radiation

| | α | β⁻ | γ |
|---|---|---|---|
| Nature | helium nucleus | fast electron | EM radiation |
| Ionisation | strong | weaker | very weak |
| Range in air | a few cm | about a metre | follows inverse-square law |
| Stopped by | paper | a few mm of aluminium | reduced by thick lead |

**Identifying radiation.** Measure background first, then the count rate with no absorber, paper, a few mm of aluminium, and lead; subtract background each time. A large drop with paper means α; a further drop to background with aluminium means β; a count above background through aluminium that falls with lead means γ.

**Thickness gauges.** β for paper and aluminium foil (a thicker sheet absorbs more, the count rate falls, rollers are adjusted; α would be stopped completely). γ for steel, which stops β.

**Hazards.** α is least dangerous outside the body (dead skin stops it) and most dangerous inside, where all its energy goes into a little tissue.

**Inverse-square law for γ.** γ spreads from a point source with almost no absorption in air, so I = k/x², x being the distance from the source. Doubling x quarters the intensity: use long tongs, short exposure and lead-lined storage.

**Background radiation** comes from radon gas, rocks and building materials, cosmic rays, food and drink, medical uses and the nuclear industry. Subtract it.

**Medicine.** Diagnosis and therapy also damage healthy cells, so the benefit is weighed against the risk and doses kept as low as is useful.

### Required practical 12: inverse-square law for γ

Record counts from a γ source at a range of measured distances d from a GM tube, plus a background count. The true distance is x = d + e, with e an unknown offset (the source sits inside its holder). Corrected rate C = k/(d + e)², so **1/√C against d** is a straight line if the law holds, with d-intercept −e.

**Worked example.** Measured rate at 0.20 m is 510 min⁻¹; background is 30 min⁻¹. Corrected rate = 480 min⁻¹. At 0.40 m the corrected rate is 480 ÷ 4 = 120 min⁻¹, so the measured rate is **150 min⁻¹**.

## 3.8.1.3 Radioactive decay

Decay is **random**: you cannot predict which nucleus decays next. Each nucleus has the same constant probability of decay per unit time, the **decay constant λ**, so the rate of decay is proportional to the number present:

```
ΔN/Δt = −λN        N = N₀e^(−λt)
A = λN             A = A₀e^(−λt)        T½ = ln2 / λ
```

Activity is in becquerels (decays per second), so use λ in s⁻¹.

**Worked example (molar mass).** A sample contains 2.0 µg of an isotope with molar mass 131 g mol⁻¹ and half-life 8.0 days. Find its activity, and how long until the activity falls to 1.0 × 10⁸ Bq.

```
N = (2.0 × 10⁻⁶ / 131) × 6.02 × 10²³ = 9.19 × 10¹⁵
λ = ln2 / (8.0 × 86 400 s) = 1.00 × 10⁻⁶ s⁻¹
A = λN = 9.2 × 10⁹ Bq
t = ln(A₀/A) / λ = ln(9.22 × 10⁹ / 1.0 × 10⁸) × 8.0 / ln2 = 52 days
```

**Half-life from graphs.** On a decay curve, read the time to fall from any value to half of it, from several starting points, and average. On a log graph, ln A = ln A₀ − λt, so a plot of ln A against t is a straight line with **gradient −λ** and intercept ln A₀.

**Worked example (log graph).** A best-fit line of ln(A/Bq) against t falls from 9.20 to 7.12 in 50 min.

```
gradient = (7.12 − 9.20) / 50 = −0.0416 min⁻¹ → λ = 0.0416 min⁻¹
T½ = ln2 / 0.0416 = 16.7 min
```

**Applications.** Long-half-life waste must be stored for a very long time. Radioactive dating compares the remaining fraction with the start and solves N = N₀e^(−λt) for t.

## 3.8.1.4 Nuclear instability

On a graph of **N against Z**, stable light nuclei lie close to N = Z. Heavier stable nuclei bend above that line (N > Z): extra neutrons add strong-force attraction without adding repulsion.

| Unstable nucleus | Decay mode | Change in Z | Change in N |
|---|---|---|---|
| Neutron-rich (above the line) | β⁻ | +1 | −1 |
| Proton-rich (below the line) | β⁺ | −1 | +1 |
| Proton-rich | electron capture | −1 | +1 |
| Very heavy | α | −2 | −2 |

Equations, for a parent X and daughter Y:

```
β⁺:               ᴬ_Z X → ᴬ_(Z−1) Y + e⁺ + νₑ
electron capture: ᴬ_Z X + e⁻ → ᴬ_(Z−1) Y + νₑ
```

After α or β decay the daughter is often in an **excited state**. It drops to the ground state by emitting a γ photon, so γ energies equal gaps on a nuclear energy level diagram.

**Technetium-99m** is a long-lived excited state used in medical diagnosis. It emits only γ, which leaves the body to be detected and ionises little, and its short half-life means the activity in the patient falls quickly after the scan.

## 3.8.1.5 Nuclear radius

**Closest approach.** An α particle aimed head-on at a nucleus stops when all its kinetic energy has become electric potential energy:

```
Eₖ = Qq / (4πε₀r)
```

This gives an **upper limit** for the radius.

**Worked example.** A 5.0 MeV α particle approaches a gold nucleus (Z = 79) head-on.

```
Eₖ = 5.0 × 10⁶ × 1.60 × 10⁻¹⁹ = 8.0 × 10⁻¹³ J
r = (2e)(79e) / (4πε₀ Eₖ) = 4.5 × 10⁻¹⁴ m
```

**Electron diffraction.** High-energy electrons, with de Broglie wavelength about the size of a nucleus, diffract round it. Intensity against angle falls from a central maximum to a minimum, then a weaker maximum. For a circular object the first minimum is at **sin θ ≈ 0.61λ/R**. Electrons are leptons, so the strong force does not act on them: the method is more accurate than α scattering.

**Worked example.** Electrons of wavelength 3.0 × 10⁻¹⁵ m give a first minimum at 37°.

```
R = 0.61 × 3.0 × 10⁻¹⁵ / sin 37° = 3.0 × 10⁻¹⁵ m
```

Typical nuclear radii are a few fm (10⁻¹⁵ to 10⁻¹⁴ m). Data fit **R = R₀A^(1/3)**, R₀ about 1.2 fm; ln R against ln A has gradient 1/3. See also [estimation of physical quantities](/resources/aqa-alevel-physics-estimation-of-physical-quantities/).

**Constant density.** Volume ∝ R³ ∝ A, and mass ∝ A, so density is the same for all nuclei:

```
ρ = m / (4/3 π R₀³) = 1.67 × 10⁻²⁷ / (4/3 π (1.2 × 10⁻¹⁵)³) = 2.3 × 10¹⁷ kg m⁻³
```

## 3.8.1.6 Mass and energy

E = mc² applies to every energy change. The **mass difference** (mass defect) is the mass of the separate nucleons minus the mass of the nucleus. The **binding energy** is the energy needed to separate a nucleus into its nucleons, equal to the mass difference × c². Use 1 u = 931.5 MeV.

**Worked example.** Helium-4 atomic mass 4.002603 u.

```
nuclear mass = 4.002603 − 2(0.000549) = 4.001505 u
Δm = 2(1.007276) + 2(1.008665) − 4.001505 = 0.030377 u
binding energy = 0.030377 × 931.5 = 28.3 MeV  → 7.07 MeV per nucleon
```

**Binding energy per nucleon against A** rises steeply for light nuclei, peaks near A ≈ 56 (about 8.8 MeV per nucleon) and falls slowly for heavy nuclei. Energy is released when products have higher binding energy per nucleon:

- **Fusion** of light nuclei (left of the peak).
- **Fission** of heavy nuclei (right of the peak).

**Worked example (fission).** A nucleus with A = 236 (7.6 MeV per nucleon) splits into fragments with A = 140 (8.4 MeV) and A = 94 (8.6 MeV) plus 2 neutrons.

```
energy released = 140(8.4) + 94(8.6) − 236(7.6)
                = 1176 + 808.4 − 1793.6 ≈ 190 MeV
```

This physics lets society base energy decisions on evidence.

## 3.8.1.7 Induced fission

A thermal (slow) neutron absorbed by uranium-235 makes it split into two fragments and two or three fast neutrons. If at least one of these, on average, causes another fission, a **chain reaction** runs. The **critical mass** is the smallest mass of fuel that sustains it; with less, too many neutrons escape.

| Part | Function | Material choice | Examples |
|---|---|---|---|
| Moderator | slows fast neutrons to thermal speeds by elastic collisions | light nuclei (similar mass to a neutron), low neutron absorption | water, graphite |
| Control rods | absorb neutrons so each fission causes one more | absorb neutrons strongly | boron, cadmium |
| Coolant | carries heat to the heat exchanger | high specific heat capacity, flows easily | water, carbon dioxide gas |

**Moderation model.** In a head-on elastic collision with a stationary nucleus (mass M), momentum and kinetic energy are conserved and a neutron (mass m) leaves with (m − M)/(m + M) × its original velocity.

**Worked example.** Neutron (1 u) hits a carbon-12 nucleus (12 u) head-on.

```
v/u = (1 − 12)/13 = −0.846
fraction of Eₖ kept = 0.846² = 0.716 → 28% lost per collision
```

With hydrogen (M ≈ m) it can lose all its energy at once: light nuclei moderate best.

## 3.8.1.8 Safety aspects

- **Fuel**: uranium enriched in U-235. Spent fuel is highly radioactive, so it is moved by **remote handling**.
- **Shielding**: thick steel and concrete round the core absorb neutrons and γ.
- **Emergency shut-down**: control rods drop fully in and stop the chain reaction.
- **Waste**: high-level waste (spent fuel) is hot and very active; it is cooled under water, then sealed and stored long term. Low-level waste (clothing, tools) is sealed and buried.
- **Risk and benefit**: low-carbon, steady output against accident risk and waste.

## Common errors

- Applying I = k/x² before subtracting background.
- Using λ in h⁻¹ with N to get activity in Bq.
- Using atomic mass where nuclear mass is needed.
- Saying the moderator absorbs neutrons; the control rods do.

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, version 1.3, 1 June 2017 (AS and A-level exams June 2016 onwards), published by AQA. Section 3.8 Nuclear physics (A-level only).
