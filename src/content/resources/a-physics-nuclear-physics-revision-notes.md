---
title: "A Level Physics: Nuclear Physics — Revision Notes"
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

**Worked example.** A helium-4 nucleus has mass 4.00150 u; a proton is 1.00728 u, a neutron 1.00867 u.

```
mass of separate nucleons = 2(1.00728) + 2(1.00867) = 4.03190 u
mass defect  dm = 4.03190 - 4.00150 = 0.03040 u
binding energy  E = 0.03040 x 931.5 = 28.3 MeV
binding energy per nucleon = 28.3 / 4 = 7.08 MeV
```

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

**Worked example.** A source has half-life 8.0 days and initial activity 4.8 × 10⁵ Bq. Find the activity after 20 days, and the initial number of undecayed nuclei.

```
lambda = ln2 / t_half = 0.693 / 8.0 = 0.0866 day^-1
A = A0 e^(-lambda t) = 4.8x10^5 x e^(-0.0866x20) = 4.8x10^5 x 0.1769 = 8.49x10^4 Bq

Converting lambda to s^-1: 0.0866 / 86400 = 1.002x10^-6 s^-1
N = A / lambda = 4.8x10^5 / 1.002x10^-6 = 4.79x10^11 nuclei
```

Always convert λ to the **same time unit** as the answer requires — a day⁻¹ value must become s⁻¹ before it is combined with an activity in Bq (which is s⁻¹ by definition).

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
- Mixing time units for λ — a half-life in days gives λ in day⁻¹, which must be converted to s⁻¹ before combining with an activity in Bq.
- Forgetting to divide total binding energy by the **number of nucleons**, not just reporting the total.

## Self-test

1. Define binding energy per nucleon and say why it matters.
2. Why do both fission and fusion release energy?
3. A sample has λ = 0.023 s⁻¹. Find its half-life.
4. Which radiation is most ionising, and why does that make it least penetrating?
5. Write the changes to A and Z for beta-minus decay.
6. A helium-4 nucleus has mass 4.00150 u (proton 1.00728 u, neutron 1.00867 u, 1 u = 931.5 MeV). Find its binding energy per nucleon.
7. A source has half-life 8.0 days and initial activity 4.8 × 10⁵ Bq. Find its activity after 20 days.

**Answers:** 1. The energy needed to remove one nucleon from the nucleus, averaged over all nucleons; the higher it is, the more stable the nucleus. 2. Both move the products towards the peak of the binding-energy-per-nucleon curve near iron-56, so binding energy per nucleon increases and the surplus is released. 3. t½ = 0.693/0.023 = **30 s**. 4. Alpha — its large charge and mass mean it interacts strongly with matter, losing energy rapidly over a short distance, so it is stopped by paper. 5. A is unchanged; Z increases by 1. 6. Mass of nucleons = 2(1.00728) + 2(1.00867) = 4.03190 u; Δm = 4.03190 − 4.00150 = 0.03040 u; E = 0.03040 × 931.5 = 28.3 MeV; per nucleon = 28.3 ÷ 4 = **7.08 MeV**. 7. λ = 0.693 ÷ 8.0 = 0.0866 day⁻¹; A = 4.8 × 10⁵ × e^(−0.0866×20) = **8.49 × 10⁴ Bq**.
