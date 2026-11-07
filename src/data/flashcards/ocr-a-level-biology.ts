/**
 * D-444 -- flashcards for OCR A Level Biology A H420
 * (Version 4.1 (April 2026), for first assessment in 2025).
 *
 * Every card sits on a subtopic of the syllabus record (1.1-1.2, 2.1.1-2.1.6,
 * 3.1.1-6.3.2), id `<subtopic number>-<n>`. Modules 3-6 were itemised on
 * 2026-11-05; their earlier topic-level cards (ids `<module>-<n>`) moved to
 * subtopic ids then. Ids are permanent (browser progress is keyed by them):
 * add a new card with the next unused n, never renumber.
 *
 *   H420 is not tiered, so no card is upper tier.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs H420); origin 'revision-notes'.
 *
 * Plain text only (see types.ts). Unicode for formulae.
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; u?: true; src?: string }

const card = (topic: string, subtopic: string | undefined, number: string, { n, f, b, u, src }: Spec): Flashcard => ({
  id: `${number}-${n}`,
  topic,
  ...(subtopic ? { subtopic } : {}),
  front: f,
  back: b,
  ...(u ? { tier: 'upper' as const } : {}),
  origin: src ? 'revision-notes' as const : 'authored' as const,
  ...(src ? { source: src } : {}),
});

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map((s) => card(topic, subtopic, number, s));

const M1 = 'development-of-practical-skills-in-biology-ocr-alevel-biology';
const M2 = 'foundations-in-biology-ocr-alevel-biology';
const M3 = 'exchange-and-transport-ocr-alevel-biology';
const M4 = 'biodiversity-evolution-and-disease-ocr-alevel-biology';
const M5 = 'communication-homeostasis-and-energy-ocr-alevel-biology';
const M6 = 'genetics-evolution-and-ecosystems-ocr-alevel-biology';

const PLAN = 'ocr-a-level-biology-planning-implementing-analysing-and-evaluating-revision-notes';
const PEND = 'ocr-a-level-biology-practical-endorsement-skills-apparatus-and-techniques-revision-notes';
const CS = 'ocr-a-level-biology-cell-structure-microscopy-and-prokaryotes-versus-revision-notes';
const WCL = 'ocr-a-level-biology-water-carbohydrates-and-lipids-revision-notes';
const IMMO = 'ocr-a-level-biology-specific-immunity-vaccination-and-medicines-revision-notes';
const BIOD = 'ocr-a-level-biology-measuring-biodiversity-revision-notes';
const LIV = 'ocr-a-level-biology-cell-communication-homeostasis-and-the-liver-revision-notes';
const NEUR = 'ocr-a-level-biology-neuronal-communication-revision-notes';
const KID = 'ocr-a-level-biology-the-kidney-osmoregulation-and-renal-failure-revision-notes';
const MUT = 'ocr-a-level-biology-gene-mutations-and-control-of-gene-expression-revision-notes';
const VAR6 = 'ocr-a-level-biology-variation-genetic-diagrams-and-chi-squared-revision-notes';
const BIOT = 'ocr-a-level-biology-microorganisms-in-biotechnology-and-immobilised-enzymes-revision-notes';
const GENG = 'ocr-a-level-biology-genetic-engineering-and-gene-therapy-revision-notes';
const ENZ = 'ocr-a-level-biology-enzymes-revision-notes';
const MEMB = 'ocr-a-level-biology-biological-membranes-revision-notes';
const CDIV = 'ocr-a-level-biology-cell-division-diversity-and-organisation-revision-notes';

export const DECK_OCR_A_LEVEL_BIOLOGY: FlashcardDeck = {
  boardSlug: 'ocr',
  qualificationSlug: 'a-level',
  subjectSlug: 'biology',
  syllabusCode: 'H420',
  syllabusSeries: 'Version 4.1 (April 2026), for first assessment in 2025',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'hina-mogul', reviewedOn: '2026-11-05' },
  cards: [
    // Module 1 Development of practical skills in biology
    ...sub(M1, 'practical-skills-written-examination-ocr-alevel-biology', '1.1', [
      { n: 1, f: 'Control variable vs control experiment', b: 'A control variable is kept the same so it does not affect the result. A control experiment is a parallel set-up lacking the factor under test, such as boiled enzyme or water in place of the solution.', src: PLAN },
      { n: 2, f: 'What should a plan for an investigation include?', b: 'The aim; the independent variable and its range; the dependent variable with how and in what unit it is measured; apparatus suited to the quantity; each control variable and how it is held constant; repeats; how results will be processed.' },
      { n: 3, f: 'Precision vs accuracy', b: 'Precision: how close repeat readings are to each other (a small range).\nAccuracy: how close a reading is to the true value.', src: PLAN },
      { n: 4, f: 'Uncertainty and percentage uncertainty', b: 'Uncertainty is the margin of error in a reading, commonly half the smallest division. Percentage uncertainty = uncertainty ÷ value × 100.' },
      { n: 5, f: 'How do you combine uncertainties?', b: 'For a difference of two readings, add the absolute uncertainties. For a quotient such as a rate, add the percentage uncertainties.' },
      { n: 6, f: 'An 18 mm length is read with a ruler to ±0.5 mm at each end. What is the percentage uncertainty?', b: 'Total uncertainty = 0.5 + 0.5 = ±1.0 mm. Percentage uncertainty = 1.0 ÷ 18 × 100 = 5.6 %.' },
      { n: 7, f: 'Percentage error', b: '(measured − accepted) ÷ accepted × 100. It shows how far a result is from an accepted value; it is not the same as uncertainty.', src: PLAN },
      { n: 8, f: 'How do you find a rate from a curved graph?', b: 'Draw a tangent at the point and find its gradient: (y₂ − y₁) ÷ (x₂ − x₁), using two widely spaced points on the tangent. The initial rate is the gradient of the tangent at time zero.' },
      { n: 9, f: 'Graph-drawing checklist', b: 'Independent variable on the x-axis; both axes labelled with quantity and unit; scale using more than half the grid in equal steps; points plotted accurately; a line or smooth curve of best fit, with points not joined.' },
      { n: 10, f: 'Repeat times to an end point: 22, 24, 23, 35, 23 s. Find the mean and the rate.', b: 'Exclude the anomaly (35 s) and say so. Mean = (22 + 24 + 23 + 23) ÷ 4 = 23.0 s. Rate = 1 ÷ 23.0 = 0.0435 s⁻¹.' },
      { n: 11, f: 'Which chart for which data?', b: 'Categories: bar chart. Continuous data in classes: histogram. Two variables, looking for a relationship: scattergram with line of best fit. Continuous independent variable: line graph.' },
      { n: 12, f: 'Rule for significant figures in a calculated answer', b: 'The answer cannot be more precise than the least precise value used to calculate it. Round only at the end.' },
    ]),
    ...sub(M1, 'practical-skills-practical-endorsement-ocr-alevel-biology', '1.2', [
      { n: 1, f: 'What is the Practical Endorsement?', b: 'A minimum of 12 assessed practical activities covering PAG1 to PAG12, assessed by the teacher against the Common Practical Assessment Criteria and reported separately from the A level grade.' },
      { n: 2, f: 'How do you calibrate an eyepiece graticule?', b: 'Line up the graticule with a stage micrometer, count the graticule divisions matching a known stage length, and divide: length per division = known length ÷ divisions. Repeat for each objective.' },
      { n: 3, f: 'Using a colorimeter', b: 'Zero with a blank of solvent; choose a filter the sample absorbs strongly; make standards by serial dilution; plot absorbance against concentration; read unknowns from the calibration curve without extrapolating.' },
      { n: 4, f: 'Serial dilution', b: 'Each solution is diluted by the same factor to make the next, for example 1 cm³ into 9 cm³ of diluent at each step (a tenfold dilution).' },
      { n: 5, f: 'Volume of a bubble moving along a potometer capillary', b: 'Volume = πr² × distance moved. Example: r = 0.35 mm, 30 mm in 4.0 min: π × 0.35² × 30 = 11.5 mm³, a rate of about 2.9 mm³ per minute.' },
      { n: 6, f: 'Rf value in chromatography', b: 'Rf = distance from the baseline to the centre of the spot ÷ distance from the baseline to the solvent front. It has no units and lies between 0 and 1.' },
      { n: 7, f: 'Key steps of aseptic technique when inoculating agar', b: 'Disinfect the bench and wash hands; flame the loop and let it cool; open lids only slightly, near a flame; seal with two pieces of tape and incubate upside down; sterilise cultures before disposal.' },
      { n: 8, f: '52 colonies grow from 0.1 cm³ of a 10⁻³ dilution. What was the original concentration of bacteria?', b: '52 ÷ 0.1 = 520 per cm³ in the dilution. 520 ÷ 10⁻³ = 5.2 × 10⁵ bacteria per cm³ in the original culture.' },
      { n: 9, f: 'Capture–mark–recapture estimate and assumptions', b: 'N = (M × n) ÷ m, where M = number first marked, n = second sample, m = marked in the second sample. Assumes a closed population, lasting harmless marks and full mixing. Example: 30 × 25 ÷ 5 = 150.' },
      { n: 10, f: 'Label vs annotation on a biological drawing', b: 'A label names a structure. An annotation describes or explains it.', src: PEND },
      { n: 11, f: 'Ethics when using human volunteers in practical work', b: 'Informed consent, the right to stop, no strenuous activity where a health condition makes it unsafe, and results kept anonymous.' },
    ]),

    // Module 2 Foundations in biology
    ...sub(M2, 'cell-structure-ocr-alevel-biology', '2.1.1', [
      { n: 1, f: 'Resolution (microscopy)', b: 'The minimum gap that lets two neighbouring points be seen apart; a smaller gap means finer detail.', src: CS },
      { n: 2, f: 'Artefact', b: 'A feature of an image produced by preparation that was not in the living cell.', src: CS },
      { n: 3, f: 'Differential staining', b: 'Using stains that are taken up differently by different structures or cell types (for example the Gram stain separates Gram-positive, purple, from Gram-negative, red, bacteria).', src: CS },
      { n: 4, f: 'Why do electron microscopes resolve more detail than light microscopes?', b: 'The electron beam has a shorter wavelength than visible light. Magnifying beyond the resolution limit adds no detail.' },
      { n: 5, f: 'TEM vs SEM', b: 'TEM: electrons pass through an ultra-thin section; monochrome 2D image of internal ultrastructure; highest resolution.\nSEM: electrons scanned over the surface; monochrome image with a 3D appearance.\nBoth need a vacuum, so no living specimens.' },
      { n: 6, f: 'A scale bar 20 mm long represents 200 nm. What is the magnification?', b: '20 mm = 20 000 000 nm. Magnification = 20 000 000 ÷ 200 = ×100 000.' },
      { n: 7, f: 'One graticule division is 2.5 µm with the ×10 objective. What is it with the ×40 objective?', b: 'The image is four times larger, so one division = 2.5 ÷ 4 = 0.625 µm.' },
      { n: 8, f: 'Route of a secreted protein through a cell', b: 'DNA in the nucleus → mRNA through a nuclear pore → ribosome on the rough ER → vesicle → Golgi (modifies and packages) → secretory vesicle → fuses with the plasma membrane → exocytosis. Mitochondria supply ATP.' },
      { n: 9, f: 'Cytoskeleton and its roles', b: 'A network of protein fibres and tubules in the cytoplasm. Roles: mechanical strength, transport within the cell, and cell movement.', src: CS },
      { n: 10, f: 'Prokaryotic vs eukaryotic cells', b: 'Prokaryote: no nucleus; circular DNA not with histones; 70S ribosomes; no membrane-bound organelles; peptidoglycan wall; often plasmids.\nEukaryote: nucleus; linear DNA with histones; 80S ribosomes; membrane-bound organelles.' },
      { n: 11, f: 'Cilia vs flagella', b: 'Both are projections containing microtubules. Cilia move fluid over a cell surface; flagella move the whole cell.' },
      { n: 12, f: 'Rough ER vs smooth ER', b: 'Rough ER: cisternae covered with ribosomes; folds and processes proteins.\nSmooth ER: tubes without ribosomes; makes lipids.' },
    ]),
    ...sub(M2, 'biological-molecules-ocr-alevel-biology', '2.1.2', [
      { n: 1, f: 'Hydrogen bond (between molecules)', b: 'A weak electrostatic attraction linking a δ+ hydrogen on one molecule to a δ− oxygen or nitrogen on another.' },
      { n: 2, f: 'Properties of water and the roles they give', b: 'Polar: solvent. Cohesion: continuous column in xylem. High latent heat of vaporisation: cooling by sweating and transpiration. High specific heat capacity: stable habitat temperature. Ice less dense than water: ice floats and insulates.' },
      { n: 3, f: 'Disaccharides and their monomers', b: 'Maltose: glucose + glucose.\nSucrose: glucose + fructose.\nLactose: glucose + galactose.\nAll are C₁₂H₂₂O₁₁ (Mr 342), formed by condensation forming a glycosidic bond.' },
      { n: 4, f: 'Starch and glycogen as stores', b: 'Starch: insoluble, so no osmotic effect; compact; hydrolysed to glucose when needed.\nGlycogen: very branched with many ends, so fast hydrolysis; compact; in liver and muscle.', src: WCL },
      { n: 5, f: 'Cellulose structure and function', b: 'β-glucose joined by β-1,4 glycosidic bonds into straight chains. Hydrogen bonds between chains form microfibrils, so the wall is strong and resists bursting.', src: WCL },
      { n: 6, f: 'Triglyceride vs phospholipid vs cholesterol', b: 'Triglyceride: glycerol + 3 fatty acids (3 ester bonds); energy store, insulation.\nPhospholipid: glycerol + 2 fatty acids + phosphate; hydrophilic head, hydrophobic tails; membrane bilayer.\nCholesterol: four-ring steroid; regulates membrane fluidity and stability.' },
      { n: 7, f: 'Elements in biological molecules', b: 'Carbohydrates and lipids: C, H, O.\nProteins: C, H, O, N and usually S.\nNucleic acids: C, H, O, N, P.' },
      { n: 8, f: 'Bonds that hold tertiary structure', b: 'Hydrogen bonds (weak, broken by heat); ionic bonds between oppositely charged R groups (affected by pH); disulfide bonds between cysteine residues (covalent); hydrophobic interactions between non-polar R groups.' },
      { n: 9, f: 'Globular vs fibrous proteins, with examples', b: 'Globular: compact, usually soluble, metabolic roles (haemoglobin, amylase, insulin).\nFibrous: long strands, insoluble, structural roles (collagen, keratin, elastin).' },
      { n: 10, f: 'Why is haemoglobin a conjugated protein?', b: 'It has prosthetic groups: four polypeptides, each with a haem group containing Fe²⁺ that binds oxygen.' },
      { n: 11, f: 'Roles of Ca²⁺, Na⁺, K⁺ and H⁺', b: 'Ca²⁺: muscle contraction, bone strength.\nNa⁺: nerve impulses, co-transport of glucose.\nK⁺: nerve impulse recovery, stomatal opening.\nH⁺: pH, proton gradients for ATP synthesis.' },
      { n: 12, f: 'Roles of NO₃⁻, PO₄³⁻ and HCO₃⁻', b: 'NO₃⁻: used by plants to make amino acids and nucleotides.\nPO₄³⁻: part of ATP, nucleotides and phospholipids.\nHCO₃⁻: carbon dioxide transport and buffering of blood.' },
      { n: 13, f: 'Biochemical tests: biuret, iodine, emulsion and Benedict\'s', b: 'Biuret (NaOH then copper(II) sulfate): purple for protein.\nIodine: blue-black for starch.\nEmulsion (ethanol, then water): cloudy white for lipid.\nBenedict\'s (heated): green to brick-red for reducing sugar.' },
      { n: 14, f: 'Insulin has chains of 21 and 30 amino acids. How many peptide bonds?', b: '(21 − 1) + (30 − 1) = 49 peptide bonds, so 49 water molecules were released when it was made.' },
    ]),
    ...sub(M2, 'nucleotides-and-nucleic-acids-ocr-alevel-biology', '2.1.3', [
      { n: 1, f: 'DNA nucleotides vs RNA nucleotides', b: 'DNA: deoxyribose; bases A, T, C, G.\nRNA: ribose; bases A, U, C, G.\nEach nucleotide is a five-carbon sugar, a phosphate and a nitrogen-containing base.' },
      { n: 2, f: 'Purines vs pyrimidines', b: 'Purines have two rings: adenine and guanine. Pyrimidines have one ring: cytosine, thymine and uracil. Each base pair is one purine + one pyrimidine, so the helix width is constant.' },
      { n: 3, f: 'How many phosphodiester bonds are in a 30 base-pair DNA fragment?', b: 'Each strand of 30 nucleotides has 29 bonds, so 2 × 29 = 58 phosphodiester bonds.' },
      { n: 4, f: 'ADP vs ATP', b: 'Both are phosphorylated nucleotides with ribose and adenine. ADP has 2 phosphates; ATP has 3. ATP + water → ADP + Pi releases energy (hydrolysis).' },
      { n: 5, f: 'Structure of DNA', b: 'Two antiparallel polynucleotides with a sugar-phosphate backbone outside and bases inside, joined by complementary base pairs (A–T two hydrogen bonds, G–C three), twisted into a double helix.' },
      { n: 6, f: 'Purpose of each step in DNA precipitation', b: 'Detergent dissolves membrane phospholipids, releasing DNA. Salt masks the negative phosphate charges so DNA clumps. Protease digests proteins bound to DNA. Ice-cold ethanol: DNA is insoluble and precipitates at the boundary.' },
      { n: 7, f: 'Roles of helicase and DNA polymerase in replication', b: 'Helicase breaks hydrogen bonds between bases and unwinds the helix so both strands act as templates.\nDNA polymerase forms phosphodiester bonds between free nucleotides, adding them to the 3′ end of the new strand.' },
      { n: 8, f: 'Semi-conservative replication and the ¹⁵N/¹⁴N evidence', b: 'Each new molecule has one original and one new strand. Bacteria grown in ¹⁵N then moved to ¹⁴N give all hybrid DNA after one generation, then half hybrid, half light. Conservative replication would give no hybrid band.' },
      { n: 9, f: 'Spontaneous mutation', b: 'A random change in the base sequence that arises during replication without a mutagen, for example a wrong nucleotide being incorporated.' },
      { n: 10, f: 'Features of the genetic code', b: 'Triplet (three bases per amino acid); non-overlapping (each base read in one codon only); degenerate (most amino acids have more than one codon); universal (same in virtually all organisms).' },
      { n: 11, f: 'Transcription in order', b: 'RNA polymerase binds at the gene and breaks hydrogen bonds to expose the template strand. Free RNA nucleotides pair with it by complementary base pairing, and RNA polymerase forms phosphodiester bonds. mRNA leaves the nucleus through a nuclear pore.' },
      { n: 12, f: 'Translation in order', b: 'The small ribosomal subunit binds mRNA at AUG. tRNA anticodons pair with codons, two at a time, bringing specific amino acids that are joined by peptide bonds. The ribosome moves one codon along until a stop codon releases the polypeptide.' },
      { n: 13, f: 'mRNA vs tRNA vs rRNA', b: 'mRNA: single-stranded copy of a gene carrying codons.\ntRNA: clover-leaf, anticodon at one end, a specific amino acid at the other.\nrRNA: with proteins forms the ribosome subunits and helps form peptide bonds.' },
      { n: 14, f: 'An mRNA coding region is 1260 bases long, including the stop codon. How many amino acids?', b: '1260 ÷ 3 = 420 codons. Subtract 1 for the stop codon: 419 amino acids.' },
    ]),

    ...sub(M2, 'enzymes-ocr-alevel-biology', '2.1.4', [
      { n: 1, f: 'Lock and key vs induced-fit hypothesis', b: 'Lock and key: the substrate fits an active site of exactly complementary shape.\nInduced fit: the active site changes shape slightly as the substrate binds, giving a closer fit and straining bonds in the substrate, which lowers the activation energy.', src: ENZ },
      { n: 2, f: 'Intracellular vs extracellular enzymes: the H420 examples', b: 'Intracellular: catalase, inside cells, breaks down toxic hydrogen peroxide to water and oxygen.\nExtracellular: amylase, secreted (for example in saliva), hydrolyses starch to maltose outside the cell.', src: ENZ },
      { n: 3, f: 'How does temperature affect enzyme activity, and what is Q₁₀?', b: 'Rising temperature gives molecules more kinetic energy and more successful collisions, so the rate rises to the optimum. Above it, vibrations break hydrogen and ionic bonds in the tertiary structure, the active site changes shape and the enzyme denatures. Q₁₀ = R2 ÷ R1, where R2 is the rate at a temperature 10 °C higher than R1; no units.', src: ENZ },
      { n: 4, f: 'How does substrate concentration affect the rate of an enzyme-controlled reaction?', b: 'The rate rises as substrate concentration rises, because more enzyme–substrate complexes form. It levels off when all the active sites are occupied; enzyme concentration is then the limiting factor.', src: ENZ },
      { n: 5, f: 'Cofactor vs coenzyme vs prosthetic group', b: 'Cofactor: a non-protein substance an enzyme needs, such as the chloride ion for amylase.\nCoenzyme: an organic cofactor, often made from a vitamin (NAD from nicotinamide, vitamin B3).\nProsthetic group: a cofactor permanently bound to the enzyme, such as Zn²⁺ in carbonic anhydrase.', src: ENZ },
      { n: 6, f: 'Competitive vs non-competitive inhibition', b: 'Competitive: similar in shape to the substrate and binds the active site; raising substrate concentration reduces the effect.\nNon-competitive: binds elsewhere (an allosteric site) and changes the shape of the active site; raising substrate concentration does not overcome it.', src: ENZ },
      { n: 7, f: 'End-product inhibition', b: 'The final product of a metabolic pathway inhibits an enzyme early in the pathway, usually non-competitively and reversibly, so the product regulates its own production. Example: ATP inhibits phosphofructokinase in glycolysis.', src: ENZ },
      { n: 8, f: 'Mechanism of enzyme action, in order', b: 'A substrate complementary to the active site (shaped by the tertiary structure) binds, forming an enzyme–substrate complex. The reaction gives an enzyme–product complex, then the products leave and the enzyme is reused. The enzyme lowers the activation energy.', src: ENZ },
      { n: 9, f: 'How does pH affect enzyme activity?', b: 'Each enzyme has an optimum pH. H⁺ and OH⁻ ions disrupt the ionic and hydrogen bonds holding the tertiary structure and alter charges in the active site, so the substrate binds less well. Extreme pH denatures the enzyme.', src: ENZ },
      { n: 10, f: 'PAG4: why measure the initial rate, and how?', b: 'Later in the reaction substrate is used up and product builds up, so the rate falls for other reasons. Plot product (for example O₂ volume from catalase) against time and draw a tangent at t = 0; its gradient is the initial rate.', src: ENZ },
    ]),
    ...sub(M2, 'biological-membranes-ocr-alevel-biology', '2.1.5', [
      { n: 1, f: 'Roles of membranes within and at the surface of cells', b: 'Partially permeable barriers (between the cell and its surroundings, around organelles and within them); sites of chemical reactions (such as the inner mitochondrial membrane and thylakoid membranes); sites of cell communication (cell signalling).', src: MEMB },
      { n: 2, f: 'Fluid mosaic model: components and their roles', b: 'Phospholipid bilayer: a barrier to polar and charged substances. Cholesterol: regulates fluidity and stability. Channel and carrier proteins: transport. Glycoproteins and glycolipids: cell recognition, signalling and attachment. Membrane-bound receptors: sites where hormones and drugs bind.', src: MEMB },
      { n: 3, f: 'How do temperature and organic solvents affect membrane permeability?', b: 'Higher temperature gives phospholipids more kinetic energy, so the bilayer becomes more fluid and leaky; high temperatures also denature membrane proteins. Organic solvents such as ethanol dissolve the bilayer. Leakage of pigment from beetroot, measured with a colorimeter, shows the effect.', src: MEMB },
      { n: 4, f: 'Facilitated diffusion vs active transport', b: 'Facilitated diffusion: passive, down a concentration gradient, through channel or carrier proteins.\nActive transport: against a concentration gradient, through carrier proteins, using ATP.', src: MEMB },
      { n: 5, f: 'Endocytosis vs exocytosis', b: 'Endocytosis: the membrane folds around material and pinches off a vesicle to bring it into the cell (phagocytosis for solids, pinocytosis for liquids).\nExocytosis: vesicles fuse with the plasma membrane to release their contents. Both need ATP.', src: MEMB },
      { n: 6, f: 'Effects of solutions of different water potential on animal and plant cells', b: 'Higher water potential outside: water enters by osmosis; animal cells swell and may burst (haemolysis of red blood cells); plant cells become turgid.\nLower water potential outside: water leaves; animal cells shrink (crenation); plant cells become flaccid, then plasmolysed.', src: MEMB },
      { n: 7, f: 'Osmosis and water potential', b: 'Osmosis: net movement of water from a region of higher water potential to a region of lower water potential across a partially permeable membrane. Water potential (ψ, kPa) is 0 for pure water; solutes make it negative.', src: MEMB },
      { n: 8, f: 'PAG8: finding the water potential of potato tissue', b: 'Blot and weigh equal potato cylinders, leave them in a range of sucrose concentrations for a set time, blot and reweigh. Plot percentage change in mass against concentration: where the line crosses 0 % the solution has the same water potential as the cells.', src: MEMB },
    ]),
    ...sub(M2, 'cell-division-cell-diversity-and-cellular-organisation-ocr-alevel-biology', '2.1.6', [
      { n: 1, f: 'Stages of the cell cycle', b: 'Interphase: G1 (growth, proteins and organelles made), S (DNA replicated), G2 (further growth and checks). Then mitosis (the nucleus divides) and cytokinesis (the cytoplasm divides), giving two genetically identical cells.', src: CDIV },
      { n: 2, f: 'How is the cell cycle regulated?', b: 'Checkpoints check the cell before it moves on: at G1 (cell size, nutrients, DNA damage), at G2 (DNA replicated without damage) and the spindle assembly checkpoint in mitosis (every chromosome attached to the spindle). A cell that fails may repair, leave the cycle (G0) or undergo apoptosis.', src: CDIV },
      { n: 3, f: 'Main stages of mitosis', b: 'Prophase: chromosomes condense; the nuclear envelope breaks down; centrioles move to the poles and spindle fibres form.\nMetaphase: chromosomes line up at the equator, attached by their centromeres.\nAnaphase: centromeres divide; chromatids are pulled to opposite poles.\nTelophase: nuclear envelopes reform. Cytokinesis: the cell membrane pinches in (animal cells).', src: CDIV },
      { n: 4, f: 'Significance of mitosis vs meiosis in life cycles', b: 'Mitosis: growth, tissue repair and asexual reproduction in plants, animals and fungi; the cells are genetically identical.\nMeiosis: makes haploid cells, so the diploid number is restored at fertilisation, and creates genetic variation by crossing over and independent assortment.', src: CDIV },
      { n: 5, f: 'Specialised animal cells in H420 and one adaptation of each', b: 'Erythrocyte: biconcave, no nucleus, for carrying oxygen. Neutrophil: multilobed nucleus and many lysosomes, for phagocytosis. Squamous epithelial cell: very flat, a short diffusion path. Ciliated epithelial cell: cilia move mucus. Sperm cell: flagellum and many mitochondria.', src: CDIV },
      { n: 6, f: 'Specialised plant cells in H420 and one adaptation of each', b: 'Palisade cell: many chloroplasts, for photosynthesis. Root hair cell: a long extension giving a large surface area for water and mineral ion uptake. Guard cells: change shape with turgor to open and close the stoma.', src: CDIV },
      { n: 7, f: 'Stem cell, and the source of stem cells in plants', b: 'An undifferentiated cell that can divide repeatedly and differentiate into specialised cell types, a renewing source of cells. In plants, meristems at root and shoot tips and in the cambium are the stem cells; cambium cells differentiate into xylem and phloem.', src: CDIV },
      { n: 8, f: 'Meiosis: what separates in each division?', b: 'Meiosis I: homologous pairs line up at the equator and the homologous chromosomes separate (anaphase 1), halving the chromosome number.\nMeiosis II: centromeres divide and sister chromatids separate (anaphase 2). Result: four genetically different haploid cells.', src: CDIV },
      { n: 9, f: 'Homologous chromosomes', b: 'A pair of chromosomes, one from each parent, of the same size and shape with the same genes at the same loci, but possibly different alleles.', src: CDIV },
      { n: 10, f: 'Erythrocytes and neutrophils from bone marrow stem cells', b: 'Both come from the same multipotent stem cells in bone marrow. Erythrocytes fill with haemoglobin and lose the nucleus and most organelles. Neutrophils develop a multilobed nucleus and many lysosomes. Different genes are expressed in each.', src: CDIV },
      { n: 11, f: 'How xylem vessels and phloem sieve tubes form from meristem cells', b: 'Xylem: cells elongate, walls are lignified, the cells die and end walls break down into continuous tubes.\nPhloem: sieve tube elements lose the nucleus and most organelles; end walls become sieve plates; companion cells keep a nucleus and many mitochondria.', src: CDIV },
      { n: 12, f: 'PAG1: preparing a root tip squash to see mitosis', b: 'Cut root tips (meristem), warm in dilute HCl to separate the cells, stain with a DNA stain such as toluidine blue, then squash gently under a coverslip without twisting. Mitotic index = cells in mitosis ÷ total cells counted.', src: CDIV },
    ]),

    // Module 3 Exchange and transport
    ...sub(M3, 'exchange-surfaces-ocr-alevel-biology', '3.1.1', [
      { n: 1, f: 'Why do larger, more active organisms need specialised exchange surfaces?', b: 'Surface area to volume ratio falls as size increases, while a higher metabolic rate raises demand, so diffusion across the body surface is too slow. They need a large, thin exchange surface with a maintained gradient.' },
      { n: 2, f: 'Mechanism of inspiration in mammals', b: 'External intercostal muscles and the diaphragm contract: the ribs move up and out and the diaphragm flattens. Thorax volume increases, pressure falls below atmospheric, and air moves in.' },
      { n: 3, f: 'Tidal volume, vital capacity and ventilation rate', b: 'Tidal volume: volume per resting breath.\nVital capacity: maximum volume exhaled after a maximal inhalation.\nVentilation rate = tidal volume × breathing rate.' },
      { n: 4, f: 'Countercurrent flow in fish gills', b: 'Blood in the lamellae flows in the opposite direction to water, so water always meets blood with less oxygen. A diffusion gradient is kept along the whole lamella; with parallel flow, net uptake would stop partway along.' },
      { n: 5, f: 'Gas exchange in insects', b: 'Air enters through spiracles into tracheae and tracheoles. Exchange happens at the tracheal fluid at the ends of the tracheoles. Movements of the thorax and abdomen change body volume to ventilate.' },
    ]),
    ...sub(M3, 'transport-in-animals-ocr-alevel-biology', '3.1.2', [
      { n: 1, f: 'Open vs closed, single vs double circulation', b: 'Insect: open (fluid bathes tissues at low pressure).\nFish: closed, single (blood passes the heart once per circuit).\nMammal: closed, double (twice per circuit, so pressure is restored after the lungs).' },
      { n: 2, f: 'How tissue fluid forms and returns (hydrostatic and oncotic pressure)', b: 'At the arteriole end hydrostatic pressure exceeds oncotic pressure, forcing fluid out. Hydrostatic pressure falls along the capillary, so at the venule end oncotic pressure from plasma proteins draws water back in. Excess drains into lymph.' },
      { n: 3, f: 'Pressures and valves during the cardiac cycle', b: 'Atrial systole: AV valves open; atrial pressure above ventricular.\nVentricular systole: AV valves shut, semilunar valves open; ventricle pressure above aorta.\nDiastole: semilunar valves shut, AV valves open; atria fill.' },
      { n: 4, f: 'Cardiac output', b: 'Cardiac output = heart rate × stroke volume.' },
      { n: 5, f: 'How is the heartbeat coordinated?', b: 'Cardiac muscle is myogenic. The SAN starts a wave of excitation across the atria; the AVN delays it; Purkyne tissue carries it through the ventricles.' },
      { n: 6, f: 'ECG terms: tachycardia, bradycardia, fibrillation, ectopic beat', b: 'Tachycardia: faster than normal. Bradycardia: slower. Fibrillation: irregular, uncoordinated. Ectopic beat: an extra beat that comes early. Heart rate = 60 ÷ time between R waves (s).' },
      { n: 7, f: 'Fetal haemoglobin and the Bohr effect', b: 'Fetal haemoglobin has a higher affinity for oxygen, so its dissociation curve lies to the left of adult haemoglobin. More carbon dioxide shifts the curve to the right (Bohr effect), so more oxygen is unloaded.' },
    ]),
    ...sub(M3, 'transport-in-plants-ocr-alevel-biology', '3.1.3', [
      { n: 1, f: 'How does water move up the xylem?', b: 'Water evaporates from leaf cells and diffuses out through the stomata, lowering water potential. Cohesion between water molecules pulls the column up under tension (the transpiration stream); adhesion to the walls helps.' },
      { n: 2, f: 'Translocation: active loading of sucrose', b: 'Companion cells pump H⁺ out using ATP; H⁺ returns with sucrose by co-transport. Sieve tube water potential falls, water enters, hydrostatic pressure rises, and sap flows from source to sink, where sucrose is removed.' },
      { n: 3, f: 'Xylem vessels vs phloem sieve tubes', b: 'Xylem: dead, hollow, lignified cells joined end to end with no end walls, with pits; carry water and mineral ions up the plant.\nPhloem: living sieve tube elements joined by perforated sieve plates, with few organelles, supported by companion cells; carry assimilates up and down.' },
      { n: 4, f: 'Symplast vs apoplast pathway', b: 'Symplast: water moves through the cytoplasm of cells, linked by plasmodesmata.\nApoplast: water moves through cell walls and the spaces between cells. At the endodermis the Casparian strip blocks the apoplast, so water must enter the symplast.' },
      { n: 5, f: 'Factors that affect the rate of transpiration', b: 'Light intensity (stomata open in light), temperature, humidity, air movement and the water available in the soil. A potometer measures water uptake, which is close to the rate of transpiration.' },
      { n: 6, f: 'Adaptations of xerophytes', b: 'Thick waxy cuticle; sunken stomata; rolled leaves and hairs that trap moist air; fewer stomata; leaves reduced to spines; long or spreading roots. Example: marram grass. Hydrophytes such as water lilies instead have large air spaces and stomata on the upper leaf surface.' },
    ]),

    // Module 4 Biodiversity, evolution and disease
    ...sub(M4, 'communicable-diseases-disease-prevention-and-the-immune-system-ocr-alevel-biology', '4.1.1', [
      { n: 1, f: 'Pathogen types with one plant and one animal disease each', b: 'Bacterium: ring rot; tuberculosis.\nVirus: Tobacco Mosaic Virus; HIV/AIDS, influenza.\nProtoctist: potato and tomato late blight; malaria.\nFungus: black sigatoka; athlete\'s foot.' },
      { n: 2, f: 'Plant defences against pathogens', b: 'Chemicals (terpenoids, phenols, alkaloids, defensins, chitinase); callose deposited in plasmodesmata and sieve plates to block spread; lignin and thicker walls; the hypersensitive response; stomatal closure.' },
      { n: 3, f: 'How does a blood clot form?', b: 'Platelets release substances at the damaged vessel, starting a cascade of reactions. Soluble fibrinogen is converted to insoluble fibrin, whose threads form a mesh that traps platelets and red blood cells.' },
      { n: 4, f: 'Opsonins, agglutinins and anti-toxins', b: 'Opsonins coat a pathogen so phagocytes bind and engulf it more easily. Agglutinins clump pathogens using their two binding sites. Anti-toxins bind toxins so they cannot bind target cells.' },
      { n: 5, f: 'Plasma cell vs B memory cell; T helper vs T killer', b: 'Plasma cell secretes antibody now; memory cell is long-lived and waits for a secondary response. T helper releases cytokines (interleukins) that activate B cells and T killers; T killer destroys infected body cells.', src: IMMO },
      { n: 6, f: 'Autoimmune disease', b: 'The immune system attacks the body\'s own cells because self and non-self are not distinguished. Example: rheumatoid arthritis, in which joint tissues are attacked.' },
      { n: 7, f: 'Herd immunity: proportion that must be immune', b: 'So many people are immune that spread is limited, protecting those who cannot be vaccinated. Simple model: proportion immune needed = 1 − 1/R₀ (R₀ = 4 needs 75 %).', src: IMMO },
    ]),
    ...sub(M4, 'biodiversity-ocr-alevel-biology', '4.2.1', [
      { n: 1, f: 'Species richness vs species evenness', b: 'Richness: the number of different species in a habitat.\nEvenness: how similar the numbers of individuals of each species are.\nSpecies biodiversity includes both.', src: BIOD },
      { n: 2, f: "Simpson's Index of Diversity for counts of 10, 5, 3 and 2", b: 'N = 20. n/N = 0.5, 0.25, 0.15, 0.1. Squares sum to 0.25 + 0.0625 + 0.0225 + 0.01 = 0.345. D = 1 − Σ(n/N)² = 1 − 0.345 = 0.655.' },
      { n: 3, f: 'Random, systematic and stratified sampling', b: 'Random: random-number coordinates; for a uniform area.\nSystematic: regular intervals, such as a transect; for a gradient.\nStratified: each distinct zone sampled in proportion to its size.' },
      { n: 4, f: 'In situ vs ex situ conservation, with examples', b: 'In situ: in the natural habitat, such as wildlife reserves and marine conservation zones.\nEx situ: away from it, such as zoos (captive breeding), botanic gardens and seed banks.' },
    ]),
    ...sub(M4, 'classification-and-evolution-ocr-alevel-biology', '4.2.2', [
      { n: 1, f: 'Bacteria vs Archaea vs Eukarya', b: 'Bacteria: peptidoglycan wall, ester-linked lipids, no histones.\nArchaea: no peptidoglycan, ether-linked branched lipids, DNA with histones.\nBoth: no nucleus, 70S ribosomes.\nEukarya: nucleus, 80S ribosomes, linear DNA with histones.' },
      { n: 2, f: 'Why is the binomial system useful?', b: 'It is universal: the same two-part name (genus, then species) is used worldwide, avoiding confusion over common names. A shared genus shows a close relationship.' },
      { n: 3, f: 'Mechanism of natural selection', b: 'Variation exists (mutation, sexual reproduction). A selection pressure acts. Individuals with advantageous alleles are more likely to survive and reproduce, passing the alleles on, so the allele frequency rises over generations.' },
      { n: 4, f: 'Intraspecific vs interspecific variation', b: 'Intraspecific: differences between individuals of the same species.\nInterspecific: differences between different species.' },
      { n: 5, f: 'Anatomical, physiological and behavioural adaptations', b: 'Anatomical: structural features, such as the rolled leaves of marram grass.\nPhysiological: processes in the body, such as a lowered metabolic rate in hibernation.\nBehavioural: actions, such as migration or courtship.' },
      { n: 6, f: 'Evidence for the theory of evolution by natural selection', b: 'Palaeontology (the fossil record), comparative anatomy (homologous structures such as the pentadactyl limb) and comparative biochemistry (differences in DNA base sequences and in proteins such as cytochrome c). Darwin and Wallace proposed the theory.' },
    ]),

    // Module 5 Communication, homeostasis and energy
    ...sub(M5, 'communication-and-homeostasis-ocr-alevel-biology', '5.1.1', [
      { n: 1, f: 'Negative vs positive feedback', b: 'Negative feedback: the response reverses the change, returning the factor towards the set point (homeostatic).\nPositive feedback: the response increases the change, as with oxytocin and uterine contractions during birth.', src: LIV },
      { n: 2, f: 'Responses of an endotherm that is too hot', b: 'Detected by the hypothalamus and skin receptors. Skin arterioles dilate (vasodilation), sweat glands secrete sweat that evaporates, hairs lie flat, no shivering, and metabolic rate is lowered.' },
      { n: 3, f: 'Cell signalling between adjacent and distant cells', b: 'Adjacent cells: neurones release neurotransmitters across synapses.\nDistant cells: endocrine glands release hormones into the blood, which act on target cells with complementary receptors.' },
      { n: 4, f: 'Ectotherm vs endotherm', b: 'Ectotherm: relies on external heat sources and mainly behavioural responses, such as basking (a lizard).\nEndotherm: generates heat from metabolism and uses physiological and behavioural responses to keep its core temperature fairly constant (a mammal).' },
    ]),
    ...sub(M5, 'excretion-as-an-example-of-homeostatic-control-ocr-alevel-biology', '5.1.2', [
      { n: 1, f: 'Role of the loop of Henle', b: 'The ascending limb pumps ions out but is impermeable to water, so the medulla has a very low water potential; water leaves the descending limb. This gradient lets the collecting duct reabsorb water. Longer loops allow more concentrated urine.' },
      { n: 2, f: 'Glomerular filtration rate (GFR)', b: 'The volume of filtrate formed per minute by all nephrons. A falling GFR shows kidney failure, with urea and creatinine rising in the blood.', src: KID },
      { n: 3, f: 'How does a pregnancy test strip detect hCG?', b: 'Mobile monoclonal antibodies to hCG on coloured beads bind hCG in urine. Immobilised antibodies to hCG at the test line trap the complexes, giving a coloured line; a control line shows the strip works. Two lines: hCG present.' },
      { n: 4, f: 'Roles of the liver in excretion', b: 'Excess amino acids are deaminated, giving ammonia, which the ornithine cycle converts to less toxic urea for excretion by the kidneys. The liver also detoxifies substances such as alcohol, using enzymes such as alcohol dehydrogenase and catalase.' },
      { n: 5, f: 'Ultrafiltration and selective reabsorption in the nephron', b: 'Ultrafiltration: high blood pressure in the glomerulus forces small molecules (water, glucose, urea, ions) through the capillary endothelium, basement membrane and podocytes into the Bowman capsule.\nSelective reabsorption: in the proximal convoluted tubule, glucose, amino acids, ions and much water return to the blood.' },
      { n: 6, f: 'How does ADH regulate water reabsorption?', b: 'Osmoreceptors in the hypothalamus detect a low blood water potential and the posterior pituitary releases more ADH. ADH makes the collecting duct walls more permeable to water, so more water is reabsorbed and a small volume of concentrated urine is made.' },
    ]),
    ...sub(M5, 'neuronal-communication-ocr-alevel-biology', '5.1.3', [
      { n: 1, f: 'Generator potential vs action potential', b: 'Generator potential: graded and local; a bigger stimulus gives a bigger potential.\nAction potential: all-or-nothing and travels along the neurone; starts only when the generator potential reaches threshold.', src: NEUR },
      { n: 2, f: 'Stages of an action potential', b: 'Threshold (about −55 mV): many voltage-gated Na⁺ channels open. Depolarisation: Na⁺ floods in, up to about +40 mV. Repolarisation: Na⁺ channels close, voltage-gated K⁺ channels open, K⁺ leaves. Hyperpolarisation: K⁺ channels slow to close.' },
      { n: 3, f: 'Spatial vs temporal summation', b: 'Spatial: several presynaptic neurones release transmitter together to reach threshold.\nTemporal: repeated impulses from one presynaptic neurone add up to reach threshold.' },
      { n: 4, f: 'Resting potential: value and how it is maintained', b: 'About −70 mV, inside negative to outside. The sodium–potassium pump moves 3 Na⁺ out for every 2 K⁺ in, using ATP, and the membrane is more permeable to K⁺, which diffuses back out.' },
      { n: 5, f: 'Saltatory conduction in myelinated neurones', b: 'The myelin sheath made by Schwann cells insulates the axon, so depolarisation happens only at the nodes of Ranvier. The action potential jumps from node to node, so it travels much faster than along a non-myelinated axon.' },
    ]),
    ...sub(M5, 'hormonal-communication-ocr-alevel-biology', '5.1.4', [
      { n: 1, f: 'How does a beta cell secrete insulin when blood glucose rises?', b: 'Glucose enters by facilitated diffusion; respiration makes more ATP; ATP closes K⁺ channels; the membrane depolarises; voltage-gated Ca²⁺ channels open and Ca²⁺ enters; insulin vesicles fuse with the membrane (exocytosis).' },
      { n: 2, f: 'Type 1 vs Type 2 diabetes', b: 'Type 1: autoimmune destruction of beta cells, so little or no insulin; treated with insulin.\nType 2: target cells respond poorly to insulin; linked to obesity and inactivity; treated with diet, exercise and drugs such as metformin.' },
      { n: 3, f: 'Endocrine vs exocrine glands', b: 'Endocrine glands secrete hormones directly into the blood, with no ducts, such as the adrenal glands.\nExocrine glands secrete into ducts, such as the pancreas releasing digestive enzymes into the pancreatic duct.' },
      { n: 4, f: 'Adrenal cortex vs adrenal medulla', b: 'Cortex: secretes steroid hormones such as cortisol and aldosterone.\nMedulla: secretes adrenaline and noradrenaline, which prepare the body for fight or flight.' },
      { n: 5, f: 'Roles of insulin and glucagon', b: 'Insulin (from beta cells in the islets of Langerhans) lowers blood glucose: cells take up more glucose and the liver converts glucose to glycogen.\nGlucagon (from alpha cells) raises it: glycogenolysis and gluconeogenesis in the liver.' },
    ]),
    ...sub(M5, 'plant-and-animal-responses-ocr-alevel-biology', '5.1.5', [
      { n: 1, f: 'Sympathetic vs parasympathetic control of heart rate', b: 'Sympathetic neurones release noradrenaline and speed up the heart (via the SAN). Parasympathetic neurones release acetylcholine and slow it down.' },
      { n: 2, f: 'Effects of auxin on shoots and roots, and of gibberellin and ABA in seeds', b: 'High auxin concentration stimulates shoot elongation but inhibits root elongation. Gibberellin promotes germination; abscisic acid maintains dormancy.' },
      { n: 3, f: 'Organisation of the mammalian nervous system', b: 'Central nervous system: brain and spinal cord.\nPeripheral nervous system: sensory and motor neurones. The motor system has a somatic (voluntary) part and an autonomic (involuntary) part, which has sympathetic and parasympathetic divisions.' },
      { n: 4, f: 'Knee-jerk reflex vs blinking reflex', b: 'Both are rapid, involuntary responses. Knee-jerk: a spinal reflex that helps keep balance. Blinking: a cranial reflex, coordinated in the brain stem, that protects the cornea from damage.' },
      { n: 5, f: 'Skeletal, cardiac and involuntary muscle', b: 'Skeletal: striated, voluntary, contracts quickly and tires quickly.\nCardiac: striated, branched cells, myogenic and involuntary.\nInvoluntary (smooth): not striated, spindle-shaped cells, in the walls of the gut and blood vessels.' },
      { n: 6, f: 'Sliding filament model in outline', b: 'Ca²⁺ binds troponin, moving tropomyosin off the binding sites on actin. Myosin heads bind actin, forming cross-bridges, and tilt (the power stroke), pulling actin towards the centre of the sarcomere. ATP detaches each head and its hydrolysis re-cocks it.' },
    ]),
    ...sub(M5, 'photosynthesis-ocr-alevel-biology', '5.2.1', [
      { n: 1, f: 'Photosynthetic pigments: which, where and how they are separated', b: 'Chlorophyll a, chlorophyll b and carotenoids, in the thylakoid membranes, grouped in photosystems. Each absorbs different wavelengths. They are separated by thin layer chromatography and identified by Rf values.' },
      { n: 2, f: 'Light-dependent stage: what happens and what it makes', b: 'In the thylakoids: photolysis of water gives H⁺, electrons and oxygen; excited electrons pass along the electron transport chain; ATP is made by photophosphorylation (chemiosmosis) and NADP is reduced. Cyclic photophosphorylation makes ATP only.' },
      { n: 3, f: 'Calvin cycle in three steps', b: 'In the stroma: CO₂ combines with RuBP, catalysed by RuBisCO, giving two GP; GP is reduced to triose phosphate (TP) using ATP and reduced NADP; most TP regenerates RuBP using ATP, and the rest is used to make glucose, amino acids and lipids.' },
      { n: 4, f: 'Limiting factors of photosynthesis, and the effect of low light on the Calvin cycle', b: 'Light intensity, carbon dioxide concentration and temperature; the factor in shortest supply limits the rate. In low light less ATP and reduced NADP are made, so GP is not reduced: GP builds up while TP and RuBP fall.' },
    ]),
    ...sub(M5, 'respiration-ocr-alevel-biology', '5.2.2', [
      { n: 1, f: 'Glycolysis: gross and net ATP', b: 'Glucose is phosphorylated, split into two triose phosphate and oxidised to two pyruvate. 4 ATP are made and 2 used, so the net gain is 2 ATP, with 2 reduced NAD.' },
      { n: 2, f: 'Chemiosmosis in mitochondria vs chloroplasts', b: 'Mitochondria: H⁺ pumped into the intermembrane space; electrons from reduced NAD and FAD; final acceptor oxygen.\nChloroplasts: H⁺ pumped into the thylakoid space; electrons from light-excited chlorophyll; final acceptor NADP (non-cyclic).' },
      { n: 3, f: 'Link reaction and Krebs cycle: products per glucose', b: 'Link reaction (matrix): 2 pyruvate → 2 acetyl CoA, 2 CO₂ and 2 reduced NAD.\nKrebs cycle (two turns): 4 CO₂, 6 reduced NAD, 2 reduced FAD and 2 ATP by substrate-level phosphorylation.' },
      { n: 4, f: 'Anaerobic respiration in mammals vs yeast', b: 'Mammals: pyruvate is reduced to lactate by lactate dehydrogenase.\nYeast: pyruvate is decarboxylated to ethanal, which is reduced to ethanol.\nBoth regenerate NAD so glycolysis continues, giving 2 ATP per glucose.' },
      { n: 5, f: 'Respiratory quotient (RQ)', b: 'RQ = CO₂ produced ÷ O₂ taken in. Typical values: carbohydrate 1.0, protein about 0.9, lipid about 0.7. Measured with a respirometer.' },
    ]),

    // Module 6 Genetics, evolution and ecosystems
    ...sub(M6, 'cellular-control-ocr-alevel-biology', '6.1.1', [
      { n: 1, f: 'Silent, missense and nonsense mutations', b: 'Silent: the altered codon codes for the same amino acid (the code is degenerate).\nMissense: one amino acid is changed.\nNonsense: a stop codon forms, giving a shorter polypeptide.', src: MUT },
      { n: 2, f: 'When does an insertion or deletion cause a frameshift?', b: 'When the number of nucleotides added or lost is not a multiple of three. Adding or losing 3, 6, 9… nucleotides keeps the frame, adding or losing amino acids at that site only.' },
      { n: 3, f: 'The lac operon: lactose absent vs present', b: 'Absent: the repressor (from lacI) binds the operator, blocking RNA polymerase, so lacZ and lacY are not transcribed.\nPresent: lactose binds the repressor, changing its shape so it leaves the operator; lacZ (β-galactosidase) and lacY (permease) are transcribed.' },
      { n: 4, f: 'Homeobox sequences vs Hox genes', b: 'A homeobox is a conserved sequence of about 180 base pairs coding for a DNA-binding domain of about 60 amino acids, found in plants, animals and fungi; the proteins act as transcription factors. Hox genes are a subset in animals, in clusters whose order matches the head-to-tail order in which they act.' },
      { n: 5, f: 'Apoptosis and its role in development', b: 'Programmed cell death: the cytoskeleton breaks down, the chromatin condenses and the cell breaks into vesicles that phagocytes take up. It removes unwanted cells, such as the tissue between developing fingers and toes, and is controlled by cell signals.' },
    ]),
    ...sub(M6, 'patterns-of-inheritance-ocr-alevel-biology', '6.1.2', [
      { n: 1, f: 'Linkage vs epistasis', b: 'Linkage: genes on the same chromosome are inherited together, so parental classes are commonest.\nEpistasis: one gene masks another because their products interact, giving a modified 9 : 3 : 3 : 1 ratio.', src: VAR6 },
      { n: 2, f: 'Hardy–Weinberg equations', b: 'p + q = 1 (allele frequencies).\np² + 2pq + q² = 1 (genotype frequencies).\nDominant phenotype = p² + 2pq; recessive phenotype = q².' },
      { n: 3, f: 'Genetic bottleneck vs founder effect', b: 'Bottleneck: an existing population falls sharply in number, so the survivors carry a reduced, random sample of alleles.\nFounder effect: a new population is started by a few migrants carrying only some of the alleles.' },
      { n: 4, f: 'Chi-squared test: what it tells you', b: 'Whether the difference between observed and expected results is significant. Compare the calculated χ² with the critical value at p = 0.05 for (number of categories − 1) degrees of freedom: if it is larger, the difference is significant and not due to chance.' },
      { n: 5, f: 'Stabilising vs directional selection', b: 'Stabilising: the average phenotype is favoured and both extremes are selected against, so variation narrows (human birth mass).\nDirectional: one extreme phenotype is favoured, so the mean shifts (antibiotic resistance in bacteria).' },
      { n: 6, f: 'Allopatric vs sympatric speciation', b: 'Allopatric: a geographical barrier separates populations, which then evolve separately until they cannot interbreed.\nSympatric: populations in the same area become reproductively isolated by reproductive mechanisms, such as different courtship or breeding seasons.' },
    ]),
    ...sub(M6, 'manipulating-genomes-ocr-alevel-biology', '6.1.3', [
      { n: 1, f: 'Why does a dideoxynucleotide stop DNA synthesis in sequencing?', b: 'It has no 3′ hydroxyl group, so no further nucleotide can be joined to it and the growing strand ends.' },
      { n: 2, f: 'DNA profiling: what is compared?', b: 'Short tandem repeats (STRs): short base sequences repeated head to tail, with a variable number of repeats. A DNA profile is the combination of repeat lengths at several loci, separated by PCR and electrophoresis.' },
      { n: 3, f: 'Somatic vs germ line gene therapy', b: 'Somatic: body cells are treated; the change is not inherited.\nGerm line: gametes, a zygote or early embryo are changed; the change is inherited.', src: GENG },
      { n: 4, f: 'PCR: the three steps and temperatures', b: 'Denaturation at about 95 °C separates the strands; annealing at about 55 °C lets primers bind; extension at about 72 °C, where Taq polymerase adds nucleotides. Each cycle doubles the amount of DNA.' },
      { n: 5, f: 'Steps in genetic engineering', b: 'Cut out the gene with restriction enzymes (or make it from mRNA using reverse transcriptase); cut a plasmid vector with the same enzyme and join the sticky ends with DNA ligase; put the recombinant plasmid into host cells (for example by electroporation); identify transformed cells using marker genes.' },
    ]),
    ...sub(M6, 'cloning-and-biotechnology-ocr-alevel-biology', '6.2.1', [
      { n: 1, f: 'Embryo twinning vs somatic cell nuclear transfer (SCNT)', b: 'Embryo twinning splits an embryo from a sexual cross, so the adult features are unknown. SCNT puts the nucleus of an adult body cell into an enucleated egg, so it copies an existing adult.' },
      { n: 2, f: 'Batch vs continuous culture', b: 'Batch: a closed system that passes through all four growth phases (lag, exponential, stationary, death).\nContinuous: nutrients added and products removed, holding the culture in the exponential phase.', src: BIOT },
      { n: 3, f: 'Natural cloning in plants (vegetative propagation)', b: 'Plants reproduce asexually by structures such as runners (strawberry), rhizomes, bulbs and suckers (elm). Gardeners take cuttings, which grow roots and form genetically identical plants.' },
      { n: 4, f: 'Micropropagation (tissue culture)', b: 'Small pieces of tissue (explants), often from meristems, are sterilised and grown on a sterile medium with nutrients and plant hormones (auxin and cytokinin); they form a callus, which is divided and grows into many identical plantlets.' },
      { n: 5, f: 'Advantages of immobilised enzymes', b: 'The enzyme does not contaminate the product, can be recovered and reused, and is often more stable over a wider range of temperature and pH. Example: immobilised lactase used to make lactose-free milk.' },
    ]),
    ...sub(M6, 'ecosystems-ocr-alevel-biology', '6.3.1', [
      { n: 1, f: 'Nitrogen fixation vs nitrification', b: 'Fixation: nitrogen gas → ammonium, by Azotobacter (free-living) and Rhizobium (in root nodules).\nNitrification: ammonium → nitrite (Nitrosomonas) → nitrate (Nitrobacter).' },
      { n: 2, f: 'Efficiency of transfer between trophic levels', b: 'Efficiency = energy (or biomass) in the higher trophic level ÷ energy (or biomass) in the lower one × 100. Energy is lost as heat from respiration, in parts not eaten, in faeces and in excretory products.' },
      { n: 3, f: 'Primary succession', b: 'Pioneer species such as lichens colonise bare rock; their decay forms a thin soil; mosses, then grasses, shrubs and trees follow, until a stable climax community forms. Deflected succession: human activity, such as grazing, holds the community at a plagioclimax.' },
      { n: 4, f: 'Abiotic vs biotic factors in an ecosystem', b: 'Abiotic: non-living, such as light, temperature, water availability, pH and soil type.\nBiotic: living, such as predation, competition, parasites and disease.' },
    ]),
    ...sub(M6, 'populations-and-sustainability-ocr-alevel-biology', '6.3.2', [
      { n: 1, f: 'Density-dependent vs density-independent factors, and carrying capacity', b: 'Density-dependent: effect strengthens as density rises (food, disease, predation, competition).\nDensity-independent: effect is unrelated to density (frost, flood, drought).\nCarrying capacity: the maximum population an environment can sustain long term.' },
      { n: 2, f: 'Interspecific vs intraspecific competition', b: 'Interspecific: between different species for the same resource; one species may outcompete the other.\nIntraspecific: between individuals of the same species; it keeps the population near the carrying capacity.' },
      { n: 3, f: 'Conservation vs preservation', b: 'Conservation: active management to maintain biodiversity, which can include sustainable use of the resource.\nPreservation: protecting an area by keeping it untouched by human activity.' },
      { n: 4, f: 'Sustainable management of timber and fish stocks', b: 'Timber: coppicing, selective felling and replanting.\nFish: quotas, minimum mesh sizes, closed seasons and fish farming.' },
    ]),
  ],
};
