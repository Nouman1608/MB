---
resourceId: "mb-ap-chem-7.3-study-guide"
title: "Reaction Quotient and Equilibrium Constant: Study Guide (Chemistry 7.3)"
description: "Write the reaction quotient Q and the equilibrium constant K for any reversible reaction, in concentrations or partial pressures, and know which species to leave out."
course: "chemistry"
unit: 7
topics: ["7.3"]
resourceType: "study-guide"
prerequisites:
  - "Balanced chemical equations with state symbols"
  - "Molarity (mol L⁻¹) and partial pressure (atm)"
  - "Dynamic equilibrium and the rates of forward and reverse reactions (Topics 7.1 and 7.2)"
prerequisiteResources: ["mb-ap-chem-7.2-study-guide"]
learningObjectives:
  - "Write the reaction quotient Qc for a reversible reaction from its balanced equation"
  - "Write Qp in partial pressures for a reaction that involves gases"
  - "Explain that Q can take any value but becomes equal to K once the system is at equilibrium"
  - "Leave pure solids and pure liquids out of Q and K, and explain why"
  - "Tell Kc and Kp apart and use the one a question asks for"
  - "Plot Q against time and read the value of K from the graph"
skills: ["3", "5"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Concentrations in mol L⁻¹ and partial pressures in atm; Q and K are written without units in this course"
related: ["mb-ap-chem-7.3-revision-notes", "mb-ap-chem-7.3-practice", "mb-ap-chem-7.3-checklist"]
next: "mb-ap-chem-7.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "For aA + bB ⇌ cC + dD, Qc = [C]^c[D]^d / ([A]^a[B]^b): products on top, reactants below, each raised to its coefficient."
  - "Q uses the amounts at any moment. K is the value Q takes at equilibrium, so at equilibrium Qc = Kc and Qp = Kp."
  - "Qp and Kp use partial pressures of gases instead of concentrations. Kc and Kp usually have different values, so check which one is asked for."
  - "Pure solids and pure liquids are left out, because their 'concentration' does not depend on how much of them there is."
  - "At a fixed temperature K is a constant; Q changes as the reaction runs and moves towards K."
faqs:
  - question: "Why do Q and K have no units here?"
    answer: "Strictly, each concentration is divided by a standard value (1 mol L⁻¹ or 1 atm) before it goes into the expression, which cancels the units. In this course you write Q and K as plain numbers."
  - question: "Do I need to convert between Kc and Kp?"
    answer: "No. Converting between them is not assessed. You do need to know that one uses concentrations and the other partial pressures, and to use the right one."
  - question: "Is water always left out?"
    answer: "Only when it is a pure liquid, for example the solvent in an aqueous reaction, H₂O(l). Water vapour, H₂O(g), is a gas and goes into the expression like any other gas."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## One number that describes a reacting mixture

In Topic 7.2 you saw that a reversible reaction runs in whichever direction is faster until the forward and reverse rates become equal. While that happens, the amounts of reactants and products keep changing. Chemists want a single number that sums up "how far towards products" a mixture is at any moment. That number is the **reaction quotient, Q**.

For a general reaction

aA + bB ⇌ cC + dD

the reaction quotient in concentrations is

**Qc = [C]^c [D]^d / ([A]^a [B]^b)**

Three rules build it:

1. **Products on top, reactants underneath.** The species on the right of the arrow go in the numerator.
2. **Each concentration is raised to the power of its coefficient** in the balanced equation. A coefficient of 2 means "squared", not "times 2".
3. **Terms are multiplied, never added.** [C]^c[D]^d means [C]^c × [D]^d.

This way of building the expression from the balanced equation is called the **law of mass action**. Square brackets mean concentration in mol L⁻¹ at the moment you are describing.

## Q at any moment, K at equilibrium

Q can be worked out for any mixture: at the start, halfway, or at the end. Its value changes as the reaction proceeds. When the system reaches equilibrium, the concentrations stop changing, so Q stops changing too. The value it settles at is the **equilibrium constant, K**:

- at equilibrium, **Qc = Kc**
- at equilibrium, **Qp = Kp** (for the pressure version, below)

The key idea is that the reaction always changes the mixture so that **Q moves towards K**. Two flasks of the same reaction at the same temperature can start with very different mixtures, but both end with the same value of Q, because K is a constant for that reaction at that temperature. Figure 1 shows this.

<figure>
<svg viewBox="0 0 640 320" role="img" aria-labelledby="qk-time-title qk-time-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="qk-time-title">Reaction quotient against time for two runs of the same reaction</title>
<desc id="qk-time-desc">Graph of Q, with no unit, on the vertical axis from 0 to 10, against time in minutes on the horizontal axis from 0 to 30. Run 1 starts with only A, so Q starts at 0 and rises, quickly at first and then more slowly, levelling off at 4.0. Run 2 starts with mostly B, so Q starts at 9.0 and falls, levelling off at 4.0. A dotted horizontal line at Q = 4.0 is labelled K = 4.0. After about 20 minutes both curves lie on this line.</desc>
<line x1="80" y1="260" x2="610" y2="260" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="260" x2="80" y2="30" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="80" y1="260" x2="80" y2="266" stroke="#1d2b44"/><text x="80" y="280">0</text>
<line x1="166.7" y1="260" x2="166.7" y2="266" stroke="#1d2b44"/><text x="166.7" y="280">5</text>
<line x1="253.3" y1="260" x2="253.3" y2="266" stroke="#1d2b44"/><text x="253.3" y="280">10</text>
<line x1="340" y1="260" x2="340" y2="266" stroke="#1d2b44"/><text x="340" y="280">15</text>
<line x1="426.7" y1="260" x2="426.7" y2="266" stroke="#1d2b44"/><text x="426.7" y="280">20</text>
<line x1="513.3" y1="260" x2="513.3" y2="266" stroke="#1d2b44"/><text x="513.3" y="280">25</text>
<line x1="600" y1="260" x2="600" y2="266" stroke="#1d2b44"/><text x="600" y="280">30</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="260" x2="80" y2="260" stroke="#1d2b44"/><text x="70" y="264">0</text>
<line x1="74" y1="216" x2="80" y2="216" stroke="#1d2b44"/><text x="70" y="220">2</text>
<line x1="74" y1="172" x2="80" y2="172" stroke="#1d2b44"/><text x="70" y="176">4</text>
<line x1="74" y1="128" x2="80" y2="128" stroke="#1d2b44"/><text x="70" y="132">6</text>
<line x1="74" y1="84" x2="80" y2="84" stroke="#1d2b44"/><text x="70" y="88">8</text>
<line x1="74" y1="40" x2="80" y2="40" stroke="#1d2b44"/><text x="70" y="44">10</text>
</g>
<text x="345" y="308" text-anchor="middle" font-size="13" fill="#1d2b44">Time (min)</text>
<text x="30" y="150" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 30 150)">Reaction quotient, Q</text>
<line x1="80" y1="172" x2="610" y2="172" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<text x="606" y="196" text-anchor="end" font-size="13" font-weight="600" fill="#1d2b44">K = 4.0</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="80.0,260.0 97.3,255.3 114.7,249.9 132.0,243.9 149.3,237.5 166.7,230.7 184.0,223.9 201.3,217.1 218.7,210.6 236.0,204.6 253.3,199.2 270.7,194.4 288.0,190.3 305.3,186.8 322.7,183.9 340.0,181.5 357.3,179.5 374.7,177.9 392.0,176.7 409.3,175.7 426.7,174.9 444.0,174.3 461.3,173.8 478.7,173.4 496.0,173.1 513.3,172.8 530.7,172.7 548.0,172.5 565.3,172.4 582.7,172.3 600.0,172.2"/>
<polyline fill="none" stroke="#b5532a" stroke-width="2.5" stroke-dasharray="9 5" points="80.0,62.0 97.3,101.8 114.7,124.1 132.0,138.0 149.3,147.2 166.7,153.6 184.0,158.2 201.3,161.5 218.7,164.0 236.0,165.9 253.3,167.3 270.7,168.4 288.0,169.2 305.3,169.8 322.7,170.3 340.0,170.7 357.3,171.0 374.7,171.2 392.0,171.4 409.3,171.5 426.7,171.6 444.0,171.7 461.3,171.8 478.7,171.8 496.0,171.9 513.3,171.9 530.7,171.9 548.0,171.9 565.3,171.9 582.7,172.0 600.0,172.0"/>
<text x="150" y="80" font-size="13" fill="#1d2b44">Run 2 (dashed): starts mostly B, Q falls</text>
<text x="180" y="245" font-size="13" fill="#1d2b44">Run 1 (solid): starts as pure A, Q rises</text>
</svg>
<figcaption>Figure 1. Q against time for the made-up reaction A ⇌ B (Q = [B]/[A]) at one temperature, calculated from a simple model. Run 1 (solid line) starts with only A; Run 2 (dashed line) starts with [A] = 0.10 mol L⁻¹ and [B] = 0.90 mol L⁻¹, so Q = 9.0. Both level off at the same value, K = 4.0 (dotted line).</figcaption>
</figure>

Read the graph in three steps:

- **Axes.** Q has no unit; time is in minutes. The scale goes up in even steps (2 on Q, 5 min on time).
- **Shape.** Q changes fastest at the start, then more slowly as the forward and reverse rates get closer.
- **Flat part.** Once the line is flat, the system is at equilibrium and the flat value **is** K. Both runs give 4.0.

A Q-time graph is a good way to show K because it separates the one constant value (K) from the many values Q passes through on the way. Which direction a reaction runs for a given Q and K is developed in Topic 7.7.

## Gases: Qp and Kp

For a reaction involving gases you can measure **partial pressures** instead of concentrations. The expression has exactly the same shape, with P for the partial pressure of each gas:

**Qp = (P_C)^c (P_D)^d / ((P_A)^a (P_B)^b)**, and at equilibrium **Qp = Kp**.

Partial pressures are usually in atm. Two points matter:

- **Kc and Kp are different numbers** for most reactions, because one uses mol L⁻¹ and the other atm. You will not be asked to convert one into the other, but you must notice which one a question gives or asks for. Never put a pressure into a Kc expression or a concentration into a Kp expression.
- **Only gases have partial pressures.** So Kp is written for reactions in which every species that appears in the expression is a gas. Reactions in solution use Kc. Calculations where a dissolved substance is in equilibrium with the same substance as a gas are outside this course.

## What to leave out: pure solids and pure liquids

The concentration of a gas or a dissolved substance depends on how much of it is in a given volume. A **pure solid** or a **pure liquid** is different. Its "concentration" is fixed by its density: a lump of carbon has the same number of moles per litre of carbon whether the lump is large or small. Adding more solid does not change that value, so it cannot shift the mixture. That is why:

> Pure solids (s) and pure liquids (l) are left out of Q and K.

| Species in the equation | In Qc? | In Qp? |
|---|---|---|
| Gas, (g) | yes, as [X] | yes, as P_X |
| Dissolved, (aq) | yes, as [X] | no |
| Pure solid, (s) | no | no |
| Pure liquid, (l), including water as the solvent | no | no |

The solid or liquid still has to be **present** for the equilibrium to exist. It is only its amount that does not matter.

## Worked example 1: writing expressions

**Question.** Write Kc for each reaction. Where it is possible, also write Kp.

(a) 4NH₃(g) + 5O₂(g) ⇌ 4NO(g) + 6H₂O(g)
(b) Fe₃O₄(s) + 4H₂(g) ⇌ 3Fe(s) + 4H₂O(g)
(c) Ag⁺(aq) + 2NH₃(aq) ⇌ Ag(NH₃)₂⁺(aq)
(d) NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq)

**(a)** Every species is a gas, so all four appear, each raised to its coefficient. Water here is a gas, so it stays in.

Kc = [NO]⁴[H₂O]⁶ / ([NH₃]⁴[O₂]⁵)
Kp = (P_NO)⁴(P_H₂O)⁶ / ((P_NH₃)⁴(P_O₂)⁵)

**(b)** Fe₃O₄ and Fe are solids, so they are left out. Only the two gases remain.

Kc = [H₂O]⁴ / [H₂]⁴
Kp = (P_H₂O)⁴ / (P_H₂)⁴

**(c)** All species are dissolved, so this reaction has a Kc but no Kp.

Kc = [Ag(NH₃)₂⁺] / ([Ag⁺][NH₃]²)

The complex ion is one species, so its whole formula sits inside one pair of brackets.

**(d)** Water is the liquid solvent, so it is left out.

Kc = [NH₄⁺][OH⁻] / [NH₃]

**Check.** In each answer, the powers match the coefficients, products are on top, and no (s) or (l) species appears.

## Worked example 2: calculating Q for a snapshot

**Question.** A flask holds a mixture for the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g). At one moment, [N₂] = 0.50 mol L⁻¹, [H₂] = 0.20 mol L⁻¹ and [NH₃] = 0.10 mol L⁻¹. For this example, take Kc = 0.50 at the temperature of the flask (a value chosen for practice). Calculate Qc and decide whether the mixture is at equilibrium.

1. Write the expression: Qc = [NH₃]² / ([N₂][H₂]³).
2. Substitute: Qc = (0.10)² / ((0.50)(0.20)³).
3. Work out the pieces: (0.10)² = 0.010; (0.20)³ = 0.0080; 0.50 × 0.0080 = 0.0040.
4. Divide: Qc = 0.010 ÷ 0.0040 = **2.5**.

**Interpretation.** Qc = 2.5 is not equal to Kc = 0.50, so the mixture is **not at equilibrium**. The concentrations will keep changing until Qc falls to 0.50 (five times smaller than now).

**Watch out.** Leaving out the powers gives 0.10 ÷ (0.50 × 0.20) = 1.0. Multiplying by the coefficients instead, (2 × 0.10) ÷ (0.50 × 3 × 0.20), gives 0.67. Both are wrong.

## Worked example 3: a solid in a gas equilibrium

**Question.** Hot carbon reacts with carbon dioxide: C(s) + CO₂(g) ⇌ 2CO(g). In a closed vessel, P_CO = 0.40 atm and P_CO₂ = 0.80 atm. In this question, take Kp = 0.20 at the temperature of the vessel.

(a) Write Kp. (b) Calculate Qp and decide whether the system is at equilibrium. (c) A student adds another 5 g of carbon. Does Qp change?

**(a)** Carbon is a solid, so Kp = (P_CO)² / P_CO₂.

**(b)** Qp = (0.40)² / 0.80 = 0.16 / 0.80 = **0.20**. This equals Kp, so the system **is at equilibrium**.

**(c)** **No.** Carbon does not appear in Qp. Extra solid does not change P_CO or P_CO₂, so Qp stays at 0.20 and the system stays at equilibrium.

## Common misconceptions

- **"Q and K are the same thing."** Q is for any moment; K is the single value Q reaches at equilibrium. Q = K only at equilibrium.
- **Multiplying by coefficients.** Coefficients become powers. 2NH₃ gives [NH₃]², not 2[NH₃].
- **Reactants on top.** The expression is always products over reactants for the reaction **as written**.
- **Adding terms.** Concentrations in the numerator (and in the denominator) are multiplied together.
- **Including solids, liquids and the solvent.** Leave out every (s) and (l) species, but keep H₂O(g).
- **Putting pressures in Kc, or concentrations in Kp.** Check the subscript and use matching quantities.
- **Thinking K changes when you add more of a substance.** Adding a reactant changes Q, not K. At a fixed temperature, K is constant.
- **Using starting amounts in K.** K must be calculated from equilibrium amounts. Starting amounts give a value of Q.

## Where this leads

Next, in [Topic 7.4](/advanced-course-resources/chemistry/7-4-calculating-equilibrium-constant-study-guide/), you will put measured equilibrium concentrations and pressures into these expressions to calculate K. Later topics use K to judge how far a reaction goes (7.5), to combine reactions (7.6) and to predict which way a mixture moves when Q ≠ K (7.7 and 7.10). If you need a reminder of why forward and reverse rates become equal, go back to [Topic 7.2](/advanced-course-resources/chemistry/7-2-direction-reversible-reactions-study-guide/).

Try the [practice questions](/advanced-course-resources/chemistry/7-3-reaction-quotient-equilibrium-constant-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/7-3-reaction-quotient-equilibrium-constant-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/7-3-reaction-quotient-equilibrium-constant-checklist/) to consolidate.
