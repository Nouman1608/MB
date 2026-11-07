/**
 * D-444 -- flashcards for OxfordAQA International GCSE Business 9225
 * (first teaching September 2020, first examined May/June 2022).
 *
 * The syllabus record itemises subtopics only for topic 2 (Influences on
 * business, 3.2.1-3.2.6). Those cards use ids `<subtopic number>-<n>`; the other
 * five topics have no subtopics, so their cards use `<topic number>-<n>` and leave
 * `subtopic` out (topicOnly helper). Ids are permanent: add a new card with the
 * next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9225); origin 'revision-notes'.
 *
 * Not tiered, so no card is marked upper tier. Following Marlbridge's own 9225
 * notes: named motivation theories (such as Maslow) are not examined on this
 * specification, so the deck has no theory cards; break-even is read from charts
 * rather than calculated with the formula. All businesses are invented.
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

const RW = 'igcse-oxfordaqa-business-real-world-revision-notes';
const FIN = 'oxfordaqa-igcse-business-finance-revision-notes';

const INF = 'influences-on-business-oxfordaqa-igcse-business';

export const DECK_OXFORDAQA_IGCSE_BUSINESS: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'igcse',
  subjectSlug: 'business',
  syllabusCode: '9225',
  syllabusSeries: 'First teaching September 2020, first examined May/June 2022',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'salman-ahmad', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Business in the real world
    ...topicOnly('business-in-the-real-world-oxfordaqa-igcse-business', '1', [
      { n: 1, f: 'Needs, wants and opportunity cost', b: 'Needs are essential; wants are desirable but not essential.\nOpportunity cost is the next best alternative given up when a choice is made.' },
      { n: 2, f: 'Added value', b: 'Added value = selling price − cost of bought-in materials. It is not profit: wages, rent and overheads still have to be paid from it.' },
      { n: 3, f: 'The three business sectors and how they depend on each other', b: 'Primary (extraction), secondary (manufacturing), tertiary (services). They are interdependent: a manufacturer needs primary raw materials and tertiary transport, retail and finance.' },
      { n: 4, f: 'Unlimited and limited liability', b: 'Unlimited liability: the owner’s personal assets can be taken to pay business debts.\nLimited liability: the owner can lose only the amount invested.' },
      { n: 5, f: 'Sole trader', b: 'Unlimited liability. For: easy to set up, all the profit, full control, privacy. Against: all the risk, limited capital, long hours, no continuity.', src: RW },
      { n: 6, f: 'Private limited company (Ltd)', b: 'Limited liability. For: separate legal identity, easier to raise capital, continuity. Against: formation costs, accounts must be filed, shares not publicly traded.', src: RW },
      { n: 7, f: 'Public limited company (plc)', b: 'Limited liability. For: large capital via the stock exchange, prestige. Against: expensive, public accounts, takeover risk, divorce of ownership from control.', src: RW },
      { n: 8, f: 'Is franchising a form of ownership?', b: 'No. It is a way of setting up or growing. The franchisee trades as a sole trader, partnership or company, and that choice decides liability. The franchisee gets a proven brand and support but pays fees and royalties.' },
      { n: 9, f: 'Horizontal and conglomerate integration', b: 'Horizontal: same industry, same stage, such as buying a competitor.\nConglomerate: an unrelated industry, which spreads risk.', src: RW },
      { n: 10, f: 'Vertical forward and vertical backward integration', b: 'Forward: towards the customer, such as buying a retailer.\nBackward: towards the supplier, securing inputs.', src: RW },
      { n: 11, f: 'Economies and diseconomies of scale', b: 'Economies of scale reduce average cost as output rises (purchasing, technical, financial, marketing, managerial). Diseconomies raise average cost when a firm grows too large (poor communication, weak coordination, falling motivation).' },
      { n: 12, f: 'Why do weight-losing industries locate near raw materials?', b: 'The finished product is lighter than its inputs, so it is cheaper to transport the product than the raw materials. Weight-gaining and service industries locate near the market.' },
    ]),

    // 2 Influences on business
    ...sub(INF, 'technology-oxfordaqa-igcse-business', '3.2.1', [
      { n: 1, f: 'ICT', b: 'Information and Communication Technology. Its use keeps changing, and that changes what businesses do.' },
      { n: 2, f: 'e-commerce', b: 'Buying and selling over the internet. It gives a business access to wider markets.' },
      { n: 3, f: 'Digital communication', b: 'Electronic contact with stakeholders, for example email, video conferencing, a website or social media.' },
      { n: 4, f: 'How does ICT influence business activity?', b: 'Selling (online orders), buying (ordering from suppliers online), communication (faster contact), staffing (new skills and training needed), and costs (set-up and security against savings on travel, printing and premises).' },
      { n: 5, f: 'e-commerce: benefits to a business', b: 'A wider market beyond people who can visit a shop, open at all hours, possible savings on premises, and sales to other towns and countries.' },
      { n: 6, f: 'e-commerce: drawbacks to a business', b: 'Delivery, packaging and returns costs, set-up and security costs, customers cannot see or touch the product, and some sales just move from the shop.' },
      { n: 7, f: 'Video conferencing: use and drawback', b: 'Use: meetings with people far away, saving travel.\nDrawback: poor connections, and it is less personal.' },
      { n: 8, f: 'Online sales rise from £8,000 to £11,000 a month. Calculate the percentage increase.', b: '(11,000 − 8,000) ÷ 8,000 × 100 = 37.5%' },
    ]),
    ...sub(INF, 'ethical-and-environmental-considerations-oxfordaqa-igcse-business', '3.2.2', [
      { n: 1, f: 'Ethical behaviour', b: 'Conduct that stakeholders regard as fair and honest. It is a choice beyond the legal minimum, not the same as obeying the law.' },
      { n: 2, f: 'Examples of ethical behaviour named in the notes', b: 'Fair prices and prompt payment to suppliers, honest labelling and advertising, fair treatment of staff, charitable giving, and respecting staff religious observance where possible.' },
      { n: 3, f: 'Ethical behaviour: benefits and drawbacks', b: 'Benefits: customer loyalty, better reputation and recruitment, stronger supplier relationships, fewer complaints.\nDrawbacks: higher costs and lower profit per unit, undercutting by cheaper rivals, uncertain and slow payback.' },
      { n: 4, f: 'Environmental considerations named in the specification', b: 'Traffic congestion, recycling, disposing of waste, noise pollution and air pollution.' },
      { n: 5, f: 'Sustainability', b: 'Serving today’s demand without leaving later generations short of what they will need. Issues include global warming and the use of scarce resources.' },
      { n: 6, f: 'Why can sustainability conflict with profit?', b: 'Spending now (equipment, dearer inputs, training) cuts profit now, while savings and reputation gains arrive later and are uncertain.' },
      { n: 7, f: '10 staff paid £9 an hour each get an extra 20 minutes a day for prayer, five days a week. What is the weekly cost?', b: '10 × (20 ÷ 60) × 9 × 5 = £150 a week, or £7,800 a year over 52 weeks.' },
      { n: 8, f: 'A machine costs £9,000 and saves £3,000 a year in energy. What is the payback period?', b: '9,000 ÷ 3,000 = 3 years' },
    ]),
    ...sub(INF, 'the-economic-climate-on-business-oxfordaqa-igcse-business', '3.2.3', [
      { n: 1, f: 'Rate of interest', b: 'The price of borrowing money, shown as a percentage of the amount borrowed each year.' },
      { n: 2, f: 'Loan and overdraft', b: 'Loan: a fixed sum borrowed and repaid with interest over an agreed period.\nOverdraft: spending more than the bank balance, up to an agreed limit, with interest on the amount overdrawn.' },
      { n: 3, f: 'The two channels by which a rise in interest rates affects a business', b: 'Direct: higher repayments on its own loans and overdrafts, so costs rise and profit falls.\nIndirect: households and businesses face higher borrowing costs, so spending and sales fall.' },
      { n: 4, f: 'A £50,000 variable-rate loan: the rate rises from 4% to 6%. What is the extra interest a year?', b: '£2,000 rises to £3,000: an extra £1,000 a year.' },
      { n: 5, f: 'Sharia compliant finance', b: 'Finance that does not charge or pay interest. It can be structured through leasing, profit sharing or agreed-price sales. The business still has payments to make.' },
      { n: 6, f: 'Effects of a rise in the level of employment', b: 'Demand rises as more households have wages, but it is harder to hire and wages may rise. Businesses selling non-essentials tend to gain.' },
      { n: 7, f: 'How do changes in consumer incomes affect spending?', b: 'Income up: more spending, especially on items people can postpone. Income down: luxuries and postponable items fall most, necessities change little, and cheaper alternatives may gain.' },
      { n: 8, f: '2,000 units sell at £12. Sales volume falls by 25%. What is the new revenue?', b: 'Original revenue = £24,000. New volume = 1,500, so revenue = £18,000, a fall of £6,000.' },
    ]),
    ...sub(INF, 'globalisation-oxfordaqa-igcse-business', '3.2.4', [
      { n: 1, f: 'Globalisation', b: 'The growing links between countries through trade, investment, people and communication.' },
      { n: 2, f: 'The five forms of globalisation in the specification', b: 'Specialisation by country, relative cost advantage, movement of labour, larger markets, and international competition.' },
      { n: 3, f: 'Relative cost advantage', b: 'Being able to produce at lower cost than other countries or firms, so production tends to move to the lower-cost site.' },
      { n: 4, f: 'Globalisation for a developed-country business', b: 'Benefits: bigger markets and cheaper inputs.\nDrawbacks: low-cost rivals and jobs moving abroad.' },
      { n: 5, f: 'Globalisation for a developing-country business and economy', b: 'Business: export orders, investment and skills, but strong multinational rivals and dependence on a few buyers.\nEconomy: jobs, tax and technology, but profits leave, local firms close and skilled workers leave.' },
      { n: 6, f: 'Home currency strengthens: effects on exporters and importers', b: 'Exporter: overseas prices rise, so sales may fall.\nImporter: inputs are cheaper, so costs may fall.\nA weaker currency has the reverse effects.' },
      { n: 7, f: 'Effects of severe exchange rate fluctuations, and responses', b: 'Unpredictable costs, difficulty setting prices, uncertain profit and harder investment decisions.\nResponses: agree prices in advance, use home suppliers, sell in several countries.' },
      { n: 8, f: 'Exchange rate', b: 'The price of one currency in terms of another. (Exchange rate conversions are not required on 9225.)' },
    ]),
    ...sub(INF, 'legislation-oxfordaqa-igcse-business', '3.2.5', [
      { n: 1, f: 'The three areas of law in section 3.2.5', b: 'Employment law, health and safety law, and consumer law.' },
      { n: 2, f: 'Legislation and ethics: the difference', b: 'Legislation is a legal requirement, with fines or legal action for failing to comply. Ethics is a choice beyond the legal minimum.' },
      { n: 3, f: 'The four effects of legislation to assess', b: 'Cost, training needs, recruitment, and the consequences of failing to follow the law.' },
      { n: 4, f: 'Consequences of failing to comply with the law', b: 'Fines and legal costs, compensation to staff or customers, forced changes to operations, reputation damage and lost sales, and trouble recruiting and keeping staff.' },
      { n: 5, f: 'National minimum wage: benefits and drawbacks for a business', b: 'Benefits: better motivation and lower turnover, workers have more to spend, rivals face the same floor.\nDrawbacks: a higher wage bill, pay pressure above the minimum, higher prices or lower profit.' },
      { n: 6, f: 'Laws requiring a safe working environment: benefits and drawbacks', b: 'Benefits: fewer accidents, less absence, better morale and reputation, a level playing field.\nDrawbacks: equipment and training costs, time on checks and records, disruption.' },
      { n: 7, f: 'Consumer protection laws: impacts on a business', b: 'Quality checks, clear product information, refunds and repairs, staff trained in complaints. They build customer trust and protect honest firms from rivals who mislead.' },
      { n: 8, f: '10 workers each work 35 hours a week for 52 weeks. Their pay rises by £0.50 an hour. Extra yearly cost?', b: '10 × 35 × 52 × 0.50 = £9,100' },
    ]),
    ...sub(INF, 'competitive-environment-oxfordaqa-igcse-business', '3.2.6', [
      { n: 1, f: 'Market and competition', b: 'Market: where buyers and sellers trade a good or service.\nCompetition: two or more businesses trying to win the same customers.' },
      { n: 2, f: 'Impacts of competition on a business', b: 'Prices or margins pushed down, lost sales or market share, more spending on marketing and service, pressure to improve quality and range. How big the impact is depends on loyalty and how different the product is.' },
      { n: 3, f: 'When might a business face minimal or no competition?', b: 'It is the only seller in an area, holds a patent, licence or exclusive right, start-up costs are very high, the product is highly specialised, or supply is government-controlled.' },
      { n: 4, f: 'Risk and uncertainty', b: 'Risk: a chance of something harming the business.\nUncertainty: the future cannot be known, so outcomes are unpredictable.' },
      { n: 5, f: 'Why do all businesses face uncertainty?', b: 'Tastes change, rivals act, costs, interest rates and exchange rates move, technology develops and the economy shifts.' },
      { n: 6, f: 'Why do entrepreneurs take risks?', b: 'For profit, independence, turning an idea into a business, meeting a need and personal satisfaction.' },
      { n: 7, f: 'Ways to minimise business risk', b: 'Market research, a business plan and forecasts, insurance, a wider product or market range, cash reserves, and good relations with suppliers and customers.' },
      { n: 8, f: 'How can developing-country businesses compete with developed-country rivals?', b: 'Through a lower cost advantage (often lower labour costs) and local materials, skills or niche products. Limits: transport times, quality consistency, exchange rates, and rivals’ brands and service.' },
    ]),

    // 3 Business operations
    ...topicOnly('business-operations-oxfordaqa-igcse-business', '3', [
      { n: 1, f: 'Job, batch, flow and cell production', b: 'Job: one item made to order.\nBatch: identical items in groups, one group after another.\nFlow: continuous production of a standard product.\nCell: small teams each making a whole part or product.' },
      { n: 2, f: 'Efficiency, and two ways of improving it', b: 'More output from the resources used, or the same output from fewer, so unit cost falls. Ways: just-in-time (JIT) and Kaizen (many small improvements suggested by employees at every level).' },
      { n: 3, f: 'JIT and buffer stock compared', b: 'JIT: lower storage costs and less cash tied up, but more deliveries, lost bulk discounts, and production stops if a delivery is late.\nBuffer stock: spare stock to meet unexpected demand, but storage, insurance and cash tied up.' },
      { n: 4, f: 'Factors in choosing a supplier', b: 'Price (the total cost once delivery, discounts and credit terms are included), quality, and reliability.' },
      { n: 5, f: 'A supplier charges 3.60 but 10% of its goods are unusable. What is the cost per usable unit?', b: '3.60 ÷ 0.90 = 4.00 per usable unit.' },
      { n: 6, f: 'Total quality management (TQM): what it is, one advantage and one disadvantage', b: 'Every employee in every department is responsible for quality, and faults are prevented at each stage.\nFor: fewer defects and less waste.\nAgainst: training and time to introduce, and it needs managers’ commitment.' },
      { n: 7, f: 'Consequences of poor quality', b: 'Refunds and replacements, lost sales, a damaged reputation, lost loyalty, low staff morale and possible legal problems.' },
      { n: 8, f: 'Why can quality be harder to keep as a business grows?', b: 'Managers are further from daily work; with outsourcing there is less control over the other firm’s standards; with franchising one weak outlet can damage the brand.' },
      { n: 9, f: 'Elements of good customer service', b: 'Product knowledge, customer engagement (greeting, listening, quick problem handling) and post-sales services (user training, help lines, servicing).' },
      { n: 10, f: 'Benefits of good customer service and dangers of poor service', b: 'Good: satisfaction and loyalty, repeat custom, good word of mouth.\nPoor: dissatisfied customers, a poor reputation, lost sales.' },
    ]),

    // 4 Human resources
    ...topicOnly('human-resources-oxfordaqa-igcse-business', '4', [
      { n: 1, f: 'Span of control and chain of command', b: 'Span of control: the number of people directly under one manager.\nChain of command: the path of authority linking the highest and lowest posts.' },
      { n: 2, f: 'Delegation and delayering', b: 'Delegation: passing authority for a task, and the right to decide about it, to someone lower down.\nDelayering: removing one or more levels from the structure.' },
      { n: 3, f: 'Tall and flat structures', b: 'Tall: many levels, narrow spans, slower communication, close supervision, higher management cost.\nFlat: few levels, wide spans, faster communication, more freedom, managers stretched.' },
      { n: 4, f: 'Centralised and decentralised structures', b: 'Centralised: decisions at the top; consistent and tightly controlled, but slow.\nDecentralised: decisions lower down; quick and local, but less control and risk of inconsistency.' },
      { n: 5, f: 'Internal and external recruitment', b: 'Internal: cheaper, quicker, a known person, promotion motivates; but a small choice and no new ideas.\nExternal: wider choice and new skills; but slower, dearer and riskier.' },
      { n: 6, f: 'Stages of recruitment and selection, in order', b: 'Identify the vacancy, write the job description and person specification, advertise, applications and shortlist, interviews and tests, then references, offer and acceptance.' },
      { n: 7, f: 'Salary, wage, commission and profit sharing', b: 'Salary: fixed yearly pay. Wage: pay per hour or week.\nCommission: a percentage of own sales. Profit sharing: a share of the business’s profit.' },
      { n: 8, f: 'Non-financial methods of motivation in the specification', b: 'Styles of management (consulting and trusting staff), training, greater responsibility, and fringe benefits such as discounts, meals or health cover.' },
      { n: 9, f: 'Induction, on-the-job and off-the-job training', b: 'Induction: introduces new starters to the business, rules and job.\nOn the job: learning at work, such as shadowing; cheap and practical, but bad habits may pass on.\nOff the job: away from work, such as a course; specialist teaching, but fees and time away.' },
      { n: 10, f: 'A business with 30 employees makes £180,000 profit and shares 4% of it equally. What does each employee get?', b: '0.04 × 180,000 = £7,200 ÷ 30 = £240 each.' },
    ]),

    // 5 Marketing
    ...topicOnly('marketing-oxfordaqa-igcse-business', '5', [
      { n: 1, f: 'Market segmentation, and the types in the specification', b: 'Dividing customers into groups with shared characteristics, so product, price and message fit each group. Types: gender, age, location and income.' },
      { n: 2, f: 'Purposes of market research', b: 'To identify market opportunities, gain insight into customers and competitors, and reduce the risk of launching the wrong product.' },
      { n: 3, f: 'Primary and secondary research; quantitative and qualitative data', b: 'Primary: first-hand and new. Secondary: existing information collected by others.\nQuantitative: numbers and counts. Qualitative: opinions and reasons.' },
      { n: 4, f: 'Why can market research be inaccurate?', b: 'A sample too small or unrepresentative, leading or unclear questions, dishonest or biased answers, out-of-date data, and misreading the results.' },
      { n: 5, f: 'Pricing methods in the notes', b: 'Cost-plus (unit cost plus a mark-up), skimming (start high, cut later), penetration (start low to gain share), competitive (near rivals) and loss-leader (below cost to bring in shoppers).' },
      { n: 6, f: 'A product costs 30 and sells for 39. Find the mark-up and the margin.', b: 'Profit = 9.\nMark-up = 9 ÷ 30 × 100 = 30% of cost.\nMargin = 9 ÷ 39 × 100 ≈ 23.1% of selling price.' },
      { n: 7, f: 'Unique selling point (USP)', b: 'A feature or benefit that rivals lack, giving customers a reason to choose the product and sometimes allowing a higher price.' },
      { n: 8, f: 'Product life cycle stages and extension strategies', b: 'Introduction (low sales), growth (rising quickly), maturity (peak, flat), decline (falling).\nExtension strategies, used at maturity or early decline: new packaging, uses, markets, price, design or promotion.' },
      { n: 9, f: 'Factors in selecting a promotion method', b: 'The target market, the marketing budget, competitors’ activities and the type of product.' },
      { n: 10, f: 'Distribution channels', b: 'Direct: producer to customer.\nRetailer: producer, retailer, customer.\nWholesaler: producer, wholesaler, retailer, customer.' },
      { n: 11, f: 'Integrated marketing mix', b: 'Product, price, promotion and place set to fit each other and the target segment. Mismatched elements, such as a luxury image with a bargain price, confuse buyers.' },
    ]),

    // 6 Finance
    ...topicOnly('finance-oxfordaqa-igcse-business', '6', [
      { n: 1, f: 'Internal and external sources of finance', b: 'Internal: retained profit and selling unwanted assets.\nExternal: family and friends, a new share issue, loans or mortgages, overdrafts, trade credit, crowdfunding, and government or charitable grants and loans.' },
      { n: 2, f: 'Why do new and established businesses differ in raising finance?', b: 'A new business has no track record, so lenders see more risk. An established business has a profit history, assets and credibility.' },
      { n: 3, f: 'Net cash flow and closing balance', b: 'Net cash flow = inflows − outflows.\nClosing balance = opening balance + net cash flow.\nExample: opening 2,000, inflows 6,500, outflows 7,200: net −700, closing 1,300.' },
      { n: 4, f: 'Ways to solve a cash flow problem', b: 'Re-schedule payments, an overdraft, reduce cash outflows, increase cash inflows (chase debtors, prompt-payment discounts, sell assets), or new sources of finance.' },
      { n: 5, f: 'Margin of safety, and an example', b: 'Margin of safety = actual or planned output − break-even output.\nBreak-even 800 units, planned 1,100 units: margin of safety = 300 units.' },
      { n: 6, f: 'Payback period: cost 24,000, net inflows 8,000, 12,000 and 15,000 a year', b: 'After two years 20,000 is repaid. Remaining 4,000 ÷ 15,000 ≈ 0.27 of a year, about 3 months.\nPayback ≈ 2 years 3 months.' },
      { n: 7, f: 'Assets', b: 'Owned by, or owed to, the business (non-current and current).', src: FIN },
      { n: 8, f: 'Liabilities', b: 'Owed by the business (current and non-current).', src: FIN },
      { n: 9, f: 'Gross profit margin and net profit margin', b: 'Gross profit margin = gross profit ÷ revenue × 100.\nNet profit margin = net profit ÷ revenue × 100.' },
      { n: 10, f: 'Revenue 80,000, cost of sales 52,000, expenses 20,000. Find both margins.', b: 'Gross profit = 28,000, margin 35%.\nNet profit = 8,000, margin 10%.' },
      { n: 11, f: 'Four comparisons for judging financial performance', b: 'Current performance, previous years, competitors, and the view of each stakeholder (owners, lenders, employees, suppliers).' },
    ]),
  ],
};
