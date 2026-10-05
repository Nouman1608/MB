---
resourceId: "mb-ap-chem-4.9-study-guide"
title: "Oxidation-Reduction (Redox) Reactions: Study Guide (Chemistry 4.9)"
description: "Learn how to split a redox reaction into oxidation and reduction half-reactions, balance each one in acidic solution, and combine them so electrons lost equal electrons gained."
course: "chemistry"
unit: 4
topics: ["4.9"]
resourceType: "study-guide"
prerequisites:
  - "Assigning oxidation numbers and spotting the species oxidized and reduced (Topic 4.7)"
  - "Writing net ionic equations and leaving out spectator ions (Topic 4.2)"
prerequisiteResources: ["mb-ap-chem-4.8-study-guide"]
learningObjectives:
  - "Write the oxidation and reduction half-reactions for a redox reaction, with electrons shown"
  - "Balance a half-reaction in acidic solution for atoms and charge using H₂O, H⁺ and e⁻"
  - "Combine two half-reactions so that the electrons cancel, and check the overall equation for atoms and charge"
  - "Use the coefficients of a balanced redox equation as mole ratios"
skills: ["1", "5"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Balancing needs no calculator; one short mole-ratio calculation uses simple multiplication"
related: ["mb-ap-chem-4.9-revision-notes", "mb-ap-chem-4.9-practice", "mb-ap-chem-4.9-checklist"]
next: "mb-ap-chem-4.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A half-reaction shows one side of a redox reaction with the electrons written in: oxidation has electrons as a product, reduction has electrons as a reactant."
  - "In acidic solution, balance a half-reaction in this order: other atoms, then O with H₂O, then H with H⁺, then charge with e⁻."
  - "Multiply the half-reactions so that electrons lost equal electrons gained, then add them and cancel everything that appears on both sides."
  - "A balanced redox equation must balance both atoms and total charge, and it never shows free electrons."
  - "The coefficients of the balanced equation are the mole ratios you use in stoichiometry and titration."
faqs:
  - question: "Do I need the terms oxidizing agent and reducing agent?"
    answer: "The course framework says the meaning of these two terms is not assessed on the exam. You will meet them in textbooks, but on the exam you only need to say which species is oxidized and which is reduced."
  - question: "Why can't I just balance a redox equation by inspection?"
    answer: "For simple cases you sometimes can. But an equation can have the same atoms on both sides and still have different total charges. The half-reaction method balances atoms and electrons together, so the charge always comes out right."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Redox as electron bookkeeping

In a redox (oxidation-reduction) reaction, electrons move from one species to another. You met the definitions in Topic 4.7:

- **Oxidation** is loss of electrons. The oxidation number of an atom goes **up**.
- **Reduction** is gain of electrons. The oxidation number of an atom goes **down**.
- Both happen at the same time. The electrons lost by the species that is oxidized are exactly the electrons gained by the species that is reduced.

Look at zinc metal placed in a solution of copper(II) sulfate. The net ionic equation is:

Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)

The oxidation number of zinc goes from 0 to +2, so zinc is oxidized. The oxidation number of copper goes from +2 to 0, so Cu²⁺ is reduced. The sulfate ions are spectators and do not appear.

The overall equation hides the electrons. To see them, and to balance harder reactions, you split the reaction into two **half-reactions**.

## Half-reactions: showing where the electrons go

A half-reaction shows only the oxidation or only the reduction, with the electrons written as e⁻:

- Oxidation: Zn(s) → Zn²⁺(aq) + 2e⁻
- Reduction: Cu²⁺(aq) + 2e⁻ → Cu(s)

Notice the pattern. In an **oxidation** half-reaction the electrons are a **product** (they are lost). In a **reduction** half-reaction the electrons are a **reactant** (they are gained).

Each half-reaction must balance on its own, for atoms **and** for charge. Check the oxidation: the left side has charge 0; the right side has +2 + 2(−1) = 0. Balanced.

When you add the two half-reactions, 2e⁻ appear on both sides and cancel. What is left is the overall equation. Free electrons never appear in an overall equation, because electrons do not float around in solution waiting to be used.

### The one rule that matters most

> Electrons lost in the oxidation must equal electrons gained in the reduction.

In the zinc example both half-reactions involve 2 electrons, so you add them as they are. Usually the numbers are different, and you must multiply one or both half-reactions first. That is where most of the balancing work lies.

## The half-reaction method

<figure>
<svg viewBox="0 0 660 400" role="img" aria-labelledby="redox-steps-title redox-steps-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="redox-steps-title">Steps for balancing a redox equation in acidic solution</title>
<desc id="redox-steps-desc">A column of seven numbered boxes joined by downward arrows. Step 1: split the reaction into an oxidation half-reaction and a reduction half-reaction. Step 2: balance atoms other than oxygen and hydrogen. Step 3: balance oxygen by adding water molecules. Step 4: balance hydrogen by adding H plus ions. Step 5: balance charge by adding electrons. A bracket beside steps 2 to 5 says do these for each half-reaction separately. Step 6: multiply the half-reactions so electrons lost equal electrons gained. Step 7: add them, cancel electrons and anything on both sides, then check atoms and charge. A bracket beside steps 6 and 7 says combine the two half-reactions.</desc>
<defs><marker id="rx-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g font-size="14" fill="#1d2b44">
<rect x="20" y="15" width="440" height="40" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="35" y="40"><tspan font-weight="700">1</tspan>  Split into oxidation and reduction half-reactions</text>
<rect x="20" y="69" width="440" height="40" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="35" y="94"><tspan font-weight="700">2</tspan>  Balance atoms other than O and H</text>
<rect x="20" y="123" width="440" height="40" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="35" y="148"><tspan font-weight="700">3</tspan>  Balance O by adding H₂O</text>
<rect x="20" y="177" width="440" height="40" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="35" y="202"><tspan font-weight="700">4</tspan>  Balance H by adding H⁺</text>
<rect x="20" y="231" width="440" height="40" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="35" y="256"><tspan font-weight="700">5</tspan>  Balance charge by adding e⁻ (to the more positive side)</text>
<rect x="20" y="285" width="440" height="40" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 4"/>
<text x="35" y="310"><tspan font-weight="700">6</tspan>  Multiply so electrons lost = electrons gained</text>
<rect x="20" y="339" width="440" height="40" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 4"/>
<text x="35" y="364"><tspan font-weight="700">7</tspan>  Add, cancel, then check atoms and charge</text>
</g>
<g stroke="#1d2b44" stroke-width="2">
<path d="M240 55 V66" marker-end="url(#rx-arrow)"/>
<path d="M240 109 V120" marker-end="url(#rx-arrow)"/>
<path d="M240 163 V174" marker-end="url(#rx-arrow)"/>
<path d="M240 217 V228" marker-end="url(#rx-arrow)"/>
<path d="M240 271 V282" marker-end="url(#rx-arrow)"/>
<path d="M240 325 V336" marker-end="url(#rx-arrow)"/>
<path d="M475 69 H490 V271 H475" fill="none"/>
<path d="M475 285 H490 V379 H475" fill="none"/>
</g>
<g font-size="13" fill="#1d2b44">
<text x="500" y="160">Do these for each</text>
<text x="500" y="178">half-reaction</text>
<text x="500" y="196">separately</text>
<text x="500" y="328">Combine the</text>
<text x="500" y="346">two halves</text>
</g>
</svg>
<figcaption>Figure 1. The half-reaction method for a reaction in acidic solution. Steps 2–5 (solid outlines) are done to each half-reaction on its own; steps 6–7 (dashed outlines) combine them.</figcaption>
</figure>

### Why water and H⁺?

Many redox reactions happen in aqueous acid. The solution contains plenty of water molecules and H⁺ ions, so they can take part in the reaction even though they are not in the "skeleton" you are given. That is why you are allowed to add H₂O and H⁺ to balance oxygen and hydrogen. You are **not** allowed to add any other species.

### Step by step: permanganate to manganese(II)

In acid, the purple permanganate ion, MnO₄⁻, is reduced to Mn²⁺. Build the half-reaction:

1. Skeleton: MnO₄⁻ → Mn²⁺
2. Atoms other than O and H: one Mn on each side. Already balanced.
3. Oxygen: 4 O on the left, so add 4 H₂O on the right: MnO₄⁻ → Mn²⁺ + 4H₂O
4. Hydrogen: now 8 H on the right, so add 8 H⁺ on the left: MnO₄⁻ + 8H⁺ → Mn²⁺ + 4H₂O
5. Charge: left is −1 + 8 = **+7**; right is **+2**. Add 5e⁻ to the more positive side (the left) to make both sides +2:

MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O

**Check with oxidation numbers.** Mn is +7 in MnO₄⁻ and +2 in Mn²⁺. A drop of 5 means 5 electrons gained. This matches the 5e⁻ you added for charge. The electrons are on the left, so this is a reduction, as it should be.

The two checks (charge count and oxidation-number change) must agree. If they do not, you have made an error in steps 3–5.

## Worked example 1: unequal numbers of electrons

**Question.** Chromium metal is placed in a solution of nickel(II) nitrate. Chromium dissolves as Cr³⁺ ions and nickel metal forms. Write the balanced net ionic equation.

1. **Who changes?** Cr goes from 0 to +3 (oxidized). Ni goes from +2 to 0 (reduced). Nitrate is a spectator.
2. **Half-reactions:**
   - Oxidation: Cr(s) → Cr³⁺(aq) + 3e⁻
   - Reduction: Ni²⁺(aq) + 2e⁻ → Ni(s)
3. **Equalise electrons.** The lowest common multiple of 3 and 2 is 6. Multiply the oxidation by 2 and the reduction by 3:
   - 2Cr(s) → 2Cr³⁺(aq) + 6e⁻
   - 3Ni²⁺(aq) + 6e⁻ → 3Ni(s)
4. **Add and cancel** the 6e⁻:

2Cr(s) + 3Ni²⁺(aq) → 2Cr³⁺(aq) + 3Ni(s)

**Check.** Atoms: 2 Cr and 3 Ni on each side. Charge: left 3(+2) = +6; right 2(+3) = +6. Balanced.

**Why the quick guess fails.** Cr + Ni²⁺ → Cr³⁺ + Ni has one of each atom on both sides, so it looks balanced. But the charge is +2 on the left and +3 on the right. Chromium would be losing 3 electrons while nickel gains only 2. Charge balance is the test that catches this.

## Worked example 2: acidic solution, both halves need water

**Question.** In acidic solution, orange dichromate ions, Cr₂O₇²⁻, oxidize nitrous acid, HNO₂, to nitrate ions, NO₃⁻. The chromium ends up as green Cr³⁺. Write the balanced net ionic equation.

**Step 1: oxidation numbers.** Cr is +6 in Cr₂O₇²⁻ and +3 in Cr³⁺: reduced. N is +3 in HNO₂ and +5 in NO₃⁻: oxidized.

**Reduction half-reaction**

1. Cr₂O₇²⁻ → Cr³⁺. Balance Cr: Cr₂O₇²⁻ → 2Cr³⁺
2. 7 O on the left, so add 7H₂O on the right: Cr₂O₇²⁻ → 2Cr³⁺ + 7H₂O
3. 14 H on the right, so add 14H⁺ on the left: Cr₂O₇²⁻ + 14H⁺ → 2Cr³⁺ + 7H₂O
4. Charge: left −2 + 14 = +12; right 2(+3) = +6. Add 6e⁻ to the left:

Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O

Check: two Cr atoms each drop by 3, so 2 × 3 = 6 electrons. Agrees.

**Oxidation half-reaction**

1. HNO₂ → NO₃⁻. One N on each side.
2. 2 O on the left and 3 O on the right, so add 1 H₂O on the left: HNO₂ + H₂O → NO₃⁻
3. 3 H on the left, none on the right, so add 3H⁺ on the right: HNO₂ + H₂O → NO₃⁻ + 3H⁺
4. Charge: left 0; right −1 + 3 = +2. Add 2e⁻ to the right:

HNO₂ + H₂O → NO₃⁻ + 3H⁺ + 2e⁻

Check: N rises by 2 (from +3 to +5), so 2 electrons lost. Agrees.

**Combine.** The reduction gains 6e⁻; the oxidation loses 2e⁻. Multiply the oxidation by 3:

3HNO₂ + 3H₂O → 3NO₃⁻ + 9H⁺ + 6e⁻

Add the two half-reactions:

Cr₂O₇²⁻ + 14H⁺ + 3HNO₂ + 3H₂O → 2Cr³⁺ + 7H₂O + 3NO₃⁻ + 9H⁺

Now cancel what appears on both sides. Take 9H⁺ from both sides (14 − 9 = 5 left on the reactant side) and 3H₂O from both sides (7 − 3 = 4 left on the product side):

Cr₂O₇²⁻(aq) + 5H⁺(aq) + 3HNO₂(aq) → 2Cr³⁺(aq) + 4H₂O(l) + 3NO₃⁻(aq)

**Check.**

| | Left | Right |
|---|---|---|
| Cr | 2 | 2 |
| N | 3 | 3 |
| O | 7 + 6 = 13 | 4 + 9 = 13 |
| H | 5 + 3 = 8 | 8 |
| Charge | −2 + 5 = +3 | +6 − 3 = +3 |

Everything balances, and no electrons appear. The final step of cancelling H⁺ and H₂O is easy to forget. An equation that still has H₂O or H⁺ on both sides is not finished.

## Using the balanced equation as a mole ratio

Once the equation is balanced, its coefficients are mole ratios, exactly as in Topic 4.5. In Worked example 2, 1 mol of Cr₂O₇²⁻ reacts with 3 mol of HNO₂. So 0.00150 mol of dichromate reacts with 3 × 0.00150 = 0.00450 mol of nitrous acid.

This is how redox titrations work (Topic 4.6). A solution of known concentration, such as permanganate or dichromate, is added until all of the other reactant has reacted. The mole ratio from the balanced redox equation converts moles of titrant into moles of the substance being analysed. A wrong coefficient gives a wrong concentration, so the balancing has to be right first.

## Extension: reactions in basic solution

Some redox reactions happen in basic solution, where OH⁻ is plentiful and H⁺ is scarce. A reliable method:

1. Balance the half-reaction exactly as if it were in acid.
2. Add as many OH⁻ ions to **both** sides as there are H⁺ ions.
3. On the side with H⁺, combine each H⁺ + OH⁻ into H₂O. Cancel any H₂O that appears on both sides.

For example, hypochlorite, ClO⁻, is reduced to Cl⁻. In acid: ClO⁻ + 2H⁺ + 2e⁻ → Cl⁻ + H₂O. Adding 2OH⁻ to both sides and combining gives ClO⁻ + 2H₂O + 2e⁻ → Cl⁻ + H₂O + 2OH⁻, which simplifies to:

ClO⁻ + H₂O + 2e⁻ → Cl⁻ + 2OH⁻

Charge: left −1 − 2 = −3; right −1 − 2 = −3. Balanced. Most questions you will meet are set in acidic solution, but the same idea of balancing atoms and charge applies.

## Common misconceptions

- **"If the atoms balance, the equation is balanced."** A redox equation must also balance charge. Cr + Ni²⁺ → Cr³⁺ + Ni has balanced atoms but unequal charge.
- **"Electrons can stay in the final equation."** Electrons must cancel completely. If e⁻ remains, the electrons lost and gained were not equalised.
- **Putting electrons on the wrong side.** Oxidation: electrons are products. Reduction: electrons are reactants. A quick check is the oxidation-number change.
- **Adding electrons to make the charges "add up to zero".** The charges on the two sides must be **equal**. They do not have to be zero.
- **Balancing O with O₂ or O²⁻.** In aqueous acid, balance oxygen with H₂O and hydrogen with H⁺. Free O²⁻ ions do not exist in water.
- **Adding the electron numbers instead of using a common multiple.** For a 3-electron and a 2-electron half-reaction, the total transferred is 6, not 5.
- **Forgetting to cancel H⁺ and H₂O.** After adding the half-reactions, remove anything that appears on both sides and reduce the coefficients if they share a common factor.
- **Including spectator ions.** K⁺ in KMnO₄ or NO₃⁻ in Ni(NO₃)₂ do not change. Leave them out of the net ionic equation.

## Where this leads

This topic finishes Unit 4. Half-reactions come back in Unit 9, where each half-reaction happens at a separate electrode of a galvanic or electrolytic cell and the number of electrons transferred links the equation to cell potential and to the charge passed in electrolysis. Next you start Unit 5 with [Topic 5.1, Reaction Rates](/advanced-course-resources/chemistry/5-1-reaction-rates-study-guide/). Try the [practice questions](/advanced-course-resources/chemistry/4-9-oxidation-reduction-redox-reactions-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/4-9-oxidation-reduction-redox-reactions-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/4-9-oxidation-reduction-redox-reactions-checklist/) to consolidate.
