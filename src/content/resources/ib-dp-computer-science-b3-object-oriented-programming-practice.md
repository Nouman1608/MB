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
reviewNote: "2026-11-08: new overview practice page; the subject brief lists no B.3 outcomes, so questions are general class/object warm-ups plus brief-based assessment questions, clearly labelled; replace or extend once checked against the full IB guide; please review; 2026-11-08: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-08
updatedDate: 2026-11-16
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

Related: [B.3 Object oriented programming study guide](/resources/ib-dp-computer-science-b3-object-oriented-programming/)
and [revision notes](/resources/ib-dp-computer-science-b3-object-oriented-programming-revision-notes/).

The IB's public subject brief for the 2027 course names B.3 but does not list its learning outcomes, which are in the full DP guide. Section A therefore checks what the brief does say; Section B is a set of **general** object oriented warm-up questions, written in language-neutral form, to use while you work through your school's copy of the full guide. They are not mapped to specific IB outcomes. Section C contains longer **general** questions on tracing and designing classes; check the vocabulary against the full guide, especially for any features it marks as HL only.

## Section A: the course and assessment

**1.** State the recommended teaching hours for B.3 at SL and at HL. **[2]**

**2.** Explain why SL students must prepare for OOP questions on Paper 2. **[2]**

**3.** State one difference between SL and HL Paper 2 that affects B.3. **[1]**

## Section B: general OOP warm-ups

**4.** Explain the difference between a class and an object. **[2]**

**5.** A program models a school's library. Suggest a class name, two attributes and two methods for the books in the library. **[4]**

**6.** A class `Ticket` has an attribute `price` and a method `applyDiscount(percent)` that reduces the price by that percentage. An object `t` is created with a price of 40.00. State the value of `t.price` after `t.applyDiscount(25)` is called. Show your working. **[2]**

**7.** Explain how the computational thinking step of abstraction is used when choosing the attributes of a class. **[2]**

**8.** State the purpose of a constructor in a class. **[2]**

**9.** Explain why a class might make an attribute private and provide a method to change it, rather than letting other code change the attribute directly. **[3]**

## Section C: general tracing and design

**10.** A class `BankAccount` has an attribute `balance`, set to 0 by the constructor, and two methods: `deposit(amount)` adds `amount` to `balance`; `withdraw(amount)` subtracts `amount` from `balance` only if `balance` is at least `amount`, otherwise it leaves `balance` unchanged. Two objects are created, `a` and `b`. The calls made are `a.deposit(50)`, `b.deposit(20)`, `a.withdraw(30)`, `b.withdraw(25)`, `a.deposit(5)`. State the final balance of each object and explain why `b.withdraw(25)` has no effect. **[4]**

**11.** Using the `BankAccount` class in question 10, suggest two test cases for `withdraw`, giving the starting balance, the amount and the expected result for each. **[4]**

**12.** A game has `Player` objects. Each has a name, a score that starts at 0, and a method that adds points to the score.

**(a)** Explain why `score` should be an attribute of each object rather than a single variable shared by the whole program. **[2]**
**(b)** Describe what a method `addPoints(n)` should do, including one check it should make on `n`. **[2]**

**13.** Explain how designing a program as a set of classes is an example of decomposition. **[2]**

## Answers

**1.** 7 hours at SL [1]; 23 hours at HL [1].

**2.** The brief says Paper 2 has questions for SL and HL on the three topics in Theme B [1], and B.3 is one of those topics, with 7 SL teaching hours [1].

**3.** HL Paper 2 has additional questions focused on OOP and abstract data types (and is longer: 2 hours against 1 hour 15 minutes) [1].

**4.** A class is a definition (template) of the attributes and methods a kind of thing has [1]; an object is one instance of a class, with its own attribute values [1].

**5.** Class name, e.g. `Book` [1]; attributes, e.g. `title`, `author`, `isOnLoan` [2]; methods, e.g. `lend()`, `returnBook()`, `getTitle()` [1]. Accept any sensible attributes (data) and methods (actions).

**6.** Discount = 25% of 40.00 = 10.00 [1]; new price = 40.00 - 10.00 = **30.00** [1].

**7.** Only the data that matters to the problem is kept as attributes [1]; for example, a library `Book` needs a title and loan status but not the colour of its cover [1].

**8.** A constructor runs when a new object is created (instantiated) [1] and sets the object's attributes to their starting values, often from the arguments passed in [1].

**9.** Other parts of the program cannot change the value in an invalid way [1], because the method can check the new value before accepting it (for example reject a negative price) [1]; the internal representation can also be changed later without changing the code that uses the class (encapsulation) [1].

**10.** `a`: 0 + 50 = 50, 50 - 30 = 20, 20 + 5 = **25** [1]. `b`: 0 + 20 = **20** [1]. `b.withdraw(25)` has no effect because `b`'s balance (20) is less than 25 [1], and each object has its own `balance`, so `a`'s money is not used [1].

**11.** Any two, 2 marks each [4]: balance 50, withdraw 30, expected balance 20 (normal case); balance 20, withdraw 25, expected balance stays 20 (amount too large); balance 30, withdraw 30, expected balance 0 (boundary: exactly equal). For each test, 1 mark for the starting balance and amount, 1 mark for the correct expected result.

**12. (a)** Each player has a different score [1], so each object needs its own copy of the value; a single shared variable could hold only one score for all players [1].
**(b)** It adds `n` to that object's `score` [1], after checking that `n` is not negative (or is a whole number), rejecting or ignoring invalid values [1].

**13.** The problem is split into smaller parts, each represented by a class with its own data and behaviour [1], so each class can be designed, written and tested separately before the parts are combined [1].

## Where marks are usually lost

- Describing an object as "a class" or a class as "an object".
- Listing attributes that are actions, or methods that are data.
- Not showing working in tracing questions.
- Treating two objects of the same class as if they share their attribute values; trace each object separately.
- Saying a constructor "creates the class": it initialises a new object.
- Explaining private attributes as "security" from hackers instead of protecting data from invalid changes by other code.
- Writing test cases without an expected result, so the test cannot pass or fail.

## Frequently asked questions

**Why are some questions labelled general?**
The public subject brief does not list B.3 outcomes, so general warm-ups are used until you check the exact outcomes in the full guide.

**Should I write these answers in Java or Python?**
Either. The brief says programming questions have equivalent Java and Python versions; Sections B and C are language-neutral.

**Python does not enforce private attributes the way Java does. Does question 9 still apply?**
The design idea is the same: other code should change an object's data through its methods. Learn how your course language expresses this.
