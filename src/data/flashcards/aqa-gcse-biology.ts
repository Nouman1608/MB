/**
 * D-444 -- flashcards for AQA GCSE Biology 8461 (for first teaching 2016).
 *
 * Topics 1-7 are itemised into specification sections (4.1.1-4.1.3; 4.2.1,
 * 4.2.2.1-4.2.2.7, 4.2.3.1-4.2.3.2; 4.3.1-4.7.5), so ids are
 * `<section number>-<n>`. Topics 3-7 were itemised on 2026-11-05; their
 * earlier topic-level cards (ids `<topic>-<n>`) moved to section ids then.
 * Topic 8 (Key ideas) has no sub-sections, so its cards sit on the topic and
 * ids are `8-<n>`. Ids are permanent (browser progress is keyed by them): add
 * a new card with the next unused n, never renumber.
 *
 *   u: true     Upper tier: content the specification marks "(HT only)", following
 *               the "Higher tier only" labels on Marlbridge's own 8461 revision
 *               notes. Foundation candidates can hide these cards.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 8461); origin 'revision-notes'.
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

/** For a topic that itemises no subtopics: the card sits on the topic alone. */
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

const CB = 'cell-biology-aqa-gcse-biology';
const ORG = 'organisation-aqa-gcse-biology';
const IR = 'infection-and-response-aqa-gcse-biology';
const BE = 'bioenergetics-aqa-gcse-biology';
const HR = 'homeostasis-and-response-aqa-gcse-biology';
const IV = 'inheritance-variation-and-evolution-aqa-gcse-biology';
const EC = 'ecology-aqa-gcse-biology';

const CS = 'aqa-gcse-biology-8461-cell-structure-revision-notes';
const CD = 'aqa-gcse-biology-8461-cell-division-revision-notes';
const TIC = 'aqa-gcse-biology-8461-transport-in-cells-revision-notes';
const POHB = 'aqa-gcse-biology-8461-principles-of-organisation-heart-and-blood-vessels-revision-notes';
const ED = 'aqa-gcse-biology-enzymes-digestive-revision-notes';
const INF = 'aqa-gcse-biology-8461-infection-and-response-revision-notes';
const BIO = 'aqa-gcse-biology-8461-bioenergetics-revision-notes';
const HOM = 'aqa-gcse-biology-8461-homeostasis-and-response-revision-notes';
const IVE = 'aqa-gcse-biology-8461-inheritance-variation-and-evolution-revision-notes';
const ECO = 'aqa-gcse-biology-8461-ecology-revision-notes';
const KEY = 'aqa-gcse-biology-8461-key-ideas-revision-notes';
const BLD = 'aqa-gcse-biology-8461-blood-revision-notes';
const CHD = 'aqa-gcse-biology-8461-coronary-heart-disease-revision-notes';
const HL = 'aqa-gcse-biology-8461-health-issues-and-lifestyle-revision-notes';
const CAN = 'aqa-gcse-biology-8461-cancer-revision-notes';
const PLT = 'aqa-gcse-biology-8461-plant-tissues-and-organ-system-revision-notes';

export const DECK_AQA_GCSE_BIOLOGY: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'gcse',
  subjectSlug: 'biology',
  syllabusCode: '8461',
  syllabusSeries: 'For first teaching 2016',
  tierScheme: 'foundation-higher',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'hina-mogul', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Cell biology
    ...sub(CB, 'cell-structure-aqa-gcse-biology', '4.1.1', [
      { n: 1, f: 'Eukaryotic vs prokaryotic cells', b: 'Eukaryotic (plant and animal): larger, genetic material enclosed in a nucleus.\nProkaryotic (bacteria): much smaller, a single DNA loop not in a nucleus, and may have plasmids. Both have a cell membrane and cytoplasm.', src: CS },
      { n: 2, f: 'Functions of the nucleus, cytoplasm, cell membrane, mitochondria and ribosomes', b: 'Nucleus: genetic material that controls the cell. Cytoplasm: most chemical reactions. Cell membrane: controls what enters and leaves. Mitochondria: aerobic respiration. Ribosomes: protein synthesis.', src: CS },
      { n: 3, f: 'Three structures plant cells often have that animal cells do not', b: 'Chloroplasts (absorb light for photosynthesis), a permanent vacuole filled with cell sap, and a cellulose cell wall that strengthens the cell.', src: CS },
      { n: 4, f: 'How are sperm, nerve and muscle cells adapted?', b: 'Sperm: tail to swim; many mitochondria for energy.\nNerve: long, to carry impulses a long way; branched endings to link to many cells.\nMuscle: protein fibres that contract; many mitochondria.' },
      { n: 5, f: 'How are root hair, xylem and phloem cells adapted?', b: 'Root hair: long projection, large surface area to absorb water and mineral ions.\nXylem: hollow tubes of dead cells strengthened by lignin.\nPhloem: end walls with pores so dissolved sugars pass from cell to cell.' },
      { n: 6, f: 'Cell differentiation in animals vs plants', b: 'Differentiating cells gain the sub-cellular structures they need and become specialised. Most animal cells differentiate early; many plant cells keep the ability throughout life. In mature animals, cell division is mainly for repair and replacement.' },
      { n: 7, f: 'Light microscope vs electron microscope', b: 'The electron microscope has a much higher magnification and resolution, so it shows many more sub-cellular structures in fine detail. Resolution is the ability to distinguish two close points as separate.' },
      { n: 8, f: 'An image is 12 mm wide; the real cell is 6 μm wide. Magnification?', b: 'magnification = size of image ÷ size of real object.\n12 mm = 12 000 μm, so 12 000 ÷ 6 = ×2000. Convert to the same unit first; magnification has no unit.' },
      { n: 9, f: 'Required practical 1: preparing and viewing a slide of onion cells', b: 'Thin layer of cells on a slide; add iodine stain; lower a coverslip at an angle to avoid air bubbles; focus with the lowest-power objective first, then higher power with fine focus; pencil drawing with a scale bar.' },
      { n: 10, f: 'Culturing bacteria: aseptic steps and why school cultures are incubated at 25 °C', b: 'Sterilise dishes and agar; flame the inoculating loop; tape the lid; store upside down. 25 °C reduces the chance of growing pathogens harmful to humans.' },
      { n: 11, f: 'Required practical 2: a clear zone around an antibiotic disc is 14 mm across. Its area?', b: 'r = 7 mm. Area = πr² = π × 7² = 154 mm² (3 s.f.). A larger clear zone means a more effective antibiotic or antiseptic.' },
      { n: 12, f: '40 bacteria divide every 30 minutes. How many after 4 hours, in standard form?', b: '4 h = 240 min; 240 ÷ 30 = 8 divisions. 40 × 2⁸ = 10 240 = 1.024 × 10⁴ bacteria.', u: true },
    ]),
    ...sub(CB, 'cell-division-aqa-gcse-biology', '4.1.2', [
      { n: 1, f: 'Chromosomes: where, what they are made of, and how arranged', b: 'In the nucleus. Made of DNA molecules; each carries a large number of genes. In body cells they are normally found in pairs (23 pairs, 46 chromosomes, in humans).', src: CD },
      { n: 2, f: 'Cell cycle stage 1', b: 'The cell grows, the number of sub-cellular structures (ribosomes, mitochondria) increases, and the DNA replicates to form two copies of each chromosome.' },
      { n: 3, f: 'Cell cycle stages 2 and 3', b: 'Stage 2 (mitosis): one set of chromosomes is pulled to each end of the cell and the nucleus divides.\nStage 3: the cytoplasm and cell membrane divide, forming two genetically identical cells.' },
      { n: 4, f: 'Why is mitosis important?', b: 'Growth and development of multicellular organisms, repair and replacement of cells, and asexual reproduction (offspring are clones).' },
      { n: 5, f: 'Name two cases where cells divide but not by mitosis', b: 'Making gametes (sperm and eggs), by meiosis; a bacterium dividing, by binary fission.' },
      { n: 6, f: 'A student counts 50 cells in a root tip and 4 are in mitosis. Percentage?', b: '4 ÷ 50 × 100 = 8%.' },
      { n: 7, f: 'Stem cell', b: 'An undifferentiated cell of an organism which can give rise to many more cells of the same type, and from which certain other cells can arise by differentiation.', src: CD },
      { n: 8, f: 'Stem cells from a human embryo vs adult bone marrow', b: 'Embryonic: can become most types of human cell, and can be cloned and made to differentiate.\nAdult bone marrow: can form many types of cell, including blood cells.', src: CD },
      { n: 9, f: 'Meristem stem cells, and two uses of cloning plants from them', b: 'Found at the tips of shoots and roots; can differentiate into any type of plant cell throughout the plant\'s life. Clones are made quickly and cheaply: to protect rare species from extinction, and to give many identical crop plants with useful features such as disease resistance.', src: CD },
      { n: 10, f: 'Therapeutic cloning', b: 'An embryo is produced with the same genes as the patient. Its stem cells are not rejected by the patient\'s body, so they may be used for medical treatment.' },
      { n: 11, f: 'Possible benefits of stem cell treatment, and the risks and objections', b: 'May be able to help conditions such as diabetes and paralysis.\nRisk: transfer of viral infection. Objection: some people have ethical or religious objections to using human embryos.' },
      { n: 12, f: 'Chromosome vs gene', b: 'A chromosome is a long DNA molecule carrying many genes; a gene is one small section of that DNA.' },
    ]),
    ...sub(CB, 'transport-in-cells-aqa-gcse-biology', '4.1.3', [
      { n: 1, f: 'Diffusion', b: 'The spreading out of the particles of any substance in solution, or particles of a gas, resulting in a net movement from an area of higher concentration to an area of lower concentration.', src: TIC },
      { n: 2, f: 'Osmosis', b: 'The diffusion of water from a dilute solution to a concentrated solution through a partially permeable membrane.', src: TIC },
      { n: 3, f: 'Active transport', b: 'Moves substances from a more dilute solution to a more concentrated solution (against a concentration gradient). It requires energy from respiration.', src: TIC },
      { n: 4, f: 'Two examples of diffusion named in the specification', b: 'Oxygen and carbon dioxide in gas exchange; urea from cells into the blood plasma, for excretion in the kidney.' },
      { n: 5, f: 'Three factors that increase the rate of diffusion', b: 'A steeper concentration gradient, a higher temperature (particles move faster), and a larger membrane surface area.' },
      { n: 6, f: 'Surface area to volume ratio of a cube of side 3 cm', b: 'SA = 6 × 3² = 54 cm²; V = 3³ = 27 cm³; ratio = 54 ÷ 27 = 2 : 1. A cube of side 0.5 cm has 12 : 1, so smaller objects have larger ratios.' },
      { n: 7, f: 'Why do multicellular organisms need exchange surfaces and a transport system?', b: 'They have a small surface area to volume ratio, so the outer surface is too small for their needs and inner cells are too far away for diffusion alone.' },
      { n: 8, f: 'Four features that make an exchange surface effective', b: 'A large surface area; a thin membrane (short diffusion path); an efficient blood supply (animals); ventilation (animals, for gas exchange). The last two keep the concentration gradient steep.' },
      { n: 9, f: 'Required practical 3: method and variables', b: 'Cut equal cylinders of potato, blot and weigh; put each in a different concentration of salt or sugar solution for the same time; blot and reweigh. Independent: concentration. Dependent: percentage change in mass. Control: size, volume, time, temperature.' },
      { n: 10, f: 'Potato tissue goes from 1.60 g to 1.84 g. Percentage change in mass?', b: '(1.84 − 1.60) ÷ 1.60 × 100 = +15%. Always divide by the initial mass and keep the sign.' },
      { n: 11, f: 'On a graph of percentage change in mass against concentration, what does the x-intercept show?', b: 'The concentration with no net movement of water, which is the same as the concentration of the cell contents.' },
      { n: 12, f: 'Two examples of active transport', b: 'Plants: mineral ions absorbed into root hair cells from very dilute soil solution. Animals: sugar absorbed from the gut into the blood, where its concentration is higher.' },
    ]),

    // 2 Organisation
    ...sub(ORG, 'principles-of-organisation-aqa-gcse-biology', '4.2.1', [
      { n: 1, f: 'Levels of organisation, smallest first', b: 'Cell → tissue → organ → organ system → organism.' },
      { n: 2, f: 'Cell (as a level of organisation)', b: 'The basic building block of all living organisms, for example a cardiac muscle cell.', src: POHB },
      { n: 3, f: 'Tissue', b: 'A group of cells with a similar structure and function, for example muscle tissue in the heart wall.', src: POHB },
      { n: 4, f: 'Organ', b: 'An aggregation of tissues performing specific functions, for example the heart.', src: POHB },
      { n: 5, f: 'Organ system', b: 'Organs organised to work together, forming the organism, for example the circulatory system (heart, blood vessels, blood).', src: POHB },
      { n: 6, f: 'Why is the heart an organ and not a tissue?', b: 'It is made of several different tissues (such as muscle tissue) working together to perform a specific function.' },
      { n: 7, f: 'Name an example at each level for the digestive system', b: 'Cell: a muscle cell. Tissue: muscle tissue. Organ: the stomach. Organ system: the digestive system.' },
      { n: 8, f: 'Typical units for the size of a cell, an organ and an organism', b: 'Cell: μm (micrometres). Organ: cm. Organism: m. 1 mm = 1000 μm and 1 cm = 10 000 μm; convert to one unit before comparing.' },
      { n: 9, f: 'A tissue layer is 0.5 mm thick and its cells are 20 μm wide. About how many cells thick is it?', b: '0.5 mm = 500 μm. 500 ÷ 20 = 25 cells thick.' },
    ]),
    ...sub(ORG, 'the-human-digestive-system-aqa-gcse-biology', '4.2.2.1', [
      { n: 1, f: 'Carbohydrase (amylase): substrate and product', b: 'Starch → simple sugars.', src: ED },
      { n: 2, f: 'Protease: substrate and product', b: 'Protein → amino acids.', src: ED },
      { n: 3, f: 'Lipase: substrate and product', b: 'Lipids (fats) → glycerol + fatty acids.', src: ED },
      { n: 4, f: 'The lock and key model of enzyme action', b: 'The enzyme\'s active site has a shape complementary to its specific substrate, which explains why an enzyme acts on only one type of substrate.' },
      { n: 5, f: 'Why does amylase not break down protein?', b: 'Amylase\'s active site is shaped to fit starch. A protein molecule has a different shape, so it does not fit the active site and its breakdown cannot be catalysed.' },
      { n: 6, f: 'Bile: where made, where stored, and its two roles', b: 'Made in the liver, stored in the gall bladder. It is alkaline, neutralising hydrochloric acid from the stomach, and it emulsifies fat into small droplets, increasing the surface area for lipase.', src: ED },
      { n: 7, f: 'Is bile an enzyme?', b: 'No. Emulsification is a physical change (breaking fat into droplets), not a chemical one (breaking bonds in the fat).' },
      { n: 8, f: 'Required practical 4: tests for sugars, starch and protein', b: 'Sugars: Benedict\'s, heat; blue → brick-red.\nStarch: iodine; orange-brown → blue-black.\nProtein: biuret; blue → purple/lilac.' },
      { n: 9, f: 'Required practical 5: how is the effect of pH on amylase measured?', b: 'Mix amylase and starch at a set pH in a water bath; every 30 seconds test a drop with iodine. Record the time until the iodine no longer turns blue-black (all the starch digested).' },
      { n: 10, f: 'In practical 5, starch is digested in 90 s at pH 7 but 240 s at pH 5. What does this show?', b: 'The shortest time means the fastest rate, so pH 7 is closest to the optimum. At pH 5 the enzyme works more slowly; a slower rate does not mean all of it is denatured.' },
    ]),
    ...sub(ORG, 'the-heart-and-blood-vessels-aqa-gcse-biology', '4.2.2.2', [
      { n: 1, f: 'The four chambers of the heart, and what atria and ventricles do', b: 'Right atrium, right ventricle, left atrium, left ventricle. Atria receive blood; ventricles pump it out. Valves stop backflow.' },
      { n: 2, f: 'Why is the left ventricle wall the thickest?', b: 'It pumps blood around the whole body. The right ventricle pumps only to the nearby lungs.', src: POHB },
      { n: 3, f: 'Vena cava, pulmonary artery, pulmonary vein, aorta: from where to where?', b: 'Vena cava: body → right atrium.\nPulmonary artery: right ventricle → lungs.\nPulmonary vein: lungs → left atrium.\nAorta: left ventricle → body.' },
      { n: 4, f: 'What do the coronary arteries do?', b: 'They branch from the base of the aorta and supply the heart muscle with oxygenated blood.' },
      { n: 5, f: 'Double circulation', b: 'Blood passes through the heart twice in each complete circuit: the right ventricle pumps it to the lungs, and the left ventricle pumps it round the rest of the body.' },
      { n: 6, f: 'Natural and artificial pacemakers', b: 'The natural resting heart rate is controlled by a group of cells in the right atrium. Artificial pacemakers are electrical devices that correct irregularities in the heart rate.', src: POHB },
      { n: 7, f: 'How are the lungs adapted for gas exchange?', b: 'Many alveoli give a large surface area; thin walls give a short diffusion distance; a capillary network with a good blood supply and ventilation keep the concentration gradient steep.' },
      { n: 8, f: 'Arteries: structure linked to function', b: 'Thick muscular, elastic walls and a narrow lumen withstand and maintain the high pressure from the ventricles. Arteries carry blood away from the heart.' },
      { n: 9, f: 'Veins: structure linked to function', b: 'Thin walls and a wide lumen for low-pressure blood returning to the heart; valves stop blood flowing backwards.' },
      { n: 10, f: 'Capillaries: structure linked to function', b: 'Walls one cell thick give a short diffusion distance, so substances such as oxygen and glucose reach body cells quickly.' },
      { n: 11, f: 'A student counts 27 heartbeats in 20 seconds. Heart rate?', b: '27 ÷ 20 × 60 = 81 beats per minute.' },
      { n: 12, f: 'A heart pumps 65 cm³ per beat at 80 beats per minute. Volume pumped per minute?', b: '65 × 80 = 5200 cm³ per minute (5.2 dm³ per minute).' },
    ]),

    ...sub(ORG, 'blood-aqa-gcse-biology', '4.2.2.3', [
      { n: 1, f: 'The four components of blood', b: 'Plasma, the liquid part, in which red blood cells, white blood cells and platelets are suspended. Blood is a tissue.', src: BLD },
      { n: 2, f: 'Red blood cells: function and adaptations', b: 'They carry oxygen from the lungs to body cells. The biconcave disc shape gives a large surface area, and having no nucleus leaves more room for haemoglobin, which binds oxygen.', src: BLD },
      { n: 3, f: 'White blood cells and platelets: functions', b: 'White blood cells: part of the immune system, defending the body against pathogens; they have a nucleus.\nPlatelets: small fragments of cells, with no nucleus, that help the blood to clot at a wound.', src: BLD },
      { n: 4, f: 'What does plasma transport?', b: 'The blood cells, and dissolved substances including glucose, amino acids, carbon dioxide, urea, hormones, proteins and antibodies.', src: BLD },
      { n: 5, f: 'How do you tell red blood cells, white blood cells and platelets apart in a micrograph?', b: 'Red blood cells: very many, round, pale in the centre, no nucleus. White blood cells: fewer and larger, with a darkly stained nucleus. Platelets: tiny fragments between the cells.', src: BLD },
      { n: 6, f: 'Blood transfusion: one benefit and two risks', b: 'Benefit: replaces blood lost in an accident, surgery or childbirth, and can save a life quickly.\nRisks: a pathogen could be passed on in donated blood (so donations are screened); the blood must be matched to the recipient, or their immune system may react against it.', src: BLD },
    ]),
    ...sub(ORG, 'coronary-heart-disease-aqa-gcse-biology', '4.2.2.4', [
      { n: 1, f: 'Coronary heart disease: cause and effect', b: 'Layers of fatty material build up inside the coronary arteries, narrowing them. Less blood flows through them, so the heart muscle lacks oxygen.', src: CHD },
      { n: 2, f: 'Stents vs statins', b: 'Stent: a mesh tube placed in a narrowed coronary artery to keep it open; it works at once but involves a medical procedure.\nStatin: a drug that lowers blood cholesterol, slowing the rate at which fatty material is deposited; it must be taken long term and can have side effects.', src: CHD },
      { n: 3, f: 'Faulty heart valves: effect and treatment', b: 'A valve may not open fully, or may leak, so the heart pumps blood less efficiently. Faulty valves can be replaced with biological valves or mechanical valves.', src: CHD },
      { n: 4, f: 'Heart failure: treatments', b: 'A donor heart, or heart and lungs, can be transplanted. Artificial hearts are occasionally used to keep a patient alive while waiting for a transplant, or to let the heart rest as an aid to recovery.', src: CHD },
      { n: 5, f: 'Biological vs mechanical replacement heart valves', b: 'Biological (animal or human tissue): works like a natural valve and usually needs no lifelong anti-clotting drugs, but wears out sooner.\nMechanical (man-made): very long-lasting, but the patient usually needs anti-clotting drugs for life because clots can form on it.', src: CHD },
      { n: 6, f: 'Heart transplant: advantage and disadvantages', b: 'Advantage: can give a long-term solution to heart failure.\nDisadvantages: few donors so long waits; major surgery; risk of rejection, so immunosuppressant drugs are needed for life.', src: CHD },
    ]),
    ...sub(ORG, 'health-issues-aqa-gcse-biology', '4.2.2.5', [
      { n: 1, f: 'Health, and what affects it', b: 'Health is the state of physical and mental well-being. Communicable and non-communicable diseases are major causes of ill health; diet, stress and life situations can also affect physical and mental health.', src: HL },
      { n: 2, f: 'Communicable vs non-communicable disease', b: 'Communicable: caused by a pathogen and can spread between people or animals (for example measles).\nNon-communicable: cannot be passed from one person to another (for example coronary heart disease).', src: HL },
      { n: 3, f: 'Four ways different types of disease can interact', b: 'Defects in the immune system make infectious diseases more likely. Viruses living in cells can trigger cancers. Immune reactions first caused by a pathogen can trigger allergies such as skin rashes and asthma. Severe physical ill health can lead to depression and other mental illness.', src: HL },
      { n: 4, f: 'A town of 250 000 people has 340 new cases of a disease in a year. What is the rate per 100 000?', b: '340 ÷ 250 000 × 100 000 = 136 per 100 000 per year. Rates let you compare populations of different sizes.' },
      { n: 5, f: 'Bar chart vs histogram for disease data', b: 'Bar chart: categories (for example cases in different countries), with gaps between bars.\nHistogram: continuous data in classes (for example cases by age group), with no gaps; with unequal class widths, bar area shows frequency.', src: HL },
      { n: 6, f: 'Principles of sampling for epidemiological data', b: 'Study a sample, not the whole population. It should be large, so chance results matter less, and representative and chosen at random, so the results are not biased. Repeated studies make results more trustworthy.', src: HL },
    ]),
    ...sub(ORG, 'the-effect-of-lifestyle-on-some-non-communicable-diseases-aqa-gcse-biology', '4.2.2.6', [
      { n: 1, f: 'Risk factor', b: 'Something linked to an increased rate of a disease: an aspect of a person\'s lifestyle, or a substance in the person\'s body or environment. A causal mechanism has been proven for some risk factors but not for others.', src: HL },
      { n: 2, f: 'Lifestyle risk factors and the diseases linked to them', b: 'Diet, smoking and lack of exercise: cardiovascular disease. Obesity: Type 2 diabetes. Alcohol: liver and brain function. Smoking: lung disease and lung cancer. Smoking and alcohol: harm to unborn babies. Carcinogens, including ionising radiation: cancer.', src: HL },
      { n: 3, f: 'What does a scatter diagram of a risk factor against the rate of a disease show?', b: 'Whether the two variables are correlated. A correlation alone does not prove that the factor causes the disease; a causal mechanism is also needed.', src: HL },
      { n: 4, f: 'Costs of non-communicable diseases', b: 'Human cost: illness, a lower quality of life and early death, for individuals and their families.\nFinancial cost: treatment and care, and lost earnings and productivity, for a local community, a nation or globally.', src: HL },
      { n: 5, f: 'How can smoking and alcohol in pregnancy harm the unborn baby?', b: 'Smoking: carbon monoxide reduces the oxygen the blood carries, linked to low birth weight and premature birth.\nAlcohol: can damage the baby\'s development, including the brain.', src: HL },
      { n: 6, f: '24 in 1000 smokers and 3 in 1000 non-smokers develop a disease. Compare the risk.', b: '24 ÷ 3 = 8, so smokers in this sample were 8 times as likely to develop it. This is a correlation; a causal link needs a known mechanism and repeated studies.' },
    ]),
    ...sub(ORG, 'cancer-aqa-gcse-biology', '4.2.2.7', [
      { n: 1, f: 'What is cancer?', b: 'The result of changes in cells that lead to uncontrolled growth and division.', src: CAN },
      { n: 2, f: 'Benign vs malignant tumours', b: 'Benign: abnormal cells contained in one area, usually within a membrane; they do not invade other parts of the body.\nMalignant: cancers; the cells invade neighbouring tissues and spread in the blood to other parts of the body, where they form secondary tumours.', src: CAN },
      { n: 3, f: 'Risk factors for cancer', b: 'Lifestyle risk factors (such as smoking, obesity and alcohol) and carcinogens, including ionising radiation. Some cancers also have genetic risk factors.', src: CAN },
      { n: 4, f: 'Can a benign tumour be harmful?', b: 'Yes. It does not spread, but a large benign tumour can press on an organ, for example in the brain. Benign means it does not invade other parts of the body.', src: CAN },
      { n: 5, f: 'Give an example of a genetic risk factor for cancer', b: 'Inheriting certain alleles, for example of the BRCA genes, which raise the risk of breast cancer.', src: CAN },
    ]),
    ...sub(ORG, 'plant-tissues-aqa-gcse-biology', '4.2.3.1', [
      { n: 1, f: 'Tissues in a leaf and their functions', b: 'Epidermis: covers the leaf. Palisade mesophyll: most photosynthesis. Spongy mesophyll: air spaces for diffusion of gases. Xylem and phloem: transport. Guard cells: open and close the stomata.', src: PLT },
      { n: 2, f: 'How is the palisade mesophyll adapted for photosynthesis?', b: 'Its cells lie near the upper surface, are tightly packed and contain many chloroplasts, so they absorb as much light as possible.', src: PLT },
      { n: 3, f: 'Meristem tissue', b: 'Tissue at the growing tips of shoots and roots, with undifferentiated cells that divide to make new cells for growth.', src: PLT },
      { n: 4, f: 'Why is a leaf an organ?', b: 'It is made of several tissues (epidermis, palisade and spongy mesophyll, xylem and phloem) working together to carry out a function, photosynthesis.', src: PLT },
      { n: 5, f: 'How is the upper epidermis of a leaf adapted?', b: 'It is a single layer of transparent cells, so light passes through to the palisade layer, covered by a waxy cuticle that reduces water loss.', src: PLT },
    ]),
    ...sub(ORG, 'plant-organ-system-aqa-gcse-biology', '4.2.3.2', [
      { n: 1, f: 'Root hair cells: adaptations', b: 'A long extension gives a large surface area for taking up water by osmosis and mineral ions by active transport.', src: PLT },
      { n: 2, f: 'Xylem vs phloem', b: 'Xylem: hollow tubes strengthened by lignin; carry water and mineral ions from the roots to the stems and leaves (the transpiration stream).\nPhloem: tubes of elongated cells with pores in the end walls; carry dissolved sugars from the leaves to the rest of the plant (translocation).', src: PLT },
      { n: 3, f: 'Transpiration, and the role of stomata', b: 'Transpiration: the loss of water vapour from the leaves, mainly through the stomata, which draws water up through the xylem. Guard cells open and close the stomata to control gas exchange and water loss.', src: PLT },
      { n: 4, f: 'Four factors that increase the rate of transpiration', b: 'Higher temperature, lower humidity, more air movement and higher light intensity.', src: PLT },
      { n: 5, f: 'A bubble in a potometer moves 30 mm in 5 minutes. What is the rate of water uptake?', b: '30 ÷ 5 = 6 mm per minute.' },
      { n: 6, f: 'Potometer: key steps and its main assumption', b: 'Cut the shoot under water and fit it under water, seal the joints, then time how far an air bubble moves; change one factor and keep the others constant. It measures water uptake, used as an estimate of water loss (a little water is used by the plant).', src: PLT },
      { n: 7, f: 'A bubble moves 24 mm in 4 min in a tube of radius 0.5 mm. Rate of water uptake in mm³ per minute? (π = 3.14)', b: 'Volume = π r² × distance = 3.14 × 0.25 × 24 = 18.8 mm³. Rate = 18.8 ÷ 4 = 4.7 mm³ per minute.' },
      { n: 8, f: 'How do you investigate the distribution of stomata?', b: 'Paint clear nail varnish on the leaf surface, peel it off with sticky tape onto a slide, and count stomata in several fields of view on several leaves; find the mean. Compare the lower and upper surfaces (most stomata are on the lower surface).', src: PLT },
    ]),

    // 3 Infection and response
    ...sub(IR, 'communicable-diseases-aqa-gcse-biology', '4.3.1', [
      { n: 1, f: 'Pathogen: definition, the four types, and how bacteria and viruses make us ill', b: 'A microorganism that causes infectious disease: viruses, bacteria, protists, fungi. Bacteria reproduce rapidly and may release toxins that damage tissues. Viruses live and reproduce inside cells, causing cell damage.', src: INF },
      { n: 2, f: 'Measles and HIV: spread and control', b: 'Measles (virus): inhaled droplets from sneezes and coughs; fever and red rash; controlled by vaccinating young children.\nHIV (virus): sexual contact or exchange of body fluids such as blood; attacks immune cells; antiretroviral drugs.' },
      { n: 3, f: 'Tobacco mosaic virus and rose black spot', b: 'TMV (virus): mosaic discolouration of leaves.\nBlack spot (fungus): purple or black leaf spots, spread by water or wind; fungicides and removing affected leaves.\nBoth reduce photosynthesis, so less glucose for growth.' },
      { n: 4, f: 'Salmonella and gonorrhoea', b: 'Salmonella (bacterium): in food; fever, cramps, vomiting, diarrhoea; UK poultry vaccinated.\nGonorrhoea (bacterium): sexual contact; thick yellow or green discharge, pain on urinating; antibiotics (many strains penicillin-resistant), condoms.' },
      { n: 5, f: 'Malaria: pathogen, vector, symptoms and control', b: 'Caused by a protist; the mosquito is the vector. Recurrent episodes of fever; can be fatal. Control: stop mosquitoes breeding, and use mosquito nets.' },
      { n: 6, f: 'Non-specific defences of the human body', b: 'Skin: barrier. Nose: hairs and mucus trap particles. Trachea and bronchi: mucus traps pathogens and cilia move it away from the lungs. Stomach: hydrochloric acid kills pathogens.' },
      { n: 7, f: 'Three ways white blood cells defend the body', b: 'Phagocytosis (engulf and digest pathogens); producing antibodies (bind to a specific pathogen); producing antitoxins (neutralise bacterial toxins).', src: INF },
      { n: 8, f: 'How does vaccination work?', b: 'Small amounts of a dead or inactive pathogen stimulate white blood cells to produce antibodies. If the live pathogen enters later, white blood cells respond quickly with the right antibodies. If most people are immune, spread falls.' },
      { n: 9, f: 'Antibiotics vs painkillers', b: 'Antibiotics (e.g. penicillin) kill infective bacteria inside the body, not viruses; specific bacteria need specific antibiotics, and resistant strains are a concern. Painkillers treat symptoms only and kill no pathogens.' },
      { n: 10, f: 'Testing a new drug: the stages', b: 'Preclinical testing on cells, tissues and live animals; then clinical trials on healthy volunteers and patients, starting with very low doses, then finding the optimum dose. Double blind trials with a placebo; results peer reviewed.' },
    ]),
    ...sub(IR, 'monoclonal-antibodies-aqa-gcse-biology', '4.3.2', [
      { n: 1, f: 'How are monoclonal antibodies produced?', b: 'Mouse lymphocytes are stimulated to make an antibody and combined with a tumour cell to form a hybridoma cell, which divides and makes the antibody. A single hybridoma is cloned, and the antibody collected and purified.', u: true },
      { n: 2, f: 'Monoclonal antibodies: what are they?', b: 'Antibodies produced from a single clone of cells. They are specific to one binding site on one protein antigen, so they can target a specific chemical or specific cells in the body.', u: true },
      { n: 3, f: 'Four uses of monoclonal antibodies', b: 'Pregnancy tests; measuring levels of hormones and other chemicals in blood, or detecting pathogens; locating or identifying specific molecules in a cell or tissue with a fluorescent dye; treating some diseases, such as delivering a drug or radioactive substance to cancer cells.', u: true },
      { n: 4, f: 'Why are monoclonal antibodies not as widely used as was first hoped?', b: 'They create more side effects than expected.', u: true },
    ]),
    ...sub(IR, 'plant-disease-aqa-gcse-biology', '4.3.3', [
      { n: 1, f: 'Plant deficiency signs: nitrate and magnesium ions', b: 'Nitrate (for protein synthesis): stunted growth.\nMagnesium (for chlorophyll): chlorosis, yellow leaves.', src: INF },
      { n: 2, f: 'Signs of plant disease, and ways to identify the cause', b: 'Signs: stunted growth, spots on leaves, areas of decay, growths, malformed stems or leaves, discolouration, pests.\nIdentify by a gardening manual or website, a laboratory test of the infected plant, or testing kits containing monoclonal antibodies.', u: true },
      { n: 3, f: 'Physical, chemical and mechanical plant defences', b: 'Physical: cellulose cell walls, a tough waxy cuticle, layers of dead cells such as bark.\nChemical: antibacterial chemicals, poisons that deter herbivores.\nMechanical: thorns and hairs, leaves that droop or curl when touched, mimicry.' },
      { n: 4, f: 'Aphids as plant pests', b: 'Aphids are insects that feed on phloem sap, taking sugars from the plant and weakening it.' },
    ]),

    // 4 Bioenergetics
    ...sub(BE, 'photosynthesis-aqa-gcse-biology', '4.4.1', [
      { n: 1, f: 'Photosynthesis: word equation, and why it is endothermic', b: 'carbon dioxide + water → glucose + oxygen (light needed).\nEndothermic: energy is transferred from the environment to the chloroplasts by light.', src: BIO },
      { n: 2, f: 'Four factors that affect the rate of photosynthesis', b: 'Temperature, light intensity, carbon dioxide concentration, and the amount of chlorophyll.' },
      { n: 3, f: 'Limiting factor, and how to spot one on a graph', b: 'The factor in shortest supply, which holds the rate back. Where the line rises, the x-axis factor is limiting; where it is flat, another factor is limiting.' },
      { n: 4, f: 'On a graph with two lines at different CO₂ levels, what does it show where the lines separate?', b: 'The factor that differs between the lines (CO₂ concentration) is limiting there. Where a line is flat, the x-axis factor is not limiting.', u: true },
      { n: 5, f: 'Inverse square law: a lamp moves from 10 cm to 30 cm. A meter read 900 units. New reading?', b: 'Light intensity ∝ 1/distance². Distance × 3 → intensity × 1/9. 900 ÷ 9 = 100 units.', u: true },
      { n: 6, f: 'When is it worth adding heat, light or CO₂ in a greenhouse?', b: 'Only if the value of the extra yield is greater than the cost. Adding a factor that is not limiting raises the cost but not the yield.', u: true },
      { n: 7, f: 'Required practical 6: rate of photosynthesis with pondweed', b: 'Lamp at measured distances; a heat shield and thermometer keep temperature constant; let the weed adjust, then count bubbles or collect oxygen in a fixed time; repeat for a mean. Control: temperature, CO₂, same pondweed.' },
      { n: 8, f: 'Five uses of glucose in a plant', b: 'Respiration; insoluble starch for storage; fat or oil for storage; cellulose to strengthen the cell wall; amino acids for protein synthesis (with nitrate ions from the soil).', src: BIO },
    ]),
    ...sub(BE, 'respiration-aqa-gcse-biology', '4.4.2', [
      { n: 1, f: 'Aerobic respiration vs anaerobic respiration in muscles and in yeast', b: 'Aerobic: glucose + oxygen → carbon dioxide + water.\nMuscles: glucose → lactic acid.\nPlants and yeast: glucose → ethanol + carbon dioxide (fermentation in yeast).\nAnaerobic transfers much less energy: glucose is oxidised incompletely.' },
      { n: 2, f: 'How does the body respond to exercise, and why do muscles fatigue?', b: 'Heart rate, breathing rate and breath volume rise, so more oxygenated blood reaches the muscles. If oxygen is still too low, muscles respire anaerobically; lactic acid builds up (an oxygen debt) and long activity fatigues the muscles.' },
      { n: 3, f: 'Oxygen debt, and what happens to lactic acid after exercise', b: 'Oxygen debt: the extra oxygen the body needs after exercise to react with the accumulated lactic acid and remove it from cells. Blood carries lactic acid to the liver, where it is converted back into glucose.', u: true },
      { n: 4, f: 'Metabolism, with examples', b: 'The sum of all the reactions in a cell or the body. Examples: glucose → starch, glycogen and cellulose; glycerol + 3 fatty acids → lipid; glucose + nitrate → amino acids → proteins; respiration; excess protein → urea.', src: BIO },
    ]),

    // 5 Homeostasis and response
    ...sub(HR, 'homeostasis-aqa-gcse-biology', '4.5.1', [
      { n: 1, f: 'Homeostasis', b: 'The regulation of the internal conditions of a cell or organism to maintain optimum conditions for function, in response to internal and external changes. In humans: blood glucose, body temperature and water levels.', src: HOM },
      { n: 2, f: 'The three parts of an automatic control system', b: 'Receptors detect stimuli; coordination centres (such as the brain, spinal cord and pancreas) receive and process the information; effectors (muscles or glands) bring about responses that restore optimum levels.' },
      { n: 3, f: 'Why is homeostasis important, and what does it control in humans?', b: 'It maintains optimal conditions for enzyme action and all cell functions. In the human body it includes control of blood glucose concentration, body temperature and water levels.' },
    ]),
    ...sub(HR, 'the-human-nervous-system-aqa-gcse-biology', '4.5.2', [
      { n: 1, f: 'The reflex arc, in order', b: 'Stimulus → receptor → sensory neurone → synapse → relay neurone (CNS) → synapse → motor neurone → effector (muscle contracts or gland secretes). Reflexes are automatic and rapid.' },
      { n: 2, f: 'Accommodation: focusing on a near object vs a distant object', b: 'Near: ciliary muscles contract, suspensory ligaments slacken, lens thicker, refracts more.\nDistant: ciliary muscles relax, suspensory ligaments tighten, lens thinner, refracts less.' },
      { n: 3, f: 'Myopia vs hyperopia, and the lens used to correct each', b: 'Myopia (short sight): image forms in front of the retina; concave lens.\nHyperopia (long sight): image forms behind the retina; convex lens.' },
      { n: 4, f: 'Body temperature: responses when too hot and when too cold', b: 'Monitored by the thermoregulatory centre in the brain.\nToo hot: vasodilation, sweating.\nToo cold: vasoconstriction, sweating stops, shivering.' },
      { n: 5, f: 'Cerebral cortex, cerebellum and medulla: roles', b: 'Cerebral cortex: consciousness, intelligence, memory and language. Cerebellum: coordination of muscular activity. Medulla: unconscious activities such as heartbeat and breathing.' },
    ]),
    ...sub(HR, 'hormonal-coordination-in-humans-aqa-gcse-biology', '4.5.3', [
      { n: 1, f: 'Type 1 vs Type 2 diabetes', b: 'Type 1: the pancreas makes too little insulin; treated with insulin injections.\nType 2: body cells no longer respond to insulin; treated with a carbohydrate-controlled diet and exercise. Obesity is a risk factor.' },
      { n: 2, f: 'Negative feedback in blood glucose control', b: 'Glucose too high: the pancreas releases insulin, glucose moves into cells and is stored as glycogen. Glucose too low: the pancreas releases glucagon, glycogen → glucose, released into the blood.', u: true },
      { n: 3, f: 'ADH and water balance', b: 'Blood too concentrated → the pituitary releases more ADH → kidney tubules become more permeable → more water reabsorbed → blood less concentrated (negative feedback).', u: true },
      { n: 4, f: 'FSH, LH, oestrogen and progesterone: gland and role', b: 'FSH (pituitary): egg matures in the ovary.\nLH (pituitary): egg released (ovulation).\nOestrogen (ovary): main female hormone; uterus lining.\nProgesterone (ovary): maintains the uterus lining.' },
      { n: 5, f: 'Hormonal vs non-hormonal contraception', b: 'Hormonal: the pill (inhibits FSH), progesterone injection, implant or patch.\nNon-hormonal: condom, diaphragm, spermicide, an IUD that only prevents implantation, abstinence at fertile times, sterilisation.' },
    ]),
    ...sub(HR, 'plant-hormones-aqa-gcse-biology', '4.5.4', [
      { n: 1, f: 'Auxin and tropisms', b: 'Unequal distribution of auxin causes unequal growth. Shoots bend towards light (phototropism); roots grow down (gravitropism). Auxin collects on the shaded side of a shoot.' },
      { n: 2, f: 'Uses of auxin, ethene and gibberellins', b: 'Auxin: weed killers, rooting powder, tissue culture.\nEthene: control ripening of fruit in storage and transport.\nGibberellins: end seed dormancy, promote flowering, increase fruit size.', u: true },
      { n: 3, f: 'Required practical 8: effect of light or gravity on seedlings', b: 'Grow seedlings from cress or mung beans in dishes, with light from one side or the dish turned on its side, and a control. After a few days measure and record the direction and length of shoot and root growth.' },
    ]),

    // 6 Inheritance, variation and evolution
    ...sub(IV, 'reproduction-aqa-gcse-biology', '4.6.1', [
      { n: 1, f: 'Sexual vs asexual reproduction', b: 'Sexual: two parents; gametes made by meiosis fuse; offspring varied.\nAsexual: one parent; mitosis only; no fusion of gametes; offspring are identical clones.' },
      { n: 2, f: 'Meiosis: what it produces', b: 'Genetic information is copied, the cell divides twice, forming four gametes, each with a single set of chromosomes, all genetically different. Fertilisation restores the full number (23 + 23 = 46 in humans).', src: IVE },
      { n: 3, f: 'DNA, gene and genome', b: 'DNA: a polymer of two strands forming a double helix, in chromosomes.\nGene: a small section of DNA coding for a sequence of amino acids, making a specific protein.\nGenome: all the genetic material of an organism.', src: IVE },
      { n: 4, f: 'How many amino acids are coded for by 300 bases?', b: 'Three bases code for one amino acid, so 300 ÷ 3 = 100.' },
      { n: 5, f: 'Complementary base pairs, and how a protein is made', b: 'A pairs with T, C with G. Proteins are made on ribosomes from a template; carrier molecules bring amino acids in the right order; the chain folds into a unique shape (an enzyme, hormone or collagen).', u: true },
      { n: 6, f: 'Aa × Aa: genotypes and phenotype ratio', b: '1 AA : 2 Aa : 1 aa, so 3 dominant : 1 recessive. As probabilities: 3/4 and 1/4. With 20 offspring, expect 15 and 5.' },
      { n: 7, f: 'Polydactyly and cystic fibrosis: dominant or recessive?', b: 'Polydactyly: dominant allele. Cystic fibrosis (a disorder of cell membranes): recessive allele. Two carriers have a 1/4 chance of an affected child.' },
    ]),
    ...sub(IV, 'variation-and-evolution-aqa-gcse-biology', '4.6.2', [
      { n: 1, f: 'Natural selection, and when a new species has formed', b: 'Variation exists from mutation; individuals better suited to the environment are more likely to survive and breed, passing on their alleles, which become more common over many generations. A new species: populations can no longer interbreed to produce fertile offspring.' },
      { n: 2, f: 'Selective breeding: steps and risk', b: 'Choose parents with the desired characteristic, breed them, select the best offspring and repeat over many generations. Risk: inbreeding, making some breeds prone to disease or inherited defects.' },
      { n: 3, f: 'Genetic engineering: the steps', b: 'Enzymes isolate the required gene; it is inserted into a vector, usually a bacterial plasmid or a virus; the vector carries the gene into the required cells, at an early stage of development.', u: true },
      { n: 4, f: 'Variation: causes, and how mutations affect it', b: 'Differences in characteristics are caused by genes, the environment, or both. Mutations occur continuously; most have no effect on the phenotype, a few influence it, and very rarely a new phenotype suits a change in the environment, leading to rapid change in the species.' },
      { n: 5, f: 'Methods of cloning plants and animals', b: 'Plants: cuttings, and tissue culture (small groups of cells grown into new plants).\nAnimals: embryo transplants (an embryo split into cells, each implanted in a host mother) and adult cell cloning (a body cell nucleus put into an enucleated egg cell, stimulated by an electric shock).' },
    ]),
    ...sub(IV, 'the-development-of-understanding-of-genetics-and-evolution-aqa-gcse-biology', '4.6.3', [
      { n: 1, f: 'How do antibiotic-resistant bacteria develop, and how can it be slowed?', b: 'A mutation gives a resistant strain; the antibiotic kills non-resistant bacteria; resistant ones survive, reproduce and spread. Slow it by not using antibiotics for viral or non-serious infections, finishing the course, and restricting farm use.' },
      { n: 2, f: 'Darwin vs Lamarck, and Woese\'s three domains', b: 'Darwin: evolution by natural selection (On the Origin of Species, 1859). Lamarck: changes during a lifetime are inherited, now known not to happen in most cases.\nWoese: archaea, bacteria, eukaryota.' },
      { n: 3, f: 'How do fossils form?', b: 'From parts of organisms that have not decayed because conditions for decay were absent; when parts are replaced by minerals as they decay; or as preserved traces such as footprints, burrows and root pathways.' },
      { n: 4, f: 'Why is the fossil record incomplete?', b: 'Many early forms of life were soft-bodied and left few traces, and many fossils have been destroyed by geological activity.' },
      { n: 5, f: 'Factors that may cause extinction', b: 'New predators, new diseases, more successful competitors, changes to the environment over geological time, and single catastrophic events such as massive volcanic eruptions or asteroid collisions.' },
    ]),
    ...sub(IV, 'classification-of-living-organisms-aqa-gcse-biology', '4.6.4', [
      { n: 1, f: 'Linnaean classification: the ranks, largest first', b: 'Kingdom, phylum, class, order, family, genus, species. Organisms are named by the binomial system of genus and species, for example Homo sapiens.' },
      { n: 2, f: 'The three-domain system', b: 'Proposed by Carl Woese, using evidence from chemical analysis. Archaea: primitive bacteria, often in extreme environments. Bacteria: true bacteria. Eukaryota: protists, fungi, plants and animals.' },
      { n: 3, f: 'Evolutionary trees', b: 'Diagrams showing how closely related organisms are thought to be. They use current classification data for living organisms and fossil data for extinct organisms.' },
    ]),

    // 7 Ecology
    ...sub(EC, 'adaptations-interdependence-and-competition-aqa-gcse-biology', '4.7.1', [
      { n: 1, f: 'Ecosystem, population and community', b: 'Ecosystem: the interaction of a community of living organisms with the non-living parts of their environment.\nPopulation: all the organisms of one species in a habitat.\nCommunity: all the populations of different species in a habitat.', src: ECO },
      { n: 2, f: 'Interdependence', b: 'Each species depends on others for food, shelter, pollination, seed dispersal and so on, so removing one species can affect the whole community.', src: ECO },
      { n: 3, f: 'What do plants and animals compete for?', b: 'Plants: light, space, water and mineral ions from the soil.\nAnimals: food, mates and territory.' },
      { n: 4, f: 'Four biotic factors that affect a community', b: 'Availability of food; new predators arriving; new pathogens; one species outcompeting another so its numbers are too low to breed.' },
      { n: 5, f: 'Adaptations and extremophiles', b: 'Adaptations may be structural, behavioural or functional, and let organisms survive where they live. Extremophiles live in extreme environments: high temperature, high pressure or high salt concentration, for example bacteria in deep-sea vents.' },
    ]),
    ...sub(EC, 'organisation-of-an-ecosystem-aqa-gcse-biology', '4.7.2', [
      { n: 1, f: 'Four 1 m² quadrats hold 3, 5, 0 and 4 plants. Estimate the number in a 200 m² field.', b: 'Mean = 12 ÷ 4 = 3.0 per m². 3.0 × 200 = 600 plants. Quadrats are placed at random coordinates.' },
      { n: 2, f: 'How is a transect used?', b: 'Run a tape across a change in conditions; place a quadrat at regular intervals along it; record the species and measure the abiotic factor at each point. It shows distribution, not abundance.' },
      { n: 3, f: 'Predator–prey cycles', b: 'Prey increase → more food → predators increase (with a lag) → more prey eaten → prey fall → less food → predators fall.' },
      { n: 4, f: 'Factors that increase the rate of decay, and what anaerobic decay produces', b: 'Warmth (up to the enzymes\' optimum), water and oxygen. Anaerobic decay produces methane, which can be collected as biogas fuel.' },
      { n: 5, f: 'Required practical 10: milk falls from pH 6.7 to 5.5 in 40 minutes. Rate of decay?', b: '1.2 ÷ 40 = 0.03 pH units per minute. The pH falls because microorganisms decaying the milk produce acid.' },
      { n: 6, f: 'The three environmental changes that affect the distribution of species', b: 'Temperature, availability of water, and the composition of atmospheric gases. They may be seasonal, geographic or caused by human interaction.', u: true },
    ]),
    ...sub(EC, 'biodiversity-and-the-effect-of-human-interaction-on-ecosystems-aqa-gcse-biology', '4.7.3', [
      { n: 1, f: 'Why is destroying peat bogs harmful?', b: 'Habitat and biodiversity are lost, and the decay or burning of the peat releases carbon dioxide.' },
      { n: 2, f: 'Biodiversity, and why it matters', b: 'The variety of all the different species of organisms on Earth, or within an ecosystem. High biodiversity makes ecosystems more stable, because species depend less on a single other species for food, shelter and a stable environment.' },
      { n: 3, f: 'Effects of global warming on living things', b: 'Loss of habitat as sea levels rise, changes in the distribution of species as temperature and rainfall change, and changes to migration patterns, all of which may reduce biodiversity.' },
      { n: 4, f: 'Ways to maintain biodiversity', b: 'Breeding programmes for endangered species; protecting and regenerating rare habitats; reintroducing field margins and hedgerows; reducing deforestation and carbon dioxide emissions; recycling instead of dumping waste in landfill.' },
    ]),
    ...sub(EC, 'trophic-levels-in-an-ecosystem-aqa-gcse-biology', '4.7.4', [
      { n: 1, f: 'A trophic level holds 2400 g of biomass; the next holds 180 g. Efficiency of transfer?', b: '180 ÷ 2400 × 100 = 7.5%. Biomass is lost as faeces (egestion), as waste such as urea and CO₂, and as glucose used in respiration.' },
      { n: 2, f: 'Trophic levels, from the bottom', b: 'Level 1: producers (plants and algae). Level 2: primary consumers (herbivores). Level 3: secondary consumers (carnivores eating herbivores). Level 4: tertiary consumers. Apex predators have no predators. Decomposers break down dead plant and animal matter.' },
      { n: 3, f: 'Why is only about 10% of biomass passed to the next trophic level?', b: 'Not all the biomass is eaten (such as bones and roots); some eaten material is egested as faeces; much glucose is used in respiration, releasing carbon dioxide and water; and some is lost in waste such as urea in urine.' },
      { n: 4, f: 'Pyramid of biomass', b: 'A diagram with a bar for each trophic level, drawn to scale to show the mass of living material at that level. Producers are at the bottom.' },
    ]),
    ...sub(EC, 'food-production-aqa-gcse-biology', '4.7.5', [
      { n: 1, f: 'Food security, and biological factors threatening it', b: 'Food security: having enough food to feed a population. Threats: increasing birth rate, changing diets in developed countries, new pests and pathogens, environmental change such as failed rains, the cost of agricultural inputs, and conflicts affecting water or food.' },
      { n: 2, f: 'How can farming make food production more efficient?', b: 'Restrict energy transfer from food animals to the environment by limiting their movement and controlling the temperature of their surroundings. Some animals are fed high-protein foods to increase growth.' },
      { n: 3, f: 'How are fish stocks kept sustainable?', b: 'Control of net size (so young fish escape and breed) and fishing quotas, keeping stocks at a level where breeding continues.' },
      { n: 4, f: 'Mycoprotein: what it is and how it is made', b: 'A protein-rich food suitable for vegetarians, made from the fungus Fusarium grown on glucose syrup in aerobic conditions; the biomass is harvested and purified.' },
    ]),

    // 8 Key ideas
    ...topicOnly('key-ideas-aqa-gcse-biology', '8', [
      { n: 1, f: 'Photosynthesis vs respiration: endothermic or exothermic?', b: 'Photosynthesis is endothermic: it takes in energy from light. Respiration is exothermic: it transfers energy to the environment.', src: KEY },
      { n: 2, f: 'Surface area to volume ratio of a 2 cm cube', b: 'SA = 6 × 2 × 2 = 24 cm²; V = 8 cm³; ratio = 3 : 1. A bigger organism has more surface area in total but a smaller ratio.' },
      { n: 3, f: 'Why is starch a good storage molecule, and what is a lipid made of?', b: 'Starch is insoluble. A lipid is made of one glycerol and three fatty acids.', src: KEY },
      { n: 4, f: 'How many bases code for a protein of 120 amino acids?', b: '120 × 3 = 360 bases.' },
      { n: 5, f: 'Grass holds 4000 g of biomass; the sheep eating it hold 360 g. Efficiency?', b: '360 ÷ 4000 × 100 = 9%.' },
      { n: 6, f: 'What does a plant need, besides glucose, to make amino acids?', b: 'Nitrate ions absorbed from the soil.' },
      { n: 7, f: 'Three uses of energy transferred by respiration', b: 'Building larger molecules, movement, and keeping warm.', src: KEY },
      { n: 8, f: 'Why does high biodiversity make an ecosystem more stable?', b: 'Many species share the work of providing food, shelter and pollination, so losing one species has a smaller effect on the community.' },
      { n: 9, f: 'Genetically identical plants grow differently in different soils. What does this show?', b: 'Characteristics depend on the genome and the environment; here the variation is environmental only.' },
      { n: 10, f: 'Why say an enzyme is "denatured", not "killed", at high temperature?', b: 'Enzymes are not alive. The active site changes shape, so the substrate no longer fits.' },
      { n: 11, f: 'How can a mutation change how a protein works?', b: 'A change in the DNA can change the protein\'s shape, so an enzyme\'s active site may no longer fit its substrate, or a structural protein may lose its strength. Variants in non-coding DNA can alter gene expression.', u: true },
    ]),
  ],
};
