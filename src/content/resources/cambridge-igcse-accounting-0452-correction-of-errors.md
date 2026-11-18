---
title: "Cambridge IGCSE Accounting (0452): Corrections of errors"
resourceType: "study-guides"
subject: "accounting"
level: ["igcse"]
topic: "Verification of accounting records"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0452"]
syllabusSeries: "2027-2029"
order: 3.2
syllabusTopics:
  - qualification: "igcse"
    topic: "verification-of-accounting-records"
    subtopic: "correction-of-errors"
description: "Study guide to 0452 sub-topic 3.2: correcting journals, the suspense account, a statement of corrected profit and the effect on financial position."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

> **Syllabus edition note.** This page follows the Cambridge IGCSE Accounting
> 0452 syllabus for exams in 2027, 2028 and 2029 (version 1). If you sit 0452
> in November 2026, you sit the 2026 syllabus, which differs in places; check
> it on the Cambridge International website.

This guide covers sub-topic **3.2 Corrections of errors**. The syllabus lists: "how to correct errors using journal entries", "the use of a suspense account as a temporary measure to balance the trial balance", "how to correct errors using a suspense account", "how to adjust a profit or loss for an accounting period after the correction of errors" and "the effect of correction of errors on a statement of financial position".

The main example follows Saffron Spice Traders, owned by Leila Haddad, for the year ended 31 March 2027. Amounts are in dollars. Use this guide with the [3.2 revision notes](/resources/cambridge-igcse-accounting-0452-correction-of-errors-revision-notes/) and [3.2 practice questions](/resources/cambridge-igcse-accounting-0452-correction-of-errors-practice/). The error types themselves are explained in the [trial balance guide](/resources/cambridge-igcse-accounting-0452-the-trial-balance/).

## 1. A method for every correcting entry

Errors are never rubbed out or overwritten. They are corrected by a **journal entry** that is then posted, so there is a record of what was changed and why. Work out each one in three steps:

1. **What was done?** Write the entries actually made.
2. **What should have been done?** Write the correct entries.
3. **What gets from one to the other?** The correcting entry is the difference.

### Errors that do not affect the trial balance

| Error | What happened | Correcting journal | Effect on profit |
|---|---|---|---|
| Commission | 380 received from D Lee credited to D Leigh | Dr D Leigh 380, Cr D Lee 380 | None |
| Principle | A computer for the office, 1,200, debited to office expenses | Dr Office equipment 1,200, Cr Office expenses 1,200 | +1,200 (ignoring depreciation) |
| Omission | Credit purchase of goods, 640, from Fenn Traders not recorded | Dr Purchases 640, Cr Fenn Traders 640 | -640 |
| Original entry | Credit sale of 1,270 recorded as 1,720 in both accounts | Dr Sales 450, Cr customer 450 | -450 |
| Complete reversal | Cash sales of 300 debited to sales and credited to cash | Dr Cash 600, Cr Sales 600 | +600 |
| Compensating | Purchases and sales both overcast by 100 | Dr Sales 100, Cr Purchases 100 | None |

The complete reversal needs **twice** the amount: 300 removes the wrong entry and another 300 makes the right one. None of these corrections touches a suspense account, because the trial balance totals were equal.

## 2. The suspense account

If the trial balance does not agree and the errors cannot be found at once, the difference is entered in a **suspense account** so that the trial balance totals agree and the financial statements can be drafted. The balance is placed on the side of the **smaller** total. It is a temporary measure: once each error is found and corrected, the suspense account must have no balance left.

A suspense entry is part of a correction **only** when the original error made the trial balance disagree, that is, when the debits and credits recorded were unequal.

## 3. Worked example: Saffron Spice Traders

At 31 March 2027 the trial balance totals were **debit 88,460** and **credit 87,875**. The difference of 585 was credited to a suspense account. The draft profit for the year was **24,600**. These errors were then found:

1. The sales journal was overcast by 300. Customers' accounts were correct.
2. Discount allowed of 125 had been credited to the customer's account, but no entry was made in the discount allowed account.
3. Rent paid of 1,450 was correctly entered in the cash book but entered in the rent account as 1,540.
4. A computer for the office, 1,200, was debited to office expenses.
5. Commission received of 460 was correctly entered in the cash book but was debited to the commission received account.

**Journal entries** (narratives in brief):

```
                                                    Debit $   Credit $
1   Sales                                              300
      Suspense                                                    300
    Sales journal overcast
2   Discount allowed                                   125
      Suspense                                                    125
    Discount allowed not posted
3   Suspense                                            90
      Rent                                                         90
    Rent overstated (1,540 - 1,450)
4   Office equipment                                 1,200
      Office expenses                                           1,200
    Computer wrongly treated as an expense
5   Suspense                                           920
      Commission received                                         920
    Commission debited instead of credited
```

Error 4 is an error of principle and does not involve suspense. Error 5 needs 920, twice 460: the wrong debit is cancelled and the missing credit is made.

```
Suspense account
Date      Details                       $   Date      Details                     $
2027                                        2027
31 Mar    Rent                         90   31 Mar    Difference in trial       585
31 Mar    Commission received         920               balance
                                            31 Mar    Sales                     300
                                            31 Mar    Discount allowed          125
                                -----                                         -----
                                1,010                                         1,010
                                =====                                         =====
```

The account totals agree with no balance, so every error that caused the difference has been found.

**Checking the opening difference.** Each suspense error made the debit total too high or too low: error 1 raised credits by 300; error 2 left debits 125 short; error 3 raised debits by 90; error 5 put debits 920 above where they should be. Net excess of debits: -300 - 125 + 90 + 920 = 585, which matches.

## 4. Adjusting the profit for the year

Only corrections that change an **income or expense** account change profit. Work through each journal and ask whether either account is in the statement of profit or loss.

| Error | Item | Add or less | $ |
|---|---|---|---|
| | Draft profit for the year | | 24,600 |
| 1 | Sales reduced | Less | 300 |
| 2 | Discount allowed, an expense, increased | Less | 125 |
| 3 | Rent, an expense, reduced | Add | 90 |
| 4 | Office expenses reduced | Add | 1,200 |
| 5 | Commission received, income, increased | Add | 920 |
| | **Corrected profit for the year** | | **26,385** |

Working: 24,600 - 300 - 125 + 90 + 1,200 + 920 = 26,385. The suspense account itself never affects profit; it is the other account in each journal that matters. In error 4, if the question gave a depreciation policy, the depreciation for the year on the computer would also be charged, reducing the increase in profit.

## 5. The effect on the statement of financial position

| Item | Effect of the corrections |
|---|---|
| Non-current assets | Office equipment rises by 1,200 (error 4) |
| Current assets | No change: the customer, bank and cash balances were already correct |
| Current liabilities | No change |
| Owner's equity | Profit rises by 26,385 - 24,600 = 1,785, so closing capital rises by 1,785 |
| Suspense | Any suspense balance shown in a draft statement disappears |

Errors involving a personal account or the cash book can change items in the statement of financial position. An omitted purchase of 640 on credit raises trade payables by 640 and reduces profit and capital by 640. For each error, check both accounts in the journal: one may be in the statement of profit or loss and the other in the statement of financial position.

## Common mistakes

- Using the suspense account for errors of principle, commission, omission, original entry, reversal or compensation.
- Correcting a complete reversal, or an entry on the wrong side, with the single amount instead of twice the amount.
- Putting the trial balance difference on the side of the larger total.
- Including the suspense entry when adjusting profit.
- Forgetting that a corrected error can change both profit and an asset or liability.

## Exam technique

- **Prepare** journal entries with the debit line first, the credit indented, and a narrative if the question asks for one.
- To **calculate** corrected profit, set out a statement starting with the draft profit and adding or subtracting each item, with a label, then total. Write "no effect" against errors that do not change profit, so the examiner sees you considered them.
- When asked for the effect on the statement of financial position, name the section (non-current assets, current assets, current liabilities, capital) and the amount.
- If the suspense account does not clear, recheck each error's effect on the trial balance totals using the method in section 3.

## Official syllabus

Cambridge IGCSE Accounting 0452 syllabus for exams in 2027, 2028 and 2029, version 1, published by Cambridge University Press & Assessment (Cambridge International Education). Sub-topic 3.2.
