---
resourceId: "mb-ap-csp-5.4-study-guide"
title: "Crowdsourcing: Study Guide (Computer Science Principles 5.4)"
description: "What crowdsourcing and citizen science are, how they help people solve problems at scale, their benefits and challenges, and how to check a crowdsourced data set for coverage and reliability, with two worked examples."
course: "computer-science-principles"
unit: 5
topics: ["5.4"]
resourceType: "study-guide"
prerequisites: 
  - "Topic 2.3 (cleaning data and bias in data sources)"
  - "Topic 5.2 (who has access to computing)"
prerequisiteResources: ["mb-ap-csp-5.3-study-guide"]
learningObjectives: 
  - "Define crowdsourcing and citizen science and give examples of each"
  - "Explain how wide access to information and public data helps people take part in problem-solving at scale"
  - "Describe benefits of crowdsourcing, including new models for collaboration and funding, and its challenges, including data quality and who takes part"
  - "Evaluate a crowdsourced data set for coverage and reliability, using simple calculations"
skills: ["1", "5", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-5.4-revision-notes", "mb-ap-csp-5.4-practice", "mb-ap-csp-5.4-checklist"]
next: "mb-ap-csp-5.4-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Crowdsourcing is the practice of obtaining input or information from a large number of people via the Internet."
  - "Citizen science is research carried out in whole or in part by distributed individuals, many not scientists, who contribute data using their own devices."
  - "Wide access to information and public data makes it easier to identify problems, develop solutions and share results."
  - "Crowdsourcing can enhance human capabilities and create new models of collaboration, such as connecting businesses or social causes with funding."
  - "Challenges include data quality, uneven participation (linked to the digital divide) and the need to check and clean contributions."
faqs:
  - question: "What is crowdsourcing?"
    answer: "The practice of obtaining input or information from a large number of people via the Internet. The input might be data, ideas, labels, funding or work."
  - question: "What is citizen science?"
    answer: "Scientific research conducted in whole or in part by distributed individuals, many of whom may not be scientists, who contribute relevant data using their own computing devices."
  - question: "What is a drawback of crowdsourced data?"
    answer: "Quality and coverage can vary. Contributors may make mistakes, and those who take part may not represent everyone or every place, so the data may be biased. Data often need checking and cleaning."
  - question: "Can crowdsourcing be used to raise money?"
    answer: "Yes. Crowdsourcing offers new models for collaboration, such as connecting businesses or social causes with funding from many small contributions."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Many people, one task

Some problems are too big, too spread out or too varied for one organisation. A single scientist cannot watch every bird in a country at the same time; a mapping company cannot walk every street. But **millions of people carry computing devices** and can contribute small pieces of information. **Crowdsourcing** is **the practice of obtaining input or information from a large number of people via the Internet**.

The input can take many forms: data (a photo, a count), judgement (labelling an image, rating a restaurant), ideas (suggestions for a name), work (translating a document) or money (funding a project). The same pattern appears each time: many contributors, an online platform that collects the contributions, and a process that checks and combines them.

<figure>
<svg viewBox="0 0 640 230" role="img" aria-labelledby="crowd-title crowd-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="crowd-title">How crowdsourcing works</title>
<desc id="crowd-desc">On the left, five small circles stand for many contributors. Arrows from them lead to a central box labelled online platform that collects contributions. An arrow leads to a box labelled check and clean: remove duplicates and errors, then a final box labelled combined result such as a map or a data set. A note says participation is uneven, so coverage should be checked.</desc>
<rect x="0" y="0" width="640" height="230" fill="#ffffff"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<circle cx="40" cy="50" r="14"/><circle cx="40" cy="95" r="14"/><circle cx="40" cy="140" r="14"/><circle cx="85" cy="72" r="14"/><circle cx="85" cy="118" r="14"/>
</g>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="150" y="60" width="120" height="70" rx="8"/>
<rect x="320" y="60" width="130" height="70" rx="8" stroke-dasharray="6 4"/>
<rect x="500" y="60" width="130" height="70" rx="8"/>
<line x1="102" y1="95" x2="146" y2="95"/><path d="M138 89 L148 95 L138 101"/>
<line x1="270" y1="95" x2="316" y2="95"/><path d="M308 89 L318 95 L308 101"/>
<line x1="450" y1="95" x2="496" y2="95"/><path d="M488 89 L498 95 L488 101"/>
</g>
<g fill="#1d2b44" font-size="14" text-anchor="middle">
<text x="210" y="90" font-weight="bold">Online</text><text x="210" y="110">platform</text>
<text x="385" y="85" font-weight="bold">Check and clean</text><text x="385" y="105">duplicates, errors</text>
<text x="565" y="85" font-weight="bold">Combined</text><text x="565" y="105">result</text>
<text x="62" y="182" font-size="13">many contributors</text>
<text x="320" y="205">Participation can be uneven, so check coverage as well as quality.</text>
</g>
</svg>
<figcaption>Figure 1. Crowdsourcing collects small contributions from many people, checks and cleans them, and combines them into a result. Uneven participation is a risk at every stage.</figcaption>
</figure>

## Citizen science

**Citizen science** is scientific research conducted in whole or in part by **distributed individuals, many of whom may not be scientists**, who contribute relevant data using their own computing devices. A volunteer might photograph a rare plant with a phone, record a night-sky observation, or let a computer's spare time analyse scientific data. Science has been affected by using distributed and citizen science to solve scientific problems that would be hard for a small team to cover.

## Information, public data and problem-solving at scale

**Widespread access to information and public data** makes it easier to identify problems, develop solutions and share the results. For example, when a city publishes data about air quality, local groups can analyse it, suggest improvements and report their findings, and others can check the work. Programs and the Internet make this participation possible **at scale**: many people can take part in solving a problem, often at little cost.

**Human capabilities can be enhanced by collaboration via computing.** One person cannot identify thousands of galaxies in an evening; a large group, each looking at a few pictures, can. Crowdsourcing also offers **new models for collaboration**, such as connecting **businesses or social causes with funding** from many small contributors.

## Challenges and limits

Crowdsourcing is powerful, but it is not automatically accurate or fair.

- **Quality varies.** Contributors have different skill and care. Some contributions contain mistakes; a few may be dishonest. Data usually need to be **checked and cleaned** (Topic 2.3), for example by requiring several independent contributors to agree.
- **Participation is uneven.** Those who take part are often those with devices, connections, time and interest (Topic 5.2). Places and groups with fewer participants appear less in the data, which can bias the results (Topic 5.3).
- **Privacy.** Contributions such as location tracks or photographs can reveal more about contributors than they intend (Topic 5.6).
- **Credit and fairness.** Contributors' time and data may be valuable; clear rules about how contributions are used and credited matter (Topic 5.5).

## Worked example 1: deciding which crowdsourced reports to trust

**Scenario.** A fictional city app lets residents report potholes. In one week, 12 reports arrive for five locations. The city decides to treat a location as **confirmed** only when at least **3 reports** (from different people) have been received for it.

| Location | Reports received |
|---|---|
| A (High Road) | 4 |
| B (Mill Lane) | 1 |
| C (Station Road) | 3 |
| D (Park Avenue) | 2 |
| E (School Street) | 2 |

**Task.** (a) Check the total. (b) Which locations are confirmed? (c) Evaluate the rule.

**(a) Total.** 4 + 1 + 3 + 2 + 2 = **12**, which matches the 12 reports received.

**(b) Confirmed.** Apply "at least 3": A (4) and C (3) are confirmed. B (1), D (2) and E (2) are not. So **2 of 5 locations** (40%) are confirmed.

**(c) Evaluation.** *Strength:* requiring several independent reports guards against a single mistaken or dishonest report. *Weakness:* a real pothole in a place where few people use the app may never reach 3 reports. Streets whose residents have less access to smartphones (Topic 5.2) may be under-reported even if their potholes are worse. School Street is a place where a pothole could be dangerous for children, yet it has only 2 reports. The city might combine the report counts with inspection data, check the unconfirmed locations manually, or lower the threshold for places near schools.

**Check.** The confirmed list was found by testing each count against the threshold, and the evaluation names both benefit and limit, tying the limit to who takes part.

## Worked example 2: is a citizen-science data set representative?

**Scenario.** A fictional wildlife charity asks the public to submit bird sightings through an app. It receives 2,000 submissions in a month. The charity knows how the submissions split between area types, and what share of the country's land each type covers.

| Area type | Submissions | Share of land area |
|---|---|---|
| Urban | 1,400 | 10% |
| Suburban | 450 | 30% |
| Rural | 150 | 60% |

**Task.** Calculate each type's share of submissions and say what it shows.

**Shares of submissions.** Urban: 1,400 ÷ 2,000 = 0.70, so **70%**. Suburban: 450 ÷ 2,000 = 0.225, so **22.5%**. Rural: 150 ÷ 2,000 = 0.075, so **7.5%**. (Check: 70 + 22.5 + 7.5 = 100.)

**Comparison with land area.** Urban areas cover 10% of the land but produce 70% of the submissions. Rural areas cover 60% of the land but produce only 7.5%. Urban areas supply 7 times their share of land (70 ÷ 10), while rural areas supply only about one-eighth of theirs (7.5 ÷ 60 = 0.125).

**Interpretation.** The data set is large (2,000 submissions) but **unevenly distributed**. It tells the charity a lot about birds in towns and very little about birds in the countryside. If the charity used it to estimate how many birds live in the whole country, the estimate would be biased toward urban species. A large number of submissions does not remove this bias.

**Improvements.** Ask for targeted participation in rural areas (for example through rural clubs), use another data source (professional surveys) for those areas, and report the coverage along with the results.

**Check.** The shares add to 100% and the comparison uses the same quantity (share) for both columns. This ties crowdsourcing to Topics 5.2 and 5.3: who takes part determines what the data show.

## Types of crowdsourcing

Crowdsourcing is not one activity. It helps to recognise the main types, because each has different strengths and risks.

| Type | What contributors give | Example | Main risk |
|---|---|---|---|
| Data collection | Observations from their own devices | Counting birds in a garden | Uneven coverage and mistakes |
| Micro-tasks | Small judgements on many items | Labelling which photos contain a bus | Careless or dishonest answers |
| Idea generation | Suggestions or designs | A competition to name a new park | Many weak ideas to sort through |
| Problem solving | Skills applied to a shared problem | Volunteers analysing scientific data | Needs clear instructions and checking |
| Funding | Small amounts of money | Many people funding a community garden | Unequal ability to give; trust in organisers |

## Designing a good crowdsourcing project

A well-designed project answers a few questions in advance.

- **Is the task clear and small enough?** Contributors are volunteers; unclear or long tasks lose them.
- **How will quality be checked?** Options include requiring several independent contributors to agree, asking for a photo or a time stamp, and having experts review unusual results.
- **Who is likely to take part, and who is not?** If most contributors come from one group or place, plan extra ways to reach others, or use another source to fill the gaps.
- **How will contributors' data and privacy be protected?** Collect only what is needed and say how it will be used.
- **How will contributors be credited and informed?** Sharing results and giving credit keeps people involved and treats them fairly.

A strong exam answer on crowdsourcing therefore mentions the **benefit** (scale, speed, variety), a **limit** (quality or coverage) and a **specific step** that deals with the limit.

## Common misconceptions

- **"Crowdsourcing only means asking for money."** It also covers data, judgement, ideas and work.
- **"Citizen scientists must be trained scientists."** Many are not.
- **"A big crowd means reliable data."** Quality and coverage still have to be checked.
- **"Crowdsourced data represent everyone."** Participation is uneven.
- **"Crowdsourcing does not need computing."** The Internet and programs collect, combine and check contributions at scale.
- **"Contributors have no privacy risk."** Location and images can reveal personal information.
- **"Experts are no longer needed."** Experts design the project, check the data and interpret the results.

## Where this leads

Crowdsourcing depends on the Internet (Unit 4) and brings together data (Unit 2), access ([5.2](/advanced-course-resources/computer-science-principles/5-2-digital-divide-study-guide/)) and bias ([5.3](/advanced-course-resources/computer-science-principles/5-3-computing-bias-study-guide/)). Next, [Legal and Ethical Concerns](/advanced-course-resources/computer-science-principles/5-5-legal-ethical-concerns-study-guide/) asks who owns contributions and how they may be used. Practise with the [practice questions](/advanced-course-resources/computer-science-principles/5-4-crowdsourcing-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-principles/5-4-crowdsourcing-revision-notes/), and check your skills on the [checklist](/advanced-course-resources/computer-science-principles/5-4-crowdsourcing-checklist/).
