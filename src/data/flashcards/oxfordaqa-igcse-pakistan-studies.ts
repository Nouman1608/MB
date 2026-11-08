/**
 * D-444 -- flashcards for OxfordAQA International GCSE Pakistan Studies 9236
 * (specification Version 1.9).
 *
 * One block per subtopic, in specification order (3.1.3/3.1.4 and 3.2.3/3.2.4
 * are optional). Card ids are `<subtopic number>-<n>` and are permanent
 * (browser progress is keyed by them): add a new card with the next unused n,
 * never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9236); origin 'revision-notes'.
 *
 * Written from Marlbridge's own 9236 revision notes and study guides (the
 * Pakistan Movement, and Landscape and natural resources). No page covers
 * 3.1.2 in detail after 1947, the optional history topics 3.1.3 and 3.1.4, or
 * Paper 2 topics 3.2.2-3.2.4, so those cards keep to standard textbook dates
 * and facts with no invented figures.
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

const LAND = 'igcse-oxfordaqa-pakistan-studies-landscape-revision-notes';

const P1 = 'paper-1-history-culture-9236';
const P2 = 'paper-2-geography-9236';

export const DECK_OXFORDAQA_IGCSE_PAKISTAN_STUDIES: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'igcse',
  subjectSlug: 'pakistan-studies',
  syllabusCode: '9236',
  syllabusSeries: 'Version 1.9',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // Paper 1 The History and Culture of Pakistan
    ...sub(P1, 'pakistan-movement-9236', '3.1.1', [
      { n: 1, f: 'Which reformers before 1857 show that Muslim consciousness predated British policy?', b: 'Shah Waliullah (1703–62), who translated the Qur’an into Persian and worked to unite Muslims around scripture, and Syed Ahmad Barelvi, who led the Jihad movement in the north-west.' },
      { n: 2, f: 'What caused the War of Independence of 1857?', b: 'The Doctrine of Lapse and other British annexations, the greased-cartridges controversy, resentment at missionary activity, and wider economic distress.' },
      { n: 3, f: 'What were the consequences of 1857 for Muslims?', b: 'Direct Crown rule replaced the East India Company, the Mughal emperor was deposed, and Muslims were blamed disproportionately and excluded from government service and education.' },
      { n: 4, f: 'Why was Sir Syed Ahmad Khan important?', b: 'After 1857 he argued for reconciliation with British rule and modern education. He founded the Muhammadan Anglo-Oriental College at Aligarh (1875), which produced an educated Muslim professional class, including future Muslim League leaders.' },
      { n: 5, f: 'What is the Two Nation Theory?', b: 'Sir Syed’s idea that Hindus and Muslims were distinct nations in religion, culture, law and history. It became the intellectual foundation of the Pakistan Movement.' },
      { n: 6, f: 'Why did Sir Syed oppose Muslim membership of Congress?', b: 'He argued that Muslims would be permanently outvoted by the Hindu majority within it.' },
      { n: 7, f: 'Give the key dates of the Pakistan Movement, 1906–47', b: '1906 Muslim League founded. 1909 Morley–Minto Reforms (separate electorates). 1930 Allahabad Address. 1933 Rahmat Ali coins “Pakistan”. 1940 Lahore Resolution. 1947 independence and the Radcliffe Award.' },
      { n: 8, f: 'Exam trap: who coined the name “Pakistan”?', b: 'Chaudhry Rahmat Ali, in 1933. Allama Iqbal proposed a north-western Muslim state in his Allahabad Address (1930) but did not coin the name.' },
      { n: 9, f: 'What did the Lahore Resolution (1940) demand?', b: 'Separate, independent Muslim state (or states) in the north-western and eastern zones of British India.' },
      { n: 10, f: 'Why is it wrong to say Jinnah always wanted partition?', b: 'He began as an “ambassador of Hindu–Muslim unity”. Congress provincial rule in 1937–39 and the failure of constitutional guarantees moved him to lead the demand for a separate state.' },
    ]),
    ...sub(P1, 'pakistan-21st-century-9236', '3.1.2', [
      { n: 1, f: 'What problems did Pakistan face at independence in 1947?', b: 'Millions of refugees, the delayed division of financial and military assets, the lack of a capital and trained civil servants, almost no industry, and the disputed accession of Kashmir.' },
      { n: 2, f: 'When did Jinnah and Liaquat Ali Khan die?', b: 'Jinnah died on 11 September 1948. Liaquat Ali Khan, the first prime minister, was assassinated in Rawalpindi in October 1951.' },
      { n: 3, f: 'When did Pakistan adopt its constitutions?', b: '1956 (Pakistan became an Islamic Republic), 1962 (under Ayub Khan) and 1973 (under Zulfiqar Ali Bhutto), which is still in force.' },
      { n: 4, f: 'How did East Pakistan become Bangladesh?', b: 'After the Awami League won the 1970 election but power was not transferred, civil war and war with India followed, and Bangladesh became independent in December 1971.' },
      { n: 5, f: 'Name Pakistan’s periods of military rule', b: 'Ayub Khan (1958–69) and Yahya Khan (1969–71); Zia-ul-Haq (1977–88); Pervez Musharraf (1999–2008).' },
      { n: 6, f: 'What did the 18th Amendment (2010) do?', b: 'It restored parliamentary government by removing the president’s power to dissolve the National Assembly, and devolved many powers to the provinces.' },
      { n: 7, f: 'Why was the 2013 general election significant?', b: 'It was the first time one elected civilian government completed its term and handed power to another through an election.' },
      { n: 8, f: 'What is CPEC?', b: 'The China–Pakistan Economic Corridor, launched in 2015: Chinese-funded roads, railways, power stations and the development of Gwadar port, linking western China to the Arabian Sea.' },
      { n: 9, f: 'How did Imran Khan’s time as prime minister end?', b: 'He became prime minister in 2018 and was removed by a vote of no confidence in the National Assembly in April 2022.' },
    ]),
    ...sub(P1, 'islam-subcontinent-9236', '3.1.3', [
      { n: 1, f: 'Who brought Muslim rule to Sindh, and when?', b: 'Muhammad bin Qasim, an Umayyad general, who conquered Sindh in 711–712.' },
      { n: 2, f: 'Who was Mahmud of Ghazni?', b: 'Ruler of Ghazni who led repeated raids into northern India from about 1000 to 1027, including the sack of Somnath (1025), and made Lahore part of his empire.' },
      { n: 3, f: 'How did the Delhi Sultanate begin?', b: 'Muhammad Ghori defeated Prithviraj Chauhan at the Second Battle of Tarain (1192). After Ghori’s death his general Qutb-ud-din Aibak became the first Sultan of Delhi in 1206.' },
      { n: 4, f: 'How did Sufis help spread Islam in the subcontinent?', b: 'Through preaching, personal example, care for the poor and open shrines and lodges (khanqahs). Examples: Ali Hujwiri (Data Ganj Bakhsh) in Lahore and Khwaja Moinuddin Chishti in Ajmer.' },
      { n: 5, f: 'Who was Sheikh Ahmad Sirhindi?', b: 'A Naqshbandi scholar known as Mujaddid Alf Sani (“reviver of the second millennium”), who opposed Akbar’s religious innovations and called for a return to orthodox practice.' },
      { n: 6, f: 'How did the Delhi Sultanate end?', b: 'Babur defeated Ibrahim Lodi, the last Lodi sultan, at the First Battle of Panipat in 1526, founding the Mughal Empire.' },
      { n: 7, f: 'What happened at Balakot in 1831?', b: 'Syed Ahmad Barelvi and Shah Ismail were killed fighting Sikh forces, ending the Jihad movement’s campaign in the north-west.' },
    ]),
    ...sub(P1, 'mughal-empire-9236', '3.1.4', [
      { n: 1, f: 'How did Babur found the Mughal Empire?', b: 'He defeated Ibrahim Lodi at the First Battle of Panipat in 1526, using field artillery and cavalry tactics.' },
      { n: 2, f: 'What happened to Humayun’s rule?', b: 'He was driven out by Sher Shah Suri in 1540 and regained the throne in 1555, shortly before his death.' },
      { n: 3, f: 'How did Akbar (1556–1605) strengthen Mughal rule?', b: 'The mansabdari system of ranked officers, a reformed land revenue system, alliances with Rajput rulers, and a policy of religious tolerance (sulh-i-kul), including abolishing the jizya.' },
      { n: 4, f: 'What was Din-i-Ilahi?', b: 'A set of religious ideas promoted by Akbar from 1582, drawing on several faiths. It had few followers and was criticised by orthodox scholars.' },
      { n: 5, f: 'Which buildings are associated with Shah Jahan and Aurangzeb?', b: 'Shah Jahan: the Taj Mahal in Agra and the Shalimar Gardens in Lahore. Aurangzeb: the Badshahi Mosque in Lahore.' },
      { n: 6, f: 'Why is Aurangzeb’s reign (1658–1707) linked to Mughal decline?', b: 'Long, costly wars in the Deccan, rebellions by the Marathas and others, and policies such as reimposing the jizya (1679) that alienated many non-Muslim subjects.' },
      { n: 7, f: 'What weakened the Mughal Empire in the 18th century?', b: 'Weak successors and wars of succession, the rise of the Marathas and Sikhs, Nadir Shah’s sack of Delhi (1739), and the expansion of the East India Company after Plassey (1757).' },
      { n: 8, f: 'Who was the last Mughal emperor?', b: 'Bahadur Shah Zafar, deposed and exiled to Rangoon by the British after 1857.' },
    ]),

    // Paper 2 The Human and Physical Geography of Pakistan
    ...sub(P2, 'landscape-natural-resources-9236', '3.2.1', [
      { n: 1, f: 'What should a strong answer on a landform, hazard or resource include?', b: 'What it is, the physical process that causes it, and the human impact that follows.', src: LAND },
      { n: 2, f: 'What is the monsoon, and when does it bring rain to Pakistan?', b: 'A seasonal wind system from the south-west in summer that brings the bulk of Pakistan’s annual rainfall.', src: LAND },
      { n: 3, f: 'What is a western disturbance?', b: 'A winter weather system originating over the Mediterranean and Caspian regions that brings rain and snow to northern and western Pakistan.', src: LAND },
      { n: 4, f: 'What is the difference between a flood plain and a delta?', b: 'A flood plain is the flat land beside a river that floods when the river overflows. A delta is a landform of deposited sediment where a river meets the sea, such as the Indus delta.' },
      { n: 5, f: 'What is the difference between a renewable and a non-renewable resource?', b: 'A renewable resource is naturally replaced and will not run out, such as solar, wind or hydel power. A non-renewable resource is finite and will run out, such as coal, oil or natural gas.' },
      { n: 6, f: 'Give an advantage and a disadvantage of hydel power in Pakistan', b: 'Advantage: abundant potential from Pakistan’s rivers and low running cost. Disadvantage: high construction cost and dependence on seasonal river flow.', src: LAND },
      { n: 7, f: 'Give an advantage and a disadvantage of natural gas in Pakistan', b: 'Advantage: a reliable, high-output supply. Disadvantage: reserves are finite and Pakistan becomes dependent on imports as domestic reserves decline.', src: LAND },
      { n: 8, f: 'Why does Pakistan suffer earthquakes?', b: 'It lies where the Indian Plate pushes northwards against the Eurasian Plate. The Kashmir earthquake of October 2005 is an example.' },
      { n: 9, f: 'What does the specification require about natural resources, beyond location?', b: 'Their importance to economic development, such as export earnings, industrial inputs or employment.', src: LAND },
    ]),
    ...sub(P2, 'people-economy-9236', '3.2.2', [
      { n: 1, f: 'Why is Pakistan’s population growing rapidly?', b: 'Birth rates remain fairly high while death rates have fallen because of better healthcare, vaccination and food supply.' },
      { n: 2, f: 'What is the dependency ratio?', b: 'The number of dependants (the young and the elderly) compared with the number of people of working age.' },
      { n: 3, f: 'Give push and pull factors for rural-to-urban migration in Pakistan', b: 'Push: few jobs and services in rural areas, small farms. Pull: jobs, schools and healthcare in cities such as Karachi and Lahore.' },
      { n: 4, f: 'What are kharif and rabi crops?', b: 'Kharif: sown in summer (rice, cotton, sugar cane). Rabi: sown in winter (wheat).' },
      { n: 5, f: 'What are the primary, secondary and tertiary sectors?', b: 'Primary: raw materials (farming, fishing, mining). Secondary: manufacturing. Tertiary: services such as trade, transport, banking, education and health.' },
      { n: 6, f: 'What is Pakistan’s most important manufacturing industry?', b: 'Cotton textiles, which also earn the largest share of export income.' },
      { n: 7, f: 'What is the informal sector?', b: 'Work that is not officially registered or taxed, such as street vending and small workshops. It provides many jobs in Pakistan’s cities but with low pay and little security.' },
    ]),
    ...sub(P2, 'globalisation-transport-9236', '3.2.3', [
      { n: 1, f: 'What is globalisation?', b: 'The growing connection of the world’s economies and cultures through trade, investment, migration, transport and communication.' },
      { n: 2, f: 'What are remittances, and why do they matter to Pakistan?', b: 'Money sent home by Pakistanis working abroad, for example in the Gulf states and the UK. They are a major source of foreign exchange and support many households.' },
      { n: 3, f: 'What is the Karakoram Highway?', b: 'A road through the northern mountains linking Pakistan with China via the Khunjerab Pass.' },
      { n: 4, f: 'Why is Gwadar port important?', b: 'It is a deep-sea port on the Balochistan coast, developed under CPEC, that can link western China and Central Asia to the Arabian Sea.' },
      { n: 5, f: 'Why is it difficult to build transport links in northern and western Pakistan?', b: 'Steep mountains, landslides, snow and sparse population make roads and railways costly to build and maintain.' },
      { n: 6, f: 'How have mobile phones and the internet changed Pakistan?', b: 'They have spread rapidly, supporting mobile banking, online business and access to information, though rural areas remain less well connected.' },
    ]),
    ...sub(P2, 'sustainable-future-9236', '3.2.4', [
      { n: 1, f: 'What is sustainable development?', b: 'Development that meets the needs of people today without damaging the ability of future generations to meet their own needs.' },
      { n: 2, f: 'How does climate change threaten Pakistan?', b: 'More intense heatwaves, floods and droughts, and melting glaciers in the north, which threaten water supply and food production.' },
      { n: 3, f: 'What is a glacial lake outburst flood (GLOF)?', b: 'A sudden flood when water held back by ice or loose rock at the edge of a glacial lake breaks through. Melting glaciers in northern Pakistan increase the risk.' },
      { n: 4, f: 'What caused the 2022 floods in Pakistan?', b: 'Exceptionally heavy monsoon rain, together with glacial melt, flooded large parts of Sindh and Balochistan in particular, affecting millions of people.' },
      { n: 5, f: 'How can Pakistan reduce the effects of deforestation?', b: 'Afforestation and tree-planting schemes, such as the Billion Tree Tsunami in Khyber Pakhtunkhwa, protecting existing forests, and using alternatives to wood for fuel.' },
      { n: 6, f: 'Why does Pakistan face water scarcity?', b: 'A fast-growing population, heavy use for irrigation with much lost through seepage, limited storage in dams that are silting up, and pollution of rivers and groundwater.' },
    ]),
  ],
};
