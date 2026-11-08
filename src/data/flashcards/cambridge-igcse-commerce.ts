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
      { n: 1, f: 'What is logistics?', b: 'Planning and managing how goods are moved and stored so the right goods arrive in the right place, at the right time, in the right condition and at an acceptable cost.' },
      { n: 2, f: 'Road vs rail transport', b: 'Road: door-to-door and flexible, but limited loads and traffic delays.\nRail: cheap for heavy, bulky loads over long distances, but fixed routes and usually needs road at each end.' },
      { n: 3, f: 'Sea vs air transport', b: 'Sea: very low cost per tonne and huge capacity, but slow and needs ports.\nAir: fastest over long distances, for perishable, urgent or high-value goods, but the most expensive with limited capacity.' },
      { n: 4, f: 'What are the advantages and disadvantages of pipelines?', b: 'Advantages: continuous flow and low running cost for oil, gas and water.\nDisadvantages: only for liquids and gases, very high set-up cost and a fixed route.' },
      { n: 5, f: 'Why do containers help international trade?', b: 'The same sealed box moves between lorry, train and ship without unpacking, reducing handling, damage and theft.' },
      { n: 6, f: 'Which factors affect the choice of transport?', b: 'Cost, speed, the nature of the goods (size, weight, value, fragility, perishability), distance and destination, security and reliability, and customer requirements.' },
      { n: 7, f: 'What are the functions of a warehouse?', b: 'Storing goods until needed, smoothing seasonal supply and demand, protecting goods, breaking bulk, special storage such as cold stores, and sorting and packing for dispatch.' },
      { n: 8, f: 'What is a bonded warehouse?', b: 'A warehouse where imported goods are held until customs duty is paid, so the importer pays duty only when goods are released for sale.' },
      { n: 9, f: 'A firm uses 25 units a day, the lead time is 4 days and buffer stock is 50 units. What is the reorder level?', b: '(25 × 4) + 50 = 150 units.' },
      { n: 10, f: 'What is just-in-time stock control?', b: 'Ordering goods to arrive only when they are needed. It cuts storage costs but leaves the business exposed if a supplier is late.' },
    ]),

    // 5 Aids to trade that support commerce
    ...topicOnly('aids-to-trade-that-support-commerce-0715', '5', [
      { n: 1, f: 'Overdraft vs bank loan', b: 'Overdraft: the account can go below zero up to a limit; flexible for short-term cash gaps, but interest is high.\nLoan: a fixed sum repaid with interest over an agreed period; suits large purchases such as machinery.' },
      { n: 2, f: 'Calculate simple interest on $5,000 at 6% for 2 years', b: 'Interest = principal × rate × time = 5,000 × 0.06 × 2 = $600.' },
      { n: 3, f: 'How do banks help international trade?', b: 'Through foreign exchange and documentary credits (letters of credit), which reduce the risk of non-payment.' },
      { n: 4, f: 'What are the purposes of insurance?', b: 'Risk reduction, compensation for loss, financial protection, and the business confidence to invest and take commercial risks.' },
      { n: 5, f: 'Name types of risk a business can insure against', b: 'Consequential loss, employer’s liability, fire, motor, premises, public liability and theft.' },
      { n: 6, f: 'How does pooling of risk allow an insurer to set premiums?', b: 'Many policyholders pay premiums into a pool, from which the few who suffer losses are compensated. If 1,000 similar risks expect $150,000 of claims, the basic premium is $150 each, before costs and profit.' },
      { n: 7, f: 'Proposal form vs cover note vs policy', b: 'Proposal form: the application, giving facts about the risk.\nCover note: temporary proof of cover until the policy is issued.\nPolicy: the contract setting out what is covered.' },
      { n: 8, f: 'What does an insurance broker do?', b: 'Acts for the client, comparing insurers to find suitable cover at a good price and giving advice.' },
      { n: 9, f: 'What are the purposes of advertising?', b: 'To inform customers about products and prices, persuade them to choose a brand, remind them of existing products, and build a brand image.' },
      { n: 10, f: 'How do you calculate mark-up percentage?', b: '(Selling price − unit cost) ÷ unit cost × 100. For a cost of $40 and price of $50: 10 ÷ 40 = 0.25 = 25%.' },
      { n: 11, f: 'How do you calculate revenue?', b: 'Selling price per unit × number of units sold. For example, 200 units at $15 = $3,000.' },
    ]),

    // 6 Sustainability and ethics
    ...topicOnly('sustainability-and-ethics-0715', '6', [
      { n: 1, f: 'What does sustainability mean in commerce?', b: 'Meeting the needs of today without damaging the ability of future generations to meet theirs.' },
      { n: 2, f: 'What are the environmental, social and economic parts of sustainability?', b: 'Environmental: less damage to land, water and air.\nSocial: treating workers, suppliers and communities well.\nEconomic: running the business so it survives and provides jobs in the long term.' },
      { n: 3, f: 'What is a carbon footprint?', b: 'The total greenhouse gases caused by an activity or product.' },
      { n: 4, f: 'What is a circular approach to resources?', b: 'Keeping materials in use for longer by repair, reuse and recycling, instead of the straight line of make, use and throw away.' },
      { n: 5, f: 'What is fair trade?', b: 'Paying producers, often in poorer countries, a fair price so they earn a decent living, usually with an extra amount for community projects.' },
      { n: 6, f: 'Name areas of ethical behaviour in business', b: 'Treatment of workers (no child labour, fair wages, safety), fair trade, honest marketing, protecting customer data, safe products and fair competition.' },
      { n: 7, f: 'Who are a business’s stakeholders?', b: 'Owners, employees, customers, suppliers, the local community and the government.' },
      { n: 8, f: 'Why do businesses choose to act responsibly?', b: 'Reputation and sales, cost savings from using less energy and material, more motivated staff, laws and regulations, and avoiding bad publicity.' },
      { n: 9, f: 'What are the drawbacks of acting ethically and sustainably?', b: 'Higher costs from fair wages and sustainable materials, up-front spending on equipment, and price-sensitive customers switching to cheaper competitors.' },
      { n: 10, f: 'What is greenwashing?', b: 'Exaggerating green claims to improve a business’s image without making real changes. It is itself unethical and harms trust.' },
    ]),
  ],
};
