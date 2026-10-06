---
title: "AQA A-Level Accounting: Verification of accounting records (7127) -- Revision Notes"
seoTitle: "AQA A-Level Accounting Verification Revision Notes"
resourceType: "revision-notes"
subject: "accounting"
level: ["a-levels"]
topic: "Verification of accounting records"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7127"]
syllabusSeries: "2017-onwards"
order: 4
syllabusTopics:
  - qualification: "a-level"
    topic: "verification-of-accounting-records-aqa"
description: "Condensed revision notes for AQA A-Level Accounting 7127 section 3.4: error types, suspense journals, control accounts and bank reconciliation."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

For full explanations and longer worked examples, use the
[study guide](/resources/aqa-a-level-accounting-verification-of-accounting-records/). The recording
rules these checks rely on are in [the double entry model](/resources/aqa-a-level-accounting-double-entry-model/).

These notes cover section 3.4, Verification of accounting records, of the AQA A-level Accounting
(7127) specification, version 1.1 (October 2026), for A-level exams from June 2019 onwards. The
course is untiered, and section 3.4 is examined on Paper 1. Course hub:
[AQA A-level Accounting](/boards/aqa/a-level/accounting/). Tick off the topic on the
[printable checklist](/checklists/aqa/a-level/accounting/), then try the
[practice questions](/resources/aqa-a-level-accounting-verification-of-accounting-records-practice/).

## 3.4 at a glance

Four verification techniques: **trial balance**, **bank reconciliation statement**, **sales ledger
control account**, **purchases ledger control account**. Errors are corrected through the **general
journal** and, where the trial balance did not agree, a **suspense account**. You must also show the
**effect of errors on profit and the statement of financial position**, redraft statements, and judge
the **benefits and limitations** of each technique.

## The ten error types

| Revealed by trial balance | Not revealed by trial balance |
|---|---|
| Addition (casting) | Commission (wrong account, right type) |
| Partial omission (one side missing) | Complete reversal (debit and credit swapped) |
| Transposition (one entry only) | Compensating (errors cancel) |
| Unequal posting (different amounts) | Omission (whole transaction missing) |
| | Original entry (wrong figure in book of prime entry) |
| | Principle (wrong class of account) |

**Transposition clue:** wages of £5 670 posted to the wages account as £5 760 (cash book correct) makes
the debit side £90 too large. 90 ÷ 9 = 10. A difference divisible by 9 points to a transposition.

## Must-know distinctions

- **Transposition vs original entry.** Digits reversed in one posting only: revealed. Wrong figure in
  the book of prime entry, used for both sides: not revealed.
- **Omission vs partial omission.** Whole transaction missing: not revealed. One side missing: revealed.
- **Commission vs principle.** Wrong account of the right class (one customer for another): commission.
  Wrong class (an asset as an expense): principle. Principle errors usually change profit; commission
  errors usually do not.
- **Complete reversal.** The correcting entry is **twice** the amount: once to cancel, once to record
  correctly.
- **Unpresented cheques vs outstanding lodgements.** Unpresented cheques are payments in the cash book
  not yet on the statement. Outstanding lodgements are receipts in the cash book not yet on the
  statement.
- **Memorandum control accounts.** In 7127 the individual customer and supplier accounts hold the double
  entry. The control account is a separate check built from totals.

## Method: suspense and journal

1. Enter the trial balance difference in suspense on the side with the **smaller** total, so totals agree.
2. For each error, write the journal entry (debit first, then credit, then a narrative).
3. Only errors that caused the imbalance touch suspense.
4. Post the suspense entries to the suspense account. It must close to nil.

**Journal layout reminder.** Rent received of £640 was entered in the cash book but not posted to the
rent received account (partial omission, so credits are £640 short):

```
                               Dr £     Cr £
Suspense                        640
  Rent received                          640
Rent received not posted to the ledger
```

Profit rises by £640 once corrected. Revenue and income corrections go on the credit side; expense
corrections that reduce an overstated expense also go on the credit side.

**Complete reversal reminder:** a cheque of £530 received from M Doyle was debited to M Doyle and
credited to bank. Correction: Dr Bank £1 060, Cr M Doyle £1 060.

## Method: corrected profit and redrafting

```
Draft profit for the year
Add:  errors that understated profit
Less: errors that overstated profit
Corrected profit for the year
```

Mini example: draft profit £30 000. Accrued wages of £1 200 were omitted; office equipment of £450 was
debited to office expenses (ignore depreciation).

```
Draft profit                  30 000
Less: accrued wages           (1 200)
Add:  equipment capitalised      450
Corrected profit              29 250
```

Then redraft the statement of financial position: accruals +£1 200, non-current assets +£450, capital
uses £29 250. Check net assets = corrected closing capital.

| Error | Profit | Statement of financial position |
|---|---|---|
| Expense debited to a non-current asset | Overstated | Non-current assets overstated |
| Non-current asset debited to an expense | Understated | Non-current assets understated |
| Accrued expense omitted | Overstated | Current liabilities understated |
| Prepayment omitted | Understated | Current assets understated |
| Closing inventory overvalued | Overstated | Current assets overstated |
| Irrecoverable debt not written off | Overstated | Trade receivables overstated |
| Commission between two customers | No effect | No effect on totals |

## Method: control accounts

| Sales ledger control: debit | Sales ledger control: credit |
|---|---|
| Balance b/d (debit) | Balance b/d (credit) |
| Credit sales | Receipts |
| Dishonoured cheques | Discount allowed |
| Interest charged on overdue accounts | Sales returns |
| Refunds to customers | Irrecoverable debts |
| Balance c/d (credit) | Contra with purchases ledger |
| | Balance c/d (debit) |

The purchases ledger control account mirrors it: payments, discount received, purchases returns and
contras on the debit side; credit purchases and interest charged by suppliers on the credit side; debit
balances carried down on the credit side.

**Never include:** cash sales, cash purchases, provisions for doubtful debts.

Mini example: debit balance b/d £12 400; credit sales £18 900; interest charged £160; receipts £15 300;
discount allowed £410; sales returns £870; contra £500. Debit side totals £31 460, so the closing
debit balance is **£14 380**.

## Method: bank reconciliation

1. Update the cash book: standing orders, direct debits, bank charges, dishonoured cheques (all
   credit side); credit transfers and interest received (debit side); correct cash book errors.
2. Start from the bank statement balance.
3. Add outstanding lodgements. Subtract unpresented cheques.
4. Result = updated cash book balance. This figure goes on the statement of financial position.

Watch overdrafts: an overdraft on the bank statement is a **debit** balance from the bank's view and a
**credit** balance in the cash book. Treat it as a negative number throughout.

## Benefits and limitations

| Technique | Main benefit | Main limitation |
|---|---|---|
| Trial balance | Proves debit total = credit total | Misses the six errors above |
| Control accounts | Locates an error to one ledger; quick totals; fraud check | Misses original entry, omission and commission within the ledger |
| Bank reconciliation | Finds unrecorded bank items and cash book or bank errors | Checks only the bank column; misses mispostings to the wrong expense |

## Quick self-test

1. Name the four errors that a trial balance reveals.
2. Wages of £5 670 were posted to the wages account as £5 760. The cash book was correct. Name the error and state the trial balance difference.
3. Draft profit is £18 400. Closing inventory was overstated by £600, and wages of £350 were debited to drawings. Calculate corrected profit.
4. Name two items that never appear in a sales ledger control account.
5. A contra of £720 is made. State the entries in the control accounts.
6. The cash book shows a favourable balance of £2 100. Unpresented cheques total £450 and an outstanding lodgement is £300. Calculate the bank statement balance.
7. Trial balance debits are £64 300 and credits £63 850. State the suspense balance.
8. A computer costing £1 200 was debited to office expenses. State the effect on profit and on the statement of financial position (ignore depreciation).
9. Give two errors that a bank reconciliation would not reveal.
10. How can a credit balance arise in the sales ledger?
11. A credit sale of £2 090 was entered in the sales journal as £2 900. Name the error and say whether the trial balance reveals it.
12. A purchases ledger control account has debit balances to carry down of £85. On which side of the account is the £85 entered before totalling?

### Answers

1. Addition, partial omission, transposition, unequal posting.
2. Transposition; debit side £90 too large.
3. 18 400 − 600 − 350 = **£17 450**.
4. Any two: cash sales, provision for doubtful debts, cash purchases.
5. Debit purchases ledger control £720; credit sales ledger control £720.
6. 2 100 + 450 − 300 = **£2 250** in favour.
7. **£450 credit**.
8. Profit understated by £1 200; non-current assets understated by £1 200.
9. Any two: a bank payment posted to the wrong expense account; a cheque written and recorded at the wrong amount; any cash (not bank) transaction error.
10. A customer overpays, or returns goods already paid for.
11. Error of original entry; not revealed, because both sides use £2 900.
12. The credit side (it is then brought down on the debit side).

## Where marks are usually lost

- Passing a commission or principle error through suspense.
- Correcting a complete reversal with the single amount instead of double.
- Writing the suspense balance on the wrong side.
- Omitting journal narratives where a question asks for them.
- Including the provision for doubtful debts or cash sales in a sales ledger control account.
- Netting off credit balances in the sales ledger against debit balances.
- Putting the bank statement balance, not the updated cash book balance, in the statement of financial position.
- Stating only the profit effect when the question asks for the statement of financial position effect as well.
- Calling a book of prime entry transposition "revealed by the trial balance".

## Next steps

Work through the [practice questions](/resources/aqa-a-level-accounting-verification-of-accounting-records-practice/)
under timed conditions, and use the [free diagnostics](/diagnostics/) to find any other topics that need
work before Paper 1.

## Official syllabus

AQA A-level Accounting (7127) specification, version 1.1, October 2026, A-level exams June 2019
onwards (AQA), section 3.4 Verification of accounting records.
