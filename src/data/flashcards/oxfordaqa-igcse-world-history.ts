/**
 * D-444 -- flashcards for OxfordAQA International GCSE History 9245
 * (specification Version 1.1).
 *
 * The syllabus record has one subtopic per paper section (each section is a
 * choice of options), so each block covers every option in that section.
 * Card ids are `<subtopic number>-<n>` and are permanent (browser progress is
 * keyed by them): add a new card with the next unused n, never renumber.
 *
 * Written from Marlbridge's own 9245 revision notes and study guides (the
 * inter-war, appeasement and Cold War content, the Section A source booklet
 * and question types, and the Paper 2 method). The option content those pages
 * do not set out (Crises of the Cold War, détente, the three societies in
 * change, and the two thematic studies) keeps to standard textbook dates and
 * facts. No revision-notes page maps to a single subtopic, so every card is
 * authored.
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

const P1 = 'paper-1-international-relations-depth-studies-9245';
const P2 = 'paper-2-studies-in-change-9245';

export const DECK_OXFORDAQA_IGCSE_WORLD_HISTORY: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'igcse',
  subjectSlug: 'world-history',
  syllabusCode: '9245',
  syllabusSeries: 'Version 1.1',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // Paper 1 Section A: Peacemaking and the League, c1919-1939; Crises of the Cold War, 1960-1975
    ...sub(P1, 'paper-1-section-a-9245', '3.1.1', [
      { n: 1, f: 'How is Paper 1 Section A examined?', b: 'It is entirely source-based. Three of its five sources are released in advance (1 February for May/June, 1 July for October/November); the other two are unseen. You get a clean copy of all five in the exam and may bring in no notes.' },
      { n: 2, f: 'What are the four Section A source questions?', b: 'Q1 (4 marks): use a source to support a claim. Q2 (6): explain a difference between two sources. Q3 (8): explain how useful a source is. Q4 (12): evaluate an issue using a range of the sources and your own knowledge.' },
      { n: 3, f: 'How do you show a source is useful in Section A Question 3?', b: 'Use its content, its provenance (who, when, why) and your own contextual knowledge together. Bias does not reduce usefulness: a biased source is useful evidence of what its author wanted people to believe.' },
      { n: 4, f: 'What did each of the Big Three want at the Paris Peace Conference?', b: 'Clemenceau (France): revenge, security and a crippled Germany. Wilson (USA): the Fourteen Points, self-determination and a League of Nations. Lloyd George (Britain): a middle course, punishing Germany but preserving trade.' },
      { n: 5, f: 'What does BRAT stand for in the Treaty of Versailles?', b: 'Blame (Article 231, war guilt), Reparations (£6,600 million), Army (100,000 men, no air force, no submarines, six battleships), Territory (Alsace-Lorraine, the Polish Corridor, the Saar, colonies as mandates, the Rhineland demilitarised, Anschluss forbidden).' },
      { n: 6, f: 'Why did Germans call the Treaty of Versailles a Diktat?', b: 'It was a dictated peace with no negotiation. The war guilt clause was resented as unjust, reparations seen as unpayable, and loss of land divided German-speaking people.' },
      { n: 7, f: 'Name three successes and three failures of the League of Nations', b: 'Successes: the Åland Islands (1921), Upper Silesia (1921), Bulgaria (1925). Failures: Vilna (1920), Corfu (1923), Manchuria (1931) and Abyssinia (1935).' },
      { n: 8, f: 'What was the Hoare–Laval Pact and why did it damage the League?', b: 'A secret 1935 plan by the British and French foreign ministers to give Italy much of Abyssinia. It showed the League’s two leading members negotiating with the aggressor.' },
      { n: 9, f: 'What was the U-2 incident (May 1960)?', b: 'A US spy plane was shot down over the USSR and its pilot, Gary Powers, captured. The Paris summit between Eisenhower and Khrushchev collapsed.' },
      { n: 10, f: 'What caused the Cuban Missile Crisis (1962)?', b: 'The Bay of Pigs invasion (1961), US missiles in Turkey and the Soviet wish for nuclear parity led Khrushchev to place missiles in Cuba.' },
      { n: 11, f: 'What were the consequences of the Cuban Missile Crisis?', b: 'A hotline between Washington and Moscow, the Limited Test Ban Treaty (1963), and a shift towards managed coexistence.' },
      { n: 12, f: 'Why did the Warsaw Pact invade Czechoslovakia in August 1968?', b: 'To end Dubček’s Prague Spring reforms, which Moscow feared would weaken communist control. The Brezhnev Doctrine justified intervention to protect communism.' },
    ]),
    // Paper 1 Section B: four options
    ...sub(P1, 'paper-1-section-b-9245', '3.1.2', [
      { n: 1, f: 'How should you answer a Section B essay question on causes?', b: 'Weigh, do not list: give the factors, explain how each contributed, then judge which mattered most and why.' },
      { n: 2, f: 'Origins of the First World War: who were in the Triple Alliance and Triple Entente?', b: 'Triple Alliance (1882): Germany, Austria-Hungary, Italy. Triple Entente (by 1907): Britain, France, Russia.' },
      { n: 3, f: 'Origins of the First World War: what was the naval race?', b: 'Anglo-German competition to build battleships, especially after Britain launched HMS Dreadnought in 1906. It pushed Britain closer to France and Russia.' },
      { n: 4, f: 'Origins of the First World War: what was Germany’s “blank cheque” (July 1914)?', b: 'Germany’s promise of unconditional support to Austria-Hungary in its dealings with Serbia after the assassination of Franz Ferdinand.' },
      { n: 5, f: 'Hitler’s foreign policy: list the steps from 1935 to September 1939', b: 'Rearmament (1935) → Rhineland remilitarised (1936) → Anschluss (March 1938) → Munich Agreement (September 1938) → rest of Czechoslovakia (March 1939) → Nazi–Soviet Pact (August 1939) → invasion of Poland (September 1939).' },
      { n: 6, f: 'Give two arguments for and two against appeasement', b: 'For: Britain was militarily unprepared, and public opinion feared another war. Against: it fed Hitler’s ambitions and betrayed Czechoslovakia.' },
      { n: 7, f: 'Why is the Nazi–Soviet Pact called the immediate enabler of war in 1939?', b: 'It removed the risk of a two-front war and gave Hitler a free hand in Poland, which is why war followed within days.' },
      { n: 8, f: 'Hitler’s foreign policy: what was Operation Barbarossa?', b: 'The German invasion of the USSR on 22 June 1941, breaking the Nazi–Soviet Pact.' },
      { n: 9, f: 'Origins of the Cold War: how did the situation change between Yalta and Potsdam in 1945?', b: 'By Potsdam (July 1945) Roosevelt had died, the war in Europe was over and the atomic bomb had been tested. Truman’s harder line and the Red Army in Eastern Europe made disagreements explicit.' },
      { n: 10, f: 'Origins of the Cold War: list the key developments 1947–55', b: 'Truman Doctrine and Marshall Plan (1947), Cominform (1947), Berlin Blockade and Airlift (1948–49), NATO (1949), Warsaw Pact (1955).' },
      { n: 11, f: 'Détente: what were SALT I (1972) and the Helsinki Accords (1975)?', b: 'SALT I limited US and Soviet strategic nuclear weapons. At Helsinki, the Western and Eastern blocs accepted Europe’s post-war borders and agreed to respect human rights.' },
      { n: 12, f: 'Why did détente end around 1979–80?', b: 'The Soviet invasion of Afghanistan in December 1979. The USA did not ratify SALT II and boycotted the 1980 Moscow Olympics.' },
      { n: 13, f: 'How did Gorbachev’s policies help end the Cold War?', b: 'Glasnost (openness) and perestroika (restructuring) from 1985, arms control such as the INF Treaty (1987), and refusing to use force to keep Eastern European regimes in power.' },
      { n: 14, f: 'When did the Berlin Wall fall and the USSR break up?', b: 'The Berlin Wall opened on 9 November 1989. The Soviet Union was dissolved in December 1991.' },
    ]),

    // Paper 2 Section A: Societies in change
    ...sub(P2, 'paper-2-section-a-9245', '3.2.1', [
      { n: 1, f: 'How should you revise a Section A society-in-change option?', b: 'Build a timeline of three or four genuine turning points and, for each, prepare what changed, why it changed at that moment, and how it connects to the turning points before and after.' },
      { n: 2, f: 'How should you answer the Paper 2 extended question on a named factor?', b: 'Explain the named factor’s contribution with an example, weigh it against at least one other cause from your studied content, then judge how far the named factor explains the change.' },
      { n: 3, f: 'Life in Germany 1919–49: what was hyperinflation (1923) and how did it affect Germans?', b: 'Prices rose so fast that money became worthless. Savers and people on fixed incomes were ruined, while debtors could pay off loans cheaply.' },
      { n: 4, f: 'Life in Germany 1919–49: how did the Nazis try to control young people?', b: 'Through the Hitler Youth and League of German Girls (membership was made compulsory by the late 1930s) and a school curriculum rewritten around Nazi ideas of race and loyalty.' },
      { n: 5, f: 'Life in Germany 1919–49: how was Germany divided after 1945?', b: 'Into four occupation zones (US, British, French and Soviet), with Berlin also divided. In 1949 the West became the Federal Republic (May) and the East the German Democratic Republic (October).' },
      { n: 6, f: 'Life in Russia 1914–53: how did the First World War affect ordinary Russians?', b: 'Huge casualties, food and fuel shortages in the cities, and rising prices, which fuelled the protests that brought down the Tsar in 1917.' },
      { n: 7, f: 'Life in Russia 1914–53: how did collectivisation change peasant life?', b: 'From 1929 private farms were merged into collective farms; kulaks were deported, and the famine of 1932–33 killed millions.' },
      { n: 8, f: 'Life in Russia 1914–53: what was the Stakhanovite movement?', b: 'A 1930s campaign that rewarded workers who exceeded production targets, named after the miner Alexei Stakhanov, who in 1935 was reported to have dug far more than his quota.' },
      { n: 9, f: 'Life in the USA 1920–68: who did not share in the 1920s boom?', b: 'Farmers facing falling prices, workers in older industries such as coal and textiles, and many Black Americans and recent immigrants.' },
      { n: 10, f: 'Life in the USA 1920–68: how did the New Deal change the role of the federal government?', b: 'From 1933 it took responsibility for relief and recovery, created agencies such as the CCC and TVA, and introduced the Social Security Act (1935).' },
      { n: 11, f: 'Life in the USA 1920–68: what did the Montgomery Bus Boycott (1955–56) achieve?', b: 'After Rosa Parks’s arrest, a year-long boycott led to the Supreme Court ruling that segregation on buses was unconstitutional.' },
      { n: 12, f: 'Life in the USA 1920–68: what was the March on Washington (August 1963)?', b: 'A mass civil rights demonstration at which Martin Luther King gave his “I have a dream” speech. It built support for the Civil Rights Act of 1964.' },
    ]),
    // Paper 2 Section B: Thematic studies
    ...sub(P2, 'paper-2-section-b-9245', '3.2.2', [
      { n: 1, f: 'How should you revise a thematic study that runs from c800 to the present?', b: 'Prepare a small set of well-evidenced examples spread across eras (early, middle and modern) rather than trying to cover every century evenly. This supports questions about the pace of change.' },
      { n: 2, f: 'Why is change not the same as progress in a thematic study?', b: 'Change can be uneven: rapid breakthroughs can be followed by long periods of slow progress, or setbacks that reverse earlier gains. Naming a setback shows a stronger grasp of change.' },
      { n: 3, f: 'Medicine and change: what was Ibn Sina’s Canon of Medicine?', b: 'A medical encyclopedia completed around 1025, which became a standard textbook in the Islamic world and in European universities for centuries.' },
      { n: 4, f: 'Medicine and change: what did Vesalius (1543) and Harvey (1628) show?', b: 'Vesalius’s The Fabric of the Human Body corrected Galen’s anatomy through dissection. Harvey showed that the heart pumps blood round the body in a circulation.' },
      { n: 5, f: 'Medicine and change: what did Jenner do in 1796?', b: 'He used cowpox to give immunity to smallpox, the first vaccination.' },
      { n: 6, f: 'Medicine and change: how did surgery improve in the 19th century?', b: 'Anaesthetics (chloroform, used by Simpson from 1847) reduced pain, and Lister’s antiseptic carbolic acid (1867) reduced infection.' },
      { n: 7, f: 'Medicine and change: what were the key steps in developing penicillin?', b: 'Fleming noticed its effect on bacteria in 1928; Florey and Chain turned it into a usable drug around 1940; it was mass-produced during the Second World War.' },
      { n: 8, f: 'Medicine and change: what was discovered about DNA in 1953?', b: 'Crick and Watson, using X-ray work by Rosalind Franklin, identified its double-helix structure, the basis of modern genetics.' },
      { n: 9, f: 'Technology and change: why was the printing press (c1450) a turning point?', b: 'Gutenberg’s movable-type press made books cheaper and faster to produce, so ideas spread far more quickly.' },
      { n: 10, f: 'Technology and change: why was the steam engine important?', b: 'James Watt’s improved engine (patented 1769) powered factories, mines and later railways and ships, driving the Industrial Revolution.' },
      { n: 11, f: 'Technology and change: when did the railway age begin in Britain?', b: 'The Stockton and Darlington Railway opened in 1825 and the Liverpool and Manchester Railway, the first intercity line with steam locomotives, in 1830.' },
      { n: 12, f: 'Technology and change: who invented the World Wide Web, and when?', b: 'Tim Berners-Lee, working at CERN, proposed it in 1989.' },
    ]),
  ],
};
