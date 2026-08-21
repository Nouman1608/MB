---
title: "A Level Physics: Nuclear Physics: Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Nuclear physics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 23.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "a-nuclear-physics"
    subtopic: "a-mass-defect-and-nuclear-binding-energy"
  - qualification: "a-level"
    topic: "a-nuclear-physics"
    subtopic: "a-radioactive-decay"
description: "Condensed recall notes on mass defect, binding energy, radioactive decay and the decay constant for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Nuclear Physics study guide](/resources/a-physics-nuclear-physics/).

## Mass defect and binding energy

```
mass defect       delta-m = (mass of separate nucleons) - (mass of nucleus)
binding energy    E = delta-m c^2
```

**Binding energy** is the energy required to **separate** a nucleus into its constituent nucleons — equivalently, the energy released when it forms.

**Binding energy per nucleon** is the measure of stability. The curve peaks near **iron-56**, which is why:

```
LIGHT nuclei  ->  FUSION   moves up the curve  ->  energy released
HEAVY nuclei  ->  FISSION  moves up the curve  ->  energy released
```

Both processes increase binding energy per nucleon. That single idea explains the whole shape of the curve.

**Unit conversion:** 1 u = 931.5 MeV; 1 eV = 1.60 × 10⁻¹⁹ J.

## Radioactive decay

Decay is **random** (you cannot predict which nucleus decays next) and **spontaneous** (unaffected by temperature, pressure or chemical state).

```
activity          A = lambda N          becquerels (Bq)
decay             N = N0 e^(-lambda t)
                  A = A0 e^(-lambda t)
half-life         t_half = ln 2 / lambda  =  0.693 / lambda
```

λ is the **decay constant** — the probability per unit time that a given nucleus decays.

To find λ graphically, plot **ln A against t**: the gradient is **−λ**.

## The three radiations

| | Alpha | Beta | Gamma |
|---|---|---|---|
| Nature | Helium nucleus | Fast electron/positron | EM photon |
| Charge | +2e | ∓e | 0 |
| Penetration | Paper | ~3 mm aluminium | Thick lead |
| Range in air | Few cm | ~1 m | Inverse-square |
| Ionising power | **Strongest** | Moderate | Weakest |
| Deflection in a field | Slight, one way | Large, opposite way | None |

Ionising power and penetrating power are **inversely related** — alpha ionises strongly, so it loses energy fast and stops quickly.

## Decay equations

```
alpha:   A -> (A-4) and Z -> (Z-2)
beta-:   A unchanged, Z -> (Z+1)     (n -> p + e- + antineutrino)
beta+:   A unchanged, Z -> (Z-1)
gamma:   no change to A or Z
```

Both nucleon number and proton number must **balance** on each side.

## Exam traps

- Binding energy is the energy to **separate** nucleons, not the energy holding them "stored".
- Mass defect: separate nucleons are **heavier** than the bound nucleus.
- Both fission and fusion release energy — by moving **towards** iron on the curve.
- λ and half-life are inversely related; a long half-life means a small λ.
- Activity requires the number of **undecayed** nuclei, not the original number.
- Background radiation must be subtracted before analysing experimental counts.

## Self-test

1. Define binding energy per nucleon and say why it matters.
2. Why do both fission and fusion release energy?
3. A sample has λ = 0.023 s⁻¹. Find its half-life.
4. Which radiation is most ionising, and why does that make it least penetrating?
5. Write the changes to A and Z for beta-minus decay.

**Answers:** 1. The energy needed to remove one nucleon from the nucleus, averaged over all nucleons; the higher it is, the more stable the nucleus. 2. Both move the products towards the peak of the binding-energy-per-nucleon curve near iron-56, so binding energy per nucleon increases and the surplus is released. 3. t½ = 0.693/0.023 = **30 s**. 4. Alpha — its large charge and mass mean it interacts strongly with matter, losing energy rapidly over a short distance, so it is stopped by paper. 5. A is unchanged; Z increases by 1.
