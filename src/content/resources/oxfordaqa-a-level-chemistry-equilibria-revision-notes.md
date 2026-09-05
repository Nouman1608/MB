---
title: "OxfordAQA A Level Chemistry: Equilibria and Le Chatelier Principle — Revision Notes"
resourceType: "revision-notes"
subject: "chemistry"
level: ["a-levels"]
topic: "Physical chemistry"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9620"]
syllabusSeries: "Version 4.3 (first teaching 2019, first AS and A-level exams 2020; specification updated November 2022)"
description: "Condensed recall notes on dynamic equilibrium, Kc and Kp, Le Chatelier principle and industrial compromise for International A Level Chemistry."
author: "nouman-ahmed"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Equilibria and Le Chatelier's Principle study guide](/resources/oxfordaqa-a-level-chemistry-equilibria-le-chateliers-principle/).

## Dynamic equilibrium

Two conditions, both required:

1. The **rates** of the forward and reverse reactions are equal.
2. The **concentrations** of all species remain constant.

And the system must be **closed**.

**"Dynamic" means the reactions have not stopped** — they continue at equal rates. And **constant is not the same as equal**: the concentrations stay fixed but are generally not equal to one another. Both of those are examined directly.

## Equilibrium constants

```
Kc = [products]^coefficients / [reactants]^coefficients
Kp = (partial pressures of products) / (partial pressures of reactants)
partial pressure = mole fraction x total pressure
```

Solids and pure liquids are **omitted** — their concentrations are effectively constant.

**Only temperature changes K.** Everything else shifts the *position* of equilibrium without altering the constant:

| Change | Effect on K |
|---|---|
| Concentration | **None** |
| Pressure | **None** |
| Catalyst | **None** |
| **Temperature** | **Changes it** |

That table is the core of the topic. A catalyst speeds up both directions equally, so equilibrium is reached **sooner** at exactly the same position.

**Temperature is the exception because it alters the two rate constants unequally.** Raising temperature favours the **endothermic** direction, so for an exothermic forward reaction, K **decreases**.

## Worked example: calculating Kc

At equilibrium in a 2 dm³ sealed container, N₂(g) + 3H₂(g) ⇌ 2NH₃(g) contains 0.40 mol N₂, 1.20 mol H₂ and 0.80 mol NH₃.

```
Convert moles to concentrations (divide by 2 dm^3):
[N2] = 0.20, [H2] = 0.60, [NH3] = 0.40 mol/dm^3

Kc = [NH3]^2 / ([N2][H2]^3) = 0.40^2 / (0.20 x 0.60^3) = 0.16 / 0.0432 = 3.7
```

Total moles of gas differ on each side (4 → 2), so the concentration units **don't cancel** — **Kc carries units** here, worked out from the overall power difference in the expression. **Always convert moles to concentrations before substituting** — using moles directly is a common error.

## Le Chatelier's principle

> When a change is applied to a system at equilibrium, the position shifts to **oppose** that change.

| Change | Shift |
|---|---|
| Increase reactant concentration | Towards products |
| Increase pressure | Towards the side with **fewer moles of gas** |
| Increase temperature | In the **endothermic** direction |
| Add catalyst | **No shift** |

**If both sides have equal moles of gas, pressure has no effect** — a favourite trick, and easy marks when spotted.

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
