---
title: "Edexcel A-Level Accounting: Control Accounts and Correction of Errors — Revision Notes"
resourceType: "revision-notes"
subject: "accounting"
level: ["a-levels"]
topic: "Control procedures"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YAC11"]
syllabusSeries: "2015-onwards"
order: 1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "control-procedures"
    subtopic: "control-accounts-yac11"
description: "Condensed recall notes on control accounts, error correction, suspense accounts and statements of revised profit for Pearson Edexcel International A-Level Accounting (YAC11), 1.2.3-1.2.9."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Control Accounts and Correction of Errors study guide](/resources/a-level-edexcel-accounting-control-accounts-and-correction-of-errors/).

## Control accounts (1.2.3–1.2.4)

A **control account (total account)** summarises every individual entry in the trade receivables ledger or trade payables ledger. Its balance should equal the sum of the individual personal account balances in that ledger. It works as an **independent check** precisely because it is built from *different source data* — totals from books of prime entry — than the individual ledger accounts, so a mismatch reveals an error somewhere in the ledger.

Build a receivables control account from: opening balance + credit sales − sales returns − cash/cheque received − discounts allowed − irrecoverable debts written off ± contra entries = closing balance. The payables control account mirrors this on the purchases side.

## The trial balance split: errors that do vs. don't affect balancing

This is the organising idea for the whole sub-topic — learn it first.

**Errors that do NOT unbalance the trial balance** (both sides still equal, but wrong):

| Error | What happened |
|---|---|
| **Omission** | Transaction left out entirely — both sides missing |
| **Commission** | Posted to the correct *type* of account but the wrong specific account (wrong customer, right ledger) |
| **Principle** | Posted to the wrong *type* of account (e.g. capital vs. revenue expenditure) |
| **Original entry** | Wrong figure entered correctly on both sides |
| **Complete reversal** | Debit and credit entries swapped |

**Errors that DO unbalance the trial balance:**

- **One-sided entry** — only one side of a transaction posted.
- **Transposition (casting) error** — digits reversed (e.g. 540 recorded as 450). **Diagnostic tip:** if the imbalance divides evenly by 9, suspect a transposition error — a genuinely useful shortcut worth practising.

## Journal entries and the suspense account

A **suspense account** is a temporary account opened to hold the value of a discrepancy while the trial balance doesn't balance, and is closed once the underlying error is found and corrected.

```
Step 1: open a suspense account for the imbalance
Step 2: journalise the correction once the error is identified
Step 3: the two suspense entries cancel out, closing the account
Step 4: adjust the statement of revised profit for any income/
        expense account affected
```

Work through **all four steps explicitly** in an answer — a full-mark response treats the suspense entry, the correction, and the profit impact as one connected sequence, not three separate facts.

## Worked example

Trial balance is short by £150 (debit column). A £150 insurance payment was correctly entered in the cash book but never posted to the insurance expense account.

```
Dr Suspense                150   (balances the TB temporarily)
--- error found: insurance expense was never posted ---
Dr Insurance expense       150
    Cr Suspense                 150   (clears the suspense account)

Effect on profit: expense was understated by 150, so profit was
overstated by 150 → statement of revised profit REDUCES profit by 150.
```

**Direction check:** understating an expense always overstates profit, so correcting it always reduces the previously calculated profit — a quick sanity check before finalising any revised-profit answer.

## Statements of revised profit

Start from the original (incorrect) profit figure and adjust **line by line** for each correction: an understated expense now recorded reduces profit; an understated income now recorded increases profit; and vice versa. Only corrections affecting an income or expense account change profit — a purely balance-sheet correction (e.g. reclassifying an asset between accounts) does not.

## Key terms

**Control account** — summary ledger account totalling a subsidiary ledger, used as an independent arithmetic check. **Suspense account** — temporary holding account for a trial balance discrepancy, closed once the error is corrected. **Error of omission** — transaction left out entirely (TB still balances). **Error of commission** — posted to the wrong specific account of the correct type. **Transposition error** — digits reversed; imbalance divisible by 9.

**Statement of revised profit** — a working document that starts from the original (incorrect) net profit figure and adjusts it line by line for each correction that affects an income or expense account, arriving at the corrected net profit.

## Worked example: identifying an error type from a scenario

A trial balance balances, but a $200 purchase of office equipment was posted as a $200 debit to the purchases (expense) account instead of the equipment (non-current asset) account.

```
Diagnosis:   both sides of the transaction were entered somewhere,
             so the trial balance still balances -- this rules out
             the "does affect balancing" category entirely
Error type:  error of principle -- posted to the wrong TYPE of
             account (revenue expenditure instead of capital
             expenditure), not merely the wrong specific account
Correction:  journal entry removing it from purchases and adding it
             to equipment, then reflecting the resulting change in
             profit (purchases/expenses were overstated, so profit
             was understated) in the statement of revised profit
```

Practising this kind of diagnosis -- working from a described scenario back to the correct error category -- is a more exam-realistic skill than simply memorising the five category names in isolation.

## Common mistakes

- Applying a suspense account to an error (e.g. complete reversal) that would **not** actually unbalance the trial balance.
- Closing a suspense account before confirming the correcting entries sum to the original difference.
- Adjusting revised profit in the **wrong direction** — check: understated expense ⇒ reduce profit; understated income ⇒ increase profit.
- Treating a control account mismatch as proof of a *specific* error type, when it only proves an error exists somewhere in the ledger.

## Quick self-test

- State the formula for building a receivables control account from opening balance to closing balance.
- List the five error types that do **not** unbalance the trial balance.
- Explain why an imbalance divisible by 9 suggests a transposition error.
- Work the four-step suspense account sequence from memory for a one-sided entry.
- State the profit-adjustment rule for an understated expense.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level
Accounting (YAC11) specification, Issue 2, September 2018 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Accounting/2015/specification-and-sample-assessments/pearson-edexcel-ial-accounting-specification.pdf).
