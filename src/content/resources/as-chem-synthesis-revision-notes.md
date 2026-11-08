---
title: "AS Chemistry: Organic Synthesis Routes — Revision Notes"
resourceType: "revision-notes"
subject: "chemistry"
level: ["a-levels"]
topic: "Organic synthesis"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9701"]
syllabusSeries: "2025-2027"
order: 21.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "as-organic-synthesis"
    subtopic: "as-organic-synthesis"
description: "Condensed recall notes on the AS reaction map, functional group interconversions and planning multi-step synthesis for Cambridge AS & A Level Chemistry 9701."
author: "nouman-ahmed"
reviewer: "farhat-ul-ain-sehgal"
reviewStatus: "review-pending"
reviewedDate: 2026-09-29
publishedDate: 2026-08-22
featured: false
reviewNeeded: true
reviewNote: "2026-11-08 recheck: expanded thin notes (opening answer, worked two-step route, FAQ, question headings); 'bromoethane' locant fix; please re-review."
---

Organic synthesis at AS Level in Cambridge AS & A Level Chemistry 9701 asks you to link the reactions of every
functional group you have studied into routes of two or more steps, giving the reagent and conditions for each
step, and to analyse a given route, identifying the reaction types and any by-products.

Condensed for the final weeks. For the full explanation, use the
[Organic Synthesis: Planning Multi-Step Routes study guide](/resources/as-organic-synthesis-planning-multi-step-routes/).

## What does the AS reaction map look like?

```
                    ALKANE
                      | free-radical substitution (UV, X2)
                      v
              HALOGENOALKANE  <--- HX ---  ALKENE
                 |     |    \                ^  |
     aq NaOH     |     |     \ KCN(ethanol)  |  | H2/Ni
     reflux      |     |      \              |  | (reverse: conc H2SO4, 170C)
                 v     |       v             |  v
             ALCOHOL   |    NITRILE          ALKANE
              |   |    |
   [O] distil |   | [O] reflux
              v   v
        ALDEHYDE -> CARBOXYLIC ACID
              |            |
     NaBH4    |            | + alcohol, conc H2SO4
              v            v
           ALCOHOL       ESTER
```

Learn the **reagent and conditions** for each arrow — that is what the marks are for.

## Which conditions decide the product?

| Starting material | Reagent | Conditions | Product |
|---|---|---|---|
| Halogenoalkane | NaOH | **Aqueous**, reflux | Alcohol |
| Halogenoalkane | NaOH | **Ethanolic**, reflux | Alkene |
| Halogenoalkane | KCN | Ethanolic, reflux | Nitrile (+1 C) |
| Primary alcohol | K₂Cr₂O₇/H₂SO₄ | **Distil** | Aldehyde |
| Primary alcohol | K₂Cr₂O₇/H₂SO₄ | **Reflux** | Carboxylic acid |
| Alcohol | conc H₂SO₄ | 170 °C | Alkene |
| Alkene | Steam, H₃PO₄ | 300 °C, 60 atm | Alcohol |

Three pairs turn on a single word — **aqueous vs ethanolic**, **distil vs reflux**, and the direction of alcohol ⇄ alkene. Getting those right is most of the topic.

## How do you change the carbon chain length?

| Change | Route |
|---|---|
| **+1 carbon** | Halogenoalkane + KCN → nitrile (then hydrolyse to acid) |
| **+1 carbon** | Carbonyl + HCN → hydroxynitrile |
| **No change** | All other AS reactions |

If a question needs one more carbon, a **nitrile step is compulsory** — spotting that immediately usually reveals the whole route.

## Using reactions as identification tests

Every characteristic reaction already learned doubles as an
identification test — no separate list needs memorising:

| Observation | Functional group indicated |
|---|---|
| Decolourises aqueous bromine | C=C (alkene) |
| Effervesces with a carbonate | –COOH (carboxylic acid) |
| Orange precipitate with 2,4-DNPH | C=O (aldehyde or ketone) |
| Silver mirror with Tollens' reagent | –CHO (aldehyde, specifically) |
| Yellow precipitate with alkaline I₂(aq) | CH₃CO– or CH₃CH(OH)– |
| Orange → green with acidified K₂Cr₂O₇ | –OH on a primary/secondary carbon |
| AgNO₃(aq)/ethanol precipitate: **white** = Cl, **cream** = Br, **yellow** = I | halogenoalkane (C–X); colour identifies which halogen |

Given an unknown molecule's reactions with several reagents, work
through this table **in reverse**: each positive or negative result
rules functional groups in or out, narrowing down what the molecule
must contain.

## Analysing a given route — spotting by-products

The reverse skill to planning a route is being given one and asked to
identify what's happening, and what by-products might form, at each
step:

```
Ethane --Br2/UV--> bromoethane   FREE-RADICAL SUBSTITUTION
        by-product: further substitution -> some dibromoethane

Bromoethane --NaOH(aq), heat--> ethanol   NUCLEOPHILIC SUBSTITUTION
        (if ETHANOLIC NaOH used instead: ELIMINATION -> ethene)
```

Checking whether a given step used **aqueous or ethanolic** conditions
is always worth doing explicitly, since it changes both the product
and the type of by-product a route might generate.

## How do you plan a multi-step route?

1. Identify the **functional group** in the starting material and the target.
2. Compare **carbon counts** — different means a nitrile step.
3. Work **backwards** from the target: what makes this group?
4. Chain the steps, giving **reagent and conditions** for each.
5. Check no step destroys a group you need later.

**Worked example.** Plan a two-step route from propene to propanone.

```
Target: propanone, a ketone, 3 carbons -> same carbon count, so no nitrile step
Ketones come from oxidising a secondary alcohol
Step 1  propene + steam, H3PO4 catalyst  -> propan-2-ol (major product, Markovnikov)
Step 2  propan-2-ol + K2Cr2O7 / dilute H2SO4, heat under reflux -> propanone
```

A secondary alcohol cannot be oxidised beyond the ketone, so reflux is safe here.

## Frequently asked questions

**How many marks does a route question usually give for each step?**
Typically one mark for the intermediate and one for the reagent and conditions of each step, so a step
without conditions loses marks.

**Can I use any reaction I know from outside the syllabus?**
Use the named 9701 reagents and conditions. An unfamiliar but real reaction may be credited, but invented
"direct conversions" are not.

## Exam traps

- Omitting conditions — "NaOH" alone does not say whether you get an alcohol or an alkene.
- Forgetting that KCN adds a carbon.
- Writing "oxidise" instead of naming the reagent and stating distil or reflux.
- Proposing a route that changes carbon count without a nitrile step.
- Using reflux when the aldehyde is the target.
- Using 2,4-DNPH alone to claim a molecule is specifically an aldehyde — it only confirms a carbonyl (aldehyde **or** ketone) is present; Tollens' is needed to identify an aldehyde specifically.
- Forgetting that free-radical substitution is poorly selective, so proposing a route via this step without acknowledging further-substitution by-products.
- Proposing a plausible-sounding but non-syllabus step ("it gets converted directly") instead of a real, named reagent and condition.

## Self-test

1. Convert 1-bromopropane to propan-1-ol. Reagent and conditions?
2. Convert propan-1-ol to propanal, and say how you avoid the acid.
3. How would you turn bromoethane into propanoic acid?
4. Which two AS reactions lengthen the carbon chain?
5. What single word distinguishes substitution from elimination with hydroxide?
6. A molecule decolourises bromine water and effervesces with sodium carbonate. What can you deduce about its functional groups?
7. What by-product might form alongside bromoethane in the free-radical substitution of ethane with Br₂/UV?

**Answers:** 1. Aqueous sodium hydroxide, heat under reflux. 2. Acidified potassium dichromate(VI), and **distil** the aldehyde off as it forms so it cannot be oxidised further. 3. Ethanolic KCN under reflux to give propanenitrile (adding one carbon), then acid hydrolysis to propanoic acid. 4. Halogenoalkane + KCN, and carbonyl + HCN. 5. Aqueous (substitution → alcohol) versus ethanolic (elimination → alkene). 6. It contains both a C=C double bond (from decolourising bromine water) and a –COOH group (from effervescing with a carbonate) — the two pieces of evidence are independent and can be combined. 7. Further substitution — some 1,1-dibromoethane (or another dibromoethane isomer) forming as the reaction continues on the monobromo product.

For the full worked examples of planning and analysing multi-step
routes, see the [Organic Synthesis: Planning Multi-Step Routes study guide](/resources/as-organic-synthesis-planning-multi-step-routes/);
for further exam-style practice, see the [Organic Synthesis Routes practice questions](/resources/as-chem-synthesis-practice/).
