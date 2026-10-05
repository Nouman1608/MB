---
resourceId: "mb-ap-chem-5.11-study-guide"
title: "Catalysis: Study Guide (Chemistry 5.11)"
description: "Learn how a catalyst speeds up a reaction by changing its mechanism, why it is consumed and then regenerated, and how enzyme, acid–base and surface catalysts work."
course: "chemistry"
unit: 5
topics: ["5.11"]
resourceType: "study-guide"
prerequisites:
  - "Collision model and activation energy (Topics 5.5 and 5.6)"
  - "Reaction mechanisms, intermediates and the rate-determining step (Topics 5.7 to 5.9)"
  - "Energy profiles for multistep reactions (Topic 5.10)"
prerequisiteResources: ["mb-ap-chem-5.10-study-guide"]
learningObjectives:
  - "Explain, at the particle level, the two ways a catalyst can raise the rate of a reaction"
  - "Identify a catalyst in a mechanism and tell it apart from an intermediate"
  - "Explain why a catalyst can appear in the rate law even though it is not in the overall equation"
  - "Compare the energy profiles of a catalysed and an uncatalysed reaction, including what does not change"
  - "Describe how enzyme, acid–base and surface catalysts add new intermediates and new elementary steps"
skills: ["6", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Energies are in kJ mol⁻¹ and rates in M s⁻¹; the numbers are small enough to check by hand"
related: ["mb-ap-chem-5.11-revision-notes", "mb-ap-chem-5.11-practice", "mb-ap-chem-5.11-checklist"]
next: "mb-ap-chem-5.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A catalyst raises the rate by making more collisions effective, usually by opening a new reaction path with a lower activation energy."
  - "A catalyst is used up in one step of the mechanism and made again in a later step, so its overall concentration does not change."
  - "An intermediate is the opposite: it is made in one step and used up in a later one."
  - "Because a catalyst is often consumed in the rate-determining step, it can appear in the rate law."
  - "A catalyst does not change ΔH: the reactants and products sit at the same energies on both profiles."
faqs:
  - question: "If a catalyst is not used up, why does it appear in the mechanism at all?"
    answer: "It takes part in the reaction. It is used up in one elementary step and given back in a later one. Only the overall equation hides it, because it cancels when you add the steps."
  - question: "Does a catalyst give the particles more energy?"
    answer: "No. At a fixed temperature the spread of collision energies is the same. The catalyst lowers the energy barrier, so a larger fraction of the same collisions can get over it."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## What a catalyst does

A **catalyst** is a substance that increases the rate of a reaction without being used up overall. You can recover it, unchanged in amount, at the end.

In Topic 5.5 you met the collision model: a reaction happens only when particles collide with enough energy (at least the activation energy, Ea) **and** with a suitable orientation. Such a collision is an **effective collision**. Anything that speeds up a reaction must make effective collisions happen more often. A catalyst does this in one or both of two ways:

1. **It provides a different reaction path with a lower activation energy.** At the same temperature, more collisions have enough energy to get over the lower barrier.
2. **It helps particles meet with a favourable orientation.** A catalyst that holds a reactant in place can make a larger share of collisions point the right way.

The key idea is that a catalyst does not make the old path faster. It **changes the mechanism**. The catalysed reaction follows a new series of elementary steps, and those steps have lower barriers than the single step (or steps) of the uncatalysed reaction.

## Catalysts in a mechanism: used up, then made again

If a catalyst takes part in the reaction, how can it survive? The answer is in the mechanism. A catalyst is **consumed in one elementary step and regenerated in a later step**. When you add the steps, it appears on both sides and cancels, so it is missing from the overall equation.

You met this pattern in [Topic 5.7](/advanced-course-resources/chemistry/5-7-introduction-reaction-mechanisms-study-guide/) with the chlorine–ozone cycle. Here it is in general form, for a catalyst C that speeds up X + Y → XY:

- Step 1: X + C → XC
- Step 2: XC + Y → XY + C
- Overall: X + Y → XY

C is used in step 1 and comes back in step 2: it is the **catalyst**. XC is made in step 1 and used in step 2: it is an **intermediate**. One catalyst particle can go round this cycle many times, which is why a small amount of catalyst can convert a large amount of reactant.

| | Catalyst | Intermediate |
|---|---|---|
| First appears | as a reactant in an early step | as a product in an early step |
| Later | made again as a product | used up as a reactant |
| In the overall equation? | no | no |
| Present before the reaction starts? | yes, you add it | no |
| Overall concentration | constant | rises from zero, then falls |

Both species cancel from the overall equation, so the overall equation alone cannot tell you which is which. Look at the **order** in which each species appears.

### Why a catalyst can appear in the rate law

The catalyst is often consumed in the **rate-determining step**. In Topic 5.8 you saw that, when the first step is slow, the rate law follows the molecularity of that step. If the catalyst is a reactant in that step, its concentration appears in the rate law. More catalyst then means a faster reaction, even though the catalyst is not in the balanced overall equation. This is strong experimental evidence for a mechanism: a species that is missing from the overall equation but present in the rate law must be taking part in a step at or before the slow one.

## Worked example 1: finding the catalyst and the rate law

**Question.** A reaction in solution has the overall equation 2 A → 2 B + D. It is very slow until a small amount of ion K is added. The proposed mechanism is:

- Step 1 (slow): A + K → AK
- Step 2 (fast): AK + A → 2 B + D + K

(a) Show that the steps add up to the overall equation. (b) Identify the catalyst and the intermediate. (c) Write the rate law for the catalysed reaction. (d) The rate constant for step 1 is 0.36 M⁻¹ s⁻¹. Find the initial rate when [A] = 0.20 M and [K] = 0.010 M, and say what happens to the rate if [K] is doubled.

1. **Add the steps.** Left sides: A + K + AK + A. Right sides: AK + 2 B + D + K. Cancel AK and K from both sides: 2 A → 2 B + D. This matches.
2. **Catalyst.** K is a reactant in step 1 and a product in step 2, and it was added at the start: K is the catalyst.
3. **Intermediate.** AK is formed in step 1 and used in step 2: AK is the intermediate.
4. **Rate law.** Step 1 is slow and is the first step, so the rate law comes from its molecularity: rate = k₁[A][K].
5. **Rate.** rate = 0.36 M⁻¹ s⁻¹ × 0.20 M × 0.010 M = 7.2 × 10⁻⁴ M s⁻¹.
6. **Double [K].** The rate is first order in K, so it doubles to 1.44 × 10⁻³ M s⁻¹ (1.4 × 10⁻³ M s⁻¹ to 2 significant figures).

**Interpretation.** K does not appear in 2 A → 2 B + D, yet adding more K speeds the reaction up. During the reaction some K is tied up as AK at any moment, but every AK gives its K back in step 2, so the total amount of K at the end equals the amount added.

## How a catalyst changes the energy profile

Because the catalysed path has different elementary steps, it has a different energy profile. Figure 1 compares the two paths for one reaction.

<figure>
<svg viewBox="0 0 640 345" role="img" aria-labelledby="cat-ep-title cat-ep-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cat-ep-title">Energy profiles for an uncatalysed and a catalysed reaction</title>
<desc id="cat-ep-desc">Potential energy is on the vertical axis and the reaction coordinate on the horizontal axis. Both paths start at the reactants at 0 kilojoules per mole and end at the products at minus 40 kilojoules per mole. The uncatalysed path, a solid line, rises to one transition state at 105 kilojoules per mole. The catalysed path, a dashed line, has two humps: a first transition state at 62, a dip to an intermediate at 18, and a second transition state at 51 kilojoules per mole. A double-headed arrow on the right marks the enthalpy change of minus 40 kilojoules per mole, the same for both paths.</desc>
<line x1="60" y1="20" x2="60" y2="320" stroke="#1d2b44" stroke-width="2"/>
<line x1="60" y1="320" x2="625" y2="320" stroke="#1d2b44" stroke-width="2"/>
<text x="22" y="175" font-size="13" fill="#1d2b44" transform="rotate(-90 22 175)" text-anchor="middle">Potential energy (kJ mol⁻¹)</text>
<text x="340" y="340" font-size="13" fill="#1d2b44" text-anchor="middle">Reaction coordinate</text>
<line x1="150" y1="230" x2="600" y2="230" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<path d="M70 230 H150 C245 230 245 51.5 340 51.5 C435 51.5 435 298 530 298 H610" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M70 230 H150 C200 230 200 124.6 250 124.6 C295 124.6 295 199.4 340 199.4 C385 199.4 385 143.3 430 143.3 C480 143.3 480 298 530 298 H610" fill="none" stroke="#b03a2e" stroke-width="2.5" stroke-dasharray="8 5"/>
<text x="75" y="222" font-size="13" fill="#1d2b44">Reactants (0)</text>
<text x="535" y="314" font-size="13" fill="#1d2b44">Products (−40)</text>
<text x="340" y="42" font-size="13" fill="#1d2b44" text-anchor="middle">Uncatalysed TS: 105 (solid)</text>
<text x="240" y="118" font-size="12" fill="#1d2b44" text-anchor="end">Catalysed TS 1: 62</text>
<text x="440" y="132" font-size="12" fill="#1d2b44" text-anchor="start">Catalysed TS 2: 51</text>
<text x="340" y="218" font-size="12" fill="#1d2b44" text-anchor="middle">Intermediate (catalyst bound): 18</text>
<path d="M600 234 V292" stroke="#1d2b44" stroke-width="1.5" marker-start="url(#cat-ah)" marker-end="url(#cat-ah)"/>
<text x="596" y="266" font-size="12" fill="#1d2b44" text-anchor="end">ΔH = −40</text>
<defs><marker id="cat-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 1. Solid line: uncatalysed path with one step. Dashed line: catalysed path with two steps and a catalyst-bound intermediate. Energies in kJ mol⁻¹, relative to the reactants. The highest point of the catalysed path is lower, but the start and end are the same.</figcaption>
</figure>

Read three things from a pair of profiles like this:

- **What changes:** the number of humps (new elementary steps), the presence of a dip (a new intermediate, often with the catalyst bound to a reactant), and the height of the highest barrier.
- **What does not change:** the energies of the reactants and the products. So the catalyst does **not** change ΔH for the reaction.
- **Both directions get faster.** The highest point of the path is lower whether you travel forwards or backwards, so the reverse reaction is also catalysed. (Background for Unit 7: this is why a catalyst does not change the position of an equilibrium; it only helps the system reach it sooner.)

### Why a lower barrier means a faster reaction

At a fixed temperature, the particles have the same spread of energies with or without a catalyst. Figure 2 shows that spread. Lowering the barrier moves the "enough energy" line to the left, so a bigger share of the collisions now has enough energy to react.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="cat-mb-title cat-mb-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cat-mb-title">Fraction of collisions with enough energy, with and without a catalyst</title>
<desc id="cat-mb-desc">A curve shows the number of collisions against collision energy at one temperature. It rises steeply, peaks at low energy and has a long tail to the right. Two vertical lines mark the activation energies: the catalysed one further left, the uncatalysed one further right. The area under the tail to the right of the uncatalysed line is filled solid. The extra area between the two lines is hatched and labelled as the extra collisions that can react with the catalyst.</desc>
<defs><pattern id="cat-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="2"/></pattern></defs>
<line x1="60" y1="20" x2="60" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="60" y1="250" x2="615" y2="250" stroke="#1d2b44" stroke-width="2"/>
<text x="24" y="140" font-size="13" fill="#1d2b44" transform="rotate(-90 24 140)" text-anchor="middle">Number of collisions</text>
<text x="340" y="285" font-size="13" fill="#1d2b44" text-anchor="middle">Collision energy</text>
<polygon points="285,250 285,192.5 300,199.7 315,206.1 330,211.8 345,216.8 360,221.1 375,225 390,228.3 405,231.2 420,233.8 420,250" fill="url(#cat-hatch)"/>
<polygon points="420,250 420,233.8 435,236 450,237.9 465,239.6 480,241 495,242.2 510,243.3 525,244.3 540,245.1 555,245.8 570,246.4 585,246.9 600,247.3 600,250" fill="#1d2b44"/>
<polyline points="60,250 65,151.2 70,117.9 75,96.9 90,66.7 105,60 120,64.3 135,74.2 150,87 165,101 180,115.2 195,128.9 210,142 225,154.1 240,165.2 255,175.3 270,184.4 285,192.5 300,199.7 315,206.1 330,211.8 345,216.8 360,221.1 375,225 390,228.3 405,231.2 420,233.8 435,236 450,237.9 465,239.6 480,241 495,242.2 510,243.3 525,244.3 540,245.1 555,245.8 570,246.4 585,246.9 600,247.3" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="285" y1="110" x2="285" y2="250" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<line x1="420" y1="110" x2="420" y2="250" stroke="#1d2b44" stroke-width="1.5"/>
<text x="285" y="100" font-size="12" fill="#1d2b44" text-anchor="middle">Ea (catalysed)</text>
<text x="420" y="100" font-size="12" fill="#1d2b44" text-anchor="middle">Ea (uncatalysed)</text>
<text x="352" y="170" font-size="12" fill="#1d2b44" text-anchor="middle">hatched: extra collisions</text>
<text x="352" y="185" font-size="12" fill="#1d2b44" text-anchor="middle">that react only with catalyst</text>
<text x="520" y="215" font-size="12" fill="#1d2b44" text-anchor="middle">solid: react either way</text>
</svg>
<figcaption>Figure 2. One temperature, one curve. The catalyst does not move the curve; it moves the energy threshold. Collisions in the hatched region are effective only on the catalysed path.</figcaption>
</figure>

Compare this with raising the temperature. Heating changes the **curve** (it flattens and shifts right); a catalyst changes the **threshold**. Both raise the fraction of effective collisions, for different reasons.

## Worked example 2: reading numbers from the profiles

**Question.** Use Figure 1. (a) Which step of the catalysed path is rate-determining? (b) By how much does the catalyst lower the highest barrier in the forward direction? (c) Find the overall barrier for the reverse reaction with and without the catalyst. (d) Show that ΔH is the same for both paths.

1. **Rate-determining step.** Transition state 1 is at 62 kJ mol⁻¹ and transition state 2 is at 51 kJ mol⁻¹ (above the reactants). The highest point is TS 1, so **step 1** is rate-determining.
2. **Forward lowering.** Uncatalysed barrier 105 kJ mol⁻¹; catalysed highest point 62 kJ mol⁻¹. Lowered by 105 − 62 = **43 kJ mol⁻¹**.
3. **Reverse barriers.** Going backwards, you start at the products (−40 kJ mol⁻¹) and must reach the highest point.
   - Uncatalysed: 105 − (−40) = **145 kJ mol⁻¹**.
   - Catalysed: 62 − (−40) = **102 kJ mol⁻¹**. It is also lowered by 43 kJ mol⁻¹.
4. **ΔH.** Uncatalysed: −40 − 0 = −40 kJ mol⁻¹. Catalysed: step 1 has ΔH = 18 − 0 = +18 kJ mol⁻¹ and step 2 has ΔH = −40 − 18 = −58 kJ mol⁻¹. Total: +18 + (−58) = **−40 kJ mol⁻¹**, the same.

**Check.** The catalyst lowered both barriers by the same amount. That must be true whenever the reactant and product energies are fixed, which is why a catalyst speeds up the forward and reverse reactions together.

## Three ways catalysts work

The course describes three common kinds of catalysis. In each one, the catalyst forms some kind of bond to a reactant, which creates **new intermediates** and **new elementary steps**.

### 1. Catalysts that bind the reactant (including enzymes)

Some catalysts hold a reactant molecule in a pocket or on a site. While it is bound, the reactant is held in a favourable orientation, or its bonds are strained so they break more easily. The bound pair, catalyst plus reactant, is a new **intermediate**. Many **enzymes** work this way: the reactant (the substrate) binds to the enzyme's active site to form an enzyme–substrate complex, the reaction happens there, and the product leaves, freeing the enzyme. For example, the enzyme catalase speeds up the breakdown of hydrogen peroxide into water and oxygen in living cells.

### 2. Acid–base catalysis

Here the catalyst forms a covalent bond with a reactant by **giving or taking a proton (H⁺)**. In acid catalysis, H₃O⁺ transfers a proton to a reactant. The protonated reactant is a new intermediate, and it often reacts much more readily than the neutral molecule (for example, it may attract a water molecule more strongly). A later step removes the proton again, so H₃O⁺ is regenerated. A general pattern looks like this:

- Step 1: S + H₃O⁺ → SH⁺ + H₂O (proton gained)
- Step 2: SH⁺ reacts in one or more new elementary steps
- Last step: the proton is lost again, giving the product and H₃O⁺

Because H₃O⁺ is used in an early step, the rate usually increases as [H₃O⁺] increases.

### 3. Surface catalysis

A reactant or intermediate **binds to the surface** of a solid catalyst, often a metal. Hydrogenation of an alkene on nickel is a classic case:

- H₂ molecules bind to the nickel surface, and the H–H bond breaks, leaving H atoms bonded to surface nickel atoms.
- Ethene, C₂H₄, also binds to the surface.
- Surface H atoms add to the carbon atoms one at a time, giving ethane, C₂H₆, which leaves the surface.

The surface-bound H atoms are new intermediates, and each addition is a new elementary step with a low barrier. The strong H–H bond no longer has to break in a collision with ethene. Only atoms on the surface can take part, so a powder (more surface per gram) is a much better catalyst than a lump of the same mass. The catalytic converter in a car is another surface catalyst: metals such as platinum, palladium and rhodium on a ceramic support.

## Common misconceptions

- **"A catalyst is not used in the reaction."** It is used, then made again. It appears in the mechanism even though it cancels from the overall equation.
- **"A catalyst gives particles more energy."** No. At constant temperature the energy spread is unchanged. The catalyst lowers the threshold (Figure 2) and may improve orientation.
- **"A catalyst lowers ΔH."** No. Reactants and products are at the same energies; only the path between them changes.
- **"A catalyst only speeds up the forward reaction."** It lowers the barrier for the reverse reaction by the same amount.
- **"A catalyst cannot be in the rate law because it is not in the overall equation."** If it takes part in the rate-determining step (or a step before it), it can, as in Worked example 1.
- **Mixing up catalysts and intermediates.** Catalyst: in first, out later. Intermediate: out first, in later.
- **"The catalysed profile has the same shape but a lower hump."** Usually the catalysed path has more steps, so it has more humps and at least one dip for the new intermediate.
- **"Any amount of catalyst gives the same rate."** If the catalyst is in the rate law, more catalyst gives a faster rate. For a surface catalyst, more exposed surface gives a faster rate.

## Where this leads

This topic closes Unit 5. It builds on mechanisms and rate laws (Topics 5.7 to 5.9) and on [multistep energy profiles (Topic 5.10)](/advanced-course-resources/chemistry/5-10-multistep-reaction-energy-profile-study-guide/). Next, Unit 6 turns from *how fast* to *how much energy*: start with [endothermic and exothermic processes (Topic 6.1)](/advanced-course-resources/chemistry/6-1-endothermic-exothermic-processes-study-guide/). In Unit 7 you will see why a catalyst does not change an equilibrium constant. Now try the [practice questions](/advanced-course-resources/chemistry/5-11-catalysis-practice/), then use the [revision notes](/advanced-course-resources/chemistry/5-11-catalysis-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/5-11-catalysis-checklist/).
