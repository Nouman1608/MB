/**
 * D-444 -- flashcards for AQA AS Economics 7135 (for first teaching from
 * September 2015).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 * AS content is a subset of the A-level (7136); many cards are adapted from
 * the 7136 deck, but content the shared pages mark as A-level only (national
 * income data and PPP, the Phillips curve, the quantity theory, oligopoly
 * models, price discrimination, the international economy beyond the current
 * account) is left out.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 7135); origin 'revision-notes'.
 *
 * No tierScheme: the syllabus record is not tiered. Every number in a worked
 * example is invented and has been checked. Plain text only (see types.ts).
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

const MICRO = 'the-operation-of-markets-and-market-failure-aqa-aslevel-economics';
const MACRO = 'the-national-economy-in-a-global-context-aqa-aslevel-economics';

const CF = 'aqa-a-level-economics-circular-flow-ad-and-as-analysis-and-determinants-of-revision-notes';
const PG = 'aqa-a-level-economics-public-goods-and-externalities-revision-notes';

export const DECK_AQA_AS_LEVEL_ECONOMICS: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'as-level',
  subjectSlug: 'economics',
  syllabusCode: '7135',
  syllabusSeries: 'For first teaching from September 2015',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'salman-ahmad', reviewedOn: '2026-11-05' },
  cards: [
    // 3.1 The operation of markets and market failure
    ...sub(MICRO, 'economic-methodology-and-the-economic-problem-aqa-aslevel-economics', '3.1.1', [
      { n: 1, f: 'How is economics like a natural science, and how is it different?', b: 'Like: it uses models, assumptions, testable hypotheses and ceteris paribus.\nUnlike: people react to incentives and to theories, controlled experiments are rare, data are messy, and results are tendencies rather than laws.' },
      { n: 2, f: 'Positive vs normative statement', b: 'Positive: can be tested against evidence; it may turn out to be false.\nNormative: contains a value judgement about what ought to be; evidence alone cannot settle it.' },
      { n: 3, f: 'Needs vs wants, and the three basic economic questions', b: 'Needs: what is required to survive. Wants: what is desired beyond that.\nWhat to produce, how to produce it, and for whom.' },
      { n: 4, f: 'The four factors of production and their rewards', b: 'Land: rent.\nLabour: wages.\nCapital (man-made goods used to make other goods): interest.\nEnterprise (organising factors and bearing risk): profit.' },
      { n: 5, f: 'Why is the environment treated as a scarce resource?', b: 'Clean air, water, forests and the capacity to absorb waste are limited. When the environment is treated as free it is over-used, and use now has an opportunity cost for future generations.' },
      { n: 6, f: 'Scarcity and opportunity cost', b: 'Scarcity: limited resources against unlimited wants; it forces choices.\nOpportunity cost: the benefit of the next best option given up, not the sum of everything rejected.' },
      { n: 7, f: 'A hectare earns 900 from wheat, 700 from barley or 650 from sheep. Wheat is chosen. Opportunity cost?', b: '700 per hectare: the barley, the next best option only.' },
      { n: 8, f: 'Production possibility diagram: points on, inside and outside the boundary', b: 'On: attainable with resources fully used (productively efficient).\nInside: attainable but resources unemployed or used inefficiently.\nOutside: unattainable with current resources and technology.' },
      { n: 9, f: 'A move along a PPD goes from (20 K, 90 C) to (50 K, 60 C). Opportunity cost of each extra unit of K?', b: 'Gain 30 K, lose 30 C, so each extra unit of K costs 30 ÷ 30 = 1 unit of C.' },
      { n: 10, f: 'PPD: movement along, moving from inside to the boundary, and an outward shift', b: 'Along: reallocation of resources (a trade-off).\nInside to boundary: using idle resources (actual growth, at no opportunity cost).\nOutward shift: potential growth from more or better resources or technology.' },
    ]),
    ...sub(MICRO, 'price-determination-in-a-competitive-market-aqa-aslevel-economics', '3.1.2', [
      { n: 1, f: 'Demand, and movement along vs shift of the demand curve', b: 'The quantity consumers will actually buy, with desire and ability to pay, at each price over a period.\nMovement along: only the good\'s own price changes. Shift: any other influence (income, tastes, prices of related goods).' },
      { n: 2, f: 'PED, YED and XED formulae', b: 'PED = % change in quantity ÷ % change in own price (normally negative).\nYED = % change in quantity ÷ % change in income.\nXED = % change in quantity of A ÷ % change in price of B.' },
      { n: 3, f: 'Price rises 10% and quantity demanded falls 5%. PED, and what happens to total revenue?', b: 'PED = −5 ÷ 10 = −0.5, inelastic. Total revenue (price × quantity) rises, because quantity falls proportionately less than price rises.' },
      { n: 4, f: 'Income rises by 4% and quantity demanded falls by 2%. YED and type of good?', b: 'YED = −2 ÷ 4 = −0.5. Negative, so an inferior good.' },
      { n: 5, f: 'Price of B rises by 10%; demand for A rises by 15%. XED, and how are A and B related?', b: 'XED = 15 ÷ 10 = +1.5. Positive, so substitutes. A negative XED would mean complements.' },
      { n: 6, f: 'Elasticity vs slope on a straight-line demand curve', b: 'The slope is constant, but PED changes along the line: elastic at high prices, unitary at the midpoint, inelastic at low prices.' },
      { n: 7, f: 'What shifts the supply curve?', b: 'Left: higher costs (wages, materials, energy), an indirect tax, exit of firms, a better price for an alternative product, bad weather.\nRight: new technology and lower costs, a subsidy, entry of firms.' },
      { n: 8, f: 'Determinants of price elasticity of supply', b: 'Time period, spare capacity, level of stocks, and how easily factors can be switched between uses.' },
      { n: 9, f: 'What happens when price is above equilibrium?', b: 'Excess supply. Price is pushed down; quantity demanded extends and quantity supplied contracts until the market clears.' },
      { n: 10, f: 'Joint, competitive, composite and derived demand', b: 'Joint: complements bought together.\nCompetitive: substitutes.\nComposite: a good with several uses.\nDerived: demand for an input that comes from demand for the final good.' },
      { n: 11, f: 'Diagram: demand rises in a market with inelastic supply', b: 'Demand shifts right. With steep (inelastic) supply, price rises a lot and quantity only a little. With elastic supply, quantity rises more and price less.' },
    ]),
    ...sub(MICRO, 'production-costs-and-revenue-aqa-aslevel-economics', '3.1.3', [
      { n: 1, f: 'Production and productivity', b: 'Production: converting inputs (the services of factors such as labour and capital) into output.\nProductivity: output per unit of input; labour productivity is output per worker or per worker-hour.' },
      { n: 2, f: 'Specialisation, division of labour and the role of money', b: 'Specialisation: concentrating on what you do best. Division of labour: splitting production into separate tasks. Specialisation requires exchange, and money as a medium of exchange makes exchange easier.' },
      { n: 3, f: 'Short run vs long run', b: 'Short run: some factor of production cannot be changed (there are fixed costs).\nLong run: every factor can be changed, so there are no fixed costs.' },
      { n: 4, f: 'The cost formulae', b: 'TC = FC + VC.\nAFC = FC ÷ Q, AVC = VC ÷ Q, AC = TC ÷ Q = AFC + AVC.\nMC = ΔTC ÷ ΔQ.' },
      { n: 5, f: 'Fixed vs variable costs', b: 'Fixed: do not vary with output in the short run (rent, insurance).\nVariable: vary with output (materials, piece-rate labour).' },
      { n: 6, f: 'Internal vs external economies of scale', b: 'Internal: lower unit cost from the firm\'s own growth (technical, purchasing, managerial, financial, marketing, risk-bearing).\nExternal: lower unit cost from growth of the industry or area.' },
      { n: 7, f: 'Diseconomies of scale and minimum efficient scale', b: 'Diseconomies: unit cost rises as scale rises, often from communication, coordination and motivation problems.\nMES: the smallest output that reaches the lowest long-run average cost.' },
      { n: 8, f: 'TR, AR and profit', b: 'TR = P × Q. AR = TR ÷ Q, which is the price. Profit = TR − TC.' },
      { n: 9, f: 'Normal profit vs supernormal (abnormal) profit', b: 'Normal profit: the least reward that keeps the entrepreneur in the activity; counted as a cost.\nSupernormal profit: profit above normal profit.' },
      { n: 10, f: 'Invention, innovation and creative destruction', b: 'Invention: a new idea, product or process. Innovation: its first commercial use.\nCreative destruction: new products, methods and firms replacing old ones; technological change can lower costs and change market structure.' },
    ]),
    ...sub(MICRO, 'competitive-and-concentrated-markets-aqa-aslevel-economics', '3.1.4', [
      { n: 1, f: 'The spectrum of market structures', b: 'From perfect competition (many firms, identical products, free entry) through monopolistic competition and oligopoly to monopoly (a single seller with high barriers to entry).' },
      { n: 2, f: 'Concentration ratio', b: 'The combined market share of the n largest firms. Top three sell 45, 30 and 15 in a market of 150: CR3 = 90 ÷ 150 × 100 = 60%.' },
      { n: 3, f: 'Objectives of firms', b: 'Profit maximisation is the usual assumption, but firms may pursue sales or revenue growth, market share, survival, or satisficing (aiming for a satisfactory rather than maximum outcome).' },
      { n: 4, f: 'Principal-agent problem', b: 'Shareholders (principals) own the firm but managers (agents) run it and may act in their own interest, for example pursuing growth or pay rather than profit.' },
      { n: 5, f: 'Price taker', b: 'A firm too small to influence the market price, so it accepts it. In a competitive market it can sell all it wants at that price and nothing above it.' },
      { n: 6, f: 'How do competitive markets benefit consumers?', b: 'Rivalry pushes firms to cut costs, keep prices low and improve quality; supernormal profit attracts entry, which drives price down towards cost.' },
      { n: 7, f: 'Barriers to entry: examples', b: 'Economies of scale, patents and licences, high sunk costs, brand loyalty and advertising, control of supplies or outlets, and the incumbent\'s pricing.' },
      { n: 8, f: 'Monopoly power and what influences it', b: 'The ability to hold price above cost. It is greater with higher barriers to entry, fewer firms, more advertising and product differentiation.' },
      { n: 9, f: 'Possible costs and benefits of monopoly', b: 'Costs: higher prices, lower output, less choice, little pressure to cut costs.\nBenefits: economies of scale, and supernormal profit to fund research and innovation.' },
      { n: 10, f: 'Monopolistic competition', b: 'Many sellers of differentiated products with easy entry and exit; firms compete through branding, quality, service and location as well as price.' },
    ]),
    ...sub(MICRO, 'market-mechanism-market-failure-and-government-intervention-aqa-aslevel-economics', '3.1.5', [
      { n: 1, f: 'Functions of the price mechanism', b: 'Rationing: price limits demand to the available supply.\nIncentive: price and profit changes reward a change in behaviour.\nSignalling: price changes carry information to buyers and sellers.' },
      { n: 2, f: 'Market failure: complete vs partial', b: 'Market failure: a market leads to a misallocation of resources.\nComplete: a missing market. Partial: the market exists but misallocates.' },
      { n: 3, f: 'Classifying goods by rivalry and excludability', b: 'Rival and excludable: private good.\nRival, non-excludable: common resource.\nNon-rival, excludable: quasi-public (club) good.\nNon-rival and non-excludable: pure public good.', src: PG },
      { n: 4, f: 'Free-rider problem', b: 'People can use a non-excludable good without paying, so private firms cannot make a profit and the good may not be provided at all.' },
      { n: 5, f: 'Diagram: negative production externality', b: 'MSC lies above MPC (supply). The market produces where MPC = MPB; the social optimum, where MSC = MSB, is lower. The welfare loss is the triangle between MSC and MSB over the extra output. It is over-produced.' },
      { n: 6, f: 'Merit good vs demerit good', b: 'Merit good: judged good for people; under-consumed in a free market (education).\nDemerit good: judged bad for people; over-consumed (cigarettes). Both rest on a value judgement and often on imperfect information.' },
      { n: 7, f: 'Market imperfections', b: 'Imperfect and asymmetric information, monopoly power (raising price above marginal cost by cutting output), and immobility of factors of production (occupational and geographical).' },
      { n: 8, f: 'Why might an unequal distribution of income and wealth be a market failure?', b: 'Markets reward those with valuable skills and assets; the outcome may be judged inequitable (unfair), which is a value judgement. Equality means equal shares; equity means a fair distribution.' },
      { n: 9, f: 'Indirect tax vs subsidy on a supply and demand diagram', b: 'Tax shifts supply up (left) by the tax per unit; a subsidy shifts it down (right). Neither shifts demand. The price paid by buyers and the price received by sellers differ by the tax or subsidy.' },
      { n: 10, f: 'Maximum price vs minimum price', b: 'Maximum price (set below equilibrium): shortage, possibly black markets.\nMinimum price (set above equilibrium): surplus.' },
      { n: 11, f: 'Government failure', b: 'Intervention that leads to a misallocation of resources, for example from poor information, unintended consequences, administrative costs, conflicting objectives or regulatory capture.' },
    ]),

    // 3.2 The national economy in a global context
    ...sub(MACRO, 'the-measurement-of-macroeconomic-performance-aqa-aslevel-economics', '3.2.1', [
      { n: 1, f: 'The four main macroeconomic objectives', b: 'Economic growth, price stability (low and stable inflation), minimising unemployment, and a stable balance of payments on current account. Others: balancing the budget and a more equitable income distribution.' },
      { n: 2, f: 'Why can governments rarely achieve all four objectives at once?', b: 'Policies affect several objectives. Raising AD for growth and jobs can raise imports (worse current account) and, near capacity, cause demand-pull inflation.' },
      { n: 3, f: 'Match each indicator to its objective', b: 'Real GDP and real GDP per capita: growth.\nCPI and RPI: price stability.\nUnemployment measures: unemployment.\nCurrent account balance: external balance.\nProductivity: efficiency.' },
      { n: 4, f: 'A price index rises from 100 to 108. What does that mean?', b: 'Prices have risen by 8% relative to the base year. An index number is relative, not an absolute value.' },
      { n: 5, f: 'Features of a price index such as CPI', b: 'A base year set to 100, a basket of goods and services bought by a typical household, and weights reflecting each item\'s share of spending.' },
      { n: 6, f: 'An index goes from 104.0 to 106.6. Inflation rate?', b: '(106.6 − 104.0) ÷ 104.0 × 100 = 2.5%.' },
      { n: 7, f: 'Real GDP vs nominal GDP', b: 'Real GDP is adjusted for inflation (constant prices); nominal GDP is at current prices. Growth is measured by the change in real GDP.' },
      { n: 8, f: 'The balance of payments on current account', b: 'A record of trade in goods and services plus income flows (primary and secondary income) with the rest of the world.' },
    ]),
    ...sub(MACRO, 'how-the-macroeconomy-works-aqa-aslevel-economics', '3.2.2', [
      { n: 1, f: 'Injections and withdrawals in the circular flow', b: 'Injections: investment, government spending, exports.\nWithdrawals: saving, taxation, imports.' },
      { n: 2, f: 'Equilibrium national income (circular flow)', b: 'Planned injections equal planned withdrawals, so the flow is steady and income is not changing.', src: CF },
      { n: 3, f: 'Full employment income', b: 'Income when every available resource is in use. Equilibrium can settle below it (spare capacity). Spending that pushes demand beyond it cannot raise real output further, so it puts pressure on prices.', src: CF },
      { n: 4, f: 'Aggregate demand and its components', b: 'Planned spending on the economy\'s output at each price level.\nAD = C + I + G + (X − M).' },
      { n: 5, f: 'Determinants of consumption and investment', b: 'Consumption: income, interest rates, wealth, confidence, credit.\nInvestment: expected demand, interest rates, business confidence, technology, finance.' },
      { n: 6, f: 'The multiplier process', b: 'An injection becomes someone\'s income; part is spent and becomes further income, part leaks out in saving, tax and imports. The final rise in national income is a multiple of the injection. More leakage means a smaller multiplier.' },
      { n: 7, f: 'MPC is 0.75 (no tax or trade). Investment rises by 20bn. Final change in income?', b: 'Multiplier = 1 ÷ (1 − 0.75) = 4. Income rises by 4 × 20 = 80bn, if there is spare capacity.' },
      { n: 8, f: 'What shifts SRAS?', b: 'Changes in costs of production: wage rates, raw material and energy prices, import prices (the exchange rate), indirect taxes and productivity.' },
      { n: 9, f: 'What shifts LRAS?', b: 'Changes in the quantity or quality of resources: technology, education and skills, investment in capital, labour force size, and institutions.' },
      { n: 10, f: 'Keynesian AS curve', b: 'Flat when there is a lot of spare capacity, rising as bottlenecks appear, vertical at full capacity. So the effect of a rise in AD on real output depends on spare capacity.' },
      { n: 11, f: 'Diagram: a supply-side shock such as a rise in oil prices', b: 'SRAS shifts left (up). The price level rises and real output falls along the existing AD curve.' },
    ]),
    ...sub(MACRO, 'economic-performance-aqa-aslevel-economics', '3.2.3', [
      { n: 1, f: 'Short-run vs long-run economic growth', b: 'Short run: rising actual output, usually from higher AD using spare capacity.\nLong run: rising productive capacity (LRAS shifting right); the trend rate.' },
      { n: 2, f: 'Output gap: actual 585, potential 600', b: '(585 − 600) ÷ 600 × 100 = −2.5%, a negative output gap: spare capacity and cyclical unemployment.' },
      { n: 3, f: 'The economic cycle', b: 'Fluctuations of actual output around the trend: boom, downturn, recession, recovery. Caused by demand-side and supply-side shocks.' },
      { n: 4, f: 'ILO (LFS) measure vs claimant count', b: 'LFS: a survey using the ILO test: no job, available to start within two weeks, looked for work in the last four weeks.\nClaimant count: people claiming an unemployment-related benefit.' },
      { n: 5, f: 'Frictional, structural and cyclical unemployment', b: 'Frictional: between jobs, searching.\nStructural: skills or location do not match vacancies.\nCyclical: too little aggregate demand.' },
      { n: 6, f: 'Unemployment rate', b: 'Unemployed ÷ labour force × 100, where the labour force is employed plus unemployed. Never divide by the whole population.' },
      { n: 7, f: 'Demand-pull vs cost-push inflation', b: 'Demand-pull: AD shifts right; price level and real output rise.\nCost-push: SRAS shifts left; price level rises while real output falls.' },
      { n: 8, f: 'Deflation vs disinflation', b: 'Deflation: the price level is falling.\nDisinflation: the rate of inflation is falling but prices are still rising.' },
      { n: 9, f: 'Who gains and loses from inflation?', b: 'Lose: savers when interest is below inflation, people on fixed incomes, workers whose pay lags.\nGain: borrowers with fixed debts. Firms face menu costs and uncertainty.' },
      { n: 10, f: 'Conflict: growth vs the current account', b: 'Rising incomes raise spending on imports; if imports grow faster than exports, the current account worsens.' },
      { n: 11, f: 'Conflict: low unemployment vs price stability', b: 'Raising AD to cut unemployment can cause demand-pull inflation once the economy nears full capacity.' },
    ]),
    ...sub(MACRO, 'macroeconomic-policy-aqa-aslevel-economics', '3.2.4', [
      { n: 1, f: 'Monetary policy and the MPC', b: 'Central bank action on interest rates, money supply and credit. The Bank of England\'s Monetary Policy Committee sets Bank Rate to meet the government\'s 2% CPI inflation target.' },
      { n: 2, f: 'What happens to AD when Bank Rate rises?', b: 'Market rates rise; borrowing is dearer and saving more rewarding, so C and I fall; the pound tends to appreciate, cutting net exports. AD falls, easing inflation after a lag.' },
      { n: 3, f: 'Quantitative easing', b: 'The central bank creates electronic reserves to buy assets, mainly government bonds, lowering long-term interest rates to raise spending.' },
      { n: 4, f: 'Real interest rate', b: 'The nominal rate adjusted for inflation: roughly nominal rate − inflation. A 4% rate with 5% inflation is a negative real rate, so savers lose.' },
      { n: 5, f: 'Fiscal policy', b: 'Changes in government spending, taxation and the budget balance, used to influence AD (macro) and particular markets or groups (micro).' },
      { n: 6, f: 'Direct vs indirect tax, and progressive tax', b: 'Direct: on income, profit or wealth. Indirect: on spending.\nProgressive: the average tax rate rises as income rises.' },
      { n: 7, f: 'Budget deficit vs national debt', b: 'Deficit: spending greater than revenue in a period (a flow).\nNational debt: everything the government owes on one date (a stock). A deficit adds to the debt.' },
      { n: 8, f: 'Supply-side policies', b: 'Government measures to raise productive capacity and efficiency, shifting LRAS right: education and training, tax reform to improve incentives, deregulation, privatisation, labour market reform, infrastructure.' },
      { n: 9, f: 'Supply-side vs demand-side policies', b: 'Demand-side (fiscal and monetary) policies shift AD and work faster. Supply-side policies shift LRAS, can lower inflation and unemployment together, but take years.' },
      { n: 10, f: 'Free-market vs interventionist supply-side policies', b: 'Free-market: remove obstacles and strengthen incentives (tax cuts, deregulation, privatisation).\nInterventionist: government acts directly (education, training, infrastructure).' },
    ]),
  ],
};
