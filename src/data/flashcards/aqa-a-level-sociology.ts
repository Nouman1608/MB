/**
 * D-444 -- flashcards for AQA A-level Sociology 7192 (first teaching 2015).
 *
 * One block per subtopic, in specification order. Card ids are
 * `<subtopic number>-<n>` and are permanent (browser progress is keyed by
 * them): add a new card with the next unused n, never renumber.
 *
 *   src: '...'  The card restates a key-terms entry on that revision-notes page,
 *               which maps to the card's subtopic; origin 'revision-notes'.
 *
 * The eight Paper 2 topics are written from Marlbridge's own 7192 revision
 * notes and study guides, with researcher names and dates as those pages give
 * them. Education, Methods in Context and Crime and Deviance have shorter
 * Marlbridge pages, and the two Theory and Methods subtopics (3.1.3, 3.3.2,
 * which share one content list) have none; those cards follow section 4 of the
 * specification and widely taught theorists, without dates, since neither the
 * pages nor the specification give them. 3.1.3 carries methods and research
 * design; 3.3.2 carries theory, science and values. Not tiered. Plain text
 * only (see types.ts).
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

const CUL = 'aqa-a-level-sociology-7192-culture-and-identity-revision-notes';
const FAM = 'aqa-a-level-sociology-7192-families-and-households-revision-notes';
const HEA = 'aqa-a-level-sociology-7192-health-revision-notes';
const WPW = 'aqa-a-level-sociology-7192-work-poverty-and-welfare-revision-notes';
const BEL = 'aqa-a-level-sociology-7192-beliefs-in-society-revision-notes';
const GLO = 'aqa-a-level-sociology-7192-global-development-revision-notes';
const MED = 'aqa-a-level-sociology-7192-the-media-revision-notes';
const STR = 'aqa-a-level-sociology-7192-stratification-and-differentiation-revision-notes';

const P1 = 'paper-1-education-theory-methods-7192';
const P2 = 'paper-2-topics-in-sociology-7192';
const P3 = 'paper-3-crime-deviance-theory-methods-7192';

export const DECK_AQA_A_LEVEL_SOCIOLOGY: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'sociology',
  syllabusCode: '7192',
  syllabusSeries: 'first teaching 2015',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 3.1 Education with Theory and Methods
    ...sub(P1, 'education-7192', '3.1.1', [
      { n: 1, f: 'How do functionalists see the role of education?', b: 'Education performs secondary socialisation, builds social solidarity, and allocates people to suitable jobs on merit (meritocratic role allocation).' },
      { n: 2, f: 'What is the correspondence principle?', b: 'Bowles and Gintis\'s Marxist idea that school\'s hierarchy, discipline and extrinsic rewards mirror the capitalist workplace, producing a compliant workforce.' },
      { n: 3, f: 'Material vs cultural explanations of class differences in achievement', b: 'Material: the cost of resources, poor housing and diet. Cultural: differences in cultural capital (Bourdieu) and speech codes (restricted vs elaborated) that schools reward unequally.' },
      { n: 4, f: 'Give three explanations of boys\' underachievement relative to girls', b: 'The decline of traditional male manual jobs reducing motivation, laddish subcultures that see effort as unmasculine, and a lack of male role models in primary teaching.' },
      { n: 5, f: 'Give three explanations of girls\' improved achievement', b: 'Changing ambitions linked to feminism and wider career opportunities, assessment styles such as coursework argued to suit girls\' study habits, and teacher expectations favouring girls\' classroom behaviour.' },
      { n: 6, f: 'How do in-school processes explain ethnic differences in achievement?', b: 'Teacher labelling and expectations, and setting and streaming that place some minority ethnic pupils in lower groups, alongside material deprivation outside school.' },
      { n: 7, f: 'What is marketisation of education?', b: 'Introducing market forces such as parental choice, competition between schools and league tables, so that schools compete for pupils like firms for customers.' },
      { n: 8, f: 'Policies for equality of opportunity vs equality of outcome', b: 'Opportunity: removing barriers so all can compete fairly, e.g. comprehensive schools. Outcome: actively reducing gaps in results, e.g. extra funding targeted at disadvantaged pupils.' },
    ]),
    ...sub(P1, 'methods-in-context-7192', '3.1.2', [
      { n: 1, f: 'What does a methods in context answer have to combine?', b: 'A specific feature of the named research method with a specific feature of researching that education topic. A method-only or context-only answer scores low.' },
      { n: 2, f: 'Why is access a practical issue in researching schools?', b: 'Researchers need gatekeeper permission from head teachers, parents and often ethics committees, which can limit or delay research.' },
      { n: 3, f: 'How can power and status affect research with pupils?', b: 'Pupils may see researchers as authority figures like teachers, so they may give answers they think are expected, reducing validity.' },
      { n: 4, f: 'What ethical issues arise in researching children in education?', b: 'Informed consent (children may not fully understand, so parental consent is needed), safeguarding and protection from harm, and confidentiality.' },
      { n: 5, f: 'Why might structured interviews of teachers be reliable but lack validity?', b: 'Standardised questions can be repeated to give comparable answers (reliable), but may not let teachers explain the complex, often unconscious reasons behind their expectations of pupils (less valid).' },
      { n: 6, f: 'How should you use the item in a methods in context question?', b: 'Draw directly on its details (e.g. teachers being busy, observation not always being possible) and link each to a feature of the method, ending with a judgement on suitability.' },
    ]),
    ...sub(P1, 'theory-and-methods-3-1-3-7192', '3.1.3', [
      { n: 1, f: 'Primary vs secondary data', b: 'Primary data are collected by the sociologist, e.g. by questionnaire or observation. Secondary data already exist, e.g. official statistics and documents.' },
      { n: 2, f: 'Quantitative vs qualitative data', b: 'Quantitative data are numerical and suit positivists. Qualitative data are descriptive, showing meanings and experiences, and suit interpretivists.' },
      { n: 3, f: 'Theoretical, practical and ethical factors in choosing a method', b: 'Theoretical: the researcher\'s view of reliability, validity and representativeness. Practical: time, money, access, skills. Ethical: consent, harm, confidentiality and deception.' },
      { n: 4, f: 'Participant vs non-participant observation', b: 'Participant: the researcher joins in with the group, gaining insight into meanings (valid). Non-participant: the researcher watches from outside, less risk of going native but less insight.' },
      { n: 5, f: 'Why do sociologists rarely use laboratory experiments?', b: 'They are artificial, can only study small-scale behaviour, raise ethical problems, and cannot control the many variables affecting social life. Field experiments are used more.' },
      { n: 6, f: 'Official statistics: positivist vs interpretivist view', b: 'Positivists see them as objective social facts useful for finding patterns and causes. Interpretivists see them as social constructions reflecting the decisions of those who record them.' },
      { n: 7, f: 'What are documents in sociological research?', b: 'Written or visual material, personal (diaries, letters) or public (government reports, media). Judged by authenticity, credibility, representativeness and meaning (Scott).' },
      { n: 8, f: 'What is a pilot study?', b: 'A small-scale trial of the research before the main study, to check questions, timing and procedures, improving reliability and validity.' },
    ]),

    // 3.2 Topics in Sociology
    ...sub(P2, 'culture-and-identity-7192', '3.2.1', [
      { n: 1, f: 'Mass culture vs popular culture', b: 'Mass culture implies standardised commercial culture imposed on passive audiences (Adorno and Horkheimer\'s culture industry). Popular culture is a neutral or positive term for what people enjoy, with audiences who may be active.' },
      { n: 2, f: 'Folk culture', b: 'Pre-industrial culture made by ordinary people and passed on orally.', src: CUL },
      { n: 3, f: 'What did Hebdige (1979) argue about punk style?', b: 'Punks gave everyday objects new meanings (bricolage) as a form of resistance; the reading was the analyst\'s rather than members\' own accounts.' },
      { n: 4, f: 'What is the looking-glass self (Cooley)?', b: 'Our self-image comes from how we think others see us. Mead added that we learn to take the role of the "generalised other".' },
      { n: 5, f: 'Medical vs social model of disability', b: 'Medical model: disability is a personal problem caused by impairment. Social model (Oliver, 1990): society\'s barriers disable people with impairments.' },
      { n: 6, f: 'Banal nationalism', b: 'Everyday, unnoticed reminders of national belonging (Billig, 1995), such as flags on buildings and "we" in news reports.' },
      { n: 7, f: 'Hall\'s three outcomes of globalisation for identity', b: 'Homogenisation (cultures becoming the same), resistance (strengthening local identities) and hybridity (mixing cultures into something new).' },
      { n: 8, f: 'What did Pakulski and Waters (1996) argue about class and identity?', b: 'The "death of class": consumption has replaced class as the main source of identity. Critics reply that class still predicts life chances.' },
    ]),
    ...sub(P2, 'families-and-households-7192', '3.2.2', [
      { n: 1, f: 'What did Murdock (1949) argue about the family?', b: 'From a study of 250 societies, that the nuclear family is universal and performs four functions: sexual, reproductive, economic and educational.' },
      { n: 2, f: 'Functional fit', b: 'Family structure adapts to the needs of the economy (Parsons): the isolated nuclear family suits a geographically mobile industrial economy.' },
      { n: 3, f: 'Symmetrical family vs Oakley\'s (1974) findings', b: 'Young and Willmott (1973): roles are becoming more equal. Oakley, studying 40 London housewives, found little symmetry; housework remained women\'s work.' },
      { n: 4, f: 'Dual burden / triple shift', b: 'Paid work plus housework; plus emotion work (Duncombe and Marsden).', src: FAM },
      { n: 5, f: 'Name the five types of family diversity (Rapoport and Rapoport, 1982)', b: 'Organisational, cultural, class, life-stage and cohort diversity. Chester argues diversity is overstated, with most people still living in a nuclear family at some point.' },
      { n: 6, f: 'Beanpole family', b: 'Many generations but few relatives in each (Brannen).', src: FAM },
      { n: 7, f: 'What did Ariès (1960) argue about childhood?', b: 'Using paintings and diaries, he argued childhood is a modern idea; in medieval times children were treated as mini-adults. Pollock (1983) found earlier evidence of childhood.' },
      { n: 8, f: 'Pure relationship', b: 'A relationship kept only while both partners are satisfied (Giddens).', src: FAM },
    ]),
    ...sub(P2, 'health-7192', '3.2.3', [
      { n: 1, f: 'Biomedical vs social model of health', b: 'Biomedical: illness is a physical fault in the individual body, diagnosed and cured by doctors using science. Social: health and illness are shaped by social conditions, meanings and power.' },
      { n: 2, f: 'What is the sick role (Parsons, 1951)?', b: 'Illness is a form of deviance managed by rights (exemption from normal duties) and duties (to want to get well and seek medical help); the doctor is the gatekeeper.' },
      { n: 3, f: 'Illness iceberg', b: 'Only a small share of cases of illness reach a doctor (Last).', src: HEA },
      { n: 4, f: 'Inverse care law', b: 'Good care tends to be least available where need is greatest (Tudor Hart).', src: HEA },
      { n: 5, f: 'What did the Black Report (1980) conclude?', b: 'Class inequalities in health were mainly caused by economic inequality (material explanations). The Acheson Report (1998) reached the same conclusions.' },
      { n: 6, f: 'What did the Whitehall studies (Marmot) find?', b: 'Civil servants in the lowest grade had about three times the death rate of the highest grade, and risk factors such as smoking explained only part, pointing to psychosocial stress from low status and control.' },
      { n: 7, f: 'Iatrogenesis', b: 'Harm caused by medicine itself (Illich), whether clinical, social or cultural.', src: HEA },
      { n: 8, f: 'What did Brown and Harris (1978) find about depression?', b: 'Women in Camberwell who experienced severe life events plus vulnerability factors were more likely to become depressed, and working-class women were more at risk.' },
    ]),
    ...sub(P2, 'work-poverty-and-welfare-7192', '3.2.4', [
      { n: 1, f: 'Absolute vs relative poverty', b: 'Absolute: lacking the minimum needed for physical survival and health (e.g. Rowntree\'s 1899 York survey). Relative: falling below the living standard that is normal in your society (e.g. Townsend, 1979).' },
      { n: 2, f: 'Relative low income (UK official measure)', b: 'Household income below 60% of the median, adjusted for household size.', src: WPW },
      { n: 3, f: 'Consensual measure of poverty', b: 'Poverty defined by lacking items the public agrees are necessities (Mack and Lansley, 1985, Poor Britain).' },
      { n: 4, f: 'Culture of poverty vs underclass', b: 'Culture of poverty (Lewis): distinct values of helplessness among the poor, passed between generations. Underclass (Murray, 1990): a group outside mainstream society, linked to welfare dependency.' },
      { n: 5, f: 'What did Shildrick et al. (2012) find?', b: 'They found no families with three generations who had never worked, challenging the underclass and welfare-dependency idea.' },
      { n: 6, f: 'Means testing vs universalism', b: 'Means testing: paying a benefit only to people below an income and savings limit. Universalism: paying a benefit to everyone in a category, whatever their income.' },
      { n: 7, f: 'What did Braverman (1974) argue about work?', b: 'Managers use Taylorism (scientific management) and machines to deskill workers and control the labour process. Critics say he ignores resistance.' },
      { n: 8, f: 'Emotional labour', b: 'Managing your own feelings as part of a paid job (Hochschild, 1983), e.g. flight attendants\' smiles.' },
      { n: 9, f: 'Precariat', b: 'Standing\'s term for a growing group with insecure jobs and insecure identities.', src: WPW },
    ]),
    ...sub(P2, 'beliefs-in-society-7192', '3.2.5', [
      { n: 1, f: 'Open vs closed belief systems', b: 'Open: can be revised by evidence, e.g. science (Popper\'s falsifiability). Closed: explains away challenges, e.g. Azande witchcraft (Evans-Pritchard). Kuhn (1962) argued science defends paradigms too.' },
      { n: 2, f: 'Substantive vs functional definitions of religion', b: 'Substantive: defines religion by its content, such as belief in the supernatural (Weber). Functional: defines it by what it does, such as integration (Durkheim).' },
      { n: 3, f: 'What did Durkheim (1912) argue about religion?', b: 'From the Arunta\'s totemism, that worshipping the totem is really worshipping society, so religion strengthens the collective conscience and social solidarity.' },
      { n: 4, f: 'What did Weber (1905) argue in the Protestant ethic?', b: 'Calvinist asceticism (hard work, thrift, rejecting luxury) helped create the spirit of capitalism. Kautsky argued capitalism came first.' },
      { n: 5, f: 'Church vs denomination vs sect vs cult', b: 'Church: large, inclusive, linked to the state. Denomination: middle type that accepts other faiths and society (Niebuhr). Sect: exclusive, high commitment. Cult: loose, tolerant, individual.' },
      { n: 6, f: 'What are Wallis\'s (1984) three types of NRM?', b: 'World-rejecting, world-accommodating and world-affirming new religious movements.' },
      { n: 7, f: 'Vicarious religion', b: 'A minority practising religion on behalf of a majority (Davie).', src: BEL },
      { n: 8, f: 'What is existential security theory (Norris and Inglehart, 2004)?', b: 'People in insecure societies, facing risks to survival, stay more religious, and those societies have higher birth rates, so the world as a whole is becoming more religious.' },
    ]),
    ...sub(P2, 'global-development-7192', '3.2.6', [
      { n: 1, f: 'What is Rostow\'s (1960) modernisation theory?', b: 'Societies develop through five stages, from traditional society to high mass consumption, helped by Western investment and values. Criticised as ethnocentric and for ignoring colonial history.' },
      { n: 2, f: 'What is Frank\'s (1966) dependency theory?', b: 'The metropolis (rich core) drains surplus from satellites (poor countries), causing underdevelopment. It struggles to explain East Asian growth.' },
      { n: 3, f: 'What is Wallerstein\'s (1974) world systems theory?', b: 'The world is a single capitalist system of core, semi-periphery and periphery countries, with some mobility between them.' },
      { n: 4, f: 'HDI', b: 'UNDP index (from 1990): life expectancy, schooling, GNI per capita.', src: GLO },
      { n: 5, f: 'Tied aid vs bilateral vs multilateral aid', b: 'Tied aid must be spent on goods or services from the donor country. Bilateral aid goes from one government to another. Multilateral aid goes through an international agency.' },
      { n: 6, f: 'Sachs (2005) vs Moyo (2009) on aid', b: 'Sachs: large, targeted aid can break poverty traps. Moyo: state-to-state aid breeds dependency and corruption.' },
      { n: 7, f: 'Structural adjustment', b: 'Loan conditions (often IMF and World Bank) requiring market reforms and spending cuts.', src: GLO },
      { n: 8, f: 'Sustainable development', b: 'Meeting present needs without compromising future generations (Brundtland, 1987).', src: GLO },
    ]),
    ...sub(P2, 'the-media-7192', '3.2.7', [
      { n: 1, f: 'Horizontal vs vertical integration', b: 'Horizontal: owning several firms in the same media sector. Vertical: owning the production, distribution and sale of content.' },
      { n: 2, f: 'What is the propaganda model (Herman and Chomsky, 1988)?', b: 'Five filters (including ownership, advertising and reliance on official sources) shape news so it serves powerful interests. Written about US media.' },
      { n: 3, f: 'What did the Glasgow University Media Group (1976) find in Bad News?', b: 'TV news framed industrial disputes against workers, e.g. through language and the choice of sources. Critics question their coding of content.' },
      { n: 4, f: 'What did McCombs and Shaw (1972) find about agenda setting?', b: 'Voters\' priorities matched the issues the media emphasised. This is a correlation, not proof that the media caused the priorities.' },
      { n: 5, f: 'Symbolic annihilation', b: 'A group being absent, trivialised or condemned in media (Tuchman, 1978, on women).' },
      { n: 6, f: 'What are Hall\'s (1973) three readings in encoding and decoding?', b: 'Dominant (accepting the preferred meaning), negotiated (partly accepting it) and oppositional (rejecting it).' },
      { n: 7, f: 'Cultural imperialism vs contra-flow', b: 'Cultural imperialism (Schiller, 1969): global media spread US values. Contra-flow (Thussu, 2007): media flowing outward from non-Western centres, though flows remain unequal.' },
      { n: 8, f: 'Digital divide', b: 'Unequal access to and skill with digital media.', src: MED },
    ]),
    ...sub(P2, 'stratification-and-differentiation-7192', '3.2.8', [
      { n: 1, f: 'What is Davis and Moore\'s (1945) functionalist theory of stratification?', b: 'Higher rewards attract the most talented to the most important roles. Tumin (1953) argued importance is hard to measure and stratification wastes talent.' },
      { n: 2, f: 'Marx vs Weber on class', b: 'Marx: two classes defined by ownership of the means of production, heading for polarisation. Weber: many classes based on market situation, with status and party as separate dimensions.' },
      { n: 3, f: 'Contradictory class location', b: 'Wright: positions, such as managers, that share features of two classes.', src: STR },
      { n: 4, f: 'What did Walby (1990) argue about patriarchy?', b: 'Patriarchy has six structures (e.g. paid work, the household, the state, violence) and has shifted from private patriarchy in the home to public patriarchy.' },
      { n: 5, f: 'Embourgeoisement vs proletarianisation', b: 'Embourgeoisement: affluent manual workers become middle class (little support in Goldthorpe and Lockwood\'s Affluent Worker study). Proletarianisation: routine white-collar workers are deskilled into the working class (Braverman, 1974).' },
      { n: 6, f: 'What did the Great British Class Survey (Savage et al., 2013) find?', b: 'Seven classes, from the elite to the precariat, based on economic, cultural and social capital. Its main online sample was self-selecting.' },
      { n: 7, f: 'Absolute vs relative mobility (Goldthorpe, 1980)', b: 'Absolute mobility (total movement between classes) rose, especially upward, but relative mobility (the chances of people from different origins) stayed unequal.' },
      { n: 8, f: 'Elite self-recruitment', b: 'Top positions filled from the same privileged group (Glass, 1954).' },
    ]),

    // 3.3 Crime and Deviance with Theory and Methods
    ...sub(P3, 'crime-and-deviance-7192', '3.3.1', [
      { n: 1, f: 'How does Durkheim see crime and deviance?', b: 'Some crime is inevitable and functional: it reinforces boundaries of acceptable behaviour, strengthens social solidarity when people react against it, and can bring social change.' },
      { n: 2, f: 'What is Merton\'s strain theory?', b: 'Crime results when people cannot reach society\'s cultural goals (e.g. wealth) through legitimate means, so they adapt, e.g. through innovation (illegitimate means to the same goals).' },
      { n: 3, f: 'What is labelling theory (Becker)?', b: 'Deviance is behaviour that people label as deviant. Labels can become a master status, leading to a self-fulfilling prophecy and secondary deviance.' },
      { n: 4, f: 'Why might official statistics show more crime among working-class and some minority ethnic groups?', b: 'Partly real patterns linked to deprivation and marginalisation, and partly policing practices such as stop and search and labelling, which make some groups more likely to be recorded.' },
      { n: 5, f: 'What is the chivalry thesis, and a criticism?', b: 'The claim that the criminal justice system treats women more leniently, so female crime is under-recorded. Feminists counter that women who break gender norms may be treated more harshly.' },
      { n: 6, f: 'Green crime vs state crime', b: 'Green crime: crime against the environment, which may not be illegal under national law. State crime: illegal or harmful acts by states or their agencies, such as genocide or torture, often linked to human rights.' },
      { n: 7, f: 'How can the media create a moral panic about crime?', b: 'Exaggerated, sensational coverage presents a group as "folk devils", causing public concern and stronger control, which can amplify the deviance (deviance amplification).' },
      { n: 8, f: 'Situational vs environmental vs social crime prevention', b: 'Situational: reducing opportunities, e.g. CCTV and locks (target hardening). Environmental: improving neighbourhoods, e.g. tackling disorder. Social: tackling root causes such as poverty and poor education.' },
    ]),
    ...sub(P3, 'theory-and-methods-3-3-2-7192', '3.3.2', [
      { n: 1, f: 'Positivism vs interpretivism', b: 'Positivism: sociology should be scientific, using quantitative methods to find objective social facts and causal laws. Interpretivism: sociology should understand meanings through qualitative methods (verstehen).' },
      { n: 2, f: 'What are social facts (Durkheim)?', b: 'Social phenomena that exist outside individuals and constrain their behaviour, such as norms and suicide rates, which can be studied objectively like things.' },
      { n: 3, f: 'Consensus vs conflict theories', b: 'Consensus (functionalism): society is based on shared values and works for the good of all. Conflict (Marxism, feminism): society is based on inequality and conflict between groups.' },
      { n: 4, f: 'Structural vs social action theories', b: 'Structural theories (functionalism, Marxism) see society shaping individuals from the top down. Social action theories (interactionism) see society built from the bottom up through individuals\' meanings and interactions.' },
      { n: 5, f: 'Modernity vs post-modernity', b: 'Modernity: industrial societies with nation states, science and rational progress, explained by grand theories. Post-modernity: fragmented, media-saturated, global societies where grand theories (metanarratives) lose credibility.' },
      { n: 6, f: 'Can sociology be scientific?', b: 'Positivists say yes, using the logic of the natural sciences. Interpretivists say no, because people act on meanings. Popper\'s falsification and Kuhn\'s paradigms also question what science is.' },
      { n: 7, f: 'What is value freedom, and why is it debated?', b: 'The idea that research should not be biased by the researcher\'s values. Critics argue values shape the choice of topic and interpretation, and some sociologists argue research should take sides.' },
      { n: 8, f: 'How can sociology relate to social policy?', b: 'Research can inform government policy (e.g. on poverty or education), but governments may ignore findings that conflict with their aims, and perspectives disagree on whether sociology should serve policy.' },
    ]),
  ],
};
