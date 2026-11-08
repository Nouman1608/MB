/**
 * D-444 -- flashcards for Cambridge O Level Islamiyat 2058 (2026-2027).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 * Written from Marlbridge's own 2058 revision notes and study guides (Paper 1,
 * Paper 2, Major themes of the Qur'an). 2058 has the same content structure
 * as Cambridge IGCSE 0493, so shared cards are worded as in that deck.
 * Standard transliterations follow those
 * pages. Cards state what Muslims believe and practise, and what the syllabus
 * asks for, factually; they give no rulings or opinions. The Qur'anic passages
 * and Hadiths set for study are listed in the syllabus appendices and change
 * from series to series, so cards on individual passages are well-known
 * examples, not a claim about the current list. No revision-notes page maps to
 * a single subtopic, so every card is authored.
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

const P1 = 'paper-1-2058';
const P2 = 'paper-2-2058';

export const DECK_CAMBRIDGE_O_LEVEL_ISLAMIYAT: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'o-level',
  subjectSlug: 'islamiyat',
  syllabusCode: '2058',
  syllabusSeries: '2026-2027',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // Paper 1
    ...sub(P1, 'major-themes-quran-2058', '1.1', [
      { n: 1, f: 'What is the central theme of the Qur’an?', b: 'Tawhid: the absolute oneness of God, which underlies every other teaching in the Qur’an.' },
      { n: 2, f: 'Name the major themes of the Qur’an', b: 'Tawhid (the oneness of God), prophethood, the afterlife and judgement, guidance for personal conduct, law and social justice, and relations with earlier scriptures.' },
      { n: 3, f: 'Under which three headings are the Qur’anic passages set for study grouped?', b: 'God in Himself; God’s relationship with the created world; and God’s messengers.' },
      { n: 4, f: 'What does Surah al-Ikhlas (112) teach about God?', b: 'That God is One and Eternal (al-Samad); He neither begets nor is begotten; and nothing is comparable to Him.' },
      { n: 5, f: 'What does Ayat al-Kursi (2:255) teach about God?', b: 'That He is the Ever-Living who sustains all things; neither drowsiness nor sleep overtakes Him; everything in the heavens and earth belongs to Him; and His knowledge and authority extend over all creation.' },
      { n: 6, f: 'What does the Qur’an teach about prophethood?', b: 'Muhammad (pbuh) is the last of a line of prophets sent by God to different peoples with essentially the same message. The stories of earlier prophets and communities are told as lessons and warnings.' },
      { n: 7, f: 'How should you write about a Qur’anic theme in the exam?', b: 'Link the named theme to a specific passage or example of its teaching, then explain its importance for Muslims, rather than listing themes as abstract labels.' },
      { n: 8, f: 'How is Question 1 on Paper 1 (the Qur’anic passages) set?', b: 'Three passages are set and you write on any two, for 8 marks. Read all three before choosing.' },
      { n: 9, f: 'What characterises a top-band AO1 answer in O Level Islamiyat?', b: 'Detailed, accurate knowledge, and it is likely to quote Qur’an verses and Hadiths (or other relevant quotations) to support the points made.' },
    ]),
    ...sub(P1, 'history-importance-quran-2058', '1.2', [
      { n: 1, f: 'Over how long was the Qur’an revealed, and how did revelation begin?', b: 'Over 23 years, beginning in 610 CE in the Cave of Hira, through the angel Jibril.' },
      { n: 2, f: 'What were the first verses revealed?', b: 'The opening verses of Surah al-Alaq (96:1–5), beginning “Read (Recite) in the name of your Lord who created”.' },
      { n: 3, f: 'How many surahs does the Qur’an have, and how are Makkan and Madinan surahs different?', b: '114 surahs. Makkan surahs are generally shorter and focus on tawhid, the afterlife and moral conduct. Madinan surahs are generally longer and deal with law, community and social order.' },
      { n: 4, f: 'How was the Qur’an preserved during the Prophet’s lifetime?', b: 'By memorisation, by huffaz who learned the whole text, and in writing on the materials available, by scribes such as Zayd ibn Thabit.' },
      { n: 5, f: 'Why and how did Abu Bakr have the Qur’an compiled?', b: 'Many huffaz were killed at the Battle of Yamama. At Umar’s urging, Abu Bakr had Zayd ibn Thabit collect the revelation into a single written text.' },
      { n: 6, f: 'Why did Uthman standardise the Qur’an?', b: 'Hudhayfah warned him that Muslims in different regions, during the campaigns in Armenia and Azerbaijan, were reciting it in different ways. Uthman had official copies made, sent them to the main centres and had variant copies destroyed.' },
      { n: 7, f: 'Exam trap: what is the difference between Abu Bakr’s and Uthman’s work on the Qur’an?', b: 'Abu Bakr collected (compiled) the Qur’an into one text; Uthman standardised it and distributed official copies.' },
      { n: 9, f: 'What role did Hafsah play in the history of the Qur’an?', b: 'The copy compiled under Abu Bakr was later kept by Hafsah. Uthman had her copy reproduced in the dialect of the Quraysh to make the official copies.' },
      { n: 8, f: 'What is the place of the Qur’an in Islamic law?', b: 'It is the first source of law, followed by the Sunna (Hadith), consensus (ijma’) and analogy (qiyas).' },
    ]),
    ...sub(P1, 'life-prophet-2058', '1.3', [
      { n: 1, f: 'Give the key dates of the Prophet’s life in Makkah', b: '570 born in Makkah. 610 first revelation in the Cave of Hira. 613 public preaching begins, followed by persecution. 615 first migration to Abyssinia. 619 Year of Sorrow.' },
      { n: 2, f: 'What was the Year of Sorrow (619)?', b: 'The year in which both the Prophet’s wife Khadijah and his uncle and protector Abu Talib died, leaving him more vulnerable in Makkah.' },
      { n: 3, f: 'Why was the Hijra (622) important?', b: 'The Prophet’s migration from Makkah to Madinah allowed the first Muslim community and state to be set up. It marks the start of the Islamic calendar.' },
      { n: 4, f: 'What was the Constitution of Madinah?', b: 'A document defining the rights and duties of Muslims, Jews and other groups in Madinah, making them a single community with the Prophet as arbiter.' },
      { n: 5, f: 'What happened at the Battle of Badr (624, 2 AH)?', b: 'About 313 Muslims met about 1,000 Quraysh. The Prophet secured the wells, the Muslims won the opening single combats, and the Quraysh were defeated (around 70 killed, including Abu Jahl). Prisoners were treated humanely.' },
      { n: 6, f: 'Why was the Battle of Uhud (625) a setback?', b: 'The archers left their position on the hill to collect spoils, allowing the Makkan cavalry to attack from the rear. It was a setback, not a total defeat.' },
      { n: 7, f: 'How did the Muslims withstand the Battle of the Trench (627)?', b: 'On Salman al-Farisi’s suggestion they dug a trench to protect Madinah. The besieging army could not cross it and withdrew.' },
      { n: 8, f: 'What was agreed in the Treaty of Hudaybiyyah (628)?', b: 'A ten-year truce with the Quraysh. The Muslims would return to Makkah the following year to perform the pilgrimage.' },
      { n: 9, f: 'What happened at the conquest of Makkah (630)?', b: 'The Muslims entered Makkah almost without fighting. The Prophet granted a general amnesty and the idols were removed from the Ka’ba.' },
      { n: 10, f: 'What principles did the Prophet set out in the Farewell Sermon (632)?', b: 'Equality regardless of race, the sanctity of life and property, the rights of women, the abolition of usury, and the ending of blood feuds.' },
      { n: 11, f: 'What were the pledges of Aqabah?', b: 'Pledges of support made to the Prophet by Muslims from Yathrib (Madinah) before the Hijra, which secured the protection that made the migration possible.' },
    ]),
    ...sub(P1, 'first-islamic-community-2058', '1.4', [
      { n: 1, f: 'Which groups of people does the first Islamic community topic cover?', b: 'The Prophet’s wives; his descendants (children, grandchildren and the line recognised among Shi’a Muslims as Imams); his leading Companions, including the Ten Blessed Companions and his Scribes; the Emigrants and Helpers; and the four Rightly Guided Caliphs during his lifetime.' },
      { n: 2, f: 'Why is Khadijah important?', b: 'She was the Prophet’s first wife and the first person to accept his message, and her support sustained him in Makkah.' },
      { n: 3, f: 'Why is Aisha important?', b: 'A wife of the Prophet who became one of the most important narrators of Hadith and a source of knowledge for the early community.' },
      { n: 4, f: 'Who were Fatimah, Hasan and Husayn?', b: 'Fatimah was the Prophet’s daughter and the wife of Ali. Hasan and Husayn were their sons, the Prophet’s grandsons.' },
      { n: 5, f: 'Who were the Ten Blessed Companions?', b: 'Abu Bakr, Umar, Uthman, Ali, Talhah, Zubayr, Abd al-Rahman ibn Awf, Sa’d ibn Abi Waqqas, Sa’id ibn Zayd and Abu Ubaydah ibn al-Jarrah.' },
      { n: 6, f: 'Who were the Muhajirun and the Ansar?', b: 'The Muhajirun (Emigrants) were the Muslims who left Makkah for Madinah; the Ansar (Helpers) were the Muslims of Madinah who received them. The Prophet paired them in brotherhood on arrival.' },
      { n: 7, f: 'Who was Bilal ibn Rabah?', b: 'An enslaved Abyssinian in Makkah who was tortured for his faith. Abu Bakr bought his freedom, and he became the first mu’adhdhin, calling Muslims to prayer.' },
      { n: 8, f: 'What roles did Abu Bakr and Ali play during the Hijra?', b: 'Abu Bakr accompanied the Prophet and hid with him in the Cave of Thawr. Ali slept in the Prophet’s bed so that he could leave Makkah unnoticed.' },
      { n: 9, f: 'Exam trap: which parts of the Caliphs’ lives belong to Paper 1?', b: 'Their lives and roles during the Prophet’s lifetime. Their rule after his death, including the Ridda wars, is Paper 2.' },
    ]),

    // Paper 2
    ...sub(P2, 'major-teachings-hadiths-2058', '2.1', [
      { n: 1, f: 'Into which two groups are the Hadith passages set for study divided?', b: 'Passages relating to individual conduct and passages relating to life in the community.' },
      { n: 2, f: 'How is the Hadith passages question set in Paper 2?', b: 'Four passages are set and you choose any two to write on, explaining what each teaches Muslims to believe and how it teaches them to act. The passages are given in Arabic and English.' },
      { n: 3, f: 'What does the Hadith “Actions are judged by intentions” teach?', b: 'That God judges deeds by the intention behind them, so Muslims should act sincerely for God’s sake rather than for show. It is narrated by Bukhari and Muslim.' },
      { n: 4, f: 'What does the Hadith “None of you truly believes until he loves for his brother what he loves for himself” teach?', b: 'That true faith includes wanting good for others as much as for oneself, which shapes kindness, fairness and generosity in the community.' },
      { n: 5, f: 'What does the Hadith about the strong man teach?', b: 'That the strong person is not the one who overpowers others in wrestling, but the one who controls himself when angry.' },
      { n: 6, f: 'How should you answer on a set Hadith passage?', b: 'State its teaching clearly, then explain how a Muslim would put it into practice today with a specific example, rather than retelling the passage.' },
    ]),
    ...sub(P2, 'history-importance-hadiths-2058', '2.2', [
      { n: 1, f: 'What is the difference between isnad and matn?', b: 'The isnad is the chain of people who transmitted a Hadith. The matn is its text (wording). Scholars tested both to judge a Hadith’s reliability.' },
      { n: 2, f: 'What are the three main grades of Hadith?', b: 'Sahih (sound), hasan (good) and da’if (weak).' },
      { n: 3, f: 'What is the difference between a musnad and a musannaf collection?', b: 'A musnad arranges Hadiths by the Companion who narrated them, such as the Musnad of Ahmad ibn Hanbal. A musannaf arranges them by subject, such as the Muwatta of Imam Malik.' },
      { n: 4, f: 'Name the six major Sunni Hadith collections', b: 'Sahih al-Bukhari, Sahih Muslim, and the Sunan of Abu Dawud, al-Tirmidhi, al-Nasa’i and Ibn Majah.' },
      { n: 5, f: 'Name the four major Shi’a Hadith collections', b: 'Al-Kafi (al-Kulayni), Man la yahduruhu al-faqih (Ibn Babawayh, al-Saduq), and Tahdhib al-ahkam and al-Istibsar (both by al-Tusi).' },
      { n: 6, f: 'How are Hadiths used in Islamic law?', b: 'They are the second source of law after the Qur’an, explaining and adding detail to it, and are used alongside consensus (ijma’) and analogy (qiyas).' },
      { n: 7, f: 'Which Umayyad caliph ordered Hadiths to be collected in writing?', b: 'Umar ibn Abd al-Aziz (ruled 717–720), concerned that knowledge would be lost as scholars died.' },
    ]),
    ...sub(P2, 'rightly-guided-caliphs-2058', '2.3', [
      { n: 1, f: 'Name the four Rightly Guided Caliphs and the dates of their rule', b: 'Abu Bakr (632–634), Umar ibn al-Khattab (634–644), Uthman ibn Affan (644–656), Ali ibn Abi Talib (656–661).' },
      { n: 2, f: 'What were the Ridda wars?', b: 'Abu Bakr’s campaigns against tribes that withheld zakat or followed false prophets after the Prophet’s death. They brought Arabia back under Madinah’s authority and held the community together.' },
      { n: 3, f: 'Name three military achievements of Umar’s rule', b: 'Victory over the Byzantines at Yarmuk (636), over the Persians at Qadisiyyah, and the surrender of Jerusalem.' },
      { n: 4, f: 'What administrative changes did Umar make?', b: 'He set up the diwan (registers for pay and records), organised provinces and taxation, founded garrison towns such as Kufa and Basra, and introduced the Hijri calendar.' },
      { n: 5, f: 'What were the main achievement and the main difficulty of Uthman’s rule?', b: 'Achievement: the standardised written Qur’an sent to the main centres; also the first Muslim navy. Difficulty: growing unrest, including accusations of favouring his relatives, which ended with his assassination in Madinah in 656.' },
      { n: 6, f: 'What difficulties did Ali face as Caliph?', b: 'Civil war (the First Fitna): the Battle of the Camel (656), the Battle of Siffin (657) against Mu’awiya and the arbitration that followed, and the revolt of the Kharijites, one of whom assassinated him in Kufa in 661.' },
      { n: 7, f: 'Why are the Rightly Guided Caliphs seen as models of leadership?', b: 'They are looked back to for just government, consultation (shura), simple living and the ruler’s accountability to the community, and as examples for relations with other states.' },
    ]),
    ...sub(P2, 'articles-faith-pillars-2058', '2.4', [
      { n: 1, f: 'What are the six Articles of Faith?', b: 'Belief in God, the angels, the revealed Books, the prophets, God’s predestination and decree, and the Resurrection and the Last Day.' },
      { n: 2, f: 'Name four angels and their roles', b: 'Jibril brought revelation to the prophets; Mika’il brings provision such as rain; Israfil will blow the trumpet on the Last Day; Izra’il is the Angel of Death.' },
      { n: 3, f: 'Which Books do Muslims believe were revealed, and to whom?', b: 'The Tawrat to Musa, the Zabur to Dawud, the Injil to Isa, and the Qur’an to Muhammad (pbuh), as well as the Scrolls of Ibrahim.' },
      { n: 4, f: 'What are the three meanings of jihad in the syllabus?', b: 'Physical, mental and spiritual struggle in the way of God: including struggling against one’s own wrongdoing, striving to learn and spread knowledge, and defending the community.' },
      { n: 5, f: 'What are the five Pillars of Islam?', b: 'Shahada (declaration of faith), salat (prayer), zakat (alms-giving), sawm (fasting in Ramadan) and Hajj (pilgrimage to Makkah).' },
      { n: 6, f: 'Name the five daily prayers', b: 'Fajr (dawn), Zuhr (midday), Asr (afternoon), Maghrib (sunset) and Isha (night).' },
      { n: 7, f: 'How is zakat calculated, and who receives it?', b: 'Usually 2.5% of savings held for a full lunar year above a minimum amount (nisab). It goes to those in need, such as the poor and the destitute, as listed in the Qur’an.' },
      { n: 8, f: 'Who is exempt from fasting in Ramadan?', b: 'Among others: children, the sick, travellers, the elderly who cannot fast, pregnant or breastfeeding women, and women who are menstruating. Missed fasts are made up later where possible, or fidya is given.' },
      { n: 9, f: 'What are the main rites of Hajj?', b: 'Entering ihram, tawaf around the Ka’ba, sa’i between Safa and Marwa, standing at Arafat on 9 Dhu al-Hijjah, the night at Muzdalifah, stoning the pillars at Mina, the sacrifice, and a final tawaf.' },
      { n: 10, f: 'Exam trap: what do answers on the Articles and Pillars most often lack?', b: 'Their significance. Describing a belief or practice is not enough; explain what it means for a Muslim’s life.' },
    ]),
  ],
};
