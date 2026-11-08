---
title: "IB DP Computer Science B.4: Abstract Data Types -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["ib"]
topic: "B.4 -- Abstract data types (HL only)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 4
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-b"
    subtopic: "ib-dp-computer-science-b-4"
description: "Original warm-up questions with answers for IB DP Computer Science B.4 Abstract data types (HL only): ADT ideas, abstraction and what the 2027 brief says."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: new overview practice page; the subject brief lists no B.4 ADTs or outcomes, so questions are brief-based plus general ADT warm-ups, clearly labelled; replace or extend once checked against the full IB guide; please review."
publishedDate: 2026-11-08
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

Related: [B.4 Abstract data types study guide](/resources/ib-dp-computer-science-b4-abstract-data-types/)
and [revision notes](/resources/ib-dp-computer-science-b4-abstract-data-types-revision-notes/).

B.4 is HL only. The IB's public subject brief for the 2027 course does not list which abstract data types B.4 covers; that is in the full DP guide. Section A checks what the brief says. Section B contains **general** warm-up questions on the idea of an abstract data type, not mapped to specific IB outcomes, to use while you work through the full guide.

## Section A: the course and assessment

**1.** State the level at which B.4 is studied and its recommended teaching hours. **[2]**

**2.** Describe how B.4 is assessed. **[2]**

## Section B: general ADT warm-ups

**3.** Explain what is meant by an abstract data type. **[2]**

**4.** Explain how an abstract data type is an example of abstraction. **[2]**

**5.** A programmer designs an ADT called `Counter` with the operations `reset()` (sets the value to 0), `increment()` (adds 1) and `getValue()` (returns the value). Starting from a new `Counter` after `reset()`, the operations `increment()`, `increment()`, `reset()`, `increment()` are carried out. State the value returned by `getValue()`. **[1]**

**6.** Give one advantage of separating an ADT's operations from its implementation. **[2]**

## Answers

**1.** HL only [1]; 23 hours at HL (0 at SL) [1].

**2.** On Paper 2 [1], through additional questions for HL focused on OOP and abstract data types [1].

**3.** A data type defined by the values it can hold and the operations that can be performed on it [1], independently of how it is implemented [1].

**4.** The user of the ADT works only with what it does (its operations) [1], and the detail of how the data is stored is hidden or ignored, which is abstraction: keeping only the detail needed [1].

**5.** After reset 0; increment 1; increment 2; reset 0; increment 1. `getValue()` returns **1** [1].

**6.** The implementation can be changed or improved without changing the programs that use the ADT [1], because they only use its operations; it also lets programmers use the ADT without knowing its internal details [1].

## Where marks are usually lost

- Defining an ADT by one particular implementation.
- Losing track of state when tracing a sequence of operations; write the value after every step.

## Frequently asked questions

**Why are some questions labelled general?**
The public subject brief does not list the B.4 data types, so general warm-ups are used until you check the full guide's outcomes.

**Do SL students need these questions?**
No. B.4 is HL only.
