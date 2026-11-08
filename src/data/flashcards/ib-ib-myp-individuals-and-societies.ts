/**
 * D-444 -- flashcards for IB MYP Individuals and Societies (from 2014).
 *
 * The syllabus record lists six topics and no subtopics, so there is one block
 * per topic, in syllabus order. Card ids are `<topic number>-<n>` and are
 * permanent (browser progress is keyed by them): add a new card with the next
 * unused n, never renumber.
 *
 * MYP Individuals and Societies is criterion-assessed (criteria A-D, each 0-8).
 * The cards cover the constituent disciplines, key and related concepts, global
 * contexts and statements of inquiry, the four criteria and the source skills
 * they reward, and the eAssessment structure and example topics, as the
 * Marlbridge MYP I&S pages describe them. Topic 6 also carries content cards
 * from the eAssessment topic revision notes, which are mapped to it.
 *
 *   The syllabus record is not tiered, so no card carries a tier.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 'MYP Individuals and
 *               Societies'); origin 'revision-notes'.
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

const P = 'ib-myp-individuals-and-societies';
const ECON = 'ib-myp-individuals-and-societies-economic-agents-measurements-trends-revision-notes';
const IND = 'ib-myp-individuals-and-societies-industrialization-and-technology-revision-notes';
const SUP = 'ib-myp-individuals-and-societies-superpowers-empires-alliances-revision-notes';

export const DECK_IB_IB_MYP_INDIVIDUALS_AND_SOCIETIES: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-myp',
  subjectSlug: 'myp-individuals-and-societies',
  syllabusCode: 'MYP Individuals and Societies',
  syllabusSeries: 'From 2014',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Constituent disciplines
    ...topicOnly(`${P}-constituent-disciplines`, '1', [
      { n: 1, f: 'Which disciplines can an MYP Individuals and Societies course cover?', b: 'Integrated humanities, history, economics, geography, philosophy, sociology/anthropology, business management, psychology or world religions. The choice is the school\'s; the four criteria stay the same.' },
      { n: 2, f: 'In which subjects is the I&S on-screen eAssessment offered?', b: 'Only history, geography and integrated humanities — even where a school teaches another discipline such as economics or psychology.' },
      { n: 3, f: 'Does MYP Individuals and Societies have a prescribed content list?', b: 'No. Schools design their own units. What is prescribed is the use of key and related concepts and global contexts to build the curriculum.' },
      { n: 4, f: 'Primary versus secondary source', b: 'A primary source comes from the time or event studied (an 1840s factory report). A secondary source is written later about it (a modern historian\'s book).' },
      { n: 5, f: 'Correlation versus causation', b: 'Two series moving together do not prove that one causes the other. A causal claim needs a mechanism and evidence that rules out other explanations.' },
      { n: 6, f: 'Intra-disciplinary versus interdisciplinary learning', b: 'Intra-disciplinary: connecting courses within I&S (history with geography). Interdisciplinary: connecting I&S with other MYP subject groups, often through shared key concepts.' },
    ]),

    // 2 Key concepts
    ...topicOnly(`${P}-key-concepts`, '2', [
      { n: 1, f: 'Which four key concepts does MYP Individuals and Societies contribute?', b: 'Change; global interactions; systems; time, place and space. The guide says culture, development and communities can also matter in I&S. There are sixteen MYP key concepts in all.' },
      { n: 2, f: 'What does change mean as an I&S key concept?', b: 'Movement from one form, state or value to another. Analyse causes (natural or human, intended or unintended), the process and the consequences for named groups — who gained and who lost.' },
      { n: 3, f: 'What does global interactions mean as an I&S key concept?', b: 'Connections between people, communities and environments seen at world scale: interdependence, conflict, cooperation and sharing finite resources. Example: Ethiopia\'s Blue Nile dam and the concerns of Egypt and Sudan.' },
      { n: 4, f: 'What does systems mean as an I&S key concept?', b: 'Interacting or interdependent parts. Name the parts, show how they depend on each other, identify the equilibrium and trace one shock through the system — for example a market and its equilibrium price, or a drainage basin.' },
      { n: 5, f: 'What does time, place and space mean as an I&S key concept?', b: 'The absolute or relative position of people, objects and ideas: when, where and why there, the constraints and opportunities of location, flows and scale. Example: Singapore\'s absolute versus relative location.' },
      { n: 6, f: 'Absolute versus relative location', b: 'Absolute location is a fixed position (coordinates). Relative location is position in relation to other places, routes and resources — which can change as links change.' },
      { n: 7, f: 'What is a statement of inquiry?', b: 'One transferable sentence that places a key concept and related concepts in a global context. It names no place or date, so it could guide a unit on a different topic.' },
    ]),

    // 3 Related concepts
    ...topicOnly(`${P}-related-concepts`, '3', [
      { n: 1, f: 'What is a related concept in I&S?', b: 'A narrower concept rooted in one discipline, used to explore a key concept in more depth. The guide lists related concepts for economics, geography, history and integrated humanities; teachers may choose others.' },
      { n: 2, f: 'Give example related concepts for economics, geography and history', b: 'Economics: scarcity, trade, growth. Geography: causality, networks, scale. History: conflict, significance, interdependence.' },
      { n: 3, f: 'Key concept or related concept: causality, scarcity, change?', b: 'Change is a key concept. Causality and scarcity are related concepts. Calling a related concept a key concept is a common error.' },
      { n: 4, f: 'Nominal versus real values', b: 'Nominal values use current prices. Real values remove the effect of inflation, so they can be compared fairly over time.', src: ECON },
      { n: 5, f: 'Percent versus percentage points', b: 'A rate rising from 4% to 5% rises by 1 percentage point, which is a 25% increase. Say which one you mean.', src: ECON },
      { n: 6, f: 'Supranational versus intergovernmental organisations', b: 'Supranational: can make law that binds members (the EU). Intergovernmental: relies mainly on agreement between states (the UN General Assembly, ASEAN).', src: SUP },
      { n: 7, f: 'Hard power versus soft power', b: 'Hard power coerces, for example through sanctions or force. Soft power attracts, for example a country\'s films being watched worldwide.', src: SUP },
      { n: 8, f: 'Comparative versus absolute advantage', b: 'Absolute advantage: a country makes more of a good than another with the same resources. Comparative advantage: it makes a good at a lower opportunity cost — the basis for gains from trade.' },
    ]),

    // 4 Global contexts
    ...topicOnly(`${P}-global-contexts`, '4', [
      { n: 1, f: 'What are the six MYP global contexts?', b: 'Identities and relationships; orientation in space and time; personal and cultural expression; scientific and technical innovation; globalization and sustainability; fairness and development.' },
      { n: 2, f: 'Which global context do many I&S inquiries focus on?', b: 'Orientation in space and time (turning points, connections, when and where). Teachers must identify a global context for every unit and are encouraged to use the other contexts too.' },
      { n: 3, f: 'What does the fairness and development context ask in I&S?', b: 'Who has rights, access and opportunity, and why there is inequality — for example measuring income inequality or the minimum wage debate.' },
      { n: 4, f: 'What does the globalization and sustainability context ask in I&S?', b: 'How the local and the global are linked, and what the long-term effects are — for example rainforest cleared for oil palm plantations.' },
      { n: 5, f: 'How do you write a statement of inquiry for an I&S unit?', b: 'Pick a key concept, one or two related concepts and a global context; write one sentence linking them with no names or dates; test that it could guide a unit on a different topic.' },
      { n: 6, f: 'Give a transferable statement of inquiry for a unit on the 1930s Dust Bowl', b: 'Key concept change; related concepts causality and sustainability; context globalization and sustainability: "Farming choices that ignore the limits of the land can damage environments and livelihoods for a generation." It also fits overgrazing.' },
      { n: 7, f: 'Factual, conceptual and debatable inquiry questions', b: 'Factual questions have an answer you can look up. Conceptual questions explore a transferable big idea. Debatable questions have more than one defensible answer and invite argument.' },
    ]),

    // 5 Assessment criteria
    ...topicOnly(`${P}-assessment-criteria`, '5', [
      { n: 1, f: 'What are the four MYP Individuals and Societies criteria?', b: 'A: Knowing and understanding. B: Investigating. C: Communicating. D: Thinking critically. Equally weighted, each 0–8 (four bands plus level 0), total 0–32. Most assessment is classroom-based; there is no SL/HL split.' },
      { n: 2, f: 'What does top-band criterion A evidence look like?', b: 'Factual and conceptual knowledge applied accurately to unfamiliar contexts, using discipline terminology precisely — connecting facts through a conceptual framework, not just listing them.' },
      { n: 3, f: 'What does criterion B (Investigating) reward?', b: 'A clear, specific research question and a systematic research process, using a range of source types and evaluating each source\'s reliability and relevance before drawing conclusions.' },
      { n: 4, f: 'What does criterion C (Communicating) reward?', b: 'Organising, documenting and communicating learning in a format suited to the task and discipline: a clear argument, evidence integrated where it supports each point, correct referencing and accurate terminology.' },
      { n: 5, f: 'What does criterion D (Thinking critically) reward?', b: 'Analysing and evaluating issues and the investigation itself, considering different perspectives and interpretations, and reaching a well-substantiated conclusion rather than treating one account as the whole picture.' },
      { n: 6, f: 'How do you evaluate a source using origin and purpose?', b: 'Origin: who made it and when. Purpose: why and for whom. Value: what it can genuinely tell a researcher for this question. Limitation: what it cannot reliably tell. Value and limitation usually come from the same fact about origin and purpose.' },
      { n: 7, f: 'Give a value and a limitation of a government press release issued the week before an election', b: 'Value: a primary, dated record of what the policy officially is, when and by whom it was announced.\nLimitation: likely to show the policy in the best light, so unreliable for judging its effectiveness or public reception.' },
      { n: 8, f: 'How do you compare the usefulness of two sources?', b: 'Use a shared criterion tied to the research question (for example, which is more useful for understanding public reaction), weigh the origin, purpose, value and limitation of each against it, and reach a judgement.' },
    ]),

    // 6 MYP eAssessment topics
    ...topicOnly(`${P}-eassessment-topics`, '6', [
      { n: 1, f: 'What is the structure of the I&S on-screen eAssessment?', b: 'A 2-hour on-screen exam with three source-based tasks: Investigating (criteria A and B, 26 marks); Communicating (A and C, 18 marks); Thinking critically (A, C and D, 36 marks, ending in extended writing). Total 80.' },
      { n: 2, f: 'Name example topics for the I&S on-screen examinations', b: 'Demographics and human movements; economic agents, measurements and trends; industrialization and technology; rights and social protest; settlement and urban morphology; superpowers, empires and alliances; trade, aid and exchange; warfare and peacekeeping.' },
      { n: 3, f: 'GDP versus GDP per capita versus GNI', b: 'GDP: total output produced within a country. GDP per capita: output per person. GNI: GDP plus income residents earn abroad minus income sent abroad. The HDI uses GNI per capita.', src: ECON },
      { n: 4, f: 'How do you calculate the natural increase rate and doubling time?', b: 'NIR (%) = (crude birth rate − crude death rate) ÷ 10, with both rates per 1,000. Doubling time ≈ 70 ÷ NIR. Example: CBR 30, CDR 10 → NIR 2% → about 35 years.' },
      { n: 5, f: 'First versus second industrial revolution', b: 'First (c. 1760–1840): textiles, coal, iron and steam. Second (c. 1870–1914): steel, electricity, chemicals and oil.', src: IND },
      { n: 6, f: 'Newcomen versus Watt', b: 'Newcomen built the first practical steam engine (1712). Watt made it far more efficient (1769 patent).', src: IND },
      { n: 7, f: 'What is the Universal Declaration of Human Rights (1948)?', b: 'Adopted by the UN General Assembly in Paris on 10 December 1948 (48 for, 0 against, 8 abstentions), drafted by a commission chaired by Eleanor Roosevelt; 30 articles. A declaration, not a binding treaty; the binding ICCPR and ICESCR followed in 1966.' },
      { n: 8, f: 'Superpower versus empire', b: 'A superpower is judged by reach and influence (economic, military, political, cultural). An empire is judged by rule over other peoples. A superpower need not hold colonies.', src: SUP },
      { n: 9, f: 'Suffragist versus suffragette', b: 'Suffragists campaigned lawfully for women\'s votes (NUWSS). Suffragettes used militant direct action (WSPU).' },
      { n: 10, f: 'Tariff, quota and subsidy', b: 'Tariff: a tax on imports. Quota: a limit on the quantity imported. Subsidy: a payment to domestic producers. All are forms of protectionism.' },
    ]),
  ],
};
