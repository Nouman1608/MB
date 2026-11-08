/**
 * D-444 -- flashcards for Cambridge O Level Sociology 2251 (2025-2027).
 *
 * One block per subtopic (the syllabus's key questions 1.1-6.3), in syllabus
 * order. Card ids are `<subtopic number>-<n>` and are permanent (browser
 * progress is keyed by them): add a new card with the next unused n, never
 * renumber.
 *
 * Written from Marlbridge's own 2251 revision notes and study guides, which
 * map to the two papers rather than to key questions, so every card is
 * authored. Where those pages are brief (identity, globalisation, attempts to
 * reduce inequality, measuring and punishing crime), cards follow the
 * syllabus's own content lists for that key question. The 2251 subject content
 * is word for word that of IGCSE 0495, so the two decks share most cards; 3.1
 * adds the class-inequality perspectives (Davis and Moore, Weber) that the 2251
 * revision notes cover. The syllabus names no sociologists; the few widely
 * taught names used here (e.g. Parsons, Young and Willmott, Merton) carry no
 * dates. Not tiered. Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string }

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b }) => ({
    id: `${number}-${n}`,
    topic,
    subtopic,
    front: f,
    back: b,
    origin: 'authored' as const,
  }));

const P1 = 'paper-1-research-methods-identity-inequality-2251';
const P2 = 'paper-2-family-education-crime-2251';

export const DECK_CAMBRIDGE_O_LEVEL_SOCIOLOGY: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'o-level',
  subjectSlug: 'sociology',
  syllabusCode: '2251',
  syllabusSeries: '2025-2027',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // Paper 1 – Research Methods, Identity and Inequality
    ...sub(P1, 'kq-1-1-2251', '1.1', [
      { n: 1, f: 'What is the positivist approach to studying society?', b: 'A scientific, macro approach that studies social facts using quantitative data, looking for patterns, trends and causes, and valuing objectivity and reliability.' },
      { n: 2, f: 'What is the interpretivist approach to studying society?', b: 'A micro approach that seeks to understand people\'s meanings and motivations through in-depth qualitative data, valuing validity and verstehen (empathetic understanding).' },
      { n: 3, f: 'Causation vs correlation', b: 'Correlation: two things are found together or change together. Causation: one thing actually causes the other. A correlation alone does not prove cause.' },
      { n: 4, f: 'What is triangulation?', b: 'Using more than one method or source of data to check the findings of one against another and increase confidence in the results.' },
      { n: 5, f: 'Interviewer effect vs Hawthorne (observer) effect', b: 'Interviewer effect: the interviewer\'s characteristics or behaviour influence the answers given. Hawthorne effect: people change their behaviour because they know they are being studied.' },
      { n: 6, f: 'Reliability vs validity', b: 'Reliability: repeating the study would give the same results. Validity: the research gives a true and accurate picture. Quantitative methods are strong on reliability, qualitative methods on validity.' },
    ]),
    ...sub(P1, 'kq-1-2-2251', '1.2', [
      { n: 1, f: 'Primary vs secondary data', b: 'Primary data are collected by the researcher for their own study. Secondary data already exist, collected by someone else.' },
      { n: 2, f: 'Quantitative vs qualitative data', b: 'Quantitative data are numerical, such as statistics. Qualitative data are descriptive, in words or images, such as interview transcripts or diaries.' },
      { n: 3, f: 'Official statistics: one strength and one limitation', b: 'Strength: cheap, large-scale and comparable over time. Limitation: socially constructed by the state, so they may not measure what the researcher wants and can hide unrecorded cases.' },
      { n: 4, f: 'Personal documents: one strength and one limitation', b: 'Examples are diaries and letters. Strength: rich, valid insight into people\'s feelings and meanings. Limitation: may be unrepresentative, hard to verify, or written with an audience in mind.' },
      { n: 5, f: 'Digital sources and media content: one strength and one limitation', b: 'Examples are social media posts, websites and news reports. Strength: easy to access and up to date. Limitation: may be biased, inaccurate or deliberately misleading.' },
    ]),
    ...sub(P1, 'kq-1-3-2251', '1.3', [
      { n: 1, f: 'What are the stages of research design?', b: 'Select a topic, set aims, form a hypothesis, identify the target population, choose methods, operationalise concepts, run a pilot study, then conduct the research and analyse results.' },
      { n: 2, f: 'What is a pilot study for?', b: 'A small-scale trial run of the research to find and fix problems with wording, timing or procedure before the main study.' },
      { n: 3, f: 'Random vs systematic vs stratified sampling', b: 'Random: everyone in the sampling frame has an equal chance. Systematic: every nth person on the list. Stratified: the sample reflects the proportions of groups in the population.' },
      { n: 4, f: 'Snowball vs quota sampling', b: 'Snowball: participants introduce the researcher to others, useful for hidden or hard-to-reach groups. Quota: the researcher fills set numbers of people in categories such as age or gender.' },
      { n: 5, f: 'Structured vs unstructured interviews', b: 'Structured: set questions in a set order; reliable and comparable but little depth. Unstructured: a guided conversation; valid and detailed but time-consuming and hard to compare.' },
      { n: 6, f: 'Covert vs overt participant observation', b: 'Covert: the group does not know they are being studied, so behaviour is natural, but it breaches informed consent. Overt: the group knows, which is ethical but risks the Hawthorne effect.' },
      { n: 7, f: 'Open vs closed vs scaled questions', b: 'Open: respondents answer in their own words (qualitative). Closed: fixed choices, such as yes/no or multiple choice (quantitative). Scaled: rating on a scale, e.g. strongly agree to strongly disagree.' },
      { n: 8, f: 'Name the ethical issues affecting research in the syllabus', b: 'Informed consent, privacy and confidentiality, deception, prevention of harm and legality.' },
    ]),
    ...sub(P1, 'kq-2-1-2251', '2.1', [
      { n: 1, f: 'Norms vs values', b: 'Norms are expected rules of behaviour in a situation. Values are beliefs about what is important and worth having.' },
      { n: 2, f: 'Ascribed vs achieved status', b: 'Ascribed status is fixed at birth, such as sex, caste or family. Achieved status is earned, such as an occupation or qualifications.' },
      { n: 3, f: 'What does the relativity of culture mean?', b: 'Norms and values differ between societies and change over time, so what is normal in one culture may be unusual in another. This supports the nurture side of the nature–nurture debate.' },
      { n: 4, f: 'Primary vs secondary socialisation', b: 'Primary socialisation happens in the family in early childhood. Secondary socialisation happens later through education, the peer group, media, religion and the workplace.' },
      { n: 5, f: 'What is canalisation?', b: 'Channelling children towards gender-appropriate toys and activities, e.g. dolls for girls and toy cars for boys, a process of gender socialisation in the family.' },
      { n: 6, f: 'How do functionalists, Marxists and feminists see socialisation?', b: 'Functionalists: it creates value consensus and social cohesion. Marxists: it passes on capitalist ideology and reproduces social class. Feminists: it socialises people into gender roles of masculinity and femininity.' },
    ]),
    ...sub(P1, 'kq-2-2-2251', '2.2', [
      { n: 1, f: 'Formal vs informal social control', b: 'Formal: written rules enforced by agencies such as the police, courts, penal system and armed forces. Informal: unwritten pressure from family, peers and others, such as disapproval, ridicule or exclusion.' },
      { n: 2, f: 'Positive vs negative sanctions', b: 'Positive sanctions reward conformity, e.g. praise, parental rewards or social media "likes". Negative sanctions punish deviance, e.g. ostracism, school punishments or dismissal from a job.' },
      { n: 3, f: 'Consensus vs conflict views of social control', b: 'Consensus (functionalist): social control maintains shared values and benefits everyone. Conflict (Marxist, feminist): it protects the interests of the powerful, such as the ruling class or men.' },
      { n: 4, f: 'Give two methods formal agencies use to achieve conformity', b: 'Law-making (and punishing those who break the law) and surveillance, including digital surveillance such as CCTV and monitoring of online activity.' },
      { n: 5, f: 'Why do some people join protest groups or sub-cultures?', b: 'To resist social control, express a shared identity, gain status and belonging, or challenge norms and policies they disagree with, e.g. youth, online or religious sub-cultures.' },
    ]),
    ...sub(P1, 'kq-2-3-2251', '2.3', [
      { n: 1, f: 'Name the key aspects of social identity in the syllabus', b: 'Age, gender, ethnicity and social class. Each affects how individuals see themselves and how they are treated in different societies.' },
      { n: 2, f: 'What is the digital self?', b: 'The identity a person presents online through social networks, social media and virtual communities. It can allow self-expression and belonging, but also pressure, harassment and a false image.' },
      { n: 3, f: 'Cultural defence vs hybrid identity vs homogenisation', b: 'Cultural defence: protecting a local identity against global influence. Hybrid identity: combining elements of different cultures. Homogenisation: identities around the world becoming more alike.' },
      { n: 4, f: 'How do postmodernists see identity?', b: 'As chosen rather than given: people "pick and mix" identities through consumption, lifestyle and digital identities, rather than having them fixed by class or tradition.' },
      { n: 5, f: 'Give one positive and one negative impact of global culture on identity', b: 'Positive: more choice and exposure to cultural diversity. Negative: local cultures and traditions may be weakened or lost.' },
    ]),
    ...sub(P1, 'kq-3-1-2251', '3.1', [
      { n: 1, f: 'Open vs closed society', b: 'An open society allows social mobility based on merit (achieved status). A closed society, such as a caste system, fixes position at birth (ascribed status).' },
      { n: 2, f: 'Absolute vs relative poverty', b: 'Absolute poverty: lacking the basic necessities for survival. Relative poverty: falling below the standard of living considered acceptable in that society, so it exists in wealthy countries too.' },
      { n: 3, f: 'Intergenerational vs intragenerational mobility', b: 'Intergenerational: comparing a person\'s class position with their parents\'. Intragenerational: movement during one person\'s own career.' },
      { n: 4, f: 'What are life chances?', b: 'A person\'s opportunities for good things in life, such as education, employment, health, housing and life expectancy. They are shaped by age, gender, ethnicity and social class.' },
      { n: 5, f: 'What is intersectionality?', b: 'The way age, ethnicity, gender and social class combine to shape a person\'s experience of inequality, so their effects cannot be understood separately.' },
      { n: 6, f: 'Master status vs self-fulfilling prophecy (labelling theory)', b: 'Master status: a label that overrides all other aspects of identity. Self-fulfilling prophecy: a person comes to act in line with the label given to them.' },
      { n: 7, f: 'What is the reserve army of labour (Marxism)?', b: 'A pool of unemployed or insecure workers, such as women or migrants, that can be hired when needed and dismissed when not, keeping wages low.' },
      { n: 8, f: 'How do Davis and Moore (functionalists) explain inequality?', b: 'Inequality is functional and inevitable: the most important roles need the greatest talent and longest training, so higher rewards act as an incentive to fill them.' },
      { n: 9, f: 'How do Weberians explain class inequality?', b: 'Class depends not only on property but on market situation (the skills and qualifications a person brings to the labour market), with status and party as separate dimensions of inequality.' },
      { n: 10, f: 'What is the cycle of deprivation?', b: 'Poverty reproducing itself: poor housing and diet lead to poor health and education, then low-paid work, then poverty in the next generation.' },
    ]),
    ...sub(P1, 'kq-3-2-2251', '3.2', [
      { n: 1, f: 'Give three examples of legislation used to reduce inequality', b: 'Progressive taxation (higher earners pay a larger share), a minimum wage and equal opportunities laws. Redistribution of wealth through benefits is another.' },
      { n: 2, f: 'How can a welfare state improve life chances?', b: 'By providing free or universal education, free health care, unemployment benefits and low-cost housing, so basic needs are met regardless of income.' },
      { n: 3, f: 'How do NGOs try to reduce global inequality?', b: 'By reducing poverty, providing medical assistance, promoting business (e.g. small loans) and improving education.' },
      { n: 4, f: 'What is the New Right criticism of the welfare state?', b: 'Generous benefits create a dependency culture and an underclass who rely on the state rather than work.' },
      { n: 5, f: 'Marxist vs feminist criticisms of attempts to reduce inequality', b: 'Marxist: the welfare state only softens capitalism, keeping workers healthy and quiet without ending exploitation. Feminist: equality laws have not ended unequal pay and the glass ceiling.' },
    ]),
    ...sub(P1, 'kq-3-3-2251', '3.3', [
      { n: 1, f: 'Push vs pull factors in migration', b: 'Push factors drive people away from a place, e.g. poverty, war or persecution. Pull factors attract them elsewhere, e.g. jobs, higher wages or safety.' },
      { n: 2, f: 'Give a positive and a negative impact of migration on societies', b: 'Positive: increasing cultural diversity and economic benefits such as filling labour shortages. Negative: pressure on resources and negative perceptions of migrants.' },
      { n: 3, f: 'How do transnational companies affect global inequality?', b: 'They bring jobs and investment to poorer countries, but may pay low wages, take profits abroad and cause environmental damage.' },
      { n: 4, f: 'How does climate change affect global inequality?', b: 'Poorer countries often suffer most from floods, droughts and food shortages while having contributed least to the problem and having fewer resources to adapt.' },
      { n: 5, f: 'Marxist vs feminist explanations of global inequality', b: 'Marxist: capitalist exploitation, with richer countries and companies profiting from poorer countries\' labour and resources. Feminist: patriarchy disadvantages women worldwide.' },
    ]),

    // Paper 2 – Family, Education and Crime
    ...sub(P2, 'kq-4-1-2251', '4.1', [
      { n: 1, f: 'Horizontal vs vertical (beanpole) extended family', b: 'Horizontal: extended sideways to include aunts, uncles and cousins. Vertical (beanpole): several generations alive at once, with few relatives in each generation.' },
      { n: 2, f: 'What is a modified extended family?', b: 'Relatives live apart but keep in close contact and support each other, e.g. by phone, visits and help with childcare.' },
      { n: 3, f: 'What is an empty nest family?', b: 'A couple whose children have grown up and left home.' },
      { n: 4, f: 'New Right vs postmodernist views on family diversity', b: 'New Right: diversity is a sign of dysfunction, and the traditional nuclear family is best. Postmodernist: diversity is positive, reflecting individual choice.' },
      { n: 5, f: 'Name three alternatives to the family', b: 'Single person households, shared households, and friends as family.' },
      { n: 6, f: 'Empty shell marriage vs serial monogamy', b: 'Empty shell marriage: the couple stay married but the relationship has ended emotionally. Serial monogamy: a series of marriages or partnerships, one after another.' },
    ]),
    ...sub(P2, 'kq-4-2-2251', '4.2', [
      { n: 1, f: 'What is the "warm bath" theory?', b: 'A functionalist idea (Parsons) that the family stabilises adult personalities, relieving the stress of working life like a warm bath.' },
      { n: 2, f: 'What is the "loss of functions" debate?', b: 'The view that the family has lost functions such as education and health care to specialist institutions, against the view that it still performs key functions such as socialisation and emotional support.' },
      { n: 3, f: 'How do Marxists see the family?', b: 'The family benefits capitalism: it reproduces class inequalities, passes on ideology, and acts as a unit of consumption that buys goods and so creates profit.' },
      { n: 4, f: 'Joint vs segregated conjugal roles', b: 'Joint: partners share housework, childcare and decisions. Segregated: partners have separate roles, e.g. a male breadwinner and a female homemaker.' },
      { n: 5, f: 'Dual burden vs triple shift', b: 'Dual burden: women doing paid work plus most housework. Triple shift: paid work, housework and emotion work (caring for family members\' feelings).' },
      { n: 6, f: 'Give one strength and one limitation of the functionalist view of the family', b: 'Strength: shows how the family meets important needs of individuals and society. Limitation: ignores conflict, inequality and abuse within families, as feminists point out.' },
    ]),
    ...sub(P2, 'kq-4-3-2251', '4.3', [
      { n: 1, f: 'What is an ageing population, and what causes it?', b: 'A rising average age and a growing share of older people, caused by falling birth rates and rising life expectancy.' },
      { n: 2, f: 'How did industrialisation change family structure?', b: 'It is often argued that industrialisation and urbanisation encouraged smaller, geographically mobile nuclear families, replacing the extended family as the main unit.' },
      { n: 3, f: 'Give two reasons for rising divorce rates', b: 'Changes in societal attitudes (less stigma) and the changing status and power of women, who are more financially independent and less willing to stay in unhappy marriages.' },
      { n: 4, f: 'What is the symmetrical family?', b: 'A family in which partners\' roles are similar, both doing paid work and sharing housework and childcare (Young and Willmott). Feminists argue full symmetry is rare.' },
      { n: 5, f: 'What is the pivot (sandwich) generation?', b: 'Middle-aged adults who care for both their own children and their ageing parents at the same time.' },
      { n: 6, f: 'What are boomerang children?', b: 'Adult children who return to live with their parents, e.g. because of housing costs or after university.' },
    ]),
    ...sub(P2, 'kq-5-1-2251', '5.1', [
      { n: 1, f: 'Formal vs informal education', b: 'Formal education is planned, structured learning in schools and colleges, with a curriculum and tests. Informal education is learning outside institutions, e.g. from family, peers and the media.' },
      { n: 2, f: 'Official curriculum vs hidden curriculum', b: 'The official curriculum is the planned subjects, syllabus content and testing. The hidden curriculum is the norms and values taught without being named as lessons, e.g. punctuality, conformity and gender roles.' },
      { n: 3, f: 'Give one strength and one limitation of private schools', b: 'Strength: often smaller classes and better resources. Limitation: access depends on parents\' ability to pay, so they can reproduce class inequality.' },
      { n: 4, f: 'Selective vs non-selective schools', b: 'Selective schools choose pupils by ability, e.g. an entrance exam. Non-selective (comprehensive) schools take pupils of all abilities from their area.' },
      { n: 5, f: 'Name three alternative approaches to education', b: 'Online learning, vocational learning (job-related skills) and progressive schooling (child-centred, with more pupil choice).' },
    ]),
    ...sub(P2, 'kq-5-2-2251', '5.2', [
      { n: 1, f: 'What roles does education perform for functionalists?', b: 'Socialisation (passing on shared values), social control, economic (training a skilled workforce) and selective (role allocation, sorting people into suitable jobs by merit).' },
      { n: 2, f: 'What is meritocracy?', b: 'A system in which rewards and positions are based on ability and effort rather than background. Functionalists believe education is meritocratic; Marxists call this a myth.' },
      { n: 3, f: 'How do Marxists see the role of education?', b: 'It reproduces class inequality: it passes on capitalist ideology, rewards middle-class culture and cultural capital, and persuades pupils that failure is their own fault (the myth of meritocracy).' },
      { n: 4, f: 'What is cultural capital?', b: 'The knowledge, language, tastes and attitudes of the middle class, which schools value and reward, giving middle-class pupils an advantage.' },
      { n: 5, f: 'How do feminists see the role of education?', b: 'It perpetuates gender inequality through a patriarchal culture, gendered subject choices, teacher expectations and a lack of female role models in senior positions.' },
    ]),
    ...sub(P2, 'kq-5-3-2251', '5.3', [
      { n: 1, f: 'Give a material explanation of class differences in achievement', b: 'Poorer families may lack money for resources, a quiet place to study and access to digital technology, which disadvantages their children.' },
      { n: 2, f: 'How does labelling explain differences in achievement?', b: 'Teachers may label pupils (often working-class or minority ethnic pupils) as less able; pupils may accept the label, leading to a self-fulfilling prophecy of lower achievement.' },
      { n: 3, f: 'Pro-school vs anti-school sub-cultures', b: 'Pro-school sub-cultures value education and gain status through success. Anti-school sub-cultures reject school values and gain status through rule-breaking, often after being placed in low sets.' },
      { n: 4, f: 'Institutional racism vs ethnocentric curriculum', b: 'Institutional racism: discrimination built into the school\'s routines, such as setting and exclusions. Ethnocentric curriculum: one that gives priority to one culture, so some pupils feel excluded.' },
      { n: 5, f: 'Give two reasons for global differences in educational achievement', b: 'Availability of schools and poverty, as well as access to education for girls, class sizes, cultural norms and access to the internet.' },
      { n: 6, f: 'What is compensatory education?', b: 'Extra resources or programmes for disadvantaged children to make up for disadvantages outside school, e.g. pre-school schemes.' },
    ]),
    ...sub(P2, 'kq-6-1-2251', '6.1', [
      { n: 1, f: 'Crime vs deviance', b: 'Crime is behaviour that breaks the law. Deviance is behaviour that breaks social norms. They overlap but are not the same: some deviance is not criminal.' },
      { n: 2, f: 'What is the relativity of crime and deviance?', b: 'What counts as crime or deviance varies within and between societies, cultures and situations, and over time.' },
      { n: 3, f: 'Formal vs informal agencies of social control', b: 'Formal: the police, courts, armed forces, government and penal system. Informal: family, education, workplace, peer group, traditional and digital media, and religion.' },
      { n: 4, f: 'White-collar vs green vs hate crime', b: 'White-collar/corporate crime: committed by people in their jobs or by companies, e.g. fraud. Green crime: harm to the environment. Hate crime: targeting victims because of their identity, e.g. race or religion.' },
      { n: 5, f: 'Expressive vs instrumental crime', b: 'Expressive crime is driven by emotion, e.g. vandalism or violence. Instrumental crime aims at a material gain, e.g. theft or fraud.' },
      { n: 6, f: 'Official statistics vs victim surveys vs self-report studies', b: 'Official statistics: crimes recorded by the police. Victim surveys: ask people about crimes committed against them. Self-report studies: ask people about crimes they have committed. Surveys reveal unreported crime.' },
      { n: 7, f: 'Why is some crime unreported or unrecorded?', b: 'Victims may be unaware, afraid, ashamed or think the police will not act; the police may decide an incident is too minor or not a crime. This "dark figure" makes official statistics incomplete.' },
    ]),
    ...sub(P2, 'kq-6-2-2251', '6.2', [
      { n: 1, f: 'What is status frustration?', b: 'Young people, especially working-class boys, who cannot gain status through legitimate means such as school success form sub-cultures that give status through deviance (Cohen).' },
      { n: 2, f: 'What is the chivalry thesis?', b: 'The claim that the mostly male criminal justice system treats women more leniently, so female crime is under-recorded.' },
      { n: 3, f: 'Material vs relative deprivation', b: 'Material deprivation: lacking money and basic resources. Relative deprivation: feeling deprived compared with others in society, which may lead to crime even when not absolutely poor.' },
      { n: 4, f: 'What is strain theory?', b: 'A functionalist theory (Merton): crime happens when people cannot reach society\'s goals, such as wealth, by legitimate means, so some turn to illegitimate means.' },
      { n: 5, f: 'What is a moral panic?', b: 'An exaggerated public reaction, often driven by the media, to a group seen as a threat to society\'s values (interactionist theory).' },
      { n: 6, f: 'How do Marxists explain crime?', b: 'Capitalism creates inequality, greed and deprivation that lead to crime; laws protect the ruling class, and the crimes of the poor are policed more than white-collar crimes of the rich.' },
    ]),
    ...sub(P2, 'kq-6-3-2251', '6.3', [
      { n: 1, f: 'Name the aims of punishment in the syllabus', b: 'Protection of citizens, deterrence, retribution, incapacitation and rehabilitation.' },
      { n: 2, f: 'Deterrence vs retribution vs rehabilitation', b: 'Deterrence: punishment discourages the offender and others from crime. Retribution: the offender gets what they deserve. Rehabilitation: reforming the offender so they do not reoffend.' },
      { n: 3, f: 'Give one strength and one limitation of prison', b: 'Strength: incapacitates offenders, protecting the public. Limitation: high reoffending rates; prison can act as a "school for crime" and is costly.' },
      { n: 4, f: 'Give three examples of non-custodial sentences', b: 'Electronic tagging, curfews and restraining orders, as well as community sentences, fines and probation.' },
      { n: 5, f: 'Community policing vs military-style policing', b: 'Community policing builds trust and cooperation with local people to prevent crime. Military-style policing uses force, weapons and tactics like an army, which may harm relations with the public.' },
    ]),
  ],
};
