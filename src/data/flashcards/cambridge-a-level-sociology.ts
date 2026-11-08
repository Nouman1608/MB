/**
 * D-444 -- flashcards for Cambridge International AS & A Level Sociology 9699
 * (2024-2026).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (Paper 3 pages, which
 *               map to their subtopics); origin 'revision-notes'.
 *
 * Paper 3 (Education) is written from Marlbridge's own 9699 revision notes and
 * study guides, with researcher names and dates as those pages give them.
 * Papers 1, 2 and 4 have Marlbridge pages only at paper level, written in
 * outline; their cards follow section 3 of the 2024-2026 syllabus, which names
 * no sociologists, so those cards keep to the syllabus concepts and to widely
 * taught theorists, without dates. Not tiered. Plain text only (see types.ts).
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

const EDU = 'a-level-sociology-9699-education-society-and-the-curriculum-revision-notes';
const INT = 'a-level-sociology-9699-intelligence-social-class-and-educational-attainment-revision-notes';
const ETH = 'a-level-sociology-9699-ethnicity-gender-and-educational-attainment-revision-notes';

const P1 = 'paper-1-socialisation-identity-methods-9699';
const P2 = 'paper-2-the-family-9699';
const P3 = 'paper-3-education-9699';
const P4 = 'paper-4-globalisation-media-religion-9699';

export const DECK_CAMBRIDGE_A_LEVEL_SOCIOLOGY: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'a-level',
  subjectSlug: 'sociology',
  syllabusCode: '9699',
  syllabusSeries: '2024-2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // Paper 1 – Socialisation, identity and methods of research
    ...sub(P1, 'process-of-learning-and-socialisation-9699', '1.1', [
      { n: 1, f: 'Norms vs values', b: 'Norms are specific rules of behaviour in a society or group. Values are general beliefs about what is important and worth striving for. Norms usually put values into practice.' },
      { n: 2, f: 'Ascribed vs achieved status', b: 'Ascribed status is fixed at birth, such as caste or sex. Achieved status is earned through effort, such as an occupation.' },
      { n: 3, f: 'Primary vs secondary socialisation', b: 'Primary socialisation happens in the family in early childhood: learning language and basic norms and values. Secondary socialisation comes later through education, the peer group, religion, the workplace and the media.' },
      { n: 4, f: 'What evidence supports nurture over nature in human behaviour?', b: 'Cross-cultural variation in norms and gender roles, and cases of feral children, who fail to develop language and normal social behaviour without human contact.' },
      { n: 5, f: 'What is ideology?', b: 'A set of ideas and beliefs that justifies the interests of a group. Marxists use it for ruling-class ideas that make inequality seem natural and fair.' },
      { n: 6, f: 'Subculture vs counter-culture', b: 'A subculture is a group within society with distinct norms and values. A counter-culture is a subculture that actively opposes mainstream norms and values.' },
    ]),
    ...sub(P1, 'social-control-conformity-resistance-9699', '1.2', [
      { n: 1, f: 'Structuralist vs interactionist views of the individual and society', b: 'Structuralist (macro) views, such as functionalism and Marxism, see individuals as shaped by social structure. Interactionist (micro) views see individuals as actively creating society through meanings and interaction.' },
      { n: 2, f: 'What is Giddens\'s structuration theory?', b: 'Structure and agency shape each other continuously: people act within structures, and their actions reproduce or change those structures.' },
      { n: 3, f: 'Formal vs informal social control', b: 'Formal control is by agencies with written rules and official sanctions, such as the police and courts. Informal control is by family, peers and others through approval and disapproval.' },
      { n: 4, f: 'Why do individuals conform to social expectations?', b: 'Because of sanctions (rewards and punishments), social pressure, self-interest and social exchange (gaining benefits from going along with others).' },
      { n: 5, f: 'Consensus vs force (coercion) as ways order is maintained', b: 'Consensus: people share values and agree with the social order (functionalism). Force: order is kept by coercion, through power and the threat of punishment. Marxists add ideology, which wins consent to an unequal order.' },
      { n: 6, f: 'Name explanations of deviance and non-conformity in the 9699 syllabus', b: 'Subcultures, under-socialisation, marginalisation, cultural deprivation and social resistance.' },
    ]),
    ...sub(P1, 'social-identity-and-change-9699', '1.3', [
      { n: 1, f: 'What is social identity?', b: 'How individuals see themselves and are seen by others, built from elements such as social class, gender, ethnicity and age.' },
      { n: 2, f: 'How is age socially constructed?', b: 'The meaning of age groups (childhood, youth, old age) varies between societies and over time, so expectations attached to age are learned, not fixed by biology.' },
      { n: 3, f: 'What is a hybrid identity?', b: 'An identity that combines elements from more than one culture, e.g. young people of migrant heritage mixing aspects of their family\'s culture with the culture where they live.' },
      { n: 4, f: 'How do postmodernists see identity today?', b: 'Identity is fluid, chosen and consumed, rather than ascribed by class or tradition, because of globalisation, consumer culture and increased choice.' },
      { n: 5, f: 'Give one argument that traditional identities still matter', b: 'Class, gender and ethnicity still shape life chances such as income, education and health, so choice of identity is limited by structure (a structuralist response to postmodernism).' },
    ]),
    ...sub(P1, 'types-of-data-methods-research-design-9699', '2.1', [
      { n: 1, f: 'Primary vs secondary data', b: 'Primary data are collected by the sociologist for the research. Secondary data already exist, collected by others, e.g. official statistics, personal documents, digital content and media sources.' },
      { n: 2, f: 'Why are official statistics both useful and problematic?', b: 'Useful: cheap, large-scale and allow comparisons over time. Problematic: they are socially constructed, using definitions decided by the state, and may hide what is not recorded.' },
      { n: 3, f: 'Questionnaires: main strengths and weaknesses', b: 'Strengths: cheap, large samples, reliable and easily quantified. Weaknesses: low validity, often low response rates, and they impose the researcher\'s categories.' },
      { n: 4, f: 'Participant observation: main strengths and weaknesses', b: 'Strengths: very high validity and can uncover the unexpected. Weaknesses: the Hawthorne effect (overt), going native, ethical problems (covert), and small unrepresentative samples.' },
      { n: 5, f: 'What is a sampling frame?', b: 'The list from which a sample is drawn. When no usable frame exists, sociologists often choose non-random methods such as snowball sampling.' },
      { n: 6, f: 'What is operationalisation?', b: 'Turning an abstract concept into something measurable, e.g. measuring "religiosity" by frequency of attendance or prayer.' },
    ]),
    ...sub(P1, 'approaches-to-sociological-research-9699', '2.2', [
      { n: 1, f: 'Positivism vs interpretivism', b: 'Positivism: sociology should follow the natural sciences, using objective, quantitative, reliable data to find causal patterns. Interpretivism: sociology should seek verstehen (understanding of meanings) through qualitative, valid data.' },
      { n: 2, f: 'What is verstehen?', b: 'Empathetic understanding of the meanings people give to their actions, seen from their point of view. It is central to interpretivism.' },
      { n: 3, f: 'Triangulation vs methodological pluralism', b: 'Triangulation: using more than one method to check the findings of one against another. Methodological pluralism: using several methods to build a fuller picture. Both are mixed-methods approaches.' },
      { n: 4, f: 'Ethnography vs longitudinal study', b: 'Ethnography: in-depth study of a group\'s way of life, usually by participant observation. Longitudinal study: following the same group over a long period to track change.' },
      { n: 5, f: 'What is value-freedom, and why is it disputed?', b: 'The idea that research should be free of the sociologist\'s own values. Critics argue values affect the choice of topic, method and interpretation, so complete value-freedom is impossible.' },
    ]),
    ...sub(P1, 'research-issues-9699', '2.3', [
      { n: 1, f: 'Reliability vs validity', b: 'Reliability: would repeating the study give the same results? Validity: does it measure what it claims to, giving a true picture? Quantitative methods tend to be high in reliability, qualitative methods high in validity.' },
      { n: 2, f: 'Representativeness vs generalisability', b: 'Representativeness: does the sample reflect the wider population? Generalisability: can the findings be applied more widely?' },
      { n: 3, f: 'Theoretical, practical and ethical factors in choosing a method', b: 'Theoretical: the sociologist\'s perspective (positivist or interpretivist). Practical: time, money, access and the topic. Ethical: consent, harm, confidentiality and deception.' },
      { n: 4, f: 'Why is covert observation ethically controversial?', b: 'It breaches informed consent and involves deception. It is defended only where overt research would be impossible, e.g. with deviant or closed groups.' },
      { n: 5, f: 'How can funding bias research?', b: 'A funding body may influence which topics are studied, how questions are framed and which findings are published, so results may suit the funder\'s interests.' },
    ]),

    // Paper 2 – The Family
    ...sub(P2, 'perspectives-role-of-family-9699', '3.1', [
      { n: 1, f: 'How do functionalists see the role of the family?', b: 'The family benefits its members and society by performing essential functions, such as socialising children, stabilising adult personalities and meeting emotional needs.' },
      { n: 2, f: 'What is the "loss of functions" debate?', b: 'The claim that the family has lost functions (education, welfare, health care) to specialist institutions such as schools and the welfare state. Others argue it has kept or gained functions, e.g. emotional support.' },
      { n: 3, f: 'How do Marxists see the family?', b: 'The family benefits capitalism: it passes on ruling-class ideology (ideological control), reproduces labour power by raising the next generation of workers, and acts as a unit of consumption.' },
      { n: 4, f: 'How do feminists respond to functionalist and Marxist views of the family?', b: 'They argue both overlook inequality within the family: the family is patriarchal, with women doing unpaid domestic labour and emotional work that benefits men (and, for Marxist feminists, capitalism).' },
    ]),
    ...sub(P2, 'diversity-and-social-change-9699', '3.2', [
      { n: 1, f: 'Nuclear vs extended vs reconstituted family', b: 'Nuclear: parents and their dependent children. Extended: the nuclear family plus other relatives, such as grandparents. Reconstituted: a family in which at least one partner has children from a previous relationship.' },
      { n: 2, f: 'Organisational, cultural and class diversity', b: 'Organisational: differences in how families divide roles and structure households. Cultural: differences linked to ethnicity and religion. Class: differences in family life linked to social class.' },
      { n: 3, f: 'New Right vs postmodernist views on family diversity', b: 'New Right: growing diversity, especially lone-parent families, is a social problem; the married nuclear family is best. Postmodernist: diversity is evidence of greater individual choice.' },
      { n: 4, f: 'Give two causes of rising divorce rates', b: 'Changes in the law making divorce easier and cheaper, and women\'s greater financial independence. Others include declining stigma, secularisation and higher expectations of marriage.' },
      { n: 5, f: 'How does social policy influence the family?', b: 'State policies on welfare benefits, tax, divorce law, childcare and parental leave encourage or discourage particular family forms, so the state is an active influence, not a neutral backdrop.' },
    ]),
    ...sub(P2, 'gender-equality-family-life-9699', '4.1', [
      { n: 1, f: 'Liberal vs radical vs Marxist feminist views of the family', b: 'Liberal: gradual progress towards equality through law and changing attitudes. Radical: the family is a key site of patriarchy and male power. Marxist: women\'s subordination in the family serves capitalism.' },
      { n: 2, f: 'Segregated vs joint conjugal roles', b: 'Segregated: partners have separate roles, e.g. male breadwinner and female homemaker. Joint: partners share tasks, decision-making and leisure.' },
      { n: 3, f: 'What is emotion work?', b: 'The effort of managing a family\'s emotional life, such as caring for and soothing others. Feminists argue it falls unequally on women.' },
      { n: 4, f: 'What is the "dual burden"?', b: 'Women doing paid work while still carrying most of the housework and childcare. It challenges claims that the family has become equal.' },
      { n: 5, f: 'Give one argument that family life is negative and one that it is positive', b: 'Negative: domestic abuse and the control of women and children (radical feminist view). Positive: the family provides emotional support and stability (functionalist view).' },
    ]),
    ...sub(P2, 'age-and-family-life-9699', '4.2', [
      { n: 1, f: 'What does it mean that childhood is socially constructed?', b: 'The idea of childhood, and what is expected of children, varies over time and between societies; it is not a fixed biological fact.' },
      { n: 2, f: 'How has the position of children in the family changed?', b: 'In many societies children have become more child-centred, protected and economically dependent for longer, with fewer children per family and more spent on each child.' },
      { n: 3, f: 'How has rising life expectancy affected grandparents\' role?', b: 'More people live long enough to be grandparents and great-grandparents, creating "beanpole" families; grandparents often provide childcare, while some need care themselves.' },
      { n: 4, f: 'How do class, gender and ethnicity affect children\'s family experiences?', b: 'Class affects resources and opportunities; gender affects expectations and chores; ethnicity affects family structure and cultural norms, so there is no single experience of childhood.' },
      { n: 5, f: 'How have concepts of fatherhood changed?', b: 'A shift from the distant breadwinner towards more involved, nurturing fatherhood, though studies often find mothers still do most childcare.' },
    ]),

    // Paper 3 – Education
    ...sub(P3, 'theories-role-of-education-9699', '5.1', [
      { n: 1, f: 'What did Durkheim say education does?', b: 'It passes on shared values and builds social solidarity; school is a society in miniature and teaches specialist skills.' },
      { n: 2, f: 'Particularistic vs universalistic standards (Parsons)', b: 'Particularistic standards judge a person as a unique individual, as in the family. Universalistic standards judge everyone by the same rules, as at school. School is the bridge between the two.' },
      { n: 3, f: 'Role allocation', b: 'Sorting people into the jobs that suit their talents. Davis and Moore (1945) said education sifts the most able into the most important, best-rewarded jobs.', src: EDU },
      { n: 4, f: 'Ideological state apparatus', b: 'An institution that controls people through ideas, not force (Althusser). Althusser saw school as the dominant one in capitalist societies.', src: EDU },
      { n: 5, f: 'What is the correspondence principle (Bowles and Gintis, 1976)?', b: 'School life mirrors work life: hierarchy, obedience and rewards (grades) prepare a compliant workforce for capitalism.' },
      { n: 6, f: 'What did Willis (1977) find?', b: 'Twelve working-class "lads" formed a counter-school culture and resisted school, yet still ended up in manual jobs, so their resistance helped reproduce class inequality.' },
      { n: 7, f: 'Social democratic vs New Right views of education and the economy', b: 'Both link education to the economy. Social democrats (e.g. Halsey) want state action for equal opportunity. The New Right (e.g. Chubb and Moe, 1990) wants markets, competition and parental choice.' },
    ]),
    ...sub(P3, 'education-and-social-mobility-9699', '5.2', [
      { n: 1, f: 'Meritocracy', b: 'Rewards based on ability and effort, not background. Young (1958) used the term in a satire warning of a new elite.', src: EDU },
      { n: 2, f: 'Absolute vs relative mobility', b: 'Absolute mobility is the total movement between classes. Relative mobility compares the chances of people from different class backgrounds. Goldthorpe (1980): absolute mobility rose while relative mobility stayed broadly stable.' },
      { n: 3, f: 'Formal vs substantive equality of opportunity', b: 'Formal equality removes legal barriers to education. Substantive equality also tackles hidden barriers, such as poverty and cultural disadvantage.' },
      { n: 4, f: 'Qualification inflation', b: 'Employers asking for higher credentials as more people hold them (Dore, 1976), which weakens the value of each qualification.', src: EDU },
      { n: 5, f: 'What is the "Great Gatsby curve"?', b: 'Krueger (2012), using Corak\'s data: more unequal countries tend to have less social mobility between generations. It is a correlation, not proof of cause.' },
    ]),
    ...sub(P3, 'influences-on-the-curriculum-9699', '5.3', [
      { n: 1, f: 'Social construction of knowledge', b: 'What counts as valuable knowledge is decided by people, not fixed by nature.', src: EDU },
      { n: 2, f: 'Ethnocentric curriculum', b: 'A curriculum that gives priority to one ethnic group\'s culture, history and language, e.g. Coard (1971) argued schools treated West Indian children\'s culture as second-rate.' },
      { n: 3, f: 'Gendered curriculum', b: 'Content and subject choices that follow gender stereotypes. Spender (1982) argued the curriculum left out or played down women\'s contributions.' },
      { n: 4, f: 'Hidden curriculum', b: 'What pupils learn from how school is organised, not from formal lessons. Jackson (1968) coined the term in Life in Classrooms.' },
      { n: 5, f: 'Cultural capital vs habitus (Bourdieu)', b: 'Cultural capital: knowledge, tastes, language and attitudes valued by the dominant class. Habitus: tastes and dispositions learned early in life. Schools reward middle-class cultural capital as if it were ability.' },
    ]),
    ...sub(P3, 'intelligence-educational-attainment-9699', '6.1', [
      { n: 1, f: 'Why is intelligence hard to define?', b: 'There is no agreed definition. Spearman (1904) proposed one general factor, g; Gardner (1983) proposed multiple intelligences; Sternberg (1985) proposed analytical, creative and practical intelligence.' },
      { n: 2, f: 'Reification', b: 'Treating an abstract idea, such as IQ, as if it were a real object. Gould (1981) called g a reification.' },
      { n: 3, f: 'How can IQ tests be culturally biased?', b: 'Test items may assume knowledge more common in one group; e.g. early eleven-plus items on servants and composers favoured middle-class children.' },
      { n: 4, f: 'What does the Flynn effect (Flynn, 1987) suggest?', b: 'Large rises in IQ scores over time across 14 nations, too fast to be genetic, so environment strongly affects measured intelligence.' },
      { n: 5, f: 'Hereditarian view', b: 'Differences in intelligence, and so attainment, are mainly inherited (e.g. Jensen, 1969). Critics note that heritability within a group cannot explain differences between groups.' },
    ]),
    ...sub(P3, 'social-class-educational-attainment-9699', '6.2', [
      { n: 1, f: 'Material deprivation vs cultural deprivation', b: 'Material deprivation: lack of money and what it buys, such as housing, diet and resources. Cultural deprivation: the claim that some homes lack the attitudes, values and language schools need.' },
      { n: 2, f: 'Restricted vs elaborated code (Bernstein, 1971)', b: 'Restricted code: short, context-bound speech relying on shared understanding. Elaborated code: explicit, detailed speech that makes sense out of context. Schools use the elaborated code.' },
      { n: 3, f: 'Self-fulfilling prophecy', b: 'A prediction that comes true because people act on it, e.g. a pupil labelled as weak is taught less and comes to see themselves as weak.' },
      { n: 4, f: 'What did Rist (1970) find?', b: 'In a kindergarten class, the teacher had set pupils at tables by day eight, based on appearance and background, and this shaped how they were taught.' },
      { n: 5, f: 'Educational triage', b: 'Focusing effort on pupils near a pass and writing off others (Gillborn and Youdell, 2000).' },
      { n: 6, f: 'Differentiation and polarisation (Lacey, 1970)', b: 'Differentiation: schools sorting pupils by ability, e.g. streaming. Polarisation: pupils then splitting into pro- and anti-school groups.' },
      { n: 7, f: 'What is compensatory education, and one example?', b: 'Extra resources to make up for disadvantage outside school, e.g. Head Start (1965) in the USA, the Plowden Report\'s (1967) positive discrimination, Sure Start (1998) and the Pupil Premium (2011).' },
    ]),
    ...sub(P3, 'ethnicity-educational-attainment-9699', '6.3', [
      { n: 1, f: 'Institutional racism', b: 'Discrimination built into an organisation\'s routines, not just individual prejudice (Macpherson Report, 1999).', src: ETH },
      { n: 2, f: 'What did Gillborn (1990) find at City Road school?', b: 'White teachers\' expectations of discipline, ability and attitude shaped the school experiences of African-Caribbean and Asian pupils.' },
      { n: 3, f: 'What were the four responses in Sewell\'s (1997) study?', b: 'African-Caribbean boys responded as conformists, innovators, retreators (often written "retreatists") or rebels, showing varied responses rather than one; they were also disproportionately punished.' },
      { n: 4, f: 'What did Francis and Archer (2005) find about British-Chinese pupils?', b: 'Pupils and parents placed an extremely high value on education, whatever their class or gender, though teachers still stereotyped the pupils.' },
      { n: 5, f: 'Intersectionality', b: 'Class, ethnicity and gender combining, so their effects cannot be separated.', src: ETH },
      { n: 6, f: 'What did Mirza (1992) find about African-Caribbean young women?', b: 'They did well at school, but faced a job market segregated by race and gender, so structure, not low aspiration, limited their outcomes.' },
    ]),
    ...sub(P3, 'gender-educational-attainment-9699', '6.4', [
      { n: 1, f: 'Crisis of masculinity', b: 'Uncertainty in male identity as manual jobs and the breadwinner role decline.', src: ETH },
      { n: 2, f: 'What did Francis (2002) find about career aims?', b: 'Girls aged 14–16 were far more ambitious than in the past, reflecting changing female expectations, but their choices were still gender-divided.' },
      { n: 3, f: 'Laddish culture', b: 'A peer culture where effort is "uncool" and status comes from defiance and humour. Jackson (2002, 2006) argued laddishness protects self-worth and found some girls act "laddishly" too.' },
      { n: 4, f: 'Hegemonic masculinity', b: 'The dominant, most valued form of masculinity in a setting (Connell).', src: ETH },
      { n: 5, f: 'What did French (1984) and Spender (1978) find about classroom interaction?', b: 'French: in one primary lesson, boys got more teacher attention, partly by seeking it. Spender: stereotypes kept many girls quiet in mixed classes.' },
      { n: 6, f: 'Why did Epstein et al. (1998) ask "which boys?"', b: 'In Failing Boys? they argued the debate about boys\' underachievement was simplistic: class and ethnicity create big differences among boys.' },
    ]),

    // Paper 4 – Globalisation, Media and Religion
    ...sub(P4, 'perspectives-on-globalisation-9699', '7.1', [
      { n: 1, f: 'Globalisation vs glocalisation', b: 'Globalisation: the growing interconnection of societies through flows of goods, people, ideas and media. Glocalisation: global products and ideas adapted to local cultures.' },
      { n: 2, f: 'Name the three dimensions of globalisation in the syllabus', b: 'Cultural (spread of media, brands and ideas), political (international organisations and agreements) and economic (global trade, finance and transnational corporations).' },
      { n: 3, f: 'Globalist vs sceptic vs transformationalist perspectives', b: 'Globalists (hyperglobalists): globalisation is real and transforming the world. Sceptics: its extent is exaggerated, and nation states still dominate. Transformationalists: it is real but uneven, with local and global interacting.' },
      { n: 4, f: 'How do Marxists see who benefits from globalisation?', b: 'Mainly global capitalists and transnational corporations, which exploit cheap labour and markets in poorer countries, widening inequality.' },
    ]),
    ...sub(P4, 'globalisation-and-identity-9699', '7.2', [
      { n: 1, f: 'Cultural convergence vs cultural divergence', b: 'Convergence (homogenisation): cultures become more alike under global, often Western, influence. Divergence: cultures stay distinct or become more different as people defend local identities.' },
      { n: 2, f: 'What are ethnic revitalisation and cultural defence?', b: 'Responses to globalisation in which groups revive and assert their ethnic, national or religious identity to protect it against outside influence.' },
      { n: 3, f: 'What is Westernisation?', b: 'The spread of Western, especially American, ideology, values, consumer goods and lifestyles to other societies, shaping identities there.' },
      { n: 4, f: 'How can globalisation create hybrid identities?', b: 'Exposure to several cultures through migration and media lets people combine elements of global and local cultures into new identities.' },
    ]),
    ...sub(P4, 'globalisation-power-and-politics-9699', '7.3', [
      { n: 1, f: 'How has globalisation been linked to the spread of liberal democracy and human rights?', b: 'International organisations, trade and media spread ideas of elections, rights and the rule of law, though critics see this as Western values imposed on others.' },
      { n: 2, f: 'What are global social movements?', b: 'Movements organised across national borders, often using the internet, on issues such as the environment, global justice and opposition to corporate globalisation.' },
      { n: 3, f: 'Why might the nation state struggle to tackle global problems?', b: 'Problems such as climate change, pandemics and financial crises cross borders, and transnational corporations can move capital, so single states have limited control.' },
      { n: 4, f: 'Give one argument that nation states remain powerful', b: 'States still control borders, laws, armed forces and taxation, and they make the international agreements that regulate globalisation (the sceptic view).' },
    ]),
    ...sub(P4, 'globalisation-poverty-inequalities-9699', '8.1', [
      { n: 1, f: 'How might globalisation affect life chances in developing countries?', b: 'It can bring jobs, investment and access to education and health care, but also low wages, exploitation and widening inequality within and between countries.' },
      { n: 2, f: 'What are transnational organisations, and what do they try to do about inequality?', b: 'Organisations working across borders, such as the UN, World Bank and IMF, and NGOs. They give aid, loans and programmes to reduce poverty; critics question their success and the conditions they attach.' },
      { n: 3, f: 'How do colonialism and post-colonialism explain global inequality?', b: 'Colonialism took resources and labour from colonies and shaped their economies around the colonisers\' needs. Post-colonial theories argue these patterns of dependence and inequality continue after independence.' },
      { n: 4, f: 'How does patriarchy explain global inequality?', b: 'Feminists argue women are disadvantaged worldwide in pay, education, land ownership and power, and globalisation can exploit women\'s cheap labour.' },
    ]),
    ...sub(P4, 'globalisation-and-migration-9699', '8.2', [
      { n: 1, f: 'Immigration vs emigration vs net migration', b: 'Immigration: people moving into a country. Emigration: people leaving a country. Net migration: immigration minus emigration.' },
      { n: 2, f: 'Push factors vs pull factors', b: 'Push factors drive people out of a place, e.g. poverty, conflict or persecution. Pull factors attract them to another, e.g. jobs, higher wages, safety or family.' },
      { n: 3, f: 'Give positive and negative consequences of global migration', b: 'Positive: cultural diversity, economic benefits such as filling labour shortages and remittances. Negative: concerns over scarce resources and negative perceptions of migrants.' },
      { n: 4, f: 'Who benefits from migration?', b: 'It is debated: receiving economies gain workers, sending countries gain remittances and migrants may gain income, but migrants may face exploitation and sending countries may lose skilled workers.' },
    ]),
    ...sub(P4, 'globalisation-and-crime-9699', '8.3', [
      { n: 1, f: 'Why have global crimes emerged?', b: 'Easier movement of people, money and goods, digital technology and weak international regulation create opportunities for crimes such as human trafficking, corporate crime and environmental crime.' },
      { n: 2, f: 'How do Marxists explain who benefits from global crime?', b: 'Powerful corporations and elites benefit from crimes such as environmental damage and exploitation of labour, which are often under-policed and lightly punished compared with crimes of the poor.' },
      { n: 3, f: 'How do feminists view global crime?', b: 'They highlight crimes in which women and girls are the main victims, such as trafficking for sexual exploitation, linking them to global patriarchy and inequality.' },
      { n: 4, f: 'Why is global crime hard to police and prosecute?', b: 'Crimes cross borders with different laws, offenders use new technology to hide, and cooperation between states is slow; but technology and international cooperation also help detection.' },
    ]),
    ...sub(P4, 'traditional-media-and-new-media-9699', '9.1', [
      { n: 1, f: 'Cross-media ownership vs media conglomerates', b: 'Cross-media ownership: one company owning different kinds of media (e.g. newspapers and TV). Media conglomerates: large corporations owning many media and other businesses.' },
      { n: 2, f: 'What is digitalisation?', b: 'Converting media content into digital form, so text, images and sound can be stored, combined and shared through the internet. It underpins media convergence.' },
      { n: 3, f: 'How does new media differ from traditional media?', b: 'New media are digital, interactive and allow users to create and share content (many-to-many). Traditional media (press, TV, radio) are one-to-many, with professional producers and passive audiences.' },
      { n: 4, f: 'Has new media undermined traditional media?', b: 'Audiences and advertising have moved online, weakening print and broadcast. But traditional media companies also dominate online, and remain trusted sources for many.' },
    ]),
    ...sub(P4, 'theories-of-media-influences-content-9699', '9.2', [
      { n: 1, f: 'Pluralist vs Marxist theories of the media', b: 'Pluralist: many competing media reflect audience demand, so no single group controls content. Marxist: owners, part of the ruling class, use the media to spread ideology that supports capitalism.' },
      { n: 2, f: 'Mass manipulation vs hegemony', b: 'Mass manipulation (instrumental Marxism): owners directly control content to manipulate audiences. Hegemony (neo-Marxism): ruling-class ideas dominate because journalists share a common outlook, winning consent without direct control.' },
      { n: 3, f: 'What are news values?', b: 'The criteria journalists use to decide what is newsworthy, e.g. negativity, unexpectedness, elite persons and nations, and personalisation. They shape the selection and presentation of news.' },
      { n: 4, f: 'What is agenda setting?', b: 'The media influence which issues the public and politicians think are important by choosing what to cover and how prominently.' },
      { n: 5, f: 'What is the postmodernist view of the media?', b: 'Media images have become so central that the line between reality and representation blurs; audiences create varied meanings and identities from many media sources.' },
    ]),
    ...sub(P4, 'impact-of-the-new-media-9699', '9.3', [
      { n: 1, f: 'Digital optimism vs digital pessimism', b: 'Optimists: new media spread knowledge, empower ordinary people and strengthen democracy. Pessimists: they increase surveillance, misinformation, inequality (the digital divide) and the power of large corporations.' },
      { n: 2, f: 'How can new media challenge existing power structures?', b: 'Citizen journalism and social media let ordinary people share information and organise protests, bypassing traditional gatekeepers and governments.' },
      { n: 3, f: 'How does new media contribute to globalisation?', b: 'It allows instant communication and sharing of culture across the world, connecting people, markets and movements globally.' },
      { n: 4, f: 'How might new media affect identities and relationships?', b: 'People can present and experiment with identities online and keep in touch across distance, but critics point to shallow relationships, online harassment and pressure to present an ideal self.' },
    ]),
    ...sub(P4, 'media-representations-9699', '10.1', [
      { n: 1, f: 'What is a moral panic?', b: 'An exaggerated public reaction to a group seen as a threat to society\'s values, often driven by media coverage that labels the group as "folk devils".' },
      { n: 2, f: 'How can the media contribute to gender socialisation?', b: 'Through repeated stereotyped representations of men and women in roles, appearance and behaviour, which provide role models and norms.' },
      { n: 3, f: 'How are some groups stereotyped in the media?', b: 'E.g. young people as troublemakers, older people as frail or invisible, working-class people as feckless, minority ethnic groups as threats or problems.' },
      { n: 4, f: 'What is the relationship between the media and popular culture?', b: 'The media spread and shape popular culture (mass-produced culture enjoyed by many). Critics see it as commercial and low quality; others see it as diverse and creative.' },
    ]),
    ...sub(P4, 'models-of-media-effects-9699', '10.2', [
      { n: 1, f: 'What is the hypodermic syringe model?', b: 'A direct effects model: the media "inject" messages into a passive audience, who are directly influenced by them.' },
      { n: 2, f: 'What is the uses and gratifications model?', b: 'An indirect effects model: active audiences use the media to meet their own needs, such as information, entertainment, identity and social contact.' },
      { n: 3, f: 'What is the two-step flow model?', b: 'Media messages reach audiences through opinion leaders, who interpret them and pass them on to others, so influence is filtered through social networks.' },
      { n: 4, f: 'What is the cultural effects model?', b: 'Repeated media messages over a long time gradually shape audiences\' views of the world, though people interpret them differently depending on their experience.' },
      { n: 5, f: 'What is the normative model of media effects?', b: 'The media shape audiences\' sense of what is normal and acceptable behaviour, so influence works through norms rather than direct copying.' },
    ]),
    ...sub(P4, 'impact-of-media-on-behaviour-9699', '10.3', [
      { n: 1, f: 'Does violent media cause violent behaviour?', b: 'Some experiments show short-term increases in aggression after violent media. Critics argue lab studies lack validity, and that audiences are active and influenced by many other factors.' },
      { n: 2, f: 'What is deviance amplification?', b: 'Media coverage of deviance exaggerates it, leading to more public concern and policing, which can increase the deviance it reports.' },
      { n: 3, f: 'How might the media have a positive impact on behaviour?', b: 'Through health and safety campaigns, positive role models, promoting tolerance, and raising awareness of social issues.' },
      { n: 4, f: 'What is media sensationalism?', b: 'Presenting stories in an exaggerated, emotional way to attract audiences, which can distort public perceptions of risk and of particular groups.' },
    ]),
    ...sub(P4, 'religion-and-society-9699', '11.1', [
      { n: 1, f: 'Substantive vs functional vs social constructionist definitions of religion', b: 'Substantive: defined by its content, such as belief in God or the supernatural. Functional: defined by what it does for society or individuals. Social constructionist: defined by what people themselves count as religion.' },
      { n: 2, f: 'Why is religious belief hard to measure?', b: 'Attendance or membership may not reflect belief, people may exaggerate or hide their belief, and religions count members differently.' },
      { n: 3, f: 'How does religiosity vary by gender and age?', b: 'In many societies women show higher levels of religious participation than men, and older people more than younger people.' },
      { n: 4, f: 'What are other belief systems?', b: 'Systems of ideas that give meaning without being religions in the traditional sense, e.g. science, political ideologies such as Marxism, or nationalism.' },
    ]),
    ...sub(P4, 'religion-and-social-order-9699', '11.2', [
      { n: 1, f: 'What is Durkheim\'s functionalist view of religion?', b: 'Religion distinguishes the sacred from the profane, and through shared worship strengthens the collective conscience, creating social solidarity and order.' },
      { n: 2, f: 'What is the Marxist view of religion?', b: 'Religion is the "opium of the people": it eases the pain of exploitation with promises of a better afterlife, legitimates inequality and creates false consciousness.' },
      { n: 3, f: 'Give one limitation of the functionalist view of religion', b: 'It ignores religion\'s role in conflict and division, e.g. religious violence and tensions between faiths in diverse societies.' },
      { n: 4, f: 'Give one limitation of the Marxist view of religion', b: 'It ignores religion\'s positive functions and its role in social change, e.g. liberation theology.' },
    ]),
    ...sub(P4, 'religion-source-of-social-change-9699', '11.3', [
      { n: 1, f: 'What is Weber\'s theory of religion and capitalism?', b: 'In The Protestant Ethic and the Spirit of Capitalism, Weber argued Calvinist beliefs (predestination, hard work, thrift) encouraged the rational, disciplined attitudes that helped capitalism develop.' },
      { n: 2, f: 'Give one alternative view of the origins of capitalism', b: 'Marxists argue economic changes caused capitalism, and religious ideas followed; others point out that capitalism also developed in places without Calvinism.' },
      { n: 3, f: 'What is liberation theology?', b: 'A movement in the Roman Catholic Church, mainly in Latin America, that used religion to support the poor and oppose oppressive regimes: an example of religion driving social change.' },
      { n: 4, f: 'Give an example of a religious movement influencing politics', b: 'The Evangelical movement in US politics, or the influence of the Ayatollahs in the Iranian revolution (the syllabus\'s examples).' },
    ]),
    ...sub(P4, 'secularisation-debate-9699', '12.1', [
      { n: 1, f: 'What is the secularisation thesis?', b: 'The claim that religion loses its influence over individuals, institutions and society as societies modernise.' },
      { n: 2, f: 'What evidence suggests a decline in religious belief?', b: 'Falling church attendance and membership in many Western countries, fewer religious marriages, and more people saying they have no religion.' },
      { n: 3, f: 'How is rationalisation linked to secularisation?', b: 'Weber argued scientific and rational thinking replaces religious explanations ("disenchantment"), so religion becomes less credible.' },
      { n: 4, f: 'Disengagement vs structural differentiation', b: 'Disengagement: the church withdraws from involvement in politics and public life. Structural differentiation: specialist institutions take over functions religion once performed, such as education and welfare.' },
      { n: 5, f: 'Give one argument against the secularisation thesis', b: 'Religion remains strong in much of the world and among migrant communities, and belief may persist without attendance ("believing without belonging").' },
    ]),
    ...sub(P4, 'gender-feminism-and-religion-9699', '12.2', [
      { n: 1, f: 'What is the feminist view of religion?', b: 'Religion is often patriarchal: it legitimates male power through male leadership, sacred texts written by men, and rules that control women\'s roles and bodies.' },
      { n: 2, f: 'Give an example of moves towards gender equality in religion', b: 'Some religious organisations now ordain women as priests or ministers.' },
      { n: 3, f: 'How might religion benefit women?', b: 'It can give women community, status, support and a sense of meaning, and some women use religious practice, such as wearing the veil, to express identity and agency.' },
      { n: 4, f: 'Give one explanation for patriarchy in religion', b: 'Religious organisations developed in patriarchal societies, so their structures and interpretations of texts reflect men\'s interests; feminists argue the original teachings were sometimes more egalitarian.' },
    ]),
    ...sub(P4, 'religion-and-post-modernity-9699', '12.3', [
      { n: 1, f: 'What is privatised religion?', b: 'Religion practised as a personal, private choice rather than through public institutions, with individuals deciding what to believe.' },
      { n: 2, f: 'What is spiritual shopping?', b: 'Individuals choosing and combining religious and spiritual beliefs and practices from many sources, as consumers choose products.' },
      { n: 3, f: 'What is resacralisation?', b: 'A revival of the sacred and of religion in society, e.g. growth in new religious movements, New Age spirituality and fundamentalism.' },
      { n: 4, f: 'What are new religious movements (NRMs) and New Age ideas?', b: 'NRMs: religious groups of recent origin outside the main churches. New Age: diverse spiritual beliefs focused on self-spirituality, holistic health and personal growth.' },
      { n: 5, f: 'Name the explanations for the growth of fundamentalism in the syllabus', b: 'Cultural defence, cultural transition, disengagement, marginality and religious revival.' },
    ]),
  ],
};
