---
title: "A Level Accounting: Computerised accounting systems (Cambridge 9706) -- Revision Notes"
seoTitle: "A Level Accounting Computerised Systems Notes 9706"
resourceType: "revision-notes"
subject: "accounting"
level: ["a-levels"]
topic: "Financial accounting"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9706"]
syllabusSeries: "2026-2028"
stage: "A"
order: 626
syllabusTopics:
  - qualification: "a-level"
    topic: "a-financial-accounting"
    subtopic: "computerised-accounting-systems"
description: "Condensed revision notes on moving accounts to a computerised system and protecting data integrity, with a self-test, for Cambridge A Level Accounting."
author: "marlbridge-academic-team"
publishedDate: 2026-10-25
featured: false
---

These notes condense section 3.4 Computerised accounting systems (A Level) of the Cambridge International AS & A Level Accounting 9706 syllabus for examination in 2026, 2027 and 2028. Full explanations and longer worked examples are in the [study guide](/resources/cambridge-a-level-accounting-computerised-accounting-systems/). Test yourself with the [practice questions](/resources/cambridge-a-level-accounting-computerised-accounting-systems-practice/), tick off the [checklist](/checklists/cambridge/a-level/accounting/), and see the [course hub](/boards/cambridge/a-level/accounting/) and the [free diagnostics](/diagnostics/). The syllabus does not require knowledge of specific software, so answer in general terms. All amounts are in dollars.

## The two things 3.4.1 asks for

| Outcome | One-line summary |
|---|---|
| The process of transferring the accounts to a computerised system | Plan, choose a cut-over date, tidy the manual books, design the coding, enter opening balances, verify, change over |
| Ways the integrity of the data can be ensured during the transfer | Checks before, during and after entry that show the data is complete and accurate |

AS Level background (reasons for computerising, advantages, disadvantages, data security) is assumed. Revisit it in the [business entities revision notes](/resources/accounting-business-entities-revision-notes/).

## The transfer in eight steps

1. **Plan:** scope, people, timetable, coding scheme, changeover approach.
2. **Cut-over date:** normally a period end.
3. **Update the manual books:** books of prime entry posted, bank reconciled, control accounts agreed, suspense cleared.
4. **Clean the data:** irrecoverable debts written off, unused accounts removed, inventory and asset records agreed to reality.
5. **Design the structure:** chart of accounts, customer and supplier codes, item codes, asset categories.
6. **Enter opening balances:** nominal ledger, trade receivables and trade payables by account, inventory, asset register.
7. **Verify:** compare with source totals and the manual trial balance.
8. **Change over:** start live entry, archive the manual records, review differences.

## Integrity: what to protect

| Property | Meaning | Threat during transfer |
|---|---|---|
| Complete | Nothing missing or duplicated | An account left out or keyed twice |
| Accurate | Right amount, right account, right side | Transposed digits, wrong code, debit entered as credit |
| Valid | Relates to a real balance | Dormant or fictitious accounts carried over |
| Authorised | Entered by a person entitled to do so | Open access during keying |
| Traceable | Changes are recorded | Overwriting entries with no log |

## Safeguards by stage

| Stage | Safeguard | What it protects against |
|---|---|---|
| Before | Reconcile and correct manual books | Carrying existing errors into the system |
| Before | Calculate source control totals | No independent figure to check against |
| Before | Copy and retain manual records | Loss if the transfer must be restarted |
| Before | Written cut-off rule | Items missed or counted twice |
| During | Validation checks on input | Impossible or badly formed entries |
| During | Balanced opening journal | One-sided or mis-keyed entries |
| During | Control, record and hash totals | Omissions, duplicates, altered amounts |
| During | Second person checks | Mistakes the keyer cannot see |
| After | Trial balance compared line by line | Offsetting errors hidden in a matching total |
| After | Subsidiary ledgers agreed to control accounts | Customer or supplier balance errors |
| After | Sample traced to source documents | Valid-looking but wrong entries |
| After | Backup and audit trail | Data loss and untraceable changes |

## Must-know distinctions

- **Control total, record count, hash total.** A control total is a meaningful sum (total of balances). A record count is how many accounts. A hash total is a sum with no meaning in itself (total of account codes). All three compare the system with the source.
- **Validation and verification.** Validation is the system testing that an entry is reasonable (format, range, existing code). Verification is checking an entry against its source. A balance can pass validation and still be wrong.
- **Opening balance and new transaction.** Anything in the manual closing balance is not keyed again as a transaction. This is the cut-off point.
- **Direct, parallel, phased.** Direct is cheapest with the highest risk. Parallel gives a comparison at the cost of double work. Phased limits faults to one ledger but prolongs the changeover.
- **AS and A Level.** AS asks why and how a computerised system helps and is kept secure. Section 3.4 asks how to move onto it safely.

## Worked reminders

**Reading a difference.** Wrenbury Stationers lists five customer balances: 1,840; 960; 2,310; 745; 1,500. The total is 7,355. The system shows 7,085 because 960 was keyed as 690. Difference = 270 = 9 × 30. A difference divisible by 9 points towards a transposition but does not prove one, so you still compare figures.

**Counting what is missing.** The five customer codes are 6101 to 6105, with hash total 30,515. If 6104 is missing, the system hash is 24,411 and 30,515 − 24,411 = 6,104, which names the missing account.

**Wrong side.** A supplier balance of 1,730 entered as a debit instead of a credit moves the trial balance by twice the amount: 2 × 1,730 = 3,460. When a difference is exactly double a balance, look for an entry on the wrong side.

**Difference equals a balance.** If total credits are short by exactly one account's balance, suspect that the account was left out.

## Writing a recommendation

Paper 3 questions that ask for a recommendation or decision expect reasons on both sides and a justified choice. A short structure works:

1. **State the options** (for example direct or parallel changeover).
2. **Use the figures given:** extra hours multiplied by the hourly rate, the number of accounts that could be wrong multiplied by the average balance.
3. **Weigh them:** the cost and delay of a safeguard against the size and likelihood of the error it prevents.
4. **Decide and justify:** name the option, give the main reason, and say what would change your mind.

## Quick self-test

1. Why is a period end the usual cut-over date?
2. State what a hash total is and give an example.
3. A customer list totals 7,505. The system shows 8,135 after keying. State the difference and whether it suggests a transposition.
4. An opening journal has debits of 48,200 and credits of 47,650. Credits are short by 550 and accruals are 550. What is the likely error?
5. Explain the difference between validation and verification.
6. A purchase invoice dated 30 June is included in the manual closing trade payables. The cut-over date is 1 July. Should it also be keyed as a July transaction?
7. State two reasons for keeping the manual records after the cut-over date.
8. Two inventory lines are 12 units at 45.50 and 240 units at 3.25. Calculate the total to be keyed.
9. Give one drawback of a parallel run and one of a direct changeover.
10. Why should someone other than the person who keyed the balances check them?
11. The list holds 42 accounts but the system shows 41. What does the count show, and what does it not show?
12. A supplier balance of 2,100 is entered as a debit instead of a credit. By how much do debits exceed credits?

### Answers

1. The opening balances are the closing balances of a finished period, so the manual books can be finalised and there is a clear point to compare against.
2. A sum of values with no accounting meaning, for example the total of customer account codes, used to spot missing, duplicated or altered records.
3. Difference 630 (8,135 − 7,505). It is divisible by 9 (630 ÷ 9 = 70), so a transposition is possible, but the figures still need comparing.
4. An account with a credit balance of 550 (the accruals) was left out of the opening journal.
5. Validation is the system testing that an entry is reasonable. Verification is checking the entry against the source. Validation cannot find a wrong but plausible figure.
6. No. It is already in the opening balance, so keying it again would count it twice.
7. Any two from: they are the source for checking the opened balances; they allow a restart if the data is damaged; they are the comparison for a parallel run; they may be needed as evidence later.
8. 12 × 45.50 = 546; 240 × 3.25 = 780; total 1,326.
9. Parallel: double work and cost. Direct: faults go live with no second set to compare against.
10. The keyer tends to see what they meant to type, so a second person is more likely to spot a slip.
11. It shows one account is missing. It does not show which account or the amount.
12. By 2 × 2,100 = 4,200.

## Where marks are usually lost

- Writing about the benefits of computerising instead of the steps and checks of the transfer.
- Naming a safeguard (backup, password, control total) without saying what error it would find.
- Treating validation as proof of accuracy.
- Comparing only the total of two trial balances and missing offsetting errors.
- Not mentioning cut-off, so items are missed or counted twice.
- Giving a recommendation on changeover with no balanced reasons or no drawbacks.
- Quoting figures from a scenario without saying what they show.
- Describing a named program, which the syllabus does not require.

## Official syllabus

Cambridge International, *Cambridge International AS & A Level Accounting 9706 syllabus for examination in 2026, 2027 and 2028*, section 3.4 Computerised accounting systems (A Level), 3.4.1.
