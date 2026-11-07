/**
 * D-444 -- flashcards for Pearson Edexcel International GCSE Economics 4EC1
 * (specification Issue 3, February 2026).
 *
 * One block per subtopic, in specification order. Topic numbers are the
 * specification's own headings (1.1, 1.2, 2.1, 2.2), so card ids are
 * `<subtopic number>-<n>`, e.g. '1.1.3-2'. Ids are permanent (browser progress
 * is keyed by them): add a new card with the next unused n, never renumber.
 *
 *   The specification is not tiered, so no card is marked upper tier.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 4EC1, or from the page's own
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

const MKT = 'the-market-system-edexcel-igcse-economics';
const BUS = 'business-economics-edexcel-igcse-economics';
const GOV = 'government-and-the-economy-edexcel-igcse-economics';
const GLO = 'the-global-economy-edexcel-igcse-economics';

const ECP = 'edexcel-igcse-economics-scarcity-opportunity-cost-the-ppf-and-economic-revision-notes';
const DSE = 'edexcel-igcse-economics-demand-supply-and-market-equilibrium-revision-notes';
const ELA = 'edexcel-igcse-economics-price-supply-and-income-elasticity-calculation-and-use-revision-notes';
const MIXE = 'edexcel-igcse-economics-the-mixed-economy-public-goods-privatisation-and-revision-notes';
const FOP = 'edexcel-igcse-economics-factors-of-production-sectors-productivity-and-revision-notes';
const CRP = 'edexcel-igcse-economics-costs-revenue-profit-economies-and-diseconomies-of-revision-notes';
const LAB = 'edexcel-igcse-economics-the-labour-market-and-government-intervention-in-revision-notes';
const GROW = 'edexcel-igcse-economics-economic-growth-gdp-and-the-economic-cycle-revision-notes';
const UNEM = 'edexcel-igcse-economics-unemployment-and-its-consequences-revision-notes';
const INFL = 'edexcel-igcse-economics-inflation-deflation-and-the-cpi-revision-notes';
const BOP = 'edexcel-igcse-economics-the-current-account-of-the-balance-of-payments-revision-notes';
const ENV = 'edexcel-igcse-economics-environmental-protection-and-redistribution-of-income-revision-notes';
const FISC = 'edexcel-igcse-economics-fiscal-policy-taxes-spending-deficits-and-surpluses-revision-notes';
const MONP = 'edexcel-igcse-economics-monetary-policy-and-government-controls-revision-notes';
const SSP = 'edexcel-igcse-economics-supply-side-policy-and-trade-offs-between-objectives-revision-notes';
const GLOB = 'edexcel-igcse-economics-globalisation-multinationals-and-foreign-direct-revision-notes';
const FREE = 'edexcel-igcse-economics-free-trade-protectionism-and-tariff-quota-and-subsidy-revision-notes';
const BLOC = 'edexcel-igcse-economics-trading-blocs-the-wto-and-trade-patterns-revision-notes';
const FX = 'edexcel-igcse-economics-exchange-rates-determination-appreciation-and-revision-notes';

export const DECK_EDEXCEL_IGCSE_ECONOMICS: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'igcse',
  subjectSlug: 'economics',
  syllabusCode: '4EC1',
  syllabusSeries: 'Issue 3, February 2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'salman-ahmad', reviewedOn: '2026-11-05' },
  cards: [
    // 1.1 The market system
    ...sub(MKT, 'the-economic-problem-edexcel-igcse-economics', '1.1.1', [
      { n: 1, f: 'Scarcity', b: 'Wants are unlimited but resources are finite, so choices must be made. It affects rich and poor countries alike.', src: ECP },
      { n: 2, f: 'Opportunity cost', b: 'The value of the best alternative sacrificed by making a choice. It is one item: the next best option, not all the options given up, and not the price paid.', src: ECP },
      { n: 3, f: 'A farm can spend 12,000 on a tractor (adds 1,800 a year) or irrigation (adds 1,200 a year). It buys the tractor. What is the opportunity cost?', b: 'The 1,200 a year the irrigation would have earned, the next best project. (Returns: tractor 1,800 ÷ 12,000 = 15%; irrigation 1,200 ÷ 12,000 = 10%.)' },
      { n: 4, f: 'Production possibility frontier (PPF)', b: 'A curve showing the most of one good an economy can make for each level of the other good, with all resources in use.', src: ECP },
      { n: 5, f: 'What does a point on, inside and outside a PPF show?', b: 'On: maximum productive potential, resources fully employed.\nInside: possible, but resources unemployed or underused.\nOutside: unobtainable with present resources.' },
      { n: 6, f: 'Why does a PPF bow outwards, and what shifts it?', b: 'Bows out: the opportunity cost of each extra unit of one good rises (a straight line means constant opportunity cost).\nOutward shift (growth): more or better land, labour or capital, investment, better technology.\nInward shift: war, natural disaster, depleted resources, loss of skills.' },
    ]),
    ...sub(MKT, 'economic-assumptions-edexcel-igcse-economics', '1.1.2', [
      { n: 1, f: 'The two economic assumptions about consumers and producers', b: 'Consumers aim to maximise their benefit (the greatest satisfaction from spending).\nBusinesses aim to maximise their profit (the greatest gap between revenue and cost).', src: ECP },
      { n: 2, f: 'Why might consumers not maximise their benefit?', b: 'Poor calculation of benefits and costs (such as ignoring unit prices); habits that are hard to give up; copying others, such as friends or influencers.' },
      { n: 3, f: 'Why might producers not maximise profit?', b: 'Managers may maximise revenue or sales instead; the firm may care for customers (fair prices, free support); it may do charitable work.' },
      { n: 4, f: 'Output 6: revenue 180, cost 120. Output 8: revenue 200, cost 190. Which output maximises profit and which maximises revenue?', b: 'Profit at 6 = 180 − 120 = 60; at 8 = 200 − 190 = 10.\nProfit is maximised at 6; revenue is maximised at 8. A sales-maximising manager choosing 8 gives up 50 of profit.' },
    ]),
    ...sub(MKT, 'demand-supply-and-market-equilibrium-edexcel-igcse-economics', '1.1.3', [
      { n: 1, f: 'Demand and supply', b: 'Demand: how much buyers will purchase, being willing and able to pay, at each possible price over a stated period.\nSupply: how much firms will offer for sale at each possible price over a stated period.', src: DSE },
      { n: 2, f: 'Movement along vs shift of a demand or supply curve', b: 'Movement along: caused by a change in the price of the good itself ("quantity demanded" or "quantity supplied" changes).\nShift: caused by any other factor; right is an increase, left a decrease.' },
      { n: 3, f: 'Factors that shift the demand curve', b: 'Advertising; income (normal goods rise with income, inferior goods fall); fashion and tastes; price of substitutes (dearer substitute → demand rises); price of complements (dearer complement → demand falls); demographic changes.' },
      { n: 4, f: 'Factors that shift the supply curve', b: 'Costs of production; technology; indirect taxes (supply shifts up and left); subsidies (supply shifts down and right); natural factors such as weather, harvests, disease.' },
      { n: 5, f: 'Excess demand and excess supply', b: 'Excess demand: buyers want more than sellers offer; the price is below equilibrium.\nExcess supply: sellers offer more than buyers want; the price is above equilibrium.', src: DSE },
      { n: 6, f: 'How do market forces remove excess supply?', b: 'Stock is left unsold, so sellers lower prices. Quantity demanded extends and quantity supplied contracts until the two are equal and the price stops falling at equilibrium.' },
      { n: 7, f: 'Demand increases and supply decreases at the same time. What happens to price and quantity?', b: 'Price certainly rises. The effect on quantity is unclear: it depends on which shift is bigger.' },
    ]),
    ...sub(MKT, 'elasticity-edexcel-igcse-economics', '1.1.4', [
      { n: 1, f: 'PED, PES and YED formulas', b: 'PED = % change in quantity demanded ÷ % change in price (usually negative).\nPES = % change in quantity supplied ÷ % change in price (usually positive).\nYED = % change in quantity demanded ÷ % change in income (positive or negative).', src: ELA },
      { n: 2, f: 'A price falls from 25.00 to 22.50 and sales rise from 600 to 720. Find PED and the effect on revenue', b: 'Price: −2.50 ÷ 25 = −10%. Quantity: +120 ÷ 600 = +20%.\nPED = 20 ÷ −10 = −2.0: elastic.\nRevenue rises from 25 × 600 = 15,000 to 22.50 × 720 = 16,200.' },
      { n: 3, f: 'Factors affecting PED', b: 'More elastic with many close substitutes, a luxury, a large share of income, and a longer time period. Less elastic with few substitutes, a necessity, a tiny share of income, and a short period.' },
      { n: 4, f: 'Factors affecting PES, and why primary products tend to have less elastic supply', b: 'More elastic when factors of production are easy to find and move, stocks are held, there is spare capacity, and in the long run.\nPrimary products: growing seasons, weather and mine development times limit the short-run response.' },
      { n: 5, f: 'Interpret YED values', b: 'Above 1: luxury good.\nBetween 0 and 1: normal good, a necessity (demand rises less than proportionately with income).\nBelow 0: inferior good (demand falls as income rises).\nStrictly, every good with positive YED is a normal good.' },
      { n: 6, f: 'Income falls 10% and quantity demanded falls 25%. Find YED and classify the good', b: 'YED = −25 ÷ −10 = +2.5. Above 1, so a luxury good.' },
      { n: 7, f: 'Why does PED matter to a government setting an indirect tax?', b: 'If demand is inelastic, quantity falls little, so tax revenue is high and firms can pass more of the tax on. If demand is elastic, quantity falls a lot, so revenue is lower and firms lose more sales.' },
    ]),
    ...sub(MKT, 'the-mixed-economy-edexcel-igcse-economics', '1.1.5', [
      { n: 1, f: 'Mixed economy', b: 'Resources are allocated by both the market (private sector) and the government (public sector).', src: MIXE },
      { n: 2, f: 'Private sector vs public sector', b: 'Private sector: owned and run by individuals and firms; usual aim profit or growth.\nPublic sector: owned and controlled by the government; usual aim welfare, access and meeting needs.', src: MIXE },
      { n: 3, f: 'Public good, and the free rider problem', b: 'A public good is both non-excludable (nobody can be stopped from using it) and non-rival (use by one leaves the same for everyone else). People use it without paying, so private firms cannot cover costs and do not provide it. Examples: street lighting, flood defences, national defence.', src: MIXE },
      { n: 4, f: 'Market failure', b: 'Resources are used inefficiently in a free market. Two causes in this unit: no provision (public goods) and the wrong amount (externalities).', src: MIXE },
      { n: 5, f: 'Privatisation: one possible gain and one possible loss for consumers and for the government', b: 'Consumers: possibly better quality and lower prices if competition grows, but possibly higher prices and cuts to unprofitable services.\nGovernment: sale proceeds and a lower subsidy bill, but it loses future profits and direct control.' },
      { n: 6, f: 'Which of these is a public good: a toll bridge, street lighting, a restaurant meal?', b: 'Street lighting (non-excludable and non-rival). A toll bridge is excludable; a restaurant meal is rival and excludable.' },
    ]),
    ...sub(MKT, 'externalities-edexcel-igcse-economics', '1.1.6', [
      { n: 1, f: 'External cost and external benefit', b: 'External cost: a cost of production that falls on a third party (pollution, congestion).\nExternal benefit: a benefit of consumption that goes to a third party (education, vaccination).', src: MIXE },
      { n: 2, f: 'Social cost and social benefit formulas', b: 'Social cost = private cost + external cost.\nSocial benefit = private benefit + external benefit.' },
      { n: 3, f: 'A quarry has a private cost of 40 per tonne and an external cost of 12 per tonne. Find the social cost per tonne and the total external cost of 500 tonnes', b: 'Social cost = 40 + 12 = 52 per tonne.\nTotal external cost = 12 × 500 = 6,000.' },
      { n: 4, f: 'What is the market result of an external cost and of an external benefit?', b: 'External cost: the firm ignores the harm, so its cost looks low and too much is produced.\nExternal benefit: buyers count only their own gain, so too little is consumed.' },
      { n: 5, f: 'How could a tax deal with an external cost of 12 per tonne?', b: 'A tax of 12 per tonne makes the firm pay the external cost, so its costs rise, supply falls, and output moves towards the level society would choose.' },
    ]),

    // 1.2 Business economics
    ...sub(BUS, 'production-edexcel-igcse-economics', '1.2.1', [
      { n: 1, f: 'The four factors of production', b: 'Land: all natural resources.\nLabour: human effort, mental and physical.\nCapital: man-made goods used to make other goods (equipment, not money).\nEnterprise: organising the factors, deciding and bearing risk.', src: FOP },
      { n: 2, f: 'Primary, secondary and tertiary sectors', b: 'Primary: extracting or growing natural resources (farming, fishing, mining).\nSecondary: making and building (manufacturing, construction).\nTertiary: services (retail, banking, education, transport).', src: FOP },
      { n: 3, f: 'How does the importance of the sectors typically change as an economy develops?', b: 'Primary share of jobs falls (machinery needs fewer farm workers; people spend a smaller share of income on food).\nSecondary share rises during industrialisation, then often falls.\nTertiary share rises as higher incomes raise demand for services.' },
      { n: 4, f: 'Services jobs: 30% of 10 million in Year 1, 45% of 12 million in Year 2. Find the change in jobs and in the share', b: 'Jobs: 3.0 million → 5.4 million, a rise of 2.4 ÷ 3.0 × 100 = 80%.\nShare: 45 − 30 = 15 percentage points.' },
    ]),
    ...sub(BUS, 'productivity-and-division-of-labour-edexcel-igcse-economics', '1.2.2', [
      { n: 1, f: 'Productivity', b: 'Output per unit of input. Labour productivity = total output ÷ number of workers (or per hour).' },
      { n: 2, f: '8 workers make 960 units; then 10 workers make 1,150 units. What happens to productivity?', b: 'Before: 960 ÷ 8 = 120 per worker. After: 1,150 ÷ 10 = 115.\nProductivity falls by (115 − 120) ÷ 120 × 100 ≈ −4.2%, even though output rose about 19.8%.' },
      { n: 3, f: 'How can the productivity of land, labour and capital be raised?', b: 'Land: fertiliser, drainage, irrigation, reclamation.\nLabour: education and training (human capital), skilled migrants.\nCapital: more machines per worker, new technology.' },
      { n: 4, f: 'Division of labour', b: 'Splitting production into separate tasks, each done by a different worker or group.', src: FOP },
      { n: 5, f: 'Advantages and disadvantages of division of labour for businesses', b: 'Advantages: higher output per worker, lower unit cost, consistent quality, quick training.\nDisadvantages: low morale causes absence and turnover; production halts if a worker is missing; inflexible; errors pass along the line.' },
      { n: 6, f: 'Advantages and disadvantages of division of labour for workers', b: 'Advantages: learn a task quickly, skill grows, higher pay possible if the firm does well.\nDisadvantages: boredom, narrow skills, harder to change job, low motivation.' },
    ]),
    ...sub(BUS, 'business-costs-revenues-and-profit-edexcel-igcse-economics', '1.2.3', [
      { n: 1, f: 'Formulas for TR, TC, ATC and profit', b: 'Total revenue = price × quantity sold.\nTotal cost = total fixed costs + total variable costs.\nAverage (total) cost = TC ÷ quantity.\nProfit = TR − TC (a negative answer is a loss).' },
      { n: 2, f: 'A stall sells 250 scarves at 14. Rent is 600 and each scarf costs 6 to make. Find profit and average cost', b: 'TR = 250 × 14 = 3,500. TVC = 250 × 6 = 1,500. TC = 600 + 1,500 = 2,100.\nProfit = 3,500 − 2,100 = 1,400. ATC = 2,100 ÷ 250 = 8.40.' },
      { n: 3, f: 'Economies of scale, and internal vs external economies', b: 'Economies of scale: a fall in average cost as the scale of production rises (long run).\nInternal: arise inside a firm because it has grown.\nExternal: arise because the industry or area has grown.', src: CRP },
      { n: 4, f: 'Name the six internal economies of scale', b: 'Purchasing (bulk buying), marketing, technical, financial, managerial, risk bearing.' },
      { n: 5, f: 'Diseconomies of scale, with two causes', b: 'A rise in average cost as the scale of production rises beyond a certain point. Causes: bureaucracy, communication problems, lack of control, distance between top management and workers.', src: CRP },
      { n: 6, f: 'Describe the long-run average cost (LRAC) curve', b: 'Cost per unit on the vertical axis, output on the horizontal. U-shaped: the downward part shows economies of scale, the lowest point is the most efficient output, and the upward part shows diseconomies of scale.' },
    ]),
    ...sub(BUS, 'business-competition-edexcel-igcse-economics', '1.2.4', [
      { n: 1, f: 'Effects of competition on efficiency, choice, quality, innovation and price', b: 'Efficiency: pressure to cut waste and cost.\nChoice: more sellers and variety.\nQuality: firms improve to keep customers.\nInnovation: firms race for new ideas.\nPrice: held down by rivals.' },
      { n: 2, f: 'Factors that help a firm grow and factors that keep firms small', b: 'Growth: access to finance, economies of scale, spreading risk, taking over competitors.\nStaying small: lack of finance, small size of market, niche market, aims of the entrepreneur (control, free time).' },
      { n: 3, f: 'Monopoly: definition and features', b: 'One business dominates the market. Features: one dominant business, a unique product, it is a price-maker, and barriers to entry.' },
      { n: 4, f: 'Barriers to entry', b: 'Legal rights and licences; patents; heavy marketing budgets; technology and know-how; high start-up costs. They keep newcomers out, so the dominant firm keeps its share and can price above the competitive level.' },
      { n: 5, f: 'Oligopoly: definition and features', b: 'A market where a few large firms supply most of the output. Features: few large firms dominate, different (branded) products, barriers to entry, possible collusion, non-price competition and price competition.' },
      { n: 6, f: 'Collusion, cartel and price war', b: 'Collusion: firms agree prices or output; a group doing so is a cartel, which raises price and cuts sales (illegal in many countries).\nPrice war: repeated price cuts; consumers gain at first, weak firms may close and survivors may raise prices later.' },
    ]),
    ...sub(BUS, 'the-labour-market-edexcel-igcse-economics', '1.2.5', [
      { n: 1, f: 'Derived demand (for labour)', b: 'Demand for labour (or another input) that arises only because people want what it produces.', src: LAB },
      { n: 2, f: 'What shifts the demand curve for labour?', b: 'Right: higher demand for the final product, dearer machines, higher productivity of workers.\nLeft: lower product demand, cheaper or better machines replacing workers.\nA change in the wage moves along the curve; it never shifts it.' },
      { n: 3, f: 'What shifts the supply curve of labour?', b: 'Right: population growth, immigration, a higher retirement age, more women in paid work, more skills, better mobility.\nLeft: emigration, an ageing population, a higher school-leaving age (short run).' },
      { n: 4, f: 'Human capital, and how training affects labour cost per unit', b: 'Human capital: the skills, knowledge and health of the workforce. Training raises output per worker, so labour cost per unit falls. Example: wage 12 an hour, output 20 → 26 per hour; cost per unit 0.60 → about 0.46.' },
      { n: 5, f: 'Labour market diagram: what happens to wage and employment when labour supply shifts right?', b: 'Axes: wage (vertical) and quantity of labour (horizontal). Supply shifts right: the wage falls and employment rises.' },
      { n: 6, f: 'How can a trade union affect the labour market?', b: 'Through collective bargaining and the threat of industrial action it can win higher pay and better conditions. If the wage is pushed above equilibrium, employment falls. Firms face higher costs, so higher prices or lower profit.' },
    ]),
    ...sub(BUS, 'government-intervention-edexcel-igcse-economics', '1.2.6', [
      { n: 1, f: 'Five government policies to correct negative externalities', b: 'Taxes, subsidies (for cleaner alternatives), fines, regulation (limits or bans) and tradable pollution permits.' },
      { n: 2, f: 'Pollution permit', b: 'A right, which can be sold on, to release a set amount of waste. The government caps the total; firms that can cut pollution cheaply cut more and sell permits.', src: LAB },
      { n: 3, f: 'A firm saves 24,000 by dumping waste. The chance of being caught is 30%. Does a fine of 60,000 deter it?', b: 'Expected fine = 0.3 × 60,000 = 18,000, which is less than the 24,000 saved, so it does not deter. A fine of 100,000 (expected 30,000) would.' },
      { n: 4, f: 'Ways a government regulates competition', b: 'Promote competition (lower entry barriers, support small firms); limit monopoly power (ban cartels, fine abuse of dominance, price caps); protect consumers (safety, honest labelling); control mergers and takeovers.' },
      { n: 5, f: 'A minimum wage of 12 is set where equilibrium is 10 with 500 employed. At 12, 400 are demanded and 600 supplied. What happens?', b: 'Employment falls from 500 to 400 (−20%) and there is a surplus of labour (unemployment) of 600 − 400 = 200. Those still employed earn 2 more an hour. A minimum below equilibrium has no effect.' },
      { n: 6, f: 'Reasons for and drawbacks of a national minimum wage', b: 'Reasons: reduce poverty and inequality, stop exploitation, make work pay more than benefits.\nDrawbacks: unemployment if set above equilibrium, higher costs and prices, informal work, enforcement cost.' },
    ]),

    // 2.1 Government and the economy
    ...sub(GOV, 'macroeconomic-objectives-edexcel-igcse-economics', '2.1.1', [
      { n: 1, f: 'Economic growth, and nominal vs real GDP', b: 'Economic growth: a rise in the output of goods and services in an economy over time.\nNominal GDP is at current prices; real GDP is adjusted for price changes and is the measure of growth.', src: GROW },
      { n: 2, f: 'Nominal GDP rises from 600 to 645 and the price index from 100 to 104. Find real growth', b: 'Real GDP = 645 ÷ 104 × 100 = 620.19.\nReal growth = (620.19 − 600) ÷ 600 × 100 ≈ 3.37% (nominal growth was 7.5%).' },
      { n: 3, f: 'The economic cycle: describe the four stages', b: 'Boom: high growth, rising inflation, low unemployment.\nDownturn: growth slowing but positive.\nRecession: negative growth, low inflation, high and rising unemployment.\nRecovery: growth picks up; unemployment falls slowly (it lags output).' },
      { n: 4, f: 'Unemployment and the unemployment rate', b: 'Unemployment: people able and willing to work, and looking for work, who cannot find a job.\nRate = number unemployed ÷ labour force × 100, where the labour force is employed + unemployed.', src: UNEM },
      { n: 5, f: 'Five types of unemployment', b: 'Cyclical: a fall in total demand.\nStructural: industry decline or a skills mismatch.\nSeasonal: time-of-year changes in demand.\nFrictional: time between jobs.\nVoluntary: refusing available work at the pay offered.' },
      { n: 6, f: 'Consequences of unemployment', b: 'Lost output (inside the PPF); wasted labour and fading skills; poverty; higher benefit spending and lower tax revenue; weaker consumer and business confidence; social problems.' },
      { n: 7, f: 'Inflation, deflation and the CPI', b: 'Inflation: a sustained rise in the general level of prices.\nDeflation: a sustained fall in the general level of prices.\nCPI: a weighted index of the average change in prices of a basket of goods and services bought by households.', src: INFL },
      { n: 8, f: 'Demand-pull vs cost-push inflation', b: 'Demand-pull: total demand grows faster than the economy can produce (AD shifts right).\nCost-push: rising costs of production (wages, raw materials, energy, indirect taxes) are passed on in higher prices (AS shifts left).', src: INFL },
      { n: 9, f: 'Menu costs vs shoe leather costs of inflation', b: 'Menu costs: the costs to firms of changing their prices (relabelling, reprinting).\nShoe leather costs: the time and effort spent protecting the value of money, such as searching for cheaper prices.', src: INFL },
      { n: 10, f: 'Current account: what it records, and visibles vs invisibles', b: 'The part of the balance of payments recording trade in goods and services.\nVisibles: traded goods. Invisibles: traded services such as tourism, banking and insurance.\nCurrent account balance = visible balance + invisible balance.', src: BOP },
      { n: 11, f: 'Four impacts of a current account deficit', b: 'A leakage from the circular flow (less spending at home); inflation if import prices rise; low demand for exports, so lost output and jobs; problems finding foreign reserves to pay for it.' },
      { n: 12, f: 'Absolute vs relative poverty, and progressive taxation', b: 'Absolute poverty: unable to afford basic needs (food, water, shelter, clothing).\nRelative poverty: income far lower than what is normal in that country.\nProgressive tax: the percentage of income paid rises as income rises; it helps redistribute income.', src: ENV },
    ]),
    ...sub(GOV, 'government-policies-edexcel-igcse-economics', '2.1.2', [
      { n: 1, f: 'Fiscal policy, and expansionary vs contractionary fiscal policy', b: 'Fiscal policy: the government\'s use of taxation and government spending to influence the economy and meet its macroeconomic objectives.\nExpansionary: higher spending and/or lower taxes, to raise demand.\nContractionary: lower spending and/or higher taxes, to reduce demand.', src: FISC },
      { n: 2, f: 'Direct vs indirect tax', b: 'Direct: a tax on income or profit, paid straight to the government by whoever is taxed (income tax, corporation tax).\nIndirect: a tax on spending, collected by sellers and included in the price (VAT, excise duties).', src: FISC },
      { n: 3, f: 'Fiscal deficit vs national debt', b: 'Fiscal deficit: government spending greater than revenue in a year (a flow).\nNational debt: the total stock of past borrowing.\nRevenue 640, spending 700 → deficit of 60; with GDP 3,000 that is 2.0% of GDP.' },
      { n: 4, f: 'Monetary policy and the transmission mechanism of a rate rise', b: 'Monetary policy: changes to interest rates (and related tools) by the central bank to influence the economy.\nRate rise → borrowing dearer, saving pays more → consumers spend less, firms invest less; currency tends to rise → AD falls → inflation and growth slow, unemployment may rise.', src: MONP },
      { n: 5, f: 'Asset purchasing (quantitative easing)', b: 'The central bank creates money and buys assets, mainly government bonds, usually when the policy rate is already very low. Bond prices rise and yields fall, so borrowing costs fall and spending rises. Risks: inflation, higher asset prices that benefit existing owners.' },
      { n: 6, f: 'Limits of monetary policy', b: 'Time lags; weak confidence (people may not borrow even at low rates); dearer borrowing does not cure cost-push inflation; fixed-rate borrowers respond slowly; aims conflict (fighting inflation can raise unemployment).' },
      { n: 7, f: 'Supply-side policy', b: 'Government action to raise productive capacity by making resources more productive or more plentiful.', src: SSP },
      { n: 8, f: 'Name seven supply-side policies', b: 'Privatisation; deregulation; education and training; regional policy; infrastructure; lower business (corporation) taxes; lower income tax.' },
      { n: 9, f: 'How might cutting income tax act as a supply-side policy, and what is the limit?', b: 'Take-home pay rises (gross 2,000: net 1,600 at 20% tax, 1,700 at 15%, up 6.25%), so more people work or work longer, raising output. Limit: behaviour may not change, and tax revenue falls.' },
      { n: 10, f: 'Regulation, legislation, fines and permits: one disadvantage each', b: 'Regulation: compliance costs, heavier for small firms.\nLegislation: slow to pass, costly to police.\nFines: work only if firms are caught.\nPollution permits: the cap may be set too high, and monitoring is needed.' },
    ]),
    ...sub(GOV, 'relationships-between-objectives-and-policies-edexcel-igcse-economics', '2.1.3', [
      { n: 1, f: 'Trade-off between objectives', b: 'Improving one macroeconomic objective makes another worse.', src: SSP },
      { n: 2, f: 'Explain the trade-off between lower unemployment and inflation', b: 'Higher government spending raises demand → firms hire → unemployment falls → spare workers run out, so firms offer higher wages → costs rise and are passed on → inflation rises. Sharper near full employment.' },
      { n: 3, f: 'Explain the trade-off between economic growth and environmental protection', b: 'Higher output needs more energy and materials, so emissions and waste rise. Limiting pollution raises firms\' costs, which can slow growth. It depends on whether cleaner technology is available.' },
      { n: 4, f: 'Explain the trade-off between inflation and the current account', b: 'If prices at home rise faster than abroad, foreign buyers switch away from exports and domestic buyers switch to imports, so the current account moves towards deficit.' },
      { n: 5, f: 'How can supply-side policy ease the unemployment–inflation trade-off?', b: 'Training raises output per worker, so firms can fill vacancies without bidding wages up. Output grows without extra price pressure, so unemployment and inflation can both stay low. The gain takes years.' },
      { n: 6, f: 'Unemployment falls from 8% to 5%. State the change in percentage points and as a percentage', b: 'A fall of 3 percentage points. As a percentage of the original rate: 3 ÷ 8 × 100 = 37.5%.' },
    ]),

    // 2.2 The global economy
    ...sub(GLO, 'globalisation-edexcel-igcse-economics', '2.2.1', [
      { n: 1, f: 'Globalisation', b: 'Increased integration and interdependence of economies.', src: GLOB },
      { n: 2, f: 'Multinational corporation (MNC) and foreign direct investment (FDI)', b: 'MNC: a firm that carries on business in two or more countries.\nFDI: investment by a firm in business assets (building a plant, buying a majority stake) in another country.', src: GLOB },
      { n: 3, f: 'Four reasons for globalisation', b: 'Fewer tariffs and quotas; cheaper transport; cheaper communication; the growing significance of MNCs.' },
      { n: 4, f: 'Why do MNCs and FDI emerge?', b: 'Economies of scale from selling in many markets; access to natural resources and cheap materials; lower transport and communication costs; access to customers in different regions (avoiding import taxes and delivery costs).' },
      { n: 5, f: 'Advantages and disadvantages of MNCs for a host country', b: 'Advantages: jobs, investment in infrastructure, skills, capital, tax contributions.\nDisadvantages: tax avoidance, environmental damage, profits moved abroad, pressure on local firms, jobs may leave if the firm moves.' },
      { n: 6, f: 'Tax avoidance vs tax evasion', b: 'Tax avoidance: using legal rules to reduce a tax bill.\nTax evasion: illegally not paying tax that is owed.' },
    ]),
    ...sub(GLO, 'international-trade-edexcel-igcse-economics', '2.2.2', [
      { n: 1, f: 'Free trade: advantages and disadvantages', b: 'Advantages: lower prices and more choice for consumers, lower input costs for firms, wider markets for businesses.\nDisadvantages: foreign competition harms domestic businesses; unemployment rises in affected industries.' },
      { n: 2, f: 'Tariff, quota and subsidy (as methods of protection)', b: 'Tariff: a tax on imported goods.\nQuota: a limit on the quantity of a good that can be imported.\nSubsidy: government money paid to producers, which cuts what each unit costs them to supply.', src: FREE },
      { n: 3, f: 'Dumping', b: 'Exporting at a price under the cost of making the good, or under the price in the exporter\'s own market.', src: FREE },
      { n: 4, f: 'Reasons for protection', b: 'Prevent dumping; protect employment; infant industries; tariff revenue; keep out unsafe products; reduce a current account deficit; retaliation.' },
      { n: 5, f: 'World price 20; a 25% tariff is imposed. Home demand falls to 85 and home supply rises to 70 (thousands). Find imports and tariff revenue', b: 'Tariff = 0.25 × 20 = 5, so the price is 25.\nImports = 85 − 70 = 15 thousand.\nRevenue = 5 × 15 = 75 thousand. Use imports after the tariff, not before.' },
      { n: 6, f: 'Free-trade area vs customs union vs common market', b: 'Free-trade area: no barriers between members; each sets its own barriers on outsiders.\nCustoms union: free trade between members plus one common tariff on outsiders.\nCommon market: a customs union plus free movement of labour and capital.', src: BLOC },
      { n: 7, f: 'Trade creation vs trade diversion', b: 'Trade creation: buying from a lower-cost partner instead of a higher-cost home producer.\nTrade diversion: buying from a higher-cost partner instead of a lower-cost outsider.', src: BLOC },
      { n: 8, f: 'Roles of the World Trade Organization (WTO)', b: 'Negotiates lower trade barriers; promotes equal treatment of members; settles disputes (a panel rules on a complaint); allows limited retaliation; monitors members\' policies; supports developing countries; allows duties on dumped goods.' },
    ]),
    ...sub(GLO, 'exchange-rates-edexcel-igcse-economics', '2.2.3', [
      { n: 1, f: 'Exchange rate', b: 'The number of units of one currency needed for one unit of another.', src: FX },
      { n: 2, f: 'Appreciation vs revaluation; depreciation vs devaluation', b: 'Appreciation / depreciation: market forces push a currency\'s value up / down (floating rate).\nRevaluation / devaluation: a rise / fall chosen by the government or central bank that sets the rate (fixed rate).', src: FX },
      { n: 3, f: 'Sources of demand for and supply of a currency (AC) on the foreign exchange market', b: 'Demand for AC: foreigners buying exports, visitors to Country A, foreigners buying Country A assets.\nSupply of AC: residents buying imports, travelling abroad, sending money abroad.' },
      { n: 4, f: 'What happens to a currency when the country raises its interest rate?', b: 'Saving there offers a better return → foreign savers buy the currency → demand shifts right → the exchange rate rises (appreciation).' },
      { n: 5, f: '1 AC = 2.50 BC; a toy costs 30 AC and a jacket 12 BC. The AC depreciates to 2.00 BC. What happens to the two prices?', b: 'Toy (export) in BC: 30 × 2.50 = 75 → 30 × 2.00 = 60, down 20%.\nJacket (import) in AC: 12 ÷ 2.50 = 4.80 → 12 ÷ 2.00 = 6.00, up 25%.' },
      { n: 6, f: 'Will a depreciation improve the current account?', b: 'Exports become cheaper abroad and imports dearer at home, so the current account tends to improve, but only if demand for exports and imports is price elastic enough. Imported inputs also cost more, and effects take time.' },
    ]),
  ],
};
