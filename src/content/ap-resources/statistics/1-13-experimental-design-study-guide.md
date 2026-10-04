---
resourceId: "mb-ap-stats-1.13-study-guide"
title: "Experimental Design: Study Guide (Statistics 1.13)"
description: "Learn the four principles of a well-designed experiment, control groups, placebos and blinding, and how to choose and justify completely randomized, block and matched pairs designs."
course: "statistics"
unit: 1
topics: ["1.13"]
resourceType: "study-guide"
prerequisites:
  - "The difference between an experiment and an observational study (Topic 1.10)"
  - "Experimental units, explanatory and response variables, and treatments (Topic 1.10)"
  - "Random selection and simple random samples (Topics 1.11 and 1.12)"
prerequisiteResources: ["mb-ap-stats-1.12-study-guide"]
learningObjectives:
  - "Recognise comparison, random assignment, replication and direct control in a description of an experiment"
  - "Explain the roles of a control group, a placebo and single- or double-blinding, and calculate a placebo effect from group means"
  - "Explain what random assignment does to extraneous and confounding variables"
  - "Identify completely randomized, randomized block and matched pairs designs and describe how to carry each one out"
  - "Justify the choice of one design over another for a given study"
  - "Justify whether a cause-and-effect conclusion is appropriate and to which population the results apply"
skills: ["2"]
studyMinutes: 45
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use the random integer function on a graphing calculator, or other software, to carry out random assignment. The arithmetic needs only a basic calculator."
related: ["mb-ap-stats-1.13-revision-notes", "mb-ap-stats-1.13-practice", "mb-ap-stats-1.13-checklist"]
next: "mb-ap-stats-1.13-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "A well-designed experiment has comparison of at least two treatments, random assignment, replication and direct control."
  - "Random assignment makes treatment groups similar on extraneous variables, so a difference in the response can be blamed on the treatments."
  - "The placebo effect is the mean response to a placebo minus the mean response to no treatment."
  - "Block on a variable that affects the response; a matched pairs design is a block design with two treatments."
  - "Random assignment supports cause and effect; random selection supports generalising to a population. Volunteers limit the population, not the causal claim."
faqs:
  - question: "Is random assignment the same as random sampling?"
    answer: "No. Random sampling chooses who is in the study, which lets you generalise to the population. Random assignment decides which treatment each unit gets, which lets you draw a cause-and-effect conclusion. An experiment can have one, both or neither."
  - question: "Does every experiment need a placebo?"
    answer: "No. You need a placebo when knowing that you received a treatment could change the response, as with people taking a pill. A control group can also be the current standard treatment, or no treatment at all."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Why run an experiment?

In an observational study you record what happens without changing anything. In an **experiment** you **impose** treatments and then measure the result. If people who drink more water also sleep better, some other habit may explain both. If **chance** decides who drinks more water, and that group sleeps better, the water becomes the most believable explanation.

A quick recap of the vocabulary from Topic 1.10:

- **Experimental units:** the individuals that receive the treatments. When they are people, they are called **subjects** or **participants**.
- **Explanatory variable (factor):** the variable whose levels the researcher imposes.
- **Treatments:** the levels of the factor, or the combinations of levels when there is more than one factor.
- **Response variable:** the outcome measured on each unit after the treatment.

## The four principles of a well-designed experiment

Every well-designed experiment includes all four of these. Learn the names: questions often ask you to spot which one is missing.

| Principle | What it means | Why it matters |
|---|---|---|
| **Comparison** | At least two treatment groups, one of which may be a control group | Without a comparison you cannot tell whether a result is unusual |
| **Random assignment** | Treatments are given to units by a chance process | Makes the groups similar on everything except the treatment |
| **Replication** | More than one experimental unit gets each treatment | Lets you see the natural variation between units, so one odd unit cannot decide the result |
| **Direct control** | Keep known extraneous variables the same for every unit | Removes those sources of variation from the response |

**Direct control** and a **control group** are different ideas. Direct control means fixing conditions, such as the same room, the same time of day or the same amount of water. A control group is one of the treatment groups.

## Control groups, placebos and the placebo effect

A **control group** exists for comparison. It might receive no treatment, the current standard treatment, or a **placebo**: something that looks like the real treatment but has no active ingredient, such as a sugar pill.

People sometimes respond just because they believe they are being treated. The **placebo effect** measures this:

**placebo effect = (mean response to the placebo) − (mean response to no treatment)**

To estimate it, the experiment needs both a placebo group and a no-treatment group. Worked example 1 shows the calculation.

## Blinding

If participants know their treatment, their expectations can change the response. If the researchers who measure the response know, they may judge it differently without meaning to. Blinding (also called masking) prevents this.

- **Single-blind:** one side does not know which treatment each participant receives. Either the participants do not know but the researchers who deal with them do, or the other way round.
- **Double-blind:** neither the participants nor the researchers who interact with them know which treatment each participant receives.

Blinding is not always possible: people know whether they did an exercise programme. You can often still blind the person who measures the response.

## Extraneous variables, confounding and random assignment

An **extraneous variable** is one that is known or believed to affect the response but is not the explanatory variable you are studying. In a fertiliser study, the amount of sunlight each plant gets is extraneous.

A **confounding variable** is related to the explanatory variable in a way that makes it hard to tell which of the two is changing the response. Suppose a teacher lets students choose a new revision method. Keen students may choose it more often, and keen students may also score higher anyway. Keenness is then confounded with the method.

**Random assignment** reduces this problem. Because chance decides who gets which treatment, each extraneous variable (keenness, age, sleep, and even variables nobody thought of) should end up with roughly the same distribution in every treatment group. The groups are then similar except for the treatment, so a large difference in the response points to the treatments as the cause.

Random assignment does not make the groups identical. Chance differences remain; with more units per group (replication), they tend to be smaller.

**How to describe random assignment.** Give enough detail that someone else could do it exactly:

1. Label the units 1 to N.
2. Use a random number generator to choose labels between 1 and N, ignoring repeats.
3. The first chosen labels form treatment group 1, the next form group 2, and so on, until every unit has a treatment.

Slips of paper also work: write each treatment name on the right number of identical slips, mix them in a container, and let each unit draw one without replacement.

## Three experimental designs

**Completely randomized design.** Every unit is assigned to a treatment completely at random. The groups are often equal in size, but they do not have to be.

**Randomized block design.** First group the units into **blocks** of units that are similar on a **blocking variable**, a variable you expect to affect the response. Then randomly assign the treatments separately inside each block, so that every treatment appears in every block.

Blocking separates the variation caused by the blocking variable from the rest of the variation. Inside a block, the units are alike on that variable, so differences between treatments are easier to see. This gives **more precise comparisons**. Blocking does not replace random assignment; it happens inside each block.

**Matched pairs design.** This is a randomized block design with exactly two treatments. It has two forms:

- Units are put into pairs that are similar on one or more extraneous variables, and a chance process decides which member of each pair gets which treatment.
- Each unit receives **both** treatments, and the **order** is decided at random.

<figure>
<svg viewBox="0 0 710 330" role="img" aria-labelledby="block-title block-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="block-title">Flow diagram of a randomized block design for 24 garden plots</title>
<desc id="block-desc">A box labelled 24 garden plots splits into two blocks: block 1 with 12 sunny plots and block 2 with 12 shaded plots. Inside each block, an arrow leads to a box labelled random assignment. From each random assignment box, three arrows lead to fertiliser A with 4 plots, fertiliser B with 4 plots and fertiliser C with 4 plots. All three treatment boxes in a block lead to a final box that says compare A, B and C within that block.</desc>
<defs><marker id="block-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="710" height="330" fill="#ffffff"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="1.5">
<rect x="10" y="135" width="110" height="60" rx="6"/>
<rect x="150" y="40" width="140" height="60" rx="6"/><rect x="150" y="230" width="140" height="60" rx="6"/>
<rect x="320" y="45" width="120" height="50" rx="6" stroke-dasharray="6 4"/><rect x="320" y="235" width="120" height="50" rx="6" stroke-dasharray="6 4"/>
<rect x="470" y="10" width="125" height="30" rx="4"/><rect x="470" y="55" width="125" height="30" rx="4"/><rect x="470" y="100" width="125" height="30" rx="4"/>
<rect x="470" y="200" width="125" height="30" rx="4"/><rect x="470" y="245" width="125" height="30" rx="4"/><rect x="470" y="290" width="125" height="30" rx="4"/>
<rect x="620" y="45" width="82" height="50" rx="6"/><rect x="620" y="235" width="82" height="50" rx="6"/>
</g>
<g stroke="#1d2b44" stroke-width="1.5" fill="none" marker-end="url(#block-arrow)">
<line x1="120" y1="165" x2="150" y2="72"/><line x1="120" y1="165" x2="150" y2="258"/>
<line x1="290" y1="70" x2="320" y2="70"/><line x1="290" y1="260" x2="320" y2="260"/>
<line x1="440" y1="70" x2="470" y2="25"/><line x1="440" y1="70" x2="470" y2="70"/><line x1="440" y1="70" x2="470" y2="115"/>
<line x1="440" y1="260" x2="470" y2="215"/><line x1="440" y1="260" x2="470" y2="260"/><line x1="440" y1="260" x2="470" y2="305"/>
<line x1="595" y1="25" x2="620" y2="62"/><line x1="595" y1="70" x2="620" y2="70"/><line x1="595" y1="115" x2="620" y2="78"/>
<line x1="595" y1="215" x2="620" y2="252"/><line x1="595" y1="260" x2="620" y2="260"/><line x1="595" y1="305" x2="620" y2="268"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="65" y="161">24 garden</text><text x="65" y="178">plots</text>
<text x="220" y="66">Block 1: 12</text><text x="220" y="83">sunny plots</text>
<text x="220" y="256">Block 2: 12</text><text x="220" y="273">shaded plots</text>
<text x="380" y="67">Random</text><text x="380" y="83">assignment</text>
<text x="380" y="257">Random</text><text x="380" y="273">assignment</text>
<text x="532" y="30">Fertiliser A: 4</text><text x="532" y="75">Fertiliser B: 4</text><text x="532" y="120">Fertiliser C: 4</text>
<text x="532" y="220">Fertiliser A: 4</text><text x="532" y="265">Fertiliser B: 4</text><text x="532" y="310">Fertiliser C: 4</text>
<text x="661" y="67">Compare</text><text x="661" y="83">in block 1</text>
<text x="661" y="257">Compare</text><text x="661" y="273">in block 2</text>
</g>
</svg>
<figcaption>Figure 1. A randomized block design for Worked example 3. The plots are first split by sunlight into two blocks; the dashed boxes show where chance is used, separately inside each block. Each fertiliser gets 4 plots per block, and treatments are compared within each block.</figcaption>
</figure>

## Choosing a design

No design is always best. Choose by thinking about the goal of the study, the units available and the variables involved.

- If the units are fairly similar, or you know of no variable that strongly affects the response, a **completely randomized design** is simple and fine.
- If one variable clearly affects the response (soil type, age, prior ability, sunlight), **block** on it so its variation does not hide the treatment effect.
- If the units come naturally in pairs (two arms, twins, the same person twice), or you can match them closely, a **matched pairs design** gives very precise comparisons. Giving each unit both treatments is only sensible if the first treatment does not change how the unit responds to the second.

## What can you conclude?

Two separate questions decide the scope of a conclusion.

| | Units **randomly selected** from a population | Units **not** randomly selected (for example, volunteers) |
|---|---|---|
| **Treatments randomly assigned** | Cause and effect, for the whole population | Cause and effect, for units similar to those in the study |
| **Treatments not randomly assigned** | Association only, for the whole population | Association only, for units similar to those in the study |

Random assignment reduces confounding, so it allows a **cause-and-effect** conclusion. It is often unethical or impractical to pick experimental units at random from a population, so many experiments use **volunteers**. That does not spoil the causal claim. It limits the conclusion to a population of units similar to the volunteers.

## Worked example 1: a completely randomized design with a placebo

**Question.** A fictional company makes a herbal capsule called Restwell and claims it increases sleep. Ninety adult volunteers agree to take part. Each will be in one of three groups for two weeks: Restwell capsules, identical-looking placebo capsules, or no capsule. The response is the change in average nightly sleep, in minutes, compared with the week before the study.

(a) Identify the experimental units, the explanatory variable, the treatments and the response variable.
(b) Describe how to randomly assign the treatments.
(c) The mean changes were Restwell +28 minutes, placebo +19 minutes and no capsule +6 minutes. Estimate the placebo effect and the effect of Restwell beyond the placebo.
(d) Can the study be double-blind?
(e) What can the company conclude, and about whom?

**(a)** Units: the 90 adult volunteers. Explanatory variable: type of capsule taken. Treatments: Restwell, placebo, no capsule. Response: change in average nightly sleep (minutes).

**(b)** Label the volunteers 1 to 90. Use a random number generator to choose integers from 1 to 90, ignoring repeats. The first 30 different labels get Restwell, the next 30 get the placebo, and the remaining 30 get no capsule. This also gives replication: 30 people per treatment.

**(c)** Placebo effect = 19 − 6 = **13 minutes**: people taking an inactive capsule gained, on average, 13 minutes more sleep than people taking nothing. Effect of Restwell beyond the placebo = 28 − 19 = **9 minutes**. Comparing Restwell with no capsule (28 − 6 = 22 minutes) would overstate the capsule's own effect, because 13 of those minutes are the placebo effect.

**(d)** Partly. The Restwell and placebo capsules look identical, so if the bottles are coded, neither those participants nor the researchers who meet them need to know which capsule is which: that comparison can be double-blind. The no-capsule group knows it is getting nothing, so that group cannot be blinded.

**(e)** The treatments were randomly assigned, so the difference in sleep is likely **caused** by the treatments (a later unit tests whether a difference this size could be due to chance alone). The volunteers were not a random sample, so the conclusion applies only to adults **similar to these volunteers**.

## Worked example 2: why a matched pairs design is more precise

**Question.** A school compares two fictional typing apps, Keyflow (K) and Tapwise (T). Sixteen students take a typing test first. The two slowest are paired, then the next two, and so on, giving 8 pairs of similar speed. In each pair a coin flip decides who uses Keyflow; the other uses Tapwise. After four weeks each student's speed (words per minute, wpm) is measured again.

| Pair | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Keyflow (wpm) | 25 | 30 | 37 | 40 | 47 | 52 | 60 | 66 |
| Tapwise (wpm) | 22 | 28 | 33 | 39 | 44 | 50 | 55 | 64 |
| Difference K − T | 3 | 2 | 4 | 1 | 3 | 2 | 5 | 2 |

(a) Name the design and the variable used for matching. (b) Use the data to explain why matching helps.

**(a)** Matched pairs design (a randomized block design with two treatments, where each pair is a block). The matching variable is starting typing speed.

**(b)**

1. The speeds within each app vary a lot: Keyflow speeds range from 25 to 66 wpm (s ≈ 14.30 wpm) and Tapwise speeds from 22 to 64 wpm (s ≈ 14.18 wpm). Most of this is because the students started at different speeds.
2. The differences within pairs vary much less: from 1 to 5 wpm (s ≈ 1.28 wpm).
3. The mean difference is 22 ÷ 8 = **2.75 wpm**, and Keyflow was faster in all 8 pairs.

Comparing within pairs removes the variation due to starting speed. A gap of 2.75 wpm is small next to the spread of 14 wpm between students, but large next to the spread of the differences. So the matched comparison is much more precise than comparing two unmatched groups.

**Check.** 44.625 − 41.875 = 2.75 wpm, the same as the mean difference. Giving each student both apps in random order would be poor here: practice with the first app would improve speed with the second.

## Worked example 3: choosing and describing a block design

**Question.** A community garden tests three fertilisers, A, B and C, on 24 plots of tomatoes. Twelve plots are in full sun and twelve are shaded by a wall. The response is the mass of tomatoes from each plot. Recommend a design and describe it.

1. **Spot the extraneous variable.** Sunlight strongly affects tomato yield and is not what we are studying.
2. **Choose the design.** Use a **randomized block design** with sunlight as the blocking variable: block 1 is the 12 sunny plots and block 2 is the 12 shaded plots (Figure 1).
3. **Assign within blocks.** In block 1, label the plots 1 to 12, use a random number generator to pick 4 different labels for A and 4 more for B; the last 4 get C. Repeat separately in block 2. Each fertiliser is then used on 4 plots per block and 8 plots in all.
4. **Directly control** other variables: same tomato variety, same watering schedule, same harvest date.
5. **Justify.** In a completely randomized design, chance could put most of fertiliser A on sunny plots, so A would look better only because of the sun. Blocking tests each fertiliser equally in sun and shade and removes sunlight's variation from the comparison.

## Common misconceptions

- **"Random assignment and random sampling do the same job."** Random assignment supports cause and effect. Random selection supports generalising to a population.
- **"A control group gets nothing."** It may get a placebo or the current standard treatment.
- **"Direct control means having a control group."** Direct control means keeping conditions the same for all units.
- **"Replication means doing the whole experiment again."** Here it means more than one unit per treatment.
- **"Double-blind means two groups are blinded."** It means participants and the researchers who interact with them are both unaware.
- **"The placebo effect is treatment mean minus placebo mean."** The placebo effect compares placebo with no treatment.
- **"Random assignment makes the groups identical."** It makes them similar on average; chance differences remain.
- **"Experiments with volunteers cannot show cause and effect."** With random assignment they can. Volunteers limit who the conclusion applies to.
- **"Blocking replaces randomization."** Treatments are still assigned at random, inside each block.

## Where this leads

This topic completes Unit 1. [Topic 1.12](/advanced-course-resources/statistics/1-12-potential-problems-sampling-study-guide/) looked at bias in samples; here random assignment protects an experiment. Chance processes return in Unit 2 (Probability, Random Variables, and Probability Distributions). "Could this difference be due to chance?" is answered by tests for two proportions in Unit 3 and for paired data and two means in Unit 4. Try the [practice questions](/advanced-course-resources/statistics/1-13-experimental-design-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/1-13-experimental-design-revision-notes/) and the [checklist](/advanced-course-resources/statistics/1-13-experimental-design-checklist/) to consolidate. You can also return to the [course roadmap](/advanced-course-resources/statistics/#roadmap).
