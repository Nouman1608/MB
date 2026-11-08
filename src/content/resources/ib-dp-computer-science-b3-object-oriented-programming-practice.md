---
title: "IB DP Computer Science B.3: Object Oriented Programming -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["ib"]
topic: "B.3 -- Object oriented programming (OOP)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 4
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-b"
    subtopic: "ib-dp-computer-science-b-3"
description: "Original warm-up questions with answers for IB DP Computer Science B.3 Object oriented programming: classes, objects, design and the 2027 brief's assessment."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: new overview practice page; the subject brief lists no B.3 outcomes, so questions are general class/object warm-ups plus brief-based assessment questions, clearly labelled; replace or extend once checked against the full IB guide; please review; 2026-11-08: reviewed by harris-khan."
publishedDate: 2026-11-08
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

Related: [B.3 Object oriented programming study guide](/resources/ib-dp-computer-science-b3-object-oriented-programming/)
and [revision notes](/resources/ib-dp-computer-science-b3-object-oriented-programming-revision-notes/).

The IB's public subject brief for the 2027 course names B.3 but does not list its learning outcomes, which are in the full DP guide. Section A therefore checks what the brief does say; Section B is a set of **general** object oriented warm-up questions, written in language-neutral form, to use while you work through your school's copy of the full guide. They are not mapped to specific IB outcomes.

## Section A: the course and assessment

**1.** State the recommended teaching hours for B.3 at SL and at HL. **[2]**

**2.** Explain why SL students must prepare for OOP questions on Paper 2. **[2]**

**3.** State one difference between SL and HL Paper 2 that affects B.3. **[1]**

## Section B: general OOP warm-ups

**4.** Explain the difference between a class and an object. **[2]**

**5.** A program models a school's library. Suggest a class name, two attributes and two methods for the books in the library. **[4]**

**6.** A class `Ticket` has an attribute `price` and a method `applyDiscount(percent)` that reduces the price by that percentage. An object `t` is created with a price of 40.00. State the value of `t.price` after `t.applyDiscount(25)` is called. Show your working. **[2]**

**7.** Explain how the computational thinking step of abstraction is used when choosing the attributes of a class. **[2]**

## Answers

**1.** 7 hours at SL [1]; 23 hours at HL [1].

**2.** The brief says Paper 2 has questions for SL and HL on the three topics in Theme B [1], and B.3 is one of those topics, with 7 SL teaching hours [1].

**3.** HL Paper 2 has additional questions focused on OOP and abstract data types (and is longer: 2 hours against 1 hour 15 minutes) [1].

**4.** A class is a definition (template) of the attributes and methods a kind of thing has [1]; an object is one instance of a class, with its own attribute values [1].

**5.** Class name, e.g. `Book` [1]; attributes, e.g. `title`, `author`, `isOnLoan` [2]; methods, e.g. `lend()`, `returnBook()`, `getTitle()` [1]. Accept any sensible attributes (data) and methods (actions).

**6.** Discount = 25% of 40.00 = 10.00 [1]; new price = 40.00 - 10.00 = **30.00** [1].

**7.** Only the data that matters to the problem is kept as attributes [1]; for example, a library `Book` needs a title and loan status but not the colour of its cover [1].

## Where marks are usually lost

- Describing an object as "a class" or a class as "an object".
- Listing attributes that are actions, or methods that are data.
- Not showing working in tracing questions.

## Frequently asked questions

**Why are some questions labelled general?**
The public subject brief does not list B.3 outcomes, so general warm-ups are used until you check the exact outcomes in the full guide.

**Should I write these answers in Java or Python?**
Either. The brief says programming questions have equivalent Java and Python versions; Section B is language-neutral.
