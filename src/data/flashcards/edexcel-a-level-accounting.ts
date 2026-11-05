/**
 * D-438 -- flashcards for Pearson Edexcel International A Level Accounting YAC11
 * (specification Issue 2, first teaching 2015).
 *
 * One block per subtopic (topics 1.1 and 1.2) or per topic (1.3 to 2.9, which
 * the syllabus record does not itemise into subtopics), in specification order.
 * Card ids are `<subtopic number>-<n>` or `<topic number>-<n>`, using the
 * record's own printed numbers (for example '1.1.3-1.1.7-2' or '2.4-5'), and are
 * permanent (browser progress is keyed by them): add a new card with the next
 * unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs YAC11, or a definition table,
 *               formula table or worked reminder on the page); origin 'revision-notes'.
 *
 * The course is not tiered (Unit 1 is the International AS unit), so no card is
 * marked upper tier. Amounts are plain figures, as on most of the course's notes.
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

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, u, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    ...(u ? { tier: 'upper' as const } : {}),
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const ROLE = 'edexcel-ial-accounting-the-role-and-purpose-of-accounting-and-accounting-conce-revision-notes';
const DE = 'edexcel-ial-accounting-the-double-entry-system-revision-notes';
const CRD = 'edexcel-ial-accounting-capital-and-revenue-expenditure-and-non-current-asset-d-revision-notes';
const TBE = 'edexcel-ial-accounting-the-trial-balance-and-correction-of-errors-revision-notes';
const CTRL = 'edexcel-a-level-accounting-control-accounts-revision-notes';
const FSO = 'edexcel-ial-accounting-financial-statements-of-organisations-revision-notes';
const COSTI = 'edexcel-ial-accounting-introduction-to-costing-revision-notes';
const ANAL = 'edexcel-ial-accounting-analysis-of-accounting-statements-revision-notes';
const SOC = 'edexcel-ial-accounting-social-and-ethical-accounting-revision-notes';
const LTD = 'edexcel-ial-accounting-limited-companies-revision-notes';
const INVR = 'edexcel-ial-accounting-investment-ratios-revision-notes';
const SCF = 'edexcel-ial-accounting-statement-of-cash-flows-revision-notes';
const BUDG = 'edexcel-ial-accounting-budgeting-revision-notes';
const STDC = 'edexcel-ial-accounting-standard-costing-revision-notes';
const PROJ = 'edexcel-ial-accounting-project-appraisal-revision-notes';
const BEA = 'edexcel-ial-accounting-break-even-analysis-revision-notes';
const MCAC = 'edexcel-ial-accounting-marginal-costing-and-absorption-costing-revision-notes';
const ICT = 'edexcel-ial-accounting-information-and-communication-technology-in-accounting-revision-notes';

const T11 = 'principles-of-accounting-and-double-entry-bookkeeping';
const T12 = 'control-procedures';

export const DECK_EDEXCEL_A_LEVEL_ACCOUNTING: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'a-level',
  subjectSlug: 'accounting',
  syllabusCode: 'YAC11',
  syllabusSeries: '2015-onwards',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'javaid-iqbal-sabri', reviewedOn: '2026-11-05' },
  cards: [
    // 1.1 Principles of accounting and double entry bookkeeping
    ...sub(T11, 'role-and-purpose-of-accounting-yac11', '1.1.1-1.1.2', [
      { n: 1, f: 'The three parts of the role of accounting', b: 'Record transactions in money terms, analyse them (totals, comparisons, percentages) and communicate the results to users.', src: ROLE },
      { n: 2, f: 'Five ways accounting is an aid to management', b: 'Planning, controlling, decision making, assessing performance and safeguarding assets.', src: ROLE },
      { n: 3, f: 'What do a lender, a supplier and the tax authority each want to know from the accounts?', b: 'Lender: ability to repay the loan and interest.\nSupplier: likelihood of being paid on time.\nTax authority: taxable profit.', src: ROLE },
      { n: 4, f: 'Revenue 90,000, cost of sales 54,000. Gross profit as a percentage of revenue?', b: 'Gross profit 36,000. 36,000 ÷ 90,000 × 100 = 40.0%. If last year was 44%, the manager asks why the margin fell.', src: ROLE },
    ]),
    ...sub(T11, 'the-double-entry-system-yac11', '1.1.3-1.1.7', [
      { n: 1, f: 'Debit and credit rules for assets, expenses, liabilities, capital and income', b: 'Assets, expenses and drawings: debit to increase, credit to decrease.\nLiabilities, capital, revenue and other income: credit to increase, debit to decrease.', src: DE },
      { n: 2, f: 'Double entry: owner takes goods for own use', b: 'Debit Drawings, credit Purchases.', src: DE },
      { n: 3, f: 'Double entry: discount allowed to a customer, and discount received from a supplier', b: 'Discount allowed: debit Discount allowed, credit the customer.\nDiscount received: debit the supplier, credit Discount received.', src: DE },
      { n: 4, f: 'Electricity paid 1,380; 210 owing at the start and 340 owing at the end. Charge for the year?', b: 'Paid + closing accrual − opening accrual.\n1,380 + 340 − 210 = 1,510.', src: DE },
      { n: 5, f: 'Insurance paid 960; 120 prepaid at the start and 270 prepaid at the end. Charge for the year?', b: 'Paid + opening prepayment − closing prepayment.\n960 + 120 − 270 = 810.', src: DE },
      { n: 6, f: 'Opening inventory 3,800, purchases 27,600, purchases returns 900, closing inventory 4,300. Cost of sales?', b: '3,800 + 27,600 − 900 − 4,300 = 26,200.', src: DE },
      { n: 7, f: 'Receivables after write-offs 36,000; allowance 4%; existing allowance 1,260. What goes through profit or loss?', b: 'New allowance 1,440. Increase 1,440 − 1,260 = 180, an expense: debit statement of profit or loss, credit allowance.', src: DE },
      { n: 8, f: 'The allowance for irrecoverable debts falls from 1,440 to 1,210. Entry?', b: 'Debit Allowance for irrecoverable debts 230; credit the statement of profit or loss 230, which increases profit.', src: DE },
      { n: 9, f: 'Imprest petty cash: float 120, payments of 86. Reimbursement and the credit entry?', b: 'Reimburse 86, credited to Bank, restoring the float to 120. The analysis totals are debited to the expense accounts.', src: DE },
      { n: 10, f: 'In which book of prime entry is a credit note received from a supplier first recorded?', b: 'The purchases returns day book. It is posted as debit the supplier, credit Purchases returns.', src: DE },
      { n: 11, f: 'A figure of 1,650 is keyed as 1,560 in accounting software. Why does the trial balance still agree?', b: 'The software posts the wrong amount to both sides equally. The error is 90, divisible by 9, a typical sign of transposed digits.', src: DE },
    ]),
    ...sub(T11, 'accounting-concepts-and-conventions-yac11', '1.1.8-1.1.10', [
      { n: 1, f: '30 units cost 8 each; selling price 12 with selling costs of 5 each. Inventory value and concept?', b: 'NRV = 12 − 5 = 7. Value at the lower of cost and NRV: 30 × 7 = 210 (cost 240). Profit falls by 30. Prudence.', src: ROLE },
      { n: 2, f: 'A deposit of 500 is received for goods to be delivered next month. Year-end treatment and concept?', b: 'A liability until delivery; it is not yet revenue. Realisation: revenue is recognised when the goods or services are supplied.', src: ROLE },
      { n: 3, f: 'Rent of 6,000 for 12 months is paid on 1 October. Year end 31 December. Expense and prepayment?', b: 'Expense 3 × 500 = 1,500. Prepayment 4,500 (other receivables). Accruals concept.', src: ROLE },
      { n: 4, f: 'Land cost 90,000 and is now worth 140,000. Which concept keeps it at 90,000?', b: 'Historic cost: assets are recorded at the price paid.', src: ROLE },
      { n: 5, f: 'Materiality', b: 'An item matters only if it could change a user\'s decision. Immaterial items (a cheap stapler) can be expensed rather than treated strictly.', src: ROLE },
      { n: 6, f: 'Money measurement', b: 'Only items that can be measured reliably in money are recorded, so staff skills and reputation are left out of the accounts.', src: ROLE },
      { n: 7, f: 'Going concern', b: 'The business will continue for the foreseeable future, so assets are kept at carrying value and costs spread over asset lives.', src: ROLE },
      { n: 8, f: 'Accruals vs realisation', b: 'Accruals matches income and expenses to the period they are earned or incurred. Realisation fixes the point at which revenue is earned.', src: ROLE },
      { n: 9, f: 'Business entity: the owner pays a personal holiday from the business bank account', b: 'Owner and business are separate, so it is drawings, not a business expense. Drawings reduce capital.', src: ROLE },
      { n: 10, f: 'Give the IAS terms for debtors, creditors, stock and net book value', b: 'Trade receivables, trade payables, inventory and carrying value.', src: ROLE },
      { n: 11, f: 'Two benefits of International Accounting Standards', b: 'Comparability between businesses, trust in the statements, and less room to flatter the figures.', src: ROLE },
    ]),
    ...sub(T11, 'capital-and-revenue-expenditure-yac11', '1.1.11-1.1.12', [
      { n: 1, f: 'Capital vs revenue expenditure, with examples', b: 'Capital: acquiring or improving a non-current asset (price, delivery, installation, an upgrade adding capacity); goes to the SOFP then is depreciated.\nRevenue: running costs or maintenance (repairs, servicing, fuel); charged in full to profit or loss.', src: CRD },
      { n: 2, f: 'Effect of treating capital expenditure as revenue expenditure, and the reverse', b: 'Capital as revenue: profit understated and non-current assets understated.\nRevenue as capital: profit overstated and non-current assets overstated.', src: CRD },
      { n: 3, f: 'Is the cost of installing a new machine capital or revenue expenditure?', b: 'Capital: it is a cost of getting the asset ready for use.', src: CRD },
      { n: 4, f: 'An upgrade that adds capacity vs a repair that restores original condition', b: 'The upgrade is capital expenditure; the repair is revenue expenditure.', src: CRD },
      { n: 5, f: 'A capital item of 5,000 is charged as an expense in error. Effect on profit, ignoring depreciation?', b: 'Profit is understated by 5,000, and non-current assets are understated by 5,000.', src: CRD },
      { n: 6, f: 'Four concepts used to justify capital and revenue decisions', b: 'Accruals (spread a multi-year benefit), prudence (do not overstate profit or assets), materiality (trivial items expensed), consistency (same policy each year).', src: CRD },
    ]),
    ...sub(T11, 'non-current-asset-depreciation-yac11', '1.1.13-1.1.20', [
      { n: 1, f: 'Five causes of depreciation', b: 'Wear and tear, obsolescence, passage of time (leases, patents), depletion and inadequacy.', src: CRD },
      { n: 2, f: 'Three things depreciation is not', b: 'It is not a cash outflow, not a fund set aside for replacement, and carrying value is not market value.', src: CRD },
      { n: 3, f: 'Straight line: cost 36,000, residual value 3,000, life 6 years. Annual charge?', b: '(36,000 − 3,000) ÷ 6 = 5,500 a year.', src: CRD },
      { n: 4, f: 'Reducing balance at 20% on cost 36,000: charges for years 1 to 3', b: 'Year 1: 7,200 (carrying value 28,800).\nYear 2: 5,760 (23,040).\nYear 3: 4,608 (18,432).\nResidual value is ignored in the calculation.', src: CRD },
      { n: 5, f: 'A van costing 18,000 is bought on 1 October; 15% a year on cost; year end 31 December. Charge for the year?', b: '18,000 × 15% × 3/12 = 675.', src: CRD },
      { n: 6, f: 'Revaluation method: fixtures valued 8,500 at the start, 900 bought, valued 7,300 at the end. Depreciation?', b: 'Opening valuation + additions − closing valuation = 8,500 + 900 − 7,300 = 2,100.', src: CRD },
      { n: 7, f: 'A van (cost 16,000, accumulated depreciation 9,600) is part-exchanged for an allowance of 5,000. Result?', b: 'Carrying value 6,400. Loss on disposal 6,400 − 5,000 = 1,400. The new van is recorded at its full price.', src: CRD },
      { n: 8, f: 'After two years of straight line at 5,500 a year on cost 36,000, the business switches to 20% reducing balance. New charge and effect?', b: 'Carrying value 36,000 − 11,000 = 25,000. Charge 20% × 25,000 = 5,000: 500 less than 5,500, so profit is 500 higher that year. Earlier years are not restated.', src: CRD },
      { n: 9, f: 'Disposals account: the four steps', b: 'Debit with the asset at cost. Credit with depreciation to the date of disposal. Credit with the proceeds or part-exchange allowance. The balance is a profit (credit side) or loss (debit side), transferred to profit or loss.', src: CRD },
      { n: 10, f: 'Schedule of non-current assets: what must agree with the statement of financial position?', b: 'Closing carrying value = closing cost − closing accumulated depreciation, for each class and in total.', src: CRD },
    ]),

    // 1.2 Control procedures
    ...sub(T12, 'trial-balance-yac11', '1.2.1-1.2.2', [
      { n: 1, f: 'Trial balance', b: 'A list of all ledger balances at one date, in a debit and a credit column. The totals should agree.', src: TBE },
      { n: 2, f: 'Which items go in the debit column and which in the credit column of a trial balance?', b: 'Debit: assets, expenses, purchases, drawings, discount allowed.\nCredit: liabilities (including a bank overdraft), capital, revenue, discount received.', src: TBE },
      { n: 3, f: 'Trade payables account: credits 18,900, debits 14,250. Balance and trial balance column?', b: 'Balance 4,650, brought down on the credit side, so it goes in the credit column.', src: TBE },
      { n: 4, f: 'Limitations of an agreeing trial balance', b: 'It misses omission, posting to the wrong account of the right type, posting to the wrong type of account, the same wrong figure on both sides, reversal and compensating errors. It also gives no profit or financial position.', src: TBE },
    ]),
    ...sub(T12, 'control-accounts-yac11', '1.2.3-1.2.4', [
      { n: 1, f: 'Control account, and why it is an independent check', b: 'A summary account totalling a sales or purchases ledger. Its balance should equal the total of the personal accounts. It is built from different data (book of prime entry totals), so a mismatch reveals an error.', src: CTRL },
      { n: 2, f: 'Building a receivables control account', b: 'Opening balance + credit sales − sales returns − cash and cheques received − discounts allowed − irrecoverable debts written off ± contras = closing balance.', src: CTRL },
      { n: 3, f: 'Building a payables control account', b: 'Opening balance + credit purchases − purchases returns − payments − discounts received − contras = closing balance.' },
      { n: 4, f: 'A customer is also a supplier and the balances are set off (a contra). Entry?', b: 'Debit the payables control account, credit the receivables control account, with the amount set off.' },
      { n: 5, f: 'Does a control account mismatch tell you the type of error?', b: 'No. It only proves there is an error somewhere in that ledger.', src: CTRL },
    ]),
    ...sub(T12, 'correction-of-errors-yac11', '1.2.5-1.2.9', [
      { n: 1, f: 'Errors that make the trial balance disagree', b: 'One-sided entries, different amounts on each side, a transposition on one side, casting (addition) errors, and a balance left out or put in the wrong column.', src: TBE },
      { n: 2, f: 'Clues from the size of a trial balance difference', b: 'Divisible by 9: suspect a transposition (387 = 9 × 43), though it is only a clue.\nTwice a balance: that balance may be in the wrong column.\nEqual to a posting: suspect a one-sided entry.', src: TBE },
      { n: 3, f: 'How do you correct an error of original entry and a complete reversal?', b: 'Original entry: post only the difference.\nComplete reversal: post twice the amount, the right way round.', src: TBE },
      { n: 4, f: 'Rent paid of 850 was debited to Bank and credited to Rent. Correcting journal?', b: 'Debit Rent 1,700, credit Bank 1,700 (twice 850).', src: TBE },
      { n: 5, f: 'Debits exceed credits in the trial balance. Which side is the suspense balance?', b: 'A credit balance. (Credits exceed debits: a debit balance.) Only errors that make the totals disagree pass through suspense, and it must close to nil.', src: TBE },
      { n: 6, f: 'Suspense debit 1,260. Rent of 1,500 was credited to bank but not debited to rent; a return of 240 was not credited to purchases returns. Clear it.', b: 'Debit Rent 1,500, credit Suspense 1,500.\nDebit Suspense 240, credit Purchases returns 240.\nSuspense: 1,260 + 240 = 1,500 debits against 1,500 credit, so nil.', src: TBE },
      { n: 7, f: 'Profit 18,600. Purchases understated by 420, revenue overstated by 700, wages overstated by 150. Revised profit?', b: '18,600 − 420 − 700 + 150 = 17,630.', src: TBE },
      { n: 8, f: 'A computer costing 1,900 was debited to purchases. Does the trial balance disagree? Correction and effect on profit?', b: 'No: an error of principle with both sides posted. Debit Computer equipment 1,900, credit Purchases 1,900. Profit was understated by 1,900.', src: TBE },
      { n: 9, f: 'Which errors change profit in a statement of revised profit?', b: 'Only corrections to income or expense accounts. An understated expense reduces profit; understated income increases it. Errors between statement of financial position accounts have no effect.', src: TBE },
      { n: 10, f: 'Control account or list of balances: which is corrected for a day book mis-total, and for a balance mis-copied into the list?', b: 'Day book total over- or under-added: correct the control account.\nBalance mis-copied or mis-added in the list: correct the list only.', src: TBE },
      { n: 11, f: 'A customer\'s credit balance of 80 was listed as a debit. Effect on the list of balances?', b: 'The list is overstated by 160, twice the balance. The control account is not changed.', src: TBE },
    ]),

    // 1.3 Financial statements of organisations
    ...topicOnly('financial-statements-of-organisations', '1.3', [
      { n: 1, f: 'Sole trader: closing capital', b: 'Opening capital + profit for the year − drawings (+ any capital introduced).', src: FSO },
      { n: 2, f: 'Rates paid 5,400; 900 prepaid at the start and 1,100 at the end. Expense?', b: '5,400 + 900 − 1,100 = 5,200.', src: FSO },
      { n: 3, f: 'Receivables 22,000 after write-offs; allowance 3%; last year\'s allowance 800. Effect on profit and SOFP figure?', b: 'New allowance 660, a decrease of 140, added to profit. Receivables shown at 22,000 − 660 = 21,340.', src: FSO },
      { n: 4, f: 'Departmental accounts: heating of 9,000 shared by floor area of 500 : 250 : 150 m²', b: '5,000 : 2,500 : 1,500 (total area 900 m², so 10 per m²).', src: FSO },
      { n: 5, f: 'Convert these mark-ups to margins: 25%, 50%, 100%', b: '25% mark-up = 20% margin.\n50% mark-up = 33⅓% margin.\n100% mark-up = 50% margin.', src: FSO },
      { n: 6, f: 'Profit 40,000; interest on drawings 600; partner\'s salary 8,000; interest on capital 4,600. Residual profit, shared equally by two partners?', b: '40,000 + 600 − 8,000 − 4,600 = 28,000, so 14,000 each.', src: FSO },
      { n: 7, f: 'Fixed capital vs fluctuating capital accounts', b: 'Fixed: the capital account holds only capital introduced or withdrawn; salaries, interest, profit shares and drawings go to a current account.\nFluctuating: everything goes through the capital account; no current account.', src: FSO },
      { n: 8, f: 'Section 24, Partnership Act 1890: rules where there is no agreement', b: 'Profits and losses shared equally; no salaries; no interest on capital; no interest on drawings; 5% a year on loans beyond agreed capital, charged against profit.', src: FSO },
      { n: 9, f: 'Goodwill of 40,000 (not kept in the books) on admitting Z. New ratio X 2 : Y 2 : Z 1. Debit to Z?', b: 'Old partners are credited in the old ratio; all new partners are debited in the new ratio. Z: 40,000 × 1/5 = 8,000 debit.', src: FSO },
      { n: 10, f: 'A club receives subscriptions of 4,870, including 120 owed from last year and 210 for next year. Income for the year?', b: '4,870 − 120 − 210 = 4,540.', src: FSO },
      { n: 11, f: 'Closing finished goods at transfer price 13,200; mark-up 10%. Unrealised profit?', b: '13,200 × 10/110 = 1,200. Deduct only the increase in the provision from profit; show finished goods at cost.', src: FSO },
      { n: 12, f: 'Opening accumulated fund 12,400; surplus 1,850. Closing accumulated fund?', b: '12,400 + 1,850 = 14,250. The accumulated fund is a club\'s assets minus liabilities.', src: FSO },
    ]),

    // 1.4 Introduction to costing
    ...topicOnly('introduction-to-costing', '1.4', [
      { n: 1, f: 'FIFO vs LIFO in rising prices, and which IAS 2 allows', b: 'FIFO values closing inventory at the latest prices and gives higher profit; LIFO at the oldest prices and lower profit. LIFO is not permitted under IAS 2.', src: COSTI },
      { n: 2, f: 'An item cost 52. It sells for 64 after completion costs of 9 and selling costs of 6. Inventory value?', b: 'NRV = 64 − 9 − 6 = 49, below cost, so 49. This applies prudence.', src: COSTI },
      { n: 3, f: 'Buy 100 units at 4, then 50 at 5, then issue 120. Closing inventory under FIFO and LIFO?', b: '30 units left.\nFIFO: 30 × 5 = 150.\nLIFO: 30 × 4 = 120.', src: COSTI },
      { n: 4, f: 'Halsey bonus: time allowed 30 hours, time taken 24, rate 15 an hour. Total earnings?', b: 'Bonus = 50% × 6 hours saved × 15 = 45. Earnings = 24 × 15 + 45 = 405.', src: COSTI },
      { n: 5, f: 'Rowan bonus: time allowed 30 hours, time taken 24, rate 15 an hour. Total earnings?', b: 'Bonus = (24 ÷ 30) × 6 × 15 = 72. Earnings = 360 + 72 = 432.', src: COSTI },
      { n: 6, f: 'Gross pay 500; employer\'s contributions 11% of gross pay. Employer cost?', b: '500 × 1.11 = 555. The employee\'s own tax and contributions come out of gross pay and are never added to employer cost.', src: COSTI },
      { n: 7, f: 'Machine hour rate 8.00. Actual 9,400 machine hours; actual overhead 73,100. Over- or under-absorbed?', b: 'Absorbed 9,400 × 8 = 75,200, above actual 73,100: over-absorbed by 2,100, which is added to profit.', src: COSTI },
      { n: 8, f: 'When is continuous allotment used?', b: 'When service departments serve each other. Their costs are shared out repeatedly until the amount left is very small, then split between production departments only.', src: COSTI },
      { n: 9, f: 'Job cost sheet: build-up from direct costs to price', b: 'Direct materials + direct labour + direct expenses = prime cost; + absorbed production overhead = production cost; + administration, selling and distribution overhead = total cost; + profit = price.', src: COSTI },
      { n: 10, f: 'Day work vs piecework: one advantage and one disadvantage each', b: 'Day work: simple, steady pay, quality not rushed; but no incentive to raise output.\nPiecework: rewards effort, fixed labour cost per unit; but quality risk and pay hit by breakdowns.', src: COSTI },
      { n: 11, f: 'A 25% mark-up on a cost of 80: price, and the margin it gives', b: 'Price 100. Profit 20 ÷ 100 = a 20% margin. Mark-up is on cost; margin is on selling price.', src: COSTI },
    ]),

    // 1.5 Analysis of accounting statements
    ...topicOnly('analysis-of-accounting-statements', '1.5', [
      { n: 1, f: 'ROCE for a sole trader or partnership: formula and its parts', b: 'NPBI ÷ capital employed × 100.\nNPBI = profit for the year + loan interest.\nCapital employed = capital (for a partnership, capital and current accounts) + non-current liabilities.', src: ANAL },
      { n: 2, f: 'Capitals 60,000 and 45,000; current accounts 3,000 Cr and 1,500 Dr; bank loan 20,000; profit 19,200 after loan interest 1,200. ROCE?', b: 'Capital employed 60,000 + 45,000 + 3,000 − 1,500 + 20,000 = 126,500.\nNPBI 20,400.\nROCE 20,400 ÷ 126,500 × 100 = 16.13%.', src: ANAL },
      { n: 3, f: 'Opening inventory 18,000, closing 22,000, cost of sales 160,000. Inventory turnover?', b: 'Average inventory 20,000. 160,000 ÷ 20,000 = 8 times.', src: ANAL },
      { n: 4, f: 'Current assets 54,000 (inventory 21,000); current liabilities 30,000. Current and liquid ratios?', b: 'Current ratio 54,000 ÷ 30,000 = 1.80 : 1.\nLiquid ratio 33,000 ÷ 30,000 = 1.10 : 1.', src: ANAL },
      { n: 5, f: 'Convert a 60% mark-up to a margin, and a 20% margin to a mark-up', b: 'Margin = mark-up ÷ (100 + mark-up) × 100 = 60 ÷ 160 × 100 = 37.5%.\nMark-up = margin ÷ (100 − margin) × 100 = 20 ÷ 80 × 100 = 25%.', src: ANAL },
      { n: 6, f: 'Trade receivables 15,600; credit sales 189,800. Collection period?', b: '15,600 ÷ 189,800 × 365 = 30 days. Use credit sales, not total revenue.', src: ANAL },
      { n: 7, f: 'Gross profit % is steady but profit for the year as a % of revenue falls. What does it suggest?', b: 'Expenses have grown faster than revenue. Look for the expense that rose.', src: ANAL },
      { n: 8, f: 'The current ratio rises but the liquid ratio stays flat. What does it suggest?', b: 'A build-up of inventory: liquidity looks better than it really is.', src: ANAL },
      { n: 9, f: 'Projection: revenue 400,000, gross margin 25%, target inventory turnover 6 times, opening inventory 46,000. Closing inventory?', b: 'Cost of sales 300,000. Average inventory 300,000 ÷ 6 = 50,000. Closing = 2 × 50,000 − 46,000 = 54,000.', src: ANAL },
      { n: 10, f: 'Three limits of ratio appraisal', b: 'Any three: the SOFP shows one date that may not be typical; different inventory and depreciation methods; inflation distorts comparisons; non-financial factors are ignored; a projection depends on its assumptions.', src: ANAL },
    ]),

    // 1.6 Social and ethical accounting
    ...topicOnly('social-and-ethical-accounting', '1.6', [
      { n: 1, f: 'The five social contexts in 1.6.1', b: 'Local community, environment, workforce, health and safety, and use of natural resources.', src: SOC },
      { n: 2, f: 'Non-financial factor', b: 'Something relevant to a decision that cannot be measured reliably in money, such as morale, quality, reputation or community impact.', src: SOC },
      { n: 3, f: 'Social accounting', b: 'Considering the effects of accounting decisions on society, not only on profit.', src: SOC },
      { n: 4, f: 'A department has gross profit 30,000, its own wages 34,000 and apportioned overheads 8,000. Should it close?', b: 'Reported loss (12,000), but contribution is 30,000 − 34,000 = (4,000). Closing it raises total profit by 4,000 if the overheads remain. Then weigh staff and community effects.', src: SOC },
      { n: 5, f: 'Receivables 45,000. The owner cuts the allowance from 4% to 2% while bad debts are rising. Effect and concept broken?', b: 'Allowance falls from 1,800 to 900, so profit rises by 900. It breaks prudence.', src: SOC },
      { n: 6, f: 'Goods with a selling price of 6,000 (cost plus 25%) are recorded as sold before delivery. Effect and concept broken?', b: 'Cost 6,000 ÷ 1.25 = 4,800, so profit is overstated by 1,200. It breaks realisation.', src: SOC },
      { n: 7, f: 'Draft profit 18,600; current assets 21,360; current liabilities 12,000. A 1,350 electricity bill owed is left out. Correct figures?', b: 'Profit 18,600 − 1,350 = 17,250.\nCurrent ratio 21,360 ÷ 13,350 = 1.60 : 1, not 1.78 : 1. Leaving it out misleads lenders and suppliers.', src: SOC },
      { n: 8, f: 'Unethical vs illegal', b: 'Many unethical treatments are not crimes. Name the concept broken and the misleading effect instead of calling it illegal.', src: SOC },
      { n: 9, f: 'How can social harm return to the accounts as a cost?', b: 'Through fines, compensation claims, clean-up costs, higher staff turnover and lost customers.', src: SOC },
    ]),

    // 2.1 Limited companies
    ...topicOnly('limited-companies-yac', '2.1', [
      { n: 1, f: 'Company statement of profit or loss: the subtotals in order', b: 'Gross profit; profit from operations (after distribution costs and administrative expenses); profit before tax (after finance costs); profit for the year from continuing operations (after tax); profit for the year; total comprehensive income.', src: LTD },
      { n: 2, f: '250,000 ordinary shares of 0.40 are issued at 0.90 for cash. Entries?', b: 'Debit bank 225,000; credit share capital 100,000; credit share premium 125,000.', src: LTD },
      { n: 3, f: '1,400,000 shares of 1.00; a 2 for 7 rights issue at 1.30. New shares, cash and share premium?', b: '400,000 new shares; cash 520,000; share capital 400,000; share premium 120,000.', src: LTD },
      { n: 4, f: 'Bonus issue: entries and the check', b: 'Debit the reserves named (often capital reserves first), credit share capital with the nominal value. No bank entry; total equity is unchanged.', src: LTD },
      { n: 5, f: 'Gearing: formula, and the figure for debentures 455,000 and equity 845,000', b: 'Fixed cost capital (debt) ÷ total capital employed (debt + equity) × 100.\n455,000 ÷ 1,300,000 × 100 = 35.0%.', src: LTD },
      { n: 6, f: 'Provision vs reserve', b: 'A provision is a liability of uncertain timing or amount and reduces profit. A reserve is part of equity, an allocation of profit.', src: LTD },
      { n: 7, f: 'A company buys back 80,000 of its ordinary shares of 0.50 at par out of profits. Transfer?', b: 'Debit retained earnings, credit capital redemption reserve 40,000 (the nominal value bought back).', src: LTD },
      { n: 8, f: 'Consideration 480,000 for agreed net assets of 437,500. Goodwill? What if net assets were 495,000?', b: 'Goodwill 42,500, an intangible non-current asset, not amortised but tested for impairment at least annually.\nWith net assets of 495,000 the consideration is 15,000 below them: a bargain purchase gain of 15,000 in profit or loss.', src: LTD },
      { n: 9, f: 'Vendor: assets transferred at carrying value 410,000; liabilities transferred 60,000; consideration 395,000. Realisation result?', b: '395,000 + 60,000 − 410,000 = 45,000 profit on realisation, credited to sundry shareholders.', src: LTD },
      { n: 10, f: 'A warranty provision is to be 1.5% of revenue of 820,000; last year\'s provision was 14,000. Entry in profit or loss?', b: 'Required 12,300, so the provision falls by 1,700, credited to profit or loss.', src: LTD },
      { n: 11, f: 'How are discontinued operations shown, and why?', b: 'As a single amount on the face of the statement, with detail in the notes, so users can forecast from continuing operations only.', src: LTD },
      { n: 12, f: 'Ordinary shares vs debentures', b: 'Shares: ownership, dividend at the directors\' discretion (statement of changes in equity), votes, not repaid.\nDebentures: a loan, interest is a legal obligation and a finance cost, no votes, repaid on the redemption date.', src: LTD },
    ]),

    // 2.2 Investment ratios
    ...topicOnly('investment-ratios', '2.2', [
      { n: 1, f: 'Earnings per share: formula, and EPS for profit after tax 945,000, preference dividends 45,000, 6,000,000 ordinary shares', b: '(Profit after tax − preference dividends) ÷ number of ordinary shares.\n900,000 ÷ 6,000,000 = 15.00 cents.', src: INVR },
      { n: 2, f: 'Price earnings ratio: formula, and P/E for a price of 342 cents and EPS of 19 cents', b: 'Market price per share ÷ EPS.\n342 ÷ 19 = 18.00 times.', src: INVR },
      { n: 3, f: 'Dividend per share for ordinary dividends paid of 1,050,000 on 15,000,000 shares', b: '1,050,000 ÷ 15,000,000 = 7.00 cents. Preference dividends are never included.', src: INVR },
      { n: 4, f: 'Dividend yield: formula, and the yield for DPS 6.3 cents and a share price of 210 cents', b: 'Dividend per share ÷ market price × 100.\n6.3 ÷ 210 × 100 = 3.00%.', src: INVR },
      { n: 5, f: 'Dividend cover for profit after tax 2,240,000, preference dividends 140,000, ordinary dividends 700,000', b: '(2,240,000 − 140,000) ÷ 700,000 = 3.00 times.', src: INVR },
      { n: 6, f: 'Company ROCE: profit from operations 1,092,000; ordinary shares 4,000,000; preference 1,000,000; reserves 2,200,000; debentures 1,600,000', b: 'Capital employed = issued shares (ordinary + preference) + reserves + non-current liabilities = 8,800,000.\n1,092,000 ÷ 8,800,000 × 100 = 12.41%.', src: INVR },
      { n: 7, f: 'Ordinary share capital 2,500,000 in shares of 0.25. How many shares are in issue?', b: '2,500,000 ÷ 0.25 = 10,000,000 shares.', src: INVR },
      { n: 8, f: 'EPS is 24 cents before a 1 for 1 bonus issue and earnings do not change. EPS afterwards?', b: 'The number of shares doubles, so EPS halves to 12.00 cents, with no change in performance.', src: INVR },
      { n: 9, f: 'Why can a rising dividend yield be bad news?', b: 'Yield rises when the share price falls. A falling price may mean the market expects lower profits or a dividend cut.', src: INVR },
      { n: 10, f: 'Which two investment ratios share the same numerator?', b: 'EPS and dividend cover: both use earnings (profit after tax less preference dividends).', src: INVR },
    ]),

    // 2.3 Statement of cash flows
    ...topicOnly('statement-of-cash-flows', '2.3', [
      { n: 1, f: 'The three headings of an IAS 7 statement of cash flows', b: 'Operating activities, investing activities and financing activities.', src: SCF },
      { n: 2, f: 'Cash equivalents', b: 'Short-term, highly liquid investments, readily convertible to known amounts of cash, with an insignificant risk of changes in value.', src: SCF },
      { n: 3, f: 'Indirect method: adjustments for increases in inventory, trade receivables and trade payables', b: 'Increase in inventory: deduct.\nIncrease in trade receivables: deduct.\nIncrease in trade payables: add.\n(Decreases have the opposite sign.)', src: SCF },
      { n: 4, f: 'Profit from operations 46,300; depreciation 12,800; profit on disposal 1,900; inventory up 2,400; receivables down 3,100; payables up 1,700', b: '46,300 + 12,800 − 1,900 − 2,400 + 3,100 + 1,700 = 59,600 cash generated from operations.', src: SCF },
      { n: 5, f: 'Tax payable 9,500 at the start and 11,000 at the end; tax charge 12,300. Tax paid?', b: 'Opening + charge − closing = 9,500 + 12,300 − 11,000 = 10,800.', src: SCF },
      { n: 6, f: 'Debenture interest for the year 7,200; interest accrued 600 at the start and 1,800 at the end. Interest paid?', b: '600 + 7,200 − 1,800 = 6,000.', src: SCF },
      { n: 7, f: 'Retained earnings rose from 64,000 to 81,500; profit for the year 39,500; no transfers. Dividends paid?', b: '64,000 + 39,500 − 81,500 = 22,000.', src: SCF },
      { n: 8, f: 'A machine with carrying value 14,000 is sold for 10,500. Entries in the statement of cash flows?', b: 'Add back the loss of 3,500 in operating activities; show proceeds of 10,500 as an inflow under investing activities.', src: SCF },
      { n: 9, f: 'Share capital rose from 150,000 to 180,000 and share premium from 20,000 to 41,000, with no bonus issue. Cash raised?', b: '30,000 + 21,000 = 51,000, shown under financing activities.', src: SCF },
      { n: 10, f: 'Where does a bonus issue, a revaluation or a transfer to general reserve appear in the statement of cash flows?', b: 'Nowhere: none of them involves cash.', src: SCF },
      { n: 11, f: 'Opening cash and cash equivalents: overdraft of 7,200. Net increase 15,900. Closing figure?', b: '−7,200 + 15,900 = 8,700.', src: SCF },
      { n: 12, f: 'Warning signs of poor liquidity in a statement of cash flows', b: 'Negative operating cash flow while profit is positive; a growing overdraft; inventory and receivables rising faster than revenue (overtrading); long-term assets bought with short-term borrowing.', src: SCF },
    ]),

    // 2.4 Budgeting
    ...topicOnly('budgeting-yac', '2.4', [
      { n: 1, f: 'The three named roles of budgeting', b: 'Planning, forecasting and control.', src: BUDG },
      { n: 2, f: 'Principal budget factor', b: 'The factor that limits the level of activity, usually sales demand. Its budget is prepared first.', src: BUDG },
      { n: 3, f: 'Planned sales 2,400 units; opening finished goods 300; closing 360. Production?', b: '2,400 + 360 − 300 = 2,460 units.', src: BUDG },
      { n: 4, f: 'Production 2,460 units using 3 kg each; opening material 900 kg; closing 1,000 kg. Purchases?', b: 'Used 7,380 kg. Purchases 7,380 + 1,000 − 900 = 7,480 kg.', src: BUDG },
      { n: 5, f: 'Credit sales: March 30,000, April 36,000. Customers pay 40% the month after sale and 55% two months after; 5% are irrecoverable. May receipts?', b: '36,000 × 40% + 30,000 × 55% = 14,400 + 16,500 = 30,900. The irrecoverable 5% is never received.', src: BUDG },
      { n: 6, f: 'Items that never appear in a cash budget', b: 'Depreciation, profit or loss on disposal, irrecoverable debts, discounts allowed or received, provisions, accruals and prepayments.', src: BUDG },
      { n: 7, f: 'Rent of 7,200 is paid on 1 March for 12 months. Budget for March to May: cash, expense and SOFP figure?', b: 'Cash budget: 7,200 paid in March.\nBudgeted expense: 7,200 × 3/12 = 1,800.\nPrepayment: 7,200 × 9/12 = 5,400 (current asset).', src: BUDG },
      { n: 8, f: 'An old machine with carrying amount 7,000 will be sold for 4,500. What appears in the cash budget?', b: 'Only the 4,500 received. The loss of 2,500 goes in the budgeted statement of comprehensive income only.', src: BUDG },
      { n: 9, f: 'Flexing a semi-variable cost: power is 3,000 plus 0.80 per machine hour. Flexed cost at 7,500 hours?', b: '3,000 + 7,500 × 0.80 = 9,000. Fixed costs and the fixed part are not flexed.', src: BUDG },
      { n: 10, f: 'Participative vs imposed budgets', b: 'Participative (bottom-up): involves budget holders, aids motivation, but invites slack.\nImposed (top-down): quicker, but less owned by managers.', src: BUDG },
    ]),

    // 2.5 Standard costing
    ...topicOnly('standard-costing-yac', '2.5', [
      { n: 1, f: 'Ideal, attainable and basic standards', b: 'Ideal: perfect conditions, no waste or idle time.\nAttainable: allows normal waste and idle time; demanding but achievable.\nBasic: kept unchanged for a long period to show trends.', src: STDC },
      { n: 2, f: 'Standard 4 kg at 5 per unit. 500 units made using 2,100 kg costing 10,080. Material variances?', b: 'Actual price 4.80; SQ 2,000 kg.\nPrice (5 − 4.80) × 2,100 = 420 F.\nUsage (2,000 − 2,100) × 5 = 500 A.\nTotal 10,000 − 10,080 = 80 A.', src: STDC },
      { n: 3, f: 'Standard hours 900, actual hours 870, standard rate 20, actual rate 21. Labour variances?', b: 'Rate (20 − 21) × 870 = 870 A.\nEfficiency (900 − 870) × 20 = 600 F.\nTotal 18,000 − 18,270 = 270 A.', src: STDC },
      { n: 4, f: 'Standard fixed overhead 9 per unit; output 2,400 units; actual fixed overhead 22,500. Total fixed overhead variance?', b: 'Absorbed 2,400 × 9 = 21,600. 21,600 − 22,500 = 900 A (under-absorbed).', src: STDC },
      { n: 5, f: 'Standard variable overhead 1.50 per unit; output 6,000; actual variable overhead 8,700. Variance?', b: '6,000 × 1.50 = 9,000. 9,000 − 8,700 = 300 F.', src: STDC },
      { n: 6, f: 'Cheaper, lower-grade material is bought. Which variances can it create?', b: 'Material price F, material usage A and labour efficiency A. One manager\'s favourable variance can cause another\'s adverse one.', src: STDC },
      { n: 7, f: 'Management by exception', b: 'Managers investigate only significant variances, outside a set tolerance, favourable as well as adverse, and watch trends.', src: STDC },
      { n: 8, f: 'Where are actual material prices, quantities used and hours worked collected from?', b: 'Prices: purchase invoices.\nQuantities used: stores requisitions and inventory records.\nHours: clock cards, time sheets and job cards.', src: STDC },
      { n: 9, f: 'Can a total variance of zero still need investigating?', b: 'Yes. Large favourable and adverse sub-variances can cancel, for example cheap material (price F) causing waste (usage A).', src: STDC },
      { n: 10, f: 'A price variance of 600 A arose on 3,000 kg bought at 4.20 per kg. Standard price?', b: '600 ÷ 3,000 = 0.20 above standard, so the standard price is 4.20 − 0.20 = 4.00.', src: STDC },
    ]),

    // 2.6 Project appraisal
    ...topicOnly('project-appraisal', '2.6', [
      { n: 1, f: 'Discount factor for year 2 at 8%, to 3 decimal places', b: '1 ÷ 1.08² = 0.857.', src: PROJ },
      { n: 2, f: 'Outlay 72,000; equal net cash inflows of 16,000 a year. Payback?', b: '72,000 ÷ 16,000 = 4.5 years (4 years 6 months).', src: PROJ },
      { n: 3, f: 'Equity provides 60% of finance at 11%; loans 40% at 6%. WACC?', b: '0.6 × 11% + 0.4 × 6% = 6.6% + 2.4% = 9.0%.', src: PROJ },
      { n: 4, f: 'Profitability index: formula and decision rule. PV of inflows 138,000, outlay 120,000?', b: 'PI = PV of future inflows ÷ initial investment = 138,000 ÷ 120,000 = 1.15. Accept when PI > 1.', src: PROJ },
      { n: 5, f: 'Outlay 50,000; 30,000 at the end of each of the next 2 years; factors 0.926 and 0.857. NPV?', b: '27,780 + 25,710 = 53,490. NPV = 53,490 − 50,000 = +3,490: accept.', src: PROJ },
      { n: 6, f: 'NPV is +6,000 at 12% and −2,000 at 20%. Estimate the IRR', b: '12 + [6,000 ÷ (6,000 + 2,000)] × 8 = 12 + 6 = 18%. Accept if IRR is above WACC.', src: PROJ },
      { n: 7, f: 'Average annual profit 9,000; cost 60,000; residual value 12,000. ARR on initial and on average investment?', b: 'Initial: 9,000 ÷ 60,000 = 15%.\nAverage investment (60,000 + 12,000) ÷ 2 = 36,000: 9,000 ÷ 36,000 = 25%.', src: PROJ },
      { n: 8, f: 'NPV and IRR rank two mutually exclusive projects differently. Which is preferred?', b: 'NPV, because it measures the size of the gain in money terms at the business\'s cost of capital.', src: PROJ },
      { n: 9, f: 'Time value of money: why is money received sooner worth more?', b: 'It can be reinvested, it is not eroded by inflation, and it carries less risk.', src: PROJ },
      { n: 10, f: 'Which appraisal method charges depreciation, and which ignore the time value of money?', b: 'Only ARR charges depreciation, because it uses profit. ARR and payback ignore the time value of money; NPV, PI and IRR allow for it.', src: PROJ },
    ]),

    // 2.7 Break-even analysis
    ...topicOnly('break-even-analysis', '2.7', [
      { n: 1, f: 'Price 52, variable cost 31, fixed costs 46,200. Contribution, break-even point and break-even revenue?', b: 'Contribution 21 per unit.\nBreak-even 46,200 ÷ 21 = 2,200 units.\nRevenue 2,200 × 52 = 114,400.', src: BEA },
      { n: 2, f: 'Same product (contribution 21, break-even 2,200 units), budgeted sales 3,000. Margin of safety and net profit?', b: 'Margin of safety 800 units (800 ÷ 3,000 = 26.7%).\nProfit (3,000 × 21) − 46,200 = 16,800; check 800 × 21 = 16,800.', src: BEA },
      { n: 3, f: 'High-low: cost 2,980 at 1,200 machine hours and 4,100 at 2,000 hours. Variable rate, fixed element, cost at 1,700 hours?', b: 'Rate (4,100 − 2,980) ÷ 800 = 1.40 per hour.\nFixed 4,100 − 2,800 = 1,300.\nAt 1,700 hours: 1,300 + 2,380 = 3,680.', src: BEA },
      { n: 4, f: 'Expected sales 2,500 units; variable cost 26; fixed costs 40,000; target net profit 15,000. Selling price needed?', b: '26 + (40,000 + 15,000) ÷ 2,500 = 26 + 22 = 48.', src: BEA },
      { n: 5, f: 'Contribution 9 per unit. Fixed costs 12,600 up to 2,000 units, rising by 6,300 above that. Break-even points?', b: '12,600 ÷ 9 = 1,400 units (inside the first band).\n18,900 ÷ 9 = 2,100 units (inside the second band).', src: BEA },
      { n: 6, f: 'Angle of incidence', b: 'The angle between the sales revenue and total costs lines at break-even. Wide: high contribution per unit, so profit grows fast. Narrow: profit rises slowly.', src: BEA },
      { n: 7, f: 'Break-even chart: where do the sales revenue and total costs lines start?', b: 'Sales revenue starts at the origin. Total costs starts at the fixed cost figure on the vertical axis, because fixed costs are incurred at nil output.', src: BEA },
      { n: 8, f: 'Assumptions behind a break-even chart', b: 'Constant selling price, constant variable cost per unit, fixed costs unchanged within the range shown, and all output sold.', src: BEA },
      { n: 9, f: 'A chart\'s revenue line passes through (2,000 bikes, 90,000); fixed costs 21,600; break-even 1,200 bikes. Price and variable cost?', b: 'Price 90,000 ÷ 2,000 = 45.\nContribution 21,600 ÷ 1,200 = 18.\nVariable cost 45 − 18 = 27.', src: BEA },
      { n: 10, f: 'Semi-variable vs semi-fixed cost', b: 'Semi-variable: a fixed base plus a rate per unit (a water bill with a standing charge).\nSemi-fixed: stays flat, then jumps at set levels (an extra van once orders pass a level).', src: BEA },
    ]),

    // 2.8 Marginal costing and absorption costing
    ...topicOnly('marginal-costing-and-absorption-costing', '2.8', [
      { n: 1, f: 'Marginal cost of a unit', b: 'Its variable production cost: direct materials + direct labour + direct expenses + variable production overhead.', src: MCAC },
      { n: 2, f: 'Period cost vs product cost', b: 'Fixed production overhead is a period cost under marginal costing (written off in the period) and a product cost under absorption costing (carried forward in inventory).', src: MCAC },
      { n: 3, f: 'Direct materials 7, direct labour 5, variable production overhead 2, fixed production overhead 4, variable selling cost 1. Inventory value per unit?', b: 'Marginal: 7 + 5 + 2 = 14.\nAbsorption: 14 + 4 = 18.\nThe selling cost is excluded from both.', src: MCAC },
      { n: 4, f: 'Fixed overhead absorbed at 5 per unit. Inventory rises from 800 to 2,000 units. Marginal profit 31,000. Absorption profit?', b: 'Inventory rose by 1,200 units. 31,000 + 1,200 × 5 = 37,000.', src: MCAC },
      { n: 5, f: 'Inventory falls from 1,000 to 400 units; fixed production overhead 6 per unit; absorption profit 52,000. Marginal profit?', b: 'Inventory fell, so marginal profit is higher by 600 × 6 = 3,600: 55,600.', src: MCAC },
      { n: 6, f: 'Which costing method does IAS 2 require for inventory in published statements?', b: 'Absorption costing: fixed production overheads are included, allocated on normal capacity. Marginal costing is an internal tool.', src: MCAC },
      { n: 7, f: 'Make or buy: marginal cost 8.70, absorbed fixed overhead 2.80, supplier price 10.20, no fixed costs saved. Decision?', b: 'Compare 8.70 with 10.20: make, saving 1.50 a unit. Comparing the full cost of 11.50 would wrongly say buy.', src: MCAC },
      { n: 8, f: 'A product line has contribution 12,000 and is charged 15,000 of fixed costs, of which 4,000 would be saved. Effect of closing it?', b: 'Contribution lost 12,000, costs saved 4,000: profit falls by 8,000, so continue on financial grounds.', src: MCAC },
      { n: 9, f: 'Labour is limited. K: contribution 20 using 4 hours. M: contribution 15 using 2 hours. Which first?', b: 'M: 7.50 per labour hour against 5 for K. Rank by contribution per unit of the limiting factor.', src: MCAC },
      { n: 10, f: 'Budgeted fixed production overhead 60,000; normal output 15,000 units; actual output 13,500; actual overhead 60,000. Result?', b: 'Rate 4 per unit. Absorbed 54,000. Under-absorbed by 6,000, added to cost of sales.', src: MCAC },
      { n: 11, f: 'Spare capacity: a customer offers 400 units at 16 each. Marginal cost 14; no extra fixed cost. Effect on profit?', b: '400 × (16 − 14) = 800 extra profit, so accept on financial grounds. Then check the effect on regular customers\' prices.', src: MCAC },
    ]),

    // 2.9 ICT in accounting
    ...topicOnly('ict-in-accounting', '2.9', [
      { n: 1, f: 'EPOS', b: 'Electronic Point of Sale: a till system that records each sale, usually by barcode scan, and updates the inventory record at the same time.', src: ICT },
      { n: 2, f: 'Audit trail, and how it differs from an audit', b: 'The ability to trace a transaction from its source document through the records to the financial statements, and back. The trail is the record; the audit is the examination that uses it.', src: ICT },
      { n: 3, f: 'Spreadsheet vs accounting package', b: 'A spreadsheet is a flexible model the user builds. An accounting package follows fixed accounting routines and posts double entry to the ledgers automatically.', src: ICT },
      { n: 4, f: 'What-if analysis, and why assumptions sit in their own input cells', b: 'Changing one assumption in a model to see its effect on the results. With inputs in their own cells, only one cell changes and every formula updates from it.', src: ICT },
      { n: 5, f: 'Aged debtors list: what it is and what management learns from it', b: 'Trade receivables listed by customer and by how long amounts have been owed. It shows whom to chase, whose credit to stop, and a basis for the allowance for irrecoverable debts.', src: ICT },
      { n: 6, f: 'The four aspects of ICT\'s advantages and disadvantages in 2.9.2', b: 'Audit trail, financial, technical and human aspects.', src: ICT },
      { n: 7, f: 'An ICT system has one-off costs of 8,400 and a net annual saving of 5,600. Payback?', b: '8,400 ÷ 5,600 = 1.5 years. Net saving = annual savings − annual running costs.', src: ICT },
      { n: 8, f: 'Why might the EPOS inventory record be higher than the shelf count?', b: 'Unscanned loss: theft, damage, or an item sold but not scanned.', src: ICT },
      { n: 9, f: 'Does ICT guarantee accurate accounting information?', b: 'No. It guarantees accurate arithmetic, not accurate information: input and formula errors still flow through.', src: ICT },
      { n: 10, f: 'Sales tax charged to customers 4,830; sales tax paid to suppliers 2,915. Amount payable?', b: '4,830 − 2,915 = 1,915. The package draws both totals from entries already posted.', src: ICT },
    ]),
  ],
};
