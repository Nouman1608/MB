/**
 * D-444 -- flashcards for IB Diploma Programme Psychology (first assessment 2019).
 *
 * The syllabus record lists eight topics and no subtopics, so every card sits
 * on its topic (topicOnly helper). Card ids are `<topic number>-<n>` and are
 * permanent (browser progress is keyed by them): add a new card with the next
 * unused n, never renumber.
 *
 *   The syllabus record is not tiered, so no card carries a tier. HL-only
 *   content is marked in words: the card back ends "(HL only)", following the
 *   HL-only marks on Marlbridge's own revision notes and assessment notes.
 *
 * Written from Marlbridge's own first-assessment-2019 pages: the biological and
 * cognitive revision notes, the six topic study guides and the assessment
 * revision notes. Assessment cards give the components and weightings as those
 * notes state them, and no markband. A few standard core studies the pages do
 * not name (H.M., Glanzer and Cunitz, Baddeley and Hitch, Brown and Kulik) are
 * written from the course content, outline findings only. Every card is
 * authored: scripts/flashcard-candidates.mjs lists no candidates for this code.
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
  syllabusCode: 'DP Psychology (2019) / DP Psychology (2027)',
  syllabusSeries: 'First assessment 2019',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Biological approach
    ...topicOnly('ib-dp-psychology-biological-approach', '1', [
      { n: 1, f: 'What are the four topics of the biological approach?', b: 'The relationship between the brain and behaviour; hormones and pheromones and their effects on behaviour; the relationship between genetics and behaviour; and the role of animal research in understanding human behaviour (HL only).' },
      { n: 2, f: 'What did Maguire et al. (2000) find about London taxi drivers?', b: 'Structural MRI showed taxi drivers had larger posterior hippocampi than controls, correlated with years of driving: evidence for the hippocampus’s role in spatial memory and for neuroplasticity.' },
      { n: 3, f: 'What is the main limitation of Maguire et al. (2000)?', b: 'It is correlational, so it cannot rule out that people with naturally larger posterior hippocampi are more likely to become and stay taxi drivers.' },
      { n: 4, f: 'What did the case of H.M. show about memory?', b: 'After surgery removed much of both hippocampi to treat epilepsy (1953), H.M. could not form new long-term memories (anterograde amnesia) but kept older memories and could learn new motor skills, suggesting memory systems are partly localised.' },
      { n: 5, f: 'How should you explain a neurotransmitter’s role in behaviour?', b: 'As a two-part claim: what the chemical does physiologically at the synapse, then which specific behaviour that mechanism is proposed to explain. Naming the neurotransmitter alone is not enough.' },
      { n: 6, f: 'Hormone vs pheromone', b: 'Hormone: a chemical messenger released by an endocrine gland into the bloodstream that acts within the same body, such as cortisol in the stress response.\nPheromone: a chemical signal released by one individual that affects another of the same species.' },
      { n: 7, f: 'Do humans have pheromones that affect behaviour?', b: 'It is contested. Candidates such as androstadienone have been studied, but no human pheromone has been conclusively identified, and expectation or context may explain apparent effects.' },
      { n: 8, f: 'How do twin studies estimate a genetic contribution to behaviour?', b: 'They compare concordance rates for a trait between identical (monozygotic) twins, who share all their genes, and non-identical (dizygotic) twins, who share about half. Higher MZ concordance suggests a genetic contribution.' },
      { n: 9, f: 'What did Caspi et al. (2003) find?', b: 'People with one or two short versions of the 5-HTT (serotonin transporter) gene were more likely to become depressed, but only after stressful life events: a gene-environment interaction. Later studies, such as Risch et al. (2009), failed to replicate it, so it is disputed.' },
      { n: 10, f: 'What are the value and limits of animal research for understanding human behaviour?', b: 'Value: controlled tests not possible on humans, and many biological systems are shared across mammals.\nLimits: species differences limit generalisation, and harm to animals raises ethical questions judged by the 3Rs (replacement, reduction, refinement). (HL only)' },
    ]),

    // 2 Cognitive approach
    ...topicOnly('ib-dp-psychology-cognitive-approach', '2', [
      { n: 1, f: 'What does the cognitive approach study?', b: 'How mental processes such as memory, perception, thinking and decision-making shape behaviour, often using information-processing models (input, processing, storage, output) of activity that cannot be directly observed.' },
      { n: 2, f: 'What is the multi-store model of memory?', b: 'Atkinson and Shiffrin’s model: information passes from sensory memory to short-term memory with attention, and to long-term memory with rehearsal. The stores differ in capacity and duration.' },
      { n: 3, f: 'What did Glanzer and Cunitz (1966) show about the serial position effect?', b: 'When recall of a word list was delayed, the recency effect disappeared but the primacy effect remained, supporting separate short-term and long-term stores.' },
      { n: 4, f: 'How does the working memory model differ from the multi-store model?', b: 'Baddeley and Hitch (1974) split short-term memory into a central executive that controls attention, a phonological loop for sound and a visuospatial sketchpad for images, which can work at the same time.' },
      { n: 5, f: 'What is reconstructive memory?', b: 'The idea that memory is an active reconstruction shaped by existing schemas and later information, not an accurate recording of the original event.' },
      { n: 6, f: 'What did Loftus and Palmer (1974) find?', b: 'Participants who saw films of car accidents gave higher speed estimates when the question used a more intense verb such as "smashed" rather than "hit", and the "smashed" group more often recalled broken glass that was not there.' },
      { n: 7, f: 'What is the main criticism of Loftus and Palmer (1974)?', b: 'Low ecological validity: a filmed clip lacks the emotional intensity of witnessing a real accident, so the findings may not apply fully to real eyewitnesses.' },
      { n: 8, f: 'What did Bartlett’s "War of the Ghosts" study (1932) show?', b: 'British participants’ repeated recall of an unfamiliar Native American folk story grew shorter and was distorted towards their own cultural expectations, supporting schema theory and reconstructive memory.' },
      { n: 9, f: 'What is flashbulb memory?', b: 'A vivid, detailed memory of the circumstances in which a person learned of a shocking, emotional event, a term from Brown and Kulik (1977). Later research found such memories feel certain but are not always accurate.' },
    ]),

    // 3 Sociocultural approach
    ...topicOnly('ib-dp-psychology-sociocultural-approach', '3', [
      { n: 1, f: 'What are the three processes of social identity theory?', b: 'Social categorisation (sorting people into groups), social identification (adopting the group’s identity) and social comparison (comparing the in-group with out-groups). Tajfel and Turner proposed the theory.' },
      { n: 2, f: 'What did the minimal group paradigm (Tajfel et al., 1971) show?', b: 'Schoolboys divided into groups on trivial grounds gave more points to their own group, suggesting that mere categorisation is enough to produce in-group bias.' },
      { n: 3, f: 'What did Bandura, Ross and Ross (1961) find in the Bobo doll study?', b: 'Children who watched an adult behave aggressively towards an inflatable doll were more likely to act aggressively towards it than those who saw a non-aggressive model; boys imitated aggression more than girls.' },
      { n: 4, f: 'What are the four processes of observational learning in social cognitive theory?', b: 'Attention, retention, reproduction and motivation, with motivation shaped by reinforcement, including vicarious reinforcement. Self-efficacy and reciprocal determinism also affect learning.' },
      { n: 5, f: 'What is stereotype threat?', b: 'Anxiety about confirming a negative stereotype about one’s group, which can lower performance. Steele and Aronson (1995) found African American students did worse on a verbal test described as diagnostic of ability.' },
      { n: 6, f: 'What is illusory correlation?', b: 'Wrongly seeing a link between two infrequent things, one way stereotypes form, as shown by Hamilton and Gifford (1976).' },
      { n: 7, f: 'Individualism vs collectivism', b: 'Individualist cultures: people see themselves as independent and prioritise personal goals.\nCollectivist cultures: people see themselves as part of a group and prioritise group goals. It is one of Hofstede’s cultural dimensions.' },
      { n: 8, f: 'What did Cohen and Nisbett (1996) find about the culture of honour?', b: 'White male students from the southern United States reacted more strongly to an insult than northerners, showing how cultural norms can shape emotion and aggression.' },
      { n: 9, f: 'Enculturation vs acculturation', b: 'Enculturation: learning the norms and values of one’s own culture.\nAcculturation: change that happens when people from different cultures are in continuous contact.' },
      { n: 10, f: 'What are Berry’s four acculturation strategies?', b: 'Integration (keep own culture and join the new one), assimilation (adopt the new, give up the old), separation (keep the old, avoid the new) and marginalisation (neither).' },
      { n: 11, f: 'Emic vs etic approach', b: 'Emic: studies a culture from within, using its own concepts.\nEtic: applies concepts from outside, often Western ones, across cultures, risking cultural bias.' },
      { n: 12, f: 'How is Paper 1 structured?', b: 'Three short-answer questions on the core approaches, then one essay chosen from three, one per approach, answered from that single approach with evaluation. It is worth 50% at SL and 40% at HL.' },
    ]),

    // 4 Approaches to researching behaviour
    ...topicOnly('ib-dp-psychology-approaches-to-researching-behaviour', '4', [
      { n: 1, f: 'True experiment vs quasi-experiment', b: 'True experiment: participants are randomly allocated to conditions of a manipulated IV, giving the strongest evidence of cause and effect.\nQuasi-experiment: the IV is a characteristic participants already have, such as age or gender, so random allocation is impossible.' },
      { n: 2, f: 'Field experiment vs natural experiment', b: 'Field experiment: the researcher manipulates the IV in a natural setting.\nNatural experiment: the IV changes naturally, such as a policy change, and the researcher does not control it.' },
      { n: 3, f: 'Independent samples vs repeated measures design', b: 'Independent samples: different people in each condition; no order effects, but participant variables differ.\nRepeated measures: the same people in every condition; controls participant variables, but practice and fatigue effects occur, reduced by counterbalancing.' },
      { n: 4, f: 'Why does a correlation not prove causation?', b: 'A third variable may cause both, or the direction of the relationship may be the reverse of what is assumed.' },
      { n: 5, f: 'Name the main qualitative research methods', b: 'Observation (naturalistic or controlled, participant or non-participant, overt or covert), interviews (structured, semi-structured or unstructured), focus groups and case studies.' },
      { n: 6, f: 'Random vs opportunity sampling', b: 'Random: everyone in the target population has an equal chance of selection, which reduces bias but is hard to achieve.\nOpportunity: whoever is available, which is quick but may not be representative.' },
      { n: 7, f: 'Purposive vs snowball sampling', b: 'Purposive: participants chosen for specific characteristics, common in qualitative research.\nSnowball: participants recruit others, useful for hard-to-reach groups.' },
      { n: 8, f: 'What are the key ethical principles in psychological research?', b: 'Informed consent, protection from harm, confidentiality, the right to withdraw, debriefing after the study and avoiding unjustified deception. Children need parental consent as well as their own assent.' },
      { n: 9, f: 'Internal validity vs external validity vs ecological validity', b: 'Internal: the IV really caused the change in the DV.\nExternal: the findings apply beyond the study to other people, settings and times.\nEcological: the setting and task are realistic.' },
      { n: 10, f: 'What are credibility, transferability and triangulation in qualitative research?', b: 'Credibility: the qualitative equivalent of validity.\nTransferability: the equivalent of generalisation.\nTriangulation: using several methods, researchers or data sources to strengthen credibility.' },
      { n: 11, f: 'What is the internal assessment in IB Psychology?', b: 'A simple experimental study, usually carried out in a small group, but designed, analysed and written up individually. Students evaluate it and suggest modifications, and it is externally moderated. It is 25% at SL and 20% at HL.' },
      { n: 12, f: 'What does Paper 3 assess?', b: 'Research methodology, HL only: three compulsory questions on an unseen study summary (1 hour, 24 marks, 20%). Question 1 has three 3-mark parts on method, sampling and an alternative method; Question 2 is on ethics (6 marks); Question 3 is on generalisation, credibility or bias (9 marks).' },
    ]),

    // 5 Option: Abnormal psychology
    ...topicOnly('ib-dp-psychology-abnormal-psychology', '5', [
      { n: 1, f: 'What are four criteria used to define abnormality?', b: 'Statistical infrequency, deviation from social norms, maladaptive behaviour or failure to function, and deviation from ideal mental health. No single criterion is adequate on its own.' },
      { n: 2, f: 'What are the DSM and the ICD?', b: 'The two main classification systems. DSM: the American Psychiatric Association’s manual, now DSM-5. ICD: the World Health Organization’s International Classification of Diseases, now ICD-11.' },
      { n: 3, f: 'Reliability vs validity of diagnosis', b: 'Reliable: different clinicians reach the same diagnosis (inter-rater reliability), or the same clinician does on different occasions.\nValid: the diagnosis identifies a real, distinct condition.' },
      { n: 4, f: 'What did Rosenhan (1973) report?', b: 'People with no disorder who said they heard a voice were admitted to psychiatric hospitals and, though they then behaved normally, were not identified by staff. Widely criticised in method, it raised questions about context, labelling and stigma in diagnosis.' },
      { n: 5, f: 'What is Beck’s negative cognitive triad?', b: 'A negative view of the self, the world and the future, which Beck proposed as a cognitive explanation of depression, alongside negative schemas.' },
      { n: 6, f: 'What did Brown and Harris (1978) find about depression?', b: 'In a study of women in a London district, severe life events combined with vulnerability factors, such as lacking a close confiding relationship, were associated with depression.' },
      { n: 7, f: 'What is the diathesis-stress model?', b: 'The view that a disorder develops when a vulnerability (diathesis), such as a genetic predisposition, combines with stress, such as stressful life events.' },
      { n: 8, f: 'How are SSRIs thought to work, and what is a limitation?', b: 'They block the reuptake of serotonin, raising the level available at the synapse. Limitations: side effects, treating symptoms rather than causes, and meta-analyses such as Kirsch et al. (2008) finding only a small advantage over placebo except in severe depression.' },
      { n: 9, f: 'What is cognitive behavioural therapy (CBT)?', b: 'A psychological treatment that helps people identify and change unhelpful thoughts and behaviours. It has evidence of benefit for depression and anxiety but needs motivation and time.' },
    ]),

    // 6 Option: Developmental psychology
    ...topicOnly('ib-dp-psychology-developmental-psychology', '6', [
      { n: 1, f: 'Assimilation vs accommodation in Piaget’s theory', b: 'Assimilation: fitting new information into an existing schema.\nAccommodation: changing the schema when new information does not fit. Equilibrium is the balance that drives learning.' },
      { n: 2, f: 'What are Piaget’s four stages of cognitive development?', b: 'Sensorimotor (0-2: object permanence), preoperational (2-7: symbolic thought, egocentrism), concrete operational (7-11: conservation, logic about concrete objects) and formal operational (11+: abstract thought).' },
      { n: 3, f: 'What is the zone of proximal development?', b: 'Vygotsky’s term for the gap between what a child can do alone and what they can do with help from a more knowledgeable other. Scaffolding (Wood, Bruner and Ross, 1976) is support that is reduced as the child becomes competent.' },
      { n: 4, f: 'What did Harlow (1958) find with infant rhesus monkeys?', b: 'They preferred a cloth-covered surrogate mother to a wire one that gave milk, showing the importance of contact comfort. The study raises serious animal-ethics issues and generalising to human infants is limited.' },
      { n: 5, f: 'What is the Strange Situation?', b: 'Ainsworth’s laboratory procedure of brief separations and reunions, used to classify attachment as secure, insecure-avoidant or insecure-resistant. Critics say it is culturally specific.' },
      { n: 6, f: 'What is an internal working model?', b: 'Bowlby’s idea that early attachment experience forms a mental model of relationships that guides later ones.' },
      { n: 7, f: 'What are Kohlberg’s three levels of moral reasoning?', b: 'Pre-conventional (judging by punishment and reward), conventional (by social rules and expectations) and post-conventional (by principles). He studied reasoning about dilemmas such as the Heinz dilemma.' },
      { n: 8, f: 'What are Marcia’s four identity statuses?', b: 'Identity diffusion (no exploration, no commitment), foreclosure (commitment without exploration), moratorium (exploration without commitment) and identity achievement (both), building on Erikson’s identity versus role confusion.' },
      { n: 9, f: 'Cross-sectional vs longitudinal studies', b: 'Cross-sectional: compares different age groups at one time; quick but affected by cohort differences.\nLongitudinal: follows the same people over time; shows change but is slow, costly and loses participants.' },
    ]),

    // 7 Option: Health psychology
    ...topicOnly('ib-dp-psychology-health-psychology', '7', [
      { n: 1, f: 'What are the biological, cognitive and sociocultural determinants of health?', b: 'Biological: genes, hormones and the stress response.\nCognitive: beliefs about illness, perceived control, optimism and self-efficacy.\nSociocultural: income, education, social support, culture and environment. Show how they interact.' },
      { n: 2, f: 'What did the Whitehall studies show?', b: 'A social gradient in health among British civil servants: death and illness rates were higher in lower employment grades, even though all had stable jobs.' },
      { n: 3, f: 'What are the stages of Selye’s general adaptation syndrome?', b: 'Alarm, resistance and exhaustion. Prolonged activation of the stress response is linked with a higher risk of illness.' },
      { n: 4, f: 'Primary vs secondary appraisal in Lazarus and Folkman’s transactional model', b: 'Primary appraisal: judging whether an event is a threat, a harm or a challenge.\nSecondary appraisal: judging whether you have the resources to cope.' },
      { n: 5, f: 'What is a criticism of Holmes and Rahe’s life-events scale?', b: 'It treats everyone alike and ignores appraisal, assuming that change itself, rather than its meaning to the person, is stressful.' },
      { n: 6, f: 'Problem-focused vs emotion-focused coping', b: 'Problem-focused: tackles the source of stress.\nEmotion-focused: manages the feelings it produces. Which works best depends on whether the situation can be changed.' },
      { n: 7, f: 'What are the five components of the health belief model?', b: 'Perceived susceptibility, perceived severity, perceived benefits, perceived barriers and cues to action.' },
      { n: 8, f: 'What does the theory of planned behaviour add to attitudes?', b: 'Subjective norms and perceived behavioural control, which together with attitude shape intention. Its weakness is the gap between intending and doing.' },
      { n: 9, f: 'What are Prochaska and DiClemente’s stages of change?', b: 'Precontemplation, contemplation, preparation, action and maintenance, with possible relapse. Interventions should match the person’s stage.' },
    ]),

    // 8 Option: Psychology of human relationships
    ...topicOnly('ib-dp-psychology-psychology-of-human-relationships', '8', [
      { n: 1, f: 'What does Buss’s cross-cultural survey of mate preferences suggest?', b: 'Broad similarities across dozens of societies, such as valuing kindness and intelligence, with sex differences in some preferences, used to support evolutionary explanations. It measures stated, not actual, choices.' },
      { n: 2, f: 'Which conflict patterns did Gottman link to relationship breakdown?', b: 'Criticism, contempt, defensiveness and stonewalling. The research used observation, not only self-report, but is largely correlational.' },
      { n: 3, f: 'What does Rusbult’s investment model add to social exchange theory?', b: 'Commitment depends on satisfaction, the quality of alternatives and the investment already made, which explains why some people stay in unhappy relationships.' },
      { n: 4, f: 'What did Sherif’s Robbers Cave study show?', b: 'Boys at a summer camp became hostile when two groups competed for limited rewards, supporting realistic conflict theory. Hostility fell when they worked towards superordinate goals neither group could reach alone.' },
      { n: 5, f: 'Prejudice vs stereotype vs discrimination', b: 'Prejudice: an attitude towards a group.\nStereotype: a generalised belief about a group.\nDiscrimination: behaviour that treats people unfairly because of group membership.' },
      { n: 6, f: 'What conditions does Allport’s contact hypothesis require?', b: 'Equal status, common goals, cooperation and support from authorities or institutions, for contact between groups to reduce prejudice.' },
      { n: 7, f: 'What did Darley and Latané (1968) find about bystanders?', b: 'Participants who believed another person was having a seizure over an intercom were slower to help the more people they thought were present: diffusion of responsibility.' },
      { n: 8, f: 'How did Piliavin’s subway study complicate the bystander effect?', b: 'In a real field setting, helping was often quick, and the victim’s appearance influenced it, showing that a laboratory finding can look different in the field.' },
      { n: 9, f: 'How is Paper 2 structured?', b: 'One essay on each option studied: SL students study one option and HL students two, with equal time and marks for each. It is worth 25% at SL and 20% at HL.' },
    ]),
  ],
};
