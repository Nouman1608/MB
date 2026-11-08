---
title: "OCR A Level Physics A: Radioactive decay, activity, half-life and dating (H556)"
seoTitle: "OCR A Level Physics Radioactive Decay & Half-life Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Radioactive decay, activity, half-life and dating"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 71
syllabusTopics:
  - qualification: "a-level"
    topic: "particles-and-medical-physics"
    subtopic: "nuclear-and-particle-physics-ocr-alevel"
description: "Study guide to radioactive decay, activity, half-life, exponential decay, simulations and dating for OCR A Level Physics A (H556), with worked examples."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-12
featured: false
reviewNote: "2026-11-08: reviewed by iftikhar-azeemi."
---
This guide teaches section 6.4.3 (Radioactivity), statements (a) to (h), of the OCR Advanced GCE in Physics A (H556) specification, Version 3.0 (March 2026), for first assessment in 2017. H556 is the full A level. Module 6 content is assessed in Exploring physics (component 02) and Unified physics (component 03). The nuclear atom, fundamental particles, binding energy, fission and fusion are covered in separate pages. Revise with the [revision notes](/resources/ocr-a-level-physics-radioactive-decay-activity-half-life-and-dating-revision-notes/), then try the [practice set](/resources/ocr-a-level-physics-radioactive-decay-activity-half-life-and-dating-practice/). The course hub is [OCR A Level Physics](/boards/ocr/a-level/physics/), the printable list is the [checklist](/checklists/ocr/a-level/physics/), and the [free 10-minute diagnostics](/diagnostics/) show where to start.

Any constant or reference value in a worked example is given as data, as it should be in your own working.

## What this guide covers

| Statement | You must be able to |
|---|---|
| 6.4.3(a) | describe decay as spontaneous and random |
| 6.4.3(b)(i) | give the nature, penetration and range of α, β and γ |
| 6.4.3(b)(ii) | describe how to investigate absorption |
| 6.4.3(c) | write and balance decay equations for α, β⁻ and β⁺ |
| 6.4.3(d) | use activity and the decay constant, A = λN |
| 6.4.3(e) | use λt½ = ln 2; describe measuring a half-life (protactinium) |
| 6.4.3(f) | use A = A₀e^(−λt) and N = N₀e^(−λt); simulate with dice |
| 6.4.3(g) | use graphs and a spreadsheet to model ΔN/Δt = −λN |
| 6.4.3(h) | explain radioactive dating, such as carbon-dating |

## 6.4.3(a) Spontaneous and random decay

Decay is **spontaneous**: it needs no trigger, and temperature, pressure or chemical bonding do not change it. Decay is **random**: you cannot predict when a particular nucleus will decay or which one will go next. Every undecayed nucleus has the same fixed chance of decaying in each second. A count rate from a source therefore scatters about an average, and a large sample follows a smooth pattern even though each nucleus is unpredictable. That link between a probability per unit time and a smooth curve is the basis of everything below.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--01-aphy-nuclear-radiations.webp" width="900" height="840" alt="Alpha is stopped by paper, beta by a few mm of aluminium and gamma is only reduced by thick lead. Alpha makes the most ion pairs along its short track and gamma the fewest. Alpha is least hazardous outside the body and most hazardous inside it." loading="lazy">
  <figcaption>Alpha, beta and gamma differ in how far they penetrate and how strongly they ionise.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--03-aphy-nuclear-random-decay.webp" width="900" height="1170" alt="100 dice are thrown repeatedly and every six is removed. Which die goes is unpredictable, but the number left follows the smooth curve 100 x (5/6)^n, halving after about 3.8 throws." loading="lazy">
  <figcaption>Each nucleus has a constant chance of decaying, so unpredictable single decays give a smooth exponential for a large sample.</figcaption>
</figure>


## 6.4.3(b)(i) Alpha, beta and gamma

| | α | β⁻ | β⁺ | γ |
|---|---|---|---|---|
| Nature | helium nucleus, 2 protons and 2 neutrons, charge +2e | fast electron from the nucleus, charge −e | positron, charge +e | photon of electromagnetic radiation |
| Ionisation | strongest | moderate | moderate | weakest |
| Range in air | a few centimetres | of the order of metres | short, then annihilates | falls with distance, no fixed range |
| Stopped by | paper or skin | a few millimetres of aluminium | a few millimetres of aluminium | never fully; thick lead reduces it |

An α-particle loses its energy quickly because it ionises so heavily, so all α-particles from a given decay stop at nearly the same distance. γ-rays are absorbed at random, so their intensity falls exponentially with thickness and never reaches zero.

## 6.4.3(b)(ii) Investigating absorption

Apparatus: a Geiger-Müller tube and counter (or a data logger), a source in a holder, absorbers of known thickness (paper, aluminium sheets, lead sheets) and a ruler.

1. With the source far away or shielded, count for a long time, such as five minutes, and find the **background** count rate in counts per second.
2. Fix the source and tube a set distance apart, because count rate also falls with distance.
3. Insert one absorber, count for a fixed time such as 60 s, and record the count.
4. Add more absorber, measuring thickness with a micrometer, and repeat.
5. Subtract the background rate from each count rate and plot corrected count rate against thickness.

Expected results: α shows a sudden drop to background at the range when you increase an air gap or add paper. β drops to background at a definite thickness of aluminium. γ falls gradually and exponentially with thickness of lead. Repeat each reading and average to reduce random error.

**Safety:** handle sources with tongs, never point them at anyone, keep them stored when not in use, keep time and exposure short and the distance as large as the experiment allows, and wash hands afterwards.

## 6.4.3(c) Decay equations

Nucleon number A and proton number Z are conserved in a nuclear equation, and charge balances. A β particle comes with a neutrino or antineutrino, which carries no charge and has no nucleons.

| Decay | Effect on the nucleus |
|---|---|
| α | A falls by 4, Z falls by 2 |
| β⁻ | A unchanged, Z rises by 1 (neutron becomes proton) |
| β⁺ | A unchanged, Z falls by 1 (proton becomes neutron) |

Worked equations:

- α: ²³⁰₉₀Th → ²²⁶₈₈Ra + ⁴₂α (nucleon number 230 = 226 + 4; proton number 90 = 88 + 2)
- β⁻: ⁹⁰₃₈Sr → ⁹⁰₃₉Y + ⁰₋₁e + ν̄ (Z: 38 = 39 − 1)
- β⁺: ²²₁₁Na → ²²₁₀Ne + ⁰₊₁e + ν (Z: 11 = 10 + 1)

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--02-aphy-nuclear-decay-modes.webp" width="900" height="990" alt="Graph of neutron number against proton number with a narrow band of stable nuclei above the N = Z line. Neutron-rich nuclei above the band decay by beta-minus (Z+1, N-1), proton-rich nuclei below it by beta-plus or electron capture (Z-1, N+1), and very heavy nuclei by alpha (Z-2, N-2)." loading="lazy">
  <figcaption>The position of a nucleus relative to the stable band decides its decay mode.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--05-aphy-nuclear-log-graph.webp" width="900" height="990" alt="ln of corrected count rate against time is a straight line falling from 6.461 to 4.710 over 50 minutes. The gradient is -0.0350 per minute, so lambda = 0.0350 per minute and the half-life is 19.8 minutes." loading="lazy">
  <figcaption>A straight ln graph supports the exponential law and its gradient is minus lambda.</figcaption>
</figure>


## 6.4.3(d) Activity and the decay constant

**Activity** A is the number of decays per second, measured in becquerel (Bq). The **decay constant** λ is the chance per unit time that a given nucleus decays. The decay rate is proportional to the number of undecayed nuclei N:

A = λN, and ΔN/Δt = −λN

The minus sign shows that N falls. The unit of λ is s⁻¹, or h⁻¹ and so on if you use other time units.

**Worked example 1.** An isotope has half-life 5.0 hours. A sample holds 4.0 × 10¹⁴ undecayed nuclei. Find its activity.

λ = ln 2 / (5.0 × 3600 s) = 3.85 × 10⁻⁵ s⁻¹
A = λN = 3.85 × 10⁻⁵ × 4.0 × 10¹⁴ = **1.5 × 10¹⁰ Bq**

## 6.4.3(e) Half-life

The **half-life** t½ is the time for the number of undecayed nuclei to fall to half (equivalently, for the activity to halve). It is constant for an isotope. Setting N = N₀/2 in the exponential law gives

λt½ = ln 2, so t½ = 0.693 / λ

**Worked example 2 (a long half-life).** A sample is 5.0 μg of an isotope of molar mass 137 g mol⁻¹ and Avogadro constant 6.02 × 10²³ mol⁻¹. Its activity is measured as 1.6 × 10⁷ Bq. Find the half-life.

N = (5.0 × 10⁻⁶ / 137) × 6.02 × 10²³ = 2.20 × 10¹⁶
λ = A/N = 1.6 × 10⁷ / 2.20 × 10¹⁶ = 7.28 × 10⁻¹⁰ s⁻¹
t½ = 0.693 / 7.28 × 10⁻¹⁰ = 9.5 × 10⁸ s ≈ **30 years** (dividing by 3.16 × 10⁷ s per year)

Waiting for such a sample to halve is impractical, so you find N from the mass and A from a count. **Short half-lives** are measured directly. For the protactinium experiment, a sealed generator bottle holds a solution containing the parent uranium compound. You shake it and let two liquid layers separate; the short-lived protactinium isotope, with a half-life of about a minute, collects in the upper layer. Place a GM tube over that layer, record the count every 10 s for several minutes, and record the background separately. Subtract the background from each count rate, plot corrected count rate against time and read off the time for the rate to halve from several starting points; they should agree. Use gloves, keep the bottle sealed and follow your school's rules for the generator.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--04-aphy-nuclear-half-life.webp" width="900" height="1010" alt="Corrected count rate against time for a source starting at 800 counts per minute. The rate halves every 14 minutes whether it starts from 800 or 488, so the half-life is constant and lambda = ln 2 / 14 = 0.0495 per minute." loading="lazy">
  <figcaption>The half-life is the same wherever on the decay curve you start.</figcaption>
</figure>


## 6.4.3(f)(i) Exponential decay

Solving ΔN/Δt = −λN gives

N = N₀e^(−λt) and A = A₀e^(−λt)

Count rate follows the same law as activity, provided you subtract background first.

**Worked example 3.** A source has A₀ = 850 Bq and half-life 14 minutes. Find (a) its activity after 50 minutes and (b) the time for it to fall to 20% of A₀.

λ = ln 2 / 14 = 0.0495 min⁻¹
(a) A = 850 e^(−0.0495 × 50) = 850 × 0.0842 = **72 Bq**
(b) 0.20 = e^(−λt), so t = −ln 0.20 / λ = 1.609 / 0.0495 = **33 minutes** (32.5 before rounding)

## 6.4.3(f)(ii) Simulating decay with dice

Start with 100 dice. Throw them all and remove those showing a six. Count the remainder and throw again. Each die has a chance of 1/6 of "decaying" per throw, so on average 5/6 survive: expected numbers are 100, 83.3, 69.4, 57.9, 48.2 and 40.2. The pattern is N = N₀(5/6)ⁿ, which is exponential. Your results will scatter about it, as real decay does. Using N = N₀e^(−λn) gives λ = ln(6/5) = 0.182 per throw, which is slightly more than the probability 1/6 = 0.167. The two agree only when the probability per step is small. The half-life is ln 2 / 0.182 = 3.8 throws. Using more dice reduces the relative scatter.

## 6.4.3(g) Graphs and spreadsheet modelling

**Graphs.** The gradient of an N–t graph at time t equals −λN, so −(tangent gradient) gives the activity at that moment. Taking logarithms of N = N₀e^(−λt) gives ln N = ln N₀ − λt, so a graph of ln N (or ln A, or ln of corrected count rate) against t gives a straight line whose gradient is −λ, with ln N₀ where it meets the vertical axis. A straight ln graph supports the exponential law.

**Spreadsheet.** Treat ΔN/Δt = −λN as a rule for step-by-step change. Put λ in one cell and the time step Δt in another, set N₀ in the first row of N, and in each later row use

N(new) = N(old) − λ × N(old) × Δt

**Worked example 4.** λ = 0.030 s⁻¹, Δt = 5 s and N₀ = 1000.

| t / s | Model N | Exact 1000e^(−0.030t) |
|---|---|---|
| 0 | 1000 | 1000 |
| 5 | 850.0 | 860.7 |
| 10 | 722.5 | 740.8 |
| 15 | 614.1 | 637.6 |

The model always falls slightly too fast because it uses the starting N for the whole step. Halving Δt to 2.5 s reduces the gap; Δt of 0.5 s at t = 10 s gives 739.1, close to 740.8. Plot N against t and ln N against t, and compare the gradient with −λ.

## 6.4.3(h) Radioactive dating

**Carbon-dating.** Cosmic rays make carbon-14 in the atmosphere, which enters living things through carbon dioxide. While an organism is alive, the fraction of its carbon that is carbon-14 stays about constant. After death the intake stops, carbon-14 decays (half-life 5730 years) and the activity per gram of carbon falls. The age comes from A = A₀e^(−λt):

t = (1/λ) ln(A₀/A)

**Worked example 5.** Living wood gives 0.230 Bq per gram of carbon. An ancient bowl gives 0.150 Bq per gram. Find its age.

λ = ln 2 / 5730 = 1.21 × 10⁻⁴ year⁻¹
t = ln(0.230/0.150) / 1.21 × 10⁻⁴ = 0.4274 / 1.21 × 10⁻⁴ = **3500 years** (2 s.f.)

**Assumptions and limits:** the starting ratio is assumed to match today's, the sample must not be contaminated by newer carbon, and after many half-lives the activity is too small to separate from background. Rocks are dated in the same way with isotopes whose half-lives are far longer.

## Common errors

- Using t½ in minutes with λ in s⁻¹ in the same expression.
- Forgetting to subtract background before using a count rate as activity.
- Writing N = N₀e^(λt), without the minus sign.
- Balancing A but not Z, or putting the neutrino in the wrong place.
- Saying half-life is the time for a sample to decay completely.
- Taking ln of a number with units when plotting; use the number only.

## Frequently asked questions

**What is activity in radioactivity?**
Activity is the number of decays per second, measured in becquerel (Bq). It is proportional to the number of undecayed nuclei, A = λN.

**How does carbon dating work?**
Living things keep a roughly constant fraction of carbon-14. After death, intake stops and carbon-14 decays with a half-life of 5730 years, so comparing the activity per gram with that of living material gives the age from t = (1/λ) ln(A₀/A).

**How do you find the decay constant from a graph?**
Plot ln N, ln A or ln of the corrected count rate against time. The straight line has gradient −λ and meets the vertical axis at ln N₀.

**How do you measure a short half-life with protactinium?**
A sealed generator bottle is shaken so the short-lived protactinium collects in one liquid layer, and a Geiger-Müller tube records the count rate over time. After subtracting background, the half-life is found from the decay of the count rate.

**What stops alpha, beta and gamma radiation?**
Alpha is stopped by paper or skin, beta by a few millimetres of aluminium, and gamma is never fully stopped, though thick lead greatly reduces it.

## Official syllabus

OCR Advanced GCE in Physics A (H556), specification Version 3.0 (March 2026), first assessment 2017, published by OCR: section 6.4.3, Radioactivity.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--08-aphy-nuclear-reactor.webp" width="900" height="960" alt="Cross-section of a reactor with fuel rods in a moderator, control rods that absorb neutrons, coolant leaving hot and returning cool, and thick shielding. Heat passes to a heat exchanger, turbine and generator. Control rods hold k at 1." loading="lazy">
  <figcaption>The moderator slows neutrons and the control rods absorb them.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--09-aphy-nuclear-radius.webp" width="900" height="1110" alt="Nuclei with A = 4, 64 and 216 have radii 1.9, 4.8 and 7.2 fm from R = 1.2 A^(1/3) fm. R plotted against the cube root of A is a straight line of gradient R0. Mass and volume both scale with A, so every nucleus has the same density, about 2.3 x 10^17 kg per cubic metre." loading="lazy">
  <figcaption>Nuclear radius grows as the cube root of A, so nuclear density is constant.</figcaption>
</figure>

