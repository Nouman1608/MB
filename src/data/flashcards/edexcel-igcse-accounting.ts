/**
 * D-438 -- flashcards for Pearson Edexcel International GCSE Accounting 4AC1
 * (Issue 1, October 2016).
 *
 * One block per subtopic, in specification order. Card ids are
 * `<subtopic number>-<n>` and are permanent (browser progress is keyed by them):
 * add a new card with the next unused n, never renumber.
 *
 * Not tiered. Depreciation, irrecoverable debts and other receivables/payables
 * appear in Topic 2 (recording, Paper 1) and again in Topic 5 (end of period
 * adjustments, Paper 2); the Topic 2 cards cover definitions and ledger entries,
 * the Topic 5 cards the year-end calculations and their effect on the statements.
 * Terms follow Marlbridge's own 4AC1 notes (receivables and payables ledgers,
 * books of original entry, provision for irrecoverable debts, uncredited lodgement).
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 4AC1); origin 'revision-notes'.
 *
 * Amounts are in dollars, as on the 4AC1 notes. Plain text only (see types.ts).
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

const T1 = 'the-accounting-environment-4ac1';
const T2 = 'introduction-to-bookkeeping-4ac1';
const T3 = 'introduction-to-control-processes-4ac1';
const T4 = 'the-preparation-of-financial-statements-4ac1';
const T5 = 'accounting-for-end-of-period-adjustments-4ac1';

const LEDGER = 'edexcel-igcse-accounting-ledger-accounting-revision-notes';

export const DECK_EDEXCEL_IGCSE_ACCOUNTING: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'igcse',
  subjectSlug: 'accounting',
  syllabusCode: '4AC1',
  syllabusSeries: 'Issue 1, October 2016',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // 1 The accounting environment
    ...sub(T1, 'types-of-business-organisation-4ac1', '1.1', [
      { n: 1, f: 'Public sector and private sector organisations', b: 'Public sector: owned by national or local government; main aim is to provide a service; funded mainly by taxes.\nPrivate sector: owned by individuals or groups; usually aims to make a profit.' },
      { n: 2, f: 'Sole trader compared with partnership', b: 'Sole trader: one owner who keeps all the profit and decides quickly.\nPartnership: two or more owners who share profit in an agreed ratio, pool more capital and skills, but decide more slowly.' },
      { n: 3, f: 'Unlimited liability', b: 'The owner’s personal assets, such as a home, can be used to pay the business’s debts if it cannot pay them. It applies to sole traders and ordinary partnerships.' },
      { n: 4, f: 'Stakeholder', b: 'A person or group with an interest in the business, such as the owner, managers, employees, lenders, suppliers, customers, the tax authority and the community.' },
      { n: 5, f: 'Which figures do a lender and a supplier look at, and why?', b: 'Lender (bank): profit, assets and existing debts, to judge whether a loan can be repaid.\nSupplier: liquid assets against amounts owed, to judge whether it will be paid on time.' },
    ]),
    ...sub(T1, 'accounting-concepts-4ac1', '1.2', [
      { n: 1, f: 'Name the six accounting concepts in the 4AC1 specification', b: 'Consistency, prudence, accruals, materiality, money measurement and business entity.' },
      { n: 2, f: 'Consistency and prudence', b: 'Consistency: use the same method period after period, so years can be compared.\nPrudence: do not overstate profit or assets; recognise likely losses early.' },
      { n: 3, f: 'Accruals concept', b: 'Record income and expenses when they are earned or incurred, not when cash moves, so profit matches the period.' },
      { n: 4, f: 'Materiality and money measurement', b: 'Materiality: only items big enough to affect decisions need separate treatment (a stapler is an expense).\nMoney measurement: record only what can be measured in money (staff skill and reputation are left out).' },
      { n: 5, f: 'Business entity concept', b: 'The business is treated as separate from its owner, so the owner’s personal spending from the business is drawings, not an expense.' },
      { n: 6, f: 'Rent of $3,600 is paid on 1 August for 12 months; the year ends on 31 December. Expense and prepayment?', b: '$300 a month. Expense for the year: 5 months = $1,500. Prepayment: 7 months = $2,100 (accruals concept).' },
    ]),
    ...sub(T1, 'use-of-technology-in-accounting-4ac1', '1.3', [
      { n: 1, f: 'Benefits of accounting software', b: 'Speed (one entry posts to every linked account); accuracy (the program does the arithmetic and posts both sides); reports on demand; easy searching and storage. It still processes whatever is typed in.' },
      { n: 2, f: 'Benefits of spreadsheets in accounting', b: 'Formulas recalculate totals and ratios when inputs change; what-if testing; reusable templates; charts of trends.' },
      { n: 3, f: 'Name the three data security issues', b: 'Data loss (records destroyed or unreadable), access (who can open or change records) and confidentiality (keeping information private).' },
      { n: 4, f: 'Hardware methods of protecting accounting data', b: 'Backups on external drives kept off-site, a fireproof safe, an uninterruptible power supply, locked rooms or cabinets, keycards or fingerprint scanners.' },
      { n: 5, f: 'Software methods of protecting accounting data', b: 'Passwords and user access levels, encryption, antivirus and firewall kept updated, scheduled automatic backups, an audit trail of who changed what.' },
      { n: 6, f: 'Access compared with confidentiality', b: 'Access is about who gets into the records. Confidentiality is about what happens to the information: a person with proper access can still breach confidentiality by passing it on.' },
    ]),
    ...sub(T1, 'professional-ethics-4ac1', '1.4', [
      { n: 1, f: 'Integrity and objectivity', b: 'Integrity: being honest and straightforward.\nObjectivity: judgement free from bias, conflicts of interest and pressure.' },
      { n: 2, f: 'Professional competence and due care', b: 'Keeping knowledge up to date and working carefully, applying the rules properly rather than guessing.' },
      { n: 3, f: 'Confidentiality and professional behaviour', b: 'Confidentiality: not disclosing or misusing information learned through work.\nProfessional behaviour: obeying the law and protecting the profession’s reputation.' },
      { n: 4, f: 'A bookkeeper is told to leave out a $9,000 supplier invoice so profit looks higher. Which principle, and what should she do?', b: 'Integrity: the figures would mislead (profit would rise from $36,400 to $45,400). She should record the invoice and explain why.' },
      { n: 5, f: 'Public interest', b: 'The wellbeing of the wider community, including lenders, investors, suppliers, employees and tax authorities who rely on accounts. It is not the same as the employer’s interest.' },
    ]),

    // 2 Introduction to bookkeeping
    ...sub(T2, 'business-documentation-4ac1', '2.1', [
      { n: 1, f: 'Why do businesses use documents?', b: 'They give evidence for every entry, let both parties check amounts, help settle disputes, give each transaction a reference number and support the audit trail.' },
      { n: 2, f: 'Purchase order and sales invoice', b: 'Purchase order: sent by the buyer to ask for goods (quantity, description, agreed price).\nSales invoice: sent by the seller for goods sold on credit; the buyer receives it as a purchase invoice.' },
      { n: 3, f: 'Credit note', b: 'Issued by the seller for goods returned or an overcharge. It reduces what the buyer owes.' },
      { n: 4, f: 'Statement of account compared with remittance advice', b: 'Statement of account: from the seller, showing the opening balance, invoices, credit notes, payments and closing balance.\nRemittance advice: from the buyer, showing which invoices a payment settles.' },
      { n: 5, f: '50 units at $8.00 with 25% trade discount. Amount due on the invoice?', b: 'List price 50 × 8.00 = 400.00; trade discount 25% = 100.00; amount due $300.00.' },
      { n: 6, f: 'Cash receipt and petty cash voucher', b: 'Cash receipt: issued by the receiver of money (date, amount, reason, signature).\nPetty cash voucher: supports a small cash payment (number, item, amount, authorisation).' },
    ]),
    ...sub(T2, 'books-of-original-entry-4ac1', '2.2', [
      { n: 1, f: 'Purpose of books of original entry', b: 'Each transaction is first recorded there, in date order, from its source document. One type per book keeps records organised, totals can be posted instead of every line, work can be shared and a permanent first record exists.' },
      { n: 2, f: 'Which book records credit purchases and credit sales, and from which document?', b: 'Purchases day book, from purchase invoices.\nSales day book, from sales invoices.\nBoth record the amount after trade discount; cash sales and purchases never go in a day book.' },
      { n: 3, f: 'Purchases returns book and sales returns book: source documents', b: 'Purchases returns book: credit notes received from suppliers.\nSales returns book: credit notes issued to customers.' },
      { n: 4, f: 'The three columns on each side of a three-column cash book', b: 'Discount, cash and bank. Debit side: discount allowed, cash received, bank receipts. Credit side: discount received, cash paid, bank payments. Discount columns are totalled, not balanced.' },
      { n: 5, f: 'Contra entry in the cash book', b: 'Cash paid into the bank is debited in the bank column and credited in the cash column, marked C on both sides.' },
      { n: 6, f: 'Petty cash float of $150.00; $112.50 is spent. Balance before reimbursement, and the reimbursement?', b: 'Balance 150.00 − 112.50 = $37.50. Reimbursement equals the amount spent, $112.50, restoring the float.' },
      { n: 7, f: 'What is the journal used for?', b: 'Non-routine items: buying a non-current asset on credit, writing off an irrecoverable debt, correcting errors and opening entries. Each entry has a date, debit, credit, amounts and a narrative.' },
    ]),
    ...sub(T2, 'ledger-accounting-4ac1', '2.3', [
      { n: 1, f: 'Nominal, receivables and payables ledgers: what each holds', b: 'Nominal: every account that is not a credit customer or supplier (assets, liabilities, capital, drawings, income, expenses).\nReceivables: one account per credit customer.\nPayables: one account per credit supplier.' },
      { n: 2, f: 'Debit and credit rules for each type of account', b: 'Assets, expenses and drawings increase on the debit side.\nLiabilities, capital and income increase on the credit side.\nDecreases go on the opposite side.' },
      { n: 3, f: 'Goods are returned to a supplier. Which account is debited and which credited?', b: 'Debit the supplier’s account; credit Purchases returns.' },
      { n: 4, f: 'A loan is received into the bank. Debit? Credit?', b: 'Debit Bank; credit Loan.' },
      { n: 5, f: 'Debit entries of $6,200 and $1,150, credit entry of $2,400. Balance?', b: 'Debits 7,350 − credits 2,400 = $4,950 debit balance: Balance c/d on the credit side, Balance b/d on the debit side.' },
      { n: 6, f: 'Customer and supplier accounts: normal balances', b: 'A customer account is normally a debit balance, a supplier account normally a credit balance.', src: LEDGER },
      { n: 7, f: 'Nominal ledger compared with personal ledgers', b: 'Sales, rent and bank belong to the nominal ledger. Named customers belong to the receivables ledger and named suppliers to the payables ledger.', src: LEDGER },
      { n: 8, f: 'Sales compared with sales returns', b: 'A return is not a negative sale entered in the Sales account. It has its own account, and the customer account is credited.', src: LEDGER },
      { n: 9, f: 'Purchases compared with assets', b: 'Goods bought to resell go to Purchases. Equipment bought to keep and use goes to its own asset account.', src: LEDGER },
    ]),
    ...sub(T2, 'capital-expenditure-and-revenue-expenditure-4ac1', '2.4', [
      { n: 1, f: 'Capital expenditure and revenue expenditure', b: 'Capital: buying, adding to or improving a non-current asset; goes to an asset account and the statement of financial position.\nRevenue: running costs and keeping assets in working order; goes to an expense account and the income statement.' },
      { n: 2, f: 'What is included in the cost of a non-current asset?', b: 'The purchase price plus delivery, installation and legal fees on property: anything needed to get it ready for use.' },
      { n: 3, f: 'Classify: fuel for a van; fitting shelves in a new shop; repairing a broken window; adding a second floor to a warehouse', b: 'Fuel: revenue. Shelves in a new shop: capital. Window repair: revenue. Second floor: capital.' },
      { n: 4, f: 'An expense is put into an asset account. Effect?', b: 'Profit is overstated and assets are overstated, and depreciation is then charged on a cost that is not an asset.' },
      { n: 5, f: 'A $5,000 new guillotine is debited to repairs; depreciation should be 20% of cost. Effect on profit?', b: 'Profit is understated by 5,000 − 1,000 = $4,000, because $1,000 of depreciation should have been charged instead. Assets are also understated.' },
    ]),
    ...sub(T2, 'depreciation-4ac1', '2.5', [
      { n: 1, f: 'Causes of depreciation', b: 'Wear and tear (physical use and ageing); obsolescence (out of date); passage of time (such as a lease); inadequacy (no longer suits demand).' },
      { n: 2, f: 'Straight line compared with reducing balance', b: 'Straight line: (cost − residual value) ÷ life, the same each year.\nReducing balance: a percentage × carrying value at the start of the year, so the charge falls; residual value is not deducted first.' },
      { n: 3, f: 'A press costs $18,400, residual value $2,400, life 5 years. Straight-line charge?', b: '(18,400 − 2,400) ÷ 5 = $3,200 a year.' },
      { n: 4, f: 'The same $18,400 press at 40% reducing balance: charges for years 1 and 2?', b: 'Year 1: 18,400 × 40% = 7,360 (carrying value 11,040).\nYear 2: 11,040 × 40% = $4,416 (carrying value 6,624).' },
      { n: 5, f: 'Double entry for the yearly depreciation charge', b: 'Debit Depreciation expense; credit Provision for depreciation. At the year end the expense is transferred to the income statement. The asset account stays at cost.' },
      { n: 6, f: 'Recording a disposal: the four entries', b: 'Dr Disposal, Cr Asset (cost).\nDr Provision for depreciation, Cr Disposal (accumulated depreciation).\nDr Bank, Cr Disposal (proceeds).\nThe balancing figure is the profit or loss, to the income statement.' },
      { n: 7, f: 'A machine cost $12,000, accumulated depreciation $7,500, sold for $5,200. Result?', b: 'Carrying value 12,000 − 7,500 = 4,500. Profit on disposal 5,200 − 4,500 = $700.' },
    ]),
    ...sub(T2, 'irrecoverable-debts-4ac1', '2.6', [
      { n: 1, f: 'Irrecoverable debt', b: 'A specific amount owed by a named customer that the business has decided it will not receive. It is written off as an expense.' },
      { n: 2, f: 'Provision for irrecoverable debts', b: 'An estimate, usually a percentage of trade receivables, of debts that may prove irrecoverable. No customer is named. A credit balance, deducted from trade receivables.' },
      { n: 3, f: 'Why is a provision for irrecoverable debts needed?', b: 'Prudence: profit and assets are not overstated. Accruals: the loss arises from this year’s credit sales, so it is charged this year. Trade receivables show what is expected to be collected.' },
      { n: 4, f: 'Journal to write off a debt of $330', b: 'Debit Irrecoverable debts $330; credit the customer’s account $330.' },
      { n: 5, f: 'Entries for an increase and for a decrease in the provision', b: 'Increase: Dr Income statement, Cr Provision for irrecoverable debts.\nDecrease: Dr Provision for irrecoverable debts, Cr Income statement.\nOnly the change is journalled.' },
    ]),
    ...sub(T2, 'other-receivables-and-other-payables-4ac1', '2.7', [
      { n: 1, f: 'Other payables and other receivables: what each covers', b: 'Other payables: expenses accrued (used, not yet paid) and income received in advance. Current liability, credit balance.\nOther receivables: expenses prepaid and income accrued (earned, not received). Current asset, debit balance.' },
      { n: 2, f: 'Why are other receivables and other payables accounted for?', b: 'Accruals concept: expenses and income belong to the period in which they were used or earned. Otherwise profit is wrong and an asset or liability is missing from the statement of financial position.' },
      { n: 3, f: 'Year-end journals for an accrued expense and a prepaid expense', b: 'Accrued expense: Dr Expense, Cr Other payables.\nPrepaid expense: Dr Other receivables, Cr Expense.' },
      { n: 4, f: 'Year-end journals for accrued income and income received in advance', b: 'Accrued income: Dr Other receivables, Cr Income.\nIncome in advance: Dr Income, Cr Other payables.' },
      { n: 5, f: 'Wages paid $41,500; opening accrual $1,200; closing accrual $1,500. Charge for the year?', b: '41,500 − 1,200 + 1,500 = $41,800. The closing $1,500 is an other payable.' },
      { n: 6, f: 'Commission received $3,600; $150 owed to the business at the start; $240 received in advance at the end. Income?', b: '3,600 − 150 − 240 = $3,210. The closing $240 is an other payable.' },
    ]),

    // 3 Introduction to control processes
    ...sub(T3, 'trial-balance-4ac1', '3.1', [
      { n: 1, f: 'Purposes of a trial balance', b: 'To check the arithmetical accuracy of double entry (debits equal credits), to supply the balances for the financial statements, and to help locate errors.' },
      { n: 2, f: 'Which balances go in the debit column of a trial balance?', b: 'Assets, expenses, purchases, returns inwards, discount allowed and drawings.' },
      { n: 3, f: 'Which balances go in the credit column of a trial balance?', b: 'Liabilities (including a bank overdraft), income, sales, returns outwards, discount received and capital.' },
      { n: 4, f: 'Limitations of a trial balance', b: 'Agreement does not prove the books are right: omission, commission, original entry, reversal, compensating errors and errors of principle leave it balanced. It is for one date only and shows neither profit nor the value of the business.' },
      { n: 5, f: 'Which errors make trial balance totals differ?', b: 'A one-sided entry, different amounts on each side, a wrong addition of a ledger account, a wrongly carried down balance.' },
    ]),
    ...sub(T3, 'control-accounts-4ac1', '3.2', [
      { n: 1, f: 'Purposes of control accounts', b: 'Check the accuracy of a ledger; help locate errors in a particular ledger; help deter fraud when kept by a different person; give a ready total such as trade receivables.' },
      { n: 2, f: 'Trade receivables control account: entries on each side', b: 'Debit: opening balance, credit sales, dishonoured cheques.\nCredit: returns inwards, cash and cheques received, discount allowed, irrecoverable debts, contra, closing balance c/d.' },
      { n: 3, f: 'Trade payables control account: entries on each side', b: 'Credit: opening balance, credit purchases.\nDebit: returns outwards, payments to suppliers, discount received, contra, closing balance c/d.' },
      { n: 4, f: 'Opening receivables $8,000; credit sales $30,000; returns inwards $1,000; receipts $28,000; irrecoverable debts $600. Closing balance?', b: '8,000 + 30,000 − 1,000 − 28,000 − 600 = $8,400 debit.' },
      { n: 5, f: 'Name items that do not appear in the trade receivables control account', b: 'Cash sales, the provision for irrecoverable debts, depreciation and purchases of non-current assets.' },
    ]),
    ...sub(T3, 'correction-of-errors-4ac1', '3.3', [
      { n: 1, f: 'Errors of omission, commission and principle', b: 'Omission: the transaction was never recorded.\nCommission: the wrong account of the right type (telephone debited to postage).\nPrinciple: the wrong class of account (a new computer debited to repairs).' },
      { n: 2, f: 'Errors of original entry, compensating errors and complete reversal', b: 'Original entry: the wrong figure in both entries.\nCompensating: two errors that cancel out.\nComplete reversal: the right accounts on the wrong sides.' },
      { n: 3, f: 'Size of the correcting journal for each type of error', b: 'Omission: full amount. Commission and principle: move the amount to the right account. Original entry: the difference only. Complete reversal: twice the amount. One-sided entry: the missing side, with suspense.' },
      { n: 4, f: 'A sale of $870 was recorded as $780 in both accounts. Correcting journal?', b: 'Debit Trade receivables $90; credit Sales $90.' },
      { n: 5, f: 'A payment of $640 to a supplier was debited to bank and credited to the supplier. Correcting journal?', b: 'Complete reversal: Debit the supplier $1,280; credit Bank $1,280.' },
      { n: 6, f: 'Debit column $86,420, credit column $85,960. A purchases return of $230 was posted to the debit of purchases returns. Entries?', b: 'Credit suspense $460 to make the totals agree. The account is wrong by twice 230, so Dr Suspense $460, Cr Purchases returns $460. Suspense clears to nil.' },
    ]),
    ...sub(T3, 'bank-reconciliation-statements-4ac1', '3.4', [
      { n: 1, f: 'Purposes of a bank reconciliation statement', b: 'To check the cash book and bank statement agree apart from timing items; find errors by the business or bank; spot items missing from the cash book; help detect fraud and show the true balance.' },
      { n: 2, f: 'Unpresented cheque compared with uncredited lodgement', b: 'Unpresented cheque: you have paid and recorded it, the bank has not yet.\nUncredited lodgement: you have banked and recorded it, the bank has not yet credited it.' },
      { n: 3, f: 'Which items update the cash book, and which go on the reconciliation statement?', b: 'Cash book: bank charges, interest, direct debits, standing orders, credit transfers, dishonoured cheques and cash book errors.\nReconciliation: unpresented cheques, uncredited lodgements and bank errors.' },
      { n: 4, f: 'Cash book $2,950; bank charge $38 and standing order $150 missing; unpresented cheques $410; uncredited lodgement $640. Statement balance?', b: 'Updated cash book 2,950 − 38 − 150 = 2,762.\nStatement = 2,762 + 410 − 640 = $2,532.' },
      { n: 5, f: 'Updated cash book overdraft $1,025; unpresented cheques $520; uncredited lodgement $610. Statement balance?', b: 'Treat the overdraft as negative: (1,025) + 520 − 610 = (1,115), an overdraft of $1,115.' },
    ]),

    // 4 The preparation of financial statements
    ...sub(T4, 'financial-statements-of-a-sole-trader-4ac1', '4.1', [
      { n: 1, f: 'Cost of sales in a sole trader’s income statement', b: 'Opening inventories + purchases + carriage inwards − purchases returns − closing inventories.' },
      { n: 2, f: 'Carriage inwards compared with carriage outwards', b: 'Carriage inwards: a cost of getting goods to the business, in cost of sales.\nCarriage outwards: a cost of delivering to customers, an expense below gross profit.' },
      { n: 3, f: 'Where do discount received and discount allowed go in the income statement?', b: 'Discount received: added to gross profit as other income.\nDiscount allowed: an expense.' },
      { n: 4, f: 'Working capital and net assets', b: 'Working capital = current assets − current liabilities.\nNet assets = non-current assets + working capital − non-current liabilities. Net assets must equal equity.' },
      { n: 5, f: 'Order of current assets in the statement of financial position', b: 'Inventories, trade receivables, other receivables, bank, cash: least liquid first, most liquid last.' },
      { n: 6, f: 'Gross profit $20,400; discount received $260; expenses $15,580; opening capital $18,000; drawings $8,500. Profit and closing capital?', b: 'Profit for the year 20,400 + 260 − 15,580 = $5,080.\nClosing capital 18,000 + 5,080 − 8,500 = $14,580.' },
      { n: 7, f: 'Is the purchase of a new delivery van an expense of the year?', b: 'No. It is capital expenditure, a non-current asset in the statement of financial position. Only its depreciation is an expense.' },
    ]),
    ...sub(T4, 'financial-statements-of-a-partnership-4ac1', '4.2', [
      { n: 1, f: 'Ordinary partnership compared with a limited liability partnership (LLP)', b: 'Ordinary partners have unlimited liability: personal assets can pay the firm’s debts.\nAn LLP is a separate legal person whose members have limited liability, so their personal assets are generally protected.' },
      { n: 2, f: 'Section 24 of the Partnership Act 1890: defaults when there is no agreement', b: 'No salaries; profit and losses shared equally; 5% a year interest on a partner’s loan; no interest on capital; no interest charged on drawings.' },
      { n: 3, f: 'Layout of a partnership appropriation account', b: 'Profit for the year, add interest on drawings, less interest on capital, less salaries = residual profit or deficit, shared in the profit-sharing ratio.' },
      { n: 4, f: 'Drawings of $7,200 are taken evenly through the year; interest on drawings is 6% a year. Charge?', b: '7,200 × 6% × 6/12 = $216 (drawings taken evenly are outstanding for six months on average).' },
      { n: 5, f: 'Profit for the year $48,000; interest on drawings $800; interest on capital $6,000; salary $9,000. Residual, shared 4 : 3 : 3?', b: 'Residual 48,000 + 800 − 6,000 − 9,000 = 33,800.\nShares: $13,520, $10,140 and $10,140.' },
      { n: 6, f: 'Current account: opening credit $900, interest on capital $1,500, share of profit $4,200, drawings $6,000. Closing balance?', b: '900 + 1,500 + 4,200 − 6,000 = $600 credit: the firm owes the partner $600.' },
      { n: 7, f: 'How are partners’ current account balances shown in the statement of financial position?', b: 'In equity, after each partner’s capital. A credit balance is added; a debit balance is deducted.' },
    ]),
    ...sub(T4, 'incomplete-records-4ac1', '4.3', [
      { n: 1, f: 'Profit for the year from opening and closing equity', b: 'Profit = closing equity − opening equity + drawings − capital introduced. Equity = assets − liabilities at each date.' },
      { n: 2, f: 'Opening equity $21,400; closing equity $26,600; drawings $10,200; capital introduced $4,000. Profit?', b: 'Change in equity 5,200. Profit = 5,200 + 10,200 − 4,000 = $11,400.' },
      { n: 3, f: 'How do you find credit sales from incomplete records?', b: 'Use a trade receivables control account: credit sales are the missing figure on the debit side (receipts, discount allowed, irrecoverable debts, returns and closing balance less the opening balance).' },
      { n: 4, f: 'Till: opening cash $100, closing $160; banked $26,400; expenses paid from the till $3,120. Cash takings?', b: 'Takings = banked + spent from the till + closing cash − opening cash = 26,400 + 3,120 + 160 − 100 = $29,580.' },
      { n: 5, f: 'Mark-up compared with margin', b: 'Mark-up = gross profit ÷ cost of sales × 100.\nMargin = gross profit ÷ revenue × 100.\nA 25% margin is a 33.3% mark-up (25 ÷ 75); a 60% mark-up is a 37.5% margin (60 ÷ 160).' },
      { n: 6, f: 'Cost of sales is $32,000 and the mark-up is 25%. Revenue?', b: '32,000 × 1.25 = $40,000.' },
    ]),
    ...sub(T4, 'the-calculation-and-interpretation-of-accounting-ratios-4ac1', '4.4', [
      { n: 1, f: 'Profitability compared with liquidity', b: 'Profitability: does the business earn a profit, and how much for its revenue or capital?\nLiquidity: can it pay its short-term debts when they fall due? Profit is not cash.' },
      { n: 2, f: 'Gross profit percentage and profit for the year as a percentage of revenue', b: 'Gross profit ÷ revenue × 100.\nProfit for the year ÷ revenue × 100.' },
      { n: 3, f: 'Return on capital employed (ROCE) as set out in the 4AC1 notes', b: 'Profit for the year ÷ capital employed × 100.\nCapital employed = equity + non-current liabilities (or non-current assets + working capital). State your formula.' },
      { n: 4, f: 'Current (working capital) ratio and liquid (acid test) ratio', b: 'Current ratio = current assets : current liabilities.\nLiquid ratio = (current assets − inventory) : current liabilities.\nWrite both as x : 1.' },
      { n: 5, f: 'Current assets $54,000 (inventory $21,000); current liabilities $30,000. Current and acid test ratios?', b: 'Current ratio 54,000 ÷ 30,000 = 1.8 : 1.\nAcid test 33,000 ÷ 30,000 = 1.1 : 1.' },
      { n: 6, f: 'Equity $95,000, non-current liabilities $25,000, profit for the year $14,400. ROCE?', b: 'Capital employed 120,000. ROCE = 14,400 ÷ 120,000 × 100 = 12%.' },
      { n: 7, f: 'The gross profit percentage rises but profit for the year as a percentage of revenue falls. Why?', b: 'Expenses have grown faster than revenue (for example wages, rent or advertising), cutting profit even though the gross margin improved.' },
    ]),
    ...sub(T4, 'financial-statements-of-a-manufacturer-4ac1', '4.5', [
      { n: 1, f: 'Raw materials, work-in-progress and finished goods', b: 'Raw materials: bought, not yet used. Work-in-progress: started, not finished at the year end. Both adjusted in the manufacturing account.\nFinished goods: complete and ready to sell, adjusted in the income statement.' },
      { n: 2, f: 'Prime cost', b: 'Raw materials consumed + direct wages + direct expenses (such as a royalty per unit).' },
      { n: 3, f: 'Total cost and production cost', b: 'Total cost = prime cost + factory overheads.\nProduction cost = total cost + opening work-in-progress − closing work-in-progress. It replaces purchases in cost of sales.' },
      { n: 4, f: 'Raw materials consumed $18,350; direct wages $9,200; direct expenses $700; factory overheads $6,900; WIP $1,100 opening, $900 closing. Production cost?', b: 'Prime cost 28,250; total cost 35,150; production cost 35,150 + 1,100 − 900 = $35,350.' },
      { n: 5, f: 'Is a factory supervisor’s salary a prime cost or a factory overhead?', b: 'A factory overhead (indirect wages). Only workers who make the goods are direct labour.' },
      { n: 6, f: 'Rent of $15,000 is shared, 40% relating to the factory. Treatment?', b: '$6,000 goes in the manufacturing account as a factory overhead; the other $9,000 is an expense in the income statement.' },
    ]),

    // 5 Accounting for end of period adjustments
    ...sub(T5, 'application-of-accounting-concepts-4ac1', '5.1', [
      { n: 1, f: 'A business changes from straight line to reducing balance for one year only. Which concept is broken?', b: 'Consistency: profits of the two years are no longer comparable. A change needs a good reason and disclosure.' },
      { n: 2, f: 'Inventory costs $540 and has a net realisable value of $410. Value and concept?', b: 'Prudence: use the lower figure, $410. The $130 loss reduces this year’s profit.' },
      { n: 3, f: 'A payment of $3,000 covers 15 months from 1 October; the year ends 31 December. Expense and other receivable?', b: '$200 a month. Expense for 3 months = $600. Other receivable (prepaid 12 months) = $2,400.' },
      { n: 4, f: 'An item of $45 is bought when profit is $9,000. How is it treated, and why?', b: '45 ÷ 9,000 × 100 = 0.5% of profit, so it is immaterial (materiality) and is simply expensed.' },
      { n: 5, f: 'The owner’s personal phone bill of $150 was charged to telephone expense. Correction?', b: 'Business entity: remove it from expenses and record it as drawings. Profit rises by $150 and drawings rise by $150.' },
      { n: 6, f: 'What does the money measurement concept leave out of the statements?', b: 'Anything without a reliable money value: staff skill, reputation and customer loyalty. The statements are therefore incomplete.' },
    ]),
    ...sub(T5, 'depreciation-4ac1-eop', '5.2', [
      { n: 1, f: 'A kiln costs $25,000 and is depreciated at 20% reducing balance. Charges and carrying value for years 1 to 3?', b: 'Y1 5,000 (carrying value 20,000); Y2 4,000 (16,000); Y3 3,200 (12,800). Accumulated depreciation $12,200.' },
      { n: 2, f: 'A machine costs $15,000, residual value $1,500, life 9 years. Annual straight-line charge?', b: '(15,000 − 1,500) ÷ 9 = $1,500 a year.' },
      { n: 3, f: 'How is a non-current asset shown in the statement of financial position after depreciation?', b: 'For each class: cost, depreciation to date and carrying value (cost − accumulated depreciation).' },
      { n: 4, f: 'The $25,000 kiln (accumulated depreciation $12,200) is sold for $12,000. Result, and where it is shown?', b: 'Carrying value 12,800; loss 12,800 − 12,000 = $800, an expense in the statement of profit or loss. A loss is not a cash payment.' },
      { n: 5, f: 'Depletion as a cause of depreciation', b: 'Natural resources, such as a mine or quarry, are used up.' },
    ]),
    ...sub(T5, 'irrecoverable-debts-4ac1-eop', '5.3', [
      { n: 1, f: 'Order of work for irrecoverable debts and the provision at the year end', b: 'Write off the irrecoverable debts first, then calculate the provision on the remaining receivables, then compare it with the provision brought forward.' },
      { n: 2, f: 'Receivables $40,000 before writing off $900; provision 3%; provision b/f $1,500. Provision change and net receivables?', b: 'Remaining 39,100 × 3% = 1,173, a decrease of $327 (income).\nTrade receivables 39,100 − 1,173 = $37,927.' },
      { n: 3, f: 'In the same case, what is the net charge to the statement of profit or loss?', b: 'Irrecoverable debt 900 − decrease in provision 327 = $573.' },
      { n: 4, f: 'Receivables $60,000, of which $2,000 is irrecoverable; 5% provision on the rest. Provision?', b: '5% × 58,000 = $2,900.' },
      { n: 5, f: 'Irrecoverable debt compared with provision: effect on the customer’s account and on profit', b: 'Irrecoverable debt: the customer’s account is credited and closed; the whole amount is an expense.\nProvision: customer accounts are not touched; only the change is an expense or income.' },
    ]),
    ...sub(T5, 'other-receivables-and-other-payables-4ac1-eop', '5.4', [
      { n: 1, f: 'Rent paid $9,600; prepaid $800 at the start and $1,000 at the end. Rent expense?', b: '800 + 9,600 − 1,000 = $9,400. The closing $1,000 is an other receivable (current asset).' },
      { n: 2, f: 'Heating paid $3,000; accrued $400 at the start and $250 at the end. Expense?', b: '3,000 − 400 + 250 = $2,850. The closing $250 is an other payable (current liability).' },
      { n: 3, f: 'Rent receivable: $6,000 received and $500 still owed at the year end. Income for the year?', b: '6,000 + 500 = $6,500, with an other receivable of $500.' },
      { n: 4, f: 'An accrual of $700 is left out of the accounts. Effect?', b: 'Expenses too low, so profit is overstated by $700; liabilities (other payables) are understated by $700.' },
      { n: 5, f: 'Why does an opening accrual reduce this year’s expense?', b: 'Part of the cash paid this year settled last year’s cost, which was already charged last year, so it is taken off.' },
    ]),
  ],
};
