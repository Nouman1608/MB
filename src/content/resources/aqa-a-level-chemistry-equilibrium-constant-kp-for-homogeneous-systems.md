---
title: "AQA A-Level Chemistry: Equilibrium constant Kp for homogeneous systems (7405)"
seoTitle: "AQA A-Level Chemistry Kp Study Guide (7405)"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Equilibrium constant Kp for homogeneous systems"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7405"]
syllabusSeries: "For teaching from September 2015"
order: 10
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "equilibrium-constant-kp-for-homogeneous-systems-7405"
description: "Study guide for AQA A-Level Chemistry (7405) section 3.1.10: mole fractions, partial pressures, Kp expressions, units, calculations and what changes Kp."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide covers section 3.1.10 of the AQA AS and A-level Chemistry specification (7404/7405), version 1.2 (July 2026), for AS and A-level exams from June 2016 onwards. The whole section is marked **A-level only**, so it is not part of the AS course. It builds directly on section 3.1.6 (Le Chatelier's principle and Kc), which you should revise first in the [Kc study guide](/resources/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc/).

The [AQA A-Level Chemistry hub](/boards/aqa/a-level/chemistry/) lists every topic, and the [printable checklist](/checklists/aqa/a-level/chemistry/) lets you tick off each outcome. Mole calculations underpin everything here; the [relative mass and the mole guide](/resources/a-level-aqa-chemistry-relative-mass-and-the-mole/) covers them.

## What this topic covers

| Spec ref | What you must be able to do | Level |
|---|---|---|
| 3.1.10 | Deduce Kp from the equation for a reversible reaction in the gas phase; know Kp is calculated from partial pressures at constant temperature | A-level only |
| 3.1.10 | Derive partial pressure from mole fraction and total pressure | A-level only |
| 3.1.10 | Construct an expression for Kp for a homogeneous system in equilibrium | A-level only |
| 3.1.10 | Perform calculations involving Kp | A-level only |
| 3.1.10 | Predict the qualitative effects of changes in temperature and pressure on the position of equilibrium | A-level only |
| 3.1.10 | Predict the qualitative effects of changes in temperature on the value of Kp | A-level only |
| 3.1.10 | Understand that a catalyst affects the rate of attainment of equilibrium but not the value of the equilibrium constant | A-level only |

Where it is examined: the A-level assessment overview lists section 3.1.10 under Paper 1, and Paper 3 can test any content. The specification lists no required practical in section 3.1.10. It does list skills: reporting answers to an appropriate number of significant figures (MS 1.1) and calculating partial pressures and Kp (MS 2.2 and 2.3).

## Why Kp?

For reactions in the gas phase, it is often easier to measure pressure than concentration. Kp is the equilibrium constant written with **partial pressures** instead of concentrations. A **homogeneous** system here means every species in the equation is a gas.

## Mole fraction and partial pressure

**Mole fraction** of gas A:

```
         moles of A
  x(A) = --------------------------
         total moles of gas in mixture
```

**Partial pressure** of gas A: the pressure A would exert if it alone occupied the whole container. It is found from:

```
  p(A) = x(A) x P(total)
```

Two checks you can always use:

- the mole fractions add up to exactly 1
- the partial pressures add up to the total pressure

Mole fraction has no units. Partial pressure has the same unit as the total pressure (Pa, kPa or MPa).

### Worked example 1: partial pressures

An equilibrium mixture contains 2.00 mol N₂, 5.00 mol H₂ and 1.00 mol NH₃ at a total pressure of 20.0 MPa. Calculate the partial pressure of each gas.

```
total moles = 2.00 + 5.00 + 1.00 = 8.00 mol

x(N2)  = 2.00 / 8.00 = 0.250   p(N2)  = 0.250 x 20.0 = 5.00 MPa
x(H2)  = 5.00 / 8.00 = 0.625   p(H2)  = 0.625 x 20.0 = 12.5 MPa
x(NH3) = 1.00 / 8.00 = 0.125   p(NH3) = 0.125 x 20.0 = 2.50 MPa

check: 0.250 + 0.625 + 0.125 = 1.000
       5.00 + 12.5 + 2.50   = 20.0 MPa
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--08-kp-partial-pressure.webp" width="900" height="930" alt="Two aligned bars show mole fractions of N2, H2 and NH3 (0.250, 0.625, 0.125) multiplied by 20.0 MPa to give partial pressures 5.00, 12.5 and 2.50 MPa. Kp = 2.50^2 / (5.00 x 12.5^3) = 6.40 x 10^-4 MPa^-2." loading="lazy">
  <figcaption>Partial pressure is mole fraction times total pressure, and Kp uses partial pressures of gases only.</figcaption>
</figure>


## Writing a Kp expression

For a general gas-phase reaction:

aA(g) + bB(g) ⇌ cC(g) + dD(g)

```
         p(C)^c x p(D)^d
  Kp  =  ---------------
         p(A)^a x p(B)^b
```

The pattern is the same as Kc: products on top, reactants underneath, each raised to the power of its coefficient in the equation. The difference is that you use partial pressures, not square-bracket concentrations. Kp applies at constant temperature, and only the equilibrium partial pressures go into it.

**Units.** Substitute the pressure unit for every p and cancel. The power left over equals (moles of gas on the right) minus (moles of gas on the left).

### Worked example 2: expression, units and value

Use the mixture from Worked example 1 to write Kp for N₂(g) + 3H₂(g) ⇌ 2NH₃(g), deduce its units and calculate its value.

```
          p(NH3)^2
  Kp  =  ---------------
         p(N2) x p(H2)^3

units: MPa^2 / (MPa x MPa^3) = MPa^-2

Kp = 2.50^2 / (5.00 x 12.5^3)
   = 6.25 / (5.00 x 1953.125)
   = 6.25 / 9765.625
   = 6.40 x 10^-4 MPa^-2
```

If a question gives pressures in kPa, keep kPa throughout; the units become kPa⁻² and the number changes. Never mix units inside one expression.

### Unit patterns

| Reaction | Gas moles (right − left) | Units of Kp |
|---|---|---|
| H₂(g) + Cl₂(g) ⇌ 2HCl(g) | 2 − 2 = 0 | none |
| N₂O₄(g) ⇌ 2NO₂(g) | 2 − 1 = +1 | kPa |
| 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) | 2 − 3 = −1 | kPa⁻¹ |
| N₂(g) + 3H₂(g) ⇌ 2NH₃(g) | 2 − 4 = −2 | kPa⁻² |

When the gas moles are equal on both sides, Kp has no units and the total pressure cancels out of the calculation.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--06-kc-expression.webp" width="900" height="1010" alt="Three reactions each show Kc as products over reactants raised to their coefficients, coloured teal for products and gold for reactants, with units: none, mol dm-3, and mol-1 dm3." loading="lazy">
  <figcaption>Kc is products over reactants, each concentration raised to the power of its coefficient.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--09-solids-left-out.webp" width="900" height="1030" alt="A furnace shows FeO(s) and Fe(s) greyed as left out, with CO and CO2 gas particles counted. Kp = p(CO2)/p(CO) with no units. A second example, CaCO3(s) = CaO(s) + CO2(g), gives Kp = p(CO2)." loading="lazy">
  <figcaption>Pure solids are left out of Kc and Kp; only gases (Kp) or aqueous species (Kc) appear.</figcaption>
</figure>


## Calculations involving Kp

Most Kp questions start from initial amounts. Use this method:

1. Write the balanced equation and a moles table: initial, change, equilibrium.
2. Use the equation's ratios to fill in the change row.
3. Add the equilibrium moles to get the total.
4. Find each mole fraction, then each partial pressure.
5. Substitute into the Kp expression and work out the units.

### Worked example 3: Kp from initial moles

0.800 mol of sulfuryl chloride is heated in a sealed container. At equilibrium, 0.300 mol of chlorine is present and the total pressure is 250 kPa.

SO₂Cl₂(g) ⇌ SO₂(g) + Cl₂(g)

Calculate Kp.

```
                   SO2Cl2    SO2       Cl2
initial / mol      0.800     0         0
change / mol      -0.300    +0.300    +0.300
equilibrium / mol  0.500     0.300     0.300     total = 1.100 mol

x                  0.4545    0.2727    0.2727
p / kPa            113.6     68.18     68.18     (x times 250)

Kp = p(SO2) x p(Cl2) / p(SO2Cl2)
   = 68.18 x 68.18 / 113.6
   = 40.9 kPa
```

Keep extra figures in the middle steps and round only at the end. If you round each partial pressure to 3 s.f. first (68.2 and 114), you get 40.8 kPa, which may lose the accuracy mark.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--02-pressure-shift.webp" width="900" height="1030" alt="Two syringes hold the same gas particles at low and high pressure. Molecule models of 2SO2 + O2 and 2SO3 show 3 gas molecules on the left and 2 on the right, so higher pressure shifts right." loading="lazy">
  <figcaption>Higher pressure shifts the equilibrium towards the side with fewer gas molecules.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--07-kc-calculation.webp" width="900" height="1020" alt="Bars show PCl5 falling from 0.250 to 0.150 mol while PCl3 and Cl2 rise to 0.100 mol. Dividing by 5.00 dm3 gives concentrations, and Kc = 0.0200 x 0.0200 / 0.0300 = 0.0133 mol dm-3." loading="lazy">
  <figcaption>Convert equilibrium amounts to concentrations before substituting into Kc.</figcaption>
</figure>


### Worked example 4: finding an unknown partial pressure

For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) at a fixed temperature, Kp = 0.0450 kPa⁻¹. At equilibrium, p(SO₂) = 20.0 kPa and p(O₂) = 50.0 kPa. Calculate p(SO₃).

```
Kp = p(SO3)^2 / (p(SO2)^2 x p(O2))

p(SO3)^2 = Kp x p(SO2)^2 x p(O2)
         = 0.0450 x 20.0^2 x 50.0
         = 900
p(SO3)   = sqrt(900) = 30.0 kPa
```

### Significant figures

The specification expects answers given to an appropriate number of significant figures, limited by the least accurate data. If the total pressure is given to 2 s.f. and the moles to 3 s.f., give Kp to 2 s.f.

## Changing the conditions

### Pressure: position moves, Kp does not

Le Chatelier's principle still applies. Increasing the total pressure shifts the position of equilibrium to the side with **fewer moles of gas**. Decreasing it shifts the position to the side with more moles of gas. If the gas moles are equal on both sides, pressure has no effect on the position.

The value of Kp does **not** change when the pressure changes at constant temperature. You can see why by writing each p as x × P.

### Worked example 5: why the position shifts

For N₂O₄(g) ⇌ 2NO₂(g), Kp = 50.0 kPa at a fixed temperature. At a total pressure of 100 kPa, the equilibrium mole fractions are x(NO₂) = 0.500 and x(N₂O₄) = 0.500.

```
Kp = p(NO2)^2 / p(N2O4) = (x(NO2) x P)^2 / (x(N2O4) x P)
   = x(NO2)^2 x P / x(N2O4)

At P = 100 kPa: 0.500^2 x 100 / 0.500 = 50.0 kPa   (equals Kp)

Double the pressure to 200 kPa with the same mole fractions:
   0.500^2 x 200 / 0.500 = 100 kPa   (now bigger than Kp)
```

Kp is fixed at this temperature, so the mixture must change until the fraction falls back to 50.0 kPa. That needs a smaller x(NO₂) and a bigger x(N₂O₄): the equilibrium shifts left, towards the side with fewer moles of gas. This is exactly what Le Chatelier's principle predicts, and Kp stays at 50.0 kPa.

### Temperature: the only change that alters Kp

Temperature changes both the position of equilibrium and the value of Kp.

| Forward reaction | Temperature increased | Position | Value of Kp |
|---|---|---|---|
| Exothermic (ΔH negative) | shifts in the endothermic (reverse) direction | moves left | decreases |
| Endothermic (ΔH positive) | shifts in the endothermic (forward) direction | moves right | increases |

Lowering the temperature does the opposite. You can also work backwards: if Kp rises as the temperature rises, the forward reaction is endothermic.

### Worked example 6: deducing the sign of ΔH

For a gas-phase reaction, Kp is 2.6 × 10⁴ kPa⁻¹ at 600 K and 3.1 × 10² kPa⁻¹ at 800 K. State whether the forward reaction is exothermic or endothermic.

```
T increases -> Kp decreases
-> fewer products at equilibrium at the higher temperature
-> equilibrium has shifted left, so the reverse reaction is endothermic
-> forward reaction is exothermic
```

### Catalysts

A catalyst speeds up the forward and reverse reactions equally. Equilibrium is reached faster, but the position of equilibrium and the value of Kp are both unchanged.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--01-dynamic-equilibrium.webp" width="900" height="1010" alt="Two graphs of a reversible reaction A to B. Concentrations of A and B level off at constant but unequal values. The forward rate falls and the reverse rate rises until they are equal, which marks equilibrium." loading="lazy">
  <figcaption>At equilibrium the forward and reverse rates are equal and concentrations are constant, not equal.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--04-catalyst.webp" width="900" height="1000" alt="Product against time with and without a catalyst: the catalysed curve rises faster but both level at the same equilibrium amount. An energy profile shows the same start and end levels but a lower peak with the catalyst." loading="lazy">
  <figcaption>A catalyst makes equilibrium arrive sooner but leaves the position and K unchanged.</figcaption>
</figure>


### Summary of effects

| Change (constant T unless stated) | Position of equilibrium | Value of Kp |
|---|---|---|
| Increase total pressure | shifts to fewer moles of gas | unchanged |
| Add a catalyst | unchanged | unchanged |
| Increase temperature | shifts in endothermic direction | changes (see table above) |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--03-temperature-k.webp" width="900" height="1020" alt="A graph of K against temperature shows K falling for an exothermic reaction and rising for an endothermic one. Two rows summarise: raising T lowers K and shifts left for exothermic, and raises K and shifts right for endothermic." loading="lazy">
  <figcaption>Only temperature changes K: it falls for exothermic reactions and rises for endothermic ones as T increases.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc--05-haber-compromise.webp" width="900" height="900" alt="Percentage of ammonia at equilibrium falls as temperature rises and increases with pressure (10, 100, 200 atm). A bar shows rate rising with temperature, so a moderate temperature and high pressure are chosen. The catalyst only speeds up the approach." loading="lazy">
  <figcaption>A moderate temperature and high pressure balance yield, rate and cost; the catalyst does not raise yield.</figcaption>
</figure>


## Industrial link

The introduction to section 3.1.10 explains that Kp lets us calculate how an equilibrium yield depends on partial pressures, which matters for many industrial processes. In the Haber process, N₂(g) + 3H₂(g) ⇌ 2NH₃(g), there are 4 moles of gas on the left and 2 on the right, so high pressure raises the equilibrium proportion of ammonia. Kp itself does not change with pressure; the mole fractions adjust. The compromise reasoning (rate, cost, safety) is the same as in section 3.1.6.

## Common errors

- Leaving a gas out of the total moles, for example a product that starts at zero. The total must include every gas in the equilibrium mixture.
- Using initial moles instead of equilibrium moles to find the total.
- Writing square brackets inside a Kp expression. Kp uses p(X), not [X].
- Forgetting powers: p(H₂)³ in the Haber expression, not p(H₂).
- Mixing kPa and Pa in one calculation, or quoting no units when the gas moles differ on each side.
- Saying Kp increases when the pressure increases. Only temperature changes Kp.
- Saying a catalyst increases the equilibrium yield.
- Rounding partial pressures early, then losing the final accuracy mark.

## Frequently asked questions

**What is Kp in AQA A-level Chemistry?**
Kp is the equilibrium constant calculated from partial pressures for a gas-phase reaction at constant temperature. It is section 3.1.10 of the AQA 7404/7405 specification and is A-level only.

**Why is Kp used instead of Kc for gas reactions?**
For reactions in the gas phase it is often easier to measure pressure than concentration. Kp is written in the same pattern as Kc, but with partial pressures instead of square-bracket concentrations.

**Why does increasing pressure not change Kp?**
At constant temperature, a pressure change makes the mole fractions adjust as the position of equilibrium shifts towards the side with fewer moles of gas. The value of Kp stays the same; only temperature changes it.

**What is the most common error when finding total moles for Kp?**
Leaving out a gas, such as a product that starts at zero, or using initial moles instead of equilibrium moles. The total must include every gas in the equilibrium mixture.

**How does Kp relate to the Haber process?**
In the Haber process, N₂(g) + 3H₂(g) ⇌ 2NH₃(g), there are 4 moles of gas on the left and 2 on the right, so high pressure raises the equilibrium proportion of ammonia. Kp itself does not change with pressure.

## Next steps

Condense this with the [Kp revision notes](/resources/aqa-a-level-chemistry-equilibrium-constant-kp-for-homogeneous-systems-revision-notes/), then test yourself with the [Kp practice questions](/resources/aqa-a-level-chemistry-equilibrium-constant-kp-for-homogeneous-systems-practice/). For Kc and Le Chatelier questions, use the [Kc practice set](/resources/aqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc-practice/). Paper formats are in the [exam preparation guide](/resources/aqa-a-level-chemistry-exam-preparation/), and you can find gaps quickly with the [free diagnostics](/diagnostics/).

## Official syllabus

AQA AS and A-level Chemistry specification (7404/7405), version 1.2, July 2026, for AS and A-level exams June 2016 onwards, published by AQA. Section 3.1.10: Equilibrium constant Kp for homogeneous systems (A-level only).
