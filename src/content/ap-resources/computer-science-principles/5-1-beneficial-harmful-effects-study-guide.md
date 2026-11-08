---
resourceId: "mb-ap-csp-5.1-study-guide"
title: "Beneficial and Harmful Effects: Study Guide (Computer Science Principles 5.1)"
description: "How computing innovations can have beneficial, harmful and unintended effects, why the same effect can be viewed differently by different people, and how to analyse an innovation, with two worked examples."
course: "computer-science-principles"
unit: 5
topics: ["5.1"]
resourceType: "study-guide"
prerequisites: 
  - "Topic 1.1 (what a computing innovation is)"
  - "Reading a short passage and picking out purpose, users and effects"
learningObjectives: 
  - "Explain how one effect of a computing innovation can be both beneficial and harmful, depending on who is affected"
  - "Explain how an innovation can be used beyond its intended purpose, and give both beneficial and harmful examples"
  - "Describe why developers cannot foresee every use, and what responsible developers do about it"
  - "Analyse a short description of an innovation by its purpose, users, effects and safeguards"
skills: ["5", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-5.1-revision-notes", "mb-ap-csp-5.1-practice", "mb-ap-csp-5.1-checklist"]
next: "mb-ap-csp-5.1-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "People create computing innovations, and they change how people complete tasks."
  - "Not every effect is anticipated; unintended consequences can be beneficial or harmful."
  - "A single effect can be seen as beneficial by one person and harmful by another, or even by the same person."
  - "Innovations can be used in ways their creators did not intend, and rapid sharing or a very large number of users can multiply the effect."
  - "Responsible developers try to consider unintended uses and their effects, but they cannot consider every one."
faqs:
  - question: "Can an effect of a computing innovation be both beneficial and harmful?"
    answer: "Yes. A single effect can be viewed as beneficial by some people, or at some times, and harmful by others, or even by the same person. A good answer says who is affected and how."
  - question: "What is an unintended consequence?"
    answer: "An effect that the developers did not plan or expect. Unintended consequences may be beneficial (a technology leads to advances in another field) or harmful."
  - question: "Do I have to give my own opinion on whether an innovation is good or bad?"
    answer: "No. Exam questions ask you to identify and explain effects with reasons, and usually to name both a benefit and a harm. Be balanced and specific rather than taking a side."
  - question: "Why can't a programmer predict every use of an innovation?"
    answer: "People can use an innovation in many creative ways and at very large scale, so it is not possible to consider every possible use in advance. Responsible developers still think about likely uses and about who might be affected."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## People build innovations, and innovations change people

A **computing innovation** is created by people to achieve a specific purpose. Once it is in use, the way people complete tasks often changes: we use maps on phones instead of paper maps, messaging instead of letters, online forms instead of queues. Computing has also boosted creativity and progress in other fields, such as medicine, engineering, communications and the arts.

But the effects of an innovation are rarely only the ones its designers planned. This topic is about **effects**: beneficial, harmful and unintended. Questions in this area are non-political. The skill is to describe effects carefully, name who is affected, and avoid claiming more than the scenario shows.

## One effect, two views

**Not every effect of a computing innovation is anticipated in advance.** Some unintended effects are good, some are bad, and some are both.

Consider a fictional ride-hailing app that shows nearby drivers instantly.

- A commuter finds the faster service **beneficial**.
- A traditional taxi driver may see lost customers and see the same effect as **harmful**.
- A student may think the app is beneficial when travelling home late, and then find the cost harmful during a busy night with higher prices.

So **a single effect can be viewed as both beneficial and harmful by different people, or even by the same person**. A strong answer does not simply say "it is good"; it says **for whom**, and **in what way**.

<figure>
<svg viewBox="0 0 640 270" role="img" aria-labelledby="eff-title eff-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="eff-title">Intended and unintended effects of a computing innovation</title>
<desc id="eff-desc">A central box labelled computing innovation. On the left, a box labelled intended purpose with an arrow to the centre. On the right, two boxes: a circle marked plus, labelled beneficial effect, and a square marked minus, labelled harmful effect. Below the right boxes, a box labelled unintended effects leads to both. A note says the same effect may be beneficial for one person and harmful for another.</desc>
<rect x="0" y="0" width="640" height="270" fill="#ffffff"/>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="20" y="85" width="150" height="70" rx="8"/>
<rect x="250" y="85" width="140" height="70" rx="8" stroke-dasharray="6 4"/>
<rect x="470" y="30" width="150" height="60" rx="8"/>
<rect x="470" y="125" width="150" height="60" rx="8"/>
<rect x="250" y="195" width="140" height="50" rx="8"/>
</g>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="170" y1="120" x2="246" y2="120"/><path d="M238 114 L248 120 L238 126"/>
<line x1="390" y1="105" x2="466" y2="62"/><path d="M455 62 L468 61 L461 72"/>
<line x1="390" y1="135" x2="466" y2="155"/><path d="M455 148 L468 155 L456 162"/>
<line x1="320" y1="195" x2="320" y2="158"/><path d="M314 166 L320 156 L326 166"/>
</g>
<g fill="#1d2b44" font-size="14" text-anchor="middle">
<text x="95" y="115" font-weight="bold">Intended</text><text x="95" y="135">purpose</text>
<text x="320" y="115" font-weight="bold">Computing</text><text x="320" y="135" font-weight="bold">innovation</text>
<text x="545" y="55" font-weight="bold">(+) Beneficial effects</text><text x="545" y="75">for some people</text>
<text x="545" y="150" font-weight="bold">[-] Harmful effects</text><text x="545" y="170">for other people</text>
<text x="320" y="218" font-weight="bold">Unintended effects</text><text x="320" y="236">not planned or foreseen</text>
<text x="320" y="262">The same effect may be (+) for one person and [-] for another.</text>
</g>
</svg>
<figcaption>Figure 1. An innovation built for an intended purpose also has unintended effects. Effects may be beneficial for some and harmful for others, and the labels (+) and [-] show this without relying on colour.</figcaption>
</figure>

## Use beyond the intended purpose

Computing innovations are often used in ways their creators **did not originally intend**. Three examples the course gives:

- The **World Wide Web** was first intended for the rapid and easy exchange of information within the scientific community. It now serves billions of people for almost everything.
- **Targeted advertising** helps businesses reach the people most likely to want a product, but it can be misused, at both individual and aggregate levels.
- **Machine learning and data mining** have enabled innovation in medicine, business and science, but the information discovered this way has also been used to discriminate against groups of individuals.

Computing innovations have often had **unintended beneficial effects**, such as leading to advances in other fields. Some uses may have a **harmful impact on society, the economy or culture**.

**Scale matters.** Rapid sharing of a program, or running it with a very large number of users, can have significant impacts beyond the intended purpose and beyond the **control** of the programmer. A small error or design flaw that affects ten users may affect ten million.

## What responsible developers do

**Responsible programmers try to consider the unintended ways their innovations can be used** and the potential beneficial and harmful effects of these new uses. They can talk to a variety of users (Topic 1.1), test for unusual use, think about misuse, add safeguards, and give users control over settings.

But it is **not possible for a programmer to consider all the ways a computing innovation can be used.** So the realistic standard is *reasonable foresight and a willingness to respond* when effects appear, not perfect prediction.

## A method for analysing an innovation

When a question describes an innovation, answer these questions in order:

1. **Purpose:** what was it built to do?
2. **Users and others affected:** who uses it? Who else is affected without using it?
3. **Effects:** what changes for each group? Which are beneficial, harmful, unintended?
4. **Data and scale:** what information does it collect or produce, and how many people are involved?
5. **Safeguards:** what could the developers or users do to reduce harm?

## Worked example 1: a navigation app

**Scenario.** A fictional navigation app, RouteWise, chooses the fastest route for every driver in real time. During busy periods it sends many drivers through quiet residential streets to avoid a congested main road.

**Task.** Identify beneficial, harmful and unintended effects, show that one effect can be seen both ways, and propose a safeguard.

**Step 1: purpose.** To help drivers reach destinations faster.

**Step 2: who is affected.** Drivers using the app, other drivers on the main road, and residents of the side streets (who do not use the app at all).

**Step 3: effects.**

| Effect | Who | Beneficial or harmful |
|---|---|---|
| Shorter journeys | Drivers using the app | Beneficial |
| Less traffic on the main road | Other road users | Beneficial |
| More traffic, noise and safety risk on residential streets | Residents, children | Harmful |

**Step 4: unintended.** The designers wanted faster journeys; the surge of traffic on quiet streets is an **unintended consequence**, which grows with the **number of users**.

**Step 5: one effect, two views.** "Traffic is moved away from the main road" is beneficial to the people who live beside it and harmful to the people who live beside the side streets.

**Step 6: safeguard.** The developers could let local authorities mark streets as unavailable for through traffic, offer a user setting to prefer main roads, or limit how many cars are sent along one street.

**Check.** The answer names each group, separates intended from unintended, shows that scale increases the effect, and offers a specific action. It does not claim the app is "good" or "bad" overall.

## Worked example 2: a transport card

**Scenario.** A fictional city introduces a smart card for buses. Its purpose is to speed up boarding by replacing cash. The card records the stop where each journey starts. The transport office finds that the records show where people actually travel and uses them to plan extra buses on busy routes. Some residents worry that the same records, if shared, could reveal when people leave and return home.

**Task.** (a) Identify an unintended beneficial effect. (b) Identify a possible harmful effect. (c) State one safeguard.

**(a) Unintended benefit.** The records were collected to speed up payment, not to plan routes. Using them for planning is a use beyond the intended purpose, and it has a beneficial effect: better service on busy routes.

**(b) Possible harm.** Journey records can show a person's habits and routines. If they were shared or misused, they could compromise privacy or personal safety. The harm depends on who can see the data and why (this connects to Topic 5.6).

**(c) Safeguard.** Remove names from the records before analysis, limit who can see individual journeys, delete old records after a set time, and tell cardholders how the data are used.

**Check.** The data are the same in (a) and (b); what differs is who uses them and for what. This is the same lesson as Worked example 1: effects depend on the people affected and the use.

## Reading a passage about a computing innovation

The exam includes a short reading passage about a computing innovation, followed by questions that ask you to identify purpose, users, effects and concerns. The passage is written for an ordinary reader and does not need prior knowledge of the technology. A useful reading routine is to annotate in the margin as you read: mark the **purpose** (P), the **people mentioned** (U), each **effect** with a plus or a minus (+ or -), any **data** collected (D) and any **safeguard** (S).

Here is a short original passage with its annotations. *"A fictional app, ParkFinder, shows free parking spaces in real time using sensors in the road (P: help drivers find parking). Drivers say they spend less time searching (+). Cafe owners near the main car park say fewer drivers now walk past their doors (-). The app records each driver's route (D). The city says it will use the data, without names, to plan new car parks (+, S)."* Reading this way, you can see at once that one effect (fewer drivers searching on foot) is beneficial for drivers and harmful for café owners, that the route data raise a privacy question, and that the city's plan is both a benefit and a use beyond the app's original purpose. Questions on the passage then become a matter of matching each option to what you have marked, and rejecting options that claim more than the passage says.

## Common misconceptions

- **"If an innovation is useful, it has no harmful effects."** Many have both; the question is for whom.
- **"Developers can foresee every effect."** It is not possible for a programmer to consider every use.
- **"Harm is only caused by bad intentions."** Many harmful effects are unintended.
- **"Unintended means harmful."** Unintended effects can be beneficial too.
- **"An effect is either beneficial or harmful."** The same effect can be both, depending on the person.
- **"Scale does not change the effect."** Rapid sharing and many users can multiply an effect beyond the programmer's control.
- **"I must say whether the innovation is good or bad."** Balanced, evidence-based description is what is asked.

## Where this leads

This topic sets the frame for the rest of Big Idea 5. Next, [Digital Divide](/advanced-course-resources/computer-science-principles/5-2-digital-divide-study-guide/) looks at who has access, and [Computing Bias](/advanced-course-resources/computer-science-principles/5-3-computing-bias-study-guide/) at how designs can treat groups unequally. Privacy risks appear in [Safe Computing](/advanced-course-resources/computer-science-principles/5-6-safe-computing-study-guide/). Practise with the [practice questions](/advanced-course-resources/computer-science-principles/5-1-beneficial-harmful-effects-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-principles/5-1-beneficial-harmful-effects-revision-notes/), and check your skills on the [checklist](/advanced-course-resources/computer-science-principles/5-1-beneficial-harmful-effects-checklist/).
