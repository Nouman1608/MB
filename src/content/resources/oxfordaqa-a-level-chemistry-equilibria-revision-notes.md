---
title: "OxfordAQA A Level Chemistry: Equilibria and Le Chatelier Principle — Revision Notes"
resourceType: "revision-notes"
subject: "chemistry"
level: ["a-levels"]
topic: "Physical chemistry"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9620"]
syllabusSeries: "Version 5.3 (first teaching 2019, first AS and A-level exams 2020)"
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc"
    subtopic: "oxfordaqa-a-level-chemistry-3-1-7-1"
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc"
    subtopic: "oxfordaqa-a-level-chemistry-3-1-7-2"
description: "Condensed OxfordAQA 9620 AS notes on dynamic equilibrium, Kc, Le Chatelier's principle and industrial compromise, with the A2 Kp extension flagged."
author: "nouman-ahmed"
reviewer: "farhat-ul-ain-sehgal"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-08-22
featured: false
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by farhat-ul-ain-sehgal on 2026-09-29; 2026-11-08: reviewed by farhat-ul-ain-sehgal."
---

Condensed for the final weeks. For the full explanation, use the
[Equilibria and Le Chatelier's Principle study guide](/resources/oxfordaqa-a-level-chemistry-equilibria-le-chateliers-principle/).

## Dynamic equilibrium

Two conditions, both required:

1. The **rates** of the forward and reverse reactions are equal.
2. The **concentrations** of all species remain constant.

And the system must be **closed**.

**"Dynamic" means the reactions have not stopped** — they continue at equal rates. And **constant is not the same as equal**: the concentrations stay fixed but are generally not equal to one another. Both of those are examined directly.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--01-dynamic-equilibrium.webp" width="900" height="1010" alt="Two graphs of a reversible reaction A to B. Concentrations of A and B level off at constant but unequal values. The forward rate falls and the reverse rate rises until they are equal, which marks equilibrium." loading="lazy">
  <figcaption>At equilibrium the forward and reverse rates are equal and concentrations are constant, not equal.</figcaption>
</figure>


## Equilibrium constants

```
Kc = [products]^coefficients / [reactants]^coefficients
```

**International A2 extension (assessed in Unit 4, not this AS unit):**

```
Kp = (partial pressures of products) / (partial pressures of reactants)
partial pressure = mole fraction x total pressure
```

Both Kc and Kp here are restricted to **homogeneous** equilibria, where every species is in the same phase, so all reactants and products appear in the expression. (Omitting solids and pure liquids is a rule for heterogeneous equilibria, which is beyond this specification.)

**Only temperature changes K.** Everything else shifts the *position* of equilibrium without altering the constant:

| Change | Effect on K |
|---|---|
| Concentration | **None** |
| Pressure | **None** |
| Catalyst | **None** |
| **Temperature** | **Changes it** |

That table is the core of the topic. A catalyst speeds up both directions equally, so equilibrium is reached **sooner** at exactly the same position.

**Temperature is the exception because it alters the two rate constants unequally.** Raising temperature favours the **endothermic** direction, so for an exothermic forward reaction, K **decreases**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-chemistry-equilibria-revision-notes--04-rn-position-or-k.webp" width="900" height="920" alt="Grid: concentration and pressure move the position but not K; a catalyst does neither; temperature moves the position and is the only change to K." loading="lazy">
  <figcaption>Only temperature changes K.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--06-kc-expression.webp" width="900" height="1010" alt="Three reactions each show Kc as products over reactants raised to their coefficients, coloured teal for products and gold for reactants, with units: none, mol dm-3, and mol-1 dm3." loading="lazy">
  <figcaption>Kc is products over reactants, each concentration raised to the power of its coefficient.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--03-temperature-k.webp" width="900" height="1020" alt="A graph of K against temperature shows K falling for an exothermic reaction and rising for an endothermic one. Two rows summarise: raising T lowers K and shifts left for exothermic, and raises K and shifts right for endothermic." loading="lazy">
  <figcaption>Only temperature changes K: it falls for exothermic reactions and rises for endothermic ones as T increases.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--04-catalyst.webp" width="900" height="1000" alt="Product against time with and without a catalyst: the catalysed curve rises faster but both level at the same equilibrium amount. An energy profile shows the same start and end levels but a lower peak with the catalyst." loading="lazy">
  <figcaption>A catalyst makes equilibrium arrive sooner but leaves the position and K unchanged.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--08-kp-partial-pressure.webp" width="900" height="930" alt="Two aligned bars show mole fractions of N2, H2 and NH3 (0.250, 0.625, 0.125) multiplied by 20.0 MPa to give partial pressures 5.00, 12.5 and 2.50 MPa. Kp = 2.50^2 / (5.00 x 12.5^3) = 6.40 x 10^-4 MPa^-2." loading="lazy">
  <figcaption>Partial pressure is mole fraction times total pressure, and Kp uses partial pressures of gases only.</figcaption>
</figure>


## Worked example: calculating Kc

At equilibrium in a 2 dm³ sealed container, N₂(g) + 3H₂(g) ⇌ 2NH₃(g) contains 0.40 mol N₂, 1.20 mol H₂ and 0.80 mol NH₃.

```
Convert moles to concentrations (divide by 2 dm^3):
[N2] = 0.20, [H2] = 0.60, [NH3] = 0.40 mol/dm^3

Kc = [NH3]^2 / ([N2][H2]^3) = 0.40^2 / (0.20 x 0.60^3) = 0.16 / 0.0432 = 3.7
```

Total moles of gas differ on each side (4 → 2), so the concentration units **don't cancel** — **Kc carries units** here, worked out from the overall power difference in the expression. **Always convert moles to concentrations before substituting** — using moles directly is a common error.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-chemistry-equilibria-revision-notes--02-rn-kc-ammonia.webp" width="900" height="1030" alt="Moles 0.40, 1.20, 0.80 in 2 dm3 become 0.20, 0.60, 0.40 mol per dm3; Kc = 0.16/0.0432 = 3.7 mol^-2 dm^6; using moles directly gives a wrong 0.93." loading="lazy">
  <figcaption>Divide moles by volume first: Kc = 3.7 mol^-2 dm^6.</figcaption>
</figure>


## Le Chatelier's principle

> When a change is applied to a system at equilibrium, the position shifts to **oppose** that change.

| Change | Shift |
|---|---|
| Increase reactant concentration | Towards products |
| Increase pressure | Towards the side with **fewer moles of gas** |
| Increase temperature | In the **endothermic** direction |
| Add catalyst | **No shift** |

**If both sides have equal moles of gas, pressure has no effect** — a favourite trick, and easy marks when spotted.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-chemistry-how-far-the-extent-of-chemical-change--04-add-reactant.webp" width="900" height="940" alt="A concentration-time graph for CO + 2H2 and CH3OH. When CO is added, CO jumps then falls with H2 while CH3OH rises to a new equilibrium; K calculated from the final values is still 40.0." loading="lazy">
  <figcaption>Adding CO shifts the position to more CH3OH, but K is unchanged.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--02-pressure-shift.webp" width="900" height="1030" alt="Two syringes hold the same gas particles at low and high pressure. Molecule models of 2SO2 + O2 and 2SO3 show 3 gas molecules on the left and 2 on the right, so higher pressure shifts right." loading="lazy">
  <figcaption>Higher pressure shifts the equilibrium towards the side with fewer gas molecules.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-chemistry-equilibrium-ammonia-and-sulfuric-acid--04-pressure-count-molecules.webp" width="900" height="1010" alt="Three gas equilibria drawn as molecules: 3 to 1 (higher pressure favours forward, more methanol), 2 to 4 (favours backward, less hydrogen), 2 to 2 (no change in yield). A thick arrow marks the favoured direction." loading="lazy">
  <figcaption>Higher pressure favours the side with fewer gas molecules; equal numbers means no change.</figcaption>
</figure>


## Industrial compromise

Both the Haber and Contact processes are **exothermic with fewer moles of gas on the product side**, so the yield is favoured by **low temperature and high pressure**. Yet both run hot.

```
Haber:    N2 + 3H2 <=> 2NH3     450 C, 200 atm, iron catalyst
Contact:  2SO2 + O2 <=> 2SO3    450 C, 1-2 atm, V2O5 catalyst
```

**The answer is always rate versus yield, plus cost:**

- A **lower temperature** would raise the yield but the rate would be uneconomically slow, so a moderate temperature is a compromise.
- **High pressure** raises the yield but costs far more in plant construction and energy — which is why the Contact process, already achieving about 96% conversion at low pressure, does not pay for it, while the Haber process does.

**The catalyst does not improve yield.** It only shortens the time taken to reach equilibrium — which does have economic value, but not through the equilibrium position.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-chemistry-equilibria-revision-notes--03-rn-haber-contact.webp" width="900" height="1080" alt="Haber (4 to 2 gas molecules, 200 atm) and Contact (3 to 2, 1-2 atm), both 450 C, on a log pressure axis; Contact already converts about 96% at low pressure." loading="lazy">
  <figcaption>Both are exothermic with fewer product gas molecules, but only Haber pays for high pressure.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--05-haber-compromise.webp" width="900" height="900" alt="Percentage of ammonia at equilibrium falls as temperature rises and increases with pressure (10, 100, 200 atm). A bar shows rate rising with temperature, so a moderate temperature and high pressure are chosen. The catalyst only speeds up the approach." loading="lazy">
  <figcaption>A moderate temperature and high pressure balance yield, rate and cost; the catalyst does not raise yield.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-chemistry-equilibrium-ammonia-and-sulfuric-acid--03-contact-process-stages.webp" width="900" height="960" alt="Three stages: burn sulfur to SO2; convert SO2 to SO3 over vanadium(V) oxide at about 450 C and atmospheric pressure (exothermic, reversible); add water to SO3 to make sulfuric acid." loading="lazy">
  <figcaption>The three stages of the contact process with Stage 2 conditions.</figcaption>
</figure>


## Calculations

Use an **ICE table** — Initial, Change, Equilibrium. Change values follow the **stoichiometric ratios**. Convert moles to concentrations by dividing by volume **before** substituting into Kc.

Units of K vary with the equation and must be worked out each time; if Δn(gas) = 0, K has no units.

## Exam traps

- Saying the reactions stop at equilibrium.
- Saying concentrations become equal rather than constant.
- Claiming a catalyst increases yield or changes K.
- Claiming pressure changes K.
- Forgetting that pressure has no effect when moles of gas are equal.
- Using moles instead of concentrations in Kc.
- Forgetting to check whether Kc has units — this depends on the overall power difference in the expression, and is zero only when the total moles of gas are equal on both sides.

## Self-test

1. State the two conditions for dynamic equilibrium.
2. Which single factor changes the value of K, and why?
3. What does a catalyst do to the position of equilibrium?
4. Why does the Haber process use 450 °C when the reaction is exothermic?
5. When does a pressure change have no effect?
6. For N₂ + 3H₂ ⇌ 2NH₃, why does Kc carry units, and what must be done to moles before they are substituted into the Kc expression?

**Answers:** 1. The rates of the forward and reverse reactions are equal, and the concentrations of all species remain constant, in a closed system. 2. Temperature — it alters the rate constants of the forward and reverse reactions unequally. 3. Nothing; it increases the rate of both directions equally, so equilibrium is reached sooner at the same position. 4. A lower temperature would give a higher yield but an uneconomically slow rate, so 450 °C is a compromise between yield and rate. 5. When there are equal numbers of moles of gas on both sides of the equation. 6. Kc carries units because the total moles of gas differ on each side (4 on the left, 2 on the right), so the concentration units in the expression don't fully cancel; moles must first be divided by the volume to convert them into concentrations before substitution.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-chemistry-equilibria-revision-notes--01-rn-ice-ratio.webp" width="900" height="890" alt="ICE table for N2 + 3H2 to 2NH3. Initial 0.80, 2.40, 0 mol; change shown as 1, 3 and 2 blocks of 0.40 mol (-0.40, -1.20, +0.80); equilibrium 0.40, 1.20, 0.80 mol." loading="lazy">
  <figcaption>Changes in an ICE table follow the 1 : 3 : 2 coefficients.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--07-kc-calculation.webp" width="900" height="1020" alt="Bars show PCl5 falling from 0.250 to 0.150 mol while PCl3 and Cl2 rise to 0.100 mol. Dividing by 5.00 dm3 gives concentrations, and Kc = 0.0200 x 0.0200 / 0.0300 = 0.0133 mol dm-3." loading="lazy">
  <figcaption>Convert equilibrium amounts to concentrations before substituting into Kc.</figcaption>
</figure>

## Frequently asked questions

**Are the concentrations equal at equilibrium?**
No. At dynamic equilibrium the concentrations are constant, not equal to one another. The forward and reverse reactions continue at equal rates in a closed system, which keeps each concentration fixed.

**What happens to K when you raise the temperature of an exothermic reaction?**
Raising the temperature favours the endothermic direction, so for a reaction whose forward direction is exothermic the position of equilibrium moves left and K decreases. Temperature is the only change that alters K.

**When does changing the pressure have no effect on an equilibrium?**
If both sides of the equation have the same number of moles of gas, changing the pressure does not shift the position of equilibrium. Pressure never changes the value of K.

**Is Kp in the AS part of OxfordAQA 9620 Chemistry?**
No. Kp is an International A2 extension (section 3.1.12) assessed in Unit 4, not in the AS unit that covers Kc and Le Chatelier's principle.
