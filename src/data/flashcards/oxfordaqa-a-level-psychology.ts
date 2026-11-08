/**
 * D-444 -- flashcards for OxfordAQA International AS and A-level Psychology 9685
 * (Version 3.1).
 *
 * One block per subtopic, in specification order. Card ids are
 * `<subtopic number>-<n>` and are permanent (browser progress is keyed by
 * them): add a new card with the next unused n, never renumber.
 *
 *   src: '...'  The card restates a key-terms entry on that revision-notes page,
 *               which maps to the card's subtopic; origin 'revision-notes'.
 *
 * Written from Marlbridge's own 9685 revision notes and study guides (Units 1
 * and 2 at unit level; each Unit 3 and Unit 4 subtopic has its own page).
 * Content checked against section 3 of the Version 3.1 specification, which
 * leaves out explanations for forgetting and OCD at this level. Named studies
 * and dates are those on the course pages. Not tiered. Plain text only (see
 * types.ts). Unicode for symbols.
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

const SLEEP = 'oxfordaqa-a-level-psychology-9685-psychology-of-sleep-revision-notes';
const SCZ = 'oxfordaqa-a-level-psychology-9685-schizophrenia-revision-notes';
const RM2 = 'oxfordaqa-a-level-psychology-9685-research-methods-2-revision-notes';
const APP = 'oxfordaqa-a-level-psychology-9685-scientific-approaches-in-psychology-revision-notes';
const ID = 'oxfordaqa-a-level-psychology-9685-issues-and-debates-in-psychology-revision-notes';
const WORK = 'oxfordaqa-a-level-psychology-9685-applied-psychology-work-and-the-individual-revision-notes';

const U1 = 'unit-1-introductory-topics-9685';
const U2 = 'unit-2-biopsychology-development-9685';
const U3 = 'unit-3-advanced-topics-9685';
const U4 = 'unit-4-approaches-and-application-9685';

export const DECK_OXFORDAQA_A_LEVEL_PSYCHOLOGY: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'psychology',
  syllabusCode: '9685',
  syllabusSeries: 'Version 3.1',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // Unit 1 – Introductory Topics in Psychology
    ...sub(U1, 'memory-9685', '3.1.1', [
      { n: 1, f: 'What are the stores of the multi-store model, and how does information move between them?', b: 'Sensory register → (attention) → short-term memory → (rehearsal) → long-term memory. STM holds about 5–9 items for about 18–30 seconds; LTM has unlimited capacity and can last a lifetime.' },
      { n: 2, f: 'How is information coded in STM and LTM?', b: 'STM codes mainly acoustically (by sound). LTM codes mainly semantically (by meaning).' },
      { n: 3, f: 'What are the four components of the working memory model?', b: 'The central executive (directs attention, no storage), the phonological loop (sound and speech), the visuo-spatial sketchpad (visual and spatial information) and the episodic buffer (integrates the others and links to LTM).' },
      { n: 4, f: 'What can the working memory model explain that the multi-store model cannot?', b: 'Dual-task performance: two tasks using different components can be done at once, but two using the same component interfere.' },
      { n: 5, f: 'Episodic vs semantic vs procedural memory', b: 'Episodic: personal events. Semantic: facts and meanings. Procedural: skills. Amnesia patients who keep learned skills despite severe episodic loss support the distinction.' },
      { n: 6, f: 'How do leading questions and post-event discussion affect eyewitness testimony?', b: 'Leading questions suggest an answer and can change what is recalled. Post-event discussion with other witnesses can cause memory conformity, as witnesses blend others\' accounts into their own.' },
      { n: 7, f: 'What are the four techniques of the cognitive interview?', b: 'Report everything, reinstate the context, reverse the order and change perspective. It increases correct recall without a proportional rise in errors.' },
    ]),
    ...sub(U1, 'social-psychology-9685', '3.1.2', [
      { n: 1, f: 'Compliance vs internalisation', b: 'Compliance: public agreement only, while the group is present. Internalisation: public and private acceptance that lasts.' },
      { n: 2, f: 'Normative vs informational social influence', b: 'NSI: conforming from the need to be liked, giving compliance. ISI: conforming from the need to be right, giving internalisation, so the change persists.' },
      { n: 3, f: 'How did group size, unanimity and task difficulty affect conformity in Asch\'s research?', b: 'Conformity rose with group size up to about three, fell sharply when one confederate dissented (loss of unanimity), and rose when the task was more difficult.' },
      { n: 4, f: 'How did proximity and location affect obedience in Milgram\'s research?', b: 'Baseline obedience to 450 V was 65%. It fell when the teacher was closer to the learner (proximity) and when the study moved from Yale to a run-down office (location).' },
      { n: 5, f: 'Agentic state vs legitimacy of authority', b: 'Agentic state: acting as an instrument of an authority figure and not feeling responsible. Legitimacy of authority: obeying people whose position we accept as giving them the right to command.' },
      { n: 6, f: 'How do social support and locus of control explain resistance?', b: 'A dissenting ally gives social support that makes resisting the group or authority easier. People with an internal locus of control believe they control their own actions, so are more likely to resist.' },
    ]),
    ...sub(U1, 'psychopathology-9685', '3.1.3', [
      { n: 1, f: 'Name the four definitions of abnormality', b: 'Deviation from social norms, failure to function adequately, statistical infrequency and deviation from ideal mental health. Each has a limitation alone, e.g. norms vary between cultures and eras.' },
      { n: 2, f: 'What are the defining characteristics of phobias?', b: 'A persistent, excessive fear of a specific object or situation, avoidance of it, and a response out of proportion to the actual danger.' },
      { n: 3, f: 'What are the defining characteristics of depression?', b: 'Persistent low mood, loss of interest or pleasure in usual activities, and disturbed sleep, appetite or energy.' },
      { n: 4, f: 'How does the two-process model explain phobias?', b: 'Classical conditioning acquires the phobia (a neutral stimulus is paired with fear). Operant conditioning maintains it, because avoidance reduces anxiety and so is negatively reinforced.' },
      { n: 5, f: 'Systematic desensitisation vs flooding', b: 'Systematic desensitisation: relaxation training plus a hierarchy of feared situations, worked through gradually. Flooding: immediate, prolonged exposure to the most feared situation until the anxiety falls.' },
      { n: 6, f: 'Beck\'s negative triad vs Ellis\'s ABC model', b: 'Beck: negative views of the self, the world and the future cause depression. Ellis: an Activating event leads to emotional Consequences through irrational Beliefs. CBT challenges irrational thoughts.' },
    ]),

    // Unit 2 – Biopsychology, Development and Research Methods 1
    ...sub(U2, 'biopsychology-9685', '3.2.1', [
      { n: 1, f: 'What are the divisions of the nervous system?', b: 'The central nervous system (brain and spinal cord) and the peripheral nervous system, which divides into the somatic and autonomic systems. The autonomic system is part of the peripheral system.' },
      { n: 2, f: 'Sensory vs relay vs motor neurons', b: 'Sensory neurons carry impulses from receptors to the CNS. Relay neurons connect neurons within the CNS. Motor neurons carry impulses from the CNS to muscles and glands.' },
      { n: 3, f: 'Excitation vs inhibition in synaptic transmission', b: 'An excitatory neurotransmitter makes the postsynaptic neuron more likely to fire. An inhibitory neurotransmitter makes it less likely. The overall effect depends on the sum of inputs.' },
      { n: 4, f: 'How does the endocrine system differ from the nervous system?', b: 'Glands release hormones directly into the bloodstream. This is slower than electrical nerve signalling but its effects last longer.' },
      { n: 5, f: 'What is the sequence of the fight or flight response?', b: 'Threat → amygdala signals the hypothalamus → sympathetic nervous system and adrenal medulla → adrenaline → raised heart rate, blood diverted to muscles, dilated pupils.' },
      { n: 6, f: 'What did split-brain research show?', b: 'In patients whose corpus callosum was cut, information shown to one hemisphere could not be reported if speech was controlled by the other, evidence of hemispheric lateralisation (language mainly in the left).' },
      { n: 7, f: 'What did Maguire et al. (2000) find about London taxi drivers?', b: 'They had larger posterior hippocampi than controls, and volume correlated with time spent driving: evidence of brain plasticity, though the data are correlational.' },
      { n: 8, f: 'How does functional recovery after trauma happen?', b: 'Other areas take over lost functions, e.g. homologous areas in the opposite hemisphere are recruited and undamaged neurons form new connections (axonal sprouting).' },
    ]),
    ...sub(U2, 'cognitive-development-9685', '3.2.2', [
      { n: 1, f: 'Assimilation vs accommodation vs equilibration', b: 'Assimilation: fitting new information into a schema. Accommodation: changing the schema when it does not fit. Equilibration: restoring balance after disequilibrium.' },
      { n: 2, f: 'Name Piaget\'s stages and one characteristic of each', b: 'Sensorimotor: object permanence develops. Pre-operational: egocentrism, no conservation. Concrete operational: conservation and class inclusion. Formal operational: abstract reasoning.' },
      { n: 3, f: 'What is Baillargeon\'s violation of expectation research?', b: 'Infants look longer at physically impossible events than possible ones, which suggests surprise and so knowledge of the physical world earlier than Piaget claimed. Looking time may reflect novelty instead.' },
      { n: 4, f: 'Zone of proximal development vs scaffolding (Vygotsky)', b: 'ZPD: the gap between what a learner can do alone and what they can do with expert help. Scaffolding: temporary support from an expert, withdrawn as the learner becomes more skilled.' },
      { n: 5, f: 'Piaget vs Vygotsky on what drives cognitive development', b: 'Piaget: internal, stage-based development driven by maturation and discovery. Vygotsky: development is driven by social interaction and culture, with language as a key tool.' },
      { n: 6, f: 'What does the Sally-Anne task test, and what is a pass?', b: 'Theory of mind. A child passes by saying Sally will look where she left the object, not where Anne moved it, showing they understand Sally holds a false belief.' },
      { n: 7, f: 'Why are mirror neurons linked to social cognition?', b: 'They fire both when a person performs an action and when they watch someone else perform it, so they may help us understand others\' actions and intentions.' },
    ]),
    ...sub(U2, 'research-methods-1-9685', '3.2.3', [
      { n: 1, f: 'Laboratory vs field vs natural experiment', b: 'Laboratory: IV manipulated in a controlled setting. Field: IV manipulated in a natural setting. Natural: the IV varies naturally and is not manipulated by the researcher.' },
      { n: 2, f: 'Aim vs hypothesis', b: 'An aim is a general statement of what the study intends to investigate. A hypothesis is a precise, testable prediction. It can be directional or non-directional.' },
      { n: 3, f: 'Random vs opportunity sampling', b: 'Random: every member of the target population has an equal chance of selection (less bias). Opportunity: using whoever is available (quick, but likely to be biased).' },
      { n: 4, f: 'What is a pilot study for?', b: 'A small-scale trial run before the main study, to check procedures, instructions and materials and fix problems before time and money are spent.' },
      { n: 5, f: 'Random allocation vs counterbalancing', b: 'Random allocation: participants are assigned to conditions by chance, in independent groups. Counterbalancing: half do A then B, half B then A, to balance order effects in repeated measures.' },
      { n: 6, f: 'What are demand characteristics?', b: 'Cues that let participants guess the aim of a study, so they change their behaviour, e.g. to help or spoil the results.' },
      { n: 7, f: 'What is a meta-analysis?', b: 'A form of secondary data analysis that combines the results of many studies on the same question to give an overall effect.' },
      { n: 8, f: 'Normal vs skewed distribution', b: 'Normal: symmetrical bell curve with mean, median and mode equal. Positive skew: tail to the right, mean higher than median. Negative skew: tail to the left, mean lower than median.' },
    ]),

    // Unit 3 – Advanced Topics and Research Methods 2
    ...sub(U3, 'psychology-of-sleep-9685', '3.3.1', [
      { n: 1, f: 'Circadian vs infradian vs ultradian rhythm', b: 'Circadian: about 24 hours (sleep/wake cycle). Infradian: longer than 24 hours (menstrual cycle). Ultradian: shorter than 24 hours (the roughly 90-minute cycle of sleep stages).' },
      { n: 2, f: 'Endogenous pacemaker', b: 'Internal clock; mainly the suprachiasmatic nucleus (SCN) in the hypothalamus.', src: SLEEP },
      { n: 3, f: 'Exogenous zeitgeber', b: 'External cue that resets the clock; mainly light, also meals and social routines.', src: SLEEP },
      { n: 4, f: 'What did Siffre (1962) find in a cave?', b: 'Alone in a cave for about two months without time cues, his sleep/wake cycle continued but free-ran slightly over 24 hours.' },
      { n: 5, f: 'Why is flying east harder than flying west?', b: 'Flying east needs a phase advance (making the clock earlier), which is harder; flying west needs a phase delay, which is easier. Recht et al. (1995) found baseball teams flying east did worse.' },
      { n: 6, f: 'Slow-wave sleep vs REM sleep', b: 'SWS (NREM stages 3 and 4): deep sleep with delta waves, linked to body restoration. REM: rapid eye movements, waking-like EEG, muscle paralysis and vivid dreams.' },
      { n: 7, f: 'Evolutionary vs restoration explanations of sleep', b: 'Evolutionary accounts explain why sleep evolved (safety, saving energy). Restoration theory explains what sleep does, e.g. Shapiro et al. (1981) found more SWS after runners completed a 92 km race.' },
      { n: 8, f: 'What did Plihal and Born (1997) find about memory consolidation?', b: 'SWS-rich early-night sleep helped memory for facts, while REM-rich late-night sleep helped a motor skill.' },
      { n: 9, f: 'Narcolepsy and cataplexy', b: 'Narcolepsy is a disorder of sudden, uncontrollable sleep episodes. Cataplexy is a sudden loss of muscle tone, often after strong emotion. Narcolepsy with cataplexy is linked to reduced hypocretin (orexin).' },
      { n: 10, f: 'How do personality and genetics explain insomnia?', b: 'Personality factors such as neuroticism and worry act through hyperarousal, which blocks sleep. Genetic factors are many small-effect variants shown by family, twin and genome-wide studies.' },
    ]),
    ...sub(U3, 'schizophrenia-9685', '3.3.2', [
      { n: 1, f: 'Positive vs negative symptoms of schizophrenia', b: 'Positive: experiences added to normal experience, such as hallucinations and delusions. Negative: normal abilities reduced or lost, such as speech poverty and avolition.' },
      { n: 2, f: 'Avolition', b: 'Severe loss of motivation to start and sustain goal-directed activity.', src: SCZ },
      { n: 3, f: 'Reliability vs validity of diagnosis', b: 'Reliability: consistency of diagnosis between clinicians or over time. Validity: whether the diagnosis identifies a real, distinct condition. Cheniaux et al. (2009) found schizophrenia diagnosed more often under ICD-10 than DSM-IV.' },
      { n: 4, f: 'What did Hilker et al. (2018) find in Danish twins?', b: 'Concordance for schizophrenia was 33% for MZ twins and 7% for DZ twins, with heritability estimated at 79%. MZ concordance far below 100% shows environment also matters.' },
      { n: 5, f: 'Original vs revised dopamine hypothesis', b: 'Original: excess dopamine activity (hyperdopaminergia) causes symptoms. Revised (Davis et al., 1991): low prefrontal dopamine (negative symptoms) plus high mesolimbic dopamine (positive symptoms).' },
      { n: 6, f: 'What is Frith\'s dysfunctional thought processing explanation?', b: 'Faulty metarepresentation (failing to recognise thoughts and actions as one\'s own, e.g. hearing voices) and faulty willed action / central control (difficulty starting and monitoring deliberate behaviour).' },
      { n: 7, f: 'Typical vs atypical anti-psychotics', b: 'Typical (e.g. chlorpromazine): first-generation D2 blockers, mainly for positive symptoms, risk of tardive dyskinesia. Atypical (e.g. clozapine): act on dopamine and serotonin, generally fewer movement side effects; clozapine risks agranulocytosis.' },
      { n: 8, f: 'What did Kane et al. (1988) and Jauhar et al. (2014) find about treatments?', b: 'Kane et al.: 30% of treatment-resistant patients responded to clozapine against 4% to chlorpromazine. Jauhar et al.: CBT had a small effect overall, very small on negative symptoms.' },
    ]),
    ...sub(U3, 'research-methods-2-9685', '3.3.3', [
      { n: 1, f: 'Content analysis', b: 'Indirect study of behaviour through material people produce, by coding it into categories.', src: RM2 },
      { n: 2, f: 'Test-retest vs inter-observer reliability', b: 'Test-retest: the same test given to the same people on two occasions and the scores correlated. Inter-observer: two observers record the same behaviour separately and their tallies are correlated.' },
      { n: 3, f: 'Face vs concurrent vs predictive vs ecological validity', b: 'Face: the measure looks right. Concurrent: agrees with an established measure taken at the same time. Predictive: scores predict a later outcome. Ecological: findings generalise to real-life settings.' },
      { n: 4, f: 'Type I vs Type II error', b: 'Type I: the null hypothesis is rejected when it is true (false positive), more likely with too lenient a level. Type II: the null is accepted when it is false (false negative), more likely with too strict a level.' },
      { n: 5, f: 'Which test: unrelated design, interval data? Related design, ordinal data?', b: 'Unrelated design, interval data: unrelated t-test. Related design, ordinal data: Wilcoxon. (Matched pairs count as related.)' },
      { n: 6, f: 'Which test: related design, nominal data? Correlation, ordinal data?', b: 'Related design, nominal data: Sign test. Correlation, ordinal data: Spearman\'s rho. (Rating scales are ordinal.)' },
      { n: 7, f: 'When must the calculated value be ≤ the critical value to be significant?', b: 'For Mann-Whitney, Wilcoxon and the Sign test. For tests with an "r" in their name (Spearman\'s rho, Pearson\'s r, chi-squared, t-tests), the calculated value must be ≥ the critical value.' },
      { n: 8, f: 'What are the sections of a scientific report?', b: 'Abstract (short summary at the start), introduction, method, results, discussion (interpretation, limitations, applications) and referencing.' },
    ]),

    // Unit 4 – Approaches and Application (Synoptic)
    ...sub(U4, 'approaches-in-psychology-9685', '3.4.1', [
      { n: 1, f: 'Classical vs operant conditioning', b: 'Classical (Pavlov) links two stimuli and works on reflexes. Operant (Skinner) links a behaviour with its consequence and works on voluntary behaviour.' },
      { n: 2, f: 'Negative reinforcement', b: 'An unpleasant stimulus is removed or avoided, so the behaviour increases.', src: APP },
      { n: 3, f: 'Variable ratio schedule', b: 'Reward after an unpredictable number of responses; most resistant to extinction.', src: APP },
      { n: 4, f: 'Mediational processes', b: 'Attention, retention, reproduction, motivation.', src: APP },
      { n: 5, f: 'What did Bandura (1965) show about learning and performance?', b: 'Children who saw a model punished copied less aggression, until they were offered rewards to copy, when they reproduced it: behaviour can be learned without being performed.' },
      { n: 6, f: 'Theoretical models vs computer models in the cognitive approach', b: 'A theoretical model describes a mental process as stages or parts (e.g. the multi-store model). A computer model treats the mind like a computer (input, processing, storage, output) or simulates thought with a program.' },
      { n: 7, f: 'Cognitive neuroscience', b: 'Study of how brain structures and activity support mental processes.', src: APP },
      { n: 8, f: 'How does evolution explain behaviour, e.g. Buss (1989)?', b: 'Natural selection passes on traits that aid survival and reproduction. Buss found across 37 cultures that men valued youth in a partner and women preferred older partners.' },
    ]),
    ...sub(U4, 'issues-and-debates-9685', '3.4.2', [
      { n: 1, f: 'Hard vs soft determinism', b: 'Hard determinism: all behaviour is caused and free will is an illusion. Soft determinism: behaviour is caused, but conscious choice still operates within those limits.' },
      { n: 2, f: 'Biological vs environmental determinism', b: 'Biological: behaviour caused by genes, brain structures, hormones or neurochemistry. Environmental: behaviour caused by the environment, mainly through learning.' },
      { n: 3, f: 'Interactionist approach', b: 'Nature and nurture influence each other, so behaviour results from both together.', src: ID },
      { n: 4, f: 'Biological vs stimulus-response reductionism', b: 'Biological reductionism explains behaviour at the physical level (genes, neurotransmitters, brain areas). Stimulus-response reductionism explains it as learned links between stimuli and responses. Both ignore the cognitive level.' },
      { n: 5, f: 'What did Tolman and Honzik (1930) show?', b: 'Rats rewarded in a maze only from day 11 quickly matched rats rewarded throughout, showing learning without reinforcement and challenging stimulus-response reductionism.' },
      { n: 6, f: 'Falsifiability', b: 'A theory makes predictions that could, in principle, be shown false.', src: ID },
      { n: 7, f: 'Objectivity vs the empirical method', b: 'Objectivity: findings are not affected by the researcher\'s expectations or feelings. The empirical method: gaining knowledge through observation and measurement. A study can be empirical without being objective.' },
      { n: 8, f: 'What did the Open Science Collaboration (2015) find?', b: 'In replications of 100 studies, 97% of the originals had been significant but only 36% of the replications were, raising concerns about replicability.' },
    ]),
    ...sub(U4, 'applied-psychology-work-individual-9685', '3.4.3', [
      { n: 1, f: 'Social facilitation vs social loafing', b: 'Social facilitation: performance changes when others are present; Zajonc\'s drive theory says arousal boosts the dominant response. Social loafing: reduced individual effort when contributions are pooled.' },
      { n: 2, f: 'Risky shift vs group polarisation', b: 'Risky shift: a group decision is riskier than members\' average private decisions. Group polarisation: discussion moves a group further in whichever direction it already leaned.' },
      { n: 3, f: 'Groupthink', b: 'Desire for agreement in a cohesive group overrides realistic appraisal.', src: WORK },
      { n: 4, f: 'In-group favouritism vs out-group bias (social identity theory)', b: 'In-group favouritism: treating members of your own group better. Out-group bias: negative judgement of other groups. Tajfel\'s minimal group studies (1970, 1971) showed favouritism even in trivial groups.' },
      { n: 5, f: 'What did Ekman and Friesen (1971) find, and how did Jack et al. (2012) challenge it?', b: 'Ekman and Friesen: the Fore of Papua New Guinea matched faces to emotion stories, supporting universal expressions. Jack et al.: Eastern participants did not use distinct facial movements for six emotions.' },
      { n: 6, f: 'Why can e-mail communication cause misunderstandings?', b: 'Lack of non-verbal cues, egocentrism (difficulty judging how a reader will interpret you) and limited feedback. Kruger et al. (2005) found people overestimate how well they convey tone.' },
      { n: 7, f: 'Vroom\'s expectancy theory', b: 'Motivational force = expectancy × instrumentality × valence: effort leads to performance, performance leads to an outcome, and the outcome is valued.' },
      { n: 8, f: 'Additional decrement (AD) vs constant effect (CE) in Warr\'s vitamin model', b: 'AD features (e.g. control, variety, demands) help up to a point, then harm in excess. CE features (e.g. pay, security, equity) help, with extra adding little but doing no harm.' },
      { n: 9, f: 'Demand-control model vs job demands-resources (J D-R) model', b: 'Demand-control (Karasek, 1979): high demand plus low control is most stressful. J D-R (Demerouti et al., 2001): any demand and any resource count, with a health-impairment process and a motivational process.' },
    ]),
  ],
};
