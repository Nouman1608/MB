/**
 * D-438 -- flashcards for Cambridge IGCSE Economics 0455 (for examination in 2026).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   The syllabus is not tiered, so no card is marked upper tier.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 0455, or from the page's own
 *               definitions table); origin 'revision-notes'.
 *
 * All figures in worked examples are invented and were checked by hand.
 * Plain text only (see types.ts). Unicode for symbols.
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

const T1 = 'the-basic-economic-problem-cambridge-igcse-economics';
const T2 = 'the-allocation-of-resources-cambridge-igcse-economics';
const T3 = 'microeconomic-decision-makers-cambridge-igcse-economics';
const T4 = 'government-and-the-macroeconomy-cambridge-igcse-economics';
const T5 = 'economic-development-cambridge-igcse-economics';
const T6 = 'international-trade-and-globalisation-cambridge-igcse-economics';

const SCAR = 'cambridge-igcse-economics-scarcity-free-and-economic-goods-and-the-factors-of-revision-notes';
const OPP = 'cambridge-igcse-economics-opportunity-cost-and-production-possibility-curves-revision-notes';
const MKT = 'cambridge-igcse-economics-micro-and-macro-markets-and-the-price-mechanism-revision-notes';
const DS = 'cambridge-igcse-economics-demand-and-supply-curves-movements-and-shifts-revision-notes';
const EQ = 'cambridge-igcse-economics-equilibrium-disequilibrium-and-price-changes-revision-notes';
const ELAS = 'cambridge-igcse-economics-price-elasticity-of-demand-and-supply-calculation-and-revision-notes';
const MF = 'cambridge-igcse-economics-the-market-economic-system-and-market-failure-revision-notes';
const MIX = 'cambridge-igcse-economics-the-mixed-economic-system-and-government-intervention-revision-notes';
const MON = 'cambridge-igcse-economics-money-banking-and-household-spending-saving-and-revision-notes';
const WRK = 'cambridge-igcse-economics-workers-wages-and-trade-unions-revision-notes';
const FIRM = 'cambridge-igcse-economics-classification-growth-and-size-of-firms-revision-notes';
const FAC = 'cambridge-igcse-economics-demand-for-factors-production-and-productivity-and-revision-notes';
const GOV = 'cambridge-igcse-economics-the-role-of-government-and-macroeconomic-aims-revision-notes';
const BUD = 'cambridge-igcse-economics-government-budget-spending-and-taxation-revision-notes';
const FISC = 'cambridge-igcse-economics-fiscal-policy-measures-and-monetary-policy-revision-notes';
const SSP = 'cambridge-igcse-economics-supply-side-policy-and-measuring-economic-growth-and-revision-notes';
const EMP = 'cambridge-igcse-economics-employment-and-unemployment-revision-notes';
const INF = 'cambridge-igcse-economics-inflation-and-deflation-revision-notes';
const LIV = 'cambridge-igcse-economics-living-standards-and-poverty-revision-notes';
const POP = 'cambridge-igcse-economics-population-and-differences-in-development-between-revision-notes';
const INTL = 'cambridge-igcse-economics-international-specialisation-globalisation-mncs-and-revision-notes';
const PROT = 'cambridge-igcse-economics-trade-protection-methods-reasons-and-consequences-revision-notes';
const FX = 'cambridge-igcse-economics-foreign-exchange-rates-revision-notes';
const BOP = 'cambridge-igcse-economics-current-account-of-the-balance-of-payments-revision-notes';

export const DECK_CAMBRIDGE_IGCSE_ECONOMICS: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'igcse',
  subjectSlug: 'economics',
  syllabusCode: '0455',
  syllabusSeries: 'For examination in 2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // 1 The basic economic problem
    ...sub(T1, 'the-nature-of-the-economic-problem-cambridge-igcse-economics', '1.1', [
      { n: 1, f: 'The economic problem', b: 'Resources are finite while wants are unlimited, so choices must be made.', src: SCAR },
      { n: 2, f: 'Give one example of the economic problem for a consumer, a worker, a producer and a government', b: 'Consumer: limited income and time, so must choose what to buy.\nWorker: limited hours, so must choose between pay and leisure.\nProducer: limited inputs and finance, so must choose what and how to produce.\nGovernment: limited tax revenue, so must choose how to share the budget.' },
      { n: 3, f: 'Economic good vs free good', b: 'Economic good: scarce, uses resources to produce, has an opportunity cost and normally a price.\nFree good: not scarce, needs no resources to obtain, has no opportunity cost and no price.' },
      { n: 4, f: 'Free school meals have a zero price to the pupil. Are they a free good?', b: 'No. They still use resources (food, cooks, kitchens), so they are scarce and have an opportunity cost. Someone else pays. A zero price does not make a good free.' },
      { n: 5, f: 'Can the same item be a free good in one setting and an economic good in another?', b: 'Yes. Stream water for a village can be a free good; treated, piped water for a city uses resources, so it is an economic good. Say "in this setting" when giving an example.' },
    ]),
    ...sub(T1, 'the-factors-of-production-cambridge-igcse-economics', '1.2', [
      { n: 1, f: 'The four factors of production and the reward to each', b: 'Land (natural resources): rent.\nLabour (human physical and mental effort): wages.\nCapital (goods made to help make more goods): interest.\nEnterprise (combining the other factors and bearing risk): profit.', src: SCAR },
      { n: 2, f: 'Is money capital?', b: 'No. Capital is man-made goods used in production, such as machines, tools, factories and vans. Money can buy capital, but money itself produces nothing.' },
      { n: 3, f: 'Why can the reward to enterprise be negative?', b: 'Profit is what is left after paying the other factors (rent, wages, interest). If revenue is less than those payments, the entrepreneur makes a loss.' },
      { n: 4, f: 'Geographical mobility vs occupational mobility of a factor', b: 'Geographical mobility: the ease of moving the factor between places.\nOccupational mobility: the ease of moving it between jobs or uses.', src: SCAR },
      { n: 5, f: 'Give two things that lower the geographical and two that lower the occupational mobility of labour', b: 'Geographical: high cost of moving or housing, family ties.\nOccupational: lack of skills or retraining, licences or qualifications needed.\nLow mobility can leave vacancies and unemployed workers side by side.' },
      { n: 6, f: 'Closing capital stock formula. Opening stock 500, gross investment 60, depreciation 8% of opening stock: find the closing stock', b: 'Closing stock = opening stock + gross investment − depreciation.\nDepreciation = 500 × 0.08 = 40.\nClosing stock = 500 + 60 − 40 = 520.' },
    ]),
    ...sub(T1, 'opportunity-cost-cambridge-igcse-economics', '1.3', [
      { n: 1, f: 'Opportunity cost', b: 'The value of the best option passed up by making a choice (the next best alternative forgone).', src: OPP },
      { n: 2, f: 'A worker can spend a day on a trip (value 12), a course (value 9) or rest (value 5). She takes the trip. What is the opportunity cost?', b: 'The course, valued at 9. Only the next best option counts, not all the options given up, and not the gap of 12 − 9 = 3.' },
      { n: 3, f: 'A field earns 9,000 growing barley or 7,500 growing oats. What is the opportunity cost of growing barley?', b: 'The 7,500 that oats would have earned, the next best use of the field.' },
      { n: 4, f: 'How does opportunity cost affect a government decision?', b: 'The budget is limited, so more spending on one service (such as health) means less on another (such as schools), or higher taxes. The government should compare the benefits of the options.' },
      { n: 5, f: 'Money cost vs opportunity cost', b: 'Money cost is the price paid. Opportunity cost is the benefit of the best alternative given up. Naming the price instead of the next best alternative is a common error.' },
    ]),
    ...sub(T1, 'production-possibility-curve-diagrams-cambridge-igcse-economics', '1.4', [
      { n: 1, f: 'Production possibility curve (PPC)', b: 'A curve showing the largest amounts of two goods an economy can make together when resources are fully and efficiently used and technology is fixed.', src: OPP },
      { n: 2, f: 'What does a point on, under and beyond a PPC show?', b: 'On: full and efficient use of resources (maximum output).\nUnder: unemployed or inefficiently used resources.\nBeyond: not attainable with current resources and technology.' },
      { n: 3, f: 'Straight-line PPC vs PPC bowed outward', b: 'Straight line: constant opportunity cost (resources suit both goods equally).\nBowed outward (concave to the origin): increasing opportunity cost, because resources suit the two goods unequally, so each extra unit of one good costs more of the other.' },
      { n: 4, f: 'Moving along a PPC raises good M from 10 to 14 and lowers good N from 90 to 78. Find the opportunity cost of one unit of M', b: 'Gain in M = 14 − 10 = 4. Loss of N = 90 − 78 = 12.\nOpportunity cost = good lost ÷ good gained = 12 ÷ 4 = 3 units of N per unit of M.' },
      { n: 5, f: 'Movement along a PPC vs a shift of the PPC', b: 'Movement along: a change in the mix of goods produced; capacity is unchanged.\nOutward shift: capacity grows (potential growth).\nMoving from under the curve to the curve is actual growth, using idle resources.' },
      { n: 6, f: 'Give two causes of an outward and two of an inward shift of a PPC', b: 'Outward: investment in capital, new technology, better education, more workers or new land.\nInward: war, natural disaster, resource depletion, loss of workers.' },
    ]),

    // 2 The allocation of resources
    ...sub(T2, 'microeconomics-and-macroeconomics-cambridge-igcse-economics', '2.1', [
      { n: 1, f: 'Microeconomics', b: 'The study of choices made by single households, workers and firms, and of single markets.', src: MKT },
      { n: 2, f: 'Macroeconomics', b: 'The study of the whole economy: output, employment, the general price level and trade.', src: MKT },
      { n: 3, f: 'Micro or macro?\n(a) a bakery sets its price\n(b) a country\'s unemployment rate\n(c) a farm chooses between two crops\n(d) the general price level', b: '(a) Micro. (b) Macro. (c) Micro. (d) Macro.' },
      { n: 4, f: 'Name the decision makers at the micro and macro levels', b: 'Micro: households (consumers), workers and firms.\nMacro: government and the central bank.\nGovernment acts at both levels: taxing one product is micro; changing taxes to influence national output is macro.' },
    ]),
    ...sub(T2, 'the-role-of-markets-in-allocating-resources-cambridge-igcse-economics', '2.2', [
      { n: 1, f: 'Market', b: 'Any set-up in which buyers and sellers meet to trade.', src: MKT },
      { n: 2, f: 'Price mechanism', b: 'The way changes in price, from demand and supply, coordinate decisions and allocate resources.', src: MKT },
      { n: 3, f: 'The three basic allocation questions', b: 'What to produce, how to produce, and for whom to produce. Each answer has an opportunity cost.' },
      { n: 4, f: 'How does the price mechanism answer what, how and for whom?', b: 'What: goods with high prices and profits are produced more; loss-making goods are cut back.\nHow: firms choose the lowest-cost method given input prices.\nFor whom: output goes to those willing and able to pay.' },
      { n: 5, f: 'The three jobs of price in a market', b: 'Signalling: tells producers what buyers want.\nIncentive: higher profit encourages more supply; a higher price discourages buying.\nRationing: price rises until only those willing and able to pay can buy.' },
      { n: 6, f: 'One strength and one limitation of the price mechanism', b: 'Strength: responds quickly to changes in wants, with no central planner, and rewards low-cost production.\nLimitation: output goes to those with money, not always those in need; adjustment takes time, so shortages and surpluses can last.' },
    ]),
    ...sub(T2, 'demand-cambridge-igcse-economics', '2.3', [
      { n: 1, f: 'Demand', b: 'How much consumers are ready and able to buy at each price in a stated period.', src: DS },
      { n: 2, f: 'Why does a demand curve slope down from left to right?', b: 'A higher price makes the good dearer than alternatives and cuts what buyers can afford, so they buy less. (Axes: price on the vertical axis, quantity on the horizontal.)' },
      { n: 3, f: 'Extension and contraction of demand vs increase and decrease in demand', b: 'Extension or contraction: a movement along the curve caused by a change in the good\'s own price (price falls → extension; price rises → contraction).\nIncrease or decrease: a shift of the whole curve (right or left) caused by any other condition.' },
      { n: 4, f: 'Give five changes that increase demand (shift the curve right)', b: 'Higher income (normal good); a rise in the price of a substitute; a fall in the price of a complement; tastes or advertising in favour; more buyers (population); expected future price rise; suitable season or weather.' },
      { n: 5, f: 'The price of cars rises. What happens to the demand for petrol, and what is the term?', b: 'Cars and petrol are complements, so fewer cars are bought and demand for petrol decreases: the demand curve for petrol shifts left.' },
      { n: 6, f: 'Normal good vs inferior good', b: 'When income rises, demand for a normal good increases, but demand for an inferior good decreases (buyers switch to better alternatives).' },
    ]),
    ...sub(T2, 'supply-cambridge-igcse-economics', '2.4', [
      { n: 1, f: 'Supply', b: 'How much producers are ready and able to sell at each price in a stated period.', src: DS },
      { n: 2, f: 'Why does a supply curve slope up from left to right?', b: 'A higher price brings more revenue per unit, so selling more becomes more profitable and new sellers are drawn in.' },
      { n: 3, f: 'The price of tea rises from 4 to 6 and quantity supplied rises from 40 to 80. Name the change and find the percentage change in quantity', b: 'An extension of supply (a movement along the supply curve).\n(80 − 40) ÷ 40 × 100 = +100%.' },
      { n: 4, f: 'Give four causes of an increase in supply (shift right)', b: 'Lower costs of production; better technology; more firms; a subsidy; a good harvest.\nThe opposite (higher costs, indirect tax, poor harvest, other goods more profitable) decreases supply.' },
      { n: 5, f: 'Effect of an indirect tax and of a subsidy on the supply curve', b: 'Indirect tax: raises costs, so supply decreases; the curve shifts up (left) by the tax per unit.\nSubsidy: lowers costs, so supply increases; the curve shifts down (right) by the subsidy.' },
      { n: 6, f: 'How is market supply found from the supply of individual firms?', b: 'By aggregation: add the quantities each firm supplies at each price (a horizontal sum). Never add the prices. Example: 8 farms × 50 kg = 400 kg; with 10 farms, 500 kg.' },
    ]),
    ...sub(T2, 'price-determination-cambridge-igcse-economics', '2.5', [
      { n: 1, f: 'Market equilibrium', b: 'Quantity demanded equals quantity supplied at the prevailing price, so there is no shortage or surplus.', src: EQ },
      { n: 2, f: 'Shortage (excess demand)', b: 'Quantity demanded exceeds quantity supplied; the price is below equilibrium.', src: EQ },
      { n: 3, f: 'Surplus (excess supply)', b: 'Quantity supplied exceeds quantity demanded; the price is above equilibrium.', src: EQ },
      { n: 4, f: 'At a price of 5, quantity demanded is 600 and quantity supplied is 400. What is the disequilibrium, and how many are traded?', b: 'A shortage (excess demand) of 600 − 400 = 200. Only 400 are traded: at a disequilibrium price the smaller of the two quantities is bought and sold.' },
      { n: 5, f: 'Explain how a surplus is removed in a free market', b: 'Unsold stock builds up, so sellers cut the price. Quantity demanded extends and quantity supplied contracts until they are equal at the equilibrium price. The curves do not move.' },
      { n: 6, f: 'Describe an equilibrium diagram in words', b: 'Price on the vertical axis, quantity on the horizontal. A downward-sloping demand curve D and upward-sloping supply curve S cross at the equilibrium; dotted lines show equilibrium price and quantity on the axes.' },
    ]),
    ...sub(T2, 'price-changes-cambridge-igcse-economics', '2.6', [
      { n: 1, f: 'Effect on equilibrium price and quantity of: an increase in demand; a decrease in supply', b: 'Increase in demand (D shifts right): price rises, quantity rises.\nDecrease in supply (S shifts left): price rises, quantity falls.' },
      { n: 2, f: 'Effect on equilibrium price and quantity of: a decrease in demand; an increase in supply', b: 'Decrease in demand (D shifts left): price falls, quantity falls.\nIncrease in supply (S shifts right): price falls, quantity rises.' },
      { n: 3, f: 'A poor harvest hits a market. Explain the change in price in steps', b: 'Supply shifts left. At the old price there is a shortage. Buyers compete, so price rises. Quantity demanded contracts and quantity supplied extends until a new equilibrium at a higher price and lower quantity.' },
      { n: 4, f: 'Demand and supply both increase. What happens to price and quantity?', b: 'Quantity rises for certain. Price could rise, fall or stay the same: it depends on which shift is larger.' },
      { n: 5, f: 'After a supply decrease, price rises from 6 to 7.20 and sales fall from 520 to 424. What happens to sellers\' revenue?', b: 'Revenue = price × quantity. Before: 6 × 520 = 3,120. After: 7.20 × 424 = 3,052.80. Revenue falls: the higher price did not make up for the fall in sales.' },
      { n: 6, f: 'Evaluation: why may a real price change differ from the simple one-shift prediction?', b: 'It depends on the size of the shift, on time (supply is often slower to respond, so short-run price changes are larger), and on other changes happening at once ("other things equal" rarely holds).' },
    ]),
    ...sub(T2, 'price-elasticity-of-demand-cambridge-igcse-economics', '2.7', [
      { n: 1, f: 'Price elasticity of demand (PED)', b: 'How responsive quantity demanded is when the price of the good changes.', src: ELAS },
      { n: 2, f: 'PED formula. Price rises from 20 to 21 and quantity demanded falls from 400 to 340: find PED', b: 'PED = % change in quantity demanded ÷ % change in price.\n% change in price = 1 ÷ 20 × 100 = +5%. % change in quantity = −60 ÷ 400 × 100 = −15%.\nPED = −15 ÷ 5 = −3.0: elastic.' },
      { n: 3, f: 'Name the PED for values of 0, between 0 and 1, exactly 1, over 1, and infinity (ignore the sign)', b: '0: perfectly inelastic (vertical demand curve).\n0 to 1: inelastic.\n1: unitary.\nOver 1: elastic.\nInfinity: perfectly elastic (horizontal demand curve).' },
      { n: 4, f: 'What makes demand more price elastic?', b: 'Many close substitutes; the good is a luxury; it takes a large share of income; a longer time period; the good is defined narrowly (one brand rather than the whole product).' },
      { n: 5, f: 'PED and total revenue: what happens to revenue when price rises, if demand is elastic, unitary or inelastic?', b: 'Elastic: revenue falls.\nUnitary: no change.\nInelastic: revenue rises.\n(A price cut does the reverse.)' },
      { n: 6, f: 'Why does PED matter for a government taxing a good?', b: 'An indirect tax raises more revenue on a good with inelastic demand, because sales fall little, but it cuts consumption only a little. To discourage a harmful good, demand must be more elastic. It depends on whether the aim is revenue or less use.' },
    ]),
    ...sub(T2, 'price-elasticity-of-supply-cambridge-igcse-economics', '2.8', [
      { n: 1, f: 'Price elasticity of supply (PES)', b: 'How responsive quantity supplied is when the price of the good changes.', src: ELAS },
      { n: 2, f: 'PES formula. Price rises from 12 to 15 and quantity supplied rises from 160 to 176: find PES', b: 'PES = % change in quantity supplied ÷ % change in price.\nPrice: +3 ÷ 12 = +25%. Quantity: +16 ÷ 160 = +10%.\nPES = 10 ÷ 25 = 0.4: inelastic. PES is positive.' },
      { n: 3, f: 'What makes supply more price elastic?', b: 'Spare capacity; stocks of finished goods; factors of production easy to switch; inputs easy to obtain and quick production; a longer time period.' },
      { n: 4, f: 'Describe supply curves with PES = 0, PES = infinity and PES = 1', b: 'PES = 0: vertical line (perfectly inelastic).\nPES = infinity: horizontal line (perfectly elastic).\nPES = 1: any straight line through the origin.' },
      { n: 5, f: 'Why do food prices spike after a poor harvest?', b: 'Supply shifts left. Demand for a staple food is inelastic, so price must rise a lot to clear the market. Supply of the crop is inelastic within the season, so the high price cannot bring extra output quickly.' },
    ]),
    ...sub(T2, 'market-economic-system-cambridge-igcse-economics', '2.9', [
      { n: 1, f: 'Market economic system', b: 'An economic system in which resource allocation is decided by buyers and sellers through the price mechanism, with resources mostly privately owned and little direction from the government.', src: MF },
      { n: 2, f: 'Three advantages of a market economic system', b: 'Wide consumer choice; competition lowers costs and prices; prices signal what consumers want; profit rewards effort and risk; quick adjustment without a planner.' },
      { n: 3, f: 'Three disadvantages of a market economic system', b: 'Public goods not provided; external costs ignored; inequality in who can buy; monopoly power can develop; merit goods under-consumed and demerit goods over-consumed.' },
      { n: 4, f: 'Evaluation: when does a market system work well and when badly?', b: 'Well for goods people can be charged for and can judge for themselves, in competitive markets. Badly for goods with large external effects, public goods, and where incomes are very unequal. No real economy is purely market-based.' },
    ]),
    ...sub(T2, 'market-failure-cambridge-igcse-economics', '2.10', [
      { n: 1, f: 'Market failure', b: 'The free market allocates resources inefficiently, so the amount produced and consumed is not the amount society would want.', src: MF },
      { n: 2, f: 'Social cost and social benefit', b: 'Social cost = private cost + external cost.\nSocial benefit = private benefit + external benefit.\nExternal costs and benefits fall on third parties.', src: MF },
      { n: 3, f: 'A dye works has a private cost of 28 per unit and an external cost of 9 per unit. Find the social cost per unit and the total external cost at 2,500 units', b: 'Social cost = 28 + 9 = 37 per unit.\nTotal external cost = 9 × 2,500 = 22,500.' },
      { n: 4, f: 'Public good: its two features, and why the market fails to provide it', b: 'Non-excludable (people who do not pay cannot be stopped from benefiting) and non-rival (one person\'s use does not reduce another\'s). Free riders will not pay, so firms cannot raise enough revenue. Examples: street lighting, flood defences.' },
      { n: 5, f: 'Merit good vs demerit good', b: 'Merit good: society judges it beneficial; under-consumed in a free market because benefits are undervalued (education, vaccination).\nDemerit good: harmful; over-consumed because harm is underestimated (cigarettes).' },
      { n: 6, f: 'How do monopoly power and factor immobility cause market failure?', b: 'Monopoly: barriers to entry let a firm restrict output and raise price, so consumers lose.\nFactor immobility: geographical or occupational barriers leave unemployed workers and unfilled vacancies side by side.' },
    ]),
    ...sub(T2, 'mixed-economic-system-cambridge-igcse-economics', '2.11', [
      { n: 1, f: 'Mixed economic system', b: 'Resources are allocated partly by the private sector through the price mechanism and partly by the public sector through government decisions.', src: MIX },
      { n: 2, f: 'Maximum price vs minimum price: where set, and the result', b: 'Maximum price: a legal cap set below equilibrium, causing a shortage (aim: affordability).\nMinimum price: a legal floor set above equilibrium, causing a surplus (aim: support producers).\nA control on the wrong side of equilibrium has no effect.' },
      { n: 3, f: 'Qd = 100 − 4P and Qs = −20 + 8P. Equilibrium is P = 10, Q = 60. A maximum price of 7 is set: find the shortage', b: 'At P = 7: Qd = 100 − 28 = 72; Qs = −20 + 56 = 36.\nShortage = 72 − 36 = 36. Only 36 are traded.' },
      { n: 4, f: 'Effect of an indirect tax and a subsidy on a market', b: 'Tax: supply shifts up (left) by the tax; price rises (usually by less than the tax) and quantity falls.\nSubsidy: supply shifts down (right); price falls and quantity rises.\nThe demand curve does not move.' },
      { n: 5, f: 'Privatisation vs nationalisation', b: 'Privatisation: moving ownership from the public sector to the private sector.\nNationalisation: moving ownership from the private sector to the public sector.' },
      { n: 6, f: 'Evaluation: give one drawback of a minimum wage and of a tax on a demerit good', b: 'Minimum wage above equilibrium raises pay for those in work but may cut jobs; the loss depends on how responsive labour demand is.\nTax on a demerit good with inelastic demand raises revenue but changes behaviour little.\nIntervention can itself cause government failure.' },
    ]),

    // 3 Microeconomic decision makers
    ...sub(T3, 'money-and-banking-cambridge-igcse-economics', '3.1', [
      { n: 1, f: 'Money', b: 'Anything generally accepted in payment for goods, services and debts.', src: MON },
      { n: 2, f: 'The four functions of money', b: 'Medium of exchange; measure of value (unit of account); store of value; standard for deferred payment.' },
      { n: 3, f: 'Why is barter inefficient?', b: 'It needs a double coincidence of wants: each trader must have what the other wants at the same time. It also needs many exchange ratios: with n goods, n(n − 1) ÷ 2 ratios, so 7 goods need 21 ratios but only 7 money prices.' },
      { n: 4, f: 'Characteristics of good money', b: 'Acceptable, durable, portable, divisible, scarce (limited in supply), uniform and secure (hard to copy).' },
      { n: 5, f: 'Functions of a central bank', b: 'Issues notes and coins; banker to the government; banker to commercial banks; lender of last resort; runs monetary policy (key interest rate, money supply); holds foreign currency reserves; supervises banks.' },
      { n: 6, f: 'Functions of a commercial bank', b: 'Accepts deposits (current and savings accounts); lends (loans, mortgages, overdrafts); provides payment services (cards, transfers); aims to make a profit.' },
    ]),
    ...sub(T3, 'households-cambridge-igcse-economics', '3.2', [
      { n: 1, f: 'Disposable income and saving', b: 'Disposable income: income after tax and other deductions.\nSaving: disposable income not spent.', src: MON },
      { n: 2, f: 'Saving ratio formula. Disposable income 3,200, saving 400: find the ratio', b: 'Saving ratio = saving ÷ disposable income × 100.\n400 ÷ 3,200 × 100 = 12.5%.' },
      { n: 3, f: 'What happens to household spending, saving and borrowing when the rate of interest rises?', b: 'Borrowing costs more, so fewer households borrow and repayments rise. Saving earns more, so some save more. Spending on goods and services falls. The size depends on existing debt and confidence.' },
      { n: 4, f: 'How does a rise in income affect household spending and saving?', b: 'Spending rises and saving rises; richer households usually save a bigger share of income. Lower-income households save less and may borrow to pay for necessities.' },
      { n: 5, f: 'How does confidence affect households?', b: 'High confidence about jobs, income and prices: more spending and borrowing, less saving.\nLow confidence: more saving, less spending and borrowing. Income gives the ability to spend; confidence gives the willingness.' },
      { n: 6, f: 'Why do saving and borrowing differ between households?', b: 'Differences in income, age and life stage, family size, attitudes to risk, wealth and access to credit.' },
    ]),
    ...sub(T3, 'workers-cambridge-igcse-economics', '3.3', [
      { n: 1, f: 'Wage and non-wage factors in the choice of occupation', b: 'Wage factors: pay rate, overtime, bonuses, commission.\nNon-wage factors: job security, hours, working conditions, promotion, training, holidays, pension, interest in the work, location and travel cost.' },
      { n: 2, f: 'Derived demand (for labour)', b: 'Demand for workers that comes from demand for the goods they make.', src: WRK },
      { n: 3, f: 'Labour market: what happens to the wage and employment when demand for the product rises, and when fewer people are qualified for the job?', b: 'Product demand rises: labour demand shifts right; wage and employment rise.\nFewer qualified people: labour supply shifts left; wage rises, employment falls.' },
      { n: 4, f: 'A minimum wage of 14 is set. At 14, labour demanded is 800 and labour supplied is 1,100. Equilibrium wage is 12. What happens?', b: 'The floor is above equilibrium, so it binds. A surplus of labour appears: 1,100 − 800 = 300 unemployed. A minimum wage set below equilibrium would have no effect.' },
      { n: 5, f: 'Why are skilled workers usually paid more than unskilled workers?', b: 'Training lowers the supply of skilled workers; their output is more valuable, so demand for them is high; they often have stronger bargaining power.' },
      { n: 6, f: 'Division of labour: one advantage and one disadvantage for workers and for firms', b: 'Workers: quicker and more skilled at one task, but boredom and narrow skills.\nFirms: more output and lower unit costs, but production stops if one group is missing, and morale may fall.' },
    ]),
    ...sub(T3, 'trade-unions-cambridge-igcse-economics', '3.4', [
      { n: 1, f: 'Trade union', b: 'An organisation of workers that aims to protect and improve members\' pay and conditions.', src: WRK },
      { n: 2, f: 'Collective bargaining', b: 'The union and the employer negotiating pay and conditions for all members together.', src: WRK },
      { n: 3, f: 'Three roles of a trade union', b: 'Collective bargaining on wages, hours and conditions; protecting employment (resisting redundancy, pushing for safety); influencing government (minimum wage, employment law).' },
      { n: 4, f: 'What makes a trade union strong?', b: 'A high share of workers as members; scarce skills; a profitable employer; low unemployment; supportive laws; rising demand for the product; unity among members.' },
      { n: 5, f: 'One advantage and one disadvantage of trade unions for firms', b: 'Advantage: one partner to negotiate with, and better communication with staff.\nDisadvantage: higher costs, disruption from strikes, slower change.' },
      { n: 6, f: 'Pay rises 5% while prices rise 4%. What is the approximate real pay rise?', b: 'Real change = 1.05 ÷ 1.04 − 1 ≈ 0.96%, so just under 1%. A nominal rise is not the same as a real rise.' },
    ]),
    ...sub(T3, 'firms-cambridge-igcse-economics', '3.5', [
      { n: 1, f: 'Three ways of classifying firms', b: 'By sector: primary (raw materials), secondary (manufacturing, construction), tertiary (services).\nBy ownership: private sector or public sector.\nBy relative size: measured by employees, turnover, capital employed, output or market share.' },
      { n: 2, f: 'Why do small firms survive?', b: 'Small or local markets; customers want personal or craft products; little scope for economies of scale; the owner prefers control; niche markets or supplier roles.' },
      { n: 3, f: 'Internal vs external growth of a firm', b: 'Internal (organic): selling more, opening branches, launching products; slower but lower risk.\nExternal: merger or takeover; faster but higher risk.' },
      { n: 4, f: 'Horizontal, vertical and conglomerate mergers', b: 'Horizontal: same industry, same stage of production.\nVertical: same industry, different stage (backward towards suppliers, forward towards customers).\nConglomerate: unrelated industries; spreads risk.' },
      { n: 5, f: 'Economies vs diseconomies of scale', b: 'Economies of scale: average cost falls as output rises.\nDiseconomies of scale: average cost rises as output rises.\nAverage cost = total cost ÷ output.' },
      { n: 6, f: 'Name four internal economies of scale and two internal diseconomies', b: 'Economies: technical, purchasing (bulk buying), financial (cheaper loans), managerial, marketing, risk-bearing.\nDiseconomies: poor communication, slow decisions, low motivation, coordination problems.' },
    ]),
    ...sub(T3, 'firms-production-cambridge-igcse-economics', '3.6', [
      { n: 1, f: 'Derived demand (for a factor of production)', b: 'Demand for a factor that comes from demand for the product it helps to make.', src: FAC },
      { n: 2, f: 'Four influences on a firm\'s demand for factors of production', b: 'Demand for the product; the prices of different factors (firms shift towards the cheaper one); availability of the factor; productivity of the factor.' },
      { n: 3, f: 'Labour-intensive vs capital-intensive production', b: 'Labour-intensive: uses a lot of labour compared with capital (personal services, craft goods).\nCapital-intensive: uses a lot of machinery and equipment compared with labour (standard goods in large quantities).', src: FAC },
      { n: 4, f: 'Why might a firm choose capital-intensive production?', b: 'Labour is dear; demand is large and steady; speed or exact repeatability is needed; finance is available. It has high fixed cost but low cost per extra unit, so it wins at high output and loses at low output.' },
      { n: 5, f: 'Production vs productivity', b: 'Production: total output of goods and services.\nProductivity: output per unit of input, such as output per worker.\nProduction can rise while productivity falls.', src: FAC },
      { n: 6, f: 'A factory makes 3,600 units with 30 workers, then 4,000 units with 25 workers. Find the change in productivity', b: 'Before: 3,600 ÷ 30 = 120 per worker. After: 4,000 ÷ 25 = 160 per worker.\nChange = (160 − 120) ÷ 120 × 100 = +33.3%.' },
    ]),
    ...sub(T3, 'firms-costs-revenue-and-objectives-cambridge-igcse-economics', '3.7', [
      { n: 1, f: 'Fixed cost vs variable cost', b: 'Fixed cost (FC): stays the same whatever the output (rent, insurance).\nVariable cost (VC): changes with output (raw materials, packaging, power for machines).' },
      { n: 2, f: 'Formulae for total cost, average total cost, average fixed cost and average variable cost', b: 'TC = FC + VC.\nATC = TC ÷ output (= AFC + AVC).\nAFC = FC ÷ output.\nAVC = VC ÷ output.' },
      { n: 3, f: 'FC 1,200, VC 2,400 at an output of 600. Price is 7.50. Find TC, ATC and profit', b: 'TC = 1,200 + 2,400 = 3,600.\nATC = 3,600 ÷ 600 = 6 per unit (AFC 2 + AVC 4).\nTR = 7.50 × 600 = 4,500. Profit = 4,500 − 3,600 = 900.' },
      { n: 4, f: 'Describe the shapes of the AFC, AVC and ATC curves', b: 'AFC slopes down and never touches the axis (the same FC spread over more units).\nAVC is U-shaped.\nATC is U-shaped and above AVC; the gap between them is AFC, so it narrows as output rises.' },
      { n: 5, f: 'Total revenue, average revenue and profit', b: 'TR = price × quantity sold.\nAR = TR ÷ quantity sold (equal to the price if all units sell at one price).\nProfit = TR − TC. Revenue is not profit.' },
      { n: 6, f: 'Four objectives of firms', b: 'Survival (new or struggling firms); profit maximisation (largest TR − TC); growth (accept lower profit now to become larger); social welfare (charities, social enterprises, state-owned firms).' },
    ]),
    ...sub(T3, 'market-structure-cambridge-igcse-economics', '3.8', [
      { n: 1, f: 'Competitive market', b: 'A market with a high number of firms selling similar products.', src: FAC },
      { n: 2, f: 'Monopoly', b: 'A market with one firm, or one firm with a very large share, protected by barriers to entry.', src: FAC },
      { n: 3, f: 'Effect of a high number of firms on price, quality, choice and profit', b: 'Price: lower, because firms compete and customers can switch.\nQuality: higher or well maintained.\nChoice: wider.\nProfit: lower, because competition holds prices down and high profit draws in new firms.' },
      { n: 4, f: 'Characteristics of a monopoly', b: 'One firm or a very large market share; barriers to entry (high start-up cost, patents, legal protection, control of resources); few or no close substitutes; price-setting power; potential for long-lasting high profit.' },
      { n: 5, f: 'Two advantages and two disadvantages of monopoly', b: 'Advantages: economies of scale lower unit cost; profit can fund research and development; a natural monopoly avoids duplicate networks.\nDisadvantages: higher price and lower output; less choice; less pressure to improve quality or cut costs.' },
      { n: 6, f: 'A firm sells 4,200 units in a market of 6,000. Find its market share', b: 'Market share = firm sales ÷ market sales × 100 = 4,200 ÷ 6,000 × 100 = 70%.' },
    ]),

    // 4 Government and the macroeconomy
    ...sub(T4, 'the-role-of-government-cambridge-igcse-economics', '4.1', [
      { n: 1, f: 'Local, national and international roles of government', b: 'Local: services near home, local planning (e.g. waste collection).\nNational: laws, defence, taxing and spending, education and health, regulating markets, macroeconomic aims.\nInternational: agreements, trade deals, cross-border problems, aid.' },
      { n: 2, f: 'Why is government needed in an economy?', b: 'Private firms under-provide public goods; the market ignores external costs such as pollution; markets alone leave some people in poverty; markets alone do not guarantee jobs or stable prices.' },
      { n: 3, f: 'How do you decide which level of government should deal with a problem?', b: 'Match the level to the scale: if one council can solve it, local; if it needs a national budget or law, national; if it crosses a border, international.' },
    ]),
    ...sub(T4, 'the-macroeconomic-aims-of-government-cambridge-igcse-economics', '4.2', [
      { n: 1, f: 'The five macroeconomic aims of government', b: 'Economic growth; full employment (low unemployment); stable prices (low inflation); balance of payments stability; redistribution of income.' },
      { n: 2, f: 'Aim vs criterion', b: 'An aim is a goal (e.g. stable prices). A criterion is the measurable target or range used to judge it (e.g. inflation between 1% and 3%).' },
      { n: 3, f: 'Explain the conflict between full employment and stable prices', b: 'Higher total demand → firms hire → unemployment falls → labour becomes scarcer and wages rise → costs and prices rise → inflation. The conflict is strong near full capacity and weak with spare capacity.' },
      { n: 4, f: 'Explain the conflict between economic growth and balance of payments stability', b: 'Incomes rise → spending on imports rises → imports grow faster than exports → current account moves towards deficit. Weaker if growth is export-led.' },
      { n: 5, f: 'Nominal GDP rises from 800 to 852.8 while the price index rises from 100 to 104. Find real growth', b: 'Real GDP = 852.8 ÷ 104 × 100 = 820.\nReal growth = (820 − 800) ÷ 800 × 100 = 2.5%.' },
      { n: 6, f: 'Inflation falls from 5% to 2%. Is that a percentage change or a percentage point change?', b: 'It is a fall of 3 percentage points. Prices are still rising, only more slowly.' },
    ]),
    ...sub(T4, 'fiscal-policy-cambridge-igcse-economics', '4.3', [
      { n: 1, f: 'Government budget', b: 'A plan, usually for a year, of expected government revenue and planned spending.', src: BUD },
      { n: 2, f: 'Direct tax vs indirect tax', b: 'Direct tax: charged on income or wealth and paid straight to the government (income tax, profits tax).\nIndirect tax: charged on spending, collected by sellers and passed to the government (sales tax, customs duties).', src: BUD },
      { n: 3, f: 'Progressive, regressive and proportional tax', b: 'Progressive: the share of income paid rises as income rises.\nRegressive: the share of income paid falls as income rises.\nProportional: the share stays the same.\nThey describe the share, not the amount.', src: BUD },
      { n: 4, f: 'Qualities of a good tax', b: 'Equitable (based on ability to pay), certain, convenient, economical (low collection cost), efficient (does not damage incentives) and flexible.' },
      { n: 5, f: 'Fiscal policy, and the budget balance formula', b: 'Fiscal policy: the use of government spending and taxation to influence the economy and achieve macroeconomic aims.\nBudget balance = revenue − spending: negative is a deficit, positive a surplus. Revenue 64, spending 70 → deficit of 6.', src: FISC },
      { n: 6, f: 'Expansionary fiscal policy: what it is and a chain to lower unemployment', b: 'Higher government spending and/or lower taxes. Example: an income tax cut raises take-home pay → households spend more → shops sell more → firms hire → unemployment falls. Risks: higher deficit, inflation near capacity, time lags, more imports.' },
    ]),
    ...sub(T4, 'monetary-policy-cambridge-igcse-economics', '4.4', [
      { n: 1, f: 'Monetary policy', b: 'The use of interest rates, the money supply and the exchange rate to influence the economy and achieve macroeconomic aims.', src: FISC },
      { n: 2, f: 'Money supply', b: 'The total amount of money in an economy.', src: FISC },
      { n: 3, f: 'What happens when the central bank raises interest rates?', b: 'Borrowing becomes dearer and saving more rewarding → consumer spending and investment fall → output and demand-pull inflation fall. Higher rates also tend to attract foreign savers, so the currency appreciates.' },
      { n: 4, f: 'How might a cut in interest rates affect the balance of payments?', b: 'Lower rates tend to make the currency depreciate (fewer foreign savers buy it), so exports become cheaper abroad and imports dearer at home. Exports tend to rise and imports to fall, if demand is price elastic enough.' },
      { n: 5, f: 'Evaluation: why might an interest rate cut fail to raise spending?', b: 'Time lags; banks may not pass the cut on; low confidence means households and firms will not borrow; a weaker currency raises import prices. It depends on confidence and how indebted households are.' },
    ]),
    ...sub(T4, 'supply-side-policy-cambridge-igcse-economics', '4.5', [
      { n: 1, f: 'Supply-side policy', b: 'Government action to increase the economy\'s productive capacity and the efficiency of its markets, shifting the PPC outwards over time.', src: SSP },
      { n: 2, f: 'Name six supply-side policy measures', b: 'Education and training; labour market reforms; lower direct taxes; deregulation; improving incentives to work and invest; privatisation.' },
      { n: 3, f: 'How does more spending on education and training work as a supply-side policy?', b: 'Workers gain skills → output per worker rises and workers become more mobile → firms\' costs fall and structural unemployment falls → capacity grows (PPC shifts out). Drawbacks: slow, costly, skills may not match jobs.' },
      { n: 4, f: 'Deregulation vs privatisation', b: 'Deregulation removes rules and entry barriers to increase competition.\nPrivatisation sells state-owned firms to the private sector, so the owner changes.' },
      { n: 5, f: 'Supply-side policy vs demand-side (fiscal and monetary) policy', b: 'Supply-side policy works on capacity and costs, usually over years. Fiscal and monetary policy work on spending and usually act faster. Supply-side policy does little to cure cyclical unemployment.' },
    ]),
    ...sub(T4, 'economic-growth-cambridge-igcse-economics', '4.6', [
      { n: 1, f: 'Economic growth', b: 'Rising output of goods and services across time, usually measured by the percentage change in real GDP.', src: SSP },
      { n: 2, f: 'GDP, and real GDP vs nominal GDP', b: 'GDP: the total value of goods and services produced in a country in a period.\nNominal GDP: at the prices of the year measured.\nReal GDP: adjusted for inflation; real GDP = nominal GDP ÷ price index × 100.', src: SSP },
      { n: 3, f: 'Recession', b: 'A period when real GDP falls; often defined as two consecutive quarters of falling real GDP. On a PPC diagram it is a move from the curve to a point inside it; the curve itself does not shift.', src: SSP },
      { n: 4, f: 'Two ways an economy can grow, shown on a PPC', b: 'A rise in total demand uses idle resources: the point moves from inside towards the PPC (can be quick).\nMore capacity from investment, technology, or more or better factors: the whole PPC shifts out (usually slow).' },
      { n: 5, f: 'Output per worker rises 5% and the labour force rises 2%. By how much does potential output rise?', b: 'Multiply the changes: 1.05 × 1.02 = 1.071, a rise of 7.1% (not 7%).' },
      { n: 6, f: 'Two benefits and two costs of economic growth', b: 'Benefits: higher living standards, more jobs, more tax revenue for public services, less poverty.\nCosts: pollution and resource depletion, wider inequality if gains go to the rich, inflation if demand outruns capacity, imports rise with incomes.' },
    ]),
    ...sub(T4, 'employment-and-unemployment-cambridge-igcse-economics', '4.7', [
      { n: 1, f: 'Unemployment and the labour force', b: 'Unemployment: being without a job, able and willing to work, and actively looking for work at the going wage.\nLabour force: employed plus unemployed.', src: EMP },
      { n: 2, f: 'Unemployment rate formula. 144,000 unemployed in a labour force of 3,200,000: find the rate', b: 'Unemployment rate = unemployed ÷ labour force × 100.\n144,000 ÷ 3,200,000 × 100 = 4.5%.\nDivide by the labour force, not the population or the employed.' },
      { n: 3, f: 'Frictional, structural and cyclical unemployment', b: 'Frictional: short-term, moving between jobs.\nStructural: industry decline or a mismatch of skills or location; jobs exist but not for these workers.\nCyclical: a fall in total demand in a recession.' },
      { n: 4, f: 'Claimant count vs labour force survey', b: 'Claimant count: people claiming unemployment benefit; cheap and fast, but misses non-claimants.\nLabour force survey: a sample asked if they have no job and want one; includes non-claimants and is comparable, but costly with sampling error.' },
      { n: 5, f: 'Consequences of unemployment for the economy', b: 'Lost output (a point inside the PPC); lower tax revenue and higher benefit spending; wider inequality; social problems. For the individual: lost income, stress and lost skills.' },
      { n: 6, f: 'Match a policy to each type of unemployment', b: 'Cyclical: lower taxes, higher government spending, lower interest rates.\nStructural: education, retraining, help with relocation.\nFrictional: better job information, job centres.' },
    ]),
    ...sub(T4, 'inflation-and-deflation-cambridge-igcse-economics', '4.8', [
      { n: 1, f: 'Inflation, deflation and disinflation', b: 'Inflation: the general price level keeps rising over time.\nDeflation: the general price level keeps falling.\nDisinflation: prices still rise, but more slowly (the rate falls but stays positive).', src: INF },
      { n: 2, f: 'How is the Consumer Prices Index (CPI) built?', b: 'A basket of items households buy is priced each period. Each group carries a weight matching its share of spending. Weighted CPI = Σ(weight × group index) ÷ Σ weights. The base year is 100.' },
      { n: 3, f: 'Weights 40 and 60, group indices 104 and 109. Find the CPI and say what it means', b: '(40 × 104 + 60 × 109) ÷ 100 = (4,160 + 6,540) ÷ 100 = 107.0. Prices are on average 7% above the base year.' },
      { n: 4, f: 'Demand-pull vs cost-push inflation', b: 'Demand-pull: total demand grows faster than output can (cheap borrowing, tax cuts, optimism).\nCost-push: costs of production rise (wages, raw materials, energy, import prices), so firms raise prices.' },
      { n: 5, f: 'Who gains and who loses from inflation?', b: 'Lose: people on fixed incomes; savers and lenders if interest is below inflation; workers whose pay rises more slowly than prices; exporters.\nGain: borrowers, because debts shrink in real terms.' },
      { n: 6, f: 'Why is demand-side deflation usually harmful but supply-side deflation often welcome?', b: 'Demand-side (weak spending): output falls, unemployment rises, purchases are delayed, debts are harder to repay.\nSupply-side (lower costs, new technology): prices fall while output rises.' },
    ]),

    // 5 Economic development
    ...sub(T5, 'living-standards-cambridge-igcse-economics', '5.1', [
      { n: 1, f: 'Real GDP per head', b: 'Real GDP divided by population: average output (and income) per person, adjusted for price changes.', src: LIV },
      { n: 2, f: 'Human Development Index (HDI)', b: 'A 0-to-1 index combining health (life expectancy), education (years of schooling) and income per head.', src: LIV },
      { n: 3, f: 'Nominal GDP 880 billion, price index 110, population 20 million. Find real GDP per head', b: 'Real GDP = 880 ÷ 110 × 100 = 800 billion.\nPer head = 800 billion ÷ 20 million = 40,000.' },
      { n: 4, f: 'Two weaknesses of real GDP per head as a measure of living standards', b: 'It is an average that hides inequality; it leaves out unpaid and hidden (informal) activity; it ignores the environment, health and leisure.' },
      { n: 5, f: 'Real GDP per head vs HDI: which is better?', b: 'HDI is broader (health, education and income), so it shows a rich country is not always developed. Both are averages that ignore how evenly income is shared, so use both plus distribution data.' },
      { n: 6, f: 'Real GDP rises 3% and population rises 1%. Find the growth in real GDP per head', b: '1.03 ÷ 1.01 − 1 ≈ 1.98%. If both rose by the same percentage, GDP per head would not change.' },
    ]),
    ...sub(T5, 'poverty-cambridge-igcse-economics', '5.2', [
      { n: 1, f: 'Absolute poverty vs relative poverty', b: 'Absolute poverty: income too low to buy basic necessities (food, water, shelter).\nRelative poverty: income far below the typical income of the same society.', src: LIV },
      { n: 2, f: 'Median income is 18,000 and the relative poverty line is 60% of the median. Is a household on 10,500 relatively poor?', b: 'Line = 0.6 × 18,000 = 10,800. 10,500 is below it, so yes.' },
      { n: 3, f: 'Four causes of poverty', b: 'Unemployment; low wages (low skills, weak bargaining power); illness (treatment costs, lost earnings); age (small pensions, dependent children).' },
      { n: 4, f: 'Can relative poverty rise during a boom?', b: 'Yes, if the incomes of the poor grow more slowly than the median income. Absolute poverty is unlikely to rise in a boom.' },
      { n: 5, f: 'Policies to reduce poverty, with one limit each', b: 'Growth: gains may go to the rich.\nEducation: costly and slow.\nState benefits: quick, but cost taxpayers and may weaken work incentives.\nProgressive tax: may reduce effort.\nMinimum wage: may cut jobs if set above the market wage.' },
    ]),
    ...sub(T5, 'population-cambridge-igcse-economics', '5.3', [
      { n: 1, f: 'Birth rate and death rate', b: 'Birth rate: births per 1,000 people per year.\nDeath rate: deaths per 1,000 people per year.', src: POP },
      { n: 2, f: 'Optimum population', b: 'The population that gives the highest output per head. Fewer people is under-population; more is over-population.', src: POP },
      { n: 3, f: 'Population 5,000,000; births 100,000; deaths 40,000; immigration 5,000; emigration 15,000. Find the total change', b: 'Natural change = 100,000 − 40,000 = +60,000.\nNet migration = 5,000 − 15,000 = −10,000.\nTotal change = +50,000, i.e. 1.0%. New population 5,050,000.' },
      { n: 4, f: 'Why are birth rates higher in many low-income countries?', b: 'Children work or support parents in old age; high child death rates; limited contraception; less education for women. Higher incomes, women in work and education, and pensions push birth rates down.' },
      { n: 5, f: 'Population pyramid: wide base, narrow top vs narrow base, wide top', b: 'Wide base, narrow top: high birth rate, lower life expectancy; spending on schools and child health, need for jobs.\nNarrow base, wide top: low birth rate, long life; pension and healthcare costs, fewer workers per pensioner.' },
    ]),
    ...sub(T5, 'differences-in-economic-development-between-countries-cambridge-igcse-economics', '5.4', [
      { n: 1, f: 'Name six factors behind differences in development between countries', b: 'Income; productivity; population growth; size of the primary, secondary and tertiary sectors; saving and investment; education; healthcare.' },
      { n: 2, f: 'The low-income cycle', b: 'Low income → low saving → low investment → low productivity → low income. Education, healthcare, investment and lower population growth can each help break it.' },
      { n: 3, f: 'Why does a large primary sector tend to keep incomes low?', b: 'Most workers are in low-value primary production with low productivity, and raw-material prices are volatile, so incomes are low and unstable.' },
      { n: 4, f: 'GDP grows 4% and population grows 3%. What happens to output per head?', b: '1.04 ÷ 1.03 − 1 ≈ 0.97% a year. Fast population growth means output per head grows slowly, even when GDP grows quickly.' },
    ]),

    // 6 International trade and globalisation
    ...sub(T6, 'international-specialisation-cambridge-igcse-economics', '6.1', [
      { n: 1, f: 'Specialisation at national level', b: 'A country concentrates on producing a narrow range of goods and services, and trades for the rest.', src: INTL },
      { n: 2, f: 'Two bases of international specialisation', b: 'Superior resource allocation (putting land, labour and capital where they are most productive) and cheaper production methods (lower unit cost through technology, cheap inputs or economies of scale).' },
      { n: 3, f: 'Country P makes 12 tea or 6 machines per worker; Country Q makes 8 tea or 8 machines. Which should specialise in machines?', b: 'Opportunity cost of 1 machine: P = 12 ÷ 6 = 2 tea; Q = 8 ÷ 8 = 1 tea. Q has the lower opportunity cost, so Q makes machines and P makes tea.' },
      { n: 4, f: 'Advantages of specialisation for consumers, firms and the economy', b: 'Consumers: lower prices, wider choice.\nFirms: bigger markets, economies of scale.\nEconomy: more output and income, export earnings, growth.' },
      { n: 5, f: 'Why can overspecialisation be risky?', b: 'An economy relying on one export is exposed: if its price falls, export earnings, incomes and jobs fall, and workers may face structural unemployment. The risk depends on the share of income from that product and how easily workers can retrain.' },
    ]),
    ...sub(T6, 'globalisation-free-trade-and-protection-cambridge-igcse-economics', '6.2', [
      { n: 1, f: 'Globalisation', b: 'Growing integration and interdependence of the world\'s economies through trade, capital, labour, technology and information.', src: INTL },
      { n: 2, f: 'Multinational company (MNC)', b: 'A firm that owns or controls production in more than one country. The home country holds its headquarters; a host country is where it operates but is not based.', src: INTL },
      { n: 3, f: 'Benefits and costs of an MNC for a host country', b: 'Benefits: jobs, income, tax revenue, technology and skills, exports.\nCosts: profits sent abroad, local firms squeezed out, weak pay or environmental standards, it may leave.' },
      { n: 4, f: 'Tariff, import quota and embargo', b: 'Tariff: a tax on imported goods.\nImport quota: a limit on the quantity (or value) of a good that can be imported in a period.\nEmbargo: a ban on trade in a good or with a country.', src: PROT },
      { n: 5, f: 'Four reasons given for protection', b: 'Infant industry (time to grow and cut costs); declining industry (slow job losses); strategic industry (food, energy, defence); avoiding dumping (selling abroad below cost or below the home price).' },
      { n: 6, f: 'Consequences of protection', b: 'Home producers gain sales and jobs; the government gains tariff revenue. Consumers pay higher prices and have less choice; protected firms face less pressure to cut costs; trading partners may retaliate, hurting home exporters.' },
    ]),
    ...sub(T6, 'foreign-exchange-rates-cambridge-igcse-economics', '6.3', [
      { n: 1, f: 'Foreign exchange rate', b: 'How much of one currency buys a unit of another: the price of one currency in terms of the other.', src: FX },
      { n: 2, f: 'Appreciation vs depreciation', b: 'Appreciation: a rise in the value of a currency against another.\nDepreciation: a fall in its value against another.', src: FX },
      { n: 3, f: 'What determines a floating exchange rate?', b: 'Demand and supply in the foreign exchange market. Demand for the home currency comes from foreigners buying its exports and assets; supply comes from residents buying imports and foreign assets.' },
      { n: 4, f: 'What happens to a currency when the country\'s interest rates rise, or when it buys more imports?', b: 'Higher interest rates: foreign savers buy the currency (demand shifts right), so it appreciates.\nMore imports: residents sell the currency (supply shifts right), so it depreciates.' },
      { n: 5, f: 'A table costs 300 miras. The rate falls from 1 mira = 1.50 nubi to 1.20 nubi. What happens to its price in nubi?', b: 'Before: 300 × 1.50 = 450 nubi. After: 300 × 1.20 = 360 nubi, a fall of 20%. A depreciation makes exports cheaper abroad and imports dearer at home.' },
      { n: 6, f: 'Floating vs fixed exchange rate system', b: 'Floating: set by the market; self-correcting and needs no reserves, but uncertain and open to speculation.\nFixed: set and held by the government or central bank; gives traders certainty, but reserves can run out and interest rates are tied to defending the rate.' },
    ]),
    ...sub(T6, 'current-account-of-balance-of-payments-cambridge-igcse-economics', '6.4', [
      { n: 1, f: 'Current account of the balance of payments', b: 'The record of a country\'s trade in goods and services, primary income and secondary income with the rest of the world over a period.', src: BOP },
      { n: 2, f: 'Primary income vs secondary income', b: 'Primary income: income from assets and work abroad (profits, dividends, interest, wages of cross-border workers).\nSecondary income: transfers with nothing in return (remittances, aid, gifts).' },
      { n: 3, f: 'Goods −40, services +50, primary income −20, secondary income +20. Find the current account balance', b: 'Current account = −40 + 50 − 20 + 20 = +10, a surplus, even though there is a deficit on trade in goods.' },
      { n: 4, f: 'Four causes of a current account deficit', b: 'High spending on imports (fast income growth); uncompetitive exports (high costs, low quality); higher inflation than trading partners; an overvalued currency; recession among trading partners; a fall in the price of a main export.' },
      { n: 5, f: 'Consequences of a current account deficit', b: 'Lower net exports reduce demand, growth and jobs in export and import-competing firms; pressure on the currency to fall; the deficit must be financed by borrowing or selling assets, which brings interest payments later.' },
      { n: 6, f: 'Will a depreciation improve the current account?', b: 'It depends on price elasticity of demand. If demand for exports and imports is elastic, export earnings rise and import spending falls, so the balance improves. If both are inelastic, the import bill can rise and the balance may worsen.' },
    ]),
  ],
};
