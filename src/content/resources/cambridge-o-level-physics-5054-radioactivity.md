---
title: "Cambridge O Level Physics (5054): Radioactivity"
resourceType: "study-guides"
subject: "physics"
level: ["o-levels"]
topic: "Nuclear physics"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["5054"]
syllabusSeries: "2026-2028"
order: 5.2
syllabusTopics:
  - qualification: "o-level"
    topic: "nuclear-physics"
    subtopic: "radioactivity"
description: "Detection, background, alpha, beta and gamma, decay equations, fission, fusion, half-life, uses and safety, for Cambridge O Level Physics 5054 subtopic 5.2."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **5.2 Radioactivity**, from Topic 5, Nuclear
physics, of Cambridge O Level Physics 5054 (2026–2028 series), in its six
parts: 5.2.1 detection, 5.2.2 the three types of emission, 5.2.3
radioactive decay, 5.2.4 fission and fusion, 5.2.5 half-life and 5.2.6
safety precautions. The
[Nuclear physics study guide](/resources/o-level-physics-nuclear-physics/)
covers each part in outline; this page adds an absorption-experiment
analysis, a decay chain, mass-based half-life calculations and a structured
way to justify the choice of isotope for each application.

Companion pages: [Radioactivity revision notes](/resources/cambridge-o-level-physics-5054-radioactivity-revision-notes/)
and [Radioactivity practice questions](/resources/cambridge-o-level-physics-5054-radioactivity-practice/).
The structure of the nucleus is in
[subtopic 5.1](/resources/cambridge-o-level-physics-5054-the-nuclear-model-of-the-atom/).

## 5.2.1 Detecting radioactivity

- **Alpha particles**: detected with a **cloud chamber** (they leave short,
  thick, straight tracks) or a **spark counter** (they ionise the air
  between a wire and a gauze, producing sparks).
- **Beta particles and gamma radiation**: detected with a **Geiger–Müller
  (GM) tube and counter**. In 5054, "beta" means β⁻, a fast electron.

Readings are given as a **count rate**, in counts/s or counts/minute.

**Background radiation** is the ionising radiation present all the time.
The sources the syllabus names are **radon gas** in the air, **rocks and
buildings**, **food and drink**, and **cosmic rays**. Every measurement
includes it, so subtract it:

```
corrected count rate = measured count rate − background count rate
```

**Worked example 1.** With no source present, a GM tube records 150 counts
in 5.0 minutes. With a source, it reads 750 counts/minute.

```
background = 150 / 5.0 = 30 counts/minute
corrected  = 750 − 30 = 720 counts/minute  (= 12 counts/s)
```

Both rates must be in the same unit before subtracting.

## 5.2.2 The three types of emission

Emission from a nucleus is **spontaneous** (it cannot be triggered or
prevented) and **random in direction**.

| Property | Alpha (α) | Beta (β) | Gamma (γ) |
|---|---|---|---|
| Nature | 2 protons + 2 neutrons (helium nucleus) | High-speed electron from the nucleus | High-frequency electromagnetic wave |
| Charge | Positive | Negative | None |
| Ionising effect | Strongest | Moderate | Weakest |
| Penetration | Least: stopped by paper or a few cm of air | Stopped by a few mm of aluminium | Most: reduced only by thick lead or concrete |
| Electric field | Towards the negative plate | Towards the positive plate, deflected more | Not deflected |
| Magnetic field | Deflected one way | Deflected the opposite way, more strongly | Not deflected |

Beta particles are deflected more than alpha particles because they are
far less massive, even though their charge is smaller. Strong ionisation
and short range go together: an alpha particle transfers its energy
quickly by ionising many atoms, so it is stopped soon.

**Worked example 2 (identifying the radiation).** A GM tube faces a source.
Background is 30 counts/minute. Readings with different absorbers:

| Absorber | Count rate (counts/min) |
|---|---|
| None | 830 |
| Thin paper | 820 |
| 3 mm aluminium | 330 |
| 5 cm lead | 30 |

Paper makes almost no difference (the small drop is within random
variation), so **no alpha** is emitted. Aluminium removes a large part, so
**beta** is present. The 300 counts/minute above background that pass the
aluminium but are stopped by lead show **gamma** is present. The source
emits beta and gamma.

## 5.2.3 Radioactive decay and decay equations

Radioactive decay is a **change in an unstable nucleus**, emitting α, β
and/or γ. It is **spontaneous and random**: you cannot predict when a
particular nucleus will decay.

| Emission | Nucleon number A | Proton number Z | Symbol in equations |
|---|---|---|---|
| α | Decreases by 4 | Decreases by 2 | ⁴₂He (or ⁴₂α) |
| β | Unchanged | Increases by 1 | ⁰₋₁e (or ⁰₋₁β) |
| γ | Unchanged | Unchanged | γ |

In beta decay, a neutron in the nucleus becomes a proton and an electron,
and the electron is emitted; that is why Z rises by 1 while A stays the
same. Gamma emission only removes energy, so the nuclide does not change.

Check every equation: **top numbers balance** and **bottom numbers
balance**.

**Worked example 3.**

```
alpha:  ²¹⁰₈₄Po → ²⁰⁶₈₂Pb + ⁴₂He        210 = 206 + 4;  84 = 82 + 2
beta:   ⁹⁰₃₈Sr  → ⁹⁰₃₉Y  + ⁰₋₁e        90 = 90 + 0;   38 = 39 − 1
gamma:  ᴬ_Z X  → ᴬ_Z X + γ             no change in A or Z
```

**Worked example 4 (a two-step chain).** Thorium-232, ²³²₉₀Th, emits an
alpha particle, and the product then emits a beta particle.

```
step 1 (α): A = 232 − 4 = 228,  Z = 90 − 2 = 88   → ²²⁸₈₈Ra
step 2 (β): A = 228,            Z = 88 + 1 = 89   → ²²⁸₈₉Ac
```

## 5.2.4 Fission and fusion

**Fusion**: two **smaller nuclei combine** to form a larger nucleus,
releasing energy. Fusion of hydrogen nuclei into helium is the **energy
source of the stars**, including the Sun.

**Fission**: a large nucleus such as **uranium-235 absorbs a neutron**,
becomes unstable and **splits into two daughter nuclei**, releasing **two
or more neutrons** and energy. One possible fission:

```
²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n      236 = 141 + 92 + 3;  92 = 56 + 36
```

**Chain reaction**: the released neutrons can be absorbed by other
uranium-235 nuclei, causing more fissions, which release more neutrons. In
a **nuclear reactor** this is controlled:

- **moderator** (for example graphite or water): slows the neutrons down,
  so they are more likely to be absorbed by uranium-235 and cause fission
- **control rods** (for example boron): absorb neutrons; lowering them
  reduces the rate of fission, raising them increases it, and the aim is
  that on average one neutron from each fission causes another
- **coolant**: carries the thermal energy from the core to the boiler,
  where it produces steam to drive turbines

## 5.2.5 Half-life

The **half-life** of an isotope is the time taken for **half the nuclei of
that isotope in any sample to decay**. The count rate (corrected for
background) and the mass of undecayed isotope both halve every half-life.

```
after n half-lives, fraction remaining = (1/2)ⁿ
```

**Worked example 5 (from count rates).** Corrected count rate falls from
1600 to 200 counts/minute in 12 hours.

```
1600 → 800 → 400 → 200 : three half-lives
half-life = 12 / 3 = 4.0 hours
```

**Worked example 6 (from mass).** 64 g of an isotope has a half-life of
5.0 days. After 20 days, 20 / 5.0 = 4 half-lives have passed:
64 → 32 → 16 → 8 → **4 g** remains.

**From a decay curve**: read the time for the count rate to fall from any
value to half that value, then repeat from a different starting point and
average. Subtract background first if the curve levels off above zero.

**Carbon-14 dating.** Living things take in carbon, including a small,
steady proportion of radioactive carbon-14. After death no new carbon is
taken in, so the carbon-14 decays without being replaced. Comparing the
activity per gram of an old sample with that of living material gives its
age. The half-life of carbon-14 is about 5700 years.

**Worked example 7.** A bone sample has one-sixteenth of the carbon-14
activity per gram of living bone: 1 → ½ → ¼ → ⅛ → 1/16 is four half-lives,
so its age ≈ 4 × 5700 ≈ **23 000 years**.

### Choosing an isotope for an application

Two questions decide every choice: **which radiation** (by penetration and
ionisation) and **what half-life** (long enough to be useful, short enough
not to linger where it is harmful).

| Application | Radiation | Reason | Half-life |
|---|---|---|---|
| Smoke alarm | Alpha | Strongly ionises the air in the detector; short range, so none escapes the casing | Long (hundreds of years) so the alarm lasts without replacement |
| Irradiating food | Gamma | Penetrates packaging and kills bacteria | Long, so the output stays steady |
| Sterilising equipment | Gamma | Passes through sealed packaging | Long |
| Thickness of paper or thin sheet | Beta | Partly absorbed, so the count changes noticeably with thickness (alpha would be stopped, gamma barely affected) | Long, so changes in count are due to thickness, not decay |
| Thickness of thick metal sheet | Gamma | Only gamma penetrates enough | Long |
| Diagnosing cancer (tracer) | Gamma | Passes out of the body to a detector; least ionising | Short (hours), so the patient is not exposed for long |
| Treating cancer | Gamma | Penetrating beams aimed at the tumour kill cancerous cells | Long for an external source |

## 5.2.6 Safety precautions

Ionising radiation can cause **cell death**, **mutations** and **cancer**.
Radioactive materials are moved, used and stored so as to:

- **reduce exposure time** — work quickly, and remove the source from its
  container only when it is needed
- **increase distance** between source and living tissue — handle sources
  with long tongs, never with hands, and point them away from the body
- **use shielding** to absorb radiation — store sources in lead-lined boxes,
  and use lead or concrete screens

## Common mistakes

- Not subtracting background before halving, or subtracting it in
  different units.
- Saying gamma is deflected by electric or magnetic fields. It has no
  charge.
- Writing −1 instead of +1 for the change in Z in beta decay. The emitted
  electron carries −1, so the nucleus gains +1.
- Defining half-life as "half the time for the sample to decay" or "the
  time for the mass to halve" without mentioning nuclei of that isotope.
- Choosing alpha for a thickness gauge: it would not pass through even
  paper.
- Mixing up the moderator (slows neutrons) and control rods (absorb
  neutrons).

## Exam technique for Cambridge command words

- **Calculate** a half-life: show the halving steps, count them, divide the
  time.
- **Complete** a decay equation: write the missing numbers so that tops and
  bottoms both balance.
- **Explain** the choice of isotope: give the radiation and the reason, then
  the half-life and the reason — four distinct points.
- **Describe** safe handling: use the three syllabus ideas — time,
  distance, shielding — each with a concrete action.

*Written against Cambridge O Level Physics 5054, 2026–2028 series. Always
check the current syllabus for your examination year.*
