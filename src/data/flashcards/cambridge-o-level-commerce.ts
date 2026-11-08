/**
 * D-444 -- flashcards for Cambridge O Level Commerce 7100 (2026-2028).
 *
 * One block per subtopic, in syllabus order; topics 3-6 list no subtopics in
 * the syllabus record, so their cards sit on the topic (topicOnly helper). Card
 * ids are `<subtopic number>-<n>` (or `<topic number>-<n>`) and are permanent
 * (browser progress is keyed by them): add a new card with the next unused n,
 * never renumber.
 *
 * 7100 shares its six-topic structure with IGCSE 0715; this deck is written
 * separately for 7100, from Marlbridge's own 7100 study guides, revision notes
 * and exam-preparation page. The course's revision notes map to topics only (no
 * subtopic), so no card can cite a page as `source`: every card is authored.
 * Insurance cards keep to the purposes, named risks, pooling, documents and
 * brokers. Worked figures are invented for illustration. Not tiered. Plain text
 * only (see types.ts).
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

const CP = 'commerce-and-production-7100';
const CO = 'commercial-operations-7100';

export const DECK_CAMBRIDGE_O_LEVEL_COMMERCE: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'o-level',
  subjectSlug: 'commerce',
  syllabusCode: '7100',
  syllabusSeries: '2026-2028',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Commerce and production
    ...sub(CP, 'trade-and-commerce-7100', '1.1', [
      { n: 1, f: 'Define commerce', b: 'The distribution of goods and services to consumers: trade plus the aids to trade (banking, transport, insurance, warehousing, communication and advertising) that make distribution possible.' },
      { n: 2, f: 'How does home trade divide?', b: 'Into wholesale trade (selling in bulk from producer to retailer) and retail trade (selling in small quantities to the final consumer).' },
      { n: 3, f: 'Imports vs exports', b: 'Imports: goods and services bought from other countries.\nExports: goods and services sold to other countries.' },
      { n: 4, f: 'What is utility, and what are form, place and time utility?', b: 'Utility: the ability of a good or service to satisfy a want.\nForm: changing a product to make it more useful (timber into furniture).\nPlace: moving it to where it is wanted.\nTime: making it available when wanted.' },
      { n: 5, f: 'Why does scarcity force people to make choices?', b: 'Resources are limited but wants are unlimited, so choosing one thing means giving up the next best alternative, its opportunity cost.' },
    ]),
    ...sub(CP, 'production-7100', '1.2', [
      { n: 1, f: 'Classify: fishing, house-building, banking, app development', b: 'Fishing: primary.\nHouse-building: secondary (construction).\nBanking: tertiary (commercial service).\nApp development: quaternary (digital technology).' },
      { n: 2, f: 'Why does commerce belong in the tertiary sector?', b: 'Primary output is in the wrong form, and secondary output is in the wrong place and often at the wrong time. Tertiary commercial services close these gaps by distributing goods.' },
      { n: 3, f: 'Give one advantage and one disadvantage of specialisation for a worker', b: 'Advantage: higher output and greater skill at the task.\nDisadvantage: repetitive, demotivating work and a narrow set of skills.' },
      { n: 4, f: 'Why does a country specialise?', b: 'To use its natural or acquired advantages, such as climate, resources or skilled labour, efficiently and export the surplus. The risk is over-dependence on trade and on imports.' },
      { n: 5, f: 'Why does specialisation make commerce necessary?', b: 'Specialisation → interdependence → exchange: a specialist produces far more of one thing than it needs and too little of everything else, so it must trade.' },
      { n: 6, f: 'Cotton farmer → mill → wholesaler → retailer: which utility does each stage add?', b: 'Farmer: primary production.\nMill weaving cloth: form utility.\nWholesaler storing stock: time utility.\nTransport to retailers: place utility.\nThe retailer completes the chain to the consumer.' },
    ]),

    // 2 Commercial operations
    ...sub(CO, 'commercial-enterprises-7100', '2.1', [
      { n: 1, f: 'Private sector vs public sector', b: 'Private sector: owned by individuals or shareholders, usually aiming for profit.\nPublic sector: owned and run by the government, usually aiming to provide a service.' },
      { n: 2, f: 'What is unlimited liability, and which owners have it?', b: 'The owners are personally responsible for all the business’s debts, so their own possessions can be taken. Sole traders and partners in an ordinary partnership have it.' },
      { n: 3, f: 'Why might a sole trader become a private limited company?', b: 'To gain limited liability and raise more capital by selling shares privately, at the cost of registration and sharing control.' },
      { n: 4, f: 'Why does a public limited company find it easier to raise capital?', b: 'It can sell shares to the general public, usually on a stock exchange. In return it must publish its accounts and may face takeover.' },
      { n: 5, f: 'Why do public corporations exist?', b: 'To provide essential services that might be under-supplied by private firms, or to keep strategic industries under government control.' },
      { n: 6, f: 'Give three features of a multinational company', b: 'Headquarters in one country, operations in one or more other countries, and large scale with access to big markets and capital.' },
      { n: 7, f: 'Which location factors matter most for an e-commerce business?', b: 'Wi-fi and connectivity, warehousing, access to technology specialists, and logistics for delivery.' },
    ]),
    ...sub(CO, 'outsourcing-7100', '2.2', [
      { n: 1, f: 'Define outsourcing', b: 'Using another business to carry out work, such as production or distribution, instead of doing it in-house.' },
      { n: 2, f: 'Which two areas have driven the growth of outsourcing?', b: 'Contract manufacturing (another firm produces the goods) and contract logistics (another firm stores and distributes them).' },
      { n: 3, f: 'Give two benefits of outsourcing for a business', b: 'Lower costs and access to specialist skills, which free money and managers’ time for the core business.' },
      { n: 4, f: 'Give two drawbacks of outsourcing for a business', b: 'Less control over quality and delivery times, and the risk that a supplier’s poor practice damages the business’s reputation.' },
    ]),
    ...sub(CO, 'retailing-7100', '2.3', [
      { n: 1, f: 'Name types of retailer', b: 'Itinerant retailers, vending machines, independent retailers, street markets, speciality shops, online retailers, multiple chain stores, supermarkets, hypermarkets and department stores.' },
      { n: 2, f: 'Supermarket vs hypermarket vs department store', b: 'Supermarket: large self-service store, mainly food and household goods.\nHypermarket: very large store, often out of town, selling a very wide range.\nDepartment store: many departments under one roof, each selling a different type of good.' },
      { n: 3, f: 'Give three reasons small-scale retailers survive', b: 'Personal service, flexible opening hours and additional services, such as delivery or informal credit for regular customers.' },
      { n: 4, f: 'Name retail selling techniques', b: 'Branding and own brands, logos and packaging, self-service, after-sales service, barcoding, direct mail, loyalty programmes, informal credit and cash on delivery.' },
      { n: 5, f: 'How has e-commerce affected traditional retailing?', b: 'Positives: selling 24/7, more customers, more revenue, targeted marketing, lower store costs.\nNegatives: delivery, training and warehousing costs, and website maintenance.' },
      { n: 6, f: 'What is EPoS?', b: 'Electronic point of sale: tills that scan barcodes, record each sale and update stock records automatically.' },
    ]),
    ...sub(CO, 'wholesaling-7100', '2.4', [
      { n: 1, f: 'What is breaking bulk?', b: 'A wholesaler buying large quantities from manufacturers and selling them in smaller quantities to retailers, so retailers need not tie up capital in big orders.' },
      { n: 2, f: 'Why is the wholesaler important to the manufacturer?', b: 'The manufacturer sells in bulk to a few buyers, saves on storage, passes on the risk of unsold goods, and receives information about what consumers want.' },
      { n: 3, f: 'Why is the wholesaler important to the retailer?', b: 'The retailer can buy small quantities of many goods from one place, may receive credit and delivery, and gets advice on new products.' },
      { n: 4, f: 'Why do supermarkets often bypass wholesalers?', b: 'They are large enough to buy in bulk straight from manufacturers and run their own warehouses, so they keep the wholesaler’s profit margin themselves.' },
      { n: 5, f: 'What is a cash-and-carry wholesaler?', b: 'A self-service warehouse where retailers choose goods, pay cash at once and transport the goods themselves, in return for lower prices.' },
    ]),
    ...sub(CO, 'trading-documents-7100', '2.5', [
      { n: 1, f: 'Which document does a seller send in reply to an enquiry?', b: 'A quotation, giving prices, terms of payment and delivery details.' },
      { n: 2, f: 'Which document shows the amount a buyer must pay for goods supplied?', b: 'The invoice.' },
      { n: 3, f: 'Which document travels with the goods and is signed on arrival?', b: 'The delivery note, which the buyer signs to confirm that the goods were received.' },
      { n: 4, f: 'Goods arrive damaged and are returned. Which document reduces what the buyer owes?', b: 'A credit note.' },
      { n: 5, f: 'What is a statement of account?', b: 'A summary of the transactions between buyer and seller over a period, such as a month, showing the balance still owed.' },
      { n: 6, f: 'Which documents are used when exporting goods?', b: 'A certificate of origin, a bill of lading for sea freight or an air waybill for air freight, and often a documentary credit (letter of credit) to guarantee payment.' },
    ]),
    ...sub(CO, 'communication-7100-commerce', '2.6', [
      { n: 1, f: 'Name modern methods of business communication', b: 'Email, websites, social media, web-based chat including chatbots, video conferencing, mobile messaging, and posters or other printed methods.' },
      { n: 2, f: 'Which factors should guide the choice of communication method?', b: 'Urgency, cost, security, distance, availability of networks and the importance of the message.' },
      { n: 3, f: 'Why might a business use a chatbot on its website?', b: 'It answers common customer questions instantly at any time, at low cost, though it may not handle complex or unusual queries.' },
      { n: 4, f: 'Which communication method suits a confidential contract that must arrive tomorrow?', b: 'A secure method that gives proof of delivery, such as an encrypted email with an electronic signature or a courier, because security and urgency both matter.' },
    ]),

    // 3 Globalisation of trade
    ...topicOnly('globalisation-of-trade-7100', '3', [
      { n: 1, f: 'Why do countries trade internationally?', b: 'No country can produce everything efficiently. Trade gives wider choice, cheaper imports from lower-cost producers, export markets, investment and jobs.' },
      { n: 2, f: 'Give four difficulties of international trade', b: 'Language and distance, payment and exchange-rate risk, customs duties and documentation, and different laws, as well as the risk of non-payment.' },
      { n: 3, f: 'Is tourism visible or invisible trade?', b: 'Invisible trade: it is a service, like banking, insurance and shipping. Visible trade is trade in goods.' },
      { n: 4, f: 'What does the balance of payments include that the balance of trade does not?', b: 'Trade in services and financial flows such as investment. The balance of trade covers goods only.' },
      { n: 5, f: 'Exports of goods $400m, imports of goods $350m: what is the balance of trade?', b: '$400m − $350m = +$50m, a surplus.' },
      { n: 6, f: 'Why might a government restrict imports?', b: 'To protect infant industries and jobs, to reduce a trade deficit, or to retaliate against another country’s restrictions.' },
      { n: 7, f: 'How does a tariff affect consumers?', b: 'It is a tax on imports, so imported goods become more expensive and consumers pay higher prices or buy fewer imports.' },
      { n: 8, f: 'What is a global supply chain?', b: 'The network of suppliers, manufacturers, agents, wholesalers and retailers in different countries that moves a product from raw materials to the final consumer.' },
      { n: 9, f: 'Give three risks to a global supply chain', b: 'Natural disasters, political change such as new tariffs or embargoes, and financial risk such as currency changes. Ethical, environmental and technological risks also apply.' },
    ]),

    // 4 Logistics in commerce
    ...topicOnly('logistics-in-commerce-7100', '4', [
      { n: 1, f: 'Which transport method suits each: fresh flowers abroad, iron ore overseas, natural gas?', b: 'Fresh flowers: air, because they are perishable and valuable.\nIron ore: sea, because it is bulky and low value.\nNatural gas: pipeline.' },
      { n: 2, f: 'Give two advantages of road transport', b: 'Door-to-door delivery and flexible routes and times for short and medium distances.' },
      { n: 3, f: 'Why is rail often combined with road transport?', b: 'Rail carries heavy loads cheaply over long distances but runs on fixed routes, so lorries carry goods to and from the stations.' },
      { n: 4, f: 'What is containerisation?', b: 'Packing goods into standard sealed containers that transfer between ships, trains and lorries without unpacking, cutting handling, damage and theft.' },
      { n: 5, f: 'Why is warehousing needed?', b: 'Production and demand rarely match in timing, so goods are stored until wanted, for example crops harvested in one season but eaten all year.' },
      { n: 6, f: 'What should a business consider when locating a warehouse?', b: 'Land cost and availability, access to roads, rail, ports or airports, nearness to suppliers and customers, labour supply and room to expand.' },
      { n: 7, f: 'Buffer stock vs reorder level vs lead time', b: 'Buffer stock: the minimum kept for emergencies.\nReorder level: the stock level at which a new order is placed.\nLead time: the time between ordering and delivery.' },
      { n: 8, f: 'A shop sells 40 units a day, lead time is 3 days and buffer stock is 30. What is the reorder level?', b: '(40 × 3) + 30 = 150 units.' },
      { n: 9, f: 'Why is holding too much stock costly?', b: 'It takes up space, may be damaged or go out of date, and ties up money that could be used elsewhere.' },
    ]),

    // 5 Aids to trade that support commerce
    ...topicOnly('aids-to-trade-that-support-commerce-7100', '5', [
      { n: 1, f: 'Name banking services used by businesses', b: 'Current accounts, overdrafts, loans, savings accounts, foreign exchange, letters of credit and digital banking.' },
      { n: 2, f: 'Why would a business choose a loan rather than an overdraft to buy machinery?', b: 'A loan gives a fixed sum repaid over an agreed period, usually at lower interest, which suits a large long-term purchase. An overdraft suits short-term cash gaps.' },
      { n: 3, f: 'Calculate simple interest on $8,000 at 5% for 3 years', b: '8,000 × 0.05 × 3 = $1,200.' },
      { n: 4, f: 'Does insurance prevent loss?', b: 'No. It compensates for financial loss after it happens, which gives businesses the confidence to take commercial risks.' },
      { n: 5, f: 'Public liability vs employer’s liability insurance', b: 'Public liability: covers claims from members of the public injured or harmed by the business.\nEmployer’s liability: covers claims from employees injured at work.' },
      { n: 6, f: 'What is consequential loss insurance?', b: 'Cover for loss of income after an insured event, such as a fire that forces a business to close for a time.' },
      { n: 7, f: 'What is a premium, and what affects its size?', b: 'The payment made for insurance cover. It depends on how likely a loss is and how large it could be.' },
      { n: 8, f: 'What does advertising aim to do, and what are its drawbacks?', b: 'It informs, persuades and reminds customers and builds a brand image. It adds to costs, which may raise prices, and it can mislead.' },
      { n: 9, f: 'Unit cost $60, selling price $75: what is the mark-up percentage?', b: '(75 − 60) ÷ 60 = 0.25, × 100 = 25%.' },
      { n: 10, f: '150 units sold at $20 each: what is the revenue?', b: '150 × $20 = $3,000.' },
    ]),

    // 6 Sustainability and ethics
    ...topicOnly('sustainability-and-ethics-7100', '6', [
      { n: 1, f: 'Define sustainability for a business', b: 'Operating in a way that meets present needs without harming the ability of future generations to meet theirs.' },
      { n: 2, f: 'Give ways a retailer can reduce its environmental impact', b: 'Less packaging, recycling, saving energy or using renewable energy, low-pollution transport, and repair or take-back schemes.' },
      { n: 3, f: 'What does reducing a carbon footprint mean?', b: 'Cutting the total greenhouse gases caused by a business’s activities or products, for example by using less energy or cleaner transport.' },
      { n: 4, f: 'How does fair trade help producers in poorer countries?', b: 'They are paid a fair price for their products so they can earn a decent living, often with an extra amount for community projects.' },
      { n: 5, f: 'What does ethical treatment of workers involve?', b: 'No child labour, fair wages, reasonable hours and safe workplaces, including in supplier factories overseas.' },
      { n: 6, f: 'Why might an ethical business still lose customers?', b: 'Fair wages and sustainable materials can raise its costs and prices, so price-sensitive customers may switch to cheaper competitors.' },
      { n: 7, f: 'How can acting responsibly benefit a business?', b: 'A better reputation and customer loyalty, lower energy and material costs, more motivated staff, and avoiding fines and bad publicity.' },
      { n: 8, f: 'Why does an ethical decision consider stakeholders, not only owners?', b: 'Employees, customers, suppliers, the community and the government are all affected by the business’s actions.' },
      { n: 9, f: 'A lorry travels 10,000 km and emits 0.9 kg of carbon dioxide per km. How many tonnes is that?', b: '10,000 × 0.9 = 9,000 kg = 9 tonnes.' },
    ]),
  ],
};
