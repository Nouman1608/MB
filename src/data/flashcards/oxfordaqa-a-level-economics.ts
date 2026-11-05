/**
 * D-438 -- flashcards for OxfordAQA International AS and A-level Economics 9640.
 *
 * One block per subtopic, in specification order (3.1.1-3.4.3, then the
 * quantitative skills QS1-QS9). Card ids are `<subtopic number>-<n>` and are
 * permanent (browser progress is keyed by them): add a new card with the next
 * unused n, never renumber.
 *
 *   The syllabus is not tiered, so no card carries a tier. "(A2)" in a card
 *   marks content the specification reserves for A2 assessments (QS3, QS6).
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9640); origin 'revision-notes'.
 *
 * Every worked figure is invented for illustration, as on the revision notes.
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

const T1 = 'the-operation-of-markets-market-failure-and-the-role-of-government-oxfordaqa-alevel-economics';
const T2 = 'the-national-economy-in-a-global-environment-oxfordaqa-alevel-economics';
const T3 = 'the-economics-of-business-behaviour-and-the-distribution-of-income-oxfordaqa-alevel-economics';
const T4 = 'economic-development-and-global-environment-oxfordaqa-alevel-economics';
const T5 = 'quantitative-skills-oxfordaqa-alevel-economics';

const MON = 'oxfordaqa-a-level-economics-monetary-policy-revision-notes';
const DIM = 'oxfordaqa-a-level-economics-diminishing-returns-returns-to-scale-short-run-and-revision-notes';
const TRADE = 'oxfordaqa-a-level-economics-international-trade-revision-notes';

export const DECK_OXFORDAQA_A_LEVEL_ECONOMICS: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'economics',
  syllabusCode: '9640',
  syllabusSeries: 'First teaching September 2020, first AS exams May/June 2021, first A-level exams May/June 2022',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'salman-ahmad', reviewedOn: '2026-11-05' },
  cards: [
    // 1 The operation of markets, market failure and the role of government (AS)
    ...sub(T1, 'the-economic-problem-and-methodology-oxfordaqa-alevel-economics', '3.1.1', [
      { n: 1, f: 'Scarcity (the fundamental economic problem)', b: 'Resources are limited but wants are unlimited, so choices must be made between competing uses. It affects rich and poor countries alike.' },
      { n: 2, f: 'Opportunity cost', b: 'The benefit of the best option rejected: the next best alternative forgone, not the total of everything given up and not "money".' },
      { n: 3, f: 'Opportunity cost from time data: a chair takes 4 hours and a table 10 hours. What is the opportunity cost of one table?', b: '10 ÷ 4 = 2.5 chairs. Always express the answer in units of the good forgone.' },
      { n: 4, f: 'The four factors of production, and the classic confusion for capital', b: 'Land (all natural resources), labour (human effort), capital (man-made goods used to make other goods), enterprise (organising and risk-taking).\nCapital is machines, tools and buildings, not money or a bank loan, which is finance.' },
      { n: 5, f: 'Production possibility diagram: what does a point on, inside and outside the boundary show?', b: 'On: full, efficient use of resources (productively efficient).\nInside: unemployed or inefficiently used resources (possible but wasteful).\nOutside: unattainable with current resources and technology.' },
      { n: 6, f: 'Why is a production possibility boundary usually bowed outwards (concave to the origin)?', b: 'Some resources suit one good better than the other, so producing more of one good draws in resources less suited to it. Opportunity cost rises. A straight line means constant opportunity cost.' },
      { n: 7, f: 'Movement along versus shift of the production possibility boundary', b: 'A movement along it changes the mix of goods produced. An outward shift is economic growth (more productive capacity); an inward shift is a loss of capacity.' },
      { n: 8, f: 'Positive versus normative statements', b: 'Positive: about what is, was or will be; testable by evidence, and can be false and still be positive ("inflation rose to 6%").\nNormative: about what ought to be; a value judgement ("inflation is too high", "the government should cut tax").' },
      { n: 9, f: 'Ceteris paribus, and why economics is a social science', b: 'Ceteris paribus: other things held equal, so one relationship can be isolated in a model.\nEconomics uses models, hypotheses and data like a natural science, but has few controlled experiments, many variables change at once, and values shape the questions.' },
    ]),
    ...sub(T1, 'how-markets-work-oxfordaqa-alevel-economics', '3.1.2', [
      { n: 1, f: 'Movement along a demand curve versus a shift of the curve', b: 'Movement (extension or contraction): caused only by a change in the good\'s own price.\nShift (increase or decrease in demand): caused by any other influence, such as income, prices of substitutes or complements, tastes.' },
      { n: 2, f: 'PED: formula and a check. Price falls from 50 to 45; quantity rises from 800 to 920.', b: 'PED = % change in quantity demanded ÷ % change in price.\nPrice −10%, quantity +15%, so PED = 15 ÷ −10 = −1.5: elastic.\nRevenue rises from 40,000 to 41,400.' },
      { n: 3, f: 'PED and total revenue: what happens to revenue when price rises, for elastic, inelastic and unit elastic demand?', b: 'Elastic (size above 1): revenue falls.\nInelastic (size below 1): revenue rises.\nUnit elastic: revenue unchanged.\n(The reverse for a price cut.)' },
      { n: 4, f: 'YED: formula, signs and an example. Income rises 5% and demand rises 1%.', b: 'YED = % change in quantity demanded ÷ % change in income.\nPositive: normal good (above 1 is income elastic). Negative: inferior good.\n1 ÷ 5 = +0.2: normal and income inelastic.' },
      { n: 5, f: 'XED: formula and what the sign shows. A 12% rise in the price of Y cuts demand for X by 6%.', b: 'XED = % change in quantity demanded of X ÷ % change in price of Y.\nPositive: substitutes. Negative: complements.\n−6 ÷ 12 = −0.5: weak complements.' },
      { n: 6, f: 'Determinants of price elasticity of demand', b: 'More elastic with: many close substitutes, a luxury, a large share of income, a long time period, a narrowly defined good.\nLess elastic with: few substitutes, a necessity, a small share of income, a short period, a broadly defined good, habit.' },
      { n: 7, f: 'PES: formula and example. Price rises 8% and quantity supplied rises 2.4%.', b: 'PES = % change in quantity supplied ÷ % change in price.\n2.4 ÷ 8 = 0.3: inelastic.\nSupply is more elastic with spare capacity, stocks, a long time period, mobile factors and low barriers to entry.' },
      { n: 8, f: 'Which way does the supply curve shift for an indirect tax per unit and for a subsidy?', b: 'Tax per unit: supply shifts left (up) by the tax.\nSubsidy per unit: supply shifts right (down) by the subsidy.\nA change in demand does not shift supply; it causes a movement along it.' },
      { n: 9, f: 'Find the equilibrium: Qd = 360 − 20P and Qs = −40 + 20P', b: 'Set Qd = Qs: 360 − 20P = −40 + 20P, so 400 = 40P and P = 10.\nQ = 360 − 200 = 160 (check: −40 + 200 = 160).' },
      { n: 10, f: 'Why can a bumper harvest make farmers worse off?', b: 'Supply shifts right. Demand for the crop is price inelastic, so price falls by a larger percentage than quantity rises, and farmers\' total revenue falls.' },
      { n: 11, f: 'Joint demand, competitive demand, composite demand, derived demand and joint supply', b: 'Joint: complements bought together. Competitive: substitutes. Composite: one good with several uses (grain for food and feed). Derived: wanted for what it helps make (steel for cars, labour). Joint supply: several goods from one process (planks and sawdust).' },
      { n: 12, f: 'The three functions of the price mechanism', b: 'Rationing: allocates scarce goods to those willing and able to pay.\nIncentive: higher prices and profit encourage more production.\nSignalling: price changes carry information about scarcity and tastes to producers and consumers.' },
    ]),
    ...sub(T1, 'an-introduction-to-production-costs-revenue-and-profit-oxfordaqa-alevel-economics', '3.1.3', [
      { n: 1, f: 'Production versus productivity', b: 'Production: converting inputs into final output (total output).\nProductivity: output per unit of input. Labour productivity is output per worker or per worker-hour. Output can rise with no rise in productivity if inputs rise in proportion.' },
      { n: 2, f: 'Labour productivity example: 9 workers, 40 hours each, make 7,200 items', b: 'Total hours = 9 × 40 = 360.\nOutput per worker = 7,200 ÷ 9 = 800.\nOutput per hour = 7,200 ÷ 360 = 20.' },
      { n: 3, f: 'Division of labour: benefits and costs', b: 'Benefits: practice makes workers quicker, less time switching tasks, tools in constant use, so output per worker rises and unit cost can fall.\nCosts: monotony and lower motivation, interdependence (one weak stage holds up the rest), narrow skills that raise the risk of unemployment.' },
      { n: 4, f: 'Why does specialisation need money?', b: 'Specialists must exchange their surplus for other goods. Barter needs a double coincidence of wants and many exchange ratios, so money as a medium of exchange saves time and lets specialisation spread.' },
      { n: 5, f: 'Fixed cost, variable cost, total cost and average cost', b: 'Fixed cost: does not change with output in the short run, owed even at zero output (rent, insurance).\nVariable cost: changes with output (materials).\nTC = FC + VC. AC = TC ÷ Q = AFC + AVC.' },
      { n: 6, f: 'Short run versus long run', b: 'Short run: at least one input is fixed.\nLong run: all inputs can be varied, so the scale of production can change.' },
      { n: 7, f: 'Internal versus external economies of scale', b: 'Internal: from the firm\'s own growth (technical, purchasing, managerial, financial, marketing); a movement down the LRAC curve.\nExternal: from the growth of the industry or area (skilled labour pool, specialist suppliers, infrastructure); a downward shift of the LRAC curve.' },
      { n: 8, f: 'Diseconomies of scale and minimum efficient scale (MES)', b: 'Diseconomies: LRAC rises as the firm grows, from co-ordination and communication problems, loss of control, lower motivation and duplication.\nMES: the smallest output at which LRAC reaches its minimum.' },
      { n: 9, f: 'Revenue and profit formulae, with an example: price 18, 250 units sold, total cost 3,900', b: 'TR = P × Q; AR = TR ÷ Q (= price); profit = TR − TC.\nTR = 18 × 250 = 4,500. Profit = 4,500 − 3,900 = 600.\nCheck: AC = 15.60, profit per unit 2.40 × 250 = 600.' },
      { n: 10, f: 'Why is the average revenue curve the firm\'s demand curve?', b: 'At each price buyers choose how many units to take, and AR equals price when all units sell at one price. So AR plotted against quantity traces demand. A price change moves along it; a non-price factor shifts it.' },
    ]),
    ...sub(T1, 'competitive-and-concentrated-markets-oxfordaqa-alevel-economics', '3.1.4', [
      { n: 1, f: 'The three features that distinguish market structures', b: 'How many firms compete, how different (differentiated) their products are, and how easily new firms can enter (barriers to entry).' },
      { n: 2, f: 'Objectives of firms other than profit', b: 'Survival, growth and increasing market share. Objectives shape behaviour: for example a firm chasing market share may cut prices and accept lower profit now.' },
      { n: 3, f: 'Main characteristics of perfect competition', b: 'Many buyers and sellers, none able to influence price (price takers); identical products; no barriers to entry or exit; good information about prices.' },
      { n: 4, f: 'Why are profits likely to be lower in a competitive market than where a few large firms dominate?', b: 'No barriers, so supernormal profit attracts entry. Supply increases and price falls until only normal profit is left. With high barriers, entry cannot compete the profit away.' },
      { n: 5, f: 'Concentration ratio: definition and example. Five firms sell 120, 90, 60, 30, 20; all others 80. Find CR3.', b: 'CRn = combined sales of the n largest firms ÷ total market sales × 100.\nTotal = 400. CR3 = (120 + 90 + 60) ÷ 400 = 67.5%.' },
      { n: 6, f: 'Pure monopoly versus monopoly power', b: 'Pure monopoly: a single firm is the whole market, with no close substitutes (few real examples).\nMonopoly power: the ability to influence price or earn higher profit because competition is limited; many firms have some.' },
      { n: 7, f: 'Factors that increase a firm\'s monopoly power', b: 'High barriers to entry, few competitors, advertising and brand loyalty, product differentiation. Each makes demand less price elastic, so a price rise loses fewer customers.' },
      { n: 8, f: 'Compared with a competitive market, what does monopoly tend to give? Possible benefits?', b: 'Higher price, lower output, higher profit, lower consumer surplus and a misallocation of resources.\nPossible benefits: economies of scale and profit to fund invention and innovation. It depends on whether cost savings are passed on to consumers.' },
    ]),
    ...sub(T1, 'market-failure-and-government-intervention-in-markets-oxfordaqa-alevel-economics', '3.1.5', [
      { n: 1, f: 'Market failure', b: 'When the market outcome leads to a misallocation of resources. Causes include public goods, externalities, merit and demerit goods, monopoly and other market imperfections, and inequality of income and wealth.' },
      { n: 2, f: 'Public good: the two characteristics, and the free-rider problem', b: 'Non-rival (one person\'s use leaves others\' unchanged) and non-excludable (non-payers cannot be stopped).\nBecause non-payers cannot be excluded, people wait for others to pay, firms earn no revenue, and the good is not provided by the market.' },
      { n: 3, f: 'Tragedy of the commons', b: 'An open-access resource that is rival but non-excludable is overused, because each user keeps the full gain from extra use but shares the cost with everyone else.' },
      { n: 4, f: 'Externality, and private versus social cost', b: 'Externality: a cost or benefit to a third party, with no payment made.\nSocial cost = private cost + external cost (likewise for benefit). Markets take account of private values only.' },
      { n: 5, f: 'Diagram in words: negative production externality', b: 'Axes: price and quantity. The supply curve showing the full cost to society lies above private supply. Its crossing with demand gives lower output and a higher price than the market. The gap between the outputs is overproduction; the triangle between the curves is the welfare loss.' },
      { n: 6, f: 'Merit and demerit goods', b: 'Merit good: society judges that people consume too little (underconsumed). Demerit good: society judges people consume too much (overconsumed).\nCauses: externalities in consumption and imperfect information. Classification rests on a value judgement.' },
      { n: 7, f: 'Market imperfections that cause market failure', b: 'Imperfect and asymmetric information, monopoly power, factor immobility (occupational and geographical), and price instability (inelastic demand and supply plus supply shocks).' },
      { n: 8, f: 'Tax incidence: Qd = 100 − 4P, Qs = 16P − 20, tax of 5 per unit. Who pays?', b: 'Before: P = 6, Q = 76. After: supply 16P − 100, so P = 10, Q = 60.\nConsumers pay 4 of the 5 (80%), because demand is inelastic. Tax revenue = 5 × 60 = 300.' },
      { n: 9, f: 'Maximum price versus minimum price', b: 'Maximum price: a legal ceiling, binding when set below equilibrium; causes a shortage, queues, black markets.\nMinimum price: a legal floor, binding when set above equilibrium; causes a surplus.' },
      { n: 10, f: 'How do tradable pollution permits work?', b: 'A cap fixes total pollution. Firms that can cut pollution cheaply cut more and sell permits; firms with high abatement costs buy. Total pollution is certain and cuts are made at least cost. Risks: the cap may be wrong, and monitoring is needed.' },
      { n: 11, f: 'Government failure, and its sources', b: 'Intervention that leads to a worse allocation of resources and a fall in economic welfare.\nSources: inadequate information, inappropriate or conflicting objectives, administrative costs, corruption, unintended consequences (such as black markets).' },
    ]),

    // 2 The national economy in a global environment (AS)
    ...sub(T2, 'the-measurement-of-macroeconomic-performance-oxfordaqa-alevel-economics', '3.2.1', [
      { n: 1, f: 'The four core macroeconomic objectives of government', b: 'Economic growth, price stability, minimising unemployment, and a stable balance of payments on current account.' },
      { n: 2, f: 'Three further macroeconomic objectives named in the 9640 specification', b: 'Balancing the government budget, an equitable distribution of income and wealth, and protecting the environment.' },
      { n: 3, f: 'Match each objective to an indicator: growth, price stability, unemployment, external balance, equity', b: 'Growth: real GDP (and real GDP per capita).\nPrice stability: consumer price index.\nUnemployment: unemployment rate.\nExternal balance: current account of the balance of payments.\nEquity: Gini coefficient.' },
      { n: 4, f: 'Gini coefficient', b: 'A summary measure of income or wealth inequality on a scale from 0 (perfect equality) to 1 (perfect inequality).' },
      { n: 5, f: 'Nominal versus real data', b: 'Nominal: measured in the prices of the period recorded.\nReal: adjusted to remove the effect of inflation, so genuine changes over time can be compared.' },
      { n: 6, f: 'Index number: formula and example. A basket costs 120 in the base year and 138 three years later.', b: 'Index = value in given year ÷ value in base year × 100.\n138 ÷ 120 × 100 = 115: prices have risen 15% since the base year (base year = 100). Weights give components with a larger share more influence.' },
      { n: 7, f: 'Give an example of a conflict between macroeconomic objectives', b: 'Cutting interest rates to raise growth and cut unemployment raises spending, which can push demand-pull inflation above target; a weaker currency also raises import prices. Growth and jobs are traded against price stability.' },
    ]),
    ...sub(T2, 'how-the-macroeconomy-works-oxfordaqa-alevel-economics', '3.2.2', [
      { n: 1, f: 'Injections and withdrawals in the circular flow of income', b: 'Injections: investment, government spending, exports.\nWithdrawals: saving, taxes, imports.\nEquilibrium income is where injections equal withdrawals.' },
      { n: 2, f: 'Aggregate demand', b: 'Total planned spending on a country\'s output at each price level.\nAD = C + I + G + (X − M).' },
      { n: 3, f: 'MPC and MPS, with an example: disposable income rises from 300 to 340 and consumption from 250 to 280', b: 'MPC = ΔC ÷ ΔYd = 30 ÷ 40 = 0.75.\nMPS = ΔS ÷ ΔYd = 10 ÷ 40 = 0.25.\nMPC + MPS = 1.' },
      { n: 4, f: 'The multiplier: formulas and an example with MPS 0.04, MPT 0.16, MPM 0.30 and an injection of 25', b: 'k = 1 ÷ MPW, where MPW = MPS + MPT + MPM (or 1 ÷ (1 − MPC)).\nMPW = 0.50, so k = 2. Income rises by 25 × 2 = 50.' },
      { n: 5, f: 'Why might the real effect of an injection be smaller than the multiplier formula suggests?', b: 'Larger leakages mean a smaller multiplier; near normal capacity extra demand raises prices rather than real output; rounds of spending take time; expectations can change saving behaviour.' },
      { n: 6, f: 'What shifts SRAS, and what is a movement along it?', b: 'A change in the price level is a movement along SRAS.\nA change in production costs shifts it: higher money wages, raw material prices or indirect taxes shift it left; higher productivity shifts it right.' },
      { n: 7, f: 'LRAS: shape and determinants', b: 'Vertical at the normal capacity level of output.\nShifted right by more capital, better technology, a larger working population, higher productivity, enterprise, factor mobility, positive attitudes and economic incentives. A rightward shift is underlying growth.' },
      { n: 8, f: 'Diagram in words: a cost-push shock in the AD/AS model', b: 'Axes: price level and real output. Higher costs shift SRAS left. The new equilibrium has a higher price level and lower real output. Price up with output down points to a supply-side shock.' },
      { n: 9, f: 'The basic accelerator', b: 'Investment depends on the rate of change of output, not its level. If output keeps rising but more slowly, net investment falls; if output is constant, net investment is zero. This makes investment volatile.' },
    ]),
    ...sub(T2, 'economic-performance-oxfordaqa-alevel-economics', '3.2.3', [
      { n: 1, f: 'Short-run versus long-run economic growth', b: 'Short-run: a rise in actual real GDP, often from using spare capacity (AD shifts right; a point moves towards the PPD boundary).\nLong-run: a rise in productive capacity, the trend rate (LRAS shifts right; the boundary shifts out).' },
      { n: 2, f: 'Output gap: formula and example. Potential output 560, actual 551.6.', b: 'Output gap = (actual − potential) ÷ potential × 100.\n(551.6 − 560) ÷ 560 × 100 = −1.5%: a negative output gap (actual below potential).' },
      { n: 3, f: 'Phases of the economic cycle, and a common definition of recession', b: 'Boom, slowdown, recession, recovery.\nRecession: commonly two consecutive quarters of falling real GDP. A slowdown (growth falling but positive) is not a recession.' },
      { n: 4, f: 'Demand-side versus supply-side shocks: effect on output and the price level', b: 'Negative demand shock: AD left, output and price level both fall.\nNegative supply shock: SRAS left, output falls and the price level rises.\n(Positive shocks reverse these.)' },
      { n: 5, f: 'ILO unemployment rate: example with 3,360,000 employed and 140,000 unemployed', b: 'Labour force = employed + unemployed = 3,500,000.\nUnemployment rate = 140,000 ÷ 3,500,000 × 100 = 4.0%.' },
      { n: 6, f: 'Cyclical, structural, frictional and seasonal unemployment', b: 'Cyclical: weak AD, a negative output gap.\nStructural: mismatch of skills or location with vacancies.\nFrictional: the time taken to search for and move between jobs.\nSeasonal: yearly patterns in demand.' },
      { n: 7, f: 'Inflation, deflation and disinflation', b: 'Inflation: a sustained rise in the general price level.\nDeflation: the price level falls.\nDisinflation: the rate of inflation falls but prices still rise.' },
      { n: 8, f: 'Demand-pull versus cost-push inflation', b: 'Demand-pull: AD shifts right (higher spending, faster money supply growth); real GDP rises and unemployment usually falls.\nCost-push: SRAS shifts left (wages, commodities, energy, indirect taxes); real GDP falls and unemployment usually rises.' },
      { n: 9, f: 'Real change: nominal pay rises 2.2% while inflation is 3.5%', b: 'Real change = (1 + nominal) ÷ (1 + inflation) − 1 = 1.022 ÷ 1.035 − 1 ≈ −1.3%. Real pay falls.' },
      { n: 10, f: 'The four parts of the current account of the balance of payments', b: 'Trade in goods, trade in services, primary income (employment and investment income across borders) and secondary income (one-way transfers such as remittances and aid).' },
      { n: 11, f: 'What can worsen a country\'s current account balance?', b: 'Faster growth at home (more imports), higher inflation than trading partners, an appreciation (if demand for exports and imports is elastic enough) and slower growth abroad. Higher productivity improves it.' },
      { n: 12, f: 'Short-run trade-off versus long-run solution for conflicting objectives', b: 'In the short run demand-side policy moves the economy along SRAS, so one objective (low unemployment) is traded for another (low inflation). Supply-side policy shifts LRAS right, raising output without adding to inflation.' },
    ]),
    ...sub(T2, 'macroeconomic-policy-oxfordaqa-alevel-economics', '3.2.4', [
      { n: 1, f: 'Monetary policy: prime and subsidiary objectives', b: 'Prime objective: usually to control inflation (an inflation target).\nSubsidiary: moderating fluctuations in economic activity.', src: MON },
      { n: 2, f: 'What happens to AD when the central bank raises its policy interest rate?', b: 'Loan rates rise, so borrowers have less to spend and consumption falls. Investment falls as funds cost more. Asset prices and confidence fall. The currency may appreciate, cutting net exports. AD shifts left, easing inflationary pressure.' },
      { n: 3, f: 'Why is monetary policy less suitable for cost-push inflation?', b: 'Monetary policy works on demand. It cannot lower costs directly, so cutting AD to fight cost-push inflation lowers output and jobs without removing the cause.', src: MON },
      { n: 4, f: 'Quantitative easing (QE)', b: 'The central bank buys government bonds with newly created money. Bond prices rise and yields fall, so borrowing is cheaper and asset prices higher, and AD shifts right. Limits: banks may hold reserves rather than lend; confidence may be low.' },
      { n: 5, f: 'Fiscal policy, budget deficit and national debt', b: 'Fiscal policy: deliberate changes to government spending and taxation.\nBudget deficit: spending exceeds revenue in a year (a flow).\nNational debt: the stock of past borrowing not yet repaid.' },
      { n: 6, f: 'Progressive, proportional and regressive taxes', b: 'Progressive: the average tax rate rises with income.\nProportional: the same average rate at every income.\nRegressive: the average rate falls as income rises (a fixed fee of 300 is 2% of 15,000 but 0.5% of 60,000).' },
      { n: 7, f: 'Cyclical versus structural budget balance', b: 'Cyclical: the part caused by the position in the economic cycle (in a downturn tax falls and benefit spending rises).\nStructural: the part that would remain at potential output.\nActual balance = structural + cyclical.' },
      { n: 8, f: 'Supply-side policy versus supply-side improvement', b: 'Policy: a deliberate government measure to expand productive capacity or efficiency.\nImprovement: any gain in capacity or efficiency, including those firms make on their own (innovation, private training). Test: would it have happened without the policy?' },
      { n: 9, f: 'How can a cut in the marginal income tax rate shift LRAS?', b: 'A lower marginal rate raises the reward for extra work, so people work more hours or join the labour force. Labour supply rises and LRAS shifts right. Evaluation: the income effect can make the response small.' },
      { n: 10, f: 'Examples of supply-side policies and their main limit', b: 'Education and training, infrastructure, business tax cuts or investment incentives, welfare reform, deregulation, industrial policy.\nLimits: long time lags, cost to the budget, and they need enough demand to use the extra capacity.' },
    ]),

    // 3 The economics of business behaviour and the distribution of income (A2)
    ...sub(T3, 'the-objectives-of-individuals-and-firms-oxfordaqa-alevel-economics', '3.3.1', [
      { n: 1, f: 'Marginal utility and the hypothesis of diminishing marginal utility', b: 'Marginal utility: the satisfaction from consuming one additional unit (the change in total utility).\nDiminishing marginal utility: the more consumed in a period, the less satisfaction each extra unit brings. It supports a downward-sloping demand curve.' },
      { n: 2, f: 'Bounded rationality versus bounded self-control', b: 'Bounded rationality: limited information, time and ability to process it, so choices fall short of fully rational.\nBounded self-control: knowing the best action but failing to carry it out, often by overweighting the present.' },
      { n: 3, f: 'Behavioural biases: anchoring, inertia, rules of thumb and social norms', b: 'Anchoring: over-relying on a first number seen (a high "was" price).\nInertia: staying with the current option.\nRules of thumb: simple shortcuts.\nSocial norms: unwritten rules followed because others do.' },
      { n: 4, f: 'Nudge, with an example', b: 'A way of steering choices without banning options or greatly changing prices. Example: making a scheme opt-out (default enrolment) so inertia keeps people in. Limits: effects may fade, vary between people and be too weak for large externalities.' },
      { n: 5, f: 'The profit-maximising rule, and the short-run and long-run shutdown rules', b: 'Profit maximisation: produce where MR = MC (MC cutting MR from below).\nShort run: produce if price covers average variable cost.\nLong run: produce only if price covers average total cost, including normal profit.' },
      { n: 6, f: 'Sales revenue maximisation and satisficing', b: 'Revenue maximisation: produce where MR = 0 (PED = 1 in size), giving more output, a lower price and lower profit than the profit maximum.\nSatisficing: aiming for a satisfactory outcome, such as a minimum profit, rather than the maximum.' },
      { n: 7, f: 'Divorce of ownership from control and the principal-agent problem', b: 'Shareholders (principals) own the firm but managers (agents) run it. Managers may pursue sales, growth or status instead of profit, helped by asymmetric information. Remedies: profit-related pay, share options, audits, independent directors, the takeover threat.' },
      { n: 8, f: 'Horizontal, vertical and conglomerate integration', b: 'Horizontal: same industry, same stage (scale, market power).\nVertical: different stages of one supply chain; backward buys a supplier, forward buys a distributor.\nConglomerate: unrelated industries (spreads risk, few synergies).' },
      { n: 9, f: 'Organic versus external growth of firms', b: 'Organic (internal): growth using the firm\'s own resources (new products, sites); slower, lower risk, control kept.\nExternal: merger or takeover; faster, but higher risk (culture clash, debt, paying too much).' },
    ]),
    ...sub(T3, 'costs-revenue-and-profits-oxfordaqa-alevel-economics', '3.3.2', [
      { n: 1, f: 'Law of diminishing returns versus returns to scale', b: 'Diminishing returns (short run): with one input fixed, extra units of a variable input eventually add less and less to output.\nReturns to scale (long run): how output responds when all inputs are scaled together (increasing, constant or decreasing).' },
      { n: 2, f: 'Marginal and average product: workers 3 and 4 raise total output from 27 to 33', b: 'MP of the 4th worker = 33 − 27 = 6.\nAP at 4 workers = 33 ÷ 4 = 8.25, down from 9.0 at 3 workers, because the new worker\'s MP is below the average.' },
      { n: 3, f: 'Why does the short-run MC curve fall and then rise?', b: 'MC falls while marginal product rises, then rises when diminishing returns set in: the same wage buys less extra output.', src: DIM },
      { n: 4, f: 'Marginal-average rule for cost curves', b: 'MC cuts AVC and ATC at their lowest points. A marginal value below an average pulls it down; above it pulls it up.', src: DIM },
      { n: 5, f: 'What does a rise in fixed cost do to TC, ATC, AVC and MC?', b: 'TC rises by the amount of the rise and ATC by that amount divided by output. MC and AVC are unchanged.', src: DIM },
      { n: 6, f: 'L-shaped LRAC curve', b: 'LRAC falls steeply at first and then flattens: a firm can often copy a plant it already runs well, so average cost need not rise at large outputs. A U-shape is the alternative if diseconomies of scale appear.', src: DIM },
      { n: 7, f: 'Marginal revenue for a linear demand curve P = a − bQ, and why MR is below AR', b: 'MR = a − 2bQ: it starts at the same price intercept and is twice as steep.\nMR is below AR because selling an extra unit means cutting the price on units already sold. For a price taker, AR = MR = price.' },
      { n: 8, f: 'MR, TR and price elasticity of demand', b: 'MR positive: demand elastic; a price cut raises TR.\nMR zero: unit elastic; TR at its maximum.\nMR negative: demand inelastic; a price cut lowers TR.' },
      { n: 9, f: 'Normal versus supernormal profit, with an example: revenue 95,000, explicit costs 71,000, owner\'s best alternative earnings 18,000', b: 'Normal profit: the least reward that keeps the owner in this use; counted as a cost. Supernormal profit is anything above it.\nAccounting profit = 24,000; supernormal profit = 24,000 − 18,000 = 6,000.' },
      { n: 10, f: 'Invention, innovation and creative destruction', b: 'Invention: creating a new idea, product or process. Innovation: bringing it to market for the first time.\nCreative destruction: new products and methods replace old ones, destroying old firms and markets.' },
    ]),
    ...sub(T3, 'perfect-competition-imperfectly-competitive-markets-and-monopoly-oxfordaqa-alevel-economics', '3.3.3', [
      { n: 1, f: 'Perfect competition: the firm\'s demand curve and the long-run outcome', b: 'The firm is a price taker: demand is horizontal at the market price, so AR = MR = P. Output is where MC = P. In the long run entry and exit leave price at minimum AC: normal profit, P = MC (allocative) and minimum AC (productive efficiency).' },
      { n: 2, f: 'Monopolistic competition: long-run equilibrium in words', b: 'Many firms, differentiated products, low barriers. Supernormal profit attracts entry, which shifts each firm\'s demand left and makes it more elastic until AR is tangent to AC, to the left of minimum AC. Normal profit, excess capacity, and price above MC.' },
      { n: 3, f: 'Oligopoly: key features', b: 'A few large sellers supply most output, with barriers to entry and interdependence: each firm\'s outcome depends on rivals\' reactions, which creates uncertainty. Firms may compete, collude, or prefer non-price competition.' },
      { n: 4, f: 'The kinked demand curve: why prices may be stable', b: 'If a firm raises price, rivals do not follow, so demand above the kink is elastic. If it cuts price, rivals copy, so demand below is inelastic. MR has a vertical gap at the kink, so MC can change within it without changing price. Limit: it does not explain how the kink price was set.' },
      { n: 5, f: 'Overt versus tacit collusion; limit versus predatory pricing', b: 'Overt: an open or formal agreement (a cartel). Tacit: coordination without an agreement, such as price leadership.\nLimit pricing: price set low enough to make entry unprofitable, but above cost. Predatory pricing: price below cost to drive out a rival.' },
      { n: 6, f: 'Monopoly equilibrium: P = 130 − 5Q and MC = AC = 30', b: 'MR = 130 − 10Q = 30, so Q = 10.\nP = 130 − 50 = 80.\nProfit = (80 − 30) × 10 = 500.\n(Competition would give P = 30 and Q = 20.)' },
      { n: 7, f: 'Natural monopoly', b: 'A market where LRAC is still falling when output reaches market demand, because fixed costs are very large, so one firm can supply at the lowest cost. Pricing at MC leaves a loss; an unregulated firm charges well above cost.' },
      { n: 8, f: 'Third-degree price discrimination: the conditions and who pays more', b: 'Conditions: market power, separable groups, no resale (arbitrage), different price elasticities.\nThe firm sets MR = MC in each segment, so the less elastic group pays the higher price.' },
      { n: 9, f: 'Contestable market', b: 'A market where entry and exit are cheap enough, with low sunk costs, that the threat of hit-and-run entry is credible. Even a single incumbent must keep price near AC and earn only normal profit. Contestability depends on potential entry, not the number of firms.' },
      { n: 10, f: 'Static, dynamic and X-efficiency', b: 'Static efficiency: at a point in time (productive: minimum ATC; allocative: P = MC).\nDynamic efficiency: over time, through R&D, investment and new technology.\nX-inefficiency: actual cost above the lowest possible cost.' },
      { n: 11, f: 'Consumer surplus, producer surplus and deadweight loss', b: 'Consumer surplus: willingness to pay minus price paid (area between demand and price).\nProducer surplus: price received minus the minimum supply price (area between price and supply).\nDeadweight loss: surplus lost to everyone, for example under monopoly.' },
      { n: 12, f: 'Price cap regulation (inflation − X): example with price 80, inflation 4.0% and X = 1.5', b: 'Allowed price change = 4.0 − 1.5 = 2.5%.\nNew price = 80 × 1.025 = 82.00.\nThe firm can raise profit only by cutting costs. Risk: if X is too tight, quality or investment may fall.' },
      { n: 13, f: 'Regulatory capture', b: 'A regulator ends up serving the industry it oversees rather than the public, through dependence on the firm\'s information, lobbying and staff moving between regulator and firm. Result: lenient caps and protected incumbents.' },
      { n: 14, f: 'Privatisation: possible benefits and the key condition', b: 'Benefits: a profit incentive to cut costs, access to private capital, sale revenue, possible competition.\nWhether it works depends mainly on whether competition or effective regulation follows; otherwise a state monopoly becomes a private monopoly.' },
    ]),
    ...sub(T3, 'the-labour-market-oxfordaqa-alevel-economics', '3.3.4', [
      { n: 1, f: 'Marginal revenue product (MRP) and the hiring rule', b: 'MRP = MPP × MR (MPP × price for a price taker): the revenue added by one more worker.\nA profit-maximising firm employs workers while MRP is at least the extra cost of the worker. The MRP curve is the firm\'s demand curve for labour.' },
      { n: 2, f: 'Why is the demand for labour a derived demand, and what shifts it?', b: 'Labour is wanted for what it produces. Higher demand for the product raises MR and MRP, so labour demand shifts right. Higher productivity and cheaper complements shift it right; cheaper substitutes such as machines shift it left. A wage change is a movement along it.' },
      { n: 3, f: 'Determinants of the elasticity of demand for labour (more elastic if…)', b: 'Labour is a large share of total costs; substitutes (capital or other workers) are easy to find; demand for the product is price elastic; more time has passed since the wage change.' },
      { n: 4, f: 'What influences the supply of labour to an occupation?', b: 'Monetary rewards (wage, overtime, bonuses, pension) and non-monetary ones (hours, conditions, security, status, satisfaction, training, promotion). Higher pay in a rival occupation shifts supply left; better conditions shift it right.' },
      { n: 5, f: 'Monopsony: wage and employment compared with a competitive labour market', b: 'A single (dominant) buyer of labour faces the upward-sloping supply curve, so MCL lies above ACL. It hires where MCL = MRP and pays the wage on the supply curve below that point. Employment and the wage are both lower than in a competitive market, and the wage is below MRP.' },
      { n: 6, f: 'Effect of a trade union raising the wage: competitive market versus monopsony', b: 'Competitive market: a higher wage, fewer jobs and excess supply of labour (unemployment).\nMonopsony: a higher wage and, within a range, more jobs, because the union removes the employer\'s reason to restrict hiring.' },
      { n: 7, f: 'National minimum wage in a competitive labour market: D = 900 − 30w, S = 40w + 200, floor of 12', b: 'Equilibrium: 700 = 70w, so w = 10 and employment 600.\nAt 12: demand 540, supply 680, so unemployment is 140.\nIn a monopsony a floor can instead raise employment.' },
      { n: 8, f: 'Conditions for wage discrimination to persist', b: 'The employer has some power over wages; groups can be identified and separated; groups differ in the elasticity of labour supply to the firm (the less elastic group is paid less); workers have poor information or cannot move. Only the unexplained part of a pay gap points to discrimination.' },
    ]),
    ...sub(T3, 'poverty-and-inequality-oxfordaqa-alevel-economics', '3.3.5', [
      { n: 1, f: 'Income versus wealth', b: 'Income: a flow of earnings and receipts over a period.\nWealth: a stock of assets owned minus debts at a point in time. Wealth is usually more unequal than income, and the two feed each other.' },
      { n: 2, f: 'Lorenz curve and Gini coefficient', b: 'Lorenz curve: cumulative share of income (vertical) against cumulative share of households from the poorest (horizontal); the further it bows from the 45° line of equality, the more unequal.\nGini = area between the line of equality and the Lorenz curve ÷ the whole area under the line of equality: 0 equality, 1 maximum inequality.' },
      { n: 3, f: 'Absolute versus relative poverty', b: 'Absolute: income below the cost of a fixed basket of basic necessities.\nRelative: income below a share of typical income, often 60% of the median.' },
      { n: 4, f: 'Causes of inequality in the distribution of income', b: 'Differences in skills, qualifications and productivity; market power and unions; discrimination; unemployment and part-time work; ownership of capital (rent, interest, dividends); household structure; taxes and benefits; technology and globalisation.' },
      { n: 5, f: 'Poverty trap, with an example: benefit withdrawn at 50p per 1 earned and income tax at 20%', b: 'Extra earnings are mostly lost through withdrawn benefits and tax, so the incentive to work more is weak.\nCombined marginal rate = 70%: extra earnings of 200 leave 200 − 40 − 100 = 60.' },
      { n: 6, f: 'Means-tested versus universal benefits', b: 'Means-tested: paid only below an income or asset test; targets the poorest at lower cost but risks a poverty trap, stigma and low take-up.\nUniversal: paid to all in a category; simple and no stigma, but costly and some help goes to the non-poor.' },
      { n: 7, f: 'Evaluation: costs and benefits of a more equal distribution of income', b: 'Benefits: less poverty, social cohesion, wider access to education and health, and extra total satisfaction if an extra unit of income matters more to the poor.\nCosts: higher taxes can blunt incentives and encourage avoidance and emigration. How much equality is fair is a value judgement.' },
    ]),

    // 4 Economic development and the global economy (A2)
    ...sub(T4, 'globalisation-and-trade-oxfordaqa-alevel-economics', '3.4.1', [
      { n: 1, f: 'Globalisation', b: 'Deepening links between national economies through cross-border movement of goods, services, finance, labour, technology and information. Signs: trade growing faster than output, rising FDI, production split across borders, larger TNCs.' },
      { n: 2, f: 'Transnational corporations (TNCs): benefits and costs to a host country', b: 'Benefits: capital, jobs, skills, technology transfer, tax revenue, exports.\nCosts: profit repatriation, crowding out of local firms, footloose exit, weak standards, political influence and transfer pricing to cut tax.' },
      { n: 3, f: 'Absolute versus comparative advantage', b: 'Absolute advantage: producing a good using fewer resources than another country (compares outputs).\nComparative advantage: producing a good at a lower opportunity cost than another country (compares opportunity costs).' },
      { n: 4, f: 'Country C makes 90 chairs or 30 lamps; Country D makes 40 chairs or 20 lamps. Who has the comparative advantage in lamps?', b: 'One lamp costs C 90 ÷ 30 = 3 chairs and D 40 ÷ 20 = 2 chairs, so D has the comparative advantage in lamps and C in chairs. Both gain if one lamp trades for between 2 and 3 chairs.' },
      { n: 5, f: 'Terms of trade: formula and example with an export price index of 132 and an import price index of 110', b: 'Terms of trade = export price index ÷ import price index × 100.\n132 ÷ 110 × 100 = 120: an improvement, so each unit of exports buys more imports. The effect on the trade balance depends on how responsive volumes are.' },
      { n: 6, f: 'Effects of a tariff, and evaluation', b: 'The domestic price rises, consumers buy less, domestic firms supply more, imports fall and the government gains revenue. But other countries may retaliate, firms using imported inputs face higher costs, and long-run competitiveness may suffer.', src: TRADE },
      { n: 7, f: 'The infant industry argument for protection, and its condition', b: 'Protect now, the firm gains scale and learns, costs fall, then protection is removed. It works only if protection is temporary and the industry could really become competitive.', src: TRADE },
      { n: 8, f: 'Free trade area, customs union, common market and monetary union', b: 'Free trade area: no internal trade barriers.\nCustoms union: adds a common external tariff.\nCommon market: adds free movement of labour and capital.\nMonetary union: adds a single currency.' },
      { n: 9, f: 'The WTO: role and limitation', b: 'It lowers trade barriers and settles disputes, but relies on members accepting its decisions, and it is slow to reach agreements.', src: TRADE },
    ]),
    ...sub(T4, 'the-balance-of-payments-exchange-rates-and-financial-markets-oxfordaqa-alevel-economics', '3.4.2', [
      { n: 1, f: 'The accounts of the balance of payments', b: 'Current account (goods, services, primary and secondary income), capital account, financial account (FDI, portfolio investment, bank lending), and net errors and omissions. The whole balance of payments sums to zero; a current account deficit is financed by net inflows on the financial account.' },
      { n: 2, f: 'Expenditure-reducing versus expenditure-switching policies for a current account deficit', b: 'Expenditure-reducing: cut total demand (higher taxes, lower spending, higher interest rates), so fewer imports; costs growth and jobs.\nExpenditure-switching: move spending from imports to home goods (lower exchange rate, tariffs, quotas); risks imported inflation and retaliation.' },
      { n: 3, f: 'FDI versus portfolio investment', b: 'FDI: real operations abroad with control; long-term and hard to reverse.\nPortfolio investment: shares and bonds without control; can leave quickly.' },
      { n: 4, f: 'Appreciation/depreciation versus revaluation/devaluation', b: 'Appreciation and depreciation: a rise or fall in a floating exchange rate caused by market forces.\nRevaluation and devaluation: a deliberate rise or fall in the official rate under a fixed or managed system.' },
      { n: 5, f: 'Diagram in words: a rise in home interest rates in a floating exchange rate market', b: 'Axes: exchange rate (foreign currency per unit of home currency) and quantity of home currency. Higher returns on home assets attract inflows, so demand for the currency shifts right. The new equilibrium is at a higher exchange rate: an appreciation.' },
      { n: 6, f: 'Does a depreciation always improve the current account?', b: 'No. Exports become cheaper abroad and imports dearer at home. The balance improves only if export earnings rise by more than import spending, which needs price-elastic demand for exports and imports. With low elasticities (often in the short run) it can worsen first.' },
      { n: 7, f: 'A currency falls from 1 ar = 2.00 bel to 1 ar = 1.50 bel. What are the percentage changes?', b: 'The ar changes by (1.50 − 2.00) ÷ 2.00 × 100 = −25%.\nThe bel rises from 0.50 ar to 1 ÷ 1.50 = 0.667 ar, a rise of 33.3%.' },
      { n: 8, f: 'Free float, fixed and managed float exchange rate systems', b: 'Free float: set by demand and supply with no intervention.\nFixed: pegged and defended by the central bank (needs large reserves).\nManaged float: the market sets the rate but the central bank intervenes to smooth or steer it.' },
      { n: 9, f: 'The four functions of money', b: 'Medium of exchange, unit of account, store of value, standard of deferred payment. Inflation weakens money as a store of value.' },
      { n: 10, f: 'Bond yield and its link with the bond price. A bond pays 4 a year; its price rises from 90 to 125.', b: 'Yield = coupon ÷ price × 100. Price and yield move in opposite directions.\nAt 90 the yield is 4.44%; at 125 it is 3.20%.' },
      { n: 11, f: 'Liquidity versus solvency, and moral hazard', b: 'Illiquid: a bank cannot meet withdrawals now. Insolvent: its assets are worth less than its liabilities.\nMoral hazard: taking more risk when someone else bears the cost, for example expecting a rescue.' },
      { n: 12, f: 'Functions of a central bank', b: 'Issues currency, banker to the government and to banks, sets the policy interest rate, manages reserves, supervises banks, and acts as lender of last resort to a sound but illiquid bank.' },
    ]),
    ...sub(T4, 'economic-growth-and-development-oxfordaqa-alevel-economics', '3.4.3', [
      { n: 1, f: 'Economic growth versus economic development', b: 'Growth: a rise in real national output over time (one number).\nDevelopment: a lasting improvement in well-being, including health, education, income and fairness. Sustainable development improves the well-being of current and future generations.' },
      { n: 2, f: 'GDP, GNI and NNI', b: 'GDP: value of production within a country\'s borders, whoever owns the firms.\nGNI = GDP + income from abroad − income paid abroad.\nNNI = GNI − capital depreciation.' },
      { n: 3, f: 'Why use PPP exchange rates to compare countries?', b: 'Market exchange rates reflect trade and capital flows, not local prices. A PPP rate equalises the cost of the same basket in both countries, so it compares real purchasing power.' },
      { n: 4, f: 'The Human Development Index (HDI) and its main weakness', b: 'A composite of health (life expectancy), education and income per head at PPP, combined by a geometric mean. It goes beyond income but ignores inequality, the environment and freedom (the IHDI adjusts for inequality).' },
      { n: 5, f: 'Harrod-Domar model: formula and example with s = 10% and k = 2.5', b: 'g = s ÷ k (savings ratio ÷ capital-output ratio).\ng = 10 ÷ 2.5 = 4.0%.\nLimits: assumes fixed k and that saving becomes investment; ignores technology, skills and institutions.' },
      { n: 6, f: 'Primary product dependency and the Prebisch-Singer hypothesis', b: 'Dependency: volatile prices (inelastic demand and supply) give unstable export earnings and tax revenue.\nPrebisch-Singer: the terms of trade of primary exporters tend to fall over time because income elasticity of demand for primary products is lower than for manufactures.' },
      { n: 7, f: 'Market-based versus interventionist development strategies', b: 'Market-based: trade liberalisation, privatisation, deregulation, encouraging FDI, low taxes, floating exchange rates.\nInterventionist: protection, public ownership, industrial strategy, spending on infrastructure and human capital.\nThey can complement each other; the best mix depends on the country.' },
      { n: 8, f: 'Aid: role and problems', b: 'Role: fills the savings gap, funds infrastructure and health, relieves emergencies.\nProblems: dependency, corruption, tied conditions, short-term focus and donors\' interests. The effect depends on targeting and monitoring.' },
      { n: 9, f: 'Microfinance and fair trade', b: 'Microfinance: small loans, savings and insurance for people excluded from banks; helps small enterprises but interest can be high and debt traps form.\nFair trade: a guaranteed minimum price plus a premium; gives farmers income security but only members gain and consumers pay more.' },
    ]),

    // 5 Quantitative skills (QS1-QS9; may be assessed in any unit)
    ...sub(T5, 'qs1-quantitative-skills-oxfordaqa-alevel-economics', 'QS1', [
      { n: 1, f: 'Ratio versus fraction: what fraction of the total is the first part of a 3 : 5 ratio?', b: 'A 3 : 5 ratio has 8 parts in all, so the first part is 3/8 of the total, not 3/5.' },
      { n: 2, f: 'Share 200 in the ratio 1 : 4', b: 'Total parts = 5, so one part = 200 ÷ 5 = 40.\nShares: 40 and 160 (check: 40 + 160 = 200).' },
      { n: 3, f: 'Concentration ratio as a ratio skill: firms hold 30%, 20%, 12% and 8% of a market. Find CR3 and CR4.', b: 'CR3 = 30 + 20 + 12 = 62%.\nCR4 = 62 + 8 = 70%.' },
    ]),
    ...sub(T5, 'qs2-quantitative-skills-oxfordaqa-alevel-economics', 'QS2', [
      { n: 1, f: 'Percentage change: formula and example. A price rises from 50 to 58.', b: 'Percentage change = (new − old) ÷ old × 100, with the old value as the base.\n(58 − 50) ÷ 50 × 100 = +16%.' },
      { n: 2, f: 'Percentage points versus per cent: a rate falls from 8% to 6%', b: 'It falls by 2 percentage points (the gap between two rates), which is a relative fall of 2 ÷ 8 = 25%.' },
      { n: 3, f: 'Successive percentage changes: output rises 10%, falls 5%, then rises 2%', b: 'Multiply the multipliers; do not add the rates.\n1.10 × 0.95 × 1.02 = 1.0659, so output is about 6.6% higher overall.' },
      { n: 4, f: 'Reverse percentage: a price including 20% tax is 120. What was the price before tax?', b: 'Original = new value ÷ multiplier = 120 ÷ 1.20 = 100. The tax is 20.' },
    ]),
    ...sub(T5, 'qs3-quantitative-skills-oxfordaqa-alevel-economics', 'QS3', [
      { n: 1, f: 'Mean versus median', b: 'Mean: sum of values ÷ number of values; uses every value and is pulled by extremes.\nMedian: the middle value of ordered data (average the two middle values if the count is even); robust to a few very high values.' },
      { n: 2, f: 'Find the mean and median of 4, 5, 5, 9, 12', b: 'Mean = 35 ÷ 5 = 7.\nMedian = the 3rd value = 5.' },
      { n: 3, f: 'A region\'s mean pay is 900 and its median is 700. What does this suggest?', b: 'The mean is 29% above the median (900 ÷ 700 = 1.29), so a few high earners are pulling the mean up: pay is unequally spread. The median is the better guide to a typical worker.' },
      { n: 4, f: 'Quantiles: quartiles, quintiles, deciles, percentiles and the IQR (A2)', b: 'Quantiles are cut points that split ordered data into equal groups: quartiles (4), quintiles (5), deciles (10), percentiles (100).\nInterquartile range = Q3 − Q1, the spread of the middle half.' },
      { n: 5, f: 'The 90:10 ratio: 10th percentile income 80, median 240, 90th percentile 720 (A2)', b: '90:10 ratio = 720 ÷ 80 = 9. The 90th percentile to the median is 3, and the median to the 10th percentile is 3. A ratio describes spread without needing every household\'s income.' },
    ]),
    ...sub(T5, 'qs4-quantitative-skills-oxfordaqa-alevel-economics', 'QS4', [
      { n: 1, f: 'Which graphical form suits: a variable over time, shares of one total, a link between two variables?', b: 'Over time: a line graph (time on the horizontal axis).\nShares of a total: a pie chart (angles sum to 360°) or a 100% bar.\nLink between two variables: a scatter graph (do not join the points).' },
      { n: 2, f: 'Pie chart angle: income tax raises 20 of total tax revenue of 50', b: 'Angle = item ÷ total × 360 = 20 ÷ 50 × 360 = 144°.' },
      { n: 3, f: 'Gradient of a line from (20, 18) to (60, 10)', b: 'Gradient = change in vertical ÷ change in horizontal = (10 − 18) ÷ (60 − 20) = −8 ÷ 40 = −0.2.' },
      { n: 4, f: 'What must every economics diagram show?', b: 'Labelled axes (for example price and quantity), labelled curves (D, S, S1, S2), the original and new equilibrium, and arrows showing the direction of any shift.' },
    ]),
    ...sub(T5, 'qs5-quantitative-skills-oxfordaqa-alevel-economics', 'QS5', [
      { n: 1, f: 'Simple index number: output is 250 in the base year and 275 later', b: 'Index = value ÷ base-year value × 100 = 275 ÷ 250 × 100 = 110. Output is 10% above the base year (base = 100).' },
      { n: 2, f: 'Index points versus per cent: an index rises from 120 to 138', b: 'It rises by 18 index points but by 18 ÷ 120 = 15%. Percent changes are measured against the earlier value, not against 100.' },
      { n: 3, f: 'Weighted index: weights 60 and 40, category indices 110 and 95', b: '(60 × 110 + 40 × 95) ÷ 100 = (6,600 + 3,800) ÷ 100 = 104.0. A larger weight means a given price change moves the overall index more.' },
      { n: 4, f: 'Inflation from a price index that rises from 96.0 to 100.8', b: '(100.8 − 96.0) ÷ 96.0 × 100 = 5.0%. The index is the price level; inflation is its rate of change.' },
    ]),
    ...sub(T5, 'qs6-quantitative-skills-oxfordaqa-alevel-economics', 'QS6', [
      { n: 1, f: 'A laundrette has fixed cost 500 a week and variable cost 3 per wash. Find TC and AC at 400 washes.', b: 'VC = 3 × 400 = 1,200.\nTC = 500 + 1,200 = 1,700.\nAC = 1,700 ÷ 400 = 4.25.' },
      { n: 2, f: 'Marginal cost (A2): TC rises from 1,700 at 400 washes to 1,790 at 410 washes', b: 'MC = change in TC ÷ change in output = (1,790 − 1,700) ÷ 10 = 9 per wash.' },
      { n: 3, f: 'Marginal revenue (A2): TR rises from 4,500 to 4,516 when output goes from 250 to 251', b: 'MR = change in TR ÷ change in output = 16 ÷ 1 = 16.' },
      { n: 4, f: 'Profit and profit per unit', b: 'Profit = TR − TC. Profit per unit = AR − AC.\nExample: AR 18, AC 15.60, 250 units: profit per unit 2.40, total profit 2.40 × 250 = 600.' },
    ]),
    ...sub(T5, 'qs7-quantitative-skills-oxfordaqa-alevel-economics', 'QS7', [
      { n: 1, f: 'Convert money (nominal) to real terms: nominal income 5,250 when the price index is 105', b: 'Real value = nominal value ÷ price index × 100 = 5,250 ÷ 105 × 100 = 5,000 in base-year prices.' },
      { n: 2, f: 'Real growth: exact and approximate methods', b: 'Exact: (1 + nominal growth) ÷ (1 + inflation) − 1.\nApproximate: nominal growth − inflation.\nExample: nominal pay +3%, inflation 5%: 1.03 ÷ 1.05 − 1 ≈ −1.9%.' },
      { n: 3, f: 'A product costs 6.00 in the base year and 7.50 when the price index is 125. Has its real price changed?', b: 'Real price = 7.50 ÷ 125 × 100 = 6.00. The nominal price rose 25% but the real price is unchanged: it kept pace with prices in general.' },
    ]),
    ...sub(T5, 'qs8-quantitative-skills-oxfordaqa-alevel-economics', 'QS8', [
      { n: 1, f: 'PED: price rises from 8 to 10 and quantity falls from 500 to 420', b: 'Price +25%, quantity −16%, so PED = −16 ÷ 25 = −0.64: inelastic.\nRevenue rises from 4,000 to 4,200, as expected for inelastic demand.' },
      { n: 2, f: 'Working back from PED: PED is −1.8 and the firm cuts price by 5%', b: 'Quantity rises 1.8 × 5 = 9%.\nRevenue index = 0.95 × 1.09 = 1.0355, so revenue rises about 3.6%.' },
      { n: 3, f: 'Classify: YED −1.0, XED +0.8, PES 0.4', b: 'YED −1.0: inferior good.\nXED +0.8: substitutes.\nPES 0.4: inelastic supply.' },
      { n: 4, f: 'MR and PED (A2): price 24 and PED −3', b: 'MR = P × (1 + 1/PED) = 24 × (1 − 1/3) = 16. MR is positive only where demand is elastic.' },
      { n: 5, f: 'Watch-out: price rises from 20 to 25 and quantity falls from 300 to 240. PED = −0.8. What happens to revenue?', b: 'Revenue is 6,000 before and 25 × 240 = 6,000 after: unchanged, although PED suggests a rise. For large price changes, work out price × quantity directly.' },
    ]),
    ...sub(T5, 'qs9-quantitative-skills-oxfordaqa-alevel-economics', 'QS9', [
      { n: 1, f: 'Level versus rate: output of 150 grows 2%, then −3%, then +1%. Has it recovered?', b: '150 × 1.02 = 153.00; × 0.97 = 148.41; × 1.01 = 149.89. Growth is positive in year 3, yet output is still below 150. A positive growth rate means the level is rising, not that it has recovered.' },
      { n: 2, f: 'Correlation versus causation in data questions', b: 'A pattern between two variables needs a reason (a mechanism) and a check on other factors. A third factor may explain both.' },
      { n: 3, f: 'Questions to ask when evaluating data', b: 'Is it nominal or real? An average or a total? Is the time period long enough? Does the graph truncate an axis or use two scales? Would a share rather than an amount change the message? What is missing?' },
      { n: 4, f: 'Interpreting an extract: what should you do with the figures?', b: 'Extract the figures, quantify them (with unit and year), connect them to a concept, and judge their limits. Note who is speaking, since a firm, a government and a union may present the same figure differently.' },
    ]),
  ],
};
