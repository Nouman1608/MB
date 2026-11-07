/**
 * D-444 -- flashcards for Cambridge O Level Accounting 7707 (2027-2029).
 *
 * The 7707 subject content is word-for-word the same as IGCSE Accounting 0452
 * for this series and uses the same topic and subtopic slugs, and the 0452
 * pages are also tagged 7707, so these cards mirror the 0452 deck.
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 * Not tiered, so no card carries a tier mark. Written from Marlbridge's own
 * 0452/7707 revision notes and study guides (terms, layouts, formulae and worked
 * figures). scripts/flashcard-candidates.mjs 7707 found no usable term/definition
 * pair on a page mapped to a subtopic, so every card is authored.
 *
 * Amounts are in dollars, as on the notes. Plain text only (see types.ts).
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

const T1 = 'the-fundamentals-of-accounting';
const T2 = 'sources-and-recording-of-data';
const T3 = 'verification-of-accounting-records';
const T4 = 'accounting-procedures';
const T5 = 'preparation-of-financial-statements';
const T6 = 'analysis-and-interpretation';
const T7 = 'accounting-concepts-and-modern-practice';

export const DECK_CAMBRIDGE_O_LEVEL_ACCOUNTING: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'o-level',
  subjectSlug: 'accounting',
  syllabusCode: '7707',
  syllabusSeries: '2027-2029',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'javaid-iqbal-sabri', reviewedOn: '2026-11-05' },
  cards: [
    // 1 The fundamentals of accounting
    ...sub(T1, 'the-purpose-of-accounting', '1.1', [
      { n: 1, f: 'Book-keeping compared with accounting', b: 'Book-keeping records transactions (what happened).\nAccounting uses those records to summarise, analyse and communicate what they mean, and to advise.' },
      { n: 2, f: 'Profit (or loss) for a period', b: 'Income earned in the period minus the expenses of earning it. A negative result is a loss. It is shown in the statement of profit or loss.' },
      { n: 3, f: 'Give three purposes of measuring profit', b: 'Any three: judge whether the business is succeeding; decide how much the owner can take as drawings; compare with earlier periods, plans or similar businesses; give lenders and tax authorities a recognised measure; support decisions such as pricing or expansion.' },
      { n: 4, f: 'Accounting information for monitoring progress and for decision-making', b: 'Monitoring: comparing results with a past period or a target.\nDecision-making: choosing between options using the facts.\nThe information supports a decision; it does not make it, and it cannot show things not measured in money.' },
      { n: 5, f: 'Profit falls from $9,000 to $6,750. What is the percentage change?', b: 'Change ÷ original × 100 = 2,250 ÷ 9,000 × 100 = a fall of 25.0%. Always divide by the original figure, not the new one.' },
    ]),
    ...sub(T1, 'the-accounting-equation', '1.2', [
      { n: 1, f: 'The accounting equation', b: 'Assets = Liabilities + Owner’s equity\nso Owner’s equity = Assets − Liabilities.' },
      { n: 2, f: 'Asset, liability and owner’s equity', b: 'Asset: a resource the business owns (premises, inventory, trade receivables, bank, cash).\nLiability: an amount owed to outsiders (trade payables, loan, bank overdraft).\nOwner’s equity: the owner’s claim, assets − liabilities.' },
      { n: 3, f: 'What makes owner’s equity rise, and what makes it fall?', b: 'Rises: capital introduced, profit.\nFalls: a loss, drawings.\nNo other transaction changes owner’s equity.' },
      { n: 4, f: 'Assets are $27,800 and owner’s equity is $18,300. Find liabilities.', b: 'Liabilities = Assets − Owner’s equity = 27,800 − 18,300 = $9,500.' },
      { n: 5, f: 'A machine costing $7,400 is bought on credit. Effect on assets, liabilities and owner’s equity?', b: 'Assets up $7,400, liabilities up $7,400, owner’s equity no change.' },
      { n: 6, f: 'Goods that cost $650 are sold on credit for $940. Effect on assets and owner’s equity?', b: 'Both rise by the profit: 940 − 650 = $290. Liabilities do not change.' },
      { n: 7, f: 'Finding profit from the change in owner’s equity', b: 'Profit = closing equity − opening equity − capital introduced + drawings.\nExample: 38,650 − 31,200 − 2,500 + 7,200 = $12,150.' },
    ]),

    // 2 Sources and recording of data
    ...sub(T2, 'the-double-entry-system-of-book-keeping', '2.1', [
      { n: 1, f: 'The double entry rule', b: 'Every transaction has one debit and one credit of the same amount, in two different accounts. Each entry names the other account.' },
      { n: 2, f: 'Which accounts increase on the debit side, and which on the credit side?', b: 'Debit side: assets, expenses and drawings.\nCredit side: liabilities, capital and income (such as sales).\nA decrease goes on the opposite side.' },
      { n: 3, f: 'Goods are sold on credit. Which account is debited and which credited?', b: 'Debit the customer’s account (in the sales ledger). Credit Sales.' },
      { n: 4, f: 'A customer returns goods. Which account is debited and which credited?', b: 'Debit Sales returns. Credit the customer’s account.' },
      { n: 5, f: 'The owner takes money from the bank for personal use. Debit? Credit?', b: 'Debit Drawings. Credit Bank. Drawings are never an expense.' },
      { n: 6, f: 'A non-current asset is bought on credit. Debit? Credit?', b: 'Debit the non-current asset account. Credit the supplier’s account.' },
      { n: 7, f: 'Balancing an account', b: 'Total both sides; put the difference on the smaller side as Balance c/d so both totals agree; then show it below the totals on the other side as Balance b/d.' },
      { n: 8, f: 'Sales ledger, purchases ledger and nominal (general) ledger: what each holds', b: 'Sales ledger: credit customers’ accounts.\nPurchases ledger: credit suppliers’ accounts.\nNominal (general) ledger: all other accounts.' },
      { n: 9, f: 'What does a credit balance on the bank account mean?', b: 'The account is overdrawn: the business owes the bank (a liability). A debit balance is cash at bank.' },
    ]),
    ...sub(T2, 'business-documents', '2.2', [
      { n: 1, f: 'Invoice, credit note and debit note', b: 'Invoice: the bill for goods supplied on credit.\nCredit note: reduces the amount owed, for example after a return.\nDebit note: a request for credit, or an extra charge.' },
      { n: 2, f: 'Statement of account', b: 'A periodic summary, sent by the seller, of one customer’s account. It is used to check the ledger account.' },
      { n: 3, f: 'Receipt, cheque counterfoil and paying-in slip', b: 'Receipt: proof that money was handed over.\nCheque counterfoil: the payer’s stub, used for cash book payments.\nPaying-in slip: the depositor’s record of money paid into the bank.' },
      { n: 4, f: 'Trade discount compared with cash discount', b: 'Trade discount: taken off the list price on the invoice; only the net figure is recorded.\nCash discount: a reward for paying early, recorded in the cash book when the money moves.' },
      { n: 5, f: '25 items at $40 less 20% trade discount, with 2.5% cash discount for prompt payment. Invoice value and cash received if paid in time?', b: 'Gross 1,000 − trade discount 200 = invoice $800 (entered in the sales journal).\nCash discount 2.5% × 800 = $20, so $780 is received.' },
      { n: 6, f: 'Why is a bank statement a useful source document?', b: 'It is the bank’s own record of the account. It shows items such as charges, interest and direct debits that may not yet be in the cash book.' },
    ]),
    ...sub(T2, 'books-of-prime-entry', '2.3', [
      { n: 1, f: 'Which book of prime entry records: credit sales, credit purchases, returns inwards, returns outwards?', b: 'Credit sales: sales journal.\nCredit purchases: purchases journal.\nReturns inwards: sales returns journal.\nReturns outwards: purchases returns journal.' },
      { n: 2, f: 'What is recorded in the general journal?', b: 'Anything that fits no other book: non-current assets bought on credit, opening entries and the correction of errors.' },
      { n: 3, f: 'The dual function of the cash book', b: 'It is both a book of prime entry and the ledger account for cash and bank, so there is no separate cash or bank account in the ledger.' },
      { n: 4, f: 'Posting the sales journal', b: 'Debit each customer’s account with the invoice amount. Credit the Sales account with the total.' },
      { n: 5, f: 'How are the cash book discount columns posted?', b: 'Total of discount allowed: debit Discount allowed.\nTotal of discount received: credit Discount received.' },
      { n: 6, f: 'Contra entry in the cash book', b: 'Cash paid into the bank (or drawn out of it) is entered on both sides of the cash book, in the cash and bank columns, and posted nowhere else.' },
      { n: 7, f: 'Imprest system: a float of $80 and vouchers totalling $61.30. How much is restored, and what is left?', b: 'Cash left is 80 − 61.30 = $18.70. The top-up equals the amount spent, $61.30, which brings the float back to $80.' },
    ]),

    // 3 Verification of accounting records
    ...sub(T3, 'the-trial-balance', '3.1', [
      { n: 1, f: 'Trial balance', b: 'A list of every ledger balance on a given date, in a debit column and a credit column.' },
      { n: 2, f: 'Purposes of a trial balance', b: 'Tests that total debits equal total credits; signals that an error exists when the totals differ; provides the balances for the financial statements.' },
      { n: 3, f: 'Name the six errors that do not affect the agreement of the trial balance', b: 'Commission, compensating, complete reversal, omission, original entry, principle (“C C C O O P”).' },
      { n: 4, f: 'Error of commission compared with error of principle', b: 'Commission: right class of account, wrong account (gas debited to electricity).\nPrinciple: wrong class of account (a machine debited to repairs).' },
      { n: 5, f: 'Error of original entry and complete reversal of entries', b: 'Original entry: the same wrong amount on both sides (1,860 entered as 1,680).\nComplete reversal: the right accounts and amount, but debit and credit swapped.' },
      { n: 6, f: 'The trial balance totals disagree and debits are larger. Where does the difference go?', b: 'On the credit side of a suspense account, so the totals agree until the errors are found. (Credits larger: debit suspense.)' },
      { n: 7, f: 'A balance of $250 is put in the wrong column of the trial balance. Effect on the difference?', b: 'It changes the difference between the totals by twice the balance: $500.' },
    ]),
    ...sub(T3, 'correction-of-errors', '3.2', [
      { n: 1, f: 'Method for a correcting journal', b: 'Write what was done, then what should have been done; journal the difference in each account; add a narrative.' },
      { n: 2, f: 'A $650 cheque from a customer was debited to the customer and credited to bank. Correcting journal?', b: 'Complete reversal: correct with double the amount.\nDebit Bank $1,300, credit the customer $1,300.' },
      { n: 3, f: 'A purchase of $1,860 was entered as $1,680 in both accounts. Correcting journal?', b: 'Error of original entry: journal the difference only.\nDebit Purchases $180, credit the supplier $180.' },
      { n: 4, f: 'Which errors need a suspense account entry to correct them?', b: 'Those that made the totals disagree: one-sided entries, different amounts on each side, two entries on the same side, and addition mistakes. Suspense must clear to nil.' },
      { n: 5, f: 'Which corrections change profit?', b: 'Only those that involve a revenue or expense account. Increasing revenue or reducing an expense raises profit. If both accounts are expenses, or both assets or liabilities, profit is unchanged.' },
      { n: 6, f: 'A drill costing $2,450 was debited to repairs. Effect of correcting it on profit and on the statement of financial position?', b: 'Error of principle. Profit rises by $2,450 (repairs fall); non-current assets rise by $2,450, and capital rises with the profit.' },
    ]),
    ...sub(T3, 'bank-reconciliation', '3.3', [
      { n: 1, f: 'Unpresented cheque and uncredited deposit', b: 'Unpresented cheque: issued and entered in the cash book, not yet paid by the bank.\nUncredited deposit: paid in and entered in the cash book, not yet added by the bank.' },
      { n: 2, f: 'Which items from the bank statement update the cash book, and on which side?', b: 'Credit side: bank charges, interest paid, direct debits, standing orders.\nDebit side: credit transfers received, interest received.' },
      { n: 3, f: 'Standing order compared with direct debit', b: 'Standing order: a fixed payment your bank makes on dates you set.\nDirect debit: collected from your account by the other party, which sets the amount.' },
      { n: 4, f: 'Starting from the updated cash book balance, what do you do with unpresented cheques and uncredited deposits?', b: 'Add unpresented cheques; deduct uncredited deposits. You should finish on the bank statement balance. (From the statement, the signs reverse.)' },
      { n: 5, f: 'Updated cash book $2,500, unpresented cheques $600, uncredited deposit $350. Bank statement balance?', b: '2,500 + 600 − 350 = $2,750.' },
      { n: 6, f: 'The bank charges your account in error. Is the cash book changed?', b: 'No. The bank is told and the error appears on the bank reconciliation statement. Only the business’s own errors and omissions are corrected in the cash book.' },
      { n: 7, f: 'Effect of digital payments on bank reconciliation', b: 'Card, online and transfer payments clear quickly, so fewer timing differences; online banking allows daily checking and software can match items. Charges and direct debits still need entering, and unmatched items still need review.' },
    ]),
    ...sub(T3, 'control-accounts', '3.4', [
      { n: 1, f: 'Purposes of control accounts', b: 'Give total trade receivables or payables at any date; check the ledgers, as totals come from the books of prime entry; help control, as a different person can keep them; help find a missing figure.' },
      { n: 2, f: 'Sales ledger control account: what goes on the debit side?', b: 'Opening debit balances, credit sales, dishonoured cheques, interest on overdue accounts, refunds paid to customers, closing credit balances c/d.' },
      { n: 3, f: 'Sales ledger control account: what goes on the credit side?', b: 'Opening credit balances, receipts from customers, discount allowed, sales returns, irrecoverable debts, contra, closing debit balances c/d.' },
      { n: 4, f: 'Purchases ledger control account: main entries on each side', b: 'Credit: opening credit balances, credit purchases, interest charged by suppliers, refunds received.\nDebit: payments to suppliers, discount received, purchases returns, contra.' },
      { n: 5, f: 'A contra (set-off) between a customer who is also a supplier: entries?', b: 'Debit the purchases ledger control account; credit the sales ledger control account, with the amount set off. No cash moves.' },
      { n: 6, f: 'Opening debit balances $8,200; credit sales $15,000; receipts $13,100; discount allowed $300; returns $500. Closing debit balance?', b: '8,200 + 15,000 − 13,100 − 300 − 500 = $9,300.' },
      { n: 7, f: 'Do trade discount and cash sales appear in a control account?', b: 'No. Only credit transactions go in, and only at the net invoice value. Cash discount does appear.' },
    ]),

    // 4 Accounting procedures
    ...sub(T4, 'capital-and-revenue-expenditure-and-receipts', '4.1', [
      { n: 1, f: 'Capital expenditure and revenue expenditure', b: 'Capital expenditure: buying or improving a non-current asset, including delivery and installation.\nRevenue expenditure: day-to-day running costs and upkeep, such as repairs, fuel and wages.' },
      { n: 2, f: 'Capital receipts and revenue receipts', b: 'Capital receipt: not trading income, such as capital or a loan paid in, or the proceeds of selling a non-current asset.\nRevenue receipt: income from running the business, such as sales or rent received.' },
      { n: 3, f: 'Revenue expenditure is treated as capital expenditure. Effect?', b: 'Profit is overstated and non-current assets are overstated (less any depreciation charged on the item).' },
      { n: 4, f: 'Capital expenditure is treated as revenue expenditure. Effect?', b: 'Profit is understated and non-current assets are understated.' },
      { n: 5, f: 'A repair of $540 was debited to buildings, depreciated at 10% on cost. Effect on profit and non-current assets?', b: 'Depreciation of $54 was charged on it, so both are overstated by 540 − 54 = $486.' },
    ]),
    ...sub(T4, 'accounting-for-depreciation-and-disposal-of-non-current-assets', '4.2', [
      { n: 1, f: 'Depreciation', b: 'The part of a non-current asset’s cost used up in a period through wear and tear, time or becoming out of date. No cash is paid.' },
      { n: 2, f: 'Why is depreciation charged?', b: 'To match the asset’s cost against the revenue it helps to earn, so profit is not overstated, and so the asset is not shown at more than a realistic value.' },
      { n: 3, f: 'Straight-line: cost $54,000, residual value $4,000, life 10 years. Annual charge?', b: '(54,000 − 4,000) ÷ 10 = $5,000 a year, the same each year.' },
      { n: 4, f: 'Cost $20,000, 30% reducing balance. Depreciation in year 3, and net book value at the end of year 3?', b: 'Y1 6,000 (NBV 14,000); Y2 4,200 (NBV 9,800); Y3 30% × 9,800 = $2,940, NBV $6,860.' },
      { n: 5, f: 'Revaluation method: tools valued $1,420 at the start, $380 bought, valued $1,150 at the end. Depreciation?', b: '1,420 + 380 − 1,150 = $650. Suits loose tools and other small items.' },
      { n: 6, f: 'Double entry for the annual depreciation charge', b: 'Debit the statement of profit or loss; credit the provision for depreciation account. The asset account stays at cost.' },
      { n: 7, f: 'Entries in the disposal account', b: 'Debit: the asset’s cost (from the asset account).\nCredit: its accumulated depreciation (from the provision) and the proceeds (from bank).\nThe balance is the profit or loss, transferred to the statement of profit or loss.' },
      { n: 8, f: 'A press cost $22,000, accumulated depreciation $13,200, sold for $9,500. Profit or loss on disposal?', b: 'NBV = 22,000 − 13,200 = 8,800. Profit = 9,500 − 8,800 = $700. Compare proceeds with net book value, not cost.' },
    ]),
    ...sub(T4, 'other-payables-and-other-receivables', '4.3', [
      { n: 1, f: 'Accrued expense: meaning, year-end entry and where it is shown', b: 'A cost used in the year but unpaid. Debit the expense, credit Other payables. A current liability.' },
      { n: 2, f: 'Prepaid expense: meaning, year-end entry and where it is shown', b: 'A cost paid for a later period. Debit Other receivables, credit the expense. A current asset.' },
      { n: 3, f: 'Accrued income and income received in advance', b: 'Accrued income: earned but not yet received; other receivable (current asset).\nIncome in advance: received but not yet earned; other payable (current liability).' },
      { n: 4, f: 'Telephone paid $1,090; $160 owing at the start and $210 owing at the end. Expense for the year?', b: '1,090 − 160 + 210 = $1,140.' },
      { n: 5, f: 'Rates paid $6,300; $900 prepaid at the start and $1,050 prepaid at the end. Expense for the year?', b: '6,300 + 900 − 1,050 = $6,150.' },
      { n: 6, f: 'An accrued expense is left out of the accounts. Effect?', b: 'Expenses too low, so profit is too high; liabilities (other payables) are too low.' },
    ]),
    ...sub(T4, 'irrecoverable-debts-and-allowance-for-irrecoverable-debts', '4.4', [
      { n: 1, f: 'Irrecoverable debt and allowance for irrecoverable debts', b: 'Irrecoverable debt: money due from a named credit customer that will never be paid.\nAllowance: an estimate of the part of the remaining trade receivables that will probably not be collected.' },
      { n: 2, f: 'A customer owing $640 is declared bankrupt. Journal entry?', b: 'Debit Irrecoverable debts $640; credit the customer $640.' },
      { n: 3, f: 'A debt written off last year is now paid. Entries?', b: 'First reinstate it: debit the customer, credit Irrecoverable debts recovered (income).\nThen record the money: debit Bank, credit the customer.' },
      { n: 4, f: 'Trade receivables $18,500 before a $500 write-off; allowance 6%; opening allowance $900. Charge for the year and net receivables?', b: 'Allowance 6% × 18,000 = 1,080, an increase of $180 (an expense).\nNet trade receivables = 18,000 − 1,080 = $16,920.' },
      { n: 5, f: 'The allowance falls from $1,400 to $1,150. Effect on profit?', b: 'The $250 decrease is income, so profit rises by $250. Only the change goes to the statement of profit or loss.' },
      { n: 6, f: 'Which accounting concepts support keeping an allowance for irrecoverable debts?', b: 'Prudence (trade receivables are not overstated) and matching / accruals (each year bears its share of the loss).' },
    ]),
    ...sub(T4, 'valuation-of-inventory', '4.5', [
      { n: 1, f: 'The rule for valuing inventory', b: 'At the lower of cost and net realisable value, item by item (never comparing grand totals).' },
      { n: 2, f: 'Net realisable value (NRV)', b: 'Expected selling price less the costs still to be paid, such as repairs, repackaging, commission or delivery.' },
      { n: 3, f: '60 lamps cost $34 each. After a $6 repair they sell for $45, with $7 delivery. Value?', b: 'NRV = 45 − 6 − 7 = $32, lower than cost.\nValue 60 × 32 = $1,920 (a write-down of 60 × 2 = $120).' },
      { n: 4, f: 'Item A: 30 units, cost $8, NRV $9. Item B: 20 units, cost $15, NRV $11. Inventory value?', b: 'A at cost: 240. B at NRV: 220. Total $460. (Comparing totals would wrongly give 490.)' },
      { n: 5, f: 'Closing inventory is overstated. Effect this year?', b: 'Cost of sales understated; gross profit, profit for the year, equity and the inventory asset all overstated.' },
      { n: 6, f: 'Closing inventory was overstated in Year 1 only. Effect in Year 2?', b: 'Year 2 opening inventory is too high, so Year 2 gross profit and profit are understated by the same amount. Equity at the end of Year 2 is correct; total profit for the two years is unchanged.' },
      { n: 7, f: 'Inventory counted at cost on 4 January: $12,300. Purchases since 31 December $2,150; cost of goods sold since $3,120. Inventory at 31 December?', b: '12,300 − 2,150 + 3,120 = $13,270. For a count after the year end, subtract purchases and add the cost of goods sold since.' },
    ]),

    // 5 Preparation of financial statements
    ...sub(T5, 'sole-traders', '5.1', [
      { n: 1, f: 'Advantages and disadvantages of being a sole trader', b: 'For: keeps all the profit; own boss; cheap and simple to start; private.\nAgainst: unlimited liability; limited funds; illness can stop trading; bears all losses and workload.' },
      { n: 2, f: 'Cost of sales', b: 'Opening inventory + purchases (less returns, plus carriage inwards) − closing inventory.' },
      { n: 3, f: 'Gross profit and profit for the year', b: 'Gross profit = net revenue − cost of sales.\nProfit for the year = gross profit + other income − expenses.' },
      { n: 4, f: 'Current assets and current liabilities', b: 'Current assets: cash, or items turned into cash within a year (inventory, trade and other receivables, bank).\nCurrent liabilities: due within a year (trade and other payables, overdraft).' },
      { n: 5, f: 'Closing capital of a sole trader', b: 'Opening capital + profit (+ capital introduced) − drawings.\nExample: 21,000 + 6,500 − 4,000 = $23,500.' },
      { n: 6, f: 'The owner takes goods costing $260 for own use. Treatment?', b: 'Purchases fall by $260 and drawings rise by $260 (business entity). It is never an expense.' },
      { n: 7, f: 'How do the statements of a service business differ from those of a trading business?', b: 'A service business sells time or skill, so there is no cost of sales or gross profit: fees less expenses give profit.' },
    ]),
    ...sub(T5, 'partnerships', '5.2', [
      { n: 1, f: 'Order of items in a partnership appropriation account', b: 'Profit for the year, add interest on drawings, deduct interest on capital and partners’ salaries; share the balance in the profit-sharing ratio.' },
      { n: 2, f: 'Interest on a partner’s loan compared with interest on capital', b: 'Loan interest is a business expense, charged before profit for the year.\nInterest on capital is an appropriation of profit.' },
      { n: 3, f: 'Partner’s capital account compared with current account', b: 'Capital account: long-term investment, normally fixed.\nCurrent account: yearly entitlements (interest, salary, share of profit) and withdrawals (drawings, interest on drawings).' },
      { n: 4, f: 'What goes on each side of a partner’s current account?', b: 'Credit: opening credit balance, interest on capital, salary, unpaid loan interest, share of profit.\nDebit: opening debit balance, drawings, interest on drawings, share of loss.' },
      { n: 5, f: 'Profit for the year $36,000; interest on drawings $800; interest on capital $4,500; salary $6,000. Balance to share?', b: '36,000 + 800 − 4,500 − 6,000 = $26,300.' },
      { n: 6, f: 'What might a partnership agreement contain?', b: 'Capital to be contributed, the profit-sharing ratio, interest on capital, drawings and loans, partners’ salaries and any drawings limits.' },
      { n: 7, f: 'The balance of profit after appropriations is negative. What happens?', b: 'It is a loss, shared in the profit-sharing ratio and debited to the current accounts. Interest on capital and salaries are still credited.' },
    ]),
    ...sub(T5, 'limited-companies', '5.3', [
      { n: 1, f: 'Limited liability', b: 'A shareholder can lose no more than the amount paid, or agreed to be paid, for their shares.' },
      { n: 2, f: 'Preference shares compared with ordinary shares', b: 'Preference: a fixed rate of dividend, paid before ordinary shareholders receive anything.\nOrdinary: the owners’ shares; the dividend varies and may be nil; usually carry a vote.' },
      { n: 3, f: 'Ordinary shares compared with debentures', b: 'Shares: holders are owners; variable dividend shown in the statement of changes in equity; part of equity.\nDebentures: holders are lenders; fixed, compulsory interest shown as a finance cost; non-current liabilities.' },
      { n: 4, f: '90,000 ordinary shares of $0.50; $0.30 a share called; holders of 2,000 shares have not paid. Issued, called-up and paid-up capital?', b: 'Issued 90,000 × 0.50 = $45,000.\nCalled-up 90,000 × 0.30 = $27,000.\nPaid-up 27,000 − (2,000 × 0.30) = $26,400.' },
      { n: 5, f: 'Retained earnings $22,000 at the start; profit $15,000; $2,000 to general reserve; dividends $1,200 and $6,000. Closing retained earnings?', b: '22,000 + 15,000 − 2,000 − 1,200 − 6,000 = $27,800.' },
      { n: 6, f: 'Effect of a transfer to the general reserve on total equity', b: 'None. It moves profit from retained earnings to the general reserve, changing the split of equity, not the total.' },
      { n: 7, f: 'Profit from operations $36,400; $40,000 of 7% debentures. Profit for the year?', b: 'Debenture interest 7% × 40,000 = $2,800 (finance cost, charged whether paid or owing).\nProfit for the year = 36,400 − 2,800 = $33,600.' },
    ]),
    ...sub(T5, 'manufacturing-accounts', '5.4', [
      { n: 1, f: 'Prime cost', b: 'Direct material (cost of raw materials consumed) + direct labour (wages of production workers).' },
      { n: 2, f: 'Cost of raw materials consumed', b: 'Opening raw materials + purchases + carriage inwards − returns outwards − closing raw materials.' },
      { n: 3, f: 'Factory overheads: give examples', b: 'Indirect factory costs: indirect wages (supervisors, storekeepers, cleaners), factory rent, power, insurance, depreciation of factory machinery.' },
      { n: 4, f: 'Factory cost of production', b: 'Prime cost + factory overheads + opening work in progress − closing work in progress.' },
      { n: 5, f: 'Prime cost $35,500; factory overheads $9,800; opening WIP $1,200; closing WIP $1,700. Factory cost of production?', b: '35,500 + 9,800 + 1,200 − 1,700 = $44,800.' },
      { n: 6, f: 'Cost of sales for a manufacturer, and the inventories in its statement of financial position', b: 'Cost of sales = opening finished goods + factory cost of production − closing finished goods.\nInventories: raw materials, work in progress and finished goods, shown separately.' },
    ]),
    ...sub(T5, 'clubs-and-societies', '5.5', [
      { n: 1, f: 'Receipts and payments account compared with income and expenditure account', b: 'Receipts and payments: a summary of the cash book, including capital items, with no adjustments.\nIncome and expenditure: revenue items for the year only, adjusted for amounts owing and prepaid.' },
      { n: 2, f: 'Surplus, deficit and accumulated fund', b: 'Surplus: income greater than expenditure. Deficit: the reverse.\nAccumulated fund: the club’s capital, total assets − total liabilities.' },
      { n: 3, f: 'Subscriptions in arrears and in advance: where are they shown?', b: 'In arrears (owed by members): other receivable, a current asset.\nIn advance (paid for a later period): other payable, a current liability.' },
      { n: 4, f: 'Subscriptions received $3,240; arrears $120 opening, $180 closing; advance $60 opening, $90 closing. Subscription income?', b: '3,240 − 120 + 180 + 60 − 90 = $3,270.' },
      { n: 5, f: 'How is a revenue-generating activity such as a refreshment kiosk shown?', b: 'Its own account works out the profit or loss (sales − cost of sales − direct expenses). Only that net result goes to the income and expenditure account.' },
      { n: 6, f: 'A club buys new equipment. Is it in the income and expenditure account?', b: 'No. It is capital expenditure, shown in the statement of financial position. Only its depreciation is charged in the income and expenditure account.' },
    ]),
    ...sub(T5, 'incomplete-records', '5.6', [
      { n: 1, f: 'Why might a sole trader keep incomplete records?', b: 'No book-keeping knowledge; the cost of a bookkeeper or software; small scale; the owner mainly wants to know the bank balance.' },
      { n: 2, f: 'Disadvantages of incomplete records', b: 'No trial balance, so errors go unnoticed; theft is harder to detect; profit has to be rebuilt; poor control of receivables and payables; lenders and tax authorities may not accept the figures.' },
      { n: 3, f: 'Statement of affairs', b: 'A list of assets and liabilities at a date, built from listed balances. Capital = assets − liabilities.' },
      { n: 4, f: 'Closing capital $15,800; opening capital $12,300; drawings $7,200; capital introduced $2,000. Profit?', b: '15,800 − 12,300 + 7,200 − 2,000 = $8,700.' },
      { n: 5, f: 'Receipts from credit customers $40,000; trade receivables $4,700 opening and $5,200 closing. Credit sales?', b: 'Credit sales = receipts + closing receivables + irrecoverable debts − opening receivables = 40,000 + 5,200 − 4,700 = $40,500.' },
      { n: 6, f: 'Payments to suppliers $28,900; trade payables $3,100 opening and $3,600 closing. Credit purchases?', b: '28,900 + 3,600 − 3,100 = $29,400.' },
      { n: 7, f: 'A margin of 20%: what is the mark-up? Cost of sales $24,000 with a 50% mark-up: revenue?', b: 'Mark-up = 20 ÷ 80 × 100 = 25%.\nGross profit = 50% × 24,000 = 12,000, so revenue = $36,000.' },
    ]),

    // 6 Analysis and interpretation
    ...sub(T6, 'calculation-and-understanding-of-accounting-ratios', '6.1', [
      { n: 1, f: 'Gross profit margin, mark-up and profit margin', b: 'Gross profit margin = gross profit ÷ revenue × 100.\nMark-up = gross profit ÷ cost of sales × 100.\nProfit margin = profit for the year ÷ revenue × 100.' },
      { n: 2, f: 'Return on capital employed (ROCE)', b: 'Profit for the year before interest ÷ capital employed × 100.\nCapital employed = issued shares + reserves + non-current liabilities.' },
      { n: 3, f: 'Current ratio and acid test (liquid) ratio', b: 'Current ratio = current assets : current liabilities.\nAcid test = (current assets − inventory) : current liabilities.\nBoth are written as x : 1, never as a percentage.' },
      { n: 4, f: 'Current assets $51,000 including inventory $21,000; current liabilities $30,000. Current ratio and acid test?', b: 'Current ratio 51,000 : 30,000 = 1.70 : 1.\nAcid test 30,000 : 30,000 = 1.00 : 1.' },
      { n: 5, f: 'Rate of inventory turnover and inventory turnover in days', b: 'Rate = cost of sales ÷ average inventory (times).\nDays = average inventory ÷ cost of sales × 365.\nAverage inventory = (opening + closing) ÷ 2.' },
      { n: 6, f: 'Inventory $12,000 opening, $18,000 closing; cost of sales $90,000. Rate of inventory turnover and days?', b: 'Average inventory 15,000.\n90,000 ÷ 15,000 = 6.00 times.\n15,000 ÷ 90,000 × 365 = 60.83 days.' },
      { n: 7, f: 'Trade receivables turnover and trade payables turnover', b: 'Trade receivables ÷ credit sales × 365 (days).\nTrade payables ÷ credit purchases × 365 (days).' },
      { n: 8, f: 'Profit $31,500 after debenture interest of $4,500; shares $120,000, reserves $60,000, debentures $50,000. ROCE?', b: 'Capital employed 230,000.\n(31,500 + 4,500) ÷ 230,000 × 100 = 15.65%.' },
    ]),
    ...sub(T6, 'interpretation-of-accounting-ratios', '6.2', [
      { n: 1, f: 'The gross profit margin falls. Possible causes?', b: 'Lower selling prices, dearer purchases, or an overvalued opening or undervalued closing inventory.' },
      { n: 2, f: 'Profit margin falls while the gross profit margin is steady. Why?', b: 'Expenses or interest have risen, or other income has fallen.' },
      { n: 3, f: 'Trade receivables days rise above the credit period allowed. Meaning and action?', b: 'Customers are paying later, so cash is tied up. Send statements and reminders promptly, offer cash discount for early payment, check credit before selling.' },
      { n: 4, f: 'A margin falls from 40.00% to 35.00%. How should the change be described?', b: 'A fall of 5.00 percentage points (not 5.00%).' },
      { n: 5, f: 'Why can a business have less cash than its profit?', b: 'Non-current assets bought, inventory or receivables increased, drawings or dividends paid, a loan repaid. Profit matches income and expenses to the year; cash records money moving.' },
      { n: 6, f: 'Why can cash be higher than profit?', b: 'Depreciation uses no cash; payables increased; capital introduced or a loan received; inventory or receivables decreased.' },
    ]),
    ...sub(T6, 'inter-business-comparison', '6.3', [
      { n: 1, f: 'Problems of inter-business comparison', b: 'Missing detail (credit figures, opening inventory); different accounting policies; different year ends; businesses not really alike; one unusual year; non-financial aspects left out.' },
      { n: 2, f: 'A business makes mostly cash sales. Which ratio does this affect?', b: 'Trade receivables turnover: very few days. It reflects the type of business, not better credit control.' },
      { n: 3, f: 'A business finances itself with debentures. Effect on ROCE compared with a rival?', b: 'Capital employed is larger (it includes non-current liabilities), so ROCE tends to be lower for the same profit before interest.' },
      { n: 4, f: 'Two businesses buy and sell the same goods, but value closing inventory at $20,000 and $17,000. Effect on comparison?', b: 'The lower valuation raises cost of sales and lowers gross profit by $3,000, so the gross profit margins differ (e.g. 37.50% against 36.00% on revenue of $200,000) from policy alone.' },
      { n: 5, f: 'Method for an inter-business comparison answer', b: 'Quote the ratio for each business; say which looks stronger; give a factor other than management that could explain the gap; state one problem that limits the conclusion.' },
    ]),
    ...sub(T6, 'interested-parties', '6.4', [
      { n: 1, f: 'What do owners and managers want from accounting statements?', b: 'Owners: is my money earning enough? (profit, ROCE).\nManagers: where do I act? (margins, expenses, inventory and receivables days).' },
      { n: 2, f: 'What do banks and other lenders look at?', b: 'Whether the loan and interest will be repaid: current ratio, acid test, profit, existing loans and assets.' },
      { n: 3, f: 'What do suppliers and customers want to know?', b: 'Suppliers: will we be paid on time? (liquidity, payables days).\nCustomers: will the business still be trading? (profit, liquidity).' },
      { n: 4, f: 'Investors compared with lenders', b: 'Investors share the risk and look for growth and dividends (profit trend, ROCE). Lenders want interest paid and the loan repaid (liquidity).' },
      { n: 5, f: 'Employees, governments and club members as users', b: 'Employees: job security and pay (profit trend, liquidity).\nGovernments: tax, grants and statistics (profit).\nClub members: did subscriptions cover costs? (surplus or deficit).' },
    ]),
    ...sub(T6, 'limitations-of-accounting-statements', '6.5', [
      { n: 1, f: 'Historic cost as a limitation', b: 'Assets are shown at their original cost, not current value, and money from different years is not comparable. Example: land bought long ago is now worth far more than its cost.' },
      { n: 2, f: 'Application of accounting policies as a limitation', b: 'Estimates and choices, such as the depreciation method, inventory valuation or the size of the allowance for irrecoverable debts, change profit and asset values.' },
      { n: 3, f: 'Non-financial aspects as a limitation', b: 'Things not measured in money do not appear: workforce skill, business location, the economic climate. A business with strong statements can still fail because of them.' },
      { n: 4, f: 'A $30,000 machine (no residual value): A uses straight-line over 5 years, B 30% reducing balance. First-year difference in profit?', b: 'A charges 6,000; B charges 9,000. B’s profit is $3,000 lower from the policy choice alone.' },
    ]),

    // 7 Accounting concepts and modern practice
    ...sub(T7, 'accounting-concepts', '7.1', [
      { n: 1, f: 'Business entity', b: 'The business is treated as separate from its owner. An owner’s personal bill paid by the business is recorded as drawings.' },
      { n: 2, f: 'Consistency', b: 'The same methods (for example of depreciation) are used from year to year unless there is a good reason to change.' },
      { n: 3, f: 'Duality', b: 'Every transaction has two aspects, a debit and a credit of equal value. It is the basis of double entry.' },
      { n: 4, f: 'Going concern', b: 'The business is expected to carry on trading, so assets are shown at cost less depreciation, spread over their useful lives.' },
      { n: 5, f: 'Historic cost', b: 'Assets are recorded at the price actually paid. A rise in market or replacement value is not recorded.' },
      { n: 6, f: 'Matching / accruals', b: 'Costs and revenues are assigned to the period they belong to, not the period in which cash moves. The basis of accruals, prepayments and depreciation.' },
      { n: 7, f: 'Materiality', b: 'Small items with little effect on decisions can be treated simply, for example a low-cost item written off as an expense.' },
      { n: 8, f: 'Money measurement', b: 'Only items that can be measured in money are recorded. Staff skill or reputation is not.' },
      { n: 9, f: 'Prudence', b: 'Expected losses are recognised now; gains only when earned. Profit and assets are not overstated. The basis of the allowance for irrecoverable debts and of the inventory rule.' },
      { n: 10, f: 'Realisation', b: 'Revenue is recognised when it is earned: when the goods or services pass to the customer, even if payment comes later.' },
    ]),
    ...sub(T7, 'ethical-considerations', '7.2', [
      { n: 1, f: 'Why is ethical behaviour needed in accounting?', b: 'Others rely on figures they cannot check; there may be pressure to change profit; accountants see private information; a standard set in advance guides behaviour.' },
      { n: 2, f: 'Integrity and objectivity', b: 'Integrity: being honest, giving no misleading figures.\nObjectivity: freedom from bias, conflicts of interest and pressure.' },
      { n: 3, f: 'Professional competence and due care, confidentiality and professional behaviour', b: 'Competence and due care: keeping skills current and working carefully.\nConfidentiality: not disclosing or misusing information.\nProfessional behaviour: following laws and protecting the profession’s reputation.' },
      { n: 4, f: 'Draft profit $18,400 after a $640 personal holiday was charged to travel expenses. Correct treatment?', b: 'Business entity: it is drawings. Profit = 18,400 + 640 = $19,040 and drawings rise by $640. Leaving it as an expense to cut tax would breach integrity.' },
      { n: 5, f: 'An accountant uses a client’s supplier prices to negotiate a deal for herself. Which principle is breached?', b: 'Confidentiality: information gained at work was misused for personal advantage.' },
    ]),
    ...sub(T7, 'technology-and-sustainability', '7.3', [
      { n: 1, f: 'Benefits and limitations of using digital applications for accounting records', b: 'Benefits: faster posting and totals, fewer arithmetic slips, easy searching, backup and reports.\nLimitations: cost, staff training, system failure, and one wrong input is carried through everywhere.' },
      { n: 2, f: 'Name the four types of storage system for accounting records', b: 'Manual; data storage devices; cloud services; other digital services.' },
      { n: 3, f: 'Cloud services for storing records: one advantage and one disadvantage', b: 'Advantage: remote access, and the provider keeps the equipment.\nDisadvantage: needs internet access, has a continuing cost and relies on a third party.' },
      { n: 4, f: 'What does storing records safely mean?', b: 'Keeping them complete, accurate and available, and protected from loss and unauthorised access.' },
      { n: 5, f: 'How can records be stored sustainably?', b: 'Print less, avoid duplicate copies, keep formats readable, and dispose of old devices responsibly once data is removed.' },
      { n: 6, f: 'Risks of poor storage of accounting records', b: 'Data loss, hacking or fraud, exposure of confidential information, penalties, the cost of rebuilding records, loss of trust and waste.' },
    ]),
  ],
};
