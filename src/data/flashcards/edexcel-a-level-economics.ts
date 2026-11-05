/**
 * D-438 -- flashcards for Pearson Edexcel International A Level Economics YEC11
 * (Issue 2, June 2018).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs YEC11); origin 'revision-notes'.
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

const T1 = 'markets-in-action-edexcel-alevel-economics';
const T2 = 'macroeconomic-performance-and-policy-edexcel-alevel-economics';
const T3 = 'business-behaviour-edexcel-alevel-economics';
const T4 = 'developments-in-the-global-economy-edexcel-alevel-economics';

const RC = 'edexcel-ial-economics-rational-choice-demand-and-the-elasticities-of-demand-revision-notes';

export const DECK_EDEXCEL_A_LEVEL_ECONOMICS: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'a-level',
  subjectSlug: 'economics',
  syllabusCode: 'YEC11',
  syllabusSeries: 'Issue 2, June 2018',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // 1 Markets in action
    ...sub(T1, 'introductory-concepts-edexcel-alevel-economics', '1.3.1', [
      { n: 1, f: 'Positive statement vs normative statement', b: 'Positive: can be tested against evidence (true or false).\nNormative: a value judgement about what ought to be. A statement with a number in it is still normative if it says "should".' },
      { n: 2, f: 'Why is economics called a social science, and what does ceteris paribus mean?', b: 'It studies human behaviour and cannot normally run controlled experiments on whole economies.\nCeteris paribus: other things held equal while one variable changes, so a model can isolate one relationship.' },
      { n: 3, f: 'Opportunity cost', b: 'The next best alternative forgone when a choice is made. Not the money cost, and not all the alternatives.' },
      { n: 4, f: 'A farmer has 100 hours. A tonne of potatoes takes 10 hours, a tonne of onions 4 hours. Opportunity cost of 1 tonne of potatoes?', b: 'Maximum potatoes 10 t, maximum onions 25 t. 1 t of potatoes costs 25 ÷ 10 = 2.5 t of onions (and 1 t of onions costs 0.4 t of potatoes).' },
      { n: 5, f: 'Free good vs economic good', b: 'Free good: no opportunity cost in use, so a zero price clears the market.\nEconomic good: scarce, uses resources and has an opportunity cost.' },
      { n: 6, f: 'PPF: what does a movement along it, an outward shift and a point inside it show?', b: 'Movement along: resources reallocated between the two goods (opportunity cost is the slope).\nOutward shift: productive potential rises.\nPoint inside: idle or inefficiently used resources. Moving to the frontier is not growth.' },
      { n: 7, f: 'Why is a PPF usually bowed out (concave to the origin)?', b: 'Resources are not equally suited to both goods, so the marginal opportunity cost of making more of one good rises. A straight-line PPF means constant opportunity cost.' },
      { n: 8, f: 'The four functions of money', b: 'Medium of exchange, measure (unit) of value, store of value, and method (standard) of deferred payment. Inflation erodes the store of value.' },
    ]),
    ...sub(T1, 'consumer-behaviour-and-demand-edexcel-alevel-economics', '1.3.2', [
      { n: 1, f: 'Rational choice: the standard assumption', b: 'Consumers maximise utility; firms maximise profit.', src: RC },
      { n: 2, f: 'Movement along a demand curve vs shift of it', b: 'Movement along: the result of a change in the good\'s own price and nothing else.\nShift: caused by anything else. A shift right means more is demanded at every price.', src: RC },
      { n: 3, f: 'Diminishing marginal utility and the demand curve', b: 'Each extra unit adds less utility, so a consumer will pay less for it, and the individual demand curve slopes down.', src: RC },
      { n: 4, f: 'Give four reasons consumers may not maximise utility', b: 'Any four of: herding (copying the crowd), habit, inertia (not switching to a better deal), poor computational skills, the need to feel valued, framing and bias.' },
      { n: 5, f: 'PED, YED and XED: formulae and what the sign tells you', b: 'PED = %ΔQd ÷ %Δ own price (usually negative).\nYED = %ΔQd ÷ %Δ income (positive = normal, negative = inferior).\nXED = %ΔQd of A ÷ %Δ price of B (positive = substitutes, negative = complements).' },
      { n: 6, f: 'Price rises from 1.20 to 1.32; quantity falls from 900 to 855. PED, and what happens to revenue?', b: 'Price +10%, quantity −5%, PED = −5 ÷ 10 = −0.5 (inelastic). Revenue rises from 1,080 to 1,128.60, as inelastic demand predicts.' },
      { n: 7, f: 'PED and total revenue after a price rise', b: 'Inelastic (0 to −1): revenue rises.\nUnitary (−1): unchanged.\nElastic (below −1): revenue falls.' },
      { n: 8, f: 'Why is PED not constant along a straight-line demand curve?', b: 'The slope is constant but the percentage changes are not. The upper section is elastic, the midpoint is unitary and the lower section is inelastic. Revenue peaks where PED = −1.' },
      { n: 9, f: 'Why does PED matter to government?', b: 'Indirect taxes raise more revenue on inelastic goods but change behaviour less; elastic goods respond more but yield less. YED helps plan for services as incomes shift.', src: RC },
    ]),
    ...sub(T1, 'supply-edexcel-alevel-economics', '1.3.3', [
      { n: 1, f: 'Extension of supply vs increase in supply', b: 'Extension: a movement along the supply curve caused only by a change in the good\'s own price.\nIncrease: the whole curve shifts right because some other factor changed (costs, technology, subsidy, number of firms).' },
      { n: 2, f: 'PES formula and the five values', b: 'PES = % change in quantity supplied ÷ % change in price.\n0 perfectly inelastic; 0–1 inelastic; 1 unitary; above 1 elastic; infinity perfectly elastic.' },
      { n: 3, f: 'Price rises from 40 to 50 and quantity supplied from 200 to 210. PES?', b: 'Price +25%, quantity +5%. PES = 5 ÷ 25 = 0.2, inelastic.' },
      { n: 4, f: 'Straight-line supply curves: which way round tells you PES?', b: 'Through the origin: PES = 1 everywhere.\nMeets the price axis first: PES above 1 everywhere.\nMeets the quantity axis first: PES below 1 everywhere.' },
      { n: 5, f: 'Factors that make supply more price elastic', b: 'Spare capacity, stocks of finished goods, mobile factors of production, and a longer time period (the long run, when all factors can change).' },
      { n: 6, f: 'Specific tax vs ad valorem tax: effect on the supply curve', b: 'Specific (fixed sum per unit): parallel shift up/left by the tax.\nAd valorem (percentage of price): the curve pivots, so the gap widens at higher prices.' },
    ]),
    ...sub(T1, 'price-determination-edexcel-alevel-economics', '1.3.4', [
      { n: 1, f: 'Market equilibrium', b: 'Quantity demanded equals quantity supplied, so price has no tendency to change.' },
      { n: 2, f: 'Price is set above equilibrium. What happens?', b: 'Excess supply: quantity supplied exceeds quantity demanded. Unsold stock builds up, sellers cut price, quantity demanded extends and supply contracts until equilibrium is restored.' },
      { n: 3, f: 'The three functions of the price mechanism', b: 'Rationing (a higher price limits demand to scarce supply), incentive (a higher price encourages more supply) and signalling (price changes tell buyers and sellers about scarcity).' },
      { n: 4, f: 'Consumer surplus and producer surplus', b: 'Consumer surplus: willingness to pay minus price paid; area under demand, above price.\nProducer surplus: price received minus the minimum supply price; area above supply, below price.' },
      { n: 5, f: 'Demand is P = 50 − Q and the price is 20. Consumer surplus?', b: 'Q = 30. Consumer surplus = ½ × 30 × (50 − 20) = 450.' },
      { n: 6, f: 'Who bears more of an indirect tax?', b: 'Whichever side is less price elastic. With inelastic demand, most of the tax is passed on to consumers as a higher price. Sellers are legally liable, but incidence is shared by elasticity. Tax revenue = tax per unit × the new quantity.' },
    ]),
    ...sub(T1, 'market-failure-edexcel-alevel-economics', '1.3.5', [
      { n: 1, f: 'Market failure', b: 'The market quantity is above or below the level that is best for society, so resources are misallocated.' },
      { n: 2, f: 'Externality, and the social cost and benefit identities', b: 'A cost or benefit to third parties that is not reflected in the market price.\nMSC = MPC + MEC. MSB = MPB + MEB.' },
      { n: 3, f: 'Diagram: negative production externality', b: 'Price on the vertical axis, quantity on the horizontal. MSC lies above MPC (= supply). The market produces Qm where MPC = MPB; the social optimum Qs, where MSC = MSB, is lower. The welfare loss is the triangle between MSC and MSB from Qs to Qm.' },
      { n: 4, f: 'Public good: the two characteristics and the problem they cause', b: 'Non-rival (one person\'s use does not reduce another\'s) and non-excludable (non-payers cannot be stopped from using it). Free riders will not pay, so the market may not provide it at all.' },
      { n: 5, f: 'Asymmetric information and moral hazard', b: 'Asymmetric information: one side of a deal knows more than the other.\nMoral hazard: taking more risk because someone else bears some of the cost. Say who bears it.' },
      { n: 6, f: 'Market bubble', b: 'A sustained rise in price well above fundamental value, driven by expectations of further rises (speculation).' },
    ]),
    ...sub(T1, 'government-intervention-in-markets-edexcel-alevel-economics', '1.3.6', [
      { n: 1, f: 'Maximum price vs minimum price: where must each be set to work, and what does it cause?', b: 'Maximum price: below equilibrium; causes excess demand (a shortage), possibly black markets.\nMinimum price: above equilibrium; causes excess supply (a surplus).' },
      { n: 2, f: 'Diagram: a subsidy on a good with external benefits', b: 'The supply curve shifts down (right) by the subsidy per unit. Price falls and quantity rises towards the social optimum. The cost to government is subsidy × new quantity, which is not the welfare gain.' },
      { n: 3, f: 'Tradeable pollution permits vs a pollution tax', b: 'Permits (cap and trade) fix the quantity of pollution and let the permit price adjust. A tax fixes the price of polluting and lets the quantity adjust.' },
      { n: 4, f: 'Government failure', b: 'Intervention that results in a net welfare loss. Not every side effect is government failure: welfare must fall overall.' },
      { n: 5, f: 'Causes of government failure', b: 'Distortion of price signals, unintended consequences, excessive administrative costs and information gaps (for example, not knowing the size of an external cost).' },
      { n: 6, f: 'Property rights as a solution to market failure', b: 'Legal ownership lets the owner exclude others and gain or lose from use, so the owner has an incentive to protect a resource or to charge for damage to it.' },
    ]),

    // 2 Macroeconomic performance and policy
    ...sub(T2, 'measures-of-economic-performance-edexcel-alevel-economics', '2.3.1', [
      { n: 1, f: 'GDP vs GNI', b: 'GDP: the value of goods and services produced within a country\'s borders.\nGNI: income earned by a country\'s residents and businesses wherever it was earned. Profit sent abroad by foreign-owned firms reduces GNI, not GDP.' },
      { n: 2, f: 'Real vs nominal, and why use per capita and PPP figures?', b: 'Real figures are adjusted to remove inflation; nominal are not.\nPer capita divides by population to compare countries of different size.\nPPP adjusts for differences in the cost of living.' },
      { n: 3, f: 'Recession (Edexcel definition)', b: 'Two consecutive quarters of negative economic growth (falling real GDP). One negative quarter is not a recession.' },
      { n: 4, f: 'Country A: real GDP $2 trillion, population 200 million. Country B: $500 billion, 20 million. Which has the higher real GDP per capita?', b: 'A: $10,000 per head. B: $25,000 per head. B is higher, although A\'s total GDP is four times larger.' },
      { n: 5, f: 'Limits of GDP as a measure of living standards', b: 'It ignores income distribution, non-market activity (unpaid work), environmental costs and subjective wellbeing. Beyond a certain income, extra income is less strongly linked to reported happiness.' },
      { n: 6, f: 'How is inflation measured, and the inflation rate from an index?', b: 'By the consumer prices index (CPI): a weighted basket of goods and services bought by households.\nInflation rate = (new index − old index) ÷ old index × 100. CPI 131.0 to 134.9 is a 3.0% rise.' },
      { n: 7, f: 'The unemployment rate, and two ways unemployment is measured', b: 'Unemployed ÷ labour force × 100 (labour force = employed + unemployed).\nThe ILO (Labour Force Survey) measure counts those without work, available and seeking it. The claimant count counts those claiming unemployment-related benefits.' },
      { n: 8, f: 'Demand-pull vs cost-push inflation', b: 'Demand-pull: aggregate demand grows faster than the economy\'s capacity to supply.\nCost-push: rising costs (wages, raw materials, import prices) shift short-run aggregate supply left.' },
    ]),
    ...sub(T2, 'aggregate-demand-edexcel-alevel-economics', '2.3.2', [
      { n: 1, f: 'Aggregate demand: definition and components', b: 'Total planned spending on a country\'s output at a given price level in a given period.\nAD = C + I + G + (X − M).' },
      { n: 2, f: 'Why are transfer payments left out of G?', b: 'G is state spending on goods and services. Transfers such as pensions and benefits buy no output in return; they show up in AD only when recipients spend them (in C).' },
      { n: 3, f: 'Gross investment 80, depreciation 50. Net investment? And if gross were 40?', b: 'Net = 80 − 50 = 30. With gross 40, net = −10 and the capital stock shrinks. Only positive net investment raises capacity.' },
      { n: 4, f: 'Influences on consumption', b: 'Disposable income, interest rates (cost of borrowing and reward for saving), consumer confidence, wealth effects (house and share prices) and the availability of credit.' },
      { n: 5, f: 'The accelerator', b: 'Investment depends on the rate of change of output (demand), not its level. When demand growth slows, net investment can fall even though output is still rising.' },
      { n: 6, f: 'Movement along the AD curve vs shift of AD', b: 'Movement along: caused only by a change in the price level.\nShift: caused by a change in any component (C, I, G, X or M) at every price level, for example a cut in interest rates.' },
    ]),
    ...sub(T2, 'aggregate-supply-edexcel-alevel-economics', '2.3.3', [
      { n: 1, f: 'SRAS vs LRAS', b: 'SRAS: aggregate supply in the period when at least one factor, usually capital, is fixed; shifted by costs.\nLRAS: the economy\'s productive capacity when all factors can change; shifted by capacity.' },
      { n: 2, f: 'What shifts SRAS?', b: 'Changes in firms\' costs at every price level: wage rates, raw material and energy prices, the exchange rate (import prices), indirect taxes and productivity.' },
      { n: 3, f: 'What shifts LRAS?', b: 'Changes in the quantity or quality of factors of production: technology, education and skills, investment in capital, migration, institutions. Education shifts LRAS, not SRAS.' },
      { n: 4, f: 'Keynesian vs classical LRAS curve', b: 'Classical: vertical at full-capacity output.\nKeynesian: three sections: horizontal (lots of spare capacity), upward-sloping (bottlenecks), then vertical at full capacity.' },
      { n: 5, f: 'A higher price level: does it shift AS?', b: 'No. A change in the price level causes a movement along AS. A shift needs a change in costs or capacity.' },
    ]),
    ...sub(T2, 'national-income-edexcel-alevel-economics', '2.3.4', [
      { n: 1, f: 'Income vs wealth', b: 'Income is a flow: the amount received per period.\nWealth is a stock: the value of assets owned at a point in time.' },
      { n: 2, f: 'Injections and withdrawals in the circular flow', b: 'Injections: investment (I), government spending (G), exports (X).\nWithdrawals: saving (S), taxation (T), imports (M). Saving and tax are not injections.' },
      { n: 3, f: 'Multiplier: definition', b: 'The final change in real national income divided by the initial change in injections. Each round of spending becomes income, part is re-spent, and the rounds shrink.' },
      { n: 4, f: 'Multiplier formulae', b: 'Full: k = 1 ÷ MPW, where MPW = MPS + MPT + MPM.\nSimple (no tax or trade): k = 1 ÷ (1 − MPC) = 1 ÷ MPS.\nChange in income = k × change in injection.' },
      { n: 5, f: 'MPS 0.2, MPT 0.1, MPM 0.2. Government spending rises by 12bn. Change in income?', b: 'MPW = 0.5, so k = 2. Income rises by 2 × 12 = 24bn. Tax revenue rises by 0.1 × 24 = 2.4bn, so the net cost is 9.6bn.' },
      { n: 6, f: 'Equilibrium real output, and the evaluation point on the multiplier', b: 'Where AD = AS (planned injections = planned withdrawals).\nThe multiplier is smaller when there is little spare capacity (prices rise instead of output), and its size depends on confidence and leakages.' },
    ]),
    ...sub(T2, 'economic-growth-edexcel-alevel-economics', '2.3.5', [
      { n: 1, f: 'Actual growth vs potential growth', b: 'Actual: the percentage change in real GDP.\nPotential: the rate of increase in productive capacity (LRAS or the PPF shifting outwards).' },
      { n: 2, f: 'Output gap: formula, positive and negative', b: 'Output gap = (actual − potential) ÷ potential × 100.\nPositive: actual above potential (inflationary pressure).\nNegative: actual below potential (spare capacity, unemployment).' },
      { n: 3, f: 'Actual output 485, potential output 500. Output gap?', b: '(485 − 500) ÷ 500 × 100 = −3%, a negative output gap. Divide by potential, not actual.' },
      { n: 4, f: 'Causes of economic growth', b: 'Short run: rising AD (C, I, G or net exports, for example export-led growth).\nLong run: more or better factors: investment, productivity, technology, a larger labour force (net migration), FDI.' },
      { n: 5, f: 'Costs of economic growth', b: 'Environmental damage and resource depletion, wider income inequality, inflation if AD outstrips capacity, and current account deficits as imports rise. The effect depends on the source of the growth.' },
      { n: 6, f: 'Trend growth', b: 'The long-term average rate of growth of productive capacity. Growth is a recovery only if actual output is catching up on the trend.' },
    ]),
    ...sub(T2, 'macroeconomic-objectives-and-policies-edexcel-alevel-economics', '2.3.6', [
      { n: 1, f: 'The main macroeconomic objectives', b: 'Economic growth, low and stable inflation, low unemployment, current account equilibrium, a balanced budget, greater income equality, and protecting the environment.' },
      { n: 2, f: 'Fiscal vs monetary policy', b: 'Fiscal: changes to government spending and taxation.\nMonetary: changes to the price, availability or quantity of money and credit, such as the policy interest rate and quantitative easing.' },
      { n: 3, f: 'Quantitative easing (QE)', b: 'The central bank creates money to buy assets, mainly government bonds, lowering long-term interest rates and raising spending. It is not printing notes.' },
      { n: 4, f: 'What happens to AD when the central bank cuts interest rates?', b: 'Borrowing is cheaper and saving less rewarding, so C and I rise; mortgage payments fall; the currency may depreciate, raising net exports. AD shifts right. Lags and confidence affect the size.' },
      { n: 5, f: 'Short-run Phillips curve', b: 'Unemployment on the horizontal axis, inflation on the vertical; downward sloping. A change in AD moves the economy along it. A supply shock or higher expected inflation shifts it outwards.' },
      { n: 6, f: 'Free-market vs interventionist supply-side policies', b: 'Free-market: cutting taxes, deregulation, privatisation, reducing trade union power, cutting benefits.\nInterventionist: spending on education, training, infrastructure, and subsidies for investment.' },
      { n: 7, f: 'Real interest rate', b: 'Nominal interest rate − inflation rate. A 5% rate with 3% inflation is a real rate of about 2%.' },
    ]),

    // 3 Business behaviour
    ...sub(T3, 'types-and-sizes-of-businesses-edexcel-alevel-economics', '3.3.1', [
      { n: 1, f: 'Not-for-profit organisation', b: 'An organisation whose surplus is reinvested in its purpose (social or charitable aim) rather than paid to owners. It can still earn a surplus.' },
      { n: 2, f: 'Organic growth vs merger vs takeover', b: 'Organic: growth from within, often funded by retained profit; slow, low risk.\nMerger: agreed combination of firms.\nTakeover: purchase of control of another firm, agreed or hostile.' },
      { n: 3, f: 'Horizontal, vertical and conglomerate integration', b: 'Horizontal: same stage, same industry.\nVertical: a different stage of the same chain (forward towards customers, backward towards suppliers).\nConglomerate: an unrelated industry.' },
      { n: 4, f: 'Profit, revenue and sales maximisation: the conditions', b: 'Profit maximisation: MC = MR.\nRevenue maximisation: MR = 0.\nSales (volume) maximisation: the largest output where AR = AC (normal profit).' },
      { n: 5, f: 'Principal-agent problem', b: 'Owners (principals) and managers (agents) have different aims, and managers know more. Managers may pursue revenue, growth, pay or status instead of profit. Fixes: profit-related pay, share options, independent directors.' },
      { n: 6, f: 'Satisficing', b: 'Aiming for an acceptable level of profit (and other goals) rather than the maximum, to satisfy several stakeholders.' },
      { n: 7, f: 'Why do some firms stay small?', b: 'Niche or local demand, personal service and flexibility, the owner\'s choice, and lack of access to finance.' },
    ]),
    ...sub(T3, 'revenue-costs-and-profits-edexcel-alevel-economics', '3.3.2', [
      { n: 1, f: 'AR and MR', b: 'AR = TR ÷ Q and always equals price (the demand curve).\nMR = ΔTR ÷ ΔQ. MR lies below AR when the firm must cut price to sell more.' },
      { n: 2, f: 'Law of diminishing returns', b: 'In the short run, as more of a variable factor is added to a fixed factor, the marginal product eventually falls, so marginal cost rises. Falling MP is not falling total product.' },
      { n: 3, f: 'Where does the MC curve cut AVC and ATC?', b: 'At their minimum points, from below. MC ignores fixed cost. AFC falls throughout and never reaches zero.' },
      { n: 4, f: 'Economies of scale vs diminishing returns', b: 'Economies of scale: long run, all factors change, LRAC falls as output rises.\nDiminishing returns: short run, at least one factor fixed.' },
      { n: 5, f: 'Internal vs external economies of scale', b: 'Internal: from the firm\'s own growth (technical, purchasing, financial, managerial, marketing); a movement along LRAC.\nExternal: from growth of the industry; a downward shift of LRAC.' },
      { n: 6, f: 'Normal profit vs supernormal profit', b: 'Normal profit: the minimum reward to keep the entrepreneur in the industry; counted as a cost (AR = AC).\nSupernormal profit: profit above normal (AR > AC).' },
      { n: 7, f: 'Short-run vs long-run shutdown point', b: 'Short run: shut down if price (AR) falls below minimum AVC.\nLong run: leave the industry if AR is below minimum AC. A firm making a loss may still stay open in the short run.' },
    ]),
    ...sub(T3, 'market-structures-and-contestability-edexcel-alevel-economics', '3.3.3', [
      { n: 1, f: 'Productive, allocative and dynamic efficiency', b: 'Productive: output at the lowest average cost (MC = ATC).\nAllocative: P = MC; resources make what consumers value most.\nDynamic: falling costs and new products over time, from investment and research.' },
      { n: 2, f: 'X-inefficiency', b: 'Costs above the lowest possible because of weak cost control or little competitive pressure: the actual cost curve sits above the lowest possible one.' },
      { n: 3, f: 'Concentration ratio: formula and example', b: 'CRn = sales of the n largest firms ÷ total market sales × 100. Top three sell 45, 30 and 15 in a market of 150: CR3 = 90 ÷ 150 = 60%. It measures concentration, not behaviour.' },
      { n: 4, f: 'Perfect competition: characteristics and long-run outcome', b: 'Many firms, identical products, perfect information, no barriers; each firm is a price taker (P = AR = MR). Long run: normal profit only, allocatively and productively efficient.' },
      { n: 5, f: 'Monopolistic competition in the long run', b: 'Many firms, differentiated products, low barriers. Entry removes supernormal profit, so AR is tangent to ATC: normal profit, but with excess capacity and P > MC, so neither productively nor allocatively efficient.' },
      { n: 6, f: 'Oligopoly: interdependence and the dominant strategy', b: 'A few large firms with barriers to entry; each firm\'s best choice depends on rivals\' choices. A dominant strategy is the best choice whatever the rival does. Collusion may be formal (a cartel) or tacit (price leadership).' },
      { n: 7, f: 'Monopoly: profit-maximising output and price', b: 'Output where MR = MC; price read up to the demand (AR) curve. For a straight-line demand curve P = a − bQ, MR = a − 2bQ.' },
      { n: 8, f: 'Conditions for third-degree price discrimination', b: 'Market power, groups with different PED, and the ability to separate the markets so there is no resale. The less elastic group pays the higher price.' },
      { n: 9, f: 'Contestable market', b: 'Rivals can enter and leave cheaply and quickly (low sunk costs), so the threat of hit-and-run entry restrains incumbents\' prices and profits. It does not need many firms.' },
    ]),
    ...sub(T3, 'labour-markets-edexcel-alevel-economics', '3.3.4', [
      { n: 1, f: 'Derived demand', b: 'Demand for a factor such as labour exists only because the final product is wanted. Demand for labour shifts with demand for the product.' },
      { n: 2, f: 'Factors affecting the elasticity of demand for labour', b: 'Ease of substituting capital for labour, the PED of the final product, the share of labour in total costs, and time (more elastic in the long run).' },
      { n: 3, f: 'What happens to wages and employment when demand for labour shifts vs when supply shifts?', b: 'Demand shifts: wage and employment move the same way.\nSupply shifts: they move in opposite directions (more supply: lower wage, more employment).' },
      { n: 4, f: 'Effect of a national minimum wage: competitive market vs monopsony', b: 'Competitive market, set above equilibrium: unemployment (supply exceeds demand).\nMonopsony: a minimum wage can raise both the wage and employment, up to a point.' },
      { n: 5, f: 'Geographical vs occupational immobility of labour', b: 'Geographical: workers unable or unwilling to move to where jobs are (housing costs, family ties).\nOccupational: workers unable to switch easily between jobs or industries (skills mismatch). Both cause structural unemployment.' },
      { n: 6, f: 'Nominal pay rises 5% and inflation is 3%. Real change in pay?', b: '1.05 ÷ 1.03 − 1 = 0.0194, a real rise of about 1.9%.' },
    ]),
    ...sub(T3, 'government-intervention-edexcel-alevel-economics', '3.3.5', [
      { n: 1, f: 'Price regulation vs profit regulation of monopolies', b: 'Price regulation caps the price, often at inflation minus X; a cap too low can hurt quality and investment.\nProfit regulation limits the rate of return on capital; the firm may overstate its capital.' },
      { n: 2, f: 'Inflation is 4% and X is 1.5%. What does an inflation-minus-X price cap allow?', b: 'Prices may rise by 4 − 1.5 = 2.5%. The firm gains only by cutting costs faster than that.' },
      { n: 3, f: 'Privatisation vs deregulation vs nationalisation', b: 'Privatisation: transfer of state-owned assets to private owners.\nDeregulation: removing rules and entry limits.\nNationalisation: transfer of private assets to state ownership. A privatised firm can still be tightly regulated.' },
      { n: 4, f: 'Regulatory capture', b: 'The regulator comes to act in the interests of the industry it regulates rather than consumers.' },
      { n: 5, f: 'Natural monopoly: the three pricing rules', b: 'MR = MC: profit maximising.\nP = ATC: normal profit.\nP = MC: allocatively efficient but loss-making, because ATC is still falling, so it needs a subsidy.' },
      { n: 6, f: 'Ways to promote competition', b: 'Lower entry costs (grants, tax incentives), deregulation, privatisation, competitive tendering for public contracts, and trade liberalisation. Each takes time to work.' },
      { n: 7, f: 'Employer NICs vs employee NICs in a labour market diagram', b: 'Employer contributions raise the cost of hiring, shifting demand for labour left.\nEmployee contributions cut take-home pay, shifting supply of labour left.' },
    ]),

    // 4 Developments in the global economy
    ...sub(T4, 'causes-and-effects-of-globalisation-edexcel-alevel-economics', '4.3.1', [
      { n: 1, f: 'Globalisation', b: 'The growing integration of national economies through flows of goods, services, capital, labour and ideas.' },
      { n: 2, f: 'Causes of globalisation', b: 'Trade liberalisation and trading blocs, lower transport costs (containerisation), better communications and IT, growth of TNCs, and freer capital flows.' },
      { n: 3, f: 'Openness ratio: formula and example', b: '(X + M) ÷ GDP × 100. Exports 45, imports 55, GDP 250: 100 ÷ 250 = 40%. Use exports and imports, not exports alone.' },
      { n: 4, f: 'Transfer pricing', b: 'Setting the internal prices charged between parts of the same TNC; it can shift profit to low-tax countries. It is a pricing practice, not illegal by definition.' },
      { n: 5, f: 'Effects of FDI on a host country', b: 'Benefits: jobs, capital, technology and skills, tax revenue.\nCosts: profits repatriated (GDP rises more than GNI), crowding out local firms, footloose plants that may leave.' },
      { n: 6, f: 'Trade vs FDI', b: 'Trade moves goods and services between countries. FDI moves capital into productive assets, such as a factory, in another country.' },
    ]),
    ...sub(T4, 'trade-and-the-global-economy-edexcel-alevel-economics', '4.3.2', [
      { n: 1, f: 'Absolute vs comparative advantage', b: 'Absolute: using fewer resources to make a good than a rival.\nComparative: giving up less of other goods (a lower opportunity cost). Trade can benefit both even if one has an absolute advantage in everything.' },
      { n: 2, f: 'Terms of trade: formula and example', b: 'Index of export prices ÷ index of import prices × 100. Export prices 110, import prices 100: 110. A rise is an improvement: more imports for each unit of exports.' },
      { n: 3, f: 'Is an improvement in the terms of trade good for the trade balance?', b: 'Not necessarily. Dearer exports may sell less; whether export revenue rises depends on price elasticity of demand. Terms of trade compare prices, not values.' },
      { n: 4, f: 'Trade creation vs trade diversion', b: 'Creation: a switch from higher-cost home output to lower-cost imports from a bloc partner.\nDiversion: a switch from a lower-cost outside supplier to a higher-cost partner because of the external tariff.' },
      { n: 5, f: 'Customs union vs common market', b: 'Customs union: free trade between members plus a common external tariff.\nCommon market: a customs union plus free movement of factors (labour and capital).' },
      { n: 6, f: 'Diagram: effect of a tariff', b: 'The domestic price rises from the world price to world price + tariff. Domestic supply extends, demand contracts, imports fall. Government gains tariff revenue on the remaining imports; there are two deadweight-loss triangles (production and consumption).' },
      { n: 7, f: 'Tariff vs quota', b: 'Tariff: a tax on imports; raises revenue.\nQuota: a legal limit on the quantity imported; raises no government revenue, but foreign suppliers may gain a quota rent.' },
    ]),
    ...sub(T4, 'balance-of-payments-exchange-rates-and-competitiveness-edexcel-alevel-economics', '4.3.3', [
      { n: 1, f: 'The current account: four parts', b: 'Trade in goods, trade in services, primary income (investment income and pay) and secondary income (transfers). Current + capital + financial account + net errors = 0.' },
      { n: 2, f: 'Goods −30, services +18, primary income −6, secondary income +2. Current account?', b: '−30 + 18 − 6 + 2 = −16, a deficit of 16.' },
      { n: 3, f: 'Expenditure-switching vs expenditure-reducing policies', b: 'Switching: makes imports dearer or exports cheaper (depreciation, tariffs).\nReducing: cuts total spending and so imports (higher taxes, higher interest rates), at the cost of lost output and jobs.' },
      { n: 4, f: 'Appreciation vs revaluation; depreciation vs devaluation', b: 'Appreciation and depreciation: market-driven rise or fall in a floating currency.\nRevaluation and devaluation: an official rise or fall in a fixed or target rate.' },
      { n: 5, f: 'Marshall-Lerner condition and the J-curve', b: 'A depreciation improves the current account if PED for exports + PED for imports (in size) is above 1. In the short run elasticities are low, so the balance worsens first and then improves: a J-shape over time.' },
      { n: 6, f: 'Unit labour cost and competitiveness', b: 'Unit labour cost = wage ÷ output per worker. ULC rises only if wages grow faster than productivity; rising ULC raises export prices and reduces price competitiveness.' },
    ]),
    ...sub(T4, 'poverty-and-inequality-edexcel-alevel-economics', '4.3.4', [
      { n: 1, f: 'Absolute vs relative poverty', b: 'Absolute: income below a fixed level needed for basic needs, fixed in real terms.\nRelative: income far below the typical income in the same society (often below 60% of median). Absolute poverty can fall while relative poverty rises.' },
      { n: 2, f: 'Lorenz curve', b: 'Cumulative share of income (vertical) against cumulative share of households, poorest first (horizontal). The 45° line is perfect equality; the further the curve bows below it, the greater the inequality.' },
      { n: 3, f: 'Gini coefficient', b: 'A ÷ (A + B), where A is the area between the line of equality and the Lorenz curve and B the area under the curve. 0 = perfect equality, 1 = total inequality.' },
      { n: 4, f: 'Income vs wealth inequality', b: 'Income is a flow of earnings over a period; wealth is a stock of assets less debts. Wealth is usually more unequally distributed because it accumulates and is inherited.' },
      { n: 5, f: 'A worker earns 50 more, loses 30 in benefits and pays 10 in tax. Effective marginal tax rate?', b: '(30 + 10) ÷ 50 = 80%. The worker keeps 10: an example of the poverty trap.' },
      { n: 6, f: 'Causes of changes in poverty', b: 'Economic growth and who gains from it, education and training, the level of welfare benefits, the tax structure (progressive or regressive), structural change, aid and conflict.' },
    ]),
    ...sub(T4, 'the-role-of-the-state-in-the-macroeconomy-edexcel-alevel-economics', '4.3.5', [
      { n: 1, f: 'Fiscal deficit vs national debt', b: 'Deficit: spending exceeds revenue in a year (a flow).\nNational debt: the total owed by the government at a point in time (a stock). New debt = old debt + deficit.' },
      { n: 2, f: 'Cyclical vs structural deficit', b: 'Cyclical: due to output below potential; disappears as the economy recovers.\nStructural: the part that remains when output is at potential; needs a policy change.' },
      { n: 3, f: 'Automatic stabilisers', b: 'Tax and benefit rules that change the budget balance as output changes, with no new decision. In a downturn tax receipts fall and benefit spending rises, cushioning AD.' },
      { n: 4, f: 'Progressive, proportional and regressive taxes', b: 'Progressive: the average tax rate rises as income rises.\nProportional: the average rate is constant.\nRegressive: the average rate falls as income rises. Judge by the average rate, not the amount paid.' },
      { n: 5, f: 'Laffer curve', b: 'Tax revenue first rises and then falls as the tax rate rises, because very high rates reduce incentives to work and increase avoidance. It does not show where any country actually is.' },
      { n: 6, f: 'Tax avoidance vs tax evasion', b: 'Avoidance: legal reduction of tax paid.\nEvasion: illegal non-payment of tax owed.' },
      { n: 7, f: 'Crowding out', b: 'A fall in private spending caused by public spending or borrowing: higher government borrowing raises interest rates (financial) or uses resources the private sector would have used (resource).' },
    ]),
    ...sub(T4, 'growth-and-development-in-developing-emerging-and-developed-economies-edexcel-alevel-economics', '4.3.6', [
      { n: 1, f: 'Economic growth vs economic development', b: 'Growth: an increase in real GDP.\nDevelopment: a rise in living standards and wellbeing, including health, education and choice. A country can grow with little development.' },
      { n: 2, f: 'Human Development Index (HDI)', b: 'An index from 0 to 1 combining health (life expectancy), education (mean and expected years of schooling) and income (GNI per capita at PPP), calculated as the geometric mean of the three.' },
      { n: 3, f: 'Prebisch-Singer hypothesis', b: 'The prices of primary products tend to fall relative to manufactured goods over the long run, so the terms of trade of primary exporters deteriorate. It is a hypothesis, not a fact.' },
      { n: 4, f: 'Harrod-Domar model: growth formula and example', b: 'g = s ÷ k (saving ratio ÷ capital-output ratio). With k = 4, a 5% growth target needs s = g × k = 20% of GDP. A savings gap arises if domestic saving is lower.' },
      { n: 5, f: 'Debt service ratio', b: 'Annual interest plus repayment ÷ export earnings × 100. Debt service of 150 with exports of 600 is 25%.' },
      { n: 6, f: 'Lewis model of industrialisation', b: 'Surplus labour with zero marginal product moves from traditional farming to modern industry at a wage just above subsistence. Profits are reinvested, creating more jobs, until surplus labour runs out (the turning point).' },
      { n: 7, f: 'Tied aid', b: 'Aid whose use is restricted to goods or services bought from the donor country, which reduces its real value to the recipient.' },
      { n: 8, f: 'Market-orientated vs interventionist development strategies', b: 'Market-orientated: trade liberalisation, FDI, privatisation, floating exchange rates, microfinance.\nInterventionist: infrastructure, education and health spending, protection of infant industries, buffer stocks. Most real packages mix both.' },
    ]),
  ],
};
