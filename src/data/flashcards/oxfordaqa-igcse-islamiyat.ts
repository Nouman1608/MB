/**
 * D-444 -- flashcards for OxfordAQA International GCSE Islamiyat 9237
 * (specification Version 1.1).
 *
 * One block per subtopic, in specification order. Card ids are
 * `<subtopic number>-<n>` and are permanent (browser progress is keyed by
 * them): add a new card with the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9237); origin 'revision-notes'.
 *
 * Written from Marlbridge's own 9237 revision notes and study guides (Living
 * the Muslim life, Sources of authority), using their transliterations. No page
 * covers 3.2.1, the life and teachings of Hazrat Muhammad (pbuh), so those
 * cards keep to the standard dates and events. Cards state what Muslims
 * believe and practise, factually; they give no rulings or opinions.
 *
 * Not tiered. Plain text only (see types.ts).
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

const SOA = 'igcse-oxfordaqa-islamiyat-sources-of-authority-revision-notes';

const P1 = 'paper-1-living-muslim-life-9237';
const P2 = 'paper-2-life-hazrat-muhammad-9237';

export const DECK_OXFORDAQA_IGCSE_ISLAMIYAT: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'igcse',
  subjectSlug: 'islamiyat',
  syllabusCode: '9237',
  syllabusSeries: 'Version 1.1',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // Paper 1 Living the Muslim life
    ...sub(P1, 'islam-beliefs-teachings-9237', '3.1.1', [
      { n: 1, f: 'What are the six Articles of Faith?', b: 'Tawhid (the oneness of God), belief in the angels, the revealed books, the prophets, the Day of Judgement, and al-qadr (divine decree).' },
      { n: 2, f: 'Why is tawhid described as the foundation of Muslim belief?', b: 'Every other belief and practice follows from it: worship is directed to God alone, with no intermediaries, and all believers are equal before Him.' },
      { n: 3, f: 'What is shirk?', b: 'Associating partners with God, the opposite of tawhid. Muslims regard it as the gravest sin.' },
      { n: 4, f: 'What is al-qadr?', b: 'Divine decree: the belief that God knows and has power over everything that happens, while humans remain responsible for their choices.' },
      { n: 5, f: 'What role does the angel Jibril have?', b: 'He brought God’s revelation to the prophets, including the Qur’an to Hazrat Muhammad (pbuh).' },
      { n: 6, f: 'Which books do Muslims believe God revealed, and to whom?', b: 'The Tawrat to Musa, the Zabur to Dawud, the Injil to Isa and the Qur’an to Muhammad (pbuh), as well as the Scrolls of Ibrahim.' },
      { n: 7, f: 'What do Muslims believe about the Day of Judgement?', b: 'All people will be resurrected and judged by God on their beliefs and deeds, and rewarded with paradise or punished in hell.' },
      { n: 8, f: 'What does it mean that Muhammad (pbuh) is the “Seal of the Prophets”?', b: 'That he is the last prophet, completing the message brought by the earlier prophets.' },
    ]),
    ...sub(P1, 'islam-practices-9237', '3.1.2', [
      { n: 1, f: 'What are the Five Pillars of Islam?', b: 'Shahadah (declaration of faith), Salah (five daily prayers), Zakat (annual almsgiving), Sawm (fasting in Ramadan) and Hajj (pilgrimage to Makkah, once in a lifetime if able).' },
      { n: 2, f: 'Why is the Shahadah considered the foundation of the Five Pillars?', b: 'Accepting and declaring it is what makes a person a Muslim; the other four pillars are practices that follow from that belief.' },
      { n: 3, f: 'Name the five daily prayers', b: 'Fajr (dawn), Zuhr (midday), Asr (afternoon), Maghrib (sunset) and Isha (night).' },
      { n: 4, f: 'What are wudu, the Qiblah and a rak’ah?', b: 'Wudu: ritual washing before prayer. Qiblah: the direction of the Ka’bah in Makkah, which Muslims face to pray. Rak’ah: one sequence of the movements and recitations of prayer.' },
      { n: 5, f: 'Why is Jumu’ah (Friday prayer) significant?', b: 'It is a congregational prayer at the mosque that includes a khutbah (sermon), so it unites the community and provides teaching in a way individual prayer does not.' },
      { n: 6, f: 'What is the difference between Zakat and sadaqah?', b: 'Zakat is an obligatory annual payment, traditionally 2.5% of qualifying wealth above the nisab threshold. Sadaqah is voluntary charity given at any time, in any amount.' },
      { n: 7, f: 'What is the nisab?', b: 'The minimum level of qualifying wealth above which Zakat is due. Below it, no payment is due.' },
      { n: 8, f: 'What is the significance of Sawm in Ramadan?', b: 'Self-discipline, empathy with the poor, spiritual focus, and remembering the first revelation of the Qur’an, which came in Ramadan on Laylat al-Qadr (the Night of Power).' },
      { n: 9, f: 'What is the significance of the ihram garments on Hajj?', b: 'All pilgrims wear the same simple white garments, so wealth and status are invisible and all stand equal before God.' },
      { n: 10, f: 'Why is standing at Arafat the essential rite of Hajj?', b: 'Pilgrims spend the afternoon of the 9th of Dhul-Hijjah there in prayer and supplication. It is also where the Prophet delivered his Farewell Sermon.' },
      { n: 11, f: 'What is the difference between Eid-ul-Fitr and Eid-ul-Adha?', b: 'Eid-ul-Fitr marks the end of Ramadan; Zakat-ul-Fitr is given before the prayer. Eid-ul-Adha falls during Hajj and commemorates Ibrahim’s willingness to sacrifice his son; the qurbani meat is shared in three parts.' },
      { n: 12, f: 'What is the difference between du’a and Salah?', b: 'Du’a is personal supplication, in any words and at any time. Salah is the prescribed prayer with a fixed form and fixed times.' },
      { n: 13, f: 'What do halal and haram mean?', b: 'Halal: permitted. Haram: forbidden. They shape daily conduct, including food, honesty in trade, the prohibition of interest, and duties to parents, neighbours and the needy.' },
    ]),

    // Paper 2 The life of Hazrat Muhammad (pbuh) and sources of authority
    ...sub(P2, 'life-teachings-hazrat-muhammad-9237', '3.2.1', [
      { n: 1, f: 'Give the key dates of Hazrat Muhammad’s (pbuh) life in Makkah', b: '570 born in Makkah. 610 first revelation in the Cave of Hira. 613 public preaching begins, followed by persecution. 615 first migration to Abyssinia. 619 Year of Sorrow.' },
      { n: 2, f: 'What happened in the Cave of Hira in 610?', b: 'The angel Jibril brought the first revelation, the opening verses of Surah al-Alaq, beginning “Read (Recite) in the name of your Lord who created”.' },
      { n: 3, f: 'What was the Year of Sorrow (619)?', b: 'The year in which his wife Khadijah and his uncle and protector Abu Talib both died.' },
      { n: 4, f: 'Why was the Hijra (622) important?', b: 'The migration from Makkah to Madinah allowed the first Muslim community and state to be established. It marks the start of the Islamic calendar.' },
      { n: 5, f: 'What was the Constitution of Madinah?', b: 'A document setting out the rights and duties of Muslims, Jews and other groups in Madinah as one community, with the Prophet as arbiter.' },
      { n: 6, f: 'What were the battles of Badr (624), Uhud (625) and the Trench (627)?', b: 'Badr: a smaller Muslim force defeated the Quraysh. Uhud: a setback after the archers left their post. Trench: a trench dug around Madinah withstood the Quraysh siege.' },
      { n: 7, f: 'What were the Treaty of Hudaybiyyah (628) and the conquest of Makkah (630)?', b: 'Hudaybiyyah was a ten-year truce with the Quraysh. In 630 the Muslims entered Makkah almost without fighting; a general amnesty was granted and the idols were removed from the Ka’bah.' },
      { n: 8, f: 'What did the Farewell Sermon (632) teach?', b: 'Equality regardless of race, the sanctity of life and property, the rights of women, the abolition of usury, and the ending of blood feuds.' },
    ]),
    ...sub(P2, 'sources-of-authority-9237', '3.2.2', [
      { n: 1, f: 'Put the four sources of authority in Islam in order', b: '1. The Qur’an. 2. The Hadith and Sunnah. 3. Ijma (consensus) and Qiyas (analogy), secondary sources used only where the Qur’an and Hadith give no explicit ruling.', src: SOA },
      { n: 2, f: 'Why is the Hadith needed alongside the Qur’an?', b: 'The Qur’an gives commands, but the Hadith and Sunnah supply the practical detail of how to carry them out. For example, the Qur’an commands prayer; the Sunnah shows its form.', src: SOA },
      { n: 3, f: 'What are the three stages in the history of the Qur’an?', b: 'Revelation (how it was received), preservation (how it was memorised and recorded) and compilation (how it was assembled into a single text).', src: SOA },
      { n: 4, f: 'What is the difference between isnad and matn?', b: 'Isnad: the chain of narrators transmitting a Hadith back to the Prophet (pbuh). Matn: the text or content of the Hadith itself. They are two separate tests of reliability.', src: SOA },
      { n: 5, f: 'What are the four categories of Hadith reliability?', b: 'Sahih (sound), Hasan (good), Daeef (weak) and Maudu (fabricated).', src: SOA },
      { n: 6, f: 'What is Ijma?', b: 'Consensus: scholars agree on a ruling where the Qur’an and Hadith are silent.', src: SOA },
      { n: 7, f: 'What is Qiyas?', b: 'Analogy: a new situation is reasoned about by comparison with a similar situation already addressed in the Qur’an or Hadith.', src: SOA },
      { n: 8, f: 'Exam trap: are Ijma and Qiyas equal in authority to the Qur’an and Hadith?', b: 'No. They are secondary sources that extend guidance to situations the primary sources do not explicitly cover.', src: SOA },
      { n: 9, f: 'Who compiled Sahih al-Bukhari and Sahih Muslim, and why are they significant?', b: 'Imam al-Bukhari and Imam Muslim, scholars of the 9th century CE. Sunni Muslims regard their two collections as the most reliable, because of the strict tests each compiler applied to every Hadith’s chain of narrators.' },
      { n: 10, f: 'What structure works for an “explain the importance of…” answer on sources of authority?', b: 'Point, evidence (a specific example), explain (how the Hadith supplies the detail the Qur’an does not), link (back to the source’s place in the hierarchy).', src: SOA },
    ]),
  ],
};
