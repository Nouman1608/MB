/**
 * D-438 -- flashcards for Pearson Edexcel International A Level Biology YBI11 (Issue 2).
 *
 * The syllabus record lists the specification's eight numbered topics with no
 * subtopics (each topic is a flat run of numbered statements), so every card
 * uses topicOnly() and ids `<topic number>-<n>`. Ids are permanent (browser
 * progress is keyed by them): add a new card with the next unused n, never
 * renumber.
 *
 *   YBI11 is not tiered, so no card is upper tier.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs YBI11); origin 'revision-notes'.
 *
 * Plain text only (see types.ts). Unicode for formulae.
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; u?: true; src?: string }

/** For a topic that itemises no subtopics: the card names the topic only. */
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

const T1 = 'molecules-transport-and-health-edexcel-alevel-biology';
const T2 = 'membranes-proteins-dna-and-gene-expression-edexcel-alevel-biology';
const T3 = 'cell-structure-reproduction-and-development-edexcel-alevel-biology';
const T4 = 'plant-structure-and-function-biodiversity-and-conservation-edexcel-alevel-biology';
const T5 = 'energy-flow-ecosystems-and-the-environment-edexcel-alevel-biology';
const T6 = 'microbiology-immunity-and-forensics-edexcel-alevel-biology';
const T7 = 'respiration-muscles-and-the-internal-environment-edexcel-alevel-biology';
const T8 = 'coordination-response-and-gene-technology-edexcel-alevel-biology';

const MT = 'edexcel-a-level-biology-molecules-transport-revision-notes';
const MG = 'edexcel-a-level-biology-membranes-gas-exchange-revision-notes';
const STEM = 'edexcel-ial-biology-stem-cells-differential-gene-expression-and-phenotype-revision-notes';
const PMIN = 'edexcel-ial-biology-plant-minerals-antimicrobial-plant-substances-and-drug-revision-notes';
const CBHW = 'edexcel-ial-biology-classification-biodiversity-hardy-weinberg-and-revision-notes';
const PROD = 'edexcel-ial-biology-productivity-populations-niche-and-succession-revision-notes';
const AIA = 'edexcel-ial-biology-adaptive-immunity-immunisation-and-antibiotics-revision-notes';
const RESP = 'edexcel-ial-biology-aerobic-and-anaerobic-respiration-revision-notes';
const HOME = 'edexcel-ial-biology-homeostasis-the-kidney-osmoregulation-and-gene-revision-notes';
const SENS = 'edexcel-ial-biology-sensory-reception-plant-hormones-and-the-brain-revision-notes';

export const DECK_EDEXCEL_A_LEVEL_BIOLOGY: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'a-level',
  subjectSlug: 'biology',
  syllabusCode: 'YBI11',
  syllabusSeries: 'Issue 2',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // Topic 1 Molecules, Transport and Health
    ...topicOnly(T1, '1', [
      { n: 1, f: 'Condensation vs hydrolysis', b: 'Condensation joins monomers and releases water. Hydrolysis breaks the bond using water.' },
      { n: 2, f: 'Monomer, bond and polymer for carbohydrates, proteins and nucleic acids', b: 'Monosaccharide → glycosidic bond → polysaccharide.\nAmino acid → peptide bond → polypeptide.\nNucleotide → phosphodiester bond → nucleic acid.' },
      { n: 3, f: 'Starch and glycogen vs cellulose', b: 'Starch and glycogen: α-glucose, coiled or branched, for storage.\nCellulose: β-glucose with alternate molecules inverted, giving straight chains that hydrogen-bond into microfibrils of high tensile strength.' },
      { n: 4, f: 'Why are oils liquid at room temperature?', b: 'They contain unsaturated fatty acids, whose C=C double bonds produce kinks that stop the chains packing closely.' },
      { n: 5, f: 'Properties of water and their importance', b: 'Polar: solvent for ions and polar molecules. High specific heat capacity: buffers temperature change. High latent heat of vaporisation: cooling by evaporation. Cohesion: continuous column in xylem. Ice floats and insulates. All due to hydrogen bonding.' },
      { n: 6, f: 'Why do large organisms need a mass transport system?', b: 'Their surface area to volume ratio is too small for diffusion alone to supply their needs quickly enough over the distances involved.' },
      { n: 7, f: 'Advantage of a double circulation', b: 'Blood passes through the heart twice per circuit, keeping oxygenated and deoxygenated blood separate and allowing the systemic circuit to run at a higher pressure.' },
      { n: 8, f: 'Arteries vs veins vs capillaries', b: 'Artery: thick muscular wall, elastic fibres, narrow lumen; withstands high pressure, recoil smooths flow.\nVein: thin wall, wide lumen, valves; low pressure.\nCapillary: one cell thick; short diffusion distance.', src: MT },
      { n: 9, f: 'The cardiac cycle', b: 'Atrial systole: atria contract, forcing blood into the ventricles.\nVentricular systole: ventricles contract; AV valves close, semilunar valves open.\nDiastole: all chambers relax; semilunar valves close; atria refill.' },
      { n: 10, f: 'What opens and closes the heart valves?', b: 'Pressure differences alone. A valve opens when the pressure behind it exceeds the pressure in front, and closes when the reverse is true. Valves are passive flaps, not muscles.' },
      { n: 11, f: 'Sequence of events in atherosclerosis', b: 'Endothelium damaged (high blood pressure, smoking) → inflammatory response, white blood cells gather → cholesterol and lipids deposit, forming an atheroma → calcium salts and fibrous tissue harden it, narrowing the lumen → higher pressure causes more damage.' },
      { n: 12, f: 'How can an atheroma cause a heart attack or stroke?', b: 'A plaque may rupture and trigger a thrombus (blood clot) that blocks the artery. A blocked coronary artery causes a myocardial infarction; a blockage in the brain causes a stroke.' },
      { n: 13, f: 'HDL vs LDL', b: 'HDL transports cholesterol to the liver for disposal and is protective. LDL transports cholesterol to the tissues and is associated with plaque formation.' },
      { n: 14, f: 'Modifiable and non-modifiable risk factors for CVD', b: 'Modifiable: diet high in saturated fat and salt, smoking, inactivity, obesity, high alcohol intake.\nNon-modifiable: age, sex, genetics.' },
      { n: 15, f: 'Statins and anticoagulants: benefit and risk', b: 'Statins lower LDL cholesterol by inhibiting a liver enzyme in cholesterol synthesis; side effects include muscle pain.\nAnticoagulants (such as warfarin) reduce clotting, lowering thrombus risk, but raise the risk of serious bleeding.' },
      { n: 16, f: 'How should a study of a CVD risk factor be evaluated?', b: 'Check sample size and whether it was representative, whether it was controlled, how long it ran, whether other variables were accounted for, and who funded it. Correlation does not establish causation.' },
    ]),

    // Topic 2 Membranes, Proteins, DNA and Gene Expression
    ...topicOnly(T2, '2', [
      { n: 1, f: "Fick's law and features of an efficient gas exchange surface", b: 'Rate of diffusion ∝ (surface area × concentration difference) ÷ diffusion distance. Alveoli: large surface area; thin walls: short distance; ventilation and blood flow: steep concentration gradient.' },
      { n: 2, f: 'Fluid mosaic model', b: 'The membrane is a fluid phospholipid bilayer with a varied (mosaic) arrangement of embedded proteins, cholesterol and other components. It is a scientific model built from interpreting experimental data.' },
      { n: 3, f: 'Effect of temperature and alcohol on membrane permeability (beetroot)', b: 'Both increase permeability, measured by pigment leakage from beetroot tissue. Temperature increases the kinetic energy and movement of phospholipids; alcohol disrupts the phospholipid bilayer.' },
      { n: 4, f: 'Osmosis', b: 'The movement of free water molecules through a partially permeable membrane, down a water potential gradient (from higher to lower water potential). Pure water has the highest water potential.' },
      { n: 5, f: 'Diffusion, facilitated diffusion and active transport compared', b: 'Diffusion: down a gradient, no ATP, no protein needed.\nFacilitated diffusion: down a gradient, no ATP, through channel or carrier proteins.\nActive transport: against a gradient, uses ATP, carrier proteins.', src: MG },
      { n: 6, f: 'Endocytosis vs exocytosis', b: 'Both are bulk transport using vesicles and ATP. Endocytosis takes material into the cell; exocytosis releases it out of the cell.', src: MG },
      { n: 7, f: 'Levels of protein structure', b: 'Primary: amino acid sequence. Secondary: α-helix or β-pleated sheet held by hydrogen bonds. Tertiary: 3-D shape held by hydrogen, ionic and disulfide bonds and hydrophobic interactions. Quaternary: more than one polypeptide.' },
      { n: 8, f: 'Globular vs fibrous proteins', b: 'Globular: compact and soluble, with metabolic roles (for example haemoglobin, enzymes).\nFibrous: long, insoluble strands with structural roles (for example collagen).' },
      { n: 9, f: 'How do enzymes speed up reactions?', b: 'The substrate binds to the complementary active site, forming an enzyme–substrate complex, which lowers the activation energy of the reaction. The enzyme is unchanged at the end.' },
      { n: 10, f: 'Structure of DNA', b: 'Two antiparallel polynucleotide strands of deoxyribose nucleotides, joined by phosphodiester bonds, with complementary bases (A–T, C–G) held by hydrogen bonds, coiled into a double helix.' },
      { n: 11, f: 'Semi-conservative replication and the Meselson–Stahl evidence', b: 'Each new DNA molecule has one original and one new strand. Bacteria grown on ¹⁵N then moved to ¹⁴N gave only intermediate-density DNA after one generation, then intermediate and light bands, ruling out conservative replication.' },
      { n: 12, f: 'Features of the genetic code', b: 'A triplet code (three bases per amino acid), non-overlapping and degenerate (most amino acids have more than one codon). It includes start and stop codons.' },
      { n: 13, f: 'Transcription vs translation', b: 'Transcription: in the nucleus, RNA polymerase makes mRNA complementary to the template strand of a gene.\nTranslation: at a ribosome, tRNA anticodons pair with mRNA codons and amino acids are joined by peptide bonds.' },
      { n: 14, f: 'Gene mutation and its effect on a protein', b: 'A change in the base sequence of DNA. It can change the amino acid sequence (primary structure), and so the tertiary structure and function of the protein. A substitution may have no effect because the code is degenerate.' },
      { n: 15, f: 'Genetic terms: allele, genotype, phenotype, homozygous, heterozygous', b: 'Allele: a version of a gene. Genotype: the alleles an organism has. Phenotype: its observable characteristics. Homozygous: two identical alleles. Heterozygous: two different alleles.' },
      { n: 16, f: 'How does cystic fibrosis affect the body?', b: 'A recessive allele codes for a faulty CFTR channel protein, so chloride ions are not secreted properly and mucus is thick and sticky. It blocks airways (more infections), pancreatic ducts (poor digestion) and reproductive ducts.' },
    ]),

    // Topic 3 Cell Structure, Reproduction and Development
    ...topicOnly(T3, '3', [
      { n: 1, f: 'Pathway of a secreted protein in a eukaryotic cell', b: 'Transcription in the nucleus; mRNA leaves via a pore → translated on rER ribosomes; polypeptide folds in the lumen → transport vesicle to the Golgi → modified and packaged into secretory vesicles → exocytosis at the cell surface membrane.' },
      { n: 2, f: 'rER vs sER', b: 'rER: flat sacs with ribosomes; folds and processes proteins.\nsER: tubes with no ribosomes; lipid synthesis and storage.' },
      { n: 3, f: 'Functions of the prokaryotic capsule, plasmid, flagellum and pili', b: 'Capsule: protection, helps adhesion. Plasmid: small extra DNA loop, may carry resistance genes. Flagellum: movement by rotating. Pili: attachment; some transfer DNA.' },
      { n: 4, f: 'Magnification and resolution', b: 'Magnification = size of image ÷ size of real object.\nResolution = the smallest separation at which two points are seen as two. Electrons have a much shorter wavelength than light, so electron microscopes resolve much finer detail.' },
      { n: 5, f: 'A cell image is 52 mm across and the real cell is 8 µm. What is the magnification?', b: '52 mm = 52 000 µm. Magnification = 52 000 ÷ 8 = ×6500.' },
      { n: 6, f: 'Linked genes and recombinant frequency', b: 'Linked genes have loci on the same chromosome and are inherited together unless crossing over separates them. Recombinant frequency = recombinant offspring ÷ total offspring; a smaller value means the loci are closer together.' },
      { n: 7, f: 'How does meiosis produce genetic variation?', b: 'Crossing over between non-sister chromatids at chiasmata in prophase I; independent assortment of homologous pairs at metaphase I (2ⁿ combinations, n = haploid number); then random fusion of gametes at fertilisation.' },
      { n: 8, f: 'Acrosome reaction vs cortical reaction', b: 'Acrosome reaction: enzymes released from the sperm acrosome digest the zona pellucida.\nCortical reaction: the egg releases cortical granule contents, altering the zona so no more sperm can bind (the block to polyspermy).' },
      { n: 9, f: 'Double fertilisation in flowering plants', b: 'The pollen tube grows down the style and enters the ovule through the micropyle; the generative nucleus has divided into two male nuclei. One fuses with the egg nucleus (diploid zygote); the other with the two polar nuclei (triploid endosperm nucleus).' },
      { n: 10, f: 'Mitotic index and time in mitosis', b: 'Mitotic index = cells in mitosis ÷ total cells counted. Example: 36 of 240 = 0.15 (15 %). If the cycle lasts 20 hours, mitosis lasts about 0.15 × 20 = 3 hours.' },
      { n: 11, f: 'Mitosis vs meiosis', b: 'Mitosis: one division; two diploid, genetically identical cells; for growth, repair and asexual reproduction.\nMeiosis: two divisions; four haploid, genetically different cells; homologues pair and cross over.' },
      { n: 12, f: 'Totipotent vs pluripotent stem cells', b: 'Totipotent: can form every cell type plus extra-embryonic tissue (placenta), so a whole organism.\nPluripotent: can form all body cell types but not extra-embryonic tissue. Cells of the blastocyst inner cell mass are pluripotent.' },
      { n: 13, f: 'How does a cell become specialised (differential gene expression)?', b: 'All cells from a zygote have the same genes. A signal or transcription factor activates certain genes, which are transcribed and translated into proteins that determine the cell\'s structure and function. Other genes stay unexpressed.' },
      { n: 14, f: 'Alternative splicing', b: 'Different exons are kept or removed from the pre-mRNA, giving different mRNAs and so different polypeptides from one gene.', src: STEM },
      { n: 15, f: 'DNA methylation vs histone acetylation', b: 'Methylation: methyl groups added to cytosine, often at promoters, reducing gene expression.\nHistone acetylation: loosens chromatin and raises expression; deacetylation lowers it. Neither changes the base sequence.' },
      { n: 16, f: 'Multiple alleles vs polygenic inheritance', b: 'Multiple alleles: three or more alleles of one gene in the population, such as ABO (Iᴬ and Iᴮ codominant, Iᴼ recessive).\nPolygenic: several genes with additive effects, plus environment, giving continuous variation.' },
    ]),

    // Topic 4 Plant Structure and Function, Biodiversity and Conservation
    ...topicOnly(T4, '4', [
      { n: 1, f: 'Middle lamella, pits and plasmodesmata', b: 'Middle lamella: pectin-rich layer that cements neighbouring cells together.\nPits: thin areas of wall with no secondary thickening, for movement of water and solutes.\nPlasmodesmata: membrane-lined channels through walls linking cytoplasm.' },
      { n: 2, f: 'Amyloplast vs chloroplast', b: 'Both have a double membrane and starch grains. A chloroplast has grana and chlorophyll and carries out photosynthesis; an amyloplast has no chlorophyll and stores starch.' },
      { n: 3, f: 'Why are cellulose chains straight, and how do they give strength?', b: 'Every second β-glucose is turned upside down so the –OH groups line up for β-1,4 glycosidic bonds. Parallel chains are held by many hydrogen bonds into microfibrils with high tensile strength.' },
      { n: 4, f: 'Sclerenchyma fibre vs xylem vessel vs phloem sieve tube', b: 'Sclerenchyma: dead, thick lignified wall, narrow empty lumen; support.\nXylem vessel: dead, lignified with pits, wide lumen, no end walls; support plus water and ions.\nSieve tube: living, thin unlignified wall, sieve plates; translocation.' },
      { n: 5, f: 'Roles of nitrate, calcium and magnesium ions in plants', b: 'Nitrate: nitrogen for amino acids, proteins, nucleotides and chlorophyll.\nCalcium: calcium pectate in the middle lamella; membranes; cell division.\nMagnesium: at the centre of chlorophyll; enzyme activator.' },
      { n: 6, f: 'Why measure dry mass in a mineral deficiency investigation?', b: 'Fresh mass changes with water content; dry mass measures the biological material actually made.' },
      { n: 7, f: 'Tensile strength of a plant fibre', b: 'Tensile strength = breaking force ÷ cross-sectional area (Pa). Force F = m × g (g = 9.81 N kg⁻¹); area A = π(d/2)². Keep length, moisture and loading rate the same; measure the diameter in several places.' },
      { n: 8, f: 'Plant-derived drugs: give four examples', b: 'Foxglove: digoxin (heart conditions). Cinchona: quinine (malaria). Sweet wormwood: artemisinin (malaria). Willow: salicylic acid, from which aspirin was developed (pain relief).' },
      { n: 9, f: 'Testing plant extracts for antimicrobial activity', b: 'Spread bacteria on nutrient agar to make a lawn; add sterile discs soaked in extracts, with a solvent-only disc (negative control) and an antibiotic disc (positive control). Incubate and compare clear zone areas, π(d/2)².' },
      { n: 10, f: 'Placebo and double-blind trials', b: 'A placebo looks identical but has no active ingredient, controlling for expectation. In a double-blind trial neither patients nor the staff treating or assessing them know who has which, reducing bias.' },
      { n: 11, f: 'Phases 1, 2 and 3 of drug testing', b: 'Phase 1: a few healthy volunteers; safety, side effects, dose range.\nPhase 2: a small number of patients; effectiveness and dose.\nPhase 3: a large number of patients; compared with a placebo or existing treatment.', src: PMIN },
      { n: 12, f: 'Endemism and niche', b: 'Endemism: a species found naturally only in one geographical area.\nNiche: how a species fits into its ecosystem: habitat, food, relationships with other species and active period.', src: CBHW },
      { n: 13, f: 'Index of diversity (D) for counts of 6, 3 and 1', b: 'D = N(N − 1) ÷ Σn(n − 1). N = 10, so N(N − 1) = 90. Σn(n − 1) = 30 + 6 + 0 = 36. D = 90 ÷ 36 = 2.5. A higher D means greater diversity.' },
      { n: 14, f: 'Heterozygosity index', b: 'Number of heterozygotes ÷ number of individuals in the population. Higher means more genetic diversity. Example: 4 heterozygotes in 25 animals = 0.16.' },
      { n: 15, f: 'How did molecular evidence lead to the three-domain system?', b: 'Comparison of ribosomal RNA sequences split organisms into Archaea, Bacteria and Eukarya. Fewer sequence differences mean a more recent common ancestor. New groupings are evaluated by publication, peer review and repetition.' },
      { n: 16, f: 'Zoos and seed banks: one strength and one weakness each', b: 'Captive breeding in zoos: safe from wild threats and planned matings protect heterozygosity, but small populations lose genetic diversity.\nSeed banks: many species and alleles stored cheaply, but some seeds cannot be dried and frozen, and habitats are not conserved.' },
    ]),

    // Topic 5 Energy Flow, Ecosystems and the Environment
    ...topicOnly(T5, '5', [
      { n: 1, f: 'Overall equation for photosynthesis, and where the oxygen comes from', b: '6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O. The oxygen released comes from water, split using light energy (photolysis).' },
      { n: 2, f: 'Non-cyclic vs cyclic photophosphorylation', b: 'Non-cyclic: PSII and PSI; photolysis; makes ATP and reduced NADP and releases O₂.\nCyclic: PSI only; no photolysis; makes ATP only, balancing the ATP supply with demand.' },
      { n: 3, f: 'Light-independent reactions (Calvin cycle)', b: 'In the stroma: CO₂ + RuBP (5C) → 2 GP (3C), catalysed by RUBISCO. GP is reduced to GALP using ATP and reduced NADP. Most GALP regenerates RuBP (using ATP); some leaves the cycle to make carbohydrates and other molecules.' },
      { n: 4, f: 'ATP and reduced NADP needed per CO₂ fixed', b: '3 ATP and 2 reduced NADP per CO₂. One glucose needs 6 turns: 18 ATP and 12 reduced NADP.' },
      { n: 5, f: 'GPP, R and NPP', b: 'GPP: total rate of energy capture by producers in organic molecules. R: energy released by plant respiration. NPP = GPP − R, the energy stored in new plant biomass (kJ m⁻² year⁻¹).', src: PROD },
      { n: 6, f: 'Why is energy transfer between trophic levels inefficient?', b: 'Not all of the organism is eaten; not all that is eaten is digested (egestion); respiration releases energy as heat; excretory products carry energy away. Only the remainder forms new tissue.' },
      { n: 7, f: 'Herbivores receive 780 kJ m⁻² year⁻¹ from an NPP of 6240. What is the efficiency of transfer?', b: 'Efficiency = 780 ÷ 6240 × 100 = 12.5 %.' },
      { n: 8, f: 'Population, community and ecosystem', b: 'Population: organisms of one species in one place at one time.\nCommunity: all the populations of all species sharing a place.\nEcosystem: a community plus the abiotic factors it interacts with.', src: PROD },
      { n: 9, f: 'Primary succession from bare rock', b: 'Pioneers such as lichens and mosses; weathering and dead material form thin soil; grasses and small herbs; shrubs; trees as the climax community. Soil deepens and species diversity and biomass increase.' },
      { n: 10, f: 'Evidence for climate change', b: 'Ice cores (CO₂ in trapped air), atmospheric CO₂ measurements, temperature records, pollen in peat bogs (past plant communities) and dendrochronology (tree ring widths).' },
      { n: 11, f: 'How does the greenhouse effect work?', b: 'Short-wavelength sunlight reaches the surface, which emits longer-wavelength infrared. Greenhouse gases absorb the infrared and re-emit some back towards the surface, so more gas means more heat retained.' },
      { n: 12, f: 'Q₁₀: definition, and Q₁₀ for rates of 3 at 20 °C and 12 at 40 °C', b: 'Q₁₀ = rate at (T + 10) ÷ rate at T. For any interval: (R₂ ÷ R₁)^(10 ÷ (T₂ − T₁)). Here (12 ÷ 3)^(10 ÷ 20) = 4^0.5 = 2.0.' },
      { n: 13, f: 'Effects of climate change on organisms', b: 'Species shift towards the poles or to higher altitude; development speeds up (earlier hatching, flowering, migration); seasonal mismatch between predators and their food; drought or flooding reduces plant growth.' },
      { n: 14, f: 'How does natural selection change allele frequency?', b: 'A random mutation produces a new allele. Overproduction and variation mean not all survive. A selection pressure favours individuals with the advantageous allele, which survive, reproduce and pass it on, so its frequency rises.' },
      { n: 15, f: 'Allopatric vs sympatric speciation', b: 'Allopatric: a geographical barrier separates populations.\nSympatric: in the same area, by behavioural, ecological or seasonal isolation, or polyploidy.\nIn both, gene flow stops and allele frequencies diverge until the groups cannot produce fertile offspring.' },
      { n: 16, f: 'Biofuels and reforestation: benefit and limitation', b: 'Biofuels: close to carbon neutral, but land competes with food and forest.\nReforestation: habitat, carbon storage, less soil erosion, but slow, and plantations support less biodiversity.' },
    ]),

    // Topic 6 Microbiology, Immunity and Forensics
    ...topicOnly(T6, '6', [
      { n: 1, f: 'Why is aseptic technique used, and why are plates taped with short strips and inverted?', b: 'To keep unwanted microbes out of the culture and the culture away from you. Short tape strips let oxygen in, so anaerobes are not encouraged; inverting stops condensation falling on colonies.' },
      { n: 2, f: 'Dilution plating: viable count formula', b: 'CFU per cm³ = (mean colonies ÷ volume plated in cm³) × dilution factor. Count plates with about 30 to 300 colonies. It counts living cells only.' },
      { n: 3, f: 'Phases of a bacterial growth curve', b: 'Lag: cells adapt and make enzymes; little change in number.\nExponential: numbers double at regular intervals.\nStationary: division rate equals death rate.\nDeath: death exceeds division as nutrients run out and toxic waste builds up.' },
      { n: 4, f: 'Why does turbidity stay high in the death phase?', b: 'Dead cells still scatter light, so turbidity counts living and dead cells. Only a viable count (dilution plating) shows the fall in living cells.' },
      { n: 5, f: 'Bacterium vs virus', b: 'Bacterium: prokaryotic cell; circular DNA and plasmids; peptidoglycan wall; 70S ribosomes; own metabolism; binary fission.\nVirus: acellular; DNA or RNA in a capsid, some with an envelope; no ribosomes or metabolism; reproduces only inside host cells.' },
      { n: 6, f: 'Lytic cycle vs latency', b: 'Lytic: the virus replicates at once, assembles new particles and bursts the host cell.\nLatency: viral genetic material is in the host but makes no new particles (lambda phage DNA in the bacterial chromosome; HIV provirus). It can later switch to the lytic cycle.' },
      { n: 7, f: 'How does HIV infect a T helper cell?', b: 'Attachment proteins bind to CD4. The envelope fuses with the cell surface membrane. Reverse transcriptase makes DNA from viral RNA, which is integrated as a provirus. The host makes viral proteins and RNA, and new viruses bud off.' },
      { n: 8, f: 'How does Mycobacterium tuberculosis cause TB?', b: 'Inhaled bacteria are engulfed by alveolar macrophages but resist digestion. Tubercles wall off the infection, which is often latent. If immunity weakens it reactivates, destroying lung tissue.' },
      { n: 9, f: 'Roles of T helper, T killer, plasma and memory cells', b: 'T helper: releases cytokines that activate B cells, T killer cells and phagocytes.\nT killer: destroys infected cells by direct contact (perforin).\nPlasma cell: secretes antibody.\nMemory cells: long-lived; give a fast secondary response.' },
      { n: 10, f: 'Natural and artificial, active and passive immunity', b: 'Natural active: recovering from an infection. Artificial active: vaccination.\nNatural passive: antibodies across the placenta or in breast milk. Artificial passive: injected antibodies (antivenom, tetanus immunoglobulin).', src: AIA },
      { n: 11, f: 'How do pathogens evade the immune system? Give examples', b: 'Antigenic variation (influenza), so memory cells do not recognise it; destroying T helper cells (HIV); surviving inside macrophages (M. tuberculosis); latency; capsules that cover antigens.' },
      { n: 12, f: 'Bacteriostatic vs bactericidal antibiotics', b: 'Bacteriostatic: stops growth and reproduction, for example tetracycline, which blocks bacterial protein synthesis.\nBactericidal: kills bacteria, for example penicillin, which stops cell wall formation, causing lysis.' },
      { n: 13, f: 'How do saprotrophs decompose dead matter?', b: 'They secrete enzymes (proteases, lipases, carbohydrases) onto the material; large molecules are hydrolysed to small soluble ones, which are absorbed. Some are respired, releasing CO₂ back to the air.' },
      { n: 14, f: 'PCR: components and cycle', b: 'Template DNA, two primers, free nucleotides, Taq polymerase, buffer with Mg²⁺. Denature at about 95 °C; anneal primers at about 50–65 °C; extend at about 72 °C. Copies ≈ starting number × 2ⁿ.' },
      { n: 15, f: 'How many PCR cycles turn 10 target molecules into more than one million copies?', b: '10 × 2¹⁶ = 655 360 (too few). 10 × 2¹⁷ = 1 310 720. So 17 cycles.' },
      { n: 16, f: 'Rigor mortis', b: 'Stiffening of muscles after death because no ATP is available, so myosin heads cannot detach from actin. Along with body temperature, decomposition and insects, it helps estimate time of death.' },
    ]),

    // Topic 7 Respiration, Muscles and the Internal Environment
    ...topicOnly(T7, '7', [
      { n: 1, f: 'Substrate level vs oxidative phosphorylation', b: 'Substrate level: ATP made by transferring a phosphate group from a substrate directly to ADP.\nOxidative: ATP made using energy from electrons passing along the electron transport chain, with oxygen as the final acceptor.', src: RESP },
      { n: 2, f: 'Glycolysis in steps', b: 'Glucose is phosphorylated using 2 ATP; the hexose bisphosphate splits into two 3C molecules; these are dehydrogenated, reducing NAD; 4 ATP are made by substrate level phosphorylation; two pyruvate form. Net 2 ATP. In the cytoplasm.' },
      { n: 3, f: 'Products of the Krebs cycle per turn', b: '2 CO₂, 3 reduced NAD, 1 reduced FAD and 1 ATP per turn. The cycle turns twice per glucose. The acetyl group joins a four-carbon compound, which is regenerated.' },
      { n: 4, f: 'Oxidative phosphorylation in steps', b: 'Reduced NAD and FAD give up hydrogen. Electrons pass along carriers in the inner membrane, losing energy that pumps H⁺ into the intermembrane space. H⁺ flows back through ATP synthase, making ATP. Oxygen accepts electrons and H⁺, forming water.' },
      { n: 5, f: 'What happens to lactate after anaerobic respiration?', b: 'It travels in the blood from muscle to the liver, where it is converted to pyruvate, then oxidised in the Krebs cycle or converted to glucose or glycogen. This needs oxygen, so oxygen uptake stays above resting level after exercise.' },
      { n: 6, f: 'Respiratory quotient (RQ) values', b: 'RQ = CO₂ produced ÷ O₂ consumed. Lipid about 0.7; protein about 0.9; carbohydrate 1.0; yeast respiring partly anaerobically: above 1.' },
      { n: 7, f: 'Flexor vs extensor muscles; tendon vs ligament', b: 'Flexor contracts to bend a joint; extensor contracts to straighten it (an antagonistic pair; muscles only pull).\nTendon: inelastic, joins muscle to bone. Ligament: slightly elastic, joins bone to bone.' },
      { n: 8, f: 'Slow twitch vs fast twitch fibres', b: 'Slow twitch: slow, sustained contraction; slow to fatigue; aerobic; many mitochondria and much myoglobin.\nFast twitch: fast, powerful; fatigue quickly; anaerobic glycolysis and phosphocreatine; fewer mitochondria, little myoglobin.' },
      { n: 9, f: 'Sliding filament theory: the role of Ca²⁺ and ATP', b: 'An action potential along the T tubules makes the sarcoplasmic reticulum release Ca²⁺, which binds troponin; tropomyosin moves to expose binding sites on actin. Myosin heads bind and make a power stroke. ATP binds to detach the head, and its hydrolysis re-sets it.' },
      { n: 10, f: 'ECG: P wave, QRS complex and T wave', b: 'P wave: atrial depolarisation.\nQRS complex: ventricular depolarisation.\nT wave: ventricular repolarisation.\nHeart rate = 60 ÷ R-to-R time in seconds.' },
      { n: 11, f: 'Stroke volume and cardiac output', b: 'Stroke volume = end-diastolic volume − end-systolic volume.\nCardiac output = stroke volume × heart rate.' },
      { n: 12, f: 'Thermoregulation: responses when too hot vs too cold', b: 'Detected by the hypothalamus and skin thermoreceptors.\nToo hot: vasodilation of skin arterioles, sweating.\nToo cold: vasoconstriction, shivering, less sweating, raised metabolic rate.' },
      { n: 13, f: 'How is urea formed?', b: 'Excess amino acids are deaminated in the liver. The amino group becomes ammonia, which is combined with carbon dioxide to form urea, carried in plasma to the kidneys.' },
      { n: 14, f: 'Role of the loop of Henle', b: 'The descending limb is permeable to water, which leaves by osmosis. The ascending limb is impermeable to water and ions leave it (actively in the thick part), so the medulla becomes concentrated. This countercurrent gradient lets the collecting duct reabsorb water.' },
      { n: 15, f: 'ADH response when plasma is too concentrated', b: 'Osmoreceptors in the hypothalamus shrink and stimulate neurosecretory cells; ADH is released from the posterior pituitary; aquaporins are inserted into collecting duct membranes; more water is reabsorbed, giving a small volume of concentrated urine.' },
      { n: 16, f: 'Steroid vs peptide hormones in switching genes on', b: 'Steroid: lipid-soluble; diffuses across the membrane and binds a receptor inside the cell; the hormone–receptor complex is itself a transcription factor.\nPeptide: water-soluble; binds a receptor on the cell surface membrane; a second messenger cascade activates transcription factors.', src: HOME },
    ]),

    // Topic 8 Coordination, Response and Gene Technology
    ...topicOnly(T8, '8', [
      { n: 1, f: 'Sensory vs relay vs motor neurone', b: 'Sensory: receptor to CNS; cell body off to one side, outside the cord.\nRelay: inside the CNS; short.\nMotor: CNS to effector; cell body in the CNS; long axon.' },
      { n: 2, f: 'Spinal reflex arc', b: 'Receptor → sensory neurone enters the cord by the dorsal root → synapse with a relay neurone in the grey matter → synapse with a motor neurone → leaves by the ventral root → effector. Fast: short pathway, few synapses, no conscious thought.' },
      { n: 3, f: 'Values for resting potential, threshold and peak', b: 'Resting potential about −70 mV; threshold about −55 mV; peak about +40 mV. The Na⁺–K⁺ pump moves 3 Na⁺ out and 2 K⁺ in, using ATP.' },
      { n: 4, f: 'Events of an action potential', b: 'Voltage-gated Na⁺ channels open and Na⁺ diffuses in; at threshold many more open, giving rapid depolarisation. At the peak Na⁺ channels shut and voltage-gated K⁺ channels open: K⁺ out, repolarisation. Slow-closing K⁺ channels cause brief hyperpolarisation.' },
      { n: 5, f: 'Maximum impulse frequency for a refractory period of 5.0 ms', b: 'Maximum frequency = 1 ÷ refractory time = 1 ÷ 0.0050 s = 200 per second.' },
      { n: 6, f: 'How is stimulus strength coded in a neurone?', b: 'Action potentials are all-or-nothing, always the same size. A stronger stimulus gives a higher frequency of impulses and stimulates more neurones.' },
      { n: 7, f: 'How does a rod cell respond to light?', b: 'Rhodopsin absorbs light and splits into opsin and retinal. Cation channels close, Na⁺ stops entering and the rod hyperpolarises, releasing less neurotransmitter. The bipolar neurone is no longer inhibited, depolarises, and an action potential passes along the optic neurone.' },
      { n: 8, f: 'Habituation', b: 'A reduced response to a stimulus repeated many times that is neither harmful nor rewarding. Usually fewer Ca²⁺ ions enter the presynaptic neurone, so less neurotransmitter is released. A new stimulus still gives a full response.', src: SENS },
      { n: 9, f: 'Phytochrome', b: 'A plant pigment with two forms: Pr absorbs red light (about 660 nm) and becomes Pfr; Pfr absorbs far-red (about 730 nm) and becomes Pr. Pfr affects transcription, controlling germination, etiolation and flowering.' },
      { n: 10, f: 'How does IAA cause phototropism in a shoot?', b: 'With light from one side, IAA moves to the shaded side. Proton pumps lower the wall pH there, so those cells elongate more and the shoot bends towards the light.' },
      { n: 11, f: 'Investigating gibberellin and amylase in cereal grains', b: 'Place grain halves (with and without embryo) on starch agar, with or without gibberellic acid. Remove the grains and flood with iodine: clear zones show starch digested by amylase. Control: boiled grain halves.' },
      { n: 12, f: 'Making recombinant DNA', b: 'Cut the gene and the plasmid with the same restriction endonuclease to give complementary sticky ends; mix so they anneal by hydrogen bonds; DNA ligase seals the backbone with phosphodiester bonds. Include a promoter that works in the host.' },
      { n: 13, f: 'Why use cDNA when putting a human gene into bacteria?', b: 'cDNA is copied from mRNA by reverse transcriptase, so it has no introns. Bacteria cannot splice out introns.' },
      { n: 14, f: 'Methods of getting DNA into bacteria, plants and animals', b: 'Bacteria: transformation using calcium chloride and heat shock, or electroporation.\nPlants: Agrobacterium tumefaciens with the gene in its Ti plasmid, or a gene gun.\nAnimals: microinjection into a fertilised egg, viral vectors, liposomes.' },
      { n: 15, f: 'How are transformed cells identified?', b: 'Antibiotic-resistance marker: only transformed cells grow on that antibiotic. Fluorescent marker (GFP): transformed cells glow under UV light. Insertional inactivation: an insert in a resistance gene makes recombinants lose that resistance.' },
      { n: 16, f: 'A 5000 bp circular plasmid is cut at two sites 1100 bp apart. What fragments form?', b: 'Two fragments: 1100 bp and 5000 − 1100 = 3900 bp. (A circular molecule cut n times gives n fragments.)' },
    ]),
  ],
};
