---
title: "IB DP Computer Science B.1: Computational Thinking -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["ib"]
topic: "B.1 -- Computational thinking"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 4
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-b"
    subtopic: "ib-dp-computer-science-b-1"
description: "Original practice questions with worked answers on the computational thinking process for IB DP Computer Science B.1: success criteria, decomposition, testing."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: new overview practice page written only from the IB DP Computer Science subject brief (first assessment 2027); questions test the brief's four-part process, not the full guide's detailed outcomes; please review; 2026-11-08: reviewed by harris-khan."
publishedDate: 2026-11-08
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

Related: [B.1 Computational thinking study guide](/resources/ib-dp-computer-science-b1-computational-thinking/)
and [revision notes](/resources/ib-dp-computer-science-b1-computational-thinking-revision-notes/).

These questions practise the computational thinking process as the IB's public subject brief for the 2027 course describes it: specify problems and success criteria, decompose, abstract and generalize, and test and evaluate. The detailed B.1 learning outcomes are in the full DP guide; use your school's copy and official specimen material for exam-style wording.

## Section A

**1.** State the four abilities that computational thinking involves. **[4]**

**2.** Explain why success criteria should be determined when a problem is specified, before a solution is designed. **[2]**

**3.** Distinguish between decomposition and abstraction. **[2]**

## Section B

**4.** A library wants a program that lists every book that is overdue.

**(a)** Specify the problem: state the input, the output and one testable success criterion. **[3]**
**(b)** Decompose the problem into at least three smaller problems. **[3]**
**(c)** Identify two details about each book that are needed and one that can be abstracted away. **[3]**

**5.** A student's solution to question 4 is tested only with a list in which every book is overdue. Evaluate this testing and suggest two further tests. **[4]**

**6.** Explain what is meant by *generalizing* a solution, using the library program as an example. **[2]**

**7.** The internal assessment requires students to develop a computational solution to a real-world problem of their own choosing. Explain how each of the four abilities would be used in the IA. **[4]**

## Answers

**1.** Specify problems in terms of their computational context and determine success criteria [1]; decompose complex real-world problems into more manageable problems [1]; abstract problems and generalize them to enable algorithmic thinking [1]; test and evaluate solutions for improvements [1].

**2.** Success criteria define what the solution must achieve [1], so they guide the design and give a fixed standard to test and evaluate the finished solution against, rather than judging it afterwards by impression [1].

**3.** Decomposition breaks a complex problem into smaller, more manageable problems [1]. Abstraction removes details that do not matter to the solution, keeping only what is needed so an algorithm can be designed [1].

**4. (a)** Input: the list of loans with due dates, and today's date [1]. Output: the titles (and borrowers) of overdue books [1]. Success criterion, e.g. every book whose due date is before today appears in the list and no other book does [1].

**(b)** Any three [1 each]: read the loan data; get today's date; compare each due date with today; collect overdue books; display the list.

**(c)** Needed [2]: title (or book ID) and due date (also accept borrower). Abstracted away [1]: e.g. author, page count, cover colour, shelf position.

**5.** The test only checks one situation [1], so it cannot show that books which are not overdue are excluded, which the success criterion requires [1]. Further tests [2]: a list with no overdue books; a mixed list; a book due exactly today (boundary); an empty list.

**6.** Generalizing means expressing the solution so it works for a wider class of problems, not just the one example [1]; e.g. "select every item whose date is before a given date" could also list expired memberships or late assignments [1].

**7.** One mark per ability linked to the IA [4]: specify the client's problem and agree success criteria; decompose it into parts that can be designed and programmed; abstract the essential data and generalize the processing into algorithms; test the product against the success criteria and evaluate it, recommending improvements.

## Where marks are usually lost

- Success criteria that cannot be tested ("easy to use", "works properly").
- Listing steps of decomposition that are just restatements of the whole problem.
- Calling abstraction "hiding" without saying what detail is removed and why.
- Testing only expected cases, with no boundary or empty-input tests.

## Frequently asked questions

**Are these questions in the IB's style?**
They are written to practise the process described in the subject brief. For exact command terms and mark tariffs, use the IB's specimen papers and the full guide.

**How long should I spend on B.1?**
The brief recommends 5 teaching hours at both SL and HL, but the process is used in every programming task, so practise it alongside B.2.
