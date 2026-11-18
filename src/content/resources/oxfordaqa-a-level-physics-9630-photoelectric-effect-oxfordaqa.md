---
title: "OxfordAQA International AS and A-level Physics (9630): Photoelectric effect"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.5 – Oscillations and waves"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "AS"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 5.10
syllabusTopics:
  - qualification: "a-level"
    topic: "oscillations-and-waves-oxfordaqa-alevel"
    subtopic: "photoelectric-effect-oxfordaqa"
description: "Deeper study guide to 9630 section 3.5.10: photons and E = hf, photon rates, threshold frequency, work function, stopping potential and hf = ϕ + Ek(max)."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section **3.5.10 Photoelectric effect** of the OxfordAQA International AS and A-level Physics (9630) specification. The section lists the "photon model of electromagnetic radiation, the Planck constant", E = hf = hc/λ, "threshold frequency; photon explanation of threshold frequency", "work function ϕ, stopping potential" and the photoelectric equation hf = ϕ + Ek(max), where Ek(max) is the maximum kinetic energy of the photoelectrons. The experimental determination of stopping potential is not required. It is shared AS and A-level content.

The broader [study guide to electron collisions, the photoelectric effect and wave-particle duality](/resources/oxfordaqa-a-level-physics-electron-collisions-photoelectric-effect-and-wave/) sets out the observations and the basic calculation. This page adds the reasoning that harder questions need: counting photons, predicting what happens when intensity or frequency changes, and comparing metals on one graph. Afterwards use the [photoelectric effect revision notes](/resources/oxfordaqa-a-level-physics-9630-photoelectric-effect-oxfordaqa-revision-notes/) and the [photoelectric effect practice questions](/resources/oxfordaqa-a-level-physics-9630-photoelectric-effect-oxfordaqa-practice/).

Data used: h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, e = 1.60 × 10⁻¹⁹ C.

## The photon model, used quantitatively

In the photon model, electromagnetic radiation of frequency f is a stream of photons, each carrying energy E = hf = hc/λ. Two separate properties describe a beam:

- **Frequency** (or wavelength) fixes the energy of **each** photon.
- **Intensity** at a given frequency fixes **how many** photons arrive per second per unit area.

The power of a source is the energy per second, so the photon rate is power divided by the energy of one photon.

### Worked example 1: photons from a laser

A 5.0 mW laser emits light of wavelength 650 nm. How many photons does it emit per second?

```
E = hc / λ = 6.63 × 10⁻³⁴ × 3.00 × 10⁸ / 650 × 10⁻⁹ = 3.06 × 10⁻¹⁹ J
N = P / E = 5.0 × 10⁻³ / 3.06 × 10⁻¹⁹ = 1.6 × 10¹⁶ per second
```

The individual photon energy is tiny, so even a weak beam carries enormous numbers of photons. That is why light appears continuous in everyday life.

## Threshold frequency: the photon explanation in full

Examiners award marks for a chain of reasoning, not for the word "threshold" alone. A complete explanation contains these links:

1. Each electron absorbs the energy of **one** photon, all at once.
2. To escape, an electron at the surface needs at least the **work function** ϕ.
3. If hf is less than ϕ, no single photon gives an electron enough energy, and an electron cannot store energy from several photons, so **no electrons are emitted** however intense the light.
4. The threshold frequency is therefore f₀ = ϕ/h.
5. Above f₀, emission begins at once, because one photon is enough.

The wave model fails because it spreads the energy continuously over the surface: it predicts that intense light of any frequency would eventually free electrons, and that brighter light would produce faster ones.

## Why "maximum" kinetic energy?

The photoelectric equation hf = ϕ + Ek(max) uses the maximum, because ϕ is the minimum energy needed to escape, for electrons right at the surface. Electrons from deeper inside lose some energy before they leave, so they emerge with less than Ek(max). The emitted electrons therefore have a spread of kinetic energies from zero up to Ek(max).

The **stopping potential** Vs is the potential difference needed to stop even the fastest photoelectrons, so eVs = Ek(max). In volts, Vs has the same number as Ek(max) in electronvolts.

## What changes, and what does not

### Worked example 2: predicting the effect of changes

Ultraviolet light of wavelength 300 nm falls on a metal of work function 2.3 eV.

```
photon energy: E = hc / λ = 6.63 × 10⁻¹⁹ J = 4.14 eV
Ek(max) = 4.14 − 2.3 = 1.84 eV
stopping potential Vs = 1.84 V
```

Now three separate changes:

| Change | Photon energy | Ek(max) and Vs | Electrons emitted per second |
|---|---|---|---|
| Intensity doubled, same λ | Unchanged | Unchanged, 1.84 eV | Doubled |
| Wavelength halved to 150 nm | Doubled to 8.29 eV | Rises to 5.99 eV, not doubled | Depends on photon rate |
| Wavelength 600 nm (2.07 eV) | Below ϕ | No emission | Zero |

The second row is a common trap. Halving λ doubles hf, but Ek(max) = hf − ϕ, so it rises by the whole extra photon energy rather than doubling.

### Worked example 3: the largest possible current

A metal surface receives 2.0 μW of ultraviolet radiation of wavelength 250 nm. Each photon can release at most one electron.

```
E = hc / λ = 7.96 × 10⁻¹⁹ J
photons per second = 2.0 × 10⁻⁶ / 7.96 × 10⁻¹⁹ = 2.5 × 10¹² s⁻¹
largest possible current = 2.5 × 10¹² × 1.60 × 10⁻¹⁹ = 4.0 × 10⁻⁷ A
```

The real current is smaller, because many photons are reflected or give their energy to electrons that do not escape. But the current can never exceed the photon rate multiplied by e, which is why photocurrent is proportional to intensity.

## Comparing metals on one graph

Rearranging the equation gives Ek(max) = hf − ϕ. A graph of Ek(max) against f is a straight line with:

- **gradient h**, the same for every metal;
- **intercept on the f axis** at the threshold frequency f₀ = ϕ/h;
- **intercept on the Ek axis** (by extrapolation) at −ϕ.

### Worked example 4: two metals

Metal A has ϕ = 2.3 eV and metal B has ϕ = 4.5 eV.

```
A: f₀ = 2.3 × 1.60 × 10⁻¹⁹ / 6.63 × 10⁻³⁴ = 5.55 × 10¹⁴ Hz  (threshold wavelength 540 nm)
B: f₀ = 4.5 × 1.60 × 10⁻¹⁹ / 6.63 × 10⁻³⁴ = 1.09 × 10¹⁵ Hz  (threshold wavelength 276 nm)
```

On the graph, the two lines are **parallel**, with B's line shifted to the right. Visible light of 450 nm (2.76 eV) releases electrons from A but not from B. A question that shows two lines of different gradients for two metals is showing something impossible: the gradient is always h.

## Common mistakes

- Saying brighter light gives photoelectrons more energy. It gives more photoelectrons.
- Saying an electron "builds up" energy from several photons until it escapes.
- Treating Ek(max) as the kinetic energy of every photoelectron.
- Assuming Ek(max) doubles when the frequency doubles.
- Mixing eV and J in hf = ϕ + Ek(max).
- Calling the threshold frequency a "minimum intensity".
- Drawing lines of different gradients for different metals.

## Exam technique

- **Explain** the threshold frequency: use the five-link chain above, and mention one photon per electron.
- **Explain** why intensity does not affect Ek(max): intensity changes the number of photons, not the energy of each.
- **Calculate**: convert everything to joules or everything to eV before substituting, and state the final unit.
- **Use a graph**: read f₀ from the f-axis intercept, find h from the gradient, and ϕ from the extrapolated intercept or from hf₀.
- **Describe** the evidence for photons: no emission below f₀, instant emission above it, and Ek(max) depending on frequency only.

## Next steps

Condense the page with the [photoelectric effect revision notes](/resources/oxfordaqa-a-level-physics-9630-photoelectric-effect-oxfordaqa-revision-notes/) and test yourself with the [photoelectric effect practice questions](/resources/oxfordaqa-a-level-physics-9630-photoelectric-effect-oxfordaqa-practice/). The way this effect changed ideas about light is continued in the [wave-particle duality study guide](/resources/oxfordaqa-a-level-physics-9630-wave-particle-duality-oxfordaqa/), and photon energies from atoms are in the [electron collisions study guide](/resources/oxfordaqa-a-level-physics-9630-collisions-of-electrons-with-atoms-oxfordaqa/).
