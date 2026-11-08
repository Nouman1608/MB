/**
 * D-444 -- flashcards for Cambridge IGCSE Commerce 0715 (2028).
 *
 * One block per subtopic, in syllabus order; topics 4-6 list no subtopics in
 * the syllabus record, so their cards sit on the topic (topicOnly helper). Card
 * ids are `<subtopic number>-<n>` (or `<topic number>-<n>`) and are permanent
 * (browser progress is keyed by them): add a new card with the next unused n,
 * never renumber.
 *
 * The course's 0715 revision notes map to topics only (no subtopic), so no card
 * can cite a page as `source`: every card is authored (origin 'authored'),
 * written from Marlbridge's own 0715 study guides and revision notes. Insurance
 * cards keep to what the revision notes give as the syllabus requirement
 * (purposes, named risks, pooling, premiums, documents, brokers), not the
 * classical principles of insurance. Worked figures are invented for
 * illustration. Not tiered. Plain text only (see types.ts).
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

const CP = 'commerce-and-production-0715';
const CO = 'commercial-operations-0715';
const GT = 'globalisation-of-trade-0715';

export const DECK_CAMBRIDGE_IGCSE_COMMERCE: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'igcse',
  subjectSlug: 'commerce',
  syllabusCode: '0715',
  syllabusSeries: '2028',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Commerce and production
    ...sub(CP, 'trade-and-commerce-0715', '1.1', [
      { n: 1, f: 'What is commerce?', b: 'All the activities involved in distributing goods and services to the consumer: trade (buying and selling) plus the aids to trade that support it.' },
      { n: 2, f: 'Needs vs wants', b: 'Needs: essentials for survival, such as food, shelter and clothing.\nWants: everything people desire beyond their needs.' },
      { n: 3, f: 'What is opportunity cost?', b: 'The next best alternative given up when a choice is made. It arises because resources are limited but wants are not.' },
      { n: 4, f: 'Home trade vs foreign trade', b: 'Home trade: buying and selling within one country.\nForeign trade: buying and selling across national borders, which adds different currencies, customs duties, more documents and longer transport times.' },
      { n: 5, f: 'Name the main aids to trade', b: 'Banking, insurance, transport, warehousing, communication and advertising.' },
      { n: 6, f: 'Place utility vs time utility', b: 'Place utility: value added by transport moving goods to where they are wanted.\nTime utility: value added by warehousing storing goods until they are wanted.' },
    ]),
    ...sub(CP, 'production-0715', '1.2', [
      { n: 1, f: 'What is production?', b: 'The creation of goods and services to satisfy human wants.' },
      { n: 2, f: 'What are the four sectors of production?', b: 'Primary (extractive): mining, farming, fishing, forestry.\nSecondary: manufacturing and construction.\nTertiary: commercial services (trade and aids to trade) and direct services.\nQuaternary: digital technology.' },
      { n: 3, f: 'Commercial services vs direct services', b: 'Commercial services: trade and the aids to trade that help distribute goods.\nDirect services: services given straight to people, such as doctors, teachers and hairdressers.' },
      { n: 4, f: 'What is specialisation?', b: 'Concentrating on producing one thing, or one part of a process, rather than a whole range. It makes exchange, and so commerce, necessary.' },
      { n: 5, f: 'Give an advantage and a disadvantage of specialisation for an individual, a factory and a country', b: 'Individual: highly skilled; but work is repetitive.\nFactory: can mechanise and gain economies of scale; but relies on one product.\nCountry: exports what it makes efficiently; but depends on imports and trade.' },
      { n: 6, f: 'What is the chain of production?', b: 'Extraction → manufacture → wholesale → retail → consumer. Each stage adds value, for example by processing, branding, transporting or storing.' },
    ]),

    // 2 Commercial operations
    ...sub(CO, 'commercial-enterprises-0715', '2.1', [
      { n: 1, f: 'Sole trader vs partnership: ownership and liability', b: 'Sole trader: one owner with unlimited liability.\nPartnership: two or more owners; ordinary partners also have unlimited liability. More partners bring more capital and skills.' },
      { n: 2, f: 'What changes when a business becomes a private limited company?', b: 'It becomes a separate legal person and the owners (shareholders) have limited liability, but it must register and shares cannot be sold to the general public.' },
      { n: 3, f: 'Private limited company vs public limited company', b: 'Private (Ltd): shares sold privately, not to the public.\nPublic (plc): shares can be sold to the general public, raising large amounts of capital, but it must publish accounts and risks takeover.' },
      { n: 4, f: 'Cooperative vs public corporation', b: 'Cooperative: owned and run by its members, who share the profits.\nPublic corporation: owned and run by the government in the public sector.' },
      { n: 5, f: 'What is a franchise? Give a benefit and a drawback for the franchisee.', b: 'A franchisee trades under an established brand using the franchisor’s systems in return for fees and a share of revenue.\nBenefit: lower risk from a proven model. Drawback: less independence and ongoing payments.' },
      { n: 6, f: 'What are the benefits and drawbacks of hosting a multinational company?', b: 'Benefits: jobs, investment, technology transfer and export earnings.\nDrawbacks: profits may leave the country, local firms face strong competition, and decisions are made abroad.' },
      { n: 7, f: 'Which factors affect where a business locates?', b: 'Physical: labour, markets, transport, power, raw materials, competition, suppliers, communication and government influence.\nE-commerce: wi-fi, warehousing, technology specialists and logistics.' },
    ]),
    ...sub(CO, 'outsourcing-0715', '2.2', [
      { n: 1, f: 'What is outsourcing?', b: 'Paying another business to carry out an activity that the enterprise could do itself.' },
      { n: 2, f: 'Contract manufacturing vs contract logistics', b: 'Contract manufacturing: paying another company to produce goods.\nContract logistics: paying another company to handle storage and distribution.' },
      { n: 3, f: 'Why might an enterprise outsource?', b: 'Lower costs, access to specialist expertise, and freeing capital and management time for its core activities.' },
      { n: 4, f: 'What are the risks of outsourcing?', b: 'Less control over quality and delivery, dependence on the supplier, and damage to reputation if the supplier behaves badly.' },
    ]),
    ...sub(CO, 'retailing-0715', '2.3', [
      { n: 1, f: 'Why do small-scale retailers survive against large ones?', b: 'Personal service, flexible opening hours and additional services, such as delivery or credit for known customers, plus convenience and local knowledge.' },
      { n: 2, f: 'What are the advantages of large-scale retailers?', b: 'Economies of scale, lower prices, a wide range, own brands and self-service. Drawbacks: less personal service and often less convenient locations.' },
      { n: 3, f: 'What does e-commerce need in order to work well?', b: 'Reliable delivery and secure online payment. It removes the need for a physical shop and lets customers buy at any time.' },
      { n: 4, f: 'Name digital retail trends', b: 'Omnichannel and multi-channel retailing, click and collect, EPoS, self-service checkouts, cashless stores, subscription commerce, QR codes, VR showrooms, dropshipping and mobile apps.' },
      { n: 5, f: 'What is click and collect?', b: 'A customer orders online and collects the goods from a store or collection point, combining online convenience with no delivery wait or charge.' },
    ]),
    ...sub(CO, 'wholesaling-0715', '2.4', [
      { n: 1, f: 'Retailer vs wholesaler', b: 'Retailer: sells to the final consumer.\nWholesaler: buys in bulk from manufacturers and sells in smaller quantities to retailers.' },
      { n: 2, f: 'How does a wholesaler help retailers?', b: 'Breaking bulk so they can buy small quantities, granting credit to improve their cash flow, delivering goods, and advising on new lines.' },
      { n: 3, f: 'How does a wholesaler help manufacturers?', b: 'Buying in bulk, storing goods (warehousing), bearing the risk of goods deteriorating or falling in price, and passing on information about demand.' },
      { n: 4, f: 'When is the wholesaler eliminated from the chain of distribution?', b: 'When manufacturers sell directly to large retailers such as supermarkets, or straight to consumers online or by mail order, and for perishable or bulky goods.' },
      { n: 5, f: 'How do independent wholesalers survive?', b: 'Mainly through cash-and-carry outlets and by forming voluntary chains with small retailers.' },
    ]),
    ...sub(CO, 'trading-documents-0715', '2.5', [
      { n: 1, f: 'Put the main trading documents in order', b: 'Enquiry → quotation → order → invoice → delivery note → credit note (if needed) → statement of account → receipt.' },
      { n: 2, f: 'Enquiry vs quotation', b: 'Enquiry: the buyer asks a seller for details of goods, prices and terms.\nQuotation: the seller replies with prices, terms and delivery details.' },
      { n: 3, f: 'Invoice vs delivery note', b: 'Invoice: the bill, showing the goods supplied, prices and total owed.\nDelivery note: goes with the goods; the buyer signs it to confirm they arrived.' },
      { n: 4, f: 'When is a credit note issued?', b: 'When the amount a buyer owes must be reduced, for example because goods were returned, damaged or overcharged.' },
      { n: 5, f: 'Statement of account vs receipt', b: 'Statement of account: summarises transactions over a period and shows the balance owed.\nReceipt: proof that payment has been made.' },
      { n: 6, f: 'What do a bill of lading and a certificate of origin do in international trade?', b: 'Bill of lading: issued by the shipping company for goods sent by sea; it is evidence of the contract and a document of title.\nCertificate of origin: states the country where the goods were made, for customs purposes.' },
    ]),
    ...sub(CO, 'communication-0715-commerce', '2.6', [
      { n: 1, f: 'Which factors affect the choice of communication method?', b: 'Urgency, cost, security, distance, network availability and the importance of the message.' },
      { n: 2, f: 'How does modern communication help trade?', b: 'Email, websites, video conferencing and messaging let traders agree orders, prices and delivery quickly and cheaply across countries, and allow e-commerce and online tracking.' },
      { n: 3, f: 'What are the limitations of digital communication for businesses?', b: 'The cost of equipment and training, dependence on a reliable network, and risks such as hacking and fraud.' },
      { n: 4, f: 'How should you answer "recommend a communication method"?', b: 'Weigh the factors (urgency, cost, security, distance, importance) against the specific scenario and justify one choice, rather than listing every method.' },
    ]),

    // 3 Globalisation of trade
    ...sub(GT, 'international-trade-0715', '3.1', [
      { n: 1, f: 'What are the benefits of international trade to a country?', b: 'Wider choice of goods, a higher standard of living, cheaper imports where other countries produce at lower cost, more investment and job creation.' },
      { n: 2, f: 'What challenges do exporters and importers face?', b: 'Distance and language, methods of payment and documentation, transport and customs duties, risk of non-payment, exchange-rate risk, competition and different legal systems.' },
      { n: 3, f: 'Visible vs invisible trade', b: 'Visible trade: trade in goods.\nInvisible trade: trade in services, such as tourism, banking, insurance and shipping.' },
      { n: 4, f: 'Balance of trade vs balance of payments', b: 'Balance of trade: exports minus imports of goods only.\nBalance of payments: trade in goods and services, plus financial flows such as investment.' },
      { n: 5, f: 'A country exports goods worth $850m and imports goods worth $920m. What is its balance of trade?', b: '$850m − $920m = −$70m, a deficit of $70m.' },
      { n: 6, f: 'Tariff vs quota vs embargo', b: 'Tariff: a tax on imports, raising their price.\nQuota: a limit on the quantity imported.\nEmbargo: a ban on trade in a good or with a country.' },
      { n: 7, f: 'What are the advantages and disadvantages of a trading bloc for members?', b: 'Advantages: easier access to members’ markets, often with no internal tariffs.\nDisadvantages: loss of an independent trade policy and exposure to the bloc’s economic problems.' },
    ]),
    ...sub(GT, 'global-supply-chain-management-0715', '3.2', [
      { n: 1, f: 'Simple vs complex supply chain', b: 'Simple: supplier → manufacturer → consumer.\nComplex: supplier → agent → wholesaler → retailer → consumer.' },
      { n: 2, f: 'Upstream vs downstream in a supply chain', b: 'Upstream: suppliers and raw materials coming into the enterprise.\nDownstream: distribution from the enterprise to the end consumer.' },
      { n: 3, f: 'Why do businesses manage global supply chains?', b: 'Lower costs of production, labour and purchasing, helped by advances in logistics and communication.' },
      { n: 4, f: 'What are the six named types of global supply chain risk?', b: 'Environmental, natural disaster, financial, ethical, technological and political.' },
      { n: 5, f: 'A new tariff is imposed in a supplier’s country. Which type of supply chain risk is this?', b: 'Political risk, because it comes from a change in government policy.' },
      { n: 6, f: 'Why is risk assessment important in a global supply chain?', b: 'Identifying risks and planning for them in advance, for example by using several suppliers, reduces disruption when something goes wrong.' },
    ]),

    // 4 Logistics in commerce
    ...topicOnly('logistics-in-commerce-0715', '4', [
      { n: 1, f: 'What are the three functions of transport in the supply chain?', b: 'Time, place and quantity: transport delivers the right quantity of goods to the right place at the right time.' },
      { n: 2, f: 'Road vs rail transport', b: 'Road (delivery vans, trucks, couriers): door-to-door and flexible, but limited loads and congestion.\nRail (freight trains): cheap for heavy, bulky loads over long distances, but fixed routes and usually needs road at each end.' },
      { n: 3, f: 'Sea vs air transport', b: 'Sea (ferry, tanker, container ship, cargo liner): cheapest for heavy, bulky goods internationally, but slow.\nAir (freight planes): fastest over long distances for perishable, urgent or valuable goods, but the most expensive.' },
      { n: 4, f: 'What are the advantages and disadvantages of pipelines?', b: 'Advantages: continuous flow, low running and labour costs.\nDisadvantages: very high cost to build, carries only liquids and gases, and leaks can be hard to find.' },
      { n: 5, f: 'Which six factors affect the choice of transport method?', b: 'Nature of goods, urgency, cost, security, distance and reliability of the transporter.' },
      { n: 6, f: 'Which transport method suits fresh flowers sent abroad for a festival, and why?', b: 'Air freight, refrigerated: the flowers are perishable, urgent and valuable for their weight, so the high cost is justified.' },
      { n: 7, f: 'What is containerisation?', b: 'Packing goods into standard-sized sealed containers that move between ships, trains and trucks without being unpacked, cutting handling, damage and theft.' },
      { n: 8, f: 'What is transshipment?', b: 'Transferring containers from one ship or vehicle to another at a hub port on the way to their destination.' },
      { n: 9, f: 'What are the five functions of warehousing in the supply chain?', b: 'Links with seasonal production, links with demand, protecting supply, price stability and logistics postponement.' },
      { n: 10, f: 'Bonded vs cold storage warehouse', b: 'Bonded: holds imported goods until customs duty is paid.\nCold storage: refrigerated or frozen storage for perishable goods such as food and medicines.' },
      { n: 11, f: 'What is a regional distribution centre (RDC)?', b: 'A large warehouse owned by a retail chain; suppliers deliver full loads to it and it sends mixed loads to the chain’s shops in that region.' },
      { n: 12, f: 'Name three uses of automation in warehousing and two benefits', b: 'Uses: robotics, automated sorting and voice picking.\nBenefits: any two of lower labour costs, less human error, improved picking accuracy, improved inventory control and improved customer service.' },
    ]),

    // 5 Aids to trade that support commerce
    ...topicOnly('aids-to-trade-that-support-commerce-0715', '5', [
      { n: 1, f: 'What are the purposes of advertising?', b: 'To inform customers about products and prices, persuade them to choose a brand, remind them of existing products, and build a brand image.' },
      { n: 2, f: 'Informative vs persuasive vs collective vs competitive advertising', b: 'Informative: gives facts.\nPersuasive: creates a desire to buy.\nCollective (generic): promotes a whole product type for an industry.\nCompetitive: compares a brand with its rivals.' },
      { n: 3, f: 'What is sales promotion? Give three methods', b: 'Short-term incentives to raise sales, such as free samples, coupons, special offers, competitions, loss leaders and free gifts.' },
      { n: 4, f: 'Standing order vs direct debit', b: 'Standing order: a fixed amount paid on set dates, set up and changed by the payer.\nDirect debit: the receiver collects an amount that can vary, such as a utility bill.' },
      { n: 5, f: 'What has been the impact of digital banking?', b: 'Closure of bank branches, more digital-only banks and less use of cash, a move towards a cashless society.' },
      { n: 6, f: 'What are the five purposes of insurance in the syllabus?', b: 'Risk reduction, compensation, financial protection, business confidence and investment.' },
      { n: 7, f: 'Name the seven types of insurance risk in the syllabus', b: 'Consequential loss, employer’s liability, fire, motor, premises, public liability and theft.' },
      { n: 8, f: 'How does pooling of risk work?', b: 'Many policyholders pay premiums into a common fund; only a few suffer losses in a year, so the fund can compensate them.' },
      { n: 9, f: 'Stock worth $80,000 is insured at $1.50 per $100. What is the premium?', b: '80,000 ÷ 100 × 1.50 = $1,200 a year.' },
      { n: 10, f: 'Proposal form vs cover note vs policy', b: 'Proposal form: the application, giving full facts about the risk.\nCover note: temporary proof of cover until the policy is issued.\nPolicy: the full contract setting out what is covered.' },
      { n: 11, f: 'What does an insurance broker do?', b: 'An independent adviser who compares insurers to find the most suitable cover at a good price for the client.' },
      { n: 12, f: 'Name three short-term and three long-term sources of finance', b: 'Short-term: trade credit, debt factoring, overdraft, leasing, hire purchase, sale and leaseback, retained profit.\nLong-term: ordinary and preference shares, loans, debentures, venture capital, crowdfunding.' },
      { n: 13, f: 'Mark-up % vs gross profit margin %', b: 'Mark-up = (average selling price − unit cost) ÷ unit cost × 100.\nGross profit margin = gross profit ÷ revenue × 100.' },
      { n: 14, f: 'Unit cost $40, selling price $50: what is the mark-up?', b: '(50 − 40) ÷ 40 × 100 = 25%.' },
      { n: 15, f: 'How do you calculate working capital and net profit?', b: 'Working capital = current assets − current liabilities.\nNet profit (profit for the year) = gross profit − expenses.' },
    ]),

    // 6 Sustainability and ethics
    ...topicOnly('sustainability-and-ethics-0715', '6', [
      { n: 1, f: 'What is the purpose of sustainability in the supply chain?', b: 'Making commercial processes eco-friendly and environmentally responsible for future generations.' },
      { n: 2, f: 'Name five of the nine actions to improve sustainability', b: 'Any five of: sustainable materials, sustainable logistics, reducing packaging, eco-friendly products, recycling and reducing waste, reducing returns and exchanges, digital resale marketplaces, free repair services, water stewardship.' },
      { n: 3, f: 'How does reducing returns and exchanges improve sustainability?', b: 'Fewer returns mean fewer delivery journeys and less wasted stock, for example by giving accurate size guides and clear product photos.' },
      { n: 4, f: 'What is a digital resale marketplace?', b: 'An online platform where customers resell used items, keeping products in use for longer.' },
      { n: 5, f: 'What is water stewardship?', b: 'Reducing, reusing and treating the water used in production so that local water supplies are protected.' },
      { n: 6, f: 'What does ethics mean in commerce?', b: 'Moral principles about what is right and wrong, guiding how a business behaves, often beyond what the law requires.' },
      { n: 7, f: 'What is the role of fair trade in commerce?', b: 'Producers in lower-income countries receive a fair, stable price and decent conditions; consumers get an ethical choice and retailers gain reputation.' },
      { n: 8, f: 'Which two ethical issues does the syllabus name?', b: 'Misleading advertising and harmful disposal of products.' },
      { n: 9, f: 'Why do consumers need protection?', b: 'Sellers know more than buyers, goods may be unsafe, faulty or not as described, advertising can mislead, and individuals have less power than large businesses.' },
      { n: 10, f: 'What should a buyer do to resolve a complaint?', b: 'Keep the receipt and evidence, complain to the seller first, escalate to the manager or head office, contact a consumer protection organisation, and take legal action as a last resort.' },
      { n: 11, f: 'How should a seller respond to a complaint?', b: 'Listen and record it, offer a repair, replacement or refund, apologise or offer goodwill, investigate the cause and train staff.' },
    ]),
  ],
};
