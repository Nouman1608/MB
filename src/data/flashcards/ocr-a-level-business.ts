/**
 * D-438 -- flashcards for OCR A Level Business H431 (Version 2.1, January 2026;
 * final assessment summer 2027).
 *
 * One block per subtopic, in syllabus order; topics 3-7 list no subtopics in the
 * syllabus record, so their cards sit on the topic (topicOnly helper). Card ids
 * are `<subtopic number>-<n>` (or `<topic number>-<n>`) and are permanent
 * (browser progress is keyed by them): add a new card with the next unused n,
 * never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs H431); origin 'revision-notes'.
 *
 * Written from Marlbridge's own H431 revision notes and study guides. The
 * specification prints few formulas, so ratios and methods are given in their
 * standard forms. Not tiered. Plain text only (see types.ts). Unicode for symbols.
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

const CRISIS = 'ocr-a-level-business-contingency-planning-and-crisis-management-revision-notes';
const MKT = 'ocr-a-level-business-marketing-and-marketing-strategies-revision-notes';
const OPS = 'ocr-a-level-business-operational-strategy-revision-notes';

const T1 = 'business-objectives-and-strategic-decisions-ocr-alevel-business';
const T2 = 'external-influences-facing-businesses-ocr-alevel-business';

export const DECK_OCR_A_LEVEL_BUSINESS: FlashcardDeck = {
  boardSlug: 'ocr',
  qualificationSlug: 'a-level',
  subjectSlug: 'business',
  syllabusCode: 'H431',
  syllabusSeries: 'Version 2.1 (January 2026), for first assessment in 2017; final assessment summer 2027',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // 1 Business objectives and strategic decisions
    ...sub(T1, 'different-stakeholder-and-business-objectives-ocr-alevel-business', '1.1', [
      { n: 1, f: 'The hierarchy of objectives, from top to bottom', b: 'Organisational aim (broad purpose) → corporate objective (measurable target for the whole business) → strategic objective (how the corporate objective will be met) → tactical objective (a department\'s target) → operational objective (a day-to-day target).' },
      { n: 2, f: 'Aim vs objective', b: 'An aim is a broad purpose and may have no number. An objective is a target and should be measurable.' },
      { n: 3, f: 'SMART objectives (standard form)', b: 'Specific, Measurable, Achievable, Realistic, Time-bound. Some courses read A and R differently ("agreed", "relevant"); use one wording consistently.' },
      { n: 4, f: 'Typical objectives of the private, public and third sectors', b: 'Private: profit, return to owners, growth, survival.\nPublic: service quality, access, value for money, budget control.\nThird: social purpose, with any surplus reinvested.' },
      { n: 5, f: 'Why might objectives need to change?', b: 'Recession or a demand shift; a new competitor or technology; growth or change of ownership; missed targets; new laws or public attitudes; a crisis or survival threat.' },
      { n: 6, f: 'A firm earning £2.0m seeks 15% growth in revenue. Target?', b: 'Target = current revenue × (1 + growth rate) = £2.0m × 1.15 = £2.3m, an increase of £0.3m.' },
    ]),
    ...sub(T1, 'stakeholders-ocr-alevel-business', '1.2', [
      { n: 1, f: 'Stakeholder; internal and external examples', b: 'Any person or group that has a stake in what a business does or is affected by it.\nInternal: owners and shareholders, directors, managers, employees.\nExternal: customers, suppliers, lenders, competitors, community, government, pressure groups, media.' },
      { n: 2, f: 'What do lenders, suppliers and the community want from a business?', b: 'Lenders: repayment and low risk. Suppliers: regular orders and prompt payment. Community: jobs, low disruption and a clean environment.' },
      { n: 3, f: 'Why do stakeholder objectives conflict?', b: 'Different goals; limited resources; short-term against long-term views; different power and information.' },
      { n: 4, f: 'Ways to deal with stakeholder conflict', b: 'Prioritise by power and interest, compromise, consult early, compensate or phase the change, or change the decision.' },
      { n: 5, f: 'Influence vs interest', b: 'Interest is how much a group cares about or is affected by a decision; influence is its power to change it. A group can have great interest yet little influence.' },
    ]),
    ...sub(T1, 'mission-statement-ocr-alevel-business', '1.3', [
      { n: 1, f: 'Mission statement: definition and nature', b: 'A short public statement of what the business is for: what it does, for whom, and often how or why. Brief, memorable, general, forward-looking and not a numerical target.' },
      { n: 2, f: 'Purposes of a mission statement', b: 'Gives direction, guides decisions, unites staff, and signals values to customers, investors, suppliers and the community.' },
      { n: 3, f: 'Disadvantages of a mission statement', b: 'It can be vague or generic; it may be ignored, causing cynicism; it can limit flexibility; it costs time to write and communicate; stakeholders may read it differently.' },
      { n: 4, f: 'Mission statement vs objective vs slogan', b: 'The mission says why the business exists; an objective is a measurable target that helps deliver it. A slogan is marketing wording; a mission should guide decisions inside the business.' },
      { n: 5, f: 'Evaluating a mission statement: the key test', b: 'A statement is only worth having if behaviour matches the words. Changing one brings short-run costs (rebranding, training) while benefits take longer.' },
    ]),
    ...sub(T1, 'corporate-social-responsibility-ocr-alevel-business', '1.4', [
      { n: 1, f: 'Corporate social responsibility (CSR)', b: 'The idea that a business should consider the effects of its decisions on society, the community and the environment, and act ethically towards all stakeholders, beyond what the law requires.' },
      { n: 2, f: 'CSR policy vs CSR profile', b: 'The policy is the written commitments the business makes and how it will deliver and report them. The profile is how responsible stakeholders judge it to be.' },
      { n: 3, f: 'How can CSR conflict with other objectives?', b: 'Profit (higher costs, lower margins), growth (turning down suppliers or contracts that fail standards), cost leadership, market share (higher prices) and short-term targets (slow payback).' },
      { n: 4, f: 'A CSR change adds £0.03 a unit on 600,000 units; operating profit is £150,000. Effect?', b: 'Extra cost = 0.03 × 600,000 = £18,000, which is 12% of operating profit, leaving £132,000 if nothing else changes.' },
      { n: 5, f: 'Advantages and disadvantages of a strong CSR profile', b: 'For: stronger brand and loyalty, possible price premium, motivated staff, goodwill, lower risk of scandal.\nAgainst: higher costs, lower short-run profit, failures magnified, benefits hard to measure, risk of accusations of exaggerated claims.' },
      { n: 6, f: 'CSR vs the law; CSR vs charity', b: 'CSR means doing more than legal compliance, usually by choice. Donations are only one possible part of a CSR policy, not the whole of it.' },
    ]),
    ...sub(T1, 'strategy-and-implementation-ocr-alevel-business', '1.5', [
      { n: 1, f: 'Objective, strategy and tactics', b: 'Objective: the target ("where?"). Strategy: the long-term plan for reaching it ("which route?"), costly to reverse, set by senior managers. Tactics: shorter-term actions that put the strategy into practice.' },
      { n: 2, f: 'Implementation strategy', b: 'The plan for carrying out a strategy: resources, timing, responsibility, communication and milestones.' },
      { n: 3, f: 'Why plan the implementation of a strategy?', b: 'Resources are ready when needed; steps happen in order; someone owns each task; staff know what is changing and why; milestones show early if the plan is off course; risks are spotted and fallbacks prepared.' },
      { n: 4, f: 'Possible causes and costs of changing strategy', b: 'Causes: falling sales, a new competitor, changing tastes, new technology, a cash shortage, poor review results. Costs: retraining, lost spending, disruption, confused customers, damaged credibility.' },
      { n: 5, f: 'Plan-Do-Review vs strategic review', b: 'Plan-Do-Review: a repeating cycle of setting a plan, carrying it out and comparing results with it. Strategic review: a wider, less frequent check on whether the strategy itself still suits the business and its environment.' },
    ]),
    ...sub(T1, 'business-plan-ocr-alevel-business', '1.6', [
      { n: 1, f: 'Business plan: definition and purposes', b: 'A written document setting out what the business will do, how, and the expected results. Purposes: test whether the idea can work, win finance, guide managers and set targets, provide a benchmark.' },
      { n: 2, f: 'Main contents of a business plan', b: 'Executive summary; description, aims and objectives; market research and target market; marketing plan; operations and staffing; financial forecasts; finance needed and sources; risks and contingencies.' },
      { n: 3, f: 'Advantages and disadvantages of a business plan', b: 'For: forces research and clear thinking, helps raise finance, sets targets, improves coordination, shows weaknesses early.\nAgainst: takes time and skill, forecasts can be wrong, it dates, may make managers rigid.' },
      { n: 4, f: 'A plan forecasts 1,500 loaves a month; break-even is 1,334. Margin of safety?', b: '1,500 − 1,334 = 166 loaves, or 166 ÷ 1,500 × 100 = 11.1% of forecast sales. A lender would want evidence for the 1,500 figure.' },
      { n: 5, f: 'How does a business plan affect lenders and suppliers?', b: 'Lenders and investors use it to decide whether to lend and on what terms. Suppliers may use it to judge whether to give credit.' },
    ]),
    ...sub(T1, 'risk-and-uncertainty-ocr-alevel-business', '1.7', [
      { n: 1, f: 'Risk vs uncertainty', b: 'Risk: the possibility that a decision ends worse than hoped, which can often be measured. Uncertainty: not knowing what will happen, or being unable to give reliable probabilities.' },
      { n: 2, f: 'Quantifiable vs unquantifiable risk', b: 'Quantifiable: likelihood or loss can be given a number from data (bad debts, machine breakdowns). Unquantifiable: no reliable basis for a number (a rival\'s unknown technology, a fashion shift).' },
      { n: 3, f: 'A hit gives +£50,000 (p = 0.6), a flop −£20,000 (p = 0.4). Expected value?', b: '0.6 × 50,000 + 0.4 × (−20,000) = 30,000 − 8,000 = £22,000. The worst case is a £20,000 loss, so ask whether the business could bear it.' },
      { n: 4, f: 'Ways to reduce risk', b: 'Research and forecasting; spreading across markets, suppliers and products; phasing or piloting; insurance; contracts; financial prudence; contingency plans.' },
      { n: 5, f: 'Risks faced by an entrepreneur', b: 'Loss of savings; personal assets at risk if liability is unlimited; no guaranteed income; the opportunity cost of salary and security given up; business failure.' },
      { n: 6, f: 'The five business activities uncertainty affects', b: 'Aims and objectives, planning, decision making, business analysis, and forecasting.' },
    ]),
    ...sub(T1, 'opportunity-cost-ocr-alevel-business', '1.8', [
      { n: 1, f: 'Opportunity cost', b: 'What the second-best use of the same resources was worth, lost by choosing another use.' },
      { n: 2, f: 'Opportunity cost: method', b: 'List the realistic alternatives for the same resource, value each, rank them. The opportunity cost is the next best alternative only, not the total of all those rejected.' },
      { n: 3, f: '£40,000: a kiln earns £5,200 a year, training £4,600, a deposit £800. Opportunity cost of the kiln?', b: '£4,600 a year (the training, the next best). The kiln wins by £600 a year on these figures.' },
      { n: 4, f: 'Impact of opportunity cost on decision making', b: 'It forces comparison of options, shows that a positive return can still be a poor choice, applies to time as well as money, interacts with risk (the next best may be safer), and relies on estimates.' },
    ]),
    ...sub(T1, 'contingency-planning-and-crisis-management-ocr-alevel-business', '1.9', [
      { n: 1, f: 'Contingency plan', b: 'A set of actions prepared in advance for an unexpected event that could disrupt the business. Standard definition.', src: CRISIS },
      { n: 2, f: 'Crisis', b: 'A serious, usually sudden event that threatens survival, reputation or normal running and needs urgent decisions. Standard definition.', src: CRISIS },
      { n: 3, f: 'Crisis management', b: 'How a business responds during and after a crisis.', src: CRISIS },
      { n: 4, f: 'Contingency planning vs crisis management', b: 'Contingency planning happens before the event: predicting, preparing, rehearsing. Crisis management happens during and after: deciding, communicating, containing, recovering. A good plan speeds the response; lessons feed back into the plan.' },
      { n: 5, f: 'Expected loss: 5% chance a year of a £120,000 loss; a £2,500 plan cuts it to £30,000', b: 'Expected loss = probability × loss: £6,000 before, £1,500 after. Saving £4,500 − plan cost £2,500 = £2,000 net benefit a year.' },
      { n: 6, f: 'Communication in a crisis: media and the public', b: 'One spokesperson, factual statements, no guessing about causes.', src: CRISIS },
    ]),
    ...sub(T1, 'models-of-strategic-choice-ocr-alevel-business', '1.10', [
      { n: 1, f: 'Porter\'s Five Forces', b: 'Rivalry among existing competitors, threat of new entrants, threat of substitutes, bargaining power of buyers, bargaining power of suppliers. A strong force reduces profit by pushing prices down or costs up.' },
      { n: 2, f: 'When is buyer power strong, and the threat of entry weak?', b: 'Buyer power is strong with few large buyers, easy switching and standard products.\nEntry threat is weak with high start-up costs, incumbents\' scale economies, strong brand loyalty, hard access to distribution and patents.' },
      { n: 3, f: 'Porter\'s generic strategies', b: 'Lower cost across the whole market: cost leadership. Differentiation across the whole market: differentiation. In a narrow segment: cost focus or differentiation focus.' },
      { n: 4, f: 'Competitive advantage: definition and when it lasts', b: 'Something a business does better than rivals that earns more customers, higher margins or both. It lasts when customers notice it and rivals cannot copy it quickly (brand, patent, location, skills), not when it is a price cut rivals can match.' },
      { n: 5, f: 'Limits of Five Forces and of the generic strategies', b: 'Five Forces: a snapshot, industry-level not firm-level, judging each force is subjective, it does not say what to do.\nGeneric strategies: real firms often combine strategies, four boxes oversimplify, they do not show if a market is profitable.' },
      { n: 6, f: 'Exam trap: cost leadership', b: 'Low price is not the same as cost leadership. Cost leadership is about having the lowest costs. Focus is about scope (a narrow segment), not the size of the firm.' },
    ]),
    ...sub(T1, 'measures-of-performance-ocr-alevel-business', '1.11', [
      { n: 1, f: 'Financial vs non-financial measures of performance', b: 'Financial: final accounts, ratio analysis, gearing, cash flow, budgets, variance analysis; precise but backward-looking.\nNon-financial: market share, resource utilisation, environmental impact, quality, customer satisfaction; early warning but hard to compare.' },
      { n: 2, f: 'Interest cover and gearing', b: 'Interest cover = operating profit ÷ finance costs (£30,000 ÷ £4,000 = 7.5 times).\nGearing = non-current liabilities ÷ capital employed × 100 (£75,000 ÷ £250,000 = 30%).' },
      { n: 3, f: 'Stock turnover and debtor days', b: 'Stock turnover = cost of sales ÷ inventory (£120,000 ÷ £25,000 = 4.8 times).\nDebtor days = receivables ÷ sales revenue × 365 (£20,000 ÷ £200,000 × 365 = 36.5 days).' },
      { n: 4, f: 'Current ratio vs acid test: which is stricter?', b: 'The acid test, because it excludes inventory, which is slower to turn into cash. Example: current assets £50,000, inventory £25,000, current liabilities £30,000: current ratio 1.67, acid test 0.83.' },
      { n: 5, f: 'Why are published accounts an incomplete measure of performance?', b: 'They report the past; omit quality, morale, loyalty and environmental harm; depend on judgements about depreciation and valuation; rarely show market position; a year-end snapshot can hide seasonal swings.' },
      { n: 6, f: 'Cash-flow forecast vs cash-flow statement', b: 'A forecast looks ahead and plans; a statement records what happened.' },
    ]),
    ...sub(T1, 'forecasting-ocr-alevel-business', '1.12', [
      { n: 1, f: 'Forecast: definition and purposes', b: 'An informed estimate of a future variable (sales, costs, profit, cash flow, demand). Purposes: reduce uncertainty; plan output, staffing, stock and finance; set targets; support funding requests.' },
      { n: 2, f: 'Structured and unstructured qualitative forecasting methods', b: 'Structured: Delphi technique (experts give views separately and revise over anonymous rounds) and expert opinion.\nUnstructured: brainstorming and intuition.' },
      { n: 3, f: 'Seasonal vs cyclical variation', b: 'Seasonal: within a year, caused by weather, holidays or the calendar; repeats predictably.\nCyclical: over several years, caused by the economic or industry cycle; irregular in length and size.' },
      { n: 4, f: 'Three-year moving average and cyclical variation', b: 'Moving average = (previous + current + next) ÷ 3, written against the middle year. Cyclical variation = actual − trend. Example: sales 50, 56, 53 → average 53.0 for the middle year.' },
      { n: 5, f: 'Evaluating time series analysis', b: 'For: objective, cheap, smooths random fluctuation, shows direction. Against: assumes the past continues; no trend value for the latest year; cannot foresee shocks; needs enough reliable data.' },
      { n: 6, f: 'Correlation and extrapolation in forecasting', b: 'Correlation can be positive or negative, strong or weak, but is not causation. Extrapolating beyond the range of the data is less reliable than reading within it.' },
    ]),
    ...sub(T1, 'decision-making-ocr-alevel-business', '1.13', [
      { n: 1, f: 'Decision making: nature and purpose', b: 'Choosing between alternative courses of action, by identifying the issue, gathering information, comparing options and choosing, so as to move the business towards its aims and objectives.' },
      { n: 2, f: 'Strategic, tactical and operational decisions', b: 'Strategic: senior managers, whole business, costly and hard to reverse.\nTactical: middle managers, one function, serves the strategy.\nOperational: supervisors and teams, routine and short-term.' },
      { n: 3, f: 'The five factors the specification says must be taken into account', b: 'Level of risk, nature of risk, accuracy of forecasts, volatility, and potential for bias.' },
      { n: 4, f: 'Quantitative vs qualitative decision-making tools', b: 'Quantitative: figures and calculations; objective and comparable but ignore what cannot be measured.\nQualitative: opinion and context; capture reputation, morale and ethics but are subjective.' },
      { n: 5, f: 'How do you judge the extent of a decision\'s success?', b: 'Compare results with objectives, previous years, competitors and each stakeholder\'s view. Reach a judgement of degree: successful in some respects, not in others.' },
    ]),
    ...sub(T1, 'decision-trees-ocr-alevel-business', '1.14', [
      { n: 1, f: 'Decision tree conventions', b: 'Square: decision node (the business chooses). Circle: chance node (probability decides). Probabilities at each chance node total 1. Build left to right; calculate right to left.' },
      { n: 2, f: 'Expected value and net gain', b: 'EV = Σ(probability × payoff). Net gain of an option = EV − cost of the option. Compare options, including doing nothing (net gain nil).' },
      { n: 3, f: '35% chance of £80,000 and 65% chance of £20,000; cost £30,000. EV and net gain?', b: 'EV = 28,000 + 13,000 = £41,000. Net gain = 41,000 − 30,000 = £11,000.' },
      { n: 4, f: 'Strengths and limits of decision trees', b: 'Strengths: clear, show assumptions, compare options, handle sequences of decisions.\nLimits: estimates, subjective probabilities, ignore qualitative factors and the timing of cash flows, false precision.' },
      { n: 5, f: 'Why is a decision tree poor when risks are unquantifiable?', b: 'Probabilities cannot be attached, so the EV has no sound basis and the numbers give false precision.' },
    ]),
    ...sub(T1, 'ansoffs-matrix-ocr-alevel-business', '1.15', [
      { n: 1, f: 'Ansoff\'s matrix: the four quadrants', b: 'Existing product, existing market: market penetration.\nNew product, existing market: product development.\nExisting product, new market: market development.\nNew product, new market: diversification.' },
      { n: 2, f: 'Why does risk rise across Ansoff\'s matrix?', b: 'Each step away from current products and customers adds uncertainty and usually cost. Penetration is lowest risk; diversification combines both uncertainties and is highest.' },
      { n: 3, f: 'Examples of market penetration and market development strategies', b: 'Penetration: promotion, price cuts, loyalty schemes, buying a rival.\nDevelopment: a new region, new customer segment, new use, exporting.' },
      { n: 4, f: 'Usefulness of Ansoff\'s matrix', b: 'Strengths: simple, shows every growth option, links strategy to risk. Limits: no financial figures, ignores the size of reward, resources and competitors\' reactions; real strategies mix quadrants. A framework for risk, not return.' },
    ]),
    ...sub(T1, 'conflicts-in-business-decision-making-ocr-alevel-business', '1.16', [
      { n: 1, f: 'Why can different decision tools give conflicting results?', b: 'They measure different things (speed, average profit, value of cash); treat time differently (payback and ARR do not discount, NPV does); depend on estimates; leave out qualitative factors; cover different time horizons.' },
      { n: 2, f: 'Cost £60,000; inflows £20,000, £25,000, £30,000. Payback and ARR?', b: 'Payback: £45,000 after two years; £15,000 of year 3\'s £30,000 needed → 2.5 years.\nARR: profit £15,000 ÷ 3 = £5,000 a year ÷ £60,000 = 8.3%. It passes a 3-year payback target but fails a 10% ARR target.' },
      { n: 3, f: 'Payback, ARR and NPV: one weakness each', b: 'Payback: ignores cash after payback and timing. ARR: ignores the timing of cash. NPV: needs a discount rate, which is itself a judgement.' },
      { n: 4, f: 'Why might a project with a positive NPV still be rejected?', b: 'A poor fit with the mission, damage to reputation, lack of skills, an unreliable forecast, or a better use of the money.' },
      { n: 5, f: 'Reasons for business success or failure', b: 'Success: strategy fits market and resources, sound cash flow, decisions tested with several tools, risks managed, ability to adapt.\nFailure: over-optimistic forecasts, weak cash flow, reliance on one tool or intuition, ignored warnings.' },
    ]),
    // 2 External influences facing businesses
    ...sub(T2, 'the-market-market-size-and-growth-ocr-alevel-business', '2.1', [
      { n: 1, f: 'Market, market size and market growth', b: 'Market: a setting, physical or online, where buyers and sellers trade. Market size: total sales of all firms in a period, by value or volume. Market growth = (new size − old size) ÷ old size × 100.' },
      { n: 2, f: 'A firm sells 30,000 units in a market that grows from 250,000 to 275,000. Share and growth?', b: 'Market growth 10%. Share falls from 12% to 10.9%: the firm\'s sales did not grow while the market did.' },
      { n: 3, f: 'Why does market size matter?', b: 'It shows the ceiling on potential sales, guides investment and the chance of scale economies, shows attractiveness to entrants and gives context for the firm\'s share. A big, static market suggests saturation: gains must come from rivals.' },
      { n: 4, f: 'Monopoly, oligopoly and monopolistic competition', b: 'Monopoly: one dominant seller, high barriers, no close substitute.\nOligopoly: few large firms, branded similar products, interdependent.\nMonopolistic competition: many small sellers, low barriers, differentiated products.' },
      { n: 5, f: 'Why might an oligopolist avoid cutting price?', b: 'Interdependence: rivals may copy the cut, leaving everyone with lower revenue and no gain in share.' },
    ]),
    ...sub(T2, 'demand-and-supply-ocr-alevel-business', '2.2', [
      { n: 1, f: 'Demand and supply', b: 'Demand: the amount consumers are ready and able to buy at every price in a period. Supply: the amount producers are ready and able to sell at every price in a period.' },
      { n: 2, f: 'Determinants of demand and of supply', b: 'Demand: income, prices of substitutes and complements, tastes, advertising, population, expectations, seasons.\nSupply: costs of production, technology, number of firms, taxes and subsidies, weather, expectations.' },
      { n: 3, f: 'Effects of shifts on price and quantity', b: 'Demand right: price up, quantity up. Demand left: both down. Supply right: price down, quantity up. Supply left: price up, quantity down. An own-price change is a movement along the curve.' },
      { n: 4, f: 'QD = 600 − 20P and QS = 40P − 120. Equilibrium, and the position at £16?', b: '600 − 20P = 40P − 120 → P = £12, Q = 360. At £16, QD = 280 and QS = 520: an excess supply of 240.' },
      { n: 5, f: 'Excess supply vs excess demand (shortage)', b: 'Excess supply: price above equilibrium; unsold stock, price cuts, falling margins.\nShortage: price below equilibrium; lost sales, price rises, new entrants attracted.' },
    ]),
    ...sub(T2, 'market-forces-competition-and-market-dominance-ocr-alevel-business', '2.3', [
      { n: 1, f: 'Physical vs non-physical markets', b: 'Physical: buyers and sellers meet in a place; touch, advice and instant sale, but footfall risk.\nNon-physical: dealing by website, app or phone; wide reach and lower overheads, but easy price comparison and data risk.' },
      { n: 2, f: 'Online vs digital', b: 'Online means trading over the internet. Digital is wider: it also covers digital products and app-based trading.' },
      { n: 3, f: 'Barriers to entry vs barriers to exit', b: 'Entry barriers keep new firms out: start-up costs, incumbents\' scale economies, brands, control of supply or distribution, patents and licences.\nExit barriers keep firms in: redundancy costs, long leases, specialised assets, reputation damage.' },
      { n: 4, f: 'Market dominance; is size the same as dominance?', b: 'Dominance: one firm (or very few) with a very large share and real power over price, output and rivals. No: power comes from few substitutes and high barriers, not size alone.' },
      { n: 5, f: 'Two firms with 31% and 8% merge; the next rival has 25%. Dominant?', b: 'Combined share 39%, 1.56 times the next rival. Not proven: it depends on barriers to entry, product similarity, ease of switching and whether a regulator challenges the deal.' },
      { n: 6, f: 'What can a competition regulator do about a merger?', b: 'Investigate it, block it, or allow it with conditions; it can also investigate anti-competitive behaviour.' },
    ]),
    ...sub(T2, 'global-context-international-trade-and-emerging-markets-ocr-alevel-business', '2.4', [
      { n: 1, f: 'Facilitators of globalisation', b: 'Multinationals; transport infrastructure; trade liberalisation; e-commerce; the Internet and communication technologies.' },
      { n: 2, f: 'Barriers to trade: tariff, quota, embargo', b: 'Tariff: a tax on imports (revenue, dearer imports). Quota: a limit on quantity (protects local producers). Embargo: a ban on trade, for political or security aims. Also subsidies and administrative rules.' },
      { n: 3, f: 'Exchange rates: converting at £1 = USD 1.25', b: 'Home to foreign: multiply (£480 × 1.25 = USD 600). Foreign to home: divide (USD 3,000 ÷ 1.25 = £2,400).' },
      { n: 4, f: 'Pound appreciates vs depreciates', b: 'Appreciates: imports cheaper in pounds, exports dearer abroad. Depreciates: imports dearer, exports cheaper abroad.' },
      { n: 5, f: 'Single European Market vs single currency', b: 'Single market: goods, services, capital and people move largely freely among members. Single currency (euro): no exchange risk or conversion cost between Eurozone members, with one shared interest rate.' },
      { n: 6, f: 'Emerging markets: features and impact on business', b: 'Fast growth, rising incomes, a growing middle class, still-developing institutions and infrastructure. Opportunity: new customers and cheaper production. Threat: new rivals, price pressure and risk.' },
    ]),
    ...sub(T2, 'political-economic-social-and-technological-factors-ocr-alevel-business', '2.5', [
      { n: 1, f: 'Direct vs indirect tax', b: 'Direct: paid straight to government by the person or firm it falls on (income tax, corporation tax). Indirect: collected by sellers and paid by consumers through prices (VAT, excise duties).' },
      { n: 2, f: 'Monetary, fiscal and supply-side policy', b: 'Monetary: interest rates and the cost and availability of money. Fiscal: government taxation and spending. Supply-side: measures that raise the economy\'s productive capacity.' },
      { n: 3, f: 'Business cycle phases, and who is most affected', b: 'Boom, downturn or recession, slump, recovery. Most affected: luxuries, durables, construction, highly indebted firms and those with high fixed costs. Least affected: necessities and budget goods.' },
      { n: 4, f: 'Effect of higher UK interest rates', b: 'Borrowing costs rise and spending on credit falls. Higher rates also tend to lift the pound, making imports cheaper and exports dearer.' },
      { n: 5, f: 'Political stability vs uncertainty', b: 'Stability supports planning, investment, steady demand and cheaper borrowing. Uncertainty delays investment and hiring; instability can disrupt supply, payments and export orders.' },
      { n: 6, f: 'Social factors affecting business', b: 'Age structure, population movement, lifestyle, attitudes and fashion. They shift demand and the labour supply.' },
    ]),
    ...sub(T2, 'digital-ethical-legal-and-environmental-factors-ocr-alevel-business', '2.6', [
      { n: 1, f: 'Digital revolution: opportunities and threats', b: 'Opportunities: wider markets, lower costs, personalised marketing, real-time data. Threats: low-cost online rivals, cyber-crime, data misuse, constant investment needed. Digitisable products (music, books, banking) are most affected.' },
      { n: 2, f: 'Law vs ethics', b: 'Law is compulsory, enforced by the state, with penalties. Ethics is chosen, based on moral judgement, and the penalty is reputational. Legal does not mean ethical.' },
      { n: 3, f: 'Consequences of failing to comply with the law', b: 'Fines, compensation, court action, lost contracts, damaged reputation and, at worst, closure.' },
      { n: 4, f: 'Sustainability, and sustainable actions', b: 'Using resources so present needs are met and later generations can meet theirs. Actions: renewable energy, less waste, recycling, responsible sourcing, durable design, measured targets.' },
      { n: 5, f: 'Ethical sourcing raises unit cost from £26 to £27.20 at a £40 price. Effect on margin?', b: 'Margin falls from 14 ÷ 40 = 35% to 12.80 ÷ 40 = 32%. Judge whether brand trust and repeat custom repay the three percentage points.' },
    ]),
    // 3 Marketing and marketing strategies
    ...topicOnly('marketing-and-marketing-strategies-ocr-alevel-business', '3', [
      { n: 1, f: 'SWOT analysis', b: 'It sorts factors into internal ones (strengths, weaknesses) and external ones (opportunities, threats). Use it to judge a firm\'s marketing position. Limits: it is a snapshot, it is subjective, and it does not rank issues or say what to do.', src: MKT },
      { n: 2, f: 'Trial marketing', b: 'Launching a product in a limited area or to a limited group before a full launch. It tests demand and finds faults, but delays launch and alerts rivals.', src: MKT },
      { n: 3, f: 'Sampling methods: random, stratified, cluster, systematic, quota, convenience', b: 'Random: equal chance. Stratified: groups sampled in proportion. Cluster: whole groups such as towns. Systematic: every nth person. Quota: fill set numbers of each type. Convenience: whoever is easiest to reach (cheap but biased).' },
      { n: 4, f: 'Normal distribution', b: 'A symmetrical bell-shaped spread around the mean. Roughly 68% of observations fall within one standard deviation either side of the mean and roughly 95% within two (standard results).', src: MKT },
      { n: 5, f: 'Standard deviation of weekly sales 40, 44, 48, 52, 56', b: 'Mean 48. Squared deviations 64, 16, 0, 16, 64 total 160; ÷ 5 = 32; √32 ≈ 5.7. A low value means steady sales and easier stock planning.' },
      { n: 6, f: 'AIDA and ATR', b: 'AIDA: Attention, Interest, Desire, Action. ATR: Awareness, Trial, Reinforcement. Both describe how consumers move towards purchase, so promotion can be matched to the stage.' },
      { n: 7, f: 'Customers vs consumers; B2B vs B2C marketing', b: 'Customers pay; consumers use. B2C uses mass media, branding and promotions; B2B uses personal selling, trade fairs, contracts and technical detail with fewer, larger buyers.' },
      { n: 8, f: 'Cross elasticity (XED) and advertising elasticity (AED)', b: 'XED = % change in quantity of A ÷ % change in price of B: positive for substitutes, negative for complements.\nAED = % change in quantity ÷ % change in advertising spend (spend +25%, sales +7.5% → AED 0.3, weak).' },
      { n: 9, f: 'Price falls 5% and quantity rises 8%. PED?', b: '8 ÷ −5 = −1.6: elastic, so the price cut raises revenue.' },
      { n: 10, f: 'Marginal vs contribution pricing', b: 'Marginal: the price covers only the extra cost of one more unit; useful for extra orders. Contribution: price minus variable cost, which contributes to fixed costs and profit.' },
      { n: 11, f: 'Above the line vs below the line; drip vs viral marketing', b: 'Above the line: paid media advertising. Below the line: other methods such as discounts, displays and sponsorship.\nDrip: a steady series of messages over time. Viral: customers spread the message themselves.' },
      { n: 12, f: 'Service marketing: the extra elements', b: 'Process (how the service is delivered), people (staff skills and manner) and physical evidence (premises, uniforms, website, receipts) that make an intangible service tangible.' },
    ]),
    // 4 Operational strategy
    ...topicOnly('operational-strategy-ocr-alevel-business', '4', [
      { n: 1, f: 'Operations management objectives', b: 'Targets for quality, cost, speed, flexibility, innovation, environment and capacity that support business objectives.', src: OPS },
      { n: 2, f: 'Job, batch, flow and cell production', b: 'Job: very low volume, high variety and unit cost. Batch: medium volume and variety. Flow: high volume, low variety, low unit cost, inflexible. Cell: team-based units, medium volume, fairly flexible.' },
      { n: 3, f: 'Added value, capacity utilisation and wastage rate', b: 'Added value = selling price − bought-in materials and services (£25 − £14.50 = £10.50).\nCapacity utilisation = actual ÷ maximum output × 100.\nWastage rate = units wasted ÷ units input × 100 (24 of 800 = 3%).' },
      { n: 4, f: 'Economic order quantity (EOQ): formula and example', b: 'EOQ = √(2 × annual demand × cost per order ÷ holding cost per unit). Demand 2,000, order cost £25, holding £2.50: √40,000 = 200 units.' },
      { n: 5, f: 'Reorder level and maximum stock', b: 'Reorder level = buffer + (usage per day × lead time). Maximum stock = reorder level + reorder quantity − usage in lead time. Buffer 100, usage 30, lead time 2, order 400 → reorder level 160, maximum 500.' },
      { n: 6, f: 'PERT expected time', b: '(O + 4M + P) ÷ 6, where O is optimistic, M most likely and P pessimistic. O = 2, M = 3, P = 10 → (2 + 12 + 10) ÷ 6 = 4 days.' },
      { n: 7, f: 'Total float vs free float', b: 'Total float = LFT − EST − duration: delay possible without delaying the project. Free float = EST of next activity − EST − duration: delay possible without affecting the next activity. EST 4, duration 3, LFT 10, next EST 9 → total 3, free 2.' },
      { n: 8, f: 'Internal economies, external economies and diseconomies of scale', b: 'Internal: technical, purchasing, financial, marketing, managerial. External: labour pool, supplier clusters, infrastructure. Diseconomies: communication, coordination, alienation, congestion.' },
      { n: 9, f: 'Total quality management (TQM)', b: 'Quality as the responsibility of every employee.', src: OPS },
      { n: 10, f: 'Benchmarking', b: 'Comparing performance with the best and adopting their practice.', src: OPS },
      { n: 11, f: 'Fixed reorder level vs fixed time reordering; Kanban', b: 'Fixed reorder level: set quantity, variable timing. Fixed time reordering: set timing, variable quantity. Kanban: cards signal when to replace stock.' },
      { n: 12, f: 'Outsourcing, subcontracting, offshoring and re-shoring', b: 'Outsourcing: another business does an activity for you. Subcontracting: another firm does part of a specific job. Offshoring: activity moved abroad. Re-shoring: activity brought back home.' },
    ]),
    // 5 Human resources
    ...topicOnly('human-resources-ocr-alevel-business', '5', [
      { n: 1, f: 'Line vs staff relationships', b: 'Line: manager to direct subordinate, with authority to instruct. Staff: specialist advice with no direct command.' },
      { n: 2, f: 'The communication model', b: 'Source, message, media, barriers, receiver, feedback.' },
      { n: 3, f: 'Workforce plan: 70 carers needed, 58 employed, 10% will leave. Recruits needed?', b: 'Leavers 5.8, so 52.2 remain; 70 − 52.2 = 17.8, so 18 recruits.' },
      { n: 4, f: 'Flexi-time, compressed hours and annualised hours', b: 'Flexi-time: staff choose hours around core times. Compressed hours: the same hours in fewer, longer days. Annualised hours: a yearly total spread to match demand.' },
      { n: 5, f: 'Job description vs person specification', b: 'Job description: the duties of the post. Person specification: the skills, qualifications and qualities of the person needed.' },
      { n: 6, f: 'Absenteeism and lateness: formulas and example', b: 'Absenteeism = days lost ÷ days available × 100 (1,440 ÷ 28,800 = 5%).\nLateness = late arrivals ÷ possible attendances × 100 (84 ÷ 2,800 = 3%).' },
      { n: 7, f: 'Pro rata holiday: 25 days for five days a week. Entitlement for two days a week?', b: 'Full entitlement × (days worked ÷ full-time days) = 25 × 2 ÷ 5 = 10 days.' },
      { n: 8, f: 'Fair reasons for dismissal, and examples of unfair reasons', b: 'Fair: capacity, conduct, redundancy, some other substantial reason. Unfair include pregnancy, trade union membership, discrimination and whistle blowing.' },
      { n: 9, f: 'McGregor\'s Theory X and Theory Y', b: 'Theory X: managers assume workers dislike work and need control. Theory Y: managers assume workers seek responsibility and can direct themselves.' },
      { n: 10, f: 'Adair\'s action-centred leadership', b: 'A leader must balance three needs: the task, the team and the individual.' },
      { n: 11, f: 'McClelland, Vroom and Locke', b: 'McClelland: needs for achievement, power and affiliation. Vroom (expectancy): effort, performance and reward must be linked. Locke: clear, hard goals improve performance.' },
      { n: 12, f: 'Forms of employee participation', b: 'Industrial democracy, participative decision making and works councils. Trade unions represent workers and bargain over pay and conditions.' },
    ]),
    // 6 Accounting and financial considerations
    ...topicOnly('accounting-and-financial-considerations-ocr-alevel-business', '6', [
      { n: 1, f: 'Short-term vs long-term sources of finance', b: 'Short-term: overdraft, trade credit, factoring. Long-term: shares, loans, debentures, retained profit. Internal sources: retained profit, sale of non-current assets, tighter working capital.' },
      { n: 2, f: 'Accounting conventions', b: 'Consistency, going concern, accruals (matching), materiality, objectivity, prudence (conservatism) and realisation; accounts should give a true and fair view.' },
      { n: 3, f: 'Cost centre vs profit centre', b: 'A cost centre collects costs. A profit centre earns revenue as well as incurring costs, so its profit can be measured.' },
      { n: 4, f: 'Full, absorption and marginal costing', b: 'Full costing: all costs charged to units. Absorption: overheads added using a rate (e.g. overheads ÷ total hours). Marginal: only variable costs per unit; fixed costs treated as a period cost.' },
      { n: 5, f: 'Fixed costs £18,000, price £9, variable cost £5. Break-even, and margin of safety at 8,000 units?', b: 'Contribution £4; break-even 18,000 ÷ 4 = 4,500 units. At 8,000 units, margin of safety = 3,500 units (43.75%).' },
      { n: 6, f: 'When should a business accept a special order?', b: 'If its contribution is positive, there is spare capacity, and regular sales and prices are unaffected.' },
      { n: 7, f: 'Straight-line vs reducing balance depreciation', b: 'Straight line = (cost − residual value) ÷ life: (30,000 − 3,000) ÷ 5 = £5,400 a year. Reducing balance = a fixed % of net book value: 30% on £20,000 gives £6,000, then £4,200; NBV £9,800. Depreciation cuts profit, not cash.' },
      { n: 8, f: 'Working capital and the working capital cycle', b: 'Working capital = current assets − current liabilities. The cycle: cash out for inventory, production, sale, credit period, then cash in from customers.' },
      { n: 9, f: 'Income statement: from revenue to retained profit', b: 'Revenue − cost of sales = gross profit; − operating expenses = operating profit; − interest = profit before tax; − tax = profit for the year; − dividends = retained profit.' },
      { n: 10, f: 'Return on equity, earnings per share and price/earnings ratio', b: 'Return on equity = profit for the year ÷ equity × 100.\nEarnings per share = profit for the year ÷ number of shares.\nP/E ratio = share price ÷ earnings per share.' },
      { n: 11, f: 'Dividend yield and non-current asset turnover', b: 'Dividend yield = dividend per share ÷ share price × 100 (6p ÷ 150p = 4%).\nNon-current asset turnover = revenue ÷ non-current assets.' },
      { n: 12, f: 'Creditor days', b: 'Payables ÷ cost of sales × 365: how long the business takes to pay its suppliers.' },
    ]),
    // 7 The global environment of business
    ...topicOnly('the-global-environment-of-business-ocr-alevel-business', '7', [
      { n: 1, f: 'Globalisation vs global strategy', b: 'Globalisation is a trend outside any one firm\'s control: economies and markets becoming more closely linked. A global strategy is one firm\'s deliberate plan to compete in world markets.' },
      { n: 2, f: 'Multinationals: positive and negative effects', b: 'Positive: investment, jobs, skills, tax income, consumer choice, spread of technology. Negative: local firms squeezed out, production can move away quickly, strong bargaining power over suppliers.' },
      { n: 3, f: 'Which firms are most affected by globalisation?', b: 'Those with imported inputs, overseas sales, global rivals and price-aware customers. Firms serving a small local market with local inputs are less affected.' },
      { n: 4, f: 'The pound falls from USD 1.60 to USD 1.40. Effect on a USD 700 invoice?', b: 'The pound has depreciated. The invoice costs 700 ÷ 1.40 = £500 instead of 700 ÷ 1.60 = £437.50, so £62.50 more.' },
      { n: 5, f: 'Percentage change in an exchange rate: £1 = €1.20 rises to €1.32', b: '(1.32 − 1.20) ÷ 1.20 × 100 = 10%: the pound has appreciated by 10%.' },
      { n: 6, f: 'Landed cost and an 8% tariff on a £125 import', b: 'Landed cost per unit = unit cost + tariff + shipping. Tariff = 125 × 0.08 = £10, so £135 before shipping.' },
      { n: 7, f: 'Offshoring payback', b: 'Payback (years) = set-up cost ÷ annual saving. Weigh the savings against quality control, shipping time and reputation, and against the option of re-shoring.' },
      { n: 8, f: 'Financial vs non-financial support for international traders', b: 'Financial: export credit insurance, bank trade finance, grants. Non-financial: official advice and market information, trade shows, agents, business associations.' },
      { n: 9, f: 'Factors to consider when trading internationally', b: 'Language, culture and customs, logistics, currency, and buying habits.' },
      { n: 10, f: 'Standardised vs adapted marketing mix abroad', b: 'Standardised: one mix everywhere, cheaper and builds a global brand. Adapted: tailored to each market\'s culture, law and income, costlier but avoids cultural mistakes.' },
      { n: 11, f: 'Free trade vs trading bloc: advantages and disadvantages to a business', b: 'Free trade: wider markets, cheaper inputs, but tougher rivals and reliance on foreign suppliers.\nTrading bloc: smoother access and shared rules for members, but rivals within the bloc, imposed rules and barriers to outsiders.' },
      { n: 12, f: 'UK outside the EU and the Eurozone: effects on a business', b: 'Own trade deals, rules and interest rate, but more paperwork, possible tariffs and certification, exchange rate risk when selling in euros, and less influence over EU rules.' },
    ]),
  ],
};
