/**
 * D-444 -- flashcards for IB Diploma Programme Global Politics (first assessment 2026).
 *
 * The syllabus record lists five topics and no subtopics, so there is one block per
 * topic, in syllabus order. Card ids are `<topic number>-<n>` and are permanent
 * (browser progress is keyed by them): add a new card with the next unused n,
 * never renumber.
 *
 *   The syllabus record is not tiered, so no card carries a tier. Topic 5 (the HL
 *   extension) is HL only, and its cards say so in words.
 *   Every card is authored (origin 'authored'): scripts/flashcard-candidates.mjs
 *   lists no term/definition candidates for 'DP Global Politics'. The cards are
 *   written from the course's revision notes and study guides; the rights and
 *   justice cards on named treaties go beyond the course pages and are written
 *   conservatively from the official syllabus content.
 *
 * Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; u?: true; src?: string }

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, u, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    ...(u ? { tier: 'upper' as const } : {}),
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const P = 'ib-dp-global-politics';

export const DECK_IB_IB_DP_GLOBAL_POLITICS: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-dp',
  subjectSlug: 'global-politics',
  syllabusCode: 'DP Global Politics',
  syllabusSeries: 'First assessment 2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Core topics: Understanding power and global politics
    ...topicOnly(`${P}-core-topics`, '1', [
      { n: 1, f: 'What is power in Global Politics?', b: 'The guide\'s starting point: the ability to effect change. Its second view treats power as a feature of relations among people. Capacity view: power is held and can be counted (armies, GDP, votes). Relational view: it depends on how others respond. Resources are not outcomes.' },
      { n: 2, f: 'Hard, soft and smart power: what is the difference?', b: 'Hard: coercion through threats, force or penalties (sanctions, military intervention).\nSoft: persuasion and attraction (culture, ideology, aid) — Nye, 1990.\nSmart: a strategy combining hard and soft tools to fit the aim. How a resource works decides the label, not the resource itself.' },
      { n: 3, f: 'Structural versus relational power', b: 'Structural: power from a position in rules or institutions, such as a permanent Security Council seat or a blocking share of IMF votes.\nRelational: power from ties between actors, such as an alliance (NATO\'s Article 5, AUKUS) or a protest network.' },
      { n: 4, f: 'What are Lukes\' three dimensions of power?', b: 'First: winning open decisions. Second: keeping an issue off the agenda. Third: shaping what people want, so they never raise the issue at all.' },
      { n: 5, f: 'Westphalian sovereignty versus sovereignty as responsibility', b: 'Westphalian: territorial, supreme authority with no outside actor in domestic affairs; non-intervention (UN Charter Art. 2(7)).\nSovereignty as responsibility: the right to non-intervention depends on protecting your own people — the basis of R2P, endorsed at the 2005 World Summit.' },
      { n: 6, f: 'Internal versus external sovereignty, and de jure versus de facto', b: 'Internal: supreme authority inside the borders. External: independence from outside control and recognition as an equal.\nDe jure: the legal right to rule. De facto: actual control on the ground (Taiwan has strong de facto control but few formal recognitions).' },
      { n: 7, f: 'What are the Montevideo Convention (1933) criteria for statehood?', b: 'A permanent population, a defined territory, a government, and the capacity to enter into relations with other states.' },
      { n: 8, f: 'What is legitimacy, and how does it differ from power and legality?', b: 'Legitimacy is broad acceptance of an actor or action as proper. Power is the ability to effect change; coercion can keep power without legitimacy. Legal acts can be seen as illegitimate, and illegal protest as legitimate.' },
      { n: 9, f: 'State legitimacy versus government legitimacy', b: 'State legitimacy: acceptance of the state\'s right to exist and rule a territory. Government legitimacy: acceptance of those in office and how they gained and use power. A government can fall while the state stays accepted (Sri Lanka, 2022).' },
      { n: 10, f: 'How does a UN Security Council resolution pass?', b: '15 members: 5 permanent (China, France, Russia, UK, USA) and 10 elected for two-year terms. A substantive decision needs 9 votes in favour and no permanent-member veto. An abstention is not a veto. Chapter VII decisions bind all members.' },
      { n: 11, f: 'Collective security versus collective defence', b: 'Collective security: all members of a system act against any member that commits aggression (the UN model).\nCollective defence: allies defend each other against an outside attack (NATO\'s Article 5).' },
      { n: 12, f: 'Realism versus liberalism in Global Politics', b: 'Realism: states in anarchy pursue power and security; cooperation is hard because of relative gains (Morgenthau, Waltz, Mearsheimer).\nLiberalism: institutions and interdependence make cooperation likely; states value absolute gains (Keohane and Nye, 1977).' },
      { n: 13, f: 'Actor versus stakeholder', b: 'An actor is an individual or group with the agency and means to exercise power on an issue. A stakeholder is anyone affected by the issue, whether or not they can act. Every actor involved is a stakeholder; not every stakeholder is an actor.' },
    ]),

    // 2 Thematic studies: Rights and justice
    ...topicOnly(`${P}-rights-and-justice`, '2', [
      { n: 1, f: 'How do you apply the four core concepts to a rights issue?', b: 'Power: who can define or enforce the right. Sovereignty: does the state claim exclusive authority, and how does that meet international human rights law? Legitimacy: is the state\'s position, or the claim against it, accepted? Interdependence: what pressure or obligations reach actors beyond the state?' },
      { n: 2, f: 'Why is the Universal Declaration of Human Rights (1948) called soft law?', b: 'It is a UN General Assembly resolution, so it is not a binding treaty, yet it is highly influential and underpins later binding human rights treaties.' },
      { n: 3, f: 'Which two 1966 covenants turned the UDHR into binding treaties?', b: 'The International Covenant on Civil and Political Rights (ICCPR) and the International Covenant on Economic, Social and Cultural Rights (ICESCR). Both entered into force in 1976 and bind the states that ratify them.' },
      { n: 4, f: 'Universalism versus cultural relativism in human rights', b: 'Universalism: human rights apply to everyone everywhere, whatever the culture or state.\nCultural relativism: rights claims should be understood in their cultural context; critics say this can be used to excuse abuses.' },
      { n: 5, f: 'Individual versus collective rights', b: 'Individual rights belong to each person (free speech, a fair trial). Collective rights belong to groups (self-determination, Indigenous peoples\' rights to land and culture, as in UNDRIP, 2007). The two can conflict.' },
      { n: 6, f: 'What is the International Criminal Court (ICC)?', b: 'A permanent court set up by the Rome Statute (1998, in force 2002) to try individuals for genocide, war crimes and crimes against humanity. It acts only where states are unwilling or unable to prosecute, and its reach depends on state consent and cooperation.' },
      { n: 7, f: 'Name three regional human rights courts', b: 'The European Court of Human Rights, the Inter-American Court of Human Rights and the African Court on Human and Peoples\' Rights.' },
      { n: 8, f: 'How do NGOs protect and monitor rights?', b: 'Groups such as Amnesty International and Human Rights Watch document abuses, publish reports, campaign and lobby. They gain legitimacy through expertise and independence but cannot enforce rights themselves.' },
      { n: 9, f: 'Why does sovereignty create tension with universal rights?', b: 'A state claims authority to decide rights within its own borders, while universal rights claims say outsiders may judge or act. R2P tries to resolve this by making non-intervention conditional on a state protecting its people.' },
    ]),

    // 3 Thematic studies: Development and sustainability
    ...topicOnly(`${P}-development-and-sustainability`, '3', [
      { n: 1, f: 'What is development in Global Politics?', b: 'Improvement in people\'s lives across economic, political, social and institutional dimensions — not growth alone. Human development (Sen) means widening people\'s real freedoms and capabilities.' },
      { n: 2, f: 'What is sustainable development?', b: 'Meeting present needs without reducing future generations\' ability to meet theirs (Brundtland Report, 1987). Sustainability has environmental, social and economic dimensions.' },
      { n: 3, f: 'Absolute poverty versus relative poverty', b: 'Absolute: below a fixed minimum, such as the World Bank\'s dollars-a-day line.\nRelative: well below the typical standard in your own society, for example under 60% of median income.' },
      { n: 4, f: 'What does the HDI measure and what does it miss?', b: 'It combines health, education and income (a geometric mean). It misses inequality, the environment and freedoms.' },
      { n: 5, f: 'How is the Multidimensional Poverty Index (MPI) calculated?', b: 'MPI = H × A, where H is the share of people who are multidimensionally poor and A is the average share of weighted indicators they are deprived in.\nExample: H = 0.25, A = 0.44 → MPI = 0.11. It uses ten household indicators and misses income.' },
      { n: 6, f: 'World Bank versus IMF', b: 'World Bank: long-term development loans and grants.\nIMF: short-term balance-of-payments lending with conditions. Their 1980s structural adjustment conditions required cutting deficits, privatising and liberalising trade.' },
      { n: 7, f: 'Modernization versus dependency theory', b: 'Modernization: poorer countries develop by following the rich world\'s stages; criticised as one route for all.\nDependency / world-systems: the core exploits the periphery, keeping it poor; criticised for missing success stories.' },
      { n: 8, f: 'What does the Gini index measure?', b: 'The spread of income, from 0 (perfect equality) to 1 (or 100, total inequality). It does not show where in the distribution the inequality sits.' },
      { n: 9, f: 'How should you use a development index in an essay?', b: 'Name the index and what it measures; use it as evidence; state one thing it leaves out; show how a second measure changes the picture.' },
    ]),

    // 4 Thematic studies: Peace and conflict
    ...topicOnly(`${P}-peace-and-conflict`, '4', [
      { n: 1, f: 'Name the four types of conflict the course distinguishes', b: 'Interstate (between states); intrastate (within a state, such as civil war); non-state (between non-state actors, with no state as a direct party); extra-state (between a state and a non-state actor beyond that state\'s own borders).' },
      { n: 2, f: 'What are the six named causes of conflict?', b: 'Identity, ideology, interests, resources, socio-economic divisions and institutional arrangements. Real conflicts rarely have a single cause; strong answers show how causes interact.' },
      { n: 3, f: 'Peacemaking, peacekeeping and peacebuilding', b: 'Peacemaking: negotiation and mediation to end violence, often leading to a treaty.\nPeacekeeping: maintaining a ceasefire or preventing renewed violence, for example UN missions.\nPeacebuilding: post-conflict work to prevent recurrence, such as rebuilding institutions and reconciliation.' },
      { n: 4, f: 'What is a truth and reconciliation commission?', b: 'A transitional justice body that records abuses and acknowledges victims after conflict, to support reconciliation and prevent recurrence. Examples include commissions in the Gambia, Canada and Tunisia.' },
      { n: 5, f: 'What is structural violence?', b: 'Harm caused by social, economic or institutional arrangements that stop people meeting their needs, rather than by direct physical force. It links most directly to the socio-economic-divisions and institutional-arrangements causes of conflict.' },
      { n: 6, f: 'How does legitimacy shape responses to a conflict?', b: 'Combatants and outside actors claim or deny legitimacy for their use of force. Whether a party is accepted as legitimate affects recognition, sanctions, aid and intervention, so similar conflicts can draw very different international responses.' },
      { n: 7, f: 'How does interdependence apply to peace and conflict?', b: 'Conflicts in one state create effects beyond its borders: refugee flows, economic disruption and security concerns for neighbours and the wider region.' },
    ]),

    // 5 HL extension: Global political challenges (HL only)
    ...topicOnly(`${P}-hl-extension`, '5', [
      { n: 1, f: 'What are the eight topic areas of the HL extension?', b: 'Borders, environment, equality, health, identity, poverty, security and technology. (HL only)' },
      { n: 2, f: 'What is the minimum research for the HL extension?', b: 'At least two case studies and at least two topic areas. Sources are mostly secondary and should show a balance of views. (HL only)' },
      { n: 3, f: 'What are the three emphases of the HL extension?', b: 'Interconnection of challenges; the complexities and tensions in addressing them; a solution-oriented focus. (HL only)' },
      { n: 4, f: 'What is the structure of Paper 3?', b: '1 hour 30 minutes, 28 marks, 30% of the HL grade, from a stimulus (text, data, diagrams or infographics).\nQ1 (3, AO2) analyse the stimulus; Q2a (4, AO2) analyse an issue; Q2b (6, AO3) recommend a course of action; Q3 (15, AO3) synthesise and evaluate your researched cases. (HL only)' },
      { n: 5, f: 'What should a case file for the HL extension contain?', b: 'What is happening (dates, place, actors, stakeholders); data and its validity; causes and impacts at each level; responses and how each actor interprets the issue; topic areas touched; key concepts; your judgement on what worked and why. (HL only)' },
      { n: 6, f: 'What extra does the HL engagement project require?', b: 'HL students carry out further research and formulate a recommendation addressing the political issue, assessed by an extra criterion (F: Recommendation). The HL report is up to 2,400 words; SL is up to 2,000. (HL only)' },
    ]),
  ],
};
