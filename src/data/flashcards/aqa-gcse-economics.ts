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
const EQ = 'aqa-gcse-economics-equilibrium-price-revenue-on-diagrams-and-intermarket-revision-notes';
const IR = 'aqa-gcse-economics-interest-rates-revision-notes';
const MF = 'aqa-gcse-economics-market-failure-misallocation-of-resources-revision-notes';
const MS = 'aqa-gcse-economics-market-structures-competitive-and-non-competitive-revision-notes';
const PED = 'aqa-gcse-economics-price-elasticity-of-demand-and-supply-calculation-revision-notes';
const PROD = 'aqa-gcse-economics-productivity-and-economies-of-scale-revision-notes';
const RA = 'aqa-gcse-economics-resource-allocation-markets-economic-sectors-and-revision-notes';
const LAB = 'aqa-gcse-economics-the-labour-market-wage-determination-differentials-and-revision-notes';
const REV = 'aqa-gcse-economics-uk-government-revenue-spending-direct-and-indirect-revision-notes';

export const DECK_AQA_GCSE_ECONOMICS: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'gcse',
  subjectSlug: 'economics',
  syllabusCode: '8136',
  syllabusSeries: 'For first teaching from September 2017',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
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
  ],
};
