/**
 * D-444 -- flashcards for Cambridge IGCSE Business 0264 (2027-2029).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 0264); origin 'revision-notes'.
 *
 * Not tiered, so no card is marked upper tier. Figures in worked examples follow
 * Marlbridge's own 0264 revision notes; all businesses are invented.
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

const AOA = 'igcse-business-0264-analysis-of-accounts-revision-notes';
const BENV = 'igcse-business-0264-business-and-the-environment-revision-notes';

export const DECK_CAMBRIDGE_IGCSE_BUSINESS: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'igcse',
  subjectSlug: 'business',
  syllabusCode: '0264',
  syllabusSeries: '2027-2029',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'salman-ahmad', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Understanding business activity
    ...sub('understanding-business-activity-0264', 'business-activity-0264', '1.1', [
      { n: 1, f: 'The four factors of production', b: 'Land: natural resources and space used in production.\nLabour: human effort, physical or mental.\nCapital: man-made resources used to produce other goods and services.\nEnterprise: willingness to take risks and organise the other factors.' },
      { n: 2, f: 'Is capital (as a factor of production) the same as money?', b: 'No. Capital is man-made equipment and buildings, such as machinery, vehicles and tools. Money is not a factor of production.' },
      { n: 3, f: 'Added value', b: 'The difference between the selling price of a product and the cost of the bought-in materials or inputs used to make it.\nAdded value per unit = selling price per unit − cost of bought-in inputs per unit.' },
      { n: 4, f: 'A chopping board sells for $12.00 and its bought-in inputs cost $7.50. 250 are sold a month. Calculate the added value per board and per month.', b: 'Per board: 12.00 − 7.50 = $4.50.\nPer month: 4.50 × 250 = $1,125.' },
      { n: 5, f: 'Two ways to increase added value, and the risk of each', b: 'Raise the selling price (stronger brand, better quality or service): sales may fall.\nCut the cost of bought-in inputs (cheaper suppliers, less waste): quality may fall.' },
      { n: 6, f: 'Why is added value not the same as profit?', b: 'Wages, rent and the other costs of the business still have to be paid out of added value.' },
      { n: 7, f: 'Opportunity cost', b: 'The benefit of the next best alternative that is given up when a choice is made. Only the next best alternative counts, not every option rejected.' },
      { n: 8, f: 'A business chooses a project worth $5,000 over others worth $4,200 and $3,700. What is the opportunity cost?', b: '$4,200, the benefit of the next best alternative.' },
    ]),
    ...sub('understanding-business-activity-0264', 'economic-sectors-0264', '1.2', [
      { n: 1, f: 'Primary, secondary and tertiary sectors', b: 'Primary: extracting or growing natural resources (farming, fishing, mining).\nSecondary: making, processing or building (manufacturing, construction).\nTertiary: providing services (retail, banking, transport).' },
      { n: 2, f: 'Private sector and public sector', b: 'Private sector: owned and controlled by individuals or groups of individuals; usually aims mainly for profit.\nPublic sector: owned and controlled by government (national or local); usually aims mainly to provide a service.' },
      { n: 3, f: 'Classify a state-run railway and a privately owned quarry by both kinds of sector', b: 'State-run railway: tertiary and public.\nPrivately owned quarry: primary and private.' },
      { n: 4, f: 'Give a chain of production from wheat to bread, naming each sector', b: 'Wheat grown on a farm: primary.\nFlour milled and bread baked: secondary.\nBread sold in a shop: tertiary.\nValue is added at each stage.' },
      { n: 5, f: 'What is the difference between the primary/secondary/tertiary grouping and the private/public grouping?', b: 'Primary/secondary/tertiary groups businesses by type of activity. Private/public groups them by who owns and controls them.' },
    ]),
    ...sub('understanding-business-activity-0264', 'enterprise-business-growth-and-size-0264', '1.3', [
      { n: 1, f: 'Entrepreneur', b: 'A person who takes the risk of starting and running a business.' },
      { n: 2, f: 'Characteristics of a successful entrepreneur', b: 'Risk-taking, innovation, determination, hard work, self-confidence, leadership and good decision-making.' },
      { n: 3, f: 'Why does a business plan matter?', b: 'It makes the owner think problems through before spending money, helps persuade lenders and investors, and sets targets to measure progress. But it relies on forecasts, so it cannot guarantee success.' },
      { n: 4, f: 'Why and how do governments support business start-ups?', b: 'Why: to create jobs, reduce unemployment, raise tax revenue, increase competition, encourage innovation and support economic growth.\nHow: grants, advice, low-cost loans and training schemes.' },
      { n: 5, f: 'Four ways of measuring business size', b: 'Number of people employed, value of output or sales, volume of output or sales, and capital employed.\nProfit is not a measure of business size.' },
      { n: 6, f: 'Internal growth and external growth', b: 'Internal growth: using the firm’s own resources, such as new products, markets or outlets. Slower, but control is kept.\nExternal growth: joining with another business by merger or takeover. Faster, but costs more and brings problems joining the two.' },
      { n: 7, f: 'Horizontal and vertical integration', b: 'Horizontal: joining firms at the same stage of the same industry (for example, buying a rival).\nVertical: joining firms at different stages of the supply chain, backward towards suppliers or forward towards retailers.' },
      { n: 8, f: 'Why do some businesses stay small?', b: 'The market is small or niche, the owner wants to keep control, finance is lacking, the owner wants to avoid risk, customers value personal service, or the owner is content with the lifestyle.' },
      { n: 9, f: 'Why do new businesses fail?', b: 'Poor management skills, shortage of finance (cash runs out), an unsuitable product, falling demand, changes in the economy such as a recession, and strong competition.' },
    ]),
    ...sub('understanding-business-activity-0264', 'types-of-business-organisation-0264', '1.4', [
      { n: 1, f: 'Unlimited liability and limited liability', b: 'Unlimited liability: owners can be made to pay business debts from their personal assets.\nLimited liability: owners can lose only the money they invested.' },
      { n: 2, f: 'Sole trader: advantages and disadvantages', b: 'For: simple and cheap to set up, full control, the owner keeps all the profit.\nAgainst: unlimited liability, little capital, the owner carries all the work and risk.' },
      { n: 3, f: 'Partnership: advantages and disadvantages', b: 'For: shared capital, skills and workload; more than one decision-maker.\nAgainst: unlimited liability (the usual position), shared profit, possible disputes.' },
      { n: 4, f: 'Main difference between a private limited company (Ltd) and a public limited company (plc)', b: 'A plc may offer its shares to the general public; a private limited company cannot.' },
      { n: 5, f: 'Public limited company: advantages and disadvantages', b: 'For: large capital, limited liability, shares easy to trade, easier borrowing.\nAgainst: high costs, strict regulation, accounts widely available, risk of takeover, pressure for short-term results.' },
      { n: 6, f: 'Franchise, franchisor, franchisee and royalty', b: 'Franchise: the right to use another business’s brand, products and methods in return for payment.\nFranchisor: grants the franchise. Franchisee: buys it and runs the outlet.\nRoyalty: a regular payment by the franchisee, often a percentage of sales.' },
      { n: 7, f: 'Franchise: one advantage and one disadvantage for the franchisee', b: 'Advantage: a known brand, with support and training, so lower risk than starting alone.\nDisadvantage: pays a fee and royalties and must follow the franchisor’s rules.' },
      { n: 8, f: 'Joint venture: what it is, and one advantage and one disadvantage', b: 'Two or more businesses cooperating on a project or in a market, sharing costs, risks and rewards.\nFor: shared costs and risk, combined skills, faster entry to a new market.\nAgainst: shared profit, possible disagreement, slower decisions.' },
      { n: 9, f: 'Social enterprise', b: 'A business that trades mainly to achieve social or environmental aims, reinvesting most of its profit in those aims.' },
      { n: 10, f: 'A partnership’s profit of $45,000 is shared 2:1. How much does each partner get?', b: 'Total parts = 3.\n2/3 × 45,000 = $30,000 and 1/3 × 45,000 = $15,000.' },
    ]),
    ...sub('understanding-business-activity-0264', 'business-objectives-and-stakeholder-objectives-0264', '1.5', [
      { n: 1, f: 'Business objective, with four examples', b: 'A target the business aims to reach. Examples: survival, growth, profit and market share.' },
      { n: 2, f: 'Market share formula', b: 'Market share (%) = (sales revenue of the business ÷ total sales revenue of the whole market) × 100' },
      { n: 3, f: 'A firm has sales of $90,000 in a market worth $750,000. Calculate its market share.', b: '90,000 ÷ 750,000 × 100 = 12%' },
      { n: 4, f: 'Why are objectives important?', b: 'They give direction, guide decisions, set a target to measure success against, help to motivate and co-ordinate staff, and tell stakeholders such as lenders what the business is trying to do.' },
      { n: 5, f: 'Internal and external stakeholder groups', b: 'Internal: owners, managers and employees.\nExternal: customers, suppliers, lenders/banks, government and the local community.' },
      { n: 6, f: 'Give one example of a conflict between stakeholder objectives', b: 'For example, shareholders want profit paid out as dividends while managers want it kept to fund growth; or owners want profit while employees want higher wages.' },
      { n: 7, f: 'How a business’s objectives change', b: 'A new business usually puts survival first. Once secure, it may aim for growth, profit or market share. A recession or a new rival can push it back to survival.' },
    ]),

    // 2 People in business
    ...sub('people-in-business-0264', 'human-resource-management-hrm-0264', '2.1', [
      { n: 1, f: 'Recruitment and selection', b: 'Recruitment: attracting suitable people to apply for a vacancy.\nSelection: choosing the best applicant from those who applied.' },
      { n: 2, f: 'Job description and person specification', b: 'Job description: lists the job title, duties and responsibilities.\nPerson specification: lists the qualifications, skills, experience and qualities wanted in the post holder.' },
      { n: 3, f: 'Internal recruitment: advantages and disadvantages', b: 'For: cheaper and faster; the employer already knows the person; promotion prospects motivate staff.\nAgainst: a small pool of applicants; no new ideas; it leaves another gap to fill.' },
      { n: 4, f: 'Selection methods', b: 'CV or résumé, application form, references, testing or assessment centres, and interviews.' },
      { n: 5, f: 'Contents of an employment contract named in the syllabus', b: 'Duties and responsibilities, working hours, holiday entitlement and sick pay.' },
      { n: 6, f: 'Four employment issues covered by legal controls', b: 'Unfair dismissal, discrimination, health and safety, and the legal minimum wage. Each can be a cost to the employer and a benefit to the employee.' },
      { n: 7, f: 'Induction, on-the-job and off-the-job training', b: 'Induction: introduces new employees to the business.\nOn-the-job: learning at the workplace while working; cheap and relevant, but bad habits can spread.\nOff-the-job: away from the workplace; expert teaching, but costly and staff are away from work.' },
      { n: 8, f: 'A worker is paid $300 for 40 hours. The minimum wage is $8.00 an hour. What is the weekly shortfall?', b: '300 ÷ 40 = $7.50 an hour, which is $0.50 below the minimum.\n0.50 × 40 = $20 a week.' },
    ]),
    ...sub('people-in-business-0264', 'organisation-and-management-0264', '2.2', [
      { n: 1, f: 'Span of control and chain of command', b: 'Span of control: the number of employees who report directly to one manager.\nChain of command: the line of authority from the top of the business to the bottom.' },
      { n: 2, f: 'Tall and flat organisational structures compared', b: 'Tall: many levels, long chain of command, narrow spans, slower communication, higher manager cost.\nFlat: few levels, short chain, wide spans, faster communication, lower manager cost.' },
      { n: 3, f: 'The five functions of management', b: 'Planning (set objectives), organising (arrange people and resources), coordinating (make departments work together), commanding (give instructions) and controlling (compare actual results with the plan and act).' },
      { n: 4, f: 'Delegation: what it is, one advantage and one disadvantage', b: 'Passing authority for a task and its decisions to someone lower down.\nFor: frees the manager for planning and can motivate staff.\nAgainst: the employee may lack skill, and the manager is still responsible.' },
      { n: 5, f: 'Autocratic, democratic and laissez-faire leadership', b: 'Autocratic: the leader decides alone; quick, but can lower motivation.\nDemocratic: the leader decides with staff input; uses staff ideas, but slower.\nLaissez-faire: the staff decide within broad aims; suits expert staff, but can lack direction.' },
      { n: 6, f: 'Downsizing and redundancy', b: 'Downsizing: deliberately reducing the number of employees, for example because of automation, lower demand or the need to cut costs.\nRedundancy: losing a job because the job is no longer needed.' },
      { n: 7, f: 'Trade union, and one benefit of membership to employees', b: 'An organisation of workers who join together to protect and improve their interests.\nBenefit: a collective voice over pay and conditions, or support in a dispute.' },
      { n: 8, f: 'A managing director has 3 managers, each with 5 staff. How many levels, what are the spans, and how many employees in total?', b: '3 levels. The director’s span is 3 and each manager’s is 5.\nTotal = 1 + 3 + 15 = 19 employees.' },
    ]),
    ...sub('people-in-business-0264', 'methods-of-communication-0264', '2.3', [
      { n: 1, f: 'Internal and external communication', b: 'Internal: the receiver is inside the business.\nExternal: the receiver is outside it, such as customers, suppliers or government.\nThe receiver decides the type, not the method: an email can be either.' },
      { n: 2, f: 'Email: one strength and one weakness', b: 'Strength: quick, cheap and leaves a written record.\nWeakness: it may go unread, or its tone may be misread.' },
      { n: 3, f: 'Letter: when might it still be chosen?', b: 'For formal or official matters where a permanent written record is needed, or when the receiver has no email or mobile phone. It is slow and costs printing and postage.' },
      { n: 4, f: 'Face-to-face meeting compared with a virtual meeting', b: 'Face-to-face: instant feedback and body language, but costly in time and hard to gather everyone.\nVirtual: saves travel and links people in different places, but needs a connection and is less personal.' },
      { n: 5, f: 'Communication barrier', b: 'Anything that stops a message being sent, received or understood as intended. Examples: language differences, jargon, the wrong method, technical failure, a long chain of communication, information overload, no feedback.' },
      { n: 6, f: 'Match a fix to each barrier: jargon, long chain of communication, no feedback', b: 'Jargon: use everyday language.\nLong chain: fewer levels or direct contact.\nNo feedback: ask the receiver to confirm.' },
    ]),
    ...sub('people-in-business-0264', 'motivating-employees-0264', '2.4', [
      { n: 1, f: 'Motivation', b: 'The desire and willingness to put effort into a job.' },
      { n: 2, f: 'Four benefits of a well-motivated workforce', b: 'Improved labour productivity, reduced absenteeism, lower labour turnover, and greater willingness to accept change or new methods of working.' },
      { n: 3, f: 'Labour turnover (%) formula, and an example', b: 'Labour turnover = leavers in the period ÷ average number of staff × 100.\nExample: 6 leavers from an average of 48 staff: 6 ÷ 48 × 100 = 12.5%.\nA standard form: it is not in the 0264 syllabus formula list.' },
      { n: 4, f: 'Maslow’s hierarchy of needs, lowest first', b: 'Physiological (wage to live on), safety (secure contract, safe conditions), social (teamwork), esteem (praise, status, promotion), self-actualisation (challenge, reaching potential).' },
      { n: 5, f: 'Herzberg: hygiene factors and motivators', b: 'Hygiene factors (pay, conditions, job security, supervision) stop dissatisfaction but do not motivate on their own.\nMotivators (achievement, recognition, responsibility, the work itself, advancement) create satisfaction and effort.' },
      { n: 6, f: 'Taylor’s view of motivation', b: 'Workers are motivated mainly by money. Break the job into tasks, find the best method, train workers and pay by output (piece-rate). It ignores boredom, teamwork and the quality of work.' },
      { n: 7, f: 'Piece-rate, commission and profit sharing', b: 'Piece-rate: pay per unit produced.\nCommission: a percentage of the value of sales made.\nProfit sharing: employees receive a share of the business’s profit.' },
      { n: 8, f: 'Job rotation and job enrichment', b: 'Job rotation: moving between tasks at the same level, which reduces boredom but adds no responsibility.\nJob enrichment: giving more responsibility and challenge.' },
      { n: 9, f: 'Commission of 6% on sales of $18,000', b: '0.06 × 18,000 = $1,080' },
    ]),

    // 3 Marketing
    ...sub('marketing-0264', 'marketing-and-the-market-0264', '3.1', [
      { n: 1, f: 'The role of marketing (five parts)', b: 'Identify customer needs, satisfy customer needs, maintain customer loyalty, build customer relationships, and anticipate changes in customer needs.' },
      { n: 2, f: 'Why do consumer spending patterns change?', b: 'Rising or falling incomes, changes in fashion and tastes, the age structure of the population, new technology, the prices of substitutes, and changing attitudes (for example about health or the environment).' },
      { n: 3, f: 'A firm’s sales revenue stays at 2,250,000 while the market grows from 15,000,000 to 18,000,000. What happens to its market share?', b: 'It falls from 2,250,000 ÷ 15,000,000 × 100 = 15% to 2,250,000 ÷ 18,000,000 × 100 = 12.5%. Sales revenue can stay the same, or even rise, while market share falls.' },
      { n: 4, f: 'Mass market and niche market', b: 'Mass market: a large market with many customers and standard products; big volume and economies of scale, but strong competition.\nNiche market: a small specialist part of a wider market; less competition and higher prices, but limited customers and growth.' },
      { n: 5, f: 'Market segmentation, and the five bases named in the syllabus', b: 'Splitting a market into groups whose members share traits.\nBases: age, income, location, gender and lifestyle.' },
      { n: 6, f: 'Advantages and disadvantages of market segmentation', b: 'For: products matched better to wants, targeted promotion, gaps spotted, sales revenue may rise.\nAgainst: research costs, several versions raise costs, segments may be small and groups overlap.' },
    ]),
    ...sub('marketing-0264', 'market-research-0264', '3.2', [
      { n: 1, f: 'Primary and secondary market research', b: 'Primary: new information collected first-hand for the business. Up to date and specific, but expensive and slow.\nSecondary: existing information collected by others. Cheaper and faster, but may be out of date and not specific.' },
      { n: 2, f: 'Primary research methods', b: 'Questionnaires or surveys, interviews, focus groups and observation.' },
      { n: 3, f: 'Secondary research sources', b: 'Competitor websites, government sources, market reports and trade magazines.' },
      { n: 4, f: 'Focus group: one advantage and one disadvantage', b: 'Advantage: shows customers’ reasons and opinions.\nDisadvantage: small and possibly unrepresentative, and one person may dominate.' },
      { n: 5, f: 'Sample, and why businesses use one', b: 'A smaller group chosen to represent the whole population. Asking everyone costs too much and takes too long. A sample is reliable only if large enough and representative.' },
      { n: 6, f: 'Factors that affect the accuracy of market research', b: 'Sample size, bias in who is chosen, question wording, honesty of answers, the age of the data, the reliability of the source and the influence of the interviewer.' },
      { n: 7, f: '90 out of a sample of 250 shoppers prefer home delivery. What percentage is this?', b: '90 ÷ 250 × 100 = 36%. It is an estimate for all customers, not a certainty.' },
    ]),
    ...sub('marketing-0264', 'marketing-mix-0264', '3.3', [
      { n: 1, f: 'Marketing mix', b: 'The combination of product, price, place and promotion used to sell to a target market.' },
      { n: 2, f: 'The four stages of the product life cycle, with sales and profit at each', b: 'Introduction: low sales, little or no profit.\nGrowth: sales rise steeply, profit rising.\nMaturity: sales high and flat, profit highest.\nDecline: sales and profit falling.' },
      { n: 3, f: 'Extension strategies', b: 'Actions to keep a product’s sales from falling: new markets, new uses, adapting the product or packaging, and more advertising or sales promotion.' },
      { n: 4, f: 'Penetration pricing and price skimming', b: 'Penetration: a low price to gain market share quickly.\nSkimming: a high price at launch for a new or unique product, to gain profit from early buyers.' },
      { n: 5, f: 'Cost-plus pricing: unit cost $14 with a 50% mark-up', b: 'Price = unit cost × (1 + mark-up) = 14 × 1.5 = $21, giving $7 profit per unit.' },
      { n: 6, f: 'Competitive pricing and dynamic pricing', b: 'Competitive: setting the price in line with rivals, used when products are similar and prices are visible.\nDynamic: the price moves with demand, by time or by customer.' },
      { n: 7, f: 'Sales promotion and advertising: the difference', b: 'Sales promotion: a short-term offer to boost sales (vouchers, reward schemes, competitions, discounts).\nAdvertising: a message in a medium to inform or persuade (social media, targeted emails, leaflets, billboards).' },
      { n: 8, f: 'Distribution channels: what do a wholesaler, a retailer and an agent do?', b: 'Wholesaler: buys in bulk and sells to retailers.\nRetailer: sells to the public.\nAgent: arranges sales for a commission.\nSelling direct keeps the whole margin but the producer does the storage, delivery and selling.' },
      { n: 9, f: 'Ecommerce: advantages and disadvantages for the business', b: 'For: a wider market, lower premises costs, always open.\nAgainst: website and security costs, delivery problems, fraud, and rivals are one click away.' },
      { n: 10, f: 'Entering markets in other countries: advantages and disadvantages', b: 'For: more sales, risk spread, longer product life, possibly lower unit costs.\nAgainst: cultural differences, lack of knowledge, legal requirements, transport and exchange costs.' },
    ]),
    ...sub('marketing-0264', 'legal-controls-0264', '3.4', [
      { n: 1, f: 'Purpose of legal controls on marketing', b: 'To protect customers, especially from misleading promotion and faulty goods, and to keep competition fair for honest businesses.' },
      { n: 2, f: 'Misleading promotion, with examples', b: 'Promotion that leaves customers with a false or unclear picture and influences their decision to buy. Examples: a false claim about the product, a “was” price never really charged, hidden conditions on an offer, an unfair comparison.' },
      { n: 3, f: 'Faulty goods, and the remedies', b: 'Goods that do not work properly, are damaged or are not as described. The remedy is repair, replacement or refund.' },
      { n: 4, f: 'Opinion or checkable claim: “Our tea is delicious” and “Contains 30% less sugar”', b: '“Delicious” is opinion. “30% less sugar” can be checked, so it must be true.' },
      { n: 5, f: 'Effects of legal controls on a business’s marketing', b: 'Costs and limits: claims must be checked and supported, testing and labelling, honest prices, systems for returns, fines and bad publicity if broken.\nBenefits: greater customer trust and repeat purchases, fairer competition, better quality control.' },
      { n: 6, f: 'A firm sells 16,000 items and 2.5% are faulty. How many are faulty, and what does a recall cost at $12 each?', b: 'Faulty: 16,000 × 0.025 = 400 items.\nCost: 400 × 12 = $4,800.' },
    ]),

    // 4 Operations management
    ...sub('operations-management-0264', 'production-of-goods-and-services-0264', '4.1', [
      { n: 1, f: 'Labour productivity formula, and an example', b: 'Labour productivity = output in a period ÷ number of employees in that period.\nExample: 9,600 leaflets a day with 24 operators: 9,600 ÷ 24 = 400 leaflets per operator per day.' },
      { n: 2, f: 'Why does efficiency matter, and how can it be increased?', b: 'Higher efficiency lowers unit costs, so price can fall or profit rise, and the business competes better.\nWays: automation and other technology, and improving labour skills through training.' },
      { n: 3, f: 'Lean production, and the two methods named in the syllabus', b: 'Making products with as little waste as possible while keeping quality high.\nMethods: just-in-time (JIT) inventory control and Kaizen.' },
      { n: 4, f: 'Just-in-time (JIT): advantages and disadvantages', b: 'JIT: very little inventory is held; materials arrive as they are needed.\nFor: less cash tied up in stock, less storage space, less waste.\nAgainst: one late delivery can stop production, reliance on suppliers, fewer bulk discounts.' },
      { n: 5, f: 'Kaizen', b: 'Continuous improvement through many small changes suggested by all staff. Staff are involved and costs fall steadily, but gains are slow and some staff resist change.' },
      { n: 6, f: 'Why hold inventory?', b: 'To keep production going if a supplier is late, meet a sudden rise in demand, buy in bulk at a discount, and prepare for seasonal demand.' },
      { n: 7, f: 'Job, batch and flow production', b: 'Job: one product at a time to a customer’s order (a wedding dress).\nBatch: a group of identical products, then the equipment is changed (bread of one type).\nFlow: continuous production of identical products on a line (bottled drinks).' },
      { n: 8, f: 'Flow production: advantages and disadvantages', b: 'For: the lowest unit cost, high output, consistent quality.\nAgainst: high set-up cost, little flexibility and repetitive work.' },
    ]),
    ...sub('operations-management-0264', 'technology-and-production-of-goods-and-services-0264', '4.2', [
      { n: 1, f: 'Mechanisation and automation', b: 'Mechanisation: machines do work people did by hand, and a person usually still operates them.\nAutomation: machines or computer-controlled systems do tasks with little human input.' },
      { n: 2, f: 'Computer-Aided Manufacture (CAM)', b: 'Computers control the machines and equipment used to make a product, so a design becomes instructions the machine repeats exactly.' },
      { n: 3, f: 'Why does 3D printing suit one-off items and small runs?', b: 'It builds an object layer by layer from a digital design, so no special mould or tool is needed for each design.' },
      { n: 4, f: 'How can contactless payment raise productivity in a shop?', b: 'Each transaction takes less time, so the same till and member of staff serve more customers an hour.' },
      { n: 5, f: 'New technology in production: advantages and disadvantages for the business', b: 'For: higher output, lower unit cost, consistent quality, less waste.\nAgainst: purchase and installation cost, training, repairs and dependence on the system.' },
      { n: 6, f: 'New technology: effects on employees', b: 'Good: fewer dull, heavy or dangerous tasks, new skills, better-paid technical jobs.\nBad: job losses, retraining needed, repetitive machine-paced work.' },
      { n: 7, f: 'Output rises from 2,400 to 2,880 loaves a week with the same 16 workers. Calculate the change in labour productivity.', b: '2,400 ÷ 16 = 150 and 2,880 ÷ 16 = 180 loaves per worker.\nRise = 30, which is 30 ÷ 150 × 100 = 20%.' },
    ]),
    ...sub('operations-management-0264', 'sustainable-production-of-goods-and-services-0264', '4.3', [
      { n: 1, f: 'Sustainable production', b: 'Producing without using up resources or harming the environment, so that future production is not damaged.' },
      { n: 2, f: 'Six methods of sustainable production', b: 'Renewable energy, using fewer resources or creating less waste, reusing, recycling, environmentally friendly products, and environmentally friendly packaging.' },
      { n: 3, f: 'Reuse and recycle: the difference', b: 'Reuse: use the item again as it is (refillable containers).\nRecycle: break waste down to make new material (scrap metal melted).' },
      { n: 4, f: 'Becoming more sustainable: advantages and disadvantages', b: 'For: lower running costs, better reputation with customers, easier to meet rules, can motivate staff.\nAgainst: high start-up costs, greener inputs can cost more, savings can take years, cheaper rivals may win price-sensitive buyers.' },
      { n: 5, f: 'Solar panels cost $24,000 and save $4,800 a year. How long to recover the cost?', b: '24,000 ÷ 4,800 = 5 years.' },
    ]),
    ...sub('operations-management-0264', 'costs-scale-of-production-and-break-even-analysis-0264', '4.4', [
      { n: 1, f: 'Fixed costs and variable costs', b: 'Fixed costs: do not change with output (rent, insurance, managers’ salaries).\nVariable costs: change directly with output (materials, packaging).' },
      { n: 2, f: 'Total cost and average cost formulas', b: 'Total cost = total fixed costs + total variable costs.\nAverage cost = total cost ÷ number of units.' },
      { n: 3, f: 'Fixed costs $12,000, variable cost $3 per unit, output 4,000. Find total cost and average cost.', b: 'Total variable cost = 3 × 4,000 = $12,000.\nTotal cost = 12,000 + 12,000 = $24,000.\nAverage cost = 24,000 ÷ 4,000 = $6.' },
      { n: 4, f: 'Economies of scale, and the five types', b: 'Falling average cost as a business increases its scale of production.\nPurchasing (bulk discounts), marketing (advertising spread over more units), financial (cheaper borrowing), managerial (specialist managers), technical (large efficient machines).' },
      { n: 5, f: 'Diseconomies of scale and their causes', b: 'Rising average cost because a business has become too large.\nCauses: poor communication, lack of commitment or loyalty from employees, weak coordination, lack of control.' },
      { n: 6, f: 'Break-even output and margin of safety formulas', b: 'Contribution per unit = selling price − variable cost per unit.\nBreak-even output = fixed costs ÷ contribution per unit (in units).\nMargin of safety = actual sales − break-even sales.' },
      { n: 7, f: 'Price $9, variable cost $4, fixed costs $20,000, sales 5,100. Find break-even, margin of safety and profit.', b: 'Contribution = 9 − 4 = $5.\nBreak-even = 20,000 ÷ 5 = 4,000 units.\nMargin of safety = 5,100 − 4,000 = 1,100 units.\nProfit = 5,100 × 5 − 20,000 = $5,500.' },
      { n: 8, f: 'Break-even chart: where do the lines start, and where is break-even?', b: 'Fixed costs: a horizontal line. Total costs: start at the fixed-cost level and rise. Total revenue: starts at the origin. Break-even is where total revenue and total costs cross.' },
      { n: 9, f: 'Limitations of break-even analysis', b: 'It assumes all output is sold, price and variable cost per unit stay constant, fixed costs stay fixed, and costs and revenue can be forecast accurately. It suits one product and ignores competitors and changes in demand.' },
    ]),
    ...sub('operations-management-0264', 'quality-of-goods-and-services-0264', '4.5', [
      { n: 1, f: 'Quality', b: 'How well a good or service meets what customers expect and need, judged against its price.' },
      { n: 2, f: 'Why does quality matter to a business?', b: 'Repeat purchases and recommendations, a reputation that supports a higher price, less waste, rework and refunds, fewer complaints, and standing out from competitors.' },
      { n: 3, f: 'Quality control and quality assurance', b: 'Quality control: checking goods or services, usually after they are made, to find and remove faults.\nQuality assurance: standards, training and checks at every stage so that faults are prevented.' },
      { n: 4, f: 'Quality control: one strength and one weakness', b: 'Strength: simple, and stops faulty items reaching customers.\nWeakness: the waste has already happened, inspection costs money, and sampling can miss faults.' },
      { n: 5, f: 'Quality assurance: one strength and one weakness', b: 'Strength: fewer faults, less waste and consistent quality, with all employees involved.\nWeakness: set-up and training costs, and it needs every employee’s cooperation.' },
      { n: 6, f: 'A sample of 250 items has 5 faulty. Estimate the faulty items in a batch of 3,000.', b: 'Defect rate = 5 ÷ 250 × 100 = 2%.\nEstimate = 2% × 3,000 = 60 faulty items.' },
    ]),
    ...sub('operations-management-0264', 'location-decisions-0264', '4.6', [
      { n: 1, f: 'Factors in the location of a manufacturing business', b: 'Cost of land and premises, labour skills and wages, nearness to raw materials (heavy or bulky inputs), nearness to the market, transport and infrastructure, government help, and room to expand.' },
      { n: 2, f: 'Factors in the location of a service business', b: 'Closeness to customers, footfall and visibility, rent, competition, parking, access and safety, skilled staff, and reliable communications.' },
      { n: 3, f: 'Factors in choosing which country to locate in', b: 'Labour cost and skills, costs of land and energy, market access, transport, government attitude (grants, taxes), political stability, exchange rates, language and culture, and legal requirements.' },
      { n: 4, f: 'Footfall and infrastructure', b: 'Footfall: the number of people passing or entering a location.\nInfrastructure: the roads, ports, rail, power and communications that support a business.' },
      { n: 5, f: 'Why can the cheapest site be the wrong choice?', b: 'It may lack skilled workers, transport links or customers, and the extra costs or lost sales can exceed the saving.' },
    ]),

    // 5 Financial information and decisions
    ...sub('financial-information-and-decisions-0264', 'business-finance-0264', '5.1', [
      { n: 1, f: 'Why businesses need finance', b: 'Start-up capital, expansion or growth, replacing non-current assets, investing in new technology, and working capital for everyday costs.' },
      { n: 2, f: 'Working capital', b: 'The money available for everyday expenses: current assets − current liabilities.\nExample: current assets $12,200 and current liabilities $7,700 give working capital of $4,500.' },
      { n: 3, f: 'Internal sources of finance', b: 'Owners’ investment, retained profit, sale of unwanted assets, and working capital. Cheaper and quicker, and owners keep control, but the amount is limited.' },
      { n: 4, f: 'Leasing and hire purchase: the difference', b: 'Leasing: renting an asset; the business never owns it.\nHire purchase: a deposit then instalments; the business owns the asset after the final payment. Both cost more in total than paying cash.' },
      { n: 5, f: 'Bank overdraft and bank loan compared', b: 'Overdraft: spend beyond the account balance up to a limit; flexible, interest only on the amount used, but dear if kept long and can be recalled.\nLoan: a fixed sum for a set period, with predictable repayments that must be made even in a bad year.' },
      { n: 6, f: 'Share capital and venture capital', b: 'Share capital: a company sells shares; large sums with no repayment, but ownership and profits are shared. Only companies can issue shares.\nVenture capital: a specialist investor takes a stake, bringing money and advice; owners lose some control.' },
      { n: 7, f: 'Factors that affect the choice of source of finance', b: 'The size of the business, its legal form, the amount required, the length of time it is needed, existing loans, cost, and the purpose. Match the length of the finance to the length of the need.' },
      { n: 8, f: 'A machine costs $6,000 cash, or a $1,200 deposit plus 12 payments of $440 on hire purchase. What is the extra cost of hire purchase?', b: 'Total = 1,200 + 12 × 440 = 1,200 + 5,280 = $6,480.\nExtra cost = 6,480 − 6,000 = $480.' },
    ]),
    ...sub('financial-information-and-decisions-0264', 'cash-flow-forecast-0264', '5.2', [
      { n: 1, f: 'Cash flow forecast', b: 'An estimate of the cash expected to come in and go out of a business over future months, showing the expected cash balance.' },
      { n: 2, f: 'Net cash flow and closing balance formulas', b: 'Net cash flow = total cash inflow − total cash outflow.\nClosing balance = opening balance + net cash flow.\nThis month’s closing balance is next month’s opening balance.' },
      { n: 3, f: 'Opening balance 1,500, inflow 4,000, outflow 4,600. Find the net cash flow and closing balance.', b: 'Net cash flow = 4,000 − 4,600 = −600.\nClosing balance = 1,500 − 600 = 900.' },
      { n: 4, f: 'Why might a profitable business run out of cash?', b: 'It may sell on credit, so customers pay later than bills fall due. Profit does not mean cash is available when it is needed.' },
      { n: 5, f: 'Four ways to overcome a short-term cash flow problem', b: 'Arrange an overdraft, delay payments to suppliers, ask customers to pay more quickly, and delay the purchase of non-current assets. Most move or cover the shortage rather than create cash.' },
      { n: 6, f: 'Why does a business prepare a cash flow forecast?', b: 'To see when shortages or surpluses are expected and act in time, to plan when to buy stock or equipment, to support a request to a lender, and to compare forecast with actual figures.' },
    ]),
    ...sub('financial-information-and-decisions-0264', 'profit-and-loss-0264', '5.3', [
      { n: 1, f: 'Revenue and profit formulas', b: 'Revenue = selling price per unit × number of units sold.\nProfit = total revenue − total costs.' },
      { n: 2, f: 'Why profit matters to private sector businesses (four reasons)', b: 'Reward for risk-taking, a source of finance (retained profit), a measure of success, and to attract investors.' },
      { n: 3, f: 'The lines of a statement of profit or loss', b: 'Revenue\nless cost of sales = gross profit\nless expenses = profit' },
      { n: 4, f: 'A firm sells 7,000 candles at $8. Cost of sales is $21,000 and expenses are $27,500. Find gross profit and profit.', b: 'Revenue = 7,000 × 8 = $56,000.\nGross profit = 56,000 − 21,000 = $35,000.\nProfit = 35,000 − 27,500 = $7,500.' },
      { n: 5, f: 'Retained profit', b: 'Profit kept in the business rather than paid out to the owners. It can pay for assets or stock without interest.' },
      { n: 6, f: 'Revenue rose but profit fell. What does this suggest?', b: 'Costs (cost of sales or expenses) rose faster than revenue. Review each cost line, or the price.' },
    ]),
    ...sub('financial-information-and-decisions-0264', 'statement-of-financial-position-0264', '5.4', [
      { n: 1, f: 'Statement of financial position', b: 'A snapshot of what the business owns (assets) and owes (liabilities) on one date.' },
      { n: 2, f: 'Non-current and current assets, with examples', b: 'Non-current assets: kept for more than a year, such as property and machinery.\nCurrent assets: cash or expected to become cash within a year, such as inventory, trade receivables and cash.' },
      { n: 3, f: 'Non-current and current liabilities, with examples', b: 'Non-current liabilities: due after more than a year, such as bank loans.\nCurrent liabilities: due within a year, such as trade payables and an overdraft.' },
      { n: 4, f: 'Trade receivables and trade payables', b: 'Trade receivables: owed to the business by customers (a current asset).\nTrade payables: owed by the business to suppliers (a current liability).' },
      { n: 5, f: 'Capital employed (standard form)', b: 'Capital employed = total assets − current liabilities. It is the long-term finance in the business.' },
      { n: 6, f: 'Total assets $96,000, of which current assets $16,000. Current liabilities $9,000. Find working capital and capital employed.', b: 'Working capital = 16,000 − 9,000 = $7,000.\nCapital employed = 96,000 − 9,000 = $87,000.' },
    ]),
    ...sub('financial-information-and-decisions-0264', 'analysis-of-accounts-0264', '5.5', [
      { n: 1, f: 'Profit and profitability', b: 'Profit is an amount. Profitability measures it in proportion, against revenue or capital employed.', src: AOA },
      { n: 2, f: 'Gross profit margin, profit margin and ROCE formulas', b: 'Gross profit margin = gross profit ÷ revenue × 100.\nProfit margin = profit ÷ revenue × 100.\nROCE = profit ÷ capital employed × 100.\nAll are percentages.' },
      { n: 3, f: 'Revenue $320,000, cost of sales $208,000, expenses $80,000, capital employed $250,000. Find the gross profit margin, profit margin and ROCE.', b: 'Gross profit = 112,000, so GPM = 112,000 ÷ 320,000 × 100 = 35%.\nProfit = 32,000, so profit margin = 10%.\nROCE = 32,000 ÷ 250,000 × 100 = 12.8%.' },
      { n: 4, f: 'Gross profit margin and profit margin: the difference', b: 'The gross profit margin ignores expenses; the profit margin includes them.', src: AOA },
      { n: 5, f: 'Liquidity', b: 'A business’s capacity to meet short-term debts when payment is due, using cash or assets that can quickly be turned into cash.' },
      { n: 6, f: 'Current ratio and acid test ratio formulas', b: 'Current ratio = current assets : current liabilities.\nAcid test ratio = (current assets − inventory) : current liabilities.\nThe acid test removes inventory, the least liquid current asset.' },
      { n: 7, f: 'Current assets $120,000 (inventory $48,000), current liabilities $80,000. Find the current ratio and acid test ratio.', b: 'Current ratio = 120,000 ÷ 80,000 = 1.5:1.\nAcid test = 72,000 ÷ 80,000 = 0.9:1.' },
      { n: 8, f: 'Profitability and liquidity: the difference', b: 'Profitability is long-run earning power; liquidity is the short-run ability to pay bills.', src: AOA },
      { n: 9, f: 'Users of accounts and what they look for', b: 'Owners and managers: performance and return. Employees: job security. Suppliers: liquidity before selling on credit. Lenders: liquidity and profit before lending. Government: profit for tax.' },
      { n: 10, f: 'Limitations of ratio analysis', b: 'Figures are historical; the statement of financial position is a snapshot; one ratio is not enough without comparisons; non-financial factors are left out; ratios show that something changed, not why.' },
    ]),

    // 6 External influences on business activity
    ...sub('external-influences-on-business-activity-0264', 'economic-issues-0264', '6.1', [
      { n: 1, f: 'The four stages of the business cycle', b: 'Growth (output rising, unemployment falling), boom (output and spending at a peak), recession (output falling, unemployment rising), slump (output low for a long time, high unemployment).' },
      { n: 2, f: 'Inflation, and its effects on a business', b: 'A general rise in prices over time, shown as a percentage a year.\nEffects: costs rise, margins fall unless prices rise, customers cut back or switch to cheaper brands, and planning is harder.' },
      { n: 3, f: 'Tax on profit and tax on income: who pays and the effect', b: 'Tax on profit is paid by the business: a rise leaves less profit after tax to invest or pay owners.\nTax on income is paid by individuals: a rise cuts disposable income and lowers demand, mainly for non-essentials.' },
      { n: 4, f: 'Effects of a rise in interest rates on a business', b: 'Interest on existing loans costs more, new borrowing is dearer so projects may be dropped, and customers borrow and spend less while saving becomes more attractive.' },
      { n: 5, f: 'A loan of $200,000. The interest rate rises from 5% to 7%. What is the change in annual interest?', b: '5%: $10,000. 7%: $14,000.\nIncrease = $4,000, which is 40% more, from a rise of 2 percentage points.' },
      { n: 6, f: 'Profit before tax is $150,000. The tax rate rises from 20% to 25%. How much less does the business keep?', b: 'At 20%: tax 30,000, profit after tax $120,000.\nAt 25%: tax 37,500, profit after tax $112,500.\nIt keeps $7,500 less.' },
      { n: 7, f: 'Effect of a rise in government spending on businesses', b: 'More contracts for firms such as builders, more jobs and income, and so more demand for businesses nearby. A fall has the opposite effects.' },
    ]),
    ...sub('external-influences-on-business-activity-0264', 'business-and-the-international-economy-0264', '6.2', [
      { n: 1, f: 'Four reasons for globalisation', b: 'Improved transport links, technological change (including communication), free trade agreements, and newly industrialised countries offering new markets and low-cost production.' },
      { n: 2, f: 'Import tariff and import quota', b: 'Tariff: a tax on imported goods; it raises the importer’s cost and gives the government revenue.\nQuota: a cap on how many units of a good may enter in a set time; it does not itself raise tax revenue.' },
      { n: 3, f: 'A 25% tariff is placed on a part that costs 60 to import. What is the new cost per part?', b: '60 × 1.25 = 75' },
      { n: 4, f: 'Multinational company (MNC), and its advantages to the business', b: 'A business with operations in more than one country.\nAdvantages: larger markets, lower costs, avoiding tariffs and quotas by producing inside the country, economies of scale, spread risk.' },
      { n: 5, f: 'Advantages and disadvantages of an MNC for the host country', b: 'For: jobs, exports, increased choice, investment.\nAgainst: competition for local firms, environmental damage, exploitation of natural resources, repatriation of profits (profits sent back to the MNC’s home country).' },
      { n: 6, f: 'Home currency appreciates: effect on exporters and importers', b: 'Exporter: prices abroad rise, competitiveness falls, sales may fall.\nImporter: import prices and costs fall, margins may rise.\nDepreciation has the reverse effects.' },
      { n: 7, f: 'External cost and external benefit', b: 'External cost: a cost of a business decision borne by other people or society (noise, pollution).\nExternal benefit: a benefit received by others (trained workers, better transport).' },
    ]),
    ...sub('external-influences-on-business-activity-0264', 'business-and-the-environment-0264', '6.3', [
      { n: 1, f: 'Pollution and depletion of resources', b: 'Pollution adds harmful things to the environment; depletion uses up what is already there.', src: BENV },
      { n: 2, f: 'Renewable and non-renewable resources', b: 'A renewable resource can be replaced; a non-renewable one cannot.', src: BENV },
      { n: 3, f: 'Why might a business respond to environmental issues?', b: 'An improved reputation and increased sales, and also avoiding fines, bans and bad publicity, and lowering costs by using less energy, water or packaging.' },
      { n: 4, f: 'Ways a business can respond to environmental issues', b: 'Recycle waste, cut packaging, use renewable or lower energy, fit filters or treatment plants, use sustainable suppliers, redesign the product or process, and replant or restore land.' },
      { n: 5, f: 'A response or a legal control: the difference', b: 'A response is a choice by the business; a legal control is a rule it must follow.', src: BENV },
      { n: 6, f: 'Effects of environmental legal controls on a business', b: 'They affect how to produce (cleaner methods), what to produce or sell (banned or limited materials), where to produce or sell (limits on location), and costs, which usually rise.' },
    ]),
    ...sub('external-influences-on-business-activity-0264', 'business-and-ethical-issues-0264', '6.4', [
      { n: 1, f: 'Ethical issue', b: 'A choice between doing what is right and doing what is cheapest or most profitable. An ethical business acts on principles of right and wrong even where the law does not force it to.' },
      { n: 2, f: 'Four ethical issues named in the syllabus', b: 'Child labour, paying fair wages to employees, paying fair prices to suppliers, and using suppliers who do not damage the environment.' },
      { n: 3, f: 'Advantages and disadvantages of acting ethically', b: 'For: better reputation and sales, loyal customers, motivated staff, easier recruitment, less risk of campaigns.\nAgainst: higher costs, higher prices may lose price-sensitive customers, lower short-run profit, cheaper unethical rivals.' },
      { n: 4, f: 'Legal and ethical: the difference', b: 'The law is compulsory. Ethics goes beyond what the law demands.' },
      { n: 5, f: 'A business buys 60 tonnes of flour a year. A fair-price deal lifts the price from $500 to $560 a tonne. What is the extra cost?', b: 'Old: 60 × 500 = $30,000. New: 60 × 560 = $33,600.\nExtra cost = $3,600, which is 12% more.' },
    ]),
    ...sub('external-influences-on-business-activity-0264', 'pressure-groups-0264', '6.5', [
      { n: 1, f: 'Pressure group', b: 'An organised group that campaigns to influence the decisions of businesses or governments.' },
      { n: 2, f: 'How a pressure group can influence a business', b: 'Publicity through the media and social media, calling for a boycott, petitions and protests, lobbying the government to change the law, and negotiating with managers.' },
      { n: 3, f: 'Boycott and lobbying', b: 'Boycott: customers deliberately refuse to buy from a business, hitting sales directly.\nLobbying: trying to persuade the government to make or change a law.' },
      { n: 4, f: 'What makes a pressure group more influential?', b: 'Strong public and media support, a target that depends on its reputation, customers who can switch easily, clear and affordable demands, and access to the government.' },
      { n: 5, f: 'Pressure group and trade union: the difference', b: 'A pressure group campaigns on a cause. A trade union represents workers in their workplaces.' },
    ]),
  ],
};
