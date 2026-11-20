---
title: "AQA A-Level Computer Science (7517): Client Server Databases"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.10.5: client server database systems, the lost update problem and controlling concurrent access with record locks, serialisation, timestamp ordering and commitment ordering."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.10.5 Client server databases** in AQA A-Level Computer Science (7517). The specification asks you to **know that a client server database system provides simultaneous access to the database for multiple clients**, and to **know how concurrent access can be controlled to preserve the integrity of the database**. The additional information explains the key problem, that **updates can be lost if two clients edit a record at the same time**, and names four ways to manage it: **record locks, serialisation, timestamp ordering and commitment ordering**.

The wider [fundamentals of databases study guide](/resources/aqa-a-level-computer-science-fundamentals-of-databases-study-guide/) covers all of section 4.10. This page explains how a client server database works, shows the lost update problem with a worked timeline, and then explains each of the four control methods with an example.

Condensed notes are in the [client server databases revision notes](/resources/aqa-a-level-computer-science-7517-client-server-databases-revision-notes/), and exam-style questions are in the [client server databases practice questions](/resources/aqa-a-level-computer-science-7517-client-server-databases-practice/).

## What a client server database is

In a **client server database system** the database and the **database management system (DBMS)** are held on a **server**. Many **clients** (for example staff computers, web applications or tills) connect over a network. Each client sends **requests** (usually SQL queries and updates) and the server runs them on the database and returns the **results**.

**Features**

- The data is held **in one place**, so every client sees the same up-to-date data.
- **Multiple clients can use the database at the same time** (simultaneous or concurrent access).
- The server handles **security** (who may see or change what), **back-up** and **integrity** centrally.
- Clients need only enough power to display results and send requests.

**Compared with a single-user database on one computer**, a client server database allows shared working, easier management and more control, but needs a server and a network, and the server becomes a single point of failure if it is not backed up or duplicated.

## The problem: lost updates

When several clients read and write the same record at about the same time, one client's change can be overwritten by another's, and so **lost**. This damages the **integrity** of the database: the stored data no longer matches what should be there.

**Worked example 1: a lost update.** A bank account holds £500. Client A withdraws £100 and client B deposits £50. The correct final balance is 500 − 100 + 50 = **£450**.

| Step | Client A | Client B | Balance stored |
|---|---|---|---|
| 1 | Reads balance: 500 | | 500 |
| 2 | | Reads balance: 500 | 500 |
| 3 | Calculates 500 − 100 = 400 | | 500 |
| 4 | Writes 400 | | 400 |
| 5 | | Calculates 500 + 50 = 550 | 400 |
| 6 | | Writes 550 | **550** |

The final balance is £550. Client A's withdrawal has been **lost**, because client B was working from the old value of 500. The bank has made a £100 error. The same problem can happen with seat bookings (two people sold the same seat), stock levels, or counters.

A **transaction** is a sequence of database operations treated as one unit of work, such as "read balance, calculate, write balance". Concurrency control is about arranging how transactions overlap so that the result is as if they had run correctly.

## Controlling concurrent access

### Record locks

A **record lock** stops other clients from changing a record while one client is using it.

- Before changing a record, a transaction **locks** it. Other clients that want the same record must **wait** until the lock is released.
- The lock is **released** when the transaction has finished (committed or cancelled).
- Locks may be **exclusive** (nobody else may read or write) or **shared** (others may read but not write).

**Worked example 2: the bank account with a lock.**

| Step | Client A | Client B | Balance |
|---|---|---|---|
| 1 | Locks record, reads 500 | | 500 |
| 2 | | Requests lock: **waits** | 500 |
| 3 | Writes 400, releases lock | | 400 |
| 4 | | Gets lock, reads 400 | 400 |
| 5 | | Writes 450, releases lock | **450** |

The result is £450, which is correct.

**Drawback: deadlock.** Client A locks record X and then waits for record Y; client B has locked Y and is waiting for X. Neither can continue. The DBMS must detect this and cancel one transaction so the other can proceed. Locks also slow the system down when many clients want the same records.

### Serialisation

**Serialisation** means that the transactions are controlled so that the **end result is the same as if they had run one at a time, in some order** (a serial schedule), even though they may overlap in time. Running them strictly one at a time is always safe, but it wastes the benefit of many users. Other methods, such as locking, timestamps and commitment ordering, are ways of allowing overlap while still giving a **serialisable** result.

In the bank example, the serial orders "A then B" and "B then A" both give 450. The overlapping schedule in Example 1 gives 550, which matches neither, so it is **not serialisable**.

### Timestamp ordering

Each transaction is given a **timestamp** when it starts, which fixes its place in the order. The DBMS uses the timestamps to make sure conflicting operations are carried out **in timestamp order**, as if the transactions had run in the order they started.

If a transaction tries to do something that would break that order (for example, an older transaction trying to write a value that a younger transaction has already read or written), the DBMS **cancels (aborts) it and restarts it with a new timestamp**.

**Worked example 3.** Transaction T1 has timestamp 1 and T2 has timestamp 2. T2 reads and writes the record first. T1 then tries to write the same record. T1 is older, so it should have acted first; the DBMS rejects its write and restarts T1 with a later timestamp. This avoids holding locks, so there is no deadlock, but some work is repeated when a transaction is restarted.

### Commitment ordering

**Commitment ordering** makes the order in which transactions **commit** (make their changes permanent) agree with the order in which their conflicting operations took place. If transaction T1 performed an operation that conflicts with and comes before one of T2's, then **T1 must commit before T2 may commit**. If a transaction would have to commit out of order, it is made to wait (or is aborted). This keeps the final result serialisable without every transaction having to hold locks until the end.

## Comparing the methods

| Method | Idea | Strength | Weakness |
|---|---|---|---|
| **Record locks** | Lock a record while it is being used | Simple and widely used | Waiting; deadlock possible |
| **Serialisation** | Result equals some one-at-a-time order | A clear correctness test | Strict one-at-a-time running is slow |
| **Timestamp ordering** | Order conflicting operations by start time; restart late ones | No deadlock | Restarts waste work |
| **Commitment ordering** | Commit in the same order as conflicts occurred | Serialisable without long locks | Transactions may wait to commit |

## Common mistakes

- Describing **lost updates** as "data being deleted". Say that one client's change is **overwritten** by another's.
- Saying a record lock **stops all access to the database**. It restricts access to the **record** in use.
- Forgetting to mention that the other client must **wait** for the lock.
- Confusing **serialisation** (an aim: same result as running one at a time) with a simple instruction to run everything one at a time.
- Missing **deadlock** as a risk of locks.
- Giving only a definition of a method and not saying **how it preserves integrity**.

## Exam technique

- Use a **timeline table** to show a lost update, and write the stored value at each step.
- When asked to **explain a control method**, say what is done, what the other client experiences, and how the integrity is preserved.
- For "give a disadvantage", name a specific problem (waiting, deadlock, restarts).
- Always link the answer to the scenario: bank balance, seats, stock.

## Related resources

- [Client server databases revision notes](/resources/aqa-a-level-computer-science-7517-client-server-databases-revision-notes/)
- [Client server databases practice questions](/resources/aqa-a-level-computer-science-7517-client-server-databases-practice/)
- [SQL study guide](/resources/aqa-a-level-computer-science-7517-structured-query-language-sql/)

*Written against the AQA A-level Computer Science (7517) specification, 4.10.5 Client server databases. Always check the current specification on the AQA website.*
