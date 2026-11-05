/**
 * D-438 -- flashcards for OxfordAQA International AS and A-level Biology 9610
 * (Version 5.1, for International A-level exams May/June 2018 onwards).
 *
 * One block per subtopic (Unit 2) or per topic (Units 1, 3 and 4, which the
 * syllabus record does not yet itemise into subtopics), in syllabus order.
 * Card ids are `<subtopic number>-<n>` or `<topic number>-<n>` and are
 * permanent (browser progress is keyed by them): add a new card with the
 * next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9610, or a definition table
 *               on the page); origin 'revision-notes'.
 *
 * The course is not tiered, so no card is marked upper tier.
 * Plain text only (see types.ts). Unicode for formulae.
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; u?: true; src?: string }

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, u, src }) => ({
    id: `${number}-${n}`,
    topic,
    subtopic,
    front: f,
    back: b,
    ...(u ? { tier: 'upper' as const } : {}),
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

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

const P = 'oxfordaqa-a-level-biology-';
const DIV = `${P}diversity-revision-notes`;
const BMOL = `${P}biological-molecules-enzymes-membranes-and-nucleic-acids-revision-notes`;
const CAUSE = `${P}causes-of-disease-revision-notes`;
const DAC = `${P}digestion-absorption-and-cholera-revision-notes`;
const HIVA = `${P}hiv-and-plant-virus-transmission-by-aphids-revision-notes`;
const IMM = `${P}immunity-antigens-antibodies-and-vaccination-revision-notes`;
const BV = `${P}blood-vessels-the-heart-and-coronary-heart-disease-revision-notes`;
const MTP = `${P}mass-transport-in-plants-xylem-transpiration-and-phloem-revision-notes`;
const CDMC = `${P}cell-division-mutation-and-cancer-revision-notes`;
const AFG = `${P}allele-frequencies-genetic-drift-and-the-hardy-revision-notes`;
const ETPF = `${P}energy-transfer-productivity-and-farming-revision-notes`;
const INHX = `${P}inheritance-and-genetic-crosses-revision-notes`;
const NSS = `${P}natural-selection-and-speciation-revision-notes`;
const NUTC = `${P}nutrient-cycles-carbon-and-nitrogen-revision-notes`;
const PHOT = `${P}photosynthesis-and-limiting-factors-revision-notes`;
const POPC = `${P}populations-communities-and-ecological-succession-revision-notes`;
const RESPX = `${P}respiration-glycolysis-krebs-cycle-and-respiratory-revision-notes`;
const BG = `${P}blood-glucose-control-hormones-and-diabetes-revision-notes`;
const PGS = `${P}plant-growth-substances-tropisms-ethene-and-aba-revision-notes`;
const RDNA = `${P}recombinant-dna-technology-revision-notes`;
const RTKS = `${P}reflexes-taxes-and-kineses-and-sensory-receptors-revision-notes`;
const REGS = `${P}regulation-of-gene-expression-and-stem-cells-revision-notes`;
const SKM = `${P}skeletal-muscle-and-the-sliding-filament-theory-revision-notes`;

const T2 = 'biological-systems-and-disease-oxfordaqa-alevel-biology';

export const DECK_OXFORDAQA_A_LEVEL_BIOLOGY: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'biology',
  syllabusCode: '9610',
  syllabusSeries: 'Version 5.1, for International A-level exams May/June 2018 onwards',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'hina-mogul', reviewedOn: '2026-11-05' },
  cards: [
    // 1 The diversity of living organisms
    ...topicOnly('the-diversity-of-living-organisms-oxfordaqa-alevel-biology', '1', [
      { n: 1, f: "The taxonomic hierarchy, from largest to smallest group", b: "Domain, kingdom, phylum, class, order, family, genus, species. Each group sits inside the one above, with no overlap between groups.", src: DIV },
      { n: 2, f: "Species", b: "A group of organisms with similar characteristics that can interbreed to produce fertile offspring. A mule (infertile offspring of a horse and a donkey) shows why 'fertile' is essential.", src: DIV },
      { n: 3, f: "How is a binomial name written?", b: "Genus then species. The genus has a capital letter, the species is lower case, and both are in italics (or underlined when handwritten).", src: DIV },
      { n: 4, f: "Phylogenetic classification, and the evidence used for it", b: "Grouping by evolutionary relationships and common ancestry. Evidence: DNA base sequences, mRNA sequences and amino acid sequences of proteins; the more similar, the more recent the common ancestor.", src: DIV },
      { n: 5, f: "Species richness and species diversity", b: "Species richness: the number of different species present.\nSpecies diversity: the number of species and the number of individuals in each.", src: DIV },
      { n: 6, f: "A community has 3 species with 10, 4 and 1 individuals. Calculate the index of diversity, d = N(N − 1) ÷ Σn(n − 1).", b: "N = 15, so N(N − 1) = 210. Σn(n − 1) = 90 + 12 + 0 = 102. d = 210 ÷ 102 = 2.06" },
      { n: 7, f: "How can genetic diversity be measured (3.1.11.1)?", b: "By comparing the base sequence of DNA or of mRNA, the frequency of specific base sequences or alleles in populations, or the amino acid sequence of the proteins they code for.", src: DIV },
      { n: 8, f: "Three causes of genetic diversity", b: "Mutation; meiosis (crossing over and independent assortment); and random fertilisation.", src: DIV },
      { n: 9, f: "Why are quadrats placed at random coordinates, and why does sample size matter?", b: "Random coordinates remove bias from the person sampling, so the sample represents the area. The sample must be large enough for a reliable mean; a small one may miss species by chance.", src: DIV },
      { n: 10, f: "Condensation and hydrolysis", b: "Condensation joins two molecules by a chemical bond, releasing a water molecule.\nHydrolysis breaks the bond using a water molecule.", src: BMOL },
      { n: 11, f: "Facilitated diffusion compared with active transport", b: "Facilitated diffusion: passive movement down a concentration gradient through channel or carrier proteins; no ATP.\nActive transport: movement against a concentration gradient by carrier proteins, using ATP.", src: BMOL },
      { n: 12, f: "Properties of the genetic code", b: "A triplet of bases codes for each amino acid. It is universal (same in all organisms), non-overlapping and degenerate (most amino acids have more than one triplet).", src: BMOL },
      { n: 13, f: "Starch compared with cellulose", b: "Starch: α-glucose; amylose (unbranched, coiled) and amylopectin (branched); insoluble, compact energy store in plants.\nCellulose: β-glucose; straight, unbranched chains joined by hydrogen bonds into microfibrils, giving the cell wall high tensile strength.", src: BMOL },
      { n: 14, f: "Test for a non-reducing sugar", b: "After a negative Benedict's test, boil a fresh sample with dilute hydrochloric acid, neutralise with sodium hydrogencarbonate, then heat with Benedict's reagent. A coloured precipitate shows a non-reducing sugar (the acid hydrolysed it).", src: BMOL },
      { n: 15, f: "Triglyceride compared with phospholipid", b: "Triglyceride: one glycerol and three fatty acids joined by ester bonds in condensation reactions.\nPhospholipid: one fatty acid is replaced by a phosphate-containing group, giving a hydrophilic head and hydrophobic tails.", src: BMOL },
      { n: 16, f: "Competitive compared with non-competitive inhibitors", b: "Competitive: similar shape to the substrate, binds the active site; its effect is reduced by adding more substrate.\nNon-competitive: binds away from the active site and changes its shape; adding more substrate does not overcome it.", src: BMOL },
      { n: 17, f: "Transcription in prokaryotes compared with eukaryotes", b: "In both, RNA polymerase joins mRNA nucleotides. In prokaryotes transcription produces mRNA directly. In eukaryotes it produces pre-mRNA, which is spliced (introns removed) to form mRNA.", src: BMOL },
      { n: 18, f: "Nuclear DNA of a eukaryote compared with DNA of a prokaryote", b: "Eukaryotic nucleus: long, linear, associated with proteins such as histones that package it into chromosomes.\nProkaryotes (and mitochondria and chloroplasts): shorter, circular, not associated with proteins.", src: BMOL },
    ]),

    // 2 Biological systems and disease
    ...sub(T2, 'the-causes-of-disease-pathogens-lifestyle-and-genes-oxfordaqa-alevel-biology', '3.2.1', [
      { n: 1, f: "Pathogen", b: "An agent of infection, such as a bacterium or virus, that can cause disease.", src: CAUSE },
      { n: 2, f: "Two ways pathogens cause disease", b: "Damaging host cells directly, and producing toxins that disrupt cell or tissue function, sometimes far from the infection site.", src: CAUSE },
      { n: 3, f: "Toxin", b: "A poisonous chemical produced by a pathogen that disrupts cell or tissue function, sometimes distant from the infection site.", src: CAUSE },
      { n: 4, f: "Through which interfaces with the environment can pathogens enter a mammal?", b: "The digestive, reproductive and gas-exchange systems (the skin is a further interface). Name the one that fits the example.", src: CAUSE },
      { n: 5, f: "Risk factor", b: "A variable statistically associated with an increased likelihood of disease, without necessarily being proven to cause it.", src: CAUSE },
      { n: 6, f: "Correlation", b: "A statistical relationship between two variables; on its own it does not show that one causes the other.", src: CAUSE },
      { n: 7, f: "Three steps for interpreting disease-incidence data linked to a lifestyle factor", b: "1 Describe the pattern, with figures.\n2 State the conclusion the data are consistent with (the factor is a risk factor).\n3 Name another variable that could explain the pattern, so correlation does not prove cause." },
      { n: 8, f: "Give an example of disease caused mainly by a toxin, and one caused mainly by cell damage", b: "Toxin: tetanus, whose bacterial toxin affects the nervous system and causes muscle spasms.\nCell damage: many viruses, which replicate inside host cells and rupture them." },
      { n: 9, f: "Lifestyle risk factors associated with coronary heart disease", b: "Smoking, high blood pressure, high blood cholesterol, and a diet high in saturated fat or salt. Changing these can reduce the risk." },
    ]),
    ...sub(T2, 'digestion-and-absorption-oxfordaqa-alevel-biology', '3.2.2', [
      { n: 1, f: "Digestion, absorption and assimilation", b: "Digestion: hydrolysis of large molecules by enzymes into smaller ones.\nAbsorption: the products cross the gut wall into the body.\nAssimilation: absorbed substances become part of cells and tissues.", src: DAC },
      { n: 2, f: "Digestion of starch", b: "Amylase (from salivary glands and pancreas) hydrolyses starch to maltose. Membrane-bound maltase on ileum epithelial cells hydrolyses maltose to glucose." },
      { n: 3, f: "Endopeptidases, exopeptidases and dipeptidases", b: "Endopeptidases hydrolyse peptide bonds inside the chain, giving shorter chains.\nExopeptidases remove amino acids from the ends.\nMembrane-bound dipeptidases split dipeptides into two amino acids.", src: DAC },
      { n: 4, f: "Role of bile salts in lipid digestion", b: "They emulsify lipids into small droplets, increasing the surface area for lipase, and later help form micelles. They are not enzymes and do not digest fat chemically.", src: DAC },
      { n: 5, f: "Products of lipid digestion by lipase", b: "Triglycerides are hydrolysed to monoglycerides and fatty acids." },
      { n: 6, f: "How is the ileum adapted for absorption?", b: "Villi and microvilli give a large surface area; a single layer of epithelium gives a short diffusion path; a capillary network keeps gradients steep; epithelial cells have many mitochondria for active transport." },
      { n: 7, f: "How are glucose and amino acids absorbed in the ileum?", b: "The sodium–potassium pump removes Na⁺ from the epithelial cell into the blood using ATP. Na⁺ enters from the lumen down its gradient through a co-transporter, carrying glucose or an amino acid in against its gradient; it leaves into the blood by facilitated diffusion." },
      { n: 8, f: "Micelle and chylomicron", b: "Micelle: bile salts with fatty acids and monoglycerides; carries them to the epithelial surface.\nChylomicron: triglycerides rebuilt inside the cell, packaged with protein and phospholipid; leaves by exocytosis into a lacteal.", src: DAC },
      { n: 9, f: "A 60-amino-acid polypeptide is cut by an endopeptidase at three places. How many peptide bonds and fragments remain?", b: "The chain has 59 bonds. Three cuts leave 56 bonds and give 4 fragments." },
    ]),
    ...sub(T2, 'cholera-oxfordaqa-alevel-biology', '3.2.3', [
      { n: 1, f: "Cause and spread of cholera", b: "The bacterium Vibrio cholerae, usually spread in contaminated water or food. It secretes a toxin in the small intestine." },
      { n: 2, f: "How does the cholera toxin cause watery diarrhoea?", b: "It increases secretion of chloride ions into the gut lumen; sodium ions follow. The lumen water potential falls below that of the cells and blood, so water moves out by osmosis, causing severe watery diarrhoea and dehydration." },
      { n: 3, f: "What does an oral rehydration solution (ORS) contain?", b: "Water, glucose and salts including sodium ions." },
      { n: 4, f: "Why does an oral rehydration solution work?", b: "Glucose and sodium ions are still absorbed from the gut by co-transport, lowering the water potential of the epithelial cells, so water follows them by osmosis." },
      { n: 5, f: "Why is water alone a poor treatment for cholera dehydration?", b: "It supplies no glucose to drive sodium ion uptake by co-transport, so less water follows by osmosis." },
      { n: 6, f: "Limitations of oral rehydration solutions", b: "They need clean water, treat the symptom (dehydration) not the infection, and severe cases still need intravenous fluid." },
      { n: 7, f: "Ethical points for a trial of a new oral rehydration solution", b: "Informed consent (from parents for children), the right to withdraw, no untreated placebo group, ethics committee approval, no exploitation of vulnerable people, and fair access afterwards." },
      { n: 8, f: "A 50 kg patient loses 500 mL of stool per hour for 10 hours. Volume lost, and as a percentage of body mass (1 L ≈ 1 kg)?", b: "0.5 L × 10 = 5 L. 5 ÷ 50 × 100 = 10% of body mass." },
      { n: 9, f: "An ORS contains 75 mmol of glucose per litre. What mass of glucose (Mr 180.16) is in 1.5 litres?", b: "1.5 × 75 = 112.5 mmol = 0.1125 mol. 0.1125 × 180.16 = 20.3 g." },
    ]),
    ...sub(T2, 'hiv-as-an-example-of-a-human-disease-caused-by-a-virus-oxfordaqa-alevel-biology', '3.2.4', [
      { n: 1, f: "Why are viruses described as acellular and non-living?", b: "Acellular: not made of cells; no cytoplasm, ribosomes or metabolism of their own.\nNon-living: they cannot respire, grow or reproduce outside a host cell.", src: HIVA },
      { n: 2, f: "Structure of HIV, from the outside in", b: "Lipid envelope (from the host cell membrane) carrying glycoproteins; protein capsid; inside the capsid, two copies of RNA plus the enzymes reverse transcriptase, integrase and protease." },
      { n: 3, f: "Envelope (of HIV)", b: "The outer layer, taken from the host cell plasma membrane, carrying viral glycoproteins.", src: HIVA },
      { n: 4, f: "What do the glycoproteins on HIV bind to?", b: "CD4 receptors, proteins on the surface of helper T-cells.", src: HIVA },
      { n: 5, f: "Roles of reverse transcriptase, integrase and protease in HIV", b: "Reverse transcriptase: makes DNA from the viral RNA template.\nIntegrase: inserts the viral DNA into a host chromosome.\nProtease: cuts long viral proteins into functional lengths.", src: HIVA },
      { n: 6, f: "Replication cycle of HIV in order", b: "Glycoproteins bind CD4 on a helper T-cell; RNA and enzymes enter; reverse transcriptase makes DNA; integrase inserts it into a host chromosome; it is transcribed and viral proteins made on host ribosomes, trimmed by protease; new particles are assembled and released." },
      { n: 7, f: "Why does HIV infection leave a person vulnerable to other infections?", b: "HIV destroys helper T-cells, which initiate the body's response to infections, so infections that are normally controlled become serious." },
      { n: 8, f: "In drug-treated cells, viral DNA is found in the cytoplasm but not in a chromosome. Which enzyme is blocked, and with what effect?", b: "Integrase. The DNA cannot be inserted into a host chromosome, so no new viral RNA is made from it." },
      { n: 9, f: "Why do antibiotics not work against HIV?", b: "Antibiotics act on bacterial structures and processes. A virus has no cell structure or metabolism of its own for them to act on." },
      { n: 10, f: "Reverse transcription compared with transcription", b: "Transcription makes RNA from a DNA template. Reverse transcription makes DNA from an RNA template.", src: HIVA },
    ]),
    ...sub(T2, 'the-defensive-functions-of-mammalian-blood-oxfordaqa-alevel-biology', '3.2.5', [
      { n: 1, f: "Antigen", b: "A molecule, usually a protein, that the immune system recognises as foreign and that triggers an immune response.", src: IMM },
      { n: 2, f: "Antibody", b: "A protein made by plasma cells that binds specifically to one antigen.", src: IMM },
      { n: 3, f: "Phagocytosis in steps", b: "Phagocyte is attracted to the pathogen and binds it; engulfs it into a phagosome; lysosomes fuse with the phagosome; hydrolytic enzymes digest the pathogen; antigens may be displayed on the phagocyte surface." },
      { n: 4, f: "Cell-mediated and humoral immunity", b: "Cell-mediated: the actions of T cells.\nHumoral: B cells, with antibodies in body fluids.", src: IMM },
      { n: 5, f: "The B cell response in order", b: "A macrophage presents the antigen; a T cell with a complementary receptor is activated; a B cell with a complementary surface antibody binds the antigen; it divides by mitosis (clonal expansion) into plasma cells, which secrete antibody, and memory cells." },
      { n: 6, f: "Structure of an antibody", b: "Two heavy and two light polypeptide chains joined by disulfide bridges. A variable region forms two identical antigen-binding sites; a constant region is the same within a class; a hinge gives flexibility." },
      { n: 7, f: "Agglutination", b: "Each antibody has two antigen-binding sites, so it can bind two bacteria, clumping them together; phagocytes then engulf the clumps." },
      { n: 8, f: "Why is the secondary immune response faster and larger than the primary?", b: "Memory cells made at the first exposure are already present. On re-exposure many recognise the antigen at once and divide rapidly into plasma cells, so more antibody is made sooner." },
      { n: 9, f: "Active and passive immunity", b: "Active: the body makes its own antibodies and memory cells (infection or vaccination); lasts years.\nPassive: ready-made antibodies are received (placenta, breast milk or injection); no memory cells; lasts weeks to months." },
      { n: 10, f: "Herd immunity", b: "Indirect protection of non-immune people, such as very young babies, when enough of the population is immune to stop the pathogen being transmitted.", src: IMM },
      { n: 11, f: "How does antigen variability affect disease and vaccination?", b: "If a pathogen's antigens change, existing memory cells no longer match, so people can be reinfected by a new strain and vaccines must be updated or are hard to make." },
      { n: 12, f: "4 cases among 5000 vaccinated, 40 among 5000 on placebo. Calculate vaccine efficacy.", b: "Attack rates: 0.08% and 0.8%. Efficacy = (0.8 − 0.08) ÷ 0.8 × 100 = 90%." },
    ]),
    ...sub(T2, 'the-circulation-of-blood-and-heart-structure-oxfordaqa-alevel-biology', '3.2.6', [
      { n: 1, f: "How is an artery wall adapted?", b: "Thick, with elastic fibres that stretch and recoil to keep flow going between beats, collagen that stops the wall bursting, and smooth muscle that can narrow the lumen." },
      { n: 2, f: "How are veins adapted to return blood to the heart?", b: "Thin walls with little elastic tissue or muscle, a wide lumen (low resistance) and valves that stop backflow; skeletal muscles squeezing the veins push blood on." },
      { n: 3, f: "How are capillaries adapted for exchange?", b: "Walls one endothelial cell thick (short diffusion distance); very narrow, so red cells pass slowly and close to the wall; large total cross-section slows blood; gaps let fluid and small solutes out." },
      { n: 4, f: "How is tissue fluid formed and returned to the blood?", b: "At the arteriole end, high hydrostatic pressure forces water and small solutes out; cells and plasma proteins stay. At the venule end, hydrostatic pressure is lower and plasma proteins give a lower water potential, so water returns by osmosis. Excess drains into lymph." },
      { n: 5, f: "Plasma, tissue fluid and lymph", b: "Plasma: liquid part of blood inside vessels.\nTissue fluid: plasma minus most of the protein, around the cells.\nLymph: excess tissue fluid drained into lymph vessels.", src: BV },
      { n: 6, f: "Which vessels enter and leave each side of the heart?", b: "Right atrium receives blood from the body via the vena cava; right ventricle pumps to the lungs via the pulmonary artery. Left atrium receives oxygenated blood via the pulmonary vein; left ventricle pumps to the body via the aorta." },
      { n: 7, f: "Why does the left ventricle have the thickest wall?", b: "It pumps blood at high pressure through the aorta to the whole body; the right ventricle pumps only to the nearby lungs." },
      { n: 8, f: "What opens and closes the heart valves?", b: "Pressure differences: a valve opens when the pressure behind it exceeds the pressure in front of it. Both sets are closed when ventricular pressure lies between atrial and arterial pressure." },
      { n: 9, f: "Stroke volume and cardiac output", b: "Stroke volume = end-diastolic volume − end-systolic volume (cm³ per beat).\nCardiac output = heart rate × stroke volume (cm³ per minute).", src: BV },
      { n: 10, f: "Stroke volume 70 cm³, heart rate 72 beats per minute. What is the cardiac output?", b: "72 × 70 = 5040 cm³ per minute, which is 5.04 dm³ per minute." },
      { n: 11, f: "What do the coronary arteries do?", b: "They branch from the aorta and supply the cardiac muscle itself with oxygenated blood." },
    ]),
    ...sub(T2, 'heart-disease-may-be-associated-with-specific-risk-factors-oxfordaqa-alevel-biology', '3.2.7', [
      { n: 1, f: "Atheroma", b: "Lipid-containing material within the artery wall.", src: BV },
      { n: 2, f: "Aneurysm", b: "A weakened artery wall that bulges out and may burst.", src: BV },
      { n: 3, f: "Thrombosis", b: "Damage to the artery lining starts clotting, and the clot (thrombus) can block the artery.", src: BV },
      { n: 4, f: "Myocardial infarction", b: "A coronary artery is blocked, blood flow to cardiac muscle is interrupted, and the muscle beyond the blockage is deprived of oxygen and dies.", src: BV },
      { n: 5, f: "Chain from risk factors to a heart attack", b: "High blood pressure, high blood cholesterol and smoking damage or load the artery wall, so atheroma forms; the lumen narrows and the wall weakens; thrombosis may follow; a thrombus in a coronary artery causes myocardial infarction." },
      { n: 6, f: "How does smoking raise the risk of coronary heart disease?", b: "Carbon monoxide reduces the oxygen the blood carries; nicotine raises heart rate and narrows vessels; smoking damages the artery lining." },
      { n: 7, f: "How do diet and blood cholesterol affect the risk?", b: "Saturated fat raises blood cholesterol, and a high concentration makes lipid deposits in artery walls more likely. Salt raises blood pressure." },
      { n: 8, f: "How does high blood pressure raise the risk?", b: "It damages the artery lining and stresses weak artery walls." },
      { n: 9, f: "Exam trap: a risk factor compared with a cause", b: "A risk factor is associated with a higher incidence of the disease; it is not proven to be the only cause. Name confounding variables (age, sex, activity, diet) and comment on sample size.", src: BV },
    ]),
    ...sub(T2, 'mass-transport-systems-in-plants-oxfordaqa-alevel-biology', '3.2.8', [
      { n: 1, f: "Xylem", b: "Tissue that carries water and mineral ions up the plant. The vessels are dead, with lignified walls.", src: MTP },
      { n: 2, f: "Phloem", b: "Tissue that carries organic substances, mainly sucrose, in sieve tubes with companion cells.", src: MTP },
      { n: 3, f: "Apoplastic and symplastic pathways", b: "Apoplastic: water moves through cell walls and the spaces between cells, without entering the cytoplasm.\nSymplastic: water moves through the cytoplasm of linked cells via plasmodesmata.", src: MTP },
      { n: 4, f: "What happens to water at the endodermis?", b: "The apoplastic route is blocked (by the waterproof suberin band in the walls), so water must enter the symplast before it passes into the xylem at the centre of the root." },
      { n: 5, f: "Root pressure", b: "Positive pressure pushing water up the xylem, produced when ions are actively moved into the xylem and water follows by osmosis. A small push only.", src: MTP },
      { n: 6, f: "How is water pulled up the xylem?", b: "Water evaporates from mesophyll cell walls and diffuses out through stomata (transpiration), putting the xylem under tension. Cohesion keeps the column unbroken; adhesion helps it cling to the walls." },
      { n: 7, f: "Effect of light, temperature, humidity and air movement on transpiration", b: "Brighter light: faster (stomata open).\nHigher temperature: faster (faster evaporation and diffusion).\nHigher humidity: slower (smaller vapour gradient).\nMore air movement: faster (humid air swept away)." },
      { n: 8, f: "A potometer bubble moves 30 mm in 4.0 minutes in a tube of radius 0.50 mm. What is the rate of water uptake?", b: "7.5 mm per minute. Area = π × 0.50² = 0.785 mm². Uptake = 7.5 × 0.785 = 5.89 mm³ per minute. A potometer measures uptake, not loss." },
      { n: 9, f: "Translocation, source and sink", b: "Translocation: movement of organic substances in the phloem from sources to sinks.\nSource: releases sucrose into the phloem.\nSink: uses or stores it.", src: MTP },
      { n: 10, f: "Mass flow hypothesis", b: "Sucrose is actively loaded into sieve tubes at the source; water enters by osmosis and hydrostatic pressure rises. At the sink sucrose is removed, water leaves and pressure falls. Sap flows down the pressure gradient." },
      { n: 11, f: "Evidence for translocation in the phloem", b: "Ringing: sugar accumulates above the ring. Radioactive tracers appear in the phloem. Sap flows out of an aphid stylet under pressure. Metabolic inhibitors reduce translocation, so loading needs energy." },
    ]),
    ...sub(T2, 'the-role-of-aphids-in-spreading-plant-viruses-oxfordaqa-alevel-biology', '3.2.9', [
      { n: 1, f: "Vector", b: "A living carrier that moves a pathogen between hosts.", src: HIVA },
      { n: 2, f: "Stylet", b: "The needle-like sucking mouthpart of an aphid, inserted into phloem vessels.", src: HIVA },
      { n: 3, f: "Why do plant viruses usually depend on vectors such as aphids?", b: "Plants are immobile, so the virus needs a carrier to move between plants." },
      { n: 4, f: "Why does phloem sap enter an aphid's gut without the aphid sucking hard?", b: "Phloem sap is under high pressure, so once the stylet punctures a vessel the sap is forced into the aphid's gut." },
      { n: 5, f: "How does an aphid spread a plant virus?", b: "It inserts its stylets into the phloem of an infected plant and takes up virus in the sap. It moves to a healthy plant, inserts its stylets into that plant's phloem and passes the virus in." },
      { n: 6, f: "Why do winged female aphids matter for the spread of plant viruses?", b: "They migrate to new host plants and start colonies there, so the virus can reach plants and fields far from the source." },
      { n: 7, f: "Symptoms of plant viral diseases and their effects", b: "Yellowing of leaves (less chlorophyll, slower photosynthesis), leaf distortion (less light intercepted) and abnormal fruit or stunted growth, giving losses in crop yield and quality." },
      { n: 8, f: "5 aphids double in number every 2 days. How many after 10 days?", b: "10 ÷ 2 = 5 doublings. 5 × 2⁵ = 5 × 32 = 160." },
    ]),
    ...sub(T2, 'cells-divide-by-binary-fission-and-mitosis-oxfordaqa-alevel-biology', '3.2.10', [
      { n: 1, f: "Phases of the cell cycle", b: "G1: cell grows, more organelles and protein.\nS: DNA replicated.\nG2: rapid growth and protein synthesis.\nMitosis: nucleus divides.\nG1, S and G2 together are interphase." },
      { n: 2, f: "Prophase", b: "Chromosomes condense and become visible; each is two chromatids joined at a centromere.", src: CDMC },
      { n: 3, f: "Metaphase", b: "Chromosomes line up at the equator, with their centromeres attached to spindle fibres.", src: CDMC },
      { n: 4, f: "Anaphase", b: "Centromeres divide; spindle fibres shorten and pull the chromatids to opposite poles.", src: CDMC },
      { n: 5, f: "Telophase", b: "Chromosomes reach the poles, nuclear envelopes reform, and the cell divides.", src: CDMC },
      { n: 6, f: "A cell has 2n = 14. How many chromosomes in G1, after S phase, moving in anaphase, and in each daughter cell?", b: "G1: 14. After S: 14 chromosomes (28 chromatids). Anaphase: 28 moving to the poles. Each daughter: 14." },
      { n: 7, f: "Binary fission compared with mitosis", b: "Binary fission: prokaryotes; circular DNA and plasmids copied; no spindle; plasmid number per daughter may vary.\nMitosis: eukaryotes; linear chromosomes; spindle forms; two daughter cells with identical DNA." },
      { n: 8, f: "Conjugation in bacteria", b: "A copy of a plasmid passes from one bacterium to another, which may be a different species. This is horizontal gene transmission; vertical transmission is from parent to daughter cell." },
      { n: 9, f: "Mitotic index", b: "Number of cells in mitosis ÷ total number of cells counted (× 100 for a percentage). Divide by all cells, not only the dividing ones." },
      { n: 10, f: "Root tip squash: why warm in hydrochloric acid, stain, and squash?", b: "Acid softens the tissue so cells separate; a stain such as acetic orcein makes chromosomes visible; squashing gives one thin layer of cells to count." },
      { n: 11, f: "15 bacteria divide every 40 minutes for 4 hours. How many cells?", b: "240 ÷ 40 = 6 divisions. 15 × 2⁶ = 15 × 64 = 960." },
    ]),
    ...sub(T2, 'mutation-and-cancer-oxfordaqa-alevel-biology', '3.2.11', [
      { n: 1, f: "Gene mutation", b: "Any alteration to the order of bases in DNA. Mutations arise spontaneously during DNA replication.", src: CDMC },
      { n: 2, f: "Mutagen", b: "A physical or chemical agent that increases the frequency of mutations.", src: CDMC },
      { n: 3, f: "Why may a base substitution not change the amino acid sequence?", b: "The genetic code is degenerate: more than one triplet codes for the same amino acid, so the new triplet may code for the same one." },
      { n: 4, f: "Why does a base deletion usually have a larger effect than a substitution?", b: "It shifts the reading frame, so every codon after it is altered. A substitution changes only one codon (though it can create a stop codon)." },
      { n: 5, f: "Benign and malignant tumours", b: "Benign: slower growth, often encapsulated, stays in place, cells similar to normal.\nMalignant: faster growth, invasive and irregular, spreads to form secondary tumours, cells often abnormal." },
      { n: 6, f: "Proto-oncogenes and oncogenes", b: "A proto-oncogene stimulates cell division. A mutation can turn it into an oncogene, which stimulates division too much." },
      { n: 7, f: "Tumour suppressor genes in cancer", b: "Normally they slow cell division. If a mutation inactivates one, the slowing is lost and the rate of division increases." },
      { n: 8, f: "How do some anticancer drugs act on the cell cycle?", b: "Some block DNA replication (acting in S phase); others prevent spindle formation (acting in mitosis), so chromatids cannot be separated." },
      { n: 9, f: "Why do drugs that act on the cell cycle cause side effects?", b: "Healthy cells that divide often, such as hair follicle and gut lining cells, are affected too." },
      { n: 10, f: "Risk rises with alcohol intake: 3.1 cases per 100 000 for none, 16.5 for 5 or more units a day. What can you conclude?", b: "16.5 ÷ 3.1 = 5.3 times the risk, and a steady rise suggests a link. It shows correlation only: heavy drinkers may differ in other ways, such as smoking." },
    ]),

    // 3 Populations and genes
    ...topicOnly('populations-and-genes-oxfordaqa-alevel-biology', '3', [
      { n: 1, f: "Habitat and niche", b: "Habitat: the place where an organism lives.\nNiche: the role of a species in its habitat, set by its adaptations to biotic and abiotic conditions. Habitat is where; niche is how.", src: POPC },
      { n: 2, f: "Why does a predator population peak after its prey?", b: "More prey means more food for predators, so predator numbers rise after a delay; more predators then reduce the prey, and predator numbers fall in turn." },
      { n: 3, f: "How does primary succession lead to a climax community?", b: "Pioneer species (lichens, mosses) colonise bare ground; their remains build soil. Each stage changes the environment, making it suitable for newcomers with different adaptations, which may out-compete earlier species, until a relatively stable climax community forms." },
      { n: 4, f: "Photolysis of water in the light-dependent reaction", b: "2H₂O → 4H⁺ + 4e⁻ + O₂. Electrons replace those lost from chlorophyll; protons combine with NADP to form reduced NADP; oxygen is released." },
      { n: 5, f: "Light-independent reaction in outline", b: "CO₂ + RuBP (5C) → 2 GP (3C), catalysed by rubisco. GP is reduced to triose phosphate using ATP and reduced NADP. Most triose phosphate regenerates RuBP; the rest makes useful organic substances.", src: PHOT },
      { n: 6, f: "Respiratory quotient (RQ), and typical values", b: "RQ = CO₂ produced ÷ O₂ consumed. Carbohydrate about 1.0, protein about 0.9, lipid about 0.7.", src: RESPX },
      { n: 7, f: "Net production of a consumer", b: "N = I − (F + U + R). I: energy in ingested food; F: in faeces; U: in urine; R: respiratory loss.", src: ETPF },
      { n: 8, f: "Nitrification and denitrification", b: "Nitrification: ammonium oxidised to nitrite, then nitrate, by nitrifying bacteria; aerobic.\nDenitrification: nitrate to nitrogen gas by denitrifying bacteria; anaerobic, e.g. waterlogged soil.", src: NUTC },
      { n: 9, f: "Chi-squared test: degrees of freedom and decision", b: "χ² = Σ(O − E)² ÷ E, using counts not percentages. Degrees of freedom = categories − 1. Below the critical value at p = 0.05 (3.84 for 1 df): not significant, the null hypothesis stands.", src: INHX },
      { n: 10, f: "Conditions for the Hardy–Weinberg principle", b: "A large population, random mating, no mutation, no migration (gene flow) and no selection.", src: AFG },
      { n: 11, f: "Genetic bottleneck", b: "A severe reduction in population size, caused by an environmental event or human activity, which reduces the genetic variety of the gene pool.", src: AFG },
      { n: 12, f: "Stabilising, directional and disruptive selection", b: "Stabilising: mean phenotype favoured; mean unchanged, spread narrows.\nDirectional: one extreme favoured; mean shifts.\nDisruptive: both extremes favoured; spread widens, two peaks.", src: NSS },
    ]),

    // 4 Control
    ...topicOnly('control-oxfordaqa-alevel-biology', '4', [
      { n: 1, f: "Taxis and kinesis", b: "Taxis: movement directed towards or away from the direction of a stimulus.\nKinesis: random movement whose speed or rate of turning changes with stimulus intensity.", src: RTKS },
      { n: 2, f: "How does a Pacinian corpuscle produce a generator potential?", b: "Pressure deforms the lamellae and stretches the neurone ending membrane; stretch-mediated sodium ion channels widen and Na⁺ diffuses in, depolarising the membrane. If the generator potential reaches threshold, an action potential is set up." },
      { n: 3, f: "Rods and cones: sensitivity and acuity", b: "Rods: many share one bipolar neurone, so generator potentials summate; high sensitivity in dim light, low acuity.\nCones: usually one cone per bipolar neurone; need bright light, high acuity; three types give colour vision." },
      { n: 4, f: "Effect of a higher IAA concentration on shoots and roots", b: "Shoots: stimulates cell elongation.\nRoots: inhibits cell elongation.\nSo a horizontal shoot bends up and a horizontal root bends down.", src: PGS },
      { n: 5, f: "How does ABA close stomata in a water-stressed plant?", b: "ABA stimulates transport of K⁺ and Cl⁻ out of the guard cells, raising their water potential. Water leaves the guard cells by osmosis, they shrink, and the stoma closes." },
      { n: 6, f: "Ion movements during an action potential", b: "Depolarisation: voltage-gated Na⁺ channels open and Na⁺ enters; past threshold (about −55 mV) positive feedback opens many more, to about +40 mV.\nRepolarisation: Na⁺ channels close, voltage-gated K⁺ channels open, K⁺ leaves." },
      { n: 7, f: "What happens when an action potential reaches a cholinergic synapse?", b: "Voltage-gated Ca²⁺ channels open and Ca²⁺ diffuses in; vesicles fuse and release acetylcholine by exocytosis; it diffuses across the cleft and binds receptors, opening Na⁺ channels. Acetylcholinesterase hydrolyses it." },
      { n: 8, f: "Roles of ATP in muscle contraction", b: "ATP binding detaches the myosin head from actin; hydrolysis of ATP by the head's ATPase resets the head; ATP also powers the pumps returning Ca²⁺ to the sarcoplasmic reticulum.", src: SKM },
      { n: 9, f: "Route of the electrical wave in a heartbeat", b: "SAN (pacemaker, right atrium) → wave across the atria, which contract → blocked by a fibrous layer → AVN delays it → bundle of His in the septum → Purkinje tissue → ventricles contract from the apex upwards." },
      { n: 10, f: "Second messenger model for glucagon and adrenaline", b: "The hormone binds a surface receptor; adenyl cyclase is activated and converts ATP into cAMP (the second messenger); cAMP activates protein kinase, which activates enzymes that break glycogen down to glucose.", src: BG },
      { n: 11, f: "Effect of histone acetylation on transcription", b: "Histones are positive and DNA negative. Increased acetylation reduces their attraction, loosening the DNA so RNA polymerase and transcription factors can reach it: more transcription. Decreased acetylation packs DNA tightly: less transcription.", src: REGS },
      { n: 12, f: "Restriction endonucleases and DNA ligase", b: "A restriction endonuclease cuts DNA only at its own recognition sequence, often leaving sticky ends. DNA ligase joins sugar–phosphate backbones by forming phosphodiester bonds.", src: RDNA },
    ]),
  ],
};
