/**
 * D-438 -- flashcards for Cambridge International AS & A Level Business 9609
 * (for examination in 2026, 2027 and 2028).
 *
 * One block per subtopic, in syllabus order. Topics 1-5 are AS Level; topics
 * 6-10 are A Level only. Card ids are `<subtopic number>-<n>` and are permanent
 * (browser progress is keyed by them): add a new card with the next unused n,
 * never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9609); origin 'revision-notes'.
 *
 * Not tiered. Cards follow Marlbridge's own 9609 revision notes and study guides;
 * worked figures are the invented examples used on those pages.
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

const T1 = 'business-and-its-environment-as-cambridge-alevel-business';
const T2 = 'human-resource-management-as-cambridge-alevel-business';
const T3 = 'marketing-as-cambridge-alevel-business';
const T4 = 'operations-management-as-cambridge-alevel-business';
const T5 = 'finance-and-accounting-as-cambridge-alevel-business';
const T6 = 'business-and-its-environment-a-cambridge-alevel-business';
const T7 = 'human-resource-management-a-cambridge-alevel-business';
const T8 = 'marketing-a-cambridge-alevel-business';
const T9 = 'operations-management-a-cambridge-alevel-business';
const T10 = 'finance-and-accounting-a-cambridge-alevel-business';

const NOPS = 'cambridge-a-level-business-the-nature-of-operations-revision-notes';
const CAP = 'cambridge-a-level-business-capacity-utilisation-and-outsourcing-revision-notes';

export const DECK_CAMBRIDGE_A_LEVEL_BUSINESS: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'a-level',
  subjectSlug: 'business',
  syllabusCode: '9609',
  syllabusSeries: 'For examination in 2026, 2027 and 2028',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'salman-ahmad', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Business and its environment (AS)
    ...sub(T1, 'enterprise-cambridge-alevel-business', '1.1', [
      { n: 1, f: 'The four factors of production', b: 'Land (natural resources, including the site), labour (human effort, physical and mental), capital (man-made resources used in production, and the money used to buy them) and enterprise.' },
      { n: 2, f: 'Enterprise (syllabus wording)', b: 'The ability to seek out and successfully develop business opportunities.' },
      { n: 3, f: 'Value added: formula, and why it is not profit', b: 'Value added = selling price − cost of bought-in materials and services.\nIt is not profit, because wages, rent and other overheads still have to be paid out of it.' },
      { n: 4, f: 'A wallet sells for £14.00. Bought-in leather costs £5.50 and packaging £0.50. Find the value added per wallet and for 2,000 wallets.', b: 'Bought-in cost = £5.50 + £0.50 = £6.00.\nValue added = £14.00 − £6.00 = £8.00 per wallet.\n2,000 × £8.00 = £16,000.' },
      { n: 5, f: 'Opportunity cost', b: 'The value of the next best alternative given up. Name only the single best option forgone, not the option chosen and not a list.' },
      { n: 6, f: 'International business vs multinational business', b: 'International: sells in more than one country.\nMultinational: owns and runs operations in more than one country.\nInternational is about where it sells; multinational is about where it operates.' },
      { n: 7, f: 'Entrepreneur vs intrapreneur', b: 'Entrepreneur: creates a new business and usually bears the financial risk; rewarded by profit and ownership.\nIntrapreneur: acts entrepreneurially inside an existing business; the employer bears the financial risk.' },
      { n: 8, f: 'Risk vs uncertainty', b: 'Risk: outcomes whose likelihood can be estimated, for example from past data (respond with research, insurance, spreading risk).\nUncertainty: outcomes that cannot be reliably predicted (respond with flexibility and contingency plans).' },
      { n: 9, f: 'Business plan: what it is, and its purposes', b: 'A document setting out the intended business and how it will be achieved. It clarifies the idea, guides decisions, sets targets and helps persuade lenders and investors.' },
      { n: 10, f: 'Limitations of a business plan', b: 'Takes time to write, rests on assumptions that may be unreliable, goes out of date, and does not guarantee success or a loan.' },
    ]),
    ...sub(T1, 'business-structure-cambridge-alevel-business', '1.2', [
      { n: 1, f: 'The four economic sectors', b: 'Primary: extracting or growing raw materials.\nSecondary: making and building.\nTertiary: services.\nQuaternary: knowledge and information (research, data, software).' },
      { n: 2, f: 'Public sector vs private sector', b: 'Public sector: owned and controlled by the state, usually providing services.\nPrivate sector: owned by individuals or shareholders, mostly profit-seeking.' },
      { n: 3, f: 'Unlimited vs limited liability', b: 'Unlimited: the owner’s personal assets can be used to pay the business’s debts (sole traders, partnerships).\nLimited: owners can lose only what they invested (private and public limited companies).' },
      { n: 4, f: 'Private limited company vs public limited company', b: 'Both give limited liability. Only a public limited company can sell shares to the general public on a stock exchange, raising large capital but risking takeover and separating control from ownership.' },
      { n: 5, f: 'Franchise vs co-operative', b: 'Franchise: runs on a brand owner’s proven system, paying fees and following its rules.\nCo-operative: run for the benefit of its members; benefits are shared but decisions can be slow.' },
      { n: 6, f: 'Employment in the tertiary sector rises from 38% to 58%. How should the change be described?', b: '58 − 38 = 20 percentage points (not 20%). Use “percentage points” when comparing two shares.' },
    ]),
    ...sub(T1, 'size-of-business-cambridge-alevel-business', '1.3', [
      { n: 1, f: 'Ways to measure business size, and a weakness of each', b: 'Employees: misleading if machines do the work.\nRevenue: ignores profit and assets.\nCapital employed: depends on asset values.\nMarket share: depends on how the market is defined.' },
      { n: 2, f: 'Market share: formula and example (revenue £6m in a £40m market)', b: 'Market share = firm’s sales ÷ total market sales × 100.\n6 ÷ 40 × 100 = 15%.' },
      { n: 3, f: 'Organic vs external growth', b: 'Organic: growth from the business’s own resources (new products, markets, outlets); slower but keeps control.\nExternal: joining with, or buying, another firm (merger or takeover).' },
      { n: 4, f: 'Merger vs takeover', b: 'Merger: two firms agree to combine.\nTakeover: one firm buys control of another; it may be friendly or hostile (the target’s board opposes and the bidder appeals to shareholders).' },
      { n: 5, f: 'Horizontal, vertical backward, vertical forward and conglomerate integration', b: 'Horizontal: same industry, same stage.\nVertical backward: towards a supplier.\nVertical forward: towards customers.\nConglomerate: an unrelated industry.' },
      { n: 6, f: 'Joint venture vs strategic alliance', b: 'Joint venture: creates a shared project or business.\nStrategic alliance: cooperation while the firms stay separate.\nBoth are cheaper and less committing than a merger, but risk disputes and sharing know-how.' },
      { n: 7, f: 'Why do some mergers and takeovers fail?', b: 'Overpaying, culture clash, loss of key staff and diseconomies of scale. Success depends on fit, price and how well the firms are integrated.' },
      { n: 8, f: 'Small businesses: advantages and disadvantages', b: 'Advantages: personal service, flexibility, quick decisions, low overheads.\nDisadvantages: limited finance, few economies of scale, vulnerable to large rivals, owner overload.' },
    ]),
    ...sub(T1, 'business-objectives-cambridge-alevel-business', '1.4', [
      { n: 1, f: 'Put in order from broadest to narrowest: objective, tactics, mission statement, strategy, aim', b: 'Mission statement → aims → objectives → strategy → tactics.' },
      { n: 2, f: 'Mission statement vs objective; aim vs objective', b: 'A mission statement states purpose and values, with no number or deadline; an objective has a measure.\nAn aim is broad and long term; an objective is specific and measurable.' },
      { n: 3, f: 'SMART objectives', b: 'Specific, Measurable, Achievable, Realistic, Time-limited.\n“Improve customer service” fails: it has no figure and no deadline.' },
      { n: 4, f: 'Sales revenue is 250,000 and the objective is a 10% rise. Find the target, and a promotion budget set at 3% of it.', b: 'Target = 250,000 × 1.10 = 275,000.\nBudget = 0.03 × 275,000 = 8,250.\n(A target is a goal figure; a budget is the money plan to reach it.)' },
      { n: 5, f: 'Triple bottom line, and CSR', b: 'Triple bottom line: economic (financial), social and environmental objectives together.\nCSR (corporate social responsibility): accepting responsibilities to society beyond profit.' },
      { n: 6, f: 'Why might a business change its objectives?', b: 'Its stage of development (survival, then growth), boom or recession, competitors, technology or law, new owners or managers, and stakeholder pressure.' },
    ]),
    ...sub(T1, 'stakeholders-in-a-business-cambridge-alevel-business', '1.5', [
      { n: 1, f: 'Stakeholder; and how it differs from a shareholder', b: 'An individual or group with an interest in a business. A shareholder (an owner) is just one kind of stakeholder.' },
      { n: 2, f: 'Internal and external stakeholders: examples', b: 'Internal: owners and shareholders, managers, employees.\nExternal: customers, suppliers, lenders, government, the local community, pressure groups.' },
      { n: 3, f: 'Accountability (to stakeholders)', b: 'Explaining and justifying the business’s actions to those affected by them. It protects trust, even among groups who lose out from a decision.' },
      { n: 4, f: 'Examples of stakeholder conflict', b: 'Pay against profit (employees vs shareholders), price against margin (customers vs owners), growth against the local environment (managers vs community).' },
      { n: 5, f: 'What decides how much influence a stakeholder group has?', b: 'Its power to affect the outcome, not its size. A small local group can have high influence if it can generate publicity or block a plan.' },
      { n: 6, f: 'CSR: possible benefits and costs', b: 'Benefits: reputation and loyalty, easier recruitment and retention, fewer disputes with community or government.\nCosts: higher costs, lower short-term profit, slow and hard-to-measure benefits, risk of accusations of empty claims.' },
    ]),

    // 2 Human resource management (AS)
    ...sub(T2, 'human-resource-management-hrm-cambridge-alevel-business', '2.1', [
      { n: 1, f: 'Labour turnover: formula', b: 'Labour turnover (%) = leavers in the period ÷ average number employed × 100.\nAverage employed = (opening number + closing number) ÷ 2 when only those are given.' },
      { n: 2, f: 'A business has 42 staff at the start of the year and 38 at the end; 9 leave. Calculate labour turnover.', b: 'Average = (42 + 38) ÷ 2 = 40.\nTurnover = 9 ÷ 40 × 100 = 22.5%.' },
      { n: 3, f: 'Workforce planning: how many to recruit? (40 staff now, 46 needed, 15% of current staff expected to leave)', b: 'Staff to recruit = staff needed − staff now + expected leavers.\nLeavers = 15% of 40 = 6.\n46 − 40 + 6 = 12.' },
      { n: 4, f: 'Job description vs person specification', b: 'Job description: describes the job (title, purpose, duties, reporting line, conditions).\nPerson specification: describes the ideal person (qualifications, skills, experience, qualities).' },
      { n: 5, f: 'Internal vs external recruitment', b: 'Internal: cheaper, faster, a known person, motivating; but narrow choice, leaves a gap and brings no fresh ideas.\nExternal: wider choice, new ideas and skills; but dearer, slower and riskier.' },
      { n: 6, f: 'Redundancy vs dismissal', b: 'Redundancy is about the job: the post is no longer needed (voluntary or involuntary).\nDismissal is about the person: fair if there is a valid reason and a proper procedure; unfair if not.' },
      { n: 7, f: 'Induction, on-the-job and off-the-job training', b: 'Induction: settles new starters and covers safety.\nOn-the-job: cheap and practical, but depends on the trainer.\nOff-the-job: expert, wider skills, but costly and work is left undone.' },
      { n: 8, f: 'Trade union and collective bargaining', b: 'Trade union: an organisation of employees formed to protect and advance their interests.\nCollective bargaining: negotiation between employer and union representatives, for all members, on pay, hours and conditions.' },
    ]),
    ...sub(T2, 'motivation-cambridge-alevel-business', '2.2', [
      { n: 1, f: 'Maslow’s hierarchy of needs, lowest to highest', b: 'Physiological, safety, social, esteem, self-actualisation. Find which level is unmet and meet it before offering higher rewards.' },
      { n: 2, f: 'Herzberg: hygiene factors vs motivators', b: 'Hygiene factors prevent dissatisfaction: pay, working conditions, supervision, company policy, job security.\nMotivators create satisfaction: achievement, recognition, responsibility, the work itself, advancement.' },
      { n: 3, f: 'Taylor and Mayo: core claims', b: 'Taylor: money is the main motivator; break jobs into timed tasks and pay by output.\nMayo (Hawthorne studies): attention, belonging and group norms lift output; consult and build teams.' },
      { n: 4, f: 'McClelland’s three needs', b: 'Achievement, affiliation and power. The mix differs by person, so match tasks and rewards to the individual.' },
      { n: 5, f: 'Vroom’s expectancy theory: the formula and an example', b: 'Motivational force = expectancy × instrumentality × valence.\nExpectancy: effort leads to performance. Instrumentality: performance leads to reward. Valence: how much the reward is wanted.\n0.5 × 0.8 × 9 = 3.6. If any term is zero, the force is zero.' },
      { n: 6, f: 'Content vs process theories of motivation', b: 'Content theories explain what motivates (Taylor, Mayo, Maslow, Herzberg, McClelland).\nProcess theories explain how motivation is formed (Vroom).' },
      { n: 7, f: 'Piece rate, commission and profit sharing: one weakness each', b: 'Piece rate: rushing and lower quality.\nCommission: pressure selling and an uncertain income.\nProfit sharing: a weak link to individual effort, because each share depends on the whole firm’s profit.' },
      { n: 8, f: 'Job enrichment vs empowerment vs participation', b: 'Job enrichment: more planning, responsibility and decisions in the job (Herzberg motivators).\nEmpowerment: authority to decide how to do one’s own work.\nParticipation: a say in wider decisions, for example a works council.' },
    ]),
    ...sub(T2, 'management-cambridge-alevel-business', '2.3', [
      { n: 1, f: 'The four traditional functions of management', b: 'Planning, organising, directing and controlling.' },
      { n: 2, f: 'Fayol’s five elements of management', b: 'Planning, organising, commanding, coordinating and controlling. Fayol sets out what managers should do.' },
      { n: 3, f: 'Mintzberg’s three groups of management roles', b: 'Interpersonal (figurehead, leader, liaison), informational (monitor, disseminator, spokesperson) and decisional (entrepreneur, disturbance handler, resource allocator, negotiator). Mintzberg observed what managers actually do: fragmented and reactive work.' },
      { n: 4, f: 'Autocratic, democratic, laissez-faire and paternalistic management', b: 'Autocratic: the manager decides alone (suits a crisis).\nDemocratic: decides after consulting (skilled staff; slow).\nLaissez-faire: staff decide (expert teams; risk of drift).\nPaternalistic: the manager decides but explains, with concern for welfare.' },
      { n: 5, f: 'McGregor’s Theory X and Theory Y', b: 'Theory X manager: assumes people dislike work and avoid responsibility, so uses close control and pay.\nTheory Y manager: assumes people can enjoy work and seek responsibility, so delegates and involves.\nThese are the manager’s beliefs, not facts about staff.' },
      { n: 6, f: 'Output of a line of 16 workers rises from 960 to 1,080 units a day. Find the change in output per worker.', b: '960 ÷ 16 = 60; 1,080 ÷ 16 = 67.5 units per worker.\n(67.5 − 60) ÷ 60 × 100 = 12.5% rise. Check other explanations before crediting the manager.' },
    ]),

    // 3 Marketing (AS)
    ...sub(T3, 'the-nature-of-marketing-cambridge-alevel-business', '3.1', [
      { n: 1, f: 'Marketing objectives vs corporate objectives', b: 'Marketing objectives are targets for the marketing function (market share, brand awareness, a new segment). Corporate objectives are targets for the whole business (profit, growth, survival). Marketing objectives should help achieve the corporate ones.' },
      { n: 2, f: 'Effect on equilibrium price and quantity of: demand rising; supply rising', b: 'Demand up: price rises and quantity rises.\nSupply up: price falls and quantity rises.\n(Demand down: both fall. Supply down: price rises, quantity falls.)' },
      { n: 3, f: 'Product orientation vs customer (market) orientation', b: 'Product orientation: starts with what the firm can make.\nCustomer (market) orientation: starts with what customers want, so it relies on market research.' },
      { n: 4, f: 'A firm sells $12.8m in an $80.0m market; next year $14.4m in an $86.4m market. Find market growth, the firm’s growth and its market share each year.', b: 'Market growth = 6.4 ÷ 80.0 × 100 = 8.0%.\nFirm’s growth = 1.6 ÷ 12.8 × 100 = 12.5%.\nShare: 12.8 ÷ 80.0 = 16.0%, then 14.4 ÷ 86.4 = 16.7%. It grew faster than the market, so it gained share.' },
      { n: 5, f: 'Mass marketing vs niche marketing', b: 'Mass: a large, broad market; volume and economies of scale, but strong rivals and thin margins.\nNiche: a small, specialised market; less competition, loyalty and premium prices possible, but limited size and the risk that large firms enter.' },
      { n: 6, f: 'The three methods of market segmentation in the syllabus', b: 'Geographic (location, climate, urban or rural), demographic (age, gender, income, occupation, family size) and psychographic (lifestyle, values, attitudes, personality). Psychographic data is usually hardest to collect.' },
      { n: 7, f: 'Customer relationship marketing (CRM): aims', b: 'Keep customers, increase repeat purchases, learn about their wants and encourage recommendations. Keeping customers is usually cheaper than winning new ones, but systems, training, rewards and data protection all cost money.' },
    ]),
    ...sub(T3, 'market-research-cambridge-alevel-business', '3.2', [
      { n: 1, f: 'Purposes of market research', b: 'To find out about the market (size, growth, competitors) and customers (characteristics, wants and needs), so as to lower the risk of launching or changing a product.' },
      { n: 2, f: 'Primary vs secondary research', b: 'Primary: new data collected first-hand (surveys, interviews, focus groups, observation, trials); specific and current but slow and costly.\nSecondary: data that already exists (government statistics, trade reports, internal sales records); fast and cheap but may be dated or not fit the question.' },
      { n: 3, f: 'Is a firm’s own sales database primary or secondary research?', b: 'Secondary: the data already exists, collected for another purpose.' },
      { n: 4, f: 'Why sample, and the limitations of sampling', b: 'Questioning the whole population is too costly or slow (and testing may destroy products). Limitations: an unrepresentative sample gives bias, a small sample is less reliable, non-response, and a better sample costs more.' },
      { n: 5, f: 'Quantitative vs qualitative data', b: 'Quantitative: numbers, easy to compare.\nQualitative: opinions and reasons, which explain why.\nPrimary/secondary describes where data comes from, not which kind it is; one survey can give both.' },
      { n: 6, f: 'What makes market research data reliable?', b: 'A large enough and representative sample, neutral questions, a credible source and recent data. Reliability asks whether findings can be trusted; usefulness asks whether they help this decision.' },
    ]),
    ...sub(T3, 'the-marketing-mix-cambridge-alevel-business', '3.3', [
      { n: 1, f: 'Unique selling point (USP)', b: 'A feature of a product that rivals do not offer and that customers value, for example a two-year no-quibble guarantee.' },
      { n: 2, f: 'Product life cycle stages, and extension strategies', b: 'Development, introduction, growth, maturity, decline.\nExtension strategies: new packaging, product modification, new uses, new markets, extra promotion, price changes, new channels.' },
      { n: 3, f: 'Boston Matrix: the four categories', b: 'Star: high share, high growth (invest to keep the lead).\nCash cow: high share, low growth (milk it to fund others).\nQuestion mark: low share, high growth (invest or stop).\nDog: low share, low growth (drop, harvest, or keep to support the range).' },
      { n: 4, f: 'Relative market share: formula and example (own share 8%, largest rival 16%)', b: 'Relative market share = own share ÷ share of the largest rival.\n8 ÷ 16 = 0.5. Above 1 means market leader.' },
      { n: 5, f: 'Boston Matrix vs product life cycle', b: 'The Boston Matrix compares market share and market growth across a whole portfolio at one time. The life cycle follows one product’s sales over time. A cash cow is often mature, but not always.' },
      { n: 6, f: 'Penetration pricing vs price skimming', b: 'Penetration: a low starting price to win market share; suits a new entrant with elastic demand; low early profit.\nSkimming: a high starting price that falls later; suits a novel product with few rivals; recovers development costs quickly.' },
      { n: 7, f: 'Cost-plus pricing: formula, and mark-up vs margin (unit cost £62, 30% mark-up)', b: 'Price = unit cost × (1 + mark-up) = £62 × 1.30 = £80.60.\nMark-up is on cost; margin is on price: 18.60 ÷ 80.60 = 23.1% margin.' },
      { n: 8, f: 'Price discrimination and dynamic pricing', b: 'Price discrimination: different prices to different groups for the same product (needs segments that can be kept apart).\nDynamic pricing: price moves with demand or stock levels (common online; may be seen as unfair).' },
      { n: 9, f: 'Distribution channels: direct, via retailer, via wholesaler', b: 'Direct: keeps the whole price, brand control and data, but the producer bears selling and delivery.\nRetailer: reach and display, but a retailer margin and less control.\nWholesaler then retailer: bulk-breaking and many outlets, but an extra margin.' },
    ]),

    // 4 Operations management (AS)
    ...sub(T4, 'the-nature-of-operations-cambridge-alevel-business', '4.1', [
      { n: 1, f: 'The transformational process', b: 'Inputs (materials, components, labour, machines, energy, finance) are transformed into outputs: a good or a service. Services have a process too.', src: NOPS },
      { n: 2, f: 'Efficiency vs effectiveness', b: 'Efficiency: producing output with the least waste of resources (lower unit costs).\nEffectiveness: achieving the business’s aims and meeting customer needs.' },
      { n: 3, f: 'Labour productivity: formula and example (5,400 units from 30 workers, then 5,880 from 28)', b: 'Labour productivity = output in a period ÷ number of employees.\n5,400 ÷ 30 = 180; 5,880 ÷ 28 = 210 per worker.\nChange = (210 − 180) ÷ 180 × 100 = +16.7%.' },
      { n: 4, f: 'Productivity vs production', b: 'Production is the total output. Productivity is output per input.', src: NOPS },
      { n: 5, f: 'Added value vs profit', b: 'Added value takes off only bought-in inputs. Profit takes off all costs.', src: NOPS },
      { n: 6, f: 'Capital intensive vs labour intensive production', b: 'Capital intensive: low variable cost per unit and consistent quality, but high fixed costs, inflexible, needs high volume.\nLabour intensive: flexible, personal, low fixed costs, but higher cost per unit and variable quality.' },
      { n: 7, f: 'Set-up A: fixed £80,000 + £0.50 per unit. Set-up B: fixed £20,000 + £1.10 per unit. At what output do total costs equal?', b: '80,000 + 0.50Q = 20,000 + 1.10Q, so 60,000 = 0.60Q and Q = 100,000 units. Below this B (lower fixed cost) is cheaper; above it A (lower variable cost) is cheaper.' },
      { n: 8, f: 'Batch vs flow production', b: 'Batch stops and restarts between product types. Flow runs continuously on one standard product.', src: NOPS },
      { n: 9, f: 'Job production vs mass customisation', b: 'Both give the customer something personal. Job is made from scratch each time. Mass customisation assembles from a standard range of parts using flexible systems.', src: NOPS },
    ]),
    ...sub(T4, 'inventory-management-cambridge-alevel-business', '4.2', [
      { n: 1, f: 'The three types of inventory', b: 'Raw materials (inputs not yet used), work in progress (part-finished goods) and finished products (awaiting sale or delivery).' },
      { n: 2, f: 'Lead time, buffer inventory and re-order level', b: 'Lead time: the gap between placing an order and receiving it.\nBuffer inventory: the minimum safety level not to go below.\nRe-order level: the inventory level that triggers a new order.' },
      { n: 3, f: 'Re-order level: formula and example (25 kg a day, lead time 4 days, buffer 60 kg)', b: 'Re-order level = (usage per day × lead time in days) + buffer inventory.\n(25 × 4) + 60 = 160 kg.' },
      { n: 4, f: 'Maximum inventory, when delivery arrives as stock reaches the buffer (buffer 90 units, order 450 units)', b: 'Maximum inventory = buffer inventory + order quantity = 90 + 450 = 540 units. The order quantity changes the maximum, not the re-order level.' },
      { n: 5, f: 'Costs of holding inventory', b: 'Cash tied up (opportunity cost and pressure on cash flow), storage, insurance and security, damage, theft, going out of date or obsolete, and handling time.' },
      { n: 6, f: 'Just in Time (JIT) vs Just in Case (JIC)', b: 'JIT: minimum inventory, small frequent orders; cuts holding costs and waste but production stops if a delivery fails.\nJIC: large buffers to avoid running out; high holding costs and obsolescence.' },
      { n: 7, f: 'When is JIT more likely to suit a business?', b: 'Steady demand and reliable forecasts, dependable nearby suppliers, materials that are bulky, perishable or costly to store, and flexible staff. JIC suits uncertain supply, long lead times or sharp seasonal peaks.' },
      { n: 8, f: 'Supply chain management (SCM)', b: 'Coordinating the flow of materials, information and payments along all the stages and firms from raw material to final customer. Reliable suppliers with short, predictable lead times allow a smaller buffer.' },
    ]),
    ...sub(T4, 'capacity-utilisation-and-outsourcing-cambridge-alevel-business', '4.3', [
      { n: 1, f: 'Capacity utilisation: formula and example (3,150 cases a week, maximum 4,500)', b: 'Capacity utilisation (%) = actual output ÷ maximum possible output × 100.\n3,150 ÷ 4,500 × 100 = 70%.' },
      { n: 2, f: 'Why does unit cost fall as capacity utilisation rises?', b: 'Fixed costs are shared over more units. Fixed costs 90,000, variable cost 5 per unit: at 18,000 units the unit cost is 180,000 ÷ 18,000 = 10.00; at 24,000 units it is 210,000 ÷ 24,000 = 8.75.' },
      { n: 3, f: 'Capacity utilisation versus productivity', b: 'Utilisation compares output with maximum output; productivity compares output with inputs such as labour.', src: CAP },
      { n: 4, f: 'Is 100% capacity utilisation the goal?', b: 'Not automatically: some slack gives room to handle surges and maintenance. Over capacity working brings overtime and repair costs, defects, breakdowns, fatigue and late deliveries.', src: CAP },
      { n: 5, f: 'Ways to improve low capacity utilisation', b: 'Raise output (promotion, new markets or products, contract work for other firms) or reduce capacity by rationalisation (close a line, sell or rent out assets). Reducing capacity shrinks the denominator; raising output grows the numerator.' },
      { n: 6, f: 'Outsourcing: definition, and outsourcing versus buying materials', b: 'Using another business to carry out an activity or process the firm could do itself (for example payroll or delivery). Outsourcing hands over an activity, not just the supply of inputs.', src: CAP },
      { n: 7, f: 'Outsourcing: benefits and drawbacks', b: 'Benefits: lower or predictable cost, specialist skills, focus on core activities, flexibility at peaks.\nDrawbacks: less control of quality and timing, dependence on one supplier, hidden contract and monitoring costs, redundancies, confidentiality risk.' },
      { n: 8, f: 'In-house: fixed cost 30,000 + 2 per unit. A contractor charges 5 per unit. At what volume are the costs equal?', b: 'Break-even volume = fixed cost ÷ (outsourced price − in-house variable cost) = 30,000 ÷ (5 − 2) = 10,000 units. Below this outsourcing is cheaper on cost alone; above it in-house is cheaper.' },
    ]),

    // 5 Finance and accounting (AS)
    ...sub(T5, 'business-finance-cambridge-alevel-business', '5.1', [
      { n: 1, f: 'Why do businesses need finance?', b: 'To start up (premises, equipment, first inventory, costs before revenue arrives), to grow (new site, machinery, new products, takeover) and to survive (pay wages and suppliers when revenue is weak or a customer fails to pay).' },
      { n: 2, f: 'Cash vs profit', b: 'Profit = sales revenue − costs over a period; a credit sale counts when it is made.\nCash is money held and usable now; a credit sale brings no cash until the customer pays. A profitable business can run out of cash.' },
      { n: 3, f: 'Bankruptcy vs liquidation vs administration', b: 'Bankruptcy: an individual (sole trader or partner) cannot pay personal debts.\nLiquidation: the business is closed and its assets sold to pay creditors.\nAdministration: an outside administrator tries to rescue the business or sell it as a going concern.' },
      { n: 4, f: 'Working capital: formula and example (current assets £31,000, current liabilities £22,500)', b: 'Working capital = current assets − current liabilities = £31,000 − £22,500 = £8,500. It is not the same as cash: cash is only one current asset.' },
      { n: 5, f: 'Capital expenditure vs revenue expenditure', b: 'Capital expenditure: spending on non-current assets used for more than a year (machinery, vehicles, buildings).\nRevenue expenditure: spending on day-to-day running (wages, materials, rent, repairs).' },
      { n: 6, f: 'Ways to improve the management of trade receivables', b: 'Set clear credit terms and check customers first, invoice and remind promptly, offer an early-payment discount (weighing its cost), and consider debt factoring, while weighing the risk that strict terms push customers to rivals.' },
    ]),
    ...sub(T5, 'sources-of-finance-cambridge-alevel-business', '5.2', [
      { n: 1, f: 'Internal sources of finance', b: 'Owner’s investment, retained earnings, sale of unwanted assets, sale and leaseback, and working capital.' },
      { n: 2, f: 'Share capital vs debentures', b: 'Share capital: sold to owners; never repaid, but dilutes control and dividends are expected.\nDebentures: a long-term loan with fixed interest and a fixed repayment date; no loss of control.' },
      { n: 3, f: 'Leasing vs hire purchase', b: 'Leasing: renting equipment with no big payment; the asset is never owned.\nHire purchase: paying in instalments with interest added; the asset is owned after the last instalment.' },
      { n: 4, f: 'Bank overdraft vs bank loan', b: 'Overdraft: short term and flexible; interest only on the amount used; can be recalled.\nLoan: a fixed sum for a set period with interest; may need security.' },
      { n: 5, f: 'Debt factoring, venture capital and crowd funding', b: 'Debt factoring: selling unpaid invoices for cash sooner, at less than full value.\nVenture capital: investment in a risky or growing firm for a share of ownership.\nCrowd funding: small sums from many people, usually online.' },
      { n: 6, f: 'A £5,000 overdraft at 15% a year is used for 2 months. Calculate the interest.', b: '£5,000 × 15% × 2/12 = £125. A 12-month loan of £5,000 at 10% would cost £500, so for a two-month need the overdraft fits better.' },
      { n: 7, f: 'Factors in choosing a source of finance', b: 'Cost (interest, fees, dividends), flexibility, control (shares, partners and venture capital share it; loans do not), use (match long-term needs with long-term finance) and existing debt.' },
    ]),
    ...sub(T5, 'forecasting-and-managing-cash-flows-cambridge-alevel-business', '5.3', [
      { n: 1, f: 'Cash flow forecast', b: 'An estimate of the cash a business expects to receive and pay out in future periods, showing the expected balance at the end of each.' },
      { n: 2, f: 'Net cash flow and closing balance: formulas', b: 'Net cash flow = total cash inflows − total cash outflows.\nClosing balance = opening balance + net cash flow.\nThis month’s closing balance becomes next month’s opening balance.' },
      { n: 3, f: 'Opening balance £1,200, inflows £5,400, outflows £6,100. Find the closing balance.', b: '1,200 + 5,400 − 6,100 = £500.' },
      { n: 4, f: 'Where do credit sales and depreciation go in a cash flow forecast?', b: 'Credit sales go in the month the customer pays, not the month of sale. Depreciation is left out: it is an accounting entry, and no cash leaves the business.' },
      { n: 5, f: 'Limitations of cash flow forecasts', b: 'Sales estimates are uncertain (especially for a new business), costs and supplier terms change, customers may pay late or default, managers can be over-optimistic, outside events can outdate it, so it needs regular updating.' },
      { n: 6, f: 'Methods of improving cash flow', b: 'Bring cash in sooner (shorter customer credit, early-payment discount, debt factoring, overdraft, loan), raise cash from assets (sale of assets, sale and leaseback), delay outflows (longer supplier credit, leasing) and reduce outflows (cut costs, lower inventory).' },
      { n: 7, f: 'A factor advances 80% of £10,000 of invoices and charges a 2% fee on invoice value. Find the advance, the fee and the balance paid later.', b: 'Advance = £8,000.\nFee = £200.\nBalance later = 10,000 − 8,000 − 200 = £1,800.' },
    ]),
    ...sub(T5, 'costs-cambridge-alevel-business', '5.4', [
      { n: 1, f: 'Fixed vs variable costs; direct vs indirect costs', b: 'Fixed costs stay the same whatever the output in the short run (rent); variable costs change with output (ingredients).\nDirect costs can be traced to a product; indirect costs (overheads) cannot. A cost can be direct and fixed.' },
      { n: 2, f: 'Average cost and marginal cost', b: 'Average cost = total cost ÷ output.\nMarginal cost = the extra cost of producing one more unit.' },
      { n: 3, f: 'Contribution: per unit and in total', b: 'Contribution per unit = selling price − variable cost per unit.\nTotal contribution = total revenue − total variable costs.\nContribution pays towards fixed costs; profit is what is left after them.' },
      { n: 4, f: 'Break-even output: formula and example (price £9, variable cost £4, fixed costs £12,000)', b: 'Break-even output = fixed costs ÷ contribution per unit.\nContribution = £9 − £4 = £5. £12,000 ÷ £5 = 2,400 units.' },
      { n: 5, f: 'Margin of safety: formula and example (actual output 2,900, break-even 2,400)', b: 'Margin of safety = actual output − break-even output = 500 units.\nAs a percentage of actual output: 500 ÷ 2,900 × 100 = 17.2%.' },
      { n: 6, f: 'Output for a target profit (fixed costs £12,000, target £3,000, contribution £5)', b: '(fixed costs + target profit) ÷ contribution per unit = (12,000 + 3,000) ÷ 5 = 3,000 units.' },
      { n: 7, f: 'Full costing vs contribution costing', b: 'Full costing shares (apportions) fixed costs across products; the basis is a judgement.\nContribution costing does not share fixed costs; it suits one-off decisions such as special orders but can hide long-run losses.' },
      { n: 8, f: 'When should a special order be accepted?', b: 'If the price is above variable cost (positive contribution), spare capacity exists and fixed costs do not rise, after checking non-financial factors such as regular customers expecting the same price.' },
      { n: 9, f: 'Break-even analysis: limitations', b: 'Assumes all output is sold, a constant price and constant unit variable cost, and fixed costs that do not step up; it is based on forecasts and one product only.' },
    ]),
    ...sub(T5, 'budgets-cambridge-alevel-business', '5.5', [
      { n: 1, f: 'Budget, and its purposes', b: 'A financial plan with targets for a future period. Purposes: measure performance, allocate resources, and control and monitor spending.' },
      { n: 2, f: 'Incremental, flexible and zero budgeting', b: 'Incremental: last period plus or minus a percentage (quick, but repeats old inefficiency).\nFlexible: variable items adjusted to actual output (fairer comparison).\nZero: start from £0 and justify every item (challenges spending, but slow).' },
      { n: 3, f: 'Favourable vs adverse variances', b: 'Revenue above budget, or costs below budget: favourable.\nRevenue below budget, or costs above budget: adverse.\nJudge by the effect on profit, not whether the number is bigger.' },
      { n: 4, f: 'Budget: 2,000 covers and £8,000 of food. Actual: 2,400 covers and £9,900 of food. Find the variance.', b: 'Flex the budget: £8,000 ÷ 2,000 = £4 a cover; £4 × 2,400 = £9,600.\nVariance = £9,900 − £9,600 = £300 adverse.' },
      { n: 5, f: 'Benefits and drawbacks of budgets', b: 'Benefits: clear targets, coordination, motivation, early warning.\nDrawbacks: time-consuming, forecast errors, short-term focus, can be rigid.' },
    ]),

    // 6 Business and its environment (A Level)
    ...sub(T6, 'external-influences-on-business-activity-cambridge-alevel-business', '6.1', [
      { n: 1, f: 'Privatisation vs nationalisation', b: 'Privatisation: transfer of a business or industry from government to private ownership.\nNationalisation: transfer from private to government ownership.' },
      { n: 2, f: 'Privatisation: advantages and disadvantages', b: 'Advantages: an efficiency incentive, cash for government, investor capital.\nDisadvantages: unprofitable services may be cut, a private monopoly may form, job losses.' },
      { n: 3, f: 'The three macroeconomic objectives in the syllabus', b: 'Low unemployment, low inflation and economic growth.' },
      { n: 4, f: 'Monetary, fiscal, supply-side and exchange rate policy', b: 'Monetary: interest rates and money supply.\nFiscal: taxes and government spending.\nSupply-side: training, deregulation, incentives (aims at productive capacity).\nExchange rate: actions affecting the currency’s value.' },
      { n: 5, f: 'Effect of a stronger home currency on exporters and importers', b: 'A stronger home currency makes exports dearer abroad and imports cheaper. A weaker currency does the reverse.' },
      { n: 6, f: 'A UK firm buys stock priced at €60,000. Find its cost at €1.25 per £1 and at €1.20 per £1.', b: '60,000 ÷ 1.25 = £48,000.\n60,000 ÷ 1.20 = £50,000.\nThe pound has weakened, so the cost rises by £2,000 (about 4.2%).' },
      { n: 7, f: 'Social audit vs environmental audit', b: 'Social audit: a review of the firm’s social impact and conduct.\nEnvironmental audit: a check of the firm’s environmental impact against targets; used by the firm to find waste and by stakeholders to check its claims.' },
      { n: 8, f: 'Multinationals: possible benefits and drawbacks for a host country', b: 'Benefits: jobs, investment, skills, tax revenue, exports.\nDrawbacks: profit leaving the country, pressure on local firms, environmental harm, loss of control.' },
    ]),
    ...sub(T6, 'business-strategy-cambridge-alevel-business', '6.2', [
      { n: 1, f: 'The three stages of strategic management', b: 'Analysis (where are we? PEST, SWOT, five forces, core competence), choice (which route? Ansoff, blue ocean, decision trees, scenario planning) and implementation (plans, budgets, leadership and control).' },
      { n: 2, f: 'SWOT vs PEST', b: 'SWOT sorts internal strengths and weaknesses and external opportunities and threats.\nPEST scans only outside factors: political, economic, social and technological.\nNeither ranks the factors or makes the decision.' },
      { n: 3, f: 'Porter’s five forces', b: 'Rivalry between existing firms, threat of new entrants, threat of substitutes, bargaining power of buyers, bargaining power of suppliers. Used to judge how attractive an industry is.' },
      { n: 4, f: 'The Ansoff matrix', b: 'Existing product, existing market: market penetration.\nExisting product, new market: market development.\nNew product, existing market: product development.\nNew product, new market: diversification (usually the riskiest).' },
      { n: 5, f: 'Core competence (Prahalad and Hamel) and blue ocean strategy (Kim and Mauborgne)', b: 'Core competence: gives access to many markets, adds to perceived customer benefit and is difficult for rivals to imitate.\nBlue ocean: create an uncontested market by value innovation: eliminate, reduce, raise, create.' },
      { n: 6, f: 'Decision tree: invest £50,000. Success (0.4) pays £200,000; failure pays £20,000. Find the expected value and net gain.', b: 'EV = (0.4 × 200,000) + (0.6 × 20,000) = 80,000 + 12,000 = £92,000.\nNet gain = 92,000 − 50,000 = £42,000. Only net gain subtracts the cost.' },
      { n: 7, f: 'Force field analysis', b: 'Define the change, list driving and restraining forces, score each (for example 1 to 5), total both sides (net = driving − restraining), then plan to weaken the strongest restraining force. The scores are subjective.' },
      { n: 8, f: 'Contingency planning vs crisis management', b: 'Contingency planning: done before an event; prepared responses for named risks.\nCrisis management: the handling of a crisis during and after it, to limit damage and recover.' },
      { n: 9, f: 'Transformational vs transactional leadership', b: 'Transformational: inspires commitment to a vision, with intellectual challenge, attention to individuals and role-model behaviour.\nTransactional: reward and penalty for set tasks.' },
    ]),

    // 7 Human resource management (A Level)
    ...sub(T7, 'organisational-structure-cambridge-alevel-business', '7.1', [
      { n: 1, f: 'Span of control and levels of hierarchy', b: 'Span of control: the number of subordinates reporting directly to one manager.\nLevels of hierarchy: the layers of management from top to bottom. For a given workforce, a wider span means fewer levels.' },
      { n: 2, f: 'How many people are in a four-level hierarchy where every manager, including the top post, has a span of 3?', b: '1 + 3 + 9 + 27 = 40 people.' },
      { n: 3, f: 'Tall (narrow) vs flat structures', b: 'Tall: close control and promotion steps, but slow, costly communication.\nFlat: fast communication and lower cost, but overloaded managers with wide spans.' },
      { n: 4, f: 'Matrix structure: advantage and disadvantage', b: 'Advantage: skills are shared across projects.\nDisadvantage: staff answer to two bosses, which can cause conflict or confusion.' },
      { n: 5, f: 'Delegation and accountability', b: 'Delegation passes the authority for a task down to a subordinate. Ultimate accountability stays with the delegator. Authority is the power to decide; responsibility is the duty to do the task.' },
      { n: 6, f: 'Delegation vs decentralisation', b: 'Delegation passes a task and its authority to one subordinate. Decentralisation spreads decision-making across the whole organisation as a policy.' },
      { n: 7, f: 'Centralisation vs decentralisation', b: 'Centralised: consistency, control, scale economies; but slow, an overloaded top and local needs ignored.\nDecentralised: speed, local knowledge, motivation; but inconsistency, duplication, weaker control.' },
      { n: 8, f: 'Line vs staff functions', b: 'Line: directly produces or sells (operations, sales) and has authority in the chain of command.\nStaff: supports and advises (human resources, finance, IT, legal). Conflict can arise over standard policy versus freedom to hit targets.' },
      { n: 9, f: 'Delayering', b: 'Removing layers of management to cut cost and speed decisions. Weigh the salary saving (less redundancy and retraining costs) against wider spans, lost experience, morale and communication.' },
    ]),
    ...sub(T7, 'business-communication-cambridge-alevel-business', '7.2', [
      { n: 1, f: 'Spoken, written, electronic and visual communication: one strength and weakness each', b: 'Spoken: immediate feedback; no record.\nWritten: permanent record; slow, no instant feedback.\nElectronic: fast, wide reach; overload, impersonal.\nVisual: quick for data; can oversimplify.' },
      { n: 2, f: 'One-way vs two-way communication', b: 'One-way: from sender to receiver with no feedback (a memo).\nTwo-way: the receiver gives feedback and a response (a team meeting with questions).' },
      { n: 3, f: 'Vertical vs horizontal communication', b: 'Vertical: up and down the hierarchy.\nHorizontal: between people at the same level.' },
      { n: 4, f: 'Barriers to effective communication, with a remedy each', b: 'Jargon: plain language. Wrong method: match method to message. Overload: prioritise and summarise. Distance: scheduled video calls. Mistrust: honest, regular updates. Many levels: delayering, direct briefings.' },
      { n: 5, f: 'Informal communication: benefit and risk', b: 'Benefit: speeds information and shows staff concerns.\nRisk: spreads rumour. (Formal communication follows the chain of command.)' },
    ]),
    ...sub(T7, 'leadership-cambridge-alevel-business', '7.3', [
      { n: 1, f: 'The five types of leadership theory in the syllabus', b: 'Trait (leaders are born with personal traits), behavioural (what leaders do; it can be learned), contingency (the best leadership depends on the situation), power and influence, and transformational (inspiring followers to a shared vision).' },
      { n: 2, f: 'The five bases of power', b: 'Legitimate (the position), reward, coercive, expert and referent (personal admiration). Some sources win compliance rather than commitment.' },
      { n: 3, f: 'Goleman’s four competencies of emotional intelligence', b: 'Self-awareness (understands own emotions, strengths and limits), self-management (controls own reactions), social awareness (understands others’ feelings and needs) and social skills (builds relationships, resolves conflict).' },
      { n: 4, f: 'A manager stays calm while handling an angry complaint. Which EQ competency is this?', b: 'Self-management. A leader who ignores signs of stress in the team lacks social awareness instead.' },
      { n: 5, f: 'Leader vs manager', b: 'A leader inspires direction and change; a manager organises resources to meet plans. One person can be both.' },
      { n: 6, f: 'Roles of directors, managers, supervisors and worker representatives', b: 'Directors: strategy, accountable to owners.\nManagers: plans, resources, departments.\nSupervisors: daily work on the front line.\nWorker representatives: the employees’ voice in consultation.' },
    ]),
    ...sub(T7, 'human-resource-management-hrm-strategy-cambridge-alevel-business', '7.4', [
      { n: 1, f: 'Hard HRM vs soft HRM', b: 'Hard HRM: employees as a cost to be controlled; tight targets; flexible, short-term contracts.\nSoft HRM: employees as an asset to be developed; training, involvement and long-term commitment.' },
      { n: 2, f: 'Zero hours and annualised hours contracts', b: 'Zero hours: no guaranteed hours, so no pay when there is no work; but low commitment.\nAnnualised hours: a set number of hours per year, so hours follow demand and overtime falls; but rotas are complex.' },
      { n: 3, f: 'Absenteeism rate: formula and example (80 staff, 250 working days, 800 days lost)', b: 'Absenteeism rate (%) = days lost ÷ days available × 100.\nDays available = 80 × 250 = 20,000. 800 ÷ 20,000 × 100 = 4%.' },
      { n: 4, f: 'An annualised contract is 1,500 hours a year. The busy season uses 36 hours a week for 20 weeks. How many hours a week are left for the 30 quiet weeks?', b: '36 × 20 = 720 hours.\n(1,500 − 720) ÷ 30 = 780 ÷ 30 = 26 hours a week.' },
      { n: 5, f: 'Management by Objectives (MBO): the steps', b: 'Set business objectives, cascade them, agree individual objectives with each employee, provide resources, monitor and review, then reward and reset.' },
      { n: 6, f: 'MBO: when useful, and its limits', b: 'Useful when staff are skilled and trusted and results can be measured. Limits: time-consuming, targets can go out of date, may encourage focus only on what is measured, poorly suited to routine, tightly controlled tasks.' },
      { n: 7, f: 'IT and AI in HRM: uses and risks', b: 'Uses: online applications and automated screening, online training, central records and payroll, performance tracking, chatbots.\nRisks: hidden bias, data security and privacy, staff feeling watched, impersonal service. People decisions still need human oversight.' },
    ]),

    // 8 Marketing (A Level)
    ...sub(T8, 'marketing-analysis-cambridge-alevel-business', '8.1', [
      { n: 1, f: 'Price elasticity of demand (PED): formula and meaning', b: 'PED = % change in quantity demanded ÷ % change in price.\nSize above 1: elastic (quantity reacts more than proportionately). Below 1: inelastic. Equal to 1: unitary (revenue unchanged).' },
      { n: 2, f: 'Price is cut from £10 to £9 and quantity rises from 200 to 250. Calculate PED and the effect on revenue.', b: 'Price −10%, quantity +25%. PED = 25 ÷ −10 = −2.5: elastic.\nRevenue rises from £2,000 to £2,250.' },
      { n: 3, f: 'PED and revenue: what happens when price rises?', b: 'Inelastic demand: a price rise increases revenue (a price cut lowers it).\nElastic demand: a price rise lowers revenue (a price cut raises it).' },
      { n: 4, f: 'Income elasticity of demand (YED): formula and interpretation', b: 'YED = % change in quantity demanded ÷ % change in income.\nAbove 0: normal good (above 1, demand grows faster than income).\nBelow 0: inferior good (demand falls as income rises).' },
      { n: 5, f: 'Promotional elasticity of demand (PromED): formula and example (promotion spending +20%, sales +3%)', b: 'PromED = % change in quantity demanded ÷ % change in promotional spending.\n3 ÷ 20 = +0.15: promotion has a weak effect.' },
      { n: 6, f: 'Limitations of elasticity in decision-making', b: 'Based on past data; assumes other factors stay constant; differs at different prices and sizes of change; depends on data quality; short- and long-run responses differ; rivals may react. Profit also depends on costs, not just revenue.' },
      { n: 7, f: 'Stages of new product development', b: 'Idea generation, screening, concept and business analysis, development (prototypes, R&D), testing (trials or test marketing), launch.' },
      { n: 8, f: 'Research and development (R&D): for and against', b: 'For: new products and longer life cycles, possible patent protection, competitive advantage.\nAgainst: high cost, uncertain results, long payback, hard for small firms to afford.' },
      { n: 9, f: 'Four-period centred moving average: method', b: 'Add four consecutive quarters (moving total); add pairs of consecutive totals; divide by 8 to get the centred trend. Seasonal variation = actual − trend. Forecast = projected trend + average seasonal variation.' },
      { n: 10, f: 'Moving totals 210 and 218; actual sales 47; projected trend 56. Find the centred average, the seasonal variation and the forecast.', b: 'Centred moving average = (210 + 218) ÷ 8 = 53.5.\nSeasonal variation = 47 − 53.5 = −6.5.\nForecast = 56 − 6.5 = 49.5.' },
      { n: 11, f: 'Moving average vs qualitative sales forecasting', b: 'Moving average: based on past sales; suits a stable, seasonal pattern; assumes the past repeats.\nQualitative (expert or sales force opinion, consumer panels, test marketing): suits a new product or sudden change; subjective.' },
    ]),
    ...sub(T8, 'marketing-strategy-cambridge-alevel-business', '8.2', [
      { n: 1, f: 'The contents of a marketing plan', b: 'Objectives, resources, research and the marketing mix. The mix is only one part of the plan.' },
      { n: 2, f: 'Sales £2.4m in a £30m market. Target: 10% share after one year, with market growth of 4%. Find the target sales and the increase needed.', b: 'New market = 30 × 1.04 = £31.2m.\nTarget sales = 10% × 31.2 = £3.12m.\nIncrease = £0.72m, which is 0.72 ÷ 2.4 = 30% on current sales.' },
      { n: 3, f: 'A coordinated marketing strategy must be consistent with which three things?', b: 'The business (objectives, finance, image), the product (and its life-cycle stage) and the market (target segment and competitors). All four Ps must send one message to one target group.' },
      { n: 4, f: 'IT vs AI in marketing', b: 'IT collects, stores and moves data (databases, e-commerce, online adverts). AI analyses it and acts on it (personal recommendations, automatic price changes, demand forecasts, chatbots). Risks: set-up cost, poor data, privacy, loss of personal contact.' },
      { n: 5, f: 'Pan-global marketing vs local differences', b: 'Pan-global: the same product, brand and message worldwide; scale economies and a consistent brand, but may ignore local tastes and rules.\nLocal differences: the mix adapted per market; better fit, but higher cost and a weaker global brand.' },
      { n: 6, f: 'Methods of entering an overseas market: cost, control and risk', b: 'Exporting via an agent: low, low, low.\nLicensing or franchising: low to medium.\nJoint venture: medium cost, shared control, medium risk.\nOwn subsidiary: high, high, high.' },
      { n: 7, f: 'Market A scores 3, 4, 5 on criteria weighted 40, 35, 25. Calculate its weighted score.', b: '(3 × 40) + (4 × 35) + (5 × 25) = 120 + 140 + 125 = 385. The result depends on the weights chosen.' },
    ]),

    // 9 Operations management (A Level)
    ...sub(T9, 'location-and-scale-cambridge-alevel-business', '9.1', [
      { n: 1, f: 'Quantitative vs qualitative location factors', b: 'Quantitative: can be costed, such as wages, rent, freight or grants.\nQualitative: judgements that are hard to cost, such as reputation of the area, owner’s preference, staff morale or quality of life.' },
      { n: 2, f: 'Offshoring vs reshoring', b: 'Offshoring: moving operations (production or services) to another country.\nReshoring: bringing offshored operations back to the home country (for example after overseas wages rise, freight costs grow or quality and lead-time problems appear).' },
      { n: 3, f: 'Offshoring vs outsourcing', b: 'Offshoring is about which country the work is done in. Outsourcing is about who does the work (another business). The two can combine.' },
      { n: 4, f: 'Internal vs external economies of scale', b: 'Internal: from the firm’s own growth: purchasing, technical, financial, marketing, managerial, risk-bearing.\nExternal: from growth of the industry or area, benefiting every firm there: skilled labour pool, supplier clusters, infrastructure.' },
      { n: 5, f: 'Diseconomies of scale: internal and external examples', b: 'Internal: communication and coordination problems, slow decisions, low motivation, duplication.\nExternal: congestion, rising wages and land prices, strained infrastructure, local labour shortage.' },
      { n: 6, f: 'Total cost is 380,000 at 40,000 units and 640,000 at 80,000 units. What happens to unit cost?', b: 'Unit cost = total cost ÷ output.\n380,000 ÷ 40,000 = 9.50; 640,000 ÷ 80,000 = 8.00.\n(8.00 − 9.50) ÷ 9.50 × 100 = −15.8%: economies of scale.' },
      { n: 7, f: 'A relocation costs 450,000 once and saves 90,000 a year. How long until the cost is recovered, and what should be checked?', b: '450,000 ÷ 90,000 = 5 years. Check how long the saving will last (wages, freight and exchange rates change) and add non-financial effects: control, speed, image, staff and risk.' },
    ]),
    ...sub(T9, 'quality-management-cambridge-alevel-business', '9.2', [
      { n: 1, f: 'Quality (operations view)', b: 'Fit for purpose: meeting the specification and customer expectations. It does not mean expensive or luxury.' },
      { n: 2, f: 'Quality control vs quality assurance', b: 'Quality control (QC): inspecting or testing output, or samples, to find faults after the event.\nQuality assurance (QA): setting standards and checking the process throughout, so faults are prevented.' },
      { n: 3, f: 'Total Quality Management (TQM)', b: 'Every employee is responsible for quality, aiming for right first time and zero defects. Workers check their own work, so it reduces the need for inspectors; but training costs and culture change take time.' },
      { n: 4, f: 'Benchmarking', b: 'Comparing performance, processes or products with the best (a rival, a leader in another industry with a similar process, or the best unit inside the business) and using the gap to set targets and make changes.' },
      { n: 5, f: 'Benchmarking: importance and limits', b: 'Importance: shows where the business falls short, sets realistic targets, supports continuous improvement.\nLimits: rival data is hard to obtain, one firm’s method may not suit another, and targets only match the best.' },
    ]),
    ...sub(T9, 'operations-strategy-cambridge-alevel-business', '9.3', [
      { n: 1, f: 'The three kinds of operational flexibility', b: 'Volume, delivery time and specification. Achieved through multi-skilled staff, flexible machines, temporary contracts, outsourcing and spare capacity.' },
      { n: 2, f: 'Enterprise resource planning (ERP)', b: 'Integrated software with one shared database and linked modules (purchasing, inventory, production, sales, finance, HR) giving real-time information. Helps inventory control, costing, capacity use and management information; limits are cost, disruption, training and reliance on accurate data.' },
      { n: 3, f: 'Lean production: aim, and the six strategies', b: 'Aim: minimum waste (materials, time, space, effort, inventory) while meeting customer needs and quality standards.\nStrategies: kaizen, quality circles, simultaneous engineering, cell production, JIT manufacturing, waste management.' },
      { n: 4, f: 'Kaizen, cell production and simultaneous engineering', b: 'Kaizen: continuous small improvements.\nCell production: a team makes a whole product or part.\nSimultaneous engineering: design, testing and planning done in parallel rather than one after another.' },
      { n: 5, f: 'Network diagram: activity, node and dummy activity', b: 'Activity: an arrow with a duration.\nNode: a circle marking the start or end of activities.\nDummy: a dotted arrow with zero duration that shows a dependency.' },
      { n: 6, f: 'Total float and free float: formulas', b: 'Total float = LFT at end − EST at start − duration.\nFree float = EST at end − EST at start − duration.\nThe critical path is the longest route: the activities with zero total float.' },
      { n: 7, f: 'An activity has EST 6 at its start node, duration 4, and an end node with EST 12 and LFT 14. Find total and free float.', b: 'Total float = 14 − 6 − 4 = 4 days.\nFree float = 12 − 6 − 4 = 2 days.' },
      { n: 8, f: 'Critical path analysis: benefits and limitations', b: 'Benefits: shows the minimum project time, the critical activities and where there is slack, so resources can be moved.\nLimits: duration estimates may be wrong, it ignores cost and resources unless added, it is complex for big projects and needs updating.' },
    ]),

    // 10 Finance and accounting (A Level)
    ...sub(T10, 'financial-statements-cambridge-alevel-business', '10.1', [
      { n: 1, f: 'Layout of the statement of profit or loss', b: 'Revenue − cost of sales = gross profit.\nGross profit − expenses = profit from operations (operating profit).\nProfit from operations − taxation = profit for the year.\nProfit for the year − dividends = retained earnings.' },
      { n: 2, f: 'Statement of financial position: meaning and contents', b: 'Assets, liabilities and equity on one date, showing financial strength. Contents: non-current assets, current assets, current liabilities, net current assets, non-current liabilities, net assets, and equity (issued shares + reserves).' },
      { n: 3, f: 'Net realisable value (NRV), and how inventory is valued', b: 'NRV = estimated selling price − costs of selling or finishing. Inventory is valued at the lower of cost and NRV. A write-down lowers inventory and current assets, raises cost of sales and lowers profit.' },
      { n: 4, f: '200 units cost 16 each. They can be sold at 18 after spending 4 each on repairs. Value the inventory.', b: 'NRV = 18 − 4 = 14 per unit, below cost of 16.\nValue = 200 × 14 = 2,800 (cost 3,200), so a write-down of 400.' },
      { n: 5, f: 'Straight-line depreciation: formula and example (cost 30,000, residual value 3,000, life 6 years)', b: 'Annual charge = (cost − residual value) ÷ useful life = (30,000 − 3,000) ÷ 6 = 4,500.\nNet book value after 2 years = 30,000 − 9,000 = 21,000.' },
      { n: 6, f: 'Why does depreciation reduce profit but not cash?', b: 'It spreads the cost of a non-current asset over its useful life as an expense. The cash was paid when the asset was bought, so recording depreciation moves no cash.' },
    ]),
    ...sub(T10, 'analysis-of-published-accounts-cambridge-alevel-business', '10.2', [
      { n: 1, f: 'Current ratio and acid test ratio: formulas and example (current assets 360, inventory 150, current liabilities 240)', b: 'Current ratio = current assets ÷ current liabilities = 360 ÷ 240 = 1.5 : 1.\nAcid test = (current assets − inventory) ÷ current liabilities = 210 ÷ 240 = 0.88 : 1.' },
      { n: 2, f: 'Gross profit margin vs operating profit margin (revenue 2,400, gross profit 900, profit from operations 300)', b: 'Gross profit margin = gross profit ÷ revenue × 100 = 37.5%.\nOperating profit margin = profit from operations ÷ revenue × 100 = 12.5%.\nThe first ignores expenses; the second includes them.' },
      { n: 3, f: 'ROCE: formula and example (issued shares 500, reserves 300, non-current liabilities 200, profit from operations 150)', b: 'ROCE = profit from operations ÷ capital employed × 100.\nCapital employed = issued shares + reserves + non-current liabilities = 1,000.\nROCE = 150 ÷ 1,000 × 100 = 15%.' },
      { n: 4, f: 'Gearing ratio: formula and example (non-current liabilities 200, capital employed 1,000)', b: 'Gearing = non-current liabilities ÷ capital employed × 100 = 200 ÷ 1,000 × 100 = 20%. High gearing raises interest costs and risk.' },
      { n: 5, f: 'Trade receivables turnover and trade payables turnover (days)', b: 'Receivables days = trade receivables ÷ credit sales × 365.\nPayables days = trade payables ÷ credit purchases × 365.\nExample: 150 ÷ 1,825 × 365 = 30 days.' },
      { n: 6, f: 'Rate of inventory turnover: formula and example (cost of sales 1,440, opening inventory 200, closing 280)', b: 'Rate of inventory turnover = cost of sales ÷ average inventory.\nAverage = (200 + 280) ÷ 2 = 240. 1,440 ÷ 240 = 6 times.' },
      { n: 7, f: 'Dividend yield, dividend cover and price/earnings ratio: formulas', b: 'Dividend yield = dividend per share ÷ market price per share × 100.\nDividend cover = profit for the year ÷ annual dividend.\nP/E ratio = market price per share ÷ earnings per share.' },
      { n: 8, f: 'Ways to improve liquidity and to lower gearing', b: 'Liquidity: cut inventory, collect receivables sooner, take longer supplier terms, swap short-term for long-term borrowing, issue shares, sale and leaseback.\nGearing: repay loans, issue shares, retain profit.' },
    ]),
    ...sub(T10, 'investment-appraisal-cambridge-alevel-business', '10.3', [
      { n: 1, f: 'Why do businesses appraise investments?', b: 'Capital projects are large, long-lived and hard to reverse; projects compete for limited funds; appraisal tests a project against objectives and shows which forecasts matter most. It makes risk visible but does not remove it.' },
      { n: 2, f: 'A line costs £70,000. Net inflows: £20,000, £30,000, £30,000, £20,000 in Years 1–4. Find the payback period.', b: 'After Year 2: £50,000. Still needed: £20,000 of Year 3’s £30,000 = 2/3 of a year = 8 months.\nPayback = 2 years 8 months.' },
      { n: 3, f: 'Average rate of return (ARR): formula', b: 'ARR = average profit ÷ average investment × 100.\nAverage profit = (total net cash inflows − total depreciation) ÷ years, where total depreciation = cost − residual value.\nAverage investment is usually (cost + residual value) ÷ 2.' },
      { n: 4, f: 'Cost £70,000, residual value £10,000, total inflows £100,000 over 4 years. Calculate ARR.', b: 'Depreciation = 70,000 − 10,000 = £60,000. Total profit = 100,000 − 60,000 = £40,000; average £10,000 a year.\nAverage investment = (70,000 + 10,000) ÷ 2 = £40,000.\nARR = 10,000 ÷ 40,000 × 100 = 25%.' },
      { n: 5, f: 'Net present value (NPV): method', b: 'Multiply each year’s net cash flow by its discount factor, add them (including any residual value at the end), then subtract the initial cost. The initial cost is paid now (Year 0), so it is not discounted. A positive NPV is worthwhile on this measure.' },
      { n: 6, f: 'Payback, ARR and NPV: one strength and one limitation each', b: 'Payback: simple, shows how soon cash returns; ignores later cash and the time value of money.\nARR: uses all years, a percentage; averaging hides timing.\nNPV: allows for the time value of money; depends on the discount rate chosen.' },
      { n: 7, f: 'Qualitative factors in an investment decision', b: 'Strategic fit, effect on employees, brand and reputation, environmental impact, reliability of the forecasts, competitors’ reactions, flexibility and the method of funding.' },
    ]),
    ...sub(T10, 'finance-and-accounting-strategy-cambridge-alevel-business', '10.4', [
      { n: 1, f: 'Contents of an annual report', b: 'The financial statements and notes, a directors’ or chair’s report, and an auditor’s report.' },
      { n: 2, f: 'Which accounting information do different stakeholders want?', b: 'Shareholders: profit and dividends. Lenders: gearing and ability to pay interest. Suppliers: liquidity. Employees: security. Managers: performance against targets.' },
      { n: 3, f: 'Effect on ratios of raising funds with debt vs with new shares', b: 'Debt: gearing rises; interest rises, so profit for the year and dividend cover fall. ROCE is unaffected by the interest because it uses profit from operations.\nNew shares: gearing falls; ownership is diluted.' },
      { n: 4, f: 'A company halves its dividend. What happens to dividend cover and dividend yield?', b: 'Dividend cover doubles (for example 2.0 to 4.0) and dividend yield halves (for example 6.0% to 3.0%), at an unchanged share price. Reserves rise.' },
      { n: 5, f: 'Large capital spending: likely effect on ROCE', b: 'Capital employed rises at once, so ROCE falls until the returns from the investment arrive.' },
      { n: 6, f: 'Limitations of published accounts and ratio analysis', b: 'Historical data, different accounting policies, window dressing, inflation, seasonality, differences between sectors and business models, no non-financial information, and a single ratio can mislead.' },
    ]),
  ],
};
