/**
 * D-444 -- flashcards for OxfordAQA International GCSE Sociology 9292
 * (Version 1.0).
 *
 * One block per subtopic, in specification order. Card ids are
 * `<subtopic number>-<n>` and are permanent (browser progress is keyed by
 * them): add a new card with the next unused n, never renumber.
 *
 * 3.1.3 Research methods is assessed in both papers, so syllabus-topics.ts
 * lists it under Paper 1 and again under Paper 2, both numbered 3.1.3. To keep
 * ids unique, the Paper 1 block uses n 1-19 (approaches, methods and issues)
 * and the Paper 2 block n 21-39 (sampling, ethics and interpreting data).
 *
 *   src: '...'  The card restates that revision-notes page (socialisation and
 *               social control, mapped to 3.2.2); origin 'revision-notes'.
 *
 * Written from Marlbridge's own 9292 revision notes and study guides, which
 * cover Paper 1 at paper level and 3.2.2 in its own page. 3.2.1 Differences
 * and inequalities has no Marlbridge page yet and follows section 3.2.1 of the
 * specification and the sociologists it recommends. Neither the pages nor the
 * specification date the sociologists named, so no dates are given. Not
 * tiered. Plain text only (see types.ts).
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

const SOC = 'igcse-oxfordaqa-sociology-socialisation-revision-notes';

const P1 = 'paper-1-introducing-sociology-9292';
const P2 = 'paper-2-exploring-sociology-9292';

export const DECK_OXFORDAQA_IGCSE_SOCIOLOGY: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'igcse',
  subjectSlug: 'sociology',
  syllabusCode: '9292',
  syllabusSeries: 'Version 1.0',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // Paper 1 – Introducing Sociology
    ...sub(P1, 'families-9292', '3.1.1', [
      { n: 1, f: 'Vertically vs horizontally extended families', b: 'Vertically extended: three or more generations, such as grandparents, parents and children. Horizontally extended: relatives of the same generation, such as siblings and their partners.' },
      { n: 2, f: 'What did Therborn show about family systems?', b: 'He identified different family systems across world regions, showing that family form is not universal.' },
      { n: 3, f: 'Arranged vs love marriage', b: 'In an arranged marriage, families play the main part in choosing the partner. In a love marriage, the couple choose each other. Monogamy is marriage to one partner at a time.' },
      { n: 4, f: 'How does Parsons (functionalism) see the family?', b: 'The family performs positive functions: primary socialisation of children and the stabilisation of adult personalities. The nuclear family "fits" modern industrial society.' },
      { n: 5, f: 'How does Engels (Marxism) see the family?', b: 'The family serves capitalism: it reproduces labour power, passes on property and acts as a form of social control.' },
      { n: 6, f: 'How does Oakley (feminism) see the family?', b: 'The family positions women unequally, especially through domestic labour and childcare.' },
      { n: 7, f: 'What is the pivot (sandwich) generation?', b: 'People who care for their own children and their ageing parents at the same time, linked to rising life expectancy and later childbirth.' },
      { n: 8, f: 'What did Smart and Stacey say about family diversity?', b: 'Smart: individualisation and "personal life", the relationships people themselves find meaningful. Stacey: diverse, negotiated family forms, with women as key agents of change.' },
      { n: 9, f: 'Living apart together vs child-free couples vs beanpole families', b: 'Living apart together: a committed couple in separate homes. Child-free: couples who choose not to have children. Beanpole: many generations alive, with few members in each.' },
      { n: 10, f: 'How has children\'s status in the family changed?', b: 'From economic contributors who worked, to long-term financial dependants in child-centred families. "Boomerang" adult children may return home for economic reasons.' },
    ]),
    ...sub(P1, 'education-9292', '3.1.2', [
      { n: 1, f: 'Official vs hidden curriculum', b: 'The official (formal) curriculum is the subjects formally taught. The hidden curriculum is attitudes and behaviours taught informally through school organisation and routine, such as punctuality and respect for authority.' },
      { n: 2, f: 'How do functionalists see education?', b: 'It allocates roles by ability (role allocation, Davis and Moore), passes on shared values, develops human capital, and is a bridge from the particularistic family to universalistic society.' },
      { n: 3, f: 'How do Marxists see education?', b: 'It reproduces and legitimises the class structure, prepares pupils for work and promotes the myth of meritocracy. Bourdieu argued schools reward the cultural capital of better-off pupils.' },
      { n: 4, f: 'What did Freire and Illich argue about schooling?', b: 'Both are critical of traditional schooling. Freire argued it can suppress critical thought rather than develop it. Illich called for de-schooling, replacing formal schools.' },
      { n: 5, f: 'Labelling vs self-fulfilling prophecy (Becker)', b: 'A teacher attaches a label to a pupil, e.g. "bright" or "disruptive", often on limited evidence. The pupil is treated according to the label and comes to act it out, so the expectation comes true.' },
      { n: 6, f: 'What is the halo effect?', b: 'When a teacher\'s positive impression of a pupil in one area leads them to judge the pupil positively in other areas too.' },
      { n: 7, f: 'Pro-school vs anti-school subcultures', b: 'Pro-school subcultures value education and gain status through success. Anti-school subcultures reject school values and gain status through misbehaviour.' },
      { n: 8, f: 'What is credentialism?', b: 'Using qualifications as a filter for jobs even when their content is not directly job-relevant.' },
      { n: 9, f: 'Material vs cultural explanations of differences in attainment', b: 'Material: lack of money for resources, study space or digital access. Cultural: differences in cultural capital, values and language that schools reward unequally.' },
      { n: 10, f: 'Give three global inequalities in education', b: 'Differences in literacy rates between countries, the effects of poverty on schools, and unequal access to education for girls and to digital education.' },
    ]),
    ...sub(P1, 'research-methods-9292', '3.1.3', [
      { n: 1, f: 'Positivist vs interpretivist approaches', b: 'Positivist: objective, quantitative, reliable data to find patterns and causes. Interpretivist: understanding people\'s meanings through qualitative, valid data.' },
      { n: 2, f: 'Primary vs secondary data', b: 'Primary data are collected first-hand by the researcher. Secondary data already exist, e.g. official statistics or personal documents.' },
      { n: 3, f: 'Reliability vs validity vs representativeness', b: 'Reliability: repeating the study gives the same result. Validity: it gives a true picture. Representativeness: the sample reflects the wider population.' },
      { n: 4, f: 'Questionnaires: strength and weakness', b: 'Strength: cheap, large samples, reliable. Weakness: low response rates and low validity.' },
      { n: 5, f: 'Unstructured interviews: strength and weakness', b: 'Strength: valid and detailed. Weakness: slow, unreliable and usually small samples.' },
      { n: 6, f: 'Participant observation: strength and weakness', b: 'Strength: very valid, revealing real behaviour. Weakness: the Hawthorne effect, "going native" and ethical issues, especially if covert.' },
      { n: 7, f: 'Laboratory vs field experiments in sociology', b: 'Laboratory experiments control variables in an artificial setting, which may lack validity. Field experiments take place in real settings, but with less control.' },
      { n: 8, f: 'What is triangulation?', b: 'Using more than one method or source so that each offsets the weaknesses of the other and findings can be checked.' },
      { n: 9, f: 'Researcher bias vs social desirability', b: 'Researcher (interviewer) bias: the researcher influences the answers or interpretation. Social desirability: participants give answers that make them look good rather than true answers.' },
    ]),

    // Paper 2 – Exploring Sociology
    ...sub(P2, 'differences-and-inequalities-9292', '3.2.1', [
      { n: 1, f: 'Name ways sociologists classify groups of people', b: 'By social class, status, caste, slavery, sex and gender, race and ethnicity, age and generation, religion, ability/disability and nationality.' },
      { n: 2, f: 'What are life chances?', b: 'A person\'s chances of good outcomes in life, such as employment, education, health, life expectancy and social mobility.' },
      { n: 3, f: 'What is intersectionality (Crenshaw)?', b: 'The way inequalities such as gender, race and class overlap and combine, so a person\'s experience cannot be understood through one inequality alone.' },
      { n: 4, f: 'Marxist vs functionalist views of social class', b: 'Marxist: classes are in conflict; the ruling class exploits workers, who have false consciousness. Functionalist: class inequality is functionally necessary and reflects meritocracy.' },
      { n: 5, f: 'What did Weber add to the study of inequality?', b: 'Inequality has three dimensions: class (economic position), status (prestige) and party (power), which can vary separately.' },
      { n: 6, f: 'Upward vs downward, intragenerational vs intergenerational mobility', b: 'Upward or downward: moving to a higher or lower class. Intragenerational: within one person\'s lifetime. Intergenerational: compared with one\'s parents.' },
      { n: 7, f: 'What is patriarchy, and what did Walby argue?', b: 'Patriarchy is male domination of society. Walby argued it works through several structures, such as paid work, the household, violence and the state.' },
      { n: 8, f: 'What is hegemonic masculinity (Connell)?', b: 'The dominant, most valued form of masculinity in a society, against which other masculinities and femininities are ranked.' },
      { n: 9, f: 'What is the glass ceiling?', b: 'An invisible barrier that stops women reaching top positions in employment.' },
      { n: 10, f: 'Race vs ethnicity', b: 'Race is a socially constructed category based on supposed physical differences. Ethnicity refers to shared culture, such as language, religion, traditions and history.' },
      { n: 11, f: 'Assimilation vs multiculturalism', b: 'Assimilation: minority groups are expected to adopt the majority culture. Multiculturalism: different cultures coexist and are respected within one society.' },
      { n: 12, f: 'What did du Bois argue about race?', b: 'He described the "color line" dividing society and "double consciousness": Black Americans seeing themselves both through their own eyes and through the eyes of a racist society.' },
      { n: 13, f: 'Give three attempts to reduce inequality in the specification', b: 'The Marxist goal of abolishing capitalism, social democratic welfare states, and development aid.' },
    ]),
    ...sub(P2, 'socialisation-and-social-control-9292', '3.2.2', [
      { n: 1, f: 'What is the sociological imagination (Mills)?', b: 'The ability to connect personal troubles (e.g. one person\'s unemployment) to public issues (e.g. economic change causing mass unemployment).' },
      { n: 2, f: 'Primary vs secondary socialisation', b: 'Primary: early learning of norms and values, mainly within the family. Secondary: later learning through wider agencies such as school, peers, media and the workplace.', src: SOC },
      { n: 3, f: 'Re-socialisation vs inadequate socialisation', b: 'Re-socialisation: learning new norms and values that replace earlier ones, often after a major life change. Inadequate socialisation: socialisation that fails to instil shared norms and values.', src: SOC },
      { n: 4, f: 'How does the school socialise pupils?', b: 'Through the formal curriculum and the hidden curriculum, and through rewards and sanctions for behaviour.' },
      { n: 5, f: 'Formal vs informal social control', b: 'Formal: government and laws, the police and other enforcement agencies, and criminal justice systems. Informal: families, schools, peers, media, religion and the workplace, through approval and disapproval.' },
      { n: 6, f: 'Positive vs negative sanctions', b: 'Positive sanctions reward conformity, e.g. praise. Negative sanctions punish deviance, e.g. fines or exclusion.' },
      { n: 7, f: 'What is a stigmatised identity (Goffman)?', b: 'An identity "spoiled" by a discrediting label, which leads others to treat the person as less acceptable. Othering defines a group as different from and inferior to "us".' },
      { n: 8, f: 'Name the types of crime listed in the specification', b: 'Violent, property, cyber, white collar, corporate, state, green/environmental and "victimless" crimes.' },
      { n: 9, f: 'Official statistics vs self-report studies vs victim surveys', b: 'Official statistics: crimes recorded by the police. Self-report studies: people describe crimes they have committed. Victim surveys: people describe crimes committed against them.' },
      { n: 10, f: 'What did Stanley Cohen show about moral panics?', b: 'Media exaggeration of a group\'s behaviour, such as the mods and rockers, turns them into "folk devils", creating public alarm and stronger social control.' },
      { n: 11, f: 'What is surveillance capitalism (Zuboff)?', b: 'Companies profit from collecting and analysing data on people\'s online behaviour, which also acts as a new form of surveillance and control.' },
    ]),
    ...sub(P2, 'research-methods-paper2-9292', '3.1.3', [
      { n: 21, f: 'What is operationalisation?', b: 'Turning an abstract concept into something that can be measured, e.g. measuring "poverty" by household income.' },
      { n: 22, f: 'Population vs sampling frame', b: 'The population is the whole group being studied. The sampling frame is the list from which the sample is drawn.' },
      { n: 23, f: 'Random vs systematic vs stratified random sampling', b: 'Random: everyone has an equal chance. Systematic: every nth name on the list. Stratified random: random selection within groups in proportion to the population.' },
      { n: 24, f: 'Quota vs snowball vs multistage sampling', b: 'Quota: the researcher fills set numbers in each category. Snowball: participants introduce others, useful for hard-to-reach groups. Multistage: sampling in stages, e.g. areas, then households.' },
      { n: 25, f: 'What is a pilot study?', b: 'A small trial run of the research to find and correct problems with questions or procedures before the main study.' },
      { n: 26, f: 'Name the ethical issues in the specification', b: 'Informed consent, confidentiality, anonymity and participant wellbeing. Research with children also needs parental or guardian consent.' },
      { n: 27, f: 'Causation vs correlation', b: 'Correlation: two things change together. Causation: one causes the other. A correlation does not prove cause.' },
      { n: 28, f: 'How do you interpret data from qualitative sources?', b: 'Look for recurring themes and meanings in field notes or interview extracts, consider who is speaking and in what context, and avoid generalising from a few cases.' },
    ]),
  ],
};
