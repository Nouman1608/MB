---
title: "Edexcel IAL Physics: Nuclear Decay — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YPH11"]
syllabusSeries: "Issue 3"
order: 5.4
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-5-thermodynamics-radiation-oscillations-and-cosmology"
    subtopic: "nuclear-decay"
description: "Condensed recall notes on radioactive decay, half-life, decay constant, nuclear equations and radiation safety for Edexcel International A Level Physics WPH15."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Nuclear Decay study guide](/resources/edexcel-ial-physics-nuclear-decay/).

## Types of radiation

| | Nature | Charge | Penetration | Ionising |
|---|---|---|---|---|
| **Alpha** | Helium nucleus | +2 | Paper | **Strong** |
| **Beta-minus** | Electron | −1 | ~3 mm aluminium | Moderate |
| **Beta-plus** | Positron | +1 | Annihilates rapidly | Moderate |
| **Gamma** | EM photon | 0 | Thick lead | **Weak** |

**Ionising power and penetration are inversely related.** Alpha ionises strongly, therefore loses energy rapidly, therefore penetrates least. That causal chain — not two separate facts — is what a full answer states.

## Decay equations

```
alpha:      A -4, Z -2
beta-minus: A same, Z +1        n -> p + e- + antineutrino    (d -> u)
beta-plus:  A same, Z -1        p -> n + e+ + neutrino        (u -> d)
gamma:      no change
```

Both A and Z must balance on each side.

**The neutrino was postulated to preserve conservation of energy and momentum**, because beta particles were emitted with a *range* of energies rather than the single value a two-body decay requires.

## Decay law

```
activity   A = lambda N            becquerel, Bq
N = N0 e^(-lambda t)
A = A0 e^(-lambda t)
half-life  t_1/2 = ln2 / lambda
```

**λ is the probability per unit time that a given nucleus decays.** Because decay is **random and spontaneous**, only the average behaviour of a large sample is predictable — which is why half-life is defined statistically.

Half-life is **unaffected by temperature, pressure or chemical state**, because it is a property of the nucleus, not of the atom's environment.

**Graphical method:** a plot of `ln A` against `t` gives a straight line of gradient **−λ**. Turning exponential data into a straight line is the standard analysis technique.

## Practical points

**Background radiation must be subtracted** from measured count rates before any half-life calculation. Sources: radon from rocks, cosmic rays, food and medical procedures.

**The inverse square law** applies to gamma from a point source: `I ∝ 1/r²`. Doubling the distance quarters the intensity — which is why distance is such an effective safety measure.

**Safety:** minimise **time**, maximise **distance**, use **shielding**. Store sources in lead-lined containers and handle with tongs.

**Choosing a source for an application** follows from the penetration table:

- **Medical tracer** → gamma with a **short half-life**, so it penetrates the body to be detected but does not remain radioactive inside the patient.
- **Thickness gauge** → beta, since alpha is fully absorbed and gamma passes through, so neither would respond to thickness.
- **Smoke alarm** → alpha, strongly ionising but safely contained.

## Exam traps

- Saying alpha is most penetrating because it is most ionising.
- Forgetting to subtract background count.
- Failing to balance both A and Z.
- Saying half-life depends on temperature.
- Using A rather than ln A when linearising decay data.
- Choosing a long half-life for a medical tracer.

## Self-test

1. Explain the relationship between ionising power and penetration.
2. Why was the neutrino postulated?
3. What does the decay constant represent?
4. How do you obtain λ graphically from decay data?
5. Why does a medical tracer need a short half-life and gamma emission?

**Answers:** 1. Strongly ionising radiation transfers energy rapidly through many ionising interactions, so it loses energy quickly and cannot penetrate far; weakly ionising radiation interacts rarely and penetrates deeply. 2. Beta particles were emitted with a range of energies rather than a single value, which appeared to violate conservation of energy and momentum; an undetected particle carrying the balance was proposed. 3. The probability per unit time that any given nucleus will decay. 4. Plot ln A against t; the gradient is −λ. 5. Gamma penetrates the body so it can be detected externally, and a short half-life ensures the activity falls quickly so the patient's exposure is limited.
