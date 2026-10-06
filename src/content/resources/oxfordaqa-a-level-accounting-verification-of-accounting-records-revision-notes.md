---
title: "OxfordAQA A-Level Accounting: Verification of accounting records (9615) -- Revision Notes"
seoTitle: "OxfordAQA A-Level Accounting Verification Revision Notes"
resourceType: "revision-notes"
subject: "accounting"
level: ["a-levels"]
topic: "Verification of accounting records"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9615"]
syllabusSeries: "2024-onwards"
stage: "AS"
order: 4
syllabusTopics:
  - qualification: "a-level"
    topic: "verification-of-accounting-records-oxfordaqa-alevel"
description: "Condensed OxfordAQA A-level Accounting notes on 3.1.4 verification: error types, journal and suspense, control accounts, bank reconciliation, self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

For full explanations and longer worked examples, start with the
[study guide](/resources/oxfordaqa-a-level-accounting-verification-of-accounting-records/).

These notes cover section 3.1.4, Verification of accounting records, of the OxfordAQA International AS
and A-level Accounting (9615) specification, Version 1.2, for International AS exams May/June 2025
onwards and International A-level exams May/June 2026 onwards. It is International AS content, assessed
on Paper 1: Introduction to Financial Accounting. No part of it is International A-level only. Test
yourself afterwards with the
[practice questions](/resources/oxfordaqa-a-level-accounting-verification-of-accounting-records-practice/),
check your coverage on the [printable checklist](/checklists/oxfordaqa/a-level/accounting/), or find
weak spots with the [free diagnostics](/diagnostics/). Course hub:
[OxfordAQA A-level Accounting](/boards/oxfordaqa/a-level/accounting/).

## The four verification techniques

The specification lists exactly four:

1. Trial balance
2. Bank reconciliation statements
3. Trade receivables ledger control accounts
4. Trade payables ledger control accounts

Control accounts are **memorandum records** in this course. The personal accounts in the ledgers carry
the double entry; the control account is a separate check built from totals.

## Error types at a glance

| Error | Trial balance? | One-line test |
|---|---|---|
| Addition | Revealed | A total is wrong |
| Partial omission | Revealed | One side missing |
| Transposition | Revealed | Digits swapped on one side; difference divides by 9 |
| Unequal posting | Revealed | Two sides, two different amounts |
| Commission | Not revealed | Wrong account, same class |
| Complete reversal | Not revealed | Right accounts, sides swapped |
| Compensating | Not revealed | Equal errors cancel |
| Omission | Not revealed | Nothing recorded |
| Original entry | Not revealed | Wrong figure at source, used twice |
| Principle | Not revealed | Wrong class of account (capital vs revenue, asset vs expense) |

Watch the overlap: a transposition made in the book of prime entry is used for both sides, so it becomes
an error of original entry and is not revealed.

## Method in steps: correcting errors

```
1. Find the trial balance difference.
   Debits > credits -> suspense opens as a CREDIT.
   Credits > debits -> suspense opens as a DEBIT.
2. For each error, write the correct entry and the entry actually made.
   The journal entry is the difference between them.
3. Use suspense only for the side that was missing or wrong in
   amount. Errors not revealed never touch suspense.
4. Post the suspense account. It must close at zero.
5. Adjust profit for every correction that hits an income or
   expense account.
```

Small reminder: a payment of 450 to P Okwuosa was debited to bank and credited to his account (complete
reversal). To fix it you must undo the wrong entry and make the right one, so the journal is Dr P
Okwuosa 900, Cr Bank 900.

## Method in steps: effect on the statements

| Correction | Profit | Statement of financial position |
|---|---|---|
| Expense understated | Down | Usually a liability up or an asset down |
| Income understated | Up | Usually an asset up |
| Capital item charged as expense | Up | Non-current assets up |
| Expense capitalised | Down | Non-current assets down |
| Closing inventory overstated | Down | Current assets down |
| Commission error between customers | None | Total receivables unchanged |
| Drawings charged as an expense | Up | Drawings up, so closing capital unchanged by this item |

After redrafting, check: change in profit (minus change in drawings) = change in net assets. Removing a
suspense balance counts as a change in net assets.

## Trade receivables and payables ledger control accounts

| Account | Debit side | Credit side |
|---|---|---|
| Trade receivables ledger control | b/d debit, credit sales, interest charged on overdue accounts, dishonoured cheques, refunds to customers, c/d credit | b/d credit, receipts, discounts allowed, sales returns, irrecoverable debts, contra, c/d debit |
| Trade payables ledger control | b/d debit, payments, discounts received, purchases returns, contra, c/d credit | b/d credit, credit purchases, refunds from suppliers, c/d debit |

Never included: cash sales, cash purchases, provision for doubtful debts.

Small reminder (trade payables). Opening balances: credit 17,300, debit 150. Credit purchases 28,460;
payments 25,910; discounts received 540; purchases returns 1,280; contra 900; closing debit balances 210.

```
               Trade payables ledger control
Balance b/d             150 | Balance b/d          17,300
Bank (payments)      25,910 | Credit purchases     28,460
Discounts received      540 | Balance c/d             210
Purchases returns     1,280 |
Contra                  900 |
Balance c/d          17,190 |
                     ------                        ------
                     45,970                        45,970
```

The closing credit of 17,190 is then compared with the total of the suppliers' list.

## Method in steps: bank reconciliation

```
1. Tick items that appear in both the cash book and the statement.
2. Update the cash book: bank charges, interest, direct debits,
   standing orders, credit transfers, dishonoured cheques,
   cash book errors.
3. Balance the updated cash book.
4. Statement: balance per bank statement
     + outstanding lodgements
     - unpresented cheques
     = balance per updated cash book.
```

Signs flip for an overdraft. Work in signed numbers: write a favourable balance as positive and an
overdraft as negative. Small reminder: updated cash book overdraft 640, unpresented cheques 1,150,
outstanding lodgement 380. Bank statement balance = −640 + 1,150 − 380 = 130 favourable.

## Must-know distinctions

- **Omission vs partial omission.** Omission: nothing recorded, not revealed. Partial omission: one side
  recorded, revealed.
- **Commission vs principle.** Commission stays within the right class of account. Principle crosses
  classes.
- **Original entry vs transposition.** Original entry: the wrong figure is in the book of prime entry.
  Transposition (revealed): the wrong figure appears on one side only.
- **Unpresented cheque vs dishonoured cheque.** An unpresented cheque is a timing item in the
  reconciliation statement. A dishonoured cheque is a real event, so update the cash book.
- **Contra direction.** Debit trade payables control, credit trade receivables control.

## Benefits and limitations in one line each

- **Trial balance:** quick arithmetic check; misses six error types.
- **Bank reconciliation:** independent check on the cash book; cannot find an error made the same way
  in both records and checks only the bank account.
- **Control accounts:** narrow an error down to one ledger and give quick totals; miss errors of original
  entry and total omissions, which flow into both records, and commission errors within one ledger.

## Quick self-test

1. Name the four verification techniques the specification lists.
2. 5,420 was posted to one account as 5,240, with the other side correct. What is the trial balance
   difference, and what clue does it give?
3. A trial balance's credits exceed its debits by 360. On which side does the suspense account open?
4. Classify: an invoice for T Amadi was posted to T Amado's account.
5. Classify: the purchase of a delivery van was debited to purchases.
6. Is an error of original entry revealed by the trial balance? By a control account?
7. Give the double entry for a contra between the receivables and payables ledgers.
8. Name two items that never appear in a trade receivables ledger control account.
9. Closing inventory was overstated by 1,200. State the effect on profit and on current assets.
10. Electricity owing of 340 was omitted. State the effect on profit and on current liabilities.
11. Updated cash book overdraft 640, unpresented cheques 1,150, outstanding lodgement 380. Find the
    bank statement balance.
12. Why does a credit balance in the receivables ledger appear on the debit side of the control account
    as balance c/d?

### Answers

1. Trial balance, bank reconciliation statements, trade receivables ledger control accounts, trade
   payables ledger control accounts.
2. 180. It divides by 9 (180 ÷ 9 = 20), the sign of a transposition.
3. Debit, 360.
4. Error of commission. Not revealed by the trial balance.
5. Error of principle. Not revealed by the trial balance.
6. No to both. The wrong figure flows into both the ledger and the control account.
7. Debit trade payables ledger control; credit trade receivables ledger control.
8. Any two of: cash sales, provision for doubtful debts, cash purchases.
9. Profit overstated by 1,200; current assets overstated by 1,200.
10. Profit overstated by 340; current liabilities understated by 340.
11. 130 favourable (−640 + 1,150 − 380).
12. The account closes on its larger side. A credit balance carried down is entered on the debit side
    above the line and brought down on the credit side, so it is never netted off.

## Where marks are usually lost

- Sending corrections for commission, principle or original entry errors through suspense.
- Opening suspense on the wrong side: it takes the side that makes the trial balance agree.
- Correcting a complete reversal for the original amount instead of twice the amount.
- Forgetting that a transposition in a book of prime entry is an error of original entry.
- Including cash sales or the provision for doubtful debts in a control account.
- Netting credit balances in the receivables ledger against debit balances.
- Starting the reconciliation from the unadjusted cash book balance.
- Treating a dishonoured cheque as a timing difference instead of updating the cash book.
- Adjusting profit for an error that affects only an asset or liability, such as a misposted receipt.
- Redrafting a statement of financial position without checking that net assets agree with capital.

## Official syllabus

OxfordAQA International AS and A-level Accounting (9615) specification, Version 1.2, for International
AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by
OxfordAQA. Section 3.1.4, Verification of accounting records.
