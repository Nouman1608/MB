---
title: "AS Chemistry: Redox Processes — Revision Notes"
resourceType: "revision-notes"
subject: "chemistry"
level: ["a-levels"]
topic: "Electrochemistry"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9701"]
syllabusSeries: "2025-2027"
order: 6.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "as-electrochemistry"
    subtopic: "as-redox-processes"
description: "Condensed recall notes on oxidation numbers, balancing redox equations and disproportionation for Cambridge AS & A Level Chemistry 9701."
author: "nouman-ahmed"
reviewer: "farhat-ul-ain-sehgal"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by farhat-ul-ain-sehgal on 2026-09-29; 2026-11-08: credited to farhat-ul-ain-sehgal (accountable teacher, D-379)."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Redox Processes study guide](/resources/as-redox-processes/).

## Oxidation number rules — in priority order

```
1  Uncombined element                          0
2  Simple ion                        = its charge
3  Fluorine                                   -1   (always)
4  Group 1 / Group 2                     +1 / +2
5  Hydrogen                                   +1   (except metal hydrides -1)
6  Oxygen                                     -2   (except peroxides -1,
                                                    and OF2 where it is +2)
7  Sum in a neutral compound                    0
8  Sum in an ion                    = ion charge
```

The order matters: where rules conflict, the **earlier** one wins. In H₂O₂, oxygen must be −1 because hydrogen's +1 takes priority.

**Worked example — finding Mn in MnO₄⁻.** Four oxygens contribute 4 × (−2) = −8. The ion's overall charge is −1, so Mn's oxidation number + (−8) = −1, giving **Mn = +7**. This is exactly why the ion is named manganate**(VII)** — the Roman numeral states the oxidation number directly, so naming and calculation should always agree.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-redox-processes--15-redox-oxidation-number-rules.webp" width="900" height="970" alt="Five rules for oxidation numbers, applied in order. An atom on its own is 0, for example Cl2 or Fe. A simple ion equals its charge, for example Na+ is +1 and O2- is -2. Combined oxygen is -2, except in peroxides where it is -1. Combined hydrogen is +1, except in metal hydrides where it is -1. The numbers in a neutral compound sum to 0, and in a polyatomic ion they sum to the ion charge." loading="lazy">
  <figcaption>Rules for assigning oxidation numbers, with the exceptions for oxygen and hydrogen.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-redox-processes--16-redox-mno4-oxidation-number.webp" width="900" height="930" alt="A bar chart that builds up the charge of the MnO4 minus ion. The manganese bar rises to plus 7. Four oxygen bars each fall by 2, to plus 5, plus 3, plus 1 and minus 1, a total of minus 8. The final bar shows the ion charge of minus 1. So Mn is +7 and the ion is named manganate(VII)." loading="lazy">
  <figcaption>Mn in MnO4- is +7 because +7 plus four oxygens at -2 gives the ion charge of -1.</figcaption>
</figure>

## Definitions

| | Oxidation | Reduction |
|---|---|---|
| Electrons | **Loss** | **Gain** |
| Oxidation number | **Increase** | **Decrease** |

**OIL RIG.** Oxidising agent is itself **reduced**; reducing agent is itself **oxidised** — the reversal that catches most candidates.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-redox-processes--17-redox-oxidation-reduction.webp" width="900" height="930" alt="A vertical oxidation number axis. Iron goes up from +2 in Fe2+ to +3 in Fe3+: oxidation, losing one electron, so Fe2+ is the reducing agent. Manganese goes down from +7 in MnO4- to +2 in Mn2+: reduction, gaining five electrons, so MnO4- is the oxidising agent. An arrow shows electrons passing from the iron to the manganese. OIL RIG: oxidation is loss, reduction is gain." loading="lazy">
  <figcaption>Fe2+ is oxidised (+2 to +3) and MnO4- is reduced (Mn +7 to +2): the oxidising agent is the species that is itself reduced.</figcaption>
</figure>

## Balancing by half equations

```
1  Balance the atoms other than O and H
2  Balance O by adding H2O
3  Balance H by adding H+
4  Balance charge by adding electrons
5  Multiply the halves so electrons cancel, then add
```

**Worked — manganate(VII) in acid:**

```
MnO4-  ->  Mn2+
MnO4-  ->  Mn2+ + 4H2O           (balance O)
MnO4- + 8H+  ->  Mn2+ + 4H2O     (balance H)
MnO4- + 8H+ + 5e-  ->  Mn2+ + 4H2O   (balance charge)
```

Mn goes from **+7 to +2** — a five-electron change, which is why the 5e⁻ appears in this half-equation. The overall reacting ratio between MnO₄⁻ and a given reducing agent is **not always 1:5** — that specific ratio only holds for a reducing agent that supplies exactly **one** electron per species, such as Fe²⁺ → Fe³⁺ + e⁻ (giving the familiar MnO₄⁻ : Fe²⁺ = 1 : 5). For a reducing agent that supplies a different number of electrons per species (e.g. a typical two-electron reductant), combine the two balanced half-equations — matching electrons lost to electrons gained — to find the correct overall ratio.

## Balancing by oxidation-number change (alternative method)

Instead of half equations, you can balance by tracking oxidation-number changes directly, since electrons lost must equal electrons gained.

**Worked example.** Balance MnO₄⁻ + Fe²⁺ + H⁺ → Mn²⁺ + Fe³⁺ + H₂O.

```
1  Mn: +7 -> +2  (down 5, gains 5e-)     Fe: +2 -> +3  (up 1, loses 1e-)
2  One Mn needs 5 Fe2+ to supply 5 electrons:
   MnO4- + 5Fe2+ + H+  ->  Mn2+ + 5Fe3+ + H2O
3  Balance O and H: 4 O in MnO4- need 4 H2O; those need 8 H+
   MnO4- + 5Fe2+ + 8H+  ->  Mn2+ + 5Fe3+ + 4H2O
4  Check charge: left (-1)+5(+2)+8(+1) = +17;  right (+2)+5(+3) = +17
```

Both atoms and overall charge must balance — equal electrons lost and gained is necessary but **not sufficient** on its own.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-redox-processes--19-redox-balancing.webp" width="900" height="990" alt="Four steps balance MnO4- + Fe2+ + H+ giving Mn2+ + Fe3+ + H2O. Step 1: manganese goes from +7 to +2 and gains 5 electrons; iron goes from +2 to +3 and loses 1. Step 2: one MnO4- takes 5 electrons, so 5 Fe2+ are needed to give 5. Step 3: 4 oxygens need 4 H2O, which need 8 H+. Step 4: the balanced equation MnO4- + 5Fe2+ + 8H+ gives Mn2+ + 5Fe3+ + 4H2O has charge +17 on both sides and equal atoms." loading="lazy">
  <figcaption>Balance by equalising electrons gained and lost, then balance O and H and check charge and atoms.</figcaption>
</figure>

## Titration essentials

| Titration | Indicator | End point |
|---|---|---|
| **Manganate(VII)** | **Self-indicating** | First permanent **pale pink** |
| **Thiosulfate/iodine** | Starch, added **near the end** | Blue-black → colourless |

Manganate(VII) titrations use **sulfuric** acid — not hydrochloric (chloride would be oxidised to chlorine) and not nitric (itself an oxidising agent).

Starch is added late because it forms a stable complex with iodine that releases slowly if added too early.

## Disproportionation

The **same element** is simultaneously oxidised and reduced.

```
Cl2 + 2NaOH  ->  NaCl + NaClO + H2O
Cl:  0 -> -1  (reduced)  AND  0 -> +1 (oxidised)
```

To prove it, assign oxidation numbers to that element on both sides and show one rises and one falls.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-redox-processes--18-redox-disproportionation.webp" width="900" height="780" alt="Oxidation number of chlorine on a vertical axis. Chlorine in Cl2 is 0. In the reaction with cold dilute sodium hydroxide it forms NaOCl, where chlorine is +1 (oxidised, arrow up), and NaCl, where chlorine is -1 (reduced, arrow down). Cl2 + 2NaOH gives NaCl + NaOCl + H2O. A single species being both oxidised and reduced is disproportionation." loading="lazy">
  <figcaption>In Cl2 + 2NaOH, chlorine goes from 0 to +1 and to -1: one species, oxidised and reduced.</figcaption>
</figure>

## Exam traps

- Calling the agent by what happens to it — the oxidising agent is **reduced**.
- Oxidation number is **per atom**, not for the whole formula unit.
- Forgetting the exceptions: H₂O₂, metal hydrides, OF₂.
- Using HCl in a manganate(VII) titration.
- Adding starch at the start of an iodine titration.
- Not checking that both atoms **and** charge balance in a half equation.
- Assuming a reaction is a simple redox without checking the oxidation number of the element in *every* product — a hidden disproportionation is easy to miss.

## Self-test

1. Give the oxidation number of Mn in MnO₄⁻ and of Cr in Cr₂O₇²⁻.
2. Why is sulfuric acid used in manganate(VII) titrations?
3. Write the half equation for MnO₄⁻ → Mn²⁺ in acid.
4. When is starch added in an iodine–thiosulfate titration, and why?
5. Prove that Cl₂ + 2NaOH → NaCl + NaClO + H₂O is disproportionation.
6. Use oxidation-number changes to balance MnO₄⁻ + Fe²⁺ + H⁺ → Mn²⁺ + Fe³⁺ + H₂O.
7. In that reaction, identify the oxidising agent and the reducing agent, giving a reason for each.

**Answers:** 1. Mn = **+7**; Cr = **+6**. 2. Hydrochloric acid would be oxidised to chlorine and nitric acid is itself an oxidising agent, so both would give a false result. 3. MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O. 4. Near the end point, when the solution is straw-coloured — added earlier, the starch–iodine complex releases iodine too slowly and the end point is indistinct. 5. Chlorine starts at 0; in NaCl it is −1 (reduced) and in NaClO it is +1 (oxidised) — the same element both oxidised and reduced. 6. MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O — Mn gains 5 electrons (+7→+2), so 5 Fe²⁺ are needed to lose 5 electrons (+2→+3) between them. 7. MnO₄⁻ is the **oxidising agent** — it causes Fe²⁺ to be oxidised while Mn itself is reduced (+7→+2); Fe²⁺ is the **reducing agent** — it causes Mn to be reduced while Fe itself is oxidised (+2→+3).

## Frequently asked questions

**Is an oxidising agent oxidised or reduced?**
An oxidising agent is itself reduced, because it gains electrons from the species it oxidises. A reducing agent is itself oxidised; this reversal catches many candidates.

**Is oxidation number given per atom or per formula?**
Oxidation number is given per atom, not for the whole formula unit. Exceptions to the usual rules, such as H₂O₂, metal hydrides and OF₂, also need to be remembered.

**What is disproportionation?**
Disproportionation is a reaction in which the same element is both oxidised and reduced. Check the oxidation number of the element in every product to spot it.

**Why is hydrochloric acid not used to acidify a manganate(VII) titration?**
Hydrochloric acid would be oxidised to chlorine by manganate(VII), giving a false titre. Nitric acid is itself an oxidising agent, so dilute sulfuric acid is used instead.
