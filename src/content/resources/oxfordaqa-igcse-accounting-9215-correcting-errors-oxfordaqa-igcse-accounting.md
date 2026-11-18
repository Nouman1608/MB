---
title: "OxfordAQA IGCSE Accounting (9215): How to correct errors in double entry records"
resourceType: "study-guides"
subject: "accounting"
level: ["igcse"]
topic: "Topic 2 – Verification of accounting records"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9215"]
syllabusSeries: "2024-onwards"
order: 2.5
syllabusTopics:
  - qualification: "igcse"
    topic: "verification-of-accounting-records-oxfordaqa-igcse"
    subtopic: "correcting-errors-oxfordaqa-igcse-accounting"
description: "Study guide to correcting errors for OxfordAQA IGCSE Accounting 9215: a method for any journal entry, journal narratives, and opening and clearing a suspense account."
author: "marlbridge-academic-team"
reviewer: "javaid-iqbal-sabri"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to javaid-iqbal-sabri (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This study guide covers the content point "How to correct errors in double entry records" in section 3.2 Verification of accounting records of the OxfordAQA International GCSE Accounting (9215) specification (version 1.2). The specification states that "correcting errors includes the use of the general journal and suspense account". All amounts on this page are in dollars.

The [correcting errors and effect on profit guide](/resources/oxfordaqa-igcse-accounting-correcting-errors-and-the-effect-of-errors-on-profit/) sets out each error type with a correcting journal. This page concentrates on the **method**: a routine that produces the right journal for any error, including the awkward cases (day book totals, entries on the wrong side of one account, two wrong amounts), and a complete suspense account worked from start to finish. The effect on profit has its own page, the [effect of errors on profit study guide](/resources/oxfordaqa-igcse-accounting-9215-the-effect-of-errors-on-profit-calculations-oxfordaqa-igcse-accounting/). Practise with the [correcting errors revision notes](/resources/oxfordaqa-igcse-accounting-9215-correcting-errors-oxfordaqa-igcse-accounting-revision-notes/) and the [correcting errors practice questions](/resources/oxfordaqa-igcse-accounting-9215-correcting-errors-oxfordaqa-igcse-accounting-practice/).

## The general journal entry

Corrections are first recorded in the **general journal**, the book of prime entry for items that belong in no other book. Each entry shows:

| Element | Example |
|---|---|
| Date | 31 Dec |
| Account debited, with amount | Discount allowed 170 |
| Account credited, with amount, indented | Suspense 170 |
| Narrative | Being correction of discount allowed entered on the wrong side |

The **narrative** explains why the entry is made. Exam answers that leave it out often lose a mark when the question asks for narratives.

## A method for any error

Work through three lines for every error. Write them down until the method is automatic.

```
1. WHAT WAS DONE:        the entries actually made (account, side, amount)
2. WHAT SHOULD HAVE BEEN: the correct entries
3. CORRECTION:           whatever turns line 1 into line 2, account by account
```

Then ask: **did the error make the trial balance disagree?** If the original debits and credits were equal, the correction goes between the two real accounts. If they were not equal, one side of the correction goes to the **suspense account**.

### Worked example 1: an error on the wrong side of one account

A customer paid her account and was allowed discount of 85. The customer's account was correctly credited with 85, but the 85 was also **credited** to the discount allowed account.

```
1. Done:          Cr Customer 85      Cr Discount allowed 85
2. Should be:     Cr Customer 85      Dr Discount allowed 85
3. Correction:    Discount allowed must move from Cr 85 to Dr 85: debit 170
```

The original entries had two credits and no debit, so the trial balance credits exceeded debits by 170. The other side of the correction is the suspense account:

| Account | Debit | Credit |
|---|---:|---:|
| Discount allowed | 170 | |
| Suspense | | 170 |
| Being correction of discount allowed of 85 entered on the wrong side | | |

The 170 is twice the original amount: 85 to cancel the wrong credit, and 85 to make the correct debit.

### Worked example 2: an undercast day book

The sales journal for June was undercast by 300. The individual customer accounts were posted correctly from the invoices, but the total posted to the sales account was 300 too low.

```
1. Done:          Dr customers (correct)     Cr Sales 300 too little
2. Should be:     Dr customers               Cr Sales full amount
3. Correction:    Cr Sales 300
```

Only the sales account is wrong, so the other side is suspense: **Dr Suspense 300, Cr Sales 300**, being correction of the undercast sales journal.

### Worked example 3: two wrong amounts

Rent received of 900 by bank was credited correctly to the rent received account, but debited in the bank account as 1,800.

```
1. Done:          Dr Bank 1,800       Cr Rent received 900
2. Should be:     Dr Bank 900         Cr Rent received 900
3. Correction:    Cr Bank 900
```

Journal: **Dr Suspense 900, Cr Bank 900**, being correction of a receipt of rent overstated in the bank account.

### Worked example 4: an error the trial balance cannot see

A new computer costing 1,100, bought on credit from Tech Supplies, was debited to the office expenses account.

```
1. Done:          Dr Office expenses 1,100    Cr Tech Supplies 1,100
2. Should be:     Dr Office equipment 1,100   Cr Tech Supplies 1,100
3. Correction:    Dr Office equipment 1,100   Cr Office expenses 1,100
```

This is an error of principle. Debits equalled credits all along, so the suspense account is **not** used.

## The suspense account from start to finish

When a trial balance does not agree, the difference is entered in a suspense account so that a trial balance can be completed. Each error that caused the difference is then corrected through the suspense account, until its balance is nil.

| If | The suspense account opens with |
|---|---|
| Debit total is higher | A **credit** balance equal to the difference |
| Credit total is higher | A **debit** balance equal to the difference |

### Worked example 5: Ashdown Garden Supplies

The trial balance at 31 December has debits of 112,630 and credits of 111,770. A suspense account is opened. Then these errors are found:

1. The sales journal was undercast by 300.
2. Discount allowed of 85 was credited to both the customer's account and the discount allowed account.
3. Repairs paid of 1,240 were credited correctly to the bank account but debited to repairs as 1,420.
4. Cash of 350 taken by the owner for private use was credited to the cash account only.
5. Rent received of 900 was debited to the bank account as 1,800.
6. A credit purchase of 640 from J Lowe was credited to the account of J Lowry.
7. A computer of 1,100 bought on credit was debited to office expenses.

**Step 1: open the suspense account.** Debits exceed credits by 112,630 − 111,770 = 860, so suspense opens with a **credit** of 860.

**Step 2: journal entries.**

| No. | Debit | Credit | Amount | Narrative (being correction of...) |
|---|---|---|---:|---|
| 1 | Suspense | Sales | 300 | sales journal undercast |
| 2 | Discount allowed | Suspense | 170 | discount allowed entered on the wrong side |
| 3 | Suspense | Repairs | 180 | repairs of 1,240 debited as 1,420 |
| 4 | Drawings | Suspense | 350 | drawings not debited |
| 5 | Suspense | Bank | 900 | rent received overstated in the bank account |
| 6 | J Lowry | J Lowe | 640 | purchase credited to the wrong supplier |
| 7 | Office equipment | Office expenses | 1,100 | computer debited to an expense account |

Errors 6 (commission) and 7 (principle) did not affect the totals, so they do not touch suspense.

**Step 3: post to the suspense account.**

```
Dr                     Suspense                            Cr
31 Dec  Sales              300  | 31 Dec  Difference in TB      860
31 Dec  Repairs            180  | 31 Dec  Discount allowed      170
31 Dec  Bank               900  | 31 Dec  Drawings              350
                         1,380  |                             1,380
```

The account closes with no balance, so the five errors explain the whole difference. If a balance remained, at least one error would still be undiscovered.

## Common mistakes

- Using suspense for an error that did not affect the trial balance totals, such as commission or principle.
- Opening the suspense account on the wrong side. It goes on the side that makes the smaller total equal to the larger one.
- Correcting by the original amount when an entry was on the wrong side; the correction is twice the amount.
- Correcting a day book undercast in the individual customer or supplier accounts, which were already right.
- Writing journal entries without narratives when narratives are asked for.
- Posting a journal line to the suspense account on the wrong side. A journal debit to suspense is a debit in the suspense account; a journal credit is a credit.

## Exam technique

- **"Prepare journal entries to correct the errors"**: debit first, credit indented below, amounts in columns, narrative under each entry.
- **"Prepare the suspense account"**: start with the opening difference, post only the entries that involve suspense, and total both sides.
- **"Explain why error X does not affect the suspense account"**: name the error type and say that debits and credits were equal.
- Keep the method lines (done, should be, correction) in your rough work; they make the journal quick to check.

## Next steps

- Quick recall: [correcting errors revision notes](/resources/oxfordaqa-igcse-accounting-9215-correcting-errors-oxfordaqa-igcse-accounting-revision-notes/).
- Marked questions: [correcting errors practice questions](/resources/oxfordaqa-igcse-accounting-9215-correcting-errors-oxfordaqa-igcse-accounting-practice/).
- What the corrections do to profit: [effect of errors on profit study guide](/resources/oxfordaqa-igcse-accounting-9215-the-effect-of-errors-on-profit-calculations-oxfordaqa-igcse-accounting/).

## Official syllabus

OxfordAQA International GCSE Accounting (9215) specification, version 1.2, for International GCSE exams May/June 2026 onwards, section 3.2 Verification of accounting records: "How to correct errors in double entry records", including the use of the general journal and suspense account.
