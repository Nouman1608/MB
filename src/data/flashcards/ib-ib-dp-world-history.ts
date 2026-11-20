/**
 * Flashcards for IB Diploma Programme History (first assessment 2028).
 *
 * This deck is written for the 2028 course and replaces the one written for
 * the 2017 course (that course's prescribed subjects and twelve world history
 * topics are not in the 2028 syllabus). One block per scope, in syllabus
 * order: the concepts (topic only), the five focused studies (Paper 1), the
 * four thematic studies (Paper 2), the forty-eight regional studies in the four
 * regions (Paper 3, HL only) and the historical investigation (topic only).
 * Cards are keyed `<subtopic number>-<n>` (or `<topic number>-<n>` for a topic
 * with no subtopics) and are permanent (browser progress is keyed by them):
 * add a new card with the next unused n, never renumber.
 *
 *   The syllabus numbers subtopics from 1 in the focused study, the thematic
 *   study and in each of the four regions (so every region has a subtopic 1),
 *   so the same prefix recurs. To keep ids unique, each topic has its own range
 *   of n: focused study from 1, thematic study from 101, Africa and the Middle
 *   East from 201, the Americas from 301, Asia and Oceania from 401, Europe
 *   from 501, the concepts from 601 and the historical investigation from 701.
 *   So '1-1' is Norse exploration and the Aztec Empire, '1-101' is the
 *   definition of conflict, '1-201' is the emergence of the Crusades, '1-301'
 *   is how a study on Indigenous societies is examined and '8-701' is what the
 *   historical investigation is.
 *
 * Paper formats, mark totals, the historical concepts' definitions and the
 * inquiry questions follow the 2028 History guide. The named people, dates and
 * events on the regional studies are standard content for the people and
 * events the guide names (only those named in the guide are examined). The
 * course pages for 2028 are being written separately, so every card is
 * authored. Cards kept from the 2017 deck keep their wording and appear in
 * idMigration under the new ids. Not tiered (HL-only studies are marked by
 * their topic names). Plain text only (see types.ts).
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

const CON = 'ib-dp-history-2028-concepts';
const FS = 'ib-dp-history-2028-focused-study';
const TH = 'ib-dp-history-2028-thematic-study';
const AF = 'ib-dp-history-2028-regional-study-africa-and-the-middle-east';
const AM = 'ib-dp-history-2028-regional-study-the-americas';
const AS = 'ib-dp-history-2028-regional-study-asia-and-oceania';
const EU = 'ib-dp-history-2028-regional-study-europe';
const IA = 'ib-dp-history-2028-historical-investigation';

export const DECK_IB_IB_DP_WORLD_HISTORY: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-dp',
  subjectSlug: 'world-history',
  syllabusCode: 'DP History (2028)',
  syllabusSeries: 'First assessment 2028',
  author: 'marlbridge-academic-team',
  updated: '2026-11-20',
  // Cards from the 2017 deck that still fit a 2028 scope keep their wording and
  // follow their saved marks to the new id. An old id that is not listed
  // belonged to a card on content that is not in the 2028 course, so its mark
  // is dropped.
  idMigration: {
    id: 'world-history-2028-2026-11-20',
    before: '2026-11-20',
    map: {
      '2-22': '1-603',
      '7-14': '3-3',
      '2-13': '1-103',
      '2-14': '1-104',
      '6-13': '1-105',
      '6-14': '1-106',
      '11-12': '1-107',
      '7-12': '2-102',
      '7-13': '2-103',
      '10-12': '3-102',
      '10-13': '3-103',
      '10-14': '3-104',
      '9-12': '4-102',
      '4-31': '8-701',
      '4-32': '8-702',
      '4-33': '8-703',
      '4-35': '8-708',
      '4-36': '8-709',
      '4-37': '8-710',
      '2-12': '1-202',
      '3-12': '1-204',
      '4-3': '6-204',
      '5-2': '7-203',
      '5-3': '7-204',
      '8-13': '10-202',
      '8-14': '10-203',
      '2-3': '2-302',
      '2-4': '2-303',
      '4-14': '2-304',
      '4-2': '11-302',
      '8-12': '6-406',
      '3-2': '9-403',
      '12-12': '11-403',
      '11-14': '11-405',
      '1-12': '1-502',
      '1-13': '1-503',
      '3-13': '1-504',
      '3-14': '1-505',
      '4-12': '2-502',
      '4-13': '2-503',
      '6-12': '2-506',
      '5-12': '3-502',
      '5-13': '3-505',
      '5-14': '3-506',
      '9-13': '8-502',
      '3-3': '9-502',
      '3-4': '9-503',
      '11-13': '10-503',
      '12-13': '12-504',
      '12-14': '12-505',
    },
  },
  cards: [
    // 1 Concepts
    ...topicOnly(CON, '1', [
      { n: 601, f: 'Cause and consequence: what is the definition?', b: 'The interplay of multiple reasons for, and results of, historical events. Historians use it to build complex explanations of why things happened in the past.' },
      { n: 602, f: 'Cause and consequence: which two types of factor interact?', b: 'Historical actors (the people, as individuals or groups, who take action) and the conditions within which they operate. Events were never inevitable; causes and consequences could be probable, improbable, intentional or accidental.' },
      { n: 603, f: 'Necessary cause vs sufficient cause', b: 'Necessary: it had to be present for the outcome to happen.\nSufficient: it was enough on its own to produce the outcome.' },
      { n: 604, f: 'Continuity and change: what do historians explore?', b: 'What has changed and what has stayed the same across time and place. Societies can undergo continuity and change at the same time, and people can experience them as positive, negative or both.' },
      { n: 605, f: 'Perspectives: what is the definition?', b: 'Diverse points of view from and about the past, held by people at the time and by those looking back later. Historians judge how valid each is by examining its claims, and perspectives can corroborate or contradict each other.' },
      { n: 606, f: 'Significance: what is it, and what makes a person or event significant?', b: 'The value judgements about which people and events should be included in historical narratives. Significance can come from power, importance and impact, or from what they reveal about the past, even if they were marginalized.' },
      { n: 607, f: 'How are the four historical concepts taught and assessed?', b: 'All four must be taught, threaded through the course rather than as a separate unit. Paper 2 section A asks one short-response question on a concept (6 marks), and concepts also shape paper 2 essay questions.' },
    ]),

    // 2 Focused study (Paper 1)
    ...sub(FS, `${FS}-1`, '1', [
      { n: 1, f: 'Focused study: Climate and innovation. Which two examples must be studied?', b: 'Norse exploration (circa 982-1020) and the Aztec Empire (circa 1428-1469). Each has three inquiry questions: what prompted innovation, how climate shaped it, and what innovations took place.' },
      { n: 2, f: 'What prompted Norse exploration, and how did climate shape it?', b: 'Population pressure and lack of arable land, advances in shipbuilding, and leaders such as Erik the Red and Leif Erikson. The Medieval Warm Period and new sea routes made voyages to Greenland and Vinland possible.' },
      { n: 3, f: 'How did the Aztec Empire emerge and expand?', b: 'The Triple Alliance of Tenochtitlan, Texcoco and Tlacopan (formed about 1428) created the empire. Imperial reforms included the Flower Wars, and Moctezuma I (ruled about 1440-1469) expanded it, annexing Totonacapan.' },
      { n: 4, f: 'Name innovations in the Norse and Aztec examples', b: 'Norse: new settlements in Greenland and Vinland, including L’Anse aux Meadows, and relations with the Skrælingjar. Aztec: urban planning in Tenochtitlán, and chinampas (raised field plots) for food production, supported by water resources.' },
      { n: 5, f: 'Paper 1: what is the format?', b: 'Source-based, 1 hour 15 minutes, 24 marks. Three sources (A, B and C) are framed by one inquiry question. The same three static questions appear every year, and you answer them for your own focused study.' },
      { n: 6, f: 'Paper 1: what do the three questions ask, and for how many marks?', b: 'Question 1 (6 marks): explain how the content of sources A and B can answer the inquiry question. Question 2 (6): analyse how the context of source C shapes its use. Question 3 (12): examine how the perspectives in all the sources can be used.' },
    ]),
    ...sub(FS, `${FS}-2`, '2', [
      { n: 1, f: 'What prompted the Haitian independence movement?', b: 'French colonial rule, slave resistance including maroonage and Vodou, and the influence of the French Revolution, which spread ideas of liberty and equality to Saint-Domingue.' },
      { n: 2, f: 'How was Haitian independence achieved?', b: 'A slave uprising began in 1791 and slavery was abolished in 1793. The struggle ran to 1804 under Toussaint L’Ouverture and Jean-Jacques Dessalines, who declared independence on 1 January 1804.' },
      { n: 3, f: 'What challenges did Haiti face in forming a new identity?', b: 'A constitution (1801) and a Declaration of Independence (1804), but social inequalities from French colonial rule continued. In 1825 France demanded an independence debt, a heavy burden on the new state.' },
      { n: 4, f: 'What prompted the Kenyan independence movement?', b: 'British colonial rule, the resistance of the Kenya African Union, and the influence of the Second World War, after which many Kenyans who had served expected political change.' },
      { n: 5, f: 'How was Kenyan independence achieved?', b: 'The Mau Mau Uprising (1952-60), then the Lancaster House Conferences, self-government and multi-party politics (1960-63). Jomo Kenyatta led Kenya to independence in December 1963.' },
      { n: 6, f: 'What identity challenges followed Kenyan independence?', b: 'The independence constitution of 1963 moved towards a one-party political system. The state promoted education and cultural diversity, and carried out land reforms.' },
    ]),
    ...sub(FS, `${FS}-3`, '3', [
      { n: 1, f: 'What caused the Meiji Restoration?', b: 'The decline of the Tokugawa Shogunate, stagnation and demands for rapid modernisation, and pressure from the USA and European countries, notably Commodore Perry’s arrival in 1853.' },
      { n: 2, f: 'Who achieved the Meiji transition, and how?', b: 'The Meiji oligarchy and Emperor Mutsuhito, through land reform, industrialisation and trade. The Constitution of 1889 set up a new political order.' },
      { n: 3, f: 'How did Meiji Japan industrialise?', b: 'After 1868 the state led modernisation, building railways and factories, importing Western technology and experts, and later selling enterprises to private firms.' },
      { n: 4, f: 'What challenges did Japan face after the Meiji transition?', b: 'Peasant unrest, the Satsuma Rebellion (1877) by former samurai, and questions of foreign relations and imperialism.' },
      { n: 5, f: 'What caused the transition in the Russian Federation (1985-1999)?', b: 'The role of the Communist Party, economic stagnation and failed reform under the Soviet system, and challenges to communism in Eastern Europe, which weakened the USSR before its collapse in 1991.' },
      { n: 6, f: 'How was the Russian transition achieved, and what challenges followed?', b: 'Gorbachev and Yeltsin led the change and the Constitution of 1993 followed. Challenges: the 1991 coup attempt, the 1993 constitutional crisis, strikes, organised crime and the First Chechen War (1994-96).' },
    ]),
    ...sub(FS, `${FS}-4`, '4', [
      { n: 1, f: 'What caused mass displacement in Europe after 1945?', b: 'Combat operations and Allied victory, persecution and fear of reprisals, and economic factors. Millions of people were left outside their home countries or without homes.' },
      { n: 2, f: 'How did the world respond to displacement in post-war Europe?', b: 'Allied governments and organisations such as the International Red Cross ran displaced persons camps and repatriation. The UN set up UNRRA, then the International Refugee Organization (IRO), to manage migration and resettlement.' },
      { n: 3, f: 'Which groups experienced displacement in post-war Europe?', b: 'Refugees and stateless persons; concentration camp survivors, including Jews, Roma and prisoners of war; and former forces under German command. Their experiences differed sharply.' },
      { n: 4, f: 'What caused the Indochina refugee crisis (1975-1990)?', b: 'Combat operations and Communist victory, persecution and fear of reprisals, and economic factors drove people out of Vietnam, Cambodia and Laos.' },
      { n: 5, f: 'How did the world respond to the Indochina refugee crisis?', b: 'The USA and the Vietnamese government took part in resettlement, and the UN High Commissioner for Refugees (UNHCR) helped, including through the Orderly Departure Program of 1979.' },
      { n: 6, f: 'Which groups were displaced in the Indochina refugee crisis?', b: 'Vietnamese, including the Hoa (ethnic Chinese) and Montagnard; Cambodians fleeing the Khmer Rouge, including the Chams; and Laotians, including the Hmong and other highland peoples.' },
    ]),
    ...sub(FS, `${FS}-5`, '5', [
      { n: 1, f: 'What led to the emergence of feminism in the USA in the 1960s?', b: 'Reactions to domesticity and women’s growing role in the workforce, changing access to contraception, and early feminist literature such as Betty Friedan’s The Feminine Mystique (1963).' },
      { n: 2, f: 'How did the US feminist movement challenge authority?', b: 'Through protest and activism. The National Organization for Women (NOW, 1966) and the National Women’s Political Caucus (1971) campaigned, alongside Women’s Liberation groups, and mass media covered the movement.' },
      { n: 3, f: 'What did US feminism achieve, and where did it fall short?', b: 'Title IX (1972), Roe v. Wade (1973) and gains in equal pay and employment rights. But African American and working-class women often found the movement did not reflect their experiences.' },
      { n: 4, f: 'What led to protest and revolution in Tunisia?', b: 'Repression and censorship under the Ben Ali regime, failed economic reform and unemployment, and the influence and spread of revolutionary ideas.' },
      { n: 5, f: 'How did the Tunisian protest movement challenge authority?', b: 'The December Revolution of 2010-11 began after Mohamed Bouazizi’s self-immolation, and social media spread it. Ennahda and Nidaa Tounes became the main parties afterwards.' },
      { n: 6, f: 'What changes did the Tunisian revolution bring, and with what limits?', b: 'Ben Ali was ousted in January 2011 and a new constitution was adopted in 2014. Limits included youth radicalisation and terrorism, and continuing debate over the role and status of women.' },
    ]),

    // 3 Thematic study (Paper 2)
    ...sub(TH, `${TH}-1`, '1', [
      { n: 101, f: 'Conflict: how does the guide define it?', b: 'A situation where two or more groups use violence to resolve disputes. It sits at one end of a spectrum with peaceful cooperation at the other, and relationships can have elements of both.' },
      { n: 102, f: 'Thematic study 1: what are the four inquiry questions on conflict?', b: 'Why did conflict emerge? What determined the outcome of the conflict? How did the conflict affect people’s lives? How was peace established? Each has four lines of inquiry.' },
      { n: 103, f: 'When was the Hundred Years’ War, and between whom?', b: 'England and France, 1337-1453, over the English claim to the French throne and English lands in France. It ended with England losing all its French lands except Calais.' },
      { n: 104, f: 'How do you write a strong Paper 2 causes-of-war essay?', b: 'Distinguish long-term from short-term causes, rank them, and use examples from more than one region where the question asks for it, rather than narrating one war.' },
      { n: 105, f: 'What is meant by the "military revolution" of the Early Modern period?', b: 'Changes in warfare such as gunpowder weapons, new fortifications and larger standing armies, which raised costs and pushed states to centralise and tax more.' },
      { n: 106, f: 'Religious vs dynastic causes of Early Modern wars', b: 'Religious: conflict between Catholic and Protestant states or communities.\nDynastic: rival claims to thrones and territory between ruling families.\nMany wars combined both, so weigh them.' },
      { n: 107, f: 'Total war vs limited war', b: 'Total war: a state mobilises its whole population, economy and resources, and civilians become targets.\nLimited war: aims, weapons and areas of fighting are deliberately restricted.' },
    ]),
    ...sub(TH, `${TH}-2`, '2', [
      { n: 101, f: 'Innovation and transformation: how does the guide define innovation?', b: 'The introduction of something new in a specific context, such as an idea, method or technology. It is transformative if it brings a major change to the form or function of aspects of a society.' },
      { n: 102, f: 'Why did industrialisation begin in Britain?', b: 'Coal and iron deposits, capital from trade and empire, an agricultural revolution that freed labour, good transport by river, canal and sea, and inventions such as improved steam engines.' },
      { n: 103, f: 'Give two social effects of industrialisation', b: 'Rapid urbanisation with overcrowded, unhealthy housing, and the growth of a factory working class, which led to trade unions and labour reforms.' },
      { n: 104, f: 'How can innovations be resisted?', b: 'By established authorities, by popular resistance, through the resilience of traditional ideas, or by competing innovations. The Luddites broke textile machinery in England in 1811-16 to protest at lost work and wages.' },
      { n: 105, f: 'How do innovations affect people’s lives?', b: 'The lines of inquiry are the experiences of innovators, social elites, women and marginalized groups. In industrial Britain, for example, factories drew many women and children into wage labour.' },
      { n: 106, f: 'What must thematic study examples include?', b: 'At least two historical examples for each line of inquiry, from more than one of the four regions: Africa and the Middle East, the Americas, Asia and Oceania, and Europe. One example cannot stand for two regions in a response.' },
    ]),
    ...sub(TH, `${TH}-3`, '3', [
      { n: 101, f: 'Authoritarian rule: how does the guide define it?', b: 'The concentration of political power within a small group or an individual. It sits at one end of a spectrum with democratic processes at the other, and examples can be hybrid, with non-authoritarian elements.' },
      { n: 102, f: 'Which conditions help an authoritarian leader emerge?', b: 'Economic crisis, war or defeat, weak or discredited government, social division, and the use of ideology, persuasion and force.' },
      { n: 103, f: 'Which methods do authoritarian leaders use to keep power?', b: 'Force and terror, propaganda and a personality cult, control of education and the media, removal of opponents, and economic and social policies that win support.' },
      { n: 104, f: 'Compare and contrast: what does the command term require in a Paper 2 essay?', b: 'Similarities and differences between two or more examples, made explicit point by point throughout, with an explanation of why they exist. Describing each example separately earns little.' },
      { n: 105, f: 'How is authoritarian rule challenged?', b: 'Through internal opposition, popular resistance, the impact of its own policies, and external threats. Portugal’s dictatorship, for example, ended in 1974 when army officers seized power in the Carnation Revolution.' },
      { n: 106, f: 'How is Paper 2 structured?', b: '1 hour 45 minutes, 25 marks. Section A: choose one of two concept questions (6 marks). Section B: choose one of two questions on your thematic study and answer part (a), 4 marks, and part (b), an essay worth 15 marks.' },
    ]),
    ...sub(TH, `${TH}-4`, '4', [
      { n: 101, f: 'Popular movements: how does the guide define them?', b: 'The collective efforts of a group of people to bring about a change. Kinds include movements for political freedoms and equality, for an idea or issue, for Indigenous rights, and independence or anti-colonial movements.' },
      { n: 102, f: 'What is the franchise, and why does its expansion matter?', b: 'The right to vote. Extending it to more men, then to women, is a key measure of how democratic a state became.' },
      { n: 103, f: 'Give an example of a non-violent method used by a popular movement', b: 'Gandhi’s Salt March of 1930, a walk of about 390 km to the coast at Dandi to make salt in defiance of the British monopoly. It drew mass support for Indian independence.' },
      { n: 104, f: 'How can popular movements be challenged?', b: 'By political opposition, divisions within the movement, violent opposition, and the resilience of traditional ideas. At Sharpeville in 1960, South African police killed 69 people at a protest against the pass laws.' },
      { n: 105, f: 'What impact can popular movements have?', b: 'Political change, social change, and different experiences for women and marginalized groups. New Zealand, for example, became the first self-governing country to give women the vote, in 1893, after a long suffrage campaign.' },
      { n: 106, f: 'Can a contemporary example be used in the thematic study?', b: 'Yes. Contemporary means roughly the last two decades (from 2008 for a 2028 exam), but it must be treated historically, for instance by studying causes but not consequences that cannot yet be judged.' },
    ]),

    // 8 Historical investigation (internal assessment)
    ...topicOnly(IA, '8', [
      { n: 701, f: 'What is the historical investigation?', b: 'The internally assessed component taken by every DP History student: an independent written inquiry into a historical question the student formulates.' },
      { n: 702, f: 'Does the historical investigation have to be on a topic studied in class?', b: 'No. It may be on any historical topic the student can find and evaluate sources for.' },
      { n: 703, f: 'What makes a good inquiry question for the historical investigation?', b: 'A narrow, focused question, for example "To what extent did a named factor contribute to a specific outcome between precise dates?", that a manageable set of sources can answer within the word limit.' },
      { n: 704, f: 'What is the word limit for the historical investigation?', b: 'No more than 2,200 words, not counting references, headings or the bibliography. The word count must be stated at the start, and anything beyond the limit is not assessed.' },
      { n: 705, f: 'What are the three criteria of the historical investigation?', b: 'A: historical inquiry question (6 marks); B: sources and perspectives (6); C: synthesis and evaluation (12). The total is 24 marks, with suggested lengths of 400, 400 and 1,400 words.' },
      { n: 706, f: 'How many sources may a historical investigation use?', b: 'A maximum of seven, chosen to give diverse perspectives. More than seven is likely to be self-penalising, because they cannot all be explained, evaluated and synthesised within the word limit.' },
      { n: 707, f: 'What is the historical investigation worth?', b: '30% of the final grade at SL and 20% at HL, with about 20 hours of teaching time. It is an individual task, marked by the teacher and moderated by the IB.' },
      { n: 708, f: 'Are a source’s value and limitations fixed?', b: 'No. The same source can be very valuable for one question and limited for another, so tie the evaluation to the specific inquiry question.' },
      { n: 709, f: 'What is the most common reason a historical investigation underperforms?', b: 'An inquiry question left too broad, which produces narrative instead of a focused, evidenced argument.' },
      { n: 710, f: 'Why are fewer, varied sources often better than a long source list?', b: 'A few sources that differ in origin, type or perspective, evaluated in depth, show stronger evaluation than many treated superficially. Include at least one that challenges your argument.' },
    ]),

    // 4 Regional study (HL only): Africa and the Middle East (Paper 3)
    ...sub(AF, `${AF}-1`, '1', [
      { n: 201, f: 'Why did the Crusades emerge?', b: 'Religious factors (the pope’s call in 1095 to retake Jerusalem), political, economic and territorial factors, including the Byzantine emperor’s request for help against the Seljuk Turks.' },
      { n: 202, f: 'What did the First Crusade (1096-99) achieve?', b: 'Crusaders captured Jerusalem in 1099 and set up crusader states in the Levant.' },
      { n: 203, f: 'Which Muslim leaders opposed the Crusaders?', b: 'Imad ad-Din Zengi and Nur ad-Din, Salah ad-Din (Saladin), who retook Jerusalem in 1187, and the Mamluk sultan Baybars, who took crusader strongholds in the 1260s.' },
      { n: 204, f: 'When did the Abbasid caliphate begin and when did Baghdad fall?', b: 'The Abbasids took power in 750. Baghdad was sacked by the Mongols in 1258.' },
      { n: 205, f: 'What was the Golden Age of Islam?', b: 'A flourishing of science, medicine, philosophy and the arts under the Abbasids, linked to the House of Wisdom in Baghdad and to caliphs such as Harun al-Rashid and al-Ma’mun.' },
      { n: 206, f: 'What caused the collapse of Abbasid rule?', b: 'Political and economic weakness, military pressure from the Seljuks, Byzantines and Mongols, and religious rivals such as the Fatimids. The Mongols sacked Baghdad in 1258.' },
    ]),
    ...sub(AF, `${AF}-2`, '2', [
      { n: 201, f: 'How are examination questions on pre-colonial African states framed?', b: 'Every question requires reference to one sub-Saharan state. Suggested examples include the Ghana Empire, Swahili city-states, Mali Empire, Ashanti, Kongo, Ethiopian Empire and Zulu Kingdom.' },
      { n: 202, f: 'Who was Mansa Musa?', b: 'Ruler of the Mali Empire (about 1312-1337). His pilgrimage to Mecca in 1324 displayed Mali’s gold wealth and made the empire known across the Islamic world and Europe.' },
      { n: 203, f: 'Why did trade grow in West African states such as Ghana and Mali?', b: 'Gold from the south and salt from the Sahara were exchanged along trans-Saharan caravan routes, and rulers taxed the trade. Timbuktu became a centre of trade and learning.' },
      { n: 204, f: 'How did the Zulu Kingdom emerge and consolidate?', b: 'Shaka (ruled about 1816-1828) built a powerful army with new tactics and short stabbing spears, conquered neighbouring peoples, and created a centralised kingdom.' },
      { n: 205, f: 'Which factors could cause a pre-colonial African state to decline?', b: 'Civil wars and resistance, foreign challenges, economic factors, and the trade in enslaved peoples. The Zulu Kingdom fell to British forces after the Anglo-Zulu War of 1879 and was annexed in 1887.' },
    ]),
    ...sub(AF, `${AF}-3`, '3', [
      { n: 201, f: 'Why did the Atlantic slave trade expand?', b: 'Growth of maritime commerce, the development of plantation agriculture in the Americas, European demand, and internal rivalries and warfare among African states, which supplied captives.' },
      { n: 202, f: 'Roughly how many Africans were taken across the Atlantic?', b: 'About 12.5 million were embarked and roughly 10.7 million survived the Middle Passage, mostly between the 16th and 19th centuries.' },
      { n: 203, f: 'Why did slavery expand in East Africa from the late 18th century?', b: 'An existing trade between the Middle East and the Swahili Coast, Omani expansion, the rise of the Zanzibar Sultanate with clove plantations, and traders escaping British antislavery control.' },
      { n: 204, f: 'How did enslaved peoples resist the slave trade?', b: 'Through day-to-day resistance, rebellions, escape (including the founding of communities of escaped people) and legal and political resistance in Africa.' },
      { n: 205, f: 'Why did the slave trade decline economically?', b: 'Industrialisation and new technology, the rise of legitimate commerce such as palm oil in West Africa, reduced productivity of slave labour, and a need for labour on African plantations.' },
      { n: 206, f: 'How did Britain move to abolish the slave trade?', b: 'The Slave Trade Act of 1807 banned the trade in British ships and a further act in 1824 treated it as piracy. Ideological factors and the abolitionist movement drove the change.' },
    ]),
    ...sub(AF, `${AF}-4`, '4', [
      { n: 201, f: 'What was the “Eastern Question”?', b: 'The problem of what would happen to the declining Ottoman Empire as European powers competed for influence for economic, religious and strategic reasons. The Crimean War and Balkan unrest were part of it.' },
      { n: 202, f: 'What were the Tanzimat reforms?', b: 'Reforms between 1839 and 1876 to modernise the Ottoman state and give subjects equal legal status regardless of religion, partly to resist European pressure. Sultans such as Abdul Aziz continued them.' },
      { n: 203, f: 'What were the Balkan Wars?', b: 'Two wars in 1912-13 in which Balkan states took most of the Ottoman Empire’s European territory. With the Italo-Turkish War (1911-12), they weakened the empire before the First World War.' },
      { n: 204, f: 'Who were the Committee of Union and Progress (CUP)?', b: 'Reformers, known as the Young Turks, who restored the constitution in 1908. They took power in the 1913 coup and grew more nationalist and authoritarian, and their treatment of minorities remains debated.' },
      { n: 205, f: 'How was the Republic of Türkiye established?', b: 'After defeat in the First World War, Mustafa Kemal (Atatürk) led the Turkish War of Independence (1919-23). The Treaty of Lausanne (1923) recognised Türkiye, and the republic was proclaimed in October 1923.' },
      { n: 206, f: 'What reforms did Atatürk carry out between 1923 and 1938?', b: 'Political reform (the caliphate was abolished in 1924), secularisation, social and cultural change such as the Latin alphabet in 1928, and economic reform, despite some opposition.' },
    ]),
    ...sub(AF, `${AF}-5`, '5', [
      { n: 201, f: 'What factors encouraged European activity in Africa from about 1840?', b: 'Traders and commercial expansion, explorers and missionaries, technological innovations, and the decline of the Ottoman Empire, which opened North Africa to European influence.' },
      { n: 202, f: 'What drove “New Imperialism” in Africa?', b: 'Economic factors (raw materials and markets), strategic factors such as the Suez Canal and British actions in Egypt, national rivalries, and social factors including the “civilizing mission”.' },
      { n: 203, f: 'Why were African societies vulnerable to European imperialism?', b: 'Military and political weakness against modern weapons, disunity and internal conflicts, and collaboration, including treaties between Europeans and African rulers.' },
      { n: 204, f: 'What was the Berlin Conference of 1884-85?', b: 'A meeting of European powers, hosted by Bismarck, that set rules for claiming African territory. It sped up the “Scramble for Africa”, and no African rulers took part.' },
      { n: 205, f: 'Which European powers took part in the partition of Africa?', b: 'Belgium, France, Germany, the United Kingdom, Italy, Portugal and Spain. Their rivalries nearly led to war, as in the Fashoda Incident (1898) between Britain and France.' },
      { n: 206, f: 'Give an example of successful African resistance to European conquest', b: 'Ethiopia under Menelik II defeated Italy at the Battle of Adwa in 1896 and kept its independence, while most other African states were conquered.' },
    ]),
    ...sub(AF, `${AF}-6`, '6', [
      { n: 201, f: 'What was the Mineral Revolution in South Africa?', b: 'The discovery of diamonds (1867) and gold on the Witwatersrand (1886) transformed the economy, drew migrant workers, exploited African labour and began segregation.' },
      { n: 202, f: 'What was the South African War (1899-1902)?', b: 'A war between Britain and the Boer republics of the Transvaal and Orange Free State, with guerrilla fighting. Britain used concentration camps, in which many civilians died. It ended with the Peace of Vereeniging.' },
      { n: 203, f: 'What happened in 1948, and what was apartheid?', b: 'The National Party won the election and introduced apartheid, racial segregation under white minority rule. Petty apartheid segregated daily life; Grand Apartheid created separate homelands.' },
      { n: 204, f: 'Name key events of protest against apartheid, 1948-64', b: 'The Defiance Campaign (1952), the Freedom Charter (1955), the Sharpeville massacre (1960), the banning of the ANC and PAC (1960), the turn to armed struggle (1961) and the Rivonia trial (1964).' },
      { n: 205, f: 'Which events shaped resistance to apartheid after 1960?', b: 'Sharpeville (1960), the Soweto uprising (1976) and township violence, Steve Biko’s Black Consciousness, and the ANC’s turn to armed struggle, led at first by Nelson Mandela.' },
      { n: 206, f: 'How did apartheid end?', b: 'Sanctions, boycotts, the end of the Cold War and internal resistance led F. W. de Klerk to release Mandela (1990). CODESA negotiations led to the 1994 elections, won by the ANC.' },
    ]),
    ...sub(AF, `${AF}-7`, '7', [
      { n: 201, f: 'What was the Congo Free State?', b: 'The personal colony of King Leopold II of Belgium (1885-1908), run for profit from rubber, with forced labour and atrocities. Belgium took it over in 1908, creating the Belgian Congo.' },
      { n: 202, f: 'How did Belgian colonial rule affect identity in Rwanda?', b: 'Belgium institutionalised Hutu and Tutsi identity, issuing identity cards in the 1930s and favouring the Tutsi elite, which hardened divisions before independence in 1962.' },
      { n: 203, f: 'What triggered the Rwandan genocide in April 1994?', b: 'The shooting down of President Habyarimana’s plane on 6 April 1994. Hutu extremists then killed Tutsi and moderate Hutu over about 100 days, until the Rwandan Patriotic Front took control in July 1994.' },
      { n: 204, f: 'Why is the UN’s role in Rwanda criticised?', b: 'The UN peacekeeping mission (UNAMIR) had a weak mandate, and most of its troops were withdrawn after the killing began, despite warnings from its commander, Roméo Dallaire.' },
      { n: 205, f: 'Who was Mobutu Sese Seko?', b: 'He seized power in the Congo in 1965 after the Congo Crisis, renamed the country Zaire, ruled by eliminating opposition and promoting a cult of personality, and plundered the state. He was ousted in 1997.' },
      { n: 206, f: 'What was the Second Congo War (1998-2003)?', b: 'A war involving armed intervention by neighbouring states and many militia groups, fuelled by control of minerals. Laurent Kabila was assassinated in 2001, and millions died, mostly of disease and hunger.' },
    ]),
    ...sub(AF, `${AF}-8`, '8', [
      { n: 201, f: 'What is the difference between direct and indirect rule?', b: 'Direct rule: European officials governed directly. Indirect rule: colonial authorities governed through existing local rulers, as the British did in northern Nigeria under Frederick Lugard.' },
      { n: 202, f: 'What was assimilation in French colonial policy?', b: 'The aim of making colonised people French in language and culture. In practice only a small educated elite gained citizenship, with the Four Communes of Senegal as an early exception.' },
      { n: 203, f: 'What is a settler colony, and which prescribed country is an example?', b: 'A colony with a significant settler population who claimed land and political power. Kenya is the example, where European settlers took the fertile highlands.' },
      { n: 204, f: 'How did colonial economic policies change African economies?', b: 'They shifted land use towards cash crops, drew Africans into the economy voluntarily or by force, built railways and ports, and tied colonies into global trade.' },
      { n: 205, f: 'How did colonial rule affect different social groups?', b: 'Colonists, Indigenous elites, women and different ethnic groups experienced it differently. Many Africans were taxed and forced into wage labour, while some Indigenous elites gained posts as chiefs or clerks.' },
      { n: 206, f: 'How did Africans resist colonial rule?', b: 'Through political and legal action, cultural resistance, day-to-day resistance and armed rebellion, such as the Mau Mau uprising in Kenya (1952-60).' },
    ]),
    ...sub(AF, `${AF}-9`, '9', [
      { n: 201, f: 'What were the Balfour Declaration and Sykes-Picot?', b: 'Sykes-Picot (1916) was a secret Anglo-French plan to divide Ottoman lands. The Balfour Declaration (1917) backed a “national home for the Jewish people” in Palestine, which Britain then ruled as a mandate.' },
      { n: 202, f: 'What was the Arab Revolt in Palestine (1936-39)?', b: 'An uprising against British rule and Jewish immigration. Britain suppressed it, and its 1939 White Paper then limited Jewish immigration.' },
      { n: 203, f: 'What led to the First Arab-Israeli War in 1948?', b: 'The Second World War and Jewish immigration, the role of the UK and UN, and the creation of Israel under David Ben-Gurion on 14 May 1948, after which Arab states intervened.' },
      { n: 204, f: 'Name the main wars between Israel and its neighbours after 1948', b: 'The Suez Crisis (1956), the Six-Day War (1967), in which Israel took Sinai, Gaza, the West Bank, East Jerusalem and the Golan Heights, and the 1973 war.' },
      { n: 205, f: 'What were the intifadas?', b: 'Palestinian uprisings against Israeli occupation: the First Intifada (from 1987) and the Second Intifada (from 2000). Hamas rose to prominence during this period.' },
      { n: 206, f: 'What attempts were made at a peaceful settlement of the Arab-Israeli conflict?', b: 'The Egypt-Israel Peace Treaty (1979), the Oslo peace process (from 1993), Camp David (2000) and the Arab Peace Initiative (2002), none of which produced a lasting settlement.' },
    ]),
    ...sub(AF, `${AF}-10`, '10', [
      { n: 201, f: 'Which independence movements are prescribed in this study?', b: 'Algeria, Angola, Ghana, Guinea, Namibia and Tanganyika. Every examination question requires reference to one of them, and teaching a variety is recommended.' },
      { n: 202, f: 'When did Ghana become independent, and why is it a key example?', b: 'In 1957, under Kwame Nkrumah, as the former British colony of the Gold Coast. It was one of the first colonies in sub-Saharan Africa to win independence and encouraged movements elsewhere.' },
      { n: 203, f: 'How did the world wars affect independence movements?', b: 'They weakened colonial powers economically and militarily, damaged their prestige, and raised expectations among colonised peoples who had served or suffered in them.' },
      { n: 204, f: 'How did Algeria win independence?', b: 'The National Liberation Front (FLN) began an armed struggle against French rule in 1954. After a brutal war, the Evian Accords led to independence in 1962.' },
      { n: 205, f: 'How did Tanganyika achieve independence?', b: 'Largely through non-violence: Julius Nyerere’s Tanganyika African National Union (TANU) built popular support and negotiated with Britain. Independence came in December 1961.' },
      { n: 206, f: 'What roles did armed struggle play in Angola and Namibia?', b: 'Liberation movements fought guerrilla wars against Portuguese rule in Angola (from 1961) and South African rule in Namibia (SWAPO, from 1966). Angola became independent in 1975 and Namibia in 1990.' },
    ]),
    ...sub(AF, `${AF}-11`, '11', [
      { n: 201, f: 'What caused the Iranian Revolution of 1979?', b: 'Resentment of the Shah’s White Revolution and authoritarian rule, the 1953 coup against Mosaddeq backed by the UK and USA, and religious opposition led by Ayatollah Khomeini.' },
      { n: 202, f: 'What changed in Iran after the 1979 revolution?', b: 'An Islamic Republic led by Khomeini, new political and economic institutions based on religious authority, hostile relations with the USA after the 1979 hostage crisis, and new restrictions on women.' },
      { n: 203, f: 'What was the Iran-Iraq War (1980-88)?', b: 'A war begun by Iraq’s invasion of Iran in 1980. It caused heavy economic and social damage, drew in regional and global powers, and saw Iraq use chemical weapons.' },
      { n: 204, f: 'Who was Gamal Abdel Nasser?', b: 'Egyptian leader from 1954 (president from 1956 to 1970). He modernised Egypt, nationalised the Suez Canal in 1956, championed Pan-Arabism, ruled in an authoritarian way and faced Israel in the 1967 war.' },
      { n: 205, f: 'What caused the 2011 Egyptian revolution?', b: 'Hosni Mubarak’s long presidency (from 1981, after Anwar Sadat’s assassination), economic and demographic challenges such as youth unemployment, and external factors. Mubarak resigned in February 2011.' },
      { n: 206, f: 'What was the Lebanese Civil War (1975-90)?', b: 'A civil war that began with Lebanese factions and the PLO, later involving Syria, Israel and Iran, and foreign and UN forces. Hezbollah was established during the conflict.' },
    ]),
    ...sub(AF, `${AF}-12`, '12', [
      { n: 201, f: 'Which countries are prescribed in the study of modern developments in Africa?', b: 'Ethiopia, Niger, Somalia, Tunisia, Zambia and Zimbabwe. Every examination question requires reference to one of them.' },
      { n: 202, f: 'Why did authoritarian rule emerge in many African states after independence?', b: 'Colonial legacies, the results of independence and resistance movements, the ambition of individuals and ideology. Examples include Habib Bourguiba in Tunisia and Robert Mugabe in Zimbabwe.' },
      { n: 203, f: 'Why did many African states move to multi-party democracy around 1990?', b: 'The failures of single-party states, foreign influence, ideological change after the Cold War, and popular and elite support for reform. Zambia held multi-party elections in 1991.' },
      { n: 204, f: 'What social challenges did these African states face to 2020?', b: 'Health, including disease and famine; education and illiteracy; demographic pressures; and gender inequality and the position of marginalized groups.' },
      { n: 205, f: 'What causes coups d’état and civil wars in these states?', b: 'Ethnic tensions, economic problems including inequality, environmental factors and the failures of civilian governments. Niger, for example, has experienced several coups, including in 2010 and 2023.' },
      { n: 206, f: 'How has external involvement affected these African states?', b: 'International rivalries and destabilisation by outside forces, neocolonialism, and the roles of the African Union and the UN, such as peacekeeping in Somalia.' },
    ]),

    // 5 Regional study (HL only): The Americas (Paper 3)
    ...sub(AM, `${AM}-1`, '1', [
      { n: 301, f: 'How are examination questions on Indigenous societies framed?', b: 'Every question requires reference to one Indigenous society of the Americas. Suggested examples are the Maya, Incas, Aztecs, Iroquois, Mapuche and Guaraní.' },
      { n: 302, f: 'How did the Inca Empire maintain political and economic control?', b: 'A centralised ruler (the Sapa Inca), administrators and a road network, and the mit’a, a labour obligation owed to the state. The state stored and redistributed goods.' },
      { n: 303, f: 'What was the Aztec tribute system?', b: 'Conquered peoples sent goods, labour and captives to the Triple Alliance. Tribute funded the state and its elite, and fuelled resentment of Aztec rule.' },
      { n: 304, f: 'How were warfare and religion linked in Aztec society?', b: 'Warfare was central: taking captives for sacrifice honoured the gods and legitimised rulers, and brought status to warriors. Society was hierarchical, with nobles, commoners and enslaved people.' },
      { n: 305, f: 'What challenges faced Indigenous societies before European arrival?', b: 'Threats from other Indigenous societies, environmental factors such as drought, social factors including overpopulation, and weaknesses of political organisation. Drought contributed to the decline of Classic Maya cities.' },
    ]),
    ...sub(AM, `${AM}-2`, '2', [
      { n: 301, f: 'What was the encomienda system?', b: 'A Spanish system granting colonists the right to Indigenous labour and tribute in return for protection and Christian instruction. In practice it caused severe exploitation and population decline.' },
      { n: 302, f: 'When did the Spanish conquer the Aztec and Inca empires?', b: 'Cortés took the Aztec capital Tenochtitlan in 1521. Pizarro captured the Inca ruler Atahualpa at Cajamarca in 1532 and had him executed in 1533.' },
      { n: 303, f: 'Why were small Spanish forces able to conquer large American empires?', b: 'Indigenous allies such as the Tlaxcalans, epidemic disease (especially smallpox), steel weapons and horses, and divisions within the empires, such as the Inca civil war.' },
      { n: 304, f: 'What was the Columbian Exchange?', b: 'The transfer of plants, animals, people and diseases between the Americas and the rest of the world after Columbus’s voyage of 1492.' },
      { n: 305, f: 'How did the system of transatlantic slavery develop?', b: 'Economic demand for plantation labour in crops such as sugar and tobacco, political rivalry between colonial powers (Portugal, the UK, France, the Netherlands and Spain), and ideas that justified enslavement.' },
      { n: 306, f: 'How did enslaved people in the Americas resist?', b: 'Through day-to-day and cultural resistance, rebellions, and escape, including communities of escaped people. The Haitian Revolution (1791-1804) was the most successful rebellion.' },
      { n: 307, f: 'What early opposition to slavery emerged?', b: 'Abolitionist ideas, religious leaders and groups such as the Quakers, formerly enslaved people such as Olaudah Equiano, and printing, which spread antislavery ideas.' },
    ]),
    ...sub(AM, `${AM}-3`, '3', [
      { n: 301, f: 'Why did independence movements emerge in the Americas?', b: 'Political and economic grievances, social and religious factors, Enlightenment ideas, and the actions of the colonial power, such as new taxes on the British colonies in North America after 1763.' },
      { n: 302, f: 'What did key leaders contribute to independence movements?', b: 'Intellectual, political, military and popular contributions. Examples: Thomas Jefferson wrote the 1776 Declaration of Independence, George Washington led the army, and Simón Bolívar led campaigns in South America.' },
      { n: 303, f: 'Why did revolutionary wars end in independence?', b: 'Military organisation, strategy and tactics, foreign support and regional collaboration, and weaknesses of the colonial power. French help for the Americans was decisive at Yorktown in 1781.' },
      { n: 304, f: 'What post-independence challenges faced new American nations?', b: 'The costs of the wars, external military threats, disputes over leadership, and the treatment of marginalized groups, including Indigenous peoples, African Americans and Creoles.' },
      { n: 305, f: 'What was the Monroe Doctrine?', b: 'A statement by US President James Monroe in 1823 that European powers should not colonise or interfere in the Americas. It shaped US relations with the new Latin American states.' },
    ]),
    ...sub(AM, `${AM}-4`, '4', [
      { n: 301, f: 'How did slavery shape the US economy before the Civil War?', b: 'The cotton economy of the South depended on enslaved labour. By 1860 about four million people were enslaved, and the abolitionist debate divided the nation.' },
      { n: 302, f: 'What were the long-term causes of the US Civil War?', b: 'The Nullification Crisis, states’ rights, sectionalism, and economic, cultural and social differences between the industrial North and the cotton-and-slavery South.' },
      { n: 303, f: 'What were the short-term causes of the US Civil War?', b: 'The Compromise of 1850, the Kansas-Nebraska Act and Bleeding Kansas, the Dred Scott decision, John Brown’s raid on Harpers Ferry, and Lincoln’s election in 1860, followed by secession.' },
      { n: 304, f: 'Why did the Union win the Civil War?', b: 'Greater industrial and population strength, Lincoln’s leadership, the Emancipation Proclamation and African American soldiers, and the Confederacy’s failure to win foreign recognition.' },
      { n: 305, f: 'What were the Reconstruction Amendments?', b: 'The 13th (abolishing slavery, 1865), 14th (citizenship and equal protection, 1868) and 15th Amendments (voting rights regardless of race, 1870).' },
      { n: 306, f: 'Why did Reconstruction fail to secure lasting equality?', b: 'Southern resistance by the Ku Klux Klan and through the Black Codes, and the Compromise of 1877, which ended federal troop presence in the South.' },
    ]),
    ...sub(AM, `${AM}-5`, '5', [
      { n: 301, f: 'How did railroads and industry transform American nations?', b: 'Railroad construction, industrial growth and urbanisation, and growing international and inter-American trade. Some states fell into dependency on foreign capital, a form of neocolonialism.' },
      { n: 302, f: 'What impact did migration have on American nations?', b: 'European and Asian immigrants arrived, land allocation and use changed, and Indigenous peoples were affected. The USA and Argentina received millions of Europeans.' },
      { n: 303, f: 'What ideologies shaped the transformation of American nations?', b: 'Nationalism, liberalism and progressivism; Social Darwinism; expansionist ideas; and indigenismo and nativism.' },
      { n: 304, f: 'How did political systems change in the Americas, 1860-1929?', b: 'Constitutional reforms, party systems and a wider democracy, including women’s suffrage. In the USA the 19th Amendment gave women the vote in 1920.' },
      { n: 305, f: 'What challenges did the newly modern American nations face?', b: 'Economic challenges including inequality, the experiences of marginalized groups, labour movements, unions and strikes, and internal conflicts.' },
    ]),
    ...sub(AM, `${AM}-6`, '6', [
      { n: 301, f: 'Why did the Mexican Revolution break out?', b: 'Social, economic and political factors under the rule of Porfirio Díaz (president for most of 1876-1911). Growth benefited elites and foreign investors, peasants lost land, and opposition was repressed.' },
      { n: 302, f: 'Who were Villa and Zapata?', b: 'Pancho Villa led forces in the north. Emiliano Zapata led peasants in Morelos under the slogan “Land and Liberty”. Both fought for land reform and opposed Carranza.' },
      { n: 303, f: 'What did the 1917 Constitution do?', b: 'It included land reform and property rights, labour reform, limits on the Church’s power and education reforms, making it one of the most radical constitutions of its time.' },
      { n: 304, f: 'What was the Cristero War?', b: 'A Catholic rebellion (1926-29) against the anti-clerical laws enforced by the government of Plutarco Elías Calles, showing the Church’s resistance to revolutionary reforms.' },
      { n: 305, f: 'What did Lázaro Cárdenas do as president (1934-40)?', b: 'He renewed the revolution with extensive land distribution and the nationalisation of the oil industry in 1938.' },
      { n: 306, f: 'How did foreign powers affect the Mexican Revolution?', b: 'Motivated by economic interests, especially the USA, they intervened militarily (the US occupation of Veracruz in 1914), economically, by supplying arms, and diplomatically.' },
    ]),
    ...sub(AM, `${AM}-7`, '7', [
      { n: 301, f: 'What caused the Great Depression?', b: 'Failures of regulation, weaknesses in the banking system and trade, agricultural and environmental problems, and reactions to the Wall Street Crash of October 1929.' },
      { n: 302, f: 'What was the New Deal?', b: 'Franklin D. Roosevelt’s programme of relief, recovery and reform from 1933, which expanded federal government and executive power. Hoover, his predecessor, relied more on voluntary action.' },
      { n: 303, f: 'What opposition did the New Deal face?', b: 'Critics on the right said it gave government too much power; critics on the left, such as Huey Long, said it did too little. The Supreme Court struck down some New Deal laws.' },
      { n: 304, f: 'How did Canadian leaders respond to the Depression?', b: 'R. B. Bennett (prime minister 1930-35) first resisted state intervention, then introduced a “Bennett New Deal” in 1935. William Lyon Mackenzie King returned to power in 1935.' },
      { n: 305, f: 'What was Import Substitution Industrialization (ISI)?', b: 'A Latin American policy of protecting and developing domestic industry to replace imports, adopted after export markets collapsed in the Depression. It usually involved state intervention.' },
    ]),
    ...sub(AM, `${AM}-8`, '8', [
      { n: 301, f: 'What was the Spanish-American War (1898)?', b: 'A war in which the USA defeated Spain and gained Puerto Rico, Guam and the Philippines, and influence over Cuba, marking its emergence as an imperial power.' },
      { n: 302, f: 'What was the Roosevelt Corollary?', b: 'Theodore Roosevelt’s 1904 addition to the Monroe Doctrine: the USA could intervene in Latin American states that could not keep order. It was part of “big stick” diplomacy.' },
      { n: 303, f: 'What was the difference between dollar diplomacy and moral diplomacy?', b: 'Dollar diplomacy (Taft) used US investment to extend influence abroad. Moral diplomacy (Wilson) aimed to promote democracy and good government, though Wilson still intervened in Mexico and the Caribbean.' },
      { n: 304, f: 'Why did the USA not join the League of Nations?', b: 'The US Senate refused to ratify the Treaty of Versailles in 1919-20, despite Woodrow Wilson’s peace ideals, because many senators opposed the commitments involved.' },
      { n: 305, f: 'What was the Good Neighbor Policy?', b: 'Franklin D. Roosevelt’s policy from the 1930s of non-intervention in Latin America and better relations, shown in inter-American agreements. It replaced earlier military interventions.' },
    ]),
    ...sub(AM, `${AM}-9`, '9', [
      { n: 301, f: 'What was McCarthyism?', b: 'The wave of anti-communist accusations led by Senator Joseph McCarthy in the early 1950s, under Truman and Eisenhower. It created fear of infiltration and damaged many careers.' },
      { n: 302, f: 'What was the Bay of Pigs invasion?', b: 'A failed attempt in April 1961 by CIA-trained Cuban exiles to overthrow Fidel Castro, approved by President Kennedy. It embarrassed the USA and pushed Cuba closer to the USSR.' },
      { n: 303, f: 'What was the Cuban Missile Crisis?', b: 'A thirteen-day confrontation in October 1962 after the USA discovered Soviet nuclear missiles in Cuba. It ended when the USSR withdrew them in return for a US pledge not to invade Cuba.' },
      { n: 304, f: 'What was the Alliance for Progress?', b: 'John F. Kennedy’s 1961 programme of economic aid and reform for Latin America, meant to reduce poverty and the appeal of communism after the Cuban Revolution.' },
      { n: 305, f: 'Which US policies shaped relations with Latin America from the 1970s?', b: 'Nixon’s covert operations in Chile, Carter’s human rights policy and the Panama Canal Treaty (1977), and Reagan’s support for the Contras against Nicaragua’s Sandinista government.' },
      { n: 306, f: 'How did the Cold War affect Canada?', b: 'Domestic anti-communism, membership of NATO and NORAD, the creation of UN peacekeeping forces, and a mix of cooperation and tension with the USA.' },
    ]),
    ...sub(AM, `${AM}-10`, '10', [
      { n: 301, f: 'Why did the Cuban Revolution happen?', b: 'Fulgencio Batista’s dictatorship, Cuba’s economic dependence on the USA, and social inequality. Fidel Castro and Che Guevara led the guerrilla campaign that won power in January 1959.' },
      { n: 302, f: 'How did Fidel Castro maintain power?', b: 'Through one-party rule, social policies in health and education, nationalisation and other economic policies, appeals to Cuban nationalism, and the suppression of opposition.' },
      { n: 303, f: 'What is populism in Latin American politics?', b: 'Leaders who win mass support among workers and the poor through nationalism, welfare and charisma, often challenging elites. Juan Perón in Argentina is a classic example.' },
      { n: 304, f: 'Why did military dictatorships emerge in Latin America?', b: 'Crises of democracy, failures of elected leaders, guerrilla movements and Cold War fears of communism. Examples include Chile under Pinochet (from 1973) and Argentina (1976-83).' },
      { n: 305, f: 'How did democratisation occur in Latin America?', b: 'Political, economic and social pressures, such as economic crisis and mass opposition, ended military rule. Transitional justice addressed past abuses, and Chile held a plebiscite in 1988.' },
    ]),
    ...sub(AM, `${AM}-11`, '11', [
      { n: 301, f: 'What methods did Martin Luther King Jr. favour?', b: 'Non-violent protest, including boycotts, marches and civil disobedience. He led the Montgomery bus boycott and spoke at the 1963 March on Washington.' },
      { n: 302, f: 'Name key events of the US civil rights movement, 1954-65', b: 'Brown v Board of Education (1954), the Montgomery bus boycott (1955-56), Little Rock (1957), the March on Washington (1963), the Civil Rights Act (1964) and the Voting Rights Act (1965).' },
      { n: 303, f: 'Who were Malcolm X and the Black Panthers?', b: 'Radical activists who argued for Black Power and self-defence rather than integration and non-violence. The Black Panther Party was founded in Oakland, California, in 1966.' },
      { n: 304, f: 'Which women were important in the civil rights movement?', b: 'Ella Baker, Fannie Lou Hamer and Angela Davis, among many grassroots organisers who also shaped the movement’s methods.' },
      { n: 305, f: 'What did the Civil Rights Act of 1964 do?', b: 'It outlawed discrimination in public places and employment on grounds of race, colour, religion, sex or national origin, passed under President Johnson after years of grassroots pressure.' },
      { n: 306, f: 'Which other social movements can be studied in the Americas?', b: 'One movement other than the African American civil rights movement, such as Hispanic, feminist, Indigenous, youth, counterculture, disability, Afro-Latino or Afro-Caribbean movements.' },
    ]),
    ...sub(AM, `${AM}-12`, '12', [
      { n: 301, f: 'What were the New Frontier and the Great Society?', b: 'Kennedy’s New Frontier and Lyndon Johnson’s Great Society were domestic programmes of social policy, including civil rights, Medicare and anti-poverty measures.' },
      { n: 302, f: 'What was the Watergate scandal?', b: 'A scandal that followed the 1972 break-in at Democratic Party headquarters. President Nixon resigned in August 1974 and was pardoned by Gerald Ford.' },
      { n: 303, f: 'What was Reaganomics?', b: 'Ronald Reagan’s economic policy in the 1980s of tax cuts, deregulation and reduced domestic spending, alongside higher defence spending.' },
      { n: 304, f: 'Why did the 2008 financial crisis matter in US politics?', b: 'It triggered recession and bank bailouts, increased political division, and helped Barack Obama win the presidency in 2008.' },
      { n: 305, f: 'What was the Quiet Revolution in Quebec?', b: 'Rapid social and political change in the 1960s that secularised Quebec society and strengthened nationalism. The FLQ’s violent campaign led to the October Crisis of 1970.' },
      { n: 306, f: 'What was the Canadian Truth and Reconciliation Commission?', b: 'A commission, begun in 2008, that investigated the residential school system and its harm to Indigenous children, and published its final report with calls to action in 2015.' },
    ]),

    // 6 Regional study (HL only): Asia and Oceania (Paper 3)
    ...sub(AS, `${AS}-1`, '1', [
      { n: 401, f: 'How are examination questions on Asian kingdoms and empires framed?', b: 'Every question requires reference to one kingdom or empire. Suggested examples are the Shogunate, Mongol Empire, Angkor Empire, Tran Dynasty of Vietnam and Srivijaya/Sailendra.' },
      { n: 402, f: 'How did the Mongol Empire emerge?', b: 'Genghis Khan united the Mongol tribes in 1206 and led wars of conquest with disciplined cavalry. His successors expanded the empire across Asia and into Europe.' },
      { n: 403, f: 'What was the Angkor Empire?', b: 'A Khmer empire in what is now Cambodia from the early 9th century, with its capital at Angkor. Angkor Wat was built under Suryavarman II in the early 12th century, and water management supported rice farming.' },
      { n: 404, f: 'What was the Shogunate in Japan?', b: 'Military rule by a shogun in the name of the emperor. The first, the Kamakura shogunate, began in the late 12th century under Minamoto no Yoritomo, with samurai as the ruling warrior class.' },
      { n: 405, f: 'How did foreign relations help Asian empires develop?', b: 'Through alliances and diplomacy, trade along land and sea routes, and the exchange of cultural, artistic and scientific ideas, though conflict also shaped development.' },
      { n: 406, f: 'Why did Asian kingdoms and empires decline?', b: 'Political factors such as factionalism, social and economic problems, conflict and rebellions, and environmental factors. The Yuan dynasty, for example, fell to the Ming in 1368.' },
    ]),
    ...sub(AS, `${AS}-2`, '2', [
      { n: 401, f: 'How did the Mughal Empire begin?', b: 'Babur won the First Battle of Panipat (1526). Humayun lost power to the Suri Dynasty (1540-55), and the Mughals regained it with victory at the Second Battle of Panipat in 1556.' },
      { n: 402, f: 'How did Akbar consolidate Mughal rule?', b: 'Through military conquests, policies of conciliation towards Hindu rulers, the mansabdari system of ranked officials, and religious tolerance.' },
      { n: 403, f: 'What was the Deccan “Ulcer”?', b: 'Aurangzeb’s long, costly wars in the Deccan (1680-1707) against the Marathas and southern sultanates, which drained resources and weakened the empire.' },
      { n: 404, f: 'What was the impact of the Mughal Empire?', b: 'Economic growth and trade, and cultural achievements in arts, law and architecture, such as the Taj Mahal built under Shah Jahan, with syncretism, the Bhakti movement and Sufism.' },
      { n: 405, f: 'How did the East India Company gain power in India?', b: 'Through trade, alliances with Indian rulers, military force and Mughal weakness, notably after victories at Plassey (1757) and Buxar (1764).' },
      { n: 406, f: 'What was the Indian Rebellion of 1857?', b: 'A widespread uprising against East India Company rule that began among sepoys. After it was crushed, the Company was abolished and the British Crown took direct rule in 1858.' },
    ]),
    ...sub(AS, `${AS}-3`, '3', [
      { n: 401, f: 'What was the Canton trade system?', b: 'A system from 1757 that limited European trade to Canton under Chinese regulation. British missions under Macartney, Amherst and Napier tried and failed to open China further.' },
      { n: 402, f: 'What caused the First Opium War?', b: 'British opium exports caused addiction and a silver outflow from China. Commissioner Lin Zexu destroyed opium stocks in 1839, and Britain won the war (1839-42).' },
      { n: 403, f: 'What were the Unequal Treaties?', b: 'The treaties of Nanjing (1842) and Tianjin (1858) and the Convention of Beijing (1860) forced China to open ports, pay indemnities and cede territory, including Hong Kong Island.' },
      { n: 404, f: 'What was the Taiping Rebellion?', b: 'A civil war (1850-64) led by Hong Xiuquan, who set up the Taiping Heavenly Kingdom. Millions died, and the Qing relied on regional armies such as Zeng Guofan’s.' },
      { n: 405, f: 'Why did Qing reform efforts fail?', b: 'The Self-Strengthening Movement was limited, China lost the First Sino-Japanese War (Treaty of Shimonoseki, 1895), and Empress Dowager Cixi ended the Hundred Days’ Reform in 1898.' },
      { n: 406, f: 'How did the Qing dynasty fall?', b: 'After the Boxer Rebellion (1900) and limited late Qing reforms, the Xinhai Revolution of 1911 ended the dynasty. Sun Yixian’s revolutionaries and Yuan Shikai were key figures.' },
    ]),
    ...sub(AS, `${AS}-4`, '4', [
      { n: 401, f: 'What was the Treaty of Waitangi?', b: 'Signed in 1840 between the British Crown and many Māori chiefs. The English and Māori texts differed, causing long disputes over sovereignty and land.' },
      { n: 402, f: 'What was the impact of the gold rushes of 1850-70 in Australia and New Zealand?', b: 'Large-scale immigration, rapid economic growth, the growth of cities and the emergence of a labour movement. They also increased pressure on Indigenous peoples’ land.' },
      { n: 403, f: 'What happened to Aboriginal, Torres Strait Islander and Māori peoples in the colonial period?', b: 'Settlement caused loss of land, population decline and conflict, including the Australian Frontier Wars (1840-1934) and the New Zealand wars (1845-72). Settlers and Indigenous peoples held different world views about land.' },
      { n: 404, f: 'How did Australia and New Zealand become nations?', b: 'Constitutional developments and the Federation movement led to Australian dominion status in 1901; New Zealand followed in 1907. National identity grew through the arts and sport.' },
      { n: 405, f: 'Why was Gallipoli significant for Australia and New Zealand?', b: 'ANZAC troops landed on 25 April 1915. The campaign failed, but it became central to national identity and is commemorated each year on Anzac Day.' },
      { n: 406, f: 'What were ANZUS and SEATO?', b: 'ANZUS (1951) was a security treaty between Australia, New Zealand and the USA; SEATO (1954) was an anti-communist alliance. They show a shift from reliance on Britain towards the USA.' },
    ]),
    ...sub(AS, `${AS}-5`, '5', [
      { n: 401, f: 'Who was the Heungseon Daewongun?', b: 'Regent for King Gojong (1864-73) who strengthened royal authority and pursued an isolation policy, including persecution of Christians. His rule ended when Gojong took power himself.' },
      { n: 402, f: 'What was the Treaty of Ganghwa (1876)?', b: 'An unequal treaty between Japan and Korea that opened Korean ports to Japanese trade, ended Korea’s isolation and increased Japan’s influence.' },
      { n: 403, f: 'What was the Donghak Peasant Revolution (1894)?', b: 'A peasant uprising against corruption and foreign influence. It led to Chinese and Japanese intervention and the First Sino-Japanese War.' },
      { n: 404, f: 'What were the Gwangmu Reforms?', b: 'Reforms of 1897-1904 under the Korean Empire, proclaimed by Gojong in 1897, which modernised the state, including industry, the army and communications.' },
      { n: 405, f: 'When did Japan annex Korea, and how did Koreans resist?', b: 'Japan annexed Korea in 1910. Resistance included the Samil (March First) Independence Movement of 1919, which was suppressed. Japan also pursued assimilation in education, language and religion.' },
      { n: 406, f: 'How did the Second Sino-Japanese War affect Korea?', b: 'Forced labour, conscription and “comfort women”, and the exploitation of industry for Japan’s war effort, alongside the growth of nationalism and communism. Korea was liberated in 1945.' },
    ]),
    ...sub(AS, `${AS}-6`, '6', [
      { n: 401, f: 'What events fuelled Indian nationalism?', b: 'The 1857 uprising, British policies after 1858, violence including the Jallianwala Bagh massacre (1919), and the impact of the First World War.' },
      { n: 402, f: 'When were the Indian National Congress and the Muslim League founded?', b: 'Congress in 1885 and the All-India Muslim League in 1906, the latter during the controversy over the partition of Bengal (1905-11).' },
      { n: 403, f: 'What methods did the Indian independence movement use?', b: 'Non-cooperation and civil disobedience, the Salt March (1930), the Quit India Movement (1942) and political negotiations.' },
      { n: 404, f: 'Who were the key leaders of the Indian independence movement?', b: 'Mahatma Gandhi, Jawaharlal Nehru, Muhammad Ali Jinnah and Subhas Chandra Bose, who differed in their methods and aims.' },
      { n: 405, f: 'What led to the Partition of India?', b: 'The rise of Muslim separatism and the “Two-Nation” theory, the Lahore Resolution (1940), the Cabinet Mission Plan and Louis Mountbatten’s role. Partition brought mass migration and violence.' },
      { n: 406, f: 'When did India and Pakistan become independent?', b: 'In August 1947, when British rule ended and the subcontinent was partitioned.' },
      { n: 407, f: 'What challenges did independent India face?', b: 'Nehru’s nation-building, ethnic and religious conflict, the integration of princely states such as Junagadh, Hyderabad and Kashmir, and cross-border conflict.' },
    ]),
    ...sub(AS, `${AS}-7`, '7', [
      { n: 401, f: 'How are examination questions on Southeast Asian independence framed?', b: 'Every question requires reference to one state from Southeast Asia, such as Vietnam or Indonesia, so learn at least one state in depth.' },
      { n: 402, f: 'What was “divide and rule” in colonial Southeast Asia?', b: 'A colonial tactic of favouring some ethnic or religious groups over others to prevent united opposition, which also left lasting divisions after independence.' },
      { n: 403, f: 'How did communism and liberalism influence Southeast Asian nationalism?', b: 'Liberal ideas of democracy and self-determination, and communism or socialism, inspired leaders such as Hồ Chí Minh in Vietnam, who helped found the Communist Party in 1930.' },
      { n: 404, f: 'How did Japanese occupation affect Southeast Asia?', b: 'Japan’s rapid victories in 1941-42 shattered European prestige. Its rule brought violence, propaganda and hardship, but also encouraged independence leaders such as Sukarno and Aung San.' },
      { n: 405, f: 'How was independence achieved in Southeast Asia after 1945?', b: 'By mass mobilisation, armed resistance and external support against weakened colonial authorities. Indonesia declared independence in 1945 and won recognition in 1949; Vietnam fought France (1946-54).' },
      { n: 406, f: 'What challenges did new Southeast Asian states face in their first ten years?', b: 'Social progress in education, healthcare and gender equality, economic development, political instability, and ethnic and religious tensions.' },
    ]),
    ...sub(AS, `${AS}-8`, '8', [
      { n: 401, f: 'What were Japan’s Twenty-One Demands?', b: 'Demands made on China in 1915 that would have given Japan wide economic and political control. China accepted a reduced list, which fuelled nationalist anger.' },
      { n: 402, f: 'What was the May Fourth Movement (1919)?', b: 'A student-led protest in Beijing against the Treaty of Versailles, which transferred German rights in Shandong to Japan. It fuelled nationalism, and the Chinese Communist Party was founded in 1921.' },
      { n: 403, f: 'What was the First United Front?', b: 'The alliance between the Guomindang and the Chinese Communist Party (from 1923), arising from the Sun-Joffe Manifesto. It ended when Jiang Jieshi turned on the Communists in the Shanghai massacre of 1927.' },
      { n: 404, f: 'What was the Long March?', b: 'The Communist retreat of 1934-35 from the Jiangxi Soviet to the north-west, escaping Guomindang encirclement campaigns. Mao Zedong emerged as leader at the Zunyi Conference and later based the Party at Yan’an.' },
      { n: 405, f: 'How did the Second Sino-Japanese War affect China?', b: 'The Second United Front followed the Xi’an Incident of 1936. Japanese brutality (the Three Alls Policy), guerrilla warfare and hyperinflation weakened the Guomindang and helped the Communists.' },
      { n: 406, f: 'Why did the Communists win the Chinese Civil War (1946-49)?', b: 'Peasant support, military strategies combining guerrilla and conventional warfare, Mao’s leadership, and Guomindang corruption and inflation. The People’s Republic was proclaimed on 1 October 1949.' },
    ]),
    ...sub(AS, `${AS}-9`, '9', [
      { n: 401, f: 'What was the Washington Naval Conference (1921-22)?', b: 'A conference that limited the size of the main navies, with a ratio of 5:5:3 for Britain, the USA and Japan. Many Japanese nationalists resented the limit.' },
      { n: 402, f: 'What was Taishō democracy?', b: 'The liberal reforms and rising party politics of the 1910s and 1920s, including universal male suffrage in 1925, which the Great Depression and growing militarism undermined.' },
      { n: 403, f: 'What were the key steps of Japanese expansion, 1931-41?', b: 'The Mukden Incident and invasion of Manchuria (1931), leaving the League (1933), war with China after the Marco Polo Bridge Incident (1937), the Tripartite Pact (1940) and the attack on Pearl Harbor (December 1941).' },
      { n: 404, f: 'What was the Greater East Asia Co-Prosperity Sphere?', b: 'Japan’s plan, announced in 1940, for an Asian bloc led by Japan and free of Western influence. In practice it meant Japanese domination and exploitation.' },
      { n: 405, f: 'Why was Japan defeated in the Second World War?', b: 'After the US embargo of 1940, Japan attacked Pearl Harbor in 1941. US industrial strength, naval defeats such as Midway (1942) and strain on the home front led to defeat in 1945.' },
      { n: 406, f: 'How did Japan recover after 1945?', b: 'The US occupation brought reconstruction and a new constitution. After the Reverse Course (1947-52), economic recovery came first, and MITI guided the “economic miracle”.' },
      { n: 407, f: 'What challenges did Japan face from 1989 to 2020?', b: 'The “Lost Decade” of economic stagnation, political instability, regional foreign relations, and a demanding work culture, falling birth rate and ageing population.' },
    ]),
    ...sub(AS, `${AS}-10`, '10', [
      { n: 401, f: 'Which Central Asian republics suit this study?', b: 'Every question requires reference to one republic. Suggested examples are Kyrgyzstan, Uzbekistan, Turkmenistan, Kazakhstan and Tajikistan.' },
      { n: 402, f: 'What impact did the Russian Revolution and Civil War have on Central Asia?', b: 'Economic and social disruption, resistance from local elites and the intelligentsia, a Bolshevik political and military response, and the creation of Soviet republics.' },
      { n: 403, f: 'What was the impact of Soviet policy in Central Asia in the 1920s and 1930s?', b: 'Political control and repression, Russification, collectivisation, which caused famine in Kazakhstan, and deep changes to society, culture and identity.' },
      { n: 404, f: 'How did the Second World War affect Central Asia?', b: 'Central Asians served in the Red Army, factories were evacuated to the region, and deported peoples were resettled there. It had military, political, economic and social impacts.' },
      { n: 405, f: 'What environmental damage did Soviet policies cause in Central Asia?', b: 'Irrigation for cotton shrank the Aral Sea, and nuclear tests took place at Semipalatinsk in Kazakhstan. Khrushchev’s Virgin Lands campaign also reshaped Kazakhstan.' },
      { n: 406, f: 'How did the Central Asian republics become independent?', b: 'Gorbachev’s glasnost and perestroika, protest, and the collapse of the USSR led to declarations of independence in 1991. Nation-building since then has faced economic, political and foreign-policy challenges.' },
    ]),
    ...sub(AS, `${AS}-11`, '11', [
      { n: 401, f: 'What caused the Korean War (1950-53)?', b: 'The division of Korea at the 38th parallel after 1945, disagreement over free elections, the rival leaders Kim Il Sung and Syngman Rhee, and the invasion of South Korea in June 1950, which drew a UN response.' },
      { n: 402, f: 'How did the Korean War end?', b: 'An armistice was signed on 27 July 1953, creating the demilitarised zone (DMZ). No peace treaty followed, and the war left millions of casualties and destroyed much of Korea.' },
      { n: 403, f: 'What is a proxy war?', b: 'A conflict in which the superpowers support opposing sides rather than fighting each other directly, such as the Korean War (1950-53) or the Soviet-Afghan War (1979-89).' },
      { n: 404, f: 'Why was Vietnam divided, and why did the USA intervene?', b: 'Hồ Chí Minh’s victory over France at Điện Biên Phủ (1954) led to the Geneva Accords and division. The USA backed Ngô Đình Diệm’s South to contain communism, withdrew in 1973, and Vietnam was reunified in 1975-76.' },
      { n: 405, f: 'What is guerrilla warfare?', b: 'Fighting by small, mobile forces using ambush, sabotage and support from the local population against a stronger conventional army, as in the Chinese Civil War and the Vietnam War.' },
      { n: 406, f: 'What caused the Soviet-Afghan War (1979-89)?', b: 'The Saur Revolution (1978) brought a pro-Soviet communist government to power. Ethnic and religious tensions and a mujahideen insurgency led the USSR to invade in December 1979.' },
    ]),
    ...sub(AS, `${AS}-12`, '12', [
      { n: 401, f: 'What was the Hundred Flowers Campaign (1956)?', b: 'Mao invited open criticism of the Party, then turned on critics in the Anti-Rightist Campaign of 1957.' },
      { n: 402, f: 'What was the Great Leap Forward?', b: 'Mao’s campaign (1958-62) to industrialise rapidly through communes. It caused a catastrophic famine in which tens of millions died.' },
      { n: 403, f: 'What was the Cultural Revolution?', b: 'Launched by Mao in 1966 to remove perceived enemies and revive revolutionary spirit, using the Red Guards. It caused chaos and persecution, and a cult of personality, until Mao’s death in 1976.' },
      { n: 404, f: 'What were the Four Modernizations?', b: 'Deng Xiaoping’s reform programme from 1978 for agriculture, industry, defence, and science and technology, together with the Opening Up policy, which made China a major economic power.' },
      { n: 405, f: 'What happened at Tiananmen Square in 1989?', b: 'Student-led pro-democracy protests were crushed by the army on 3-4 June 1989, with many deaths. The leadership under Deng kept authoritarian control.' },
      { n: 406, f: 'What was the one-child policy?', b: 'A population control policy begun around 1979-80 that limited most families to one child. It was relaxed from 2015-16.' },
    ]),

    // 7 Regional study (HL only): Europe (Paper 3)
    ...sub(EU, `${EU}-1`, '1', [
      { n: 501, f: 'How are examination questions on medieval kingdoms framed?', b: 'Every question requires reference to one medieval kingdom or empire, such as the Carolingian Empire, Holy Roman Empire, North Sea Empire, Norman and Angevin England, Capetian France or Poland.' },
      { n: 502, f: 'What were feudalism and manorialism in medieval Europe?', b: 'Feudalism: land granted by a lord in return for military service and loyalty.\nManorialism: the economic system of the manor, where peasants and serfs farmed the lord’s land in return for protection and a share of the produce.' },
      { n: 503, f: 'When did the Black Death strike Europe, and with what effect?', b: '1347-51. It killed roughly a third or more of Europe’s population, causing labour shortages that raised wages and weakened serfdom in many areas.' },
      { n: 504, f: 'When was Charlemagne crowned emperor, and by whom?', b: 'On Christmas Day 800, by Pope Leo III in Rome.' },
      { n: 505, f: 'Which themes help compare medieval rulers?', b: 'Legitimacy (religion, descent, conquest), methods of government and administration, relations with nobles and religious authorities, and reasons for decline.' },
      { n: 506, f: 'What role did the papacy play in medieval kingdoms?', b: 'It legitimised rulers (the pope crowned Charlemagne in 800), developed religious institutions and shaped society, but often clashed with kings, as in the Investiture Controversy.' },
    ]),
    ...sub(EU, `${EU}-2`, '2', [
      { n: 501, f: 'Why did the Renaissance begin in Italy?', b: 'Wealthy trading city-states, patrons such as the Medici of Florence and the papacy, and a revival of classical learning created conditions for art and scholarship from the 14th century.' },
      { n: 502, f: 'Why was Gutenberg’s printing press (c.1450) significant?', b: 'It made books cheaper and faster to produce, spreading new ideas quickly and helping the Renaissance and the Reformation reach a wide audience.' },
      { n: 503, f: 'When did Luther begin the Protestant Reformation?', b: 'In 1517, when he issued his Ninety-Five Theses criticising the sale of indulgences.' },
      { n: 504, f: 'Who was Erasmus?', b: 'A Dutch humanist scholar (about 1466-1536) who criticised Church abuses but stayed within the Catholic Church. His Greek New Testament of 1516 influenced reformers.' },
      { n: 505, f: 'What was the Counter-Reformation?', b: 'The Catholic Church’s response to Protestantism, including the Council of Trent (1545-63) and the work of the Jesuits, founded by Ignatius of Loyola in 1540.' },
      { n: 506, f: 'When was the Thirty Years’ War, and how did it end?', b: '1618-48, beginning in the Holy Roman Empire as a religious conflict. It ended with the Peace of Westphalia (1648).' },
    ]),
    ...sub(EU, `${EU}-3`, '3', [
      { n: 501, f: 'What were the main ideas of the Enlightenment?', b: 'Reason, individual rights, equality and criticism of absolute monarchy and religious intolerance, developed by thinkers such as Locke, Voltaire, Montesquieu and Rousseau.' },
      { n: 502, f: 'What is absolutism?', b: 'A system in which the monarch claims supreme, unchecked authority, often justified by divine right. Louis XIV of France (reigned 1643-1715) is the classic example.' },
      { n: 503, f: 'What was an enlightened despot?', b: 'A monarch who ruled absolutely but claimed to follow Enlightenment ideas through reform, such as Catherine the Great of Russia, Frederick the Great of Prussia or Joseph II.' },
      { n: 504, f: 'How did Frederick the Great modernise Prussia?', b: 'He reformed the law, tolerated different religions and improved agriculture, while keeping absolute control of the army and state (ruled 1740-86).' },
      { n: 505, f: 'What did the Glorious Revolution of 1688 change in England?', b: 'James II was replaced by William and Mary, and the Bill of Rights (1689) limited royal power and strengthened Parliament.' },
      { n: 506, f: 'What limits existed on Early Modern rulers?', b: 'Representative bodies, the nobility, religious authorities, the cost of war and weak communications, which meant even "absolute" rulers depended on co-operation.' },
    ]),
    ...sub(EU, `${EU}-4`, '4', [
      { n: 501, f: 'What caused the French Revolution?', b: 'Intellectual, economic and social factors, including the monarchy’s financial crisis and the weakness of Louis XVI, which led to the meeting of the Estates General in 1789.' },
      { n: 502, f: 'What did the Declaration of the Rights of Man and of the Citizen proclaim?', b: 'Adopted in August 1789 by the National Assembly, it proclaimed liberty, equality before the law and the sovereignty of the nation.' },
      { n: 503, f: 'What was the Terror (1793-94)?', b: 'A period of repression under Robespierre and the Committee of Public Safety, when thousands were guillotined as enemies of the revolution. It ended with Robespierre’s fall in July 1794.' },
      { n: 504, f: 'How did Napoleon rise to power?', b: 'Success in the French Revolutionary Wars made him popular. He took power in the coup of 18 Brumaire (November 1799) and was crowned Emperor in 1804.' },
      { n: 505, f: 'Why was the First French Empire defeated?', b: 'Coalitions of European powers, the failure of the Continental System, the disastrous invasion of Russia in 1812, and defeat at Waterloo in 1815 after the Hundred Days.' },
    ]),
    ...sub(EU, `${EU}-5`, '5', [
      { n: 501, f: 'What was the Congress of Vienna?', b: 'The 1814-15 meeting of European powers after Napoleon, dominated by Metternich of Austria, which restored conservative monarchies and left Germany and Italy divided.' },
      { n: 502, f: 'What was the impact of the 1848 revolutions in Germany and Italy?', b: 'They raised nationalist and liberal hopes among the middle classes and intellectuals, but failed, and autocratic rule was re-established.' },
      { n: 503, f: 'What was the Zollverein?', b: 'A customs union led by Prussia from 1834 that removed trade barriers between German states and increased Prussian economic leadership.' },
      { n: 504, f: 'What roles did Cavour and Garibaldi play in Italian unification?', b: 'Cavour, Piedmont’s prime minister, used diplomacy and an alliance with France. Garibaldi led the Thousand to conquer Sicily and Naples in 1860. The Kingdom of Italy was proclaimed in 1861.' },
      { n: 505, f: 'How did Bismarck unify Germany?', b: 'As Prussia’s minister-president from 1862 he used military reorganisation and wars against Denmark (1864), Austria (1866) and France (1870-71). The German Empire was proclaimed in January 1871.' },
    ]),
    ...sub(EU, `${EU}-6`, '6', [
      { n: 501, f: 'What was the European alliance system before 1914?', b: 'The Triple Alliance (Germany, Austria-Hungary, Italy) and the Triple Entente (Britain, France, Russia). The arms race and Balkan crises hardened the two blocs.' },
      { n: 502, f: 'What was Weltpolitik?', b: 'Germany’s policy under Wilhelm II from the late 1890s of seeking world power through naval expansion and colonies, which alarmed Britain, France and Russia.' },
      { n: 503, f: 'What was the July Crisis of 1914?', b: 'The diplomatic crisis after the assassination of Archduke Franz Ferdinand at Sarajevo on 28 June 1914. Austria-Hungary’s ultimatum to Serbia and the alliance system led to war.' },
      { n: 504, f: 'Why were the Central Powers defeated in 1918?', b: 'Allied economic strength and blockade, the entry of the USA in 1917, military strategy and technology, and the strain on the home fronts.' },
      { n: 505, f: 'Who were the Big Three at the Paris Peace Conference?', b: 'Woodrow Wilson of the USA, David Lloyd George of Britain and Georges Clemenceau of France, whose aims differed over how harshly to treat Germany.' },
      { n: 506, f: 'What were the main terms of the Treaty of Versailles (1919)?', b: 'Germany accepted responsibility for the war, lost territory, had its army limited and paid reparations. Many Germans resented it as a dictated peace.' },
    ]),
    ...sub(EU, `${EU}-7`, '7', [
      { n: 501, f: 'What was the 1905 Revolution in Russia?', b: 'Unrest after Bloody Sunday (January 1905) and defeat in the Russo-Japanese War. Nicholas II issued the October Manifesto, which promised a Duma and civil liberties.' },
      { n: 502, f: 'What reforms did Stolypin introduce?', b: 'As prime minister (1906-11) he combined repression with agrarian reform to help peasants become independent farmers. He was assassinated in 1911.' },
      { n: 503, f: 'What was the February/March Revolution of 1917?', b: 'Strikes and mutinies in Petrograd led Nicholas II to abdicate. Dual Power then existed between the Provisional Government and the Petrograd Soviet.' },
      { n: 504, f: 'How did the Bolsheviks seize power in 1917?', b: 'The Provisional Government weakened by continuing the war, and Lenin and Trotsky led the Bolshevik seizure of power in the October/November Revolution.' },
      { n: 505, f: 'How did Bolshevik rule survive and consolidate?', b: 'The Treaty of Brest-Litovsk (1918) ended war with Germany. The Bolsheviks won the Civil War (1917-22) with terror and War Communism, then adopted the New Economic Policy in 1921.' },
    ]),
    ...sub(EU, `${EU}-8`, '8', [
      { n: 501, f: 'How did Mussolini come to power?', b: 'The weak liberal state and fear of socialism, then the March on Rome (October 1922), led King Victor Emmanuel III to appoint him prime minister. He built a dictatorship by 1926.' },
      { n: 502, f: 'What challenges can threaten a new democracy?', b: 'Economic crisis, weak constitutions, extremist parties, hostile elites or armies, and lack of public trust. Weimar Germany is a common example of a democracy that failed.' },
      { n: 503, f: 'How did Hitler become Chancellor?', b: 'The Great Depression, mass unemployment and political crisis (1929-33) brought Nazi gains, and President Hindenburg appointed Hitler Chancellor in January 1933.' },
      { n: 504, f: 'How did Hitler consolidate power in 1933-34?', b: 'The Reichstag fire, the Enabling Act (March 1933), the Night of the Long Knives (1934) and the oath of loyalty after Hindenburg’s death in August 1934.' },
      { n: 505, f: 'How did Stalin win power after Lenin’s death?', b: 'As General Secretary he controlled appointments, and outmanoeuvred divided or weak rivals such as Trotsky, Zinoviev, Kamenev and Bukharin. He later used the Great Terror to remove opponents.' },
      { n: 506, f: 'How did totalitarian states keep control?', b: 'Through propaganda and a cult of personality, repression by secret police, and economic and social policies, though some resistance existed and total control was never complete.' },
    ]),
    ...sub(EU, `${EU}-9`, '9', [
      { n: 501, f: 'What were the successes and failures of the League of Nations in Europe?', b: 'It settled disputes in the 1920s such as the Åland Islands, but failed to stop Italy’s invasion of Abyssinia (1935). Collective security and disarmament both failed.' },
      { n: 502, f: 'What were the key steps of German and Italian expansion, 1933-40?', b: 'Italy invaded Abyssinia (1935); Germany remilitarised the Rhineland (1936), took Austria (1938), the Sudetenland (1938) and the rest of Czechoslovakia (1939), invaded Poland (1939), and Italy entered the war (1940).' },
      { n: 503, f: 'What did the international community’s response to aggression show in this subject?', b: 'The League of Nations failed to stop Japan in Manchuria or Italy in Abyssinia, and Britain and France pursued appeasement until 1939. Weigh collective security and appeasement against the aims of the aggressors.' },
      { n: 504, f: 'Why did the Allies win the Second World War?', b: 'The wartime alliance of the UK, USA and USSR, greater economic resources, strategic and military factors, and Axis weaknesses such as fighting on several fronts.' },
      { n: 505, f: 'What was the Wannsee Conference?', b: 'A meeting of Nazi officials in January 1942 to coordinate the “Final Solution”, the mass murder of Europe’s Jews.' },
      { n: 506, f: 'How did people resist persecution in Nazi-occupied Europe?', b: 'Through individual resistance, collective protest, resistance movements and solidarity between groups, such as the Warsaw Ghetto Uprising of 1943.' },
    ]),
    ...sub(EU, `${EU}-10`, '10', [
      { n: 501, f: 'Who was Miguel Primo de Rivera?', b: 'Spanish general who ruled as dictator from 1923 to 1930 with the king’s support. His fall was followed by the Second Republic in 1931.' },
      { n: 502, f: 'What led to the Spanish Civil War?', b: 'The election of 1936 won by the Popular Front, deep polarisation, and the military coup of July 1936, from which Francisco Franco emerged as leader.' },
      { n: 503, f: 'When was the Spanish Civil War, and why is it a common example?', b: '1936-39. It combined a civil war with foreign intervention by Germany, Italy and the USSR, and saw the bombing of civilians, as at Guernica (1937).' },
      { n: 504, f: 'Why did the Nationalists win the Spanish Civil War?', b: 'Help from Germany and Italy, strong military leadership under Franco, and divisions among the Republicans. Franco’s victory was complete in April 1939.' },
      { n: 505, f: 'How did Franco rule Spain?', b: 'As dictator from 1939 to 1975 he used violence against opponents, controlled politics through a single movement, and promoted conservative Catholic social values.' },
      { n: 506, f: 'How did Spain return to democracy after Franco?', b: 'After Franco’s death in 1975, King Juan Carlos backed reform, with Adolfo Suárez as prime minister. A new constitution followed in 1978, and Spain joined NATO (1982) and the EU (1986).' },
    ]),
    ...sub(EU, `${EU}-11`, '11', [
      { n: 501, f: 'What was Khrushchev’s Secret Speech?', b: 'In 1956 Khrushchev denounced Stalin’s crimes and cult of personality at the 20th Party Congress, starting de-Stalinisation.' },
      { n: 502, f: 'What was the Space Race?', b: 'Soviet and US competition for space achievements. The USSR launched Sputnik in 1957 and sent Yuri Gagarin into orbit in 1961.' },
      { n: 503, f: 'What marked the Brezhnev era (1964-82)?', b: 'Political and economic re-centralisation, the growth of the nomenklatura elite, economic stagnation and harsh treatment of dissidents.' },
      { n: 504, f: 'What were glasnost and perestroika?', b: 'Gorbachev’s policies of openness (glasnost) and economic restructuring (perestroika) from 1985. They encouraged democratisation and opposition, and the USSR dissolved after the August 1991 coup attempt.' },
      { n: 505, f: 'What challenges did Russia face under Yeltsin?', b: 'Failure to establish a stable democracy, economic hardship and the rise of oligarchs, and the war in Chechnya.' },
      { n: 506, f: 'How did Putin change Russia after 2000?', b: 'Political reforms and the re-emergence of an authoritarian state, control of the media, repression of opposition, and conflicts with neighbouring states such as Georgia in 2008.' },
    ]),
    ...sub(EU, `${EU}-12`, '12', [
      { n: 501, f: 'How did the Cold War emerge in Europe?', b: 'The wartime alliance broke down by 1949 because of ideological differences, the roles of Stalin and Truman, and economic factors, including the US Marshall Plan.' },
      { n: 502, f: 'What were the Berlin Blockade and the Berlin Wall?', b: 'The Soviet blockade of West Berlin (1948-49) was met by the Allied airlift. The Wall (1961) stopped East Germans leaving; it fell in 1989 and Germany reunified in 1990.' },
      { n: 503, f: 'What were NATO and the Warsaw Pact?', b: 'NATO (1949) was the Western military alliance. The Warsaw Pact (1955) was the Soviet-led alliance of Eastern Europe, a tool of Soviet domination.' },
      { n: 504, f: 'What was détente?', b: 'The easing of Cold War tension in the late 1960s and 1970s, seen in arms agreements such as SALT I (1972) and the Helsinki Accords (1975).' },
      { n: 505, f: 'Why did the Cold War end?', b: 'Soviet economic weakness, Gorbachev’s reforms and his refusal to use force in Eastern Europe, pressure from Reagan’s arms build-up, and popular movements. The Berlin Wall fell in 1989 and the USSR dissolved in 1991.' },
      { n: 506, f: 'How did European integration develop after the Cold War?', b: 'The EU expanded eastwards after 1990, with economic and social policies. Political resistance included Brexit, after the UK voted to leave in 2016.' },
    ]),
  ],
};
