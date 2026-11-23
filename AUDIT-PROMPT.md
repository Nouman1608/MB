# Audit prompt (owner's text, condensed but complete). Items marked VERIFY may be wrong: confirm against source files and official board documents before changing anything. Never invent a fact, date, mark total or syllabus code; if you cannot confirm, leave unchanged and report NEEDS OWNER.

## Decisions
D1 Islamic honorifics: "(pbuh)" after every mention of the Prophet; "(RA)" after Companions' names, consistently.
D2 Tuition prompts on resource pages: max 2 per page (one short line after the introduction, one block at the end).
D3 "Classes offered" on board hubs: show which courses have classes using existing data; if no data says which, remove the "X of Y" claim.
D4 Exam calendar labels must never go stale between deploys: compute past/now/next and deadline warnings in the browser from the visitor's date, plain dates readable without JS.

## Rules for every agent
- Fix only the item described. Keep style/structure. Cite official source (Cambridge International, Pearson, AQA, OCR, OxfordAQA, IB, College Board) for any syllabus/paper/mark/date fact; if no web access or doc not public -> NEEDS OWNER and don't change the fact.
- Do not delete/rename pages or change URLs. Do not change prices. Re-derive every calculation you touch and show working. English only; never touch /ar/, /ur/, /bn/.
- If you need a change in a file you don't own, don't edit; report the exact change.

## AREA 1 (Agents A, B, C). Paths under /resources/ unless they start with /advanced-course-resources/.
Agent A, STEM:
C1 oxfordaqa-igcse-chemistry-9202-the-mole-concept-revision-notes/: add units to Avogadro constant (6.02 x 10^23 mol^-1) and molar mass (g/mol). Fix the "sense check" that a few grams of a substance is usually under 1 mol: fails for hydrogen (5 g H2 = 2.5 mol). Reword or add the exception.
C2 oxfordaqa-igcse-chemistry-9202-the-mole-concept-practice/: show the total mark (expected 37; recount) and add brief examiner notes to the questions that have none, matching the one that has them.
C3 ib-dp-mathematics-aa-sl-integration-kinematics-revision-notes/: "Paper 1 or Paper 2?" section cites 5.5 for definite integrals and areas; page elsewhere uses 5.11. Fix to 5.11. Check "∫ |v(t)| dt" renders without stray backslashes. VERIFY power-rule scope line ("5.5: n ∈ ℤ; 5.10: n ∈ ℚ") and the claim a new course is first assessed May 2029 against the IB guide; remove the claim if it cannot be sourced.
C4 cambridge-a-level-economics-efficiency-market-failure-and-externalities-revision-notes/: Bypass cost-benefit example (diagram 03 and caption): a toll is a transfer from users to operator, not a social benefit; remove from social benefits or explain as transfer. Time savings are mainly private benefits to drivers; say so. Fix/remove caption's reference to a "private loss" whose figures are never shown. Lemons diagram: state assumed mix of good/poor cars behind average 4,500, explain "gain of 1,000" per lost sale and fall to 3,000, or simplify so numbers reconcile. Add short definitions: public goods (non-rival, non-excludable, free-rider) and merit goods (under-consumed because of imperfect information). Pareto diagram: change "upper right of W" to "at least as well off for both, and better off for at least one". Show MC value at Q=40 so welfare-loss triangle of 40 can be checked. Several images have IB DP or IGCSE filenames: confirm each is correct for 9708; replace/relabel any that are not.
C5 aqa-gcse-biology-8461-transport-in-cells-revision-notes/: three image alts use Cambridge tier word "Extended", one uses "water potential" (not AQA 8461). All seven images are Cambridge IGCSE 0610 assets. Rewrite alt text for AQA. Open each image: if the image itself shows "Extended" or water potential, flag for replacement (don't edit images) and remove from page if it contradicts AQA content.
C6 edexcel-a-level-mathematics-yma01-p3-numerical-methods-edexcel-alevel-maths-revision-notes/: worked example and self-test 4 show "x2 = sqrt(5.2361) = 2.2882"; sqrt(5.2361)=2.2883. Write step from unrounded value, e.g. x2 = sqrt(sqrt5 + 3) = 2.2882, and check every later step.
C7 ocr-a-level-physics-capacitance-capacitor-combinations-and-stored-energy-practice/: Q11(a) working must read sqrt(2 x 15 / (0.90 x 10^-3)). Answer 183 V stays.
C8 Edexcel "A Level Mathematics" course is the International A Level (YMA01, units P1-P4, M1-M2, S1-S2, D1), not UK 9MA0. Make name consistent ("Pearson Edexcel International A Level Mathematics") across titles, headings, resource names; add unit codes (WMA11 etc.) only if confirmed from Pearson.
C9 VERIFY as-chemistry-equilibria-practice/: Q5(b) reportedly explains Kc having no units by counting moles of gas, but esterification is all liquid. Fix reasoning to equal numbers of moles of species each side (same phase). Q4 reportedly uses "<=>", "delta-H", "mol-1": use ⇌, ΔH, mol⁻¹.
C10 VERIFY cambridge-igcse-physics-0625-energy-work-and-power...-revision-notes/: example labelled Core uses efficiency calc the page marks Extended only. Relabel example or equations so they agree with the 0625 syllabus.
C11 VERIFY aqa-gcse-biology-8461-cell-division-practice/: Q5 treats cells with chromosomes "being pulled apart" as all cells in mitosis (only anaphase); Q10(b) called levels-marked but gives six point marks. Make each consistent.
C12 VERIFY ocr-a-level-physics-radioactive-decay-activity-half-life-and-dating-revision-notes/: give λ = 0.182 a unit ("per throw") in dice model; decay table headers "A" and "Z" should read "change in A"/"change in Z" if that is what they show.
C13 VERIFY /advanced-course-resources/chemistry/8-9-henderson-hasselbalch-equation-revision-notes/: render K_a, K_w and 10^(pH − pKa) with proper sub/superscripts matching other pages. Add one line of working to each self-check answer.
C14 VERIFY cambridge-igcse-mathematics-0580-limits-of-accuracy...-practice/: Q2 answer missing "kg"; reword Q2 examiner note about 0.05 so it is exact. Also /advanced-course-resources/calculus-ab/ lesson 8.5 Figure 1 contains stray text ("−415x 2−3y"); remove it.

Agent B, humanities/business/computing/languages:
C15 cambridge-o-level-islamiyat-2058-first-islamic-community-revision-notes/: apply D1 throughout; qualify "Zayd ibn Haritha is the only Companion named in the Qur'an" as the widely held view and update self-test item 8; Safiyya: replace "he defended her honour" with the specific incident (or precise statement) used in mainstream Sunni sources for this syllabus; Shi'a Imams list: add one sentence that Sunni Muslims do not recognise them as divinely appointed Imams; make syllabus reference agree in syllabus box, source line and breadcrumb; Caliph table heading says "Three facts" but Ali row has four: fix one; one apostrophe style (straight ') in transliteration; note once that Yathrib and Madinah are the same place before/after the Hijra; use "Hadith" as plural; front matter (meta tags, canonical, og, twitter) reportedly appears as visible text: VERIFY and fix (report to Agent E if shared template); Azam Siddique faculty photo empty alt (DONE ELSEWHERE on branch seo/audit-nov-2026: verify only); then apply D1 and apostrophe rule to every other Islamiyat resource.
C16 VERIFY o-level-pakistan-studies-nationhood-1947-99-revision-notes/: RCD (1964) was Pakistan, Iran and Turkey. Fix if Iran missing.
C17 VERIFY cambridge-igcse-computer-science-0478-file-handling-revision-notes/: "Updating a file" reportedly reads into Names[1:4] from a file of three names (range notation not Cambridge pseudocode). Rewrite with a loop over correct number of elements in 0478 pseudocode.
C18 VERIFY igcse-computer-science-programming-practice/: Q9(b)/(c) say "each player's" score is saved but WRITE mode overwrites the file. Make question and mark scheme consistent with 0478 file modes (READ and WRITE only).
C19 VERIFY o-level-cambridge-urdu-first-language-paper-2-texts/: poet "Ahtish" should be Aatish (آتش); check "Musadas Hali" and "Admee"; "eight prescribed prose articles" alongside two Ghalib letters; full text list and 20/15/15 mark split against current 3247 syllabus.
C20 VERIFY edexcel-igcse-english-literature-4et1-section-c-modern-prose-revision-notes/: confirm the seven listed novels (incl. Klara and the Sun, Western Lane) against current Pearson 4ET1 spec and fix list.
C21 Cambridge IGCSE Business: titles say 0264, some practice sets say 0450, official link goes to 0450. 0450 last examined 2026, replaced by 0264 from 2027 (VERIFY on Cambridge). Label each resource with the code and exam years it applies to, consistently.
C22 VERIFY cambridge-a-level-psychology-9990-social-approach-revision-notes/: labelled 2024-2026 but a link reportedly points to the 2027 syllabus PDF. Make label and link agree.
C23 VERIFY edexcel-gcse-business-business-calculations-revision-notes/: "A has the larger yearly and total profit" stated without B's lifespan. Add missing figure or reword.
C24 English Literature (Cambridge 0475 Section B prose; Edexcel 4ET1 course page): pages name no set texts. Add current set-text list per component from official syllabus, with exam years. No copyrighted text.
C25 Urdu pages are entirely English, no Urdu script. Don't write Urdu content. Report every Urdu resource, its size, and a plan; NEEDS OWNER.
C26 Repeated filler ("Common mistakes", "Where marks are usually lost", FAQ, checklist often repeat). Report how many resources have overlapping blocks, propose a rule; no mass rewrite.
C27 Old overview pages overlap newer subtopic pages (e.g. two "English Legal System" practice pages). Report each pair with contradictions. Don't delete or merge.

Agent C, cross-board sweep:
C28 Search every resource that is not Cambridge for Cambridge-only wording/assets: "Extended", "Supplement", "Core" (as tier labels), "water potential" (outside A Level), "Paper 4"/"Paper 6", Cambridge syllabus codes, image filenames containing igcse-, 0610, 0620, 0625, 0580. List every hit with file and line. Fix wording in files you own (not A/B's); for files owned by A or B send the list in your report. Flag images for replacement; don't edit images.

## AREA 2 (Agents D, E)
Agent D, course pages and data:
P1 Verification dates: course pages show 2-4 different "verified" dates (e.g. Economics 2026-09-17, 2026-10-04, 2026-11-20; Islamiyat 2026-08-27, 2026-10-04, 2026-11-20; Chemistry four). If already fixed on main (fees/trial work), mark DONE ELSEWHERE. Else: work out what each date means, label each genuinely different check, store each fact once, never present build date as a verification.
P2 Cambridge A Level Economics (/boards/cambridge/a-level/economics/): FAQ topic list gives six distinct names for eleven topics; list the 11 real topics. Topics 9 and 10 both link to "Government Macroeconomic Intervention (A Level)" practice; topic 9 ("The macroeconomy") needs its own correct link. Topic 3 lists a topic 1 resource. Several resources appear under more than one topic or twice under topic 7 with different URLs: list and fix topic assignment.
P3 Cambridge O Level Islamiyat (/boards/cambridge/o-level/islamiyat/): says "2 topics" but describes four; "five questions" but describes four; says no weighting published while table shows 50% per paper. Correct all three from the 2058 syllabus. Report Quran passages have almost no material (NEEDS OWNER).
P4 Assessment tables repeat paper name ("Paper 1: Paper 1"). Fix template so label shows once.
P5 Topic count must equal topics listed; resource counts must equal resources listed (e.g. Edexcel GCSE Business says 167, 170 links counted). Add a build-time check (wire into validate:academic) that fails on mismatch, and on two different topics linking to the same practice URL.
P6 OxfordAQA IGCSE Chemistry: several topics have standalone and combined guides on the same material (e.g. "Nanoparticles" and "Structure and bonding of carbon, and nanoparticles"). List pairs; make course page show each clearly (don't delete). One name, "International GCSE" or "IGCSE", consistently in titles on this course.
P7 AS Level groups on hub repeat A Level counts and link to A Level pages, so totals double-count. Count each resource once; label AS groups as part of the A Level course if that is what they are.
P8 Cambridge IGCSE and O Level show identical counts for Accounting (161), Chemistry (210), Commerce (80) and share URLs. VERIFY: if deliberately shared, say so on both pages; else report.
P9 Board hubs: apply D3 to "classes offered in 15 of 21" (IB) and "48 of 55" (Cambridge). Explain paired codes on Cambridge hub (IGCSE Business 0450/0264, English Literature 0475/0992, Geography 0460/0976, O Level Urdu 3247/3248) with one line each. One qualification order on every board entry. Use "ICT" consistently.
P10 Past papers: report true count per course, list courses with none, and the chemistry page titled "Past Papers" that holds notes (retitle to match). Don't upload papers.
P11 Thin courses: list every course with <40 resources; confirm whether Pearson Edexcel GCSE really has only Business and whether an Edexcel IGCSE Mathematics course exists but is unpublished/filtered/miscategorised. Fix only data errors.
P12 9709 diagnostic description lists Pure 1 and Probability & Statistics 1 while titled Pure 3 with AS applied topics: make accurate (Agent G owns diagnostics data; D reports exact change to G via lead).

Agent E, resource page template and hub:
P13 Apply D2 to tuition prompts on resource pages. Move the country tuition list and email signup out of the middle of notes to the end.
P14 Signup form: qualification picker shows as plain list with "Qualification Choose…" and "Choose a qualification to see its subjects." as text. Make it a working control, with sensible no-JS fallback.
P15 Related articles: DONE ELSEWHERE on branch seo/audit-nov-2026 (src/utils/content/related.ts). Do not edit; verify the rendering side only.
P16 Link text runs together ("Practise this topic The price system…"); "Study guides" and related entries run into their descriptions. Add proper separation.
P17 Stray headings ("Learn this with a teacher", "Studying this with a teacher") and duplicated FAQ and related-content blocks on resource pages: remove duplicates.
P18 FAQ headings show stray "+ −" to text readers. Hide toggle icons from assistive tech and text extraction.
P19 WhatsApp link text "Ib courses" -> "IB courses": DONE ELSEWHERE on seo/audit-nov-2026 (WhatsAppButton.astro). Verify only; check other generators of that text.
P20 Related-article category labels inconsistently capitalised ("teaching A Level tuition…", "curriculum guides"). One style.

## AREA 3 (Agents F, G)
Agent F:
T1 URGENT. /exam-calendar/ labels Oct/Nov 2026 "Currently ahead" though its exam window is over and only results remain. Feb/Mar 2027 final entry deadline 27 Nov 2026 not flagged. Implement D4: labels and warnings from current date in browser, visible warning for any entry deadline within 14 days. Do first; report separately; commit it on its own so it can ship alone (lead will branch it as fix-exam-calendar-status).
T2 Exam calendar: Cambridge only, no May/June 2027 dates. Add May/June 2027 key dates only from official Cambridge document; otherwise NEEDS OWNER.
T3 /syllabus-updates/: OxfordAQA A Level Business 9725 shown first exam 2027. Correct: AS first examined May/June 2027, full A Level May/June 2028 (source: oxfordaqa.com/qualifications/international-as-a-level-business-revised/).
T4 /syllabus-updates/: fill "First teaching: Not recorded" only from official sources; IB History internal assessment duration blank; 2019 IB Psychology marks attributed to unofficial sources: replace with official figures or mark unconfirmed.
T5 VERIFY whether OCR AS Business H031 (final assessment summer 2027) should be listed; add if page tracks OCR AS qualifications.
T6 /grade-thresholds/: covers five Cambridge syllabuses (0620, 0625, 0580, 9701, 9702), June 2026 only. Report what adding Nov 2026 and more would take; no figures without official tables.
T7 /command-words/: Cambridge only (22 words). State clearly on page. Report what adding other boards takes.
T8 Verified correct, do not change: Nov 2026 and Mar 2027 Cambridge key dates, June 2026 exam period, 0620 and 9701 June 2026 A thresholds, AQA 7137/7138 and OCR H431-H436 dates, Cambridge 0450 to 0264, IB Psychology and Computer Science first assessment 2027.

Agent G:
T9 Flashcards: Business decks mix outgoing and incoming syllabuses (AQA 7132, OCR H431 old; AQA 7137, OxfordAQA 9725, Cambridge 0264 new). Label every deck with syllabus code and exam years; mark decks for syllabuses no longer examined.
T10 Flashcards header claims 27,796 cards for 166 courses; ~159 deck links counted; 15 AP decks (5,361 cards) outside total. Make headline count what is listed, from one source.
T11 Relative atomic mass card (OxfordAQA 9202 deck): "weighted average mass of an atom of the element relative to 1/12 of the mass of a carbon-12 atom".
T12 Cambridge IGCSE Biology Core diagnostic (/practice/0610/diagnostic/core/) says it draws on June 2024 Paper 42, an Extended paper. VERIFY and correct source or Core label.
T13 0625 Core diagnostic lists "Four topics" but has six questions. Make topic and question counts clear and consistent across all 31 diagnostics.
T14 Diagnostics: state plainly answers stay in browser and are not saved/sent, if that is what the code does. Check code.
T15 /practice/9708/ claims 921 questions but shows none without JS. Render list in HTML at build time if feasible without new dependencies; else report. Check the 84 fallback links for near-duplicate titles.
T16 /subjects/: Chemistry shows 2,192 resources while per-course counts on /subjects/chemistry/ sum to ~2,251. One count source.
T17 /levels/ lists seven qualifications, no AP, while /programs/ marks AP "Teaching now". Make consistent.
T18 /programs/: title names SAT, body marks "Not taught". Remove SAT from title or reflect body.
T19 /checklists/: IB DP Computer Science shows both "(2014)" and "(2027)"; label which applies to which exam years. "World History" should be "History" (IB title) where it labels DP History.
T20 /subjects/: "Languages" has no count. Add or explain.
