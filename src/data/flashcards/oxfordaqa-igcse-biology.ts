/**
 * D-444 -- flashcards for OxfordAQA International GCSE Biology 9201
 * (Version 5.2, for exams May/June 2018 onwards).
 *
 * 9201 is untiered, so no card carries a tier.
 *
 * Every topic is itemised into sub-topics (3.1.1 to 3.6.2), so ids are
 * `<sub-topic number>-<n>`. The cards were first filed on whole topics; on
 * 20 Nov 2026 they were re-filed under the sub-topics and `idMigration`
 * below moves saved progress onto the new ids.
 * Ids are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9201); origin 'revision-notes'.
 *
 * Plain text only (see types.ts). Unicode for formulae.
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

const BIO = 'bioenergetics-oxfordaqa-igcse-biology';

const R = (slug: string) => `oxfordaqa-igcse-biology-${slug}-revision-notes`;
const ORG = 'igcse-oxfordaqa-biology-organisation-revision-notes';
const PHT = R('photosynthesis-limiting-factors-and-transport-in-plants');
const CIRC = R('circulation-in-humans-heart-vessels-blood-and');
const DIG = R('digestion-and-enzymes');
const BR = R('breathing-and-respiration');
const EN = R('energy-transfer-biomass-pyramids-adaptations-and');
const DECAY = R('decay-the-carbon-cycle-and-human-effects-on-the');
const NERV = R('nervous-system-reflexes-and-animal-behaviour');
const HOM = R('homeostasis-temperature-control-and-blood-glucose');
const INF = R('infection-immunity-vaccination-and-antibiotics');
const WAT = R('water-and-ion-balance-liver-kidneys-and-adh');
const GV = R('genetic-variation-monohybrid-inheritance-dna-and');
const RCD = R('reproduction-cell-division-stem-cells-and-tumours');
const GM = R('genetic-manipulation-cloning-genetic-engineering-and');
const VNS = R('variation-natural-selection-and-the-origin-of-species');

export const DECK_OXFORDAQA_IGCSE_BIOLOGY: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'igcse',
  subjectSlug: 'biology',
  syllabusCode: '9201',
  syllabusSeries: 'Version 5.2, for exams May/June 2018 onwards',
  author: 'marlbridge-academic-team',
  updated: '2026-11-20',
  deckReview: { reviewerSlug: 'hina-mogul', reviewedOn: '2026-11-05' },
  idMigration: {
    id: '9201-subtopics-2026-11-20',
    before: '2026-11-20',
    map: {
      '1-1': '3.1.1-1', '1-2': '3.1.1-2', '1-3': '3.1.1-3', '1-4': '3.1.1-4', '1-5': '3.1.2-1',
      '1-6': '3.1.3-1', '1-7': '3.1.3-2', '1-8': '3.1.3-3', '1-9': '3.1.4-1', '1-10': '3.1.5-1',
      '1-11': '3.1.5-2', '1-12': '3.1.5-3', '3.2.1-1': '3.2.1-1', '3.2.1-2': '3.2.1-2', '3.2.1-3': '3.2.1-3',
      '3.2.1-4': '3.2.1-4', '3.2.1-5': '3.2.1-5', '3.2.1-6': '3.2.1-6', '3.2.1-7': '3.2.1-7', '3.2.1-8': '3.2.1-8',
      '3.2.1-9': '3.2.1-9', '3.2.1-10': '3.2.1-10', '3.2.2-1': '3.2.2-1', '3.2.2-2': '3.2.2-2', '3.2.2-3': '3.2.2-3',
      '3.2.2-4': '3.2.2-4', '3.2.2-5': '3.2.2-5', '3.2.2-6': '3.2.2-6', '3.2.2-7': '3.2.2-7', '3.2.2-8': '3.2.2-8',
      '3.2.2-9': '3.2.2-9', '3.2.3-1': '3.2.3-1', '3.2.3-2': '3.2.3-2', '3.2.3-3': '3.2.3-3', '3.2.3-4': '3.2.3-4',
      '3.2.3-5': '3.2.3-5', '3.2.3-6': '3.2.3-6', '3.2.3-7': '3.2.3-7', '3.2.3-8': '3.2.3-8', '3.2.3-9': '3.2.3-9',
      '3.2.3-10': '3.2.3-10', '3.2.3-11': '3.2.3-11', '3.2.3-12': '3.2.3-12', '3.2.4-1': '3.2.4-1', '3.2.4-2': '3.2.4-2',
      '3.2.4-3': '3.2.4-3', '3.2.4-4': '3.2.4-4', '3.2.4-5': '3.2.4-5', '3.2.4-6': '3.2.4-6', '3.2.4-7': '3.2.4-7',
      '3.2.4-8': '3.2.4-8', '3.2.4-9': '3.2.4-9', '3.2.4-10': '3.2.4-10', '3.2.4-11': '3.2.4-11', '3.2.5-1': '3.2.5-1',
      '3.2.5-2': '3.2.5-2', '3.2.5-3': '3.2.5-3', '3.2.5-4': '3.2.5-4', '3.2.5-5': '3.2.5-5', '3.2.5-6': '3.2.5-6',
      '3.2.5-7': '3.2.5-7', '3.2.5-8': '3.2.5-8', '3.2.6-1': '3.2.6-1', '3.2.6-2': '3.2.6-2', '3.2.6-3': '3.2.6-3',
      '3.2.6-4': '3.2.6-4', '3.2.6-5': '3.2.6-5', '3.2.6-6': '3.2.6-6', '3.2.6-7': '3.2.6-7', '3.2.6-8': '3.2.6-8',
      '3.2.6-9': '3.2.6-9', '3.2.6-10': '3.2.6-10', '3-1': '3.3.1-1', '3-2': '3.3.1-2', '3-3': '3.3.1-3',
      '3-4': '3.3.1-4', '3-5': '3.3.2-1', '3-6': '3.3.2-2', '3-7': '3.3.2-3', '3-8': '3.3.2-4',
      '3-9': '3.3.3-1', '3-10': '3.3.3-2', '3-11': '3.3.4-1', '3-12': '3.3.4-2', '4-1': '3.4.1-1',
      '4-2': '3.4.4-1', '4-3': '3.4.4-2', '4-4': '3.4.5-1', '4-5': '3.4.5-2', '4-6': '3.4.3-1',
      '4-7': '3.4.3-2', '4-8': '3.4.3-3', '4-9': '3.4.7-1', '4-10': '3.4.7-2', '4-11': '3.4.7-3',
      '4-12': '3.4.6-1', '5-1': '3.5.1-1', '5-2': '3.5.2-1', '5-3': '3.5.2-2', '5-4': '3.5.2-3',
      '5-5': '3.5.3-1', '5-6': '3.5.3-2', '5-7': '3.5.3-3', '5-8': '3.5.3-4', '5-9': '3.5.3-5',
      '5-10': '3.5.4-1', '5-11': '3.5.5-1', '5-12': '3.5.5-2', '6-1': '3.6.1-1', '6-2': '3.6.1-2',
      '6-3': '3.6.1-3', '6-4': '3.6.2-1', '6-5': '3.6.2-2', '6-6': '3.6.2-3', '6-7': '3.6.2-4',
      '6-8': '3.6.2-5', '6-9': '3.6.2-6', '6-10': '3.6.1-4',
    },
  },
  cards: [
    // 1 Organisation
    ...sub('organisation-oxfordaqa-igcse-biology', 'cell-structure-oxfordaqa-igcse-biology', '3.1.1', [
      { n: 1, f: 'Functions of the nucleus, cytoplasm and cell membrane', b: 'Nucleus: controls the activities of the cell.\nCytoplasm: where most of the chemical reactions take place.\nCell membrane: controls the passage of substances into and out of the cell.', src: ORG },
      { n: 2, f: 'Functions of mitochondria and ribosomes', b: 'Mitochondria: where most energy is released in respiration.\nRibosomes: where protein synthesis occurs.', src: ORG },
      { n: 3, f: 'Structures plant cells have that animal cells lack', b: 'Chloroplasts (absorb light energy to make food), a permanent vacuole filled with cell sap, and a cell wall made of cellulose, which strengthens the cell.' },
      { n: 4, f: 'How does a bacterial cell differ from a plant or animal cell?', b: 'It is prokaryotic: the genes are not in a distinct nucleus, and some genes are in small circular structures called plasmids. It has cytoplasm and a membrane surrounded by a cell wall.' },
    ]),
    ...sub('organisation-oxfordaqa-igcse-biology', 'principles-of-organisation-oxfordaqa-igcse-biology', '3.1.2', [
      { n: 1, f: 'Tissue, organ and organ system', b: 'Tissue: a group of cells with similar structure and function.\nOrgan: made of tissues; one organ may contain several different tissues.\nOrgan system: a group of organs that perform a particular function.', src: ORG },
      { n: 2, f: 'Differentiation in a multicellular organism', b: 'During development, cells differentiate so that they can perform different functions. A differentiated cell has structures that suit its job and does it more effectively than an unspecialised cell.', src: ORG },
      { n: 3, f: 'Why do large multicellular organisms need systems for exchanging materials?', b: 'Most of their cells are deep inside the body, far from the outside, so exchange across the outer surface alone cannot supply them. Systems such as the digestive and circulatory systems solve this.' },
      { n: 4, f: 'Cubes of side 2 mm, 4 mm and 8 mm: surface area to volume ratio of each?', b: 'Ratio = 6 × side² ÷ side³. 2 mm: 24 ÷ 8 = 3.0. 4 mm: 96 ÷ 64 = 1.5. 8 mm: 384 ÷ 512 = 0.75. Doubling the side halves the ratio, so larger bodies need exchange organs.' },
      { n: 5, f: 'The levels of organisation from smallest to largest', b: 'Cell → tissue → organ → organ system → organism. Each level is built from the one below; a tissue is a group of similar cells and an organ contains several tissues.', src: ORG },
    ]),
    ...sub('organisation-oxfordaqa-igcse-biology', 'animal-tissues-organs-and-systems-oxfordaqa-igcse-biology', '3.1.3', [
      { n: 1, f: 'Muscular, glandular and epithelial tissue', b: 'Muscular: contracts to bring about movement.\nGlandular: produces substances such as enzymes and hormones.\nEpithelial: covers some parts of the body.', src: ORG },
      { n: 2, f: 'Why is the stomach an organ?', b: 'It contains several tissues working together: muscular tissue moves the contents, glandular tissue produces digestive juices, and epithelial tissue covers the outside and the inside.' },
      { n: 3, f: 'Roles of the liver, small intestine and large intestine in the digestive system', b: 'Liver: produces bile.\nSmall intestine: digestion, and where soluble food is absorbed.\nLarge intestine: water is absorbed from the undigested food, producing faeces.', src: ORG },
    ]),
    ...sub('organisation-oxfordaqa-igcse-biology', 'plant-tissues-organs-and-systems-oxfordaqa-igcse-biology', '3.1.4', [
      { n: 1, f: 'Plant tissues: epidermal, palisade mesophyll, spongy mesophyll, xylem and phloem', b: 'Epidermal: covers the plant. Palisade mesophyll: carries out photosynthesis. Spongy mesophyll: air spaces help gases diffuse. Xylem and phloem: transport substances around the plant.', src: ORG },
      { n: 2, f: 'Layers of a leaf from the top down', b: 'Upper epidermis (covers), palisade mesophyll (photosynthesis), spongy mesophyll (air spaces for gas diffusion) and lower epidermis (covers, with stomata). Xylem and phloem run in the veins through the mesophyll.' },
      { n: 3, f: 'Palisade mesophyll vs spongy mesophyll: structure and position', b: 'Palisade cells are packed with chloroplasts and sit near the top of the leaf where most light arrives. Spongy cells are loosely packed, and the air spaces let carbon dioxide and oxygen diffuse through the leaf.' },
      { n: 4, f: 'Plant organs, and the limit on internal structure to be learned', b: 'Plant organs include stems, roots and leaves. Internal structure is limited to the leaf and to the position of the xylem and phloem in a dicotyledonous primary root and primary stem.', src: ORG },
      { n: 5, f: 'What is the role of epidermal tissue and stomata in a leaf?', b: 'Epidermal tissue covers the leaf surfaces. In the lower epidermis, small pores called stomata allow gases to enter and leave the leaf.' },
    ]),
    ...sub('organisation-oxfordaqa-igcse-biology', 'transport-in-cells-oxfordaqa-igcse-biology', '3.1.5', [
      { n: 1, f: 'Diffusion, osmosis and active transport: what moves, which way, and is energy used?', b: 'Diffusion: particles in solution or of a gas, higher → lower concentration, no energy.\nOsmosis: water through a partially permeable membrane, dilute → more concentrated solution, no energy.\nActive transport: against a concentration gradient, energy from respiration.', src: ORG },
      { n: 2, f: 'Isotonic, hypotonic and hypertonic solutions: effect on a cell', b: 'Isotonic: no net movement of water. Hypotonic (more dilute): water enters the cell. Hypertonic (more concentrated): water leaves. A plant cell that takes in water is turgid; one that loses a lot shrinks from its wall (plasmolysis).' },
      { n: 3, f: 'Features that make an exchange surface effective', b: 'A large surface area that is thin, giving a short diffusion path; in animals, an efficient blood supply; and for gas exchange in animals, ventilation. Examples: villi in the small intestine, alveoli in the lungs, root hair cells.' },
    ]),

    // 2 Bioenergetics
    ...sub(BIO, 'photosynthesis-oxfordaqa-igcse-biology', '3.2.1', [
      { n: 1, f: 'Photosynthesis: word and balanced symbol equations', b: 'carbon dioxide + water → glucose + oxygen (light energy)\n6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', src: PHT },
      { n: 2, f: 'Where is light absorbed, and where do the raw materials come from?', b: 'Light is absorbed by chlorophyll in the chloroplasts (some plant cells and algae). Carbon dioxide comes from the air; water comes from the soil. Oxygen is the by-product.' },
      { n: 3, f: 'Five ways a plant uses the glucose it makes', b: 'Respiration; insoluble starch for storage; fat or oil for storage (e.g. in seeds); cellulose to strengthen cell walls; protein for growth and repair (needs nitrate ions from the soil).' },
      { n: 4, f: 'Limiting factor', b: 'The factor in shortest supply, which sets the maximum rate at that moment. The three are low temperature, shortage of carbon dioxide and shortage of light, and they interact.', src: PHT },
      { n: 5, f: 'How do you name the limiting factor from a graph?', b: 'Where the line is still rising, the x-axis factor is limiting. Where it is flat, another factor is limiting: compare a second line or name the factor held constant, and quote two numbers.' },
      { n: 6, f: 'At light 4, the rate is 10 at 15 °C but 16 at 25 °C. What limits the rate at 15 °C?', b: 'Temperature. Warming raises the rate by (16 − 10) ÷ 10 × 100 = 60%, so light was not limiting at 15 °C.' },
      { n: 7, f: 'When is it worth heating, lighting or adding CO₂ to a greenhouse?', b: 'Only when that factor is limiting and the value of the extra yield is greater than the cost. Net gain = extra yield × price − extra cost.' },
      { n: 8, f: 'Required practical on the rate of photosynthesis: variables', b: 'Independent: one of lamp distance, CO₂ supply (hydrogencarbonate) or temperature. Dependent: bubbles or volume of oxygen per minute. Control: the other two factors, the same pondweed, the same time per setting.' },
      { n: 9, f: 'Pondweed gives 60, 64 and 62 bubbles in 4 minutes. Mean rate?', b: 'Mean = (60 + 64 + 62) ÷ 3 = 62 bubbles. Rate = 62 ÷ 4 = 15.5 bubbles per minute.' },
      { n: 10, f: 'Photosynthesis vs respiration', b: 'Photosynthesis: in cells with chloroplasts, only when there is light; takes in CO₂ and water; absorbs energy.\nRespiration: in all living cells, all the time; takes in glucose and oxygen; releases energy.' },
    ]),
    ...sub(BIO, 'exchange-and-transport-in-plants-oxfordaqa-igcse-biology', '3.2.2', [
      { n: 1, f: 'Stomata and guard cells', b: 'A stoma is a pore in the leaf surface through which gases diffuse (CO₂ in, oxygen out). A pair of guard cells changes shape to open or close it, helping to control water loss.', src: PHT },
      { n: 2, f: 'Root hair', b: 'A tiny extension of a root cell that increases the surface area for absorbing water and mineral ions.', src: PHT },
      { n: 3, f: 'A leaf is 6 cm × 2 cm × 0.1 cm. Surface area to volume ratio?', b: 'SA = 2(12 + 0.6 + 0.2) = 25.6 cm². V = 1.2 cm³. Ratio = 21.3 : 1. Thin, flat shapes give high ratios.' },
      { n: 4, f: 'How do internal air spaces help a leaf?', b: 'They let gases diffuse to the cells inside the leaf, giving a large internal surface area and a short diffusion path.' },
      { n: 5, f: 'When is water lost fastest from leaves?', b: 'In hot, dry and windy conditions. Water vapour is lost mainly from the leaves, mostly through the stomata.' },
      { n: 6, f: 'Wilting, and how stomata closing prevents it', b: 'Wilting is loss of firmness when water leaves cells faster than it is replaced. Water leaving the guard cells closes the stomata, which prevents wilting but reduces CO₂ uptake.', src: PHT },
      { n: 7, f: 'Transpiration stream vs translocation', b: 'Transpiration stream: movement of water from the roots, through the xylem, out of the leaves.\nTranslocation: movement of dissolved sugars in the phloem from the leaves to the rest of the plant.', src: PHT },
      { n: 8, f: 'Xylem vs phloem: structure', b: 'Xylem: hollow dead tubes with strong walls containing lignin, so water flows and the walls resist collapse.\nPhloem: living sieve tubes with pores, and companion cells that supply energy.' },
      { n: 9, f: 'Where do xylem and phloem carry substances?', b: 'Xylem: water and mineral ions from the roots to the stem and leaves.\nPhloem: dissolved sugars from the leaves to growing regions and storage organs.' },
    ]),
    ...sub(BIO, 'circulation-in-humans-oxfordaqa-igcse-biology', '3.2.3', [
      { n: 1, f: 'The four chambers of the heart, and the order in which they contract', b: 'Right and left atria, right and left ventricles. Blood enters the atria; the atria contract and force blood into the ventricles; the ventricles contract and force blood out. Valves keep the flow one way.' },
      { n: 2, f: 'Route of blood through the heart and lungs, from the vena cava', b: 'Vena cava → right atrium → right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle → aorta → body organs.' },
      { n: 3, f: 'Double circulation, and why the left ventricle wall is thicker', b: 'Two circuits: heart to lungs and back, and heart to all other organs and back, so blood is pumped again after the lungs. The left ventricle pumps blood around the whole body; the right only to the nearby lungs.' },
      { n: 4, f: 'Arteries, veins and capillaries', b: 'Artery: thick wall with muscle and elastic fibres, carries blood away from the heart.\nVein: thinner wall, often has valves to prevent back-flow.\nCapillary: very thin wall, very narrow; substances pass in and out through the wall.' },
      { n: 5, f: 'What does plasma carry?', b: 'Carbon dioxide (organs to lungs), soluble products of digestion (small intestine to organs) and urea (liver to kidneys).' },
      { n: 6, f: 'How do red blood cells carry oxygen?', b: 'In the lungs: haemoglobin + oxygen → oxyhaemoglobin. In other organs: oxyhaemoglobin → haemoglobin + oxygen. Red cells have no nucleus.' },
      { n: 7, f: 'How does blood clot?', b: 'At a wound, platelets help start a series of enzyme-controlled reactions. Soluble fibrinogen is changed to fibrin, which forms a network of fibres that traps blood cells, forming a clot.', src: CIRC },
      { n: 8, f: 'Artificial pacemaker and stent: what each treats', b: 'Artificial pacemaker: an electrical device that corrects an irregular heart rate (the natural pacemaker cells are in the right atrium).\nStent: holds open a coronary artery narrowed by fatty layers in coronary heart disease.' },
      { n: 9, f: 'Biological vs mechanical replacement heart valves', b: 'Biological (from humans or other mammals): usually less need for lifelong anticoagulant drugs, but can wear out.\nMechanical: can last a long time, but blood may clot on it, so anticoagulants are often needed.' },
      { n: 10, f: 'Why can a transplanted organ be rejected, and how is rejection reduced?', b: 'The recipient\'s antibodies attack antigens on the donor organ that they do not recognise as their own. Reduce it by choosing a donor with a similar tissue type and giving immune-suppressing drugs.', src: CIRC },
      { n: 11, f: 'ABO blood groups: antigens and plasma antibodies', b: 'A: antigen A, anti-B. B: antigen B, anti-A. AB: A and B, no antibodies. O: no antigens, anti-A and anti-B. Group O is the universal donor; AB can receive from all groups.' },
      { n: 12, f: 'A pulse of 31 beats is counted in 20 s. Heart rate?', b: '31 ÷ 20 × 60 = 93 beats per minute.' },
    ]),
    ...sub(BIO, 'digestion-oxfordaqa-igcse-biology', '3.2.4', [
      { n: 1, f: 'Why is food digested, and what are starch, protein and fat broken into?', b: 'They are insoluble, so they are broken into soluble substances that can be absorbed into the blood in the wall of the small intestine. Starch → sugars; protein → amino acids; fat → fatty acids and glycerol.' },
      { n: 2, f: 'What happens in the large intestine?', b: 'Much of the water mixed with the food is absorbed into the blood. The indigestible food left makes up the bulk of the faeces, which leave through the anus.' },
      { n: 3, f: 'Enzymes, and what high temperature does to them', b: 'Large proteins that act as biological catalysts, increasing the rate of reactions without being used up. High temperature denatures them: the active site changes shape, so the substrate cannot fit. Cooling does not reverse it.', src: DIG },
      { n: 4, f: 'Where are digestive enzymes made, and where do they act?', b: 'They are made in specialised cells in glands and the gut lining, then pass out of the cells into the gut to meet the food.' },
      { n: 5, f: 'Amylase: where made, where it acts, and the reaction', b: 'Made in the salivary glands, pancreas and small intestine; acts in the mouth and small intestine; starch → sugars.', src: DIG },
      { n: 6, f: 'Protease and lipase: where made and the reactions', b: 'Protease: stomach, pancreas, small intestine; protein → amino acids.\nLipase: pancreas, small intestine; lipid → fatty acids and glycerol.', src: DIG },
      { n: 7, f: 'Hydrochloric acid and bile: where made and their jobs', b: 'Hydrochloric acid (stomach): acid conditions in which stomach enzymes work best.\nBile (made in the liver, stored in the gall bladder): neutralises the acid, giving alkaline conditions for small intestine enzymes. Neither is an enzyme.' },
      { n: 8, f: 'Emulsification', b: 'Bile breaks large fat drops into small droplets. The volume is unchanged but the surface area increases, so lipase has more surface to act on.', src: DIG },
      { n: 9, f: 'Required practical: starch is digested in a mean of 60 s. Rate, and how it compares with 30 s?', b: 'Rate = 1000 ÷ 60 = 16.7 (arbitrary units). At 30 s, 1000 ÷ 30 = 33.3, twice as fast. Use a water bath for temperature and buffer solutions for pH.' },
      { n: 10, f: 'Uses of enzymes from microorganisms', b: 'Protease and lipase: biological washing powders. Lactase: lactose-free milk. Pectinase: fruit juice extraction. Amylase: breaking starch into sugars in food manufacture.' },
      { n: 11, f: 'Denatured vs slowed enzyme', b: 'Denatured: the shape of the active site is lost, permanently (high temperature, extreme pH). Slowed: at low temperature there are fewer successful collisions, and it is reversible.' },
    ]),
    ...sub(BIO, 'breathing-oxfordaqa-igcse-biology', '3.2.5', [
      { n: 1, f: 'Function and position of the breathing system', b: 'It moves air in and out, so oxygen passes into the blood and carbon dioxide passes out by diffusion. The lungs are in the thorax, protected by the ribcage and separated from the abdomen by the diaphragm.' },
      { n: 2, f: 'Path of air into the lungs', b: 'Trachea → bronchi → bronchioles → alveoli.' },
      { n: 3, f: 'Inhaling: what happens', b: 'Intercostal muscles contract and pull the ribcage up; the diaphragm contracts and flattens; thorax volume increases; pressure falls below that of the outside air; air enters.' },
      { n: 4, f: 'Exhaling: what happens', b: 'Intercostal muscles relax and the ribcage moves down; the diaphragm relaxes and becomes domed; thorax volume decreases; pressure rises above that of the outside air; air leaves.' },
      { n: 5, f: 'How are the alveoli adapted for gas exchange?', b: 'They provide a very large surface area, richly supplied with blood capillaries, with thin walls, so gases diffuse readily into and out of the blood.' },
      { n: 6, f: 'Negative pressure vs positive pressure ventilators', b: 'Negative pressure: pressure is lowered around the chest in a sealed chamber, so air is drawn into the lungs.\nPositive pressure: air is pushed into the airway above outside pressure, so it is forced into the lungs.', src: BR },
      { n: 7, f: 'Why can a ventilator save a life?', b: 'When spontaneous breathing stops through disease or injury, oxygen cannot reach the blood. A ventilator moves air into the lungs, so oxygen can still diffuse into the blood and carbon dioxide out.' },
      { n: 8, f: 'Breathing vs respiration', b: 'Breathing is moving air into and out of the lungs. Respiration is the chemical reactions in cells that transfer energy from glucose.' },
    ]),
    ...sub(BIO, 'respiration-oxfordaqa-igcse-biology', '3.2.6', [
      { n: 1, f: 'Aerobic respiration: word and balanced symbol equations', b: 'glucose + oxygen → carbon dioxide + water\nC₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O\nIt happens continuously in plants and animals; most of the reactions occur inside mitochondria.', src: BR },
      { n: 2, f: 'What is the energy from respiration used for?', b: 'Building larger molecules from smaller ones; muscle contraction (animals); keeping a steady body temperature in cold surroundings (mammals and birds); building sugars, nitrates and other nutrients into amino acids and proteins (plants).' },
      { n: 3, f: 'How does the body respond to exercise?', b: 'Heart rate rises, so more blood flows to the muscles; breathing rate and depth rise; muscle glycogen is converted back to glucose. More glucose and oxygen are supplied and carbon dioxide is removed faster.' },
      { n: 4, f: 'Anaerobic respiration in muscle: word and symbol equations', b: 'glucose → lactic acid\nC₆H₁₂O₆ → 2C₃H₆O₃\nMuch less energy is transferred than in aerobic respiration.' },
      { n: 5, f: 'Anaerobic respiration in plants and yeast: word and symbol equations', b: 'glucose → ethanol + carbon dioxide\nC₆H₁₂O₆ → 2C₂H₅OH + 2CO₂' },
      { n: 6, f: 'Oxygen debt', b: 'The oxygen needed after exercise to oxidise the lactic acid that built up to carbon dioxide and water. It is repaid after exercise, which is why you keep breathing hard; it is not a store of oxygen.', src: BR },
      { n: 7, f: 'Why do muscles become fatigued?', b: 'During long vigorous activity lactic acid builds up in the muscles and they stop contracting efficiently. Blood flowing through the muscles eventually removes the lactic acid.' },
      { n: 8, f: 'Why is less energy transferred in anaerobic respiration?', b: 'Glucose is only partly broken down, to lactic acid. The lactic acid still holds energy, which is only released when it is later oxidised using oxygen.' },
      { n: 9, f: 'Resting pulse is 72 bpm and 126 bpm after exercise. Percentage increase?', b: '(126 − 72) ÷ 72 × 100 = 54 ÷ 72 × 100 = 75%.' },
      { n: 10, f: 'Required practical on exercise: method and controls', b: 'Record resting pulse and breathing rate; exercise for a set time at a set intensity; measure straight afterwards and at regular intervals until back to resting. Same person, same step, same timing; count for 15 s and multiply by 4.' },
    ]),

    // 3 Ecology
    ...sub('ecology-oxfordaqa-igcse-biology', 'energy-transferred-in-ecosystems-oxfordaqa-igcse-biology', '3.3.1', [
      { n: 1, f: 'How much light energy do plants transfer, and how much biomass passes up each trophic level?', b: 'Plants and algae transfer about 1% of the incident light energy. About 10% of the biomass passes up to each trophic level.' },
      { n: 2, f: 'Why is about 90% of biomass not passed on?', b: 'Waste materials (faeces, urine) carry materials and energy away; respiration supplies energy for life processes such as movement, and much ends up as heat in the surroundings; some parts are not eaten.' },
      { n: 3, f: 'Light energy is 3.2 × 10⁶ kJ per m². Energy reaching secondary consumers?', b: 'Producers store 1%: 3.2 × 10⁴ kJ. Primary consumers 10%: 3.2 × 10³ kJ. Secondary consumers 10%: 320 kJ.' },
      { n: 4, f: 'Why is a short food chain more efficient for food production?', b: 'About 90% of the biomass is lost at every extra stage, so eating a crop directly gives more of the producers\' biomass to humans than feeding it to livestock (for example 7500 MJ against 750 MJ).' },
    ]),
    ...sub('ecology-oxfordaqa-igcse-biology', 'adaptations-interdependence-and-competition-oxfordaqa-igcse-biology', '3.3.2', [
      { n: 1, f: 'Competition vs interdependence', b: 'Competition is for scarce resources (plants: light, space, water, mineral ions; animals: food, mates, territory). Interdependence is reliance on other organisms, such as flowers on pollinators.', src: EN },
      { n: 2, f: 'Structural, behavioural and functional adaptations: examples', b: 'Structural: white fur in snow, a thick waxy cuticle.\nBehavioural: migration, huddling, burrowing.\nFunctional: concentrated urine, many eggs, hibernation.' },
      { n: 3, f: 'Extremophiles', b: 'Organisms that live where conditions are very extreme: high salt, high temperature or high pressure. Examples: archaea in salt lakes, Thermus aquaticus in hot springs.' },
      { n: 4, f: 'How is a tapeworm adapted to life in the intestine?', b: 'Hooks and suckers hold it to the gut wall; a thick covering resists digestive enzymes; it is flat and long to absorb digested food; it produces many eggs.' },
    ]),
    ...sub('ecology-oxfordaqa-igcse-biology', 'decay-and-the-carbon-cycle-oxfordaqa-igcse-biology', '3.3.3', [
      { n: 1, f: 'Conditions for fast decay, and the role of detritus feeders', b: 'Warm (enzymes faster, but too hot stops decay), moist and with oxygen. Detritus feeders such as earthworms and woodlice break dead material into small pieces, giving microorganisms a larger surface area.' },
      { n: 2, f: 'Processes in the carbon cycle', b: 'Photosynthesis removes CO₂ from the air into carbohydrates, fats and proteins; feeding passes carbon along food chains; respiration by plants, algae, animals and microorganisms, decay, and combustion of wood and fossil fuels return CO₂.' },
      { n: 3, f: 'Leaf litter falls from 25.0 g to 10.0 g in 20 days. Mass lost, percentage lost and rate?', b: 'Mass lost = 15.0 g. Percentage lost = 15.0 ÷ 25.0 × 100 = 60.0%. Rate = 15.0 ÷ 20 = 0.75 g per day. Faster loss means faster decay by microorganisms.', src: 'oxfordaqa-igcse-biology-9201-decay-and-the-carbon-cycle-revision-notes' },
      { n: 4, f: '500 units of carbon removed from the air in a year and 480 returned. Net change and effect on carbon dioxide?', b: 'Net change = 480 − 500 = −20 units. More carbon is removed than returned (mainly by photosynthesis), so atmospheric carbon dioxide falls. A stable community has removal and return balanced.', src: 'oxfordaqa-igcse-biology-9201-decay-and-the-carbon-cycle-revision-notes' },
      { n: 5, f: 'Carbon is recycled, but is energy? What happens to the energy in the carbon cycle?', b: 'Carbon cycles, but energy does not. By the time microorganisms and detritus feeders have broken down waste and dead bodies, all the energy originally absorbed by green plants and algae has been transferred.', src: 'oxfordaqa-igcse-biology-9201-decay-and-the-carbon-cycle-revision-notes' },
    ]),
    ...sub('ecology-oxfordaqa-igcse-biology', 'humans-and-their-effects-on-the-environment-oxfordaqa-igcse-biology', '3.3.4', [
      { n: 1, f: 'Eutrophication in four stages', b: 'Mineral ions rise, so algae and plants grow more; dense growth shades others, which die; microorganisms feeding on the dead organisms increase; their respiration depletes the oxygen, so aerobic organisms die.', src: DECAY },
      { n: 2, f: 'Effects of deforestation and of global warming', b: 'Deforestation: less biodiversity; less CO₂ removed by photosynthesis; burning and decay release CO₂.\nGlobal warming (rising CO₂ and methane): climate change, rising sea level, changed migration patterns and species distribution.' },
      { n: 3, f: 'Pollutants and their consequences: sulfur dioxide, pesticides and herbicides, sewage', b: 'Sulfur dioxide dissolves in rainwater and contributes to acid rain. Pesticides and herbicides are toxic and can be washed from land into water. Sewage and fertiliser supply mineral ions and cause eutrophication.', src: DECAY },
      { n: 4, f: 'Lake oxygen falls from 10.4 to 1.2 mg per dm³ in eutrophication. Percentage fall, and why do fish die?', b: 'Fall = 9.2 mg per dm³; 9.2 ÷ 10.4 × 100 = 88.5%. Microorganisms feeding on dead algae respire and use up the oxygen, so fish and other aerobic organisms cannot respire and die.', src: DECAY },
      { n: 5, f: 'Forest mean 30.5 species per plot, cleared land 9.5. Percentage reduction, and why does deforestation matter?', b: '(30.5 − 9.5) ÷ 30.5 × 100 = 68.9%. Deforestation reduces biodiversity and the CO₂ removed by photosynthesis, and burning or decay of the remains releases CO₂.', src: DECAY },
    ]),

    // 4 Organisms' interaction with the environment
    ...sub('organisms-interaction-with-the-environment-oxfordaqa-igcse-biology', 'the-human-nervous-system-oxfordaqa-igcse-biology', '3.4.1', [
      { n: 1, f: 'The reflex arc, in order', b: 'Stimulus detected by a receptor → impulses along a sensory neurone to the CNS → chemical released at a synapse → relay neurone → synapse → motor neurone → effector: a muscle contracts or a gland secretes.', src: NERV },
      { n: 2, f: 'Sensory, relay and motor neurones: direction and position', b: 'Sensory: receptor to CNS, mostly outside the CNS. Relay: between sensory and motor neurones, inside the CNS. Motor: CNS to effector, mostly outside the CNS.', src: 'oxfordaqa-igcse-biology-nervous-system-reflexes-and-animal-behaviour-revision-notes' },
      { n: 3, f: 'What are the two types of effector, and how do they respond? Example: bright light shone in the eye', b: 'A muscle contracts and a gland secretes. In bright light, light receptors in the eye send impulses to the CNS, and muscle in the iris contracts so the pupil narrows.', src: 'oxfordaqa-igcse-biology-nervous-system-reflexes-and-animal-behaviour-revision-notes' },
      { n: 4, f: 'A reflex pathway is 0.9 m long and impulses travel at 60 m/s. Response time?', b: 'Time = distance ÷ speed = 0.9 ÷ 60 = 0.015 s, which is 15 ms. Fewer neurones and synapses means a quicker response.', src: 'oxfordaqa-igcse-biology-nervous-system-reflexes-and-animal-behaviour-revision-notes' },
      { n: 5, f: 'Reflex vs voluntary action; impulse vs chemical in the nervous system', b: 'A reflex is automatic, rapid and often protective; a voluntary action is conscious and slower. An impulse is electrical and travels along a neurone; a chemical crosses the synapse between neurones.', src: 'oxfordaqa-igcse-biology-nervous-system-reflexes-and-animal-behaviour-revision-notes' },
    ]),
    ...sub('organisms-interaction-with-the-environment-oxfordaqa-igcse-biology', 'homeostasis-oxfordaqa-igcse-biology', '3.4.2', [
      { n: 1, f: 'Homeostasis', b: 'Automatic control systems in the body that keep conditions inside the body relatively constant. \'Relatively\' means varying only slightly around a normal value.', src: 'oxfordaqa-igcse-biology-9201-homeostasis-revision-notes' },
      { n: 2, f: 'Three parts of a control system and the order of the chain', b: 'Receptors, coordination centres and effectors. Stimulus → receptor → coordination centre → effector → response.', src: 'oxfordaqa-igcse-biology-9201-homeostasis-revision-notes' },
      { n: 3, f: 'Job of a receptor, a coordination centre and an effector', b: 'Receptor: detects stimuli (changes in the environment). Coordination centre: receives and processes information from receptors. Effector: brings about a response.', src: 'oxfordaqa-igcse-biology-9201-homeostasis-revision-notes' },
      { n: 4, f: 'Coordination centres and effectors in the body', b: 'Coordination centres: the brain, the spinal cord and the pancreas. Effectors: muscles and glands.', src: 'oxfordaqa-igcse-biology-9201-homeostasis-revision-notes' },
      { n: 5, f: 'What do receptors in the skin, brain and pancreas detect?', b: 'Skin: touch, pressure, pain and temperature changes. Brain: blood temperature and the concentration of water in the blood. Pancreas: the concentration of glucose in the blood.', src: 'oxfordaqa-igcse-biology-9201-homeostasis-revision-notes' },
      { n: 6, f: 'The four conditions controlled by homeostasis', b: 'Temperature, water content of the body, ion content of the body and blood glucose levels.', src: 'oxfordaqa-igcse-biology-9201-homeostasis-revision-notes' },
      { n: 7, f: 'Name the stimulus, receptor, coordination centre, effector and response when a hot pan is touched', b: 'Stimulus: heat and pain. Receptors: skin. Coordination centre: spinal cord (and brain). Effector: a muscle. Response: the arm moves away.', src: 'oxfordaqa-igcse-biology-9201-homeostasis-revision-notes' },
      { n: 8, f: 'Why is it important to keep body temperature relatively constant?', b: 'Enzymes, and so chemical reactions in cells, work best in a narrow range of conditions.', src: 'oxfordaqa-igcse-biology-9201-homeostasis-revision-notes' },
      { n: 9, f: 'Core temperature rises from 37.0 °C to 38.0 °C in 20 minutes. What is the rate?', b: 'Rate = change ÷ time = 1.0 ÷ 20 = 0.05 °C per minute.', src: 'oxfordaqa-igcse-biology-9201-homeostasis-revision-notes' },
    ]),
    ...sub('organisms-interaction-with-the-environment-oxfordaqa-igcse-biology', 'control-of-water-and-ion-content-of-the-body-oxfordaqa-igcse-biology', '3.4.3', [
      { n: 1, f: 'Jobs of the liver in removing waste and poisons', b: 'Excess amino acids are deaminated to form ammonia, which is converted into urea; poisons are detoxified; old red blood cells are broken down and the iron is stored.', src: WAT },
      { n: 2, f: 'How does a healthy kidney make urine?', b: 'Blood is filtered (water, glucose, ions, urea; not cells or large proteins); all the glucose, the needed ions and as much water as needed are reabsorbed; urea, excess ions and excess water are released as urine.' },
      { n: 3, f: 'ADH and negative feedback when blood water content is too low', b: 'The pituitary gland releases more ADH; the kidneys reabsorb more water; a small volume of concentrated urine is made; blood water content rises, so less ADH is released.' },
    ]),
    ...sub('organisms-interaction-with-the-environment-oxfordaqa-igcse-biology', 'temperature-control-oxfordaqa-igcse-biology', '3.4.4', [
      { n: 1, f: 'What information reaches the thermoregulatory centre?', b: 'Impulses from receptors in the centre itself, sensitive to the temperature of blood flowing through the brain (core temperature), and from temperature receptors in the skin.' },
      { n: 2, f: 'Responses when core temperature is too high and too low', b: 'Too high: skin blood vessels dilate, so more energy is transferred from the skin; more sweat, which cools as it evaporates.\nToo low: skin blood vessels constrict, less energy transferred; muscles may shiver.' },
      { n: 3, f: 'A player sweats 0.9 dm³ an hour for 2 hours and drinks 0.4 dm³ three times. Fluid shortfall?', b: 'Lost = 0.9 × 2 = 1.8 dm³. Drunk = 0.4 × 3 = 1.2 dm³. Shortfall = 0.6 dm³. More water is lost in sweat when hot, so more fluid must be taken in.', src: 'oxfordaqa-igcse-biology-9201-temperature-control-revision-notes' },
      { n: 4, f: 'Skin temperature of a hand falls from 32.0 °C to 24.0 °C in 10 minutes. Rate of fall, and what does steady core temperature show?', b: 'Fall = 8.0 °C; rate = 8.0 ÷ 10 = 0.8 °C per minute. Core temperature stays almost steady while skin temperature changes a lot, which shows the control system at work.', src: 'oxfordaqa-igcse-biology-9201-temperature-control-revision-notes' },
      { n: 5, f: 'Why does a cold person shiver?', b: 'Shivering is muscles contracting. Muscle contraction needs respiration, which transfers some energy to warm the body.', src: 'oxfordaqa-igcse-biology-9201-temperature-control-revision-notes' },
    ]),
    ...sub('organisms-interaction-with-the-environment-oxfordaqa-igcse-biology', 'control-of-blood-glucose-oxfordaqa-igcse-biology', '3.4.5', [
      { n: 1, f: 'Insulin vs glucagon', b: 'Both from the pancreas. Insulin (glucose too high): glucose moves from the blood into cells and is stored as glycogen in the liver and muscles, or as lipid when full. Glucagon (glucose too low): glycogen changes back into glucose, which enters the blood.', src: HOM },
      { n: 2, f: 'Type 1 vs Type 2 diabetes', b: 'Type 1: the pancreas does not produce enough insulin; diet, exercise and insulin injections.\nType 2: the body does not respond to its own insulin; obesity is a significant factor; diet, exercise and drugs.' },
      { n: 3, f: 'Role of the pancreas in controlling blood glucose', b: 'The pancreas monitors blood glucose concentration and releases both hormones: insulin when glucose is too high and glucagon when it is too low. It acts as both receptor and coordination centre.', src: 'oxfordaqa-igcse-biology-homeostasis-temperature-control-and-blood-glucose-revision-notes' },
      { n: 4, f: 'Blood glucose falls from 9.6 to 6.0 mmol/dm³. Percentage fall?', b: 'Change = 3.6. Percentage = 3.6 ÷ 9.6 × 100 = 37.5% fall. Always divide by the starting value.', src: 'oxfordaqa-igcse-biology-homeostasis-temperature-control-and-blood-glucose-revision-notes' },
      { n: 5, f: 'Reading a graph: how can you tell whether a hormone is insulin or glucagon?', b: 'If the hormone rises as glucose rises, it is probably insulin. If it rises as glucose falls, it is probably glucagon. A peak slightly after the glucose change fits a hormone released in response to it.', src: 'oxfordaqa-igcse-biology-homeostasis-temperature-control-and-blood-glucose-revision-notes' },
    ]),
    ...sub('organisms-interaction-with-the-environment-oxfordaqa-igcse-biology', 'behaviour-oxfordaqa-igcse-biology', '3.4.6', [
      { n: 1, f: 'Innate behaviour, imprinting, habituation, classical and operant conditioning', b: 'Innate: inborn. Imprinting: early attachment to the first moving object seen. Habituation: learning to ignore a repeated harmless stimulus. Classical: linking a neutral stimulus with a natural one. Operant: trial and error with reward or punishment.', src: NERV },
      { n: 2, f: 'Mating strategies, with an example of each', b: 'Mate for life (albatrosses), several mates over a lifetime, mate for a breeding season (emperor penguins) and several mates in one season (male red deer, giving more offspring carrying his genes).', src: 'oxfordaqa-igcse-biology-nervous-system-reflexes-and-animal-behaviour-revision-notes' },
      { n: 3, f: 'Parental care: benefits and risks', b: 'Benefits: more offspring survive, so more parental genes are passed on. Risks to parents: energy used, no time to feed, injury from predators, easier for predators to find them, less energy for later broods.', src: 'oxfordaqa-igcse-biology-nervous-system-reflexes-and-animal-behaviour-revision-notes' },
      { n: 4, f: '26 of 40 guarded eggs survive and 2 of 40 unguarded eggs. Survival percentages, and what does this show?', b: 'Guarded: 26 ÷ 40 × 100 = 65%. Unguarded: 2 ÷ 40 × 100 = 5.0%. Parental guarding greatly raises survival, so more of the parents\' genes are passed on.', src: 'oxfordaqa-igcse-biology-nervous-system-reflexes-and-animal-behaviour-revision-notes' },
      { n: 5, f: 'How are sniffer dogs and police horses trained?', b: 'Sniffer dogs: operant conditioning, with a reward when the target scent is found. Police horses: habituation, with repeated safe exposure to crowds, flags and noise and rewards for calm, so they stop reacting.', src: 'oxfordaqa-igcse-biology-nervous-system-reflexes-and-animal-behaviour-revision-notes' },
    ]),
    ...sub('organisms-interaction-with-the-environment-oxfordaqa-igcse-biology', 'infection-and-response-oxfordaqa-igcse-biology', '3.4.7', [
      { n: 1, f: 'Three ways white blood cells defend the body', b: 'Phagocytosis (ingesting pathogens); producing antibodies that destroy particular bacteria or viruses; producing antitoxins that counteract toxins.', src: INF },
      { n: 2, f: 'How does vaccination give immunity, and what is herd immunity?', b: 'Dead or inactive pathogen is injected; white blood cells make specific antibodies; if the real pathogen arrives, the correct antibody is made rapidly. If a large proportion of people are immune, spread is very much reduced.' },
      { n: 3, f: 'How does an antibiotic-resistant strain such as MRSA spread?', b: 'A mutation produces a resistant strain; the antibiotic kills non-resistant bacteria; resistant ones survive and reproduce; the strain spreads rapidly because people are not immune and there is no effective treatment. Overuse speeds this up.' },
    ]),

    // 5 Inheritance
    ...sub('inheritance-oxfordaqa-igcse-biology', 'reproduction-oxfordaqa-igcse-biology', '3.5.1', [
      { n: 1, f: 'Sexual vs asexual reproduction', b: 'Sexual: fusion of male and female gametes; genetic information from two parents is mixed, giving variety.\nAsexual: one parent, no fusion of gametes, no mixing, so the offspring are genetically identical clones.', src: RCD },
      { n: 2, f: 'What is a clone?', b: 'A genetically identical individual made by asexual reproduction. There is one parent, no fusion of gametes and no mixing of genetic information, so there is no genetic variation.', src: 'oxfordaqa-igcse-biology-reproduction-cell-division-stem-cells-and-tumours-revision-notes' },
      { n: 3, f: 'In sexual reproduction, how many of an offspring\'s genes come from each parent, and why do offspring vary?', b: 'Half from each parent. Gametes fuse, so genetic information from two parents is mixed, and the offspring are genetically different from each other.', src: 'oxfordaqa-igcse-biology-reproduction-cell-division-stem-cells-and-tumours-revision-notes' },
      { n: 4, f: 'A cutting grows smaller than its parent when given less light. Is the difference genetic?', b: 'No. Clones have identical genes, so the difference is environmental, caused by the lower light. Clones can still look different if they grow in different conditions.' },
      { n: 5, f: 'Gametes are n and the zygote is 2n: what does this mean, with an example?', b: 'Each gamete has a single set of chromosomes (n). When two gametes fuse the zygote has the full number (2n). A cat gamete with 19 chromosomes fuses with another to give 19 + 19 = 38.' },
    ]),
    ...sub('inheritance-oxfordaqa-igcse-biology', 'cell-division-oxfordaqa-igcse-biology', '3.5.2', [
      { n: 1, f: 'Mitosis vs meiosis', b: 'Mitosis: a body cell divides once into two genetically identical cells with the full set in pairs; for growth and replacement.\nMeiosis: a cell in a reproductive organ divides twice into four gametes with a single set (human 46 → 23).' },
      { n: 2, f: 'Stem cells and therapeutic cloning', b: 'Stem cells from human embryos or adult bone marrow can be made to differentiate into many types of human cell, possibly to treat conditions such as paralysis. In therapeutic cloning the embryo carries the patient\'s genes, so the cells are not rejected.', src: RCD },
      { n: 3, f: 'Benign vs malignant tumours, and carcinogens', b: 'Both are abnormal, uncontrolled cell growth. Benign: does not invade healthy tissue. Malignant: invades tissue, cells may enter the blood and form secondary tumours. Carcinogens: tobacco smoke chemicals, asbestos, ionising radiation.' },
    ]),
    ...sub('inheritance-oxfordaqa-igcse-biology', 'genetic-variation-oxfordaqa-igcse-biology', '3.5.3', [
      { n: 1, f: 'Sex determination, and the chance that four children are all boys', b: 'Females XX, males XY; eggs all carry X, sperm half X and half Y, so P(boy) = 1/2 every time. Four boys: (1/2)⁴ = 1/16.' },
      { n: 2, f: 'Dominant, recessive and carrier', b: 'Dominant: shows in the phenotype when present on one chromosome only. Recessive: shows only when no dominant allele is present. Carrier: a heterozygous person with a recessive disorder allele who does not show the disorder.', src: GV },
      { n: 3, f: 'Two heterozygous tall pea plants (Rr) give 80 seedlings. Expected numbers?', b: 'Rr × Rr gives 3 tall : 1 short. Tall: 80 × 3/4 = 60. Short: 80 × 1/4 = 20. Counts such as 57 and 23 still fit, because fertilisation is random.' },
      { n: 4, f: 'How did Mendel work, and what did he find?', b: 'He used garden peas with clear either-or characteristics, began with pure-breeding lines, studied one characteristic at a time, controlled the crosses and counted large numbers. The second generation was about 3 : 1 (5474 round to 1850 wrinkled seeds).' },
      { n: 5, f: 'How many bases code for a protein of 210 amino acids?', b: 'Three bases code for one amino acid, so at least 210 × 3 = 630 bases. The base sequence decides the order of amino acids.' },
    ]),
    ...sub('inheritance-oxfordaqa-igcse-biology', 'genetic-disorders-oxfordaqa-igcse-biology', '3.5.4', [
      { n: 1, f: 'Polydactyly, cystic fibrosis, sickle cell anaemia and Down\'s syndrome', b: 'Polydactyly (extra fingers or toes): dominant allele. Cystic fibrosis (thick sticky mucus) and sickle cell anaemia: recessive alleles. Down\'s syndrome: an extra chromosome (47 in body cells), not an allele.' },
      { n: 2, f: 'What is a carrier of a genetic disorder?', b: 'A person with one copy of a recessive allele who is not affected but can pass the allele on. Cystic fibrosis carriers are Cc; sickle cell carriers are Hh.', src: 'oxfordaqa-igcse-biology-9201-genetic-disorders-revision-notes' },
      { n: 3, f: 'Two unaffected parents have an affected child; two affected parents have an unaffected child. What do these show?', b: 'Unaffected parents with an affected child: the allele is recessive and both parents are carriers. Affected parents with an unaffected child: the allele is dominant and both parents are heterozygous.', src: 'oxfordaqa-igcse-biology-9201-genetic-disorders-revision-notes' },
      { n: 4, f: 'Two cystic fibrosis carriers (Cc × Cc): probability of an affected child, and of two unaffected children?', b: 'Offspring are CC, Cc, Cc, cc, so the probability of an affected child is 1/4 for each child. Two unaffected children: 3/4 × 3/4 = 9/16 (0.56).', src: 'oxfordaqa-igcse-biology-9201-genetic-disorders-revision-notes' },
      { n: 5, f: 'Cystic fibrosis affects about 1 in 2 500 babies. Expected cases in 48 000 births?', b: '48 000 ÷ 2 500 = 19.2, so about 19 affected babies are expected.', src: 'oxfordaqa-igcse-biology-9201-genetic-disorders-revision-notes' },
    ]),
    ...sub('inheritance-oxfordaqa-igcse-biology', 'genetic-manipulation-oxfordaqa-igcse-biology', '3.5.5', [
      { n: 1, f: 'Adult cell cloning in steps', b: 'Remove the nucleus from an unfertilised egg cell; insert the nucleus from an adult body cell; an electric shock makes the egg cell divide into embryo cells; place the ball of cells in the womb of an adult female. The offspring matches the body-cell donor.', src: GM },
      { n: 2, f: 'Genetic engineering in steps, and concerns about GM crops', b: 'Enzymes isolate the gene; it is put into a vector (a bacterial plasmid or a virus); the vector inserts it into the cells, early in development. Concerns: effects on wild flowers and insects; uncertain effects of eating GM crops on health.' },
      { n: 3, f: 'Cuttings vs tissue culture', b: 'Cuttings need no equipment and give few plants. Tissue culture uses small groups of plant cells on a sterile nutrient medium and gives very many identical plants quickly, but needs sterile conditions and trained staff.', src: 'oxfordaqa-igcse-biology-genetic-manipulation-cloning-genetic-engineering-and-revision-notes' },
      { n: 4, f: 'Why can a population of identical clones be at risk?', b: 'Clones have the same genes and so the same weaknesses. A disease that kills one may kill all of them, whereas sexually reproducing populations have variation and some individuals are likely to survive.', src: 'oxfordaqa-igcse-biology-genetic-manipulation-cloning-genetic-engineering-and-revision-notes' },
      { n: 5, f: '36 embryos are transplanted and 24 calves are born. Success rate? And a bacterium dividing every 30 minutes for 6 hours?', b: '24 ÷ 36 × 100 = 66.7%. Six hours is 12 divisions, so 2¹² = 4096 cells.', src: 'oxfordaqa-igcse-biology-genetic-manipulation-cloning-genetic-engineering-and-revision-notes' },
    ]),

    // 6 Variation and evolution
    ...sub('variation-and-evolution-oxfordaqa-igcse-biology', 'continuous-and-discontinuous-variation-oxfordaqa-igcse-biology', '3.6.1', [
      { n: 1, f: 'Genetic, environmental and combined causes of variation: examples', b: 'Genetic: blood group, eye colour. Environmental (acquired): a scar, a suntan, plant height with and without mineral ions. Both: human height and body mass.' },
      { n: 2, f: 'Cuttings from one plant grow to 19.0 cm with nitrate and 12.0 cm without. What causes the difference?', b: 'The environment. The cuttings are clones with identical genes, so the 7.0 cm difference is environmental.' },
      { n: 3, f: 'Mutation', b: 'A random change in a gene that makes a new allele. It is the original source of new alleles.', src: VNS },
      { n: 4, f: 'Continuous vs discontinuous variation', b: 'Continuous: a full range of values (height, leaf length). Discontinuous: separate groups (blood group).' },
    ]),
    ...sub('variation-and-evolution-oxfordaqa-igcse-biology', 'natural-selection-oxfordaqa-igcse-biology', '3.6.2', [
      { n: 1, f: 'Natural selection vs Lamarck\'s theory', b: 'Natural selection: variation already exists in genes; the best-suited survive and breed, passing on their alleles.\nLamarck: changes acquired during a lifetime are inherited. In the vast majority of cases this cannot occur.' },
      { n: 2, f: 'The three statements of natural selection', b: 'Individuals in a species show a wide range of variation because of differences in their genes. Those most suited to the environment are more likely to survive to breed successfully. The genes that enabled them to survive are passed on to the next generation.' },
      { n: 3, f: 'Selection pressures: examples', b: 'Factors that affect survival: predators, food supply, disease and climate change.' },
      { n: 4, f: 'The four stages in forming a new species', b: 'Isolation (populations separated, e.g. geographically); genetic variation within each; natural selection of different alleles in each; speciation, when they can no longer interbreed to produce fertile offspring.', src: VNS },
      { n: 5, f: 'Horses and donkeys can mate. Why are they different species?', b: 'Their offspring, the mule, is usually sterile. The test for one species is producing fertile offspring.' },
      { n: 6, f: 'Why is evolution counted in generations, not years?', b: 'Evolution usually takes many generations. A bacterium dividing every 30 minutes passes 40 generations in 20 hours; a species with a 25-year generation time needs 1000 years. Species that cannot respond to environmental change risk extinction.' },
    ]),
  ],
};
