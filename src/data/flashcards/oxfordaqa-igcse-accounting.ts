/**
 * D-438 -- flashcards for OxfordAQA International GCSE Accounting 9215 (2024 onwards).
 *
 * Topic 1 itemises no subtopics, so its cards hang on the topic and use
 * `1-<n>`. The subtopics of topics 2-5 carry no number in syllabus-topics.ts
 * (the specification does not number its content statements), so the
 * validator requires their ids to be `-<n>`, unique across the whole deck.
 * Each such subtopic is given its own block of a hundred: the first unnumbered
 * subtopic uses -101, -102, ..., the second -201, ... (block numbers follow
 * the order below). Ids are permanent (browser progress is keyed by them): add
 * a card with the next unused number in its block, never renumber.
 *
 * Not tiered. Terms follow Marlbridge's own 9215 notes (income statement,
 * provision for doubtful debts, outstanding banking, liquid capital ratio,
 * markup, net book value).
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9215); origin 'revision-notes'.
 *
 * Amounts are in dollars, as on the 9215 notes. Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; u?: true; src?: string }

const card = (topic: string, subtopic: string | undefined, id: string, { f, b, u, src }: Spec): Flashcard => ({
  id,
  topic,
  ...(subtopic ? { subtopic } : {}),
  front: f,
  back: b,
  ...(u ? { tier: 'upper' as const } : {}),
  origin: src ? 'revision-notes' as const : 'authored' as const,
  ...(src ? { source: src } : {}),
});

/** A topic with no subtopics: ids `<topic number>-<n>`. */
const topicOnly = (topic: string, number: number, specs: Spec[]): Flashcard[] =>
  specs.map((s) => card(topic, undefined, `${number}-${s.n}`, s));

/** A subtopic with no number in the syllabus record: ids `-<block × 100 + n>`. */
const unnumbered = (topic: string, subtopic: string, block: number, specs: Spec[]): Flashcard[] =>
  specs.map((s) => card(topic, subtopic, `-${block * 100 + s.n}`, s));

const T1 = 'sources-and-recording-of-data-oxfordaqa-igcse';
const T2 = 'verification-of-accounting-records-oxfordaqa-igcse';
const T3 = 'development-of-the-accounting-model';
const T4 = 'preparation-of-financial-statements-oxfordaqa-igcse';
const T5 = 'interpretation-analysis-and-communication-of-financial-information';

const REC = 'igcse-oxfordaqa-accounting-recording-revision-notes';

export const DECK_OXFORDAQA_IGCSE_ACCOUNTING: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'igcse',
  subjectSlug: 'accounting',
  syllabusCode: '9215',
  syllabusSeries: '2024-onwards',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'javaid-iqbal-sabri', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Sources and recording of data (no subtopics)
    ...topicOnly(T1, 1, [
      { n: 1, f: 'The accounting equation, and why capital sits with liabilities', b: 'Assets = Capital + Liabilities.\nUnder the business entity concept the business is separate from its owner, so capital is an amount the business owes back to the owner.' },
      { n: 2, f: 'DEAD CLIC', b: 'Debit: Expenses, Assets, Drawings.\nCredit: Liabilities, Income, Capital.\nThese are the sides on which each type of account increases.' },
      { n: 3, f: 'Goods are bought on credit from Khan for $500, then $80 are returned. Entries and Khan’s balance?', b: 'Dr Purchases 500, Cr Khan 500.\nDr Khan 80, Cr Purchases returns 80 (never credit Purchases).\nKhan’s balance: $420 credit, the amount still owed.' },
      { n: 4, f: 'Invoice', b: 'The source document for a credit sale or purchase.', src: REC },
      { n: 5, f: 'Credit note and debit note', b: 'Credit note: records goods returned.\nDebit note: a request for a credit note.', src: REC },
      { n: 6, f: 'Receipt, cheque counterfoil and paying-in slip', b: 'Receipt: a payment made or received.\nCheque counterfoil: a payment by cheque.\nPaying-in slip: money banked.', src: REC },
      { n: 7, f: 'Statement of account', b: 'A summary sent to a credit customer.', src: REC },
      { n: 8, f: 'What do the sales, purchases, sales returns and purchases returns journals record?', b: 'Sales journal: credit sales.\nPurchases journal: credit purchases.\nSales returns journal: returns inwards.\nPurchases returns journal: returns outwards.', src: REC },
      { n: 9, f: 'Cash book, petty cash book and general journal: what each records', b: 'Cash book: all cash and bank transactions.\nPetty cash book: small cash payments.\nGeneral journal: everything else, such as opening entries, corrections and non-current assets bought on credit.', src: REC },
      { n: 10, f: 'Sales ledger, purchases ledger and general (nominal) ledger', b: 'Sales ledger: personal accounts of credit customers (trade receivables).\nPurchases ledger: personal accounts of credit suppliers (trade payables).\nGeneral (nominal) ledger: all other accounts.', src: REC },
      { n: 11, f: 'The imprest system, and why it is a control', b: 'A fixed petty cash float is restored each period by reimbursing exactly what was spent, so the claim must equal the total of the vouchers. A difference signals an error or a missing voucher.' },
      { n: 12, f: 'Where are cash sales recorded? Why not the sales journal?', b: 'In the cash book. Only credit sales of goods go in the sales journal; putting cash sales there is the standard error.' },
    ]),

    // 2 Verification of accounting records
    ...unnumbered(T2, 'verification-of-the-double-entry-records-oxfordaqa-igcse-accounting', 1, [
      { n: 1, f: 'Verification of the double entry records', b: 'Checking that the double entry records are accurate. The techniques named are the trial balance, control accounts (receivables and payables ledgers) and bank reconciliation statements.' },
      { n: 2, f: 'Which four errors make the trial balance totals disagree?', b: 'Addition (an account added up wrongly), partial omission (one side missing), transposition (digits swapped on one side) and unequal posting (debit and credit amounts differ).' },
      { n: 3, f: 'Omission compared with partial omission', b: 'Omission: the whole transaction is missing, so the totals still agree.\nPartial omission: one side is recorded and the other missing, so the totals differ.' },
      { n: 4, f: 'Transposition compared with error of original entry', b: 'Transposition: digits swapped on one side only, so the trial balance disagrees.\nOriginal entry: the same wrong figure on both sides, so it agrees.' },
      { n: 5, f: 'A balance of $3,270 is listed as $3,720. Effect, and what clue does the difference give?', b: 'The total is $450 too high. 450 divides exactly by 9 (450 ÷ 9 = 50), the sign of a transposition.' },
    ]),
    ...unnumbered(T2, 'the-trial-balance-oxfordaqa-igcse-accounting', 2, [
      { n: 1, f: 'Trial balance', b: 'A two-column list of all the ledger account balances at a chosen date, debits on one side and credits on the other. It tests arithmetic agreement only.' },
      { n: 2, f: 'Which balances go in the debit column and which in the credit column?', b: 'Debit: assets, expenses, purchases, returns inwards, drawings, opening inventory.\nCredit: capital, income, returns outwards, liabilities (trade payables, loans, bank overdraft).' },
      { n: 3, f: 'A bank overdraft of $1,640 is entered in the debit column. Effect on the totals?', b: 'It should be a credit, so the totals differ by 2 × 1,640 = $3,280, with the debit column higher.' },
      { n: 4, f: 'Uses and limitations of a trial balance', b: 'Uses: a quick arithmetic check; shows an error exists; source of balances for the statements.\nLimitations: six error types leave it agreeing; it does not say where an error is or show that amounts are valued correctly.' },
      { n: 5, f: 'Draft totals: debit $28,980, credit $31,200. Rent $1,200 is in the credit column; electricity $680 is listed as $860. Corrected totals?', b: 'Debit: 28,980 − 180 + 1,200 = 30,000.\nCredit: 31,200 − 1,200 = 30,000.\nBoth $30,000.' },
      { n: 6, f: 'The trial balance totals differ. What should you not do?', b: 'Do not change any figure to force agreement. Re-add, find the difference, test the clues (twice a balance, equal to a balance, divisible by 9) and trace it to the ledger.' },
    ]),
    ...unnumbered(T2, 'control-accounts-oxfordaqa-igcse-accounting', 3, [
      { n: 1, f: 'Trade receivables and trade payables ledger control accounts', b: 'Summaries of all the individual customer accounts in the receivables ledger and all the supplier accounts in the payables ledger. Each is a memorandum record, not part of the double entry.' },
      { n: 2, f: 'Receivables control account: which items go on the debit side?', b: 'Opening debit balances, credit sales, dishonoured cheques from customers, interest charged on overdue accounts, closing credit balances c/d.' },
      { n: 3, f: 'Receivables control account: which items go on the credit side?', b: 'Opening credit balances, money received, cash discount allowed, sales returns, irrecoverable debts, contra entries, closing debit balances c/d.' },
      { n: 4, f: 'Payables control account: main entries on each side', b: 'Credit: opening credit balances, credit purchases, interest charged by suppliers.\nDebit: money paid, cash discount received, purchases returns, contra entries.' },
      { n: 5, f: 'A customer owes the business $1,800 and is owed $2,500 by it. Contra entry?', b: 'The contra is the smaller figure, $1,800: debit the trader in the payables ledger, credit the trader in the receivables ledger. The business still owes $700.' },
      { n: 6, f: 'Opening receivables $12,400; credit sales $30,100; receipts $28,650; sales returns $900; discount allowed $350; irrecoverable debts $400. Closing balance?', b: '12,400 + 30,100 − 28,650 − 900 − 350 − 400 = $12,200.' },
      { n: 7, f: 'Why keep control accounts?', b: 'They give total receivables or payables quickly; check the ledger against the list of balances; narrow the search when they disagree; and give a missing figure such as credit sales. Agreement does not prove the ledger correct.' },
    ]),
    ...unnumbered(T2, 'bank-reconciliation-statements-oxfordaqa-igcse-accounting', 4, [
      { n: 1, f: 'Unpresented cheque and outstanding banking', b: 'Unpresented cheque: paid out and recorded by the business, not yet deducted by the bank.\nOutstanding banking: entered in the cash book, not yet credited by the bank.' },
      { n: 2, f: 'Which items from the bank statement update the cash book, and on which side?', b: 'Credit side: bank charges, interest paid, direct debits, standing orders.\nDebit side: bank interest received, credit transfers received.' },
      { n: 3, f: 'Layout of a bank reconciliation statement starting from the bank statement', b: 'Balance per bank statement, add outstanding bankings, add or less bank errors, less unpresented cheques = balance per updated cash book.' },
      { n: 4, f: 'Bank statement $1,900 credit; unpresented cheques $300; outstanding banking $450. Balance per updated cash book?', b: '1,900 + 450 − 300 = $2,050.' },
      { n: 5, f: 'Cash book error compared with bank error', b: 'A cash book error is corrected in the cash book. A bank error is not: it is adjusted on the reconciliation statement and the bank is told.' },
      { n: 6, f: 'Use and purpose of a bank reconciliation statement', b: 'Confirms the cash at bank figure; finds errors in the cash book and the bank’s record; reveals unrecorded items such as charges; helps spot fraud; shows what is still to clear.' },
      { n: 7, f: 'A payment of $85 was recorded in the cash book as $58. Correction?', b: 'The payment was understated, so credit the cash book with $27 (85 − 58).' },
    ]),
    ...unnumbered(T2, 'correcting-errors-oxfordaqa-igcse-accounting', 5, [
      { n: 1, f: 'Method for correcting an error with a journal', b: 'Name the error; write what was posted; write what should have been posted; journal the difference (through suspense if the trial balance disagreed); add a narrative beginning “being correction of”.' },
      { n: 2, f: 'Which side of the suspense account takes the trial balance difference?', b: 'The smaller side. Credits bigger: suspense is a debit. Debits bigger: suspense is a credit. It should close to nil after the corrections.' },
      { n: 3, f: 'A gas bill of $130 was debited to the telephone account. Error and journal?', b: 'Commission (both are expenses). Debit Gas $130; credit Telephone $130.' },
      { n: 4, f: 'A $410 payment to a supplier was debited to bank and credited to the supplier. Journal?', b: 'Complete reversal: correct with double the amount. Debit the supplier $820; credit Bank $820.' },
      { n: 5, f: 'Repairs to a van of $380 were debited to motor vehicles. Error and journal?', b: 'Principle. Debit Motor expenses $380; credit Motor vehicles $380.' },
      { n: 6, f: 'The wages account was overcast by $700. Journal?', b: 'Debit Suspense $700; credit Wages $700.' },
    ]),
    ...unnumbered(T2, 'the-effect-of-errors-on-profit-calculations-oxfordaqa-igcse-accounting', 6, [
      { n: 1, f: 'How does a correcting journal change profit?', b: 'Credit to an income or expense account: profit up.\nDebit to an income or expense account: profit down.\nOnly asset, liability or capital accounts: no change.' },
      { n: 2, f: 'Draft profit $18,900. Rent overcast by $600; a credit sale of $1,400 omitted; bank charges of $250 not entered. Corrected profit?', b: '18,900 + 600 + 1,400 − 250 = $20,650.' },
      { n: 3, f: 'Profit $9,500. Insurance was undercast by $400 and a sale of $650 was omitted. Corrected profit?', b: '9,500 − 400 + 650 = $9,750.' },
      { n: 4, f: 'Which errors change gross profit as well as profit for the year?', b: 'Errors in sales or purchases move both by the same amount. An error in an expense changes profit for the year only.' },
      { n: 5, f: 'A suspense account closes to nil. Does that prove the books are free of errors?', b: 'No. Only errors revealed by the trial balance pass through suspense; omission, principle or compensating errors may remain.' },
    ]),

    // 3 Development of the accounting model
    ...unnumbered(T3, 'accounting-concepts-oxfordaqa-igcse-accounting', 7, [
      { n: 1, f: 'Business entity and money measurement', b: 'Business entity: the business and owner are separate (an owner’s personal bill is drawings).\nMoney measurement: record only what has a money value (staff morale is not recorded).' },
      { n: 2, f: 'Duality and historic cost', b: 'Duality: each transaction has two equal effects, a debit and a credit.\nHistoric cost: record at the price paid (land bought for $30,000 stays at $30,000).' },
      { n: 3, f: 'Going concern and accruals', b: 'Going concern: the business will carry on trading, so items such as prepayments are carried forward.\nAccruals: match income and expenses to the period they relate to.' },
      { n: 4, f: 'Consistency and prudence', b: 'Consistency: the same methods each period.\nPrudence: do not overstate profit or assets; recognise foreseeable losses (such as a provision for doubtful debts).' },
      { n: 5, f: 'Materiality and realisation', b: 'Materiality: only significant items need full treatment (a $9 stapler is expensed).\nRealisation: revenue is earned when the goods are delivered or the service given and the customer becomes liable to pay.' },
      { n: 6, f: 'Inventory has been valued at selling price. Which concept is broken, and what happens to profit?', b: 'Prudence: selling price includes profit not yet realised, so profit is overstated.' },
      { n: 7, f: 'Rent of $7,200 is paid on 1 October for 12 months; the year ends 31 December. Expense and prepayment?', b: 'Expense 7,200 × 3/12 = $1,800; prepayment $5,400 (accruals, with going concern supporting the carry forward).' },
    ]),
    ...unnumbered(T3, 'capital-and-revenue-oxfordaqa-igcse-accounting', 8, [
      { n: 1, f: 'Capital expenditure and revenue expenditure', b: 'Capital: buys or improves a non-current asset or gets it ready for use; benefit lasts more than one period; statement of financial position.\nRevenue: running costs and keeping assets working; income statement.' },
      { n: 2, f: 'Capital income and revenue income', b: 'Capital income: sale proceeds of a non-current asset, capital introduced by the owner.\nRevenue income: sales, fees, rent, commission and interest received.' },
      { n: 3, f: 'A freezer costs $2,500 with $150 delivery; $90 is spent repairing an old freezer. Treatment?', b: 'New freezer: capital expenditure of $2,650 (debit Freezers, credit Bank).\nRepair: revenue expenditure of $90, in the income statement.' },
      { n: 4, f: 'Effect of charging a capital item as an expense, and of adding a revenue item to an asset', b: 'Capital item expensed: profit and assets understated.\nRevenue item capitalised: profit and assets overstated.' },
      { n: 5, f: 'Repairs of $2,000 are wrongly added to the cost of an asset. Effect on profit?', b: 'Profit is overstated by $2,000 (before any depreciation effect).' },
    ]),
    ...unnumbered(T3, 'depreciation-and-disposal-oxfordaqa-igcse-accounting', 9, [
      { n: 1, f: 'Why do non-current assets depreciate?', b: 'Wear and tear from use, obsolescence (replaced by newer, better equipment) and the passage of time. Depreciation spreads cost over the useful life; it is not a market valuation.' },
      { n: 2, f: 'Why is depreciation a non-cash expense?', b: 'Cash leaves when the asset is bought, not when depreciation is charged. The charge only reduces profit and the asset’s value in the statement of financial position.' },
      { n: 3, f: 'A machine costs $36,000. Straight line with residual value $4,000 over 8 years, and 20% reducing balance for 2 years?', b: 'Straight line: (36,000 − 4,000) ÷ 8 = $4,000 a year.\nReducing balance: Y1 7,200 (NBV 28,800); Y2 5,760 (NBV 23,040).' },
      { n: 4, f: 'Entries for the yearly depreciation charge', b: 'Debit Depreciation, credit Provision for depreciation; transfer the depreciation to the income statement. The asset account stays at cost; NBV = cost − provision for depreciation.' },
      { n: 5, f: 'Entries in the disposal account', b: 'Debit: the asset at cost.\nCredit: the provision for depreciation on that asset, and the sale proceeds.\nThe balance is the profit or loss, transferred to the income statement.' },
      { n: 6, f: 'An asset cost $30,000, provision for depreciation $21,000, sold for $7,000. Result?', b: 'NBV 9,000; proceeds 7,000; loss on disposal $2,000.' },
    ]),
    ...unnumbered(T3, 'accruals-and-prepayments-oxfordaqa-igcse-accounting', 10, [
      { n: 1, f: 'Other payables, other receivables, income due and income received in advance: effect on profit and where shown', b: 'Other payables (expense owing): profit down; current liability.\nOther receivables (expense prepaid): profit up; current asset.\nIncome due: profit up; current asset.\nIncome in advance: profit down; current liability.' },
      { n: 2, f: 'Gas: $180 owing at the start, $2,150 paid, $240 owing at the end. Transfer to the income statement?', b: '2,150 − 180 + 240 = $2,210. The $240 is an other payable in current liabilities.' },
      { n: 3, f: 'Insurance paid $1,500; $200 prepaid at the start and $260 prepaid at the end. Charge?', b: '1,500 + 200 − 260 = $1,440.' },
      { n: 4, f: 'Rent received $3,300; the tenant owed $100 at the start and $180 at the end. Rent income?', b: '3,300 − 100 + 180 = $3,380.' },
      { n: 5, f: 'Draft profit $12,000 omits income due $250, other receivables $180 and other payables $90. Adjusted profit?', b: '12,000 + 250 + 180 − 90 = $12,340.' },
      { n: 6, f: 'Other payables compared with trade payables', b: 'Other payables are expenses owing, such as electricity or wages. Trade payables are owed to suppliers of goods for resale.' },
    ]),
    ...unnumbered(T3, 'irrecoverable-debts-provisions-and-inventory-oxfordaqa-igcse-accounting', 11, [
      { n: 1, f: 'Irrecoverable debt compared with provision for doubtful debts', b: 'Irrecoverable debt: a named customer’s balance that will not be collected, written off (Dr Irrecoverable debts, Cr customer).\nProvision: an estimate of the loss on the remaining receivables, a credit balance.' },
      { n: 2, f: 'Receivables $12,500; provision 4%; existing provision $380. Charge, and receivables shown?', b: 'New provision 500, an increase of $120 (an expense).\nTrade receivables 12,500 less provision 500 = $12,000.' },
      { n: 3, f: 'Receivables $13,000; provision 3%; existing provision $520. Effect?', b: 'New provision 390, a decrease of $130: Dr Provision, Cr Income statement, so profit rises by $130.' },
      { n: 4, f: '28 units cost $40 each; each can be sold for $36 with $6 of selling costs. Inventory value?', b: 'NRV 30 each = $840, lower than cost of $1,120, so value at $840. Profit falls by $280 this year.' },
      { n: 5, f: 'Closing inventory is too high. Effect this year and next year?', b: 'This year: cost of sales too low, gross and net profit too high, and the current asset overstated.\nNext year: opening inventory too high, so profit too low.' },
      { n: 6, f: 'Which items in this area are not examined in 9215?', b: 'The recovery of irrecoverable debts, and FIFO, AVCO and LIFO inventory valuation.' },
    ]),

    // 4 Preparation of financial statements
    ...unnumbered(T4, 'business-organisations-compared-oxfordaqa-igcse-accounting', 12, [
      { n: 1, f: 'Sole trader, partnership and limited company: owners and liability', b: 'Sole trader: one owner, unlimited liability.\nPartnership: two or more partners, usually unlimited liability.\nLimited company: owned by shareholders, limited liability.' },
      { n: 2, f: 'Main strength and weakness of each type of business', b: 'Sole trader: keeps all profit and decides quickly; but bears the risk with limited capital.\nPartnership: shared skills and workload; but disputes and shared risk.\nCompany: limited liability and continuity; but rules, cost, loss of control.' },
      { n: 3, f: 'Share capital compared with loan capital', b: 'Share capital: provided by shareholders, who own the company and share its profit through dividends; part of equity.\nLoan capital: provided by lenders, who are owed repayment and fixed interest; a liability.' },
      { n: 4, f: 'Why might a sole trader become a limited company?', b: 'Shareholders have limited liability, and the company can raise capital by selling shares and by borrowing. The cost is more rules and a shared say in running the business.' },
    ]),
    ...unnumbered(T4, 'sole-trader-statements-oxfordaqa-igcse-accounting', 13, [
      { n: 1, f: 'Layout of a sole trader’s income statement', b: 'Revenue; less cost of sales (opening inventory + purchases less own use + carriage inwards − closing inventory) = gross profit; add other income; less adjusted expenses = net profit.' },
      { n: 2, f: 'The owner takes goods costing $280 for own use. Double entry?', b: 'Debit Drawings $280; credit Purchases $280, at cost. It is not an expense.' },
      { n: 3, f: 'Opening capital $15,000; net profit $9,800; drawings $7,200. Closing capital?', b: '15,000 + 9,800 − 7,200 = $17,600. Net assets in the statement of financial position must equal this.' },
      { n: 4, f: 'Revenue $58,000; cost of sales $39,500. Gross profit and gross profit percentage?', b: 'Gross profit 18,500; 18,500 ÷ 58,000 × 100 = 31.9%.' },
      { n: 5, f: 'Gross profit $15,300; wages $6,000; rent $2,400 paid with $200 owing; depreciation $800; insurance $900 paid with $150 prepaid. Net profit?', b: 'Expenses 6,000 + 2,600 + 800 + 750 = 10,150.\nNet profit 15,300 − 10,150 = $5,150.' },
      { n: 6, f: 'How does a service business’s income statement differ?', b: 'It has no inventory and no cost of sales: it runs from revenue to expenses, with no gross profit.' },
    ]),
    ...unnumbered(T4, 'partnership-statements-oxfordaqa-igcse-accounting', 14, [
      { n: 1, f: 'Order of the partnership appropriation account', b: 'Profit for the year; add interest on drawings; deduct interest on capital; deduct partnership salaries; the residual profit (or deficit) is shared in the profit sharing ratio.' },
      { n: 2, f: 'Interest on a partner’s loan compared with interest on capital', b: 'Loan interest is an expense in the income statement, paid whatever the profit.\nInterest on capital is an appropriation of profit, credited to the partner’s current account.' },
      { n: 3, f: 'A partner’s salary compared with employees’ wages', b: 'Wages paid to employees are expenses. A partner’s salary is an appropriation of profit, credited to the current account.' },
      { n: 4, f: 'Profit for the year $27,640; interest on drawings $660; interest on capital $1,950; salary $8,000. Residual, shared 3 : 2?', b: 'Residual 27,640 + 660 − 1,950 − 8,000 = 18,350.\nShares: $11,010 and $7,340.' },
      { n: 5, f: 'Current account: opening debit $500, interest on capital $1,200, salary $6,000, share of profit $4,300, drawings $9,000, interest on drawings $270. Closing balance?', b: 'Credits 11,500 − debits 9,770 = $1,730 credit.' },
      { n: 6, f: 'Where is a loan from a partner shown in the statement of financial position?', b: 'Under non-current liabilities, not in equity. Equity shows each partner’s capital account and current account (debit balances deducted).' },
      { n: 7, f: 'Which partnership topics are not examined in 9215?', b: 'Admission and retirement of a partner, dissolution of partnerships and changes to the profit sharing ratio.' },
    ]),
    ...unnumbered(T4, 'limited-company-statements-oxfordaqa-igcse-accounting', 15, [
      { n: 1, f: 'The five sub-headings of a limited company’s statement of financial position', b: 'Non-current assets, current assets, equity, non-current liabilities and current liabilities.' },
      { n: 2, f: 'Dividend compared with loan interest', b: 'Loan interest is an expense, deducted after operating profit to reach profit for the year.\nA dividend is a distribution of profit, deducted from retained earnings, never shown among expenses.' },
      { n: 3, f: 'A 6% loan of $50,000 was held all year and $1,800 of interest was paid. Interest owing?', b: 'Full-year interest 3,000, so $1,200 is owing (a current liability). The income statement deducts the full $3,000.' },
      { n: 4, f: 'Retained earnings at the start $12,400; profit for the year $9,100; dividends $4,000. Closing retained earnings?', b: '12,400 + 9,100 − 4,000 = $17,500.' },
      { n: 5, f: 'A loan is repayable eight months after the year end. Where is it shown?', b: 'In current liabilities, because it falls due within one year of the statement date.' },
      { n: 6, f: 'Name items the 9215 specification says are not examined for limited companies', b: 'The statement of changes in equity, preference shares, general reserves, rights issues, bonus issues and the revaluation of non-current assets.' },
    ]),
    ...unnumbered(T4, 'manufacturing-accounts-oxfordaqa-igcse-accounting', 16, [
      { n: 1, f: 'Prime cost and factory overheads', b: 'Prime cost: cost of raw materials used + direct wages.\nFactory overheads: factory running costs that cannot be traced to one unit, such as indirect wages, factory power, insurance, rent and depreciation of machinery.' },
      { n: 2, f: 'Factory cost of finished goods, and cost of sales for a manufacturer', b: 'Factory cost of finished goods = prime cost + overheads.\nCost of sales = opening finished goods + factory cost of finished goods − closing finished goods.' },
      { n: 3, f: 'Raw materials used $17,300; direct wages $9,700; overheads $11,000; finished goods $3,000 opening, $4,500 closing. Cost of sales?', b: 'Prime cost 27,000; factory cost 38,000; cost of sales 3,000 + 38,000 − 4,500 = $36,500.' },
      { n: 4, f: 'Manufacturing account or income statement: carriage inwards, carriage outwards, depreciation of machinery, depreciation of office equipment', b: 'Carriage inwards on materials and machinery depreciation: manufacturing account.\nCarriage outwards and office equipment depreciation: income statement.' },
      { n: 5, f: 'Rent of $12,000 is shared two-thirds factory and one-third office. Factory overhead?', b: 'Two-thirds of 12,000 = $8,000; the other $4,000 is an office expense in the income statement.' },
      { n: 6, f: 'Is the provision for unrealised profit examined in 9215?', b: 'No. Finished goods move from the factory at cost.' },
    ]),
    ...unnumbered(T4, 'club-statements-oxfordaqa-igcse-accounting', 17, [
      { n: 1, f: 'Receipts and payments account compared with income and expenditure account', b: 'Receipts and payments: cash only, including capital items, opening and closing balances.\nIncome and expenditure: accruals basis, the year’s income and expenditure with depreciation, without capital items.' },
      { n: 2, f: 'Surplus, deficit and accumulated fund', b: 'Surplus: income greater than expenditure; deficit: the reverse.\nAccumulated fund: the club’s capital, assets less liabilities; it rises by a surplus and falls by a deficit.' },
      { n: 3, f: 'Subscriptions in arrears and in advance', b: 'In arrears: owed by members, a current asset (other receivable).\nIn advance: received for next year, a current liability (income received in advance).' },
      { n: 4, f: 'Subscriptions received $8,400; arrears $250 opening, $180 closing; advance $120 opening, $160 closing. Income?', b: '8,400 − 250 + 180 + 120 − 160 = $8,290.' },
      { n: 5, f: 'How is a club’s bar or shop shown?', b: 'In a trading account for that activity, which finds its gross profit or loss (sales − cost of sales). The result is carried to the income and expenditure account.' },
      { n: 6, f: 'Income $12,400; expenditure $10,950; opening accumulated fund $6,700. Surplus and closing fund?', b: 'Surplus 1,450; closing accumulated fund 6,700 + 1,450 = $8,150.' },
    ]),
    ...unnumbered(T4, 'incomplete-records-oxfordaqa-igcse-accounting', 18, [
      { n: 1, f: 'Single entry compared with double entry', b: 'Single entry: each transaction recorded once, often only cash and bank movements.\nDouble entry: each transaction recorded as a debit and a credit, so a trial balance can be taken out.' },
      { n: 2, f: 'Statement of affairs', b: 'A list of assets and liabilities at one date, built from counted and valued items, with capital (assets − liabilities) as the balancing figure.' },
      { n: 3, f: 'Opening capital $5,070; closing capital $3,830; drawings $900; nothing introduced. Profit or loss?', b: '3,830 − 5,070 + 900 = −340, a loss of $340.' },
      { n: 4, f: 'Receivables $1,800 opening, $2,100 closing; cash received $14,200; irrecoverable debts $150. Credit sales?', b: '14,200 + 150 + 2,100 − 1,800 = $14,650.' },
      { n: 5, f: 'Opening bank $1,200; receipts $21,500; payments to suppliers and expenses $16,250; closing bank $1,450. Unrecorded drawings?', b: '1,200 + 21,500 − 16,250 − 1,450 = $5,000.' },
      { n: 6, f: 'Benefits and limitations of single entry', b: 'Benefits: cheap, quick and simple; little training; enough for a very small business.\nLimitations: no trial balance; errors and fraud harder to find; profit needs extra calculations; information is limited.' },
    ]),

    // 5 Interpretation, analysis and communication of financial information
    ...unnumbered(T5, 'stakeholders-oxfordaqa-igcse-accounting', 19, [
      { n: 1, f: 'Name the internal and the external stakeholders listed in 9215', b: 'Internal (3): employees, management, owners/shareholders.\nExternal (5): customers, suppliers, government, lenders, local community.' },
      { n: 2, f: 'Interests of employees and management', b: 'Employees: job security, pay and conditions.\nManagement: performance against targets, controlling costs, their own job or bonus.' },
      { n: 3, f: 'Interests of lenders and suppliers', b: 'Lenders: repayment on the agreed dates and interest paid on time (profit before interest, existing loans, assets).\nSuppliers: prompt payment and continued orders (amounts owed, cash available).' },
      { n: 4, f: 'Interests of government, customers and the local community', b: 'Government: taxes, law and regulation, jobs.\nCustomers: reliable supply, fair price, quality and service.\nLocal community: jobs, environment, local spending.' },
      { n: 5, f: 'Why might shareholders and lenders disagree about a large dividend?', b: 'Shareholders receive the dividend, so their return rises. Lenders are owed fixed repayments and prefer cash kept in the business to meet them.' },
      { n: 6, f: 'Profit $27,000; dividend $9,000. Retained profit, and percentage paid out?', b: 'Retained 27,000 − 9,000 = $18,000. Paid out 9,000 ÷ 27,000 × 100 = 33.3%.' },
    ]),
    ...unnumbered(T5, 'accounting-ratios-oxfordaqa-igcse-accounting', 20, [
      { n: 1, f: 'Gross profit margin and markup', b: 'Gross profit margin = gross profit ÷ revenue × 100.\nMarkup = gross profit ÷ cost of sales × 100.\nMarkup is the larger figure for the same trading.' },
      { n: 2, f: 'Profit in relation to revenue, and return on capital employed', b: 'Profit in relation to revenue = profit from operations ÷ revenue × 100.\nROCE = profit from operations ÷ capital employed × 100, where capital employed = equity + non-current liabilities. Both use profit from operations, as in the 9215 mark scheme (May/June 2026).' },
      { n: 3, f: 'Current ratio and liquid capital ratio', b: 'Current ratio = current assets : current liabilities.\nLiquid capital ratio = (current assets − inventory) : current liabilities.\nBoth written as x : 1.' },
      { n: 4, f: 'Rate of inventory turnover, trade receivable days and trade payable days', b: 'Inventory turnover = cost of sales ÷ average inventory (times).\nReceivable days = trade receivables ÷ credit revenue × 365.\nPayable days = trade payables ÷ credit purchases × 365.' },
      { n: 5, f: 'Revenue $96,000; cost of sales $72,000. Gross profit margin and markup?', b: 'Gross profit 24,000. Margin 24,000 ÷ 96,000 × 100 = 25.0%. Markup 24,000 ÷ 72,000 × 100 = 33.3%.' },
      { n: 6, f: 'Converting margin to markup and back', b: 'Markup = margin ÷ (100 − margin) × 100; margin = markup ÷ (100 + markup) × 100.\nA 40% margin is a 66.7% markup; an 80% markup is a 44.4% margin.' },
      { n: 7, f: 'Trade receivables $15,000 on credit revenue of $73,000; trade payables $6,000 on credit purchases of $43,800. Days?', b: 'Receivable days 15,000 ÷ 73,000 × 365 = 75 days.\nPayable days 6,000 ÷ 43,800 × 365 = 50 days.\nCustomers take longer to pay than suppliers are paid, which squeezes cash.' },
    ]),
    ...unnumbered(T5, 'appraising-performance-oxfordaqa-igcse-accounting', 21, [
      { n: 1, f: 'Profit compared with cash and liquidity', b: 'Profit: revenue less expenses, recorded when they arise.\nCash: money actually received and paid.\nLiquidity: the ability to pay debts as they fall due.' },
      { n: 2, f: 'Why can profit and cash differ?', b: 'Credit sales raise profit before cash arrives; depreciation lowers profit with no cash; buying non-current assets, drawings and loan repayments use cash without reducing profit; loans and capital raise cash, not profit.' },
      { n: 3, f: 'A business buys inventory on credit. Effect on profit, cash and a current ratio above 1 : 1?', b: 'No effect on profit or cash. The current ratio falls, because current assets and current liabilities rise by the same amount.' },
      { n: 4, f: 'Current assets $20,000, current liabilities $10,000. $5,000 is paid to trade payables from the bank. New current ratio?', b: '15,000 : 5,000 = 3 : 1 (up from 2 : 1). Profit does not change.' },
      { n: 5, f: 'Is a higher ratio always better?', b: 'No. A very high current ratio can mean idle cash or too much inventory; very few receivable days may mean credit terms so tight that sales are lost.' },
      { n: 6, f: 'Give reasons a profitable business may have a bank overdraft', b: 'Growth in receivables or inventory, buying non-current assets, large drawings, loan repayments.' },
    ]),
    ...unnumbered(T5, 'limitations-of-financial-statements-oxfordaqa-igcse-accounting', 22, [
      { n: 1, f: 'Financial limitations of financial statements and ratios', b: 'They record the past; the statement of financial position is a snapshot at one date; historical cost; estimates and policies change profit; a ratio needs a comparison and gives no reasons; averages hide detail; profit is not cash.' },
      { n: 2, f: 'Non-financial factors the statements do not show', b: 'Management quality and staff skills, morale, reputation and customer service, competitors and market conditions, the wider economy, changes in law, environmental conduct, location, future plans.' },
      { n: 3, f: 'Profit $30,000; capital employed $150,000 at historical cost, $240,000 at today’s values. Effect on the return?', b: 'Historical cost: 20.0%. Restated: 12.5%. The business is unchanged; only the basis of the figures differs.' },
      { n: 4, f: 'Current assets $60,000, current liabilities $40,000. $20,000 of payables is paid from cash just before the year end. Effect?', b: 'The current ratio rises from 1.50 to 2.00 (40,000 ÷ 20,000) although trading is unchanged: the snapshot effect.' },
      { n: 5, f: 'Why can two shops in the same trade report different profits from the same machine?', b: 'Different policies: for a $40,000 machine, 10% straight line charges $4,000 but 20% reducing balance charges $8,000 in year 1.' },
    ]),
    ...unnumbered(T5, 'computers-in-accounting-oxfordaqa-igcse-accounting', 23, [
      { n: 1, f: 'Advantages of computerised accounting software over manual methods', b: 'Fast posting and totals; automatic arithmetic; one entry updates many records; trial balance and statements on demand; easy storage, search and back-up; several users controlled by passwords.' },
      { n: 2, f: 'Disadvantages of computerised accounting software', b: 'Cost of hardware, software, updates and training; hacking, viruses and fraud; power failure or system crash; wrong data still posted wrongly; staff resistance; back-ups must be made and kept.' },
      { n: 3, f: 'When might manual methods suit a business?', b: 'When there are few transactions: they cost little and need no power, though they are slow, error-prone and hard to search.' },
      { n: 4, f: 'Does software remove all errors?', b: 'No. It removes arithmetic slips, but input errors and errors of principle are still posted.' },
      { n: 5, f: 'Software costs $1,500 a year and saves 200 hours at $11 an hour. Net saving?', b: '200 × 11 = 2,200, less 1,500 = $700 a year.' },
    ]),
  ],
};
