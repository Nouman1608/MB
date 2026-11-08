---
title: "AS Chemistry: Chemical Equilibria — Revision Notes"
resourceType: "revision-notes"
subject: "chemistry"
level: ["a-levels"]
topic: "Equilibria"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9701"]
syllabusSeries: "2025-2027"
order: 7.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "as-equilibria"
    subtopic: "as-chemical-equilibria"
description: "Condensed recall notes on dynamic equilibrium, Kc and Kp, and Le Chateliers principle for Cambridge AS & A Level Chemistry 9701."
author: "nouman-ahmed"
reviewer: "farhat-ul-ain-sehgal"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by farhat-ul-ain-sehgal on 2026-09-29; 2026-11-08: reviewed by farhat-ul-ain-sehgal."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Chemical Equilibria study guide](/resources/as-chemical-equilibria/).

## Dynamic equilibrium

Two conditions, both required:

1. The **rates** of the forward and reverse reactions are equal.
2. The **concentrations** of all species remain constant.

And it must be a **closed system**. "Dynamic" means the reactions have not stopped — they continue at equal rates, which is why saying "the reaction has stopped" or "the amounts are equal" both lose the mark. Constant is not the same as equal.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--01-dynamic-equilibrium.webp" width="900" height="1010" alt="Two graphs of a reversible reaction A to B. Concentrations of A and B level off at constant but unequal values. The forward rate falls and the reverse rate rises until they are equal, which marks equilibrium." loading="lazy">
  <figcaption>At equilibrium the forward and reverse rates are equal and concentrations are constant, not equal.</figcaption>
</figure>


## Equilibrium constants

For `aA + bB ⇌ cC + dD`:

```
Kc = [C]^c [D]^d / ([A]^a [B]^b)
Kp = (pC^c x pD^d) / (pA^a x pB^b)
```

Partial pressure: `p = mole fraction × total pressure`.

**Only Kc and Kp tell you the position of equilibrium.** Everything else — concentration, pressure, catalyst — shifts the position without changing K.

| Change | Effect on K |
|---|---|
| Concentration | **None** |
| Pressure | **None** |
| Catalyst | **None** |
| **Temperature** | **Changes K** |

That table is the topic's core. A catalyst speeds up both directions equally, so equilibrium is reached **sooner** but the position is identical.

Solids and pure liquids are **omitted** from K expressions — their concentrations are effectively constant.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--06-kc-expression.webp" width="900" height="1010" alt="Three reactions each show Kc as products over reactants raised to their coefficients, coloured teal for products and gold for reactants, with units: none, mol dm-3, and mol-1 dm3." loading="lazy">
  <figcaption>Kc is products over reactants, each concentration raised to the power of its coefficient.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--04-catalyst.webp" width="900" height="1000" alt="Product against time with and without a catalyst: the catalysed curve rises faster but both level at the same equilibrium amount. An energy profile shows the same start and end levels but a lower peak with the catalyst." loading="lazy">
  <figcaption>A catalyst makes equilibrium arrive sooner but leaves the position and K unchanged.</figcaption>
</figure>


## Worked example: Kc

At equilibrium in a 1 dm³ sealed container, H₂(g) + I₂(g) ⇌ 2HI(g) contains 0.50 mol H₂, 0.50 mol I₂ and 3.0 mol HI. Since the volume is 1 dm³, concentrations equal the mole values directly.

```
Kc = [HI]^2 / ([H2][I2]) = 3.0^2 / (0.50 x 0.50) = 9.0 / 0.25 = 36
```

Equal total moles of gas on each side (1 + 1 → 2), so the concentration units **cancel exactly** and Kc has **no units**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-chemistry-equilibria-revision-notes--01-eq-kc-hi-worked.webp" width="900" height="950" alt="A 1 dm3 vessel shows bars of 0.50 mol H2, 0.50 mol I2 and 3.0 mol HI. Concentrations equal the moles because the volume is 1 dm3. Kc = 3.0^2 / (0.50 x 0.50) = 36 with no units, as there are 2 gas moles on each side." loading="lazy">
  <figcaption>The page worked example: Kc = 36, no units.</figcaption>
</figure>


## Mole fraction, partial pressure and Kp

The **mole fraction** of a gas component A is xₐ = nₐ ÷ n(total); its **partial pressure** is Pₐ = xₐ × P(total). Kp is written the same way as Kc, but using partial pressures.

**Worked example.** A sealed vessel at total pressure 200 kPa contains an equilibrium mixture of N₂O₄(g) ⇌ 2NO₂(g) with mole fractions 0.60 for N₂O₄ and 0.40 for NO₂.

```
P(N2O4) = 0.60 x 200 = 120 kPa
P(NO2)  = 0.40 x 200 = 80 kPa
Kp = (P_NO2)^2 / P_N2O4 = 80^2 / 120 = 53.3 kPa
```

The mole count changes here (1 → 2), so the pressure units **don't cancel** — Kp carries units (kPa here), found from the net order of (2 − 1) = 1.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-chemistry-equilibria-revision-notes--02-eq-kp-n2o4-units.webp" width="900" height="990" alt="Mole-fraction bar 0.60 and 0.40 is multiplied by 200 kPa to give partial pressures 120 and 80 kPa. Kp = 80^2 / 120 = 53.3 kPa, with units kPa^(2-1) because the gas moles change from 1 to 2." loading="lazy">
  <figcaption>Kp in kPa: units fail to cancel when the gas moles change.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--08-kp-partial-pressure.webp" width="900" height="930" alt="Two aligned bars show mole fractions of N2, H2 and NH3 (0.250, 0.625, 0.125) multiplied by 20.0 MPa to give partial pressures 5.00, 12.5 and 2.50 MPa. Kp = 2.50^2 / (5.00 x 12.5^3) = 6.40 x 10^-4 MPa^-2." loading="lazy">
  <figcaption>Partial pressure is mole fraction times total pressure, and Kp uses partial pressures of gases only.</figcaption>
</figure>


## Le Chatelier's principle

> When a system at equilibrium is subjected to a change, the position of equilibrium shifts to **oppose** that change.

| Change | Shift |
|---|---|
| Increase concentration of a reactant | Towards products |
| Increase pressure | Towards the side with **fewer moles of gas** |
| Increase temperature | In the **endothermic** direction |
| Add a catalyst | **No shift** |

If both sides have equal moles of gas, **pressure has no effect** — a favourite trick.

Temperature is the only change that alters K, because it changes the relative rate constants of the two directions. Raising temperature favours the endothermic direction, so if the forward reaction is exothermic, K decreases.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--02-pressure-shift.webp" width="900" height="1030" alt="Two syringes hold the same gas particles at low and high pressure. Molecule models of 2SO2 + O2 and 2SO3 show 3 gas molecules on the left and 2 on the right, so higher pressure shifts right." loading="lazy">
  <figcaption>Higher pressure shifts the equilibrium towards the side with fewer gas molecules.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-chemistry-how-far-the-extent-of-chemical-change--04-add-reactant.webp" width="900" height="940" alt="A concentration-time graph for CO + 2H2 and CH3OH. When CO is added, CO jumps then falls with H2 while CH3OH rises to a new equilibrium; K calculated from the final values is still 40.0." loading="lazy">
  <figcaption>Adding CO shifts the position to more CH3OH, but K is unchanged.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--03-temperature-k.webp" width="900" height="1020" alt="A graph of K against temperature shows K falling for an exothermic reaction and rising for an endothermic one. Two rows summarise: raising T lowers K and shifts left for exothermic, and raises K and shifts right for endothermic." loading="lazy">
  <figcaption>Only temperature changes K: it falls for exothermic reactions and rises for endothermic ones as T increases.</figcaption>
</figure>


## The industrial compromise

Both the Haber and Contact processes are exothermic with fewer moles of gas on the right, so equilibrium yield is favoured by **low temperature and high pressure**. Yet both run hot.

```
Haber:    N2 + 3H2 <=> 2NH3     450 C, 200 atm, iron catalyst
Contact:  2SO2 + O2 <=> 2SO3    450 C, 1-2 atm, V2O5 catalyst
```

**The answer is always rate versus yield, plus cost.** Low temperature would give a better yield but unacceptably slowly, so a moderate temperature is a compromise. High pressure improves yield but costs more in plant and energy — which is why the Contact process, with industrial SO₂-to-SO₃ conversion typically quoted at around 96-99.5% (depending on plant and source), runs near atmospheric pressure while the Haber process pays for 200 atm.

The catalyst does not improve yield. It only shortens the time to reach equilibrium.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-chemistry-equilibria-revision-notes--03-eq-haber-contact.webp" width="900" height="950" alt="Haber and Contact are compared: both at 450 C, Haber at about 200 atm with iron, Contact at 1-2 atm with V2O5. Contact conversion is already about 96-99.5 percent so high pressure is not worth the cost." loading="lazy">
  <figcaption>Same temperature, very different pressure.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--05-haber-compromise.webp" width="900" height="900" alt="Percentage of ammonia at equilibrium falls as temperature rises and increases with pressure (10, 100, 200 atm). A bar shows rate rising with temperature, so a moderate temperature and high pressure are chosen. The catalyst only speeds up the approach." loading="lazy">
  <figcaption>A moderate temperature and high pressure balance yield, rate and cost; the catalyst does not raise yield.</figcaption>
</figure>


## Calculations

Use an **ICE table** — Initial, Change, Equilibrium.

- Change values are in the **ratio of the stoichiometric coefficients**.
- Convert moles to concentration by dividing by volume **before** substituting into Kc.
- Kc units vary with the equation; work them out from the expression each time rather than memorising.
- If Δn(gas) = 0, Kc has no units.

## Exam traps

- Saying the forward and reverse reactions stop.
- Saying concentrations become equal rather than constant.
- Claiming a catalyst increases yield.
- Claiming pressure changes K.
- Using moles instead of concentrations in Kc.
- Including solids or pure liquids in the expression.
- Forgetting that pressure has no effect when moles of gas are equal on both sides.
- Using mole values directly in Kp instead of converting to partial pressures via mole fraction.
- Assuming K always carries units, or never does, instead of working it out from the net power difference each time.

## Self-test

1. State the two conditions for dynamic equilibrium.
2. Which single factor changes the value of Kc?
3. What does a catalyst do to the position of equilibrium?
4. `N₂ + 3H₂ ⇌ 2NH₃` is exothermic. Why is 450 °C used?
5. When does a pressure change have no effect on the position of equilibrium?
6. For H₂(g) + I₂(g) ⇌ 2HI(g) in a 1 dm³ container at equilibrium with 0.50 mol H₂, 0.50 mol I₂ and 3.0 mol HI, calculate Kc and state its units.
7. How is the partial pressure of a gas found from its mole fraction, and why does Kp sometimes carry units?

**Answers:** 1. The rates of the forward and reverse reactions are equal, and the concentrations of all species remain constant, in a closed system. 2. Temperature. 3. Nothing — it increases the rate of both directions equally, so equilibrium is reached sooner at the same position. 4. A compromise: a lower temperature would give a higher yield but the rate would be too slow to be economic. 5. When there are equal numbers of moles of gas on both sides of the equation. 6. Kc = 3.0² ÷ (0.50 × 0.50) = 9.0 ÷ 0.25 = 36, with no units, since the total moles of gas are equal on both sides (2 on each). 7. Partial pressure = mole fraction × total pressure; Kp carries units whenever the total moles of gas differ between products and reactants, since the pressure units in the expression then fail to cancel exactly.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--07-kc-calculation.webp" width="900" height="1020" alt="Bars show PCl5 falling from 0.250 to 0.150 mol while PCl3 and Cl2 rise to 0.100 mol. Dividing by 5.00 dm3 gives concentrations, and Kc = 0.0200 x 0.0200 / 0.0300 = 0.0133 mol dm-3." loading="lazy">
  <figcaption>Convert equilibrium amounts to concentrations before substituting into Kc.</figcaption>
</figure>

## Frequently asked questions

**Should solids be included in a Kc expression?**
No. Solids and pure liquids are left out of the Kc expression. Including them is one of the exam traps in Cambridge International AS & A Level Chemistry 9701 equilibrium questions.

**When does pressure have no effect on an equilibrium?**
Changing pressure has no effect on the position of equilibrium when there are equal moles of gas on both sides of the equation, for example H₂ + I₂ ⇌ 2HI.

**Can you use moles directly in a Kc expression?**
Only if the volume is 1 dm³. In general, divide the moles of each species by the volume to get concentrations before substituting into Kc.

**Why do industrial processes use compromise conditions?**
The conditions that give the highest equilibrium yield are not always those that give a fast enough rate or a reasonable cost. A compromise answer should say what is being balanced against what, such as yield against rate.
