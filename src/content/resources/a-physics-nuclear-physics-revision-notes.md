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
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
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

**Unit conversion:** 1 u = 931.5 MeV; 1 eV = 1.60 × 10⁻¹⁹ J. This 931.5 MeV/u
figure is a useful memorised shortcut, but it is not itself printed on the
data sheet. The **official/primary route** is to convert via the constants
the data sheet actually supplies — unified atomic mass constant u in kg,
the speed of light c, and the elementary charge e — using E = Δm c² (in J)
then dividing by e to convert to eV. Because 931.5 MeV/u is itself a rounded
figure, working from the data-sheet constants directly can give a final
answer that differs from the 931.5 MeV/u shortcut in the **third
significant figure**; either method is acceptable, but know that a slight
discrepancy can arise.

**Worked example.** A helium-4 nucleus has mass 4.00150 u; a proton is 1.00728 u, a neutron 1.00867 u.

```
mass of separate nucleons = 2(1.00728) + 2(1.00867) = 4.03190 u
mass defect  dm = 4.03190 - 4.00150 = 0.03040 u
binding energy  E = 0.03040 x 931.5 = 28.3 MeV
binding energy per nucleon = 28.3 / 4 = 7.08 MeV
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--06-aphy-nuclear-mass-defect.webp" width="900" height="920" alt="The four separate nucleons of helium-4 weigh 4.031882 u but the nucleus 4.001505 u. The mass defect 0.030377 u is equivalent to 28.3 MeV, the binding energy, which is 7.07 MeV per nucleon." loading="lazy">
  <figcaption>The binding energy is the energy equivalent of the mass defect.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--07-aphy-nuclear-binding-curve.webp" width="900" height="980" alt="Binding energy per nucleon rises steeply for light nuclei, peaks near iron-56 at about 8.8 MeV and falls slowly to about 7.6 MeV for uranium-235. Fusion of light nuclei and fission of heavy nuclei both move nuclei towards the peak and release energy: 17.6 MeV for deuterium plus tritium and about 184 MeV for a uranium-235 fission." loading="lazy">
  <figcaption>Both fusion and fission release energy because their products sit nearer the peak of the curve.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--01-aphy-nuclear-radiations.webp" width="900" height="840" alt="Alpha is stopped by paper, beta by a few mm of aluminium and gamma is only reduced by thick lead. Alpha makes the most ion pairs along its short track and gamma the fewest. Alpha is least hazardous outside the body and most hazardous inside it." loading="lazy">
  <figcaption>Alpha, beta and gamma differ in how far they penetrate and how strongly they ionise.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--03-aphy-nuclear-random-decay.webp" width="900" height="1170" alt="100 dice are thrown repeatedly and every six is removed. Which die goes is unpredictable, but the number left follows the smooth curve 100 x (5/6)^n, halving after about 3.8 throws." loading="lazy">
  <figcaption>Each nucleus has a constant chance of decaying, so unpredictable single decays give a smooth exponential for a large sample.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--04-aphy-nuclear-half-life.webp" width="900" height="1010" alt="Corrected count rate against time for a source starting at 800 counts per minute. The rate halves every 14 minutes whether it starts from 800 or 488, so the half-life is constant and lambda = ln 2 / 14 = 0.0495 per minute." loading="lazy">
  <figcaption>The half-life is the same wherever on the decay curve you start.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--05-aphy-nuclear-log-graph.webp" width="900" height="990" alt="ln of corrected count rate against time is a straight line falling from 6.461 to 4.710 over 50 minutes. The gradient is -0.0350 per minute, so lambda = 0.0350 per minute and the half-life is 19.8 minutes." loading="lazy">
  <figcaption>A straight ln graph supports the exponential law and its gradient is minus lambda.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--09-aphy-nuclear-radius.webp" width="900" height="1110" alt="Nuclei with A = 4, 64 and 216 have radii 1.9, 4.8 and 7.2 fm from R = 1.2 A^(1/3) fm. R plotted against the cube root of A is a straight line of gradient R0. Mass and volume both scale with A, so every nucleus has the same density, about 2.3 x 10^17 kg per cubic metre." loading="lazy">
  <figcaption>Nuclear radius grows as the cube root of A, so nuclear density is constant.</figcaption>
</figure>


## The three radiations

| | Alpha | Beta | Gamma |
|---|---|---|---|
| Nature | Helium nucleus | Fast electron/positron | EM photon |
| Charge | +2e | ∓e | 0 |
| Penetration | Paper | ~3 mm aluminium | Thick lead |
| Range in air | Few cm | ~1 m | No definite range — intensity falls as 1/d² |
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

**Answers:** 1. The total binding energy of the nucleus divided by the number of nucleons; the higher it is, the more stable the nucleus. 2. Both move the products towards the peak of the binding-energy-per-nucleon curve near iron-56, so binding energy per nucleon increases and the surplus is released. 3. t½ = 0.693/0.023 = **30 s**. 4. Alpha — its large charge and mass mean it interacts strongly with matter, losing energy rapidly over a short distance, so it is stopped by paper. 5. A is unchanged; Z increases by 1. 6. Mass of nucleons = 2(1.00728) + 2(1.00867) = 4.03190 u; Δm = 4.03190 − 4.00150 = 0.03040 u; E = 0.03040 × 931.5 = 28.3 MeV; per nucleon = 28.3 ÷ 4 = **7.08 MeV**. 7. λ = 0.693 ÷ 8.0 = 0.0866 day⁻¹; A = 4.8 × 10⁵ × e^(−0.0866×20) = **8.49 × 10⁴ Bq**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--02-aphy-nuclear-decay-modes.webp" width="900" height="990" alt="Graph of neutron number against proton number with a narrow band of stable nuclei above the N = Z line. Neutron-rich nuclei above the band decay by beta-minus (Z+1, N-1), proton-rich nuclei below it by beta-plus or electron capture (Z-1, N+1), and very heavy nuclei by alpha (Z-2, N-2)." loading="lazy">
  <figcaption>The position of a nucleus relative to the stable band decides its decay mode.</figcaption>
</figure>

