/**
 * D-438 -- flashcards for AQA GCSE Business 8132 (for first teaching from September 2017).
 *
 * One block per subtopic, in specification order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with the
 * next unused n, never renumber. Topics 3 to 6 were itemised into 3.3.1-3.6.4 (and
 * 3.2.6 added) on 2026-11-05; their former topic-level cards (3-n to 6-n) moved to
 * the matching subtopic and took new ids there.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 8132, or a definition from the
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

const PNB = 'aqa-gcse-business-the-purpose-and-nature-of-businesses-and-business-ownership-revision-notes';
const AIMS = 'aqa-gcse-business-setting-business-aims-and-objectives-and-stakeholders-revision-notes';
const LOC = 'aqa-gcse-business-business-location-and-business-planning-revision-notes';
const EXP = 'aqa-gcse-business-expanding-a-business-revision-notes';
const TECH = 'aqa-gcse-business-technology-ethical-revision-notes';
const EEC = 'aqa-gcse-business-ethical-and-environmental-considerations-and-the-economic-climate-on-businesses-revision-notes';
const GL = 'aqa-gcse-business-globalisation-and-legislation-revision-notes';
const CE = 'aqa-gcse-business-competitive-environment-revision-notes';
const OPS = 'aqa-gcse-business-business-operations-revision-notes';
const HR = 'aqa-gcse-business-human-resources-revision-notes';
const MKG = 'aqa-gcse-business-marketing-revision-notes';
const FIN = 'aqa-gcse-business-finance-revision-notes';

const T1 = 'business-in-the-real-world-aqa-gcse-business';
const T2 = 'influences-on-business-aqa-gcse-business';
const T3 = 'business-operations-aqa-gcse-business';
const T4 = 'human-resources-aqa-gcse-business';
const T5 = 'marketing-aqa-gcse-business';
const T6 = 'finance-aqa-gcse-business';

export const DECK_AQA_GCSE_BUSINESS: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'gcse',
  subjectSlug: 'business',
  syllabusCode: '8132',
  syllabusSeries: 'For first teaching from September 2017',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // 1 Business in the real world
    ...sub(T1, 'purpose-and-nature-of-businesses-aqa-gcse-business', '3.1.1', [
      { n: 1, f: "The five reasons the specification gives for businesses starting up", b: "Producing goods; supplying services; distributing products; fulfilling a business opportunity; providing a good or service to benefit others." },
      { n: 2, f: "Goods and services", b: "Goods are physical products (they can be touched). Services are activities done for customers.", src: PNB },
      { n: 3, f: "Needs and wants", b: "Needs: what people must have to live. Wants: what people would like but could live without.", src: PNB },
      { n: 4, f: "Opportunity cost", b: "The next best alternative given up when a choice is made.", src: PNB },
      { n: 5, f: "A builder can earn £4,800 profit from job A, £3,900 from job B or £2,100 from job C, and takes job A. What is the opportunity cost?", b: "£3,900, the value of the next best option (job B). It is not the total of all the other options (£6,000)." },
      { n: 6, f: "The four factors of production", b: "Land: natural resources and sites.\nLabour: people.\nCapital: man-made resources such as machines and vehicles.\nEnterprise: organising the other factors and taking the risk." },
      { n: 7, f: "The three sectors of business activity, with an example of each", b: "Primary: extracting or growing natural resources (farming, fishing, mining).\nSecondary: manufacturing and building (furniture making, construction).\nTertiary: services (retail, banking, hairdressing)." },
      { n: 8, f: "Enterprise and entrepreneur: what is the difference?", b: "Enterprise is the activity: spotting an opportunity, taking a risk and organising resources. The entrepreneur is the person who does this.", src: PNB },
      { n: 9, f: "Characteristics and objectives (motives) of entrepreneurs", b: "Characteristics: hard working, innovative, organised, willing to take a risk.\nObjectives: be their own boss, flexible working hours, pursue an interest, earn more money, fill a gap in the market, dissatisfaction with a current job." },
      { n: 10, f: "The four named causes of a changing business environment", b: "Technology, the economic situation, legislation and environmental expectations. Each can affect the four functional areas: operations, human resources, marketing and finance." },
      { n: 11, f: "Capital or finance: which is which?", b: "Capital (as a factor of production) is man-made equipment such as machines and vehicles. Finance is money." },
    ]),
    ...sub(T1, 'business-ownership-aqa-gcse-business', '3.1.2', [
      { n: 1, f: "Unlimited liability", b: "The owner is personally responsible for all the business's debts, so personal assets such as a house can be used to pay them.", src: PNB },
      { n: 2, f: "Limited liability", b: "Owners can lose only the money they invested in the business, not their personal assets.", src: PNB },
      { n: 3, f: "Which ownership structures have unlimited liability, and which have limited liability?", b: "Unlimited: sole trader and partnership.\nLimited: private limited company (ltd) and public limited company (plc)." },
      { n: 4, f: "Sole trader: main benefits and drawbacks", b: "Benefits: easy to set up, full control, the owner keeps all the profit.\nDrawbacks: unlimited liability, limited capital, all the risk and workload on one person." },
      { n: 5, f: "Partnership: main benefits and drawbacks", b: "Benefits: more capital than one person, shared skills and workload.\nDrawbacks: profit is shared, partners may disagree, unlimited liability." },
      { n: 6, f: "Private limited company (ltd): main benefits and drawbacks", b: "Benefits: limited liability, a separate legal identity, easier to raise capital by selling shares privately.\nDrawbacks: more paperwork and formation costs, accounts must be filed, shares cannot be sold freely to the public." },
      { n: 7, f: "Public limited company (plc): main benefits and drawbacks", b: "Benefits: large amounts of capital from selling shares to the public, limited liability.\nDrawbacks: expensive to set up, public scrutiny of accounts, risk of takeover, owners (shareholders) are separated from the directors who run it." },
      { n: 8, f: "The key difference between a ltd and a plc", b: "A plc can offer its shares to the public; a ltd cannot. Both have limited liability. A ltd owner can usually decide who buys shares, so is less exposed to a takeover." },
      { n: 9, f: "Exam trap: is a plc part of the public sector?", b: "No. A plc is in the private sector, owned by shareholders. 'Public' means the public may buy its shares, not that the government owns it." },
      { n: 10, f: "Not-for-profit organisation: how is it run and financed, and what happens to any surplus?", b: "Run by trustees or volunteers guided by a cause. Financed by donations, grants and trading income. A surplus is normally reinvested in the organisation's purpose, not shared out among owners." },
      { n: 11, f: "Two partners share £40,000 profit in the ratio 5:3. What does each receive?", b: "5/8 × £40,000 = £25,000 and 3/8 × £40,000 = £15,000." },
      { n: 12, f: "A business owes £41,000 and its assets sell for £17,500. Who pays the shortfall if it is a partnership, and if it is a ltd?", b: "Shortfall = £41,000 − £17,500 = £23,500. In a partnership the partners are personally liable for it. In a ltd, shareholders lose only what they invested." },
    ]),
    ...sub(T1, 'setting-business-aims-and-objectives-aqa-gcse-business', '3.1.3', [
      { n: 1, f: "Aim and objective: what is the difference?", b: "An aim is the long-term goal or direction of a business. An objective is a specific target that moves the business towards its aim.", src: AIMS },
      { n: 2, f: "The seven objectives named in the specification", b: "Survival, profit maximisation, growth (domestic and international), market share, customer satisfaction, social and ethical objectives, shareholder value." },
      { n: 3, f: "Survival versus profit maximisation", b: "Survival: cover costs and stay open, the main concern for a start-up. Profit maximisation: make the highest possible profit." },
      { n: 4, f: "Market share: formula and example", b: "Market share (%) = business sales ÷ total market sales × 100.\nExample: sales of £360,000 in a £4.5m market: 360,000 ÷ 4,500,000 × 100 = 8%." },
      { n: 5, f: "Shareholder value", b: "The worth of a business to its shareholders, seen in its share price and dividends.", src: AIMS },
      { n: 6, f: "A company pays £90,000 in dividends on 300,000 shares. Find the dividend per share and the amount paid on 60,000 shares.", b: "Dividend per share = £90,000 ÷ 300,000 = £0.30 (30p).\n60,000 shares × £0.30 = £18,000." },
      { n: 7, f: "Why do businesses set objectives?", b: "To give direction and a shared target, help managers test decisions, motivate staff with clear targets, allow success to be judged against the target, and show lenders and investors what the business is trying to do." },
      { n: 8, f: "Why objectives differ between businesses", b: "Size (small: survival, steady income; large: dominance, international expansion), level of competition (high: customer satisfaction and market share) and type of business (not-for-profit: social objectives first)." },
      { n: 9, f: "How do objectives typically change as a business grows?", b: "Start-up: survival, building customers, covering costs. Growing: profit, growth, market share. Large and established: market dominance, international expansion, shareholder value, ethical and environmental aims." },
      { n: 10, f: "How do you judge whether a business has been successful?", b: "Compare the result with its objective (for example 8% market share against a 10% target), then bring in other measures such as profit, customer satisfaction or number of customers. Success depends on which objective the owners care about most." },
    ]),
    ...sub(T1, 'stakeholders-aqa-gcse-business', '3.1.4', [
      { n: 1, f: "Stakeholder", b: "An individual or group with a stake in what the business does, whether affected by it or able to affect it.", src: AIMS },
      { n: 2, f: "Main objectives of owners and employees as stakeholders", b: "Owners: high dividend payments and growth in the value of the business.\nEmployees: maximising pay, job security and good conditions." },
      { n: 3, f: "Main objectives of customers, the local community and suppliers", b: "Customers: quality, a fair price, good service.\nLocal community: minimal environmental impact, local jobs.\nSuppliers: regular orders, prompt payment, fair prices." },
      { n: 4, f: "How can owners influence a business?", b: "They set aims, appoint managers and can sell the business.", src: AIMS },
      { n: 5, f: "How can employees influence a business?", b: "Through their effort and quality of work, industrial action, or leaving.", src: AIMS },
      { n: 6, f: "How can customers influence a business?", b: "They choose whether to buy, complain, or switch to rivals.", src: AIMS },
      { n: 7, f: "How can the local community influence a business?", b: "By objecting to plans, boycotting it, or supporting or opposing it.", src: AIMS },
      { n: 8, f: "How can suppliers influence a business?", b: "By raising prices, delaying deliveries or offering credit.", src: AIMS },
      { n: 9, f: "Impact on stakeholders versus influence of stakeholders", b: "Impact: the business affects them (for example noise from a new factory). Influence: they affect the business. A stakeholder's influence is stronger when it has alternatives or the business depends on it." },
      { n: 10, f: "Give an example of stakeholder conflict and why it arises", b: "Owners want higher dividends while employees want higher pay. Both draw on the same profit, so one decision cannot fully satisfy both. A judgement says which group has more influence and what the business should do." },
    ]),
    ...sub(T1, 'business-location-aqa-gcse-business', '3.1.5', [
      { n: 1, f: "The five location factors named in the specification", b: "Proximity to the market, availability of raw materials, labour, competition and costs." },
      { n: 2, f: "Location factor: proximity to the market", b: "Being close to customers brings more passing trade and sales, and quicker, cheaper delivery of fresh or fragile goods. Most important for businesses customers walk into." },
      { n: 3, f: "Location factor: availability of raw materials", b: "Being near suppliers lowers transport costs for bulky or perishable inputs, such as a bakery near a flour mill." },
      { n: 4, f: "Location factor: labour", b: "The business needs enough staff with the right skills, at a wage it can afford." },
      { n: 5, f: "Location factor: competition", b: "Near rivals: the area draws more customers, but they are shared. Away from rivals: customers have fewer alternatives, but demand may be low." },
      { n: 6, f: "Location factor: costs", b: "Rent, rates, utilities, transport and wages. They must be weighed against the income the site brings in." },
      { n: 7, f: "How does selling online change location decisions?", b: "It weakens the pull of being near the market, but the business still needs good delivery links." },
      { n: 8, f: "A shop on a busy street costs £1,900 a month in rent; an out-of-town unit costs £800. How do you decide?", b: "The busy site costs £1,100 a month more. It is worth it only if the extra sales it brings earn more than £1,100 a month. The cheapest site is not always the best." },
    ]),
    ...sub(T1, 'business-planning-aqa-gcse-business', '3.1.6', [
      { n: 1, f: "Business plan", b: "A written document setting out what the business intends to do and how it will do it." },
      { n: 2, f: "The specification's four purposes of a business plan", b: "Its importance in setting up a new business; raising finance; setting objectives; detailing how the functions of the business will be organised." },
      { n: 3, f: "The usual main sections of a business plan", b: "Executive summary, business idea and objectives, target market and research, marketing plan, operations, people, and financial forecasts (start-up costs, sales, costs, profit, cash flow)." },
      { n: 4, f: "Benefits of business planning", b: "Tests the idea on paper before money is spent; helps raise finance because lenders can judge the risk; sets targets to measure progress; shows who does what in each function." },
      { n: 5, f: "Drawbacks of business planning", b: "Takes time to research and write; based on forecasts that may be wrong; can go out of date when the market changes; a rigid plan can slow a reaction to new opportunities." },
      { n: 6, f: "Fixed costs and variable costs, with examples", b: "Fixed costs do not change with output (rent, insurance). Variable costs change with output (materials, packaging). Test: if output doubles and the cost doubles, it is variable." },
      { n: 7, f: "Formulas: revenue, total costs and profit", b: "Revenue = price × quantity sold.\nTotal variable costs = variable cost per unit × quantity.\nTotal costs = fixed costs + total variable costs.\nProfit = revenue − total costs (a negative answer is a loss)." },
      { n: 8, f: "Price £40, variable cost £12 per unit, fixed costs £3,000 a month. Find the profit at 150 units.", b: "Revenue 150 × £40 = £6,000. Variable costs 150 × £12 = £1,800. Total costs £1,800 + £3,000 = £4,800. Profit £6,000 − £4,800 = £1,200." },
      { n: 9, f: "Same business (price £40, variable cost £12, fixed costs £3,000). Find the result at 80 units.", b: "Revenue £3,200. Variable costs £960. Total costs £3,960. £3,200 − £3,960 = −£760, a loss of £760." },
      { n: 10, f: "Is a business plan useful to an owner who is not borrowing any money?", b: "Yes. It makes the owner think through the practical detail and risks before committing their own money, and judge whether the idea is financially viable." },
    ]),
    ...sub(T1, 'expanding-a-business-aqa-gcse-business', '3.1.7', [
      { n: 1, f: "Methods of expansion named in the specification", b: "Franchising, opening new stores, e-commerce, outsourcing, mergers and takeovers." },
      { n: 2, f: "Organic (internal) growth versus external growth", b: "Organic: growing from the business's own activity, such as new stores. Usually slower but keeps control. External: a merger or takeover. Faster, but costs more and carries the risk of a clash of cultures." },
      { n: 3, f: "Franchising: benefit and drawback for the franchisor", b: "Benefit: fast growth using the franchisee's capital, plus fees and a share of revenue.\nDrawback: less control and profit is shared; one badly run outlet can damage the brand." },
      { n: 4, f: "Opening new stores: benefit and drawback", b: "Benefit: the owners keep control and the same brand and methods while reaching new customers.\nDrawback: premises and staff are costly, and a bad location may lose money." },
      { n: 5, f: "E-commerce as a method of expansion: benefit and drawback", b: "Benefit: a wider market, open at all times, no extra shop needed.\nDrawback: website, delivery and returns costs, and many online rivals." },
      { n: 6, f: "Outsourcing: benefit and drawback", b: "Benefit: a specialist may do the task cheaper or better, so the business can focus on its core activity.\nDrawback: less control of quality and timing, and reliance on the supplier." },
      { n: 7, f: "Merger versus takeover", b: "Merger: two businesses agree to join as one. Takeover: one business gains control of another, which may not want it. Takeovers give quick growth but are often expensive and may meet resistance." },
      { n: 8, f: "Economies of scale, and the two types named in the specification", b: "Average unit cost falls as output rises.\nPurchasing: bulk orders earn a lower price per unit from suppliers.\nTechnical: larger or specialised machinery whose cost is spread over more units." },
      { n: 9, f: "Diseconomies of scale and the three causes named in the specification", b: "Average unit cost rises because the business has grown too large. Causes: poor communication, coordination issues and reduced staff motivation. The risk grows with size, but they are not inevitable." },
      { n: 10, f: "Average unit cost: formula and example", b: "Average unit cost = total cost ÷ output.\nExample: £90,000 ÷ 12,000 tiles = £7.50 per tile." },
      { n: 11, f: "Total cost £48,000 at 8,000 meals and £63,000 at 9,000 meals. What does the change suggest?", b: "£48,000 ÷ 8,000 = £6.00; £63,000 ÷ 9,000 = £7.00. Average unit cost rose as output grew, which suggests diseconomies of scale." },
      { n: 12, f: "Exam trap: do economies of scale reduce total costs?", b: "No. Total cost still rises with output; it is the average (unit) cost that falls.", src: EXP },
    ]),

    // 2 Influences on business
    ...sub(T2, 'technology-aqa-gcse-business', '3.2.1', [
      { n: 1, f: "E-commerce", b: "Buying and selling over the internet, giving access to wider markets without a physical presence everywhere.", src: TECH },
      { n: 2, f: "Effect of e-commerce, and the functional areas it affects most", b: "Access to wider (often global) markets without a physical presence everywhere. Marketing (reach) and operations (order fulfilment).", src: TECH },
      { n: 3, f: "Digital communication", b: "Electronic channels such as email, social media and messaging that a business uses with its stakeholders.", src: TECH },
      { n: 4, f: "Effect of digital communication, and the functional areas it affects most", b: "It changes the speed and reach of communication with stakeholders. Marketing (reaching customers) and human resources (communicating with employees).", src: TECH },
      { n: 5, f: "Benefits of digital communication for a business", b: "Faster responses to customer queries, and wider reach at lower cost than traditional advertising." },
      { n: 6, f: "Risks of digital communication for a business", b: "A single negative social media post can spread quickly, and the business has to monitor and respond to public comment it does not control." },
      { n: 7, f: "How to write a strong answer on a technology change", b: "Name the specific technology or channel, say which functional area it affects (operations, HR, marketing or finance) and explain how, applied to the business. Describing the technology alone is a weaker answer." },
      { n: 8, f: "The single idea that frames all of topic 3.2 Influences on business", b: "External influences affect all four functional areas (operations, human resources, marketing, finance), and businesses must change in response." },
    ]),
    ...sub(T2, 'ethical-and-environmental-considerations-aqa-gcse-business', '3.2.2', [
      { n: 1, f: "Ethical behaviour (as the specification uses it)", b: "Acting in ways stakeholders consider both fair and honest.", src: EEC },
      { n: 2, f: "Trade-off", b: "Giving up some of one thing (such as profit) to gain another (such as reputation).", src: EEC },
      { n: 3, f: "Examples of ethical behaviour by a business", b: "Fair prices to suppliers, honest advertising, fair pay and safe conditions for staff, fair treatment of customers." },
      { n: 4, f: "Benefits and drawbacks of behaving ethically", b: "Benefits: reputation, customer loyalty, easier recruitment, steadier supplier relations.\nDrawbacks: higher costs, possibly higher prices, lower short-run profit." },
      { n: 5, f: "The environmental considerations listed in the specification", b: "Traffic congestion, recycling, disposing of waste, and noise and air pollution.", src: EEC },
      { n: 6, f: "Sustainability (the specification's two areas)", b: "Global warming and using scarce resources. In general terms: meeting today's needs without harming the future.", src: EEC },
      { n: 7, f: "Environmental considerations versus sustainability", b: "Environmental considerations are mostly local, immediate effects (pollution, waste, congestion). Sustainability is about global warming and scarce resources. The specification lists them separately." },
      { n: 8, f: "A firm buys 8,000 units a year and a fair-trade supplier charges 25p more per unit. Annual profit is £8,000. What is the effect?", b: "Extra cost = 8,000 × £0.25 = £2,000 a year, which is 2,000 ÷ 8,000 × 100 = 25% of profit. The firm judges whether reputation or a small price rise can recover it." },
      { n: 9, f: "A recycling scheme costs £6,000 to set up and saves £2,000 a year. What is the payback period?", b: "£6,000 ÷ £2,000 = 3 years. A short payback makes the scheme easier to justify; a long one is riskier for a small business with little cash." },
      { n: 10, f: "Structure for a trade-off answer (ethics, environment or sustainability)", b: "1. Name the action. 2. State its cost to the business, using any figures. 3. State its benefit and who gains. 4. Reach a judgement that depends on the business and its customers." },
    ]),
    ...sub(T2, 'the-economic-climate-on-businesses-aqa-gcse-business', '3.2.3', [
      { n: 1, f: "Interest rate", b: "The cost of borrowing, and the reward for saving.", src: EEC },
      { n: 2, f: "Level of employment", b: "How many people in the economy have jobs.", src: EEC },
      { n: 3, f: "Consumer spending", b: "What households spend on goods and services.", src: EEC },
      { n: 4, f: "Effects of a rise in interest rates on a business", b: "Its loans and overdrafts cost more, squeezing profit and cash flow. Households and firms spend and invest less, so sales fall, especially of items bought on credit." },
      { n: 5, f: "A business has a £50,000 loan. The interest rate rises from 3% to 5%. What is the extra interest a year?", b: "£50,000 × 3% = £1,500. £50,000 × 5% = £2,500. Extra = £1,000 a year." },
      { n: 6, f: "Effects of a rise or a fall in the level of employment", b: "Rise: household incomes and demand go up, but recruiting is harder and pay may rise.\nFall: incomes and demand go down, but recruiting is easier with less pressure on pay." },
      { n: 7, f: "How do changes in consumer income affect spending?", b: "Higher incomes raise spending, especially on non-essentials and expensive items. Lower incomes cut spending, with basics falling least. Firms respond by changing price, range or promotion, and output and stock." },
      { n: 8, f: "Why can a rise in interest rates hit a seller of big-ticket items twice?", b: "Its own interest bill goes up, and customers who borrow to buy its products buy less." },
      { n: 9, f: "Who gains and who loses when interest rates rise?", b: "Borrowers lose (they pay more interest); savers gain (they earn more). The specification does not require you to explain why rates change." },
    ]),
    ...sub(T2, 'globalisation-aqa-gcse-business', '3.2.4', [
      { n: 1, f: "Globalisation", b: "The growing connection of the world's economies and markets, so goods, services, money and ideas cross borders more easily.", src: GL },
      { n: 2, f: "Exchange rate", b: "How much of one currency buys a unit of another.", src: GL },
      { n: 3, f: "Stronger pound and weaker pound", b: "Stronger pound: each pound buys more foreign currency. Weaker pound: each pound buys less foreign currency.", src: GL },
      { n: 4, f: "How the specification says UK businesses compete internationally", b: "Better designs, and higher quality products at lower prices." },
      { n: 5, f: "Benefits of globalisation for a UK business", b: "A bigger market through exports, cheaper components and products, lower unit costs from larger output, new ideas, skills and suppliers, and less reliance on the UK economy." },
      { n: 6, f: "Drawbacks of globalisation for a UK business", b: "More overseas rivals in the UK market, longer supply chains and transport costs, exchange rate risk, cultural, language and legal differences, and reputation risk from unethical overseas suppliers." },
      { n: 7, f: "Effect of a stronger pound on UK exporters and importers", b: "Exporters: goods become dearer abroad, so sales or profit per item may fall.\nImporters: imports become cheaper, so costs fall and profit may rise." },
      { n: 8, f: "Effect of a weaker pound on UK exporters and importers", b: "Exporters: goods become cheaper abroad, so sales may rise.\nImporters: imports become dearer, so costs rise and profit falls unless prices rise." },
      { n: 9, f: "Imported parts cost £150,000 a year and the cost rises 4%. Profit was £40,000. What happens to profit?", b: "Extra cost = 4% × £150,000 = £6,000. Profit falls to £34,000, a fall of 6,000 ÷ 40,000 × 100 = 15%." },
      { n: 10, f: "Do you have to convert currencies in AQA exchange rate questions?", b: "No. You explain the direction of the effect on price or cost, then sales, then profit. A firm that both imports and exports is partly protected." },
    ]),
    ...sub(T2, 'legislation-aqa-gcse-business', '3.2.5', [
      { n: 1, f: "The four examples of the impact of legislation given in the specification", b: "Cost, training needs, recruitment, and the consequences of failure to comply." },
      { n: 2, f: "National minimum wage / living wage: what it is and its effects", b: "The legal minimum hourly pay (rates change, so do not quote a fixed figure). Effects: a higher wage bill, possible price rises or fewer hours, but better motivation and lower staff turnover." },
      { n: 3, f: "The Equality Act (2010): meaning and effect on a business", b: "Unfair treatment because of characteristics such as age, sex, race, disability or religion is unlawful in areas such as hiring, pay and promotion. Needs fair recruitment, manager training, possible adaptations; gives a wider pool of talent." },
      { n: 4, f: "The Health and Safety at Work Act (1974)", b: "Employers must keep the workplace reasonably safe, and employees must take care. Spending on equipment and training is set against fewer accidents, less absence and better morale." },
      { n: 5, f: "Consumer law (trade descriptions): meaning and effect", b: "What is said about a product must be accurate and not misleading. The business must check labels and adverts and control quality, or face refunds or recalls; compliance builds customer trust." },
      { n: 6, f: "Benefits to a business of a safe working environment", b: "Fewer accidents and less absence, better motivation and loyalty, a stronger reputation that helps recruitment, and avoiding compensation and legal action." },
      { n: 7, f: "Consequences of failing to follow the law", b: "Financial penalties and compensation claims, legal costs and management time, forced changes to how the business operates, bad publicity, lost customers and difficulty recruiting." },
      { n: 8, f: "8 staff each work 15 hours a week for 52 weeks. The legal hourly rate rises by 40p. What is the extra annual wage cost?", b: "Hours = 8 × 15 × 52 = 6,240. Extra cost = 6,240 × £0.40 = £2,496 a year." },
      { n: 9, f: "Law versus ethics", b: "The law is the minimum a business must do. Ethical behaviour can go beyond what the law requires." },
    ]),
    ...sub(T2, 'competitive-environment-aqa-gcse-business', '3.2.6', [
      { n: 1, f: "Market and competition", b: "A market is anywhere buyers and sellers come together to exchange goods or services, physical or online. Competition is rivalry between businesses selling similar goods or services to the same customers.", src: CE },
      { n: 2, f: "How can operating in a competitive market affect a business?", b: "Pressure to keep prices down, improve quality and customer service, innovate and cut costs. It may spend more on promotion, and its market share and profit can fall if rivals do better. Customers gain more choice and lower prices.", src: CE },
      { n: 3, f: "When might a business face little or no competition?", b: "When it is the only supplier in an area (such as the one shop in a remote village), has a new or unique product rivals cannot yet copy (for example patented), the market is very costly to enter, or the market is small and specialist.", src: CE },
      { n: 4, f: "Why do all businesses face uncertainty?", b: "The future cannot be known and the business environment keeps changing: competitors, customer tastes, the economic climate, technology and laws, so sales, costs and profit cannot be predicted with certainty.", src: CE },
      { n: 5, f: "Why do entrepreneurs start businesses despite the risks?", b: "The objectives in the specification: to be their own boss, flexible working hours, to pursue an interest, to earn more money, to fill a gap in the market, and dissatisfaction with their current job. Higher possible reward usually means higher risk.", src: CE },
      { n: 6, f: "Activities a business can undertake to minimise risk", b: "Market research, business planning, cash-flow forecasting, starting small or testing first, insurance, limited liability, selling a range of products or in several markets, keeping cash reserves. These reduce risk but cannot remove it.", src: CE },
    ]),

    // 3 Business operations
    ...sub(T3, 'production-processes-aqa-gcse-business', '3.3.1', [
      { n: 1, f: "Job production versus flow production", b: "Job: one item at a time, made to order; flexible and personal but slow, needs skilled labour, high unit cost.\nFlow: large volumes of identical items made continuously; low unit cost but costly machinery, inflexible, needs large demand." },
      { n: 2, f: "Fixed costs £18,000 a month, variable cost £6 per unit. Find the unit cost at 3,000 and at 6,000 units.", b: "3,000: (18,000 + 18,000) ÷ 3,000 = £12.\n6,000: (18,000 + 36,000) ÷ 6,000 = £9.\nFixed costs are spread over more units, which is why flow production lowers unit cost." },
      { n: 3, f: "Lean production", b: "Producing with as little waste as possible: of time, materials, space, effort and money. Techniques include removing unnecessary steps, keeping stock low, fixing faults where they occur and involving workers in improvements.", src: OPS },
      { n: 4, f: "Just in time (JIT)", b: "A lean technique: materials arrive just before they are needed and finished goods go out quickly, so little stock is held.", src: OPS },
    ]),
    ...sub(T3, 'the-role-of-procurement-aqa-gcse-business', '3.3.2', [
      { n: 1, f: "JIT versus just in case (JIC) stock management", b: "JIT: minimal stock; lower holding costs and less cash tied up, but more frequent deliveries, lost bulk discounts, and a late delivery stops production.\nJIC: buffer stock meets sudden demand, but costs money to hold and may go out of date." },
      { n: 2, f: "Procurement and logistics", b: "Procurement: obtaining the goods and services a business needs from suppliers. Logistics: moving and storing those goods (transport, warehousing, delivery).", src: OPS },
      { n: 3, f: "The three factors in choosing a supplier", b: "Price (lower cuts costs but may mean lower quality), quality (poor materials cause faults and complaints) and reliability (late deliveries disrupt production, especially under JIT)." },
      { n: 4, f: "Supply chain, and what effective supply chain management means", b: "The series of businesses and activities that take a product from raw materials to the final customer. Managing it well means working with suppliers efficiently, getting the best price and value, and cutting waste for fast production." },
    ]),
    ...sub(T3, 'the-concept-of-quality-aqa-gcse-business', '3.3.3', [
      { n: 1, f: "Total quality management (TQM)", b: "Quality is the responsibility of every employee in every department, aiming to get things right first time rather than checking at the end. Gives fewer defects, less waste and higher customer satisfaction.", src: OPS },
      { n: 2, f: "Costs and benefits of maintaining quality", b: "Costs: inspection, staff training, time and effort in providing services.\nBenefits: additional sales, a better image and reputation, the ability to charge a higher price, fewer costly product recalls." },
      { n: 3, f: "Defect rate: formula and example", b: "Defect rate = faulty items ÷ items produced × 100.\nExample: 45 faulty out of 1,500: 45 ÷ 1,500 × 100 = 3%." },
      { n: 4, f: "Why can outsourcing and franchising cause quality problems as a business grows?", b: "Another business does the work, so the firm has less direct control over standards. A poor supplier or franchisee can damage the whole brand, so it needs clear standards, agreements and checks." },
    ]),
    ...sub(T3, 'good-customer-services-aqa-gcse-business', '3.3.4', [
      { n: 1, f: "Methods of good customer service, and the dangers of poor service", b: "Methods: product knowledge, customer engagement, post-sales services (user training, help lines, servicing).\nDangers of poor service: dissatisfied customers, a poor reputation through word of mouth, lower revenue." },
      { n: 2, f: "The sales process", b: "The customer finds out about the product, is helped to choose, buys, and is supported afterwards.", src: OPS },
      { n: 3, f: "Benefits of good customer service", b: "Greater customer satisfaction, customer loyalty, increased spend and so higher profitability." },
      { n: 4, f: "How have advances in ICT changed customer service?", b: "Websites give information and support at any hour; e-commerce lets customers order online; social media allows quick two-way contact and public replies to complaints, so poor service also becomes visible quickly." },
      { n: 5, f: "A shop has 1,500 customers a month spending £12 each. Poor service loses 4% of them. What revenue is lost?", b: "1,500 × 0.04 = 60 customers; 60 × £12 = £720 a month, or £8,640 a year." },
    ]),

    // 4 Human resources
    ...sub(T4, 'organisational-structures-aqa-gcse-business', '3.4.1', [
      { n: 1, f: "Organisational structure and chain of command", b: "Organisational structure: how the business is arranged, with roles, responsibilities and reporting lines. Chain of command: the route by which authority passes from senior to junior staff.", src: HR },
      { n: 2, f: "Span of control, with an example", b: "How many staff report directly to a single manager. 35 mechanics and 5 team leaders: 35 ÷ 5 = a span of 7.", src: HR },
      { n: 3, f: "Tall structure versus flat structure", b: "Tall: many levels, narrow spans, long chain of command, slower communication, close control, higher wage cost.\nFlat: few levels, wide spans, short chain, quicker communication, more independent staff, lower wage cost." },
      { n: 4, f: "Delegation and delayering", b: "Delegation: handing a task and the authority to decide it to a lower level (the manager stays accountable). Delayering: taking out a layer or layers of management.", src: HR },
      { n: 5, f: "Centralised versus decentralised decision-making", b: "Centralised (decisions at the top): consistent, tight control, but slow and may demotivate.\nDecentralised (decisions lower down): fast, locally informed, motivating, but decisions may differ between sites." },
    ]),
    ...sub(T4, 'recruitment-and-selection-of-employees-aqa-gcse-business', '3.4.2', [
      { n: 1, f: "Internal versus external recruitment", b: "Internal: cheaper, quicker, a known person, motivates staff, but a narrow choice, no fresh ideas, and creates another vacancy.\nExternal: wider choice and new ideas, but costly, slower and an unknown person." },
      { n: 2, f: "Job description versus person specification", b: "Job description: about the job, with its title, duties and responsibilities. Person specification: about the person wanted, with qualifications, skills, experience and qualities." },
      { n: 3, f: "Types of employment contract", b: "Full time: a standard full working week. Part time: fewer hours. Job share: one job split between two people. Zero hours: no guaranteed hours; flexible and low cost when quiet, but uncertain income for the worker and less loyalty." },
      { n: 4, f: "The stages of recruitment and selection, in order", b: "Job analysis, job description, person specification, advertise, shortlist, selection methods (interview, tests, assessment centre, references), then offer and contract." },
      { n: 5, f: "Why do businesses recruit, and what are the benefits of an effective recruitment process?", b: "Reasons: growth, replacing leavers, new skills, new roles. Benefits: high productivity from the right skills, high quality output or customer service, and staff retention, which saves repeated recruitment costs." },
    ]),
    ...sub(T4, 'motivating-employees-aqa-gcse-business', '3.4.3', [
      { n: 1, f: "Financial methods of motivation", b: "Salary: a fixed yearly sum. Wage: an hourly rate × hours worked. Commission: a percentage of sales. Profit sharing: employees receive a share of profits." },
      { n: 2, f: "Salary £1,500 a month plus 3% commission on sales of £20,000. What is the total pay?", b: "Commission = 3% × £20,000 = £600. Total = £1,500 + £600 = £2,100." },
      { n: 3, f: "Non-financial methods of motivation, and why motivation matters", b: "Methods: styles of management, training, greater responsibility, fringe benefits. A motivated workforce brings staff retention and high productivity. Named motivation theories (such as Maslow) are not examined in 8132." },
      { n: 4, f: "Profit sharing: 12% of a £40,000 profit is shared equally among 16 staff. How much does each receive?", b: "12% × £40,000 = £4,800; £4,800 ÷ 16 = £300 each." },
      { n: 5, f: "When do financial methods of motivation work best, and when do non-financial methods matter more?", b: "Financial methods suit low-paid staff and sales roles. Non-financial methods (management style, training, responsibility, fringe benefits) matter more where pay is already fair. A mix often works best." },
    ]),
    ...sub(T4, 'training-aqa-gcse-business', '3.4.4', [
      { n: 1, f: "Induction, on-the-job and off-the-job training", b: "Induction: settles new staff, covers rules and safety. On the job: cheaper, relevant, but the trainer's output falls and bad habits can pass on. Off the job: expert teaching and qualifications, but dearer and the worker is absent." },
      { n: 2, f: "Benefits of training the workforce", b: "Increased productivity, the ability to cope with changes in technology, increased motivation, staff retention, high-quality goods and good customer service." },
      { n: 3, f: "Why is induction training useful?", b: "It settles new staff in, covers rules and safe working, gets them productive more quickly and helps keep them. Its drawback is the time before real work starts." },
      { n: 4, f: "How do you choose between on-the-job and off-the-job training for a business?", b: "Say which suits the business and give a reason from the case (cost, size, technology, risk to customers), then weigh the alternative. Off the job suits specialist skills or work where errors in front of customers are costly." },
    ]),

    // 5 Marketing
    ...sub(T5, 'identifying-and-understanding-customers-aqa-gcse-business', '3.5.1', [
      { n: 1, f: "Why is it important to identify and satisfy customer needs?", b: "To provide a product customers will buy, increase sales, select the correct marketing mix, avoid costly mistakes and be competitive." },
      { n: 2, f: "How does marketing link to the business's objectives and other functions?", b: "Business objectives are split into functional plans with clear links between operations, human resources, marketing and finance. Marketing plans follow from the objectives and depend on the other functions." },
      { n: 3, f: "What can go wrong if a business does not understand its customers?", b: "It may make a product few will buy, choose the wrong marketing mix, waste money on costly mistakes and lose sales to competitors who meet customer needs better." },
    ]),
    ...sub(T5, 'segmentation-aqa-gcse-business', '3.5.2', [
      { n: 1, f: "The four types of market segmentation named in the specification", b: "Gender, age, location and income. Segmenting lets the mix fit each group; too narrow a target can limit sales." },
      { n: 2, f: "Market segmentation", b: "Splitting a market into groups so each can be targeted.", src: MKG },
      { n: 3, f: "Give an example of each type of segmentation", b: "Gender: different ranges for men and women. Age: toys for under-fives versus teenagers. Location: raincoats stocked in wet regions. Income: budget and premium versions." },
      { n: 4, f: "Why segment a market?", b: "So the marketing mix fits each group and money is not wasted on customers who will not buy. The risk is that too narrow a target limits sales." },
    ]),
    ...sub(T5, 'the-purpose-and-methods-of-market-research-aqa-gcse-business', '3.5.3', [
      { n: 1, f: "Primary versus secondary market research", b: "Primary: collected first-hand (questionnaires, surveys, interviews, focus groups). Secondary: information that already exists (internet research, the printed press)." },
      { n: 2, f: "Quantitative versus qualitative data", b: "Quantitative: numbers (60% like the flavour). Qualitative: opinions and reasons (they find it too sweet)." },
      { n: 3, f: "A firm sells 9,000 units in a market of 150,000. The market grows to 165,000 and its sales stay the same. What happens to its market share?", b: "Before: 9,000 ÷ 150,000 × 100 = 6%. After: 9,000 ÷ 165,000 × 100 = 5.5% (1 d.p.). Same sales, smaller share." },
      { n: 4, f: "Why do businesses carry out market research?", b: "To identify market opportunities and get a better insight into customers and competitors, collecting information about demand, competition and the target market." },
      { n: 5, f: "One benefit and one drawback of a focus group and of internet research", b: "Focus group (primary): gives reasons and opinions, but the group is small and may not be representative.\nInternet research (secondary): fast and often free, but may be out of date or unreliable." },
      { n: 6, f: "Market size versus market share", b: "Market size: the total sales of every business in the market. Market share: one firm's sales as a percentage of that total (its sales ÷ market sales × 100)." },
    ]),
    ...sub(T5, 'the-marketing-mix-aqa-gcse-business', '3.5.4', [
      { n: 1, f: "The five pricing methods in the specification", b: "Price skimming: high at first, then lowered. Price penetration: low at first to gain share. Competitive pricing: close to rivals. Loss leader: below cost to bring in customers. Cost-plus: unit cost plus a mark-up." },
      { n: 2, f: "A unit costs £12 and the mark-up is 25%. What is the cost-plus price?", b: "£12 × 1.25 = £15, giving £3 profit per unit. (Mark-up is profit as a percentage of cost.)" },
      { n: 3, f: "The stages of the product life cycle", b: "Research and development (no sales), introduction (low sales, heavy promotion), growth (sales rising fast), maturity (sales peak and flatten), decline (sales fall: extension strategy or withdraw)." },
      { n: 4, f: "Extension strategies named in the specification", b: "Update the packaging, add more or different features, change the target market, advertising, price reduction." },
      { n: 5, f: "The Boston Matrix: the four categories", b: "Star: high share, high market growth. Cash cow: high share, low growth. Question mark: low share, high growth. Dog: low share, low growth. Used to balance the portfolio, with cash cows funding stars and question marks." },
      { n: 6, f: "Reasons for promotion, and factors that influence the promotional mix", b: "Reasons: inform or remind, create or increase sales, create or change image, persuade.\nFactors: finance available, competitor actions, nature of the product, nature of the market, target market." },
      { n: 7, f: "Methods of place (distribution) and e-commerce / m-commerce", b: "Retailers reach the public but take a margin; wholesalers buy in bulk and reach many shops; telesales sell by phone. E-commerce (internet) and m-commerce (mobile) give wider reach and are always open, but bring security and delivery issues." },
    ]),

    // 6 Finance
    ...sub(T6, 'sources-of-finance-aqa-gcse-business', '3.6.1', [
      { n: 1, f: "Internal and external sources of finance", b: "Internal: retained profit, selling unwanted assets.\nExternal: family and friends, new share issue, loan or mortgage, overdraft, trade credit, hire purchase, government grants." },
      { n: 2, f: "Overdraft versus loan", b: "Overdraft: short term and flexible, for a temporary gap; interest is high and the bank can withdraw it.\nLoan: a fixed amount with set repayments, suited to a big long-term purchase; interest is paid and security may be needed." },
      { n: 3, f: "Why does a start-up find it harder to raise finance than an established business?", b: "It has no retained profit, no track record and little security, so it often relies on the owner's savings, family and friends, grants or a loan backed by a business plan." },
      { n: 4, f: "Hire purchase: a £600 deposit plus 10 payments of £250. What is the total paid?", b: "£600 + (10 × £250) = £3,100. The extra cost is the total paid minus the cash price." },
    ]),
    ...sub(T6, 'cash-flow-aqa-gcse-business', '3.6.2', [
      { n: 1, f: "Net cash flow and closing balance: formulas and example", b: "Net cash flow = inflows − outflows. Closing balance = opening balance + net cash flow, and it becomes next month's opening balance.\nExample: opening £2,200, inflows £9,100, outflows £10,000: net −£900, closing £1,300." },
      { n: 2, f: "Why is cash not the same as profit?", b: "A business can make a profit on paper from credit sales while short of cash to pay staff and suppliers now. It can also have plenty of cash from a loan while making a loss." },
      { n: 3, f: "Ways to improve cash flow", b: "Re-schedule payments, use an overdraft, reduce outflows, increase inflows, or find new finance. First identify what caused the problem." },
      { n: 4, f: "Why is cash important to a business, and what can a cash flow problem lead to?", b: "Cash pays staff, suppliers and bills when they are due. Without it a business may miss payments, lose supplier trust, pay overdraft interest or even fail, however profitable it is. Positive cash flow allows it to pay on time and invest." },
    ]),
    ...sub(T6, 'financial-terms-and-calculations-aqa-gcse-business', '3.6.3', [
      { n: 1, f: "Average rate of return (ARR): formula and example", b: "ARR = [(total return − cost of investment) ÷ years] ÷ cost of investment × 100.\nCost £20,000, total return £29,000 over 3 years: £9,000 ÷ 3 = £3,000 a year; 3,000 ÷ 20,000 × 100 = 15%." },
      { n: 2, f: "Reading a break-even chart", b: "Fixed costs: a horizontal line. Total costs: start at fixed costs and slope up. Revenue: starts at zero and slopes up more steeply. Break-even is where revenue meets total costs; loss to the left, profit to the right. AQA asks you to read the chart, not draw it." },
      { n: 3, f: "Margin of safety, with an example", b: "Actual output − break-even output. Break-even 900 units, sales 1,150 units: margin of safety = 250 units." },
      { n: 4, f: "Fixed costs, variable costs and total costs", b: "Fixed costs do not change with output; variable costs change with output; total costs are fixed plus variable costs. Profit (or loss) = revenue − total costs, where revenue = price × quantity sold." },
      { n: 5, f: "The value and limits of break-even analysis", b: "Value: shows the sales needed to survive, supports a loan application and tests price and cost changes. Limits: assumes all output sells at a constant price and variable cost per unit, depends on forecasts and ignores the timing of cash." },
    ]),
    ...sub(T6, 'analysing-the-financial-performance-of-a-business-aqa-gcse-business', '3.6.4', [
      { n: 1, f: "Sales revenue £120,000, cost of sales £78,000, expenses £33,000. Find gross and net profit and their margins.", b: "Gross profit = £42,000; margin 42,000 ÷ 120,000 × 100 = 35%.\nNet profit = £42,000 − £33,000 = £9,000; margin 9,000 ÷ 120,000 × 100 = 7.5%." },
      { n: 2, f: "Income statement versus statement of financial position", b: "Income statement: performance over a period (sales revenue, cost of sales, gross profit, expenses, net profit). Statement of financial position: a snapshot on one date of assets, liabilities, net assets and owners' funds." },
      { n: 3, f: "Asset and liability", b: "Asset: what the business owns or is owed. Liability: what it owes.", src: FIN },
      { n: 4, f: "How do you judge a business's financial performance from its statements?", b: "Compare current figures with previous years and with competitors, and look at them from each stakeholder's view: owners want profit, lenders the ability to repay, employees security and suppliers prompt payment." },
    ]),
  ],
};
