/**
 * D-438 -- flashcards for OxfordAQA International GCSE Economics 9214
 * (first teaching September 2023, first examined May/June 2025).
 *
 * One block per subtopic, in specification order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9214); origin 'revision-notes'.
 *
 * The course is not tiered, so no card is marked upper tier. Worked examples
 * use the same invented figures as the Marlbridge 9214 revision notes.
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

const MKT = 'how-markets-work-oxfordaqa-igcse-economics';
const ECO = 'how-the-economy-works-oxfordaqa-igcse-economics';

const GO = 'igcse-oxfordaqa-economics-government-objectives-revision-notes';
const CRP = 'oxfordaqa-igcse-economics-costs-revenue-profit-productivity-and-economies-of-revision-notes';
const DS = 'oxfordaqa-igcse-economics-demand-supply-and-equilibrium-price-revision-notes';
const FM = 'oxfordaqa-igcse-economics-fiscal-and-monetary-policy-revision-notes';
const GLOB = 'oxfordaqa-igcse-economics-globalisation-benefits-drawbacks-and-ethical-issues-revision-notes';
const IR = 'oxfordaqa-igcse-economics-interest-rates-government-revenue-and-spending-and-revision-notes';
const MF = 'oxfordaqa-igcse-economics-market-failure-and-externalities-revision-notes';
const MS = 'oxfordaqa-igcse-economics-market-structures-competitive-and-non-competitive-revision-notes';
const MON = 'oxfordaqa-igcse-economics-money-and-the-financial-sector-revision-notes';
const NW = 'oxfordaqa-igcse-economics-needs-wants-factors-of-production-opportunity-cost-revision-notes';
const REL = 'oxfordaqa-igcse-economics-related-markets-and-price-elasticity-of-demand-and-revision-notes';
const SS = 'oxfordaqa-igcse-economics-supply-side-policies-and-correcting-externalities-revision-notes';
const LAB = 'oxfordaqa-igcse-economics-the-labour-market-and-wage-determination-revision-notes';
const WCT = 'oxfordaqa-igcse-economics-why-countries-trade-free-trade-and-exchange-rates-revision-notes';

export const DECK_OXFORDAQA_IGCSE_ECONOMICS: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'igcse',
  subjectSlug: 'economics',
  syllabusCode: '9214',
  syllabusSeries: 'First teaching September 2023, first examined May/June 2025',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // 1 How markets work
    ...sub(MKT, 'economic-foundations-oxfordaqa-igcse-economics', '3.1.1', [
      { n: 1, f: 'Need and want: what is the difference?', b: 'A need is something required to survive or function at a basic level. A want is something people would enjoy having but can manage without. Both can change over time and between people.', src: NW },
      { n: 2, f: 'Scarcity', b: 'Not enough resources to meet every want: the basic economic problem.', src: NW },
      { n: 3, f: 'Opportunity cost', b: 'The benefit of the best alternative forgone when a choice is made.', src: NW },
      { n: 4, f: 'A customer can spend 5,000 on a car or 3,000 on a trip, but not both. They choose the car. What is the opportunity cost?', b: 'The trip, worth 3,000 to them. Opportunity cost is only the next best option forgone, never the total of all the alternatives.' },
      { n: 5, f: 'Economic resource', b: 'A scarce input with alternative uses, used to produce goods and services.', src: NW },
      { n: 6, f: 'The three key decisions every economy must make', b: 'What to produce, how to produce it, and who benefits (who gets the output).' },
      { n: 7, f: 'The four factors of production and the reward to each', b: 'Land: rent.\nLabour: wages.\nCapital: interest.\nEnterprise: profit.' },
      { n: 8, f: 'Exam trap: is money a factor of production?', b: 'No. Capital means equipment made to produce other goods (ovens, vans, factories), not money. Money is a means of payment.' },
      { n: 9, f: 'A carpenter can make 2 desks or 6 chairs a day. What is the opportunity cost of 1 desk, and of 1 chair?', b: '1 desk costs 6 ÷ 2 = 3 chairs.\n1 chair costs 2 ÷ 6 = 1/3 of a desk (about 0.33).' },
      { n: 10, f: 'How to produce: method X costs 900 a day for 450 units; method Y costs 1,260 a day for 840 units. Which is cheaper per unit?', b: 'X: 900 ÷ 450 = 2.00 per unit. Y: 1,260 ÷ 840 = 1.50 per unit. Y has the lower cost per unit. Then check what could change the answer, such as breakdowns, training or uncertain demand.' },
      { n: 11, f: 'The central purpose of economic activity', b: 'Production, to meet needs and wants.', src: NW },
    ]),
    ...sub(MKT, 'resource-allocation-oxfordaqa-igcse-economics', '3.1.2', [
      { n: 1, f: 'Market', b: 'Buyers and sellers interacting to establish a price.', src: NW },
      { n: 2, f: 'Product market', b: 'Households buy goods and services from firms.', src: NW },
      { n: 3, f: 'Factor market', b: 'Firms buy land, labour, capital and enterprise; households sell their labour and receive wages.', src: NW },
      { n: 4, f: 'How does the price mechanism move resources to a product when demand for it rises?', b: 'Demand rises → price rises → profit rises → firms hire more factors of production → more of the scarce resources move into making that product. A rising price signals scarcity, attracts producers and rations buyers.' },
      { n: 5, f: 'Primary, secondary and tertiary sectors, with an example of each', b: 'Primary: extracting natural resources (mining, fishing, farming).\nSecondary: manufacturing, processing and construction (furniture factory, builders).\nTertiary: services (retail, banking, health).' },
      { n: 6, f: 'Good versus service', b: 'A good is tangible: it can be stored and owned. A service is intangible and is usually used as it is provided.' },
      { n: 7, f: 'Give three reasons why an economy\'s output and jobs may shift towards the tertiary sector', b: 'Higher incomes (more spending on services), mechanisation of farming (fewer primary jobs needed) and depletion of natural resources.' },
      { n: 8, f: 'Primary jobs are 60 out of 200 in year 1 and 50 out of 250 in year 2. What is the change in the primary share?', b: 'Year 1: 60 ÷ 200 = 30%. Year 2: 50 ÷ 250 = 20%. The share fell by 10 percentage points (not "10%").' },
      { n: 9, f: 'Specialisation', b: 'Concentrating on a limited range of tasks, products or services.', src: NW },
      { n: 10, f: 'Division of labour', b: 'Splitting production into separate tasks, each done by one worker. It is specialisation by task within a firm.', src: NW },
      { n: 11, f: 'Division of labour: one benefit and one cost for the worker, and for the firm', b: 'Worker: more skill, speed and possibly pay; but boredom, narrow skills and redundancy risk.\nFirm: more output and lower unit cost; but the whole line stops if one task fails, and staff turnover may rise.' },
      { n: 12, f: 'Exports total 300 million, 210 million from one product. That product\'s price falls 20%. By what percentage do total export earnings fall?', b: 'Product earnings: 210 × 0.8 = 168. Total: 168 + 90 = 258. Fall: 42 ÷ 300 = 14%. The more concentrated a country\'s exports, the bigger the risk from specialising.' },
    ]),
    ...sub(MKT, 'how-prices-are-determined-oxfordaqa-igcse-economics', '3.1.3', [
      { n: 1, f: 'Demand', b: 'The amounts buyers will actually take, with money to pay, at each price in one period.', src: DS },
      { n: 2, f: 'Movement along a demand curve versus a shift of the curve', b: 'A change in the good\'s own price gives a movement along the curve: an extension (price falls) or a contraction (price rises). A change in any other factor shifts the whole curve: right is an increase in demand, left a decrease.' },
      { n: 3, f: 'Factors that shift the demand curve', b: 'Income, tastes and advertising, prices of related goods (substitutes and complements), population, expectations, and seasons or events.' },
      { n: 4, f: 'Factors that shift the supply curve', b: 'Costs of production, technology, indirect taxes and subsidies, the number of firms, weather and natural events, and expectations. A tax shifts supply left; a subsidy shifts it right.' },
      { n: 5, f: 'What happens when the price is above, and below, equilibrium?', b: 'Above: excess supply (a surplus); unsold stock forces the price down.\nBelow: excess demand (a shortage); buyers compete and the price rises.\nQuantities adjust until demand equals supply.' },
      { n: 6, f: 'Effect on equilibrium price and quantity of: a demand increase, a demand decrease, a supply increase, a supply decrease', b: 'Demand increase: price up, quantity up.\nDemand decrease: price down, quantity down.\nSupply increase: price down, quantity up.\nSupply decrease: price up, quantity down.' },
      { n: 7, f: 'Demand rises and supply falls at the same time. What can you say about price and quantity?', b: 'Price definitely rises. Quantity may rise or fall: it depends on the relative sizes of the two shifts.' },
      { n: 8, f: 'Substitutes and complements: if the price of A rises, what happens to demand for B?', b: 'Substitutes (goods meeting the same need): demand for B rises, a shift right.\nComplements (goods used together): demand for B falls, a shift left.', src: REL },
      { n: 9, f: 'Price elasticity of demand (PED): formula. Price rises from 20 to 24 and sales fall from 600 to 540. Find PED.', b: 'PED = % change in quantity demanded ÷ % change in price.\nPrice +20%, quantity −10%, so PED = −10 ÷ 20 = −0.5 (inelastic). Revenue rises from 12,000 to 12,960.' },
      { n: 10, f: 'PED and total revenue: what does a price rise do to revenue when demand is elastic, inelastic or unit elastic?', b: 'Elastic (size above 1): revenue falls.\nInelastic (below 1): revenue rises.\nUnit elastic (equal to 1): revenue unchanged.' },
      { n: 11, f: 'Factors that affect PED', b: 'Number of substitutes (more = more elastic), necessity or luxury, proportion of income spent, time (longer = more elastic), habit or addiction (less elastic), and how broadly the market is defined (broader = less elastic).' },
      { n: 12, f: 'Cross elasticity (XED) and price elasticity of supply (PES): formulas and how to read them', b: 'XED = % change in demand for A ÷ % change in price of B. Positive: substitutes; negative: complements; near zero: unrelated.\nPES = % change in quantity supplied ÷ % change in price; above 1 elastic, below 1 inelastic. Supply is more elastic in the long run.' },
    ]),
    ...sub(MKT, 'production-costs-revenue-and-profit-oxfordaqa-igcse-economics', '3.1.4', [
      { n: 1, f: 'Fixed cost and variable cost', b: 'Fixed cost does not alter as output alters in the short run (rent, loan repayment). Variable cost changes with output (materials, packaging, piece-rate pay).', src: CRP },
      { n: 2, f: 'Formulas: total cost, average (total) cost, total revenue, profit', b: 'TC = TFC + TVC.\nATC = TC ÷ output = AFC + AVC.\nTR = price × quantity sold.\nProfit = TR − TC (a loss if negative).' },
      { n: 3, f: 'TFC = 900, TVC = 2,100, output 300, price 14. Find TC, ATC and profit.', b: 'TC = 900 + 2,100 = 3,000.\nATC = 3,000 ÷ 300 = 10 (AFC 3 + AVC 7).\nTR = 14 × 300 = 4,200.\nProfit = 4,200 − 3,000 = 1,200.' },
      { n: 4, f: 'Production versus productivity', b: 'Production is the total quantity made. Productivity is output per worker (or per hour). Output can rise while productivity falls: 15 workers making 90 units (6.0 each) → 18 workers making 99 (5.5 each), productivity down 8.3%.' },
      { n: 5, f: 'Productivity and labour cost per unit: a worker is paid 600 a week. What happens to labour cost per unit if output rises from 120 to 150?', b: 'It falls from 600 ÷ 120 = 5.00 to 600 ÷ 150 = 4.00 a unit. Higher productivity lowers unit cost, leaving room for lower prices, higher wages or more profit.' },
      { n: 6, f: 'Economies of scale and diseconomies of scale', b: 'Economies of scale: unit (average) cost drops as the firm raises output.\nDiseconomies of scale: unit cost climbs once the firm has grown too large.', src: CRP },
      { n: 7, f: 'Five types of economy of scale, each with a reason', b: 'Managerial: specialist managers.\nPurchasing: bulk-buying discounts.\nFinancial: cheaper, easier loans.\nTechnical: large machines and mass production.\nRisk-bearing: many products and markets spread risk.' },
      { n: 8, f: 'Causes of diseconomies of scale', b: 'Communication and coordination problems, slow decisions, workers feeling remote and losing motivation, and loss of managerial control. All raise average cost.' },
      { n: 9, f: 'Total cost is 24,000 at 2,000 units, 33,000 at 3,000 and 52,000 at 4,000. Where are there economies and diseconomies of scale?', b: 'Average cost: 12.00, 11.00, then 13.00. AC falls from 2,000 to 3,000 units (economies of scale), then rises to 4,000 (diseconomies). Read average cost, not total cost, which rises throughout.' },
      { n: 10, f: 'A market grows from 40,000 to 44,000 units; a firm\'s sales rise from 6,000 to 7,150. What happens to its market share?', b: 'Market share = firm\'s sales ÷ market sales × 100.\nBefore: 6,000 ÷ 40,000 = 15%. After: 7,150 ÷ 44,000 = 16.25%. Its sales grew 19.2% against market growth of 10%, so its share rose.' },
      { n: 11, f: 'Business objectives: name three, and one way they can clash', b: 'Profit, sales growth and market share. Low prices can raise sales and market share but cut profit per unit.' },
      { n: 12, f: 'Ethical behaviour by producers: costs and benefits', b: 'Conflicts include low pay, unsafe conditions, pollution and misleading advertising. Acting ethically may raise costs in the short run but protect reputation, loyalty and recruitment in the long run. The effect depends on how price-sensitive customers are and how competitive the market is.' },
    ]),
    ...sub(MKT, 'competitive-and-concentrated-markets-oxfordaqa-igcse-economics', '3.1.5', [
      { n: 1, f: 'Market structure: the three factors used to place a market on the range', b: 'The number of producers, the degree of product differentiation and the ease of entry. Markets lie along a range from competitive to non-competitive, not in two boxes.', src: MS },
      { n: 2, f: 'Characteristics of a competitive market', b: 'Many producers, similar products or small differences, easy entry and exit, and buyers who can compare and switch. No single firm controls the price.' },
      { n: 3, f: 'Why are profits usually lower in a competitive market?', b: 'High profit → easy entry attracts new firms → more supply → lower price → lower profit.' },
      { n: 4, f: 'Monopoly and oligopoly', b: 'Monopoly: a single producer in the market (loosely, a firm with a very large share).\nOligopoly: a market dominated by a small number of large producers, who are interdependent: each must predict rivals\' reactions before it acts.', src: MS },
      { n: 5, f: 'Causes of monopoly and oligopoly power', b: 'High start-up costs, economies of scale, legal protection (patents, licences), brand loyalty, control of supplies or outlets, mergers and takeovers, and successful growth.' },
      { n: 6, f: 'Why do oligopolists often prefer non-price competition?', b: 'If one firm cuts its price, rivals match it to avoid losing sales, so every firm earns less per unit (a price war). Competing on branding, quality, service and advertising avoids this.' },
      { n: 7, f: 'Monopoly: possible harm and possible benefit for consumers', b: 'Harm: higher prices, lower output and less choice; possibly lower quality and slow innovation.\nBenefit: lower prices if economies of scale are passed on; high profit can fund investment. A monopoly "can" charge more; it does not always.' },
      { n: 8, f: 'In a market of 240,000 units two firms sell 48,000 and 36,000. What is their combined market share?', b: '48,000 ÷ 240,000 = 20% and 36,000 ÷ 240,000 = 15%, so 35% combined.' },
      { n: 9, f: 'Derived demand', b: 'Demand for labour that depends on demand for the product the labour makes.', src: LAB },
      { n: 10, f: 'What shifts the demand for labour, and what shifts the supply of labour, to the right?', b: 'Demand: higher demand for the product, higher productivity, dearer machines, more firms.\nSupply: more training places, more working-age people or migration, lower pay in other jobs, better conditions. A change in this job\'s own wage is only a movement along.' },
      { n: 11, f: 'A wage is set above equilibrium (for example by a union deal or a legal minimum). What happens?', b: 'Firms hire fewer workers while more people want the job, so there is a surplus of labour: unemployment in that job. Those who keep jobs earn more. A wage below equilibrium gives a shortage and vacancies.' },
      { n: 12, f: 'Reasons for wage differentials between occupations', b: 'Long or costly training and licences (lower supply), high productivity or valuable output (higher demand), danger or unsocial hours, strong unions, immobility of labour, and plentiful unskilled labour keeping some pay low.' },
    ]),
    ...sub(MKT, 'market-failure-oxfordaqa-igcse-economics', '3.1.6', [
      { n: 1, f: 'Market failure', b: 'The market system cannot allocate resources efficiently.', src: MF },
      { n: 2, f: 'Misallocation of resources', b: 'Resources are in the wrong uses, so society gets less than it could from scarce resources.', src: MF },
      { n: 3, f: 'Social cost and social benefit: formulas', b: 'Social cost = private cost + external cost.\nSocial benefit = private benefit + external benefit.\nExample: private cost 30 per unit plus external cost 12 gives a social cost of 42.' },
      { n: 4, f: 'Negative externality: why does the market over-produce?', b: 'Private cost is below social cost. The producer ignores the external cost, so supply is higher than the social best: price is too low and output too high. Resources are misallocated towards the good, causing a welfare loss.' },
      { n: 5, f: 'Positive externality: why does the market under-produce?', b: 'Private benefit is below social benefit. Buyers ignore the external benefit, so demand is below the good\'s value to society: price and output are too low. Resources are misallocated away from the good.' },
      { n: 6, f: 'Negative externality diagram, in words', b: 'The social cost curve lies above the private cost (supply) curve. The social optimum is at a lower output and higher price than the market equilibrium. The vertical gap between the curves is the external cost.' },
      { n: 7, f: 'Give an example of a negative production, negative consumption, positive production and positive consumption externality', b: 'Negative production: factory smoke over a village.\nNegative consumption: litter dropped after a takeaway meal.\nPositive production: trees planted by a farm that cool nearby land.\nPositive consumption: a front garden neighbours enjoy.' },
      { n: 8, f: 'Private vs social', b: 'Social includes the effect on everyone else.', src: MF },
      { n: 9, f: 'Market failure vs high prices', b: 'A high price is not market failure on its own.', src: MF },
      { n: 10, f: 'Best output vs zero output', b: 'Removing all pollution is rarely the social optimum.', src: MF },
      { n: 11, f: 'Methods of government intervention to correct market failure, each with its main limit', b: 'Tax (hard to set the right level), subsidy (taxpayers pay), regulation or bans (enforcement cost), direct provision (uses public funds), information and education (slow, uncertain).' },
      { n: 12, f: 'Why may a tax on a good with inelastic demand do little to cut consumption?', b: 'With inelastic demand the price rise cuts quantity only slightly (e.g. PED −0.4 and a 10% price rise gives only −4%). Tax revenue is healthy but consumption barely moves. So the effect depends on PED.' },
    ]),

    // 2 How economies work
    ...sub(ECO, 'introduction-to-the-national-economy-oxfordaqa-igcse-economics', '3.2.1', [
      { n: 1, f: 'Interest rate', b: 'What borrowing costs and what saving earns, as an annual percentage.', src: IR },
      { n: 2, f: 'What happens to consumers\' saving, borrowing and spending when the interest rate rises?', b: 'Saving becomes more attractive (higher reward). Borrowing becomes dearer, so fewer loans and mortgages, and variable-rate borrowers pay more. Spending tends to fall. A rate cut pushes each the other way.' },
      { n: 3, f: 'What happens to firms\' investment when the interest rate rises, and why?', b: 'Loans cost more and retained profit earns more in a deposit, so fewer projects earn more than the interest charged. Investment falls.' },
      { n: 4, f: 'A firm can spend 30,000 on equipment that adds 2,100 a year to profit. Should it borrow at 5%? At 8%?', b: 'Return = 2,100 ÷ 30,000 = 7%.\nAt 5% interest costs 1,500, leaving a gain of 600: invest.\nAt 8% interest costs 2,400, more than the 2,100 gained: do not invest.' },
      { n: 5, f: 'Why does Islamic (sharia-compliant) finance avoid ordinary interest, and how does a murabaha work?', b: 'It does not allow riba, a fixed charge for lending money. In a murabaha the bank buys the item and sells it on at cost plus a disclosed mark-up, paid in instalments: equipment of 20,000 at a 5% mark-up costs 21,000.' },
      { n: 6, f: 'Mudarabah, musharakah, ijara and sukuk', b: 'Mudarabah: one party gives funds, the other manages; profit split in an agreed ratio.\nMusharakah: both put in funds; profit shared by agreement, losses by contribution.\nIjara: bank owns the asset and charges rent.\nSukuk: certificates giving a share in an asset and its income.' },
      { n: 7, f: 'Direct tax and indirect tax, with examples', b: 'Direct: charged on what a person or firm earns, paid by that taxpayer (income tax, corporation tax).\nIndirect: a tax on spending, paid by the buyer and collected by the seller (sales tax or VAT, excise duties, import duties).', src: IR },
      { n: 8, f: 'Progressive, regressive and proportional taxes', b: 'Progressive: the share of income paid climbs as income climbs.\nRegressive: the share of income paid shrinks as income climbs.\nProportional: the same percentage at every income.\nJudge by percentages of income, not amounts of money.', src: IR },
      { n: 9, f: 'Tax is 0% on the first 5,000 and 25% above. Find the tax and average rate on an income of 15,000.', b: 'Only the slice above 5,000 is taxed: (15,000 − 5,000) × 0.25 = 2,500. Average rate = 2,500 ÷ 15,000 × 100 = 16.7%. (On 45,000 it is 10,000, or 22.2%, so the tax is progressive.)' },
      { n: 10, f: 'Main areas of government spending', b: 'Health, education, social protection (pensions and benefits), defence, transport and infrastructure, law and order, and interest on debt. Every spending choice has an opportunity cost.' },
      { n: 11, f: 'Exam trap: is government borrowing a source of revenue?', b: 'No. Revenue is mainly taxes (plus fees, state-enterprise profits and asset sales). Borrowing is how a budget deficit (spending − revenue) is financed.' },
      { n: 12, f: 'Interest rates: "it depends on…" evaluation points', b: 'The size of the change, whether loans are fixed or variable, confidence, inflation and how much debt households and firms hold. Savers, such as retirees living on interest, gain from higher rates while borrowers lose.' },
    ]),
    ...sub(ECO, 'government-objectives-oxfordaqa-igcse-economics', '3.2.2', [
      { n: 1, f: 'Main macroeconomic objectives of a government', b: 'Economic growth, low unemployment (high employment), price stability (low and stable inflation), a sustainable balance of payments position, and a fairer distribution of income and wealth.' },
      { n: 2, f: 'Economic growth versus economic development', b: 'Growth is a rise in output, measured by GDP, real GDP or GDP per capita. Development is a broader rise in living standards: health, education, infrastructure. GDP can rise while development stalls.' },
      { n: 3, f: 'Cyclical unemployment', b: 'Rises and falls with the wider economic cycle: it rises in a recession.', src: GO },
      { n: 4, f: 'Structural unemployment', b: 'Caused by the long-term decline of a specific industry.', src: GO },
      { n: 5, f: 'Frictional unemployment', b: 'Short-term, between one job ending and the next starting.', src: GO },
      { n: 6, f: 'Seasonal unemployment', b: 'Follows a predictable yearly pattern, for example in tourism or agriculture.', src: GO },
      { n: 7, f: 'Cost-push versus demand-pull inflation', b: 'Cost-push starts on the supply side: rising production costs (e.g. imported raw materials) are passed on as higher prices.\nDemand-pull starts on the demand side: spending outstrips what producers can supply, pulling prices up.' },
      { n: 8, f: 'Growth vs inflation (conflict)', b: 'Faster growth raises demand economy-wide, which can outstrip supply and pull prices up (demand-pull inflation).', src: GO },
      { n: 9, f: 'Equality vs growth (conflict)', b: 'Redistributing income through higher taxation can reduce the incentive to work or invest, potentially slowing growth.', src: GO },
      { n: 10, f: 'Balance of trade versus balance of payments', b: 'The balance of trade covers goods and services only. The balance of payments is broader, also including income, investment and financial flows. The current account is the narrower trade-and-income measure.' },
      { n: 11, f: 'Real GDP and GDP per capita', b: 'Real GDP: nominal GDP adjusted for inflation, so growth comparisons show the actual change in output, not rising prices.\nGDP per capita: total GDP ÷ population, used to compare living standards between countries of different sizes.' },
      { n: 12, f: 'A price index rises from 120.0 to 123.0. What is the inflation rate?', b: 'Inflation = (new index − old index) ÷ old index × 100 = 3.0 ÷ 120 × 100 = 2.5%.' },
    ]),
    ...sub(ECO, 'how-the-government-manages-the-economy-oxfordaqa-igcse-economics', '3.2.3', [
      { n: 1, f: 'Fiscal policy', b: 'Government decisions on what to spend and what to tax, aimed at steering the economy.', src: FM },
      { n: 2, f: 'Budget deficit, budget surplus and national debt', b: 'Deficit: spending greater than revenue in a year, paid for by borrowing.\nSurplus: revenue greater than spending.\nNational debt: the total the government owes from past borrowing. Deficit is one year\'s gap; debt is the running total.' },
      { n: 3, f: 'Expansionary fiscal policy: what changes, and the chain for an income tax cut', b: 'Government spending up and/or taxes down. Tax cut → higher disposable income → more consumption → more demand → firms raise output and hire → incomes rise. Limit: households may save much of the cut, and demand may pull up prices.' },
      { n: 4, f: 'Government spending rises by 2.5 and 60% of each extra unit of income is spent again in the country. What is the total effect on income?', b: 'Total = injection ÷ (1 − 0.6) = 2.5 ÷ 0.4 = 6.25. The knock-on factor is 1 ÷ 0.4 = 2.5. (The 9214 specification does not use the word multiplier.)' },
      { n: 5, f: 'Monetary policy, and the chain for an interest rate rise', b: 'Monetary policy is changing interest rates to steer the economy. A rise makes borrowing dearer and rewards saving, so consumption and investment fall, total demand falls and inflation slows. A cut does the reverse.', src: FM },
      { n: 6, f: 'How can a cut in interest rates help the balance of payments?', b: 'Lower rates usually weaken the currency, so exports become cheaper abroad and imports dearer at home, tending to narrow a current account deficit. The size of the effect depends on how strongly buyers respond to price.' },
      { n: 7, f: 'Supply-side policy', b: 'Action to raise the economy\'s capacity to produce and cut costs, shifting long-run supply to the right.', src: SS },
      { n: 8, f: 'Four supply-side policies and the main drawback of each', b: 'Education and training: costly and slow.\nLower direct (income) taxes: lost revenue, helps high earners most.\nLower taxes on business profits: profits may not be invested.\nPrivatisation and deregulation: risk of monopoly power, job losses or weaker standards.' },
      { n: 9, f: 'Privatisation and deregulation', b: 'Privatisation: sale of a government-run firm to private owners.\nDeregulation: removal or loosening of rules that limit entry or behaviour.', src: SS },
      { n: 10, f: 'Why are demand-side policies poorly suited to cost-push inflation?', b: 'Cutting demand (higher taxes or rates) works on demand-pull inflation. When rising costs are the cause, cutting demand mainly reduces output and jobs rather than tackling the cost rise.' },
      { n: 11, f: 'Demand: Qd = 90 − 3P. Supply: Qs = 3P − 30. A tax of 6 per unit is placed on sellers. Find the old and new equilibrium.', b: 'Before: 90 − 3P = 3P − 30, so P = 20, Q = 30.\nWith the tax, Qs = 3(P − 6) − 30 = 3P − 48, so P = 23, Q = 21. Buyers pay 3 more, sellers keep 17. Tax revenue = 6 × 21 = 126.' },
      { n: 12, f: 'Evaluating fiscal, monetary or supply-side policy: what does the outcome depend on?', b: 'Time lags, spare capacity, leakages into saving and imports, confidence, who gains and loses (borrowers, savers, taxpayers), conflicts with other objectives, and short run versus long run.' },
    ]),
    ...sub(ECO, 'international-trade-and-the-global-economy-oxfordaqa-igcse-economics', '3.2.4', [
      { n: 1, f: 'Exchange rate, appreciation and depreciation', b: 'Exchange rate: the amount of one currency needed to buy a unit of another.\nAppreciation: a rise in a currency\'s value against another.\nDepreciation: a fall in its value.', src: WCT },
      { n: 2, f: 'Benefits of international trade', b: 'Specialisation raises total output, imports bring lower prices and more choice, a bigger market gives economies of scale, countries gain resources they cannot produce, and foreign competition pushes local firms to be efficient.' },
      { n: 3, f: 'Free trade versus a free-trade agreement (FTA)', b: 'Free trade is trade with no tariffs, quotas or other barriers. An FTA is a deal that removes barriers only between its member countries.', src: WCT },
      { n: 4, f: 'Arguments against free trade (for protection)', b: 'Infant industries need time to grow, job losses in uncompetitive industries, dumping below cost, strategic industries such as food and energy, overdependence on imports or a few exports, and weaker standards abroad undercutting local firms.' },
      { n: 5, f: 'Where does demand for a currency come from, and where does its supply come from?', b: 'Demand: foreign buyers of the country\'s exports, tourists visiting, investment into the country, savers attracted by high interest rates, speculators expecting a rise.\nSupply: residents buying imports, travelling abroad or investing abroad, and speculators expecting a fall.' },
      { n: 6, f: 'Exchange rate diagram, in words: what happens when demand for the currency increases?', b: 'Vertical axis: exchange rate (foreign currency per unit). Horizontal axis: quantity of the currency. Demand slopes down, supply up. A rightward shift in demand raises the rate: an appreciation. A rightward shift in supply lowers it: a depreciation.' },
      { n: 7, f: 'What does a depreciation do to import and export prices?', b: 'Imports become dearer at home (firms using imported parts face higher costs). Exports become cheaper for foreign buyers, so exporters are more price competitive. An appreciation reverses both. Effects depend on elasticity and may take time.' },
      { n: 8, f: '1 arlo = 2.5 bexo, then the arlo falls to 2.0 bexo. What happens to the arlo price of a 500-bexo import?', b: 'At 2.5: 500 ÷ 2.5 = 200 arlo.\nAt 2.0: 500 ÷ 2.0 = 250 arlo, 50 arlo more. Depreciation makes imports dearer.' },
      { n: 9, f: 'Globalisation', b: 'The closer linking of economies, which rely more on each other, through trade, investment, people, ideas and technology.', src: GLOB },
      { n: 10, f: 'Two main causes of globalisation in the specification', b: 'New technology: cheaper communication and transport, so distance matters less and firms source, make and sell abroad.\nMultinational companies: they invest abroad, build supply chains, seek lower costs and bigger markets, and spread global brands.' },
      { n: 11, f: 'Multinational company (MNC) and foreign direct investment (FDI)', b: 'An MNC is a firm that operates in more than one country. FDI is an MNC building or buying productive assets in another country.', src: GLOB },
      { n: 12, f: 'Globalisation: moral, ethical and sustainability issues, and responses', b: 'Issues: child labour, unsafe or very low-paid work, unfair prices for small producers, pollution, emissions and resource depletion (often external costs). Responses: fair-trade schemes, labour and environmental standards, consumer pressure, MNC codes of conduct; but higher standards raise costs.' },
    ]),
    ...sub(ECO, 'the-role-of-money-and-financial-markets-oxfordaqa-igcse-economics', '3.2.5', [
      { n: 1, f: 'Money', b: 'Anything people will accept in exchange for goods, services and repayment of debts.', src: MON },
      { n: 2, f: 'The four functions of money', b: 'Medium of exchange: used to complete a purchase.\nUnit of account: the measure in which prices and debts are stated.\nStore of value: spending power kept for later.\nMeans of deferred payment: paying later for what you get now.' },
      { n: 3, f: 'Barter and its main problem', b: 'Barter is swapping goods directly, without money. It needs each side to want what the other has, and many exchange rates: 8 goods need 8 × 7 ÷ 2 = 28 rates, but with money only 8 prices.' },
      { n: 4, f: 'Liquidity, and the usual order of liquidity', b: 'How easily and quickly an asset can be spent without losing value. Order: cash, then current accounts, then savings deposits, then property.', src: MON },
      { n: 5, f: 'The two roles of the central bank', b: 'Influencing interest rates: it sets the policy rate, which guides the rates banks charge and pay.\nEnsuring stability: it supervises banks, sets rules on funds they must hold, and can lend to a bank short of cash.' },
      { n: 6, f: 'Commercial bank, and how it makes a profit', b: 'A private firm that takes deposits and makes loans. It earns the gap between the rate charged on loans and the rate paid on deposits. Example: pays 1.5% on 800 of deposits (12), earns 5.5% on 600 of loans (33): margin 21 before costs.' },
      { n: 7, f: 'Roles of insurance companies, pension funds and the stock market', b: 'Insurance: pools premiums from many to pay the few who suffer a loss.\nPension fund: collects savings in working life and invests them for retirement income.\nStock market: lets firms raise funds by selling shares and investors trade them.' },
      { n: 8, f: 'Bank run', b: 'Many depositors withdrawing at once because they fear the bank will fail.', src: MON },
      { n: 9, f: 'Savings earn 4% while inflation is 3%. Roughly what is the real return?', b: 'About 1%: (1.04 ÷ 1.03 − 1) × 100 = 0.97%. A rise in money value is not a rise in spending power if prices rise as much (nominal versus real).' },
      { n: 10, f: 'Policy rate, and the chain when it is cut', b: 'The interest rate set by the central bank to guide other rates. A cut makes borrowing cheaper, so spending and investment rise and aggregate demand rises. Limit: slow effects or low confidence.', src: MON },
      { n: 11, f: 'Why do money and the financial sector matter to consumers, producers and government?', b: 'Consumers: buy and save without barter, borrow for big purchases, insure against loss.\nProducers: price goods, pay wages, borrow to invest, raise funds through shares.\nGovernment: collects taxes, borrows by selling bonds, uses interest rates to manage the economy.' },
      { n: 12, f: 'Exam trap: is money only notes and coins?', b: 'No. Bank account balances are accepted as payment, so they count as money, and broader measures include savings deposits. Notes and coins are a small share: 9 bn of a broad total of 120 bn is 7.5%.' },
    ]),
  ],
};
