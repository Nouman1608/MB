---
resourceId: "mb-ap-chem-7.8-study-guide"
title: "Representations of Equilibrium: Study Guide (Chemistry 7.8)"
description: "Read and draw particle diagrams of a reversible reaction before and at equilibrium, count particles to find Q and K, and link the picture to the size of K."
course: "chemistry"
unit: 7
topics: ["7.8"]
resourceType: "study-guide"
prerequisites:
  - "Q versus K and ICE tables (Topic 7.7)"
  - "What very large and very small K values mean (Topic 7.5)"
  - "Writing Kc expressions (Topic 7.3)"
prerequisiteResources: ["mb-ap-chem-7.7-study-guide"]
learningObjectives:
  - "Read a particle diagram as a sample of fixed volume and turn particle counts into concentrations"
  - "Tell from a sequence of diagrams when a system has reached equilibrium, and explain why reactions are still happening"
  - "Calculate Q or K from particle counts, knowing when counts can be used directly and when they must be converted"
  - "Link the proportions of particles in a diagram to a large, small or moderate K"
  - "Draw a particle diagram of an equilibrium mixture that conserves atoms and matches a given K"
skills: ["3", "5", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Counting and simple arithmetic; K has no units in this course"
related: ["mb-ap-chem-7.8-revision-notes", "mb-ap-chem-7.8-practice", "mb-ap-chem-7.8-checklist"]
next: "mb-ap-chem-7.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A particle diagram is a snapshot of a small, fixed volume. The number of particles of a species is proportional to its concentration."
  - "Equilibrium is reached when the particle counts stop changing from one snapshot to the next. Individual particles still react."
  - "When both sides of the equation have the same total number of particles, you can put counts straight into K. Otherwise convert counts to concentrations first."
  - "Mostly products means K is large; mostly reactants means K is small."
  - "Every diagram in a sequence must contain the same number of atoms of each element."
faqs:
  - question: "Why do the particles move around between two equilibrium snapshots?"
    answer: "Because equilibrium is dynamic. Molecules keep reacting in both directions at equal rates, so a particular molecule may have broken apart and a different one formed. Only the counts stay the same."
  - question: "Do I have to draw exact numbers of particles?"
    answer: "Your diagram must give the right ratio and conserve atoms. Choose numbers that are small enough to draw but large enough to show the ratio clearly, and include a key."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## What a particle diagram shows

In [Topic 7.7](/advanced-course-resources/chemistry/7-7-calculating-equilibrium-concentrations-study-guide/) you worked with numbers in an ICE table. A **particle diagram** (also called a particulate diagram) shows the same mixture as a picture. Each box is a snapshot of a tiny part of the container, drawn at the particle level.

Read a particle diagram with these rules:

- **Each box has the same volume.** So the number of particles of a species is proportional to its concentration or partial pressure.
- **Each symbol stands for one particle,** or for a fixed amount if the question says so (for example, "each particle represents 0.10 mol").
- **A key tells you which atom is which.** Shapes, shading or labels show the difference, not colour alone.
- **Boxes in a sequence** are snapshots of the same container at different times.

## Before and at equilibrium

Figure 1 follows the fictional reaction A₂(g) + B₂(g) ⇌ 2 AB(g), with K = 4.0, from the moment the gases are mixed.

<figure>
<svg viewBox="0 0 640 260" role="img" aria-labelledby="eq-seq-title eq-seq-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="eq-seq-title">Four snapshots of A₂ + B₂ ⇌ 2AB reaching equilibrium</title>
<desc id="eq-seq-desc">Four boxes of equal size in a row. A atoms are drawn as filled circles and B atoms as open circles. Box 1, start: 4 A₂ and 4 B₂ molecules, no AB. Box 2, later: 3 A₂, 3 B₂ and 2 AB. Box 3, equilibrium: 2 A₂, 2 B₂ and 4 AB. Box 4, later still: again 2 A₂, 2 B₂ and 4 AB, but in different positions. Every box contains 8 A atoms and 8 B atoms.</desc>
<rect x="0" y="0" width="640" height="260" fill="#ffffff"/>
<g font-size="14" font-weight="600" fill="#1d2b44" text-anchor="middle">
<text x="83" y="30">Start</text><text x="241" y="30">Later</text><text x="399" y="30">Equilibrium</text><text x="557" y="30">Later still</text>
</g>
<rect x="10" y="40" width="146" height="146" rx="4" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="30" cy="66" r="8" fill="#1d2b44"/><circle cx="46" cy="66" r="8" fill="#1d2b44"/>
<circle cx="120" cy="66" r="8" fill="#1d2b44"/><circle cx="136" cy="66" r="8" fill="#1d2b44"/>
<circle cx="75" cy="113" r="8" fill="#1d2b44"/><circle cx="91" cy="113" r="8" fill="#1d2b44"/>
<circle cx="30" cy="160" r="8" fill="#1d2b44"/><circle cx="46" cy="160" r="8" fill="#1d2b44"/>
<circle cx="75" cy="66" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><circle cx="91" cy="66" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="30" cy="113" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><circle cx="46" cy="113" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="120" cy="113" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><circle cx="136" cy="113" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="120" cy="160" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><circle cx="136" cy="160" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="168" y="40" width="146" height="146" rx="4" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="188" cy="66" r="8" fill="#1d2b44"/><circle cx="204" cy="66" r="8" fill="#1d2b44"/>
<circle cx="233" cy="113" r="8" fill="#1d2b44"/><circle cx="249" cy="113" r="8" fill="#1d2b44"/>
<circle cx="278" cy="160" r="8" fill="#1d2b44"/><circle cx="294" cy="160" r="8" fill="#1d2b44"/>
<circle cx="278" cy="66" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><circle cx="294" cy="66" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="188" cy="160" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><circle cx="204" cy="160" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="233" cy="160" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><circle cx="249" cy="160" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="233" cy="66" r="8" fill="#1d2b44"/><circle cx="249" cy="66" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="278" cy="113" r="8" fill="#1d2b44"/><circle cx="294" cy="113" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="326" y="40" width="146" height="146" rx="4" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="391" cy="66" r="8" fill="#1d2b44"/><circle cx="407" cy="66" r="8" fill="#1d2b44"/>
<circle cx="346" cy="160" r="8" fill="#1d2b44"/><circle cx="362" cy="160" r="8" fill="#1d2b44"/>
<circle cx="346" cy="113" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><circle cx="362" cy="113" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="436" cy="160" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><circle cx="452" cy="160" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="346" cy="66" r="8" fill="#1d2b44"/><circle cx="362" cy="66" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="436" cy="66" r="8" fill="#1d2b44"/><circle cx="452" cy="66" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="436" cy="113" r="8" fill="#1d2b44"/><circle cx="452" cy="113" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="391" cy="160" r="8" fill="#1d2b44"/><circle cx="407" cy="160" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="484" y="40" width="146" height="146" rx="4" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="549" cy="113" r="8" fill="#1d2b44"/><circle cx="565" cy="113" r="8" fill="#1d2b44"/>
<circle cx="594" cy="66" r="8" fill="#1d2b44"/><circle cx="610" cy="66" r="8" fill="#1d2b44"/>
<circle cx="549" cy="160" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><circle cx="565" cy="160" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="504" cy="66" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><circle cx="520" cy="66" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="549" cy="66" r="8" fill="#1d2b44"/><circle cx="565" cy="66" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="504" cy="113" r="8" fill="#1d2b44"/><circle cx="520" cy="113" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="504" cy="160" r="8" fill="#1d2b44"/><circle cx="520" cy="160" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="594" cy="160" r="8" fill="#1d2b44"/><circle cx="610" cy="160" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="83" y="206">4 A₂, 4 B₂, 0 AB</text><text x="83" y="222">Q = 0</text>
<text x="241" y="206">3 A₂, 3 B₂, 2 AB</text><text x="241" y="222">Q = 0.44</text>
<text x="399" y="206">2 A₂, 2 B₂, 4 AB</text><text x="399" y="222">Q = 4.0 = K</text>
<text x="557" y="206">2 A₂, 2 B₂, 4 AB</text><text x="557" y="222">Q = 4.0 = K</text>
</g>
<circle cx="200" cy="248" r="6" fill="#1d2b44"/><text x="212" y="252" font-size="12" fill="#1d2b44">= A atom</text>
<circle cx="340" cy="248" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><text x="352" y="252" font-size="12" fill="#1d2b44">= B atom</text>
</svg>
<figcaption>Figure 1. Filled circles are A atoms and open circles are B atoms. Counts change until Q = K, then stay the same while the particles keep moving and reacting.</figcaption>
</figure>

What the sequence tells you:

1. **At the start** there is no AB, so Q = 0 and Q < K. The forward reaction is faster than the reverse.
2. **Later**, some A₂ and B₂ have reacted. Q = 2² ÷ (3 × 3) = 0.44, still below K, so the forward reaction is still winning.
3. **At equilibrium**, Q = 4² ÷ (2 × 2) = 4.0 = K. From now on the forward and reverse rates are equal.
4. **Later still**, the counts are the same, but the particles are in different places. Some AB molecules have split and others have formed. You cannot see this from the counts alone, which is why equilibrium is called **dynamic**.

**Conservation check.** Count the atoms in every box: 8 A atoms and 8 B atoms each time. A reaction rearranges atoms; it never creates or destroys them. If a diagram in a sequence breaks this rule, it is wrong.

## From particles to Q and K

Because every box has the same volume, the count of each species is proportional to its concentration. Whether you can put counts straight into K depends on the equation.

- **Same total number of particles on each side** (as in A₂ + B₂ ⇌ 2 AB: two particles on the left, two on the right). The conversion factor cancels top and bottom. **Counts go straight into K.**
- **Different numbers of particles on each side** (as in 2 J ⇌ J₂). The factor does not cancel. **Convert each count to a concentration** before using K: concentration = (count × moles per particle) ÷ box volume.

Worked example 1 shows why the second rule matters.

## Worked example 1: reading Kc from a box

**Question.** Figure 2 shows an equilibrium mixture for the fictional reaction 2 J(g) ⇌ J₂(g). The box represents 1.0 L, and each particle represents 0.10 mol. Calculate Kc.

<figure>
<svg viewBox="0 0 640 200" role="img" aria-labelledby="j-box-title j-box-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="j-box-title">Equilibrium mixture for 2J ⇌ J₂</title>
<desc id="j-box-desc">One box containing 4 single J atoms, drawn as separate filled circles, and 3 J₂ molecules, drawn as pairs of touching filled circles.</desc>
<rect x="0" y="0" width="640" height="200" fill="#ffffff"/>
<rect x="245" y="30" width="150" height="150" rx="4" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="275" cy="58" r="8" fill="#1d2b44"/>
<circle cx="317" cy="60" r="8" fill="#1d2b44"/><circle cx="333" cy="60" r="8" fill="#1d2b44"/>
<circle cx="370" cy="56" r="8" fill="#1d2b44"/>
<circle cx="267" cy="105" r="8" fill="#1d2b44"/><circle cx="283" cy="105" r="8" fill="#1d2b44"/>
<circle cx="323" cy="108" r="8" fill="#1d2b44"/>
<circle cx="359" cy="104" r="8" fill="#1d2b44"/><circle cx="375" cy="104" r="8" fill="#1d2b44"/>
<circle cx="355" cy="152" r="8" fill="#1d2b44"/>
<text x="420" y="80" font-size="13" fill="#1d2b44">single circle = J</text>
<text x="420" y="104" font-size="13" fill="#1d2b44">joined pair = J₂</text>
<text x="420" y="128" font-size="13" fill="#1d2b44">box = 1.0 L</text>
<text x="420" y="152" font-size="13" fill="#1d2b44">1 particle = 0.10 mol</text>
</svg>
<figcaption>Figure 2. Count single circles and joined pairs separately: 4 J and 3 J₂.</figcaption>
</figure>

1. **Count.** 4 J particles and 3 J₂ particles.
2. **Convert.** [J] = 4 × 0.10 mol ÷ 1.0 L = 0.40 mol L⁻¹. [J₂] = 3 × 0.10 mol ÷ 1.0 L = 0.30 mol L⁻¹.
3. **Substitute.** Kc = [J₂] / [J]² = 0.30 / (0.40)² = 0.30 / 0.16 = 1.875.
4. **Answer.** Kc = **1.9** (2 significant figures).

**Why not just use the counts?** Counts give 3 ÷ 4² = 0.19, which is ten times too small. The left side has two particles and the right side has one, so the factor of 0.10 mol L⁻¹ per particle does not cancel. Converting first avoids the error.

## Worked example 2: predicting the equilibrium box

**Question.** The same container as Figure 1 (K = 4.0) is refilled with 1 A₂, 1 B₂ and 6 AB molecules. Which way does the reaction go, and what does the box look like at equilibrium?

1. **Q from counts.** The equation has two particles on each side, so counts can be used directly. Q = 6² ÷ (1 × 1) = 36.
2. **Direction.** Q > K, so there is a net **reverse** reaction: AB breaks up into A₂ and B₂.
3. **ICE in particles.** Let x pairs of AB react backwards:

| | A₂ | B₂ | 2 AB |
|---|---|---|---|
| I (particles) | 1 | 1 | 6 |
| C (particles) | +x | +x | −2x |
| E (particles) | 1 + x | 1 + x | 6 − 2x |

4. **Solve.** (6 − 2x)² ÷ (1 + x)² = 4.0. Square root: (6 − 2x) ÷ (1 + x) = 2, so 6 − 2x = 2 + 2x and x = 1.
5. **Answer.** At equilibrium the box holds **2 A₂, 2 B₂ and 4 AB**.

**Check.** Q = 4² ÷ (2 × 2) = 4.0 = K. ✓ A atoms: 2 + 6 = 8 at the start and 4 + 4 = 8 at the end. ✓

**What this shows.** This is the same equilibrium box as Figure 1, reached from the opposite direction. Starting from mostly reactants or mostly products, a system with the same atoms in the same volume at the same temperature reaches the same equilibrium mixture.

## Worked example 3: is this box at equilibrium?

**Question.** The container from Worked example 1 (1.0 L, each particle 0.10 mol, Kc = 1.875 for 2 J ⇌ J₂) is drawn at an earlier time. The box holds 6 J and 2 J₂. Is the system at equilibrium? If not, describe how the box will change.

1. **Convert.** [J] = 6 × 0.10 = 0.60 mol L⁻¹; [J₂] = 2 × 0.10 = 0.20 mol L⁻¹.
2. **Q.** Q = 0.20 / (0.60)² = 0.20 / 0.36 = 0.56.
3. **Compare.** Q < K, so the system is **not** at equilibrium. The forward reaction is faster than the reverse, and J atoms will pair up to form J₂.
4. **Predict.** Each J₂ formed uses 2 J. One more J₂ gives 4 J and 3 J₂, which is exactly Figure 2, where Q = K.

**Check.** J atoms: 6 + 2 × 2 = 10 now, and 4 + 3 × 2 = 10 in Figure 2. ✓ The two boxes are snapshots of the same container, one before and one at equilibrium. A question may give you either box and ask for the other.

## Linking the picture to the size of K

Topic 7.5 linked the size of K to how far a reaction goes. A particle diagram shows this at a glance.

| What the equilibrium box shows | What it says about K |
|---|---|
| Almost all particles are products; only one or two reactant particles, or none visible | K is very large; the reaction goes almost to completion |
| Almost all particles are reactants; only one or two product particles, or none visible | K is very small; the reaction barely proceeds |
| Clear numbers of both reactants and products | K is moderate (neither very large nor very small) |

A box can only show a few dozen particles at most. If K is very large, the leftover amount of a reactant may be far less than one particle's worth, so the diagram shows none. That does not mean it is exactly zero; there is simply too little to draw.

## Drawing your own particle diagram

When a question asks you to draw a box, check each of these:

- **Key.** Show which symbol is which atom, using shapes or shading, not colour alone.
- **Conserve atoms.** Count each element in your box and compare with the starting box.
- **Match K.** Put your counts into Q (converting first if the particle numbers differ on each side) and check that Q = K.
- **Same volume.** Draw every box in a sequence the same size.
- **Show "dynamic" in words.** A static picture cannot show motion, so add a note or arrows if the question asks about rates: "forward rate = reverse rate".

## Particle level and lab level

A particle diagram and a lab observation describe the same system at two scales. In the lab, an equilibrium mixture has constant colour, pressure and concentration. At the particle level, molecules are still colliding and reacting in both directions. The two views agree because the forward and reverse processes happen at equal rates: the changes cancel out, so nothing changes overall. A single box is a tiny sample. A real container holds an enormous number of particles (one mole is 6.022 × 10²³), and the ratio in the box represents the ratio across the whole container.

## Common misconceptions

- **"At equilibrium, the boxes contain equal numbers of reactant and product particles."** Equal counts happen only for particular values of K. The counts are constant, not equal.
- **"Nothing happens once the counts stop changing."** Reactions continue in both directions at equal rates.
- **"Counts can always go straight into K."** Only when the equation has the same number of particles on each side. Otherwise convert to concentrations.
- **"A very large K means the box has no reactants at all."** A tiny amount remains, often too little to draw.
- **Counting a molecule as two particles.** A joined pair such as J₂ is one particle of J₂, not two J particles.
- **Losing or gaining atoms between boxes.** Every box must have the same number of atoms of each element.

## Where this leads

Next, [Topic 7.9](/advanced-course-resources/chemistry/7-9-introduction-le-ch-teliers-principle-study-guide/) asks what happens when you disturb an equilibrium. Particle diagrams are a quick way to show a stress, such as adding more particles of one species, and the shift that follows. Try the [practice questions](/advanced-course-resources/chemistry/7-8-representations-equilibrium-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/7-8-representations-equilibrium-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/7-8-representations-equilibrium-checklist/) to consolidate.
