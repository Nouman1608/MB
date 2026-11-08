/**
 * D-444 -- flashcards for Pearson Edexcel International GCSE History 4HI1
 * (specification Issue 5, February 2026).
 *
 * One block per subtopic (one per Depth Study, Historical Investigation and
 * Breadth Study option), in specification order. Card ids are
 * `<subtopic number>-<n>` and are permanent (browser progress is keyed by
 * them): add a new card with the next unused n, never renumber.
 *
 * Marlbridge's 4HI1 pages teach the paper skills (the AO4 extract question on
 * Paper 1, cross-referencing on the Investigation, change and continuity on
 * the Breadth Study) and list the options, but do not set out each option's
 * content. The skill cards follow those pages; the period cards are written
 * conservatively from the specification's option titles, with standard
 * textbook dates and facts only. No revision-notes page maps to a single
 * subtopic, so every card is authored.
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

const P1 = 'paper-1-depth-studies-4hi1';
const P2 = 'paper-2-investigation-breadth-studies-4hi1';

export const DECK_EDEXCEL_IGCSE_WORLD_HISTORY: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'igcse',
  subjectSlug: 'world-history',
  syllabusCode: '4HI1',
  syllabusSeries: 'Issue 5, February 2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // Paper 1 Depth Studies
    ...sub(P1, 'french-revolution-4hi1', '1.1', [
      { n: 1, f: 'What were the three Estates of pre-revolutionary France?', b: 'First Estate: the clergy. Second Estate: the nobility. Third Estate: everyone else, from wealthy lawyers to peasants, who paid most of the taxes.' },
      { n: 2, f: 'Why was the French monarchy in financial crisis by 1788?', b: 'Heavy debts from wars, including support for the American War of Independence, an unfair tax system that exempted the privileged, and bad harvests that pushed up bread prices.' },
      { n: 3, f: 'What was the Tennis Court Oath (20 June 1789)?', b: 'Third Estate deputies, now calling themselves the National Assembly, swore not to separate until France had a constitution.' },
      { n: 4, f: 'Why is 14 July 1789 significant?', b: 'Crowds in Paris stormed the Bastille, a royal fortress and prison. It showed that the king had lost control of Paris.' },
      { n: 5, f: 'When was the French monarchy abolished and Louis XVI executed?', b: 'France was declared a republic in September 1792, and Louis XVI was executed in January 1793.' },
      { n: 6, f: 'What was the Terror (1793–94)?', b: 'Government by the Committee of Public Safety, dominated by Robespierre, in which suspected enemies of the Revolution were executed. It ended with Robespierre’s own execution in July 1794.' },
      { n: 7, f: 'How did the revolutionary period end in 1799?', b: 'The Directory (from 1795) was weak and unpopular. Napoleon Bonaparte overthrew it in a coup in November 1799.' },
    ]),
    ...sub(P1, 'unification-italy-4hi1', '1.2', [
      { n: 1, f: 'Why did the 1848–49 revolutions in Italy fail?', b: 'Austria’s army defeated Piedmont (at Custoza in 1848 and Novara in 1849), the revolutionaries were divided, and French troops ended Mazzini’s Roman Republic in 1849.' },
      { n: 2, f: 'How did Cavour use diplomacy to defeat Austria?', b: 'He won Napoleon III’s support at Plombières (1858). In the war of 1859 French and Piedmontese forces won at Magenta and Solferino, and Piedmont gained Lombardy.' },
      { n: 3, f: 'What did Garibaldi achieve in 1860?', b: 'With the Thousand (Redshirts) he conquered Sicily and Naples, then handed them to Victor Emmanuel II.' },
      { n: 4, f: 'When was the Kingdom of Italy proclaimed?', b: 'In 1861, with Victor Emmanuel II as king.' },
      { n: 5, f: 'How were Venetia and Rome added to Italy?', b: 'Venetia in 1866, after Austria was defeated by Prussia (Italy’s ally). Rome in 1870, when French troops withdrew for the Franco-Prussian War.' },
      { n: 6, f: 'Paper 1 skill: what does part (a), “What impression does the author give…?”, require?', b: 'State the author’s viewpoint and explain it using specific words and tone from the extract. The extract is a historian’s interpretation (AO4), so do not judge its reliability or usefulness.' },
    ]),
    ...sub(P1, 'germany-dictatorship-4hi1', '1.3', [
      { n: 1, f: 'Why was the Weimar Republic unpopular from the start?', b: 'Many Germans blamed it for the armistice and the Treaty of Versailles (the “stab in the back” myth), and it faced risings from the left (Spartacists, 1919) and right (Kapp Putsch, 1920).' },
      { n: 2, f: 'What caused the hyperinflation of 1923?', b: 'After Germany missed reparations payments, France and Belgium occupied the Ruhr. Workers went on passive resistance and the government printed money to pay them.' },
      { n: 3, f: 'What were the Stresemann years (1923–29) known for?', b: 'Recovery: the Rentenmark, the Dawes Plan (1924), the Locarno Treaties (1925), League membership (1926) and the Young Plan (1929).' },
      { n: 4, f: 'Why did Nazi support grow after 1929?', b: 'The Depression caused mass unemployment. Nazi propaganda, promises of work and strong government, and fear of communism won votes; the Nazis became the largest party in July 1932.' },
      { n: 5, f: 'Which three steps turned Hitler into a dictator in 1933–34?', b: 'The Enabling Act (March 1933), the Night of the Long Knives (June 1934), and becoming Führer when Hindenburg died (August 1934), with the army swearing loyalty to him.' },
      { n: 6, f: 'How did the Nazis control Germany?', b: 'The SS and Gestapo, concentration camps, censorship and propaganda run by Goebbels, control of education and youth (the Hitler Youth), and the banning of other parties and trade unions.' },
      { n: 7, f: 'How did Nazi policy treat women?', b: 'Women were encouraged to marry and have children (“Kinder, Küche, Kirche”), with loans and medals for large families. Many professional women were pushed out of work in the 1930s.' },
    ]),
    ...sub(P1, 'india-nationalist-challenge-4hi1', '1.4', [
      { n: 1, f: 'What was the Amritsar massacre?', b: 'On 13 April 1919, troops under General Dyer fired on an unarmed crowd at Jallianwala Bagh, killing hundreds. It turned many Indians against British rule.' },
      { n: 2, f: 'What was Gandhi’s non-cooperation movement (1920–22)?', b: 'A boycott of British goods, courts, schools and honours. Gandhi called it off after the violence at Chauri Chaura in 1922.' },
      { n: 3, f: 'What was the Salt March (1930)?', b: 'Gandhi’s march to Dandi to make salt from the sea, breaking the British salt monopoly. It began a civil disobedience campaign.' },
      { n: 4, f: 'What did the Government of India Act 1935 do?', b: 'It gave the provinces elected self-government. In the 1937 elections Congress won control of most provinces.' },
      { n: 5, f: 'What was the Lahore Resolution (1940)?', b: 'The Muslim League, led by Jinnah, called for independent states in the Muslim-majority areas of north-west and east India.' },
      { n: 6, f: 'What was the Quit India movement (1942)?', b: 'A Congress campaign demanding that Britain leave India immediately, launched after the Cripps Mission failed. Congress leaders were arrested.' },
      { n: 7, f: 'How did India gain independence in 1947?', b: 'After the Cabinet Mission (1946) failed and communal violence grew, Mountbatten brought forward the British withdrawal. The Indian Independence Act created India and Pakistan in August 1947.' },
    ]),
    ...sub(P1, 'ussr-dictatorship-conflict-4hi1', '1.5', [
      { n: 1, f: 'How did Stalin defeat his rivals for the leadership after Lenin’s death in 1924?', b: 'As General Secretary he controlled party appointments. He allied first with Zinoviev and Kamenev against Trotsky, then with Bukharin against them. Trotsky was expelled from the USSR in 1929.' },
      { n: 2, f: 'What were the aims and results of the first Five-Year Plans?', b: 'From 1928, rapid growth of heavy industry (coal, steel, oil, electricity) through state targets. Output rose greatly, but at the cost of hard conditions and forced labour.' },
      { n: 3, f: 'What was collectivisation and what were its results?', b: 'Peasant farms were merged into collective farms from 1929. Kulaks were deported, and grain seizures caused a famine in 1932–33 in which millions died, especially in Ukraine.' },
      { n: 4, f: 'What were the purges and show trials?', b: 'Stalin’s terror of the 1930s, peaking in 1936–38: leading Bolsheviks were tried and shot, the army officer corps was purged, and millions were arrested by the NKVD and sent to the gulags.' },
      { n: 5, f: 'What was the cult of personality?', b: 'Propaganda that presented Stalin as a wise, all-knowing leader, through posters, statues, renamed towns and rewritten history.' },
      { n: 6, f: 'How did the USSR fight the Second World War?', b: 'Germany invaded in June 1941 (Operation Barbarossa). The USSR held Moscow and Leningrad, moved industry east, won at Stalingrad (1942–43) and Kursk (1943), and reached Berlin in 1945.' },
    ]),
    ...sub(P1, 'superpower-relations-4hi1', '1.6', [
      { n: 1, f: 'What were the Grand Alliance conferences of 1943–45?', b: 'Tehran (1943), Yalta (February 1945) and Potsdam (July–August 1945). They planned the defeat and division of Germany, but disagreements over Poland and Germany grew.' },
      { n: 2, f: 'Why did the USA introduce the Truman Doctrine and the Marshall Plan in 1947?', b: 'To contain communism: the Truman Doctrine promised support to countries resisting it, and Marshall Aid rebuilt European economies so communism would be less attractive.' },
      { n: 3, f: 'What were the results of the Berlin Blockade (1948–49)?', b: 'The Airlift kept West Berlin supplied, the USSR lifted the blockade, Germany was divided into two states (1949), and NATO was formed (1949).' },
      { n: 4, f: 'Why was the Berlin Wall built in August 1961?', b: 'To stop East Germans escaping to the West through West Berlin.' },
      { n: 5, f: 'What steps were taken to reduce tension after the Cuban Missile Crisis?', b: 'A hotline between Washington and Moscow (1963), the Limited Test Ban Treaty (1963) and the Nuclear Non-Proliferation Treaty (1968).' },
      { n: 6, f: 'How did the USSR respond to the Prague Spring (1968)?', b: 'Warsaw Pact troops invaded Czechoslovakia in August 1968 and removed Dubček’s reforms. The Brezhnev Doctrine claimed the right to intervene to protect communism.' },
      { n: 7, f: 'What was SALT I (1972)?', b: 'The first Strategic Arms Limitation agreement between the USA and USSR, limiting nuclear missiles. It was a key step in détente.' },
    ]),
    ...sub(P1, 'civil-rights-usa-4hi1', '1.7', [
      { n: 1, f: 'What was McCarthyism?', b: 'Senator Joseph McCarthy’s accusations, from 1950, that communists had infiltrated the US government. Many people lost their jobs; the Senate censured him in 1954.' },
      { n: 2, f: 'What did Brown v Board of Education (1954) decide?', b: 'The Supreme Court ruled that segregated schools were unconstitutional.' },
      { n: 3, f: 'What was the Montgomery Bus Boycott (1955–56)?', b: 'After Rosa Parks was arrested for refusing to give up her seat, Black residents boycotted the buses for over a year until the Supreme Court ruled bus segregation unconstitutional. Martin Luther King emerged as a leader.' },
      { n: 4, f: 'What happened at Little Rock in 1957?', b: 'The Arkansas governor used the National Guard to stop nine Black students entering Central High School. President Eisenhower sent federal troops to protect them.' },
      { n: 5, f: 'Which two laws of 1964 and 1965 were major civil rights achievements?', b: 'The Civil Rights Act (1964) banned segregation in public places and discrimination in employment. The Voting Rights Act (1965) banned literacy tests and other barriers to Black voting.' },
      { n: 6, f: 'What was Black Power?', b: 'A movement from the mid-1960s stressing Black pride and self-reliance, and rejecting non-violence as the only method. Associated with Malcolm X, Stokely Carmichael and the Black Panthers (1966).' },
      { n: 7, f: 'What was the Watergate scandal?', b: 'A 1972 break-in at the Democratic headquarters was linked to President Nixon’s re-election team, and Nixon tried to cover it up. Facing impeachment, he resigned in August 1974.' },
    ]),
    ...sub(P1, 'south-africa-apartheid-4hi1', '1.8', [
      { n: 1, f: 'What was apartheid?', b: 'A system of racial segregation introduced by the National Party after it won the 1948 election, classifying people by race and separating them in where they lived, worked and went to school.' },
      { n: 2, f: 'Name three apartheid laws of the early 1950s', b: 'The Population Registration Act (1950), the Group Areas Act (1950) and the Bantu Education Act (1953).' },
      { n: 3, f: 'What was the Freedom Charter (1955)?', b: 'A statement of demands, adopted at the Congress of the People, that South Africa belongs to all who live in it, black and white, with equal rights.' },
      { n: 4, f: 'What happened at Sharpeville on 21 March 1960?', b: 'Police fired on a crowd protesting against the pass laws, killing 69 people. The government banned the ANC and PAC, and the ANC turned to armed struggle (Umkhonto we Sizwe, 1961).' },
      { n: 5, f: 'What was the outcome of the Rivonia Trial (1963–64)?', b: 'Nelson Mandela and other ANC leaders were sentenced to life imprisonment.' },
      { n: 6, f: 'What was the Soweto uprising (1976)?', b: 'From 16 June 1976, school students protested against teaching in Afrikaans; police opened fire and hundreds were killed in the unrest that followed.' },
      { n: 7, f: 'How did apartheid end?', b: 'President de Klerk lifted the ban on the ANC and released Mandela in February 1990. Negotiations led to the first elections open to all races in April 1994, and Mandela became president.' },
    ]),

    // Paper 2 Historical Investigations
    ...sub(P2, 'investigation-wwi-4hi1', '2.1', [
      { n: 1, f: 'Investigation skill: what does “How far does Source A support Source B?” require?', b: 'Cross-referencing: identify specific points where the two sources agree and where they disagree, using contextual knowledge to explain why. It is not asking which source is more reliable or useful.' },
      { n: 2, f: 'Which crises raised international tension between 1905 and 1913?', b: 'The Moroccan crises (1905 and 1911), the Bosnian crisis (1908) and the Balkan Wars (1912–13).' },
      { n: 3, f: 'Why did the Schlieffen Plan fail?', b: 'Belgian resistance, the British Expeditionary Force, faster Russian mobilisation than expected and the Allied victory at the Marne (September 1914).' },
      { n: 4, f: 'What happened at Verdun (1916)?', b: 'A German attack from February 1916 intended to wear down the French army. The French held out (“They shall not pass”) but both sides suffered huge losses.' },
      { n: 5, f: 'What were the Battles of the Somme (1916) and Passchendaele (1917)?', b: 'British-led offensives on the Western Front that gained little ground at enormous cost. The Somme began on 1 July 1916; Passchendaele (Third Ypres) was fought in heavy mud from July to November 1917.' },
      { n: 6, f: 'Why did Germany lose the war in 1918?', b: 'The Spring Offensive failed, US troops arrived, the Allies counter-attacked in the Hundred Days, the blockade caused shortages, and Germany’s allies collapsed. The armistice came on 11 November 1918.' },
    ]),
    ...sub(P2, 'investigation-russia-soviet-union-4hi1', '2.2', [
      { n: 1, f: 'What was Bloody Sunday (January 1905)?', b: 'Troops fired on a peaceful procession led by Father Gapon taking a petition to the Tsar in St Petersburg. It set off the 1905 revolution.' },
      { n: 2, f: 'What were Stolypin’s policies (1906–11)?', b: 'Repression of revolutionaries (many executions) combined with land reform to create a class of prosperous, loyal peasants. He was assassinated in 1911.' },
      { n: 3, f: 'What was the Kornilov affair (August 1917)?', b: 'General Kornilov appeared to march on Petrograd. The Provisional Government armed the Bolshevik Red Guards to defend the city, which increased Bolshevik support.' },
      { n: 4, f: 'What was the Treaty of Brest-Litovsk (March 1918)?', b: 'The peace treaty in which Bolshevik Russia left the First World War, giving up large areas of land, population and industry to Germany.' },
      { n: 5, f: 'Why did the Bolsheviks win the Civil War (1918–21)?', b: 'They held the central heartland and railways, Trotsky built a disciplined Red Army, War Communism supplied it, and the Whites were divided and geographically spread out.' },
      { n: 6, f: 'Why did Lenin introduce the New Economic Policy in 1921?', b: 'War Communism had caused famine and revolts, including the Kronstadt mutiny. The NEP let peasants sell surplus grain and allowed small private businesses.' },
    ]),
    ...sub(P2, 'investigation-usa-4hi1', '2.3', [
      { n: 1, f: 'Why did the US economy boom in the 1920s?', b: 'Mass production (Ford’s assembly line), new consumer goods such as cars and radios, credit and hire purchase, advertising, and Republican policies of low taxes and high tariffs.' },
      { n: 2, f: 'How did the USA restrict immigration in the 1920s?', b: 'Quota laws in 1921 and 1924 sharply limited immigration, especially from southern and eastern Europe.' },
      { n: 3, f: 'What was Prohibition (1920–33)?', b: 'A national ban on making and selling alcohol (18th Amendment). It led to speakeasies, bootlegging and gangsters such as Al Capone, and was repealed by the 21st Amendment in 1933.' },
      { n: 4, f: 'How did the Wall Street Crash (October 1929) lead to the Depression?', b: 'Share prices collapsed, banks failed, savings were lost, demand fell, businesses closed and unemployment rose to about a quarter of the workforce by 1933.' },
      { n: 5, f: 'What were the “three Rs” of Roosevelt’s New Deal?', b: 'Relief (help for the unemployed and poor), Recovery (reviving industry and farming) and Reform (changing the system to prevent another depression).' },
      { n: 6, f: 'Name four New Deal agencies and what they did', b: 'CCC: jobs for young men in conservation. AAA: paid farmers to cut production. TVA: dams and electricity in the Tennessee Valley. WPA (1935): public works jobs.' },
    ]),
    ...sub(P2, 'investigation-vietnam-4hi1', '2.4', [
      { n: 1, f: 'What did the Geneva Accords (1954) decide?', b: 'After the French defeat at Dien Bien Phu, Vietnam was temporarily divided at the 17th parallel, with elections planned for 1956. The elections were never held.' },
      { n: 2, f: 'Who were the Viet Cong?', b: 'Communist guerrillas in South Vietnam (the National Liberation Front, formed 1960), supplied from the North along the Ho Chi Minh Trail.' },
      { n: 3, f: 'What was the Gulf of Tonkin Resolution (August 1964)?', b: 'After reported attacks on US ships, Congress allowed President Johnson to use military force in Vietnam without a declaration of war.' },
      { n: 4, f: 'Why was the Tet Offensive (1968) a turning point?', b: 'Although the communist attacks were defeated militarily, they showed that the war was far from won and turned much of US public opinion against it.' },
      { n: 5, f: 'What was Vietnamisation?', b: 'Nixon’s policy from 1969 of withdrawing US troops and handing the fighting over to the South Vietnamese army.' },
      { n: 6, f: 'How did the Vietnam War end?', b: 'The Paris Peace Accords (January 1973) withdrew US forces. North Vietnam captured Saigon on 30 April 1975, and Vietnam was united under communist rule.' },
    ]),
    ...sub(P2, 'investigation-east-germany-4hi1', '2.5', [
      { n: 1, f: 'Why was the Berlin Wall built on 13 August 1961?', b: 'Millions of East Germans, many young and skilled, had escaped through West Berlin. The wall stopped the outflow.' },
      { n: 2, f: 'Who led East Germany between 1958 and 1989?', b: 'Walter Ulbricht until 1971, then Erich Honecker until October 1989.' },
      { n: 3, f: 'What was the Stasi?', b: 'East Germany’s Ministry for State Security, the secret police, which used a huge network of informers to watch the population.' },
      { n: 4, f: 'What was Ostpolitik?', b: 'West German Chancellor Willy Brandt’s policy of improving relations with East Germany and the Eastern bloc. The Basic Treaty (1972) led to both German states joining the UN in 1973.' },
      { n: 5, f: 'How did the East German regime collapse in 1989–90?', b: 'Mass emigration through Hungary and peaceful protests such as the Leipzig Monday demonstrations forced Honecker out. The Berlin Wall opened on 9 November 1989, and Germany was reunified on 3 October 1990.' },
    ]),

    // Paper 2 Breadth Studies
    ...sub(P2, 'breadth-study-america-4hi1', '2.6', [
      { n: 1, f: 'Breadth Study skill: what does a “how far did X change” question require?', b: 'A judgement about the extent and pace of change over the period, supported by turning points and periods of continuity, rather than a list of events.' },
      { n: 2, f: 'What was the Louisiana Purchase (1803)?', b: 'The USA bought the vast Louisiana territory from France, roughly doubling its size.' },
      { n: 3, f: 'What was Manifest Destiny?', b: 'The belief, popular in the 1840s, that the USA was destined to expand across North America to the Pacific.' },
      { n: 4, f: 'What were the Indian Removal Act (1830) and the Trail of Tears?', b: 'The Act allowed the forced removal of Native American nations east of the Mississippi to lands in the west. Thousands of Cherokee died on the forced march of 1838–39, the Trail of Tears.' },
      { n: 5, f: 'How did the Mexican–American War (1846–48) increase sectional tension?', b: 'The USA gained vast new territory from Mexico, reopening the question of whether slavery would spread into it. The Compromise of 1850 tried to settle this.' },
      { n: 6, f: 'What was Reconstruction (1865–77)?', b: 'The rebuilding of the South after the Civil War, including the 13th, 14th and 15th Amendments. It ended in 1877, after which Southern states imposed segregation and restricted Black voting.' },
    ]),
    ...sub(P2, 'breadth-study-medicine-4hi1', '2.7', [
      { n: 1, f: 'What did John Snow show about cholera in 1854?', b: 'He mapped deaths in Soho, London, linked them to the Broad Street water pump, and had its handle removed. It showed cholera spread through contaminated water.' },
      { n: 2, f: 'What was Pasteur’s germ theory?', b: 'Pasteur showed (published 1861) that microbes in the air caused decay, which led to the idea that specific germs cause disease.' },
      { n: 3, f: 'How did Robert Koch build on germ theory?', b: 'He identified the specific bacteria causing particular diseases, such as tuberculosis (1882) and cholera (1883), and developed methods of staining and growing bacteria.' },
      { n: 4, f: 'What did Lister introduce in 1867?', b: 'Antiseptic surgery, using carbolic acid to kill germs on wounds, instruments and dressings, which greatly reduced infection after operations.' },
      { n: 5, f: 'How was penicillin discovered and developed?', b: 'Alexander Fleming noticed in 1928 that a mould killed bacteria. Howard Florey and Ernst Chain developed it into a usable drug around 1940, and it was mass-produced during the Second World War.' },
      { n: 6, f: 'When was the National Health Service created, and what did it offer?', b: 'On 5 July 1948, under health minister Aneurin Bevan: healthcare free at the point of use for everyone in Britain.' },
      { n: 7, f: 'What was Paul Ehrlich’s “magic bullet” (1909)?', b: 'Salvarsan 606, the first chemical drug to target a specific microbe, used against syphilis.' },
    ]),
    ...sub(P2, 'breadth-study-japan-4hi1', '2.8', [
      { n: 1, f: 'Why is 1853 a turning point in Japanese history?', b: 'US Commodore Perry arrived with warships and forced Japan to open its ports to trade (Treaty of Kanagawa, 1854), ending its long isolation.' },
      { n: 2, f: 'What was the Meiji Restoration (1868)?', b: 'The overthrow of the Tokugawa shogunate and the return of power to the emperor, followed by rapid modernisation of the army, industry, education and government.' },
      { n: 3, f: 'What did Japan gain from its wars with China (1894–95) and Russia (1904–05)?', b: 'From China: Taiwan. From Russia: influence in Korea and southern Manchuria. Japan annexed Korea in 1910.' },
      { n: 4, f: 'Why was the Russo-Japanese War (1904–05) significant?', b: 'It was the first modern victory of an Asian power over a European one, including the naval Battle of Tsushima (1905).' },
      { n: 5, f: 'How did Japan expand in the 1930s?', b: 'It seized Manchuria (1931), left the League (1933), began full-scale war with China in 1937, and moved into South-East Asia in 1940–41.' },
      { n: 6, f: 'How did Japan’s war end in 1945?', b: 'After atomic bombs on Hiroshima (6 August) and Nagasaki (9 August) and the Soviet declaration of war, Japan surrendered; the formal surrender was signed on 2 September 1945.' },
    ]),
    ...sub(P2, 'breadth-study-china-4hi1', '2.9', [
      { n: 1, f: 'What happened in China in 1911–12?', b: 'A revolution overthrew the Qing dynasty; the last emperor, Puyi, abdicated in 1912 and China became a republic. Sun Yat-sen was a leading figure.' },
      { n: 2, f: 'What was the Long March (1934–35)?', b: 'The retreat of the Communists from the Nationalists across thousands of kilometres to Shaanxi. Mao Zedong emerged as the Communist leader.' },
      { n: 3, f: 'When was the People’s Republic of China founded?', b: '1 October 1949, after the Communists won the civil war. Chiang Kai-shek’s Nationalists retreated to Taiwan.' },
      { n: 4, f: 'What was the Great Leap Forward (1958)?', b: 'Mao’s campaign to industrialise rapidly through communes and backyard furnaces. It led to a famine in which tens of millions died.' },
      { n: 5, f: 'What was the Cultural Revolution (from 1966)?', b: 'Mao’s campaign to purge “bourgeois” and traditional influences, carried out by the Red Guards, which caused violence and chaos until his death in 1976.' },
      { n: 6, f: 'What changed under Deng Xiaoping from 1978, and what happened in 1989?', b: 'Economic reform opened China to markets and foreign investment, but without political reform. In June 1989 the army crushed pro-democracy protests in and around Tiananmen Square.' },
    ]),
    ...sub(P2, 'breadth-study-international-organisations-4hi1', '2.10', [
      { n: 1, f: 'Why did the League of Nations fail?', b: 'Structural weaknesses: the USA never joined, it had no army, decisions needed unanimity, sanctions were weak, and Britain and France put their own interests first. It failed over Manchuria (1931) and Abyssinia (1935–36).' },
      { n: 2, f: 'When was the United Nations founded?', b: 'Its Charter was signed in San Francisco in June 1945 and came into force on 24 October 1945.' },
      { n: 3, f: 'How is the UN Security Council organised?', b: 'Five permanent members with a veto (USA, USSR/Russia, Britain, France and China) plus elected non-permanent members.' },
      { n: 4, f: 'Why could the UN act in Korea in 1950?', b: 'The USSR was boycotting the Security Council, so it could not veto the decision to send UN forces to defend South Korea.' },
      { n: 5, f: 'What was the first armed UN peacekeeping force?', b: 'The UN Emergency Force sent to Egypt after the Suez Crisis of 1956.' },
      { n: 6, f: 'Give two examples of UN peacekeeping failures in the 1990s', b: 'Rwanda (1994), where the UN did not stop the genocide, and Srebrenica in Bosnia (1995), where a UN-protected safe area fell and thousands of Bosniak men and boys were killed.' },
    ]),
    ...sub(P2, 'breadth-study-warfare-4hi1', '2.11', [
      { n: 1, f: 'What was new about Blitzkrieg warfare (1939–40)?', b: 'Speed and coordination: concentrated tanks, motorised infantry and dive-bombers broke through and encircled the enemy, avoiding the trench stalemate of 1914–18.' },
      { n: 2, f: 'How did the atomic bomb change warfare after 1945?', b: 'It made total war between nuclear powers potentially suicidal, leading to deterrence and mutually assured destruction (MAD) during the Cold War.' },
      { n: 3, f: 'Why did guerrilla warfare succeed against the USA in Vietnam?', b: 'The Viet Cong used ambushes, tunnels and booby traps, blended into the population and avoided set-piece battles, so US firepower could not bring victory.' },
      { n: 4, f: 'What did the Gulf War (1991) show about modern warfare?', b: 'A US-led coalition used air power, precision-guided weapons and modern communications to expel Iraq from Kuwait quickly with few coalition casualties.' },
      { n: 5, f: 'How did the 11 September 2001 attacks change international conflict?', b: 'They began the “War on Terror” against non-state groups such as al-Qaeda, including the invasion of Afghanistan (2001) and Iraq (2003), and later widespread use of drones.' },
    ]),
    ...sub(P2, 'breadth-study-middle-east-4hi1', '2.12', [
      { n: 1, f: 'What was the Balfour Declaration (1917)?', b: 'A British government statement supporting a “national home for the Jewish people” in Palestine, while saying the rights of existing non-Jewish communities should not be harmed.' },
      { n: 2, f: 'What happened in 1948 in Palestine?', b: 'Britain’s mandate ended and Israel declared independence on 14 May 1948. In the war that followed, hundreds of thousands of Palestinians became refugees.' },
      { n: 3, f: 'What was the Suez Crisis (1956)?', b: 'After Nasser nationalised the Suez Canal, Britain, France and Israel attacked Egypt. Pressure from the USA and USSR forced them to withdraw.' },
      { n: 4, f: 'What territory did Israel capture in the Six-Day War (June 1967)?', b: 'The Sinai Peninsula and Gaza from Egypt, the West Bank and East Jerusalem from Jordan, and the Golan Heights from Syria.' },
      { n: 5, f: 'What were the results of the 1973 Yom Kippur War?', b: 'Egypt and Syria attacked Israel. Arab oil producers used an oil embargo against Israel’s supporters, and the war led towards the Camp David Accords (1978) between Egypt and Israel.' },
      { n: 6, f: 'What were the Oslo Accords (1993)?', b: 'Agreements between Israel and the PLO in which each recognised the other and limited Palestinian self-rule was set up in Gaza and parts of the West Bank.' },
      { n: 7, f: 'What was the Arab Spring?', b: 'A wave of protests and uprisings that began in Tunisia in December 2010 and spread across the Arab world in 2011, toppling leaders in Tunisia, Egypt and Libya.' },
    ]),
    ...sub(P2, 'breadth-study-britain-diversity-4hi1', '2.13', [
      { n: 1, f: 'How did women gain the vote in Britain?', b: 'The Representation of the People Act 1918 gave the vote to women over 30 who met a property qualification. The Equal Franchise Act 1928 gave women the vote on the same terms as men, at 21.' },
      { n: 2, f: 'Why is the arrival of the Empire Windrush (1948) seen as a turning point?', b: 'It brought one of the first large groups of Caribbean migrants to Britain after the war, beginning large-scale Commonwealth immigration.' },
      { n: 3, f: 'What did the Race Relations Acts do?', b: 'The 1965 Act banned discrimination in public places; the 1968 Act extended this to housing and employment; the 1976 Act set up the Commission for Racial Equality.' },
      { n: 4, f: 'Which laws of the 1970s tackled sex discrimination?', b: 'The Equal Pay Act 1970 and the Sex Discrimination Act 1975.' },
      { n: 5, f: 'What did the Macpherson Report (1999) conclude?', b: 'Inquiring into the police handling of the 1993 murder of Stephen Lawrence, it found the Metropolitan Police “institutionally racist”.' },
      { n: 6, f: 'Name three milestones in gay rights in Britain', b: 'The Sexual Offences Act 1967 (partly decriminalised homosexuality in England and Wales), the Civil Partnership Act 2004, and the Equality Act 2010.' },
    ]),
  ],
};
