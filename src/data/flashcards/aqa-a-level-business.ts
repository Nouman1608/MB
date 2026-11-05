/**
 * D-438 -- flashcards for AQA A-level Business 7132 (for first teaching from
 * September 2023).
 *
 * One block per subtopic, in syllabus order; topics 3-10 list no subtopics in
 * the syllabus record, so their cards sit on the topic (topicOnly helper). Card
 * ids are `<subtopic number>-<n>` (or `<topic number>-<n>`) and are permanent
 * (browser progress is keyed by them): add a new card with the next unused n,
 * never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 7132); origin 'revision-notes'.
 *
 * Written from Marlbridge's own 7132 revision notes and study guides. Formulas
 * the specification names without printing are given in their standard forms.
 * Not tiered. Plain text only (see types.ts). Unicode for symbols.
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

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const LEAD = 'aqa-a-level-business-understanding-management-leadership-and-decision-making-revision-notes';
const DEC = 'aqa-a-level-business-understanding-management-decision-making-revision-notes';
const CHG = 'aqa-a-level-business-managing-strategic-change-revision-notes';

const T1 = 'what-is-business-aqa-alevel-business';
const T2 = 'managers-leadership-and-decision-making-aqa-alevel-business';

export const DECK_AQA_A_LEVEL_BUSINESS: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'business',
  syllabusCode: '7132',
  syllabusSeries: 'For first teaching from September 2023',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // 3.1 What is business?
    ...sub(T1, 'nature-and-purpose-of-business-aqa-alevel-business', '3.1.1', [
      { n: 1, f: 'Mission vs objective', b: 'Mission: the overall purpose of the business, why it exists; broad, long-term and not usually numerical.\nObjective: a specific, measurable, time-limited target that moves the business towards its mission.' },
      { n: 2, f: 'The objectives named in the specification', b: 'Profit, growth, survival, cash flow, and social and ethical objectives.' },
      { n: 3, f: 'Why businesses set objectives', b: 'Common direction for all departments; motivation; performance can be measured against targets; options can be ranked; managers become accountable to owners.' },
      { n: 4, f: 'Revenue, total costs and profit', b: 'Revenue = selling price × quantity sold.\nTotal costs = fixed costs + variable costs.\nProfit = revenue − total costs.' },
      { n: 5, f: 'Fixed vs variable costs', b: 'Fixed costs stay the same however much is produced in the short run (e.g. rent). Variable costs change with output (e.g. materials). A cost is fixed or variable by whether it changes with output, not by its size.' },
      { n: 6, f: 'Sell 500 items at £20; variable cost £8 each; fixed costs £4,000. Profit?', b: 'Revenue £10,000; total costs (500 × 8) + 4,000 = £8,000; profit £2,000. If fixed costs rise by £500, profit falls to £1,500 (a 25% fall).' },
      { n: 7, f: 'Why is profit important?', b: 'A reward for the owners\' risk; retained profit is a cheap source of finance; it attracts lenders and investors; it builds a cushion for survival; it pays dividends.' },
      { n: 8, f: 'Profit vs cash flow', b: 'Profit is revenue minus total costs over a period. Cash flow is money actually moving in and out. A profitable firm can still run out of cash.' },
      { n: 9, f: 'Give two examples of objectives that conflict', b: 'Growth can use up cash (growth vs cash flow). Ethical sourcing can cut short-run profit (ethics vs profit).' },
    ]),
    ...sub(T1, 'different-business-forms-aqa-alevel-business', '3.1.2', [
      { n: 1, f: 'Unlimited vs limited liability', b: 'Unlimited: the owner\'s personal assets can be used to pay business debts (sole traders).\nLimited: a shareholder can lose only the amount invested (Ltd and plc). Trap: it is the shareholder\'s liability that is limited, not the company\'s debts.' },
      { n: 2, f: 'Private limited company (Ltd) vs public limited company (plc)', b: 'Ltd: shares not offered to the public; finance from owners and selected investors; shares hard to sell.\nplc: shares traded on a stock exchange; large capital, but takeover risk, short-term pressure and heavy reporting.' },
      { n: 3, f: 'Mutual', b: 'An organisation owned by its members (its customers or savers), whose surplus is used for their benefit. Drawback: narrower sources of capital.' },
      { n: 4, f: 'Private sector vs public sector', b: 'Private: owned by individuals or shareholders; usually aims for profit; funded by sales and investors.\nPublic: owned and funded by the state; provides a service within a budget; judged on service quality and value for money.' },
      { n: 5, f: 'Reasons to choose or change business form', b: 'Protect personal assets; raise more capital; keep or give up control; match a social aim; cost of reporting; privacy; continuity if an owner leaves; planned growth.' },
      { n: 6, f: 'Market capitalisation: formula and example', b: 'Share price × number of shares in issue. 600,000 shares at £2.00 = £1,200,000. It is not cash in the company\'s bank.' },
      { n: 7, f: 'Total dividend: formula and example', b: 'Dividend per share × shares in issue. 600,000 shares at 5p = £30,000.' },
      { n: 8, f: 'Why do shareholders invest?', b: 'Dividends, capital growth (a rising share price), voting rights, and spreading risk.' },
      { n: 9, f: 'Influences on a company\'s share price', b: 'Profit results and forecasts, dividend news, takeovers and scandals, competitors, interest rates and the economy, and market confidence.' },
      { n: 10, f: 'When one investor sells shares to another, does the company get the money?', b: 'No. The money passes between the investors. The company gains cash only when it issues new shares.' },
      { n: 11, f: 'Significance of a change in share price', b: 'A rise makes new share issues cheaper and a takeover costlier. A fall raises takeover risk and pressure on directors.' },
    ]),
    ...sub(T1, 'external-environment-aqa-alevel-business', '3.1.3', [
      { n: 1, f: 'What two things does the external environment affect, per the specification?', b: 'Costs and demand. External factors are outside the business\'s control: it can respond but cannot decide them.' },
      { n: 2, f: 'The external factors the specification names', b: 'Competition; market conditions; incomes; interest rates; demographic factors; environmental issues and fair trade.' },
      { n: 3, f: 'Effects of a new competitor on costs and demand', b: 'Costs: more marketing spend; rivals bid for staff and suppliers.\nDemand: lost volume or pressure to cut price. Size depends on how similar the products are and how loyal customers are.' },
      { n: 4, f: 'Normal vs inferior goods when incomes rise', b: 'Normal good: demand rises when incomes rise.\nInferior good: demand falls when incomes rise, because buyers trade up.' },
      { n: 5, f: 'Effects of a rise in interest rates', b: 'Higher finance costs on variable-rate debt; less customer spending on credit-financed items; saving becomes more attractive. Fixed-rate debt delays the cost effect.' },
      { n: 6, f: 'Interest rate rises from 4% to 5% on a £200,000 variable-rate loan. Effect?', b: 'Interest rises from £8,000 to £10,000: £2,000 more, a 25% rise. A one percentage point change became a 25% change in the bill.' },
      { n: 7, f: 'Demographic factors: what they are and an example effect', b: 'The size, age structure, location and movement of the population. An ageing population raises demand for care, health and mobility products and makes younger workers harder to recruit.' },
      { n: 8, f: 'Fair trade, and its effect on costs and demand', b: 'Buying on terms that give producers a fair, stable price. It usually raises input costs, but ethical customers may buy more or accept a higher price, so profit can still rise.' },
      { n: 9, f: 'An input is 35% of a £20 unit cost and its price rises 10%. New unit cost?', b: 'Input £7.00 → £7.70; new unit cost £13.00 + £7.70 = £20.70, a 3.5% rise. Unit cost rises by less than the input unless the input is all of the cost.' },
      { n: 10, f: 'Market conditions: how they affect a business', b: 'A growing market lifts demand for all firms; a mature or declining one means fighting for share; seasonal markets bring idle capacity and cash pressure in quiet months; input shortages push input prices up.' },
    ]),
    // 3.2 Managers, leadership and decision making
    ...sub(T2, 'understanding-management-leadership-and-decision-making-aqa-alevel-business', '3.2.1', [
      { n: 1, f: 'The five activities in the role of managers', b: 'Setting objectives, analysing, leading, making decisions, and reviewing (then feeding lessons into the next objectives).' },
      { n: 2, f: 'Autocratic vs paternalistic leadership', b: 'Both decide alone. The autocratic manager communicates one way, downward. The paternalistic manager explains decisions and acts in what they see as staff\'s interest; staff may feel treated like children.' },
      { n: 3, f: 'Democratic vs laissez-faire leadership', b: 'Democratic: the manager decides with staff input, or the group decides; two-way, but slower.\nLaissez-faire: staff decide within limits with little direction from the manager; risk of drift.' },
      { n: 4, f: 'Tannenbaum Schmidt continuum: what it shows', b: 'A line, not boxes. At one end the manager uses authority and decides alone; at the other the team has freedom to decide within limits. As team freedom rises, the manager\'s use of authority falls. The right position depends on manager, team and situation.' },
      { n: 5, f: 'Tannenbaum Schmidt: name the positions at each end and in the middle', b: 'Position 1: manager decides and announces. Position 2: decides and persuades ("sells"). Position 5: presents the problem, takes suggestions, then decides. Position 7: team acts freely within defined limits.' },
      { n: 6, f: 'Blake Mouton grid: the two axes', b: 'Concern for production (the task) and concern for people, each scored 1 to 9 and written (production, people). The order matters: (9,1) is not (1,9).' },
      { n: 7, f: 'Blake Mouton: name positions (1,1), (9,1), (1,9), (5,5) and (9,9)', b: '(1,1) impoverished; (9,1) produce or perish; (1,9) country club; (5,5) middle of the road; (9,9) team management.' },
      { n: 8, f: 'Continuum vs grid', b: 'The continuum asks who decides and how much freedom the team has. The grid asks how much the manager cares about the task and about people. A (9,9) manager can sit anywhere on the continuum, depending on the decision.' },
      { n: 9, f: 'Influences on management style: the task', b: 'Urgency, risk, complexity, safety.', src: LEAD },
      { n: 10, f: 'Influences on management style: the people', b: 'Skills, experience, motivation, size of the team.', src: LEAD },
      { n: 11, f: 'Influences on management style: the organisation and the situation', b: 'Organisation: culture, size, structure, history. Situation: crisis, competition, labour market, time available.' },
      { n: 12, f: 'Why is "democratic is best" a weak evaluation?', b: 'It ignores context. Effectiveness depends on staff skills, time available, risk and what the business is trying to achieve; an autocratic style can work well in a crisis or with new staff.' },
    ]),
    ...sub(T2, 'understanding-management-decision-making-aqa-alevel-business', '3.2.2', [
      { n: 1, f: 'Scientific decision making vs intuition', b: 'Scientific: choosing on data and analysis (decision trees, expected value, net gain); defensible but costs time and depends on inputs.\nIntuition: choosing on judgement and experience; quick and cheap, but biased and hard to justify.' },
      { n: 2, f: 'When does intuition suit a decision better than data?', b: 'When the decision is urgent, small or unprecedented, data is limited, and the decision-maker is experienced. Big, costly, hard-to-reverse choices with data available favour a scientific approach.' },
      { n: 3, f: 'Risk vs uncertainty', b: 'Risk can be given probabilities; uncertainty cannot. Trees deal with risk.', src: DEC },
      { n: 4, f: 'Opportunity cost vs cost', b: 'Cost is what you pay; opportunity cost is the best alternative you forgo. With net gains of £12,000, £9,000 and £7,000, choosing the first has an opportunity cost of £9,000, not £16,000.', src: DEC },
      { n: 5, f: 'Decision tree symbols and rules', b: 'Square = decision node (the business chooses). Circle = chance node (events decide). Probabilities from one chance node sum to 1. Build left to right; calculate right to left.' },
      { n: 6, f: 'Expected value and net gain', b: 'Expected value (EV) = Σ(probability × payoff) for one option. Net gain = EV − cost of the option. Compare net gains; the highest is the numerical choice.' },
      { n: 7, f: 'Cost £20,000: 0.5 chance of £60,000, 0.5 chance of £10,000. EV and net gain?', b: 'EV = 30,000 + 5,000 = £35,000. Net gain = 35,000 − 20,000 = £15,000. Worst case is a £10,000 loss, so the average hides a real downside.' },
      { n: 8, f: 'Average versus outcome', b: 'A one-off decision gets one outcome, never the average.', src: DEC },
      { n: 9, f: 'Limitations of decision trees', b: 'Probabilities and payoffs are estimates; a small change in a probability can reverse the ranking; ignores timing of returns and non-financial factors; poor for uncertainty; data costs time to gather.' },
      { n: 10, f: 'The five influences on decision making in 3.2.2', b: 'Mission, objectives, ethics, the external environment (including competition), and resource constraints.' },
      { n: 11, f: 'Evaluating a decision: the worst case', b: 'Can the business survive it? A modest net gain with no chance of a big loss may beat a larger one with a heavy downside.', src: DEC },
    ]),
    ...sub(T2, 'role-and-importance-of-stakeholders-aqa-alevel-business', '3.2.3', [
      { n: 1, f: 'Stakeholder', b: 'An individual or group with an interest in a business, or affected by what it does. Shareholders are one stakeholder group.' },
      { n: 2, f: 'Internal vs external stakeholders', b: 'Internal: owners, managers, employees.\nExternal: customers, suppliers, lenders, government, local community, pressure groups.' },
      { n: 3, f: 'Why consider stakeholder needs when making decisions?', b: 'Support for the decision; mission and ethics; reputation and long-run performance; information from those affected. Against: time, cost, delay, and conflicting needs that cannot all be met.' },
      { n: 4, f: 'Stakeholder mapping: the two dimensions and four boxes', b: 'Power and interest.\nHigh power, high interest: manage closely. High power, low interest: keep satisfied. Low power, high interest: keep informed. Low power, low interest: monitor.' },
      { n: 5, f: 'Power vs interest', b: 'Power: the ability to influence the business or a decision.\nInterest: how much a group is affected by, or cares about, the outcome. A group can have either without the other.' },
      { n: 6, f: 'Overlap vs conflict of stakeholder needs', b: 'Overlap: one decision benefits several groups (a successful launch gives profit and secure jobs).\nConflict: helping one group reduces another\'s outcome (a price cut helps customers but squeezes shareholders and suppliers).' },
      { n: 7, f: 'Communication vs consultation', b: 'Communication: passing on information, mostly one-way (newsletter, press release); fast and cheap.\nConsultation: seeking views before deciding, two-way (meetings, surveys, staff representatives); better decisions and less resistance, but slower.' },
      { n: 8, f: 'Influences on the relationship with stakeholders', b: 'Power and dependence; business size and market position; leadership style and culture; mission and ethics; history and trust; competition; media and social media; the scale of the decision.' },
      { n: 9, f: 'Profit £150,000, 30% paid as dividend. Suppliers win an extra £30,000 a year. Effect on the dividend?', b: 'Profit falls to £120,000; the dividend falls from £45,000 to £36,000, down £9,000 (20%). The other £21,000 comes out of retained profit.' },
      { n: 10, f: 'Ways to resolve stakeholder conflict', b: 'Compromise, delay, an alternative option, or an explained priority. The choice depends on mission, objectives, each group\'s power, the size of the decision and long-run effects.' },
    ]),
    // 3.3 Marketing management
    ...topicOnly('marketing-management-aqa-alevel-business', '3', [
      { n: 1, f: 'Marketing objectives listed in the specification', b: 'Sales volume, sales value, market size, market growth, sales growth, market share and brand loyalty.' },
      { n: 2, f: 'Market growth, market share and market size: formulas', b: 'Market growth = change in market size ÷ original size × 100.\nMarket share = firm\'s sales ÷ market sales × 100.\nMarket size = firm\'s sales ÷ market share (£21m ÷ 0.075 = £280m).' },
      { n: 3, f: 'Correlation: what to remember', b: 'Positive: both variables rise together. Negative: one rises as the other falls. Points nearer a line mean a stronger correlation. Correlation is not causation: a third factor may explain both.' },
      { n: 4, f: 'Confidence interval and extrapolation', b: 'Confidence interval: the range likely to contain the true population value; narrower means more reliable (a larger, representative sample narrows it).\nExtrapolation: extending a trend beyond the data; reliable only close to existing data.' },
      { n: 5, f: 'Interpreting PED for pricing', b: 'PED above 1 (ignoring sign): elastic, so a price cut raises revenue. Below 1: inelastic, so a price rise raises revenue. The specification asks you to interpret elasticity, not calculate it.' },
      { n: 6, f: 'Interpreting YED', b: 'Above 0: normal good. Above 1: demand rises faster than income (luxury-type). Below 0: inferior good, demand falls as income rises. Useful for choosing markets in a boom or recession.' },
      { n: 7, f: 'The four segmentation methods in the specification', b: 'Demographic, geographic, income and behavioural.' },
      { n: 8, f: 'Segmentation, targeting and positioning', b: 'Segment: split the market into groups. Target: choose segments, with a mass (one broad mix) or niche (small, specialised) approach. Position: decide how buyers should see the product against rivals.' },
      { n: 9, f: 'The extra three Ps of the 7Ps', b: 'People (staff skills and attitude), process (how the service or order is delivered) and physical environment (setting, layout, website, packaging).' },
      { n: 10, f: 'Boston Matrix: categories and actions', b: 'Axes: market growth and relative market share (own share ÷ largest rival\'s share). Star (high growth, high share): invest. Question mark (high growth, low share): build or drop. Cash cow (low growth, high share): harvest. Dog: consider withdrawal.' },
      { n: 11, f: 'Penetration vs skimming pricing', b: 'Penetration: a low entry price to win share. Skimming: a high entry price to take margin from early adopters; suits a novel product with few rivals or the need to recover high development costs.' },
      { n: 12, f: 'Digital marketing and e-commerce: value and drawbacks', b: 'Value: reach, targeting, measurability, lower costs; supports relationship marketing. Drawbacks: competition, delivery and returns, security, skills needed.' },
    ]),
    // 3.4 Operational management
    ...topicOnly('operational-management-aqa-alevel-business', '4', [
      { n: 1, f: 'Operational objectives', b: 'Costs, quality, speed of response and flexibility, dependability, environmental objectives (waste, emissions), and added value.' },
      { n: 2, f: 'Labour productivity, unit cost and capacity utilisation', b: 'Labour productivity = output ÷ employees.\nUnit cost = total costs ÷ units produced.\nCapacity utilisation = actual output ÷ capacity × 100.' },
      { n: 3, f: '9,600 units, 32 staff, capacity 12,000, total costs £36,480. Productivity, unit cost, utilisation?', b: 'Productivity 9,600 ÷ 32 = 300 per employee. Unit cost 36,480 ÷ 9,600 = £3.80. Utilisation 9,600 ÷ 12,000 = 80%.' },
      { n: 4, f: 'Why does capacity utilisation matter?', b: 'Too little capacity means lost sales and late orders; too much means idle fixed costs. Higher utilisation spreads fixed costs, lowering unit cost.' },
      { n: 5, f: 'Labour intensive vs capital intensive', b: 'Labour intensive: low fixed, high variable costs; flexible; suits small or varied output.\nCapital intensive: high fixed, low variable costs; consistent quality; suits large, steady output.' },
      { n: 6, f: 'Lean production and Just in Time (JIT)', b: 'Lean: cut waste of every kind while meeting customer needs. JIT is part of lean: stock arrives as needed. Benefits: lower holding cost, less cash tied up. Difficulties: relies on reliable suppliers, little buffer if demand jumps.' },
      { n: 7, f: 'Quality control vs quality assurance', b: 'Control: inspect output and remove faults (detects).\nAssurance: agreed standards at every stage, supplier checks and staff responsible for their own work (prevents).' },
      { n: 8, f: 'Consequences of poor quality', b: 'Refunds and returns, rework and scrap, lost customers, damaged reputation, falling sales, complaint handling costs, possible legal claims and low staff morale.' },
      { n: 9, f: 'Mass customisation', b: 'Making products to individual customer wishes at close to mass-production cost.' },
      { n: 10, f: 'Ways of matching supply to demand in the specification', b: 'Outsourcing; temporary and part-time employees; producing to order.' },
      { n: 11, f: 'Re-order level and maximum stock', b: 'Re-order level = buffer + (daily usage × lead time). Maximum stock = buffer + re-order quantity. Example: usage 60 a day, lead time 6 days, buffer 120 → re-order level 480; with a re-order quantity of 900, maximum stock 1,020.' },
      { n: 12, f: 'Factors in choosing suppliers', b: 'Price, quality, reliability, speed, flexibility, payment terms, ethics and environment, location and financial strength.' },
    ]),
    // 3.5 Financial management
    ...topicOnly('financial-management-aqa-alevel-business', '5', [
      { n: 1, f: 'Gross profit, profit from operations and profit for the year', b: 'Gross profit = revenue − cost of sales.\nProfit from operations = gross profit − operating expenses.\nProfit for the year = profit from operations − finance costs − tax.' },
      { n: 2, f: 'Revenue £200,000; cost of sales £120,000; operating expenses £52,000. Margins?', b: 'Gross profit £80,000 (40.0%). Profit from operations £28,000 (14.0%).' },
      { n: 3, f: 'Return on investment: formula and example', b: 'Profit gained ÷ amount invested × 100. A £50,000 press adding £6,500 a year: 13%.' },
      { n: 4, f: 'Debt as a share of long-term funding', b: 'Long-term debt ÷ (long-term debt + equity) × 100. £90,000 loans and £210,000 equity: 90 ÷ 300 = 30%.' },
      { n: 5, f: 'Variance: how to label it', b: 'Variance = actual − budget, labelled by its effect on profit. Revenue above budget is favourable; costs above budget are adverse; costs below budget are favourable. Example: materials budget £15,000, actual £16,200 → £1,200 adverse.' },
      { n: 6, f: 'Price £15, variable cost £6, fixed costs £27,000. Break-even, and profit at 3,600 units?', b: 'Contribution £9; break-even 27,000 ÷ 9 = 3,000 units. Margin of safety 600; profit 9 × 3,600 − 27,000 = £5,400.' },
      { n: 7, f: 'Effect on break-even of higher price, higher variable cost, higher fixed costs', b: 'Higher price: revenue line steeper, break-even falls. Higher variable cost: total cost line steeper, break-even rises. Higher fixed costs: total cost line starts higher, break-even rises.' },
      { n: 8, f: 'Output needed for a target profit', b: '(Fixed costs + target profit) ÷ contribution per unit. Round break-even and target outputs up to a whole unit.' },
      { n: 9, f: 'Receivables vs payables', b: 'Receivables: money owed to the business by customers.\nPayables: money the business owes to suppliers.' },
      { n: 10, f: 'Debt factoring: invoices £20,000, 90% advanced, 2% fee', b: 'Advance now: £18,000. Fee: £400. Total received: £19,600. Gives immediate cash, but costs a fee and the factor deals with customers.' },
      { n: 11, f: 'Sources of finance in the specification: internal and external', b: 'Internal: retained profits. External: debt factoring, overdrafts, loans, share capital, venture capital. Short term: overdraft, factoring. Long term: loans, share capital, venture capital, retained profit.' },
      { n: 12, f: 'Ways to improve cash flow, and a difficulty', b: 'Chase receivables, early-payment discounts, factoring, longer supplier terms, lower stock, delay capital spending, overdraft, sell spare assets. Difficulties: discounts cut income; tighter credit loses customers; suppliers may refuse terms.' },
    ]),
    // 3.6 Human resource management
    ...topicOnly('human-resource-management-aqa-alevel-business', '6', [
      { n: 1, f: 'HR objectives named in the specification', b: 'Employee engagement and involvement; talent development; training; diversity; alignment of values; the number, skills and location of employees.' },
      { n: 2, f: 'Hard vs soft HRM', b: 'Hard: staff as a cost to control; flexible contracts, output pay, tight supervision.\nSoft: staff as an asset to develop; training, involvement, communication.' },
      { n: 3, f: 'Labour turnover and retention rate', b: 'Labour turnover = leavers ÷ average number employed × 100 (6 of an average 40 = 15%).\nRetention rate = staff who stayed all period ÷ staff at start × 100 (44 of 50 = 88%).' },
      { n: 4, f: 'Employee costs as % of turnover, and labour cost per unit', b: 'Employee costs ÷ turnover × 100 (£210,000 ÷ £1,400,000 = 15%).\nLabour cost per unit = total labour cost ÷ units produced (£210,000 ÷ 84,000 = £2.50).' },
      { n: 5, f: 'Hackman and Oldham: core job characteristics and psychological states', b: 'Skill variety, task identity and task significance → experienced meaningfulness.\nAutonomy → experienced responsibility for outcomes.\nFeedback → knowledge of results.' },
      { n: 6, f: 'Delegation vs decentralisation', b: 'Delegation: passing authority for a task down; accountability stays above.\nDecentralisation: a structure where decisions are taken lower down, by branches or teams.' },
      { n: 7, f: '90 staff with a span of control of 6: how many layers of management?', b: '90 ÷ 6 = 15 supervisors; 15 ÷ 6 = 2.5, round up to 3 managers; then 1 director. Three layers above the staff.' },
      { n: 8, f: 'The human resource flow', b: 'Human resource plan (forecast need, compare with supply, plan the gap), recruitment, training, redeployment, redundancy.' },
      { n: 9, f: 'Taylor, Maslow and Herzberg in one line each', b: 'Taylor: people work mainly for pay; simple tasks, supervision, output-based pay.\nMaslow: satisfy whichever of the five levels is still unmet.\nHerzberg: hygiene factors prevent dissatisfaction; motivators create satisfaction.' },
      { n: 10, f: 'Financial methods of motivation and the main risk of each', b: 'Piece rate: quality falls. Commission: pressure on customers. Salary: weak link to effort. Performance-related pay: unfair or poorly set targets.' },
      { n: 11, f: 'Trade union vs works council', b: 'Trade union: independent of the employer; represents members and bargains on pay and conditions.\nWorks council: employee and management representatives inside the business who share information and consult.' },
    ]),
    // 3.7 Analysing the strategic position of a business
    ...topicOnly('analysing-the-strategic-position-of-a-business-aqa-alevel-business', '7', [
      { n: 1, f: 'Mission, corporate objectives, strategy and tactics', b: 'Mission: why the business exists. Corporate objectives: measurable goals for the whole business. Strategy: the long-term plan to reach them. Tactics: short-term actions that carry out the strategy.' },
      { n: 2, f: 'SWOT: value and weakness', b: 'Internal strengths and weaknesses; external opportunities and threats. Useful for organising evidence, but it is only a list, subjective and quickly dated. Rank the points and reach a choice.' },
      { n: 3, f: 'ROCE and gearing', b: 'Capital employed = total equity + non-current liabilities.\nROCE = operating profit ÷ capital employed × 100.\nGearing = non-current liabilities ÷ capital employed × 100.' },
      { n: 4, f: 'Operating profit £54k; equity £300k; non-current liabilities £100k. ROCE and gearing?', b: 'Capital employed £400k. ROCE = 54 ÷ 400 × 100 = 13.5%. Gearing = 100 ÷ 400 × 100 = 25.0%.' },
      { n: 5, f: 'Receivables days, payables days and inventory turnover', b: 'Receivables days = receivables ÷ revenue × 365.\nPayables days = payables ÷ cost of sales × 365.\nInventory turnover = cost of sales ÷ inventories (times a year).' },
      { n: 6, f: 'Kaplan and Norton\'s Balanced Scorecard: the four perspectives', b: 'Financial; customer; internal business processes; learning and growth. It balances short- and long-term measures, but takes time to design and to weight.' },
      { n: 7, f: 'Elkington\'s Triple Bottom Line', b: 'Profit, People, Planet: success judged on financial, social and environmental results. Social and environmental impact are hard to measure.' },
      { n: 8, f: 'Core competences', b: 'Things a business does well that are hard to copy and valued by customers; a source of competitive advantage.' },
      { n: 9, f: 'Carroll\'s pyramid of CSR, base to top', b: 'Economic, legal, ethical, philanthropic responsibilities.' },
      { n: 10, f: 'Porter\'s five forces, and when each is strong', b: 'Entry threat (low barriers), buyer power (few or large buyers, easy switching), supplier power (few suppliers, specialised inputs), rivalry (many similar rivals, slow growth), substitute threat (easy alternatives). Weak forces mean higher profit potential.' },
      { n: 11, f: 'Cost £50,000; cash flows £20k, £25k, £30k. Payback and ARR?', b: 'Payback: £45,000 after year 2; 5 ÷ 30 = 0.17, so 2.17 years.\nARR: net return £25,000 ÷ 3 years = £8,333 a year ÷ £50,000 × 100 = 16.7%.' },
      { n: 12, f: 'Net present value and sensitivity analysis', b: 'NPV = sum of discounted cash flows − initial cost; positive means the project beats the discount rate. Sensitivity analysis changes one assumption at a time to show which forecasts matter; it gives no probabilities.' },
    ]),
    // 3.8 Choosing strategic direction
    ...topicOnly('choosing-strategic-direction-aqa-alevel-business', '8', [
      { n: 1, f: 'Strategic direction vs strategic positioning', b: 'Direction is where: which markets to compete in and which products to offer (Ansoff).\nPositioning is how: competing on benefits and price (Porter, Bowman).' },
      { n: 2, f: 'Ansoff matrix: the four directions', b: 'Market penetration (existing products, existing markets; lowest risk); market development (existing products, new markets); new product development (new products, existing markets); diversification (new products, new markets; highest risk).' },
      { n: 3, f: 'Market penetration: methods, value and limit', b: 'Methods: promotion, price cuts, loyalty schemes, wider distribution. Value: low risk, quick, builds on existing skills. Limit: saturation and rival retaliation.' },
      { n: 4, f: 'Diversification: value and limit', b: 'Spreads risk and opens growth, but the business lacks experience in both the product and the market. Trap: if only the product or only the market is new, it is not diversification.' },
      { n: 5, f: 'A £90,000 campaign adds £200,000 of sales at a 35% contribution margin. Net gain?', b: 'Extra contribution 200,000 × 0.35 = £70,000. Net gain = 70,000 − 90,000 = −£20,000, a loss in year 1.' },
      { n: 6, f: 'Porter\'s generic strategies', b: 'Low cost (broad scope, lowest unit costs); differentiation (broad, unique features or brand for a premium); focus (a narrow niche, using low cost or differentiation).' },
      { n: 7, f: 'Stuck in the middle', b: 'Having neither the lowest costs nor a clear difference, so no competitive advantage.' },
      { n: 8, f: 'Exam trap: low cost vs low price', b: 'A low-cost strategy means having the lowest unit costs; the price can still equal rivals\', giving higher margins. Cost leadership does not mean charging the lowest price.' },
      { n: 9, f: 'Bowman\'s strategic clock: positions 3, 4 and 5', b: '3 Hybrid: low price, higher benefits (needs very low costs).\n4 Differentiation: higher benefits at a standard price.\n5 Focused differentiation: high price, high benefits.\nPositions 6 to 8 (higher price or low benefits) are generally seen as unsustainable.' },
      { n: 10, f: 'Difficulties of maintaining competitive advantage', b: 'Imitation by rivals; changing technology; shifting tastes; rising input costs; fading patents or brand appeal; the need for constant investment; dependence on a single supplier, product or person.' },
    ]),
    // 3.9 Strategic methods: how to pursue strategies
    ...topicOnly('strategic-methods-how-to-pursue-strategies-aqa-alevel-business', '9', [
      { n: 1, f: 'Organic growth vs external growth', b: 'Organic: growth from the firm\'s own resources; slow, lower cost and risk, high control.\nExternal: merger, takeover, venture or franchising; fast, but costlier and riskier (integration and culture).' },
      { n: 2, f: 'Retrenchment', b: 'Reducing the scale of the business (closures, disposals, job cuts), for example because of falling demand, losses or debt. Lowers costs, but brings redundancy payments, lower morale and a risk of cutting needed capacity.' },
      { n: 3, f: 'Horizontal, backward vertical, forward vertical and conglomerate integration', b: 'Horizontal: same industry, same stage. Backward vertical: with a supplier. Forward vertical: with a distributor or retailer. Conglomerate: with an unrelated business.' },
      { n: 4, f: 'The three economies of scale listed, and economies of scope', b: 'Technical (bigger, more efficient processes), purchasing (bulk-buying discounts), managerial (specialist managers). Economies of scope: lower average cost from a related product range sharing resources.' },
      { n: 5, f: 'Experience curve: a 90% curve starting at £100', b: 'Unit cost falls with cumulative output: each doubling multiplies cost by 0.9, so £90, then £81. Economies of scale are about output per period; the experience curve is about total output over time.' },
      { n: 6, f: 'Synergy and overtrading', b: 'Synergy: combined value greater than the parts (profits of £5m and £3m become £10m together: £2m synergy).\nOvertrading: sales grow faster than the working capital that supports them, causing a cash shortage.' },
      { n: 7, f: 'Greiner\'s model of growth', b: 'Growth through creativity (crisis of leadership), direction (crisis of autonomy), delegation (crisis of control), coordination (crisis of red tape), then collaboration. Firms rarely follow it exactly.' },
      { n: 8, f: 'Kaizen, benchmarking and intrapreneurship', b: 'Kaizen: continuous improvement through small changes by all staff. Benchmarking: comparing with best practice and adopting what works. Intrapreneurship: entrepreneurial behaviour by employees inside the firm.' },
      { n: 9, f: 'Product vs process innovation; protecting intellectual property', b: 'Product innovation: a new or improved good or service. Process innovation: a new way to make or deliver it. Patents and copyrights give time-limited legal protection.' },
      { n: 10, f: 'Bartlett and Ghoshal\'s four international strategies', b: 'International: low local responsiveness, low cost pressure. Multi-domestic: high responsiveness, low cost pressure. Global: low responsiveness, high cost pressure. Transnational: high on both.' },
      { n: 11, f: 'Entry methods for international markets', b: 'Export (cheap test, little control); licensing (when capital is scarce, but weak brand control); alliances (local knowledge, shared profit); direct investment (for large long-term markets, costly and risky).' },
      { n: 12, f: 'Big data, data mining and ERP', b: 'Big data: very large, fast-growing data sets. Data mining: searching data for patterns. ERP (enterprise resource planning): integrated software linking functions such as finance, stock and orders.' },
    ]),
    // 3.10 Managing strategic change
    ...topicOnly('managing-strategic-change-aqa-alevel-business', '10', [
      { n: 1, f: 'The four types of change in the specification', b: 'Internal (starts inside the business), external (starts in the environment), incremental (small, steady steps) and disruptive (sudden and large).' },
      { n: 2, f: 'Lewin\'s force field analysis: method', b: 'List driving forces (for the change) and restraining forces (against), score each, total each side and find the net score. Then reduce the strongest restrainers or strengthen drivers. Scores are subjective.' },
      { n: 3, f: 'Kotter and Schlesinger: four reasons for resistance to change', b: 'Parochial self-interest; misunderstanding; low tolerance of change; different assessments of the situation.' },
      { n: 4, f: 'Kotter and Schlesinger: six ways of overcoming resistance', b: 'Education and communication; participation and involvement; facilitation and support; negotiation and agreement; manipulation and co-optation; explicit and implicit coercion (fast but damages trust).' },
      { n: 5, f: 'Mechanistic vs organic structure', b: 'Mechanistic: rigid hierarchy, narrow tasks, formal rules; suits stable markets.\nOrganic: flat, flexible, wide roles, shared decisions; responds quickly but with less control.' },
      { n: 6, f: 'Handy\'s four cultures', b: 'Power: one person or small group controls. Role: rules, procedures and defined jobs. Task: teams built around projects and expertise. Person: individuals matter most.' },
      { n: 7, f: 'Hofstede\'s national cultures', b: 'Countries compared on dimensions including power distance, individualism vs collectivism, masculinity vs femininity and uncertainty avoidance. Explains why a management style may not transfer across borders.' },
      { n: 8, f: 'Network analysis: total float and critical path', b: 'Total float = latest start − earliest start (or LF − EF). Zero-float activities are critical; the critical path is the longest route through the network and sets the project duration.' },
      { n: 9, f: 'Planned (deliberate) strategy', b: 'Set in advance by analysis; gives direction and control; may be rigid.', src: CHG },
      { n: 10, f: 'Emergent strategy', b: 'Grows from day-to-day decisions and responses; flexible, uses front-line knowledge; may lack direction.', src: CHG },
      { n: 11, f: 'Strategic drift', b: 'Strategy slowly moves out of line with the environment, often after success. Causes: complacency, strong culture, slow monitoring.', src: CHG },
      { n: 12, f: 'Contingency planning', b: 'Ready responses to possible shocks. Faster reaction, less panic; costs time and cannot cover everything.', src: CHG },
    ]),
  ],
};
