/**
 * D-438 -- flashcards for OCR GCSE (9-1) Economics J205
 * (Version 2.0, June 2026, for first assessment in 2019).
 *
 * One block per subtopic, in specification order. Topics 3 and 4 itemise no
 * subtopics in syllabus-topics.ts, so their cards sit on the topic itself
 * (ids `<topic number>-<n>`, via topicOnly). Card ids are permanent (browser
 * progress is keyed by them): add a new card with the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs J205); origin 'revision-notes'.
 *
 * The specification is not tiered, so no card is marked upper tier. Worked
 * examples use the same invented figures as the Marlbridge J205 revision notes.
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

const INTRO = 'introduction-to-economics-ocr-gcse-economics';
const MKT = 'the-role-of-markets-and-money-ocr-gcse-economics';
const GOVT = 'economic-objectives-and-the-role-of-government-ocr-gcse-economics';
const INTL = 'international-trade-and-the-global-economy-ocr-gcse-economics';

const EG = 'ocr-gcse-economics-economic-groups-factors-of-production-scarcity-and-revision-notes';
const MSD = 'ocr-gcse-economics-markets-sectors-specialisation-and-demand-with-price-revision-notes';
const SUP = 'ocr-gcse-economics-supply-price-elasticity-of-supply-and-price-revision-notes';
const COMP = 'ocr-gcse-economics-competition-monopoly-and-oligopoly-production-costs-revision-notes';
const LABM = 'ocr-gcse-economics-the-labour-market-and-wages-gross-and-net-pay-money-revision-notes';
const DIST = 'ocr-gcse-economics-distribution-of-income-and-wealth-inflation-and-price-revision-notes';
const GROW = 'ocr-gcse-economics-economic-growth-gdp-and-unemployment-revision-notes';
const FISC = 'ocr-gcse-economics-fiscal-policy-government-budgets-and-monetary-policy-revision-notes';
const SSP = 'ocr-gcse-economics-supply-side-policies-and-the-limitations-of-markets-revision-notes';
const EXGL = 'ocr-gcse-economics-exchange-rates-globalisation-and-measuring-development-revision-notes';
const TRADE = 'ocr-gcse-economics-why-countries-trade-free-trade-agreements-and-the-revision-notes';

export const DECK_OCR_GCSE_ECONOMICS: FlashcardDeck = {
  boardSlug: 'ocr',
  qualificationSlug: 'gcse',
  subjectSlug: 'economics',
  syllabusCode: 'J205',
  syllabusSeries: 'Version 2.0 (June 2026), for first assessment in 2019',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // 1 Introduction to economics
    ...sub(INTRO, 'main-economic-groups-and-factors-of-production-ocr-gcse-economics', '1.1', [
      { n: 1, f: 'Consumer, producer and government: the role of each economic group', b: 'Consumers buy goods and services to meet wants (and supply labour). Producers make goods or provide services using factors of production. Government taxes, spends, regulates and provides public services.', src: EG },
      { n: 2, f: 'Explain how consumers, producers and government are interdependent', b: 'Households supply labour; firms pay wages; households spend on firms\' output; both pay tax; government spends on services both use. Each group both gives to and receives from the others: a two-way flow.' },
      { n: 3, f: 'A higher tax on businesses: trace the knock-on effects through the economic groups', b: 'Lower profit → less investment and fewer jobs → lower household spending → lower sales and lower tax receipts. Evaluate: it depends on how long it lasts and what the tax funds.' },
      { n: 4, f: 'Land and labour, with their rewards', b: 'Land: natural resources, and space (reward: rent).\nLabour: people\'s physical and mental work (reward: wages).', src: EG },
      { n: 5, f: 'Capital and enterprise, with their rewards', b: 'Capital: man-made equipment used to produce (reward: interest).\nEnterprise: organising factors and taking risks (reward: profit).', src: EG },
      { n: 6, f: 'A bakery rents a shop unit, hires two staff, buys an oven and is run by an owner who takes the risk. Classify each factor.', b: 'Shop unit: land (rent). Staff: labour (wages). Oven: capital (interest), a man-made resource, not money. Owner: enterprise (profit).' },
      { n: 7, f: 'Labour-intensive and capital-intensive production', b: 'Labour-intensive: uses a high proportion of labour.\nCapital-intensive: uses a high proportion of machinery and equipment.', src: EG },
      { n: 8, f: '8 workers make 400 units. After buying a machine, 6 workers make 720. What happens to output per worker?', b: 'Before: 400 ÷ 8 = 50 units each. After: 720 ÷ 6 = 120 each. Then compare cost per unit and comment on jobs, risk and demand.' },
      { n: 9, f: 'What does the choice between labour-intensive and capital-intensive methods depend on?', b: 'The relative prices of the factors, the type of product, the scale of production, the skills available and the level of demand.' },
    ]),
    ...sub(INTRO, 'the-basic-economic-problem-ocr-gcse-economics', '1.2', [
      { n: 1, f: 'Scarcity', b: 'Resources are limited relative to wants.', src: EG },
      { n: 2, f: 'Unlimited wants', b: 'People always want more; satisfying one want creates others.', src: EG },
      { n: 3, f: 'Opportunity cost', b: 'The gain from the best use you passed up: the next best alternative, not the total of all alternatives.', src: EG },
      { n: 4, f: 'Scarcity versus shortage', b: 'Scarcity is permanent and applies to every economy. A shortage is temporary and affects one product.' },
      { n: 5, f: 'The four questions of the basic economic problem', b: 'Allocation: how to share limited resources between uses, and who decides.\nWhat to produce.\nHow to produce (labour- or capital-intensive).\nFor whom (who receives the output).' },
      { n: 6, f: 'A hairdresser has 480 minutes a day. A haircut takes 30 minutes and a colouring 120. What is the opportunity cost of one colouring?', b: '120 ÷ 30 = 4 haircuts. A full day gives either 16 haircuts or 4 colourings.' },
      { n: 7, f: 'A student gives up a 6-hour shift at £9 an hour for a trip. If the shift was her best alternative, what is the opportunity cost?', b: '6 × £9 = £54 of earnings given up.' },
      { n: 8, f: 'Economic, social and environmental sustainability: the question to ask for each', b: 'Economic: can it keep generating income and jobs?\nSocial: does it support well-being and fairness over time?\nEnvironmental: does it protect natural resources?' },
      { n: 9, f: 'A framework for evaluating an economic choice', b: 'List money and non-money costs and benefits; group them as economic, social and environmental; say who gains and who loses; compare size and timing (short against long term); reach a judgement and say what it depends on.' },
      { n: 10, f: 'Why does every economic group face scarcity?', b: 'Consumers have limited income and time, producers have limited factors, and the government has limited tax revenue. So each group must choose, and each choice has an opportunity cost.' },
    ]),

    // 2 The role of markets and money
    ...sub(MKT, 'the-role-of-markets-ocr-gcse-economics', '2.1', [
      { n: 1, f: 'Market', b: 'Wherever buyers meet sellers to swap goods, services or resources for payment.', src: MSD },
      { n: 2, f: 'Primary, secondary and tertiary sectors', b: 'Primary: extracts or grows natural resources.\nSecondary: manufactures and builds.\nTertiary: provides services.', src: MSD },
      { n: 3, f: 'Factor market and product market', b: 'Factor market: where land, labour, capital and enterprise are bought and sold.\nProduct market: where completed goods and services change hands.', src: MSD },
      { n: 4, f: 'How are factor markets and product markets linked?', b: 'Households sell labour in the factor market and earn wages, which they spend in product markets. Firms sell output there and use the receipts to buy factors. A fall in product demand leads to a fall in demand for factors.' },
      { n: 5, f: 'Good versus service', b: 'A good is a physical, storable item. A service is an intangible activity, produced and consumed together.' },
      { n: 6, f: 'What usually happens to the tertiary sector as an economy develops?', b: 'Its share of jobs usually rises. Example: tertiary jobs rising from 4.5 million to 8.4 million is (8.4 − 4.5) ÷ 4.5 × 100 = +86.7%.' },
      { n: 7, f: 'Specialisation', b: 'Focusing a worker, firm, region or country on a narrow set of jobs or products.', src: MSD },
      { n: 8, f: 'Five potters each make 6 mugs a day alone. With separate stages the team makes 42. Daily wages are £300. Find the change in cost per mug.', b: 'Output rises from 30 to 42, +40%. Cost per mug falls from £300 ÷ 30 = £10.00 to £300 ÷ 42 = £7.14, about −28.6%.' },
      { n: 9, f: 'Specialisation: one benefit and one risk for workers, regions and countries', b: 'Workers: skill and higher pay, but boredom and narrow skills.\nRegions: skills and suppliers gather, but one industry\'s decline hits the whole area.\nCountries: more output and choice through trade, but import dependence and exposure to world prices.' },
      { n: 10, f: 'Why does specialisation require exchange?', b: 'Specialists make more of a few things than they need, so they must trade the surplus for everything else. Exchange lets everyone enjoy a wider range than they could make themselves.' },
    ]),
    ...sub(MKT, 'demand-ocr-gcse-economics', '2.2', [
      { n: 1, f: 'Demand', b: 'How much buyers will purchase, and can afford, at each price over a stated period.', src: MSD },
      { n: 2, f: 'Market demand, and how to build a market demand schedule', b: 'Every buyer\'s quantity added together at each price. List the prices in order, add every individual\'s quantity at each price, then plot price (vertical) against quantity (horizontal).', src: MSD },
      { n: 3, f: 'Extension/contraction versus increase/decrease in demand', b: 'Extension or contraction: a movement down or up the curve because the good\'s own price changed.\nIncrease or decrease: a shift right or left caused by a non-price factor.', src: MSD },
      { n: 4, f: 'Which way does demand shift when: income rises (normal good), income rises (inferior good), a substitute gets dearer, a complement gets dearer?', b: 'Normal good: right.\nInferior good: left.\nSubstitute dearer: right.\nComplement dearer: left.' },
      { n: 5, f: 'Research links a food to health benefits. Shift or movement?', b: 'A shift right: a change in tastes, a non-price factor, so more is demanded at every price. A fall in the food\'s own price would instead be a movement along the curve.' },
      { n: 6, f: 'Price elasticity of demand (PED): formula. Price rises from £50 to £55 and quantity falls from 2,000 to 1,700. Find PED.', b: 'PED = % change in quantity demanded ÷ % change in price.\nPrice +10%, quantity −15%: PED = −15 ÷ 10 = −1.5, elastic. Revenue falls from £100,000 to £93,500.' },
      { n: 7, f: 'Perfectly inelastic, inelastic, unitary, elastic and perfectly elastic demand: PED size and curve shape', b: 'Perfectly inelastic: 0, vertical.\nInelastic: 0 to 1, steep.\nUnitary: 1.\nElastic: over 1, shallow.\nPerfectly elastic: infinity, horizontal.' },
      { n: 8, f: 'Determinants of PED', b: 'Availability of substitutes, whether a necessity or luxury, the share of income spent, time, habit, and how narrowly the good is defined.' },
      { n: 9, f: 'Why is a price cut on an elastic good not always a good idea?', b: 'Quantity rises by a larger percentage than price falls, so revenue rises. But extra output costs more to make, so profit may not rise, and rivals may cut prices too. PED is an estimate that changes over time.' },
      { n: 10, f: 'Slope versus elasticity', b: 'Slope is steepness. Elasticity is a percentage comparison, and it varies along a straight-line demand curve. Calculate PED rather than judging by the look of the curve.' },
    ]),
    ...sub(MKT, 'supply-ocr-gcse-economics', '2.3', [
      { n: 1, f: 'Supply', b: 'What producers will offer for sale at each price over a set time, if they are both willing and able.', src: SUP },
      { n: 2, f: 'Law of supply', b: 'Higher price, larger quantity supplied (other things equal).', src: SUP },
      { n: 3, f: 'Market supply', b: 'Sum of all producers\' quantities at each price. Example: stalls supplying 24 and 20 jars at £5 give a market supply of 44 at £5.', src: SUP },
      { n: 4, f: 'Which way does the supply curve shift when: costs rise, technology improves, a tax on production is added, a subsidy is given, producers leave?', b: 'Costs rise: left.\nBetter technology: right.\nTax on production: left.\nSubsidy: right.\nFewer producers: left.\nA change in the good\'s own price is a movement along S.' },
      { n: 5, f: 'Price elasticity of supply (PES): formula. Price rises from £8 to £10 and quantity from 320 to 416. Find PES.', b: 'PES = % change in quantity supplied ÷ % change in price.\nPrice +25%, quantity +30%: PES = 30 ÷ 25 = 1.2, elastic.' },
      { n: 6, f: 'PES shapes: perfectly inelastic, inelastic, unit elastic and elastic straight-line supply curves', b: 'Perfectly inelastic (0): vertical.\nInelastic: a line that meets the quantity axis.\nUnit elastic (1): a straight line through the origin.\nElastic: a line that meets the price axis.\nPerfectly elastic: horizontal.' },
      { n: 7, f: 'Determinants of PES', b: 'Spare capacity, stocks, time, factor mobility, length of the production period, perishability and ease of entering the market.' },
      { n: 8, f: 'Why does PES matter to consumers?', b: 'Inelastic supply makes prices jump when demand rises or supply is hit. Elastic supply keeps prices steadier, because output can expand quickly.' },
      { n: 9, f: 'Consequences of a decrease in supply for consumers and producers', b: 'Price rises and quantity falls. Consumers pay more and buy less. Producers sell fewer units at a higher price, so their revenue may fall if demand is elastic.' },
    ]),
    ...sub(MKT, 'price-ocr-gcse-economics', '2.4', [
      { n: 1, f: 'The three jobs the price mechanism does', b: 'Signal: tells producers and consumers where demand is high or low.\nIncentive: rewards producers who supply more and consumers who buy less when price is high.\nRationing: decides who gets scarce goods: those willing and able to pay.' },
      { n: 2, f: 'Equilibrium price', b: 'The price at which quantity demanded equals quantity supplied, where the demand and supply curves cross and the market clears.' },
      { n: 3, f: 'Marmalade: at £7 demand and supply are both 60. At £5 demand is 90 and supply 24. At £9 demand is 30 and supply 96. What happens at £5 and £9?', b: 'At £5: excess demand of 66, so the price rises.\nAt £9: excess supply of 66, so the price falls.\nEquilibrium: £7 and 60 jars.' },
      { n: 4, f: 'In the marmalade market supply rises by 33 at every price, so at £6 demand and supply are both 75. Describe the change.', b: 'Supply shifts right; new equilibrium £6 and 75 jars. Price −14.3%, quantity +25%. Revenue rises from £420 to £450.' },
      { n: 5, f: 'Effect on equilibrium price and quantity of each shift: D right, D left, S right, S left', b: 'D right: price up, quantity up.\nD left: price down, quantity down.\nS right: price down, quantity up.\nS left: price up, quantity down.' },
      { n: 6, f: 'Input costs rise. Trace the effect on the market.', b: 'Less is worth supplying at each price, so supply shifts left. At the old price demand exceeds supply, so price rises, contracting demand and extending supply until they match. Consumers pay more and buy less.' },
      { n: 7, f: 'Demand rises and supply is inelastic (full capacity or a growing season). What happens?', b: 'Price rises sharply while quantity rises little. Consumers lose and existing producers gain revenue. Over time supply becomes more elastic and new firms may enter, so the price effect shrinks.' },
      { n: 8, f: 'Price and an efficient distribution of resources: is the outcome always fair?', b: 'Resources move to the uses where consumers show most demand, which is efficient. But price reflects ability to pay as well as need, so an outcome can be efficient but not fair.' },
      { n: 9, f: 'Limits of markets in deciding what is produced and for whom', b: 'Markets may under-provide goods people need but cannot afford, and some effects of production and consumption fall on third parties.' },
    ]),
    ...sub(MKT, 'competition-ocr-gcse-economics', '2.5', [
      { n: 1, f: 'Competition', b: 'Rivalry between producers selling to the same customers.', src: COMP },
      { n: 2, f: 'Market share', b: 'The part of all the market\'s sales that one firm wins, as a percentage. A firm with 30% of a £1,200m market has sales of £360m.', src: COMP },
      { n: 3, f: 'Barrier to entry', b: 'Anything that makes it hard for new firms to enter (high start-up cost, patents, strong brands).', src: COMP },
      { n: 4, f: 'Monopoly and oligopoly', b: 'Monopoly: one producer, or one so dominant it faces little rivalry.\nOligopoly: a handful of big, interdependent firms that make most of the sales.', src: COMP },
      { n: 5, f: 'Why do firms compete, and how?', b: 'For profit, market share, survival and growth. They compete on price, and through non-price methods: quality, design, service and advertising.' },
      { n: 6, f: 'New firms enter a market. Analyse the effect on price.', b: 'Supply increases, shifting right. At the old price there is a surplus, so price falls until the market clears. New equilibrium: lower price, higher quantity. Consumers gain; existing producers face lower margins.' },
      { n: 7, f: 'Competitive market, oligopoly and monopoly: firms, entry, price and choice', b: 'Competitive: many firms, easy entry, market price, wide choice.\nOligopoly: few large firms, hard entry, watch rivals\' prices, limited choice.\nMonopoly: one firm, very hard entry, most control over price, little choice.' },
      { n: 8, f: 'Why do oligopolists often avoid price wars?', b: 'Interdependence: one firm\'s decision affects its rivals, so a price cut can be matched, leaving every firm with lower profit. They compete on quality, branding and advertising instead.' },
      { n: 9, f: 'Is a monopoly price always higher than a competitive one?', b: 'Not certainly. Barriers protect profit, so rivals cannot force price down, but a large firm may have lower average cost from economies of scale and could pass some of it on.' },
      { n: 10, f: 'Evaluate competition for consumers and producers', b: 'Consumers: lower prices, wider choice and better quality, most when switching is easy. Producers: margins shrink and weak firms exit, but efficient firms innovate and gain share. Risk: if many rivals fail, survivors may later raise prices.' },
    ]),
    ...sub(MKT, 'production-ocr-gcse-economics', '2.6', [
      { n: 1, f: 'Production and productivity', b: 'Production: the total amount of goods and services produced.\nProductivity: how much each worker, hour or machine contributes, e.g. output per worker.', src: COMP },
      { n: 2, f: 'A workshop makes 90 items in a 6-hour shift; after training it makes 108 in the same time. Find the change in productivity.', b: '90 ÷ 6 = 15 an hour, then 108 ÷ 6 = 18 an hour. Productivity rises (18 − 15) ÷ 15 × 100 = 20%.' },
      { n: 3, f: 'Who produces in an economy?', b: 'Individuals (the self-employed and workers), firms (the main producers, aiming for profit) and the government (which provides some services and sets rules, taxes and subsidies).' },
      { n: 4, f: 'Formulas: total cost, average cost, total revenue, average revenue, profit and loss', b: 'TC = variable cost + fixed cost. AC = TC ÷ output.\nTR = price × quantity. AR = TR ÷ quantity (equals price).\nProfit = TR − TC. Loss = TC − TR.' },
      { n: 5, f: 'Fixed cost £1,500 a week, variable cost £4 a repair, price £11. Find the profit or loss at 150 and at 400 repairs.', b: '150: TC = 1,500 + 600 = £2,100; TR = £1,650; loss £450.\n400: TC = 1,500 + 1,600 = £3,100 (AC £7.75); TR = £4,400; profit £1,300. AC falls because the fixed cost is shared across more repairs.' },
      { n: 6, f: 'How do profit and costs affect supply?', b: 'Higher price with costs unchanged: profit rises and firms supply more (a movement along the curve). Higher costs: profit falls and supply shifts left. Lower costs (technology, subsidy): supply shifts right. Profit attracts entry; losses push firms to cut costs or leave.' },
      { n: 7, f: 'Economies of scale', b: 'Fall in average cost as a firm increases its scale of production. Total cost still rises; only cost per unit falls.', src: COMP },
      { n: 8, f: 'Six types of economies of scale', b: 'Technical (large machines, specialist workers), purchasing (bulk-buying discounts), financial (cheaper borrowing), managerial (specialist managers), marketing (advertising cost shared by more units) and risk-bearing (a wide product range spreads risk).' },
      { n: 9, f: 'A cafe chain pays £12 a kg for coffee in small orders and £10.50 in bulk. Name the economy and the percentage saving.', b: 'A purchasing economy of scale: (10.50 − 12) ÷ 12 × 100 = −12.5%. Lower average cost lets the firm cut price or raise its margin, and may deter entry.' },
      { n: 10, f: 'Why do production and productivity matter, and what are the limits?', b: 'For the economy: more output, jobs, incomes, tax revenue and exports. For firms: lower cost per unit and price competitiveness. Limits: extra output may only reflect extra workers, automation can cost jobs, and growth can damage the environment.' },
    ]),
    ...sub(MKT, 'the-labour-market-ocr-gcse-economics', '2.7', [
      { n: 1, f: 'Labour market', b: 'Where workers sell their work and employers buy it.', src: LABM },
      { n: 2, f: 'Derived demand', b: 'Demand for a worker that follows from customers wanting what the worker helps to produce.', src: LABM },
      { n: 3, f: 'Shortage and surplus of labour', b: 'Shortage: demand for workers exceeds supply, which pulls the wage up.\nSurplus: supply of workers exceeds demand, which pushes the wage down.', src: LABM },
      { n: 4, f: 'What shifts the demand for labour?', b: 'Changes in demand for the product, in worker productivity, and in the cost or capability of machinery. A change in the wage itself is a movement along the curve.' },
      { n: 5, f: 'What shifts the supply of labour?', b: 'Changes in the skills, qualifications or training needed, the size of the working-age population (including migration), pay in similar jobs, and working conditions or non-wage benefits.' },
      { n: 6, f: 'At £8 an hour 50 workers are demanded and supplied. Supply rises by 40 at every wage, so at £7 demand and supply are both 70. Describe the change.', b: 'Supply shifts right. New equilibrium: £7 with 70 workers. Wage falls 1 ÷ 8 = 12.5%; employment rises 20 ÷ 50 = 40%.' },
      { n: 7, f: 'Why do some jobs pay more than others?', b: 'High wages go with scarce skills, long training and high-value work (low supply, high demand). Low wages go with plentiful workers and easy entry.' },
      { n: 8, f: 'Gross pay and net pay', b: 'Gross pay: pay before any deduction.\nNet pay: gross pay minus income tax, national insurance and pension contributions. Income tax and NI go to government; the pension goes into the worker\'s retirement saving.' },
      { n: 9, f: 'Gross pay is £2,400 a month. Income tax £280, national insurance £190, pension £120. Find net pay.', b: 'Deductions: 280 + 190 + 120 = £590. Net pay = 2,400 − 590 = £1,810.' },
      { n: 10, f: '£9.80 an hour for 30 hours. Tax 20% above £150 a week, NI 8% above £120, pension 3% of gross. Find net pay.', b: 'Gross £294.00. Tax (294 − 150) × 0.20 = £28.80. NI (294 − 120) × 0.08 = £13.92. Pension £8.82. Deductions £51.54, so net pay = £242.46.' },
    ]),
    ...sub(MKT, 'the-role-of-money-and-financial-markets-ocr-gcse-economics', '2.8', [
      { n: 1, f: 'Money and the problem it solves', b: 'Money is anything generally accepted in payment. As a medium of exchange it avoids the double coincidence of wants that barter needs, speeds up trade, supports specialisation and makes prices comparable.' },
      { n: 2, f: 'Double coincidence of wants', b: 'In barter, each party must want exactly what the other offers. This rarely happens, which is why money is used.' },
      { n: 3, f: 'Banks, building societies and insurance companies: the role of each', b: 'Banks: deposits, loans, accounts and payments.\nBuilding societies: owned by members; savings and mortgages.\nInsurance companies: collect premiums from many and pay the few who claim, sharing risk.' },
      { n: 4, f: 'Interest rate rises: effect on saving, borrowing and investment', b: 'Saving rises (higher reward), borrowing falls (higher cost), and investment falls because fewer projects beat the cost of the loan. A fall does the reverse.' },
      { n: 5, f: 'A saver has £2,000. The rate rises from 3% to 4%. A borrower has a £9,000 loan; the rate rises from 8% to 10%. Find each change.', b: 'Saver: £60 → £80, a gain of £20 a year.\nBorrower: £720 → £900, an extra £180 a year, or £15 a month. The same rate rise helps savers and hurts borrowers.' },
      { n: 6, f: 'Compound interest formula', b: 'Balance = amount × (1 + rate)^years. Multiply by (1 + rate) once for each year. Simple interest for one year is just amount × rate.' },
      { n: 7, f: 'A firm considers a project. How does it use the interest rate to decide?', b: 'Return = extra profit ÷ cost of the project × 100. Invest only if the return is above the interest rate on the loan. A higher rate means fewer projects pass the test.' },
      { n: 8, f: 'Why does the financial sector matter to consumers, producers and government?', b: 'Consumers: safe saving, credit, mortgages, cover for loss (but debt can become unaffordable).\nProducers: loans to invest and payments.\nGovernment: can borrow, and the sector carries interest rate changes through the economy.' },
      { n: 9, f: 'Exam trap: is the financial sector just a place to store money?', b: 'No. It enables saving, borrowing and investment, shares risk through insurance, runs the payments system, and transmits interest rate changes through the economy.' },
      { n: 10, f: 'Insurance versus saving', b: 'Insurance pays out only if a loss happens; savings are yours to withdraw. A bank and a building society both take deposits and lend, but a building society is owned by its members.' },
    ]),

    // 3 Economic objectives and the role of government (no itemised subtopics)
    ...topicOnly(GOVT, '3', [
      { n: 1, f: 'Economic growth and GDP', b: 'Economic growth: a rise in an economy\'s production over time, shown by a rise in real GDP.\nGDP: the money value of all final output made inside a country\'s borders in a set period, usually a year.', src: GROW },
      { n: 2, f: 'GDP rises from 2,000 to 2,090 billion while population rises from 40 to 41.2 million. Find growth and the change in GDP per capita.', b: 'Growth = 90 ÷ 2,000 × 100 = 4.5%.\nGDP per capita: 50,000 → 50,728, a rise of only about 1.5%, because population grew 3%.' },
      { n: 3, f: 'Unemployment, labour force and the unemployment rate', b: 'Unemployment: having no job but being available for and looking for work. Labour force = employed + unemployed. Rate = unemployed ÷ labour force × 100: 1.2 million out of 20.0 million is 6.0%.' },
      { n: 4, f: 'Four types of unemployment, each with its cause', b: 'Cyclical: weak total demand in a downturn.\nFrictional: moving between jobs.\nSeasonal: time-of-year demand.\nStructural: skills or location mismatch, often after an industry declines (often long-lasting).' },
      { n: 5, f: 'Claimant Count: one strength and one limit', b: 'It counts people claiming unemployment-related benefits. It is quick and available by area, but it misses people who do not claim and changes when benefit rules change.' },
      { n: 6, f: 'Income versus wealth', b: 'Income is money received over a period (a flow). Wealth is the value of assets owned less liabilities owed, at a moment (a stock).', src: DIST },
      { n: 7, f: 'Inflation, deflation and the CPI', b: 'Inflation: a continuing rise in the average level of prices. Deflation: a sustained fall in it. CPI: a weighted index of a typical household\'s spending. Falling inflation means prices rise more slowly, not that they fall.', src: DIST },
      { n: 8, f: 'Pay rises from £2,500 to £2,650 while the price index rises from 100 to 112. What happens to real pay?', b: 'Real pay = 2,650 ÷ 112 × 100 = £2,366, a real fall of about 5.4% against £2,500. Nominal pay rose 6%, but real pay fell.' },
      { n: 9, f: 'Demand-pull, cost-push and imported inflation', b: 'Demand-pull: spending grows faster than output.\nCost-push: higher wages, raw materials, energy or indirect taxes passed on in prices.\nImported: a weaker currency makes imports dearer.' },
      { n: 10, f: 'Fiscal policy versus monetary policy', b: 'Fiscal: the government changes its spending and taxes. Monetary: the central bank (the Bank of England in the UK) uses interest rates. Fiscal acts on disposable income and public services; monetary acts on the cost of borrowing and reward for saving.' },
      { n: 11, f: 'Supply side policy, with examples', b: 'Government action to raise the economy\'s productive capacity: education and training, infrastructure, support for research, lower taxes on work or profits, less red tape and more competition. It suits long-run goals but works too slowly alone for a short-run problem.', src: SSP },
      { n: 12, f: 'Negative and positive externalities: market output and the usual policy fix', b: 'Negative (pollution, congestion): market output too high; tax, regulation or information.\nPositive (education, vaccination): market output too low; subsidy, state provision or information. Markets ignore effects on third parties.' },
    ]),

    // 4 International trade and the global economy (no itemised subtopics)
    ...topicOnly(INTL, '4', [
      { n: 1, f: 'Why do countries import and export?', b: 'Import: resources lacking at home, lower prices, variety and inputs for firms.\nExport: a larger market, specialisation, and foreign currency to pay for imports.' },
      { n: 2, f: 'Tariff and quota', b: 'Tariff: a tax on imports.\nQuota: a limit on the quantity of an import.', src: TRADE },
      { n: 3, f: 'Free trade agreement, customs union and single market', b: 'Free trade agreement: a deal to remove or cut barriers between members.\nCustoms union: members share a common tariff on imports from outside.\nSingle market: goods, services, capital and people move freely between members.', src: TRADE },
      { n: 4, f: 'The four parts of the current account, with an example credit for each', b: 'Goods: selling machinery abroad.\nServices: a foreign tourist spending in the country.\nPrimary income: profits sent home by an overseas branch.\nSecondary income: money sent home by workers abroad.\nBalance = total credits − total debits.' },
      { n: 5, f: 'Credits: goods 150, services 60, primary 18, secondary 5. Debits: 175, 40, 10, 16. Find the current account balance.', b: 'Credits 233, debits 241, so the balance is −8: a current account deficit of 8 billion.' },
      { n: 6, f: 'A 25% tariff is charged on an import with a pre-tax price of 48. By what percentage does the price fall if the tariff is removed?', b: 'Shelf price with tariff: 48 × 1.25 = 60. Removing it cuts the price by 12 ÷ 60 × 100 = 20% (divide by the old price).' },
      { n: 7, f: 'Appreciation and depreciation', b: 'Appreciation: the currency buys more foreign currency.\nDepreciation: the currency buys less foreign currency.', src: EXGL },
      { n: 8, f: 'At £1 = €1.30, what does a €300 bill cost in pounds? What if the pound falls to €1.20?', b: 'Divide by the rate: 300 ÷ 1.30 = £230.77; at 1.20 it is 300 ÷ 1.20 = £250.00. Pounds to euros: multiply. A weaker pound makes foreign goods and holidays dearer.' },
      { n: 9, f: 'Exchange rate diagram: what happens when interest rates rise relative to other countries?', b: 'Vertical axis: exchange rate (e.g. euros per pound); horizontal: quantity of pounds. Foreign savers want more pounds, so demand for pounds shifts right and the pound appreciates. More imports would shift supply right, causing depreciation.' },
      { n: 10, f: 'Effects of a depreciation on exports, imports and firms', b: 'Exports become cheaper abroad, so more are sold (more if demand is elastic). Imports and holidays abroad become dearer. Firms using imported inputs face higher costs, which reduces the gain.' },
      { n: 11, f: 'Globalisation and its driving factors', b: 'The growing integration of economies through trade, capital, people, information and ideas. Drivers: falling transport costs, communications technology, trade agreements, multinational companies, rising incomes and freer movement of capital.' },
      { n: 12, f: 'Measures of development, and why GDP per capita alone is limited', b: 'GDP per capita, life expectancy, access to health care, technology (internet users) and education (schooling, literacy). GDP per capita hides inequality and non-market activity; composite measures such as the Human Development Index combine income, health and education.' },
    ]),
  ],
};
