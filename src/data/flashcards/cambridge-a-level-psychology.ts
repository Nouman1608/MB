/**
 * D-444 -- flashcards for Cambridge International AS & A Level Psychology 9990
 * (2024-2026).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 * The syllabus numbers neither the four AS approaches nor the two research-
 * methodology headings, so those six subtopics carry an empty number in
 * syllabus-topics.ts and their card ids are '-<n>'. To keep the ids unique,
 * each of those subtopics uses its own block of n:
 *   Biological 1-9, Cognitive 11-19, Learning 21-29, Social 31-39,
 *   Research methods 41-59, Methodological concepts 61-89.
 *
 * Written from Marlbridge's own 9990 pages (approaches, research methods and
 * specialist-options notes and guides) and, for the specialist-option content
 * those pages describe only in outline, from section 3 of the 2024-2026
 * syllabus: researcher names and dates are those of the syllabus. Not tiered.
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

const CORE = 'paper-1-approaches-issues-and-debates-9990';
const RM = 'paper-2-research-methods-9990';
const CLIN = 'paper-3-specialist-options-1-9990';
const CONS = 'consumer-psychology-9990';
const HLTH = 'health-psychology-9990';
const ORG = 'organisational-psychology-9990';

export const DECK_CAMBRIDGE_A_LEVEL_PSYCHOLOGY: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'a-level',
  subjectSlug: 'psychology',
  syllabusCode: '9990',
  syllabusSeries: '2024-2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 The core studies
    ...sub(CORE, 'biological-approach-9990', '', [
      { n: 1, f: 'What are the main assumptions of the biological approach?', b: 'Behaviour, cognitions and emotions can be explained by the working of the brain and the effects of hormones, genetics and evolution. Similarities and differences between people can be understood in terms of biological factors and how they interact with other factors.' },
      { n: 2, f: 'Which three core studies belong to the biological approach?', b: 'Dement and Kleitman (1957) on sleep and dreams; Hassett et al. (2008) on monkey toy preferences; Hölzel et al. (2011) on mindfulness and brain scans.' },
      { n: 3, f: 'What did Dement and Kleitman (1957) investigate, and with which techniques?', b: 'The relationship between rapid eye movements (REM) and dreaming. They used EEG recordings of REM and non-REM sleep, experimental and correlational methods, and an interview technique when participants were woken.' },
      { n: 4, f: 'What was the main finding of Dement and Kleitman (1957)?', b: 'Participants woken during REM sleep usually reported a dream, while those woken during non-REM sleep rarely did. Estimates of dream length related to how long REM had lasted, supporting REM as an objective indicator of dreaming.' },
      { n: 5, f: 'Why did Hassett et al. (2008) study rhesus monkeys rather than children?', b: 'Monkeys are not exposed to human gender socialisation, so their toy preferences are assumed to be more biologically (hormonally) controlled. Children\'s data came from another study for comparison.' },
      { n: 6, f: 'What did Hassett et al. (2008) find about toy preferences?', b: 'Male monkeys strongly preferred wheeled (stereotypically masculine) toys to plush toys, while females interacted with both kinds more evenly, paralleling children\'s sex differences and suggesting a role for hormones as well as socialisation.' },
      { n: 7, f: 'What did Hölzel et al. (2011) study, and how?', b: 'Whether mindfulness practice changes brain structure. An experiment with a longitudinal design compared an 8-week mindfulness (MBSR) group with a control group, using MRI scans before and after, plus self-reports and correlations.' },
      { n: 8, f: 'What did Hölzel et al. (2011) conclude?', b: 'Mindfulness practice was associated with increases in grey matter density in brain regions linked to learning, memory and emotion regulation (including the left hippocampus) in the mindfulness group but not the controls, supporting localisation of function and brain plasticity.' },
    ]),
    ...sub(CORE, 'cognitive-approach-9990', '', [
      { n: 11, f: 'What are the main assumptions of the cognitive approach?', b: 'Information is processed through the same route in all humans (input – process – output), like a computer. People differ in their cognitive processing (attention, language, thinking, memory), and these processes help explain behaviour and emotion.' },
      { n: 12, f: 'Which three core studies belong to the cognitive approach?', b: 'Andrade (2010) on doodling; Baron-Cohen et al. (2001) on the Eyes Test; Pozzulo et al. (2011) on line-ups.' },
      { n: 13, f: 'What did Andrade (2010) investigate, and what did she find?', b: 'Whether doodling aids concentration and memory, in a laboratory experiment. Participants who shaded shapes while listening to a dull telephone message recalled more of it than those who did not doodle, suggesting doodling reduces daydreaming.' },
      { n: 14, f: 'What did Baron-Cohen et al. (2001) aim to do?', b: 'Revise and improve the original 1997 Reading the Mind in the Eyes Test, a measure of theory of mind (social sensitivity), and test adults including those with Asperger syndrome or high-functioning autism.' },
      { n: 15, f: 'What did Baron-Cohen et al. (2001) find?', b: 'Adults with Asperger syndrome or high-functioning autism scored lower on the revised Eyes Test than the comparison groups, and Eyes Test scores correlated negatively with Autism Spectrum Quotient scores.' },
      { n: 16, f: 'What did Pozzulo et al. (2011) investigate?', b: 'Factors affecting memory for target faces in line-ups, comparing children and adults with cartoon and human faces in a laboratory experiment, with interviews and questionnaires. The focus was false positive responses in target-absent line-ups.' },
      { n: 17, f: 'What is a false positive response in a line-up, and who made more of them in Pozzulo et al. (2011)?', b: 'Choosing someone from a target-absent line-up, where the culprit is not present. Children made more false positive identifications than adults, which matters for how child eyewitnesses are questioned.' },
    ]),
    ...sub(CORE, 'learning-approach-9990', '', [
      { n: 21, f: 'What are the main assumptions of the learning approach?', b: 'We begin life as a blank slate, and experiences and interactions with the environment shape behaviour in directly observable ways. We learn through operant conditioning, classical conditioning and social learning, understood using the stimulus-response model.' },
      { n: 22, f: 'What did Bandura et al. (1961) test, and how?', b: 'Social learning theory: whether children imitate aggression they see in an adult model. Nursery-school children watched an aggressive model, a non-aggressive model or no model, then were observed playing with toys including a Bobo doll.' },
      { n: 23, f: 'What did Bandura et al. (1961) find?', b: 'Children who saw the aggressive model imitated much more physical and verbal aggression than the other groups. Boys showed more imitative physical aggression than girls, and same-sex models tended to be imitated more.' },
      { n: 24, f: 'What did Fagen et al. (2014) study?', b: 'Positive reinforcement training to teach working elephants in Nepal a trunk wash (used to test for tuberculosis), as an alternative to traditional training. Success was measured by observation with a behavioural checklist.' },
      { n: 25, f: 'What are shaping and behavioural chaining, as in Fagen et al. (2014)?', b: 'Shaping reinforces successive approximations to the target behaviour. Chaining links learned steps into a sequence (here, the steps of the trunk wash). A whistle acted as a secondary reinforcer, paired with food as the primary reinforcer.' },
      { n: 26, f: 'Exam trap: is negative reinforcement the same as punishment?', b: 'No. Negative reinforcement removes something unpleasant and so increases a behaviour. Punishment adds something unpleasant and decreases a behaviour.' },
      { n: 27, f: 'What did Saavedra and Silverman (2002) study, and which method did they use?', b: 'A child with a specific phobia of buttons. A case study using interviews, various scales and observations. The treatment targeted disgust as well as fear, using evaluative learning alongside exposure.' },
      { n: 28, f: 'What did Saavedra and Silverman (2002) conclude?', b: 'Treatment that addressed the child\'s disgust responses (imagery-based evaluative work with exposure) reduced his distress more than exposure aimed at fear alone, and the improvement was maintained at follow-up.' },
    ]),
    ...sub(CORE, 'social-approach-9990', '', [
      { n: 31, f: 'What are the main assumptions of the social approach?', b: 'Behaviour, cognitions and emotions are influenced by social contexts, social environments and groups, and by the actual, implied or imagined presence of others.' },
      { n: 32, f: 'What did Milgram (1963) investigate?', b: 'The conflict between obedience to authority and personal conscience: how far a person would go in obeying an instruction to harm someone. It considered dispositional and situational hypotheses.' },
      { n: 33, f: 'What did Milgram (1963) find?', b: 'All 40 male participants gave shocks to at least 300 volts, and 26 of the 40 (65%) continued to the maximum 450 volts, many showing signs of extreme tension.' },
      { n: 34, f: 'Exam trap: did Milgram\'s (1963) main study have an independent variable?', b: 'No. Obedience was measured as a dependent variable, but there was no independent variable in the main study. In this version the teacher received no voice feedback from the learner.' },
      { n: 35, f: 'What did Perry et al. (2015) investigate?', b: 'How oxytocin and empathy affect personal space (interpersonal distance), comparing oxytocin with a placebo. Experiment 1 used a computerised Comfortable Interpersonal Distance Scale; Experiment 2 asked participants to choose between pictures of rooms.' },
      { n: 36, f: 'What did Perry et al. (2015) conclude?', b: 'Oxytocin made highly empathic individuals prefer closer interpersonal distance, but did not have that effect in low-empathy individuals: the effect of the hormone depended on an individual difference.' },
      { n: 37, f: 'What did Piliavin et al. (1969) investigate, and how?', b: 'Bystander behaviour in a real-life emergency: a field experiment on a New York subway train in which a confederate collapsed, appearing either drunk or ill (carrying a cane), with observers recording who helped.' },
      { n: 38, f: 'What did Piliavin et al. (1969) find?', b: 'The cane (ill) victim received spontaneous help on almost all trials and the drunk victim on about half. There was little evidence of diffusion of responsibility; the findings were explained by an arousal: cost-reward model.' },
      { n: 39, f: 'Which core studies raise the use of children and of animals in research?', b: 'Children: Bandura et al., Pozzulo et al., Saavedra and Silverman. Animals: Hassett et al. (rhesus monkeys) and Fagen et al. (working elephants).' },
    ]),

    // 2 Research methodology
    ...sub(RM, 'research-methods-as-9990', '', [
      { n: 41, f: 'Laboratory experiment vs field experiment', b: 'Both manipulate an IV and measure a DV. A laboratory experiment is in a controlled, artificial setting (high control, lower ecological validity). A field experiment is in the participants\' natural setting (higher ecological validity, less control, consent harder).' },
      { n: 42, f: 'Independent measures, repeated measures and matched pairs designs', b: 'Independent measures: different participants in each condition. Repeated measures: the same participants do every condition. Matched pairs: different participants, matched on relevant characteristics, one of each pair in each condition.' },
      { n: 43, f: 'What is counterbalancing, and what problem does it address?', b: 'Splitting participants so that half do condition A then B and half do B then A. It addresses order effects (practice and fatigue) in a repeated measures design.' },
      { n: 44, f: 'Open vs closed questions in self-reports', b: 'Open questions let participants answer in their own words, giving rich qualitative data that is harder to compare. Closed questions give fixed choices, producing quantitative data that is easy to analyse but may force answers.' },
      { n: 45, f: 'Structured, unstructured and semi-structured interviews', b: 'Structured: fixed questions in a fixed order. Unstructured: a topic but no set questions, following the conversation. Semi-structured: some set questions plus freedom to ask follow-ups.' },
      { n: 46, f: 'What is a case study?', b: 'A detailed study of a single participant or unit (such as one family or institution), often using several techniques. Rich, in-depth data, but hard to generalise and open to researcher bias.' },
      { n: 47, f: 'Name the four pairs of observation types', b: 'Overt or covert; participant or non-participant; structured or unstructured; naturalistic or controlled.' },
      { n: 48, f: 'What does a correlation show, and what can it not show?', b: 'The direction (positive or negative) and strength of the relationship between two measured co-variables. It cannot show cause and effect.' },
      { n: 49, f: 'What is a longitudinal study?', b: 'A study of the same participants over a long period, measuring them repeatedly to track change (e.g. Hölzel et al. used an experiment with a longitudinal design). Shows development over time, but participants may drop out.' },
    ]),
    ...sub(RM, 'methodological-concepts-as-9990', '', [
      { n: 61, f: 'Null vs alternative hypothesis', b: 'The alternative hypothesis predicts a difference or relationship. The null hypothesis states there will be no difference or relationship (any difference found is due to chance).' },
      { n: 62, f: 'Directional vs non-directional hypothesis', b: 'A directional (one-tailed) hypothesis states which way the difference or relationship will go. A non-directional (two-tailed) hypothesis predicts a difference or relationship without saying which way.' },
      { n: 63, f: 'What does it mean to operationalise a variable?', b: 'To define the variable precisely in terms of how it will be manipulated or measured, e.g. "memory" operationalised as the number of words correctly recalled out of 20.' },
      { n: 64, f: 'Participant variables vs situational variables', b: 'Participant variables are differences between participants (e.g. age, mood, ability). Situational variables are features of the setting (e.g. noise, time of day). Uncontrolled, either can confound the results.' },
      { n: 65, f: 'Opportunity, random and volunteer sampling', b: 'Opportunity: whoever is available. Random: every member of the population has an equal chance of selection. Volunteer (self-selecting): people respond to an advertisement. Each affects how far results generalise.' },
      { n: 66, f: 'Name the ethical guidelines for human participants', b: 'Minimising harm (and maximising benefit), valid consent including informed consent, right to withdraw, lack of deception, confidentiality, privacy and debriefing.' },
      { n: 67, f: 'Name the ethical guidelines for animals in research', b: 'Minimising harm (and maximising benefit), replacement, species, numbers, and procedures: pain, suffering and distress; housing; reward, deprivation and aversive stimuli.' },
      { n: 68, f: 'Validity vs reliability', b: 'Validity: whether a study measures what it claims to (including ecological validity, demand characteristics, generalisability). Reliability: consistency, e.g. inter-rater and test-retest. A study can be reliable without being valid.' },
      { n: 69, f: 'Quantitative vs qualitative data', b: 'Quantitative data are numerical (e.g. scores, counts). Qualitative data are descriptive, in words (e.g. interview answers). Quantitative is easier to compare; qualitative is richer in detail.' },
      { n: 70, f: 'Measures of central tendency and spread in the 9990 syllabus', b: 'Central tendency: mode, median and mean (no calculation of median or mean needed). Spread: range, and recognising and interpreting standard deviation. Graphs: bar chart, histogram, scatter graph.' },
      { n: 71, f: 'What must and must not be in a Paper 2 planning answer?', b: 'Include the procedure, how the plan is valid and reliable, the types of data, and method-specific features (e.g. IV, DV, controls, design). Aims/hypotheses and evaluation of the sample or ethics are not required at Paper 2.' },
    ]),

    // 3 Specialist Option 1: Clinical Psychology
    ...sub(CLIN, 'schizophrenia-9990', '1.1', [
      { n: 1, f: 'Positive vs negative symptoms of schizophrenia', b: 'Positive symptoms are additions to normal experience, such as hallucinations and delusions. Negative symptoms are reductions or losses, such as flat affect, avolition and reduced speech.' },
      { n: 2, f: 'What did Freeman et al. (2003) investigate with virtual reality?', b: 'Whether VR can be used to study persecutory ideation. Non-clinical participants entered a virtual scene with neutral characters; some attributed hostile intentions to them, showing paranoid thoughts can be studied safely and objectively in VR.' },
      { n: 3, f: 'What is the dopamine hypothesis of schizophrenia?', b: 'A biochemical explanation: symptoms (especially positive ones) are linked to excess dopamine activity, e.g. too many or over-sensitive dopamine receptors in some brain pathways. Supported by antipsychotics, which block dopamine receptors.' },
      { n: 4, f: 'What is the genetic explanation of schizophrenia, and one weakness?', b: 'Schizophrenia runs in families and concordance is higher for identical (MZ) than non-identical (DZ) twins, suggesting inherited vulnerability. Weakness: MZ concordance is well below 100%, so environment must also play a part.' },
      { n: 5, f: 'Typical vs atypical antipsychotics', b: 'Typical (first-generation) antipsychotics mainly block dopamine D2 receptors and reduce positive symptoms, but can cause movement side effects. Atypical (second-generation) also act on serotonin, may help negative symptoms and have fewer movement side effects.' },
      { n: 6, f: 'How is CBT used for schizophrenia (e.g. Sensky et al., 2000)?', b: 'Patients examine the evidence for their delusions and the meaning of their voices, and develop coping strategies. Sensky et al. (2000) compared CBT with a befriending control and found lasting benefits from CBT at follow-up.' },
    ]),
    ...sub(CLIN, 'mood-affective-disorders-depressive-disorder-unipolar-and-bipolar-disorder-9990', '1.2', [
      { n: 1, f: 'Depressive disorder (unipolar) vs bipolar disorder', b: 'Unipolar depression involves depressive episodes only (persistent low mood or loss of interest). Bipolar disorder involves manic (or hypomanic) episodes of elevated mood and energy, usually alternating with depressive episodes.' },
      { n: 2, f: 'What is the Beck Depression Inventory (BDI)?', b: 'A self-report psychometric questionnaire of 21 items, each scored 0–3, measuring the severity of depressive symptoms. Quick and standardised, but open to social desirability and subjective interpretation.' },
      { n: 3, f: 'What is Beck\'s cognitive theory of depression?', b: 'Depression results from faulty thinking: negative schemas and the cognitive triad (negative views of the self, the world and the future), maintained by cognitive biases such as overgeneralisation.' },
      { n: 4, f: 'What is learned helplessness (e.g. Seligman et al., 1988)?', b: 'Repeated experience of uncontrollable negative events leads a person to stop trying even when control is possible. A pessimistic attributional style (internal, stable, global causes for bad events) is linked to depression.' },
      { n: 5, f: 'Which genes did Oruč et al. (1997) examine?', b: 'Genes for the serotonin 5-HT2C receptor and the serotonin transporter (5-HTT), in an association analysis comparing people with bipolar disorder and controls. The study tests a genetic (biological) explanation of mood disorders.' },
      { n: 6, f: 'Name three classes of antidepressants and the general way they work', b: 'Tricyclics, MAOIs and SSRIs. All increase the availability of monoamine neurotransmitters such as serotonin at the synapse; SSRIs do so by selectively blocking serotonin reuptake.' },
      { n: 7, f: 'Beck\'s cognitive restructuring vs Ellis\'s REBT', b: 'Cognitive restructuring: the client tests negative automatic thoughts against evidence and replaces them. REBT (Ellis): the ABC model; irrational beliefs (B) about an activating event (A) cause the consequence (C) and are disputed.' },
    ]),
    ...sub(CLIN, 'impulse-control-disorders-9990', '1.3', [
      { n: 1, f: 'Name the three impulse control disorders on the 9990 syllabus', b: 'Kleptomania (a recurrent failure to resist impulses to steal objects not needed), pyromania (repeated deliberate fire-setting) and gambling disorder (persistent gambling despite harm).' },
      { n: 2, f: 'What is the K-SAS?', b: 'The Kleptomania Symptom Assessment Scale: a self-report questionnaire rating the frequency and intensity of urges, thoughts and behaviours linked to stealing over the past week, giving a quantitative severity score.' },
      { n: 3, f: 'How do dopamine and positive reinforcement explain impulse control disorders?', b: 'Biological: the behaviour triggers dopamine release in reward pathways, producing pleasure. Behavioural: the excitement or relief after acting positively reinforces the behaviour, so it is repeated.' },
      { n: 4, f: 'What is Miller\'s feeling-state theory?', b: 'A cognitive explanation: an intense positive feeling becomes linked with a specific behaviour (such as stealing). Later, the person repeats the behaviour to recreate that feeling, so the impulse is driven by the stored feeling-state.' },
      { n: 5, f: 'What did Grant et al. (2008) investigate?', b: 'Predictors of response to opiate antagonists (such as naltrexone and nalmefene) and placebo in treating pathological gambling. A family history of alcoholism was linked with a better response to the opiate antagonists.' },
      { n: 6, f: 'Covert sensitisation vs imaginal desensitisation', b: 'Covert sensitisation (e.g. Glover, 1985): the person imagines the behaviour paired with an unpleasant consequence. Imaginal desensitisation (e.g. Blaszczynski and Nower, 2003): imagining trigger situations while relaxed, without acting on the urge.' },
    ]),
    ...sub(CLIN, 'anxiety-disorders-and-fear-related-disorders-9990', '1.4', [
      { n: 1, f: 'Name the three anxiety and fear-related disorders on the 9990 syllabus', b: 'Generalised anxiety disorder (persistent, excessive worry), agoraphobia (fear of situations where escape may be difficult) and specific phobia, focusing on blood-injection-injury phobia.' },
      { n: 2, f: 'What are the GAD-7 and the BIPI?', b: 'GAD-7: a seven-item self-report measure of generalised anxiety symptoms. BIPI: the Blood-Injection Phobia Inventory, a self-report measure of blood-injection fear (e.g. Mas et al., 2010).' },
      { n: 3, f: 'How did Watson and Rayner (1920) show a phobia can be learned?', b: 'Little Albert was classically conditioned to fear a white rat by pairing it with a loud noise; the fear generalised to similar objects. Supports the behavioural explanation of phobias.' },
      { n: 4, f: 'What is the psychodynamic explanation of phobias (e.g. Freud, 1909)?', b: 'A phobia is an unconscious conflict displaced onto an object. Freud\'s case of Little Hans explained his fear of horses as a displaced fear of his father (Oedipus complex). The case was idiographic and hard to test.' },
      { n: 5, f: 'What is systematic desensitisation?', b: 'A behavioural therapy: the client learns relaxation, builds a fear hierarchy, then works up it while relaxed so the feared stimulus becomes associated with relaxation instead of fear (reciprocal inhibition).' },
      { n: 6, f: 'What is applied tension, as in Chapman and DeLapp (2013)?', b: 'A technique for blood-injection-injury phobia: tensing the muscles raises blood pressure and prevents fainting. Chapman and DeLapp used it in nine sessions of manualised CBT with an adult, in a case study.' },
    ]),
    ...sub(CLIN, 'obsessive-compulsive-disorder-ocd-9990', '1.5', [
      { n: 1, f: 'Obsessions vs compulsions', b: 'Obsessions are persistent, unwanted intrusive thoughts, images or urges that cause anxiety. Compulsions are repetitive behaviours or mental acts performed to reduce that anxiety.' },
      { n: 2, f: 'What are the MOCI and the Y-BOCS?', b: 'The Maudsley Obsessive-Compulsive Inventory is a true/false self-report questionnaire. The Yale-Brown Obsessive-Compulsive Scale is a clinician-rated interview measure of the severity of obsessions and compulsions.' },
      { n: 3, f: 'What was the case of Charles (Rapoport, 1989)?', b: 'A boy with OCD who washed for hours each day. It illustrates the diagnostic features of OCD: obsessions about contamination and time-consuming washing compulsions.' },
      { n: 4, f: 'Biological vs behavioural explanations of OCD', b: 'Biological: low serotonin (biochemical) and inherited vulnerability (genetic). Behavioural (operant conditioning): a compulsion reduces anxiety, so it is negatively reinforced and repeated.' },
      { n: 5, f: 'What is exposure and response prevention (ERP)?', b: 'The patient is exposed to the feared trigger and prevented from carrying out the compulsion, so they learn the anxiety falls without it (e.g. Lehmkuhl et al., 2008).' },
      { n: 6, f: 'What did Lovell et al. (2006) find about telephone CBT for OCD?', b: 'In a randomised controlled non-inferiority trial, CBT given by telephone was about as effective as face-to-face CBT for OCD, making treatment more accessible.' },
    ]),

    // 4 Specialist Option 2: Consumer Psychology
    ...sub(CONS, 'the-physical-environment-9990', '2.1', [
      { n: 1, f: 'Grid, freeform and racetrack store layouts', b: 'Grid: parallel aisles, efficient for planned shopping. Freeform: displays in irregular groups, encouraging browsing. Racetrack (loop): a main path that leads shoppers past every department.' },
      { n: 2, f: 'What did North et al. (2003) find about music in a restaurant?', b: 'Diners spent more on food and drink when classical music was played than when pop music or no music was played, suggesting music that fits an upmarket image raises spending.' },
      { n: 3, f: 'What is Mehrabian and Russell\'s PAD model?', b: 'A model of how the ambience of an environment affects people through three emotional dimensions: pleasure, arousal and dominance. These states then shape approach or avoidance behaviour, such as staying and spending.' },
      { n: 4, f: 'How can background noise affect taste (e.g. Woods et al., 2011)?', b: 'Loud background noise can reduce how salty or sweet food tastes and increase perceived crunchiness, because attention and sensory processing are shared between sound and taste.' },
      { n: 5, f: 'How can odour and crowding affect shoppers?', b: 'A pleasant odour can raise pleasure and improve product evaluations (e.g. Chebat and Michon, 2003). Perceived crowding can lower pleasure and satisfaction, though effects vary by shopper (e.g. Machleit et al., 2000).' },
    ]),
    ...sub(CONS, 'the-psychological-environment-9990', '2.2', [
      { n: 1, f: 'What affects wayfinding in a shopping mall?', b: 'Features such as signs and you-are-here maps, and the layout itself, affect how easily shoppers find their way (e.g. Dogu and Erkip, 2000).' },
      { n: 2, f: 'Name the five spatial behaviour patterns of shoppers', b: 'Specialist, native, tourist, explorer and raider. Shopper movement can be studied by CCTV tracking (e.g. Gil et al., 2009).' },
      { n: 3, f: 'How do primacy and recency affect menu choice?', b: 'Items at the beginning or end of a list are chosen more often than those in the middle (e.g. Dayan and Bar-Hillel, 2011), so position on the menu influences what is ordered.' },
      { n: 4, f: 'What did Robson et al. (2011) study?', b: 'Consumers\' responses to table spacing in restaurants. Tables placed close together increased diners\' discomfort and affected their satisfaction, linked to Hall\'s zones of personal space.' },
      { n: 5, f: 'What are Hall\'s four zones of personal space?', b: 'Intimate, personal, social and public distance, from closest to furthest. Intrusion into a closer zone than is appropriate causes discomfort.' },
      { n: 6, f: 'What did Milgram et al. (1986) study about queues?', b: 'How people defend their place in a queue: confederates pushed into queues and the responses of people queuing were recorded. Those directly behind the intrusion were most likely to object.' },
    ]),
    ...sub(CONS, 'consumer-decision-making-9990', '2.3', [
      { n: 1, f: 'Utility theory vs satisficing vs prospect theory', b: 'Utility theory: consumers choose the option that maximises value. Satisficing: they choose the first option that is good enough. Prospect theory: losses weigh more than equal gains, so framing affects choice.' },
      { n: 2, f: 'Compensatory vs non-compensatory decision strategies', b: 'Compensatory: a weakness on one attribute can be outweighed by strengths on others. Non-compensatory: an option failing a key attribute is rejected whatever its other strengths. Partially compensatory strategies combine both.' },
      { n: 3, f: 'Name the five choice heuristics on the 9990 syllabus', b: 'Availability, representativeness, recognition, take-the-best and anchoring: mental shortcuts that speed up decisions but can bias them.' },
      { n: 4, f: 'What is System 1 vs System 2 thinking?', b: 'System 1 is fast, automatic and intuitive. System 2 is slow, effortful and deliberate. Many consumer mistakes arise from relying on System 1.' },
      { n: 5, f: 'What did Hall et al. (2010) show about choice blindness?', b: 'Shoppers tasting jam or smelling tea chose a preference, then were secretly given the other sample to justify. Most failed to detect the switch and defended a choice they had not made.' },
      { n: 6, f: 'How does interference affect memory for adverts (e.g. Burke and Srull, 1988)?', b: 'Retroactive interference: later adverts disrupt memory for an earlier one. Proactive interference: earlier adverts disrupt memory for a later one. Both are stronger for competing ads in the same product class.' },
    ]),
    ...sub(CONS, 'the-product-9990', '2.4', [
      { n: 1, f: 'What did Becker et al. (2011) find about food packaging?', b: 'Package design changed taste impressions: for example, more angular packaging led consumers to expect and report a stronger, more intense taste of the same product.' },
      { n: 2, f: 'What is the central gaze cascade effect?', b: 'Shoppers look more at, and are more likely to choose, products placed in the centre of a shelf display; shown with eye-tracking (e.g. Atalay et al., 2012).' },
      { n: 3, f: 'What is disrupt-then-reframe?', b: 'An influence technique: a small oddity in a sales pitch disrupts resistance, then a reframe gives a persuasive reason. It works better on people with a high need for cognitive closure (e.g. Kardes et al., 2007).' },
      { n: 4, f: 'What is the Engel Kollat Blackwell model?', b: 'A model of buyer decision-making in stages: need recognition, information search, evaluation of alternatives, purchase and post-purchase evaluation.' },
      { n: 5, f: 'What is post-purchase cognitive dissonance?', b: 'Discomfort after a purchase when the buyer doubts the choice. It increases with cost and importance, and is reduced by seeking reassurance, focusing on the item\'s good points or returning it (e.g. Nordvall, 2014).' },
    ]),
    ...sub(CONS, 'advertising-9990', '2.5', [
      { n: 1, f: 'What is the Yale model of communication?', b: 'A model of persuasion: who says what (source and message), to whom (audience), how (medium) and with what effect. Credibility of the source and features of the message and audience affect persuasion.' },
      { n: 2, f: 'What are Lauterborn\'s 4 Cs?', b: 'A customer-focused marketing mix: customer (wants and needs), cost, convenience and communication, replacing the seller-focused 4 Ps.' },
      { n: 3, f: 'What did Snyder and DeBono (1985) find?', b: 'High self-monitors responded more favourably to adverts appealing to image, while low self-monitors responded more to adverts making claims about product quality.' },
      { n: 4, f: 'How can product placement in films affect choice (e.g. Auty and Lewis, 2004)?', b: 'Children who saw a brand in a film clip were more likely to choose it afterwards, explained by mere exposure and by the placement acting as a reminder.' },
      { n: 5, f: 'How do children come to recognise brands (e.g. Fischer et al., 1991)?', b: 'Through repeated exposure to logos; even young children can match logos to products, showing early brand recognition before they fully understand the purpose of advertising.' },
    ]),

    // 5 Specialist Option 3: Health Psychology
    ...sub(HLTH, 'the-patientpractitioner-relationship-9990', '3.1', [
      { n: 1, f: 'Doctor-centred vs patient-centred consultation', b: 'Doctor-centred (directing): the practitioner controls the consultation and decisions. Patient-centred (sharing): the patient\'s views are sought and decisions are shared.' },
      { n: 2, f: 'What did Savage and Armstrong (1990) find?', b: 'In a controlled study in a general practice, patients given a directing (doctor-centred) consultation style reported higher satisfaction than those given a sharing style.' },
      { n: 3, f: 'False positive vs false negative diagnosis', b: 'False positive: diagnosing an illness that is not present. False negative: failing to diagnose an illness that is present.' },
      { n: 4, f: 'Munchausen syndrome vs malingering', b: 'In Munchausen syndrome a person fakes or induces illness to gain the attention of the sick role. In malingering a person fakes illness for an external gain, such as money or time off.' },
      { n: 5, f: 'What did McKinlay (1975) show about medical terminology?', b: 'Patients often did not understand medical terms that practitioners assumed they knew, showing that verbal communication in consultations can fail.' },
    ]),
    ...sub(HLTH, 'adherence-to-medical-advice-9990', '3.2', [
      { n: 1, f: 'Name two types of non-adherence', b: 'Failure to follow a treatment (e.g. not taking medication as prescribed) and failure to attend appointments.' },
      { n: 2, f: 'What is rational non-adherence?', b: 'Choosing not to adhere for reasons that make sense to the patient, such as side effects, cost or doubts about the treatment\'s benefit (e.g. Laba et al., 2012).' },
      { n: 3, f: 'What is the Health Belief Model?', b: 'Whether a person takes health action depends on perceived susceptibility and severity of the illness, perceived benefits against barriers of acting, cues to action and self-efficacy.' },
      { n: 4, f: 'Subjective vs objective vs biological measures of adherence', b: 'Subjective: interviews or self-reports (easy but open to bias). Objective: pill counting or medication dispensers. Biological: blood or urine samples (accurate but invasive and costly).' },
      { n: 5, f: 'What did Yokley and Glenwick (1984) find about improving immunisation?', b: 'Among community interventions to raise preschool immunisation, prompts helped, but a monetary incentive (with prompting) produced the largest increase.' },
    ]),
    ...sub(HLTH, 'pain-9990', '3.3', [
      { n: 1, f: 'Acute vs chronic pain', b: 'Acute pain is short-term, linked to injury, and fades as healing occurs. Chronic pain persists for months, often beyond healing.' },
      { n: 2, f: 'What is phantom limb pain, and how can mirror treatment help?', b: 'Pain felt in a limb that has been amputated. Mirror treatment shows the reflection of the remaining limb in place of the missing one, which can reduce the pain (e.g. MacLachlan et al., 2004).' },
      { n: 3, f: 'Specificity theory vs gate control theory', b: 'Specificity theory: specific pain receptors send signals directly to a pain centre. Gate control theory: a gate in the spinal cord can be opened or closed by other sensory input and by psychological factors, changing how much pain is felt.' },
      { n: 4, f: 'What did Brudvik et al. (2016) find about pain assessment?', b: 'Comparing ratings of children\'s pain, physicians underestimated the pain children reported themselves on a visual analogue scale, and parents also tended to underestimate it.' },
      { n: 5, f: 'Name three types of measure of pain', b: 'Clinical interview (subjective); psychometric and visual rating scales such as the McGill Pain Questionnaire and visual analogue scale; behavioural/observational measures such as the UAB pain behaviour scale.' },
      { n: 6, f: 'Name three cognitive strategies for managing pain', b: 'Attention diversion, non-pain imagery and cognitive redefinition. Alternative treatments include acupuncture and TENS (stimulation therapy).' },
    ]),
    ...sub(HLTH, 'stress-9990', '3.4', [
      { n: 1, f: 'What are the stages of the General Adaptation Syndrome (GAS)?', b: 'Alarm (fight-or-flight response), resistance (the body adapts to ongoing stress) and exhaustion (resources are depleted and illness becomes more likely).' },
      { n: 2, f: 'What did Holmes and Rahe propose about life events?', b: 'Major life events require readjustment and cause stress. Each event has a score in life change units, and a high total over a year predicts increased risk of illness.' },
      { n: 3, f: 'What is Type A personality (Friedman and Rosenman)?', b: 'A behaviour pattern of competitiveness, time urgency and hostility, linked to higher stress and risk of coronary heart disease.' },
      { n: 4, f: 'Biological vs psychological measures of stress', b: 'Biological: heart rate, brain scans (fMRI), salivary cortisol. Objective but costly and can be affected by other factors. Psychological: self-report questionnaires such as life events scales, quick but subjective.' },
      { n: 5, f: 'What did Bridge et al. (1988) find?', b: 'Breast cancer patients taught relaxation with imagery during radiotherapy showed less mood disturbance than those taught relaxation alone or a control group.' },
      { n: 6, f: 'What are the three phases of stress inoculation training?', b: 'Conceptualisation (understanding stress), skills acquisition and rehearsal (learning coping skills) and application and follow-through (using the skills in real situations).' },
    ]),
    ...sub(HLTH, 'health-promotion-9990', '3.5', [
      { n: 1, f: 'What did Janis and Feshbach (1953) find about fear arousal?', b: 'In dental hygiene messages, a minimal-fear appeal produced more change in behaviour than a strong-fear appeal, suggesting very high fear can be counterproductive.' },
      { n: 2, f: 'What is unrealistic optimism (Weinstein, 1980)?', b: 'The belief that negative events are less likely to happen to oneself than to others, which can lead people to disregard health advice.' },
      { n: 3, f: 'What are the three focuses of positive psychology (Seligman)?', b: 'The pleasant life (positive emotion), the good life (engagement, using one\'s strengths) and the meaningful life (belonging to and serving something larger than oneself).' },
      { n: 4, f: 'What did Shoshani and Steinmetz (2014) evaluate?', b: 'A school-based positive psychology programme for adolescents. Compared with a control group, students on the programme showed better well-being (such as self-esteem and optimism) and fewer symptoms of mental distress.' },
      { n: 5, f: 'Give an example of health promotion in schools and in worksites', b: 'Schools: healthy eating programmes (e.g. Tapper et al., 2003). Worksites: health and safety programmes such as a token economy to reduce accidents (e.g. Fox et al., 1987).' },
    ]),

    // 6 Specialist Option 4: Organisational Psychology
    ...sub(ORG, 'motivation-to-work-9990', '4.1', [
      { n: 1, f: 'What are the five needs in Maslow\'s hierarchy?', b: 'From the base: physiological, safety, love and belonging, esteem, and self-actualisation. Lower needs must be largely met before higher ones motivate.' },
      { n: 2, f: 'What three needs does McClelland\'s theory of achievement motivation describe?', b: 'The need for achievement, the need for affiliation and the need for power. People differ in which need is strongest.' },
      { n: 3, f: 'What are SMART goals in goal-setting theory (Latham and Locke)?', b: 'Goals that are Specific, Measurable, Achievable, Relevant and Time-bound. Specific, challenging goals with feedback raise performance.' },
      { n: 4, f: 'What is Vroom\'s VIE (expectancy) theory?', b: 'Motivation depends on expectancy (effort will lead to performance), instrumentality (performance will lead to reward) and valence (how much the reward is valued).' },
      { n: 5, f: 'Extrinsic vs intrinsic motivators at work', b: 'Extrinsic: rewards from outside the task, such as pay, bonuses, profit-sharing and performance-related pay. Intrinsic: non-monetary rewards such as praise, respect, recognition, empowerment and belonging.' },
      { n: 6, f: 'What are the three needs in Deci and Ryan\'s self-determination theory?', b: 'Competence, autonomy and relatedness. Landry et al. (2019) applied the theory to cash rewards, examining when money supports or undermines motivation.' },
    ]),
    ...sub(ORG, 'leadership-and-management-9990', '4.2', [
      { n: 1, f: 'What are universalist theories of leadership?', b: 'Theories that leaders share qualities that work in any situation: great person, charismatic and transformational leaders.' },
      { n: 2, f: 'What did the Ohio and Michigan behavioural studies identify?', b: 'Two broad kinds of leader behaviour: task-focused (initiating structure; production-oriented) and people-focused (consideration; employee-oriented).' },
      { n: 3, f: 'What are Scouller\'s three levels of leadership?', b: 'Public (behaviour seen by groups), private (one-to-one handling of individuals) and personal (the leader\'s own beliefs, self-awareness and growth).' },
      { n: 4, f: 'What did Cuadrado et al. (2008) study?', b: 'Leadership style and gender in women\'s access to managerial positions: an experiment in which participants evaluated male and female leaders described as using different leadership styles.' },
      { n: 5, f: 'What are Kelley\'s (1988) two dimensions of followership?', b: 'Independent, critical thinking versus dependent, uncritical thinking; and active versus passive engagement. They give five styles: exemplary, alienated, conformist, passive and pragmatist.' },
    ]),
    ...sub(ORG, 'group-behaviour-in-organisations-9990', '4.3', [
      { n: 1, f: 'What are the stages of group development (Tuckman and Jensen)?', b: 'Forming, storming, norming, performing and adjourning.' },
      { n: 2, f: 'What is groupthink?', b: 'Faulty group decision-making in which the desire for agreement overrides realistic appraisal: signs include an illusion of invulnerability, pressure on dissenters and self-censorship.' },
      { n: 3, f: 'Social facilitation vs social loafing', b: 'Social facilitation: the presence of others improves performance on simple or well-learned tasks. Social loafing: people put in less effort when working in a group than alone.' },
      { n: 4, f: 'What did Earley (1993) show about social loafing across cultures?', b: 'Social loafing was more common among people from individualistic cultures; those from collectivist cultures loafed less when working with their in-group.' },
      { n: 5, f: 'What did Claypoole and Szalma (2019) study?', b: 'Electronic performance monitoring and sustained attention: whether being monitored improved concentration on a vigilance task, as social facilitation would predict.' },
      { n: 6, f: 'Name Thomas–Kilmann\'s five conflict-handling modes', b: 'Competing, collaborating, compromising, avoiding and accommodating.' },
    ]),
    ...sub(ORG, 'organisational-work-conditions-9990', '4.4', [
      { n: 1, f: 'What is the Hawthorne effect?', b: 'Workers change their behaviour, often improving productivity, because they know they are being studied, rather than because of the change in conditions itself (e.g. Kompier, 2006).' },
      { n: 2, f: 'Rapid vs slow shift rotation', b: 'Rapid rotation changes shifts every few days, so the body clock never fully adjusts. Slow rotation changes shifts every few weeks, giving time to adjust between changes.' },
      { n: 3, f: 'Errors of omission, commission, sequencing and timing', b: 'Omission: failing to do something. Commission: doing something wrong. Sequencing: doing steps in the wrong order. Timing: doing something too early or too late.' },
      { n: 4, f: 'What did Swat (1997) study?', b: 'The monitoring of accidents and risk events in industrial plants, recording both accidents and near-miss risk events to identify their causes.' },
      { n: 5, f: 'How was a token economy used to reduce accidents (e.g. Fox et al., 1987)?', b: 'Workers earned tokens (stamps exchangeable for goods) for working without accidents. Accidents and days lost fell, and the improvement lasted for years.' },
    ]),
    ...sub(ORG, 'satisfaction-at-work-9990', '4.5', [
      { n: 1, f: 'What is Herzberg\'s two-factor theory?', b: 'Hygiene factors (pay, conditions, supervision) prevent dissatisfaction but do not motivate. Motivators (achievement, recognition, responsibility) produce job satisfaction.' },
      { n: 2, f: 'What is Hackman and Oldham\'s job characteristics theory?', b: 'Five core job characteristics (skill variety, task identity, task significance, autonomy, feedback) create psychological states (meaningfulness, responsibility, knowledge of results) that lead to motivation and satisfaction.' },
      { n: 3, f: 'Job enrichment vs rotation vs enlargement', b: 'Enrichment: adding responsibility and decision-making. Rotation: moving workers between tasks. Enlargement: adding more tasks at the same level.' },
      { n: 4, f: 'What is the Job Descriptive Index (JDI)?', b: 'A questionnaire measuring job satisfaction across facets: the work itself, pay, promotion opportunities, supervision and co-workers.' },
      { n: 5, f: 'What did Giacalone and Rosenfeld (1987) find about sabotage?', b: 'Employees rated reasons for workplace sabotage, judging it more justifiable when it was a response to unfair treatment by the organisation than when done for fun.' },
    ]),
  ],
};
