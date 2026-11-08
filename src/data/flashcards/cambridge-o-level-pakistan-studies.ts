/**
 * D-444 -- flashcards for Cambridge O Level Pakistan Studies 2059 (2026).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 2059); origin 'revision-notes'.
 *
 * Written from Marlbridge's own 2059 revision notes and study guides (Paper 1
 * history and culture, The land of Pakistan, Natural resources). The Paper 1
 * pages describe each section's scope; dates and events are standard textbook
 * facts, worded as in the 0448 deck where the content is shared. Paper 2
 * sections 2.3 to 2.8 (power, agriculture, industry, trade, transport and
 * telecommunications, population and employment) were added on 2026-11-08,
 * written from the 2059 revision notes and study guides for those sections;
 * statistics on those cards are approximate and dated, as on the pages.
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

const LAND = 'o-level-pakistan-studies-land-revision-notes';
const NR = 'o-level-pakistan-studies-natural-resources-revision-notes';
const POW = 'o-level-pakistan-studies-power-revision-notes';
const AGR = 'o-level-pakistan-studies-agricultural-development-revision-notes';
const IND = 'o-level-pakistan-studies-industrial-development-revision-notes';
const TRD = 'o-level-pakistan-studies-trade-revision-notes';
const TRN = 'o-level-pakistan-studies-transport-and-telecommunications-revision-notes';
const POP = 'o-level-pakistan-studies-population-and-employment-revision-notes';

const P1 = 'paper-1-history-culture-2059';
const P2 = 'paper-2-environment-2059';

export const DECK_CAMBRIDGE_O_LEVEL_PAKISTAN_STUDIES: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'o-level',
  subjectSlug: 'pakistan-studies',
  syllabusCode: '2059',
  syllabusSeries: '2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // Paper 1 The History and Culture of Pakistan
    ...sub(P1, 'cultural-historical-background-2059', '1.1', [
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
    ...sub(P1, 'emergence-of-pakistan-2059', '1.2', [
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
    ...sub(P1, 'nationhood-1947-99-2059', '1.3', [
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
    ...sub(P2, 'the-land-of-pakistan-2059', '2.1', [
      { n: 1, f: 'Which lines of latitude and longitude must you know for Pakistan?', b: 'Latitude 30°N and 36°N. Longitude 64°E, 70°E and 76°E. The Tropic of Cancer runs just south of Pakistan.', src: LAND },
      { n: 2, f: 'Which countries border Pakistan?', b: 'Iran to the west, Afghanistan to the north-west, China to the north-east and India to the east. The Arabian Sea lies to the south.' },
      { n: 3, f: 'Name the mountain ranges of northern and western Pakistan', b: 'North to north-east: the Hindu Kush, Karakoram and Himalaya. West: the Sulaiman Range and Safed Koh.', src: LAND },
      { n: 4, f: 'Name Pakistan’s main rivers and its three deserts', b: 'Rivers: the Indus and its tributaries Jhelum, Chenab, Ravi and Sutlej, plus the Kabul, Hab and Dasht. Deserts: Thar, Thal and Kharan.', src: LAND },
      { n: 5, f: 'What causes the summer monsoon in Pakistan?', b: 'In summer the land heats up strongly, creating low pressure over the subcontinent. Moist south-west winds blow in from the sea, bringing heavy rain, mainly from July to September.' },
      { n: 6, f: 'What are Pakistan’s four climate zones?', b: 'Arid, semi-arid, humid and highland.', src: LAND },
      { n: 7, f: 'How should you answer a question on the influence of climate?', b: 'Pair a physical pattern with its human effect. For example, highland areas have low temperatures, ice and snow that shape mountain life, while lowland areas face both drought and flooding depending on season.', src: LAND },
      { n: 8, f: 'How has topography influenced transport in northern Pakistan?', b: 'Named range (Karakoram or Himalaya) → steep, high-altitude terrain → road and rail building is difficult and costly → routes are concentrated along valleys and passes rather than spread evenly.', src: LAND },
      { n: 9, f: 'Do you need to know how Pakistan’s landforms were formed?', b: 'No. You need to identify and locate them and explain their influence on human activity, not their geological formation.', src: LAND },
      { n: 10, f: 'Name Pakistan’s main plateaux', b: 'The Balochistan Plateau in the west, and the Potwar Plateau and Salt Range in the north.', src: LAND },
    ]),
    ...sub(P2, 'natural-resources-sustainability-2059', '2.2', [
      { n: 1, f: 'Name Pakistan’s three main dams and the rivers they are on', b: 'Tarbela (Indus), Mangla (Jhelum) and Warsak (Kabul River).', src: NR },
      { n: 2, f: 'Name two barrages on the Indus', b: 'For example the Sukkur, Guddu, Kotri or Taunsa barrages.' },
      { n: 3, f: 'What are the effects of deforestation?', b: 'Soil erosion, silting of rivers, dams and barrages, and flooding.', src: NR },
      { n: 4, f: 'How does deforestation affect Pakistan’s water resources?', b: 'Without tree cover, rain erodes soil from slopes. Sediment is carried into rivers and deposited behind dams such as Tarbela and Mangla (silting), reducing their storage capacity.', src: NR },
      { n: 5, f: 'What is the difference between a plantation and afforestation?', b: 'A plantation is new forest planted for commercial use, such as Changa Manga in the Indus Plain. Afforestation on mountain slopes and plateaux is planted mainly to prevent soil erosion and manage water flow.', src: NR },
      { n: 6, f: 'Where is rock salt mined in Pakistan, and what is limestone used for?', b: 'Rock salt: Khewra, in the Salt Range. Limestone: mainly for making cement.' },
      { n: 7, f: 'Where are Pakistan’s main fishing ports?', b: 'On the Sindh and Balochistan coasts, such as Karachi in Sindh and Gwadar, Pasni and Ormara in Balochistan.', src: NR },
      { n: 8, f: 'What structure works for “Explain a water supply problem and suggest a solution”?', b: 'Cause → effect → solution. For example: industrial pollution of rivers → less clean water for irrigation and drinking → stricter enforcement of waste-treatment rules and investment in water treatment.', src: NR },
      { n: 10, f: 'What do the Paper 2 command words state, describe, explain and suggest require?', b: 'State/name: a single fact. Describe: the pattern, without causes. Explain: reasons or consequences in a connected chain. Suggest: a plausible, justified proposal.', src: NR },
      { n: 11, f: 'What were the consequences of the Indus Waters Treaty (1960) for Pakistan’s water supply?', b: 'Pakistan kept the western rivers but lost the eastern ones to India, so it built Mangla and Tarbela dams and link canals to carry western river water to areas once fed by the eastern rivers.' },
      { n: 12, f: 'Exam trap: what must an answer on fishing improvements also include?', b: 'The problems facing the industry and its sustainability, because the syllabus pairs improvements with problems.', src: NR },
      { n: 9, f: 'What does an “evaluate” question on mineral extraction require?', b: 'A named benefit (such as export revenue or an industrial input) weighed against a named environmental cost, not benefits listed in isolation.', src: NR },
    ]),
    ...sub(P2, 'power-2059', '2.3', [
      { n: 1, f: 'How is coal extracted by open cast, adit and shaft mining?', b: 'Open cast: overburden is stripped and a near-surface seam dug from a pit (Thar). Adit: a near-horizontal tunnel driven into a hillside where a seam outcrops (Balochistan hills). Shaft: a vertical shaft to deep seams, with horizontal galleries.', src: POW },
      { n: 2, f: 'How are oil and gas found and extracted?', b: 'Seismic surveys locate folded rock (anticlines) where oil and gas are trapped under impermeable cap rock. A rig drills a well and the fuel rises under pressure or is pumped.', src: POW },
      { n: 3, f: 'Why is most Thar coal burned in power stations next to the mine?', b: 'It is low-grade lignite with high moisture and ash and a low heat value, so hauling it long distances is uneconomic. Electricity is sent out by transmission line instead. Steel and cement use imported higher-grade coal.', src: POW },
      { n: 4, f: 'How does gas reach places away from the pipeline network, and what are the limits?', b: 'As LPG in cylinders delivered by road. Limits: higher cost per unit than piped gas, shortages in winter when demand peaks, slow delivery on poor roads, and safety risks from leaks.', src: POW },
      { n: 5, f: 'Why does Pakistan import large amounts of oil?', b: 'Transport, power stations and industry all use oil, but domestic fields (Potwar Plateau, Badin area) are small and old, meeting only around a fifth or less of demand (early-to-mid 2020s, approximate).' },
      { n: 6, f: 'How does imported refined fuel reach northern Punjab?', b: 'By tanker to Karachi or Port Qasim, then through the White Oil Pipeline to Mahmood Kot near Multan, then by rail tank wagons or road tankers to depots.', src: POW },
      { n: 7, f: 'What physical and human conditions favour a multi-purpose hydel scheme?', b: 'Physical: narrow gorge, strong impermeable rock, large reliable river flow, wide valley upstream to store water. Human: capital, engineering skill, demand for power and irrigation water, few people to resettle.' },
      { n: 8, f: 'Why is electricity supply unreliable in many parts of Pakistan?', b: 'Demand has outgrown supply, imported fuel is costly, hydel output falls in winter, transmission losses and unpaid bills (circular debt) are high, and remote areas are far from the grid, causing load-shedding.' },
      { n: 9, f: 'Exam trap: is hydel output steady all year?', b: 'No. In winter snowmelt stops and rainfall is low, so river flow and hydel output drop sharply.', src: POW },
    ]),
    ...sub(P2, 'agricultural-development-2059', '2.4', [
      { n: 1, f: 'What is the difference between kharif and rabi crops?', b: 'Kharif crops (cotton, rice, sugar cane, maize, millet) are sown in spring or early summer and harvested in autumn. Rabi crops (wheat, gram, oilseeds) are sown in winter and harvested in spring.', src: AGR },
      { n: 2, f: 'Where are Pakistan’s four main crops grown?', b: 'Cotton: Vehari, Bahawalnagar, Sanghar. Rice: the Kallar tract (Sheikhupura, Narowal) for basmati, and Larkana. Sugar cane: Rahim Yar Khan, Mardan, Badin. Wheat: across the Punjab and Sindh plains, plus barani land around Chakwal.', src: AGR },
      { n: 3, f: 'What is barani farming?', b: 'Farming on rain-fed land without irrigation, such as wheat on the Potwar Plateau, where yields rise and fall with winter rainfall.', src: AGR },
      { n: 4, f: 'How does karez irrigation work, and why have many karez dried up?', b: 'A karez is an underground tunnel carrying groundwater from the foot of the hills to an oasis by gravity, losing little to evaporation. Many have dried up because nearby tubewells lowered the water table.', src: AGR },
      { n: 5, f: 'What do a barrage and a link canal do?', b: 'A barrage raises the river level so water can be diverted into canals. A link canal carries water from one river to another, for example from the western rivers to areas once fed by the eastern rivers.', src: AGR },
      { n: 6, f: 'What causes waterlogging and salinity?', b: 'Seepage from unlined canals and over-irrigation raise the water table. In hot weather water rises by capillary action and evaporates, leaving salt on the surface.', src: AGR },
      { n: 7, f: 'How can land damaged by waterlogging and salinity be restored?', b: 'Tubewells (as in the SCARP schemes) pump the water table down; drains such as the Left Bank Outfall Drain remove saline water; fields are flushed and gypsum added; salt-tolerant crops are planted.', src: AGR },
      { n: 8, f: 'What is transhumance?', b: 'The seasonal movement of herders and their sheep and goats to high mountain pastures in summer and down to valleys or plains in winter.', src: AGR },
      { n: 9, f: 'How has government tried to raise farm output, and with what limits?', b: 'Land reforms (1959, 1972, 1977), high-yielding seeds, research and extension, credit from the Zarai Taraqiati Bank, and subsidised inputs. Limits: reforms evaded, benefits mainly to large farmers, chemical overuse, falling groundwater.', src: AGR },
    ]),
    ...sub(P2, 'industrial-development-2059', '2.5', [
      { n: 1, f: 'Define raw material, processed, refined, manufactured and value-added', b: 'Raw material: natural substance used to make a product. Processed: changed in form (cotton ginned). Refined: purified (crude oil to petrol). Manufactured: made into a finished product. Value-added: increase in value at each stage.', src: IND },
      { n: 2, f: 'What are primary, secondary and tertiary industry?', b: 'Primary extracts natural resources (farming, fishing, mining, forestry). Secondary processes and manufactures goods. Tertiary provides services such as transport, banking, health and tourism.', src: IND },
      { n: 3, f: 'Why are sugar mills built close to the cane fields?', b: 'Cut cane is bulky and loses its sugar within a day or two, so it must be crushed quickly, for example in Rahim Yar Khan, Jhang, Mardan or Badin.', src: IND },
      { n: 4, f: 'Why are fertiliser plants near Daharki and Sadiqabad?', b: 'Urea is made from natural gas, which is both the raw material and the fuel, so plants are on or near the gas fields and pipelines of upper Sindh and southern Punjab.', src: IND },
      { n: 5, f: 'Why was Pakistan Steel Mills built at Pipri, near Port Qasim?', b: 'Its iron ore and coking coal are mostly imported and are bulky, so a port site avoids costly inland transport. The mill has been largely idle since about 2015.', src: IND },
      { n: 6, f: 'What is the difference between the formal and informal sectors?', b: 'The formal sector is registered and taxed, with regular paid jobs (textile mills, refineries). The informal sector is unregistered and untaxed, with casual work (roadside repairs, home stitching, street food).', src: IND },
      { n: 7, f: 'What are the characteristics of an export processing zone?', b: 'A fenced, secure site with ready-built sheds, reliable power and water, duty-free import of inputs and machinery, quick customs clearance and most output exported. Examples: Karachi, Sialkot, Risalpur.', src: IND },
      { n: 8, f: 'Which city is the centre of Pakistan’s sports goods and surgical instruments industries?', b: 'Sialkot, because of skills built up over generations, export firms, and its own dry port and airport. Most output is exported.', src: IND },
      { n: 9, f: 'What limits the growth of tourism in Pakistan?', b: 'Poor road access and landslides, seasonal demand, security perceptions, limited hotels and services, and damage to fragile mountain environments.', src: IND },
    ]),
    ...sub(P2, 'trade-2059', '2.6', [
      { n: 1, f: 'What is the difference between GDP and GNP?', b: 'GDP is the value of all goods and services produced within a country in a year. GNP is GDP plus income earned abroad by the country’s residents and firms, minus income paid to foreign owners.', src: TRD },
      { n: 2, f: 'What is the balance of trade?', b: 'The value of goods exported minus the value of goods imported. Pakistan usually has a deficit because imports cost more than exports earn.', src: TRD },
      { n: 3, f: 'What are Pakistan’s main exports and imports?', b: 'Exports: textile group (knitwear, bed linen, garments, cloth, yarn) a little over half, then rice, leather, surgical instruments, sports goods, fruit and fish. Imports: petroleum and LNG, machinery, palm oil, chemicals, iron and steel.', src: TRD },
      { n: 4, f: 'How big was Pakistan’s goods trade in 2023–24 (approximate)?', b: 'Exports about US$31 billion, imports about US$55 billion, a deficit of roughly US$24 billion. Remittances were about US$30 billion.', src: TRD },
      { n: 5, f: 'Which partners supply and buy Pakistan’s main goods?', b: 'USA: largest single export market (home textiles, garments). China: largest import source (machinery, electronics, chemicals). Gulf states: oil and LNG. Indonesia and Malaysia: palm oil. UK and EU: garments, bed linen, leather.', src: TRD },
      { n: 6, f: 'What is GSP+ and how does it help Pakistan?', b: 'A European Union scheme, used by Pakistan since 2014, that removes tariffs on most exports from qualifying developing countries, conditional on applying human-rights and labour conventions.', src: TRD },
      { n: 7, f: 'How does a fall in the rupee affect trade?', b: 'Exports become cheaper for foreign buyers, but imported fuel, machinery and inputs cost more in rupees, raising costs and inflation.', src: TRD },
      { n: 8, f: 'Exam trap: are remittances exports?', b: 'No. They are transfers sent home by people working abroad. They help the balance of payments, not the balance of trade.', src: TRD },
    ]),
    ...sub(P2, 'transport-and-telecommunications-2059', '2.7', [
      { n: 1, f: 'Describe the pattern of Pakistan’s transport networks', b: 'Dense and grid-like in northern and central Punjab; linear along both banks of the Indus in Sindh and along valleys in the north; sparse in Balochistan, the Thar desert and the high mountains, where air links matter most.', src: TRN },
      { n: 2, f: 'Which border crossings and passes link Pakistan with its neighbours?', b: 'China: Karakoram Highway over the Khunjerab Pass (closed in deep winter). Afghanistan: Torkham via the Khyber Pass, and Chaman. Iran: Taftan. India: Wagah near Lahore.', src: TRN },
      { n: 3, f: 'Which railways cross Pakistan’s borders?', b: 'Quetta–Taftan–Zahedan to Iran, and Wagah–Attari to India (services suspended since 2019). The line through the Khojak Tunnel ends at Chaman on the Afghan border.', src: TRN },
      { n: 4, f: 'Name Pakistan’s three seaports and what distinguishes each', b: 'Keamari: the original Karachi Port on the natural harbour. Port Qasim: east of Karachi, built to take bulk cargo and relieve congestion. Gwadar: deep-water port in Balochistan at the southern end of CPEC.', src: TRN },
      { n: 5, f: 'What is a dry port, and why have many been built?', b: 'An inland terminal linked to a seaport by rail or road where goods clear customs and are containerised. Built because industry is inland: saves time, cuts theft and port congestion. Examples: Lahore, Sialkot, Faisalabad, Sost.', src: TRN },
      { n: 6, f: 'Compare road, rail and air transport in Pakistan', b: 'Road: flexible, door-to-door, carries most freight, but congested and accident-prone. Rail: cheapest for bulk over long distance, but slow and ageing. Air: fastest and vital for remote northern towns, but costly with small loads.', src: TRN },
      { n: 7, f: 'Why are telecommunications important for Pakistan’s development?', b: 'Distance learning (open and virtual universities, TV lessons), email and internet for exporters, mobile banking and e-commerce, freelancing and call centres, and price and weather information for farmers.', src: TRN },
      { n: 8, f: 'What problems limit telecommunications in parts of Pakistan?', b: 'Costly masts and cables in mountains and deserts, scattered low-income users, power cuts, low literacy, damage from floods and earthquakes, and occasional shutdowns.', src: TRN },
    ]),
    ...sub(P2, 'population-and-employment-2059', '2.8', [
      { n: 1, f: 'What was Pakistan’s population in the 2023 census, and how fast was it growing?', b: 'About 241.5 million, growing at about 2.55% a year between 2017 and 2023 (Pakistan Bureau of Statistics).', src: POP },
      { n: 2, f: 'What is natural increase?', b: 'The birth rate minus the death rate, usually per 1,000 people per year.', src: POP },
      { n: 3, f: 'What does Pakistan’s population pyramid show?', b: 'A broad base from high birth rates, a large youth bulge moving into working age, and a narrow top with few people over 65. The very bottom is beginning to narrow as birth rates fall.' },
      { n: 4, f: 'Give social, educational and economic reasons for rapid population growth', b: 'Social: early marriage, son preference. Educational: low female literacy and limited family-planning awareness. Economic: children work and support parents in old age. Medical: falling child death rates.' },
      { n: 5, f: 'What is the difference between distribution and density of population?', b: 'Distribution is the pattern of where people live. Density is the number of people per square kilometre. Punjab is the most populous province; Balochistan has the lowest density, about 43 per km² (2023).', src: POP },
      { n: 6, f: 'What is a katchi abadi?', b: 'An unplanned shanty settlement in a Pakistani city, often without legal title, clean water, drainage or electricity.', src: POP },
      { n: 7, f: 'What is the difference between unemployment and underemployment?', b: 'Unemployment: having no work while seeking it. Underemployment: having some work but less, or less productive, than one could, such as a labourer hired only at harvest. Both lower GNP and GDP.', src: POP },
      { n: 8, f: 'How is Pakistan’s workforce divided between sectors?', b: 'About 37% agriculture, 25% industry and 38% services (Labour Force Survey 2020–21). The primary share is slowly falling as farming mechanises and people move to urban jobs.', src: POP },
      { n: 9, f: 'Why does the syllabus stress education for females in rural areas?', b: 'Rural women have the lowest literacy. Educated women tend to marry later and have fewer children, and their skills raise family income and national output.' },
    ]),
  ],
};
