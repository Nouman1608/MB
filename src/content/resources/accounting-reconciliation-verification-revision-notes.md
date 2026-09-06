---
title: "AS & A Level Accounting: Reconciliation and Verification — Revision Notes"
resourceType: "revision-notes"
subject: "accounting"
level: ["a-levels"]
topic: "Financial accounting"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9706"]
syllabusSeries: "2026-2028"
stage: "AS"
order: 1.5
syllabusTopics:
  - qualification: "a-level"
    topic: "financial-accounting"
    subtopic: "reconciliation-and-verification"
description: "Condensed recall notes on the six trial-balance-proof error types, bank reconciliation, and control accounts for Cambridge International AS & A Level Accounting (9706), Topic 1.4."
author: "marlbridge-academic-team"
publishedDate: 2026-09-05
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Reconciliation and Verification study guide](/resources/accounting-reconciliation-and-verification/).

## The shared logic across all three procedures

Take two independently-produced figures that *should* agree, compare
them, investigate any difference:

| Procedure | Compares |
|---|---|
| Trial balance | Total debits vs total credits (same books) |
| Bank reconciliation | Cash book vs an external bank statement |
| Control account | Summary total vs sum of subsidiary-ledger balances |

Hold this as **one connected idea**, not three unrelated techniques.

## 1.4.2 Trial balance — two error categories

| Affects trial balance | Doesn't affect it (six named types) |
|---|---|
| Single-entry error | Omission |
| Two different amounts posted | Commission (correct type, wrong account) |
| | Principle (wrong account class entirely) |
| | Original entry (wrong figure, both sides) |
| | Reversal (debit/credit swapped) |
| | Compensating (two errors cancel out) |

**Suspense account**: opened only when an error *does* unbalance the
trial balance, to hold the difference until correcting journal
entries clear it.

**Benefit/limitation pairing** (examinable): quick check double entry
was applied correctly, **but** cannot detect the six named types
since they don't unbalance it.

## 1.4.3 Bank reconciliation statements

1. Update the **cash book** for items on the bank statement not yet
recorded (bank charges, standing orders).
2. Prepare the **reconciliation statement** explaining the remaining
difference — typically **timing differences** (unpresented cheques,
outstanding lodgements).

**Benefit**: independent, external check on cash records. **Limitation**:
only verifies cash/bank figures, not the rest of the accounts.

## 1.4.4 Control accounts

A **sales ledger control account** (or **purchases ledger**) should
equal the sum of all individual customer/supplier balances in the
subsidiary ledger.

**Benefit**: independent check that locates errors faster (only the
sales/purchases ledger needs checking, not every account).
**Limitation**: the control account can itself contain errors, and
agreement doesn't guarantee every individual transaction was recorded
correctly.

## Worked example: classifying an error correctly

A business receives an invoice for $600 of office stationery but
posts it to the Office Equipment (non-current asset) account instead
of the Stationery Expense account. Both sides of the entry were made
correctly for $600, so the trial balance still balances.

```
Type:        Error of principle (wrong account CLASS -- asset
             instead of expense -- not merely the wrong specific
             account within the same class)
Detected by
trial balance?  No -- both sides affected equally by $600
Correction:  Debit Stationery Expense $600
             Credit Office Equipment $600
Suspense
needed?      No -- the trial balance total is unaffected by this
             error, so no suspense account is required
```

Practising this exact classify-then-correct sequence, rather than
jumping straight to a correcting entry, is the more reliable route to
full marks on 1.4.2 scenario questions.

## Exam traps

- Confusing an error of **principle** (wrong account class) with an
error of **commission** (correct class, wrong specific account) — the
most frequently tested confusion in 1.4.2.
- Opening a suspense account for one of the six named errors that
doesn't actually unbalance the trial balance.
- Producing a technically correct numerical reconciliation **without**
the accompanying benefits-and-limitations discussion — Paper 2
questions award marks for this evaluative commentary separately, so
skipping it caps the achievable mark.
- Treating unpresented cheques/outstanding lodgements as recording
errors rather than timing differences the reconciliation statement
simply explains.

## Why this topic follows Non-Current Assets in the syllabus

Topic 1.3 (Accounting for non-current assets) asks whether individual
transactions were recorded correctly at the point of entry; Topic 1.4
asks a different, later-stage question -- once recorded, can the
overall set of records be trusted? This is why 1.4 sits immediately
after 1.3 in the syllabus sequence: verification techniques are only
meaningful once there is a substantial body of recorded transactions
to check, and examiners sometimes set questions that combine a
non-current asset scenario with an error requiring 1.4-style
correction, testing both topics together.

## Worked example: bank reconciliation statement

The cash book shows a balance of $1,850. The bank statement shows
$2,100. Investigation finds an unpresented cheque of $400 and bank
charges of $150 not yet entered in the cash book.

```
Step 1 - update the cash book:
   Cash book balance                 1,850
   Less: bank charges                 (150)
   Updated cash book balance          1,700

Step 2 - reconciliation statement:
   Balance per bank statement         2,100
   Less: unpresented cheque            (400)
   Balance per updated cash book      1,700
```

The two routes arrive at the **same figure** ($1,700) by different
paths -- the cash book is updated for items the business didn't yet
know about, while the statement is adjusted for timing differences
the bank doesn't yet reflect. Confirming both routes land on an
identical number is exactly what "reconcile" means in this context.

## Self-test

1. What is the shared underlying logic across all three procedures
in Topic 1.4?
2. Name the six error types that do not disturb the trial balance
total.
3. What does a bank reconciliation statement explain, and what
typically causes the difference?
4. What is the benefit and limitation of a control account?
5. Why can a technically correct reconciliation still fail to earn
full marks?

**Answers:** 1. Taking two independently-produced figures that
should agree, comparing them, and investigating any difference.
2. Omission, commission, principle, original entry, reversal,
compensating. 3. The remaining difference between the updated cash
book and the bank statement, typically caused by timing differences
such as unpresented cheques or outstanding lodgements. 4. Benefit: an
independent check that helps locate errors faster since only the
relevant ledger needs checking; limitation: the control account
itself can contain errors, and agreement doesn't guarantee every
individual transaction was correctly recorded. 5. Because the
syllabus explicitly requires a benefits-and-limitations discussion
alongside the numerical reconciliation, and Paper 2 questions award
marks for that evaluative commentary separately from the calculation.
