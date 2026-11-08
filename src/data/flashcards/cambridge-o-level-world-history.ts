/**
 * D-444 -- flashcards for Cambridge O Level History 2147 (2024-2026).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 * Written from Marlbridge's own 2147 study guides and revision notes (Option A,
 * Option B, Depth Studies). No 2147 revision-notes page maps to a single
 * subtopic, so every card is authored. Where the pages only name a subtopic
 * (1.4 the US Civil War, and the detail of the five Depth Studies) the cards
 * keep to standard textbook dates and facts.
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

const A = 'core-content-option-a-2147';
const B = 'core-content-option-b-2147';
const D = 'depth-studies-2147';

export const DECK_CAMBRIDGE_O_LEVEL_WORLD_HISTORY: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'o-level',
  subjectSlug: 'world-history',
  syllabusCode: '2147',
  syllabusSeries: '2024-2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Core content Option A: the nineteenth century, 1848-1914
    ...sub(A, 'revolutions-1848-2147', '1.1', [
      { n: 1, f: 'What caused the revolutions of 1848?', b: 'Nationalism, liberal demands for constitutions, economic hardship after poor harvests, and the example of the revolution in France.' },
      { n: 2, f: 'Why did the revolutions of 1848 fail?', b: 'The revolutionaries split between liberals and radicals, the middle classes withdrew once property seemed threatened, the peasants stayed largely uninvolved, and the conservative rulers kept control of their armies.' },
      { n: 3, f: 'What happened in France in 1848?', b: 'King Louis-Philippe was overthrown in February 1848 and the Second Republic was declared. Louis Napoleon Bonaparte was elected its president in December 1848.' },
      { n: 4, f: 'What did the Frankfurt Parliament (1848–49) try to do, and why did it fail?', b: 'It tried to create a united, liberal Germany. It had no army of its own, and in 1849 King Frederick William IV of Prussia refused the crown it offered him, so it collapsed.' },
      { n: 5, f: 'How did the revolutions of 1848 affect the Austrian Empire?', b: 'Metternich, the chancellor, resigned and fled in March 1848. The Habsburgs recovered control by force; the Hungarian revolution was crushed in 1849 with Russian help.' },
      { n: 6, f: 'What lesson did 1848 teach about how nations would be unified?', b: 'That unification would come through force and diplomacy by existing states, not through liberal parliaments.' },
    ]),
    ...sub(A, 'unification-italy-2147', '1.2', [
      { n: 1, f: 'What were the main obstacles to Italian unification?', b: 'Austrian control of the north, the Papal States splitting the peninsula, strong regional loyalties and poor communications.' },
      { n: 2, f: 'What did Cavour contribute to Italian unification?', b: 'As prime minister of Piedmont he modernised the state and used diplomacy, winning a French alliance (Plombières, 1858) so that Piedmont could defeat Austria in 1859 and gain Lombardy.' },
      { n: 3, f: 'What was Garibaldi’s Expedition of the Thousand (1860)?', b: 'Garibaldi’s volunteers (the Redshirts) conquered Sicily and Naples. He then handed southern Italy to King Victor Emmanuel II rather than set up a separate republic.' },
      { n: 4, f: 'What was Mazzini’s role in Italian unification?', b: 'He supplied the nationalist ideology: he founded Young Italy (1831) to work for a united, republican Italy, and led the short-lived Roman Republic of 1849.' },
      { n: 5, f: 'When was the Kingdom of Italy proclaimed, and how was unification completed?', b: 'Proclaimed in 1861 with Victor Emmanuel II as king. Venetia was gained in 1866 after Austria’s defeat by Prussia, and Rome in 1870 when French troops left during the Franco-Prussian War.' },
    ]),
    ...sub(A, 'unification-germany-2147', '1.3', [
      { n: 1, f: 'What was the Zollverein and why did it matter for German unification?', b: 'A customs union of German states led by Prussia, formed in 1834 and excluding Austria. It tied the German economies to Prussia.' },
      { n: 2, f: 'What was Bismarck’s method for unifying Germany?', b: '1. Isolate each opponent diplomatically before fighting. 2. Fight a limited war for a defined objective. 3. Stop once that objective is achieved.' },
      { n: 3, f: 'What were Bismarck’s three wars of unification?', b: 'Against Denmark (1864) over Schleswig-Holstein, against Austria (1866) and against France (1870–71).' },
      { n: 4, f: 'What did Prussia gain from the war with Austria in 1866?', b: 'Austria was excluded from German affairs, and Prussia led a new North German Confederation (1867) of the states north of the River Main.' },
      { n: 5, f: 'What was the Ems Telegram and why was it important?', b: 'Bismarck edited a report of the king’s meeting with the French ambassador to make it sound insulting. France declared war in 1870, so the southern German states joined Prussia against a foreign aggressor.' },
      { n: 6, f: 'When and where was the German Empire proclaimed?', b: '18 January 1871, in the Hall of Mirrors at Versailles, with Wilhelm I of Prussia as German Emperor. France lost Alsace-Lorraine.' },
    ]),
    ...sub(A, 'us-civil-war-2147', '1.4', [
      { n: 1, f: 'What were the main long-term causes of the American Civil War?', b: 'Slavery and whether it should spread into the western territories; states’ rights against federal power; and the economic differences between the industrial North and the plantation, cotton-growing South.' },
      { n: 2, f: 'Name three events of the 1850s that increased tension over slavery', b: 'The Compromise of 1850 (including a stricter Fugitive Slave Act), the Kansas–Nebraska Act (1854), and the Supreme Court’s Dred Scott decision (1857).' },
      { n: 3, f: 'What triggered Southern secession in 1860–61?', b: 'The election of Abraham Lincoln, a Republican opposed to the spread of slavery, in November 1860. South Carolina seceded in December 1860 and the Confederacy was formed in February 1861 under Jefferson Davis.' },
      { n: 4, f: 'How did the Civil War begin?', b: 'Confederate forces fired on Fort Sumter, a Union fort in Charleston harbour, in April 1861.' },
      { n: 5, f: 'Why did the North win the Civil War?', b: 'A much larger population, most of the industry and railways, a navy that blockaded Southern ports, and generals such as Grant and Sherman. Gettysburg and Vicksburg (July 1863) were turning points. Lee surrendered at Appomattox in April 1865.' },
      { n: 6, f: 'What were the main results of the Civil War?', b: 'The Union was preserved and slavery was abolished by the 13th Amendment (1865). The 14th (1868) and 15th (1870) Amendments gave citizenship and voting rights, but after Reconstruction ended in 1877 Southern states restricted Black Americans’ rights.' },
      { n: 7, f: 'What was the Emancipation Proclamation?', b: 'Lincoln’s order, in force from 1 January 1863, declaring enslaved people in the Confederate states free. It made the abolition of slavery a war aim.' },
    ]),
    ...sub(A, 'overseas-empires-2147', '1.5', [
      { n: 1, f: 'What were the four main motives for European imperialism in Africa?', b: 'Economic (raw materials such as rubber and cotton, and new markets); strategic (routes such as the Suez Canal and the Cape, and coaling stations); prestige and rivalry (colonies as a mark of great-power status); ideological and religious (the “civilising mission” and missionaries).' },
      { n: 2, f: 'What was the Berlin Conference of 1884–85?', b: 'A meeting of European powers, called by Bismarck, that set rules for claiming African territory. It sped up the “Scramble for Africa”.' },
      { n: 3, f: 'Which African states were still independent in 1914?', b: 'Only Ethiopia (Abyssinia) and Liberia.' },
      { n: 4, f: 'Why was the Battle of Adwa (1896) significant?', b: 'Ethiopian forces under Emperor Menelik II defeated an Italian army, keeping Ethiopia independent.' },
      { n: 5, f: 'Why was the Suez Canal important to Britain?', b: 'Opened in 1869, it shortened the sea route to India. Britain bought shares in it in 1875 and occupied Egypt in 1882, partly to protect it.' },
      { n: 6, f: 'Exam trap: how should imperial motives be presented?', b: 'Group them (economic, strategic, prestige, ideological) and explain each, rather than writing one undifferentiated list.' },
    ]),
    ...sub(A, 'causes-first-world-war-2147', '1.6', [
      { n: 1, f: 'What does MANIA stand for as causes of the First World War?', b: 'Militarism, Alliances, Nationalism, Imperialism, Assassination.' },
      { n: 2, f: 'Who were in the Triple Alliance and the Triple Entente?', b: 'Triple Alliance (1882): Germany, Austria-Hungary, Italy.\nTriple Entente (by 1907): Britain, France, Russia.' },
      { n: 3, f: 'Why did Britain abandon “splendid isolation”?', b: 'German naval expansion threatened British naval supremacy. Britain settled colonial disputes through the Entente Cordiale with France (1904) and the Anglo-Russian agreement (1907).' },
      { n: 4, f: 'What were the Moroccan crises?', b: 'Two crises (1905 and 1911) in which Germany challenged French influence in Morocco. Both times Britain backed France, so the crises strengthened the Entente.' },
      { n: 5, f: 'What was the Bosnian crisis of 1908?', b: 'Austria-Hungary annexed Bosnia-Herzegovina, angering Serbia and Russia. Russia had to back down because Germany supported Austria.' },
      { n: 6, f: 'Why were problems in the Balkans so difficult for the Great Powers to solve?', b: 'As Ottoman power collapsed, Russia backed Serbia and the Slavs while Austria-Hungary feared Serbian nationalism among its own Slav subjects. Each saw vital interests at stake, and the alliances could turn a Balkan quarrel into a general war.' },
      { n: 7, f: 'Summarise the July Crisis of 1914', b: 'Franz Ferdinand assassinated at Sarajevo (28 June) → Austrian ultimatum to Serbia, backed by Germany’s “blank cheque” → Austria declares war (28 July) → Russia mobilises → Germany carries out the Schlieffen Plan → Belgium invaded → Britain declares war (4 August).' },
      { n: 8, f: 'Why did the July Crisis escalate in days rather than months?', b: 'The Schlieffen Plan required Germany to defeat France quickly before turning east, so Russian mobilisation left almost no time for diplomacy. Military timetables set the pace.' },
      { n: 9, f: 'Was the assassination the main cause of the First World War? What judgement is best supported?', b: 'It was the trigger (the spark), not the underlying cause. The long-term tensions had built a system in which any Balkan crisis could escalate. Weigh both and reach an explicit conclusion.' },
    ]),

    // 2 Core content Option B: international relations since 1919
    ...sub(B, 'treaty-of-versailles-2147', '2.1', [
      { n: 1, f: 'What did each of the “Big Three” want at the Paris Peace Conference?', b: 'Wilson (USA): a moderate peace based on his Fourteen Points. Lloyd George (Britain): a peace firm enough for British opinion but not crippling. Clemenceau (France): Germany permanently weakened for French security.' },
      { n: 2, f: 'When was the Treaty of Versailles signed?', b: '28 June 1919, five years to the day after the assassination at Sarajevo.' },
      { n: 3, f: 'What military terms did the Treaty of Versailles impose on Germany?', b: 'Army limited to 100,000 men, no conscription, no air force, no submarines, only six battleships, and the Rhineland demilitarised.' },
      { n: 4, f: 'What territory did Germany lose under the Treaty of Versailles?', b: 'Alsace-Lorraine to France, land to Poland (including the Polish Corridor), all its colonies, and Danzig became a free city. The Saar was run by the League for 15 years, and union with Austria was forbidden.' },
      { n: 5, f: 'What was Article 231 of the Treaty of Versailles?', b: 'The “war guilt” clause: Germany accepted responsibility for the war, which was the basis for reparations. Reparations were set in 1921 at £6,600 million.' },
      { n: 6, f: 'Was the Treaty of Versailles fair? Give one argument each way', b: 'Fair: Germany had caused huge destruction and imposed a harsh treaty on Russia at Brest-Litovsk (1918). Unfair: it was a dictated peace (Diktat), and the resentment it caused was later exploited by Nazi propaganda.' },
    ]),
    ...sub(B, 'league-of-nations-success-2147', '2.2', [
      { n: 1, f: 'What were the aims of the League of Nations?', b: 'To keep peace through collective security, encourage disarmament, and improve working and living conditions worldwide.' },
      { n: 2, f: 'Give two successes of the League of Nations in the 1920s', b: 'It settled the Åland Islands dispute (1921) and the Greek–Bulgarian border clash (1925). Its agencies did useful work on refugees, health and labour conditions.' },
      { n: 3, f: 'Why did the Manchurian crisis (1931–33) weaken the League?', b: 'Japan invaded Manchuria in 1931. The League’s Lytton Report condemned Japan, but Japan simply left the League (1933) and kept Manchuria. No action was taken.' },
      { n: 4, f: 'Why did the Abyssinian crisis (1935–36) discredit the League?', b: 'Italy invaded Abyssinia. Sanctions excluded oil and the Suez Canal stayed open, and the secret Hoare–Laval Pact showed Britain and France were willing to hand Italy much of Abyssinia.' },
      { n: 5, f: 'What were the structural weaknesses of the League of Nations?', b: 'The USA never joined; it had no army of its own and relied on members to act; decisions needed unanimity; and major powers left or ignored it (Japan and Germany left in 1933, Italy in 1937).' },
    ]),
    ...sub(B, 'hitlers-foreign-policy-2147', '2.3', [
      { n: 1, f: 'What were Hitler’s main foreign policy aims?', b: 'To overturn the Treaty of Versailles, unite all German-speaking people in one state, and win “living space” (Lebensraum) in eastern Europe.' },
      { n: 2, f: 'List Hitler’s main foreign policy steps, 1936–39', b: 'Remilitarised the Rhineland (March 1936); Anschluss with Austria (March 1938); gained the Sudetenland at Munich (September 1938); occupied the rest of Czechoslovakia (March 1939); invaded Poland (1 September 1939).' },
      { n: 3, f: 'What was the Munich Agreement (September 1938)?', b: 'Britain (Chamberlain), France (Daladier), Italy and Germany agreed that Germany could take the Sudetenland from Czechoslovakia. Czechoslovakia was not invited.' },
      { n: 4, f: 'What was the Nazi–Soviet Pact (August 1939) and why did it matter?', b: 'A non-aggression pact between Germany and the USSR with a secret plan to divide Poland. It meant Hitler could invade Poland without fearing a war with the USSR.' },
      { n: 5, f: 'Why did Britain follow a policy of appeasement?', b: 'Memories of the First World War, a belief that Versailles had been too harsh, fear of communism, British unreadiness for war, and lack of support from the Empire and the USA.' },
      { n: 6, f: 'How should you answer “How far was Hitler’s foreign policy to blame for war in 1939?”', b: 'Weigh Hitler’s actions against other factors: appeasement, the League’s weakness and the collapse of collective security, and the Nazi–Soviet Pact. Then give a clear judgement.' },
    ]),
    ...sub(B, 'blame-cold-war-2147', '2.4', [
      { n: 1, f: 'What were the Yalta (February 1945) and Potsdam (July–August 1945) conferences?', b: 'Wartime conferences of the Allied leaders that agreed to divide Germany into zones. By Potsdam, with Truman replacing Roosevelt, disagreement over Germany and Eastern Europe was growing.' },
      { n: 2, f: 'What was the “Iron Curtain” speech?', b: 'Churchill’s speech at Fulton, Missouri (March 1946), saying an iron curtain had descended across Europe, dividing the Soviet-controlled East from the West.' },
      { n: 3, f: 'What were the Truman Doctrine and the Marshall Plan (1947)?', b: 'The Truman Doctrine pledged US support to countries resisting communism. The Marshall Plan gave economic aid to rebuild Europe so that communism would be less attractive.' },
      { n: 4, f: 'What was the Berlin Blockade (1948–49)?', b: 'The USSR cut road, rail and canal links to West Berlin. The West supplied the city by air (the Berlin Airlift) until the blockade was lifted in May 1949. NATO was formed in April 1949.' },
      { n: 5, f: 'What are the three main historical views on who caused the Cold War?', b: 'Traditional: Soviet expansionism. Revisionist: US economic and nuclear pressure. Post-revisionist: mutual misunderstanding and mistrust on both sides.' },
    ]),
    ...sub(B, 'containment-communism-2147', '2.5', [
      { n: 1, f: 'Which three case studies does the containment enquiry use?', b: 'Korea (to 1953), Cuba (the revolution and the 1962 missile crisis) and US involvement in Vietnam.' },
      { n: 2, f: 'How did the USA respond to the invasion of South Korea in June 1950?', b: 'It took the issue to the UN, which sent forces under the US general MacArthur. After the Inchon landing they pushed north, but China entered the war in late 1950. An armistice in July 1953 left the border near the 38th parallel.' },
      { n: 3, f: 'What was the Bay of Pigs invasion (April 1961)?', b: 'A failed invasion of Cuba by CIA-trained Cuban exiles, approved by Kennedy, intended to overthrow Fidel Castro. It pushed Castro closer to the USSR.' },
      { n: 4, f: 'How was the Cuban Missile Crisis (October 1962) resolved?', b: 'Kennedy imposed a naval quarantine. Khrushchev removed the missiles in return for a US pledge not to invade Cuba and a secret agreement to remove US missiles from Turkey.' },
      { n: 5, f: 'What was the domino theory?', b: 'The belief that if one country in a region fell to communism, its neighbours would follow. It was used to justify US involvement in Vietnam.' },
      { n: 6, f: 'Give the key stages of US involvement in Vietnam', b: 'Gulf of Tonkin Resolution (1964); combat troops and bombing (Rolling Thunder) from 1965; the Tet Offensive (1968) turned US opinion; Nixon’s Vietnamisation; Paris Peace Accords (1973); Saigon fell in 1975.' },
    ]),
    ...sub(B, 'ussr-control-eastern-europe-2147', '2.6', [
      { n: 1, f: 'How did the USSR control Eastern Europe?', b: 'Politically through loyal communist governments; economically through Comecon (1949); and militarily through the Warsaw Pact (1955) and direct intervention.' },
      { n: 2, f: 'What happened in Hungary in 1956?', b: 'Imre Nagy’s government announced Hungary would leave the Warsaw Pact. Soviet tanks crushed the rising in November 1956 and Nagy was later executed.' },
      { n: 3, f: 'Why was the Berlin Wall built in 1961?', b: 'To stop East Germans escaping to the West through West Berlin, which was draining East Germany of skilled workers.' },
      { n: 4, f: 'What was the Prague Spring (1968)?', b: 'Alexander Dubček’s reforms in Czechoslovakia, “socialism with a human face”. Warsaw Pact forces invaded in August 1968. The Brezhnev Doctrine claimed the right to intervene to protect communism.' },
      { n: 5, f: 'What was Solidarity?', b: 'An independent trade union formed in Poland in 1980, led by Lech Wałęsa, from the Gdańsk shipyard strikes. Martial law was imposed in 1981, but Solidarity won elections in 1989.' },
      { n: 6, f: 'Why did Soviet control of Eastern Europe collapse in 1989?', b: 'Gorbachev’s reforms (glasnost and perestroika) and his refusal to use force to keep communist governments in power, alongside economic weakness. The Berlin Wall fell on 9 November 1989.' },
    ]),

    // 3 Depth studies
    ...sub(D, 'depth-study-a-wwi-2147', '3.1', [
      { n: 1, f: 'Why did the Schlieffen Plan fail in 1914?', b: 'Belgian resistance and the British Expeditionary Force slowed the advance, Russia mobilised faster than expected, and the Germans were stopped at the Battle of the Marne (September 1914).' },
      { n: 2, f: 'Why did the Western Front become a stalemate?', b: 'Defensive weapons and trenches (machine guns, artillery, barbed wire) made attacks across no man’s land very costly, so neither side could break through.' },
      { n: 3, f: 'What happened at the Battle of the Somme (1916)?', b: 'A British and French offensive from 1 July to November 1916, partly to relieve the French at Verdun. The British suffered about 57,000 casualties on the first day. Tanks were first used there in September 1916.' },
      { n: 4, f: 'What was the Gallipoli campaign (1915–16)?', b: 'An Allied attempt to knock the Ottoman Empire out of the war and open a route to Russia. It failed, and the Allied troops were evacuated.' },
      { n: 5, f: 'Why did the USA enter the war in April 1917?', b: 'Germany’s unrestricted submarine warfare and the Zimmermann Telegram, in which Germany proposed an alliance with Mexico against the USA.' },
      { n: 6, f: 'Why did Germany ask for an armistice in 1918?', b: 'The Spring Offensive failed, the Allies (with US troops) counter-attacked, the naval blockade caused food shortages, and Germany’s allies collapsed. The armistice was signed on 11 November 1918.' },
    ]),
    ...sub(D, 'depth-study-b-germany-2147', '3.2', [
      { n: 1, f: 'What were the weaknesses of the Weimar Constitution?', b: 'Proportional representation produced many small parties and unstable coalitions, and Article 48 let the president rule by decree in an emergency.' },
      { n: 2, f: 'What caused the hyperinflation of 1923?', b: 'Germany fell behind with reparations, so France and Belgium occupied the Ruhr in January 1923. Workers went on passive resistance, and the government printed money to pay them.' },
      { n: 3, f: 'How did Stresemann help the Weimar Republic recover?', b: 'He introduced a new currency (Rentenmark), agreed the Dawes Plan (1924) to reschedule reparations with US loans, signed the Locarno Treaties (1925), and brought Germany into the League (1926).' },
      { n: 4, f: 'What was the Munich Putsch (November 1923)?', b: 'Hitler’s failed attempt to seize power in Bavaria. He was jailed, wrote Mein Kampf, and decided to win power by elections.' },
      { n: 5, f: 'How did Hitler become chancellor in January 1933?', b: 'The Depression boosted Nazi support (the largest party in the Reichstag in July 1932). Conservatives such as von Papen persuaded President Hindenburg to appoint Hitler on 30 January 1933, believing they could control him.' },
      { n: 6, f: 'How did Hitler turn chancellorship into dictatorship, 1933–34?', b: 'The Reichstag Fire (February 1933) was used to restrict freedoms; the Enabling Act (March 1933) let him make laws without the Reichstag; the Night of the Long Knives (June 1934) removed rivals; and when Hindenburg died (August 1934) he became Führer.' },
      { n: 7, f: 'How did the Nazis persecute Jews before the Second World War?', b: 'A boycott of Jewish shops (1933), the Nuremberg Laws (1935) removing citizenship and banning marriage with non-Jews, and Kristallnacht (November 1938) attacks on synagogues, homes and businesses.' },
    ]),
    ...sub(D, 'depth-study-c-russia-2147', '3.3', [
      { n: 1, f: 'What happened in Russia in 1905, and why did the Tsar survive?', b: 'After Bloody Sunday (January 1905) strikes and mutinies spread. Nicholas II survived by issuing the October Manifesto, promising a Duma, which split his opponents, while the army stayed loyal.' },
      { n: 2, f: 'Why should 1905 and 1917 be treated as separate revolutions?', b: '1905 failed to remove the Tsar, while 1917 succeeded. They had different causes and different outcomes.' },
      { n: 3, f: 'Why did the Tsar fall in February 1917?', b: 'The strains of the First World War (defeats, food and fuel shortages, inflation), Nicholas taking personal command of the army, and Rasputin’s influence at court. When troops in Petrograd joined the protesters, he abdicated.' },
      { n: 4, f: 'Why were the Bolsheviks able to seize power in October 1917?', b: 'The Provisional Government stayed in the war and delayed land reform. Lenin’s slogan “Peace, Bread and Land” won support, and Trotsky organised the Red Guards through the Petrograd Soviet.' },
      { n: 5, f: 'Why did Lenin replace War Communism with the New Economic Policy (1921)?', b: 'War Communism caused famine and unrest, including the Kronstadt mutiny (1921). The NEP allowed peasants to sell surplus grain and small businesses to trade privately.' },
      { n: 6, f: 'What were Stalin’s Five-Year Plans and collectivisation?', b: 'From 1928 the Five-Year Plans set targets for heavy industry. Collectivisation merged peasant farms into collective farms; resistance, including by kulaks, was met with deportation, and millions died in the famine of 1932–33.' },
      { n: 7, f: 'What were the purges?', b: 'Stalin’s campaign of terror in the 1930s, peaking in 1936–38: show trials of leading Bolsheviks, a purge of the army officers, and mass arrests and executions by the secret police (NKVD).' },
    ]),
    ...sub(D, 'depth-study-d-usa-2147', '3.4', [
      { n: 1, f: 'What caused the US economic boom of the 1920s?', b: 'Mass production (such as Ford’s assembly line), new consumer goods, hire purchase (credit), advertising, and Republican policies of low taxes and tariffs to protect US industry.' },
      { n: 2, f: 'What was Prohibition and why did it fail?', b: 'A ban on alcohol from 1920 (18th Amendment). It was widely ignored, led to speakeasies, bootlegging and organised crime, and was repealed in 1933 (21st Amendment).' },
      { n: 3, f: 'Which groups did not share in the 1920s boom?', b: 'Farmers (overproduction and falling prices), workers in older industries such as coal and textiles, and many Black Americans and immigrants.' },
      { n: 4, f: 'What caused the Wall Street Crash of October 1929?', b: 'Overproduction and falling demand, speculation on shares bought on credit (buying on the margin), and weak banks. Confidence collapsed and share prices fell sharply on 24 and 29 October.' },
      { n: 5, f: 'What was the New Deal?', b: 'Franklin D. Roosevelt’s programme from 1933 to bring relief, recovery and reform, using “alphabet agencies” such as the CCC, AAA, TVA and NRA, and later the Social Security Act (1935).' },
      { n: 6, f: 'Who opposed the New Deal?', b: 'Republicans and businessmen who thought it cost too much and interfered too much; critics such as Huey Long who said it did not go far enough; and the Supreme Court, which struck down the NRA in 1935.' },
    ]),
    ...sub(D, 'depth-study-e-wwii-2147', '3.5', [
      { n: 1, f: 'What was Blitzkrieg?', b: '“Lightning war”: fast attacks by tanks and motorised infantry supported by aircraft. Germany used it to defeat Poland (1939) and France (May–June 1940).' },
      { n: 2, f: 'Why was the Battle of Britain (1940) important?', b: 'The RAF prevented the Luftwaffe from winning control of the air, so Germany postponed its planned invasion of Britain.' },
      { n: 3, f: 'Why was the Battle of Stalingrad (1942–43) a turning point?', b: 'The German Sixth Army was surrounded and surrendered in February 1943. Germany never recovered the initiative on the Eastern Front.' },
      { n: 4, f: 'Why did Japan attack Pearl Harbor on 7 December 1941?', b: 'To cripple the US Pacific Fleet so that Japan could seize resource-rich lands in South-East Asia, after the USA had cut off oil exports to Japan. The attack brought the USA into the war.' },
      { n: 5, f: 'Why was the Battle of Midway (June 1942) a turning point?', b: 'The US Navy sank four Japanese aircraft carriers, ending Japanese expansion in the Pacific.' },
      { n: 6, f: 'How did the Second World War end in Europe and Asia?', b: 'After D-Day (6 June 1944) and the Soviet advance, Germany surrendered on 8 May 1945. Atomic bombs were dropped on Hiroshima (6 August) and Nagasaki (9 August), and Japan surrendered, signing on 2 September 1945.' },
      { n: 7, f: 'How should you prepare the European and Asia-Pacific theatres?', b: 'As related but distinct strands, each with its own causes, course and actors, while showing connections (for example how events in Europe affected Japan’s strategic calculations).' },
    ]),
  ],
};
