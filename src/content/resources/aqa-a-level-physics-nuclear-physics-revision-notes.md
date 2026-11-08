---
title: "AQA A-Level Physics: Nuclear physics (7408) -- Revision Notes"
seoTitle: "AQA A-Level Physics Nuclear Physics Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes for AQA A-level Physics 7408 Nuclear physics: key equations, decay modes, binding energy, reactors and a quick self-test."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-06
featured: false
reviewNote: "2026-11-08: reviewed by hassan."
---

For full explanations and worked examples, use the [Nuclear physics study guide](/resources/aqa-a-level-physics-nuclear-physics/).

These notes cover section 3.8 Nuclear physics (3.8.1.1 to 3.8.1.8) of the AQA AS and A-level Physics (7407/7408) specification, version 1.4 (AS and A-level exams June 2016 onwards). The section is **A-level only** and is assessed in Paper 2. Sections 3.9-3.13 are options -- you study one, assessed in Paper 3 Section B -- while this section is compulsory.

Links: [AQA A-level Physics hub](/boards/aqa/a-level/physics/), [printable checklist](/checklists/aqa/a-level/physics/), [free diagnostics](/diagnostics/) and the [practice questions](/resources/aqa-a-level-physics-nuclear-physics-practice/). Decay equations and nuclide notation from AS: [Particles and radiation revision notes](/resources/aqa-a-level-physics-particles-and-radiation-revision-notes/). For MeV and J conversions: [SI units and prefixes](/resources/aqa-alevel-physics-use-of-si-units-and-their-prefixes/).

## Equations

| Quantity | Equation | Notes |
|---|---|---|
| Inverse-square law (γ) | I = k/x² | correct for background first |
| Rate of decay | ΔN/Δt = −λN | λ = probability of decay per unit time |
| Number remaining | N = N₀e^(−λt) | same form for A and count rate |
| Activity | A = λN | Bq needs λ in s⁻¹ |
| Half-life | T½ = ln2/λ | |
| Number of nuclei | N = (mass/molar mass) × Nᴀ | molar mass in the same mass unit |
| Closest approach | Eₖ = Qq/(4πε₀r) | gives an upper limit for R |
| Nuclear radius | R = R₀A^(1/3) | R₀ about 1.2 fm |
| Mass-energy | E = mc² | 1 u = 931.5 MeV |
| Binding energy | (mass of nucleons − mass of nucleus) × c² | use nuclear, not atomic, mass |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--02-aphy-nuclear-decay-modes.webp" width="900" height="990" alt="Graph of neutron number against proton number with a narrow band of stable nuclei above the N = Z line. Neutron-rich nuclei above the band decay by beta-minus (Z+1, N-1), proton-rich nuclei below it by beta-plus or electron capture (Z-1, N+1), and very heavy nuclei by alpha (Z-2, N-2)." loading="lazy">
  <figcaption>The position of a nucleus relative to the stable band decides its decay mode.</figcaption>
</figure>


## 3.8.1.1 Rutherford scattering

| Observation | Conclusion |
|---|---|
| Most α pass straight through | atom mostly empty space |
| Some deflected through large angles | small, concentrated positive charge |
| Very few rebound | nucleus holds most of the mass |

Plum-pudding model replaced by the nuclear model; later the neutron, then measured nuclear radii. Models change when evidence demands it.

## 3.8.1.2 α, β and γ

- **α**: strongly ionising, few cm in air, stopped by paper.
- **β⁻**: less ionising, about a metre in air, stopped by a few mm of aluminium.
- **γ**: weakly ionising, obeys I = k/x² in air, reduced by thick lead.
- **Absorption test**: background → no absorber → paper → aluminium → lead. Subtract background each time.
- **Thickness gauges**: β for paper and aluminium foil; γ for steel.
- **Safe handling**: tongs (distance), short time, lead-lined storage, never point a source at people.
- **Background sources**: radon, rocks and buildings, cosmic rays, food, medical, nuclear industry.
- **Medicine**: weigh benefit against the risk to healthy tissue.

### Method in steps: Required practical 12

1. Measure background count over a long time.
2. Record counts at several measured distances d.
3. Corrected count rate C = measured − background.
4. Plot 1/√C against d: straight line confirms I ∝ 1/x².
5. The d-intercept gives −e, the offset between measured and true distance.

## 3.8.1.3 Radioactive decay

- Random and spontaneous; constant decay probability λ for each nucleus.
- Equal times give equal fractional falls.
- **Modelling**: throw many dice and remove each one showing a six. Every die has the same probability (1/6) per throw, so about 1/6 of those left go each throw and the number falls exponentially, like nuclei with constant λ.
- **Decay curve**: read several halvings and average.
- **Log graph**: ln A = ln A₀ − λt. Gradient = −λ, intercept = ln A₀.
- Uses: waste storage times, radioactive dating.

**Worked reminder.** T½ = 2.0 h. Fraction left after 5.0 h:

```
λ = ln2 / 2.0 = 0.347 h⁻¹     N/N₀ = e^(−0.347 × 5.0) = 0.177
```

**Worked reminder.** Nuclei in 1.0 g of a nuclide with molar mass 100 g mol⁻¹: N = (1.0/100) × 6.02 × 10²³ = **6.02 × 10²¹**. Keep the mass and molar mass in the same unit.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--01-aphy-nuclear-radiations.webp" width="900" height="840" alt="Alpha is stopped by paper, beta by a few mm of aluminium and gamma is only reduced by thick lead. Alpha makes the most ion pairs along its short track and gamma the fewest. Alpha is least hazardous outside the body and most hazardous inside it." loading="lazy">
  <figcaption>Alpha, beta and gamma differ in how far they penetrate and how strongly they ionise.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--03-aphy-nuclear-random-decay.webp" width="900" height="1170" alt="100 dice are thrown repeatedly and every six is removed. Which die goes is unpredictable, but the number left follows the smooth curve 100 x (5/6)^n, halving after about 3.8 throws." loading="lazy">
  <figcaption>Each nucleus has a constant chance of decaying, so unpredictable single decays give a smooth exponential for a large sample.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--04-aphy-nuclear-half-life.webp" width="900" height="1010" alt="Corrected count rate against time for a source starting at 800 counts per minute. The rate halves every 14 minutes whether it starts from 800 or 488, so the half-life is constant and lambda = ln 2 / 14 = 0.0495 per minute." loading="lazy">
  <figcaption>The half-life is the same wherever on the decay curve you start.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--05-aphy-nuclear-log-graph.webp" width="900" height="990" alt="ln of corrected count rate against time is a straight line falling from 6.461 to 4.710 over 50 minutes. The gradient is -0.0350 per minute, so lambda = 0.0350 per minute and the half-life is 19.8 minutes." loading="lazy">
  <figcaption>A straight ln graph supports the exponential law and its gradient is minus lambda.</figcaption>
</figure>


## 3.8.1.4 Nuclear instability

| Region of N–Z graph | Decay | Z | N |
|---|---|---|---|
| Above stability line (too many n) | β⁻ | +1 | −1 |
| Below line (too many p) | β⁺ or electron capture | −1 | +1 |
| Very heavy | α | −2 | −2 |

- Stable light nuclei: N ≈ Z. Heavier stable nuclei: N > Z.
- β⁺: X → Y + e⁺ + νₑ. Electron capture: X + e⁻ → Y + νₑ.
- Excited daughter → γ emission; γ energy = gap between nuclear levels.
- **Technetium-99m**: pure γ emitter, short half-life, used in diagnosis.

## 3.8.1.5 Nuclear radius

- **α closest approach**: overestimates R (α never touches); α can be affected by the strong force near the nucleus.
- **Electron diffraction**: electrons feel no strong force; intensity against angle shows a central maximum, a first minimum, weaker maxima. First minimum: sin θ ≈ 0.61λ/R.
- Typical R: 10⁻¹⁵ to 10⁻¹⁴ m.
- ln R against ln A: gradient 1/3, intercept ln R₀.
- V ∝ A and mass ∝ A, so density is constant, about 10¹⁷ kg m⁻³.

**Worked reminder.** Radius of a nucleus with A = 64, R₀ = 1.2 fm: R = 1.2 × 64^(1/3) = **4.8 fm**.

## 3.8.1.6 Mass and energy

- **Atomic mass unit**: 1 u is one-twelfth of the mass of a carbon-12 atom (1.661 × 10⁻²⁷ kg); 1 u = 931.5 MeV.
- **Mass difference**: mass of separate nucleons minus mass of nucleus.
- **Binding energy**: energy needed to separate the nucleus into nucleons.
- Binding energy per nucleon peaks near A ≈ 56 (about 8.8 MeV).
- **Fusion** (left of peak) and **fission** (right of peak) both increase binding energy per nucleon, so release energy.
- Energy released = total binding energy after − total binding energy before, or mass lost × 931.5 MeV.
- Atomic mass → nuclear mass: subtract Z × 0.000549 u.

### Method in steps: binding energy per nucleon

1. Convert the atomic mass to nuclear mass (subtract Z electron masses).
2. Add Z proton masses and (A − Z) neutron masses.
3. Mass difference = step 2 − step 1, in u.
4. Multiply by 931.5 to get MeV (or by c² after converting to kg, for J).
5. Divide by A for binding energy per nucleon.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--07-aphy-nuclear-binding-curve.webp" width="900" height="980" alt="Binding energy per nucleon rises steeply for light nuclei, peaks near iron-56 at about 8.8 MeV and falls slowly to about 7.6 MeV for uranium-235. Fusion of light nuclei and fission of heavy nuclei both move nuclei towards the peak and release energy: 17.6 MeV for deuterium plus tritium and about 184 MeV for a uranium-235 fission." loading="lazy">
  <figcaption>Both fusion and fission release energy because their products sit nearer the peak of the curve.</figcaption>
</figure>


### Method in steps: energy released in a reaction

1. Add the masses on each side (atomic masses are fine if the electrons balance).
2. Mass lost = mass before − mass after.
3. Energy released = mass lost × 931.5 MeV.
4. Check that nucleon number and charge balance in the equation first.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--06-aphy-nuclear-mass-defect.webp" width="900" height="920" alt="The four separate nucleons of helium-4 weigh 4.031882 u but the nucleus 4.001505 u. The mass defect 0.030377 u is equivalent to 28.3 MeV, the binding energy, which is 7.07 MeV per nucleon." loading="lazy">
  <figcaption>The binding energy is the energy equivalent of the mass defect.</figcaption>
</figure>


## 3.8.1.7 Induced fission

- Thermal neutron absorbed by U-235 → two fragments + 2 or 3 fast neutrons + energy.
- **Chain reaction**: each fission causes at least one more.
- **Critical mass**: minimum mass for a self-sustaining chain reaction.
- **Moderator** (water, graphite): slows neutrons by elastic collisions; light nuclei, low absorption.
- **Control rods** (boron, cadmium): absorb neutrons; moved in or out to keep one further fission per fission.
- **Coolant** (water, carbon dioxide): removes heat; high specific heat capacity, flows easily.
- Head-on elastic collision, neutron mass m, nucleus M: v/u = (m − M)/(m + M).

## 3.8.1.8 Safety aspects

- Enriched uranium fuel; spent fuel moved by remote handling.
- Steel and concrete shielding absorbs neutrons and γ.
- Emergency shut-down: control rods fully inserted.
- High-level waste: cooled under water, then sealed and stored long term. Low-level waste: sealed and buried.
- Weigh low-carbon, reliable output against accident risk and waste.

## Must-know distinctions

- **Decay constant** (probability per unit time) vs **activity** (decays per second).
- **Moderator** slows neutrons; **control rods** absorb them.
- **Mass difference** (mass, u or kg) vs **binding energy** (energy, MeV or J).
- **β⁺ decay** emits a positron; **electron capture** absorbs an electron. Both: Z − 1, N + 1.
- **Closest approach** gives an upper limit; **electron diffraction** gives the radius.

## Quick self-test

1. Corrected γ count rate is 960 min⁻¹ at 0.10 m. Find it at 0.30 m.
2. T½ = 12 h. What fraction remains after 2 days?
3. T½ = 30 s. Find λ.
4. Find the ratio of nuclear radii for A = 216 and A = 27.
5. Convert a mass difference of 0.0050 u to MeV.
6. How do Z and N change in α decay?
7. Which radiation is used to monitor steel thickness?
8. Why does electron diffraction give a better radius than α scattering?
9. Find the activity of 3.0 × 10¹⁸ nuclei with λ = 2.0 × 10⁻¹⁰ s⁻¹.
10. Find the mass equivalent of 1.0 MeV in kg.
11. A neutron hits an oxygen-16 nucleus head-on elastically. What fraction of its kinetic energy does it keep?
12. Which side of the binding energy per nucleon peak releases energy by fusion?

### Answers

1. Distance × 3 → rate ÷ 9: 960/9 = **107 min⁻¹**.
2. 48 h = 4 half-lives: (1/2)⁴ = **1/16** (0.0625).
3. λ = ln2/30 = **0.0231 s⁻¹**.
4. (216/27)^(1/3) = 8^(1/3) = **2**.
5. 0.0050 × 931.5 = **4.66 MeV**.
6. **Z − 2, N − 2**.
7. **γ** (β is stopped by steel).
8. Electrons are leptons, so **no strong-force interaction**; α results only give an upper limit.
9. A = λN = **6.0 × 10⁸ Bq**.
10. m = E/c² = 1.6 × 10⁻¹³ / (3.00 × 10⁸)² = **1.78 × 10⁻³⁰ kg**.
11. ((1 − 16)/17)² = (15/17)² = **0.779**.
12. **The low-A side** (A below about 56).

## Where marks are usually lost

- Leaving background in the count rate before testing the inverse-square law.
- Mixing time units: λ in day⁻¹ or h⁻¹ used with A = λN to give "Bq".
- Forgetting molar mass is usually in g mol⁻¹ when the sample mass is in kg.
- Giving the gradient of a ln A graph as λ without saying λ = −gradient.
- Using atomic masses in binding-energy sums without subtracting electron masses.
- Treating closest-approach distance as the radius rather than an upper limit.
- Saying control rods "slow" neutrons, or the moderator "absorbs" them.
- Writing β⁺ or electron-capture equations without the neutrino, or with an antineutrino.
- Naming fission and fusion regions the wrong way round on the binding energy per nucleon graph.

## Frequently asked questions

**How do you find half-life from a graph of ln A against time?**
Since ln A = ln A₀ − λt, a graph of ln A against t is a straight line with gradient −λ and intercept ln A₀. The decay constant is minus the gradient, and the half-life is ln 2/λ.

**How do you convert atomic mass to nuclear mass?**
Subtract the mass of the electrons: nuclear mass = atomic mass − Z × 0.000549 u. Binding energy calculations need nuclear mass, not atomic mass.

**Why does electron diffraction give a better nuclear radius than alpha scattering?**
Electrons are leptons and do not feel the strong force, so electron diffraction measures the radius directly. Alpha closest-approach distances give only an upper limit for the radius.

**What decay does a proton-rich nucleus undergo?**
A nucleus below the line of stability on an N-Z graph has too many protons and decays by beta-plus emission or electron capture. In both, Z decreases by 1 and N increases by 1.

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, version 1.4, July 2026 (AS and A-level exams June 2016 onwards), published by AQA. Section 3.8 Nuclear physics (A-level only).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--08-aphy-nuclear-reactor.webp" width="900" height="960" alt="Cross-section of a reactor with fuel rods in a moderator, control rods that absorb neutrons, coolant leaving hot and returning cool, and thick shielding. Heat passes to a heat exchanger, turbine and generator. Control rods hold k at 1." loading="lazy">
  <figcaption>The moderator slows neutrons and the control rods absorb them.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--09-aphy-nuclear-radius.webp" width="900" height="1110" alt="Nuclei with A = 4, 64 and 216 have radii 1.9, 4.8 and 7.2 fm from R = 1.2 A^(1/3) fm. R plotted against the cube root of A is a straight line of gradient R0. Mass and volume both scale with A, so every nucleus has the same density, about 2.3 x 10^17 kg per cubic metre." loading="lazy">
  <figcaption>Nuclear radius grows as the cube root of A, so nuclear density is constant.</figcaption>
</figure>
