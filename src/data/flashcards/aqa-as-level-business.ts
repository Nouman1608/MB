/**
 * D-438 -- flashcards for AQA AS Business 7137 (for first teaching from
 * September 2026).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 7137); origin 'revision-notes'.
 *
 * Written from Marlbridge's own 7137 revision notes and study guides; content the
 * specification marks "(A-level only)" is left out. Not tiered. Plain text only
 * (see types.ts). Unicode for symbols.
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; src?: string }

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, src }) => ({
    id: `${number}-${n}`,
    topic,
    subtopic,
    front: f,
    back: b,
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const WIB = 'aqa-as-level-business-what-is-business-revision-notes';
const PPL = 'aqa-as-level-business-people-management-revision-notes';

const T1 = 'what-is-business-managing-marketing-and-finance-aqa-aslevel-business';
const T2 = 'managing-people-and-operations-aqa-aslevel-business';

export const DECK_AQA_AS_LEVEL_BUSINESS: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'as-level',
  subjectSlug: 'business',
  syllabusCode: '7137',
  syllabusSeries: 'For first teaching from September 2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // 3.1 What is business? Managing marketing and finance
    ...sub(T1, 'business-and-objectives-aqa-aslevel-business', '3.1.1', [
      { n: 1, f: 'Reasons for setting up in business', b: 'Financial (profit, income) and non-financial (independence, turning a passion into a career, filling a gap noticed in the market).', src: WIB },
      { n: 2, f: 'Characteristics of entrepreneurs named in the specification', b: 'Risk taker, resilient, focused, passionate, innovative, adaptable.', src: WIB },
      { n: 3, f: 'Challenges of setting up in business', b: 'Funding, competition, uncertainty, limited track record.', src: WIB },
      { n: 4, f: 'How does an entrepreneur\'s role change as the business grows?', b: 'From doing everything personally to delegating and managing others.' },
      { n: 5, f: 'Purpose and value of a business plan', b: 'Raising finance, setting direction, and testing an idea before committing resources.' },
      { n: 6, f: 'Competitiveness', b: 'How attractive a business\'s offer is to customers compared with rivals (price, quality, service, brand). A new business must be competitive to win customers from established firms.' },
      { n: 7, f: 'The seven influences on business decisions in the specification', b: 'Objectives, risk, reward, resources, market conditions, ethics, opportunity costs.' },
      { n: 8, f: 'Why must risk and reward be judged together?', b: 'A higher possible reward usually brings higher risk, so a decision is rarely judged on potential reward alone; the business must be able to survive the downside.' },
      { n: 9, f: 'Opportunity cost', b: 'The value of the next best alternative given up when a choice is made.' },
      { n: 10, f: 'Ethical dilemma: profit versus ethics', b: 'A choice where the most profitable option conflicts with acting morally, for example using a cheaper supplier with poor labour practices. Ethical choices may cost profit now but protect reputation.' },
      { n: 11, f: 'SMART objectives in the 7137 specification', b: 'Specific, Measurable, Accountable, Realistic, Time specific. Trap: the specification uses "Accountable", not "Achievable".' },
      { n: 12, f: 'Turn "we want to grow" into a SMART objective', b: 'For example: "increase market share by 5% within two years", with a named manager accountable. A general aim cannot be judged; a SMART one can.' },
      { n: 13, f: 'Purpose and value of setting business objectives', b: 'They give direction and a target, let performance be measured against results, guide decisions and other functions, and make managers accountable.' },
    ]),
    ...sub(T1, 'forms-of-business-and-stakeholders-aqa-aslevel-business', '3.1.2', [
      { n: 1, f: 'Sole trader vs private limited company (Ltd): liability, finance and control', b: 'Sole trader: unlimited liability, limited access to finance, full control.\nLtd: limited liability, more access to finance, reduced control and must publish accounts.' },
      { n: 2, f: 'Public limited company (plc)', b: 'A company whose shares can be sold to the public on stock markets: limited liability and the most access to finance, but the most diluted control.' },
      { n: 3, f: 'Co-operatives: the three types and their features', b: 'Worker, consumer and producer co-operatives. Owned and controlled by members, usually with limited liability; finance is limited and member-based.' },
      { n: 4, f: 'Social enterprise', b: 'A business that trades to meet a social or environmental mission, not just profit. Liability depends on the legal form chosen; access to finance is often limited.' },
      { n: 5, f: 'Unlimited vs limited liability', b: 'Unlimited: the owner\'s personal assets can be used to pay business debts.\nLimited: a shareholder can lose only the amount invested.' },
      { n: 6, f: 'Issues to consider when comparing forms of business', b: 'Control, objectives, sources of finance, distribution of profits, and unlimited or limited liability.' },
      { n: 7, f: 'Market capitalisation, dividend per share and dividend yield', b: 'Market capitalisation = number of issued shares × share price.\nDividend per share = total dividend ÷ number of ordinary shares.\nDividend yield (%) = dividend per share ÷ share price × 100.' },
      { n: 8, f: '2,000,000 shares at 150p; total dividend £160,000. Dividend per share, yield and market capitalisation?', b: 'Dividend per share = £160,000 ÷ 2,000,000 = 8p. Yield = 8 ÷ 150 × 100 = 5.33%. Market capitalisation = 2,000,000 × £1.50 = £3,000,000.' },
      { n: 9, f: 'Exam trap: dividend per share vs dividend yield', b: 'Dividend per share is an absolute amount (in pence). Dividend yield is a percentage of the share price.' },
      { n: 10, f: 'Reasons to buy shares, and influences on share price', b: 'Reasons: dividends, capital growth, a say through voting.\nInfluences: trading performance and forecasts, market sentiment, the wider economy and interest rates, news such as takeovers.' },
      { n: 11, f: 'Internal stakeholders', b: 'Employees, owners/shareholders.', src: WIB },
      { n: 12, f: 'External stakeholders', b: 'Customers, suppliers, other creditors, community, government.', src: WIB },
      { n: 13, f: 'Ethical responsibilities to stakeholders: examples', b: 'Fair pay and safe conditions for employees; honest products and pricing for customers; paying suppliers and creditors on time; limiting harm to the community and environment; paying tax.' },
    ]),
    ...sub(T1, 'marketing-management-aqa-aslevel-business', '3.1.3', [
      { n: 1, f: 'Purpose of market research', b: 'To reduce risk and to understand and anticipate customer needs. Influences on how it is done: risk, cost, time and the need for reliability.' },
      { n: 2, f: 'Confidence interval vs confidence level', b: 'Confidence interval: the range likely to hold the true figure; narrower means more precise (a larger sample usually narrows it).\nConfidence level: how sure we are the range holds it, for example 95%.' },
      { n: 3, f: 'B2B, B2C and C2C markets', b: 'B2B: few, large business buyers; account managers.\nB2C: many consumer buyers; branding.\nC2C: individuals trading with each other, often online.' },
      { n: 4, f: 'Market share, market growth and sales growth', b: 'Market share = firm\'s sales ÷ total market sales × 100.\nMarket growth = change in market size ÷ original size × 100.\nSales growth = change in sales ÷ original sales × 100. A firm can grow sales yet lose share if the market grows faster.' },
      { n: 5, f: 'Return on marketing spend and index numbers', b: 'Return on marketing spend = profit from marketing activities ÷ marketing spend × 100 (£10,000 ÷ £8,000 = 125%).\nIndex number = value ÷ base value × 100 (92 ÷ 80 × 100 = 115).' },
      { n: 6, f: 'Price up 5%, quantity down 2%. PED and revenue effect?', b: 'PED = −2 ÷ 5 = −0.4: inelastic, so revenue rises (1.05 × 0.98 = 1.029 of the original).' },
      { n: 7, f: 'YED: normal and inferior goods', b: 'YED = % change in quantity ÷ % change in income. Positive: normal good (above 1, demand grows faster than income). Negative: inferior good, demand falls as income rises.' },
      { n: 8, f: 'The four segmentation bases in 7137', b: 'Demographic, geographic, psychographic, behavioural.' },
      { n: 9, f: 'Marketing objectives listed in 7137', b: 'Lead generation, sales, market share, brand awareness, customer retention, engagement and conversion.' },
      { n: 10, f: 'Boston Matrix: categories and actions', b: 'Stars (high share, high growth): invest. Cash cows (high share, low growth): fund others. Question marks (low share, high growth): invest or withdraw. Dogs (low share, low growth): consider dropping.' },
      { n: 11, f: 'Product life cycle and extension strategies', b: 'Stages: development, introduction, growth, maturity, decline. Extension strategies: advertising, rebranding, lowering the price, adapting the product.' },
      { n: 12, f: 'Pricing methods in 7137', b: 'Cost-based. Demand-based: penetration, price skimming, dynamic pricing. Competition-based: premium, going rate, discount.' },
      { n: 13, f: 'Direct distribution vs intermediaries', b: 'Direct (including e-commerce): control, customer data and the full margin, but the firm pays its own delivery costs.\nIntermediaries (wholesalers, retailers): reach and storage, but they take a margin and the firm has less control.' },
      { n: 14, f: 'Click-through rate and conversion rate: 50,000 views, 1,000 clicks, 50 sales', b: 'Click-through rate = clicks ÷ views × 100 = 2%. Conversion rate (on clicks) = buyers ÷ clicks × 100 = 5%.' },
    ]),
    ...sub(T1, 'financial-management-aqa-aslevel-business', '3.1.4', [
      { n: 1, f: 'Types of financial objective', b: 'Revenue, cost, profit, cash flow, capital expenditure (spending on long-term assets) and capital structure (the mix of debt and share capital).' },
      { n: 2, f: 'Cash flow vs profit', b: 'Profit is revenue minus costs over a period, counted when earned, even on credit. Cash flow records only money actually moving. Cash can arrive from a loan with no profit; profit can be earned long before cash arrives.' },
      { n: 3, f: 'Return on investment and debt as a share of long-term funding', b: 'ROI = profit gained ÷ amount invested × 100 (£8,400 ÷ £60,000 = 14%).\nDebt share = long-term debt ÷ (long-term debt + equity) × 100 (£80,000 ÷ £320,000 = 25%).' },
      { n: 4, f: 'Gross profit, operating profit and profit for the year', b: 'Gross profit = revenue − cost of sales.\nOperating profit = gross profit − operating expenses.\nProfit for the year = operating profit − finance costs − tax.' },
      { n: 5, f: 'Revenue £90,000; cost of sales £54,000; operating expenses £25,200. Margins?', b: 'Gross profit £36,000: gross margin 40%. Operating profit £10,800: operating margin 12%.' },
      { n: 6, f: 'Reading profit margins: what does a fall in each margin point to?', b: 'A fall in gross margin points to higher cost of sales or lower prices. A fall in operating margin with a steady gross margin points to rising operating expenses. A widening gap down to profit for the year points to finance costs and tax.' },
      { n: 7, f: 'Variance: how to label it', b: 'Variance = actual − budget, labelled by effect on profit: higher revenue or lower cost is favourable; lower revenue or higher cost is adverse. Example: materials budget £18,000, actual £16,200 → £1,800 favourable.' },
      { n: 8, f: 'Value and limits of budgeting', b: 'Value: sets targets, controls spending, gives responsibility, coordinates departments, flags problems early. Limits: forecasts may be wrong; rigid budgets discourage flexibility; variances show what changed, not why.' },
      { n: 9, f: 'Cash-flow forecast: method', b: 'Cash in − cash out = net cash flow. Closing balance = opening balance + net cash flow, carried forward as next month\'s opening balance. Credit sales count only when paid.' },
      { n: 10, f: 'Price £40, variable cost £24, fixed costs £56,000, planned 4,200 units. Break-even and profit?', b: 'Contribution £16. Break-even = 56,000 ÷ 16 = 3,500 units. Margin of safety 700 units (16.7%). Profit = 16 × 4,200 − 56,000 = £11,200.' },
      { n: 11, f: 'Effect on break-even output of a price rise, a variable cost rise and a fixed cost rise', b: 'Price rises: break-even falls (revenue line steeper). Variable cost rises: break-even rises (total cost line steeper). Fixed costs rise: break-even rises (total cost line starts higher).' },
      { n: 12, f: 'Sources of finance in 7137: which are short term and which long term?', b: 'Short term: overdraft, debt factoring. Medium to long term: loans. Long term: retained profits (the only internal one), share capital, venture capital.' },
      { n: 13, f: 'Ways to improve cash flow, and their risks', b: 'Collect faster, pay later, hold less stock, delay purchases, borrow short term, factor debts. Risks: suppliers may refuse terms, discounts cut income, tough credit terms lose customers, factoring costs a fee.' },
    ]),
    // 3.2 Managing people and operations
    ...sub(T2, 'people-management-aqa-aslevel-business', '3.2.1', [
      { n: 1, f: 'HR objectives', b: 'Targets for the number and skills of employees, turnover and retention, engagement, employee costs, and equality, diversity, inclusion and belonging.', src: PPL },
      { n: 2, f: 'HR planning', b: 'Matching the workforce to future needs through recruitment, training, retention, redeployment and redundancy.', src: PPL },
      { n: 3, f: 'Flexible employment', b: 'A mix of employment types and patterns so the workforce can change with demand.', src: PPL },
      { n: 4, f: 'Zero-hours and freelance contracts: main plus and minus', b: 'Zero-hours: hours track demand, but insecurity and higher turnover.\nFreelance: specialist skill on demand, but little control.' },
      { n: 5, f: 'Productivity, sales per employee and employee turnover', b: 'Productivity = output ÷ employees.\nSales per employee = revenue ÷ employees.\nEmployee turnover = leavers ÷ average employees × 100 (9 of an average 60 = 15%).' },
      { n: 6, f: 'Employee costs as a percentage of revenue', b: 'Employee costs ÷ revenue × 100. Example: £84,000 ÷ £420,000 × 100 = 20%.' },
      { n: 7, f: 'Delayering', b: 'Removing one or more levels of hierarchy.', src: PPL },
      { n: 8, f: 'Tall vs flat structures', b: 'Tall: many levels, narrow spans, close supervision, many promotion steps, but slow communication and high management cost.\nFlat: few levels, wide spans, faster communication and lower cost, but limited supervision.' },
      { n: 9, f: 'Centralised vs decentralised', b: 'Centralised: decisions at the top; consistency and control, but slow and demotivating.\nDecentralised: decisions lower down; speed, local knowledge and staff development, but less control.' },
      { n: 10, f: 'Autocratic, democratic and transformational leadership', b: 'Autocratic: leader decides; fits a crisis or unskilled team; risks resentment.\nDemocratic: leader consults; fits a skilled team; slow.\nTransformational: vision and inspiration for change; depends on the leader.' },
      { n: 11, f: 'Hackman\'s five conditions for team effectiveness', b: 'A real team; compelling direction; enabling structure; supportive context; expert coaching.' },
      { n: 12, f: 'Taylor, Maslow and Herzberg', b: 'Taylor: pay is the main motivator; simple timed tasks and piece rate.\nMaslow: hierarchy of physiological, safety, social, esteem, self-actualisation needs.\nHerzberg: hygiene factors (such as pay) prevent dissatisfaction; motivators raise motivation.' },
      { n: 13, f: 'Financial and non-financial rewards', b: 'Financial: wages, salaries, piece rate, commission, performance-related pay, shares, fringe benefits.\nNon-financial: delegation, empowerment, job enrichment, training, remote, hybrid and flexible working.' },
      { n: 14, f: 'Individual vs collective representation', b: 'Individual: flexible and personal, but low bargaining power. Collective (trade unions, employee forums): strong voice and protection, but may bring conflict and delay.' },
    ]),
    ...sub(T2, 'operations-management-aqa-aslevel-business', '3.2.2', [
      { n: 1, f: 'Operational objectives', b: 'Costs, quality, speed of response and flexibility, dependability, environmental objectives, and added value.' },
      { n: 2, f: 'Added value', b: 'Selling price less the cost of bought-in inputs. Example: price £85, bought-in materials £52 → £33, which is 38.8% of the price.' },
      { n: 3, f: 'Labour productivity, unit cost and capacity utilisation', b: 'Labour productivity = output ÷ number of employees.\nUnit cost = total costs ÷ output.\nCapacity utilisation = actual output ÷ capacity × 100.' },
      { n: 4, f: '7,200 units, 18 staff, total cost £28,800, capacity 9,000. Productivity, unit cost, utilisation?', b: 'Productivity = 400 per employee. Unit cost = £4.00. Utilisation = 80%.' },
      { n: 5, f: 'Ways to increase productivity, and difficulties', b: 'Training, motivation, better equipment, workflow changes, less waste, technology. Difficulties: costs come before gains, staff resistance, pressure on quality, extra output may not sell.' },
      { n: 6, f: 'Lean production and Just in Time (JIT)', b: 'Lean: cut waste in time, materials, stock and effort. JIT: materials arrive as needed and goods are made to order, so little inventory is held.' },
      { n: 7, f: 'Benefits and difficulties of JIT', b: 'Benefits: lower holding costs, less storage, less cash tied up, less obsolete stock. Difficulties: needs reliable suppliers; delays stop output; no cover for demand spikes; lost bulk discounts.' },
      { n: 8, f: 'Labour intensive vs capital intensive', b: 'Labour intensive: lower fixed and higher variable costs; suits low-volume, bespoke work; easier to change product.\nCapital intensive: higher fixed and lower variable costs; suits high-volume, repetitive work; costly if demand falls.' },
      { n: 9, f: 'Quality assurance vs checking finished goods', b: 'Quality assurance builds quality into every stage to prevent faults. Checking finished goods only detects faults after they are made.' },
      { n: 10, f: 'Consequences of poor quality', b: 'Returns, wasted materials, lost sales, damaged reputation, compensation, and low staff morale.' },
      { n: 11, f: 'Ways of matching supply to demand', b: 'Outsourcing (extra capacity at peaks, less control); temporary and part-time staff (staffing follows demand); producing to order (little unsold stock, but customers wait).' },
      { n: 12, f: 'Re-order level: formula and example', b: 'Daily usage × lead time + buffer. Usage 30 a day, lead time 5 days, buffer 90: 30 × 5 + 90 = 240. With an order of 300, maximum stock = 90 + 300 = 390.' },
      { n: 13, f: 'Mass customisation', b: 'Many items made at scale, each tailored to the customer. Needs flexible equipment and information systems.' },
    ]),
  ],
};
