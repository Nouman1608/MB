/**
 * D-444 -- flashcards for Cambridge IGCSE Pakistan Studies 0448 (2026).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 0448); origin 'revision-notes'.
 *
 * Written from Marlbridge's own 0448 revision notes and study guides (Paper 1
 * history, The land of Pakistan, Natural resources). No page covers Paper 2
 * sections 2.3-2.8 (power, agriculture, industry, trade, transport,
 * population), so those cards keep to standard textbook facts with no
 * invented figures.
 *
 * Not tiered. Plain text only (see types.ts).
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

const LAND = 'pakistan-studies-land-revision-notes';
const NR = 'igcse-pakistan-studies-natural-resources-revision-notes';

const P1 = 'paper-1-history-culture-0448';
const P2 = 'paper-2-environment-0448';

export const DECK_CAMBRIDGE_IGCSE_PAKISTAN_STUDIES: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'igcse',
  subjectSlug: 'pakistan-studies',
  syllabusCode: '0448',
  syllabusSeries: '2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // Paper 1 The History and Culture of Pakistan
    ...sub(P1, 'cultural-historical-background-0448', '1.1', [
      { n: 1, f: 'Why did the Mughal Empire decline after 1707?', b: 'Internal weakness (the costs and policies of Aurangzeb’s reign, weak successors, wars of succession) combined with external pressure (invasions such as Nadir Shah’s in 1739, and the expansion of the East India Company). Explain how they worked together.' },
      { n: 2, f: 'What did Shah Waliullah (1703–62) contribute to Muslim revival?', b: 'He translated the Qur’an into Persian so more Muslims could read it, and called for Muslim unity around scripture.' },
      { n: 3, f: 'Who was Syed Ahmad Barelvi?', b: 'A religious reformer who led the Jihad movement in the north-west against Sikh rule. He was killed at the Battle of Balakot in 1831.' },
      { n: 4, f: 'What was the Faraizi movement?', b: 'A movement in Bengal led by Haji Shariatullah, calling Muslims back to their religious duties (faraiz) and defending Muslim peasants against landlords.' },
      { n: 5, f: 'How did the East India Company gain control of Bengal?', b: 'Robert Clive defeated Nawab Siraj-ud-Daula at the Battle of Plassey (1757), and victory at Buxar (1764) gave the Company the right to collect revenue in Bengal.' },
      { n: 6, f: 'What were the causes of the War of Independence of 1857?', b: 'The Doctrine of Lapse and other annexations, the greased cartridges, missionary activity, economic distress, and the loss of status of Indian rulers and soldiers.' },
      { n: 7, f: 'What were the consequences of 1857?', b: 'The East India Company was replaced by direct Crown rule (1858), the last Mughal emperor, Bahadur Shah Zafar, was deposed and exiled, and Muslims were blamed disproportionately and excluded from government service and education.' },
      { n: 8, f: 'What did Sir Syed Ahmad Khan (1817–98) contribute?', b: 'He founded the Muhammadan Anglo-Oriental school at Aligarh in 1875 (a college from 1877), promoted modern scientific education with Islamic values, wrote The Causes of the Indian Revolt, and advanced the Two Nation Theory.' },
      { n: 9, f: 'What is the Two Nation Theory?', b: 'The idea that Hindus and Muslims are two distinct nations, with different religions, cultures, laws and histories, and therefore need separate political arrangements.' },
      { n: 10, f: 'Why were the pre-1857 reform movements important to the Pakistan Movement?', b: 'They show that Muslim political and religious consciousness came before British policy, rather than simply being a reaction to it.' },
    ]),
    ...sub(P1, 'emergence-of-pakistan-0448', '1.2', [
      { n: 1, f: 'What was the Simla Deputation (1906)?', b: 'A group of Muslim leaders led by the Aga Khan who met the Viceroy, Lord Minto, in October 1906 to ask for separate electorates and safeguards for Muslims.' },
      { n: 2, f: 'When and where was the All-India Muslim League founded?', b: 'In Dhaka, in December 1906, following the Simla Deputation. (Exam trap: 1906, not 1905.)' },
      { n: 3, f: 'What did the Morley–Minto Reforms (1909) give Muslims?', b: 'Separate electorates, so Muslims voted for Muslim representatives.' },
      { n: 4, f: 'What was the Lucknow Pact (1916)?', b: 'An agreement between Congress and the Muslim League in which Congress accepted separate electorates. It marked a brief period of cooperation.' },
      { n: 5, f: 'What was the Khilafat Movement (1919–24)?', b: 'A campaign by Indian Muslims, led by the Ali brothers, to protect the Ottoman Caliphate after the First World War. It ended when Turkey abolished the Caliphate in 1924.' },
      { n: 6, f: 'What did the Nehru Report (1928) propose, and how did the Muslim League respond?', b: 'Congress’s proposal replaced separate electorates with joint electorates and refused Muslim seat reservations in Bengal and the Punjab. Jinnah replied with his Fourteen Points (1929), restating separate electorates and safeguards.' },
      { n: 7, f: 'Who proposed a separate Muslim state in 1930, and who coined the name “Pakistan”?', b: 'Allama Iqbal proposed a north-western Muslim state in his Allahabad Address (1930). Chaudhry Rahmat Ali coined the name “Pakistan” in 1933.' },
      { n: 8, f: 'Why were the Congress ministries of 1937–39 important?', b: 'Their rule in the provinces convinced many Muslims that they would not be treated fairly in a Congress-led India. The League marked their resignation in 1939 as a Day of Deliverance.' },
      { n: 9, f: 'What was the Lahore Resolution (23 March 1940)?', b: 'The Muslim League’s demand for independent states in the Muslim-majority areas of north-west and east India, later called the Pakistan Resolution.' },
      { n: 10, f: 'What was the 3 June Plan (1947)?', b: 'Mountbatten’s plan for the partition of British India into two dominions, India and Pakistan. The Radcliffe Award drew the boundaries, and Pakistan became independent on 14 August 1947.' },
      { n: 11, f: 'Why did Jinnah change from “ambassador of Hindu–Muslim unity” to leader of the demand for Pakistan?', b: 'Congress rule in the provinces and the failure of constitutional guarantees to protect Muslim interests convinced him that a separate state was necessary.' },
    ]),
    ...sub(P1, 'nationhood-1947-99-0448', '1.3', [
      { n: 1, f: 'What was the refugee problem Pakistan faced in 1947?', b: 'Several million people crossed the border amid terrible violence, needing food, shelter and work. A Ministry of Refugees and Rehabilitation set up camps and allocated evacuee property, but resources were far too small.' },
      { n: 2, f: 'What was the problem of the division of assets in 1947?', b: 'Pakistan was allocated 17.5% of undivided India’s financial assets but at first received only a fraction. India withheld Rs. 550 million, released after a Government of India decision in January 1948.' },
      { n: 3, f: 'How did the Kashmir dispute begin?', b: 'With the disputed accession of the princely state in 1947, which led to the first war with India (1947–48). A UN-brokered ceasefire in January 1949 left Kashmir divided.' },
      { n: 4, f: 'What was the Objectives Resolution (1949)?', b: 'A resolution passed by the Constituent Assembly in March 1949, under Liaquat Ali Khan, setting out the principles of the future constitution, including that sovereignty belongs to Allah.' },
      { n: 5, f: 'What was the Indus Waters Treaty (1960)?', b: 'An agreement with India, mediated by the World Bank: Pakistan received the western rivers (Indus, Jhelum, Chenab) and India the eastern rivers (Ravi, Beas, Sutlej).' },
      { n: 6, f: 'What were Ayub Khan’s Basic Democracies?', b: 'A system of local councils introduced in 1959. The elected members also formed the electoral college that chose the president.' },
      { n: 7, f: 'How did East Pakistan become Bangladesh in 1971?', b: 'The Awami League won a majority in the 1970 election, but power was not transferred. Military action in East Pakistan led to civil war and war with India, and East Pakistan became independent as Bangladesh in December 1971.' },
      { n: 8, f: 'What were Zulfiqar Ali Bhutto’s main policies (1971–77)?', b: 'The 1973 Constitution, the Simla Agreement with India (1972), nationalisation of major industries and banks, and land reforms.' },
      { n: 9, f: 'How did General Zia-ul-Haq come to power, and what was his main policy?', b: 'He overthrew Bhutto in a military coup in July 1977 and pursued Islamisation, including the Hudood Ordinances (1979).' },
      { n: 10, f: 'What happened in Pakistan in May 1998 and October 1999?', b: 'May 1998: Pakistan carried out nuclear tests at Chagai, after India’s tests. October 1999: General Pervez Musharraf removed Prime Minister Nawaz Sharif in a military coup.' },
    ]),

    // Paper 2 The Environment of Pakistan
    ...sub(P2, 'the-land-of-pakistan-0448', '2.1', [
      { n: 1, f: 'Which lines of latitude and longitude must you know for Pakistan?', b: 'Latitude 30°N and 36°N. Longitude 64°E, 70°E and 76°E. The Tropic of Cancer runs just south of Pakistan.', src: LAND },
      { n: 2, f: 'Which countries border Pakistan?', b: 'Iran to the west, Afghanistan to the north-west, China to the north-east and India to the east. The Arabian Sea lies to the south.' },
      { n: 3, f: 'Name the mountain ranges of northern and western Pakistan', b: 'North to north-east: the Hindu Kush, Karakoram and Himalaya. West: the Sulaiman Range and Safed Koh.', src: LAND },
      { n: 4, f: 'Name Pakistan’s main rivers and its three deserts', b: 'Rivers: the Indus and its tributaries Jhelum, Chenab, Ravi and Sutlej, plus the Kabul, Hab and Dasht. Deserts: Thar, Thal and Kharan.', src: LAND },
      { n: 5, f: 'What causes the summer monsoon in Pakistan?', b: 'In summer the land heats up strongly, creating low pressure over the subcontinent. Moist south-west winds blow in from the sea, bringing heavy rain, mainly from July to September.' },
      { n: 6, f: 'What are Pakistan’s four climate zones?', b: 'Arid, semi-arid, humid and highland.', src: LAND },
      { n: 7, f: 'How should you answer a question on the influence of climate?', b: 'Give a benefit paired with a problem. For example, monsoon rain supports farming but causes floods that disrupt industry and communications.', src: LAND },
      { n: 8, f: 'Which two cities are commonly confused on the map of Pakistan?', b: 'Gwadar, on the Balochistan coast, and Hyderabad, inland on the Indus in Sindh.', src: LAND },
    ]),
    ...sub(P2, 'natural-resources-sustainability-0448', '2.2', [
      { n: 1, f: 'Name Pakistan’s three main dams and the rivers they are on', b: 'Tarbela (Indus), Mangla (Jhelum) and Warsak (Kabul River).', src: NR },
      { n: 2, f: 'Name two barrages on the Indus', b: 'For example the Sukkur, Guddu, Kotri or Taunsa barrages.' },
      { n: 3, f: 'What are the effects of deforestation?', b: 'Soil erosion, silting of rivers, dams and barrages, and flooding.', src: NR },
      { n: 4, f: 'How does deforestation affect Pakistan’s water resources?', b: 'Without tree cover, rain erodes soil from slopes. Sediment is carried into rivers and deposited behind dams such as Tarbela and Mangla (silting), reducing their storage capacity.', src: NR },
      { n: 5, f: 'What is the difference between a plantation and afforestation?', b: 'A plantation is new forest planted for commercial use, such as Changa Manga in the Indus Plain. Afforestation on mountain slopes and plateaux is planted mainly to prevent soil erosion and manage water flow.' },
      { n: 6, f: 'Where is rock salt mined in Pakistan, and what is limestone used for?', b: 'Rock salt: Khewra, in the Salt Range. Limestone: mainly for making cement.' },
      { n: 7, f: 'Where are Pakistan’s main fishing ports?', b: 'On the Sindh and Balochistan coasts, such as Karachi in Sindh and Gwadar, Pasni and Ormara in Balochistan.', src: NR },
      { n: 8, f: 'What are the four cross-cutting themes of the natural resources section?', b: 'The problems and opportunities of being a developing country; effects on and conservation of the environment; promotion of sustainable development; the importance of feasibility studies.', src: NR },
      { n: 9, f: 'What does an “evaluate” question on mineral extraction require?', b: 'A weighed judgement: the environmental costs set explicitly against the development benefits, not two separate lists.', src: NR },
    ]),
    ...sub(P2, 'power-0448', '2.3', [
      { n: 1, f: 'What are the main sources of electricity in Pakistan?', b: 'Thermal power (burning oil, natural gas and coal), hydroelectric power from dams such as Tarbela and Mangla, and nuclear power, with a growing share from wind and solar.' },
      { n: 2, f: 'Where is natural gas produced in Pakistan, and when was the main field found?', b: 'The Sui gas field in Balochistan, discovered in 1952, was the first major field; gas is also produced in Sindh.' },
      { n: 3, f: 'Give two advantages and two disadvantages of hydroelectric power in Pakistan', b: 'Advantages: renewable, and cheap to run once built; dams also store water for irrigation. Disadvantages: very expensive to build, output falls when river flow is low, and reservoirs silt up and displace people.' },
      { n: 4, f: 'Where are Pakistan’s nuclear power stations?', b: 'At Karachi (KANUPP) and at Chashma in Punjab.' },
      { n: 5, f: 'Where are Pakistan’s main coal reserves?', b: 'The Thar coalfield in Sindh, a very large reserve of lignite (low-grade coal).' },
      { n: 6, f: 'What is the power shortfall problem in Pakistan?', b: 'Demand for electricity has often exceeded supply, causing load-shedding (planned power cuts) that disrupts homes and industry. Heavy reliance on imported oil also raises costs.' },
    ]),
    ...sub(P2, 'agricultural-development-0448', '2.4', [
      { n: 1, f: 'What is the difference between kharif and rabi crops?', b: 'Kharif crops are sown in summer and harvested in autumn (rice, cotton, sugar cane). Rabi crops are sown in winter and harvested in spring (wheat).' },
      { n: 2, f: 'What are Pakistan’s main crops?', b: 'Wheat, rice, cotton and sugar cane.' },
      { n: 3, f: 'Name three methods of irrigation used in Pakistan', b: 'Canals fed by barrages and dams, tube wells pumping groundwater, and karez (underground channels) in Balochistan.' },
      { n: 4, f: 'What are waterlogging and salinity?', b: 'Waterlogging: the water table rises close to the surface because of seepage from canals and over-irrigation. Salinity: salts are left at the surface as the water evaporates. Both reduce crop yields.' },
      { n: 5, f: 'What was the Green Revolution in Pakistan?', b: 'From the 1960s, the use of high-yielding varieties of wheat and rice with fertilisers, pesticides and more irrigation, which greatly increased output.' },
      { n: 6, f: 'What problems do small farmers in Pakistan face?', b: 'Small, fragmented landholdings, lack of credit, shortage of water and of good seed and fertiliser, and poor access to markets.' },
    ]),
    ...sub(P2, 'industrial-development-0448', '2.5', [
      { n: 1, f: 'What is Pakistan’s most important manufacturing industry?', b: 'The cotton textile industry (yarn, cloth and garments), which is also the largest source of export earnings.' },
      { n: 2, f: 'What factors affect the location of an industry?', b: 'Raw materials, power, labour, markets, transport, water supply, capital and government policy.' },
      { n: 3, f: 'What is cottage industry? Give an example from Pakistan', b: 'Small-scale production in homes or small workshops using simple tools and family labour, such as carpets, handicrafts and embroidery.' },
      { n: 4, f: 'Which Pakistani city is known for sports goods and surgical instruments?', b: 'Sialkot.' },
      { n: 5, f: 'Name three major industrial centres in Pakistan', b: 'Karachi (the largest), Lahore and Faisalabad (textiles).' },
      { n: 6, f: 'What problems hold back industrial development in Pakistan?', b: 'Power shortages, reliance on imported machinery and fuel, a shortage of skilled labour, limited capital, and political instability.' },
    ]),
    ...sub(P2, 'trade-0448', '2.6', [
      { n: 1, f: 'What are Pakistan’s main exports?', b: 'Textiles (cotton yarn, cloth and garments), rice, leather goods, sports goods and surgical instruments.' },
      { n: 2, f: 'What are Pakistan’s main imports?', b: 'Petroleum and petroleum products, machinery, chemicals and edible oil (such as palm oil).' },
      { n: 3, f: 'What is a trade deficit, and why does Pakistan usually have one?', b: 'When the value of imports is greater than the value of exports. Pakistan imports costly fuel and machinery while many of its exports are low-value goods.' },
      { n: 4, f: 'Name Pakistan’s main seaports', b: 'Karachi, Port Qasim (near Karachi) and Gwadar.' },
      { n: 5, f: 'How can Pakistan improve its balance of trade?', b: 'By exporting more value-added goods (such as garments instead of raw cotton), finding new markets, and reducing imports of fuel by developing its own energy sources.' },
    ]),
    ...sub(P2, 'transport-and-telecommunications-0448', '2.7', [
      { n: 1, f: 'What is the Karakoram Highway?', b: 'A road through the northern mountains linking Pakistan with China via the Khunjerab Pass.' },
      { n: 2, f: 'Why is it difficult to build roads and railways in northern and western Pakistan?', b: 'Steep mountains, landslides, heavy snow and sparse population make construction costly and difficult. Deserts in the west and south cause similar problems.' },
      { n: 3, f: 'What is the M-2 motorway?', b: 'Pakistan’s first motorway, linking Lahore and Islamabad, opened in 1997.' },
      { n: 4, f: 'What are the advantages of rail transport over road for bulk goods?', b: 'Trains carry heavy, bulky goods such as coal and grain over long distances more cheaply and with less fuel per tonne.' },
      { n: 5, f: 'Why is Gwadar port important?', b: 'It is a deep-sea port on the Balochistan coast, developed with Chinese help, that could link China and Central Asia to the Arabian Sea.' },
      { n: 6, f: 'How have telecommunications developed in Pakistan?', b: 'Mobile phones and internet use have spread rapidly, improving business, banking and access to services, though rural areas are less well served.' },
    ]),
    ...sub(P2, 'population-and-employment-0448', '2.8', [
      { n: 1, f: 'What is natural increase in population?', b: 'The birth rate minus the death rate, usually given per thousand people per year.' },
      { n: 2, f: 'Why is Pakistan’s population growing rapidly?', b: 'Birth rates remain fairly high while death rates have fallen because of better healthcare, vaccination and food supply.' },
      { n: 3, f: 'What is the dependency ratio?', b: 'The number of dependants (the young and the elderly) compared with the number of people of working age.' },
      { n: 4, f: 'Give two push and two pull factors for rural-to-urban migration in Pakistan', b: 'Push: lack of jobs and services in the countryside, small farms. Pull: more jobs, better schools and healthcare in cities such as Karachi and Lahore.' },
      { n: 5, f: 'What problems does rapid urban growth cause?', b: 'Overcrowding, katchi abadis (informal settlements), pressure on water, sanitation, transport and power, unemployment and pollution.' },
      { n: 6, f: 'What are the primary, secondary and tertiary sectors of employment?', b: 'Primary: extracting raw materials (farming, fishing, mining). Secondary: manufacturing. Tertiary: services such as trade, transport, education and health.' },
    ]),
  ],
};
