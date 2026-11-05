/**
 * D-438 -- flashcards for OCR GCSE (9-1) Business J204 (Version 2.0, January 2026).
 *
 * One block per subtopic, in syllabus order. The syllabus record has seven
 * subtopics (the specification's sections 1 to 7), so card ids are
 * `<section number>-<n>` and are permanent (browser progress is keyed by them):
 * add a new card with the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs J204, or a definition from the
 *               page's key-terms table); origin 'revision-notes'.
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

const BA = 'ocr-gcse-business-business-activity-revision-notes';
const PEO = 'ocr-gcse-business-people-revision-notes';
const INF = 'ocr-gcse-business-influences-on-business-and-the-interdependent-nature-of-business-revision-notes';

const T1 = 'business-activity-marketing-and-people-ocr-gcse-business';
const T2 = 'operations-finance-and-influences-on-business-ocr-gcse-business';

export const DECK_OCR_GCSE_BUSINESS: FlashcardDeck = {
  boardSlug: 'ocr',
  qualificationSlug: 'gcse',
  subjectSlug: 'business',
  syllabusCode: 'J204',
  syllabusSeries: 'Version 2.0 (January 2026), for first assessment in 2019',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // Business 1 (J204/01): business activity, marketing and people
    ...sub(T1, 'business-activity-ocr-gcse-business', '1', [
      { n: 1, f: "Enterprise", b: "Spotting an opportunity and developing an idea for a business.", src: BA },
      { n: 2, f: "Entrepreneur", b: "The person who takes the risk of starting and running a business.", src: BA },
      { n: 3, f: "The four characteristics of an entrepreneur to know for J204", b: "Creativity, risk taking, determination and confidence. In a case study, name the characteristic, quote the evidence and say why it helps the business start or survive." },
      { n: 4, f: "Risk and reward in enterprise", b: "Risk is what may be lost: money, time, income given up. Reward is what may be gained: profit and independence." },
      { n: 5, f: "Purposes of business planning, and what a business plan helps with", b: "Planning reduces risk and helps the business succeed. A plan helps with identifying markets, obtaining finance, identifying the resources needed and achieving aims and objectives. Limits: forecasts may be wrong, it takes time, it must be updated." },
      { n: 6, f: "Unlimited liability", b: "Personal assets can be used to pay business debts. Applies to sole traders and partnerships.", src: BA },
      { n: 7, f: "Limited liability", b: "A shareholder loses no more than they invested. Applies to private limited (Ltd) and public limited (plc) companies. It limits what the owner personally loses; it does not remove the debt.", src: BA },
      { n: 8, f: "Which type of ownership suits which business?", b: "A start-up with small capital is often a sole trader or partnership; an established business needing large funds may become a plc.", src: BA },
      { n: 9, f: "A partnership owes £40,000 and has assets of £31,000. What is the shortfall the partners must cover?", b: "Shortfall = debts − assets = £40,000 − £31,000 = £9,000. With unlimited liability, the partners' personal assets can be used to pay it." },
      { n: 10, f: "The five business aims and objectives in J204", b: "Profit, survival, growth, providing a service and market share." },
      { n: 11, f: "Why do objectives change over time and differ between businesses?", b: "They change as a business evolves: survival first, then profit, then growth. They differ because of size, ownership, motives and the market (for example a charity aims to provide a service; a challenger in a crowded market aims for market share)." },
      { n: 12, f: "A firm has sales of £63,000 in a market worth £450,000. What is its market share?", b: "Market share = firm's sales ÷ total market sales × 100 = 63,000 ÷ 450,000 × 100 = 14%." },
      { n: 13, f: "Internal and external stakeholders, and what each wants", b: "Internal: owners (profit, growth), employees (pay, security, conditions).\nExternal: customers (quality, value, service), suppliers (orders, prompt payment), government (tax paid, rules followed), local community (jobs, little disturbance)." },
      { n: 14, f: "How can stakeholders affect a business?", b: "Customers stop buying, employees leave, suppliers change terms. Interests often conflict, such as wages versus profit, or growth versus community peace.", src: BA },
      { n: 15, f: "The four routes to organic growth, and how organic compares with external growth", b: "Increasing output, gaining new customers, new products, winning market share. Organic growth is slower, cheaper and easier to control; external growth is faster but costs more, and the businesses may not fit together." },
      { n: 16, f: "Merger, takeover, and horizontal, vertical and diversification growth", b: "Merger: two firms agree to combine. Takeover: one firm buys another.\nHorizontal: same stage of production. Vertical backward: buy a supplier; forward: buy a customer or retailer. Diversification: a new market or product (a brewer buying a hotel)." },
    ]),
    ...sub(T1, 'marketing-ocr-gcse-business', '2', [
      { n: 1, f: "The three purposes of marketing named in the J204 specification", b: "Identify and understand customers; inform customers; increase sales." },
      { n: 2, f: "Primary and secondary market research: methods", b: "Primary (first-hand): questionnaires, interviews, trialling, focus groups.\nSecondary (already exists): newspapers and magazines, census, websites, internal data." },
      { n: 3, f: "Primary versus secondary research: advantages and disadvantages", b: "Primary: fits the exact question and is up to date, but slower and costlier.\nSecondary: cheaper and quicker, but may be old, gathered for another purpose, and rivals can see it too." },
      { n: 4, f: "Which research method suits which purpose?", b: "Opinions and reasons: interview or focus group. Many people, simple answers: questionnaire. Reaction to a real sample: trialling. Size of a group in an area: census. Past sales trends: internal data." },
      { n: 5, f: "Quantitative versus qualitative data", b: "Quantitative: numbers (counts, percentages, averages); shows how many. Qualitative: opinions and reasons; shows why. Good decisions use both." },
      { n: 6, f: "The five bases of market segmentation in the specification, with a benefit and a drawback", b: "Age, gender, income, location and lifestyle. Benefit: the whole marketing mix can be aimed at one group. Drawback: extra research and sometimes extra products." },
      { n: 7, f: "A gym's sales are £48,000 in a £600,000 market. The market grows to £640,000 and its sales reach £54,000. What happens to its share?", b: "Before: 48,000 ÷ 600,000 × 100 = 8%. After: 54,000 ÷ 640,000 × 100 = 8.4% (1 d.p.). Its sales grew 12.5% while the market grew 6.7%, so it gained share." },
      { n: 8, f: "Market share rises from 13% to 14%. Is that a 1% rise?", b: "It is a rise of one percentage point, but a percentage change of (14 − 13) ÷ 13 × 100 = 7.7%." },
      { n: 9, f: "Product: design, invention and innovation; and the product life cycle", b: "Invention is something brand new; innovation is an improvement to an existing product. Life cycle: introduction (low sales), growth (fast rise), maturity (peak, flat), decline (falling)." },
      { n: 10, f: "Price skimming versus penetration pricing", b: "Skimming: high price first, then lower; suits a new product with few rivals.\nPenetration: low price first to win market share; suits a crowded market." },
      { n: 11, f: "Cost-plus, competitor and promotional pricing", b: "Cost-plus: unit cost plus a mark-up; simple but ignores rivals. Competitor: close to rivals' prices for similar products. Promotional: a short-term price cut for stock clearance or attention." },
      { n: 12, f: "A product costs £4.50 to make and is priced at cost plus a 30% mark-up. What is the price?", b: "30% of £4.50 = £1.35, so the price is £4.50 + £1.35 = £5.85." },
      { n: 13, f: "Methods of promotion in the specification: point of sale and advertising", b: "Point of sale: price reductions, loss leaders, competitions, free samples.\nAdvertising: social media, websites, print media, television, radio. Choose by audience, reach and cost." },
      { n: 14, f: "Loss leader versus promotional price", b: "A loss leader is one item sold below cost to draw shoppers in. A promotional price is a temporary cut to an ordinary product." },
      { n: 15, f: "Place: digital versus physical distribution channels", b: "Physical: shop, market stall; customers can see and touch the product. Digital: website, app, online marketplace; reaches further." },
      { n: 16, f: "Why must the four Ps fit together? Give an example of a clash.", b: "All four should send one message to the chosen segment. Clash: a premium gym with a high fee that advertises large discounts and fills the building with cheap equipment; the price and product signals disagree." },
    ]),
    ...sub(T1, 'people-ocr-gcse-business', '3', [
      { n: 1, f: "Purpose of the human resources function", b: "To identify and meet the human resource needs of a business: how many staff, which skills and when, then recruiting, selecting, motivating, training and keeping them." },
      { n: 2, f: "Chain of command and span of control", b: "Chain of command: the route that authority and instructions follow down the levels. Span of control: how many subordinates one manager directly supervises.", src: PEO },
      { n: 3, f: "Authority and delegation", b: "Authority: the power to make decisions and give instructions. Delegation: passing a task and the authority for it down the structure.", src: PEO },
      { n: 4, f: "Tall versus flat organisational structures", b: "Tall: many layers, narrow spans, slower communication with a risk of distortion, many promotion steps, less delegation.\nFlat: few layers, wide spans, faster communication, few promotion steps, more delegation." },
      { n: 5, f: "With a span of control of 5 at every level and 125 staff at the bottom, how many layers are there?", b: "1, 5, 25, 125: four layers. A wider span means fewer layers (a flatter structure)." },
      { n: 6, f: "Ways of working other than full-time", b: "Part-time, flexible working, temporary, working from home, working whilst mobile, self-employed. For example, temporary work covers short-term demand but brings less loyalty; working from home saves office space but is harder to supervise." },
      { n: 7, f: "Choosing a method of communication", b: "Letter: a formal record. Email: detail plus a written record. Text: short and urgent. Phone: a quick two-way answer. Meeting or presentation: discussion with a group. Social media: public, fast customer contact. Website: information at all hours." },
      { n: 8, f: "How digital technology influences communication: benefits and risks", b: "Benefits: faster messages, remote working, cheap reach to wide markets, instant customer feedback.\nRisks: information overload, data security, equipment and training costs." },
      { n: 9, f: "Reasons to recruit, and internal versus external recruitment", b: "Reasons: replace leavers, business growth, skill gaps.\nInternal: cheaper, quicker, a known candidate, but a narrow choice and it leaves a vacancy.\nExternal: wider choice and new ideas, but slower, dearer and an unknown candidate." },
      { n: 10, f: "Job description and person specification", b: "Job description: what the job involves. Person specification: what the candidate needs to be like.", src: PEO },
      { n: 11, f: "Selection methods, and recruitment versus selection", b: "Methods: CV, application form, letter of application, interviews, tests, group activities, references. Recruitment is finding applicants; selection is choosing between them." },
      { n: 12, f: "Financial and non-financial methods of motivation in J204", b: "Financial: pay, bonuses, profit sharing, fringe benefits.\nNon-financial: praise, award schemes, working environment." },
      { n: 13, f: "A bonus is 3% of sales above £30,000. Sales are £44,000. What is the bonus?", b: "Sales above £30,000 = £14,000. Bonus = 3% × £14,000 = £420." },
      { n: 14, f: "Why do motivation and staff retention matter?", b: "Motivation brings better performance and helps retention. Retained staff already know the business and its customers, and the business saves the time and expense of recruiting replacements." },
      { n: 15, f: "Induction, on-the-job and off-the-job training", b: "Induction: an introduction to the business; quick settling in. On-the-job: learn while working; cheap and relevant, but slower output and bad habits can pass on. Off-the-job: learn away from work; specialist, but costly and time away." },
      { n: 16, f: "The four areas of employment law named in the specification", b: "Discrimination, the right to a contract, holidays and hours of work. Describe the impact in general terms: higher admin and training costs, set against fairer treatment and a stronger reputation." },
    ]),

    // Business 2 (J204/02): operations, finance and influences on business
    ...sub(T2, 'operations-ocr-gcse-business', '4', [
      { n: 1, f: "Job, batch and flow production", b: "Job: a one-off product made to order (a custom wedding cake). Batch: a set quantity of identical items, then switch product (a tray of rolls). Flow: continuous production of identical items (a bottled-water line)." },
      { n: 2, f: "Strengths and weaknesses of batch and flow production", b: "Batch: variety and can follow demand, but idle time at changeovers and stock waiting.\nFlow: low unit cost at high volume, but costly set-up, inflexible, and a fault stops everything." },
      { n: 3, f: "Automation, computers and robotics in production", b: "Automation: machines do tasks with little human input. Computers: control machines, plan production, hold stock and quality data. Robotics: programmable machines that weld, pack and move goods." },
      { n: 4, f: "Benefits and drawbacks of using technology in production", b: "Benefits: consistency, speed, lower labour cost in the long run, can work through the night.\nDrawbacks: high set-up and maintenance costs, technical skills needed, redundancy worries." },
      { n: 5, f: "Quality control versus quality assurance", b: "Quality control finds faults, by inspecting and testing at the end or at checkpoints. Quality assurance prevents faults at every stage, through standards, training, supplier checks and fixing causes." },
      { n: 6, f: "Why quality matters to a business (four points)", b: "The reputation of the business; gaining and retaining customers; fewer product returns; less risk of a product recall." },
      { n: 7, f: "A sample of 400 pens has 12 faulty. What is the reject rate?", b: "Reject rate = faulty ÷ items checked × 100 = 12 ÷ 400 × 100 = 3%." },
      { n: 8, f: "A shop sells 3,000 items and 2% are returned at a cost of £20 each. What is the cost of returns?", b: "3,000 × 0.02 = 60 items returned. 60 × £20 = £1,200." },
      { n: 9, f: "Methods of selling: e-commerce, face to face and telesales", b: "E-commerce: open all hours, wide market, customer data; but delivery, returns and security costs. Face to face: demonstration, advice, immediate sale; but premises cost and limited reach. Telesales: cheap and direct; but can annoy and the product is not seen." },
      { n: 10, f: "The influence of e-commerce on business activity", b: "Small firms can reach national and overseas markets; less need for expensive high-street premises; more data on what customers view and buy; but more competition and more returns, with extra packing and delivery costs." },
      { n: 11, f: "Customer service, and the three features to know", b: "The help given before, during and after a sale, important to gain and retain customers. After-sales service (updates, repairs, returns), product knowledge (staff can advise), customer engagement (listening, replying quickly, asking for feedback)." },
      { n: 12, f: "Consumer law: what it requires and its impact on a business", b: "Goods must be safe, of satisfactory quality and as described; otherwise the customer may be entitled to a repair, replacement or refund. Impact: testing, honest descriptions, refund costs and staff training; good compliance builds trust and reputation." },
      { n: 13, f: "The four factors influencing business location", b: "Costs (rent, rates, utilities, transport), proximity to the market, labour (suitable workers at an affordable wage) and materials (how far inputs must travel). Add up each site's costs, then weigh what the numbers leave out." },
      { n: 14, f: "The four parts of procurement", b: "Identifying goods and services to buy; choosing suppliers; ordering goods and services; receiving deliveries from suppliers." },
      { n: 15, f: "Impact of logistical and supply decisions on a business", b: "Time (delays hold up production or orders), length of supply chain (more links, more delay and risk), reliability of supply (stock-outs), costs (lower prices may bring risk) and customer service (late deliveries lose trust)." },
      { n: 16, f: "Supplier P charges £5.10 a unit and supplier R £4.80. For 2,000 units, how do you choose?", b: "P: 2,000 × £5.10 = £10,200. R: 2,000 × £4.80 = £9,600, saving £600. But if R delivers late more often, a stoppage could cost more than £600, so weigh price against reliability and quality." },
    ]),
    ...sub(T2, 'finance-ocr-gcse-business', '5', [
      { n: 1, f: "Purpose of the finance function", b: "To provide financial information and to support business planning and decision making. What finance reports affects the other functions: tight cash can limit marketing and recruitment; strong profit can allow expansion." },
      { n: 2, f: "The five reasons a business needs finance (J204)", b: "Establishing a new business, funding expansion, running the business, recruitment and marketing." },
      { n: 3, f: "Loan versus overdraft", b: "Loan: borrow a sum and repay with interest; suits large, long-term needs.\nOverdraft: spend beyond the account balance up to a limit; suits short-term gaps in cash." },
      { n: 4, f: "Retained profit, sale of assets and owners' capital as sources of finance", b: "Retained profit: profit kept in the business; only for established firms. Sale of assets: raises cash without borrowing, but the asset is lost. Owners' capital: the owner's own money; suits new businesses and small top-ups." },
      { n: 5, f: "Trade credit, new partner, share issue and crowdfunding", b: "Trade credit: pay suppliers later, delaying cash outflow. New partner: a co-owner brings money and skills. Share issue: sell shares to raise larger sums. Crowdfunding: many small contributions, usually online, for ideas with public appeal." },
      { n: 6, f: "How to choose a suitable source of finance", b: "Identify how much is needed and for how long; whether the business is new (no profit history) or established; pick a source that fits both; then give a drawback such as interest, lost control or a failed target." },
      { n: 7, f: "Revenue, total costs and profit: formulas", b: "Revenue = selling price × quantity sold.\nTotal costs = fixed costs + variable costs.\nProfit or loss = revenue − total costs (a negative answer is a loss)." },
      { n: 8, f: "Revenue £60,000, cost of sales £39,000, other expenses £15,000. Find gross and net profit margins.", b: "Gross profit = £21,000; margin 21,000 ÷ 60,000 × 100 = 35%.\nNet profit = £21,000 − £15,000 = £6,000; margin 6,000 ÷ 60,000 × 100 = 10%." },
      { n: 9, f: "Interpreting profit margins", b: "A higher margin means more profit from each pound of revenue. Compare with last year, a rival or a target. If gross margin falls, look at cost of sales or pricing; if gross margin holds but net margin falls, look at other expenses." },
      { n: 10, f: "Average rate of return (ARR): formula and example", b: "ARR = average annual profit ÷ cost of investment × 100.\nA £20,000 machine returns £32,500 over 5 years: profit £12,500, £2,500 a year; 2,500 ÷ 20,000 × 100 = 12.5%." },
      { n: 11, f: "Break-even, contribution per unit and the break-even formula", b: "Break-even: total costs = total revenue (no profit, no loss).\nContribution per unit = selling price − variable cost per unit.\nBreak-even quantity = fixed costs ÷ contribution per unit (round up if not whole)." },
      { n: 12, f: "Price £6, variable cost £2.50, fixed costs £1,750 a month. Find the break-even quantity.", b: "Contribution = £6 − £2.50 = £3.50. Break-even = 1,750 ÷ 3.50 = 500 units. Each sale above 500 earns £3.50 profit." },
      { n: 13, f: "Usefulness and limitations of break-even", b: "Useful for marketing and planning decisions: pricing, sales targets, testing whether a plan is realistic. Limits: assumes everything made is sold and that prices and costs stay constant." },
      { n: 14, f: "Cash versus profit, and why cash matters", b: "Cash is money actually received and paid; profit is revenue minus costs for a period. Cash provides liquidity, so the business can meet short-term debts. A profitable business can run short of cash if customers pay later than bills are due." },
      { n: 15, f: "Why a cash-flow forecast is useful, with an example", b: "It is a planning tool, anticipates periods of cash shortage, enables remedies to be put in place and provides targets.\nOpening £900, cash in £4,200, cash out £3,500: net cash flow £700, closing balance £1,600." },
      { n: 16, f: "Remedies for a cash shortage", b: "An overdraft, longer trade credit from suppliers, chasing customers who owe money, delaying spending, or selling an asset. Choose the one that fits the size and length of the gap." },
    ]),
    ...sub(T2, 'influences-on-business-ocr-gcse-business', '6', [
      { n: 1, f: "Ethical consideration, and the ethical areas named in J204", b: "A question of right and wrong a business weighs in a decision. Areas: treatment of workers, suppliers and customers; sourcing of materials; marketing decisions.", src: INF },
      { n: 2, f: "The environmental areas named in J204, and the meaning of sustainability", b: "Sustainability, waste disposal, pollution and climate change. Sustainability: using resources so they are not used up for the future.", src: INF },
      { n: 3, f: "Ethical versus environmental considerations", b: "Ethical is about how people are treated and how honestly the business behaves. Environmental is about the natural world. Sourcing of materials can be both, so say which angle you are using." },
      { n: 4, f: "Typical ways a business responds to ethical and environmental pressure", b: "Change what it makes (less packaging), how it makes it (cut energy use, reduce waste), where it buys (a supplier with fair working conditions) and what it says (honest marketing)." },
      { n: 5, f: "The three links to make in an ethical or environmental answer", b: "Effect on cost (higher or lower), reputation (better or worse) and customers (more or fewer). Many choices cost money now and pay back later through reputation or lower running costs." },
      { n: 6, f: "Economic climate", b: "The general state of the economy in which a business trades.", src: INF },
      { n: 7, f: "Effects of a rise or fall in consumer income", b: "Rise: more demand, especially for non-essentials; the business may need more stock and staff.\nFall: less demand; customers trade down to cheaper options. Basic goods usually hold up better than luxuries." },
      { n: 8, f: "Effects of a rise or fall in unemployment", b: "Rise: fewer people with wages, so demand weakens, but more applicants for each vacancy.\nFall: more spending, but harder to recruit and wages may rise." },
      { n: 9, f: "Globalisation and multinational", b: "Globalisation: economies becoming more connected, so trade and investment cross borders more easily. Multinational: a business operating in more than one country, one type of business that grows because of globalisation.", src: INF },
      { n: 10, f: "The four impacts of globalisation named in the specification", b: "Growth of multinational companies; influences on business location; international branding (selling under a brand recognised across several countries); how businesses compete internationally." },
      { n: 11, f: "Opportunities and risks of globalisation for a business", b: "Opportunities: larger markets, cheaper inputs, wider choice of sites, a stronger brand.\nRisks: tougher competition, longer supply chains, changes in exchange rates, reputation harm if conditions in other countries are criticised." },
      { n: 12, f: "A variable cost of £5.00 rises by 8% after a switch to a fair-trade style supplier. What is the new cost?", b: "8% of £5.00 = £0.40, so the new cost is £5.40 per unit." },
      { n: 13, f: "Revenue of £20,000 falls by 10% in a downturn. What is the new revenue?", b: "10% of £20,000 = £2,000, so the new revenue is £18,000." },
    ]),
    ...sub(T2, 'interdependent-nature-of-business-ocr-gcse-business', '7', [
      { n: 1, f: "Interdependence", b: "Each business function (operations, finance, human resources, marketing) relies on the others.", src: INF },
      { n: 2, f: "Marketing wins a large rise in orders. Which other functions must you check?", b: "Operations: capacity and stock. Finance: cash needed up front. Human resources: staff hours. And marketing must check the extra demand can actually be met." },
      { n: 3, f: "A business launches a new product. How are all four functions involved?", b: "Marketing: price and promotion. Operations: production method. Finance: funding. Human resources: skills needed." },
      { n: 4, f: "A business cuts costs. What could be affected?", b: "Quality, staff morale, reputation and customer service." },
      { n: 5, f: "Risk and reward", b: "Risk: the chance that a decision turns out badly. Reward: the benefit if a decision works. Higher possible reward usually means higher risk.", src: INF },
      { n: 6, f: "How can a business reduce the risk of a decision?", b: "Research first, start small, keep cash reserves and spread its sales." },
      { n: 7, f: "Margin of safety", b: "Actual or forecast sales − break-even quantity. It shows how far sales could fall before the business makes a loss." },
      { n: 8, f: "Price £12, variable cost £7.50, fixed costs £9,000 a year. Find break-even, then the profit and margin of safety at 2,400 units.", b: "Contribution = £4.50. Break-even = 9,000 ÷ 4.50 = 2,000 units.\nAt 2,400: profit = 2,400 × 4.50 − 9,000 = £1,800; margin of safety = 400 units." },
      { n: 9, f: "Same product (contribution £4.50, fixed costs £9,000). What if only 1,500 units sell, and what does this show?", b: "1,500 × 4.50 − 9,000 = −£2,250, a loss of £2,250. The reward is £1,800 if the forecast is right; the risk is a £2,250 loss. The forecast needs support from market research." },
      { n: 10, f: "Revenue £60,000, cost of sales £42,000, other expenses £9,000. Find both profit margins.", b: "Gross profit £18,000: 18,000 ÷ 60,000 × 100 = 30%.\nNet profit £9,000: 9,000 ÷ 60,000 × 100 = 15%." },
      { n: 11, f: "Limitations of financial information in decision making", b: "It is based on the past or on forecasts, leaves out things that cannot be counted, and does not explain why a figure happened. Qualitative information, such as customer opinions, should sit beside the numbers." },
      { n: 12, f: "Why does a fall in sales hurt profit by a larger percentage than revenue?", b: "Fixed costs stay the same when sales fall, so profit falls by a larger percentage than revenue." },
      { n: 13, f: "Margin versus profit", b: "A margin is a percentage of revenue; profit is an amount of money. Profit can rise while a margin falls." },
      { n: 14, f: "How to answer a synoptic (section 7) question", b: "Use the business, product, size and figures in the stem, and show how a decision in one function affects the others. Answering from one function only loses marks. Finish evaluate or justify answers with a reasoned judgement." },
    ]),
  ],
};
