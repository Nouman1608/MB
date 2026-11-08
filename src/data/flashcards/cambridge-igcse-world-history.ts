/**
 * D-444 -- flashcards for Cambridge IGCSE History 0470 (2024-2026).
 *
 * One block per key question (subtopic), in syllabus order: Core content
 * Option A, Core content Option B and the five Depth studies. Card ids are
 * `<subtopic number>-<n>` and are permanent (browser progress is keyed by
 * them): add a new card with the next unused n, never renumber.
 *
 * The course's revision notes map to topics only (no subtopic), so no card can
 * cite a page as `source`: every card is authored (origin 'authored'), written
 * from Marlbridge's own 0470 study guides, revision notes and exam-preparation
 * page. Depth studies B-E have no Marlbridge page yet and are written from the
 * syllabus key questions, standard facts only. Not tiered. Plain text only
 * (see types.ts).
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

const OPA = 'core-content-option-a-0470';
const OPB = 'core-content-option-b-0470';
const DS = 'depth-studies-0470';

export const DECK_CAMBRIDGE_IGCSE_WORLD_HISTORY: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'igcse',
  subjectSlug: 'world-history',
  syllabusCode: '0470',
  syllabusSeries: '2024-2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Core content Option A: the nineteenth century, 1848-1914
    ...sub(OPA, 'revolutions-1848-0470', '1.1', [
      { n: 1, f: 'What caused the revolutions of 1848?', b: 'Nationalism, liberal demands for constitutions, economic hardship after poor harvests, and the example of the February revolution in France.' },
      { n: 2, f: 'Why did the 1848 revolutions fail almost everywhere?', b: 'Revolutionaries were split between liberals and radicals, the middle classes withdrew once property seemed threatened, most peasants were uninvolved, and the conservative rulers kept control of their armies.' },
      { n: 3, f: 'How did Austria and Russia restore conservative rule after 1848?', b: 'By force: Russian troops helped Austria crush the Hungarian revolt in 1849, and Austrian armies defeated Piedmont and helped suppress the Italian risings.' },
      { n: 4, f: 'What happened in France as a result of 1848?', b: 'King Louis-Philippe was overthrown and the Second Republic declared. Louis Napoleon was elected president in December 1848 and made himself Emperor Napoleon III in 1852.' },
      { n: 5, f: 'Were the 1848 revolutions important even though they failed?', b: 'Yes, in some ways: serfdom was abolished in the Austrian Empire, Piedmont kept its constitution, and nationalists learned that unification would come through force and great-power diplomacy rather than debate.' },
    ]),
    ...sub(OPA, 'unification-italy-0470', '1.2', [
      { n: 1, f: 'What were the obstacles to Italian unification?', b: 'Austrian control of the north, the Papal States dividing the peninsula, strong regional loyalties and poor communications.' },
      { n: 2, f: 'What was Cavour’s role in Italian unification?', b: 'As prime minister of Piedmont he modernised it and used diplomacy, winning a French alliance at Plombières (1858) that led to war with Austria in 1859 and the gain of Lombardy.' },
      { n: 3, f: 'What was the Expedition of the Thousand (1860)?', b: 'Garibaldi’s volunteer army that conquered Sicily and Naples. He handed his conquests to Victor Emmanuel II rather than setting up a separate state.' },
      { n: 4, f: 'What was Mazzini’s contribution to unification?', b: 'Nationalist inspiration: he founded Young Italy and spread the idea of a united, republican Italy, though his own risings failed.' },
      { n: 5, f: 'How were Venetia and Rome added to Italy?', b: 'The Kingdom of Italy was proclaimed in 1861. Venetia was gained in 1866 after Austria’s defeat by Prussia, and Rome in 1870 when French troops left during the Franco-Prussian War.' },
    ]),
    ...sub(OPA, 'unification-germany-0470', '1.3', [
      { n: 1, f: 'What was Bismarck’s method for unifying Germany?', b: '"Blood and iron": isolate each opponent diplomatically, fight a limited war for a defined objective, and stop once it is achieved rather than pursuing total victory.' },
      { n: 2, f: 'What did the Danish War (1864) achieve for Prussia?', b: 'Prussia and Austria took joint control of Schleswig and Holstein, an arrangement Bismarck used to manufacture friction with Austria.' },
      { n: 3, f: 'What were the results of the Austro-Prussian War (1866)?', b: 'Austria was excluded from German affairs and the North German Confederation was formed under Prussian leadership.' },
      { n: 4, f: 'How did the Franco-Prussian War complete German unification?', b: 'The Ems Telegram provoked France into declaring war in 1870, the southern states joined Prussia against an aggressor, and the German Empire was proclaimed at Versailles in January 1871.' },
      { n: 5, f: 'Apart from Bismarck, what helped Prussia lead German unification?', b: 'The Zollverein (1834), the Prussian-led customs union that excluded Austria, Prussia’s industrial and military strength, and growing German nationalism.' },
    ]),
    ...sub(OPA, 'us-civil-war-0470', '1.4', [
      { n: 1, f: 'What were the main causes of the American Civil War?', b: 'Disagreement over the expansion of slavery into the western territories, economic differences between North and South, and the dispute over states’ rights against federal power.' },
      { n: 2, f: 'Why did the election of Lincoln in 1860 lead to secession?', b: 'Lincoln’s Republican Party opposed the spread of slavery, so Southern states feared for its future. South Carolina seceded in December 1860 and others followed to form the Confederacy.' },
      { n: 3, f: 'How did the Civil War begin?', b: 'Confederate forces fired on Fort Sumter, a Union fort in South Carolina, in April 1861.' },
      { n: 4, f: 'Why did the North win the Civil War?', b: 'Greater population, industry and railways, control of the navy for a blockade, and leadership such as Lincoln’s and Grant’s. Gettysburg and Vicksburg (both July 1863) were turning points. Lee surrendered at Appomattox in April 1865.' },
      { n: 5, f: 'What were the results of the Civil War for formerly enslaved people?', b: 'The 13th Amendment (1865) abolished slavery and the 14th and 15th gave citizenship and voting rights, but Black Codes, the Ku Klux Klan and the end of Reconstruction in 1877 limited real freedom in the South.' },
    ]),
    ...sub(OPA, 'overseas-empires-0470', '1.5', [
      { n: 1, f: 'Why did European nations expand their empires in the nineteenth century?', b: 'Economic motives (raw materials, markets, investment), strategic and political motives (prestige, rivalry, naval bases), and ideas of a "civilising mission" and racial superiority. Better weapons and medicine made it possible.' },
      { n: 2, f: 'What was the Scramble for Africa?', b: 'The rapid division of Africa by European powers from the 1880s. The Berlin Conference (1884-85) set rules for claims; by 1914 only Ethiopia and Liberia were independent.' },
      { n: 3, f: 'What changed in British India after the rebellion of 1857?', b: 'Rule passed from the East India Company to the British Crown in 1858.' },
      { n: 4, f: 'How were China and Japan affected by Western expansion?', b: 'China was forced to open up after the Opium Wars, losing Hong Kong to Britain in 1842. Japan was opened by the USA in 1853-54, then modernised rapidly after the Meiji Restoration (1868) and became an imperial power itself.' },
      { n: 5, f: 'What were the effects of empire on colonised peoples?', b: 'Loss of land and independence, forced labour and violence (as in Leopold II’s Congo), economies reshaped to export raw materials, and resistance, alongside some new railways, schools and medicine.' },
      { n: 6, f: 'How did imperial rivalry raise tension between the powers?', b: 'Through crises such as Fashoda (1898) between Britain and France and the Moroccan crises of 1905 and 1911 between France and Germany.' },
    ]),
    ...sub(OPA, 'causes-first-world-war-0470', '1.6', [
      { n: 1, f: 'Triple Alliance vs Triple Entente: who were the members?', b: 'Triple Alliance (1882): Germany, Austria-Hungary, Italy.\nTriple Entente (1907): Britain, France, Russia.' },
      { n: 2, f: 'Why did Britain abandon "splendid isolation"?', b: 'German naval expansion under Tirpitz threatened British naval supremacy, so Britain settled colonial disputes with France (Entente Cordiale, 1904) and Russia (Anglo-Russian agreement, 1907).' },
      { n: 3, f: 'What does MANIA stand for in the causes of the First World War?', b: 'Militarism, Alliances, Nationalism, Imperialism, Assassination.' },
      { n: 4, f: 'Why did the Balkans become the flashpoint of 1914?', b: 'Austria-Hungary’s annexation of Bosnia (1908) angered Serbia and Russia, and the Balkan Wars (1912-13) left Serbia enlarged and confident and Austria-Hungary alarmed at Slav nationalism.' },
      { n: 5, f: 'What were the steps of the July Crisis of 1914?', b: 'Franz Ferdinand assassinated at Sarajevo (28 June) → Austrian ultimatum to Serbia, backed by Germany’s "blank cheque" → Austria declares war → Russia mobilises → Germany mobilises and invades Belgium → Britain enters under the 1839 Treaty of London.' },
      { n: 6, f: 'Why did the Schlieffen Plan make the crisis escalate so fast?', b: 'It required Germany to defeat France quickly through Belgium before Russia was ready, so Russian mobilisation forced immediate German action and left almost no time for diplomacy.' },
      { n: 7, f: 'Was the assassination the main cause of the First World War?', b: 'Best answer: it was the spark, not the cause. It triggered the July Crisis, but the long-term tensions had already made a general war possible. Weigh the factors and reach an explicit judgement.' },
    ]),

    // 2 Core content Option B: international relations since 1919
    ...sub(OPB, 'treaty-of-versailles-0470', '2.1', [
      { n: 1, f: 'What did Wilson, Clemenceau and Lloyd George each want at Versailles?', b: 'Wilson (USA): a fair peace based on his Fourteen Points and self-determination.\nClemenceau (France): to weaken Germany permanently for French security.\nLloyd George (Britain): a peace firm enough for public opinion but not so harsh it destabilised Europe.' },
      { n: 2, f: 'What were the military terms of the Treaty of Versailles?', b: 'Army limited to 100,000 men, no conscription, no air force, no submarines, only six battleships, and the Rhineland demilitarised.' },
      { n: 3, f: 'What were the territorial terms of the Treaty of Versailles?', b: 'Alsace-Lorraine to France, land to Poland including the Polish Corridor, the Saar under the League for 15 years, union with Austria forbidden, and Germany’s colonies taken as mandates.' },
      { n: 4, f: 'What was the War Guilt Clause?', b: 'Article 231, which made Germany accept responsibility for the war and its damage. It was the basis of reparations, fixed in 1921 at £6,600 million.' },
      { n: 5, f: 'How did the treaty affect Germany up to the end of 1923?', b: 'Many Germans called it a "Diktat" and blamed the "November criminals". There were risings such as the Spartacists (1919) and the Kapp Putsch (1920); the Ruhr occupation and hyperinflation came in 1923.' },
      { n: 6, f: 'How do you decide whether the Treaty of Versailles was fair?', b: 'Weigh contemporary views (German outrage, French feeling it was too lenient) against hindsight, and compare it with the harsh Treaty of Brest-Litovsk that Germany imposed on Russia in 1918.' },
    ]),
    ...sub(OPB, 'league-of-nations-success-0470', '2.2', [
      { n: 1, f: 'What were the structural weaknesses of the League of Nations?', b: 'It had no army of its own, decisions in the Council needed unanimity, and major powers were missing: the USA never joined, Germany joined only in 1926 and the USSR only in 1934.' },
      { n: 2, f: 'Which 1920s disputes are classed as League successes?', b: 'The Aaland Islands (1921), awarded to Finland and accepted by Sweden, and the Greek invasion of Bulgaria (1925), where Greece withdrew when told to.' },
      { n: 3, f: 'Which 1920s disputes are classed as League failures?', b: 'Vilna (1920), which Poland kept regardless of the League, and Corfu (1923), passed to the Conference of Ambassadors, which made Greece pay compensation to the aggressor, Italy.' },
      { n: 4, f: 'What humanitarian work did the League do?', b: 'Its agencies helped refugees and returned prisoners of war, fought disease, improved working conditions through the International Labour Organization, and campaigned against slavery.' },
      { n: 5, f: 'Why did the Manchurian and Abyssinian crises show the League had failed?', b: 'Japan (1931) and Italy (1935) were great powers. The League condemned Japan, which simply left; sanctions on Italy excluded oil. The Depression made members unwilling to act.' },
    ]),
    ...sub(OPB, 'hitlers-foreign-policy-0470', '2.3', [
      { n: 1, f: 'What were Hitler’s foreign policy aims?', b: 'To overturn the Treaty of Versailles, unite all German-speaking people in one state, and win Lebensraum (living space) in the east.' },
      { n: 2, f: 'Put Hitler’s steps of 1933-36 in order', b: 'Left the League and the Disarmament Conference (1933) → Saar plebiscite returns the Saar to Germany (1935) → rearmament and conscription announced (1935) → Rhineland remilitarised (March 1936).' },
      { n: 3, f: 'What links did Germany form with Italy and Japan in 1936?', b: 'The Rome-Berlin Axis with Italy and the Anti-Comintern Pact with Japan. Germany and Italy both helped Franco in the Spanish Civil War.' },
      { n: 4, f: 'What was agreed at Munich (September 1938)?', b: 'Britain, France and Italy agreed that Germany could take the Sudetenland from Czechoslovakia; Czechoslovakia was not consulted. Germany occupied the rest of Czechoslovakia in March 1939.' },
      { n: 5, f: 'Why is appeasement seen as a deliberate policy rather than just weakness?', b: 'Britain and France chose it because of the cost of rearmament, unready armed forces, public horror of another war, some sympathy with German grievances and fear of communism.' },
      { n: 6, f: 'How did the Polish crisis lead to war in 1939?', b: 'Britain and France guaranteed Poland (March 1939). After the Nazi-Soviet Pact (August 1939), Germany invaded Poland on 1 September, and Britain and France declared war on 3 September.' },
    ]),
    ...sub(OPB, 'blame-cold-war-0470', '2.4', [
      { n: 1, f: 'Why did the wartime alliance between the USA and USSR break down in 1945?', b: 'It rested on the shared aim of defeating Nazi Germany. Once that was achieved, the capitalism-versus-communism divide resurfaced, along with disputes over Poland and Germany.' },
      { n: 2, f: 'Yalta vs Potsdam (1945)', b: 'Yalta (February): Roosevelt, Churchill and Stalin agreed to divide Germany and to hold free elections in Eastern Europe.\nPotsdam (July-August): Truman and Attlee met Stalin amid growing suspicion, including over Poland and the atomic bomb.' },
      { n: 3, f: 'How did the USSR extend control over Eastern Europe by 1948?', b: 'Through the Red Army’s presence and communist parties that took power step by step, removing rivals ("salami tactics"), ending with the communist takeover in Czechoslovakia in 1948.' },
      { n: 4, f: 'Truman Doctrine vs Marshall Plan (1947)', b: 'Truman Doctrine: a promise to support free peoples resisting communism (containment).\nMarshall Plan: American economic aid to rebuild Europe, which Stalin saw as dollar imperialism.' },
      { n: 5, f: 'What was the Berlin Blockade (1948-49), and why did it fail?', b: 'Stalin cut land routes to West Berlin to force the Western powers out. The Berlin Airlift supplied the city by air for nearly a year, and the blockade was lifted in May 1949.' },
      { n: 6, f: 'NATO vs the Warsaw Pact', b: 'NATO (1949): the Western military alliance led by the USA.\nWarsaw Pact (1955): the Soviet-led alliance of Eastern European states.' },
    ]),
    ...sub(OPB, 'containment-communism-0470', '2.5', [
      { n: 1, f: 'What is containment?', b: 'The US policy of stopping communism from spreading to new countries, rather than trying to remove it where it already existed.' },
      { n: 2, f: 'How far did the USA succeed in Korea (1950-53)?', b: 'After North Korea invaded in June 1950, UN forces led by the USA pushed it back, but Chinese intervention led to stalemate. The 1953 armistice left the border near the 38th parallel: containment worked, rollback failed.' },
      { n: 3, f: 'What was the Bay of Pigs (April 1961)?', b: 'A failed invasion of Cuba by CIA-backed Cuban exiles trying to overthrow Castro. It pushed Cuba closer to the USSR.' },
      { n: 4, f: 'How was the Cuban Missile Crisis (October 1962) resolved?', b: 'Kennedy imposed a naval quarantine. Khrushchev removed the missiles in return for a US pledge not to invade Cuba and a secret agreement to withdraw US missiles from Turkey.' },
      { n: 5, f: 'What was the domino theory?', b: 'The belief that if one country in a region fell to communism, its neighbours would follow. It was a main reason for US involvement in Vietnam.' },
      { n: 6, f: 'Why did the USA fail in Vietnam?', b: 'Viet Cong guerrilla tactics and support from the North, the unpopularity of the South Vietnamese government, and falling support at home after the Tet Offensive (1968). US troops left after the 1973 Paris Peace Accords; Saigon fell in 1975.' },
    ]),
    ...sub(OPB, 'ussr-control-eastern-europe-0470', '2.6', [
      { n: 1, f: 'What happened in Hungary in 1956?', b: 'Imre Nagy’s government promised reforms and announced that Hungary would leave the Warsaw Pact. Soviet tanks crushed the uprising in November 1956 and the West did not intervene.' },
      { n: 2, f: 'Why was the Berlin Wall built in 1961?', b: 'To stop East Germans, many of them skilled workers, escaping to the West through West Berlin.' },
      { n: 3, f: 'How did the Soviet response to the Prague Spring (1968) differ from Hungary in 1956?', b: 'Dubček wanted reform but stayed in the Warsaw Pact. The USSR still invaded, with Warsaw Pact allies, in August 1968, and the Brezhnev Doctrine justified intervention to defend socialism.' },
      { n: 4, f: 'Why was Solidarity a sign of weakening Soviet control?', b: 'This independent trade union, led by Lech Wałęsa from the Gdańsk shipyards (1980), won millions of members. Martial law (1981) could not destroy it, and it won elections in 1989.' },
      { n: 5, f: 'What was Gorbachev’s role in the collapse of Soviet control?', b: 'His reforms, glasnost (openness) and perestroika (restructuring), and his decision not to use force to keep communist governments in power allowed the revolutions of 1989. The Berlin Wall fell on 9 November 1989.' },
    ]),

    // 3 Depth studies
    ...sub(DS, 'depth-study-a-wwi-0470', '3.1', [
      { n: 1, f: 'Why did the Schlieffen Plan fail in 1914?', b: 'Belgian resistance slowed the German advance, Britain entered the war, Russia mobilised faster than expected, and the Germans were halted at the First Battle of the Marne in September 1914.' },
      { n: 2, f: 'Why was there stalemate on the Western Front?', b: 'Machine guns, barbed wire and artillery gave defenders a huge advantage over attackers crossing open ground, so offensives brought massive casualties for little ground after the race to the sea.' },
      { n: 3, f: 'Verdun vs the Somme (1916)', b: 'Verdun: a German attack from February 1916 meant to bleed the French army.\nSomme: a British and French offensive from 1 July 1916 under Haig, partly to relieve Verdun. Both cost hundreds of thousands of casualties.' },
      { n: 4, f: 'How did new weapons try to break the stalemate?', b: 'Gas (from 1915), tanks (first used on the Somme in 1916), aircraft and better artillery tactics such as the creeping barrage. None was decisive alone until combined late in the war.' },
      { n: 5, f: 'In what ways was it a world war?', b: 'Indian and Canadian troops fought on the Western Front, there were campaigns in German East and South West Africa, Japan besieged Tsingtao, and the Arab Revolt (1916) fought the Ottoman Empire.' },
      { n: 6, f: 'Why was the Gallipoli campaign (1915-16) a failure?', b: 'It aimed to knock the Ottoman Empire out of the war and open a route to Russia, but poor planning and strong Turkish defence led to stalemate and evacuation.' },
      { n: 7, f: 'How important was the war at sea?', b: 'Jutland (1916) was indecisive but kept the German fleet in port. The British blockade starved Germany, while unrestricted U-boat warfare (1917) helped bring the USA into the war and was beaten by convoys.' },
      { n: 8, f: 'Why did Germany ask for an armistice in 1918?', b: 'The Spring Offensive failed, American troops strengthened the Allies, and the Allied advance pushed Germany back. At home, the Kiel Mutiny and revolution led to the Kaiser’s abdication; the Armistice was signed on 11 November 1918.' },
    ]),
    ...sub(DS, 'depth-study-b-germany-0470', '3.2', [
      { n: 1, f: 'What were the weaknesses of the Weimar constitution?', b: 'Proportional representation produced many parties and short-lived coalitions, and Article 48 let the president rule by decree in an emergency.' },
      { n: 2, f: 'How did Weimar recover under Stresemann (1923-29)?', b: 'A new currency, the Rentenmark, ended hyperinflation; the Dawes Plan (1924) eased reparations with American loans; and the Locarno Treaties (1925) and League membership (1926) improved Germany’s standing.' },
      { n: 3, f: 'What happened in the Munich Putsch (1923), and what did Hitler learn?', b: 'Hitler’s attempt to seize power in Munich failed and he was imprisoned, where he wrote Mein Kampf. He decided to win power legally, through elections.' },
      { n: 4, f: 'How did the Depression help the Nazis?', b: 'Mass unemployment and the failure of coalition governments drove voters to extremes. By July 1932 the Nazis were the largest party in the Reichstag, and Hitler was appointed Chancellor in January 1933.' },
      { n: 5, f: 'How did Hitler consolidate power in 1933-34?', b: 'The Reichstag fire decree, the Enabling Act (March 1933), banning trade unions and other parties, the Night of the Long Knives (June 1934), and becoming Führer when Hindenburg died (August 1934).' },
      { n: 6, f: 'How did the Nazis control German society?', b: 'Terror through the SS and Gestapo; propaganda under Goebbels; control of young people through the Hitler Youth and schools; and persecution of Jewish people through the Nuremberg Laws (1935) and Kristallnacht (1938).' },
    ]),
    ...sub(DS, 'depth-study-c-russia-0470', '3.3', [
      { n: 1, f: 'Why did Tsarism survive the 1905 Revolution?', b: 'The October Manifesto split the opposition by promising a Duma, the army stayed loyal, and peace with Japan freed troops to restore order.' },
      { n: 2, f: 'Why did the Tsar fall in February 1917?', b: 'War defeats, food and fuel shortages, and Nicholas II’s decision to take personal command, leaving government to the Tsarina and Rasputin. When troops in Petrograd joined strikers, he abdicated.' },
      { n: 3, f: 'How were the Bolsheviks able to seize power in October 1917?', b: 'The Provisional Government stayed in the war and delayed land reform; Lenin’s slogan "Peace, Bread, Land" won support; and Trotsky organised the Red Guards to take Petrograd.' },
      { n: 4, f: 'Why did the Reds win the Russian Civil War (1918-21)?', b: 'They held the central cities and railways, Trotsky built a disciplined Red Army, War Communism supplied it, and the Whites were divided and spread around the edges of Russia.' },
      { n: 5, f: 'Why did Lenin introduce the New Economic Policy in 1921?', b: 'War Communism had caused famine and revolt, including the Kronstadt rising. The NEP allowed small private businesses and trade in surplus grain to revive the economy.' },
      { n: 6, f: 'What were the effects of Stalin’s Five-Year Plans and collectivisation?', b: 'Heavy industry grew fast from 1928, but collectivisation from 1929 destroyed the kulaks, cut food output and caused a famine in 1932-33 that killed millions.' },
      { n: 7, f: 'What were the purges?', b: 'Stalin’s terror of the 1930s, intensified after Kirov’s murder (1934): show trials of old Bolsheviks, purges of the army and party, and millions arrested, shot or sent to the Gulag.' },
    ]),
    ...sub(DS, 'depth-study-d-usa-0470', '3.4', [
      { n: 1, f: 'What caused the US economic boom of the 1920s?', b: 'Mass production (such as Ford’s assembly line), new consumer goods, hire purchase and advertising, low taxes and tariffs that protected American industry.' },
      { n: 2, f: 'Which groups did not share in the 1920s boom?', b: 'Farmers, hit by overproduction and falling prices, workers in older industries such as coal and textiles, and many Black Americans.' },
      { n: 3, f: 'Why did Prohibition fail?', b: 'Alcohol was banned from 1920, but illegal speakeasies and bootlegging flourished, gangsters such as Al Capone grew rich and police were bribed. It was repealed in 1933.' },
      { n: 4, f: 'How was intolerance shown in 1920s America?', b: 'The Red Scare and Palmer Raids (1919-20), the Sacco and Vanzetti case, the revived Ku Klux Klan, immigration quotas (1921 and 1924) and the Scopes trial (1925).' },
      { n: 5, f: 'Why was Hoover blamed for the Depression?', b: 'He believed the economy would recover by itself and that direct federal relief would weaken self-reliance. Shanty towns of the homeless were called Hoovervilles.' },
      { n: 6, f: 'How effective was the New Deal?', b: 'Roosevelt’s alphabet agencies gave relief and jobs and restored confidence in the banks, but unemployment stayed high until rearmament for war. The Supreme Court and critics such as Huey Long opposed it.' },
    ]),
    ...sub(DS, 'depth-study-e-wwii-0470', '3.5', [
      { n: 1, f: 'What was Blitzkrieg?', b: '"Lightning war": fast, concentrated attacks by tanks and aircraft, followed by infantry, used to defeat Poland (1939) and France (1940) quickly.' },
      { n: 2, f: 'Why was the Battle of Britain (1940) important?', b: 'The RAF stopped the Luftwaffe winning control of the air, so Hitler postponed the invasion of Britain, which stayed in the war as a base for later attacks.' },
      { n: 3, f: 'Why did Operation Barbarossa fail to defeat the USSR?', b: 'Germany invaded in June 1941 but did not take Moscow before the winter. Soviet industry moved east, and defeat at Stalingrad (1942-43) and Kursk (1943) turned the war in the east.' },
      { n: 4, f: 'Why did Japan attack Pearl Harbor (7 December 1941)?', b: 'To cripple the US Pacific Fleet so that Japan could seize resources in South-East Asia after the USA cut off oil exports. It brought the USA into the war.' },
      { n: 5, f: 'Why was the Battle of Midway (June 1942) a turning point?', b: 'The US Navy sank four Japanese aircraft carriers, ending Japan’s advance in the Pacific. The USA then used island hopping to move towards Japan.' },
      { n: 6, f: 'How did the war end in Europe and the Asia-Pacific?', b: 'After D-Day (6 June 1944) and the Soviet advance, Germany surrendered in May 1945. Atomic bombs on Hiroshima (6 August) and Nagasaki (9 August) and Soviet entry led Japan to surrender in August 1945.' },
    ]),
  ],
};
