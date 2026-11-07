/**
 * D-444 -- flashcards for Pearson Edexcel GCSE (9-1) Business 1BS0 (Issue 2, July 2022).
 *
 * One block per subtopic (the specification's numbered content items 1.1.1 to
 * 2.5.4), in syllabus order. Card ids are `<item number>-<n>` and are permanent
 * (browser progress is keyed by them): add a new card with the next unused n,
 * never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 1BS0, or a definition from the
 *               page's key-terms table); origin 'revision-notes'.
 *
 * Not tiered. Formulae follow the forms on the course's own notes (Appendix 3
 * of the specification, or the standard form where the notes say so).
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

const ENT = 'edexcel-gcse-business-enterprise-and-entrepreneurship-revision-notes';
const OPP = 'edexcel-gcse-business-spotting-a-business-opportunity-and-customer-needs-revision-notes';
const AIM = 'edexcel-gcse-business-aims-objectives-revenue-costs-and-profit-revision-notes';
const CASH = 'edexcel-gcse-business-cash-flow-and-sources-of-finance-for-a-small-business-revision-notes';
const LIAB = 'edexcel-gcse-business-limited-liability-and-business-location-revision-notes';
const MIX = 'edexcel-gcse-business-the-marketing-mix-and-the-business-plan-revision-notes';
const LEG = 'edexcel-gcse-business-legislation-the-economy-and-external-influences-revision-notes';
const GRW = 'edexcel-gcse-business-business-growth-and-changing-aims-revision-notes';
const GLB = 'edexcel-gcse-business-globalisation-ethics-and-the-environment-revision-notes';
const PP = 'edexcel-gcse-business-product-and-price-decisions-revision-notes';
const PRO = 'edexcel-gcse-business-promotion-place-and-combining-the-marketing-mix-revision-notes';
const OPS = 'edexcel-gcse-business-business-operations-and-managing-stock-revision-notes';
const QS = 'edexcel-gcse-business-quality-and-the-sales-process-revision-notes';
const ORG = 'edexcel-gcse-business-organisational-structures-and-job-roles-revision-notes';
const TM = 'edexcel-gcse-business-training-and-motivation-revision-notes';

export const DECK_EDEXCEL_GCSE_BUSINESS: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'gcse',
  subjectSlug: 'business',
  syllabusCode: '1BS0',
  syllabusSeries: 'Issue 2, July 2022',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'salman-ahmad', reviewedOn: '2026-11-05' },
  cards: [
    // 1.1 Enterprise and entrepreneurship
    ...sub('enterprise-and-entrepreneurship-1bs0', 'the-dynamic-nature-of-business-1bs0', '1.1.1', [
      { n: 1, f: "The three reasons the specification gives for new business ideas", b: "Changes in technology; changes in what consumers want; products and services becoming obsolete." },
      { n: 2, f: "Obsolete", b: "Out of date because something better has replaced it, so few people still want it.", src: ENT },
      { n: 3, f: "Original ideas", b: "New to the market. No direct rivals at first, but demand is untested.", src: ENT },
      { n: 4, f: "Adapting existing products, services or ideas", b: "Changing what is already sold. Demand is proven, but rivals exist.", src: ENT },
      { n: 5, f: "Dynamic (as in the dynamic nature of business)", b: "Always changing, so ideas and markets keep shifting.", src: ENT },
    ]),
    ...sub('enterprise-and-entrepreneurship-1bs0', 'risk-and-reward-1bs0', '1.1.2', [
      { n: 1, f: "The three risks and three rewards of enterprise named in the specification", b: "Risks: business failure, financial loss, lack of security.\nRewards: business success, profit, independence." },
      { n: 2, f: "Business failure versus financial loss", b: "Failure is the business closing. Financial loss is costs exceeding revenue, or money being lost. A business can make a loss for a while without failing, but losses over time may cause failure." },
      { n: 3, f: "Revenue, total cost and profit: formulas", b: "Revenue = price × quantity.\nTotal cost = total fixed costs + total variable costs.\nProfit = revenue − total costs.\nFormulae are not provided in the exam, so learn them." },
      { n: 4, f: "A shop sells 140 items at £9 each with total costs of £1,000. Find the profit. What if sales fall to 100?", b: "Revenue = 9 × 140 = £1,260; profit = 1,260 − 1,000 = £260.\nAt 100 items: revenue £900, a loss of £100." },
      { n: 5, f: "Independence (as a reward of enterprise)", b: "Being your own boss and choosing how to work.", src: ENT },
    ]),
    ...sub('enterprise-and-entrepreneurship-1bs0', 'the-role-of-business-enterprise-1bs0', '1.1.3', [
      { n: 1, f: "The three purposes of business activity", b: "To produce goods or services, to meet customer needs and to add value." },
      { n: 2, f: "Add value", b: "Make the output worth more to the customer than the inputs bought. Value added is not all profit, because wages and rent still have to be paid.", src: ENT },
      { n: 3, f: "The five ways of adding value in the specification", b: "Convenience (saves time or effort), branding (a trusted name), quality (better made or delivered), design (looks or works better) and unique selling points." },
      { n: 4, f: "Unique selling point (USP)", b: "A feature that rivals do not offer.", src: ENT },
      { n: 5, f: "The three roles of an entrepreneur", b: "Organises resources (premises, labour, equipment, money), makes business decisions (what, where, how and for whom) and takes risks (puts time and money in without a guarantee)." },
      { n: 6, f: "Goods and services", b: "Goods are physical items sold to customers. Services are actions done for customers.", src: ENT },
    ]),

    // 1.2 Spotting a business opportunity
    ...sub('spotting-a-business-opportunity-1bs0', 'customer-needs-1bs0', '1.2.1', [
      { n: 1, f: "The four customer needs named in the specification", b: "Price, quality, choice and convenience." },
      { n: 2, f: "Why identify customer needs? Generating sales", b: "Offering what customers want means more of them buy.", src: OPP },
      { n: 3, f: "Why identify customer needs? Business survival", b: "A small business cannot afford to make something nobody needs.", src: OPP },
      { n: 4, f: "Give one business response to each customer need: price, quality, choice, convenience", b: "Price: value ranges, discounts. Quality: better materials, checks. Choice: more flavours, sizes or styles. Convenience: late opening, delivery, online ordering." },
    ]),
    ...sub('spotting-a-business-opportunity-1bs0', 'market-research-1bs0', '1.2.2', [
      { n: 1, f: "The four purposes of market research", b: "Identify and understand customer needs; identify gaps in the market; reduce risk (not remove it); inform business decisions." },
      { n: 2, f: "Primary and secondary research methods in the specification", b: "Primary (new, first-hand): survey, questionnaire, focus group, observation.\nSecondary (existing, collected by someone else): internet, market reports, government reports." },
      { n: 3, f: "Qualitative and quantitative data", b: "Quantitative: data in number form (42% would buy); shows how many. Qualitative: descriptive data such as opinions, feelings and reasons ('the packaging feels cheap'); shows why.", src: OPP },
      { n: 4, f: "How does social media help market research?", b: "It is cheap and quick; polls, comments and reviews; it reaches people who would not answer a street survey.", src: OPP },
      { n: 5, f: "Limits of social media for market research", b: "Followers already like the business; anyone can vote; replies may not match the target market.", src: OPP },
      { n: 6, f: "Five checks on whether research data is reliable", b: "The sample is large enough; it represents the target market; questions are not leading; data is up to date; the source is trustworthy." },
    ]),
    ...sub('spotting-a-business-opportunity-1bs0', 'market-segmentation-1bs0', '1.2.3', [
      { n: 1, f: "Market segmentation", b: "Dividing a market into groups of customers with shared characteristics.", src: OPP },
      { n: 2, f: "The five bases for segmentation in the specification", b: "Location, demographics, lifestyle, income and age." },
      { n: 3, f: "Market mapping", b: "Plotting businesses on two axes (often price and quality) to see the competition and any gap.", src: OPP },
      { n: 4, f: "How to use a market map, and its main limit", b: "Plot each competitor, look for empty areas (possible gaps) and crowded areas (strongest competition). An empty area may mean there is no demand, so test the gap with primary research first." },
      { n: 5, f: "Why do businesses segment their market?", b: "To aim the product, price and promotion at the group most likely to buy, instead of spending on everyone." },
    ]),
    ...sub('spotting-a-business-opportunity-1bs0', 'the-competitive-environment-1bs0', '1.2.4', [
      { n: 1, f: "The five factors for judging competitors' strengths and weaknesses", b: "Price, quality, location, product range and customer service." },
      { n: 2, f: "How competition affects decisions: price", b: "Match, undercut or stay above rivals.", src: OPP },
      { n: 3, f: "How competition affects decisions: quality and service, and range", b: "Quality and service: improve if rivals are better. Range: widen to fill a gap, or specialise.", src: OPP },
      { n: 4, f: "How competition affects decisions: location and promotion", b: "Location: pick a site near or away from rivals. Promotion: highlight what makes the business different.", src: OPP },
      { n: 5, f: "A business has sales of £21,000 in a market worth £140,000. What is its market share?", b: "Market share = business sales ÷ total market sales × 100 = 21,000 ÷ 140,000 × 100 = 15%." },
    ]),

    // 1.3 Putting a business idea into practice
    ...sub('putting-a-business-idea-into-practice-1bs0', 'business-aims-and-objectives-1bs0', '1.3.1', [
      { n: 1, f: "Business aim versus business objective", b: "An aim is a long-term, general goal. An objective is a specific, usually measurable target that moves the business towards its aim.", src: AIM },
      { n: 2, f: "The financial objectives named in the specification", b: "Survival, profit, sales, market share and financial security." },
      { n: 3, f: "The non-financial objectives named in the specification", b: "Social objectives, personal satisfaction, challenge, and independence and control." },
      { n: 4, f: "Why do aims and objectives differ between businesses?", b: "Stage (new businesses often aim for survival), the owner's motives, size and ownership (investors press for profit), type of business (social objectives for community projects), and market conditions (tough competition shifts the focus to survival)." },
      { n: 5, f: "Survival versus financial security; sales versus profit", b: "Survival is staying open; financial security is a stable income and a cash cushion. Sales can rise while profit falls, for example after a price cut." },
    ]),
    ...sub('putting-a-business-idea-into-practice-1bs0', 'business-revenues-costs-and-profits-1bs0', '1.3.2', [
      { n: 1, f: "Fixed costs and variable costs, with examples", b: "Fixed: do not change with output in the period (rent, insurance, a software subscription). Variable: change as output changes (raw materials, packaging, parts)." },
      { n: 2, f: "Interest on loans (%): the Appendix 3 formula and an example", b: "(total repayment − borrowed amount) ÷ borrowed amount × 100.\nBorrow £4,000, repay £4,360: 360 ÷ 4,000 × 100 = 9%." },
      { n: 3, f: "Break-even point in units, break-even revenue and margin of safety: formulas", b: "Break-even (units) = fixed costs ÷ (sales price − variable cost).\nBreak-even revenue = break-even units × sales price.\nMargin of safety = actual or budgeted sales − break-even sales." },
      { n: 4, f: "Price £40, variable cost £15, fixed costs £5,000. Find break-even output, break-even revenue and the margin of safety at 260 units.", b: "Break-even = 5,000 ÷ (40 − 15) = 200 units. Break-even revenue = 200 × £40 = £8,000. Margin of safety = 260 − 200 = 60 units." },
      { n: 5, f: "Same business (price £40, variable cost £15, fixed costs £5,000). Find the profit at 260 units.", b: "Revenue 260 × £40 = £10,400. Total costs £5,000 + (260 × £15) = £8,900. Profit = £1,500." },
      { n: 6, f: "On a break-even diagram, what happens when price rises, fixed costs rise, or variable costs change?", b: "A higher price makes the revenue line steeper, so break-even output falls. Higher fixed costs lift the start of the total costs line, so break-even rises. A change in variable cost changes the slope of the total costs line." },
    ]),
    ...sub('putting-a-business-idea-into-practice-1bs0', 'cash-and-cash-flow-1bs0', '1.3.3', [
      { n: 1, f: "Why is cash important to a business?", b: "To pay suppliers, overheads (rent, utilities, insurance) and employees, and to prevent business failure. Running out of cash can lead to insolvency." },
      { n: 2, f: "Insolvency", b: "A business cannot pay its debts when they are due. A profitable business can still become insolvent if cash arrives too late.", src: CASH },
      { n: 3, f: "Cash versus profit", b: "Cash is money actually received or paid, counted when money changes hands. Profit is sales revenue minus costs, counted when the sale is made or the cost incurred. A business can be profitable but cash-poor, or cash-rich but loss-making." },
      { n: 4, f: "Cash-flow terms: net cash flow, opening balance and closing balance", b: "Net cash flow = cash inflows − cash outflows.\nOpening balance = closing balance of the previous period.\nClosing balance = opening balance + net cash flow." },
      { n: 5, f: "Opening balance £1,000, inflows £8,200, outflows £9,050. Find net cash flow and the closing balance.", b: "Net cash flow = 8,200 − 9,050 = −£850. Closing balance = 1,000 + (−850) = £150." },
      { n: 6, f: "Exam trap: is a cash inflow the same as revenue?", b: "No. A loan received is a cash inflow but not revenue. A negative net cash flow is also not the same as a loss." },
    ]),
    ...sub('putting-a-business-idea-into-practice-1bs0', 'sources-of-business-finance-1bs0', '1.3.4', [
      { n: 1, f: "Short-term and long-term sources of finance in the specification", b: "Short-term: overdraft, trade credit.\nLong-term: personal savings, venture capital, share capital, loans, retained profit, crowd funding." },
      { n: 2, f: "Overdraft and trade credit: advantage and disadvantage of each", b: "Overdraft: flexible, borrow only what is needed; but interest can be high and the limit may be cut.\nTrade credit: usually no interest, stock sold before it is paid for; but may not be offered to new businesses and early-payment discounts are lost." },
      { n: 3, f: "Venture capital versus share capital", b: "Venture capital: an investor funds the business for a stake and often a say; large sums, no monthly repayments, but the owner gives up some ownership, control and profit. Share capital: a company sells shares; no repayment, but ownership is shared and dividends paid." },
      { n: 4, f: "Loans, personal savings, retained profit and crowd funding", b: "Loans: a certain amount, ownership kept, but repayments must be met. Personal savings: no interest, but a limited sum. Retained profit: no interest, but only if profitable. Crowd funding: many small contributions online; tests demand but needs enough backers." },
      { n: 5, f: "A business borrows £7,500 and repays £9,000 in total. What is the interest as a percentage?", b: "Interest = 9,000 − 7,500 = £1,500. 1,500 ÷ 7,500 × 100 = 20%." },
      { n: 6, f: "Why is finance harder for a start-up than an established small business?", b: "A start-up has no trading history and no retained profit, and trade credit may be hard to get. An established business can use retained profit, and its record helps with lenders and suppliers." },
    ]),

    // 1.4 Making the business effective
    ...sub('making-the-business-effective-1bs0', 'options-for-start-up-and-small-businesses-1bs0', '1.4.1', [
      { n: 1, f: "Unlimited liability and limited liability", b: "Unlimited: the owner is personally responsible for every business debt (sole traders and ordinary partnerships). Limited: the owner can lose only the amount invested (shareholders in a private limited company).", src: LIAB },
      { n: 2, f: "Sole trader, partnership and private limited company: one strength and one weakness of each", b: "Sole trader: full control and keeps all profit; personal risk and little capital.\nPartnership: pooled money and skills; disagreements, shared profit, personal risk.\nLtd: owner protection, can sell shares; more paperwork, shares not sold to the public." },
      { n: 3, f: "A sole trader's business owes £35,000 and its assets raise £22,500. How much must the owner fund personally?", b: "Shortfall = 35,000 − 22,500 = £12,500. With unlimited liability, the owner must pay it from personal assets." },
      { n: 4, f: "Franchisor and franchisee: who pays what?", b: "The franchisor owns the brand and method and provides support; it usually receives an initial fee and a royalty. The franchisee runs the outlet, pays the fee, royalty and running costs, and keeps the profit left." },
      { n: 5, f: "Advantages and disadvantages of franchising for the franchisee", b: "Gains: a recognised brand, a tested system, less risk, support.\nLosses: fees and royalties, little freedom over products and prices, a reputation shared with other outlets." },
      { n: 6, f: "Initial fee £15,000 plus a 4% royalty on sales revenue of £225,000. What does the franchisee pay in the first year?", b: "Royalty = 0.04 × 225,000 = £9,000. First-year payments = 15,000 + 9,000 = £24,000." },
    ]),
    ...sub('making-the-business-effective-1bs0', 'business-location-1bs0', '1.4.2', [
      { n: 1, f: "The four proximity factors for location named in the specification", b: "Proximity to the market, labour, materials and competitors." },
      { n: 2, f: "Which location factor matters most for each type of business activity?", b: "Retail and personal services: the market (passing customers). Manufacturing with heavy or bulky inputs: materials. Skill-based work: labour. Perishable goods: speed to the market or the source." },
      { n: 3, f: "Being near competitors: gain and risk", b: "Gain: shared footfall. Risk: shared customers. Being away from rivals can give a local monopoly, but low passing trade." },
      { n: 4, f: "How does the internet affect location decisions?", b: "With e-commerce customers can be anywhere, so being near the market matters less and cheaper premises become possible. Premises still matter for storage, dispatch, trying goods and services delivered in person." },
      { n: 5, f: "Exam trap: does the internet make premises unnecessary?", b: "No. Delivery, storage and click-and-collect bring new costs, and many firms mix an online presence with a shop or depot.", src: LIAB },
    ]),
    ...sub('making-the-business-effective-1bs0', 'the-marketing-mix-1bs0', '1.4.3', [
      { n: 1, f: "The marketing mix", b: "The set of decisions a business makes about product, price, promotion and place.", src: MIX },
      { n: 2, f: "Why each element of the mix matters", b: "Product must meet a need of the target market. Price affects demand and profit and must cover costs. Promotion: customers cannot buy what they do not know about. Place: customers must be able to get the product easily." },
      { n: 3, f: "How do the competitive environment and changing consumer needs affect the mix?", b: "Rivals' prices, products and promotion may lead the business to adjust price, find a different feature or promote its strengths. Changing tastes, incomes and lifestyles may mean reviewing all four elements." },
      { n: 4, f: "How do e-commerce and digital communication affect the mix?", b: "E-commerce mainly changes place (wider reach), but also price (easy comparison) and product (wider range). Digital communication changes promotion first: targeted, quick, low cost, but poor reviews spread fast." },
      { n: 5, f: "What does balancing the marketing mix mean?", b: "Making the four choices consistent with each other and the target market. It does not mean spending equally on each." },
    ]),
    ...sub('making-the-business-effective-1bs0', 'business-plans-1bs0', '1.4.4', [
      { n: 1, f: "What a business plan should identify (specification list)", b: "The business idea, aims and objectives, target market (market research), forecast revenue, cost and profit, cash-flow forecast, sources of finance, location and the marketing mix." },
      { n: 2, f: "The two purposes of planning", b: "Minimising risk (tests the idea against research; forecasts show whether profit is possible and warn of cash shortages) and obtaining finance (gives lenders and investors evidence, so the business looks a lower risk)." },
      { n: 3, f: "Does a business plan remove risk?", b: "No. It reduces risk but cannot remove it, because forecasts are estimates." },
      { n: 4, f: "Price £8, 650 customers, fixed costs £1,900, variable cost £3.20 per customer. Find the forecast profit.", b: "Revenue = 8 × 650 = £5,200. Total variable costs = 3.20 × 650 = £2,080. Total cost = 1,900 + 2,080 = £3,980. Profit = £1,220." },
    ]),

    // 1.5 Understanding external influences on business
    ...sub('understanding-external-influences-on-business-1bs0', 'business-stakeholders-1bs0', '1.5.1', [
      { n: 1, f: "The eight stakeholder groups named in the specification", b: "Shareholders (owners), employees, customers, managers, suppliers, local community, pressure groups and the government." },
      { n: 2, f: "Typical objectives of shareholders, employees, customers and managers", b: "Shareholders: profit share, rising share value. Employees: pay, security, good conditions. Customers: quality, fair price, safety, service. Managers: salary, growth, a secure post, freedom to decide." },
      { n: 3, f: "Typical objectives of suppliers, local community, pressure groups and government", b: "Suppliers: regular orders, prompt payment. Local community: jobs, little noise or pollution. Pressure groups: a change in business behaviour. Government: tax, jobs, law kept, economic health." },
      { n: 4, f: "Stakeholders 'affected by' the business versus their 'impact on' the business", b: "Affected by: the business acts and the group feels it (late-night deliveries affect neighbours). Impact on: the group acts and the business feels it (bad reviews from customers cut sales; a supplier's price rise lifts costs)." },
      { n: 5, f: "Give two stakeholder conflicts and why they arise", b: "Shareholders vs employees: wages come out of the profit that could be shared. Shareholders vs customers: low prices or high quality cost money. A conflict answer needs two groups, two wants, and why both cannot be fully met." },
    ]),
    ...sub('understanding-external-influences-on-business-1bs0', 'technology-and-business-1bs0', '1.5.2', [
      { n: 1, f: "The four types of technology in the specification", b: "E-commerce (buying and selling over the internet), social media (platforms for posting, talking and advertising), digital communication (electronic communication inside and outside the business) and payment systems (electronic ways of taking payments)." },
      { n: 2, f: "How technology can influence sales", b: "Gains: a wider market, orders at any hour, more awareness. Drawbacks: website faults lose sales; more rivals are visible online." },
      { n: 3, f: "How technology can influence costs", b: "Savings: less postage, printing and travel; smaller premises. Extra costs: set-up, training, delivery, packaging, fees per sale." },
      { n: 4, f: "How technology influences the marketing mix", b: "Product: quick feedback. Price: lower selling costs, but easy comparison forces prices down. Promotion: cheap, targeted posts. Place: a website becomes a place to buy, so delivery must be reliable." },
      { n: 5, f: "A card reader charges 2% on card sales of £1,850. What is the fee?", b: "2% × £1,850 = £37." },
    ]),
    ...sub('understanding-external-influences-on-business-1bs0', 'legislation-and-business-1bs0', '1.5.3', [
      { n: 1, f: "Legislation", b: "Laws made by government that businesses must follow.", src: LEG },
      { n: 2, f: "The principles of consumer law and employment law named in the specification", b: "Consumer law: quality and consumer rights.\nEmployment law: recruitment, pay, discrimination, and health and safety." },
      { n: 3, f: "Why do we have business legislation?", b: "To protect customers and workers, to make competition fairer and to give everyone the same basic rules." },
      { n: 4, f: "Impact on a business of meeting and of not meeting its legal obligations", b: "Meeting: costs for training, equipment, checks and records, but trust from customers and workers. Not meeting: fines, compensation, legal costs, bad publicity, lost sales and staff leaving." },
      { n: 5, f: "Compliance costs £3,200 a year. Ignoring the rules would mean a £7,500 penalty and losing 8% of £150,000 sales revenue. Compare.", b: "Lost sales = 8% × 150,000 = £12,000. Total cost of not complying = 7,500 + 12,000 = £19,500, which is £16,300 more than complying." },
    ]),
    ...sub('understanding-external-influences-on-business-1bs0', 'the-economy-and-business-1bs0', '1.5.4', [
      { n: 1, f: "Effects of rising unemployment and of rising consumer income on a business", b: "Rising unemployment: fewer customers with spending power, so lower sales, but easier to hire.\nRising consumer income: more spending, especially on non-essential items." },
      { n: 2, f: "Effects of rising inflation and rising interest rates", b: "Inflation: costs rise, so the business absorbs them or raises prices, and customers can buy less. Interest rates: borrowing and loan repayments cost more, and spending and investment fall." },
      { n: 3, f: "Effects of changes in government taxation", b: "Higher tax on profits leaves the business less profit to keep; higher tax on incomes or sales leaves customers less to spend. A tax cut does the reverse." },
      { n: 4, f: "Effects of a stronger and a weaker pound", b: "Stronger pound: imports cheaper, exports dearer abroad. Weaker pound: imports dearer, exports cheaper abroad. A stronger pound helps importers and hurts exporters." },
      { n: 5, f: "£1 = 1.30 euros. A supplier invoices 5,200 euros. What does it cost in pounds, and what if the rate becomes £1 = 1.25 euros?", b: "Foreign currency to pounds: divide by the rate. 5,200 ÷ 1.30 = £4,000. At 1.25: 5,200 ÷ 1.25 = £4,160, which is £160 more." },
      { n: 6, f: "A £30,000 loan's interest rate rises from 4% to 6%. What is the extra annual interest?", b: "At 4%: £1,200. At 6%: £1,800. Extra = £600 a year." },
    ]),
    ...sub('understanding-external-influences-on-business-1bs0', 'external-influences-1bs0', '1.5.5', [
      { n: 1, f: "Why do external influences matter to a business?", b: "The business cannot control them, they can raise costs or lower demand, and businesses that respond sensibly stay competitive." },
      { n: 2, f: "Possible responses to a change in technology", b: "Invest in equipment or systems, sell online, use social media or digital communication, train staff, or change how goods are made or delivered." },
      { n: 3, f: "Possible responses to a change in legislation", b: "Train staff, change products, policies or contracts, budget for the cost, or raise prices." },
      { n: 4, f: "Possible responses to a change in the economic climate", b: "Change prices, cut costs, widen or narrow the range, find new markets or suppliers, renegotiate or delay borrowing, keep cash reserves." },
      { n: 5, f: "Method for an external-influence response question", b: "Name the change and its direction; state the effect on this business (cost, revenue, demand); suggest a response that fits; weigh its cost and risk; reach a conclusion if the command word asks for one." },
    ]),

    // 2.1 Growing the business
    ...sub('growing-the-business-1bs0', 'business-growth-1bs0', '2.1.1', [
      { n: 1, f: "Internal (organic) growth and external (inorganic) growth", b: "Internal: growing using the business's own resources, for example new products or new markets. External: growing by merger or takeover.", src: GRW },
      { n: 2, f: "Methods of organic growth", b: "New products (innovation, research and development) and new markets (changing the marketing mix, using technology, expanding overseas). Organic growth keeps control but is slow." },
      { n: 3, f: "Merger versus takeover, with an advantage and drawback of each", b: "Merger: two businesses agree to combine; combined strengths, but cultures may clash. Takeover: one business buys enough shares in another to control it; immediate size and share, but a high price, job losses and staff may leave." },
      { n: 4, f: "Public limited company (plc): advantages and disadvantages", b: "Advantages: limited liability, can offer shares to the public, raises large sums, better known.\nDisadvantages: many shareholders so founders may lose control; open to takeover because anyone can buy its shares." },
      { n: 5, f: "Internal and external sources of finance for a growing business", b: "Internal: retained profit, selling assets.\nExternal: loan capital (interest and repayments, no ownership given), share capital (no repayment, ownership shared), stock market flotation (plc only: large sums, loss of control)." },
      { n: 6, f: "Revenue rose from £45,000 to £58,500 after a business began selling through its own website. Calculate the growth.", b: "Change = £13,500. 13,500 ÷ 45,000 × 100 = 30% (organic growth through new markets and technology). Always divide by the old figure." },
    ]),
    ...sub('growing-the-business-1bs0', 'changes-in-business-aims-1bs0', '2.1.2', [
      { n: 1, f: "Why business aims and objectives change", b: "Market conditions (a new rival), technology (an online platform opens markets abroad), performance (a falling margin), legislation (a new rule adds costs) and internal reasons (a new owner)." },
      { n: 2, f: "How aims and objectives change", b: "Focus on survival or growth; entering or exiting markets; growing or reducing the workforce; increasing or decreasing the product range." },
      { n: 3, f: "Give an example of a change in performance leading to a change in aims", b: "A falling profit margin leads a business to switch from a growth aim to a survival aim, perhaps closing a loss-making branch or dropping weak product lines." },
      { n: 4, f: "A firm cuts staff from 40 to 34 as its aims change. What is the percentage reduction?", b: "(40 − 34) ÷ 40 × 100 = 15%." },
    ]),
    ...sub('growing-the-business-1bs0', 'business-and-globalisation-1bs0', '2.1.3', [
      { n: 1, f: "Globalisation, imports and exports", b: "Globalisation: businesses and markets in different countries becoming more closely linked. Imports: goods or services bought from overseas. Exports: goods or services sold to overseas markets.", src: GLB },
      { n: 2, f: "Tariff and trade bloc", b: "Tariff: a tax on imported goods. Trade bloc: a group of countries that trade on easier terms with each other; members gain, outsiders face its barriers.", src: GLB },
      { n: 3, f: "Multinationals: positive and negative effects on the host country", b: "Positive: jobs, skills, spending, tax. Negative: local firms squeezed, profits sent abroad, pressure on the environment." },
      { n: 4, f: "Why change business location abroad, and the costs", b: "Reasons: lower labour or land costs, closeness to new markets, avoiding tariffs by producing inside the market. Costs: redundancy at home, longer supply chains, reputation harm, managing from a distance." },
      { n: 5, f: "How can a business compete internationally?", b: "Use the internet and e-commerce to reach overseas customers without shops there, and adapt the marketing mix: adapt the product, set price for local incomes and tariffs, promote in the local language, choose local places to sell." },
      { n: 6, f: "A business imports 3,200 units at £14.50 each with a 10% tariff. What is the total cost?", b: "Import value = 3,200 × 14.50 = £46,400. Tariff = 10% = £4,640. Total = £51,040." },
    ]),
    ...sub('growing-the-business-1bs0', 'ethics-the-environment-and-business-1bs0', '2.1.4', [
      { n: 1, f: "Ethical considerations and sustainability", b: "Ethical considerations: questions of right and wrong in how a business behaves. Sustainability: operating so that resources are not used up and future needs can still be met.", src: GLB },
      { n: 2, f: "Possible gains and costs of ethical and environmental behaviour", b: "Ethics: reputation, loyal customers, motivated staff, but higher costs and lower short-run profit. Environment: new customers, saved energy, less waste, but higher costs and set-up spending." },
      { n: 3, f: "Pressure group", b: "An organised group trying to change how businesses or governments behave.", src: GLB },
      { n: 4, f: "How can a pressure group affect each element of the marketing mix?", b: "Product: redesign or change materials. Price: fairer pay raises cost, perhaps price. Promotion: respond to publicity and promote the change. Place: retailers may stop or start stocking the product." },
      { n: 5, f: "A product sells for £5.20 and costs £4.10. Ethical sourcing adds £0.15 a unit. What happens to profit on 80,000 units?", b: "Before: 1.10 × 80,000 = £88,000. After: 0.95 × 80,000 = £76,000, down £12,000. Whether it pays depends on extra sales from customers who value the change." },
    ]),

    // 2.2 Making marketing decisions
    ...sub('making-marketing-decisions-1bs0', 'product-1bs0', '2.2.1', [
      { n: 1, f: "The design mix", b: "Function (what the product does and how well), aesthetics (how it looks, feels, sounds, smells or tastes, including packaging) and cost (what it costs to make). Improving one part often raises cost, which affects price and profit." },
      { n: 2, f: "Differentiation", b: "Making a product or service different from rivals' in a way customers notice and value. It gives a reason to choose it, can support a higher price and builds loyalty, but costs money and can be copied.", src: PP },
      { n: 3, f: "The phases of the product life cycle", b: "Introduction (low sales, low or negative profit), growth (sales rise rapidly), maturity (sales peak and flatten; profit often highest), decline (sales and profit fall: extend or withdraw)." },
      { n: 4, f: "Extension strategies", b: "Modify the product (new flavour, redesign), find a new market, find a new use, or change packaging, price, promotion or place. Judge an extension by the extra sales it brings against its cost." },
      { n: 5, f: "Contribution is £11 a unit and a relaunch costs £6,000. How many extra units must it sell to pay for itself?", b: "6,000 ÷ 11 = 545.45, so at least 546 extra units (546 × £11 = £6,006)." },
    ]),
    ...sub('making-marketing-decisions-1bs0', 'price-1bs0', '2.2.2', [
      { n: 1, f: "Penetration pricing versus price skimming", b: "Penetration: a low launch price to gain share; suits many rivals and price-sensitive buyers; risk of low profit per unit. Skimming: a high launch price, cut later; suits a novel product with few rivals; risk of few buyers at first." },
      { n: 2, f: "Competitive, cost-plus, psychological and promotional pricing", b: "Competitive: close to rivals. Cost-plus: unit cost + mark-up; ignores demand and rivals. Psychological: looks lower, e.g. £7.99. Promotional: a temporary price cut; customers may wait for deals." },
      { n: 3, f: "A unit costs £4.50 and the mark-up is 40%. What is the cost-plus price?", b: "Mark-up = 4.50 × 0.40 = £1.80. Price = 4.50 + 1.80 = £6.30." },
      { n: 4, f: "The four influences on pricing strategy named in the specification", b: "Technology (easy online comparison; lower costs), competition (more close rivals, less freedom), market segments (different prices for different groups) and the product life cycle (skimming or penetration at introduction; promotional pricing in decline)." },
      { n: 5, f: "Launch at £60 and sell 400, or at £45 and sell 600? Variable cost is £30 a unit.", b: "Revenue: £24,000 at £60; £27,000 at £45.\nContribution: (60 − 30) × 400 = £12,000; (45 − 30) × 600 = £9,000.\nThe lower price earns more revenue but less contribution." },
    ]),
    ...sub('making-marketing-decisions-1bs0', 'promotion-1bs0', '2.2.3', [
      { n: 1, f: "The five promotion strategies named in the specification", b: "Advertising, sponsorship, product trials, special offers and branding. A strategy is appropriate when it reaches the chosen segment at an affordable cost with a message it responds to." },
      { n: 2, f: "Product trials and special offers: when they suit, and a weakness of each", b: "Product trials suit new or unfamiliar products, but free samples cost money. Special offers suit price-sensitive customers and first purchases, but cut profit per sale and customers may wait for the next offer." },
      { n: 3, f: "Targeted online advertising, viral advertising and e-newsletters", b: "Targeted: paid adverts aimed at chosen groups; results can be counted. Viral: content customers choose to pass on; low cost but cannot be controlled. E-newsletters: emails to subscribers; mainly keep existing customers." },
      { n: 4, f: "An online advert costs £360 and produces 30 sales, each bringing £9 revenue. Did it pay for itself?", b: "Cost per sale = 360 ÷ 30 = £12. Each sale brings only £9, so not on first sales. Repeat custom could change the answer." },
      { n: 5, f: "Exam trap: is posting on social media the same as viral advertising?", b: "No. Viral advertising spreads because customers share it. Posting on social media is not automatically viral.", src: PRO },
    ]),
    ...sub('making-marketing-decisions-1bs0', 'place-1bs0', '2.2.4', [
      { n: 1, f: "Retailer versus e-tailer", b: "A retailer sells to the public from a shop or physical outlet. An e-tailer sells to the public online (e-commerce)." },
      { n: 2, f: "Strengths and weaknesses of selling through retailers", b: "Strengths: customers can see, try and collect at once. Weaknesses: the retailer takes a share of the selling price, and sales are limited to the shop's customers." },
      { n: 3, f: "Strengths and weaknesses of e-tailing", b: "Strengths: wide reach, open at any hour, the business controls its website. Weaknesses: delivery, packaging and returns, and customers cannot handle the product." },
      { n: 4, f: "A retailer buys a jacket for £18 and sells it for £30. What share of the selling price does it keep?", b: "£30 − £18 = £12. 12 ÷ 30 × 100 = 40%." },
    ]),
    ...sub('making-marketing-decisions-1bs0', 'using-the-marketing-mix-1bs0', '2.2.5', [
      { n: 1, f: "Competitive advantage", b: "Something a business does better or differently from rivals that makes customers prefer it. It must matter to the target market.", src: PRO },
      { n: 2, f: "Integrated marketing mix", b: "A mix where product, price, promotion and place support each other and give the customer one clear offer. It is hard for a rival to copy because it relies on four connected decisions.", src: PRO },
      { n: 3, f: "How can a change in one element of the mix affect the others? Give two examples.", b: "Higher quality product: higher costs and price, and promotion must show the quality. Heavy promotion creating high demand: product supply and place must be able to cope." },
      { n: 4, f: "Give an example of a mix that sends mixed messages", b: "A premium product sold in a discount outlet with a low-price advert. The inconsistent mix weakens the competitive advantage." },
    ]),

    // 2.3 Making operational decisions
    ...sub('making-operational-decisions-1bs0', 'business-operations-1bs0', '2.3.1', [
      { n: 1, f: "Job, batch and flow production", b: "Job: one item made to a customer's own specification. Batch: a group of identical items made together, then equipment changes for the next group. Flow: items move continuously along a line.", src: OPS },
      { n: 2, f: "Compare job, batch and flow production on productivity, unit cost and flexibility", b: "Job: low productivity, high unit cost, very flexible. Batch: medium on all three; time lost at changeovers. Flow: high productivity, low unit cost if the line is kept busy, low flexibility; a breakdown halts the line." },
      { n: 3, f: "Productivity, with an example", b: "Output per unit of input, usually output per worker. 1,050 metres of cloth made by 7 weavers = 150 metres per worker.", src: OPS },
      { n: 4, f: "Impact of technology on production: cost, productivity, quality and flexibility", b: "Cost: less labour per unit, but machines and training cost money. Productivity: more output per hour, but faults stop output. Quality: consistent, but a fault repeats until noticed. Flexibility: programmable, but some machines do one job only." },
      { n: 5, f: "A batch workshop makes 6,000 units for £18,000; a flow line makes 24,000 for £60,000. Compare unit costs.", b: "Batch: 18,000 ÷ 6,000 = £3.00. Flow: 60,000 ÷ 24,000 = £2.50. The flow line is 50p cheaper per unit only because it makes four times as many units." },
    ]),
    ...sub('making-operational-decisions-1bs0', 'managing-stock-and-working-with-suppliers-1bs0', '2.3.2', [
      { n: 1, f: "Bar gate stock graph: what it shows", b: "Stock level over time. The line falls as stock is used and jumps up when a delivery arrives. Key levels: maximum stock, reorder level and buffer stock.", src: OPS },
      { n: 2, f: "Maximum stock 400, reorder level 160, use 40 a day, lead time 2 days. Find the buffer on arrival and the delivery size.", b: "Buffer on arrival = 160 − (40 × 2) = 80. Delivery size = 400 − 80 = 320. Days from full to reorder level = (400 − 160) ÷ 40 = 6." },
      { n: 3, f: "Just in time (JIT): advantages and disadvantages", b: "Stock arrives only when needed, so very little is held. Advantages: less cash tied up, lower storage costs, less waste, less space. Disadvantages: a late delivery can stop production; more frequent orders; smaller orders may lose discounts." },
      { n: 4, f: "Procurement and logistics", b: "Procurement: buying the goods and services a business needs from suppliers. Logistics: moving and storing goods, to the business and to customers.", src: OPS },
      { n: 5, f: "The five features of a supplier relationship named in the specification", b: "Quality, delivery (cost, speed and reliability), availability, cost and trust." },
      { n: 6, f: "Impact of logistics and supply decisions on a business", b: "Costs (right order sizes and routes, or wasted transport and unused stock), reputation (on-time goods build a name; late or damaged goods spread through reviews) and customer satisfaction (right item, right time, right condition)." },
    ]),
    ...sub('making-operational-decisions-1bs0', 'managing-quality-1bs0', '2.3.3', [
      { n: 1, f: "Quality", b: "How well a product meets the needs and expectations of customers. Goods: materials, finish, reliability, durability, safety. Services: accuracy, courtesy, reliability, speed.", src: QS },
      { n: 2, f: "Quality control versus quality assurance", b: "Quality control finds faults by inspecting and testing, at the end or set points, so faulty items are removed before reaching customers. Quality assurance prevents faults through systems and standards across the whole process, involving everyone and suppliers." },
      { n: 3, f: "How quality helps control costs", b: "Fewer faults mean less scrapped material and rework, fewer refunds and returns, and less staff time on complaints. But quality systems cost money (training, inspectors, testing), so compare cost with saving." },
      { n: 4, f: "How quality gives a competitive advantage", b: "Satisfied customers repeat-buy and recommend; a reputation for quality supports a higher price; quality built into a business is slower for rivals to copy than a price cut. It only works if customers notice and value it." },
      { n: 5, f: "A pottery inspects 600 mugs and finds 36 faulty. What is the defect rate?", b: "Defect rate = faulty ÷ items checked × 100 = 36 ÷ 600 × 100 = 6%." },
    ]),
    ...sub('making-operational-decisions-1bs0', 'the-sales-process-1bs0', '2.3.4', [
      { n: 1, f: "The five parts of the sales process named in the specification", b: "Product knowledge; speed and efficiency of service; customer engagement; responses to customer feedback; post-sales service." },
      { n: 2, f: "Post-sales service", b: "Support after purchase, such as repairs, returns and guarantees.", src: QS },
      { n: 3, f: "Why is good customer service important?", b: "Repeat purchases and loyalty, a good reputation and word of mouth, standing out from rivals (a competitive advantage) and possibly a higher price. But good service costs money: training, extra staff, returns policies." },
      { n: 4, f: "500 customers, 30% buy again spending £22 each. Better service lifts repeat buying to 36%. What is the extra revenue?", b: "Before: 150 × £22 = £3,300. After: 180 × £22 = £3,960. Increase = £660." },
    ]),

    // 2.4 Making financial decisions
    ...sub('making-financial-decisions-1bs0', 'business-calculations-1bs0', '2.4.1', [
      { n: 1, f: "Gross profit and net profit (Appendix 3 forms)", b: "Gross profit = sales revenue − cost of sales.\nNet profit = gross profit − other operating expenses and interest." },
      { n: 2, f: "Gross profit margin and net profit margin", b: "Gross profit margin (%) = gross profit ÷ sales revenue × 100.\nNet profit margin (%) = net profit ÷ sales revenue × 100.\nBoth divide by sales revenue." },
      { n: 3, f: "Sales revenue £96,000, cost of sales £52,800, other operating expenses £31,200, interest £1,800. Find both margins.", b: "Gross profit = £43,200; margin = 45.0%.\nNet profit = 43,200 − 33,000 = £10,200; margin = 10,200 ÷ 96,000 × 100 = 10.6% (1 d.p.)." },
      { n: 4, f: "Average rate of return (ARR): formula and example", b: "ARR = average annual profit (total profit ÷ years) ÷ cost of investment × 100.\nA £15,000 machine makes a total profit of £15,600 over 4 years: £3,900 a year; 3,900 ÷ 15,000 × 100 = 26%." },
      { n: 5, f: "Gross profit margin steady but net profit margin falling: what does it suggest?", b: "Other operating expenses or interest have risen, because gross margin is not affected by them. A falling gross margin points to selling prices or cost of sales." },
      { n: 6, f: "Limitations of the average rate of return", b: "The profits are forecasts; an average hides when the profits arrive; a high rate on a small investment can give less total profit than a lower rate on a larger one; it ignores non-financial factors." },
    ]),
    ...sub('making-financial-decisions-1bs0', 'understanding-business-data-1bs0', '2.4.2', [
      { n: 1, f: "The kinds of data to interpret in 2.4.2", b: "Graphs and charts; financial data (profit and loss, profitability ratios, average rate of return, cash-flow forecasts); marketing data (market research); market data (market share, changes in costs and prices). Used to support, inform and justify decisions." },
      { n: 2, f: "Percentage change versus percentage points", b: "Percentage change = change ÷ original × 100. A share falling from 15% to 13% is a fall of two percentage points, not two per cent." },
      { n: 3, f: "A pie chart sector is 72°. What share of the whole is it?", b: "72 ÷ 360 × 100 = 20%." },
      { n: 4, f: "A firm's sales rose 10% while its market grew 25%. What happened to its market share?", b: "It fell, because the market grew faster than the business, so rivals gained a larger slice." },
      { n: 5, f: "Uses and limitations of financial information", b: "Uses: shows profit, margins, cash and change over time; compares with targets or rivals; compares investments. Limitations: backward-looking, shows what not why, ignores quality, reputation and staff; forecasts are estimates." },
    ]),

    // 2.5 Making human resource decisions
    ...sub('making-human-resource-decisions-1bs0', 'organisational-structures-1bs0', '2.5.1', [
      { n: 1, f: "Hierarchical versus flat structures", b: "Hierarchical: many layers and small teams; clear authority and promotion steps, but slow messages and more managers to pay. Flat: few layers and larger teams; quick messages and fewer managers, but managers may be overloaded." },
      { n: 2, f: "Centralised versus decentralised organisation", b: "Centralised: important decisions made at the top; consistent and tightly controlled, but slow to respond. Decentralised: decisions passed down to branches or teams; quick, uses local knowledge, but branches may be inconsistent.", src: ORG },
      { n: 3, f: "Effects of insufficient and excessive communication", b: "Insufficient: mistakes, missed tasks, mixed messages; staff feel ignored. Excessive: time lost in meetings and messages, key messages missed; staff feel their time is wasted." },
      { n: 4, f: "Barriers to effective communication", b: "Unclear wording or jargon, the wrong method for the message, language differences, faulty technology, too many layers, noise or distraction." },
      { n: 5, f: "Different ways of working: full-time, part-time, flexible hours, permanent, temporary, freelance", b: "Full-time: the standard week. Part-time: fewer hours. Flexible hours: some choice over when hours are worked. Permanent: no planned end. Temporary: fixed period or task. Freelance: self-employed, paid for the job." },
      { n: 6, f: "The job roles and responsibilities named in the specification", b: "Directors set direction and major decisions; senior managers turn plans into department plans; supervisors or team leaders organise daily work; operational staff do the main work; support staff help others do their jobs." },
    ]),
    ...sub('making-human-resource-decisions-1bs0', 'effective-recruitment-1bs0', '2.5.2', [
      { n: 1, f: "Job description versus person specification", b: "Job description: the job (title, duties, reporting line, place, hours). Person specification: the person wanted (qualifications, skills, experience, qualities).", src: ORG },
      { n: 2, f: "Application form versus CV", b: "Application form: a standard form designed by the business, with the same questions for all. CV: written by the candidate, summarising education, experience and skills.", src: ORG },
      { n: 3, f: "Internal versus external recruitment", b: "Internal: cheaper and quicker, known skills, shows promotion is possible, but no new ideas and leaves a gap elsewhere. External: a larger pool with new skills and ideas, but dearer and slower, and the new person must learn the business." },
      { n: 4, f: "An agency charges 10% of a £24,000 salary and the advert costs £350. What is the total external recruitment cost?", b: "10% × £24,000 = £2,400, plus £350 = £2,750." },
    ]),
    ...sub('making-human-resource-decisions-1bs0', 'effective-training-and-development-1bs0', '2.5.3', [
      { n: 1, f: "Formal training, informal training and self-learning", b: "Formal: planned and structured, often away from work, may give a qualification; costly. Informal: learning during work, such as shadowing or coaching; cheap but depends on the teacher. Self-learning: the employee takes charge; own pace but needs discipline." },
      { n: 2, f: "Target setting and performance reviews", b: "A target is a goal to be reached by a set time. A performance review is a meeting to assess work against targets, give feedback and agree next steps; it finds training needs but takes manager time.", src: TM },
      { n: 3, f: "Why do businesses train and develop staff?", b: "Training builds confidence and satisfaction, which can raise motivation and improve retention (saving recruitment costs). Retraining for new technology means the investment is used well. Risk: a trained employee may leave for a rival." },
      { n: 4, f: "Training versus development", b: "Training teaches skills for the present job. Development prepares an employee for more responsibility in the future." },
    ]),
    ...sub('making-human-resource-decisions-1bs0', 'motivation-1bs0', '2.5.4', [
      { n: 1, f: "The three reasons motivation matters, named in the specification", b: "Attracting employees, retaining employees and productivity." },
      { n: 2, f: "Financial methods of motivation in the specification", b: "Remuneration (wage or salary), bonus (extra for a target or results), commission (pay linked to sales), promotion (higher post, usually more pay) and fringe benefits (extras on top of pay)." },
      { n: 3, f: "Job rotation, job enrichment and autonomy", b: "Job rotation: moving between tasks at planned times, giving variety. Job enrichment: adding more challenging, responsible tasks. Autonomy: freedom to decide how to do the work.", src: TM },
      { n: 4, f: "A sales assistant earns £1,400 a month plus 5% commission on sales of £24,000. What is the total pay?", b: "Commission = 0.05 × 24,000 = £1,200. Total = £1,400 + £1,200 = £2,600." },
      { n: 5, f: "A bonus of £2.50 is paid for every unit above a target of 120. An employee makes 164. What is the bonus?", b: "Extra units = 164 − 120 = 44. Bonus = 44 × £2.50 = £110." },
      { n: 6, f: "Bonus versus commission", b: "A bonus is linked to meeting a target or good results. Commission is linked to sales made, usually a percentage of sales." },
    ]),
  ],
};
