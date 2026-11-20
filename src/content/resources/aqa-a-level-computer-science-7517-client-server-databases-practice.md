---
title: "AQA A-Level Computer Science (7517): Client Server Databases -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of databases"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 10.5
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-databases"
    subtopic: "client-server-databases-7517"
description: "Original AQA 7517 section 4.10.5 questions with answers: client server databases, lost updates and record locks, serialisation, timestamps and commitment ordering."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs: examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Client server databases study guide](/resources/aqa-a-level-computer-science-7517-client-server-databases/) | [Client server databases revision notes](/resources/aqa-a-level-computer-science-7517-client-server-databases-revision-notes/)

---

## Section A

**1.** State what is meant by concurrent access to a database. **[1]**

**2.** State **one** benefit of holding a database on a server rather than on each user's own computer. **[1]**

**3.** State what is meant by a record lock. **[1]**

**4.** State what is meant by deadlock. **[2]**

**5.** Name **two** methods, other than record locks, that can be used to control concurrent access. **[2]**

## Section B

**6.** A theatre sells seats using a client server database. Two ticket offices both display seat F12 as free and each sells it to a customer at almost the same moment.

**(a)** State the name of the problem this shows. **[1]**
**(b)** Explain why the problem has occurred. **[2]**
**(c)** Explain how a record lock would prevent it. **[3]**

**7.** A shop's database records 20 items of a product in stock. Client A sells 5 items and client B sells 3 items. Both read the stock level before either has written back.

**(a)** State the correct final stock level. **[1]**
**(b)** Complete a timeline to show how the final stored value could be 17 instead. **[3]**
**(c)** State which client's update has been lost. **[1]**

**8.** Explain, using the shop in Question 7, how the stock level would be handled if record locks were used. **[3]**

**9.** Explain **one** disadvantage of using record locks. **[2]**

**10.** Explain what is meant by serialisation, and explain why the overlapping sequence of operations in Question 7(b) is not serialisable. **[4]**

**11.** Describe how timestamp ordering is used to control concurrent access, and state one disadvantage. **[4]**

**12.** Describe the rule that commitment ordering applies. **[2]**

**13.** A hospital intends to replace a single-user appointment system with a client server database used by 40 receptionists.

Evaluate the benefits and risks of this change, referring to concurrent access. **[6]**

---

## Answers

**1.** Several clients using the database at the same time [1].

**2.** Any one from: all users see the same up-to-date data; security, back-up and integrity can be managed in one place; many users can share the data [1].

**3.** A restriction that stops other clients changing (or reading) a record while one client is using it [1].

**4.** Two (or more) transactions each hold a lock that the other needs [1], so each waits for the other and neither can proceed [1].

**5.** Any two from: serialisation; timestamp ordering; commitment ordering [1 each].

**6. (a)** A lost update (a double booking; a concurrency problem) [1].
**(b)** Both ticket offices read the seat as free before either had recorded the sale [1], so each wrote its own update without knowing about the other, and one sale overwrote the other [1].
**(c)** The first office locks the seat record before it changes it [1]; the second office must wait until the lock is released [1]; when it then reads the record, it sees that the seat is sold and does not sell it again [1].

**7. (a)** 20 − 5 − 3 = 12 [1].
**(b)** A reads 20 and B reads 20 [1]; A writes 15 (20 − 5) [1]; B writes 17 (20 − 3), overwriting A's value [1].
**(c)** Client A's update [1].

**8.** Client A locks the stock record and reads 20 [1]; client B has to wait until the lock is released; A writes 15 and releases the lock [1]; B then reads 15, subtracts 3 and writes 12, which is correct [1].

**9.** Any one disadvantage with an explanation [2]. For example: clients may have to wait for a lock to be released [1], which slows the system when many clients want the same record [1]. Or: deadlock can occur [1], where two clients each hold a lock the other needs, so the database must cancel one transaction [1].

**10.** Serialisation means that the effect of overlapping transactions is the same as if they had been carried out one at a time in some order [1]. The two possible serial orders (A then B, or B then A) both give a final stock level of 12 [1]. The overlapping sequence gives 17 [1], which matches neither order, so it is not serialisable [1].

**11.** Each transaction is given a timestamp when it starts [1]. Conflicting operations must be carried out in timestamp order [1]. A transaction that tries to do something that breaks this order, for example writing a value that a later transaction has already used, is aborted and restarted with a new timestamp [1]. Disadvantage: restarting transactions repeats work and wastes time [1].

**12.** If one transaction's operation conflicts with, and comes before, an operation of another transaction [1], the first must commit before the second is allowed to commit [1].

**13.** Indicative content (up to 6 marks). Benefits: all 40 receptionists see the same up-to-date appointments, so double booking is less likely [1]; data is held and backed up centrally [1]; access can be controlled by user, so only authorised staff see patient data [1]. Risks: with 40 users, two may try to book the same slot at the same time, giving a lost update unless concurrency control such as record locks is used [1]; locks can cause waiting or deadlock [1]; the server and network become a single point of failure, so a fault stops every receptionist unless there is a back-up server [1]; set-up and running costs are higher [1]. Maximum 6 marks.

---

## Where marks are usually lost

- Describing a lost update as data being deleted instead of overwritten.
- Not saying that the second client has to wait for the lock.
- Forgetting deadlock as the risk of locking.
- Defining serialisation as "doing one thing at a time" without the idea of the same result.
- Giving no timeline or values when a calculation is asked for.
