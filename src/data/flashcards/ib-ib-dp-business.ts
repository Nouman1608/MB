/**
 * D-444 -- flashcards for IB Diploma Business Management (first assessments 2024).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   "(HL only)"  The syllabus record is not tiered, so no card sets `tier`.
 *                Content the guide marks HL only (whole HL-only subtopics, and
 *                HL-only points inside SL/HL subtopics, following Marlbridge's
 *                own DP revision notes) ends its back with "(HL only)".
 *   src: '...'   The card restates that revision-notes page (found with
 *                scripts/flashcard-candidates.mjs 'DP Business Management');
 *                origin 'revision-notes'.
 *
 * The guide names most terms without defining them, so definitions are the
 * standard forms used in Marlbridge's notes. Plain text only (see types.ts).
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

const HRM = 'ib-dp-business-management-introduction-to-human-resource-management-and-organizational-structure-revision-notes';
const COMM = 'ib-dp-business-management-communication-and-industrial-employee-relations-hl-only-revision-notes';
const ACC = 'ib-dp-business-management-final-accounts-revision-notes';

const U1 = 'ib-dp-business-unit-1';
const U2 = 'ib-dp-business-unit-2';
const U3 = 'ib-dp-business-unit-3';
const U4 = 'ib-dp-business-unit-4';
const U5 = 'ib-dp-business-unit-5';

export const DECK_IB_IB_DP_BUSINESS: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-dp',
  subjectSlug: 'business',
  syllabusCode: 'DP Business Management',
  syllabusSeries: 'First assessments 2024',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'salman-ahmad', reviewedOn: '2026-11-05' },
  cards: [
    // Unit 1: Introduction to business management
    ...sub(U1, 'ib-dp-business-1-1', '1.1', [
      { n: 1, f: 'Business, goods and services', b: 'A business is an organization that uses resources to produce goods or services that meet customers\' needs and wants. Goods are tangible products; services are intangible activities done for customers.' },
      { n: 2, f: 'The four sectors of business activity', b: 'Primary: takes from nature (fishing, farming).\nSecondary: makes or builds (car assembly, baking).\nTertiary: serves (insurance, hairdressing).\nQuaternary: knowledge and information (software research, data analysis).' },
      { n: 3, f: 'Value added', b: 'The selling price of output minus the cost of the inputs bought in. Example: inputs USD 9.40, price USD 15 → value added USD 5.60.' },
      { n: 4, f: 'Entrepreneur vs social entrepreneur', b: 'Entrepreneur: a person who spots an opportunity, organizes resources and bears the risk.\nSocial entrepreneur: an entrepreneur whose main purpose is social or environmental.' },
      { n: 5, f: 'Challenges of starting a business', b: 'Raising finance with no trading history, negative cash flow early on, strong competitors, long hours and personal risk, regulation and tax, and finding staff and customers.' },
    ]),
    ...sub(U1, 'ib-dp-business-1-2', '1.2', [
      { n: 1, f: 'Private sector vs public sector', b: 'Private sector: owned by individuals or private groups, usually aiming for profit. Public sector: owned by government, providing a service to the public. A publicly held company is still in the private sector.' },
      { n: 2, f: 'Sole trader and partnership: liability and finance', b: 'Both generally have unlimited liability. Sole trader: one owner; savings, loans, retained profit. Partnership: two or more owners; partners\' capital and loans; control is shared.' },
      { n: 3, f: 'Privately held vs publicly held company', b: 'Both have limited liability. A privately held company\'s shares are not offered to the public. A publicly held company\'s shares are traded openly, giving more access to capital but more disclosure.' },
      { n: 4, f: 'Dilution: a founder holds 300 of 500 shares and 500 new shares are issued to investors', b: 'The founder\'s stake falls from 60% to 300 ÷ 1,000 × 100 = 30%. Control falls even though the number of shares held is the same.' },
      { n: 5, f: 'Social enterprises named in the guide', b: 'For-profit: private sector company, public sector company, cooperative (member-owned, usually one member one vote).\nNon-profit: NGO (independent of government, funded by donations and grants; surplus kept for the mission).' },
    ]),
    ...sub(U1, 'ib-dp-business-1-3', '1.3', [
      { n: 1, f: 'Vision statement vs mission statement', b: 'Vision: the future the organization wants (where do we want to be?); aspirational.\nMission: what the business does now, for whom and how; practical. Neither is an objective.' },
      { n: 2, f: 'Common business objectives in the guide', b: 'Growth, profit, protecting shareholder value, and ethical objectives.' },
      { n: 3, f: 'Strategic vs tactical objectives', b: 'Strategic: long term, whole organization, set by senior management, reviewed rarely.\nTactical: short to medium term, a department or project, set by middle managers, adjusted often; they must support the strategic objective.' },
      { n: 4, f: 'Corporate social responsibility (CSR): for and against', b: 'The belief that a business has responsibilities to society and the environment as well as owners. For: reputation, loyalty, easier recruitment, lower scandal risk. Against: higher costs, lower short-term profit, can be marketing with little real change.' },
      { n: 5, f: 'Return on holding a share: bought at 20.00, now 19.00, dividend 1.00', b: '(closing price − opening price + dividend) ÷ opening price × 100 = (19.00 − 20.00 + 1.00) ÷ 20.00 × 100 = 0%.' },
      { n: 6, f: 'Why might a business change its objectives?', b: 'A new competitor or technology; a slowing economy; a change of ownership (such as becoming publicly held); stakeholder demands for higher ethical standards; the business maturing from growth towards profit and dividends.' },
    ]),
    ...sub(U1, 'ib-dp-business-1-4', '1.4', [
      { n: 1, f: 'Stakeholder vs shareholder', b: 'A stakeholder is any person or group that a business\'s activities affect, or that can affect them. A shareholder owns shares in a company: one type of stakeholder, not a synonym.' },
      { n: 2, f: 'Internal vs external stakeholders', b: 'Internal: employees, managers, owners/shareholders (usual treatment).\nExternal: customers, suppliers, lenders, government, local community, competitors, pressure groups.' },
      { n: 3, f: 'Typical stakeholder conflicts', b: 'Shareholders vs employees (dividends vs pay); shareholders vs customers (profit vs low prices); managers vs owners (growth and status vs dividends); business vs community (jobs vs noise or pollution).' },
      { n: 4, f: 'Interest vs influence', b: 'Interest is what a group wants from the business; influence is what it can do to affect it. A group may care a lot and still be unable to change the outcome.' },
      { n: 5, f: 'Why does change bring stakeholder conflict?', b: 'A change shifts costs and benefits, so some groups gain and others lose, often with little notice. Losers resist; poor communication adds fear. Responses: consultation, compromise or phasing, explained priorities, sharing gains.' },
    ]),
    ...sub(U1, 'ib-dp-business-1-5', '1.5', [
      { n: 1, f: 'Economies and diseconomies of scale', b: 'Economies: average cost (total cost ÷ output) falls as output rises. Diseconomies: average cost rises with output. Example: 90,000 for 15,000 tiles (6.00 each) vs 135,000 for 30,000 (4.50 each), a 25% fall.' },
      { n: 2, f: 'Internal vs external economies of scale', b: 'Internal: from the firm\'s own size (bulk buying, large machinery, cheaper loans, specialist managers).\nExternal: from the industry or area (skilled labour pool, supplier clusters, shared infrastructure).' },
      { n: 3, f: 'Internal (organic) vs external (inorganic) growth', b: 'Internal: own resources and sales effort; gradual, lower risk, culture preserved.\nExternal: involves another business; can be sudden, higher risk because of price and fit, two cultures to join.' },
      { n: 4, f: 'Reasons for businesses to stay small', b: 'Keep control and personal service, serve a niche, stay flexible, avoid debt and stress, limited finance or resources, owner goals other than profit.' },
      { n: 5, f: 'Merger, acquisition and takeover', b: 'Merger: two firms agree to combine into one. Acquisition: one firm buys a controlling share of another. Takeover: gaining control by buying shares, friendly or hostile.' },
      { n: 6, f: 'Joint venture vs strategic alliance vs franchising', b: 'Joint venture: a new entity owned jointly by the partners. Strategic alliance: cooperation with no new entity. Franchising: the franchisor licenses brand and methods; the franchisee pays a fee and royalty (6% of 250,000 sales = 15,000).' },
    ]),
    ...sub(U1, 'ib-dp-business-1-6', '1.6', [
      { n: 1, f: 'Multinational company (MNC) and host country', b: 'An MNC has operations in more than one country. The host country is where it sets up.' },
      { n: 2, f: 'Possible benefits of an MNC to a host country', b: 'Jobs, wages and training; capital and technology; tax revenue and export earnings; supplier contracts for local firms; more consumer choice; skills transfer.' },
      { n: 3, f: 'Possible costs of an MNC to a host country', b: 'Low pay or insecure jobs; profits repatriated abroad; tax avoidance and political influence; local firms lose to bigger rivals; cultural change and pollution.' },
      { n: 4, f: 'An MNC makes 18m profit, pays 30% tax and repatriates 60% of the rest. How much stays?', b: 'Tax 5.4m; 12.6m left; 7.56m repatriated and 5.04m reinvested. Tax plus reinvestment = 10.44m stays in the host country.' },
    ]),
    // Unit 2: Human resource management
    ...sub(U2, 'ib-dp-business-2-1', '2.1', [
      { n: 1, f: 'Human resource planning', b: 'Forecasting the numbers and skills of staff needed and matching them to staff available.', src: HRM },
      { n: 2, f: 'Labour mobility', b: 'Ease with which workers move between jobs, places or countries.', src: HRM },
      { n: 3, f: 'Gig economy', b: 'Short-term, task-based or freelance work, often arranged through digital platforms.', src: HRM },
      { n: 4, f: 'Internal and external factors in human resource planning', b: 'Internal: objectives and growth plans, current workforce, budget, structure, culture.\nExternal: demographic change, labour mobility, immigration, flexi-time, the gig economy, and other STEEPLE factors.' },
      { n: 5, f: 'Why do employees resist change, and how can HR reduce it?', b: 'Causes: fear of job loss or the unknown, lost status, skills gaps, low trust, extra workload. Strategies: honest information, redeployment, training, a role in designing the change, consultation, phasing or a pilot.' },
      { n: 6, f: 'Force field analysis', b: 'List the driving and restraining forces for a change, then weigh them; resistance sits on the restraining side. (HL only)' },
    ]),
    ...sub(U2, 'ib-dp-business-2-2', '2.2', [
      { n: 1, f: 'Delegation vs decentralization', b: 'Delegation is one manager passing a task and its authority to a subordinate; decentralization is an organization-wide pattern of decisions made lower down.', src: HRM },
      { n: 2, f: 'Delayering vs downsizing', b: 'Delayering removes a level of the hierarchy; downsizing cuts the number of employees at any level.', src: HRM },
      { n: 3, f: 'Tall vs flat structures', b: 'Tall: many levels, narrow spans, long chain of command, close supervision, slower communication, higher management cost.\nFlat: few levels, wide spans, short chain, faster communication, more delegation, lower cost.' },
      { n: 4, f: 'Span of control: a manager supervises 40 staff through 5 supervisors of 8 each', b: 'The manager\'s span of control is 5 (the supervisors who report directly), not 40.' },
      { n: 5, f: 'Matrix structure: advantages and disadvantages', b: 'Employees report to two managers, such as function and project. For: shares skills across projects, better cross-function communication. Against: conflicting orders, unclear accountability.' },
      { n: 6, f: 'Handy\'s Shamrock Organization', b: 'Three leaves: core staff (essential, permanent), contractors (non-core tasks) and a flexible workforce (part-time or temporary). Project-based organization is the other HL change in structure. (HL only)', src: HRM },
    ]),
    ...sub(U2, 'ib-dp-business-2-3', '2.3', [
      { n: 1, f: 'Management vs leadership', b: 'Management: organizing resources and people to reach objectives through planning, directing, coordinating and controlling. Leadership: influencing and guiding people towards a vision. The roles overlap.' },
      { n: 2, f: 'The five leadership styles in the guide', b: 'Autocratic, paternalistic, democratic, laissez-faire and situational.' },
      { n: 3, f: 'Paternalistic vs autocratic leadership', b: 'Both leaders decide. The paternalistic leader explains and shows concern for staff welfare; staff may resent being managed "for their own good". The autocratic leader simply instructs.' },
      { n: 4, f: 'Democratic vs laissez-faire leadership', b: 'Democratic: the group is consulted or votes and the leader guides discussion; suits skilled staff but slow.\nLaissez-faire: the leader sets goals and steps back; suits experts but risks no direction.' },
      { n: 5, f: 'Situational leadership', b: 'No single best style: the leader adapts to the task, the team and the circumstances (urgency, skill, risk, culture). Flexible, but staff may feel unsure what to expect.' },
      { n: 6, f: 'Scientific vs intuitive thinking/management', b: 'Scientific: based on data, analysis and testing; evidence-based but slow and needs good data.\nIntuitive: based on experience and judgement; fast with little data, but open to bias. (HL only)' },
    ]),
    ...sub(U2, 'ib-dp-business-2-4', '2.4', [
      { n: 1, f: 'Taylor, Maslow and Herzberg: core claims', b: 'Taylor: pay motivates; design jobs scientifically (piece rate).\nMaslow: physiological, safety, love/belonging, esteem, self-actualization needs, met in order.\nHerzberg: hygiene factors prevent dissatisfaction; motivators create satisfaction.' },
      { n: 2, f: 'Herzberg: examples of hygiene factors and motivators', b: 'Hygiene: pay, working conditions, policy, supervision, job security.\nMotivators: achievement, recognition, responsibility, the work itself, advancement.' },
      { n: 3, f: 'Financial rewards', b: 'Salary, wages (time rate or piece rate), commission, performance-related pay, profit-related pay, employee share ownership schemes, fringe payments. Example: 6% commission on 48,000 sales = 2,880.' },
      { n: 4, f: 'Job enrichment, job enlargement and job rotation', b: 'Enrichment: more responsibility and challenge (vertical). Enlargement: more tasks at a similar level (horizontal). Rotation: moving between tasks.' },
      { n: 5, f: 'McClelland, self-determination, equity and expectancy theories', b: 'McClelland: needs for achievement, affiliation, power. Deci and Ryan: autonomy, competence, relatedness. Equity: fair comparison of inputs and rewards. Expectancy: effort → performance → valued reward. (HL only)' },
      { n: 6, f: 'Labour turnover: opening staff 80, closing 100, 27 leavers', b: 'Leavers ÷ average employees × 100. Average = 90, so 27 ÷ 90 × 100 = 30%. (HL only)' },
    ]),
    ...sub(U2, 'ib-dp-business-2-5', '2.5', [
      { n: 1, f: 'Organizational (corporate) culture', b: 'The shared values, beliefs and accepted behaviour in a business: "the way we do things here". Shaped by founders and leaders, history, structure, size, industry, national culture and who is hired. (HL only)' },
      { n: 2, f: 'Handy\'s Gods of management', b: 'Zeus: power culture (a central person). Apollo: role culture (rules and procedures). Athena: task culture (expertise and teams). Dionysus: existential or person culture (individual professionals). (HL only)' },
      { n: 3, f: 'Hofstede\'s cultural dimensions', b: 'Power distance; individualism vs collectivism; uncertainty avoidance; masculinity vs femininity; long-term orientation; indulgence vs restraint. They describe national culture, not one firm. (HL only)' },
      { n: 4, f: 'Triggers of a cultural clash', b: 'Growth (informal habits meet rules and layers), mergers or takeovers (two sets of values: "us and them"), and changes of leadership style. Signs: rising staff turnover, falling productivity, conflict, absenteeism. (HL only)' },
      { n: 5, f: 'Ways to manage a cultural clash', b: 'Culture audit before a merger; explain the reasons and what stays the same; consultation and mixed teams; managers model the new values; training and induction. (HL only)' },
    ]),
    ...sub(U2, 'ib-dp-business-2-6', '2.6', [
      { n: 1, f: 'Formal communication', b: 'Through official channels, usually planned and recorded.', src: COMM },
      { n: 2, f: 'Informal communication', b: 'Outside official channels, unplanned and rarely recorded.', src: COMM },
      { n: 3, f: 'Grapevine', b: 'The unofficial network through which news and rumour travel.', src: COMM },
      { n: 4, f: 'Formal vs informal communication: strengths and limits', b: 'Formal (minutes, emails, reports, intranet): a record, consistency, clear authority, but slow and impersonal.\nInformal (chat, messaging, social events): fast and builds relationships, but no record and risk of rumour.' },
      { n: 5, f: 'Barriers to communication', b: 'Language and jargon, cultural differences, noise, information overload, many levels of hierarchy, status and attitude, poor channel choice, technology problems, lack of feedback, distance and time zones.' },
    ]),
    ...sub(U2, 'ib-dp-business-2-7', '2.7', [
      { n: 1, f: 'Sources of conflict in the workplace', b: 'Pay and benefits; working conditions and hours; job security and closure fears; changes in technology or working practices; management style and poor communication; different aims of owners and employees. (HL only)' },
      { n: 2, f: 'Employee approaches to conflict', b: 'Collective bargaining (negotiation through representatives); work-to-rule (do only what the contract requires, so output falls while pay continues); strike action (stop work completely). (HL only)' },
      { n: 3, f: 'Employer approaches to conflict', b: 'Collective bargaining, threats of redundancies, changes of contract, closure, and lockouts (staff kept out until terms are accepted). (HL only)' },
      { n: 4, f: 'Conciliation vs arbitration', b: 'Conciliation: a neutral third party helps the sides reach their own agreement. Arbitration: a neutral third party rules on the dispute, giving a definite result. (HL only)' },
      { n: 5, f: 'No-strike and single-union agreements', b: 'No-strike: the union agrees not to strike, usually for an agreed disputes procedure; continuity, but staff lose their strongest tool.\nSingle-union: the employer bargains with one union for all staff; simpler, but may not represent every group. (HL only)' },
    ]),
    // Unit 3: Finance and accounts
    ...sub(U3, 'ib-dp-business-3-1', '3.1', [
      { n: 1, f: 'Role of finance for businesses', b: 'To meet start-up costs, day-to-day cash needs, and growth or change, and to give a cushion in a poor period.' },
      { n: 2, f: 'Capital vs revenue expenditure', b: 'Capital: spending on non-current assets that last beyond a year, or on improving them (machines, vehicles, buildings).\nRevenue: everyday running costs whose benefit ends within the year (wages, materials, rent, ordinary repairs).' },
      { n: 3, f: 'Classify: a USD 12,000 van and USD 1,350 of fuel and tyres', b: 'The van is capital expenditure (USD 12,000). The fuel and tyres are revenue expenditure (USD 1,350).' },
      { n: 4, f: 'How is capital expenditure usually financed, compared with revenue expenditure?', b: 'Capital spending usually needs longer-term finance. Revenue spending is met from trading cash.' },
    ]),
    ...sub(U3, 'ib-dp-business-3-2', '3.2', [
      { n: 1, f: 'Internal sources of finance', b: 'Personal funds (for sole traders), retained profit (profit after tax minus dividends) and sale of assets.' },
      { n: 2, f: 'Share capital vs loan capital', b: 'Share capital gives ownership and may earn dividends but needs no repayment; ownership is diluted. Loan capital is repaid with interest whatever the profit, often needs collateral, but keeps ownership.' },
      { n: 3, f: 'Overdraft vs trade credit vs leasing', b: 'Overdraft: flexible short-term borrowing, high rate, can be recalled. Trade credit: pay suppliers later, no interest if on time. Leasing: no large upfront cost, but total cost can exceed buying and no ownership.' },
      { n: 4, f: 'Crowdfunding, microfinance providers and business angels', b: 'Crowdfunding: many small online backers; tests demand. Microfinance: small loans for those refused by banks; costly. Business angels: a wealthy individual who gives funds plus advice for a share of ownership.' },
      { n: 5, f: 'Loan of USD 7,000 at 6% simple interest for 3 years vs leasing at USD 250 a month for 36 months', b: 'Loan: interest 7,000 × 0.06 × 3 = 1,260, total USD 8,260. Lease: 250 × 36 = USD 9,000, so the lease costs USD 740 more and gives no ownership.' },
      { n: 6, f: 'Matching a source of finance to the situation', b: 'Match the term to the use (short for short, long for long), consider the amount, the cost, the control the owner will give up, and what the business can actually access. A seasonal stock gap suits an overdraft; a new factory a long-term loan or share issue.' },
    ]),
    ...sub(U3, 'ib-dp-business-3-3', '3.3', [
      { n: 1, f: 'Fixed vs variable costs', b: 'Fixed: total does not change with output (rent, insurance). Variable: total changes with output (raw materials, packaging). Fixed cost per unit falls as output rises.' },
      { n: 2, f: 'Direct vs indirect costs (overheads)', b: 'Direct: can be traced to a particular product (ingredients for one product). Indirect: supports the whole business and cannot be traced to one product (head-office rent, general admin).' },
      { n: 3, f: 'Exam trap: variable vs direct', b: 'Variable describes behaviour (does the total change with output?); direct describes traceability (can it be linked to one product?). Every cost carries one label from each question.' },
      { n: 4, f: 'Total revenue and revenue streams', b: 'Total revenue = price × quantity sold, before costs. A revenue stream is a distinct source of revenue (a product line, service, fee, membership); total revenue is the sum across streams.' },
      { n: 5, f: '1,500 posters at USD 6; variable cost USD 1.80 each; fixed costs USD 2,370. Profit?', b: 'Revenue 9,000; variable costs 2,700; total costs 5,070; profit USD 3,930.' },
    ]),
    ...sub(U3, 'ib-dp-business-3-4', '3.4', [
      { n: 1, f: 'Profit and loss account vs balance sheet', b: 'A period versus a point in time.', src: ACC },
      { n: 2, f: 'Profit and loss account: from sales revenue to retained profit', b: 'Cost of sales = opening inventory + purchases − closing inventory. Gross profit = revenue − cost of sales; − expenses = operating profit; − interest = profit before tax; − tax = profit after tax; − dividends = retained profit.' },
      { n: 3, f: 'Balance sheet: accounting equation, net assets and working capital', b: 'Assets = liabilities + equity. Net assets = total assets − total liabilities = equity. Working capital = current assets − current liabilities.' },
      { n: 4, f: 'What do lenders look for in a business\'s final accounts?', b: 'Ability to repay, assets that could be security.', src: ACC },
      { n: 5, f: 'Intangible assets: types', b: 'Patents, trademarks or brand names, copyright, licence or franchise rights, and goodwill (paid above the value of a business\'s identifiable net assets). Hard to value and can lose worth quickly.' },
      { n: 6, f: 'Straight line vs units of production depreciation', b: 'Straight line = (cost − residual value) ÷ useful life: (38,000 − 8,000) ÷ 5 = 6,000 a year.\nUnits of production = (cost − residual value) ÷ total expected units × units used: 0.10 per km × 72,000 km = 7,200. (HL only)' },
    ]),
    ...sub(U3, 'ib-dp-business-3-5', '3.5', [
      { n: 1, f: 'Gross profit margin and profit margin (guide formulae)', b: 'Gross profit margin = gross profit ÷ sales revenue × 100.\nProfit margin = profit before interest and tax ÷ sales revenue × 100.' },
      { n: 2, f: 'ROCE and capital employed', b: 'ROCE = profit before interest and tax ÷ capital employed × 100, where capital employed = non-current liabilities + equity. Example: 56,000 ÷ 320,000 × 100 = 17.5%.' },
      { n: 3, f: 'Current ratio and acid test: stock 40,000, debtors 18,000, cash 7,000; current liabilities 50,000', b: 'Current ratio = 65,000 ÷ 50,000 = 1.3. Acid test = (65,000 − 40,000) ÷ 50,000 = 0.5. The acid test removes stock, the slowest current asset to turn into cash.' },
      { n: 4, f: 'Strategies to improve profitability ratios', b: 'Raise the selling price, find cheaper inputs, improve the product mix, cut waste, lower overheads; for ROCE, raise profit or reduce capital employed. Each has a trade-off, such as lost sales or lower quality.' },
      { n: 5, f: 'Strategies to improve liquidity ratios', b: 'Turn stock into cash, speed up debtor payments, extend supplier credit, replace short-term debt (such as an overdraft) with long-term finance, sell unused assets.' },
    ]),
    ...sub(U3, 'ib-dp-business-3-6', '3.6', [
      { n: 1, f: 'Stock turnover in times and in days', b: 'Times = cost of sales ÷ average stock. Days = average stock ÷ cost of sales × 365. Average stock = (opening + closing) ÷ 2. Example: 455,000 ÷ 65,000 = 7.0 times, or 52.1 days. (HL only)' },
      { n: 2, f: 'Debtor days and creditor days', b: 'Debtor days = debtors ÷ total sales revenue × 365.\nCreditor days = creditors ÷ cost of sales × 365. Example: 24,000 ÷ 292,000 × 365 = 30.0 debtor days. (HL only)' },
      { n: 3, f: 'Gearing ratio: non-current liabilities 60,000, equity 90,000', b: 'Gearing = non-current liabilities ÷ capital employed × 100 = 60,000 ÷ 150,000 × 100 = 40.0%. Lower it by repaying debt from retained profit or issuing shares. (HL only)' },
      { n: 4, f: 'Insolvency vs bankruptcy', b: 'Insolvency: being unable to pay debts as they fall due. Bankruptcy: a legal process or status that can follow it. Rules differ between countries. (HL only)' },
      { n: 5, f: 'Strategies to improve efficiency ratios', b: 'Stock turnover: just-in-time ordering, drop slow lines. Debtor days: credit control, early payment discounts, factoring. Creditor days: negotiate longer terms with suppliers, within the terms. (HL only)' },
    ]),
    ...sub(U3, 'ib-dp-business-3-7', '3.7', [
      { n: 1, f: 'Profit vs cash flow', b: 'Profit follows earning and incurring (sales revenue minus costs). Cash flow follows money actually received and paid. Credit sales, asset purchases, loan repayments and depreciation drive them apart.' },
      { n: 2, f: 'Sales 9,000 (5,500 cash, 3,500 on credit); costs 6,800 paid in cash. Profit and net cash flow?', b: 'Profit = 9,000 − 6,800 = 2,200. Net cash flow = 5,500 − 6,800 = −1,300. The 3,500 owed by customers explains the gap.' },
      { n: 3, f: 'Working capital and liquidity', b: 'Working capital = current assets − current liabilities: funds for day-to-day operations. Liquidity is the ability to pay short-term debts when due. Too little risks missed payments; too much leaves resources idle.' },
      { n: 4, f: 'Cash flow forecast: layout and limitations', b: 'Opening balance + inflows − outflows = closing balance, which becomes next month\'s opening balance; depreciation is left out. Limits: relies on assumptions; unexpected events; less accurate further ahead.' },
      { n: 5, f: 'Strategies for cash flow problems', b: 'Short timing gap: overdraft, delay supplier payments. Slow customers: chase receivables, shorter credit terms, factoring. Large purchase: lease, sale and leaseback, delay. Excess stock: reduce stock. Persistent losses: cut costs, raise prices.' },
    ]),
    ...sub(U3, 'ib-dp-business-3-8', '3.8', [
      { n: 1, f: 'Payback period with uneven returns: cost 90,000; returns 25,000, 35,000, 45,000, 30,000', b: 'Cumulative 25,000, 60,000, then 105,000. After two years 30,000 is still needed: 30,000 ÷ 45,000 = 0.67, so payback = 2.7 years (about 2 years 8 months).' },
      { n: 2, f: 'Average rate of return (ARR): the guide\'s formula, with the same project', b: '[(total returns − capital cost) ÷ years of use] ÷ capital cost × 100. (135,000 − 90,000) ÷ 4 = 11,250; 11,250 ÷ 90,000 × 100 = 12.5%.' },
      { n: 3, f: 'Payback vs ARR: main strength and weakness', b: 'Payback: shows speed of recovery, liquidity and risk, but ignores returns after payback.\nARR: uses the whole project life to compare with a target, but ignores when returns arrive.' },
      { n: 4, f: 'Net present value (NPV)', b: 'NPV = sum of present values of returns − original cost, where present value = return × discount factor. A higher discount rate gives smaller factors, so NPV falls. (HL only)' },
      { n: 5, f: 'NPV at 6% for the 90,000 project (factors 0.9434, 0.8900, 0.8396, 0.7921)', b: 'Present values 23,585 + 31,150 + 37,782 + 23,763 = 116,280. NPV = 116,280 − 90,000 = +26,280. (HL only)' },
    ]),
    ...sub(U3, 'ib-dp-business-3-9', '3.9', [
      { n: 1, f: 'Cost centre vs profit centre', b: 'Cost centre: costs are collected but no revenue is attributed (HR, IT support). Profit centre: costs and revenue are both identified, so profit can be found (a shop, a branch). (HL only)' },
      { n: 2, f: 'Budget and variance', b: 'Budget: a financial plan for a future period, in money terms. Variance = actual − budget; favourable if it increases profit compared with budget, adverse if it reduces it. (HL only)' },
      { n: 3, f: 'Budgeted materials 8,000, actual 7,600. Variance?', b: '7,600 − 8,000 = −400, which is −5.0% of budget. It is a cost below budget, so favourable. (HL only)' },
      { n: 4, f: 'Revenue +1,350 F; materials +640 A; wages +280 A. Profit variance?', b: '1,350 − 640 − 280 = +430 favourable: the revenue gain outweighs the extra costs, even though two cost variances are adverse. (HL only)' },
      { n: 5, f: 'Importance and limits of budgets in decision-making', b: 'Benefits: planning, coordination, control of spending, accountability, variances point to problems. Limits: forecasts can be wrong, rigidity, padded budgets, a variance shows what happened, not why. (HL only)' },
    ]),
    // Unit 4: Marketing
    ...sub(U4, 'ib-dp-business-4-1', '4.1', [
      { n: 1, f: 'Market orientation vs product orientation', b: 'Market orientation: decisions start from customer needs found through research; lowers the risk of an unwanted product. Product orientation: start from what the business can make, then seek buyers; can lead to innovation.' },
      { n: 2, f: 'Market share and market growth', b: 'Market share = business\'s sales ÷ total market sales × 100. Market growth = (this period − last period) ÷ last period × 100. Read them together.' },
      { n: 3, f: 'Sales rise from 1.8m to 1.89m while the market rises from 30.0m to 33.0m. Share?', b: 'Share falls from 6.0% to 5.7%: sales grew 5.0% but the market grew 10.0%.' },
      { n: 4, f: 'Sales needed for a target share of 15% in a market expected to be worth 40.0m', b: 'Target share as a decimal × expected market sales = 0.15 × 40.0m = 6.0m.' },
      { n: 5, f: 'Importance of market share and market leadership', b: 'For: purchasing power, brand strength, retailer and investor confidence, ability to influence price. Against: costly to win and defend, may distract from profit, complacency. (HL only)' },
    ]),
    ...sub(U4, 'ib-dp-business-4-2', '4.2', [
      { n: 1, f: 'Role of marketing planning', b: 'Turns overall objectives into marketing aims, actions, budgets and timings; sets measurable targets; coordinates actions; lets managers compare results with the plan. It relies on forecasts, so needs review.' },
      { n: 2, f: 'Segmentation, targeting and positioning', b: 'Segmentation: dividing a market into groups with shared needs or characteristics. Targeting: choosing which segment(s) to serve. Positioning: how customers see the product compared with rivals.' },
      { n: 3, f: 'Position map', b: 'A chart with two axes (for example price and quality). Brands close together are direct rivals. An empty area is only an opportunity if enough customers want it and it can be supplied profitably.' },
      { n: 4, f: 'Niche vs mass market', b: 'Niche: a small, specialized segment; often less competition and a premium price, but a small customer base and a larger rival may enter. Mass: a large market with similar needs; high competition and low margins.' },
      { n: 5, f: 'USP and differentiation', b: 'A USP is a feature or benefit that sets a product apart in a way customers value, stronger if rivals cannot copy it. Differentiation is the wider effort to stand apart; worthwhile only if extra revenue exceeds extra cost.' },
    ]),
    ...sub(U4, 'ib-dp-business-4-3', '4.3', [
      { n: 1, f: 'Benefits of sales forecasting', b: 'Plans production, purchasing and stock; shapes the cash flow forecast and borrowing case; guides recruitment; sets promotion budgets; gives targets to compare with actual sales. (HL only)' },
      { n: 2, f: 'Limitations of sales forecasting', b: 'Assumes past patterns continue; external change (competitors, tastes, economy); one-off shocks; longer forecasts carry more error; thin data for new products; bias; cost and time; false confidence. (HL only)' },
      { n: 3, f: 'Simple linear regression: line of best fit', b: 'y = a + bx, with gradient b = Sxy ÷ Sxx and intercept a = ȳ − b·x̄. Example: sales 120, 132, 145, 151, 166 give y = 109.5 + 11.1x, so year 6 ≈ 176. (HL only)' },
      { n: 4, f: 'Correlation, interpolation and extrapolation', b: 'Correlation (r from −1 to +1) shows how closely points follow a straight line. Interpolation reads within the data; extrapolation extends beyond it and is less reliable. A strong fit describes the past only. (HL only)' },
    ]),
    ...sub(U4, 'ib-dp-business-4-4', '4.4', [
      { n: 1, f: 'Why do organizations carry out market research?', b: 'To reduce risk before spending, understand customer needs and habits, test a product, price or promotion, measure market size and share, and find trends and gaps.' },
      { n: 2, f: 'Primary research methods in the guide', b: 'Surveys (wide reach, low response rates), interviews (can probe, but slow), focus groups (reveal why, but dominant voices), observations (show what people do, not why).' },
      { n: 3, f: 'Secondary research sources in the guide', b: 'Market analyses, academic journals, government publications, media articles and online content. Cheaper and faster than primary, but not designed for your question.' },
      { n: 4, f: 'Quantitative vs qualitative research', b: 'Quantitative: numerical data (how many, how much), larger samples, easy to compare. Qualitative: opinions and reasons, rich detail, hard to generalize. The type is about data, not method.' },
      { n: 5, f: 'Random, quota and convenience sampling', b: 'Random: everyone has an equal chance. Quota: fixed numbers from each group in proportion. Convenience: whoever is easiest to reach (least representative).' },
      { n: 6, f: 'Quota sample of 40 from customers who are 70% women, 30% men', b: 'Quota = group share × total sample: women 0.70 × 40 = 28, men 0.30 × 40 = 12.' },
    ]),
    ...sub(U4, 'ib-dp-business-4-5', '4.5', [
      { n: 1, f: 'Product life cycle: investment, profit and cash flow', b: 'Introduction: high investment, likely loss, negative cash. Growth: profit rising, cash often still negative. Maturity: profit highest, cash strongly positive. Decline: profit and cash falling.' },
      { n: 2, f: 'The four aspects of branding in the guide', b: 'Awareness (recognition), development (image built over time), loyalty (repeat purchase despite alternatives) and value (extra worth that supports price).' },
      { n: 3, f: 'Cost-plus, penetration, loss leader, predatory and premium pricing', b: 'Penetration: low launch price for share. Loss leader: one item below cost to attract buyers. Predatory: price set to drive rivals out. Premium: high price signalling quality. Cost-plus: unit cost + (unit cost × mark-up %), e.g. 40 + 25% = 50.' },
      { n: 4, f: 'Above, below and through the line promotion', b: 'Above the line: paid mass media (TV, press, billboards). Below the line: targeted, business-controlled contact (samples, discounts, loyalty cards). Through the line: both together under one message.' },
      { n: 5, f: 'People, processes and physical evidence (service marketing)', b: 'People: staff behaviour shapes the customer experience. Processes: reliable, quick delivery builds loyalty. Physical evidence: premises, uniforms and website are tangible cues for an intangible service.' },
      { n: 6, f: 'Dynamic, competitive and contribution pricing; PED', b: 'Dynamic: price changes with demand or time. Competitive: set by rivals. Contribution: covers variable cost plus a contribution. PED = % change in quantity ÷ % change in price (+5% price, −2% sales → −0.4, inelastic). (HL only)' },
    ]),
    ...sub(U4, 'ib-dp-business-4-6', '4.6', [
      { n: 1, f: 'Opportunities of entering and operating in international markets', b: 'A bigger customer base, risk spread across economies, economies of scale, lower costs, longer product life, brand prestige, new ideas, helpful exchange rate moves. (HL only)' },
      { n: 2, f: 'Threats of entering and operating in international markets', b: 'Culture and language mistakes, exchange rate movements, tariffs and trade barriers, legal differences, strong local rivals, logistics, political instability, higher set-up costs, ethical risk, loss of control. (HL only)' },
      { n: 3, f: 'Standardization vs adaptation of the marketing mix', b: 'Standardization: the same mix everywhere; lower cost and one global image, but risk of poor local fit. Adaptation: change parts of the mix; better fit but more cost and a possibly mixed image. (HL only)' },
      { n: 4, f: 'Landed cost: a USD 20.00 hamper, 10% tariff, USD 3.00 shipping', b: 'Tariff 2.00; landed cost = 20.00 + 2.00 + 3.00 = USD 25.00. At USD 1 = EUR 0.90 the euro price is EUR 22.50. (HL only)' },
      { n: 5, f: 'EUR 36,000 revenue; the rate moves from USD 1 = EUR 0.90 to EUR 0.80', b: '36,000 ÷ 0.90 = USD 40,000 before; 36,000 ÷ 0.80 = USD 45,000 after, a 12.5% rise. A weaker home currency helps this exporter. (HL only)' },
    ]),
    // Unit 5: Operations management
    ...sub(U5, 'ib-dp-business-5-1', '5.1', [
      { n: 1, f: 'Operations management', b: 'Planning, organizing and controlling the process that turns inputs (materials, labour, equipment, energy, information) into outputs (goods or services) that customers value.' },
      { n: 2, f: 'Responsibilities of operations management', b: 'Decide output and manage capacity, keep quality, control costs, deliver on time and manage stock, choose the production method, manage suppliers, and handle waste, energy and working conditions.' },
      { n: 3, f: 'How do changes in operations affect other business activities?', b: 'Finance (investment and unit costs), human resources (automation may cut jobs but raise training needs), marketing (quality, delivery, price). Operational changes can also affect the ethical stance.' },
      { n: 4, f: 'Capacity utilization: 450 units on a 600-unit line', b: 'Output ÷ capacity × 100 = 450 ÷ 600 × 100 = 75%.' },
    ]),
    ...sub(U5, 'ib-dp-business-5-2', '5.2', [
      { n: 1, f: 'Job, batch, mass/flow production and mass customization', b: 'Job: a one-off product to a customer\'s specification. Batch: groups of identical items, then reset. Mass/flow: large numbers of a standard product on a continuous line. Mass customization: standard modules used to personalize each unit.' },
      { n: 2, f: 'Job production: strengths and limitations', b: 'For: exact fit to the customer, high price possible, varied work. Against: slow, highest cost per unit, relies on scarce skilled labour.' },
      { n: 3, f: 'Batch cost per unit: set-up USD 300, variable cost USD 4; batches of 50 and 150', b: 'Cost per unit = variable cost + set-up cost ÷ batch size: 4 + 300 ÷ 50 = USD 10.00; 4 + 300 ÷ 150 = USD 6.00.' },
      { n: 4, f: 'Mass/flow production: strengths and limitations', b: 'For: lowest cost per unit at high output, consistent quality, fast. Against: large capital outlay, inflexible, repetitive work, a breakdown can halt the line, falls apart if demand falls.' },
      { n: 5, f: 'Mass customization: strengths and limitations', b: 'For: premium price, made to order so less unsold stock, customer data for design. Against: needs technology and modular design, longer delivery than off the shelf, complex supply chain.' },
    ]),
    ...sub(U5, 'ib-dp-business-5-3', '5.3', [
      { n: 1, f: 'Lean production, kaizen and just-in-time (JIT)', b: 'Lean: producing with less waste and greater efficiency. Kaizen: continuous improvement through many small changes by all employees. JIT: materials and production only as needed, with minimal inventory. (HL only)' },
      { n: 2, f: 'Cradle to cradle design and manufacturing', b: 'Materials are reused or safely returned to nature at end of life, so there is no waste; contrast with the linear cradle-to-grave model of make, use, dispose. (HL only)' },
      { n: 3, f: 'Quality control vs quality assurance vs TQM', b: 'QC inspects output and removes defects (detects). QA builds quality into the process (prevents). TQM is a whole-organization culture in which all staff own quality, aiming at zero defects. (HL only)' },
      { n: 4, f: 'Quality circle and benchmarking', b: 'Quality circle: a small group of workers who meet regularly to solve quality problems. Benchmarking: comparing performance with a best performer (internal, competitive or functional) and closing the gap. (HL only)' },
      { n: 5, f: 'Scrap falls from 5% to 3% of 12,000 units costing USD 8 each. Saving?', b: '12,000 × 0.05 × 8 = 4,800 before; 12,000 × 0.03 × 8 = 2,880 after; saving USD 1,920 a year. (HL only)' },
      { n: 6, f: 'National and international quality standards', b: 'Published requirements an organization is independently checked against (for example ISO 9001). They build trust and access to buyers, but cost fees, audits and paperwork, and show a system exists, not that every unit is perfect. (HL only)' },
    ]),
    ...sub(U5, 'ib-dp-business-5-4', '5.4', [
      { n: 1, f: 'Reasons for a specific location of production', b: 'Costs (land, wages, transport, tax, grants), closeness to customers and suppliers, labour supply and skills, infrastructure, political stability and trade barriers, sustainability and ethics, room to expand.' },
      { n: 2, f: 'Outsourcing/subcontracting, offshoring, insourcing and reshoring', b: 'Outsourcing: an outside firm does the work. Offshoring: production moved to another country. Insourcing: bringing an outsourced activity back in-house. Reshoring: moving offshored production back home.' },
      { n: 3, f: 'Memory aid: outsourcing vs offshoring', b: 'Outsourcing and insourcing are about who does the work; offshoring and reshoring are about where it is done. A move can combine both.' },
      { n: 4, f: 'Offshoring: home cost 48.00; abroad 30.00 + 5.00 shipping + 6% duty on production cost', b: 'Duty 1.80; landed cost 36.80; saving 11.20 a unit. On 40,000 units, 448,000 a year.' },
      { n: 5, f: 'In-house: fixed 90,000, variable 3.00 a unit. Contractor: 4.50 a unit. Crossover?', b: '90,000 + 3.00q = 4.50q, so q = 60,000. Below 60,000 units the contractor is cheaper; above it, in-house is cheaper.' },
    ]),
    ...sub(U5, 'ib-dp-business-5-5', '5.5', [
      { n: 1, f: 'Contribution per unit and total contribution', b: 'Contribution per unit = price − variable cost per unit. Total contribution = contribution per unit × units sold (or total revenue − total variable costs). Contribution is not profit: fixed costs must still be covered.' },
      { n: 2, f: 'Price 25, variable cost 10, fixed costs 9,000, output 800. Break-even and margin of safety?', b: 'Contribution 15; break-even = 9,000 ÷ 15 = 600 units. Profit = 800 × 15 − 9,000 = 3,000. Margin of safety = 200 units (25%).' },
      { n: 3, f: 'Target profit output and target price', b: 'Target profit output = (fixed costs + target profit) ÷ contribution per unit: (9,000 + 4,500) ÷ 15 = 900.\nTarget price = (fixed costs + variable costs + target profit) ÷ output: (9,000 + 9,000 + 5,400) ÷ 900 = 26.' },
      { n: 4, f: 'Effect on the break-even chart of a price rise, variable cost rise and fixed cost rise', b: 'Price up: revenue line steeper, break-even moves left. Variable cost up: total cost line steeper, break-even moves right. Fixed costs up: total cost line shifts up with the same slope, break-even moves right.' },
      { n: 5, f: 'Limitations of break-even analysis', b: 'Assumes straight lines; fixed costs can step up; assumes all output is sold; one product assumed; relies on forecasts; static; ignores non-financial factors; says nothing about whether customers will buy that quantity.' },
    ]),
    ...sub(U5, 'ib-dp-business-5-6', '5.6', [
      { n: 1, f: 'Local vs global supply chain', b: 'Local: shorter lead time and easier control, often higher input price. Global: often lower unit cost, but longer lead time, exchange-rate and disruption risk, harder oversight. (HL only)' },
      { n: 2, f: 'JIT vs just-in-case (JIC)', b: 'JIT: minimal stock, low holding cost, little cash tied up, but high dependence on suppliers and risk of stoppage. JIC: larger stocks against delay or surges, but high holding cost and risk of waste. (HL only)' },
      { n: 3, f: 'Stock control: usage 30 a day, lead time 4 days, buffer 60, reorder quantity 360', b: 'Reorder level = buffer + usage × lead time = 60 + 120 = 180. Maximum stock = 60 + 360 = 420. Days between orders = 360 ÷ 30 = 12. (HL only)' },
      { n: 4, f: 'Productivity rate, defect rate and capital productivity', b: 'Productivity rate = total output ÷ total input × 100 (guide formula). Defect rate = defective units ÷ total units × 100 (48 of 1,200 = 4%). Capital productivity = output ÷ capital employed. (HL only)' },
      { n: 5, f: 'Operating leverage', b: 'Total contribution ÷ profit from operations: how strongly a change in sales changes profit because of fixed costs. With operating leverage 3, a 5% rise in sales volume gives about a 15% rise in profit. (HL only)' },
      { n: 6, f: 'Cost to buy (CTB) vs cost to make (CTM): buy at USD 8; make at USD 5 + USD 4,500 fixed', b: 'For 2,000 units, CTB = 16,000 and CTM = 14,500, so make. Crossover = 4,500 ÷ (8 − 5) = 1,500 units; below it, buying is cheaper. (HL only)' },
    ]),
    ...sub(U5, 'ib-dp-business-5-7', '5.7', [
      { n: 1, f: 'Crisis management vs contingency planning', b: 'Contingency planning: preparing in advance for possible adverse events (proactive, before). Crisis management: the response during and after the event, to limit damage and restore operations (reactive, under pressure). (HL only)' },
      { n: 2, f: 'The four factors affecting effective crisis management', b: 'Transparency (openness about what happened), communication (who is told, by whom, how), speed (detecting, deciding and acting fast), and control (clear authority and defined roles). (HL only)' },
      { n: 3, f: 'Impact of contingency planning: cost, time, risks, safety', b: 'For: lower losses, quicker decisions, lower impact of some events, protects people. Against: equipment, training and staff time; time to write and rehearse; cannot cover every event; false confidence. (HL only)' },
      { n: 4, f: 'Backup costs 30,000 over 3 years; 20% yearly chance of a failure costing 90,000 (15,000 with backup)', b: 'Without: 0.2 × 90,000 × 3 = 54,000. With: 30,000 + 0.2 × 15,000 × 3 = 39,000. The backup is 15,000 better on these estimates. (HL only)' },
    ]),
    ...sub(U5, 'ib-dp-business-5-8', '5.8', [
      { n: 1, f: 'Research and development (R&D) and unmet needs', b: 'R&D: work to discover new knowledge and turn it into new or improved products or processes. An unmet need is one no good product satisfies: known if customers can name it, latent if they cannot. (HL only)' },
      { n: 2, f: 'Copyright, patent and trademark', b: 'Copyright protects original creative works; a patent protects a new invention; a trademark protects a sign that identifies a brand. The owner may license them for a fee. (HL only)' },
      { n: 3, f: 'Incremental vs disruptive innovation', b: 'Incremental: small improvements to what exists; lower risk and reward. Disruptive: a change that reshapes how a market works; higher risk, possibly higher reward. (HL only)' },
      { n: 4, f: 'Importance of R&D: for and against', b: 'For: new products, competitive advantage, lower costs through better processes, new markets. Against: spending is certain and results are not, payback can be slow, a product may not meet a real need. (HL only)' },
    ]),
    ...sub(U5, 'ib-dp-business-5-9', '5.9', [
      { n: 1, f: 'Big data, data analytics and data mining', b: 'Big data: very large, fast, varied data sets. Data analytics: examining data for patterns to support decisions. Data mining: searching large datasets for patterns; a pattern is not a cause. (HL only)' },
      { n: 2, f: 'Cloud computing, IoT and AI', b: 'Cloud computing: storage and processing over the internet, paid by use. Internet of things: connected objects with sensors. AI: systems doing tasks that normally need human intelligence; risks of bias and lack of transparency. (HL only)' },
      { n: 3, f: 'Cybercrime vs cybersecurity', b: 'Cybercrime: crime through computers and networks, causing loss of data, money and reputation. Cybersecurity: measures that protect systems and data; costly and never complete. (HL only)' },
      { n: 4, f: 'Digital Taylorism', b: 'Using digital tools to monitor and measure work broken into small tasks, applying Taylor\'s scientific management. For: clear targets and evidence. Against: stress, lower trust, privacy loss. (HL only)' },
      { n: 5, f: 'Customer loyalty programmes: for and against', b: 'Reward repeat purchases and collect data on members. For: repeat sales, targeted offers, customer knowledge. Against: reward costs, privacy concerns, members who would have bought anyway. (HL only)' },
    ]),
  ],
};
