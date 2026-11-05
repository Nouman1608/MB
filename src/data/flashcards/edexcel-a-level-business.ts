/**
 * D-438 -- flashcards for Pearson Edexcel International A Level Business YBS11
 * (Issue 1, September 2017).
 *
 * One block per subtopic, in syllabus order; Units 3 and 4 list no subtopics in
 * the syllabus record, so their cards sit on the topic (topicOnly helper). Card
 * ids are `<subtopic number>-<n>` (or `<topic number>-<n>`) and are permanent
 * (browser progress is keyed by them): add a new card with the next unused n,
 * never renumber.
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

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, src }) => ({
    id: `${number}-${n}`,
    topic,
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
  updated: '2026-11-05',
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
    // Unit 3 Business decisions and strategy (no subtopics in the record)
    ...topicOnly('business-decisions-and-strategy-edexcel-alevel-business', '3', [
      { n: 1, f: 'Ansoff\'s Matrix: the four strategies, by risk', b: 'Market penetration (existing products, existing markets) is lowest risk; market development (existing products, new markets); product development (new products, existing markets); diversification (new products, new markets) is highest risk.' },
      { n: 2, f: 'Porter\'s Strategic Matrix (generic strategies)', b: 'Cost leadership, differentiation, cost focus and differentiation focus. A firm competes either on cost or on difference, across a broad market or a narrow focus.' },
      { n: 3, f: 'Porter\'s five forces', b: 'Rivalry among competitors, threat of new entrants, threat of substitutes, buyer power, supplier power. Example: few large buyers → high buyer power, prices squeezed.' },
      { n: 4, f: 'Organic vs inorganic growth', b: 'Organic: new products, markets, outlets or capacity; slow but controlled and keeps the culture.\nInorganic: merger (agreed combination) or takeover (buying control); fast but costly and risky.' },
      { n: 5, f: 'Horizontal, vertical and conglomerate integration', b: 'Horizontal: same stage, same industry.\nVertical: forward (towards customers) or backward (towards suppliers).\nConglomerate: unrelated industries; spreads risk.' },
      { n: 6, f: 'Payback: formula, with an example', b: 'Full years + (cost still to recover ÷ cash flow in the payback year). Cost 60,000; inflows 15,000, 25,000, 30,000: after 2 years 40,000 recovered; 20,000 ÷ 30,000 = 0.67 → 2.67 years.' },
      { n: 7, f: 'Average rate of return (ARR): formula, with an example', b: '(Total net return − cost) ÷ years ÷ cost × 100. Cost 60,000, total inflows 90,000 over 4 years: 30,000 ÷ 4 = 7,500; 7,500 ÷ 60,000 × 100 = 12.5%.' },
      { n: 8, f: 'Net present value (NPV)', b: 'Sum of (each cash flow × its discount factor) − initial cost. A positive NPV supports investing, but depends on the discount rate and forecasts. Trap: giving the PV total without subtracting the cost.' },
      { n: 9, f: 'Decision tree: method and limitations', b: 'Work right to left: expected value (EV) = Σ(probability × outcome) at each chance node, subtract the option\'s cost, choose the highest net EV. Example: 0.7 × 80 + 0.3 × 20 = 62; minus cost 30 = 32. Limits: subjective probabilities, money only.' },
      { n: 10, f: 'Critical path analysis: total float', b: 'Total float = LFT at end node − EST at start node − duration. Example: 12 − 4 − 5 = 3 days. Activities with zero float are on the critical path. Forward pass takes the larger EST where paths merge.' },
      { n: 11, f: 'Gearing and ROCE', b: 'Capital employed = non-current liabilities + total equity.\nGearing = non-current liabilities ÷ capital employed × 100.\nROCE = operating profit ÷ capital employed × 100.' },
      { n: 12, f: 'Stakeholder model vs shareholder model', b: 'Stakeholder model: decisions consider all stakeholders (staff, customers, community…).\nShareholder model: decisions focus on share price and dividends for owners.' },
      { n: 13, f: 'Four types of organisational culture', b: 'Power, role, task and person cultures. Culture is formed by founders, history, leadership and structure, and is hard to change because of habit and resistance.' },
      { n: 14, f: 'Business continuity and succession planning', b: 'Ways to mitigate risks such as natural disasters, IT systems failure and loss of key staff. Continuity planning keeps the business running in a crisis; succession planning prepares people to replace key staff.' },
    ]),
    // Unit 4 Global business (no subtopics in the record)
    ...topicOnly('global-business-edexcel-alevel-business', '4', [
      { n: 1, f: 'Developed, developing and emerging economies', b: 'Developed: high income per head, services-led, strong infrastructure.\nDeveloping: low income per head, more agriculture, weaker infrastructure.\nEmerging: fast growth, industrialising, opening up to trade.' },
      { n: 2, f: 'GDP, GDP per capita and HDI', b: 'GDP: value of output in a period. GDP per capita = GDP ÷ population (45bn dollars ÷ 9m people = 5,000 dollars).\nHDI combines income with health and education measures.' },
      { n: 3, f: 'Causes of globalisation', b: 'Trade liberalisation and the WTO; political change; falling transport and communication costs; MNCs; investment flows (FDI); migration; growth of the labour force; structural change.' },
      { n: 4, f: 'Tariff vs import quota', b: 'Tariff: a tax on imports; raises the import price and brings the government revenue.\nQuota: a limit on the quantity imported; restricts supply and raises price but gives no tax revenue.' },
      { n: 5, f: 'Trading blocs: examples and impact', b: 'EU single market, ASEAN, NAFTA. Members gain easier access and scale; outsiders face barriers, so they may invest inside the bloc.' },
      { n: 6, f: 'Push vs pull factors for going global', b: 'Push: a saturated home market; strong competition at home.\nPull: increased sales and profitability; risk spreading; economies of scale.' },
      { n: 7, f: 'Off-shoring vs outsourcing', b: 'Off-shoring: moving the firm\'s own production abroad.\nOutsourcing: handing the work to another firm.' },
      { n: 8, f: 'Exchange rate appreciation vs depreciation', b: 'Appreciation (stronger currency) makes exports dearer abroad and imports cheaper. Depreciation does the reverse. Example: a 300-dollar bike costs 1,200 zelds at 4 per dollar and 1,500 at 5, up 25%.' },
      { n: 9, f: 'Reasons for global mergers and joint ventures', b: 'Spread risk and gain scale; enter markets or trading blocs; acquire brands or patents; secure supplies; reduce competition; use local knowledge; meet legal requirements; share costs and risks.' },
      { n: 10, f: 'Ethnocentric, polycentric and geocentric marketing', b: 'Ethnocentric: home-market methods applied abroad.\nPolycentric: a different approach tailored to each country.\nGeocentric: a blend of standard and local approaches.' },
      { n: 11, f: 'Glocalisation', b: 'A global brand adapted to local tastes and cultures, for example changing product, packaging or promotion for each market.' },
      { n: 12, f: 'Cultural and social factors in global marketing', b: 'Cultural differences, tastes, language and unintended meanings, and inappropriate branding or promotion.' },
      { n: 13, f: 'Impact of MNCs on a host economy', b: 'Local: jobs, wages, conditions, local businesses, community and environment.\nNational: growth, FDI, balance of payments, technology and skills transfer, consumers, business culture, tax revenues.' },
      { n: 14, f: 'Ways of controlling MNCs', b: 'Political influence, legal control, consumer pressure, pressure groups, social media, and self-regulation.' },
    ]),
  ],
};
