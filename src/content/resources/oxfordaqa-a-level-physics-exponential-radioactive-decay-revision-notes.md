---
title: "OxfordAQA International AS and A-level Physics: Exponential radioactive decay (9630) -- Revision Notes"
seoTitle: "OxfordAQA Physics Exponential Decay Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Exponential radioactive decay"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 120
syllabusTopics:
  - qualification: "a-level"
    topic: "exponential-change-oxfordaqa"
    subtopic: "exponential-changes-in-radioactivity-oxfordaqa"
description: "Condensed revision notes on decay constant, activity, N = N₀e^(−λt), half-life, molar mass and ln graphs for OxfordAQA International A-level Physics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes condense section 3.9.2 (Exponential changes in radioactivity) of the OxfordAQA International AS and A-level Physics (9630) specification, version 4.4, for exams from May/June 2020 onwards. Section 3.9 is International A-level only, and section 3.3.3 says the exponential decay equations are required at International A2 only. For full explanations and worked examples, read the [study guide](/resources/oxfordaqa-a-level-physics-exponential-radioactive-decay/).

Use the [OxfordAQA Physics hub](/boards/oxfordaqa/a-level/physics/) and the [printable checklist](/checklists/oxfordaqa/a-level/physics/) to track your revision. Test yourself with the [practice set](/resources/oxfordaqa-a-level-physics-exponential-radioactive-decay-practice/) and the [free 10-minute diagnostics](/diagnostics/). Earlier decay ideas (modes, half-life by whole numbers) are in the [decay modes and half-life guide](/resources/oxfordaqa-a-level-physics-radioactive-decay-modes-half-life-radiation-properties/).

## Key ideas

- Decay is **spontaneous** (not affected by temperature, pressure or chemical state) and **random** (you cannot predict which nucleus decays, or when).
- For a given nuclide, each nucleus has one fixed chance of decaying in each second, whatever its age.
- The **decay constant** λ is that probability per unit time. Unit: s⁻¹, h⁻¹, y⁻¹.
- Large samples follow smooth curves. Counts for a single measurement scatter by about √C for a count of C.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--03-aphy-nuclear-random-decay.webp" width="900" height="1170" alt="100 dice are thrown repeatedly and every six is removed. Which die goes is unpredictable, but the number left follows the smooth curve 100 x (5/6)^n, halving after about 3.8 throws." loading="lazy">
  <figcaption>Each nucleus has a constant chance of decaying, so unpredictable single decays give a smooth exponential for a large sample.</figcaption>
</figure>


## Formulas

| Quantity | Equation | Notes |
|---|---|---|
| Decay rule | ΔN/Δt = −λN | Negative: N falls |
| Activity | A = −ΔN/Δt = λN | Unit becquerel, Bq = s⁻¹ |
| Number of nuclei | N = N₀e^(−λt) | N₀ at t = 0 |
| Activity law | A = A₀e^(−λt) | Also true for corrected count rate |
| Half-life | T½ = ln2/λ | ln2 = 0.693; independent of N₀ |
| Whole half-lives | N = N₀(½)ⁿ | n = t/T½ |
| Nuclei in a mass | N = (m/M) N_A | m in g, M in g mol⁻¹ |
| Time to reach A | t = (1/λ) ln(A₀/A) | Natural log |
| Straight line | ln A = ln A₀ − λt | Gradient −λ, intercept ln A₀ |
| Numerical step | N(new) = N(old)(1 − λΔt) | Small Δt only |

N_A is 6.02 × 10²³ mol⁻¹ in the calculations on this page. In an exam question, use the values provided with the question.

## Must-know distinctions

- **λ and A.** λ is a probability per unit time for one nucleus, the same for every sample of the nuclide. A = λN is the decays per second for a particular sample, and falls as N falls.
- **Activity and count rate.** The detector sees only part of the decays, and also records background. Corrected count rate is proportional to activity, so it follows the same law.
- **T½ and λ.** T½ is long when λ is small. Doubling λ halves T½.
- **N–t graph and ln A–t graph.** The first is a curve with gradient −λN. The second is a straight line with gradient −λ.
- **ln and log.** The exponential law needs ln. Base 10 logs give gradient −λ log₁₀e, so λ = −gradient × 2.303.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--05-aphy-nuclear-log-graph.webp" width="900" height="990" alt="ln of corrected count rate against time is a straight line falling from 6.461 to 4.710 over 50 minutes. The gradient is -0.0350 per minute, so lambda = 0.0350 per minute and the half-life is 19.8 minutes." loading="lazy">
  <figcaption>A straight ln graph supports the exponential law and its gradient is minus lambda.</figcaption>
</figure>


## Methods in steps

### Activity or nuclei after a time t

1. Convert T½ to λ = ln2/T½, keeping the time unit of the question, or convert to seconds if the answer must be in Bq.
2. Convert t to the same unit.
3. Work out λt, then e^(−λt).
4. Multiply by N₀ or A₀.
5. Sense check: is t about a whole number of half-lives? If so, N ≈ N₀(½)ⁿ.

### Time to reach a given activity

1. Form the ratio A₀/A (bigger than 1).
2. Take ln of the ratio.
3. Divide by λ in the matching unit.

### Nuclei from a mass

1. Convert mass to grams.
2. Divide by M to get moles.
3. Multiply by N_A.
4. Use A = λN if the activity is needed.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--06-aphy-nuclear-mass-defect.webp" width="900" height="920" alt="The four separate nucleons of helium-4 weigh 4.031882 u but the nucleus 4.001505 u. The mass defect 0.030377 u is equivalent to 28.3 MeV, the binding energy, which is 7.07 MeV per nucleon." loading="lazy">
  <figcaption>The binding energy is the energy equivalent of the mass defect.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--09-aphy-nuclear-radius.webp" width="900" height="1110" alt="Nuclei with A = 4, 64 and 216 have radii 1.9, 4.8 and 7.2 fm from R = 1.2 A^(1/3) fm. R plotted against the cube root of A is a straight line of gradient R0. Mass and volume both scale with A, so every nucleus has the same density, about 2.3 x 10^17 kg per cubic metre." loading="lazy">
  <figcaption>Nuclear radius grows as the cube root of A, so nuclear density is constant.</figcaption>
</figure>


### Half-life from a log graph

1. Subtract the background rate from each reading.
2. Take ln of each corrected value.
3. Plot ln against t and draw a best-fit line.
4. Use a large triangle to find the gradient (negative).
5. λ = −gradient, then T½ = ln2/λ.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--04-aphy-nuclear-half-life.webp" width="900" height="1010" alt="Corrected count rate against time for a source starting at 800 counts per minute. The rate halves every 14 minutes whether it starts from 800 or 488, so the half-life is constant and lambda = ln 2 / 14 = 0.0495 per minute." loading="lazy">
  <figcaption>The half-life is the same wherever on the decay curve you start.</figcaption>
</figure>


### Half-life from a decay curve

1. Subtract the background.
2. Sketch a smooth curve through the points.
3. Measure how long the value takes to halve, from two or more starting heights.
4. If these agree, the decay is exponential, and the half-life is their mean.

## Small worked reminders

**Fraction left.** A nuclide has λ = 0.12 day⁻¹. After 10 days, N/N₀ = e^(−1.2) = 0.30. Its half-life is 0.693 ÷ 0.12 = 5.8 days.

**Activity from nuclei.** A sample has 2.0 × 10¹⁴ nuclei and λ = 4.0 × 10⁻⁸ s⁻¹. Then A = 4.0 × 10⁻⁸ × 2.0 × 10¹⁴ = 8.0 × 10⁶ Bq.

**Number of nuclei in a mass.** 5.0 µg of a nuclide with M = 150 g mol⁻¹ contains (5.0 × 10⁻⁶ ÷ 150) × 6.02 × 10²³ = 2.0 × 10¹⁶ nuclei.

**Numerical model.** N₀ = 800, λ = 0.050 s⁻¹, Δt = 2.0 s. Each step multiplies by 1 − 0.050 × 2.0 = 0.90, so N = 720 after one step and 648 after two. The exact value at 4.0 s is 800e^(−0.20) = 655, so the model is slightly low.

**Time to fall to a fraction.** With λ = 0.12 day⁻¹, the time for N to fall to 5% of N₀ is t = ln(20) ÷ 0.12 = 2.996 ÷ 0.12 = 25 days. That is about 4.3 half-lives, and (½)^4.3 is about 0.05, so the answer is sensible.

**Log graph.** A best-fit line on a graph of ln A against t passes through (0, 7.20) and (14 days, 5.10). The gradient is (5.10 − 7.20) ÷ 14 = −0.150 day⁻¹. So λ = 0.150 day⁻¹ and T½ = 0.693 ÷ 0.150 = 4.6 days. The starting activity is A₀ = e^7.20, which is about 1.3 × 10³ in whatever unit the readings used.

**Which representation to use.** Use a decay curve when you want a half-life from a quick read, because only the halving time is needed. Use a log graph when you want the best value of λ from many points, because a straight line averages out the scatter. Use the equation when you are given values and asked for one unknown.

## Quick self-test

1. What does the decay constant λ represent?
2. A nuclide has a half-life of 4.0 h. Find λ in h⁻¹ and in s⁻¹.
3. A sample has λ = 0.25 h⁻¹. What fraction of the nuclei remains after 6.0 h?
4. A nuclide has λ = 3.0 × 10⁻⁴ s⁻¹. Find its half-life in seconds and in minutes.
5. A sample has 5.0 × 10¹² undecayed nuclei and λ = 2.0 × 10⁻⁶ s⁻¹. Find its activity.
6. A nuclide has a half-life of 8.0 h. How long does its activity take to fall to 10% of its starting value?
7. How many nuclei are in 2.0 mg of a nuclide with molar mass 32 g mol⁻¹?
8. A graph of ln A against t, with t in days, has gradient −0.080 day⁻¹. Find the half-life.
9. A source has an activity of 480 Bq. Its half-life is 6.0 h. Find its activity 21 h later.
10. A numerical model starts with N = 500, uses λ = 0.10 s⁻¹ and Δt = 2.0 s. Find N after two steps.
11. Why must you subtract the background before plotting ln of a count rate?
12. Why does a graph of ln A against t give a straight line?

### Answers

1. The probability that a given nucleus decays per unit time. It is constant for a nuclide.
2. λ = 0.693 ÷ 4.0 = **0.17 h⁻¹**; ÷ 3600 gives **4.8 × 10⁻⁵ s⁻¹**.
3. e^(−0.25 × 6.0) = e^(−1.5) = **0.22**.
4. T½ = 0.693 ÷ 3.0 × 10⁻⁴ = **2.3 × 10³ s**, which is **39 minutes**.
5. A = λN = 2.0 × 10⁻⁶ × 5.0 × 10¹² = **1.0 × 10⁷ Bq**.
6. t = (T½/ln2) × ln(10) = 8.0 × 3.32 = **27 h** (about 3.3 half-lives).
7. (2.0 × 10⁻³ ÷ 32) × 6.02 × 10²³ = **3.8 × 10¹⁹**.
8. λ = 0.080 day⁻¹, so T½ = 0.693 ÷ 0.080 = **8.7 days**.
9. 21 h is 3.5 half-lives: 480 × (½)^3.5 = **42 Bq**.
10. Each step multiplies by 1 − 0.10 × 2.0 = 0.80, giving 400, then **320**.
11. Measured rate = source rate + background. The ln of a sum is not the sum of the ln values, so with background left in the points curve and the gradient is not −λ.
12. Taking ln of A = A₀e^(−λt) gives ln A = ln A₀ − λt, which is of the form y = mx + c.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--02-aphy-nuclear-decay-modes.webp" width="900" height="990" alt="Graph of neutron number against proton number with a narrow band of stable nuclei above the N = Z line. Neutron-rich nuclei above the band decay by beta-minus (Z+1, N-1), proton-rich nuclei below it by beta-plus or electron capture (Z-1, N+1), and very heavy nuclei by alpha (Z-2, N-2)." loading="lazy">
  <figcaption>The position of a nucleus relative to the stable band decides its decay mode.</figcaption>
</figure>


## Where marks are usually lost

- Using the exponential law with λ in one time unit and t in another.
- Writing the exponent as e^(λt) with the minus sign missing, so the activity grows.
- Quoting a negative decay constant, or a positive gradient from a ln A graph.
- Giving a time for activity to fall from the ratio A/A₀ instead of A₀/A, which flips the sign of the log.
- Forgetting to convert micrograms or milligrams to grams before finding N.
- Reading a half-life from one starting point on a noisy curve.
- Plotting ln of measured, not corrected, count rate.
- Saying the decay rate of a sample is "constant" when it is the decay probability that is constant.
- Not showing the substitution before the answer when asked to show a result.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), specification version 4.4, for exams from May/June 2020 onwards, published by Oxford International AQA Examinations: section 3.9.2 Exponential changes in radioactivity (International A-level only).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--08-aphy-nuclear-reactor.webp" width="900" height="960" alt="Cross-section of a reactor with fuel rods in a moderator, control rods that absorb neutrons, coolant leaving hot and returning cool, and thick shielding. Heat passes to a heat exchanger, turbine and generator. Control rods hold k at 1." loading="lazy">
  <figcaption>The moderator slows neutrons and the control rods absorb them.</figcaption>
</figure>

