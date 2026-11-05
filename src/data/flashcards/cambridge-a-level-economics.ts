/**
 * D-438 -- flashcards for Cambridge International AS & A Level Economics 9708
 * (for examination in 2026, 2027 and 2028).
 *
 * One block per subtopic, in syllabus order. Topics 1-6 are the AS Level content;
 * topics 7-11 are the additional A Level content. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9708); origin 'revision-notes'.
 *
 * The syllabus is not tiered, so no card is marked upper tier. Worked examples
 * use the same invented figures as the Marlbridge 9708 revision notes.
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

const T1 = 'basic-economic-ideas-and-resource-allocation-cambridge-alevel-economics';
const T2 = 'the-price-system-and-the-microeconomy-as-cambridge-alevel-economics';
const T3 = 'government-microeconomic-intervention-as-cambridge-alevel-economics';
const T4 = 'the-macroeconomy-as-cambridge-alevel-economics';
const T5 = 'government-macroeconomic-intervention-cambridge-alevel-economics';
const T6 = 'international-economic-issues-cambridge-alevel-economics';
const T7 = 'the-price-system-and-the-microeconomy-a-cambridge-alevel-economics';
const T8 = 'government-microeconomic-intervention-a-cambridge-alevel-economics';
const T9 = 'the-macroeconomy-a-cambridge-alevel-economics';
const T10 = 'government-macroeconomic-intervention-a-cambridge-alevel-economics';
const T11 = 'international-economic-issues-a-cambridge-alevel-economics';

const s = (id: string) => `cambridge-a-level-economics-${id}-revision-notes`;
const SC = s('scarcity-choice-opportunity-cost-and-the-methods-of');
const FP = s('factors-of-production-and-economic-systems');
const PPC = s('production-possibility-curves-and-the-classification');
const DS = s('demand-supply-and-market-equilibrium');
const EL = s('price-income-and-cross-elasticity-of-demand');
const MEI = s('methods-and-effects-of-microeconomic-intervention');
const NI = s('national-income-statistics-and-the-circular-flow-of');
const ADAS = s('aggregate-demand-and-aggregate-supply-analysis');
const EG = s('economic-growth-measurement-causes-and-consequences');
const MOF = s('macroeconomic-objectives-and-fiscal-policy');
const MSS = s('monetary-policy-and-supply-side-policy');
const TRD = s('absolute-and-comparative-advantage-free-trade-and-the');
const PROT = s('protectionism');
const CA = s('current-account-of-the-balance-of-payments-and');
const FX = s('floating-exchange-rates');
const UT = s('utility-indifference-curves-and-budget-lines');
const EFF = s('efficiency-market-failure-and-externalities');
const SRP = s('short-run-production-and-costs');
const LRP = s('long-run-production-economies-of-scale-revenue-and');
const MSB = s('market-structures-barriers-to-entry-and-concentration');
const OLI = s('oligopoly-contestable-markets-price-and-non-price');
const GSF = s('growth-and-survival-of-firms');
const MFP = s('market-failure-policies-permits-property-rights');
const EQ = s('equity-equality-poverty-and-redistribution-policies');
const LAB = s('labour-demand-supply-and-wage-determination-in-perfect');
const ILM = s('imperfect-labour-markets-wage-differentials-transfer');
const CAD = s('components-of-ad-the-accelerator-and-output-gaps-in');
const APG = s('actual-and-potential-growth-output-gaps-the-business');
const ISG = s('inclusive-and-sustainable-economic-growth');
const EUL = s('employment-unemployment-and-labour-mobility');
const MOI = s('macroeconomic-objectives-and-their-interrelationships');
const EFM = s('effectiveness-of-fiscal-and-monetary-policy-including');
const ESS = s('effectiveness-of-supply-side-exchange-rate-and-trade');
const ERS = s('exchange-rate-systems-marshall-lerner-and-the-j-curve');
const DEV = s('economic-development-and-measuring-living-standards');
const CHR = s('characteristics-of-countries-at-different-levels-of');
const AID = s('international-aid-trade-and-investment');
const MNC = s('multinationals-fdi-external-debt-the-imf-and-the-world');
const GLB = s('globalisation-trading-blocs-trade-creation-and');

export const DECK_CAMBRIDGE_A_LEVEL_ECONOMICS: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'a-level',
  subjectSlug: 'economics',
  syllabusCode: '9708',
  syllabusSeries: 'For examination in 2026, 2027 and 2028',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // 1 Basic economic ideas and resource allocation (AS)
    ...sub(T1, 'scarcity-choice-and-opportunity-cost-cambridge-alevel-economics', '1.1', [
      { n: 1, f: 'Scarcity', b: 'Unlimited wants set against limited resources. The fundamental economic problem.', src: SC },
      { n: 2, f: 'Opportunity cost', b: 'The sacrifice made by a choice, valued as the best option passed over.', src: SC },
      { n: 3, f: 'Scarcity versus a shortage', b: 'Scarcity is permanent and applies to rich and poor alike (and to time as well as money). A shortage is a market event at one particular price, when quantity demanded exceeds quantity supplied.' },
      { n: 4, f: 'A farm can grow 50 tonnes of wheat or 20 tonnes of barley. What is the opportunity cost of 1 tonne of barley, and of 1 tonne of wheat?', b: '1 tonne of barley costs 50 ÷ 20 = 2.5 tonnes of wheat.\n1 tonne of wheat costs 20 ÷ 50 = 0.4 tonnes of barley.' },
      { n: 5, f: 'What, how and for whom to produce: what each question asks', b: 'What: which goods and services, in what quantities.\nHow: which method, e.g. labour-intensive or capital-intensive.\nFor whom: how output is shared among people. A market shares it by ability to pay, which raises (normative) questions of fairness.' },
    ]),
    ...sub(T1, 'economic-methodology-cambridge-alevel-economics', '1.2', [
      { n: 1, f: 'Positive statement and normative statement', b: 'Positive: a statement of fact that can be tested against evidence (it may be false and still be positive).\nNormative: a value judgement about what ought to be. Watch for should, ought, fair, too much, better.', src: SC },
      { n: 2, f: 'Ceteris paribus', b: 'All other things being equal: change one variable, hold the rest constant and observe its separate effect. It is an assumption, not a claim that other things never change.', src: SC },
      { n: 3, f: 'Short run, long run and very long run', b: 'Short run: one or more factors of production cannot be changed.\nLong run: all factors can vary.\nVery long run: technology and the quality of factors can also change.\nThey are defined by flexibility, not by calendar time.', src: SC },
      { n: 4, f: 'Economics as a social science: method and limits', b: 'It uses scientific method (observe, model, hypothesise, test against data, refine) to study human behaviour in society. Limits: few controlled experiments, behaviour changes with expectations, and values enter policy advice.' },
      { n: 5, f: 'Classify: "A subsidy raises output" and "The subsidy is unfair"', b: '"A subsidy raises output" is positive: it can be tested with evidence.\n"The subsidy is unfair" is normative: it rests on a value judgement.' },
    ]),
    ...sub(T1, 'factors-of-production-cambridge-alevel-economics', '1.3', [
      { n: 1, f: 'Land, labour, capital and enterprise: definitions and rewards', b: 'Land: all natural resources used in production (rent).\nLabour: the physical and mental effort of people in production (wages).\nCapital: man-made goods used to produce other goods and services (interest).\nEnterprise: taking risks and organising the other factors (profit).', src: FP },
      { n: 2, f: 'Human capital and physical capital', b: 'Human capital: skills, knowledge and health built up in workers; it cannot be sold and leaves with the worker.\nPhysical capital: machines, tools and buildings used in production; it can be sold and stays if a worker leaves.', src: FP },
      { n: 3, f: 'Division of labour: two benefits and two costs', b: 'Benefits: higher output per worker and lower unit costs (repetition builds speed; machines become worthwhile).\nCosts: boredom and lower motivation; narrow skills, so a risk of structural unemployment and a stoppage if one stage fails.' },
      { n: 4, f: 'The role of the entrepreneur, and why profit is a residual', b: 'The entrepreneur takes risks and organises land, labour and capital. Profit is paid after everyone else, so it can be negative and a fall in sales hits it hardest. Rent, wages and interest are usually agreed in advance.' },
      { n: 5, f: 'A stall has fixed costs of 900, a price of 4 and a variable cost of 1.50 per unit. Find the break-even output.', b: 'Break-even output = fixed costs ÷ (price − variable cost per unit) = 900 ÷ 2.50 = 360 units. At 500 units profit = 500 × 2.50 − 900 = 350.' },
    ]),
    ...sub(T1, 'resource-allocation-in-different-economic-systems-cambridge-alevel-economics', '1.4', [
      { n: 1, f: 'Market economy', b: 'Private owners decide through the price mechanism.', src: FP },
      { n: 2, f: 'Planned economy', b: 'The state owns resources and decides through a central plan.', src: FP },
      { n: 3, f: 'Mixed economy', b: 'Market and state both allocate resources. Real economies sit at different points between market and planned; none is pure, so the useful question is how far the state intervenes.', src: FP },
      { n: 4, f: 'Market, planned and mixed economies: one strength and one weakness each', b: 'Market: responsive and efficient, but ignores those without income and under-provides public goods.\nPlanned: can focus on national priorities, but suffers from poor information and weak incentives.\nMixed: combines price signals with state correction, but government can also get it wrong.' },
      { n: 5, f: 'Planners fix a price of 5 when demand is 450 units and the plan produces 350. What happens?', b: 'A shortage of 450 − 350 = 100 units, 22.2% of demand. Without a price rise, it appears as queues, rationing or an illegal market.' },
      { n: 6, f: 'How does a market reallocate resources when demand for a product rises?', b: 'Shortage at the old price → price rises → profit per unit rises → firms offer more and bid for labour and materials → resources move in from less profitable uses. Nobody orders it: the price signal does the work.' },
    ]),
    ...sub(T1, 'production-possibility-curves-cambridge-alevel-economics', '1.5', [
      { n: 1, f: 'Production possibility curve (PPC)', b: 'The largest output pairs of two goods an economy can make in a period when every resource is fully and efficiently used and technology is fixed.', src: PPC },
      { n: 2, f: 'Straight-line PPC versus a PPC bowed out (concave to the origin)', b: 'Straight: constant opportunity cost, because resources are equally good at both uses (rare).\nBowed out: increasing opportunity cost, because resources are not equally suited to both uses; later units draw in poorly suited resources (typical).' },
      { n: 3, f: 'What shifts a PPC outward, and what shifts it inward?', b: 'Outward: more resources (discoveries, labour force growth, investment), better quality (education, training, health), better technology.\nInward: war or disaster destroying capital, emigration or illness, depleted resources.\nA pivot: capacity changes for one good only.' },
      { n: 4, f: 'What does a point inside, on and outside a PPC show?', b: 'Inside: unemployment or inefficiency; both goods can rise with no opportunity cost.\nOn: full employment and productive efficiency.\nOutside: unattainable until the curve shifts. A PPC cannot show the best point, which depends on preferences.' },
      { n: 5, f: 'At 20 capital goods the PPC allows 72 consumer goods, but the economy makes 60. How much spare capacity is there?', b: '72 − 60 = 12 consumer goods, 12 ÷ 72 × 100 = 16.7% of the maximum. Moving to the curve gains 12 consumer goods with no loss of capital goods.' },
      { n: 6, f: 'Potential growth versus actual growth on a PPC', b: 'Potential growth is an outward shift of the curve (more capacity). Actual growth needs the economy to produce more, moving towards or onto the new curve. Choosing more capital goods now costs consumer goods today but can raise future capacity.' },
    ]),
    ...sub(T1, 'classification-of-goods-and-services-cambridge-alevel-economics', '1.6', [
      { n: 1, f: 'Free good and private (economic) good', b: 'Free good: no opportunity cost of supply; not scarce, no price.\nPrivate good: scarce, with an opportunity cost, normally priced, rivalrous and excludable.', src: PPC },
      { n: 2, f: 'Public good', b: 'A good that is non-excludable and non-rivalrous. It needs both properties.', src: PPC },
      { n: 3, f: 'Free rider, and why the market provides no public good', b: 'A free rider benefits from a good without paying for it. Because non-payers cannot be excluded, households wait for others to pay, the firm cannot earn revenue, and the market provides none or too little; government provides it from tax.', src: PPC },
      { n: 4, f: 'Merit good and demerit good', b: 'Merit good: under-consumed in a free market because consumers do not fully appreciate its benefits (imperfect information), e.g. education.\nDemerit good: over-consumed because consumers do not fully appreciate its harm, e.g. tobacco.', src: PPC },
      { n: 5, f: 'Exam trap: is a state school place a public good?', b: 'No. It is rivalrous and excludable. A good provided by the state is not necessarily a public good; education is a merit good.' },
      { n: 6, f: 'Merit good: private demand P = 40 − 2Q, marginal social benefit P = 52 − 2Q, supply P = 4 + 2Q. Find the under-consumption.', b: 'Market: 40 − 2Q = 4 + 2Q, so Q = 9 (P = 22).\nOptimum: 52 − 2Q = 4 + 2Q, so Q = 12 (P = 28).\nUnder-consumption = 3 units.' },
    ]),
    // 2 The price system and the microeconomy (AS)
    ...sub(T2, 'demand-and-supply-curves-cambridge-alevel-economics', '2.1', [
      { n: 1, f: 'Effective demand', b: 'Willingness to buy at a price, backed by the ability to pay. A want has no money behind it.', src: DS },
      { n: 2, f: 'Individual demand and market demand', b: 'Individual demand: the quantity one buyer will purchase at each price.\nMarket demand: the sum of all individual demands at each price (add quantities at each price, not prices at each quantity).', src: DS },
      { n: 3, f: 'Change in demand versus change in quantity demanded', b: 'A change in demand is a shift of the curve, caused by a non-price determinant (income, prices of related goods, tastes, population, expectations). A change in quantity demanded is a movement along the curve, caused by the good\'s own price. The same split applies to supply.' },
      { n: 4, f: 'Which way does each event shift supply: higher costs, better technology, an indirect tax, a subsidy, more firms?', b: 'Higher costs: left.\nBetter technology: right.\nIndirect tax: left.\nSubsidy: right.\nMore firms: right.' },
      { n: 5, f: 'Exam trap: what does a rise in income do to demand for an inferior good?', b: 'It shifts demand left. Inferior goods are the exception to the rule that higher income shifts demand right (which holds for normal goods).' },
    ]),
    ...sub(T2, 'price-income-and-cross-elasticity-of-demand-cambridge-alevel-economics', '2.2', [
      { n: 1, f: 'PED, YED and XED: formulas', b: 'PED = %ΔQd ÷ %ΔP (own price).\nYED = %ΔQd ÷ %Δincome.\nXED = %ΔQd of A ÷ %ΔP of B.\nElasticity has no units; percentage change = (new − old) ÷ old × 100.', src: EL },
      { n: 2, f: 'Income rises from 2,000 to 2,500 and demand from 50 to 57.5. Find YED and classify the good.', b: 'Income +25%, demand +15%. YED = 15 ÷ 25 = +0.6: a normal good that is income inelastic (a "necessity"). Above +1 would be income elastic ("luxury"); negative would be inferior.' },
      { n: 3, f: 'The price of B falls from 5 to 4 and demand for A rises from 400 to 460. Find XED and say how A and B are related.', b: 'Price of B −20%, demand for A +15%. XED = 15 ÷ −20 = −0.75: complements. A positive XED means substitutes; a larger size means a closer relationship.' },
      { n: 4, f: 'How does PED change along a straight-line demand curve?', b: 'Slope is constant but PED varies: elastic at high prices and low quantities, unitary at the midpoint, inelastic at low prices. Total revenue is highest at the midpoint. For Q = 60 − P, at P = 45 point PED = −45 ÷ 15 = −3.' },
      { n: 5, f: 'PED and total expenditure: what does a price rise do when demand is elastic, unitary and inelastic?', b: 'Elastic: total expenditure falls.\nUnitary: unchanged.\nInelastic: rises.\nExample: PED −2.5 and a 4% price rise cut quantity 10%, so revenue becomes 1.04 × 0.90 = 0.936 of the original.' },
      { n: 6, f: 'Why does a government seeking tax revenue prefer to tax goods with inelastic demand?', b: 'Quantity falls by less, so more revenue is raised. But for the same reason the tax is less effective if the aim is to reduce consumption. Also: estimates come from past data, and elasticities differ between short and long run.' },
    ]),
    ...sub(T2, 'price-elasticity-of-supply-cambridge-alevel-economics', '2.3', [
      { n: 1, f: 'PES: definition and formula. Price rises from 60 to 66 and quantity supplied from 300 to 345. Find PES.', b: 'How strongly quantity supplied reacts to a change in the good\'s own price. PES = % change in quantity supplied ÷ % change in price = 15 ÷ 10 = 1.5: elastic.' },
      { n: 2, f: 'Straight-line supply curves and PES', b: 'Through the origin: PES = 1 everywhere.\nMeeting the price axis: PES above 1 everywhere.\nMeeting the quantity axis: PES below 1 everywhere.\nVertical: 0. Horizontal: infinity.' },
      { n: 3, f: 'Factors that make supply more price elastic', b: 'Spare capacity, stocks of finished goods, mobile factors, a long time to respond, quick production, free entry for new firms and plentiful inputs.' },
      { n: 4, f: 'Supply is Qs = 15P − 60. Find PES when price rises from 10 to 12.', b: 'Qs rises from 90 to 120: +33.3%. Price +20%. PES = 33.3 ÷ 20 = 1.67. The curve meets the price axis (Qs = 0 at P = 4), so PES is above 1, as expected.' },
      { n: 5, f: 'Why does PES rise with time, and why does it matter?', b: 'Momentary: supply cannot change. Short run: at least one factor fixed. Long run: all factors can change (e.g. PES 0, then 0.3, then 1.8). Low PES means slow reactions, lasting shortages and large price rises; high PES means brief shortages and small price changes.' },
    ]),
    ...sub(T2, 'the-interaction-of-demand-and-supply-cambridge-alevel-economics', '2.4', [
      { n: 1, f: 'Equilibrium and disequilibrium', b: 'Equilibrium: the price where buyers\' plans and sellers\' plans match, so nothing pushes price up or down.\nDisequilibrium: any price where the two quantities differ (excess demand or excess supply).', src: DS },
      { n: 2, f: 'Qd = 60 − 2P and Qs = 3P. Find the equilibrium, then the new one when supply rises by 10 at every price.', b: 'Equilibrium: 60 − 2P = 3P, so P = 12 and Q = 36.\nNew supply Qs = 3P + 10: 60 − 2P = 3P + 10, so P = 10 and Q = 40. Price falls, quantity rises.' },
      { n: 3, f: 'Joint demand, alternative demand, derived demand and joint supply', b: 'Joint demand: complements used together.\nAlternative demand: substitutes.\nDerived demand: demand for an input comes from demand for the product it makes.\nJoint supply: one process yields two products, so more of one means more of the other.' },
      { n: 4, f: 'The three functions of price in a market', b: 'Rationing: price rises until quantity demanded matches the limited quantity available.\nSignalling: price changes transmit preferences and show scarcity.\nIncentivising: higher price and profit draw resources into the market, and encourage buyers to economise.' },
      { n: 5, f: 'Demand rises and supply falls at the same time. What can you say?', b: 'Price definitely rises; the change in quantity depends on the relative size of the two shifts. With two shifts, one outcome is certain and the other is unclear.' },
    ]),
    ...sub(T2, 'consumer-and-producer-surplus-cambridge-alevel-economics', '2.5', [
      { n: 1, f: 'Consumer surplus', b: 'The difference between what consumers are willing to pay and what they actually pay. On a diagram: the area under the demand curve and above the price.' },
      { n: 2, f: 'Producer surplus', b: 'The difference between the price producers actually receive and the minimum they would accept. On a diagram: the area above the supply curve and below the price.' },
      { n: 3, f: 'How do you calculate a consumer or producer surplus triangle?', b: 'Surplus = ½ × base × height. The base is the quantity traded; the height is the vertical gap between where the curve meets the price axis and the market price.' },
      { n: 4, f: 'What happens to consumer and producer surplus when a per-unit tax is imposed?', b: 'Both fall: buyers pay more and sellers receive less on a smaller quantity. Part of the lost surplus becomes tax revenue; the rest is a deadweight welfare loss.' },
      { n: 5, f: 'Demand rises. How does the elasticity of supply decide who gains most surplus?', b: 'Inelastic supply: a big price rise, so producer surplus rises a lot. Elastic supply: a small price rise and a big quantity rise, so more of the gain goes to consumers.' },
      { n: 6, f: 'Producer surplus versus profit', b: 'Producer surplus is revenue minus the cost of the variable inputs, so it is larger than profit when fixed costs exist.' },
    ]),

    // 3 Government microeconomic intervention (AS)
    ...sub(T3, 'reasons-for-government-intervention-in-markets-cambridge-alevel-economics', '3.1', [
      { n: 1, f: 'Why does a market fail to provide a public good? (the chain)', b: 'Non-excludable, so non-payers cannot be kept out → people free-ride and hide their true valuation → a private firm cannot earn revenue → non-provision. Government provides it, funded by tax, which removes the free-rider option.' },
      { n: 2, f: 'Non-provision versus wrong quantity', b: 'Public goods suffer non-provision: the market supplies none. Merit and demerit goods are supplied, but in the wrong quantity (too little or too much) because of imperfect information.' },
      { n: 3, f: 'Merit good: perceived demand P = 30 − Q, informed demand P = 36 − Q, supply P = 6 + Q. Find the under-consumption.', b: 'Market: 30 − Q = 6 + Q, so Q = 12 (P = 18).\nInformed: 36 − Q = 6 + Q, so Q = 15 (P = 21).\nUnder-consumption = 3 units. The informed curve is not observable, so the gap is a judgement.' },
      { n: 4, f: 'Maximum price and minimum price: where each must be set, and the result', b: 'Maximum price (legal ceiling): only effective below equilibrium; gives a shortage. Reason: affordability.\nMinimum price (legal floor): only effective above equilibrium; gives a surplus. Reason: protect producer incomes or discourage a demerit good.' },
      { n: 5, f: 'Bread: Qd = 400 − 2P, Qs = 4P − 200. A maximum price of 80 is set. Find the shortage.', b: 'Equilibrium: 600 = 6P, so P = 100 and Q = 200. At 80: Qd = 240, Qs = 120, a shortage of 120. Only 120 are traded, so revenue falls from 20,000 to 9,600.' },
    ]),
    ...sub(T3, 'methods-and-effects-of-government-intervention-in-markets-cambridge-alevel-economics', '3.2', [
      { n: 1, f: 'Specific indirect tax and tax incidence', b: 'A specific tax is a fixed amount per unit, paid by the seller to the government; it shifts supply up by the tax. Incidence is who in practice bears it: the price rises by less than the tax, and the less elastic side bears the larger share.', src: MEI },
      { n: 2, f: 'Qd = 150 − 6P, Qs = −30 + 6P. A tax of 4 per unit is imposed. Find the new price, quantity and revenue.', b: 'Before: P = 15, Q = 60. After: 150 − 6P = −54 + 6P, so P = 17 and Q = 48. Buyers pay 2 more, sellers keep 13 (2 less). Revenue = 4 × 48 = 192, split 96 and 96. Welfare loss = ½ × 4 × 12 = 24.' },
      { n: 3, f: 'Subsidy: effect on supply, price and quantity', b: 'A per-unit payment to producers that lowers their costs, shifting supply down by the subsidy. The market price falls by less than the subsidy, quantity rises and the government pays subsidy × new quantity. Used for merit goods and positive externalities.' },
      { n: 4, f: 'Buffer stock scheme: how it works and its weaknesses', b: 'An agency buys at a floor price in good harvests and sells at a ceiling in poor ones, keeping price within a band. Weaknesses: stock runs out after consecutive poor years, storage is costly, and a band away from the long-run price drifts into permanent surplus or shortage.', src: MEI },
      { n: 5, f: 'Direct provision: case for and against', b: 'For: reaches those who cannot pay, supplies goods markets will not, can aim at equity.\nAgainst: opportunity cost of tax funds, weak incentive to cut costs, queues or over-use when free, a poor match to what people want.' },
      { n: 6, f: 'Provision of information: strengths and limits', b: 'Labels, campaigns and warnings correct imperfect information about merit and demerit goods. Strengths: cheap, keeps choice, no price rise. Limits: slow, uncertain, may be ignored, and weak against habit and addiction.' },
    ]),
    ...sub(T3, 'addressing-income-and-wealth-inequality-cambridge-alevel-economics', '3.3', [
      { n: 1, f: 'Income versus wealth', b: 'Income is a flow: money received per period (wages, rent, interest, dividends, benefits). Wealth is a stock: the value of assets owned minus debts, at one date. Saving turns income into wealth; wealth earns income.' },
      { n: 2, f: 'Gini coefficient: what it measures and its limits', b: '0 is perfect equality, 1 means one household has everything; higher means more unequal. It is the area between the line of equality and the Lorenz curve as a share of the area under the line. Limits: one number hides the shape, says nothing about absolute living standards or fairness.' },
      { n: 3, f: 'Main causes of income and wealth inequality', b: 'Differences in skills and education, shifts in demand for occupations, compensating differences, discrimination and barriers, unemployment or part-time work, ownership of capital, market power, saving and compounding, inheritance, and rising asset prices.' },
      { n: 4, f: 'Labour demand L = 700 − 20w, supply L = −100 + 30w. A minimum wage of 18 is set. Find the effect.', b: 'Free market: 800 = 50w, so w = 16 and L = 380. At 18: demand 340, supply 440, so employment falls to 340 and unemployment is 100. Elasticity of labour demand ≈ −10.5% ÷ 12.5% = −0.84; the wage bill rises from 6,080 to 6,120.' },
      { n: 5, f: 'Tax is 0% up to 9,000 and 30% above. Find the average and marginal rates on an income of 24,000.', b: 'Tax = 15,000 × 0.30 = 4,500. Average rate = 4,500 ÷ 24,000 = 18.75%; marginal rate = 30%. At 60,000 the average rate is 25.5%, so the tax is progressive.' },
      { n: 6, f: 'Universal versus means-tested benefits', b: 'Universal: simple and reach everyone, but cost more and give money to the well off.\nMeans-tested: targeted and cheaper, but cost more to administer, may not be taken up, and may discourage extra earnings.' },
    ]),
    // 4 The macroeconomy (AS)
    ...sub(T4, 'national-income-statistics-cambridge-alevel-economics', '4.1', [
      { n: 1, f: 'GDP', b: 'Total value of final goods and services made inside the country over a year, whoever owns the factors.', src: NI },
      { n: 2, f: 'GNI and NNI', b: 'GNI = GDP plus net primary income from abroad (income earned abroad by residents less income paid to foreign owners of factors in the country).\nNNI = GNI minus depreciation.', src: NI },
      { n: 3, f: 'Market prices versus basic prices', b: 'Market price: what the buyer pays, including taxes on products and net of product subsidies.\nBasic price: what the producer receives = market price − product taxes + product subsidies.', src: NI },
      { n: 4, f: 'GDP at basic prices 350; product taxes 52; subsidies 12; income earned abroad 31; paid abroad 24; depreciation 41. Find GDP at market prices, GNI and NNI.', b: 'GDP at market prices = 350 + 52 − 12 = 390.\nNet primary income = 31 − 24 = +7, so GNI = 397.\nNNI = 397 − 41 = 356.' },
      { n: 5, f: 'Why can GNI be below GDP?', b: 'Foreign-owned firms produce in the country, so their output counts in GDP, but their profits are sent abroad and are not income of residents. Net primary income is negative, so GNI is below GDP.' },
    ]),
    ...sub(T4, 'introduction-to-the-circular-flow-of-income-cambridge-alevel-economics', '4.2', [
      { n: 1, f: 'Injection and leakage (withdrawal)', b: 'Injection: spending that enters the circular flow from outside household consumption.\nLeakage: income that leaves the flow without returning as spending on domestic output.', src: NI },
      { n: 2, f: 'The three leakages and three injections', b: 'Leakages: savings (S), taxes (T), imports (M).\nInjections: investment (I), government spending (G), exports (X).' },
      { n: 3, f: 'Equilibrium condition in the two-sector, three-sector and open-economy circular flow', b: 'Two sectors: S = I.\nThree sectors: S + T = I + G.\nOpen economy: S + T + M = I + G + X.' },
      { n: 4, f: 'S = 30, T = 50, M = 40, I = 45, G = 55, X = 20. Then exports fall to 8. What happens?', b: 'At first leakages and injections are both 120: equilibrium. With X = 8, injections are 108 against leakages of 120, a net leakage of 12, so national income falls until leakages fall to match injections.' },
      { n: 5, f: 'Why is saving a leakage even though banks lend savings to firms?', b: 'Saving removes income from the spending loop when it happens. It becomes an injection only when firms actually borrow and spend it on capital goods (investment).' },
    ]),
    ...sub(T4, 'aggregate-demand-and-aggregate-supply-analysis-cambridge-alevel-economics', '4.3', [
      { n: 1, f: 'Aggregate demand (AD) and its components', b: 'Total planned spending on an economy\'s output at each price level in a given period. AD = C + I + G + (X − M). Example: C 540, I 150, G 210, X 180, M 200 gives AD = 880.', src: ADAS },
      { n: 2, f: 'Why does the AD curve slope downward?', b: 'Wealth effect: a lower price level raises the real value of savings. Interest rate effect: less money is needed for transactions, so rates fall. International trade effect: domestic goods become cheaper than foreign ones. (Not single-good substitution.)' },
      { n: 3, f: 'The two LRAS shapes in the syllabus', b: 'Vertical: output set by capacity, not the price level.\nThree sections: highly elastic (spare capacity), upward sloping (bottlenecks), vertical (full capacity). On the elastic section a rise in AD mostly raises output; on the vertical section only the price level.' },
      { n: 4, f: 'What shifts SRAS, and what shifts LRAS?', b: 'SRAS: costs of production, e.g. wages, raw materials, energy, business taxes, subsidies, imported input prices.\nLRAS: the quantity and quality of factors, technology and institutions (capacity).' },
      { n: 5, f: 'AD: Y = 1,000 − 2P. SRAS: Y = 400 + 4P. Energy costs rise and SRAS becomes Y = 340 + 4P. Find the effect.', b: 'Before: 6P = 600, so P = 100, Y = 800. After: 6P = 660, so P = 110, Y = 780. Price level +10%, real output −2.5%, employment falls.' },
      { n: 6, f: 'Effect on real output and the price level of: AD right, SRAS left, LRAS right', b: 'AD right: output up, price level up.\nSRAS left: output down, price level up.\nLRAS right: output up, price level down (or rises more slowly).' },
    ]),
    ...sub(T4, 'economic-growth-as-cambridge-alevel-economics', '4.4', [
      { n: 1, f: 'Economic growth', b: 'An increase in the real output of goods and services over time, measured by the percentage change in real GDP.', src: EG },
      { n: 2, f: 'Real GDP versus nominal GDP, and the formula linking them', b: 'Nominal GDP is at current prices, so it rises with output and with prices. Real GDP is at constant prices. Real GDP = nominal GDP ÷ price index × 100.' },
      { n: 3, f: 'Nominal GDP rises from 3,000 to 3,339 while the price index rises from 100 to 106. Find real growth.', b: 'Real GDP in year 2 = 3,339 ÷ 106 × 100 = 3,150. Real growth = 150 ÷ 3,000 × 100 = 5.0%, against nominal growth of 11.3%.' },
      { n: 4, f: 'Real GDP rises from 900 to 936 while population rises from 30.0 to 30.6 million. Find growth of GDP per capita.', b: 'GDP +4.0%, population +2.0%. Per capita: 30.00 → 30.59, growth of 1.96%. The shortcut 4.0 − 2.0 = 2.0 is only close.' },
      { n: 5, f: 'Growth is +3%, −1% and +2% in three years. Find total growth.', b: 'Multiply the factors: 1.03 × 0.99 × 1.02 − 1 = 0.0401, so 4.0%. Compounding is the correct method; adding the rates is only close when they are small.' },
      { n: 6, f: 'Short-run and long-run causes of economic growth', b: 'Short run: higher C, I, G or net exports shift AD right, raising output while there is spare capacity.\nLong run: LRAS shifts right through more or better labour, more capital, better technology, more resources and better institutions.' },
    ]),
    ...sub(T4, 'unemployment-as-cambridge-alevel-economics', '4.5', [
      { n: 1, f: 'Unemployment rate and participation rate', b: 'Unemployment rate = unemployed ÷ labour force × 100 (labour force = employed + unemployed).\nParticipation rate = labour force ÷ working-age population × 100.\nExample: 1.1 m unemployed, 18.4 m employed: rate 5.6%.' },
      { n: 2, f: 'Labour force survey versus claimant count', b: 'Labour force survey: a sample of households; comparable across countries and years, but has sampling error.\nClaimant count: people receiving benefit; cheap and quick, but depends on benefit rules and misses those who are ineligible or do not register.' },
      { n: 3, f: 'Five types of unemployment and their causes', b: 'Frictional: time to match workers and vacancies.\nStructural: skills or location mismatch after an industry declines.\nCyclical: a fall in aggregate demand.\nSeasonal: demand varies by time of year.\nTechnological: machines replace labour.' },
      { n: 4, f: 'Exam trap: unemployment falls from 1.1 to 0.9 million because 0.2 million give up looking. Has the problem improved?', b: 'The rate falls from 5.6% to about 4.7%, but nobody gained a job: discouraged workers left the labour force. Measured unemployment can understate the true problem.' },
      { n: 5, f: 'Consequences of unemployment for individuals, government and the economy', b: 'Individuals: lower income, poverty, lost skills, stress.\nGovernment: more benefit spending, less tax revenue.\nEconomy: output below potential, wasted resources, wider inequality. Firms face weaker demand but less wage pressure.' },
    ]),
    ...sub(T4, 'price-stability-cambridge-alevel-economics', '4.6', [
      { n: 1, f: 'Inflation, deflation and disinflation', b: 'Inflation: a sustained rise in the general price level.\nDeflation: a sustained fall in it.\nDisinflation: a fall in the rate of inflation; prices are still rising, but more slowly.' },
      { n: 2, f: 'Weights 30, 35, 15, 20 and category indices 108, 104, 112, 100. Find the CPI, then inflation if the next CPI is 108.2.', b: 'CPI = (3,240 + 3,640 + 1,680 + 2,000) ÷ 100 = 105.6.\nInflation = (108.2 − 105.6) ÷ 105.6 × 100 = 2.5%.' },
      { n: 3, f: 'Demand-pull versus cost-push inflation on an AD/AS diagram', b: 'Demand-pull: AD shifts right; output and employment rise.\nCost-push: SRAS shifts left; output and employment fall (stagflation).\nTell them apart by what happens to output.' },
      { n: 4, f: 'Real value and real growth: formulas', b: 'Real value = nominal value ÷ price index × 100.\nExact real growth = (1 + nominal growth) ÷ (1 + inflation) − 1; nominal growth minus inflation is a close approximation. A wage up 5.0% with 5.6% inflation has fallen about 0.6% in real terms.' },
      { n: 5, f: 'Consequences of inflation', b: 'Redistribution (savers, lenders and fixed incomes lose; borrowers gain), menu and shoe-leather costs, uncertainty that delays investment, lost international competitiveness, and a possible wage-price spiral. It depends on the rate and whether it was anticipated.' },
      { n: 6, f: 'Difficulties in measuring inflation with a CPI', b: 'The basket and weights age, substitution is ignored, quality changes and new goods are hard to capture, no household is typical, and regional and informal prices are missed.' },
    ]),

    // 5 Government macroeconomic intervention (AS)
    ...sub(T5, 'government-macroeconomic-policy-objectives-cambridge-alevel-economics', '5.1', [
      { n: 1, f: 'Price stability', b: 'Low, steady inflation.', src: MOF },
      { n: 2, f: 'The main macroeconomic objectives at AS Level, with the problem and fiscal response for each', b: 'Price stability: demand-pull inflation; contractionary policy.\nLow unemployment: cyclical unemployment; expansionary policy.\nEconomic growth: weak growth; expansionary policy now, plus capital spending and incentives for capacity.' },
      { n: 3, f: 'The three types of macroeconomic policy', b: 'Fiscal policy (government spending and taxation), monetary policy (interest rates, money supply, credit rules) and supply-side policy (raising productive capacity).' },
      { n: 4, f: 'CPI rises from 120.0 to 123.6; 2.4 million are unemployed in a labour force of 40 million. Find inflation and the unemployment rate.', b: 'Inflation = 3.6 ÷ 120 × 100 = 3.0%. Unemployment rate = 2.4 ÷ 40 × 100 = 6.0%.' },
    ]),
    ...sub(T5, 'fiscal-policy-as-cambridge-alevel-economics', '5.2', [
      { n: 1, f: 'Budget deficit, budget surplus and national debt', b: 'Deficit: spending greater than revenue (a flow per year).\nSurplus: revenue greater than spending.\nNational debt: total owed by the government from past borrowing (a stock).', src: MOF },
      { n: 2, f: 'Revenue 400, spending 430, GDP 1,250, opening debt 520. Find the budget balance and the new debt as a share of GDP.', b: 'Balance = 400 − 430 = −30, a deficit of 2.4% of GDP. Debt rises to 550, which is 44.0% of GDP.' },
      { n: 3, f: 'Progressive, regressive and proportional taxes; average versus marginal rate', b: 'Progressive: takes a higher proportion of income as income rises; regressive: a lower proportion; proportional: the same proportion.\nAverage rate = tax ÷ income. Marginal rate = the rate on the next unit of income.' },
      { n: 4, f: 'Current versus capital government spending', b: 'Current spending is used up in the year (wages, benefits, interest). Capital spending adds lasting assets (roads, schools); it adds to demand now and may raise productive capacity later.', src: MOF },
      { n: 5, f: 'AD: Y = 1,000 − 5P, SRAS: Y = 400 + 5P. Government spending raises AD by 50. Find the new equilibrium.', b: 'Before: 10P = 600, so P = 60 and Y = 700. After: 1,050 − 5P = 400 + 5P, so P = 65 and Y = 725. Price level +8.3%, output +3.6%.' },
      { n: 6, f: 'Why does an income tax cut shift AD by less than an equal rise in government spending?', b: 'Households save part of the extra disposable income, so first-round consumption rises by less than the tax cut. Government spending adds its full amount to AD at once. Leakages into saving and imports reduce both effects.' },
    ]),
    ...sub(T5, 'monetary-policy-as-cambridge-alevel-economics', '5.3', [
      { n: 1, f: 'Monetary policy and its tools', b: 'Changes by the government or central bank to interest rates, the money supply or credit regulations, aimed at aggregate demand and macroeconomic objectives.', src: MSS },
      { n: 2, f: 'Chain of reasoning: the central bank cuts the policy interest rate', b: 'Bank lending rates fall → borrowing cheaper, saving less rewarding → households spend more and firms invest in more projects → C and I rise → AD shifts right → real output, the price level and employment rise (if there is spare capacity).' },
      { n: 3, f: 'Real interest rate', b: 'The nominal rate minus the inflation rate (approximately). Example: 5.5% − 2.0% = 3.5%.', src: MSS },
      { n: 4, f: 'How do credit regulations such as a loan-to-value cap work?', b: 'A cap limits the loan to a share of the price: at 85%, a 400,000 home allows a loan of 340,000 and needs a deposit of 60,000. Tightening the cap means fewer people can borrow, so AD shifts left.' },
      { n: 5, f: 'Money market diagram: what happens to the interest rate when the money supply rises?', b: 'Demand for money slopes down; supply is vertical. A rise in supply shifts it right and the equilibrium rate falls. Example: demand L = 480 − 30r; supply 330 gives r = 5%, supply 360 gives r = 4%.' },
      { n: 6, f: 'Monetary policy: "it depends on…" evaluation points', b: 'Time lags, low confidence, spare capacity, how much debt is on fixed rates, the split between borrowers and savers, and whether inflation is demand-pull (it works) or cost-push (it mainly cuts output).' },
    ]),
    ...sub(T5, 'supply-side-policy-as-cambridge-alevel-economics', '5.4', [
      { n: 1, f: 'Supply-side policy', b: 'Policy that raises the economy\'s capacity to produce, shifting the LRAS curve right. Its objectives are to raise productivity and productive capacity.', src: MSS },
      { n: 2, f: 'Three supply-side tools named in the syllabus, and how each works', b: 'Training and education: raise the skills and output of labour.\nInfrastructure development: cuts travel time and costs, links markets.\nSupport for technological improvement: subsidies or grants lower the cost of research and investment.' },
      { n: 3, f: 'AD: Y = 900 − 2P. A supply-side policy moves SRAS from Y = 300 + 4P to Y = 360 + 4P. Find the effect.', b: 'Before: P = 100, Y = 700. After: 6P = 540, so P = 90 and Y = 720. Output +2.9% and the price level −10%: unlike demand-side expansion, prices fall as output rises.' },
      { n: 4, f: 'Monetary policy versus supply-side policy', b: 'Monetary policy is demand-side (shifts AD), usually quicker, but the price level rises with output. Supply-side policy shifts AS, is usually slower and costly, but output can rise while the price level falls.' },
      { n: 5, f: 'Supply-side policy: main limits', b: 'Long time lags, high cost to government, uncertain take-up, and it needs enough demand to use the extra capacity.' },
    ]),
    // 6 International economic issues (AS)
    ...sub(T6, 'the-reasons-for-international-trade-cambridge-alevel-economics', '6.1', [
      { n: 1, f: 'Absolute advantage and comparative advantage', b: 'Absolute advantage: producing a good with fewer resources, or more of it from the same resources.\nComparative advantage: producing a good at a lower opportunity cost.', src: TRD },
      { n: 2, f: 'Per worker-day, C makes 12 rice or 8 fabric; D makes 6 rice or 3 fabric. Who has the comparative advantage in each good?', b: 'Opportunity cost of 1 rice: C 8 ÷ 12 = 0.67 fabric, D 3 ÷ 6 = 0.5 fabric, so D has the comparative advantage in rice.\nOf 1 fabric: C 1.5 rice, D 2 rice, so C has it in fabric (C has the absolute advantage in both).' },
      { n: 3, f: 'Terms of trade: formula and meaning of a rise', b: 'Terms of trade = (index of average export prices ÷ index of average import prices) × 100. A rise is an improvement: each unit of exports buys more imports. Example: 108 ÷ 90 × 100 = 120.' },
      { n: 4, f: 'The terms of trade index falls from 120 to 108. What is the percentage change, and is it always bad news?', b: '(108 − 120) ÷ 120 × 100 = −10% (a fall of 12 points, not 12%). Not always bad: if it comes from productivity gains lowering export prices, competitiveness improves. Effect on revenue depends on PED for exports.' },
      { n: 5, f: 'Trading possibility curve (TPC)', b: 'The combinations of two goods a country can consume after specialising and trading at given terms. Its slope is set by the terms of trade, and it lies outside the PPC whenever the terms differ from the home opportunity cost.', src: TRD },
      { n: 6, f: 'Limitations of the theory of comparative advantage', b: 'Transport and trade costs, increasing opportunity costs, imperfect factor mobility, a static view (advantage changes over time), dependence on a narrow range of exports, unrealistic assumptions (perfect competition, full employment), uneven distribution of gains and unpriced environmental costs.' },
    ]),
    ...sub(T6, 'protectionism-cambridge-alevel-economics', '6.2', [
      { n: 1, f: 'Tariff, import quota, export subsidy, embargo and red tape', b: 'Tariff: a tax on imports.\nQuota: a cap on imports by volume or value.\nExport subsidy: a payment per unit sold abroad.\nEmbargo: a ban on trade in a product or with a country.\nRed tape: excessive paperwork, inspections and delays.', src: PROT },
      { n: 2, f: 'Tariff diagram for a small country, in words', b: 'Home demand slopes down, home supply up; the world price is a horizontal line, and the tariff adds a higher line. At the higher price home output rises, demand falls and imports shrink. Consumers lose surplus; producers gain; the government gets revenue on the imports; two triangles are the net loss.' },
      { n: 3, f: 'The world price is 50 and a tariff of 10 is applied. Imports fall from 60 to 45 thousand units. Find the revenue.', b: 'Revenue = tariff per unit × imports after the tariff = 10 × 45 = 450 thousand. The tariff is 20% of the price and imports fell 25%, so the import response is elastic (−1.25).' },
      { n: 4, f: 'Dumping and infant industries', b: 'Dumping: selling abroad below cost or below the home price.\nInfant industry: a new industry with high costs while it is small. The argument: protect it until economies of scale bring costs below the world price; it fails if protection never ends or costs never fall.', src: PROT },
      { n: 5, f: 'Arguments against protectionism', b: 'Higher prices and less choice for consumers, inefficiency in protected firms, retaliation, higher input costs for other firms, a high cost per job saved, risk of corruption, and the lost gains from trade.' },
      { n: 6, f: 'Tariff versus quota: one key difference', b: 'A tariff taxes the price and raises revenue automatically. A quota limits the quantity; the gap between home and world price on the quota quantity is licence value, which goes to whoever holds the licences (possibly foreign exporters).' },
    ]),
    ...sub(T6, 'current-account-of-the-balance-of-payments-cambridge-alevel-economics', '6.3', [
      { n: 1, f: 'Current account of the balance of payments', b: 'The record of a country\'s trade in goods, trade in services, primary income and secondary income with the rest of the world over a period.', src: CA },
      { n: 2, f: 'Primary income versus secondary income', b: 'Primary income: income from employment and investment abroad (wages, interest, profit, dividends).\nSecondary income: transfers with nothing given in return (remittances, aid, contributions to international bodies).', src: CA },
      { n: 3, f: 'Goods 64 credits, 71 debits; services 30, 22; primary income 9, 14; secondary income 5, 3. Find the current account balance.', b: 'Goods −7, services +8, so goods and services +1. Primary −5, secondary +2. Current account balance = 1 − 5 + 2 = −2, a deficit.' },
      { n: 4, f: 'Causes of a current account deficit', b: 'Domestic income growing faster than partners\' (high YED for imports), higher costs or inflation than rivals, poor quality, recession among trading partners, a fall in the price of a main export, an overvalued currency, and income outflows on foreign debt or to foreign-owned firms.' },
      { n: 5, f: 'Consequences of a persistent current account deficit', b: 'Net exports lower AD, with possible loss of output and jobs in traded sectors; downward pressure on the exchange rate; it must be financed by borrowing, asset sales or reserves. It matters less if small, short-lived, or funding investment rather than consumption.' },
    ]),
    ...sub(T6, 'exchange-rates-as-cambridge-alevel-economics', '6.4', [
      { n: 1, f: 'Floating exchange rate, depreciation and appreciation', b: 'Floating rate: determined by demand and supply in the foreign exchange market.\nDepreciation: a fall in a floating currency\'s value against another.\nAppreciation: a rise in its value. Always name the unit (e.g. tarns per senn).', src: FX },
      { n: 2, f: 'Demand for senns D = 400 − 50r, supply S = 100r − 200. Demand falls by 60 at every rate. Find the old and new rate.', b: 'Before: 150r = 600, so r = 4.00 tarns per senn and 200 m traded.\nAfter: 340 − 50r = 100r − 200, so r = 3.60 and 160 m traded: a 10% depreciation.' },
      { n: 3, f: 'What shifts demand for a currency right, and what shifts its supply right?', b: 'Demand right (appreciation): rising foreign demand for exports, inward investment, higher relative interest rates, speculation on a rise.\nSupply right (depreciation): rising demand for imports, outward investment, lower relative interest rates, speculation on a fall.' },
      { n: 4, f: 'The senn rises from 4.00 to 4.40 tarns. By how much has the tarn changed against the senn?', b: 'Senns per tarn fall from 0.25 to 0.2273, so the tarn depreciates by 9.09% while the senn appreciates by 10%. Use the inverse rate for the partner.' },
      { n: 5, f: 'Effect of a depreciation on AD and AS', b: 'Exports cheaper abroad, imports dearer at home → net exports rise → AD shifts right → real output, the price level and employment tend to rise. But imported inputs cost more, which can shift SRAS left.' },
      { n: 6, f: 'Depreciation versus devaluation', b: 'Depreciation is a fall in a floating rate through market forces. Devaluation is a government decision to lower a fixed rate.' },
    ]),
    ...sub(T6, 'policies-to-correct-current-account-imbalances-cambridge-alevel-economics', '6.5', [
      { n: 1, f: 'Why is current account stability a policy objective?', b: 'It avoids a large, lasting deficit that needs risky finance and a falling currency, and a large surplus that signals weak domestic demand and invites retaliation. The aim is stability, not a balance of exactly zero.' },
      { n: 2, f: 'Contractionary fiscal policy to cut a deficit: mps 0.1, mpt 0.2, mpm 0.2. Government spending falls by 6. By how much do imports fall?', b: 'Withdrawals = 0.5, so the multiplier is 2. Income falls 6 × 2 = 12, so imports fall 0.2 × 12 = 2.4. It works by cutting output and jobs, and is weak if the mpm is low.' },
      { n: 3, f: 'Using supply-side policy to correct a current account deficit', b: 'Education, infrastructure and research raise productivity, lower unit costs and improve quality, so exports become more competitive without cutting output. Example: wages +2%, productivity +5% gives unit labour cost 1.02 ÷ 1.05 = 0.971, a 2.9% fall. But it is slow, costly and uncertain.' },
      { n: 4, f: 'Monetary and protectionist policies for a current account deficit: one weakness each', b: 'Monetary (higher interest rates): lowers consumption and investment, but may raise the exchange rate, hurting exports.\nProtectionist (tariffs, quotas): cut imports directly, but risk retaliation, raise prices and may break trade rules; the effect depends on PED.' },
      { n: 5, f: 'A 10% tariff lifts an import\'s price from 50 to 55. PED is −2 and 300 units were bought. What happens to payments to foreign suppliers?', b: 'Quantity falls 20% to 240. Payments fall from 300 × 50 = 15,000 to 240 × 50 = 12,000, a fall of 3,000. The tariff itself goes to the home government, not the foreign supplier.' },
    ]),
    // 7 The price system and the microeconomy (A Level)
    ...sub(T7, 'utility-cambridge-alevel-economics', '7.1', [
      { n: 1, f: 'Total utility, marginal utility and diminishing marginal utility', b: 'Total utility: satisfaction from all units consumed in a period.\nMarginal utility: extra satisfaction from one more unit (change in TU ÷ change in quantity).\nDiminishing marginal utility: MU falls as more units are consumed in a given time.', src: UT },
      { n: 2, f: 'TU after each unit is 10, 18, 24, 28, 30, 30. Find MU and say when TU peaks.', b: 'MU = 10, 8, 6, 4, 2, 0. TU rises while MU is positive and peaks when MU = 0 (the sixth unit). TU can be rising while MU is falling.' },
      { n: 3, f: 'The equi-marginal principle', b: 'Utility is maximised when MU of A ÷ price of A = MU of B ÷ price of B, with all income spent. Example: MU of A 18 at price 3 gives 6; MU of B 20 at price 5 gives 4, so buy more A and less B until the ratios are equal.' },
      { n: 4, f: 'How does marginal utility theory explain a downward-sloping demand curve?', b: 'Assume each unit of money has a constant MU. A unit is bought while its MU is at least that value × price. Because MU diminishes, a lower price is needed to make each extra unit worth buying, so quantity demanded rises as price falls.' },
      { n: 5, f: 'Limitations of marginal utility theory', b: 'It assumes utility can be measured in numbers and that money has a constant MU, and that consumers are rational. Habit, advertising and limited information mean real consumers may not equalise MU per unit of money; it is a benchmark rather than a description.' },
    ]),
    ...sub(T7, 'indifference-curves-and-budget-lines-cambridge-alevel-economics', '7.2', [
      { n: 1, f: 'Indifference curve, budget line and marginal rate of substitution', b: 'Indifference curve: all combinations of two goods giving equal satisfaction.\nBudget line: all combinations affordable at given income and prices.\nMRS: the amount of one good given up for one more unit of the other, keeping satisfaction constant.', src: UT },
      { n: 2, f: 'Income 200, price of X 10, price of Y 25. Give the budget line intercepts and slope, and what happens if the price of Y falls to 20.', b: 'Intercepts: 200 ÷ 10 = 20 X and 200 ÷ 25 = 8 Y. Slope (absolute) = 10 ÷ 25 = 0.4. If Y falls to 20, the line pivots on the X intercept (still 20) and the Y intercept becomes 10.' },
      { n: 3, f: 'Consumer\'s optimum in indifference curve analysis', b: 'Where the budget line just touches the highest affordable indifference curve, so MRS = price of X ÷ price of Y.' },
      { n: 4, f: 'Substitution effect, income effect and price effect', b: 'Substitution effect: the change in quantity from the change in relative price, with real income held constant.\nIncome effect: the change from the change in real income caused by the price change.\nPrice effect = substitution effect + income effect.', src: UT },
      { n: 5, f: 'Normal, inferior and Giffen goods: income and substitution effects of a price fall', b: 'Normal: both raise quantity; demand slopes down.\nInferior: substitution raises quantity, a smaller income effect lowers it; demand still slopes down.\nGiffen: the negative income effect outweighs the substitution effect; demand slopes up. Every Giffen good is inferior.' },
      { n: 6, f: 'Budget line: parallel shift versus pivot', b: 'A change in income, or both prices changing in the same proportion, gives a parallel shift. A change in one price pivots the line on the intercept of the good whose price did not change.' },
    ]),
    ...sub(T7, 'efficiency-and-market-failure-cambridge-alevel-economics', '7.3', [
      { n: 1, f: 'Productive efficiency and allocative efficiency', b: 'Productive: producing at the lowest cost per unit; for a firm, output at minimum AC, where MC = AC; for the economy, on the PPC.\nAllocative: resources go to the goods consumers value most; P = MC (MSB = MSC with externalities).', src: EFF },
      { n: 2, f: 'Pareto optimality and a Pareto improvement', b: 'Pareto optimality: no one can be made better off without making someone else worse off.\nPareto improvement: at least one person gains and nobody loses. Many Pareto optimal points exist, some very unequal, so it says nothing about fairness.', src: EFF },
      { n: 3, f: 'Dynamic efficiency', b: 'Efficiency improving over time through investment and innovation. Market power can cause static inefficiency yet fund research that lowers costs later; it depends on how profit is used and on the threat of entry.', src: EFF },
      { n: 4, f: 'A firm has TC = 100 + Q². Find its productively efficient output.', b: 'AC = 100/Q + Q and MC = 2Q. Productive efficiency is at minimum AC, where MC = AC: 2Q = 100/Q + Q, so Q² = 100 and Q = 10, with AC = MC = 20.' },
      { n: 5, f: 'Complete versus partial market failure, and the main reasons for market failure', b: 'Complete: no market exists (public goods). Partial: a market exists with the wrong price or quantity.\nReasons: externalities, public goods, merit and demerit goods, asymmetric information, market power, immobile factors and unequal incomes.' },
    ]),
    ...sub(T7, 'private-costs-externalities-and-social-costs-cambridge-alevel-economics', '7.4', [
      { n: 1, f: 'Marginal social cost and marginal social benefit', b: 'MSC = MPC + MEC. MSB = MPB + MEB. The free market produces where MPB = MPC; the social optimum is where MSB = MSC.' },
      { n: 2, f: 'The four types of externality and the market outcome', b: 'Negative production: MSC above MPC, over-production.\nPositive production: MSC below MPC, under-production.\nNegative consumption: MSB below MPB, over-consumption.\nPositive consumption: MSB above MPB, under-consumption.' },
      { n: 3, f: 'Car trips: MPB = 96 − 4Q, MPC = 12 + 2Q, marginal external cost of consumption = Q. Find the over-consumption and welfare loss.', b: 'Market: 96 − 4Q = 12 + 2Q, Q = 14. Optimum: MSB = 96 − 5Q = 12 + 2Q, Q = 12. Over-consumption 2. At Q = 14, MSB = 26 and MC = 40, a gap of 14, so welfare loss = ½ × 14 × 2 = 14.' },
      { n: 4, f: 'Deadweight welfare loss from an externality: where is it on the diagram?', b: 'The triangle between MSB and MSC, between the market quantity and the social optimum. For a negative externality it lies to the right of the optimum; for a positive externality, to the left.' },
      { n: 5, f: 'Asymmetric information and moral hazard', b: 'Asymmetric information: one party to a transaction knows more than the other (used goods, financial products).\nMoral hazard: behaviour changes because someone else bears the cost of risk. Example: insurance raises the claim chance from 4% to 6% on a 5,000 loss, so the expected claim rises from 200 to 300.', src: EFF },
      { n: 6, f: 'How is cost-benefit analysis used for a decision?', b: 'List private and external costs and benefits, put money values on each, add up social benefit and social cost, and go ahead if net social benefit (SB − SC) is positive. Then test which values are least certain.' },
    ]),
    ...sub(T7, 'types-of-cost-revenue-and-profit-cambridge-alevel-economics', '7.5', [
      { n: 1, f: 'Law of diminishing returns', b: 'Beyond some point, each extra unit of a variable factor combined with fixed factors adds less output than the one before. It is a short-run law because it needs a fixed factor.', src: SRP },
      { n: 2, f: 'Why does marginal cost fall then rise in the short run, and where does MC cut AVC and ATC?', b: 'MC mirrors marginal product: as MP rises (specialisation) MC falls; once diminishing returns set in, MC rises. MC cuts AVC and ATC from below at their minimum points. Fixed costs do not affect MC.' },
      { n: 3, f: 'Returns to scale versus diminishing returns', b: 'Returns to scale: long run, all inputs change in the same proportion; explains the LRAC shape. Inputs +60% and output +90% means increasing returns.\nDiminishing returns: short run, at least one factor fixed; explains rising short-run MC.' },
      { n: 4, f: 'Minimum efficient scale (MES)', b: 'The lowest output at which LRAC reaches its minimum. Its size relative to the market limits how many firms can reach it: with MES of 300 and a market of 1,000 units, at most 3 firms can.', src: LRP },
      { n: 5, f: 'Internal versus external economies of scale', b: 'Internal: the firm itself grows (technical, purchasing, managerial, financial, marketing, risk-bearing): a movement along the LRAC.\nExternal: the industry grows (skilled labour pool, specialist suppliers, shared infrastructure): a downward shift of the LRAC.' },
      { n: 6, f: 'Demand is P = 30 − 3Q. Write MR, and say where total revenue is maximised.', b: 'TR = 30Q − 3Q², so MR = 30 − 6Q: same intercept, twice the slope. TR is greatest where MR = 0, at Q = 5 (TR = 75), where PED = −1. For a price taker, MR = AR = price.' },
      { n: 7, f: 'Normal, supernormal and subnormal profit', b: 'Normal profit: the minimum reward needed to keep the entrepreneur in the industry, treated as a cost (TR = TC, AR = ATC).\nSupernormal: TR > TC (AR > ATC).\nSubnormal: TR < TC (AR < ATC). Example: (7.40 − 6.85) × 1,200 = 660 supernormal.', src: LRP },
    ]),
    ...sub(T7, 'different-market-structures-cambridge-alevel-economics', '7.6', [
      { n: 1, f: 'Perfect competition: features, and the long-run adjustment from supernormal profit', b: 'Many buyers and sellers, an identical product, free entry and exit, perfect information; firms are price takers. Supernormal profit → entry → industry supply shifts right → price falls → only normal profit remains, with P = MC = minimum ATC.' },
      { n: 2, f: 'Natural monopoly', b: 'One firm can supply the whole market at a lower average cost than two or more, because LRAC falls over the whole range of market demand. Example: fixed cost 90,000, variable cost 1, demand 30,000: one firm AC = 4, two firms AC = 7.', src: MSB },
      { n: 3, f: 'Concentration ratio', b: 'The combined market share of the n largest firms, written CRn. Shares of 30, 20, 15 and 10% give CR4 = 75%. It hides how shares are split, depends on how the market is defined, ignores imports and says nothing about barriers.', src: MSB },
      { n: 4, f: 'Monopoly: demand P = 64 − 2Q and TC = 144 + 4Q + Q². Find the profit-maximising output, price and profit.', b: 'MR = 64 − 4Q and MC = 4 + 2Q. MR = MC gives Q = 10, so P = 44. TR = 440, TC = 284, supernormal profit = 156. Price is above MC, so it is allocatively inefficient.' },
      { n: 5, f: 'Monopolistic competition in the long run', b: 'Entry or exit shifts each firm\'s demand until AR is tangent to ATC, so profit is normal. But price is above MC and output is below the minimum-ATC level (excess capacity), so it is neither allocatively nor productively efficient; consumers gain variety.' },
      { n: 6, f: 'Contestable market', b: 'A market where entry and exit are easy enough that the threat of entry disciplines incumbents: low barriers, little sunk cost, hit-and-run entry possible. Even one or two firms may price near average cost and earn normal profit.', src: OLI },
      { n: 7, f: 'Prisoner\'s Dilemma: two firms each earn 30 if neither advertises, 26 each if both do, and 34 vs 22 if only one does. What happens?', b: 'Advertising is a dominant strategy for each (34 > 30 and 26 > 22), so both advertise and earn 26, worse than the 30 each from cooperating. This explains the temptation to collude, and to cheat on any agreement.' },
    ]),
    ...sub(T7, 'growth-and-survival-of-firms-cambridge-alevel-economics', '7.7', [
      { n: 1, f: 'Why do small firms survive alongside large ones?', b: 'Small or local markets, niche or personalised products, owners who want control, scarce finance, and diseconomies of scale that start early. Size follows minimum efficient scale: a small MES relative to the market allows many small firms.' },
      { n: 2, f: 'Organic growth versus diversification', b: 'Organic (internal) growth: growth from within by selling more, opening outlets or adding capacity.\nDiversification: moving into new products or markets to spread risk.', src: GSF },
      { n: 3, f: 'Horizontal, backward vertical, forward vertical and conglomerate integration', b: 'Horizontal: a firm at the same stage in the same industry.\nBackward vertical: with a supplier.\nForward vertical: with a distributor or retailer.\nConglomerate: with a firm in an unrelated industry.', src: GSF },
      { n: 4, f: 'Conditions that make a cartel effective, and why cartels are unstable', b: 'Few firms, similar products, high barriers, similar costs, stable demand, easy detection of cheating and weak competition law. Unstable because each member gains by producing above its quota while others stick to theirs: a Prisoner\'s Dilemma.' },
      { n: 5, f: 'Principal-agent problem', b: 'Shareholders (principals) want profit and long-term value; managers (agents) may want salary, status, growth or security, and know more about the firm. Solutions: profit-related pay and share options, monitoring, shareholder votes, takeover threat; each has costs.' },
      { n: 6, f: 'Why do many mergers fail to deliver the expected gains?', b: 'Culture clash and poor communication, expected cost savings that do not appear, paying too high a price, and a combined firm too large to manage (diseconomies of scale).' },
    ]),
    ...sub(T7, 'differing-objectives-and-policies-of-firms-cambridge-alevel-economics', '7.8', [
      { n: 1, f: 'Output rule for profit maximisation, revenue maximisation and sales maximisation', b: 'Profit maximisation: MR = MC (MC cutting MR from below).\nRevenue maximisation: MR = 0, where PED = 1.\nSales maximisation: the highest output with AR = AC (no loss), so profit is normal.' },
      { n: 2, f: 'P = 100 − 4Q, TC = 200 + 24Q. Compare profit at the profit maximum and the revenue maximum.', b: 'Profit maximum: MR = 100 − 8Q = 24, so Q = 9.5, P = 62, profit = 589 − 428 = 161.\nRevenue maximum: MR = 0, so Q = 12.5, P = 50, profit = 625 − 500 = 125. Revenue maximisation gives up 36 of profit.' },
      { n: 3, f: 'First, second and third degree price discrimination', b: 'First: each customer pays their own maximum willingness to pay; all consumer surplus is taken.\nSecond: price depends on quantity bought (block tariffs, bulk discounts).\nThird: different groups with different PED pay different prices (peak and off-peak, student and adult).' },
      { n: 4, f: 'The three conditions for price discrimination', b: 'The firm has price-setting power; it can separate customers or markets and stop resale; and the groups have different price elasticities of demand. The less elastic group pays the higher price.' },
      { n: 5, f: 'Market 1: P = 50 − Q; market 2: P = 30 − Q; MC = 10. Find the third-degree discriminating prices and profit.', b: 'Market 1: MR = 50 − 2Q = 10, so Q = 20, P = 30. Market 2: MR = 30 − 2Q = 10, so Q = 10, P = 20. Profit = 20 × 20 + 10 × 10 = 500, against 450 at a single price of 25.' },
      { n: 6, f: 'Limit pricing versus predatory pricing', b: 'Limit pricing: setting price just below a potential entrant\'s lowest average cost, so entry is unprofitable; it stays above the incumbent\'s cost.\nPredatory pricing: pricing below cost to force a rival out, then raising price; it risks losses and legal challenge.' },
      { n: 7, f: 'Kinked demand curve in oligopoly', b: 'Above the current price demand is elastic (rivals do not follow a rise); below it, inelastic (rivals follow a cut). Either change lowers revenue, so prices are sticky. MR has a vertical gap at the kink, so MC can shift within it with no change in price or output. Weakness: it does not explain how the price was set.' },
    ]),
    // 8 Government microeconomic intervention (A Level)
    ...sub(T8, 'government-policies-to-correct-market-failure-cambridge-alevel-economics', '8.1', [
      { n: 1, f: 'Specific tax versus ad valorem tax: effect on the supply curve', b: 'A specific tax is a fixed amount per unit, so supply shifts up in parallel. An ad valorem tax is a percentage of price, so supply pivots: the tax per unit rises with the price (10% is 5 at a price of 50 but 8 at 80).' },
      { n: 2, f: 'Qd = 360 − 6P, Qs = −60 + 4P. A specific tax of 10 is imposed. Find the burdens and the welfare loss.', b: 'Before: P = 42, Q = 108. After: P = 46, Q = 84; sellers keep 36. Consumer burden 4 × 84 = 336; producer burden 6 × 84 = 504; revenue 840. Welfare loss = ½ × 10 × 24 = 120. Demand is more elastic, so producers bear more.' },
      { n: 3, f: 'Regulating a natural monopoly: demand P = 100 − Q, MC = 10, fixed cost 800. Compare no regulation, an AC price cap and an MC price cap.', b: 'Unregulated: MR = MC gives Q = 45, P = 55, profit 1,225.\nCap at AC: 100 − Q = 10 + 800/Q gives Q = 80, P = 20, normal profit.\nCap at MC: P = 10, Q = 90, a loss of 800 that needs a subsidy.' },
      { n: 4, f: 'Pollution permits (cap and trade): how they work', b: 'Government sets a cap and issues tradable permits equal to it. Firms with low abatement costs cut emissions and sell permits; high-cost firms buy them. Trading continues until every firm\'s marginal abatement cost equals the permit price, so the cap is met at lowest total cost.' },
      { n: 5, f: 'Property rights and open access resources', b: 'A property right is legally enforceable ownership of or control over a resource. Under open access no user bears the cost imposed on others, so the resource is over-used. Giving one owner the right makes them bear the cost of overuse. Limits: hard to define for moving resources, costly to enforce.' },
      { n: 6, f: 'Nudge and choice architecture', b: 'A nudge changes how options are presented (defaults, order, framing, effort needed) to steer behaviour without banning options or relying mainly on price. Example: opt-out pension enrolment raising take-up from 40% to 85%, a rise of 45 percentage points.', src: MFP },
      { n: 7, f: 'Government failure', b: 'Intervention that leads to a misallocation of resources, so the net welfare gain is smaller than it could be, becomes a net welfare loss, or creates new problems. Causes: imperfect information, administrative cost, political pressures and lobbying, unintended consequences, time lags.', src: MFP },
    ]),
    ...sub(T8, 'equity-and-redistribution-of-income-and-wealth-cambridge-alevel-economics', '8.2', [
      { n: 1, f: 'Equity versus equality; horizontal versus vertical equity', b: 'Equality is the same outcome or treatment and can be measured. Equity is fairness, a normative judgement.\nHorizontal equity: equals are treated equally. Vertical equity: unequals are treated differently in a way judged fair.', src: EQ },
      { n: 2, f: 'Absolute poverty and relative poverty', b: 'Absolute: income below a fixed level needed for basic needs.\nRelative: income low compared with others, often below 50% or 60% of median income. If all incomes rise by the same percentage, absolute poverty falls but relative poverty is unchanged.', src: EQ },
      { n: 3, f: 'Poverty trap and the effective marginal tax rate', b: 'Earning more brings little gain because benefits are withdrawn and tax rises. EMTR = tax rate + benefit withdrawal rate. Tax 25% and benefit cut by 50 per 100 earned gives an EMTR of 75%: of an extra 200 earned, only 50 is kept.' },
      { n: 4, f: 'Negative income tax: guaranteed income G = 4,800 and taper t = 50%. Find the break-even income and net income on earnings of 6,000.', b: 'Payment = G − tY. Break-even = G ÷ t = 9,600. At 6,000: payment = 4,800 − 3,000 = 1,800, so net income = 7,800. Above 9,600 the person pays tax.' },
      { n: 5, f: 'Universal basic income: one argument for and two against', b: 'For: simple, no stigma, removes the poverty trap and gives security.\nAgainst: high cost and higher taxes; may reduce hours worked through the income effect; may be inflationary; some lose if it replaces larger targeted benefits.' },
      { n: 6, f: 'Is there a trade-off between equity and efficiency?', b: 'Possibly: high marginal tax rates and generous benefits weaken incentives, administration absorbs resources, and redistribution is not a Pareto improvement. But spending on education and health raises productivity, severe inequality can harm growth, and disincentives may be small. It depends on how people respond.' },
    ]),
    ...sub(T8, 'labour-market-forces-and-government-intervention-cambridge-alevel-economics', '8.3', [
      { n: 1, f: 'Marginal revenue product (MRP) and the hiring rule', b: 'MRP = marginal physical product × marginal revenue (× price if the price is fixed): the extra revenue from one more worker. A wage-taking firm hires until MRP = wage. Example: MPP 15 loads at 6 each gives MRP 90, so hire at a wage of 80 but not 95.', src: LAB },
      { n: 2, f: 'Why does the demand curve for labour slope down, and what shifts it right?', b: 'Diminishing returns cut MPP as more workers share fixed capital, and MR may fall as more is sold. It shifts right when product demand or price rises, productivity rises, or substitute factors become dearer. A wage change is a movement along the curve.' },
      { n: 3, f: 'Non-wage factors that shift the supply of labour to an occupation', b: 'Job features (hours, safety, satisfaction, benefits), entry costs (training length and cost, qualifications), pay and conditions in alternative jobs, the size of the pool of workers (population, migration, retirement age), mobility, and state benefits.' },
      { n: 4, f: 'Labour demand L = 720 − 20W, supply L = 40W. A union negotiates a wage of 15. Find the effect.', b: 'Equilibrium: W = 12, L = 480. At 15: employment = 420, supply = 600, so excess supply of 180. Employment −12.5% for a wage +25%: elasticity −0.5 (inelastic), so the wage bill rises from 5,760 to 6,300.' },
      { n: 5, f: 'Monopsony: why does a single employer pay less and hire fewer than a competitive market?', b: 'Hiring one more worker raises the wage for all, so the marginal cost of labour is above the supply (average cost) curve. It hires where MC of labour = MRP and pays the lower wage on the supply curve. E.g. 120 workers at 10 against a competitive 180 at 13.' },
      { n: 6, f: 'Can a minimum wage raise employment?', b: 'In a monopsony, yes: a minimum wage above the monopsony wage and up to the competitive wage makes the marginal cost of labour flat, so employment rises, peaking at the competitive wage. In a competitive market a binding minimum wage reduces employment along the demand curve.' },
      { n: 7, f: 'Transfer earnings and economic rent', b: 'Transfer earnings: the minimum payment needed to keep a factor in its present use (its opportunity cost).\nEconomic rent: payment above transfer earnings. A worker earning 36 whose next best job pays 28 has transfer earnings 28 and rent 8. More inelastic supply means a larger share of rent.', src: ILM },
    ]),
    // 9 The macroeconomy (A Level)
    ...sub(T9, 'the-circular-flow-of-income-cambridge-alevel-economics', '9.1', [
      { n: 1, f: 'Multiplier: definition and formula for an open economy with government', b: 'The ratio of the final change in national income to the initial change in injections (autonomous spending) that caused it. k = 1 ÷ (mps + mrt + mpm), the reciprocal of the marginal propensity to withdraw. Change in Y = k × change in autonomous spending.' },
      { n: 2, f: 'mps = 0.10, mrt = 0.30, mpm = 0.20. Investment rises by 90. Find the multiplier and the change in national income.', b: 'mpw = 0.60, so k = 1 ÷ 0.60 = 1.67. Change in Y = 90 × 1.67 = 150.' },
      { n: 3, f: 'Average versus marginal propensity to consume', b: 'apc = C ÷ Yd (one level of income); mpc = change in C ÷ change in Yd. apc + aps = 1 and mpc + mps = 1. The apc can fall while the mpc stays constant when autonomous consumption is positive.' },
      { n: 4, f: 'Autonomous versus induced consumption in C = a + bY', b: 'Autonomous consumption (a) does not depend on current income. Induced consumption (bY) changes with income. A change in income is a movement along the function; a change in wealth, interest rates, credit or confidence shifts it. For C = 30 + 0.8Y, at Y = 250, C = 230 and S = 20.', src: CAD },
      { n: 5, f: 'The accelerator: v = 2.5 and output rises 400 → 420 → 450 → 460. Find net investment each year, and the key point.', b: 'Net investment = v × change in output: 50, 75, then 25. Output keeps rising, but investment falls once growth slows. The accelerator makes investment volatile and helps explain the business cycle.' },
      { n: 6, f: 'AD = 100 + 0.8Y and full-employment income is 600. Find equilibrium income and the deflationary gap.', b: 'Equilibrium: Y = 100 + 0.8Y, so Y = 500. At Y = 600, AD = 580, so the deflationary gap is 20 (the shortfall of AD at full employment). Income is 100 below full employment because of the multiplier of 5.' },
    ]),
    ...sub(T9, 'economic-growth-and-sustainability-cambridge-alevel-economics', '9.2', [
      { n: 1, f: 'Actual growth versus potential growth', b: 'Actual growth: the percentage rise in real GDP (AD shifts right; movement towards the PPC).\nPotential growth: the percentage rise in productive capacity (LRAS shifts right; the PPC moves out).', src: APG },
      { n: 2, f: 'Output gap: formula, and what positive and negative gaps mean', b: 'Output gap (%) = (actual − potential) ÷ potential × 100. Positive: actual above potential, overheating, inflation pressure, low unemployment. Negative: spare capacity, falling inflation, high unemployment. A negative gap does not mean negative growth.' },
      { n: 3, f: 'Actual output 1,045, potential 1,100, multiplier 2.2. What injection closes the gap?', b: 'Gap = −55, or −5.0%. Output must rise by 55, so the injection = 55 ÷ 2.2 = 25.' },
      { n: 4, f: 'Phases of the business cycle', b: 'Boom: fast growth, low unemployment, rising inflation, positive gap.\nDownturn: growth slows.\nRecession or trough: output falls to its lowest; high unemployment.\nRecovery: growth returns and the gap closes. Causes include confidence, credit, the accelerator, the multiplier and shocks.' },
      { n: 5, f: 'Automatic stabilisers', b: 'Progressive income tax and unemployment-linked benefits change automatically with income: in a slump tax revenue falls and benefits rise, so disposable income falls less; in a boom the reverse. They reduce the size of the cycle without any policy decision.' },
      { n: 6, f: 'Inclusive growth and sustainable growth', b: 'Inclusive growth: benefits shared widely, with opportunities open to poorer households, regions and groups.\nSustainable growth: meets today\'s needs while leaving future generations able to meet theirs. Natural capital losses are not shown in GDP.', src: ISG },
      { n: 7, f: 'GDP rises 2% while emissions per unit of GDP fall 5%. What happens to total emissions? And if intensity falls only 1%?', b: 'Emissions change = 1.02 × 0.95 − 1 = −3.1%, a fall.\nWith intensity −1%: 1.02 × 0.99 − 1 = +1.0%, a rise. A slower growth rate of emissions is not a fall in emissions.' },
    ]),
    ...sub(T9, 'employment-unemployment-cambridge-alevel-economics', '9.3', [
      { n: 1, f: 'Full employment', b: 'All those prepared and able to work at the prevailing wage can obtain a job; some frictional and structural unemployment remains. It is not zero unemployment.', src: EUL },
      { n: 2, f: 'Equilibrium versus disequilibrium unemployment', b: 'Equilibrium unemployment exists when the labour market clears at the equilibrium wage (frictional, structural, voluntary).\nDisequilibrium unemployment: labour supplied exceeds labour demanded at the going wage (real-wage or demand-deficient).', src: EUL },
      { n: 3, f: 'Natural rate of unemployment, and how to find cyclical unemployment', b: 'The natural rate is the unemployment remaining once the labour market has cleared: frictional, structural and voluntary. Cyclical = actual − natural. Labour force 40 m, actual 8.0%, natural 5.5%: 3.2 m − 2.2 m = 1.0 m cyclical.' },
      { n: 4, f: 'Hysteresis', b: 'Unemployment that persists after its cause ends, because the equilibrium rate itself has risen: long spells out of work erode skills and contacts, and employers screen out long gaps, so unemployment stays high when demand recovers.', src: EUL },
      { n: 5, f: 'Geographical versus occupational mobility of labour, with causes of immobility', b: 'Geographical: ability and willingness to move area for work (limited by housing costs, moving costs, family ties, information).\nOccupational: ability and willingness to change type of job (limited by training cost and time, non-transferable skills, licences).' },
      { n: 6, f: 'Which policy suits each type of unemployment?', b: 'Cyclical: fiscal or monetary expansion.\nStructural: training, wage subsidies, lower employer taxes.\nFrictional: job-matching and information.\nGeographical: relocation help, regional policy.\nRaising AD to push unemployment below the natural rate only works temporarily; it causes inflation.' },
    ]),
    ...sub(T9, 'money-and-banking-cambridge-alevel-economics', '9.4', [
      { n: 1, f: 'Money: definition and four functions', b: 'Anything generally accepted as payment for goods and services and for settling debt. Functions: medium of exchange, store of value, unit of account and standard of deferred payment.' },
      { n: 2, f: 'Quantity theory: MV = PT. M = 400, V = 6, T = 1,200. Find P, then P if M rises to 460.', b: 'P = MV ÷ T = 2,400 ÷ 1,200 = 2.00. With M = 460: P = 2,760 ÷ 1,200 = 2.30, a 15% rise, equal to the rise in M. This needs V and T constant, which can be challenged.' },
      { n: 3, f: 'Bank credit multiplier: a new deposit of 800 enters a system with an 8% reserve ratio. Find total deposits and credit created.', b: 'Multiplier = 1 ÷ reserve ratio = 12.5. Maximum deposits = 800 × 12.5 = 10,000, so credit created = 9,200. The real effect is smaller: people hold cash, banks hold excess reserves, and borrowers may not want loans.' },
      { n: 4, f: 'The three objectives of a commercial bank and the conflict between them', b: 'Liquidity (can meet withdrawals), security (loans are repaid) and profitability. The most profitable loans are the least liquid and riskiest, so banks must balance the three.' },
      { n: 5, f: 'Quantitative easing (QE)', b: 'The central bank creates reserves and buys assets, mostly government bonds, to raise the money supply and lending when policy rates are already very low. Bond prices rise, yields fall (a bond paying 4: 5% at a price of 80, 4% at 100). Weak if banks hoard reserves or loan demand is low.' },
      { n: 6, f: 'Liquidity preference: the three motives for holding money', b: 'Transactions and precautionary motives depend on income (not interest-sensitive in the basic model). The speculative motive depends negatively on the interest rate, so L slopes down. In a liquidity trap L is horizontal at a very low rate.' },
      { n: 7, f: 'Keynesian versus loanable funds theory of the interest rate', b: 'Keynesian: the rate is set where liquidity preference (L) meets a vertical money supply; more money lowers the rate.\nLoanable funds: the rate is set where demand for funds meets the supply of saving; bigger government borrowing raises the rate and can crowd out private investment.' },
    ]),
    // 10 Government macroeconomic intervention (A Level)
    ...sub(T10, 'government-macroeconomic-policy-objectives-a-cambridge-alevel-economics', '10.1', [
      { n: 1, f: 'The macroeconomic objectives at A Level, with a measure for each', b: 'Low, stable inflation (CPI change); balance of payments stability (current account as % of GDP); low unemployment (unemployment rate); steady growth (real GDP growth); development (real GDP per head, composite indices); sustainability (resource and emissions measures); redistribution (Gini, poverty rate).' },
      { n: 2, f: 'Internal value of money', b: 'Its purchasing power at home.', src: MOI },
      { n: 3, f: 'External value of money', b: 'What it buys abroad, shown by the exchange rate.', src: MOI },
      { n: 4, f: 'Nominal vs real', b: 'Only real growth shows more output.', src: MOI },
      { n: 5, f: 'GDP grows 3.0% and population grows 1%. Find growth per head, and say why development needs wider measures.', b: 'Growth per head = 1.03 ÷ 1.01 − 1 = 1.98%, below the headline figure. It still says little about health, education or how income is shared.' },
      { n: 6, f: 'Why is ranking macroeconomic objectives a matter of judgement?', b: 'Objectives conflict, so improving one can worsen another, and which to put first is a value judgement (normative). A good answer names the conflict and says which objective a government might prioritise and why.' },
    ]),
    ...sub(T10, 'links-between-macroeconomic-problems-cambridge-alevel-economics', '10.2', [
      { n: 1, f: 'Natural rate of unemployment', b: 'The rate at which actual inflation equals expected inflation.', src: MOI },
      { n: 2, f: 'Traditional Phillips curve versus expectations-augmented Phillips curve', b: 'Traditional: a stable, downward-sloping convex curve showing a trade-off between inflation and unemployment; it cannot explain high inflation with high unemployment.\nExpectations-augmented: a trade-off only in the short run, for given expected inflation; the long-run curve is vertical at the natural rate.' },
      { n: 3, f: 'SRPC vs LRPC', b: 'Movement along a curve (short-run trade-off) vs a shift (change in expectations or the natural rate).', src: MOI },
      { n: 4, f: 'Inflation = expected inflation − 0.4 × (unemployment − 6). Expected inflation is 3% and unemployment is held at 4%. What happens over three years?', b: 'Year 1: 3 + 0.8 = 3.8%. As expectations adjust: year 2 4.6%, year 3 5.4%. Holding unemployment below the natural rate makes inflation accelerate by 0.8 points a year.' },
      { n: 5, f: 'Imports are 200, the income elasticity of demand for imports is 1.5, and income grows 4%. Exports stay at 190. What happens to the trade balance?', b: 'Imports grow 1.5 × 4% = 6%, to 212. The balance worsens from −10 to −22: a conflict between growth and the balance of payments.' },
      { n: 6, f: 'Demand-pull vs cost-push', b: 'AD shift vs short-run aggregate supply shift. The Phillips curve fits demand-pull; a cost-push shock moves the curve.', src: MOI },
    ]),
    ...sub(T10, 'effectiveness-of-macroeconomic-policy-options-cambridge-alevel-economics', '10.3', [
      { n: 1, f: 's = 0.05, t = 0.20, m = 0.15. Government spending rises by 16. Find the change in output and in the deficit.', b: 'Withdrawals = 0.40, so k = 2.5 and output rises by 40. Tax revenue rises by 0.20 × 40 = 8, so the deficit rises by only 16 − 8 = 8.' },
      { n: 2, f: 'Crowding out', b: 'Public borrowing pushes up interest rates and reduces private investment. Example: spending rises by 16 but investment falls by 4, so the net injection is 12 and, with k = 2.5, output rises by 30 rather than 40.', src: EFM },
      { n: 3, f: 'Laffer curve', b: 'The relationship between the tax rate and tax revenue, rising then falling. Revenue is zero at 0% and at 100%. Beyond the peak a rate cut raises revenue (base = 300 − 2t peaks at 75%, revenue 112.5). The peak is not observable and behaviour takes time to change.', src: EFM },
      { n: 4, f: 'Market-based versus interventionist supply-side policy', b: 'Market-based: stronger incentives and freer markets (lower tax rates, deregulation, privatisation, labour market flexibility, competition policy).\nInterventionist: state action on factors (education, training, health, infrastructure, research subsidies, regional policy).', src: ESS },
      { n: 5, f: 'Fiscal versus monetary policy: one strength and one weakness each', b: 'Fiscal: can be targeted at groups or regions, and automatic stabilisers act at once; but long lags, debt costs and crowding out.\nMonetary: quick to change and run at a distance from elections; but blunt, with lags, and little power when rates are near zero.' },
      { n: 6, f: 'Expenditure-switching versus expenditure-reducing policies', b: 'Switching changes what is bought, from imports to home goods (a lower exchange rate, protection). Reducing lowers total spending (contractionary fiscal or monetary policy), cutting imports but also output.' },
      { n: 7, f: 'Inside lag versus outside lag, and why lags can cause government failure', b: 'Inside lag: time to recognise the problem and decide. Outside lag: time for the policy to act. With an inside lag of 2 quarters and an outside lag of 4, the effect arrives about 6 quarters late, possibly at the wrong point in the cycle (pro-cyclical).' },
    ]),
    // 11 International economic issues (A Level)
    ...sub(T11, 'policies-to-correct-balance-of-payments-disequilibrium-cambridge-alevel-economics', '11.1', [
      { n: 1, f: 'The components of the balance of payments', b: 'Current account (goods, services, primary and secondary income); capital account (capital transfers such as debt forgiveness, non-produced non-financial assets); financial account (direct, portfolio and other investment, reserve assets); and net errors and omissions as a balancing item. The total is zero.' },
      { n: 2, f: 'Direct investment, portfolio investment and hot money', b: 'Direct investment: a lasting stake in a foreign business, e.g. a new plant; stable and adds capacity.\nPortfolio investment: shares and bonds without control; more mobile.\nHot money: short-term funds that move for interest rate or exchange rate gains.' },
      { n: 3, f: 'Current account −11 and capital account +1, with zero errors and omissions. What must the financial account balance be?', b: '+10, because −11 + 1 + 10 = 0 (with financial inflows counted as positive). The financial account shows how a current account deficit is funded.' },
      { n: 4, f: 'Expenditure-reducing versus expenditure-switching policies for a current account deficit', b: 'Reducing: cut total spending, including on imports (contractionary fiscal policy, higher interest rates); output and jobs fall; suits a deficit from excess demand.\nSwitching: move spending from imports to home goods (depreciation, devaluation, tariffs, quotas); suits weak competitiveness.' },
      { n: 5, f: 'Why might higher interest rates improve the financial account but not the current account?', b: 'Higher rates attract hot money, raising demand for the currency. The higher exchange rate makes exports dearer and imports cheaper, which works against the fall in import spending from lower incomes.' },
      { n: 6, f: 'A currency falls 5%. Export PED 1.0, import PED 0.8; exports 100, imports 120. What happens to the trade deficit?', b: 'Exports rise to about 105. Imports become 120 × 1.05 × 0.96 = 121.0 in home currency. The deficit narrows from 20 to about 16, because the elasticities sum to more than 1.' },
    ]),
    ...sub(T11, 'exchange-rates-a-cambridge-alevel-economics', '11.2', [
      { n: 1, f: 'Nominal, real and trade-weighted exchange rates', b: 'Nominal: the price of one currency in another, as quoted.\nReal: nominal rate adjusted for relative price levels (nominal × home price index ÷ foreign price index).\nTrade-weighted: an index against a basket of partner currencies, weighted by trade shares.', src: ERS },
      { n: 2, f: 'The nominal rate rises from 2.50 to 2.60 while home prices rise 1% and the partner\'s 4%. What happens to the real rate?', b: 'Real rate = 2.60 × 101 ÷ 104 = 2.525, a rise of 1.0%, not 4%. The nominal rise overstates the real rise because the partner\'s prices rose faster.' },
      { n: 3, f: 'Fixed, managed and floating exchange rate systems', b: 'Fixed (pegged): official rate set and defended with reserves and interest rates; certainty, but risk of speculative attack.\nManaged: mainly market-set, with intervention to smooth or steer it.\nFloating: set by the market; interest rates are free for domestic aims, but the rate can be volatile.' },
      { n: 4, f: 'Devaluation and revaluation', b: 'Devaluation: a deliberate cut in the official value of a fixed rate. Revaluation: a deliberate rise. (Depreciation and appreciation are market moves under a floating rate.)', src: ERS },
      { n: 5, f: 'Marshall-Lerner condition', b: 'A fall in the exchange rate improves the trade balance if PEDx + PEDm > 1 (absolute values). Each elasticity need not exceed 1; only their sum must.', src: ERS },
      { n: 6, f: 'J curve: describe the shape and explain it', b: 'Balance on the vertical axis, time on the horizontal. After a fall in the currency the balance first worsens, because volumes barely move while import prices rise. As elasticities rise over time and their sum passes 1, the balance crosses zero and improves.' },
      { n: 7, f: 'Demand for a pegged currency D = 400 − 100r, supply S = 100r − 60, peg 2.50. What must the central bank do?', b: 'Equilibrium is 2.30, below the peg. At 2.50, demand 150 and supply 190, an excess supply of 40. The central bank must buy 40 of its currency, costing 40 × 2.50 = 100 of reserves.' },
    ]),
    ...sub(T11, 'economic-development-cambridge-alevel-economics', '11.3', [
      { n: 1, f: 'Economic growth versus economic development', b: 'Growth: a rise in real output over time.\nDevelopment: a rise in living standards and capabilities: health, education, lower poverty and a changing economic structure.' },
      { n: 2, f: 'Purchasing power parity (PPP)', b: 'The exchange rate at which a basket of goods costs the same in two currencies. A basket costing 90 cu in A and 600 units in C gives a PPP rate of 6.67. An income of 24,000 units is 3,600 cu at PPP, against 2,400 cu at a market rate of 10, because prices are lower in C.', src: DEV },
      { n: 3, f: 'Human Development Index (HDI)', b: 'A composite index of health (life expectancy), education (schooling) and standard of living (income per head, in logarithms). Each dimension is indexed 0 to 1 and combined by a geometric mean. Criticisms: equal weights, ignores inequality and the environment.', src: DEV },
      { n: 4, f: 'Measure of Economic Welfare (MEW) and Multidimensional Poverty Index (MPI)', b: 'MEW: GDP adjusted for non-market output, leisure, regrettable necessities and externalities (e.g. 200 + 25 + 18 − 14 − 11 = 218).\nMPI: poverty as overlapping deprivations; MPI = H × A (headcount × intensity), e.g. 30% × 45% = 0.135.' },
      { n: 5, f: 'Limitations of real GDP per capita as a measure of living standards', b: 'It is an average, ignoring distribution; misses informal, subsistence and unpaid output and leisure; ignores externalities and resource depletion; does not show the composition of output; and is distorted by exchange rates and data quality.' },
      { n: 6, f: 'Kuznets curve', b: 'An inverted U between income per head and inequality: inequality rises as industrialisation widens urban-rural and skill gaps, then falls as education spreads and taxes and welfare expand. It is not a law; policy can bend it and data fit only partly.', src: DEV },
    ]),
    ...sub(T11, 'characteristics-of-countries-at-different-levels-of-development-cambridge-alevel-economics', '11.4', [
      { n: 1, f: 'Birth rate, death rate and natural increase: population 500,000, births 9,000, deaths 6,000', b: 'Birth rate = 9,000 ÷ 500,000 × 1,000 = 18.0 per 1,000. Death rate = 12.0. Natural increase = 6.0 per 1,000, or 0.6% (3,000 people). Population growth = natural increase + net migration.' },
      { n: 2, f: 'Infant mortality rate', b: 'Deaths under age one ÷ live births × 1,000. Note the base is live births, not the whole population (unlike the birth rate).', src: CHR },
      { n: 3, f: 'Optimum population', b: 'The population giving the highest output per head with given resources, capital and technology. Example: output per head 15, 18, 19, 16 at 10, 20, 30, 40 million, so the optimum is 30 million. It moves with technology and capital.', src: CHR },
      { n: 4, f: 'Lorenz curve and Gini coefficient', b: 'Lorenz curve: cumulative income share against cumulative population share, poorest first; the 45° line is equality. Gini = A ÷ (A + B), where A is the area between the line and the curve and B the area below the curve. 0 is equal; 1 is one person has everything.' },
      { n: 5, f: 'How do economic structure and the pattern of trade change with development?', b: 'Primary sector jobs dominate at low income and fall as farm productivity rises; secondary rises through middle income; tertiary is largest at high income. Low-income countries export mainly primary products and import manufactures; high-income countries trade manufactures and services.' },
    ]),
    ...sub(T11, 'relationship-between-countries-at-different-levels-of-development-cambridge-alevel-economics', '11.5', [
      { n: 1, f: 'Bilateral, multilateral and tied aid', b: 'Bilateral: from one government directly to another.\nMultilateral: pooled by many donors and passed on through an international body.\nTied: must be spent on the donor\'s goods or services (a tied grant of 90 at prices 20% above world prices is worth only 75).', src: AID },
      { n: 2, f: 'Aid: one positive chain and two negative chains', b: 'Positive: aid for infrastructure and schools raises physical and human capital, so LRAS shifts right.\nNegative: a large inflow strengthens the currency and hurts exports; free food aid lowers local food prices and farm incomes; aid can replace tax revenue and weaken accountability.' },
      { n: 3, f: 'Why are export earnings from primary products volatile?', b: 'Demand is price inelastic, so a supply change moves price a lot. With PED −0.25, a 5% rise in sales needs a 20% price fall, so revenue = 1.05 × 0.80 = 0.84, a 16% fall.' },
      { n: 4, f: 'Multinational company (MNC) and foreign direct investment (FDI)', b: 'MNC: a firm that owns or controls operations in more than one country.\nFDI: investment by a firm or person in one country in productive assets or a controlling stake in a business in another country.', src: MNC },
      { n: 5, f: 'Transfer pricing, and its effect on a host country', b: 'Prices set for sales between branches of the same MNC. A parent charging its subsidiary an extra 2.0 m moves profit to a low-tax country: host tax at 20% on 5.0 m falls from 1.0 m to 0.6 m, so the host loses 0.4 m.', src: MNC },
      { n: 6, f: 'Roles of the IMF and the World Bank', b: 'IMF: short-run payments and macroeconomic stability; surveillance, temporary balance of payments loans with conditionality, technical assistance.\nWorld Bank: long-run development and poverty reduction; project loans, very low-interest loans and grants for the poorest countries.' },
      { n: 7, f: 'Causes and consequences of external debt', b: 'Causes: current account and budget deficits, low saving, falling export prices, rising interest rates, depreciation (foreign-currency debt costs more), waste and shocks.\nConsequences: debt service has an opportunity cost in health and education, higher taxes or cuts, pressure on the currency, a debt trap and loss of policy freedom.' },
    ]),
    ...sub(T11, 'globalisation-cambridge-alevel-economics', '11.6', [
      { n: 1, f: 'Globalisation and its main causes', b: 'The growing integration and interdependence of economies through rising cross-border flows of goods, services, capital, labour, technology and information. Causes: cheaper transport, ICT, trade liberalisation, capital mobility, MNCs, growth of emerging economies and trading blocs.' },
      { n: 2, f: 'Free trade area, customs union, monetary union and full economic union', b: 'Free trade area: no tariffs between members, own tariffs on outsiders.\nCustoms union: adds a common external tariff.\nMonetary union: adds a single currency and monetary policy.\nFull economic union: adds harmonised fiscal and other policies.' },
      { n: 3, f: 'Trade creation and trade diversion', b: 'Trade creation: domestic output replaced by cheaper imports from a partner, an efficiency gain.\nTrade diversion: imports from a cheaper outside producer replaced by dearer imports from a partner, an efficiency loss.', src: GLB },
      { n: 4, f: 'Domestic cost 80, outsider 60, partner 70, tariff 25%. A customs union removes the tariff on the partner only. Creation or diversion?', b: 'Before: outsider landed price 60 × 1.25 = 75, below 80, so imports come from the outsider. After: partner at 70 is cheapest. The source moves from outsider to partner, so it is trade diversion: the resource cost rises by 10 and the government loses 15 of tariff revenue per unit.' },
      { n: 5, f: 'Monetary union: gains and losses for members', b: 'Gains: no currency conversion costs, no exchange rate risk among members, price transparency, more trade and investment.\nLosses: one interest rate for all, no devaluation to absorb a shock, adjustment falls on wages, prices and labour mobility.' },
      { n: 6, f: 'Why does a free trade area need rules of origin?', b: 'Members keep different tariffs on outsiders, so goods could enter through the lowest-tariff member and move on tariff-free (trade deflection). Rules of origin decide which goods qualify for tariff-free movement.' },
    ]),
  ],
};
