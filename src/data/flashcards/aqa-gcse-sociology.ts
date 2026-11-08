/**
 * D-444 -- flashcards for AQA GCSE Sociology 8192 (first teaching 2017).
 *
 * One block per subtopic, in specification order. 3.1 and 3.2 itemise no
 * subtopics, so their cards sit on the topic (topicOnly helper, ids '1-<n>'
 * and '2-<n>'). Card ids are permanent (browser progress is keyed by them):
 * add a new card with the next unused n, never renumber.
 *
 * The seven 3.7 research methods rows are not numbered in the specification,
 * so they carry an empty number in syllabus-topics.ts and their ids are
 * '-<n>'. Each row keeps its own block of n to stay unique: Research design
 * 1-9, Qualitative and quantitative methods 11-19, Different types of data
 * 21-29, Primary and secondary sources 31-39, Interpretation of data 41-49,
 * Practical issues 51-59, Ethical issues 61-69.
 *
 *   src: '...'  The card restates that revision-notes page, which maps to the
 *               card's topic or subtopic; origin 'revision-notes'.
 *
 * Written from Marlbridge's own 8192 revision notes and study guides, and from
 * the specification's Appendix B text summaries, whose authors and dates are
 * used here. Not tiered. Plain text only (see types.ts).
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

const APPR = 'aqa-gcse-sociology-8192-the-sociological-approach-revision-notes';
const SSPI = 'aqa-gcse-sociology-8192-social-structures-processes-issues-revision-notes';
const EDU = 'aqa-gcse-sociology-8192-education-revision-notes';
const STRAT = 'aqa-gcse-sociology-8192-social-stratification-revision-notes';
const RM = 'aqa-gcse-sociology-8192-research-methods-revision-notes';

const T1 = 'the-sociological-approach-8192';
const T2 = 'social-structures-processes-issues-8192';
const FAM = 'paper-1-families-and-education-8192';
const ED = 'education-8192';
const CRIME = 'paper-2-crime-and-stratification-8192';
const ST = 'social-stratification-8192';
const RMT = 'sociological-research-methods-topic-8192';

export const DECK_AQA_GCSE_SOCIOLOGY: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'gcse',
  subjectSlug: 'sociology',
  syllabusCode: '8192',
  syllabusSeries: 'first teaching 2017',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 3.1 The sociological approach
    ...topicOnly(T1, '1', [
      { n: 1, f: 'Consensus vs conflict perspectives', b: 'Consensus (functionalism): society rests on shared values. Conflict: society rests on competing interests, by class (Marxism) or gender (feminism).' },
      { n: 2, f: 'Macro vs micro approaches', b: 'Functionalism, Marxism and feminism look at society as a whole (macro). Interactionism looks at small-scale, face-to-face interaction (micro) and stresses agency.' },
      { n: 3, f: 'What was Durkheim\'s view of society?', b: 'Durkheim (1858-1917, France) argued shared norms and values hold society together; when rules break down there is anomie (normlessness).' },
      { n: 4, f: 'What was Marx\'s view of society?', b: 'Marx (1818-1883) argued class struggle between owners (bourgeoisie) and workers (proletariat) drives change, and ruling class ideology creates false class consciousness.' },
      { n: 5, f: 'What did Weber contribute to sociology?', b: 'Weber (1864-1920, Germany) saw stratification as class, status and party, with market situation shaping life chances, and identified three types of authority.' },
      { n: 6, f: 'Power vs authority', b: 'Power is getting others to act as you wish, even against their will. Authority is power accepted as legitimate.', src: APPR },
      { n: 7, f: 'Prejudice vs discrimination', b: 'Prejudice is a negative attitude, often based on stereotypes. Discrimination is an action: treating a group less favourably.' },
      { n: 8, f: 'Anomie', b: 'Normlessness, when rules break down (e.g. Merton: "anything goes" to get rich).', src: APPR },
    ]),

    // 3.2 Social structures, social processes and social issues
    ...topicOnly(T2, '2', [
      { n: 1, f: 'Social structure vs social process', b: 'Social structure: a lasting, organised pattern of institutions and relationships (families, schools, class). Social process: the way structures act on people over time (socialisation, social control, labelling).' },
      { n: 2, f: 'Agency', b: 'People\'s ability to act and make choices within structures.', src: SSPI },
      { n: 3, f: 'Social construct', b: 'Something whose meaning is created by society rather than fixed by nature.', src: SSPI },
      { n: 4, f: 'Mixed methods research vs triangulation', b: 'Mixed methods combines qualitative and quantitative data in one study. Triangulation uses more than one method or source to cross-check findings.' },
      { n: 5, f: 'Recorded vs reported vs actual crime', b: 'Reported crime is what victims tell the police; recorded crime is what police log; actual crime also includes the unreported and unrecorded dark figure.' },
      { n: 6, f: 'What does "compare and contrast" require?', b: 'Compare means similarities and differences; contrast means differences only. A compare and contrast answer needs both.' },
      { n: 7, f: 'Selective use of data', b: 'Choosing only the figures that support an argument.', src: SSPI },
    ]),

    // 3.3 Families
    ...sub(FAM, 'functions-of-families-8192', '3.3.1', [
      { n: 1, f: 'Name the four functions of families in the specification', b: 'Sexual, reproductive, economic and educational.' },
      { n: 2, f: 'What two basic functions did Parsons (1959) say every family keeps?', b: 'The primary socialisation of children and the stabilisation of adult personalities (giving and receiving emotional support). Critics say he idealised middle-class family life.' },
      { n: 3, f: 'How do Marxists see the functions of the family?', b: 'The family serves capitalism: it reproduces the next generation of workers, passes on private property through inheritance, and acts as a unit of consumption.' },
      { n: 4, f: 'How do feminists see the functions of the family?', b: 'The family reproduces patriarchy: women\'s unpaid domestic labour and emotional work benefit men.' },
    ]),
    ...sub(FAM, 'family-forms-8192', '3.3.2', [
      { n: 1, f: 'Nuclear vs extended vs reconstituted family', b: 'Nuclear: parents and dependent children. Extended: nuclear family plus other relatives. Reconstituted (step): at least one partner has children from a previous relationship.' },
      { n: 2, f: 'What is a beanpole family?', b: 'A long, thin family with several living generations but few members in each, caused by longer life expectancy and fewer children.' },
      { n: 3, f: 'Name the Rapoports\' (1982) five aspects of family diversity', b: 'Organisational (e.g. division of domestic labour), cultural (beliefs and values), class (resources), life course (stage in the family life cycle) and cohort (historical period).' },
      { n: 4, f: 'Give three reasons for growing family diversity', b: 'Rising divorce rates, secularisation and changing attitudes, as well as women\'s employment, cohabitation and later marriage.' },
    ]),
    ...sub(FAM, 'conjugal-role-relationships-8192', '3.3.3', [
      { n: 1, f: 'Joint vs segregated conjugal roles', b: 'Joint: partners share housework, childcare, decisions and leisure. Segregated: separate, traditional roles, e.g. male breadwinner and female homemaker.' },
      { n: 2, f: 'How did Oakley (1982) define the conventional family?', b: 'Nuclear families composed of legally married couples, voluntarily choosing the parenthood of one or more children. She examined the power of this idea and the strains of being conventional.' },
      { n: 3, f: 'Dual burden vs triple shift', b: 'Dual burden: women doing paid work plus most of the housework. Triple shift: paid work, housework and emotion work.' },
      { n: 4, f: 'Which issues affect conjugal role relationships today?', b: 'Decision making, money management, dual career families, child rearing and leisure activities.' },
    ]),
    ...sub(FAM, 'changing-relationships-within-families-8192', '3.3.4', [
      { n: 1, f: 'What is the symmetrical family (Willmott and Young, 1973)?', b: 'A home-centred nuclear family in which spouses make similar contributions to running the household, e.g. shared chores and decisions. Based on a survey of nearly 2,000 people in and around London.' },
      { n: 2, f: 'What is the principle of stratified diffusion?', b: 'Willmott and Young\'s theory that what happens at the top of the stratification system today will diffuse downwards tomorrow.' },
      { n: 3, f: 'How have family relationships changed from pre-industrial to modern times?', b: 'From families as units of production with extended kin, to industrial nuclear families with segregated roles, to more child-centred families with more joint roles today.' },
      { n: 4, f: 'Give one feminist criticism of the symmetrical family', b: 'Feminists found little evidence of real symmetry: women still did most of the housework and childcare.' },
    ]),
    ...sub(FAM, 'criticisms-of-families-8192', '3.3.5', [
      { n: 1, f: 'What did Zaretsky (1976) argue about the family?', b: 'A Marxist view: capitalism creates an illusion that the private life of the family is separate from the economy. The family cushions but props up capitalism, and cannot meet people\'s needs.' },
      { n: 2, f: 'What did Delphy and Leonard (1992) argue about the family?', b: 'A feminist view: the family is an economic system in which men, rather than capitalists as such, benefit from and exploit women\'s labour.' },
      { n: 3, f: 'Name four criticisms of families in the specification', b: 'Isolation and unrealistic idealisation, loss of traditional functions, lack of contact with wider kin, the status and role of women, marital breakdown and dysfunctional families.' },
      { n: 4, f: 'What is a dysfunctional family?', b: 'A family that fails to perform its functions properly, e.g. through abuse, neglect or conflict, which harms its members.' },
    ]),
    ...sub(FAM, 'divorce-8192', '3.3.6', [
      { n: 1, f: 'How did the Divorce Reform Act 1969 change divorce?', b: 'It allowed divorce on the ground of "irretrievable breakdown"; later reforms made divorce cheaper and simpler.' },
      { n: 2, f: 'Give four reasons for the rise in divorce since 1945', b: 'Changes in the law, changes in social attitudes and values (less stigma), secularisation, and changes in the status of women in society.' },
      { n: 3, f: 'What are the consequences of divorce for family structure?', b: 'More lone-parent families, mostly headed by women and linked to a higher risk of poverty, and more reconstituted families with step-relationships.' },
      { n: 4, f: 'How might feminists and functionalists view rising divorce differently?', b: 'Feminists may see it as women escaping unequal or abusive marriages. Functionalists may see it as reflecting higher expectations of marriage, with remarriage showing marriage is still valued.' },
    ]),

    // 3.4 Education
    ...sub(ED, 'roles-and-functions-of-education-8192', '3.4.1', [
      { n: 1, f: 'What did Durkheim (1925) see as the main function of education?', b: 'Transmitting society\'s norms and values, welding individuals into a united whole; the teaching of history links the child to society, and strict rules teach self-discipline.' },
      { n: 2, f: 'Particularistic vs universalistic standards', b: 'Particularistic: rules that apply to one person because of who they are, as in the family. Universalistic: the same rules for everyone, as in school and wider society (Parsons).', src: EDU },
      { n: 3, f: 'How did Parsons see the school?', b: 'As a bridge between the family and society, operating on meritocratic principles so status is achieved, and selecting individuals for their future roles.' },
      { n: 4, f: 'Home schooling vs de-schooling', b: 'Home schooling moves education out of school. De-schooling (Illich) rejects formal schooling as an institution altogether.' },
      { n: 5, f: 'State vs private schools', b: 'State schools are funded by taxation and free to attend. Private (independent, fee-paying) schools are funded mainly by fees.', src: EDU },
    ]),
    ...sub(ED, 'the-relationship-between-education-and-capitalism-8192', '3.4.2', [
      { n: 1, f: 'Correspondence principle', b: 'Bowles and Gintis\'s idea that school relationships mirror workplace relationships.', src: EDU },
      { n: 2, f: 'What did Bowles and Gintis (1976) argue education does in capitalism?', b: 'It reproduces labour power, creating a hardworking, docile, obedient and motivated workforce too divided to challenge management. They rejected the idea that capitalist societies are meritocratic.' },
      { n: 3, f: 'How does Willis (1977) differ from Bowles and Gintis?', b: 'Both are Marxist, but Willis argues education is not a very successful agency of socialisation: pupils can resist, and schooling can have unintended consequences.' },
      { n: 4, f: 'Hidden curriculum', b: 'What pupils learn from how school is organised, not from lessons, e.g. obedience and punctuality.', src: EDU },
    ]),
    ...sub(ED, 'educational-achievement-8192', '3.4.3', [
      { n: 1, f: 'What did Halsey, Heath and Ridge (1980) find?', b: 'In over 8,000 males born 1913–1952, service-class boys were 4 times as likely as working-class boys to be at school at 16, 8 times at 17, 10 times at 18 and 11 times as likely to attend university. Females were excluded.' },
      { n: 2, f: 'What did Ball, Bowe and Gewirtz (1994) find about parental choice?', b: 'A study of fifteen schools: parental choice and league tables pushed some schools to reintroduce streaming and setting and to focus on more able pupils.' },
      { n: 3, f: 'Cultural capital', b: 'Middle-class knowledge, tastes and confidence that schools reward.', src: EDU },
      { n: 4, f: 'Material vs cultural deprivation', b: 'Material: lack of money for housing, diet, equipment and study space. Cultural: claimed lack of parental attitudes and language codes that schools value. Critics say cultural deprivation blames the victim.' },
      { n: 5, f: 'Why do girls now outperform boys?', b: 'Feminism and changing aspirations, equal-opportunity policies, and a crisis of masculinity as traditional male manual work declines.' },
      { n: 6, f: 'Ethnocentric curriculum', b: 'A curriculum centred on one culture\'s history, language and values.', src: EDU },
    ]),
    ...sub(ED, 'processes-within-schools-8192', '3.4.4', [
      { n: 1, f: 'Streaming vs setting vs mixed ability teaching', b: 'Streaming: one ability group for all subjects. Setting: ability groups subject by subject. Mixed ability: pupils of all abilities taught together.' },
      { n: 2, f: 'Labelling vs self-fulfilling prophecy', b: 'Labelling is the act of defining a pupil, e.g. as "bright" or "lazy". The self-fulfilling prophecy is the result when treatment and self-image change until the pupil matches the label.' },
      { n: 3, f: 'What did Ball (1981) find at Beachside Comprehensive?', b: 'In three years of participant observation, middle-class pupils were more likely to be placed in band 1 and faced higher teacher expectations; he compared a banded cohort with a mixed ability cohort.' },
      { n: 4, f: 'What did Willis (1977) find about counter school culture?', b: 'Working-class "lads" in a Midlands school rejected school values, felt superior to teachers and conformist pupils, and their rejection prepared them for manual work.' },
    ]),

    // 3.5 Crime and deviance
    ...sub(CRIME, 'the-social-construction-of-crime-and-deviance-8192', '3.5.1', [
      { n: 1, f: 'Crime vs deviance', b: 'Crime is behaviour that breaks the law. Deviance is behaviour that breaks social norms. Deviance is broader: a deviant act need not be illegal.' },
      { n: 2, f: 'What are Merton\'s five responses to success goals?', b: 'Conformity, innovation (illegitimate means, e.g. crime), ritualism (abandoning goals but keeping rules), retreatism (dropping out of both) and rebellion (replacing goals and means).' },
      { n: 3, f: 'What is anomie in Merton\'s theory?', b: 'When success is valued more than the means of achieving it, the usual rules are abandoned and "anything goes" in pursuit of wealth (Merton, 1938).' },
      { n: 4, f: 'What did Becker (1963) argue about deviance?', b: 'An act only becomes deviant when others define it as such. The label becomes a master status, leading to a self-fulfilling prophecy and a deviant career.' },
      { n: 5, f: 'What does the social construction of crime mean?', b: 'What counts as crime and deviance depends on who commits the act, when, where and who reacts, so definitions vary between societies and over time.' },
    ]),
    ...sub(CRIME, 'social-control-8192', '3.5.2', [
      { n: 1, f: 'Formal vs informal social control', b: 'Formal: official agencies with written rules and sanctions, e.g. police and courts. Informal: unwritten rules and sanctions from family, peers and others, e.g. disapproval.' },
      { n: 2, f: 'What did Heidensohn (1985) argue about female conformity?', b: 'Patriarchal societies control women more effectively than men: at home (housework, childcare), in public (threat of male violence, reputation) and at work (male hierarchies, harassment).' },
      { n: 3, f: 'What is control theory?', b: 'People are neither naturally good nor bad but make a rational choice to turn to crime when the advantages outweigh the disadvantages; strong social controls make crime less likely.' },
      { n: 4, f: 'Positive vs negative sanctions', b: 'Positive sanctions reward conformity (praise, promotion). Negative sanctions punish deviance (fines, exclusion, disapproval).' },
    ]),
    ...sub(CRIME, 'criminal-and-deviant-behaviour-8192', '3.5.3', [
      { n: 1, f: 'What did Albert Cohen (1955) argue about delinquent subcultures?', b: 'Working-class boys share mainstream success goals but, after educational failure, suffer status frustration and form subcultures that give status for stealing, vandalism and truancy.' },
      { n: 2, f: 'What did Carlen (1988) find about women, crime and poverty?', b: 'From interviews with 39 mostly working-class women, crime becomes more likely when the "class deal" (consumer goods for wages) and "gender deal" (rewards from a male breadwinner) fail.' },
      { n: 3, f: 'Which factors affect criminal and deviant behaviour in the specification?', b: 'Social class, gender, ethnicity and age.' },
      { n: 4, f: 'Name some public debates about crime', b: 'Concerns over violent crime, sentencing, the treatment of young offenders, the prison system and media coverage of crime.' },
    ]),
    ...sub(CRIME, 'data-on-crime-8192', '3.5.4', [
      { n: 1, f: 'What is the dark figure of crime?', b: 'Crime that is unreported or unrecorded, so it does not appear in official statistics.' },
      { n: 2, f: 'Official statistics vs victim surveys vs self-report studies', b: 'Official statistics: crimes recorded by the police. Victim surveys: ask people about crimes against them, revealing unreported crime. Self-report studies: ask people about crimes they have committed.' },
      { n: 3, f: 'Why might people not report a crime?', b: 'They may think it too trivial, fear reprisals, distrust the police, feel embarrassed, or not realise a crime has taken place.' },
      { n: 4, f: 'How do interactionists view crime statistics?', b: 'As socially constructed: they reflect decisions by victims to report and by police to record, and policing that targets some groups, rather than the true amount of crime.' },
    ]),

    // 3.6 Social stratification
    ...sub(ST, 'functionalist-theory-of-stratification-8192', '3.6.1', [
      { n: 1, f: 'What did Davis and Moore (1945) argue about stratification?', b: 'Stratification is a "universal necessity": unequal rewards attract the most able people into the functionally most important positions, so roles are filled and performed well.' },
      { n: 2, f: 'Functionally important roles', b: 'Positions that need rare skills or carry high responsibility (Davis and Moore).', src: STRAT },
      { n: 3, f: 'Give two criticisms of Davis and Moore', b: 'Lower-paid jobs such as nursing are also vital, and pay differences may reflect power rather than importance. There is no agreed way to measure talent.' },
      { n: 4, f: 'Meritocracy', b: 'A system where rewards depend on ability and effort, not background.', src: STRAT },
    ]),
    ...sub(ST, 'socio-economic-class-8192', '3.6.2', [
      { n: 1, f: 'Means of production', b: 'Land, capital, labour power, buildings and machinery (Marx).', src: STRAT },
      { n: 2, f: 'Bourgeoisie vs proletariat', b: 'The bourgeoisie own the means of production. The proletariat are workers who sell their labour.' },
      { n: 3, f: 'False class consciousness', b: 'Workers accepting a system that exploits them, because of ruling class ideology.' },
      { n: 4, f: 'Marx vs Weber on class', b: 'Marx: two main classes defined by ownership, which polarise. Weber: non-owners are divided by market situation, the middle class expands, and status and party are separate dimensions.' },
      { n: 5, f: 'Market situation', b: 'A person\'s position in the market for skills and pay (Weber).', src: STRAT },
    ]),
    ...sub(ST, 'life-chances-8192', '3.6.3', [
      { n: 1, f: 'Life chances', b: 'Chances of good outcomes such as health, education, work and housing.', src: STRAT },
      { n: 2, f: 'Which factors affect life chances in the specification?', b: 'Social class, gender, race and ethnicity, sexuality, age, disability, and religion and belief.' },
      { n: 3, f: 'What did Devine (1992) find in Affluent Workers Revisited?', b: 'Interviewing Vauxhall workers in Luton and their wives in the late 1980s, she found no clear evidence of privatised instrumentalism, and workers still resented inherited wealth.' },
      { n: 4, f: 'Embourgeoisement', b: 'The idea that affluent workers become middle class in lifestyle and values.', src: STRAT },
      { n: 5, f: 'Glass ceiling', b: 'An invisible barrier that stops women reaching top jobs.', src: STRAT },
    ]),
    ...sub(ST, 'poverty-as-a-social-issue-8192', '3.6.4', [
      { n: 1, f: 'Relative deprivation (Townsend)', b: 'Lacking the resources for the diet, activities and living conditions widely available in society.' },
      { n: 2, f: 'What did Townsend find about poverty in 1968–69?', b: 'Using a deprivation index from questionnaires to over 2,000 households, more than 22% of the population were in poverty on his measure, against just over 6% on the state standard.' },
      { n: 3, f: 'What did Murray (1984) argue about the underclass?', b: 'A New Right view: welfare benefits create dependency and an underclass, shown by rising illegitimacy, crime and unwillingness to work. Critics say he ignores economic causes.' },
      { n: 4, f: 'Poverty trap', b: 'Earning more leads to losing benefits, so people gain little from work.', src: STRAT },
      { n: 5, f: 'Culture of poverty vs material deprivation', b: 'Culture of poverty: values passed on that keep people poor. Material deprivation: lack of money and resources.' },
    ]),
    ...sub(ST, 'power-and-authority-8192', '3.6.5', [
      { n: 1, f: 'What are Weber\'s three types of authority?', b: 'Traditional (custom and inherited status), charismatic (devotion to a leader with exceptional qualities) and rational-legal (acceptance of shared impersonal rules).' },
      { n: 2, f: 'Formal vs informal sources of power', b: 'Formal: official position or law, e.g. a judge. Informal: personal influence, peer pressure or money.' },
      { n: 3, f: 'Pluralism', b: 'The view that power is spread among competing groups.', src: STRAT },
      { n: 4, f: 'What is a party in Weber\'s sense?', b: 'A group concerned with gaining political or social power, including pressure and interest groups as well as political parties.' },
    ]),
    ...sub(ST, 'power-relationships-8192', '3.6.6', [
      { n: 1, f: 'What are Walby\'s (1990) six structures of patriarchy?', b: 'Paid work, patriarchal relations of production (in the home), patriarchal culture, sexuality, male violence towards women, and the state.' },
      { n: 2, f: 'Private vs public patriarchy', b: 'Private: direct control of women by fathers and husbands. Public: women have access to public life but are segregated into low-paid, low-status work (Walby).' },
      { n: 3, f: 'Which factors affect power relationships in the specification?', b: 'Social class, gender, sexuality, race, age, disability, and religion and beliefs.' },
      { n: 4, f: 'Ageism', b: 'Prejudice or discrimination on the grounds of age.', src: STRAT },
      { n: 5, f: 'Institutional racism', b: 'Racism built into the routines and rules of an organisation.', src: STRAT },
    ]),

    // 3.7 Sociological research methods
    ...sub(RMT, 'sociological-research-methods-8192', '', [
      { n: 1, f: 'Aim vs hypothesis', b: 'An aim is a general statement of what a study wants to find out. A hypothesis is a testable prediction about a relationship between two things.' },
      { n: 2, f: 'Pilot study', b: 'Small trial run to test the method before the main study.', src: RM },
      { n: 3, f: 'Sampling frame', b: 'List of the population from which a sample is drawn.', src: RM },
      { n: 4, f: 'Quota vs snowball sampling', b: 'Quota: set numbers from each group, chosen by the researcher to match the population. Snowball: participants recruit further participants, useful for hard-to-reach groups.' },
      { n: 5, f: 'Random vs representative', b: 'Random describes how people are chosen (everyone has an equal chance). Representative describes the result: the sample shares the population\'s characteristics.' },
    ]),
    ...sub(RMT, 'qualitative-and-quantitative-methods-8192', '', [
      { n: 11, f: 'Questionnaires with closed questions: strength and weakness', b: 'Strength: large samples, cheap and reliable. Weakness: little depth, and response rates may be low.' },
      { n: 12, f: 'Structured vs unstructured interview', b: 'Structured: standard questions in a fixed order, reliable and comparable. Unstructured: a flexible guided conversation, giving depth and validity but hard to compare or repeat.' },
      { n: 13, f: 'Participant vs non-participant observation', b: 'Participant: the researcher joins the group and sees real behaviour. Non-participant: the researcher watches without joining and stays detached.' },
      { n: 14, f: 'Overt vs covert observation', b: 'Overt: the group knows it is being studied, risking the observer effect. Covert: the group does not know, risking breaking informed consent.' },
      { n: 15, f: 'What is a focus group?', b: 'A group interview in which participants discuss a topic; it shows how views form in discussion, but one person can dominate.' },
      { n: 16, f: 'Why use a mixed methods approach?', b: 'Combining quantitative and qualitative methods gives both reliable patterns and valid, in-depth meanings, and lets findings be checked against each other.' },
    ]),
    ...sub(RMT, 'different-types-of-data-8192', '', [
      { n: 21, f: 'Qualitative vs quantitative data', b: 'Qualitative data are in words or meanings, from methods such as unstructured interviews. Quantitative data are numerical, from methods such as closed-question questionnaires.' },
      { n: 22, f: 'Reliability vs validity', b: 'Reliable = repeatable. Valid = true to life. Questionnaires lean reliable; unstructured interviews and participant observation lean valid.' },
      { n: 23, f: 'Official vs non-official statistics', b: 'The difference is who produced the figures (government and its agencies vs others such as charities or researchers), not whether they are accurate.' },
      { n: 24, f: 'Official statistics: strength and weakness', b: 'Strength: national, regular and free. Weakness: definitions are set by government, and unrecorded events are missed.' },
    ]),
    ...sub(RMT, 'primary-and-secondary-sources-8192', '', [
      { n: 31, f: 'Primary vs secondary data', b: 'Primary data are collected first-hand by the researcher. Secondary data already exist, produced by others for another purpose.' },
      { n: 32, f: 'Give three examples of secondary sources', b: 'Official statistics, documents such as diaries, letters and reports, and media content such as newspapers and websites.' },
      { n: 33, f: 'Give one strength and one weakness of secondary sources', b: 'Strength: cheap, quick and may cover large populations or the past. Weakness: produced for another purpose, so may be biased or not measure what the researcher needs.' },
      { n: 34, f: 'Content analysis', b: 'Systematic study of documents or media content.', src: RM },
    ]),
    ...sub(RMT, 'interpretation-of-data-8192', '', [
      { n: 41, f: 'Trend', b: 'General direction of data over time.', src: RM },
      { n: 42, f: 'Percentage vs percentage points', b: 'A rise from 20% to 30% is a 10 percentage point rise, which is a 50% increase.' },
      { n: 43, f: 'What should you check when interpreting a graph or table?', b: 'The title, axes or headings, units and dates, the source, the overall pattern or trend, and any exceptions or changes in direction.' },
      { n: 44, f: 'Why should you be careful about cause when reading statistics?', b: 'Two trends moving together (a correlation) do not prove that one causes the other; other factors may explain both.' },
    ]),
    ...sub(RMT, 'practical-issues-8192', '', [
      { n: 51, f: 'Name the practical issues in research in the specification', b: 'Time, cost and access.' },
      { n: 52, f: 'Why is access a practical issue in researching schools?', b: 'Gatekeepers such as head teachers control entry, pupils are minors so parental consent is needed, and timetables limit when research can happen.' },
      { n: 53, f: 'Why might a researcher choose a questionnaire for practical reasons?', b: 'It is cheap and quick to give to a large, spread-out sample, and the results are easy to analyse.' },
      { n: 54, f: 'Why is participant observation practically difficult?', b: 'It is time-consuming, needs the researcher to gain acceptance into the group, and can only study a small group.' },
    ]),
    ...sub(RMT, 'ethical-issues-8192', '', [
      { n: 61, f: 'Name the ethical issues in the specification', b: 'Consent, confidentiality and harm to participants, and how each can be addressed.' },
      { n: 62, f: 'Informed consent', b: 'Agreeing to take part with full knowledge of what the research involves.', src: RM },
      { n: 63, f: 'Confidentiality', b: 'Keeping participants\' identities and information private.', src: RM },
      { n: 64, f: 'How can harm to participants be avoided?', b: 'By not asking distressing questions without support, letting participants withdraw, protecting their identity, and debriefing them afterwards.' },
    ]),
  ],
};
