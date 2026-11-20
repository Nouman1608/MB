---
title: "AQA A-Level Computer Science (7517): Client Server Databases -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.10.5 recall: client server database systems, lost updates and the control methods of record locks, serialisation, timestamp ordering and commitment ordering."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.10.5 Client server databases**, AQA A-Level Computer Science (7517): a client server database provides **simultaneous access for multiple clients**, and **concurrent access must be controlled to preserve integrity**. Updates can be **lost** if two clients edit a record at the same time; this is managed by **record locks, serialisation, timestamp ordering or commitment ordering**. Full explanations and timelines are in the [client server databases study guide](/resources/aqa-a-level-computer-science-7517-client-server-databases/); questions are in the [client server databases practice questions](/resources/aqa-a-level-computer-science-7517-client-server-databases-practice/).

## The system

- The **database and DBMS are on a server**; **clients** send requests (SQL) over a network and receive results.
- Many clients can use the database **at the same time**.
- Data is held in one place: everyone sees the same current data.
- Security, back-up and integrity are managed centrally.
- Needs a server and a network; the server is a single point of failure unless duplicated.

## The lost update problem

Bank balance £500. Client A withdraws £100; client B deposits £50. Correct result: 450.

| Step | A | B | Stored |
|---|---|---|---|
| 1 | reads 500 | | 500 |
| 2 | | reads 500 | 500 |
| 3 | writes 400 | | 400 |
| 4 | | writes 550 | 550 |

A's change is overwritten, because B calculated from the old value. Result: 550, wrong. Integrity is lost.

**Transaction:** a sequence of operations treated as one unit of work (for example read, calculate, write).

## The four control methods

| Method | How it works | Strength | Weakness |
|---|---|---|---|
| **Record lock** | A client locks a record before changing it; others must wait until it is released | Simple, common | Waiting; deadlock; slower |
| **Serialisation** | Overlapping transactions are controlled so the result equals running them one at a time in some order | A clear correctness test | Strict one-at-a-time running wastes the benefit of many users |
| **Timestamp ordering** | Each transaction gets a start timestamp; conflicting operations must happen in timestamp order; a transaction that breaks the order is aborted and restarted | No deadlock | Restarts repeat work |
| **Commitment ordering** | Transactions must commit in the same order as their conflicting operations happened | Serialisable without long locks | Transactions may have to wait to commit |

## Record lock example

| Step | A | B | Stored |
|---|---|---|---|
| 1 | locks and reads 500 | requests lock: waits | 500 |
| 2 | writes 400, releases | | 400 |
| 3 | | locks, reads 400 | 400 |
| 4 | | writes 450, releases | 450 |

**Deadlock:** A holds X and wants Y; B holds Y and wants X. Neither can proceed until the DBMS cancels one transaction.

## Lock types

- **Exclusive lock:** no other client may read or write the record.
- **Shared lock:** others may read but not write.

## Serialisable or not?

The overlapping schedule that gives 550 does not match "A then B" (450) or "B then A" (450), so it is **not serialisable**. A correct control method only allows schedules that match some serial order.

## Choosing a method

| Situation | Suitable method | Reason |
|---|---|---|
| Few clients, short updates | Record locks | Waits are short |
| Many clients, mostly reading | Timestamp ordering or shared locks | Little waiting |
| Heavy competition for the same records | Locks with deadlock detection | Conflicts are likely |

## Key terms

| Term | Definition |
|---|---|
| Client server database | A database on a server accessed by many clients over a network |
| Concurrent access | Several clients using the database at the same time |
| Integrity | The data is accurate and consistent |
| Lost update | A change that is overwritten by another client's change |
| Record lock | A restriction that stops other clients changing a record that is in use |
| Deadlock | Two transactions each waiting for a lock held by the other |
| Transaction | A sequence of operations treated as a single unit of work |
| Timestamp | A value recording when a transaction started |
| Commit | Make the changes of a transaction permanent |
| Abort | Cancel a transaction and undo its changes |

## Exam traps

- **A lost update is an overwritten change**, not a deletion.
- **A record lock restricts one record,** not the whole database.
- **State that the other client waits.**
- **Mention deadlock** as the risk of locking.
- **Serialisation is the aim** (same result as one at a time), not a promise that transactions never overlap.
- **Show a timeline** with the stored value at each step.
- **Tie the answer to integrity** and the scenario given.

## Self-test

1. What is concurrent access?
2. What is a lost update?
3. What is a record lock?
4. What must a second client do if the record is locked?
5. What is deadlock?
6. What does serialisation aim to achieve?
7. What is a timestamp used for?
8. What happens to a transaction that breaks timestamp order?
9. What rule does commitment ordering apply?
10. Give one drawback of record locks.
11. Why does a client server database keep data in one place?
12. If a balance of 200 is read by two clients who each subtract 50 and write back, what is wrongly stored?

**Answers**

1. Several clients using the database at the same time.
2. A change by one client that is overwritten by another client's change.
3. A restriction preventing other clients changing a record while one client is using it.
4. Wait until the lock is released.
5. Two transactions each waiting for a lock the other holds, so neither can continue.
6. A result equal to running the transactions one at a time in some order.
7. To order transactions by start time so that conflicting operations occur in that order.
8. It is aborted and restarted with a new timestamp.
9. Transactions commit in the same order as their conflicting operations happened.
10. Waiting, or deadlock.
11. So every client sees the same current data and it can be managed centrally.
12. 150, when the correct value is 100.

## Related resources

- [Client server databases study guide](/resources/aqa-a-level-computer-science-7517-client-server-databases/)
- [Client server databases practice questions](/resources/aqa-a-level-computer-science-7517-client-server-databases-practice/)
- [SQL revision notes](/resources/aqa-a-level-computer-science-7517-structured-query-language-sql-revision-notes/)
