---
title: "OxfordAQA IGCSE Accounting (9215): Verification of the double entry records"
resourceType: "study-guides"
subject: "accounting"
level: ["igcse"]
topic: "Topic 2 – Verification of accounting records"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9215"]
syllabusSeries: "2024-onwards"
order: 2.1
syllabusTopics:
  - qualification: "igcse"
    topic: "verification-of-accounting-records-oxfordaqa-igcse"
    subtopic: "verification-of-the-double-entry-records-oxfordaqa-igcse-accounting"
description: "Study guide to verifying double entry records for OxfordAQA IGCSE Accounting 9215: what each of the four techniques checks, what it finds and what it misses."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This study guide covers the first content point of section 3.2 Verification of accounting records in the OxfordAQA International GCSE Accounting (9215) specification (version 1.2, for exams from May/June 2026): "Verification of the double entry records." The specification names four verification techniques: the **trial balance**, **trade receivables ledger control accounts**, **trade payables ledger control accounts** and **bank reconciliation statements**. All amounts on this page are in dollars.

Each technique has its own dedicated pages, which teach how to prepare it. This page looks at the four together: what each one compares, which errors it can expose, which it cannot, and how they work as a set. For the preparation skills, use the [trial balance study guide](/resources/oxfordaqa-igcse-accounting-9215-the-trial-balance-oxfordaqa-igcse-accounting/), the [control accounts study guide](/resources/oxfordaqa-igcse-accounting-trade-payables-and-trade-receivables-control-accounts/) and the [bank reconciliation study guide](/resources/oxfordaqa-igcse-accounting-bank-reconciliation-statements/). Test this unit with the [verification revision notes](/resources/oxfordaqa-igcse-accounting-9215-verification-of-the-double-entry-records-oxfordaqa-igcse-accounting-revision-notes/) and the [verification practice questions](/resources/oxfordaqa-igcse-accounting-9215-verification-of-the-double-entry-records-oxfordaqa-igcse-accounting-practice/).

## Why double entry records need checking

Double entry gives every transaction a debit and an equal credit. That makes the records partly self-checking: if every entry has two equal sides, the total of all debit balances must equal the total of all credit balances. But entries are made by people, often from documents prepared by other people, and errors creep in when amounts are copied, posted, added up or classified.

Verification means comparing one set of records with another set that was produced **independently**. If two independent records of the same thing agree, each supports the other. If they disagree, there is an error in one of them, and the size of the difference helps to find it.

## The four techniques at a glance

| Technique | What it compares | What agreement shows |
|---|---|---|
| Trial balance | Total of all debit balances with total of all credit balances in the ledger | The arithmetic of the double entry is consistent |
| Trade receivables ledger control account | A total built from the books of prime entry (sales journal, cash book, sales returns journal, general journal) with the total of the individual customer balances in the receivables ledger | The customer accounts have been posted completely and at the right amounts |
| Trade payables ledger control account | The same check for the supplier accounts in the payables ledger, built from the purchases journal, purchases returns journal, cash book and general journal | The supplier accounts have been posted completely and at the right amounts |
| Bank reconciliation statement | The business's cash book (bank columns) with the bank statement | The business's record of its bank account agrees with the bank's record, once timing differences are explained |

The specification says control accounts "will be memorandum records". They sit outside the double entry and exist only to check the ledger.

## What each technique can and cannot find

The techniques overlap, but none of them finds everything. The key question for any error is: **which two records would disagree because of it?**

### Worked example 1: matching errors to techniques

For each error, decide which technique, if any, would reveal it.

**(a)** Bank charges of 45 appear on the bank statement but have not been entered in the cash book.

The ledger has no record of the charges at all, so the trial balance agrees. The bank statement shows them, so the **bank reconciliation** reveals the difference when the two are compared.

**(b)** A sales invoice for 640 was entered correctly in the sales journal, but posted to the customer's account as 460.

The sales account received 640 (through the journal total) and the customer account only 460, so debits are 180 short: the **trial balance** will not agree. The **receivables control account** is built from the sales journal total, so it includes 640, while the list of customer balances includes only 460. The control account therefore shows that the error is in the receivables ledger, not elsewhere.

**(c)** A cheque for 1,520 was paid to a supplier but entered in both the cash book and the supplier's account as 1,250.

Both sides were recorded at the same wrong amount (an error of original entry), so the trial balance agrees, and the payables control account and the list of supplier balances agree too. The bank statement shows the cheque at 1,520, so the **bank reconciliation** reveals it.

**(d)** Wages paid of 3,400 were debited to the wages account as 4,300.

Debits exceed credits by 900, so the **trial balance** reveals it. No control account or bank reconciliation is affected.

**(e)** A payment of 700 to the supplier Marsh Ltd was debited to the account of Marsh Brothers.

This is an error of commission. Debits still equal credits, the payables control account total is unchanged, and the bank statement matches the cash book. **None of the four techniques** reveals it. It would come to light when Marsh Ltd's statement of account still showed the 700 as owing.

**(f)** A credit sale of 1,100 was never recorded anywhere.

An error of omission. Nothing disagrees: **none of the four techniques** reveals it.

The pattern is clear. A technique can reveal an error only if the error makes the two records it compares differ.

## Control accounts narrow the search

A trial balance tells you **that** an error exists, but not **where**. Control accounts help locate it.

### Worked example 2

At 31 May a business prepares its receivables control account from the totals in its books of prime entry. The closing balance is 24,870. The list of balances in the receivables ledger totals 24,690.

```
Control account balance           24,870
Total of customer balances        24,690
Difference                           180
```

The difference points to the receivables ledger. The bookkeeper checks each posting to the customer accounts for May and finds the invoice of 640 posted as 460 (worked example 1(b)). After the customer's account is corrected, the list totals 24,690 + 180 = 24,870 and agrees with the control account.

Without the control account, the bookkeeper would know only that the trial balance did not agree, and would have to check every account in the ledger.

## Bank reconciliation checks the cash book from outside

The bank statement is the only verification record produced by a separate organisation. That is why it can catch errors of omission and original entry in the cash book that the trial balance cannot.

### Worked example 3

At 30 June the cash book shows a debit balance of 3,215. The bank statement shows 2,890. On comparing them:

- a standing order of 275 for insurance appears on the statement but not in the cash book;
- a cheque for 350 paid to a supplier has not yet been presented;
- takings of 400 paid in on 30 June have not yet reached the statement.

```
Cash book balance                    3,215
Less standing order not recorded      (275)
Updated cash book balance            2,940

Bank statement balance               2,890
Add outstanding banking                400
Less unpresented cheque               (350)
Balance per bank reconciliation      2,940
```

Both routes reach 2,940, so the cash book is verified once updated. The standing order was missing from the ledger entirely, which the trial balance could never have shown.

## Using the four techniques together

| Error type | Trial balance | Control accounts | Bank reconciliation |
|---|---|---|---|
| One-sided or unequal posting to a customer or supplier account | Reveals | Reveals and locates | Only if the bank is involved |
| Wrong amount in a customer account only | Reveals | Reveals and locates | No |
| Bank item missing from the cash book | No | No | Reveals |
| Wrong amount on both sides of a bank entry | No | No (both records use the same wrong figure) | Reveals |
| Error of commission between two customers | No | No (total unchanged) | No |
| Complete omission of a credit sale | No | No | No |

So a business uses all four, regularly, for example every month. Even then, some errors (commission, principle, complete omission) need other checks, such as comparing suppliers' statements of account with the payables ledger, or reviewing how items have been classified.

## Common mistakes

- Saying a trial balance that agrees proves the records are correct.
- Treating a control account as part of the double entry. In 9215 control accounts are memorandum records.
- Claiming the bank reconciliation checks the whole ledger. It checks only the bank columns of the cash book.
- Saying a control account will reveal an error of commission between two customers. The total does not change.
- Naming a technique without explaining which two records would disagree.

## Exam technique

- **"State"** the four techniques: give all four names in full, as the specification lists them.
- **"Explain how"** a technique verifies the records: say what is compared with what, and what a difference shows.
- **"Identify which technique would reveal"** an error: name it and give the reason (which records disagree).
- In longer answers, show that you know the **limits**: one sentence on an error that the technique would not reveal earns credit for understanding.

## Next steps

- Quick recall: [verification revision notes](/resources/oxfordaqa-igcse-accounting-9215-verification-of-the-double-entry-records-oxfordaqa-igcse-accounting-revision-notes/).
- Marked questions: [verification practice questions](/resources/oxfordaqa-igcse-accounting-9215-verification-of-the-double-entry-records-oxfordaqa-igcse-accounting-practice/).
- The first technique in depth: [trial balance study guide](/resources/oxfordaqa-igcse-accounting-9215-the-trial-balance-oxfordaqa-igcse-accounting/).
- Whole topic overview: [Verification of accounting records study guide](/resources/igcse-oxfordaqa-accounting-verification-of-accounting-records/).

## Official syllabus

OxfordAQA International GCSE Accounting (9215) specification, version 1.2, for International GCSE exams May/June 2026 onwards, section 3.2 Verification of accounting records: "Verification of the double entry records", with the verification techniques listed as trial balance, trade receivables ledger control accounts, trade payables ledger control accounts and bank reconciliation statements.
