/**
 * D-438 -- flashcards for OxfordAQA International AS and A-level Business,
 * specification 9725 (Version 1.1; first teaching September 2026). The hub's
 * code label is '9625 / 9725', but only 9725 content is carded: points that the
 * Marlbridge notes mark as 9625-only (for example decision trees in 3.1.1.1,
 * co-operatives, the 7Ps, the Boston Matrix at AS) are left out.
 *
 * Topics 1-5 are International AS (sub-sections 3.1.1.1-3.2.3.3); ids are
 * `<sub-section number>-<n>`. Topics 6-16 are International A-level and have
 * no numbered sub-headings, so their cards use topicOnly() and ids
 * `<topic number>-<n>`. Ids are permanent (browser progress is keyed by them):
 * add a new card with the next unused n, never renumber.
 *
 * All cards are authored: the course's revision notes are tagged with the
 * single codes 9725 or 9625, not the hub label '9625 / 9725', so none can be
 * named as a `src` for this deck. Cards follow those notes and their study
 * guides; worked figures are the invented examples used on those pages.
 *
 * Not tiered. Plain text only (see types.ts).
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

/** For a topic that itemises no subtopics: ids are `<topic number>-<n>` and `subtopic` is left out. */
const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, u, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    ...(u ? { tier: 'upper' as const } : {}),
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const T1 = 'what-is-business-oxfordaqa-alevel-business';
const T2 = 'marketing-oxfordaqa-alevel-business';
const T3 = 'operational-performance-oxfordaqa-alevel-business';
const T4 = 'human-resources-oxfordaqa-alevel-business';
const T5 = 'finance-oxfordaqa-alevel-business';
const T6 = 'mission-objective-and-swot-analysis-oxfordaqa-alevel-business';
const T7 = 'analysing-the-existing-internal-position-of-a-business-oxfordaqa-alevel-business';
const T8 = 'analysing-the-industry-environment-oxfordaqa-alevel-business';
const T9 = 'analysing-the-external-environment-oxfordaqa-alevel-business';
const T10 = 'analysing-future-sales-oxfordaqa-alevel-business';
const T11 = 'strategic-options-choosing-markets-and-products-oxfordaqa-alevel-business';
const T12 = 'strategic-positioning-choosing-how-to-compete-oxfordaqa-alevel-business';
const T13 = 'deciding-on-a-strategic-investment-oxfordaqa-alevel-business';
const T14 = 'types-of-strategies-oxfordaqa-alevel-business';
const T15 = 'implementing-a-strategy-oxfordaqa-alevel-business';
const T16 = 'change-risk-and-uncertainty-oxfordaqa-alevel-business';

export const DECK_OXFORDAQA_A_LEVEL_BUSINESS: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'business',
  syllabusCode: '9625 / 9725',
  syllabusSeries: '9725 Version 1.1 (first teaching September 2026; first AS exams May/June 2027, first A-level exams May/June 2028)',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'salman-ahmad', reviewedOn: '2026-11-05' },
  cards: [
    // 1 What is business? (International AS, Unit 1)
    ...sub(T1, 'the-nature-and-purpose-of-business-9725', '3.1.1.1', [
      { n: 1, f: 'Motives and characteristics of entrepreneurs', b: 'Motives: financial and non-financial (for example income, wealth, independence, passion, helping others).\nCharacteristics: risk taker, resilient, hard working, creative, passionate, innovative, adaptable.' },
      { n: 2, f: 'Challenges facing an entrepreneur, and how their role changes as the business grows', b: 'Challenges: raising capital, uncertain demand, cash flow, long hours and personal risk.\nAs the firm grows, the entrepreneur moves from doing everything to delegating and leading strategy.' },
      { n: 3, f: 'Common business objectives, and why objectives are valuable', b: 'Objectives: survival, profit, growth, cash flow and social objectives.\nValue: they give direction, a way to measure success, motivation and a basis for choosing between options.' },
      { n: 4, f: 'SMART objectives (9725 wording)', b: 'Specific, Measurable, Accountable, Realistic, Time specific. To write one: pick a measure, give a target number, add a deadline, name who is responsible and check it is realistic.' },
      { n: 5, f: 'Key elements of a business plan (9725)', b: 'Ownership, objectives, target market and market analysis, competitor analysis, USP and financial analysis.' },
      { n: 6, f: 'Business plans: benefits and limitations', b: 'Benefits: clear thinking, early warning of weaknesses, helps win finance.\nLimitations: time-consuming, forecasts can be wrong, goes out of date.' },
      { n: 7, f: 'Strategy vs tactics; customer vs consumer', b: 'Strategy: a long-term plan. Tactics: short-term actions.\nCustomer: the one who buys. Consumer: the one who uses.' },
    ]),
    ...sub(T1, 'types-of-business-ownership-9725', '3.1.1.2', [
      { n: 1, f: 'Unlimited vs limited liability', b: 'Unlimited: the owner’s personal assets can be used to pay business debts (sole traders, usually partnerships).\nLimited: a shareholder’s loss is capped at the amount they put in (Ltd and plc).' },
      { n: 2, f: 'Sole trader, partnership, private limited company (Ltd) and public limited company (plc)', b: 'Sole trader: one owner, full control and profit, limited finance.\nPartnership: two or more owners, more capital and skills, possible disputes.\nLtd: limited liability, shares sold privately.\nPlc: shares sold to the public; large funds but scrutiny and takeover risk.' },
      { n: 3, f: 'Why is a plc not part of the public sector?', b: 'A plc is owned by private shareholders, not by government, so it is in the private sector. The public sector is owned and run by government.' },
      { n: 4, f: 'Dividend per share, dividend yield and market capitalisation: formulas', b: 'Dividend per share = total dividend ÷ number of shares.\nDividend yield (%) = dividend per share ÷ share price × 100.\nMarket capitalisation = share price × number of shares issued.' },
      { n: 5, f: '2,000,000 shares, total dividend £120,000, share price £1.50. Find the dividend per share, dividend yield and market capitalisation.', b: 'Dividend per share = 120,000 ÷ 2,000,000 = 6p.\nYield = 0.06 ÷ 1.50 × 100 = 4%.\nMarket capitalisation = 1.50 × 2,000,000 = £3,000,000.' },
      { n: 6, f: 'What makes a share price change?', b: 'Profit and forecasts, dividends, the state of the economy, interest rates, rivals’ performance, news, and the demand for and supply of the shares. A fall can bring takeover risk and weaker confidence.' },
      { n: 7, f: 'Internal and external stakeholders (9725)', b: 'Internal: owners and shareholders, employees.\nExternal: customers, suppliers, the community, government and creditors. Their interests can conflict, for example dividends against pay.' },
    ]),
    ...sub(T1, 'the-external-environment-9725', '3.1.1.3', [
      { n: 1, f: 'Market size by volume and by value', b: 'Volume: the number of units sold in the market.\nValue: the sales revenue in the market = volume × average price. A market can grow in volume but shrink in value if prices fall.' },
      { n: 2, f: 'A market sells 250,000 units at 18 cu, then 270,000 units at 17.50 cu. Find the growth in volume and in value.', b: 'Volume growth = 20,000 ÷ 250,000 × 100 = 8.0%.\nValue: 4.5m cu → 4.725m cu, so growth = 0.225 ÷ 4.5 × 100 = 5.0%.\nValue grew more slowly because the average price fell.' },
      { n: 3, f: 'Four firm concentration ratio: definition and example (shares 31%, 22%, 17%, 11%)', b: 'The combined market share of the four largest firms.\n31 + 22 + 17 + 11 = 81%: a few firms hold most of the market.' },
      { n: 4, f: 'Barriers to entry: examples', b: 'Entry costs, legal requirements (licences), specialist knowledge, customer loyalty to existing businesses, and access to resources or distribution. High barriers protect existing firms; low barriers give customers more choice and keener prices.' },
      { n: 5, f: 'Income elasticity of demand (YED): formula, and normal vs inferior goods', b: 'YED = % change in quantity demanded ÷ % change in income.\nNormal good: YED positive (demand rises with income).\nInferior good: YED negative (demand falls as income rises). “Inferior” is about the response to income, not quality.' },
      { n: 6, f: 'YED is −0.4. Income rises 5% and sales are 25,000 units. Find the new sales figure.', b: 'Change in quantity = −0.4 × 5 = −2%.\n25,000 × 0.98 = 24,500 units.' },
      { n: 7, f: 'Saturated market vs dynamic market', b: 'Saturated: most potential buyers already buy, so total sales barely grow and gains come from rivals.\nDynamic: changes fast through new products, technology or tastes, rewarding firms that innovate and adapt.' },
      { n: 8, f: 'Effect of a stronger home currency on a business', b: 'Imports become cheaper and exports dearer abroad, so exporters lose competitiveness and importers gain. A weaker currency does the reverse.' },
    ]),

    // 2 Marketing (International AS, Unit 1)
    ...sub(T2, 'marketing-objectives-and-plans-9725', '3.1.2.1', [
      { n: 1, f: 'The six types of marketing objective (9725)', b: 'Sales volume, sales value, market share, customer retention and repeat sales, sales per product, employee, region, store or customer, and brand loyalty.' },
      { n: 2, f: 'Customer retention rate: formula and example (1,000 customers at the start, 250 gained, 1,150 at the end)', b: 'Retention (%) = (customers at end − new customers) ÷ customers at start × 100.\nRetained = 1,150 − 250 = 900. 900 ÷ 1,000 × 100 = 90%.' },
      { n: 3, f: 'Retention vs repeat sales; and can sales rise while market share falls?', b: 'Retention is the share of customers kept; repeat sales are orders from returning customers.\nYes: sales can rise while share falls if the market grows faster.' },
      { n: 4, f: 'The elements of a marketing plan (9725)', b: 'Marketing objectives, the marketing mix and the marketing budget. A plan turns aims into actions, coordinates departments and lets managers monitor results.' },
      { n: 5, f: 'Return on marketing spending: formula and example (spend 10,000; extra revenue 30,000 at a 50% gross margin)', b: 'Return (%) = (extra profit from the marketing − marketing spend) ÷ marketing spend × 100.\nExtra gross profit = 15,000. (15,000 − 10,000) ÷ 10,000 × 100 = 50%. Not all extra sales may come from the campaign.' },
      { n: 6, f: 'Influences on demand and resource influences on marketing plans (9725)', b: 'Demand: price, income, competition, marketing activities, number of customers, customer preferences.\nResources: the budget, the skills of employees and capacity (do not aim for sales the business cannot supply).' },
    ]),
    ...sub(T2, 'marketing-data-9725', '3.1.2.2', [
      { n: 1, f: 'Primary vs secondary market research', b: 'Primary: new data collected for the purpose (surveys or questionnaires, interviews, focus groups, observations); fits the question but costly and slower.\nSecondary: existing data collected for another purpose (websites and social media, academic journals, government publications, media articles); cheaper and faster but may be dated.' },
      { n: 2, f: 'Focus groups and observation: one strength and one weakness each', b: 'Focus group: gives ideas and reasons; dominant voices and a small group.\nObservation: shows real behaviour; gives no explanation of why.' },
      { n: 3, f: 'Random, stratified and quota sampling', b: 'Random: equal chance for all; unbiased but may miss small groups.\nStratified: groups in proportion, random within each; represents every group.\nQuota: set numbers per group, chosen by the interviewer; quick and cheap but open to interviewer bias.' },
      { n: 4, f: 'A population of 600 is in groups of 300, 200 and 100. How many from each group in a stratified sample of 30?', b: '30 × 300/600 = 15, 30 × 200/600 = 10, 30 × 100/600 = 5.' },
      { n: 5, f: 'Correlation: what does a value of −0.8 mean?', b: 'A strong negative link: as one variable rises the other tends to fall. Values run from −1 to +1; near 0 is weak. Correlation does not prove cause.' },
      { n: 6, f: 'Confidence intervals: effect of sample size and confidence level', b: 'A confidence interval is a range likely to hold the true figure for the whole market. A bigger sample gives a narrower interval; a higher confidence level (99% rather than 95%) gives a wider one.' },
      { n: 7, f: 'What influences the choice of market research method?', b: 'Cost, time required and reliability of findings. A tight budget points to secondary data; a high-risk decision to a larger, careful sample.' },
    ]),
    ...sub(T2, 'segmentation-targeting-and-positioning-9725', '3.1.2.3', [
      { n: 1, f: 'Segmentation, targeting and positioning', b: 'Segmentation: splitting a market into customer groups that share features or wants.\nTargeting: choosing the segment or segments to serve.\nPositioning: the place a product holds in customers’ minds compared with competing products.' },
      { n: 2, f: 'The four segmentation methods in 9725', b: 'Demographic (age, gender, income, occupation, family size), geographic (country, region, urban or rural, climate), psychographic (values, interests, personality) and behavioural (frequency of use, loyalty, occasion, benefits sought). In 9725 income is a demographic variable.' },
      { n: 3, f: 'Niche vs mass marketing', b: 'Niche: a small, specialised segment; often less competition from big firms and higher prices, but reliance on one group.\nMass: one broadly similar offer to a large part of the market; higher growth potential, but costly promotion and heavy competition.' },
      { n: 4, f: 'Premium vs budget positioning', b: 'Premium: high price with a quality or status image; usually lower volume, higher margin per unit.\nBudget: low price, seen as good value (not necessarily poor quality); needs cost control and scale.' },
      { n: 5, f: 'Value of targeting (9725)', b: 'Spending is concentrated where a sale is most likely, the message can be specific and build loyalty, and results can be measured against a defined group. Limits: research cost, a segment may be too small, customers outside the target may be lost.' },
      { n: 6, f: 'Repositioning: reasons and challenges', b: 'Reasons: tastes or incomes have shifted, sales are falling or the brand looks dated, a rival has taken the position, a new segment appears, bad publicity.\nChallenges: cost, alienating existing customers, a new image may not be believed, perceptions change slowly.' },
      { n: 7, f: 'A segment is 30% of a market of 800,000 customers, and a firm expects a 5% share of it. How many customers is that?', b: '800,000 × 30% = 240,000 in the segment.\n240,000 × 5% = 12,000 customers.' },
    ]),
    ...sub(T2, 'the-marketing-mix-9725', '3.1.2.4', [
      { n: 1, f: 'The four elements of the marketing mix in 9725, and why the mix must be integrated', b: 'Product, pricing, promotional mix and distribution (place). The elements should support one positioning for one target market: a consistent message, less wasted spend, harder for rivals to copy.' },
      { n: 2, f: 'The six stages of new product development, in order', b: 'Idea generation, screening, concept testing, business analysis, product testing, launch. Concept testing tests the idea or a description; product testing tests a working prototype.' },
      { n: 3, f: 'The four extension strategies in the specification', b: 'Advertising (reach, but cost), rebranding (fresh image, but may confuse loyal buyers), lowering the price (volume, but lower margin and price-war risk) and adapting the product (new appeal, but development cost).' },
      { n: 4, f: 'Own label brand', b: 'A product sold under the retailer’s own name rather than the manufacturer’s brand. The retailer gains margin and control but takes the reputational risk; the supplier faces price pressure.' },
      { n: 5, f: 'Price rises from £25 to £27 and sales fall from 500 to 470 a month. Calculate PED and the change in revenue.', b: '% change in price = 2 ÷ 25 = +8%; % change in quantity = −30 ÷ 500 = −6%.\nPED = −6 ÷ 8 = −0.75 (inelastic).\nRevenue: £12,500 → 27 × 470 = £12,690, a rise of £190.' },
      { n: 6, f: 'Cross elasticity of demand (XED): formula and interpretation', b: 'XED = % change in quantity demanded of A ÷ % change in price of B.\nPositive: substitutes. Negative: complements.\nExample: a 10% rise in bike prices and 8% fewer locks sold gives −0.8: complements.' },
      { n: 7, f: 'Penetration, skimming, dynamic, premium, going rate and discount pricing', b: 'Penetration: low entry price for share. Skimming: high entry price, cut later. Dynamic: price changes with demand in real time. Premium: above rivals. Going rate: in line with rivals. Discount: below rivals.' },
      { n: 8, f: 'Mark-up vs margin (unit cost £30, 60% mark-up)', b: 'Price = £30 × 1.6 = £48.\nMark-up is profit on cost (60%); margin is profit on price: (48 − 30) ÷ 48 × 100 = 37.5%.' },
      { n: 9, f: 'Wholesaler vs agent vs multi-channel distribution', b: 'Wholesaler: buys and holds stock, reaches many outlets, takes a margin.\nAgent: sells on commission without owning the goods; local knowledge but less control.\nMulti-channel: more customers and spread risk, but channel conflict and higher cost.' },
    ]),

    // 3 Operational performance (International AS, Unit 2)
    ...sub(T3, 'operations-management-9725', '3.2.1.1', [
      { n: 1, f: 'Unit cost: formula and example (fixed costs £6,000, variable cost £2.50 per unit, output 4,000)', b: 'Unit cost = total costs ÷ output, where total costs = fixed costs + variable costs.\nTotal costs = 6,000 + (2.50 × 4,000) = £16,000. 16,000 ÷ 4,000 = £4.00 per unit.' },
      { n: 2, f: 'Capacity and capacity utilisation: definitions and formula', b: 'Capacity: the maximum potential output in a period.\nCapacity utilisation (%) = actual output ÷ maximum potential output × 100. Example: 4,200 ÷ 6,000 × 100 = 70%.' },
      { n: 3, f: 'Labour productivity: formula and example (18 employees produce 7,560 units in a month)', b: 'Labour productivity = output ÷ average number of employees.\n7,560 ÷ 18 = 420 units per employee per month.' },
      { n: 4, f: 'Defects (%) and returned items (%): formulas', b: 'Defects (%) = defective items ÷ items produced × 100 (for example 84 ÷ 3,500 × 100 = 2.4%).\nReturned items (%) = returned items ÷ items sold × 100.' },
      { n: 5, f: 'Job, batch, flow and mass customisation', b: 'Job: one-off, made-to-order; exactly what the customer wants, but high unit cost.\nBatch: moderate volumes in several varieties; downtime between batches.\nFlow: high volumes of a standard product; lowest unit cost but inflexible.\nMass customisation: personalised items at volume; complex, costly systems.' },
      { n: 6, f: 'Labour-intensive vs capital-intensive production', b: 'Labour-intensive: flexible, low capital, but higher labour cost per unit and variable quality.\nCapital-intensive: low unit cost and consistent quality at volume, but expensive and inflexible.' },
    ]),
    ...sub(T3, 'operations-competitiveness-9725', '3.2.1.2', [
      { n: 1, f: 'High vs low capacity utilisation', b: 'High: lower unit cost because fixed costs are spread, but no spare room, no time for maintenance and stressed staff.\nLow: flexibility and room to grow, but high unit cost and a sign of weak demand.' },
      { n: 2, f: 'Make or buy?', b: 'Make: control, quality and protects know-how.\nBuy: cheaper or specialist, needs no capital, but brings dependence and less control.' },
      { n: 3, f: 'Ways of matching supply to demand', b: 'Change output (overtime or idle staff), change inventory (build stock in quiet periods), outsourcing (extra capacity without investment), flexible labour (cost follows demand) and change capacity (long-term fit, but slow and costly).' },
      { n: 4, f: 'The four elements of lean production in the specification', b: 'Just in Time (supplies arrive as needed), Kaizen (continuous small improvements), standardised processes (one best way) and teamwork (shared problem-solving). Needs reliable suppliers and a culture change.' },
      { n: 5, f: 'Quality control vs quality assurance vs TQM', b: 'Quality control: inspect finished output to find faults.\nQuality assurance: build checks into each stage to prevent faults.\nTQM: every employee is responsible for quality.' },
      { n: 6, f: 'Costs of poor quality', b: 'Scrap, rework, refunds, lost customers, damaged reputation and legal claims.' },
      { n: 7, f: 'Ways to improve customer service', b: 'Understand customer needs, improve the customer experience, benchmark, train staff, reward loyalty, and monitor and act on feedback and satisfaction. Good service brings loyalty, repeat business, recommendations and premium prices.' },
    ]),
    ...sub(T3, 'inventory-and-supply-chain-management-9725', '3.2.1.3', [
      { n: 1, f: 'Lead time, buffer stock, re-order level and re-order quantity', b: 'Lead time: from order placed to order received.\nBuffer stock: the safety minimum.\nRe-order level: the inventory level that triggers an order.\nRe-order quantity: the amount ordered.' },
      { n: 2, f: 'Re-order level: formula and example (buffer 300 units, usage 250 a week, lead time 2 weeks)', b: 'Re-order level = buffer stock + (usage per period × lead time) = 300 + (250 × 2) = 800 units.' },
      { n: 3, f: 'Reading an inventory control chart', b: 'The falling line is usage (its slope is the usage rate). The vertical jump is a delivery, equal to the re-order quantity. The horizontal gap between the re-order point and the jump is the lead time.' },
      { n: 4, f: 'JIT vs JIC inventory', b: 'Just in Time: minimal inventory and low storage cost, but risky if a delivery fails.\nJust in Case: large safety stock, so protected, but costly and with a risk of waste.' },
      { n: 5, f: 'Influences on the amount of inventory held', b: 'Predictability of demand, lead time, storage cost, perishability, cash available, and whether the firm uses a JIT or JIC approach.' },
      { n: 6, f: 'Supply chain transparency and third-party accreditation', b: 'Transparency: knowing where inputs come from.\nThird-party accreditation: independent certification of suppliers.\nBoth support ethical claims and protect reputation.' },
    ]),

    // 4 Human resources (International AS, Unit 2)
    ...sub(T4, 'human-resource-objectives-9725', '3.2.2.1', [
      { n: 1, f: 'The three HR objectives named in the specification', b: 'The number and skill level of employees, employee engagement and employee retention.' },
      { n: 2, f: 'HR planning: tools and purpose', b: 'Tools: recruitment, training, redeployment, retention and redundancies. Purpose: match the workforce to the business’s future needs, avoiding skill gaps and overstaffing. It is only as good as the sales forecast behind it.' },
      { n: 3, f: 'The recruitment stages, in order', b: 'Job analysis (what the role involves) → job description (tasks, duties, responsibilities) → person specification (skills, qualifications and qualities needed, used to shortlist fairly).' },
      { n: 4, f: 'Internal vs external recruitment', b: 'Internal: cheaper, quicker, a known candidate, motivates through promotion; but no new ideas and it creates another vacancy.\nExternal: a bigger pool with new ideas and skills; but costlier, slower, riskier and needs a longer induction.' },
      { n: 5, f: 'Induction, on-the-job and off-the-job training', b: 'Induction: for new starters.\nOn the job: while working; cheap and relevant.\nOff the job: away from work; wider skills but costlier.\nRisk of all training: trained staff may leave.' },
      { n: 6, f: 'Zero hours contract: the trade-off', b: 'The business gains flexibility and lower cost, but staff with no guaranteed hours may feel less committed and leave, raising recruitment costs.' },
    ]),
    ...sub(T4, 'human-resource-data-9725', '3.2.2.2', [
      { n: 1, f: 'Labour turnover: formula and example (average 48 staff, 6 leave in a year)', b: 'Labour turnover (%) = leavers in a year ÷ average number of total employees × 100.\n6 ÷ 48 × 100 = 12.5%.' },
      { n: 2, f: 'Percentage of employees still at the business one year after recruitment (60 recruited, 48 still there)', b: 'Recruits still there after one year ÷ number recruited × 100 = 48 ÷ 60 × 100 = 80%.' },
      { n: 3, f: 'Labour cost per unit, and employee costs as % of turnover: formulas', b: 'Labour cost per unit = total labour costs ÷ units of output (for example £84,000 ÷ 12,000 = £7).\nEmployee costs as % of turnover = total employee costs ÷ total revenue × 100 (for example 1.5 ÷ 5 × 100 = 30%).' },
      { n: 4, f: 'Sales per employee and profit per employee (revenue £16m, profit £2m, average 250 employees)', b: 'Sales per employee = total sales revenue ÷ average employees = £64,000.\nProfit per employee = total profit ÷ average employees = £8,000.' },
      { n: 5, f: 'Why must HR data be compared with care?', b: 'Measures such as labour productivity vary by context: labour-intensive services produce less output per employee than automated production. Compare like with like (last year, competitors, a target), and use the average number of employees.' },
    ]),
    ...sub(T4, 'organisational-design-9725', '3.2.2.3', [
      { n: 1, f: 'Span of control and levels of hierarchy; tall vs flat structures', b: 'Span of control: the number of people a manager directly supervises. Levels of hierarchy: the number of management layers.\nTall: many levels, narrow spans. Flat: few levels, wide spans.' },
      { n: 2, f: 'Delegation; centralisation vs decentralisation', b: 'Delegation: passing authority down; accountability stays with the manager.\nCentralisation: decisions made at the top.\nDecentralisation: decisions passed to branches or lower levels.' },
      { n: 3, f: 'Delayering: for and against', b: 'For: lower salary costs, faster communication, more responsibility lower down.\nAgainst: fewer promotion steps, overloaded managers, lost experience, insecurity among remaining staff.' },
      { n: 4, f: 'Employee representation rate', b: 'The share of the workforce represented by a trade union or other employee body.' },
      { n: 5, f: 'Influences on organisational design', b: 'The size of the business, staff skills, the nature of the work, culture, the cost of managers, and the need for consistency versus local responsiveness.' },
    ]),
    ...sub(T4, 'motivation-9725', '3.2.2.4', [
      { n: 1, f: 'Taylor’s view of motivation', b: 'Money motivates, and there is one best way to do a job: piece rate, close supervision and simple tasks. Weakness: it ignores social and esteem needs.' },
      { n: 2, f: 'Maslow’s hierarchy of needs, lowest to highest', b: 'Basic (physiological), safety, social, esteem, self-actualisation. Meet lower needs first, then higher. Weakness: people do not all move up in the same order.' },
      { n: 3, f: 'Herzberg: hygiene factors vs motivators. Is a pay rise a motivator?', b: 'Hygiene factors prevent dissatisfaction; motivators (such as responsibility and recognition) create motivation. A pay rise is a hygiene factor: it removes dissatisfaction but does not give lasting motivation.' },
      { n: 4, f: 'Job enlargement vs job enrichment vs job rotation', b: 'Enlargement: more tasks at the same level.\nEnrichment: more responsibility and more challenging work.\nRotation: moving staff between tasks.' },
      { n: 5, f: 'Delegation vs empowerment', b: 'Delegation passes a task with the authority to do it. Empowerment gives staff the power to decide how to do their work.' },
      { n: 6, f: 'Financial methods of motivation, and how to choose', b: 'Wages, piece rate, commission, salaries, performance-related pay and fringe benefits. Ask whether the method links reward to the output that matters, whether output can be measured, and what it costs.' },
    ]),
    ...sub(T4, 'employer-employee-relations-9725', '3.2.2.5', [
      { n: 1, f: 'Methods of employee involvement, and what affects how much is used', b: 'Consultation, trade unions and employee forums. The extent depends on management style, size, urgency, legislation and staff skills.' },
      { n: 2, f: 'Causes of employer–employee conflict', b: 'Pay, working conditions, job losses, changes to working practices and poor communication.' },
      { n: 3, f: 'Forms of employee action in a dispute', b: 'Withdrawing cooperation, work to rule (obeying every rule to slow work), overtime ban (refusing extra hours), leaving, and strike.' },
      { n: 4, f: 'Bargaining vs arbitration', b: 'Bargaining: the two sides negotiate an agreement themselves.\nArbitration: an independent third party hears both sides and recommends or decides the outcome.' },
      { n: 5, f: 'Consultation vs bargaining', b: 'Consultation: asking employees for their views before deciding.\nBargaining: negotiating an agreement between the two sides.' },
    ]),

    // 5 Finance (International AS, Unit 2)
    ...sub(T5, 'sources-of-finance-9725', '3.2.3.1', [
      { n: 1, f: 'Internal and external sources of finance in the specification', b: 'Internal: retained profits, sale of assets, sale and leaseback, working capital.\nExternal: trade credit, share capital, overdraft, loans, business angels, private equity, crowd funding.' },
      { n: 2, f: 'Sale and leaseback', b: 'Selling an asset, usually property, to raise cash and then leasing it back so the business keeps using it. It raises a large sum but brings ongoing lease payments.' },
      { n: 3, f: 'Business angel vs private equity', b: 'Business angel: an individual backing small or new firms, bringing money plus expertise in return for equity.\nPrivate equity: firms investing larger sums, often taking control and pressing for returns.' },
      { n: 4, f: 'Overdraft vs loan; and why not buy a delivery van with an overdraft?', b: 'Overdraft: short-term and flexible, but expensive and repayable on demand. Loan: a known sum repaid over years.\nA van is a long-term asset, so a loan matches repayments to its life; an overdraft can be withdrawn.' },
      { n: 5, f: 'Share capital and crowd funding: one plus and one minus each', b: 'Share capital: permanent, no interest; but dilutes ownership and control.\nCrowd funding: many backers and it tests demand; but it may fail to reach its target and exposes the idea.' },
      { n: 6, f: 'How to choose a source of finance', b: 'Ask how much is needed, for how long (match short-term needs to short-term sources), whether it can be repaid (uncertain cash flow favours equity), how much control the owners want, and what is available (a start-up has no retained profit).' },
    ]),
    ...sub(T5, 'break-even-analysis-9725', '3.2.3.2', [
      { n: 1, f: 'Contribution per unit and break-even output: formulas', b: 'Contribution per unit = price − variable cost per unit.\nBreak-even output = fixed costs ÷ contribution per unit (round up to a whole unit).' },
      { n: 2, f: 'Price £45, variable cost £27 per unit, fixed costs £54,000. Find break-even output.', b: 'Contribution = 45 − 27 = £18.\nBreak-even = 54,000 ÷ 18 = 3,000 units.' },
      { n: 3, f: 'Margin of safety, and the profit shortcut (actual sales 3,800, break-even 3,000, contribution £18)', b: 'Margin of safety = actual output − break-even output = 800 units.\nAbove break-even, profit = margin of safety × contribution per unit = 800 × 18 = £14,400.' },
      { n: 4, f: 'Reading a break-even chart', b: 'Fixed costs: a horizontal line. Total costs: start at fixed costs, slope = variable cost per unit. Revenue: starts at zero, slope = price. Break-even is where revenue meets total costs; the vertical gap between them is profit or loss.' },
      { n: 5, f: 'Effect on break-even output of: a price rise; higher fixed costs; a fall in variable cost per unit', b: 'Price up: revenue line steeper, break-even falls.\nFixed costs up: cost lines shift up, break-even rises.\nVariable cost down: total cost line flatter, break-even falls.' },
      { n: 6, f: 'Limitations of break-even analysis', b: 'It assumes all output is sold at one price and that costs are straight lines, and it is only as good as the cost estimates.' },
    ]),
    ...sub(T5, 'profit-and-cash-9725', '3.2.3.3', [
      { n: 1, f: 'Gross, operating and net profit', b: 'Gross profit = revenue − cost of sales.\nOperating profit = gross profit − operating expenses.\nNet profit = operating profit − interest − taxes.' },
      { n: 2, f: 'Profit margins: formulas and example (revenue £250,000, gross profit £95,000, operating profit £30,000)', b: 'Each margin = that profit ÷ revenue × 100.\nGross profit margin = 95,000 ÷ 250,000 × 100 = 38%.\nOperating profit margin = 30,000 ÷ 250,000 × 100 = 12%.' },
      { n: 3, f: 'A high gross profit margin but a low operating profit margin. What does this suggest?', b: 'Heavy overheads (operating expenses). If net margin falls while operating margin holds, interest or taxes have risen. Compare margins over time or with rivals, not in isolation.' },
      { n: 4, f: 'Favourable vs adverse variances (budgeted materials £20,000, actual £22,500)', b: 'Variance = actual − budget, labelled by its effect on profit. Revenue above budget or costs below budget: favourable. Revenue below or costs above: adverse.\n22,500 − 20,000 = £2,500 adverse.' },
      { n: 5, f: 'Receivables days and payables days: formulas', b: 'Receivables days = trade receivables ÷ revenue × 365 (for example 18,000 ÷ 219,000 × 365 = 30 days).\nPayables days = trade payables ÷ cost of sales × 365.\nIf receivables days exceed payables days, the firm pays out before it is paid.' },
      { n: 6, f: 'Ways to improve cash flow', b: 'Speed up inflows: debt factoring, shorter customer payment time, early payment incentives, credit checks, better invoice management.\nDelay or cut outflows: longer payment time to suppliers, reducing outgoings. Each has a cost.' },
      { n: 7, f: 'Profit vs cash; profit vs profitability', b: 'Profit is earned when a sale is made; cash arrives when the customer pays.\nProfit is a sum of money; profitability is profit relative to revenue (a margin).' },
    ]),

    // 6 Mission, objective and SWOT analysis (International A-level, Unit 3)
    ...topicOnly(T6, '6', [
      { n: 1, f: 'Mission statement vs objective', b: 'Mission statement: a qualitative statement of a business’s purpose and values, with no numbers and no deadline.\nObjective: a measurable target (best when SMART) that moves the business towards its mission.' },
      { n: 2, f: 'What decides how valuable a mission statement is?', b: 'How specific it is, whether leaders act on it and whether it matches how the business really behaves. A vague or public-relations mission adds little and can breed cynicism.' },
      { n: 3, f: 'Shareholder value vs shareholder returns', b: 'Shareholder value: what the business is worth to its owners; for a plc, measured by market capitalisation.\nShareholder returns: what owners receive, measured by dividend per share and dividend yield (plus any share price rise).' },
      { n: 4, f: 'A plc pays total dividends of £2.16m on 12 million shares priced at £4.00. Find the dividend per share and dividend yield.', b: 'Dividend per share = 2,160,000 ÷ 12,000,000 = £0.18.\nDividend yield = 0.18 ÷ 4.00 × 100 = 4.5%.' },
      { n: 5, f: 'Growth, social and environmental objectives', b: 'Growth: a target for size (revenue, market share, outlets, new markets).\nSocial: a target for the effect on people (fair pay, community projects).\nEnvironmental: a target for the effect on the planet (emissions, waste).' },
      { n: 6, f: 'SWOT: which parts are internal and which external?', b: 'Strengths and weaknesses are internal and largely controllable; opportunities and threats are external and outside the firm’s control. A new low-cost rival is a threat.' },
      { n: 7, f: 'Turning functional data into a strength or weakness', b: 'Calculate the measure, compare it with a benchmark (last year, a rival, the industry or a target), label it and say why, link it to a decision or objective, then weigh it: one figure rarely decides the case.' },
      { n: 8, f: 'Stakeholder mapping: the four responses on the power-interest grid', b: 'High power, high interest: manage closely.\nHigh power, low interest: keep satisfied.\nLow power, high interest: keep informed.\nLow power, low interest: monitor.' },
      { n: 9, f: 'Stakeholder overlap vs conflict', b: 'Overlap: success serves many groups at once (profits fund wages, dividends and supplier orders).\nConflict: one group gains at another’s expense (cost cuts against jobs; expansion against the local environment).' },
      { n: 10, f: 'Influences on a business’s objectives', b: 'Mission and culture, ownership and legal structure, size and age, stakeholder power, the internal position, the external environment and past performance.' },
    ]),

    // 7 Analysis the existing internal position of a business (International A-level, Unit 3)
    ...topicOnly(T7, '7', [
      { n: 1, f: 'Boston Matrix: categories and the usual marketing plan for each', b: 'Star (high growth, high share): hold, keep investing.\nCash cow (low growth, high share): harvest.\nQuestion mark (high growth, low share): build or drop.\nDog (low growth, low share): divest, or keep if it supports other lines.' },
      { n: 2, f: 'Statement of financial position: net assets and capital employed', b: 'Net assets = total assets − total liabilities, which equals total equity (share capital + retained earnings).\nCapital employed = non-current liabilities + total equity.' },
      { n: 3, f: 'ROCE and gearing (operating profit £96,000, non-current liabilities £150,000, total equity £450,000)', b: 'Capital employed = 150,000 + 450,000 = £600,000.\nROCE = 96,000 ÷ 600,000 × 100 = 16%.\nGearing = 150,000 ÷ 600,000 × 100 = 25%.' },
      { n: 4, f: 'Current ratio and acid test ratio (current assets £84,000 including inventory £35,000; current liabilities £56,000)', b: 'Current ratio = 84,000 ÷ 56,000 = 1.5.\nAcid test = (84,000 − 35,000) ÷ 56,000 = 0.875, about 0.88.' },
      { n: 5, f: 'Inventory turnover (cost of sales £279,000, opening inventory £30,000, closing £32,000)', b: 'Inventory turnover = cost of sales ÷ average inventory.\nAverage = (30,000 + 32,000) ÷ 2 = £31,000. 279,000 ÷ 31,000 = 9 times a year.' },
      { n: 6, f: 'Three tests before judging a ratio', b: 'Trend (how it has moved over several years), benchmark (rivals or the industry average) and context (the business environment and the firm’s objectives and strategy).' },
      { n: 7, f: 'Limitations of financial reporting', b: 'It is historic; it leaves out non-financial factors such as staff morale, brand reputation and environmental impact; a year-end statement may not be typical; one-off items distort ratios.' },
      { n: 8, f: 'Profit centre: meaning, value and problems', b: 'A section whose revenue and costs are both recorded, so its profit can be measured. Value: shows performance, motivates managers, supports decisions. Problems: shared overheads split arbitrarily, centres compete, short-term focus, recording cost.' },
      { n: 9, f: 'Should a profit centre that makes a loss after overheads be closed?', b: 'Not automatically. It may still make a positive contribution; closing it loses that contribution unless the shared overheads also go.' },
      { n: 10, f: 'Strong vs weak culture', b: 'Strong: values widely shared, giving consistency and less need for supervision, but resistance to change.\nWeak: values differ between groups, giving inconsistency but flexibility.' },
      { n: 11, f: 'Influences on business culture (specification list), and problems of changing it', b: 'Influences: leadership and employee values, leadership style, mission, reward systems, organisational structure, customer expectations, business size.\nProblems of change: slow, resistance, key staff may leave; fails unless rewards, structure and leaders’ behaviour change too.' },
    ]),

    // 8 Analysing the industry environment (International A-level, Unit 3)
    ...topicOnly(T8, '8', [
      { n: 1, f: 'Porter’s five forces (9725)', b: 'Rivalry, buyer power, supplier power, entry threat and substitute threat. Strong forces mean lower industry profitability; weak forces mean higher.' },
      { n: 2, f: 'What makes rivalry strong?', b: 'Many equal firms, slow market growth, standard products, high fixed costs and barriers to exit. A firm might weaken it by branding, differentiation, a niche focus, or merger or takeover.' },
      { n: 3, f: 'What makes buyer power strong, and how can a firm reduce it?', b: 'Strong if there are few big buyers, a standard product, easy price comparison and cheap switching.\nReduce it by widening the customer base, raising switching costs, adding unique features or selling direct.' },
      { n: 4, f: 'What makes supplier power strong, and how can a firm reduce it?', b: 'Strong if there are few suppliers, a unique input, high switching costs and the firm is a small customer.\nReduce it with multiple suppliers, long contracts, alternative inputs or backward integration.' },
      { n: 5, f: 'Rival vs substitute', b: 'A rival makes the same kind of product; a substitute meets the same need in a different way. A ferry operator’s rival is another ferry; its substitute is a bridge or a flight.' },
      { n: 6, f: 'Switching cost', b: 'The money, time or effort a customer loses by changing supplier. Firms raise it with loyalty schemes, contracts, products that work only with their own parts or software, and service history.' },
      { n: 7, f: 'A dairy sells £2.7m of its £7.5m output to one supermarket group. What share is this, and what does it suggest?', b: '2.7 ÷ 7.5 × 100 = 36%. That buyer has strong power over the dairy’s prices.' },
      { n: 8, f: 'A component costs £2.40 and its only supplier raises the price by 25%. The firm uses 40,000 a year. Find the rise in annual cost.', b: 'New price = 2.40 × 1.25 = £3.00.\nRise = 0.60 × 40,000 = £24,000.' },
      { n: 9, f: 'Five forces vs PESTLE vs SWOT', b: 'Five forces analyses the industry; PESTLE analyses the wider external environment; SWOT combines internal strengths and weaknesses with external opportunities and threats. Five forces and PESTLE feed the O and T of SWOT.' },
      { n: 10, f: 'Limitations of the five forces model', b: 'A snapshot that technology and laws can change quickly; industry boundaries and ratings are judgements; firms in one industry are affected unequally; influencing a force costs time and money. Use it with PESTLE and internal data.' },
    ]),

    // 9 Analysing the external environment to assess opportunities and threats (International A-level, Unit 3)
    ...topicOnly(T9, '9', [
      { n: 1, f: 'PESTLE', b: 'Political, economic, social, technological, legal and environmental factors in the external environment. It gives a structured outward look and early warning and feeds the O and T of SWOT, but dates quickly and does not rank the factors.' },
      { n: 2, f: 'Appreciation vs depreciation of the home currency', b: 'Appreciation makes exports dearer abroad and imports cheaper at home. Depreciation does the reverse. Volatility is unpredictability, not direction, and makes costing and planning harder.' },
      { n: 3, f: 'The rate moves from £1 = ₹108 to £1 = ₹100. A component costs ₹27,000. Find its cost in pounds at each rate.', b: '27,000 ÷ 108 = £250; 27,000 ÷ 100 = £270: an 8% rise. The pound has depreciated (it buys fewer rupees).' },
      { n: 4, f: 'A product sells for £60. The rate moves from £1 = CHF1.10 to £1 = CHF1.04. Find the Swiss franc price at each rate.', b: '60 × 1.10 = CHF66.00; 60 × 1.04 = CHF62.40: a fall of 3.60 ÷ 66 × 100 = 5.45%, so it is cheaper for Swiss buyers.' },
      { n: 5, f: 'A price index rises from 140 to 147. What is the inflation rate?', b: '(147 − 140) ÷ 140 × 100 = 5%. Divide by the earlier index value, not by 100.' },
      { n: 6, f: 'Lower inflation vs deflation; slower growth vs recession', b: 'A lower inflation rate means prices are still rising, only more slowly; deflation means the price index falls.\nSlower growth means GDP still rises; in a recession GDP falls.' },
      { n: 7, f: 'Tariff vs quota vs trade regulation', b: 'Tariff: a tax on imports.\nQuota: a limit on the quantity imported.\nTrade regulation: standards, licences or paperwork. All are forms of protectionism.' },
      { n: 8, f: 'Income tax vs sales tax vs corporation tax: effect on a business', b: 'Income tax: affects disposable income and take-home pay.\nSales tax: affects the shelf price (for example £24 + 20% = £28.80).\nCorporation tax: affects profit after tax, and so funds for dividends and investment.' },
      { n: 9, f: 'Digital vs disruptive technology', b: 'Digital technology improves how firms work. Disruptive technology creates a new product or business model that displaces established ones, often starting as a cheaper, simpler offer.' },
      { n: 10, f: 'Shareholder concept vs stakeholder concept', b: 'Shareholder concept: the firm exists mainly to maximise owners’ returns.\nStakeholder concept: the firm should balance the interests of everyone it affects.' },
      { n: 11, f: 'CSR: arguments for and against', b: 'For: reputation, loyalty, recruitment, investor support, lower long-term risk.\nAgainst: cost and lower short-term profit, benefits hard to measure, risk that claims do not match conduct.' },
      { n: 12, f: 'A firm has £500,000 outstanding on a loan. The interest rate rises from 4% to 5.5%. Find the change in annual interest.', b: '500,000 × 0.04 = £20,000; 500,000 × 0.055 = £27,500.\nAnnual interest rises by £7,500. Use the outstanding balance, not the original loan.' },
    ]),

    // 10 Analysing future sales (International A-level, Unit 3)
    ...topicOnly(T10, '10', [
      { n: 1, f: 'Three period moving average: how it is calculated and where it is placed', b: '(period 1 + period 2 + period 3) ÷ 3, placed against the middle period. Slide the window on one period and repeat. Number of moving averages = number of data periods − 2.' },
      { n: 2, f: 'Weekly orders: 620, 710, 680, 770, 800. Calculate the three period moving averages.', b: 'Week 2: 2,010 ÷ 3 = 670.\nWeek 3: 2,160 ÷ 3 = 720.\nWeek 4: 2,250 ÷ 3 = 750.\nThe raw data fell in week 3, but the trend is upward.' },
      { n: 3, f: 'Forecasting from moving averages: method (moving averages 670, 720, 750 placed at weeks 2–4; forecast week 6)', b: 'Average change = (last MA − first MA) ÷ (number of MAs − 1) = (750 − 670) ÷ 2 = 40.\nForecast = last MA + (periods ahead × average change). Week 6 is 2 periods after week 4: 750 + 80 = 830.' },
      { n: 4, f: 'Forecast error: formula and example (forecast 450 units, actual sales 414)', b: 'Forecast error (%) = (actual − forecast) ÷ forecast × 100.\n(414 − 450) ÷ 450 × 100 = −8%: sales were below forecast.' },
      { n: 5, f: 'Extrapolation: meaning and value', b: 'Extending a past trend into the future, assuming the pattern continues. Quick, cheap and objective; useful short term in a stable market. But blind to new rivals, recessions and shifts in taste, less reliable further ahead, and weak for new products.' },
      { n: 6, f: 'Qualitative forecasting methods', b: 'Expert opinion; the Delphi technique (an anonymous expert panel answering in rounds until views converge); sales force composite (each salesperson estimates their area and the estimates are totalled); hunch or intuition.' },
      { n: 7, f: 'Qualitative forecasting: advantages and disadvantages', b: 'Advantages: works with no past data (new products, start-ups), can anticipate changes, uses staff knowledge of customers.\nDisadvantages: subjective and open to bias (staff on targets may forecast low), hard to check, formal panels take time and money.' },
      { n: 8, f: 'Difficulties of sales forecasting', b: 'Changes in the external environment, competitor moves, one-off events (weather, supply problems, publicity), no data for new products or markets, longer horizons and wider error, and bias or gaps in data.' },
      { n: 9, f: 'Impact of sales forecasts on decisions by function', b: 'Operations: capacity, scheduling, inventory, supplier orders.\nHR: recruitment, training, overtime, temporary staff.\nFinance: budgets, cash flow forecasts, external finance.\nMarketing: promotion, pricing, distribution.' },
      { n: 10, f: 'Over-forecasting vs under-forecasting', b: 'Over-forecasting leaves surplus stock (raising storage costs and tying up cash) and idle staff. Under-forecasting leads to lost sales and stockouts.' },
    ]),

    // 11 Strategic options: choosing markets and products (International A-level, Unit 4)
    ...topicOnly(T11, '11', [
      { n: 1, f: 'Strategy vs tactic', b: 'Strategy: a long-term plan for how a business will achieve its objectives, including which markets it competes in and what products it offers.\nTactic: a short-term action that helps carry out a strategy (a price promotion or an advert).' },
      { n: 2, f: 'The four features of a strategic decision', b: 'Difficult to reverse, high risk, involves significant resources, and usually one-off.' },
      { n: 3, f: 'The Ansoff matrix', b: 'Existing products, existing markets: market penetration (lowest risk).\nExisting products, new markets: market development.\nNew products, existing markets: product development.\nNew products, new markets: diversification (highest risk).' },
      { n: 4, f: 'A business sells its current products to a new customer segment in its home country. Which Ansoff strategy is this?', b: 'Market development: a new segment is a new market. Winning more customers in the same segment would be market penetration.' },
      { n: 5, f: 'Why is diversification usually the highest-risk Ansoff strategy?', b: 'The business has no experience of either the product or the market, so it lacks knowledge, skills and customers, and it usually needs the largest investment. It does spread risk across markets.' },
      { n: 6, f: 'Market penetration and product development: one for and one against each', b: 'Market penetration: cheap, uses known products and customers; but limited by market size and rivals retaliate.\nProduct development: uses brand and customer knowledge; but R&D cost, new products often fail and may cannibalise sales.' },
      { n: 7, f: 'What does the right Ansoff choice depend on?', b: 'Objectives (rapid growth may justify more risk), market conditions (a saturated market weakens penetration), resources (spare capacity, cash, low gearing, skills), competitor response, and return against risk.' },
      { n: 8, f: 'Using SWOT data to choose a strategy', b: 'Calculate the data, compare each figure with a benchmark, classify it (internal figures are S or W; market and environment trends are O or T), favour strategies that use strengths to take opportunities, then judge and state the main limitation.' },
      { n: 9, f: 'The chain from mission to functional decisions', b: 'Mission → corporate objectives → strategy → functional objectives → functional decisions. Functions deliver the strategy, but their limits (cash, skills, capacity) decide which strategies are realistic.' },
      { n: 10, f: 'Reasons for and challenges of changing strategy', b: 'Reasons: new competitors or technology, falling demand, new leaders or objectives, poor results, changes in the economy or law.\nChallenges: cost and time, staff resistance, contracts and assets tied to the old plan, culture and skills may not fit, loss of confidence.' },
    ]),

    // 12 Strategic positioning: choosing how to compete (International A-level, Unit 4)
    ...topicOnly(T12, '12', [
      { n: 1, f: 'Strategic positioning', b: 'The long-term choice of how a business will compete against rivals in its chosen market: the mix of benefits offered and the price charged compared with rivals.' },
      { n: 2, f: 'Market mapping: purpose and method', b: 'A diagram placing competing brands on two axes that matter to customers (for example price and perceived quality). Score each rival, ideally from customer research, plot them, then look for close rivals and gaps.' },
      { n: 3, f: 'Market mapping: limitations', b: 'Only two variables; a gap may have no demand or no profit; perceptions differ by segment and change; maps based on managers’ opinion may be biased.' },
      { n: 4, f: 'Low cost strategy vs differentiation strategy', b: 'Low cost: produce a similar product at lower cost than rivals, then undercut their price or match it for a wider margin.\nDifferentiation: make the product distinct in ways customers value, so it can command a higher price or stronger loyalty.' },
      { n: 5, f: 'Low cost vs low price', b: 'Low cost is about the cost base; low price is a choice the low cost firm may or may not make. Two car washes charge £12: one costs £7.50 per wash (£4.50 margin), a rival costs £6.00 (£6.00 margin).' },
      { n: 6, f: 'Differentiation: advantages and disadvantages', b: 'Advantages: higher unit margin, loyal and less price-sensitive buyers, a brand that is hard to copy.\nDisadvantages: costly to build and keep, customers may not value the extras, features get copied, vulnerable in a recession.' },
      { n: 7, f: 'Competitive advantage: meaning and benefits', b: 'An edge over rivals, from lower costs or greater benefits, that lets the business earn above-average profit or win more customers. Benefits: higher margins, loyalty, bargaining power, profit to reinvest, a base for growth.' },
      { n: 8, f: 'Why is a competitive advantage hard to maintain?', b: 'Rivals imitate or patents expire, tastes change, technology makes a feature standard, new entrants and substitutes arrive, input costs rise, and complacency or loss of key staff.' },
      { n: 9, f: 'A premium valet costs £15 when the market average is £12. Find the price premium.', b: '(15 − 12) ÷ 12 × 100 = 25%. A price above rivals needs benefits customers can see and believe.' },
      { n: 10, f: 'Which benefits-and-price position is least likely to survive in a competitive market?', b: 'Same or fewer benefits at a higher price (overpriced): customers can get as much or more elsewhere for less, so they switch unless they have no choice.' },
    ]),

    // 13 Deciding on a strategic investment (International A-level, Unit 4)
    ...topicOnly(T13, '13', [
      { n: 1, f: 'Decision trees: decision points and chance nodes', b: 'A square is a decision point, where the business chooses between options. A circle is a chance node, where outcomes depend on events outside the firm’s control. Probabilities at one chance node must sum to 1.' },
      { n: 2, f: 'An option costs £30,000. It has a 0.3 chance of £80,000 and a 0.7 chance of £25,000. Find the expected value and net gain.', b: 'EV = (0.3 × 80,000) + (0.7 × 25,000) = 24,000 + 17,500 = £41,500.\nNet gain = 41,500 − 30,000 = £11,500.' },
      { n: 3, f: 'Decision trees: limitations and value', b: 'Limitations: probabilities and outcomes are estimates that may be biased, timing is ignored, few outcomes can be shown, qualitative factors are left out.\nValue: forces managers to list options (including doing nothing), gives a numerical comparison, can test “what if” changes.' },
      { n: 4, f: 'An oven costs £36,000 and returns £12,000, £15,000 and £18,000 in Years 1–3. Find the payback period.', b: 'Cumulative: −24,000 (Year 1), −9,000 (Year 2), +9,000 (Year 3).\nMonths into Year 3 = 9,000 ÷ 18,000 × 12 = 6.\nPayback = 2 years 6 months.' },
      { n: 5, f: 'Average rate of return (ARR) in 9725: formula and example (cost £80,000, total net inflows £104,000 over 5 years)', b: 'ARR = average annual profit ÷ initial investment × 100.\nTotal profit = 104,000 − 80,000 = 24,000; average = 4,800 a year.\nARR = 4,800 ÷ 80,000 × 100 = 6%.' },
      { n: 6, f: 'Net present value (NPV): method and example (invest £20,000; flows £9,000, £9,000, £6,000; 5% factors 0.952, 0.907, 0.864)', b: 'Multiply each year’s flow by its discount factor, add, then subtract the initial investment.\n8,568 + 8,163 + 5,184 = 21,915. NPV = 21,915 − 20,000 = £1,915.' },
      { n: 7, f: 'What does a discount factor of 0.907 for Year 2 mean?', b: '£1 received in two years’ time is worth about £0.907 today at that discount rate. Discount factor for year n at rate r = 1 ÷ (1 + r)ⁿ.' },
      { n: 8, f: 'Payback vs ARR vs NPV: what each measures', b: 'Payback measures speed of return (liquidity). ARR measures profitability but ignores when the cash arrives. NPV allows for the time value of money; positive means the project earns more than the discount rate.' },
      { n: 9, f: 'Risk vs uncertainty in investment decisions', b: 'Risk: outcomes and probabilities can be estimated, so decision trees help.\nUncertainty: outcomes or their chances cannot be measured, so judgement and flexibility matter more than the numbers.' },
      { n: 10, f: 'Factors influencing investment decisions (9725)', b: 'Investment criteria (targets set in advance), non-financial factors, risk, uncertainty, business confidence (low confidence delays projects even with positive NPVs) and opportunity cost (the best alternative use of the funds).' },
    ]),

    // 14 Types of strategies (International A-level, Unit 4)
    ...topicOnly(T14, '14', [
      { n: 1, f: 'Economies of scale named in the specification', b: 'Purchasing (bulk discounts), technical (bigger, more efficient equipment) and financial (cheaper, wider borrowing). They lower unit cost, not necessarily total cost.' },
      { n: 2, f: 'The three diseconomies of scale in the specification', b: 'Control (hard to monitor every part), communication (long chains distort messages) and coordination (sites and departments diverge). They raise unit cost.' },
      { n: 3, f: 'Fixed costs £250,000, variable cost £12 a unit, output 40,000, capacity 50,000. Find the unit cost and capacity utilisation.', b: 'Total cost = 250,000 + (12 × 40,000) = £730,000.\nUnit cost = 730,000 ÷ 40,000 = £18.25.\nCapacity utilisation = 40,000 ÷ 50,000 × 100 = 80%.' },
      { n: 4, f: 'Merger, acquisition, franchising and joint venture', b: 'Merger: two firms agree to combine into one.\nAcquisition (takeover): one firm buys a controlling stake in another.\nFranchising: franchisees pay fees to trade under the brand (fast, low capital, less control).\nJoint venture: two firms set up a jointly owned project.' },
      { n: 5, f: 'Backward vertical, forward vertical, horizontal and conglomerate integration', b: 'Backward vertical: buy a supplier (secures inputs).\nForward vertical: buy a customer or outlet (controls distribution).\nHorizontal: buy a rival at the same stage (share, economies of scale).\nConglomerate: buy into an unrelated industry (spreads risk, little synergy).' },
      { n: 6, f: 'Retrenchment: reasons and problems', b: 'Shrinking deliberately. Reasons: falling demand, losses, overcapacity, diseconomies, need for cash, refocus.\nProblems: redundancy costs, morale, lost skills, reputation, no capacity for a recovery.' },
      { n: 7, f: 'Product innovation vs process innovation', b: 'Product innovation: a new or improved good or service.\nProcess innovation: a new or improved method of production or delivery.' },
      { n: 8, f: 'Patent, copyright and trademark', b: 'Patent: the legal right to stop others making or selling an invention for a limited time.\nCopyright: protects original creative work (software, text, designs).\nTrademark: protects brand names and logos.' },
      { n: 9, f: 'Barriers to innovation', b: 'Cost, risk, short-termism, resistance to change, skills gaps, a risk-averse culture and the risk of copying.' },
      { n: 10, f: 'Methods of entering an international market, from lowest to highest control, cost and risk', b: 'Exporting → licensing or franchising → joint venture → foreign direct investment (FDI).' },
      { n: 11, f: 'Offshoring vs re-shoring', b: 'Offshoring: moving production abroad, mainly for lower costs.\nRe-shoring: bringing it back, for example after foreign wages or shipping costs rise or supply chains fail.' },
      { n: 12, f: 'The Triple Bottom Line', b: 'People, planet and profit: reporting social, environmental and economic performance together. Value: a fuller picture for stakeholders. Limits: hard to measure and open to selective reporting.' },
    ]),

    // 15 Implementing a strategy (International A-level, Unit 4)
    ...topicOnly(T15, '15', [
      { n: 1, f: 'The five factors for successful strategy implementation (9725)', b: 'Resources, quality of planning and monitoring, leadership, communication and external factors. Internal factors can be managed directly; external ones cannot, so monitoring allows a quick response.' },
      { n: 2, f: 'Why must mission, objectives, strategy and functional decisions link?', b: 'Functions pull in one direction, money and people go where the strategy needs them, progress can be measured against targets derived from corporate objectives, and staff see the purpose of change.' },
      { n: 3, f: 'Project management: purpose and value', b: 'Purpose: deliver a defined outcome on time, within budget and to quality.\nValue: breaks strategy into owned tasks, one person is accountable, spending and progress are tracked, risks are spotted early. Drawback: management time and inflexibility.' },
      { n: 4, f: 'Earliest start time (EST) and latest finish time (LFT): how each is found', b: 'EST of a node: the highest of (EST of earlier node + duration) over every arrow in (forward pass).\nLFT of a node: the lowest of (LFT of later node − duration) over every arrow out (backward pass).' },
      { n: 5, f: 'Total float and the critical path', b: 'Total float = LFT at end node − duration − EST at start node.\nThe critical path is the chain of activities with zero total float; it is the longest route and sets the minimum project duration.' },
      { n: 6, f: 'Activity P (4 days) enters node 5 from a node with EST 6; activity R (3 days) from a node with EST 8. Node 5 has LFT 12. Find node 5’s EST and the float on P and R.', b: 'Via P: 6 + 4 = 10; via R: 8 + 3 = 11. EST at node 5 = 11 (the higher).\nFloat on P = 12 − 4 − 6 = 2 days. Float on R = 12 − 3 − 8 = 1 day.' },
      { n: 7, f: 'An activity with 2 days of total float is delayed by 3 days. What happens to the project?', b: 'The delay exceeds the float by 1 day, so the project is extended by 1 day and the critical path may change. A delay no greater than the float leaves the project length unchanged.' },
      { n: 8, f: 'Network analysis: value and limitations', b: 'Value: gives the shortest project time, shows which activities need tight control, float shows where resources can move, supports JIT ordering and monitoring.\nLimitations: durations are estimates, it ignores cost and quality, large networks are slow to update, the critical path can change.' },
      { n: 9, f: 'Strategic drift: meaning and reasons', b: 'A gradual widening gap between what a firm does and what its environment now requires. Reasons: past success breeds complacency, a strong culture resists new ideas, incremental change while the environment shifts sharply, weak scanning, leaders protecting their strategy.' },
      { n: 10, f: 'Why do strategies fail?', b: 'Poor choice (weak analysis, optimistic forecasts), poor implementation (any of the five factors), functional decisions that do not support the strategy, staff resistance, external shocks and strategic drift.' },
    ]),

    // 16 Change, risk and uncertainty (International A-level, Unit 4)
    ...topicOnly(T16, '16', [
      { n: 1, f: 'Internal and external reasons for change', b: 'Internal: a new leader or owner, new objectives or strategy, poor performance, growth beyond current systems, adopting new methods.\nExternal: new technology, competitors’ actions, economic change, new laws, shifts in customer tastes.' },
      { n: 2, f: 'Kotter and Schlesinger: the four reasons for resistance to change', b: 'Self-interest, misunderstanding and lack of trust, inertia, and different assessments of the situation.' },
      { n: 3, f: 'Kotter and Schlesinger: the six ways to overcome resistance', b: 'Education, participation, facilitation, negotiation, manipulation and coercion, running roughly from slow and consensual to fast and forceful. Match the method to the reason for resistance (misunderstanding → education).' },
      { n: 4, f: 'Negotiation and coercion: when used, and the drawback', b: 'Negotiation (incentives such as early-retirement terms): when a powerful group clearly loses; costly and sets a precedent.\nCoercion: when speed matters and managers hold power; causes resentment, demotivation and staff leaving.' },
      { n: 5, f: 'Force field analysis: driving forces score 2 and 5; restraining forces 3, 3 and 2. What does this suggest?', b: 'Driving = 7; restraining = 8. Restraining forces lead by 1, so the change is unlikely to succeed until managers weaken the strongest restraining forces or strengthen the drivers. The scores are subjective.' },
      { n: 6, f: 'Types of business risk in the specification', b: 'Financial (borrowing, liquidity), strategic (new markets or products), operational (breakdowns, supply disruption), compliance (breaking laws), reputational (negative publicity) and cybersecurity (hacking, data theft).' },
      { n: 7, f: 'Methods of managing risk', b: 'Market research, contingency and crisis plans, insurance, diversifying products, markets and suppliers, training, forecasting and cybersecurity measures. Pick one that reduces likelihood or impact and weigh its cost against the damage avoided.' },
      { n: 8, f: 'Risk vs uncertainty, and the tools that suit each', b: 'Risk can be identified and roughly estimated: market research and forecasting suit it. Uncertainty cannot be predicted or measured: scenario planning and agility suit it.' },
      { n: 9, f: 'Contingency plan vs crisis management', b: 'Contingency plan: a prepared response to a specific possible event, written in advance.\nCrisis management: how the business responds while an unexpected, damaging event is unfolding.' },
      { n: 10, f: 'Scenario planning', b: 'Describing several plausible futures and planning a response to each. It prepares the business, but is time-consuming and reality may match no scenario.' },
      { n: 11, f: 'The four ways to develop an agile business (9725)', b: 'A flat organisational structure (faster decisions), empowerment (decisions made close to the problem), transformational leadership (a vision that makes staff welcome change) and cross-functional teams.' },
    ]),
  ],
};
