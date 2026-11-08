/**
 * D-444 -- flashcards for Cambridge IGCSE Global Perspectives 0457 (2025-2027).
 *
 * The syllabus record lists 22 topics and no subtopics, so every card sits on
 * its topic (topicOnly helper) and ids are `<topic number>-<n>`. Ids are
 * permanent (browser progress is keyed by them): add a new card with the next
 * unused n, never renumber.
 *
 * 0457 states that knowledge of content is not assessed: the topics are a
 * context for practising skills. So the cards cover the skills, terms and
 * components (research, analysis, evaluation, reflection, communication and
 * collaboration; perspectives; source-evaluation criteria; the Written Exam,
 * Individual Report and Team Project), each placed on the topic whose
 * Marlbridge page uses it, with that topic's own examples. No topic facts.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 0457); origin 'revision-notes'.
 *
 * Not tiered. Plain text only (see types.ts).
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

const rn = (t: string) => `igcse-global-perspectives-0457-${t}-revision-notes`;
const ARTS = rn('arts-in-society');
const CULT = rn('change-in-culture-and-communities');
const CLIM = rn('climate-change-energy-and-resources');
const CONF = rn('conflict-and-peace');
const DEV = rn('development-trade-and-aid');
const DIG = rn('digital-world');
const EDU = rn('education-for-all');
const EMP = rn('employment');
const ENV = rn('environment-pollution-and-conservation');
const GLOB = rn('globalisation');
const HLTH = rn('health-and-wellbeing');
const LAW = rn('law-and-criminality');
const MEDIA = rn('media-and-communication');
const MIG = rn('migration-and-urbanisation');
const POL = rn('political-power-and-action');
const POV = rn('poverty-and-inequality');
const SOC = rn('social-identity-and-inclusion');
const SPORT = rn('sport-and-recreation');
const TECH = rn('technology-industry-and-innovation');
const TRANS = rn('transport-travel-and-tourism');
const VAL = rn('values-and-beliefs');
const WATER = rn('water-food-and-agriculture');

export const DECK_CAMBRIDGE_IGCSE_GLOBAL_PERSPECTIVES: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'igcse',
  subjectSlug: 'global-perspectives',
  syllabusCode: '0457',
  syllabusSeries: '2025-2027',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Arts in society
    ...topicOnly('arts-in-society-0457', '1', [
      { n: 1, f: 'If topic knowledge is not assessed in 0457, what is?', b: 'Skills. The syllabus states that knowledge of content is not assessed; topics such as Arts in society are a context for practising research, analysis, evaluation, reflection, communication and collaboration.' },
      { n: 2, f: 'What is the difference between a topic and an issue?', b: '"Arts in society" is the topic. "Should governments fund the arts?" is an issue: an important subject or problem for discussion that divides opinion.', src: ARTS },
      { n: 3, f: 'How is a value different from evidence?', b: '"Culture is a right" is a value. "Ticket prices rose last year" is evidence. Values cannot be proved; evidence can be tested.', src: ARTS },
      { n: 4, f: 'What is the difference between a course of action and its outcome?', b: 'The action is what someone does (a youth arts pass). The outcome is its effect (more young people attending). Always say how you would measure the outcome.', src: ARTS },
      { n: 5, f: 'How can one issue, such as returning museum objects, be seen at global, national and local level?', b: 'Global: objects held across continents. National: laws on what national museums may give away. Local: one museum\'s single item. Moving between levels is a mark of a strong answer.' },
      { n: 6, f: 'What is the difference between bias and vested interest?', b: 'Bias is in how a source presents material. Vested interest is a reason the author might be biased. Show the bias from the text; do not just name the interest. Figures from an arts organisation are not automatically neutral.', src: ARTS },
    ]),

    // 2 Change in culture and communities
    ...topicOnly('change-in-culture-and-communities-0457', '2', [
      { n: 1, f: 'How does the 0457 syllabus define research?', b: '"The systematic study of a global issue to find evidence and develop understanding".', src: CULT },
      { n: 2, f: 'What is the difference between a prediction and evidence?', b: '"The dialect will vanish" is a prediction. Falling numbers of speakers is evidence.', src: CULT },
      { n: 3, f: 'Why is emotive language not evidence?', b: '"The heart of our town is being destroyed" persuades but proves nothing. Look for what is actually offered in support.', src: CULT },
      { n: 4, f: 'How should causes and consequences be written: listed or linked?', b: 'Linked in a chain, not listed. Rising rents (cause) → families move away (consequence) → fewer pupils at the local language class (further consequence).', src: CULT },
      { n: 5, f: 'Where do the marks come from: describing a change or judging it?', b: 'From analysing who gains and who loses, not from simply saying a change is good or bad.', src: CULT },
      { n: 6, f: 'Why can a small, narrow survey not prove what a whole generation thinks?', b: 'Check the sample size, how people were chosen and whether they represent the group in the claim. A few people in one place cannot support a claim about everyone.' },
    ]),

    // 3 Climate change, energy and resources
    ...topicOnly('climate-change-energy-and-resources-0457', '3', [
      { n: 1, f: 'What is the format of 0457 Component 1, the Written Exam?', b: '1 hour 25 minutes, 70 marks, four compulsory questions on a source insert about one global issue. It is externally set and marked and is worth 35% of the qualification.' },
      { n: 2, f: 'What is the difference between mitigation and adaptation when judging a course of action?', b: 'Mitigation cuts the causes (switching from coal to solar). Adaptation copes with the effects (raising flood walls). A course of action can do one without the other.', src: CLIM },
      { n: 3, f: 'What is a hidden assumption in an argument?', b: 'An unstated step the conclusion relies on. "Renewable investment tripled, proving governments now put climate above all else" assumes more spending in one area means it is the top priority. Make the assumption explicit, then judge it.' },
      { n: 4, f: 'Can you call a source unreliable just because of who wrote it?', b: 'No. Look at its evidence and reasoning as well. Who wrote it is a reason to check, not a verdict.' },
      { n: 5, f: 'How many courses of action should an Individual Report deal with?', b: 'Consider several, then propose a single course of action and explain how it could be implemented and what its impact would be.', src: CLIM },
      { n: 6, f: 'Why is an "awareness" action often weak in the Team Project?', b: 'It often has no way to measure success. Plan an action whose effect the team can measure, such as a before-and-after count or survey.' },
    ]),

    // 4 Conflict and peace
    ...topicOnly('conflict-and-peace-0457', '4', [
      { n: 1, f: 'How does the 0457 syllabus define an argument?', b: 'A series of statements containing reasons and evidence which support a claim about a global issue.', src: CONF },
      { n: 2, f: 'What is the difference between a claim and evidence?', b: 'The claim is what is said. Evidence is what supports it.', src: CONF },
      { n: 3, f: 'What is the difference between describing an action and evaluating it?', b: 'Description says what happened; evaluation judges how well it worked and why.', src: CONF },
      { n: 4, f: 'What does Question 4 of the Written Exam ask, and how many marks is it worth?', b: 'It assesses actions using all the sources, for 20 marks. Compare the actions and reach a judgement using criteria that you actually apply in your paragraphs.' },
      { n: 5, f: 'Should you use your own knowledge of a real conflict in the Written Exam?', b: 'No. The questions are based on the sources, and knowledge of content is not assessed. Use the source material as evidence.' },
      { n: 6, f: 'What makes a good Individual Report question?', b: 'One that divides opinion and is narrow enough to research, such as "Should countries sell weapons to states at war?". A topic word alone gives no structure and no perspectives.' },
    ]),

    // 5 Development, trade and aid
    ...topicOnly('development-trade-and-aid-0457', '5', [
      { n: 1, f: 'Which eight terms does the 0457 syllabus say help with the Written Exam?', b: 'Bias, claim, fact, generalisation, opinion, prediction, value and vested interest.', src: DEV },
      { n: 2, f: 'What is a generalisation? Give an example', b: 'One case stretched to all: a broad conclusion from limited cases that may not hold more widely. "All aid is stolen."', src: DEV },
      { n: 3, f: 'Certified farmers earn more. Does that prove certification caused it?', b: 'No. This is correlation, not cause: other differences between the farmers could explain it. Look for a fair comparison group.', src: DEV },
      { n: 4, f: 'Why might a rise in sales income not mean producers are better off?', b: 'Income is not profit: higher sales may not mean higher earnings once costs are paid. Ask about costs, the sample and the comparison group.', src: DEV },
      { n: 5, f: 'Why distinguish short-term and long-term consequences?', b: 'An action can look good now and harm later: an aid cut saves money now but may harm health for years.', src: DEV },
      { n: 6, f: 'At which levels should a global issue be considered?', b: 'Personal, local and/or national, and global. The Individual Report needs local and/or national perspectives as well as global ones; moving between levels marks a strong answer.' },
    ]),

    // 6 Digital world
    ...topicOnly('digital-world-0457', '6', [
      { n: 1, f: 'What is the difference between a claim and an argument?', b: 'A claim is one statement. An argument gives reasons and evidence for a claim.', src: DIG },
      { n: 2, f: 'Can a reliable source be of little use to your research?', b: 'Yes. A reliable source can still be irrelevant to your question. Reliability and relevance are separate tests.', src: DIG },
      { n: 3, f: 'In the Team Project, what is the difference between activity and impact?', b: '"We handed out 100 leaflets" describes what you did; a before-and-after survey shows whether anything changed.', src: DIG },
      { n: 4, f: 'How do you tell a fact from an opinion?', b: 'A fact can be checked: "The library has 12 computers". An opinion cannot: "Video calls are less friendly".', src: DIG },
      { n: 5, f: 'What six criteria can you use to evaluate a source?', b: 'Credibility (who wrote it, what expertise?), bias (do they gain; loaded language?), currency (recent enough?), relevance (does it address the question?), corroboration (do independent sources agree?) and method (sample size, how data was gathered).' },
      { n: 6, f: 'What kind of issue does each coursework component need?', b: 'The Individual Report needs a global issue with local and/or national and global perspectives; the Team Project needs a local issue.', src: DIG },
    ]),

    // 7 Education for all
    ...topicOnly('education-for-all-0457', '7', [
      { n: 1, f: 'A rate rises from 60% to 75%. What are the percentage-point and percentage changes?', b: 'A rise of 15 percentage points, but a 25% relative increase (15 ÷ 60). Sources sometimes use the one that sounds larger.', src: EDU },
      { n: 2, f: 'Does more children enrolled in school prove better education?', b: 'No. Access is not quality: being enrolled is not the same as learning.', src: EDU },
      { n: 3, f: 'What is the difference between enrolment, attendance and completion?', b: 'Enrolled means registered; attending means present; completing means finishing a stage. A rise in one does not prove a rise in the others.', src: EDU },
      { n: 4, f: 'Does a new law or goal show that a problem is being solved?', b: 'No. A law or goal shows intent (a promise). Outcomes need data.', src: EDU },
      { n: 5, f: 'Which signal words separate a prediction from a generalisation?', b: 'A prediction is about the future ("will"); a generalisation stretches a few cases to all ("all", "every", "always").', src: EDU },
      { n: 6, f: 'What should you ask about any statistic in a source?', b: 'What is the sample size and how was it chosen? Is it representative of the claim? Is a baseline given ("doubled" from 2 to 4 means little)? Is the comparison fair?' },
    ]),

    // 8 Employment
    ...topicOnly('employment-0457', '8', [
      { n: 1, f: 'How can a course of action treat a symptom rather than a cause?', b: 'A wage subsidy treats a symptom (too few hires). Retraining tackles a cause (missing skills).', src: EMP },
      { n: 2, f: 'How should you judge a prediction such as "jobs will disappear"?', b: 'It cannot yet be checked, so judge the method behind it: who made it, on what data and assumptions.', src: EMP },
      { n: 3, f: 'How do you show that a source is biased, rather than just say so?', b: 'Name the interest and quote the loaded or one-sided words, or point to what is left out, then explain whose interest that presentation serves.' },
      { n: 4, f: 'What is a vested interest?', b: 'A personal or financial stake in a particular outcome, which can motivate a one-sided view of an issue. It is a reason to check a source, not proof that it is wrong.' },
      { n: 5, f: 'What is the Individual Report (Component 2)?', b: 'A 1500–2000 word report (excluding the bibliography) on a global issue of the candidate\'s own choosing. It is the candidate\'s own independent work, externally marked, worth 30% of the qualification.' },
      { n: 6, f: 'Which five skills does the Individual Report assess?', b: 'Research, analysis, evaluation, reflection and communication. Collaboration is assessed in the Team Project instead.' },
    ]),

    // 9 Environment, pollution and conservation
    ...topicOnly('environment-pollution-and-conservation-0457', '9', [
      { n: 1, f: 'What is the difference between an aim and a course of action?', b: '"Reduce plastic in the sea" is an aim. "A deposit-return scheme on drinks bottles" is a course of action.', src: ENV },
      { n: 2, f: 'Does evidence of research count as Evidence of Action?', b: 'No. Evidence of Action is produced during the action; it should not include evidence of research or initial meetings.', src: ENV },
      { n: 3, f: 'What can count as Evidence of Action in the Team Project?', b: 'What the team actually did: posters, leaflets, web pages, videos, presentations or photographs of an event. It must show the action itself.' },
      { n: 4, f: 'What happens in a Team Project, step by step?', b: 'A team of 2–5 picks a local issue; each member researches a different aspect or perspective; the team agrees a course of action, plans and carries it out, then measures how successful it was.' },
      { n: 5, f: 'How would you turn the topic "pollution" into an issue?', b: 'Ask a question that divides opinion, such as "Should polluting factories be closed if they are a town\'s main employer?".', src: ENV },
      { n: 6, f: 'How is the Team Project (Component 3) marked and weighted?', b: 'It is internally assessed and externally moderated, worth 70 marks and 35% of the qualification. It is the only component with a team element.' },
    ]),

    // 10 Globalisation
    ...topicOnly('globalisation-0457', '10', [
      { n: 1, f: 'Does a vested interest prove a source is biased?', b: 'No. A vested interest is a stake in the outcome; bias is a one-sided presentation. A vested interest makes bias more likely but does not prove it.', src: GLOB },
      { n: 2, f: 'Give a cause-and-consequence pair from globalisation', b: 'Cheaper shipping is a cause; cheaper clothes in shops are a consequence.', src: GLOB },
      { n: 3, f: 'What does Question 1 of the Written Exam ask, and for how many marks?', b: 'It analyses information, arguments and perspectives in several sources, for 18 marks.' },
      { n: 4, f: 'What does Question 2 of the Written Exam ask, and for how many marks?', b: 'It evaluates research or evidence and asks you to suggest how a claim could be tested, for 16 marks.' },
      { n: 5, f: 'What does Question 3 of the Written Exam ask, and for how many marks?', b: 'It evaluates arguments and asks for a reasoned judgement about which is better supported, for 16 marks.' },
      { n: 6, f: 'How do you suggest a way to test a claim made in a source?', b: 'Say what evidence you would collect, from whom, how many and how (survey, interviews, records), and what comparison would show whether the claim holds. Explain why that method gives fairer evidence.' },
    ]),

    // 11 Health and wellbeing
    ...topicOnly('health-and-wellbeing-0457', '11', [
      { n: 1, f: 'Which groups\' perspectives might you look for on a health issue, and what must you add?', b: 'Patients and families (cost, waiting), health workers (workload), governments (health versus budget), businesses (vested interest in sales), international bodies and cultural or religious groups. Always add why: the reason or value behind each view.', src: HLTH },
      { n: 2, f: 'Why is self-reported evidence weaker than measured evidence?', b: '"I exercise daily" is weaker than recorded attendance: people may misremember or give the answer they think is wanted.', src: HLTH },
      { n: 3, f: 'Can one personal story prove a national trend?', b: 'No. One case is testimony, not proof of a pattern.', src: HLTH },
      { n: 4, f: 'What does AO1 (Research, analysis and evaluation) cover?', b: 'Identifying and analysing issues, arguments and perspectives; analysing and evaluating evidence, reasoning and sources; developing a line of reasoning. It is assessed in all three components and is all of Component 1.' },
      { n: 5, f: 'What does AO2 (Reflection) ask for, and where is it assessed?', b: 'Considering different perspectives objectively and with empathy, and justifying your own perspective with evidence and reasoning. It is assessed in Components 2 and 3, not in the Written Exam.' },
      { n: 6, f: 'What does AO3 (Communication and collaboration) cover?', b: 'Presenting arguments, evidence and perspectives clearly and with structure, including citations and references, and contributing to the Team Project.' },
    ]),

    // 12 Law and criminality
    ...topicOnly('law-and-criminality-0457', '12', [
      { n: 1, f: 'Why can recorded figures mislead about how often something happens?', b: 'Recorded crime is not actual crime: unreported crime is missing from police figures, and more reporting can look like more crime.', src: LAW },
      { n: 2, f: 'Is a survey of how safe people feel a count of offences?', b: 'No. Fear of crime is not crime: a survey of feelings measures perception, not the number of offences.', src: LAW },
      { n: 3, f: 'Crime fell after a new policy. What do you need before saying the policy caused it?', b: 'A comparison group. Something falling after a policy does not prove the policy caused it.', src: LAW },
      { n: 4, f: 'Why can two sources judge the same action differently?', b: 'They may use different aims as criteria. With punishment, deterrence, rehabilitation and retribution lead to different judgements about the same sentence.', src: LAW },
      { n: 5, f: 'What should an extended answer in the Written Exam contain?', b: 'A clear line of reasoning; source material used as evidence, not summarised; a counter-argument genuinely considered and answered; and a conclusion that follows from the reasoning.' },
      { n: 6, f: 'Why is it not enough just to mention a counter-argument?', b: 'Presenting a counter-argument and then ignoring it is a common trap. Respond to it: show why your judgement still holds, or how it changes your conclusion.' },
    ]),

    // 13 Media and communication
    ...topicOnly('media-and-communication-0457', '13', [
      { n: 1, f: 'How are the assessment objectives weighted across 0457?', b: 'AO1 Research, analysis and evaluation: 68% of the qualification and 100% of Component 1. AO2 Reflection: 15%, in Components 2 and 3. AO3 Communication and collaboration: 17%.' },
      { n: 2, f: 'Which command words does the 0457 syllabus print?', b: 'Analyse, Describe, Evaluate, Explain, Identify, Suggest.', src: MEDIA },
      { n: 3, f: 'What is the difference between analyse and evaluate?', b: 'Analyse shows meaning and links. Evaluate judges quality or value.', src: MEDIA },
      { n: 4, f: 'What is the difference between misinformation and disinformation?', b: 'The difference is intent. Misinformation is false information shared by someone who believes it; disinformation is shared on purpose to mislead.', src: MEDIA },
      { n: 5, f: 'Can a writer with a vested interest still be accurate?', b: 'Yes. Bias is in how something is presented; a vested interest is a reason someone might be biased. A writer can have a vested interest and still be accurate.', src: MEDIA },
      { n: 6, f: 'Is reflection credited in the Written Exam?', b: 'No. AO2 Reflection is weighted 0% in Component 1, which assesses research, analysis and evaluation only. Reflection earns marks in the Individual Report and Team Project.' },
    ]),

    // 14 Migration and urbanisation
    ...topicOnly('migration-and-urbanisation-0457', '14', [
      { n: 1, f: 'What does a study of 60 people show, compared with "everyone who moves is better off"?', b: 'The study is evidence about those 60. "Everyone who moves is better off" is a generalisation.', src: MIG },
      { n: 2, f: 'What can opinion survey data show, and what can it not?', b: 'A survey shows what people believe, not why something happens. Opinion data is not causal evidence.', src: MIG },
      { n: 3, f: 'Which is the fact and which the claim: "3,000 permits were approved" and "migrants push up rents"?', b: 'The number of permits is a checkable fact. "Migrants push up rents" is a claim needing evidence.', src: MIG },
      { n: 4, f: 'Why is naming a group\'s view not enough to show a perspective?', b: 'You must explain why they hold it: the pressures, values or interests behind it (for example livelihood versus budget, short-term versus long-term), and how it differs from another group\'s view.' },
      { n: 5, f: 'How do you build an Individual Report question from a broad topic?', b: 'Name a specific issue and setting, and leave room for more than one perspective, for example "Should upstream and downstream countries share responsibility equally for managing a shared river\'s water supply?".' },
      { n: 6, f: 'A survey of 150 people in one town is said to show the nation\'s view. Give two weaknesses', b: 'The sample is small and from one place, so it cannot support a national claim; and there is no information on how people were chosen, so it may not be representative.' },
    ]),

    // 15 Political power and action
    ...topicOnly('political-power-and-action-0457', '15', [
      { n: 1, f: 'What is the difference between a topic, an issue and a question?', b: 'Topic: political power and action. Issue: whether voting should be compulsory. Question: "Should voting be compulsory in democratic countries?"', src: POL },
      { n: 2, f: 'Does "82% say they will vote" show that 82% vote?', b: 'No. Intention is not action: what people say they will do is not the same as what they do.', src: POL },
      { n: 3, f: 'What is the difference between participation and influence?', b: 'Signing a petition is participation; whether it changes a decision is a separate question.', src: POL },
      { n: 4, f: 'In Question 3, should you agree with the argument you like best?', b: 'No. You judge how well an argument is supported, not whether you like its conclusion.', src: POL },
      { n: 5, f: 'What is the difference between an argument and an assertion?', b: 'An argument offers a conclusion supported by reasons and evidence. An assertion is a claim with no support. Do not treat an assertion as evidence.' },
      { n: 6, f: 'What is an assumption in a source?', b: 'Something taken for granted but left unstated. A strong answer states it and judges whether it is reasonable.' },
    ]),

    // 16 Poverty and inequality
    ...topicOnly('poverty-and-inequality-0457', '16', [
      { n: 1, f: 'What is the difference between poverty and inequality?', b: 'Poverty is about having too little. Inequality is about the gap. One can fall while the other rises.', src: POV },
      { n: 2, f: 'Why might two sources on poverty disagree even if both are accurate?', b: 'They may use different measures, such as absolute and relative poverty. Check the definition before comparing.', src: POV },
      { n: 3, f: 'Why can the mean mislead about a typical income?', b: 'A few very rich people raise the mean but barely move the median.', src: POV },
      { n: 4, f: 'How can the poorest group\'s share fall while their income stays the same?', b: 'If the economy grows, their share can fall while their actual income stays flat. Income share is not income amount.', src: POV },
      { n: 5, f: 'What is the difference between short-term relief and tackling a long-term cause?', b: 'A food bank relieves hunger now; it does not raise incomes.', src: POV },
      { n: 6, f: 'What is the difference between a value and a vested interest?', b: 'A value is a belief about what matters ("fairness"). A vested interest is something a person stands to gain or lose.', src: POV },
    ]),

    // 17 Social identity and inclusion
    ...topicOnly('social-identity-and-inclusion-0457', '17', [
      { n: 1, f: 'What is the difference between a reliable and a credible source?', b: 'A reliable source gives consistent, accurate information. A credible source has expertise and reason to be trusted. Check both.', src: SOC },
      { n: 2, f: 'What is the difference between proposing and assessing an action?', b: 'Proposing says what to do. Assessing judges how well it would work, for whom, at what cost.', src: SOC },
      { n: 3, f: 'How should you handle two contested approaches, such as integration and multiculturalism?', b: 'Explain each fairly before judging.', src: SOC },
      { n: 4, f: 'What does considering perspectives "objectively and with empathy" mean in practice?', b: 'Present views you do not share fairly, with their reasons; avoid treating every member of a group as holding the same view; and judge the arguments, not the people.' },
      { n: 5, f: 'How should cause and consequence be handled for an issue of exclusion?', b: 'Cause: why exclusion happens. Consequence: what it leads to, and for whom.', src: SOC },
      { n: 6, f: 'What three things must the Team Project Reflective Paper do?', b: 'Summarise your own research findings and how the team did or did not use them; reflect on your learning about the issue, teamwork and yourself; evaluate how effective the action and your own collaboration were.' },
    ]),

    // 18 Sport and recreation
    ...topicOnly('sport-and-recreation-0457', '18', [
      { n: 1, f: 'Whose perspectives might you look for on hosting a big sports event?', b: 'Athletes, fans, residents near venues, governments, governing bodies, sponsors and broadcasters (a vested interest in audiences), and community groups and taxpayers. Always add why: the reason or value behind each view.', src: SPORT },
      { n: 2, f: '"The stadium cost 900 million" and "the stadium will pay for itself": which is which?', b: 'The cost can be checked, so it is a fact. "Will pay for itself" cannot yet be checked: it is a prediction.', src: SPORT },
      { n: 3, f: 'Do medals at the top prove more people take part locally?', b: 'No. Elite success is not grassroots participation.', src: SPORT },
      { n: 4, f: 'Why distinguish temporary from lasting effects when judging an action?', b: 'Jobs or visitors during a ten-day event are not the same as long-term change.', src: SPORT },
      { n: 5, f: 'How are the 70 marks of the Team Project split?', b: 'Team Element 25 (Explanation of Research and Planning 10, Evidence of Action 5, Team Collaboration 5, Individual Collaboration 5). Personal Element 45, the Reflective Paper (evaluation 10, reflection on learning 15, reflection on teamwork 10, communication 10).' },
      { n: 6, f: 'Can members of the same team get different collaboration marks?', b: 'Yes. Individual collaboration is judged by teacher observation of each member throughout the project: communicating, sharing ideas, meeting deadlines, solving problems and supporting others.' },
    ]),

    // 19 Technology, industry and innovation
    ...topicOnly('technology-industry-and-innovation-0457', '19', [
      { n: 1, f: 'Wages rose after a factory opened. What can you conclude?', b: 'Only that the two happened together. Correlation is not cause: rising wages after a factory opened does not prove the factory caused the rise.', src: TECH },
      { n: 2, f: 'What is the difference between a course of action and a consequence?', b: 'An action is what someone does; a consequence is what results.', src: TECH },
      { n: 3, f: 'What are the word and time limits in the Team Project?', b: 'Explanation of Research and Planning: 300–400 words. Evidence of Action: 10 minutes maximum for video. Reflective Paper: 750–1000 words. They are hard caps: nothing beyond the limit is marked.' },
      { n: 4, f: 'When is the Team Project Explanation of Research and Planning written?', b: 'In three stages across the project: identifying the topic and local issue, the plan of action and roles, then a final review of changes. It is not written once at the end.' },
      { n: 5, f: 'Why does a Reflective Paper that only describes the project score poorly?', b: 'The marks reward reflection on learning and evaluation of the action and teamwork, not a narrative of events.' },
      { n: 6, f: 'Who chooses the Individual Report issue, and what is the teacher\'s role?', b: 'The candidate chooses a global issue. The teacher can guide towards a feasible topic and a researchable question and support research skills, but the report must be the candidate\'s independent work.' },
    ]),

    // 20 Transport, travel and tourism
    ...topicOnly('transport-travel-and-tourism-0457', '20', [
      { n: 1, f: 'Why is a short trial weak evidence for a long-term effect?', b: 'A few months of data cannot show what happens after people adjust.', src: TRANS },
      { n: 2, f: 'A visitor fee reduces crowding on busy days. Does it tackle the cause?', b: 'It may treat a symptom (crowding) without touching a cause, such as housing being turned into holiday lets.', src: TRANS },
      { n: 3, f: '"The fee applied on 29 days" and "the fee reduced crowding": fact or claim?', b: 'The first is a fact that can be checked. The second is a claim that needs evidence.', src: TRANS },
      { n: 4, f: 'What does corroboration mean when evaluating a source?', b: 'Checking whether independent sources agree with it. A claim backed by several unconnected sources is stronger than one source alone.' },
      { n: 5, f: 'What does currency mean when evaluating a source?', b: 'Whether the source is recent enough for the claim it is being used to support.' },
      { n: 6, f: 'What does the method criterion ask about a source\'s evidence?', b: 'How the data was gathered: the sample size, who was asked and how, and whether that method can support the claim made.' },
    ]),

    // 21 Values and beliefs
    ...topicOnly('values-and-beliefs-0457', '21', [
      { n: 1, f: 'How does the 0457 syllabus define a perspective?', b: '"A viewpoint on an issue based on evidence and reasoning". A perspective is not just an opinion: it has reasoning behind it.', src: VAL },
      { n: 2, f: 'Is "Shops should stay closed on the rest day" a fact or a value judgement?', b: 'A value judgement: "should" signals what the writer thinks ought to happen. "Shops close on the rest day" would be a fact.', src: VAL },
      { n: 3, f: 'When does a belief become a perspective in the syllabus sense?', b: 'When it is backed by reasons and evidence.', src: VAL },
      { n: 4, f: 'In the exam, do you judge which belief is true?', b: 'No. You judge how well an argument is supported, never which religion or belief is true.', src: VAL },
      { n: 5, f: 'Why is "What do different religions believe?" a weak Individual Report title?', b: 'It is descriptive, does not divide opinion, and leaves no room for different perspectives or a course of action.', src: VAL },
      { n: 6, f: 'What is the recommended structure of the Individual Report?', b: '1 Explain the issue and its local/national and global perspectives. 2 Analyse causes and consequences. 3 Evaluate possible courses of action, then propose and justify one. 4 Reflect and conclude, answering the research question.' },
    ]),

    // 22 Water, food and agriculture
    ...topicOnly('water-food-and-agriculture-0457', '22', [
      { n: 1, f: 'Why does it matter whether water scarcity is physical or economic?', b: 'The best action differs: a new pipe solves one; it cannot solve the other.', src: WATER },
      { n: 2, f: '"The well is 30 metres deep" and "wells are drying because of export farms": what is the difference?', b: 'The first can be checked: a fact. The second is a claim about a cause and needs evidence.', src: WATER },
      { n: 3, f: 'How should references be handled in the Individual Report?', b: 'Keep a running reference list from the first source you read. Every source used must be cited, in a clear referencing system applied consistently; referencing is marked under AO3.' },
      { n: 4, f: 'What must you say about each source in the Individual Report, beyond citing it?', b: 'Its value to your research, and whether it is reliable and credible. Citing without evaluating earns nothing on the evaluation of sources.' },
      { n: 5, f: 'What turns a farmer\'s view into a perspective rather than an opinion?', b: 'Evidence and reasoning, such as the farmer\'s account of costs and yields. An opinion can stand alone.', src: WATER },
      { n: 6, f: 'What do the credibility and relevance criteria ask about a source?', b: 'Credibility: who wrote it, and what expertise or reason to be trusted do they have? Relevance: does it actually address the question being asked?' },
    ]),
  ],
};
