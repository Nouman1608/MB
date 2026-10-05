---
resourceId: "mb-ap-stats-1.12-study-guide"
title: "Potential Problems with Sampling: Study Guide (Statistics 1.12)"
description: "Learn what bias in sampling means and how to spot voluntary response, undercoverage, nonresponse and response bias, then explain in context whether an estimate is likely too high or too low."
course: "statistics"
unit: 1
topics: ["1.12"]
resourceType: "study-guide"
prerequisites:
  - "Population, sample, parameter and statistic (Topics 1.1 and 1.2)"
  - "Random and nonrandom samples, and the random sampling methods of Topic 1.11"
prerequisiteResources: ["mb-ap-stats-1.11-study-guide"]
learningObjectives:
  - "Explain bias as a fault in the sampling method that pushes a statistic consistently above or below the parameter"
  - "Identify voluntary response bias, undercoverage bias, nonresponse bias and response bias in a described study"
  - "Explain why convenience samples and voluntary response samples are likely to be biased"
  - "Recognise question wording bias and the effect of self-reported answers as kinds of response bias"
  - "State, with a reason in context, whether a biased method is likely to overestimate or underestimate the parameter"
  - "Tell the difference between bias and ordinary chance variation from sample to sample"
skills: ["2"]
studyMinutes: 35
difficulty: "foundation"
calculator: "none-needed"
calculatorNote: "Only simple percentages appear (for example 140 ÷ 500). Any calculator will do."
related: ["mb-ap-stats-1.12-revision-notes", "mb-ap-stats-1.12-practice", "mb-ap-stats-1.12-checklist"]
next: "mb-ap-stats-1.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Bias is a systematic error in how a sample is chosen or measured, so the statistic is consistently too high or consistently too low."
  - "Voluntary response and convenience samples do not use chance to choose individuals, so they are likely to be biased."
  - "Undercoverage leaves part of the population out; nonresponse loses chosen people who do not reply; response bias distorts the answers themselves."
  - "A larger sample does not fix bias. It only repeats the same fault with more people."
  - "To explain bias, name it, describe how it happens in this context, and say whether the estimate is likely too high or too low, and why."
faqs:
  - question: "What is the difference between voluntary response bias and nonresponse bias?"
    answer: "In voluntary response, people choose themselves to be in the sample. In nonresponse, the researcher chose the people (often at random), but some of them did not reply. Ask: who decided who is in the sample?"
  - question: "If a sample is chosen at random, can it still be biased?"
    answer: "Yes. Random selection protects against bias in who is chosen, but not against nonresponse, response bias, or undercoverage caused by an incomplete list."
  - question: "Does a biased method always give a wrong answer?"
    answer: "Not every time. Bias describes what happens on average over many samples taken the same way. One sample may land close to the parameter by chance, but the method still tends to miss in one direction."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## What goes wrong when you sample?

You take a sample because you want to learn about a population. You calculate a **statistic** from the sample, such as a sample proportion or a sample mean, and use it to estimate a **parameter**, the matching value for the whole population.

A good sample looks like a small copy of the population. A poor sample leaves some kinds of people out, lets other kinds crowd in, or records answers that are not true. Then the statistic tells you about the wrong group, however carefully you calculate it.

This topic names the most common problems. In every case the question to ask is the same: **is there something in the method that makes some answers more likely to end up in the data than others?**

## Bias: a fault in the method, not bad luck

**Bias** in a sampling method is a systematic error. Something in the way the sample is chosen, or in the way answers are collected, makes the statistic **consistently larger** or **consistently smaller** than the parameter it is meant to estimate.

Two words matter here:

- **Systematic** means the error comes from the method. If you repeated the same method many times, it would keep happening.
- **Consistently** means the error has a direction. A biased method tends to miss on the same side of the parameter.

Bias is different from **chance variation**. Even a well-designed random sample does not give exactly the parameter every time. Different random samples contain different individuals, so their statistics differ a little. Those differences fall on both sides of the parameter and roughly balance out. Bias does not balance out.

Figure 1 below shows this with a fictional town, Brenholt, where 40% of the 2,000 households own a bicycle. So the parameter is p = 0.40. Two methods were each used ten times, with 50 households in every sample.

- **Method A:** a simple random sample of 50 households from the full address list.
- **Method B:** ask the first 50 people who pass the café beside the town's cycle path.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="bias-title bias-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="bias-title">Sample proportions from two sampling methods compared with the parameter</title>
<desc id="bias-desc">A horizontal axis shows the proportion of households that own a bicycle, from 0.20 to 0.80. A dashed vertical line marks the parameter at 0.40. The lower row shows ten circles for Method A, a simple random sample: they lie between 0.30 and 0.50, on both sides of the dashed line, with mean 0.40. The upper row shows ten squares for Method B, a convenience sample at a cycle-path café: they lie between 0.50 and 0.70, all to the right of the dashed line, with mean 0.60.</desc>
<rect x="0" y="0" width="640" height="300" fill="#ffffff"/>
<line x1="50" y1="240" x2="590" y2="240" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="50" y1="240" x2="50" y2="247"/><line x1="140" y1="240" x2="140" y2="247"/><line x1="230" y1="240" x2="230" y2="247"/><line x1="320" y1="240" x2="320" y2="247"/><line x1="410" y1="240" x2="410" y2="247"/><line x1="500" y1="240" x2="500" y2="247"/><line x1="590" y1="240" x2="590" y2="247"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="50" y="262">0.20</text><text x="140" y="262">0.30</text><text x="230" y="262">0.40</text><text x="320" y="262">0.50</text><text x="410" y="262">0.60</text><text x="500" y="262">0.70</text><text x="590" y="262">0.80</text>
</g>
<text x="320" y="288" text-anchor="middle" font-size="14" fill="#1d2b44">Sample proportion of households that own a bicycle</text>
<line x1="230" y1="30" x2="230" y2="240" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="236" y="26" text-anchor="start" font-size="13" fill="#1d2b44">parameter p = 0.40</text>
<g fill="#1d2b44">
<circle cx="140" cy="225" r="5"/><circle cx="176" cy="225" r="5"/><circle cx="194" cy="225" r="5"/><circle cx="212" cy="225" r="5"/><circle cx="230" cy="225" r="5"/><circle cx="230" cy="212" r="5"/><circle cx="248" cy="225" r="5"/><circle cx="266" cy="225" r="5"/><circle cx="284" cy="225" r="5"/><circle cx="320" cy="225" r="5"/>
</g>
<text x="340" y="229" text-anchor="start" font-size="13" fill="#1d2b44">Method A (circles): SRS, mean 0.40</text>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="315" y="120" width="10" height="10"/><rect x="351" y="120" width="10" height="10"/><rect x="369" y="120" width="10" height="10"/><rect x="387" y="120" width="10" height="10"/><rect x="405" y="120" width="10" height="10"/><rect x="405" y="107" width="10" height="10"/><rect x="423" y="120" width="10" height="10"/><rect x="441" y="120" width="10" height="10"/><rect x="459" y="120" width="10" height="10"/><rect x="495" y="120" width="10" height="10"/>
</g>
<text x="300" y="85" text-anchor="start" font-size="13" fill="#1d2b44">Method B (squares): café sample, mean 0.60</text>
</svg>
<figcaption>Figure 1. Ten sample proportions from each method for the fictional town of Brenholt (each sample has 50 households). Method A's results scatter on both sides of the parameter: that is chance variation. Every Method B result is above the parameter: that is bias.</figcaption>
</figure>

Method A's ten results run from 0.30 to 0.50. Four are above 0.40, four are below and two are exactly 0.40. Their mean is 0.40. Method B's results run from 0.50 to 0.70. All ten are above 0.40, and their mean is 0.60. People near a cycle-path café are more likely than the average household to own a bicycle, so Method B **overestimates** every time. Taking 500 people at the café instead of 50 would not help: it would just give a more precise estimate of the wrong group.

## Where bias can enter a study

Think of a survey as four stages, as in Figure 2. Each stage has its own kind of bias.

<figure>
<svg viewBox="0 0 640 440" role="img" aria-labelledby="stages-title stages-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="stages-title">Four stages of a survey and the bias that can enter at each</title>
<desc id="stages-desc">A vertical flow of four boxes joined by downward arrows, ending in a fifth box. Box 1, who can be chosen, links to undercoverage bias: part of the population is left out or less likely to be chosen. Box 2, how they are chosen, links to nonrandom selection: convenience samples and voluntary response bias. Box 3, who answers, links to nonresponse bias: chosen people who do not reply may differ from those who do. Box 4, what they say, links to response bias: leading or confusing questions and self-reported answers. The final box says the statistic may be consistently too high or too low.</desc>
<rect x="0" y="0" width="640" height="440" fill="#ffffff"/>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="20" y="20" width="220" height="56" rx="6"/>
<rect x="20" y="105" width="220" height="56" rx="6"/>
<rect x="20" y="190" width="220" height="56" rx="6"/>
<rect x="20" y="275" width="220" height="56" rx="6"/>
<rect x="20" y="360" width="600" height="56" rx="6" stroke-dasharray="6 4"/>
</g>
<g stroke="#1d2b44" stroke-width="2" fill="#1d2b44">
<line x1="130" y1="76" x2="130" y2="97"/><path d="M124 95 L130 105 L136 95 Z"/>
<line x1="130" y1="161" x2="130" y2="182"/><path d="M124 180 L130 190 L136 180 Z"/>
<line x1="130" y1="246" x2="130" y2="267"/><path d="M124 265 L130 275 L136 265 Z"/>
<line x1="130" y1="331" x2="130" y2="352"/><path d="M124 350 L130 360 L136 350 Z"/>
</g>
<g stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4">
<line x1="240" y1="48" x2="262" y2="48"/><line x1="240" y1="133" x2="262" y2="133"/><line x1="240" y1="218" x2="262" y2="218"/><line x1="240" y1="303" x2="262" y2="303"/>
</g>
<g font-size="14" fill="#1d2b44" font-weight="bold">
<text x="32" y="53">1. Who can be chosen?</text>
<text x="32" y="138">2. How are they chosen?</text>
<text x="32" y="223">3. Who answers?</text>
<text x="32" y="308">4. What do they say?</text>
</g>
<g font-size="13" fill="#1d2b44">
<text x="270" y="44" font-weight="bold">Undercoverage bias</text>
<text x="270" y="62">part of the population is missing from the list</text>
<text x="270" y="78">or is less likely to be picked</text>
<text x="270" y="129" font-weight="bold">Nonrandom selection</text>
<text x="270" y="147">convenience samples; voluntary response bias</text>
<text x="270" y="163">(people pick themselves)</text>
<text x="270" y="214" font-weight="bold">Nonresponse bias</text>
<text x="270" y="232">chosen people who do not reply may differ</text>
<text x="270" y="248">from those who do</text>
<text x="270" y="299" font-weight="bold">Response bias</text>
<text x="270" y="317">leading or confusing wording; self-reports</text>
<text x="270" y="333">that drift one way from the truth</text>
<text x="32" y="393" font-size="14">Result: the statistic may be consistently too high or too low.</text>
</g>
</svg>
<figcaption>Figure 2. A survey as four stages. Bias can enter at any stage, and a study can suffer from more than one kind at once.</figcaption>
</figure>

## Nonrandom samples: convenience and voluntary response

A sample is **nonrandom** when the researcher picks individuals by judgement or ease, or when individuals put themselves forward. Nonrandom methods introduce potential bias because chance plays no part in who is chosen. Something else decides instead, and that something is often linked to the answer.

- A **convenience sample** takes the individuals who are easiest to reach: the people in your class, the shoppers at one entrance, the first 50 emails in an inbox. Easy-to-reach people often differ from everyone else.
- A **voluntary response sample** consists entirely of volunteers who chose to take part, for example by answering an online poll, phoning a radio show or filling in a form left on a counter. This gives **voluntary response bias**. People with strong feelings, often strong negative feelings, are much more likely to bother. The sample over-represents them.

A huge voluntary response sample is still biased. Ten thousand self-selected replies tell you about the people who chose to reply, not about the population.

## Undercoverage bias

**Undercoverage bias** may occur when the sampling method leaves part of the population out completely, or makes part of the population less likely to be chosen.

It often comes from an incomplete **list** of the population (sometimes called the sampling frame). Examples:

- Choosing households at random from a list of landline numbers misses households with only mobile phones.
- Surveying students during the lunch break in the canteen misses students who go home or eat elsewhere.
- An online-only questionnaire misses people without reliable internet access.

Random selection from an incomplete list does not cure undercoverage. The method is random among the people on the list, but the people not on the list still have no chance.

## Nonresponse bias

**Nonresponse bias** may occur when some of the individuals **chosen** for the sample cannot be contacted or refuse to answer. If the people who do respond differ from the non-respondents in a way that matters for the question, the statistic is biased.

A low response rate is a warning sign, but the real question is **who** fails to respond and **why**. A survey about how busy people are, sent to people who are too busy to reply, will make the population look less busy than it is.

Keep this apart from voluntary response. In nonresponse, the **researcher chose** the people. In voluntary response, the **people chose** themselves.

## Response bias

**Response bias** may occur when the answers or measurements themselves tend to differ from the true value **in one direction**. Everyone chosen might reply, and the sample might be perfectly random, and the data can still be biased.

Common causes:

- **Question wording bias.** A leading question pushes people towards one answer: "Don't you agree that our excellent library deserves more funding?" A confusing question (for example, with a double negative) makes people answer something different from what they mean.
- **Self-reported answers.** People tend to overstate things that sound good (exercise, reading, voting) and understate things that sound bad (screen time, junk food, lateness). They may also simply misremember.
- **The way the question is asked.** An interviewer's presence, or a lack of privacy, can push answers towards what seems socially acceptable.

Response bias also covers **measurements**. A scale that always reads 0.5 kg heavy gives masses that are consistently too high.

## Writing about bias: name, mechanism, direction

When a question asks you to identify or explain a potential source of bias, a full answer has three parts.

1. **Name** the bias (for example, nonresponse bias).
2. **Describe the mechanism in context:** which people are missed, over-represented or giving untrue answers, and why.
3. **Give the direction:** say whether the statistic is likely to be **too high** or **too low** compared with the parameter, and link this to the mechanism.

The third step is where many answers lose marks. "This could cause bias" is not enough. Explain which way the error goes and why.

## Worked example 1: a survey taken in the library

**Question.** The principal of the fictional Northbrook College wants to estimate the mean number of hours per week that its students spend studying in the college library. On one Tuesday afternoon she asks 60 students who are sitting in the library how many hours a week they usually study there. Their mean answer is 7.4 hours.

(a) Identify the sampling method and explain why it is likely to be biased. (b) Is 7.4 hours likely to be too high or too low? (c) Identify one other possible source of bias.

**(a)** This is a **convenience sample**: she asked the students who happened to be in the library at that time. Students who study in the library often are much more likely to be there on a given afternoon than students who rarely or never go. Students who never use the library have no chance of being chosen at all, which is **undercoverage**.

**(b)** **Too high.** The sample over-represents frequent library users, so the sample mean is likely to be larger than the mean for all Northbrook students.

**(c)** **Response bias from self-reported answers.** Students are asked by the principal, so they may overstate their study time to look hard-working. This would also push the estimate **up**.

**Check.** Suppose the library's entry-card records (fictional) show the actual mean for all students is 3.1 hours. The sample mean is 7.4 − 3.1 = 4.3 hours higher, which fits both directions given above. Remember, though, that you do not need the parameter to identify bias. The reasoning about the method is enough.

## Worked example 2: a postal questionnaire with two problems

**Question.** The education office of the fictional Harlow Vale district takes a simple random sample of 500 households from its complete list of families with school-age children. It posts each a questionnaire that asks how many school events the family attended last year, and then asks: "Don't you agree that the district's excellent school events deserve more funding?" Only 140 questionnaires come back. Of these, 80% (112 households) answer "yes" to the funding question.

(a) Calculate the response rate. (b) Identify two potential sources of bias and give the likely direction of each. (c) A councillor suggests sending the same questionnaire to 2,000 households instead. Would this remove the bias?

**(a)** Response rate = 140 ÷ 500 = 0.28, so **28%**. That means 360 of the 500 chosen households (72%) did not reply.

**(b)**

1. **Nonresponse bias.** Families who are closely involved with the schools are more likely to care about the questionnaire and return it. Families who attend few or no events are more likely to ignore it. So the mean number of events attended is likely to be **too high** (an overestimate), and the 80% support for more funding is also likely to overestimate support among all families.
2. **Response bias from question wording.** The funding question is leading: "Don't you agree" and "excellent" push people towards "yes". So the 80% is likely to be **too high** compared with the true proportion who support more funding.

Note what is **not** a problem here: the households were chosen at random from a complete list, so there is no undercoverage and no voluntary response at the selection stage.

**(c)** **No.** With the same response pattern, about 28% of 2,000, or 560 households, would reply. They would again be mostly the more involved families, answering the same leading question. A larger sample gives a more precise estimate, but the estimate is still pushed upwards. To reduce the bias, the district should follow up non-respondents (for example by phone or a home visit) and reword the question neutrally: "Should funding for school events increase, stay the same, or decrease?"

## Common misconceptions

- **"A big sample cannot be biased."** Size and bias are separate. A larger sample reduces chance variation, but a biased method stays biased however many people you include.
- **"Bias means the researcher is unfair or dishonest."** In statistics, bias is a property of the method. It can happen even when everyone acts in good faith.
- **"Random sampling removes every kind of bias."** It prevents bias in who is chosen. It does not prevent nonresponse, response bias or undercoverage from an incomplete list.
- **"Nonresponse and voluntary response are the same."** Ask who decided who is in the sample. If the researcher chose them and some did not reply, it is nonresponse. If people chose to take part, it is voluntary response.
- **"Any difference between the statistic and the parameter is bias."** Random samples differ from the parameter by chance, sometimes above and sometimes below. Bias is a consistent miss in one direction.
- **"It could be biased" is a full answer.** Say which kind of bias, how it arises in this context, and whether the estimate is likely too high or too low.
- **"A low response rate always means bias in a known direction."** You must argue how respondents and non-respondents differ on the variable being studied. If they do not differ in a way that matters, the estimate may still be reasonable.

## Where this leads

You can now spot problems in how a sample is collected. Next, in [Topic 1.13, Experimental Design](/advanced-course-resources/statistics/1-13-experimental-design-study-guide/), you move from observing people to imposing treatments, and learn how random assignment, control and replication protect experiments. If you need to review the random sampling methods themselves, see [Topic 1.11, Random Sampling](/advanced-course-resources/statistics/1-11-random-sampling-study-guide/). Try the [practice questions](/advanced-course-resources/statistics/1-12-potential-problems-sampling-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/1-12-potential-problems-sampling-revision-notes/) and the [checklist](/advanced-course-resources/statistics/1-12-potential-problems-sampling-checklist/) to consolidate.
