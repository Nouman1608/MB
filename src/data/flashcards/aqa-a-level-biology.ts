/**
 * D-444 -- flashcards for AQA A-level Biology 7402 (for first teaching 2015).
 *
 * One block per subtopic, in syllabus order. Card ids are
 * `<subtopic number>-<n>` and are permanent (browser progress is keyed by
 * them): add a new card with the next unused n, never renumber. Topics 3-8
 * (and 3.2.2-3.2.4) were itemised on 2026-11-05; the earlier topic-level
 * cards (ids `<topic>-<n>`) moved to subtopic ids then.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 7402, or a definition table
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

const MPC = 'aqa-a-level-biology-monomers-polymers-and-carbohydrates-revision-notes';
const LPS = 'aqa-a-level-biology-lipids-and-protein-structure-revision-notes';
const ENZ = 'aqa-a-level-biology-enzymes-and-required-practical-1-revision-notes';
const NAD = 'aqa-a-level-biology-nucleic-acids-dna-replication-and-atp-revision-notes';
const WATER = 'aqa-a-level-biology-water-and-inorganic-ions-revision-notes';
const CELL = 'aqa-a-level-biology-cell-structure-revision-notes';
const MIC = 'aqa-a-level-biology-microscopy-magnification-and-cell-fractionation-revision-notes';
const DNA = 'aqa-a-level-biology-dna-genes-chromosomes-and-protein-synthesis-revision-notes';
const MUT = 'aqa-a-level-biology-mutation-and-meiosis-revision-notes';
const GDNS = 'aqa-a-level-biology-genetic-diversity-natural-selection-and-required-revision-notes';
const SPEC = 'aqa-a-level-biology-species-taxonomy-and-investigating-diversity-revision-notes';
const BIOD = 'aqa-a-level-biology-biodiversity-index-of-diversity-and-farming-revision-notes';
const PHOTO = 'aqa-a-level-biology-photosynthesis-revision-notes';
const RESP = 'aqa-a-level-biology-respiration-revision-notes';
const ETP = 'aqa-a-level-biology-energy-transfer-and-productivity-in-ecosystems-revision-notes';
const NUT = 'aqa-a-level-biology-nutrient-cycles-and-fertilisers-revision-notes';
const SURV = 'aqa-a-level-biology-survival-response-and-receptors-revision-notes';
const NERVE = 'aqa-a-level-biology-nerve-impulses-and-synaptic-transmission-revision-notes';
const OSMO = 'aqa-a-level-biology-osmoregulation-and-the-kidney-revision-notes';
const INH = 'aqa-a-level-biology-inheritance-and-chi-squared-revision-notes';
const POP = 'aqa-a-level-biology-populations-hardy-weinberg-selection-and-speciation-revision-notes';
const ECO = 'aqa-a-level-biology-populations-in-ecosystems-and-succession-revision-notes';
const GMSC = 'aqa-a-level-biology-gene-mutations-and-stem-cells-revision-notes';
const REG = 'aqa-a-level-biology-regulation-of-gene-expression-and-cancer-revision-notes';
const MITO = 'aqa-a-level-biology-cell-cycle-mitosis-and-required-practical-2-revision-notes';
const TRANS = 'aqa-a-level-biology-transport-across-cell-membranes-revision-notes';
const IMM = 'aqa-a-level-biology-cell-recognition-and-the-immune-system-revision-notes';

const T1 = 'biological-molecules-aqa-alevel-biology';
const T2 = 'cells-aqa-alevel-biology';
const T3 = 'organisms-exchange-substances-with-their-environment-aqa-alevel-biology';
const T4 = 'genetic-information-variation-and-relationships-between-organisms-aqa-alevel-biology';
const T5 = 'energy-transfers-in-and-between-organisms-aqa-alevel-biology';
const T6 = 'organisms-respond-to-changes-in-their-internal-and-external-environments-aqa-alevel-biology';
const T7 = 'genetics-populations-evolution-and-ecosystems-aqa-alevel-biology';
const T8 = 'the-control-of-gene-expression-aqa-alevel-biology';

export const DECK_AQA_A_LEVEL_BIOLOGY: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'biology',
  syllabusCode: '7402',
  syllabusSeries: 'For first teaching 2015',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'hina-mogul', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Biological molecules
    ...sub(T1, 'monomers-and-polymers-aqa-alevel-biology', '3.1.1', [
      { n: 1, f: "Monomer", b: "A smaller unit from which larger molecules are made.", src: MPC },
      { n: 2, f: "Polymer", b: "A molecule made from a large number of monomers joined together.", src: MPC },
      { n: 3, f: "Condensation reaction", b: "Joins two molecules with the formation of a chemical bond and eliminates a molecule of water.", src: MPC },
      { n: 4, f: "Hydrolysis reaction", b: "Breaks a chemical bond between two molecules and uses a water molecule.", src: MPC },
      { n: 5, f: "Name the monomer of a polysaccharide, a polypeptide and a polynucleotide", b: "Polysaccharide: monosaccharide.\nPolypeptide: amino acid.\nPolynucleotide: nucleotide." },
      { n: 6, f: "Which bond joins the monomers in a polysaccharide, a polypeptide and a nucleic acid?", b: "Polysaccharide: glycosidic bond.\nPolypeptide: peptide bond.\nNucleic acid: phosphodiester bond." },
      { n: 7, f: "n monomers are joined into one molecule. How many water molecules are released, and how many are used in complete hydrolysis?", b: "n − 1 released (one per bond formed), and n − 1 used in complete hydrolysis. Count the bonds, not the monomers.", src: MPC },
      { n: 8, f: "Are lipids such as triglycerides polymers?", b: "No. A triglyceride is one glycerol and three fatty acids joined by ester bonds; there is no repeating monomer unit." },
      { n: 9, f: "A branched polysaccharide contains 60 glucose units. How many glycosidic bonds does it have?", b: "59 glycosidic bonds, so 59 water molecules were released in making it and 59 are used to hydrolyse it completely." },
      { n: 10, f: "Glucose Mr = 180, water Mr = 18. What is the Mr of a chain of 12 glucose units?", b: "12 × 180 − 11 × 18 = 2160 − 198 = 1962. Eleven condensations each remove one water." },
    ]),
    ...sub(T1, 'carbohydrates-aqa-alevel-biology', '3.1.2', [
      { n: 1, f: "Name three monosaccharides and give their molecular formula", b: "Glucose, galactose and fructose. All are C₆H₁₂O₆." },
      { n: 2, f: "Which monosaccharides make maltose, sucrose and lactose?", b: "Maltose: glucose + glucose.\nSucrose: glucose + fructose.\nLactose: glucose + galactose." },
      { n: 3, f: "Glycosidic bond", b: "The bond formed between two monosaccharides by a condensation reaction.", src: MPC },
      { n: 4, f: "How do α-glucose and β-glucose differ?", b: "The position of the OH group on carbon 1: below the ring in α-glucose, above the ring in β-glucose.", src: MPC },
      { n: 5, f: "Amylose and amylopectin: structure and advantage", b: "Amylose: unbranched α-glucose chain coiled into a helix, so very compact.\nAmylopectin: branched, so it has many ends for rapid hydrolysis.", src: MPC },
      { n: 6, f: "How is glycogen suited to its role in animal cells?", b: "It is highly branched with short chains, giving many ends for enzymes to hydrolyse, so glucose is released faster than from starch. This suits the higher activity of animals. It is also compact and insoluble." },
      { n: 7, f: "Structure of cellulose", b: "Straight, unbranched chains of β-glucose, with alternate molecules rotated 180°. Hydrogen bonds between parallel chains form microfibrils.", src: MPC },
      { n: 8, f: "Why do hydrogen bonds between cellulose chains matter to a plant cell?", b: "Many hydrogen bonds give the microfibrils high tensile strength, so the cell wall withstands the pressure of water entering by osmosis." },
      { n: 9, f: "Why is being insoluble useful for a storage polysaccharide?", b: "It has no effect on water potential, so water does not enter the cell by osmosis, and it cannot diffuse out of the cell." },
      { n: 10, f: "Test for a reducing sugar", b: "Add Benedict's solution and heat. Positive: blue → green, yellow, orange, then brick-red precipitate. Negative: stays blue. All monosaccharides, maltose and lactose are reducing sugars." },
      { n: 11, f: "Test for a non-reducing sugar (for example sucrose)", b: "Benedict's on the sample first stays blue. Boil a fresh sample with dilute hydrochloric acid to hydrolyse it, neutralise (for example with sodium hydrogencarbonate), then add Benedict's and heat: brick-red precipitate.", src: MPC },
      { n: 12, f: "Test for starch", b: "Add iodine in potassium iodide solution. Positive: yellow-brown → blue-black." },
    ]),
    ...sub(T1, 'lipids-aqa-alevel-biology', '3.1.3', [
      { n: 1, f: "How is a triglyceride formed?", b: "One glycerol and three fatty acids join in three condensation reactions, forming three ester bonds and releasing three water molecules." },
      { n: 2, f: "Ester bond", b: "Forms between an OH of glycerol and the COOH of a fatty acid.", src: LPS },
      { n: 3, f: "Saturated and unsaturated fatty acids", b: "Saturated: no C=C double bonds in the hydrocarbon chain.\nUnsaturated: at least one C=C double bond.", src: LPS },
      { n: 4, f: "Why are unsaturated fats usually liquid at room temperature?", b: "C=C double bonds put kinks in the chains, so the molecules cannot pack closely together." },
      { n: 5, f: "Structure of a phospholipid", b: "Glycerol, two fatty acids and a phosphate-containing group in place of the third fatty acid. The phosphate head is hydrophilic; the fatty acid tails are hydrophobic.", src: LPS },
      { n: 6, f: "How do phospholipids behave in water, and why?", b: "They form a bilayer: hydrophilic heads face the water, hydrophobic tails face inward. The core blocks water-soluble substances; this is the basis of cell membranes." },
      { n: 7, f: "Why are triglycerides a good energy store?", b: "Long chains with many C–H bonds release more energy per gram than carbohydrate. They are non-polar and insoluble, so they do not affect water potential. Their high hydrogen content gives metabolic water when oxidised." },
      { n: 8, f: "Hydrophilic and hydrophobic", b: "Hydrophilic: attracted to water; polar or charged.\nHydrophobic: repelled by water; non-polar.", src: LPS },
      { n: 9, f: "Emulsion test for lipids", b: "Shake the sample with ethanol, then pour into water. Positive: a cloudy white emulsion. Negative: stays clear. The result is cloudiness, not a colour change." },
      { n: 10, f: "Exam trap: how many fatty acids does a phospholipid have?", b: "Two. A triglyceride has three; in a phospholipid one is replaced by a phosphate-containing group." },
    ]),
    ...sub(T1, 'proteins-aqa-alevel-biology', '3.1.4', [
      { n: 1, f: "General structure of an amino acid", b: "A central carbon carrying an amine group (NH₂), a carboxyl group (COOH), a hydrogen atom and an R group. The twenty amino acids common to all organisms differ only in R.", src: LPS },
      { n: 2, f: "Peptide bond", b: "A C–N bond formed by condensation between the carboxyl group of one amino acid and the amine group of the next.", src: LPS },
      { n: 3, f: "Primary structure of a protein", b: "The sequence of amino acids in a polypeptide, held by peptide bonds. It determines all the higher levels of structure.", src: LPS },
      { n: 4, f: "Secondary structure", b: "The α-helix or β-pleated sheet, held by hydrogen bonds along the polypeptide backbone." },
      { n: 5, f: "Tertiary structure, and the bonds that hold it", b: "The specific three-dimensional fold of one polypeptide, held by hydrogen bonds, ionic bonds and disulfide bridges between R groups (with hydrophobic interactions)." },
      { n: 6, f: "Quaternary structure", b: "The arrangement of two or more polypeptides in one protein, held by the same kinds of bond as tertiary structure. Example: haemoglobin, four polypeptides.", src: LPS },
      { n: 7, f: "Biuret test for protein", b: "Add sodium hydroxide, then dilute copper(II) sulfate. Positive: blue → lilac or purple. It detects peptide bonds, not free amino acids." },
      { n: 8, f: "Enzyme", b: "A globular protein that acts as a biological catalyst. It lowers the activation energy of the reaction by forming an enzyme–substrate complex.", src: ENZ },
      { n: 9, f: "Induced-fit model of enzyme action", b: "The active site is not rigid: it changes shape slightly as the substrate binds to become complementary, putting strain on the substrate's bonds and lowering the activation energy." },
      { n: 10, f: "Competitive and non-competitive inhibitors", b: "Competitive: similar shape to the substrate, binds the active site; effect reduced by more substrate.\nNon-competitive: binds elsewhere and changes the active site's shape; more substrate does not overcome it.", src: ENZ },
      { n: 11, f: "Why does the rate level off as substrate concentration rises?", b: "All the active sites are occupied, so enzyme concentration is now the limiting factor." },
      { n: 12, f: "Denaturation (of an enzyme)", b: "Loss of the tertiary structure, so the active site changes shape and is no longer complementary to the substrate. Never write that the enzyme is killed.", src: ENZ },
    ]),
    ...sub(T1, 'nucleic-acids-aqa-alevel-biology', '3.1.5', [
      { n: 1, f: "Nucleotide", b: "A pentose, a nitrogen-containing organic base and a phosphate group.", src: NAD },
      { n: 2, f: "DNA and RNA: pentose and bases", b: "DNA: deoxyribose; bases adenine, cytosine, guanine, thymine.\nRNA: ribose; bases adenine, cytosine, guanine, uracil." },
      { n: 3, f: "Phosphodiester bond", b: "The bond formed by a condensation reaction between two nucleotides. It makes the sugar–phosphate backbone.", src: NAD },
      { n: 4, f: "Structure of a DNA molecule", b: "A double helix of two polynucleotide chains, held together by hydrogen bonds between specific complementary base pairs: A with T, C with G." },
      { n: 5, f: "Structure and job of RNA (compared with DNA)", b: "A relatively short single polynucleotide chain. It transfers genetic information from DNA to the ribosomes. Ribosomes themselves are made of RNA and proteins." },
      { n: 6, f: "Double-stranded DNA is 36% adenine. What percentage is guanine?", b: "T = 36%, so A + T = 72%. C + G = 28%, so G = 14%." },
      { n: 7, f: "Semi-conservative replication", b: "Each new DNA molecule has one original strand and one newly made strand.", src: NAD },
      { n: 8, f: "Role of DNA helicase in replication", b: "Breaks the hydrogen bonds between complementary bases, unwinding the double helix so each strand can act as a template." },
      { n: 9, f: "Role of DNA polymerase in replication", b: "Catalyses the condensation reactions that join adjacent nucleotides of the new strand (forming phosphodiester bonds), after free nucleotides have base-paired with the template." },
      { n: 10, f: "Meselson–Stahl: results after one and two generations in ¹⁴N", b: "Generation 1: one intermediate band (rules out conservative).\nGeneration 2: intermediate and light bands in equal amounts (rules out dispersive; fits semi-conservative)." },
      { n: 11, f: "Why did many scientists once doubt that DNA carries genetic information?", b: "It has only four different bases, so it looked too simple; proteins, with many amino acids, seemed more likely. The information is in the order and length of the base sequence." },
    ]),
    ...sub(T1, 'atp-aqa-alevel-biology', '3.1.6', [
      { n: 1, f: "Structure of ATP", b: "A nucleotide derivative: ribose, adenine and three phosphate groups." },
      { n: 2, f: "Hydrolysis of ATP: equation and enzyme", b: "ATP + H₂O → ADP + Pi, catalysed by ATP hydrolase.", src: NAD },
      { n: 3, f: "How is ATP resynthesised?", b: "ADP + Pi → ATP by condensation, catalysed by ATP synthase, during photosynthesis or respiration.", src: NAD },
      { n: 4, f: "How is the energy released by ATP hydrolysis used?", b: "It is coupled to energy-requiring reactions in cells." },
      { n: 5, f: "What is the inorganic phosphate (Pi) from ATP hydrolysis used for?", b: "It is added to other compounds (phosphorylation), often making them more reactive." },
      { n: 6, f: "ATP compared with an RNA nucleotide", b: "Both contain ribose. An RNA nucleotide has one of four bases (A, C, G, U) and one phosphate; ATP has adenine and three phosphates." },
      { n: 7, f: "Exam trap: ATP hydrolase and ATP synthase", b: "ATP hydrolase breaks ATP down (hydrolysis, uses water). ATP synthase makes ATP (condensation, releases water). Not 'ATP synthetase'." },
      { n: 8, f: "ATP hydrolysis releases 30.5 kJ per mole (data given). How much energy is released by 0.20 mol?", b: "0.20 × 30.5 = 6.1 kJ" },
    ]),
    ...sub(T1, 'water-aqa-alevel-biology', '3.1.7', [
      { n: 1, f: "Why are water molecules attracted to each other?", b: "Water is polar (δ− oxygen, δ+ hydrogens), so hydrogen bonds form between neighbouring molecules. Each is weak, but there are very many." },
      { n: 2, f: "Metabolite", b: "A substance taking part in, or made by, a metabolic reaction. Water is a reactant in hydrolysis and a product of condensation.", src: WATER },
      { n: 3, f: "Why is water a good solvent, and why does that matter?", b: "Polar water molecules surround ions and polar molecules, so they dissolve. Reactions happen in solution, and substances are transported in blood, tissue fluid and xylem." },
      { n: 4, f: "Why does water have a relatively high heat capacity, and what is the benefit?", b: "Energy supplied first disrupts hydrogen bonds, so temperature rises slowly. This buffers temperature change in cells, blood and aquatic habitats." },
      { n: 5, f: "Explain how evaporation of water cools an organism", b: "Hydrogen bonds must be broken for water to evaporate, which takes a lot of energy. Escaping molecules carry it away, so a little water removes a lot of heat (sweating, panting, transpiration)." },
      { n: 6, f: "Latent heat of vaporisation", b: "The energy needed to turn a liquid into a gas at constant temperature.", src: WATER },
      { n: 7, f: "Cohesion", b: "Attraction between molecules of the same kind. In water it is due to hydrogen bonding and allows continuous columns of water in the xylem.", src: WATER },
      { n: 8, f: "Surface tension", b: "The skin-like surface where water meets air, caused by cohesion. It can support small organisms such as pond skaters.", src: WATER },
      { n: 9, f: "200 g of water absorbs 8.36 kJ (specific heat capacity 4.18 J g⁻¹ °C⁻¹). What is the temperature rise?", b: "8360 ÷ (200 × 4.18) = 8360 ÷ 836 = 10 °C. Convert kJ to J first." },
      { n: 10, f: "15 g of water evaporates (latent heat 2.4 kJ g⁻¹). How much energy is removed?", b: "15 × 2.4 = 36 kJ" },
    ]),
    ...sub(T1, 'inorganic-ions-aqa-alevel-biology', '3.1.8', [
      { n: 1, f: "Where are inorganic ions found in organisms?", b: "In solution in cytoplasm and body fluids, some at high concentrations and others at very low concentrations. Each ion's role depends on its properties." },
      { n: 2, f: "Role of hydrogen ions (H⁺)", b: "Their concentration sets pH. H⁺ affects the charges on R groups, so ionic and hydrogen bonds in a protein change, altering the shape of an enzyme's active site." },
      { n: 3, f: "pH 6 compared with pH 8: which has more H⁺, and by what factor?", b: "pH 6, with 100 times the H⁺ concentration. pH = −log₁₀[H⁺], so each unit is a factor of 10." },
      { n: 4, f: "Role of iron ions in haemoglobin", b: "Each of the four haem groups contains an Fe²⁺ ion, which binds one O₂ reversibly. So one haemoglobin carries up to four O₂ molecules." },
      { n: 5, f: "How do sodium ions help glucose enter an ileum epithelial cell?", b: "The sodium–potassium pump actively removes Na⁺ into the blood, keeping Na⁺ low inside the cell. Na⁺ diffuses in from the lumen through a co-transporter protein, carrying glucose (or an amino acid) in with it." },
      { n: 6, f: "Roles of phosphate ions", b: "Part of DNA, RNA and ATP nucleotides; joins nucleotides by phosphodiester bonds; Pi released by ATP hydrolysis phosphorylates other compounds." },
      { n: 7, f: "Why does glucose absorption in the ileum slow if the sodium–potassium pump is inhibited?", b: "Less Na⁺ leaves the cell, so the Na⁺ concentration gradient into the cell is lost and less glucose is co-transported." },
      { n: 8, f: "Exam trap: does co-transport of glucose use ATP directly?", b: "No. ATP is used by the sodium–potassium pump; co-transport uses the Na⁺ gradient the pump sets up.", src: WATER },
    ]),

    // 2 Cells
    ...sub(T2, 'structure-of-eukaryotic-cells-aqa-alevel-biology', '3.2.1.1', [
      { n: 1, f: "Structure of the nucleus", b: "Surrounded by a nuclear envelope with pores. Contains chromosomes (protein-bound, linear DNA) and one or more nucleoli." },
      { n: 2, f: "Nucleolus", b: "A dense structure in the nucleus that produces ribosomes; a nucleus can have one or more.", src: CELL },
      { n: 3, f: "Rough ER and ribosomes: function", b: "Protein synthesis and transport.", src: CELL },
      { n: 4, f: "Smooth endoplasmic reticulum", b: "ER without ribosomes; it synthesises lipids." },
      { n: 5, f: "Golgi apparatus and Golgi vesicles: function", b: "Modify, package and secrete proteins.", src: CELL },
      { n: 6, f: "Lysosomes", b: "Contain hydrolytic enzymes, which break down damaged organelles and pathogens.", src: CELL },
      { n: 7, f: "Mitochondria and chloroplasts: functions", b: "Mitochondria: site of aerobic respiration.\nChloroplasts (plants and algae): site of photosynthesis." },
      { n: 8, f: "Which eukaryotic cells have a cell wall, and what is it made of?", b: "Plants and algae: cellulose. Fungi: chitin. Animal cells have no cell wall." },
      { n: 9, f: "Which organelles are not membrane-bound?", b: "Ribosomes. Mitochondria, chloroplasts, lysosomes, ER, Golgi apparatus and the nucleus are all membrane-bound.", src: CELL },
      { n: 10, f: "How is a secretory cell (for example a pancreatic enzyme-secreting cell) adapted?", b: "An unusually extensive rough ER and Golgi apparatus, to make and package large amounts of protein (enzymes) for secretion." },
      { n: 11, f: "How are specialised cells organised in a multicellular organism?", b: "Specialised cells form tissues, tissues form organs, and organs form organ systems." },
    ]),
    ...sub(T2, 'structure-of-prokaryotic-cells-and-viruses-aqa-alevel-biology', '3.2.1.2', [
      { n: 1, f: "Prokaryotic and eukaryotic cells: membrane-bound organelles", b: "Eukaryotic: present.\nProkaryotic: absent.", src: CELL },
      { n: 2, f: "Prokaryotic and eukaryotic cells: ribosomes", b: "Prokaryotic ribosomes are smaller than eukaryotic ribosomes.", src: CELL },
      { n: 3, f: "Prokaryotic and eukaryotic cells: nucleus and DNA", b: "Eukaryotic: nucleus; linear DNA associated with proteins.\nProkaryotic: no nucleus; a single circular DNA molecule free in the cytoplasm, not associated with proteins.", src: CELL },
      { n: 4, f: "What does a prokaryotic cell wall contain?", b: "Murein, a glycoprotein.", src: CELL },
      { n: 5, f: "Plasmid", b: "Small circular DNA in prokaryotes, separate from the main chromosome, often carrying genes such as antibiotic resistance.", src: CELL },
      { n: 6, f: "Name structures that some prokaryotic cells have in addition", b: "Plasmids, a capsule surrounding the cell, and one or more flagella." },
      { n: 7, f: "Structure of a virus particle", b: "Genetic material (DNA or RNA) inside a protein coat (the capsid), with attachment proteins that bind to receptors on host cells. Some also have a lipid envelope." },
      { n: 8, f: "Capsid", b: "The protein coat enclosing a virus's genetic material.", src: CELL },
      { n: 9, f: "Exam trap: is a virus a very small prokaryote?", b: "No. Viruses are acellular and non-living: they are not made of cells at all, and they replicate only inside host cells." },
    ]),
    ...sub(T2, 'methods-of-studying-cells-aqa-alevel-biology', '3.2.1.3', [
      { n: 1, f: "Magnification", b: "The factor by which the image is enlarged compared with the specimen. magnification = image size ÷ actual size; it has no unit.", src: MIC },
      { n: 2, f: "Resolution", b: "The smallest separation at which two neighbouring points can still be seen as two.", src: MIC },
      { n: 3, f: "A cell 8 µm long appears 24 mm long in a drawing. What is the magnification?", b: "24 mm = 24 000 µm. 24 000 ÷ 8 = ×3000" },
      { n: 4, f: "Unit conversions: mm, µm and nm", b: "1 mm = 1000 µm and 1 µm = 1000 nm. Multiply by 1000 to go to the smaller unit; divide by 1000 to go to the larger." },
      { n: 5, f: "Why do electron microscopes have a higher resolution than optical microscopes?", b: "Electrons have a much shorter wavelength than light, and shorter wavelengths can separate closer points." },
      { n: 6, f: "TEM and SEM compared", b: "TEM: electrons pass through a very thin section; highest resolution; 2D image showing internal ultrastructure.\nSEM: electrons scan the surface; lower resolution than TEM; 3D image of the surface." },
      { n: 7, f: "Limitations of electron microscopes", b: "Specimens must be dead and in a vacuum; TEM needs extremely thin sections; preparation can produce artefacts; images are black and white." },
      { n: 8, f: "Artefact", b: "A feature in an image that is not part of the living specimen, produced by the preparation or the observation method.", src: MIC },
      { n: 9, f: "Cell fractionation: why is the solution cold, isotonic and buffered?", b: "Cold: slows enzymes, so organelles are not digested.\nIsotonic: no net movement of water, so organelles do not burst or shrink.\nBuffered: keeps pH constant, so enzymes are not denatured.", src: MIC },
      { n: 10, f: "Ultracentrifugation: order in which organelles form pellets", b: "Spin the filtered homogenate at increasing speeds: nuclei first, then chloroplasts (plants), mitochondria, lysosomes, endoplasmic reticulum, ribosomes. The largest, densest come out first." },
      { n: 11, f: "25 eyepiece divisions line up with 10 stage-micrometer divisions of 10 µm. What is one eyepiece division worth?", b: "10 × 10 µm = 100 µm. 100 ÷ 25 = 4 µm. Recalibrate for each objective lens." },
    ]),

    ...sub(T2, 'all-cells-arise-from-other-cells-aqa-alevel-biology', '3.2.2', [
      { n: 1, f: "The cell cycle and the stages of mitosis", b: "Interphase: DNA replicates (S phase) and the cell grows. Mitosis: prophase (chromosomes condense, nuclear envelope breaks down), metaphase (chromosomes line up at the equator on the spindle), anaphase (chromatids separate to the poles), telophase (nuclear envelopes reform). Then cytokinesis.", src: MITO },
      { n: 2, f: "How do prokaryotic cells divide?", b: "By binary fission: the circular DNA and any plasmids replicate, then the cytoplasm divides into two daughter cells. Each gets one copy of the circular DNA but a variable number of copies of plasmids. There is no spindle, so it is not mitosis.", src: MITO },
      { n: 3, f: "How do viruses replicate?", b: "Viruses are non-living and do not undergo cell division. A virus attaches to a host cell by its attachment proteins and injects its nucleic acid; the host cell then makes new viral particles.", src: MITO },
      { n: 4, f: "Mitotic index, and why cancer is linked to mitosis", b: "Mitotic index = number of cells in mitosis ÷ total number of cells observed. Cancer results from uncontrolled cell division; many cancer treatments act on the cell cycle to stop rapid division.", src: MITO },
      { n: 5, f: "Required practical 2: how do you prepare a stained root tip squash?", b: "Cut off the last few mm of a root tip. Put it in warm dilute hydrochloric acid to separate the cells. Rinse, add a stain that binds chromosomes (e.g. toluidine blue), break it up, add a coverslip and press straight down to get one layer of cells. View at low power, then high power.", src: MITO },
      { n: 6, f: "36 of 240 root tip cells counted are in mitosis. Calculate the mitotic index.", b: "36 ÷ 240 = 0.15 (15%). Count cells in prophase, metaphase, anaphase and telophase as in mitosis; interphase cells are not." },
    ]),
    ...sub(T2, 'transport-across-cell-membranes-aqa-alevel-biology', '3.2.3', [
      { n: 1, f: "Fluid mosaic model of the cell-surface membrane", b: "A phospholipid bilayer with proteins (channel and carrier proteins) scattered through it, plus glycoproteins, glycolipids and cholesterol. Cholesterol restricts the movement of other molecules, making the membrane less fluid.", src: TRANS },
      { n: 2, f: "Simple diffusion vs facilitated diffusion", b: "Both are passive, down a concentration gradient. Simple diffusion: small non-polar molecules pass through the phospholipid bilayer. Facilitated diffusion: ions and polar molecules pass through channel or carrier proteins.", src: TRANS },
      { n: 3, f: "Osmosis and water potential", b: "Osmosis: the net movement of water from a higher to a lower water potential across a partially permeable membrane. Pure water has a water potential of 0 kPa; adding solute makes it negative.", src: TRANS },
      { n: 4, f: "Active transport and co-transport", b: "Active transport moves substances against a concentration gradient through carrier proteins, using energy from ATP hydrolysis. In co-transport in the ileum, Na⁺ is actively pumped out of epithelial cells into the blood; Na⁺ then diffuses in from the lumen through a co-transporter protein, carrying glucose against its gradient.", src: TRANS },
      { n: 5, f: "Required practical 3: how do you find the water potential of potato tissue?", b: "Make a sucrose dilution series. Weigh blotted potato cylinders, leave one in each solution, then blot and reweigh. Plot percentage change in mass against concentration. Where the line crosses zero change, tissue and solution have equal water potential; read its value from the calibration curve.", src: TRANS },
      { n: 6, f: "Required practical 4: why does more beetroot pigment leak out at higher temperatures?", b: "Phospholipids move more, so the membrane becomes more fluid, and at high temperatures membrane proteins denature, leaving gaps. The membrane is more permeable, so more pigment leaks and the colorimeter absorbance of the liquid is higher.", src: TRANS },
    ]),
    ...sub(T2, 'cell-recognition-and-the-immune-system-aqa-alevel-biology', '3.2.4', [
      { n: 1, f: "Antigen", b: "A molecule, usually a protein, on the surface of a cell or virus that generates an immune response. Antigens let the immune system identify pathogens, cells from other organisms, abnormal body cells and toxins.", src: IMM },
      { n: 2, f: "Phagocytosis in order", b: "The phagocyte recognises the pathogen and engulfs it in a phagosome; a lysosome fuses with the phagosome and its lysozymes hydrolyse the pathogen; the phagocyte presents the antigens on its surface.", src: IMM },
      { n: 3, f: "Cellular vs humoral response", b: "Cellular: T cells respond to antigens presented on body cells; helper T cells stimulate cytotoxic T cells, phagocytes and B cells.\nHumoral: the B cell with complementary antibodies is activated by a helper T cell (clonal selection), divides by mitosis, and forms plasma cells that secrete antibodies, and memory cells.", src: IMM },
      { n: 4, f: "Structure of an antibody", b: "Four polypeptide chains (two heavy, two light) held by disulfide bridges. Each has two variable regions with antigen-binding sites complementary to one antigen, and a constant region. Antibody–antigen complexes cause agglutination.", src: IMM },
      { n: 5, f: "Primary vs secondary immune response", b: "Primary: slow, few antibodies, symptoms likely, memory cells made.\nSecondary: memory cells divide rapidly on re-infection, so antibodies are made faster and in larger amounts, and symptoms usually do not appear. Vaccines use this to give immunity.", src: IMM },
      { n: 6, f: "Active vs passive immunity", b: "Active: the body makes its own antibodies after exposure to an antigen (natural infection or vaccination); memory cells give long-term protection.\nPassive: antibodies are introduced from outside (across the placenta or by injection); protection is immediate but short-term.", src: IMM },
      { n: 7, f: "Structure of HIV and how it replicates in helper T cells", b: "HIV: RNA and reverse transcriptase inside a protein capsid, in a lipid envelope with attachment proteins. Attachment proteins bind a receptor on a helper T cell; RNA and enzyme enter; reverse transcriptase makes DNA from the RNA; this DNA is inserted into the host DNA; the cell makes viral proteins and RNA; new particles bud off.", src: IMM },
      { n: 8, f: "How does HIV cause the symptoms of AIDS, and why do antibiotics not work on viruses?", b: "HIV destroys helper T cells, so B cells, cytotoxic T cells and phagocytes are not stimulated; opportunistic infections then cause the symptoms. Antibiotics target bacterial features such as murein cell walls and bacterial ribosomes; viruses lack these and replicate inside host cells.", src: IMM },
      { n: 9, f: "Two uses of monoclonal antibodies", b: "Targeting medication: a drug attached to an antibody complementary to an antigen found only on one cell type (e.g. cancer cells) is delivered to those cells, sparing healthy ones.\nMedical diagnosis: antibodies detect a specific molecule, e.g. hCG in pregnancy tests.", src: IMM },
      { n: 10, f: "Indirect ELISA test for HIV antibodies", b: "HIV antigen is fixed in a well; patient plasma is added and any HIV antibodies bind; wash; an enzyme-linked second antibody that binds the patient antibodies is added; wash again; add substrate. A colour change means positive. Washing removes unbound antibodies that would give a false positive.", src: IMM },
      { n: 11, f: "Herd immunity", b: "When a high enough proportion of a population is immune (e.g. by vaccination), the pathogen cannot spread easily, so people who are not immune, such as babies or those who cannot be vaccinated, are protected too.", src: IMM },
    ]),

    // 3 Organisms exchange substances with their environment
    ...sub(T3, 'surface-area-to-volume-ratio-aqa-alevel-biology', '3.3.1', [
      { n: 1, f: "Why do large organisms need specialised exchange surfaces and mass transport?", b: "Surface area to volume ratio falls as size increases, because volume grows faster than surface area. Diffusion across the body surface can no longer meet demand." },
      { n: 2, f: "Surface area to volume ratio of a 3 cm cube", b: "SA = 6 × 3 × 3 = 54 cm²; V = 3 × 3 × 3 = 27 cm³; SA:V = 54 ÷ 27 = 2 : 1." },
      { n: 3, f: "Why do small mammals have a high metabolic rate?", b: "A small animal has a large surface area to volume ratio, so it loses heat quickly. It needs a high rate of respiration to release enough heat to keep its body temperature constant." },
    ]),
    ...sub(T3, 'gas-exchange-aqa-alevel-biology', '3.3.2', [
      { n: 1, f: "Counter-current principle in fish gills", b: "Blood in the lamellae flows in the opposite direction to water. Water always meets blood with a lower oxygen concentration, so a diffusion gradient is kept along the whole lamella and more oxygen is absorbed than with parallel flow." },
      { n: 2, f: "Gas exchange in insects", b: "Air enters through spiracles into tracheae and then tracheoles, which reach the muscle cells; gases diffuse along these air-filled tubes. Spiracles can close and a waterproof cuticle limits water loss." },
      { n: 3, f: "How is the alveolar epithelium adapted for gas exchange?", b: "One flattened cell thick (short diffusion distance), very many alveoli (large surface area), a dense capillary network keeping the gradient steep, and a moist lining in which gases dissolve." },
      { n: 4, f: "Inspiration: muscles and pressure", b: "Diaphragm contracts and flattens; external intercostal muscles contract, moving the ribs up and out. Thoracic volume increases, pressure falls below atmospheric, and air flows in." },
      { n: 5, f: "Pulmonary ventilation rate", b: "PVR = tidal volume × breathing rate." },
    ]),
    ...sub(T3, 'digestion-and-absorption-aqa-alevel-biology', '3.3.3', [
      { n: 1, f: "How are lipids absorbed in the ileum?", b: "Bile salts help form micelles holding monoglycerides and fatty acids. Micelles carry them to the epithelial cell surface, where these lipid-soluble molecules diffuse across the membrane." },
      { n: 2, f: "Digestion of carbohydrates in mammals", b: "Amylases (in saliva and from the pancreas) hydrolyse starch to maltose. Membrane-bound disaccharidases on the ileum epithelium (maltase, sucrase, lactase) hydrolyse disaccharides to monosaccharides." },
      { n: 3, f: "Endopeptidases, exopeptidases and dipeptidases", b: "Endopeptidases hydrolyse peptide bonds within a polypeptide. Exopeptidases hydrolyse bonds at the ends, removing single amino acids. Membrane-bound dipeptidases hydrolyse dipeptides into two amino acids." },
      { n: 4, f: "How are monosaccharides and amino acids absorbed in the ileum?", b: "By co-transport with sodium ions: Na⁺ is actively pumped out of the epithelial cell into the blood, keeping its concentration low in the cell, so Na⁺ diffuses in from the lumen through a co-transporter protein, carrying glucose or amino acids with it." },
    ]),
    ...sub(T3, 'mass-transport-aqa-alevel-biology', '3.3.4', [
      { n: 1, f: "Bohr effect", b: "A higher carbon dioxide concentration shifts the oxygen dissociation curve to the right, so haemoglobin unloads oxygen more readily at a given partial pressure (as in respiring tissue)." },
      { n: 2, f: "Cardiac output", b: "Cardiac output = stroke volume × heart rate." },
      { n: 3, f: "How is tissue fluid formed and returned?", b: "At the arteriole end, high hydrostatic pressure forces fluid out of the capillary; plasma proteins stay behind, lowering blood water potential. At the venule end, water returns by osmosis. Excess drains into the lymph system." },
      { n: 4, f: "Cohesion–tension theory of water movement in xylem", b: "Water evaporates from leaves (transpiration), creating tension. Hydrogen bonds make water molecules cohesive, so the column is pulled up the xylem as a continuous chain; adhesion to the walls helps." },
      { n: 5, f: "Mass flow hypothesis of translocation in phloem", b: "Sucrose is loaded into phloem at the source; water follows by osmosis, raising hydrostatic pressure. Sap flows toward the sink, where sucrose is removed or used." },
    ]),

    // 4 Genetic information, variation and relationships between organisms
    ...sub(T4, 'dna-genes-and-chromosomes-aqa-alevel-biology', '3.4.1', [
      { n: 1, f: "Gene", b: "A base sequence of DNA that codes for the amino acid sequence of a polypeptide, or for a functional RNA (including ribosomal RNA and tRNAs).", src: DNA },
      { n: 2, f: "Three properties of the genetic code", b: "Universal: the same triplet codes for the same amino acid in all organisms.\nNon-overlapping: each base belongs to one triplet only.\nDegenerate: most amino acids are coded by more than one triplet." },
      { n: 3, f: "DNA in prokaryotes vs eukaryotes", b: "Prokaryotes: short, circular DNA not associated with proteins.\nEukaryotes: very long, linear DNA associated with histone proteins, forming chromosomes. DNA in mitochondria and chloroplasts is like prokaryotic DNA: short, circular, not associated with protein." },
      { n: 4, f: "Locus, introns and exons", b: "Locus: the fixed position of a gene on a DNA molecule. In eukaryotes much nuclear DNA does not code for polypeptides: genes contain introns (non-coding) separating exons (coding), and there are non-coding multiple repeats between genes." },
    ]),
    ...sub(T4, 'dna-and-protein-synthesis-aqa-alevel-biology', '3.4.2', [
      { n: 1, f: "Splicing of pre-mRNA in eukaryotes", b: "Transcription in the nucleus produces pre-mRNA. Introns (non-coding) are removed and exons joined to give mRNA, which leaves through a nuclear pore. Prokaryotes make mRNA directly, with no splicing." },
      { n: 2, f: "Genome and proteome", b: "Genome: the complete set of genes in a cell.\nProteome: the full range of proteins the cell is able to produce.", src: DNA },
      { n: 3, f: "Transcription in order", b: "DNA helicase breaks hydrogen bonds so the strands separate; free RNA nucleotides pair with complementary bases on the template strand; RNA polymerase joins them, forming pre-mRNA (in eukaryotes), which is then spliced to mRNA." },
      { n: 4, f: "Translation in order", b: "mRNA attaches to a ribosome. tRNA molecules, each carrying a specific amino acid, bind by their anticodons to complementary codons; peptide bonds form between adjacent amino acids, using ATP, until a stop codon is reached." },
    ]),
    ...sub(T4, 'genetic-diversity-mutation-and-meiosis-aqa-alevel-biology', '3.4.3', [
      { n: 1, f: "Base substitution compared with base deletion", b: "Substitution changes one triplet: no change (degenerate code), one amino acid changed, or an early stop codon.\nDeletion shifts the reading frame, changing every triplet after it." },
      { n: 2, f: "Non-disjunction", b: "Failure of chromosomes (or chromatids) to separate in meiosis, giving gametes with one extra or one missing chromosome.", src: MUT },
      { n: 3, f: "Two ways meiosis produces genetic variation", b: "Independent segregation: homologous chromosomes go to either pole at random in meiosis I.\nCrossing over: non-sister chromatids of homologous chromosomes exchange DNA at chiasmata." },
      { n: 4, f: "A species has 2n = 20. How many genetically different gametes can independent segregation give (no crossing over)?", b: "n = 10 homologous pairs, so 2¹⁰ = 1024. Use the number of pairs, not the diploid number." },
    ]),
    ...sub(T4, 'genetic-diversity-and-adaptation-aqa-alevel-biology', '3.4.4', [
      { n: 1, f: "Genetic diversity", b: "The number of different alleles of genes in a population.", src: GDNS },
      { n: 2, f: "Directional and stabilising selection", b: "Directional: one extreme phenotype is favoured and the mean shifts (example: antibiotic resistance).\nStabilising: phenotypes near the mean are favoured; the mean stays the same and the range narrows (example: human birth weight)." },
      { n: 3, f: "How does natural selection change allele frequency?", b: "Random mutation produces new alleles. If an allele gives an advantage, individuals carrying it are more likely to survive and reproduce, passing it on, so its frequency rises over many generations." },
      { n: 4, f: "Required practical 6: testing antimicrobial substances", b: "Spread bacteria on agar using aseptic technique; place paper discs soaked in different antimicrobial substances (and a control disc) on the plate; incubate; measure the clear zone of inhibition around each disc." },
    ]),
    ...sub(T4, 'species-and-taxonomy-aqa-alevel-biology', '3.4.5', [
      { n: 1, f: "Species, and the role of courtship behaviour", b: "A species is a group of organisms able to interbreed to produce fertile offspring. Courtship is species-specific, so it allows species recognition and is a necessary precursor to successful mating.", src: SPEC },
      { n: 2, f: "The taxonomic hierarchy", b: "Domain, kingdom, phylum, class, order, family, genus, species. Each species is named by the binomial system: genus then species, for example Homo sapiens." },
      { n: 3, f: "Phylogenetic classification", b: "Classification that groups organisms according to their evolutionary origins and relationships, often shown as a phylogenetic tree. Each group is placed within a larger group, with no overlap." },
    ]),
    ...sub(T4, 'biodiversity-within-a-community-aqa-alevel-biology', '3.4.6', [
      { n: 1, f: "Index of diversity", b: "d = N(N − 1) ÷ Σn(n − 1), where N is the total number of organisms of all species and n the number of one species. A higher d means more species and a more even spread.", src: BIOD },
      { n: 2, f: "Species richness", b: "The number of different species in a community. It does not take account of how many individuals of each species there are, unlike the index of diversity." },
      { n: 3, f: "How does farming reduce biodiversity?", b: "Removing hedgerows, growing monocultures, using pesticides and herbicides, and filling in ponds reduce the number of habitats and species. Conservation schemes, such as keeping field margins, balance this against food production." },
    ]),
    ...sub(T4, 'investigating-diversity-aqa-alevel-biology', '3.4.7', [
      { n: 1, f: "How can genetic diversity within or between species be compared?", b: "By comparing the frequency of measurable or observable characteristics, the base sequence of DNA, the base sequence of mRNA, or the amino acid sequence of the proteins encoded by DNA and mRNA." },
      { n: 2, f: "Why has gene technology changed how diversity is investigated?", b: "It allows direct comparison of DNA base sequences and of proteins, rather than inferring diversity only from observable characteristics, which can be affected by the environment and by several genes." },
      { n: 3, f: "Sampling for investigating diversity: random sampling, mean and standard deviation", b: "Random sampling avoids bias, and a large sample reduces the effect of chance. The mean summarises the sample; the standard deviation shows the spread of the data about the mean." },
    ]),

    // 5 Energy transfers in and between organisms
    ...sub(T5, 'photosynthesis-aqa-alevel-biology', '3.5.1', [
      { n: 1, f: "Light-dependent reaction: site, inputs and products", b: "Thylakoid membranes. Uses light, water, ADP, Pi and NADP; produces ATP, reduced NADP and oxygen." },
      { n: 2, f: "Photoionisation", b: "Light energy makes chlorophyll lose electrons, so the chlorophyll becomes ionised.", src: PHOTO },
      { n: 3, f: "Photolysis of water: equation and use of the products", b: "H₂O → 2H⁺ + 2e⁻ + ½O₂. Electrons replace those lost from chlorophyll; protons help reduce NADP; oxygen is released." },
      { n: 4, f: "Light-independent reaction (Calvin cycle) in three steps", b: "1 CO₂ + RuBP, catalysed by rubisco, gives two GP.\n2 GP is reduced to TP using ATP and reduced NADP.\n3 Most TP regenerates RuBP (using ATP); some makes glucose and other organic substances." },
    ]),
    ...sub(T5, 'respiration-aqa-alevel-biology', '3.5.2', [
      { n: 1, f: "Glycolysis: site and net products per glucose", b: "Cytoplasm. Glucose is phosphorylated, split into two triose phosphate and oxidised to 2 pyruvate. Net: 2 ATP (4 made, 2 used) and 2 reduced NAD." },
      { n: 2, f: "Link reaction: products per pyruvate", b: "In the mitochondrial matrix, pyruvate (3C) is oxidised to acetate, which combines with coenzyme A: 1 acetyl CoA, 1 CO₂ and 1 reduced NAD per pyruvate." },
      { n: 3, f: "Krebs cycle: products per turn", b: "1 ATP (substrate-level phosphorylation), 3 reduced NAD, 1 reduced FAD and 2 CO₂. Two turns per glucose." },
      { n: 4, f: "Oxidative phosphorylation", b: "Electrons from reduced NAD and FAD pass along the electron transfer chain, releasing energy that pumps protons into the intermembrane space. Protons flow back through ATP synthase, making ATP. Oxygen is the final electron acceptor, forming water." },
      { n: 5, f: "Lactate and ethanol pathways: why do they happen?", b: "To regenerate NAD from reduced NAD so glycolysis can continue.\nLactate: pyruvate + reduced NAD → lactate + NAD (no CO₂).\nEthanol: pyruvate → ethanal + CO₂; ethanal + reduced NAD → ethanol + NAD.", src: RESP },
    ]),
    ...sub(T5, 'energy-and-ecosystems-aqa-alevel-biology', '3.5.3', [
      { n: 1, f: "Net primary production", b: "NPP = GPP − R, where R is respiratory loss. NPP is the chemical energy store in plant biomass after respiratory losses.", src: ETP },
      { n: 2, f: "Net production of consumers", b: "N = I − (F + R). I: chemical energy in ingested food; F: energy lost in faeces and urine; R: respiratory losses.", src: ETP },
      { n: 3, f: "Gross primary production (GPP), and how biomass is measured", b: "GPP: the chemical energy store in plant biomass in a given area or volume. Biomass is measured as mass of carbon or dry mass of tissue per unit area; its chemical energy store can be found by calorimetry." },
    ]),
    ...sub(T5, 'nutrient-cycles-aqa-alevel-biology', '3.5.4', [
      { n: 1, f: "Ammonification, nitrification and denitrification", b: "Ammonification: saprobionts turn organic nitrogen compounds into ammonium ions.\nNitrification: ammonium → nitrite → nitrate (aerobic).\nDenitrification: nitrate → nitrogen gas (anaerobic).", src: NUT },
      { n: 2, f: "Role of mycorrhizae", b: "Associations between fungi and plant roots. The fungal hyphae increase the surface area for absorbing water and mineral ions, such as phosphate; the fungus receives carbohydrates from the plant." },
      { n: 3, f: "Leaching and eutrophication", b: "Leaching: water-soluble nutrients such as nitrates are washed out of soil into rivers. Eutrophication: algae grow rapidly and block light, plants below die, saprobionts decompose them using oxygen, and fish die from lack of oxygen." },
    ]),

    // 6 Organisms respond to changes in their internal and external environments
    ...sub(T6, 'stimuli-are-detected-and-lead-to-a-response-aqa-alevel-biology', '3.6.1', [
      { n: 1, f: "Taxis and kinesis", b: "Taxis: directional movement in response to the direction of a stimulus.\nKinesis: change in speed or rate of turning in response to stimulus intensity; random, not directional.", src: SURV },
      { n: 2, f: "How does IAA cause positive phototropism in a shoot?", b: "IAA moves to the shaded side, where it increases cell elongation, so the shaded side grows faster and the shoot bends towards the light. In roots, high IAA inhibits elongation." },
      { n: 3, f: "How does a Pacinian corpuscle produce a generator potential?", b: "Pressure deforms the lamellae and the neurone membrane, widening stretch-mediated sodium ion channels. Na⁺ diffuses in, depolarising the membrane. If threshold is reached, an action potential is sent." },
      { n: 4, f: "Rods and cones: sensitivity and visual acuity", b: "Rods: many share one bipolar neurone, so generator potentials summate; high sensitivity in dim light, low acuity.\nCones: one cone to one bipolar neurone; low sensitivity, high acuity, colour vision from three types." },
      { n: 5, f: "How is heart rate increased during exercise?", b: "Chemoreceptors detect a rise in CO₂ (fall in blood pH); the cardiac centre in the medulla oblongata sends more impulses along sympathetic neurones to the SAN, so heart rate rises. Parasympathetic impulses slow it." },
    ]),
    ...sub(T6, 'nervous-coordination-aqa-alevel-biology', '3.6.2', [
      { n: 1, f: "How is the resting potential maintained?", b: "The sodium–potassium pump moves 3 Na⁺ out and 2 K⁺ in using ATP. The membrane is more permeable to K⁺, which diffuses out. Inside is about −70 mV relative to outside." },
      { n: 2, f: "Ion movements in depolarisation and repolarisation", b: "Depolarisation: voltage-gated Na⁺ channels open and Na⁺ diffuses in; past threshold (about −55 mV) positive feedback opens more, to about +40 mV.\nRepolarisation: Na⁺ channels close, voltage-gated K⁺ channels open, K⁺ diffuses out." },
      { n: 3, f: "Three roles of the refractory period", b: "Keeps action potentials discrete (separate), makes them travel in one direction only, and limits the maximum frequency of impulses." },
      { n: 4, f: "Saltatory conduction", b: "In a myelinated axon, depolarisation occurs only at the nodes of Ranvier, so the action potential jumps from node to node, which is faster.", src: NERVE },
      { n: 5, f: "Role of calcium ions at a cholinergic synapse", b: "An action potential opens voltage-gated Ca²⁺ channels in the presynaptic knob. Ca²⁺ enters and causes vesicles to fuse with the membrane, releasing acetylcholine by exocytosis." },
    ]),
    ...sub(T6, 'skeletal-muscles-aqa-alevel-biology', '3.6.3', [
      { n: 1, f: "Roles of calcium ions and ATP in muscle contraction", b: "Ca²⁺ from the sarcoplasmic reticulum moves tropomyosin, exposing binding sites on actin for myosin heads. ATP detaches the head from actin, is hydrolysed to reset the head, and powers pumping of Ca²⁺ back." },
      { n: 2, f: "Structure of a sarcomere", b: "The unit between two Z-lines. Thick myosin filaments form the A-band; thin actin filaments form the I-band; the H-zone holds only myosin. On contraction, the I-band and H-zone shorten, the A-band stays the same length." },
      { n: 3, f: "Slow-twitch vs fast-twitch muscle fibres", b: "Slow-twitch: contract slowly, for endurance; many mitochondria, much myoglobin and many capillaries; aerobic respiration.\nFast-twitch: contract quickly and powerfully but tire quickly; more glycogen and phosphocreatine; anaerobic respiration." },
      { n: 4, f: "Role of phosphocreatine", b: "It is stored in muscle and gives its phosphate to ADP, regenerating ATP quickly during short bursts of intense activity." },
    ]),
    ...sub(T6, 'homeostasis-aqa-alevel-biology', '3.6.4', [
      { n: 1, f: "Second messenger model (adrenaline and glucagon)", b: "Hormone binds a surface receptor → adenylate cyclase activated → ATP converted to cyclic AMP (second messenger) → cAMP activates protein kinase → enzymes break down glycogen to glucose." },
      { n: 2, f: "Response to low blood water potential", b: "Osmoreceptors in the hypothalamus shrink; more ADH is released from the posterior pituitary. ADH makes the DCT and collecting duct insert more aquaporins, so more water is reabsorbed by osmosis: small volume of concentrated urine.", src: OSMO },
      { n: 3, f: "Glycogenesis, glycogenolysis and gluconeogenesis", b: "Glycogenesis: glucose → glycogen (stimulated by insulin).\nGlycogenolysis: glycogen → glucose (stimulated by glucagon and adrenaline).\nGluconeogenesis: glucose made from non-carbohydrates such as glycerol and amino acids (stimulated by glucagon)." },
      { n: 4, f: "Role of the loop of Henle", b: "The ascending limb actively transports Na⁺ and Cl⁻ out into the medulla, which lowers its water potential. Water leaves the descending limb and the collecting duct by osmosis, so it can be reabsorbed into the blood." },
    ]),

    // 7 Genetics, populations, evolution and ecosystems
    ...sub(T7, 'inheritance-aqa-alevel-biology', '3.7.1', [
      { n: 1, f: "Genotype and phenotype", b: "Genotype: the genetic constitution of an organism.\nPhenotype: the expression of this genetic constitution and its interaction with the environment.", src: INH },
      { n: 2, f: "Codominance, with the ABO example", b: "Both alleles are expressed in the heterozygote. Iᴬ and Iᴮ are codominant, and i is recessive to both, so IᴬIᴮ is group AB and group O is always ii." },
      { n: 3, f: "Why are X-linked recessive conditions more common in males?", b: "Males (XY) have only one X chromosome, so a single recessive allele on it is always expressed. Females need two copies." },
      { n: 4, f: "Autosomal linkage", b: "Genes on the same autosome are inherited together unless crossing over separates them. A test cross gives two large parental classes and two small recombinant classes.", src: INH },
      { n: 5, f: "Epistasis, and the ratios it gives from AaBb × AaBb", b: "An allele at one locus masks or suppresses expression of alleles at another locus. Recessive epistasis gives 9 : 3 : 4; dominant epistasis gives 12 : 3 : 1.", src: INH },
      { n: 6, f: "Chi-squared test: formula, degrees of freedom and decision", b: "χ² = Σ(O − E)² ÷ E. Degrees of freedom = number of classes − 1. If χ² is below the critical value at p = 0.05 (3.84 for 1 df), the difference is not significant and is probably due to chance." },
    ]),
    ...sub(T7, 'populations-aqa-alevel-biology', '3.7.2', [
      { n: 1, f: "Hardy–Weinberg equations and conditions", b: "p + q = 1 and p² + 2pq + q² = 1 (p² homozygous dominant, 2pq heterozygous, q² homozygous recessive). Valid for a large population with random mating and no mutation, migration or selection.", src: POP },
      { n: 2, f: "A recessive condition affects 81 in 10 000 people. What proportion are carriers?", b: "q² = 0.0081, so q = 0.09 and p = 0.91. Carriers: 2pq = 2 × 0.91 × 0.09 = 0.1638 (1638 per 10 000)." },
      { n: 3, f: "Population, gene pool and allele frequency", b: "Population: all the organisms of one species in one area at the same time, able to interbreed. Gene pool: all the alleles of all the genes in a population. Allele frequency: how often an allele occurs in the gene pool." },
    ]),
    ...sub(T7, 'evolution-may-lead-to-speciation-aqa-alevel-biology', '3.7.3', [
      { n: 1, f: "Allopatric and sympatric speciation", b: "Allopatric: a geographical barrier separates populations.\nSympatric: no geographical barrier; reproductive isolation arises in the same area.\nEither way gene pools diverge until they cannot interbreed to give fertile offspring." },
      { n: 2, f: "Genetic drift", b: "Chance change in allele frequency, with no direction; important in small populations.", src: POP },
      { n: 3, f: "Disruptive selection", b: "Both extreme phenotypes are favoured over the intermediate, so the population may split into two groups; it can lead to speciation." },
      { n: 4, f: "How does reproductive isolation lead to a new species?", b: "Separated populations experience different mutations, selection pressures and genetic drift, so their allele frequencies change until they can no longer interbreed to produce fertile offspring." },
    ]),
    ...sub(T7, 'populations-in-ecosystems-aqa-alevel-biology', '3.7.4', [
      { n: 1, f: "Mark-release-recapture: 36 animals marked; a second sample of 40 contains 9 marked. Estimate the population.", b: "N = (n₁ × n₂) ÷ m = (36 × 40) ÷ 9 = 160." },
      { n: 2, f: "Why does one community replace another during succession?", b: "Each stage changes the abiotic environment (soil depth, water, nutrients, light), making it less hostile and suitable for new species, which may out-compete the earlier ones. It ends in a relatively stable climax community.", src: ECO },
      { n: 3, f: "Community, ecosystem and niche", b: "Community: all the populations of different species in one area at the same time. Ecosystem: a community and the non-living components of its environment. Niche: the role of a species in its habitat; no two species occupy exactly the same niche." },
      { n: 4, f: "Carrying capacity, and what limits it", b: "The maximum population size an ecosystem can support. It is limited by abiotic factors (such as light and temperature) and biotic factors (interspecific and intraspecific competition, and predation)." },
    ]),

    // 8 The control of gene expression
    ...sub(T8, 'alteration-of-the-base-sequence-can-alter-protein-structure-aqa-alevel-biology', '3.8.1', [
      { n: 1, f: "Which gene mutations cause a frame shift?", b: "Additions, deletions and duplications, unless the number of bases is a multiple of three. Substitutions and inversions do not change the reading frame." },
      { n: 2, f: "Types of gene mutation", b: "Addition, deletion, substitution, inversion, duplication and translocation of bases. Mutations arise spontaneously during DNA replication; the rate is increased by mutagenic agents such as ionising radiation and some chemicals." },
      { n: 3, f: "Why may a base substitution not change the polypeptide?", b: "The genetic code is degenerate, so the new triplet may code for the same amino acid. Even if the amino acid changes, it may not affect the tertiary structure or function of the protein." },
    ]),
    ...sub(T8, 'gene-expression-is-controlled-by-a-number-of-features-aqa-alevel-biology', '3.8.2', [
      { n: 1, f: "Totipotent and pluripotent cells", b: "Totipotent: can divide and produce any type of body cell (early mammalian embryo, for a limited time).\nPluripotent: found in embryos; can form many cell types and divide without limit.", src: GMSC },
      { n: 2, f: "Multipotent and unipotent cells", b: "Both found in mature mammals.\nMultipotent: form a limited number of cell types.\nUnipotent: form one cell type, for example cardiomyocytes.", src: GMSC },
      { n: 3, f: "Induced pluripotent stem (iPS) cells", b: "Made from adult somatic cells (such as skin cells) treated with protein transcription factors, which switch on genes that give pluripotency.", src: GMSC },
      { n: 4, f: "How does oestrogen stimulate transcription of a target gene?", b: "Lipid-soluble oestrogen diffuses into the cell and binds a receptor in the cytoplasm. The hormone–receptor complex acts as a transcription factor: it enters the nucleus, binds a specific base sequence near the gene, and RNA polymerase can bind." },
      { n: 5, f: "Epigenetics: methylation and acetylation", b: "Heritable changes in gene function without changes to the base sequence. Increased DNA methylation and decreased histone acetylation both pack DNA more tightly, inhibiting transcription.", src: REG },
      { n: 6, f: "RNA interference (RNAi)", b: "Small RNA (siRNA) in a protein complex pairs with an mRNA of complementary base sequence; the mRNA is hydrolysed, so it is not translated. The gene is still transcribed." },
      { n: 7, f: "Oncogenes and tumour suppressor genes in cancer", b: "Oncogene: a mutated or over-expressed proto-oncogene that stimulates continuous division (hypomethylation can raise expression).\nTumour suppressor gene: loses function, e.g. by mutation or hypermethylation, so division is no longer slowed." },
    ]),
    ...sub(T8, 'using-genome-projects-aqa-alevel-biology', '3.8.3', [
      { n: 1, f: "What do genome projects do?", b: "They sequence the whole genome (the complete set of bases in the DNA) of an organism, using automated sequencing methods." },
      { n: 2, f: "Why is the proteome easier to work out for prokaryotes than for eukaryotes?", b: "Prokaryotes have simple genomes with little non-coding DNA, so the proteome can be worked out from the genome. In complex eukaryotes non-coding DNA and regulatory genes make it hard to translate the genome into the proteome." },
      { n: 3, f: "Uses of determining the proteome of a pathogen", b: "Identifying the antigens of a pathogen helps in developing vaccines." },
    ]),
    ...sub(T8, 'gene-technologies-aqa-alevel-biology', '3.8.4', [
      { n: 1, f: "PCR: the three temperature stages", b: "Denature at about 95 °C (strands separate). Anneal at about 50–65 °C (primers bind). Extend at about 72 °C (Taq polymerase builds new strands). Each cycle doubles the DNA." },
      { n: 2, f: "How is cDNA made, and why is it useful?", b: "Reverse transcriptase makes single-stranded cDNA from mRNA; DNA polymerase makes the second strand. The mRNA has no introns, so bacteria can express the gene." },
      { n: 3, f: "DNA probe", b: "A short, single-stranded, labelled (radioactive or fluorescent) piece of DNA complementary to a target allele. It hybridises only where the complementary sequence is present." },
      { n: 4, f: "Genetic fingerprinting: what VNTRs are and how fragments are separated", b: "VNTRs are short sequences repeated in a row; the number of repeats varies between people. In gel electrophoresis DNA (negatively charged) moves to the positive electrode; shorter fragments move further." },
    ]),
  ],
};
