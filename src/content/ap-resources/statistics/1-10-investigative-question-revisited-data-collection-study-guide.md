---
resourceId: "mb-ap-stats-1.10-study-guide"
title: "The Investigative Question Revisited and Data Collection: Study Guide (Statistics 1.10)"
description: "Learn the three parts of an investigative question, how to tell a census, an observational study and an experiment apart, what confounding means, and who a study's conclusions apply to."
course: "statistics"
unit: 1
topics: ["1.10"]
resourceType: "study-guide"
prerequisites:
  - "Population, sample and investigative question (Topic 1.1)"
  - "Categorical and quantitative variables (Topic 1.2)"
prerequisiteResources: ["mb-ap-stats-1.1-study-guide", "mb-ap-stats-1.9-study-guide"]
learningObjectives:
  - "Break an investigative question into its three parts: the variables to collect, the analysis it calls for, and the conclusions it allows"
  - "Recognise whether an investigative question asks for an estimate of a parameter or a test of a claim about a parameter, and in which direction"
  - "Decide whether a study is a census, an observational study (prospective, retrospective or survey) or an experiment"
  - "Name the experimental units, explanatory variables (factors), levels, treatments and response variable in an experiment"
  - "Explain how a confounding variable in an observational study gives another explanation for an observed relationship"
  - "Justify which population a study's results can be generalised to, based on how the units were chosen"
skills: ["1", "2"]
studyMinutes: 40
difficulty: "foundation"
calculator: "four-function"
calculatorNote: "Only counts, simple products and percentages appear. Round percentages to 1 decimal place."
related: ["mb-ap-stats-1.10-revision-notes", "mb-ap-stats-1.10-practice", "mb-ap-stats-1.10-checklist"]
next: "mb-ap-stats-1.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "A full investigative question has three parts: what data to collect, what analysis to do, and what kind of conclusion can be drawn about which population."
  - "A census records every individual in the population; a sample records only some of them."
  - "In an experiment the researcher imposes treatments; in an observational study the researcher only records values."
  - "A confounding variable is linked to both the explanatory and the response variable, so it offers another explanation for an observed relationship."
  - "Random selection lets you generalise to the whole population sampled. Random assignment of treatments in an experiment is what allows a cause-and-effect conclusion."
faqs:
  - question: "Is a census an observational study?"
    answer: "Usually, yes. A census is about who is measured (everyone in the population). Observational study versus experiment is about how the data are produced (recorded or imposed). If no treatment is imposed, a census is an observational study of the whole population."
  - question: "Do I need to carry out a hypothesis test or confidence interval in this topic?"
    answer: "No. Here you only need to recognise what kind of analysis an investigative question asks for. You will build confidence intervals and carry out tests later in the course, starting in Unit 3."
  - question: "Are 'factor' and 'explanatory variable' the same thing?"
    answer: "Yes. In an experiment, a factor is an explanatory variable whose levels the researcher imposes. Each level, or each combination of levels when there is more than one factor, is a treatment."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Why revisit the investigative question?

In Topic 1.1 you met the **investigative question**: the question a study is designed to answer. It needs a clear purpose, data that can be collected, and must be fixed before you see the results.

This topic goes one step further. A full investigative question is a plan for the whole study. It tells you:

1. **what data to collect** (which variables, from whom),
2. **what analysis to do** (estimate a value, or test a claim), and
3. **what you can conclude** (about which population, and whether cause and effect can be claimed).

To write the third part, you need to know how the data were produced. So this topic also covers the main ways to collect data: a census, an observational study and an experiment.

**The running example.** Hollins Park School (a fictional school) has 1,240 students. A teacher wonders whether listening to music while revising changes quiz scores. We will use this context throughout the guide.

## The three components of an investigative question

### Component 1: guide the data collection

The first part names the **variable(s) of interest**, so it is clear what to record. "Does music help revision?" does not say what to measure. "Quiz score (out of 20) and whether the student listened to music while revising" does. One variable here is categorical (music or no music) and one is quantitative (quiz score).

### Component 2: guide the analysis

The second part shows which kind of analysis answers the question. Later in the course you will meet two main kinds.

- **Estimation (a confidence interval).** The question names a **parameter**, a number that describes the whole population, and asks for a range of plausible values for it. Example: "How large is the difference in mean quiz score between students who revise with music and students who revise in silence?"
- **Testing a claim (a hypothesis test).** The question names the parameter **and the direction** of the claim being tested. The direction can be:
  - **different from** ("Is the mean score with music different from the mean score in silence?"),
  - **greater than** ("...higher with music?"),
  - **less than** ("...lower with music?"), or
  - **an association** between two categorical variables, also described as the variables **not being independent** ("Is there an association between revising with music and passing the quiz?").

You do not carry out these analyses yet. You only need to say which kind a question asks for, the parameter and the direction.

### Component 3: guide the conclusion

The third part states the **population** the conclusion will be about. If the study is an experiment with random assignment of treatments, it can also signal a **cause-and-effect** conclusion. Compare:

- "...among Hollins Park students..." (a conclusion about this school's students), and
- "...does revising with music **cause** lower quiz scores for students like those in the study?" (a causal conclusion, possible only with an experiment).

| Component | What it guides | Running example |
|---|---|---|
| 1 | Data collection: the variables | Music while revising (yes/no) and quiz score out of 20 |
| 2 | Analysis: parameter, and estimate or test with a direction | Test whether the mean score with music is **less than** the mean score in silence |
| 3 | Conclusion: population and type of conclusion | Students like the volunteers; cause and effect, if treatments are randomly assigned |

## Who is measured? Census or sample

A **census** records information from **every** item or individual in the population. A **sample** records information from only some of them.

If the teacher recorded the quiz score of all 1,240 Hollins Park students, that would be a census of the school. If she recorded the scores of 150 students, that is a sample. A census is rare because measuring everyone is usually slow and costly. With a census, a summary such as the mean is the population value itself.

## How are the data produced? Observational study or experiment

### Observational studies

In an **observational study**, the researcher does **not** impose any treatment. They record the values of the variables as they already are. Three kinds are named in this course:

- **Prospective study.** Units are chosen now. Their data are recorded now and again as time goes forward. *Example: choose 200 Year 9 students now and record their revision habits and grades each year until they leave school.*
- **Retrospective study.** Units are chosen now, and you look back to collect their **past** data. *Example: choose 200 Year 11 students now and look up their revision-club attendance in earlier years.*
- **Survey.** Data are collected from **people** using a standard set of questions. *Example: a random sample of 150 students answers the same questionnaire: "Do you usually listen to music while revising?" and "What was your score on last week's quiz?"*

### Experiments

In an **experiment**, the researcher **assigns** conditions, called treatments, to experimental units, then measures the result. The words you need:

| Term | Meaning | Running example |
|---|---|---|
| Experimental unit | The unit a treatment is assigned to. People are called **subjects** or **participants**. | Each of 60 volunteer students |
| Explanatory variable (factor) | A variable whose categories (**levels**) the researcher imposes | Revision condition |
| Levels | The categories of a factor | Music, silence |
| Treatment | A level of the factor, or a combination of levels when there is more than one factor | Revise with music; revise in silence |
| Response variable | The outcome measured on each unit **after** the treatment | Quiz score out of 20 |

In the experiment, the 60 volunteers are split at random into two groups of 30. One group revises a topic for 20 minutes with music, the other in silence, and everyone then takes the same 20-question quiz.

**More than one factor.** Suppose the teacher also varies revision time (20 or 40 minutes) and uses three music conditions (silence, music with lyrics, music without lyrics). Now there are two factors. Each **combination** of levels is a treatment, so there are 3 × 2 = 6 treatments, such as "music with lyrics for 40 minutes". The details of designing a good experiment come in Topic 1.13.

<figure>
<svg viewBox="0 0 660 300" role="img" aria-labelledby="study-type-title study-type-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="study-type-title">Deciding the type of study</title>
<desc id="study-type-desc">A flow chart. The top box asks: did the researcher impose treatments on the units? An arrow labelled yes leads left to a box labelled experiment: treatments assigned, response measured afterwards. An arrow labelled no leads right to a box labelled observational study: values recorded, nothing imposed. Below the observational study box are three smaller dashed boxes: prospective, which records data going forward; retrospective, which uses past data; and survey, which asks people standard questions. A note at the bottom says that census or sample is a separate question: was every individual in the population measured?</desc>
<rect x="0" y="0" width="660" height="300" fill="#ffffff"/>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="170" y="15" width="320" height="56" rx="8"/>
<rect x="30" y="115" width="220" height="62" rx="8"/>
<rect x="400" y="115" width="230" height="62" rx="8"/>
<rect x="270" y="205" width="120" height="52" rx="6" stroke-dasharray="6 4"/>
<rect x="400" y="205" width="120" height="52" rx="6" stroke-dasharray="6 4"/>
<rect x="530" y="205" width="120" height="52" rx="6" stroke-dasharray="6 4"/>
</g>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<path d="M230 71 L150 113"/>
<path d="M430 71 L510 113"/>
<path d="M440 177 L340 203"/>
<path d="M515 177 L460 203"/>
<path d="M590 177 L590 203"/>
</g>
<g fill="#1d2b44">
<path d="M150 113 L163 112 L158 103 Z"/>
<path d="M510 113 L502 103 L497 112 Z"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="330" y="38">Did the researcher impose</text>
<text x="330" y="58">treatments on the units?</text>
<text x="172" y="90" font-weight="bold">Yes</text>
<text x="490" y="90" font-weight="bold">No</text>
<text x="140" y="138" font-weight="bold">Experiment</text>
<text x="140" y="158" font-size="12">treatments assigned, response</text>
<text x="140" y="172" font-size="12">measured afterwards</text>
<text x="515" y="138" font-weight="bold">Observational study</text>
<text x="515" y="160" font-size="12">values recorded, nothing imposed</text>
<text x="330" y="226" font-size="12" font-weight="bold">Prospective</text>
<text x="330" y="244" font-size="11">records forward</text>
<text x="460" y="226" font-size="12" font-weight="bold">Retrospective</text>
<text x="460" y="244" font-size="11">uses past data</text>
<text x="590" y="226" font-size="12" font-weight="bold">Survey</text>
<text x="590" y="244" font-size="11">standard questions</text>
<text x="330" y="286" font-size="12">Census or sample is a separate question: was every individual in the population measured?</text>
</g>
</svg>
<figcaption>Figure 1. Experiment or observational study depends on whether treatments were imposed. The three dashed boxes are kinds of observational study. Whether the study is a census is decided separately.</figcaption>
</figure>

## Confounding variables

Suppose the survey of 150 Hollins Park students finds that students who revise with music have a lower mean quiz score. Can we say music **causes** lower scores? No. In an observational study, some other variable may explain the link.

A **confounding variable** is linked to **both** the explanatory variable **and** the response variable. It gives an **alternative explanation** for the relationship you observed, so a causal conclusion is much harder to justify.

For the survey, one possible confounding variable is **the total time a student spends revising**.

- **Link to the explanatory variable:** students who listen to music may tend to spend less (or more) total time revising than students who do not.
- **Link to the response:** time spent revising is likely to be associated with quiz score.

If both links hold, the lower scores could be due to less revision time, not to the music. A variable linked to only one of the two is **not** a confounding variable.

## Who can the conclusions be about?

How the units were **chosen** decides how widely you can generalise.

- A sample is **random** when every unit in it was selected from the population by a random mechanism, such as a random number generator.
- If the units were randomly selected, you may **generalise** the results to the whole population they were selected from.
- A sample is **not** random if units were deliberately chosen by the researcher, or if they **volunteered**.
- If the units were not randomly selected, you may generalise only to individuals **similar to those in the study**.

How the treatments were **assigned** decides whether you can claim cause and effect. A cause-and-effect conclusion needs an experiment in which treatments were randomly assigned to the units.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="scope-title scope-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="scope-title">What conclusions a study supports</title>
<desc id="scope-desc">A two-by-two grid. Columns: treatments randomly assigned, or not randomly assigned or no treatments. Rows: units randomly selected from a population, or units not randomly selected. Top left cell: cause and effect yes, generalise to the population sampled. Top right cell: cause and effect no, generalise to the population sampled. Bottom left cell: cause and effect yes, generalise only to individuals like those in the study. Bottom right cell: cause and effect no, generalise only to individuals like those in the study.</desc>
<rect x="0" y="0" width="640" height="300" fill="#ffffff"/>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="180" y="70" width="220" height="105"/>
<rect x="410" y="70" width="220" height="105"/>
<rect x="180" y="185" width="220" height="105"/>
<rect x="410" y="185" width="220" height="105"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="bold">
<text x="290" y="35">Treatments randomly</text>
<text x="290" y="53">assigned</text>
<text x="520" y="35">Not randomly assigned</text>
<text x="520" y="53">(or no treatments)</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="start" font-weight="bold">
<text x="10" y="112">Units randomly</text>
<text x="10" y="130">selected from</text>
<text x="10" y="148">a population</text>
<text x="10" y="227">Units not</text>
<text x="10" y="245">randomly selected</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="290" y="110">Cause and effect: yes</text>
<text x="290" y="135">Generalise to: the</text>
<text x="290" y="153">population sampled</text>
<text x="520" y="110">Cause and effect: no</text>
<text x="520" y="135">Generalise to: the</text>
<text x="520" y="153">population sampled</text>
<text x="290" y="218">Cause and effect: yes</text>
<text x="290" y="243">Generalise only to</text>
<text x="290" y="261">individuals like those</text>
<text x="290" y="279">in the study</text>
<text x="520" y="218">Cause and effect: no</text>
<text x="520" y="243">Generalise only to</text>
<text x="520" y="261">individuals like those</text>
<text x="520" y="279">in the study</text>
</g>
</svg>
<figcaption>Figure 2. Random selection (rows) controls how far you can generalise. Random assignment of treatments (columns) controls whether a cause-and-effect conclusion is possible. Most observational studies sit in the right-hand column.</figcaption>
</figure>

For the running example: the survey used a random sample of 150 students, so its results can be generalised to all 1,240 Hollins Park students, but it cannot show cause and effect. The experiment used 60 volunteers with random assignment, so it can support a cause-and-effect conclusion, but only for students like those volunteers.

## Worked example 1: an experiment with two factors

**Question.** A fictional bakery, Ferncroft Breads, wants to know how yeast amount and proving temperature affect how high its loaves rise. It makes 36 batches of dough from its usual recipe. Each batch gets 7 g or 10 g of yeast and is proved at 24 °C, 28 °C or 32 °C. The combinations are given to batches at random, with the same number of batches for each. After baking, the height of each loaf is measured in centimetres.

(a) Is this an experiment or an observational study? Explain. (b) Identify the experimental units, the factors and their levels, the treatments and the response variable. (c) How many batches receive each treatment? (d) What kind of conclusion can the bakery draw, and about which loaves?

**(a)** It is an **experiment**: the bakery imposes the yeast amount and proving temperature on each batch.

**(b)**

1. **Experimental units:** the 36 batches of dough. They are not people, so they are not called subjects.
2. **Factors:** yeast amount (2 levels: 7 g, 10 g) and proving temperature (3 levels: 24 °C, 28 °C, 32 °C).
3. **Treatments:** every combination of levels, 2 × 3 = 6 treatments: 7 g at 24 °C, 7 g at 28 °C, 7 g at 32 °C, 10 g at 24 °C, 10 g at 28 °C, 10 g at 32 °C.
4. **Response variable:** loaf height in centimetres, measured after baking.

**(c)** 36 ÷ 6 = **6 batches** per treatment.

**(d)** Treatments were assigned at random, so differences in height can be attributed to the treatments: a **cause-and-effect** conclusion is possible. But the batches were not randomly selected from a larger population. They were made by this bakery from its usual recipe. So the conclusion applies only to **loaves like these**: this recipe, made in this bakery.

**Check.** Each treatment names one level of **each** factor. Five (2 + 3) would add the levels instead of combining them.

## Worked example 2: an observational study, confounding and the question

**Question.** A fictional school district has records for 4,800 Year 11 students. Researchers use a random number generator to select 300 records. For each student they look back at whether the student had out-of-school music lessons in Years 7 to 9, and record the student's Year 11 maths score (out of 100). Of the 300 students, 96 had music lessons. Their mean maths score was 68.4, compared with 63.1 for the other 204 students.

(a) Identify the type of study. (b) Name the explanatory and response variables. (c) Suggest a confounding variable and explain how it could account for the difference. (d) To which students can the results be generalised? Can the researchers conclude that music lessons raise maths scores? (e) Write an investigative question for this study with all three components, aimed at estimation.

**(a)** No treatment was imposed: the researchers recorded what had already happened. It is an **observational study**. The students were chosen now and data **from the past** (earlier music lessons) were gathered, so it is a **retrospective** study.

**(b)** Explanatory variable: whether the student had music lessons (categorical: yes or no). Response variable: Year 11 maths score (quantitative, out of 100).

**(c)** A possible confounding variable is **how much support for out-of-school learning the student has at home**. Families who arrange and pay for music lessons may also be more likely to arrange extra maths help or quiet study time. So this variable is associated with having music lessons, and it is plausibly associated with maths score. The 68.4 − 63.1 = 5.3-mark difference could be explained by home support, not by the lessons.

**(d)** The 300 records were **randomly selected** from all 4,800, so the results can be generalised to **all Year 11 students in this district**. Because this is an observational study, the researchers **cannot** conclude cause and effect. They can say only that students who had music lessons scored higher on average in this sample.

**(e)** "For Year 11 students in this district, **how large is the difference** in mean maths score between those who did and did not have out-of-school music lessons in Years 7 to 9? Give a range of plausible values for this difference."

- Component 1 (data): music lessons (yes/no) and Year 11 maths score.
- Component 2 (analysis): the parameter is the difference between two population means, and the goal is to **estimate** it with a range of values.
- Component 3 (conclusion): about all Year 11 students in the district, and about association only, not cause.

**Check.** 96 + 204 = 300 records. 96 out of 300 is 32% of the sample.

## Common misconceptions

- **"A study with two groups is an experiment."** Comparing groups is not enough. It is an experiment only if the researcher **imposed** the treatments. Comparing students who chose music with students who did not is observational.
- **"A survey is not an observational study."** A survey is one kind of observational study: it records people's answers to standard questions, with no treatment imposed.
- **"Number of treatments = number of factors" or "= sum of the levels".** With more than one factor, each **combination** of levels is a treatment. Two factors with 3 and 2 levels give 6 treatments, not 2 or 5.
- **"The experimental units are the treatments."** The units are what receive the treatments (batches, plants, students). Treatments are the conditions.
- **"Any other variable is a confounding variable."** It must be linked to **both** the explanatory and the response variable.
- **"A large sample can be generalised to the population."** Size does not fix the problem. A large group of volunteers is still not random, so you can generalise only to people like them.
- **"Random selection lets you claim cause and effect."** Random selection is about generalising. Cause and effect needs random **assignment** of treatments in an experiment.
- **"An investigative question just needs a topic."** A full question names the variables, shows the analysis (estimate, or test with a direction) and states the population the conclusion is about.

## Where this leads

Topic 1.11 shows how to select a random sample (simple random, stratified, cluster and systematic sampling). Topic 1.12 looks at problems that can bias a sample, even a random one, and Topic 1.13 covers how to design a good experiment. Continue with [Topic 1.11, Random Sampling](/advanced-course-resources/statistics/1-11-random-sampling-study-guide/).

For this topic, try the [practice questions](/advanced-course-resources/statistics/1-10-investigative-question-revisited-data-collection-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/1-10-investigative-question-revisited-data-collection-revision-notes/) and the [checklist](/advanced-course-resources/statistics/1-10-investigative-question-revisited-data-collection-checklist/) to consolidate.
