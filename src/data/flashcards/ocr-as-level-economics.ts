/**
 * D-444 -- flashcards for OCR AS Level Economics H060.
 *
 * D-505 (19 Nov 2026): re-filed under the Version 3.0 (June 2026)
 * specification, for first assessment in 2020. The deck was built on the
 * headings of the earlier specification (for first assessment in 2016).
 * Card text is unchanged except one government intervention card, whose back
 * now lists Version 3.0's interventions. Cards on content Version 3.0 does
 * not include at AS were removed: costs and revenue, economies of scale,
 * information asymmetries, firms' objectives beyond the agents' basic aims,
 * public goods, X-inefficiency and the environment's roles. Because ids
 * carry the subtopic number, most cards have a new id; `idMigration` below
 * moves browser progress saved before the change onto the new ids. From now
 * on the rule holds: add a new card with the next unused n, never renumber.
 *
 * One block per subtopic, in syllabus order. The specification numbers each
 * component's areas from 1; the site numbers the six areas 1-6 (Component 2
 * areas 1-4 are 3-6 here), as in the syllabus record.
 *
 * AS content is a subset of the A Level (H460); many cards are adapted from
 * the H460 deck where the content matches, but filed under H060's own slugs.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs H060); origin 'revision-notes'.
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

const T1 = 'introduction-to-microeconomics-ocr-aslevel-economics';
const T2 = 'the-role-of-markets-ocr-aslevel-economics';
const T3 = 'aggregate-demand-and-aggregate-supply-ocr-aslevel-economics';
const T4 = 'economic-policy-objectives-ocr-aslevel-economics';
const T5 = 'implementing-policy-ocr-aslevel-economics';
const T6 = 'the-global-context-ocr-aslevel-economics';

const FP1 = 'ocr-a-level-economics-fiscal-policy-1-the-budget-and-taxation-revision-notes';

export const DECK_OCR_AS_LEVEL_ECONOMICS: FlashcardDeck = {
  boardSlug: 'ocr',
  qualificationSlug: 'as-level',
  subjectSlug: 'economics',
  syllabusCode: 'H060',
  syllabusSeries: 'Version 3.0 (June 2026), for first assessment in 2020',
  author: 'marlbridge-academic-team',
  updated: '2026-11-20',
  deckReview: { reviewerSlug: 'salman-ahmad', reviewedOn: '2026-11-05' },
  // D-505: old id -> new id, so progress saved before the re-filing follows each card.
  // Old ids not listed were removed cards. Several old ids now name a different card,
  // so this runs once per browser and only on marks dated before 2026-11-19.
  idMigration: {
    id: 'h060-v3-2026-11-19',
    before: '2026-11-19',
    map: {
      '1.1-1': '1.1-1', '1.1-2': '1.1-2', '1.1-3': '1.1-3', '1.1-4': '1.1-4', '1.1-5': '1.1-5',
      '1.2-1': '1.2-1', '1.2-2': '1.1-6', '1.2-3': '1.1-7', '1.2-4': '1.2-2',
      '1.3-1': '1.3-1', '1.3-2': '1.3-2', '1.3-3': '1.3-3', '1.3-4': '1.3-4', '1.3-5': '1.3-5',
      '1.4-1': '2.1-1', '1.4-2': '2.1-2', '1.4-3': '2.1-3', '1.4-4': '2.1-4',
      '2.1-1': '1.2-3', '2.1-2': '1.2-4', '2.1-3': '1.2-5', '2.1-4': '1.2-6',
      '2.2-1': '1.1-8',
      '2.3-1': '2.2-1', '2.3-2': '2.4-1', '2.3-3': '2.5-1', '2.3-4': '2.3-1', '2.3-5': '2.2-2', '2.3-6': '2.5-2',
      '2.4-1': '2.6-1', '2.4-2': '2.6-2', '2.4-3': '2.6-3', '2.4-4': '2.6-4', '2.4-5': '2.6-5', '2.4-6': '2.6-6',
      '2.5-1': '1.2-7', '2.5-2': '1.2-8', '2.5-3': '1.2-9',
      '3.1-1': '2.7-1',
      '3.2-1': '2.7-2', '3.2-2': '2.7-3', '3.2-3': '2.7-4', '3.2-5': '2.8-7',
      '3.4-1': '2.8-1', '3.4-2': '2.8-2', '3.4-3': '2.8-3', '3.4-4': '2.8-4', '3.4-5': '2.8-5', '3.4-6': '2.8-6',
      '3.5-1': '2.8-8', '3.5-2': '2.8-9', '3.5-3': '2.8-10', '3.5-4': '2.8-11',
      '4.1-1': '4.1-1', '4.1-2': '4.1-2', '4.1-3': '4.1-3', '4.1-4': '4.1-4', '4.1-5': '4.1-5', '4.1-6': '4.1-6',
      '4.2-1': '4.3-1', '4.2-2': '4.3-2', '4.2-3': '4.3-3', '4.2-4': '4.3-4', '4.2-5': '4.3-5',
      '4.3-1': '4.4-1', '4.3-2': '4.4-2', '4.3-3': '4.4-3', '4.3-4': '4.4-4', '4.3-5': '4.4-5', '4.3-6': '4.4-6',
      '4.4-1': '4.6-1', '4.4-2': '4.6-2', '4.4-3': '4.6-3', '4.4-4': '4.6-4', '4.4-5': '4.6-5', '4.4-6': '4.6-6',
      '5.1-1': '3.1-1', '5.1-2': '3.1-2', '5.1-3': '3.1-3', '5.1-4': '3.1-4', '5.1-5': '3.1-5',
      '5.2-1': '3.2-1', '5.2-2': '3.2-2', '5.2-3': '3.2-3', '5.2-4': '3.2-4', '5.2-5': '3.2-5',
      '5.3-1': '3.3-1', '5.3-2': '3.3-2', '5.3-3': '3.3-3', '5.3-4': '3.3-4', '5.3-5': '3.3-5',
      '5.4-1': '3.4-1', '5.4-2': '3.4-2', '5.4-3': '3.4-3', '5.4-4': '3.4-4',
      '5.5-1': '3.4-5', '5.5-2': '3.4-6', '5.5-3': '3.4-7', '5.5-4': '3.4-8',
      '6.1-1': '5.1-1', '6.1-2': '5.1-2', '6.1-3': '5.1-3', '6.1-4': '5.1-4', '6.1-5': '5.1-5', '6.1-6': '5.1-6',
      '6.2-1': '5.2-1', '6.2-2': '5.2-2', '6.2-3': '5.2-3', '6.2-4': '5.2-4', '6.2-5': '5.2-5',
      '6.3-1': '5.3-1', '6.3-2': '5.3-2', '6.3-3': '5.3-3', '6.3-4': '5.3-4',
      '6.4-1': '5.4-1', '6.4-2': '5.4-2', '6.4-3': '5.4-3', '6.4-4': '5.4-4', '6.4-5': '5.4-5',
      '7.1-1': '6.1-1', '7.1-2': '6.1-2', '7.1-3': '6.1-3', '7.1-4': '6.1-4', '7.1-5': '6.1-5',
      '7.2-1': '4.5-1', '7.2-2': '4.5-2', '7.2-3': '4.5-3', '7.2-4': '4.5-4', '7.2-5': '4.5-5',
      '7.3-1': '6.2-1', '7.3-2': '6.2-2', '7.3-3': '6.2-3', '7.3-4': '6.2-4', '7.3-5': '6.2-5', '7.3-6': '6.2-6',
    },
  },
  cards: [
    // 1 Introduction to microeconomics (Component 1, area 1)
    ...sub(T1, 'the-economic-problem-ocr-aslevel-economics', '1.1', [
      { n: 1, f: 'Scarcity and the basic economic problem', b: 'Scarcity: unlimited wants set against limited resources.\nThe basic economic problem: scarcity forces choices over what to make, how to make it and who gets it.' },
      { n: 2, f: 'Economic good vs free good', b: 'Economic good: uses scarce resources to supply, so it has a cost of provision.\nFree good: needs no resources to supply, so it has no price. A good free at the point of use is still an economic good.' },
      { n: 3, f: 'Needs vs wants', b: 'Need: something required to survive or avoid serious harm.\nWant: something desired beyond a need; wants are unlimited. The line depends on time and place.' },
      { n: 4, f: 'Positive vs normative statement', b: 'Positive: describes or predicts; evidence can check it.\nNormative: expresses an opinion on what ought to happen (a value judgement).' },
      { n: 5, f: 'Sustainability', b: 'Using resources to satisfy today\'s needs in a way that leaves future generations able to satisfy their own.' },
      { n: 6, f: 'The margin and rationality', b: 'The margin: the point of deciding on one more or one less unit.\nRationality: acting consistently to maximise a goal using the information available.' },
      { n: 7, f: 'Economic agents', b: 'Consumers, workers, firms and the government: the decision makers whose choices allocate resources.' },
      { n: 8, f: 'The usual objectives assumed for consumers, firms and government', b: 'Consumers: maximise utility (satisfaction).\nFirms: maximise profit.\nGovernment: maximise the welfare of society.' },
    ]),
    ...sub(T1, 'allocation-of-resources-ocr-aslevel-economics', '1.2', [
      { n: 1, f: 'Market, planned and mixed economies', b: 'Market: private decisions coordinated by prices; private ownership.\nPlanned: a central authority decides allocation; mostly state ownership.\nMixed: market and government both allocate, in varying proportions.' },
      { n: 2, f: 'Strengths and weaknesses of a free market economy', b: 'Strengths: incentives to innovate and cut costs, wide choice, prices respond to wants.\nWeaknesses: public goods missing, externalities ignored, merit goods under-consumed, unequal income and wealth.' },
      { n: 3, f: 'Resource allocation', b: 'How scarce resources are shared between competing uses: what is produced, how, and for whom.' },
      { n: 4, f: 'Functions of the price mechanism', b: 'Signalling: prices tell buyers and sellers about scarcity.\nRationing: a higher price limits demand to the supply available.\nIncentive: a higher price rewards producers for supplying more.' },
      { n: 5, f: 'Incentive', b: 'A reward or penalty that changes the pay-off of a choice, and so changes behaviour.' },
      { n: 6, f: 'Allocation under a planned price vs a market price', b: 'A planned price held below equilibrium causes a shortage, so goods are allocated by queuing or rationing. A market price adjusts until quantity demanded equals quantity supplied.' },
      { n: 7, f: 'Productive efficiency', b: 'Output produced at the lowest possible average cost: MC = AC, the lowest point of AC; on the PPF.' },
      { n: 8, f: 'Allocative efficiency', b: 'Resources go to the goods society values most: P = MC (with externalities, MSB = MSC).' },
      { n: 9, f: 'Economic efficiency, static vs dynamic', b: 'Economic efficiency: productive and allocative together.\nStatic: at one point in time, given resources and technology.\nDynamic: over time, through investment and innovation, so cost curves shift down.' },
    ]),
    ...sub(T1, 'opportunity-cost-ocr-aslevel-economics', '1.3', [
      { n: 1, f: 'Opportunity cost', b: 'The value of the best option passed over when choosing. It is a single next best alternative, not every option rejected.' },
      { n: 2, f: 'Opportunity cost vs trade-off', b: 'Trade-off: the relationship of accepting less of one thing to get more of another.\nOpportunity cost: the value of the specific next best option lost.' },
      { n: 3, f: 'PPF (PPC): definition and productive efficiency', b: 'The boundary of the largest output pairings of two goods with every resource fully and efficiently employed and technology fixed. Any point on it is productively efficient.' },
      { n: 4, f: 'PPF: movement along vs shift', b: 'Movement along: a choice between the two goods (opportunity cost shown by the slope).\nShift: a change in capacity, outward from more or better resources or technology, inward from loss of resources.' },
      { n: 5, f: 'Accounting cost vs opportunity cost', b: 'Accounting cost records money paid out. Opportunity cost adds the value of the best alternative use of owned resources and time.' },
    ]),

    // 2 The role of markets (Component 1, area 2)
    ...sub(T2, 'specialisation-and-trade-ocr-aslevel-economics', '2.1', [
      { n: 1, f: 'Specialisation vs division of labour', b: 'Specialisation: concentrating on a narrow range of goods or services; can apply to a person, firm, region or country.\nDivision of labour: splitting a production process into tasks, a separate worker on each.' },
      { n: 2, f: 'Advantages and disadvantages of the division of labour', b: 'Advantages: workers become skilled and quick, less time switching tasks, use of specialist machinery, higher output per worker.\nDisadvantages: boredom, lower motivation, and dependence on every stage working.' },
      { n: 3, f: 'Barter vs money', b: 'Barter: direct exchange of goods for goods; it needs a double coincidence of wants.\nMoney: anything generally accepted as payment (a medium of exchange), which makes specialisation and trade easier.' },
      { n: 4, f: 'Functions of money', b: 'Medium of exchange, measure of value (unit of account), store of value, and method of deferred payment.' },
    ]),
    ...sub(T2, 'demand-ocr-aslevel-economics', '2.2', [
      { n: 1, f: 'Contraction of demand vs decrease in demand', b: 'Contraction: a movement along the demand curve after a rise in the good\'s own price.\nDecrease: a leftward shift caused by anything else.' },
      { n: 2, f: 'Derived vs composite demand', b: 'Derived: demand for a good or factor because of demand for what it helps to make.\nComposite: one good is wanted for several uses.' },
      { n: 3, f: 'How is market demand found from individual demand curves?', b: 'Add the quantities at each price (a horizontal sum). Never add the prices.', src: 'ocr-as-level-economics-h060-supply-and-demand-and-the-interaction-of-markets-revision-notes' },
      { n: 4, f: 'Which changes shift the demand curve to the right?', b: 'A rise in income (for a normal good), a rise in the price of a substitute, a fall in the price of a complement, tastes or advertising favouring the good, and population growth.', src: 'ocr-as-level-economics-h060-supply-and-demand-and-the-interaction-of-markets-revision-notes' },
      { n: 5, f: 'Qd = 900 − 60P. The price rises from £5 to £6. Movement or shift, and what is the new quantity?', b: 'A movement along the curve (a contraction), because the good\'s own price changed. Quantity falls from 600 to 540.', src: 'ocr-as-level-economics-h060-supply-and-demand-and-the-interaction-of-markets-revision-notes' },
    ]),
    ...sub(T2, 'supply-ocr-aslevel-economics', '2.3', [
      { n: 1, f: 'Joint supply vs competitive supply', b: 'Joint: one process yields two or more products (beef and leather).\nCompetitive: producers can switch inputs between products, so the goods compete for resources.' },
      { n: 2, f: 'Define supply.', b: 'The quantity producers are willing and able to sell at each price over a period. Ceteris paribus holds every other factor constant.', src: 'ocr-as-level-economics-h060-supply-and-demand-and-the-interaction-of-markets-revision-notes' },
      { n: 3, f: 'Which changes shift the supply curve to the right?', b: 'Lower costs of production, better technology, lower indirect taxes or higher subsidies, more firms entering, and good weather for crops.', src: 'ocr-as-level-economics-h060-supply-and-demand-and-the-interaction-of-markets-revision-notes' },
      { n: 4, f: 'Extension of supply vs increase in supply', b: 'Extension: a movement along the supply curve after a rise in the good\'s own price. Increase: a shift of the whole curve to the right, caused by any other factor.', src: 'ocr-as-level-economics-h060-supply-and-demand-and-the-interaction-of-markets-revision-notes' },
      { n: 5, f: 'Qs = 120P − 180. Find the quantity supplied at £6 and the price at which supply is zero.', b: 'At £6, Qs = 720 − 180 = 540. Supply is zero when 120P = 180, so P = £1.50, the price-axis intercept.', src: 'ocr-as-level-economics-h060-supply-and-demand-and-the-interaction-of-markets-revision-notes' },
    ]),
    ...sub(T2, 'consumer-and-producer-surplus-ocr-aslevel-economics', '2.4', [
      { n: 1, f: 'Consumer surplus and producer surplus', b: 'Consumer surplus: the most buyers would pay minus the price paid; area beneath demand, above price.\nProducer surplus: price received minus the least sellers would accept; area above supply, below price.' },
      { n: 2, f: 'How do you calculate consumer surplus from linear demand and supply equations?', b: 'Solve for equilibrium price P and quantity Q, find the demand price-axis intercept, then consumer surplus = 0.5 × (demand intercept − P) × Q.', src: 'ocr-as-level-economics-h060-supply-and-demand-and-the-interaction-of-markets-revision-notes' },
      { n: 3, f: 'How do you calculate producer surplus from linear equations?', b: 'Solve for equilibrium P and Q, find the supply price-axis intercept, then producer surplus = 0.5 × (P − supply intercept) × Q.', src: 'ocr-as-level-economics-h060-supply-and-demand-and-the-interaction-of-markets-revision-notes' },
      { n: 4, f: 'Qd = 900 − 60P and Qs = 120P − 180. Find consumer and producer surplus (quantity in thousands).', b: 'Equilibrium P = £6, Q = 540. Demand intercept 15, supply intercept 1.5. Consumer surplus = 0.5 × 9 × 540 = £2,430 thousand; producer surplus = 0.5 × 4.5 × 540 = £1,215 thousand.', src: 'ocr-as-level-economics-h060-supply-and-demand-and-the-interaction-of-markets-revision-notes' },
      { n: 5, f: 'What happens to surplus when demand shifts right, and when supply shifts left?', b: 'Demand shifting right gives a higher price and quantity, so producer surplus rises. Supply shifting left gives a higher price and lower quantity, so consumer surplus falls.', src: 'ocr-as-level-economics-h060-supply-and-demand-and-the-interaction-of-markets-revision-notes' },
    ]),
    ...sub(T2, 'the-interaction-of-markets-ocr-aslevel-economics', '2.5', [
      { n: 1, f: 'Shortage vs surplus', b: 'Shortage (excess demand): quantity demanded above quantity supplied, so price tends to rise.\nSurplus (excess supply): quantity supplied above quantity demanded, so price tends to fall.' },
      { n: 2, f: 'Diagram: a fall in the cost of raw materials', b: 'Supply shifts right. At the old price there is excess supply, so price falls; quantity demanded extends to a new equilibrium at a lower price and higher quantity.' },
      { n: 3, f: 'Define equilibrium and give the method for finding it from equations.', b: 'The price at which quantity demanded equals quantity supplied. Set Qd = Qs, solve for P, then substitute P into either equation to find Q.', src: 'ocr-as-level-economics-h060-supply-and-demand-and-the-interaction-of-markets-revision-notes' },
      { n: 4, f: 'Qd = 900 − 60P and Qs = 120P − 180. Find the equilibrium.', b: '900 − 60P = 120P − 180, so 180P = 1,080 and P = £6. Q = 900 − 360 = 540 thousand.', src: 'ocr-as-level-economics-h060-supply-and-demand-and-the-interaction-of-markets-revision-notes' },
      { n: 5, f: 'Adjustment chain after a shortage', b: 'Price rises, so demand contracts and supply extends, until quantity demanded equals quantity supplied at the new equilibrium.', src: 'ocr-as-level-economics-h060-supply-and-demand-and-the-interaction-of-markets-revision-notes' },
    ]),
    ...sub(T2, 'elasticity-ocr-aslevel-economics', '2.6', [
      { n: 1, f: 'PED, YED, XED and PES formulae', b: 'PED = %ΔQd ÷ %ΔP. YED = %ΔQd ÷ %Δ income. XED = %ΔQd of A ÷ %ΔP of B. PES = %ΔQs ÷ %ΔP.\nPercentage change = change ÷ starting value × 100.' },
      { n: 2, f: 'A shop cuts price from £20 to £19 and sales rise from 250 to 270. PED, and what happens to revenue?', b: 'Price −5%, quantity +8%. PED = 8 ÷ −5 = −1.6, elastic. Revenue rises from £5,000 to £5,130.' },
      { n: 3, f: 'Inferior good, necessity and luxury (YED)', b: 'Inferior: YED below 0.\nNecessity: YED between 0 and 1.\nLuxury: YED above 1.' },
      { n: 4, f: 'Substitutes vs complements (XED)', b: 'Substitutes: XED positive (a rise in B\'s price raises demand for A).\nComplements: XED negative.' },
      { n: 5, f: 'Determinants of PES', b: 'Time period, spare capacity, level of stocks, and ease of switching factors of production. Supply is more elastic in the long run.' },
      { n: 6, f: 'Why do firms and government care about PED?', b: 'Firms: a price rise raises revenue only if demand is inelastic.\nGovernment: indirect taxes on inelastic goods raise more revenue but change behaviour less.' },
    ]),
    ...sub(T2, 'market-failure-and-externalities-ocr-aslevel-economics', '2.7', [
      { n: 1, f: 'Market failure', b: 'The free market fails to allocate resources efficiently (MSB is not equal to MSC), so too much or too little is produced or consumed.' },
      { n: 2, f: 'Externality, and the social cost and benefit identities', b: 'A cost or benefit that lands on someone outside the transaction and is left out of the price.\nMSC = MPC + MEC. MSB = MPB + MEB.' },
      { n: 3, f: 'Diagram: negative production externality', b: 'MSC lies above MPC (supply). The market produces where MPC = MPB; the social optimum, where MSC = MSB, is lower. The welfare loss is the triangle between MSC and MSB over the extra output.' },
      { n: 4, f: 'Diagram: positive consumption externality', b: 'MSB lies above MPB (demand). The market consumes less than the social optimum where MSB = MSC. The welfare loss is the triangle between MSB and MSC over the missing output.' },
    ]),
    ...sub(T2, 'government-intervention-ocr-aslevel-economics', '2.8', [
      { n: 1, f: 'Indirect tax on a demerit good: effect', b: 'Supply shifts left by the tax; price rises and quantity falls towards the social optimum. Tax revenue is a transfer; the deadweight-loss triangle is the welfare cost. It works less when demand is inelastic.' },
      { n: 2, f: 'Subsidy on a merit good: effect', b: 'Supply shifts right by the subsidy; price falls and consumption rises towards the social optimum. Cost to government = subsidy per unit × new quantity.' },
      { n: 3, f: 'Maximum price vs minimum price', b: 'Maximum price: set below equilibrium; causes a shortage.\nMinimum price: set above equilibrium; causes a surplus.' },
      { n: 4, f: 'Buffer stock scheme', b: 'An agency buys when the price falls to the floor and sells from stock when it reaches the ceiling, to keep the price within a band.' },
      { n: 5, f: 'Regulation vs tradable permits', b: 'Regulation sets a fixed rule for each firm. Permits fix the total and let trading decide the price and who cuts.' },
      { n: 6, f: 'Other forms of intervention', b: 'Government expenditure (state provision), public/private partnerships, legislation and regulation, information provision and competition policy.' },
      { n: 7, f: 'Tradable pollution permit', b: 'A tradable right to emit a set amount, with the total capped. It fixes the quantity of pollution and lets trading set the price, so cuts are made where they are cheapest.' },
      { n: 8, f: 'Government failure', b: 'Intervention that makes the allocation of resources worse, causing a net welfare loss.' },
      { n: 9, f: 'Market failure vs government failure', b: 'Market failure: the market gets the allocation wrong.\nGovernment failure: the intervention gets it wrong.' },
      { n: 10, f: 'Causes of government failure', b: 'Distortion of price signals, unintended consequences (such as black markets), excessive administrative costs, and information gaps such as not knowing the true size of an externality.' },
      { n: 11, f: 'Why might a minimum price on a farm product cause government failure?', b: 'Set above equilibrium it creates a surplus the government must buy and store or destroy, at a cost to taxpayers, while consumers pay more.' },
    ]),

    // 3 Aggregate demand and aggregate supply (Component 2, area 1)
    ...sub(T3, 'circular-flow-of-income-ocr-aslevel-economics', '3.1', [
      { n: 1, f: 'Injections vs leakages (withdrawals)', b: 'Injections: investment, government spending, exports.\nLeakages: saving, taxation, imports. Equilibrium in the flow: withdrawals equal injections.' },
      { n: 2, f: 'Physical vs monetary flows', b: 'Physical: goods, services and factor services. Monetary: payments for them, moving in the opposite direction.' },
      { n: 3, f: 'The three methods of measuring national income', b: 'Output: sum of value added. Income: sum of factor incomes (wages, rent, interest, profit). Expenditure: C + I + G + (X − M).' },
      { n: 4, f: 'National income multiplier', b: 'The eventual change in income divided by the injection that started it. k = 1 ÷ MPW, where MPW = MPS + MRT + MPM.' },
      { n: 5, f: 'MPW is 0.5. An injection of 30bn. Final change in national income?', b: 'k = 1 ÷ 0.5 = 2. Income rises by 2 × 30 = 60bn (the rise in real GDP is smaller if prices rise).' },
    ]),
    ...sub(T3, 'aggregate-demand-ocr-aslevel-economics', '3.2', [
      { n: 1, f: 'Aggregate demand and its components', b: 'Planned spending on home-produced output at each price level.\nAD = C + I + G + (X − M).' },
      { n: 2, f: 'APC vs MPC', b: 'APC = C ÷ Yd. MPC = ΔC ÷ ΔYd. APC + APS = 1 and MPC + MPS = 1.' },
      { n: 3, f: 'Influences on consumption and investment', b: 'Consumption: income, interest rates, wealth, confidence, credit.\nInvestment: expected demand (the accelerator), interest rates, confidence, technology, government policy.' },
      { n: 4, f: 'Accelerator', b: 'Net investment depends on the change in output (income), not its level: net investment = v × ΔY.' },
      { n: 5, f: 'Movement along AD vs shift of AD', b: 'A change in the price level moves the economy along AD. A change in planned spending on any component at every price level shifts it.' },
    ]),
    ...sub(T3, 'aggregate-supply-ocr-aslevel-economics', '3.3', [
      { n: 1, f: 'Aggregate supply', b: 'Planned real output of all producers at each price level.' },
      { n: 2, f: 'SRAS vs LRAS (OCR definitions)', b: 'SRAS: when some costs, especially nominal wages, are fixed; slopes upwards.\nLRAS: productive capacity once costs and prices have adjusted; depends on factors and technology.' },
      { n: 3, f: 'What shifts SRAS?', b: 'Changes in costs of production: wages, raw material and energy prices, import prices, indirect taxes. A cost rise shifts SRAS left.' },
      { n: 4, f: 'What shifts LRAS?', b: 'Changes in the quantity or quality of factors: technology, education and skills, investment, labour force size, and institutions.' },
      { n: 5, f: 'Keynesian vs classical LRAS', b: 'Keynesian: horizontal with a lot of spare capacity, then rising, then vertical at full capacity.\nClassical: vertical at the full-capacity output.' },
    ]),
    ...sub(T3, 'the-interaction-of-aggregate-demand-and-supply-ocr-aslevel-economics', '3.4', [
      { n: 1, f: 'Diagram: AD rises in an economy with spare capacity', b: 'Price level on the vertical axis, real output on the horizontal. AD shifts right; real output rises a lot and the price level only a little.' },
      { n: 2, f: 'Diagram: AD rises near full capacity', b: 'AD shifts right where AS is steep or vertical: mostly a higher price level (demand-pull inflation), with little extra real output.' },
      { n: 3, f: 'Diagram: a cost-push shock', b: 'SRAS shifts left. The price level rises and real output falls: stagflation (falling output with rising prices).' },
      { n: 4, f: 'Diagram: an increase in productive capacity', b: 'LRAS shifts right. Real output can rise without a higher price level, or with a lower one.' },
      { n: 5, f: 'Macroeconomic equilibrium', b: 'The price level and real output where AD equals SRAS.' },
      { n: 6, f: 'Long-run equilibrium', b: 'AD, SRAS and LRAS all meet at one point: output is at potential.' },
      { n: 7, f: 'Potential output', b: 'Output at the economy\'s capacity, shown by the LRAS curve. A negative output gap means actual output is below it.' },
      { n: 8, f: 'Why is the rise in real GDP smaller than the shift of AD?', b: 'The AD shift equals injection × multiplier at a given price level, but as AD rises along an upward-sloping SRAS, part of the extra demand raises prices instead of output.' },
    ]),

    // 4 Economic policy objectives (Component 2, area 2)
    ...sub(T4, 'economic-growth-ocr-aslevel-economics', '4.1', [
      { n: 1, f: 'Economic growth, and nominal vs real GDP', b: 'Growth: more output over time, shown by the percentage rise in real GDP.\nNominal GDP: output at the prices of the time. Real GDP: output at constant (base-year) prices.' },
      { n: 2, f: 'Nominal GDP 2,200 (index 100) then 2,310 (index 104). Real growth?', b: 'Real GDP in year 2 = 2,310 ÷ 104 × 100 = 2,221.15. Real growth = 21.15 ÷ 2,200 = 0.96%, although nominal growth was 5.0%.' },
      { n: 3, f: 'Actual vs potential growth', b: 'Actual: a rise in actual output, using spare capacity.\nPotential: a rise in capacity (LRAS or the PPF shifts outwards).' },
      { n: 4, f: 'Recession', b: 'A fall in real output; commonly two quarters in a row of falling real GDP. A slowdown (slower-rising output) is not a recession.' },
      { n: 5, f: 'Sustained vs sustainable growth', b: 'Sustained: continues over a long period without being cut short by instability.\nSustainable: does not damage the environment or deplete resources future generations need.' },
      { n: 6, f: 'Primary, secondary and tertiary sectors', b: 'Primary: extracting or harvesting natural resources.\nSecondary: manufacturing and construction.\nTertiary: services.' },
    ]),
    ...sub(T4, 'development-ocr-aslevel-economics', '4.2', [
      { n: 1, f: 'How the structure of an economy usually changes as it develops', b: 'Output and jobs move from the primary sector to the secondary sector (industrialisation), then to the tertiary sector (deindustrialisation). Farm productivity releases labour, and demand for services rises faster than income.' },
      { n: 2, f: 'Sustainable development', b: 'Development that meets the needs of the present without compromising the ability of future generations to meet their own needs. It has economic, social and environmental strands.' },
      { n: 3, f: 'Does economic growth help or harm sustainable development?', b: 'Helps: funds health, education and cleaner technology, and cuts poverty.\nHarms: growth that depletes natural resources or raises pollution lifts GDP now but cuts future capacity.\nIt depends on the type of growth and on policy.' },
      { n: 4, f: 'The three dimensions of the Human Development Index (HDI)', b: 'Health: life expectancy at birth.\nEducation: mean and expected years of schooling.\nStandard of living: GNI per head at purchasing power parity.\nThe score runs from 0 to 1.' },
      { n: 5, f: 'Limitations of the HDI', b: 'It leaves out inequality, the environment, freedom and political rights; its equal weights are a choice; years of schooling ignore quality; and data can be weak in poorer countries.' },
      { n: 6, f: 'Alternative social and cultural indicators', b: 'Measures beyond GDP and the HDI, such as infant mortality, literacy, access to clean water, the Gini coefficient, life satisfaction surveys and cultural participation. They show what income misses but are hard to combine.' },
    ]),
    ...sub(T4, 'employment-ocr-aslevel-economics', '4.3', [
      { n: 1, f: 'Unemployed vs economically inactive', b: 'Unemployed: without a job, actively seeking work and available to start.\nInactive: outside the labour force, neither in a job nor searching (students, carers, retired people).' },
      { n: 2, f: 'Population 16+ 30.0m, employed 19.2m, unemployed 0.8m. Unemployment rate?', b: 'Labour force = 19.2 + 0.8 = 20.0m. Unemployment rate = 0.8 ÷ 20.0 × 100 = 4.0%.' },
      { n: 3, f: 'LFS vs claimant count', b: 'LFS: a survey using the ILO definition (without work, available and looking).\nClaimant count: those claiming unemployment-related benefits, from benefit records.' },
      { n: 4, f: 'Cyclical vs structural vs frictional unemployment', b: 'Cyclical: too little demand in a downturn.\nStructural: a mismatch of skills or location after the economy\'s structure changes.\nFrictional: between jobs while searching.' },
      { n: 5, f: 'Full employment vs zero unemployment', b: 'Full employment: everyone who wants and is able to work at the going wage can find work; frictional and voluntary unemployment still remain.' },
    ]),
    ...sub(T4, 'inflation-ocr-aslevel-economics', '4.4', [
      { n: 1, f: 'Inflation, deflation and disinflation', b: 'Inflation: a continuing rise in prices across the economy.\nDeflation: a continuing fall in average prices.\nDisinflation: the rate of inflation slows, but prices still rise.' },
      { n: 2, f: 'Index vs inflation rate', b: 'An index of 108 says prices are 8% above the base year. The inflation rate compares two index values: (new − old) ÷ old × 100.' },
      { n: 3, f: 'Demand-pull vs cost-push inflation', b: 'Demand-pull: AD shifts right, raising output as well as prices.\nCost-push: SRAS shifts left, lowering output while prices rise.' },
      { n: 4, f: 'CPI vs RPI', b: 'Different averaging methods, different treatment of housing costs (RPI includes mortgage interest payments) and slightly different household coverage.' },
      { n: 5, f: 'Why aim for low and stable inflation rather than zero?', b: 'A little inflation lets real wages adjust without cutting money pay and keeps the economy away from the risks of deflation.' },
      { n: 6, f: 'Consequences of high inflation', b: 'Lower real value of savings and fixed incomes, menu and shoe-leather costs, uncertainty that deters investment, and loss of international competitiveness.' },
    ]),
    ...sub(T4, 'balance-of-payments-ocr-aslevel-economics', '4.5', [
      { n: 1, f: 'Balance of payments', b: 'The account of every payment crossing a country\'s border, in either direction, in a stated time span. Credits are money in; debits are money out.' },
      { n: 2, f: 'The current account', b: 'Trade in goods, trade in services, income (primary) and current transfers (secondary).' },
      { n: 3, f: 'The accounting identity', b: 'Current account + capital account + financial account + errors and omissions = 0, so a current account deficit is matched by net inflows elsewhere.' },
      { n: 4, f: 'Causes of a current account deficit', b: 'Fast growth raising imports, high inflation or unit labour costs, a strong exchange rate, low productivity and a narrow export base.' },
      { n: 5, f: 'Expenditure-reducing vs expenditure-switching policies', b: 'Reducing: lowers total demand, and so imports.\nSwitching: shifts demand from foreign to home goods (depreciation, tariffs).' },
    ]),
    ...sub(T4, 'trends-in-macroeconomic-indicators-ocr-aslevel-economics', '4.6', [
      { n: 1, f: 'Level vs rate of change vs trend', b: 'Level: where a series stands at one date.\nRate of change: the percentage change from one period to the next.\nTrend: the general direction over several years.' },
      { n: 2, f: 'Unemployment rises from 5.0% to 7.0% of the labour force. Is that a 2% rise?', b: 'No: it is a rise of 2.0 percentage points. With the same labour force, the number unemployed has risen by 40% (from 1.2m to 1.68m of 24.0m).' },
      { n: 3, f: 'A real GDP index rises from 100 to 121.6 over 8 years. Average annual growth?', b: 'Compound: 1.216^(1/8) − 1 = 2.47% a year. A simple average (21.6 ÷ 8 = 2.7%) overstates it.' },
      { n: 4, f: 'Real GDP is 200, then 214, then 207. Growth each year?', b: 'Year 2: (214 − 200) ÷ 200 = 7.0%. Year 3: (207 − 214) ÷ 214 = −3.27%. Output is still 3.5% above the start.' },
      { n: 5, f: 'UK trends to recall: 2008–09 and 2021 onwards', b: '2008–09: deep recession after the financial crisis; Bank Rate cut to 0.5% in March 2009.\n2021 onwards: inflation surge (CPI peaked at 11.1% in October 2022); Bank Rate raised to 5.25% by August 2023.' },
      { n: 6, f: 'Comparing the UK with other economies: what to check', b: 'Same year, definition and unit; totals or per head; how far starting levels differ; one year or an average; and what the indicator leaves out (distribution, job quality, environment).' },
    ]),

    // 5 Implementing policy (Component 2, area 3)
    ...sub(T5, 'fiscal-policy-ocr-aslevel-economics', '5.1', [
      { n: 1, f: 'Average vs marginal tax rate', b: 'Average: tax over total income. Marginal: the rate on the extra income. In a progressive system, the marginal rate exceeds the average rate.', src: FP1 },
      { n: 2, f: 'Progressive vs regressive tax: how to test', b: 'Look at the average rate, not the amount paid. Progressive: the average rate rises with income. Regressive: it falls. Proportional: it stays the same.', src: FP1 },
      { n: 3, f: 'Direct vs indirect tax', b: 'Direct: on income, profit and wealth. Indirect: on spending. The legal payer of an indirect tax is the seller, but the burden may fall on the buyer.', src: FP1 },
      { n: 4, f: 'Budget position vs fiscal stance', b: 'Position is the balance (surplus, deficit or balanced). Stance is the direction policy pushes demand: expansionary, contractionary or neutral.', src: FP1 },
      { n: 5, f: 'Budget deficit vs national debt', b: 'Deficit: spending exceeds revenue in a year (a flow). Debt: the stock of outstanding government borrowing on one date. A deficit adds to the debt.' },
      { n: 6, f: 'Automatic stabilisers vs discretionary policy', b: 'Automatic stabilisers: parts of the budget that offset output swings with no new decision (tax receipts fall and benefits rise in a downturn).\nDiscretionary: a deliberate change in spending or taxes.' },
    ]),
    ...sub(T5, 'monetary-policy-ocr-aslevel-economics', '5.2', [
      { n: 1, f: 'Monetary policy instruments', b: 'The policy interest rate (which commercial rates follow), the money supply, quantitative easing and the exchange rate, used to influence AD.' },
      { n: 2, f: 'What happens to AD when the policy rate is cut?', b: 'Borrowing is cheaper and saving less rewarding, so C and I rise; mortgage payments fall; the currency may depreciate, raising net exports. AD shifts right after a time lag.' },
      { n: 3, f: 'Quantitative easing (QE)', b: 'The central bank creates electronic money to buy assets, usually government bonds, from financial institutions, lowering long-term interest rates.' },
      { n: 4, f: 'Inflation rate targeting', b: 'A published numerical inflation target that guides policy; in the UK the Bank of England\'s Monetary Policy Committee sets Bank Rate to meet the government\'s CPI target.' },
      { n: 5, f: 'Real interest rate', b: 'Approximately the nominal rate minus inflation. Exactly (1 + nominal) ÷ (1 + inflation) − 1. Nominal 5% with expected inflation 3%: 1.05 ÷ 1.03 − 1 = 1.9%.' },
    ]),
    ...sub(T5, 'supply-side-policy-ocr-aslevel-economics', '5.3', [
      { n: 1, f: 'Supply-side policy', b: 'Measures that raise the quality or quantity of factors of production, or make markets work better, so potential output grows (LRAS shifts right).' },
      { n: 2, f: 'Market-based vs interventionist supply-side policies', b: 'Market-based: deregulation, tax cuts, privatisation, labour market flexibility.\nInterventionist: state-funded education and training, infrastructure, subsidies for R&D.' },
      { n: 3, f: 'Tax 30% and benefits lost at 45% of net pay. Effective marginal rate on an extra 100?', b: 'Net after tax = 70. Benefit lost = 0.45 × 70 = 31.5. Kept = 38.5, so the effective marginal rate is 61.5%.' },
      { n: 4, f: 'Strengths and limits of supply-side policies', b: 'Strengths: can raise growth while lowering inflation and unemployment.\nLimits: long time lags, uncertain effects, cost to the budget, and some (such as benefit cuts) can widen inequality.' },
    ]),
    ...sub(T5, 'policy-conflicts-ocr-aslevel-economics', '5.4', [
      { n: 1, f: 'Policy conflict (trade-off)', b: 'Pursuing one objective moves another away from its target. Conflicts are weaker when the economy has spare capacity.' },
      { n: 2, f: 'Conflict: low unemployment vs low inflation', b: 'Raising AD cuts cyclical unemployment, but near capacity it bids up wages and prices: demand-pull inflation.' },
      { n: 3, f: 'Conflict: economic growth vs the current account', b: 'Rising incomes raise imports. With an MPM of 0.2, a rise in income of 50 raises imports by 10, worsening the current account.' },
      { n: 4, f: 'Conflict: growth vs the environment', b: 'More output uses more resources and raises emissions and other external costs, unless growth is decoupled from environmental harm.' },
      { n: 5, f: 'Policy mix', b: 'Using several instruments together (fiscal, monetary, supply-side) so that one can offset the side effects of another.' },
    ]),

    // 6 The global context (Component 2, area 4)
    ...sub(T6, 'international-trade-ocr-aslevel-economics', '6.1', [
      { n: 1, f: 'Absolute vs comparative advantage', b: 'Absolute: fewer resources per unit, or more output from the same resources.\nComparative: giving up less of other goods to make a good (lower opportunity cost).' },
      { n: 2, f: 'Export price index 108, import price index 96. Terms of trade?', b: '108 ÷ 96 × 100 = 112.5, an improvement of 12.5%: each unit of exports buys more imports.' },
      { n: 3, f: 'Terms of trade vs trade balance', b: 'Terms of trade: a price ratio (export prices ÷ import prices). Trade balance: a money value (exports − imports). Better terms of trade can still lower export revenue if demand is elastic.' },
      { n: 4, f: 'Benefits and costs of international trade', b: 'Benefits: lower prices, more choice, economies of scale, specialisation by comparative advantage.\nCosts: job losses in import-competing industries, dependence on others, exposure to world shocks.' },
      { n: 5, f: 'Unit labour cost and international competitiveness', b: 'ULC = labour cost ÷ output. Competitiveness is the ability to sell against foreign rivals; it rises when ULC falls relative to rivals, and with non-price factors such as quality.' },
    ]),
    ...sub(T6, 'exchange-rates-ocr-aslevel-economics', '6.2', [
      { n: 1, f: 'Floating vs fixed exchange rate system', b: 'Floating: market forces set the rate.\nFixed (pegged): the central bank commits to a target rate, using reserves and interest rates to defend it.' },
      { n: 2, f: 'Appreciation and depreciation vs revaluation and devaluation', b: 'Appreciation and depreciation: a rise or fall in a floating currency.\nRevaluation and devaluation: an official upward or downward resetting of a pegged rate.' },
      { n: 3, f: 'What makes a currency appreciate?', b: 'Higher demand for it or lower supply: higher interest rates than abroad (hot money), stronger exports, inward investment, lower inflation than abroad, and speculation that it will rise.' },
      { n: 4, f: 'Effects of a depreciation', b: 'Exports cheaper abroad and imports dearer, so net exports and AD may rise; inflation tends to rise through import prices. The current account improves only if PEDx + PEDm > 1 (Marshall-Lerner).' },
      { n: 5, f: 'J-curve', b: 'After a depreciation the trade balance first worsens, because demand for exports and imports is inelastic in the short run, then improves as buyers adjust.' },
      { n: 6, f: 'A currency falls 20% (0.50 to 0.40 foreign units). By how much do import prices in home currency rise?', b: 'By 25%: a good costing 1 foreign unit cost 2.00 home units and now costs 2.50. A fall in one currency is not an equal rise in the other.' },
    ]),
  ],
};
