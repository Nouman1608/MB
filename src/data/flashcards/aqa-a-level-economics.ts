/**
 * D-438 -- flashcards for AQA A-level Economics 7136 (for first teaching from
 * September 2015).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 7136); origin 'revision-notes'.
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

const MICRO = 'individuals-firms-markets-and-market-failure-aqa-alevel-economics';
const MACRO = 'the-national-and-international-economy-aqa-alevel-economics';

const CF = 'aqa-a-level-economics-circular-flow-ad-and-as-analysis-and-determinants-of-revision-notes';
const EFF = 'aqa-a-level-economics-efficiency-market-structure-and-consumer-and-producer-revision-notes';
const PG = 'aqa-a-level-economics-public-goods-and-externalities-revision-notes';

export const DECK_AQA_A_LEVEL_ECONOMICS: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'economics',
  syllabusCode: '7136',
  syllabusSeries: 'For first teaching from September 2015',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'salman-ahmad', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Individuals, firms, markets and market failure
    ...sub(MICRO, 'economic-methodology-and-the-economic-problem-aqa-alevel-economics', '3.1.1', [
      { n: 1, f: 'How is economics like a natural science, and how is it different?', b: 'Like: it uses models, assumptions, testable hypotheses and ceteris paribus.\nUnlike: people react to incentives and to theories, controlled experiments are rare, data are messy, and results are tendencies rather than laws.' },
      { n: 2, f: 'Positive vs normative statement', b: 'Positive: can be tested against evidence; it may turn out to be false.\nNormative: contains a value judgement about what ought to be; evidence alone cannot settle it.' },
      { n: 3, f: 'Why do economists disagree about the best policy?', b: 'They predict different consequences (different models or evidence), and they hold different value judgements (fairness, freedom, the role of the state), so they weigh the same outcomes differently.' },
      { n: 4, f: 'The three basic economic questions', b: 'What to produce (and how much), how to produce it (methods; the mix of labour and capital), and for whom (how output is shared).' },
      { n: 5, f: 'The four factors of production and their rewards', b: 'Land: rent.\nLabour: wages.\nCapital (man-made goods used to make other goods): interest.\nEnterprise (organising factors and bearing risk): profit.' },
      { n: 6, f: 'Scarcity and opportunity cost', b: 'Scarcity: limited resources against unlimited wants; it forces choices.\nOpportunity cost: the benefit of the next best (second-best) option given up, not the sum of everything rejected.' },
      { n: 7, f: 'A hectare earns 900 from wheat, 700 from barley or 650 from sheep. Wheat is chosen. Opportunity cost?', b: '700 per hectare: the barley, the next best option only.' },
      { n: 8, f: 'Production possibility diagram: points on, inside and outside the boundary', b: 'On: attainable with resources fully used (productively efficient).\nInside: attainable but resources unemployed or used inefficiently.\nOutside: unattainable with current resources and technology.' },
      { n: 9, f: 'A move along a PPD goes from (20 K, 90 C) to (50 K, 60 C). Opportunity cost of each extra unit of K?', b: 'Gain 30 K, lose 30 C, so each extra unit of K costs 30 ÷ 30 = 1 unit of C.' },
      { n: 10, f: 'PPD: what does an outward shift show, and what does a bowed-out shape show?', b: 'Outward shift: potential growth, from more or better resources or technology.\nBowed out: increasing opportunity cost, because resources are not equally suited to both uses. A straight line means constant opportunity cost.' },
      { n: 11, f: 'Productive vs allocative efficiency on a PPD', b: 'Productive efficiency: every point on the boundary.\nAllocative efficiency: only one boundary point (what society values most), and the diagram cannot show which one.' },
    ]),
    ...sub(MICRO, 'individual-economic-decision-making-aqa-alevel-economics', '3.1.2', [
      { n: 1, f: 'Rational economic agent', b: 'Someone who weighs costs and benefits, uses the information available and aims to maximise utility (consumers) or profit (firms).' },
      { n: 2, f: 'TU for 1 to 6 cups of tea is 60, 110, 150, 180, 200, 210. MU, and how many cups at a price of 35?', b: 'MU: 60, 50, 40, 30, 20, 10 (diminishing). At 35 she buys 3 cups: the third has MU 40, the fourth only 30. A lower price means more bought, so demand slopes down.' },
      { n: 3, f: 'Decisions at the margin, and why sunk costs are ignored', b: 'Do more while marginal benefit exceeds marginal cost; stop where MB = MC. Sunk costs cannot be recovered whatever is chosen, so they should not affect the decision.' },
      { n: 4, f: 'How can asymmetric information lead to market failure?', b: 'Sellers know quality better; buyers offer only an average price; owners of good items withdraw; average quality and price fall further; beneficial trades are lost.' },
      { n: 5, f: 'Bounded rationality vs bounded self-control', b: 'Bounded rationality: limited information, time and thinking ability, so people choose "good enough".\nBounded self-control: failing to act in line with long-run interests (overvaluing the present).' },
      { n: 6, f: 'Anchoring, availability bias and rules of thumb', b: 'Anchoring: the first figure seen sets the reference point.\nAvailability: easy-to-recall events seem more likely.\nRule of thumb: a simple shortcut, such as always buying the middle-priced item.' },
      { n: 7, f: 'Social norms, altruism and perceptions of fairness', b: 'Social norms: copying what others do or approve of.\nAltruism: caring about others\' welfare.\nFairness: rejecting outcomes seen as unjust, even at a cost to yourself.' },
      { n: 8, f: 'Choice architecture and nudges', b: 'Choice architecture: how options are presented and ordered.\nNudge: steering choices without banning options or changing incentives much, such as placing healthy food first.' },
      { n: 9, f: 'Default, restricted and mandated choice', b: 'Default: applies unless the person opts out (automatic pension enrolment).\nRestricted: limits the options available.\nMandated: requires an active decision.' },
    ]),
    ...sub(MICRO, 'price-determination-in-a-competitive-market-aqa-alevel-economics', '3.1.3', [
      { n: 1, f: 'Demand (AQA sense) and movement along vs shift', b: 'The quantity consumers will actually buy, with desire and ability to pay, at each price over a period.\nMovement along: only the good\'s own price changes. Shift: any other influence (income, tastes, prices of related goods).' },
      { n: 2, f: 'Inelastic vs inferior', b: 'Inelastic is about the size of a response (PED between 0 and −1).\nInferior is about the sign of YED (negative: demand falls as income rises). A good can be one without the other.' },
      { n: 3, f: 'Income rises by 4% and quantity demanded falls by 2%. YED and type of good?', b: 'YED = −2 ÷ 4 = −0.5. Negative, so an inferior good.' },
      { n: 4, f: 'Price of B rises by 10%; demand for A rises by 15%. XED, and how are A and B related?', b: 'XED = 15 ÷ 10 = +1.5. Positive, so substitutes (fairly close ones).' },
      { n: 5, f: 'Why does demand usually become more price elastic over time?', b: 'Given time, buyers find and switch to alternatives and change habits.' },
      { n: 6, f: 'Why does a firm\'s supply curve slope upwards (price-taking firm)?', b: 'A price taker produces where price = marginal cost, so its supply curve is its MC curve. A higher price makes extra units profitable (profit incentive) and attracts entrants.' },
      { n: 7, f: 'Determinants of price elasticity of supply', b: 'Time period, spare capacity, level of stocks, ease of switching factors between uses, and how quickly output can be raised.' },
      { n: 8, f: 'What happens when price is below equilibrium?', b: 'Excess demand (a shortage). Price is bid up; quantity supplied extends and quantity demanded contracts until the market clears.' },
      { n: 9, f: 'Joint demand, competitive demand, composite demand and derived demand', b: 'Joint: complements bought together.\nCompetitive: substitutes.\nComposite: a good with several uses (milk for drinking and cheese).\nDerived: demand for an input that comes from demand for the final good.' },
      { n: 10, f: 'Joint supply', b: 'Producing one good also produces another (by-products), such as beef and leather. More output of one raises supply of the other.' },
      { n: 11, f: 'Diagram: what happens to price and quantity when demand rises in a market with inelastic supply?', b: 'Demand shifts right. With steep (inelastic) supply, price rises a lot and quantity rises only a little. With elastic supply, quantity rises more and price less.' },
    ]),
    ...sub(MICRO, 'production-costs-and-revenue-aqa-alevel-economics', '3.1.4', [
      { n: 1, f: 'Specialisation and division of labour', b: 'Specialisation: concentrating on the tasks or goods you do best.\nDivision of labour: breaking production into separate tasks, one worker per task (specialisation inside a firm). Money as a medium of exchange makes specialisation possible.' },
      { n: 2, f: 'Law of diminishing returns', b: 'With another factor held fixed, each extra unit of a variable factor eventually adds less to output than the last. A short-run idea; marginal cost rises as marginal product falls.' },
      { n: 3, f: 'Diminishing returns vs returns to scale', b: 'Diminishing returns: short run, one input variable, others fixed.\nReturns to scale: long run, all inputs change in the same proportion.' },
      { n: 4, f: 'The cost formulae', b: 'TC = FC + VC.\nAFC = FC ÷ Q, AVC = VC ÷ Q, AC = TC ÷ Q = AFC + AVC.\nMC = ΔTC ÷ ΔQ (also ΔVC ÷ ΔQ).' },
      { n: 5, f: 'Internal vs external economies of scale', b: 'Internal: lower unit cost from the firm\'s own growth (technical, purchasing, managerial, financial, marketing, risk-bearing).\nExternal: lower unit cost from growth of the industry or area.' },
      { n: 6, f: 'Diseconomies of scale and minimum efficient scale', b: 'Diseconomies: unit cost rises as scale rises, often from communication, coordination and motivation problems.\nMES: the smallest output that reaches the lowest LRAC.' },
      { n: 7, f: 'Why is the short-run AC curve U-shaped but LRAC often shaped differently?', b: 'Short run: falling AFC then diminishing returns.\nLong run: economies then diseconomies of scale. LRAC may fall and then stay flat over a range.' },
      { n: 8, f: 'TR, AR and MR', b: 'TR = P × Q.\nAR = TR ÷ Q, which is the price.\nMR = ΔTR ÷ ΔQ, the extra revenue from one more unit sold.' },
      { n: 9, f: 'Normal profit vs supernormal (abnormal) profit', b: 'Normal profit: the least reward that keeps the entrepreneur in the activity; counted as a cost.\nSupernormal profit: profit above normal profit (TR above TC including normal profit).' },
      { n: 10, f: 'Invention vs innovation', b: 'Invention: discovering or creating a new idea, product or process.\nInnovation: the first commercial use of an invention.' },
      { n: 11, f: 'Creative destruction', b: 'New products, methods and firms replacing old ones, destroying existing markets and profits while creating new ones. Technological change can also lower costs and change market structure.' },
    ]),
    ...sub(MICRO, 'perfect-competition-imperfectly-competitive-markets-and-monopoly-aqa-alevel-economics', '3.1.5', [
      { n: 1, f: 'Profit maximisation rule, and the divorce of ownership from control', b: 'Produce where MC = MR, with MC crossing MR from below.\nDivorce of ownership from control: shareholders own the firm but managers run it, creating a principal-agent problem; managers may satisfice or pursue growth.' },
      { n: 2, f: 'Perfect competition: assumptions', b: 'Many producers, identical products, free entry and exit, perfect knowledge. Each firm is a price taker: its demand curve is horizontal at the market price (P = AR = MR).' },
      { n: 3, f: 'Perfect competition: short run to long run', b: 'Supernormal profit attracts entry; market supply shifts right; price falls until only normal profit is made (P = minimum AC). Losses cause exit until normal profit returns.' },
      { n: 4, f: 'Monopolistic competition', b: 'Many sellers of differentiated goods; easy entry and exit. Long run: normal profit only, demand tangent to AC, with excess capacity (output below the lowest-cost output) and P above MC.' },
      { n: 5, f: 'Oligopoly: structure vs conduct', b: 'Structure: a few dominant firms, high concentration, barriers to entry.\nConduct: firms behave interdependently, watching, matching, leading or colluding. A market can fit one description and not the other.' },
      { n: 6, f: 'Kinked demand curve', b: 'Rivals match a price cut but not a price rise, so demand is elastic above the current price and inelastic below it. MR has a gap at the kink, so price is sticky even if MC changes. It illustrates interdependence; it is not the only model.' },
      { n: 7, f: 'Collusion: overt vs tacit, and why cartels break down', b: 'Overt: an explicit agreement (a cartel). Tacit: an understanding, often through price leadership.\nCartels break down because each member gains by cheating, there are many firms or entrants, and collusion is illegal.' },
      { n: 8, f: 'Monopoly: output, price and efficiency', b: 'Output where MR = MC, price from the demand curve. Usually P above MC (allocatively inefficient) and possible supernormal profit. With large economies of scale, average cost may still be lower than under competition.' },
      { n: 9, f: 'Price discrimination: definition and conditions', b: 'Charging different prices for the same product where the difference is not due to cost. Needs market power, groups with different PED, and markets that can be kept separate (no resale).' },
      { n: 10, f: 'Static vs dynamic efficiency', b: 'Static: efficiency at a point in time, with technology and capital fixed (productive and allocative).\nDynamic: efficiency over time through R&D, investment and technological change.' },
      { n: 11, f: 'Sources of dynamic efficiency', b: 'R&D (new products and cheaper processes), investment in human capital (training and skills), investment in non-human capital (machines, software, premises) and technological change, which shifts the ATC curve down over time.', src: EFF },
      { n: 12, f: 'Contestable market and the role of sunk costs', b: 'A market in which possible entrants restrain incumbents\' prices and profits. It needs low sunk costs (money that cannot be got back on exit), which make hit-and-run entry possible.' },
    ]),
    ...sub(MICRO, 'the-labour-market-aqa-alevel-economics', '3.1.6', [
      { n: 1, f: 'Marginal revenue product (MRP)', b: 'The money value of the extra output of one more worker: MRP = MPP × MR. The MRP curve is the firm\'s demand curve for labour.' },
      { n: 2, f: 'What shifts the demand curve for labour?', b: 'Demand for the product (labour is a derived demand), labour productivity, and the price of capital that can substitute for labour. A change in the wage is a movement along.' },
      { n: 3, f: 'What shifts the supply of labour to an occupation?', b: 'Pay in other occupations, training and qualification requirements, migration, and non-monetary factors such as conditions, hours and job satisfaction.' },
      { n: 4, f: 'Monopsony: employment and wage', b: 'A single (or dominant) buyer of labour. Employment is set where MCL = MRP; the wage is read from the supply (AC of labour) curve at that employment, so wage and employment are below competitive levels.' },
      { n: 5, f: 'Trade union in a competitive labour market vs in monopsony', b: 'Competitive: a wage above equilibrium raises the wage but cuts employment.\nMonopsony: a union can raise both the wage and employment, up to a point.' },
      { n: 6, f: 'National minimum wage: effect in a competitive labour market', b: 'A price floor above equilibrium: labour supplied rises, labour demanded falls; unemployment = labour supplied minus labour demanded. Effect depends on elasticities and how far above equilibrium it is.' },
      { n: 7, f: 'Wage discrimination and occupational segregation', b: 'Wage discrimination: different pay for workers of equal productivity in the same job because of group membership.\nOccupational segregation: a group concentrated in particular, often lower-paid, occupations. A pay gap is not by itself proof of discrimination.' },
      { n: 8, f: 'Wage taker', b: 'A firm that must pay the market wage and cannot change it by hiring more or fewer workers, as in a perfectly competitive labour market.' },
      { n: 9, f: 'Bilateral monopoly', b: 'A single seller of labour (a union) facing a single buyer (a monopsony employer). The wage is decided by bargaining between the two limits.' },
    ]),
    ...sub(MICRO, 'the-distribution-of-income-and-wealth-poverty-and-inequality-aqa-alevel-economics', '3.1.7', [
      { n: 1, f: 'Income vs wealth', b: 'Income: receipts over a period (a flow): pay, profit, rent, interest, dividends, benefits.\nWealth: net assets at one moment (a stock): property, savings, shares, pension rights, minus debts.' },
      { n: 2, f: 'Equality vs equity', b: 'Equality: everyone has the same share.\nEquity: a distribution judged fair and just; it involves a value judgement.' },
      { n: 3, f: 'Lorenz curve and Gini coefficient', b: 'Lorenz curve: cumulative share of income held by households lined up poorest first, against the 45° line of perfect equality.\nGini: the gap between the curve and the diagonal divided by the whole triangle; 0 to 1. AQA requires interpreting it, not calculating it.' },
      { n: 4, f: 'Absolute vs relative poverty', b: 'Absolute: income below the level needed for basic necessities, fixed in real terms.\nRelative: income below a set share (often 60%) of the median income in that society.' },
      { n: 5, f: 'Causes of poverty and inequality', b: 'Unemployment and low pay, low skills and education, inheritance of wealth, age and family circumstances, regressive taxes, and changes in the labour market such as technology and globalisation.' },
      { n: 6, f: 'Tax-free up to 1,200, 30% above that. Is it progressive? Check with incomes of 3,000 and 6,000.', b: 'Income 3,000: tax 540, average rate 18%.\nIncome 6,000: tax 1,440, average rate 24%.\nThe average rate rises with income, so it is progressive.' },
      { n: 7, f: 'Means-tested vs universal benefits', b: 'Means-tested: paid only below an income or asset threshold; better targeted but with lower take-up and a poverty trap.\nUniversal: paid to a whole category regardless of income; simple, high take-up, but costly.' },
      { n: 8, f: 'Poverty trap and the effective marginal tax rate', b: 'Higher earnings bring little gain because benefits are withdrawn and tax is paid. Tax 25% plus benefit withdrawal 55% gives an effective marginal rate of 80%: the household keeps 20p of each extra pound.' },
      { n: 9, f: 'Benefits and costs of inequality', b: 'Some inequality gives incentives to work, train and take risks. Excessive inequality can reduce opportunity, social mobility and cohesion, and lower demand if the poor spend a higher share of income.' },
    ]),
    ...sub(MICRO, 'market-mechanism-market-failure-and-government-intervention-aqa-alevel-economics', '3.1.8', [
      { n: 1, f: 'Functions of the price mechanism', b: 'Rationing: price limits demand to the available supply.\nIncentive: price and profit changes reward a change in behaviour.\nSignalling: price changes carry information to buyers and sellers.' },
      { n: 2, f: 'Market failure: complete vs partial', b: 'Market failure: a market leads to a misallocation of resources.\nComplete: a missing market (it does not exist).\nPartial: the market exists but misallocates.' },
      { n: 3, f: 'Classifying goods by rivalry and excludability', b: 'Rival and excludable: private good.\nRival, non-excludable: common resource.\nNon-rival, excludable: quasi-public (club) good.\nNon-rival and non-excludable: pure public good.', src: PG },
      { n: 4, f: 'Free-rider problem', b: 'People can use a non-excludable good without paying, so few will pay and private firms cannot make a profit: the good may not be provided at all (a missing market).' },
      { n: 5, f: 'Diagram: positive consumption externality', b: 'MSB lies above MPB (demand). The market consumes Q1 where MPB = MPC; the social optimum Q*, where MSB = MSC, is higher. The welfare loss is the triangle between MSB and MSC from Q1 to Q*. It is under-consumed.' },
      { n: 6, f: 'Merit good vs demerit good', b: 'Merit good: judged to be good for people; under-consumed in a free market (education, vaccination).\nDemerit good: judged to be bad for people; over-consumed (cigarettes). Both rest on a value judgement and often on imperfect information.' },
      { n: 7, f: 'Legal vs economic incidence of an indirect tax', b: 'Legal incidence: who must pay the tax to government (sellers).\nEconomic incidence: who actually bears the burden. The less elastic side of the market bears more.' },
      { n: 8, f: 'Regulation vs tradable pollution permits', b: 'Regulation fixes what each firm may do. Permits fix the total quantity of pollution and let trading find the cheapest cuts.' },
      { n: 9, f: 'Competition policy: what does it target?', b: 'Keeping markets competitive and stopping abuse of market power: cartels, abuse of dominance (such as predatory pricing) and mergers that would reduce competition.' },
      { n: 10, f: 'Privatisation vs deregulation, and regulatory capture', b: 'Privatisation: transfer of a state-owned firm to private owners. Deregulation: removal or reduction of rules, often to ease entry.\nRegulatory capture: the regulator ends up serving the regulated industry, not the public.' },
      { n: 11, f: 'Government failure', b: 'Intervention that leads to a misallocation of resources (a net welfare loss), for example from poor information, unintended consequences, administrative costs, conflicting objectives or regulatory capture.' },
      { n: 12, f: 'Imperfect information as a market failure', b: 'Consumers who overestimate benefits over-consume; those who underestimate benefits (training, pensions) under-consume. Where perceived MB differs from true MB, welfare is lost.' },
    ]),

    // 2 The national and international economy
    ...sub(MACRO, 'the-measurement-of-macroeconomic-performance-aqa-alevel-economics', '3.2.1', [
      { n: 1, f: 'The four main macroeconomic objectives', b: 'Economic growth, price stability (low and stable inflation), minimising unemployment, and a stable balance of payments on current account. Others: balancing the budget and a more equitable income distribution; their importance changes over time.' },
      { n: 2, f: 'Match each indicator to its objective', b: 'Real GDP and real GDP per capita: growth and living standards.\nCPI and RPI: price stability.\nUnemployment measures: unemployment.\nCurrent account balance: external balance.\nProductivity: efficiency of resource use.' },
      { n: 3, f: 'A price index rises from 100 to 108. What does that mean?', b: 'Prices have risen by 8% relative to the base year (8 ÷ 100 × 100). An index number is relative, not an absolute value.' },
      { n: 4, f: 'Features of a price index such as CPI', b: 'A base year set to 100, a basket of goods and services representing typical household spending, and weights reflecting each item\'s share of spending.' },
      { n: 5, f: 'An index goes from 104.0 to 106.6. Inflation rate?', b: '(106.6 − 104.0) ÷ 104.0 × 100 = 2.5%. Divide by the old index, not 100, unless the old value is 100.' },
      { n: 6, f: 'Real GDP vs nominal GDP, and real GDP per capita', b: 'Real GDP is adjusted for inflation (measured at constant prices); nominal is at current prices.\nReal GDP per capita = real GDP ÷ population, a broad living-standards indicator.' },
      { n: 7, f: 'Limits of national income data as a measure of living standards', b: 'It ignores the distribution of income, the informal (hidden) economy, externalities such as pollution, and non-marketed activity such as unpaid work.' },
      { n: 8, f: 'Why use purchasing power parity (PPP) for international comparisons?', b: 'PPP exchange rates adjust for differences in the cost of living, so they show what income can actually buy. Market exchange rates do not.' },
    ]),
    ...sub(MACRO, 'how-the-macroeconomy-works-aqa-alevel-economics', '3.2.2', [
      { n: 1, f: 'Injections and withdrawals in the circular flow', b: 'Injections: investment, government spending, exports.\nWithdrawals: saving, taxation, imports.' },
      { n: 2, f: 'Equilibrium national income (circular flow)', b: 'Planned injections equal planned withdrawals, so the flow is steady and income is not changing.', src: CF },
      { n: 3, f: 'Full employment income', b: 'Income when every available resource is in use. Equilibrium can settle below it (spare capacity). Spending that pushes demand beyond it cannot raise real output further, so it puts pressure on prices.', src: CF },
      { n: 4, f: 'Aggregate demand and its components', b: 'Spending plans for the whole economy\'s output at each possible price level.\nAD = C + I + G + (X − M).' },
      { n: 5, f: 'Determinants of consumption and investment', b: 'Consumption: income, interest rates, wealth, confidence, availability of credit.\nInvestment: expected demand (the accelerator), interest rates, business confidence, technology, availability of finance.' },
      { n: 6, f: 'The multiplier and the MPC', b: 'Multiplier = final change in income ÷ initial change in spending.\nMPC = change in consumption ÷ change in income. Simple multiplier = 1 ÷ (1 − MPC) = 1 ÷ MPW in a closed economy without tax.' },
      { n: 7, f: 'MPC is 0.75 (no tax or trade). Investment rises by 20bn. Final change in income?', b: 'Multiplier = 1 ÷ (1 − 0.75) = 4. Income rises by 4 × 20 = 80bn, if there is spare capacity.' },
      { n: 8, f: 'SRAS vs LRAS (AQA definitions)', b: 'SRAS: the output firms will supply at each price level while costs are given; shifted by changes in costs.\nLRAS: output at normal capacity, set by the quantity and quality of resources.' },
      { n: 9, f: 'Keynesian AS curve', b: 'Flat when there is a lot of spare capacity, rising as bottlenecks appear, vertical at full capacity. So the effect of a rise in AD on real output depends on where the economy is.' },
      { n: 10, f: 'Diagram: a demand-side shock that lowers AD', b: 'Price level on the vertical axis, real output on the horizontal. AD shifts left along an upward-sloping SRAS: the price level and real output both fall.' },
      { n: 11, f: 'Diagram: a supply-side shock such as a rise in oil prices', b: 'SRAS shifts left (up). The price level rises and real output falls along the existing AD curve: cost-push inflation with lower output.' },
    ]),
    ...sub(MACRO, 'economic-performance-aqa-alevel-economics', '3.2.3', [
      { n: 1, f: 'Short-run vs long-run economic growth', b: 'Short run: rising actual output, usually from higher AD using spare capacity.\nLong run: rising productive capacity (LRAS or the PPC shifting outward); the trend rate.' },
      { n: 2, f: 'Output gap: actual 612, potential 600, and actual 585, potential 600', b: '(612 − 600) ÷ 600 = +2.0%, a positive gap.\n(585 − 600) ÷ 600 = −2.5%, a negative gap. Always divide by potential output.' },
      { n: 3, f: 'Nominal GDP grows 6.0% and prices rise 2.5%. Real growth?', b: '1.060 ÷ 1.025 − 1 = 3.4%.' },
      { n: 4, f: 'The economic cycle', b: 'Fluctuations of actual output around the trend: boom, downturn, recession, recovery. Caused by demand-side and supply-side shocks, which may be domestic or global.' },
      { n: 5, f: 'ILO (LFS) measure vs claimant count', b: 'LFS: a survey using the ILO test: no job, available to start within two weeks, looked for work in the last four weeks.\nClaimant count: people claiming an unemployment-related benefit, which misses unemployed people not entitled to or not claiming benefit.' },
      { n: 6, f: 'Frictional, structural and cyclical unemployment', b: 'Frictional: between jobs, searching and matching.\nStructural: skills or location do not match vacancies after demand changes.\nCyclical: too little aggregate demand overall (demand-deficient).' },
      { n: 7, f: 'Natural rate of unemployment', b: 'Unemployment when the economy is at potential output: frictional and structural, with no cyclical element. The gap between actual and natural is cyclical unemployment.' },
      { n: 8, f: 'Deflation vs disinflation', b: 'Deflation: the price level is falling.\nDisinflation: the rate of inflation is falling but prices are still rising (3.0% then 2.1% then 1.2%).' },
      { n: 9, f: 'Quantity theory of money: MV = PQ. M = 250, V = 4, Q = 500. What is P, and what if M rises 10%?', b: 'MV = 1,000, so P = 1,000 ÷ 500 = 2.0. With M = 275, MV = 1,100 and P = 2.2, also +10%. The monetarist result assumes V is stable and Q fixed in the long run.' },
      { n: 10, f: 'Who gains and loses from unexpected inflation?', b: 'Lose: savers when interest is below inflation, people on fixed incomes, workers whose pay lags.\nGain: borrowers with fixed debts. Firms face menu costs, uncertainty and lost competitiveness.' },
      { n: 11, f: 'Short-run vs long-run Phillips curve', b: 'SRPC: downward-sloping trade-off between inflation (vertical) and unemployment (horizontal), for given expectations.\nLRPC: vertical at the natural rate of unemployment: in the long run there is no trade-off.' },
      { n: 12, f: 'Benign vs malign deflation', b: 'Benign: falling prices caused by rising supply capacity (productivity, technology).\nMalign: falling prices caused by collapsing aggregate demand, with falling output and jobs.' },
    ]),
    ...sub(MACRO, 'financial-markets-and-monetary-policy-aqa-alevel-economics', '3.2.4', [
      { n: 1, f: 'The functions of money', b: 'Medium of exchange, store of value, unit of account and standard of deferred payment.' },
      { n: 2, f: 'Narrow vs broad money', b: 'Narrow: notes and coins (and, in many definitions, banks\' balances at the central bank); the most liquid.\nBroad: narrow money plus other bank and building society deposits.' },
      { n: 3, f: 'Bond yield: formula and example', b: 'Yield = annual coupon ÷ market price × 100. Coupon 7 per 100 nominal at a price of 112: 6.25%. At a price of 70: 10%.' },
      { n: 4, f: 'Why do bond prices fall when market interest rates rise?', b: 'The coupon is fixed. New bonds offer more, so demand for existing bonds falls and their price drops until their yield matches the market rate.' },
      { n: 5, f: 'Money market, capital market and foreign exchange market', b: 'Money market: short-term borrowing and lending.\nCapital market: long-term finance through shares and bonds (primary for new issues, secondary for trading existing ones).\nForex market: buying and selling currencies.' },
      { n: 6, f: 'Commercial bank vs investment bank', b: 'Commercial: takes deposits and lends, mainly to households and firms; runs payments.\nInvestment: serves large clients with advice on takeovers, raising finance through shares and bonds, and trading.' },
      { n: 7, f: 'Credit creation, and liquidity vs capital', b: 'When banks lend they create new deposits.\nLiquidity: the ability to meet payments when due. Capital: the owners\' stake that absorbs losses.' },
      { n: 8, f: 'Systemic risk vs moral hazard in banking', b: 'Systemic risk: trouble at one institution spreads and threatens the whole system.\nMoral hazard: riskier behaviour when another party (such as the state) carries part of the downside.' },
      { n: 9, f: 'Monetary Policy Committee and the inflation target', b: 'The Bank of England\'s MPC votes on Bank Rate to meet the government-set target of 2% CPI inflation. The government sets the target; the MPC pursues it.' },
      { n: 10, f: 'Monetary transmission mechanism after a rise in Bank Rate', b: 'Market rates rise; borrowing is dearer and saving more rewarding, so C and I fall; asset prices and confidence fall; the pound tends to appreciate, cutting net exports. AD falls, easing inflation after a lag.' },
      { n: 11, f: 'Quantitative easing', b: 'The central bank creates electronic reserves to buy assets, mainly gilts. This raises bond prices, lowers long-term interest rates and aims to raise spending. It is not printing banknotes.' },
      { n: 12, f: 'Nominal rate 6% and inflation 2%: real interest rate?', b: 'Exactly 1.06 ÷ 1.02 − 1 = 3.92% (about 4%). If the nominal rate is below inflation, the real rate is negative and savers lose.' },
    ]),
    ...sub(MACRO, 'fiscal-policy-and-supply-side-policies-aqa-alevel-economics', '3.2.5', [
      { n: 1, f: 'Fiscal policy: macro and micro functions', b: 'Manipulating government spending, taxation and the budget balance.\nMacro: influence AD, growth, jobs, inflation and the external balance.\nMicro: change outcomes in particular markets or for particular groups.' },
      { n: 2, f: 'Current vs capital government spending, and transfer payments', b: 'Current: day-to-day running costs of services.\nCapital: spending on lasting assets.\nTransfers: income moved without buying output (pensions, benefits); they affect AD only when spent.' },
      { n: 3, f: 'Direct vs indirect tax', b: 'Direct: on income, profit or wealth; borne by the person taxed.\nIndirect: on spending; collected by sellers and partly passed on to buyers.' },
      { n: 4, f: 'Budget deficit vs national debt', b: 'Deficit: spending greater than revenue in a period (a flow), which is borrowed.\nNational debt: everything the government owes on one date (a stock). A deficit adds to the debt.' },
      { n: 5, f: 'Cyclical vs structural deficit', b: 'Cyclical: caused by the economic cycle; reverses as output returns to potential.\nStructural: remains when output is at potential; needs a policy change to remove.' },
      { n: 6, f: 'Automatic stabilisers vs discretionary fiscal policy', b: 'Automatic stabilisers: tax receipts and benefit spending change with the cycle with no decision, cushioning AD.\nDiscretionary: a deliberate change in tax rates or spending.' },
      { n: 7, f: 'Crowding out', b: 'Government borrowing raises interest rates and reduces private investment, or public activity uses resources the private sector would have used.' },
      { n: 8, f: 'Supply-side improvement vs supply-side policy', b: 'Improvement: any rise in productive capacity or efficiency, from any source (often private firms).\nPolicy: deliberate government action to bring one about.' },
      { n: 9, f: 'Free-market vs interventionist supply-side policies', b: 'Free-market: remove obstacles and strengthen incentives and competition: tax cuts, deregulation, privatisation, labour market reform.\nInterventionist: government acts directly: education, training, infrastructure, R&D support.' },
      { n: 10, f: 'Why do supply-side policies matter for the Phillips curve?', b: 'They lower the natural rate of unemployment and raise the trend rate of growth, shifting LRAS right, so growth and low unemployment can be had without rising inflation. Most effects take years.' },
      { n: 11, f: 'Office for Budget Responsibility (OBR)', b: 'An independent body that produces economic and fiscal forecasts and assesses the public finances.' },
    ]),
    ...sub(MACRO, 'the-international-economy-aqa-alevel-economics', '3.2.6', [
      { n: 1, f: 'Globalisation and its causes', b: 'The growing integration of national economies as goods, services, capital, labour, technology and ideas cross borders. Causes: trade liberalisation, lower transport and communication costs, growth of MNCs, freer capital flows.' },
      { n: 2, f: 'Multinational corporation and FDI', b: 'MNC: a firm with operations it owns or controls in two or more countries.\nFDI: money put into owning or building productive assets abroad, giving lasting control; portfolio investment buys shares or bonds without control.' },
      { n: 3, f: 'Absolute vs comparative advantage', b: 'Absolute: needs fewer inputs for a good; one country can have it in every good.\nComparative: gives up less of the other good (lower opportunity cost); decides who should specialise.' },
      { n: 4, f: 'Tariff vs quota', b: 'Tariff: a tax on imports, raising the price by a set amount; earns government revenue.\nQuota: fixes the quantity of imports and lets the price adjust; foreign suppliers may gain the quota rent.' },
      { n: 5, f: 'Free trade area vs customs union vs single market', b: 'Free trade area: no tariffs between members.\nCustoms union: free trade plus a common external tariff.\nSingle market: also free movement of goods, services, capital and labour, with common standards.' },
      { n: 6, f: 'The current account of the balance of payments', b: 'Trade in goods, trade in services, primary income (profits, interest, dividends, cross-border wages) and secondary income (one-way transfers: remittances, aid). The accounts sum to zero, so a "deficit" means the current account.' },
      { n: 7, f: 'Expenditure-reducing vs expenditure-switching policies', b: 'Reducing: cut total demand and so imports (higher taxes, higher interest rates).\nSwitching: move spending from imports to domestic output (depreciation, protectionism).' },
      { n: 8, f: 'Freely floating vs fixed vs managed exchange rates', b: 'Floating: set by market demand and supply.\nFixed (pegged): the government commits to a central rate and defends it with reserves and interest rates.\nManaged float: floating, with occasional central bank intervention.' },
      { n: 9, f: 'Marshall-Lerner condition and the J-curve', b: 'A depreciation improves the current account only if the sum of the price elasticities of demand for exports and imports exceeds 1. In the short run demand is inelastic, so the balance first worsens, then improves (J-curve).' },
      { n: 10, f: 'Currency union: costs and benefits', b: 'Benefits: no transaction costs or exchange rate uncertainty within the union, price transparency.\nCosts: one interest rate for all members, no exchange rate to absorb shocks, loss of independent monetary policy.' },
      { n: 11, f: 'Economic growth vs economic development', b: 'Growth: a rise in real output (real GDP or real GDP per capita).\nDevelopment: a wider improvement in living standards: health, education, income, freedom, lower poverty. The HDI combines health, education and income.' },
      { n: 12, f: 'Barriers to growth and development', b: 'Corruption and weak institutions, poor infrastructure, low human capital, primary product dependency, debt, capital flight, and a large informal sector.' },
    ]),
  ],
};
