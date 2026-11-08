/**
 * D-444 -- flashcards for OxfordAQA International AS/A level Sociology 9690
 * (Version 1.1).
 *
 * One block per subtopic, in specification order. Card ids are
 * `<subtopic number>-<n>` and are permanent (browser progress is keyed by
 * them): add a new card with the next unused n, never renumber.
 *
 * 3.1.3 Research methods and theory is listed under both Unit 1 (Section B,
 * research methods) and Unit 2 (Section B, research methods and theory), so
 * both subtopics carry the number 3.1.3. To keep ids unique, the Unit 1 block
 * uses n 1-19 (3.1.3.1-3.1.3.4 methods, issues and data) and the Unit 2 block
 * n 21-39 (3.1.3.5 sociological theories and perspectives).
 *
 *   src: '...'  The card restates a key-terms entry on that revision-notes page,
 *               which maps to the card's subtopic; origin 'revision-notes'.
 *
 * Units 3-5 are written from Marlbridge's own 9690 revision notes and study
 * guides, with researcher names and dates as those pages give them. Units 1
 * and 2 have Marlbridge pages at unit level only, written in outline; their
 * cards follow section 3.1 of the Version 1.1 specification and the
 * sociologists it recommends, without dates, since neither source gives them.
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

const DEV = 'oxfordaqa-a-level-sociology-9690-people-and-development-revision-notes';
const ENV = 'oxfordaqa-a-level-sociology-9690-people-and-the-environment-revision-notes';
const TECH = 'oxfordaqa-a-level-sociology-9690-people-and-technology-revision-notes';

const U1 = 'unit-1-introducing-sociology-9690';
const U2 = 'unit-2-exploring-sociology-9690';
const U3 = 'unit-3-people-and-development-9690';
const U4 = 'unit-4-people-and-the-environment-9690';
const U5 = 'unit-5-people-and-technology-9690';

export const DECK_OXFORDAQA_A_LEVEL_SOCIOLOGY: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'sociology',
  syllabusCode: '9690',
  syllabusSeries: 'Version 1.1',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // Unit 1 – Introducing Sociology
    ...sub(U1, 'families-marriage-kinship-9690', '3.1.1.1', [
      { n: 1, f: 'Vertically vs horizontally extended families', b: 'Vertically extended: several generations, such as grandparents, parents and children. Horizontally extended: relatives of the same generation, such as brothers and their wives, living or working together.' },
      { n: 2, f: 'Name three alternatives to families in the specification', b: 'Communes, living alone, and foster care or children\'s homes.' },
      { n: 3, f: 'What are Therborn\'s types of family system?', b: 'Therborn grouped the world\'s families into a few major family systems linked to region and religion (e.g. European, West Asian/North African, South Asian, East Asian, Sub-Saharan African), which differ in patriarchy, marriage and sexuality.' },
      { n: 4, f: 'Matriarchal vs patriarchal families', b: 'In a matriarchal family, women (often the mother) hold authority and descent may pass through the female line. In a patriarchal family, men hold authority.' },
      { n: 5, f: 'Arranged vs love marriage', b: 'In an arranged marriage, families play the main part in choosing the partner. In a love marriage, the couple choose each other on the basis of romantic attraction. Monogamy is marriage to one partner at a time.' },
    ]),
    ...sub(U1, 'perspectives-on-families-9690', '3.1.1.2', [
      { n: 1, f: 'How does functionalism see the family\'s relationship to society?', b: 'The family performs essential functions, and the nuclear family "fits" modern industrial society: Parsons argued it is geographically mobile and specialises in primary socialisation and stabilising adult personalities.' },
      { n: 2, f: 'What did Engels argue about the family?', b: 'A Marxist view: the monogamous nuclear family developed with private property, so men could pass wealth to their legitimate heirs; the family serves capitalism as an agent of social control.' },
      { n: 3, f: 'How do Marxists see families as agents of social control?', b: 'Families pass on ruling-class ideology, teach obedience to authority and act as units of consumption, so they help keep capitalism stable.' },
      { n: 4, f: 'What did Oakley argue about the family?', b: 'A feminist view: gender roles are socially constructed, and the conventional family socialises women into a housewife role that keeps them unequal to men.' },
      { n: 5, f: 'Liberal vs radical vs Marxist feminist views of the family', b: 'Liberal: gradual progress towards equality is possible. Radical: the family is a key site of patriarchy and male power. Marxist: women\'s unpaid labour in the family benefits capitalism.' },
    ]),
    ...sub(U1, 'social-change-changing-families-9690', '3.1.1.3', [
      { n: 1, f: 'Name the demographic changes in the specification', b: 'Family size, birth and death rates, infant and child mortality, internal and international migration, and ageing populations.' },
      { n: 2, f: 'What is the pivot (sandwich) generation?', b: 'People, often in middle age, who care for both their own children and their ageing parents.' },
      { n: 3, f: 'Living apart together vs beanpole family', b: 'Living apart together: a committed couple who keep separate homes. Beanpole family: several generations alive at once with few members in each.' },
      { n: 4, f: 'What is personal life (Smart)?', b: 'An approach that studies the relationships people themselves find meaningful, such as friends as family or pets as family members, rather than starting from a fixed definition of the family.' },
      { n: 5, f: 'What did Stacey argue about family diversity?', b: 'Women have been the main agents of change in family life, creating new, more diverse "postmodern" family forms such as families stretched across divorce and remarriage.' },
      { n: 6, f: 'What are transnational families?', b: 'Families whose members live in different countries but keep close ties, often linked to diasporas and migration.' },
    ]),
    ...sub(U1, 'gender-age-experience-family-life-9690', '3.1.1.4', [
      { n: 1, f: 'Instrumental vs expressive roles', b: 'The instrumental (male "breadwinner") role is earning income. The expressive (female) role is caring and giving emotional support. Parsons saw them as natural; feminists see them as socially constructed and unequal.' },
      { n: 2, f: 'What is the triple shift?', b: 'Women doing paid work, domestic work and emotional work.' },
      { n: 3, f: 'How might power and decision-making be unequal in families?', b: 'Men may control money and major decisions, and violence against women and children is an extreme form of male power in families.' },
      { n: 4, f: 'What is child-centredness?', b: 'Family life organised around children\'s needs and interests, with more time and money spent on fewer children.' },
      { n: 5, f: 'What are boomerang families?', b: 'Families in which adult children return to live with their parents, e.g. because of housing costs or after study.' },
      { n: 6, f: 'How do the status and roles of older people vary?', b: 'In some societies older people have high status as sources of wisdom and authority; in others they are marginalised. Grandparents often provide childcare and support.' },
    ]),
    ...sub(U1, 'research-methods-9690', '3.1.3', [
      { n: 1, f: 'Positivist vs interpretivist approaches', b: 'Positivist: objective, quantitative, reliable data to find causal patterns, modelled on natural science. Interpretivist: verstehen, understanding meanings through qualitative, valid data.' },
      { n: 2, f: 'Primary vs secondary data', b: 'Primary data are collected by the researcher. Secondary data already exist: qualitative (diaries, letters, personal documents) or quantitative (official statistics).' },
      { n: 3, f: 'Formal (structured) vs informal (unstructured) interviews', b: 'Structured: set questions in a set order, comparable and reliable but subject to interviewer effect. Unstructured: a flexible conversation, valid and detailed but slow and hard to repeat.' },
      { n: 4, f: 'Participant observation: strength and weakness', b: 'Strength: very valid, as behaviour is seen in its natural setting. Weakness: cannot be replicated, uses small samples, and the researcher may "go native"; covert work raises consent issues.' },
      { n: 5, f: 'Multistage vs stratified random vs quota sampling', b: 'Multistage: sampling in stages, e.g. regions, then schools, then pupils. Stratified random: random selection within groups in proportion to the population. Quota: the researcher fills set numbers in each category.' },
      { n: 6, f: 'What is the Hawthorne effect?', b: 'People change their behaviour because they know they are being studied, reducing validity.' },
      { n: 7, f: 'Causation vs correlation', b: 'Correlation: two variables change together. Causation: one variable causes the other. A correlation alone does not prove cause.' },
      { n: 8, f: 'What does PET stand for when evaluating a method?', b: 'Practical, Ethical and Theoretical issues; the theoretical ones include reliability, validity and representativeness.' },
      { n: 9, f: 'Name the ethical issues in the specification', b: 'Informed consent, confidentiality, anonymity and participant wellbeing.' },
    ]),

    // Unit 2 – Exploring Sociology
    ...sub(U2, 'individuals-and-society-9690', '3.1.2.1', [
      { n: 1, f: 'Norms vs values vs roles', b: 'Norms: specific rules of behaviour. Values: general beliefs about what is important. Roles: behaviour expected of someone in a social position.' },
      { n: 2, f: 'What is the sociological imagination (Mills)?', b: 'The ability to connect personal troubles (e.g. one person losing a job) with public issues (e.g. mass unemployment caused by economic change).' },
      { n: 3, f: 'What is a stereotype?', b: 'A fixed, oversimplified image of a group, applied to all its members.' },
      { n: 4, f: 'What are subcultures in multicultural societies?', b: 'Groups within a society, including ethnic groups, with some norms and values of their own alongside those of the wider culture.' },
    ]),
    ...sub(U2, 'socialisation-9690', '3.1.2.2', [
      { n: 1, f: 'Primary vs secondary socialisation', b: 'Primary socialisation: early learning of culture, mainly in the family. Secondary socialisation: later learning through schools, peers, media, religions and the workplace.' },
      { n: 2, f: 'What is re-socialisation?', b: 'Learning new norms and values to replace old ones, e.g. in a total institution such as a prison or the army, where Goffman described the stripping of a person\'s previous identity.' },
      { n: 3, f: 'What is inadequate socialisation?', b: 'When an individual has not properly learned society\'s norms and values, which some functionalist and New Right writers link to deviance.' },
      { n: 4, f: 'What did Mead argue about the self?', b: 'The self develops through interaction: children learn to take the role of others and eventually of the "generalised other", the attitudes of society as a whole.' },
      { n: 5, f: 'Functionalist vs Marxist vs feminist views of socialisation', b: 'Functionalist: creates value consensus and social order. Marxist: passes on ruling-class ideology. Feminist: socialises people into unequal gender roles.' },
    ]),
    ...sub(U2, 'social-identities-social-change-9690', '3.1.2.3', [
      { n: 1, f: 'Individual vs collective identity', b: 'Individual identity: how a person sees themselves as unique. Collective identity: belonging to a group with shared characteristics, such as a nation, religion or ethnic group.' },
      { n: 2, f: 'Name the bases of social identity in the specification', b: 'Age and generation/cohort, sex and gender, race and ethnicity, social class, religion, ability/disability and nationality.' },
      { n: 3, f: 'What is a hybrid ethnic identity?', b: 'An identity mixing elements of more than one culture, often among members of diasporas.' },
      { n: 4, f: 'What did Fanon argue about identity?', b: 'Colonialism shaped the identities of colonised peoples, leading some to internalise the coloniser\'s view of them as inferior.' },
      { n: 5, f: 'How can consumption and globalisation influence identity?', b: 'People can build identities through what they buy and through global media and brands, and online identities in social media and virtual communities.' },
    ]),
    ...sub(U2, 'social-control-9690', '3.1.2.4', [
      { n: 1, f: 'Formal vs informal social control', b: 'Formal: government and laws, police and other enforcement agencies, and the criminal justice system. Informal: families, schools, peers, media, religion and the workplace, through disapproval, gossip and ridicule.' },
      { n: 2, f: 'Repressive vs ideological state apparatuses', b: 'Repressive state apparatuses (police, army, courts) control people by force. Ideological state apparatuses (education, media, religion) control them through ideas (Althusser).' },
      { n: 3, f: 'What is hegemony?', b: 'Rule by consent: the ideas of the dominant class are accepted as common sense, so people consent to the existing order (Gramsci).' },
      { n: 4, f: 'What is othering?', b: 'Defining a group as different from and inferior to "us", which can stigmatise them. Goffman described stigma as a spoiled identity.' },
      { n: 5, f: 'Name four aims of punishment', b: 'Deterrence, retribution, rehabilitation and incapacitation (protecting the public). Others include reparation to victims.' },
    ]),
    ...sub(U2, 'deviance-harm-and-crime-9690', '3.1.2.5', [
      { n: 1, f: 'What does the social construction of crime and deviance mean?', b: 'What counts as crime or deviance differs between societies and changes over time, depending on who defines and reacts to the behaviour.' },
      { n: 2, f: 'White collar vs corporate vs state crime', b: 'White collar: crime by individuals in their jobs, e.g. fraud. Corporate: crime by companies, e.g. breaking safety laws. State: crime by governments or their agencies, e.g. torture.' },
      { n: 3, f: 'What are victimless crimes and social harms?', b: 'Victimless crimes have no direct victim who complains, e.g. some drug offences. Social harms are actions that cause harm but are not defined as crimes, e.g. legal pollution.' },
      { n: 4, f: 'Official statistics vs self-report studies vs victim surveys', b: 'Official statistics record crimes known to the police. Self-report studies ask people about offences they committed. Victim surveys ask about crimes they suffered, revealing unreported crime.' },
      { n: 5, f: 'What did Stanley Cohen show about moral panics?', b: 'Exaggerated media coverage of a group, such as the mods and rockers, turns them into "folk devils" and leads to public alarm and stronger control.' },
    ]),
    ...sub(U2, 'research-methods-and-theory-9690', '3.1.3', [
      { n: 21, f: 'What is public sociology (Burawoy)?', b: 'Sociology that engages with audiences beyond universities, taking part in public debate about social issues.' },
      { n: 22, f: 'What is value freedom, and how does activism challenge it?', b: 'Value freedom is the idea that research should be free of the researcher\'s values. Some sociologists argue sociology should openly take sides and support activism for social change.' },
      { n: 23, f: 'Structure vs agency', b: 'Structure: social institutions and patterns that shape behaviour. Agency: individuals\' ability to act and make choices. Structural theories stress the first; social action theories the second.' },
      { n: 24, f: 'Functionalism vs neo-functionalism', b: 'Functionalism sees society as a system of parts working together through value consensus. Neo-functionalism keeps this idea but allows more for conflict, change and agency.' },
      { n: 25, f: 'Marxism vs neo-Marxism', b: 'Marxism: society is shaped by class conflict over the economy. Neo-Marxism gives more weight to culture, ideas and hegemony.' },
      { n: 26, f: 'What is symbolic interactionism?', b: 'A social action theory: society is built through the meanings people give to symbols and interactions; labels and self-concepts shape behaviour.' },
      { n: 27, f: 'Postmodernism vs postmodernity', b: 'Postmodernity is the type of society: fragmented, media-saturated and global. Postmodernism is the theory that grand narratives no longer explain it and identities are fluid and chosen.' },
      { n: 28, f: 'Why does theoretical position affect choice of method?', b: 'Positivists favour structured questionnaires, official statistics and structured observation for quantifiable data. Interpretivists favour unstructured interviews, participant observation and personal documents for meaning.' },
    ]),

    // Unit 3 – People and Development
    ...sub(U3, 'the-great-divide-9690', '3.2.1.1', [
      { n: 1, f: 'Great Divergence', b: 'The widening gap in wealth and industry between western Europe (and later North America) and most of the world from the nineteenth century.', src: DEV },
      { n: 2, f: 'Colonialism vs neocolonialism', b: 'Colonialism: direct political control of a territory and extraction of its resources and labour. Neocolonialism: continued control of formally independent states through debt, trade terms and investment.' },
      { n: 3, f: 'How does Weber (1905) help explain why Europe industrialised?', b: 'The Protestant ethic: Calvinist values encouraged saving, hard work and reinvestment. Critics note capitalism also grew in non-Protestant settings.' },
      { n: 4, f: 'What did Rodney (1972) argue?', b: 'In How Europe Underdeveloped Africa, that enslavement and colonial rule moved Africa\'s wealth and labour to Europe. Critics say it underplays African agency.' },
      { n: 5, f: 'What did Pomeranz (2000) argue about the Great Divergence?', b: 'That coal and colonial land, not unique values, explain Britain\'s lead, challenging both Weber and pure exploitation accounts.' },
      { n: 6, f: 'Growth vs development', b: 'Growth is rising GDP. Development is better lives across life expectancy, living standards, education, health, rights and democracy.' },
    ]),
    ...sub(U3, 'what-is-meant-by-globalisation-9690', '3.2.1.2', [
      { n: 1, f: 'Cultural vs political vs economic globalisation', b: 'Cultural: spread of languages, beliefs, popular culture and the internet. Political: spread of democracy, human rights and gender equality. Economic: spread of capitalism, global trade and TNCs.' },
      { n: 2, f: 'Global village', b: 'McLuhan\'s image of electronic media shrinking the world into one community.', src: DEV },
      { n: 3, f: 'Positive globalist vs negative globalist vs transformationalist', b: 'Positive (neo-liberal, e.g. Ohmae, 1990): a borderless world where markets spread wealth. Negative (e.g. Bello): harmful for most, so "deglobalise". Transformationalist (Held et al., 1999): real but with mixed outcomes.' },
      { n: 4, f: 'Cultural imperialism vs glocalisation', b: 'Cultural imperialism: one-way domination of local cultures by Western, especially American, media and brands. Glocalisation (Robertson): global and local combine, adapting global products to local cultures.' },
      { n: 5, f: 'What did Polanyi (1944) argue?', b: 'In The Great Transformation, that markets become "disembedded" from society, and society pushes back to protect itself (the double movement).' },
    ]),
    ...sub(U3, 'who-is-involved-in-globalisation-9690', '3.2.1.3', [
      { n: 1, f: 'TNC vs NGO', b: 'A transnational corporation is a profit-making firm operating in several countries. An NGO is a non-profit charity or campaign group independent of states.' },
      { n: 2, f: 'Grassroots movement', b: 'Collective action organised from below by local people.', src: DEV },
      { n: 3, f: 'Structural adjustment', b: 'Loan conditions from the IMF and World Bank requiring cuts in state spending and market reforms.', src: DEV },
      { n: 4, f: 'Arguments for and against development aid', b: 'For: Sachs (2005) argues targeted aid gives a "big push" out of the poverty trap. Against: Moyo and Easterly argue aid breeds dependency.' },
      { n: 5, f: 'Bilateral vs multilateral aid', b: 'Bilateral aid goes from one state to another. Multilateral aid goes through agencies such as the World Bank.' },
    ]),
    ...sub(U3, 'migration-and-diasporas-9690', '3.2.1.4', [
      { n: 1, f: 'What is Lee\'s (1966) push-pull model?', b: 'Migration follows push factors at the origin, pull factors at the destination and intervening obstacles. Critics say it treats migrants as isolated rational individuals.' },
      { n: 2, f: 'Refugee vs economic migrant', b: 'A refugee (1951 Convention) is outside their country with a well-founded fear of persecution on set grounds. An economic migrant moves for work. Forced migration is wider than the legal refugee category.' },
      { n: 3, f: 'Diaspora', b: 'A dispersed population keeping ties with a homeland.', src: DEV },
      { n: 4, f: 'Remittances', b: 'Money migrants send to family in their country of origin.', src: DEV },
      { n: 5, f: 'What types of diaspora did Cohen (1997) identify?', b: 'In Global Diasporas: victim, labour, trade and imperial diasporas, among others. Real communities often overlap categories.' },
      { n: 6, f: 'Digital nomad', b: 'A remote worker who moves between countries while working online.', src: DEV },
    ]),
    ...sub(U3, 'obstacles-to-progress-9690', '3.2.1.5', [
      { n: 1, f: 'Modernisation vs dependency explanations of obstacles to progress', b: 'Modernisation (e.g. Rostow, 1960): internal obstacles such as traditional values. Dependency (e.g. Frank): external obstacles, as the metropolis drains surplus from satellites.' },
      { n: 2, f: 'What is Wallerstein\'s (1974) world-systems theory?', b: 'The world economy is divided into core, semi-periphery and periphery. Critics say it is too economic and underplays culture.' },
      { n: 3, f: 'What did Mies (1986) mean by housewifisation?', b: 'A feminist idea: women\'s work is treated as cheap or unpaid, which globalisation exploits. Factory jobs may still give women income.' },
      { n: 4, f: 'What is Collier\'s (2007) conflict trap?', b: 'War destroys investment and makes more war likely, holding back development.' },
      { n: 5, f: 'Sustainable development', b: 'Meeting present needs without compromising future generations\' ability to meet theirs (Brundtland, 1987).', src: DEV },
    ]),

    // Unit 4 – People and the Environment
    ...sub(U4, 'built-human-environment-9690', '3.2.2.1', [
      { n: 1, f: 'Sedentarisation', b: 'The process of nomadic groups settling permanently, often under state pressure.', src: ENV },
      { n: 2, f: 'Rural depopulation', b: 'Decline in rural population as people, mostly young, leave for towns.', src: ENV },
      { n: 3, f: 'What did Mike Davis argue in Planet of Slums (2006)?', b: 'That slum growth is linked to debt and structural adjustment; in City of Quartz (1990) he described "fortress" cities with gated, segregated spaces.' },
      { n: 4, f: 'What are non-places (Augé)?', b: 'Spaces of transit or consumption, such as airports, motorways and malls, where people remain anonymous.' },
      { n: 5, f: 'Megacity', b: 'An urban area of over 10 million people.', src: ENV },
      { n: 6, f: 'What is demographic transition theory?', b: 'A model (Thompson and Notestein) of change through stages from high to low birth and death rates. Based on European history, it may ignore state policy.' },
    ]),
    ...sub(U4, 'human-impacts-on-environment-9690', '3.2.2.2', [
      { n: 1, f: 'Romanticism vs conservation', b: 'Romanticism values nature as pure, spiritual and restorative. Conservation manages nature to protect it for present and future use. They often combine.' },
      { n: 2, f: 'The long now', b: 'Thinking about responsibility across very long timescales and future generations.', src: ENV },
      { n: 3, f: 'How does Hannigan (1995) explain environmental problems becoming public issues?', b: 'A soft constructionist view: problems are real but must be claimed; six factors turn a real problem into a recognised public issue.' },
      { n: 4, f: 'Scepticism vs denialism', b: 'Scepticism questions evidence. Denialism rejects strong evidence, such as human-caused climate change, often for interests or identity (Oreskes and Conway, 2010, on organised doubt).' },
      { n: 5, f: 'Ecological modernisation vs green Marxism', b: 'Ecological modernisation (Mol and Spaargaren): capitalism can become green through technology and regulation. Green Marxism (e.g. Foster\'s metabolic rift): capitalism\'s growth drive is the cause of the damage.' },
      { n: 6, f: 'What did Bullard find about environmental justice?', b: 'In a Houston study (1979) and Dumping in Dixie (1990), waste sites were placed disproportionately in Black neighbourhoods.' },
    ]),
    ...sub(U4, 'people-and-animals-9690', '3.2.2.3', [
      { n: 1, f: 'What is the zoological connection (Bryant, 1979)?', b: 'Bryant\'s argument that sociology had ignored animal-related human behaviour; more a call for research than a theory.' },
      { n: 2, f: 'Animal welfare vs animal rights', b: 'Animal welfare reduces suffering within human use of animals (Singer, 1975, Animal Liberation). Animal rights rejects such use (Regan, 1983, The Case for Animal Rights).' },
      { n: 3, f: 'Zoonotic disease', b: 'A disease that passes from animals to humans.', src: ENV },
      { n: 4, f: 'Columbian Exchange', b: 'Crosby: transfer of plants, animals and diseases between the Americas and Afro-Eurasia after 1492.', src: ENV },
      { n: 5, f: 'Rewilding vs de-extinction', b: 'Rewilding: restoring land to natural processes, sometimes with reintroduced species. De-extinction: attempts to recreate extinct species using genetic technology.' },
    ]),

    // Unit 5 – People and Technology
    ...sub(U5, 'pre-and-non-digital-technologies-9690', '3.2.3.1', [
      { n: 1, f: 'Technological determinism vs social construction of technology', b: 'Technological determinism: technology is the main driver of social change. Social construction: social groups shape which technologies succeed (e.g. Pinch and Bijker, 1984, on the safety bicycle).' },
      { n: 2, f: 'Automobility', b: 'The car as a self-reinforcing system of roads, fuel, housing and habits that locks in car use (Urry).' },
      { n: 3, f: 'Conspicuous consumption', b: 'Buying visible goods to display wealth and status (Veblen, 1899).' },
      { n: 4, f: 'Deskilling', b: 'Breaking skilled work into simple machine-paced tasks, reducing worker control (Braverman).', src: TECH },
      { n: 5, f: 'What is Latour\'s actor-network theory?', b: 'Humans and non-humans (such as machines) are all "actants" in networks that shape social life. Critics say it describes but does not explain power.' },
    ]),
    ...sub(U5, 'traditional-media-9690', '3.2.3.2', [
      { n: 1, f: 'What did McLuhan (1964) mean by "the medium is the message"?', b: 'The form of a medium shapes society more than its content; electronic media create a "global village". The idea is hard to test.' },
      { n: 2, f: 'Marxist vs pluralist views of traditional media', b: 'Marxist: media serve the ruling class (e.g. Herman and Chomsky\'s 1988 propaganda model). Pluralist: media reflect market choice and many voices.' },
      { n: 3, f: 'Misinformation vs disinformation vs propaganda', b: 'Misinformation: false information shared without intent to deceive. Disinformation: false information spread deliberately to mislead. Propaganda: organised persuasion, often by states, to shape opinion.' },
      { n: 4, f: 'Hypodermic syringe vs two step flow vs uses and gratifications', b: 'Hypodermic syringe: a passive audience directly affected. Two step flow (Katz and Lazarsfeld, 1955): influence passes through opinion leaders. Uses and gratifications: active audiences use media to meet their needs.' },
      { n: 5, f: 'What did Cohen (1972) show about moral panics?', b: 'Press exaggeration of mods and rockers created "folk devils" and public alarm. Such panics may be harder in a fragmented media world.' },
    ]),
    ...sub(U5, 'internet-social-and-new-media-9690', '3.2.3.3', [
      { n: 1, f: 'Citizen journalist', b: 'Member of the public who reports news events, often by phone and social media.', src: TECH },
      { n: 2, f: 'Influencer', b: 'Social media user with a large following who shapes tastes and promotes brands.', src: TECH },
      { n: 3, f: 'What did Uscinski and Parent (2014) find about conspiracy theories?', b: 'Conspiracy theories are used by those out of power, and there was no long-term rise between 1890 and 2010, based on US letters to one newspaper.' },
      { n: 4, f: 'What is the debate about social media and mental health?', b: 'Orben and Przybylski (2019) found only a very small association between technology use and adolescent wellbeing; Haidt (2024) argues for strong harm.' },
      { n: 5, f: 'How has social media changed audiences?', b: 'Audiences are more involved, creating content as well as consuming it, through citizen journalism and influencers, though ownership of platforms is concentrated in a few corporations.' },
    ]),
    ...sub(U5, 'digital-technologies-9690', '3.2.3.4', [
      { n: 1, f: 'Quantified self vs gamification', b: 'Quantified self: tracking the body and daily life as data (steps, sleep, calories). Gamification: adding game features (points, badges, leaderboards) to non-game activities.' },
      { n: 2, f: 'Panopticon vs synopticon', b: 'Panopticon: the few watch the many (surveillance). Synopticon: the many watch the few, e.g. audiences watching celebrities (Mathiesen).' },
      { n: 3, f: 'What are Wall\'s (2007) categories of cybercrime?', b: 'Crimes against computers (e.g. hacking), crimes using computers (e.g. fraud) and crimes in content (e.g. illegal images). The categories overlap in practice.' },
      { n: 4, f: 'What did Norris (2001) identify about the digital divide?', b: 'Global, social and democratic divides in access to and use of digital technology. Access gaps narrow but skills gaps remain.' },
    ]),
    ...sub(U5, 'artificial-intelligence-and-cyborgs-9690', '3.2.3.5', [
      { n: 1, f: 'Narrow AI vs general AI', b: 'Narrow AI is designed for one task, such as image recognition. General AI would have human-level ability across tasks; it has not been achieved.' },
      { n: 2, f: 'What did Buolamwini and Gebru (2018) find in Gender Shades?', b: 'Facial analysis systems had error rates up to 34.7% for darker-skinned women but under 1% for lighter-skinned men, showing algorithms can reproduce inequality.' },
      { n: 3, f: 'Robot vs cyborg', b: 'A robot is a machine acting on its own. A cyborg is a human or other organism combined with technology that extends or replaces a body function.' },
      { n: 4, f: 'What did Haraway (1985) argue in "A Cyborg Manifesto"?', b: 'That boundaries between human and animal, organism and machine, and physical and non-physical are breaking down. Critics question how far the abstract idea helps.' },
    ]),
  ],
};
