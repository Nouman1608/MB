/**
 * D-444 -- flashcards for AQA A-level Psychology 7182 (specification Version 1.4,
 * 1 September 2025, for teaching from September 2025).
 *
 * One block per subtopic, in specification order. Card ids are
 * `<subtopic number>-<n>` and are permanent (browser progress is keyed by
 * them): add a new card with the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 7182); origin 'revision-notes'.
 *
 * Written from Marlbridge's own 7182 revision notes and study guides, which
 * follow Version 1.4 (so identification, Zimbardo and types of LTM are left
 * out as no longer specification content). Biopsychology (3.2.2) and Research
 * methods (3.2.3) have no Marlbridge page yet and are written from section
 * 4.2.2-4.2.3 of the specification. Named studies and dates are those on the
 * course pages. Not tiered. Plain text only (see types.ts). Unicode for symbols.
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

const MEM = 'aqa-a-level-psychology-memory-revision-notes';
const APP = 'aqa-a-level-psychology-approaches-revision-notes';
const ID = 'aqa-a-level-psychology-7182-issues-and-debates-revision-notes';
const REL = 'aqa-a-level-psychology-7182-relationships-revision-notes';
const GEN = 'aqa-a-level-psychology-7182-gender-revision-notes';
const COG = 'aqa-a-level-psychology-7182-cognition-and-development-revision-notes';
const SCZ = 'aqa-a-level-psychology-7182-schizophrenia-revision-notes';
const EAT = 'aqa-a-level-psychology-7182-eating-behaviour-revision-notes';
const STR = 'aqa-a-level-psychology-7182-stress-revision-notes';
const AGG = 'aqa-a-level-psychology-7182-aggression-revision-notes';
const FOR = 'aqa-a-level-psychology-7182-forensic-psychology-revision-notes';
const ADD = 'aqa-a-level-psychology-7182-addiction-revision-notes';

const P1 = 'paper-1-introductory-topics-7182';
const P2 = 'paper-2-psychology-in-context-7182';
const P3 = 'paper-3-issues-debates-options-7182';

export const DECK_AQA_A_LEVEL_PSYCHOLOGY: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'psychology',
  syllabusCode: '7182',
  syllabusSeries: 'Version 1.4 (1 September 2025), for teaching from September 2025',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 3.1 Introductory topics in Psychology
    ...sub(P1, 'social-influence-7182', '3.1.1', [
      { n: 1, f: 'Compliance vs internalisation', b: 'Compliance: going along with the group in public while privately disagreeing; it stops when the group is absent. Internalisation: accepting the group\'s view publicly and privately, so the change lasts.' },
      { n: 2, f: 'Normative vs informational social influence', b: 'Normative social influence: conforming from the need to be liked; produces compliance. Informational social influence: conforming from the need to be right; produces internalisation.' },
      { n: 3, f: 'How did group size, unanimity and task difficulty affect conformity in Asch\'s research?', b: 'Overall conformity to the wrong answer was about 36.8%. It rose with group size up to about three, fell sharply when one confederate dissented, and rose when the task was made harder (informational influence).' },
      { n: 4, f: 'What situational variables affected obedience in Milgram\'s research?', b: 'Baseline obedience to 450 V was 65%. It fell when teacher and learner were in the same room (proximity), in a run-down office (location), and when the experimenter was replaced by an ordinary member of the public (uniform).' },
      { n: 5, f: 'Agentic state vs legitimacy of authority', b: 'Agentic state: acting as an instrument of an authority figure rather than as an autonomous agent, so responsibility is shifted. Legitimacy of authority: we obey people whose position in a social hierarchy we accept as having the right to command.' },
      { n: 6, f: 'What is the Authoritarian Personality, and its main weakness?', b: 'Adorno\'s dispositional explanation: rigid, obedient people raised strictly, measured by the F-scale. It cannot explain whole populations obeying, which suggests situational factors matter more.' },
      { n: 7, f: 'How do social support and locus of control help people resist social influence?', b: 'A dissenting ally (social support) breaks unanimity and reduces conformity and obedience. People with an internal locus of control believe they control their own behaviour, so are more likely to resist.' },
      { n: 8, f: 'What makes a minority influential?', b: 'Consistency (the same view over time and among members), commitment (sacrifices that show sincerity) and flexibility (being willing to compromise rather than appearing rigid).' },
    ]),
    ...sub(P1, 'memory-7182', '3.1.2', [
      { n: 1, f: 'Coding, capacity and duration of STM and LTM in the multi-store model', b: 'STM: mainly acoustic coding, about 7±2 items (Miller), 18–30 seconds unrehearsed. LTM: mainly semantic coding, potentially unlimited capacity, up to a lifetime.', src: MEM },
      { n: 2, f: 'What is the sensory register?', b: 'The first store in the multi-store model: modality-specific (e.g. iconic, echoic), very large capacity, duration under half a second. Attention passes information on to STM.' },
      { n: 3, f: 'Central executive', b: 'The component of the working memory model that directs attention and coordinates the other components. It has no storage of its own.', src: MEM },
      { n: 4, f: 'Phonological loop vs visuo-spatial sketchpad vs episodic buffer', b: 'Phonological loop: auditory and verbal information (phonological store and articulatory process). Sketchpad: visual and spatial information. Episodic buffer: integrates the other components and links to LTM.' },
      { n: 5, f: 'What strength does the working memory model have over the multi-store model?', b: 'It explains dual-task performance: two tasks that use different components can be done together, but two using the same component interfere, which a single unitary STM cannot explain.' },
      { n: 6, f: 'Proactive vs retroactive interference', b: 'Proactive: older learning disrupts the recall of newer learning. Retroactive: newer learning disrupts the recall of older learning.' },
      { n: 7, f: 'What is retrieval failure due to absence of cues?', b: 'Forgetting because the cues present at encoding are missing at recall (encoding specificity). Context-dependent forgetting involves external cues; state-dependent forgetting involves the person\'s internal state.' },
      { n: 8, f: 'How did leading questions affect eyewitness testimony in Loftus and Palmer\'s research?', b: 'The verb in the question changed speed estimates ("smashed" gave higher estimates than "hit"), and "smashed" also produced more false memories of broken glass.' },
      { n: 9, f: 'How does anxiety affect eyewitness testimony?', b: 'The weapon focus effect suggests anxiety narrows attention onto a weapon and reduces recall. But the Yerkes-Dodson inverted U suggests moderate arousal can improve recall, so the evidence is contradictory.' },
      { n: 10, f: 'What are the four techniques of the cognitive interview?', b: 'Report everything, reinstate the context, reverse the order, and change perspective. It increases the amount of correct information recalled without a proportional rise in errors.' },
    ]),
    ...sub(P1, 'attachment-7182', '3.1.3', [
      { n: 1, f: 'What did Lorenz and Harlow show about attachment in animals?', b: 'Lorenz: goslings imprint on the first moving object they see in a critical period. Harlow: infant rhesus monkeys preferred a soft cloth "mother" to a wire one that gave milk, showing the importance of contact comfort.' },
      { n: 2, f: 'Learning theory vs Bowlby\'s monotropic theory of attachment', b: 'Learning theory ("cupboard love"): attachment is learned because the carer is associated with food. Bowlby: attachment is innate and adaptive, with social releasers, a critical period and one special attachment (monotropy).' },
      { n: 3, f: 'What are the critical period and the internal working model in Bowlby\'s theory?', b: 'The critical period (about the first 2.5 years) is when attachment must form. The internal working model is a mental template of relationships, based on the first attachment, that shapes later relationships.' },
      { n: 4, f: 'Name the three attachment types identified in Ainsworth\'s Strange Situation', b: 'Secure (type B), insecure-avoidant (type A) and insecure-resistant (type C).' },
      { n: 5, f: 'What did van IJzendoorn\'s research show about cultural variations in attachment?', b: 'Secure attachment was the most common type across cultures, but insecure-avoidant was relatively more common in Germany and insecure-resistant in Japan, raising the question of whether the Strange Situation is an imposed etic.' },
      { n: 6, f: 'Maternal deprivation vs institutionalisation', b: 'Maternal deprivation (Bowlby, 44 thieves): long separation from the mother in the critical period harms development. Institutionalisation: effects of growing up in care, e.g. the English and Romanian Adoptees project found disinhibited attachment, with later adoption doing more harm.' },
    ]),
    ...sub(P1, 'clinical-psychology-and-mental-health-7182', '3.1.4', [
      { n: 1, f: 'Name the four definitions in the field of mental health', b: 'Statistical infrequency, deviation from social/cultural norms, failure to function adequately and deviation from ideal mental health. Each has limitations on its own, e.g. social norms vary between cultures and over time.' },
      { n: 2, f: 'Behavioural, emotional and cognitive characteristics of phobias', b: 'Behavioural: avoidance, panic. Emotional: anxiety and fear. Cognitive: irrational beliefs and selective attention to the feared object.' },
      { n: 3, f: 'Behavioural, emotional and cognitive characteristics of depression', b: 'Behavioural: reduced activity, disrupted sleep and eating. Emotional: low mood, anger. Cognitive: negative schemas, absolutist thinking.' },
      { n: 4, f: 'Behavioural, emotional and cognitive characteristics of OCD', b: 'Behavioural: compulsions, avoidance. Emotional: anxiety, guilt. Cognitive: obsessions, with insight that they are irrational.' },
      { n: 5, f: 'What is the two-process model of phobias?', b: 'The phobia is acquired by classical conditioning (a neutral stimulus is paired with fear) and maintained by operant conditioning, because avoiding the stimulus reduces anxiety and is negatively reinforced.' },
      { n: 6, f: 'Systematic desensitisation vs flooding', b: 'Systematic desensitisation: relaxation training and a fear hierarchy, worked through gradually. Flooding: immediate, prolonged exposure to the most feared stimulus until anxiety falls. Both prevent avoidance.' },
      { n: 7, f: 'Beck\'s negative triad vs Ellis\'s ABC model', b: 'Beck: depression comes from negative views of the self, the world and the future. Ellis: an Activating event leads, through irrational Beliefs, to emotional and behavioural Consequences. CBT challenges these irrational thoughts.' },
      { n: 8, f: 'How does the biological approach explain and treat OCD?', b: 'Genetic explanations (candidate genes, polygenic risk) and neural explanations (e.g. low serotonin, abnormal frontal circuits). Drug therapy, typically SSRIs, increases serotonin availability.' },
    ]),

    // 3.2 Psychology in context
    ...sub(P2, 'approaches-in-psychology-7182', '3.2.1', [
      { n: 1, f: 'Classical vs operant conditioning', b: 'Classical (Pavlov): learning by association, a neutral stimulus paired with an unconditioned stimulus comes to produce a conditioned response. Operant (Skinner): learning by consequences, reinforcement and punishment.', src: APP },
      { n: 2, f: 'How does social learning theory differ from behaviourism?', b: 'It adds cognition: learning by observing and imitating a model, with vicarious reinforcement, identification and four mediational processes (attention, retention, motor reproduction, motivation). Personal reinforcement is not needed first.' },
      { n: 3, f: 'What are the main features of the cognitive approach?', b: 'It studies internal mental processes such as memory and perception, uses schemas to explain how experience organises knowledge, and uses theoretical and computer models to make inferences about the mind.' },
      { n: 4, f: 'Genotype vs phenotype', b: 'Genotype: a person\'s genetic make-up. Phenotype: how the genes are expressed in characteristics, which depends on interaction with the environment.' },
      { n: 5, f: 'Id, ego and superego', b: 'Id: the pleasure principle, present at birth. Ego: the reality principle, mediating between id and superego. Superego: the morality principle, formed around age 5.', src: APP },
      { n: 6, f: 'Repression, denial and displacement', b: 'Repression: pushing a distressing memory out of conscious awareness. Denial: refusing to accept reality. Displacement: redirecting an emotion onto a safer target.' },
      { n: 7, f: 'What are congruence and conditions of worth in humanistic psychology?', b: 'Congruence (Rogers): a match between self-image and ideal self. Conditions of worth: conditional acceptance in childhood that can block congruence. Self-actualisation is the top of Maslow\'s hierarchy.' },
      { n: 8, f: 'Which approaches are most determinist, and which emphasises free will?', b: 'Behaviourism, the biological and psychodynamic approaches are determinist; SLT and the cognitive approach are soft determinist; humanistic psychology emphasises free will.', src: APP },
    ]),
    ...sub(P2, 'biopsychology-7182', '3.2.2', [
      { n: 1, f: 'What are the divisions of the nervous system?', b: 'The central nervous system (brain and spinal cord) and the peripheral nervous system, which divides into the somatic (voluntary movement, senses) and autonomic (involuntary functions) systems.' },
      { n: 2, f: 'Sensory, relay and motor neurons', b: 'Sensory neurons carry messages from receptors to the CNS. Relay neurons connect neurons within the CNS. Motor neurons carry messages from the CNS to muscles and glands.' },
      { n: 3, f: 'How does synaptic transmission work?', b: 'An impulse reaches the presynaptic terminal, vesicles release neurotransmitter into the synaptic gap, and it binds to receptors on the postsynaptic neuron. Excitatory neurotransmitters make the next neuron more likely to fire; inhibitory ones make it less likely.' },
      { n: 4, f: 'What happens in the fight or flight response?', b: 'The hypothalamus activates the sympathetic nervous system, and the adrenal medulla releases adrenaline: heart rate and breathing rise, pupils dilate and digestion slows, preparing the body to fight or run.' },
      { n: 5, f: 'fMRI vs EEG vs ERP vs post-mortem', b: 'fMRI measures blood oxygen changes linked to activity (good spatial resolution). EEG records overall electrical activity through the scalp (good temporal resolution). ERPs isolate responses to a specific stimulus from the EEG. Post-mortems examine the brain after death.' },
      { n: 6, f: 'Where are Broca\'s and Wernicke\'s areas, and what do they do?', b: 'Broca\'s area (left frontal lobe) is linked to speech production. Wernicke\'s area (left temporal lobe) is linked to language comprehension.' },
      { n: 7, f: 'What is hemispheric lateralisation, and what did split brain research show?', b: 'Lateralisation: the two hemispheres specialise in different functions, e.g. language mainly in the left. Split brain research (cut corpus callosum) showed information shown to one hemisphere could not be shared with the other.' },
      { n: 8, f: 'What is brain plasticity and functional recovery?', b: 'Plasticity: the brain changes its structure and connections with experience. Functional recovery: after trauma, undamaged areas can take over lost functions, e.g. by forming new connections.' },
    ]),
    ...sub(P2, 'research-methods-7182', '3.2.3', [
      { n: 1, f: 'Natural vs quasi-experiment', b: 'Natural experiment: the researcher takes advantage of an IV that varies naturally (not manipulated). Quasi-experiment: the IV is a difference between people that already exists, such as age or gender.' },
      { n: 2, f: 'Random, systematic, stratified, opportunity and volunteer sampling', b: 'Random: equal chance for all. Systematic: every nth person. Stratified: subgroups in proportion to the population. Opportunity: whoever is available. Volunteer: people who respond to an advert.' },
      { n: 3, f: 'Event sampling vs time sampling in observations', b: 'Event sampling: counting each time a behaviour category occurs. Time sampling: recording behaviour at fixed intervals.' },
      { n: 4, f: 'Demand characteristics vs investigator effects', b: 'Demand characteristics: cues that lead participants to guess the aim and change their behaviour. Investigator effects: the researcher\'s behaviour or expectations unintentionally influencing the results.' },
      { n: 5, f: 'Face, concurrent, ecological and temporal validity', b: 'Face: a measure looks like it measures what it should. Concurrent: results match an established measure. Ecological: findings generalise to real-life settings. Temporal: findings generalise to other times.' },
      { n: 6, f: 'What are the features of science named in the specification?', b: 'Objectivity and the empirical method, replicability and falsifiability, theory construction and hypothesis testing, and paradigms and paradigm shifts.' },
      { n: 7, f: 'Nominal, ordinal and interval data', b: 'Nominal: counts in categories. Ordinal: data that can be ranked but with unequal gaps. Interval: data on a scale with equal units.' },
      { n: 8, f: 'When do you use the sign test?', b: 'For a difference between two related conditions (repeated measures or matched pairs) with nominal data, such as whether each participant improved or not.' },
      { n: 9, f: 'Type I vs Type II error', b: 'Type I: rejecting a null hypothesis that is true (a false positive), more likely with a lenient significance level. Type II: accepting a null hypothesis that is false (a false negative), more likely with a stringent level.' },
      { n: 10, f: 'Which test for an unrelated design with ordinal data, and for a correlation with interval data?', b: 'Unrelated design, ordinal data: Mann-Whitney. Correlation, interval data: Pearson\'s r (Spearman\'s rho if ordinal).' },
    ]),

    // 3.3 Issues and options in Psychology
    ...sub(P3, 'issues-and-debates-7182', '3.3.1', [
      { n: 1, f: 'Alpha bias vs beta bias', b: 'Alpha bias exaggerates differences between the sexes (e.g. Freud\'s claim that girls develop a weaker superego). Beta bias ignores or minimises differences (e.g. stress research on males applied to females).', src: ID },
      { n: 2, f: 'Androcentrism', b: 'Treating male behaviour as the normal standard.', src: ID },
      { n: 3, f: 'Ethnocentrism vs cultural relativism', b: 'Ethnocentrism: seeing your own culture\'s behaviour as normal or superior. Cultural relativism: behaviour can only be understood in its own cultural context.' },
      { n: 4, f: 'Imposed etic', b: 'Using a tool from one culture as if it were universal.', src: ID },
      { n: 5, f: 'Hard vs soft determinism', b: 'Hard determinism: all behaviour is caused and free will is an illusion. Soft determinism: behaviour is caused, but some conscious choice remains within limits.' },
      { n: 6, f: 'Biological, environmental and psychic determinism', b: 'Biological: behaviour caused by genes, hormones or the brain. Environmental: caused by learning and reinforcement. Psychic: caused by unconscious forces and early experience.', src: ID },
      { n: 7, f: 'What is the interactionist approach to nature and nurture?', b: 'Nature and nurture work together to produce behaviour, e.g. the diathesis-stress model, where a vulnerability becomes a disorder only when triggered by stress.' },
      { n: 8, f: 'Biological vs environmental reductionism', b: 'Biological reductionism explains behaviour at the level of physiology (e.g. neural explanations of OCD). Environmental reductionism reduces behaviour to learned stimulus-response links.' },
      { n: 9, f: 'Idiographic vs nomothetic approach', b: 'Idiographic: in-depth study of the individual, usually qualitative (e.g. Freud\'s case studies). Nomothetic: studying groups to find general laws, usually quantitative (e.g. Milgram).' },
      { n: 10, f: 'What did Sieber and Stanley (1988) say about socially sensitive research?', b: 'Research with potential social consequences for participants or the group they represent. Issues can arise at four points: the research question, the conduct of the research, the institutional context, and the interpretation and application of findings.' },
    ]),
    ...sub(P3, 'relationships-7182', '3.3.2', [
      { n: 1, f: 'Matching hypothesis', b: 'People seek partners of similar attractiveness to themselves, balancing desirability against the risk of rejection.', src: REL },
      { n: 2, f: 'What are the three filters in filter theory (Kerckhoff and Davis, 1962)?', b: 'In order: social demography (background factors deciding who we meet), similarity in attitudes (important early) and complementarity (partners meeting each other\'s different needs, important later).' },
      { n: 3, f: 'Comparison level (CL) vs comparison level for alternatives (CLalt)', b: 'CL: the reward we expect from a relationship, based on experience. CLalt: whether another relationship, or being single, would be more profitable. Social exchange theory (Thibaut and Kelley, 1959) says we stay if profit beats both.' },
      { n: 4, f: 'How does equity theory differ from social exchange theory?', b: 'Social exchange theory says partners seek the most profit. Equity theory (Walster et al., 1978) says they seek a fair ratio of inputs to outputs, so being over-benefited (guilt) is uncomfortable as well as being under-benefited (anger).' },
      { n: 5, f: 'What predicts commitment in Rusbult\'s investment model?', b: 'Satisfaction, comparison with alternatives and investment (intrinsic and extrinsic). Rusbult and Martz (1995) found women with more investment and fewer alternatives were more likely to return to an abusive partner.' },
      { n: 6, f: 'What are the phases of Duck\'s phase model of relationship breakdown?', b: 'Intra-psychic (brooding privately), dyadic (confronting the partner), social (telling friends and family, who take sides) and grave dressing (creating a story of the breakup that protects reputation). Each is triggered by a threshold.' },
      { n: 7, f: 'Hyperpersonal model vs reduced cues theory', b: 'Reduced cues theory (Sproull and Kiesler, 1986): fewer non-verbal cues online, so less disclosure. Hyperpersonal model (Walther, 1996): selective self-presentation leads to faster, deeper disclosure online.' },
      { n: 8, f: 'Name the three levels of parasocial relationship on the Celebrity Attitude Scale', b: 'Entertainment-social, intense-personal and borderline-pathological.', src: REL },
    ]),
    ...sub(P3, 'gender-7182', '3.3.3', [
      { n: 1, f: 'Klinefelter\'s syndrome vs Turner syndrome', b: 'Klinefelter\'s: XXY, male, lower testosterone, usually infertile. Turner syndrome: one X chromosome (XO), female, short stature, ovaries develop atypically.' },
      { n: 2, f: 'Androgen insensitivity syndrome', b: 'XY; cells do not respond (fully or partly) to androgens.', src: GEN },
      { n: 3, f: 'How does the Bem Sex Role Inventory (Bem, 1974) measure gender?', b: '60 traits (20 masculine, 20 feminine, 20 neutral) rated on a 7-point scale. Masculinity and femininity are scored separately, giving four classifications: masculine, feminine, androgynous (high on both) and undifferentiated.' },
      { n: 4, f: 'Gender stability vs gender constancy (Kohlberg)', b: 'Gender stability: knowing gender is stable over time, but not across situations. Gender constancy: knowing gender is stable over time and situations; Kohlberg says active gender learning starts here, at about 6.' },
      { n: 5, f: 'How does gender schema theory (Martin and Halverson) differ from Kohlberg?', b: 'Gender learning starts with basic gender identity (about 2 to 3), not constancy. Children build detailed in-group schemas about their own gender and largely ignore out-group schemas.' },
      { n: 6, f: 'What did Slaby and Frey (1975) find?', b: 'Children who had higher gender constancy attended more to a same-sex model in a film (significant for boys only), supporting Kohlberg.' },
      { n: 7, f: 'What did Williams (1986) find in the "Notel" study?', b: 'In a Canadian town studied before and after television arrived, children\'s gender stereotyping increased, suggesting the media influence gender roles.' },
      { n: 8, f: 'Gender incongruence', b: 'The ICD-11 term for a marked, persistent mismatch between experienced gender and sex assigned at birth. ICD-11 classifies it under conditions related to sexual health, not as a mental disorder.', src: GEN },
    ]),
    ...sub(P3, 'cognition-and-development-7182', '3.3.4', [
      { n: 1, f: 'Assimilation vs accommodation', b: 'Assimilation: fitting new information into an existing schema without changing it. Accommodation: changing a schema, or forming a new one, because new information does not fit. Equilibration restores balance.' },
      { n: 2, f: 'Name Piaget\'s four stages of intellectual development', b: 'Sensorimotor, pre-operational, concrete operational and formal operational.' },
      { n: 3, f: 'Conservation vs class inclusion vs egocentrism', b: 'Conservation: knowing quantity stays the same when only appearance changes. Class inclusion: a sub-class is part of a larger class. Egocentrism: seeing the world only from your own viewpoint (e.g. the three mountains task).' },
      { n: 4, f: 'What did McGarrigle and Donaldson (1974) show with Naughty Teddy?', b: 'More children conserved number when the change looked accidental (caused by Naughty Teddy), suggesting Piaget\'s tasks underestimated children because of how they were worded.' },
      { n: 5, f: 'Zone of proximal development vs scaffolding', b: 'ZPD (Vygotsky): the gap between what a learner can do alone and with expert help. Scaffolding (term from Wood, Bruner and Ross, 1976): temporary expert support, reduced as the learner gains skill.' },
      { n: 6, f: 'What is violation of expectation research (Baillargeon)?', b: 'A method using longer looking at an impossible event as a sign of surprise, e.g. 5-month-olds looked longer at an "impossible" drawbridge rotation, suggesting infants have physical knowledge earlier than Piaget claimed.' },
      { n: 7, f: 'What did Baron-Cohen, Leslie and Frith (1985) find with the Sally-Anne task?', b: 'About 85% of typically developing children and 86% of children with Down syndrome passed the false belief task, compared with 20% of autistic children.' },
      { n: 8, f: 'What is the mirror neuron system\'s proposed role in social cognition?', b: 'Mirror neurons fire both when you act and when you watch the same action, which may help us understand others\' intentions (e.g. Iacoboni et al., 2005). The evidence is correlational.' },
    ]),
    ...sub(P3, 'schizophrenia-7182', '3.3.5', [
      { n: 1, f: 'Hallucination vs delusion', b: 'A hallucination is a sensory experience with no external stimulus (a perception). A delusion is a firmly held belief not supported by evidence (a belief).' },
      { n: 2, f: 'Speech poverty vs avolition', b: 'Speech poverty: reduced amount and quality of speech, brief empty replies. Avolition: reduced ability to start and keep up goal-directed activity. Both are negative symptoms.' },
      { n: 3, f: 'Co-morbidity vs symptom overlap', b: 'Co-morbidity: two conditions present in the same person at once. Symptom overlap: different conditions sharing symptoms. Both make diagnosis less reliable, for different reasons.' },
      { n: 4, f: 'What did Gottesman (1991) find about genetic risk?', b: 'Risk of schizophrenia was about 48% for an identical twin, 17% for a non-identical twin, 9% for a sibling and 1% in the general population. Identical twin concordance below 100% shows it is not purely genetic.' },
      { n: 5, f: 'Original vs revised dopamine hypothesis', b: 'Original: too much subcortical dopamine (hyperdopaminergia), linked to positive symptoms. Revised (Davis et al., 1991): also too little prefrontal dopamine (hypodopaminergia), linked to negative symptoms.' },
      { n: 6, f: 'Expressed emotion (EE)', b: 'A family\'s level of criticism, hostility and emotional over-involvement. Brown, Birley and Wing (1972) found more relapse in people returning to high-EE homes; it explains relapse better than onset.' },
      { n: 7, f: 'What is Frith\'s (1992) dysfunctional thought processing explanation?', b: 'Faulty metarepresentation (not recognising one\'s thoughts as one\'s own, e.g. hearing voices) and faulty central control (failing to suppress automatic responses, e.g. derailed speech).' },
      { n: 8, f: 'What did Tienari et al. (2004) show about the diathesis-stress model?', b: 'In a Finnish adoption study, genetic risk led to schizophrenia mainly when the adoptive family was dysfunctional, supporting an interaction between vulnerability and stress.' },
    ]),
    ...sub(P3, 'eating-behaviour-7182', '3.3.6', [
      { n: 1, f: 'Neophobia vs taste aversion', b: 'Neophobia: reluctance to eat unfamiliar foods, thought to protect young children from toxins. Taste aversion: learned avoidance of a food after it has been followed by illness, which can form after one pairing.' },
      { n: 2, f: 'Ghrelin vs leptin', b: 'Ghrelin: released by the stomach when empty; increases hunger ("go"). Leptin: released by fat tissue; signals satiety and reflects energy stores ("stop").' },
      { n: 3, f: 'Lateral vs ventromedial hypothalamus in the dual-centre model', b: 'The lateral hypothalamus (LH) is linked to starting eating: LH damage stops eating. The ventromedial hypothalamus (VMH) is linked to stopping eating: VMH damage causes overeating.' },
      { n: 4, f: 'What did Holland et al. (1988) find about anorexia nervosa?', b: 'Twins showed higher concordance for anorexia nervosa in MZ than DZ pairs, supporting a genetic explanation; MZ concordance was well below 100%.' },
      { n: 5, f: 'What is enmeshment in family systems theory?', b: 'Family members are over-involved with weak boundaries between them. Minuchin et al. (1978) linked enmeshment, over-protection and conflict avoidance to anorexia nervosa; Bruch (1978) stressed lack of autonomy and control.' },
      { n: 6, f: 'What did Becker et al. (2002) find in Fiji?', b: 'Soon after television arrived and three years later, the share of girls with high-risk eating-attitude scores rose from about 13% to about 29%, supporting social learning and media influence.' },
      { n: 7, f: 'Restraint vs disinhibition', b: 'Restraint: a deliberate attempt to limit food intake. Disinhibition: breakdown of restraint, leading to overeating. Herman and Mack (1975) found restrained eaters ate more ice cream after a milkshake preload.' },
      { n: 8, f: 'What is the boundary model (Herman and Polivy, 1984)?', b: 'Intake is set by a hunger boundary and a satiety boundary. Dieters have a wider zone between them and a self-set diet boundary; once it is crossed, they overeat.' },
    ]),
    ...sub(P3, 'stress-7182', '3.3.7', [
      { n: 1, f: 'SAM pathway vs HPA system', b: 'SAM: fast, acute; hypothalamus → sympathetic nervous system → adrenal medulla → adrenaline. HPA: slower, chronic; hypothalamus releases CRH → pituitary releases ACTH → adrenal cortex releases cortisol.' },
      { n: 2, f: 'What are the three stages of Selye\'s general adaptation syndrome?', b: 'Alarm, resistance and exhaustion, a response found to any prolonged stressor in rats (Selye, 1936).' },
      { n: 3, f: 'What did Kiecolt-Glaser et al. (1984) find?', b: 'Medical students\' natural killer cell activity was lower during exams than a month before, and lonelier students had lower immune function: evidence of immunosuppression by stress.' },
      { n: 4, f: 'Life changes vs daily hassles', b: 'Life changes are rare, major events needing readjustment, measured by the SRRS (Holmes and Rahe, 1967). Daily hassles are frequent minor irritations; Kanner et al. (1981) found they predicted symptoms better than life events.' },
      { n: 5, f: 'What did Marmot et al. (1997) find about workplace stress?', b: 'In over 7,000 London civil servants (Whitehall II), low job control made the largest contribution to higher coronary heart disease in lower grades.' },
      { n: 6, f: 'Type A vs Type B vs Type C personality', b: 'Type A: competitive, time-urgent, hostile. Type B: relaxed, patient. Type C: emotionally suppressed, cooperative, unassertive.' },
      { n: 7, f: 'What are the three Cs of hardiness (Kobasa)?', b: 'Commitment, challenge and control, said to buffer the effects of stress.' },
      { n: 8, f: 'Stress inoculation therapy vs biofeedback', b: 'SIT (Meichenbaum): a cognitive-behavioural therapy in three phases (conceptualisation, skills acquisition and rehearsal, application and follow-through). Biofeedback: learning to control a body response using real-time information about it.' },
      { n: 9, f: 'Instrumental vs emotional vs esteem support', b: 'Instrumental: practical help. Emotional: care and listening. Esteem: boosting belief in your own ability.', src: STR },
    ]),
    ...sub(P3, 'aggression-7182', '3.3.8', [
      { n: 1, f: 'What roles do the limbic system, serotonin and testosterone play in aggression?', b: 'Limbic system (e.g. the amygdala) assesses threat and triggers emotional responses. Low serotonin is linked to impulsive aggression. Testosterone is linked to dominance and male aggression.' },
      { n: 2, f: 'What is the MAOA gene, and what did Caspi et al. (2002) find?', b: 'MAOA codes for an enzyme that breaks down serotonin; the low-activity variant is linked to aggression. In Dunedin, maltreated boys with high-activity MAOA were less likely to become antisocial: a gene-environment interaction.' },
      { n: 3, f: 'Innate releasing mechanism vs fixed action pattern', b: 'An IRM is an inborn neural process triggered by a specific stimulus. A FAP is the universal, ballistic behaviour sequence it releases, e.g. Tinbergen\'s (1951) sticklebacks attacking a red underside.' },
      { n: 4, f: 'Frustration-aggression hypothesis: original vs revised', b: 'Dollard et al. (1939): frustration always leads to aggression. Berkowitz: frustration makes aggression more likely, especially with aggressive cues (e.g. guns in Berkowitz and LePage, 1967).' },
      { n: 5, f: 'De-individuation', b: 'Loss of personal identity and self-awareness in crowds or under anonymity, e.g. hooded participants gave longer shocks (Zimbardo, 1969).' },
      { n: 6, f: 'Importation vs deprivation model of institutional aggression', b: 'Importation (dispositional): prisoners bring aggressive traits and norms into prison (Irwin and Cressey, 1962). Deprivation (situational): prison conditions cause aggression, e.g. Sykes\'s (1958) pains of imprisonment.' },
      { n: 7, f: 'Desensitisation vs disinhibition vs cognitive priming', b: 'Desensitisation: reduced emotional and physical response to violence after repeated exposure. Disinhibition: media make violence seem normal, weakening restraints. Cognitive priming: media activate aggressive thoughts that cues later trigger.' },
    ]),
    ...sub(P3, 'forensic-psychology-7182', '3.3.9', [
      { n: 1, f: 'Organised vs disorganised offender', b: 'Organised: plans the crime, controls the victim, leaves few clues, socially competent. Disorganised: little planning, spontaneous scene, evidence left behind, often lives alone near the scene.' },
      { n: 2, f: 'Top-down vs bottom-up offender profiling', b: 'Top-down (typology): matching a crime scene to a pre-existing type, from FBI interviews (Ressler, Burgess and Douglas, 1988). Bottom-up (data-driven, investigative psychology): building a profile from statistical patterns in past crimes (Canter).' },
      { n: 3, f: 'Marauder vs commuter in geographical profiling', b: 'A marauder offends near home, inside the circle drawn through the two furthest crimes. A commuter travels away from home to offend (Canter and Larkin, 1993).' },
      { n: 4, f: 'What did Raine et al. (1997) find?', b: 'PET scans of 41 murderers and 41 controls showed lower prefrontal activity in the murderers, supporting a neural explanation; the data are correlational.' },
      { n: 5, f: 'What is Eysenck\'s theory of the criminal personality?', b: 'Offenders score high on extraversion, neuroticism and psychoticism (measured by the EPQ), with an innate nervous system that conditions poorly, so they are poorly socialised.' },
      { n: 6, f: 'Hostile attribution bias vs minimalisation', b: 'Hostile attribution bias: interpreting ambiguous behaviour of others as hostile. Minimalisation: downplaying the seriousness or harm of one\'s own offence.' },
      { n: 7, f: 'What is differential association theory?', b: 'Offending is learned through attitudes and techniques from close groups such as family and friends, so the balance of pro- and anti-criminal attitudes predicts offending.' },
      { n: 8, f: 'Token economy vs restorative justice', b: 'Token economy: operant conditioning, tokens for target behaviours exchanged for privileges. Restorative justice: the offender meets the victim with a mediator and takes responsibility (Sherman and Strang, 2007, found reduced reoffending for some).' },
    ]),
    ...sub(P3, 'addiction-7182', '3.3.10', [
      { n: 1, f: 'Physical vs psychological dependence', b: 'Physical dependence shows in withdrawal symptoms; psychological dependence shows in craving and compulsion. Gambling shows psychological dependence without a drug.', src: ADD },
      { n: 2, f: 'Tolerance vs withdrawal', b: 'Tolerance is about needing more while using; withdrawal is about what happens when use stops.', src: ADD },
      { n: 3, f: 'What did Vink, Willemsen and Boomsma (2005) find about smoking?', b: 'In 1,572 Dutch twin pairs, genes explained 44% of smoking initiation and 75% of nicotine dependence, showing genetic vulnerability.' },
      { n: 4, f: 'How does dopamine explain nicotine addiction?', b: 'Nicotine binds to nicotinic acetylcholine receptors, triggering dopamine release in the mesolimbic reward pathway (to the nucleus accumbens), producing pleasure; adaptation leads to tolerance and withdrawal.' },
      { n: 5, f: 'Cue reactivity', b: 'Craving and arousal triggered by cues previously paired with the drug.', src: ADD },
      { n: 6, f: 'Partial vs variable reinforcement', b: 'Partial means not every response is rewarded; variable ratio means the number of responses before a reward keeps changing.', src: ADD },
      { n: 7, f: 'What did Griffiths (1994) find about fruit-machine gamblers?', b: 'Regular gamblers made more irrational verbalisations when thinking aloud than non-regular gamblers, but were not significantly more skilful, supporting cognitive bias.' },
      { n: 8, f: 'Aversion therapy vs covert sensitisation', b: 'Aversion therapy pairs the addictive behaviour with a real unpleasant stimulus (e.g. a nausea-inducing drug). Covert sensitisation pairs it with an imagined unpleasant consequence.', src: ADD },
      { n: 9, f: 'What are the stages of Prochaska\'s six-stage model of behaviour change?', b: 'Precontemplation, contemplation, preparation, action, maintenance and termination. Support is matched to the stage a person is at.' },
    ]),
  ],
};
