---
resourceId: "mb-ap-macro-4.4-study-guide"
title: "Banking and the Expansion of the Money Supply: Study Guide (Macroeconomics 4.4)"
description: "Learn how banks' balance sheets work, how fractional reserve banking turns excess reserves into new loans and deposits, and how to use the money multiplier and its limits."
course: "macroeconomics"
unit: 4
topics: ["4.4"]
resourceType: "study-guide"
prerequisites:
  - "M1, M2 and the monetary base (Topic 4.3)"
  - "Working with percentages and reciprocals"
prerequisiteResources: ["mb-ap-macro-4.3-study-guide"]
learningObjectives:
  - "Read and complete a bank's balance sheet (T-account) and check that assets equal liabilities plus owners' equity"
  - "Explain fractional reserve banking and split a bank's reserves into required and excess reserves"
  - "Explain how lending by one bank and then the next expands the money supply"
  - "Calculate the money multiplier, its maximum value as 1 ÷ the required reserve ratio, and the maximum change in loans, deposits and the money supply"
  - "Explain why the simple money multiplier may overstate the actual expansion of the money supply"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "four-function"
calculatorNote: "Only multiplication, division and reciprocals are needed. Write the required reserve ratio as a decimal (10% = 0.1). All data are fictional, in millions of valdas (VD)."
related: ["mb-ap-macro-4.4-revision-notes", "mb-ap-macro-4.4-practice", "mb-ap-macro-4.4-checklist"]
next: "mb-ap-macro-4.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-macroeconomics", "page-macroeconomics", "clar-macroeconomics"]
keyPoints:
  - "Assets = liabilities + owners' equity. Demand deposits are a bank's liability; reserves and loans are its assets."
  - "Required reserves = required reserve ratio × demand deposits. Excess reserves = total reserves − required reserves."
  - "A single bank can lend at most its excess reserves."
  - "Maximum money multiplier = 1 ÷ required reserve ratio."
  - "Maximum change in the money supply = initial excess reserves × money multiplier. Excess reserves held by banks and extra currency held by the public make the real change smaller."
faqs:
  - question: "Why does a cash deposit not count as new money straight away?"
    answer: "Cash in circulation and demand deposits are both in M1. When cash is deposited, currency falls and deposits rise by the same amount, so M1 is unchanged. New money appears only when banks lend out the excess reserves the deposit creates."
  - question: "What is the difference between the money multiplier and the expenditure multiplier?"
    answer: "The money multiplier links reserves to the money supply and depends on the required reserve ratio. The expenditure multiplier (Topic 3.2) links a change in spending to a change in real GDP and depends on the MPC. They are different ideas."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What a bank does

A commercial bank takes in deposits and lends most of the money out. It earns interest on its loans and pays less interest (or none) on deposits. Banks and similar firms that accept deposits are called **depository institutions**.

Each bank records what it owns and what it owes on a **balance sheet**. In this course it is drawn as a **T-account**: assets on the left, liabilities and owners' equity on the right.

| Assets (what the bank owns or is owed) | Liabilities and owners' equity (what the bank owes) |
|---|---|
| **Reserves**: vault cash and deposits at the central bank | **Demand deposits**: customers can withdraw them at any time |
| **Loans**: money borrowers must repay | **Owners' equity** (bank capital): what the owners have put in |
| **Securities**: bonds the bank holds | |

The two sides always balance:

**Assets = liabilities + owners' equity**

Notice the direction. Your checking account is **your** asset, but it is the **bank's** liability, because the bank owes that money to you. A loan is the borrower's debt, so it is the **bank's** asset.

## Fractional reserve banking

Depositors do not all withdraw their money on the same day. So a bank does not need to keep every deposit as cash. It keeps a fraction as reserves and lends the rest. This is **fractional reserve banking**.

In the course model, the central bank sets a **required reserve ratio** (rr): the fraction of demand deposits a bank must hold as reserves.

- **Required reserves** = rr × demand deposits
- **Excess reserves** = total reserves − required reserves

Excess reserves are reserves the bank is free to lend. They are the basis of money creation: **a single bank can safely lend out, at most, its excess reserves.** If it lent more, then when the borrower spent the loan and the reserves left the bank, it would fall below its required reserves.

**Background (real-world note).** Some central banks set no reserve requirement at all; the US Federal Reserve cut its required reserve ratio to zero in March 2020. The course still uses a positive required reserve ratio, because it shows clearly how banks create money. Use the ratio you are given.

## Worked example 1: one bank's balance sheet

Harbour Bank is a fictional bank in **Valdoria**, the fictional country used across these pages (currency: the valda, VD). The required reserve ratio is **10%** (0.1). Figures are in millions of valdas.

| Assets | | Liabilities and owners' equity | |
|---|---|---|---|
| Reserves | 100 | Demand deposits | 1,000 |
| Loans | 750 | Owners' equity | 100 |
| Securities | 250 | | |
| **Total** | **1,100** | **Total** | **1,100** |

**(a) Find the required and excess reserves.**
Required reserves = 0.1 × 1,000 = **VD 100 million**. Excess reserves = 100 − 100 = **0**. The bank is fully "loaned up".

**(b) A customer deposits VD 40 million of cash. Show the change and find the new excess reserves.**
The cash goes into the vault, so reserves rise by 40 to **140**. The customer's checking balance rises, so demand deposits rise by 40 to **1,040**. Both sides rise by 40, so the totals are 1,140 = 1,140.
Required reserves = 0.1 × 1,040 = **104**. Excess reserves = 140 − 104 = **VD 36 million**.

A quicker way: of a new deposit, rr stays as required reserves and (1 − rr) becomes excess reserves: 0.9 × 40 = 36.

**(c) What is the most Harbour Bank can lend now?**
Its excess reserves: **VD 36 million**.

When it makes the loan, it credits the borrower's checking account with 36. **This is the moment new money is created**: the borrower has 36 more in demand deposits and nobody has less. When the borrower spends the money, the deposit and the reserves move to the seller's bank. Harbour Bank is left with:

| Assets | | Liabilities and owners' equity | |
|---|---|---|---|
| Reserves | 104 | Demand deposits | 1,040 |
| Loans | 786 | Owners' equity | 100 |
| Securities | 250 | | |
| **Total** | **1,140** | **Total** | **1,140** |

Reserves of 104 exactly meet the requirement (0.1 × 1,040), so excess reserves are 0 again.

**(d) What is the maximum change in the money supply from the whole banking system?**
Money multiplier = 1 ÷ 0.1 = 10. Maximum change in the money supply = 36 × 10 = **VD 360 million**.

**Check.** Why not 40 × 10 = 400? The deposit of 40 was money already: it only changed from currency to a demand deposit, so M1 did not change when it was made. Only the excess reserves of 36 create **new** money. The figure 400 is the maximum change in **demand deposits**: the original 40 plus 360 of new deposits created by lending.

## How the banking system multiplies deposits

The loan of 36 does not stop at one bank. The borrower pays someone, who deposits the 36 in another bank. That bank keeps 10% as required reserves and lends the other 90%, and so on. Each round, new deposits are created, but each round is smaller, because part of each deposit is held back as required reserves.

This process stops when all the original excess reserves have become required reserves somewhere in the system.

<figure>
<svg viewBox="0 0 640 340" role="img" aria-labelledby="dep-title dep-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="dep-title">How one cash deposit spreads through the banking system</title>
<desc id="dep-desc">A bar chart of the new deposit at six banks, A to F, when the required reserve ratio is 20%. The deposits are 1,000, 800, 640, 512, 409.6 and about 327.7 million valdas. Each bar is split: the bottom fifth, hatched, is required reserves; the top four-fifths, plain, is the amount lent on, which becomes the next bank's deposit. The bars shrink by 20% each round.</desc>
<defs><pattern id="hatch44" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#ffffff"/><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="2.5"/></pattern></defs>
<rect x="0" y="0" width="640" height="340" fill="#ffffff"/>
<line x1="80" y1="280" x2="620" y2="280" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="60" x2="80" y2="280" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="72" y="284">0</text><text x="72" y="234">250</text><text x="72" y="184">500</text><text x="72" y="134">750</text><text x="72" y="84">1,000</text></g>
<g stroke="#1d2b44" stroke-width="1"><line x1="75" y1="230" x2="80" y2="230"/><line x1="75" y1="180" x2="80" y2="180"/><line x1="75" y1="130" x2="80" y2="130"/><line x1="75" y1="80" x2="80" y2="80"/></g>
<rect x="110" y="240.00" width="56" height="40.00" fill="url(#hatch44)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="110" y="80.00" width="56" height="160.00" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<text x="138.0" y="72.00" text-anchor="middle" font-size="12" fill="#1d2b44">1,000</text>
<text x="138.0" y="298" text-anchor="middle" font-size="13" fill="#1d2b44">Bank A</text>
<rect x="192" y="248.00" width="56" height="32.00" fill="url(#hatch44)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="192" y="120.00" width="56" height="128.00" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<text x="220.0" y="112.00" text-anchor="middle" font-size="12" fill="#1d2b44">800</text>
<text x="220.0" y="298" text-anchor="middle" font-size="13" fill="#1d2b44">Bank B</text>
<rect x="274" y="254.40" width="56" height="25.60" fill="url(#hatch44)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="274" y="152.00" width="56" height="102.40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<text x="302.0" y="144.00" text-anchor="middle" font-size="12" fill="#1d2b44">640</text>
<text x="302.0" y="298" text-anchor="middle" font-size="13" fill="#1d2b44">Bank C</text>
<rect x="356" y="259.52" width="56" height="20.48" fill="url(#hatch44)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="356" y="177.60" width="56" height="81.92" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<text x="384.0" y="169.60" text-anchor="middle" font-size="12" fill="#1d2b44">512</text>
<text x="384.0" y="298" text-anchor="middle" font-size="13" fill="#1d2b44">Bank D</text>
<rect x="438" y="263.62" width="56" height="16.38" fill="url(#hatch44)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="438" y="198.08" width="56" height="65.54" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<text x="466.0" y="190.08" text-anchor="middle" font-size="12" fill="#1d2b44">409.6</text>
<text x="466.0" y="298" text-anchor="middle" font-size="13" fill="#1d2b44">Bank E</text>
<rect x="520" y="266.89" width="56" height="13.11" fill="url(#hatch44)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="520" y="214.46" width="56" height="52.43" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<text x="548.0" y="206.46" text-anchor="middle" font-size="12" fill="#1d2b44">327.7</text>
<text x="548.0" y="298" text-anchor="middle" font-size="13" fill="#1d2b44">Bank F</text>
<text x="350" y="322" text-anchor="middle" font-size="14" fill="#1d2b44">Round of deposit and lending</text>
<text x="22" y="170" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 22 170)">New deposit (VD million)</text>
<rect x="400" y="22" width="22" height="14" fill="url(#hatch44)" stroke="#1d2b44" stroke-width="1.5"/><text x="430" y="34" font-size="12" fill="#1d2b44">Required reserves (20%)</text>
<rect x="400" y="44" width="22" height="14" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/><text x="430" y="56" font-size="12" fill="#1d2b44">Lent on to the next bank (80%)</text>
</svg>
<figcaption>Figure 1. Deposit expansion with a 20% required reserve ratio (fictional data for Worked example 2). Each bank holds 20% of its new deposit as required reserves (hatched) and lends 80% (plain), which becomes the next bank's deposit. The bars keep shrinking, so the total is finite.</figcaption>
</figure>

## The money multiplier

The **money multiplier** is the ratio of the money supply to the monetary base:

**Money multiplier = money supply ÷ monetary base**

When banks lend all their excess reserves and the public holds no extra currency, the multiplier reaches its **maximum**, which depends only on the required reserve ratio:

**Maximum (simple) money multiplier = 1 ÷ rr**

| rr | Maximum money multiplier |
|---|---|
| 0.25 | 4 |
| 0.20 | 5 |
| 0.10 | 10 |
| 0.05 | 20 |

A **lower** reserve ratio gives a **larger** multiplier, because banks keep less of each deposit and lend more.

The size of the expansion depends on the multiplier:

- **Maximum change in the money supply** = initial excess reserves × money multiplier
- **Maximum change in demand deposits** = new reserves entering the system × money multiplier (for a cash deposit, this is the deposit × money multiplier)
- **Maximum change in loans** = initial excess reserves × money multiplier (the same as the change in the money supply when the new reserves came from a cash deposit)

## Worked example 2: from a deposit to the whole system

**Question.** In Valdoria the required reserve ratio is **20%**, and no bank has any excess reserves. A shop owner deposits **VD 1,000 million** of cash in Bank A. (a) Trace the first rounds. (b) Find the maximum change in demand deposits, loans and the money supply. (c) What happens if banks choose to hold extra reserves?

**(a) The first rounds** (VD million):

| Bank | New deposit | Required reserves (20%) | New loan (80%) |
|---|---|---|---|
| A | 1,000 | 200 | 800 |
| B | 800 | 160 | 640 |
| C | 640 | 128 | 512 |
| D | 512 | 102.4 | 409.6 |
| E | 409.6 | 81.92 | 327.68 |
| F | 327.68 | 65.54 | 262.14 |
| **First six rounds** | **3,689.28** | **737.86** | **2,951.42** |

After six rounds, loans have reached 2,951.42, about 73.79% of their final total. The process continues with smaller and smaller rounds.

**(b) The whole system.** Money multiplier = 1 ÷ 0.2 = **5**. Bank A's initial excess reserves = 0.8 × 1,000 = 800.

- Maximum change in demand deposits = 1,000 × 5 = **VD 5,000 million**.
- Maximum change in loans = 800 × 5 = **VD 4,000 million**.
- Maximum change in the money supply = 800 × 5 = **VD 4,000 million**. The shop owner's 1,000 was already money; the 4,000 of new loans (and the deposits they create) is new money.
- Total required reserves at the end = 0.2 × 5,000 = **VD 1,000 million**: the whole original deposit has become required reserves.

**(c) Banks hold extra reserves.** Suppose every bank keeps 25% of each new deposit as reserves (20% required plus 5% excess) and lends 75%. Then each round shrinks faster. The effective multiplier is 1 ÷ 0.25 = 4. Bank A lends 750, so loans and the money supply rise by at most 750 × 4 = **VD 3,000 million**, not 4,000. Demand deposits rise by 1,000 × 4 = 4,000.

**Check.** In (b), new deposits (5,000) = original deposit (1,000) + new loans (4,000). The figures fit.

## Why the simple multiplier overstates expansion

The formula 1 ÷ rr gives the **largest possible** expansion. The real expansion is usually smaller, for two reasons the course expects you to explain:

1. **Banks hold excess reserves.** If banks keep some excess reserves, for safety or because few borrowers want loans, less is lent in each round (Worked example 2(c)).
2. **The public holds more currency.** If a borrower keeps part of a loan as cash instead of depositing it, that cash leaves the banking system. It cannot support further loans, so each round shrinks faster.

You can see this in Valdoria's data from Topic 4.3. M1 was VD 420 billion and the monetary base was VD 190 billion, so the actual money multiplier (using M1) was 420 ÷ 190 = **2.21**. With a 10% required reserve ratio the simple maximum would be 10. The gap shows how much the leakages matter.

**Out of scope here.** How the central bank changes reserves on purpose, through open market operations and other tools, is in Topic 4.6, Monetary Policy.

## Common misconceptions

- **"Deposits are a bank's assets."** They are liabilities: the bank owes them to depositors. Reserves and loans are assets.
- **"A single bank can lend its whole new deposit."** It can lend only its excess reserves, (1 − rr) × the deposit if it started with none.
- **"A cash deposit increases the money supply by the deposit."** Not at first: currency falls and deposits rise. New money comes only from new lending.
- **"Maximum change in the money supply = deposit × multiplier."** For a cash deposit, that is the change in **demand deposits**. The money supply change uses the excess reserves.
- **"Required reserves = rr × total reserves."** Required reserves are rr × **demand deposits**.
- **"A higher reserve ratio makes the multiplier bigger."** It makes it smaller: 1 ÷ 0.2 = 5, but 1 ÷ 0.1 = 10.
- **"The money multiplier is the same as the spending multiplier."** The money multiplier uses rr; the spending multiplier (Topic 3.2) uses the MPC.
- **"The multiplier always reaches 1 ÷ rr."** That is the maximum. Excess reserves and currency holdings make it smaller.

## Where this leads

Next, the money supply you have learned to measure and expand meets money demand in [Topic 4.5, The Money Market](/advanced-course-resources/macroeconomics/4-5-money-market-study-guide/), where it sets the nominal interest rate. Before moving on, try the [practice questions](/advanced-course-resources/macroeconomics/4-4-banking-expansion-money-supply-practice/), then use the [revision notes](/advanced-course-resources/macroeconomics/4-4-banking-expansion-money-supply-revision-notes/) and the [checklist](/advanced-course-resources/macroeconomics/4-4-banking-expansion-money-supply-checklist/). If M1 or the monetary base is unclear, review [Topic 4.3](/advanced-course-resources/macroeconomics/4-3-definition-measurement-functions-money-study-guide/).
