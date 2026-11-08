/**
 * D-444 -- flashcards for IB Diploma Programme History (first assessment 2017).
 *
 * One block per subtopic, in syllabus order: the five prescribed subjects
 * (Paper 1), the twelve world history topics (Paper 2), the four HL regional
 * options (Paper 3) and the internal assessment (topic only). Card ids are
 * `<subtopic number>-<n>` (or `<topic number>-<n>`) and are permanent (browser
 * progress is keyed by them): add a new card with the next unused n, never
 * renumber.
 *
 *   The syllabus numbers each group from 1, so the same number recurs. To keep
 *   ids unique, n runs from 1 on the prescribed subjects, from 11 on the world
 *   history topics, from 21 on the HL options and from 31 on the internal
 *   assessment (topic 4). So '3-1' is the move to global war, '3-11' is
 *   dynasties and rulers and '3-21' is the history of Asia and Oceania.
 *
 * Paper formats follow Marlbridge's own first-assessment-2017 study guides for
 * the prescribed subjects, world history topics and HL options. The site's
 * subject guide, syllabus guide, exam-preparation page and IA pages describe
 * the successor course (first assessment 2028), so the internal-assessment
 * cards keep to what both generations share and give no section structure or
 * weighting. The named case studies of the prescribed subjects, and the
 * example events on the world history topics, are standard content written
 * from the syllabus; the course pages describe them only as themes. No markband
 * is stated. Every card is authored: scripts/flashcard-candidates.mjs lists no
 * candidates for 'DP History'. Not tiered. Plain text only (see types.ts).
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

const PS = 'ib-dp-world-history-prescribed-subjects';
const WT = 'ib-dp-world-history-world-history-topics';
const HL = 'ib-dp-world-history-hl-options-depth-studies';
const IA = 'ib-dp-world-history-internal-assessment';

export const DECK_IB_IB_DP_WORLD_HISTORY: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-dp',
  subjectSlug: 'world-history',
  syllabusCode: 'DP History',
  syllabusSeries: 'First assessment 2017',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Prescribed subjects (Paper 1)
    ...sub(PS, `${PS}-1`, '1', [
      { n: 1, f: 'What are the two case studies of the prescribed subject Military leaders?', b: 'Genghis Khan (c.1200-1227) and Richard I of England (1173-1199).' },
      { n: 2, f: 'What themes does the Military leaders prescribed subject examine?', b: 'How leaders rose to command, their methods and tactics, the nature of their leadership, and the impact of their campaigns. Weigh the leader’s personal qualities against organisation, logistics and opponents’ weakness.' },
      { n: 3, f: 'When was Temüjin proclaimed Genghis Khan?', b: 'In 1206, at a kurultai (assembly of Mongol leaders) that recognised him as ruler of the united Mongol tribes.' },
      { n: 4, f: 'What was Richard I’s main campaign, and how did it end?', b: 'The Third Crusade (1189-92). He won at Arsuf (1191) but did not retake Jerusalem; the Treaty of Jaffa (1192) with Saladin left Jerusalem in Muslim hands but allowed Christian pilgrims access.' },
      { n: 5, f: 'Paper 1 Question 1: what does it ask, and what should you avoid?', b: 'The message of a source (two parts, 3 and 2 marks). Give the main points in your own words from the source itself. Do not bring in outside knowledge or evaluate.' },
    ]),
    ...sub(PS, `${PS}-2`, '2', [
      { n: 1, f: 'What are the two case studies of Conquest and its impact?', b: 'The final stages of Muslim rule in Spain (1482-1492) and the conquest of Mexico and Peru (1519-1551).' },
      { n: 2, f: 'How did Muslim rule in Spain end in 1492?', b: 'Ferdinand and Isabella’s campaigns against the Nasrid kingdom of Granada ended when Muhammad XII (Boabdil) surrendered the city in January 1492.' },
      { n: 3, f: 'When did the Spanish conquer the Aztec and Inca empires?', b: 'Cortés took the Aztec capital Tenochtitlan in 1521. Pizarro captured the Inca ruler Atahualpa at Cajamarca in 1532 and had him executed in 1533.' },
      { n: 4, f: 'Why were small Spanish forces able to conquer large American empires?', b: 'Indigenous allies such as the Tlaxcalans, epidemic disease (especially smallpox), steel weapons and horses, and divisions within the empires, such as the Inca civil war.' },
      { n: 5, f: 'Paper 1 Question 2: what does it ask?', b: 'Analyse the value and limitations of one source for a historian studying a stated topic, with reference to its origin, purpose and content (4 marks). Link every point to the topic.' },
    ]),
    ...sub(PS, `${PS}-3`, '3', [
      { n: 1, f: 'What are the two case studies of The move to global war?', b: 'Japanese expansion in East Asia (1931-1941) and German and Italian expansion (1933-1940).' },
      { n: 2, f: 'What were the key steps of Japanese expansion, 1931-41?', b: 'The Mukden Incident and invasion of Manchuria (1931), leaving the League (1933), war with China after the Marco Polo Bridge Incident (1937), the Tripartite Pact (1940) and the attack on Pearl Harbor (December 1941).' },
      { n: 3, f: 'What were the key steps of German and Italian expansion, 1933-40?', b: 'Italy invaded Abyssinia (1935); Germany remilitarised the Rhineland (1936), took Austria (1938), the Sudetenland (1938) and the rest of Czechoslovakia (1939), invaded Poland (1939), and Italy entered the war (1940).' },
      { n: 4, f: 'What did the international community’s response to aggression show in this subject?', b: 'The League of Nations failed to stop Japan in Manchuria or Italy in Abyssinia, and Britain and France pursued appeasement until 1939. Weigh collective security and appeasement against the aims of the aggressors.' },
      { n: 5, f: 'Paper 1 Question 3: what does it ask?', b: 'Compare and contrast what two sources reveal about an issue (6 marks). Make point-by-point links, with references to both sources throughout, not one source after the other.' },
    ]),
    ...sub(PS, `${PS}-4`, '4', [
      { n: 1, f: 'What are the two case studies of Rights and protest?', b: 'Civil rights movement in the United States (1954-1965) and apartheid South Africa (1948-1964).' },
      { n: 2, f: 'Name key events of the US civil rights movement, 1954-65', b: 'Brown v Board of Education (1954), the Montgomery bus boycott (1955-56), Little Rock (1957), the March on Washington (1963), the Civil Rights Act (1964) and the Voting Rights Act (1965).' },
      { n: 3, f: 'Name key events of protest against apartheid, 1948-64', b: 'The Defiance Campaign (1952), the Freedom Charter (1955), the Sharpeville massacre (1960), the banning of the ANC and PAC (1960), the turn to armed struggle (1961) and the Rivonia trial (1964).' },
      { n: 4, f: 'What themes does the Rights and protest subject examine?', b: 'The origins and aims of movements, their methods, the role of leaders and organisations, the response of governments, and how far they succeeded. Compare peaceful and confrontational methods.' },
      { n: 5, f: 'Paper 1 Question 4: what does it ask?', b: 'Using the sources and your own knowledge, answer a question in a short argued response (9 marks). Integrate at least three sources into the argument and reach a conclusion.' },
    ]),
    ...sub(PS, `${PS}-5`, '5', [
      { n: 1, f: 'What are the two case studies of Conflict and intervention?', b: 'Rwanda (1990-1998) and Kosovo (1989-2002).' },
      { n: 2, f: 'What triggered the Rwandan genocide in April 1994?', b: 'The shooting down of President Habyarimana’s plane on 6 April 1994. Hutu extremists then killed Tutsi and moderate Hutu over about 100 days, until the Rwandan Patriotic Front took control in July 1994.' },
      { n: 3, f: 'Why is the UN’s role in Rwanda criticised?', b: 'The UN peacekeeping mission (UNAMIR) had a weak mandate, and most of its troops were withdrawn after the killing began, despite warnings from its commander, Roméo Dallaire.' },
      { n: 4, f: 'How did the Kosovo conflict lead to NATO intervention?', b: 'Milošević removed Kosovo’s autonomy in 1989; the Kosovo Liberation Army fought Serbian forces in the late 1990s; after the Račak killings (January 1999), NATO bombed Yugoslavia from March to June 1999 without UN Security Council authorisation.' },
      { n: 5, f: 'What themes does the Conflict and intervention subject examine?', b: 'Causes of the conflict, the nature and motives of outside intervention, its effect on the people involved, and how far intervention ended or prolonged the conflict.' },
    ]),

    // 2 World history topics (Paper 2)
    ...sub(WT, `${WT}-1`, '1', [
      { n: 11, f: 'What does the world history topic Society and economy (750-1400) cover?', b: 'Agriculture, trade, towns, social hierarchy, religion and the roles of women and peasants, compared across regions.' },
      { n: 12, f: 'What were feudalism and manorialism in medieval Europe?', b: 'Feudalism: land granted by a lord in return for military service and loyalty.\nManorialism: the economic system of the manor, where peasants and serfs farmed the lord’s land in return for protection and a share of the produce.' },
      { n: 13, f: 'When did the Black Death strike Europe, and with what effect?', b: '1347-51. It killed roughly a third or more of Europe’s population, causing labour shortages that raised wages and weakened serfdom in many areas.' },
      { n: 14, f: 'How is Paper 2 structured, according to the study guide?', b: 'Two essays, each on a different world history topic, in 1 hour 30 minutes. Each essay is marked out of 15, so about 45 minutes per essay including planning.' },
    ]),
    ...sub(WT, `${WT}-2`, '2', [
      { n: 11, f: 'What does the topic Causes and effects of wars (750-1500) cover?', b: 'Why wars were fought, how they were fought, and their political, economic and social results. The Crusades and the Mongol conquests are typical examples.' },
      { n: 12, f: 'What did the First Crusade (1096-99) achieve?', b: 'Crusaders captured Jerusalem in 1099 and set up crusader states in the Levant.' },
      { n: 13, f: 'When was the Hundred Years’ War, and between whom?', b: 'England and France, 1337-1453, over the English claim to the French throne and English lands in France. It ended with England losing all its French lands except Calais.' },
      { n: 14, f: 'How do you write a strong Paper 2 causes-of-war essay?', b: 'Distinguish long-term from short-term causes, rank them, and use examples from more than one region where the question asks for it, rather than narrating one war.' },
    ]),
    ...sub(WT, `${WT}-3`, '3', [
      { n: 11, f: 'What does the topic Dynasties and rulers (750-1500) cover?', b: 'How rulers gained, held and lost power, and the structures of government they used, with dynasties drawn from China, the Islamic world or Europe.' },
      { n: 12, f: 'When did the Abbasid caliphate begin and when did Baghdad fall?', b: 'The Abbasids took power in 750. Baghdad was sacked by the Mongols in 1258.' },
      { n: 13, f: 'When was Charlemagne crowned emperor, and by whom?', b: 'On Christmas Day 800, by Pope Leo III in Rome.' },
      { n: 14, f: 'Which themes help compare medieval rulers?', b: 'Legitimacy (religion, descent, conquest), methods of government and administration, relations with nobles and religious authorities, and reasons for decline.' },
    ]),
    ...sub(WT, `${WT}-4`, '4', [
      { n: 11, f: 'What does the topic Societies in transition (1400-1700) cover?', b: 'Change in thought, culture, economy and religion, including the Renaissance, the Reformation, exploration and the movement of goods and people.' },
      { n: 12, f: 'Why was Gutenberg’s printing press (c.1450) significant?', b: 'It made books cheaper and faster to produce, spreading new ideas quickly and helping the Renaissance and the Reformation reach a wide audience.' },
      { n: 13, f: 'When did Luther begin the Protestant Reformation?', b: 'In 1517, when he issued his Ninety-Five Theses criticising the sale of indulgences.' },
      { n: 14, f: 'What was the Columbian Exchange?', b: 'The transfer of plants, animals, people and diseases between the Americas and the rest of the world after Columbus’s voyage of 1492.' },
    ]),
    ...sub(WT, `${WT}-5`, '5', [
      { n: 11, f: 'What does the topic Early Modern states (1450-1789) cover?', b: 'The growth of centralised states, absolutism and bureaucracy, and the limits on rulers’ power.' },
      { n: 12, f: 'What is absolutism?', b: 'A system in which the monarch claims supreme, unchecked authority, often justified by divine right. Louis XIV of France (reigned 1643-1715) is the classic example.' },
      { n: 13, f: 'What did the Glorious Revolution of 1688 change in England?', b: 'James II was replaced by William and Mary, and the Bill of Rights (1689) limited royal power and strengthened Parliament.' },
      { n: 14, f: 'What limits existed on Early Modern rulers?', b: 'Representative bodies, the nobility, religious authorities, the cost of war and weak communications, which meant even "absolute" rulers depended on co-operation.' },
    ]),
    ...sub(WT, `${WT}-6`, '6', [
      { n: 11, f: 'What does the topic Causes and effects of Early Modern wars (1500-1750) cover?', b: 'Religious and dynastic conflict, changes in military technology and organisation, and the consequences for states.' },
      { n: 12, f: 'When was the Thirty Years’ War, and how did it end?', b: '1618-48, beginning in the Holy Roman Empire as a religious conflict. It ended with the Peace of Westphalia (1648).' },
      { n: 13, f: 'What is meant by the "military revolution" of the Early Modern period?', b: 'Changes in warfare such as gunpowder weapons, new fortifications and larger standing armies, which raised costs and pushed states to centralise and tax more.' },
      { n: 14, f: 'Religious vs dynastic causes of Early Modern wars', b: 'Religious: conflict between Catholic and Protestant states or communities.\nDynastic: rival claims to thrones and territory between ruling families.\nMany wars combined both, so weigh them.' },
    ]),
    ...sub(WT, `${WT}-7`, '7', [
      { n: 11, f: 'What does the topic Origins, development and impact of industrialization (1750-2005) cover?', b: 'Why industrialisation began where it did, how it spread, and its effects on society, the economy and the environment.' },
      { n: 12, f: 'Why did industrialisation begin in Britain?', b: 'Coal and iron deposits, capital from trade and empire, an agricultural revolution that freed labour, good transport by river, canal and sea, and inventions such as improved steam engines.' },
      { n: 13, f: 'Give two social effects of industrialisation', b: 'Rapid urbanisation with overcrowded, unhealthy housing, and the growth of a factory working class, which led to trade unions and labour reforms.' },
      { n: 14, f: 'How did Meiji Japan industrialise?', b: 'After 1868 the state led modernisation, building railways and factories, importing Western technology and experts, and later selling enterprises to private firms.' },
    ]),
    ...sub(WT, `${WT}-8`, '8', [
      { n: 11, f: 'What does the topic Independence movements (1800-2000) cover?', b: 'The causes, methods and outcomes of movements for independence, including nationalism, leadership and the effect of external events such as wars.' },
      { n: 12, f: 'When did India and Pakistan become independent?', b: 'In August 1947, when British rule ended and the subcontinent was partitioned.' },
      { n: 13, f: 'When did Ghana become independent, and why is it a key example?', b: 'In 1957, under Kwame Nkrumah, as the former British colony of the Gold Coast. It was one of the first colonies in sub-Saharan Africa to win independence and encouraged movements elsewhere.' },
      { n: 14, f: 'How did the world wars affect independence movements?', b: 'They weakened colonial powers economically and militarily, damaged their prestige, and raised expectations among colonised peoples who had served or suffered in them.' },
    ]),
    ...sub(WT, `${WT}-9`, '9', [
      { n: 11, f: 'What does the topic Emergence and development of democratic states (1848-2000) cover?', b: 'Reform movements, expansion of the franchise, political institutions, and challenges to democracy.' },
      { n: 12, f: 'What is the franchise, and why does its expansion matter?', b: 'The right to vote. Extending it to more men, then to women, is a key measure of how democratic a state became.' },
      { n: 13, f: 'What challenges can threaten a new democracy?', b: 'Economic crisis, weak constitutions, extremist parties, hostile elites or armies, and lack of public trust. Weimar Germany is a common example of a democracy that failed.' },
      { n: 14, f: 'How do you compare two democratic states in a Paper 2 essay?', b: 'Choose themes such as the conditions in which democracy emerged, constitutional design, social and economic policies, and challenges faced, and deal with both states in each paragraph.' },
    ]),
    ...sub(WT, `${WT}-10`, '10', [
      { n: 11, f: 'What does the topic Authoritarian states (20th century) cover?', b: 'How leaders came to power, their methods of control, ideology and its effect on society, including single-party and military regimes.' },
      { n: 12, f: 'Which conditions help an authoritarian leader emerge?', b: 'Economic crisis, war or defeat, weak or discredited government, social division, and the use of ideology, persuasion and force.' },
      { n: 13, f: 'Which methods do authoritarian leaders use to keep power?', b: 'Force and terror, propaganda and a personality cult, control of education and the media, removal of opponents, and economic and social policies that win support.' },
      { n: 14, f: 'Compare and contrast: what does the command term require in a Paper 2 essay?', b: 'Similarities and differences between two or more examples, made explicit point by point throughout, with an explanation of why they exist. Describing each example separately earns little.' },
    ]),
    ...sub(WT, `${WT}-11`, '11', [
      { n: 11, f: 'What does the topic Causes and effects of 20th-century wars cover?', b: 'The causes, practices and effects of wars, including world wars and civil or regional wars, with attention to technology, the economy and society.' },
      { n: 12, f: 'Total war vs limited war', b: 'Total war: a state mobilises its whole population, economy and resources, and civilians become targets.\nLimited war: aims, weapons and areas of fighting are deliberately restricted.' },
      { n: 13, f: 'When was the Spanish Civil War, and why is it a common example?', b: '1936-39. It combined a civil war with foreign intervention by Germany, Italy and the USSR, and saw the bombing of civilians, as at Guernica (1937).' },
      { n: 14, f: 'What is guerrilla warfare?', b: 'Fighting by small, mobile forces using ambush, sabotage and support from the local population against a stronger conventional army, as in the Chinese Civil War and the Vietnam War.' },
    ]),
    ...sub(WT, `${WT}-12`, '12', [
      { n: 11, f: 'What does the topic The Cold War: superpower tensions and rivalries cover?', b: 'Ideological differences, alliances, crises, proxy conflicts, and the end of the Cold War, with leaders and countries from more than one region.' },
      { n: 12, f: 'What is a proxy war?', b: 'A conflict in which the superpowers support opposing sides rather than fighting each other directly, such as the Korean War (1950-53) or the Soviet-Afghan War (1979-89).' },
      { n: 13, f: 'What was détente?', b: 'The easing of Cold War tension in the late 1960s and 1970s, seen in arms agreements such as SALT I (1972) and the Helsinki Accords (1975).' },
      { n: 14, f: 'Why did the Cold War end?', b: 'Soviet economic weakness, Gorbachev’s reforms and his refusal to use force in Eastern Europe, pressure from Reagan’s arms build-up, and popular movements. The Berlin Wall fell in 1989 and the USSR dissolved in 1991.' },
    ]),

    // 3 HL options: depth studies (Paper 3)
    ...sub(HL, `${HL}-1`, '1', [
      { n: 21, f: 'What themes run through the HL option History of Africa and the Middle East?', b: 'The impact of external powers, the rise of nationalism, state formation, economic change and the role of religion and trade, using the countries and rulers your teacher selected.' },
      { n: 22, f: 'How is Paper 3 structured, according to the study guide?', b: 'HL only: three essays in 2 hours 30 minutes on your regional option, each marked out of 15, so about 50 minutes per essay.' },
      { n: 23, f: 'What does depth mean in a Paper 3 essay?', b: 'Secure long-run knowledge of one region: a clear chronology, turning points, several themes at once, and judgements on what changed, what stayed the same and how much it mattered.' },
    ]),
    ...sub(HL, `${HL}-2`, '2', [
      { n: 21, f: 'What themes run through the HL option History of the Americas?', b: 'Colonial and national development, reform and political change, economic growth and inequality, social movements and relations between states.' },
      { n: 22, f: 'Necessary cause vs sufficient cause', b: 'Necessary: it had to be present for the outcome to happen.\nSufficient: it was enough on its own to produce the outcome.' },
      { n: 23, f: 'How should you select evidence for a Paper 3 essay?', b: 'Choose five or six well-developed, accurate examples that support the argument, rather than a long list of facts that turns the essay into narrative.' },
    ]),
    ...sub(HL, `${HL}-3`, '3', [
      { n: 21, f: 'What themes run through the HL option History of Asia and Oceania?', b: 'Imperial influence, modernisation, nationalism, revolution, the role of ideology and the effects of war, weighing internal weakness against external pressure.' },
      { n: 22, f: 'How should you use historians in a Paper 3 essay?', b: 'Refer to different views where relevant and only when you are sure of the view and its author. If you cannot recall the name, describe the position without attributing it.' },
      { n: 23, f: 'Why should you revise all the sections of your regional option you studied?', b: 'Learning one section and neglecting the others limits your choice of questions in the exam.' },
    ]),
    ...sub(HL, `${HL}-4`, '4', [
      { n: 21, f: 'What themes run through the HL option History of Europe?', b: 'The political and social effects of revolution and reform, nationalism and the creation of states, industrial change, ideologies and conflict.' },
      { n: 22, f: 'What makes a strong Paper 3 essay structure?', b: 'A thesis in the introduction, thematic or chronological paragraphs that each answer the question, and a conclusion that reaches a sustained judgement, staying within the date limits.' },
      { n: 23, f: 'What are the four regional options for HL Paper 3?', b: 'History of Africa and the Middle East, History of the Americas, History of Asia and Oceania, and History of Europe. A school chooses one.' },
    ]),

    // 4 Internal assessment: historical investigation
    ...topicOnly(IA, '4', [
      { n: 31, f: 'What is the historical investigation?', b: 'The internally assessed component taken by every DP History student: an independent written inquiry into a historical question the student formulates.' },
      { n: 32, f: 'Does the historical investigation have to be on a topic studied in class?', b: 'No. It may be on any historical topic the student can find and evaluate sources for.' },
      { n: 33, f: 'What makes a good inquiry question for the historical investigation?', b: 'A narrow, focused question, for example "To what extent did a named factor contribute to a specific outcome between precise dates?", that a manageable set of sources can answer within the word limit.' },
      { n: 34, f: 'What four things should a source evaluation state?', b: 'Origin (who produced it and when), purpose (why), value (what it is useful for in answering the question) and limitation (what it cannot reliably show).' },
      { n: 35, f: 'Are a source’s value and limitations fixed?', b: 'No. The same source can be very valuable for one question and limited for another, so tie the evaluation to the specific inquiry question.' },
      { n: 36, f: 'What is the most common reason a historical investigation underperforms?', b: 'An inquiry question left too broad, which produces narrative instead of a focused, evidenced argument.' },
      { n: 37, f: 'Why are fewer, varied sources often better than a long source list?', b: 'A few sources that differ in origin, type or perspective, evaluated in depth, show stronger evaluation than many treated superficially. Include at least one that challenges your argument.' },
    ]),
  ],
};
