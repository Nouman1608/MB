/**
 * D-438 -- flashcards for IB Diploma Programme Economics (first assessment 2022).
 *
 * One block per sub-topic, in syllabus order (units 1-4). Card ids are
 * `<sub-topic number>-<n>` and are permanent (browser progress is keyed by
 * them): add a new card with the next unused n, never renumber.
 *
 *   The syllabus record is not tiered, so no card carries a tier. HL-only
 *   content is marked in words: the card back ends "(HL only)", following
 *   the HL-only marks on Marlbridge's own IB DP Economics revision notes.
 *   Every card is authored (origin 'authored'). The course's revision notes
 *   carry no syllabusCodes, so scripts/flashcard-candidates.mjs lists no
 *   candidates for 'DP Economics' and no card can cite a page as `source`;
 *   the cards are still written from those pages.
 *
 * Worked figures are invented for illustration, as on the revision notes.
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

const U1 = 'ib-dp-economics-unit-1';
const U2 = 'ib-dp-economics-unit-2';
const U3 = 'ib-dp-economics-unit-3';
const U4 = 'ib-dp-economics-unit-4';

export const DECK_IB_IB_DP_ECONOMICS: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-dp',
  subjectSlug: 'economics',
  syllabusCode: 'DP Economics',
  syllabusSeries: 'First assessment 2022',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // Unit 1 Introduction to economics
    ...sub(U1, 'ib-dp-economics-1-1', '1.1', [
      { n: 1, f: 'Scarcity and opportunity cost', b: 'Scarcity: unlimited needs and wants against limited resources, so choices must be made.\nOpportunity cost: the value of the next best alternative given up. If repairing bicycles (90) is chosen over tutoring (80) and a market stall (60), the opportunity cost is 80, not 140.' },
      { n: 2, f: 'Free good versus economic good', b: 'Free good: has no opportunity cost, because using it takes nothing from anyone else.\nEconomic good: uses scarce resources, so it has an opportunity cost.' },
      { n: 3, f: 'The four factors of production and the three basic economic questions', b: 'Land, labour, capital, entrepreneurship.\nThe questions: what and how much to produce, how to produce, and for whom.' },
      { n: 4, f: 'PPC: what do a point inside, a point on and a point outside the curve show?', b: 'Inside: unemployment or inefficient use of resources.\nOn: resources used fully and efficiently.\nOutside: unattainable with current resources and technology (scarcity).' },
      { n: 5, f: 'PPC: opportunity cost per unit. Moving between two points, 30 extra bicycles cost 12 tonnes of grain.', b: 'Opportunity cost of one bicycle = units of Y lost ÷ units of X gained = 12 ÷ 30 = 0.4 tonnes of grain.\nA curve bowed outwards shows increasing opportunity cost; a straight line shows constant opportunity cost.' },
      { n: 6, f: 'Actual growth versus growth in production possibilities on a PPC', b: 'Actual growth: a move from a point inside the curve towards it.\nGrowth in production possibilities: the curve shifts or pivots outwards, from more or better-quality resources or better technology.' },
      { n: 7, f: 'Leakages and injections in the circular flow of income', b: 'Leakages (withdrawals): savings, taxation, imports.\nInjections: investment, government spending, exports.\nIf injections exceed leakages the flow tends to grow; if leakages exceed injections it tends to shrink.' },
      { n: 8, f: 'Free market, planned and mixed economies', b: 'Free market: households and firms decide; prices coordinate choices; private ownership.\nPlanned: government or central planners set output and distribution.\nMixed: markets plus government intervention.' },
    ]),
    ...sub(U1, 'ib-dp-economics-1-2', '1.2', [
      { n: 1, f: 'Positive versus normative statements', b: 'Positive: testable against evidence; can be false and still be positive ("unemployment is 4%").\nNormative: a value judgement about what ought to be, often using "should", "fair" or "better" ("unemployment must be reduced first").' },
      { n: 2, f: 'Ceteris paribus, and why it limits testing in economics', b: 'All other things held equal, so the effect of one variable can be isolated in a model. Real-world data rarely hold other factors constant, which makes economic hypotheses hard to test.' },
      { n: 3, f: 'The steps of economic methodology', b: 'Logic and assumptions → hypothesis → model or theory → test against empirical evidence → keep, revise or reject the hypothesis (refutation).' },
      { n: 4, f: 'Equality versus equity', b: 'Equality: equal shares.\nEquity: fairness, which may mean unequal shares. Which outcome is fairer is a normative question.' },
      { n: 5, f: 'Economic thought by century: Smith, Say, Keynes, behavioural economics', b: '18th: Adam Smith and laissez faire.\n19th: utility and the margin; Say\'s law (supply creates its own demand); the Marxist critique.\n20th: the Keynesian revolution, then the monetarist and new classical counter-revolution.\n21st: behavioural economics; the circular economy.' },
      { n: 6, f: 'The nine central concepts of the IB Economics course', b: 'Scarcity, choice, efficiency, equity, economic well-being, sustainability, change, interdependence, intervention.' },
    ]),

    // Unit 2 Microeconomics
    ...sub(U2, 'ib-dp-economics-2-1', '2.1', [
      { n: 1, f: 'Law of demand', b: 'Other things unchanged, a higher price means a lower quantity demanded: the demand curve slopes downward (price on the vertical axis, quantity on the horizontal).' },
      { n: 2, f: 'Movement along versus shift of the demand curve', b: 'A change in the good\'s own price causes a movement along the curve (extension or contraction).\nA change in any non-price determinant shifts the whole curve (increase or decrease in demand).' },
      { n: 3, f: 'Non-price determinants of demand', b: 'Income (normal and inferior goods), tastes and preferences, expectations of future prices, prices of related goods (substitutes and complements), and the number of consumers.' },
      { n: 4, f: 'What happens to demand for a good when the price of a substitute rises? When the price of a complement rises?', b: 'Substitute price rises: demand for the good shifts right (buyers switch to it).\nComplement price rises: demand for the good shifts left (fewer buy the pair).' },
      { n: 5, f: 'Market demand from individual demand', b: 'Add the quantities each consumer demands at each price (horizontal summation). Add quantities, not prices.' },
      { n: 6, f: 'Assumptions underlying the law of demand', b: 'Substitution effect: a lower price makes the good cheaper relative to alternatives.\nIncome effect: a lower price raises purchasing power.\nDiminishing marginal utility: each extra unit gives less satisfaction, so buyers take more only at a lower price. (HL only)' },
    ]),
    ...sub(U2, 'ib-dp-economics-2-2', '2.2', [
      { n: 1, f: 'Law of supply', b: 'With nothing else changing, a rise in price raises the quantity supplied: the supply curve slopes upward.' },
      { n: 2, f: 'Non-price determinants of supply', b: 'Costs of factors of production, prices of related goods (competitive and joint supply), indirect taxes, subsidies, future price expectations, technology and the number of firms.' },
      { n: 3, f: 'Competitive supply versus joint supply', b: 'Competitive supply: same inputs, either good. A higher price of oats reduces the supply of wheat.\nJoint supply: produced together. A higher price of lamb increases the supply of wool.' },
      { n: 4, f: 'Effect of a per-unit indirect tax and a per-unit subsidy on the supply curve', b: 'Tax: supply shifts up (left) by a vertical distance equal to the tax.\nSubsidy: supply shifts down (right) by the subsidy.\nA producer that supplied 50 at 9 needs 12 after a tax of 3, or 6 with a subsidy of 3.' },
      { n: 5, f: 'Why does the supply curve slope upward? Explain using marginal returns.', b: 'With a fixed input, diminishing marginal returns mean each extra worker adds less output. At the same wage, marginal cost per unit rises, so producers need a higher price to supply more. Example: a wage of 90 and an extra 15 units gives MC = 6; if the next worker adds 9, MC = 10. (HL only)' },
    ]),
    ...sub(U2, 'ib-dp-economics-2-3', '2.3', [
      { n: 1, f: 'Market equilibrium, excess demand and excess supply', b: 'Equilibrium: the price at which quantity demanded equals quantity supplied.\nExcess demand (shortage): price below equilibrium, Qd > Qs.\nExcess supply (surplus): price above equilibrium, Qs > Qd.' },
      { n: 2, f: 'Effect on equilibrium price and quantity of: a rise in demand; a fall in supply', b: 'Rise in demand: D shifts right; price and quantity both rise.\nFall in supply: S shifts left; price rises and quantity falls.\nIf both curves shift, one of price or quantity is certain; the other depends on the relative size of the shifts.' },
      { n: 3, f: 'The functions of the price mechanism', b: 'Signalling: price changes tell buyers and sellers about changing relative scarcity.\nIncentive: a higher price encourages producers to supply more and consumers to buy less.\nRationing: price shares out scarce goods to those willing and able to pay.' },
      { n: 4, f: 'Consumer surplus and producer surplus', b: 'Consumer surplus: the most buyers would pay minus what they pay (area under demand, above price).\nProducer surplus: what sellers receive minus the least they would accept (area above supply, below price).\nSocial (community) surplus = consumer + producer surplus.' },
      { n: 5, f: 'Allocative efficiency in a competitive market', b: 'Output where marginal benefit (demand) equals marginal cost (supply), so social surplus is at its maximum. Producing more or less than this creates a welfare loss.' },
      { n: 6, f: 'Calculate surplus: demand intercept 20, supply intercept 2, equilibrium price 8 and quantity 50', b: 'Consumer surplus = ½ × 50 × (20 − 8) = 300.\nProducer surplus = ½ × 50 × (8 − 2) = 150.\nSocial surplus = 450. (HL only)' },
    ]),
    ...sub(U2, 'ib-dp-economics-2-4', '2.4', [
      { n: 1, f: 'Assumptions of rational consumer choice', b: 'Consumers are rational (compare costs and benefits and choose consistently), maximise utility, and have perfect information. (HL only)' },
      { n: 2, f: 'Biases: rule of thumb, anchoring and framing, availability', b: 'Rule of thumb: a simple shortcut for deciding quickly.\nAnchoring: a first number sways later judgements. Framing: the wording of the same facts changes the choice.\nAvailability: judging likelihood by how easily examples come to mind. (HL only)' },
      { n: 3, f: 'Bounded rationality, bounded self-control and bounded selfishness', b: 'Bounded rationality: limited information, time and thinking power restrict decisions.\nBounded self-control: knowing the better long-run choice but not acting on it.\nBounded selfishness: caring about fairness and others, not only own gain. (HL only)' },
      { n: 4, f: 'Choice architecture: default, restricted and mandated choice; nudge', b: 'Default: an option is pre-selected (opt-out). Restricted: fewer options offered. Mandated: an active choice must be made before going on.\nNudge: a change in presentation that steers choice without banning options or changing prices. (HL only)' },
      { n: 5, f: 'Business objectives other than profit maximisation', b: 'Corporate social responsibility (accepting costs for social or environmental aims), market share, satisficing (a satisfactory rather than maximum profit) and growth. Profit maximisation is output where MR = MC. (HL only)' },
      { n: 6, f: 'Evaluate: how far does behavioural economics weaken the rational model?', b: 'For the critique: biases are systematic and explain choices the model misses, such as under-saving.\nAgainst: the model still predicts average behaviour where choices are repeated and feedback corrects errors; behavioural results may not carry across settings. (HL only)' },
    ]),
    ...sub(U2, 'ib-dp-economics-2-5', '2.5', [
      { n: 1, f: 'PED: formula and example. Price rises from 60 to 66; quantity falls from 700 to 595.', b: 'PED = % change in quantity demanded ÷ % change in price.\nPrice +10%, quantity −15%: PED = −15 ÷ 10 = −1.5, so demand is price elastic.' },
      { n: 2, f: 'Perfectly inelastic, unitary and perfectly elastic demand: values and curves', b: 'PED 0: perfectly inelastic, a vertical line.\nPED 1: unitary, a rectangular hyperbola (total revenue constant).\nPED infinite: perfectly elastic, a horizontal line.' },
      { n: 3, f: 'Determinants of PED', b: 'More elastic with many close substitutes, a luxury, a large share of income and a long time period. More inelastic with few substitutes, a necessity, a small share of income and a short period.' },
      { n: 4, f: 'PED and total revenue: a cinema cuts its price from 12 to 10 and attendance rises from 600 to 780', b: 'PED = 30% ÷ −16.67% = −1.8: elastic.\nRevenue rises from 7,200 to 7,800. With elastic demand, price and revenue move in opposite directions; with inelastic demand they move together.' },
      { n: 5, f: 'YED: formula and example. Income rises 10%; restaurant meals rise 30% and instant noodles fall 10%.', b: 'YED = % change in quantity demanded ÷ % change in income.\nMeals: +3.0, normal and income elastic (luxury).\nNoodles: −1.0, inferior.\nBetween 0 and 1: income inelastic (necessity).' },
      { n: 6, f: 'Why does PED vary along a straight-line demand curve?', b: 'The slope is constant but the percentage changes differ. The upper section is elastic, the midpoint is unitary (where total revenue is at its maximum) and the lower section is inelastic. (HL only)' },
      { n: 7, f: 'Why is PED generally lower for primary commodities than for manufactured goods?', b: 'Commodities have few close substitutes and are often necessities or essential inputs, are a small share of the cost of the final good, and have demand derived from the final product. Manufactures can be branded and differentiated. (HL only)' },
      { n: 8, f: 'Why does YED matter for an economy\'s sectoral structure?', b: 'Agriculture has low YED and grows more slowly than income; services have high YED and grow faster. So as incomes rise, the share of services in output tends to rise. (HL only)' },
    ]),
    ...sub(U2, 'ib-dp-economics-2-6', '2.6', [
      { n: 1, f: 'PES: formula and example. Price rises from 20 to 25 and quantity supplied from 160 to 200.', b: 'PES = % change in quantity supplied ÷ % change in price.\nPrice +25%, quantity +25%: PES = 1.0, unitary. PES is positive on an upward-sloping supply curve.' },
      { n: 2, f: 'Reading a straight-line supply curve: which PES does it show?', b: 'Meets the price axis: elastic (above 1).\nMeets the quantity axis: inelastic (below 1).\nPasses through the origin: unitary (1), however steep.\nVertical: 0. Horizontal: infinite.' },
      { n: 3, f: 'Determinants of PES', b: 'Time (longer period, more elastic), mobility of factors of production, unused capacity, ability to store stocks, and the rate at which costs increase as output rises.' },
      { n: 4, f: 'Why might supply be inelastic in the short run but elastic in the long run?', b: 'In the short run at least one input (such as capital) is fixed and output cannot rise quickly. In the long run all inputs can change, new capacity can be built and firms can enter, so the long-run supply curve is flatter.' },
      { n: 5, f: 'Why is PES generally lower for primary commodities than for manufactured goods?', b: 'Production takes a long time (growing seasons, mine development), land and deposits are fixed, many are perishable or hard to store, and extra output brings steeply rising costs. Manufacturers can add shifts and hold stocks. (HL only)' },
    ]),
    ...sub(U2, 'ib-dp-economics-2-7', '2.7', [
      { n: 1, f: 'Reasons for government intervention in markets', b: 'To earn government revenue, support firms, support low-income households, influence the level of production or consumption, correct market failure, and promote equity.' },
      { n: 2, f: 'Price ceiling (maximum price): where is it set and what are the effects?', b: 'Set below equilibrium to bind. Quantity demanded rises and quantity supplied falls, so there is a shortage; quantity traded is Qs. Possible black markets, queues and lower quality.' },
      { n: 3, f: 'Price floor (minimum price): where is it set and what are the effects?', b: 'Set above equilibrium to bind. Quantity supplied exceeds quantity demanded, so there is a surplus. The government may have to buy the surplus, at a cost to taxpayers.' },
      { n: 4, f: 'Indirect tax versus subsidy: price paid and price received', b: 'Tax: supply shifts up by the tax; consumers pay a higher price and producers keep that price minus the tax.\nSubsidy: supply shifts down; consumers pay less and producers receive the new price plus the subsidy.' },
      { n: 5, f: 'Direct provision versus command and control regulation', b: 'Direct provision: the government supplies a service itself, funded by taxes; widens access but has an opportunity cost.\nCommand and control: rules, limits or bans set by law; clear and quick but needs inspection and enforcement.' },
      { n: 6, f: 'Tax incidence calculation: demand P = 200 − 4Q, supply P = 20 + 2Q, tax of 18 per unit', b: 'Before: Q = 30, P = 80. After: 200 − 4Q = 38 + 2Q, so Q = 27 and consumers pay 92; producers keep 74.\nConsumers bear 12, producers 6. Revenue = 18 × 27 = 486. Welfare loss = ½ × 18 × 3 = 27. (HL only)' },
      { n: 7, f: 'Consumer nudges as a form of intervention', b: 'A change in how a choice is framed or set by default. Strength: cheap and keeps freedom of choice. Limits: effects can be small or uncertain, and people disagree about who decides what is best for the chooser. (HL only)' },
    ]),
    ...sub(U2, 'ib-dp-economics-2-8', '2.8', [
      { n: 1, f: 'Externality, MSC and MSB', b: 'Externality: a side effect of a transaction on a third party who neither pays nor is paid.\nMSC = MPC + external cost. MSB = MPB + external benefit.\nThe social optimum is where MSB = MSC.' },
      { n: 2, f: 'Diagram in words: negative externality of production', b: 'Axes: price or cost and quantity. MSC lies above MPC. The market produces where MPB = MPC, more than the optimum where MSB = MSC: overproduction. The welfare loss triangle lies between MSC and MSB from the optimum to the market output. Example: factory pollution.' },
      { n: 3, f: 'Which curve shifts for each type of externality, and what is the market outcome?', b: 'Negative production: MSC above MPC, overproduction.\nNegative consumption: MSB below MPB, overconsumption.\nPositive production: MSC below MPC, underproduction.\nPositive consumption: MSB above MPB, underconsumption (education).' },
      { n: 4, f: 'Common pool resources and the tragedy of the commons', b: 'Common pool resources are rivalrous but non-excludable. Each user gets the whole gain from extra use but the damage to the stock is shared, so the resource is overused: unsustainable production and a negative externality.' },
      { n: 5, f: 'Pigouvian tax versus tradable permits', b: 'A Pigouvian tax equal to the marginal external cost shifts MPC up to MSC; it fixes the price of pollution, but the external cost is hard to measure.\nTradable permits fix the quantity of pollution, and cuts are made by the firms that can cut most cheaply.' },
      { n: 6, f: 'Merit good versus positive externality', b: 'A merit good is under-consumed because people undervalue its benefit. A positive externality is a benefit to others. A good can be both (education).' },
      { n: 7, f: 'Welfare loss: MPB P = 40 − Q, MPC P = 4 + Q, marginal external cost 6', b: 'Market: Q = 18, P = 22. MSC = 10 + Q, so the optimum is Q = 15, P = 25.\nAt Q = 18, MSC = 28 and MSB = 22. Welfare loss = ½ × 3 × 6 = 9. (HL only)' },
    ]),
    ...sub(U2, 'ib-dp-economics-2-9', '2.9', [
      { n: 1, f: 'Public good', b: 'A good that is both non-rivalrous (one person\'s use leaves the amount for others unchanged) and non-excludable (non-payers cannot be stopped from using it). Example: a sea wall defending a whole bay.' },
      { n: 2, f: 'Why does the market fail to provide public goods?', b: 'Non-payers cannot be excluded, so people free ride: they use the good but pay nothing. Firms cannot earn enough revenue, so a good whose total benefit exceeds its cost may not be provided at all.' },
      { n: 3, f: 'Public good versus a good provided by the government, and versus a free good', b: 'A state school place is government-provided but rival and excludable, so not a public good.\nA free good has no opportunity cost; a public good uses scarce resources.' },
      { n: 4, f: 'Direct provision versus contracting out of public goods', b: 'Both are funded by compulsory taxation, removing free riding.\nDirect provision: a government agency produces the good.\nContracting out: a private firm chosen by tender produces it; competition can cut cost, but contracts are costly to write and monitor.' },
    ]),
    ...sub(U2, 'ib-dp-economics-2-10', '2.10', [
      { n: 1, f: 'Asymmetric information', b: 'One side of a deal holds more relevant knowledge than the other, so the market may misallocate resources or shrink. (HL only)' },
      { n: 2, f: 'Adverse selection versus moral hazard', b: 'Adverse selection: hidden quality or risk before the deal drives out the better cases (used goods).\nMoral hazard: behaviour changes after the deal because another party carries the risk (an insured owner stops maintaining equipment). (HL only)' },
      { n: 3, f: 'Adverse selection in numbers: half of pianos are good. Buyers value good at 900 and poor at 400; good sellers want at least 800.', b: 'Uninformed buyers offer the average: 0.5 × 900 + 0.5 × 400 = 650. Good sellers need 800, so they withdraw, and the market shrinks towards poor pianos. (HL only)' },
      { n: 4, f: 'Signalling versus screening', b: 'Signalling: the informed party reveals its quality by a costly action (a warranty, a qualification).\nScreening: the uninformed party designs a test that makes the informed party reveal its type (a menu of insurance contracts). (HL only)' },
      { n: 5, f: 'Government responses to asymmetric information', b: 'Legislation and regulation (compulsory disclosure of defects, licensing) and the provision of information (published inspection results). Limits: enforcement cost, rules lag behind practice, information may be misread. (HL only)' },
    ]),
    ...sub(U2, 'ib-dp-economics-2-11', '2.11', [
      { n: 1, f: 'Market power, and price taker versus price maker', b: 'Market power: a firm\'s ability to influence the price it charges.\nPrice taker: no market power; faces a horizontal demand curve (P = AR = MR).\nPrice maker: chooses a price along a downward-sloping demand curve. (HL only)' },
      { n: 2, f: 'Abnormal profit, normal profit and loss', b: 'Abnormal profit: AR > AC.\nNormal profit: AR = AC.\nLoss: AR < AC.\nA firm selling 6 units at 9 with TC 54 earns normal profit, not a loss. (HL only)' },
      { n: 3, f: 'Monopoly compared with perfect competition', b: 'Monopoly produces where MC = MR and sets price from AR, so output is lower and price higher than the competitive P = MC outcome. P > MC means allocative inefficiency and a welfare loss triangle between demand and MC. Possible benefits: economies of scale, profit for R&D. (HL only)' },
      { n: 4, f: 'Natural monopoly: why one firm, and how might it be regulated?', b: 'Economies of scale are so large that AC falls across all of market demand, so one firm supplies at lowest cost. P = MC gives a loss because MC is below AC; a regulated price of P = AC gives normal profit and more output than the unregulated firm. (HL only)' },
      { n: 5, f: 'Collusive versus non-collusive oligopoly', b: 'Collusive: firms agree price or output and act like a monopoly, producing where industry MC = MR. Non-collusive: firms compete, with a risk of a price war. Either way P > MC, so oligopoly is allocatively inefficient. (HL only)' },
      { n: 6, f: 'Oligopoly: the incentive to collude and the incentive to cheat', b: 'Incentive to collude: higher joint profit. Incentive to cheat: a firm that secretly undercuts gains at its rivals\' expense, so agreements tend to break down. (HL only)' },
      { n: 7, f: 'Concentration ratio: shares are 26, 21, 17, 13, 9, 8 and 6. Find CR3 and CR4.', b: 'Add the largest n shares.\nCR3 = 26 + 21 + 17 = 64%.\nCR4 = 64 + 13 = 77%. (HL only)' },
      { n: 8, f: 'Monopolistic competition: short run and long run', b: 'Many firms, free entry, differentiated products. Short run: abnormal profit is possible (MC = MR). Long run: entry shifts each firm\'s demand left until AR is tangent to AC, giving normal profit. P > MC, but there is product variety. (HL only)' },
    ]),
    ...sub(U2, 'ib-dp-economics-2-12', '2.12', [
      { n: 1, f: 'Income versus wealth', b: 'Income: a flow, what a household earns in a period from selling factors of production.\nWealth: a stock, the value of what a household owns at a point in time. (HL only)' },
      { n: 2, f: 'The four factor incomes', b: 'Wages (labour), rent (land), interest (capital), profit (enterprise). Rent, interest and profit are property income, going to owners of non-labour factors. (HL only)' },
      { n: 3, f: 'Using the circular flow, why does a free market produce unequal incomes?', b: 'Households sell factor services in the factor market. Income depends on how many units of each factor a household owns and on the price each factor earns. Those with only labour to sell earn wages alone; owners of land, capital and businesses also earn property income. (HL only)' },
      { n: 4, f: 'Why does inequality in wealth tend to widen inequality in income over time?', b: 'Wealth earns a return (interest, rent, profit). Richer households earn more from their wealth, save more, and so build more wealth, which earns still more income. The gap keeps moving in one direction. (HL only)' },
    ]),

    // Unit 3 Macroeconomics
    ...sub(U3, 'ib-dp-economics-3-1', '3.1', [
      { n: 1, f: 'GDP versus GNI', b: 'GDP: the total value of output (income) produced within a country in a period.\nGNI = GDP + net income from abroad (income residents earn abroad minus income paid to non-residents). The net term can be negative, so GNI can be below GDP: GDP 100 with net income −15 gives GNI 85.' },
      { n: 2, f: 'The phases of the business cycle', b: 'Expansion → peak → contraction (recession) → trough, around a long-term upward growth trend in real GDP.' },
      { n: 3, f: 'Recession versus slower growth', b: 'Recession: a fall in the level of real output.\nSlower growth: a fall in the rate of growth, with output still rising. Growth falling from 4% to 1% is not a recession.' },
      { n: 4, f: 'Nominal versus real GDP, and the GDP deflator', b: 'Nominal GDP is valued at current prices; real GDP removes the effect of price changes.\nReal GDP = nominal GDP ÷ price deflator × 100. Nominal GDP 1,200 with a deflator of 120 gives real GDP 1,000 in base-year prices.' },
      { n: 5, f: 'Why use real GDP per capita at PPP to compare living standards between countries?', b: 'Per capita divides by population, so countries of different size can be compared. PPP converts at a rate that makes the same basket cost the same in each country, so it reflects what incomes can actually buy.' },
      { n: 6, f: 'Limitations of GDP as a measure of well-being', b: 'It is an average that hides distribution; it misses unpaid and informal work; it ignores leisure, the quality of goods, and environmental damage and resource depletion. Composite measures such as the HDI try to capture more.' },
    ]),
    ...sub(U3, 'ib-dp-economics-3-2', '3.2', [
      { n: 1, f: 'Aggregate demand and its components', b: 'Total planned spending on a country\'s output at each price level.\nAD = C + I + G + (X − M): consumption, investment, government spending, net exports. A change in any component shifts AD.' },
      { n: 2, f: 'What shifts aggregate supply?', b: 'Production costs, productivity and productive capacity (the short run and long run differ). A change in costs shifts SRAS; a change in capacity shifts LRAS.' },
      { n: 3, f: 'Diagram in words: AD shifts right with SRAS fixed', b: 'Axes: price level (vertical) and real GDP (horizontal). The new AD meets SRAS further up and to the right: real GDP and the price level both rise. A leftward AD shift lowers both.' },
      { n: 4, f: 'Diagram in words: SRAS shifts left (higher costs) with AD fixed', b: 'The new equilibrium has a higher price level and lower real GDP: cost-push inflation with falling output. A rightward SRAS shift lowers the price level and raises output.' },
      { n: 5, f: 'Keynesian versus monetarist/new classical aggregate supply', b: 'Keynesian AS is flat at low output (spare capacity), then curves up and becomes vertical at full employment; an equilibrium below full employment can persist, so policy action is justified.\nMonetarist/new classical: LRAS is vertical at potential output and the economy returns there automatically.' },
      { n: 6, f: 'Recessionary (deflationary) gap versus inflationary gap', b: 'Recessionary gap: actual real GDP is below potential output.\nInflationary gap: actual real GDP is above potential output.' },
    ]),
    ...sub(U3, 'ib-dp-economics-3-3', '3.3', [
      { n: 1, f: 'Main macroeconomic objectives', b: 'Economic growth, low unemployment, and low and stable inflation. They can conflict: policy that boosts growth can worsen inflation.' },
      { n: 2, f: 'Unemployment rate: formula and example with 140,000 unemployed and a labour force of 3,500,000', b: 'Unemployment rate = number unemployed ÷ labour force × 100.\n140,000 ÷ 3,500,000 × 100 = 4.0%. The labour force is the employed plus the unemployed.' },
      { n: 3, f: 'Types of unemployment and the natural rate', b: 'Structural (mismatch of skills or location), frictional (between jobs), seasonal, and cyclical or demand-deficient (weak AD).\nThe natural rate of unemployment is the rate when the economy is at potential output: structural + frictional + seasonal, with no cyclical unemployment.' },
      { n: 4, f: 'Demand-pull versus cost-push inflation', b: 'Demand-pull: AD shifts right faster than capacity grows, so the price level rises with output.\nCost-push: higher costs (wages, imported raw materials) shift SRAS left, so the price level rises while output falls.' },
      { n: 5, f: 'Inflation, disinflation and deflation', b: 'Inflation: a sustained rise in the general price level.\nDisinflation: the inflation rate falls but prices still rise. Steady 2% inflation still means a rising price level.\nDeflation: a sustained fall in the general price level.' },
      { n: 6, f: 'Inflation from a price index that rises from 125.0 to 128.5', b: 'Inflation rate = (new index − old index) ÷ old index × 100 = 3.5 ÷ 125.0 × 100 = 2.8%.' },
      { n: 7, f: 'Weighted price index: weights 60 and 40 with category indices 110 and 95', b: 'Multiply each index by its weight, add, and divide by the total weight: (60 × 110 + 40 × 95) ÷ 100 = 104.0. Categories with a bigger share of spending move the index more. (HL only)' },
    ]),
    ...sub(U3, 'ib-dp-economics-3-4', '3.4', [
      { n: 1, f: 'Equality versus equity in the distribution of income', b: 'Equality: similar economic outcomes for different people or groups.\nEquity: fairness, a normative idea, so views differ.' },
      { n: 2, f: 'Absolute versus relative poverty', b: 'Absolute: income or consumption below a fixed standard for basic needs.\nRelative: far less than others in the same society, often below a share of median income. Poverty can fall while inequality rises.' },
      { n: 3, f: 'Lorenz curve and Gini coefficient', b: 'Lorenz curve: cumulative % of income (vertical) against cumulative % of households, poorest first (horizontal). The 45° line is perfect equality.\nGini = area between the line and the curve ÷ area under the line, from 0 (equality) to 1. A curve moving towards the line means falling inequality.' },
      { n: 4, f: 'Measures of poverty, and the difficulties in measuring it', b: 'Single indicators: international poverty lines, minimum income standards. Composite: the Multidimensional Poverty Index (health, education, living standards).\nDifficulties: arbitrary thresholds, regional price and household-size differences, informal work, sharing within households, infrequent surveys.' },
      { n: 5, f: 'Causes of inequality and poverty listed in the IB guide', b: 'Inequality of opportunity; different levels of resource ownership; different levels of human capital; discrimination; unequal status and power; government tax and benefit policies; globalisation and technological change; market-based supply-side policies.' },
      { n: 6, f: 'Average versus marginal tax rate, and progressive taxation', b: 'Average rate = total tax ÷ income × 100. Marginal rate = change in tax ÷ change in income × 100.\nA progressive tax has an average rate that rises with income; under it the marginal rate is above the average rate. Regressive: the average rate falls as income rises.' },
      { n: 7, f: 'Tax calculation: first 8,000 tax-free, 8,000 to 24,000 at 25%, above 24,000 at 35%. Income 40,000.', b: '16,000 × 0.25 = 4,000 plus 16,000 × 0.35 = 5,600. Total tax 9,600, an average rate of 24.0%. (HL only)' },
      { n: 8, f: 'Policies to reduce inequality and poverty', b: 'Progressive taxation, transfer payments, targeted spending, investment in human capital, minimum wages, anti-discrimination policies and universal basic income. Trade-offs: cost, possible work disincentives, slow effects of human capital spending.' },
    ]),
    ...sub(U3, 'ib-dp-economics-3-5', '3.5', [
      { n: 1, f: 'Monetary policy and inflation targeting', b: 'Monetary policy: the central bank\'s control of the money supply and interest rates to influence aggregate demand.\nInflation targeting: a published numerical inflation goal, with interest rates adjusted to meet it.' },
      { n: 2, f: 'Real interest rate: a saver earns 2.0% when inflation is 3.5%', b: 'Real rate = nominal rate − inflation rate = 2.0 − 3.5 = −1.5%. The saver\'s purchasing power falls.' },
      { n: 3, f: 'What happens to the economy when the central bank cuts interest rates?', b: 'Borrowing becomes cheaper and saving less rewarding, so consumption and investment rise. The exchange rate may fall, raising net exports. AD shifts right: real GDP rises, unemployment falls, the price level rises.' },
      { n: 4, f: 'Strengths and limits of monetary policy', b: 'Strengths: incremental, flexible and easily reversed; shorter time lags; a credible target anchors expectations.\nLimits: little room when rates are near zero; low confidence blunts it; weak against cost-push inflation and structural unemployment; it does not raise productive capacity.' },
      { n: 5, f: 'Tools of monetary policy: open market operations, minimum reserve requirement, minimum lending rate, QE', b: 'Expansionary: buy bonds; lower the reserve requirement; cut the lending rate; quantitative easing (create reserves to buy assets in bulk).\nContractionary: sell bonds; raise the reserve requirement; raise the lending rate. (HL only)' },
      { n: 6, f: 'Money creation: a deposit of 800 with a reserve ratio of 12.5%', b: 'Money multiplier = 1 ÷ reserve ratio = 1 ÷ 0.125 = 8.\nMaximum deposits = 800 × 8 = 6,400; new money created = 6,400 − 800 = 5,600. (HL only)' },
      { n: 7, f: 'Diagram in words: the money market', b: 'Axes: nominal interest rate (vertical) and quantity of money (horizontal). Demand for money slopes down; money supply is vertical (set by the central bank). An increase in money supply moves the vertical line right and lowers the interest rate. (HL only)' },
    ]),
    ...sub(U3, 'ib-dp-economics-3-6', '3.6', [
      { n: 1, f: 'Fiscal policy, and the sources of government revenue', b: 'Fiscal policy: changing government spending and taxation to influence aggregate demand and the economy.\nRevenue: direct taxes, indirect taxes, sales of goods and services by state-owned enterprises, and (usually one-off) sales of government assets.' },
      { n: 2, f: 'Current expenditure, capital expenditure and transfer payments', b: 'Current: day-to-day running costs of government.\nCapital: spending on lasting assets such as roads and schools.\nTransfer payments: money passed to recipients with no output produced in return (pensions, benefits).' },
      { n: 3, f: 'Budget balance: revenue 320 and expenditure 345, of which 20 of revenue came from selling a state asset', b: 'Balance = revenue − expenditure = 320 − 345 = −25, a deficit.\nWithout the one-off asset sale: 300 − 345 = −45. One-off receipts flatter the balance.' },
      { n: 4, f: 'Expansionary fiscal policy in a recessionary gap, in Keynesian and monetarist views', b: 'Higher spending and/or lower taxes shift AD right.\nKeynesian: with spare capacity, real GDP rises towards potential with little rise in prices.\nMonetarist/new classical: the economy returns to potential anyway, so in the long run fiscal policy mainly changes the price level.' },
      { n: 5, f: 'Constraints on fiscal policy', b: 'Political pressure (tax rises and cuts are unpopular), time lags (recognition, decision, implementation), and the need for a sustainable level of debt: deficits raise debt and interest costs. Strengths: it can be targeted at sectors or regions, and works in a deep recession.' },
      { n: 6, f: 'Multiplier: MPS 0.10, MPT 0.10, MPM 0.30; government spending rises by 30', b: 'Multiplier = 1 ÷ (MPS + MPT + MPM) = 1 ÷ 0.50 = 2.\nChange in GDP = 2 × 30 = 60.\nSimple form if saving is the only leakage: 1 ÷ (1 − MPC). (HL only)' },
      { n: 7, f: 'Crowding out', b: 'Government borrowing raises interest rates and cuts private investment, so the net injection is smaller. Spending of 16 that crowds out 6 of investment adds a net 10; with a multiplier of 2, GDP rises by 20, not 32. (HL only)' },
      { n: 8, f: 'Automatic stabilisers', b: 'Progressive taxes and unemployment benefits soften swings in the cycle with no new decision: in a downturn tax revenue falls and benefit spending rises. They avoid policy lags but only soften a deep slump. (HL only)' },
    ]),
    ...sub(U3, 'ib-dp-economics-3-7', '3.7', [
      { n: 1, f: 'Supply-side policies: aim and diagram', b: 'Policies that raise productive capacity and market efficiency. Axes: price level and real GDP. A successful policy shifts LRAS to the right, raising potential output with downward pressure on the price level.' },
      { n: 2, f: 'Market-based supply-side policies', b: 'Competition: deregulation, privatisation, trade liberalisation, anti-monopoly regulation.\nLabour market: reducing union power, reducing unemployment benefits, abolishing minimum wages.\nIncentives: cuts in personal income tax, business tax and capital gains tax.' },
      { n: 3, f: 'Interventionist supply-side policies', b: 'Government provides or funds: education and training, health care, research and development, infrastructure, and industrial policies supporting chosen sectors.' },
      { n: 4, f: 'Evaluate market-based versus interventionist supply-side policies', b: 'Market-based: better resource allocation and no burden on the budget, but equity issues, time lags, vested interests and environmental impact.\nInterventionist: direct support for sectors important to growth, but costly and slow.' },
      { n: 5, f: 'Demand-side effects of supply-side policies', b: 'An income tax cut raises consumption; a business tax cut raises investment; spending on infrastructure, education and health raises G at once and capacity later. AD may shift right too, so the fall in the price level is smaller.' },
      { n: 6, f: 'Which unemployment can supply-side policy reduce?', b: 'Structural (and frictional) unemployment, through training, flexible labour markets and better job matching. It has little effect on cyclical (demand-deficient) unemployment.' },
    ]),

    // Unit 4 The global economy
    ...sub(U4, 'ib-dp-economics-4-1', '4.1', [
      { n: 1, f: 'Benefits of international trade', b: 'Increased competition, lower prices, greater choice, acquisition of resources, more foreign exchange earnings, access to larger markets, economies of scale, more efficient resource allocation and more efficient production.' },
      { n: 2, f: 'Diagram in words: free trade when the world price is below the domestic price', b: 'Axes: price and quantity, with domestic D and S and a horizontal line at the world price Pw. At Pw, quantity demanded exceeds domestic supply; the gap Qd − Qs is imported. Consumers gain more surplus than producers lose, so there is a net gain.' },
      { n: 3, f: 'Free trade when the world price is above the domestic price', b: 'The country exports Qs − Qd at Pw. Producers receive more and sell more; consumers pay more and buy less. Producers gain more than consumers lose, so there is a net gain. The curves do not shift: quantities move along D and S.' },
      { n: 4, f: 'Absolute versus comparative advantage', b: 'Absolute advantage: producing a good with fewer resources (or more output from the same resources) than another country.\nComparative advantage: producing a good at a lower opportunity cost than a trading partner. (HL only)' },
      { n: 5, f: 'Country J makes 12 shirts or 4 machines; Country K makes 10 shirts or 5 machines. Who has the comparative advantage in machines?', b: 'One machine costs J 12 ÷ 4 = 3 shirts and K 10 ÷ 5 = 2 shirts, so K has the comparative advantage in machines and J in shirts. Any price between 2 and 3 shirts per machine benefits both. (HL only)' },
      { n: 6, f: 'Limitations of the theory of comparative advantage', b: 'It assumes constant opportunity costs, no transport costs, full employment and mobile resources, and perfect competition. Over-specialisation brings price risk, gains are uneven, and environmental costs are left out. (HL only)' },
    ]),
    ...sub(U4, 'ib-dp-economics-4-2', '4.2', [
      { n: 1, f: 'Tariff (specific and ad valorem), quota and quota rent', b: 'Tariff: a tax on imports; specific is a fixed sum per unit, ad valorem a percentage of value.\nQuota: a legal limit on the quantity imported.\nQuota rent: (domestic price − world price) × quota, collected by licence holders.' },
      { n: 2, f: 'Who gains and who loses from a tariff?', b: 'Domestic consumers lose (higher price, lower consumption). Domestic producers gain (higher price and output). The government gains revenue. Foreign producers lose. The country as a whole has a net welfare loss (two triangles).' },
      { n: 3, f: 'Tariff versus quota', b: 'A tariff fixes the price gap and gives revenue to the government; if demand rises, imports rise.\nA quota fixes the import quantity and gives the rent to licence holders; if demand rises, imports stay capped.' },
      { n: 4, f: 'Tariff versus a production subsidy to domestic producers', b: 'Tariff: the consumer price rises, consumers pay, the government gains revenue.\nSubsidy: the consumer price is unchanged, taxpayers pay, and the government budget pays out.' },
      { n: 5, f: 'Administrative barriers to trade', b: 'Standards, regulations, licences or procedures that make importing harder or dearer. No government revenue is collected, and compliance uses resources. They may serve real safety or consumer goals, so ask whether a less restrictive rule would do.' },
      { n: 6, f: 'Tariff calculation: Qd = 140 − 2P, Qs = 3P − 10, Pw = 20, tariff 4', b: 'Free trade: Qd 100, Qs 50, imports 50.\nWith the tariff, P = 24: Qd 92, Qs 62, imports 30.\nRevenue = 4 × 30 = 120. Welfare loss = 24 + 16 = 40. (HL only)' },
    ]),
    ...sub(U4, 'ib-dp-economics-4-3', '4.3', [
      { n: 1, f: 'Arguments for trade protection', b: 'Infant (sunrise) industry, national security, health and safety, environmental standards, anti-dumping, unfair competition, balance of payments correction, government revenue, protection of jobs, and economic diversification for ELDCs.' },
      { n: 2, f: 'Arguments against trade protection', b: 'Misallocation of resources, retaliation, increased costs of imported inputs, higher prices, less choice, a lack of incentive to become efficient, and reduced export competitiveness.' },
      { n: 3, f: 'Dumping', b: 'Selling exports at a price below the cost of production, or below the price charged in the exporter\'s home market. A low price may instead reflect real efficiency, so dumping is hard to prove.' },
      { n: 4, f: 'Evaluate the infant industry argument', b: 'Sheltering a new industry until it reaches efficient scale can work if protection is temporary and costs really fall. But the industry may never become efficient, picking winners is hard, and protection without an end date removes the incentive to improve.' },
      { n: 5, f: 'Cost per job saved: a tariff raises the price by 10 on 300,000 pairs of shoes and saves 150 jobs', b: 'Extra cost to consumers = 10 × 300,000 = 3,000,000.\nCost per job = 3,000,000 ÷ 150 = 20,000. Jobs lost elsewhere through dearer inputs and retaliation must also be counted.' },
    ]),
    ...sub(U4, 'ib-dp-economics-4-4', '4.4', [
      { n: 1, f: 'Bilateral, regional and multilateral trade agreements', b: 'Bilateral: between two countries.\nRegional: between several countries in one area.\nMultilateral: between many countries worldwide, through the WTO.' },
      { n: 2, f: 'Free trade area, customs union, common market and monetary union', b: 'Free trade area: no barriers between members; each sets its own outside tariffs.\nCustoms union: adds a common external tariff.\nCommon market: adds free movement of labour and capital.\nMonetary union: adds one currency and one central bank.' },
      { n: 3, f: 'Advantages and disadvantages of trading blocs', b: 'Advantages: access to larger markets, freedom of labour movement, bargaining power, political stability.\nDisadvantages: loss of sovereignty, and a possible challenge to multilateral trade talks.' },
      { n: 4, f: 'The WTO: objectives, functions and limits', b: 'Objectives: lower trade barriers, fair competition, predictable rules. Functions: negotiation forum, administering agreements, settling disputes, monitoring trade policy.\nLimits: difficulty of agreement on services and primary products; unequal bargaining power.' },
      { n: 5, f: 'Trade creation versus trade diversion', b: 'Trade creation: joining a bloc switches supply from a high-cost domestic producer to a lower-cost partner (efficiency gain).\nTrade diversion: supply switches from a low-cost outsider to a higher-cost partner (efficiency loss). (HL only)' },
      { n: 6, f: 'Monetary union: advantages and disadvantages', b: 'Advantages: no conversion costs or exchange rate risk between members, easy price comparison.\nDisadvantages: one interest rate for all members, no exchange rate adjustment after a shock that hits one member. (HL only)' },
    ]),
    ...sub(U4, 'ib-dp-economics-4-5', '4.5', [
      { n: 1, f: 'Floating, fixed and managed exchange rate systems', b: 'Floating: set by demand and supply with no official target.\nFixed: the government sets an official rate and the central bank defends it.\nManaged: the rate floats but the central bank intervenes to influence it.' },
      { n: 2, f: 'Depreciation versus devaluation', b: 'Depreciation (appreciation): a market-driven fall (rise) in a floating currency.\nDevaluation (revaluation): an official cut (rise) in a fixed rate.' },
      { n: 3, f: 'What happens to a currency when its interest rates rise relative to other countries?', b: 'Financial inflows rise, so demand for the currency shifts right and it appreciates. Other causes of appreciation: more foreign demand for exports, inward FDI, remittances sent in, speculators expecting a rise.' },
      { n: 4, f: 'An 80-pel good sells at 1.50 duns per pel. The rate falls to 1.35. What happens?', b: 'Change = (1.35 − 1.50) ÷ 1.50 × 100 = −10%: the pel depreciates.\nThe good\'s price in duns falls from 80 × 1.50 = 120 to 80 × 1.35 = 108.' },
      { n: 5, f: 'Consequences of a depreciation', b: 'Exports cheaper abroad and imports dearer at home. Inflation tends to rise (dearer imports and inputs); growth rises and unemployment falls if net exports rise (AD right); the current account improves only if trade responds enough.' },
      { n: 6, f: 'Fixed versus floating exchange rates: evaluation', b: 'Fixed: more certainty if believed, but needs large reserves, ties monetary policy to the peg, and risks speculative attack.\nFloating: monetary policy free for domestic goals and imbalances adjust through the rate, but rates are volatile. (HL only)' },
    ]),
    ...sub(U4, 'ib-dp-economics-4-6', '4.6', [
      { n: 1, f: 'The three accounts of the balance of payments', b: 'Current account: trade in goods and services, income, current transfers.\nCapital account: capital transfers and non-produced, non-financial assets.\nFinancial account: FDI, portfolio investment, reserve assets and official borrowing.' },
      { n: 2, f: 'Why does the balance of payments always sum to zero?', b: 'Every transaction has two sides, so every debit has a matching credit: current + capital + financial account = 0. A deficit on one account is matched by a surplus on another, so always name the account.' },
      { n: 3, f: 'Current account: goods −25, services +22, income −6, current transfers −5', b: 'Current account = −25 + 22 − 6 − 5 = −14, a deficit.\nWith a capital account of +1, the financial account must be −(−14 + 1) = +13.' },
      { n: 4, f: 'FDI versus portfolio investment', b: 'FDI: a lasting stake with control, such as building a factory abroad.\nPortfolio investment: buying shares or bonds without control; can be withdrawn quickly.' },
      { n: 5, f: 'Expenditure switching versus expenditure reducing policies to correct a current account deficit', b: 'Switching (tariffs, quotas, subsidies, depreciation) redirects spending to home output; risks retaliation and dearer imports.\nReducing (tax rises, spending cuts, dearer borrowing) cuts total demand and imports; costs output, jobs and growth. (HL only)' },
      { n: 6, f: 'Marshall-Lerner condition and the J-curve', b: 'Marshall-Lerner: a depreciation improves the current account only if the price elasticities of demand for exports and imports, ignoring signs, add up to more than 1.\nJ-curve: demand is less elastic in the short run, so the balance worsens first, then improves. (HL only)' },
      { n: 7, f: 'Consequences of a persistent current account deficit', b: 'Downward pressure on the exchange rate, interest rates that may rise to attract inflows, more foreign ownership of domestic assets, rising debt and interest payments, weaker credit ratings, and limits on demand management. Judge by size relative to GDP, duration and what the imports are used for. (HL only)' },
    ]),
    ...sub(U4, 'ib-dp-economics-4-7', '4.7', [
      { n: 1, f: 'Sustainability and sustainable development', b: 'Sustainability: meeting present needs while leaving later generations able to meet theirs, by limiting resource depletion and degradation.\nSustainable development: raising living standards in a way that can continue without running down what later generations need.' },
      { n: 2, f: 'Renewable versus non-renewable resources; depletion versus degradation', b: 'Renewable resources regenerate; use is sustainable while the amount taken each year does not exceed regeneration. Non-renewable resources only fall.\nDepletion: the quantity used up. Degradation: a fall in quality (polluted water, exhausted soil).' },
      { n: 3, f: 'The UN Sustainable Development Goals', b: '17 global goals agreed by UN member states in 2015, with a 2030 target date, for example 1 No poverty, 4 Quality education, 8 Decent work and economic growth, 13 Climate action. Goals can support each other (4 and 1) or conflict (8 and 13).' },
      { n: 4, f: 'An aquifer holds 90 million m³, recharges 3 million a year, and 4.5 million is pumped. How long will it last?', b: 'Net draw = 4.5 − 3 = 1.5 million a year.\nLifetime = 90 ÷ 1.5 = 60 years at the current rate, ignoring changes in recharge. Pumping must fall by one third to 3 million to stop the decline.' },
      { n: 5, f: 'Why do markets over-use natural resources?', b: 'Where nobody owns a resource, or the user does not pay for the damage, the private cost is below the full social cost, so the resource is over-used. This is the main argument for intervention.' },
      { n: 6, f: 'The two-way link between poverty and environmental sustainability', b: 'Poverty pressures the environment: short time horizons, direct dependence on local resources, few alternatives. Environmental damage deepens poverty: lower yields and catches, flood and drought exposure, health costs. Together they can form a vicious circle. (HL only)' },
    ]),
    ...sub(U4, 'ib-dp-economics-4-8', '4.8', [
      { n: 1, f: 'Economic growth versus economic development', b: 'Growth: an increase in real output, measured by real GDP or GNI.\nDevelopment: a wider improvement in living standards, including health, education, equity, choice, sustainability and income.' },
      { n: 2, f: 'Single indicators of development, with an example of each', b: 'Income: GDP or GNI per capita at PPP. Health: life expectancy, infant or maternal mortality. Education: literacy, years of schooling. Inequality: Gini coefficient. Energy: access to electricity. Environment: CO₂ per person. Each shows only one aspect.' },
      { n: 3, f: 'The Human Development Index (HDI)', b: 'A composite of life expectancy, education (mean and expected years of schooling) and GNI per capita at PPP, combined by a geometric mean on a 0 to 1 scale. The income index uses logarithms, so a country ten times richer does not score ten times higher.' },
      { n: 4, f: 'IHDI, GII and the Happy Planet Index', b: 'IHDI: the HDI adjusted for inequality within each dimension; never above the HDI.\nGII: gender inequality (reproductive health, empowerment, labour market); higher is worse.\nHappy Planet Index: relates life expectancy and reported well-being to ecological footprint.' },
      { n: 5, f: 'Converting to PPP: a basket costs 1,500 locally and 500 in the reference economy. What is an income of 45,000 worth?', b: 'PPP rate = 1,500 ÷ 500 = 3.\nIncome at PPP = 45,000 ÷ 3 = 15,000.' },
      { n: 6, f: 'When does economic growth help development, and when does it fail to?', b: 'Helps: tax revenue funds health, schools and infrastructure, and household incomes are spent on needs.\nFails: gains go to a small group, governments spend little on public services, growth causes pollution, or corruption wastes revenue. The link is positive but conditional.' },
    ]),
    ...sub(U4, 'ib-dp-economics-4-9', '4.9', [
      { n: 1, f: 'The poverty cycle', b: 'Low income → low saving and low tax revenue → low investment in capital, health and education → low productivity → low income. Breaking it needs a large push at some point in the loop.' },
      { n: 2, f: 'Economic barriers to growth and development', b: 'Rising inequality, lack of infrastructure and appropriate technology, low human capital, dependence on primary products, lack of access to international markets, the informal economy, capital flight, indebtedness, geography (being landlocked), climate and disease.' },
      { n: 3, f: 'Political and social barriers to growth and development', b: 'A weak legal system, ineffective taxation, a weak banking system, insecure property rights, gender inequality, lack of good governance and corruption, and unequal political power.' },
      { n: 4, f: 'Debt service ratio: debt service 0.5 billion and export earnings 2.0 billion', b: 'Debt service ratio = debt repayments (interest plus capital) ÷ export earnings × 100 = 0.5 ÷ 2.0 × 100 = 25%. A high ratio crowds out spending on health and education.' },
      { n: 5, f: 'Why is dependence on primary products a barrier?', b: 'Prices are volatile, so export earnings and tax revenue swing; value added is low; and copper making up 60% of exports means a 40% price fall cuts export earnings by 0.60 × 40 = 24%.' },
    ]),
    ...sub(U4, 'ib-dp-economics-4-10', '4.10', [
      { n: 1, f: 'Import substitution versus export promotion', b: 'Import substitution: protect domestic industries to replace imports; builds industry and saves foreign exchange, but risks inefficiency and higher prices.\nExport promotion: support selling abroad; earns foreign exchange and scale, but relies on foreign demand.' },
      { n: 2, f: 'Market-based versus interventionist development strategies', b: 'Market-based: trade liberalisation, privatisation, deregulation, inward FDI.\nInterventionist: redistribution (taxes, transfers, minimum wages) and provision of merit goods such as education, health and infrastructure.\nThe best mix depends on the country.' },
      { n: 3, f: 'Humanitarian aid, development aid and ODA', b: 'Humanitarian aid: short-term help in emergencies.\nDevelopment aid: long-term funding for projects.\nODA: official government aid flows to developing countries. Limits of aid: tied conditions, dependence, corruption.' },
      { n: 4, f: 'World Bank versus IMF', b: 'World Bank: development lending, projects and technical advice.\nIMF: lending to countries with balance of payments problems, with advice and conditions. Criticism: loan conditions such as spending cuts may harm the poor.' },
      { n: 5, f: 'Microfinance and institutional change as development strategies', b: 'Microfinance: small loans and savings services for people excluded from formal banks.\nInstitutional change: better access to banking (including mobile banking), women\'s empowerment, reducing corruption, secure property and land rights. Slow but lowers risk and raises investment.' },
      { n: 6, f: 'Inward FDI as a development strategy', b: 'Brings jobs, capital and technology. But profits may flow abroad: a plant earning 90 million that sends 70% home sends 63 million abroad and leaves 27 million. Dependence on a foreign firm is a further risk.' },
    ]),
  ],
};
