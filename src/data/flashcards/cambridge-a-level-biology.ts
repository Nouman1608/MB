/**
 * D-438 -- flashcards for Cambridge International AS & A Level Biology 9700
 * (for examination in 2025, 2026 and 2027).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   9700 is not tiered (AS = topics 1-11, A Level = all 19), so no card is upper tier.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9700); origin 'revision-notes'.
 *
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

const T1 = 'cell-structure-cambridge-alevel-biology';
const T2 = 'biological-molecules-cambridge-alevel-biology';
const T3 = 'enzymes-cambridge-alevel-biology';
const T4 = 'cell-membranes-and-transport-cambridge-alevel-biology';
const T5 = 'the-mitotic-cell-cycle-cambridge-alevel-biology';
const T6 = 'nucleic-acids-and-protein-synthesis-cambridge-alevel';
const T7 = 'transport-in-plants-cambridge-alevel-biology';
const T8 = 'transport-in-mammals-cambridge-alevel-biology';
const T9 = 'gas-exchange-cambridge-alevel-biology';
const T10 = 'infectious-diseases-cambridge-alevel-biology';
const T11 = 'immunity-cambridge-alevel-biology';
const T12 = 'energy-and-respiration-cambridge-alevel-biology';
const T13 = 'photosynthesis-cambridge-alevel-biology';
const T14 = 'homeostasis-cambridge-alevel-biology';
const T15 = 'control-and-coordination-cambridge-alevel-biology';
const T16 = 'inheritance-cambridge-alevel-biology';
const T17 = 'selection-and-evolution-cambridge-alevel-biology';
const T18 = 'classification-biodiversity-and-conservation-cambridge';
const T19 = 'genetic-technology-cambridge-alevel-biology';

const MIC = 'a-level-biology-9700-the-microscope-in-cell-studies-revision-notes';
const CELL = 'a-level-biology-9700-cells-as-the-basic-units-of-living-organisms-revision-notes';
const PROT = 'a-level-biology-9700-proteins-revision-notes';
const MOA = 'a-level-biology-9700-mode-of-action-of-enzymes-revision-notes';
const MEM = 'a-level-biology-9700-cell-membranes-and-transport-revision-notes';
const MIT = 'a-level-biology-9700-the-mitotic-cell-cycle-revision-notes';
const MAMM = 'a-level-biology-9700-transport-in-mammals-revision-notes';
const IMM = 'a-level-biology-9700-immunity-revision-notes';
const RESP = 'a-level-biology-9700-energy-and-respiration-revision-notes';
const PHOTO = 'a-level-biology-9700-photosynthesis-revision-notes';

export const DECK_CAMBRIDGE_A_LEVEL_BIOLOGY: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'a-level',
  subjectSlug: 'biology',
  syllabusCode: '9700',
  syllabusSeries: 'For examination in 2025, 2026 and 2027',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // 1 Cell structure
    ...sub(T1, 'the-microscope-in-cell-studies-cambridge-alevel-biology', '1.1', [
      { n: 1, f: 'Magnification', b: 'How many times larger the image is than the actual size of the object. Magnification = image size ÷ actual size. It has no unit (write ×8000).', src: MIC },
      { n: 2, f: 'Resolution', b: 'The ability to distinguish two points that are close together as separate. It is not "how clear the image is".', src: MIC },
      { n: 3, f: 'Unit conversions for cell measurements', b: '1 mm = 1000 µm\n1 µm = 1000 nm\n1 mm = 1 000 000 nm\nConvert both measurements to the same unit before dividing.' },
      { n: 4, f: 'A nucleus on a TEM micrograph at ×14 000 measures 84 mm. What is its actual size?', b: '84 mm = 84 000 µm.\nActual size = image size ÷ magnification = 84 000 ÷ 14 000 = 6 µm.' },
      { n: 5, f: 'How do you calibrate an eyepiece graticule?', b: 'Put a stage micrometer (a scale of known length) on the stage and line up the two scales. Find where lines coincide exactly, far along. One eyepiece unit = micrometer length ÷ number of eyepiece units. Recalibrate after changing the objective.', src: MIC },
      { n: 6, f: 'Why do electron microscopes have a much better resolution than light microscopes?', b: 'Resolution is limited by wavelength. An electron beam has a much shorter wavelength than light, so points much closer together can be distinguished. Light microscope limit: about 200 nm.' },
      { n: 7, f: 'TEM vs SEM', b: 'TEM: the beam passes through an ultra-thin section; 2-D image of internal structure; highest resolution.\nSEM: the beam scans the surface; 3-D image of the surface.\nBoth: dead specimens in a vacuum, black-and-white images.' },
      { n: 8, f: 'Rules for a plan diagram compared with a high-power drawing', b: 'Plan diagram (low power): outlines of tissue layers in correct proportions, no individual cells.\nHigh-power drawing: individual cells, only visible contents, two lines for each cell wall, no shading, ruled label lines.' },
    ]),
    ...sub(T1, 'cells-as-the-basic-units-of-living-organisms-cambridge', '1.2', [
      { n: 1, f: 'Organelles surrounded by two membranes (an envelope)', b: 'Nucleus (nuclear envelope with pores), mitochondria and chloroplasts.', src: CELL },
      { n: 2, f: 'Cell structures with a single membrane', b: 'Cell surface membrane, RER, SER, Golgi body, lysosomes, vesicles and the tonoplast.', src: CELL },
      { n: 3, f: 'Cell structures with no membrane', b: 'Ribosomes, nucleolus, centrioles, microtubules and the cell wall.', src: CELL },
      { n: 4, f: 'Functions of the RER, SER and Golgi body', b: 'RER: transports proteins made on its ribosomes.\nSER: makes lipids, including steroids.\nGolgi body: modifies and packages proteins; makes lysosomes.' },
      { n: 5, f: 'Cilia vs microvilli', b: 'Cilia: long, with a 9 + 2 arrangement of microtubules and a basal body; they beat to move fluid or mucus.\nMicrovilli: short folds of the cell surface membrane with no microtubule core; they increase surface area for absorption.' },
      { n: 6, f: 'Ribosomes in prokaryotic and eukaryotic cells', b: 'Prokaryotes: 70S only.\nEukaryotes: 80S in the cytoplasm and on the RER; 70S inside mitochondria and chloroplasts.' },
      { n: 7, f: 'Structural features of a typical bacterium', b: 'Unicellular, generally 1–5 µm across, peptidoglycan cell wall, circular DNA free in the cytoplasm, 70S ribosomes, no double-membrane organelles.' },
      { n: 8, f: 'Structure of a virus', b: 'Non-cellular. A nucleic acid core (DNA or RNA) inside a protein capsid. Some have an outer envelope of phospholipids.' },
      { n: 9, f: 'Why is "a bacterium has no organelles" wrong?', b: 'A bacterium has ribosomes. It lacks a nucleus and double-membrane organelles such as mitochondria.' },
    ]),

    // 2 Biological molecules
    ...sub(T2, 'testing-for-biological-molecules-cambridge-alevel', '2.1', [
      { n: 1, f: "Benedict's test: what it detects, method and positive result", b: "Reducing sugars (glucose, fructose, maltose). Add an equal volume of Benedict's solution and heat in a water bath near boiling. Positive: green → yellow → orange → brick-red precipitate. Negative: stays blue." },
      { n: 2, f: 'Iodine test for starch', b: 'Add a few drops of iodine in potassium iodide solution; no heating. Positive: blue-black. Negative: stays orange-brown.' },
      { n: 3, f: 'Emulsion test for lipids', b: 'Shake the sample with ethanol, then pour into water. Positive: a cloudy white emulsion (lipid comes out of solution as tiny droplets). Ethanol must come first.' },
      { n: 4, f: 'Biuret test for proteins', b: 'Add biuret reagent (or potassium hydroxide then dilute copper sulfate); no heating. Positive: purple (lilac). Negative: stays blue. It detects peptide bonds.' },
      { n: 5, f: 'Test for a non-reducing sugar', b: "Benedict's first: stays blue. Boil a fresh sample with dilute HCl (hydrolyses glycosidic bonds). Cool, neutralise with sodium hydrogencarbonate. Benedict's again: a colour change to green–brick-red shows a non-reducing sugar." },
      { n: 6, f: "How can a Benedict's test estimate the concentration of a reducing sugar?", b: 'Make at least five known concentrations; use the same volumes, Benedict\'s in excess, one water bath. Use the time to first colour change (graph) or colour standards, then compare the unknown. Shorter time = higher concentration.' },
      { n: 7, f: 'Convert 0.30 mol dm⁻³ glucose to % (w/v)', b: '0.30 × 180 = 54 g dm⁻³.\n54 ÷ 10 = 5.4 % (w/v), since 1 % (w/v) = 1 g in 100 cm³.' },
    ]),
    ...sub(T2, 'carbohydrates-and-lipids-cambridge-alevel-biology', '2.2', [
      { n: 1, f: 'α-glucose vs β-glucose', b: 'They differ at carbon 1. α-glucose: the OH on C1 is below the ring. β-glucose: the OH on C1 is above the ring.' },
      { n: 2, f: 'Glycosidic bond formation and breakage', b: 'Formed by condensation (a water molecule is removed) between two sugars. Broken by hydrolysis (water is added). Maltose = α-glucose + α-glucose (α-1,4); sucrose = α-glucose + fructose.' },
      { n: 3, f: 'Amylose vs amylopectin vs glycogen', b: 'All α-glucose.\nAmylose: unbranched helix, α-1,4 only.\nAmylopectin: branched, α-1,4 and α-1,6.\nGlycogen: like amylopectin but more branched and compact; the animal and fungal store.' },
      { n: 4, f: 'Why are starch and glycogen good energy stores?', b: 'Compact, so much glucose in a small space. Insoluble, so no effect on water potential. Branches give many chain ends for enzymes to release glucose quickly.' },
      { n: 5, f: 'How does the structure of cellulose suit it to the cell wall?', b: 'β-glucose units, alternate ones rotated 180°, give straight chains. Parallel chains are linked by many hydrogen bonds into microfibrils and fibres, giving high tensile strength so the wall resists bursting.' },
      { n: 6, f: 'Structure of a triglyceride', b: 'One glycerol + three fatty acids joined by three ester bonds, formed by condensation (releasing 3 H₂O). Non-polar, hydrophobic and insoluble in water. It is not a polymer.' },
      { n: 7, f: 'Saturated vs unsaturated fatty acid', b: 'Saturated: no C=C double bonds, straight chain.\nUnsaturated: one or more C=C double bonds, each causing a kink.' },
      { n: 8, f: 'Phospholipid structure', b: 'Glycerol + two fatty acids (ester bonds) + a phosphate group. The phosphate head is charged, polar and hydrophilic; the fatty acid tails are non-polar and hydrophobic.' },
    ]),
    ...sub(T2, 'proteins-cambridge-alevel-biology', '2.3', [
      { n: 1, f: 'General structure of an amino acid', b: 'A central carbon bonded to an amine group (–NH₂), a carboxyl group (–COOH), a hydrogen atom and an R group. Only the R group differs between amino acids.' },
      { n: 2, f: 'α-helix', b: 'Secondary structure: the N–H of one amino acid hydrogen bonds to the C=O of the amino acid four places earlier; R groups point outwards.', src: PROT },
      { n: 3, f: 'Secondary vs tertiary structure', b: 'Secondary uses hydrogen bonds between backbone C=O and N–H only. Tertiary uses interactions between R groups (hydrophobic interactions, hydrogen bonds, ionic bonds, disulfide bonds).', src: PROT },
      { n: 4, f: 'Disulfide bond vs hydrogen bond in a protein', b: 'A disulfide bond is covalent and forms only between the sulfur atoms of two cysteine R groups. Hydrogen bonds are weak and form between many polar groups.', src: PROT },
      { n: 5, f: 'Structure of haemoglobin', b: 'Globular protein with quaternary structure: two α-globin and two β-globin chains. Each chain has a haem group with Fe²⁺, so up to 4 O₂ per molecule. Hydrophilic R groups outside make it soluble.' },
      { n: 6, f: 'How does the structure of collagen give it high tensile strength?', b: 'Three helical chains wound into a triple helix (glycine every third position). Molecules lie parallel with staggered ends, linked by covalent cross-links, forming fibrils and fibres.' },
      { n: 7, f: 'How many peptide bonds are in a protein of two chains of 50 and 30 amino acids?', b: '(50 − 1) + (30 − 1) = 78 peptide bonds. Count each chain separately.', src: PROT },
    ]),
    ...sub(T2, 'water-cambridge-alevel-biology', '2.4', [
      { n: 1, f: 'Why is water polar, and how do hydrogen bonds form between water molecules?', b: 'Oxygen attracts electrons more strongly than hydrogen, so O is δ− and each H is δ+ (bent molecule). A hydrogen bond is the weak attraction between a δ+ H of one molecule and the δ− O of another.' },
      { n: 2, f: 'Solvent action of water: explanation and roles', b: 'Polar water molecules surround ions and form hydrogen bonds with polar molecules, so they dissolve. Roles: transport in blood plasma, xylem and phloem; medium for metabolic reactions.' },
      { n: 3, f: 'Specific heat capacity', b: 'The energy needed to raise the temperature of 1 kg (or 1 g) of a substance by 1 °C. About 4.2 kJ kg⁻¹ °C⁻¹ for water.' },
      { n: 4, f: "Why does water's high specific heat capacity matter to organisms?", b: 'Energy is used to break hydrogen bonds before the molecules move faster, so water changes temperature slowly. Aquatic habitats and bodies stay stable, keeping enzymes near their optimum.' },
      { n: 5, f: 'Latent heat of vaporisation and its role', b: 'The energy needed to change a liquid into vapour without a change in temperature. Water needs a lot, because hydrogen bonds must break, so evaporating sweat or transpiration removes much heat for little water.' },
    ]),

    // 3 Enzymes
    ...sub(T3, 'mode-of-action-of-enzymes-cambridge-alevel-biology', '3.1', [
      { n: 1, f: 'Intracellular vs extracellular enzyme, with examples', b: 'Decided by where the enzyme acts. Intracellular: inside the cell that made it (catalase, DNA polymerase). Extracellular: secreted to act outside (amylase).', src: MOA },
      { n: 2, f: 'Active site', b: 'The region of the enzyme where the substrate binds. Its shape and R groups are complementary (not "the same") to the substrate.' },
      { n: 3, f: 'How does an enzyme speed up a reaction?', b: 'The substrate binds to the active site, forming an enzyme–substrate complex. This lowers the activation energy. The overall energy change of the reaction is unchanged, and the enzyme is not used up.' },
      { n: 4, f: 'Lock-and-key vs induced fit', b: 'Lock-and-key: a rigid active site exactly complementary to the substrate.\nInduced fit: the active site changes shape slightly as the substrate binds, moulding around it and straining its bonds.' },
      { n: 5, f: 'How is catalase activity followed, and how is amylase activity followed?', b: 'Catalase: rate of product formation, the volume of O₂ collected (gas syringe).\nAmylase: rate of substrate disappearance, the time until iodine stays orange-brown (no starch).', src: MOA },
      { n: 6, f: 'Initial rate vs mean rate', b: 'Initial rate: the gradient of a tangent to the progress curve at t = 0.\nMean rate: change ÷ time over an interval.', src: MOA },
      { n: 7, f: 'Using a colorimeter for an enzyme reaction', b: 'Use a filter of the complementary colour, zero with a blank, make a calibration curve of absorbance against known concentrations, then sample the reaction at set times and convert absorbance to concentration.' },
    ]),
    ...sub(T3, 'factors-that-affect-enzyme-action-cambridge-alevel', '3.2', [
      { n: 1, f: 'Explain the effect of increasing temperature on enzyme activity', b: 'Up to the optimum: more kinetic energy, more collisions, more E–S complexes. Above it: hydrogen and ionic bonds break, the active site changes shape and is no longer complementary; the enzyme is denatured.' },
      { n: 2, f: 'Why does pH affect enzyme activity?', b: 'H⁺ concentration changes the charges on R groups, disrupting ionic and hydrogen bonds, so the shape and charges of the active site change. Buffers keep pH constant.' },
      { n: 3, f: 'Why does rate level off at high substrate concentration?', b: 'All active sites are occupied (saturated), so enzyme concentration is limiting. The enzyme is not used up. The maximum rate is Vmax.' },
      { n: 4, f: 'Km: definition and meaning', b: 'The substrate concentration at which rate = ½Vmax. A low Km means high affinity for the substrate; a high Km means low affinity. Km is a concentration, not a rate.' },
      { n: 5, f: 'Competitive vs non-competitive inhibitor: effect on Vmax and Km', b: 'Competitive: binds the active site; Vmax unchanged, Km increased; overcome by more substrate.\nNon-competitive: binds elsewhere, changing the active site shape; Vmax lowered, Km unchanged.' },
      { n: 6, f: 'How are enzymes immobilised in alginate?', b: 'Mix enzyme with sodium alginate solution and drip it from a syringe into calcium chloride solution. Calcium alginate beads form with the enzyme trapped inside; rinse with distilled water.' },
      { n: 7, f: 'Advantages of immobilised enzymes', b: 'Product not contaminated with enzyme; enzyme recovered and reused (so cheaper); more stable over a wider range of temperature and pH; allows a continuous process in a column.' },
    ]),

    // 4 Cell membranes and transport
    ...sub(T4, 'fluid-mosaic-membranes-cambridge-alevel-biology', '4.1', [
      { n: 1, f: 'Fluid mosaic model', b: 'A phospholipid bilayer in which molecules move sideways (fluid), with proteins scattered through it (mosaic).', src: MEM },
      { n: 2, f: 'Role of cholesterol in a membrane', b: 'Sits between phospholipids in both layers. It regulates fluidity, adds stability and reduces permeability to ions and polar molecules.' },
      { n: 3, f: 'Glycoprotein vs glycolipid', b: 'Carbohydrate chain attached to a protein vs to a lipid. Both face outwards and act in cell recognition (as antigens) and stability.', src: MEM },
      { n: 4, f: 'Ligand', b: 'A signalling chemical that binds to a specific receptor.', src: MEM },
      { n: 5, f: 'Outline cell signalling across a membrane', b: 'The signalling cell secretes a ligand, which is transported (for example in blood) to target cells. It binds to a complementary cell surface receptor, and a specific response follows. Cells without the receptor do not respond.' },
      { n: 6, f: 'Channel protein vs carrier protein', b: 'A channel protein is a fixed, water-filled pore. A carrier protein binds the substance and changes shape to move it across.', src: MEM },
    ]),
    ...sub(T4, 'movement-into-and-out-of-cells-cambridge-alevel', '4.2', [
      { n: 1, f: 'Diffusion', b: 'The net movement of molecules or ions from a region of higher concentration to a region of lower concentration, by random movement.', src: MEM },
      { n: 2, f: 'Osmosis', b: 'The net movement of water from a region of higher water potential to a region of lower water potential, through a partially permeable membrane.', src: MEM },
      { n: 3, f: 'Active transport', b: 'Movement of molecules or ions against a concentration gradient through carrier proteins, using energy from ATP.', src: MEM },
      { n: 4, f: 'Facilitated diffusion vs active transport', b: 'Both use membrane proteins. Only active transport uses ATP and moves substances against a concentration gradient.', src: MEM },
      { n: 5, f: 'Water potential rules', b: 'Pure water = 0 kPa, the highest value. Solutes lower ψ, so solutions are negative. Water moves from less negative to more negative ψ (−200 kPa is higher than −800 kPa).' },
      { n: 6, f: 'Plant and animal cells in a solution of lower water potential', b: 'Animal cell: loses water, shrinks (crenated).\nPlant cell: loses water, plasmolysed; the protoplast pulls away from the wall.\n(In higher ψ: animal cell may burst; plant cell becomes turgid.)' },
      { n: 7, f: 'Why does a larger object rely less on diffusion alone?', b: 'Larger objects have a smaller surface area to volume ratio, so diffusion reaches a smaller fraction of their volume. Write SA:V as n : 1.' },
      { n: 8, f: 'Finding the water potential of a plant tissue', b: 'Weigh equal tissue pieces, immerse in a range of sucrose concentrations for a fixed time, reweigh. Plot percentage change in mass against concentration; at 0 % change the tissue ψ equals the solution ψ.' },
    ]),

    // 5 The mitotic cell cycle
    ...sub(T5, 'replication-and-division-of-nuclei-and-cells-cambridge', '5.1', [
      { n: 1, f: 'Centromere vs telomere', b: 'Centromere: the region joining sister chromatids, where spindle fibres attach.\nTelomeres: repeated non-coding sequences at the ends of chromosomes.', src: MIT },
      { n: 2, f: 'Phases of the cell cycle and what happens to DNA', b: 'G1: growth, protein and organelle synthesis (DNA = x).\nS: DNA replication (x → 2x).\nG2: further growth, preparation for division (2x).\nMitosis: nuclear division. Cytokinesis: the cytoplasm divides (x in each cell).' },
      { n: 3, f: 'Why are telomeres needed?', b: 'Each DNA replication cannot copy the very end of the molecule, so a short piece is lost from each end every cycle. The piece lost is non-coding telomere, so genes are not lost.' },
      { n: 4, f: 'Stem cell', b: 'An unspecialised cell that divides by mitosis and gives rise to cells that can differentiate. Role: replacing short-lived cells (blood cells from bone marrow) and repairing tissue (skin).', src: MIT },
      { n: 5, f: 'How does a tumour form?', b: 'A mutation in a gene that controls cell division means the cell no longer stops dividing. Repeated, uncontrolled mitosis produces a mass of cells, all carrying the mutation: a tumour.' },
      { n: 6, f: 'Why are the daughter cells of mitosis genetically identical?', b: 'DNA is copied exactly in S phase, then each daughter nucleus receives one chromatid of every chromosome. Needed for growth, replacement, repair and asexual reproduction.' },
    ]),
    ...sub(T5, 'chromosome-behaviour-in-mitosis-cambridge-alevel', '5.2', [
      { n: 1, f: 'Prophase', b: 'Chromosomes condense and become visible, each as two chromatids. The nucleolus disappears, the spindle forms and the nuclear envelope breaks down.' },
      { n: 2, f: 'Metaphase', b: 'Chromosomes line up on the equator of the spindle, with spindle fibres attached at the centromeres.' },
      { n: 3, f: 'Anaphase', b: 'Centromeres divide and sister chromatids are pulled to opposite poles, centromere first, as the spindle fibres shorten.' },
      { n: 4, f: 'Telophase and cytokinesis', b: 'Telophase: chromosomes reach the poles and uncoil; nuclear envelopes re-form; the spindle breaks down.\nCytokinesis: animal cells pinch in; plant cells form a cell plate and new cell wall.' },
      { n: 5, f: 'Mitosis in plant cells vs animal cells', b: 'Plant cells have no centrioles but still form a spindle. Cytokinesis in plants is by a cell plate from vesicles, not by the membrane pinching in.' },
      { n: 6, f: 'How do you find the time a cell spends in one stage of mitosis?', b: 'Time in stage = (cells in that stage ÷ total cells counted) × length of the cell cycle. Assume cells divide at random times. Example: 45 of 900 cells in a 16 h cycle → 0.05 × 16 h = 0.8 h = 48 min.' },
    ]),

    // 6 Nucleic acids and protein synthesis
    ...sub(T6, 'structure-of-nucleic-acids-and-replication-of-dna-cambridge', '6.1', [
      { n: 1, f: 'Nucleotide, and how ATP differs', b: 'A nucleotide is a pentose sugar, a phosphate group and a nitrogenous base. ATP is a phosphorylated nucleotide: adenine, ribose and three phosphate groups.' },
      { n: 2, f: 'Purines vs pyrimidines', b: 'Purines are double-ring bases: adenine and guanine.\nPyrimidines are single-ring bases: cytosine, thymine and uracil.' },
      { n: 3, f: 'Base pairing in DNA', b: 'A pairs with T (2 hydrogen bonds); C pairs with G (3 hydrogen bonds). So in double-stranded DNA, %A = %T and %C = %G.' },
      { n: 4, f: 'Phosphodiester bond and antiparallel strands', b: 'A phosphodiester bond joins the phosphate of one nucleotide to the sugar of the next (condensation). Antiparallel: the strands run in opposite directions, one 5′ → 3′, the other 3′ → 5′.' },
      { n: 5, f: 'Semi-conservative replication: the steps', b: 'Hydrogen bonds break and both strands act as templates. Free nucleotides pair with exposed bases. DNA polymerase forms phosphodiester bonds, adding only to the 3′ end. Lagging-strand fragments are joined by DNA ligase. Each new molecule has one old and one new strand.' },
      { n: 6, f: 'Why is one strand made in fragments during replication?', b: 'DNA polymerase adds nucleotides only in the 5′ → 3′ direction. The leading strand is made continuously; the lagging strand is made in fragments, which DNA ligase joins.' },
      { n: 7, f: 'DNA has 24% cytosine. What are the percentages of the other bases?', b: 'G = 24% (pairs with C). A + T = 100 − 48 = 52%, so A = 26% and T = 26%.' },
    ]),
    ...sub(T6, 'protein-synthesis-cambridge-alevel-biology', '6.2', [
      { n: 1, f: 'Outline transcription', b: 'In the nucleus the gene unwinds and hydrogen bonds break. RNA polymerase uses the template strand; RNA nucleotides pair (A–U, T–A, C–G, G–C) and are joined by phosphodiester bonds. Introns are removed and exons joined to form mRNA, which leaves through a nuclear pore.' },
      { n: 2, f: 'Outline translation', b: 'mRNA binds to a ribosome. tRNA with an anticodon complementary to each codon brings a specific amino acid. Peptide bonds form between adjacent amino acids as the ribosome moves along one codon at a time, until a stop codon is reached.' },
      { n: 3, f: 'Codon vs anticodon', b: 'Codon: three bases on mRNA coding for one amino acid.\nAnticodon: three bases on tRNA, complementary to the codon.' },
      { n: 4, f: 'Start and stop codons (mRNA)', b: 'Start: AUG, which also codes for methionine.\nStop: UAA, UAG and UGA.' },
      { n: 5, f: 'Intron vs exon', b: 'Introns are non-coding sequences removed from the primary transcript. Exons are coding sequences joined to form mRNA.' },
      { n: 6, f: 'Substitution vs deletion of one base pair', b: 'Substitution affects at most one codon: same amino acid, a different amino acid or an early stop codon.\nDeletion causes a frame shift: every codon after it is read differently.' },
      { n: 7, f: 'How many mRNA nucleotides code for a 210-amino-acid polypeptide?', b: '210 codons + 1 stop codon = 211 codons. 211 × 3 = 633 nucleotides.' },
    ]),

    // 7 Transport in plants
    ...sub(T7, 'structure-of-transport-tissues-cambridge-alevel-biology', '7.1', [
      { n: 1, f: 'Position of xylem and phloem in a dicot stem, root and leaf', b: 'Stem: bundles in a ring; xylem on the inner side, phloem on the outer side.\nRoot: xylem in a central star or cross; phloem between its arms.\nLeaf midrib: xylem towards the upper surface, phloem towards the lower.' },
      { n: 2, f: 'How is a xylem vessel element adapted to its function?', b: 'Dead, empty lumen: low resistance to flow. No end walls: continuous water column. Lignified walls: resist collapse under tension, waterproof. Pits: water moves sideways.' },
      { n: 3, f: 'How is a sieve tube element adapted to its function?', b: 'No nucleus, few organelles and peripheral cytoplasm give a clear lumen for mass flow. Sieve plates let sap flow between elements.' },
      { n: 4, f: 'Role of the companion cell', b: 'It has a nucleus and dense cytoplasm and carries out metabolism for the sieve tube element. Many mitochondria provide ATP for proton pumps; plasmodesmata link it to the sieve tube.' },
      { n: 5, f: 'Xylem vs phloem', b: 'Xylem: dead, lignified; carries water and mineral ions; upwards only.\nPhloem: living, with sieve plates; carries assimilates; from source to sink, in either direction.' },
    ]),
    ...sub(T7, 'transport-mechanisms-cambridge-alevel-biology', '7.2', [
      { n: 1, f: 'Transpiration', b: 'Evaporation of water from the internal surfaces of leaves, followed by diffusion of water vapour to the atmosphere (through the stomata).' },
      { n: 2, f: 'Apoplast vs symplast pathway', b: 'Apoplast: water moves through cellulose cell walls and intercellular spaces.\nSymplast: water moves through cytoplasm, cell to cell via plasmodesmata.\nOnly the apoplast is blocked by the Casparian strip.' },
      { n: 3, f: 'Casparian strip', b: 'A band of waterproof suberin in the walls of endodermal cells. It blocks the apoplast, so water must enter the symplast (cross a membrane) to reach the xylem. It is not lignin.' },
      { n: 4, f: 'Cohesion vs adhesion in the xylem', b: 'Cohesion: hydrogen bonding between water molecules, so the column is pulled up as a whole under tension.\nAdhesion: hydrogen bonding between water and cellulose in the walls.' },
      { n: 5, f: 'How is sucrose loaded into phloem?', b: 'Proton pumps in companion cells use ATP to pump H⁺ out. H⁺ diffuse back in through cotransporter proteins, carrying sucrose. Sucrose passes into the sieve tube through plasmodesmata.' },
      { n: 6, f: 'Mass flow in phloem', b: 'Loading sucrose at the source lowers water potential; water enters by osmosis, raising hydrostatic pressure. At the sink sucrose is removed, water leaves and pressure falls. Sap moves down the hydrostatic pressure gradient.' },
      { n: 7, f: 'Xerophyte adaptations and how each reduces water loss', b: 'Rolled leaves, sunken stomata and hairs trap humid air, lowering the water vapour potential gradient. A thick waxy cuticle reduces evaporation through the epidermis. Few stomata reduce the area for diffusion.' },
    ]),

    // 8 Transport in mammals
    ...sub(T8, 'the-circulatory-system-cambridge-alevel-biology', '8.1', [
      { n: 1, f: 'Closed double circulation', b: 'Closed: blood stays inside vessels. Double: blood passes through the heart twice per complete circuit (pulmonary + systemic).', src: MAMM },
      { n: 2, f: 'Which vessels carry blood to and from the lungs, and is it oxygenated?', b: 'Pulmonary artery: deoxygenated blood, right ventricle → lungs.\nPulmonary vein: oxygenated blood, lungs → left atrium.' },
      { n: 3, f: 'Elastic artery vs muscular artery', b: 'Elastic artery: many elastic fibres; stretches as blood surges in and recoils between beats, smoothing pressure.\nMuscular artery: thick smooth muscle; constricts or dilates to control flow to organs.' },
      { n: 4, f: 'How are veins and capillaries suited to their functions?', b: 'Veins: thin wall, wide lumen, valves to stop backflow at low pressure.\nCapillaries: wall one endothelial cell thick (short diffusion distance), with gaps that let plasma out to form tissue fluid.' },
      { n: 5, f: 'Tissue fluid', b: 'Fluid that leaks from capillaries and bathes cells; it supplies oxygen and nutrients and removes carbon dioxide and waste.', src: MAMM },
      { n: 6, f: 'How is tissue fluid formed and returned?', b: 'Arterial end: high hydrostatic pressure forces plasma out through gaps between endothelial cells; cells and most proteins stay in. Venous end: lower pressure, and plasma proteins keep blood ψ lower, so water returns by osmosis. Excess drains into lymph.' },
    ]),
    ...sub(T8, 'transport-of-oxygen-and-carbon-dioxide-cambridge', '8.2', [
      { n: 1, f: 'How is carbon dioxide carried from respiring tissues?', b: 'Mostly as hydrogencarbonate ions in plasma. CO₂ diffuses into red blood cells; carbonic anhydrase speeds formation of carbonic acid, which dissociates to H⁺ + HCO₃⁻; HCO₃⁻ diffuses out. Some binds haemoglobin (carbaminohaemoglobin); a little dissolves in plasma.' },
      { n: 2, f: 'Chloride shift', b: 'As HCO₃⁻ diffuses out of the red blood cell into the plasma, Cl⁻ moves in to balance the charges, so HCO₃⁻ removal can continue.' },
      { n: 3, f: 'Haemoglobinic acid vs carbaminohaemoglobin', b: 'Haemoglobinic acid: haemoglobin + H⁺ (buffers blood pH and makes oxyhaemoglobin release O₂).\nCarbaminohaemoglobin: haemoglobin + CO₂.' },
      { n: 4, f: 'Why is the oxygen dissociation curve S-shaped?', b: 'The first O₂ binds with difficulty; haemoglobin then changes shape so the next O₂ molecules bind more easily; the curve flattens near full saturation. In tissues (low pO₂) a small drop in pO₂ releases much O₂.' },
      { n: 5, f: 'Bohr shift', b: 'High pCO₂ → more H⁺ → haemoglobin\'s affinity for O₂ falls → the curve shifts right → more O₂ is unloaded in active tissues.' },
      { n: 6, f: 'Blood can carry 20.0 cm³ O₂ per 100 cm³. Saturation is 96% in the lungs and 60% in a tissue. How much O₂ is released?', b: '20.0 × (0.96 − 0.60) = 7.2 cm³ per 100 cm³ of blood.' },
    ]),
    ...sub(T8, 'the-heart-cambridge-alevel-biology', '8.3', [
      { n: 1, f: 'Atrioventricular and semilunar valves', b: 'Atrioventricular: tricuspid (right), bicuspid or mitral (left), held by tendons attached to papillary muscles.\nSemilunar: at the base of the aorta and pulmonary artery.', src: MAMM },
      { n: 2, f: 'Why is the left ventricle wall thicker than the right?', b: 'The left ventricle pumps blood around the whole body against greater resistance; the right pumps only to the nearby lungs at lower pressure.' },
      { n: 3, f: 'When do the AV valves and the semilunar valves close?', b: 'AV valves close when ventricular pressure rises above atrial pressure (stopping backflow into the atria). Semilunar valves close when arterial pressure rises above ventricular pressure.' },
      { n: 4, f: 'Initiation and control of the heartbeat', b: 'The SAN (pacemaker, wall of the right atrium) sends excitation across both atria, which contract. A non-conducting layer blocks direct spread; the AVN delays it; Purkyne tissue carries it down the septum, so the ventricles contract from the base upwards.' },
      { n: 5, f: 'Why does the AVN delay the impulse?', b: 'So the atria finish contracting and emptying into the ventricles before the ventricles contract.' },
      { n: 6, f: 'Heart rate from a pressure trace', b: 'Heart rate = 60 ÷ length of one cardiac cycle in seconds. For example, a cycle of 0.8 s gives 75 beats per minute.' },
    ]),

    // 9 Gas exchange
    ...sub(T9, 'the-gas-exchange-system-cambridge-alevel-biology', '9.1', [
      { n: 1, f: 'How does cartilage differ in the trachea, bronchi and bronchioles?', b: 'Trachea: C-shaped rings. Bronchi: irregular plates. Bronchioles: none. Cartilage keeps the airways open so they do not collapse.' },
      { n: 2, f: 'Role of goblet cells and cilia', b: 'Goblet cells (and mucous glands) secrete mucus, which traps dust, pollen and pathogens. Cilia beat to move the mucus up to the throat, where it is swallowed. Cilia do not trap anything.' },
      { n: 3, f: 'Smooth muscle vs elastic fibres in the gas exchange system', b: 'Smooth muscle contracts to narrow and relaxes to widen bronchi and bronchioles, controlling airflow. Elastic fibres stretch as alveoli fill and recoil to help expel air; they are not muscle.' },
      { n: 4, f: 'How do you identify a bronchiole in a micrograph?', b: 'No cartilage visible, a ring of smooth muscle and a folded lining of ciliated epithelium.' },
      { n: 5, f: 'Why is gas exchange in the alveoli efficient?', b: 'Large surface area; short diffusion distance (squamous epithelium + capillary endothelium); narrow capillaries; steep gradients kept by blood flow and breathing; moist surface.' },
      { n: 6, f: 'Path of oxygen from alveolus to blood', b: 'Alveolar air → alveolar wall (squamous epithelium) → capillary wall → plasma → red blood cell, where it binds haemoglobin. By diffusion down a partial pressure gradient.' },
    ]),

    // 10 Infectious diseases
    ...sub(T10, 'infectious-diseases-detail-cambridge-alevel-biology', '10.1', [
      { n: 1, f: 'Pathogen and infectious disease', b: 'Pathogen: an organism or virus that causes disease.\nInfectious disease: a disease caused by a pathogen that is transmissible from one host to another.' },
      { n: 2, f: 'Cholera: pathogen and transmission', b: 'Vibrio cholerae, a bacterium. Faecal–oral: water or food contaminated with faeces from an infected person. A toxin makes chloride ions and water leave the gut lining, causing severe watery diarrhoea.' },
      { n: 3, f: 'Malaria: pathogen and transmission', b: 'Plasmodium (P. falciparum, P. malariae, P. ovale, P. vivax), a protoctist. Vector: the female Anopheles mosquito during a blood meal; also blood transfusion, shared needles and across the placenta.' },
      { n: 4, f: 'TB: pathogens and transmission', b: 'Mycobacterium tuberculosis: airborne droplets from coughs and sneezes.\nMycobacterium bovis: unpasteurised milk or undercooked meat from infected cattle.' },
      { n: 5, f: 'HIV/AIDS: pathogen, transmission and effect', b: 'Human immunodeficiency virus. Spread in body fluids: unprotected sex, shared needles, unscreened blood, mother to child. It destroys T-helper lymphocytes, so the immune system fails (AIDS) and opportunistic infections take hold.' },
      { n: 6, f: 'Why is malaria hard to control?', b: 'Mosquitoes become resistant to insecticides and Plasmodium to drugs; the parasite hides inside liver and red blood cells; there are social (nets not used) and economic (cost of nets, sprays and drugs) limits.' },
    ]),
    ...sub(T10, 'antibiotics-cambridge-alevel-biology', '10.2', [
      { n: 1, f: 'Antibiotic', b: 'A substance that kills bacteria or stops their growth, with little or no harm to human cells.' },
      { n: 2, f: 'How does penicillin kill bacteria?', b: 'It inhibits the enzymes (transpeptidases) that form peptide cross-links in the peptidoglycan wall of growing bacteria. The wall weakens, water enters by osmosis and the cell bursts (osmotic lysis).' },
      { n: 3, f: 'Why do antibiotics not affect viruses?', b: 'Viruses have no peptidoglycan cell wall, no ribosomes and no metabolism of their own; they replicate inside host cells using host enzymes, so there is nothing to target.' },
      { n: 4, f: 'How does antibiotic resistance spread in a bacterial population?', b: 'A random mutation gives a resistance allele. The antibiotic kills susceptible bacteria (selection pressure); resistant ones survive and divide. The allele passes to offspring (vertical) and on plasmids to other bacteria (horizontal).' },
      { n: 5, f: 'Ways to reduce the impact of antibiotic resistance', b: 'Prescribe only when needed (never for viral infections); use narrow-spectrum drugs after testing; complete the course; rotate antibiotics; reduce use in farming; better hospital hygiene.' },
    ]),

    // 11 Immunity
    ...sub(T11, 'the-immune-system-cambridge-alevel-biology', '11.1', [
      { n: 1, f: 'Antigen, and self vs non-self', b: 'An antigen is a molecule (usually a protein or glycoprotein) recognised by the immune system that stimulates an immune response. Self antigens are on your own cells and normally trigger no response; non-self antigens do.' },
      { n: 2, f: 'Steps of phagocytosis', b: 'Chemotaxis → receptors bind the pathogen → the membrane engulfs it (endocytosis) into a phagocytic vacuole → lysosomes fuse and release hydrolytic enzymes → the pathogen is digested.' },
      { n: 3, f: 'Neutrophils vs macrophages', b: 'Neutrophils: lobed nucleus, short-lived, first to arrive; engulf and digest.\nMacrophages: develop from monocytes in tissues, long-lived; engulf and digest, and present antigens to lymphocytes.' },
      { n: 4, f: 'T-helper cell vs T-killer cell', b: 'T-helper: binds presented antigen, divides and releases cytokines that activate B-cells and T-killer cells.\nT-killer: binds to infected body cells showing the antigen and kills them.\nNeither makes antibodies.', src: IMM },
      { n: 5, f: 'Clonal selection and clonal expansion', b: 'Clonal selection: only lymphocytes with receptors complementary to the antigen are activated.\nClonal expansion: the selected lymphocytes divide by mitosis to form a clone.' },
      { n: 6, f: 'Primary vs secondary immune response', b: 'Primary: first exposure; few matching lymphocytes; delay of several days; low antibody peak; usually symptoms.\nSecondary: many memory cells; short delay; much higher peak; pathogen usually destroyed before symptoms.' },
      { n: 7, f: 'Plasma cell', b: 'A cell formed from a B-lymphocyte, with lots of rough ER and Golgi, that secretes antibodies. Short-lived, unlike memory cells.', src: IMM },
    ]),
    ...sub(T11, 'antibodies-and-vaccination-cambridge-alevel-biology', '11.2', [
      { n: 1, f: 'Structure of an antibody', b: 'Two heavy and two light polypeptide chains joined by disulfide bonds (Y shape). Variable regions form two antigen-binding sites complementary to one antigen; a hinge gives flexibility; the constant region binds receptors on phagocytes.' },
      { n: 2, f: 'Ways antibodies help destroy pathogens', b: 'Agglutination (two binding sites clump pathogens); neutralising toxins; blocking the sites viruses use to enter cells; marking pathogens for phagocytes via the constant region.' },
      { n: 3, f: 'How are monoclonal antibodies made?', b: 'Inject a mouse with the antigen; remove its antibody-making B-lymphocytes; fuse them with myeloma cells to form hybridoma cells; select the hybridoma making the required antibody and clone it. Myeloma cells let the hybrid divide indefinitely.' },
      { n: 4, f: 'Principle of using monoclonal antibodies in diagnosis and treatment', b: 'Diagnosis: an antibody carrying a marker binds only where its antigen is (for example hCG in pregnancy tests).\nTreatment: it binds a specific antigen on target cells, blocking a receptor, marking cells or delivering a drug.' },
      { n: 5, f: 'Active vs passive immunity, natural vs artificial', b: 'Active (own antibodies and memory cells, long-term): natural = infection; artificial = vaccination.\nPassive (antibodies from outside, no memory, short-term): natural = placenta or breast milk; artificial = antibody injection.' },
      { n: 6, f: 'Vaccine and herd immunity', b: 'A vaccine contains antigens and causes a primary response without disease, producing memory cells. Herd immunity: so many people are immune that transmission breaks down, protecting unvaccinated people too.' },
    ]),

    // 12 Energy and respiration
    ...sub(T12, 'energy-cambridge-alevel-biology', '12.1', [
      { n: 1, f: 'Why is ATP the universal energy currency?', b: 'Hydrolysis to ADP + Pi is a single quick step releasing energy in small, usable amounts. ATP is small and soluble, so it moves easily, is quickly regenerated, and is found in all cells.' },
      { n: 2, f: 'Substrate-linked phosphorylation vs chemiosmosis', b: 'Substrate-linked: a phosphate is transferred directly from a substrate to ADP (glycolysis, Krebs cycle).\nChemiosmosis: protons diffuse through ATP synthase down a gradient (inner mitochondrial membrane, thylakoid membranes).', src: RESP },
      { n: 3, f: 'Energy per gram of respiratory substrates', b: 'Carbohydrate: about 16 kJ g⁻¹. Protein: about 17 kJ g⁻¹. Lipid: about 39 kJ g⁻¹. Lipids have more hydrogen atoms per gram, so more reduced NAD and FAD, more protons and more ATP.' },
      { n: 4, f: 'Respiratory quotient (RQ), and typical values', b: 'RQ = CO₂ produced ÷ O₂ taken in. Carbohydrate 1.0; protein about 0.9; lipid about 0.7. Glucose: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O, so RQ = 6 ÷ 6 = 1.0.' },
      { n: 5, f: 'Finding RQ with a respirometer', b: 'With KOH (absorbs CO₂): movement x = O₂ uptake. With water: movement y = O₂ uptake − CO₂ output. CO₂ output = x − y, so RQ = (x − y) ÷ x. Control: glass beads of equal volume.' },
      { n: 6, f: 'An RQ between 0.7 and 1.0 suggests…', b: 'A mixture of lipid and carbohydrate is being respired. A very high RQ points to some anaerobic respiration.', src: RESP },
    ]),
    ...sub(T12, 'respiration-cambridge-alevel-biology', '12.2', [
      { n: 1, f: 'Sites of the four stages of aerobic respiration', b: 'Glycolysis: cytoplasm.\nLink reaction and Krebs cycle: mitochondrial matrix.\nOxidative phosphorylation: inner mitochondrial membrane.' },
      { n: 2, f: 'Glycolysis: outline and products per glucose', b: 'Glucose (6C) is phosphorylated to fructose 1,6-bisphosphate, which splits into two triose phosphate (3C), then oxidised to two pyruvate (3C). Net 2 ATP and 2 reduced NAD.' },
      { n: 3, f: 'Link reaction', b: 'In the matrix, pyruvate (3C) is decarboxylated and dehydrogenated to a 2C acetyl group, which combines with coenzyme A to form acetyl coenzyme A. Per glucose: 2 CO₂ and 2 reduced NAD.' },
      { n: 4, f: 'Krebs cycle: outline and products per glucose', b: 'The acetyl group (2C) joins oxaloacetate (4C) to form citrate (6C), which is converted back to oxaloacetate by decarboxylation and dehydrogenation. Per glucose (two turns): 4 CO₂, 6 reduced NAD, 2 reduced FAD, 2 ATP.' },
      { n: 5, f: 'Decarboxylation vs dehydrogenation', b: 'Decarboxylation: removing CO₂.\nDehydrogenation: removing hydrogen, which reduces NAD or FAD.', src: RESP },
      { n: 6, f: 'Oxidative phosphorylation', b: 'Reduced NAD and FAD release hydrogen, which splits into protons and electrons. Electrons pass along the electron transport chain, releasing energy that pumps protons into the intermembrane space. Protons return by facilitated diffusion through ATP synthase, making ATP. Oxygen is the final electron acceptor, forming water.' },
      { n: 7, f: 'Anaerobic respiration in mammals vs yeast', b: 'Mammals: pyruvate → lactate; no CO₂.\nYeast: pyruvate → ethanal + CO₂, then ethanal → ethanol.\nBoth oxidise reduced NAD so glycolysis can continue; net 2 ATP per glucose.' },
      { n: 8, f: 'Three adaptations of rice for growing with its roots in water', b: 'Aerenchyma in roots lets oxygen diffuse to root cells; ethanol fermentation in roots, with tolerance of ethanol; faster stem growth keeps leaves above rising water.' },
      { n: 9, f: 'Using DCPIP or methylene blue to measure respiration rate in yeast', b: 'The dye turns from blue to colourless when reduced by hydrogen removed by dehydrogenases. Rate = 1 ÷ time to decolourise. Control: boiled yeast. Do not shake: oxygen re-oxidises the dye.', src: RESP },
    ]),

    // 13 Photosynthesis
    ...sub(T13, 'photosynthesis-as-an-energy-transfer-process-cambridge', '13.1', [
      { n: 1, f: 'Sites of the two stages of photosynthesis in the chloroplast', b: 'Light-dependent stage: thylakoid membranes (stacked into grana), with a large surface area for pigments, electron carriers and ATP synthase.\nLight-independent stage (Calvin cycle): the stroma, which contains rubisco.' },
      { n: 2, f: 'Photosynthetic pigments and their roles', b: 'Chlorophyll a: main pigment; emits electrons when photoactivated.\nChlorophyll b, carotene and xanthophyll: accessory pigments that pass absorbed energy to chlorophyll a.' },
      { n: 3, f: 'Absorption spectrum vs action spectrum', b: 'Absorption spectrum: light absorbed by a pigment against wavelength.\nAction spectrum: rate of photosynthesis against wavelength.', src: PHOTO },
      { n: 4, f: 'Rf value in chromatography of pigments', b: 'Rf = distance moved by the pigment ÷ distance moved by the solvent front, measured from the origin to the centre of the spot. It has no units.' },
      { n: 5, f: 'Cyclic vs non-cyclic photophosphorylation', b: 'Cyclic: PSI only; electrons return to PSI; makes ATP only.\nNon-cyclic: PSII and PSI; photolysis of water; makes ATP and reduced NADP and releases O₂.', src: PHOTO },
      { n: 6, f: 'Photolysis of water', b: '2H₂O → 4H⁺ + 4e⁻ + O₂, catalysed by the oxygen-evolving complex of PSII. The electrons replace those lost from PSII.' },
      { n: 7, f: 'Chemiosmosis in the chloroplast', b: 'Energy from electrons passing along the electron transport chain moves protons from the stroma into the thylakoid space. They return to the stroma by facilitated diffusion through ATP synthase, making ATP.' },
      { n: 8, f: 'The three stages of the Calvin cycle', b: 'Fixation: CO₂ + RuBP (5C) → 2 GP (3C), catalysed by rubisco.\nReduction: GP → triose phosphate (TP), using reduced NADP and ATP.\nRegeneration: TP → RuBP, using ATP.' },
      { n: 9, f: 'What happens to GP and RuBP if light intensity is reduced?', b: 'GP rises and RuBP falls. Less ATP and reduced NADP, so GP is not reduced to TP and RuBP is not regenerated, while fixation continues for a while.' },
    ]),
    ...sub(T13, 'investigation-of-limiting-factors-cambridge-alevel', '13.2', [
      { n: 1, f: 'Limiting factor: how to read it from a graph', b: 'On the rising part of the curve, the factor on the x-axis is limiting. On the plateau another factor is limiting; a higher plateau when CO₂ or temperature is raised shows that factor was limiting.' },
      { n: 2, f: 'Which stage does each limiting factor mainly affect?', b: 'Light intensity: light-dependent stage (less ATP and reduced NADP).\nCO₂ concentration: light-independent stage (less fixation by rubisco).\nTemperature: light-independent stage (enzymes such as rubisco).' },
      { n: 3, f: 'Using DCPIP with a chloroplast suspension', b: 'DCPIP (or methylene blue) turns from blue to colourless when reduced by electrons from the light-dependent stage. Rate = 1 ÷ time to decolourise. Controls: a dark tube and a tube without chloroplasts.' },
      { n: 4, f: 'Investigating the effect of light intensity on an aquatic plant', b: 'Pondweed in sodium hydrogencarbonate solution in a water bath, with a heat shield. Change lamp distance, acclimatise, collect gas over a fixed time (capillary tube or gas syringe), repeat and find mean rates.' },
      { n: 5, f: 'Why is oxygen collected from a whole plant a net rate?', b: 'Some of the oxygen produced is used in the plant\'s own respiration, so the true rate of photosynthesis is higher than the rate measured.' },
      { n: 6, f: 'Why must light intensity be checked when using coloured filters?', b: 'Filters change light intensity as well as wavelength, so intensity must be measured (light meter) and made equal before comparing wavelengths.' },
    ]),

    // 14 Homeostasis
    ...sub(T14, 'homeostasis-in-mammals-cambridge-alevel-biology', '14.1', [
      { n: 1, f: 'Homeostasis and negative feedback', b: 'Homeostasis: keeping the internal environment constant, within narrow limits, despite changes.\nNegative feedback: a change triggers a response that reverses it, returning the variable towards the set point.' },
      { n: 2, f: 'Deamination', b: 'Removal of the amino group from excess amino acids in the liver, producing urea.' },
      { n: 3, f: 'How does ultrafiltration happen in the glomerulus?', b: 'The afferent arteriole is wider than the efferent, giving high hydrostatic pressure. Fluid is forced through endothelial pores, the basement membrane (the filter) and podocyte slits. Blood cells and most plasma proteins stay in the blood.' },
      { n: 4, f: 'Selective reabsorption of glucose in the PCT', b: 'Na⁺–K⁺ pumps on the basal membrane move Na⁺ out of the cell (ATP). Na⁺ enters from the filtrate by co-transport with glucose. Glucose leaves the basal side by facilitated diffusion into the blood. Water follows by osmosis.' },
      { n: 5, f: 'How does ADH respond to a fall in blood water potential?', b: 'Osmoreceptors in the hypothalamus are stimulated; more ADH is released from the posterior pituitary. Vesicles with aquaporins fuse with collecting duct membranes, so more water is reabsorbed by osmosis: a small volume of concentrated urine.' },
      { n: 6, f: 'How does glucagon cause glucose release from a liver cell?', b: 'Glucagon binds its receptor → G-protein activated → adenylyl cyclase makes cAMP (second messenger) from ATP → protein kinase A starts an enzyme cascade (amplification) → glycogen phosphorylase breaks glycogen to glucose.' },
      { n: 7, f: 'Insulin vs glucagon', b: 'Insulin: β cells; released when blood glucose rises; acts on muscle and liver; more GLUT4 in muscle membranes, glycogenesis.\nGlucagon: α cells; released when glucose falls; acts on liver only; glycogenolysis and gluconeogenesis.' },
      { n: 8, f: 'Glycogenesis vs glycogenolysis vs gluconeogenesis', b: 'Glycogenesis: making glycogen from glucose.\nGlycogenolysis: breaking glycogen down to glucose.\nGluconeogenesis: making new glucose from non-carbohydrates.' },
      { n: 9, f: 'Glucose test strip vs biosensor', b: 'Test strip: enzymes and a chromogen on a pad; colour compared with a chart; semi-quantitative.\nBiosensor: glucose oxidase immobilised on an electrode; produces a current and a digital reading of the present blood concentration.' },
    ]),
    ...sub(T14, 'homeostasis-in-plants-cambridge-alevel-biology', '14.2', [
      { n: 1, f: 'The stomatal trade-off', b: 'Open stomata allow CO₂ uptake by diffusion for photosynthesis; closed stomata reduce water loss by transpiration. They open in light and low leaf CO₂ and close in the dark and under water stress.' },
      { n: 2, f: 'How do stomata open?', b: 'Proton pumps (ATP) pump H⁺ out of guard cells; K⁺ channels open and K⁺ diffuses in. Water potential falls and water enters by osmosis. The turgid guard cells bend, because of their uneven walls, and the stoma opens.' },
      { n: 3, f: 'How does abscisic acid (ABA) close stomata?', b: 'Under water stress ABA binds receptors on guard cell membranes. Ca²⁺ enters as a second messenger and proton pumps are inhibited. K⁺ and anions leave, water potential rises, water leaves by osmosis, and the flaccid guard cells close the stoma.' },
      { n: 4, f: 'Features of guard cells', b: 'Thick inner wall next to the pore and thin outer wall; radial cellulose microfibrils; proton pumps, K⁺ channels, chloroplasts and mitochondria.' },
    ]),

    // 15 Control and coordination
    ...sub(T15, 'control-and-coordination-in-mammals-cambridge', '15.1', [
      { n: 1, f: 'Nervous vs endocrine communication', b: 'Nervous: action potentials along neurones; fast, short-lived, localised.\nEndocrine: hormones from ductless glands carried in blood; slower, longer-lasting, often widespread.' },
      { n: 2, f: 'Resting potential: value and how it is maintained', b: 'About −70 mV, inside negative. The Na⁺–K⁺ pump moves 3 Na⁺ out and 2 K⁺ in; K⁺ diffuses out through leak channels more than Na⁺ leaks in.' },
      { n: 3, f: 'Ion movements during an action potential', b: 'Depolarisation: voltage-gated Na⁺ channels open, Na⁺ in (to about +40 mV).\nRepolarisation: Na⁺ channels close, voltage-gated K⁺ channels open, K⁺ out.\nHyperpolarisation: K⁺ channels slow to close.' },
      { n: 4, f: 'Roles of the refractory period', b: 'Keeps action potentials discrete, makes them travel in one direction only, and sets the maximum frequency (1 ÷ refractory period in seconds).' },
      { n: 5, f: 'Saltatory conduction', b: 'Myelin from Schwann cells insulates the axon, so depolarisation happens only at nodes of Ranvier. Local circuits stretch between nodes and the action potential jumps from node to node, so conduction is faster.' },
      { n: 6, f: 'Transmission at a cholinergic synapse', b: 'Action potential → voltage-gated Ca²⁺ channels open → Ca²⁺ in → vesicles release ACh by exocytosis → ACh binds receptors → ligand-gated Na⁺ channels open → depolarisation. Acetylcholinesterase hydrolyses ACh; choline is recycled.' },
      { n: 7, f: 'Which bands shorten when a sarcomere contracts?', b: 'The sarcomere (Z line to Z line), I band and H zone shorten. The A band and the lengths of the actin and myosin filaments stay the same.' },
      { n: 8, f: 'Sliding filament mechanism', b: 'Ca²⁺ binds troponin, which moves tropomyosin to expose binding sites on actin. Myosin heads bind (cross-bridges), release ADP + Pi and pull actin (power stroke). ATP binds to detach the head, and its hydrolysis re-cocks it.' },
      { n: 9, f: 'Troponin vs tropomyosin', b: 'Troponin binds Ca²⁺. Tropomyosin blocks the myosin-binding sites on actin until troponin changes shape and moves it.' },
    ]),
    ...sub(T15, 'control-and-coordination-in-plants-cambridge', '15.2', [
      { n: 1, f: 'How does a Venus fly trap close?', b: 'Bending sensory hairs causes receptor potentials; repeated stimulation within a short time triggers an action potential across the lobes. A rapid change in cell turgor flips the lobes from convex to concave, closing the trap.' },
      { n: 2, f: 'How does auxin cause cell elongation?', b: 'Auxin stimulates proton pumps, so H⁺ is pumped into the cell wall and acidifies it. Expansins loosen the cellulose; water enters by osmosis and the cell elongates.' },
      { n: 3, f: 'Role of gibberellin in seed germination', b: 'The embryo releases gibberellin, which acts on the aleurone layer: DELLA proteins are broken down, the amylase gene is transcribed, and amylase hydrolyses starch in the endosperm to maltose for the embryo.' },
      { n: 4, f: 'Auxin vs gibberellin', b: 'Auxin: elongation by acid loosening of cell walls.\nGibberellin: germination (and stem elongation) by removing DELLA proteins so genes are transcribed.' },
    ]),

    // 16 Inheritance
    ...sub(T16, 'passage-of-information-from-parents-to-offspring-cambridge', '16.1', [
      { n: 1, f: 'Haploid, diploid and homologous pair', b: 'Haploid (n): one set of chromosomes. Diploid (2n): two sets, one from each parent. Homologous pair: one maternal and one paternal chromosome with the same genes at the same loci; alleles may differ.' },
      { n: 2, f: 'Why must gametes be haploid?', b: 'So that fertilisation restores the diploid number instead of doubling the chromosome number each generation.' },
      { n: 3, f: 'Anaphase I vs anaphase II', b: 'Anaphase I: homologous chromosomes move to opposite poles; centromeres stay intact.\nAnaphase II: centromeres divide and sister chromatids move to opposite poles.' },
      { n: 4, f: 'Three sources of genetic variation in sexual reproduction', b: 'Crossing over between non-sister chromatids in prophase I; random orientation (independent assortment) of homologous pairs in metaphase I and of chromatids in metaphase II; random fertilisation.' },
      { n: 5, f: 'How many chromosome combinations can independent assortment give?', b: '2ⁿ, where n is the number of homologous pairs. For humans (n = 23), 2²³ ≈ 8.4 million.' },
    ]),
    ...sub(T16, 'the-roles-of-genes-in-determining-the-phenotype-cambridge', '16.2', [
      { n: 1, f: 'Gene vs allele', b: 'Gene: a length of DNA at a locus coding for a polypeptide.\nAllele: one version of that gene.' },
      { n: 2, f: 'Dominant vs codominant alleles', b: 'A dominant allele masks the other allele in a heterozygote. Codominant alleles are both expressed in the heterozygote (for example HbA and HbS).' },
      { n: 3, f: 'Expected phenotype ratios: monohybrid and dihybrid crosses', b: 'Aa × Aa: 3 : 1 (1 : 2 : 1 with codominance).\nAa × aa: 1 : 1.\nAaBb × AaBb (unlinked): 9 : 3 : 3 : 1.\nAaBb × aabb (unlinked): 1 : 1 : 1 : 1.' },
      { n: 4, f: 'Autosomal linkage vs epistasis', b: 'Linkage: two genes on the same autosome are inherited together, so parental classes are in excess and recombinants few.\nEpistasis: one gene affects the expression of another, modifying the ratio.' },
      { n: 5, f: 'Chi-squared test: steps', b: 'Null hypothesis: no significant difference between observed and expected. χ² = Σ (O − E)² ÷ E. Degrees of freedom = classes − 1. Compare with the critical value at p = 0.05 (1 df 3.84; 2 df 5.99; 3 df 7.82). Below it: not significant.' },
      { n: 6, f: 'How does the TYR gene affect phenotype?', b: 'TYR codes for tyrosinase, which converts tyrosine to melanin. A faulty allele gives albinism (little or no melanin); autosomal recessive.' },
      { n: 7, f: 'How does the Le/le gene affect stem height in peas?', b: 'Le codes for a functional enzyme that makes active gibberellin (GA₁ from GA₂₀). le codes for a non-functional enzyme, so lele plants have little active gibberellin, little stem elongation and are dwarf.' },
      { n: 8, f: 'Inheritance of haemophilia and Huntington\'s disease', b: 'Haemophilia (F8, factor VIII): X-linked recessive.\nHuntington\'s disease (HTT, huntingtin): autosomal dominant, caused by an expanded CAG repeat.' },
    ]),
    ...sub(T16, 'gene-control-cambridge-alevel-biology', '16.3', [
      { n: 1, f: 'Structural gene vs regulatory gene', b: 'Structural gene: codes for a protein used in the cell, such as an enzyme.\nRegulatory gene: codes for a protein that controls other genes, such as the lac repressor.' },
      { n: 2, f: 'Inducible vs repressible enzyme', b: 'Inducible: made only when its substrate is present (β-galactosidase).\nRepressible: production stops when its product builds up (tryptophan synthesis enzymes).' },
      { n: 3, f: 'The lac operon when lactose is absent', b: 'The repressor protein (from lacI) binds to the operator, blocking RNA polymerase, so lacZ, lacY and lacA are not transcribed.' },
      { n: 4, f: 'The lac operon when lactose is present', b: 'Lactose (as allolactose) binds to the repressor, which changes shape and leaves the operator. RNA polymerase transcribes lacZ, lacY and lacA: β-galactosidase, lactose permease and transacetylase are made.' },
      { n: 5, f: 'Transcription factor', b: 'A protein that binds to DNA and increases or decreases the rate of transcription of a gene (in eukaryotes).' },
      { n: 6, f: 'How does gibberellin switch on growth genes?', b: 'DELLA proteins bind transcription factors and stop them promoting transcription. Gibberellin binds its receptor, causing DELLA proteins to be broken down; the transcription factors are released and transcription of growth genes increases.' },
    ]),

    // 17 Selection and evolution
    ...sub(T17, 'variation-cambridge-alevel-biology', '17.1', [
      { n: 1, f: 'Discontinuous vs continuous variation', b: 'Discontinuous: a few distinct classes; one or a few genes with large effects; little environmental effect; bar chart (ABO blood group).\nContinuous: a range; many additive polygenes plus a large environmental effect; histogram, often normal (height).' },
      { n: 2, f: 'Genetic basis of continuous variation', b: 'Many unlinked genes each have additive alleles that add a small amount. The large number of combinations, smoothed by the environment, gives a continuous range.' },
      { n: 3, f: 'When is a t-test used?', b: 'To test whether the means of two samples differ significantly. The data must be continuous, from normally distributed populations with similar standard deviations.' },
      { n: 4, f: 't-test: degrees of freedom and interpreting t', b: 'df = n₁ + n₂ − 2. If t is greater than the critical value at p = 0.05, the difference is significant and the null hypothesis is rejected; if smaller, the difference is not significant.' },
      { n: 5, f: 'Example of variation caused by both genes and environment', b: 'Human height and body mass, or plant height (alleles plus light, water and mineral ions). ABO blood group is genetic only; a scar is environmental only.' },
    ]),
    ...sub(T17, 'natural-and-artificial-selection-cambridge-alevel', '17.2', [
      { n: 1, f: 'Natural selection in five steps', b: 'Over-production of offspring; variation, partly genetic; competition for limited resources; the best adapted are more likely to survive and reproduce; they pass on their alleles, so advantageous allele frequencies rise.' },
      { n: 2, f: 'Stabilising vs directional vs disruptive selection', b: 'Stabilising: against both extremes; mean unchanged, narrower range; stable environment.\nDirectional: against one extreme; mean shifts; changing environment.\nDisruptive: against the middle; two peaks.' },
      { n: 3, f: 'Genetic drift, founder effect and bottleneck', b: 'Genetic drift: random change in allele frequency by chance, strongest in small populations.\nFounder effect: a few individuals start a new population with a non-representative sample of alleles.\nBottleneck: a population is suddenly reduced, leaving low diversity.' },
      { n: 4, f: 'Hardy–Weinberg: how to find allele frequencies from phenotypes', b: 'q² = number with the recessive phenotype ÷ total. q = √q²; p = 1 − q. Heterozygote frequency = 2pq; homozygous dominant = p². Conditions: large population, random mating, no mutation, migration or selection.' },
      { n: 5, f: 'Natural vs artificial selection', b: 'Natural: the environment is the selection pressure; favours survival and reproduction; usually slow.\nArtificial: humans choose which individuals breed for useful features; can be fast; often reduces genetic diversity.' },
      { n: 6, f: 'Why do maize farmers grow F1 hybrids from two inbred lines?', b: 'The F1 is heterozygous at many loci, giving hybrid vigour, and all plants have the same genotype, giving a uniform crop. The F1 does not breed true, so new seed is bought each year.' },
      { n: 7, f: 'How are dairy bulls selected?', b: 'By progeny testing: bulls carry milk-yield alleles but cannot show them, so they are judged by their daughters\' milk yield. High-yield cows are then inseminated artificially.' },
    ]),
    ...sub(T17, 'evolution-cambridge-alevel-biology', '17.3', [
      { n: 1, f: 'Evolution and gene pool', b: 'Evolution: the formation of new species from pre-existing species over time, through changes to gene pools from generation to generation.\nGene pool: all the alleles of all the genes in a population.' },
      { n: 2, f: 'How can DNA sequence data show relationships between species?', b: 'Compare the base sequence of the same gene. Fewer differences means a more recent common ancestor (more closely related). If mutations build up at a roughly steady rate, the number of differences estimates the time since divergence.' },
      { n: 3, f: 'Allopatric vs sympatric speciation', b: 'Allopatric: populations separated by a geographical barrier (mountains, sea).\nSympatric: isolation in the same area, by ecological or behavioural differences (food, breeding time, courtship).' },
      { n: 4, f: 'Steps in speciation after isolation', b: 'No gene flow between populations → different mutations, selection pressures and drift → gene pools diverge → the populations can no longer interbreed to produce fertile offspring.' },
    ]),

    // 18 Classification, biodiversity and conservation
    ...sub(T18, 'classification-cambridge-alevel-biology', '18.1', [
      { n: 1, f: 'Biological species concept and one limitation', b: 'A species is a group that can interbreed to produce fertile offspring and is reproductively isolated from other species. It cannot be tested on asexual organisms, fossils or separated populations.' },
      { n: 2, f: 'Morphological and ecological species concepts', b: 'Morphological: organisms share the same structural features (but sexes or larvae may look different).\nEcological: organisms occupy the same ecological niche (but niches overlap and vary).' },
      { n: 3, f: 'The three domains', b: 'Archaea, Bacteria and Eukarya. Archaea and Bacteria are both prokaryotes.' },
      { n: 4, f: 'Three differences between Archaea and Bacteria', b: 'Membrane lipids: Archaea have ether bonds and branched chains; Bacteria have ester bonds and unbranched fatty acids.\nrRNA: different base sequences.\nCell walls: Bacteria have peptidoglycan; Archaea do not.' },
      { n: 5, f: 'Taxonomic hierarchy below domain', b: 'Kingdom → phylum → class → order → family → genus → species.' },
      { n: 6, f: 'Fungi vs Plantae', b: 'Fungi: hyphae or mycelium (yeasts unicellular); chitin walls; heterotrophic, absorbing food after extracellular digestion; store glycogen.\nPlantae: multicellular; cellulose walls; photosynthesis; store starch.' },
      { n: 7, f: 'How are viruses classified?', b: 'They are in no domain. They are classified by their nucleic acid (DNA or RNA) and whether it is single- or double-stranded: ssDNA, dsDNA, ssRNA, dsRNA.' },
    ]),
    ...sub(T18, 'biodiversity-cambridge-alevel-biology', '18.2', [
      { n: 1, f: 'Ecosystem and niche', b: 'Ecosystem: a relatively self-contained, interacting community of organisms and their environment.\nNiche: the role of an organism in its ecosystem, including where it lives, what it eats and its interactions with biotic and abiotic factors.' },
      { n: 2, f: 'Three levels at which biodiversity is assessed', b: 'The range of ecosystems and habitats; the number of species and their relative abundance; genetic variation within each species.' },
      { n: 3, f: 'Lincoln index', b: 'N = (n₁ × n₂) ÷ m₂, where n₁ = number marked in the first sample, n₂ = total in the second sample, m₂ = marked individuals in the second sample.' },
      { n: 4, f: "Simpson's index of diversity", b: 'D = 1 − Σ(n/N)². D near 1: high diversity (many species, evenly spread), more stable. D near 0: one species dominates.' },
      { n: 5, f: "Spearman's rank vs Pearson's correlation", b: "Spearman's: for non-normal or ordinal data; ranks the values. Pearson's: for normally distributed continuous data with a linear pattern. A significant correlation does not prove causation." },
      { n: 6, f: 'Random quadrats vs transects', b: 'Random quadrats (random coordinates on a grid) for a uniform area. Line or belt transects for a gradient: a line transect records species touching the line; a belt transect places quadrats along it.' },
    ]),
    ...sub(T18, 'conservation-cambridge-alevel-biology', '18.3', [
      { n: 1, f: 'Main causes of extinction', b: 'Climate change; competition (often from introduced species); hunting by humans; degradation and loss of habitats.' },
      { n: 2, f: 'Roles of zoos in conservation', b: 'Captive breeding with breeding records to avoid inbreeding; reintroduction to the wild; research; education.' },
      { n: 3, f: 'Frozen zoos and seed banks', b: 'Frozen zoos store gametes, embryos and tissue in liquid nitrogen. Seed banks store dried seeds cold, testing germination and regrowing stocks.' },
      { n: 4, f: 'Assisted reproduction in endangered mammals', b: 'IVF (fertilisation outside the body), embryo transfer into a uterus, and surrogacy, where another female, possibly of a related and more common species, carries the embryo.' },
      { n: 5, f: 'IUCN vs CITES', b: 'IUCN: assesses conservation status, publishes the Red List and advises governments.\nCITES: an agreement between governments controlling international trade in endangered species and their products.' },
      { n: 6, f: 'Why are invasive alien species controlled?', b: 'They compete with, prey on, spread disease to or hybridise with native species, often have no natural predators, change habitats and cause economic damage.' },
    ]),

    // 19 Genetic technology
    ...sub(T19, 'principles-of-genetic-technology-cambridge-alevel', '19.1', [
      { n: 1, f: 'Recombinant DNA', b: 'DNA made by joining DNA from two or more different sources.' },
      { n: 2, f: 'Roles of restriction enzymes and DNA ligase', b: 'Restriction endonuclease: cuts DNA at a specific recognition sequence, often leaving sticky ends.\nDNA ligase: forms phosphodiester bonds to seal the sugar–phosphate backbone.' },
      { n: 3, f: 'Why make a gene from mRNA with reverse transcriptase?', b: 'mRNA is plentiful in cells making the protein, and the cDNA made has no introns, so bacteria can express it.' },
      { n: 4, f: 'Why must a promoter be added with the gene?', b: 'It is where RNA polymerase binds. It must be one the host recognises, or the gene is not transcribed.' },
      { n: 5, f: 'PCR: the three steps and temperatures', b: 'Denaturation, about 95 °C: strands separate.\nAnnealing, about 55–65 °C: primers bind.\nExtension, about 72 °C: Taq polymerase adds nucleotides. Copies after n cycles = starting copies × 2ⁿ.' },
      { n: 6, f: 'Why is Taq polymerase used in PCR?', b: 'It comes from Thermus aquaticus, is not denatured at 95 °C and has an optimum near 72 °C, so it survives every cycle.' },
      { n: 7, f: 'Gel electrophoresis: why does DNA separate?', b: 'DNA is negatively charged (phosphate groups), so it moves towards the anode. The gel acts as a sieve, so shorter fragments move further. A ladder of known lengths gives the scale.' },
      { n: 8, f: 'Microarrays: genome analysis vs gene expression', b: 'Genome analysis: labelled sample DNA hybridises to complementary probes, showing which sequences are present.\nGene expression: mRNA is converted to labelled cDNA; spot brightness shows how strongly each gene is transcribed.' },
    ]),
    ...sub(T19, 'genetic-technology-applied-to-medicine-cambridge', '19.2', [
      { n: 1, f: 'Advantages of recombinant human insulin', b: 'Identical to human insulin, so fewer allergic or immune responses; a reliable, large supply; no objections to animal sources.' },
      { n: 2, f: 'Recombinant factor VIII and ADA', b: 'Factor VIII (haemophilia): no risk of infection from donated blood; reliable supply.\nADA (a form of SCID): enzyme made in quantity for replacement by injection.' },
      { n: 3, f: 'Genetic screening vs gene therapy', b: 'Screening tests for alleles (for example BRCA1/BRCA2, Huntington\'s, cystic fibrosis carriers). Gene therapy adds a normal allele to treat a genetic disease.' },
      { n: 4, f: 'Gene therapy for SCID', b: 'Remove white blood cells or stem cells, insert the normal ADA allele using a viral vector, and return the cells. Risk: insertion near a cell-division gene has caused leukaemia.' },
      { n: 5, f: 'Somatic vs germ-line gene therapy', b: 'Somatic: body cells; the change is not inherited.\nGerm-line: gametes or embryos; the change is inherited, raising consent issues for future generations.' },
      { n: 6, f: 'Ethical and social issues of genetic screening', b: 'Anxiety about incurable conditions; effects on relatives; discrimination by insurers or employers; embryo selection; cost and fair access.' },
    ]),
    ...sub(T19, 'genetically-modified-organisms-in-agriculture-cambridge', '19.3', [
      { n: 1, f: 'GM salmon: gene added and benefit', b: 'A growth hormone gene with a promoter active all year, so the fish reach market size sooner on less feed.' },
      { n: 2, f: 'Herbicide-resistant soybean: benefit', b: 'Fields can be sprayed with herbicide to kill weeds without harming the crop, reducing competition and raising yield.' },
      { n: 3, f: 'Bt cotton: gene added and benefit', b: 'The Bt toxin gene from Bacillus thuringiensis. Insect larvae that eat the plant are killed, so less insecticide is needed and yield is higher.' },
      { n: 4, f: 'Environmental and social concerns about GM crops', b: 'Gene flow to wild relatives; herbicide-resistant weeds; insects resistant to Bt toxin; harm to non-target species; seed costs for poorer farmers; control by a few companies; consumer concern.' },
    ]),
  ],
};
