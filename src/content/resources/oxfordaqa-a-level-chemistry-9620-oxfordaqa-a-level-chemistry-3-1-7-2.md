---
title: "OxfordAQA A-Level Chemistry (9620): Equilibrium constant Kc for homogeneous systems"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Chemical equilibria, Le Chatelier’s principle and Kc"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9620"]
syllabusSeries: "Version 5.3 (first teaching 2019, first AS and A-level exams 2020)"
stage: "AS"
order: 7.2
syllabusTopics:
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-chemical-equilibria-le-chateliers-principle-and-kc"
    subtopic: "oxfordaqa-a-level-chemistry-3-1-7-2"
description: "OxfordAQA 9620 guide to 3.1.7.2: writing Kc, working out units, calculating Kc from equilibrium data and using it, and how temperature changes Kc."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper on point **3.1.7.2 Equilibrium constant Kc for homogeneous systems** of the OxfordAQA International AS and A-level Chemistry (9620) specification, Version 5.3. The specification says Kc "is deduced from the equation for a reversible reaction", that [X] means the concentration of X in mol dm⁻³, and that "the value of the equilibrium constant is not affected either by changes in concentration or addition of a catalyst". Students should be able to construct an expression for Kc, calculate Kc from equilibrium concentrations, "perform calculations involving Kc" and "predict the qualitative effects of changes of temperature on the value of Kc". It is International AS content, assessed in Unit 2.

The [equilibria and Le Chatelier study guide](/resources/oxfordaqa-a-level-chemistry-equilibria-le-chateliers-principle/) gives one Kc calculation for the Haber process. This page builds the full method with several different calculation types. Condense it with the [3.1.7.2 revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-7-2-revision-notes/) and practise with the [3.1.7.2 practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-7-2-practice/). Kp, the gas-pressure version, is International A2 content in [3.1.12](/resources/oxfordaqa-a-level-chemistry-equilibrium-constant-kp-for-homogeneous-systems/).

## Writing the expression

For a homogeneous equilibrium (all species in the same phase)

```
aA + bB ⇌ cC + dD          Kc = [C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ)
```

- **Products on top, reactants underneath.**
- Each concentration is raised to the power of its **coefficient** in the balanced equation.
- Concentrations are **equilibrium** values in mol dm⁻³.
- Kc belongs to the equation **as written**. Reversing the equation gives 1/Kc; halving every coefficient gives √Kc.

Examples:

```
2SO₂(g) + O₂(g) ⇌ 2SO₃(g)       Kc = [SO₃]² / ([SO₂]²[O₂])
N₂O₄(g) ⇌ 2NO₂(g)               Kc = [NO₂]² / [N₂O₄]
CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O   (all liquids in one mixture)
                                Kc = [CH₃COOC₂H₅][H₂O] / ([CH₃COOH][C₂H₅OH])
```

## Working out the units

Substitute mol dm⁻³ for every concentration and cancel.

| Equation | Units working | Units of Kc |
|---|---|---|
| 2SO₂ + O₂ ⇌ 2SO₃ | (mol dm⁻³)² / ((mol dm⁻³)² × mol dm⁻³) = 1 / (mol dm⁻³) | mol⁻¹ dm³ |
| N₂O₄ ⇌ 2NO₂ | (mol dm⁻³)² / (mol dm⁻³) | mol dm⁻³ |
| H₂ + I₂ ⇌ 2HI | (mol dm⁻³)² / (mol dm⁻³)² | no units |
| CO + 2H₂ ⇌ CH₃OH | (mol dm⁻³) / (mol dm⁻³)³ | mol⁻² dm⁶ |

Shortcut: (total power on top) − (total power underneath) = n. Kc has units (mol dm⁻³)ⁿ. When n = 0 the units cancel, and the volume of the container also cancels, so moles can be substituted directly.

## The equilibrium-table method

Most calculations give **starting** amounts and **one** equilibrium amount. Use a table with three rows:

1. **Initial** moles.
2. **Change**, using the mole ratio from the equation.
3. **Equilibrium** moles.

Then divide each equilibrium amount by the volume to get concentrations, substitute, calculate and give units.

### Worked example 1: esterification (volumes cancel)

1.00 mol of ethanoic acid and 1.50 mol of ethanol are mixed with a little acid catalyst and left to reach equilibrium. 0.22 mol of ethanoic acid remains.

| | CH₃COOH | C₂H₅OH | CH₃COOC₂H₅ | H₂O |
|---|---|---|---|---|
| Initial / mol | 1.00 | 1.50 | 0 | 0 |
| Change / mol | −0.78 | −0.78 | +0.78 | +0.78 |
| Equilibrium / mol | 0.22 | 0.72 | 0.78 | 0.78 |

The powers top and bottom are equal, so the volume V cancels:

```
Kc = (0.78/V)(0.78/V) / ((0.22/V)(0.72/V)) = 0.6084 / 0.1584 = 3.84  (no units)
```

The water here is a product formed in the mixture, so it is included in the expression. Check the table by confirming that each change matches the 1 : 1 : 1 : 1 ratio in the equation.

### Worked example 2: hydrogen iodide, unequal start

0.300 mol of H₂ and 0.200 mol of I₂ are heated in a sealed 1.50 dm³ flask until equilibrium. 0.360 mol of HI is present.

| | H₂ | I₂ | 2HI |
|---|---|---|---|
| Initial / mol | 0.300 | 0.200 | 0 |
| Change / mol | −0.180 | −0.180 | +0.360 |
| Equilibrium / mol | 0.120 | 0.020 | 0.360 |
| Concentration / mol dm⁻³ | 0.0800 | 0.0133 | 0.240 |

```
Kc = [HI]² / ([H₂][I₂]) = 0.240² / (0.0800 × 0.01333) = 54.0  (no units)
```

The change for HI is **twice** the change for H₂, because of the 2 in the equation. That ratio is the most common place to lose a mark.

### Worked example 3: finding an unknown concentration from Kc

For PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), Kc = 0.0410 mol dm⁻³ at a certain temperature. A mixture made from PCl₅ alone reaches equilibrium with [PCl₅] = 0.250 mol dm⁻³. Find [Cl₂].

PCl₃ and Cl₂ are formed 1 : 1 from PCl₅ alone, so [PCl₃] = [Cl₂] = x:

```
Kc = x² / 0.250 = 0.0410
x² = 0.0410 × 0.250 = 0.01025
x = [Cl₂] = 0.101 mol dm⁻³
```

### Worked example 4: predicting equilibrium amounts

For H₂ + I₂ ⇌ 2HI at a different temperature, Kc = 64.0. 0.500 mol of each reactant is sealed in a 1.00 dm³ flask. Find the equilibrium amounts.

Let x mol of H₂ react: H₂ = I₂ = 0.500 − x; HI = 2x.

```
(2x)² / (0.500 − x)² = 64.0
take the square root:  2x / (0.500 − x) = 8.00
2x = 4.00 − 8.00x,  so 10.0x = 4.00,  x = 0.400
```

At equilibrium: H₂ = I₂ = **0.100 mol**, HI = **0.800 mol**. Check: 0.800² ÷ (0.100 × 0.100) = 64.0. Questions at this level are set so that a step such as taking a square root avoids solving a quadratic.

## What changes Kc, and what does not

**Concentration.** Changing a concentration moves the **position** of equilibrium, but Kc stays the same. Using worked example 4's mixture: suppose extra H₂ is injected so that [H₂] instantly becomes 0.300 mol dm⁻³. The ratio [HI]²/([H₂][I₂]) is now 0.640 ÷ (0.300 × 0.100) = 21.3, which is **less than** Kc. The mixture responds by making more HI until the ratio is back at 64.0. Solving gives a new equilibrium of about [H₂] = 0.250, [I₂] = 0.0504 and [HI] = 0.899 mol dm⁻³: different concentrations, the same Kc. This is Le Chatelier's principle seen through the expression.

**Catalyst.** It speeds up both directions equally, so it changes neither the position nor Kc.

**Temperature.** This is the only factor that changes Kc.

| Forward reaction | Temperature rises | Kc | Position |
|---|---|---|---|
| Exothermic (ΔH negative) | Equilibrium shifts left | **Decreases** | Fewer products |
| Endothermic (ΔH positive) | Equilibrium shifts right | **Increases** | More products |

**Worked example 5.** Values are invented for practice. For A(g) + B(g) ⇌ C(g), Kc = 8.5 mol⁻¹ dm³ at 400 K and 2.1 mol⁻¹ dm³ at 500 K. Kc falls as temperature rises, so the position moves left on heating: the forward reaction is **exothermic**.

## Common mistakes

- Using moles instead of concentrations when the powers do not cancel.
- Using **initial** concentrations instead of equilibrium ones.
- Forgetting the mole ratio in the change row, or the powers in the expression.
- Putting reactants on top.
- Writing units by guesswork; always cancel.
- Saying Kc changes when concentration or pressure changes.
- Giving the direction of a temperature effect on Kc without linking it to the sign of ΔH.

## Exam technique for the command words

- **Write an expression**: square brackets, correct powers, products over reactants.
- **Calculate**: show the table, the concentrations, the substituted expression, the answer to an appropriate number of significant figures and units (or "no units").
- **Deduce** the sign of ΔH from Kc data: state the trend in Kc, the direction of the shift, then the conclusion.
- **Explain** why Kc does not change: only temperature alters Kc; the concentrations readjust until the ratio returns to its value.

## Next steps

Condense this with the [3.1.7.2 revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-7-2-revision-notes/), then try the [3.1.7.2 practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-7-2-practice/). For the qualitative side, see [Le Chatelier's principle (3.1.7.1)](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-1-7-1/).

## Official syllabus

OxfordAQA International AS and A-level Chemistry (9620) specification, Version 5.3, for International AS and A-level exams May/June 2020 onwards: section 3.1.7 Chemical equilibria, Le Chatelier's principle and Kc (International AS), point 3.1.7.2 Equilibrium constant Kc for homogeneous systems. Published by OxfordAQA.
