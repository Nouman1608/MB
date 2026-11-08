/**
 * D-444 -- flashcards for AQA GCSE Psychology 8182 (first teaching 2017).
 *
 * One block per subtopic, in specification order. Card ids are
 * `<subtopic number>-<n>` and are permanent (browser progress is keyed by
 * them): add a new card with the next unused n, never renumber.
 *
 * Written from Marlbridge's own 8182 revision notes and study guides, and,
 * for the named studies those pages do not describe (Murdock, Gilchrist and
 * Nesberg, Bruner and Minturn, Penfield, Tulving, Wiles), from section 3 of the
 * specification. Neither the pages nor the specification date the named
 * studies, so no dates are given. The pages map to the papers, not to the
 * subtopics, so every card is authored. Not tiered. Plain text only (see
 * types.ts). Unicode for symbols.
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

const P1 = 'paper-1-cognition-and-behaviour-8182';
const P2 = 'paper-2-social-context-and-behaviour-8182';

export const DECK_AQA_GCSE_PSYCHOLOGY: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'gcse',
  subjectSlug: 'psychology',
  syllabusCode: '8182',
  syllabusSeries: 'first teaching 2017',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // Paper 1 – Cognition and Behaviour
    ...sub(P1, 'memory-8182', '3.1.1', [
      { n: 1, f: 'What are the three processes of memory?', b: 'Encoding (input: converting information into a usable form), storage (holding it) and retrieval (output: getting it back).' },
      { n: 2, f: 'Episodic vs semantic vs procedural memory', b: 'Episodic: memories of personal events. Semantic: facts and meanings. Procedural: how to do things, such as riding a bike.' },
      { n: 3, f: 'What are the coding, capacity and duration of STM and LTM in the multi-store model?', b: 'STM: mainly acoustic, about 5–9 items, about 18–30 seconds. LTM: mainly semantic, unlimited capacity, potentially lifelong. Attention moves information from the sensory register to STM; rehearsal moves it to LTM.' },
      { n: 4, f: 'What did Murdock\'s serial position curve study show?', b: 'When participants recalled a list of words in any order, words at the start (primacy effect) and at the end (recency effect) were recalled better than those in the middle, supporting separate STM and LTM stores.' },
      { n: 5, f: 'Why does the primacy effect happen, and why does the recency effect happen?', b: 'Primacy: early words have been rehearsed more, so they have reached LTM. Recency: the last words are still in STM when recall begins.' },
      { n: 6, f: 'What is reconstructive memory, and what is effort after meaning?', b: 'Bartlett\'s theory: memory is not a recording but is rebuilt at recall using schemas. Effort after meaning is the attempt to make unfamiliar material fit what we already know.' },
      { n: 7, f: 'What did Bartlett\'s War of the Ghosts study find?', b: 'Participants recalling an unfamiliar Native American story changed it to fit their own culture: it became shorter, unfamiliar details were left out and others were changed to more familiar ones.' },
      { n: 8, f: 'Proactive vs retroactive interference', b: 'Proactive interference: old information disrupts the recall of new information. Retroactive interference: new information disrupts the recall of old information.' },
      { n: 9, f: 'How does context affect recall?', b: 'Recall is better when the context (place or emotional state) at recall matches the context at encoding. Without the right cue, a stored memory may not be retrieved.' },
    ]),
    ...sub(P1, 'perception-8182', '3.1.2', [
      { n: 1, f: 'Sensation vs perception', b: 'Sensation is the raw information received by the senses. Perception is the brain\'s interpretation of that information.' },
      { n: 2, f: 'Name four monocular depth cues and two binocular depth cues', b: 'Monocular: height in plane, relative size, occlusion and linear perspective. Binocular: retinal disparity and convergence.' },
      { n: 3, f: 'What is Gibson\'s direct theory of perception?', b: 'A bottom-up, nature theory: the real world gives enough information for direct perception without inference, e.g. motion parallax (near objects seem to move faster than far ones as we move).' },
      { n: 4, f: 'What is Gregory\'s constructivist theory of perception?', b: 'A top-down, nurture theory: the brain uses inferences from visual cues and past experience to construct a model of reality. It explains illusions well, but less well why perception is usually fast and accurate.' },
      { n: 5, f: 'Name the four explanations of visual illusions, with an example of each', b: 'Ambiguity (Rubin\'s vase, Necker cube), misinterpreted depth cues (Müller-Lyer, Ponzo), fiction (Kanizsa triangle: edges that are not there) and size constancy (Ames room).' },
      { n: 6, f: 'What is perceptual set?', b: 'A readiness to perceive things in a particular way, influenced by factors such as culture, motivation, emotion and expectation.' },
      { n: 7, f: 'What did the Gilchrist and Nesberg study show?', b: 'Participants who had gone without food rated pictures of food as brighter than non-hungry participants did, showing that motivation affects perception.' },
      { n: 8, f: 'What did the Bruner and Minturn study show?', b: 'An ambiguous figure was seen as the letter B when shown among letters, and as the number 13 when shown among numbers, showing that expectation from context creates a perceptual set.' },
    ]),
    ...sub(P1, 'development-8182', '3.1.3', [
      { n: 1, f: 'How does the brain develop from the womb?', b: 'Simple neural structures develop first: the brain stem (autonomic functions such as heartbeat), the thalamus (sensory processing), the cerebellum (movement) and the cortex (cognition). Nature and nurture both play a role.' },
      { n: 2, f: 'Assimilation vs accommodation (Piaget)', b: 'Assimilation: fitting new information into an existing schema. Accommodation: changing a schema, or creating a new one, when new information does not fit.' },
      { n: 3, f: 'What are Piaget\'s four stages of development?', b: 'Sensorimotor (0–2, object permanence), pre-operational (2–7, egocentrism and lack of conservation), concrete operational (7–11, conservation achieved) and formal operational (11+, abstract reasoning).' },
      { n: 4, f: 'What did McGarrigle and Donaldson\'s naughty teddy study show?', b: 'More young children could conserve number when the counters were moved "accidentally" by a naughty teddy, suggesting Piaget underestimated children\'s abilities.' },
      { n: 5, f: 'What did Hughes\' policeman doll study show?', b: 'Young children could hide a boy doll where two policeman dolls could not see it, showing they could take another\'s point of view earlier than Piaget claimed, in a task that made sense to them.' },
      { n: 6, f: 'Fixed vs growth mindset (Dweck)', b: 'A fixed mindset treats ability as unchangeable, so challenge is avoided. A growth mindset treats ability as developed through effort, so challenge is welcomed. Praising effort rather than intelligence encourages a growth mindset.' },
      { n: 7, f: 'What are learning styles, and what is Willingham\'s criticism?', b: 'Learning styles classify learners, e.g. as verbalisers or visualisers. Willingham argues there is little evidence that matching teaching to a preferred style improves learning.' },
    ]),
    ...sub(P1, 'research-methods-8182', '3.1.4', [
      { n: 1, f: 'Null vs alternative hypothesis', b: 'The alternative hypothesis predicts a difference or relationship. The null hypothesis states there will be no difference or relationship.' },
      { n: 2, f: 'Independent, dependent and extraneous variables', b: 'Independent variable: what the researcher changes. Dependent variable: what is measured. Extraneous variable: any other variable that could affect the DV if not controlled.' },
      { n: 3, f: 'Random, opportunity, systematic and stratified sampling', b: 'Random: everyone has an equal chance. Opportunity: whoever is available. Systematic: every nth person from a list. Stratified: subgroups selected in the same proportions as in the target population.' },
      { n: 4, f: 'Independent groups vs repeated measures vs matched pairs', b: 'Independent groups: different participants in each condition. Repeated measures: the same participants do all conditions. Matched pairs: different but matched participants in each condition.' },
      { n: 5, f: 'Laboratory vs field vs natural experiment', b: 'Laboratory: controlled, artificial setting. Field: the IV is manipulated in a natural setting. Natural: the IV varies naturally and is not manipulated by the researcher.' },
      { n: 6, f: 'What is counterbalancing?', b: 'In a repeated measures design, half the participants do condition A then B and half do B then A, to balance out order effects such as practice and fatigue.' },
      { n: 7, f: 'What is inter-observer reliability?', b: 'The extent to which two or more observers using the same behaviour categories record the same results. High agreement shows the observation is reliable.' },
      { n: 8, f: 'Primary vs secondary data', b: 'Primary data are collected first-hand by the researcher for the study. Secondary data were collected by someone else for another purpose, e.g. government statistics.' },
      { n: 9, f: 'What are the characteristics of a normal distribution?', b: 'A symmetrical, bell-shaped curve in which the mean, median and mode are the same and most scores cluster around the middle.' },
      { n: 10, f: 'Name the main ethical issues in the BPS guidelines', b: 'Informed consent, deception, protection from harm, right to withdraw, confidentiality and debriefing.' },
    ]),

    // Paper 2 – Social Context and Behaviour
    ...sub(P2, 'social-influence-8182', '3.2.1', [
      { n: 1, f: 'What did Asch\'s study of conformity find?', b: 'When confederates gave an obviously wrong answer on a line-judgement task, participants conformed on about a third of critical trials, and about three-quarters conformed at least once.' },
      { n: 2, f: 'Which social and dispositional factors affect conformity?', b: 'Social: group size, anonymity (conformity falls when answers are private) and task difficulty (conformity rises). Dispositional: personality (e.g. confidence) and expertise.' },
      { n: 3, f: 'What is Milgram\'s Agency theory?', b: 'People obey when they see themselves as agents carrying out an authority figure\'s wishes rather than acting autonomously. Agency, authority, culture and proximity all affect obedience.' },
      { n: 4, f: 'What is Adorno\'s Authoritarian Personality?', b: 'A dispositional explanation of obedience: people raised by strict, harsh parents develop rigid thinking, respect for authority and hostility to those of lower status, so are more likely to obey.' },
      { n: 5, f: 'What did Piliavin\'s subway study find?', b: 'A victim who collapsed carrying a cane was helped on almost all trials, while a victim who seemed drunk was helped on about half: the cost of helping affects bystander intervention.' },
      { n: 6, f: 'Which social and dispositional factors affect bystander intervention?', b: 'Social: the presence of others (diffusion of responsibility) and the cost of helping. Dispositional: similarity to the victim and expertise, e.g. first-aid training.' },
      { n: 7, f: 'Social loafing vs deindividuation in crowds', b: 'Social loafing: people put in less effort in a group than alone. Deindividuation: people lose their sense of personal identity and responsibility in a crowd, which can lead to antisocial (or prosocial) behaviour.' },
    ]),
    ...sub(P2, 'language-thought-communication-8182', '3.2.2', [
      { n: 1, f: 'Piaget vs the Sapir-Whorf hypothesis on language and thought', b: 'Piaget: language depends on thought (thought develops first). Sapir-Whorf: thinking depends on language (language shapes thought). They are opposite positions.' },
      { n: 2, f: 'How can language affect our view of the world?', b: 'The Sapir-Whorf hypothesis predicts that the words a culture has affect how its members recall events and recognise colours, e.g. variation in colour recognition in some Native American cultures.' },
      { n: 3, f: 'What did Von Frisch\'s bee study show?', b: 'Bees communicate the direction and distance of a food source through a waggle dance. This is animal communication for survival (food), limited to a fixed set of signals about the present.' },
      { n: 4, f: 'How does human communication differ from animal communication?', b: 'Animal communication has limited functions: survival, reproduction, territory and food. Human language can discuss things not present, plan ahead and talk about past and future events, and can produce endless new sentences.' },
      { n: 5, f: 'What are the functions of eye contact?', b: 'Regulating the flow of conversation, signalling attraction and expressing emotion.' },
      { n: 6, f: 'Open vs closed posture, postural echo and touch', b: 'Open posture (uncrossed arms and legs) signals acceptance; closed posture signals rejection or defensiveness. Postural echo is copying another\'s posture, signalling rapport. Touch can signal support or status.' },
      { n: 7, f: 'How does personal space vary?', b: 'It varies with culture (some cultures stand closer), status (people keep more distance from those of higher status) and gender (e.g. women often sit closer to one another than men do).' },
      { n: 8, f: 'Darwin\'s evolutionary theory vs Yuki\'s study of emoticons', b: 'Darwin: non-verbal signals are innate and evolved because they aid survival (also seen in neonates and the sensory deprived). Yuki: Japanese and American people focused on different facial areas (eyes vs mouth) in emoticons, so some non-verbal behaviour is learned.' },
    ]),
    ...sub(P2, 'brain-and-neuropsychology-8182', '3.2.3', [
      { n: 1, f: 'Central vs peripheral nervous system, and somatic vs autonomic', b: 'Central: brain and spinal cord. Peripheral: all other nerves, divided into the somatic system (voluntary movement and senses) and the autonomic system (involuntary functions such as heart rate).' },
      { n: 2, f: 'What is the James-Lange theory of emotion?', b: 'The physiological response (e.g. raised heart rate) comes first, and the emotion (e.g. fear) is the brain\'s interpretation of that bodily arousal. Exam trap: it is not the emotion that causes the arousal.' },
      { n: 3, f: 'Sensory vs relay vs motor neurons', b: 'Sensory neurons carry messages from the senses to the CNS. Relay neurons pass messages within the CNS. Motor neurons carry messages from the CNS to muscles and glands.' },
      { n: 4, f: 'What happens in synaptic transmission?', b: 'Neurotransmitters are released into the synapse and bind to receptors on the next neuron, which may be excited (more likely to fire) or inhibited (less likely). Leftover neurotransmitter is taken back up (reuptake).' },
      { n: 5, f: 'What is Hebb\'s theory of learning and neuronal growth?', b: 'When neurons fire together repeatedly, the connections between them strengthen, forming cell assemblies. Learning physically changes the brain.' },
      { n: 6, f: 'What are the basic functions of the four lobes and the cerebellum?', b: 'Frontal: thinking, planning and movement (motor area). Parietal: touch and body sensation (somatosensory area). Temporal: hearing and memory. Occipital: vision. Cerebellum: balance and coordination.' },
      { n: 7, f: 'What did Penfield\'s study of the interpretive cortex find?', b: 'Electrically stimulating the temporal lobe of conscious patients during brain surgery made some recall vivid past experiences, suggesting this area is involved in memory.' },
      { n: 8, f: 'What did Tulving\'s gold memory study show?', b: 'Using a radioactive gold tracer to scan blood flow, episodic memories were linked to more activity at the front of the cortex and semantic memories to the back, suggesting they are stored in different areas.' },
      { n: 9, f: 'CT vs PET vs fMRI scans', b: 'CT: X-rays build a picture of brain structure. PET: a radioactive tracer shows active areas. fMRI: measures changes in blood oxygen to show active areas, with no radiation.' },
    ]),
    ...sub(P2, 'psychological-problems-8182', '3.2.4', [
      { n: 1, f: 'How has the incidence of significant mental health problems changed over time?', b: 'Recorded incidence has risen, linked to the challenges of modern living (e.g. isolation) and to greater recognition of mental health problems with less social stigma, so more people seek help.' },
      { n: 2, f: 'Unipolar depression vs bipolar depression vs sadness', b: 'Sadness is a normal, temporary response to events. Unipolar depression is persistent low mood with other symptoms. Bipolar depression involves swings between depression and mania.' },
      { n: 3, f: 'How is unipolar depression diagnosed using the ICD?', b: 'By the number and severity of symptoms, including low mood, reduced energy levels, changes in sleep patterns and appetite, and a decrease in self-confidence.' },
      { n: 4, f: 'Biological vs psychological explanation of depression', b: 'Biological (nature): an imbalance of neurotransmitters such as low serotonin. Psychological (nurture): negative schemas and negative attributions about oneself and events.' },
      { n: 5, f: 'Antidepressants vs CBT for depression', b: 'Antidepressants increase neurotransmitter levels such as serotonin (reductionist; quick but with side effects). CBT challenges negative thoughts (more holistic; longer-lasting but needs effort). They can be used together.' },
      { n: 6, f: 'What did Wiles\' study of CBT find?', b: 'Patients whose depression had not responded to antidepressants improved more when CBT was added to their medication than with medication alone.' },
      { n: 7, f: 'Addiction (dependence) vs substance misuse', b: 'Substance misuse is occasional harmful use. Addiction (dependence syndrome in the ICD) includes a strong desire to use despite harm, difficulty controlling use, and giving the substance higher priority than other activities.' },
      { n: 8, f: 'What did Kaij\'s twin study find about alcohol abuse?', b: 'Concordance rates for alcohol abuse were higher in identical (MZ) than non-identical (DZ) twins, supporting a genetic vulnerability to addiction.' },
      { n: 9, f: 'Aversion therapy vs self-management programmes for addiction', b: 'Aversion therapy pairs the substance with an unpleasant stimulus (e.g. a drug that causes vomiting with alcohol). Self-management programmes include self-help groups and 12-step recovery programmes.' },
    ]),
  ],
};
