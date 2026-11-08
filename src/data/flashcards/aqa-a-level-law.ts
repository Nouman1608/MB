/**
 * D-444 -- flashcards for AQA A-level Law 7162 (for teaching from September
 * 2017 onwards, A-level exams 2019 onwards).
 *
 * None of the 57 subtopics carries a number in syllabus-topics.ts (the
 * specification does not number its content statements), so the validator
 * requires their ids to be `-<n>`, unique across the whole deck. As in
 * oxfordaqa-igcse-accounting.ts, each subtopic is given its own block of a
 * hundred: the first subtopic uses -101, -102, ..., the second -201, ...
 * (block numbers follow the order below, which is specification order). Ids
 * are permanent (browser progress is keyed by them): add a card with the next
 * unused number in its block, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 7162); origin 'revision-notes'.
 *
 * Written from Marlbridge's own 7162 study guides and revision notes. Statutes
 * and cases are real; years are those used on those pages, or otherwise the
 * year of the law report. Where a point could not be stated with confidence it
 * is left out. Not tiered. Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; src?: string }

/** A subtopic with no number in the syllabus record: ids `-<block × 100 + n>`. */
const unnumbered = (topic: string, subtopic: string, block: number, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, src }) => ({
    id: `-${block * 100 + n}`,
    topic,
    subtopic,
    front: f,
    back: b,
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const T1 = 'the-nature-of-law-and-the-english-legal-system-7162';
const T2 = 'criminal-law-7162';
const T3 = 'tort-7162';
const T4 = 'law-of-contract-7162';
const T5 = 'human-rights-7162';

const CRIM = 'aqa-a-level-law-criminal-liability-revision-notes';

export const DECK_AQA_A_LEVEL_LAW: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'law',
  syllabusCode: '7162',
  syllabusSeries: 'For teaching from September 2017 onwards, A-level exams 2019 onwards',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 3.1 The nature of law and the English legal system
    ...unnumbered(T1, 'nature-of-law-7162', 1, [
      { n: 1, f: 'How does a legal rule differ from other rules and norms of behaviour?', b: 'A legal rule is made by a recognised authority (Parliament or the courts) and is enforced by the state through the courts, with sanctions. Moral rules, customs and etiquette are enforced only by social pressure or conscience.' },
      { n: 2, f: 'What is the difference between civil and criminal law?', b: 'Criminal law: the state prosecutes wrongs against society; proof beyond reasonable doubt; the outcome is punishment.\nCivil law: individuals sue over private disputes (contract, tort); proof on the balance of probabilities; the outcome is usually compensation.' },
      { n: 3, f: 'What are the main sources of English law?', b: 'Legislation (Acts of Parliament and delegated legislation), judicial precedent (common law), and formerly EU law. Custom and equity are historical sources.' },
    ]),
    ...unnumbered(T1, 'nature-of-law-law-and-society-7162', 2, [
      { n: 1, f: 'What roles does law play in society?', b: 'Keeping order (social control), protecting rights, settling disputes, regulating relationships and economic activity, and bringing about social change.' },
      { n: 2, f: 'What is Roscoe Pound’s view of law as social engineering?', b: 'Law should balance competing interests (individual, public and social) so that as many interests as possible are satisfied with the least friction.' },
      { n: 3, f: 'How does law balance competing interests? Give an example.', b: 'It weighs one group’s interests against another’s, e.g. in nuisance the claimant’s enjoyment of land is weighed against the defendant’s use of theirs (Miller v Jackson, 1977, refused an injunction to protect the community’s cricket).' },
      { n: 4, f: 'How can the law be used as a means of social control?', b: 'Through the criminal law and sanctions that deter and punish, through regulation (licensing, inspections), and through civil remedies that set standards of behaviour.' },
    ]),
    ...unnumbered(T1, 'nature-of-law-law-and-morality-7162', 3, [
      { n: 1, f: 'How do law and morality differ?', b: 'Law is made formally, changes deliberately, is enforced by the state and is obligatory. Morality develops gradually, varies between people and groups, and is enforced by conscience and social pressure. They overlap (e.g. murder, theft) but are not the same.' },
      { n: 2, f: 'What was the Hart–Devlin debate?', b: 'After the Wolfenden Report (1957). Lord Devlin: society may use the law to enforce its shared morality, or it may disintegrate. Professor Hart, following Mill’s harm principle: the law should intervene only to prevent harm to others.' },
      { n: 3, f: 'How does R v Brown (1993) show the link between law and morality?', b: 'The House of Lords held that consent was no defence to actual bodily harm inflicted in private sadomasochistic activity, enforcing a moral view even though those involved consented.' },
      { n: 4, f: 'What is the difference between natural law and legal positivism?', b: 'Natural law: a rule must be morally just to be valid law.\nLegal positivism: a rule is valid law if made by the proper procedure, whatever its moral content.' },
      { n: 5, f: 'How has the law changed with moral attitudes? Give an example.', b: 'R v R (1991): the House of Lords held that a husband can be guilty of raping his wife, reflecting the changed view of marriage.' },
    ]),
    ...unnumbered(T1, 'nature-of-law-law-and-justice-7162', 4, [
      { n: 1, f: 'What are distributive and corrective justice (Aristotle)?', b: 'Distributive: the fair sharing out of benefits and burdens in society.\nCorrective: putting right the balance between parties after a wrong, as damages do.' },
      { n: 2, f: 'What is the difference between formal (procedural) and substantive justice?', b: 'Formal/procedural: fair rules and procedures applied equally (e.g. a fair trial).\nSubstantive: whether the content of the law and the outcome are themselves just.' },
      { n: 3, f: 'What is the utilitarian theory of justice?', b: 'Bentham and Mill: the law is just if it produces the greatest happiness for the greatest number. Criticised because it can justify sacrificing a minority.' },
      { n: 4, f: 'What is John Rawls’ “veil of ignorance”?', b: 'In A Theory of Justice (1971): just principles are those people would choose without knowing their own place in society, which favours equal liberties and helping the least well off.' },
    ]),
    ...unnumbered(T1, 'the-rule-of-law-7162', 5, [
      { n: 1, f: 'What are Dicey’s three principles of the rule of law?', b: 'No one is punished except for a breach of law proved in the ordinary courts; everyone is equal before the law, including officials; and rights are secured by decisions of the ordinary courts.' },
      { n: 2, f: 'How did Lord Bingham describe the rule of law?', b: 'In The Rule of Law (2010) he set out eight principles, including that the law must be accessible, clear and predictable, apply equally to all, protect fundamental human rights, and that ministers must act within their powers.' },
      { n: 3, f: 'Which case shows that the state needs legal authority for its actions?', b: 'Entick v Carrington (1765): officers who searched a home and seized papers under a warrant with no legal basis were liable in trespass.' },
      { n: 4, f: 'Give two ways the English legal system upholds the rule of law.', b: 'Judicial independence and judicial review of the actions of ministers and public bodies. Others: the right to a fair trial, legal aid, and the presumption of innocence.' },
    ]),
    ...unnumbered(T1, 'law-making-parliamentary-law-making-7162', 6, [
      { n: 1, f: 'What are Green Papers and White Papers?', b: 'Green Paper: a consultation document setting out proposals for discussion.\nWhite Paper: the government’s firm proposals for new law.' },
      { n: 2, f: 'What are the stages of a Bill in Parliament?', b: 'First Reading, Second Reading (main debate and vote), Committee Stage, Report Stage, Third Reading; the process repeats in the other House; then Royal Assent.' },
      { n: 3, f: 'What do the Parliament Acts 1911 and 1949 do?', b: 'They allow a Bill passed by the House of Commons to become law without the consent of the House of Lords after a delay, as with the Hunting Act 2004.' },
      { n: 4, f: 'What is parliamentary sovereignty?', b: 'Parliament can make or repeal any law, one Parliament cannot bind its successors, and no court can set aside an Act of Parliament.' },
      { n: 5, f: 'Name three influences on Parliament’s law making.', b: 'The Law Commission, pressure groups, the media, political parties’ manifestos, and public opinion.' },
    ]),
    ...unnumbered(T1, 'law-making-delegated-legislation-7162', 7, [
      { n: 1, f: 'What are the three main forms of delegated legislation?', b: 'Statutory instruments (made by government ministers), byelaws (made by local authorities and public corporations), and Orders in Council (made by the Privy Council).' },
      { n: 2, f: 'How does Parliament control delegated legislation?', b: 'Through the enabling Act itself, the affirmative and negative resolution procedures, and scrutiny committees such as the Joint Committee on Statutory Instruments.' },
      { n: 3, f: 'How do the courts control delegated legislation?', b: 'By judicial review: it can be declared ultra vires and void if the correct procedure was not followed (Agricultural Training Board v Aylesbury Mushrooms, 1972), if it goes beyond the powers given, or if it is unreasonable (Strickland v Hayes Borough Council, 1896).' },
      { n: 4, f: 'What are the advantages of delegated legislation?', b: 'It saves Parliament’s time, allows experts and local knowledge to be used, and can be made and changed quickly.' },
      { n: 5, f: 'What are the disadvantages of delegated legislation?', b: 'It is made by unelected people, so it is less democratic; there is so much that scrutiny is limited; and it may be hard for the public to find and follow.' },
    ]),
    ...unnumbered(T1, 'law-making-statutory-interpretation-7162', 8, [
      { n: 1, f: 'What is the literal rule? Give a case.', b: 'Words are given their plain, ordinary meaning even if the result is absurd. Whiteley v Chappell (1868): impersonating a dead person was not impersonating “a person entitled to vote”.' },
      { n: 2, f: 'What is the golden rule? Give a case.', b: 'The literal meaning is modified to avoid an absurd result. Narrow approach: Adler v George (1964), “in the vicinity of” read to include inside. Broad approach: Re Sigsworth (1935), a murderer could not inherit from his victim.' },
      { n: 3, f: 'What is the mischief rule? Give a case.', b: 'From Heydon’s Case (1584): the court asks what mischief the Act was passed to remedy. Smith v Hughes (1960): prostitutes calling from windows were “in a street”, as the Act aimed to stop soliciting in public.' },
      { n: 4, f: 'What is the purposive approach? Give a case.', b: 'The court looks for the purpose of the Act as a whole. R (Quintavalle) v Secretary of State for Health (2003): organisms created by cell nuclear replacement were within the Act regulating embryos.' },
      { n: 5, f: 'What are intrinsic and extrinsic aids to interpretation?', b: 'Intrinsic: inside the Act (long title, preamble, headings, schedules, interpretation sections).\nExtrinsic: outside it (dictionaries, Law Commission reports, earlier Acts, and Hansard since Pepper v Hart, 1993).' },
      { n: 6, f: 'How does the Human Rights Act 1998 affect statutory interpretation?', b: 'Section 3 requires legislation to be read and given effect, so far as possible, in a way compatible with Convention rights.' },
    ]),
    ...unnumbered(T1, 'law-making-judicial-precedent-7162', 9, [
      { n: 1, f: 'What is stare decisis?', b: '“Stand by what has been decided”: like cases are decided alike, and lower courts follow the decisions of higher courts.' },
      { n: 2, f: 'What is the difference between ratio decidendi and obiter dicta?', b: 'Ratio decidendi: the legal reasoning needed for the decision, which binds lower courts.\nObiter dicta: other things said, which are persuasive only.' },
      { n: 3, f: 'What does the Practice Statement 1966 allow? Give an example of its use.', b: 'The House of Lords (now the Supreme Court) may depart from its own previous decisions when it appears right to do so. In R v Shivpuri (1986) it overruled Anderton v Ryan (1985) on attempting the impossible.' },
      { n: 4, f: 'When may the Court of Appeal depart from its own decisions?', b: 'Young v Bristol Aeroplane (1944): where two of its earlier decisions conflict, where its decision conflicts with a later House of Lords/Supreme Court decision, or where its decision was made per incuriam (by mistake).' },
      { n: 5, f: 'How do judges avoid following a precedent?', b: 'Distinguishing (the material facts are different), overruling (a higher court decides an earlier case in a different case was wrongly decided) and reversing (a higher court changes the decision in the same case on appeal).' },
      { n: 6, f: 'What are the advantages and disadvantages of judicial precedent?', b: 'Advantages: certainty, consistency, fairness, flexibility, and practical detail from real cases.\nDisadvantages: rigidity, complexity and volume of cases, slow change, and judges making law without democratic mandate.' },
    ]),
    ...unnumbered(T1, 'law-making-law-reform-7162', 10, [
      { n: 1, f: 'What is the Law Commission?', b: 'A full-time, independent body set up by the Law Commissions Act 1965 to keep the law under review and recommend reform.' },
      { n: 2, f: 'What are codification, consolidation and repeal?', b: 'Codification: bringing all the law on a topic into one code.\nConsolidation: combining several Acts on a topic into one Act.\nRepeal: removing obsolete laws from the statute book.' },
      { n: 3, f: 'Give an example of a Law Commission report becoming law.', b: 'The Fraud Act 2006 was based on the Law Commission’s report on fraud.' },
      { n: 4, f: 'What are the strengths and weaknesses of the Law Commission?', b: 'Strengths: expert, independent, consults widely and produces draft Bills.\nWeaknesses: the government does not have to act on its reports, and many are implemented late or not at all.' },
    ]),
    ...unnumbered(T1, 'law-making-the-european-union-7162', 11, [
      { n: 1, f: 'What are the main institutions of the EU?', b: 'The European Commission, the Council of the European Union, the European Parliament and the Court of Justice of the European Union.' },
      { n: 2, f: 'What is the difference between EU regulations and directives?', b: 'Regulations are directly applicable: they became law in every member state without further action.\nDirectives set a result to be achieved; each member state chose how to implement them by a set date.' },
      { n: 3, f: 'What did the Factortame litigation (1990) show about EU law?', b: 'The House of Lords disapplied part of an Act of Parliament (the Merchant Shipping Act 1988) because it conflicted with EU law, showing that EU law took priority while the UK was a member.' },
      { n: 4, f: 'What is the position of EU law in the UK after Brexit?', b: 'The UK left the EU on 31 January 2020. The European Union (Withdrawal) Act 2018 kept existing EU-derived law as “retained EU law”, renamed “assimilated law” from 2024; Parliament can now amend or repeal it.' },
    ]),
    ...unnumbered(T1, 'the-legal-system-the-civil-courts-and-other-forms-of-dispute-resolution-7162', 12, [
      { n: 1, f: 'Where are civil cases heard and how are they allocated?', b: 'In the County Court or, for higher-value or complex claims, the High Court. Cases are allocated to the small claims, fast, intermediate or multi-track by value and complexity.' },
      { n: 2, f: 'What is the civil appeal route from the High Court?', b: 'High Court → Court of Appeal (Civil Division) → Supreme Court, which hears only cases of general public importance.' },
      { n: 3, f: 'What are negotiation, mediation and arbitration?', b: 'Negotiation: the parties settle the dispute themselves.\nMediation: a neutral mediator helps the parties reach their own agreement.\nArbitration: an arbitrator makes a binding decision (Arbitration Act 1996).' },
      { n: 4, f: 'What are tribunals and how are they organised?', b: 'Specialist bodies that decide disputes in particular areas, such as employment and immigration. The Tribunals, Courts and Enforcement Act 2007 created the First-tier Tribunal and the Upper Tribunal.' },
      { n: 5, f: 'What are the advantages and disadvantages of ADR?', b: 'Advantages: cheaper, quicker, private, informal, and helps preserve relationships.\nDisadvantages: an imbalance of power between the parties, no binding precedent, and limited appeal (from arbitration).' },
    ]),
    ...unnumbered(T1, 'the-legal-system-the-criminal-courts-and-lay-people-7162', 13, [
      { n: 1, f: 'Which criminal cases are tried in the Magistrates’ Court and which in the Crown Court?', b: 'Summary offences: Magistrates’ Court.\nEither-way offences: either court (the defendant may choose a jury trial).\nIndictable offences: Crown Court, with a judge and jury.' },
      { n: 2, f: 'What is the burden and standard of proof in a criminal trial?', b: 'The prosecution must prove guilt beyond reasonable doubt (Woolmington v DPP, 1935).' },
      { n: 3, f: 'Who are lay magistrates?', b: 'Unpaid volunteers with no legal qualifications who sit as a bench of two or three, advised on the law by a legally qualified justices’ clerk or legal adviser.' },
      { n: 4, f: 'Who is eligible for jury service?', b: 'Under the Juries Act 1974: aged 18 to 75, on the electoral register, and resident in the UK for at least five years since age 13. Some people, such as those with certain criminal convictions, are disqualified.' },
      { n: 5, f: 'What is a majority verdict?', b: 'Where a jury cannot all agree, the judge may accept a verdict of at least 10 of 12 jurors after they have deliberated for a minimum period.' },
      { n: 6, f: 'What are the advantages and disadvantages of juries?', b: 'Advantages: public confidence, a cross-section of society, and impartiality (no case-hardening).\nDisadvantages: possible bias or influence of the media and the internet, no reasons given, and secret deliberations (R v Young, 1995, a Ouija board was used).' },
    ]),
    ...unnumbered(T1, 'the-legal-system-legal-personnel-and-the-judiciary-7162', 14, [
      { n: 1, f: 'What is the difference between barristers and solicitors?', b: 'Barristers: specialist advocates, usually self-employed in chambers, regulated by the Bar Standards Board.\nSolicitors: deal directly with clients on a wide range of work, regulated by the Solicitors Regulation Authority.' },
      { n: 2, f: 'What are chartered legal executives?', b: 'Qualified lawyers who usually specialise in one area of law, trained and qualified through the Chartered Institute of Legal Executives (CILEx).' },
      { n: 3, f: 'How are judges appointed?', b: 'Through the independent Judicial Appointments Commission, set up by the Constitutional Reform Act 2005, selecting on merit.' },
      { n: 4, f: 'What did the Constitutional Reform Act 2005 change?', b: 'It reduced the Lord Chancellor’s role, made the Lord Chief Justice head of the judiciary, created the Judicial Appointments Commission, and created the Supreme Court (which opened in 2009).' },
      { n: 5, f: 'Why is judicial independence important and how is it protected?', b: 'Judges must decide cases, including against the government, without fear or favour. It is protected by security of tenure (senior judges can be removed only by an address of both Houses of Parliament), immunity from suit, and protected salaries.' },
    ]),
    ...unnumbered(T1, 'the-legal-system-access-to-justice-and-funding-7162', 15, [
      { n: 1, f: 'Which Act governs legal aid, and who runs it?', b: 'The Legal Aid, Sentencing and Punishment of Offenders Act 2012 (LASPO). It is administered by the Legal Aid Agency.' },
      { n: 2, f: 'What tests apply to civil legal aid?', b: 'The case must be within the scope of the scheme (LASPO removed many areas of civil law), and the applicant must pass a means test and a merits test.' },
      { n: 3, f: 'What tests apply to criminal legal aid?', b: 'An interests of justice test (e.g. the risk of losing liberty) and, in most cases, a means test. Free advice from a duty solicitor is available to anyone held at a police station.' },
      { n: 4, f: 'What is a conditional fee agreement?', b: 'A “no win, no fee” agreement: the lawyer is paid only if the case is won, usually with a success fee on top. Since LASPO the success fee cannot be recovered from the losing side.' },
      { n: 5, f: 'Name other sources of legal advice besides legal aid.', b: 'Citizens Advice, law centres, pro bono work by lawyers, trade unions, and legal expenses insurance.' },
    ]),

    // 3.2 Criminal law
    ...unnumbered(T2, 'the-rules-of-criminal-law-7162', 16, [
      { n: 1, f: 'What is the burden and standard of proof in criminal law?', b: 'The burden is on the prosecution, and it must prove the case beyond reasonable doubt: the “golden thread” (Woolmington v DPP, 1935).' },
      { n: 2, f: 'What are the sources of criminal law?', b: 'Statute (e.g. the Offences Against the Person Act 1861 and the Theft Act 1968) and the common law (murder and the common law defences are largely judge-made).' },
      { n: 3, f: 'How do you apply the criminal law to a problem scenario?', b: 'Identify the offence; state and apply its actus reus and mens rea with authority; consider any defence; reach a conclusion on liability.' },
    ]),
    ...unnumbered(T2, 'theory-in-criminal-law-7162', 17, [
      { n: 1, f: 'What is the harm principle?', b: 'From J. S. Mill: the only purpose for which power can rightfully be used over a member of a civilised community, against their will, is to prevent harm to others.' },
      { n: 2, f: 'What is the distinction between fault and harm in criminal law?', b: 'Harm is the injury or loss caused. Fault is the blameworthiness of the defendant’s state of mind. The law grades offences by both: e.g. murder and manslaughter cause the same harm but differ in fault.' },
      { n: 3, f: 'Why is strict liability controversial?', b: 'It allows conviction without proof of fault for at least one element, which can seem unjust; it is justified by public protection and the ease of enforcing regulatory offences.' },
      { n: 4, f: 'How does the criminal law balance the rights of victims and defendants?', b: 'Victims and society need protection and justice; defendants need a fair trial, the presumption of innocence and proof beyond reasonable doubt. Defences such as self-defence show the balance in action.' },
    ]),
    ...unnumbered(T2, 'general-elements-of-liability-7162', 18, [
      { n: 1, f: 'What is the coincidence (contemporaneity) rule?', b: 'The actus reus and the mens rea must be present at the same time. A continuing act (Fagan v Metropolitan Police Commissioner, 1969) or a single series of acts (Thabo Meli v R, 1954) can satisfy this.' },
      { n: 2, f: 'What is intention in criminal law?', b: 'Aim or purpose; a jury may, but need not, also find intention where the defendant foresaw a consequence as virtually certain.', src: CRIM },
      { n: 3, f: 'What is subjective recklessness?', b: 'The defendant personally foresaw a risk and unreasonably took it anyway.', src: CRIM },
      { n: 4, f: 'What is negligence as a level of fault?', b: 'Judged against an objective reasonable-person standard, not the defendant’s own state of mind.', src: CRIM },
      { n: 5, f: 'What is strict liability?', b: 'An offence where no mens rea is needed for at least one element of the actus reus.', src: CRIM },
      { n: 6, f: 'What is transferred malice?', b: 'Mens rea aimed at one victim transfers to the actual victim, if the harm is of the same type (R v Latimer, 1886). It does not transfer between different types of harm (R v Pembliton, 1874).' },
      { n: 7, f: 'When does a duty to act arise, so an omission can be the actus reus?', b: 'From contract (R v Pittwood, 1902), a special relationship (R v Gibbins and Proctor, 1918), voluntarily taking on care (R v Stone and Dobinson, 1977), creating a dangerous situation (R v Miller, 1983), or statute.' },
      { n: 8, f: 'What are factual and legal causation?', b: 'Factual: “but for” the defendant’s conduct, the result would not have happened (R v White, 1910).\nLegal: the conduct was an operating and substantial cause, with no break in the chain of causation (R v Smith, 1959; R v Cheshire, 1991).' },
    ]),
    ...unnumbered(T2, 'fatal-offences-against-the-person-7162', 19, [
      { n: 1, f: 'What is the actus reus and mens rea of murder?', b: 'Actus reus: the unlawful killing of a human being under the King’s peace.\nMens rea: malice aforethought, meaning an intention to kill or an intention to cause grievous bodily harm (R v Vickers, 1957).' },
      { n: 2, f: 'What is the loss of control defence?', b: 'A partial defence to murder under ss54–55 Coroners and Justice Act 2009: the killing resulted from a loss of self-control with a qualifying trigger (fear of serious violence, or things said or done of an extremely grave character), and a person of D’s sex and age with normal tolerance might have acted in the same way.' },
      { n: 3, f: 'What is diminished responsibility?', b: 'A partial defence to murder under s2 Homicide Act 1957, as amended by s52 Coroners and Justice Act 2009: an abnormality of mental functioning from a recognised medical condition that substantially impaired D’s ability to understand, form a rational judgment or exercise self-control, and explains the killing.' },
      { n: 4, f: 'What is unlawful act manslaughter?', b: 'Killing by an unlawful (criminal) act that is dangerous, in that a sober and reasonable person would see the risk of some harm (R v Church, 1966), and which causes the death. D need not foresee harm (DPP v Newbury and Jones, 1977).' },
      { n: 5, f: 'What is gross negligence manslaughter?', b: 'R v Adomako (1995): D owed the victim a duty of care, breached it causing death, and the breach was so bad that the jury considers it criminal (gross negligence).' },
      { n: 6, f: 'What is the effect of a successful partial defence to murder?', b: 'The conviction is reduced from murder to voluntary manslaughter, so the judge has discretion in sentencing instead of the mandatory life sentence.' },
    ]),
    ...unnumbered(T2, 'non-fatal-offences-against-the-person-7162', 20, [
      { n: 1, f: 'What are the actus reus of common assault and battery?', b: 'Assault: causing the victim to apprehend immediate unlawful force (silent phone calls can be enough: R v Ireland, 1998).\nBattery: applying unlawful force to another. Both are charged under s39 Criminal Justice Act 1988.' },
      { n: 2, f: 'What is assault occasioning actual bodily harm?', b: 's47 Offences Against the Person Act 1861: an assault or battery that causes actual bodily harm, meaning any hurt or injury calculated to interfere with health or comfort (R v Miller, 1954). The mens rea is only that for the assault or battery.' },
      { n: 3, f: 'What is the offence under s20 Offences Against the Person Act 1861?', b: 'Unlawfully and maliciously wounding or inflicting grievous bodily harm. The mens rea is intention or recklessness as to causing some harm (R v Savage; DPP v Parmenter, 1992).' },
      { n: 4, f: 'What is a wound, and what is grievous bodily harm?', b: 'Wound: a break in both layers of the skin (JCC v Eisenhower, 1984).\nGrievous bodily harm: really serious harm, which can include psychiatric injury (R v Burstow, 1998).' },
      { n: 5, f: 'What is the offence under s18 Offences Against the Person Act 1861?', b: 'Wounding or causing grievous bodily harm with intent to cause GBH (or to resist arrest). It needs specific intent, not recklessness, and carries a maximum of life imprisonment.' },
    ]),
    ...unnumbered(T2, 'property-offences-7162', 21, [
      { n: 1, f: 'What is the definition of theft?', b: 's1 Theft Act 1968: dishonestly appropriating property belonging to another with the intention of permanently depriving the other of it.' },
      { n: 2, f: 'What is appropriation, and can it happen with the owner’s consent?', b: 'Any assumption of the rights of an owner (s3). It can happen with consent (R v Gomez, 1993), and even by receiving a valid gift (R v Hinks, 2000).' },
      { n: 3, f: 'What is the test for dishonesty?', b: 's2 Theft Act 1968 lists cases that are not dishonest (e.g. a belief in a legal right to the property). Otherwise: what D actually believed about the facts, then whether the conduct was dishonest by the standards of ordinary decent people (Ivey v Genting Casinos, 2017; R v Barton and Booth, 2020).' },
      { n: 4, f: 'What counts as property and as belonging to another in theft?', b: 'Property (s4): money and all other property, real or personal, including things in action. Confidential information is not property (Oxford v Moss, 1979).\nBelonging to another (s5): anyone with possession, control or a proprietary interest, so even an owner can steal their own goods (R v Turner (No 2), 1971).' },
      { n: 5, f: 'What is the intention to permanently deprive?', b: 's6 Theft Act 1968: intending to treat the thing as one’s own to dispose of regardless of the owner’s rights. Borrowing counts only if the thing is returned with all its goodness or value gone (R v Lloyd, 1985).' },
      { n: 6, f: 'What is robbery and how much force is needed?', b: 's8 Theft Act 1968: theft with force, or putting or seeking to put someone in fear of force, immediately before or at the time of the theft and in order to steal. Little force is needed (R v Dawson and James, 1976), and the theft can be continuing (R v Hale, 1979).' },
    ]),
    ...unnumbered(T2, 'preliminary-offence-7162', 22, [
      { n: 1, f: 'What is the actus reus of an attempt?', b: 's1(1) Criminal Attempts Act 1981: doing an act that is more than merely preparatory to the commission of the offence (R v Jones, 1990; R v Geddes, 1996, no attempt where D had not moved from preparation to execution).' },
      { n: 2, f: 'What is the mens rea of an attempt?', b: 'An intention to commit the full offence. For attempted murder, only an intention to kill will do (R v Whybrow, 1951).' },
      { n: 3, f: 'Can you be guilty of attempting the impossible?', b: 'Yes. s1(2) Criminal Attempts Act 1981 provides that a person may be guilty of attempt even though the facts make the offence impossible (R v Shivpuri, 1986).' },
    ]),
    ...unnumbered(T2, 'capacity-defences-7162', 23, [
      { n: 1, f: 'What are the M’Naghten Rules (1843) on insanity?', b: 'D must be labouring under a defect of reason from a disease of the mind, so that D did not know the nature and quality of the act, or did not know it was wrong.' },
      { n: 2, f: 'What is the difference between insane and non-insane automatism?', b: 'Insane: caused by an internal factor, a disease of the mind, e.g. diabetes causing hyperglycaemia (R v Hennessy, 1989) or epilepsy (R v Sullivan, 1984).\nNon-insane: caused by an external factor, e.g. an insulin injection (R v Quick, 1973); leads to a full acquittal.' },
      { n: 3, f: 'What is automatism?', b: 'An act done by the muscles without any control by the mind, caused by an external factor, e.g. being attacked by a swarm of bees (Hill v Baxter, 1958). Self-induced automatism is no defence to basic intent offences if D was reckless (R v Bailey, 1983).' },
      { n: 4, f: 'When is voluntary intoxication a defence?', b: 'It can negate the mens rea of a specific intent offence (e.g. murder, s18), but not of a basic intent offence (e.g. s20, s47, assault), since getting drunk is itself reckless (DPP v Majewski, 1977).' },
      { n: 5, f: 'Is Dutch courage or involuntary intoxication a defence?', b: 'Drinking to gain courage for a planned crime is no defence (A-G for Northern Ireland v Gallagher, 1963). Involuntary intoxication is no defence if D still formed the mens rea (R v Kingston, 1994).' },
    ]),
    ...unnumbered(T2, 'necessity-defences-7162', 24, [
      { n: 1, f: 'What is the law on self-defence?', b: 'Common law and s3 Criminal Law Act 1967, clarified by s76 Criminal Justice and Immigration Act 2008: was force necessary, judged on the facts as D honestly believed them, and was the force reasonable in those circumstances?' },
      { n: 2, f: 'How does self-defence differ in householder cases?', b: 'Under s76(5A) Criminal Justice and Immigration Act 2008 (added in 2013), a householder defending against an intruder may use force that is disproportionate, as long as it is not grossly disproportionate.' },
      { n: 3, f: 'What is the test for duress by threats?', b: 'R v Graham (1982), confirmed in R v Hasan (2005): D was compelled by a threat of death or serious injury that D reasonably believed, and a sober person of reasonable firmness sharing D’s characteristics would have acted the same way.' },
      { n: 4, f: 'For which offences is duress not available?', b: 'Murder (R v Howe, 1987) and attempted murder (R v Gotts, 1992). It is also unavailable if D voluntarily joined a criminal group knowing of the risk of being threatened (R v Hasan, 2005).' },
      { n: 5, f: 'What is duress of circumstances?', b: 'Where the threat of death or serious injury comes from the situation rather than a person’s demand, e.g. driving dangerously to escape a threat (R v Willer, 1986; R v Conway, 1989). The same two-stage test applies.' },
      { n: 6, f: 'Is necessity a defence to murder?', b: 'Generally no (R v Dudley and Stephens, 1884). Re A (Conjoined Twins) (2000) allowed an operation that would kill one twin to save the other, on very narrow facts.' },
    ]),

    // 3.3 Tort
    ...unnumbered(T3, 'the-rules-of-tort-law-7162', 25, [
      { n: 1, f: 'What is a tort?', b: 'A civil wrong, other than a breach of contract, for which the claimant can sue the defendant for a remedy such as damages or an injunction.' },
      { n: 2, f: 'What is the burden and standard of proof in tort?', b: 'The claimant must prove the case on the balance of probabilities: that it is more likely than not.' },
      { n: 3, f: 'What are the three stages of negligence?', b: 'Duty of care, breach of duty, and damage caused by the breach (causation and remoteness), in that order.' },
    ]),
    ...unnumbered(T3, 'theory-of-tort-law-7162', 26, [
      { n: 1, f: 'What policy factors limit the duty of care?', b: 'Fear of opening the floodgates to many claims, the effect on public services and defensive practice, and whether it is fair, just and reasonable to impose a duty.' },
      { n: 2, f: 'Why does the law restrict claims for pure economic loss and psychiatric injury?', b: 'To prevent indeterminate liability to an unlimited class of claimants, and because such losses are harder to prove and to foresee than physical harm.' },
      { n: 3, f: 'What is the purpose of vicarious liability?', b: 'To make sure the victim can be compensated by someone able to pay (the employer, usually insured), and to place the cost on the business that created the risk and profits from the work.' },
      { n: 4, f: 'What is the balance between fault and compensation in tort?', b: 'Tort mainly compensates for harm caused by fault, but fault is judged objectively, and some liability (Rylands v Fletcher, vicarious liability) arises without personal fault.' },
    ]),
    ...unnumbered(T3, 'liability-in-negligence-for-physical-injury-to-people-and-damage-to-property-7162', 27, [
      { n: 1, f: 'How is a duty of care established in negligence?', b: 'Where precedent already recognises a duty, it applies (Robinson v Chief Constable of West Yorkshire Police, 2018). In novel situations the Caparo test is used: foreseeability of harm, proximity, and that it is fair, just and reasonable (Caparo Industries v Dickman, 1990).' },
      { n: 2, f: 'What is the standard of care, and how is it adjusted?', b: 'The reasonable person doing the activity. Learners are judged as competent (Nettleship v Weston, 1971); professionals by a responsible body of professional opinion (Bolam, 1957); children by a reasonable child of the same age (Mullin v Richards, 1998).' },
      { n: 3, f: 'Which risk factors decide breach of duty?', b: 'Likelihood of harm (Bolton v Stone, 1951), seriousness of harm and special characteristics of the claimant (Paris v Stepney Borough Council, 1951), cost of precautions (Latimer v AEC, 1953) and social benefit of the activity (Watt v Hertfordshire County Council, 1954).' },
      { n: 4, f: 'What is factual causation in negligence?', b: 'The “but for” test: the harm would not have happened but for the breach. In Barnett v Chelsea and Kensington Hospital (1969) the patient would have died anyway.' },
      { n: 5, f: 'What is the test for remoteness of damage in negligence?', b: 'The type of damage must be reasonably foreseeable (The Wagon Mound (No 1), 1961). The precise way it happens need not be (Hughes v Lord Advocate, 1963), and the thin skull rule applies (Smith v Leech Brain, 1962).' },
    ]),
    ...unnumbered(T3, 'liability-in-negligence-for-economic-loss-and-psychiatric-injury-7162', 28, [
      { n: 1, f: 'Can pure economic loss caused by a negligent act be recovered?', b: 'No. In Spartan Steel v Martin (1973) the claimant recovered for damaged metal and the profit on it, but not for profit lost while the power was off.' },
      { n: 2, f: 'When is there liability for a negligent misstatement?', b: 'Hedley Byrne v Heller (1964): where there is a special relationship, the defendant has special skill, the claimant reasonably relies on the advice, and the defendant knew they would rely on it.' },
      { n: 3, f: 'Who is a primary victim of psychiatric injury?', b: 'Someone in the zone of physical danger, or who reasonably believed they were. If physical injury was foreseeable, they can recover for psychiatric injury (Page v Smith, 1996).' },
      { n: 4, f: 'What must a secondary victim prove for psychiatric injury?', b: 'Alcock v Chief Constable of South Yorkshire (1992): a recognised psychiatric illness, a close tie of love and affection, presence at the event or its immediate aftermath, and perceiving it with their own unaided senses.' },
    ]),
    ...unnumbered(T3, 'occupiers-liability-7162', 29, [
      { n: 1, f: 'Who is an occupier?', b: 'Whoever has sufficient control over the premises; there can be more than one occupier (Wheat v E Lacon, 1966). Premises include fixed or movable structures.' },
      { n: 2, f: 'What duty is owed to lawful visitors?', b: 'The common duty of care under s2(2) Occupiers’ Liability Act 1957: to take reasonable care to see that the visitor will be reasonably safe in using the premises for the purposes for which they are permitted to be there.' },
      { n: 3, f: 'How does the 1957 Act treat children and skilled visitors?', b: 'Children: the occupier must be prepared for them to be less careful than adults (s2(3)(a); Glasgow Corporation v Taylor, 1922).\nSkilled visitors: they are expected to guard against risks of their trade (s2(3)(b); Roles v Nathan, 1963).' },
      { n: 4, f: 'When is an occupier not liable for the work of an independent contractor?', b: 'Under s2(4)(b) Occupiers’ Liability Act 1957, if it was reasonable to give the work to a contractor, the occupier took reasonable steps to check the contractor was competent, and, where possible, checked the work was properly done (Haseldine v Daw, 1941).' },
      { n: 5, f: 'When is a duty owed to trespassers?', b: 'Under s1(3) Occupiers’ Liability Act 1984: the occupier knows of the danger, knows or has reasonable grounds to believe a trespasser is or may come near it, and the risk is one against which the occupier may reasonably be expected to offer some protection.' },
      { n: 6, f: 'Why did the claimant fail in Tomlinson v Congleton Borough Council (2003)?', b: 'He was injured diving into a shallow lake against warning signs. The danger came from his own choice to take an obvious risk, not from the state of the premises, so there was no liability.' },
    ]),
    ...unnumbered(T3, 'nuisance-and-the-escape-of-dangerous-things-7162', 30, [
      { n: 1, f: 'What is private nuisance and who can sue?', b: 'An unlawful interference with a person’s use or enjoyment of land. Only someone with a legal interest in the land, such as an owner or tenant, can sue (Hunter v Canary Wharf, 1997).' },
      { n: 2, f: 'Which factors decide whether an interference is unreasonable?', b: 'The locality (Sturges v Bridgman, 1879), duration and frequency, the sensitivity of the claimant, and malice. Overlooking from a public viewing platform was held a nuisance in Fearn v Tate Gallery (2023).' },
      { n: 3, f: 'What are the defences to private nuisance?', b: 'Prescription (the nuisance has been actionable for 20 years), statutory authority (Allen v Gulf Oil Refining, 1981) and consent. Coming to the nuisance is not a defence (Miller v Jackson, 1977).' },
      { n: 4, f: 'What must be proved under the rule in Rylands v Fletcher (1868)?', b: 'The defendant brought something onto their land in the course of an extraordinary and unusual (non-natural) use, it was likely to do mischief if it escaped, it escaped, and it caused foreseeable damage of the relevant type (Cambridge Water, 1994; Transco v Stockport MBC, 2003).' },
      { n: 5, f: 'What are the defences to Rylands v Fletcher?', b: 'Act of a stranger (Rickards v Lothian, 1913), act of God (Nichols v Marsland, 1876), consent, statutory authority and the claimant’s own default.' },
    ]),
    ...unnumbered(T3, 'vicarious-liability-7162', 31, [
      { n: 1, f: 'What is vicarious liability?', b: 'Liability of one person (usually an employer) for a tort committed by another (usually an employee) in the course of employment, though the employer did nothing wrong.' },
      { n: 2, f: 'How do the courts decide whether someone is an employee?', b: 'Using tests such as control and the economic reality (multiple) test in Ready Mixed Concrete v Minister of Pensions (1968): wages paid, control, and whether the terms are consistent with employment.' },
      { n: 3, f: 'When is a tort committed in the course of employment?', b: 'When it is an authorised act done in an unauthorised way (Limpus v London General Omnibus, 1862; Rose v Plenty, 1976), not a “frolic of his own” (Hilton v Thomas Burton, 1961).' },
      { n: 4, f: 'When is an employer liable for an employee’s deliberate wrongdoing?', b: 'When there is a close connection between the wrongdoing and the job (Lister v Hesley Hall, 2001; Mohamud v Morrison Supermarkets, 2016).' },
      { n: 5, f: 'Can there be vicarious liability for people who are not employees?', b: 'Yes, where the relationship is “akin to employment” (Cox v Ministry of Justice, 2016). There is no vicarious liability for a genuinely independent contractor (Various Claimants v Barclays Bank, 2020).' },
    ]),
    ...unnumbered(T3, 'defences-tort-7162', 32, [
      { n: 1, f: 'What is contributory negligence and what is its effect?', b: 'A partial defence: the claimant’s own failure to take care contributed to the damage, so damages are reduced to the extent the court thinks just (Law Reform (Contributory Negligence) Act 1945; Froom v Butcher, 1976).' },
      { n: 2, f: 'What is consent (volenti non fit injuria)?', b: 'A full defence where the claimant knew of the precise risk and freely and voluntarily agreed to accept it. Knowledge alone is not enough (Smith v Baker, 1891); it succeeded in Morris v Murray (1991), a drunk pilot.' },
      { n: 3, f: 'Why is consent rarely a defence for rescuers or employees?', b: 'A rescuer acts under a moral compulsion and an employee often has little real choice, so neither is treated as having freely accepted the risk.' },
    ]),
    ...unnumbered(T3, 'remedies-tort-7162', 33, [
      { n: 1, f: 'What is the aim of compensatory damages in tort?', b: 'To put the claimant, as far as money can, in the position they would have been in if the tort had not been committed.' },
      { n: 2, f: 'What is the difference between pecuniary and non-pecuniary loss?', b: 'Pecuniary: financial losses, such as lost earnings, medical costs and property damage.\nNon-pecuniary: pain, suffering and loss of amenity.' },
      { n: 3, f: 'What is mitigation of loss?', b: 'The claimant must take reasonable steps to reduce their loss; damages are not given for loss that could reasonably have been avoided.' },
      { n: 4, f: 'When is an injunction granted in tort?', b: 'It is an equitable, discretionary remedy ordering a defendant to stop (prohibitory) or to do something (mandatory), mainly in nuisance. The court may award damages instead (Shelfer v City of London Electric Lighting, 1895; Coventry v Lawrence, 2014).' },
    ]),

    // 3.4 Law of contract
    ...unnumbered(T4, 'the-rules-of-contract-law-7162', 34, [
      { n: 1, f: 'What is a contract?', b: 'A legally binding agreement between two or more parties, enforceable by the courts.' },
      { n: 2, f: 'Where is contract law found?', b: 'Mainly in case law, and in statutes such as the Consumer Rights Act 2015, the Unfair Contract Terms Act 1977 and the Misrepresentation Act 1967.' },
      { n: 3, f: 'How do you structure an answer to a contract problem?', b: 'Was a valid contract formed? What are its terms? Has a term been breached, or is the contract vitiated or discharged? What remedies are available?' },
    ]),
    ...unnumbered(T4, 'theory-of-contract-law-7162', 35, [
      { n: 1, f: 'What is freedom of contract?', b: 'The idea that parties should be free to make whatever bargain they choose, and the courts should enforce it as agreed.' },
      { n: 2, f: 'Why does the law limit freedom of contract for consumers?', b: 'Consumers usually have less bargaining power and knowledge than businesses, so statutes such as the Consumer Rights Act 2015 imply terms and control unfair terms.' },
      { n: 3, f: 'Does English contract law require good faith?', b: 'There is no general duty of good faith; an agreement to negotiate in good faith is not enforceable (Walford v Miles, 1992). A duty may be implied in some relational contracts (Yam Seng v ITC, 2013).' },
    ]),
    ...unnumbered(T4, 'essential-requirements-of-contract-7162', 36, [
      { n: 1, f: 'What is the difference between an offer and an invitation to treat?', b: 'An offer can be accepted to form a contract. An invitation to treat cannot: goods displayed in a shop window (Fisher v Bell, 1961) or on shelves (Pharmaceutical Society v Boots, 1953), and most advertisements (Partridge v Crittenden, 1968).' },
      { n: 2, f: 'What are the rules on acceptance?', b: 'Acceptance must be unconditional and mirror the offer; a counter-offer destroys the offer (Hyde v Wrench, 1840). It must be communicated (Felthouse v Bindley, 1862), except under the postal rule (Adams v Lindsell, 1818). Instant communication takes effect when received (Entores v Miles Far East, 1955).' },
      { n: 3, f: 'What are the rules on consideration?', b: 'It must be sufficient but need not be adequate (Chappell v Nestle, 1960) and must move from the promisee. Performing an existing duty is not enough (Stilk v Myrick, 1809) unless it gives a practical benefit (Williams v Roffey Bros, 1991). Part payment of a debt is not consideration (Foakes v Beer, 1884).' },
      { n: 4, f: 'What is intention to create legal relations?', b: 'In social and domestic agreements it is presumed absent (Balfour v Balfour, 1919), but this can be rebutted. In commercial agreements it is presumed present.' },
      { n: 5, f: 'What is privity of contract?', b: 'Only the parties to a contract can enforce it (Tweddle v Atkinson, 1861). The Contracts (Rights of Third Parties) Act 1999 lets a third party enforce a term that is for their benefit or expressly allows it.' },
    ]),
    ...unnumbered(T4, 'contract-terms-general-7162', 37, [
      { n: 1, f: 'How do the courts decide whether a statement is a term or a representation?', b: 'By the importance attached to it (Bannerman v White, 1861) and the relative knowledge of the parties (Oscar Chess v Williams, 1957; Dick Bentley v Harold Smith Motors, 1965).' },
      { n: 2, f: 'What is the difference between conditions, warranties and innominate terms?', b: 'Breach of a condition allows termination and damages (Poussard v Spiers, 1876). Breach of a warranty gives damages only (Bettini v Gye, 1876). For an innominate term, the remedy depends on the seriousness of the breach (Hong Kong Fir Shipping v Kawasaki, 1962).' },
      { n: 3, f: 'How are terms implied by the courts?', b: 'In fact, where needed to make the contract work (business efficacy) or so obvious that it goes without saying; or in law, for all contracts of that type.' },
    ]),
    ...unnumbered(T4, 'contract-terms-specific-terms-implied-by-statute-law-in-relation-to-consumer-contracts-7162', 38, [
      { n: 1, f: 'Which terms does the Consumer Rights Act 2015 imply into consumer contracts for goods?', b: 'Goods must be of satisfactory quality (s9), fit for any particular purpose made known (s10), and match their description (s11).' },
      { n: 2, f: 'What term does the Consumer Rights Act 2015 imply into consumer contracts for services?', b: 'That the trader will perform the service with reasonable care and skill (s49).' },
      { n: 3, f: 'What remedies does a consumer have for faulty goods under the Consumer Rights Act 2015?', b: 'A short-term right to reject within 30 days; then repair or replacement; then, if that fails, a price reduction or the final right to reject.' },
      { n: 4, f: 'Can a trader exclude the statutory rights for goods under the Consumer Rights Act 2015?', b: 'No. s31 makes a term that tries to exclude or restrict liability under ss9–11 not binding on the consumer.' },
    ]),
    ...unnumbered(T4, 'contract-terms-exclusion-clauses-7162', 39, [
      { n: 1, f: 'What is an exclusion clause?', b: 'A term that tries to exclude or limit one party’s liability for breach of contract or negligence.' },
      { n: 2, f: 'How is an exclusion clause incorporated into a contract?', b: 'By signature (L’Estrange v Graucob, 1934), or by reasonable notice given before or when the contract is made (Olley v Marlborough Court, 1949). Unusual or onerous terms need greater notice (Thornton v Shoe Lane Parking, 1971).' },
      { n: 3, f: 'How does the Unfair Contract Terms Act 1977 control exclusion clauses?', b: 'In business contracts, liability for death or personal injury from negligence cannot be excluded; other exclusions must satisfy the requirement of reasonableness.' },
      { n: 4, f: 'What is the contra proferentem rule?', b: 'Where an exclusion clause is ambiguous, it is interpreted against the party relying on it.' },
    ]),
    ...unnumbered(T4, 'vitiating-factors-7162', 40, [
      { n: 1, f: 'What is a misrepresentation?', b: 'A false statement of fact made by one party to the other, which induces the other to enter the contract. It makes the contract voidable.' },
      { n: 2, f: 'What are the three types of misrepresentation?', b: 'Fraudulent: made knowingly, without belief in its truth, or recklessly (Derry v Peek, 1889).\nNegligent: under s2(1) Misrepresentation Act 1967, unless the maker proves reasonable grounds for believing it true.\nInnocent: made with an honest belief on reasonable grounds.' },
      { n: 3, f: 'What are the remedies for misrepresentation?', b: 'Rescission (setting the contract aside), and damages for fraudulent and negligent misrepresentation. For innocent misrepresentation the court may award damages instead of rescission (s2(2) Misrepresentation Act 1967).' },
      { n: 4, f: 'What is economic duress?', b: 'Illegitimate pressure on a party’s commercial interests that leaves them no practical choice but to agree, e.g. a threat not to deliver unless paid more (Atlas Express v Kafco, 1989). The contract is voidable.' },
      { n: 5, f: 'What is duress to the person?', b: 'Threats of violence used to force someone into a contract; the contract is voidable if the threat was a reason for agreeing (Barton v Armstrong, 1976).' },
    ]),
    ...unnumbered(T4, 'discharge-of-a-contract-7162', 41, [
      { n: 1, f: 'What is discharge by performance?', b: 'Performance must be complete and exact (Cutter v Powell, 1795), but substantial performance allows a claim for the price less the cost of putting defects right (Hoenig v Isaacs, 1952).' },
      { n: 2, f: 'What is frustration?', b: 'An event after formation, beyond either party’s control, makes performance impossible (Taylor v Caldwell, 1863), illegal or radically different (Krell v Henry, 1903). It does not apply where the contract is just harder or more expensive (Davis Contractors v Fareham UDC, 1956).' },
      { n: 3, f: 'What is discharge by breach?', b: 'Breach of a condition, or a serious breach of an innominate term, allows the innocent party to treat the contract as ended. Anticipatory breach lets them sue before performance is due.' },
      { n: 4, f: 'What is discharge by agreement?', b: 'The parties agree to end the contract, each giving up their rights; where only one side still has obligations, the release needs consideration or a deed.' },
    ]),
    ...unnumbered(T4, 'remedies-law-of-contract-7162', 42, [
      { n: 1, f: 'What is the aim of damages for breach of contract?', b: 'To put the claimant in the position they would have been in if the contract had been performed (expectation loss).' },
      { n: 2, f: 'What is the test for remoteness of damage in contract?', b: 'Losses arising naturally from the breach, or within both parties’ reasonable contemplation when they contracted (Hadley v Baxendale, 1854). Unusually large profits not known about are too remote (Victoria Laundry v Newman Industries, 1949).' },
      { n: 3, f: 'What is the duty to mitigate loss?', b: 'The claimant must take reasonable steps to reduce the loss caused by the breach and cannot recover for loss that could reasonably have been avoided.' },
      { n: 4, f: 'When can a party recover for disappointment, and when is an agreed sum unenforceable?', b: 'Disappointment: where the contract’s purpose is enjoyment, e.g. a holiday (Jarvis v Swans Tours, 1973).\nA penalty clause out of all proportion to the innocent party’s legitimate interest is unenforceable (Cavendish Square Holding v Makdessi, 2015).' },
      { n: 5, f: 'What equitable remedies are available for breach of contract?', b: 'Specific performance and injunctions, at the court’s discretion where damages are inadequate. An injunction may stop a party working for a rival in breach of contract (Warner Brothers v Nelson, 1937).' },
    ]),

    // 3.5 Human rights
    ...unnumbered(T5, 'rules-in-human-rights-law-7162', 43, [
      { n: 1, f: 'What is a right in human rights law?', b: 'An entitlement that the law protects, mainly against the state.' },
      { n: 2, f: 'What is the difference between civil and political rights and economic and social rights?', b: 'Civil and political: e.g. life, liberty, expression and fair trial.\nEconomic and social: e.g. work, education and housing.' },
      { n: 3, f: 'Against whom can a claim be brought under the Human Rights Act 1998?', b: 'A public authority, such as the police or a council, or another body performing public functions (s6). The claimant must be a victim of the act (s7).' },
    ]),
    ...unnumbered(T5, 'theory-in-human-rights-7162', 44, [
      { n: 1, f: 'What is the difference between natural rights and positive theories of rights?', b: 'Natural rights theory: rights exist because we are human, whatever the law says.\nPositive theories: rights exist only where the law creates them.' },
      { n: 2, f: 'What are absolute, limited and qualified rights?', b: 'Absolute: cannot be limited (e.g. Article 3, torture).\nLimited: may be restricted only in the circumstances the Article lists (Articles 2 and 5).\nQualified: may be restricted where justified (Articles 8, 10 and 11).' },
      { n: 3, f: 'What must a court do when two rights conflict?', b: 'Balance them, e.g. privacy (Article 8) against freedom of expression (Article 10), considering the importance of each in the circumstances.' },
    ]),
    ...unnumbered(T5, 'human-rights-in-international-law-7162', 45, [
      { n: 1, f: 'What is the Universal Declaration of Human Rights 1948?', b: 'A statement of rights agreed after the Second World War through the United Nations. It is not a binding treaty.' },
      { n: 2, f: 'Name two binding international human rights treaties from 1966.', b: 'The International Covenant on Civil and Political Rights 1966 and the International Covenant on Economic, Social and Cultural Rights 1966.' },
      { n: 3, f: 'Who made the European Convention on Human Rights, and when?', b: 'The Council of Europe, which is separate from the European Union. It was agreed in 1950 and came into force in 1953.' },
    ]),
    ...unnumbered(T5, 'human-rights-in-the-united-kingdom-prior-to-the-human-rights-act-1998-7162', 46, [
      { n: 1, f: 'What were residual rights in the UK before 1998?', b: 'People were free to do anything that the law did not forbid. There was no statement of positive rights, and Parliament could remove a freedom by statute.' },
      { n: 2, f: 'Which sources protected rights in the UK before the Human Rights Act 1998?', b: 'Magna Carta 1215, the Bill of Rights 1689 and common law cases such as Entick v Carrington (1765).' },
      { n: 3, f: 'What does Malone v Metropolitan Police Commissioner (1979) show?', b: 'Telephone tapping was held not unlawful because no law forbade it. The European Court of Human Rights later found a breach of Article 8 (Malone v United Kingdom, 1984), showing the weakness of residual rights.' },
    ]),
    ...unnumbered(T5, 'human-rights-in-the-united-kingdom-after-the-enactment-of-the-human-rights-act-1998-7162', 47, [
      { n: 1, f: 'What does section 2 of the Human Rights Act 1998 require?', b: 'Courts must take into account the case law of the European Court of Human Rights, but are not bound by it.' },
      { n: 2, f: 'What does section 3 of the Human Rights Act 1998 require? Give a case.', b: 'Legislation must be read and given effect compatibly with Convention rights so far as possible. In Ghaidan v Godin-Mendoza (2004) “spouse” was read to include a same-sex partner.' },
      { n: 3, f: 'What is a declaration of incompatibility?', b: 'Under section 4, a higher court may declare an Act incompatible with a Convention right where it cannot be read compatibly (Bellinger v Bellinger, 2003). The Act stays valid; Parliament decides whether to change it.' },
      { n: 4, f: 'What do sections 7, 8 and 10 of the Human Rights Act 1998 provide?', b: 's7: a victim may bring a claim, normally within one year.\ns8: courts may grant just and appropriate remedies, including damages.\ns10: a minister may amend incompatible legislation by a remedial order.' },
      { n: 5, f: 'When did the Human Rights Act 1998 come into force?', b: 'October 2000.' },
    ]),
    ...unnumbered(T5, 'the-european-convention-on-human-rights-1953-7162', 48, [
      { n: 1, f: 'How is the European Convention on Human Rights structured?', b: 'Rights are set out in numbered Articles, with later protocols adding further rights.' },
      { n: 2, f: 'Which Convention rights are named in the AQA specification?', b: 'Article 2 (life), Article 5 (liberty and security), Article 8 (private and family life), Article 10 (expression) and Article 11 (assembly and association).' },
      { n: 3, f: 'Is the Convention part of EU law?', b: 'No. It is a Council of Europe treaty, enforced by the European Court of Human Rights in Strasbourg, and is separate from the European Union.' },
    ]),
    ...unnumbered(T5, 'article-2-of-the-european-convention-on-human-rights-1953-7162', 49, [
      { n: 1, f: 'What does Article 2 protect, and when can life be taken?', b: 'The right to life. The state must not take life intentionally, except where force is absolutely necessary, e.g. to defend a person from unlawful violence or to make a lawful arrest.' },
      { n: 2, f: 'What positive obligations does Article 2 place on the state?', b: 'To protect life where it knows or ought to know of a real and immediate risk (Osman v United Kingdom, 1998), and to investigate deaths.' },
      { n: 3, f: 'What did McCann v United Kingdom (1995) and Pretty v United Kingdom (2002) decide?', b: 'McCann: a violation, because of the planning and control of the operation in Gibraltar in which suspects were shot.\nPretty: Article 2 does not create a right to die.' },
    ]),
    ...unnumbered(T5, 'article-5-of-the-european-convention-on-human-rights-1953-7162', 50, [
      { n: 1, f: 'What does Article 5 protect?', b: 'Liberty and security of the person: no one may be deprived of liberty except in listed cases and by a procedure prescribed by law.' },
      { n: 2, f: 'Name four permitted grounds for detention under Article 5.', b: 'After conviction by a court, arrest on reasonable suspicion of an offence, detention of minors for educational supervision, of people of unsound mind, and for immigration control.' },
      { n: 3, f: 'What rights does an arrested person have under Article 5?', b: 'To be told the reasons promptly, to be brought promptly before a judge, to challenge the lawfulness of the detention, and to compensation if it was unlawful.' },
      { n: 4, f: 'What did A v Secretary of State for the Home Department (2004) decide?', b: 'The House of Lords declared indefinite detention without trial of foreign terror suspects incompatible with Article 5 (with Article 14).' },
    ]),
    ...unnumbered(T5, 'article-8-of-the-european-convention-on-human-rights-1953-7162', 51, [
      { n: 1, f: 'What does Article 8 protect?', b: 'Respect for private life, family life, home and correspondence.' },
      { n: 2, f: 'What did Dudgeon v United Kingdom (1981) decide?', b: 'Criminalising private homosexual acts between consenting adults in Northern Ireland breached Article 8.' },
      { n: 3, f: 'What did Campbell v MGN (2004) decide?', b: 'Publishing details and photographs of a model’s treatment for addiction infringed her privacy; on the facts her privacy outweighed the newspaper’s freedom of expression.' },
      { n: 4, f: 'When can interference with Article 8 be justified?', b: 'Under Article 8(2) it must be in accordance with the law, pursue a legitimate aim (e.g. public safety, the rights of others) and be necessary in a democratic society.' },
    ]),
    ...unnumbered(T5, 'article-10-of-the-european-convention-on-human-rights-1953-7162', 52, [
      { n: 1, f: 'What does Article 10 protect?', b: 'Freedom of expression: holding opinions and receiving and imparting information and ideas without interference by public authority.' },
      { n: 2, f: 'What did Handyside v United Kingdom (1976) decide?', b: 'Article 10 protects ideas that offend, shock or disturb, but the state has a margin of appreciation; the restriction on the book was upheld for the protection of morals.' },
      { n: 3, f: 'When can freedom of expression be restricted?', b: 'Under Article 10(2) the restriction must be prescribed by law, for a legitimate aim and necessary in a democratic society (Sunday Times v United Kingdom, 1979, contempt of court).' },
    ]),
    ...unnumbered(T5, 'article-11-of-the-european-convention-on-human-rights-1953-7162', 53, [
      { n: 1, f: 'What does Article 11 protect?', b: 'Freedom of peaceful assembly and freedom of association with others, including the right to form and join trade unions.' },
      { n: 2, f: 'What did Redfearn v United Kingdom (2012) decide?', b: 'There was a violation of Article 11 where an employee dismissed because of his political party membership had no legal remedy.' },
      { n: 3, f: 'How are restrictions on Article 11 judged?', b: 'By the same tests as Articles 8 and 10: prescribed by law, a legitimate aim such as preventing disorder, and necessary and proportionate. A total ban on a march is harder to justify than conditions on its route or time.' },
    ]),
    ...unnumbered(T5, 'restrictions-7162', 54, [
      { n: 1, f: 'What does “necessary in a democratic society” mean?', b: 'There must be a pressing social need, and the restriction must be proportionate: it goes no further than needed to achieve the legitimate aim.' },
      { n: 2, f: 'What is the margin of appreciation?', b: 'The degree of discretion the European Court gives states in deciding how to protect rights, wider on moral questions and narrower for fundamental rights.' },
      { n: 3, f: 'What is derogation under Article 15?', b: 'In time of war or another public emergency threatening the life of the nation, a state may derogate from some rights to the extent strictly required. Some rights, such as Article 3, cannot be derogated from.' },
    ]),
    ...unnumbered(T5, 'enforcement-7162', 55, [
      { n: 1, f: 'How is a human rights claim enforced in the UK?', b: 'First in the domestic courts under the Human Rights Act 1998, against a public authority, normally within one year.' },
      { n: 2, f: 'When can a person apply to the European Court of Human Rights?', b: 'After exhausting domestic remedies, within four months of the final domestic decision.' },
      { n: 3, f: 'What happens when the European Court finds a violation?', b: 'It may award just satisfaction (compensation). The judgment binds the state, and the Committee of Ministers supervises its execution.' },
    ]),
    ...unnumbered(T5, 'human-rights-and-english-law-7162', 56, [
      { n: 1, f: 'How does the Human Rights Act 1998 preserve parliamentary sovereignty?', b: 'Courts cannot strike down an Act of Parliament: they can only interpret it compatibly (s3) or make a declaration of incompatibility (s4), leaving Parliament to decide.' },
      { n: 2, f: 'What criticisms are made of section 3 of the Human Rights Act 1998?', b: 'That it lets judges go too far in rewriting statutes, which is a role for elected Parliament.' },
      { n: 3, f: 'What does the prisoner voting dispute show?', b: 'After Hirst v United Kingdom (No 2) (2005) found the blanket ban on prisoners voting breached the Convention, the UK was slow to respond, showing tension between Strasbourg and national sovereignty.' },
    ]),
    ...unnumbered(T5, 'reform-7162', 57, [
      { n: 1, f: 'What reforms of human rights law have been proposed?', b: 'Replacing the Human Rights Act with a British Bill of Rights, weakening the duty to take account of Strasbourg, narrowing section 3, and adding economic and social rights.' },
      { n: 2, f: 'What happened to the Bill of Rights Bill?', b: 'It was introduced in 2022 and later dropped.' },
      { n: 3, f: 'How should you evaluate proposals to replace the Human Rights Act 1998?', b: 'Weigh greater national control and parliamentary sovereignty against the risk of reduced protection for individuals and of the UK’s relationship with the Convention being weakened, and reach a judgement.' },
    ]),
  ],
};
