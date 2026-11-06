/**
 * D-438 -- flashcards for AQA GCSE Economics 8136 (first teaching from September 2017).
 *
 * One block per subtopic, in specification order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 8136); origin 'revision-notes'.
 *
 * The specification is not tiered, so no card is marked upper tier. Worked
 * examples use the same invented figures as the Marlbridge 8136 revision notes.
 * Sub-topics 3.2.2.2-3.2.5.2 were itemised on 2026-11-05 and their cards were
 * first authored from the specification; on 2026-11-05 they were re-checked against
 * the new 8136 revision-notes pages for those sub-topics (GRO ... MON below) and the
 * specification, and cards restating those pages carry src.
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

const MKT = 'how-markets-work-aqa-gcse-economics';
const ECO = 'how-the-economy-works-aqa-gcse-economics';

const OBJ = 'aqa-gcse-economics-business-objectives-costs-revenue-and-profit-revision-notes';
const DSF = 'aqa-gcse-economics-demand-and-supply-factors-curves-shifts-and-movements-revision-notes';
const FOUND = 'aqa-gcse-economics-economic-foundations-needs-and-wants-factors-of-revision-notes';
const GOV = 'aqa-gcse-economics-economic-objectives-of-the-government-conflicts-other-revision-notes';
const IR = 'aqa-gcse-economics-interest-rates-revision-notes';
const MF = 'aqa-gcse-economics-market-failure-misallocation-of-resources-revision-notes';
const MS = 'aqa-gcse-economics-market-structures-competitive-and-non-competitive-revision-notes';
const PROD = 'aqa-gcse-economics-productivity-and-economies-of-scale-revision-notes';
const RA = 'aqa-gcse-economics-resource-allocation-markets-economic-sectors-and-revision-notes';
const LAB = 'aqa-gcse-economics-the-labour-market-wage-determination-differentials-and-revision-notes';
const REV = 'aqa-gcse-economics-uk-government-revenue-spending-direct-and-indirect-revision-notes';
const GRO = 'aqa-gcse-economics-economic-growth-and-unemployment-revision-notes';
const INF = 'aqa-gcse-economics-inflation-and-price-stability-revision-notes';
const BOP = 'aqa-gcse-economics-balance-of-payments-and-distribution-of-income-revision-notes';
const FMP = 'aqa-gcse-economics-fiscal-and-monetary-policy-revision-notes';
const SSX = 'aqa-gcse-economics-supply-side-and-externality-policies-revision-notes';
const TRX = 'aqa-gcse-economics-international-trade-and-exchange-rates-revision-notes';
const FTG = 'aqa-gcse-economics-free-trade-agreements-and-globalisation-revision-notes';
const MON = 'aqa-gcse-economics-money-and-the-financial-sector-revision-notes';

export const DECK_AQA_GCSE_ECONOMICS: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'gcse',
  subjectSlug: 'economics',
  syllabusCode: '8136',
  syllabusSeries: 'For first teaching from September 2017',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'salman-ahmad', reviewedOn: '2026-11-05' },
  cards: [
    // 1 How markets work
    ...sub(MKT, 'economic-foundations-aqa-gcse-economics', '3.1.1', [
      { n: 1, f: 'Need and want', b: 'A need is something a person must have to stay alive and healthy (food, water, shelter, clothing). A want is something enjoyable that a person can manage without. Wants change with technology, income, age and fashion.', src: FOUND },
      { n: 2, f: 'Economic resource', b: 'An input to production that is limited in supply and can be used in more than one way.', src: FOUND },
      { n: 3, f: 'Scarcity', b: 'Not enough resources to meet everyone\'s wants; this is the basic economic problem. It affects households, firms and governments. Scarcity does not mean "poor".', src: FOUND },
      { n: 4, f: 'Opportunity cost', b: 'The best option forgone because another was chosen.', src: FOUND },
      { n: 5, f: 'The three key economic decisions', b: 'What to produce (e.g. hospitals or roads), how to produce it (labour-intensive or capital-intensive methods) and who benefits (those who can pay, or by need).' },
      { n: 6, f: 'The four factors of production, their rewards and a quick test for each', b: 'Land (rent): a natural resource.\nLabour (wages): human effort.\nCapital (interest): made to help produce more output.\nEnterprise (profit): organises production and bears the risk.' },
      { n: 7, f: 'Why is profit different from the other factor rewards?', b: 'Rent, wages and interest are normally agreed beforehand. Profit is the balance left after they are paid, so it can be negative. Example: revenue 5,200 minus wages 3,000, rent 500, interest 200 and other costs 700 leaves a profit of 800.' },
      { n: 8, f: 'A farmer has 10 hectares. Profit per hectare: potatoes £1,150, wheat £900, sheep £700. She grows all potatoes. What is the opportunity cost?', b: 'The next best option, wheat: 10 × 900 = £9,000 of wheat profit (not wheat plus sheep). Her extra gain is 11,500 − 9,000 = £2,500.' },
      { n: 9, f: 'How to produce: 600 chairs a week by hand (12 workers at £350) or with a machine (4 workers at £350 plus £2,100). Which is cheaper per chair?', b: 'By hand: £4,200 ÷ 600 = £7.00 a chair.\nMachine: (1,400 + 2,100) ÷ 600 = £3,500 ÷ 600, about £5.83 a chair.\nThe machine saves £700 a week, but eight jobs go and the firm relies on orders staying high.' },
      { n: 10, f: 'The three main economic groups and how they interact', b: 'Consumers sell labour, receive wages and spend on products. Producers hire resources, pay rewards, make products and receive revenue. Government collects taxes, provides public services, pays benefits, gives subsidies and sets rules.' },
      { n: 11, f: 'Exam trap: capital versus money', b: 'In economics, capital is physical: machines, vans, tools, buildings. Money is not a factor of production. Interest is paid to those who lend the money used to buy capital.' },
    ]),
    ...sub(MKT, 'resource-allocation-aqa-gcse-economics', '3.1.2', [
      { n: 1, f: 'Market', b: 'An opportunity for buyers and sellers to interact in order to establish a price. They do not have to meet in one place: online and phone deals count.', src: RA },
      { n: 2, f: 'Product market and factor market', b: 'Product market: where finished goods and services are bought and sold (household buys from firm).\nFactor market: where land, labour, capital and enterprise are bought and sold (firm buys from household).', src: RA },
      { n: 3, f: 'A nurse sells her labour to a hospital, then buys shoes. Which markets is she in?', b: 'Selling labour: the factor market. Buying shoes: the product market. Ask what is being bought: a finished item, or the services of a factor of production.' },
      { n: 4, f: 'How does price allocate scarce resources in a market?', b: 'Price is a signal and a rationing device. Demand rises → price rises → profits rise → firms and factor owners move resources into that product → supply grows. A price rise tells sellers to supply more and buyers to buy less.' },
      { n: 5, f: 'Primary, secondary and tertiary sectors: a test for each', b: 'Primary: is it taken from the ground, sea or land? (farm, quarry, fishing).\nSecondary: is something made or built? (brewery, shipyard).\nTertiary: is it a service? (bank, school, shop, taxi). Judge the activity, not the firm.' },
      { n: 6, f: 'Relative size of the UK\'s three sectors', b: 'The tertiary sector is by far the largest, the secondary sector is smaller and the primary sector is the smallest, for both output and jobs.' },
      { n: 7, f: 'Exam trap: which sector is retail in?', b: 'The tertiary sector: it is a service. A baker mixing and baking is secondary; the same baker selling over the counter is tertiary.' },
      { n: 8, f: 'A sector\'s share of jobs falls from 10% to 6%. Describe the change correctly.', b: 'A fall of 4 percentage points. Only if total jobs are unchanged has the number of jobs fallen by 40% ((6 − 10) ÷ 10). If total jobs grew, the number fell by less. Say which you mean.' },
      { n: 9, f: 'Specialisation and division of labour', b: 'Specialisation: concentrating on a limited range of tasks or products.\nDivision of labour: breaking a production process into separate tasks, one per worker.', src: RA },
      { n: 10, f: 'Three bakers on a 6-hour shift are paid 216 in total. Output rises from 10 to 16 buns per worker per hour after dividing the tasks. Effect on labour cost per bun?', b: 'Before: 3 × 6 × 10 = 180 buns, 216 ÷ 180 = 1.20 a bun.\nAfter: 3 × 6 × 16 = 288 buns, 216 ÷ 288 = 0.75 a bun.\nOutput +60%; labour cost per bun −37.5%.' },
      { n: 11, f: 'Division of labour: costs to the worker and to the firm', b: 'Worker: repetitive, dull work, narrow skills and harder to switch jobs.\nFirm: boredom raises absence and staff leaving, one absence can stop the line, and it is inflexible. Specialisation also creates dependence on others through exchange.' },
      { n: 12, f: 'Exchange', b: 'Trading what you make for what others make. It lets specialists enjoy a wider range of goods than they could make themselves.', src: RA },
    ]),
    ...sub(MKT, 'how-prices-are-determined-aqa-gcse-economics', '3.1.3', [
      { n: 1, f: 'Demand and supply', b: 'Demand: how much consumers are both willing and able to purchase at a price over a stated period.\nSupply: the amount producers are both willing and able to offer at a price over a stated period.', src: DSF },
      { n: 2, f: 'Movement along a curve versus shift of a curve', b: 'A movement happens when the good\'s own price changes and nothing else does (extension or contraction). A shift is caused by a change in any other factor (increase or decrease).', src: DSF },
      { n: 3, f: 'What happens to demand for a good when the price of a substitute rises, and when the price of a complement rises?', b: 'Substitute price rises: demand for the good rises (shifts right), as buyers switch.\nComplement price rises: demand for the good falls (shifts left), as buyers use less of the pair.' },
      { n: 4, f: 'Factors that shift the supply curve left', b: 'Higher costs of production (e.g. wages, materials), a higher tax on production, fewer firms, bad weather for farm goods, and a rise in the price of another good the firm could make instead.' },
      { n: 5, f: 'How does the price move a market back to equilibrium from excess demand?', b: 'Buyers compete and sellers see shortages, so price rises; quantity supplied rises and quantity demanded falls until the gap closes. The curves stay where they are: it is a movement along both.' },
      { n: 6, f: 'Lunch boxes: equilibrium £10 and 200. Demand falls by 120 at every price; at £8 the new demand is 160 and supply is 160. Describe the change.', b: 'Demand shifts left. At £10 there is now excess supply (80 demanded, 200 supplied), so the price falls. New equilibrium: £8 and 160 lunch boxes. Revenue falls from £2,000 to £1,280.' },
      { n: 7, f: 'How is revenue shown on a demand and supply diagram?', b: 'As the rectangle from the origin to the equilibrium point: price × quantity. Away from equilibrium use the quantity actually sold, which is the smaller of quantity demanded and quantity supplied.' },
      { n: 8, f: 'Trains: demand 700 − 50P, supply 100 + 50P. Bus fares rise and train demand rises by 100 at every price. Find the old and new equilibrium.', b: 'Before: 700 − 50P = 100 + 50P, so P = £6 and Q = 400.\nAfter: 800 − 50P = 100 + 50P, so P = £7 and Q = 450. Revenue rises from £2,400 to £3,150.' },
      { n: 9, f: 'Price elasticity of demand: formula. A price rises from £50 to £55 and sales fall from 400 to 320. Find PED.', b: 'PED = % change in quantity demanded ÷ % change in price.\nPrice +10%, quantity −20%, so PED = −20 ÷ 10 = −2.0: price elastic. Revenue falls from £20,000 to £17,600.' },
      { n: 10, f: 'Price elasticity of supply: formula. Price rises from £4 to £5 and output from 800 to 1,000. Find PES.', b: 'PES = % change in quantity supplied ÷ % change in price.\nPrice +25%, quantity +25%, so PES = +1.0: unit elastic.' },
      { n: 11, f: 'Factors that make demand more price elastic, and supply more price elastic', b: 'Demand: many close substitutes, a luxury, a large share of income, not habit forming, a long time period, a narrowly defined good (a single brand).\nSupply: spare capacity, stocks, a long time period, quick production, easy switching of resources.' },
      { n: 12, f: 'PED is −0.5 and a firm selling 800 units raises its price by 10%. Forecast sales and say what happens to revenue.', b: 'Quantity changes by −0.5 × 10% = −5%, so sales fall to 800 × 0.95 = 760. Demand is inelastic, so revenue rises. (Remember: compare the size of PED with 1; a PED of −3 is more elastic than −0.5.)' },
    ]),
    ...sub(MKT, 'production-costs-revenue-and-profit-aqa-gcse-economics', '3.1.4', [
      { n: 1, f: 'Fixed cost', b: 'Does not change with output (rent, insurance, salaries, lease).', src: OBJ },
      { n: 2, f: 'Variable cost', b: 'Changes with output (materials, packaging, pay per item).', src: OBJ },
      { n: 3, f: 'Fixed costs £1,500, variable cost £22 a stool, 250 stools sold at £40. Find TC, AC and profit.', b: 'TVC = 22 × 250 = £5,500. TC = 1,500 + 5,500 = £7,000.\nAC = 7,000 ÷ 250 = £28.\nTR = 40 × 250 = £10,000. Profit = £3,000 (check: (40 − 28) × 250).' },
      { n: 4, f: 'A stall\'s sales rise from £30,000 to £33,000 while its market grows from £250,000 to £330,000. What happens to sales growth and market share?', b: 'Sales growth = 3,000 ÷ 30,000 × 100 = 10%.\nShare falls from 12% (30,000 ÷ 250,000) to 10% (33,000 ÷ 330,000), because the market grew faster. Sales growth and market share are separate objectives.' },
      { n: 5, f: 'Why does a higher price give producers an incentive to expand output?', b: 'Price rises → profit per unit rises (if costs are unchanged) → supplying more is more attractive → firms expand and new firms may enter. This is why supply slopes upward. Total profit need not rise, as quantity sold may fall.' },
      { n: 6, f: 'Production versus productivity', b: 'Production is total output in a period. Productivity is output per worker or per hour. A call centre going from 5 staff and 600 calls to 7 staff and 840 calls raised production by 40%, but productivity stayed at 120 calls per worker.' },
      { n: 7, f: 'Factors that raise labour productivity', b: 'Skills and training, capital and technology, motivation, pay and working conditions, management and organisation (including division of labour), and workers\' health and education.' },
      { n: 8, f: 'A worker is paid £520 a week and output per worker rises from 20 to 26 units. What happens to labour cost per unit?', b: 'Productivity rises 30%. Labour cost per unit falls from 520 ÷ 20 = £26.00 to 520 ÷ 26 = £20.00, a saving of £6.00 a unit.' },
      { n: 9, f: 'Economies of scale and diseconomies of scale', b: 'Economies of scale: average cost falls as the scale of production rises.\nDiseconomies of scale: average cost rises when a firm grows too large (communication, coordination and motivation problems).', src: PROD },
      { n: 10, f: 'Five types of economies of scale and why each lowers unit cost', b: 'Purchasing: bulk discounts.\nTechnical: big machines spread fixed costs over more units.\nFinancial: lower interest rates for large firms.\nManagerial: specialist managers\' pay shared over more output.\nRisk-bearing: many products or markets.' },
      { n: 11, f: 'A printer\'s average cost is £8.00 at 500 units, £5.50 at 2,000, £6.00 at 3,000 and £7.00 at 4,000. Where do economies of scale end?', b: 'At 2,000 units, the lowest average cost. From 500 to 2,000 AC falls 31.25% (economies of scale). Beyond 2,000 AC rises, e.g. 9.1% to 3,000 units: diseconomies. Total cost rises throughout.' },
      { n: 12, f: 'Producers and ethics: why might a firm act unethically, and what is the evaluation?', b: 'Low wages, unsafe conditions, pollution or misleading claims can cut costs or raise revenue, so profit rises, while workers, residents, customers or the environment lose. But fines, a damaged reputation and lost customers can cancel the gain; it depends on laws, customer awareness and firm size.' },
    ]),
    ...sub(MKT, 'competitive-and-concentrated-markets-aqa-gcse-economics', '3.1.5', [
      { n: 1, f: 'The three factors used to identify a market structure', b: 'Number of producers (many → one or few), product differentiation (little → high) and ease of entry (easy → hard). Structures form a range from many small producers to a single producer.' },
      { n: 2, f: 'Product differentiation and ease of entry', b: 'Product differentiation: making a product different from rivals\' so that buyers prefer it.\nEase of entry: how easily new firms can set up in the market.', src: MS },
      { n: 3, f: 'Characteristics of a competitive market', b: 'Many producers each with a small share, similar products, easy entry and exit, and buyers who can compare and switch easily. Firms have little power over price.' },
      { n: 4, f: 'Why are profits lower in a competitive market than where a few producers dominate?', b: 'Many rivals, so firms cannot raise price without losing customers; prices stay close to costs; high profit attracts entrants, so supply rises and price falls; each firm has a small share. Where a few dominate, entry is blocked, so high profits last.' },
      { n: 5, f: 'Monopoly and oligopoly', b: 'Monopoly: a single producer supplies the whole market; strong price-setting power. A firm with a very large share but not 100% has monopolistic power.\nOligopoly: a few large sellers hold most of the sales; firms are interdependent and must consider rivals\' reactions.' },
      { n: 6, f: 'Two oligopolists each charge £50 and earn £30,000 profit. One cuts to £44, the other matches, and each now earns £18,000. What does this show?', b: 'Each loses 40% of its profit (12,000 ÷ 30,000) and neither gains customers. This is why oligopolists tend to avoid price wars and compete through branding and advertising instead.' },
      { n: 7, f: 'Causes of monopoly and oligopoly power', b: 'High start-up costs, economies of scale, patents, copyrights and licences, brand loyalty, control of resources or outlets, mergers and takeovers, price cutting to deter entrants, and natural growth of successful firms.' },
      { n: 8, f: 'Non-competitive markets: one disadvantage and one advantage each for consumers and workers', b: 'Consumers: higher prices and less choice; but lower prices if scale savings are passed on, and innovation.\nWorkers: fewer employers and possible job losses after mergers; but job security and training in large firms.' },
      { n: 9, f: 'Derived demand', b: 'Firms\' need for workers, which exists only because buyers want what the workers help produce.', src: LAB },
      { n: 10, f: 'Qd = 180 − 6W and Qs = 4W − 20 (W in £ an hour). Find the equilibrium wage, and the gap at £16.', b: 'Equilibrium: 180 − 6W = 4W − 20, so 10W = 200, W = £20 and 60 workers.\nAt £16: Qd = 84, Qs = 44, a shortage of 40 workers, which pushes the wage up.' },
      { n: 11, f: 'Explain a wage differential: why are workers in jobs needing long training usually paid more?', b: 'Long training means fewer qualified people, so labour supply is lower (curve further left), and the equilibrium wage is higher. Other causes: high revenue per worker (high demand), risk, stress or unsocial hours.' },
      { n: 12, f: 'A worker earns £14 an hour for 30 hours plus a £60 bonus. Tax is 20% and National Insurance 8%, each on pay above £100 a week. Find gross and net pay.', b: 'Gross: 14 × 30 + 60 = £480.\nPay above £100: £380. Tax £76; NI £30.40.\nNet: 480 − 76 − 30.40 = £373.60.' },
    ]),
    ...sub(MKT, 'market-failure-aqa-gcse-economics', '3.1.6', [
      { n: 1, f: 'Market failure', b: 'The inability of the market system to allocate resources efficiently.', src: MF },
      { n: 2, f: 'Misallocation of resources', b: 'An excess of some goods and a shortage of others, set against the best outcome for society.', src: MF },
      { n: 3, f: 'Externality', b: 'A cost borne or benefit received by someone outside the transaction (a third party).', src: MF },
      { n: 4, f: 'Social cost and social benefit', b: 'Social cost = private cost + external cost.\nSocial benefit = private benefit + external benefit.\nExample: a coach firm\'s private cost is £8 a trip and noise costs residents £5, so social cost is £13.' },
      { n: 5, f: 'Negative externality', b: 'Social cost is above private cost, so the market produces too much.', src: MF },
      { n: 6, f: 'Positive externality', b: 'Social benefit is above private benefit, so the market produces too little.', src: MF },
      { n: 7, f: 'Give an example of each: negative production, negative consumption, positive production, positive consumption externality', b: 'Negative production: a factory\'s fumes harm local homes.\nNegative consumption: driving adds congestion and fumes.\nPositive production: a firm trains workers who later help local firms.\nPositive consumption: vaccination lowers others\' risk of disease.' },
      { n: 8, f: 'Costs of the misallocation of resources', b: 'Scarce resources wasted (a better use forgone), harm to third parties (pollution, noise, congestion, ill health), beneficial goods such as education and health care under-provided, and public money spent on clean-up that cannot be spent elsewhere.' },
      { n: 9, f: 'Indirect tax on a good with a negative externality, described on a diagram', b: 'Price on the vertical axis, quantity on the horizontal. The tax shifts supply upward (left) by the size of the tax. At the new equilibrium price is higher and quantity lower, closer to the level that is best for society.' },
      { n: 10, f: 'Methods of government intervention to correct market failure', b: 'Indirect taxes (negative externalities), subsidies (positive externalities), laws and regulation (limits or bans backed by penalties), information and education, and direct provision funded by taxes.' },
      { n: 11, f: 'Evaluating a tax or subsidy to correct an externality: what does it depend on?', b: 'Whether the external cost or benefit can be measured correctly, who pays (firms, consumers or taxpayers), the opportunity cost of public money, whether people can avoid or evade it, and how long it takes to work.' },
      { n: 12, f: 'Market failure versus a high price', b: 'Failure means misallocation, not an unwelcome price.', src: MF },
    ]),

    // 2 How the economy works
    ...sub(ECO, 'interest-rates-saving-borrowing-spending-investment-aqa-gcse-economics', '3.2.1.1', [
      { n: 1, f: 'Interest rate', b: 'The cost of borrowing, or the reward for saving, as a percentage per year.', src: IR },
      { n: 2, f: 'Factors that influence different rates of interest', b: 'The risk of the borrower (a riskier borrower pays a higher rate), the length of the loan or savings term, and the wider level of rates set by the central bank.' },
      { n: 3, f: 'Interest rates rise: effect on consumers', b: 'Borrowing and spending are discouraged because loans cost more; saving is encouraged because returns are better.', src: IR },
      { n: 4, f: 'Interest rates rise: effect on producers', b: 'Borrowing and investment are discouraged; holding cash becomes relatively more attractive than expanding.', src: IR },
      { n: 5, f: 'Interest rates fall: effect on consumers and producers', b: 'Consumers: borrowing and spending encouraged, saving discouraged.\nProducers: borrowing and investment encouraged.' },
      { n: 6, f: 'A student deposits £1,800 at 5% a year. How much interest is earned in one year?', b: 'Interest = principal × rate = 1,800 × 0.05 = £90. Convert the percentage to a decimal before multiplying.' },
      { n: 7, f: '£1,000 is saved at 5% a year and the interest is left in the account. How much is there after two years?', b: 'Year 1: 1,000 × 1.05 = £1,050.\nYear 2: 1,050 × 1.05 = £1,102.50. The second year earns interest on the first year\'s interest too.' },
      { n: 8, f: 'A saver has £20,000. The interest rate falls from 5% to 3%. What happens to their yearly interest?', b: 'It falls from £1,000 to £600, a loss of £400, which is 40% of their interest income. Lower rates harm savers and help borrowers.' },
      { n: 9, f: 'Why does a rise in interest rates tend to reduce spending in the economy?', b: 'Borrowing costs more and saving pays more, so households borrow and spend less and firms invest less. Total spending falls, so demand and output grow more slowly.' },
      { n: 10, f: 'A rise in interest rates and a rise in income tax both tend to reduce spending. How do the mechanisms differ?', b: 'The interest rate works through the cost of borrowing (monetary policy, set by the central bank). Income tax works through disposable income left after tax (fiscal policy, set by the government).' },
    ]),
    ...sub(ECO, 'government-income-and-expenditure-aqa-gcse-economics', '3.2.1.2', [
      { n: 1, f: 'Main sources of UK government revenue', b: 'Income tax, National Insurance contributions, VAT and corporation tax (income tax, NI and VAT are among the largest), plus excise duties, council tax, business rates, stamp duty, capital gains and inheritance tax, and fees.' },
      { n: 2, f: 'Main areas of UK government spending', b: 'Social protection (pensions and benefits), health, education, defence, public order and safety, transport and debt interest. Social protection, health and education are among the largest.' },
      { n: 3, f: 'Direct tax and indirect tax, with examples', b: 'Direct: a tax on income, profit or wealth, borne by the person or firm taxed (income tax, corporation tax, National Insurance).\nIndirect: a tax on spending, usually borne by the consumer via the price (VAT, excise duties).' },
      { n: 4, f: 'A quick test for whether a tax is direct or indirect', b: 'Can the payer pass the tax on to someone else? If yes, it is indirect.', src: REV },
      { n: 5, f: 'Progressive tax and regressive tax', b: 'Progressive: the percentage of income paid rises as income rises.\nRegressive: the percentage of income paid falls as income rises.\nAlways compare tax ÷ income × 100 at two incomes; total pounds paid tell you nothing.', src: REV },
      { n: 6, f: 'Exam trap: direct/indirect and progressive/regressive', b: 'They are two separate pairs of labels. Income tax is direct and usually progressive. VAT and fuel duty are indirect and can be regressive, because a fixed charge is a larger share of a smaller income.' },
      { n: 7, f: 'Tax is 0% on the first 13,000, 30% from 13,000 to 38,000 and 50% above. Find the tax and average rate on 46,000.', b: '25,000 × 0.30 = 7,500, plus 8,000 × 0.50 = 4,000. Tax = 11,500. Average rate = 11,500 ÷ 46,000 × 100 = 25.0%. Tax only the slice of income in each band.' },
      { n: 8, f: 'A good is priced at 90 including 20% VAT. How much of the price is tax?', b: 'Price before tax = 90 ÷ 1.20 = 75, so the tax is 15. Do not take 20% off the tax-inclusive price.' },
      { n: 9, f: 'A fixed charge of 520 a year is paid by everyone. Is it progressive or regressive?', b: 'Regressive. It is 520 ÷ 16,000 = 3.25% of a 16,000 income but only 520 ÷ 80,000 = 0.65% of an 80,000 income: the share falls as income rises.' },
      { n: 10, f: 'Budget deficit versus national debt', b: 'A deficit is a one-year gap where spending is greater than revenue (e.g. spending 540, revenue 500: deficit 40). The national debt is the total owed from past borrowing. Borrowing is not tax revenue.' },
      { n: 11, f: 'What happens to low-income households and inequality when fuel duty is raised?', b: 'Fuel prices rise, so low-income households lose a larger share of their income and inequality may widen. The government gains revenue, but the policy may conflict with an aim to reduce inequality.' },
      { n: 12, f: 'Transfer spending versus service spending', b: 'Transfer spending (pensions and benefits) moves money to households. Service spending (health, education) pays for services. Debt interest is for past borrowing and buys no new service.' },
    ]),
    ...sub(ECO, 'economic-objectives-of-the-government-aqa-gcse-economics', '3.2.2.1', [
      { n: 1, f: 'The four principal economic objectives of government and how each is measured', b: 'Full employment: unemployment rate.\nPrice stability: CPI inflation rate.\nEconomic growth: % change in real GDP.\nBalance of payments: current account balance.' },
      { n: 2, f: 'Formulas: unemployment rate, inflation rate and growth rate', b: 'Unemployment rate = unemployed ÷ labour force × 100.\nInflation rate = (new CPI − old CPI) ÷ old CPI × 100.\nGrowth rate = change in real GDP ÷ starting real GDP × 100.' },
      { n: 3, f: '2.1 million are unemployed in a labour force of 28 million. Find the unemployment rate.', b: '2.1 ÷ 28 × 100 = 7.5%.' },
      { n: 4, f: 'Exports: goods 90, services 60. Imports: goods 120, services 38. Find the current account (trade) balance.', b: 'Exports 150, imports 158. Balance = 150 − 158 = −8, a deficit. (Below zero is a deficit, above zero a surplus.)' },
      { n: 5, f: 'Unemployment falls from 8.0% to 6.2%. Give the change in percentage points and as a percentage.', b: '1.8 percentage points. As a percentage change it is 1.8 ÷ 8.0 × 100 = 22.5%. Use percentage points when comparing two rates, and say which you mean.' },
      { n: 6, f: 'Real GDP', b: 'Output measured at constant prices, so price rises are removed.', src: GOV },
      { n: 7, f: 'What happens to inflation and the balance of payments when the government cuts interest rates to reduce unemployment?', b: 'Cheaper borrowing → more spending → firms hire, so unemployment falls. But extra demand may pull prices up, and higher incomes draw in imports, worsening inflation and the current account. Less likely if there is plenty of spare capacity.' },
      { n: 8, f: 'Why does the balance of payments tend to worsen when demand in the economy rises?', b: 'Higher incomes lead to more spending on imports, while exports depend on demand abroad, so they do not rise at the same time.' },
      { n: 9, f: 'Reducing inequality: tools and the main conflict', b: 'Progressive taxes and spending on benefits and public services such as education and health. High tax rates may weaken incentives, and benefits cost money. Inequality is the gap between households, not the same as poverty.' },
      { n: 10, f: 'A 10% sales tax on all spending: household S spends 12,000 of a 15,000 income; household T spends 32,000 of 80,000. Is the tax regressive?', b: 'Yes in effect. S pays 1,200, which is 8% of income; T pays 3,200, which is 4%. Lower earners pay a bigger share of income.' },
      { n: 11, f: 'Managing environmental change: tools and conflicts', b: 'Tools: pollution taxes, regulation, subsidies for clean technology, spending on public transport. Conflicts: job losses in polluting industries, higher costs for firms and households, less competitive exports and possibly slower growth now.' },
      { n: 12, f: 'Value judgement', b: 'A view about what ought to be, not a fact. A fact can be tested. Keep the two apart, then use ethical points to strengthen evaluation.', src: GOV },
    ]),
    ...sub(ECO, 'economic-growth-aqa-gcse-economics', '3.2.2.2', [
      { n: 1, f: 'Economic growth', b: 'An increase in the output of goods and services in an economy over time, measured by the percentage change in real GDP.', src: GRO },
      { n: 2, f: 'GDP, real GDP and GDP per capita', b: 'GDP: the total value of goods and services produced in a country in a year.\nReal GDP: GDP adjusted for inflation (at constant prices).\nGDP per capita: GDP divided by the population, an average per person.', src: GRO },
      { n: 3, f: 'Real GDP rises from £2,400bn to £2,460bn while the population stays at 60 million. Find the growth rate and the new GDP per capita.', b: 'Growth = 60 ÷ 2,400 × 100 = 2.5%.\nGDP per capita = £2,460bn ÷ 60 million = £41,000.' },
      { n: 4, f: 'Causes of economic growth', b: 'More or better resources: investment in capital and new technology, education and training that raise productivity, a larger workforce and natural resources. In the short run, higher spending by consumers, firms, government or overseas buyers also raises output.' },
      { n: 5, f: 'Benefits and costs of economic growth', b: 'Benefits: higher incomes and living standards, more jobs, more tax revenue for public services.\nCosts: pollution and use of finite resources, possible inflation, more imports, and gains that may be shared unequally.' },
      { n: 6, f: 'Government policies to achieve economic growth', b: 'Lower interest rates (monetary), higher government spending or lower taxes (fiscal), and supply-side policies such as education, training and infrastructure that raise productive capacity.' },
      { n: 7, f: 'Nominal GDP rises from £2,000bn to £2,100bn and prices rise by 3%. Find real growth.', b: 'Real GDP in Year 2 at Year 1 prices = 2,100 ÷ 1.03 = £2,038.8bn. Real growth = 38.8 ÷ 2,000 × 100 = 1.9%. Nominal growth (5%) minus inflation (3%) gives roughly the same answer.' },
      { n: 8, f: 'Exam trap: the growth rate falls from 3% to 1%. Is output falling?', b: 'No. Output is still rising, only more slowly. Output falls only when growth is negative; in the UK a recession is two quarters in a row of falling real GDP.' },
    ]),
    ...sub(ECO, 'employment-and-unemployment-aqa-gcse-economics', '3.2.2.3', [
      { n: 1, f: 'Unemployment, and the two UK measures', b: 'Unemployment: people of working age who are without a job but are available for and actively seeking work. Measured by the Claimant Count (people claiming unemployment-related benefits) and the Labour Force Survey (the ILO measure, from a survey).' },
      { n: 2, f: 'Structural, seasonal, frictional and cyclical unemployment', b: 'Structural: an industry declines, so skills or location no longer match jobs.\nSeasonal: demand changes with the time of year.\nFrictional: people between jobs.\nCyclical: too little demand in a downturn or recession.', src: GRO },
      { n: 3, f: 'Consequences of unemployment for different groups', b: 'The unemployed: lower income, lost skills, poorer health. Firms: lower sales, but a larger pool of labour. Government: more spending on benefits and less tax revenue. The economy: lost output, since the resource is wasted.' },
      { n: 4, f: 'Government policies to reduce unemployment', b: 'Cyclical: raise demand by cutting interest rates, cutting taxes or raising government spending.\nStructural: supply-side policies such as training and retraining, and help for people to move to where jobs are.' },
      { n: 5, f: 'A labour force of 32 million includes 1.28 million unemployed. Find the unemployment rate.', b: '1.28 ÷ 32 × 100 = 4.0%.' },
      { n: 6, f: 'Why is the ILO (Labour Force Survey) measure usually higher than the Claimant Count?', b: 'Many unemployed people who are looking for work do not or cannot claim benefits, so the Claimant Count misses them. The survey asks people directly whether they are out of work and seeking a job.' },
      { n: 7, f: 'Exam trap: unemployed rise from 1.50m (labour force 30m) to 1.53m (labour force 32m). What happens to the rate?', b: 'It falls, from 5.0% to 1.53 ÷ 32 × 100 = 4.8%, because the labour force grew faster. Divide by the labour force (employed + unemployed), not the population.' },
    ]),
    ...sub(ECO, 'inflation-and-price-stability-aqa-gcse-economics', '3.2.2.4', [
      { n: 1, f: 'Inflation and the rate of inflation', b: 'Inflation: a sustained rise in the general level of prices. The rate of inflation is the percentage increase in the price level over a year. Lower inflation means prices rise more slowly, not that they fall.', src: INF },
      { n: 2, f: 'How the Consumer Price Index (CPI) measures inflation', b: 'Prices of a typical basket of goods and services are surveyed each month. Each item is weighted by its share of household spending, and the result is shown as an index (base year = 100). The rate of inflation is the percentage change in the CPI.' },
      { n: 3, f: 'The CPI rises from 125.0 to 130.0 in a year. Find the rate of inflation. What would a £50 item then cost?', b: '(130.0 − 125.0) ÷ 125.0 × 100 = 4.0%. A £50 item would cost 50 × 1.04 = £52.' },
      { n: 4, f: 'Cost-push versus demand-pull inflation', b: 'Cost-push: production costs rise (wages, raw materials, imported inputs), so firms raise prices.\nDemand-pull: total demand in the economy outstrips its capacity to supply, pulling prices up.' },
      { n: 5, f: 'Consequences of inflation for different groups', b: 'Savers lose if interest is below inflation; borrowers gain as the real value of debt falls. People on fixed incomes lose purchasing power. Firms face rising costs, and exporters become less competitive if UK prices rise faster than abroad.' },
      { n: 6, f: 'Government policies to manage inflation', b: 'Raise interest rates (monetary policy) or raise taxes and cut government spending (fiscal policy) to reduce demand-pull inflation. Supply-side policies that cut costs and raise productivity help with cost-push inflation.' },
      { n: 7, f: 'Pay rises by 5% while inflation is 3%. What happens to real pay?', b: 'Real pay rises by about 2% (exactly 1.05 ÷ 1.03 = 1.019, so 1.9%). If inflation were higher than the pay rise, real pay would fall.' },
      { n: 8, f: 'Food has weight 0.4 and price index 110; transport has weight 0.6 and index 105. Find the overall index.', b: '0.4 × 110 + 0.6 × 105 = 44 + 63 = 107. The bigger weight pulls the answer towards transport.' },
      { n: 9, f: 'Exam trap: CPI goes from 130.0 to 133.9. Is inflation 3.9%?', b: 'No. That is 3.9 index points, but 3.9 ÷ 130 × 100 = 3.0%. Index points equal per cent only when the starting value is 100.' },
    ]),
    ...sub(ECO, 'balance-of-payments-aqa-gcse-economics', '3.2.2.5', [
      { n: 1, f: 'Balance of trade and the current account of the balance of payments', b: 'Balance of trade: the value of exports minus the value of imports of goods and services. The current account adds income flows to and from abroad to the trade balance. Exports are credits; imports are debits.' },
      { n: 2, f: 'Trade in goods −180, trade in services +120, primary income −15, secondary income −20 (£bn). Find the current account balance.', b: '−180 + 120 − 15 − 20 = −95, a current account deficit of £95bn.' },
      { n: 3, f: 'Reasons for a current account deficit', b: 'Strong demand at home drawing in imports, a strong exchange rate making exports dear and imports cheap, low productivity or higher inflation than competitors, and weak demand in trading partners.' },
      { n: 4, f: 'Why does a current account deficit matter?', b: 'It must be paid for by borrowing from abroad or selling assets, and spending that leaks abroad means fewer jobs in exporting and import-competing firms. It matters less if it is small, temporary or caused by importing machinery that raises future output.' },
      { n: 5, f: 'Government policies to influence the balance of payments', b: 'Supply-side policies to make UK firms more competitive, reducing demand at home through fiscal or monetary policy, and a lower exchange rate. Tariffs and quotas also cut imports but invite retaliation.' },
      { n: 6, f: 'Exam trap: current account deficit versus budget deficit', b: 'A current account deficit is about money flows with the rest of the world (trade and income). A budget deficit is the government spending more than its revenue. They are different things.' },
      { n: 7, f: 'The usual pattern of the UK current account', b: 'A deficit for many years: a large deficit on trade in goods, partly offset by a surplus on trade in services, especially financial and business services.', src: BOP },
    ]),
    ...sub(ECO, 'distribution-of-income-aqa-gcse-economics', '3.2.2.6', [
      { n: 1, f: 'Income inequality versus wealth inequality', b: 'Income inequality: differences in the flow of money people receive (wages, interest, rent, profit, benefits). Wealth inequality: differences in the assets people own (property, savings, shares). Wealth is usually shared far more unequally than income.', src: BOP },
      { n: 2, f: 'Causes of income and wealth inequality', b: 'Differences in skills, education and qualifications; pay in different jobs; unemployment and part-time work; inheritance; ownership of property and shares; and the effects of the tax and benefit system.' },
      { n: 3, f: 'Consequences of income and wealth inequality', b: 'Poverty, poorer health and education for low-income groups, and social tension. Some inequality gives an incentive to work, train and take risks.' },
      { n: 4, f: 'Government policies to redistribute income and wealth, and their consequences', b: 'Progressive taxes, benefits and pensions, free public services such as health and education, and a minimum wage. They reduce inequality, but high tax rates may reduce the incentive to work and benefits cost the government money.' },
      { n: 5, f: 'Household S earns £15,000, pays £1,000 tax, gets £4,000 benefits. T earns £90,000, pays £25,000 tax. Compare the gap before and after.', b: 'Disposable income: S £18,000, T £65,000. Before: 90,000 ÷ 15,000 = 6 times. After: 65,000 ÷ 18,000 = about 3.6 times. Taxes and benefits narrowed the gap.' },
      { n: 6, f: 'How is the distribution of income in the UK shown?', b: 'The ONS ranks households from poorest to richest and splits them into fifths (quintiles) or tenths (deciles). The gap between the top and bottom fifth is much narrower after taxes, benefits and services such as the NHS than before.' },
    ]),
    ...sub(ECO, 'fiscal-policy-aqa-gcse-economics', '3.2.3.1', [
      { n: 1, f: 'Fiscal policy', b: 'The use of government spending and taxation to influence the level of income and spending in the economy and to achieve the government\'s economic objectives.', src: FMP },
      { n: 2, f: 'Balanced budget, budget surplus and budget deficit', b: 'Balanced: government revenue equals spending. Surplus: revenue is greater than spending, so debt can be repaid. Deficit: spending is greater than revenue, so the government borrows and pays interest.', src: FMP },
      { n: 3, f: 'Expansionary versus contractionary fiscal policy', b: 'Expansionary: higher spending or lower taxes raise demand, output and employment, but may raise inflation and the deficit.\nContractionary: lower spending or higher taxes reduce demand and inflation, but may slow growth and cost jobs.' },
      { n: 4, f: 'Government spending is £1,100bn and revenue is £1,040bn. What is the budget position?', b: 'Spending is greater than revenue, so there is a budget deficit of £60bn, which must be borrowed.' },
      { n: 5, f: 'Limits of fiscal policy', b: 'Time lags before changes take effect, extra borrowing and debt interest, possible disincentives from higher taxes, and the opportunity cost of what else the money could fund.' },
      { n: 6, f: 'Consequences of running a budget surplus', b: 'The government can repay debt, so future interest payments fall, and it has room to borrow in a later recession. But a surplus may mean taxes are high or services cut, and it takes spending power out of the economy.' },
    ]),
    ...sub(ECO, 'monetary-policy-aqa-gcse-economics', '3.2.3.2', [
      { n: 1, f: 'Monetary policy', b: 'The use of interest rates by the central bank to influence spending in the economy. In the UK the Bank of England sets Bank Rate, mainly to keep inflation close to the government\'s target of 2% (CPI).' },
      { n: 2, f: 'How does a rise in interest rates help to control inflation?', b: 'Borrowing costs more and saving pays more, so households spend less and firms invest less. Lower total demand reduces demand-pull inflation. A stronger pound can also make imports cheaper.' },
      { n: 3, f: 'How can monetary policy help other objectives, and what is the conflict?', b: 'Cutting interest rates encourages borrowing and spending, so output and employment rise. The conflict: higher demand may raise inflation and draw in imports, worsening the balance of payments.' },
      { n: 4, f: 'Limits of monetary policy', b: 'Changes take time to work, confidence may be so low that people do not borrow even at low rates, banks may not pass changes on, and low rates hurt savers.' },
      { n: 5, f: 'Who sets UK interest rates, and what happens if inflation misses the target?', b: 'The Bank of England\'s nine-member Monetary Policy Committee, independent of the government since 1997. If CPI inflation is more than 1 percentage point above or below 2%, the Governor writes an open letter to the Chancellor.' },
      { n: 6, f: 'An interest-only mortgage of £150,000 moves from 4% to 5%. What happens to yearly payments?', b: '0.04 × 150,000 = £6,000; 0.05 × 150,000 = £7,500. Payments rise by £1,500 a year, so the household has less to spend.' },
    ]),
    ...sub(ECO, 'supply-side-policies-aqa-gcse-economics', '3.2.3.3', [
      { n: 1, f: 'Supply-side policies, with the examples AQA names', b: 'Policies to increase the productive capacity of the economy: investment in education and training, lower direct taxes, lower taxes on business profits, trade union reform, and privatisation and deregulation.', src: SSX },
      { n: 2, f: 'Advantages of supply-side policies', b: 'They raise productivity and capacity, so the economy can grow without inflation; they make firms more competitive, helping exports; and training reduces structural unemployment.' },
      { n: 3, f: 'Disadvantages of supply-side policies', b: 'They take a long time to work, can be costly to the government, results are uncertain, and some (tax cuts for high earners, weaker union rights) may increase inequality.' },
      { n: 4, f: 'Privatisation and deregulation', b: 'Privatisation: selling state-owned businesses to the private sector (e.g. BT, British Gas, Royal Mail). Deregulation: removing rules that limit competition in a market. Both aim to raise efficiency through competition and the profit motive.' },
      { n: 5, f: '60 workers produce 2,400 units a week; after training they produce 2,760. Find the change in productivity.', b: 'Output per worker rises from 2,400 ÷ 60 = 40 to 2,760 ÷ 60 = 46 units, a rise of 6 ÷ 40 × 100 = 15%.' },
      { n: 6, f: 'Exam trap: when is a tax cut a supply-side policy rather than fiscal policy?', b: 'When the point is the incentive effect: lower direct taxes reward extra work, and lower profit taxes leave firms more to invest, so capacity grows. A tax cut aimed at raising spending now is fiscal policy.' },
    ]),
    ...sub(ECO, 'policies-to-correct-positive-and-negative-externalities-aqa-gcse-economics', '3.2.3.4', [
      { n: 1, f: 'Government policies to reduce negative externalities', b: 'Indirect taxes (raise cost, so output falls), laws and regulation (limits or bans backed by penalties), charges such as the London congestion charge, tradable pollution permits, and information and education campaigns.' },
      { n: 2, f: 'Government policies to encourage positive externalities', b: 'Subsidies (lower cost, so output rises), direct provision by the government funded by taxes, regulation making use compulsory (such as schooling), and information and education to encourage use.' },
      { n: 3, f: 'A tax of £3 per unit is placed on a good, and 4,000 units are then sold. How much revenue is raised?', b: '3 × 4,000 = £12,000.' },
      { n: 4, f: 'Evaluating policies to correct externalities', b: 'External costs and benefits are hard to measure, so the right tax or subsidy is hard to set. Ask who pays (firms, consumers or taxpayers), whether rules can be enforced, and whether a tax hits low-income households hardest.' },
      { n: 5, f: 'Why may a tax on cigarettes cut smoking only a little?', b: 'Demand is price inelastic because smoking is addictive, so a higher price reduces quantity only slightly. The tax raises plenty of revenue, but regulation or information may be needed as well.' },
      { n: 6, f: 'UK examples of policies on externalities', b: 'Negative: the Soft Drinks Industry Levy (2018), landfill tax, the ban on smoking in enclosed public places (England, 2007), the London congestion charge (2003).\nPositive: state schools and NHS vaccinations provided free.' },
    ]),
    ...sub(ECO, 'why-countries-trade-and-the-importance-of-international-trade-to-the-uk-aqa-gcse-economics', '3.2.4.1', [
      { n: 1, f: 'Exports and imports', b: 'Exports: goods and services produced in one country and sold to another. Imports: goods and services bought from other countries.' },
      { n: 2, f: 'Benefits of international trade to countries', b: 'Wider choice and lower prices for consumers, specialisation in what each country produces best, bigger markets and economies of scale for firms, access to resources not found at home, and more competition.' },
      { n: 3, f: 'Main types of UK exports and imports', b: 'Exports: services (about half of the total), especially financial and business services, plus goods such as machinery, cars and medicines. Imports: goods such as machinery, cars, fuels, food and clothing.' },
      { n: 4, f: 'Global interdependence: what it means for the UK', b: 'Countries rely on each other for goods, markets and supply chains. The UK gains choice and export markets, but a recession or supply problem abroad can reduce UK exports, output and jobs.' },
      { n: 5, f: 'The UK\'s main trading partners', b: 'The European Union, taken as a group, is the UK\'s largest trading partner. The USA is the largest single country for UK exports.', src: TRX },
    ]),
    ...sub(ECO, 'exchange-rates-aqa-gcse-economics', '3.2.4.2', [
      { n: 1, f: 'Exchange rate', b: 'The price of one currency in terms of another (e.g. £1 = $1.25). In a floating system it is set by the demand for and supply of the currency.', src: TRX },
      { n: 2, f: 'What creates demand for and supply of pounds?', b: 'Demand: foreign buyers of UK exports, tourists visiting the UK and foreign investors (more if UK interest rates rise). Supply: UK buyers of imports, UK tourists abroad and UK investment abroad.' },
      { n: 3, f: 'At £1 = $1.25, what does a $500 item cost in pounds? What if the pound falls to £1 = $1.00?', b: '500 ÷ 1.25 = £400. At $1.00 it costs £500. A weaker pound makes imports dearer.' },
      { n: 4, f: 'Effects of a rise in the value of the pound on consumers and producers', b: 'Imports become cheaper, helping consumers and firms that buy imported inputs. Exports become dearer abroad, so exporters may sell less. Memory aid: strong pound, imports cheap, exports dear.' },
      { n: 5, f: 'At £1 = $1.25 a UK good costs £40. What is its US price, and what if the pound falls to $1.10?', b: '40 × 1.25 = $50. At $1.10 it costs 40 × 1.10 = $44, so UK exports become cheaper for US buyers. Pounds to dollars: multiply; dollars to pounds: divide.' },
      { n: 6, f: 'What happens to the pound when UK interest rates rise relative to other countries?', b: 'Saving in the UK pays more, so foreign savers buy pounds. Demand for pounds shifts right and the pound appreciates.' },
    ]),
    ...sub(ECO, 'free-trade-agreements-including-the-european-union-aqa-gcse-economics', '3.2.4.3', [
      { n: 1, f: 'Free trade and a free-trade agreement', b: 'Free trade: trade between countries without barriers such as tariffs (taxes on imports) or quotas (limits on quantity). A free-trade agreement is a deal between countries to remove or reduce these barriers.' },
      { n: 2, f: 'Arguments for free trade', b: 'Lower prices and more choice for consumers, larger markets and economies of scale for firms, more competition and efficiency, and specialisation in what each country does best.' },
      { n: 3, f: 'Arguments against free trade', b: 'Jobs may be lost in industries that cannot compete with imports, new (infant) industries may need protection to grow, and countries may want to protect strategic industries or avoid relying on others.' },
      { n: 4, f: 'The European Union and the benefits of free-trade agreements', b: 'The EU is a single market and customs union: no tariffs between members and a common tariff on goods from outside. Such agreements give firms a larger market and consumers lower prices. The UK left on 31 January 2020; since 1 January 2021 it trades with the EU under the Trade and Cooperation Agreement.' },
      { n: 5, f: 'Free-trade area, customs union and single market', b: 'Free-trade area: no tariffs between members, each sets its own tariffs on outsiders.\nCustoms union: also a common tariff on imports from outside.\nSingle market: also free movement of services, capital and people, with shared product rules.', src: FTG },
      { n: 6, f: 'A car imported for £20,000 faces a 10% tariff. What is its new price, and who gains?', b: '0.10 × 20,000 = £2,000, so it costs £22,000. Domestic producers and the government (tariff revenue) gain; consumers pay more.' },
    ]),
    ...sub(ECO, 'globalisation-benefits-and-drawbacks-aqa-gcse-economics', '3.2.4.4', [
      { n: 1, f: 'Globalisation, and the factors behind its growth', b: 'The increasing integration of the world\'s economies through trade, investment, people and information. Driven by new technology (communications, the internet, container shipping), multinational companies, lower transport costs and trade agreements.' },
      { n: 2, f: 'Multinational company', b: 'A business with operations in more than one country. It can bring jobs, investment and skills to a host country, but profits may go abroad and it may move if costs rise elsewhere.' },
      { n: 3, f: 'Benefits and drawbacks of globalisation to producers, workers and consumers in the UK', b: 'Producers: bigger markets and cheaper inputs, but more competition. Workers: jobs in exporting firms, but jobs lost when production moves abroad. Consumers: lower prices and more choice.' },
      { n: 4, f: 'Benefits and drawbacks of globalisation to less developed countries', b: 'Benefits: investment, jobs, new technology and export markets. Drawbacks: low wages and poor conditions, reliance on a few products or firms, and environmental damage.' },
      { n: 5, f: 'Moral, ethical and sustainability issues when UK firms trade abroad', b: 'Low pay or child labour in supply chains, unsafe working conditions, environmental damage and the carbon emissions of transporting goods. Consumers may choose fairly traded products.' },
    ]),
    ...sub(ECO, 'the-role-of-money-aqa-gcse-economics', '3.2.5.1', [
      { n: 1, f: 'The four functions of money', b: 'Medium of exchange, unit of account, store of value and means of deferred payment.' },
      { n: 2, f: 'Explain each function of money with an example', b: 'Medium of exchange: accepted in payment for goods. Unit of account: prices of different goods can be compared. Store of value: it can be saved for later spending. Means of deferred payment: debts, such as a loan, can be repaid later in money.' },
      { n: 3, f: 'Why is money more than notes and coins?', b: 'Most money is held as deposits in bank and building society accounts and spent by card or transfer. Notes and coins are only a small part of the money in the economy.', src: MON },
      { n: 4, f: 'Why is money better than barter?', b: 'Barter needs a double coincidence of wants: each trader must want what the other has. Money is accepted by everyone, so exchange is quicker and specialisation is easier.' },
      { n: 5, f: 'How does inflation weaken money as a store of value? Use 4% inflation and £100.', b: 'Each pound buys less over time. With 4% inflation, £100 kept for a year buys only what 100 ÷ 1.04 = £96.15 bought at the start.' },
    ]),
    ...sub(ECO, 'the-role-and-importance-of-the-financial-sector-for-the-economy-aqa-gcse-economics', '3.2.5.2', [
      { n: 1, f: 'The main agents in the financial sector', b: 'The Bank of England (the central bank), commercial (high street) banks and building societies, together with other institutions such as insurance companies.' },
      { n: 2, f: 'The role of the Bank of England', b: 'It sets Bank Rate to influence interest rates and control inflation, and works to keep the financial system stable, for example by overseeing banks and lending to them in a crisis. It also issues banknotes in England and Wales.' },
      { n: 3, f: 'The role of high street banks', b: 'They take deposits from savers, pay interest and keep money safe, and lend to households and firms, helping to fund investment. They also provide payment services such as cards and transfers.' },
      { n: 4, f: 'Bank versus building society', b: 'A bank is a company owned by shareholders. A building society is a mutual, owned by its members (savers and borrowers), and mainly provides savings accounts and mortgages.' },
      { n: 5, f: 'Why is the financial sector important to the economy?', b: 'It channels savings into loans for spending and investment, provides payment systems, helps people and firms manage risk, and is a large source of UK output, jobs and exports.' },
      { n: 6, f: 'Lender of last resort', b: 'The Bank of England lends to banks in difficulty when no one else will, to stop a collapse spreading through the financial system, as with Northern Rock in 2007.' },
      { n: 7, f: 'A bank pays savers 2% and charges borrowers 6% on £1 million lent. Find its interest margin.', b: 'Received 0.06 × 1,000,000 = £60,000; paid 0.02 × 1,000,000 = £20,000. Margin = £40,000 before costs. Banks profit from the gap between lending and saving rates.' },
    ]),
  ],
};
