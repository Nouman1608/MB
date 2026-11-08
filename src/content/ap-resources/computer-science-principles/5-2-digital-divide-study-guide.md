---
resourceId: "mb-ap-csp-5.2-study-guide"
title: "Digital Divide: Study Guide (Computer Science Principles 5.2)"
description: "What the digital divide is, which characteristics affect access, why it raises issues of equity, access and influence, and how to evaluate solutions, with two worked examples."
course: "computer-science-principles"
unit: 5
topics: ["5.2"]
resourceType: "study-guide"
prerequisites: 
  - "Topic 5.1 (beneficial and harmful effects)"
  - "Percentages and proportions by hand"
prerequisiteResources: ["mb-ap-csp-5.1-study-guide"]
learningObjectives: 
  - "Define the digital divide and name the characteristics (socioeconomic, geographic, demographic) along which access varies"
  - "Explain how the digital divide raises issues of equity, access and influence, locally and globally"
  - "Describe how the actions of individuals, organisations and governments affect the divide"
  - "Evaluate proposed ways of reducing the divide, naming who benefits and what limits remain"
skills: ["5", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-5.2-revision-notes", "mb-ap-csp-5.2-practice", "mb-ap-csp-5.2-checklist"]
next: "mb-ap-csp-5.2-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "The digital divide is differing access to computing devices and the Internet, based on socioeconomic, geographic or demographic characteristics."
  - "It affects both groups and individuals, and exists between countries as well as within them."
  - "It raises issues of equity, access and influence, both globally and locally."
  - "It is affected by the actions of individuals, organisations and governments."
  - "A good solution addresses a specific barrier (device, connection, cost or skills) and names who it helps and who it still leaves out."
faqs:
  - question: "What is the digital divide?"
    answer: "The differing access to computing devices and the Internet, based on socioeconomic, geographic or demographic characteristics. It can affect groups and individuals, and it exists between countries as well as within them."
  - question: "Is the digital divide only about owning a computer?"
    answer: "No. It includes devices, the quality and cost of an Internet connection, the places where people can get online, and the skills and support needed to use technology. Someone with a phone but no reliable connection or data can still be on the wrong side of the divide."
  - question: "Who can reduce the digital divide?"
    answer: "Individuals, organisations and governments all play a part. Examples include sharing devices, schools lending equipment, companies offering low-cost plans, and public programmes that build networks in under-served areas."
  - question: "Does the digital divide affect fairness?"
    answer: "Yes. It raises issues of equity (fair treatment and opportunity), access (the ability to reach services and information) and influence (the ability to take part in decisions and shape what is built)."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## What is the digital divide?

Computing and the Internet bring many benefits (Topic 5.1), but not everyone can use them equally. Internet access varies between **socioeconomic**, **geographic** and **demographic** groups, and between countries. The **digital divide** refers to **differing access to computing devices and the Internet**, based on these characteristics.

- **Socioeconomic**: income, employment and education affect whether a household can afford a device and a connection.
- **Geographic**: people in remote or rural areas may have no network, a slow network, or high costs, while people in dense cities may have many options. Some countries have much less infrastructure than others.
- **Demographic**: age, disability, language and other characteristics affect how easily people can use technology, for example a website that does not work with a screen reader.

The divide can affect **groups** (a village, a school year, a country) and **individuals** (one student at home with a shared phone and no data). It is not a single line: there are many divides, and a person may be on the "access" side in one respect and not in another.

## Parts of access

Access has several parts, and a barrier at any one can block use.

| Part of access | Example barrier |
|---|---|
| Device | No computer, or one shared by a whole family |
| Connection | No network in the area; slow or unreliable service |
| Cost | Data plans too expensive for the household |
| Skills and support | No training; no one to ask for help |
| Suitability | Content only in a language the user does not read; sites that are not accessible to a screen reader |

## Equity, access and influence

The digital divide raises three connected issues, both **globally** and **locally**.

- **Equity**: fairness in opportunity. If homework, job applications or health information are online only, people without access start at a disadvantage.
- **Access**: the ability to reach services, information and opportunities. Many essential services are now delivered online.
- **Influence**: the ability to take part in decisions and to shape what is built. If people without access are absent from online discussions, surveys and feedback, products are designed without their perspectives (Topic 1.1), and computing-based decisions about them may reflect only the views of those who are online.

<figure>
<svg viewBox="0 0 640 250" role="img" aria-labelledby="dd-title dd-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="dd-title">Home Internet access of 240 students</title>
<desc id="dd-desc">A horizontal bar divided into three segments, drawn at 2 pixels per student. The first segment, 150 students with fast home broadband, is plain. The second, 54 students with mobile data only, is hatched with diagonal lines. The third, 36 students with no home Internet, is dotted. Under each segment, its share is written: 62.5 percent, 22.5 percent and 15 percent.</desc>
<rect x="0" y="0" width="640" height="250" fill="#ffffff"/>
<defs>
<pattern id="dh" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="#1d2b44" stroke-width="2"/></pattern>
<pattern id="dd" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="4" cy="4" r="1.6" fill="#1d2b44"/></pattern>
</defs>
<g stroke="#1d2b44" stroke-width="2">
<rect x="80" y="50" width="300" height="50" fill="#ffffff"/>
<rect x="380" y="50" width="108" height="50" fill="url(#dh)"/>
<rect x="488" y="50" width="72" height="50" fill="url(#dd)"/>
</g>
<g fill="#1d2b44" font-size="14" text-anchor="middle">
<line x1="524" y1="102" x2="524" y2="176" stroke="#1d2b44" stroke-width="1.5"/>
<text x="320" y="30" font-weight="bold">240 students (each pixel pair is one student)</text>
<text x="230" y="125">150 students</text><text x="230" y="145">fast home broadband</text><text x="230" y="165" font-weight="bold">62.5%</text>
<text x="434" y="125">54 students</text><text x="434" y="145">mobile data only</text><text x="434" y="165" font-weight="bold">22.5%</text>
<text x="524" y="190">36 students</text><text x="524" y="210">no home Internet</text><text x="524" y="230" font-weight="bold">15%</text>
</g>
</svg>
<figcaption>Figure 1. A fictional school's survey: 150 of 240 students have fast home broadband, 54 have mobile data only, and 36 have no home Internet. Pattern fills, not colour alone, distinguish the segments.</figcaption>
</figure>

## Who affects the divide?

The digital divide is **affected by the actions of individuals, organisations and governments**.

- **Individuals** can share devices or connections, teach skills, or choose to build accessible websites.
- **Organisations** (schools, libraries, companies, charities) can lend equipment, run training, offer low-cost plans, design for slow connections and offer content in several languages.
- **Governments** can invest in networks in under-served areas, set rules on access and accessibility, and fund programmes.

Because the divide has several causes, no single action closes it. Each action addresses one barrier for some people.

## Worked example 1: reading access data

**Scenario.** The fictional school in Figure 1 plans to give homework as video lessons that need a fast connection at home. A survey of its 240 students found: 150 have fast home broadband; 54 have mobile data only (with a monthly data limit); 36 have no home Internet.

**Task.** (a) Calculate the percentage in each group. (b) What percentage of students could be disadvantaged by the plan? (c) Describe the issues raised.

**(a) Percentages.** 150 ÷ 240 = 0.625, so **62.5%**. 54 ÷ 240 = 0.225, so **22.5%**. 36 ÷ 240 = 0.15, so **15%**. Check: 62.5 + 22.5 + 15 = 100.

**(b) Disadvantaged.** Students with mobile data only (54) may use up the limit quickly on video, and students with no home Internet (36) cannot watch at home. Together that is 54 + 36 = 90 students, and 90 ÷ 240 = **37.5%**. This is the same as 100% - 62.5% = 37.5%.

**(c) Issues.**

- **Equity:** more than a third of students would start homework at a disadvantage through no fault of their own.
- **Access:** the 36 with no connection cannot reach the lessons at home at all.
- **Influence:** the plan was presumably designed by people who all have good connections, so the barriers may not have been noticed. Consulting the 90 affected students would add that perspective.

**Check.** The answer uses the numbers (37.5%), names three issues, and does not assume why a student lacks access. A balanced response also notes that the 62.5% with good access would benefit from richer lessons.

## Worked example 2: evaluating solutions

**Scenario.** The school considers four options for the 90 students.

| Option | Barrier addressed | Who benefits | Remaining limits |
|---|---|---|---|
| A. Lend mobile hotspots with data | Connection and cost at home | Students at home | Limited number of devices; the school must pay data costs; no help if there is no phone signal at home |
| B. Provide lessons that can be downloaded at school and watched offline | Connection at home | Students who can use a device at home | Needs a device at home; takes preparation time |
| C. Open the library and a school room after hours | Place to get online | Students able to travel there | Travel and safety; fixed hours; no help for those with caring duties |
| D. Make all homework paper-based | Connection | Everyone | Removes the benefits of video for those who do have access; teachers' workload |

**Task.** Recommend a combination and justify.

**Step 1: identify the barriers.** Some students lack a connection, some lack a device, some lack a place and time.

**Step 2: match.** Option B solves the connection barrier cheaply for those with a device. Option A covers those who have a device but cannot connect even at school. Option C helps those with no device at home.

**Step 3: recommend.** **B, plus C and a small number of A for the remainder.** Mixing options means that each barrier is addressed and no one solution carries the whole load.

**Step 4: remaining limits.** Even this plan leaves gaps (students who cannot reach the school after hours). The school should check results with the affected students and adjust, which is an iterative approach (Topic 1.3).

**Check.** The answer links each option to a barrier, names who benefits and who is still left out, and avoids claiming that any single option "solves" the divide.

## The divide at different scales

The digital divide shows up locally and globally, and the barriers differ. **Locally**, two households on the same street may differ because of cost, the number of people sharing a device, or whether anyone can help with setting it up. **Between regions**, the difference may be the availability of cables or mobile networks. **Between countries**, differences in infrastructure, cost relative to income and the languages in which content is available all play a part. A balanced answer says which scale it is discussing.

## What the numbers can and cannot tell you

Percentages such as "62.5% of students have fast broadband" are useful, but they hide detail. A household "with Internet" may share one slow connection among six people, or have a data limit that is used up in days. A single figure for a whole country can hide large differences between cities and villages. When you read data about access, ask three questions: **who was counted**, **what counts as "access"** and **who might be missing from the survey**, because people without access are also the hardest to reach with an online survey.

## Common types of solution and the trade-offs

Solutions fall into a few types, and each has a limit. **Providing devices** helps people who lack them but not those who lack a connection. **Providing connections** (hotspots, public Wi-Fi) helps people who have devices but may be limited by location or opening hours. **Lowering costs** helps affordability but not skills. **Training and support** builds skills but not infrastructure. **Designing for low bandwidth and accessibility** helps many people without any new equipment, but cannot replace access. This is why a good proposal combines several measures and says who is still left out.

## Common misconceptions

- **"The digital divide is just about owning a computer."** It includes connection, cost, skills and suitability.
- **"It only exists between rich and poor countries."** It exists within countries and communities too.
- **"It is only about income."** Geographic and demographic characteristics matter as well.
- **"A device ends the problem."** A device without a connection, or without skills, may not help.
- **"Governments alone can fix it."** Individuals, organisations and governments all play a part.
- **"People without access do not matter to online decisions."** Their absence leaves their perspectives out (influence).
- **"Free Wi-Fi in one place solves it."** It helps some people, but travel, hours and safety limit it.

## Where this leads

The digital divide connects to bias: if only some groups are present in the data, products may serve them best ([Computing Bias](/advanced-course-resources/computer-science-principles/5-3-computing-bias-study-guide/)). It also links to [Crowdsourcing](/advanced-course-resources/computer-science-principles/5-4-crowdsourcing-study-guide/), where who takes part shapes the results. Practise with the [practice questions](/advanced-course-resources/computer-science-principles/5-2-digital-divide-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-principles/5-2-digital-divide-revision-notes/), and check your skills on the [checklist](/advanced-course-resources/computer-science-principles/5-2-digital-divide-checklist/).
