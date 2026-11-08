---
resourceId: "mb-ap-csa-4.1-study-guide"
title: "Ethical and Social Issues Around Data Collection: Study Guide (Computer Science A 4.1)"
description: "Learn the privacy risks of collecting personal data, what algorithmic bias is, how the way data was collected can bias a data set, and why incomplete or inaccurate data breaks programs."
course: "computer-science-a"
unit: 4
topics: ["4.1"]
resourceType: "study-guide"
prerequisites:
  - "The impact of program design on society (Topic 3.2)"
  - "Writing and tracing simple methods with a running total (Topic 3.5)"
prerequisiteResources: ["mb-ap-csa-3.2-study-guide"]
learningObjectives:
  - "Explain the risks to privacy from collecting and storing personal data and what programmers can do about them"
  - "Define algorithmic bias and explain how biased or unrepresentative data can produce it"
  - "Judge a data collection method for the bias it may introduce before drawing conclusions"
  - "Explain how incomplete or inaccurate data can make a program work incorrectly, and trace an example"
  - "Decide whether a data set is appropriate for a particular question"
skills: ["5", "1"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-4.1-revision-notes", "mb-ap-csa-4.1-practice", "mb-ap-csa-4.1-checklist"]
next: "mb-ap-csa-4.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "Collecting and storing personal data puts personal privacy at risk; programmers should safeguard the personal privacy of the user."
  - "Algorithmic bias means systemic and repeated errors in a program that create unfair outcomes for a specific group of users."
  - "Before drawing conclusions, ask how the data set was collected: the method can introduce bias, because some people or cases may be left out or over-represented."
  - "Incomplete or inaccurate data can make a program work incorrectly or inefficiently."
  - "A data set built to answer one question may not answer a different question or apply to a different group."
faqs:
  - {"question": "Is algorithmic bias always caused by a programmer who meant to be unfair?", "answer": "No. It is defined by its effect: systemic and repeated errors that create unfair outcomes for a specific group. It often comes from data that under-represents a group or from patterns in past decisions, even when no one intended harm."}
  - {"question": "What is the difference between a bug and algorithmic bias?", "answer": "A bug can be a one-off error that affects anyone. Algorithmic bias is repeated and systematic, and it falls unfairly on a particular group of users."}
  - {"question": "What can a programmer do about privacy?", "answer": "Safeguard the user's personal privacy when developing programs: collect only the data that is needed, store it securely, tell people what is collected, and avoid sharing it without good reason."}
  - {"question": "Does a bigger data set remove bias?", "answer": "Not by itself. If the collection method leaves out or over-represents some people, more data collected the same way repeats the same problem. What matters is how the data was collected and who it covers."}
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Programs run on data, and data comes from people

In Unit 4 you start working with **collections of data**: arrays, lists and tables. Before you write code to process data, this topic asks three questions that a responsible programmer asks first. Where did the data come from? What could go wrong because of how it was collected or stored? Is it the right data for the question?

The skill assessed is to **explain the social and ethical implications of computing systems** and to judge what knowledge can responsibly be taken from data. There are four ideas.

## 1. Privacy

When people use a computer, their **personal privacy is at risk**. Programs collect names, locations, browsing, purchases and messages, and a data set that is collected and stored can be lost, stolen, shared or used in ways the person never expected. When developing new programs, programmers should attempt to **safeguard the personal privacy of the user**.

Practical safeguards you can name:

- **Collect only what the program needs.** Data you never collect cannot leak.
- **Store it securely** and for no longer than necessary.
- **Be open about what is collected and why**, so users can make informed choices.
- **Avoid combining and sharing data** in ways that identify individuals.

A privacy question in the exam usually asks you to name a specific risk (for example, a stored location history revealing where someone lives) and a specific safeguard.

## 2. Algorithmic bias

**Algorithmic bias** describes **systemic and repeated errors in a program that create unfair outcomes for a specific group of users.** Three parts of that definition each matter:

- **systemic and repeated**: not a single slip, but a pattern;
- **errors that create unfair outcomes**: people are treated worse, not merely differently;
- **a specific group**: the harm falls on some users more than others.

Algorithmic bias usually comes from the **data**. A program that learns from, or is tuned on, a data set copies the patterns in it. If the data under-represents a group, the program's results for that group will be less accurate. If the data reflects unfair past decisions, the program repeats them.

## 3. How the data was collected

Programmers should be aware of the **data set collection method** and the **potential for bias** in it **before using the data to extrapolate new information or draw conclusions**. Ask:

- Who was included, and who was left out?
- Did people choose to take part (volunteers differ from the rest)?
- Was the data collected in one place, at one time, or by one device?
- Does the group in the data match the group the conclusion is about?

<figure>
<svg viewBox="0 0 640 290" role="img" aria-labelledby="bar-title bar-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="bar-title">Share of riders by age group: all riders versus riders in the app data</title>
<desc id="bar-desc">Grouped horizontal bars for a fictional city. Ages 18 to 34: 50 percent of all riders and 70 percent of the app data. Ages 35 to 64: 30 percent of all riders and 27 percent of the app data. Ages 65 and over: 20 percent of all riders and only 3 percent of the app data. The app data under-represents riders aged 65 and over.</desc>
<rect x="0" y="0" width="640" height="290" fill="#ffffff"/>
<g fill="#1d2b44" font-size="14"><text x="20" y="60">Ages 18-34</text><text x="20" y="145">Ages 35-64</text><text x="20" y="230">Ages 65+</text></g>
<g stroke="#1d2b44" stroke-width="2"><line x1="150" y1="20" x2="150" y2="260"/></g>
<g fill="#dbe4f0" stroke="#1d2b44" stroke-width="2"><rect x="150" y="30" width="210" height="26"/><rect x="150" y="115" width="126" height="26"/><rect x="150" y="200" width="84" height="26"/></g>
<g fill="#1d2b44" stroke="#1d2b44" stroke-width="2"><rect x="150" y="60" width="294" height="26"/><rect x="150" y="145" width="113.4" height="26"/><rect x="150" y="230" width="12.6" height="26"/></g>
<g fill="#1d2b44" font-size="13"><text x="368" y="48">50% all riders</text><text x="452" y="78">70% app data</text><text x="284" y="133">30% all riders</text><text x="271" y="163">27% app data</text><text x="242" y="218">20% all riders</text><text x="170" y="248">3% app data</text></g>
<g font-size="13" fill="#1d2b44"><rect x="400" y="262" width="16" height="12" fill="#dbe4f0" stroke="#1d2b44" stroke-width="2"/><text x="422" y="273">All riders</text><rect x="500" y="262" width="16" height="12" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/><text x="522" y="273">App data</text></g>
</svg>
<figcaption>Figure 1. Fictional example. Light bars (outlined) show all riders; dark bars show riders who appear in the app data. Every bar is labelled with its percentage, so the chart can be read without colour. The app data over-represents ages 18 to 34 and barely includes ages 65 and over.</figcaption>
</figure>

In Figure 1, a program built only from the app data would be tuned mainly to younger riders. Its suggestions could be systematically worse for the oldest group, which is algorithmic bias arising from a collection method.

## 4. Data quality and the right data set

Some data sets are **incomplete or contain inaccurate data**. Using such data in the development or use of a program can cause the program to **work incorrectly or inefficiently**. Missing values, wrong units, typing mistakes and special codes for "no reading" all fall into this category.

Also, the **contents of a data set may relate to one question or topic** and may **not be appropriate to give correct answers, or to extrapolate information, for a different question or topic**. A data set about adult sleep tells you little about school-age sleep.

You can see data quality go wrong in code. A sensor reports temperatures but uses the code `-999.0` when it has no reading. Compare a program that ignores the code with one that handles it.

```java
public class NaiveSensor
{
    private double sum = 0;
    private int count = 0;

    public void record(double reading)
    {
        sum += reading;
        count++;
    }

    public double average()
    {
        return sum / count;
    }
}
```

```java
public class CleanSensor
{
    private double sum = 0;
    private int count = 0;
    private int skipped = 0;

    public void record(double reading)
    {
        if (reading == -999.0)          // -999 is the sensor's code for "no reading"
        {
            skipped++;
        }
        else
        {
            sum += reading;
            count++;
        }
    }

    public double average()
    {
        return sum / count;
    }

    public int getSkipped()
    {
        return skipped;
    }
}
```

## Worked example 1: judging a data set before using it

**Task.** A fictional city wants to decide where to add buses. Its program uses trip data from a journey-planning app. Evaluate the data set using Figure 1.

**Step 1: the question and the data.** The question is "which routes do *all* riders need more buses on?" The data are app trips, which cover only riders who use the app.

**Step 2: the collection method.** Using the app requires a smartphone and a choice to use it. People who do not have one, or choose not to, are missing from the data.

**Step 3: compare with the population.** In Figure 1, riders aged 65 and over are 20% of all riders but only 3% of the app data; their representation is 3 ÷ 20 = 0.15 of what it should be. Riders aged 18 to 34 are 70% of the app data against 50% of all riders: 70 ÷ 50 = 1.4 times their true share. (These figures are fictional, and the ratios were computed and checked.)

**Step 4: the consequence.** A program that adds buses where the app shows most trips would favour routes used by younger riders. Routes that older riders rely on could be under-served over and over, which is a systemic, repeated unfair outcome for a specific group: algorithmic bias.

**Step 5: possible responses.** Collect additional data in other ways (for example on-bus counts), weight the data to match the real mix of riders, or state clearly that the conclusions apply only to app users.

**Check.** The answer names the group affected, the cause in the collection method, the evidence and a remedy. Privacy also deserves a mention: any app trip data identifies where a person lives and goes, so the city should store it securely and collect only what it needs.

## Worked example 2: how bad data breaks a program

**Task.** Trace the two sensor classes on the readings 20.5, −999.0 (no reading) and 22.5, and decide which average is believable.

**Step 1: the naive sensor.** Every value, including the code −999.0, is added and counted.

| Call | `sum` | `count` |
|---|---|---|
| start | 0.0 | 0 |
| `record(20.5)` | 20.5 | 1 |
| `record(-999.0)` | −978.5 | 2 |
| `record(22.5)` | −956.0 | 3 |

`average()` is −956.0 ÷ 3, which is about −318.67. The compiled program printed `-318.6666666666667`. That is physically impossible for a room temperature, because a "no reading" code was treated as data. The program works incorrectly.

**Step 2: the clean sensor.** It checks for the code first.

| Call | Action | `sum` | `count` | `skipped` |
|---|---|---|---|---|
| start | | 0.0 | 0 | 0 |
| `record(20.5)` | add | 20.5 | 1 | 0 |
| `record(-999.0)` | skip | 20.5 | 1 | 1 |
| `record(22.5)` | add | 43.0 | 2 | 1 |

`average()` is 43.0 ÷ 2 = 21.5, and one reading was skipped. The program printed `21.5 1`.

**Step 3: an edge case.** If a clean sensor receives only the code, then `count` is 0, and `sum / count` is `0.0 / 0`, which is `NaN` (not a number) for a `double`. A careful programmer would test for `count == 0` before dividing. This shows that incomplete data must be handled by the design, not only by the data.

**Check.** On the readings 10.0, 12.0, −999.0, 14.0 the naive average is −240.75 but the clean average is 12.0, with one skipped, both confirmed by running the code.

## Common misconceptions

- **"Algorithmic bias means a programmer wrote an unfair rule on purpose."** It is defined by the unfair, repeated outcomes for a group, whatever the intent. Often the cause is data.
- **"More data fixes bias."** Not if the collection method keeps leaving the same people out.
- **"A single wrong answer is algorithmic bias."** It must be systemic and repeated and affect a specific group.
- **"If data is anonymous, privacy is no longer a concern."** Combinations of details can still identify people, and the safeguards (collect less, store securely) still matter.
- **"A data set that answers one question answers all related questions."** It may not fit a different question or group.
- **"Missing data is harmless because it is just missing."** A program that counts a missing-value code as a real value gives wrong results.

## Where this leads

Topic 4.2 shows how to represent and plan algorithms for data sets, and Topics 4.3 to 4.5 give you the array code to process them. [Introduction to Using Data Sets](/advanced-course-resources/computer-science-a/4-2-introduction-using-data-sets-study-guide/) is next. Practise with the [practice questions](/advanced-course-resources/computer-science-a/4-1-ethical-social-issues-data-collection-practice/), consult the [revision notes](/advanced-course-resources/computer-science-a/4-1-ethical-social-issues-data-collection-revision-notes/) and tick the [topic checklist](/advanced-course-resources/computer-science-a/4-1-ethical-social-issues-data-collection-checklist/). To recall the broader impact of programs, see [Impact of Program Design](/advanced-course-resources/computer-science-a/3-2-impact-program-design-study-guide/).
