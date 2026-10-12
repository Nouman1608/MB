---
title: "IB DP Physics: Activity, half-life and the radioactive decay law (DP Physics) -- Revision Notes"
seoTitle: "IB DP Physics E.3 Activity and Half-Life Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["ib"]
topic: "Activity, half-life and the radioactive decay law"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Physics"]
syllabusSeries: "First assessment 2025"
order: 297
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-physics-topic-e"
    subtopic: "ib-dp-physics-e-3"
description: "Condensed IB DP Physics E.3 revision notes on activity, count rate, half-life, background, the decay law and uses of radioisotopes, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes condense the second part of sub-topic E.3, Radioactive decay, in the IB *Physics guide* (first assessment 2025): activity, count rate, half-life, background radiation, finding a half-life and real-life uses. For full explanations and longer worked examples, read the [study guide](/resources/ib-dp-physics-activity-half-life-and-the-radioactive-decay-law/), then test yourself with the [practice questions](/resources/ib-dp-physics-activity-half-life-and-the-radioactive-decay-law-practice/). Everything applies to SL and HL, except items marked "HL only" (the decay constant, the exponential law and arbitrary time intervals). Types of decay and binding energy are in the [separate unit](/resources/ib-dp-physics-nuclear-structure-binding-energy-and-types-of-revision-notes/). Links: [course hub](/boards/ib/ib-dp/physics/), [printable checklist](/checklists/ib/ib-dp/physics/), [free 10-minute diagnostics](/diagnostics/).

## Definitions

| Term | Meaning |
|---|---|
| Random | Which nucleus decays next, and when, cannot be predicted |
| Spontaneous | Decay is not triggered by outside conditions |
| Activity, A | Number of nuclei decaying per unit time; unit becquerel, Bq = one decay per second |
| Count rate | Counts registered by the detector per unit time; less than the activity |
| Background radiation | Counts recorded with no source present (radon, rocks, cosmic rays, buildings, food, medical sources) |
| Corrected count rate | Measured count rate minus background count rate |
| Half-life, T½ | Time for the number of undecayed nuclei (and the activity) to fall to half |
| Decay constant, λ (HL only) | Constant in A = λN; unit s⁻¹ or per hour, day, year |

## Method: whole numbers of half-lives (SL and HL)

1. Find n = t / T½. Check that it is a whole number.
2. Divide the starting value by 2ⁿ.
3. If background is involved, subtract it first, divide, then add it back to get a reading.

| n | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Fraction left | 1/2 | 1/4 | 1/8 | 1/16 | 1/32 | 1/64 |
| Percentage left | 50% | 25% | 12.5% | 6.25% | 3.125% | 1.56% |

**Worked reminder.** A source has A₀ = 1280 Bq and T½ = 20 min. After 1.0 h, n = 60/20 = 3, so A = 1280/8 = **160 Bq**.

The same factor applies to N, A and corrected count rate. Half-life does not depend on the amount of sample, so it takes just as long to halve from 100 nuclei as from 10⁶ nuclei (on average).

## Background radiation

- Measure it with the source removed, over a long time, and calculate a rate.
- Subtract it from every reading before you compare, plot or halve.
- Do not halve the background. Only the source's contribution decays.
- Counts are random, so a longer count time gives a smaller fractional uncertainty.

## Method: determining a half-life

| Step | What to do |
|---|---|
| 1 | Measure background rate with the source far away, over a long time |
| 2 | Fix source and detector so the geometry stays the same |
| 3 | Count in equal intervals at regular times |
| 4 | Subtract background from each rate |
| 5 | Plot corrected rate against time and draw a smooth curve |
| 6 | Find the time to halve from several starting values, then average |
| HL extra | Plot ln(corrected rate) against time; gradient = −λ; T½ = ln2/λ |

Safety: handle sources with tongs, keep them in a shielded store when not in use, keep your distance, and limit exposure time.

## Real-life contexts

| Context | Radiation | Half-life | Reason |
|---|---|---|---|
| Medical imaging | Gamma | Short (hours) | Gamma leaves the body to the camera; the dose fades quickly |
| Medical treatment | Usually beta, taken up by the target tissue | Hours to days | Energy is delivered over a short range, inside the target |
| Pipe leak tracer | Gamma | Short | Gets through soil and pipe wall; does not linger in the ground |
| Thickness gauging | Beta for thin sheet, gamma for thick | Long | Radiation must be partly absorbed; the signal must stay steady |
| Dating | Decay of a long-lived isotope | Comparable to the age | Enough, but not too few, nuclei remain to measure |

**Dating method.** Divide the activity per gram of living material by the activity per gram of the sample. Write the ratio as 2ⁿ. Age = n × T½. Assume the starting activity per gram was the same as in living material today.

Alpha radiation is stopped by paper or a few centimetres of air, so it is no use for gauging or tracing through material, and it is hazardous if the source is inside the body.

## HL only: the decay law

| Quantity | Equation |
|---|---|
| Number of nuclei | N = N₀ e^(−λt) |
| Activity | A = λN = λN₀ e^(−λt) = A₀ e^(−λt) |
| Half-life link | T½ = ln2 / λ |
| Time to reach a fraction f | t = ln(1/f) / λ |
| Two readings | λ = ln(A₁/A₂) / (t₂ − t₁) |

**Method for any time interval.**

1. Convert to one time unit. If A is wanted in Bq, put λ in s⁻¹.
2. Find λ from λ = ln2 / T½ (or from two readings).
3. Put λt in the exponent. Do not round λ too early.
4. Check against whole half-lives: t/T½ close to a whole number should give about (½)ⁿ.

**Probability meaning.** The probability that a given nucleus decays in a short interval Δt is approximately λΔt, but only when λΔt is much less than 1. The exact value is 1 − e^(−λΔt).

**Worked reminder.** Carbon-14 has T½ = 5730 years, so λ = ln2/5730 = 1.21 × 10⁻⁴ year⁻¹. A sample with a quarter of the original activity is at n = 2, so its age is 11 460 years. For a sample at 35% of the original, t = ln(1/0.35)/λ = 8.7 × 10³ years.

## Must-know distinctions

- **Activity versus count rate.** Activity is the decays in the source; count rate is what the detector registers.
- **Measured versus corrected rate.** Halve only the corrected rate.
- **Half-life versus decay constant.** A large λ means a short T½.
- **Half-life versus lifetime.** After two half-lives a quarter of the nuclei remain, not none.
- **Random versus unpredictable in bulk.** One nucleus is unpredictable; a large sample follows a smooth curve.
- **Approximation versus exact.** λΔt is a probability only when it is small.

## Quick self-test

1. Define the activity of a source and state its unit.
2. A source has activity 7.2 × 10⁶ Bq and half-life 12 days. Find its activity after 36 days.
3. How long does it take for the activity to fall from 6400 Bq to 400 Bq if T½ = 5.0 min?
4. A detector reads 75 counts per minute with a source and 15 counts per minute without. T½ = 4.0 h. What does it read 8.0 h later?
5. What percentage of a radioactive sample remains after four half-lives?
6. The activity of a sample falls from 800 Bq to 100 Bq in 9.0 days. Find the half-life.
7. Explain why an alpha emitter is a poor choice of tracer for a leak in an underground pipe.
8. State two reasons why the count rate is smaller than the activity.
9. HL only: a nuclide has T½ = 2.0 h. Calculate λ in h⁻¹.
10. HL only: λ = 0.025 s⁻¹. Calculate the half-life.
11. HL only: a sample starts with 5.0 × 10⁶ undecayed nuclei and λ = 0.020 min⁻¹. How many remain after 30 min?
12. HL only: a sample holds 2.0 × 10¹² nuclei and λ = 4.0 × 10⁻⁶ s⁻¹. Find its activity.

### Answers

1. The number of nuclei that decay per unit time. Unit: becquerel (Bq), one decay per second.
2. n = 36/12 = 3; A = 7.2 × 10⁶ / 8 = **9.0 × 10⁵ Bq**.
3. 6400 → 3200 → 1600 → 800 → 400 is four halvings. Time = 4 × 5.0 = **20 min**.
4. Corrected rate = 75 − 15 = 60. n = 2, so 60/4 = 15. Reading = 15 + 15 = **30 counts per minute**.
5. (½)⁴ = 1/16 = **6.25%**.
6. 800/100 = 8 = 2³, so three half-lives in 9.0 days, so T½ = **3.0 days**.
7. Alpha radiation is absorbed by soil and the pipe wall, so it never reaches a surface detector.
8. Any two of: the source emits in all directions, so the detector covers only part of them; some radiation is absorbed on the way (air, source or window); the detector does not register every particle.
9. λ = ln2 / 2.0 = **0.35 h⁻¹** (0.347).
10. T½ = ln2 / 0.025 = **28 s** (27.7 s).
11. N = 5.0 × 10⁶ × e^(−0.020 × 30) = 5.0 × 10⁶ × e^(−0.6) = **2.7 × 10⁶**.
12. A = λN = 4.0 × 10⁻⁶ × 2.0 × 10¹² = **8.0 × 10⁶ Bq**.

## Where marks are usually lost

- Halving the measured count rate, not the corrected count rate.
- Forgetting to add the background back when the question asks for the reading.
- Writing n = t × T½ instead of t / T½.
- Leaving out units, or giving the becquerel as "counts per second" for a detector reading.
- Justifying the isotope with only the type of radiation, and not its half-life.
- Describing a half-life experiment with no background measurement or with no repeated halving times.
- Saying a nucleus "knows" when to decay, or that decay depends on temperature.
- HL: using minutes for t with λ in s⁻¹.
- HL: rounding λ to one figure before it enters the exponent.
- HL: using λΔt as a probability when it is not small.

## Official syllabus

IB Diploma Programme *Physics guide*, first assessment 2025, published by the International Baccalaureate Organization. Sub-topic E.3, Radioactive decay.
