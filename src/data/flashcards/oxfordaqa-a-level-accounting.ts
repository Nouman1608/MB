/**
 * D-438 -- flashcards for OxfordAQA International AS and A Level Accounting 9615
 * (specification Version 1.2, 2024 onwards).
 *
 * One block per topic, in specification order: the syllabus record lists 20
 * topics (AS topics 1-10, A-level topics 11-20) with no itemised subtopics.
 * Card ids are `<topic number>-<n>` and are permanent (browser progress is keyed
 * by them): add a new card with the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9615, or a definition table,
 *               formula table or worked reminder on the page); origin 'revision-notes'.
 *
 * The course is not tiered (it is modular AS / A-level), so no card is marked
 * upper tier. Amounts are in dollars, the currency the course's notes and
 * question papers use. Where 9615 differs from AQA 7127 (for example sole
 * trader ROCE uses profit for the year with no interest added back), the cards
 * follow 9615's own notes. Plain text only (see types.ts). Unicode for symbols.
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

const ROLE = 'a-accounting-role-revision-notes';
const ORG = 'oxfordaqa-a-level-accounting-organisation-types-revision-notes';
const DEM = 'oxfordaqa-a-level-accounting-the-double-entry-model-revision-notes';
const VER = 'oxfordaqa-a-level-accounting-verification-of-accounting-records-revision-notes';
const CON = 'oxfordaqa-a-level-accounting-accounting-concepts-used-in-the-preparation-of-revision-notes';
const SOLE = 'oxfordaqa-a-level-accounting-preparation-of-financial-statements-of-sole-revision-notes';
const LCA = 'oxfordaqa-a-level-accounting-limited-company-accounts-revision-notes';
const AEF = 'oxfordaqa-a-level-accounting-analysis-and-evaluation-of-financial-information-revision-notes';
const BUD = 'oxfordaqa-a-level-accounting-budgeting-revision-notes';
const MARG = 'oxfordaqa-a-level-accounting-marginal-costing-revision-notes';
const STD = 'oxfordaqa-a-level-accounting-standard-costing-and-variance-analysis-revision-notes';
const ABS = 'oxfordaqa-a-level-accounting-absorption-and-activity-based-costing-revision-notes';
const CIA = 'oxfordaqa-a-level-accounting-capital-investment-appraisal-revision-notes';
const INC = 'oxfordaqa-a-level-accounting-accounting-for-organisations-with-incomplete-revision-notes';
const PART = 'oxfordaqa-a-level-accounting-partnership-accounts-revision-notes';
const ACC = 'oxfordaqa-a-level-accounting-accounting-for-limited-companies-revision-notes';
const MAN = 'oxfordaqa-a-level-accounting-manufacturing-accounts-revision-notes';
const CLUB = 'oxfordaqa-a-level-accounting-clubs-and-non-profit-making-organisations-revision-notes';
const IAC = 'oxfordaqa-a-level-accounting-interpretation-analysis-and-communication-of-revision-notes';
const ETH = 'oxfordaqa-a-level-accounting-the-impact-of-ethical-considerations-revision-notes';

export const DECK_OXFORDAQA_A_LEVEL_ACCOUNTING: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'accounting',
  syllabusCode: '9615',
  syllabusSeries: '2024-onwards',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'javaid-iqbal-sabri', reviewedOn: '2026-11-05' },
  cards: [
    // 1 An introduction to the role of the accountant in business
    ...topicOnly('an-introduction-to-the-role-of-the-accountant-in-business-oxfordaqa', '1', [
      { n: 1, f: 'Financial accounting vs management accounting', b: 'Financial: records completed transactions and reports to external users; historic, governed by law and standards, in a set format.\nManagement: forward-looking information for internal decision-makers, in whatever form and as often as needed.' },
      { n: 2, f: 'The accounting equation, and why capital sits with liabilities', b: 'Assets = capital + liabilities. Under the business entity concept the business is separate from its owner, so capital is treated as owed back to the owner.', src: ROLE },
      { n: 3, f: 'DEAD CLIC', b: 'Debit Expenses, Assets, Drawings; Credit Liabilities, Income, Capital.', src: ROLE },
      { n: 4, f: 'Both effects of accrued income and of prepaid (received in advance) income', b: 'Accrued income: increases profit; current asset.\nPrepaid income: reduces profit; current liability.', src: ROLE },
      { n: 5, f: 'What does depreciation do, and what two things is it not?', b: 'It allocates the cost of a non-current asset over its useful life, matching cost with the revenue it helps generate. It is not a fund to replace the asset and not a measure of the fall in market value.', src: ROLE },
      { n: 6, f: 'Effect of treating capital expenditure as revenue expenditure', b: 'Profit is understated and non-current assets are understated. The reverse overstates both. Delivery, installation and legal fees are capital.', src: ROLE },
      { n: 7, f: 'Why might a high current ratio be a bad sign?', b: 'It may indicate excess inventory, slow-collecting receivables, or idle cash that should be invested.', src: ROLE },
      { n: 8, f: 'Money measurement: what consequence should you state?', b: 'Staff quality, brand reputation and management skill do not appear in the accounts, a real limitation of financial statements as a picture of a business.', src: ROLE },
      { n: 9, f: 'Which concept drives the year-end adjustments, and which resolves judgement questions?', b: 'Accruals drives accruals, prepayments, depreciation and provisions. Prudence resolves judgement calls: choose the treatment that does not overstate profit.', src: ROLE },
    ]),

    // 2 Types of business organisation
    ...topicOnly('types-of-business-organisation-oxfordaqa', '2', [
      { n: 1, f: 'Sole trader and partnership: liability and reporting', b: 'Sole trader: unlimited liability; minimal external reporting.\nPartnership: unlimited liability for ordinary partners; reports mainly to the partners.', src: ORG },
      { n: 2, f: 'Private limited company (Ltd) vs public limited company (plc)', b: 'Ltd: shares cannot be offered to the public; limited liability; statutory filing obligations.\nPlc: shares freely bought and sold by the public; limited liability; the most extensive disclosure and audit requirements.', src: ORG },
      { n: 3, f: 'What does limited liability cap?', b: 'The owner\'s maximum possible loss, at the amount invested. "Limited" does not refer to the size of the company.', src: ORG },
      { n: 4, f: 'Why does incorporation produce limited liability?', b: 'It creates a separate legal entity: the company, not the shareholder, owns its assets and owes its debts. A sole trader or ordinary partner and the business are legally the same.', src: ORG },
      { n: 5, f: 'Which sources of finance are open to which ownership types?', b: 'Owner\'s capital: sole traders. Partners\' capital: partnerships. Bank overdraft, loan, mortgage: all four. Ordinary shares and debentures: realistically only limited companies, usually plc.', src: ORG },
      { n: 6, f: 'One risk of a bank loan and one risk of issuing shares', b: 'Bank loan: fixed interest and repayments whatever the profit; may need security.\nShares: dilute existing holdings unless all invest proportionally; create dividend expectations.', src: ORG },
      { n: 7, f: 'Why does a plc face the heaviest reporting burden?', b: 'Reporting protects people with a financial stake but no control over day-to-day running. A plc may have thousands of outside shareholders; a sole trader has none.', src: ORG },
    ]),

    // 3 The double entry model
    ...topicOnly('the-double-entry-model-oxfordaqa', '3', [
      { n: 1, f: 'Which book of prime entry records a credit note received, and which records a journal voucher?', b: 'Credit note received: purchases returns journal.\nJournal voucher: general journal.\nCheque counterfoils, till rolls and bank statement items go to the three column cash book.', src: DEM },
      { n: 2, f: 'List price $5,000, 20% trade discount, 3% cash discount for paying within 7 days. The customer pays in time. Figures?', b: 'Invoice 5,000 × 80% = $4,000 (trade discount is not recorded).\nDiscount allowed 4,000 × 3% = $120.\nReceived $3,880.', src: DEM },
      { n: 3, f: 'A customer pays less a cash discount. Double entry?', b: 'Debit Bank and debit Discounts allowed; credit the customer. (Paying a supplier less discount: debit the supplier; credit Bank and Discounts received.)', src: DEM },
      { n: 4, f: 'Disposal account: the four steps, and how to read the balancing figure', b: 'Debit disposal with cost; credit it with depreciation to date; credit it with proceeds; balance it. A balancing figure on the credit side is a loss; on the debit side it is a profit.', src: DEM },
      { n: 5, f: 'Machine cost $45,000, residual value $5,000, useful life 8 years. Straight line charge?', b: '(45,000 − 5,000) ÷ 8 = $5,000 a year.', src: DEM },
      { n: 6, f: 'Equipment $20,000 at 30% reducing balance. Year 2 charge and carrying amount at the end of year 2?', b: 'Year 1: $6,000 (carrying amount $14,000).\nYear 2: 30% × 14,000 = $4,200; carrying amount $9,800.', src: DEM },
      { n: 7, f: 'Trade receivables $24,000; provision to be 4%; last year\'s provision $1,100. Income statement entry?', b: 'New provision $960: a decrease of $140, shown as income. Calculate the provision after writing off irrecoverable debts.', src: DEM },
      { n: 8, f: 'A van cost $12,000, accumulated depreciation $7,500, sold for $5,100. Result?', b: 'Carrying amount $4,500. Profit on disposal $600.', src: DEM },
      { n: 9, f: 'Opening inventory $6,200; purchases $51,000; purchases returns $800; closing inventory $7,400. Cost of sales?', b: '6,200 + 51,000 − 800 − 7,400 = $49,000.', src: DEM },
      { n: 10, f: 'Insurance paid in the year $2,600, of which $400 covers next year. Charge and SOFP entry?', b: 'Expense $2,200; other receivable of $400 under current assets.', src: DEM },
      { n: 11, f: 'A service business receives fees of $58,400, of which $900 is for next year; expenses total $33,070. Profit?', b: 'Fees 58,400 − 900 = $57,500. Profit 57,500 − 33,070 = $24,430. No cost of sales or gross profit; the $900 is a current liability.', src: DEM },
      { n: 12, f: 'Trade discount vs cash discount', b: 'Trade discount reduces the list price and is never recorded. Cash discount rewards prompt payment and is recorded through the cash book discount columns.', src: DEM },
    ]),

    // 4 Verification of accounting records
    ...topicOnly('verification-of-accounting-records-oxfordaqa-alevel', '4', [
      { n: 1, f: 'The four verification techniques named in 9615', b: 'Trial balance, bank reconciliation statements, trade receivables ledger control accounts and trade payables ledger control accounts.', src: VER },
      { n: 2, f: 'Which four errors does the trial balance reveal?', b: 'Addition, partial omission, transposition (on one side) and unequal posting.', src: VER },
      { n: 3, f: 'A transposition is made in the book of prime entry. Is it revealed by the trial balance?', b: 'No. The wrong figure is used for both sides, so it becomes an error of original entry. Nor is it revealed by a control account.', src: VER },
      { n: 4, f: '$5,420 was posted to one account as $5,240, with the other side correct. Difference and clue?', b: 'Difference $180. It divides by 9 (180 ÷ 9 = 20), the sign of a transposition.', src: VER },
      { n: 5, f: 'Trial balance credits exceed debits by $360. Which side does the suspense account open on?', b: 'Debit, $360: the side that makes the trial balance agree. Errors not revealed never touch suspense.', src: VER },
      { n: 6, f: 'A payment of $450 to P Okwuosa was debited to bank and credited to his account. Correction?', b: 'Complete reversal: Dr P Okwuosa $900, Cr Bank $900.', src: VER },
      { n: 7, f: 'Classify: an invoice for T Amadi posted to T Amado; a delivery van debited to purchases', b: 'T Amadi / T Amado: error of commission.\nVan to purchases: error of principle.\nNeither is revealed by the trial balance.', src: VER },
      { n: 8, f: 'Payables control: b/d credit $17,300, debit $150; credit purchases $28,460; payments $25,910; discounts $540; returns $1,280; contra $900; closing debits $210', b: 'Debit side 150 + 25,910 + 540 + 1,280 + 900 + c/d; credit side 17,300 + 28,460 + 210 = 45,970.\nClosing credit balance $17,190.', src: VER },
      { n: 9, f: 'Updated cash book overdraft $640; unpresented cheques $1,150; outstanding lodgement $380. Bank statement balance?', b: 'Work in signed numbers: −640 + 1,150 − 380 = $130 favourable.', src: VER },
      { n: 10, f: 'Effects: closing inventory overstated by $1,200; electricity owing of $340 omitted', b: 'Inventory: profit overstated $1,200; current assets overstated $1,200.\nElectricity: profit overstated $340; current liabilities understated $340.', src: VER },
      { n: 11, f: 'Contra between the receivables and payables ledgers: control account entries', b: 'Debit the trade payables ledger control account; credit the trade receivables ledger control account.', src: VER },
      { n: 12, f: 'Unpresented cheque vs dishonoured cheque in a bank reconciliation', b: 'An unpresented cheque is a timing item in the reconciliation statement. A dishonoured cheque is a real event, so the cash book is updated.', src: VER },
    ]),

    // 5 Accounting concepts used in the preparation of accounting records
    ...topicOnly('accounting-concepts-used-in-the-preparation-of-accounting-records-oxfordaqa', '5', [
      { n: 1, f: 'The ten general accounting concepts in 9615', b: 'Money measurement, duality, historic cost, going concern, accruals, consistency, prudence, materiality, realisation and business entity.', src: CON },
      { n: 2, f: '36 scarves cost $11 each. They will sell for $14 but need $4 of re-labelling and postage. Inventory value?', b: 'NRV = 14 − 4 = $10, below cost. Value 36 × 10 = $360, a write-down of $36.', src: CON },
      { n: 3, f: '60 units cost $15 each and have an NRV of $16.50 each. Inventory value?', b: 'NRV is above cost, so use cost: 60 × 15 = $900.', src: CON },
      { n: 4, f: 'Goods at selling price $2,800 (mark-up 40% on cost) were sent on sale or return and recorded as sales; not accepted. Profit overstated by?', b: 'Cost 2,800 ÷ 1.40 = $2,000. Profit overstated by $800 (realisation).', src: CON },
      { n: 5, f: 'A $65 desk fan will last six years. How is it recorded, and which concept allows this?', b: 'As an expense in the income statement; materiality.', src: CON },
      { n: 6, f: 'A van costs $21,000; shelving fitted before use $1,400; first tank of fuel $90. Amount debited to vehicles?', b: '21,000 + 1,400 = $22,400 (historic cost). The fuel is revenue expenditure.', src: CON },
      { n: 7, f: 'Year end 30 June. Rent of $9,600 for twelve months was paid on 1 March. Prepayment at the year end?', b: '4 months used (March to June); 8 months prepaid: 8/12 × 9,600 = $6,400 (accruals).', src: CON },
      { n: 8, f: 'The owner transfers a private car to the business at an agreed value of $7,800. Entry and concept?', b: 'Dr Motor vehicles $7,800, Cr Capital $7,800. Business entity.', src: CON },
      { n: 9, f: 'A business shows its machinery at what it would raise at auction next week, though it plans to keep trading. Which concept is broken?', b: 'Going concern: assets should be at cost less depreciation, not liquidation prices.', src: CON },
      { n: 10, f: 'Prudence vs pessimism', b: 'Prudence means caution with estimates: do not overstate assets or profit, and recognise foreseeable losses. It does not allow deliberate understating of profit.', src: CON },
      { n: 11, f: 'A machine cost $18,400, will sell for $1,600 after a 7-year life. Straight-line charge and concept?', b: '(18,400 − 1,600) ÷ 7 = $2,400 a year; accruals (cost matched to the years that benefit).', src: CON },
      { n: 12, f: 'Realisation vs accruals', b: 'Realisation decides whether revenue has been earned (goods or service passed to the customer). Accruals decides which period income and expenses belong to.', src: CON },
    ]),

    // 6 Preparation of financial statements of sole traders
    ...topicOnly('preparation-of-financial-statements-of-sole-traders-oxfordaqa', '6', [
      { n: 1, f: 'Rates paid $6,240; $380 prepaid at the start; $290 owing at the end. Rates charge?', b: '6,240 + 380 + 290 = $6,910.', src: SOLE },
      { n: 2, f: 'Rent received $9,900, of which $825 relates to next year. Income, and how is $825 shown?', b: 'Income $9,075. The $825 is income received in advance, an other payable under current liabilities.', src: SOLE },
      { n: 3, f: 'Wages owing $560 at the start; paid $41,300; owing $735 at the end. Charge?', b: '41,300 − 560 + 735 = $41,475. The $735 credit balance is an other payable.', src: SOLE },
      { n: 4, f: 'Cost $21,000 at 20% reducing balance. Year 2 charge?', b: '20% × (21,000 − 4,200) = 20% × 16,800 = $3,360, not $4,200 again.', src: SOLE },
      { n: 5, f: 'Receivables $36,500; write off $500; provision 2%. Provision?', b: '2% × 36,000 = $720, not $730: write off irrecoverable debts first.', src: SOLE },
      { n: 6, f: 'Receivables $29,500; 4% provision; last year\'s provision $1,320. Income statement entry?', b: 'New provision $1,180, a decrease of $140, shown as income.', src: SOLE },
      { n: 7, f: 'Equipment bought for $9,600 has been depreciated by $7,050. It is sold for $2,800. Result?', b: 'Carrying amount $2,550. Profit on disposal $250.', src: SOLE },
      { n: 8, f: 'The owner takes home stock that cost the business $385. Entry?', b: 'Debit drawings $385, credit purchases $385 (business entity).', src: SOLE },
      { n: 9, f: 'Goods on sale or return were recorded as sales at $1,560, priced at cost plus 30%; not accepted. Inventory value?', b: '1,560 ÷ 1.3 = $1,200 at cost. Revenue and trade receivables both fall by $1,560.', src: SOLE },
      { n: 10, f: 'A debt of $820 written off last year is received in full. Entries?', b: 'Debit the customer, credit irrecoverable debts recovered $820; then debit bank, credit the customer $820. The $820 is income.', src: SOLE },
      { n: 11, f: 'Other payable vs trade payable', b: 'Trade payables are amounts owed to credit suppliers of goods. Other payables are accrued expenses and income received in advance.', src: SOLE },
    ]),

    // 7 Limited company accounts
    ...topicOnly('limited-company-accounts-oxfordaqa', '7', [
      { n: 1, f: 'The three internal company statements and the three profit lines', b: 'Income statement, statement of changes in equity, statement of financial position (not for publication).\nProfit lines: profit from operations; profit for the year before tax; profit for the year after tax.', src: LCA },
      { n: 2, f: '10,000 ordinary shares of $0.40 nominal are issued at $1.15. Entries?', b: 'Dr Bank $11,500; Cr Share capital $4,000; Cr Share premium $7,500. Capital and premium together equal the cash received.', src: LCA },
      { n: 3, f: 'Gross profit $140,000; expenses $88,500; finance costs $5,250; tax $9,700. The three profit figures?', b: 'Profit from operations $51,500.\nBefore tax $46,250.\nAfter tax $36,550.', src: LCA },
      { n: 4, f: '$45,000 of 6% debentures; $1,350 interest paid during the year. Finance cost and liability?', b: 'Charge 6% × 45,000 = $2,700; owing $1,350 under current liabilities.', src: LCA },
      { n: 5, f: 'Retained earnings $16,000 at the start; loss for the year $21,500; dividends paid $2,000. Closing?', b: '16,000 − 21,500 − 2,000 = ($7,500), a negative balance that reduces total equity.', src: LCA },
      { n: 6, f: 'A $50,000 loan is repaid in five equal annual instalments, the first due nine months after the year end. SOFP?', b: 'Current liabilities $10,000; non-current liabilities $40,000.', src: LCA },
      { n: 7, f: 'Share premium rose by $54,000 from an issue at a premium of $0.45 per share; nominal value $0.20. Shares, share capital, issue price?', b: '54,000 ÷ 0.45 = 120,000 shares; share capital up $24,000; issue price $0.65.', src: LCA },
      { n: 8, f: 'Directors\' fees vs dividends', b: 'Directors\' fees or salaries are an expense of the company, even if the directors own shares. Dividends are the return on owning shares, shown in the statement of changes in equity.', src: LCA },
      { n: 9, f: 'What does 9615 exclude from the AS limited company topic?', b: 'Preference shares and general reserves are not examined. Rights issues, bonus issues and revaluation are International A-level only (3.2.6).', src: LCA },
    ]),

    // 8 Analysis and evaluation of financial information
    ...topicOnly('analysis-and-evaluation-of-financial-information-oxfordaqa', '8', [
      { n: 1, f: 'ROCE for a sole trader and for a limited company in 9615', b: 'Sole trader: profit for the year ÷ (capital + non-current liabilities) × 100, with no interest added back.\nCompany: profit from operations ÷ (equity + non-current liabilities) × 100.', src: AEF },
      { n: 2, f: 'Profit for the year $27,000; owner\'s capital $165,000; long-term loan $15,000. Sole trader ROCE?', b: '27,000 ÷ 180,000 × 100 = 15.00%.', src: AEF },
      { n: 3, f: 'Gross profit $45,000; cost of sales $150,000. Markup and gross profit margin?', b: 'Markup 45,000 ÷ 150,000 × 100 = 30.00%.\nRevenue $195,000, so margin 45,000 ÷ 195,000 × 100 = 23.08%.', src: AEF },
      { n: 4, f: 'Convert a 45% margin to a markup, and a 20% markup to a margin', b: 'Markup = 45 ÷ 55 × 100 = 81.82%.\nMargin = 20 ÷ 120 × 100 = 16.67%.', src: AEF },
      { n: 5, f: 'Current assets $48,000 (inventory $20,000); current liabilities $32,000. Both liquidity ratios?', b: 'Current ratio 1.5 : 1.\nLiquid capital ratio 28,000 ÷ 32,000 = 0.88 : 1.', src: AEF },
      { n: 6, f: 'Average inventory $15,000; cost of sales $135,000. Inventory turnover in times and days?', b: '9 times; 15,000 ÷ 135,000 × 365 = 40.6 days.', src: AEF },
      { n: 7, f: 'Capital gearing for NCL $60,000, issued share capital $150,000, reserves $90,000', b: '60,000 ÷ 300,000 × 100 = 20.00%.', src: AEF },
      { n: 8, f: 'Trade payables $16,200; credit purchases $197,100. Trade payable days?', b: '16,200 ÷ 197,100 × 365 = 30.0 days.', src: AEF },
      { n: 9, f: 'Effect on liquidity ratios: paying a current liability from cash; receiving a long-term loan', b: 'Paying a current liability raises a ratio above 1 : 1 and lowers one below 1 : 1.\nA long-term loan raises both liquidity ratios, with no effect on profit.', src: AEF },
      { n: 10, f: 'Which ratios does a bank lender watch, and which a trade supplier?', b: 'Lender: capital gearing, current ratio and liquid capital ratio.\nTrade supplier: liquid capital ratio and trade payable days.', src: AEF },
      { n: 11, f: 'Gross profit margin 32%; profit in relation to revenue 7%. Expenses in relation to revenue?', b: '32 − 7 = 25%.', src: AEF },
    ]),

    // 9 Budgeting
    ...topicOnly('budgeting-oxfordaqa', '9', [
      { n: 1, f: 'Sales 900 units; opening finished goods 120; closing 150. Production?', b: '900 + 150 − 120 = 930 units.', src: BUD },
      { n: 2, f: 'Usage 2,400 kg; opening materials 300 kg; closing 260 kg. Purchases?', b: '2,400 + 260 − 300 = 2,360 kg.', src: BUD },
      { n: 3, f: 'Opening receivables $5,200; credit sales $61,000; closing receivables $6,400. Cash received?', b: '5,200 + 61,000 − 6,400 = $59,800.', src: BUD },
      { n: 4, f: 'Sales: May $14,000, June $16,500. 25% are for cash; credit customers pay the month after sale. June receipts?', b: '25% × 16,500 + 75% × 14,000 = 4,125 + 10,500 = $14,625.', src: BUD },
      { n: 5, f: 'March credit sales $30,000; 60% pay in April and take a 2% cash discount. April receipt?', b: '30,000 × 60% = 18,000; less 2% = $17,640.', src: BUD },
      { n: 6, f: 'Production 640 units at 1.5 hours each, $14 an hour. Labour cost?', b: '960 hours × $14 = $13,440.', src: BUD },
      { n: 7, f: 'Budgeted rent paid $7,800, of which $650 is for next year. Budgeted expense and bank figure?', b: 'Expense 7,800 − 650 = $7,150; the $650 is an other receivable; the bank figure uses the full $7,800.', src: BUD },
      { n: 8, f: 'Budgetary slack', b: 'Padding added by a manager to make a target easier to hit.', src: BUD },
      { n: 9, f: 'Incremental vs zero-based budgeting, with an example', b: 'Incremental: last period\'s figure adjusted ($48,000 + 5% = $50,400); quick and cheap but carries waste forward.\nZBB: every item starts at nil and must be justified; slow and costly, suits discretionary costs.', src: BUD },
      { n: 10, f: 'Which budgets does 9615 say "will be assessed at A-level"?', b: 'The cash, sales, purchases, production and labour budgets. Budgeted statements are International AS.', src: BUD },
      { n: 11, f: 'Materials budget $8,200, actual $8,650. Sales budget $31,000, actual $32,400. Label the differences', b: 'Materials $450 adverse (higher cost reduces profit).\nSales $1,400 favourable. Investigate the cause before acting.', src: BUD },
    ]),

    // 10 Marginal costing
    ...topicOnly('marginal-costing-oxfordaqa', '10', [
      { n: 1, f: 'Classify by traceability and behaviour: cushion fabric; a factory cleaning contract; a machine operator on a weekly wage', b: 'Fabric: direct and variable.\nCleaning contract: indirect and fixed.\nOperator on a weekly wage: could be direct yet fixed.', src: MARG },
      { n: 2, f: 'A clock sells for $120; marginal cost $72; fixed costs $43,200. Contribution, break-even and break-even revenue?', b: 'Contribution $48.\nBreak-even 43,200 ÷ 48 = 900 clocks.\nRevenue 900 × 120 = $108,000.', src: MARG },
      { n: 3, f: 'Same clocks (contribution $48, fixed costs $43,200), expected sales 1,250. Profit and margin of safety?', b: 'Profit (1,250 × 48) − 43,200 = $16,800.\nMargin of safety 350 clocks, 28% of expected sales.', src: MARG },
      { n: 4, f: 'Under marginal costing, 50 clocks with a marginal cost of $72 are unsold. Closing inventory value?', b: '50 × 72 = $3,600. Inventory is at marginal cost; fixed costs are charged in full to the period.', src: MARG },
      { n: 5, f: 'Each forklift driver costs $1,800 a month and can move 12,000 cartons. Cost type and cost for 30,000 cartons?', b: 'Stepped. 30,000 cartons need 3 drivers: $5,400.', src: MARG },
      { n: 6, f: 'Contribution $8.50 per unit; fixed costs $40,800. Units for a $12,000 profit?', b: '(40,800 + 12,000) ÷ 8.50 = 6,211.8, so 6,212 units: round up.', src: MARG },
      { n: 7, f: 'A bracket costs $3.20 marginal cost to make; a supplier charges $3.60. Buying all 10,000 ends a $5,000 tooling lease. Effect of buying?', b: 'Extra cost 10,000 × 0.40 = $4,000; lease saved $5,000: profit rises by $1,000, before non-financial factors.', src: MARG },
      { n: 8, f: 'Spare capacity: a one-off order for 600 units at $16; marginal cost $13.50; no extra costs. Effect?', b: '600 × (16 − 13.50) = $1,500 higher profit.', src: MARG },
      { n: 9, f: 'Skilled labour is short. R: contribution $18 using 1.5 hours. S: $30 using 3 hours. Which takes priority?', b: 'R: $12 per hour against $10 for S. R first, despite its lower contribution per unit.', src: MARG },
      { n: 10, f: 'A department earns contribution $22,000. Closing it ends $15,000 of fixed costs; the space could be sublet for $4,000. Change in profit?', b: '−22,000 + 15,000 + 4,000: profit falls by $3,000, so keep it open on financial grounds.', src: MARG },
      { n: 11, f: 'What shifts the break-even point up or down?', b: 'Up: a lower price, a higher variable cost or higher fixed costs. Down: the reverse.', src: MARG },
    ]),

    // 11 Standard costing and variance analysis
    ...topicOnly('standard-costing-and-variance-analysis-oxfordaqa', '11', [
      { n: 1, f: 'Standard cost', b: 'A target cost per unit, fixed before the period from the quantities and prices the business expects when it works efficiently.', src: STD },
      { n: 2, f: 'Standard 5 kg of clay at $1.20 per mug. 640 mugs made using 3,120 kg costing $3,900. Materials variances?', b: 'AP $1.25; SQ 3,200 kg.\nPrice (1.20 − 1.25) × 3,120 = $156 A.\nUsage (3,200 − 3,120) × 1.20 = $96 F.\nTotal $60 A.', src: STD },
      { n: 3, f: 'Standard 0.4 hours at $14.00 per mug. 640 mugs made in 270 hours costing $3,672. Labour variances?', b: 'AR $13.60; SH 256.\nRate (14.00 − 13.60) × 270 = $108 F.\nEfficiency (256 − 270) × 14 = $196 A.\nTotal $88 A.', src: STD },
      { n: 4, f: 'Budget 2,000 units, standard contribution $7. Actual sales 2,150 units at $0.50 below standard price. Sales variances?', b: 'Price −0.50 × 2,150 = $1,075 A.\nVolume (2,150 − 2,000) × 7 = $1,050 F.', src: STD },
      { n: 5, f: 'Total materials variance $340 A; usage variance $520 A. Price variance?', b: 'Price = total − usage = −340 − (−520) = $180 F.', src: STD },
      { n: 6, f: 'Why is standard quantity based on actual output, not budgeted output?', b: 'So the comparison is like for like; using budgeted output would mix a volume difference into the usage or efficiency result.', src: STD },
      { n: 7, f: 'Why is the sales volume variance valued at standard contribution rather than selling price?', b: 'Each extra unit sold also brings standard variable cost; only the contribution changes profit.', src: STD },
      { n: 8, f: 'Cost reconciliation vs profit reconciliation: treatment of an adverse variance', b: 'Cost reconciliation: adverse variances are added.\nProfit reconciliation: adverse variances are subtracted from budgeted profit.', src: STD },
      { n: 9, f: 'For which type of business is standard costing poorly suited?', b: 'One doing one-off or bespoke work: there is no repeated unit to set a standard for.', src: STD },
      { n: 10, f: 'Two advantages and two disadvantages of standard costing', b: 'Advantages: each variance has an owner; management by exception saves time; supports budgets and pricing.\nDisadvantages: costly to set and maintain; out-of-date standards mislead; reports come after the event.', src: STD },
    ]),

    // 12 Absorption and activity based costing
    ...topicOnly('absorption-and-activity-based-costing-oxfordaqa', '12', [
      { n: 1, f: 'Allocation vs apportionment vs attribution', b: 'Allocation: a cost goes in full to the one product or department it belongs to.\nApportionment: a shared overhead is divided between departments.\nAttribution: a cost pool is charged to products by their use of its driver.', src: ABS },
      { n: 2, f: 'Building insurance of $27,000 is shared between A (900 m²), B (600 m²) and C (300 m²)', b: 'A $13,500; B $9,000; C $4,500 (total $27,000).', src: ABS },
      { n: 3, f: 'Budget: overheads $61,200, 6,800 machine hours. Actual: 6,650 hours, overheads $58,900. Result?', b: 'OAR $9.00. Absorbed $59,850. Over-absorbed by $950, added to profit.', src: ABS },
      { n: 4, f: 'OAR $22.00 per labour hour. Actual 5,550 hours; actual overheads $120,600. Result?', b: 'Absorbed $122,100. Over-absorbed by $1,500, so profit is increased by $1,500.', src: ABS },
      { n: 5, f: 'A unit uses $30.00 of materials and 2.5 labour hours at $14 an hour, with OAR $22. Total cost and price at a 25% margin?', b: '30.00 + 35.00 + 55.00 = $120.00.\nPrice 120.00 ÷ 0.75 = $160.00.', src: ABS },
      { n: 6, f: 'A set-up pool of $42,000 has 140 set-ups. A product uses 35 set-ups for 7,000 bags. Cost per bag?', b: 'Driver rate $300 per set-up. 35 × 300 = $10,500. ÷ 7,000 = $1.50 per bag.', src: ABS },
      { n: 7, f: 'An inspection pool costs $63,000 for 420 inspections. Product R uses 84 inspections for 2,100 units. Cost per unit?', b: '$150 per inspection; 84 × 150 = $12,600; ÷ 2,100 = $6.00 per unit.', src: ABS },
      { n: 8, f: 'Inventory rises from 700 to 1,100 units; fixed production overhead absorbed at $4.50 a unit. Absorption vs marginal profit?', b: 'Absorption profit is 400 × $4.50 = $1,800 higher.', src: ABS },
      { n: 9, f: 'Absorption profit $64,300. Inventory fell by 900 units; fixed production overhead $3.00 a unit. Marginal profit?', b: 'Inventory fell, so marginal profit is higher: 64,300 + 2,700 = $67,000.', src: ABS },
      { n: 10, f: 'Two limitations of ABC', b: 'Costly to set up and run; still relies on judgement; facility costs such as rent lack a driver; little gain when products are similar.', src: ABS },
    ]),

    // 13 Capital investment appraisal
    ...topicOnly('capital-investment-appraisal-oxfordaqa', '13', [
      { n: 1, f: 'Which of these are left out of the cash flow schedule: depreciation, sunk costs, unchanged shared overheads, interest on finance?', b: 'All four. Depreciation is not cash, sunk costs are already spent, unchanged overheads happen anyway, and the cost of capital already covers interest.', src: CIA },
      { n: 2, f: 'Outlay $20,000; inflows $9,000, $9,000 and $7,000. Payback?', b: 'Cumulative (11,000) then (2,000) after year 2. 2 years + (2,000 ÷ 7,000) × 12 = 3.4 months: 2 years 3 months.', src: CIA },
      { n: 3, f: 'Same project at 5%, factors 0.952, 0.907, 0.864. NPV?', b: 'PVs 8,568 + 8,163 + 6,048 = $22,779. NPV $2,779 positive: acceptable on financial grounds.', src: CIA },
      { n: 4, f: 'A $45,000 kiln brings $13,500 a year for 4 years and is sold for $5,000 at the end. Payback, and the year 4 NPV cash flow?', b: 'Payback 45,000 ÷ 13,500 = 3⅓ years: 3 years 4 months.\nYear 4 cash flow 13,500 + 5,000 = $18,500 (residual value added before discounting).', src: CIA },
      { n: 5, f: 'A new oven costs $40,000 and the old oven is sold now for $3,000. Year-0 net cash flow?', b: '40,000 − 3,000 = ($37,000). The sale of a replaced asset reduces the outlay.', src: CIA },
      { n: 6, f: 'Cumulative cash flow is ($9,000) at the end of year 2; year 3 inflow is $27,000. Payback?', b: '9,000 ÷ 27,000 × 12 = 4 months: 2 years 4 months.', src: CIA },
      { n: 7, f: 'Year-1 discount factor at 12%, and the year-0 factor', b: '1 ÷ 1.12 = 0.893. Year 0 factor is 1.000.', src: CIA },
      { n: 8, f: 'Cost of capital vs discount factor', b: 'The cost of capital is a percentage: the return lenders and owners require. The discount factor is the multiplier calculated from it for a particular year.', src: CIA },
      { n: 9, f: 'Payback and NPV: one strength and one weakness each', b: 'Payback: simple and protects liquidity; ignores the time value of money and cash after payback.\nNPV: allows for the time value of money and uses all cash flows; depends on the cost of capital chosen and says nothing about speed of recovery.', src: CIA },
      { n: 10, f: 'Can undiscounted inflows exceed the outlay and still give a negative NPV?', b: 'Yes. Discounting reduces later inflows, so their present values can total less than the outlay.', src: CIA },
    ]),

    // 14 Accounting for organisations with incomplete records
    ...topicOnly('accounting-for-organisations-with-incomplete-records-oxfordaqa', '14', [
      { n: 1, f: 'Opening capital $18,500; closing $21,300; drawings $9,600; capital introduced $1,700. Profit?', b: '21,300 − 18,500 + 9,600 − 1,700 = $10,700. A negative answer is a loss: say so in words.', src: INC },
      { n: 2, f: 'Statement of affairs', b: 'Sets out every asset and liability on one day; capital is the balancing figure. An overdraft, an accrual and a loan are liabilities; a prepayment is an asset.', src: INC },
      { n: 3, f: 'Revenue $48,000 at a markup of 60%. Cost of sales and gross profit?', b: 'Cost of sales 48,000 × 100/160 = $30,000. Gross profit $18,000.', src: INC },
      { n: 4, f: 'Trade receivables: opening $2,600, closing $3,050; receipts $27,400; irrecoverable debts $350. Credit sales?', b: '27,400 + 350 + 3,050 − 2,600 = $28,200.', src: INC },
      { n: 5, f: 'Trade payables: opening $5,160, closing $4,720; paid $35,850; discounts received $460. Credit purchases?', b: '35,850 + 460 + 4,720 − 5,160 = $35,870.', src: INC },
      { n: 6, f: 'Rent paid $5,400; $300 prepaid at the start and $450 at the end. Rent expense?', b: '5,400 + 300 − 450 = $5,250.', src: INC },
      { n: 7, f: 'Opening carrying amount $30,000; additions $8,000; carrying amount of disposal $2,500; closing carrying amount $28,900. Depreciation?', b: '30,000 + 8,000 − 2,500 − 28,900 = $6,600.', src: INC },
      { n: 8, f: 'Cash account: how do you find missing takings?', b: 'Opening cash + cash sales = amount banked + payments out of takings + closing cash. Solve for the missing figure.', src: INC },
      { n: 9, f: 'Cost of sales $90,000; rate of inventory turnover 12 times. Average inventory?', b: '90,000 ÷ 12 = $7,500.', src: INC },
      { n: 10, f: 'Single entry vs double entry: one benefit and one limitation each', b: 'Single entry: low cost, no training; but mistakes and theft can stay hidden and an accountant must rebuild the year.\nDouble entry: trial balance proof and full statements; but takes time, skill and often software.', src: INC },
    ]),

    // 15 Partnership accounts
    ...topicOnly('partnership-accounts-oxfordaqa', '15', [
      { n: 1, f: 'Partnership Act 1890 defaults (section 24)', b: 'Profits and losses shared equally; no interest on capital; no salaries; no interest on drawings; 5% a year on a partner\'s advance beyond agreed capital, from the date of the advance.', src: PART },
      { n: 2, f: 'No agreement. A partner advances $6,000 on 1 July; the year ends 31 December. Interest?', b: '6,000 × 5% × 6/12 = $150, charged as an expense before profit is shared equally.', src: PART },
      { n: 3, f: 'Profit before loan interest $42,700; a partner\'s loan of $9,000 at 7% for the whole year. Profit for the year?', b: 'Loan interest $630. Profit for the year $42,070.', src: PART },
      { n: 4, f: 'A partner draws $7,200 on 30 September. Year end 31 December; interest on drawings 5% a year. Interest?', b: '7,200 × 5% × 3/12 = $90. Count months from the drawing to the year end.', src: PART },
      { n: 5, f: 'Profit $55,000; interest on drawings $900; interest on capital $7,500; salaries $11,000. Residual profit split 3 : 2?', b: '55,000 + 900 − 7,500 − 11,000 = $37,400: $22,440 and $14,960.', src: PART },
      { n: 6, f: 'Current account opens with a debit of $1,200. Interest on capital $2,000; profit share $18,500; interest on drawings $300; drawings $17,600. Closing?', b: '−1,200 + 2,000 + 18,500 − 300 − 17,600 = $1,400 credit.', src: PART },
      { n: 7, f: 'On admission: premises up $16,000, vehicles down $2,600, provision for doubtful debts up $400. Old ratio 3 : 2. Shares?', b: 'Revaluation profit $13,000: $7,800 and $5,200.', src: PART },
      { n: 8, f: 'Kilbride and Mottram share 2 : 1; Aspinall joins and all share equally. Goodwill $27,000, not kept. Net effect?', b: 'Created 2 : 1: +18,000 and +9,000. Written off equally: −9,000 each.\nNet: Kilbride +$9,000; Mottram nil; Aspinall −$9,000.', src: PART },
      { n: 9, f: 'Retiring partner: capital $28,000, current account debit $1,100, revaluation share $2,400, goodwill share $6,000. Amount due?', b: '28,000 − 1,100 + 2,400 + 6,000 = $35,300. Paid in cash, by an asset, or left as a loan (a liability).', src: PART },
      { n: 10, f: 'Which ratio is used for revaluation, goodwill created and goodwill written off?', b: 'Old ratio for revaluation and goodwill created; new ratio for goodwill written off.', src: PART },
      { n: 11, f: 'Profit is too low to cover salaries and interest on capital. What happens?', b: 'Do not scale the salaries down: credit them in full and share the shortfall as a residual loss.', src: PART },
    ]),

    // 16 Accounting for limited companies
    ...topicOnly('accounting-for-limited-companies-oxfordaqa', '16', [
      { n: 1, f: 'Tax payable $8,400 at the start and $9,900 at the end; tax charge $11,250. Tax paid?', b: '8,400 + 11,250 − 9,900 = $9,750.', src: ACC },
      { n: 2, f: 'Equipment cost $22,000, accumulated depreciation $15,400, sold at a loss of $1,300. Proceeds?', b: 'Carrying amount $6,600. Proceeds 6,600 − 1,300 = $5,300.', src: ACC },
      { n: 3, f: '960,000 ordinary shares of $0.50. A 1 for 8 rights issue at $1.20, all taken up. Cash, share capital, share premium?', b: '120,000 new shares. Cash $144,000; share capital $60,000; share premium $84,000.', src: ACC },
      { n: 4, f: 'A company with 500,000 shares of $1.00 makes a 3 for 10 bonus issue. New shares and cash?', b: '150,000 new shares; no cash. $150,000 of reserves become share capital; total equity is unchanged.', src: ACC },
      { n: 5, f: 'A building cost $230,000 with accumulated depreciation $35,000 and is revalued to $280,000. Journal?', b: 'Dr Building $50,000; Dr Accumulated depreciation $35,000; Cr Revaluation reserve $85,000. Shown in the statement of changes in equity, not the income statement.', src: ACC },
      { n: 6, f: 'Vehicles at cost $84,000 at the start and $97,000 at the end; a vehicle costing $19,000 was sold. Purchases?', b: '97,000 − 84,000 + 19,000 = $32,000.', src: ACC },
      { n: 7, f: '5% debentures of $160,000 all year; interest owing $2,000 at the start and $4,000 at the end. Finance cost and interest paid?', b: 'Finance cost $8,000. Paid 2,000 + 8,000 − 4,000 = $6,000.', src: ACC },
      { n: 8, f: 'Profit before tax $54,000; finance costs $3,500; depreciation $12,600; inventory up $5,100; receivables down $2,200; payables up $1,700', b: '54,000 + 3,500 + 12,600 − 5,100 + 2,200 + 1,700 = $68,900 cash generated from operations.', src: ACC },
      { n: 9, f: 'Published accounts: what IAS1 requires vs what the Companies Acts require', b: 'IAS1: statements of financial position, profit or loss, changes in equity and cash flows; notes with accounting policies; prior-year figures.\nCompanies Acts: directors\' report; strategic report (not small companies); auditor\'s report (unless exempt).', src: ACC },
      { n: 10, f: 'How is a revalued asset depreciated afterwards?', b: 'The valuation is depreciated over the remaining useful life.', src: ACC },
      { n: 11, f: 'Rights issue vs bonus issue: effect on cash and total equity', b: 'Rights issue: cash comes in, so total equity rises. Bonus issue: no cash, reserves become share capital, total equity unchanged.', src: ACC },
      { n: 12, f: 'Reasons for publishing company accounts', b: 'Stewardship (directors report to owners who do not run the company); limited liability means lenders and suppliers need information; the law requires it.', src: ACC },
    ]),

    // 17 Manufacturing accounts
    ...topicOnly('manufacturing-accounts-oxfordaqa', '17', [
      { n: 1, f: 'Prime cost and factory cost of finished goods', b: 'Prime cost = direct materials consumed + direct labour + direct expenses.\nFactory cost of finished goods = prime cost + factory overheads + opening WIP − closing WIP.', src: MAN },
      { n: 2, f: 'Raw materials: opening $7,250, purchases $63,900, carriage inwards $1,350, returns outwards $900, closing $8,100. Direct wages $48,700; direct expenses $2,300. Prime cost?', b: 'Consumed 7,250 + 63,900 + 1,350 − 900 − 8,100 = $63,500.\nPrime cost 63,500 + 48,700 + 2,300 = $114,500.', src: MAN },
      { n: 3, f: 'Prime cost and overheads $171,000; opening WIP $6,400; closing WIP $5,100; transfer at cost plus 30%. Transfer price?', b: 'Factory cost 171,000 + 6,400 − 5,100 = $172,300.\nProfit on manufacture 30% = $51,690.\nTransfer $223,990.', src: MAN },
      { n: 4, f: 'Closing finished goods at transfer price $18,850; mark-up 30% on cost. PUP and SOFP value?', b: 'PUP 18,850 × 30/130 = $4,350.\nFinished goods shown at 18,850 − 4,350 = $14,500 (cost).', src: MAN },
      { n: 5, f: 'A year later finished goods at transfer price are $16,120 (mark-up still 30%). Change in PUP?', b: 'New PUP $3,720, a fall of $630, added to profit on manufacture. Only the change goes to the income statement.', src: MAN },
      { n: 6, f: 'Goods are transferred at a margin of one fifth of transfer price. Closing finished goods $22,800. PUP?', b: '22,800 × 1/5 = $4,560.', src: MAN },
      { n: 7, f: 'Rent of $27,200 is split 5 : 3 between factory and office. How much goes in the manufacturing account?', b: '27,200 × 5/8 = $17,000; the office share of $10,200 goes in the income statement.', src: MAN },
      { n: 8, f: 'Is a royalty paid on each unit made a prime cost or an overhead?', b: 'Prime cost: it is a direct expense, traced to each unit made.', src: MAN },
      { n: 9, f: 'Carriage inwards vs carriage outwards; direct vs indirect labour', b: 'Carriage inwards on raw materials is in prime cost; carriage outwards is a distribution expense.\nOperators who make the product are direct labour; supervisors, cleaners and maintenance staff are factory overheads.', src: MAN },
      { n: 10, f: 'Which two concepts require a provision for unrealised profit, and where is it shown?', b: 'Realisation and prudence. The full provision is deducted from finished goods under current assets; it is never a liability.', src: MAN },
    ]),

    // 18 Clubs and non-profit making organisations
    ...topicOnly('clubs-and-non-profit-making-organisations', '18', [
      { n: 1, f: 'Receipts and payments account vs income and expenditure account', b: 'Receipts and payments: a summary of the cash book, cash basis, includes capital items, no adjustments.\nIncome and expenditure: accruals basis, revenue items only, includes depreciation, ends with a surplus or deficit.', src: CLUB },
      { n: 2, f: 'Equipment $6,300; cash $1,140; subscriptions in arrears $90; in advance $210; hall hire owed $150. Accumulated fund?', b: '6,300 + 1,140 + 90 − 210 − 150 = $7,170. The accumulated fund is the club\'s capital.', src: CLUB },
      { n: 3, f: 'Subscriptions: arrears $240 and advance $180 at the start ($40 of arrears never paid); received $9,860; arrears $310 and advance $260 at the end', b: 'Credit side 180 + 9,860 + 40 + 310 = 10,390; debit 240 + 260 + balance.\nBalancing figure $9,890; income net of the $40 written off $9,850.', src: CLUB },
      { n: 4, f: 'Opening subscriptions in advance $300 (no arrears); received $5,600; closing arrears $150; closing advance $420. Income?', b: '300 + 5,600 + 150 − 420 = $5,630.', src: CLUB },
      { n: 5, f: 'Bar: supplier payments $21,600; suppliers owed $1,420 then $1,180; inventory $2,300 then $2,050; takings $34,700; bar wages $6,900. Bar profit?', b: 'Purchases 21,600 − 1,420 + 1,180 = $21,360.\nCost of sales $21,610; gross profit $13,090; bar profit $6,190, shown as one line.', src: CLUB },
      { n: 6, f: 'Earlier life fees $4,800, fund $3,000; new fees $1,600; each fee spread over 8 years from the year received. Release and closing fund?', b: 'Release (4,800 + 1,600) ÷ 8 = $800. Closing fund 3,000 + 1,600 − 800 = $3,800.', src: CLUB },
      { n: 7, f: 'Where is a legacy of $20,000 for a new pavilion recorded?', b: 'Added directly to the accumulated fund (or a named pavilion fund), not to income. A small general donation is income.', src: CLUB },
      { n: 8, f: 'Subscriptions in arrears vs in advance', b: 'Arrears are owed to the club: a current asset. Advance payments are a current liability.', src: CLUB },
      { n: 9, f: 'Why is receipts less payments not the surplus?', b: 'It includes capital receipts and spending, ignores accruals, prepayments and depreciation, and includes cash for other years such as arrears and advance subscriptions.', src: CLUB },
      { n: 10, f: 'Income $14,200; expenditure $15,050. Result and effect on the accumulated fund?', b: 'A deficit of $850; the accumulated fund falls by $850.', src: CLUB },
    ]),

    // 19 Interpretation, analysis and communication of accounting information
    ...topicOnly('interpretation-analysis-and-communication-of-accounting-information-oxfordaqa', '19', [
      { n: 1, f: 'Profit before interest and tax $3,300,000; interest $275,000; tax $685,000; 13,000,000 shares. Profit after tax and EPS?', b: 'Profit after tax $2,340,000.\nEPS 234,000,000 cents ÷ 13,000,000 = 18.0 cents.', src: IAC },
      { n: 2, f: 'Ordinary dividends paid $780,000 on 13,000,000 shares; share price 342 cents. DPS and dividend yield?', b: 'DPS 6.0 cents. Yield 6.0 ÷ 342 × 100 = 1.75%.', src: IAC },
      { n: 3, f: 'Profit after tax $2,340,000; dividends $780,000; EPS 18.0 cents; price 342 cents. Dividend cover and P/E?', b: 'Dividend cover 3.00 times.\nPrice earnings 342 ÷ 18.0 = 19.0 times.', src: IAC },
      { n: 4, f: 'Interest cover for profit before interest and tax $3,300,000 and interest payable $275,000. Who relies on it?', b: '12.0 times. Lenders rely on it most.', src: IAC },
      { n: 5, f: 'Price earnings ratio 12; EPS 25 cents. Share price?', b: 'Price = P/E × EPS = 300 cents.', src: IAC },
      { n: 6, f: 'Current assets $400,000; current liabilities $250,000. $500,000 of debentures are issued for cash. New current ratio and effect on profit?', b: '900,000 ÷ 250,000 = 3.60 : 1. No effect on profit until interest is charged.', src: IAC },
      { n: 7, f: 'Same company (current assets $400,000, current liabilities $250,000) pays a $60,000 dividend. New current ratio?', b: '340,000 ÷ 250,000 = 1.36 : 1. Profit is unaffected; the dividend goes through the statement of changes in equity.', src: IAC },
      { n: 8, f: 'Dividend yield rises from 3.1% to 4.4% while dividend cover falls from 2.4 to 1.3 times. Comment for a shareholder', b: 'The higher yield looks attractive, but cover has nearly halved, so the dividend now uses most of profit after tax. If profit falls, the dividend is likely to be cut.', src: IAC },
      { n: 9, f: 'Internal vs external stakeholders in 9615', b: 'Internal: employees, management, owners or shareholders.\nExternal: customers, suppliers, government, lenders, local community.', src: IAC },
      { n: 10, f: 'Beyond stakeholders, on what must a recommendation\'s impact be assessed?', b: 'The local and national economy, and the environment.', src: IAC },
      { n: 11, f: 'Company J has EPS of 20 cents and K has 12 cents. Is J more profitable?', b: 'Not necessarily: EPS depends on the number of shares, so it cannot be compared between companies.', src: IAC },
    ]),

    // 20 The impact of ethical considerations
    ...topicOnly('the-impact-of-ethical-considerations-oxfordaqa', '20', [
      { n: 1, f: 'The five fundamental principles of ethical behaviour', b: 'Integrity, objectivity, professional competence and due care, confidentiality, and professional behaviour (the same five as the IESBA Code).', src: ETH },
      { n: 2, f: 'Self-interest and self-review threats: triggers and safeguards', b: 'Self-interest: a bonus tied to profit, or fee dependence on one client; independent review or removal from the decision.\nSelf-review: checking your own budget or accounts; a different person reviews.', src: ETH },
      { n: 3, f: 'Advocacy, familiarity and intimidation threats: safeguards', b: 'Advocacy: keep the promoting and reporting roles separate.\nFamiliarity: rotate staff.\nIntimidation: escalate above the person applying pressure. If no safeguard works, decline or end the work.', src: ETH },
      { n: 4, f: 'Audit opinions: the two-question grid', b: 'No material problem: unmodified.\nMaterial, not pervasive: qualified ("except for").\nMaterial and pervasive misstatement: adverse.\nMaterial and pervasive lack of evidence: disclaimer of opinion.', src: ETH },
      { n: 5, f: 'Which board committee oversees the external auditor and internal controls, and who sits on it?', b: 'The audit committee, made up of independent non-executive directors.', src: ETH },
      { n: 6, f: 'An audit manager\'s spouse is the client\'s finance director. Threat?', b: 'Familiarity: a close family relationship with someone who prepares the figures being audited.', src: ETH },
      { n: 7, f: 'A firm earns $45,000 of its $300,000 annual fees from one client. Percentage and threat?', b: '45,000 ÷ 300,000 × 100 = 15%; self-interest (fee dependence).', src: ETH },
      { n: 8, f: 'Closing inventory is overstated by $6,500. Effect on this year\'s and next year\'s profit?', b: 'This year +$6,500 (cost of sales too low); next year −$6,500 (opening inventory too high). Over two years no difference, but each year\'s report misleads.', src: ETH },
      { n: 9, f: 'A forecast omits a cost of $6,000 a year for 3 years. At 10% (factors 0.909, 0.826, 0.751), by how much is NPV overstated?', b: 'Factors total 2.486. 6,000 × 2.486 = $14,916.', src: ETH },
      { n: 10, f: 'The four courses of action 9615 names for a suspected unethical or illegal act', b: 'Evaluate the significance of threats to the fundamental principles; ensure safeguards are in place; resolve conflicts of interest; seek external or professional help when necessary.', src: ETH },
      { n: 11, f: 'How does a professional body establish and enforce a code of conduct?', b: 'Establish: publish it, make it a condition of membership, set exams and continuing professional development.\nEnforce: investigate complaints, hold hearings, impose sanctions up to exclusion.', src: ETH },
      { n: 12, f: 'An accountant claims a qualification she does not hold on the firm\'s website. Which principle is breached?', b: 'Professional behaviour (and integrity).', src: ETH },
    ]),
  ],
};
