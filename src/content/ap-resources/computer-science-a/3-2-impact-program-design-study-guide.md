---
resourceId: "mb-ap-csa-3.2-study-guide"
title: "Impact of Program Design: Study Guide (Computer Science A 3.2)"
description: "Understand system reliability, testing under a variety of conditions, the beneficial and harmful effects of programs, unintended consequences, and legal and intellectual property issues such as open source."
course: "computer-science-a"
unit: 3
topics: ["3.2"]
resourceType: "study-guide"
prerequisites:
  - "The idea of a class as a design for objects (Topic 3.1)"
  - "Basic int arithmetic and its range (Topic 1.5)"
prerequisiteResources: ["mb-ap-csa-3.1-study-guide"]
learningObjectives:
  - "Define system reliability and explain why programmers test with a variety of conditions"
  - "Design a small set of test cases that includes ordinary, boundary and extreme values"
  - "Describe both beneficial and harmful effects of a program on society, the economy and culture, including unintended effects"
  - "Explain the legal and intellectual property issues in reusing code, including open-source code"
  - "Write a balanced, specific explanation of an impact in context"
skills: ["5", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.2-revision-notes", "mb-ap-csa-3.2-practice", "mb-ap-csa-3.2-checklist"]
next: "mb-ap-csa-3.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "System reliability means a program performs as expected under stated conditions without failure; programmers test with a variety of conditions to maximise it."
  - "Programs affect society, the economy and culture, and the effects can be beneficial, harmful or both."
  - "A program built for one purpose can have unintended harmful effects beyond that purpose."
  - "Reused code raises legal and intellectual property issues: open-source code is free to use under its terms; other code needs permission and often payment."
  - "A good explanation names who is affected, what the effect is, and why it happens."
faqs:
  - {"question": "Does this topic need me to write code?", "answer": "Not much. It is mainly about explaining ideas in words, but you may be asked to reason about a code segment that fails under some conditions, and to choose test values that would expose the failure."}
  - {"question": "How balanced must my answers about impact be?", "answer": "Aim to name at least one benefit and one possible harm, tie each to a specific group of people and to a feature of the program, and avoid sweeping statements. A multiple-choice item usually has exactly one option that is both accurate and specific."}
  - {"question": "What does open source mean in this course?", "answer": "Open-source code is published so it is free to use, usually under a licence with conditions. Code that is not published as open source needs the owner's permission, which often means paying, before you include it in your own program."}
  - {"question": "Is a program that never crashes automatically reliable?", "answer": "No. Reliability means doing what is expected under the stated conditions. A program that runs without crashing but returns the wrong value has still failed."}
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Programs affect people, so design is not only technical

When you design a class in Topic 3.1 you decide what data it holds and what it does. This topic asks a larger question: what happens to the people who use the program, and to people who never touch it but are affected by it? Whether a route-planning app sends traffic down quiet streets, or a shop's stock program decides what gets reordered, programs reach out into society, the economy and culture. The skill assessed here is to **explain the social and ethical implications of computing systems**, and to do so specifically rather than vaguely.

Three ideas organise the topic: reliability, impact, and legal and intellectual property issues.

## System reliability

**System reliability** is the ability of a program to perform its tasks as expected, under stated conditions, without failure. Three words matter:

- **As expected.** A program that does not crash but returns the wrong answer is not reliable.
- **Under stated conditions.** Every method has an intended range of inputs. Reliability is judged inside that range (and a good design also decides what to do outside it).
- **Without failure.** An exception, a wrong value or an endless loop is a failure.

Programmers should make an effort to maximise reliability by **testing the program with a variety of conditions**. A good test set is not just one typical input repeated. It contains:

- **ordinary values**, in the middle of the stated range;
- **boundary values**, exactly at the edges of the range (0, the maximum allowed, one less than the maximum);
- **extreme values**, such as very large numbers that stress the range of an `int`;
- **special cases**, such as an empty string or a zero where division is involved.

Testing can show that a failure exists; it can never prove that none exists. That is why a *variety* matters more than a large number of similar tests.

## Impact: beneficial, harmful, and unintended

Creating programs has impacts on society, the economy and culture. These impacts can be **beneficial and harmful**, and the same program may do both. A program meant to fill a need or solve a problem can also have **unintended harmful effects beyond its intended use**.

A few patterns help you reason:

- A program that automates a task can **save time and money** and also **change or remove jobs**.
- A program that connects people can **share ideas and services widely** and also **spread inaccurate information quickly**.
- A program that recommends something (a route, a product, a video) can **save effort** and also **shape behaviour in ways nobody planned**, for example by sending large amounts of traffic through a residential street.
- A program that works well for the group it was tested on can **fail for a group that was not represented in the testing**. (Topic 4.1 returns to this as algorithmic bias.)

When the exam asks about impact, a strong answer is concrete: it names a **group affected**, the **effect**, and a **reason it happens** that links back to what the program does.

<figure>
<svg viewBox="0 0 640 270" role="img" aria-labelledby="imp-title imp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="imp-title">One program, several affected groups, with benefits and harms</title>
<desc id="imp-desc">A central box labelled SafeRoute app, a fictional route-planning program. Four arrows lead outward to four boxes. Drivers: benefit, shorter journeys. Residents of side streets: harm, extra traffic that the designers did not intend. Local shops on the main road: harm, fewer passing customers. Emergency services: benefit, clearer main roads, but a possible harm if diverted traffic blocks narrow streets.</desc>
<rect x="0" y="0" width="640" height="270" fill="#ffffff"/>
<rect x="235" y="105" width="170" height="60" rx="6" fill="#dbe4f0" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="132" text-anchor="middle" font-size="15" font-weight="bold" fill="#1d2b44">SafeRoute app</text>
<text x="320" y="152" text-anchor="middle" font-size="12" fill="#1d2b44">(fictional route planner)</text>
<g stroke="#1d2b44" stroke-width="2" fill="none"><path d="M235 125 L150 70"/><path d="M405 125 L490 70"/><path d="M235 145 L150 200"/><path d="M405 145 L490 200"/></g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2"><rect x="20" y="20" width="220" height="60" rx="6"/><rect x="400" y="20" width="220" height="60" rx="6"/><rect x="20" y="190" width="220" height="60" rx="6"/><rect x="400" y="190" width="220" height="60" rx="6"/></g>
<g fill="#1d2b44" font-size="12">
<text x="30" y="42" font-weight="bold">Drivers</text><text x="30" y="62">Benefit: shorter journeys</text>
<text x="410" y="42" font-weight="bold">Residents of side streets</text><text x="410" y="62">Harm: unplanned extra traffic</text>
<text x="30" y="212" font-weight="bold">Shops on the main road</text><text x="30" y="232">Harm: fewer passing customers</text>
<text x="410" y="212" font-weight="bold">Emergency services</text><text x="410" y="232">Mixed: clearer main road, blocked lanes</text></g>
</svg>
<figcaption>Figure 1. A fictional route-planning program and four groups it affects. Each box states the group and a benefit or harm in words, so the meaning does not depend on colour. One design choice has effects well beyond its intended use.</figcaption>
</figure>

## Legal issues and intellectual property

Programmers often **reuse code written by others**. That raises legal and intellectual property questions.

- **Open-source code** is published and free to use, usually under a licence that sets conditions (for example, that you credit the author). Using it as the licence allows saves time and allows many people to review and improve the code.
- Code that is **not published as open source** belongs to its owner. You must **obtain permission, and often pay**, before you include it in your own program. Copying it without permission is a legal problem and an ethical one.
- Your own program is also your **intellectual property**: you decide how it can be used, subject to any licences covering code you reused in it.

Reuse is not wrong. It is the normal way software is built and is the basis of libraries such as the `String` and `Math` classes you already use. The point is that reuse must respect the owner's terms.

## Worked example 1: analysing an impact in context

**Task.** A fictional city introduces *SafeRoute*, a free app that sends drivers on the quickest route using live traffic data. Evaluate its impact, naming one benefit, one harmful or unintended effect and who is affected by each, with a reason.

**Step 1: state the intended purpose.** To shorten journeys by avoiding congestion.

**Step 2: find a benefit, tied to a group and a mechanism.** *Drivers* spend less time travelling, because the app reroutes them away from slow main roads using current traffic data. (Mechanism: live data and a quickest-route calculation.)

**Step 3: look beyond the intended use for an unintended effect.** The quickest alternative to a congested main road is often a quiet residential street. When thousands of drivers are redirected at once, *residents of those streets* experience much more traffic and noise than the street was built for. (Mechanism: every user is given the same advice at the same moment, so the advice itself concentrates traffic.)

**Step 4: note a second group and, if possible, a way to reduce the harm.** *Shops on the main road* may lose passing trade. The programmers could limit how many drivers are sent down any one residential street, or let the council mark streets as protected.

**Step 5: conclude without exaggeration.** The program benefits many individual drivers and can harm particular other people. Neither claim is "the app is good" or "the app is bad"; the answer states both effects and says what decides the balance.

**Check.** The answer names two different groups, one effect each, one mechanism each, and a mitigation. That specific structure is what a strong written or multiple-choice answer shows.

## Worked example 2: testing a method under a variety of conditions

**Task.** A fictional storage-tank program uses the method below. Its stated condition is that `capacity` is positive and `used` is between 0 and `capacity` inclusive. Design a variety of tests and decide whether the method is reliable.

```java
class Gauge
{
    /** Precondition: capacity > 0 and 0 <= used <= capacity. */
    public static int percentFull(int used, int capacity)
    {
        return used * 100 / capacity;
    }
}
```

**Step 1: ordinary value.** `percentFull(50, 200)` returns `50 * 100 / 200 = 5000 / 200 = 25`. This is expected.

**Step 2: boundaries of `used`.** `percentFull(0, 200)` returns `0`. `percentFull(200, 200)` returns `100`. Both are expected.

**Step 3: a value outside the stated condition.** `percentFull(250, 200)` returns `125`. The method does not fail here, but the stated condition was broken by the caller, so the result is outside what the method promises. A designer might decide to detect it.

**Step 4: the special case.** `percentFull(5, 0)` throws an `ArithmeticException` with the message `/ by zero`, because integer division by zero is not allowed. The condition said `capacity` is positive, so this is another violation of the specification, but a robust program might choose to handle it.

**Step 5: an extreme value within the stated condition.** `percentFull(30000000, 40000000)` satisfies the condition (0 <= 30,000,000 <= 40,000,000). The product `30000000 * 100` is 3,000,000,000, which is more than `Integer.MAX_VALUE` (2,147,483,647). The `int` overflows to −1,294,967,296, and dividing by 40,000,000 gives **−32**, not 75. The method printed `-32` when run.

| Test | Within the stated condition? | Result | As expected? |
|---|---|---|---|
| `(50, 200)` | yes | 25 | yes |
| `(0, 200)` | yes (boundary) | 0 | yes |
| `(200, 200)` | yes (boundary) | 100 | yes |
| `(250, 200)` | no | 125 | outside condition |
| `(5, 0)` | no | exception `/ by zero` | outside condition |
| `(30000000, 40000000)` | yes (extreme) | −32 | **no: a failure** |

**Conclusion.** The method is **not reliable**, because an input inside its stated range produces a wrong result. The failure was found only because an *extreme* value was tested, not another ordinary one. A safer version might use a `long` product or reorder the arithmetic, and it might also return a special value such as −1 when the inputs break the condition:

```java
class GaugeSafe
{
    /** Returns -1 when the inputs are outside the stated conditions. */
    public static int percentFull(int used, int capacity)
    {
        if (capacity <= 0 || used < 0 || used > capacity)
        {
            return -1;
        }
        return used * 100 / capacity;
    }
}
```

The safe version returns `25` for `(50, 200)` and `-1` for `(250, 200)` and `(5, 0)`. Note that it still does not fix the overflow in the product `used * 100`, so the extreme value test is still needed after any redesign.

## Common misconceptions

- **"A program is reliable if it does not crash."** A wrong answer without an error message is still a failure. Reliability means as expected, under stated conditions.
- **"If it passes my tests, it is correct."** Testing shows that failures exist, not that none do. The value of a test set lies in its variety: ordinary, boundary, extreme and special cases.
- **"Programs are neutral, so they cannot cause harm."** A program does what its designers made it do, at the scale it is used, and can have effects the designers did not intend.
- **"Open source means I can do anything I like with the code."** Open source means published and free to use under a licence; the licence still has conditions.
- **"Impact answers should be all good or all bad."** Strong answers usually contain both, each tied to a group and a reason.
- **"Reusing code is cheating."** Reuse is normal and valuable when done within the owner's terms.

## Where this leads

Reliability returns in Topic 3.5 (writing methods whose behaviour you can state) and in Unit 4, where Topic 4.1 applies the same thinking to data collection, privacy and bias. For practice on this topic, try the [practice questions](/advanced-course-resources/computer-science-a/3-2-impact-program-design-practice/), reread the [revision notes](/advanced-course-resources/computer-science-a/3-2-impact-program-design-revision-notes/) and tick the [topic checklist](/advanced-course-resources/computer-science-a/3-2-impact-program-design-checklist/). The next topic, [Anatomy of a Class](/advanced-course-resources/computer-science-a/3-3-anatomy-class-study-guide/), starts writing real classes, and you can look back at [Abstraction and Program Design](/advanced-course-resources/computer-science-a/3-1-abstraction-program-design-study-guide/) for the design vocabulary.
