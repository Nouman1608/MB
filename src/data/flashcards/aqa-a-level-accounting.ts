/**
 * D-444 -- flashcards for AQA A-level Accounting 7127 (first teaching 2017).
 *
 * One block per topic, in specification order: the syllabus record lists 18
 * subject-content sections (3.1-3.18) with no itemised subtopics. Card ids are
 * `<topic number>-<n>` and are permanent (browser progress is keyed by them):
 * add a new card with the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 7127, or a definition table,
 *               formula table or worked reminder on the page); origin 'revision-notes'.
 *
 * The course is not tiered, so no card is marked upper tier. Amounts are in
 * pounds and the terms (income statement, provision for doubtful debts) follow
 * the course's own notes. Plain text only (see types.ts). Unicode for symbols.
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; u?: true; src?: string }

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

const ROLE = 'aqa-a-level-accounting-role-revision-notes';
const BORG = 'aqa-a-level-accounting-business-organisation-revision-notes';
const DEM = 'aqa-a-level-accounting-double-entry-model-revision-notes';
const VER = 'aqa-a-level-accounting-verification-of-accounting-records-revision-notes';
const CON = 'aqa-a-level-accounting-accounting-concepts-used-in-the-preparation-of-accounting-re-revision-notes';
const SOLE = 'aqa-a-level-accounting-preparation-of-financial-statements-of-sole-traders-revision-notes';
const LCA = 'aqa-a-level-accounting-limited-company-accounts-revision-notes';
const AEF = 'aqa-a-level-accounting-analysis-and-evaluation-of-financial-information-revision-notes';
const BUD = 'aqa-a-level-accounting-budgeting-revision-notes';
const MARG = 'aqa-a-level-accounting-marginal-costing-revision-notes';
const STD = 'aqa-a-level-accounting-standard-costing-and-variance-analysis-revision-notes';
const ABS = 'aqa-a-level-accounting-absorption-and-activity-based-costing-revision-notes';
const CIA = 'aqa-a-level-accounting-capital-investment-appraisal-revision-notes';
const INC = 'aqa-a-level-accounting-accounting-for-organisations-with-incomplete-records-revision-notes';
const PART = 'aqa-a-level-accounting-partnership-accounts-revision-notes';
const ACC = 'aqa-a-level-accounting-accounting-for-limited-companies-revision-notes';
const IAC = 'aqa-a-level-accounting-interpretation-analysis-and-communication-of-accounting-info-revision-notes';
const ETH = 'aqa-a-level-accounting-the-impact-of-ethical-considerations-revision-notes';

export const DECK_AQA_A_LEVEL_ACCOUNTING: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'accounting',
  syllabusCode: '7127',
  syllabusSeries: '2017-onwards',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'javaid-iqbal-sabri', reviewedOn: '2026-11-05' },
  cards: [
    // 1 An introduction to the role of the accountant in business
    ...topicOnly('an-introduction-to-the-role-of-the-accountant-in-business', '1', [
      { n: 1, f: 'Financial accounting vs management accounting', b: 'Financial: records past transactions and produces statements for external users, governed by law and accounting standards.\nManagement: forward-looking information for internal decision-makers, as detailed and frequent as needed, with no external format rules.', src: ROLE },
      { n: 2, f: 'The accountant\'s role in accounting information systems', b: 'Developing and overseeing systems that give reliable and relevant information for both financial and management purposes, including overseeing the work of bookkeepers and ledger clerks.' },
      { n: 3, f: 'The accounting equation and the DEAD CLIC rule', b: 'Assets = capital + liabilities.\nDEAD CLIC: Debit Expenses, Assets, Drawings; Credit Liabilities, Income, Capital.', src: ROLE },
      { n: 4, f: 'What do lenders and suppliers look for in the accounts?', b: 'Lenders: liquidity and gearing (can it repay?).\nSuppliers: creditworthiness before granting credit.', src: ROLE },
      { n: 5, f: 'Why does a lender care about liquidity and not just profit?', b: 'A profitable business can still fail if it cannot pay its debts as they fall due, so the ability to generate cash matters for repayment.', src: ROLE },
      { n: 6, f: 'Give a conflict between users of accounts', b: 'Shareholders may want dividends paid out now, while lenders prefer profit retained to strengthen the statement of financial position and the chance of repayment.', src: ROLE },
      { n: 7, f: 'Both effects of an accrued expense and of a prepaid expense', b: 'Accrued expense: reduces profit; current liability.\nPrepaid expense: increases profit; current asset.', src: ROLE },
      { n: 8, f: 'The five ethical principles accountants are expected to show', b: 'Integrity, objectivity, professional competence, confidentiality and professional behaviour.', src: ROLE },
      { n: 9, f: 'Which concept drives year-end adjustments, and which resolves judgement calls?', b: 'Accruals (matching) drives every year-end adjustment. Prudence resolves judgement calls: choose the treatment that does not overstate profit.', src: ROLE },
    ]),

    // 2 Types of business organisation
    ...topicOnly('types-of-business-organisation', '2', [
      { n: 1, f: 'Sole trader: owners, liability and reporting burden', b: 'One person; unlimited liability; light reporting with no statutory filing.', src: BORG },
      { n: 2, f: 'Partnership: owners, liability and reporting burden', b: 'Two or more people; unlimited liability for ordinary partners; light reporting, governed by the partnership agreement or the Partnership Act 1890.', src: BORG },
      { n: 3, f: 'Private limited company (Ltd): owners, liability and reporting burden', b: 'Shareholders, with shares not publicly traded; limited liability; must file accounts under company law.', src: BORG },
      { n: 4, f: 'Public limited company (plc): owners, liability and reporting burden', b: 'Shareholders, with shares publicly traded; limited liability; the most extensive reporting, with public disclosure and audit requirements.', src: BORG },
      { n: 5, f: 'What does "limited" mean in a limited company?', b: 'A limit on the owners\' financial liability (their loss is capped at the amount invested), not a limit on the size of the business.', src: BORG },
      { n: 6, f: 'Two sources of finance open to a limited company but not to a sole trader', b: 'Ordinary shares and debentures. (Bank overdrafts, loans and mortgages are open to all four types.)', src: BORG },
      { n: 7, f: 'Risks of share finance and of debt finance for a plc', b: 'Shares dilute existing ownership and control.\nDebt carries interest that must be paid whatever the profit, though liability is limited to the value of shares held.', src: BORG },
      { n: 8, f: 'What does the Partnership Act 1890 do where partners have no agreement?', b: 'It applies by default: profits shared equally regardless of capital, and no partner salary unless agreed. It is a fallback, not a requirement to have an agreement.', src: BORG },
    ]),

    // 3 The double entry model
    ...topicOnly('the-double-entry-model', '3', [
      { n: 1, f: 'The six books of prime entry in 7127', b: 'The three column cash book, the general journal, and the sales, purchases, sales returns and purchases returns journals.', src: DEM },
      { n: 2, f: 'A customer\'s cheque for £310 is returned unpaid by the bank. Entry?', b: 'Debit the receivable\'s account £310, credit bank £310: the debt is owed again.', src: DEM },
      { n: 3, f: 'Goods listed at £640 less 25% trade discount. Invoice price, and is the discount recorded?', b: '£480. Trade discount is not recorded in the books; the invoice shows the net price.', src: DEM },
      { n: 4, f: 'Discount allowed vs discount received', b: 'Discount allowed (to customers for early payment) is an expense. Discount received (from suppliers) is income. Both are totalled from the cash book discount columns.', src: DEM },
      { n: 5, f: 'A customer who owes £900 is also owed £650 as a supplier. Contra entry and result?', b: 'Debit the payables ledger account £650, credit the receivables ledger account £650. They now owe £250.', src: DEM },
      { n: 6, f: 'Recovery of a debt written off in an earlier year: entries', b: 'Reinstate it: debit the receivable, credit irrecoverable debts recovered. Then record the cash: debit bank, credit the receivable.', src: DEM },
      { n: 7, f: 'Machine cost £12,000, accumulated depreciation £7,200, sold for £5,500. Result on disposal?', b: 'Net book value £4,800. Profit on disposal £5,500 − £4,800 = £700, taken to the income statement.', src: DEM },
      { n: 8, f: 'Electricity: £120 owing at the start, £1,560 paid, £180 owing at the end. Charge?', b: '1,560 + 180 − 120 = £1,620.', src: DEM },
      { n: 9, f: 'Cost £15,000 depreciated at 40% reducing balance. Year 2 charge?', b: 'Year 1: £6,000 (net book value £9,000). Year 2: 40% × £9,000 = £3,600.', src: DEM },
      { n: 10, f: 'Opening provision for doubtful debts £400; receivables £12,000; provision 5%. Income statement entry?', b: 'Required provision £600, so the increase of £200 is an expense. Only the change goes to the income statement.', src: DEM },
      { n: 11, f: 'Revenue income vs capital income', b: 'Revenue income: day-to-day trading income such as sales, fees, rent receivable, commission.\nCapital income: proceeds of selling a non-current asset, and money paid in by the owner.', src: DEM },
      { n: 12, f: 'Bank statement items: standing order paid, credit transfer received. Cash book entries?', b: 'Standing order: credit bank, debit the expense or liability.\nCredit transfer: debit bank, credit the receivable or income.', src: DEM },
    ]),

    // 4 Verification of accounting records
    ...topicOnly('verification-of-accounting-records-aqa', '4', [
      { n: 1, f: 'The four errors revealed by the trial balance', b: 'Addition (casting), partial omission (one side missing), transposition (in one entry only) and unequal posting.', src: VER },
      { n: 2, f: 'The six errors not revealed by the trial balance', b: 'Commission, complete reversal, compensating, omission, original entry and principle.', src: VER },
      { n: 3, f: 'Wages of £5,670 were posted to the wages account as £5,760; the cash book was correct. Error and effect?', b: 'Transposition. The debit side is £90 too large; 90 ÷ 9 = 10, the typical clue.', src: VER },
      { n: 4, f: 'A cheque of £530 received from M Doyle was debited to M Doyle and credited to bank. Correction?', b: 'Complete reversal: Dr Bank £1,060, Cr M Doyle £1,060 (twice the amount: once to cancel, once to record correctly).', src: VER },
      { n: 5, f: 'Trial balance debits £64,300, credits £63,850. Suspense balance?', b: '£450 credit: enter the difference on the side with the smaller total.', src: VER },
      { n: 6, f: 'Draft profit £30,000. Accrued wages £1,200 omitted; office equipment £450 debited to office expenses. Corrected profit?', b: '30,000 − 1,200 + 450 = £29,250 (ignoring depreciation). Then accruals rise £1,200 and non-current assets rise £450.', src: VER },
      { n: 7, f: 'Sales ledger control: debit b/d £12,400; credit sales £18,900; interest charged £160; receipts £15,300; discount allowed £410; returns £870; contra £500', b: 'Debits £31,460; credits £17,080. Closing debit balance £14,380.', src: VER },
      { n: 8, f: 'Three items that never appear in a sales ledger control account', b: 'Cash sales, cash purchases and the provision for doubtful debts.', src: VER },
      { n: 9, f: 'Cash book shows £2,100 favourable. Unpresented cheques £450; outstanding lodgement £300. Bank statement balance?', b: '2,100 + 450 − 300 = £2,250 in favour. The updated cash book balance, not the bank statement balance, goes on the statement of financial position.', src: VER },
      { n: 10, f: 'Effect on profit and the statement of financial position: a computer costing £1,200 debited to office expenses', b: 'Profit understated by £1,200; non-current assets understated by £1,200 (ignoring depreciation).', src: VER },
      { n: 11, f: 'Main limitation of a bank reconciliation', b: 'It checks only the bank column. It misses, for example, a bank payment posted to the wrong expense account, or a cheque recorded at the wrong amount on both sides.', src: VER },
      { n: 12, f: 'How can a credit balance arise in the sales ledger?', b: 'A customer overpays, or returns goods already paid for.', src: VER },
    ]),

    // 5 Accounting concepts used in the preparation of accounting records
    ...topicOnly('accounting-concepts-used-in-the-preparation-of-accounting-records', '5', [
      { n: 1, f: 'Money measurement: why is a loyal customer base not shown as an asset?', b: 'Only items with a reliable money value are recorded, and a customer base has none.', src: CON },
      { n: 2, f: 'Duality and cost concepts', b: 'Duality: every transaction has two equal effects, so debits = credits.\nCost: assets are recorded at what they cost, not market value.', src: CON },
      { n: 3, f: 'A business will close in two months. Which concept no longer applies, and how are assets valued?', b: 'Going concern. Assets are valued at what they are expected to realise (break-up values).', src: CON },
      { n: 4, f: 'An order is placed in May; the goods are delivered and accepted in June. When is revenue recognised?', b: 'June, when the goods are accepted. Realisation concept.', src: CON },
      { n: 5, f: 'A £20 calculator is charged to office expenses, not equipment. Which concept allows this?', b: 'Materiality: immaterial items need not be treated strictly.', src: CON },
      { n: 6, f: 'A customer owing £900 has gone into liquidation. Which concept requires action now, and what action?', b: 'Prudence: write the debt off as irrecoverable, recognising the loss now.', src: CON },
      { n: 7, f: 'An item cost £60. It can be sold for £75 after £20 of repairs. Inventory value?', b: 'NRV = 75 − 20 = £55, below cost, so £55. Compare cost and NRV item by item.', src: CON },
      { n: 8, f: 'Goods at selling price £1,500 (mark-up 25% on cost) are on sale or return, not yet accepted, but recorded as sales. Profit overstated by?', b: 'Cost 1,500 ÷ 1.25 = £1,200. Profit overstated by £300. Reduce revenue and receivables by £1,500; add £1,200 to inventory.', src: CON },
      { n: 9, f: 'The owner pays the business rent from a private account. Entry and concept?', b: 'Debit Rent, credit Capital. Business entity: the owner has put money into the business.', src: CON },
      { n: 10, f: 'A trader changes depreciation method every year to keep profit steady. Which concept is breached?', b: 'Consistency: the same methods should be used each period so profits are comparable.', src: CON },
      { n: 11, f: 'Is a £400 delivery charge on a new machine capital or revenue expenditure?', b: 'Capital (cost concept): it is part of getting the asset ready for use. Insurance and fuel are revenue.', src: CON },
      { n: 12, f: 'Prudence vs materiality', b: 'Prudence is about not overstating assets or profit. Materiality is about whether an item matters enough to need strict treatment.', src: CON },
    ]),

    // 6 Preparation of financial statements of sole traders
    ...topicOnly('preparation-of-financial-statements-of-sole-traders', '6', [
      { n: 1, f: 'Insurance of £3,600 paid on 1 October 2025 for 12 months. Year end 31 March 2026. Prepayment?', b: '6 of the 12 months are for next year: 3,600 × 6/12 = £1,800, a current asset.', src: SOLE },
      { n: 2, f: 'Wages paid £48,300; opening accrual £900; closing accrual £1,150. Wages charge?', b: '48,300 − 900 + 1,150 = £48,550.', src: SOLE },
      { n: 3, f: 'Equipment £12,500 depreciated at 30% reducing balance. Year 2 charge?', b: 'Year 1: £3,750. Year 2: (12,500 − 3,750) × 30% = £2,625.', src: SOLE },
      { n: 4, f: 'Provision for doubtful debts was £1,200. Receivables are now £32,000; provision 3%. Entries?', b: 'New provision £960: a decrease of £240, shown as income. Receivables shown as 32,000 − 960 = £31,040.', src: SOLE },
      { n: 5, f: 'The owner takes goods costing £450 (selling price £600). Entry?', b: 'Debit drawings £450, credit purchases £450: at cost, not selling price.', src: SOLE },
      { n: 6, f: 'Commission received £4,100, including £350 for next year; £200 earned this year is still owed. Income for the year?', b: '4,100 − 350 + 200 = £3,950.', src: SOLE },
      { n: 7, f: 'Rent received £7,200. At the start the tenant owed £600; at the end £400 had been received in advance. Rent receivable?', b: '7,200 − 600 − 400 = £6,200. The £400 is a current liability.', src: SOLE },
      { n: 8, f: 'Goods at selling price £900 (mark-up 50% on cost) sent on sale or return were recorded as a sale. Profit overstated by?', b: 'Cost £600. Revenue falls £900 and closing inventory rises £600, so profit is overstated by £300.', src: SOLE },
      { n: 9, f: 'A debt written off two years ago is paid in full. Where does it appear this year?', b: 'As income (irrecoverable debts recovered) in this year\'s income statement, with the cash in bank. The earlier year is not changed.', src: SOLE },
      { n: 10, f: 'Irrecoverable debt vs provision for doubtful debts', b: 'An irrecoverable debt is certain and removed from the customer\'s account. A provision is an estimate; the customer still owes the money. Only the change in the provision goes to the income statement.', src: SOLE },
      { n: 11, f: 'Service business vs trading business income statement', b: 'A trading business has inventory, cost of sales and gross profit. A service business starts with fees or other income, then expenses; it has no cost of sales or gross profit.', src: SOLE },
      { n: 12, f: 'A vehicle costing £15,000 with accumulated depreciation £9,600 is sold for £6,100. Result?', b: 'Carrying amount £5,400. Profit on disposal £700.', src: SOLE },
    ]),

    // 7 Limited company accounts
    ...topicOnly('limited-company-accounts', '7', [
      { n: 1, f: 'The three statements in 7127 topic 3.7, and who they are for', b: 'Income statement, statement of changes in equity and statement of financial position. They are internal statements, for use inside the company, not for publication.', src: LCA },
      { n: 2, f: '80,000 ordinary shares of £0.25 are issued at £0.90. Entries?', b: 'Dr Bank £72,000; Cr Share capital £20,000; Cr Share premium £52,000.', src: LCA },
      { n: 3, f: 'Gross profit £180,000; operating expenses £112,500; 8% debentures of £75,000 all year; tax £14,700. Profit levels?', b: 'Profit from operations £67,500.\nProfit for the year before tax £61,500 (after £6,000 interest).\nProfit for the year after tax £46,800.', src: LCA },
      { n: 4, f: 'Retained earnings: opening £84,300, profit after tax £46,800, dividends paid £20,000. Closing?', b: '84,300 + 46,800 − 20,000 = £111,100. Only profit after tax goes to retained earnings.', src: LCA },
      { n: 5, f: '5% debentures of £90,000 were outstanding all year; £2,250 interest has been paid. Accrued interest?', b: 'Full-year charge £4,500; accrued £2,250, a current liability. The full year\'s interest is charged as a finance cost.', src: LCA },
      { n: 6, f: 'Where are dividends paid shown?', b: 'In the statement of changes in equity, in the retained earnings column. A dividend is a distribution of profit, not an expense.', src: LCA },
      { n: 7, f: 'Directors\' remuneration vs a sole trader\'s own "wage"', b: 'Directors\' remuneration is an operating expense of the company. A sole trader\'s own wage is drawings.', src: LCA },
      { n: 8, f: 'Share capital vs share premium', b: 'Share capital: number of shares × nominal value.\nShare premium: the amount received above nominal value. Part of equity, never income.', src: LCA },
      { n: 9, f: 'Retained earnings rose from £60,000 to £71,000; profit after tax £23,000. Dividends paid?', b: '60,000 + 23,000 − 71,000 = £12,000.', src: LCA },
      { n: 10, f: 'Which two items does 7127 say are not examined in topic 3.7?', b: 'Preference shares and general reserves.', src: LCA },
    ]),

    // 8 Analysis and evaluation of financial information
    ...topicOnly('analysis-and-evaluation-of-financial-information', '8', [
      { n: 1, f: 'ROCE for a sole trader and for a limited company', b: 'Sole trader: profit before interest ÷ (capital + non-current liabilities) × 100.\nCompany: profit from operations ÷ (equity + non-current liabilities) × 100.', src: AEF },
      { n: 2, f: 'Profit £27,000 after loan interest £3,000; capital £120,000; loan £30,000. Sole trader ROCE?', b: '(27,000 + 3,000) ÷ 150,000 × 100 = 20.00%.', src: AEF },
      { n: 3, f: 'Capital gearing: formula, and the figure for share capital £150,000, reserves £60,000, NCL £90,000', b: 'NCL ÷ (issued share capital + reserves + NCL) × 100.\n90,000 ÷ 300,000 × 100 = 30.00%.', src: AEF },
      { n: 4, f: 'Cost of sales £96,000; average inventory £12,000. Rate of inventory turnover and inventory days?', b: '96,000 ÷ 12,000 = 8 times.\n12,000 ÷ 96,000 × 365 = 45.6 days.', src: AEF },
      { n: 5, f: 'Convert a 50% markup to a margin, and a 40% margin to a markup', b: 'Margin = 50 ÷ 150 × 100 = 33.33%.\nMarkup = 40 ÷ 60 × 100 = 66.67%.', src: AEF },
      { n: 6, f: 'Current assets £30,000 (inventory £12,000), current liabilities £20,000. £4,000 of inventory is bought for cash. Effect on the ratios?', b: 'Current ratio stays 1.50 : 1.\nLiquid ratio falls from 18,000 ÷ 20,000 = 0.90 : 1 to 14,000 ÷ 20,000 = 0.70 : 1.\nProfit is unchanged.', src: AEF },
      { n: 7, f: 'Effect on profit and cash: depreciation; a loan received; drawings', b: 'Depreciation: profit down, no cash effect.\nLoan received: no profit effect, cash up.\nDrawings: no profit effect, cash down.', src: AEF },
      { n: 8, f: 'Trade receivables £18,000; credit sales £146,000. Receivable days?', b: '18,000 ÷ 146,000 × 365 = 45.0 days.', src: AEF },
      { n: 9, f: 'What might a current ratio well above 2 : 1 indicate?', b: 'Surplus inventory, slow-paying receivables or idle cash: resources not working.', src: AEF },
      { n: 10, f: 'Financial and non-financial limitations of ratio analysis', b: 'Financial: historic data; historic cost ignores inflation; different policies; estimates; an untypical or window-dressed year end.\nNon-financial: staff morale, customer satisfaction, reputation, market conditions, quality, environmental impact.', src: AEF },
    ]),

    // 9 Budgeting
    ...topicOnly('budgeting-aqa', '9', [
      { n: 1, f: 'Principal budget factor', b: 'The factor that limits activity (often sales demand). Its budget is prepared first because it determines every other budget.', src: BUD },
      { n: 2, f: 'Order of budget preparation', b: 'Sales → production → materials usage and purchases → labour → cash budget → budgeted income statement → budgeted statement of financial position.', src: BUD },
      { n: 3, f: 'Sales 800 units; opening finished goods 120; closing 150. Production?', b: '800 + 150 − 120 = 830 units.', src: BUD },
      { n: 4, f: 'Production 1,000 units at 3 kg each; opening raw materials 400 kg; closing 550 kg. Purchases?', b: 'Usage 3,000 kg. Purchases 3,000 + 550 − 400 = 3,150 kg.', src: BUD },
      { n: 5, f: '20% of sales are for cash; credit customers pay half one month after and half two months after. Sales: Feb £22,000, Mar £25,000, Apr £28,000. April receipts?', b: '20% × 28,000 + 80% × 25,000 × 50% + 80% × 22,000 × 50% = 5,600 + 10,000 + 8,800 = £24,400.', src: BUD },
      { n: 6, f: 'March credit sales £10,000; 70% pay in April and take a 2% discount. April receipt from March sales?', b: '10,000 × 70% × 98% = £6,860.', src: BUD },
      { n: 7, f: 'Incremental budgeting vs zero-based budgeting', b: 'Incremental: last period\'s figures adjusted; low cost and time, but waste is carried forward; suits stable costs.\nZBB: every activity justified from zero; high cost and time, but waste is challenged; suits discretionary costs.', src: BUD },
      { n: 8, f: 'Budget: 1,000 units, variable cost £5, fixed cost £3,000. Actual: 1,200 units costing £9,400. True cost variance?', b: 'Flexed cost 1,200 × 5 + 3,000 = £9,000, so the variance is £400 adverse. The other £1,000 is the cost of the extra 200 units.', src: BUD },
      { n: 9, f: 'Cash budget vs budgeted income statement: depreciation, a loan received, drawings', b: 'Depreciation: income statement only.\nLoan received, asset bought, drawings: cash budget only (loan interest goes in the income statement).', src: BUD },
      { n: 10, f: 'Opening overdraft £2,000; receipts £15,000; payments £14,200. Closing balance?', b: '−2,000 + 15,000 − 14,200 = £1,200 overdrawn.', src: BUD },
    ]),

    // 10 Marginal costing
    ...topicOnly('marginal-costing', '10', [
      { n: 1, f: 'Classify factory rent by tracing and by behaviour', b: 'Indirect (it cannot be traced to one unit) and fixed. "Direct or indirect" is about tracing; "fixed or variable" is about behaviour.', src: MARG },
      { n: 2, f: 'Loaves sell at £2.40; variable cost £1.50; fixed costs £9,900. Contribution, break-even and C/S ratio?', b: 'Contribution £0.90.\nBreak-even 9,900 ÷ 0.90 = 11,000 loaves (£26,400 revenue).\nC/S ratio 0.90 ÷ 2.40 = 0.375.', src: MARG },
      { n: 3, f: 'Same loaves (contribution £0.90, fixed costs £9,900): units for a target profit of £6,300', b: '(9,900 + 6,300) ÷ 0.90 = 18,000 loaves. Round target-profit units up.', src: MARG },
      { n: 4, f: 'Price £16, variable cost £10, fixed costs £27,000, budgeted sales 6,000. Break-even and margin of safety?', b: 'Break-even 27,000 ÷ 6 = 4,500 units.\nMargin of safety 1,500 units, 25% of budgeted sales.', src: MARG },
      { n: 5, f: 'A part costs £7.80 marginal cost to make and £7.20 to buy; fixed costs unaffected. Saving from buying 5,000?', b: '£0.60 × 5,000 = £3,000, before non-financial factors such as quality and reliability of supply.', src: MARG },
      { n: 6, f: 'Material is scarce. J: contribution £12 using 3 kg. K: contribution £10 using 2 kg. Which first?', b: 'K: £5 per kg against £4 per kg for J. Rank by contribution per unit of the limiting factor.', src: MARG },
      { n: 7, f: 'A line has contribution £8,000 and apportioned fixed costs £11,000, of which £5,000 is avoidable. Effect of closing it?', b: 'Lose £8,000 contribution, save £5,000: profit falls by £3,000, so keep it on financial grounds.', src: MARG },
      { n: 8, f: 'With spare capacity and no extra costs, what is the lowest price at which a special order adds to profit?', b: 'Any price above marginal cost. Then consider existing customers\' reaction, repeat orders and reputation.', src: MARG },
      { n: 9, f: 'What moves the break-even point?', b: 'A higher price or lower variable cost raises contribution per unit, so break-even falls. Higher fixed costs raise break-even.', src: MARG },
      { n: 10, f: 'Three limitations of break-even analysis', b: 'Costs rarely split cleanly into fixed and variable; one price and constant variable cost are assumed; fixed costs assumed constant; all output assumed sold; sales mix matters; forecasts may be wrong.', src: MARG },
    ]),

    // 11 Standard costing and variance analysis
    ...topicOnly('standard-costing-and-variance-analysis', '11', [
      { n: 1, f: 'Standard cost', b: 'A predetermined cost of one unit of output, set in advance from expected quantities and prices.', src: STD },
      { n: 2, f: 'Standard 2 kg at £8 per unit. 600 units made using 1,150 kg costing £9,545. Materials variances?', b: 'AP £8.30; SQ 1,200 kg.\nPrice (8.00 − 8.30) × 1,150 = £345 A.\nUsage (1,200 − 1,150) × 8 = £400 F.\nTotal £55 F.', src: STD },
      { n: 3, f: 'Standard 0.5 hours at £12 per unit. 1,000 units made in 480 hours costing £6,000. Labour variances?', b: 'AR £12.50; SH 500.\nRate (12 − 12.50) × 480 = £240 A.\nEfficiency (500 − 480) × 12 = £240 F.\nTotal nil: offsetting variances can hide behind a nil total.', src: STD },
      { n: 4, f: 'Budget 1,500 units at £40, standard contribution £15. Actual 1,620 units at £38. Sales variances?', b: 'Price (38 − 40) × 1,620 = £3,240 A.\nVolume (1,620 − 1,500) × 15 = £1,800 F.\nNet effect of the price cut £1,440 A.', src: STD },
      { n: 5, f: 'At what value is the sales volume variance measured?', b: 'Standard contribution per unit, when fixed costs appear as a separate line (or standard profit per unit if the question gives it), not selling price.', src: STD },
      { n: 6, f: 'Budgeted profit £18,000. Sales volume £1,200 F, sales price £2,000 A, materials £500 A, labour £300 F. Actual profit?', b: '18,000 + 1,200 − 2,000 − 500 + 300 = £17,000.', src: STD },
      { n: 7, f: 'Cost reconciliation vs profit reconciliation: what happens to an adverse variance?', b: 'Cost reconciliation: adverse variances are added to standard cost (favourable deducted).\nProfit reconciliation: adverse variances are deducted from budgeted profit.', src: STD },
      { n: 8, f: 'More skilled labour is used. Which variances can result?', b: 'Labour rate A, labour efficiency F and materials usage F.', src: STD },
      { n: 9, f: 'Who is usually answerable for the materials price and materials usage variances?', b: 'Price: the buyer or purchasing manager (unless prices rose across the market).\nUsage: the production supervisor.', src: STD },
      { n: 10, f: 'Three disadvantages of standard costing', b: 'Costly to set up and maintain; standards date quickly; suits repetitive production rather than one-off work; tight standards can demotivate; information arrives after the event.', src: STD },
    ]),

    // 12 Absorption and activity based costing
    ...topicOnly('absorption-and-activity-based-costing', '12', [
      { n: 1, f: 'Allocation, apportionment and absorption', b: 'Allocation: charging a whole cost to the one product or cost centre that caused it.\nApportionment: sharing an indirect cost between cost centres on a fair basis.\nAbsorption: charging cost-centre overheads to products using an OAR.', src: ABS },
      { n: 2, f: 'Rent of £48,000 shared by floor area: X 600 m², Y 1,000 m², Z 400 m²', b: 'X £14,400; Y £24,000; Z £9,600. Check: total £48,000.', src: ABS },
      { n: 3, f: 'Budget: overheads £54,000, 4,500 direct labour hours. Actual: 4,300 hours, overheads £53,100. Result?', b: 'OAR £12 per hour. Absorbed £51,600. Under-absorbed by £1,500, which reduces profit.', src: ABS },
      { n: 4, f: 'OAR £7.00 per machine hour. Actual 13,000 machine hours; actual overheads £89,900. Result?', b: 'Absorbed £91,000. Over-absorbed by £1,100; profit rises by £1,100.', src: ABS },
      { n: 5, f: 'A unit uses £22 materials, £18 labour and 1.5 machine hours at £7.00. Total cost and price at a 30% mark-up?', b: 'Cost 22 + 18 + 10.50 = £50.50. Price 50.50 × 1.3 = £65.65.', src: ABS },
      { n: 6, f: 'Total cost £64. Price for a 20% margin on selling price?', b: 'Price = cost ÷ (1 − margin) = 64 ÷ 0.8 = £80.', src: ABS },
      { n: 7, f: 'A deliveries pool of £18,000 has 600 deliveries. Cakes use 420 deliveries for 9,000 cakes. Cost per cake?', b: 'Driver rate £30 per delivery. 420 × 30 = £12,600. ÷ 9,000 = £1.40 per cake.', src: ABS },
      { n: 8, f: 'When does ABC give very different product costs from absorption costing?', b: 'When products differ a lot in batch size, overheads are a large share of cost, or a low-volume complex product shares a factory with a high-volume simple one. Volume-based rates under-cost the low-volume product.', src: ABS },
      { n: 9, f: 'Production 6,000 units, sales 5,200, no opening inventory, fixed production overhead £5 per unit. Absorption vs marginal profit?', b: 'Inventory rises by 800 units, so absorption profit is 800 × £5 = £4,000 higher.', src: ABS },
      { n: 10, f: 'ABC cost £42, absorption cost £32. The product is priced at a 25% mark-up on absorption cost. Result against ABC cost?', b: 'Price 32 × 1.25 = £40. Against ABC cost of £42, a loss of £2 per unit.', src: ABS },
      { n: 11, f: 'Apportionment bases for rent, machinery insurance, machine power and canteen costs', b: 'Rent: floor area. Machinery insurance and depreciation: machinery cost or value. Machine power: machine hours. Canteen and welfare: number of employees.', src: ABS },
    ]),

    // 13 Capital investment appraisal
    ...topicOnly('capital-investment-appraisal', '13', [
      { n: 1, f: 'Relevant cash flows: which of these are included? Depreciation, a survey already paid, a share of existing rent, residual value', b: 'Residual value: yes, in the final year.\nDepreciation: no (non-cash).\nSurvey already paid: no (sunk cost).\nShare of existing rent: no (paid whether or not the project goes ahead).', src: CIA },
      { n: 2, f: 'Sunk cost', b: 'Money already spent that the decision cannot change, so it is not a relevant cash flow.', src: CIA },
      { n: 3, f: 'A van costs £60,000 and saves £16,000 cash a year. Payback?', b: '60,000 ÷ 16,000 = 3.75 years: 3 years 9 months.', src: CIA },
      { n: 4, f: 'Outlay £70,000; inflows £30,000, £25,000, £20,000 in years 1 to 3. Payback?', b: 'Cumulative (40,000), (15,000), then +5,000. 2 years + (15,000 ÷ 20,000) × 12 = 2 years 9 months.', src: CIA },
      { n: 5, f: 'Outlay £50,000; £22,000 a year for 3 years; factors 0.893, 0.797, 0.712. NPV?', b: 'PVs 19,646 + 17,534 + 15,664 = £52,844. NPV +£2,844: accept on financial grounds, though the margin is small.', src: CIA },
      { n: 6, f: 'Discount factor for year 2 at 6%, to three decimal places', b: '1 ÷ 1.06² = 0.890.', src: CIA },
      { n: 7, f: 'Forecast profit £14,000 after depreciation of £9,000. Net cash flow?', b: '14,000 + 9,000 = £23,000: depreciation is non-cash, so add it back.', src: CIA },
      { n: 8, f: 'Why does NPV fall when the cost of capital rises?', b: 'A higher rate gives smaller discount factors, so every future inflow has a lower present value while the year-0 outlay is unchanged.', src: CIA },
      { n: 9, f: 'Payback: two benefits and two limitations', b: 'Benefits: quick and easy to understand; favours early cash, helping liquidity; relies on nearer forecasts.\nLimitations: ignores cash after payback; ignores the time value of money; cut-off period is a judgement.', src: CIA },
      { n: 10, f: 'NPV: two benefits and two limitations', b: 'Benefits: allows for the time value of money; uses all cash flows; shows value added in £.\nLimitations: harder to explain; the cost of capital is hard to estimate; assumes year-end cash flows.', src: CIA },
      { n: 11, f: 'Project P has the shorter payback; project Q the higher positive NPV. Why might a business still choose P?', b: 'If it is short of cash, or Q\'s later forecasts look unreliable, because P recovers the outlay sooner. NPV alone favours Q.', src: CIA },
    ]),

    // 14 Accounting for organisations with incomplete records
    ...topicOnly('accounting-for-organisations-with-incomplete-records', '14', [
      { n: 1, f: 'Statement of affairs', b: 'A list of assets and liabilities at a date, set out like a statement of financial position. The balancing figure is capital.', src: INC },
      { n: 2, f: 'Opening capital £24,000; closing £31,500; drawings £15,600; capital introduced £2,000. Profit?', b: 'Closing − opening + drawings − capital introduced = 31,500 − 24,000 + 15,600 − 2,000 = £21,100.', src: INC },
      { n: 3, f: 'Receivables: opening £2,500, closing £3,100; receipts £28,700; irrecoverable debts £200. Credit sales?', b: '28,700 + 200 + 3,100 − 2,500 = £29,500.', src: INC },
      { n: 4, f: 'Payables £3,000 at the start and £3,600 at the end; payments £30,000; discounts received £250; contra £400. Credit purchases?', b: '30,000 + 250 + 400 + 3,600 − 3,000 = £31,250.', src: INC },
      { n: 5, f: 'Cash in hand: opening £120, closing £90. Banked £18,400; cash wages £5,200; drawings from the till £3,000. Cash takings?', b: '18,400 + 5,200 + 3,000 + 90 − 120 = £26,570.', src: INC },
      { n: 6, f: 'Cost of sales £45,000 with a 50% mark-up. Revenue? And revenue £72,000 at a 30% margin: cost of sales?', b: 'Revenue 45,000 × 150/100 = £67,500.\nCost of sales 72,000 × 70% = £50,400.', src: INC },
      { n: 7, f: 'Cost of sales £54,000; rate of inventory turnover 9 times; opening inventory £5,400. Closing inventory?', b: 'Average 54,000 ÷ 9 = £6,000. Closing = 12,000 − 5,400 = £6,600.', src: INC },
      { n: 8, f: 'How do you find inventory lost in a fire?', b: 'Cost of sales from sales and the mark-up or margin; expected closing inventory = opening + purchases − cost of sales (− goods taken by owner); loss = expected closing − inventory saved, at cost.', src: INC },
      { n: 9, f: 'Revenue £60,000; gross profit £21,000; profit in relation to revenue 15%. Total expenses?', b: 'Profit 60,000 × 15% = £9,000. Expenses 21,000 − 9,000 = £12,000.', src: INC },
      { n: 10, f: 'Single entry vs double entry: one benefit and one limitation each', b: 'Single entry: cheap and simple, but no trial balance check, so errors and theft go unnoticed.\nDouble entry: an arithmetic check and full statements, but more time, skill and cost.', src: INC },
    ]),

    // 15 Partnership accounts
    ...topicOnly('partnership-accounts', '15', [
      { n: 1, f: 'Partnership Act 1890 default terms', b: 'Profits and losses shared equally; no interest on capital; no interest on drawings; no partnership salaries; interest on a partner\'s loan allowed.', src: PART },
      { n: 2, f: 'Profit £40,000; interest on drawings £600; interest on capital £5,000; salaries £12,000. Residual profit shared 3 : 1?', b: '40,000 + 600 − 5,000 − 12,000 = £23,600, shared £17,700 and £5,900.', src: PART },
      { n: 3, f: 'Interest on capital vs interest on a partner\'s loan', b: 'Interest on capital is an appropriation of profit. Interest on a loan is an expense in the income statement, before profit for the year; the loan is a liability.', src: PART },
      { n: 4, f: 'Fixed vs fluctuating capital accounts', b: 'Fixed: the capital account holds agreed capital only; everything else goes to the current account.\nFluctuating: no current account; all appropriations and drawings pass through capital.', src: PART },
      { n: 5, f: 'A partner draws £9,000 on 1 May. Year end 31 December; interest on drawings 6% a year. Interest?', b: '9,000 × 6% × 8/12 = £360, added in the appropriation account and debited to the current account.', src: PART },
      { n: 6, f: 'On admission: building up £20,000, inventory down £1,500, provision for doubtful debts up £500. Old ratio 2 : 1. Shares?', b: 'Revaluation profit £18,000, shared in the old ratio: £12,000 and £6,000.', src: PART },
      { n: 7, f: 'A and B share equally and admit C; new ratio 2 : 2 : 1. Goodwill of £18,000 is not kept. Net effect on each capital?', b: 'Created 1 : 1 (A £9,000, B £9,000); written off 2 : 2 : 1 (£7,200, £7,200, £3,600).\nNet: A +£1,800, B +£1,800, C −£3,600.', src: PART },
      { n: 8, f: 'On a change in partnership, which ratio is used for revaluation, creating goodwill and writing goodwill off?', b: 'Old ratio for revaluation and creating goodwill. New ratio for writing goodwill off.', src: PART },
      { n: 9, f: 'Retiring partner: capital £20,000, current account debit £1,500, revaluation share £2,000, goodwill share £5,000. Amount due?', b: '20,000 − 1,500 + 2,000 + 5,000 = £25,500. Anything not paid in cash becomes a loan (a liability).', src: PART },
      { n: 10, f: 'What does a debit balance on a partner\'s current account show?', b: 'The partner has drawn more than the opening balance plus everything credited for the year, draining cash from the firm.', src: PART },
      { n: 11, f: 'Interest and salaries exceed the profit available. What happens?', b: 'They are still credited in full, and the shortfall is shared as a residual loss in the profit-sharing ratio.', src: PART },
      { n: 12, f: 'Two partners have capitals of £30,000 and £10,000 and no agreement. Profit is £25,000. Each partner\'s share?', b: '£12,500 each: shared equally under the Partnership Act 1890.', src: PART },
    ]),

    // 16 Accounting for limited companies
    ...topicOnly('accounting-for-limited-companies', '16', [
      { n: 1, f: '500,000 ordinary shares of £1. A 1 for 5 rights issue at £1.40. Entries?', b: '100,000 new shares. Dr Bank £140,000; Cr Share capital £100,000; Cr Share premium £40,000.', src: ACC },
      { n: 2, f: '600,000 ordinary shares of £0.25. A 1 for 2 bonus issue from retained earnings. Entry?', b: '300,000 new shares. Dr Retained earnings £75,000; Cr Share capital £75,000. No cash.', src: ACC },
      { n: 3, f: 'A building costs £200,000 with accumulated depreciation of £30,000 and is revalued to £260,000. Surplus and entry?', b: 'Surplus 260,000 − 170,000 = £90,000.\nDr Building £60,000; Dr Provision for depreciation £30,000; Cr Revaluation reserve £90,000.', src: ACC },
      { n: 4, f: 'Profit from operations £50,000; depreciation £12,000; profit on disposal £1,000; inventory up £3,000; receivables up £4,000; payables up £2,000', b: '50,000 + 12,000 − 1,000 − 3,000 − 4,000 + 2,000 = £56,000 cash generated from operations.', src: ACC },
      { n: 5, f: 'Tax charge £14,000; tax payable £12,500 at the start and £14,000 at the end. Tax paid?', b: '12,500 + 14,000 − 14,000 = £12,500.', src: ACC },
      { n: 6, f: 'Interest charge £4,800; accrued interest £1,200 at the start and £600 at the end. Interest paid?', b: '1,200 + 4,800 − 600 = £5,400.', src: ACC },
      { n: 7, f: 'Statement of cash flows: where do sale proceeds, dividends paid and a bonus issue go?', b: 'Sale proceeds: investing activities (inflow).\nDividends paid: financing activities in the common layout.\nBonus issue: not shown, no cash.', src: ACC },
      { n: 8, f: 'Why can a revaluation reserve not be used to pay cash dividends?', b: 'The gain is unrealised: the asset has not been sold.', src: ACC },
      { n: 9, f: 'Accumulated depreciation £20,000 at the start; charge £10,000; depreciation on an asset sold £9,000. Closing balance?', b: '20,000 + 10,000 − 9,000 = £21,000.', src: ACC },
      { n: 10, f: 'Three reasons companies publish accounts', b: 'It is a legal requirement; stewardship (owners are often not the directors); and limited liability means lenders and suppliers need information.', src: ACC },
      { n: 11, f: 'Limitations of published accounts', b: 'Historical and published months after the year end; summarised; money measurement only, so non-financial factors are missing; estimates and judgement; window dressing; visible to competitors.', src: ACC },
      { n: 12, f: 'Purpose and importance of the international accounting standards framework', b: 'Purpose: common rules for measuring, presenting and disclosing items (set by the IASB).\nImportance: comparability, reliability and investor confidence, less scope for creative accounting, consistency, a benchmark for auditors.', src: ACC },
    ]),

    // 17 Interpretation, analysis and communication of accounting information
    ...topicOnly('interpretation-analysis-and-communication-of-accounting-information', '17', [
      { n: 1, f: 'EPS: formula, and EPS for profit after tax £450,000 and 3,000,000 ordinary shares', b: 'Profit after tax in pence ÷ number of issued ordinary shares.\n45,000,000p ÷ 3,000,000 = 15.00p.', src: IAC },
      { n: 2, f: 'P/E ratio for EPS 15p and a share price of 240p', b: 'Current market price ÷ EPS = 240 ÷ 15 = 16.00 times.', src: IAC },
      { n: 3, f: 'Dividend yield for a dividend per share of 6p and a share price of 240p', b: 'Dividend per share ÷ market price × 100 = 6 ÷ 240 × 100 = 2.50%.', src: IAC },
      { n: 4, f: 'Dividend cover for profit after tax £450,000 and ordinary dividends paid £180,000', b: 'Profit after interest and tax ÷ ordinary dividends paid = 2.50 times.', src: IAC },
      { n: 5, f: 'Interest cover for profit before interest and tax £360,000 and interest payable £45,000', b: '360,000 ÷ 45,000 = 8.00 times.', src: IAC },
      { n: 6, f: 'A 1-for-2 bonus issue is made on 3,000,000 shares. Profit after tax stays at £450,000. New EPS?', b: '4,500,000 shares. 45,000,000p ÷ 4,500,000 = 10.00p. No cash moves.', src: IAC },
      { n: 7, f: 'Interest cover vs capital gearing', b: 'Interest cover uses the income statement: can the interest be paid this year? Gearing uses the statement of financial position: how much long-term finance is borrowed?', src: IAC },
      { n: 8, f: 'Why should EPS not be compared between two companies?', b: 'They have different numbers and nominal values of shares, so EPS sizes are not comparable. Compare one company\'s EPS over time.', src: IAC },
      { n: 9, f: 'The five external stakeholders named in 7127', b: 'Customers, suppliers, government, lenders and the local community.', src: IAC },
      { n: 10, f: 'A company\'s P/E rises while its EPS is unchanged. What has happened?', b: 'The share price has risen: the market expects more growth or sees less risk.', src: IAC },
      { n: 11, f: 'Effect of a revaluation of non-current assets on profit, cash, gearing and ROCE', b: 'No effect on profit or cash. Equity rises, so gearing and ROCE fall.', src: IAC },
      { n: 12, f: 'Computerised vs manual records: one strength and one risk of each', b: 'Computerised: fast, arithmetic always correct, reports on demand; but hacking, system failure and "garbage in, garbage out".\nManual: low cost; but slow, with arithmetic errors possible.', src: IAC },
    ]),

    // 18 The impact of ethical considerations
    ...topicOnly('the-impact-of-ethical-considerations', '18', [
      { n: 1, f: 'The five fundamental principles, each with its key word', b: 'Integrity (honesty); objectivity (independence of judgement); professional competence and due care (skill and diligence); confidentiality (trust); professional behaviour (reputation).', src: ETH },
      { n: 2, f: 'Self-interest and self-review threats: triggers and safeguards', b: 'Self-interest: bonus, shares, fee dependence, gifts; remove the person from the decision or use independent review.\nSelf-review: checking your own work; a different person reviews it.', src: ETH },
      { n: 3, f: 'Advocacy, familiarity and intimidation threats: safeguards', b: 'Advocacy: separate the advocacy and reporting roles.\nFamiliarity (a long or close relationship): rotate staff.\nIntimidation: escalate to the audit committee or board.', src: ETH },
      { n: 4, f: 'Unmodified, qualified, adverse and disclaimer audit opinions', b: 'Unmodified: true and fair.\nQualified: true and fair except for a specific material matter.\nAdverse: not true and fair (material and pervasive).\nDisclaimer: no opinion, not enough evidence.', src: ETH },
      { n: 5, f: 'Who sets directors\' pay under good governance?', b: 'A remuneration committee of independent non-executive directors. No director decides their own pay.', src: ETH },
      { n: 6, f: '"Comply or explain"', b: 'Under the UK Corporate Governance Code, a listed company follows each provision or explains why it has not. The Companies Act allows no such departures.', src: ETH },
      { n: 7, f: 'Role of the FRC', b: 'Sets UK accounting standards and the UK Corporate Governance and Stewardship Codes; regulates auditors, accountants and actuaries; investigates misconduct.', src: ETH },
      { n: 8, f: 'CCAB vs CIMA', b: 'CCAB is a forum and common voice for ICAEW, ACCA, CIPFA, ICAS and Chartered Accountants Ireland. CIMA, the management accountants\' body, is not a member and has its own Code of Ethics.', src: ETH },
      { n: 9, f: 'A sales director wants £30,000 of goods sent on 2 January included in December revenue. Gross margin 40%. Effect and principles?', b: 'Revenue overstated £30,000; gross profit overstated £12,000. Breaches integrity and professional competence and due care (realisation). Record it in January and escalate if pressed.', src: ETH },
      { n: 10, f: 'First steps on suspecting an unethical or illegal act', b: 'Establish the facts and keep records; name the principle and threat; evaluate significance; apply safeguards; escalate internally (manager, audit committee, board) before seeking external help; refuse to take part.', src: ETH },
      { n: 11, f: 'Integrity vs objectivity', b: 'Integrity is honesty. Objectivity is freedom from bias, conflict of interest or undue influence. A biased estimate can be honestly believed.', src: ETH },
      { n: 12, f: 'Corporate social responsibility and section 172 of the Companies Act 2006', b: 'CSR: responsibility to employees, customers, suppliers, community and environment, not only shareholders. s172 requires directors to have regard to factors such as these and long-term consequences.', src: ETH },
    ]),
  ],
};
