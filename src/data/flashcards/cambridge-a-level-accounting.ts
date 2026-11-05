/**
 * D-438 -- flashcards for Cambridge International AS & A Level Accounting 9706 (2026-2028).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9706, or a definition table,
 *               formula table or worked reminder on the page); origin 'revision-notes'.
 *
 * The course is not tiered (it is staged AS / A Level), so no card is marked
 * upper tier. Amounts are in dollars, as on the course's notes.
 * Plain text only (see types.ts). Unicode for symbols.
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; u?: true; src?: string }

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, u, src }) => ({
    id: `${number}-${n}`,
    topic,
    subtopic,
    front: f,
    back: b,
    ...(u ? { tier: 'upper' as const } : {}),
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const BE = 'accounting-business-entities-revision-notes';
const NCA = 'accounting-non-current-assets-revision-notes';
const REC = 'accounting-reconciliation-verification-revision-notes';
const FSAS = 'cambridge-a-level-accounting-preparation-of-financial-statements-as-revision-notes';
const ANAS = 'cambridge-a-level-accounting-analysis-and-communication-of-accounting-information-as-revision-notes';
const COST = 'cambridge-a-level-accounting-costs-cost-behaviour-and-traditional-costing-methods-revision-notes';
const FSA = 'cambridge-a-level-accounting-preparation-of-financial-statements-a-level-revision-notes';
const REG = 'cambridge-a-level-accounting-regulatory-and-ethical-considerations-revision-notes';
const BAM = 'cambridge-a-level-accounting-business-acquisition-and-merger-revision-notes';
const CAS = 'cambridge-a-level-accounting-computerised-accounting-systems-revision-notes';
const ANA = 'cambridge-a-level-accounting-analysis-and-communication-of-accounting-information-a-revision-notes';
const ABC = 'cambridge-a-level-accounting-activity-based-costing-revision-notes';
const STD = 'cambridge-a-level-accounting-standard-costing-revision-notes';
const BUD = 'cambridge-a-level-accounting-budgeting-and-budgetary-control-revision-notes';
const INV = 'cambridge-a-level-accounting-investment-appraisal-revision-notes';

const FA = 'financial-accounting';
const CMA = 'as-cost-and-management-accounting';
const AFA = 'a-financial-accounting';
const ACMA = 'a-cost-and-management-accounting';

export const DECK_CAMBRIDGE_A_LEVEL_ACCOUNTING: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'a-level',
  subjectSlug: 'accounting',
  syllabusCode: '9706',
  syllabusSeries: '2026-2028',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // 1 Financial accounting (AS Level)
    ...sub(FA, 'types-of-business-entity', '1.1', [
      { n: 1, f: 'Sole trader: liability and the accounts it keeps', b: 'Unlimited liability. Keeps a capital account and records drawings.', src: BE },
      { n: 2, f: 'Partnership: liability and the accounts it keeps', b: 'Unlimited liability (usually). Keeps capital and current accounts for each partner, and an appropriation account.', src: BE },
      { n: 3, f: 'Limited company: liability and the accounts it keeps', b: 'Limited liability. Keeps share capital, reserves and records dividends.', src: BE },
      { n: 4, f: 'What does unlimited liability mean?', b: 'The owner\'s personal assets can be taken to settle the business\'s debts.', src: BE },
      { n: 5, f: 'One advantage and one disadvantage of a limited company compared with a sole trader', b: 'Advantage: limited liability and easier access to larger amounts of capital.\nDisadvantage: more regulation and disclosure, and (for a plc) some loss of control as ownership spreads across shareholders.' },
      { n: 6, f: 'Name the sources of finance listed in 9706 topic 1.1', b: 'Loans (secured or unsecured), bank overdrafts, payment by instalments, rental or leasing, and trade credit.' },
      { n: 7, f: 'Are debentures share capital?', b: 'No. Debentures are long-term loans. Debenture interest is an expense, not an appropriation of profit, and debenture holders have no vote.', src: BE },
    ]),
    ...sub(FA, 'the-accounting-system', '1.2', [
      { n: 1, f: 'The accounting equation', b: 'Assets = liabilities + capital. Every transaction changes it in a way that keeps both sides equal.' },
      { n: 2, f: 'Put the stages of the accounting system in order', b: 'Source documents → books of prime entry → ledgers → trial balance → financial statements.', src: BE },
      { n: 3, f: 'What goes in the sales journal, and what does not?', b: 'Credit sales of goods only. Cash sales go to the cash book; sales of non-current assets go to the general journal.', src: BE },
      { n: 4, f: 'Name the six books of prime entry', b: 'Sales journal, sales returns journal, purchases journal, purchases returns journal, cash book and general journal.' },
      { n: 5, f: 'Business entity concept: why does capital appear with liabilities, and why do drawings not reduce profit?', b: 'The business is separate from its owner, so capital is an amount the business owes back to the owner. Drawings reduce capital, not profit.', src: BE },
      { n: 6, f: 'Prudence concept', b: 'Profits are not overstated; losses and liabilities are not understated.', src: BE },
      { n: 7, f: 'Realisation concept', b: 'Revenue is recorded when it is earned, not necessarily when cash is received.', src: BE },
      { n: 8, f: 'Matching (accruals) concept', b: 'Income and expenses are recorded in the period they relate to, not when cash moves.', src: BE },
      { n: 9, f: 'Substance over form', b: 'Transactions are recorded by their real economic substance, not just their legal form.', src: BE },
      { n: 10, f: 'Going concern concept', b: 'The accounts assume the business will continue operating for the foreseeable future.', src: BE },
      { n: 11, f: 'Computerised accounting: two advantages, two disadvantages and the usual data safeguards', b: 'Advantages: speed, fewer arithmetic errors, easier reports.\nDisadvantages: set-up and training cost; reliance on system reliability and data security.\nSafeguards: passwords, access levels and regular backups.', src: BE },
    ]),
    ...sub(FA, 'accounting-for-non-current-assets', '1.3', [
      { n: 1, f: 'Capital expenditure vs revenue expenditure', b: 'Capital: acquiring or improving a non-current asset; benefits more than one period.\nRevenue: day-to-day running costs, including repairs; benefits the current period only.', src: NCA },
      { n: 2, f: 'Effect of recording capital expenditure as revenue expenditure', b: 'Profit is understated and the non-current asset is understated. (Recording revenue expenditure as capital overstates both.)', src: NCA },
      { n: 3, f: 'Four causes of depreciation', b: 'Physical wear and tear, economic obsolescence, the passing of time (a fixed useful life) and depletion (for example mineral reserves).', src: NCA },
      { n: 4, f: 'Straight-line depreciation: formula, and the charge on a $20,000 van with a $2,000 residual value and a 4-year life', b: '(Cost − residual value) ÷ useful life.\n($20,000 − $2,000) ÷ 4 = $4,500 every year.', src: NCA },
      { n: 5, f: 'Reducing balance at 40% on a $20,000 van: charges for years 1 and 2', b: 'Year 1: 40% × $20,000 = $8,000 (carrying value $12,000).\nYear 2: 40% × $12,000 = $4,800.\nThe percentage is applied to carrying value, not cost.', src: NCA },
      { n: 6, f: 'Cost model vs revaluation model', b: 'Cost model: the asset stays at cost less accumulated depreciation.\nRevaluation model: the asset is revalued to current value; gains generally go to a revaluation reserve, not straight to profit.', src: NCA },
      { n: 7, f: 'A machine (cost $15,000, accumulated depreciation $9,000) is part-exchanged for an allowance of $4,500. Profit or loss on disposal?', b: 'Carrying value $15,000 − $9,000 = $6,000.\n$6,000 − $4,500 = $1,500 loss on disposal, taken to the statement of profit or loss.', src: NCA },
      { n: 8, f: 'Disposal account: the three main entries', b: 'Debit disposal, credit the asset account with cost.\nDebit accumulated depreciation, credit disposal.\nCredit disposal with the proceeds or part-exchange allowance. The balance is the profit or loss on disposal.' },
    ]),
    ...sub(FA, 'reconciliation-and-verification', '1.4', [
      { n: 1, f: 'What logic do the trial balance, bank reconciliation and control accounts share?', b: 'Take two independently produced figures that should agree, compare them, and investigate any difference.', src: REC },
      { n: 2, f: 'Name the six errors that do not affect the balancing of the trial balance', b: 'Omission, commission, principle, original entry, complete reversal and compensating errors.', src: REC },
      { n: 3, f: 'Error of commission vs error of principle', b: 'Commission: right type of account, wrong account (for example the wrong customer).\nPrinciple: wrong class of account altogether (for example an expense posted to an asset).', src: REC },
      { n: 4, f: '$600 of stationery is posted to Office Equipment. Type of error and correcting entry?', b: 'Error of principle (asset instead of expense).\nDebit Stationery expense $600, credit Office equipment $600. No suspense account: the trial balance still balanced.', src: REC },
      { n: 5, f: 'When is a suspense account opened?', b: 'Only when an error makes the trial balance disagree. It holds the difference until correcting journal entries clear it.', src: REC },
      { n: 6, f: 'Cash book $1,850; bank statement $2,100; unpresented cheque $400; bank charges $150 not in the cash book. Reconcile.', b: 'Updated cash book: $1,850 − $150 = $1,700.\nBank statement $2,100 − unpresented cheque $400 = $1,700. Both agree.', src: REC },
      { n: 7, f: 'Are unpresented cheques and outstanding lodgements errors?', b: 'No. They are timing differences. The cash book is not changed for them; the bank reconciliation statement explains them.', src: REC },
      { n: 8, f: 'Control account: one benefit and one limitation', b: 'Benefit: an independent check that locates errors faster, since only that ledger needs checking.\nLimitation: the control account can itself contain errors, and agreement does not prove every transaction is right.', src: REC },
    ]),
    ...sub(FA, 'preparation-of-financial-statements', '1.5', [
      { n: 1, f: 'Year-end entries for an expense owing and an expense prepaid', b: 'Owing: debit the expense, credit other payables.\nPrepaid: debit prepayments, credit the expense.', src: FSAS },
      { n: 2, f: 'Rent paid $7,200; $600 owing at the start and $900 owing at the end. Rent expense for the year?', b: 'Cash paid + closing accrual − opening accrual.\n$7,200 + $900 − $600 = $7,500.', src: FSAS },
      { n: 3, f: 'Insurance of $3,600 is paid for 12 months from 1 October. Year end 31 December. Expense and prepayment?', b: 'Expense: 3 months = $900.\nPrepayment: 9 months = $2,700.', src: FSAS },
      { n: 4, f: 'Receivables $20,000 before writing off $1,000. Allowance 4%; old allowance $650. Total charge?', b: 'Remaining receivables $19,000 × 4% = $760. Increase $760 − $650 = $110.\nCharge = $1,000 irrecoverable debt + $110 = $1,110.', src: FSAS },
      { n: 5, f: 'Inventory cost $5,200, net realisable value $4,600. Value and write-down?', b: 'Lower of cost and NRV: $4,600. Write-down $600.', src: FSAS },
      { n: 6, f: 'Incomplete records: opening capital $21,500, closing $26,300, drawings $11,000, capital introduced $2,000. Profit?', b: 'Profit = closing − opening + drawings − capital introduced.\n$26,300 − $21,500 + $11,000 − $2,000 = $13,800.', src: FSAS },
      { n: 7, f: 'No partnership agreement: what does the Partnership Act 1890 provide?', b: 'Profits and losses shared equally; no partners\' salaries; no interest on capital; no interest on drawings; 5% a year interest on partners\' loans.', src: FSAS },
      { n: 8, f: 'Where does interest on a partner\'s loan go?', b: 'It is an expense charged before profit for the year, not an appropriation. Interest on capital is an appropriation.', src: FSAS },
      { n: 9, f: 'X (capital $50,000) and Y ($30,000): 6% interest on capital, Y salary $9,000, profit $40,000 shared equally. Each partner\'s total?', b: 'Interest: X $3,000, Y $1,800. Residual $40,000 − $3,000 − $1,800 − $9,000 = $26,200, so $13,100 each.\nX: $16,100. Y: $23,900.', src: FSAS },
      { n: 10, f: 'A 2 for 5 rights issue on 90,000 $1 shares at $1.80. Entries?', b: '36,000 new shares.\nDebit bank $64,800; credit share capital $36,000; credit share premium $28,800.', src: FSAS },
      { n: 11, f: 'Bonus issue: entry, and can the revaluation reserve fund it?', b: 'Debit a reserve, credit share capital. No cash is received.\nThe revaluation reserve is not used for a bonus issue.', src: FSAS },
      { n: 12, f: 'Capital reserves vs revenue reserves: examples', b: 'Capital reserves: share premium, revaluation reserve.\nRevenue reserves: retained earnings, general reserve.', src: FSAS },
    ]),
    ...sub(FA, 'as-analysis-and-communication-of-accounting-information', '1.6', [
      { n: 1, f: 'Revenue $480,000, cost of sales $288,000. Gross profit margin and mark-up?', b: 'Gross profit $192,000.\nMargin: 192,000 ÷ 480,000 × 100 = 40.0%.\nMark-up: 192,000 ÷ 288,000 × 100 = 66.7%.', src: ANAS },
      { n: 2, f: 'Return on capital employed: formula and what capital employed includes', b: 'Profit from operations ÷ capital employed × 100.\nCapital employed = issued shares + reserves + non-current liabilities.', src: ANAS },
      { n: 3, f: 'Current assets $96,000 (inventory $40,000), current liabilities $56,000. Current ratio and acid test ratio?', b: 'Current ratio 96,000 : 56,000 = 1.7 : 1.\nAcid test (96,000 − 40,000) : 56,000 = 1.0 : 1.', src: ANAS },
      { n: 4, f: 'Trade receivables turnover in days: formula, and the figure for receivables $45,000 and credit sales $438,000', b: 'Trade receivables ÷ credit sales × 365.\n45,000 ÷ 438,000 × 365 = 37.5 days.', src: ANAS },
      { n: 5, f: 'Opening inventory $30,000, closing $42,000, cost of sales $216,000. Inventory days and rate of inventory turnover?', b: 'Average inventory $36,000.\nDays: 36,000 ÷ 216,000 × 365 = 60.8 days.\nRate: 216,000 ÷ 36,000 = 6.0 times.', src: ANAS },
      { n: 6, f: 'Which ratios would a supplier check before granting credit?', b: 'The current ratio, the acid test ratio and trade payables turnover (days).', src: ANAS },
      { n: 7, f: 'Possible causes of a fall in gross profit margin', b: 'Dearer materials, discounts given to customers, or a change in product mix.', src: ANAS },
      { n: 8, f: 'Three limitations of accounting information when comparing businesses', b: 'Any three: historic cost and past data; estimates such as depreciation affect profit; non-financial factors left out; a year-end snapshot may be unrepresentative; different policies, size and year ends limit comparison.', src: ANAS },
    ]),

    // 2 Cost and management accounting (AS Level)
    ...sub(CMA, 'costs-and-cost-behaviour', '2.1', [
      { n: 1, f: 'Direct cost and prime cost', b: 'Direct cost: traceable to a cost unit (direct materials, direct labour, direct expenses).\nPrime cost: the total of direct costs.', src: COST },
      { n: 2, f: 'Semi-variable cost vs stepped cost', b: 'Semi-variable: a fixed part plus a variable part.\nStepped: fixed within a range of activity, then jumps at a threshold.', src: COST },
      { n: 3, f: 'High-low method: total cost $8,000 at 1,000 units and $10,000 at 1,500 units. Variable and fixed parts?', b: 'Variable cost per unit = change in cost ÷ change in output = $2,000 ÷ 500 = $4.\nFixed = $8,000 − (1,000 × $4) = $4,000.' },
      { n: 4, f: 'One supervisor ($2,500) is needed per 20 workers or part. Cost for 65 workers?', b: '65 ÷ 20 = 3.25, rounded up to 4 supervisors.\n4 × $2,500 = $10,000.', src: COST },
      { n: 5, f: 'Opening 50 units at $4.00, bought 50 at $5.00, issued 60. Closing inventory under FIFO and AVCO?', b: 'FIFO: 40 × $5.00 = $200 (issues $250).\nAVCO: average $450 ÷ 100 = $4.50; 40 × $4.50 = $180 (issues $270).', src: COST },
      { n: 6, f: 'When prices are rising, which of FIFO and AVCO gives the higher profit?', b: 'FIFO. Issues are priced at the older, lower costs, so closing inventory is higher and so is profit.', src: COST },
      { n: 7, f: 'Just in time (JIT): two benefits and two risks', b: 'Benefits: lower storage cost, less cash tied up, less obsolescence.\nRisks: stoppages from late deliveries, lost bulk discounts, higher ordering costs.', src: COST },
      { n: 8, f: 'Classify a factory supervisor\'s salary by traceability and by behaviour', b: 'Indirect labour (an overhead) and fixed.', src: COST },
    ]),
    ...sub(CMA, 'traditional-costing-methods', '2.2', [
      { n: 1, f: 'Unit, job and batch costing: when each is used', b: 'Unit: identical output or a repeated service (cost per patient visit).\nJob: work to a customer\'s order (custom furniture).\nBatch: groups of identical items (a bakery batch).', src: COST },
      { n: 2, f: 'Allocate, apportion and reapportion overheads', b: 'Allocate: charge a whole overhead to one cost centre.\nApportion: share an overhead on a fair basis (rent on floor area).\nReapportion: recharge service department costs to production departments.', src: COST },
      { n: 3, f: 'Overhead absorption rate: formula and choice of basis', b: 'OAR = budgeted overhead ÷ budgeted activity.\nUse machine hours for machine-led work and labour hours for labour-led work. Absorbed overhead = actual activity × OAR.', src: COST },
      { n: 4, f: 'Budgeted overhead $90,000, budgeted 15,000 labour hours. Actual: 14,200 hours, overhead $88,000. Result?', b: 'OAR $6.00 per hour. Absorbed 14,200 × $6 = $85,200.\nUnder-absorbed by $2,800, which reduces profit.', src: COST },
      { n: 5, f: 'Price $50, variable cost $30, fixed costs $80,000. Contribution, break-even point and C/S ratio?', b: 'Contribution $20 per unit.\nBreak-even 80,000 ÷ 20 = 4,000 units ($200,000 revenue).\nC/S ratio 20 ÷ 50 = 40%.', src: COST },
      { n: 6, f: 'Same product (contribution $20, fixed costs $80,000): units for a $30,000 target profit, and margin of safety at a budget of 6,000 units', b: 'Target: (80,000 + 30,000) ÷ 20 = 5,500 units.\nMargin of safety: 6,000 − 4,000 = 2,000 units, or 33.3% of budget.', src: COST },
      { n: 7, f: 'Inventory rises by 400 units; fixed overhead is absorbed at $5 per unit. Which profit is higher, marginal or absorption, and by how much?', b: 'Absorption profit is higher by 400 × $5 = $2,000, because fixed overhead is carried forward in closing inventory.', src: COST },
      { n: 8, f: 'Make or buy: 8,000 units, variable cost $9.00, avoidable fixed cost $10,000, supplier quote $10.50. Decision?', b: 'Make cost = $9.00 + ($10,000 ÷ 8,000 = $1.25) = $10.25 per unit.\nMake: it saves $0.25 × 8,000 = $2,000.', src: COST },
      { n: 9, f: 'Closing a product line: what do you compare?', b: 'Its contribution with the fixed costs that closure would avoid. Ignore unavoidable shared costs such as allocated head office costs.', src: COST },
      { n: 10, f: 'Limiting factor: how are products ranked?', b: 'By contribution per unit of the scarce resource (not contribution per unit). Fill demand in that order until the resource runs out.', src: COST },
      { n: 11, f: 'Special order: when should it be accepted on financial grounds?', b: 'When the price is above variable cost and there is spare capacity. Then weigh non-financial factors such as the effect on regular customers.', src: COST },
    ]),

    // 3 Financial accounting (A Level)
    ...sub(AFA, 'a-preparation-of-financial-statements', '3.1', [
      { n: 1, f: 'Inherent goodwill vs purchased goodwill', b: 'Inherent: built up by the business itself (reputation, location, customers); not recorded in the books.\nPurchased: price paid above the fair value of net identifiable assets; recorded as an asset.', src: FSA },
      { n: 2, f: 'Ana and Bo share 2:1 and admit Cy, all sharing equally. Goodwill $24,000, not kept in the books. Net entry for each?', b: 'Ana: credit $16,000, debit $8,000 = net credit $8,000.\nBo: credit $8,000, debit $8,000 = nil.\nCy: debit $8,000.', src: FSA },
      { n: 3, f: 'Revaluation account vs realisation account', b: 'Revaluation: restates asset values while the partnership continues; the gain or loss is shared in the old ratio.\nRealisation: used on dissolution; takes the assets, proceeds and liabilities settled.', src: FSA },
      { n: 4, f: 'Profit $48,000. B salary $6,000. Interest on capital A $2,000, B $1,500. Interest on drawings A $400, B $250. Shared 3:2. Totals?', b: 'Residual: 48,000 − 6,000 − 3,500 + 650 = $39,150; A $23,490, B $15,660.\nA: 2,000 − 400 + 23,490 = $25,090.\nB: 6,000 + 1,500 − 250 + 15,660 = $22,910.', src: FSA },
      { n: 5, f: 'Receipts and payments account vs income and expenditure account', b: 'Receipts and payments: a summary of the cash book, capital and revenue items, starts and ends with bank.\nIncome and expenditure: accruals basis, revenue items only, includes depreciation, ends with a surplus or deficit.', src: FSA },
      { n: 6, f: 'Subscriptions received $6,300. Arrears: $400 start, $250 end. In advance: $150 start, $220 end. Subscriptions income?', b: '6,300 − 400 + 250 + 150 − 220 = $6,080.', src: FSA },
      { n: 7, f: 'Accumulated fund', b: 'A club\'s total assets minus total liabilities. A surplus increases it; a deficit reduces it.', src: FSA },
      { n: 8, f: 'A life member pays $2,400, spread over 8 years. Annual release and balance after one year?', b: '$300 a year released to income. $2,100 remains as a liability.', src: FSA },
      { n: 9, f: 'Prime cost and cost of production in a manufacturing account', b: 'Prime cost = raw materials used + direct wages + direct expenses.\nCost of production = prime cost + factory overheads + opening work in progress − closing work in progress.', src: FSA },
      { n: 10, f: 'Closing finished goods $33,000 at transfer price, which is cost plus 10%. Provision for unrealised profit and SOFP value?', b: 'Provision = 33,000 × 10/110 = $3,000.\nInventory shown at cost: $30,000. Only the change in the provision goes to the statement of profit or loss.', src: FSA },
      { n: 11, f: 'Profit before tax $50,000, depreciation $8,000, receivables up $4,000, payables up $2,500 (no interest). Cash generated from operations?', b: '50,000 + 8,000 − 4,000 + 2,500 = $56,500.', src: FSA },
    ]),
    ...sub(AFA, 'regulatory-and-ethical-considerations', '3.2', [
      { n: 1, f: 'IAS 2: how is inventory valued, and which cost method is not allowed?', b: 'At the lower of cost and net realisable value (NRV = selling price − costs to complete and sell). FIFO or weighted average; LIFO is not permitted.', src: REG },
      { n: 2, f: 'IAS 36: carrying amount $300,000, fair value $210,000, disposal costs $10,000, value in use $185,000. Impairment loss?', b: 'Recoverable amount = higher of fair value less costs of disposal ($200,000) and value in use ($185,000) = $200,000.\nImpairment loss: $300,000 − $200,000 = $100,000.', src: REG },
      { n: 3, f: 'IAS 10: adjusting vs non-adjusting events', b: 'Adjusting: gives new evidence of a condition that existed at the reporting date, so change the figures.\nNon-adjusting: arose afterwards, so disclose if material. A dividend declared after the date is not a liability at it.', src: REG },
      { n: 4, f: 'IAS 37: when is a provision recognised, and what happens to a possible obligation?', b: 'Provision: a present obligation, an outflow that is probable, and a reliable estimate.\nPossible: disclose as a contingent liability. Remote: nothing.', src: REG },
      { n: 5, f: 'IAS 8: change in accounting policy vs change in accounting estimate', b: 'Policy change: applied retrospectively.\nEstimate change: applied prospectively, from now on, with no restatement.\nA prior period error: restate the comparatives.', src: REG },
      { n: 6, f: 'Cost $60,000, residual $5,000, 5-year life. After 2 years the remaining life is revised to 2 years. New annual charge?', b: 'Old charge $11,000; carrying amount after 2 years $38,000.\nNew charge (38,000 − 5,000) ÷ 2 = $16,500 a year, with no restatement of past years.', src: REG },
      { n: 7, f: 'IAS 38: research vs development costs', b: 'Research is expensed. Development is capitalised as an intangible asset if the criteria are met. Internally generated goodwill is never recognised.', src: REG },
      { n: 8, f: 'The five fundamental ethical principles', b: 'Integrity, objectivity, professional competence and due care, confidentiality, and professional behaviour.', src: REG },
      { n: 9, f: 'Qualified vs unqualified audit report', b: 'Unqualified: the statements give a true and fair view.\nQualified: a true and fair view "except for" a stated material matter or missing evidence.', src: REG },
      { n: 10, f: 'External audit vs internal audit', b: 'External: independent, appointed by and reporting to the shareholders on the financial statements.\nInternal: within the business, reports to management, reviews controls and efficiency.', src: REG },
      { n: 11, f: 'IAS 1: the five parts of a complete set of financial statements', b: 'Statement of financial position; statement of profit or loss and other comprehensive income; statement of changes in equity; statement of cash flows; notes.', src: REG },
    ]),
    ...sub(AFA, 'business-acquisition-and-merger', '3.3', [
      { n: 1, f: 'Merger vs acquisition', b: 'Merger: two or more businesses join to form a new business entity.\nAcquisition: one entity buys another business, so it becomes larger.', src: BAM },
      { n: 2, f: 'Assets at agreed values $52,000, liabilities taken over $9,500. Paid with 18,000 $1 shares issued at $2.50 plus $5,500 cash. Goodwill?', b: 'Net assets $42,500. Consideration $45,000 + $5,500 = $50,500.\nGoodwill $50,500 − $42,500 = $8,000 (an intangible non-current asset).', src: BAM },
      { n: 3, f: 'In that acquisition, 18,000 $1 shares are issued at $2.50. Credits to share capital and share premium?', b: 'Share capital $18,000 (nominal value).\nShare premium 18,000 × $1.50 = $27,000.', src: BAM },
      { n: 4, f: 'Business purchase account vs realisation account', b: 'Business purchase account: in the buyer\'s books; collects the price and is cleared when the consideration is settled.\nRealisation account: in the seller\'s books; records the sale of the assets and liabilities.', src: BAM },
      { n: 5, f: 'A partnership sharing 3:1 revalues before admitting a partner: premises up $6,000, inventory down $600. How is the result shared?', b: 'Revaluation profit $5,400, shared in the old ratio: $4,050 and $1,350.', src: BAM },
      { n: 6, f: 'A company buys only individual assets, not a whole business. What goodwill arises?', b: 'None. The purchase is recorded asset by asset at cost; goodwill arises only when a single price is paid for a whole business.', src: BAM },
      { n: 7, f: 'A buyer pays $65,000 for a business with book net assets of $60,500. Seller\'s realisation profit and where it goes?', b: '$4,500 profit, credited to the seller\'s capital account (or to the partners in their profit-sharing ratio).', src: BAM },
      { n: 8, f: 'Paying for an acquisition with shares vs debentures or cash', b: 'Shares: save cash, but dilute existing shareholders.\nDebentures or cash: no dilution, but interest must be paid (and gearing rises) or the bank balance falls.', src: BAM },
    ]),
    ...sub(AFA, 'computerised-accounting-systems', '3.4', [
      { n: 1, f: 'Control total vs record count vs hash total', b: 'Control total: a meaningful sum (total of balances).\nRecord count: how many accounts.\nHash total: a sum with no meaning in itself (total of account codes).\nAll three compare the system with the source.', src: CAS },
      { n: 2, f: 'Validation vs verification', b: 'Validation: the system tests that an entry is reasonable (format, range, existing code).\nVerification: checking an entry against its source. A balance can pass validation and still be wrong.', src: CAS },
      { n: 3, f: 'Why is a period end the usual cut-over date for a transfer?', b: 'The opening balances are the closing balances of a finished period, so the manual books can be finalised and there is a clear point to compare against.', src: CAS },
      { n: 4, f: 'Direct, parallel and phased changeover', b: 'Direct: cheapest, highest risk.\nParallel: gives a comparison, at the cost of double work.\nPhased: limits faults to one ledger, but prolongs the changeover.', src: CAS },
      { n: 5, f: 'A balance of 960 is keyed as 690. What is the difference, and what does it suggest?', b: 'Difference 270 = 9 × 30. A difference divisible by 9 points towards a transposition but does not prove it, so the figures must still be compared.', src: CAS },
      { n: 6, f: 'A supplier credit balance of $1,730 is entered as a debit. Effect on the trial balance?', b: 'The totals differ by twice the amount: 2 × $1,730 = $3,460. A difference of exactly double a balance suggests an entry on the wrong side.', src: CAS },
      { n: 7, f: 'Customer codes 6101 to 6105 have a hash total of 30,515. The system shows 24,411. What is missing?', b: '30,515 − 24,411 = 6,104, so account 6104 is missing.', src: CAS },
      { n: 8, f: 'An invoice dated 30 June is in the manual closing payables. Cut-over is 1 July. Should it be keyed as a July transaction?', b: 'No. It is already in the opening balance, so keying it again would count it twice.', src: CAS },
    ]),
    ...sub(AFA, 'a-analysis-and-communication-of-accounting-information', '3.5', [
      { n: 1, f: 'Working capital cycle: formula, and the cycle for inventory 58 days, receivables 42 days, payables 61 days', b: 'Receivables days + inventory days − payables days.\n42 + 58 − 61 = 39 days.', src: ANA },
      { n: 2, f: 'Net working assets to revenue: formula', b: '(Inventories + trade receivables − trade payables) ÷ revenue × 100, shown as a percentage.', src: ANA },
      { n: 3, f: 'Interest cover: formula, and the figure for profit from operations $840,000 and interest payable $210,000', b: 'Profit from operations ÷ interest payable.\n840,000 ÷ 210,000 = 4.0 times.', src: ANA },
      { n: 4, f: 'Gearing: formula, and the figure for non-current liabilities 600, share capital 1,000 and reserves 1,400 ($000)', b: 'Non-current liabilities ÷ (issued ordinary share capital + all reserves + non-current liabilities) × 100.\n600 ÷ 3,000 × 100 = 20.0%.', src: ANA },
      { n: 5, f: 'Profit for the year $450,000; 1,800,000 ordinary shares; market price $3.50. EPS and P/E?', b: 'EPS = 450,000 ÷ 1,800,000 = $0.25 = 25.0 cents.\nP/E = 3.50 ÷ 0.25 = 14.0.', src: ANA },
      { n: 6, f: 'Dividend per share, dividend yield and dividend cover: formulae', b: 'DPS = (interim dividend paid + final dividend proposed) ÷ number of ordinary shares.\nYield = DPS ÷ market price per share.\nCover = profit available for ordinary dividend ÷ annual ordinary dividend.', src: ANA },
      { n: 7, f: 'What does a high P/E ratio with a low dividend yield suggest?', b: 'Investors expect growth: they pay a high price relative to current earnings and accept a small cash return.', src: ANA },
      { n: 8, f: 'A company issues new loan notes. Effect on gearing and interest cover?', b: 'Gearing rises; interest payable rises, so interest cover falls. Earnings per share also become more sensitive to changes in profit.', src: ANA },
    ]),

    // 4 Cost and management accounting (A Level)
    ...sub(ACMA, 'activity-based-costing-abc', '4.1', [
      { n: 1, f: 'Cost pool and cost driver', b: 'Cost pool: the overhead cost collected for one activity.\nCost driver: the factor that causes the cost of an activity and measures each product\'s use of it.', src: ABC },
      { n: 2, f: 'An inspection pool of $45,000 is driven by 150 inspections. A product needs 12 inspections for 800 units. Cost per unit?', b: 'Driver rate 45,000 ÷ 150 = $300 per inspection.\n12 × $300 = $3,600; $3,600 ÷ 800 = $4.50 per unit.', src: ABC },
      { n: 3, f: 'Total cost $13.50 per unit. Selling price with a 40% mark-up, and the margin that gives', b: 'Price = 13.50 × 1.40 = $18.90.\nProfit $5.40; margin = 5.40 ÷ 18.90 = 28.6% of selling price.', src: ABC },
      { n: 4, f: 'Selling price from a margin on selling price: formula', b: 'Selling price = total cost ÷ (1 − margin %). Mark-up is profit as a percentage of cost; margin is profit as a percentage of selling price.', src: ABC },
      { n: 5, f: 'What makes a good cost driver?', b: 'It causes the pool cost (cause and effect), can be measured for each product, the data is available at reasonable cost, and products use it in different proportions.', src: ABC },
      { n: 6, f: 'Why can ABC raise the cost of a low-volume product?', b: 'Low-volume products use set-ups, inspections and orders heavily for their size. Labour-hour absorption spreads these costs over high-volume lines; ABC moves them back to the products that cause them.', src: ABC },
      { n: 7, f: '400 units are in closing inventory. Overhead is $6.00 per unit under ABC and $4.50 traditionally. Effect on total profit?', b: 'Profit is 400 × $1.50 = $600 higher under ABC, because more overhead is carried forward in inventory. If all output is sold, total profit is the same under both.', src: ABC },
      { n: 8, f: 'Three limitations of ABC', b: 'Costly and time-consuming to set up and run; the choice of pools and drivers needs judgement; some overheads have no clear driver; savings appear only if resources are actually removed.', src: ABC },
    ]),
    ...sub(ACMA, 'standard-costing', '4.2', [
      { n: 1, f: 'Direct material price and usage variance formulae', b: 'Price = (standard price − actual price) × actual quantity bought.\nUsage = (standard quantity for actual output − actual quantity used) × standard price.', src: STD },
      { n: 2, f: 'Standard 3 m at $4.00 per unit. 500 units made using 1,540 m costing $6,468. Price and usage variances?', b: 'Price: 1,540 × $4.00 − $6,468 = $308 A.\nUsage: (1,500 − 1,540) × $4.00 = $160 A.', src: STD },
      { n: 3, f: 'Standard 2 hours at $9.00 per unit. 300 units made in 590 hours costing $5,605. Rate and efficiency variances?', b: 'Rate: 590 × $9.00 − $5,605 = $295 A.\nEfficiency: (600 − 590) × $9.00 = $90 F.', src: STD },
      { n: 4, f: 'Fixed overhead expenditure and volume variances, and how volume splits', b: 'Expenditure = budgeted − actual fixed overhead.\nVolume = (actual output − budgeted output) × standard fixed overhead per unit.\nVolume = capacity + efficiency sub-variances.', src: STD },
      { n: 5, f: 'Budget 1,000 hours, fixed overhead $12 per hour. Actual 950 hours worked; standard hours for actual output 920. Capacity and efficiency variances?', b: 'Capacity: (950 − 1,000) × $12 = $600 A.\nEfficiency: (920 − 950) × $12 = $360 A.\nVolume: $960 A.', src: STD },
      { n: 6, f: 'Sales price and sales volume variances', b: 'Price = (actual price − standard price) × actual units sold.\nVolume = (actual units sold − budgeted units) × standard profit per unit.', src: STD },
      { n: 7, f: 'Material price favourable with usage adverse; labour rate favourable with efficiency adverse. Likely causes?', b: 'Materials: cheaper material that was wasted more.\nLabour: trainees or less skilled staff, paid less but working slower.', src: STD },
      { n: 8, f: 'Two advantages and two disadvantages of standard costing', b: 'Advantages: management by exception; variances assigned to managers; targets can motivate; simpler inventory valuation.\nDisadvantages: standards are costly to set and update; out-of-date standards mislead; variances are known only after the event.', src: STD },
    ]),
    ...sub(ACMA, 'budgeting-and-budgetary-control', '4.3', [
      { n: 1, f: 'Master budget', b: 'The summary of all the budgets: usually the budgeted statement of profit or loss, budgeted statement of financial position and cash budget.', src: BUD },
      { n: 2, f: 'Production budget formula. Sales 450 units, opening inventory 60, closing 90?', b: 'Production = sales + closing inventory − opening inventory.\n450 + 90 − 60 = 480 units.', src: BUD },
      { n: 3, f: 'Material used 1,200 kg; opening inventory 150 kg; closing 200 kg; $3.20 per kg. Purchases?', b: '1,200 + 200 − 150 = 1,250 kg.\n1,250 × $3.20 = $4,000.', src: BUD },
      { n: 4, f: 'Sales: January $10,000, February $12,000. Customers pay 70% one month after sale, 30% two months after. Cash received in March?', b: '30% × $10,000 + 70% × $12,000 = $3,000 + $8,400 = $11,400.', src: BUD },
      { n: 5, f: 'Why is depreciation left out of a cash budget?', b: 'It is a non-cash expense: no money leaves the business. It is still included in the budgeted statement of profit or loss.', src: BUD },
      { n: 6, f: 'Variable costs are $18,000 at 600 units. Flexed figure at 750 units, and what happens to fixed costs?', b: '$18,000 ÷ 600 = $30 per unit; 750 × $30 = $22,500.\nFixed costs are not flexed (within the normal activity range).', src: BUD },
      { n: 7, f: 'Why compare actual results with a flexed budget rather than a fixed budget?', b: 'Both relate to the same output, so the remaining differences come from price, efficiency and spending, not volume. Managers are not blamed for volume they did not control.', src: BUD },
      { n: 8, f: 'Limiting factor in budgeting', b: 'The scarce resource or condition that caps activity (demand, labour, materials, machine hours, cash). Budget that function first and fit the others to it.', src: BUD },
      { n: 9, f: 'Participative vs imposed budgets: one risk of each', b: 'Participative: managers may build slack into their requests.\nImposed: quick and aligned with objectives, but managers may resent and reject targets they did not help set.', src: BUD },
    ]),
    ...sub(ACMA, 'investment-appraisal', '4.4', [
      { n: 1, f: 'Discount factor formula, and the factor for year 3 at 8%', b: '1 ÷ (1 + r)ⁿ.\n1 ÷ 1.08³ = 0.7938.', src: INV },
      { n: 2, f: 'Cost $50,000; inflows $15,000, $20,000, $25,000, $10,000 in years 1–4. Payback?', b: 'Cumulative $15,000, $35,000 after 2 years; $15,000 still needed from year 3\'s $25,000.\n2 + 15,000 ÷ 25,000 = 2.6 years (about 2 years 7 months).', src: INV },
      { n: 3, f: 'ARR: formula. Cost $40,000, 4 years, total net cash inflows $56,000, no residual value?', b: 'ARR = average profit ÷ average investment × 100.\nProfit $16,000; average profit $4,000; average investment $20,000; ARR = 20%.', src: INV },
      { n: 4, f: 'Cost $30,000; $12,000 a year for 3 years; factors at 10%: 0.9091, 0.8264, 0.7513. NPV and decision?', b: 'Present values 10,909 + 9,917 + 9,016 = $29,842.\nNPV = 29,842 − 30,000 = ($158). Negative, so reject.', src: INV },
      { n: 5, f: 'NPV is $2,000 at 12% and ($1,500) at 16%. Estimate the IRR', b: 'IRR ≈ 12 + [2,000 ÷ (2,000 + 1,500)] × 4 = 14.3%. It is an estimate from interpolation; accept only if above the cost of capital.', src: INV },
      { n: 6, f: 'Forecast profit $9,000 after depreciation $6,000 and an apportioned overhead of $1,500 that would be paid anyway. Net cash inflow?', b: '9,000 + 6,000 + 1,500 = $16,500. Depreciation is non-cash and the apportioned overhead is not a relevant cash flow.', src: INV },
      { n: 7, f: 'Which appraisal techniques ignore the time value of money, and which uses profit rather than cash?', b: 'Payback and ARR ignore the time value of money. ARR uses profit; payback, NPV and IRR use cash flows.', src: INV },
      { n: 8, f: 'One strength and one weakness each of payback and NPV', b: 'Payback: simple, shows speed of cash recovery; ignores later cash flows and the time value of money.\nNPV: uses all cash flows and the time value of money, shows value added; needs a cost of capital and relies on forecasts.', src: INV },
    ]),
  ],
};
