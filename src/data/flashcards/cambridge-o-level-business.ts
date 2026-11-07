/**
 * D-444 -- flashcards for Cambridge O Level Business Studies 7115 (2026).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 7115); origin 'revision-notes'.
 *
 * Not tiered, so no card is marked upper tier. Worked figures follow Marlbridge's
 * own 7115 revision notes; all businesses are invented. Plain text only (see types.ts).
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

const BAC = 'business-activity-and-classification-revision-notes';
const EGS = 'o-level-business-enterprise-business-growth-and-size-revision-notes';
const OAM = 'o-level-business-organisation-and-management-revision-notes';

export const DECK_CAMBRIDGE_O_LEVEL_BUSINESS: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'o-level',
  subjectSlug: 'business',
  syllabusCode: '7115',
  syllabusSeries: '2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'salman-ahmad', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Understanding business activity
    ...sub('understanding-business-activity', 'business-activity', '1.1', [
      { n: 1, f: 'Needs and wants', b: 'A need is something essential for survival, such as food and shelter.\nA want is something desired but not essential, such as a particular brand or a luxury item.' },
      { n: 2, f: 'Scarcity', b: 'The basic economic condition that resources are limited compared with unlimited wants. It is why every choice has an opportunity cost.' },
      { n: 3, f: 'Opportunity cost', b: 'The next best alternative given up when a choice is made. Only the single next best alternative counts.' },
      { n: 4, f: 'Specialisation, and one drawback', b: 'An individual, business or region concentrates on a narrow range of goods or services. Output and efficiency tend to rise, but it creates interdependence: the producer relies on others for everything it does not make.' },
      { n: 5, f: 'Added value', b: 'Added value = selling price − cost of bought-in inputs.\nIt is not profit, because rent, wages and other costs still have to be paid from it.' },
      { n: 6, f: 'A loaf sells for $2.10 and its ingredients cost $0.60. What is the added value?', b: '2.10 − 0.60 = $1.50 per loaf.' },
      { n: 7, f: 'Ways to add value without simply raising the price', b: 'Branding, better quality, convenience, design, after-sales service, speed, attractive packaging.' },
    ]),
    ...sub('understanding-business-activity', 'classification-of-businesses', '1.2', [
      { n: 1, f: 'Primary, secondary and tertiary sectors', b: 'Primary: extracting natural resources (farming, mining, fishing).\nSecondary: making goods from raw materials (manufacturing, construction).\nTertiary: providing services (retail, banking, transport).' },
      { n: 2, f: 'Classify an oil refinery, a fishing boat and a call centre', b: 'Oil refinery: secondary.\nFishing boat: primary.\nCall centre: tertiary.' },
      { n: 3, f: 'How does the balance of sectors change as an economy develops?', b: 'It shifts from primary towards secondary and then tertiary. Developed economies have a large tertiary sector; a decline in the secondary sector is called deindustrialisation.' },
      { n: 4, f: 'Private sector', b: 'Owned by individuals, with a profit motive.', src: BAC },
      { n: 5, f: 'Public sector', b: 'Owned by government; provides essential services and may run at a loss for social benefit.', src: BAC },
      { n: 6, f: 'Is the public sector the same as a public limited company?', b: 'No. The public sector is owned by the government. A public limited company is a private sector business owned by shareholders.' },
    ]),
    ...sub('understanding-business-activity', 'enterprise-business-growth-and-size', '1.3', [
      { n: 1, f: 'Characteristics of successful entrepreneurs', b: 'Willing to take calculated risks, self-motivated and determined, creative or innovative, organised and able to decide under pressure, good with people, and resilient.' },
      { n: 2, f: 'How does a business plan help an entrepreneur?', b: 'It helps raise finance, gives targets to compare results against, shows up weaknesses early, and reduces the chance of costly surprises.' },
      { n: 3, f: 'Why and how do governments support business start-ups?', b: 'Why: more jobs, more output, more tax revenue and more competition.\nHow: grants, training schemes, advice and cheaper loans.' },
      { n: 4, f: 'Methods of measuring business size, and what is not one', b: 'Number of people employed, value of output, and capital employed.\nProfit is not a measure of size: it shows performance.' },
      { n: 5, f: 'Internal (organic) and external growth', b: 'Internal: using the business’s own resources (new products, outlets, selling online); slower, lower risk, easier to control.\nExternal: merger (two firms agree to combine) or takeover (one firm buys control of another); faster but costly.' },
      { n: 6, f: 'Why do some businesses remain small?', b: 'Demand is limited to a small or local niche, the owner wants a manageable workload and full control, finance is hard to get, the owner wants to avoid risk, or personal service would be lost.' },
      { n: 7, f: 'Business failure cause: lack of management skills', b: 'Poor decisions on pricing, stock or hiring, and weak financial control.', src: EGS },
      { n: 8, f: 'Business failure cause: liquidity problems', b: 'Not enough cash to pay bills when due, even if the business makes a profit on paper.', src: EGS },
      { n: 9, f: 'Business failure cause: changes in the business environment', b: 'New competitors, changing tastes, higher costs, recession and new technology.', src: EGS },
    ]),
    ...sub('understanding-business-activity', 'types-of-business-organisation', '1.4', [
      { n: 1, f: 'Limited and unlimited liability', b: 'Limited liability: an owner can lose only the amount invested in the business.\nUnlimited liability: an owner is personally responsible for all the business’s debts.' },
      { n: 2, f: 'Unincorporated business and limited company', b: 'Unincorporated (sole traders, partnerships): the business and owner are treated as one, with unlimited liability.\nLimited company: a separate legal entity owned by shareholders, with limited liability.' },
      { n: 3, f: 'Sole trader and partnership: main strengths and weaknesses', b: 'Sole trader: full control and all the profit, but unlimited liability, little capital and a heavy workload.\nPartnership: more capital and skills and a shared workload, but unlimited liability, disputes and shared profit.' },
      { n: 4, f: 'Private and public limited company: the key difference', b: 'A public limited company can sell shares to the general public through a stock exchange; a private limited company cannot.' },
      { n: 5, f: 'Public limited company: strengths and weaknesses', b: 'For: very large capital, shares easy to trade, limited liability.\nAgainst: costly to run, more must be published, takeover risk, control spread widely.' },
      { n: 6, f: 'Franchise and joint venture', b: 'Franchise: the franchisee buys the right to use one brand and its methods, paying fees and royalties and following rules.\nJoint venture: two or more businesses combine for a project, sharing cost, risk and profit.' },
      { n: 7, f: 'Public corporation', b: 'A public sector organisation owned by the government and run by appointed managers, mainly to provide a service to the public.' },
      { n: 8, f: 'A trader owes $160,000 and selling the assets raises $95,000. What happens to the shortfall?', b: 'Shortfall = $65,000.\nAs a sole trader, the owner could have to pay it from personal assets. A limited company owner who invested $30,000 loses only that $30,000.' },
    ]),
    ...sub('understanding-business-activity', 'business-objectives-and-stakeholder-objectives', '1.5', [
      { n: 1, f: 'Business objectives: examples and why they matter', b: 'Examples: survival, growth, profit and market share.\nThey give direction, allow results to be compared with targets, help managers choose between options and motivate staff.' },
      { n: 2, f: 'Market share formula', b: 'Market share (%) = business sales ÷ total market sales × 100' },
      { n: 3, f: 'A firm’s sales rise from 54,000 to 63,000 while the market grows from 360,000 to 420,000. What happens to its market share?', b: 'It stays at 15% (54,000 ÷ 360,000 and 63,000 ÷ 420,000), even though sales grew by 16.7%.' },
      { n: 4, f: 'Social enterprise', b: 'A business whose main aim is social or environmental, with most profit reinvested in that aim. It still sells goods or services to cover its costs.' },
      { n: 5, f: 'Internal and external stakeholders', b: 'Internal: owners and shareholders, managers, employees.\nExternal: customers, suppliers, lenders, government, the local community.' },
      { n: 6, f: 'Give two pairs of stakeholders whose objectives conflict', b: 'Shareholders (higher profit) and employees (higher pay).\nThe local community (quiet, clean surroundings) and managers (a bigger factory).' },
      { n: 7, f: 'Private and public sector objectives', b: 'Private sector: profit, growth, survival, market share.\nPublic sector: a service for all, affordable prices, jobs and social aims; losses may be covered by government.' },
    ]),

    // 2 People in business
    ...sub('people-in-business', 'motivating-employees', '2.1', [
      { n: 1, f: 'Benefits of a well-motivated workforce', b: 'Higher labour productivity, reduced absenteeism and lower labour turnover.' },
      { n: 2, f: 'Labour productivity, absenteeism rate and labour turnover formulas', b: 'Labour productivity = total output ÷ number of employees.\nAbsenteeism rate = working days lost ÷ working days available × 100.\nLabour turnover = leavers in the year ÷ average number employed × 100.' },
      { n: 3, f: 'Maslow’s hierarchy of needs, lowest to highest', b: 'Physiological (a living wage), safety (secure job, safe conditions), social (friendship, teamworking), esteem (respect, recognition, promotion), self-actualisation (reaching one’s potential).' },
      { n: 4, f: 'Herzberg: hygiene factors and motivators', b: 'Hygiene factors cause dissatisfaction if poor but do not motivate if good (pay is mainly a hygiene factor).\nMotivators give real satisfaction, such as achievement and responsibility.' },
      { n: 5, f: 'Taylor’s theory of motivation', b: 'Workers are motivated mainly by money. Break work into small tasks, set output targets, link pay to output and supervise closely. It ignores social and esteem needs.' },
      { n: 6, f: 'Wage and salary; bonus and commission', b: 'Wage: tied to hours worked. Salary: a fixed yearly amount paid monthly.\nBonus: rewards meeting a target. Commission: a percentage of each sale.' },
      { n: 7, f: 'Job rotation and job enrichment', b: 'Job rotation: moving employees between tasks at a similar level (sideways).\nJob enrichment: giving employees more responsibility and challenge (upwards).' },
      { n: 8, f: 'Output rises from 200 to 220 items per worker. What is the percentage change in productivity?', b: '(220 − 200) ÷ 200 × 100 = 10%' },
    ]),
    ...sub('people-in-business', 'organisation-and-management', '2.2', [
      { n: 1, f: 'Span of control and chain of command', b: 'Span of control: the number of people reporting directly to one manager or supervisor.\nChain of command: the line of authority from the top to the bottom of the business.' },
      { n: 2, f: 'Tall and short structures compared', b: 'Tall: many levels, narrow spans, slower communication, close supervision, higher management salaries.\nShort: few levels, wide spans, faster communication, looser supervision, lower salaries.' },
      { n: 3, f: 'Delegation', b: 'Passing authority to carry out a task, and to make decisions about it, to someone lower in the hierarchy. The manager stays accountable.', src: OAM },
      { n: 4, f: 'Benefits and risks of delegation', b: 'Benefits: frees managers for planning, uses staff skills, motivates, trains future managers.\nRisks: mistakes, lack of skill or time, a task done differently from how the manager would do it.', src: OAM },
      { n: 5, f: 'The five functions of management', b: 'Planning, organising, coordinating, commanding and controlling.' },
      { n: 6, f: 'Commanding versus controlling', b: 'Commanding gives instructions before the work; controlling checks results afterwards.', src: OAM },
      { n: 7, f: 'Autocratic, democratic and laissez-faire leadership: when each fits', b: 'Autocratic: urgent decisions, inexperienced staff, emergencies.\nDemocratic: skilled staff and complex decisions needing commitment.\nLaissez-faire: expert or creative staff.' },
      { n: 8, f: 'Trade union', b: 'An organisation of workers formed to protect and improve its members’ pay, conditions and interests, acting together.', src: OAM },
      { n: 9, f: 'Effects of a trade union on the business', b: 'Higher costs from pay and conditions agreements, possible disruption and slower change; but a single channel to talk to staff, fewer unresolved disputes and often lower labour turnover.', src: OAM },
    ]),
    ...sub('people-in-business', 'recruitment-selection-and-training-of-employees', '2.3', [
      { n: 1, f: 'Recruitment and selection', b: 'Recruitment: attracting suitable applicants for a vacancy.\nSelection: choosing the best applicant from those who applied.' },
      { n: 2, f: 'Job description and person specification', b: 'Job description: what the post involves (title, duties, responsibilities).\nPerson specification: the skills, qualifications and qualities wanted.' },
      { n: 3, f: 'When to recruit internally and when externally', b: 'Internal: when speed and low cost matter, reliability is known, or you want to reward loyalty.\nExternal: when new skills or ideas are needed, no suitable person is employed, or the business is expanding fast.' },
      { n: 4, f: 'Induction, on-the-job and off-the-job training', b: 'Induction: introduction for new starters.\nOn-the-job: learning while doing the work; the trainer’s output falls and bad habits can pass on.\nOff-the-job: learning away from the workplace; suits specialist skills but costs more.' },
      { n: 5, f: 'Dismissal and redundancy', b: 'Dismissal: the employer ends the contract because of the employee’s conduct or performance (about the person).\nRedundancy: the job is no longer needed, for example after automation (about the job).' },
      { n: 6, f: 'Part-time and full-time employees compared', b: 'Part-time: matches cover to busy periods and pays only for hours needed, but means more people to train and manage.\nFull-time: reliable, committed cover, but paid even in quiet spells.' },
      { n: 7, f: 'Legal controls over employment (in general terms)', b: 'Employment contracts, unfair dismissal, discrimination, health and safety, and the legal minimum wage.' },
    ]),
    ...sub('people-in-business', 'internal-and-external-communication', '2.4', [
      { n: 1, f: 'Effective communication; internal and external communication', b: 'Effective: the message is received, understood and acted on.\nInternal: within the business. External: with customers, suppliers and others outside it.' },
      { n: 2, f: 'How do you choose a communication method?', b: 'By urgency, complexity, the number of receivers, and the need for a record or feedback.' },
      { n: 3, f: 'Email: one strength and one weakness', b: 'Strength: fast, detailed and recorded.\nWeakness: overload, and it can be ignored.' },
      { n: 4, f: 'A closure must reach 40 staff within the hour. Which method suits?', b: 'A text or messaging app for speed and reach, followed by a short email for a record. A letter would be too slow.' },
      { n: 5, f: 'Communication barriers and their fixes', b: 'Jargon or language: plain words or translation.\nLong chain: fewer levels.\nOverload: prioritise and summarise.\nWrong method: match method to message.\nTechnical failure: a back-up channel.' },
      { n: 6, f: 'Problems caused by poor communication', b: 'Mistakes, delays, low morale, lost customers and orders, and conflict.' },
    ]),

    // 3 Marketing
    ...sub('marketing', 'marketing-competition-and-the-customer', '3.1', [
      { n: 1, f: 'Role of marketing', b: 'Identifying and satisfying customer needs, maintaining customer loyalty, and building customer relationships. Loyalty is the repeat buying; a relationship is the contact that encourages it.' },
      { n: 2, f: 'Why do markets become more competitive?', b: 'Easier entry for new firms, online selling, global rivals, price comparison websites and better-informed customers.' },
      { n: 3, f: 'Niche and mass marketing', b: 'Niche: a small, specific market; fewer rivals and a higher price possible, but small sales and risk if tastes change.\nMass: a large, general market; high volumes and lower unit costs, but more rivals and price competition.' },
      { n: 4, f: 'Market segmentation, and the examples in the syllabus', b: 'Dividing a market into groups of customers with similar characteristics or needs.\nExamples: age, socio-economic grouping, location and gender.' },
      { n: 5, f: 'Benefits of market segmentation', b: 'Products, prices and promotion aimed at each group, less wasted spending, gaps in the market found, and possibly higher sales and loyalty.' },
    ]),
    ...sub('marketing', 'market-research', '3.2', [
      { n: 1, f: 'Primary and secondary research', b: 'Primary: new data collected first-hand; specific and up to date, but slow and costly.\nSecondary: existing data collected by others; cheaper and quicker, but may be out of date or not specific.' },
      { n: 2, f: 'Primary research methods', b: 'Postal questionnaires, online surveys, interviews and focus groups.' },
      { n: 3, f: 'Secondary research methods', b: 'Online research, government sources, and paying for commercial market research reports.' },
      { n: 4, f: 'What affects the accuracy of market research?', b: 'Sample size and how representative it is, clear non-leading questions, honest and unbiased researchers and respondents, recent data from a reliable source, and enough people responding.' },
      { n: 5, f: '45 of 150 respondents choose option B. What percentage is this, and what is its pie chart angle?', b: '45 ÷ 150 × 100 = 30%.\nAngle = 45 ÷ 150 × 360 = 108°.' },
    ]),
    ...sub('marketing', 'marketing-mix', '3.3', [
      { n: 1, f: 'Stages of the product life cycle', b: 'Development (no sales), introduction (low sales), growth (rising fast), maturity (peak, flat), decline (falling).' },
      { n: 2, f: 'Extension strategy, with examples', b: 'An action to lengthen the life of a product before it declines: new packaging or design, new variants, new markets, new uses, a price change, fresh promotion.' },
      { n: 3, f: 'Cost-plus, competitive, penetration, skimming and promotional pricing', b: 'Cost-plus: unit cost plus a mark-up.\nCompetitive: in line with many similar rivals.\nPenetration: low launch price to gain share fast.\nSkimming: high launch price, lowered later.\nPromotional: short-term cut to clear stock or boost sales.' },
      { n: 4, f: 'A unit costing 12 sells at 15. What is the mark-up on cost, and the profit as a share of price?', b: 'Mark-up = 3 ÷ 12 × 100 = 25% of cost.\nProfit = 3 ÷ 15 × 100 = 20% of the selling price.' },
      { n: 5, f: 'Price elastic and price inelastic demand', b: 'Elastic: quantity demanded changes proportionately more than price; a price cut can raise revenue.\nInelastic: quantity demanded changes proportionately less than price; a price rise can raise revenue.' },
      { n: 6, f: 'Distribution channels: via wholesaler, via retailer, direct', b: 'Wholesaler: wide reach and holds stock, but several margins and less control.\nRetailer: shops reach customers, but take a margin.\nDirect: the producer keeps the whole margin and customer data, but pays delivery and has less reach.' },
      { n: 7, f: 'Advertising and sales promotion', b: 'Advertising: a paid message that builds awareness and image over time.\nSales promotion: a short-term incentive such as discounts, samples, loyalty cards or competitions.' },
      { n: 8, f: 'E-commerce: opportunities and threats for the business', b: 'Opportunities: wide reach, open all hours, lower costs, customer data.\nThreats: heavy competition, security and website failures, delivery costs.' },
    ]),
    ...sub('marketing', 'marketing-strategy', '3.4', [
      { n: 1, f: 'Marketing strategy', b: 'The plan for how a business uses the marketing mix to reach its marketing objectives with its target customers. The four parts must be consistent with each other and the budget.' },
      { n: 2, f: 'Misleading promotion, faulty goods and dangerous goods', b: 'Misleading promotion: claims, prices or images that give a false impression.\nFaulty goods: do not work as they should or as described.\nDangerous goods: could harm the user or others.' },
      { n: 3, f: 'Effects of legal controls on marketing strategy', b: 'Claims must be provable and adverts checked, more testing and quality control, refunds, replacements and recalls, so costs rise; but customers trust the business more and honest firms are protected.' },
      { n: 4, f: 'Problems of entering foreign markets', b: 'Cultural differences (language, tastes, religion, customs, symbols), lack of knowledge of customers, rivals, rules and distribution, the cost of distance, and established local brands.' },
      { n: 5, f: 'Joint venture and licensing as ways into a foreign market', b: 'Joint venture: local knowledge and shared cost and risk, but shared profit and possible disagreements.\nLicensing: another firm makes or sells the product for a fee or royalty; low cost and risk, but weaker control of quality and image.' },
      { n: 6, f: 'A licensee sells $800,000 of goods and pays a 5% royalty. What is the royalty?', b: '0.05 × 800,000 = $40,000' },
    ]),

    // 4 Operations management
    ...sub('operations-management', 'production-of-goods-and-services', '4.1', [
      { n: 1, f: 'Production and productivity', b: 'Production is how much is made. Productivity is output compared with the resources used, such as labour productivity = output ÷ number of workers.' },
      { n: 2, f: '1,800 loaves with 9 workers, then 2,200 loaves with 10 workers. What happens to labour productivity?', b: '1,800 ÷ 9 = 200 and 2,200 ÷ 10 = 220 loaves per worker, a rise of 10%.' },
      { n: 3, f: 'Ways to increase efficiency', b: 'Automation and technology (faster, steadier output, but costly and jobs may go) and improved labour skills through training (fewer mistakes, but trained staff may leave).' },
      { n: 4, f: 'Lean production, just-in-time and Kaizen', b: 'Lean production: producing with as little waste as possible.\nJIT: very low inventories, with materials arriving as needed; depends on reliable suppliers.\nKaizen: continuous improvement through many small changes suggested by workers.' },
      { n: 5, f: 'Job, batch and flow production', b: 'Job: one item to a customer’s order (high unit cost, very flexible).\nBatch: identical items in groups, then the process is reset (medium cost).\nFlow: continuous production of standard items on a line (lowest unit cost, inflexible).' },
      { n: 6, f: 'CAD and CAM', b: 'CAD: computer-aided design; designs and tests products on screen.\nCAM: computer-aided manufacturing; computers control machines and robots. Linked, a design goes straight to production.' },
      { n: 7, f: 'Why hold inventories, and the cost of doing so', b: 'Why: buffer against late supplies, meet unexpected demand, bulk-buying discounts, seasonal peaks.\nCosts: storage, insurance, damage or going out of date, and money tied up.' },
    ]),
    ...sub('operations-management', 'costs-scale-of-production-and-break-even-analysis', '4.2', [
      { n: 1, f: 'Fixed, variable, total and average cost', b: 'Fixed: do not change with output. Variable: change directly with output.\nTotal cost = fixed costs + total variable costs.\nAverage cost = total cost ÷ output.' },
      { n: 2, f: 'Fixed costs $27,000, variable cost $12 per bag. Find average cost at 1,500 and at 3,000 bags.', b: '1,500: (27,000 + 18,000) ÷ 1,500 = $30.\n3,000: (27,000 + 36,000) ÷ 3,000 = $21.\nFixed costs are spread over more bags.' },
      { n: 3, f: 'Economies of scale: the five types', b: 'Purchasing (bulk discounts), marketing (advertising spread over more units), financial (lower interest for larger firms), managerial (specialist managers), technical (large equipment at high output).' },
      { n: 4, f: 'Diseconomies of scale', b: 'Average cost rises when a business becomes too large, through poor communication, lack of commitment from employees and weak coordination.' },
      { n: 5, f: 'Break-even output and margin of safety', b: 'Break-even output = fixed costs ÷ contribution per unit (price − variable cost per unit).\nMargin of safety = expected or actual output − break-even output.' },
      { n: 6, f: 'Price $30, variable cost $12, fixed costs $27,000, expected sales 2,100. Find break-even, margin of safety and profit.', b: 'Contribution = $18. Break-even = 27,000 ÷ 18 = 1,500 bags.\nMargin of safety = 600 bags.\nProfit = 18 × 2,100 − 27,000 = $10,800.' },
      { n: 7, f: 'What moves break-even output?', b: 'Higher fixed costs or higher variable cost per unit: break-even rises.\nA higher price or lower fixed costs: break-even falls.' },
      { n: 8, f: 'Limitations of break-even analysis', b: 'It assumes all output is sold, a constant price and variable cost per unit, and fixed costs that stay fixed; it normally covers one product, and forecasts may be wrong.' },
    ]),
    ...sub('operations-management', 'achieving-quality-production', '4.3', [
      { n: 1, f: 'Quality', b: 'How well a product or service meets customer needs and expectations. It is not the same as luxury or a high price.' },
      { n: 2, f: 'Quality control and quality assurance', b: 'Quality control: checking products to find faults, at checkpoints or at the end, mainly by inspectors.\nQuality assurance: organising the whole business so faults are prevented at every stage, involving everyone.' },
      { n: 3, f: 'Why does quality matter?', b: 'Repeat custom and a stronger reputation, fewer refunds and scrapped items, less risk of legal action, keeping business customers, and possibly a higher price.' },
      { n: 4, f: 'A sample of 400 tiles has 14 cracked. Estimate the cracked tiles in an output of 8,000.', b: '14 ÷ 400 = 3.5%.\n8,000 × 0.035 = 280 cracked tiles (assuming the sample is representative).' },
      { n: 5, f: 'Quality assurance methods', b: 'Written standards, supplier checks, training, workers checking their own work, planned machine maintenance and using customer feedback.' },
    ]),
    ...sub('operations-management', 'location-decisions', '4.4', [
      { n: 1, f: 'Location factors for a manufacturer', b: 'Land and building costs, labour (skills, wages, availability), nearness to materials and to markets, transport links, utilities and room to expand, and government help.' },
      { n: 2, f: 'Location factors for a service business', b: 'Closeness to customers and footfall, competitors, visibility and access, rent, and staff. For online services, customer location matters little.' },
      { n: 3, f: 'Factors in choosing a country to locate in', b: 'Labour cost and skills, market size and growth, transport, tariffs and trade barriers, exchange rates, political stability, language and culture, government incentives and legal controls.' },
      { n: 4, f: 'How can legal controls affect location?', b: 'Limits on land use (keeping factories out of residential or protected areas), permission needed to build, environmental rules, safety standards, and incentives to locate where jobs are needed.' },
      { n: 5, f: 'Relocation: reasons and risks', b: 'Reasons: premises too small, rising rent, customers or suppliers moving, better access to labour or markets.\nRisks: moving costs, disrupted production, staff leaving, customers not following.' },
    ]),

    // 5 Financial information and decisions
    ...sub('financial-information-and-decisions', 'business-finance-needs-and-sources', '5.1', [
      { n: 1, f: 'Three main reasons a business needs finance', b: 'Start-up capital, capital for expansion, and additional working capital.' },
      { n: 2, f: 'Internal and external sources of finance', b: 'Internal: retained profit, owner’s savings, sale of assets, reducing stock or collecting debts sooner.\nExternal: bank loan, overdraft, trade credit, share issue, grants, micro-finance, crowd-funding.' },
      { n: 3, f: 'Debt and equity', b: 'Debt: provided by a lender, repaid with interest, control unchanged, interest still due in a bad year.\nEquity: provided by owners or shareholders, no set repayment, rewarded by dividends, control may be shared.' },
      { n: 4, f: 'Micro-finance and crowd-funding', b: 'Micro-finance: very small loans, often to people who cannot get bank loans.\nCrowd-funding: many people each giving a small amount, usually online; it also tests demand.' },
      { n: 5, f: 'Four factors in choosing a source of finance', b: 'Size and legal form of the business, the amount required, the length of time needed, and existing loans.' },
      { n: 6, f: 'A company needs $120,000 for ovens that last ten years. Why a long-term bank loan rather than an overdraft?', b: 'The loan matches the length of the need. An overdraft is short-term and can be withdrawn. Shares would avoid interest but share ownership.' },
    ]),
    ...sub('financial-information-and-decisions', 'cash-flow-forecasting-and-working-capital', '5.2', [
      { n: 1, f: 'Cash-flow forecast', b: 'A prediction of cash expected to come in and go out over future months, with the expected balance each month.' },
      { n: 2, f: 'Net cash flow and closing balance', b: 'Net cash flow = inflows − outflows for the month.\nClosing balance = opening balance + net cash flow, and becomes next month’s opening balance.' },
      { n: 3, f: 'Opening balance 1,500, inflows 4,200, outflows 4,500. Find the closing balance.', b: 'Net cash flow = −300.\nClosing balance = 1,500 − 300 = 1,200.' },
      { n: 4, f: 'Ways to overcome a short-term cash problem', b: 'An overdraft, delaying supplier payments, asking debtors to pay sooner; also delaying a purchase, selling an unused asset or the owner adding money.' },
      { n: 5, f: 'Working capital, and an example', b: 'Working capital = current assets − current liabilities.\nInventories 9,000 + receivables 3,000 + cash 500 = 12,500; payables 4,000 + overdraft 1,000 = 5,000; working capital = 7,500.' },
      { n: 6, f: 'Is a negative cash balance the same as a loss?', b: 'No. A negative balance is a cash shortage. Profit and cash differ: a credit sale adds to profit now but brings in cash later.' },
    ]),
    ...sub('financial-information-and-decisions', 'income-statements', '5.3', [
      { n: 1, f: 'Profit, and why it matters', b: 'Profit = revenue − total costs.\nIt is a reward for the owners’ risk and enterprise, and retained profit is a source of finance with no interest and no new owners.' },
      { n: 2, f: 'Layout of an income statement for a limited company', b: 'Revenue − cost of sales = gross profit\n− expenses = profit\n− tax − dividends = retained profit' },
      { n: 3, f: 'Why can profit and cash move in opposite directions?', b: 'Credit sales count as revenue before the cash arrives; buying a non-current asset uses cash but is not a cost against this year’s revenue in the same way; a loan brings in cash but is not profit.' },
      { n: 4, f: 'Gross profit and profit; profit and retained profit', b: 'Gross profit is before expenses; profit is after expenses.\nRetained profit is the profit left after tax and dividends.' },
      { n: 5, f: 'Limitations of an income statement', b: 'It covers a past period only, does not show cash, forecasts based on it rely on assumptions, and it does not show what the business owns or how it is financed.' },
    ]),
    ...sub('financial-information-and-decisions', 'statement-of-financial-position', '5.4', [
      { n: 1, f: 'Classify: premises, inventories, payables, bank overdraft, five-year bank loan, share capital', b: 'Premises: non-current asset. Inventories: current asset. Payables: current liability. Overdraft: current liability. Five-year loan: non-current liability. Share capital: equity.' },
      { n: 2, f: 'Net assets and equity', b: 'Net assets = total assets − current liabilities − non-current liabilities.\nEquity = share capital + retained profit, and equals net assets.' },
      { n: 3, f: 'Capital employed (standard form)', b: 'Capital employed = equity + non-current liabilities, which also equals total assets − current liabilities.' },
      { n: 4, f: 'Non-current assets 200,000, current assets 60,000, current liabilities 80,000, bank loan 50,000. Find net assets and working capital.', b: 'Net assets = 200,000 + 60,000 − 80,000 − 50,000 = 130,000.\nWorking capital = 60,000 − 80,000 = −20,000, a weak short-term position.' },
      { n: 5, f: 'What happens when inventories are sold at cost for cash?', b: 'Inventories fall and cash rises by the same amount, so current assets stay the same but are more liquid. The cash can reduce an overdraft.' },
    ]),
    ...sub('financial-information-and-decisions', 'analysis-of-accounts', '5.5', [
      { n: 1, f: 'Profitability and liquidity', b: 'Profitability: how well a business earns profit compared with its revenue or the capital invested in it.\nLiquidity: the ability to pay short-term debts when they are due.' },
      { n: 2, f: 'Gross profit margin, profit margin and ROCE formulas', b: 'Gross profit margin = gross profit ÷ revenue × 100.\nProfit margin = profit ÷ revenue × 100.\nROCE = profit ÷ capital employed × 100.' },
      { n: 3, f: 'Current ratio and acid test ratio formulas', b: 'Current ratio = current assets ÷ current liabilities.\nAcid test ratio = (current assets − inventories) ÷ current liabilities.' },
      { n: 4, f: 'Revenue 90,000, cost of sales 54,000, profit 13,500, capital employed 90,000. Find the GPM, profit margin and ROCE.', b: 'GPM = 36,000 ÷ 90,000 × 100 = 40%.\nProfit margin = 13,500 ÷ 90,000 × 100 = 15%.\nROCE = 13,500 ÷ 90,000 × 100 = 15%.' },
      { n: 5, f: 'Current assets 36,000 (inventories 18,000), current liabilities 24,000. Find the current ratio and acid test ratio.', b: 'Current ratio = 36,000 ÷ 24,000 = 1.5.\nAcid test = 18,000 ÷ 24,000 = 0.75.' },
      { n: 6, f: 'Which ratios do a lender and a supplier look at?', b: 'A bank or other lender: liquidity and profit, to decide whether and on what terms to lend.\nA supplier: the current ratio and acid test, to decide whether to give credit.' },
    ]),

    // 6 External influences on business activity
    ...sub('external-influences-on-business-activity', 'economic-issues', '6.1', [
      { n: 1, f: 'The business cycle: four stages', b: 'Growth (GDP rising steadily), boom (GDP rising fast, very low unemployment), recession (GDP falling), slump (GDP very low, weak demand).' },
      { n: 2, f: 'Gross Domestic Product (GDP) and economic growth', b: 'GDP: the value of all output of goods and services made within a country over a set time.\nEconomic growth: a rise in GDP over time.' },
      { n: 3, f: 'Government economic objectives', b: 'Increasing GDP (economic growth), low unemployment, and low, stable inflation.' },
      { n: 4, f: 'Effects of a rise in interest rates', b: 'Dearer loans, so less borrowing and spending by businesses and customers. Firms with large variable-rate loans see profit hit directly.' },
      { n: 5, f: 'A $100,000 loan’s interest rate rises from 6% to 9%. What is the change in interest?', b: '$6,000 rises to $9,000: up $3,000, or 50%. The rate rose by 3 percentage points, not 50%.' },
      { n: 6, f: 'Effects of a rise in income tax and in sales tax', b: 'Income tax up: households have less to spend, so demand falls.\nSales tax up: prices rise, so demand may fall.' },
      { n: 7, f: 'Business responses to a recession', b: 'Cut costs, run promotions, add cheaper lines, look for new markets, hold less stock and delay investment. Each has a cost.' },
    ]),
    ...sub('external-influences-on-business-activity', 'environmental-and-ethical-issues', '6.2', [
      { n: 1, f: 'Externality, external cost and external benefit', b: 'Externality: a cost or benefit of a business decision that falls on people outside the business and its customers.\nExternal cost: pollution harming local health.\nExternal benefit: jobs and better roads in the area.' },
      { n: 2, f: 'Sustainable development', b: 'Meeting the needs of today without reducing the ability of future generations to meet theirs.' },
      { n: 3, f: 'Ways a business can contribute to sustainable development', b: 'Switch to renewable energy, cut waste and recycle, use resources from managed sources, design products to be repaired, and reduce transport distances.' },
      { n: 4, f: 'Pressure group, and its methods', b: 'A group that tries to influence business or government decisions on a cause. Methods: publicity, petitions, protests, calls for boycotts and lobbying government.' },
      { n: 5, f: 'Legal duty and ethical choice', b: 'A legal duty is something a business must do. An ethical choice is something it ought to do, beyond the law, such as auditing suppliers for child labour or paying suppliers a fair price.' },
    ]),
    ...sub('external-influences-on-business-activity', 'business-and-the-international-economy', '6.3', [
      { n: 1, f: 'Globalisation: causes, opportunities and threats', b: 'Causes: cheaper transport, faster communication, lower trade barriers, growth of MNCs.\nOpportunities: bigger markets, cheaper inputs, spread of risk.\nThreats: more competition, lost home sales to cheap imports.' },
      { n: 2, f: 'Import tariff and import quota', b: 'Tariff: a tax on imported goods; raises tax revenue.\nQuota: a limit on the quantity that may be imported; raises no revenue directly.' },
      { n: 3, f: 'A 25% tariff is placed on a Rs 800 imported item. What is the new price?', b: '800 × 1.25 = Rs 1,000' },
      { n: 4, f: 'Multinational company (MNC): host country gains and losses', b: 'An MNC is a business that operates in more than one country.\nGains: jobs, exports, more choice, investment.\nLosses: local businesses lose sales, profits are repatriated, possible pollution, jobs can leave quickly.' },
      { n: 5, f: 'Home currency appreciates: effects on exporters and importers', b: 'Exporter: the foreign price rises, so it is less competitive.\nImporter: inputs are cheaper, so costs fall.\nDepreciation has the reverse effects.' },
    ]),
  ],
};
