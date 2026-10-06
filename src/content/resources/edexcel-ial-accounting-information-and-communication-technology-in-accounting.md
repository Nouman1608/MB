---
title: "Edexcel A-Level Accounting: Information and communication technology (ICT) in accounting (YAC11)"
seoTitle: "Edexcel IAL Accounting ICT in Accounting Study Guide"
resourceType: "study-guides"
subject: "accounting"
level: ["a-levels"]
topic: "Information and communication technology (ICT) in accounting"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YAC11"]
syllabusSeries: "2015-onwards"
order: 9
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "ict-in-accounting"
description: "Study guide to Edexcel IAL Accounting topic 2.9: spreadsheets, accounting packages, EPOS stock control, and the pros and cons of ICT, fully worked."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches topic 2.9, Information and communication technology (ICT) in accounting, from the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Accounting (XAC11/YAC11) specification, Issue 2, September 2018. Both of its learning outcomes, 2.9.1 and 2.9.2, are taught here. Its home is Unit 2 (Corporate and Management Accounting), so treat it as **Unit 2 (A2) only**. The businesses and numbers are fictional, with money shown in dollars.

Course hub: [Edexcel A-Level Accounting](/boards/edexcel/a-level/accounting/). Printable checklist: [YAC11 topic checklist](/checklists/edexcel/a-level/accounting/). For quick recall use the [ICT in accounting revision notes](/resources/edexcel-ial-accounting-information-and-communication-technology-in-accounting-revision-notes/), then test yourself with the [ICT in accounting practice questions](/resources/edexcel-ial-accounting-information-and-communication-technology-in-accounting-practice/). Want to see where you stand before you start? Try a [free diagnostic](/diagnostics/).

## The two learning outcomes

| Outcome | You should be able to |
|---|---|
| 2.9.1 | Explain the uses of ICT in costing products or services and in providing management information: spreadsheets (for example for budgeting); software packages for invoices, debtors lists, payroll and tax returns; Electronic Point of Sale (EPOS) for a stock control system |
| 2.9.2 | Explain the advantages and disadvantages of using ICT in accounting, including the audit trail, financial aspects, technical aspects and human aspects |

The specification notes that you will not be examined on specific applications or software packages. Write "a spreadsheet" or "a payroll package" and describe what it does.

This builds on Unit 1 outcome 1.1.7 (ICT in recording transactions, reconciliations and financial statements), covered in the [principles and double entry guide](/resources/a-level-edexcel-accounting-principles-and-double-entry-bookkeeping/). Topic 2.9 focuses on costing, management information and whether ICT is worth having.

## 2.9.1 Uses of ICT in costing and management information

Management information helps managers plan, decide and control: budgets, product costs, who owes money, sales by product. ICT produces it faster and more often than a manual system.

### Spreadsheets

A spreadsheet is a grid of cells holding labels, inputs or formulas. When an input changes, every formula that depends on it recalculates at once.

Uses in accounting:

- **Budgeting**: sales, production, purchases and cash budgets laid out month by month, with totals and running balances. See the [budgeting guide](/resources/edexcel-ial-accounting-budgeting/) for the budgets themselves.
- **Costing**: cost cards building up a product or service cost from materials, labour and overheads, plus a mark-up.
- **"What-if" analysis**: change one assumption (price, cost, volume, credit terms) and see the effect at once.
- **Budget against actual**: a column for each and a formula for the difference.

### Worked example 1: a production budget with a what-if

Vantwell Joinery makes garden benches. Its spreadsheet uses columns B, C and D for July, August and September.

| Row | Label | B (Jul) | C (Aug) | D (Sep) |
|---|---|---|---|---|
| 3 | Budgeted sales (units) | 400 | 460 | 520 |
| 4 | Closing inventory (units) | 115 | 130 | 125 |
| 5 | Opening inventory (units) | 100 | 115 | 130 |
| 6 | Production (units) | 415 | 475 | 515 |
| 7 | Direct materials cost | 15,770 | 18,050 | 19,570 |

Input cells: B10 holds the closing inventory policy (0.25 of next month's sales), B11 the materials cost per bench (38), B12 October's sales (500).

**Step 1: closing inventory.** July's closing inventory is 25% of August's sales. The formula in B4 is `=C3*B10`, giving 0.25 × 460 = 115. In D4 the next month is October, so the formula is `=B12*B10`, giving 0.25 × 500 = 125.

**Step 2: opening inventory.** July's opening inventory of 100 is typed in as an input. August's opening inventory is July's closing inventory, so C5 is `=B4` (115).

**Step 3: production.** Production = sales + closing inventory − opening inventory. B6 is `=B3+B4-B5`: 400 + 115 − 100 = 415. The same formula copied across gives 475 and 515.

**Step 4: materials cost.** B7 is `=B6*B11`: 415 × 38 = 15,770. The three-month total is 1,405 benches × 38 = **53,390**.

**Step 5: the what-if.** Timber prices may rise, taking the materials cost to 41 per bench. The accountant changes only B11, from 38 to 41. Row 7 recalculates to 17,015, 19,475 and 21,115, a total of **57,605**. The rise in budgeted materials cost is 57,605 − 53,390 = **4,215**.

By hand, every figure in row 7 and every total would need reworking. That speed lets managers test several scenarios before committing to a plan.

### Software packages

An accounting package is software for standard accounting tasks. The specification gives four examples.

- **Invoices**: the user picks the customer and goods; the package applies prices, discounts and sales tax, numbers the invoice and posts it to the sales journal, customer account and sales ledger control account in one step.
- **Debtors list**: trade receivables, usually aged by how long each amount has been outstanding. It shows whom to chase and informs the allowance for irrecoverable debts.
- **Payroll**: from hours and rates, the package calculates gross pay, deductions and net pay, and produces payslips and wages totals.
- **Tax returns**: the package totals tax recorded in the period (for example sales tax charged and paid) and prepares the return.

### Worked example 2: an invoice and a debtors list

Pemberlow Stationers sells to schools on credit. It offers a 10% trade discount and must add sales tax at 15% (assume this rate).

**The invoice.** Rookwell College orders 240 boxes of paper at 6.50 a box.

```
List price      240 × 6.50     = 1,560.00
Trade discount  10% × 1,560    =  (156.00)
Net of discount                = 1,404.00
Sales tax       15% × 1,404    =    210.60
Invoice total                  = 1,614.60
```

The package posts these amounts automatically: the customer's account and the sales ledger control account are debited 1,614.60; sales are credited 1,404.00 and the sales tax account 210.60.

**The debtors list.** At the month end the package produces an aged list of trade receivables. Credit terms are 30 days.

| Customer | 0-30 days | 31-60 days | Over 60 days | Total |
|---|---|---|---|---|
| Brookhurst Primary | 2,180 | 0 | 0 | 2,180 |
| Rookwell College | 940 | 1,260 | 0 | 2,200 |
| Tallis Road School | 0 | 380 | 1,050 | 1,430 |
| **Total** | **3,120** | **1,640** | **1,050** | **5,810** |

- Amounts beyond the 30-day terms are 1,640 + 1,050 = 2,690, or 2,690 ÷ 5,810 = **46.3%** of the total.
- Tallis Road School has 1,050 over 60 days: chase it first and consider stopping its credit.
- The total of 5,810 should agree with the sales ledger control account balance, since the package produces both from the same entries.

### Electronic Point of Sale (EPOS) for stock control

An EPOS system records each sale at the till, usually by scanning a barcode. Each scan charges the price and reduces that item's inventory record; deliveries are added when booked in. So the system keeps a running (perpetual) inventory for every line.

It gives inventory levels at any moment without a full count; flags an item or raises an order when inventory falls to a set reorder level; and reports sales, revenue and gross margin by item, day or hour, so managers spot fast and slow sellers.

### Worked example 3: EPOS reorder and a margin report

Pelham Ridge Cycles sells inner tubes. Inventory at the start of Monday is 64. The EPOS system is set with a reorder level of 30 and a reorder quantity of 80. Delivery takes two days.

| Day | Units scanned | Inventory after sales |
|---|---|---|
| Monday | 9 | 55 |
| Tuesday | 12 | 43 |
| Wednesday | 7 | 36 |
| Thursday | 11 | 25 |
| Friday | 14 | 11 |

On Thursday inventory falls to 25, below the reorder level, so the system orders 80 tubes. It does not reorder on Friday because an order is outstanding. The delivery is booked in on Saturday morning: 11 + 80 = **91** tubes.

The weekly report shows 53 tubes sold at 8.00 each, costing 3.50 each. Revenue is 53 × 8.00 = **424.00**; gross profit is 53 × (8.00 − 3.50) = **238.50**, a gross margin of 4.50 ÷ 8.00 = **56.25%**.

EPOS knows only what has been scanned. Theft, damage and scanning mistakes are not recorded, so physical counts are still needed.

## 2.9.2 Advantages and disadvantages of ICT in accounting

Use the specification's four headings to organise any "Evaluate" answer.

### The audit trail

An **audit trail** is the ability to follow a transaction from its source document through the books of prime entry and ledgers to the financial statements, and back. A computerised system can log each entry with a reference, date, time and user, and can block deletions so that a mistake is corrected by a further, logged entry.

- Advantage: an automatic record makes errors and fraud easier to trace, and helps auditors.
- Disadvantage: if users share passwords or entries can be overwritten, the trail is weaker than a paper one, and there are fewer paper documents to check.

### Advantages and disadvantages by aspect

| Aspect | Advantages | Disadvantages |
|---|---|---|
| Financial | Fewer clerical hours, so lower wages; faster invoicing and chasing of debts improves cash flow; fewer costly errors; better information leads to better decisions | Cost of hardware, software and installation; running costs such as licences, maintenance, support and upgrades; cost of training and of transferring records |
| Technical | Arithmetic is accurate; one entry updates every linked record; reports available at any time; large volumes handled quickly; data can be backed up | Breakdowns and power cuts stop work; viruses, hacking and data loss; incorrect input gives incorrect output; packages may not suit the business or link to each other; upgrades needed |
| Human | Staff freed from routine work for analysis; less tedious work; information shared easily | Training needed; staff may resist change or fear for jobs; redundancies; over-reliance on output nobody checks; risk of fraud by staff with system access |

### Worked example 4: is a computerised system worth it?

Ardencote Coffee Roasters keeps manual records. It is considering an accounting package.

```
One-off costs:   hardware 7,500 + software and set-up 3,000 + training 1,800 = 12,300
Annual costs:    licence 1,200 + maintenance 600                            =  1,800
Annual savings:  part-time clerk 9,600 + overdraft interest 900
                 + fewer errors 500                                         = 11,000
Net annual saving: 11,000 − 1,800                                           =  9,200
```

**Payback.** 12,300 ÷ 9,200 = 1.337 years. The fraction 0.337 × 12 = 4.04 months, so payback is about **1 year 4 months**. Payback is covered fully in the [project appraisal guide](/resources/edexcel-ial-accounting-project-appraisal/).

**First year.** 9,200 − 12,300 = **−3,100**, so the business is worse off in year 1. Over three years the net gain is 3 × 9,200 − 12,300 = **15,300**.

**Evaluation.** The system pays for itself quickly. Against that, the clerk loses their job, other staff need training and may resist, and the savings are estimates. Breakdowns, data loss and hacking need backups and security, which may add cost. The owner also gains faster debtors lists and up-to-date costs, which the figures do not measure. **Judgement:** go ahead, provided data is backed up, staff are trained, and the clerk is offered retraining or redeployment where possible.

## Common errors

- Naming a software product: you are not examined on specific applications.
- Saying a spreadsheet "prevents errors". It removes arithmetic errors, but a wrong input or a wrong formula gives a wrong answer in every cell that uses it.
- Confusing "audit trail" with "audit". The trail is the record that lets anyone trace a transaction.
- Giving only hardware cost as the financial disadvantage; running and training costs matter too.
- Assuming an EPOS inventory figure is always right. Theft and damage are not scanned.
- Ending an "Evaluate" answer with no judgement.

## Where to go next

- [ICT in accounting revision notes](/resources/edexcel-ial-accounting-information-and-communication-technology-in-accounting-revision-notes/)
- [ICT in accounting practice questions](/resources/edexcel-ial-accounting-information-and-communication-technology-in-accounting-practice/)
- [Budgeting guide](/resources/edexcel-ial-accounting-budgeting/) and [introduction to costing guide](/resources/edexcel-ial-accounting-introduction-to-costing/)
- [Control accounts guide](/resources/a-level-edexcel-accounting-control-accounts-and-correction-of-errors/)
- [Free diagnostics](/diagnostics/)

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Accounting (XAC11/YAC11) specification, Issue 2, September 2018 (first teaching September 2015), Unit 2: Corporate and Management Accounting, topic 2.9 Information and communication technology (ICT) in accounting, outcomes 2.9.1-2.9.2.
