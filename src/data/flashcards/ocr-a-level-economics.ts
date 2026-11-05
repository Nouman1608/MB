/**
 * D-438 -- flashcards for OCR A Level Economics H460 (Version 3.0 (June 2026),
 * for first assessment in 2021).
 *
 * One block per subtopic (Microeconomics, Macroeconomics) or per topic (Themes
 * in economics, which the syllabus record itemises without subtopics), in
 * syllabus order. Card ids are `<subtopic number>-<n>` or `<topic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 * Id note: the record numbers the subtopics of BOTH Microeconomics and
 * Macroeconomics '1' to '5', and Themes in economics is topic 3, so several
 * blocks share an id pattern. Microeconomics cards use n = 1, 2, 3...;
 * Macroeconomics cards use n = 101, 102, 103...; Themes cards use n = 201,
 * 202... so no id can collide. Keep to that split when adding cards.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs H460); origin 'revision-notes'.
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

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const MICRO = 'microeconomics-ocr-alevel-economics';
const MACRO = 'macroeconomics-ocr-alevel-economics';
const THEMES = 'themes-in-economics-ocr-alevel-economics';

const FP1 = 'ocr-a-level-economics-fiscal-policy-1-the-budget-and-taxation-revision-notes';
const PROT = 'ocr-a-level-economics-protectionism-and-the-case-for-free-trade-revision-notes';

export const DECK_OCR_A_LEVEL_ECONOMICS: FlashcardDeck = {
  boardSlug: 'ocr',
  qualificationSlug: 'a-level',
  subjectSlug: 'economics',
  syllabusCode: 'H460',
  syllabusSeries: 'Version 3.0 (June 2026), for first assessment in 2021',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // 1 Microeconomics (n from 1)
    ...sub(MICRO, 'introduction-to-microeconomics-ocr-alevel-economics', '1', [
      { n: 1, f: 'Scarcity and the basic economic problem', b: 'Scarcity: unlimited wants set against limited resources.\nThe basic economic problem: scarcity forces choices over what to make, how to make it and who gets it.' },
      { n: 2, f: 'Economic good vs free good', b: 'Economic good: uses scarce resources to supply, so it has a cost of provision.\nFree good: needs no resources to supply, so it has no price. A good free at the point of use (paid for by taxes) is still an economic good.' },
      { n: 3, f: 'Positive vs normative statement', b: 'Positive: describes or predicts; evidence can check it.\nNormative: expresses an opinion on what ought to happen (a value judgement).' },
      { n: 4, f: 'The margin and rationality', b: 'The margin: the point of deciding on one more or one less unit.\nRationality: acting consistently to maximise a goal using the information available.' },
      { n: 5, f: 'Opportunity cost vs trade-off', b: 'Opportunity cost: the value of the best option passed over when choosing.\nTrade-off: the relationship of accepting less of one thing to get more of another.' },
      { n: 6, f: 'PPF: movement along vs shift', b: 'Movement along: a choice between the two goods (reallocation).\nShift: a change in the economy\'s capacity (outward from more or better resources or technology). Any point on the frontier is productively efficient.' },
      { n: 7, f: 'Specialisation vs division of labour', b: 'Specialisation: concentrating on a narrow range of goods or services; can apply to a person, firm, region or country.\nDivision of labour: splitting a production process into tasks, a separate worker on each.' },
      { n: 8, f: 'Why does specialisation need money rather than barter?', b: 'Barter needs a double coincidence of wants. Money, generally accepted as a medium of exchange, makes trading surpluses easy, so specialisation becomes worthwhile.' },
      { n: 9, f: 'Market, planned and mixed economies', b: 'Market: private decisions coordinated by prices; private ownership.\nPlanned: a central authority decides allocation; mostly state ownership.\nMixed: market and government both allocate, in varying proportions.' },
      { n: 10, f: 'Sustainability', b: 'Using resources to satisfy today\'s needs in a way that leaves future generations able to satisfy their own.' },
    ]),
    ...sub(MICRO, 'the-role-of-markets-ocr-alevel-economics', '2', [
      { n: 1, f: 'Contraction of demand vs decrease in demand', b: 'Contraction: a movement along the demand curve after a rise in the good\'s own price.\nDecrease: a leftward shift caused by anything else (lower income for a normal good, a cheaper substitute).' },
      { n: 2, f: 'A shop cuts price from £20 to £19 and sales rise from 250 to 270. PED, and what happens to revenue?', b: 'Price −5%, quantity +8%. PED = 8 ÷ −5 = −1.6, elastic. Revenue rises from £5,000 to £5,130.' },
      { n: 3, f: 'Inferior good vs necessity (YED)', b: 'Inferior: YED below 0 (demand falls as income rises).\nNecessity: YED between 0 and 1 (normal but income inelastic).\nLuxury: YED above 1.' },
      { n: 4, f: 'Consumer surplus and producer surplus', b: 'Consumer surplus: the most buyers would pay minus the price paid; area beneath demand, above price.\nProducer surplus: price received minus the least sellers would accept; area above supply, below price.' },
      { n: 5, f: 'Joint supply vs competitive supply', b: 'Joint: one production process yields two or more products (beef and leather).\nCompetitive: producers can switch inputs between products, so the goods compete for resources.' },
      { n: 6, f: 'Why are agricultural prices volatile?', b: 'Supply shifts with weather and harvests, and both demand and short-run supply are price inelastic, so a small shift in supply causes a large change in price.' },
      { n: 7, f: 'Productive, allocative and economic efficiency', b: 'Productive: output at the lowest possible average cost (MC = AC).\nAllocative: resources go to what society values most (P = MC; with externalities, MSB = MSC).\nEconomic efficiency: both together.' },
      { n: 8, f: 'Externality, and the social cost and benefit identities', b: 'A cost or benefit that lands on someone outside the transaction and is left out of the price.\nMSC = MPC + MEC. MSB = MPB + MEB. Negative externalities give over-production; positive give under-production.' },
      { n: 9, f: 'Public good (OCR description)', b: 'Non-excludable and non-rival (non-diminishable), also non-rejectable, with a zero marginal cost of an extra user. Free riders mean it cannot be sold profitably, so the market may not provide it.' },
      { n: 10, f: 'Merit good vs public good', b: 'A merit good can be bought and sold in a market but is under-consumed because consumers undervalue its benefits. A public good cannot be sold profitably at all.' },
      { n: 11, f: 'Buffer stock scheme', b: 'An agency buys when the price falls to the floor (adding to stocks) and sells when it reaches the ceiling (releasing stocks), to keep the price within a band. It fails if the floor is above the long-run price, because stocks keep growing.' },
      { n: 12, f: 'Cost-benefit analysis: the main stages', b: 'Identify all private and external costs and benefits, put money values on them (including shadow prices for unpriced items), discount future values to present values, compare, and test the sensitivity of the result.' },
      { n: 13, f: 'Environmental Kuznets curve', b: 'An inverted U: environmental damage per head rises with income per head, peaks, then falls as richer societies demand and can afford cleaner production.' },
    ]),
    ...sub(MICRO, 'business-objectives-ocr-alevel-economics', '3', [
      { n: 1, f: 'Fixed costs £150 a day; at 30 jars TVC is £210. Find TC, AC, AFC and AVC.', b: 'TC = £360. AC = 360 ÷ 30 = £12.00. AFC = 150 ÷ 30 = £5.00. AVC = 210 ÷ 30 = £7.00. Check: 5.00 + 7.00 = 12.00.' },
      { n: 2, f: 'Diminishing returns vs negative returns', b: 'Diminishing returns: the marginal product of the variable factor falls.\nNegative returns: total product falls (MP below zero).' },
      { n: 3, f: 'Output with 1 to 5 cleaners is 5, 14, 22, 27, 29 cars an hour. When do diminishing returns begin?', b: 'MP is 5, 9, 8, 5, 2. It peaks at the second cleaner and falls from the third, so diminishing returns begin with the third cleaner.' },
      { n: 4, f: 'LRAC, internal and external economies of scale', b: 'LRAC: the lowest cost per unit at each output when every factor can change; the envelope of SRAC curves.\nInternal economy: a movement along LRAC as the firm grows.\nExternal economy: LRAC shifts down as the industry grows.' },
      { n: 5, f: 'Minimum efficient scale (MES)', b: 'The smallest output at which LRAC reaches its lowest level. Market size ÷ MES gives roughly how many firms the market can support at lowest cost.' },
      { n: 6, f: 'MR for a straight-line demand curve, and MR in terms of PED', b: 'If P = a − bQ, then MR = a − 2bQ (same intercept, twice the slope).\nMR = P(1 + 1/PED), so MR is zero where PED = −1.' },
      { n: 7, f: 'Accounting profit vs economic profit', b: 'Accounting profit: TR minus explicit costs.\nEconomic profit: TR minus explicit and implicit (opportunity) costs. Normal profit is included within total cost.' },
      { n: 8, f: 'Profit, revenue and sales maximisation (OCR)', b: 'Profit maximisation: MR = MC, with MC cutting MR from below.\nRevenue maximisation: MR = 0.\nSales volume maximisation: the largest output with price at least equal to average cost.' },
      { n: 9, f: 'Satisficing, utility maximisation and growth maximisation', b: 'Satisficing: aiming for a satisfactory profit, then pursuing other goals.\nUtility maximisation: decision makers pursue their own pay, status and leisure.\nGrowth maximisation: expanding long-run size.' },
      { n: 10, f: 'Principal-agent problem', b: 'The agent\'s (managers\') aims differ from the principal\'s (shareholders\'), and information is unequal, so managers may not maximise profit.' },
      { n: 11, f: 'Corporate social responsibility and social welfare objectives', b: 'CSR: voluntary action for stakeholders beyond legal requirements.\nSocial welfare objective: putting society\'s gain first, often covering costs only (common in public and not-for-profit organisations).' },
      { n: 12, f: 'Short-run shutdown vs break-even', b: 'Shut down when price is below AVC.\nBreak even (normal profit) when price equals AC.' },
    ]),
    ...sub(MICRO, 'market-structures-ocr-alevel-economics', '4', [
      { n: 1, f: 'Perfect competition: long-run equilibrium and efficiency', b: 'Supernormal profit attracts entry until price equals minimum AC: normal profit only. P = MC (allocatively efficient) and output at lowest AC (productively efficient).' },
      { n: 2, f: 'Monopolistic competition: long-run outcome', b: 'Entry removes supernormal profit, so AR is tangent to AC: normal profit, with excess capacity (output below minimum AC) and P above MC.' },
      { n: 3, f: 'Oligopoly and interdependence', b: 'A market shared by a few big sellers whose choices affect one another: one firm\'s best action depends on how rivals respond. Rivalry is often through non-price competition.' },
      { n: 4, f: 'Dominant strategy vs Nash equilibrium', b: 'Dominant strategy: a choice that is best whatever the rival does.\nNash equilibrium: neither player can gain by changing alone, given the other\'s choice.' },
      { n: 5, f: 'Concentration ratio', b: 'CRn: the combined market share of the n largest firms. A high ratio suggests oligopoly or monopoly, but says nothing about how firms behave.' },
      { n: 6, f: 'Monopoly: profit, deadweight loss and efficiency', b: 'Output at MR = MC, price from AR. Supernormal profit is the rectangle (P − ATC) × Q. The deadweight loss is the triangle between AR and MC from the monopoly output to the P = MC output. P above MC: allocatively inefficient.' },
      { n: 7, f: 'Natural monopoly', b: 'An industry in which average cost is still falling at the size of the whole market, so a single firm supplies most cheaply. Setting P = MC would make a loss.' },
      { n: 8, f: 'Price discrimination', b: 'Different prices for the same product, not explained by cost differences. Needs market power, groups with different PED, and markets kept separate. The less elastic group pays more.' },
      { n: 9, f: 'Perfectly contestable market', b: 'Entry and exit are costless (no sunk costs), so the threat of hit-and-run entry disciplines incumbents whatever their number. A market with no legal barriers can still be uncontestable if entry needs unrecoverable spending.' },
      { n: 10, f: 'Horizontal, vertical (backward, forward) and conglomerate integration', b: 'Horizontal: rivals at the same stage of one industry.\nVertical: different stages; backward towards suppliers, forward towards customers.\nConglomerate: unrelated industries.' },
      { n: 11, f: 'Regulation vs competition policy', b: 'Regulation sets rules for a particular industry, such as a price cap of inflation minus X.\nCompetition policy applies across industries: merger control, action on cartels and abuse of dominance, market investigations.' },
      { n: 12, f: 'Monopsony in a product market', b: 'One (or a dominant) buyer able to push down the price it pays suppliers, for example a large supermarket buying from farmers.' },
    ]),
    ...sub(MICRO, 'the-labour-market-ocr-alevel-economics', '5', [
      { n: 1, f: 'Derived demand and MRP', b: 'Labour is demanded because of demand for the output it produces.\nMRP = MPP × MR (= price if the product market is perfectly competitive). The MRP curve is the demand curve for labour.' },
      { n: 2, f: 'Wage elasticity of demand for labour: formula and determinants', b: 'WED = % change in labour demanded ÷ % change in wage. More elastic when capital substitutes easily, product demand is elastic, labour is a large share of costs, and in the long run.' },
      { n: 3, f: 'Wages rise 2% while prices rise 3%. Change in real wages?', b: '1.02 ÷ 1.03 − 1 = −0.97%. Real pay fell, although nominal pay rose.' },
      { n: 4, f: 'Unit labour cost and productivity', b: 'ULC = total labour cost ÷ output (= wage ÷ output per hour). Productivity is output per worker or per hour. High productivity can come with high wages and still keep ULC low.' },
      { n: 5, f: 'Monetary and non-monetary factors affecting labour supply', b: 'Monetary: wage, overtime, bonuses, cash benefits, tax.\nNon-monetary: job satisfaction, hours, risk, location, status, security, training.' },
      { n: 6, f: 'Transfer earnings vs economic rent', b: 'Transfer earnings: the minimum payment needed to keep a worker in the job (what they could earn in the next best alternative).\nEconomic rent: earnings above transfer earnings.' },
      { n: 7, f: 'Substitution and income effects of a wage rise on hours worked', b: 'Substitution effect: leisure is dearer, so work more.\nIncome effect: higher income means more leisure can be afforded, so work less. If the income effect dominates at high wages, the supply curve can bend backwards.' },
      { n: 8, f: 'Monopsony employer: employment and wage', b: 'Employment where MCL = MRP; the wage is read from the supply curve (ACL) at that employment, below MRP and below the competitive wage.' },
      { n: 9, f: 'Effect of a minimum wage under monopsony', b: 'A floor between the monopsony wage and the competitive wage makes MCL flat at the floor, so the firm can raise both the wage and employment. Set too high, employment falls.' },
      { n: 10, f: 'Reasons for wage differentials', b: 'Differences in skills and productivity (MRP), training costs, non-monetary features of jobs, trade union and monopsony power, labour immobility, and discrimination.' },
    ]),

    // 2 Macroeconomics (n from 101)
    ...sub(MACRO, 'aggregate-demand-and-aggregate-supply-ocr-alevel-economics', '1', [
      { n: 101, f: 'The three methods of measuring national income', b: 'Output: sum of value added by every sector.\nIncome: sum of factor incomes (wages, rent, interest, profit).\nExpenditure: C + I + G + (X − M) on final goods and services.' },
      { n: 102, f: 'APC vs MPC', b: 'APC = C ÷ Yd (consumption out of all disposable income).\nMPC = ΔC ÷ ΔYd (out of extra income). APC + APS = 1 and MPC + MPS = 1.' },
      { n: 103, f: 'Multiplier vs accelerator', b: 'Multiplier: links a change in spending to a larger change in income (k = 1 ÷ MPW).\nAccelerator: links a change in income to net investment (net investment = v × ΔY).' },
      { n: 104, f: 'MPS 0.1, MRT 0.2, MPM 0.2. An injection of 30bn. Shift of AD?', b: 'MPW = 0.5, so k = 2. AD shifts by 2 × 30 = 60bn. The rise in real GDP is smaller if prices rise.' },
      { n: 105, f: 'SRAS vs LRAS (OCR definitions)', b: 'SRAS: aggregate supply when some costs, especially nominal wages, are fixed; slopes upwards.\nLRAS: productive capacity once costs and prices have adjusted; depends on factors and technology.' },
      { n: 106, f: 'Macroeconomic equilibrium vs long-run equilibrium', b: 'Macroeconomic equilibrium: where AD equals SRAS.\nLong-run equilibrium: AD, SRAS and LRAS meet at one point.' },
      { n: 107, f: 'Output gap and the economic cycle', b: 'Economic cycle: repeated fluctuation of real GDP around its long-run trend.\nOutput gap = (actual − potential) ÷ potential × 100. Negative: spare capacity. Positive: overstretched resources.' },
      { n: 108, f: 'Short-run vs long-run Phillips curve', b: 'SRPC: an inverse relationship between unemployment and inflation for a given expected inflation rate.\nLRPC: vertical at the natural rate of unemployment: no lasting trade-off.' },
      { n: 109, f: 'Natural rate of unemployment vs NAIRU', b: 'Natural rate: unemployment left when the labour market clears (frictional plus structural).\nNAIRU: the rate at which inflation is stable. Often similar in value, but different ideas.' },
      { n: 110, f: 'Inflation = expected + 0.6 × (5 − U), adaptive expectations, starting at 3%. U is held at 3.5%. Inflation in years 1 to 3?', b: 'Each year adds 0.6 × 1.5 = 0.9 points: 3.9%, 4.8%, 5.7%. Returning U to 5% leaves inflation at 5.7%: no lasting gain in jobs.' },
      { n: 111, f: 'Keynesian vs classical (monetarist) view of the macroeconomy', b: 'Keynesian: the economy can stay below full employment; wages and prices are sticky, so demand management matters.\nClassical/monetarist: markets clear in the long run; LRAS is vertical, so demand policy affects only prices in the long run.' },
      { n: 112, f: 'Stagflation and a cost-push shock', b: 'Cost-push shock: a rise in costs that shifts SRAS left.\nStagflation: falling output (or slow growth) together with rising prices.' },
    ]),
    ...sub(MACRO, 'economic-policy-objectives-ocr-alevel-economics', '2', [
      { n: 101, f: 'Primary, secondary and tertiary sectors', b: 'Primary: extracting or harvesting natural resources.\nSecondary: making goods from materials (manufacturing, construction).\nTertiary: services.' },
      { n: 102, f: 'Nominal GDP 2,200 (index 100) then 2,310 (index 104). Real growth?', b: 'Real GDP in year 2 = 2,310 ÷ 104 × 100 = 2,221.15. Real growth = 21.15 ÷ 2,200 = 0.96%, although nominal growth was 5.0%.' },
      { n: 103, f: 'Sustained vs sustainable growth', b: 'Sustained: growth that continues over a long period without being cut short by instability.\nSustainable: growth that does not damage the environment or deplete resources future generations need.' },
      { n: 104, f: 'Real growth of 1.5%, 2.0% and −0.5% in three years. Cumulative growth?', b: 'Multiply, do not add: 1.015 × 1.02 × 0.995 = 1.0301, so 3.01%.' },
      { n: 105, f: 'Population 16+ 30.0m, employed 19.2m, unemployed 0.8m. Unemployment rate and inactivity rate?', b: 'Labour force = 20.0m, so unemployment = 0.8 ÷ 20.0 = 4.0%. Inactive = 10.0m, so inactivity = 10.0 ÷ 30.0 = 33.3%.' },
      { n: 106, f: 'Hysteresis', b: 'A spell of unemployment raises later unemployment, because skills fade and employers screen out the long-term jobless.' },
      { n: 107, f: 'Disinflation vs deflation', b: 'Inflation falls from 6% to 2%: disinflation; the price level still rises.\nInflation of −1%: deflation; the price level falls.' },
      { n: 108, f: 'CPI vs RPI', b: 'They use different averaging methods, treat housing costs differently (RPI includes mortgage interest payments) and cover slightly different households, so the two give different inflation rates.' },
      { n: 109, f: 'Why aim for low and stable inflation rather than zero?', b: 'A little inflation lets real wages adjust without cutting money pay and keeps the economy away from the risks of deflation.' },
      { n: 110, f: 'HDI, GPI and the Easterlin paradox', b: 'HDI: the cube root of health × education × income indices.\nGPI: consumption adjusted for inequality, plus unpaid work, minus pollution, depletion and crime costs.\nEasterlin: richer people are happier at a point in time, but average happiness rises little as a country grows.' },
      { n: 111, f: 'Lorenz curve and Gini coefficient', b: 'Lorenz curve: cumulative % of income or wealth against cumulative % of households, poorest first.\nGini: area between the diagonal and the curve ÷ area under the diagonal; 0 equal, 1 one household owns all.' },
      { n: 112, f: 'Inequality vs poverty, and absolute vs relative poverty', b: 'Inequality is about gaps between shares; poverty is about falling below a line.\nAbsolute: below a fixed real level for basic needs. Relative: well below a typical level, such as under 60% of median income.' },
    ]),
    ...sub(MACRO, 'implementing-policy-ocr-alevel-economics', '3', [
      { n: 101, f: 'Average vs marginal tax rate', b: 'Average: tax over total income. Marginal: the rate on the extra income. In a progressive system, the marginal rate exceeds the average rate.', src: FP1 },
      { n: 102, f: 'Progressive vs regressive tax: how to test', b: 'Look at the average rate, not the amount paid. Progressive: the average rate rises with income. Regressive: it falls. Proportional: it stays the same.', src: FP1 },
      { n: 103, f: 'Direct vs indirect tax', b: 'Direct: on income, profit and wealth. Indirect: on spending. The legal payer of an indirect tax is the seller, but the burden may fall on the buyer.', src: FP1 },
      { n: 104, f: 'Current vs capital spending, and overall vs current budget', b: 'Capital spending buys lasting assets; current spending covers running costs (debt interest is current).\nThe overall budget balance includes capital spending; the current balance does not.', src: FP1 },
      { n: 105, f: 'Budget position vs fiscal stance', b: 'Position is the balance (surplus, deficit or balanced). Stance is the direction policy pushes demand: expansionary, contractionary or neutral.', src: FP1 },
      { n: 106, f: 'Cyclical vs structural budget balance', b: 'Cyclical: changes with the economic cycle without any new decision. Structural: what would remain with the economy at trend; it needs a policy change or lasting economic change.', src: FP1 },
      { n: 107, f: 'Budget deficit, national debt and the debt-to-GDP ratio', b: 'Deficit: spending exceeds revenue this year (a flow). Debt: the stock owed on one date. Debt can rise in money terms while the debt-to-GDP ratio falls, if GDP grows fast enough.' },
      { n: 108, f: 'Monetary policy instruments', b: 'The policy interest rate (which commercial rates follow), the money supply, quantitative easing and the exchange rate, used to influence AD and meet the inflation target.' },
      { n: 109, f: 'Liquidity trap', b: 'Interest rates so low that further cuts fail to raise spending, as people hold cash. One reason for using quantitative easing.' },
      { n: 110, f: 'Tax 30% and benefits lost at 45% of net pay. Effective marginal rate on an extra 100?', b: 'Net after tax = 70. Benefit lost = 0.45 × 70 = 31.5. Kept = 38.5, so the effective marginal rate is 61.5%.' },
      { n: 111, f: 'Market-based vs interventionist supply-side policies', b: 'Market-based: deregulation, tax cuts, privatisation, labour market flexibility.\nInterventionist: state-funded training and education, infrastructure, subsidies for R&D (justified by spillovers). Both aim to shift LRAS right.' },
      { n: 112, f: 'Adaptive vs rational expectations, and why credibility matters', b: 'Adaptive: forecasts based on past outcomes. Rational: forecasts use all available information.\nUnder rational expectations a credible announcement can change behaviour quickly, lowering the cost of reducing inflation.' },
    ]),
    ...sub(MACRO, 'the-global-context-ocr-alevel-economics', '4', [
      { n: 101, f: 'Globalisation (OCR)', b: 'The process by which economies become more closely linked and more dependent on each other as goods, services, capital, people, technology and ideas cross borders. Free trade is one policy and one channel, not the whole process.' },
      { n: 102, f: 'Absolute vs comparative advantage', b: 'Absolute: fewer resources per unit, or more output from the same resources.\nComparative: giving up less of other goods to make a good (lower opportunity cost).' },
      { n: 103, f: 'Heckscher-Ohlin theory', b: 'Countries export goods that use their abundant factor intensively and import the others. Weakness: it ignores technology, skills and economies of scale, and cannot explain much trade between similar countries.' },
      { n: 104, f: 'Export price index 108, import price index 96. Terms of trade?', b: '108 ÷ 96 × 100 = 112.5, an improvement of 12.5%: each unit of exports buys more imports.' },
      { n: 105, f: 'Export prices rise 8% and PED for exports is −2. What happens to export revenue?', b: 'Volume falls 16%, so revenue = 1.08 × 0.84 = 0.9072 of its old level, a fall of 9.3%. An improvement in the terms of trade can cut revenue when demand is elastic.' },
      { n: 106, f: 'When does a tariff protect effectively? Two points to weigh', b: 'Size: a large importer can pass part of the tariff to exporters; a small one cannot.\nTime: temporary and declining protection beats permanent.', src: PROT },
      { n: 107, f: 'Tariffs on components, and the prohibitive tariff', b: 'Tariffs on inputs raise domestic costs. A prohibitive tariff cancels all imports, so its revenue is zero.', src: PROT },
      { n: 108, f: 'Free trade area, customs union, monetary union, economic union', b: 'FTA: no barriers between members, own external tariffs.\nCustoms union: plus a common external tariff.\nMonetary union: plus a single currency and central bank.\nEconomic union: plus a single market and common policies.' },
      { n: 109, f: 'Trade creation vs trade diversion', b: 'Creation: dearer home output replaced by cheaper partner imports.\nDiversion: imports switched from a cheaper outsider to a dearer partner.' },
      { n: 110, f: 'WTO: most-favoured-nation rule and bound tariffs', b: 'MFN: a concession given to one WTO member must be given to all.\nBound tariff: a ceiling above which a member has promised not to raise a tariff.' },
      { n: 111, f: 'Balance of payments: the four accounts and the identity', b: 'Current (goods, services, income, current transfers), capital, financial (direct, portfolio, other investment, reserves), and errors and omissions. They sum to zero.' },
      { n: 112, f: 'Effective (trade-weighted) vs bilateral exchange rate; nominal vs real', b: 'Bilateral: between two currencies. Effective: an index against many partners weighted by trade.\nReal exchange rate: the nominal rate adjusted for relative price levels.' },
      { n: 113, f: 'Purchasing power parity: absolute and relative', b: 'Absolute PPP: the exchange rate equals the ratio of the two price levels, so money buys the same basket everywhere.\nRelative PPP: the rate changes by the gap between the two inflation rates.' },
      { n: 114, f: 'Marshall-Lerner condition and J-curve', b: 'Marshall-Lerner: a depreciation improves the trade balance only if PEDx + PEDm > 1 (positive values).\nJ-curve: the balance worsens after a depreciation, then improves, because short-run elasticities are low.' },
    ]),
    ...sub(MACRO, 'the-financial-sector-ocr-alevel-economics', '5', [
      { n: 101, f: 'Financial intermediary and the role of the financial sector', b: 'An institution linking savers with borrowers. The sector facilitates saving, lends to businesses and households, provides markets for equities and bonds, and facilitates payments.' },
      { n: 102, f: 'Retail, commercial and investment banks', b: 'Retail: serves households and small firms.\nCommercial: lends to and takes deposits from businesses.\nInvestment: issues and trades securities and advises large clients.' },
      { n: 103, f: 'Coupon vs yield on a bond', b: 'The coupon is the fixed annual payment. Yield = annual payment ÷ price × 100, the return at the current price. Price and yield move in opposite directions.' },
      { n: 104, f: 'Reserve ratio 10%, new deposit 100. Maximum total deposits and credit created?', b: 'Credit multiplier = 1 ÷ 0.10 = 10. Maximum deposits = 100 ÷ 0.10 = 1,000. Credit created = 1,000 − 100 = 900. A cash drain makes it smaller.' },
      { n: 105, f: 'Fisher equation of exchange', b: 'MV = PT: money supply × velocity of circulation = price level × transactions. With V and T stable, a rise in M raises P in proportion (the quantity theory).' },
      { n: 106, f: 'Lender of last resort', b: 'The central bank lends to solvent but illiquid banks against collateral, to stop a run spreading. It risks moral hazard: protection from loss encourages more risk.' },
      { n: 107, f: 'Solvent vs illiquid', b: 'Solvent: assets exceed liabilities.\nIlliquid: cannot meet immediate demands for cash, even if solvent.' },
      { n: 108, f: 'Capital ratio vs leverage ratio', b: 'Capital ratio: capital ÷ risk-weighted assets.\nLeverage ratio: capital ÷ total assets, so it cannot be gamed by low risk weights.' },
      { n: 109, f: 'Microprudential vs macroprudential regulation', b: 'Microprudential: the health of each individual firm.\nMacroprudential: risks across the whole financial system (systemic risk).' },
      { n: 110, f: 'IMF vs World Bank', b: 'IMF: macroeconomic stability, surveillance and short-term balance of payments lending, often with conditionality.\nWorld Bank: longer-term project and development finance.' },
      { n: 111, f: 'Savings gap and microfinance in developing economies', b: 'Savings gap: the investment needed for a target growth rate minus domestic saving.\nMicrofinance: small loans, savings and insurance for poor people and tiny firms excluded from formal finance.' },
    ]),

    // 3 Themes in economics (n from 201)
    ...topicOnly(THEMES, '3', [
      { n: 201, f: 'What does Component 03, Themes in economics, assess?', b: 'It is entirely synoptic: no content of its own, drawing on micro and macro applied to an unseen theme. One paper of 2 hours and 80 marks: 30 multiple-choice questions, then 50 marks of short and extended questions on the theme.' },
      { n: 202, f: 'Synoptic link: a rise in imported input prices', b: 'Micro: firms\' costs rise, supply shifts left, profit falls.\nMacro: cost-push pressure; SRAS shifts left, the price level rises and real output falls.' },
      { n: 203, f: 'Synoptic link: a rise in interest rates', b: 'Micro: dearer borrowing for firms and households, less demand for credit-financed goods.\nMacro: investment and consumption fall, so AD shifts left.' },
      { n: 204, f: 'Synoptic link: a tax on a good with a negative externality', b: 'Micro: supply shifts left; price rises and output falls towards the social optimum.\nMacro: the price level and tax revenue change; the burden may fall on low earners if the tax is regressive.' },
      { n: 205, f: 'Synoptic link: a higher exchange rate', b: 'Micro: imports cheaper for firms and consumers, exports dearer abroad.\nMacro: net exports fall, so AD shifts left; import prices ease inflation.' },
      { n: 206, f: 'Energy prices rise 40%; energy is 150 of a firm\'s 1,000 costs; short-run PED for energy −0.2. New total cost?', b: 'Energy use falls 8%, so spending = 150 × 1.40 × 0.92 = 193.2. Total cost = 193.2 + 850 = 1,043.2, a rise of 4.32%.' },
      { n: 207, f: 'Percentage change vs percentage-point change', b: 'A rate rising from 5% to 6% is a rise of 1 percentage point and of 20%. Percentage change = (new − old) ÷ old × 100.' },
      { n: 208, f: 'Pay rises from 2,000 to 2,120 while the price index goes from 100 to 106. Real pay growth?', b: 'Real pay in year 2 = 2,120 ÷ 106 × 100 = 2,000, so real growth is 0%, despite 6% nominal growth.' },
      { n: 209, f: 'How to evaluate in a synoptic answer', b: 'Judge through time (short run vs long run), scale (size of the change), stakeholders (who gains, who loses) and trade-offs, then give a final judgement and the factor that would change it.' },
    ]),
  ],
};
