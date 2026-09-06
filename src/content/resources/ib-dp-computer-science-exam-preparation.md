---
title: "IB DP Computer Science: Paper-by-Paper Exam Preparation"
resourceType: "exam-preparation"
subject: "computer-science"
level: ["ib"]
topic: "Exam preparation -- Papers 1 and 2"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
order: 1
description: "Paper-by-paper exam preparation for IB Diploma Programme Computer Science -- how to use the pre-seen Paper 1 case study, pseudocode practice for Paper 2, a worked scenario and a before/during-exam checklist."
author: "marlbridge-academic-team"
publishedDate: 2026-09-07
featured: false
---

The [assessment revision notes](/resources/ib-dp-computer-science-assessment-revision-notes/) set out
what Paper 1 and Paper 2 weigh and test. These notes turn that into an exam-day plan -- how to use
the pre-seen case study, what to practise for Paper 2's algorithmic questions, and a worked scenario
-- alongside the [full syllabus guide](/resources/ib-dp-computer-science-syllabus-guide/) and
[subject overview](/resources/ib-dp-computer-science-subject-guide/) already on the site.

## Paper 1: use the pre-seen case study as active research material

Paper 1's case study is released well before the exam, so questions drawing on it are, in effect,
partially predictable -- research and familiarity built beforehand translate directly into faster,
more confident answers. Treat the case study as material to actively analyse and annotate over the
weeks before the exam, not background reading to skim once: identify likely question angles (how
would this organisation's system need to scale, what security concerns would it face, what
trade-offs would its design involve) and prepare short notes on each, since case-study questions
carry a meaningful share of Paper 1's marks and reward genuine familiarity over surface recognition.

Paper 1's extended-response questions on core concepts otherwise use command terms consistent with
the DP sciences group -- **define**, **identify**, **outline** at the lower tier; **explain**,
**describe**, **compare** in the middle; **evaluate**, **discuss**, **justify** at the top, often
applied directly to the case study.

## Paper 2: pseudocode, not a specific programming language

Paper 2 assesses algorithmic thinking at the level of **pseudocode** -- reasoning about an
algorithm's logic -- regardless of which language you actually program in for coursework. The single
most common exam-preparation mistake is revising Paper 2 around a specific language's syntax; the
exam instead uses command terms like **trace**, **construct** and **write an algorithm**, testing
whether you can follow, build or design a solution's logic on paper.

**Exam-preparation priority**: practise tracing an algorithm by hand -- writing out variable values
line by line as a piece of pseudocode executes -- since this is a mechanical skill that improves
quickly with deliberate, repeated practice, and directly underpins both "trace" questions and
"construct"/"write an algorithm" questions, where you need to predict how your own written algorithm
would behave before committing it to the answer.

## Worked practice scenario: tracing a pseudocode loop

A Paper 2-style question gives the following pseudocode and asks you to trace it, stating the value
of `total` after the loop finishes, for the input list `[4, 7, 2, 9]`.

```
total = 0
FOR EACH value IN list
    IF value > 5 THEN
        total = total + value
    END IF
END FOR
OUTPUT total
```

```
Trace table:
  value = 4   ->  4 > 5 is FALSE   ->  total stays 0
  value = 7   ->  7 > 5 is TRUE    ->  total = 0 + 7 = 7
  value = 2   ->  2 > 5 is FALSE   ->  total stays 7
  value = 9   ->  9 > 5 is TRUE    ->  total = 7 + 9 = 16

Output: total = 16
```

A trace-table answer like this -- one row per iteration, showing the condition checked and the
variable's value after each step -- is exactly the structured working "trace" questions reward.
Writing out each iteration explicitly, rather than trying to compute the final answer mentally, both
reduces careless errors and shows the working examiners need to award method marks even if the final
value is wrong.

## Before/during exam checklist

- **Before the exam**: research and annotate the Paper 1 pre-seen case study across several weeks,
  not just once; practise hand-tracing pseudocode loops and conditionals until a trace table is
  automatic; practise writing short algorithms in pseudocode from a described problem, not in a
  specific programming language's syntax.
- **During Paper 1**: draw explicitly on prior research into the case study where a question
  references it, rather than answering as if it were entirely unfamiliar.
- **During Paper 2**: always build a trace table for "trace" questions rather than computing the
  answer mentally; for "construct" or "write an algorithm" questions, briefly trace your own written
  algorithm against a simple example before finalising it, to catch logic errors before submitting.
- **On every paper**: match your answer's command term to the question -- a "define" or "identify"
  question needs a short, precise answer; "evaluate," "discuss" and "justify" need a reasoned
  judgement.

## Self-test

1. Why is Paper 1's case study, in effect, partially predictable exam content?
2. What is the most common exam-preparation mistake for Paper 2, and why is it a mistake?
3. Using the worked scenario's pseudocode and the input list [4, 7, 2, 9], what is the value of
   `total` after the loop finishes?
4. Why does building a trace table help even when the final traced value is wrong?
5. What should you do before finalising a written algorithm on a "construct" or "write an algorithm"
   question?

**Answers:** 1. Because it is released well before the exam, so research and familiarity built
beforehand translate directly into faster, more confident answers on questions drawing on it. 2.
Revising around a specific programming language's syntax, when Paper 2 actually assesses algorithmic
logic in pseudocode regardless of which language a student uses in coursework. 3. 16 (0 + 7 + 9,
since only values greater than 5 -- namely 7 and 9 -- are added to the running total). 4. Because a
clear, step-by-step trace table shows the working and method used, which lets examiners award method
marks even if a small error means the final traced value is incorrect. 5. Briefly trace the written
algorithm against a simple example to check its logic works as intended, catching errors before
committing to the final answer.

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject
Brief -- Sciences: Computer Science*, first assessment 2027, published
2024 -- the same source cited by the
[assessment revision notes](/resources/ib-dp-computer-science-assessment-revision-notes/) and
[full syllabus guide](/resources/ib-dp-computer-science-syllabus-guide/). The worked scenario above
is an original example written for this resource, not a reproduction of any official past or sample
paper question.
