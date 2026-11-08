---
title: "OCR A Level Physics A: Radioactive decay, activity, half-life and dating (H556) -- Revision Notes"
seoTitle: "OCR A Level Physics Radioactive Decay Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on decay, α β γ, activity, half-life, exponential decay, spreadsheet modelling and dating for OCR A Level Physics A (H556)."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-12
featured: false
reviewNote: "2026-11-08: reviewed by iftikhar-azeemi."
---
These notes condense section 6.4.3 (Radioactivity), statements (a) to (h), of the OCR Advanced GCE in Physics A (H556) specification, Version 3.0 (March 2026), for first assessment in 2017. H556 is the full A level. For explanations and longer worked examples, read the [study guide](/resources/ocr-a-level-physics-radioactive-decay-activity-half-life-and-dating/), then use the [practice set](/resources/ocr-a-level-physics-radioactive-decay-activity-half-life-and-dating-practice/). The course hub is [OCR A Level Physics](/boards/ocr/a-level/physics/), the printable list is the [checklist](/checklists/ocr/a-level/physics/), and the [free 10-minute diagnostics](/diagnostics/) find gaps.

## Equations at a glance

| Statement | Equation | Notes |
|---|---|---|
| (d) | A = λN | A in Bq, λ in s⁻¹, N a number of nuclei |
| (d) | ΔN/Δt = −λN | decay rate; minus sign as N falls |
| (e) | λt½ = ln 2 | t½ and λ in matching time units |
| (f) | N = N₀e^(−λt) | N₀ is the number at t = 0 |
| (f) | A = A₀e^(−λt) | same for corrected count rate |
| (g) | ln N = ln N₀ − λt | gradient of ln N against t is −λ |
| (h) | t = (1/λ) ln(A₀/A) | age from activities |
| (g) | N(new) = N(old) − λN(old)Δt | the spreadsheet step |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--02-aphy-nuclear-decay-modes.webp" width="900" height="990" alt="Graph of neutron number against proton number with a narrow band of stable nuclei above the N = Z line. Neutron-rich nuclei above the band decay by beta-minus (Z+1, N-1), proton-rich nuclei below it by beta-plus or electron capture (Z-1, N+1), and very heavy nuclei by alpha (Z-2, N-2)." loading="lazy">
  <figcaption>The position of a nucleus relative to the stable band decides its decay mode.</figcaption>
</figure>


## 6.4.3(a) Spontaneous and random

- Spontaneous: no trigger, unaffected by temperature, pressure or chemical state.
- Random: cannot predict which nucleus decays or when.
- Every undecayed nucleus has the same fixed chance of decaying each second; that chance is λ.
- Large samples give smooth curves; small samples scatter.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--01-aphy-nuclear-radiations.webp" width="900" height="840" alt="Alpha is stopped by paper, beta by a few mm of aluminium and gamma is only reduced by thick lead. Alpha makes the most ion pairs along its short track and gamma the fewest. Alpha is least hazardous outside the body and most hazardous inside it." loading="lazy">
  <figcaption>Alpha, beta and gamma differ in how far they penetrate and how strongly they ionise.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--03-aphy-nuclear-random-decay.webp" width="900" height="1170" alt="100 dice are thrown repeatedly and every six is removed. Which die goes is unpredictable, but the number left follows the smooth curve 100 x (5/6)^n, halving after about 3.8 throws." loading="lazy">
  <figcaption>Each nucleus has a constant chance of decaying, so unpredictable single decays give a smooth exponential for a large sample.</figcaption>
</figure>


## 6.4.3(b) The three radiations

| | α | β⁻ | β⁺ | γ |
|---|---|---|---|---|
| Nature | helium nucleus, +2e | electron, −e | positron, +e | photon |
| Ionising | strongest | moderate | moderate | weakest |
| Range in air | a few cm | metres | short | no fixed range |
| Absorbed by | paper, skin | few mm aluminium | few mm aluminium | reduced by thick lead |

Absorption investigation, in steps:

1. Measure the background count rate with no source.
2. Fix the source-to-tube distance.
3. Add absorber, count for a fixed time, record thickness.
4. Subtract background from each count rate.
5. Plot corrected count rate against thickness; repeat and average.

Expect a sharp cut-off for α and β and an exponential fall for γ. Safety: tongs, source stored away, short times, large distances.

## 6.4.3(c) Decay equations

| Decay | A | Z | Particle emitted |
|---|---|---|---|
| α | −4 | −2 | ⁴₂α |
| β⁻ | 0 | +1 | ⁰₋₁e with antineutrino |
| β⁺ | 0 | −1 | ⁰₊₁e with neutrino |

Check that the nucleon numbers and the proton numbers both add up on each side.

## 6.4.3(d)-(e) Activity, decay constant and half-life

- Activity: decays per second, in becquerel.
- Decay constant λ: the chance per second that a given nucleus decays.
- Half-life: time for the number of undecayed nuclei, or the activity, to halve.
- Number of half-lives n = t / t½; fraction left = (½)ⁿ.

Measuring a half-life:

- Short (protactinium generator): shake the bottle, wait for the layers to separate, count every 10 s over the upper layer, subtract background, then plot and read repeated halving times.
- Long: find N from mass and molar mass, measure A, then use λ = A/N and t½ = ln 2 / λ.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--04-aphy-nuclear-half-life.webp" width="900" height="1010" alt="Corrected count rate against time for a source starting at 800 counts per minute. The rate halves every 14 minutes whether it starts from 800 or 488, so the half-life is constant and lambda = ln 2 / 14 = 0.0495 per minute." loading="lazy">
  <figcaption>The half-life is the same wherever on the decay curve you start.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--05-aphy-nuclear-log-graph.webp" width="900" height="990" alt="ln of corrected count rate against time is a straight line falling from 6.461 to 4.710 over 50 minutes. The gradient is -0.0350 per minute, so lambda = 0.0350 per minute and the half-life is 19.8 minutes." loading="lazy">
  <figcaption>A straight ln graph supports the exponential law and its gradient is minus lambda.</figcaption>
</figure>


## 6.4.3(f) Exponential decay and dice

- Dice: each die has a probability p of "decaying" per throw. The expected survivors after n throws are N₀(1 − p)ⁿ, so λ = −ln(1 − p) per throw.
- For p = 1/6, λ = 0.182 and t½ = 3.8 throws.
- λ is close to p only when p is small.

## 6.4.3(g) Graphs and spreadsheet

- Tangent gradient on an N–t graph = −λN = −A.
- A straight ln N against t line confirms exponential decay; gradient = −λ.
- Spreadsheet: put λ and Δt in fixed cells; each row is old N minus λ × old N × Δt.
- Smaller Δt gives a model closer to N₀e^(−λt); the model with a large step always falls too fast.

## 6.4.3(h) Dating

- Living organisms take in carbon-14, so activity per gram of carbon stays at a constant level.
- After death, carbon-14 decays (half-life 5730 years) and the activity per gram falls.
- Age t = (1/λ) ln(A₀/A).
- Assumptions: unchanged past ratio, no contamination. Limit: activity too low against background after many half-lives.

## Method in steps

Finding an activity from a half-life:

1. Convert t½ to seconds if the answer must be in becquerel.
2. Calculate λ = ln 2 / t½ and keep three or four figures.
3. Calculate A = λN.
4. Give the answer with its unit and sensible significant figures.

Finding a time from two activities:

1. Write the ratio A₀/A.
2. Take natural logs: λt = ln(A₀/A).
3. Divide by λ, with λ in the time unit you want.
4. Check against whole half-lives as a quick sense test.

Reading a ln graph:

1. Draw a line of best fit through the plotted ln values.
2. Choose two well-separated points on the line itself, not on the data.
3. Gradient = change in ln A / change in t; this is −λ.
4. Use the intercept at t = 0 to get ln A₀, then A₀ = e^(intercept).

## Worked reminders

**Activity from N.** An isotope has half-life 2.0 hours and a sample has 9.0 × 10¹² nuclei. Then λ = ln 2 / (2.0 × 3600) = 9.63 × 10⁻⁵ s⁻¹ and A = λN = 8.7 × 10⁸ Bq.

**Time to reach a fraction.** A source has half-life 9.0 days. To fall to one twentieth of its activity, λ = 0.0770 day⁻¹ and t = ln 20 / 0.0770 = 38.9 days, which is 4.32 half-lives. This is sensible, since 4 half-lives give 1/16 and 5 give 1/32.

**One spreadsheet row.** With λ = 0.040 s⁻¹, Δt = 3.0 s and N = 2000 at the start of a row, the next value is 2000 − 0.040 × 2000 × 3.0 = 1760. The exact value from 2000e^(−0.12) is 1774, so the model is a little low.

**Reading an intercept.** If a ln N graph cuts the vertical axis at 9.21, then N₀ = e^(9.21) = 1.0 × 10⁴ nuclei.

**Fraction remaining.** For a half-life of 6.0 hours, 40% of the sample remains after t = ln(1/0.4) / (ln 2 / 6.0) = 7.9 hours.

## Must-know distinctions

- Activity (decays per second) versus count rate (what the detector registers, which is lower).
- λ (per unit time) versus t½ (a time).
- Decay constant versus probability per throw in a dice model.
- Spontaneous (no trigger) versus random (no prediction).

## Quick self-test

1. A source has half-life 6.0 hours. What percentage of its nuclei remain after 15 hours?
2. Find λ in days⁻¹ for an isotope of half-life 8.0 days.
3. A sample of that isotope has activity 500 Bq. What is its activity after 20 days?
4. Find λ in s⁻¹ for an isotope of half-life 3.0 minutes.
5. A corrected count rate falls from 800 s⁻¹ to 200 s⁻¹ in 40 s. Find λ and the half-life.
6. State the change in nucleon number and proton number in β⁺ decay.
7. A wooden object has one eighth of the carbon-14 activity per gram of living wood. Using a half-life of 5730 years, state its age.
8. Why is the count from a source always measured with background subtracted?
9. A graph of ln A against t has gradient −0.012 s⁻¹. State λ and find t½.
10. Why does a spreadsheet model with a large time step give values below the exact curve?

### Answers

1. 15/6.0 = 2.5 half-lives, so (½)^2.5 = 0.177, which is **17.7%**.
2. λ = ln 2 / 8.0 = **0.0866 day⁻¹**.
3. A = 500 e^(−0.0866 × 20) = **88 Bq**.
4. 3.0 minutes = 180 s, so λ = ln 2 / 180 = **3.85 × 10⁻³ s⁻¹**.
5. A factor of four is two half-lives in 40 s, so t½ = **20 s** and λ = ln 2 / 20 = **0.0347 s⁻¹**.
6. **Nucleon number unchanged, proton number down by one.**
7. Three half-lives, so **17 190 years**.
8. Background radiation is always present and adds to the count, so it must be removed to get the count from the source alone.
9. λ = **0.012 s⁻¹**, so t½ = 0.693 / 0.012 = **58 s**.
10. Each step uses the N from the start of the step, which is larger than the average N during the step, so the model removes too many nuclei.

## Where marks are usually lost

- Not subtracting background before calculating a ratio or plotting a graph.
- Mixing time units, such as t½ in years with t in days.
- Omitting the minus sign in the exponent or in ΔN/Δt = −λN.
- Leaving out the antineutrino or neutrino from a β equation.
- Stating that half-life is the time for all nuclei to decay.
- Quoting a range for γ-rays as if it were a fixed value.
- Giving only "wear gloves" for safety, instead of tongs, distance and short exposure.
- Writing "random" without saying that every undecayed nucleus has the same fixed chance of decaying per second.

## Frequently asked questions

**What does it mean that radioactive decay is random and spontaneous?**
Spontaneous means decay needs no trigger and is not affected by temperature, pressure or chemical bonding. Random means you cannot predict when a particular nucleus will decay, though each undecayed nucleus has the same fixed chance of decaying per second.

**How do alpha and beta decay change the nucleus?**
In alpha decay the nucleon number falls by 4 and the proton number by 2. In β⁻ decay a neutron becomes a proton, so Z rises by 1 and A is unchanged; in β⁺ decay Z falls by 1.

**What is the link between half-life and the decay constant?**
The half-life and decay constant are linked by λt½ = ln 2, so t½ = 0.693/λ. Both must use the same time unit.

**Which section of OCR A Level Physics A covers radioactivity?**
Radioactivity is section 6.4.3, statements (a) to (h), of OCR H556. Module 6 content is assessed in Exploring physics (component 02) and Unified physics (component 03).

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

