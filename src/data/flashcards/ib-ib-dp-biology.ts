/**
 * D-438 -- flashcards for IB Diploma Programme Biology (first assessment 2025).
 *
 * One block per sub-topic, in syllabus order. Card ids are `<sub-topic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 * The syllabus record is not tiered, so no card sets `tier`. Additional higher
 * level (AHL) content ends its back with "(HL only)", following the HL marks on
 * Marlbridge's own DP Biology revision notes. Every card on an HL-only
 * sub-topic (A2.1, A2.3, A3.2, B3.3, C2.1, D2.2) carries the mark.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 'DP Biology', or a definition
 *               table on the page); origin 'revision-notes'.
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

const P = 'ib-dp-biology-';
const WNA = `${P}water-and-nucleic-acids-properties-of-water-dna-and-revision-notes`;
const OCV = `${P}origins-of-cells-and-viruses-hl-revision-notes`;
const CSM = `${P}cell-structure-and-microscopy-prokaryotes-eukaryotes-revision-notes`;
const DIVO = `${P}diversity-of-organisms-species-naming-karyotypes-and-revision-notes`;
const CLAD = `${P}classification-and-cladistics-clades-cladograms-and-revision-notes`;
const ESC = `${P}evolution-speciation-and-conservation-of-biodiversity-revision-notes`;
const CL = `${P}carbohydrates-and-lipids-macromolecules-sugars-fats-revision-notes`;
const PROT = `${P}proteins-amino-acids-peptides-and-protein-structure-revision-notes`;
const MEM = `${P}membranes-and-membrane-transport-revision-notes`;
const ORG = `${P}organelles-compartmentalization-and-cell-specialization-revision-notes`;
const GAS = `${P}gas-exchange-surfaces-lungs-leaves-and-haemoglobin-revision-notes`;
const TRANS = `${P}transport-blood-vessels-heart-xylem-and-phloem-revision-notes`;
const MUS = `${P}muscle-and-motility-sliding-filaments-joints-and-revision-notes`;
const ADAPT = `${P}adaptation-to-environment-abiotic-factors-tolerance-revision-notes`;
const NICHE = `${P}ecological-niches-nutrition-feeding-adaptations-and-revision-notes`;
const ENZ = `${P}enzymes-and-metabolism-active-sites-rates-inhibition-revision-notes`;
const RESP = `${P}cell-respiration-atp-glycolysis-krebs-cycle-and-the-revision-notes`;
const PHOT = `${P}photosynthesis-pigments-limiting-factors-light-revision-notes`;
const SIG = `${P}chemical-signalling-ligands-receptors-and-signal-revision-notes`;
const NEUR = `${P}neural-signalling-neurons-action-potentials-and-revision-notes`;
const INT = `${P}integration-of-body-systems-nervous-system-brain-revision-notes`;
const HORM = `${P}hormonal-and-feedback-integration-in-animals-and-plant-revision-notes`;
const DEF = `${P}defence-against-disease-barriers-immunity-hiv-revision-notes`;
const POPS = `${P}populations-and-communities-sampling-growth-revision-notes`;
const EFLOW = `${P}energy-flow-in-ecosystems-food-chains-trophic-levels-revision-notes`;
const PROD = `${P}production-and-the-carbon-cycle-primary-and-secondary-revision-notes`;
const DRM = `${P}dna-replication-mutation-and-gene-editing-revision-notes`;
const PSYN = `${P}protein-synthesis-transcription-translation-and-the-revision-notes`;
const CDIV = `${P}cell-and-nuclear-division-mitosis-meiosis-and-the-cell-revision-notes`;
const GEX = `${P}gene-expression-and-epigenetics-hl-revision-notes`;
const WP = `${P}water-potential-and-osmosis-revision-notes`;
const REPRO = `${P}reproduction-sexual-and-asexual-human-reproductive-revision-notes`;
const HREPRO = `${P}human-reproduction-in-detail-puberty-gametogenesis-revision-notes`;
const INHER = `${P}inheritance-alleles-monohybrid-crosses-pedigrees-and-revision-notes`;
const DIHY = `${P}dihybrid-crosses-gene-linkage-and-the-chi-squared-test-revision-notes`;
const HOMEO = `${P}homeostasis-feedback-glucose-thermoregulation-and-the-revision-notes`;
const NATSEL = `${P}natural-selection-and-allele-frequencies-hardy-revision-notes`;
const STAB = `${P}stability-and-change-in-ecosystems-keystone-species-revision-notes`;
const CLIM = `${P}climate-change-causes-feedbacks-ecological-impacts-and-revision-notes`;

const TA = 'ib-dp-biology-unity-diversity';
const TB = 'ib-dp-biology-form-function';
const TC = 'ib-dp-biology-interaction-interdependence';
const TD = 'ib-dp-biology-continuity-change';

export const DECK_IB_IB_DP_BIOLOGY: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-dp',
  subjectSlug: 'biology',
  syllabusCode: 'DP Biology',
  syllabusSeries: 'First assessment 2025',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'hina-mogul', reviewedOn: '2026-11-05' },
  cards: [
    // Theme A: Unity and diversity
    ...sub(TA, 'ib-dp-biology-1-a1-1', 'A1.1', [
      { n: 1, f: "Hydrogen bond between water molecules", b: "An attraction between a δ+ hydrogen on one molecule and a δ− oxygen on another. It forms because water is polar (unequal sharing of electrons in O–H bonds). It is not a covalent bond.", src: WNA },
      { n: 2, f: "Cohesion and adhesion of water", b: "Cohesion: water molecules attract each other by hydrogen bonds; gives continuous columns under tension in xylem and surface tension.\nAdhesion: attraction of water to polar or charged surfaces; gives capillary action in soil and cell walls.", src: WNA },
      { n: 3, f: "Which substances dissolve in water, and why?", b: "Hydrophilic substances (ions, glucose, amino acids), because water molecules cluster round ions and polar molecules. Hydrophobic substances (fats, phospholipid tails) do not dissolve." },
      { n: 4, f: "How do the physical properties of water affect aquatic animals compared with air?", b: "Higher density: strong buoyancy. Higher viscosity: more drag, so streamlining. Higher thermal conductivity: faster heat loss, so insulation such as blubber. Higher specific heat capacity: slow temperature change in water habitats." },
      { n: 5, f: "Energy to heat 500 g of water by 3 K (specific heat capacity 4.18 J g⁻¹ K⁻¹)?", b: "energy = mass × specific heat capacity × temperature change = 500 × 4.18 × 3 = 6270 J" },
      { n: 6, f: "Origin and retention of water on Earth, and the Goldilocks zone", b: "Hypothesis to know: water was brought by asteroids. It is retained by gravity and temperatures low enough for vapour to condense. The Goldilocks zone is the orbital region where a planet's surface could hold liquid water. (HL only)" },
    ]),
    ...sub(TA, 'ib-dp-biology-1-a1-2', 'A1.2', [
      { n: 1, f: "DNA and RNA compared", b: "DNA: two antiparallel strands in a double helix; deoxyribose; bases A, T, G, C.\nRNA: usually one strand; ribose; bases A, U, G, C.", src: WNA },
      { n: 2, f: "How are nucleotides linked into a strand?", b: "A nucleotide is a phosphate, a pentose sugar and a base. Condensation reactions join the sugar of one nucleotide to the phosphate of the next, forming a strong, continuous covalent sugar–phosphate backbone." },
      { n: 3, f: "Why does complementary base pairing matter?", b: "A pairs with T (U in RNA) and G with C, joined by hydrogen bonds. The strands can be separated, and each base sequence determines its partner, so DNA can be copied (replication) and expressed (transcription)." },
      { n: 4, f: "Write the strand complementary to 5'-TTGACA-3', reading 5' to 3'.", b: "Complement: 3'-AACTGT-5', which is 5'-TGTCAA-3' (the strands are antiparallel, so reverse it)." },
      { n: 5, f: "Why does purine–pyrimidine pairing give a regular double helix?", b: "Each base pair is one purine (two rings: A, G) with one pyrimidine (one ring: C, T, U), so every pair is the same length. (HL only)" },
      { n: 6, f: "What did the Hershey–Chase experiment show?", b: "³²P (labelling DNA) was mostly found in the bacteria; ³⁵S (labelling protein) mostly stayed outside. The data support DNA as the genetic material. (HL only)" },
    ]),
    ...sub(TA, 'ib-dp-biology-1-a2-1', 'A2.1', [
      { n: 1, f: "Conditions on the early Earth relevant to the origin of life", b: "No free oxygen, so no ozone layer and more ultraviolet light; more carbon dioxide and methane; higher temperatures. Carbon compounds could form spontaneously by processes that do not now occur. (HL only)" },
      { n: 2, f: "Miller–Urey experiment: what it showed and one limitation", b: "Amino acids formed from water, methane, ammonia and hydrogen with sparks, so organic molecules can form from inorganic ones. Limits: the gas mixture is thought by many to be too reducing; only small molecules formed, not polymers or cells. (HL only)" },
      { n: 3, f: "Four processes needed for the origin of cells", b: "Catalysis, self-replication of molecules, self-assembly and compartmentalisation (for example fatty acids coalescing into spherical bilayer vesicles). (HL only)" },
      { n: 4, f: "Why is RNA thought to have come first?", b: "RNA can be replicated by complementary base pairing and can fold and catalyse reactions, so it could act as both gene and enzyme. Ribozymes in the ribosome still catalyse peptide bond formation. (HL only)" },
      { n: 5, f: "LUCA", b: "The last universal common ancestor: the most recent organism from which all life descends. It is not the first life; other lineages probably existed and became extinct. (HL only)", src: OCV },
      { n: 6, f: "Evidence for LUCA and for where it lived", b: "Evidence for LUCA: the universal genetic code and genes shared by all organisms. Link to hydrothermal vents: fossilised life in ancient vent precipitates and conserved sequences suggesting an anaerobic, hydrogen-using organism. (HL only)" },
    ]),
    ...sub(TA, 'ib-dp-biology-1-a2-2', 'A2.2', [
      { n: 1, f: "Cell theory", b: "Organisms are made of cells; the cell is the smallest unit of life; cells arise from existing cells.", src: CSM },
      { n: 2, f: "Prokaryote (Gram-positive bacterium) and eukaryote compared", b: "Prokaryote: naked DNA loop in the nucleoid; no nuclear envelope; 70S ribosomes; no membrane-bound organelles; cell wall present.\nEukaryote: chromosomes of DNA with histones in a nucleus; double membrane with pores; 80S ribosomes in the cytoplasm; membrane-bound organelles." },
      { n: 3, f: "Name atypical cells and their number of nuclei", b: "Aseptate fungal hypha: many nuclei in one cytoplasm. Skeletal muscle fibre: many (formed by fusion). Mature mammalian red blood cell: none. Mature phloem sieve tube element: none." },
      { n: 4, f: "A 15 mm scale bar is labelled 0.5 µm. A mitochondrion is 24 mm wide on the image. Find the magnification and actual width.", b: "15 mm = 15 000 µm; 15 000 ÷ 0.5 = ×30 000. Actual width = 24 mm ÷ 30 000 = 0.0008 mm = 0.8 µm." },
      { n: 5, f: "Animal, fungal and plant cells: wall, vacuole and plastids", b: "Animal: no wall, small vacuoles, no plastids, centrioles present.\nFungus: chitin wall, no plastids.\nPlant: cellulose wall, large central vacuole, plastids (such as chloroplasts)." },
      { n: 6, f: "Evidence that mitochondria and chloroplasts arose by endosymbiosis", b: "They have 70S ribosomes and naked circular DNA, and they replicate themselves, like the prokaryotes they are thought to have come from. (HL only)" },
    ]),
    ...sub(TA, 'ib-dp-biology-1-a2-3', 'A2.3', [
      { n: 1, f: "Features shared by viruses", b: "Small, fixed size; genetic material of DNA or RNA; a protein capsid; no cytoplasm; few or no enzymes. They have no metabolism of their own and reproduce only inside a host cell. (HL only)" },
      { n: 2, f: "Capsid and envelope", b: "Capsid: the protein coat that every virus has. Envelope: a layer of host membrane that only some viruses have. (HL only)", src: OCV },
      { n: 3, f: "Lytic cycle of bacteriophage lambda in order", b: "Attach to the host cell, inject DNA, synthesise viral components, assemble new phages, lyse (burst) the host cell to release them. (HL only)" },
      { n: 4, f: "Lysogenic cycle and prophage", b: "The injected phage DNA is integrated into the host chromosome as a prophage. The host survives and divides, copying the prophage to daughter cells. Stress can trigger induction and a switch to the lytic cycle. (HL only)", src: OCV },
      { n: 5, f: "Genetic material and envelope: lambda phage, coronaviruses, HIV", b: "Bacteriophage lambda: double-stranded DNA, not enveloped.\nCoronaviruses: single-stranded RNA, enveloped.\nHIV: single-stranded RNA, enveloped. (HL only)" },
      { n: 6, f: "Why do some viruses evolve rapidly?", b: "Short generation times, very large numbers, high mutation rates and no proofreading in many RNA viruses (for example error-prone reverse transcriptase in HIV). Influenza also changes suddenly when genome segments mix between strains. (HL only)" },
    ]),
    ...sub(TA, 'ib-dp-biology-1-a3-1', 'A3.1', [
      { n: 1, f: "Biological species concept, and when it is hard to apply", b: "A species is a group that can breed together and produce fertile offspring. Hard to apply to asexual organisms, fossils, populations that never meet, and fertile hybrids between clearly different forms.", src: DIVO },
      { n: 2, f: "Karyogram, and how chromosomes are paired in one", b: "The chromosomes of one cell arranged in homologous pairs. Pair them by length, centromere position and banding pattern, longest first, with the sex chromosomes last.", src: DIVO },
      { n: 3, f: "Evidence that human chromosome 2 formed by fusion of two ape chromosomes", b: "Its banding matches two ape chromosomes end to end; it has telomere-type sequence in the middle; and it has a remnant of a second centromere. Humans 2n = 46, chimpanzees 2n = 48." },
      { n: 4, f: "SNP", b: "Single-nucleotide polymorphism: a base that differs between individuals at one position in the genome. SNPs are the main source of genome diversity within a species.", src: DIVO },
      { n: 5, f: "Is genome size a good guide to an organism's complexity?", b: "No. Genome size (total DNA, often in Mb) does not closely match complexity: some plants have very large genomes and some complex animals small ones." },
      { n: 6, f: "Environmental DNA (eDNA) barcoding: method and limits", b: "Sample water, soil or air; extract DNA; amplify a short standard barcode region by PCR; sequence it; match to a reference database. Fast and non-invasive; limited by incomplete databases and DNA that has drifted from where the organism lives. (HL only)" },
    ]),
    ...sub(TA, 'ib-dp-biology-1-a3-2', 'A3.2', [
      { n: 1, f: "Clade", b: "A common ancestor and all of its descendants. A group that leaves out any descendant is not a clade. (HL only)", src: CLAD },
      { n: 2, f: "Two species that split 40 million years ago differ at 16 amino acids. Another pair differs at 12. Estimate when that pair diverged.", b: "Rate = 16 ÷ 40 = 0.4 differences per million years. Time = 12 ÷ 0.4 = 30 million years ago. It is an estimate, because mutation rates vary. (HL only)" },
      { n: 3, f: "Parsimony (in building cladograms)", b: "Choosing the explanation, or cladogram, that needs the smallest number of changes. Only sites where a derived base is shared by some but not all species help to choose a tree. (HL only)", src: CLAD },
      { n: 4, f: "Reading a cladogram: what is a node, and how is relatedness judged?", b: "A node is a fork standing for a hypothetical common ancestor. The closest relatives share the most recent node. Tip order and position on the page do not show closeness. (HL only)" },
      { n: 5, f: "The three domains: evidence and names", b: "Proposed in 1977 from base sequences of ribosomal RNA, found in all organisms. Bacteria, Archaea and Eukarya; the domain is a level above kingdom. (HL only)" },
      { n: 6, f: "Why can morphology mislead classification?", b: "Convergent evolution gives similar features in unrelated lineages. Only features shared because they were inherited from a common ancestor support grouping; this is why base and amino acid sequences are the stronger evidence. (HL only)" },
    ]),
    ...sub(TA, 'ib-dp-biology-1-a4-1', 'A4.1', [
      { n: 1, f: "Evolution", b: "A genetic (heritable) change in the features of a population over generations. Acquired traits that are not genetic do not count.", src: ESC },
      { n: 2, f: "Homologous and analogous structures", b: "Homologous: same basic structure from a shared ancestor, possibly different function (pentadactyl limb of human, bat, whale, horse).\nAnalogous: same function, different origin, from convergent evolution (bat and insect wings).", src: ESC },
      { n: 3, f: "How do base sequences and selective breeding provide evidence for evolution?", b: "Fewer differences in DNA, RNA or protein sequences mean a more recent common ancestor. Selective breeding (dog breeds from wolves; varieties of Brassica oleracea) shows variation is heritable and populations change quickly under selection." },
      { n: 4, f: "Explain speciation in steps", b: "A population is split; gene flow stops (reproductive isolation); different conditions give differential selection and mutations arise independently; allele frequencies diverge; the populations can no longer breed successfully together. Example: bonobos and chimpanzees either side of the Congo River." },
      { n: 5, f: "Allopatric and sympatric speciation", b: "Allopatric: populations in separate areas, first barrier geographical.\nSympatric: same area, first barrier behavioural or temporal.\nBoth need reproductive isolation, variation and divergence under selection. (HL only)" },
      { n: 6, f: "How can polyploidy cause abrupt speciation in plants?", b: "Hybridisation gives a sterile hybrid whose chromosomes cannot pair. Doubling of the chromosomes (polyploidy) lets them pair, so the plant is fertile and is a new species in one generation. Example: Persicaria. (HL only)" },
    ]),
    ...sub(TA, 'ib-dp-biology-1-a4-2', 'A4.2', [
      { n: 1, f: "Biodiversity", b: "The variety of life at ecosystem, species and genetic levels.", src: ESC },
      { n: 2, f: "Causes of the current biodiversity crisis", b: "Human population growth overall; specifically over-exploitation, urbanisation, deforestation and land clearance for agriculture, pollution, and pests, diseases and invasive alien species spread by global transport." },
      { n: 3, f: "In situ and ex situ conservation", b: "In situ: in the natural habitat (managed nature reserves, rewilding, repairing degraded ecosystems).\nEx situ: outside it (zoos, botanic gardens, seed or tissue banks).", src: ESC },
      { n: 4, f: "What does the EDGE of Existence programme prioritise, and why?", b: "Species that are both evolutionarily distinct and globally endangered, because losing them loses a large amount of evolutionary history. Prioritisation is a matter for debate." },
      { n: 5, f: "Name two species driven extinct by humans and the cause", b: "Giant moa (North Island, New Zealand): terrestrial megafauna hunted by early settlers.\nCaribbean monk seal: killed for oil and meat and affected by overfishing; declared extinct in 2008." },
    ]),

    // Theme B: Form and function
    ...sub(TB, 'ib-dp-biology-2-b1-1', 'B1.1', [
      { n: 1, f: "Condensation and hydrolysis", b: "Condensation joins two molecules with the release of water.\nHydrolysis breaks a bond by splitting water into −H and −OH.", src: CL },
      { n: 2, f: "Starch, glycogen and cellulose compared", b: "Starch (plants): α-glucose; coiled, amylopectin branched; energy store.\nGlycogen (animals): α-glucose; coiled and highly branched; energy store, quickly mobilised.\nCellulose (plant cell walls): β-glucose; straight chains; structural strength." },
      { n: 3, f: "Why is cellulose so strong?", b: "β-glucose units alternate in orientation, giving straight chains. Chains lie in bundles cross-linked by many hydrogen bonds, which together give high tensile strength." },
      { n: 4, f: "Glycoproteins and the ABO blood groups", b: "Carbohydrate chains on glycoproteins face outwards from the plasma membrane as recognition markers. The ABO antigen depends on the terminal sugar; group O cells lack A and B antigens. People have antibodies against the ABO antigens they do not carry." },
      { n: 5, f: "Saturated, monounsaturated and polyunsaturated fatty acids", b: "Saturated: no C=C; straight; high melting point.\nMonounsaturated: one C=C; bent; lower melting point.\nPolyunsaturated: two or more C=C; more bends; lowest melting point." },
      { n: 6, f: "Why is fat used for long-term energy storage and glycogen for short-term?", b: "Fat releases about twice as much energy per gram (values supplied in questions, about 37 kJ g⁻¹ against 17 kJ g⁻¹), so stores are lighter; it is insoluble and also insulates. Glycogen is broken down to glucose more quickly." },
    ]),
    ...sub(TB, 'ib-dp-biology-2-b1-2', 'B1.2', [
      { n: 1, f: "Structure of a generalised amino acid", b: "A central (alpha) carbon carrying an amine group (NH₂), a carboxyl group (COOH), a hydrogen and a variable R-group. Only the R-group varies.", src: PROT },
      { n: 2, f: "How many different tripeptides can be made from the 20 amino acids?", b: "20³ = 8000. In general 20ⁿ sequences for a chain of n amino acids." },
      { n: 3, f: "Essential and non-essential amino acids", b: "Essential amino acids cannot be made and must be eaten; non-essential ones can be made from other amino acids. Vegan diets need a mix of plant proteins, as some are short of essential amino acids.", src: PROT },
      { n: 4, f: "Denaturation of a protein", b: "A change in three-dimensional shape, from heat or pH change, that stops the protein working; usually irreversible. Peptide bonds are not broken, so the primary structure survives." },
      { n: 5, f: "Bonds that hold secondary and tertiary structure", b: "Secondary (α-helix, β-pleated sheet): hydrogen bonds in regular positions along the backbone.\nTertiary: interactions between R-groups: hydrogen, ionic and disulfide bonds and hydrophobic interactions. (HL only)" },
      { n: 6, f: "Insulin, collagen and haemoglobin: structure and function", b: "Insulin: two chains, globular, soluble hormone.\nCollagen: three chains in a triple helix, fibrous, strong and insoluble.\nHaemoglobin: four chains each with a haem group, conjugated and globular, carries oxygen. (HL only)" },
    ]),
    ...sub(TB, 'ib-dp-biology-2-b2-1', 'B2.1', [
      { n: 1, f: "Why is a phospholipid bilayer a barrier?", b: "Amphipathic phospholipids form a bilayer, heads to water and tails together. The hydrophobic core of fatty acid tails repels ions and polar molecules, so it is a barrier to them and to large molecules." },
      { n: 2, f: "Simple diffusion, facilitated diffusion and active transport", b: "Simple diffusion: between phospholipids, down a gradient, no protein, no ATP.\nFacilitated diffusion: through a channel protein, down a gradient, no ATP.\nActive transport: by a pump protein using ATP, can be against a gradient." },
      { n: 3, f: "Osmosis", b: "Net movement of water across a membrane that is impermeable to the solute, towards the higher solute concentration. Aquaporins speed it up but do not decide the direction.", src: MEM },
      { n: 4, f: "Integral and peripheral proteins", b: "Integral: embedded in one or both lipid layers.\nPeripheral: attached to one surface only.", src: MEM },
      { n: 5, f: "How does cholesterol affect an animal cell membrane?", b: "It sits between phospholipids and modulates fluidity: it stabilises the membrane when warm and stops it stiffening when cold. (HL only)" },
      { n: 6, f: "Sodium-dependent glucose cotransporter", b: "Na⁺ moves into the cell down its gradient and brings glucose with it. This is indirect active transport: the gradient is made by the sodium–potassium pump using ATP. Used in the small intestine and the nephron. (HL only)" },
    ]),
    ...sub(TB, 'ib-dp-biology-2-b2-2', 'B2.2', [
      { n: 1, f: "Organelle, and structures that are not organelles", b: "An organelle is a discrete subunit of a cell with a specific function (nuclei, vesicles, ribosomes, mitochondria, plasma membrane). The cell wall, cytoskeleton and cytoplasm are not organelles.", src: ORG },
      { n: 2, f: "Advantages of compartmentalization", b: "Enzymes and substrates are concentrated; each compartment can have its own conditions such as pH; incompatible reactions are kept apart. Example: lysosomes hold hydrolytic enzymes that would damage the cytoplasm." },
      { n: 3, f: "Why does separating the nucleus from the cytoplasm matter in eukaryotes?", b: "Transcription happens in the nucleus and the mRNA can be modified before it is exported for translation. In prokaryotes ribosomes meet mRNA immediately, so no modification is possible first." },
      { n: 4, f: "Cell fractionation", b: "Cells are broken up into a homogenate and spun in an ultracentrifuge; denser structures form a pellet at lower speeds, so organelles can be separated and studied." },
      { n: 5, f: "How is a mitochondrion adapted for aerobic respiration?", b: "Small intermembrane space, so protons build up quickly into a steep gradient; cristae give more surface for electron transport chains and ATP synthase; the matrix concentrates Krebs cycle enzymes and substrates. (HL only)" },
      { n: 6, f: "Route of a protein made for secretion", b: "Made by ribosomes on rough ER; enters the ER lumen and folds; carried in a vesicle to the Golgi apparatus, which processes and sorts it; a vesicle takes it to the plasma membrane and exocytosis releases it. (HL only)" },
    ]),
    ...sub(TB, 'ib-dp-biology-2-b2-3', 'B2.3', [
      { n: 1, f: "Two properties of stem cells", b: "They can divide endlessly, and they can differentiate along different pathways.", src: ORG },
      { n: 2, f: "Totipotent, pluripotent and multipotent", b: "Totipotent: every cell type, including a whole organism (earliest embryo).\nPluripotent: most body cell types, not a whole organism.\nMultipotent: a limited range of related cell types (adult tissue).", src: ORG },
      { n: 3, f: "Stem cell niche, with two examples", b: "A microenvironment that maintains stem cells or promotes their proliferation and differentiation. Examples: bone marrow (haematopoietic stem cells give blood cells) and the hair follicle." },
      { n: 4, f: "Why does surface area to volume ratio limit cell size?", b: "For a cube, SA:V = 6 ÷ side, so it falls as the cell grows: volume (the need) rises faster than surface area (exchange). A 3 µm cube has a ratio of 2 µm⁻¹; a 6 µm cube, 1 µm⁻¹." },
      { n: 5, f: "How do cells with the same genome become different types?", b: "Differentiation depends on which genes are expressed. In an early embryo, gradients mean cells in different positions receive different signals, so they express different genes. Cells do not gain or lose genes." },
      { n: 6, f: "Type I and type II pneumocytes", b: "Type I: extremely thin, so the diffusion distance for gas exchange is short.\nType II: lamellar bodies release surfactant into the alveolar lumen, reducing surface tension. (HL only)" },
    ]),
    ...sub(TB, 'ib-dp-biology-2-b3-1', 'B3.1', [
      { n: 1, f: "Four properties of a gas-exchange surface", b: "Permeable, thin, moist and with a large surface area." },
      { n: 2, f: "How are concentration gradients kept steep at gas-exchange surfaces?", b: "Dense networks of blood vessels, continuous blood flow, and ventilation with air (lungs) or water (gills)." },
      { n: 3, f: "Inhalation: muscles, volume and pressure", b: "Diaphragm contracts and flattens; external intercostal muscles contract, moving the ribs up and out. Thorax volume rises, pressure falls below atmospheric, and air flows in. Quiet exhalation is passive." },
      { n: 4, f: "Tidal volume 0.60 L, inspiratory reserve 2.8 L, vital capacity 4.5 L. What is the expiratory reserve volume?", b: "Vital capacity = tidal + inspiratory reserve + expiratory reserve, so ERV = 4.5 − 0.60 − 2.8 = 1.1 L." },
      { n: 5, f: "Factors affecting the rate of transpiration", b: "Rate rises with light, temperature and wind, and falls as humidity rises, because each changes stomatal opening or the water vapour gradient." },
      { n: 6, f: "Bohr shift, and foetal haemoglobin", b: "More CO₂ shifts the oxygen dissociation curve to the right (lower affinity), so more oxygen is released in actively respiring tissue. Foetal haemoglobin has a higher affinity (curve to the left), so it loads oxygen from maternal blood. (HL only)", src: GAS },
    ]),
    ...sub(TB, 'ib-dp-biology-2-b3-2', 'B3.2', [
      { n: 1, f: "How are arteries adapted?", b: "Thick walls with elastic fibres and smooth muscle and a narrow lumen. Elastic stretch and recoil keep pressure up and smooth the flow between beats." },
      { n: 2, f: "Capillaries and fenestrations", b: "Capillary walls are one cell thick and the lumen about one red cell wide: short diffusion distance, large total surface area. Fenestrations are pores through the endothelium in sites needing rapid exchange (glomerulus, villi, endocrine glands)." },
      { n: 3, f: "Causes and consequences of coronary occlusion", b: "Damage to the artery lining; plaque builds up (atherosclerosis); the lumen narrows and a clot may form; less oxygen reaches cardiac muscle: angina if partial, heart attack if blocked. Risks: smoking, high blood pressure, high cholesterol, saturated fat, inactivity." },
      { n: 4, f: "How is water pulled up the xylem?", b: "Water evaporates from mesophyll cell walls and leaves through stomata; water is drawn from the xylem through leaf cell walls by capillary action, creating tension (negative pressure potential); cohesion keeps the column continuous as it is pulled up." },
      { n: 5, f: "How are xylem vessels adapted?", b: "No cell contents and missing or incomplete end walls for free flow; lignified walls that resist collapse under tension; pits so water can move in and out sideways.", src: TRANS },
      { n: 6, f: "Single circulation (bony fish) and double circulation (mammals)", b: "Fish: heart, gills, body, heart; blood passes through the heart once per circuit and pressure is low after the gills.\nMammals: right side, lungs, left side, body; pressure is restored by the left ventricle. (HL only)" },
    ]),
    ...sub(TB, 'ib-dp-biology-2-b3-3', 'B3.3', [
      { n: 1, f: "What happens to the bands of a sarcomere during contraction?", b: "A band (whole length of thick filaments): unchanged. I band: shorter. H zone: narrows or vanishes. Sarcomere (Z to Z): shorter. The filaments slide; they do not shorten. (HL only)" },
      { n: 2, f: "Cross-bridge cycle in muscle", b: "Ca²⁺ from the sarcoplasmic reticulum binds troponin; tropomyosin moves, exposing binding sites on actin; myosin heads bind; the power stroke pulls actin and sheds ADP and phosphate; ATP attaches and the head lets go; ATP hydrolysis resets the head. (HL only)" },
      { n: 3, f: "Role of titin", b: "A giant elastic protein linking thick filaments to Z lines. It stores energy when stretched, helps the sarcomere recoil and prevents overstretching. (HL only)", src: MUS },
      { n: 4, f: "Motor unit", b: "One motor neuron plus the muscle fibres it controls; all its fibres contract together. Small units give fine control, large units strong force, and recruiting more units gives more force. (HL only)" },
      { n: 5, f: "Roles of cartilage, synovial fluid, ligaments and tendons in a synovial joint (hip)", b: "Cartilage reduces friction and absorbs shock; synovial fluid lubricates and cushions; ligaments join bone to bone and stabilise; tendons join muscle to bone and transmit force. (HL only)" },
      { n: 6, f: "External and internal intercostal muscles", b: "External intercostals raise the ribs up and out (inhalation); internal intercostals pull them down and in (forced exhalation). They are antagonistic: contraction of one stretches the other. (HL only)" },
    ]),
    ...sub(TB, 'ib-dp-biology-2-b4-1', 'B4.1', [
      { n: 1, f: "Range of tolerance", b: "The span of values of an abiotic variable within which a species can survive. Survival range is wider than the range for good growth or breeding.", src: ADAPT },
      { n: 2, f: "Biome", b: "A group of ecosystems with similar communities because of similar abiotic conditions and convergent evolution.", src: ADAPT },
      { n: 3, f: "Adaptations of marram grass to sand dunes", b: "Rolled leaves, sunken stomata and hairs trap humid air and cut transpiration; a thick cuticle reduces evaporation; long roots and rhizomes reach water and anchor the plant; it grows upwards to survive burial by sand." },
      { n: 4, f: "Abiotic conditions needed by coral reefs", b: "Shallow, clear water (light for the photosynthetic algae in coral tissue); warm water, roughly 23 to 29 °C; stable salinity near that of the open ocean; slightly alkaline pH, about 8.1, for building calcium carbonate skeletons." },
      { n: 5, f: "How is a transect used to study tolerance?", b: "Lay a line or belt transect along an environmental gradient; at fixed intervals record species abundance in quadrats and measure the abiotic variable; describe the correlation. Correlation does not show cause." },
    ]),
    ...sub(TB, 'ib-dp-biology-2-b4-2', 'B4.2', [
      { n: 1, f: "Ecological niche", b: "The role of a species in its ecosystem: its biotic and abiotic interactions, including how it obtains food. Habitat is only where it lives.", src: NICHE },
      { n: 2, f: "Obligate anaerobes, facultative anaerobes and obligate aerobes", b: "Obligate anaerobe: harmed or killed by oxygen.\nFacultative anaerobe: grows with or without oxygen, usually better with it.\nObligate aerobe: cannot grow without oxygen." },
      { n: 3, f: "Holozoic and saprotrophic nutrition", b: "Holozoic (all animals): ingest food, digest it internally, absorb and assimilate.\nSaprotrophic (some fungi and bacteria): secrete enzymes onto dead matter and absorb the products; decomposers." },
      { n: 4, f: "Mixotrophic nutrition", b: "Both autotrophic and heterotrophic, as in Euglena. Obligate mixotrophs need both modes; facultative mixotrophs can switch between them." },
      { n: 5, f: "Herbivore adaptations and plant defences", b: "Herbivores: chewing mouthparts, piercing mouthparts (stylet into phloem), detoxifying enzymes.\nPlants: physical defences (thorns, spines, tough or hairy leaves) and chemical defences (toxic secondary compounds in leaves and seeds)." },
      { n: 6, f: "Fundamental niche", b: "The potential niche set by a species' adaptations and tolerance limits, with no competitor.", src: NICHE },
      { n: 7, f: "Realized niche", b: "The niche actually occupied when competing species are present. It is usually smaller than the fundamental niche and never larger.", src: NICHE },
      { n: 8, f: "Competitive exclusion: the two possible outcomes when two species compete for the same limiting resource", b: "Two species cannot occupy exactly the same niche in the same place. Either one species is eliminated from the area, or both survive but each is restricted to part of its fundamental niche." },
      { n: 9, f: "A species tolerates 10 to 34 °C alone, but with a competitor it is found only at 16 to 28 °C. Realized niche as a percentage of the fundamental niche?", b: "Fundamental width 34 − 10 = 24 °C; realized width 28 − 16 = 12 °C.\n12 ÷ 24 × 100 = 50%." },
    ]),

    // Theme C: Interaction and interdependence
    ...sub(TC, 'ib-dp-biology-3-c1-1', 'C1.1', [
      { n: 1, f: "Anabolism and catabolism", b: "Anabolism: building larger molecules from smaller ones by condensation (protein synthesis, glycogen formation, photosynthesis).\nCatabolism: breaking larger molecules into smaller ones by hydrolysis or oxidation (digestion, respiration).", src: ENZ },
      { n: 2, f: "Induced fit", b: "Enzyme and substrate both change shape on binding, which strains bonds in the substrate.", src: ENZ },
      { n: 3, f: "Effect of increasing substrate concentration on enzyme activity", b: "Rate rises as there are more collisions with active sites, then plateaus when all active sites are occupied. The plateau is not the enzyme being used up." },
      { n: 4, f: "How does an enzyme affect the energy of a reaction?", b: "It lowers the activation energy (peak energy minus reactant energy). The energies of reactants and products, and so the overall energy change, are unchanged." },
      { n: 5, f: "End-product (feedback) inhibition", b: "The end product of a pathway inhibits an enzyme early in it. Example: isoleucine inhibits threonine deaminase in the pathway that makes isoleucine. (HL only)" },
      { n: 6, f: "Competitive, non-competitive and mechanism-based inhibitors", b: "Competitive: resembles substrate, binds the active site reversibly; more substrate reduces the inhibition (statins).\nNon-competitive: binds an allosteric site reversibly; more substrate does not remove it.\nMechanism-based: binds the active site irreversibly (penicillin and transpeptidase). (HL only)" },
    ]),
    ...sub(TC, 'ib-dp-biology-3-c1-2', 'C1.2', [
      { n: 1, f: "Properties and uses of ATP", b: "Soluble, small and mobile; releases a usable amount of energy on hydrolysis (ATP + water → ADP + phosphate) and is rapidly regenerated. Used for active transport, anabolism and movement of the cell or its parts." },
      { n: 2, f: "Cell respiration compared with gas exchange", b: "Cell respiration: release of energy from carbon compounds in cells to make ATP (chemical).\nGas exchange: physical movement of oxygen in and carbon dioxide out across a surface.", src: RESP },
      { n: 3, f: "Aerobic and anaerobic respiration in humans", b: "Aerobic: carbohydrate, lipid and others; oxygen needed; large ATP yield; CO₂ and water; cytoplasm and mitochondria.\nAnaerobic: carbohydrate only; no oxygen; small yield; lactate; cytoplasm." },
      { n: 4, f: "Krebs cycle: what happens in each turn?", b: "An acetyl group joins oxaloacetate (4C) to form citrate (6C). Each turn has four oxidations (dehydrogenations) and two decarboxylations, producing CO₂, ATP and reduced NAD, and regenerates oxaloacetate. (HL only)" },
      { n: 5, f: "How does the electron transport chain produce ATP?", b: "Reduced NAD passes electrons to carriers on the inner mitochondrial membrane; energy released pumps protons into the intermembrane space; protons flow back through ATP synthase, phosphorylating ADP (chemiosmosis). Oxygen accepts electrons and protons, forming water. (HL only)" },
      { n: 6, f: "Anaerobic respiration in humans and yeast", b: "Humans: pyruvate accepts hydrogen from reduced NAD, forming lactate.\nYeast: pyruvate → ethanal + CO₂; ethanal accepts hydrogen, forming ethanol.\nBoth regenerate NAD so glycolysis continues; net 2 ATP per glucose. (HL only)" },
    ]),
    ...sub(TC, 'ib-dp-biology-3-c1-3', 'C1.3', [
      { n: 1, f: "Where does the oxygen released in photosynthesis come from, and how is this known?", b: "From water, which is split; carbon dioxide is reduced. Water labelled with ¹⁸O gives labelled oxygen gas. Word equation: carbon dioxide + water → glucose + oxygen." },
      { n: 2, f: "Chromatography of leaf pigments: Rf and order", b: "Rf = distance moved by pigment ÷ distance moved by solvent front, both from the start line; no units, below 1. Order up the paper: carotene (highest), xanthophyll, chlorophyll a, chlorophyll b (lowest).", src: PHOT },
      { n: 3, f: "Absorption spectrum and action spectrum", b: "Absorption spectrum: light absorbed by an extracted pigment at each wavelength.\nAction spectrum: rate of photosynthesis of whole organisms or cells at each wavelength.\nBoth are high in blue-violet and red, low in green." },
      { n: 4, f: "A lamp is moved from 10 cm to 20 cm from a plant. How does light intensity change?", b: "Intensity ∝ 1 ÷ distance², so it falls to (10 ÷ 20)² = 0.25, one quarter." },
      { n: 5, f: "Photosystem", b: "An array of chlorophyll and accessory pigments in a membrane, with a special chlorophyll as the reaction centre where an excited electron is emitted. The array absorbs a wider range of wavelengths and passes energy to the reaction centre. (HL only)" },
      { n: 6, f: "Calvin cycle in outline", b: "Rubisco fixes CO₂ onto RuBP (5C) to give glycerate 3-phosphate (3C); this is reduced to triose phosphate using ATP and reduced NADP; five triose phosphates are converted to three RuBP using ATP; the rest leave to make glucose and other compounds. (HL only)" },
    ]),
    ...sub(TC, 'ib-dp-biology-3-c2-1', 'C2.1', [
      { n: 1, f: "Ligand and receptor", b: "Ligand: the signalling chemical that binds to a receptor.\nReceptor: a protein with a binding site specific to a ligand, complementary in shape and charge; binding is reversible. (HL only)", src: SIG },
      { n: 2, f: "Quorum sensing in bacteria", b: "Each bacterium releases a little autoinducer. At high density its concentration passes a threshold and binds receptors, switching genes on across the population together. Example: Vibrio fischeri bioluminescence. (HL only)" },
      { n: 3, f: "Transmembrane and intracellular receptors", b: "Transmembrane: for hydrophilic or large ligands that stay outside (acetylcholine, epinephrine, insulin); hydrophobic amino acids in the membrane-spanning region.\nIntracellular: for hydrophobic ligands that enter the cell (oestradiol, progesterone, testosterone). (HL only)" },
      { n: 4, f: "Epinephrine signal transduction", b: "Epinephrine binds a G protein-coupled receptor; the G protein swaps GDP for GTP and activates an enzyme that makes cAMP (second messenger); cAMP starts a kinase cascade. Response in seconds. (HL only)" },
      { n: 5, f: "How does insulin's receptor cause glucose uptake?", b: "Insulin binds a tyrosine kinase receptor; tyrosines inside are phosphorylated; relay reactions follow; vesicles carrying glucose transporters fuse with the plasma membrane. Response in minutes. (HL only)" },
      { n: 6, f: "Chemical groups of hormones and neurotransmitters", b: "Hormones: amines (epinephrine), proteins (insulin), steroids (oestradiol, progesterone, testosterone).\nNeurotransmitters: amino acids, peptides, amines and nitric oxide (a gas). (HL only)" },
    ]),
    ...sub(TC, 'ib-dp-biology-3-c2-2', 'C2.2', [
      { n: 1, f: "How is the resting potential of a neuron produced?", b: "The sodium–potassium pump uses ATP to move 3 Na⁺ out and 2 K⁺ in per cycle. K⁺ leaks out through open channels while few Na⁺ channels are open, and negative molecules stay inside, so the inside is about −70 mV." },
      { n: 2, f: "Transmission across an excitatory chemical synapse", b: "Action potential depolarises the presynaptic membrane; voltage-gated Ca²⁺ channels open and Ca²⁺ enters; vesicles fuse and release neurotransmitter by exocytosis; it diffuses across the cleft and binds receptors; positive ions enter, giving an EPSP; the neurotransmitter is removed." },
      { n: 3, f: "Which nerve fibres conduct impulses fastest?", b: "Wider fibres (such as giant axons, with low resistance to ion flow) and myelinated fibres conduct faster than narrow non-myelinated ones." },
      { n: 4, f: "EPSP", b: "Excitatory postsynaptic potential: a small depolarisation of the postsynaptic membrane. It is graded, unlike an all-or-nothing action potential.", src: NEUR },
      { n: 5, f: "Ion movements in an action potential", b: "Depolarisation: after threshold (about −55 mV), voltage-gated Na⁺ channels open and Na⁺ enters; potential rises to about +30 mV.\nRepolarisation: Na⁺ channels close, K⁺ channels open, K⁺ leaves; potential falls below rest before the pump restores it. (HL only)" },
      { n: 6, f: "Resting −70 mV, threshold −55 mV. Three EPSPs of +6 mV arrive together; then one IPSP of −4 mV is added. Does the neuron fire each time?", b: "−70 + 6 + 6 + 6 = −52 mV: threshold reached, it fires.\nWith the IPSP: −52 − 4 = −56 mV: below threshold, it does not fire. (HL only)" },
    ]),
    ...sub(TC, 'ib-dp-biology-3-c3-1', 'C3.1', [
      { n: 1, f: "Emergent property", b: "A feature of the whole that its separate parts do not have. Example: a cardiac muscle cell cannot pump blood, but the heart can.", src: INT },
      { n: 2, f: "Nervous and endocrine signalling compared", b: "Nervous: electrical impulses then chemicals across synapses; to specific targets; very fast; brief.\nEndocrine: hormones in the blood; reach any cell with the receptor; slower; longer lasting." },
      { n: 3, f: "The pain reflex arc in order", b: "Pain receptor (free nerve ending in the skin) → sensory neuron entering the cord by the dorsal root → one interneuron in the grey matter → motor neuron leaving by the ventral root → skeletal muscle contracts to withdraw the hand." },
      { n: 4, f: "Dorsal and ventral roots of the spinal cord", b: "Dorsal root: sensory fibres in (the dorsal root ganglion holds sensory neuron cell bodies).\nVentral root: motor fibres out.", src: INT },
      { n: 5, f: "Effects of epinephrine in preparing for vigorous activity", b: "Raises heart rate and stroke volume; diverts blood to skeletal muscle from gut and skin; widens bronchioles; makes the liver convert glycogen to glucose; widens pupils.", src: HORM },
      { n: 6, f: "How does auxin make plant cells elongate?", b: "Auxin causes proton pumps to move H⁺ into the cell wall; the lower pH loosens cellulose cross-links; water enters and turgor stretches the wall, so the cell elongates. In phototropism auxin is moved to the shaded side by efflux carriers. (HL only)" },
    ]),
    ...sub(TC, 'ib-dp-biology-3-c3-2', 'C3.2', [
      { n: 1, f: "Blood clotting in order", b: "Platelets release clotting factors; a cascade of reactions follows; thrombin forms; thrombin converts soluble fibrinogen to insoluble fibrin; a fibrin mesh traps erythrocytes, forming the clot." },
      { n: 2, f: "Innate and adaptive immunity", b: "Innate: broad, unchanged through life, no memory; phagocytes.\nAdaptive: specific to one pathogen, develops through life, builds memory; B-cells and T-cells.", src: DEF },
      { n: 3, f: "Clonal selection and antibody production", b: "A B-cell binds its specific antigen; a helper T-cell activated by the same antigen contacts it; the activated B-cell divides by mitosis; the clone becomes plasma cells (secrete antibody) and memory cells." },
      { n: 4, f: "How does HIV infection lead to AIDS?", b: "HIV infects and kills helper T-cells, so fewer B-cells are activated and less antibody is made. Opportunistic infections follow; AIDS is the later condition caused by this loss of immune function." },
      { n: 5, f: "Why do antibiotics harm bacteria but not human cells or viruses?", b: "They target bacterial cell wall synthesis or bacterial ribosomes, which differ from human cells (no cell wall; different ribosomes). Viruses have no metabolism or ribosomes of their own, so there is no target." },
      { n: 6, f: "Zoonosis", b: "An infectious disease that transfers from other species to humans. Examples: tuberculosis (some cases, from cattle), rabies, Japanese encephalitis, COVID-19.", src: DEF },
    ]),
    ...sub(TC, 'ib-dp-biology-3-c4-1', 'C4.1', [
      { n: 1, f: "25 snails are marked; a second sample of 30 contains 6 marked. Estimate the population with the Lincoln index.", b: "Population = M × N ÷ R = 25 × 30 ÷ 6 = 125." },
      { n: 2, f: "Carrying capacity, and the phases of a sigmoid growth curve", b: "Carrying capacity: the largest population the environment can support indefinitely. Phases: exponential (resources plentiful), transition (density-dependent factors build), plateau near carrying capacity (births roughly equal deaths).", src: POPS },
      { n: 3, f: "Density-dependent and density-independent factors", b: "Density-dependent: effect grows as density rises (competition, predation, pathogens); negative feedback towards carrying capacity.\nDensity-independent: same effect whatever the density (fire, drought); makes numbers fluctuate.", src: POPS },
      { n: 4, f: "Legume root nodules as a mutualism", b: "Rhizobium bacteria fix nitrogen for the plant; the plant supplies carbohydrate and a low-oxygen home. Both partners gain." },
      { n: 5, f: "Chi-squared test for association: 100 sites, species A at 40, species B at 30. Expected number of sites with both?", b: "Expected = row total × column total ÷ grand total = 40 × 30 ÷ 100 = 12. Degrees of freedom for a 2 × 2 table = 1; critical value 3.84 at 5%." },
      { n: 6, f: "Why do lynx numbers peak after snowshoe hare numbers?", b: "Predator–prey cycles are delayed negative feedback: more hares feed more lynx after a delay; more lynx then reduce the hares, and lynx numbers fall. The cycle is roughly ten years; hare food supply matters too." },
    ]),
    ...sub(TC, 'ib-dp-biology-3-c4-2', 'C4.2', [
      { n: 1, f: "Open and closed systems", b: "Open: exchanges both energy and matter with its surroundings (an ecosystem).\nClosed: exchanges energy only (a sealed jar ecosystem).", src: EFLOW },
      { n: 2, f: "Photoautotroph and chemoautotroph", b: "Both make carbon compounds from CO₂. Photoautotrophs use light (plants, algae, cyanobacteria); chemoautotrophs use energy from oxidation of inorganic substances (iron-oxidising bacteria).", src: EFLOW },
      { n: 3, f: "Why do food chains rarely have more than four or five trophic levels?", b: "Energy is lost at every transfer (respiration as heat, faeces, uneaten parts, excretion), so the top level would receive too little energy to support a viable population. Energy is not recycled." },
      { n: 4, f: "Units of an energy pyramid", b: "Energy per unit area per unit time, for example kJ m⁻² year⁻¹. One bar per trophic level, producers at the bottom, drawn to one scale." },
      { n: 5, f: "Carbon sink and carbon source", b: "Sink: takes up more CO₂ than it releases (photosynthesis exceeds respiration).\nSource: releases more than it takes up. Judged on net flux, not the size of the store.", src: PROD },
      { n: 6, f: "Explain the two patterns in the Keeling Curve", b: "Annual fluctuation: CO₂ falls in the northern hemisphere growing season (photosynthesis exceeds respiration) and rises in autumn and winter.\nLong-term rise: combustion of fossil fuels adds carbon that photosynthesis does not offset." },
    ]),

    // Theme D: Continuity and change
    ...sub(TD, 'ib-dp-biology-4-d1-1', 'D1.1', [
      { n: 1, f: "Semi-conservative replication", b: "Each new DNA molecule consists of one original strand and one new strand. Accuracy comes from complementary base pairing with the template.", src: DRM },
      { n: 2, f: "Roles of helicase and DNA polymerase", b: "Helicase unwinds the helix by breaking hydrogen bonds between the strands. DNA polymerase builds the new strand by linking nucleotides that pair with the template (covalent backbone bonds)." },
      { n: 3, f: "PCR: the role of primers and Taq polymerase, and the three temperatures", b: "Primers bind the ends of the target and give polymerase a 3' end to extend. Taq polymerase is heat-stable. Denature about 95 °C; anneal about 55–60 °C; extend about 72 °C. Ideal copies after n cycles = 2ⁿ." },
      { n: 4, f: "Gel electrophoresis of DNA", b: "DNA is negatively charged (phosphate groups), so it moves towards the positive electrode; smaller fragments move further. Sizes are estimated against a ladder. Used in DNA profiling for forensics and paternity." },
      { n: 5, f: "Leading and lagging strands", b: "DNA is synthesised only 5' to 3'. The leading strand is made continuously from one primer; the lagging strand is made discontinuously as Okazaki fragments, each with its own primer. (HL only)" },
      { n: 6, f: "Roles of primase, DNA polymerase III, DNA polymerase I and DNA ligase (prokaryotes)", b: "Primase makes RNA primers; DNA polymerase III extends them with DNA and proofreads; DNA polymerase I replaces RNA primers with DNA; DNA ligase joins fragments into a continuous strand. (HL only)" },
    ]),
    ...sub(TD, 'ib-dp-biology-4-d1-2', 'D1.2', [
      { n: 1, f: "Transcription", b: "Synthesis of RNA from a DNA template by RNA polymerase, which unwinds a short region of DNA and links RNA nucleotides by complementary pairing (A–U, T–A, G–C, C–G).", src: PSYN },
      { n: 2, f: "Template strand and coding strand", b: "The mRNA is complementary to the template strand and has the same sequence as the coding strand, with U in place of T." },
      { n: 3, f: "Elongation in translation", b: "A tRNA with a matching anticodon binds the codon; a peptide bond forms (condensation) between its amino acid and the chain; the ribosome moves one codon along the mRNA; the empty tRNA is released." },
      { n: 4, f: "Sickle cell disease: the mutation and its effect", b: "In the β chain of haemoglobin, the mRNA codon GAG (glutamic acid) becomes GUG (valine), a missense mutation. The altered haemoglobin aggregates at low oxygen." },
      { n: 5, f: "Post-transcriptional processing of eukaryotic mRNA", b: "Introns are removed and exons spliced together; a 5' cap and poly-A tail stabilise the mRNA. Alternative splicing joins different exon combinations, so one gene can give different polypeptides. (HL only)" },
      { n: 6, f: "Roles of the A, P and E sites of a ribosome", b: "A site: an incoming tRNA arrives. P site: holds the tRNA carrying the growing chain. E site: the tRNA exits. (HL only)" },
    ]),
    ...sub(TD, 'ib-dp-biology-4-d1-3', 'D1.3', [
      { n: 1, f: "SNP (as the result of a mutation)", b: "A single-nucleotide difference at one position among individuals, arising from a base substitution.", src: DRM },
      { n: 2, f: "Silent, missense and nonsense mutations", b: "Silent: same amino acid (the code is degenerate).\nMissense: a different amino acid.\nNonsense: a stop codon appears, giving a truncated polypeptide." },
      { n: 3, f: "Frameshift mutation", b: "An insertion or deletion of bases (not a multiple of three) that changes every codon downstream; the polypeptide is very likely non-functional.", src: DRM },
      { n: 4, f: "Mutations in germ cells and in somatic cells", b: "Germ cells: the mutation can be inherited and be present in every cell of the offspring.\nSomatic cells: not inherited, but can cause cancer.", src: DRM },
      { n: 5, f: "CRISPR-Cas9 gene editing", b: "A guide RNA matches a target sequence; Cas9 cuts the DNA there; repair either disables the gene or uses a supplied template to change it. Example: a CRISPR-based sickle cell treatment authorised in 2023. (HL only)", src: DRM },
      { n: 6, f: "Conserved and highly conserved sequences", b: "Conserved: similar across a species or group. Highly conserved: similar over long evolutionary periods. Hypotheses: the function of the gene product restricts change, or the mutation rate is slower there. (HL only)", src: DRM },
    ]),
    ...sub(TD, 'ib-dp-biology-4-d2-1', 'D2.1', [
      { n: 1, f: "Cytokinesis in animal and plant cells", b: "Animal: a ring of actin and myosin contracts, pinching the membrane inwards (a furrow).\nPlant: vesicles fuse across the middle and build new membrane and wall outwards (a cell plate)." },
      { n: 2, f: "Mitosis and meiosis compared", b: "Mitosis: one division, two nuclei, same chromosome number, genetically identical; no pairing.\nMeiosis: two divisions, four nuclei, chromosome number halved, genetically different; homologues pair and cross over in meiosis I." },
      { n: 3, f: "Non-disjunction and Down syndrome", b: "Chromosomes or chromatids fail to separate in meiosis. A gamete with 24 chromosomes fusing with a normal gamete (23) gives a zygote with 47, three copies of chromosome 21: trisomy 21 (Down syndrome).", src: CDIV },
      { n: 4, f: "How many chromosome combinations can random orientation give when n = 6?", b: "2ⁿ = 2⁶ = 64, where n is the haploid number. Random orientation of bivalents happens in metaphase I; crossing over in prophase I adds more variation." },
      { n: 5, f: "Control of the cell cycle by cyclins", b: "Cyclin concentrations rise and fall in a pattern through the cycle; a specific cyclin must reach a threshold for the cell to pass each checkpoint. (HL only)" },
      { n: 6, f: "23 of 310 cells counted are in mitosis. What is the mitotic index?", b: "Cells in mitosis ÷ total cells = 23 ÷ 310 = 0.0742, or 7.42%. (HL only)" },
    ]),
    ...sub(TD, 'ib-dp-biology-4-d2-2', 'D2.2', [
      { n: 1, f: "Promoter and enhancer", b: "Promoter: DNA sequence next to a gene where RNA polymerase attaches.\nEnhancer: DNA sequence where regulatory proteins bind to raise transcription of a gene. (HL only)", src: GEX },
      { n: 2, f: "Genome, transcriptome and proteome", b: "Genome: all the DNA of a cell (the same in nearly all cells).\nTranscriptome: all the mRNA in a cell at a given time.\nProteome: all the proteins in a cell. Transcriptome and proteome differ between cell types. (HL only)", src: GEX },
      { n: 3, f: "How does DNA methylation affect gene expression, and is it inherited?", b: "Methylated cytosine in a promoter represses transcription, silencing the gene. Tags stay in place through mitosis; if they survive meiosis, offspring may show the change. The base sequence is unchanged. (HL only)" },
      { n: 4, f: "How does lactose switch on genes in bacteria?", b: "Without lactose the repressor sits on the operator, blocking RNA polymerase. A lactose-derived molecule binds the repressor, which changes shape and leaves the operator, so the genes for lactose use are transcribed. (HL only)" },
      { n: 5, f: "What do studies of monozygotic twins show about epigenetics?", b: "They share a genome, so differences in expression come from the environment. Older pairs, and pairs who spent more years apart, may show larger differences in methylation. (HL only)" },
    ]),
    ...sub(TD, 'ib-dp-biology-4-d2-3', 'D2.3', [
      { n: 1, f: "Hypertonic, hypotonic and isotonic", b: "Hypertonic: higher solute concentration than the solution compared with.\nHypotonic: lower solute concentration.\nIsotonic: equal; water still crosses both ways at equal rates (dynamic equilibrium).", src: WP },
      { n: 2, f: "Animal and plant cells in hypotonic and hypertonic solutions", b: "Hypotonic: animal cell swells and may burst; plant cell becomes turgid (the wall resists expansion).\nHypertonic: animal cell crenates; plant cell plasmolyses (membrane pulls away from the wall)." },
      { n: 3, f: "Plant tissue changes from 1.50 g to 1.38 g in a sucrose solution. Percentage change, and what it shows?", b: "(1.38 − 1.50) ÷ 1.50 × 100 = −8.0%. Mass fell, so the solution was hypertonic to the cells and water left by osmosis." },
      { n: 4, f: "Why are intravenous fluids and organ-bathing solutions isotonic?", b: "No net water movement into or out of cells, so blood cells and donor organ cells neither swell nor shrink. Distilled water in a vein would make red blood cells swell and burst." },
      { n: 5, f: "Water potential and the direction of water movement", b: "Potential energy of water per unit volume, relative to pure water at 20 °C and normal air pressure (0 kPa). Solutes lower it. Water moves from higher (less negative) to lower (more negative) water potential. (HL only)", src: WP },
      { n: 6, f: "A cell has ψs = −650 kPa and ψp = +400 kPa. What is its water potential?", b: "ψw = ψs + ψp = −650 + 400 = −250 kPa. In a solution of −250 kPa there is no net movement of water. (HL only)" },
    ]),
    ...sub(TD, 'ib-dp-biology-4-d3-1', 'D3.1', [
      { n: 1, f: "Asexual and sexual reproduction compared", b: "Asexual: one parent, mitosis, clones; fast and keeps a successful genotype in a stable environment.\nSexual: usually two parents, meiosis and fusion of gametes, varied offspring; new allele combinations may suit a changed environment." },
      { n: 2, f: "Roles of FSH, LH, oestradiol and progesterone in the menstrual cycle", b: "FSH (pituitary): follicle growth. LH (pituitary): surge triggers ovulation; corpus luteum forms. Oestradiol (follicle): thickens endometrium; feedback on FSH and LH. Progesterone (corpus luteum): maintains endometrium; inhibits FSH and LH.", src: REPRO },
      { n: 3, f: "What causes the LH surge?", b: "Oestradiol at low to moderate levels gives negative feedback on FSH and LH; when oestradiol stays high for long enough it gives positive feedback, causing the LH surge and ovulation about mid-cycle." },
      { n: 4, f: "Pollination, fertilisation and seed dispersal", b: "Pollination: pollen moves from anther to stigma.\nFertilisation: later fusion of gametes in the ovule, after a pollen tube grows down the style.\nDispersal: the seed moves away from the parent plant." },
      { n: 5, f: "Acrosome reaction and cortical reaction", b: "Acrosome reaction (sperm): enzymes digest a route through the zona pellucida.\nCortical reaction (egg): cortical granules release contents that change the zona pellucida so no more sperm can pass, preventing polyspermy. (HL only)", src: HREPRO },
      { n: 6, f: "Spermatogenesis and oogenesis: gametes from one cell", b: "One primary spermatocyte gives four equal sperm. One primary oocyte gives one large ovum (which keeps the cytoplasm) and small polar bodies. Both involve mitosis, growth, two meiotic divisions and differentiation. (HL only)" },
    ]),
    ...sub(TD, 'ib-dp-biology-4-d3-2', 'D3.2', [
      { n: 1, f: "Codominance and incomplete dominance", b: "Codominance: the heterozygote shows both phenotypes at once (group AB, IᴬIᴮ).\nIncomplete dominance: the heterozygote has an intermediate phenotype (pink Mirabilis jalapa flowers).", src: INHER },
      { n: 2, f: "Haemophilia: carrier mother (XᴴXʰ) × unaffected father (XᴴY). Outcomes?", b: "Offspring XᴴXᴴ, XᴴY, XᴴXʰ, XʰY, each 1/4. Half the sons affected, half the daughters carriers, no affected daughters. A son always gets his X from his mother." },
      { n: 3, f: "Two PKU carriers have three children. Probability that none is affected?", b: "Each child is unaffected with probability 3/4, independently. (3/4)³ = 27/64 ≈ 0.42." },
      { n: 4, f: "Pedigree: what do these show? (a) two unaffected parents with an affected child (b) two affected parents with an unaffected child", b: "(a) The allele is recessive and both parents are carriers.\n(b) The allele is dominant and both parents are heterozygous." },
      { n: 5, f: "RT | rt × rt | rt gives RT 104, rt 96, Rt 52, rT 48. Recombinant frequency?", b: "Recombinants are the smallest classes: 52 + 48 = 100. 100 ÷ 300 × 100 = 33.3%. Below 50%, so the genes are linked. (HL only)" },
      { n: 6, f: "Expected ratios for unlinked genes: AaBb × AaBb and AaBb × aabb", b: "AaBb × AaBb: 9 : 3 : 3 : 1.\nAaBb × aabb (test cross): 1 : 1 : 1 : 1.\nBoth follow from independent assortment of bivalents in metaphase I. (HL only)", src: DIHY },
    ]),
    ...sub(TD, 'ib-dp-biology-4-d3-3', 'D3.3', [
      { n: 1, f: "Insulin and glucagon compared", b: "Insulin: beta cells of the pancreas; released when blood glucose is high; liver, muscle and fat cells take up glucose and store it as glycogen; glucose falls.\nGlucagon: alpha cells; released when glucose is low; mainly liver breaks down glycogen; glucose rises." },
      { n: 2, f: "Type 1 and type 2 diabetes", b: "Type 1: beta cells destroyed (autoimmune); little or no insulin; treated with insulin.\nType 2: target cells less responsive to insulin; risk factors excess body fat, inactivity, diet, age, family history; managed by diet and exercise, medicines, sometimes insulin." },
      { n: 3, f: "How does brown adipose tissue release heat?", b: "By uncoupled respiration: protons leak back across the inner mitochondrial membrane, so the energy is released as heat rather than used to make ATP.", src: HOMEO },
      { n: 4, f: "Thermoregulation responses to cold", b: "Thermoreceptors and the hypothalamus detect the fall. Skin arterioles constrict, muscles shiver, brown adipose tissue releases heat, hairs are raised, and the hypothalamus–pituitary–thyroid route increases thyroxin, raising metabolic rate." },
      { n: 5, f: "Response of the collecting duct when the blood is too concentrated", b: "Osmoreceptors in the hypothalamus detect it; the pituitary releases more ADH; vesicles carrying aquaporins fuse with collecting duct membranes; more water leaves the duct by osmosis, giving a small volume of concentrated urine. (HL only)" },
      { n: 6, f: "Ultrafiltration in the glomerulus", b: "High pressure pushes plasma through the capillary wall, the basement membrane and the slits between podocytes into Bowman's capsule. Water, glucose, amino acids, urea and ions pass; blood cells and large plasma proteins stay. (HL only)" },
    ]),
    ...sub(TD, 'ib-dp-biology-4-d4-1', 'D4.1', [
      { n: 1, f: "The logic of natural selection", b: "Populations show variation; more offspring are produced than the environment can support, so there is a struggle for resources; better-adapted individuals survive and breed more; if the traits are heritable, their alleles become more common; repeated over generations, the population changes." },
      { n: 2, f: "Sources of variation", b: "Mutation makes new alleles. Meiosis (crossing over and independent assortment) and random fertilisation give new combinations but no new alleles.", src: NATSEL },
      { n: 3, f: "What did Endler's guppy studies show about sexual selection?", b: "Bright colour improves mating success but attracts predators. Where predators are few, males become brighter; where predators are many, males are duller. The trait balances mating benefit against survival cost." },
      { n: 4, f: "Fitness", b: "The survival value plus reproductive potential of a genotype, judged by the number of offspring that survive to breed.", src: NATSEL },
      { n: 5, f: "A recessive trait occurs in 0.49% of a population. What proportion are carriers?", b: "q² = 0.0049, so q = 0.07 and p = 0.93. Carriers = 2pq = 2 × 0.93 × 0.07 = 0.1302, about 13.0%. (HL only)" },
      { n: 6, f: "Is antibiotic resistance in bacteria natural or artificial selection?", b: "Natural selection: the antibiotic is a selection pressure, but nobody chooses which bacteria breed. In artificial selection humans choose the parents (crops, dogs, dairy cattle). (HL only)" },
    ]),
    ...sub(TD, 'ib-dp-biology-4-d4-2', 'D4.2', [
      { n: 1, f: "Four requirements for ecosystem stability", b: "An energy supply, recycling of nutrients, genetic diversity, and climatic variables that stay within tolerance levels." },
      { n: 2, f: "Keystone species", b: "A species with a disproportionate effect on community structure compared with its abundance. Removing it can cause collapse. Keystone is about impact; dominant is about numbers.", src: STAB },
      { n: 3, f: "Eutrophication chain, and the role of BOD", b: "Leaching of nitrogen and phosphate; algal bloom; light blocked; plants die; decomposers multiply and respire; BOD (oxygen used by microbes decomposing organic matter) rises; oxygen falls; fish die.", src: STAB },
      { n: 4, f: "Biomagnification, with two examples", b: "Rising concentration of a persistent toxin at each higher trophic level. DDT (insecticide) caused eggshell thinning in some predatory birds; mercury accumulates in large predatory fish.", src: STAB },
      { n: 5, f: "When is a harvest sustainable, and how is it checked?", b: "When the harvest rate is lower than the replacement rate. Check indicators over time: catch per unit effort, fish size and age, seedling counts, age structure.", src: STAB },
      { n: 6, f: "Cyclical and arrested succession", b: "Cyclical: a repeating cycle of communities, such as the phases of heather moorland.\nArrested: human activity holds the community at an earlier stage, for example livestock grazing or wetland drainage. (HL only)", src: STAB },
    ]),
    ...sub(TD, 'ib-dp-biology-4-d4-3', 'D4.3', [
      { n: 1, f: "Greenhouse gas", b: "A gas that absorbs and re-emits infrared radiation, reducing heat loss to space. Carbon dioxide (combustion, forest clearance) and methane (cattle, rice fields, waste tips, gas leaks).", src: CLIM },
      { n: 2, f: "Give two positive feedback loops in global warming", b: "Melting ice and snow leaves a darker surface (lower albedo) that absorbs more sunlight, so more melting. Thawing permafrost and peat decompose faster, releasing CO₂ and methane, so more warming." },
      { n: 3, f: "Ocean acidification and coral bleaching", b: "Acidification: CO₂ dissolves and pH falls, suppressing calcification.\nBleaching: higher water temperature makes corals expel their algae, so they starve.\nLoss of corals collapses the reef habitat and food web." },
      { n: 4, f: "How are species ranges shifting with climate change?", b: "Poleward and upslope, because the cooler edge of each species' tolerable temperature range moves there. Evidence: montane birds in New Guinea moving upslope; North American trees spreading north. Limits: summits, slow dispersal, fragmentation." },
      { n: 5, f: "Loss of synchrony: great tits and caterpillars", b: "When two linked populations use different timing cues (one temperature, one photoperiod), warming can separate them. Great tit (Parus major) breeding can miss peak caterpillar biomass, so chicks get less food. (HL only)" },
      { n: 6, f: "Why does warming increase outbreaks of the spruce bark beetle?", b: "Warmth speeds the development of Ips typographus, so there are more generations a year and larger outbreaks. (HL only)" },
    ]),
  ],
};
