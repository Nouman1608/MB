/**
 * D-444 -- flashcards for Cambridge International AS & A Level History 9489 (2027-2029).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   The syllabus prints its own subtopic numbers per option, so the same number
 *   recurs: AS topics 1-9, Paper 3 topics 1-3 and Paper 4 topics 1-9. To keep
 *   ids unique, n runs from 1 on the AS (Papers 1 and 2) topics, from 11 on the
 *   Paper 3 historical interpretations topics and from 21 on the Paper 4 depth
 *   studies. So '1-1' is France, '1-11' is the origins of the First World War
 *   and '1-21' is Mussolini's Italy.
 *
 * The course's revision notes map to topics only (no subtopic), so no card can
 * cite a page as `source`: every card is authored (origin 'authored'), written
 * from Marlbridge's own 9489 study guides and revision notes. Not tiered.
 * Plain text only (see types.ts).
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

const EUR = 'european-option-modern-europe-9489';
const AME = 'american-option-history-usa-9489';
const INT = 'international-option-history-9489';
const HI = 'historical-interpretations-9489';
const DEU = 'depth-study-european-interwar-9489';
const DUS = 'depth-study-usa-9489';
const DIN = 'depth-study-international-history-9489';

export const DECK_CAMBRIDGE_A_LEVEL_WORLD_HISTORY: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'a-level',
  subjectSlug: 'world-history',
  syllabusCode: '9489',
  syllabusSeries: '2027-2029',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // AS European option: Modern Europe, 1774-1924
    ...sub(EUR, 'france-1774-1814-9489', '1', [
      { n: 1, f: 'What were the long-term causes of the French Revolution?', b: 'The estates system, which put the tax burden on the Third Estate; Enlightenment ideas of liberty, equality and popular sovereignty; a financial crisis made worse by the cost of the American war; poor harvests and high bread prices; and the weakness of Louis XVI.' },
      { n: 2, f: 'Why is the financial crisis seen as the trigger of 1789?', b: 'Royal bankruptcy forced Louis XVI to call the Estates-General in 1789, its first meeting since 1614. That gave the Third Estate a platform and turned a money problem into a constitutional one.' },
      { n: 3, f: 'Put in order: storming of the Bastille, Tennis Court Oath, flight to Varennes, execution of Louis XVI', b: 'Tennis Court Oath (June 1789) → storming of the Bastille (14 July 1789) → flight to Varennes (June 1791) → execution of Louis XVI (January 1793).' },
      { n: 4, f: 'How is the Terror (1793-94) usually explained?', b: 'By a mix of circumstance and ideology: foreign invasion, counter-revolution in the Vendée, economic crisis, and the ideology of the Committee of Public Safety. A strong answer weighs circumstance against ideology. It ended with Robespierre’s fall at Thermidor (July 1794).' },
      { n: 5, f: 'What were Napoleon’s main domestic reforms?', b: 'The Napoleonic Code, the Concordat with the Catholic Church (1801), the Bank of France, the lycée school system, and centralised administration through prefects.' },
      { n: 6, f: 'Was Napoleon the heir or the betrayer of the Revolution?', b: 'Heir: he kept legal equality, careers open to talent and the end of feudal privilege.\nBetrayer: he ended political liberty, censored the press, created a new hereditary nobility and crowned himself Emperor (1804). Use both sides, then judge.' },
      { n: 7, f: 'Why did Napoleon fall by 1814?', b: 'The Continental System failed and alienated allies; the Peninsular War drained resources; the 1812 Russian campaign destroyed the Grande Armée; and the nationalism he had helped awaken turned against him. He abdicated in April 1814.' },
    ]),
    ...sub(EUR, 'liberalism-nationalism-germany-9489', '2', [
      { n: 1, f: 'What was the German Confederation of 1815?', b: 'A loose league of German states created by the Congress of Vienna in 1815, presided over by Austria. It was not a nation state, and Metternich used it to hold back liberal and nationalist movements.' },
      { n: 2, f: 'What was the Zollverein and why does it matter to German unification?', b: 'A Prussian-led customs union formed in 1834 that excluded Austria. It tied the economies of many German states to Prussia, an argument that unification was driven by forces already in motion, not by Bismarck alone.' },
      { n: 3, f: 'Why did the 1848 Frankfurt Parliament fail to unify Germany?', b: 'It had no army or power of its own, was divided over a greater (with Austria) or smaller (without Austria) Germany, and in 1849 Frederick William IV of Prussia refused the crown it offered him. The princes then recovered control.' },
      { n: 4, f: 'What were Bismarck’s three wars of unification?', b: 'Against Denmark (1864), Austria (1866) and France (1870-71). Each was fought only after the opponent had been diplomatically isolated, and each stopped once its objective was secured.' },
      { n: 5, f: 'What was the significance of the Ems Telegram (1870)?', b: 'Bismarck edited the report of the King’s meeting with the French ambassador so that it read as an insult. France declared war, so the southern German states joined Prussia against an apparent aggressor rather than being absorbed.' },
      { n: 6, f: 'When and where was the German Empire proclaimed?', b: 'In the Hall of Mirrors at Versailles on 18 January 1871, with Wilhelm I of Prussia as German Emperor.' },
      { n: 7, f: 'What is Realpolitik?', b: 'Politics based on practical power and national interest rather than ideology or principle. It is the usual label for Bismarck’s methods, such as his 1862 "blood and iron" speech.' },
    ]),
    ...sub(EUR, 'russia-autocracy-revolution-9489', '3', [
      { n: 1, f: 'What event opens the Russia topic in 1881, and why does it matter?', b: 'The assassination of Alexander II in 1881. His son Alexander III turned to repression and Russification and reversed many of his father’s reforms, setting the autocracy’s response to unrest up to 1917.' },
      { n: 2, f: 'What happened on Bloody Sunday (January 1905)?', b: 'Troops fired on a peaceful petitioning crowd led by Father Gapon in St Petersburg. It set off the 1905 Revolution, alongside defeat in the Russo-Japanese War.' },
      { n: 3, f: 'What did the October Manifesto (1905) promise?', b: 'Civil liberties and an elected Duma. It split the opposition and helped the Tsar survive the 1905 Revolution, but the Fundamental Laws of 1906 kept most power with him.' },
      { n: 4, f: 'What were Stolypin’s land reforms meant to achieve?', b: 'To build a loyal class of peasant landowners by letting peasants leave the commune and consolidate their own farms, so that the countryside would support the regime.' },
      { n: 5, f: 'How did the First World War lead to the February 1917 Revolution?', b: 'Military defeats, economic strain and food shortages undermined army morale and the Tsar’s legitimacy, especially after Nicholas II took personal command in 1915. Strikes and mutiny in Petrograd forced his abdication in March 1917.' },
      { n: 6, f: 'Why did the Provisional Government lose power in October 1917?', b: 'It continued the war and delayed land reform, shared power with the Petrograd Soviet, and was weakened by the Kornilov affair. The Bolsheviks seized power in October 1917.' },
      { n: 7, f: 'War Communism vs the New Economic Policy', b: 'War Communism (1918-21): state control of industry and forced grain requisitioning during the Civil War.\nNEP (from 1921): allowed private trade and small business and replaced requisitioning with a tax in kind, after unrest such as the Kronstadt rising.' },
    ]),

    // AS American option: The history of the USA, 1820-1941
    ...sub(AME, 'civil-war-reconstruction-9489', '4', [
      { n: 1, f: 'What were the interlocking causes of the American Civil War?', b: 'The expansion of slavery into new territories, economic divergence between an industrialising North and an agrarian, slavery-dependent South, and disputes over federal versus state power. Argue how they were entangled rather than listing them.' },
      { n: 2, f: 'What did the Kansas-Nebraska Act (1854) do, and why did it matter?', b: 'It let settlers in those territories decide on slavery by popular sovereignty, overturning the Missouri Compromise line of 1820. Violence in "Bleeding Kansas" followed and the Republican Party was formed in opposition.' },
      { n: 3, f: 'What did the Dred Scott decision (1857) rule?', b: 'The Supreme Court ruled that Black Americans were not citizens and that Congress could not ban slavery in the territories, deepening sectional conflict.' },
      { n: 4, f: 'What did the Emancipation Proclamation (1 January 1863) do?', b: 'It declared enslaved people free in the Confederate states still in rebellion, making the end of slavery a Union war aim. It did not apply to slave states loyal to the Union.' },
      { n: 5, f: 'What did the 13th, 14th and 15th Amendments do?', b: '13th (1865): abolished slavery.\n14th (1868): citizenship and equal protection of the laws.\n15th (1870): the vote could not be denied on grounds of race.' },
      { n: 6, f: 'How did Reconstruction end?', b: 'With the Compromise of 1877: Rutherford Hayes became President and federal troops were withdrawn from the South, leaving the question of what freedom and citizenship meant for formerly enslaved people unresolved.' },
    ]),
    ...sub(AME, 'gilded-age-progressive-era-9489', '5', [
      { n: 1, f: 'Where does the name "Gilded Age" come from?', b: 'From Mark Twain and Charles Dudley Warner’s novel The Gilded Age (1873): a glittering surface of wealth over deep problems of inequality, corruption and poor urban and working conditions.' },
      { n: 2, f: 'What did the Sherman Antitrust Act (1890) do?', b: 'It outlawed contracts and combinations in restraint of trade and attempts at monopoly. It was weakly enforced at first, but later used against trusts such as Standard Oil.' },
      { n: 3, f: 'Who were the Populists?', b: 'A farmers’ protest movement that formed the People’s Party in 1892, calling for measures such as a graduated income tax, government ownership of the railroads and an expanded money supply through the free coinage of silver.' },
      { n: 4, f: 'Who were the muckrakers?', b: 'Investigative journalists and writers of the Progressive Era who exposed corruption and abuses. Upton Sinclair’s The Jungle (1906) helped bring about the Meat Inspection Act and the Pure Food and Drug Act of 1906.' },
      { n: 5, f: 'Name four constitutional amendments of the Progressive Era', b: '16th (1913): federal income tax.\n17th (1913): direct election of senators.\n18th (ratified 1919): prohibition of alcohol.\n19th (1920): women’s right to vote.' },
      { n: 6, f: 'How should a Gilded Age and Progressive Era answer be structured?', b: 'Link specific Gilded Age problems to the specific Progressive reforms that responded to them, and judge how far each worked. A named reform is worth more than a description of the period’s atmosphere.' },
    ]),
    ...sub(AME, 'great-depression-new-deal-9489', '6', [
      { n: 1, f: 'What caused the Wall Street Crash of October 1929?', b: 'Speculative excess, including buying shares on margin, together with structural weaknesses: an unstable banking system, depressed agriculture and the limits of 1920s prosperity, such as overproduction and unequal income.' },
      { n: 2, f: 'How did Hoover respond to the Depression?', b: 'He relied on voluntary action and limited federal help, such as the Reconstruction Finance Corporation (1932), and signed the Hawley-Smoot Tariff (1930). The eviction of the Bonus Army in 1932 damaged his reputation.' },
      { n: 3, f: 'What are the three Rs of the New Deal?', b: 'Relief (immediate help for the unemployed and poor), recovery (reviving the economy) and reform (preventing another crash). Evaluate measures against the aim each was meant to meet.' },
      { n: 4, f: 'Name three measures of the First New Deal (1933)', b: 'The Emergency Banking Act, the Agricultural Adjustment Act (AAA) and the National Industrial Recovery Act (NIRA). Others include the Civilian Conservation Corps and the Tennessee Valley Authority.' },
      { n: 5, f: 'Name two major measures of the Second New Deal (1935)', b: 'The Social Security Act, which created old-age pensions and unemployment insurance, and the Wagner Act (National Labor Relations Act), which protected workers’ right to join unions and bargain collectively.' },
      { n: 6, f: 'What opposition did the New Deal face?', b: 'From the right, business groups such as the American Liberty League and a Supreme Court that struck down the NIRA in 1935. From the left, critics such as Huey Long, who argued it did too little. Roosevelt’s 1937 court-packing plan failed.' },
    ]),

    // AS International option: International history, 1870-1939
    ...sub(INT, 'imperialism-emergence-world-powers-9489', '7', [
      { n: 1, f: 'What is meant by the "New Imperialism"?', b: 'The rapid expansion of European empires, especially in Africa and Asia, from about 1870, driven by economic motives (markets, raw materials, investment) and political ones (prestige, strategy, nationalism).' },
      { n: 2, f: 'What was the Berlin Conference of 1884-85?', b: 'A meeting of European powers that set rules for claiming African territory, an attempt to manage imperial rivalry during the Scramble for Africa.' },
      { n: 3, f: 'What was the Boxer Rebellion?', b: 'An anti-foreign, anti-Christian uprising in northern China (1899-1901). The foreign legations in Beijing were besieged in 1900 until an international force relieved them.' },
      { n: 4, f: 'How did Japan emerge as a world power by 1918?', b: 'Through modernisation after the Meiji Restoration (1868), victory over China (1894-95), the Anglo-Japanese Alliance (1902), victory over Russia (1904-05) and entry into the First World War on the Allied side in 1914.' },
      { n: 5, f: 'What did the USA gain from the Spanish-American War (1898)?', b: 'The Philippines, Puerto Rico and Guam, with Cuba under US influence. Hawaii was also annexed in 1898. It marked the USA’s arrival as an overseas power.' },
      { n: 6, f: 'When did the USA enter the First World War, and why does it matter here?', b: 'April 1917. It completed the USA’s emergence as a world power and made it central to the peace settlement.' },
    ]),
    ...sub(INT, 'international-relations-1919-29-9489', '8', [
      { n: 1, f: 'Which treaty was signed with each defeated power in 1919-20?', b: 'Versailles: Germany (1919). Saint-Germain: Austria (1919). Neuilly: Bulgaria (1919). Trianon: Hungary (1920). Sèvres: Turkey (1920), later replaced by the Treaty of Lausanne (1923).' },
      { n: 2, f: 'Why did Germans call the Treaty of Versailles a "Diktat"?', b: 'Because it was a dictated peace: Germany was not allowed to negotiate and had to accept the war-guilt clause (Article 231), reparations, territorial losses and military limits.' },
      { n: 3, f: 'What was the Ruhr Crisis of 1923?', b: 'France and Belgium occupied the Ruhr in January 1923 after Germany fell behind on reparations. German passive resistance followed and hyperinflation spiralled.' },
      { n: 4, f: 'Dawes Plan (1924) vs Young Plan (1929)', b: 'Dawes Plan: rescheduled German reparation payments, backed by American loans.\nYoung Plan: reduced the total reparations bill and extended the payment period.' },
      { n: 5, f: 'What did the Locarno Treaties (1925) do?', b: 'Germany, France and Belgium accepted their western borders, guaranteed by Britain and Italy. Germany joined the League of Nations in 1926. Locarno marked the high point of 1920s cooperation.' },
      { n: 6, f: 'What was the Kellogg-Briand Pact (1928)?', b: 'An agreement, eventually signed by over 60 countries, to renounce war as an instrument of national policy. It had no means of enforcement.' },
      { n: 7, f: 'Name three 1920s disputes the League of Nations handled', b: 'The Aaland Islands (awarded to Finland, 1921), Vilna (seized by Poland, 1920) and Upper Silesia (divided after a plebiscite, 1921). The Corfu Incident (1923) showed its weakness against a great power.' },
    ]),
    ...sub(INT, 'international-history-1929-39-9489', '9', [
      { n: 1, f: 'How did the League respond to the Manchurian crisis?', b: 'After Japan seized Manchuria (from September 1931), the League sent the Lytton Commission, whose report condemned Japan. Japan simply left the League in 1933. No sanctions were imposed.' },
      { n: 2, f: 'Why did the Abyssinian crisis damage the League?', b: 'When Italy invaded Abyssinia in October 1935, sanctions excluded oil, and the Hoare-Laval Pact (December 1935) showed Britain and France ready to reward the aggressor. Italy moved closer to Germany.' },
      { n: 3, f: 'List Hitler’s main steps of expansion, 1936-39', b: 'Remilitarisation of the Rhineland (March 1936), Anschluss with Austria (March 1938), the Sudetenland after Munich (September 1938), the rest of Czechoslovakia (March 1939) and the invasion of Poland (1 September 1939).' },
      { n: 4, f: 'What is appeasement, and why did Britain pursue it?', b: 'Avoiding war by meeting grievances through concessions. Reasons include economic weakness and the cost of rearmament, Britain not yet being militarily ready, sympathy for some German grievances, and distrust of the USSR.' },
      { n: 5, f: 'Why did Stalin sign the Nazi-Soviet Pact (23 August 1939)?', b: 'To buy time and security after Munich left the USSR isolated, and because Britain and France seemed unwilling to ally seriously. A secret protocol divided Poland and eastern Europe into spheres of influence.' },
      { n: 6, f: 'Why did Britain and France declare war on Germany in September 1939?', b: 'Germany invaded Poland on 1 September 1939, which Britain and France had guaranteed in March 1939. They declared war on 3 September.' },
    ]),

    // A Level Paper 3: Historical interpretations
    ...sub(HI, 'origins-first-world-war-9489', '1', [
      { n: 11, f: 'What did Article 231 of the Treaty of Versailles do?', b: 'It stated the responsibility of Germany and its allies for the war, a position that shaped early writing on its origins.' },
      { n: 12, f: 'What was the Fischer thesis?', b: 'In Griff nach der Weltmacht (1961), Fritz Fischer argued that Germany’s leaders pursued expansionist aims and took a calculated risk of war in July 1914. Critics asked whether war aims drawn up during the war can be read back into 1914.' },
      { n: 13, f: 'What did Lloyd George’s word "slithered" suggest about 1914?', b: 'That the powers drifted into war together, an interwar view of shared responsibility that moved away from blaming one country.' },
      { n: 14, f: 'What does Christopher Clark argue in The Sleepwalkers (2012)?', b: 'That the war came from choices made under uncertainty by many decision-makers in several capitals, not from one nation’s plan. Critics say it reduces the weight of German decisions in July 1914.' },
      { n: 15, f: 'What are structural or system interpretations of 1914?', b: 'They stress alliances, arms races, nationalism, war plans and the diplomatic system, arguing that no single state created the situation.' },
      { n: 16, f: 'What three questions should you ask of any historian’s extract?', b: 'What is the argument (in one sentence)? What evidence is it built on, and what does it leave out? Why might it look like this, given when the historian wrote and which sources were available?' },
    ]),
    ...sub(HI, 'the-holocaust-9489', '2', [
      { n: 11, f: 'What is the intentionalist interpretation of the Holocaust?', b: 'That Hitler’s antisemitic ideology and plans drove events towards mass murder from early on.' },
      { n: 12, f: 'What is the functionalist (structuralist) interpretation of the Holocaust?', b: 'That policy escalated through improvisation, rivalry and local initiative within a chaotic system, often called cumulative radicalisation. Hans Mommsen and Martin Broszat are associated with it.' },
      { n: 13, f: 'How do synthesis interpretations explain the move to genocide?', b: 'They combine ideology with circumstance: war, especially the invasion of the Soviet Union in 1941, created the conditions for decisions, and the Wannsee Conference (January 1942) co-ordinated a programme already under way.' },
      { n: 14, f: 'What did Christopher Browning argue in Ordinary Men (1992)?', b: 'From a study of Reserve Police Battalion 101, that conformity, peer pressure and career concerns, alongside ideology, explain why ordinary men took part in killing.' },
      { n: 15, f: 'What did Daniel Goldhagen argue in Hitler’s Willing Executioners (1996)?', b: 'That an eliminationist antisemitism was widespread in German society and explains participation. The thesis was widely criticised by other historians.' },
      { n: 16, f: 'Difference of emphasis vs difference of kind between historians', b: 'Emphasis: they agree on the causes but rank them differently.\nKind: they disagree about who was responsible or what happened.' },
    ]),
    ...sub(HI, 'origins-development-cold-war-9489', '3', [
      { n: 11, f: 'What is the orthodox (traditionalist) view of the Cold War?', b: 'Written in the West soon after the war, it blames Soviet expansion in Eastern Europe and Stalin’s ideology, and reads Western policies such as the Truman Doctrine and Marshall Plan (both 1947) as defensive.' },
      { n: 12, f: 'What is the revisionist view of the Cold War?', b: 'From the 1960s, historians such as William Appleman Williams and Gabriel Kolko stressed American economic aims and the pursuit of an open world economy, and saw Soviet behaviour as largely defensive.' },
      { n: 13, f: 'What is the post-revisionist view of the Cold War?', b: 'It combines factors, including misperception and security fears on both sides. John Lewis Gaddis is the classic example of this approach.' },
      { n: 14, f: 'How did the opening of Soviet archives change the debate?', b: 'It gave historians evidence about Soviet decision-making that earlier writers lacked. Gaddis’s We Now Know (1997) used it to give more weight to Stalin’s role and ideology.' },
      { n: 15, f: 'Long Telegram vs Novikov telegram (both 1946)', b: 'Long Telegram: George Kennan, from Moscow, described Soviet expansionism and shaped containment.\nNovikov telegram: the Soviet ambassador in Washington described the USA as seeking world domination.' },
      { n: 16, f: 'Why is it weak to dismiss an interpretation just because it is old?', b: 'Its quality depends on its evidence and reasoning. Older work may still raise valid points, so test it against your own knowledge instead.' },
    ]),

    // A Level Paper 4 European option: European history, 1919-41
    ...sub(DEU, 'mussolinis-italy-9489', '1', [
      { n: 21, f: 'How did Mussolini become prime minister in October 1922?', b: 'After the March on Rome, King Victor Emmanuel III invited him to form a government: legal in form but obtained under threat of force.' },
      { n: 22, f: 'What was the Acerbo Law (1923)?', b: 'An electoral law giving a large majority of seats to the party with the biggest vote. The 1924 election that followed was marked by intimidation.' },
      { n: 23, f: 'Why was the Matteotti crisis (1924) a turning point?', b: 'The murder of the socialist deputy Giacomo Matteotti threatened Mussolini, but he survived. In January 1925 he took responsibility, and opposition parties and the free press were then suppressed.' },
      { n: 24, f: 'What did the Lateran Treaties (1929) do?', b: 'They settled relations between the Italian state and the Catholic Church and created Vatican City.' },
      { n: 25, f: 'What were the Battle for Grain and Quota 90?', b: 'Battle for Grain (1925): a drive to raise wheat output towards self-sufficiency.\nQuota 90 (1926): a revaluation of the lira for prestige, which hurt exports. Judge them by results, not slogans.' },
      { n: 26, f: 'How did Mussolini’s foreign policy draw Italy towards Germany?', b: 'The invasion of Ethiopia (1935) brought League sanctions; the Rome-Berlin Axis followed in 1936, anti-Jewish laws in 1938 and the Pact of Steel in 1939. Italy entered the Second World War in June 1940.' },
    ]),
    ...sub(DEU, 'stalins-russia-9489', '2', [
      { n: 21, f: 'How did Stalin defeat his rivals after Lenin died in 1924?', b: 'He used his post as General Secretary, control of party appointments and the ban on factions to defeat Trotsky, then Zinoviev and Kamenev, then Bukharin.' },
      { n: 22, f: 'What was the First Five-Year Plan?', b: 'Stalin’s programme of rapid industrialisation from 1928, prioritising heavy industry such as coal and steel. Balance real growth against waste, poor quality and human cost.' },
      { n: 23, f: 'What was collectivisation, and what were its effects?', b: 'From 1929 peasants were forced into collective farms, with a campaign against so-called kulaks. Output fell and a severe famine followed in 1932-33.' },
      { n: 24, f: 'What followed the murder of Sergei Kirov in December 1934?', b: 'Wider arrests, then the show trials of 1936-38 and purges of the party, the army and the NKVD itself, with mass executions and the expansion of the Gulag.' },
      { n: 25, f: 'How did Soviet foreign policy change between 1934 and 1941?', b: 'The USSR joined the League in 1934 and backed collective security, but Munich (1938) left it isolated. It signed the Nazi-Soviet Pact in August 1939 and was invaded in Operation Barbarossa on 22 June 1941.' },
    ]),
    ...sub(DEU, 'hitlers-germany-9489', '3', [
      { n: 21, f: 'How did Hitler become Chancellor on 30 January 1933?', b: 'The Depression brought mass unemployment and polarisation, the Nazi vote rose sharply between 1928 and 1932, and conservative elites made a deal that put him in office, believing they could control him.' },
      { n: 22, f: 'Reichstag fire decree vs Enabling Act (1933)', b: 'After the Reichstag fire (27 February 1933), an emergency decree suspended civil rights.\nThe Enabling Act (23 March 1933) let the government make laws without the Reichstag.' },
      { n: 23, f: 'What was the Night of the Long Knives (30 June 1934)?', b: 'The purge of the SA leadership, including Ernst Röhm, and other opponents. After Hindenburg died in August 1934, Hitler combined the offices of Chancellor and President.' },
      { n: 24, f: 'How did persecution of Jewish people escalate in 1935-38?', b: 'The Nuremberg Laws (1935) removed Jewish citizenship and banned marriage between Jews and non-Jews; the violence of Kristallnacht (9-10 November 1938) followed.' },
      { n: 25, f: 'Why should Nazi unemployment figures be treated with caution?', b: 'Rearmament and public works did cut unemployment, but conscription and the exclusion of some groups, such as many women and Jewish people, from the figures overstate genuine recovery.' },
      { n: 26, f: 'Italy, the USSR and Germany: compare the route to power', b: 'Italy: appointed by the king after pressure.\nUSSR: a party struggle after Lenin’s death.\nGermany: appointed Chancellor, then seized control. Explain why the routes differed.' },
    ]),

    // A Level Paper 4 American option: The USA, 1945-93
    ...sub(DUS, 'truman-eisenhower-postwar-usa-9489', '4', [
      { n: 21, f: 'What was the Taft-Hartley Act (1947)?', b: 'A law restricting the power of trade unions, passed by Congress over President Truman’s veto.' },
      { n: 22, f: 'Which policies committed the USA to containment under Truman?', b: 'The Truman Doctrine and the Marshall Plan (1947), the Berlin airlift (1948-49) and the creation of NATO (1949). The Korean War began in 1950 and ended in an armistice in 1953.' },
      { n: 23, f: 'What was McCarthyism?', b: 'Senator Joseph McCarthy’s campaign, from 1950, of claims that communists had infiltrated government, fed by the Soviet atomic test and the communist victory in China (both 1949). It faded after the Senate censured him in 1954.' },
      { n: 24, f: 'What did Brown v Board of Education (1954) decide?', b: 'The Supreme Court ruled that segregated public schools were unconstitutional, overturning "separate but equal" in education.' },
      { n: 25, f: 'How did Eisenhower act on civil rights?', b: 'He sent federal troops to enforce school desegregation at Little Rock (1957) and signed the limited Civil Rights Act of 1957. Assess how far federal action was slow and reluctant.' },
      { n: 26, f: 'What did Eisenhower warn of in his farewell address (January 1961)?', b: 'The growing influence of the "military-industrial complex".' },
    ]),
    ...sub(DUS, 'time-of-challenges-usa-9489', '5', [
      { n: 21, f: 'What were the main laws of Johnson’s Great Society?', b: 'The Civil Rights Act (1964), the Voting Rights Act (1965), Medicare and Medicaid (1965) and the War on Poverty. Results were mixed, and costs rose with the war in Vietnam.' },
      { n: 22, f: 'Name key episodes of the civil rights movement, 1960-65', b: 'The sit-ins (1960), the Freedom Rides (1961), the Birmingham campaign (1963), the March on Washington (August 1963) and Selma (1965).' },
      { n: 23, f: 'What was the Gulf of Tonkin Resolution (August 1964)?', b: 'A congressional resolution that gave President Johnson broad authority to use force in Vietnam, enabling escalation.' },
      { n: 24, f: 'Why was the Tet Offensive (1968) a turning point?', b: 'It was a military setback for communist forces, but it badly damaged American public confidence in the war. Johnson did not seek re-election.' },
      { n: 25, f: 'How did Watergate end Nixon’s presidency?', b: 'The break-in at the Watergate building (June 1972) and the cover-up led to impeachment proceedings, and Nixon resigned on 9 August 1974.' },
    ]),
    ...sub(DUS, 'the-usa-1974-93-9489', '6', [
      { n: 21, f: 'What is stagflation?', b: 'High inflation combined with high unemployment and slow growth. It troubled the US economy in the 1970s, worsened by the oil shocks.' },
      { n: 22, f: 'What were Carter’s main successes and failures?', b: 'Success: the Camp David Accords (1978) between Egypt and Israel.\nFailures: economic problems and the Iran hostage crisis (1979-81), which weakened him before the 1980 election.' },
      { n: 23, f: 'What did Reagan’s economic programme include?', b: 'Tax cuts through the Economic Recovery Tax Act (1981), deregulation, cuts in domestic spending and higher defence spending. Growth revived, but federal deficits grew.' },
      { n: 24, f: 'How did Reagan’s policy towards the USSR change?', b: 'From hostile rhetoric to negotiation with Gorbachev, including the INF Treaty (1987), which removed a class of intermediate-range nuclear missiles.' },
      { n: 25, f: 'Why did George H. W. Bush lose the 1992 election despite foreign successes?', b: 'The Cold War ended and the Gulf War (1991) was won, but recession and breaking his "no new taxes" pledge damaged him at home.' },
    ]),

    // A Level Paper 4 International option: International history, 1909-94
    ...sub(DIN, 'soviet-empire-eastern-europe-9489', '7', [
      { n: 21, f: 'How did the USSR keep control of Eastern Europe?', b: 'Through local communist parties, the security services, economic links such as Comecon and the Warsaw Pact military alliance (1955).' },
      { n: 22, f: 'Hungary 1956 vs Czechoslovakia 1968', b: 'Hungary: Imre Nagy’s uprising was crushed by Soviet forces in October-November 1956.\nCzechoslovakia: Dubček’s Prague Spring, "socialism with a human face", ended with the Warsaw Pact invasion in August 1968.' },
      { n: 23, f: 'What was the Brezhnev Doctrine?', b: 'The Soviet claim, made after the 1968 invasion of Czechoslovakia, of a right to intervene in any socialist state where socialism was threatened.' },
      { n: 24, f: 'What was Solidarity?', b: 'The independent trade union that emerged in Poland in 1980. Martial law was declared in December 1981, but Solidarity survived and returned in the 1989 changes.' },
      { n: 25, f: 'Why did Soviet control of Eastern Europe collapse in 1989?', b: 'Economic stagnation, nationalism and popular opposition, Gorbachev’s glasnost and perestroika and his refusal to use force to prop up allies, and Western pressure. The Berlin Wall fell on 9 November 1989; the USSR dissolved in December 1991.' },
    ]),
    ...sub(DIN, 'end-minority-rule-south-africa-zimbabwe-9489', '8', [
      { n: 21, f: 'Which laws of 1950 built the apartheid system?', b: 'The Population Registration Act, which classified people by race, and the Group Areas Act, which assigned residential areas by race. The National Party had won power in 1948.' },
      { n: 22, f: 'Why was the Sharpeville massacre (March 1960) a turning point?', b: 'Police killed protesters against the pass laws. The ANC and PAC were banned afterwards, and the ANC turned to armed struggle.' },
      { n: 23, f: 'What happened at the Rivonia trial (1964)?', b: 'Nelson Mandela and other ANC leaders were sentenced to life imprisonment.' },
      { n: 24, f: 'How did apartheid end, 1990-94?', b: 'President de Klerk unbanned the ANC and freed Mandela on 11 February 1990. Negotiations led to the first non-racial election in April 1994, and Mandela became president.' },
      { n: 25, f: 'What was Rhodesia’s UDI (November 1965)?', b: 'Ian Smith’s Unilateral Declaration of Independence from Britain, made to preserve white minority rule. Sanctions followed but were weakened by leaks through South Africa and Mozambique.' },
      { n: 26, f: 'How did Rhodesia become Zimbabwe?', b: 'A guerrilla war by ZANU and ZAPU forces intensified in the 1970s. After the Lancaster House talks (1979), elections in 1980 brought Robert Mugabe to power and Zimbabwe became independent in April 1980.' },
    ]),
    ...sub(DIN, 'route-independence-malaysia-indonesia-9489', '9', [
      { n: 21, f: 'How did the Japanese occupation (1942-45) affect independence movements in Malaya and Indonesia?', b: 'It weakened the prestige of colonial rule and, in Indonesia, gave nationalist leaders room to organise. Sukarno and Hatta proclaimed independence on 17 August 1945.' },
      { n: 22, f: 'Why was the Malayan Union replaced by the Federation of Malaya (1948)?', b: 'Britain’s post-war Malayan Union plan met strong Malay opposition, so it gave way to the Federation of Malaya in 1948.' },
      { n: 23, f: 'What was the Malayan Emergency (1948-60)?', b: 'A British-led counter-insurgency against the Malayan Communist Party. Britain conceded independence (Merdeka) on 31 August 1957 under Tunku Abdul Rahman while the fighting continued.' },
      { n: 24, f: 'How was Malaysia formed, and how did it change in 1965?', b: 'In September 1963 Malaya joined with Sabah, Sarawak and Singapore to form Malaysia. Singapore left in August 1965.' },
      { n: 25, f: 'When did the Netherlands recognise Indonesian independence?', b: 'December 1949, after four years of war and negotiation following the 1945 proclamation.' },
      { n: 26, f: 'What was Konfrontasi?', b: 'Indonesia’s confrontation with the new state of Malaysia, 1963-66. After the events of 30 September 1965, power passed from Sukarno to General Suharto, who became acting president in 1967.' },
    ]),
  ],
};
