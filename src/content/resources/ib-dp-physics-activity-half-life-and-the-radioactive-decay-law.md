---
title: "IB DP Physics: Activity, half-life and the radioactive decay law (DP Physics)"
seoTitle: "IB DP Physics E.3 Activity and Half-Life Study Guide"
resourceType: "study-guides"
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
description: "Study guide to IB DP Physics E.3: activity, count rate, half-life, background radiation, the decay law and uses of radioisotopes, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide covers the second part of sub-topic E.3, Radioactive decay, in the IB *Physics guide* (first assessment 2025): activity, count rate, half-life, background radiation, finding a half-life and real-life uses of radioisotopes. Standard level (SL) and higher level (HL) both study these. The decay constant and the exponential law are additional higher level, and each is marked "HL only". Types of decay and binding energy are the first part of E.3 and are taught in a [separate guide](/resources/ib-dp-physics-nuclear-structure-binding-energy-and-types-of/). Use the [revision notes](/resources/ib-dp-physics-activity-half-life-and-the-radioactive-decay-law-revision-notes/) for recall and the [practice questions](/resources/ib-dp-physics-activity-half-life-and-the-radioactive-decay-law-practice/) for testing. Also see the [course hub](/boards/ib/ib-dp/physics/), the [printable checklist](/checklists/ib/ib-dp/physics/) and the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Part | What you must be able to do | Tier |
|---|---|---|
| E.3 | Define activity, count rate and half-life | SL and HL |
| E.3 | Find activity and count rate after whole numbers of half-lives | SL and HL |
| E.3 | Allow for background radiation | SL and HL |
| E.3 | Determine the half-life of a nuclide | SL and HL |
| E.3 | Choose an isotope for medical use, leak tracing, thickness gauging and dating | SL and HL |
| E.3 | Use the decay constant λ and N = N₀e^(−λt) | HL only |
| E.3 | Explain when λ approximates the probability of decay per unit time | HL only |
| E.3 | Use A = λN = λN₀e^(−λt) and T½ = ln2/λ | HL only |
| E.3 | Apply the decay equations to arbitrary time intervals | HL only |

## Random decay, activity and count rate

Radioactive decay is **random**: no one can predict which nucleus goes next or when. It is also **spontaneous**: outside conditions do not trigger it. With a large number of nuclei, though, the pattern is predictable, so a fixed fraction decays in a fixed time.

The **activity** A of a sample is the number of nuclei that decay per unit time. Its SI unit is the becquerel (Bq), where 1 Bq is one decay per second. Activity belongs to the source, not the detector.

The **count rate** is the number of particles or photons your detector registers per unit time. It is always smaller than the activity, because the source emits in all directions, radiation is absorbed on the way and the detector is not perfectly efficient. If the geometry stays the same, count rate is proportional to activity. So the count rate falls in the same proportion as the activity.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-activity-half-life-and-the-radioactive-decay-law--01-random-fixed-fraction.webp" width="900" height="1150" alt="Four grids of 64 nuclei show the start and after 1, 2 and 3 half-lives. Gold nuclei are undecayed and dashed grey ones have decayed. Which nuclei go is random, but 32, 16 and 8 are left, which is 1/2, 1/4 and 1/8." loading="lazy">
  <figcaption>Which nucleus decays is random, yet the fraction left after each half-life is fixed.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-activity-half-life-and-the-radioactive-decay-law--02-activity-count-rate.webp" width="900" height="1110" alt="A source emits 20 particles in one second in all directions (20 Bq) but only 3 reach the Geiger-Muller detector, so the count rate is 3 per second. Some miss and some are absorbed. Halving the activity halves the count rate for the same set-up." loading="lazy">
  <figcaption>Count rate is only part of the activity, but they fall in the same proportion.</figcaption>
</figure>


## Background radiation

A detector clicks even with no source nearby. This **background radiation** comes from natural sources such as radon gas seeping from rocks and soil, cosmic rays, building materials and food, and from medical and industrial sources.

To find the count rate due to your source, measure the background count rate with the source removed, over a long time, and subtract it from every reading. A long counting time matters because the counts are random, so the average is more reliable. Use the **corrected count rate** when you compare readings or judge halving.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-activity-half-life-and-the-radioactive-decay-law--03-background-correction.webp" width="900" height="1090" alt="Two stacked bars: now 212 counts/min is 12 background plus 200 from the source. After 12 h (4 half-lives of 3.0 h) the source part is 12.5 and background is still 12, giving 24.5. Halving 212 would wrongly give 13.25." loading="lazy">
  <figcaption>Halve only the corrected count rate; the background does not halve.</figcaption>
</figure>


## Half-life and integer half-lives

The **half-life** T½ is the time taken for the number of undecayed nuclei of a nuclide in a sample to fall to half its starting value. Activity and corrected count rate fall by the same factor in the same time. Half-life is a fixed property of each nuclide.

After n half-lives the fraction left is (½)ⁿ, so:

```
N = N₀ / 2ⁿ      A = A₀ / 2ⁿ      corrected count rate = C₀ / 2ⁿ     where n = t / T½
```

| Half-lives elapsed, n | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Fraction remaining | 1 | 1/2 | 1/4 | 1/8 | 1/16 | 1/32 |

This route needs t to be a whole number of half-lives. For other times, HL candidates use the decay law below.

**Worked example 1.** A sample of technetium-99m has half-life 6.0 h and activity 480 MBq at 08:00. Find (a) the activity at 02:00 the next day and (b) the first time at which it falls below 5.0 MBq.

```
(a) 08:00 to 02:00 next day = 18 h, so n = 18 / 6.0 = 3
    A = 480 / 2³ = 480 / 8 = 60 MBq
(b) Halve repeatedly: 480, 240, 120, 60, 30, 15, 7.5, 3.75
    7.5 MBq is after 6 half-lives (still above 5.0).
    3.75 MBq is after 7 half-lives (below 5.0).
    t = 7 × 6.0 h = 42 h  (that is 02:00 two days later)
```

Answer: **60 MBq**, and **42 h** after 08:00.

**Worked example 2.** A detector reads 212 counts per minute with a source present. Background is 12 counts per minute. The half-life is 3.0 h. Find the reading 12 h later.

```
Corrected rate now = 212 - 12 = 200 counts per minute
n = 12 / 3.0 = 4
Corrected rate later = 200 / 2⁴ = 200 / 16 = 12.5 counts per minute
Reading = corrected rate + background = 12.5 + 12 = 24.5 counts per minute
```

Answer: **24.5 counts per minute**. The background does not halve. Halve only the corrected rate.

## Determining a half-life

You must be able to determine a half-life from measurements. A typical method uses a Geiger-Müller tube and counter with a source whose half-life is minutes to hours.

1. With the source far away, record the background count over a long time, such as ten minutes, and calculate a rate.
2. Fix the source and tube in position so the geometry cannot change.
3. Record the number of counts in equal intervals, such as one minute, at regular times.
4. Subtract the background rate from each rate to get the corrected count rate.
5. Plot corrected count rate against time and draw a smooth curve.
6. Read off the time for the rate to fall from any value to half of it. Do this at several places on the curve, for example 160 to 80 and 80 to 40, and average the values.

Because decay is random, each count fluctuates. A larger total count gives a smaller fractional spread, so count for longer.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-activity-half-life-and-the-radioactive-decay-law--04-half-life-from-graph.webp" width="900" height="1010" alt="A decay curve starts at 160 counts per minute and halves every 3.0 h: 80 at 3 h, 40 at 6 h, 20 at 9 h. Arrows mark the time for each halving, all 3.0 h, which are averaged." loading="lazy">
  <figcaption>Read several halving times from the curve and average them to get the half-life.</figcaption>
</figure>


## Real-life uses of radioisotopes

The choice of isotope depends on the type of radiation and how far it penetrates, and on the half-life. The guide names four contexts.

**Medical use.** To image an organ, choose a **gamma** emitter, since gamma rays pass out of the body to a camera while alpha or beta radiation would be absorbed and only add dose. Choose a **short half-life** (hours), so the activity falls quickly after the scan and the patient's dose stays low. Technetium-99m fits this pattern. To destroy diseased tissue, a beta emitter taken up by the target releases its energy over a short distance, which concentrates the damage there. Iodine-131 is used for the thyroid, which absorbs iodine.

**Leaks in underground pipes.** A tracer is added to the fluid in the pipe. A detector is moved along the surface. The count rate rises where the tracer has escaped into the soil. Use a **gamma** emitter, because beta and alpha radiation would not get through soil and pipe wall to the detector. Use a **short half-life**, so the tracer does not stay in the ground.

**Thickness of materials.** A source sits on one side of a moving sheet and a detector on the other. A thicker sheet absorbs more radiation, so the count rate falls, and a change in count rate signals a change in thickness. The radiation must be partly, not fully, absorbed. A **beta** source suits thin metal foil, paper and plastic film, and **gamma** suits thicker metal sheet. Alpha is stopped by almost any sheet. Pick a **long half-life**, so the signal stays steady for months.

**Radioactive dating.** All living things take in carbon, including a tiny fraction of radioactive carbon-14. After death, no new carbon-14 enters and the amount falls with its half-life of 5730 years (supplied as data). Compare the activity per gram of carbon in an old sample with that of living material:

```
n = number of half-lives = how many times the activity has halved
age = n × 5730 years
```

**Worked example 3.** Living wood gives 0.24 Bq per gram of carbon. A bone gives 0.030 Bq per gram. Find its age.

```
Ratio = 0.24 / 0.030 = 8 = 2³, so n = 3
Age = 3 × 5730 = 17 190 years
```

Answer: **about 1.7 × 10⁴ years**. This assumes the activity per gram of carbon in living material was the same then as now.

The half-life must be comparable to the age. Carbon-14 suits samples up to some tens of thousands of years old. Rocks millions of years old need an isotope with a much longer half-life, such as potassium-40 (about 1.25 × 10⁹ years, supplied as data).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-activity-half-life-and-the-radioactive-decay-law--05-radioisotope-uses.webp" width="900" height="1290" alt="Four rows pair a picture with radiation type and half-life. Medical imaging: gamma, short half-life of hours. Leak tracing: gamma, short. Sheet thickness: beta or gamma, long half-life of months. Dating: carbon-14 beta, 5730 years." loading="lazy">
  <figcaption>Choose the radiation by what must get through, and the half-life by how long the signal must last.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-activity-half-life-and-the-radioactive-decay-law--06-carbon-dating.webp" width="900" height="1170" alt="Bars of activity per gram of carbon halve from 0.24 Bq (living) to 0.12, 0.060 and 0.030 at 5730, 11 460 and 17 190 years. The bone at 0.030 has ratio 8 = 2 cubed, so 3 half-lives, 17 190 years." loading="lazy">
  <figcaption>Ratio of activities gives the number of half-lives; multiply by 5730 years.</figcaption>
</figure>


## HL only: the decay constant and the decay law

The **decay constant** λ is the constant of proportionality in "rate of decay is proportional to the number of undecayed nuclei". The unit is s⁻¹ (or h⁻¹, day⁻¹, and so on). Solving it gives the **radioactive decay law**:

```
N = N₀ e^(−λt)
```

**Probability meaning of λ.** In a short interval Δt, the probability that one given nucleus decays is about λΔt. This holds only when λΔt is much smaller than 1. The exact probability is 1 − e^(−λΔt), which can never exceed 1. If λΔt is not small, the simple product misleads.

**Activity.** Activity is the rate of decay, so:

```
A = λN = λN₀ e^(−λt) = A₀ e^(−λt)
```

Corrected count rate follows the same form.

**Half-life link.** Put N = N₀/2 at t = T½: e^(−λT½) = ½, so λT½ = ln2:

```
T½ = ln2 / λ
```

A short half-life means a large λ.

**Worked example 4 (arbitrary time).** Iodine-131 has T½ = 8.0 days (supplied as data). What fraction of a sample remains after 20 days?

```
λ = ln2 / 8.0 = 0.0866 day⁻¹
λt = 0.0866 × 20 = 1.732
N / N₀ = e^(−1.732) = 0.177
```

Answer: **17.7%**. Cross-check: 20 days is 2.5 half-lives, and (½)^2.5 gives the same 0.177.

**Worked example 5 (activity to number of nuclei).** A technetium-99m sample (T½ = 6.0 h) has activity 3.0 × 10⁶ Bq. Find (a) the number of undecayed nuclei and (b) the time for the activity to fall to one tenth.

```
(a) T½ = 6.0 × 3600 = 21 600 s
    λ = ln2 / 21 600 = 3.21 × 10⁻⁵ s⁻¹
    N = A / λ = 3.0 × 10⁶ / 3.21 × 10⁻⁵ = 9.35 × 10¹⁰ nuclei
(b) A / A₀ = 0.10 = e^(−λt)
    t = ln(10) / λ = 2.303 / 3.21 × 10⁻⁵ = 7.18 × 10⁴ s = 19.9 h
```

Answers: **9.35 × 10¹⁰ nuclei** and **19.9 h**. That is 3.32 half-lives, so the integer method cannot give it.

**Worked example 6 (from two readings).** A source reads 840 Bq, then 530 Bq two hours later.

```
ln(A₁/A₂) = λ(t₂ − t₁)
λ = ln(840/530) / 2.0 = 0.230 h⁻¹
T½ = ln2 / 0.230 = 3.0 h
```

Answer: **λ = 0.23 h⁻¹, T½ = 3.0 h**. Plotting ln(A) against t would give a straight line of slope −λ.

**Worked example 7 (probability).** For the technetium sample, compare λt with the exact probability for t = 1.0 h.

```
λt = 3.21 × 10⁻⁵ × 3600 = 0.1155
exact probability = 1 − e^(−0.1155) = 0.1091
```

The approximation is about 6% too high. At t = T½, λt = 0.693, but the exact probability is 0.50.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-activity-half-life-and-the-radioactive-decay-law--07-decay-law-hl.webp" width="900" height="1110" alt="Iodine-131 (half-life 8.0 days) falls to 1/2, 1/4 and 1/8 at 8, 16 and 24 days. At 20 days the curve reads 0.177, so 17.7 percent remains, from lambda = ln2/8.0 = 0.0866 per day and e to the minus 1.73." loading="lazy">
  <figcaption>N = N0 e^(-lambda t) works for any time, and agrees with (1/2)^2.5 at 20 days.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-activity-half-life-and-the-radioactive-decay-law--08-decay-probability-hl.webp" width="900" height="1100" alt="The exact probability 1 - e^(-lambda dt) bends below the straight line lambda dt and never exceeds 1. At one half-life the line gives 0.69 but the exact value is 0.50. For technetium-99m over 1.0 h, 0.1155 is about 6 percent above the exact 0.1091." loading="lazy">
  <figcaption>Use lambda dt as a probability only when it is much smaller than 1.</figcaption>
</figure>


## Common errors

- Halving the raw count rate, not the corrected count rate.
- Using n = t × T½ rather than n = t / T½.
- Mixing time units: λ in s⁻¹ with t in hours.
- Treating activity as the count rate. They are equal only for a detector that catches every decay.
- Saying that after two half-lives everything has decayed. A quarter remains.
- HL: using λt as a probability when λt is not small.
- Choosing an alpha source for gauging or leak tracing. It cannot get through the material.

## Frequently asked questions

**Why is an alpha source not used for thickness gauging or leak tracing?**
Alpha radiation is stopped by almost any sheet, and it cannot get through soil and a pipe wall, so it never reaches the detector.

**Which isotope is used to date rocks millions of years old?**
An isotope with a much longer half-life than carbon-14, such as potassium-40 with a half-life of about 1.25 × 10⁹ years, supplied as data. The half-life must be comparable to the age.

**Is beta or gamma used for thickness gauging?**
The radiation must be partly absorbed. A beta source suits thin metal foil, paper and plastic film, and gamma suits thicker metal sheet, both with a long half-life so the signal stays steady.

**Which radiation is used to treat diseased tissue?**
A beta emitter taken up by the target releases its energy over a short distance, concentrating the damage there. Iodine-131 is used for the thyroid, which absorbs iodine.

## Official syllabus

IB Diploma Programme *Physics guide*, first assessment 2025, published by the International Baccalaureate Organization. Sub-topic E.3, Radioactive decay, including its guidance on real-life contexts and determining a half-life.
