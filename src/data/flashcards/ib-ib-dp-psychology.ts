/**
 * Flashcards for IB Diploma Programme Psychology (first assessment 2027).
 *
 * The syllabus record lists fourteen topics and no subtopics: Concepts; the
 * biological, cognitive and sociocultural approaches and research methodology
 * (content); health and well-being, human development, human relationships and
 * learning and cognition (contexts); class practicals; and the four HL
 * extensions (culture, motivation, technology, data analysis and
 * interpretation). Every card sits on its topic (topicOnly helper). Card ids
 * are `<topic number>-<n>` and are permanent (browser progress is keyed by
 * them): add a new card with the next unused n, never renumber.
 *
 * The deck was first written for the 2019 course. Cards whose content is still
 * in the 2027 guide were kept, with their wording unchanged, and re-filed under
 * the 2027 topics (idMigration below carries saved progress to the new ids).
 * Two cards were corrected where one fact had changed. Cards for content the
 * 2027 course no longer has (the Abnormal psychology classification and
 * diagnosis studies, bystanderism, stereotypes and the 2019 paper and internal
 * assessment descriptions) were removed. The remaining cards are new and
 * authored from the 2027 guide's Syllabus content section.
 *
 *   The syllabus record is not tiered, so no card carries a tier. HL-only
 *   content (the culture, motivation and technology extensions) is marked in
 *   words: the card back ends "(HL only)". Data analysis and interpretation is
 *   studied at SL and HL but assessed only at HL, so its cards are not marked.
 *
 * No card is sourced from a revision-notes page, so every card is authored.
 * Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; src?: string }

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

export const DECK_IB_IB_DP_PSYCHOLOGY: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-dp',
  subjectSlug: 'psychology',
  deckReview: { reviewerSlug: 'kanwal-aslam', reviewedOn: '2026-11-20' },
  syllabusCode: 'DP Psychology (2027)',
  syllabusSeries: 'First assessment 2027',
  author: 'marlbridge-academic-team',
  updated: '2026-11-20',
  // Old (first assessment 2019) card ids to their new ids, matched by front.
  // An old id that is not listed belonged to a removed card.
  idMigration: {
    id: 'psychology-2027-2026-11-20',
    before: '2026-11-20',
    map: {
      '1-2': '2-1',
      '1-3': '2-2',
      '1-4': '2-3',
      '1-5': '2-4',
      '1-6': '2-5',
      '1-7': '2-6',
      '1-8': '2-7',
      '1-9': '2-8',
      '1-10': '2-9',
      '5-7': '2-10',
      '2-1': '3-1',
      '2-2': '3-2',
      '2-3': '3-3',
      '2-4': '3-4',
      '2-5': '3-5',
      '2-8': '3-6',
      '3-1': '4-1',
      '3-2': '4-2',
      '3-3': '4-3',
      '3-4': '4-4',
      '3-7': '4-5',
      '3-8': '4-6',
      '3-9': '4-7',
      '3-10': '4-8',
      '3-11': '4-9',
      '4-1': '5-1',
      '4-2': '5-2',
      '4-3': '5-3',
      '4-4': '5-4',
      '4-5': '5-5',
      '4-6': '5-6',
      '4-8': '5-7',
      '4-9': '5-8',
      '4-10': '5-9',
      '7-1': '6-1',
      '7-2': '6-2',
      '7-3': '6-3',
      '7-4': '6-4',
      '7-5': '6-5',
      '7-6': '6-6',
      '7-7': '6-7',
      '7-8': '6-8',
      '7-9': '6-9',
      '5-5': '6-10',
      '5-6': '6-11',
      '5-8': '6-12',
      '5-9': '6-13',
      '6-1': '7-1',
      '6-2': '7-2',
      '6-3': '7-3',
      '6-4': '7-4',
      '6-5': '7-5',
      '6-6': '7-6',
      '6-7': '7-7',
      '6-8': '7-8',
      '6-9': '7-9',
      '8-1': '8-1',
      '8-2': '8-2',
      '8-3': '8-3',
      '8-4': '8-4',
      '8-6': '8-5',
      '2-6': '9-1',
      '2-7': '9-2',
      '2-9': '9-3',
    },
  },
  cards: [
    // 1 Concepts
    ...topicOnly('ib-dp-psychology-2027-concepts', '1', [
      { n: 1, f: 'What are the six concepts of IB Psychology?', b: 'Bias, causality, change, measurement, perspective and responsibility. They link content and contexts, and it is recommended that three to four relevant concepts be selected when studying each context.' },
      { n: 2, f: 'Name the types of bias that psychologists must control for in research.', b: 'Researcher bias, participant bias, sampling bias, confirmation bias and publication bias. Recognising a bias is not enough: explain how it may affect the results and how it is controlled.' },
      { n: 3, f: 'What does the concept of causality ask?', b: 'How we can know the causes of observed behaviour. Behaviour is complex, so causes are often several interacting variables, and only well-controlled experiments can support cause-and-effect claims.' },
      { n: 4, f: 'What does the concept of change cover in psychology?', b: 'How behaviour changes, gradually as in development or suddenly as in mood, planned or unplanned. It includes theories of promoting change, barriers to change and the effectiveness of interventions and treatments.' },
      { n: 5, f: 'What is operationalisation, and which concept does it relate to?', b: 'Defining a variable in observable, measurable terms so that it can be measured reliably and validly. It belongs to the concept of measurement. Triangulating several methods helps establish the credibility of findings.' },
      { n: 6, f: 'What does the concept of perspective mean in psychology?', b: 'No single approach explains behaviour on its own. The biological, cognitive and sociocultural approaches each rest on assumptions about behaviour; emic and etic approaches and reductionism versus holism are related terms.' },
      { n: 7, f: 'What does responsibility involve for psychologists?', b: 'Treating participants with respect through ethical standards such as informed consent, anonymity and protection from harm, reducing, refining and replacing animal use, and taking responsibility for how findings are applied, for example by avoiding stigma.' },
      { n: 8, f: 'Name three ways in which ethical standards can affect research results.', b: 'Informed consent can introduce participant variables, the right to withdraw can lead to sampling bias, and anonymity can increase the validity of self-reported data.' },
    ]),

    // 2 Content: Biological approach
    ...topicOnly('ib-dp-psychology-2027-biological-approach', '2', [
      { n: 1, f: 'What did Maguire et al. (2000) find about London taxi drivers?', b: 'Structural MRI showed taxi drivers had larger posterior hippocampi than controls, correlated with years of driving: evidence for the hippocampus’s role in spatial memory and for neuroplasticity.' },
      { n: 2, f: 'What is the main limitation of Maguire et al. (2000)?', b: 'It is correlational, so it cannot rule out that people with naturally larger posterior hippocampi are more likely to become and stay taxi drivers.' },
      { n: 3, f: 'What did the case of H.M. show about memory?', b: 'After surgery removed much of both hippocampi to treat epilepsy (1953), H.M. could not form new long-term memories (anterograde amnesia) but kept older memories and could learn new motor skills, suggesting memory systems are partly localised.' },
      { n: 4, f: 'How should you explain a neurotransmitter’s role in behaviour?', b: 'As a two-part claim: what the chemical does physiologically at the synapse, then which specific behaviour that mechanism is proposed to explain. Naming the neurotransmitter alone is not enough.' },
      { n: 5, f: 'Hormone vs pheromone', b: 'Hormone: a chemical messenger released by an endocrine gland into the bloodstream that acts within the same body, such as cortisol in the stress response.\nPheromone: a chemical signal released by one individual that affects another of the same species.' },
      { n: 6, f: 'Do humans have pheromones that affect behaviour?', b: 'It is contested. Candidates such as androstadienone have been studied, but no human pheromone has been conclusively identified, and expectation or context may explain apparent effects.' },
      { n: 7, f: 'How do twin studies estimate a genetic contribution to behaviour?', b: 'They compare concordance rates for a trait between identical (monozygotic) twins, who share all their genes, and non-identical (dizygotic) twins, who share about half. Higher MZ concordance suggests a genetic contribution.' },
      { n: 8, f: 'What did Caspi et al. (2003) find?', b: 'People with one or two short versions of the 5-HTT (serotonin transporter) gene were more likely to become depressed, but only after stressful life events: a gene-environment interaction. Later studies, such as Risch et al. (2009), failed to replicate it, so it is disputed.' },
      { n: 9, f: 'What are the value and limits of animal research for understanding human behaviour?', b: 'Value: controlled tests not possible on humans, and many biological systems are shared across mammals.\nLimits: species differences limit generalisation, and harm to animals raises ethical questions judged by the 3Rs (replacement, reduction, refinement).' },
      { n: 10, f: 'What is the diathesis-stress model?', b: 'The view that a disorder develops when a vulnerability (diathesis), such as a genetic predisposition, combines with stress, such as stressful life events.' },
      { n: 11, f: 'What does a brain imaging technique such as fMRI show?', b: 'Functional MRI measures changes in blood oxygenation as a sign of which brain areas are active during a task. It is non-invasive, but the measure is indirect and it cannot show cause and effect on its own.' },
      { n: 12, f: 'What is biological reductionism?', b: 'Explaining complex behaviour only through simple biological parts such as genes, hormones or brain areas. It allows precise testing, but it can ignore cognitive, social and cultural influences on the same behaviour.' },
      { n: 13, f: 'What is neuroplasticity?', b: 'The brain’s ability to change its structure and connections in response to experience, learning or injury. It shows that brain development is shaped by the environment as well as by genes.' },
    ]),

    // 3 Content: Cognitive approach
    ...topicOnly('ib-dp-psychology-2027-cognitive-approach', '3', [
      { n: 1, f: 'What does the cognitive approach study?', b: 'How mental processes such as memory, perception, thinking and decision-making shape behaviour, often using information-processing models (input, processing, storage, output) of activity that cannot be directly observed.' },
      { n: 2, f: 'What is the multi-store model of memory?', b: 'Atkinson and Shiffrin’s model: information passes from sensory memory to short-term memory with attention, and to long-term memory with rehearsal. The stores differ in capacity and duration.' },
      { n: 3, f: 'What did Glanzer and Cunitz (1966) show about the serial position effect?', b: 'When recall of a word list was delayed, the recency effect disappeared but the primacy effect remained, supporting separate short-term and long-term stores.' },
      { n: 4, f: 'How does the working memory model differ from the multi-store model?', b: 'Baddeley and Hitch (1974) split short-term memory into a central executive that controls attention, a phonological loop for sound and a visuospatial sketchpad for images, which can work at the same time.' },
      { n: 5, f: 'What is reconstructive memory?', b: 'The idea that memory is an active reconstruction shaped by existing schemas and later information, not an accurate recording of the original event.' },
      { n: 6, f: 'What did Bartlett’s "War of the Ghosts" study (1932) show?', b: 'British participants’ repeated recall of an unfamiliar Native American folk story grew shorter and was distorted towards their own cultural expectations, supporting schema theory and reconstructive memory.' },
      { n: 7, f: 'What is classical conditioning?', b: 'Learning by association: a neutral stimulus paired repeatedly with an unconditioned stimulus comes to trigger a conditioned response. In Pavlov’s dogs, a bell paired with food came to make the dogs salivate.' },
      { n: 8, f: 'What is operant conditioning?', b: 'Learning through consequences: behaviour followed by reinforcement becomes more likely and behaviour followed by punishment less likely. Skinner showed this with rats pressing a lever to receive food.' },
      { n: 9, f: 'What is the dual processing model of thinking?', b: 'Thinking uses two systems: a fast, automatic, intuitive one and a slower, effortful, deliberate one. Kahneman called them System 1 and System 2. Quick intuitive thinking can produce cognitive biases.' },
      { n: 10, f: 'What is anchoring bias?', b: 'Relying too heavily on the first piece of information met, the anchor, when making a later judgement. Tversky and Kahneman (1974) showed that an arbitrary number changed people’s estimates of an unrelated quantity.' },
      { n: 11, f: 'What is cognitive load theory?', b: 'Sweller’s theory that working memory is limited, so learning suffers when a task overloads it. Good instruction reduces unnecessary load so that mental effort goes into understanding the material.' },
      { n: 12, f: 'What is confirmation bias?', b: 'The tendency to look for, notice and remember information that supports what we already believe and to discount evidence against it. It affects everyday decisions and researchers’ interpretation of results.' },
    ]),

    // 4 Content: Sociocultural approach
    ...topicOnly('ib-dp-psychology-2027-sociocultural-approach', '4', [
      { n: 1, f: 'What are the three processes of social identity theory?', b: 'Social categorisation (sorting people into groups), social identification (adopting the group’s identity) and social comparison (comparing the in-group with out-groups). Tajfel and Turner proposed the theory.' },
      { n: 2, f: 'What did the minimal group paradigm (Tajfel et al., 1971) show?', b: 'Schoolboys divided into groups on trivial grounds gave more points to their own group, suggesting that mere categorisation is enough to produce in-group bias.' },
      { n: 3, f: 'What did Bandura, Ross and Ross (1961) find in the Bobo doll study?', b: 'Children who watched an adult behave aggressively towards an inflatable doll were more likely to act aggressively towards it than those who saw a non-aggressive model; boys imitated aggression more than girls.' },
      { n: 4, f: 'What are the four processes of observational learning in social cognitive theory?', b: 'Attention, retention, reproduction and motivation, with motivation shaped by reinforcement, including vicarious reinforcement. Self-efficacy and reciprocal determinism also affect learning.' },
      { n: 5, f: 'Individualism vs collectivism', b: 'Individualist cultures: people see themselves as independent and prioritise personal goals.\nCollectivist cultures: people see themselves as part of a group and prioritise group goals. It is one of Hofstede’s cultural dimensions.' },
      { n: 6, f: 'What did Cohen and Nisbett (1996) find about the culture of honour?', b: 'White male students from the southern United States reacted more strongly to an insult than northerners, showing how cultural norms can shape emotion and aggression.' },
      { n: 7, f: 'Enculturation vs acculturation', b: 'Enculturation: learning the norms and values of one’s own culture.\nAcculturation: change that happens when people from different cultures are in continuous contact.' },
      { n: 8, f: 'What are Berry’s four acculturation strategies?', b: 'Integration (keep own culture and join the new one), assimilation (adopt the new, give up the old), separation (keep the old, avoid the new) and marginalisation (neither).' },
      { n: 9, f: 'Emic vs etic approach', b: 'Emic: studies a culture from within, using its own concepts.\nEtic: applies concepts from outside, often Western ones, across cultures, risking cultural bias.' },
      { n: 10, f: 'What did Asch (1951) find about conformity?', b: 'Participants judged line lengths after confederates gave obviously wrong answers. About 75% conformed at least once, and about a third of all responses were wrong. Conformity fell when one confederate disagreed.' },
      { n: 11, f: 'Name one compliance technique and explain how it works.', b: 'Foot-in-the-door: agreeing to a small request makes people more likely to agree to a larger one later. Freedman and Fraser (1966) used it to persuade householders to display a large road safety sign.' },
      { n: 12, f: 'What is cognitive dissonance?', b: 'The discomfort felt when two beliefs, or a belief and a behaviour, conflict, which people reduce by changing one of them. Festinger and Carlsmith (1959): people paid $1 to lie rated a dull task as more enjoyable than those paid $20.' },
      { n: 13, f: 'What are Hofstede’s cultural dimensions?', b: 'Power distance, individualism versus collectivism, masculinity versus femininity, uncertainty avoidance, long-term versus short-term orientation, and indulgence versus restraint. They compare cultures but describe averages, not every individual.' },
    ]),

    // 5 Content: Research methodology
    ...topicOnly('ib-dp-psychology-2027-research-methodology', '5', [
      { n: 1, f: 'True experiment vs quasi-experiment', b: 'True experiment: participants are randomly allocated to conditions of a manipulated IV, giving the strongest evidence of cause and effect.\nQuasi-experiment: the IV is a characteristic participants already have, such as age or gender, so random allocation is impossible.' },
      { n: 2, f: 'Field experiment vs natural experiment', b: 'Field experiment: the researcher manipulates the IV in a natural setting.\nNatural experiment: the IV changes naturally, such as a policy change, and the researcher does not control it.' },
      { n: 3, f: 'Independent samples vs repeated measures design', b: 'Independent samples: different people in each condition; no order effects, but participant variables differ.\nRepeated measures: the same people in every condition; controls participant variables, but practice and fatigue effects occur, reduced by counterbalancing.' },
      { n: 4, f: 'Why does a correlation not prove causation?', b: 'A third variable may cause both, or the direction of the relationship may be the reverse of what is assumed.' },
      { n: 5, f: 'Name the main qualitative research methods', b: 'Observation (naturalistic or controlled, participant or non-participant, overt or covert), interviews (structured or semi-structured), focus groups and case studies.' },
      { n: 6, f: 'Random vs opportunity sampling', b: 'Random: everyone in the target population has an equal chance of selection, which reduces bias but is hard to achieve.\nOpportunity: whoever is available, which is quick but may not be representative.' },
      { n: 7, f: 'What are the key ethical principles in psychological research?', b: 'Informed consent, protection from harm, confidentiality, the right to withdraw, debriefing after the study and avoiding unjustified deception. Children need parental consent as well as their own assent.' },
      { n: 8, f: 'Internal validity vs external validity vs ecological validity', b: 'Internal: the IV really caused the change in the DV.\nExternal: the findings apply beyond the study to other people, settings and times.\nEcological: the setting and task are realistic.' },
      { n: 9, f: 'What are credibility, transferability and triangulation in qualitative research?', b: 'Credibility: the qualitative equivalent of validity.\nTransferability: the equivalent of generalisation.\nTriangulation: using several methods, researchers or data sources to strengthen credibility.' },
      { n: 10, f: 'Stratified vs self-selected sampling', b: 'Stratified: the population is divided into subgroups, such as age or gender, and people are chosen from each in proportion, giving a representative sample.\nSelf-selected: participants volunteer, for example by answering an advert; easy, but volunteers may be unrepresentative.' },
      { n: 11, f: 'What is snowball sampling and when is it used?', b: 'Existing participants recruit further participants from their contacts. It suits hard-to-reach groups, but the sample may be biased because people tend to recruit others like themselves.' },
      { n: 12, f: 'What are the strengths and limitations of surveys and questionnaires?', b: 'Strengths: many responses can be collected quickly and cheaply, with few ethical issues. Limitations: self-report is open to social desirability and demand characteristics, and closed questions limit depth.' },
      { n: 13, f: 'What is a case study?', b: 'An in-depth investigation of one person, group or event, often using several methods over time. It gives rich detail, but the findings may not generalise and the researcher may be biased.' },
      { n: 14, f: 'Naturalistic vs controlled observation, and overt vs covert observation', b: 'Naturalistic: behaviour is observed in its natural setting. Controlled: it is observed in a set-up situation.\nOvert: participants know they are observed. Covert: they do not, which avoids changed behaviour but raises consent issues.' },
    ]),

    // 6 Context: Health and well-being
    ...topicOnly('ib-dp-psychology-2027-health-and-well-being', '6', [
      { n: 1, f: 'What are the biological, cognitive and sociocultural determinants of health?', b: 'Biological: genes, hormones and the stress response.\nCognitive: beliefs about illness, perceived control, optimism and self-efficacy.\nSociocultural: income, education, social support, culture and environment. Show how they interact.' },
      { n: 2, f: 'What did the Whitehall studies show?', b: 'A social gradient in health among British civil servants: death and illness rates were higher in lower employment grades, even though all had stable jobs.' },
      { n: 3, f: 'What are the stages of Selye’s general adaptation syndrome?', b: 'Alarm, resistance and exhaustion. Prolonged activation of the stress response is linked with a higher risk of illness.' },
      { n: 4, f: 'Primary vs secondary appraisal in Lazarus and Folkman’s transactional model', b: 'Primary appraisal: judging whether an event is a threat, a harm or a challenge.\nSecondary appraisal: judging whether you have the resources to cope.' },
      { n: 5, f: 'What is a criticism of Holmes and Rahe’s life-events scale?', b: 'It treats everyone alike and ignores appraisal, assuming that change itself, rather than its meaning to the person, is stressful.' },
      { n: 6, f: 'Problem-focused vs emotion-focused coping', b: 'Problem-focused: tackles the source of stress.\nEmotion-focused: manages the feelings it produces. Which works best depends on whether the situation can be changed.' },
      { n: 7, f: 'What are the five components of the health belief model?', b: 'Perceived susceptibility, perceived severity, perceived benefits, perceived barriers and cues to action.' },
      { n: 8, f: 'What does the theory of planned behaviour add to attitudes?', b: 'Subjective norms and perceived behavioural control, which together with attitude shape intention. Its weakness is the gap between intending and doing.' },
      { n: 9, f: 'What are Prochaska and DiClemente’s stages of change?', b: 'Precontemplation, contemplation, preparation, action and maintenance, with possible relapse. Interventions should match the person’s stage.' },
      { n: 10, f: 'What is Beck’s negative cognitive triad?', b: 'A negative view of the self, the world and the future, which Beck proposed as a cognitive explanation of depression, alongside negative schemas.' },
      { n: 11, f: 'What did Brown and Harris (1978) find about depression?', b: 'In a study of women in a London district, severe life events combined with vulnerability factors, such as lacking a close confiding relationship, were associated with depression.' },
      { n: 12, f: 'How are SSRIs thought to work, and what is a limitation?', b: 'They block the reuptake of serotonin, raising the level available at the synapse. Limitations: side effects, treating symptoms rather than causes, and meta-analyses such as Kirsch et al. (2008) finding only a small advantage over placebo except in severe depression.' },
      { n: 13, f: 'What is cognitive behavioural therapy (CBT)?', b: 'A psychological treatment that helps people identify and change unhelpful thoughts and behaviours. It has evidence of benefit for depression and anxiety but needs motivation and time.' },
      { n: 14, f: 'How is personal well-being different from physical and mental health?', b: 'Health can to some extent be measured objectively. Personal well-being is a self-reported state of a pleasant and satisfying quality of life: subjective, but equally valid for the individual.' },
      { n: 15, f: 'Why is health studied holistically in psychology?', b: 'Mental and physical health are linked through mind-body interaction, so separating them is artificial. Studying them together shows how biology, thinking and the social environment affect health.' },
    ]),

    // 7 Context: Human development
    ...topicOnly('ib-dp-psychology-2027-human-development', '7', [
      { n: 1, f: 'Assimilation vs accommodation in Piaget’s theory', b: 'Assimilation: fitting new information into an existing schema.\nAccommodation: changing the schema when new information does not fit. Equilibrium is the balance that drives learning.' },
      { n: 2, f: 'What are Piaget’s four stages of cognitive development?', b: 'Sensorimotor (0-2: object permanence), preoperational (2-7: symbolic thought, egocentrism), concrete operational (7-11: conservation, logic about concrete objects) and formal operational (11+: abstract thought).' },
      { n: 3, f: 'What is the zone of proximal development?', b: 'Vygotsky’s term for the gap between what a child can do alone and what they can do with help from a more knowledgeable other. Scaffolding (Wood, Bruner and Ross, 1976) is support that is reduced as the child becomes competent.' },
      { n: 4, f: 'What did Harlow (1958) find with infant rhesus monkeys?', b: 'They preferred a cloth-covered surrogate mother to a wire one that gave milk, showing the importance of contact comfort. The study raises serious animal-ethics issues and generalising to human infants is limited.' },
      { n: 5, f: 'What is the Strange Situation?', b: 'Ainsworth’s laboratory procedure of brief separations and reunions, used to classify attachment as secure, insecure-avoidant or insecure-resistant. Critics say it is culturally specific.' },
      { n: 6, f: 'What is an internal working model?', b: 'Bowlby’s idea that early attachment experience forms a mental model of relationships that guides later ones.' },
      { n: 7, f: 'What are Kohlberg’s three levels of moral reasoning?', b: 'Pre-conventional (judging by punishment and reward), conventional (by social rules and expectations) and post-conventional (by principles). He studied reasoning about dilemmas such as the Heinz dilemma.' },
      { n: 8, f: 'What are Marcia’s four identity statuses?', b: 'Identity diffusion (no exploration, no commitment), foreclosure (commitment without exploration), moratorium (exploration without commitment) and identity achievement (both), building on Erikson’s identity versus role confusion.' },
      { n: 9, f: 'Cross-sectional vs longitudinal studies', b: 'Cross-sectional: compares different age groups at one time; quick but affected by cohort differences.\nLongitudinal: follows the same people over time; shows change but is slow, costly and loses participants.' },
      { n: 10, f: 'What is theory of mind and how is it tested?', b: 'Understanding that other people have beliefs and knowledge different from one’s own. In the Sally-Anne false-belief task (Baron-Cohen, Leslie and Frith, 1985), most typically developing four-year-olds passed but most autistic children failed.' },
      { n: 11, f: 'What is a critical period in development?', b: 'A limited time when experience is needed for normal development, such as exposure to language. Missing it may cause lasting problems, as in the case of Genie, but many researchers prefer the term sensitive period because the effects are less fixed.' },
    ]),

    // 8 Context: Human relationships
    ...topicOnly('ib-dp-psychology-2027-human-relationships', '8', [
      { n: 1, f: 'What does Buss’s cross-cultural survey of mate preferences suggest?', b: 'Broad similarities across dozens of societies, such as valuing kindness and intelligence, with sex differences in some preferences, used to support evolutionary explanations. It measures stated, not actual, choices.' },
      { n: 2, f: 'Which conflict patterns did Gottman link to relationship breakdown?', b: 'Criticism, contempt, defensiveness and stonewalling. The research used observation, not only self-report, but is largely correlational.' },
      { n: 3, f: 'What does Rusbult’s investment model add to social exchange theory?', b: 'Commitment depends on satisfaction, the quality of alternatives and the investment already made, which explains why some people stay in unhappy relationships.' },
      { n: 4, f: 'What did Sherif’s Robbers Cave study show?', b: 'Boys at a summer camp became hostile when two groups competed for limited rewards, supporting realistic conflict theory. Hostility fell when they worked towards superordinate goals neither group could reach alone.' },
      { n: 5, f: 'What conditions does Allport’s contact hypothesis require?', b: 'Equal status, common goals, cooperation and support from authorities or institutions, for contact between groups to reduce prejudice.' },
      { n: 6, f: 'What did Hazan and Shaver (1987) find about adult romantic love?', b: 'A newspaper “love quiz” suggested that adult romantic relationships show the same three attachment styles as infancy: secure, avoidant and anxious-ambivalent. Style was related to people’s reported relationship experiences.' },
      { n: 7, f: 'What role does oxytocin play in relationships?', b: 'A hormone and neurotransmitter released during touch, childbirth and sexual contact, linked to trust and bonding between partners and between parents and infants. Much evidence is from animals, so applying it to humans needs caution.' },
      { n: 8, f: 'Name strategies for improving interpersonal relationships.', b: 'Communication training, such as listening and stating needs without criticism, relationship or couples therapy, and, between groups, working towards shared goals under equal status.' },
    ]),

    // 9 Context: Learning and cognition
    ...topicOnly('ib-dp-psychology-2027-learning-and-cognition', '9', [
      { n: 1, f: 'What did Loftus and Palmer (1974) find?', b: 'Participants who saw films of car accidents gave higher speed estimates when the question used a more intense verb such as "smashed" rather than "hit", and the "smashed" group more often recalled broken glass that was not there.' },
      { n: 2, f: 'What is the main criticism of Loftus and Palmer (1974)?', b: 'Low ecological validity: a filmed clip lacks the emotional intensity of witnessing a real accident, so the findings may not apply fully to real eyewitnesses.' },
      { n: 3, f: 'What is flashbulb memory?', b: 'A vivid, detailed memory of the circumstances in which a person learned of a shocking, emotional event, a term from Brown and Kulik (1977). Later research found such memories feel certain but are not always accurate.' },
      { n: 4, f: 'What did Masuda and Nisbett (2001) find about attention?', b: 'Shown underwater scenes, Japanese participants reported more about the background and relationships between objects (holistic attention), while American participants reported more about the focal fish (analytic attention): a cultural influence on perception.' },
      { n: 5, f: 'What did Tversky and Kahneman (1974) show about anchoring?', b: 'A wheel of fortune stopped on 10 or 65, then participants estimated the percentage of African countries in the United Nations. Median estimates were 25 and 45: the arbitrary number acted as an anchor.' },
      { n: 6, f: 'What is the Mozart effect and how well is it supported?', b: 'The claim that listening to Mozart improves spatial reasoning, from Rauscher and colleagues. The gain was small and short-lived, and later studies often failed to replicate it, so it does not show a general rise in intelligence.' },
      { n: 7, f: 'What did Watson and Rayner (1920) show about classical conditioning?', b: 'A nine-month-old boy, Albert, learned to fear a white rat after it was paired with a loud noise, and the fear spread to similar furry objects. The study is now seen as unethical.' },
      { n: 8, f: 'Reinforcement vs punishment in operant conditioning', b: 'Positive reinforcement adds a reward and negative reinforcement removes something unpleasant; both make a behaviour more likely.\nPunishment makes a behaviour less likely, by adding something unpleasant or removing something pleasant.' },
      { n: 9, f: 'What is the availability heuristic?', b: 'Judging how likely something is by how easily examples come to mind, so vivid or recent events seem more common than they are, for example fearing flying after hearing about a plane crash.' },
      { n: 10, f: 'What is metacognition?', b: 'Thinking about one’s own thinking, such as judging how well you have learned something or choosing a study strategy. It is one reason cognition can be improved through training and strategies.' },
    ]),

    // 10 Class practicals
    ...topicOnly('ib-dp-psychology-2027-class-practicals', '10', [
      { n: 1, f: 'Which class practical is done in each of the four contexts?', b: 'Health and well-being: an interview. Human development: an observation. Human relationships: a survey or questionnaire. Learning and cognition: an experiment, true or quasi-.' },
      { n: 2, f: 'What are the minimum sample sizes for student-led class practicals?', b: 'Interview: one participant, or three to eight in a focus group. Observation: one participant. Survey or questionnaire: 10 participants. Experiment: five participants.' },
      { n: 3, f: 'How many class practicals must students complete?', b: 'At least four, one in each context, within 30 teaching hours at both SL and HL. Extra student-led practicals are optional and need the teacher’s explicit permission on a class practical research form.' },
      { n: 4, f: 'What kind of consent is required in a class practical?', b: 'Explicit informed consent using a consent form. Implied consent is not acceptable. Participants must know the aims and that they may withdraw at any time, with no pressure to continue.' },
      { n: 5, f: 'When is parental consent needed in a class practical?', b: 'For participants under 16, written consent of parents or guardians is needed, and of the teachers concerned if the study is in a school. It is not required for participants aged 16 and older.' },
      { n: 6, f: 'What is not permitted in a class practical?', b: 'Conformity or obedience studies, the use of animals, research with anyone not fit to respond freely, and anything causing anxiety, stress, pain or discomfort. Partial deception is allowed only if no harm is done and participants are fully debriefed.' },
      { n: 7, f: 'Which interview topics are inappropriate for student class practicals?', b: 'Sensitive topics such as mental health concerns or diagnosis, bullying or self-harm. More suitable topics are stress reduction techniques, healthy lifestyle habits or media consumption.' },
      { n: 8, f: 'How is consent handled in a naturalistic observation class practical?', b: 'Participants cannot give informed consent and debriefing is hard, so the teacher decides which situations are acceptable. Observing in public places where people expect to be seen by strangers, such as a shopping centre, is generally acceptable.' },
      { n: 9, f: 'What data protection rules apply to class practicals?', b: 'Data are stored confidentially and not shared, anonymity is guaranteed even after the practical, data are used only for the agreed purpose, and any data collected or stored online are deleted once the research is complete.' },
      { n: 10, f: 'What should students record about each class practical?', b: 'A brief description of the aim, procedure, sampling technique, sample findings and ethical considerations. It is not assessed, but it helps with paper 2 section A and the internal assessment.' },
      { n: 11, f: 'What is the internal assessment task?', b: 'A psychology research proposal that investigates a population of interest using one of the four research methods from the class practicals. It has 20 teaching hours at both SL and HL.' },
    ]),

    // 11 HL extension: Culture
    ...topicOnly('ib-dp-psychology-2027-hl-extension-culture', '11', [
      { n: 1, f: 'Which levels of culture do psychologists consider?', b: 'A person’s local culture, the culture they are enculturated into, and the global culture. Cultural diffusion raises questions about how globalisation affects mental and physical health, identity and relationships. (HL only)' },
      { n: 2, f: 'What is the ecological fallacy in cultural research?', b: 'Assuming that because a person belongs to a cultural group they must share that group’s cultural norms. It treats a group average as if it were true of every individual. (HL only)' },
      { n: 3, f: 'What is imposed etic bias?', b: 'A researcher applies findings or concepts from one culture to another and wrongly assumes they fit, for example applying findings about modesty in one agricultural society to another. It is a form of researcher bias. (HL only)' },
      { n: 4, f: 'Why is it difficult to operationalise variables in the study of culture?', b: 'Culture is broad and changing, and individuals do not always match their group’s average. Researchers must define measurable indicators carefully without stereotyping individuals. (HL only)' },
      { n: 5, f: 'How can culture affect the diagnosis and prevalence of mental health problems?', b: 'Cultures differ in how symptoms are expressed, understood and treated, which affects diagnosis and recorded prevalence. Comparing rates across cultures is therefore hard without culturally sensitive measures. (HL only)' },
      { n: 6, f: 'Why might Western models of development not fit Indigenous cultures?', b: 'Models such as Piaget’s were built mainly on Western samples, so applying them to children in Indigenous cultures risks cultural bias. Emic research with the community gives a fuller picture. (HL only)' },
      { n: 7, f: 'What is cultural diffusion?', b: 'The spread of ideas, products and practices from one society to another, increased by globalisation and technology. It can change identity, norms and relationships. (HL only)' },
    ]),

    // 12 HL extension: Motivation
    ...topicOnly('ib-dp-psychology-2027-hl-extension-motivation', '12', [
      { n: 1, f: 'What is motivation?', b: 'The impetus that gives purpose or direction to behaviour. It can operate at a conscious or unconscious level and is relevant to the concepts of change and causality. (HL only)' },
      { n: 2, f: 'Primary vs secondary motives', b: 'Primary motives are biological needs such as hunger, thirst and the need for sleep.\nSecondary motives are social or personal, such as affiliation, competition, and individual interests and goals. (HL only)' },
      { n: 3, f: 'Intrinsic vs extrinsic motivation', b: 'Intrinsic: behaviour driven by internal rewards such as interest or enjoyment.\nExtrinsic: behaviour driven by external rewards or punishments, such as grades or payment, that encourage or discourage behaviour. (HL only)' },
      { n: 4, f: 'What does self-determination theory propose?', b: 'Deci and Ryan’s theory that people have innate growth tendencies and three psychological needs: autonomy, competence and relatedness. Meeting them supports intrinsic motivation without external pressure. (HL only)' },
      { n: 5, f: 'How can primary and secondary motives be measured?', b: 'Primary motives can be measured physiologically, for example with glucose tests. Secondary motives often rely on self-report, which is open to demand characteristics; experiments can also test external motivators. (HL only)' },
      { n: 6, f: 'What did Lepper, Greene and Nisbett (1973) find?', b: 'Nursery children who expected a reward for drawing with felt pens later spent less free time drawing than children who had no reward or an unexpected one: extrinsic rewards can undermine intrinsic motivation. (HL only)' },
      { n: 7, f: 'Why does intrinsic motivation matter for learning?', b: 'Motivation for learning, especially intrinsic motivation, is linked with long-term improvements in cognition. Supporting students’ autonomy is one strategy for helping them become independent learners. (HL only)' },
    ]),

    // 13 HL extension: Technology
    ...topicOnly('ib-dp-psychology-2027-hl-extension-technology', '13', [
      { n: 1, f: 'Why is it hard to study the effects of technology on behaviour?', b: 'It is difficult to isolate variables under natural conditions, because technology use is mixed up with other influences. Research is often correlational, and sampling biases limit generalisation. (HL only)' },
      { n: 2, f: 'What is bidirectional ambiguity in technology research?', b: 'In a correlation the direction is unclear: heavy screen time might lower mood, or low mood might lead to heavy screen time. Experiments are needed to show causality. (HL only)' },
      { n: 3, f: 'Why can publication bias and funding affect research on technology?', b: 'It is a new area, and studies with striking effects are more likely to be published. Researchers and funders may assume technology is helpful or harmful, which can bias design and interpretation. (HL only)' },
      { n: 4, f: 'What is the replication crisis and how does it relate to research on technology?', b: 'Many psychological findings fail to be reproduced when studies are repeated. Findings on technology have often not been replicated, so their reliability is uncertain. (HL only)' },
      { n: 5, f: 'What is tele-therapy?', b: 'Delivering therapy at a distance by video or phone. Its effectiveness for treating disorders is an area of inquiry: it widens access, but contact with the therapist may be weaker for some clients. (HL only)' },
      { n: 6, f: 'What did Kramer et al. (2014) do with Facebook news feeds?', b: 'They changed the emotional content of the news feeds of about 689,000 users. Users shown fewer positive posts used fewer positive words, suggesting emotional contagion, but the lack of informed consent raised ethical concerns. (HL only)' },
    ]),

    // 14 HL extension: Data analysis and interpretation
    ...topicOnly('ib-dp-psychology-2027-hl-extension-data-analysis-and-interpretation', '14', [
      { n: 1, f: 'Bar graph vs histogram', b: 'A bar graph shows separate categories, with gaps between the bars.\nA histogram shows the frequency of a continuous variable in adjacent bins, so the bars touch and the shape shows the distribution.' },
      { n: 2, f: 'What does a box and whisker plot show?', b: 'The median (the line in the box), the interquartile range (the box) and the spread of the remaining data (the whiskers), with outliers often plotted as separate points.' },
      { n: 3, f: 'Normal vs skewed distribution', b: 'Normal: a symmetrical bell shape, with mean, median and mode together.\nSkewed: a long tail on one side, positive skew if the tail is to the right, so the mean is pulled towards the tail.' },
      { n: 4, f: 'What is an outlier and why does it matter?', b: 'A value far from the rest of the data. It can distort the mean and the range, so researchers check whether it is an error or a genuine value before deciding how to treat it.' },
      { n: 5, f: 'Descriptive vs inferential statistics', b: 'Descriptive statistics summarise data, such as the mean, median and standard deviation.\nInferential statistics test whether results are likely to apply to the wider population, using significance tests.' },
      { n: 6, f: 'What does a correlation coefficient tell you?', b: 'The strength and direction of a linear relationship between two variables, from -1 (perfect negative) through 0 (none) to +1 (perfect positive). It shows association only, not causation.' },
      { n: 7, f: 'What are the stages of thematic analysis?', b: 'Become familiar with the data, generate initial codes, search for themes, review the themes, define and name them, and report. Patterns in textual data are grouped into themes relevant to the aim.' },
      { n: 8, f: 'Type I vs type II error', b: 'Type I: wrongly rejecting a true null hypothesis (a false positive).\nType II: failing to reject a false null hypothesis (a false negative). Significance levels are chosen to limit type I errors.' },
      { n: 9, f: 'How do you read a scatterplot?', b: 'Each point shows one participant’s scores on two variables. A pattern rising from left to right shows a positive correlation, a falling pattern shows a negative one, and no pattern shows none.' },
    ]),
  ],
};
