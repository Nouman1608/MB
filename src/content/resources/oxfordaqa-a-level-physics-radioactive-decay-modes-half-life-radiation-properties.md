---
title: "OxfordAQA International AS and A-level Physics: Radioactive decay modes, half-life, radiation properties and the inverse-square law (9630)"
seoTitle: "OxfordAQA Physics 9630 Decay, Half-life, Radiation Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Radioactive decay modes, half-life, radiation properties and the inverse-square law"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "AS"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 104
syllabusTopics:
  - qualification: "a-level"
    topic: "particles-radiation-and-radioactivity"
    subtopic: "radioactivity-oxfordaqa-alevel"
description: "Study guide to decay equations, neutrinos, half-life, gamma and technetium-99m, radiation properties and the inverse-square law for OxfordAQA Physics."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-12
featured: false
reviewNote: "2026-11-08: reviewed by iftikhar-azeemi."
---

This guide teaches section 3.3.3 (Radioactivity) of the OxfordAQA International AS and A-level Physics (9630) specification, version 4.4, for exams from May/June 2020 onwards. Section 3.3 is shared content, so it applies to both International AS and International A-level. The spec says equations for exponential decay are required at International A2 only (section 3.9), so this guide uses half-life with whole numbers of half-lives and no exponential equations.

Use the [OxfordAQA Physics hub](/boards/oxfordaqa/a-level/physics/) and the [printable checklist](/checklists/oxfordaqa/a-level/physics/) to track progress. Condensed recall is in the [revision notes](/resources/oxfordaqa-a-level-physics-radioactive-decay-modes-half-life-radiation-properties-revision-notes/), exam-style work in the [practice questions](/resources/oxfordaqa-a-level-physics-radioactive-decay-modes-half-life-radiation-properties-practice/), and a quick check of where you stand in the [free diagnostics](/diagnostics/). The [measurements and errors guide](/resources/a-level-oxfordaqa-physics-measurements-and-their-errors/) covers uncertainty.

## Decay modes and equations

An unstable nucleus changes to a more stable one by emitting radiation. Write a nuclide as ᴬ_Z X, where A is the nucleon number and Z is the proton number. In every equation, total A and total Z are the same on both sides.

**Alpha decay.** The nucleus emits an alpha particle, which is a helium nucleus (⁴₂He). A falls by 4 and Z falls by 2.

Pu-239 (A = 239, Z = 94) → U-235 (A = 235, Z = 92) + α (A = 4, Z = 2)

Check: 235 + 4 = 239 and 92 + 2 = 94.

**Beta-minus decay.** One neutron becomes a proton, and the nucleus emits an electron and an antineutrino. A stays the same and Z rises by 1.

Sr-90 (A = 90, Z = 38) → Y-90 (A = 90, Z = 39) + e⁻ (A = 0, Z = −1) + antineutrino (A = 0, Z = 0)

**Beta-plus decay.** A proton changes into a neutron, and a positron and a neutrino are emitted. A stays the same and Z falls by 1.

Na-22 (A = 22, Z = 11) → Ne-22 (A = 22, Z = 10) + e⁺ (A = 0, Z = +1) + neutrino (A = 0, Z = 0)

The antineutrino goes with beta-minus and the neutrino with beta-plus. The beta particle is emitted from the nucleus; it is not an orbital electron.

**The decay of a free neutron.** A neutron outside a nucleus is itself unstable and decays by the same process as beta-minus decay:

n (A = 1, Z = 0) → p (A = 1, Z = 1) + e⁻ + antineutrino

Charge: 0 = +1 − 1 + 0. Nucleon number: 1 = 1 + 0 + 0.

### Why the neutrino was hypothesised

Alpha particles from a given nuclide leave with one fixed energy (or a few fixed values). Beta particles from a given nuclide have a continuous range of energies, from near zero up to a maximum. If only a daughter nucleus and a beta particle were emitted, energy and momentum would be shared in a fixed way, as in alpha decay. Measurements showed beta particles usually carry less energy than the total released, and the momentum did not balance. The neutrino was proposed to carry away the missing energy and momentum. It has no charge and interacts extremely weakly, so it was very hard to detect.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--02-aphy-nuclear-decay-modes.webp" width="900" height="990" alt="Graph of neutron number against proton number with a narrow band of stable nuclei above the N = Z line. Neutron-rich nuclei above the band decay by beta-minus (Z+1, N-1), proton-rich nuclei below it by beta-plus or electron capture (Z-1, N+1), and very heavy nuclei by alpha (Z-2, N-2)." loading="lazy">
  <figcaption>The position of a nucleus relative to the stable band decides its decay mode.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--03-aphy-nuclear-random-decay.webp" width="900" height="1170" alt="100 dice are thrown repeatedly and every six is removed. Which die goes is unpredictable, but the number left follows the smooth curve 100 x (5/6)^n, halving after about 3.8 throws." loading="lazy">
  <figcaption>Each nucleus has a constant chance of decaying, so unpredictable single decays give a smooth exponential for a large sample.</figcaption>
</figure>


## Half-life

The **half-life** of a radioactive nuclide is the time taken for half the unstable nuclei in a sample to decay. It is also the time for the activity (and the corrected count rate) to fall to half its value. Decay is random, so you cannot say when a particular nucleus will decay, only the probability.

After n half-lives the fraction left is (½)ⁿ.

| Half-lives | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| Fraction left | 1 | 1/2 | 1/4 | 1/8 | 1/16 | 1/32 | 1/64 |

**Worked example 1: whole half-lives.** A sample of iodine-131 has an activity of 5.6 × 10⁶ Bq. Its half-life is 8.0 days. Find the activity after 32 days, and the time for the activity to fall to 1/32 of its starting value.

32 days ÷ 8.0 days = 4 half-lives.
Activity = 5.6 × 10⁶ × (½)⁴ = 5.6 × 10⁶ ÷ 16 = **3.5 × 10⁵ Bq**.
1/32 = (½)⁵, so 5 half-lives: 5 × 8.0 = **40 days**.

### Determining half-life from graphical data

Count rates from a detector include background, so subtract the background rate first. Then plot corrected rate against time, draw a smooth curve, and find how long the rate takes to fall to half, from more than one starting point.

**Worked example 2.** A detector placed near a short-lived source gave these readings. The background rate is 25 counts per minute.

| t / min | 0 | 10 | 20 | 30 | 40 | 50 | 60 |
|---|---|---|---|---|---|---|---|
| Measured rate / counts per min | 825 | 513 | 322 | 206 | 135 | 92 | 66 |
| Corrected rate / counts per min | 800 | 488 | 297 | 181 | 110 | 67 | 41 |

From the smooth curve through the corrected points:
- 800 falls to 400 at t = 14 min, so the half-life is 14 min.
- 400 falls to 200 at t = 28 min, so a second half-life takes 28 − 14 = 14 min.
- 488 at t = 10 min falls to 244 at t = 24 min, again 14 min.

The half-life is **14 min**. Mark the construction lines on your graph.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--04-aphy-nuclear-half-life.webp" width="900" height="1010" alt="Corrected count rate against time for a source starting at 800 counts per minute. The rate halves every 14 minutes whether it starts from 800 or 488, so the half-life is constant and lambda = ln 2 / 14 = 0.0495 per minute." loading="lazy">
  <figcaption>The half-life is the same wherever on the decay curve you start.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--05-aphy-nuclear-log-graph.webp" width="900" height="990" alt="ln of corrected count rate against time is a straight line falling from 6.461 to 4.710 over 50 minutes. The gradient is -0.0350 per minute, so lambda = 0.0350 per minute and the half-life is 19.8 minutes." loading="lazy">
  <figcaption>A straight ln graph supports the exponential law and its gradient is minus lambda.</figcaption>
</figure>


## Gamma emission and technetium-99m

After alpha or beta decay the daughter nucleus is often left in a **nuclear excited state**, with spare energy, just as an atom can be in an excited state. It reaches its ground state by emitting a **gamma ray**, a photon of electromagnetic radiation with energy in the range of the nuclear energy-level differences. Gamma emission changes neither A nor Z.

**Technetium-99m** (the m means metastable) is an excited state that lasts long enough to be useful:

Tc-99m (A = 99, Z = 43) → Tc-99 (A = 99, Z = 43) + γ

It is used as a source in medical diagnosis. It is attached to a chemical that goes to the organ of interest, and a gamma camera outside the body detects the gamma rays. Reasons it suits this job:
- It emits gamma, which passes out of the body to be detected, with no alpha or beta emission, so the patient receives a lower dose than from a source with the same activity emitting those.
- Its half-life is about 6 hours (taken as 6.0 h below). That is long enough to prepare and scan, and short enough that the activity has largely gone within a day or two.

**Worked example 3.** A dose has an activity of 600 MBq at 08:00. With a half-life of 6.0 h, find the activity at 20:00.

20:00 − 08:00 = 12 h = 2 half-lives.
Activity = 600 × (½)² = **150 MBq**.

## Properties of alpha, beta and gamma radiation

| Property | Alpha (α) | Beta (β) | Gamma (γ) |
|---|---|---|---|
| What it is | Helium nucleus | Fast electron (β⁻) or positron (β⁺) | Electromagnetic photon |
| Relative charge | +2 | −1 or +1 | 0 |
| Ionising power | Strongest | Medium | Weakest |
| Range in air | A few cm | Around a metre or more | Intensity falls with distance, no definite range |
| Stopped by | Paper, skin | A few mm of aluminium | Greatly reduced by thick lead or concrete |

### Absorption experiments

To identify radiation from a source you place absorbers between the source and a Geiger-Müller tube and compare count rates. Use a fixed source-to-tube distance, count for the same time each run, and measure the background first with the source far away. Use tongs to handle the source.

**Worked example 4.** The background rate is 22 counts per minute. A source gave:

| Absorber | None | Paper | 3 mm aluminium | 6 mm aluminium | 6 mm aluminium + 30 mm lead |
|---|---|---|---|---|---|
| Measured rate | 982 | 975 | 322 | 112 | 31 |
| Corrected rate | 960 | 953 | 300 | 90 | 9 |

- Paper changes the rate by under 1%, so alpha is not a significant part of the radiation reaching the tube.
- Aluminium cuts the rate from 953 to 90, so beta is present.
- The remaining 90 is cut to 9 by lead, so gamma is present.

The source emits beta and gamma. Because alpha has a range of only a few centimetres in air, an alpha source must be very close to the tube (and the tube needs a thin window) for the paper test to be meaningful.

### Relative hazards

- **Outside the body:** alpha is stopped by the dead outer layer of skin, so it is least hazardous. Beta and especially gamma can reach deeper tissues.
- **Inside the body** (swallowed or inhaled): alpha is the most hazardous, because it is strongly ionising and deposits all its energy in a very small volume of tissue. Gamma mostly passes through, depositing less per unit length.

### Thickness gauging

The thicker the sheet, the more radiation it absorbs and the lower the transmitted count rate. A detector on the far side feeds back to the rollers.
- **Paper and aluminium foil:** beta, because it is absorbed by a few millimetres of aluminium so changes in thickness change the count rate noticeably.
- **Steel:** gamma, because beta would be stopped completely.
- The source needs a long half-life so the readings do not drift as the source decays.

**Worked example 5.** A paper-making line is set for a corrected count rate of 620 counts per minute, with a background of 20. The detector shows 520 counts per minute. Corrected rate = 500 counts per minute, which is 81% of the target. The lower rate means more absorption, so the paper is **too thick**, and the system narrows the rollers.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--01-aphy-nuclear-radiations.webp" width="900" height="840" alt="Alpha is stopped by paper, beta by a few mm of aluminium and gamma is only reduced by thick lead. Alpha makes the most ion pairs along its short track and gamma the fewest. Alpha is least hazardous outside the body and most hazardous inside it." loading="lazy">
  <figcaption>Alpha, beta and gamma differ in how far they penetrate and how strongly they ionise.</figcaption>
</figure>


## The inverse-square law for gamma radiation

Gamma from a small source spreads out in all directions, so the intensity at distance r from a point source is

I = I₀/r²

where I₀ is a constant for that source (the intensity at r = 1 unit). Doubling the distance cuts the intensity to a quarter. This assumes a point source and negligible absorption in air.

**Worked example 6.** At 0.25 m from a source, the corrected rate is 84 counts per second. Find the rate at 0.75 m.
r increases by a factor of 3, so rate falls by 3² = 9.
84 ÷ 9 = **9.3 counts per second**.

### Verifying the law

1. Measure background with the source away and subtract it.
2. Place the source at several distances r (for example 0.10 m to 0.40 m), measuring the distance carefully.
3. Count for a fixed time at each distance and find the corrected rate.
4. Plot corrected rate against 1/r². A straight line through the origin verifies the law. Alternatively, check that rate × r² is constant.

Example data (I₀ = 7.2 units): 720 at 0.10 m, 320 at 0.15 m, 180 at 0.20 m, 80 at 0.30 m, 45 at 0.40 m. Each value of rate × r² is 7.2.

Sources of error: the effective positions of the source and the tube's sensitive point are not known exactly, which matters most at small r. A count of N has a random spread of about √N, so use long counts.

### Safe handling

Because intensity drops as 1/r², distance is the cheapest protection. Use tongs, never hold a source, store it in a lead-lined container, point it away from people and keep exposure short.

## Background radiation

Background radiation is always present. Origins include radon gas from rocks, cosmic rays, gamma from the ground and buildings, food and drink, medical sources and fallout from past nuclear tests.

**Worked example 7.** Five two-minute counts with no source gave 38, 45, 41, 36 and 40. Total 200, mean 40 per two minutes, **20 counts per minute**. Subtract this from every measurement with the source.

## Common errors

- Writing the antineutrino with beta-plus decay, or the neutrino with beta-minus.
- Forgetting the background before finding half-life, or using one starting point only.
- Saying half-life is "half the time to decay" rather than the time for half the nuclei to decay.
- Calling alpha the most hazardous in every case: the answer reverses between a source held away from you and one swallowed or inhaled.
- Using 1/r rather than 1/r².

## Frequently asked questions

**What is technetium-99m used for?**
Technetium-99m is used as a source in medical diagnosis. Attached to a chemical that travels to the organ of interest, it emits only gamma rays, which pass out of the body to a gamma camera, and its half-life of about 6 hours is long enough to scan but short enough to fade within a day or two.

**How do you identify the radiation from a source using absorbers?**
Measure the count rate with no absorber, then with paper, aluminium and lead, subtracting the background each time. A large drop with paper shows alpha, a drop with a few millimetres of aluminium shows beta, and counts that remain until lead is added show gamma.

**What is the most ionising type of radiation?**
Alpha radiation is the most strongly ionising, beta is medium and gamma is the weakest. Alpha has a range of only a few centimetres in air.

**Which section of the OxfordAQA 9630 specification does this guide cover?**
It covers section 3.3.3 (radioactivity) of OxfordAQA International AS and A-level Physics (9630), version 4.4, which is shared AS and A-level content.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), specification version 4.4, for exams from May/June 2020 onwards, published by Oxford International AQA Examinations: section 3.3.3 Radioactivity.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--08-aphy-nuclear-reactor.webp" width="900" height="960" alt="Cross-section of a reactor with fuel rods in a moderator, control rods that absorb neutrons, coolant leaving hot and returning cool, and thick shielding. Heat passes to a heat exchanger, turbine and generator. Control rods hold k at 1." loading="lazy">
  <figcaption>The moderator slows neutrons and the control rods absorb them.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--09-aphy-nuclear-radius.webp" width="900" height="1110" alt="Nuclei with A = 4, 64 and 216 have radii 1.9, 4.8 and 7.2 fm from R = 1.2 A^(1/3) fm. R plotted against the cube root of A is a straight line of gradient R0. Mass and volume both scale with A, so every nucleus has the same density, about 2.3 x 10^17 kg per cubic metre." loading="lazy">
  <figcaption>Nuclear radius grows as the cube root of A, so nuclear density is constant.</figcaption>
</figure>

