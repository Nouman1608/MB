/**
 * D-444 -- flashcards for OxfordAQA International GCSE History 9245
 * (specification Version 1.1).
 *
 * The syllabus record has one subtopic per paper section (each section is a
 * choice of options), so each block covers every option in that section.
 * Card ids are `<subtopic number>-<n>` and are permanent (browser progress is
 * keyed by them): add a new card with the next unused n, never renumber.
 *
 * The section blocks (3.1.1, 3.1.2, 3.2.1, 3.2.2) were written from Marlbridge's
 * own 9245 revision notes and study guides (the Section A source booklet and
 * question types, the Paper 2 method) and standard textbook dates and facts;
 * every card in them is authored. Each option (3.1.1.1 to 3.2.2.2) has its own
 * block of cards, written from that option's revision-notes page, and those
 * cards carry it as their source. The syllabus record also holds the section
 * subtopics, so both levels have cards.
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

const WPS = 'oxfordaqa-igcse-world-history-9245-wider-peace-settlement-revision-notes';
const CCW = 'oxfordaqa-igcse-world-history-9245-crises-of-the-cold-war-revision-notes';
const OWW = 'oxfordaqa-igcse-world-history-9245-origins-of-the-first-world-war-revision-notes';
const HFP = 'oxfordaqa-igcse-world-history-9245-hitlers-foreign-policy-second-world-war-revision-notes';
const OCW = 'oxfordaqa-igcse-world-history-9245-origins-development-of-the-cold-war-revision-notes';
const DCC = 'oxfordaqa-igcse-world-history-9245-detente-and-the-collapse-of-communism-revision-notes';
const PWG = 'oxfordaqa-igcse-world-history-9245-post-war-germany-1945-1949-revision-notes';
const GPW = 'oxfordaqa-igcse-world-history-9245-great-patriotic-war-and-late-stalinism-revision-notes';
const LUS = 'oxfordaqa-igcse-world-history-9245-life-in-the-usa-revision-notes';
const PRR = 'oxfordaqa-igcse-world-history-9245-printing-revolution-revision-notes';
const MIM = 'oxfordaqa-igcse-world-history-9245-medieval-islamic-medicine-revision-notes';

export const DECK_OXFORDAQA_IGCSE_WORLD_HISTORY: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'igcse',
  subjectSlug: 'world-history',
  // D-484: recorded on the owner's word (16 Nov 2026), accountable teacher for this course.
  deckReview: { reviewerSlug: 'azam-siddique', reviewedOn: '2026-11-16' },
  syllabusCode: '9245',
  syllabusSeries: 'Version 1.1',
  author: 'marlbridge-academic-team',
  updated: '2026-11-20',
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
    ...sub(P1, 'peacemaking-and-the-league-of-nations-9245', '3.1.1.1', [
      { n: 1, f: 'What did the Treaty of Saint-Germain (1919) do to Austria?', b: 'It recognised Czechoslovakia, Poland, Hungary and Yugoslavia, gave South Tyrol and Trieste to Italy, limited the army to 30,000 and forbade union with Germany. Austria was left small, landlocked and needing a League loan by 1922.', src: WPS },
      { n: 2, f: 'Why was the Treaty of Trianon (1920) the most resented of the wider treaties?', b: 'Hungary lost about two-thirds of its territory: Transylvania to Romania, Slovakia and Ruthenia to Czechoslovakia, Croatia to Yugoslavia. Over three million Hungarians were left outside the borders. The cry was "No, no, never!"', src: WPS },
      { n: 3, f: 'What did Bulgaria lose under the Treaty of Neuilly (1919)?', b: 'Western Thrace to Greece (so it lost its Aegean coast) and land to Yugoslavia. Its army was limited to 20,000 and it paid reparations. The result was refugees and hostility to its neighbours.', src: WPS },
      { n: 4, f: 'Treaty of Sèvres (1920): what were its terms and why was it never enforced?', b: 'Arab lands became mandates (Syria and Lebanon to France; Iraq and Palestine to Britain), Smyrna and eastern Thrace went to Greece, the Straits were internationalised and Armenia was independent. Kemal’s nationalists rejected it.', src: WPS },
      { n: 5, f: 'Why is the Treaty of Lausanne (1923) different from the other peace treaties?', b: 'It was negotiated rather than imposed, after Turkish nationalists overturned Sèvres by force. Turkey kept Anatolia, Smyrna and eastern Thrace, paid no reparations and agreed a Greek-Turkish population exchange.', src: WPS },
      { n: 6, f: 'What was the Italian “mutilated victory”?', b: 'Italian nationalists’ complaint that the settlement did not give Italy all the land, such as Dalmatia, promised in the 1915 Treaty of London. D’Annunzio seized Fiume in September 1919.', src: WPS },
      { n: 7, f: 'Give a strength and a difficulty of the wider peace settlement', b: 'Strength: new nations for Poles, Czechs, Slovaks and South Slavs, with minority treaties and League supervision.\nDifficulty: minorities in every new state (about three million German speakers in Czechoslovakia), weak economies and revisionism.', src: WPS },
    ]),
    ...sub(P1, 'crises-of-the-cold-war-9245', '3.1.1.2', [
      { n: 1, f: 'Why was the Berlin Wall built in August 1961?', b: 'About three million East Germans had fled through West Berlin since 1949. The border was closed on 13 August 1961. Kennedy protested but did not use force, and the Wall became a symbol of division.', src: CCW },
      { n: 2, f: 'How was the Cuban Missile Crisis resolved?', b: 'After a naval “quarantine” announced on 22 October 1962, the missiles were removed on 28 October. The USA promised not to invade Cuba and secretly removed its missiles from Turkey.', src: CCW },
      { n: 3, f: 'What was the nuclear deterrent, and what were its risks?', b: 'The belief that fear of mutual destruction kept the peace, backed by ICBMs and Polaris submarines. The risks were accident and miscalculation. The space race (Gagarin 1961, Apollo 11 1969) ran alongside.', src: CCW },
      { n: 4, f: 'What were the Prague Spring and the Brezhnev Doctrine?', b: 'In 1968 Dubček’s reforms promised “socialism with a human face”. The USSR feared they would spread and invaded. The Brezhnev Doctrine claimed the right to intervene in any communist state; the West protested but took no action.', src: CCW },
      { n: 5, f: 'What was the Domino Theory, and why were Strategic Hamlets unpopular?', b: 'Domino Theory: if one state fell to communism its neighbours would follow. Strategic Hamlets moved peasants into fortified villages to cut them off from the Vietcong, and were resented.', src: CCW },
      { n: 6, f: 'How did the USA escalate the Vietnam War under Johnson?', b: 'After the Gulf of Tonkin incident (August 1964), Rolling Thunder bombing and the first US combat troops arrived in March 1965. There were over 500,000 troops by 1968, with search and destroy tactics, napalm and Agent Orange.', src: CCW },
      { n: 7, f: 'Why was the Tet Offensive (January 1968) important?', b: 'It was a military defeat for the communists but a political success: it showed the USA was not winning and turned American opinion against the war.', src: CCW },
      { n: 8, f: 'How did the USA leave Vietnam?', b: 'Nixon’s Vietnamisation (1969) handed fighting to South Vietnamese forces. After heavy bombing and the Kent State shootings (1970), the Paris agreement came in January 1973. Saigon fell in April 1975.', src: CCW },
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
    ...sub(P1, 'origins-of-the-first-world-war-9245', '3.1.2.1', [
      { n: 1, f: 'Franco-Russian Alliance, Entente Cordiale and Anglo-Russian Agreement: how did they differ?', b: 'The Franco-Russian Alliance (1894) was a binding alliance that left Germany fearing war on two fronts. Britain’s Entente Cordiale (1904) and Anglo-Russian Agreement (1907) were understandings, not binding military alliances.', src: OWW },
      { n: 2, f: 'What was Weltpolitik, and what did Tirpitz’s Navy Laws do?', b: 'Weltpolitik was Wilhelm II’s drive for a world role, colonies and “a place in the sun”. Tirpitz’s Navy Laws (from 1898) challenged British naval supremacy and pushed Britain closer to France and Russia.', src: OWW },
      { n: 3, f: 'What happened in the two Moroccan Crises?', b: '1905: the Kaiser at Tangier backed Moroccan independence; Algeciras (1906) supported France. 1911: the gunboat Panther at Agadir; Britain backed France. Both strengthened the Entente.', src: OWW },
      { n: 4, f: 'Bosnian Crisis (1908–09) and Balkan Wars (1912–13): what was their effect?', b: 'Austria-Hungary annexed Bosnia, angering Serbia and forcing Russia to back down. The Balkan Wars defeated the Ottoman Empire, strengthened Serbia, created Albania and alarmed Austria-Hungary.', src: OWW },
      { n: 5, f: 'What happened in the July Crisis of 1914?', b: 'Franz Ferdinand was shot at Sarajevo on 28 June by Gavrilo Princip. Austria-Hungary sent Serbia an ultimatum of ten demands on 23 July and declared war on 28 July. Russia mobilised to defend Serbia.', src: OWW },
      { n: 6, f: 'What was the Schlieffen Plan, and why did Britain declare war on 4 August 1914?', b: 'Germany planned to defeat France quickly through Belgium, then turn on Russia. The invasion of neutral Belgium, whose neutrality Britain guaranteed in 1839, brought Britain in.', src: OWW },
      { n: 7, f: 'Which states bear responsibility for the outbreak of war in 1914?', b: 'Germany (blank cheque, Schlieffen Plan, naval race); Austria-Hungary (a hard ultimatum); Serbia (nationalism); Russia (early mobilisation); Britain and France (alliances). Diplomacy failed because of alliance commitments and military timetables.', src: OWW },
    ]),
    ...sub(P1, 'hitlers-foreign-policy-and-the-origins-of-the-second-world-war-9245', '3.1.2.2', [
      { n: 1, f: 'What were Hitler’s foreign policy aims?', b: 'Overturn the Treaty of Versailles, rearm Germany, unite German-speaking peoples (Austria, the Sudetenland), win Lebensraum (living space) in the east and destroy communism.', src: HFP },
      { n: 2, f: 'How did Hitler break free of Versailles in 1933–35?', b: 'He left the Disarmament Conference and the League (October 1933), won the Saar plebiscite with about 90 per cent (January 1935) and announced conscription and the Luftwaffe (March 1935).', src: HFP },
      { n: 3, f: 'Why did the Anglo-German Naval Agreement (1935) damage the Stresa Front?', b: 'Britain agreed that Germany could build a navy 35 per cent the size of Britain’s without consulting France or Italy. This implied acceptance of treaty breaking and split the Stresa Front.', src: HFP },
      { n: 4, f: 'How did Britain and France react to the Rhineland (1936) and the Anschluss (1938)?', b: 'Rhineland, March 1936: France would not act alone and Britain did not oppose. Anschluss, 12 March 1938: they only protested. Each success encouraged Hitler to risk more.', src: HFP },
      { n: 5, f: 'What were the Rome-Berlin Axis, the Anti-Comintern Pact and the role of the Spanish Civil War?', b: 'The Axis (1936) linked Italy and Germany; the Anti-Comintern Pact joined Germany and Japan (Italy in 1937). Germany’s Condor Legion helped Franco and bombed Guernica; Britain and France followed non-intervention.', src: HFP },
      { n: 6, f: 'What was agreed at the Munich Conference, 29–30 September 1938?', b: 'Britain, France, Germany and Italy gave the Sudetenland (three million Germans) to Germany. Czechoslovakia and the USSR were not invited. Hitler promised no more territorial demands.', src: HFP },
      { n: 7, f: 'What events led from March 1939 to war?', b: 'Hitler took the rest of Czechoslovakia (March 1939), breaking Munich. Britain guaranteed Poland (31 March). The Nazi-Soviet Pact (23 August) secretly divided Poland. Germany invaded on 1 September; Britain and France declared war on 3 September.', src: HFP },
      { n: 8, f: 'Which events in 1941 made the Second World War global?', b: 'Germany’s invasion of the USSR (Operation Barbarossa, 22 June 1941) and Japan’s attack on Pearl Harbor (7 December 1941), which brought the USA into the war.', src: HFP },
    ]),
    ...sub(P1, 'origins-and-development-of-the-cold-war-9245', '3.1.2.3', [
      { n: 1, f: 'What was agreed at Yalta, and how did the atomic bomb change relations?', b: 'Yalta (February 1945): Germany and Berlin in four zones, free elections in eastern Europe and a United Nations. The atomic bombs ended the war but unsettled Stalin and started an arms race.', src: OCW },
      { n: 2, f: 'What were the Truman Doctrine and containment?', b: 'The Truman Doctrine (March 1947) gave aid to Greece and Turkey. Containment was the policy of stopping the spread of communism, and it committed the USA to resisting it.', src: OCW },
      { n: 3, f: 'What was the Marshall Plan, and how did the USSR respond?', b: 'US aid to rebuild Europe (June 1947), accepted by 16 states. The USSR refused it and set up Cominform (1947) and Comecon (1949), hardening the division of Europe.', src: OCW },
      { n: 4, f: 'What was the significance of Czechoslovakia (1948) and Tito?', b: 'The communist takeover of Czechoslovakia in February 1948 alarmed the West. Tito’s expulsion from Cominform in 1948 showed the communist bloc was not united.', src: OCW },
      { n: 5, f: 'What caused the Berlin Blockade, and how did the West respond?', b: 'The western zones merged and introduced a new currency in 1948. Stalin cut land routes into West Berlin in June 1948. The Airlift supplied the city until May 1949.', src: OCW },
      { n: 6, f: 'Why were NATO and the Warsaw Pact formed?', b: 'NATO (April 1949, twelve states) gave the West collective defence. The Warsaw Pact (1955) was the communist reply to West Germany joining NATO.', src: OCW },
      { n: 7, f: 'What happened in the Korean War, 1950–53?', b: 'North Korea invaded the South in June 1950. A UN force under MacArthur responded, China entered, and a stalemate followed. Truman sacked MacArthur (1951) and an armistice came in 1953.', src: OCW },
      { n: 8, f: 'What was the Thaw, and how did it end in Hungary?', b: 'After Stalin died (1953), Khrushchev offered peaceful co-existence and Austria became neutral (1955). In 1956 Nagy’s reforms in Hungary were crushed by Soviet tanks on 4 November, and the West did not intervene.', src: OCW },
    ]),
    ...sub(P1, 'detente-and-the-collapse-of-communism-9245', '3.1.2.4', [
      { n: 1, f: 'Why did the USSR and the USA want détente?', b: 'USSR: the cost of the arms race, trade and technology, recognition of its frontiers and fear of China. USA: to end the Vietnam War, reduce costs and use the Sino-Soviet split.', src: DCC },
      { n: 2, f: 'What was Ostpolitik?', b: 'West Germany’s policy of better relations with the Soviet bloc under Willy Brandt, with treaties with the USSR, Poland and East Germany.', src: DCC },
      { n: 3, f: 'What did the ABM Treaty and SALT I (1972) agree?', b: 'The ABM Treaty limited defensive missile systems. SALT I froze the number of strategic missile launchers for five years; warheads were not limited.', src: DCC },
      { n: 4, f: 'What was agreed in the Helsinki Accords (1975)?', b: 'Thirty-five states recognised Europe’s frontiers (the Soviet aim) and promised to respect human rights (the western aim).', src: DCC },
      { n: 5, f: 'Why did détente collapse after 1979?', b: 'The USSR invaded Afghanistan (December 1979). Carter withdrew SALT II from the Senate, imposed a grain embargo and led the 1980 Olympic boycott. Reagan called the USSR an “evil empire” and announced SDI (1983).', src: DCC },
      { n: 6, f: 'How did détente re-emerge under Gorbachev?', b: 'Gorbachev needed economic reform and lower arms costs. Geneva (1985) and Reykjavik (1986) led to the INF Treaty (1987), which removed intermediate-range missiles, and START (1991).', src: DCC },
      { n: 7, f: 'What was Solidarity?', b: 'The independent Polish trade union founded in 1980 under Lech Walesa, with about ten million members. It was suppressed by martial law in 1981 but won the 1989 elections.', src: DCC },
      { n: 8, f: 'How did communism collapse in 1989–91?', b: 'Gorbachev gave up the Brezhnev Doctrine, so Poland, Hungary, East Germany and Czechoslovakia (the Velvet Revolution) changed peacefully. The Berlin Wall opened on 9 November 1989 and Gorbachev resigned on 25 December 1991.', src: DCC },
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
    ...sub(P2, 'life-in-germany-9245', '3.2.1.1', [
      { n: 1, f: 'What was “zero hour” in Germany in 1945, and what were everyday problems?', b: 'Zero hour (Stunde Null) was the collapse of May 1945. Cities were in ruins, rations were low and people bartered or used the black market, with cigarettes as currency. Trümmerfrauen cleared the rubble.', src: PWG },
      { n: 2, f: 'Who were the expellees in post-war Germany?', b: 'Germans forced out of lands such as those east of the Oder-Neisse line and the Sudetenland after the war, with transfers approved at Potsdam. Estimates are commonly twelve million or more. Refugees, by contrast, had fled.', src: PWG },
      { n: 3, f: 'What were the Potsdam aims for Germany, and how was it governed?', b: 'To demilitarise, denazify, democratise and decentralise. Germany had four zones (US, British, French, Soviet) and Berlin four sectors, under an Allied Control Council. The zones drifted apart as the Cold War grew.', src: PWG },
      { n: 4, f: 'How did denazification work, and why was it criticised?', b: 'In the west, questionnaires and tribunals sorted people from major offenders to exonerated. It was slow and inconsistent, and many were reinstated. In the Soviet zone it removed old elites and reshaped society.', src: PWG },
      { n: 5, f: 'What were the Nuremberg Trials?', b: 'The International Military Tribunal (November 1945 to October 1946) charged crimes against peace, war crimes and crimes against humanity. Twelve were sentenced to death and three acquitted; “following orders” was no defence.', src: PWG },
      { n: 6, f: 'How were reparations taken from the Soviet zone?', b: 'Factories, railway lines and machinery were dismantled and taken to the USSR, and goods from current production were taken later. The SED was formed by forced merger (April 1946). Recovery was slower than in the west.', src: PWG },
      { n: 7, f: 'How did the Deutsche Mark and the Berlin Blockade affect Germans?', b: 'The Deutsche Mark (June 1948) and the end of price controls filled shops and cut the black market. During the Blockade (June 1948 to May 1949) about two million West Berliners were supplied by air, with power cuts and cold.', src: PWG },
      { n: 8, f: 'How was Germany divided into two states in 1949?', b: 'The Federal Republic was founded in May 1949 (Basic Law, Bonn; Adenauer chancellor from September). The German Democratic Republic followed in October 1949 as a one-party SED state.', src: PWG },
    ]),
    ...sub(P2, 'life-in-russia-and-the-ussr-9245', '3.2.1.2', [
      { n: 1, f: 'How did the Soviet economy cope in the Great Patriotic War?', b: 'Over 1,500 factories were moved east in 1941 and restarted. There was total war production, longer hours and strict rationing, helped by Lend-Lease aid. About 27 million Soviet people died.', src: GPW },
      { n: 2, f: 'What was Order No. 227 (July 1942)?', b: '“Not one step back”: retreat without orders was treated as treason. It was enforced with penal battalions and NKVD units behind the lines.', src: GPW },
      { n: 3, f: 'Give strengths and weaknesses of Stalin’s wartime leadership', b: 'Weaknesses: ignored warnings, purged officers, early encirclements such as Kiev. Strengths: chaired the State Defence Committee, stayed in Moscow, made patriotic appeals, trusted Zhukov and won at Stalingrad and Kursk.', src: GPW },
      { n: 4, f: 'Which peoples were deported during the war?', b: 'Volga Germans in 1941, then Chechens, Ingush and Crimean Tatars in 1944, accused of disloyalty.', src: GPW },
      { n: 5, f: 'What did women contribute to the Soviet war effort, and who was Lyudmila Pavlichenko?', b: 'Women kept factories, mines and farms working and served as medics, snipers, pilots and tank crew. Pavlichenko, a sniper credited with 309 kills, toured Allied countries in 1942 as propaganda.', src: GPW },
      { n: 6, f: 'What was Soviet reconstruction like after 1945?', b: 'The Fourth Five-Year Plan put heavy industry first. Famine hit in 1946–47. Rationing ended in December 1947 with a currency reform that wiped out savings. Housing was scarce and consumer goods few.', src: GPW },
      { n: 7, f: 'What was High Stalinism (1945–53)?', b: 'A cult of Stalin as victor, Zhdanov’s attacks on writers such as Akhmatova, the anti-“cosmopolitan” campaign, the Leningrad Affair (1949) and the Doctors’ Plot (January 1953), with the Gulag at its peak.', src: GPW },
      { n: 8, f: 'What happened to Beria after Stalin’s death?', b: 'Stalin died on 5 March 1953. Beria, NKVD chief from 1938 who ran the atomic project, was arrested in June 1953 and executed in December.', src: GPW },
    ]),
    ...sub(P2, 'life-in-the-usa-9245', '3.2.1.3', [
      { n: 1, f: 'What caused the economic boom of the 1920s?', b: 'Laissez-faire Republican governments, low taxes and tariffs, mass production (Ford), new industries, credit and hire purchase, advertising and share buying on the margin.', src: LUS },
      { n: 2, f: 'What were the effects of Prohibition (1920–33)?', b: 'Alcohol was banned, but speakeasies flourished, gangsters such as Al Capone ran the trade and corruption spread, so it was hard to enforce.', src: LUS },
      { n: 3, f: 'How did the USA respond to immigration and the Red Scare?', b: 'The Quota Act (1921) and National Origins Act (1924) restricted immigration. The Palmer Raids (1919–20) and the Sacco and Vanzetti case showed fear of communists and anarchists.', src: LUS },
      { n: 4, f: 'What was life like in the Depression, and how did Hoover respond?', b: 'About 25 per cent unemployment by 1933, bank failures, farm foreclosures, the Dust Bowl and Hoovervilles. Hoover believed in rugged individualism and gave limited help; the Bonus Army was cleared in 1932.', src: LUS },
      { n: 5, f: 'Name six New Deal agencies and measures and their purposes', b: 'CCC: conservation jobs for young men. AAA: farm prices. TVA: dams and electricity. WPA: public works jobs. Social Security Act (1935): pensions and insurance. Wagner Act: union rights.', src: LUS },
      { n: 6, f: 'What were the limits of the New Deal?', b: 'Unemployment was still high in 1938, and African Americans, women and tenant farmers gained less. The Supreme Court struck down the NRA and AAA; Republicans said it was too much, Huey Long not enough.', src: LUS },
      { n: 7, f: 'How did the Second World War affect Americans?', b: 'War production ended mass unemployment and women worked in factories. Discrimination in defence industries was banned in 1941, but about 120,000 Japanese Americans were interned in 1942 and riots hit Detroit in 1943.', src: LUS },
      { n: 8, f: 'What was McCarthyism?', b: 'Accusing people of being communists with little evidence, fuelled by fear of communism. HUAC and blacklists ruined careers until McCarthy was censured in 1954.', src: LUS },
      { n: 9, f: 'What did Brown v. Board of Education (1954) and the Little Rock Nine (1957) show?', b: 'Brown ruled segregated schools unconstitutional. At Little Rock, Eisenhower sent federal troops to protect nine Black students entering a white high school.', src: LUS },
      { n: 10, f: 'Which federal laws advanced civil rights in the 1960s?', b: 'The Civil Rights Act (1964), the Voting Rights Act (1965) and the Civil Rights Act on housing (1968). Television coverage of violence against protesters helped build support.', src: LUS },
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
    ...sub(P2, 'technology-and-change-9245', '3.2.2.1', [
      { n: 1, f: 'Printing in Asia before Gutenberg: name three early milestones', b: 'The Diamond Sutra (868, China) is the earliest dated printed book. Bi Sheng made clay movable type in the 1040s. The Jikji was printed with metal type in Korea in 1377.', src: PRR },
      { n: 2, f: 'What four elements made up Gutenberg’s printing system?', b: 'Metal type cast in a hand mould (identical, reusable letters), a screw press for even pressure, oil-based ink that stuck to metal, and paper, which was cheaper than parchment.', src: PRR },
      { n: 3, f: 'What were the economics of early printing?', b: 'High start-up costs but a low cost per copy. Printers risked unsold stock, so many failed. They needed merchants as investors (Fust sued Gutenberg) and sold at fairs such as Frankfurt.', src: PRR },
      { n: 4, f: 'How did the printing industry develop typefaces and layouts?', b: 'Centres grew in Mainz, Venice and Westminster (Caxton, 1476). Aldus Manutius introduced italic type in Venice in 1501. Books gained title pages, page numbers, indexes and engraved illustrations.', src: PRR },
      { n: 5, f: 'What new jobs did printing create, and where did women fit in?', b: 'Typefounders, compositors, pressmen, proofreaders, illustrators, binders, booksellers and publishers. Widows ran presses (Charlotte Guillard in Paris), and women worked as compositors, binders, sellers and authors.', src: PRR },
      { n: 6, f: 'How did printing affect language and law?', b: 'Books moved from Latin to the vernacular (Luther’s German New Testament 1522, Tyndale’s English 1526). The Stationers’ Company (1557) and the Statute of Anne (1710), the first copyright law, began intellectual property.', src: PRR },
      { n: 7, f: 'How did printing help the Renaissance and the Reformation?', b: 'It shared accurate classical texts (Erasmus’s Greek New Testament, 1516). Luther’s ideas spread quickly in illustrated pamphlets and vernacular Bibles, while the Catholic Church responded with censorship and the 1559 Index.', src: PRR },
      { n: 8, f: 'How did printing help scientific progress and spread worldwide?', b: 'Identical diagrams and data allowed Copernicus and Vesalius (1543) and Newton’s Principia (1687); journals began in 1665. Presses reached Mexico City and, in the 1720s, Istanbul.', src: PRR },
    ]),
    ...sub(P2, 'medicine-and-change-9245', '3.2.2.2', [
      { n: 1, f: 'What was the Translation Movement?', b: 'The translation of Greek, Persian and Indian works into Arabic, especially in Baghdad’s House of Wisdom under al-Ma’mun, from the eighth to tenth centuries. Hunayn ibn Ishaq translated Galen accurately.', src: MIM },
      { n: 2, f: 'What was Al-Razi known for?', b: 'Careful observation and case records, distinguishing smallpox from measles, and writing Doubts about Galen. He also directed a hospital.', src: MIM },
      { n: 3, f: 'What did Ibn Sina (Avicenna) contribute to medicine?', b: 'The Canon of Medicine (c1025), which gathered medical knowledge, discussed contagion and set rules for testing drugs. It was translated into Latin in the twelfth century.', src: MIM },
      { n: 4, f: 'What was Al-Zahrawi’s contribution to surgery?', b: 'Working in Córdoba, he wrote the Kitab al-Tasrif, whose surgery volume showed around 200 instruments and techniques such as cautery, ligatures and catgut.', src: MIM },
      { n: 5, f: 'What were five features of a bimaristan?', b: 'Free care funded by charitable endowments; separate wards by sex and illness; pharmacies, libraries and kitchens; teaching of students; and patient records.', src: MIM },
      { n: 6, f: 'What did Al-Kindi and Ibn al-Baytar contribute to pharmacology?', b: 'Al-Kindi used mathematics to measure the strength of compound drugs. Ibn al-Baytar’s Compendium on Simple Medicaments described about 1,400 medicinal substances.', src: MIM },
      { n: 7, f: 'How did Islamic cities protect public health?', b: 'Ritual washing and public baths (hammams), aqueducts, qanats, wells and fountains, drains and waste removal, and muhtasib market inspectors checking food, cleanliness and traders.', src: MIM },
      { n: 8, f: 'How did Islamic medicine reach Europe and Asia?', b: 'Constantine the African translated Arabic texts into Latin in the eleventh century, and Gerard of Cremona translated the Canon and Al-Zahrawi at Toledo. It spread via Spain, Sicily and Salerno, and to Asia as Unani medicine.', src: MIM },
      { n: 9, f: 'How did medical practice in the Islamic world differ from medieval Europe?', b: 'Bimaristans gave treatment by physicians, whereas most European religious hospitals offered rest, food and prayer. Al-Razi questioned Galen, who was rarely challenged in Europe before the sixteenth century.', src: MIM },
    ]),
  ],
};
