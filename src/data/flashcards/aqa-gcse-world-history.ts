/**
 * D-444 -- flashcards for AQA GCSE History 8145 (first teaching 2016).
 *
 * Paper 1 (Understanding the modern world) has two subtopics in the syllabus
 * record, 3.2.1 Section A period studies and 3.2.2 Section B wider world depth
 * studies; each block covers every option in that section. Paper 2 (Shaping
 * the nation) itemises no subtopics, so its cards sit on the topic (topicOnly
 * helper). Card ids are `<subtopic number>-<n>` (or `<topic number>-<n>`) and
 * are permanent (browser progress is keyed by them): add a new card with the
 * next unused n, never renumber.
 *
 * Skill and paper-structure cards follow Marlbridge's 8145 revision notes and
 * exam-preparation page. Those pages do not set out each option's content, so
 * the period cards keep to standard textbook dates and facts. No revision-notes
 * page maps to a single subtopic, so every card is authored.
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

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const P1 = 'understanding-the-modern-world-8145';

export const DECK_AQA_GCSE_WORLD_HISTORY: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'gcse',
  subjectSlug: 'world-history',
  syllabusCode: '8145',
  syllabusSeries: 'first teaching 2016',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Understanding the modern world -- Section A period studies
    ...sub(P1, 'utmw-section-a-period-studies-8145', '3.2.1', [
      { n: 1, f: 'What are the four AQA GCSE History period study options in Paper 1 Section A?', b: 'America, 1840–1895: Expansion and consolidation. Germany, 1890–1945: Democracy and dictatorship. Russia, 1894–1945: Tsardom and communism. America, 1920–1973: Opportunity and inequality.' },
      { n: 2, f: 'Which assessment objective do the interpretation questions in Section A test?', b: 'AO4: analysing and evaluating historical interpretations. Section A has no source-handling (AO3) marks; source questions are in Section B.' },
      { n: 3, f: 'Why might two historians’ interpretations of the same event differ?', b: 'They emphasise different evidence, set out to answer different questions, or wrote in different contexts. Explain the difference in those terms rather than just saying one is more convincing.' },
      { n: 4, f: 'America 1840–95: what did the Homestead Act (1862) do?', b: 'It offered 160 acres of public land in the West to settlers who farmed it for five years, encouraging settlement of the Great Plains.' },
      { n: 5, f: 'America 1840–95: when was the first transcontinental railroad completed, and why did it matter?', b: '1869. It linked the east and west coasts, sped up settlement and trade, and helped destroy the buffalo herds the Plains Indians depended on.' },
      { n: 6, f: 'America 1840–95: what happened at the Little Bighorn (1876) and Wounded Knee (1890)?', b: 'At the Little Bighorn, Sioux and Cheyenne warriors destroyed Custer’s force. At Wounded Knee, US troops killed hundreds of Lakota Sioux, many of them women and children, marking the end of Plains Indian resistance.' },
      { n: 7, f: 'Germany 1890–1945: what was Weltpolitik?', b: 'Kaiser Wilhelm II’s “world policy” from the late 1890s: seeking colonies and building a large navy (the Navy Laws from 1898, under Tirpitz) to make Germany a world power.' },
      { n: 8, f: 'Germany 1890–1945: what was Article 48 of the Weimar Constitution?', b: 'It allowed the president to rule by decree in an emergency. It was used heavily in 1930–33 and helped prepare the way for Hitler’s dictatorship.' },
      { n: 9, f: 'Germany 1890–1945: what was the Enabling Act (March 1933)?', b: 'A law that allowed Hitler’s government to pass laws without the Reichstag for four years, the legal basis of his dictatorship.' },
      { n: 10, f: 'Russia 1894–1945: what was the October Manifesto (1905)?', b: 'Nicholas II’s promise of a Duma (elected parliament) and civil rights, issued to end the 1905 revolution. It split his opponents.' },
      { n: 11, f: 'Russia 1894–1945: why did the Tsar abdicate in March 1917?', b: 'War defeats, food and fuel shortages, his decision to command the army personally, and Rasputin’s influence. When troops in Petrograd joined the strikers he lost control.' },
      { n: 12, f: 'Russia 1894–1945: what were the Five-Year Plans?', b: 'Stalin’s state targets for rapid industrial growth from 1928, focused on heavy industry such as coal, steel and electricity.' },
      { n: 13, f: 'America 1920–73: what did Brown v Board of Education (1954) decide?', b: 'The Supreme Court ruled that segregation in public schools was unconstitutional.' },
      { n: 14, f: 'America 1920–73: what were the Civil Rights Act (1964) and Voting Rights Act (1965)?', b: 'The 1964 Act banned segregation in public places and discrimination in employment. The 1965 Act removed barriers such as literacy tests that stopped Black Americans voting.' },
      { n: 15, f: 'How should you answer a “how far did things change” question?', b: 'State what changed, state what stayed the same or changed only superficially, then reach a judgement on balance.' },
    ]),
    // 1 Understanding the modern world -- Section B wider world depth studies
    ...sub(P1, 'utmw-section-b-wider-world-depth-studies-8145', '3.2.2', [
      { n: 1, f: 'What are the five wider world depth study options in Paper 1 Section B?', b: 'Conflict and tension: the First World War, 1894–1918; the inter-war years, 1918–1939; between East and West, 1945–1972; in Asia, 1950–1975; in the Gulf and Afghanistan, 1990–2009.' },
      { n: 2, f: 'Which source questions are in Paper 1 Section B?', b: 'A 4-mark source-analysis question on one source, then a 12-mark question on how useful two sources are (AO3).' },
      { n: 3, f: 'How do you judge how useful a source is?', b: 'Use its content and its provenance (who made it, when, why and for whom) together with your own contextual knowledge, and tie the judgement to the specific enquiry in the question.' },
      { n: 4, f: 'How should a causation answer use long-term causes, short-term causes and the trigger?', b: 'Sort the causes into the three categories, then explain how they reinforced each other. Naming all three without showing the relationship does not reach the top level.' },
      { n: 5, f: 'First World War 1894–1918: what was the Schlieffen Plan?', b: 'Germany’s plan to defeat France quickly by attacking through Belgium, before turning to fight Russia. It brought Britain into the war in August 1914.' },
      { n: 6, f: 'First World War 1894–1918: why did the Western Front become a stalemate?', b: 'Trenches, machine guns, artillery and barbed wire made defence much stronger than attack, so neither side could break through.' },
      { n: 7, f: 'Inter-war years 1918–39: what were the military terms of the Treaty of Versailles?', b: 'Germany’s army was limited to 100,000, conscription was banned, it was allowed no air force or submarines and only six battleships, and the Rhineland was demilitarised.' },
      { n: 8, f: 'Inter-war years 1918–39: why did the League of Nations fail in Manchuria and Abyssinia?', b: 'It had no army, the USA was not a member, and Britain and France would not take strong action. Japan kept Manchuria (1931–33) and Italy conquered Abyssinia (1935–36).' },
      { n: 9, f: 'Inter-war years 1918–39: what was agreed at Munich in September 1938?', b: 'Britain, France and Italy agreed that Germany could take the Sudetenland from Czechoslovakia, the high point of appeasement.' },
      { n: 10, f: 'East and West 1945–72: what was the Berlin Blockade (1948–49)?', b: 'The USSR cut land routes to West Berlin; the West supplied the city by the Berlin Airlift until the blockade was lifted in May 1949.' },
      { n: 11, f: 'East and West 1945–72: how was the Cuban Missile Crisis (October 1962) resolved?', b: 'After a US naval quarantine, the USSR removed its missiles from Cuba in return for a US promise not to invade Cuba and a secret deal to remove US missiles from Turkey.' },
      { n: 12, f: 'Asia 1950–75: how did the Korean War end?', b: 'An armistice in July 1953 left Korea divided near the 38th parallel, roughly where the war had started.' },
      { n: 13, f: 'Asia 1950–75: why was the Tet Offensive (1968) important?', b: 'The communist attacks failed militarily but shocked the American public, turning opinion against the Vietnam War.' },
      { n: 14, f: 'Gulf and Afghanistan 1990–2009: what was the Gulf War of 1991?', b: 'After Iraq invaded Kuwait in August 1990, a US-led coalition authorised by the UN expelled Iraqi forces in Operation Desert Storm (January–February 1991).' },
      { n: 15, f: 'Gulf and Afghanistan 1990–2009: why did the USA invade Afghanistan in October 2001?', b: 'After the 11 September 2001 attacks, the USA invaded to destroy al-Qaeda and remove the Taliban government that sheltered it.' },
      { n: 16, f: 'Gulf and Afghanistan 1990–2009: what happened in Iraq in 2003?', b: 'A US-led coalition invaded in March 2003 and overthrew Saddam Hussein, who was captured in December 2003. No weapons of mass destruction were found.' },
    ]),

    // 2 Shaping the nation (no subtopics itemised)
    ...topicOnly('shaping-the-nation-8145', '2', [
      { n: 1, f: 'What are the two sections of AQA GCSE History Paper 2?', b: 'Section A: one thematic study. Section B: one British depth study, which includes a historic environment study.' },
      { n: 2, f: 'What are the three thematic study options in Paper 2 Section A?', b: 'AA Health and the people, c1000 to the present day. AB Power and the people, c1170 to the present day. AC Migration, empires and the people, c790 to the present day.' },
      { n: 3, f: 'What are the four British depth study options in Paper 2 Section B?', b: 'BA Norman England, c1066–c1100. BB Medieval England: the reign of Edward I, 1272–1307. BC Elizabethan England, c1568–1603. BD Restoration England, 1660–1685.' },
      { n: 4, f: 'How is the historic environment study examined?', b: 'By the final question of Paper 2 Section B, a 16-mark essay (8 AO1, 8 AO2) on a specified site that AQA changes each year.' },
      { n: 5, f: 'What is the most common way marks are lost on the historic environment question?', b: 'Naming a feature of the site without connecting it to a specific event or development from the rest of the depth study and explaining what it reveals about the period.' },
      { n: 6, f: 'What are the named factors in Health and the people?', b: 'War, religion, chance, government, communication, science and technology, and the role of the individual. Strong answers show how factors worked together.' },
      { n: 7, f: 'Health and the people: name four turning points with dates', b: 'The Black Death (1348), Jenner’s smallpox vaccination (1796), germ theory (Pasteur, from 1861) and the creation of the NHS (1948).' },
      { n: 8, f: 'Power and the people: what were Magna Carta (1215) and the Great Reform Act (1832)?', b: 'Magna Carta: barons forced King John to accept limits on royal power. The Great Reform Act: removed many “rotten boroughs” and extended the vote to more middle-class men.' },
      { n: 9, f: 'Norman England: what were the Harrying of the North and the Domesday Book?', b: 'The Harrying of the North (1069–70) was William I’s brutal destruction of northern England after rebellions. The Domesday Book (1086) was a survey of land and resources across England.' },
      { n: 10, f: 'Elizabethan England: what happened in 1587 and 1588?', b: 'Mary, Queen of Scots was executed in 1587 after the Babington Plot. In 1588 the Spanish Armada was defeated.' },
      { n: 11, f: 'Restoration England: what happened in 1660, 1665 and 1666?', b: '1660: the monarchy was restored under Charles II. 1665: the Great Plague in London. 1666: the Great Fire of London.' },
      { n: 12, f: 'Edward I: what was the Model Parliament, and how did Edward conquer Wales?', b: 'The Model Parliament (1295) included knights and townsmen as well as lords and clergy. After wars in 1277 and 1282–83 Edward conquered Wales and built castles such as Caernarfon and Conwy.' },
    ]),
  ],
};
