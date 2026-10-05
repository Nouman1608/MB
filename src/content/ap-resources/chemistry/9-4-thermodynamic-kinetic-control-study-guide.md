---
resourceId: "mb-ap-chem-9.4-study-guide"
title: "Thermodynamic and Kinetic Control: Study Guide (Chemistry 9.4)"
description: "Why a reaction with ΔG° < 0 can still show no measurable change: activation energy, what kinetic control means, and why a slow system is not the same as one at equilibrium."
course: "chemistry"
unit: 9
topics: ["9.4"]
resourceType: "study-guide"
prerequisites:
  - "Reaction energy profiles and activation energy (Topic 5.6)"
  - "How catalysts change the reaction pathway (Topic 5.11)"
  - "Deciding favourability from ΔG° (Topic 9.3)"
  - "Comparing Q with K (Topic 7.3)"
prerequisiteResources: ["mb-ap-chem-9.3-study-guide"]
learningObjectives:
  - "Explain why thermodynamic favourability (ΔG° < 0) does not guarantee a measurable rate"
  - "Describe a process under kinetic control and name a high activation energy as the usual cause"
  - "Explain why a system that shows no change is not necessarily at equilibrium"
  - "Use ΔG° data and observations to argue that a process is under kinetic control"
  - "Distinguish a process under kinetic control from one that is simply not favoured"
skills: ["3", "6"]
studyMinutes: 35
difficulty: "core"
calculator: "scientific"
calculatorNote: "ΔG°f values at 298 K are given on the page in kJ mol⁻¹. The activation-energy numbers in the background box are for illustration only"
related: ["mb-ap-chem-9.4-revision-notes", "mb-ap-chem-9.4-practice", "mb-ap-chem-9.4-checklist"]
next: "mb-ap-chem-9.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Thermodynamics (ΔG°) tells you whether a process is favoured. Kinetics (activation energy, rate) tells you how fast it goes. They are separate questions."
  - "A process that is thermodynamically favoured but does not occur at a measurable rate is under kinetic control."
  - "The usual cause of kinetic control is a high activation energy: very few collisions have enough energy to react."
  - "No visible change does not mean equilibrium. Under kinetic control Q is far from K; the system is stuck, not balanced."
  - "A catalyst, a spark or strong heating can start a kinetically controlled reaction. Nothing can make a process with ΔG° > 0 go to a large extent on its own."
faqs:
  - question: "If a reaction is under kinetic control, is it 'not favoured'?"
    answer: "No. It is favoured (ΔG° < 0) but slow. 'Not favoured' means ΔG° > 0. Keep the two words for the two different reasons a reaction might not be seen."
  - question: "Does a catalyst make a reaction more favoured?"
    answer: "No. A catalyst lowers the activation energy and speeds up the reaction, but ΔG° depends only on the reactants and products, so it does not change."
  - question: "I have seen 'kinetic product' and 'thermodynamic product' in organic chemistry. Is that this topic?"
    answer: "It is a related use of the words for reactions that can give two different products. It is background only and is not part of this topic."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Favoured is not the same as fast

In [Topic 9.3](/advanced-course-resources/chemistry/9-3-gibbs-free-energy-thermodynamic-favorability-study-guide/) you used ΔG° to decide whether a process is thermodynamically favoured. Now look at some everyday facts:

- Paper, wood and sugar all react with oxygen with very negative ΔG°. Yet a book on a shelf does not burst into flames.
- A mixture of hydrogen and oxygen gases can sit in a container for years without forming water. A single spark makes it explode.
- Diamond has a higher free energy than graphite at room temperature, yet diamonds do not crumble into pencil lead.

In each case the process is favoured, but nothing measurable happens. ΔG° answers **"which way is downhill?"** It does not answer **"how quickly will it go?"** That second question belongs to kinetics, which you met in Unit 5.

| Question | Decided by | Quantity |
|---|---|---|
| Is the process favoured? | thermodynamics | ΔG° (sign) |
| How fast does it go? | kinetics | activation energy, rate constant |

The two answers are independent. A favoured process can be fast (a strong acid neutralising a strong base) or extremely slow (diamond turning into graphite).

## Why a favoured reaction can be slow: the barrier

To react, particles must collide with enough energy to begin breaking bonds and to reach the transition state. That minimum energy is the **activation energy**, Eₐ ([Topic 5.6](/advanced-course-resources/chemistry/5-6-reaction-energy-profile-study-guide/)).

<figure>
<svg viewBox="0 0 680 300" role="img" aria-labelledby="kc-title kc-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="kc-title">A favoured reaction with a high activation energy barrier</title>
<desc id="kc-desc">Schematic energy profile. The vertical axis is free energy and the horizontal axis is reaction progress. Reactants sit on a level on the left. The products level on the right is lower, so the reaction is favoured. A solid curve rises to a high peak between them, showing a large activation energy. A dashed curve rises to a much lower peak, showing the catalysed path. Both paths start and end at the same levels.</desc>
<line x1="50" y1="20" x2="50" y2="270" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="50" y1="270" x2="640" y2="270" stroke="#1d2b44" stroke-width="1.5"/>
<text x="22" y="145" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 22 145)">Free energy, G (schematic)</text>
<text x="345" y="292" text-anchor="middle" font-size="13" fill="#1d2b44">Reaction progress →</text>
<line x1="170" y1="40" x2="318" y2="40" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 4"/>
<line x1="200" y1="150" x2="610" y2="150" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 4"/>
<path d="M60 150 L200 150 C260 150, 270 40, 320 40 C370 40, 390 240, 460 240 L640 240" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M200 150 C260 150, 270 105, 320 105 C370 105, 390 240, 460 240" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 6"/>
<text x="100" y="170" text-anchor="middle" font-size="13" fill="#1d2b44">reactants</text>
<text x="560" y="260" text-anchor="middle" font-size="13" fill="#1d2b44">products</text>
<path d="M175 146 V46" stroke="#1d2b44" stroke-width="2" marker-start="url(#kcA)" marker-end="url(#kcA)"/>
<text x="166" y="88" text-anchor="end" font-size="13" fill="#1d2b44">large Eₐ:</text>
<text x="166" y="104" text-anchor="end" font-size="13" fill="#1d2b44">very slow</text>
<text x="320" y="88" text-anchor="middle" font-size="13" fill="#1d2b44">catalysed path</text>
<path d="M600 154 V234" stroke="#1d2b44" stroke-width="2" marker-start="url(#kcA)" marker-end="url(#kcA)"/>
<text x="592" y="190" text-anchor="end" font-size="13" fill="#1d2b44">ΔG° &lt; 0:</text>
<text x="592" y="206" text-anchor="end" font-size="13" fill="#1d2b44">favoured</text>
<defs><marker id="kcA" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 1. Schematic profile for a reaction under kinetic control. The products are lower than the reactants (favoured), but the solid path has a high barrier, so almost no collisions get over it at room temperature. The dashed catalysed path has a lower barrier; the start and end levels, and so ΔG°, are the same.</figcaption>
</figure>

If Eₐ is large, only a tiny fraction of collisions at room temperature have enough energy to get over the barrier. The reaction is still "downhill" overall, but it is stuck behind the hill. Its rate may be so low that no change can be measured in a human lifetime.

> **Background (not assessed).** From the Arrhenius idea in Topic 5.6, the fraction of collisions with enough energy is roughly proportional to e^(−Eₐ/RT). At 298 K this fraction is about 1.7 × 10⁻⁹ when Eₐ = 50 kJ mol⁻¹ and about 3.0 × 10⁻¹⁸ when Eₐ = 100 kJ mol⁻¹. Doubling the barrier makes successful collisions about 6 × 10⁸ times rarer. You will not be asked to calculate this.

## Kinetic control: what the term means

A process is under **kinetic control** when it is thermodynamically favoured (ΔG° < 0) but does not happen at a measurable rate. The rate, not the free energy change, decides what you observe.

The most common reason is a **high activation energy**. If you know a process is favoured, and you see that it is not happening, it is reasonable to conclude that it is under kinetic control.

## Kinetic control is not equilibrium

It is tempting to say: "Nothing is changing, so the system must be at equilibrium." That is wrong here, and examiners test it.

- At **equilibrium**, the forward and reverse rates are **equal**, and the reaction quotient equals the equilibrium constant: Q = K.
- Under **kinetic control**, both rates are close to **zero**, and Q is nowhere near K.

Take the hydrogen and oxygen mixture. For 2H₂(g) + O₂(g) → 2H₂O(g), ΔG° = 2(−228.58) = −457.2 kJ mol⁻¹. A ΔG° this negative means K is enormous: at equilibrium almost all the reactants would have become water. (You will make that link precise in Topic 9.5.) In the container, there is essentially no water, so Q is close to zero and **Q ≪ K**. The system is a long way from equilibrium; it is simply not moving towards it at a measurable rate.

Two observations that tell the cases apart:

| Test | System at equilibrium | System under kinetic control |
|---|---|---|
| Add a catalyst | No change in amounts: the catalyst speeds both directions equally and Q already equals K | Reaction starts and proceeds towards products |
| Supply a spark or strong local heating | At most a temporary shift, then back to equilibrium | Reaction can start and, if exothermic, sustain itself |

## Worked example 1: diamond and graphite

**Question.** At 298 K, ΔG°f for C(diamond) is +2.900 kJ mol⁻¹, and graphite is the standard state of carbon.

(a) Calculate ΔG° for C(diamond) → C(graphite).
(b) Calculate ΔG° for converting a 1-carat diamond (0.200 g) into graphite.
(c) Diamonds kept at room temperature show no sign of turning into graphite. Explain this observation.

**(a)** Graphite is the standard state of carbon, so ΔG°f(graphite) = 0.
ΔG° = ΔG°f(graphite) − ΔG°f(diamond) = 0 − 2.900 = **−2.900 kJ mol⁻¹**.
ΔG° < 0, so the conversion is thermodynamically favoured.

**(b)** n = 0.200 g ÷ 12.01 g mol⁻¹ = 0.01665 mol.
ΔG° = 0.01665 mol × (−2.900 kJ mol⁻¹) = −0.0483 kJ = **−48.3 J**.

**(c)** The conversion is favoured, so the lack of change must be a kinetic effect. In diamond every carbon atom is joined to four others by strong covalent bonds in a three-dimensional network. To rearrange into graphite's flat layers, many of these bonds must break first. That needs a very large activation energy, so at room temperature the rate is immeasurably small. The process is **under kinetic control**.

**Interpretation.** A small negative ΔG° and a huge activation energy together explain why diamonds last. Being favoured does not make a change happen soon.

## Worked example 2: a bottle of hydrogen peroxide

**Question.** A bottle of dilute hydrogen peroxide solution is stored in a cool, dark cupboard for months and loses only a little of its H₂O₂. When a pinch of manganese(IV) oxide is added to a sample, it fizzes rapidly as oxygen is given off.

2H₂O₂(l) → 2H₂O(l) + O₂(g)

ΔG°f at 298 K: H₂O₂(l) −120.35 kJ mol⁻¹; H₂O(l) −237.14 kJ mol⁻¹.

(a) Calculate ΔG° for the reaction.
(b) A student says: "In the cupboard the hydrogen peroxide is at equilibrium." Evaluate this claim.
(c) Explain the effect of the manganese(IV) oxide, and state whether it changes ΔG°.

**(a)** ΔG° = 2(−237.14) + 0 − 2(−120.35) = −474.28 + 240.70 = **−233.58 kJ mol⁻¹** of reaction (−116.8 kJ per mole of H₂O₂). O₂(g) is an element in its standard state, so its ΔG°f is 0.

**(b)** The claim is **incorrect**. ΔG° is large and negative, so K is very large and the equilibrium mixture would be almost all water and oxygen. The bottle still contains nearly all its hydrogen peroxide, so Q ≪ K: the system is far from equilibrium. It changes so slowly because the uncatalysed decomposition has a high activation energy. The bottle is under kinetic control, not at equilibrium.

**(c)** Manganese(IV) oxide is a **catalyst**. It provides a different pathway with a lower activation energy, so a much larger fraction of collisions succeed and the rate rises sharply. It does **not** change ΔG°, which depends only on the reactants and products. The fizzing shows the reaction was always favoured; the catalyst removed the kinetic obstacle.

## Kinetic control or not favoured?

Two different reasons can explain why a reaction is not observed. Your argument must name the right one.

| Observation | ΔG° | Conclusion |
|---|---|---|
| Reaction happens quickly | < 0 | Favoured and fast |
| No measurable reaction, but a catalyst or spark starts it | < 0 | **Kinetic control** (high Eₐ) |
| No measurable reaction, and no catalyst can make much product | > 0 | **Not favoured**: the products are not reached to a large extent at all |

A catalyst can never make a process with ΔG° > 0 produce a large amount of product. It can only help a system reach the equilibrium position that thermodynamics already sets, sooner.

## Writing the argument

Questions on this topic usually ask you to **justify a claim** that links what you see (macroscopic) to what particles are doing. A reliable structure:

1. **Thermodynamics:** state the sign of ΔG° (calculate it if data are given) and say the process is favoured.
2. **Observation:** state that no measurable change happens.
3. **Kinetics at the particle level:** the activation energy is high, so very few collisions have enough energy to react, and the rate is extremely low.
4. **Conclusion:** the process is under kinetic control; it is not at equilibrium (Q ≪ K).

## Common misconceptions

- **"ΔG° < 0 means it happens quickly."** ΔG° says nothing about rate.
- **"If nothing changes, the system is at equilibrium."** Under kinetic control Q is far from K; the rates are tiny, not equal.
- **"A catalyst makes ΔG° more negative."** A catalyst lowers Eₐ only. The start and end points, and so ΔG°, stay the same.
- **"Kinetic control means the reaction is not favoured."** Kinetic control applies only to favoured processes.
- **"A slow reaction must have a small ΔG°."** The size of ΔG° and the size of Eₐ are unrelated. Hydrogen peroxide has a large negative ΔG° and is still slow.
- **"A spark works by changing ΔG° from positive to negative."** For hydrogen and oxygen, ΔG° is already negative; the spark supplies enough energy for some collisions to cross the barrier, and the energy released keeps the reaction going.

## Where this leads

Next, [Topic 9.5](/advanced-course-resources/chemistry/9-5-free-energy-equilibrium-study-guide/) links ΔG° to the equilibrium constant K, so you can say how large K is for a favoured process. Try the [practice questions](/advanced-course-resources/chemistry/9-4-thermodynamic-kinetic-control-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/9-4-thermodynamic-kinetic-control-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/9-4-thermodynamic-kinetic-control-checklist/) to consolidate.
