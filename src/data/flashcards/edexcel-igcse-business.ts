/**
 * D-438 -- flashcards for Pearson Edexcel International GCSE Business 4BS1
 * (Issue 2, February 2026).
 *
 * One block per subtopic, in specification order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 4BS1); origin 'revision-notes'.
 *
 * Not tiered, so no card is marked upper tier. Formulae follow the specification's
 * formulae appendix where it has one (gross and operating profit margins, markup,
 * ROCE on operating profit, current and acid test ratios), as set out on
 * Marlbridge's own 4BS1 revision notes; all businesses are invented.
 * Plain text only (see types.ts).
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

const LOC = 'edexcel-igcse-business-classification-of-businesses-and-location-decisions-revision-notes';

const T1 = 'business-activity-and-influences-on-business-4bs1';
const T2 = 'people-in-business-4bs1';
const T3 = 'business-finance-4bs1';
const T4 = 'marketing-4bs1';
const T5 = 'business-operations-4bs1';

export const DECK_EDEXCEL_IGCSE_BUSINESS: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'igcse',
  subjectSlug: 'business',
  syllabusCode: '4BS1',
  syllabusSeries: 'Issue 2, February 2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'salman-ahmad', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Business activity and influences on business
    ...sub(T1, 'business-objectives-4bs1', '1.1', [
      { n: 1, f: 'Financial objectives named in the specification', b: 'Survival, profit, sales, market share and financial security.' },
      { n: 2, f: 'Non-financial objectives named in the specification', b: 'Social objectives, personal satisfaction, challenge, and independence and control.' },
      { n: 3, f: 'Aim and objective: the difference', b: 'An aim is a general direction. An objective is a specific, measurable target.' },
      { n: 4, f: 'Why might a business change its objectives?', b: 'Market conditions (for example falling demand), technology, performance (missing or beating a target), legislation, and internal reasons such as a new owner or manager.' },
      { n: 5, f: 'A firm sells 18,000 in a market of 240,000. What is its market share, and what sales would give 10%?', b: 'Share = 18,000 ÷ 240,000 × 100 = 7.5%.\n10% needs 0.10 × 240,000 = 24,000 of sales, which is 6,000 more.' },
    ]),
    ...sub(T1, 'types-of-organisations-4bs1', '1.2', [
      { n: 1, f: 'Unlimited and limited liability', b: 'Unlimited liability: the owner’s personal assets can be used to pay business debts.\nLimited liability: the loss is capped at the money invested.' },
      { n: 2, f: 'Sole trader and partnership', b: 'Sole trader: one owner with unlimited liability, who keeps all the profit.\nPartnership: two or more owners, usually with unlimited liability, sharing finance and profit.' },
      { n: 3, f: 'Private and public limited company', b: 'Both are owned by shareholders with limited liability.\nPrivate (Ltd): shares are not sold to the public.\nPublic (plc): shares are open to the public.' },
      { n: 4, f: 'Public corporation: what it is, for and against', b: 'A business owned by the state.\nFor: essential services even if unprofitable, public interest before profit, prices held down.\nAgainst: less pressure to be efficient, taxpayers may cover losses, decisions may be political.' },
      { n: 5, f: 'Ownership and control', b: 'Ownership is who holds the business; control is who makes the decisions. They are the same person in a sole trader and often different people in a large company.' },
      { n: 6, f: 'Franchise and social enterprise', b: 'Franchise: the franchisee pays to use the franchisor’s brand and methods; a known name and support, but fees and rules.\nSocial enterprise: trades to achieve a social or environmental purpose.' },
      { n: 7, f: 'Dividend and retained profit', b: 'Dividend: the part of profit paid to shareholders.\nRetained profit: the part kept to finance the business. More of one means less of the other.' },
    ]),
    ...sub(T1, 'classification-of-businesses-4bs1', '1.3', [
      { n: 1, f: 'Primary sector', b: 'Extracting raw materials from the earth: farming, fishing, forestry, mining.' },
      { n: 2, f: 'Secondary sector', b: 'Converting raw materials into finished or semi-finished goods: manufacturing, construction, food processing.' },
      { n: 3, f: 'Tertiary sector', b: 'Provision of a wide variety of services: retail, banking, transport, teaching, repairs.' },
      { n: 4, f: 'Classify: growing tomatoes, making tomato sauce, selling the sauce', b: 'Growing: primary. Making sauce: secondary. Selling: tertiary.\nOne business can work in several sectors, so classify each activity.' },
      { n: 5, f: 'Is a semi-finished good such as steel sheet or flour primary or secondary output?', b: 'Secondary. It has been processed from raw materials, and becomes an input for another business.' },
    ]),
    ...sub(T1, 'decisions-on-location-4bs1', '1.4', [
      { n: 1, f: 'Factors that influence location', b: 'Proximity to the market, to labour, to materials and to competitors; the nature of the business activity; the internet and e-commerce; legal controls; and trade blocs.' },
      { n: 2, f: 'Legal controls (on location)', b: 'Rules that limit where or how a business may operate, such as use of land, noise, pollution and safety. A site may be unavailable, costs may rise, or a firm may be pushed away from housing.', src: LOC },
      { n: 3, f: 'Trade bloc', b: 'A group of countries that agree to reduce trade barriers between themselves. Trade inside the bloc is easier; outsiders may pay a tariff (a tax on imports).', src: LOC },
      { n: 4, f: 'How has the internet changed location decisions?', b: 'Selling online allows cheaper premises, a wider market and longer opening hours, but adds delivery, returns and website costs. Fixed premises still matter where customers want to see goods or receive personal service.' },
      { n: 5, f: 'Which location factor often leads for a business with heavy, bulky or perishable inputs, and for one selling to walk-in customers?', b: 'Heavy, bulky or perishable inputs: proximity to materials.\nWalk-in customers: proximity to the market.\nThese are tendencies, not rules.' },
      { n: 6, f: 'How do you judge a relocation on cost?', b: 'Years to recover = one-off cost of the move ÷ annual net saving. Then weigh staff, customers and risk.' },
    ]),
    ...sub(T1, 'business-and-the-international-economy-4bs1', '1.5', [
      { n: 1, f: 'Globalisation: opportunities and threats', b: 'Opportunities: larger markets, cheaper materials or labour, economies of scale, risk spread.\nThreats: more overseas competition, dependence on overseas suppliers, exchange rate risk, differences in culture and rules.' },
      { n: 2, f: 'Why does a business become a multinational?', b: 'New markets and higher revenue, lower costs abroad, avoiding tariffs by producing inside a market, economies of scale, spreading risk, and using a global brand.' },
      { n: 3, f: 'Multinationals: benefits and drawbacks for the host country', b: 'Benefits: jobs, tax, investment, skills and technology, choice, work for local suppliers.\nDrawbacks: profits sent abroad, local firms may close, jobs insecure if production moves, environmental damage.' },
      { n: 4, f: 'Exchange rate conversion, with £1 = USD 1.60', b: 'Home to foreign: multiply. £35 × 1.60 = USD 56.\nForeign to home: divide. USD 840 ÷ 1.60 = £525.' },
      { n: 5, f: 'Effects of a stronger home currency', b: 'Exports are dearer abroad, so competitiveness falls.\nImports are cheaper in the home currency, so importers’ costs fall.\nA weaker currency has the reverse effects.' },
      { n: 6, f: 'A £50 product: the pound falls from USD 1.30 to USD 1.10. What happens to its US price?', b: '50 × 1.30 = USD 65 before; 50 × 1.10 = USD 55 after. The USD 10 fall makes it easier to sell in the US.' },
    ]),
    ...sub(T1, 'government-objectives-and-policies-4bs1', '1.6', [
      { n: 1, f: 'Effects of taxes on business', b: 'Tax on profits: less profit kept for growth or owners.\nTax on incomes: people have less to spend, so demand weakens.\nTax on spending: higher customer prices, so possibly lower sales.' },
      { n: 2, f: 'Constraints on public spending', b: 'Tax revenue is limited, borrowing must be repaid with interest, spending has an opportunity cost, and a weak economy lowers tax receipts.' },
      { n: 3, f: 'Infrastructure and its effect on business', b: 'Roads, rail, ports, power and communications. Better infrastructure lowers transport costs and improves reliability and access to markets and workers.' },
      { n: 4, f: 'A 15% tariff on an import costing 40. What is the new cost, and does a home product at 44 compete?', b: 'Tariff = 40 × 0.15 = 6, so the import costs 46.00. The home product at 44 is now cheaper.' },
      { n: 5, f: 'Effects of higher interest rates on businesses and consumers', b: 'Businesses: higher interest on loans and overdrafts, lower profit, investment delayed.\nConsumers: credit dearer and saving more attractive, so spending falls, especially on big-ticket goods such as cars and furniture.' },
      { n: 6, f: 'A loan of 120,000: interest rate rises from 5% to 8%. Change in interest?', b: '6,000 rises to 9,600. That is a rise of 3 percentage points but a 60% rise in the bill.' },
    ]),
    ...sub(T1, 'external-factors-4bs1', '1.7', [
      { n: 1, f: 'The four external factors in the specification', b: 'Social, technological, environmental and political. The business cannot control them but must respond to them.' },
      { n: 2, f: 'Social factors: examples and effects', b: 'An ageing population, changing tastes, ethical attitudes. They affect the product range, advertising and staffing.' },
      { n: 3, f: 'Technological factors: examples and effects', b: 'Automation, online selling, new software. They affect costs, sales channels and the need for retraining.' },
      { n: 4, f: 'Environmental and political factors: examples', b: 'Environmental: pollution, waste, resource use, climate concern (affecting packaging, energy use, reputation).\nPolitical: government policy, elections, stability (affecting planning, tax, trade and laws).' },
    ]),
    ...sub(T1, 'what-makes-a-business-successful-4bs1', '1.8', [
      { n: 1, f: 'Ways of measuring business success named in the specification', b: 'Revenue, market share, customer satisfaction, profit, growth, owner/shareholder satisfaction, and employee satisfaction.' },
      { n: 2, f: 'Reasons for business failure named in the specification', b: 'Cash flow problems or lack of finance, not being competitive, and failure to adapt to changes in the market.' },
      { n: 3, f: 'Sales rise from 1,000,000 to 1,150,000. Calculate growth.', b: '150,000 ÷ 1,000,000 × 100 = 15%' },
      { n: 4, f: 'Why is success different for different businesses?', b: 'Success means achieving the business’s own objectives. A new business aiming to survive looks first at cash; a company owned by shareholders looks at profit; an owner who values independence may count a smaller profit as success.' },
      { n: 5, f: 'Not competitive and failure to adapt: the difference', b: 'Not competitive: weaker than rivals now on price, quality or service.\nFailure to adapt: not responding as tastes, technology or rivals change.' },
    ]),

    // 2 People in business
    ...sub(T2, 'internal-and-external-communication-4bs1', '2.1', [
      { n: 1, f: 'Effects of good and of ineffective communication', b: 'Good: fewer errors, better decisions, clear instructions, higher morale.\nIneffective: wrong orders, missed deadlines, rumours, complaints, lost sales, staff who feel ignored.' },
      { n: 2, f: 'Email: one benefit and one limitation', b: 'Benefit: fast, cheap and leaves a record.\nLimitation: overload, and tone can be misread.' },
      { n: 3, f: 'Face-to-face meeting: one benefit and one limitation', b: 'Benefit: instant feedback and tone of voice.\nLimitation: slow to arrange, and there is no record without minutes.' },
      { n: 4, f: 'How do you choose a communication method?', b: 'Ask how urgent the message is, how detailed, whether a record is needed, what it costs, and who has access to the technology.' },
      { n: 5, f: 'Barriers to communication and how to remove them', b: 'Jargon: plain language. Language difference: translation, simple wording. Long chain of command: fewer layers. Overload: short messages. Technology failure: back-up method. Feedback through two-way communication catches misunderstanding.' },
    ]),
    ...sub(T2, 'recruitment-and-selection-process-4bs1', '2.2', [
      { n: 1, f: 'Types of employment', b: 'Full-time (the standard working week), part-time (fewer hours), job share (one full-time job split between two people), and casual, seasonal or temporary (short period or set task).' },
      { n: 2, f: 'Job description and person specification', b: 'Job description: what the job is (title, duties, hours, reporting line).\nPerson specification: who is wanted (skills, qualifications, experience, qualities).' },
      { n: 3, f: 'Application form and CV', b: 'Application form: the employer’s form, with the same questions for all applicants, so they are easy to compare.\nCV: the applicant’s own summary of history and skills.' },
      { n: 4, f: 'Internal and external recruitment: benefits and limitations', b: 'Internal: cheaper, quicker, a known person, motivates staff; but few candidates, no fresh ideas, leaves a vacancy.\nExternal: wider choice and new ideas; but costly, slower, an unknown person.' },
      { n: 5, f: 'Stages after advertising a job', b: 'Shortlisting (comparing applications with the person specification and keeping the best few), then interviewing (the same core questions for everyone, scored against the person specification).' },
      { n: 6, f: 'Equal opportunities and minimum wage laws: effects on a business', b: 'Equal opportunities: no less favourable treatment because of gender, race, disability, religion, sexual preference or age; fair adverts and interviews, and a wider talent pool.\nMinimum wage: higher wage costs, possible price rises or lower profit.' },
    ]),
    ...sub(T2, 'training-4bs1', '2.3', [
      { n: 1, f: 'Induction training', b: 'Training at the start of a new job (introductions, rules, safety, systems) to settle the employee in and show what is expected.' },
      { n: 2, f: 'On-the-job and off-the-job training', b: 'On-the-job: at the workplace, doing real work with a colleague or supervisor; job-specific skills with little lost output.\nOff-the-job: away from the workplace (a course or college); specialist skills from experts.' },
      { n: 3, f: 'Benefits and limitations of training for the business', b: 'Benefits: better quality, fewer errors, flexible staff, less supervision, safer working, higher productivity.\nLimitations: fees, lost output while learning, trained staff may leave.' },
      { n: 4, f: 'How does training help with health and safety compliance?', b: 'Induction covers emergency routes and safe use of equipment, and refreshers follow when methods change. Non-compliance risks injury, fines, legal action and damage to reputation.' },
      { n: 5, f: 'Six staff each attend a course with a $300 fee and lose 2 days of work at $80 a day. Total cost?', b: 'Fees: 6 × 300 = $1,800. Lost work: 6 × 2 × 80 = $960.\nTotal = $2,760.' },
    ]),
    ...sub(T2, 'motivation-and-rewards-4bs1', '2.4', [
      { n: 1, f: 'Why motivation matters to a business', b: 'It helps attract employees, retain employees (lower turnover and recruitment costs), and raise productivity.' },
      { n: 2, f: 'Taylor’s theory', b: 'Money is the main motivator. Scientific management: study the task, train for the best method, give simple tasks and pay a piece rate. It ignores non-money needs.' },
      { n: 3, f: 'Maslow’s hierarchy, from the bottom', b: 'Physiological, safety, social, esteem, self-actualisation. A higher need matters once a lower one is met.' },
      { n: 4, f: 'Herzberg’s two-factor theory', b: 'Hygiene factors (pay, conditions, job security, policies, supervisor relations) prevent dissatisfaction.\nMotivators (achievement, recognition, responsibility, interesting work, advancement) create motivation.' },
      { n: 5, f: 'Financial methods of motivation', b: 'Remuneration (wage or salary), bonus (for hitting a target), commission (a percentage of sales), promotion, and fringe benefits (such as a company car, health cover or discounts).' },
      { n: 6, f: 'Non-financial methods: job rotation, job enrichment, autonomy', b: 'Job rotation: moving between similar tasks.\nJob enrichment: more demanding, responsible work.\nAutonomy: freedom over how the work is done.' },
      { n: 7, f: 'Basic pay $1,300 plus 3% commission on sales of $41,000, and a $150 bonus for beating a $40,000 target. Monthly pay?', b: 'Commission = 0.03 × 41,000 = $1,230.\nPay = 1,300 + 1,230 + 150 = $2,680.' },
    ]),
    ...sub(T2, 'organisation-structure-and-employees-4bs1', '2.5', [
      { n: 1, f: 'Hierarchical (tall) and flat structures', b: 'Tall: many levels, narrow spans, long chain of command, slower communication, close supervision, higher management cost.\nFlat: few levels, wide spans, short chain, faster communication, more trust.' },
      { n: 2, f: 'Centralised and decentralised', b: 'Centralised: important decisions made at the top; consistent, but slower on local issues.\nDecentralised: decisions passed down to branch or regional managers; faster and uses local knowledge, but less consistent.' },
      { n: 3, f: 'Tall/flat and centralised/decentralised: are they the same thing?', b: 'No. Tall or flat describes the number of levels. Centralised or decentralised describes where decisions are made. A business can be flat and centralised.' },
      { n: 4, f: 'Delegation and accountability', b: 'Delegation passes authority for a task to a subordinate. Accountability (being answerable for results) stays with the person who holds the post.' },
      { n: 5, f: 'Activities of the human resources function', b: 'Workforce planning, recruitment and selection, training, health and safety, staff welfare, industrial relations, disciplinary and grievance procedures, and dismissal, unfair dismissal and redundancy.' },
      { n: 6, f: 'Dismissal, unfair dismissal and redundancy', b: 'Dismissal: ending a contract for conduct or performance reasons.\nUnfair dismissal: the reason or handling was not fair, so the employee may challenge it.\nRedundancy: the post itself disappears.' },
      { n: 7, f: '1 owner, 4 team leaders and 8 staff under each team leader. Total employees, levels and spans?', b: 'Total = 1 + 4 + 32 = 37. Levels = 3.\nOwner’s span = 4; each team leader’s span = 8.' },
    ]),

    // 3 Business finance
    ...sub(T3, 'business-finance-sources-4bs1', '3.1', [
      { n: 1, f: 'Internal sources of finance', b: 'Personal savings, retained profit and selling assets. No interest, but the amount is limited.' },
      { n: 2, f: 'Overdraft and trade payables (short-term)', b: 'Overdraft: flexible, interest only on the amount used, but high interest and can be recalled.\nTrade payables: free credit from suppliers, but discounts or future credit may be lost.' },
      { n: 3, f: 'Loan capital and share capital', b: 'Loan capital: borrowed and repaid with interest; the lender gets no ownership.\nShare capital: not repaid, but shareholders own part of the company and expect dividends.' },
      { n: 4, f: 'Stock market flotation, venture capital and crowdfunding', b: 'Flotation (plc only): very large sums, but costly, more reporting and takeover possible.\nVenture capital: specialist investors fund risky ventures for part of the ownership.\nCrowdfunding: many small backers; tests demand, but the target may be missed.' },
      { n: 5, f: 'How do you match finance to a need?', b: 'Short-term needs (inventory, wages) suit short-term finance; long-term needs (a factory, vehicles) suit long-term finance. Only companies can issue shares, and only a plc can float on the stock market.' },
    ]),
    ...sub(T3, 'cash-flow-forecasting-4bs1', '3.2', [
      { n: 1, f: 'Why cash matters, and insolvency', b: 'Cash pays suppliers, overheads and employees. A business unable to pay its debts on time is insolvent, and can fail even when sales are good.' },
      { n: 2, f: 'Net cash flow and closing balance', b: 'Net cash flow = total inflows − total outflows.\nClosing balance = opening balance + net cash flow.\nThe opening balance is the previous month’s closing balance.' },
      { n: 3, f: 'Opening balance 1,500. Net cash flows of −300, −400 and +1,300. Find each closing balance.', b: '1,500 − 300 = 1,200\n1,200 − 400 = 800\n800 + 1,300 = 2,100' },
      { n: 4, f: 'Profit and cash: why do they differ?', b: 'Timing. A credit sale adds to profit when made but to cash only when paid; a machine bought for cash reduces cash at once but its cost is spread over its life; a loan adds cash but not profit.' },
      { n: 5, f: 'What can a business do about a forecast negative closing balance?', b: 'Arrange an overdraft, negotiate longer supplier terms, get customers to pay faster, delay purchases, or sell an asset.' },
    ]),
    ...sub(T3, 'costs-and-break-even-analysis-4bs1', '3.3', [
      { n: 1, f: 'Revenue, fixed costs and variable costs', b: 'Revenue = price × quantity sold.\nFixed costs: do not change with output in the short run (rent, insurance).\nVariable costs: change in direct proportion to output (materials, packaging).' },
      { n: 2, f: 'Total costs and profit or loss', b: 'Total costs = fixed costs + total variable costs.\nProfit or loss = revenue − total costs (a loss when negative).' },
      { n: 3, f: 'Break-even level of output, and the formula', b: 'The output at which revenue equals total costs, so profit is zero.\nBreak-even output = fixed costs ÷ contribution per unit, where contribution per unit = selling price − variable cost per unit.' },
      { n: 4, f: 'A stool sells for £30, variable cost £18, fixed costs £6,600 a month. Find break-even output and revenue.', b: 'Contribution = 30 − 18 = £12.\nBreak-even = 6,600 ÷ 12 = 550 stools.\nBreak-even revenue = 550 × 30 = £16,500.' },
      { n: 5, f: 'Effect on break-even output of a price rise, a variable cost rise and a fixed cost rise', b: 'Price up: revenue line steeper, break-even falls.\nVariable cost up: total costs line steeper, break-even rises.\nFixed costs up: total costs line starts higher, break-even rises.' },
      { n: 6, f: 'Limitations of break-even charts', b: 'They assume straight-line revenue and costs, a constant price and variable cost per unit, fixed costs that stay fixed and all output sold; they rely on forecasts, ignore demand and suit a single product.' },
    ]),
    ...sub(T3, 'financial-documents-4bs1', '3.4', [
      { n: 1, f: 'Statement of comprehensive income: the main lines', b: 'Sales revenue − cost of sales = gross profit.\nGross profit − other operating expenses = operating profit.' },
      { n: 2, f: 'Why profit matters', b: 'It rewards owners for risk, retained profit funds growth, it attracts lenders and investors, and it measures success. Profit is not cash.' },
      { n: 3, f: 'Statement of financial position: assets and liabilities', b: 'Non-current assets: kept over a year (machinery, premises). Current assets: become cash within a year (inventory, trade receivables, cash).\nCurrent liabilities: due within a year (trade payables, overdraft). Non-current liabilities: due after a year (long-term loan).' },
      { n: 4, f: 'Capital employed (standard form)', b: 'Capital employed = non-current assets + current assets − current liabilities, which equals equity + non-current liabilities.' },
      { n: 5, f: 'Non-current assets 310,000, current assets 90,000, current liabilities 150,000. Find capital employed.', b: '310,000 + 90,000 − 150,000 = 250,000' },
    ]),
    ...sub(T3, 'accounts-analysis-4bs1', '3.5', [
      { n: 1, f: 'Gross profit margin and operating profit margin', b: 'Gross profit margin = gross profit ÷ revenue × 100.\nOperating profit margin = operating profit ÷ revenue × 100.' },
      { n: 2, f: 'Markup', b: 'Markup = profit per item ÷ cost per item × 100.\nIt is on cost, so for the same profit it is larger than the margin on selling price.' },
      { n: 3, f: 'An item costs 25 and sells for 35. Find the markup and the gross profit margin.', b: 'Profit = 10.\nMarkup = 10 ÷ 25 × 100 = 40%.\nMargin = 10 ÷ 35 × 100 = 28.6%.' },
      { n: 4, f: 'Return on capital employed (ROCE)', b: 'ROCE = operating profit ÷ capital employed × 100.\nExample: 18,000 ÷ 150,000 × 100 = 12%.' },
      { n: 5, f: 'Current ratio and acid test ratio', b: 'Current ratio = current assets ÷ current liabilities.\nAcid test ratio = (current assets − inventory) ÷ current liabilities.\nThe acid test leaves out inventory, which usually takes longest to become cash.' },
      { n: 6, f: 'Current assets 72,000 (inventory 30,000), current liabilities 48,000. Find both liquidity ratios.', b: 'Current ratio = 72,000 ÷ 48,000 = 1.5 : 1.\nAcid test = 42,000 ÷ 48,000 = 0.875 : 1.' },
      { n: 7, f: 'Revenue 80,000, cost of sales 52,000, other operating expenses 16,000. Find both margins.', b: 'Gross profit = 28,000, so GPM = 35%.\nOperating profit = 12,000, so operating profit margin = 15%.' },
    ]),

    // 4 Marketing
    ...sub(T4, 'market-research-4bs1', '4.1', [
      { n: 1, f: 'Purpose of market research', b: 'Collecting and analysing information about customers, competitors and the market, to reduce risk and inform business decisions such as price, product, location and stock levels.' },
      { n: 2, f: 'Primary research methods', b: 'Surveys, questionnaires, focus groups, observation and test marketing.' },
      { n: 3, f: 'Secondary research methods', b: 'The internet, market reports and government reports.' },
      { n: 4, f: 'Primary and secondary research compared', b: 'Primary: collected first-hand; costs more and takes longer, but fits the question exactly and rivals cannot see it.\nSecondary: already exists; cheaper and quicker, but may not fit and rivals often have it.' },
      { n: 5, f: 'Quantitative and qualitative data', b: 'Quantitative: numbers, how many or how much (“35% would buy weekly”).\nQualitative: opinions and reasons, why (“The box is hard to open”).' },
      { n: 6, f: 'What affects the reliability of market research data?', b: 'Sample size, whether the sample is representative, bias in questions, the age of the data and its source.' },
    ]),
    ...sub(T4, 'the-market-4bs1', '4.2', [
      { n: 1, f: 'Why marketing is important', b: 'Satisfying customer needs, building customer relationships and keeping customer loyalty, which brings repeat custom more cheaply than winning new customers.' },
      { n: 2, f: 'Market orientation and product orientation', b: 'Market orientation starts from customer wants, found by research. Product orientation starts from what the business makes.' },
      { n: 3, f: 'Niche and mass markets', b: 'Niche: a small specialised segment; less competition and a premium price possible, but a small base.\nMass: the whole market; large volume and economies of scale, but strong competition and thin margins.' },
      { n: 4, f: 'Market segmentation and its bases', b: 'Dividing a market into groups with shared features so product, price and promotion can be aimed at them. Bases: location, demographics, lifestyle, income and age.' },
      { n: 5, f: 'Can a business’s sales rise while its market share falls?', b: 'Yes, if the whole market grows faster than its sales. Share stays the same if both grow at the same rate.' },
      { n: 6, f: 'How can a business respond to increased competition?', b: 'Improve quality or service, change prices, promote more, or find a niche. Price wars can reduce profit.' },
    ]),
    ...sub(T4, 'the-marketing-mix-4bs1', '4.3', [
      { n: 1, f: 'Stages of the product life cycle', b: 'Introduction (low sales, build awareness), growth (rising fast), maturity (levelling, defend share), decline (falling: extend, cut costs or withdraw).' },
      { n: 2, f: 'Extension strategies', b: 'Actions to delay a product’s decline: a new market or segment, new packaging, a new feature or flavour, a price change, or fresh promotion.' },
      { n: 3, f: 'The Boston matrix', b: 'High growth, high relative share: star.\nHigh growth, low share: question mark.\nLow growth, high share: cash cow.\nLow growth, low share: dog.\nRelative share = own share ÷ largest rival’s share.' },
      { n: 4, f: 'Pricing strategies in the specification', b: 'Cost plus (unit cost plus a mark-up), penetration (low launch price), skimming (high launch price, lowered later), competition (close to rivals), and promotional (a temporary price cut).' },
      { n: 5, f: 'Variable cost 6.00, fixed costs 9,000, output 3,000, mark-up 50%. Find the cost-plus price.', b: 'Unit cost = 6.00 + 9,000 ÷ 3,000 = 9.00.\nMark-up = 9.00 × 0.5 = 4.50.\nPrice = 13.50.' },
      { n: 6, f: 'Retailer and e-tailer', b: 'Retailer: a shop selling to the public; customers can see and try, but the retailer takes a share of the price.\nE-tailer: sells online; low premises costs and a wide market, but delivery and returns costs.' },
      { n: 7, f: 'Above-the-line and below-the-line promotion', b: 'Above the line: paid media aimed at a wide audience (TV, radio, press, cinema).\nBelow the line: other, often targeted methods (special offers, trials, vouchers, direct mail).' },
      { n: 8, f: 'Public relations, and technology in promotion', b: 'Public relations: managing how the public sees the business, not paid advertising.\nTechnology: targeted online advertising, viral advertising through social media, and e-newsletters.' },
      { n: 9, f: 'Why does a brand matter?', b: 'Customer loyalty, support for a higher price, easier launches of new products, and standing out from rivals.' },
    ]),

    // 5 Business operations
    ...sub(T5, 'economies-and-diseconomies-of-scale-4bs1', '5.1', [
      { n: 1, f: 'Average total cost', b: 'Total cost ÷ output. Economies and diseconomies of scale are about what happens to this figure as output grows.' },
      { n: 2, f: 'Internal and external economies of scale', b: 'Internal: falling average total costs as the firm’s own output increases (fixed costs spread, bulk buying, more efficient machines).\nExternal: falling average total costs due to external factors (skilled local workers, nearby specialist suppliers, better roads).' },
      { n: 3, f: 'Diseconomies of scale', b: 'Average total cost rising as output rises, for example through slow communication, weak co-ordination across sites, lower motivation, or strain on capacity.' },
      { n: 4, f: 'Average total cost is 6.00 at 2,000 and 3,000 units and 6.50 at 4,000. What does this show?', b: 'Economies of scale operate up to the lowest average (6.00). The rise to 6.50 shows diseconomies have started after 3,000 units.' },
      { n: 5, f: 'Is a cost rise caused by a new tax a diseconomy of scale?', b: 'No. A diseconomy is a rise in average cost caused by growing output. Costs rising for another reason, such as a tax or a supplier price rise, are not.' },
    ]),
    ...sub(T5, 'production-4bs1', '5.2', [
      { n: 1, f: 'Job, batch and flow production', b: 'Job: a one-off item to order (highest unit cost, very flexible).\nBatch: groups of identical items, with downtime changing over.\nFlow: continuous, standardised output (lowest unit cost at high volume, costly to set up).' },
      { n: 2, f: 'Productivity, and an example', b: 'Productivity = output ÷ number of inputs (for labour, output ÷ number of workers).\n12 workers make 1,440 units a day: 120 units per worker per day.' },
      { n: 3, f: 'Output per worker rises from 120 to 150 units a day. Percentage increase?', b: '(150 − 120) ÷ 120 × 100 = 25%' },
      { n: 4, f: 'Just-in-time (JIT) and Kaizen', b: 'JIT: stock arrives when needed and goes out quickly; less money tied up, but a late delivery halts production.\nKaizen: continuous improvement through many small changes from all staff; slow gains, needs listening managers.' },
      { n: 5, f: 'Robotics in production: factors to weigh', b: 'Cost (lower labour cost per unit against high purchase and repair costs), productivity (more output against stoppages), quality (consistent, but errors repeat) and flexibility (can be reprogrammed, but less adaptable than people).' },
    ]),
    ...sub(T5, 'factors-of-production-4bs1', '5.3', [
      { n: 1, f: 'The four factors of production', b: 'Land: site, premises and natural resources.\nLabour: the people who work for the business.\nCapital: equipment, machinery, vehicles and technology.\nEnterprise: the entrepreneur who takes risk and organises the other inputs.' },
      { n: 2, f: 'Capital-intensive and labour-intensive', b: 'Capital-intensive: a high proportion of capital to labour (car plant, bottling line); low unit cost at scale but high fixed costs.\nLabour-intensive: a high proportion of labour to capital (salon, care home); flexible and personal, but wage costs.' },
      { n: 3, f: 'Why does the mix of factors change?', b: 'Machines get cheaper or more capable, wages change relative to equipment prices, the business grows, it changes where it sells (such as online), or the entrepreneur takes on more risk.' },
      { n: 4, f: 'Wages 60,000, equipment 20,000, other costs 20,000. Is the business labour- or capital-intensive?', b: 'Labour share = 60,000 ÷ 100,000 × 100 = 60%, so labour-intensive. Always compare with another business or period.' },
    ]),
    ...sub(T5, 'quality-4bs1', '5.4', [
      { n: 1, f: 'Quality', b: 'How well a good or service meets or exceeds customer expectations and the business’s own standard.' },
      { n: 2, f: 'Quality control and total quality management (TQM)', b: 'Quality control: checking output against a standard and removing faulty items, usually by inspectors.\nTQM: everyone is responsible for quality, aiming to prevent faults and get things right first time.' },
      { n: 3, f: 'Features of TQM', b: 'Shared responsibility, prevention, training, a focus on internal and external customers, and continuous improvement.' },
      { n: 4, f: 'How does quality give a competitive advantage?', b: 'Reputation and recommendations, the ability to charge a higher price, lower costs from less waste, rework and returns, and customer loyalty.' },
      { n: 5, f: '2,000 units, 5% defective at a cost of 8 each. Defects fall to 2%. What is the saving?', b: '5%: 100 units × 8 = 800.\n2%: 40 units × 8 = 320.\nSaving = 480 per period.' },
    ]),
  ],
};
