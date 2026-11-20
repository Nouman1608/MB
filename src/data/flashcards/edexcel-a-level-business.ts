/**
 * D-444 -- flashcards for Pearson Edexcel International A Level Business YBS11
 * (Issue 1, September 2017).
 *
 * One block per subtopic, in syllabus order. All four units now itemise
 * subtopics in the syllabus record, so every card is keyed by its subtopic.
 * The deck first filed Units 3 and 4 on the topic itself; on 20 Nov 2026 their
 * cards were re-filed under the subtopics and renumbered, and `idMigration`
 * below moves browser progress saved before then onto the new ids. Card ids are
 * `<subtopic number>-<n>` and are permanent from now on (browser progress is
 * keyed by them): add a new card with the next unused n, never renumber. Card
 * text is unchanged.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs YBS11); origin 'revision-notes'.
 *
 * Written from Marlbridge's own YBS11 revision notes and study guides. Not tiered.
 * Plain text only (see types.ts). Unicode for symbols.
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

const FIN = 'edexcel-ial-business-financial-planning-and-managing-finance-revision-notes';

const T1 = 'marketing-and-people-edexcel-alevel-business';
const T2 = 'managing-business-activities-edexcel-alevel-business';

export const DECK_EDEXCEL_A_LEVEL_BUSINESS: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'a-level',
  subjectSlug: 'business',
  syllabusCode: 'YBS11',
  syllabusSeries: 'Issue 1, September 2017',
  author: 'marlbridge-academic-team',
  updated: '2026-11-20',
  deckReview: { reviewerSlug: 'salman-ahmad', reviewedOn: '2026-11-05' },
  // Old id -> new id for every card, so progress saved before the cards were re-filed under
  // the new subtopics follows each card. Runs once per browser, on marks dated before 2026-11-20.
  idMigration: {
    id: 'ybs11-subtopics-2026-11-20',
    before: '2026-11-20',
    map: {
      '1.3.1-1': '1.3.1-1', '1.3.1-2': '1.3.1-2', '1.3.1-3': '1.3.1-3', '1.3.1-4': '1.3.1-4', '1.3.1-5': '1.3.1-5', '1.3.1-6': '1.3.1-6',
      '1.3.1-7': '1.3.1-7', '1.3.1-8': '1.3.1-8', '1.3.1-9': '1.3.1-9', '1.3.1-10': '1.3.1-10', '1.3.1-11': '1.3.1-11', '1.3.1-12': '1.3.1-12',
      '1.3.1-13': '1.3.1-13', '1.3.1-14': '1.3.1-14',
      '1.3.2-1': '1.3.2-1', '1.3.2-2': '1.3.2-2', '1.3.2-3': '1.3.2-3', '1.3.2-4': '1.3.2-4', '1.3.2-5': '1.3.2-5', '1.3.2-6': '1.3.2-6',
      '1.3.2-7': '1.3.2-7', '1.3.2-8': '1.3.2-8', '1.3.2-9': '1.3.2-9', '1.3.2-10': '1.3.2-10', '1.3.2-11': '1.3.2-11', '1.3.2-12': '1.3.2-12',
      '1.3.2-13': '1.3.2-13',
      '1.3.3-1': '1.3.3-1', '1.3.3-2': '1.3.3-2', '1.3.3-3': '1.3.3-3', '1.3.3-4': '1.3.3-4', '1.3.3-5': '1.3.3-5', '1.3.3-6': '1.3.3-6',
      '1.3.3-7': '1.3.3-7', '1.3.3-8': '1.3.3-8', '1.3.3-9': '1.3.3-9', '1.3.3-10': '1.3.3-10', '1.3.3-11': '1.3.3-11', '1.3.3-12': '1.3.3-12',
      '1.3.3-13': '1.3.3-13', '1.3.3-14': '1.3.3-14',
      '1.3.4-1': '1.3.4-1', '1.3.4-2': '1.3.4-2', '1.3.4-3': '1.3.4-3', '1.3.4-4': '1.3.4-4', '1.3.4-5': '1.3.4-5', '1.3.4-6': '1.3.4-6',
      '1.3.4-7': '1.3.4-7', '1.3.4-8': '1.3.4-8', '1.3.4-9': '1.3.4-9', '1.3.4-10': '1.3.4-10', '1.3.4-11': '1.3.4-11', '1.3.4-12': '1.3.4-12',
      '1.3.4-13': '1.3.4-13', '1.3.4-14': '1.3.4-14',
      '1.3.5-1': '1.3.5-1', '1.3.5-2': '1.3.5-2', '1.3.5-3': '1.3.5-3', '1.3.5-4': '1.3.5-4', '1.3.5-5': '1.3.5-5', '1.3.5-6': '1.3.5-6',
      '1.3.5-7': '1.3.5-7', '1.3.5-8': '1.3.5-8', '1.3.5-9': '1.3.5-9', '1.3.5-10': '1.3.5-10', '1.3.5-11': '1.3.5-11', '1.3.5-12': '1.3.5-12',
      '1.3.5-13': '1.3.5-13',
      '2.3.1-1': '2.3.1-1', '2.3.1-2': '2.3.1-2', '2.3.1-3': '2.3.1-3', '2.3.1-4': '2.3.1-4', '2.3.1-5': '2.3.1-5', '2.3.1-6': '2.3.1-6',
      '2.3.1-7': '2.3.1-7', '2.3.1-8': '2.3.1-8', '2.3.1-9': '2.3.1-9', '2.3.1-10': '2.3.1-10', '2.3.1-11': '2.3.1-11', '2.3.1-12': '2.3.1-12',
      '2.3.1-13': '2.3.1-13', '2.3.1-14': '2.3.1-14',
      '2.3.2-1': '2.3.2-1', '2.3.2-2': '2.3.2-2', '2.3.2-3': '2.3.2-3', '2.3.2-4': '2.3.2-4', '2.3.2-5': '2.3.2-5', '2.3.2-6': '2.3.2-6',
      '2.3.2-7': '2.3.2-7', '2.3.2-8': '2.3.2-8', '2.3.2-9': '2.3.2-9', '2.3.2-10': '2.3.2-10', '2.3.2-11': '2.3.2-11', '2.3.2-12': '2.3.2-12',
      '2.3.2-13': '2.3.2-13',
      '2.3.3-1': '2.3.3-1', '2.3.3-2': '2.3.3-2', '2.3.3-3': '2.3.3-3', '2.3.3-4': '2.3.3-4', '2.3.3-5': '2.3.3-5', '2.3.3-6': '2.3.3-6',
      '2.3.3-7': '2.3.3-7', '2.3.3-8': '2.3.3-8', '2.3.3-9': '2.3.3-9', '2.3.3-10': '2.3.3-10', '2.3.3-11': '2.3.3-11', '2.3.3-12': '2.3.3-12',
      '2.3.3-13': '2.3.3-13',
      '3-1': '3.3.1-1', '3-2': '3.3.1-2', '3-3': '3.3.1-3', '3-4': '3.3.2-1', '3-5': '3.3.2-2', '3-6': '3.3.3-1',
      '3-7': '3.3.3-2', '3-8': '3.3.3-3', '3-9': '3.3.3-4', '3-10': '3.3.3-5', '3-11': '3.3.5-1', '3-12': '3.3.4-1',
      '3-13': '3.3.4-2', '3-14': '3.3.6-1',
      '4-1': '4.3.1-1', '4-2': '4.3.1-2', '4-3': '4.3.1-3', '4-4': '4.3.1-4', '4-5': '4.3.1-5', '4-6': '4.3.2-1',
      '4-7': '4.3.2-2', '4-8': '4.3.2-3', '4-9': '4.3.2-4', '4-10': '4.3.3-1', '4-11': '4.3.3-2', '4-12': '4.3.3-3',
      '4-13': '4.3.4-1', '4-14': '4.3.4-2',
    },
  },
  cards: [
    // Unit 1 Marketing and people
    ...sub(T1, 'meeting-customer-needs-ybs11', '1.3.1', [
      { n: 1, f: 'Mass market vs niche market', b: 'Mass market: a large number of customers, a standardised product and competitive pricing.\nNiche market: a small, specialised segment with lower volume and often a higher price.' },
      { n: 2, f: 'Market size vs market share', b: 'Market size: total sales of all firms in the market, by value or volume.\nMarket share: one firm\'s sales as a percentage of market size (firm\'s sales ÷ total market sales × 100).' },
      { n: 3, f: 'Market growth formula, with an example', b: 'Market growth = change in market size ÷ original market size × 100.\nExample: a £4.0m market grows to £4.4m: 0.4 ÷ 4.0 × 100 = 10%.' },
      { n: 4, f: 'How can a firm\'s sales rise while its market share falls?', b: 'If the market grows faster than the firm. Example: sales up 6% in a market growing 10%, so share falls even though sales rise.' },
      { n: 5, f: 'Risk vs uncertainty', b: 'Risk: an outcome whose chance can be estimated from data (for example seasonal sales history).\nUncertainty: an outcome whose chance cannot be reliably estimated. Research can reduce risk, not uncertainty.' },
      { n: 6, f: 'What is a dynamic market?', b: 'One that keeps changing through new technology, shifting tastes, new entrants and online selling. Firms must watch the market and update products, channels and costs.' },
      { n: 7, f: 'Three purposes of market research', b: 'Identify and anticipate customer needs and wants; quantify likely demand; gain insight into consumer behaviour.' },
      { n: 8, f: 'Primary vs secondary research: one strength and one weakness of each', b: 'Primary (collected first-hand, e.g. surveys, focus groups, test marketing): specific and current, but costly and slow.\nSecondary (already exists, e.g. reports, websites, databases): cheap and fast, but possibly dated or off-target.' },
      { n: 9, f: 'Quantitative vs qualitative research', b: 'Quantitative: numerical data (how many).\nQualitative: opinions, attitudes and reasons (why).' },
      { n: 10, f: 'Random, quota and stratified sampling: how each works', b: 'Random: everyone has an equal chance of selection (may miss small groups).\nQuota: fill set numbers from chosen groups (choice within the quota is not random).\nStratified: groups in proportion to the population, chosen randomly within each.' },
      { n: 11, f: 'Stratified sample: how many over-60s in a sample of 60 from 1,500 customers, 300 of them over 60?', b: 'Group size ÷ population × sample size = 300 ÷ 1,500 × 60 = 12.' },
      { n: 12, f: 'Product orientation vs market orientation', b: 'Product orientation: make what the firm can make, then look for buyers.\nMarket orientation: find out what customers want through research, then design the product to meet it.' },
      { n: 13, f: 'Market map: what it shows and its limitation', b: 'A chart plotting competitors on two attributes (e.g. price and quality), showing crowded areas and gaps. Limitation: a gap shows no rival, not proof of demand; serving it may be unprofitable.' },
      { n: 14, f: 'Competitive advantage, differentiation and adding value', b: 'Competitive advantage: something that lets a firm outperform rivals persistently (cost, brand, service, uniqueness).\nDifferentiation: making a product distinct so buyers do not compare on price alone.\nAdding value: raising the gap between input cost and selling price.' },
    ]),
    ...sub(T1, 'the-market-ybs11', '1.3.2', [
      { n: 1, f: 'Name four factors that shift the demand curve', b: 'Price of substitutes (rise → demand rises); price of complements (rise → demand falls); income (rise → demand for normal goods rises); fashion, tastes, advertising and branding; demographics; external shocks and seasonality.' },
      { n: 2, f: 'Name four factors that shift the supply curve', b: 'Costs of production (lower → supply rises); new technology (supply rises); indirect taxes (raise → supply falls); subsidies (supply rises); external shocks such as a crop failure (supply falls).' },
      { n: 3, f: 'Movement along vs shift of the demand curve', b: 'A change in the product\'s own price causes a movement along the curve. A change in any other factor (income, substitutes, tastes…) shifts the whole curve.' },
      { n: 4, f: 'Equilibrium, and the effect of demand shifting right', b: 'Equilibrium is where quantity demanded = quantity supplied. If demand shifts right, equilibrium price and quantity both rise.' },
      { n: 5, f: 'Effect on equilibrium of supply shifting left (e.g. costs rise)', b: 'Price rises and quantity falls. (Supply shifting right does the reverse: price falls, quantity rises.)' },
      { n: 6, f: 'Price elasticity of demand (PED): formula and interpretation', b: 'PED = % change in quantity demanded ÷ % change in price. Usually negative. Ignoring the sign: above 1 elastic, below 1 inelastic, equal to 1 unitary.' },
      { n: 7, f: 'Price cut from £2.50 to £2.00; sales rise from 8,000 to 9,200. PED and revenue effect?', b: 'Price −20%, quantity +15%. PED = 15 ÷ −20 = −0.75 (inelastic). Revenue falls from £20,000 to £18,400.' },
      { n: 8, f: 'PED and total revenue: the rule', b: 'Inelastic demand: a price rise raises revenue, a price cut lowers it.\nElastic demand: a price rise lowers revenue, a price cut raises it (but profit still depends on costs).' },
      { n: 9, f: 'Five factors that make demand less price elastic', b: 'Few close substitutes; the product is a necessity; it takes a small share of income; strong brand loyalty; a short time period.' },
      { n: 10, f: 'Income elasticity of demand (YED): formula and classification', b: 'YED = % change in quantity demanded ÷ % change in income.\nPositive = normal good (above 1 income elastic, 0 to 1 income inelastic). Negative = inferior good. Keep the sign.' },
      { n: 11, f: 'Income rises 5% and demand for premium bikes rises 10%. YED?', b: '10 ÷ 5 = +2.0: a normal good, income elastic. Sales will be hit hard in a downturn.' },
      { n: 12, f: 'Why does elasticity matter to a business?', b: 'With inelastic demand, a firm can raise price to lift revenue, so firms brand and differentiate to reduce PED. High-YED products suffer most in a downturn; inferior goods may gain when incomes fall.' },
      { n: 13, f: 'Exam trap: base for percentage change', b: 'Percentage change = (new − old) ÷ old × 100. Always use the original figure as the base.' },
    ]),
    ...sub(T1, 'marketing-mix-and-strategy-ybs11', '1.3.3', [
      { n: 1, f: 'Marketing mix', b: 'The combination of marketing decisions (product, price, promotion, place) a business uses to meet its marketing objectives. The mix must be consistent.' },
      { n: 2, f: 'Three marketing objectives named in the specification', b: 'Increase market share; increase revenue; build a brand.' },
      { n: 3, f: 'Product life cycle: the five stages', b: 'Development (no sales, costs only); introduction (low, slowly rising sales); growth (sales rising fast); maturity (sales flat); decline (sales falling).' },
      { n: 4, f: 'Extension strategies: examples and how to judge them', b: 'New packaging, new market, new use, new promotion, price change, new variant. Judge by whether the strategy fixes the cause of the stalled sales.' },
      { n: 5, f: 'Boston Matrix: the four categories', b: 'Star: high growth, relative share above 1.\nQuestion mark: high growth, relative share below 1.\nCash cow: low growth, relative share above 1.\nDog: low growth, relative share below 1.' },
      { n: 6, f: 'Relative market share: formula and example', b: 'Product\'s share ÷ largest rival\'s share. Example: 18% ÷ 36% = 0.5. With market growth above the cut-off, that is a question mark.' },
      { n: 7, f: 'Design mix: the three elements', b: 'Function (does the job reliably); aesthetics (appearance, feel, packaging); cost/economic manufacture (can be made at a cost that allows profit at an acceptable price).' },
      { n: 8, f: 'Three benefits of strong branding (specification list)', b: 'Added value; ability to charge premium prices; reduced price elasticity of demand.' },
      { n: 9, f: 'Types of branding', b: 'Corporate (family): one name across all products.\nIndividual: a separate name for each product.\nOwn-label: a retailer\'s own brand.' },
      { n: 10, f: 'Price skimming vs penetration pricing', b: 'Skimming: a high launch price, lowered later; suits strong USPs, inelastic demand, a strong brand.\nPenetration: a low launch price to gain share; suits elastic demand, many rivals, scale economies.' },
      { n: 11, f: 'Cost-plus price: formula and example', b: 'Price = unit cost × (1 + mark-up %). Unit cost £30 with a 50% mark-up: 30 × 1.5 = £45.' },
      { n: 12, f: 'Predatory vs competitive pricing', b: 'Predatory: price below cost to force a rival out; needs a firm that can afford losses.\nCompetitive: price close to rivals\' prices; common in mature markets with similar products.' },
      { n: 13, f: 'Mark-up vs margin', b: 'Mark-up is profit as a percentage of cost. Margin is profit as a percentage of the selling price. Example: cost £42, price £63: mark-up = 21 ÷ 42 = 50%; margin = 21 ÷ 63 ≈ 33.3%.' },
      { n: 14, f: 'Shorter vs longer distribution channel', b: 'Channels: four stage (producer → wholesaler → retailer → consumer), three stage, two stage (direct). Shorter: more income per unit and more control, but the producer takes on storage, delivery and service. Longer: wider reach, but each middleman takes a margin.' },
    ]),
    ...sub(T1, 'managing-people-ybs11', '1.3.4', [
      { n: 1, f: 'Staff as an asset vs staff as a cost', b: 'Asset: people are a source of advantage worth investing in (training, pay).\nCost: people are an expense to minimise, which risks low morale and high turnover.' },
      { n: 2, f: 'Ways to create a flexible workforce', b: 'Multi-skilling; part-time and temporary contracts; zero-hour contracts; flexible hours and home working; outsourcing.' },
      { n: 3, f: 'Dismissal vs redundancy', b: 'Dismissal: the contract is ended for a reason about the employee (fault-based).\nRedundancy: the job itself no longer exists, so the worker leaves through no fault of their own.' },
      { n: 4, f: 'Internal vs external recruitment', b: 'Internal: cheaper, faster, a known person, but a narrow choice and it leaves another vacancy.\nExternal: a wider pool and new ideas, but dearer and slower to settle in.' },
      { n: 5, f: 'Induction, on-the-job and off-the-job training', b: 'Induction: introduction to the firm for new staff.\nOn-the-job: learning at the workstation.\nOff-the-job: learning away from work, such as a course.' },
      { n: 6, f: 'Span of control vs chain of command', b: 'Span of control: the number of people reporting directly to one manager.\nChain of command: the route by which instructions pass down and reports pass up the hierarchy.' },
      { n: 7, f: 'Tall vs flat structures', b: 'Tall: many levels, narrow spans; close control and clear promotion steps, but slow and costly.\nFlat: few levels, wide spans; quick and cheaper, more responsibility, but fewer promotion steps and risk of overload.' },
      { n: 8, f: 'Centralised vs decentralised; matrix structure', b: 'Centralised: key decisions at the top. Decentralised: decisions pushed down.\nMatrix: project teams draw people from several departments; shares skills but staff may have two bosses.' },
      { n: 9, f: 'Taylor and Mayo: key ideas', b: 'Taylor: break work into simple tasks, supervise closely and pay by output (piecework).\nMayo: workers have social needs; attention and teamwork raise motivation.' },
      { n: 10, f: 'Maslow\'s hierarchy of needs: the five levels', b: 'From the bottom: physiological, safety, social, esteem, self-actualisation. Managers should meet the lowest unmet need.' },
      { n: 11, f: 'Herzberg: hygiene factors vs motivators', b: 'Hygiene factors (pay, conditions, supervision) prevent dissatisfaction but do not motivate by themselves.\nMotivators (achievement, recognition, responsibility) create satisfaction. So fix pay first, then enrich the job.' },
      { n: 12, f: 'Financial methods of motivation', b: 'Piecework (paid per unit); commission (percentage of sales); bonus (for hitting a target); profit share; performance-related pay.\nExample: 3% commission on £80,000 sales = £2,400.' },
      { n: 13, f: 'Job enrichment vs job enlargement vs job rotation', b: 'Enrichment: more responsibility and challenge (depth).\nEnlargement: more tasks at the same level (breadth).\nRotation: switching between tasks.' },
      { n: 14, f: 'Four leadership styles', b: 'Autocratic: leader decides alone.\nPaternalistic: leader decides but explains and cares for staff.\nDemocratic: staff are involved in decisions.\nLaissez-faire: leader sets broad aims and staff decide how.' },
    ]),
    ...sub(T1, 'entrepreneurs-and-leaders-ybs11', '1.3.5', [
      { n: 1, f: 'The roles of an entrepreneur', b: 'Creating and setting up a business (spot an opportunity, plan, raise finance); running it; expanding and developing it.' },
      { n: 2, f: 'Intrapreneurship', b: 'Employees acting like entrepreneurs inside an existing business, developing new ideas or products.' },
      { n: 3, f: 'Barriers to entrepreneurship', b: 'Lack of finance, lack of experience, red tape, competition, and fear of failure.' },
      { n: 4, f: 'Characteristics and skills of an entrepreneur', b: 'Risk-taking, creativity, determination, self-confidence, organisation, communication and opportunity spotting.' },
      { n: 5, f: 'Profit maximisation vs profit satisficing', b: 'Maximisation: aiming for the highest possible profit.\nSatisficing: aiming for a satisfactory profit that leaves the owner content, rather than the highest possible.' },
      { n: 6, f: 'Non-financial motives of entrepreneurs', b: 'Ethical stance, social entrepreneurship, independence, and the chance of home working.' },
      { n: 7, f: 'Survival as an objective', b: 'Common for new or struggling firms, where the priority is managing cash flow so the business keeps trading.' },
      { n: 8, f: 'Sales maximisation vs profit maximisation', b: 'Sales maximisation aims for the highest sales revenue, which may mean lower prices and margins. Profit maximisation aims for the highest profit, which is hard to identify in practice.' },
      { n: 9, f: 'Other business objectives besides profit and sales', b: 'Market share, cost efficiency (lower unit cost), employee welfare, customer satisfaction and social objectives.' },
      { n: 10, f: 'Opportunity cost, with an example', b: 'The next best alternative given up. Two uses of £20,000 earn £3,000 and £2,600 a year; choosing the first has an opportunity cost of £2,600 (not the whole £20,000).' },
      { n: 11, f: 'Trade-off', b: 'Having more of one aim means accepting less of another, for example growth against short-term profit.' },
      { n: 12, f: 'Moving from entrepreneur to leader', b: 'As the business grows, the founder must delegate, trust managers and put systems in place. This is hard for someone used to controlling everything.' },
      { n: 13, f: 'Management vs leadership', b: 'Management: planning, organising, coordinating and controlling.\nLeadership: setting direction and inspiring people.' },
    ]),
    // Unit 2 Managing business activities
    ...sub(T2, 'planning-and-raising-finance-ybs11', '2.3.1', [
      { n: 1, f: 'Business plan: definition and contents', b: 'A written document setting out the aims, market, operations and finances of a business and the finance it needs. Contents: idea and aims, market research, marketing plan, operations, owners and managers, financial forecasts.' },
      { n: 2, f: 'Uses of a business plan', b: 'Inside: test the idea, set targets, compare actual results with the plan.\nOutside: persuade banks and investors to provide finance, by showing what is needed and how it will be repaid.' },
      { n: 3, f: 'Three internal sources of finance', b: 'Owner\'s capital (personal savings), retained profit, and sale of assets.' },
      { n: 4, f: 'Retained profit: advantages and drawback', b: 'No interest and no outside control. But a new or loss-making business has none, and it builds up slowly.' },
      { n: 5, f: 'Source vs method of finance', b: 'A source is who provides the money (e.g. a bank, business angel, family). A method is the form it takes (e.g. a loan or an overdraft from a bank).' },
      { n: 6, f: 'Business angel vs venture capital', b: 'Business angel: a wealthy individual who invests for a share and may advise.\nVenture capital: a specialist firm that buys shares in a risky, high-growth business.' },
      { n: 7, f: 'Crowd funding and peer-to-peer funding', b: 'Crowd funding: many small contributions raised online, often for consumer products that attract public interest.\nPeer-to-peer: individuals lend to a business through an online platform, an alternative to a bank.' },
      { n: 8, f: 'Loan vs overdraft', b: 'Loan: a fixed sum with interest and set repayments; suits long-term purchases.\nOverdraft: borrow up to a limit, flexible, interest only on what is used but costly; suits short-term cash gaps.' },
      { n: 9, f: 'Share capital vs loan', b: 'Share capital gives investors ownership and needs no repayment or interest, but dilutes control. A loan gives no ownership but must be repaid with interest.' },
      { n: 10, f: 'Dilution: an owner holds 70 of 100 shares and 30 new shares are sold. New stake?', b: '70 ÷ 130 = 53.8%. Ownership is diluted, but the company has gained funds.' },
      { n: 11, f: 'Leasing, trade credit and grants', b: 'Leasing: use an asset without owning it, with regular payments.\nTrade credit: pay the supplier later; finances everyday inventory.\nGrants: often non-repayable, but conditions apply.' },
      { n: 12, f: 'Unlimited vs limited liability', b: 'Unlimited: the owner is personally responsible for all business debts (sole traders, partners generally).\nLimited: a shareholder\'s loss is limited to the amount invested (Ltd and plc shareholders).' },
      { n: 13, f: 'Private limited company (Ltd) vs public limited company (plc)', b: 'A Ltd may not sell its shares to the public; shares go to chosen investors. A plc may sell shares to the public, raising large capital but with more cost, disclosure and takeover risk.' },
      { n: 14, f: 'Franchise, social enterprise and lifestyle business', b: 'Franchise: pay a fee (often a share of revenue) to use a brand and system.\nSocial enterprise: trades to meet social or environmental aims and reinvests most profit.\nLifestyle business: run for a chosen way of life, with little wish to grow.' },
    ]),
    ...sub(T2, 'financial-planning-ybs11', '2.3.2', [
      { n: 1, f: 'Sales revenue, total costs and average cost', b: 'Sales revenue = selling price × sales volume.\nTotal costs = fixed costs + total variable costs.\nAverage cost = total costs ÷ output.' },
      { n: 2, f: 'Fixed vs variable costs', b: 'Fixed costs do not vary with output (e.g. rent). Variable costs vary with output (e.g. materials). Average cost falls as output rises because fixed costs are spread more widely.' },
      { n: 3, f: 'Improving sales volume or revenue', b: 'Promotion, product improvement, wider distribution, or a price change. A price change moves volume and revenue per unit in opposite directions.', src: FIN },
      { n: 4, f: 'Sales forecasting: purpose and three factors that affect it', b: 'Purpose: a base for budgets and cash-flow forecasts, and for planning production, inventory and staffing.\nFactors: consumer trends, economic variables, actions of competitors.' },
      { n: 5, f: 'Contribution per unit and break-even output: formulas', b: 'Contribution per unit = selling price − variable cost per unit.\nBreak-even output = total fixed costs ÷ contribution per unit.' },
      { n: 6, f: 'Price 24, variable cost 15, fixed costs 18,000. Break-even, and margin of safety at 2,600 units?', b: 'Contribution = 9. Break-even = 18,000 ÷ 9 = 2,000 units. Margin of safety = 2,600 − 2,000 = 600 units.' },
      { n: 7, f: 'Margin of safety', b: 'Actual (or planned) output minus break-even output: how far sales can fall before a loss is made. Example: sales 4,000, break-even 3,000 → 1,000 units, or 25% of actual output.' },
      { n: 8, f: 'Limitations of break-even analysis', b: 'Assumes all output is sold, constant price and variable cost per unit, and fixed costs that stay fixed; best for one product; relies on forecasts; ignores cash timing and competitor reactions.' },
      { n: 9, f: 'Cash-flow forecast: layout', b: 'Each month: opening balance + inflows − outflows = closing balance (net cash flow = inflows − outflows). Next month\'s opening balance is this month\'s closing balance.' },
      { n: 10, f: 'Uses of a cash-flow forecast', b: 'Spot shortages early, support borrowing requests, and time purchases.', src: FIN },
      { n: 11, f: 'Limitations of a cash-flow forecast', b: 'Forecast sales may be wrong; late payers and unplanned costs; it needs regular updates; it says nothing about profit.', src: FIN },
      { n: 12, f: 'Historical vs zero-based budgets', b: 'Historical: last period\'s figures adjusted; quick, but repeats old inefficiency.\nZero-based: start from zero and justify every item; challenges waste, but slower.' },
      { n: 13, f: 'Variance analysis: favourable vs adverse', b: 'Variance = actual − budget. Favourable raises profit; adverse lowers it. A cost above budget is adverse; revenue above budget is favourable. Example: cost budget 22,000, actual 24,200 → 2,200 adverse.' },
    ]),
    ...sub(T2, 'managing-finance-ybs11', '2.3.3', [
      { n: 1, f: 'Gross profit, operating profit and profit for the year', b: 'Gross profit = revenue − cost of sales.\nOperating profit = gross profit − other operating expenses.\nProfit for the year (net profit) = operating profit − interest.' },
      { n: 2, f: 'The three profit margins', b: 'Gross profit margin = gross profit ÷ revenue × 100.\nOperating profit margin = operating profit ÷ revenue × 100.\nProfit for the year margin = profit for the year ÷ revenue × 100.' },
      { n: 3, f: 'Revenue 210,000; cost of sales 126,000; other operating expenses 52,500. Margins?', b: 'Gross profit 84,000 → gross margin 40%. Operating profit 84,000 − 52,500 = 31,500 → operating margin 15%.' },
      { n: 4, f: 'Ways to improve profit margins', b: 'Raise prices; cut cost of sales (cheaper materials); cut other operating expenses; cut interest by repaying debt. Selling more raises profit but not always the margin.' },
      { n: 5, f: 'Profit vs cash', b: 'Profit: revenue minus costs for a period, counted when earned or incurred.\nCash: money actually received and paid, counted when it moves. Credit sales count as revenue at once but the cash arrives later.' },
      { n: 6, f: 'How can a profitable business run out of cash?', b: 'By paying suppliers quickly, offering customers long credit and building up inventory, so cash leaves before it comes in. Wages and bills fall due on fixed dates whatever the profit.' },
      { n: 7, f: 'Current ratio and acid test ratio', b: 'Current ratio = current assets ÷ current liabilities.\nAcid test ratio = (current assets − inventory) ÷ current liabilities.' },
      { n: 8, f: 'Current assets 50,000 (inventory 32,000), current liabilities 40,000. Ratios?', b: 'Current ratio = 50,000 ÷ 40,000 = 1.25.\nAcid test = 18,000 ÷ 40,000 = 0.45: weak, because most current assets are inventory.' },
      { n: 9, f: 'Working capital', b: 'Current assets − current liabilities: the funds for day-to-day running. Example: 55,000 − 38,000 = 17,000.' },
      { n: 10, f: 'Four ways to improve liquidity, with a drawback each', b: 'Sell assets (lose their use); longer supplier credit (suppliers may refuse or raise prices); factoring (fee; customers deal with the factor); just in time inventory (depends on reliable suppliers).' },
      { n: 11, f: 'Overtrading', b: 'Expanding output or sales faster than the business can fund the cash needed, so it runs short of cash even if profitable.' },
      { n: 12, f: 'Internal causes of business failure', b: 'Poor management of cash flow, overestimation of sales, overtrading, poor inventory control, poor marketing, poor quality. These are within management\'s control.' },
      { n: 13, f: 'External causes of business failure', b: 'Market conditions, competition, economic conditions, exchange rates, interest rates, government regulations, supplier problems, natural phenomena. Not controllable, but a firm can prepare for them.' },
    ]),
    ...sub(T2, 'resource-management-ybs11', '2.3.4', [
      { n: 1, f: 'Four methods of production', b: 'Job: one-off item made to order. Batch: groups of identical items, then reset. Flow: continuous standard output with the lowest unit cost. Cell: teams own a whole part of the product.' },
      { n: 2, f: 'Labour-intensive vs capital-intensive production', b: 'Labour-intensive: people do most of the work, so it is flexible but wage costs rise with output. Capital-intensive: machines do most of the work, with high fixed cost and low variable cost per unit.' },
      { n: 3, f: 'Productivity vs efficiency', b: 'Productivity is physical: output per unit of input per time period. Efficiency is financial: producing at minimum average cost. Productivity needs no cost; efficiency does.' },
      { n: 4, f: '7,500 units are made in 250 labour hours. Labour productivity?', b: 'Output ÷ labour hours = 7,500 ÷ 250 = 30 units per hour. More output with proportionally more hours is not higher productivity.' },
      { n: 5, f: 'Capacity utilisation formula and a worked example', b: 'Current output ÷ maximum possible output × 100. Example: 9,000 ÷ 12,000 × 100 = 75%.' },
      { n: 6, f: 'Problems of under-utilised and over-utilised capacity', b: 'Under-utilised: high fixed cost per unit and wasted resources. Over-utilised: overtime cost, breakdowns, falling quality, late orders and no room for extra orders.' },
      { n: 7, f: 'Reorder level formula and a worked example', b: 'Reorder level = buffer inventory + (daily usage × lead time). Example: 80 + (30 × 3) = 170 units.' },
      { n: 8, f: 'Maximum level, buffer inventory, reorder level and lead time', b: 'Maximum level: most the business wants to hold. Buffer: minimum safety level. Reorder level: where the order is placed. Lead time: delay between order and delivery.' },
      { n: 9, f: 'Just in time (JIT): gains and risks', b: 'Gains: lower storage cost, less cash tied up, less waste. Risks: supplier failure stops production, no bulk discounts, and frequent deliveries cost more. It needs reliable suppliers.' },
      { n: 10, f: 'Lean production', b: 'JIT plus waste minimisation plus continuous improvement, so the business produces more output from fewer resources.' },
      { n: 11, f: 'Quality control vs quality assurance', b: 'Quality control inspects and rejects faulty output after the event; it finds faults but does not prevent them. Quality assurance builds quality into every stage so faults are prevented.' },
      { n: 12, f: 'Total quality management (TQM) and Kaizen', b: 'TQM: quality is everyone\'s responsibility, with a customer focus. Kaizen: continuous improvement through constant small changes by all employees.' },
    ]),
    ...sub(T2, 'external-influences-ybs11', '2.3.5', [
      { n: 1, f: 'Currency appreciation vs depreciation: effect on exporters and importers', b: 'Appreciation: exports are dearer abroad and imports cheaper. Depreciation: exports are cheaper abroad and imports dearer.' },
      { n: 2, f: 'A firm buys EUR 72,000 of parts. Dollar cost at $1 = EUR 0.90 and at $1 = EUR 0.75?', b: 'Cost = foreign price ÷ exchange rate. At 0.90: $80,000. At 0.75: $96,000. The $16,000 rise comes from the dollar buying fewer euros.' },
      { n: 3, f: 'Effect of higher interest rates on a business', b: 'Loan costs rise, so profit after interest falls. Consumer spending falls, especially on borrowing-funded purchases. Responses: fix rates, repay debt, delay investment.' },
      { n: 4, f: 'Income elasticity of demand (YED): meaning of the values', b: 'Percentage change in demand ÷ percentage change in income. Above 1: a luxury. Between 0 and 1: a necessity. Negative: an inferior good. Income up 6% with YED +1.5 gives demand up 9%.' },
      { n: 5, f: 'Effects of inflation on a business', b: 'Costs rise, wage claims increase and planning gets harder. Responses: raise prices, use fixed-price contracts, improve productivity.' },
      { n: 6, f: 'Effect of a recession on a luxury-goods business', b: 'Demand falls by more than for necessities because luxuries have a high income elasticity. Responses: lower-priced ranges, cutting fixed costs and diversifying.' },
      { n: 7, f: 'Six areas of legislation that affect a business', b: 'Consumer protection, employee protection, environmental protection, competition policy, health and safety, and intellectual property. Compliance costs weigh more heavily on small firms.' },
      { n: 8, f: 'Patent vs trademark vs copyright', b: 'Patent: protects an invention. Trademark: protects a name, logo or sign. Copyright: protects original written, musical and artistic work.' },
      { n: 9, f: 'Features of a highly competitive environment', b: 'Many rivals, large rivals with economies of scale, and aggressive behaviour such as price wars, heavy promotion and takeovers.' },
      { n: 10, f: 'Ways a small business can compete with a large rival', b: 'Niche focus, personal service, quality or design differentiation, local reputation, flexibility and speed, low-cost online selling, partnerships or buying groups.' },
    ]),
    // Unit 3 Business decisions and strategy (no subtopics in the record)
    ...sub('business-decisions-and-strategy-edexcel-alevel-business', 'business-objectives-and-strategy-ybs11', '3.3.1', [
      { n: 1, f: 'Ansoff\'s Matrix: the four strategies, by risk', b: 'Market penetration (existing products, existing markets) is lowest risk; market development (existing products, new markets); product development (new products, existing markets); diversification (new products, new markets) is highest risk.' },
      { n: 2, f: 'Porter\'s Strategic Matrix (generic strategies)', b: 'Cost leadership, differentiation, cost focus and differentiation focus. A firm competes either on cost or on difference, across a broad market or a narrow focus.' },
      { n: 3, f: 'Porter\'s five forces', b: 'Rivalry among competitors, threat of new entrants, threat of substitutes, buyer power, supplier power. Example: few large buyers → high buyer power, prices squeezed.' },
    ]),
    ...sub('business-decisions-and-strategy-edexcel-alevel-business', 'business-growth-ybs11', '3.3.2', [
      { n: 1, f: 'Organic vs inorganic growth', b: 'Organic: new products, markets, outlets or capacity; slow but controlled and keeps the culture.\nInorganic: merger (agreed combination) or takeover (buying control); fast but costly and risky.' },
      { n: 2, f: 'Horizontal, vertical and conglomerate integration', b: 'Horizontal: same stage, same industry.\nVertical: forward (towards customers) or backward (towards suppliers).\nConglomerate: unrelated industries; spreads risk.' },
      { n: 3, f: 'Objectives of growth, and internal vs external economies of scale', b: 'Objectives: economies of scale, market power, market share and brand, and profitability. Internal economies: purchasing, technical, financial, managerial, marketing. External: skilled labour pool, specialist suppliers and transport links near a cluster of firms.', src: 'edexcel-a-level-business-ybs11-business-growth-revision-notes' },
      { n: 4, f: 'Problems arising from growth: diseconomies of scale vs overtrading', b: 'Diseconomies of scale: average cost rises with output (poor communication, slow decisions, duplication). Overtrading: sales grow faster than finance, a cash problem even for a profitable business.', src: 'edexcel-a-level-business-ybs11-business-growth-revision-notes' },
      { n: 5, f: 'Merger vs takeover, and how is the takeover premium calculated?', b: 'A merger is two firms agreeing to combine; a takeover is one firm buying control of another, friendly or hostile. Takeover premium = (offer price ÷ market price − 1) × 100.', src: 'edexcel-a-level-business-ybs11-business-growth-revision-notes' },
    ]),
    ...sub('business-decisions-and-strategy-edexcel-alevel-business', 'decision-making-techniques-ybs11', '3.3.3', [
      { n: 1, f: 'Payback: formula, with an example', b: 'Full years + (cost still to recover ÷ cash flow in the payback year). Cost 60,000; inflows 15,000, 25,000, 30,000: after 2 years 40,000 recovered; 20,000 ÷ 30,000 = 0.67 → 2.67 years.' },
      { n: 2, f: 'Average rate of return (ARR): formula, with an example', b: '(Total net return − cost) ÷ years ÷ cost × 100. Cost 60,000, total inflows 90,000 over 4 years: 30,000 ÷ 4 = 7,500; 7,500 ÷ 60,000 × 100 = 12.5%.' },
      { n: 3, f: 'Net present value (NPV)', b: 'Sum of (each cash flow × its discount factor) − initial cost. A positive NPV supports investing, but depends on the discount rate and forecasts. Trap: giving the PV total without subtracting the cost.' },
      { n: 4, f: 'Decision tree: method and limitations', b: 'Work right to left: expected value (EV) = Σ(probability × outcome) at each chance node, subtract the option\'s cost, choose the highest net EV. Example: 0.7 × 80 + 0.3 × 20 = 62; minus cost 30 = 32. Limits: subjective probabilities, money only.' },
      { n: 5, f: 'Critical path analysis: total float', b: 'Total float = LFT at end node − EST at start node − duration. Example: 12 − 4 − 5 = 3 days. Activities with zero float are on the critical path. Forward pass takes the larger EST where paths merge.' },
    ]),
    ...sub('business-decisions-and-strategy-edexcel-alevel-business', 'influences-on-business-decisions-ybs11', '3.3.4', [
      { n: 1, f: 'Stakeholder model vs shareholder model', b: 'Stakeholder model: decisions consider all stakeholders (staff, customers, community…).\nShareholder model: decisions focus on share price and dividends for owners.' },
      { n: 2, f: 'Four types of organisational culture', b: 'Power, role, task and person cultures. Culture is formed by founders, history, leadership and structure, and is hard to change because of habit and resistance.' },
      { n: 3, f: 'Strong vs weak corporate culture', b: 'Strong: widely shared and understood, consistent behaviour and often loyal staff, but it can resist change. Weak: little shared identity, so control comes from rules and supervision, and service is inconsistent.', src: 'edexcel-a-level-business-ybs11-influences-on-business-decisions-revision-notes' },
      { n: 4, f: 'Why is corporate culture hard to change, and how can change be eased?', b: 'It is deeply embedded, staff resist loss of status or habit, and it takes years. Ease change by explaining the reasons, involving staff, changing rewards and leading by example.', src: 'edexcel-a-level-business-ybs11-influences-on-business-decisions-revision-notes' },
      { n: 5, f: 'Benefits and costs of corporate social responsibility (CSR)', b: 'Benefits: stronger brand and loyalty, easier recruitment, fewer legal problems. Costs and risks: reduces short-term profit, hard to measure the return, and greenwashing destroys trust.', src: 'edexcel-a-level-business-ybs11-influences-on-business-decisions-revision-notes' },
    ]),
    ...sub('business-decisions-and-strategy-edexcel-alevel-business', 'assessing-competitiveness-ybs11', '3.3.5', [
      { n: 1, f: 'Gearing and ROCE', b: 'Capital employed = non-current liabilities + total equity.\nGearing = non-current liabilities ÷ capital employed × 100.\nROCE = operating profit ÷ capital employed × 100.' },
      { n: 2, f: 'Formulas for gross profit margin and profit for the year margin', b: 'Gross profit margin = gross profit ÷ revenue × 100. Profit for the year margin = profit for the year ÷ revenue × 100.', src: 'edexcel-a-level-business-ybs11-assessing-competitiveness-revision-notes' },
      { n: 3, f: 'Formulas for the current ratio and the acid test ratio', b: 'Current ratio = current assets ÷ current liabilities. Acid test ratio = (current assets − inventory) ÷ current liabilities. Below 1 is a warning, though cash retailers can operate safely below it.', src: 'edexcel-a-level-business-ybs11-assessing-competitiveness-revision-notes' },
      { n: 4, f: 'Formulas for labour productivity, labour turnover, retention and absenteeism', b: 'Productivity = output ÷ employees. Turnover = leavers ÷ average employees × 100. Retention = staff who stayed ÷ staff at the start × 100. Absenteeism = days lost ÷ working days available × 100.', src: 'edexcel-a-level-business-ybs11-assessing-competitiveness-revision-notes' },
      { n: 5, f: 'Limitations of ratio analysis', b: 'It uses past data, accounting policies reduce comparability, non-financial factors are ignored, one year may be unusual, inflation distorts comparisons and year-end figures can be window-dressed.', src: 'edexcel-a-level-business-ybs11-assessing-competitiveness-revision-notes' },
    ]),
    ...sub('business-decisions-and-strategy-edexcel-alevel-business', 'managing-change-ybs11', '3.3.6', [
      { n: 1, f: 'Business continuity and succession planning', b: 'Ways to mitigate risks such as natural disasters, IT systems failure and loss of key staff. Continuity planning keeps the business running in a crisis; succession planning prepares people to replace key staff.' },
      { n: 2, f: 'How do culture, size and speed affect change?', b: 'Flexible team cultures adapt easily; role cultures resist. Small firms change fast, large ones slowly but with resources for pilots. Rapid change gives early benefits but high risk; gradual change is lower risk but slower.', src: 'edexcel-a-level-business-ybs11-managing-change-revision-notes' },
      { n: 3, f: 'Methods of managing resistance to change', b: 'Communicate early and honestly, involve staff in planning, train staff, offer incentives and job security, use pilot schemes. Using authority is fast but damages trust and morale.', src: 'edexcel-a-level-business-ybs11-managing-change-revision-notes' },
      { n: 4, f: 'Transformative leadership: features and drawbacks', b: 'Sets a clear vision, inspires commitment, leads by example and develops people; suits major long-term change. Drawbacks: relies on one person, the vision may be wrong, slow to build, poor in an emergency.', src: 'edexcel-a-level-business-ybs11-managing-change-revision-notes' },
      { n: 5, f: 'Stages of contingency planning', b: 'Identify risks, assess them by likelihood and impact and rank them, mitigate (business continuity, succession planning, insurance), then test and update the plan.', src: 'edexcel-a-level-business-ybs11-managing-change-revision-notes' },
    ]),
    // Unit 4 Global business (no subtopics in the record)
    ...sub('global-business-edexcel-alevel-business', 'globalisation-ybs11', '4.3.1', [
      { n: 1, f: 'Developed, developing and emerging economies', b: 'Developed: high income per head, services-led, strong infrastructure.\nDeveloping: low income per head, more agriculture, weaker infrastructure.\nEmerging: fast growth, industrialising, opening up to trade.' },
      { n: 2, f: 'GDP, GDP per capita and HDI', b: 'GDP: value of output in a period. GDP per capita = GDP ÷ population (45bn dollars ÷ 9m people = 5,000 dollars).\nHDI combines income with health and education measures.' },
      { n: 3, f: 'Causes of globalisation', b: 'Trade liberalisation and the WTO; political change; falling transport and communication costs; MNCs; investment flows (FDI); migration; growth of the labour force; structural change.' },
      { n: 4, f: 'Tariff vs import quota', b: 'Tariff: a tax on imports; raises the import price and brings the government revenue.\nQuota: a limit on the quantity imported; restricts supply and raises price but gives no tax revenue.' },
      { n: 5, f: 'Trading blocs: examples and impact', b: 'EU single market, ASEAN, NAFTA. Members gain easier access and scale; outsiders face barriers, so they may invest inside the bloc.' },
    ]),
    ...sub('global-business-edexcel-alevel-business', 'global-markets-and-business-expansion-ybs11', '4.3.2', [
      { n: 1, f: 'Push vs pull factors for going global', b: 'Push: a saturated home market; strong competition at home.\nPull: increased sales and profitability; risk spreading; economies of scale.' },
      { n: 2, f: 'Off-shoring vs outsourcing', b: 'Off-shoring: moving the firm\'s own production abroad.\nOutsourcing: handing the work to another firm.' },
      { n: 3, f: 'Exchange rate appreciation vs depreciation', b: 'Appreciation (stronger currency) makes exports dearer abroad and imports cheaper. Depreciation does the reverse. Example: a 300-dollar bike costs 1,200 zelds at 4 per dollar and 1,500 at 5, up 25%.' },
      { n: 4, f: 'Reasons for global mergers and joint ventures', b: 'Spread risk and gain scale; enter markets or trading blocs; acquire brands or patents; secure supplies; reduce competition; use local knowledge; meet legal requirements; share costs and risks.' },
    ]),
    ...sub('global-business-edexcel-alevel-business', 'global-marketing-ybs11', '4.3.3', [
      { n: 1, f: 'Ethnocentric, polycentric and geocentric marketing', b: 'Ethnocentric: home-market methods applied abroad.\nPolycentric: a different approach tailored to each country.\nGeocentric: a blend of standard and local approaches.' },
      { n: 2, f: 'Glocalisation', b: 'A global brand adapted to local tastes and cultures, for example changing product, packaging or promotion for each market.' },
      { n: 3, f: 'Cultural and social factors in global marketing', b: 'Cultural differences, tastes, language and unintended meanings, and inappropriate branding or promotion.' },
    ]),
    ...sub('global-business-edexcel-alevel-business', 'global-industries-and-companies-ybs11', '4.3.4', [
      { n: 1, f: 'Impact of MNCs on a host economy', b: 'Local: jobs, wages, conditions, local businesses, community and environment.\nNational: growth, FDI, balance of payments, technology and skills transfer, consumers, business culture, tax revenues.' },
      { n: 2, f: 'Ways of controlling MNCs', b: 'Political influence, legal control, consumer pressure, pressure groups, social media, and self-regulation.' },
      { n: 3, f: 'Areas of international business ethics for an MNC', b: 'Stakeholder conflicts, the environment (emissions, waste), supply chain pay and conditions, exploitation (child or forced labour), and marketing (misleading labelling, unsuitable products for vulnerable groups).', src: 'edexcel-a-level-business-ybs11-global-industries-and-companies-revision-notes' },
      { n: 4, f: 'How can an MNC affect a host country\'s balance of payments and tax revenues?', b: 'Exports and import substitution help the balance of payments, but profit outflows and imported components hurt it. Tax revenues rise, though tax holidays and profit shifting reduce them.', src: 'edexcel-a-level-business-ybs11-global-industries-and-companies-revision-notes' },
      { n: 5, f: 'Strengths and limits of legal control and consumer pressure on MNCs', b: 'Legal control sets minimum standards through laws and fines, but enforcement can be weak and countries differ. Consumer pressure rewards ethical brands, but needs information and alternatives.', src: 'edexcel-a-level-business-ybs11-global-industries-and-companies-revision-notes' },
    ]),
  ],
};
