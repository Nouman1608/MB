---
resourceId: "mb-ap-chem-7.2-study-guide"
title: "Direction of Reversible Reactions: Study Guide (Chemistry 7.2)"
description: "Learn how the forward and reverse rates decide which way a reversible reaction goes, how to compare the rates by calculation and graph, and how to judge particle models of the process."
course: "chemistry"
unit: 7
topics: ["7.2"]
resourceType: "study-guide"
prerequisites:
  - "What equilibrium looks like and why it is dynamic (Topic 7.1)"
  - "Writing the rate law of an elementary step from its molecularity (Topic 5.4)"
prerequisiteResources: ["mb-ap-chem-7.1-study-guide"]
learningObjectives:
  - "State the direction of net change when the forward rate is greater than, less than or equal to the reverse rate"
  - "Calculate forward and reverse rates for an elementary reversible step and use them to predict the direction of net change"
  - "Explain how the two rates change as a reaction moves towards equilibrium, from either side"
  - "Read particle diagrams and rate–time graphs to decide the direction of a reaction"
  - "Explain what a particle model shows well and what it cannot show about a reversible reaction"
skills: ["4", "5"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Concentrations in M (mol L⁻¹), rates in M s⁻¹; all lettered species are fictional and their rate constants are invented"
related: ["mb-ap-chem-7.2-revision-notes", "mb-ap-chem-7.2-practice", "mb-ap-chem-7.2-checklist"]
next: "mb-ap-chem-7.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Forward rate greater than reverse rate: net change from reactants to products."
  - "Reverse rate greater than forward rate: net change from products to reactants."
  - "Forward rate equal to reverse rate: equilibrium, with no net change."
  - "As a reaction runs, the faster direction slows down and the slower direction speeds up, until the two rates are equal."
  - "A particle snapshot shows amounts at one moment. You need two or more snapshots, or rate information, to say which way the reaction is going."
faqs:
  - question: "Can a reaction go 'backwards' on its own?"
    answer: "Yes. If a mixture has more product than the equilibrium amount, the reverse rate is greater than the forward rate, so there is a net change from products to reactants. 'Forward' and 'reverse' only describe the direction relative to how the equation is written."
  - question: "Do I always need rate constants to predict the direction?"
    answer: "No. In this topic you compare rates. In Topic 7.3 you will meet a shortcut: compare the reaction quotient Q with the equilibrium constant K, which gives the same answer without any rate data."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Two rates, one net direction

In Topic 7.1 you saw that a reversible reaction runs both ways at once. Particles of reactant turn into product (the **forward** reaction) while particles of product turn back into reactant (the **reverse** reaction). What you actually observe is the **net** result of the two.

The net rate is the difference between them:

**net rate = forward rate − reverse rate**

That gives three cases.

| Comparison of rates | Net rate | What you observe |
|---|---|---|
| forward rate > reverse rate | positive | reactants are used up, products build up: net change to the **right** |
| reverse rate > forward rate | negative | products are used up, reactants build up: net change to the **left** |
| forward rate = reverse rate | zero | no net change: the system is at **equilibrium** |

So the direction of a reversible reaction is not fixed by the equation. It depends on which of the two rates is larger **at that moment**.

## How the rates change on the way to equilibrium

Each rate depends on the concentrations of the species that react in that direction. The forward rate depends on the reactants; the reverse rate depends on the products. As the net reaction runs, those concentrations change, and so do the rates.

Suppose the net change is to the right:

- Reactants are being used up, so the **forward rate falls**.
- Products are building up, so the **reverse rate rises**.
- The gap between them shrinks until the two rates are equal. That is equilibrium.

The same happens in the other direction. Figure 1 shows a fictional reaction, E(aq) ⇌ F(aq), started with only F present: [F] = 0.80 M and [E] = 0. Each direction is a single elementary step (Topic 5.4), so forward rate = k_f[E] and reverse rate = k_r[F], with the invented values k_f = 0.060 s⁻¹ and k_r = 0.020 s⁻¹.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="eq72-r-title eq72-r-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="eq72-r-title">Forward and reverse rates when a reaction starts with only product</title>
<desc id="eq72-r-desc">A graph with time from 0 to 60 seconds on the horizontal axis and rate from 0 to 0.016 molar per second on the vertical axis. The dashed line for the reverse rate starts at the top, 0.016, and curves gently down. The solid line for the forward rate starts at zero and curves up. The dashed line is always above the solid line until both approach 0.012 molar per second near 60 seconds, marked by a dotted horizontal line labelled equilibrium rate 0.012.</desc>
<line x1="70" y1="230" x2="615" y2="230" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="230" x2="70" y2="35" stroke="#1d2b44" stroke-width="2"/>
<text x="62" y="234" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<text x="62" y="144" text-anchor="end" font-size="12" fill="#1d2b44">0.008</text>
<text x="62" y="54" text-anchor="end" font-size="12" fill="#1d2b44">0.016</text>
<line x1="66" y1="140" x2="70" y2="140" stroke="#1d2b44"/>
<line x1="66" y1="50" x2="70" y2="50" stroke="#1d2b44"/>
<line x1="70" y1="95" x2="610" y2="95" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<text x="606" y="88" text-anchor="end" font-size="12" fill="#1d2b44">equilibrium rate 0.012</text>
<text x="70" y="250" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="160" y="250" text-anchor="middle" font-size="12" fill="#1d2b44">10</text>
<text x="250" y="250" text-anchor="middle" font-size="12" fill="#1d2b44">20</text>
<text x="340" y="250" text-anchor="middle" font-size="12" fill="#1d2b44">30</text>
<text x="430" y="250" text-anchor="middle" font-size="12" fill="#1d2b44">40</text>
<text x="520" y="250" text-anchor="middle" font-size="12" fill="#1d2b44">50</text>
<text x="610" y="250" text-anchor="middle" font-size="12" fill="#1d2b44">60</text>
<text x="340" y="275" text-anchor="middle" font-size="13" fill="#1d2b44">Time (s)</text>
<text x="18" y="140" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 18 140)">Rate (M s⁻¹)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70,230 115,185 160,156 205,136 250,122 295,113 340,107 385,103 430,101 475,99 520,97 565,97 610,96"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5" points="70,50 115,65 160,75 205,81 250,86 295,89 340,91 385,92 430,93 475,94 520,94 565,94 610,95"/>
<text x="120" y="45" font-size="13" font-weight="600" fill="#1d2b44">reverse rate, F → E (dashed)</text>
<text x="190" y="175" font-size="13" font-weight="600" fill="#1d2b44">forward rate, E → F (solid)</text>
</svg>
<figcaption>Figure 1. E(aq) ⇌ F(aq) started with only F. Dashed line: reverse rate. Solid line: forward rate. While the dashed line is above the solid line, the net change is from F to E. The gap closes as both rates approach 0.012 M s⁻¹, where the system reaches equilibrium.</figcaption>
</figure>

Read Figure 1 like this:

- **At t = 0** there is no E, so the forward rate is zero. The reverse rate is k_r[F] = 0.020 × 0.80 = 0.016 M s⁻¹, its largest value.
- **While reverse > forward**, F is used up and E builds up. The net change is to the left.
- **As this happens** the reverse rate falls (less F) and the forward rate rises (more E).
- **At equilibrium** [E] = 0.20 M and [F] = 0.60 M, and both rates are 0.012 M s⁻¹.

The equation is written E ⇌ F, but here the reaction runs "backwards" until equilibrium is reached. Direction depends on the rates, not on which side of the equation you call the reactants.

## Calculating the two rates for an elementary step

When a reversible reaction is a single elementary step, you can write the rate law for each direction from its molecularity, just as in Topic 5.4:

- A ⇌ B: forward rate = k_f[A], reverse rate = k_r[B].
- 2A ⇌ A₂: forward rate = k_f[A]², reverse rate = k_r[A₂].
- A + B ⇌ C + D: forward rate = k_f[A][B], reverse rate = k_r[C][D].

Then substitute the concentrations, compare the two rates, and read off the direction. For a reaction that is **not** a single step, you cannot write the rate laws from the equation, but the rule is the same: whichever measured rate is larger decides the direction.

## Worked example 1: which way will each mixture go?

**Question.** Use the reaction E(aq) ⇌ F(aq) from Figure 1, with k_f = 0.060 s⁻¹ and k_r = 0.020 s⁻¹ at the temperature of the experiment. Three separate mixtures are prepared:

| Mixture | [E] (M) | [F] (M) |
|---|---|---|
| 1 | 0.30 | 0.50 |
| 2 | 0.10 | 0.50 |
| 3 | 0.20 | 0.60 |

For each mixture, calculate the forward and reverse rates and state the direction of net change.

1. **Mixture 1.** Forward rate = 0.060 s⁻¹ × 0.30 M = 0.018 M s⁻¹. Reverse rate = 0.020 s⁻¹ × 0.50 M = 0.010 M s⁻¹. Forward > reverse, so the **net change is to the right**: E is converted to F. Net rate = 0.018 − 0.010 = 0.008 M s⁻¹.
2. **Mixture 2.** Forward rate = 0.060 × 0.10 = 0.006 M s⁻¹. Reverse rate = 0.020 × 0.50 = 0.010 M s⁻¹. Reverse > forward, so the **net change is to the left**: F is converted to E, at a net rate of 0.004 M s⁻¹.
3. **Mixture 3.** Forward rate = 0.060 × 0.20 = 0.012 M s⁻¹. Reverse rate = 0.020 × 0.60 = 0.012 M s⁻¹. The rates are equal, so **mixture 3 is at equilibrium**. Its concentrations will not change.

**Check.** Mixtures 1 and 2 contain the same [F] but different [E]. Only the forward rate differs, and that alone is enough to reverse the direction.

**Interpretation.** Mixture 1 holds 0.80 M in total. As it reacts, [E] falls and [F] rises until the rates match. That happens when 0.060[E] = 0.020[F], that is when [F] is three times [E]: [E] = 0.20 M and [F] = 0.60 M, which is mixture 3. So mixture 1 ends up as mixture 3, and Figure 1 (which also holds 0.80 M in total) ends up there too, from the other side. Mixture 2 (0.60 M in total) settles at [E] = 0.15 M and [F] = 0.45 M. Equilibrium mixtures for this reaction always have [F] three times [E] at this temperature; Topic 7.3 turns that fixed ratio into the equilibrium constant.

## Particle models of direction

A particle diagram, or "snapshot", shows the particles in a small region at one instant. Snapshots are a good way to connect what particles do with what you measure. They also have limits, and the exam may ask you to say what a model does and does not show.

Figure 2 shows four snapshots of a fictional gas reaction, 2Z(g) ⇌ Z₂(g), in a sealed container at constant temperature.

<figure>
<svg viewBox="0 0 640 215" role="img" aria-labelledby="eq72-s-title eq72-s-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="eq72-s-title">Four particle snapshots of the reaction 2Z forming Z2</title>
<desc id="eq72-s-desc">Four boxes in a row, each a snapshot of the same container at a later time. Single Z particles are drawn as open circles; Z2 molecules are drawn as two joined filled circles. Snapshot 1 at 0 seconds: 12 Z and 0 Z2. Snapshot 2 at 10 seconds: 6 Z and 3 Z2. Snapshot 3 at 20 seconds: 4 Z and 4 Z2. Snapshot 4 at 30 seconds: 4 Z and 4 Z2, but the particles are in different positions from snapshot 3.</desc>
<rect x="10" y="30" width="146" height="132" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="135" cy="50" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="100" cy="143" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="135" cy="81" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="65" cy="112" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="65" cy="143" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="135" cy="112" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="30" cy="81" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="65" cy="81" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="30" cy="143" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="30" cy="112" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="65" cy="50" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="30" cy="50" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="83" y="182" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">Snapshot 1: t = 0 s</text>
<text x="83" y="200" text-anchor="middle" font-size="12" fill="#1d2b44">12 Z, 0 Z₂</text>
<rect x="168" y="30" width="146" height="132" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="188" cy="143" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="223" cy="112" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="258" cy="50" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="258" cy="112" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="188" cy="81" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="223" cy="81" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="287" cy="81" r="7" fill="#1d2b44"/><circle cx="299" cy="81" r="7" fill="#1d2b44"/>
<circle cx="287" cy="112" r="7" fill="#1d2b44"/><circle cx="299" cy="112" r="7" fill="#1d2b44"/>
<circle cx="182" cy="50" r="7" fill="#1d2b44"/><circle cx="194" cy="50" r="7" fill="#1d2b44"/>
<text x="241" y="182" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">Snapshot 2: t = 10 s</text>
<text x="241" y="200" text-anchor="middle" font-size="12" fill="#1d2b44">6 Z, 3 Z₂</text>
<rect x="326" y="30" width="146" height="132" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="416" cy="143" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="381" cy="81" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="381" cy="143" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="451" cy="81" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="375" cy="112" r="7" fill="#1d2b44"/><circle cx="387" cy="112" r="7" fill="#1d2b44"/>
<circle cx="340" cy="143" r="7" fill="#1d2b44"/><circle cx="352" cy="143" r="7" fill="#1d2b44"/>
<circle cx="410" cy="112" r="7" fill="#1d2b44"/><circle cx="422" cy="112" r="7" fill="#1d2b44"/>
<circle cx="445" cy="143" r="7" fill="#1d2b44"/><circle cx="457" cy="143" r="7" fill="#1d2b44"/>
<text x="399" y="182" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">Snapshot 3: t = 20 s</text>
<text x="399" y="200" text-anchor="middle" font-size="12" fill="#1d2b44">4 Z, 4 Z₂</text>
<rect x="484" y="30" width="146" height="132" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="574" cy="112" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="574" cy="81" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="504" cy="143" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="574" cy="50" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="533" cy="143" r="7" fill="#1d2b44"/><circle cx="545" cy="143" r="7" fill="#1d2b44"/>
<circle cx="498" cy="81" r="7" fill="#1d2b44"/><circle cx="510" cy="81" r="7" fill="#1d2b44"/>
<circle cx="533" cy="81" r="7" fill="#1d2b44"/><circle cx="545" cy="81" r="7" fill="#1d2b44"/>
<circle cx="603" cy="81" r="7" fill="#1d2b44"/><circle cx="615" cy="81" r="7" fill="#1d2b44"/>
<text x="557" y="182" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">Snapshot 4: t = 30 s</text>
<text x="557" y="200" text-anchor="middle" font-size="12" fill="#1d2b44">4 Z, 4 Z₂</text>
</svg>
<figcaption>Figure 2. Snapshots of 2Z ⇌ Z₂ in a sealed container. Open circles: Z atoms. Joined pairs of filled circles: Z₂ molecules. The counts are printed under each box, so the figure does not rely on shading.</figcaption>
</figure>

## Worked example 2: reading and judging a particle model

**Question.** Use Figure 2.

(a) Show that the snapshots are consistent with the equation.
(b) State the direction of net change between snapshots 1 and 2, and compare the forward and reverse rates in that interval.
(c) What can you conclude from snapshots 3 and 4?
(d) Give two things these snapshots do not show about the reaction.

**(a)** Count the Z units. Snapshot 1: 12. Snapshot 2: 6 + 2 × 3 = 12. Snapshots 3 and 4: 4 + 2 × 4 = 12. The total is conserved, and each Z₂ uses 2 Z, which matches 2Z ⇌ Z₂.

**(b)**

1. Z falls from 12 to 6 and Z₂ rises from 0 to 3. Six Z have become three Z₂.
2. The net change is to the **right** (forward).
3. So in this interval the forward rate (2Z → Z₂) is **greater than** the reverse rate (Z₂ → 2Z). At the very start, with no Z₂ present, the reverse rate is zero.

**(c)** The counts are the same at 20 s and 30 s (4 Z, 4 Z₂), while the particles are in different positions. The amounts are no longer changing, so the system has probably reached equilibrium by 20 s. At equilibrium the forward and reverse rates are equal. Note that 4 Z and 4 Z₂ are equal **counts** here by coincidence; equal amounts are not what defines equilibrium.

**(d)** Any two of:

- **Rates are not shown.** A single snapshot shows how many particles there are, not how fast they react. You can only infer which rate is larger by comparing snapshots.
- **The dynamic process is hidden.** In snapshots 3 and 4, Z₂ molecules are still forming and breaking up. The diagrams cannot show which particular Z₂ broke apart and re-formed between 20 s and 30 s.
- **Too few particles.** A real sample contains an enormous number of particles. With only 12 units, random variation could change the counts from one snapshot to the next even at equilibrium.
- **Timing.** You cannot tell exactly when equilibrium began; it could be any time between 10 s and 20 s.

**Interpretation.** The model is good for showing conservation of atoms and the direction of net change. To show that equilibrium is dynamic, you would need extra information, for example arrows on individual particles, or a labelled-particle experiment like the one in Topic 7.1.

## Preview: what if you upset an equilibrium?

The rate rule also explains what happens when you disturb a system at equilibrium, which you will study in Topics 7.9 and 7.10. Take mixture 3 from Worked example 1 and suddenly add more F. The reverse rate, k_r[F], jumps up at once, but the forward rate, k_f[E], has not changed yet. Now reverse > forward, so there is a net change to the left until the rates match again. You do not need to calculate this now; just notice that the same rule, "the larger rate wins", decides the direction.

## Common misconceptions

- **"Forward means the reaction always goes left to right."** The net direction depends on which rate is larger. A mixture with too much product goes right to left.
- **"At the start, the reaction only goes forward."** Only if no product is present. If both reactants and products are there, both directions run from the start.
- **"The direction depends on the rate constants alone."** In Worked example 1, the same k_f and k_r gave a net change to the right for mixture 1 and to the left for mixture 2. Concentrations matter as much as the constants.
- **"A larger k_f means the forward rate is always faster."** Rate = k × concentration term. A large k_f with a tiny reactant concentration can still give the smaller rate.
- **"The faster direction stays faster until the reactants run out."** The faster direction slows and the slower one speeds up until they are equal. Neither rate reaches zero.
- **"Two snapshots with equal counts prove nothing is happening."** Equal counts at two times show no net change, not no reaction.
- **"One snapshot is enough to tell the direction."** One snapshot shows amounts only. Direction needs a change over time or rate information.

## Where this leads

Next, Topic 7.3 introduces the [reaction quotient Q and the equilibrium constant K](/advanced-course-resources/chemistry/7-3-reaction-quotient-equilibrium-constant-study-guide/). Comparing Q with K gives the direction of net change straight from concentrations, with no rate constants needed. It is a shortcut for the reasoning on this page. Look back at [Topic 7.1](/advanced-course-resources/chemistry/7-1-introduction-equilibrium-study-guide/) if the signs of equilibrium are not secure. Try the [practice questions](/advanced-course-resources/chemistry/7-2-direction-reversible-reactions-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/7-2-direction-reversible-reactions-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/7-2-direction-reversible-reactions-checklist/) to consolidate.
