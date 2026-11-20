/**
 * D-444 -- flashcards for OxfordAQA International GCSE Business 9225
 * (first teaching September 2020, first examined May/June 2022).
 *
 * The syllabus record itemises subtopics for all six topics (3.1.1 to 3.6.4), so
 * every card uses an id `<subtopic number>-<n>` and names its subtopic. The deck
 * first filed topics 1 and 3 to 6 on the topic itself; on 20 Nov 2026 their cards
 * were re-filed under the subtopics and renumbered, and `idMigration` below moves
 * browser progress saved before then onto the new ids. Card text is unchanged.
 * Ids are permanent: add a new card with the next unused n, never renumber.
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
  updated: '2026-11-20',
  deckReview: { reviewerSlug: 'salman-ahmad', reviewedOn: '2026-11-05' },
  // Old id -> new id for every card, so progress saved before the cards were re-filed under
  // the new subtopics follows each card. Runs once per browser, on marks dated before 2026-11-20.
  idMigration: {
    id: '9225-subtopics-2026-11-20',
    before: '2026-11-20',
    map: {
      '1-1': '3.1.1-1', '1-2': '3.1.1-2', '1-3': '3.1.1-3', '1-4': '3.1.2-1', '1-5': '3.1.2-2', '1-6': '3.1.2-3',
      '1-7': '3.1.2-4', '1-8': '3.1.2-5', '1-9': '3.1.7-1', '1-10': '3.1.7-2', '1-11': '3.1.7-3', '1-12': '3.1.5-1',
      '3.2.1-1': '3.2.1-1', '3.2.1-2': '3.2.1-2', '3.2.1-3': '3.2.1-3', '3.2.1-4': '3.2.1-4', '3.2.1-5': '3.2.1-5', '3.2.1-6': '3.2.1-6',
      '3.2.1-7': '3.2.1-7', '3.2.1-8': '3.2.1-8',
      '3.2.2-1': '3.2.2-1', '3.2.2-2': '3.2.2-2', '3.2.2-3': '3.2.2-3', '3.2.2-4': '3.2.2-4', '3.2.2-5': '3.2.2-5', '3.2.2-6': '3.2.2-6',
      '3.2.2-7': '3.2.2-7', '3.2.2-8': '3.2.2-8',
      '3.2.3-1': '3.2.3-1', '3.2.3-2': '3.2.3-2', '3.2.3-3': '3.2.3-3', '3.2.3-4': '3.2.3-4', '3.2.3-5': '3.2.3-5', '3.2.3-6': '3.2.3-6',
      '3.2.3-7': '3.2.3-7', '3.2.3-8': '3.2.3-8',
      '3.2.4-1': '3.2.4-1', '3.2.4-2': '3.2.4-2', '3.2.4-3': '3.2.4-3', '3.2.4-4': '3.2.4-4', '3.2.4-5': '3.2.4-5', '3.2.4-6': '3.2.4-6',
      '3.2.4-7': '3.2.4-7', '3.2.4-8': '3.2.4-8',
      '3.2.5-1': '3.2.5-1', '3.2.5-2': '3.2.5-2', '3.2.5-3': '3.2.5-3', '3.2.5-4': '3.2.5-4', '3.2.5-5': '3.2.5-5', '3.2.5-6': '3.2.5-6',
      '3.2.5-7': '3.2.5-7', '3.2.5-8': '3.2.5-8',
      '3.2.6-1': '3.2.6-1', '3.2.6-2': '3.2.6-2', '3.2.6-3': '3.2.6-3', '3.2.6-4': '3.2.6-4', '3.2.6-5': '3.2.6-5', '3.2.6-6': '3.2.6-6',
      '3.2.6-7': '3.2.6-7', '3.2.6-8': '3.2.6-8',
      '3-1': '3.3.1-1', '3-2': '3.3.1-2', '3-3': '3.3.2-1', '3-4': '3.3.2-2', '3-5': '3.3.2-3', '3-6': '3.3.3-1',
      '3-7': '3.3.3-2', '3-8': '3.3.3-3', '3-9': '3.3.4-1', '3-10': '3.3.4-2',
      '4-1': '3.4.1-1', '4-2': '3.4.1-2', '4-3': '3.4.1-3', '4-4': '3.4.1-4', '4-5': '3.4.2-1', '4-6': '3.4.2-2',
      '4-7': '3.4.3-1', '4-8': '3.4.3-2', '4-9': '3.4.4-1', '4-10': '3.4.3-3',
      '5-1': '3.5.2-1', '5-2': '3.5.3-1', '5-3': '3.5.3-2', '5-4': '3.5.3-3', '5-5': '3.5.4-1', '5-6': '3.5.4-2',
      '5-7': '3.5.4-3', '5-8': '3.5.4-4', '5-9': '3.5.4-5', '5-10': '3.5.4-6', '5-11': '3.5.4-7',
      '6-1': '3.6.1-1', '6-2': '3.6.1-2', '6-3': '3.6.2-1', '6-4': '3.6.2-2', '6-5': '3.6.3-1', '6-6': '3.6.3-2',
      '6-7': '3.6.4-1', '6-8': '3.6.4-2', '6-9': '3.6.4-3', '6-10': '3.6.4-4', '6-11': '3.6.4-5',
    },
  },
  cards: [
    // 1 Business in the real world
    ...sub('business-in-the-real-world-oxfordaqa-igcse-business', 'the-purpose-and-nature-of-businesses-oxfordaqa-igcse-business', '3.1.1', [
      { n: 1, f: 'Needs, wants and opportunity cost', b: 'Needs are essential; wants are desirable but not essential.\nOpportunity cost is the next best alternative given up when a choice is made.' },
      { n: 2, f: 'Added value', b: 'Added value = selling price − cost of bought-in materials. It is not profit: wages, rent and overheads still have to be paid from it.' },
      { n: 3, f: 'The three business sectors and how they depend on each other', b: 'Primary (extraction), secondary (manufacturing), tertiary (services). They are interdependent: a manufacturer needs primary raw materials and tertiary transport, retail and finance.' },
    ]),
    ...sub('business-in-the-real-world-oxfordaqa-igcse-business', 'business-ownership-oxfordaqa-igcse-business', '3.1.2', [
      { n: 1, f: 'Unlimited and limited liability', b: 'Unlimited liability: the owner’s personal assets can be taken to pay business debts.\nLimited liability: the owner can lose only the amount invested.' },
      { n: 2, f: 'Sole trader', b: 'Unlimited liability. For: easy to set up, all the profit, full control, privacy. Against: all the risk, limited capital, long hours, no continuity.', src: RW },
      { n: 3, f: 'Private limited company (Ltd)', b: 'Limited liability. For: separate legal identity, easier to raise capital, continuity. Against: formation costs, accounts must be filed, shares not publicly traded.', src: RW },
      { n: 4, f: 'Public limited company (plc)', b: 'Limited liability. For: large capital via the stock exchange, prestige. Against: expensive, public accounts, takeover risk, divorce of ownership from control.', src: RW },
      { n: 5, f: 'Is franchising a form of ownership?', b: 'No. It is a way of setting up or growing. The franchisee trades as a sole trader, partnership or company, and that choice decides liability. The franchisee gets a proven brand and support but pays fees and royalties.' },
    ]),
    ...sub('business-in-the-real-world-oxfordaqa-igcse-business', 'setting-business-aims-and-objectives-oxfordaqa-igcse-business', '3.1.3', [
      { n: 1, f: 'Aim vs objective', b: 'An aim is a long-term, general goal, such as being the leading bakery in the region. An objective is a shorter-term, specific and measurable target, such as raising sales by 10% in 12 months.', src: 'oxfordaqa-igcse-business-9225-setting-business-aims-and-objectives-revision-notes' },
      { n: 2, f: 'Why do businesses set objectives?', b: 'They give direction and focus, motivate staff, help decision making, allow success to be measured and help departments work together. Lenders and investors also want to see the targets.', src: 'oxfordaqa-igcse-business-9225-setting-business-aims-and-objectives-revision-notes' },
      { n: 3, f: 'The main business objectives', b: 'Survival, profit maximisation, growth (domestic and international), market share, customer satisfaction, social and ethical objectives, and shareholder value.', src: 'oxfordaqa-igcse-business-9225-setting-business-aims-and-objectives-revision-notes' },
      { n: 4, f: 'Market share and growth formulae, with an example', b: 'Market share (%) = business sales ÷ total market sales × 100. Growth (%) = (new − old) ÷ old × 100. Example: $2.4 million in a $12 million market is 20%.', src: 'oxfordaqa-igcse-business-9225-setting-business-aims-and-objectives-revision-notes' },
      { n: 5, f: 'Why do objectives differ between businesses, and why do they change?', b: 'Differ with size, competition and type of business (not-for-profit organisations aim to help people). Change as a business evolves, in a downturn (growth to survival) or when new laws or public concern add ethical goals.', src: 'oxfordaqa-igcse-business-9225-setting-business-aims-and-objectives-revision-notes' },
      { n: 6, f: 'Objectives of public sector organisations', b: 'To provide services to everyone, such as healthcare, education and transport, to stay within a budget funded by taxes, and to meet service standards such as shorter waiting times. They are not driven by profit.', src: 'oxfordaqa-igcse-business-9225-setting-business-aims-and-objectives-revision-notes' },
      { n: 7, f: 'Ways to judge success other than profit', b: 'Market share target reached, customer satisfaction scores, survival for a set number of years, staff retention, ethical or environmental targets met, and people helped for a charity.', src: 'oxfordaqa-igcse-business-9225-setting-business-aims-and-objectives-revision-notes' },
      { n: 8, f: 'Why do governments encourage new businesses, and how do they help?', b: 'New businesses create jobs, bring in tax, provide new products and support the economy. Help includes grants and cheap loans, training and advice, lower taxes for small firms and support centres.', src: 'oxfordaqa-igcse-business-9225-setting-business-aims-and-objectives-revision-notes' },
      { n: 9, f: 'Common reasons why new businesses fail', b: 'Poor cash flow, too little planning or market research, poor management or inexperience, strong competition, too little finance, and changes in the economy or the law.', src: 'oxfordaqa-igcse-business-9225-setting-business-aims-and-objectives-revision-notes' },
    ]),
    ...sub('business-in-the-real-world-oxfordaqa-igcse-business', 'stakeholders-oxfordaqa-igcse-business', '3.1.4', [
      { n: 1, f: 'Stakeholder vs shareholder, and the six main stakeholders', b: 'A stakeholder is any person or group with an interest in, or affected by, a business. A shareholder is an owner of shares and is one type. The six: owners, employees, customers, local community, government, suppliers.', src: 'oxfordaqa-igcse-business-9225-stakeholders-revision-notes' },
      { n: 2, f: 'What does each stakeholder want from a business?', b: 'Owners: high profit and dividends. Employees: high pay, job security, good conditions. Customers: quality, fair prices, good service. Community: low pollution and noise, jobs. Government: tax and legal compliance. Suppliers: regular orders and prompt payment.', src: 'oxfordaqa-igcse-business-9225-stakeholders-revision-notes' },
      { n: 3, f: 'How can stakeholders influence a business?', b: 'Owners by voting and deciding use of profit; employees by working less or leaving, strikes or unions; customers by buying elsewhere; community by protests; government by laws and taxes; suppliers by raising prices or refusing supply.', src: 'oxfordaqa-igcse-business-9225-stakeholders-revision-notes' },
      { n: 4, f: 'What gives a stakeholder influence over a business?', b: 'Power to cause serious harm or benefit, numbers acting together, importance (such as a sole supplier of a key part) and legal power, as the government has.', src: 'oxfordaqa-igcse-business-9225-stakeholders-revision-notes' },
      { n: 5, f: 'Typical conflicts between stakeholders', b: 'Employees and owners: higher pay cuts dividends. Customers and owners: lower prices cut profit. Community and owners: expansion brings jobs but also noise. Suppliers and owners: late payment helps cash but hurts suppliers.', src: 'oxfordaqa-igcse-business-9225-stakeholders-revision-notes' },
      { n: 6, f: 'A 4% pay rise on a $1,200,000 wage bill: cost and effect on profit of $200,000?', b: 'Cost = 4% × $1,200,000 = $48,000. Profit left for dividends is $152,000, a 24% fall. This shows why higher pay and higher dividends conflict.', src: 'oxfordaqa-igcse-business-9225-stakeholders-revision-notes' },
      { n: 7, f: 'Ways of resolving conflicts between stakeholders', b: 'Consult stakeholders and explain decisions, compromise so each group gets something, prioritise the stakeholders who matter most to long-term success, and find joint benefits such as training that raises skills and quality.', src: 'oxfordaqa-igcse-business-9225-stakeholders-revision-notes' },
    ]),
    ...sub('business-in-the-real-world-oxfordaqa-igcse-business', 'business-location-oxfordaqa-igcse-business', '3.1.5', [
      { n: 1, f: 'Why do weight-losing industries locate near raw materials?', b: 'The finished product is lighter than its inputs, so it is cheaper to transport the product than the raw materials. Weight-gaining and service industries locate near the market.' },
    ]),
    ...sub('business-in-the-real-world-oxfordaqa-igcse-business', 'business-planning-oxfordaqa-igcse-business', '3.1.6', [
      { n: 1, f: 'Four reasons why businesses make plans', b: 'To set up a new business by thinking through the idea, costs and risks; to raise finance; to set objectives and targets; and to organise functions such as production, marketing, staffing and finance.', src: 'oxfordaqa-igcse-business-9225-business-planning-revision-notes' },
      { n: 2, f: 'Main sections of a business plan', b: 'Executive summary, business description, aims and objectives, market research, marketing plan, operations plan, human resources plan and financial plan.', src: 'oxfordaqa-igcse-business-9225-business-planning-revision-notes' },
      { n: 3, f: 'Benefits and drawbacks of business planning', b: 'Benefits: clearer thinking about risks, easier to raise finance, targets to measure progress, fewer costly mistakes. Drawbacks: takes time, forecasts can be wrong, plans go out of date. A plan improves the chance of success but does not guarantee it.', src: 'oxfordaqa-igcse-business-9225-business-planning-revision-notes' },
      { n: 4, f: 'Fixed costs vs variable costs, with examples', b: 'Fixed costs do not change with output in the short term (rent, insurance, salaries). Variable costs change with output (materials, packaging, hourly labour). Total costs = fixed + variable.', src: 'oxfordaqa-igcse-business-9225-business-planning-revision-notes' },
      { n: 5, f: 'Revenue, profit and loss formulae', b: 'Revenue = price × quantity. Profit = revenue − total costs. A loss occurs when total costs are higher than revenue.', src: 'oxfordaqa-igcse-business-9225-business-planning-revision-notes' },
      { n: 6, f: 'Fixed costs $2,400, variable cost $1.20 a loaf, price $3. Profit at 1,000 and 3,000 loaves?', b: 'At 1,000: revenue $3,000, total costs $2,400 + $1,200 = $3,600, so loss $600. At 3,000: revenue $9,000, total costs $6,000, so profit $3,000.', src: 'oxfordaqa-igcse-business-9225-business-planning-revision-notes' },
      { n: 7, f: 'Why does a bank want to see a business plan before lending to a start-up?', b: 'It shows there is a market, the cash flow forecast shows whether repayments are possible, and it shows the owner has thought about costs and competitors. The bank also checks that forecasts are realistic.', src: 'oxfordaqa-igcse-business-9225-business-planning-revision-notes' },
    ]),
    ...sub('business-in-the-real-world-oxfordaqa-igcse-business', 'expanding-a-business-oxfordaqa-igcse-business', '3.1.7', [
      { n: 1, f: 'Horizontal and conglomerate integration', b: 'Horizontal: same industry, same stage, such as buying a competitor.\nConglomerate: an unrelated industry, which spreads risk.', src: RW },
      { n: 2, f: 'Vertical forward and vertical backward integration', b: 'Forward: towards the customer, such as buying a retailer.\nBackward: towards the supplier, securing inputs.', src: RW },
      { n: 3, f: 'Economies and diseconomies of scale', b: 'Economies of scale reduce average cost as output rises (purchasing, technical, financial, marketing, managerial). Diseconomies raise average cost when a firm grows too large (poor communication, weak coordination, falling motivation).' },
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
    ...sub('business-operations-oxfordaqa-igcse-business', 'production-processes-oxfordaqa-igcse-business', '3.3.1', [
      { n: 1, f: 'Job, batch, flow and cell production', b: 'Job: one item made to order.\nBatch: identical items in groups, one group after another.\nFlow: continuous production of a standard product.\nCell: small teams each making a whole part or product.' },
      { n: 2, f: 'Efficiency, and two ways of improving it', b: 'More output from the resources used, or the same output from fewer, so unit cost falls. Ways: just-in-time (JIT) and Kaizen (many small improvements suggested by employees at every level).' },
    ]),
    ...sub('business-operations-oxfordaqa-igcse-business', 'the-role-of-procurement-oxfordaqa-igcse-business', '3.3.2', [
      { n: 1, f: 'JIT and buffer stock compared', b: 'JIT: lower storage costs and less cash tied up, but more deliveries, lost bulk discounts, and production stops if a delivery is late.\nBuffer stock: spare stock to meet unexpected demand, but storage, insurance and cash tied up.' },
      { n: 2, f: 'Factors in choosing a supplier', b: 'Price (the total cost once delivery, discounts and credit terms are included), quality, and reliability.' },
      { n: 3, f: 'A supplier charges 3.60 but 10% of its goods are unusable. What is the cost per usable unit?', b: '3.60 ÷ 0.90 = 4.00 per usable unit.' },
    ]),
    ...sub('business-operations-oxfordaqa-igcse-business', 'the-concept-of-quality-oxfordaqa-igcse-business', '3.3.3', [
      { n: 1, f: 'Total quality management (TQM): what it is, one advantage and one disadvantage', b: 'Every employee in every department is responsible for quality, and faults are prevented at each stage.\nFor: fewer defects and less waste.\nAgainst: training and time to introduce, and it needs managers’ commitment.' },
      { n: 2, f: 'Consequences of poor quality', b: 'Refunds and replacements, lost sales, a damaged reputation, lost loyalty, low staff morale and possible legal problems.' },
      { n: 3, f: 'Why can quality be harder to keep as a business grows?', b: 'Managers are further from daily work; with outsourcing there is less control over the other firm’s standards; with franchising one weak outlet can damage the brand.' },
    ]),
    ...sub('business-operations-oxfordaqa-igcse-business', 'good-customer-services-oxfordaqa-igcse-business', '3.3.4', [
      { n: 1, f: 'Elements of good customer service', b: 'Product knowledge, customer engagement (greeting, listening, quick problem handling) and post-sales services (user training, help lines, servicing).' },
      { n: 2, f: 'Benefits of good customer service and dangers of poor service', b: 'Good: satisfaction and loyalty, repeat custom, good word of mouth.\nPoor: dissatisfied customers, a poor reputation, lost sales.' },
    ]),

    // 4 Human resources
    ...sub('human-resources-oxfordaqa-igcse-business', 'organisational-structures-oxfordaqa-igcse-business', '3.4.1', [
      { n: 1, f: 'Span of control and chain of command', b: 'Span of control: the number of people directly under one manager.\nChain of command: the path of authority linking the highest and lowest posts.' },
      { n: 2, f: 'Delegation and delayering', b: 'Delegation: passing authority for a task, and the right to decide about it, to someone lower down.\nDelayering: removing one or more levels from the structure.' },
      { n: 3, f: 'Tall and flat structures', b: 'Tall: many levels, narrow spans, slower communication, close supervision, higher management cost.\nFlat: few levels, wide spans, faster communication, more freedom, managers stretched.' },
      { n: 4, f: 'Centralised and decentralised structures', b: 'Centralised: decisions at the top; consistent and tightly controlled, but slow.\nDecentralised: decisions lower down; quick and local, but less control and risk of inconsistency.' },
    ]),
    ...sub('human-resources-oxfordaqa-igcse-business', 'recruitment-and-selection-of-employees-oxfordaqa-igcse-business', '3.4.2', [
      { n: 1, f: 'Internal and external recruitment', b: 'Internal: cheaper, quicker, a known person, promotion motivates; but a small choice and no new ideas.\nExternal: wider choice and new skills; but slower, dearer and riskier.' },
      { n: 2, f: 'Stages of recruitment and selection, in order', b: 'Identify the vacancy, write the job description and person specification, advertise, applications and shortlist, interviews and tests, then references, offer and acceptance.' },
    ]),
    ...sub('human-resources-oxfordaqa-igcse-business', 'motivating-employees-oxfordaqa-igcse-business', '3.4.3', [
      { n: 1, f: 'Salary, wage, commission and profit sharing', b: 'Salary: fixed yearly pay. Wage: pay per hour or week.\nCommission: a percentage of own sales. Profit sharing: a share of the business’s profit.' },
      { n: 2, f: 'Non-financial methods of motivation in the specification', b: 'Styles of management (consulting and trusting staff), training, greater responsibility, and fringe benefits such as discounts, meals or health cover.' },
      { n: 3, f: 'A business with 30 employees makes £180,000 profit and shares 4% of it equally. What does each employee get?', b: '0.04 × 180,000 = £7,200 ÷ 30 = £240 each.' },
    ]),
    ...sub('human-resources-oxfordaqa-igcse-business', 'training-oxfordaqa-igcse-business', '3.4.4', [
      { n: 1, f: 'Induction, on-the-job and off-the-job training', b: 'Induction: introduces new starters to the business, rules and job.\nOn the job: learning at work, such as shadowing; cheap and practical, but bad habits may pass on.\nOff the job: away from work, such as a course; specialist teaching, but fees and time away.' },
    ]),

    // 5 Marketing
    ...sub('marketing-oxfordaqa-igcse-business', 'identifying-and-understanding-customers-oxfordaqa-igcse-business', '3.5.1', [
      { n: 1, f: 'Marketing, customer and target market', b: 'Marketing: identifying, anticipating and satisfying customer needs profitably. Customer: a person or organisation that buys from a business. Target market: the group of customers the business aims to sell to.', src: 'oxfordaqa-igcse-business-9225-identifying-and-understanding-customers-revision-notes' },
      { n: 2, f: 'Consumer vs business customer', b: 'A consumer is an individual or household buying for personal use. A business customer is an organisation buying to use or resell, and has different needs.', src: 'oxfordaqa-igcse-business-9225-identifying-and-understanding-customers-revision-notes' },
      { n: 3, f: 'Five types of customer need', b: 'Functional (the product does its job and is safe), price (value for money), convenience (easy to find, buy and use), emotional or social (status, belonging) and service (advice, aftercare, returns).', src: 'oxfordaqa-igcse-business-9225-identifying-and-understanding-customers-revision-notes' },
      { n: 4, f: 'Why is it important to identify customer needs?', b: 'The business sells products customers will buy, lowering the risk of failure. It increases sales, builds satisfaction and loyalty, stays ahead of competitors, uses resources wisely and spots changes and opportunities.', src: 'oxfordaqa-igcse-business-9225-identifying-and-understanding-customers-revision-notes' },
      { n: 5, f: 'What can happen if a business gets customer needs wrong?', b: 'Unsold stock and wasted costs, falling sales and profit, a poor reputation and wasted investment. Example: 6,000 of 20,000 bottles sold at $1.50 gives $9,000 against $20,000 cost, a loss of $11,000.', src: 'oxfordaqa-igcse-business-9225-identifying-and-understanding-customers-revision-notes' },
      { n: 6, f: 'Ways to find out what customers want', b: 'Sales records, customer feedback (complaints, reviews, comment cards), surveys and interviews, observation of behaviour and competitor analysis.', src: 'oxfordaqa-igcse-business-9225-identifying-and-understanding-customers-revision-notes' },
      { n: 7, f: 'Local vs national vs international markets: what must a business understand?', b: 'Local: local tastes, nearby rivals, what residents can afford. National: regional differences, national distribution and advertising. International: language, culture, religion, income, laws and standards, climate.', src: 'oxfordaqa-igcse-business-9225-identifying-and-understanding-customers-revision-notes' },
      { n: 8, f: 'Net gain from adapting a product for a new market: worked example', b: 'Net gain = extra profit − cost of adapting. Example: 3,200 extra units × $4 = $12,800 profit, less $12,000 adapting cost, gives a net gain of $800.', src: 'oxfordaqa-igcse-business-9225-identifying-and-understanding-customers-revision-notes' },
    ]),
    ...sub('marketing-oxfordaqa-igcse-business', 'market-segmentation-oxfordaqa-igcse-business', '3.5.2', [
      { n: 1, f: 'Market segmentation, and the types in the specification', b: 'Dividing customers into groups with shared characteristics, so product, price and message fit each group. Types: gender, age, location and income.' },
    ]),
    ...sub('marketing-oxfordaqa-igcse-business', 'the-purpose-and-methods-of-market-research-oxfordaqa-igcse-business', '3.5.3', [
      { n: 1, f: 'Purposes of market research', b: 'To identify market opportunities, gain insight into customers and competitors, and reduce the risk of launching the wrong product.' },
      { n: 2, f: 'Primary and secondary research; quantitative and qualitative data', b: 'Primary: first-hand and new. Secondary: existing information collected by others.\nQuantitative: numbers and counts. Qualitative: opinions and reasons.' },
      { n: 3, f: 'Why can market research be inaccurate?', b: 'A sample too small or unrepresentative, leading or unclear questions, dishonest or biased answers, out-of-date data, and misreading the results.' },
    ]),
    ...sub('marketing-oxfordaqa-igcse-business', 'the-elements-of-the-marketing-mix-price-product-promotion-and-place-4ps-oxfordaqa-igcse-business', '3.5.4', [
      { n: 1, f: 'Pricing methods in the notes', b: 'Cost-plus (unit cost plus a mark-up), skimming (start high, cut later), penetration (start low to gain share), competitive (near rivals) and loss-leader (below cost to bring in shoppers).' },
      { n: 2, f: 'A product costs 30 and sells for 39. Find the mark-up and the margin.', b: 'Profit = 9.\nMark-up = 9 ÷ 30 × 100 = 30% of cost.\nMargin = 9 ÷ 39 × 100 ≈ 23.1% of selling price.' },
      { n: 3, f: 'Unique selling point (USP)', b: 'A feature or benefit that rivals lack, giving customers a reason to choose the product and sometimes allowing a higher price.' },
      { n: 4, f: 'Product life cycle stages and extension strategies', b: 'Introduction (low sales), growth (rising quickly), maturity (peak, flat), decline (falling).\nExtension strategies, used at maturity or early decline: new packaging, uses, markets, price, design or promotion.' },
      { n: 5, f: 'Factors in selecting a promotion method', b: 'The target market, the marketing budget, competitors’ activities and the type of product.' },
      { n: 6, f: 'Distribution channels', b: 'Direct: producer to customer.\nRetailer: producer, retailer, customer.\nWholesaler: producer, wholesaler, retailer, customer.' },
      { n: 7, f: 'Integrated marketing mix', b: 'Product, price, promotion and place set to fit each other and the target segment. Mismatched elements, such as a luxury image with a bargain price, confuse buyers.' },
    ]),

    // 6 Finance
    ...sub('finance-oxfordaqa-igcse-business', 'sources-of-finance-oxfordaqa-igcse-business', '3.6.1', [
      { n: 1, f: 'Internal and external sources of finance', b: 'Internal: retained profit and selling unwanted assets.\nExternal: family and friends, a new share issue, loans or mortgages, overdrafts, trade credit, crowdfunding, and government or charitable grants and loans.' },
      { n: 2, f: 'Why do new and established businesses differ in raising finance?', b: 'A new business has no track record, so lenders see more risk. An established business has a profit history, assets and credibility.' },
    ]),
    ...sub('finance-oxfordaqa-igcse-business', 'cash-flow-oxfordaqa-igcse-business', '3.6.2', [
      { n: 1, f: 'Net cash flow and closing balance', b: 'Net cash flow = inflows − outflows.\nClosing balance = opening balance + net cash flow.\nExample: opening 2,000, inflows 6,500, outflows 7,200: net −700, closing 1,300.' },
      { n: 2, f: 'Ways to solve a cash flow problem', b: 'Re-schedule payments, an overdraft, reduce cash outflows, increase cash inflows (chase debtors, prompt-payment discounts, sell assets), or new sources of finance.' },
    ]),
    ...sub('finance-oxfordaqa-igcse-business', 'financial-terms-and-calculations-oxfordaqa-igcse-business', '3.6.3', [
      { n: 1, f: 'Margin of safety, and an example', b: 'Margin of safety = actual or planned output − break-even output.\nBreak-even 800 units, planned 1,100 units: margin of safety = 300 units.' },
      { n: 2, f: 'Payback period: cost 24,000, net inflows 8,000, 12,000 and 15,000 a year', b: 'After two years 20,000 is repaid. Remaining 4,000 ÷ 15,000 ≈ 0.27 of a year, about 3 months.\nPayback ≈ 2 years 3 months.' },
    ]),
    ...sub('finance-oxfordaqa-igcse-business', 'analysing-the-financial-performance-of-a-business-oxfordaqa-igcse-business', '3.6.4', [
      { n: 1, f: 'Assets', b: 'Owned by, or owed to, the business (non-current and current).', src: FIN },
      { n: 2, f: 'Liabilities', b: 'Owed by the business (current and non-current).', src: FIN },
      { n: 3, f: 'Gross profit margin and net profit margin', b: 'Gross profit margin = gross profit ÷ revenue × 100.\nNet profit margin = net profit ÷ revenue × 100.' },
      { n: 4, f: 'Revenue 80,000, cost of sales 52,000, expenses 20,000. Find both margins.', b: 'Gross profit = 28,000, margin 35%.\nNet profit = 8,000, margin 10%.' },
      { n: 5, f: 'Four comparisons for judging financial performance', b: 'Current performance, previous years, competitors, and the view of each stakeholder (owners, lenders, employees, suppliers).' },
    ]),
  ],
};
