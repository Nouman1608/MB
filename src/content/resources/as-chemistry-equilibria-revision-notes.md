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

## The industrial compromise

Both the Haber and Contact processes are exothermic with fewer moles of gas on the right, so equilibrium yield is favoured by **low temperature and high pressure**. Yet both run hot.

```
Haber:    N2 + 3H2 <=> 2NH3     450 C, 200 atm, iron catalyst
Contact:  2SO2 + O2 <=> 2SO3    450 C, 1-2 atm, V2O5 catalyst
```

**The answer is always rate versus yield, plus cost.** Low temperature would give a better yield but unacceptably slowly, so a moderate temperature is a compromise. High pressure improves yield but costs more in plant and energy — which is why the Contact process, already achieving ~96% conversion, runs near atmospheric pressure while the Haber process pays for 200 atm.

The catalyst does not improve yield. It only shortens the time to reach equilibrium.

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

## Self-test

1. State the two conditions for dynamic equilibrium.
2. Which single factor changes the value of Kc?
3. What does a catalyst do to the position of equilibrium?
4. `N₂ + 3H₂ ⇌ 2NH₃` is exothermic. Why is 450 °C used?
5. When does a pressure change have no effect on the position of equilibrium?

**Answers:** 1. The rates of the forward and reverse reactions are equal, and the concentrations of all species remain constant, in a closed system. 2. Temperature. 3. Nothing — it increases the rate of both directions equally, so equilibrium is reached sooner at the same position. 4. A compromise: a lower temperature would give a higher yield but the rate would be too slow to be economic. 5. When there are equal numbers of moles of gas on both sides of the equation.
