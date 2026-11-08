/**
 * D-444 -- flashcards for Cambridge International AS & A Level Law 9084 (2026-2028).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 * Every 9084 revision-notes page maps to a whole topic, not a subtopic, so no
 * card here carries `src`; all are authored, following Marlbridge's own 9084
 * study guides and revision notes. Statutes and cases are real, with the year
 * used on those pages (the law report year where it differs from the year of
 * judgment). Where a point could not be stated with confidence it is left out.
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

const T1 = 'english-legal-system-9084';
const T2 = 'criminal-law-9084';
const T3 = 'law-of-contract-9084';
const T4 = 'law-of-tort-9084';

export const DECK_CAMBRIDGE_A_LEVEL_LAW: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'a-level',
  subjectSlug: 'law',
  syllabusCode: '9084',
  syllabusSeries: '2026-2028',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 English legal system
    ...sub(T1, 'principles-and-sources-of-english-law-9084', '1.1', [
      { n: 1, f: 'What is the rule of law?', b: 'No one is above the law, everyone is equal before it, and the law should be clear, certain and applied fairly and consistently.' },
      { n: 2, f: 'What does parliamentary sovereignty mean?', b: 'Parliament can make or unmake any law, no Parliament can bind its successors, and no other body (including a court) can set aside an Act of Parliament.' },
      { n: 3, f: 'What are the main sources of English law?', b: 'Statute (Acts of Parliament, the supreme source), delegated legislation, case law (common law, through precedent), equity, and custom (very rare today).' },
      { n: 4, f: 'What are the stages of an Act of Parliament?', b: 'First Reading, Second Reading (main debate), Committee Stage (clause by clause), Report Stage, Third Reading; the same in the other House; then Royal Assent.' },
      { n: 5, f: 'What is delegated legislation? Name three forms.', b: 'Law made by a body other than Parliament under authority granted by an enabling (parent) Act. Forms: statutory instruments, byelaws, Orders in Council.' },
      { n: 6, f: 'How is delegated legislation controlled?', b: 'Parliamentary control: affirmative or negative resolution procedures and scrutiny committees.\nJudicial control: judicial review, which can declare it ultra vires (beyond the powers granted) and void.' },
      { n: 7, f: 'What is the difference between ratio decidendi and obiter dicta?', b: 'Ratio decidendi: the legal reason for the decision, which is binding on lower courts.\nObiter dicta: things said “by the way”, which are only persuasive.' },
      { n: 8, f: 'What does the Practice Statement 1966 allow?', b: 'The House of Lords (now the Supreme Court) may depart from its own previous decisions “when it appears right to do so”. It is used sparingly to keep certainty.' },
      { n: 9, f: 'What is the difference between distinguishing, overruling and reversing?', b: 'Distinguishing: the material facts differ, so the earlier precedent does not apply.\nOverruling: a higher court declares an earlier decision in a different case wrong.\nReversing: a higher court changes the outcome of the same case on appeal.' },
      { n: 10, f: 'What are the four approaches to statutory interpretation?', b: 'Literal rule: plain, ordinary meaning.\nGolden rule: modify the literal meaning to avoid an absurdity.\nMischief rule: what defect was the Act passed to remedy (Heydon’s Case, 1584).\nPurposive approach: give effect to Parliament’s purpose.' },
      { n: 11, f: 'What did Pepper v Hart (1993) decide?', b: 'Courts may refer to Hansard (records of debates in Parliament) as an extrinsic aid where the Act is ambiguous, within strict limits.' },
      { n: 12, f: 'What is the ejusdem generis rule?', b: 'Where general words follow a list of specific ones, the general words are limited to things of the same kind as the list.' },
    ]),
    ...sub(T1, 'machinery-of-justice-9084', '1.2', [
      { n: 1, f: 'What is the route of appeal for a criminal case tried in the Crown Court?', b: 'Crown Court → Court of Appeal (Criminal Division) → Supreme Court (on a point of law of general public importance).' },
      { n: 2, f: 'What are summary, either-way and indictable offences?', b: 'Summary: tried only in the Magistrates’ Court.\nEither-way: tried in either court; the defendant may elect Crown Court trial.\nIndictable: tried only in the Crown Court, before a judge and jury.' },
      { n: 3, f: 'Where does a civil claim start and how is it allocated?', b: 'In the County Court or, for higher-value or complex claims, the High Court. It is allocated to the small claims, fast, intermediate or multi-track by value and complexity.' },
      { n: 4, f: 'What are the three divisions of the High Court?', b: 'King’s Bench Division, Chancery Division and Family Division.' },
      { n: 5, f: 'What is the difference between mediation, conciliation and arbitration?', b: 'Mediation: a neutral third party helps the parties reach their own solution.\nConciliation: similar, but the conciliator may suggest a solution.\nArbitration: an arbitrator makes a binding decision (Arbitration Act 1996).' },
      { n: 6, f: 'What are the advantages of ADR over going to court?', b: 'Usually cheaper, quicker, private and less formal; the parties keep more control, and relationships (e.g. business ones) are more likely to survive.' },
      { n: 7, f: 'What are tribunals?', b: 'Specialist bodies outside the ordinary courts that decide disputes in particular areas, such as employment or immigration, more cheaply and informally, with expert members.' },
    ]),
    ...sub(T1, 'legal-personnel-9084', '1.3', [
      { n: 1, f: 'What is the difference between solicitors and barristers?', b: 'Solicitors: general practice with direct client contact, increasingly with rights of audience.\nBarristers: specialist advocates and advisers, usually instructed through a solicitor, bound by the cab-rank rule.' },
      { n: 2, f: 'What is the cab-rank rule?', b: 'A barrister must accept any case within their competence and availability, at a proper fee, whoever the client is.' },
      { n: 3, f: 'Who regulates solicitors and barristers?', b: 'Representative bodies: the Law Society (solicitors) and the Bar Council (barristers). Independent regulators: the Solicitors Regulation Authority and the Bar Standards Board, a separation required by the Legal Services Act 2007.' },
      { n: 4, f: 'How is judicial independence protected?', b: 'Security of tenure, protected salaries, immunity from being sued for judicial acts, appointment through the independent Judicial Appointments Commission, and the separation of powers.' },
      { n: 5, f: 'Who are lay magistrates and what are the criticisms of them?', b: 'Unpaid volunteers with no legal qualification, usually sitting in threes, advised by a legally qualified clerk. Criticised as unrepresentative of the community and inconsistent between benches.' },
      { n: 6, f: 'What is the role of a jury in a Crown Court trial?', b: 'Twelve people decide the facts and the verdict (guilty or not guilty); the judge decides points of law and the sentence. Deliberations are secret and no reasons are given.' },
      { n: 7, f: 'What does the Crown Prosecution Service (CPS) do?', b: 'It decides whether to prosecute cases investigated by the police, applying the evidential test and the public interest test, and conducts the prosecution.' },
    ]),

    // 2 Criminal law
    ...sub(T2, 'elements-of-a-crime-9084', '2.1', [
      { n: 1, f: 'What are actus reus and mens rea?', b: 'Actus reus: the guilty act, the conduct element (an act, an omission or a state of affairs, with its consequence).\nMens rea: the guilty mind, the mental element (intention or recklessness).' },
      { n: 2, f: 'When is a person liable for an omission (failing to act)?', b: 'Only where they are under a duty to act, e.g. by contract (R v Pittwood, 1902), a special relationship (R v Gibbins and Proctor, 1918), voluntarily taking on care (R v Stone and Dobinson, 1977), or creating a dangerous situation (R v Miller, 1983).' },
      { n: 3, f: 'What is factual causation?', b: 'The “but for” test: but for the defendant’s conduct, would the result have happened? If it would have happened anyway, there is no factual causation (R v White, 1910).' },
      { n: 4, f: 'What is legal causation?', b: 'The defendant’s act must be an operating and substantial (more than minimal) cause of the result, and the chain of causation must not be broken by an intervening act (R v Smith, 1959; R v Cheshire, 1991).' },
      { n: 5, f: 'What is the thin skull rule?', b: 'The defendant must take the victim as they find them, so a victim’s unusual physical condition or beliefs do not break the chain of causation (R v Blaue, 1975).' },
      { n: 6, f: 'What is the difference between direct and oblique (indirect) intention?', b: 'Direct: the result was the defendant’s aim or purpose (R v Mohan, 1976).\nOblique: the result was a virtually certain consequence of the act and the defendant appreciated that (R v Woollin, 1998).' },
      { n: 7, f: 'What is recklessness in criminal law?', b: 'The defendant was aware of a risk and went on to take it when it was unreasonable to do so. The test is subjective (R v Cunningham, 1957; R v G, 2003).' },
    ]),
    ...sub(T2, 'offences-against-property-9084', '2.2', [
      { n: 1, f: 'What is the definition of theft?', b: 'Dishonestly appropriating property belonging to another with the intention of permanently depriving the other of it: s1 Theft Act 1968. Elements are defined in s2 (dishonesty) to s6 (intention to permanently deprive).' },
      { n: 2, f: 'What is the test for dishonesty in theft?', b: 'First the defendant’s actual state of knowledge or belief as to the facts; then whether the conduct was dishonest by the standards of ordinary decent people (Ivey v Genting Casinos, 2017, applied in R v Barton and Booth, 2020). s2(1) lists situations that are not dishonest.' },
      { n: 3, f: 'What is appropriation, and does consent prevent it?', b: 'Any assumption of the rights of an owner (s3 Theft Act 1968). Appropriation can occur even with the owner’s consent (R v Gomez, 1993).' },
      { n: 4, f: 'What is robbery?', b: 'Stealing, and immediately before or at the time of doing so, and in order to do so, using force on any person or putting or seeking to put any person in fear of force: s8 Theft Act 1968.' },
      { n: 5, f: 'What is the difference between s9(1)(a) and s9(1)(b) burglary?', b: 's9(1)(a): entering a building or part of a building as a trespasser with intent to commit theft, GBH or criminal damage.\ns9(1)(b): having entered as a trespasser, stealing or attempting to steal, or inflicting or attempting to inflict GBH.' },
      { n: 6, f: 'What is aggravated burglary?', b: 'Burglary while having with you any firearm or imitation firearm, weapon of offence or explosive: s10 Theft Act 1968.' },
      { n: 7, f: 'What is blackmail?', b: 'Making an unwarranted demand with menaces, with a view to gain for yourself or another or with intent to cause loss to another: s21 Theft Act 1968.' },
      { n: 8, f: 'What is making off without payment?', b: 'Knowing that payment on the spot is required or expected, dishonestly making off without paying, with intent to avoid payment: s3 Theft Act 1978. The intent must be to avoid payment permanently (R v Allen, 1985).' },
      { n: 9, f: 'What is basic criminal damage?', b: 'Without lawful excuse, destroying or damaging property belonging to another, intending to do so or being reckless as to whether it is destroyed or damaged: s1(1) Criminal Damage Act 1971.' },
      { n: 10, f: 'What are the three ways of committing fraud under the Fraud Act 2006?', b: 'False representation (s2), failing to disclose information when under a legal duty to do so (s3), and abuse of position (s4). Each needs dishonesty and an intention to make a gain or cause a loss.' },
      { n: 11, f: 'What is handling stolen goods?', b: 'Otherwise than in the course of the stealing, knowing or believing goods to be stolen, dishonestly receiving them, or helping in or arranging their retention, removal, disposal or realisation: s22 Theft Act 1968.' },
    ]),
    ...sub(T2, 'sentencing-in-england-and-wales-9084', '2.3', [
      { n: 1, f: 'What are the purposes of sentencing adult offenders?', b: 'Under s57 Sentencing Act 2020: punishment, reduction of crime (including by deterrence), reform and rehabilitation, protection of the public, and reparation by offenders to those affected.' },
      { n: 2, f: 'What types of sentence can an adult receive?', b: 'Custodial sentences (immediate or suspended), community orders with requirements such as unpaid work or a curfew, fines, and discharges (absolute or conditional).' },
      { n: 3, f: 'What factors does a court consider when sentencing?', b: 'The seriousness of the offence (culpability and harm), aggravating factors (e.g. previous convictions), mitigating factors (e.g. remorse, good character), any guilty plea, and the Sentencing Council guidelines.' },
      { n: 4, f: 'What reduction is given for a guilty plea?', b: 'Up to one third of the sentence for a plea at the first opportunity, reducing on a sliding scale for later pleas.' },
      { n: 5, f: 'What is the principal aim of the youth justice system?', b: 'To prevent offending by children and young persons (s37 Crime and Disorder Act 1998). The court must also have regard to the welfare of the child.' },
      { n: 6, f: 'What sentences are available for young offenders?', b: 'Referral orders, youth rehabilitation orders, detention and training orders (custody), fines and discharges. Parents may be ordered to pay fines or be given a parenting order.' },
    ]),

    // 3 Law of contract
    ...sub(T3, 'formation-of-a-valid-contract-9084', '3.1', [
      { n: 1, f: 'What is the difference between an offer and an invitation to treat?', b: 'An offer is a definite promise to be bound on certain terms. An invitation to treat invites offers, e.g. goods on a shelf (Pharmaceutical Society v Boots, 1953) or an advertisement (Partridge v Crittenden, 1968).' },
      { n: 2, f: 'What did Carlill v Carbolic Smoke Ball Co (1893) decide?', b: 'An advertisement can be a unilateral offer to the whole world, accepted by anyone who performs the stated conditions; the deposit of £1,000 showed intention to be bound.' },
      { n: 3, f: 'What is the mirror image rule, and what is a counter-offer?', b: 'Acceptance must match the offer exactly. A counter-offer rejects the original offer, which cannot then be accepted (Hyde v Wrench, 1840).' },
      { n: 4, f: 'What is the postal rule?', b: 'Where post is a reasonable means of acceptance, acceptance is complete when the letter is posted, not when it arrives (Adams v Lindsell, 1818).' },
      { n: 5, f: 'Can silence be acceptance?', b: 'No. Acceptance must be communicated; an offeror cannot impose silence as acceptance (Felthouse v Bindley, 1862).' },
      { n: 6, f: 'What is consideration?', b: 'Something of value given by each party in return for the other’s promise. It must be sufficient but need not be adequate (Chappell v Nestle, 1960), and must not be past (Roscorla v Thomas, 1842).' },
      { n: 7, f: 'What did Williams v Roffey Bros (1991) decide?', b: 'Performing an existing contractual duty can be good consideration for a promise of extra payment if the promisor obtains a practical benefit, there is no duress, and the promise was not obtained by fraud.' },
      { n: 8, f: 'How is intention to create legal relations presumed?', b: 'Social and domestic agreements: presumed not intended (Balfour v Balfour, 1919), rebuttable, e.g. separated spouses (Merritt v Merritt, 1970).\nCommercial agreements: presumed intended.' },
    ]),
    ...sub(T3, 'contents-of-a-contract-9084', '3.2', [
      { n: 1, f: 'What is the difference between a term and a representation?', b: 'A term is part of the contract, and breaking it is a breach. A representation is a statement that induced the contract but is not part of it. Relevant factors include importance (Bannerman v White, 1861) and special knowledge (Oscar Chess v Williams, 1957; Dick Bentley v Harold Smith Motors, 1965).' },
      { n: 2, f: 'What is the difference between a condition and a warranty?', b: 'Condition: an essential term; breach allows the innocent party to end the contract and claim damages (Poussard v Spiers, 1876).\nWarranty: a minor term; breach gives damages only (Bettini v Gye, 1876).' },
      { n: 3, f: 'What is an innominate term?', b: 'A term that is neither condition nor warranty: the remedy depends on how serious the consequences of the breach are (Hong Kong Fir Shipping v Kawasaki Kisen Kaisha, 1962).' },
      { n: 4, f: 'How are terms implied by the courts?', b: 'In fact, where needed to give business efficacy or so obvious it goes without saying; or in law, for all contracts of a type (Liverpool City Council v Irwin, 1977).' },
      { n: 5, f: 'Which terms does the Consumer Rights Act 2015 imply into consumer contracts for goods?', b: 'That goods are of satisfactory quality (s9), fit for a particular purpose made known (s10), and as described (s11).' },
      { n: 6, f: 'When is an exclusion clause incorporated into a contract?', b: 'By signature (L’Estrange v Graucob, 1934), or by reasonable notice given before or at the time the contract is made (Olley v Marlborough Court Hotel, 1949: notice too late).' },
      { n: 7, f: 'How does statute control exclusion clauses?', b: 'The Unfair Contract Terms Act 1977 (business contracts) bans excluding liability for death or personal injury caused by negligence and makes other exclusions subject to reasonableness. The Consumer Rights Act 2015 controls unfair terms in consumer contracts.' },
    ]),
    ...sub(T3, 'discharge-of-a-contract-9084', '3.3', [
      { n: 1, f: 'What are the four ways a contract can be discharged?', b: 'Performance, agreement, frustration and breach.' },
      { n: 2, f: 'What is the strict rule on performance and how is it softened?', b: 'Performance must be complete and exact (Cutter v Powell, 1795). Exceptions include substantial performance (Hoenig v Isaacs, 1952), divisible contracts and prevented performance.' },
      { n: 3, f: 'What is frustration of a contract?', b: 'An event after the contract is made, not the fault of either party, makes performance impossible, illegal or radically different, e.g. the hall burning down in Taylor v Caldwell (1863).' },
      { n: 4, f: 'When is a contract not frustrated?', b: 'When performance is just more difficult or expensive (Tsakiroglou v Noblee Thorl, 1962), when the main purpose can still be achieved (Herne Bay Steam Boat v Hutton, 1903), or when the frustration is self-induced (Maritime National Fish v Ocean Trawlers, 1935).' },
      { n: 5, f: 'What is anticipatory breach?', b: 'One party indicates before performance is due that they will not perform. The other may sue at once, without waiting for the performance date (Hochster v De la Tour, 1853).' },
    ]),
    ...sub(T3, 'remedies-for-breach-of-a-contract-9084', '3.4', [
      { n: 1, f: 'What is the aim of damages for breach of contract?', b: 'To put the claimant, as far as money can, in the position they would have been in if the contract had been performed.' },
      { n: 2, f: 'What is the test for remoteness of damage in contract?', b: 'Hadley v Baxendale (1854): losses are recoverable if they arise naturally from the breach, or were reasonably in the contemplation of both parties when the contract was made.' },
      { n: 3, f: 'What is the difference between expectation and reliance loss?', b: 'Expectation: the benefit the claimant expected from performance.\nReliance: money wasted in relying on the contract, e.g. preparation costs (Anglia Television v Reed, 1972).' },
      { n: 4, f: 'Can damages be awarded for disappointment in contract?', b: 'Yes, where the contract’s purpose is to provide pleasure or relaxation, such as a holiday (Jarvis v Swans Tours, 1973).' },
      { n: 5, f: 'What is the difference between liquidated damages and a penalty clause?', b: 'Liquidated damages: a sum fixed in the contract, enforceable. A penalty is unenforceable if it is out of all proportion to the innocent party’s legitimate interest in performance (Cavendish Square Holding v Makdessi, 2015).' },
      { n: 6, f: 'What are specific performance and an injunction?', b: 'Equitable remedies, given at the court’s discretion where damages are inadequate. Specific performance orders the contract to be carried out (Beswick v Beswick, 1968); an injunction orders a party not to do something (Warner Brothers v Nelson, 1937).' },
    ]),

    // 4 Law of tort
    ...sub(T4, 'the-tort-of-negligence-9084', '4.1', [
      { n: 1, f: 'What is the neighbour principle?', b: 'From Donoghue v Stevenson (1932): you must take reasonable care to avoid acts or omissions you can reasonably foresee would be likely to injure your neighbour, meaning people so closely and directly affected that you ought to have them in mind.' },
      { n: 2, f: 'What is the Caparo test for a duty of care?', b: 'Caparo Industries v Dickman (1990): the damage must be reasonably foreseeable, there must be proximity between the parties, and it must be fair, just and reasonable to impose a duty.' },
      { n: 3, f: 'What is the standard of care in negligence?', b: 'The reasonable person in the defendant’s position. A learner driver is judged as a reasonable competent driver (Nettleship v Weston, 1971); a professional against a responsible body of opinion in that profession (Bolam v Friern Hospital Management Committee, 1957).' },
      { n: 4, f: 'Which risk factors help decide whether there was a breach of duty?', b: 'The likelihood of harm (Bolton v Stone, 1951), the seriousness of potential harm, the cost and practicality of precautions (Latimer v AEC, 1953), and the social value of the activity.' },
      { n: 5, f: 'How is causation shown in negligence?', b: 'By the “but for” test: the harm would not have happened but for the breach. In Barnett v Chelsea and Kensington Hospital (1969) the patient would have died anyway, so the hospital was not liable.' },
      { n: 6, f: 'What is the test for remoteness of damage in negligence?', b: 'The type of damage must be reasonably foreseeable (The Wagon Mound (No 1), 1961). If the type is foreseeable, the extent need not be, so the thin skull rule applies (Smith v Leech Brain, 1962).' },
      { n: 7, f: 'When can pure economic loss be recovered in negligence?', b: 'Generally not (Spartan Steel v Martin, 1973), except for negligent misstatement where there is a special relationship and reasonable reliance (Hedley Byrne v Heller, 1964).' },
      { n: 8, f: 'Who can claim for psychiatric injury as a secondary victim?', b: 'Alcock v Chief Constable of South Yorkshire (1992): a close tie of love and affection with the victim, presence at the event or its immediate aftermath, perception with their own unaided senses, and a recognised psychiatric illness.' },
    ]),
    ...sub(T4, 'torts-affecting-land-9084', '4.2', [
      { n: 1, f: 'What is private nuisance?', b: 'An unlawful interference with a person’s use or enjoyment of land, or some right over or in connection with it. Only someone with an interest in the land can sue (Hunter v Canary Wharf, 1997).' },
      { n: 2, f: 'Which factors decide whether an interference is unreasonable in nuisance?', b: 'Locality (Sturges v Bridgman, 1879), duration and frequency, sensitivity of the claimant, and malice. Locality does not matter where there is physical damage to property (St Helen’s Smelting v Tipping, 1865).' },
      { n: 3, f: 'Is it a defence that the claimant came to the nuisance?', b: 'No. In Miller v Jackson (1977) the cricket club was liable in nuisance although it was there first, though an injunction was refused.' },
      { n: 4, f: 'What is the rule in Rylands v Fletcher (1868)?', b: 'A person who brings onto their land, for a non-natural use, something likely to do mischief if it escapes, is liable for the damage caused if it escapes.' },
      { n: 5, f: 'How did Cambridge Water (1994) and Transco (2003) develop Rylands v Fletcher?', b: 'Cambridge Water: the type of damage must be foreseeable. Transco v Stockport MBC: the use must be extraordinary and unusual, creating an exceptionally high risk, and the rule does not cover personal injury.' },
      { n: 6, f: 'What is trespass to land?', b: 'Directly and intentionally entering or remaining on land in the possession of another, or placing objects on it, without lawful justification. It is actionable without proof of damage (Entick v Carrington, 1765).' },
    ]),
    ...sub(T4, 'torts-affecting-the-person-9084', '4.3', [
      { n: 1, f: 'What is the tort of assault?', b: 'Intentionally or recklessly causing the claimant to reasonably apprehend immediate unlawful force. Words can negate an assault (Tuberville v Savage, 1669).' },
      { n: 2, f: 'What is the tort of battery?', b: 'The intentional and direct application of unlawful force to another person; the slightest touch can be enough, beyond the ordinary contact of everyday life (Collins v Wilcock, 1984).' },
      { n: 3, f: 'What is false imprisonment?', b: 'Unlawfully and totally restraining a person’s freedom of movement. Partial restraint is not enough (Bird v Jones, 1845); the claimant need not know they were detained (Meering v Grahame-White Aviation, 1919).' },
      { n: 4, f: 'What is the tort in Wilkinson v Downton (1897)?', b: 'Intentionally causing physical or psychiatric harm by an act or statement, e.g. a false practical joke that a woman’s husband had been badly injured.' },
      { n: 5, f: 'Do trespass to the person torts need proof of damage?', b: 'No. Assault, battery and false imprisonment are actionable per se: without proof of any damage.' },
    ]),
    ...sub(T4, 'general-defences-and-remedies-9084', '4.4', [
      { n: 1, f: 'What is volenti non fit injuria (consent)?', b: 'A complete defence where the claimant freely and voluntarily, with full knowledge of the risk, agreed to it. Mere knowledge of a risk is not enough (Smith v Baker, 1891); it succeeded in Morris v Murray (1991).' },
      { n: 2, f: 'What is contributory negligence?', b: 'A partial defence: where the claimant’s own carelessness contributed to the damage, damages are reduced by the court according to their share of responsibility (Law Reform (Contributory Negligence) Act 1945; Froom v Butcher, 1976, no seat belt).' },
      { n: 3, f: 'What is the defence of illegality?', b: 'Ex turpi causa: a claimant injured while jointly committing a crime with the defendant may be denied a claim (Pitts v Hunt, 1991).' },
      { n: 4, f: 'What is the aim of compensatory damages in tort?', b: 'To put the claimant, so far as money can, in the position they would have been in if the tort had not been committed. They may be special (exact losses to trial) or general (pain and suffering, future losses).' },
      { n: 5, f: 'When is an injunction granted in tort?', b: 'At the court’s discretion, to stop a continuing tort such as a nuisance or trespass. Damages may be awarded instead where an injunction would be unfair, as in Miller v Jackson (1977).' },
      { n: 6, f: 'What are the limitation periods for tort claims?', b: 'Under the Limitation Act 1980: generally six years from when the cause of action arose, and three years for personal injury claims.' },
    ]),
  ],
};
