/**
 * D-444 -- flashcards for OxfordAQA International GCSE Psychology 9218
 * (Version 1.1).
 *
 * One block per subtopic, in specification order. Card ids are
 * `<subtopic number>-<n>` and are permanent (browser progress is keyed by
 * them): add a new card with the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (conformity and
 *               obedience, mapped to 3.2.2); origin 'revision-notes'.
 *
 * Written from Marlbridge's own 9218 revision notes and study guides. 3.1.4
 * and 3.2.4 Research methods share one body of content in the specification:
 * 3.1.4 carries methods and design, 3.2.4 carries data handling. 3.2.1
 * Communication and 3.2.3 Mental health have no Marlbridge page yet and are
 * written from section 3.2 of the specification. Neither the pages nor the
 * specification date the named studies, so no dates are given. Not tiered.
 * Plain text only (see types.ts). Unicode for symbols.
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

const CO = 'igcse-oxfordaqa-psychology-conformity-obedience-revision-notes';

const P1 = 'paper-1-cognition-and-behaviour-9218';
const P2 = 'paper-2-social-context-and-behaviour-9218';

export const DECK_OXFORDAQA_IGCSE_PSYCHOLOGY: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'igcse',
  subjectSlug: 'psychology',
  syllabusCode: '9218',
  syllabusSeries: 'Version 1.1',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // Paper 1 – Cognition and Behaviour
    ...sub(P1, 'memory-9218', '3.1.1', [
      { n: 1, f: 'What are the three processes of memory?', b: 'Encoding (putting information into memory), storage (holding it) and retrieval (getting it back).' },
      { n: 2, f: 'Episodic vs semantic vs procedural memory', b: 'Episodic: memories of events. Semantic: facts and meanings. Procedural: skills, such as how to ride a bike.' },
      { n: 3, f: 'What are the capacity and duration of STM in the multi-store model?', b: 'About 5–9 items for about 18–30 seconds without rehearsal. Attention moves information from the sensory register to STM; rehearsal moves it to LTM, which is potentially unlimited.' },
      { n: 4, f: 'What did Murdock\'s serial position curve study show?', b: 'Words from the start (primacy effect) and end (recency effect) of a list were recalled far better than words from the middle, supporting separate short-term and long-term stores.' },
      { n: 5, f: 'What are the four components of the working memory model?', b: 'Central executive (limited-capacity attention controller), phonological loop (brief acoustic storage), visuo-spatial sketchpad (visual and spatial information) and episodic buffer (links the others with LTM).' },
      { n: 6, f: 'What do dual processing tasks (Baddeley and Hitch) show?', b: 'Two tasks using different components (e.g. one verbal, one visual) can be done together well, but two using the same component interfere, so STM has separate components.' },
      { n: 7, f: 'What is effort after meaning in Bartlett\'s reconstructive memory?', b: 'When recalling, people fill gaps and change unfamiliar details so the memory makes sense to them. In War of the Ghosts, unfamiliar details were left out and the story was shortened and changed to fit the participants\' culture.' },
      { n: 8, f: 'Interference vs retrieval failure', b: 'Interference: other memories disrupt recall (proactive: old disrupts new; retroactive: new disrupts old). Retrieval failure: the memory is stored but the cue needed to access it, such as the original context, is missing.' },
    ]),
    ...sub(P1, 'perception-9218', '3.1.2', [
      { n: 1, f: 'Sensation vs perception', b: 'Sensation is the raw data received by the senses. Perception is the brain\'s interpretation of that data.' },
      { n: 2, f: 'Name the monocular and binocular depth cues', b: 'Monocular: height in plane, relative size, occlusion and linear perspective. Binocular: retinal disparity and convergence.' },
      { n: 3, f: 'Gibson\'s direct theory vs Gregory\'s constructivist theory', b: 'Gibson: bottom-up; the real world gives enough information to perceive directly (e.g. motion parallax). Gregory: top-down; the brain infers from cues and past experience to construct a model of reality.' },
      { n: 4, f: 'Which explanation fits each illusion: Ponzo, Müller-Lyer, Rubin\'s vase, Kanizsa triangle, Ames Room?', b: 'Ponzo and Müller-Lyer: misinterpreted depth cues. Rubin\'s vase (and the Necker cube): ambiguity. Kanizsa triangle: fiction. Ames Room: size constancy and misread depth.' },
      { n: 5, f: 'What did Gilchrist and Nesberg find?', b: 'Hungrier participants rated pictures of food as brighter than well-fed participants did, showing that motivation affects perception.' },
      { n: 6, f: 'What did Bruner and Minturn find?', b: 'The same ambiguous figure was read as "B" among letters and as "13" among numbers, showing that expectation from context affects perception.' },
      { n: 7, f: 'What did Kunst-Wilson and Zajonc find?', b: 'Participants preferred irregular shapes they had been shown too briefly to recognise over new shapes, even though they could not say which they had seen: emotion (liking) can affect perception without awareness.' },
      { n: 8, f: 'What did Nisbett and Miyamoto show about culture and perception?', b: 'People from different cultures differed in what they attended to in a scene: Western participants focused more on central objects and East Asian participants more on the context, showing culture affects perception.' },
    ]),
    ...sub(P1, 'biopsychology-9218', '3.1.3', [
      { n: 1, f: 'Somatic vs autonomic nervous system', b: 'Both are parts of the peripheral nervous system. The somatic system controls voluntary movement and carries sensory information. The autonomic system controls internal organs involuntarily, including the fight or flight response.' },
      { n: 2, f: 'What does the endocrine system do?', b: 'Glands release hormones into the bloodstream to act on target organs. In fight or flight, the adrenal glands release adrenaline, raising heart rate and breathing.' },
      { n: 3, f: 'What does the James-Lange theory of emotion say?', b: 'Bodily arousal comes first, and the emotion is our interpretation of it: we feel afraid because we notice our heart racing, not the other way round.' },
      { n: 4, f: 'What happens in synaptic transmission?', b: 'Neurotransmitters are released from the presynaptic neuron, cross the gap and bind to receptors, causing excitation or inhibition of the next neuron. They are then taken back up (reuptake).' },
      { n: 5, f: 'What is Hebb\'s theory of learning and neuronal growth?', b: 'Neurons that repeatedly fire together form stronger connections (cell assemblies), so learning changes the structure of the brain.' },
      { n: 6, f: 'Broca\'s area vs Wernicke\'s area', b: 'Broca\'s area (frontal lobe) is linked to speech production. Wernicke\'s area (temporal lobe) is linked to language comprehension.' },
      { n: 7, f: 'What did Penfield\'s study of the interpretive cortex find?', b: 'Electrically stimulating the temporal lobe of conscious patients during brain surgery led some to report vivid memories of past experiences.' },
      { n: 8, f: 'CT vs PET vs fMRI', b: 'CT: X-rays show brain structure. PET: a radioactive tracer shows metabolic activity. fMRI: changes in blood oxygen show which areas are active. Tulving\'s gold memory study used a tracer to show episodic and semantic memory in different regions.' },
    ]),
    ...sub(P1, 'research-methods-9218', '3.1.4', [
      { n: 1, f: 'Independent, dependent and extraneous variables', b: 'IV: what the researcher changes. DV: what is measured. Extraneous variables: other variables that could affect the DV and must be controlled.' },
      { n: 2, f: 'Random vs opportunity vs systematic vs stratified sampling', b: 'Random: equal chance for everyone. Opportunity: whoever is available (quick but unrepresentative). Systematic: every nth person. Stratified: subgroups in proportion to the target population.' },
      { n: 3, f: 'What are the risks of a repeated measures design?', b: 'Order effects (practice may improve, or fatigue and boredom worsen, performance in the later condition) and demand characteristics, as doing every condition makes the aim easier to guess. Counterbalancing reduces order effects.' },
      { n: 4, f: 'Laboratory vs field experiment: one strength and one weakness each', b: 'Laboratory: high control, so cause can be established; but artificial, with low ecological validity. Field: more realistic; but less control over extraneous variables.' },
      { n: 5, f: 'What is inter-observer reliability?', b: 'The level of agreement between two or more observers using the same behaviour categories. Agreement is improved by clearly defined categories and training.' },
      { n: 6, f: 'What does a scatter diagram show, and what is the main weakness of a correlation?', b: 'The association between two variables (positive, negative or none). A correlation cannot show cause and effect.' },
      { n: 7, f: 'When is deception acceptable under the BPS guidelines?', b: 'Only where it is scientifically necessary and the harm is minimal, and participants are fully debriefed and offered the right to withdraw their data.' },
    ]),

    // Paper 2 – Social Context and Behaviour
    ...sub(P2, 'communication-9218', '3.2.1', [
      { n: 1, f: 'Piaget vs the Sapir-Whorf hypothesis', b: 'Piaget: language depends on thought. Sapir-Whorf: thinking depends on language. They are opposite claims about which comes first.' },
      { n: 2, f: 'What evidence links language to how people see the world?', b: 'Variation in the recall of events and the recognition of colours between cultures with different vocabularies, e.g. in some Native American cultures, supports the Sapir-Whorf hypothesis.' },
      { n: 3, f: 'What did Von Frisch\'s bee study show?', b: 'Bees perform a waggle dance that tells other bees the direction and distance of a food source: animal communication serving a survival function (food).' },
      { n: 4, f: 'What can human communication do that animal communication cannot?', b: 'Animal communication is limited to survival, reproduction, territory and food. Humans can plan ahead, discuss future and past events and things not present, and create new messages.' },
      { n: 5, f: 'What are the functions of eye contact?', b: 'Regulating the flow of conversation, signalling attraction and expressing emotion.' },
      { n: 6, f: 'What is postural echo?', b: 'Copying the posture of the person you are with, which usually signals rapport and agreement. Open and closed posture and touch are other forms of body language.' },
      { n: 7, f: 'How does personal space differ between groups?', b: 'It varies with culture (some cultures prefer closer distances), status (more distance from higher-status people) and gender.' },
      { n: 8, f: 'Darwin\'s evolutionary theory vs Yuki\'s study of emoticons', b: 'Darwin: non-verbal communication is innate and adaptive (supported by its presence in neonates and the sensory deprived). Yuki: emoticon styles differed between Japanese and American people (eyes vs mouth), so some is learned.' },
    ]),
    ...sub(P2, 'social-influences-9218', '3.2.2', [
      { n: 1, f: 'Conformity vs obedience', b: 'Conformity: changing behaviour to match a group\'s norms, usually without a direct instruction. Obedience: changing behaviour in direct response to an order from an authority figure.', src: CO },
      { n: 2, f: 'How do group size, task difficulty and anonymity affect conformity?', b: 'Conformity rises as the unanimous majority grows (up to a point) and when the task is more difficult. Anonymity reduces conformity, because there is less public pressure to agree.', src: CO },
      { n: 3, f: 'What did Asch and Milgram find?', b: 'Asch: participants often gave the same wrong line judgement as a unanimous group of confederates. Milgram: around 65% of participants obeyed to the maximum 450 volts.' },
      { n: 4, f: 'What is the agentic state?', b: 'Milgram\'s term for seeing oneself as an instrument of another person\'s wishes, which removes the feeling of personal responsibility.', src: CO },
      { n: 5, f: 'Name the four elements of Milgram\'s Agency theory', b: 'Agency, authority, culture and proximity.', src: CO },
      { n: 6, f: 'What did Latané and Darley\'s smoke study show?', b: 'Participants were much less likely to report smoke filling a room when sitting with passive others than when alone: the presence of others reduces bystander intervention.' },
      { n: 7, f: 'What did Levine\'s football supporter study show?', b: 'Manchester United fans were more likely to help an injured stranger wearing a Manchester United shirt than one in a rival or plain shirt: similarity to the victim increases helping.' },
      { n: 8, f: 'What social factors affect behaviour in crowds?', b: 'Social loafing (less effort in a group), deindividuation (loss of personal identity and responsibility) and culture. Dispositional factors include personality and morality.' },
    ]),
    ...sub(P2, 'mental-health-9218', '3.2.3', [
      { n: 1, f: 'Why has the recorded incidence of mental health problems changed over time?', b: 'Increased challenges of modern living (e.g. isolation), and greater recognition of mental health problems with less social stigma, so more people are diagnosed and seek help.' },
      { n: 2, f: 'Give individual and social effects of significant mental health problems', b: 'Individual: damage to relationships, difficulty coping with daily life, harm to physical wellbeing. Social: need for more social care, possible increase in crime, costs to the economy.' },
      { n: 3, f: 'What are obsessions and compulsions in OCD?', b: 'Obsessions: persistent, unwanted thoughts, images or urges that cause anxiety. Compulsions: repetitive behaviours or mental acts carried out to reduce that anxiety. The ICD sets out the diagnostic criteria.' },
      { n: 4, f: 'Biological vs cognitive explanations of OCD', b: 'Biological: genetic factors and brain chemistry, such as low serotonin. Cognitive: faulty thinking, e.g. over-estimating the danger of intrusive thoughts and feeling responsible for preventing harm.' },
      { n: 5, f: 'How is CBT used to treat OCD?', b: 'The patient learns to challenge the faulty beliefs behind obsessions and, through exposure, resists carrying out compulsions, so anxiety falls without them. Kearns\'s study is the specification\'s evidence on its effectiveness.' },
      { n: 6, f: 'What are the main characteristics of PTSD?', b: 'After a traumatic event: re-experiencing it (flashbacks, nightmares), avoiding reminders, and a persistent sense of current threat such as hypervigilance. The ICD sets out the diagnostic criteria.' },
      { n: 7, f: 'What is dual representation theory of PTSD?', b: 'A cognitive explanation (Brewin): traumatic memories are stored in two forms, sensory-based memories that are triggered involuntarily as flashbacks, and verbally accessible memories that can be recalled deliberately. In PTSD they are poorly linked.' },
      { n: 8, f: 'What is prolonged exposure therapy for PTSD?', b: 'The patient repeatedly recalls the trauma in detail and gradually faces safe reminders they have been avoiding, so fear reduces. Eftekhari\'s study found it reduced PTSD symptoms in veterans.' },
    ]),
    ...sub(P2, 'research-methods-paper2-9218', '3.2.4', [
      { n: 1, f: 'Quantitative vs qualitative data', b: 'Quantitative data are numerical (scores, counts), easy to analyse and compare. Qualitative data are descriptive (words, meanings), richer but harder to analyse.' },
      { n: 2, f: 'Primary vs secondary data', b: 'Primary data are collected first-hand by the researcher. Secondary data were collected by someone else, e.g. official statistics or published studies.' },
      { n: 3, f: 'Mean, median, mode and range', b: 'Mean: total divided by the number of scores. Median: the middle score in order. Mode: the most frequent score. Range: highest minus lowest score.' },
      { n: 4, f: 'Find the mean, median, mode and range of 4, 6, 6, 9, 10', b: 'Mean = 35 ÷ 5 = 7. Median = 6 (the middle score). Mode = 6. Range = 10 − 4 = 6.' },
      { n: 5, f: 'Bar chart vs histogram', b: 'A bar chart shows separate categories (discrete data), with gaps between bars. A histogram shows continuous data in intervals, with no gaps.' },
      { n: 6, f: 'What are the characteristics of a normal distribution?', b: 'A symmetrical bell-shaped curve, with the mean, median and mode at the same central point and most scores close to the middle.' },
    ]),
  ],
};
