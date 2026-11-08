---
resourceId: "mb-ap-csa-2.1-study-guide"
title: "Algorithms with Selection and Repetition: Study Guide (Computer Science A 2.1)"
description: "Learn algorithms built from sequencing, selection and repetition, with a first-principles explanation, traced Java examples, a diagram, two worked examples and the mistakes to avoid."
course: "computer-science-a"
unit: 2
topics: ["2.1"]
resourceType: "study-guide"
prerequisites:
  - "Variables, assignment and arithmetic expressions from Unit 1"
  - "Printing output with System.out.println"
learningObjectives:
  - "Name the three building blocks of an algorithm and recognise each in a description, a flowchart or code"
  - "Describe an everyday process as an algorithm using written steps or a flowchart"
  - "Explain why the order and nesting of the building blocks changes the outcome"
  - "Trace a simple algorithm by hand and record the result"
skills: ["1", "3"]
studyMinutes: 35
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.1-revision-notes", "mb-ap-csa-2.1-practice", "mb-ap-csa-2.1-checklist"]
next: "mb-ap-csa-2.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "Every algorithm is built from three blocks: sequencing (steps in order), selection (a true or false decision picks a path) and repetition (a process repeats until a goal is met)."
  - "Selection asks a yes or no question once; repetition asks it again and again."
  - "The order and the nesting of the blocks decide the outcome: a decision inside a loop is not the same algorithm as a loop inside a decision."
  - "Flowcharts and numbered steps in plain language are the two ways of writing an algorithm down before any code exists."
  - "Tracing means following the steps with real values and recording what changes."
faqs:
  - question: "Do I have to know Java syntax for Topic 2.1?"
    answer: "No. This topic is about the design of an algorithm, which you can write in plain language or as a flowchart. The Java in this guide only shows how the same idea looks in code. The syntax is taught properly from Topic 2.3 onwards."
  - question: "What is the difference between selection and repetition?"
    answer: "Selection makes a decision once and follows one of two or more paths. Repetition runs a group of steps again and again while a condition holds. A loop usually contains a selection, but a selection by itself never repeats."
  - question: "Can an algorithm use all three building blocks at once?"
    answer: "Yes, and most useful ones do. The usual pattern is a repetition that contains a selection, such as going through every order and counting only the ones that qualify."
  - question: "Is a flowchart required in an answer?"
    answer: "No. On the exam you answer in Java. Flowcharts are a thinking tool: they help you plan the order of steps and spot a missing path before you write code."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## What is an algorithm made of?

An **algorithm** is a finite list of precise steps that solves a problem or completes a task. A recipe is an algorithm. So is the routine you follow to get to school or the rule a vending machine uses to decide whether to give change. The exam does not ask you to invent clever mathematics here. It asks you to see how any algorithm, however large, is assembled from just three **building blocks**.

1. **Sequencing**: steps happen one after another, in the order written. Nothing is skipped and nothing is repeated.
2. **Selection**: the algorithm makes a decision. A question with a true or false answer chooses which path the execution follows.
3. **Repetition**: a group of steps happens again and again until a desired outcome is reached.

Programmers also call repetition **iteration** or **looping**. Selection is also called **branching** or a **conditional**. Different words, same ideas. Unit 1 gave you sequencing: statements run top to bottom. Unit 2 adds the other two, and every program you write in this course, including each free-response question, is a combination of these three blocks.

## Selection: one decision, one path

Selection happens when the choice of what to do next depends on a **true or false decision**. Think of a traffic light for a pedestrian: *if the light is green, cross; otherwise, wait.* The question "is the light green?" has exactly two possible answers. Whichever answer comes up, exactly one of the two paths runs, and then the algorithm carries on with whatever follows.

Selection can have several branches ("if it is Monday do this, otherwise if it is Tuesday do that, otherwise do something else"), but the pattern is the same: a question is asked, one path is followed, and the question is not asked again unless something else repeats it.

## Repetition: do it again until it is done

Repetition happens when a process **repeats itself until a desired outcome is reached**. "Stir the soup until it boils." "Keep walking until you reach the corner." "Check each exam script, one after another, until none are left." Every repetition needs two things to be well defined:

- a **stopping condition**, the outcome that ends the repetition (the soup boils, the scripts run out);
- something that **moves toward** that outcome each time round (the heat rises, the pile gets smaller).

If nothing moves toward the stopping condition, the algorithm never finishes. You will meet this again as the *infinite loop* in Topic 2.7.

## Order matters

The third essential idea in this topic is the easiest to underestimate: **the order in which sequencing, selection and repetition are used contributes to the outcome of the algorithm.** There are two kinds of order.

- **Order of steps (sequencing).** "Put on socks, then put on shoes" is not the same algorithm as "put on shoes, then put on socks".
- **Nesting of the blocks.** A selection placed *inside* a repetition is asked every time round. A repetition placed *inside* a selection is only reached if the decision comes out the right way, and then it runs to the end. The same three blocks in a different nesting give a different algorithm.

## Writing an algorithm down

Before writing code you should be able to describe the algorithm. There are two standard ways.

**Numbered steps in plain language.** Use short, exact sentences. Mark the decision with the word *if* and the repeat with *repeat* or *while*, and indent the steps that belong inside.

**A flowchart.** Boxes are steps, diamonds are decisions with two exits labelled *yes* and *no* (or *true* and *false*), and arrows show the order. A loop is any arrow that leads back to an earlier box or diamond. Figure 1 shows an algorithm that counts the valid tickets in a pile.

<figure>
<svg viewBox="0 0 560 450" role="img" aria-labelledby="f21-title f21-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="f21-title">Flowchart of an algorithm that counts valid tickets</title>
<desc id="f21-desc">A flowchart. Start, then set count to 0. A diamond asks: is there another ticket? If no, the path goes down the left side to output count and then stop. If yes, a second diamond asks: is the ticket valid? If yes, count becomes count plus 1. The yes branch of the second diamond and its no branch both run along the right side and back up to the first diamond, which forms a loop.</desc>
<defs><marker id="ah-f21" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="450" fill="#ffffff"/>
<rect x="190" y="8" width="120" height="28" rx="14" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="250" y="26.55" font-size="13" text-anchor="middle" fill="#1d2b44">Start</text>
<line x1="250" y1="36" x2="250" y2="52" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f21)"/>
<rect x="170" y="52" width="160" height="30" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="250" y="71.55" font-size="13" text-anchor="middle" fill="#1d2b44">count = 0</text>
<line x1="250" y1="82" x2="250" y2="104" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f21)"/>
<polygon points="250,104 345,140 250,176 155,140" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="250" y="136.7" font-size="12" text-anchor="middle" fill="#1d2b44">is there another</text>
<text x="250" y="151.7" font-size="12" text-anchor="middle" fill="#1d2b44">ticket?</text>
<line x1="250" y1="176" x2="250" y2="202" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f21)"/>
<text x="258" y="194" font-size="12" text-anchor="start" fill="#1d2b44">yes</text>
<polygon points="250,202 335,240 250,278 165,240" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="250" y="236.7" font-size="12" text-anchor="middle" fill="#1d2b44">is the ticket</text>
<text x="250" y="251.7" font-size="12" text-anchor="middle" fill="#1d2b44">valid?</text>
<line x1="250" y1="278" x2="250" y2="300" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f21)"/>
<text x="258" y="293" font-size="12" text-anchor="start" fill="#1d2b44">yes</text>
<rect x="170" y="300" width="160" height="30" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="250" y="319.55" font-size="13" text-anchor="middle" fill="#1d2b44">count = count + 1</text>
<polyline points="335,240 450,240" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="392" y="232" font-size="12" text-anchor="middle" fill="#1d2b44">no</text>
<polyline points="330,315 450,315 450,140 345,140" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f21)"/>
<polyline points="155,140 60,140 60,387 150,387" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f21)"/>
<text x="108" y="132" font-size="12" text-anchor="middle" fill="#1d2b44">no</text>
<rect x="150" y="372" width="200" height="30" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="250" y="391.55" font-size="13" text-anchor="middle" fill="#1d2b44">output count</text>
<line x1="250" y1="402" x2="250" y2="414" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f21)"/>
<rect x="200" y="414" width="100" height="26" rx="13" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="250" y="431.55" font-size="13" text-anchor="middle" fill="#1d2b44">Stop</text>
</svg>
<figcaption>Figure 1. A flowchart that uses all three building blocks: sequencing (set count, then ask), selection (is the ticket valid?) and repetition (the arrow back to the first question). The path on the left is taken only when there are no more tickets.</figcaption>
</figure>

Reading the diagram: the first box sets `count` to 0. The first diamond asks whether there is another ticket. If so, the second diamond asks whether it is valid. A valid ticket adds 1 to the count. Both exits of the second diamond lead back up to the first diamond, so the question "another ticket?" is asked again. When the answer is no, the path on the left leaves the loop and outputs the count. The loop is the repetition; the second diamond is the selection; everything else is sequencing.

## What the three blocks look like in Java

You will study the syntax over the next topics, so treat this first example as a preview. A bakery gives a free bun with every third order. This program checks orders 1 to 10 and counts the free buns.

```java
public class FreeBuns {
    public static void main(String[] args) {
        int freeBuns = 0;                       // sequencing: set up first
        for (int order = 1; order <= 10; order++) {   // repetition: orders 1 to 10
            if (order % 3 == 0) {               // selection: every third order?
                freeBuns++;
            }
        }
        System.out.println("Free buns: " + freeBuns);   // sequencing: report afterwards
    }
}
```

**Output:**

```text
Free buns: 3
```

The orders that qualify are 3, 6 and 9, so the answer is 3. Notice that the `if` is *inside* the loop: it is asked ten times, once per order. The `println` comes *after* the loop, so it runs once.

## Tracing an algorithm

**Tracing** means following the steps by hand with real values, writing down what each variable holds. It is the single most useful exam habit in this unit. For the bakery loop above:

| `order` | `order % 3 == 0`? | `freeBuns` after this pass |
|---|---|---|
| 1 | false | 0 |
| 2 | false | 0 |
| 3 | true | 1 |
| 4 | false | 1 |
| 5 | false | 1 |
| 6 | true | 2 |
| 7 | false | 2 |
| 8 | false | 2 |
| 9 | true | 3 |
| 10 | false | 3 |

Keep one row per pass and one column per thing that changes. A good trace catches mistakes that reading the code does not.

## Worked example 1: designing an algorithm from a description

**Question.** A school library charges a late fee of 10 cents for each day a book is overdue, but never more than 50 cents in total. Describe an algorithm that works out the fee for a book that is 7 days overdue by looking at one day at a time. Identify which block each part uses, and trace it.

**Step 1: decide what must be remembered.** We need the running fee, so we set `fee` to 0 at the start (sequencing).

**Step 2: find the repeated action.** For each overdue day we add 10 cents. That is repetition: the same step for day 1, day 2, and so on, up to day 7.

**Step 3: find the decision.** The fee must stop growing at 50 cents. Inside each pass we ask: *is the fee already 50?* If it is, we do not add; if it is not, we add 10. That is selection inside repetition.

**The algorithm in words.**

1. Set `fee` to 0.
2. Repeat for day 1 up to day 7:
    1. If `fee` is less than 50, add 10 to `fee`.
3. Output `fee`.

**Trace.**

| day | `fee` < 50 before the day? | `fee` after the day |
|---|---|---|
| 1 | yes (0) | 10 |
| 2 | yes (10) | 20 |
| 3 | yes (20) | 30 |
| 4 | yes (30) | 40 |
| 5 | yes (40) | 50 |
| 6 | no (50) | 50 |
| 7 | no (50) | 50 |

**Answer:** the fee is 50 cents. **Check:** 7 days at 10 cents would be 70 cents, and the cap reduces it to 50, so the result is sensible. Days 6 and 7 pass through the decision but take the path that does nothing.

## Worked example 2: the same blocks in a different order

**Question.** Two algorithms use the same three ideas on the four consecutive whole numbers that start at `start`. Starting with `start = 3`, what does each one produce?

- **Algorithm 1.** Set `sum` to 0. Repeat four times: if the current number is even, add it to `sum`. Output `sum`.
- **Algorithm 2.** Set `sum` to 0. If the *first* number is even, repeat four times: add the current number to `sum`. Output `sum`.

In Algorithm 1 the decision is inside the repetition. In Algorithm 2 the repetition is inside the decision. Here is each one in Java.

```java
public class OrderMatters {
    public static void main(String[] args) {
        int start = 3;

        int sum1 = 0;
        for (int n = start; n < start + 4; n++) {
            if (n % 2 == 0) {
                sum1 += n;
            }
        }

        int sum2 = 0;
        if (start % 2 == 0) {
            for (int n = start; n < start + 4; n++) {
                sum2 += n;
            }
        }

        System.out.println("Algorithm 1: " + sum1);
        System.out.println("Algorithm 2: " + sum2);
    }
}
```

**Output:**

```text
Algorithm 1: 10
Algorithm 2: 0
```

**Trace of Algorithm 1.** The numbers are 3, 4, 5, 6. Only 4 and 6 are even, so `sum` becomes 0 + 4 + 6 = 10.

**Trace of Algorithm 2.** The decision is made once, about the first number, 3. It is odd, so the condition is false and the loop is **never reached**. `sum` stays 0.

**Conclusion.** The two algorithms use exactly the same building blocks and give different results (10 and 0). Changing the nesting changed the algorithm. If you change the start value to 4, Algorithm 1 still gives 4 + 6 = 10 (the numbers are 4, 5, 6, 7), but Algorithm 2 now runs its loop and adds all four numbers: 4 + 5 + 6 + 7 = 22.

## Common misconceptions

- **"Selection and repetition are the same because both use a condition."** Both use a true or false test, but selection asks it once and chooses a path, while repetition keeps asking it to decide whether to go round again.
- **"A loop always runs at least once."** Whether a loop body runs depends on its condition. A process that is already finished when you start has nothing left to repeat. You will see precisely how in Topic 2.7.
- **"If the steps are all there, the order does not matter."** Order and nesting both matter. Moving one step across a decision or into a loop changes the output, as the two algorithms above show.
- **"A flowchart arrow back to an earlier box is a mistake."** It is exactly how a flowchart shows repetition.
- **"A decision inside a loop only happens once."** It happens on every pass, with the current values.
- **"An algorithm is code."** An algorithm is a plan. It can be written in words, in a flowchart or in any language. Code is one way of writing it down.
- **Forgetting the stopping condition.** A repetition with no outcome that ends it is not an algorithm, because an algorithm must finish.

## Where this leads

Selection becomes `if` statements in Topic 2.3 after you learn how to write true or false expressions in Topic 2.2. Repetition becomes `while` and `for` loops in Topics 2.7 and 2.8. Practise the vocabulary and tracing now with the [practice questions](/advanced-course-resources/computer-science-a/2-1-algorithms-selection-repetition-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/2-1-algorithms-selection-repetition-revision-notes/) and test yourself with the [checklist](/advanced-course-resources/computer-science-a/2-1-algorithms-selection-repetition-checklist/). Next, read the [Topic 2.2 study guide](/advanced-course-resources/computer-science-a/2-2-boolean-expressions-study-guide/) on Boolean expressions.
