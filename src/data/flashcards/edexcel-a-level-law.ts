/**
 * D-444 -- flashcards for Pearson Edexcel International Advanced Level Law
 * YLA1 (specification Issue 4, November 2021).
 *
 * One block per subtopic, in specification order. Card ids are
 * `<subtopic number>-<n>` and are permanent (browser progress is keyed by
 * them): add a new card with the next unused n, never renumber.
 *
 * Both YLA1 revision-notes pages map to their paper, not to a subtopic, so
 * every card is authored.
 *
 * Written from Marlbridge's own YLA1 revision notes and study guides, using
 * their Acts and section numbers. Cases are leading authorities with their
 * standard citation years, and are added only where the point is settled law.
 * The courts, juries and other legal personnel, and alternative dispute
 * resolution (part of 1.2), are not set out on those pages and keep to
 * standard facts.
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

const P1 = 'paper-1-underlying-principles-and-english-legal-system-yla1';
const P2 = 'paper-2-the-law-in-action-yla1';

export const DECK_EDEXCEL_A_LEVEL_LAW: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'a-level',
  subjectSlug: 'law',
  syllabusCode: 'YLA1',
  syllabusSeries: 'Issue 4, November 2021',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // Paper 1 Underlying principles of law and the English legal system
    ...sub(P1, 'the-nature-purpose-of-and-liability-in-law-yla1', '1.1', [
      { n: 1, f: 'What is the difference between law and morality?', b: 'Law is enforceable by the state through the courts; morality is enforced by social pressure and conscience. They overlap (murder, theft) but differ: adultery is widely seen as immoral yet lawful, while a parking offence is unlawful but not immoral.' },
      { n: 2, f: 'What was Lord Devlin’s view in the Hart–Devlin debate?', b: 'A shared morality holds society together, so the law may legitimately enforce it.' },
      { n: 3, f: 'What was Professor Hart’s view in the Hart–Devlin debate?', b: 'The law should intervene only to prevent harm to others; enforcing private morality is an unjustified restriction of liberty.' },
      { n: 4, f: 'Which side of the Hart–Devlin debate did the law follow on homosexuality?', b: 'Hart’s: the Wolfenden Report (1957) recommended decriminalising private homosexual acts between consenting adults, which the Sexual Offences Act 1967 did in England and Wales.' },
      { n: 5, f: 'Name three types of justice', b: 'Distributive (fair allocation of resources), corrective (putting right a wrong) and procedural (a fair process).' },
      { n: 6, f: 'How do Rawls and Nozick differ on justice?', b: 'Rawls: just principles are those chosen behind a “veil of ignorance”, not knowing one’s own place in society. Nozick: a distribution is just if holdings were acquired and transferred fairly (entitlement theory).' },
      { n: 7, f: 'How does civil law differ from criminal law in burden and standard of proof?', b: 'Criminal: the prosecution must prove guilt beyond reasonable doubt (Woolmington v DPP, 1935). Civil: the claimant must prove the case on the balance of probabilities.' },
      { n: 8, f: 'What is the difference between fault-based and strict liability?', b: 'Fault-based liability requires blameworthiness, such as mens rea or negligence. Strict liability requires no fault for at least one element, as in many regulatory offences.' },
      { n: 9, f: 'What did Sweet v Parsley (1970) establish?', b: 'That courts presume Parliament intended mens rea to be required for a criminal offence unless the statute clearly says otherwise.' },
    ]),
    ...sub(P1, 'the-sources-of-english-law-its-enforcement-and-administration-yla1', '1.2', [
      { n: 1, f: 'What are the stages of a Bill in Parliament?', b: 'Green Paper → White Paper → First Reading → Second Reading → Committee Stage → Report Stage → Third Reading → the other House → Royal Assent.' },
      { n: 2, f: 'What is parliamentary supremacy (Dicey)?', b: 'Parliament can make law on any subject, no Parliament can bind its successors, and no other body can override an Act of Parliament.' },
      { n: 3, f: 'What limits parliamentary supremacy in practice?', b: 'Devolution, the Human Rights Act 1998 (declarations of incompatibility), international treaty obligations, and the government’s control of the parliamentary timetable.' },
      { n: 4, f: 'What is a declaration of incompatibility?', b: 'A court’s statement under the Human Rights Act 1998 that an Act conflicts with Convention rights. It does not strike the Act down, but puts political pressure on Parliament to change it.' },
      { n: 5, f: 'Name the three types of delegated legislation and who makes each', b: 'Orders in Council: the King and Privy Council. Statutory instruments: government ministers. By-laws: local authorities and public bodies.' },
      { n: 6, f: 'What is the difference between procedural and substantive ultra vires?', b: 'Procedural: the correct procedure in the enabling Act was not followed. Substantive: the body went beyond the powers the enabling Act gave it.' },
      { n: 7, f: 'What is the literal rule? Give a case', b: 'Words are given their plain, ordinary meaning even if the result is absurd. Fisher v Bell (1961): a flick knife in a shop window was not “offered for sale”, because display is an invitation to treat.' },
      { n: 8, f: 'What is the golden rule? Give a case', b: 'The literal meaning is departed from to avoid an absurd result. Adler v George (1964): “in the vicinity of” a prohibited place was read to include being inside it.' },
      { n: 9, f: 'What is the mischief rule? Give a case', b: 'From Heydon’s Case (1584): judges ask what mischief the Act was passed to remedy. Smith v Hughes (1960): prostitutes tapping on windows were “soliciting in a street”.' },
      { n: 10, f: 'What did Pepper v Hart (1993) decide?', b: 'That judges may consult Hansard (the record of debates in Parliament) as an extrinsic aid where a statute is ambiguous or obscure.' },
      { n: 11, f: 'What is the difference between ratio decidendi and obiter dicta?', b: 'The ratio decidendi is the legal reasoning needed for the decision, which binds lower courts. Obiter dicta are other remarks, which are only persuasive.' },
      { n: 12, f: 'What is the difference between distinguishing, overruling and reversing?', b: 'Distinguishing: material facts differ, so a precedent is not followed. Overruling: a higher court declares an earlier decision in a different case wrong. Reversing: a higher court changes the outcome of the same case on appeal.' },
      { n: 13, f: 'What is the Practice Statement 1966?', b: 'A statement allowing the House of Lords (now the Supreme Court) to depart from its own previous decisions when it appears right to do so. It is used sparingly to preserve certainty.' },
      { n: 14, f: 'What is the Law Commission, and what is its main weakness?', b: 'A full-time, independent body that systematically reviews the law and recommends reform. Many of its reports are not implemented, for lack of parliamentary time.' },
      { n: 15, f: 'When did the Supreme Court replace the House of Lords as the highest UK court?', b: 'In October 2009, under the Constitutional Reform Act 2005.' },
      { n: 16, f: 'What majority verdicts can a jury give?', b: 'Under the Juries Act 1974, 11–1 or 10–2 with a full jury of 12 (10–1 with 11 jurors, 9–1 with 10).' },
      { n: 17, f: 'Name four forms of alternative dispute resolution', b: 'Negotiation, mediation, conciliation and arbitration (governed by the Arbitration Act 1996).' },
    ]),

    // Paper 2 The law in action
    ...sub(P2, 'the-market-yla1', '2.1', [
      { n: 1, f: 'What are the requirements for a valid contract?', b: 'Offer, acceptance, consideration, intention to create legal relations, and capacity.' },
      { n: 2, f: 'What is the difference between an offer and an invitation to treat? Give a case', b: 'An offer can be accepted to form a contract; an invitation to treat only invites offers. Pharmaceutical Society v Boots (1953): goods on a shop shelf are an invitation to treat.' },
      { n: 3, f: 'What do Hyde v Wrench (1840) and Felthouse v Bindley (1862) establish about acceptance?', b: 'Hyde v Wrench: a counter-offer destroys the original offer. Felthouse v Bindley: silence cannot be acceptance.' },
      { n: 4, f: 'What is the difference between a condition and a warranty?', b: 'A condition is a major term: breach lets the innocent party treat the contract as ended and claim damages. A warranty is a minor term: breach gives damages only.' },
      { n: 5, f: 'Which terms does the Consumer Rights Act 2015 imply into contracts for goods?', b: 'Satisfactory quality (s 9), fit for a particular purpose (s 10) and matching their description (s 11).' },
      { n: 6, f: 'What remedies does the Consumer Rights Act 2015 give for faulty goods?', b: 'The short-term right to reject (s 20), repair or replacement (s 23), and a price reduction or final right to reject (s 24).' },
      { n: 7, f: 'Which terms and remedies does the Consumer Rights Act 2015 give for services?', b: 'Terms: reasonable care and skill (s 49) and performance within a reasonable time (s 52). Remedies: repeat performance (s 55) or price reduction (s 56).' },
      { n: 8, f: 'How are exclusion clauses controlled?', b: 'They must be incorporated (by signature, notice or course of dealing) and are controlled by the Unfair Contract Terms Act 1977 and the Consumer Rights Act 2015. Liability for death or personal injury caused by negligence can never be excluded.' },
      { n: 9, f: 'What does the Contracts (Rights of Third Parties) Act 1999 allow?', b: 'A third party may enforce a contract term if the contract expressly allows it or the term purports to confer a benefit on them.' },
      { n: 10, f: 'In what four ways can a contract be discharged?', b: 'By performance, agreement, breach or frustration. Taylor v Caldwell (1863) is a leading frustration case: the music hall hired for concerts burned down.' },
      { n: 11, f: 'What are the elements of negligence?', b: 'A duty of care (harm foreseeable, proximity, fair just and reasonable: Caparo v Dickman, 1990), breach (falling below the reasonable person standard), and damage caused by the breach.' },
      { n: 12, f: 'What is the “but for” test in negligence? Give a case', b: 'The defendant is liable only if the harm would not have happened but for the breach. Barnett v Chelsea and Kensington HMC (1969): the patient would have died even with proper treatment.' },
      { n: 13, f: 'What are the two defences to negligence?', b: 'Volenti non fit injuria: a full defence where the claimant freely consented to the risk. Contributory negligence (Law Reform (Contributory Negligence) Act 1945): reduces damages but does not defeat the claim.' },
    ]),
    ...sub(P2, 'the-criminal-offender-yla1', '2.2', [
      { n: 1, f: 'What are actus reus and mens rea?', b: 'Actus reus: the guilty act (conduct, circumstances and any required result). Mens rea: the guilty mind, such as intention or recklessness. Both are normally required.' },
      { n: 2, f: 'What is the test for factual and legal causation?', b: 'Factual: “but for” the defendant’s act, would the result have happened? (R v White, 1910). Legal: the act must be an operating and substantial cause of the result (R v Pagett, 1983).' },
      { n: 3, f: 'When can an omission (failure to act) be the actus reus?', b: 'Only where there is a duty to act, for example from a contract (R v Pittwood, 1902), a relationship (R v Gibbins and Proctor, 1918), or the defendant’s own creation of a dangerous situation (R v Miller, 1983).' },
      { n: 4, f: 'What is the test for oblique (indirect) intention?', b: 'Intention can be found where the result was a virtual certainty of the defendant’s act and the defendant appreciated that it was (R v Woollin, 1998).' },
      { n: 5, f: 'What is subjective recklessness?', b: 'The defendant personally foresaw an unjustified risk and went on to take it (R v Cunningham, 1957; R v G, 2003).' },
      { n: 6, f: 'What is transferred malice?', b: 'Mens rea aimed at one victim or object transfers to the one actually harmed (R v Latimer, 1886).' },
      { n: 7, f: 'How is theft defined in the Theft Act 1968?', b: 'Section 1: dishonestly appropriating property belonging to another with the intention of permanently depriving the other of it.' },
      { n: 8, f: 'What is the difference between robbery and burglary?', b: 'Robbery (Theft Act 1968 s 8): stealing using force, or putting someone in fear of force, immediately before or at the time. Burglary (s 9): entering a building as a trespasser with intent to commit certain offences, or committing them after entering as a trespasser.' },
      { n: 9, f: 'Which Acts and sections cover fraud by false representation and making off without payment?', b: 'Fraud by false representation: Fraud Act 2006, s 2. Making off without payment: Theft Act 1978, s 3.' },
      { n: 10, f: 'What is criminal damage?', b: 'Destroying or damaging property belonging to another without lawful excuse, intending to do so or being reckless (Criminal Damage Act 1971, s 1). Lawful excuse is defined in s 5.' },
      { n: 11, f: 'How does intoxication operate as a defence?', b: 'Voluntary intoxication is no defence to a basic intent crime (DPP v Majewski, 1977) but may negate the mens rea of a specific intent crime. Involuntary intoxication is a defence only if it genuinely prevented the defendant forming mens rea.' },
      { n: 12, f: 'What is duress?', b: 'A defence where the defendant committed the crime because of a threat of death or serious injury (duress of threats) or because of circumstances posing such a threat (duress of circumstances), responding reasonably. It is not a defence to murder.' },
      { n: 13, f: 'What are the purposes of sentencing for adults?', b: 'Set by the Criminal Justice Act 2003, s 142 (now the Sentencing Act 2020, s 57): punishment, reduction of crime (including deterrence), reform and rehabilitation, protection of the public, and reparation.' },
    ]),
    ...sub(P2, 'the-individual-yla1', '2.3', [
      { n: 1, f: 'What is the difference between libel and slander?', b: 'Libel is defamation in a permanent form, such as print, broadcasts or online posts. Slander is defamation in a transient form, such as speech.' },
      { n: 2, f: 'What must a claimant prove under section 1 of the Defamation Act 2013?', b: 'That the statement has caused, or is likely to cause, serious harm to their reputation.' },
      { n: 3, f: 'What defences does the Defamation Act 2013 provide?', b: 'Truth (s 2), honest opinion (s 3) and publication on a matter of public interest (s 4).' },
      { n: 4, f: 'What rights do Articles 8, 10 and 11 of the European Convention on Human Rights protect?', b: 'Article 8: respect for private and family life, home and correspondence. Article 10: freedom of expression (qualified by Art 10(2)). Article 11: freedom of peaceful assembly and association.' },
      { n: 5, f: 'Does a win at the European Court of Human Rights automatically change UK law?', b: 'No. Once domestic remedies are exhausted, a successful judgment puts pressure on the government to change the law, but does not change it automatically.' },
      { n: 6, f: 'What does section 170 of the Data Protection Act 2018 do?', b: 'It makes it a criminal offence to obtain or disclose personal data unlawfully, without the consent of the data controller.' },
      { n: 7, f: 'What does the Freedom of Information Act 2000 do?', b: 'It gives the public a right of access to information held by public authorities, the opposite direction to privacy law.' },
      { n: 8, f: 'What is the difference between the Occupiers’ Liability Acts 1957 and 1984?', b: '1957: a common duty of care to lawful visitors. 1984: a narrower duty to non-visitors (trespassers), only where the occupier knows or has reasonable grounds to believe a danger exists and someone may come near it.' },
      { n: 9, f: 'How does the Occupiers’ Liability Act 1957 treat children and skilled visitors?', b: 'Occupiers must be prepared for children to be less careful than adults (s 2(3)(a); Glasgow Corporation v Taylor, 1922), but may expect skilled visitors to guard against risks of their trade (s 2(3)(b); Roles v Nathan, 1963).' },
      { n: 10, f: 'What is trespass to land?', b: 'An unlawful, intentional and direct interference with another’s possession of land. It can be continuing, giving a fresh cause of action each day. Remedies are damages and an injunction.' },
      { n: 11, f: 'What did Campbell v MGN (2004) establish?', b: 'That publishing private information can be actionable as misuse of private information, balancing Article 8 (privacy) against Article 10 (freedom of expression).' },
    ]),
  ],
};
