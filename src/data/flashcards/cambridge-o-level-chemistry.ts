/**
 * D-438 -- flashcards for Cambridge O Level Chemistry 5070 (2026-2028).
 *
 * 5070 is NOT tiered: every outcome is required of every candidate, so no card
 * carries a tier. Its subject content matches IGCSE 0620 (Core and Supplement
 * together), so many cards follow the 0620 deck, but they use 5070's own topic
 * and subtopic slugs (2.4 is 'ion-and-ionic-bonds') and were checked against
 * the 5070-tagged Marlbridge notes.
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 5070); origin 'revision-notes'.
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

const SOM = 'states-of-matter-revision-notes';
const BOND = 'ionic-covalent-metallic-bonding-revision-notes';
const ACID = 'acids-bases-and-salts-revision-notes';
const RATE = 'rates-of-reaction-revision-notes';
const REDOX = 'redox-reactions-revision-notes';
const ORG = 'organic-chemistry-revision-notes';
const ALC = 'alcohols-and-carboxylic-acids-revision-notes';
const POLY = 'polymers-revision-notes';
const PRAC = 'practical-techniques-revision-notes';

export const DECK_CAMBRIDGE_O_LEVEL_CHEMISTRY: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'o-level',
  subjectSlug: 'chemistry',
  syllabusCode: '5070',
  syllabusSeries: '2026-2028',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'farhat-ul-ain-sehgal', reviewedOn: '2026-11-05' },
  cards: [
    // 1 States of matter
    ...sub('states-of-matter', 'solids-liquids-and-gases', '1.1', [
      { n: 1, f: 'Particles in a solid: arrangement and movement', b: 'Close together in a regular arrangement. They vibrate about fixed positions.' },
      { n: 2, f: 'Particles in a liquid: arrangement and movement', b: 'Close together in an irregular arrangement. They move around, sliding past each other.' },
      { n: 3, f: 'Particles in a gas: arrangement and movement', b: 'Far apart in a random arrangement. They move quickly in all directions.' },
      { n: 4, f: 'Melting point', b: 'The temperature at which a solid becomes a liquid.', src: SOM },
      { n: 5, f: 'Boiling point', b: 'The temperature at which a liquid becomes a gas throughout, forming bubbles.', src: SOM },
      { n: 6, f: 'Evaporation', b: 'Liquid to gas at the surface only, at any temperature below the boiling point.', src: SOM },
      { n: 7, f: 'Name the change of state:\ngas → liquid, and liquid → solid', b: 'Gas → liquid: condensation.\nLiquid → solid: freezing (solidification).' },
      { n: 8, f: 'A gas at constant pressure is heated. What happens to its volume?\nA gas at constant temperature is compressed (pressure increased). What happens to its volume?', b: 'Heating: the volume increases.\nIncreasing the pressure: the volume decreases.' },
      { n: 9, f: 'Why is a heating curve flat while a substance melts or boils?', b: 'The energy supplied goes into overcoming the forces of attraction between particles, not into raising their kinetic energy, so the temperature stays constant.' },
      { n: 10, f: 'Explain why a gas expands when heated at constant pressure', b: 'The particles gain kinetic energy and move faster, so they hit the container walls harder and more often. The gas expands until the pressure is back to its original value.' },
    ]),
    ...sub('states-of-matter', 'diffusion', '1.2', [
      { n: 1, f: 'Diffusion', b: 'The net movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient, as a result of their random motion.', src: SOM },
      { n: 2, f: 'Effect of temperature on the rate of diffusion', b: 'Higher temperature → faster diffusion, because the particles move faster.' },
      { n: 3, f: 'Effect of relative molecular mass (Mr) on the rate of diffusion of a gas', b: 'Lower Mr → faster diffusion. Lighter particles move faster at the same temperature.' },
      { n: 4, f: 'Ammonia and hydrogen chloride diffuse from opposite ends of a tube. Where does the white ring form, and why?', b: 'Nearer the hydrogen chloride end. NH₃ (Mr 17) is lighter than HCl (Mr 36.5), so it diffuses faster and travels further. The white solid is ammonium chloride.' },
    ]),

    // 2 Atoms, elements and compounds
    ...sub('atoms-elements-and-compounds', 'elements-compounds-and-mixtures', '2.1', [
      { n: 1, f: 'Element', b: 'A substance made of only one type of atom.' },
      { n: 2, f: 'Compound', b: 'A substance made of two or more elements chemically combined.' },
      { n: 3, f: 'Mixture', b: 'Two or more substances that are not chemically combined.' },
      { n: 4, f: 'How can you tell a mixture from a compound?', b: 'A mixture can be separated by physical methods (such as filtration or distillation), and each part keeps its own properties. A compound has different properties from its elements and can only be split by a chemical reaction.' },
    ]),
    ...sub('atoms-elements-and-compounds', 'atomic-structure-and-the-periodic-table', '2.2', [
      { n: 1, f: 'Relative charge and relative mass of a proton, a neutron and an electron', b: 'Proton: charge +1, mass 1.\nNeutron: charge 0, mass 1.\nElectron: charge −1, mass 1/1836 (negligible).' },
      { n: 2, f: 'Proton number (atomic number)', b: 'The number of protons in the nucleus of an atom.' },
      { n: 3, f: 'Mass number (nucleon number)', b: 'The total number of protons and neutrons in the nucleus of an atom.' },
      { n: 4, f: 'Electronic configuration of sodium (proton number 11)', b: '2,8,1' },
      { n: 5, f: 'Electronic configuration of chlorine (proton number 17)', b: '2,8,7' },
      { n: 6, f: 'What do the group number and the period number tell you about an atom’s electrons?', b: 'Group number (I–VII) = number of outer-shell electrons.\nPeriod number = number of occupied electron shells.' },
    ]),
    ...sub('atoms-elements-and-compounds', 'isotopes', '2.3', [
      { n: 1, f: 'Isotopes', b: 'Atoms of the same element with the same number of protons but different numbers of neutrons.' },
      { n: 2, f: 'How many neutrons are in chlorine-35 and chlorine-37? (proton number 17)', b: 'Chlorine-35: 18 neutrons.\nChlorine-37: 20 neutrons.' },
      { n: 3, f: 'Why do isotopes of an element have the same chemical properties?', b: 'They have the same number of electrons, and so the same number of outer-shell electrons (the same electronic configuration).' },
      { n: 4, f: 'Chlorine is 75% chlorine-35 and 25% chlorine-37. Calculate its relative atomic mass.', b: '(75 × 35 + 25 × 37) ÷ 100 = 35.5' },
    ]),
    ...sub('atoms-elements-and-compounds', 'ion-and-ionic-bonds', '2.4', [
      { n: 1, f: 'Ion', b: 'An atom or group of atoms that has gained or lost electrons, so it carries a charge.' },
      { n: 2, f: 'Cation and anion', b: 'Cation: a positive ion (electrons lost).\nAnion: a negative ion (electrons gained).' },
      { n: 3, f: 'How an ionic bond forms', b: 'The metal loses electrons (forming a cation) and the non-metal gains them (forming an anion). Both reach a full outer shell.', src: BOND },
      { n: 4, f: 'Ionic bond', b: 'A strong electrostatic attraction between oppositely charged ions.' },
      { n: 5, f: 'How do sodium and chlorine atoms form sodium chloride?', b: 'Each sodium atom loses one electron to form Na⁺. Each chlorine atom gains one electron to form Cl⁻. The oppositely charged ions attract.' },
      { n: 6, f: 'Electrical conductivity of an ionic compound', b: 'Poor when solid. Good when molten or dissolved in water.' },
      { n: 7, f: 'Structure of an ionic compound such as sodium chloride', b: 'A giant lattice: a regular arrangement of alternating positive and negative ions.' },
      { n: 8, f: 'Explain why ionic compounds have high melting points', b: 'The strong electrostatic attractions between oppositely charged ions act throughout the giant lattice, so a lot of energy is needed to overcome them.' },
      { n: 9, f: 'Explain why an ionic compound conducts when molten but not when solid', b: 'In the solid the ions are held in fixed positions in the lattice. When molten (or in solution) the ions are free to move and carry charge.' },
    ]),
    ...sub('atoms-elements-and-compounds', 'simple-molecules-and-covalent-bonds', '2.5', [
      { n: 1, f: 'How a covalent bond forms', b: 'Two non-metal atoms share a pair of electrons, so each reaches a full outer shell.', src: BOND },
      { n: 2, f: 'How many covalent bonds are there in a molecule of methane, CH₄, and of water, H₂O?', b: 'Methane: four single C–H bonds.\nWater: two single O–H bonds.' },
      { n: 3, f: 'Properties of simple molecular substances', b: 'Low melting and boiling points. Poor electrical conductivity.' },
      { n: 4, f: 'Explain why simple molecular substances have low melting and boiling points', b: 'Only the weak intermolecular forces between molecules have to be overcome, which needs little energy. The covalent bonds inside the molecules are not broken.' },
      { n: 5, f: 'Explain why simple molecular substances do not conduct electricity', b: 'They have no ions or free electrons, so there are no mobile charged particles.' },
      { n: 6, f: 'Bonding in carbon dioxide and in nitrogen', b: 'CO₂: two C=O double bonds (O=C=O).\nN₂: one N≡N triple bond.' },
    ]),
    ...sub('atoms-elements-and-compounds', 'giant-covalent-structures', '2.6', [
      { n: 1, f: 'Structure of diamond', b: 'A giant covalent lattice in which each carbon atom is bonded to four others in a tetrahedral arrangement.' },
      { n: 2, f: 'Structure of graphite', b: 'Layers of hexagonal rings. Each carbon atom is bonded to three others, with weak forces between the layers and one delocalised electron per atom.' },
      { n: 3, f: 'Why is diamond used in cutting tools?', b: 'It is very hard, because every atom is held by strong covalent bonds in a rigid three-dimensional lattice.' },
      { n: 4, f: 'Why is graphite used as a lubricant and as an electrode?', b: 'Lubricant: the layers slide over each other easily.\nElectrode: its delocalised electrons move through the structure, so it conducts electricity.' },
      { n: 5, f: 'Structure of silicon(IV) oxide, SiO₂', b: 'A giant covalent structure similar to diamond: each silicon atom is bonded to four oxygen atoms and each oxygen atom to two silicon atoms.' },
    ]),
    ...sub('atoms-elements-and-compounds', 'metallic-bonding', '2.7', [
      { n: 1, f: 'Metallic bonding', b: 'An electrostatic attraction between a lattice of positive metal ions and a “sea” of delocalised electrons.' },
      { n: 2, f: 'How metallic bonding forms', b: 'Metal atoms lose their outer electrons into a delocalised sea, leaving positive ions.', src: BOND },
      { n: 3, f: 'Explain why metals conduct electricity', b: 'The delocalised electrons can move through the structure and carry charge.' },
      { n: 4, f: 'Explain why metals are malleable and ductile', b: 'The layers of positive ions can slide over each other without the metallic bonding being broken.' },
    ]),

    // 3 Stoichiometry
    ...sub('stoichiometry', 'formulae', '3.1', [
      { n: 1, f: 'Molecular formula', b: 'The number and type of each atom in one molecule.' },
      { n: 2, f: 'State symbols', b: '(s) solid, (l) liquid, (g) gas, (aq) aqueous — dissolved in water.' },
      { n: 3, f: 'Formulae of the sulfate, nitrate, carbonate, hydroxide and ammonium ions', b: 'SO₄²⁻, NO₃⁻, CO₃²⁻, OH⁻, NH₄⁺' },
      { n: 4, f: 'Empirical formula', b: 'The simplest whole-number ratio of the different atoms in a compound.' },
      { n: 5, f: 'Use the ion charges to write the formula of aluminium oxide (Al³⁺, O²⁻)', b: 'Al₂O₃. The lowest common multiple of 3 and 2 is 6, so 2 Al³⁺ balance 3 O²⁻.' },
      { n: 6, f: 'Formula of calcium nitrate (Ca²⁺, NO₃⁻)', b: 'Ca(NO₃)₂ — brackets because two nitrate ions are needed.' },
      { n: 7, f: 'Ionic equation for the neutralisation of an acid by an alkali', b: 'H⁺(aq) + OH⁻(aq) → H₂O(l)' },
    ]),
    ...sub('stoichiometry', 'relative-masses-of-atoms-and-molecules', '3.2', [
      { n: 1, f: 'Relative atomic mass, Ar', b: 'The average mass of the isotopes of an element compared with 1/12 of the mass of an atom of carbon-12.' },
      { n: 2, f: 'Relative molecular mass, Mr', b: 'The sum of the relative atomic masses of all the atoms in a molecule. (For an ionic compound: relative formula mass.)' },
      { n: 3, f: 'Mr of carbon dioxide, CO₂ (Ar: C = 12, O = 16)', b: '12 + 2 × 16 = 44' },
      { n: 4, f: 'Mr of calcium carbonate, CaCO₃ (Ar: Ca = 40, C = 12, O = 16)', b: '40 + 12 + 3 × 16 = 100' },
    ]),
    ...sub('stoichiometry', 'the-mole-and-the-avogadro-constant', '3.3', [
      { n: 1, f: 'Two units for the concentration of a solution', b: 'g/dm³ and mol/dm³' },
      { n: 2, f: 'The mole', b: 'The amount of substance that contains 6.02 × 10²³ particles (the Avogadro constant).' },
      { n: 3, f: 'Equation linking moles, mass and molar mass', b: 'moles = mass (g) ÷ molar mass (g/mol)' },
      { n: 4, f: 'Molar gas volume at room temperature and pressure (rtp)', b: '24 dm³ (24 000 cm³) per mole of any gas.' },
      { n: 5, f: 'Equation linking moles, concentration and volume', b: 'moles = concentration (mol/dm³) × volume (dm³). Convert cm³ to dm³ by dividing by 1000.' },
      { n: 6, f: 'Percentage yield', b: 'actual yield ÷ theoretical yield × 100. It can never be more than 100%.' },
      { n: 7, f: 'Mass of 0.25 mol of CaCO₃ (Mr = 100)', b: '0.25 × 100 = 25 g' },
    ]),

    // 4 Electrochemistry
    ...sub('electrochemistry', 'electrolysis', '4.1', [
      { n: 1, f: 'Electrolysis', b: 'The decomposition of an ionic compound, when molten or in aqueous solution, by the passage of an electric current.' },
      { n: 2, f: 'Anode and cathode', b: 'Anode: the positive electrode.\nCathode: the negative electrode.\n(PANIC — Positive is Anode, Negative Is Cathode.)' },
      { n: 3, f: 'Products of electrolysing molten lead(II) bromide with inert electrodes', b: 'Cathode: lead.\nAnode: bromine (red-brown vapour).' },
      { n: 4, f: 'Products of electrolysing concentrated aqueous sodium chloride with inert electrodes', b: 'Cathode: hydrogen.\nAnode: chlorine.' },
      { n: 5, f: 'Products of electrolysing dilute sulfuric acid with inert electrodes', b: 'Cathode: hydrogen. Anode: oxygen.\nVolume ratio hydrogen : oxygen = 2 : 1.' },
      { n: 6, f: 'Electroplating: the cathode, the anode and the electrolyte', b: 'Cathode: the object to be plated.\nAnode: the plating metal.\nElectrolyte: a solution containing ions of the plating metal.' },
      { n: 7, f: 'What happens at each electrode, in terms of electrons?', b: 'Cathode: reduction — ions gain electrons.\nAnode: oxidation — ions lose electrons.\n(AN OIL RIG CAT)' },
      { n: 8, f: 'Half-equations for electrolysing molten lead(II) bromide', b: 'Cathode: Pb²⁺ + 2e⁻ → Pb\nAnode: 2Br⁻ → Br₂ + 2e⁻' },
      { n: 9, f: 'Aqueous solution: which is discharged at the cathode, the metal or hydrogen?', b: 'The less reactive of the two. A metal below hydrogen in the reactivity series (Cu, Ag) is deposited; otherwise hydrogen is given off.' },
      { n: 10, f: 'Products of electrolysing dilute aqueous sodium chloride with inert electrodes', b: 'Cathode: hydrogen.\nAnode: oxygen (the halide is not concentrated enough to be discharged).' },
      { n: 11, f: 'Copper(II) sulfate solution electrolysed with copper electrodes', b: 'Copper is deposited at the cathode. The copper anode dissolves (Cu → Cu²⁺ + 2e⁻) instead of oxygen being released.' },
    ]),
    ...sub('electrochemistry', 'hydrogen-oxygen-fuel-cells', '4.2', [
      { n: 1, f: 'Hydrogen–oxygen fuel cell', b: 'Uses hydrogen and oxygen to produce electricity. The only product is water.' },
      { n: 2, f: 'Advantages of a hydrogen fuel cell over a petrol engine', b: 'Only water is produced, so no CO₂ at the point of use. More efficient than combustion.' },
      { n: 3, f: 'Disadvantages of a hydrogen fuel cell', b: 'Hydrogen is hard to store and transport, highly flammable and expensive, and producing it may itself release CO₂.' },
    ]),

    // 5 Chemical energetics
    ...sub('chemical-energetics', 'exothermic-and-endothermic-reactions', '5.1', [
      { n: 1, f: 'Exothermic reaction', b: 'Transfers thermal energy to the surroundings, so the temperature of the surroundings rises.' },
      { n: 2, f: 'Endothermic reaction', b: 'Takes in thermal energy from the surroundings, so the temperature of the surroundings falls.' },
      { n: 3, f: 'On a reaction pathway diagram, how can you tell a reaction is exothermic?', b: 'The products are at a lower energy level than the reactants.' },
      { n: 4, f: 'Sign of ΔH for exothermic and endothermic reactions', b: 'Exothermic: ΔH is negative.\nEndothermic: ΔH is positive.' },
      { n: 5, f: 'Activation energy, Eₐ', b: 'The minimum energy that colliding particles must have to react.' },
      { n: 6, f: 'Bond breaking and bond making: which is endothermic?', b: 'Bond breaking is endothermic; bond making is exothermic.\nΔH = energy to break bonds − energy released making bonds.' },
    ]),

    // 6 Chemical reactions
    ...sub('chemical-reactions', 'physical-and-chemical-changes', '6.1', [
      { n: 1, f: 'Physical change', b: 'No new substance is formed, and the change is usually easy to reverse (for example, melting ice).' },
      { n: 2, f: 'Chemical change', b: 'A new substance is formed, and the change is usually hard to reverse (for example, burning).' },
      { n: 3, f: 'Signs that a chemical change has happened', b: 'A new substance forms — often shown by a colour change, a gas given off (effervescence), a precipitate, or a temperature change.' },
    ]),
    ...sub('chemical-reactions', 'rate-of-reaction', '6.2', [
      { n: 1, f: 'Four ways to increase the rate of a reaction', b: 'Raise the temperature; increase the concentration (or the pressure of a gas); increase the surface area (use smaller pieces); add a catalyst.' },
      { n: 2, f: 'Catalyst', b: 'A substance that increases the rate of a reaction and is unchanged in mass and chemically at the end of the reaction.' },
      { n: 3, f: 'Two ways to follow the rate of a reaction that gives off a gas', b: 'Measure the volume of gas with a gas syringe at regular times, or measure the loss in mass on a balance.' },
      { n: 4, f: 'Collision theory: why does raising the temperature increase the rate?', b: 'Particles move faster, so collisions are more frequent, and a greater proportion of collisions have energy equal to or greater than the activation energy.', src: RATE },
      { n: 5, f: 'Collision theory: why does increasing concentration increase the rate?', b: 'There are more particles per unit volume, so collisions are more frequent.', src: RATE },
      { n: 6, f: 'Collision theory: why does increasing surface area increase the rate?', b: 'More particles are exposed, so collisions are more frequent.', src: RATE },
      { n: 7, f: 'How does a catalyst increase the rate?', b: 'It provides an alternative pathway with a lower activation energy.', src: RATE },
    ]),
    ...sub('chemical-reactions', 'reversible-reactions-and-equilibrium', '6.3', [
      { n: 1, f: 'What does the symbol ⇌ mean?', b: 'The reaction is reversible: it can go in both directions.' },
      { n: 2, f: 'Heating hydrated copper(II) sulfate, then adding water', b: 'Heating: blue hydrated crystals → white anhydrous powder.\nAdding water: white → blue again.' },
      { n: 3, f: 'Colours of hydrated and anhydrous cobalt(II) chloride', b: 'Hydrated: pink.\nAnhydrous: blue.' },
      { n: 4, f: 'Features of a dynamic equilibrium', b: 'The forward and reverse reactions happen at the same rate, so the concentrations stay constant. It needs a closed system.' },
      { n: 5, f: 'Effect of increasing pressure on an equilibrium involving gases', b: 'The position of equilibrium shifts towards the side with fewer gas molecules.' },
      { n: 6, f: 'Haber process: equation and conditions', b: 'N₂ + 3H₂ ⇌ 2NH₃\n450 °C, 200 atm, iron catalyst.' },
      { n: 7, f: 'Haber process: sources of nitrogen and hydrogen', b: 'Nitrogen: the air.\nHydrogen: methane.' },
      { n: 8, f: 'Contact process: equation and conditions', b: '2SO₂ + O₂ ⇌ 2SO₃\n450 °C, 200 kPa (2 atm), vanadium(V) oxide catalyst.' },
      { n: 9, f: 'Why is 450 °C used in the Haber process rather than a lower temperature?', b: 'It is a compromise: a lower temperature would give a higher yield (the forward reaction is exothermic) but the rate would be too slow to be economic.' },
      { n: 10, f: 'Why is 200 atm used in the Haber process rather than a much higher pressure?', b: 'Higher pressure would push the equilibrium further towards ammonia, but very high pressures are expensive to generate and maintain and are a safety risk. 200 atm is a compromise.' },
      { n: 11, f: 'Contact process: sources of sulfur dioxide and oxygen', b: 'Sulfur dioxide: burning sulfur or roasting sulfide ores.\nOxygen: the air.' },
    ]),
    ...sub('chemical-reactions', 'redox', '6.4', [
      { n: 1, f: 'Oxidation and reduction (oxygen definition)', b: 'Oxidation: gain of oxygen.\nReduction: loss of oxygen.' },
      { n: 2, f: 'Redox reaction', b: 'A reaction in which oxidation and reduction happen at the same time.' },
      { n: 3, f: 'What does the Roman numeral in iron(III) oxide tell you?', b: 'The oxidation number of iron in the compound is +3.' },
      { n: 4, f: 'Oxidation and reduction (electron definition)', b: 'Oxidation is loss of electrons; reduction is gain of electrons. (OIL RIG)' },
      { n: 5, f: 'Oxidising agent', b: 'Causes oxidation in something else, so is itself reduced and gains electrons.', src: REDOX },
      { n: 6, f: 'Reducing agent', b: 'Causes reduction in something else, so is itself oxidised and loses electrons.', src: REDOX },
      { n: 7, f: 'Oxidation number: what does an increase and a decrease mean?', b: 'Increase in oxidation number: oxidation.\nDecrease: reduction.' },
    ]),

    // 7 Acids, bases and salts
    ...sub('acids-bases-and-salts', 'the-characteristic-properties-of-acids-and-bases', '7.1', [
      { n: 1, f: 'pH of acidic, neutral and alkaline solutions', b: 'Acidic: below 7. Neutral: 7. Alkaline: above 7.' },
      { n: 2, f: 'Colours of litmus, methyl orange and thymolphthalein in acid and in alkali', b: 'Litmus: red in acid, blue in alkali.\nMethyl orange: red in acid, yellow in alkali.\nThymolphthalein: colourless in acid, blue in alkali.' },
      { n: 3, f: 'Which ions do aqueous acids and aqueous alkalis contain?', b: 'Acids: H⁺ ions.\nAlkalis: OH⁻ ions.' },
      { n: 4, f: 'Alkali', b: 'A soluble base. All alkalis are bases, but not all bases are alkalis.' },
      { n: 5, f: 'acid + metal →\nacid + base →\nacid + carbonate →', b: 'salt + hydrogen\nsalt + water\nsalt + water + carbon dioxide' },
      { n: 6, f: 'What is made when an alkali is warmed with an ammonium salt?', b: 'Ammonia gas (plus a salt and water).' },
      { n: 7, f: 'Acid (proton definition)', b: 'A proton (H⁺) donor.', src: ACID },
      { n: 8, f: 'Base (proton definition)', b: 'A proton (H⁺) acceptor.', src: ACID },
      { n: 9, f: 'Strong acid', b: 'Fully dissociated in water. Examples: HCl, HNO₃, H₂SO₄.', src: ACID },
      { n: 10, f: 'Weak acid', b: 'Only partially dissociated in water. Examples: ethanoic, citric and carbonic acids.', src: ACID },
    ]),
    ...sub('acids-bases-and-salts', 'oxides', '7.2', [
      { n: 1, f: 'Acidic oxides', b: 'Oxides of non-metals, such as SO₂ and CO₂. They react with bases and alkalis.' },
      { n: 2, f: 'Basic oxides', b: 'Oxides of metals, such as CuO and CaO. They react with acids.' },
      { n: 3, f: 'Amphoteric oxides', b: 'Oxides that react with both acids and bases to form a salt and water. Examples: aluminium oxide, Al₂O₃, and zinc oxide, ZnO.' },
    ]),
    ...sub('acids-bases-and-salts', 'preparation-of-salts', '7.3', [
      { n: 1, f: 'Making a soluble salt from an acid and an insoluble base (or carbonate or metal)', b: 'Add the solid in excess to the acid, filter off the leftover solid, then crystallise the filtrate.' },
      { n: 2, f: 'When is titration used to make a salt?', b: 'When both reactants are soluble (acid + alkali), so there is no excess solid to filter off. Repeat without the indicator to get a pure salt.' },
      { n: 3, f: 'Which common salts are always soluble?', b: 'All sodium, potassium and ammonium salts, and all nitrates.' },
      { n: 4, f: 'Exceptions to the solubility rules for chlorides and sulfates', b: 'Chlorides: soluble except silver and lead.\nSulfates: soluble except barium, calcium and lead.' },
      { n: 5, f: 'Solubility of carbonates and hydroxides', b: 'Mostly insoluble, except sodium, potassium and ammonium (calcium hydroxide is partially soluble).' },
      { n: 6, f: 'Hydrated and anhydrous', b: 'Hydrated: a substance chemically combined with water (e.g. CuSO₄·5H₂O).\nAnhydrous: containing no water.' },
      { n: 7, f: 'Making an insoluble salt', b: 'Precipitation: mix two solutions containing its ions, then filter, wash the precipitate with distilled water and dry it.' },
      { n: 8, f: 'Water of crystallisation', b: 'The water molecules chemically combined within the crystal structure of a hydrated salt.' },
    ]),

    // 8 The Periodic Table
    ...sub('the-periodic-table', 'arrangement-of-elements', '8.1', [
      { n: 1, f: 'How is the Periodic Table arranged?', b: 'In order of increasing proton number. Columns are groups; rows are periods.' },
      { n: 2, f: 'How does character change across a period?', b: 'From metallic on the left to non-metallic on the right.' },
      { n: 3, f: 'Why do elements in the same group have similar chemical properties?', b: 'They have the same number of outer-shell electrons.' },
    ]),
    ...sub('the-periodic-table', 'group-i-properties', '8.2', [
      { n: 1, f: 'Physical properties of lithium, sodium and potassium', b: 'Relatively soft metals with low density and low melting points.' },
      { n: 2, f: 'Group I: trends down the group', b: 'Reactivity increases. Melting point decreases. Density generally increases.' },
      { n: 3, f: 'Group I metal + water →', b: 'metal hydroxide + hydrogen\ne.g. 2Na + 2H₂O → 2NaOH + H₂' },
    ]),
    ...sub('the-periodic-table', 'group-vii-properties', '8.3', [
      { n: 1, f: 'Colour and state of chlorine, bromine and iodine at room temperature', b: 'Chlorine: pale yellow-green gas.\nBromine: red-brown liquid.\nIodine: grey-black solid.' },
      { n: 2, f: 'Group VII: trends down the group', b: 'Reactivity decreases. Colour gets darker. Density and melting point increase.' },
      { n: 3, f: 'Chlorine water is added to potassium bromide solution. What happens?', b: 'Chlorine is more reactive, so it displaces bromine: chlorine + potassium bromide → potassium chloride + bromine. The solution turns orange.' },
      { n: 4, f: 'Halogen molecules', b: 'Diatomic: Cl₂, Br₂, I₂.' },
    ]),
    ...sub('the-periodic-table', 'transition-elements', '8.4', [
      { n: 1, f: 'Properties of transition elements', b: 'High densities and high melting points. They form coloured compounds, and they and their compounds often act as catalysts.' },
      { n: 2, f: 'Transition elements have ions with variable oxidation numbers. Give an example.', b: 'Iron forms Fe²⁺ (iron(II)) and Fe³⁺ (iron(III)) compounds. 5070 states the general property; iron is the usual example.' },
    ]),
    ...sub('the-periodic-table', 'noble-gases', '8.5', [
      { n: 1, f: 'Noble gases (Group VIII): physical form', b: 'Unreactive, monatomic gases.' },
      { n: 2, f: 'Why are the noble gases unreactive?', b: 'They have a full outer shell of electrons, so they do not need to lose, gain or share electrons.' },
    ]),

    // 9 Metals
    ...sub('metals', 'properties-of-metals', '9.1', [
      { n: 1, f: 'General physical properties of metals', b: 'Good conductors of heat and electricity, malleable, ductile, and usually high melting and boiling points.' },
      { n: 2, f: 'General physical properties of non-metals', b: 'Poor conductors of heat and electricity, brittle when solid, and usually low melting and boiling points.' },
      { n: 3, f: 'metal + dilute acid →\nmetal + oxygen →', b: 'salt + hydrogen\nmetal oxide' },
    ]),
    ...sub('metals', 'uses-of-metals', '9.2', [
      { n: 1, f: 'Aluminium: two uses and the property behind each', b: 'Aircraft parts — low density.\nFood containers — resistance to corrosion.' },
      { n: 2, f: 'Copper: a use and the properties behind it', b: 'Electrical wiring — good electrical conductor and ductile.' },
    ]),
    ...sub('metals', 'alloys-and-their-properties', '9.3', [
      { n: 1, f: 'Alloy', b: 'A mixture of a metal with other elements.' },
      { n: 2, f: 'What is brass made from?', b: 'Copper and zinc.' },
      { n: 3, f: 'Stainless steel: composition and a use', b: 'Iron mixed with chromium, nickel and carbon. Used for cutlery, because it is hard and resists corrosion.' },
      { n: 4, f: 'How do the hardness and strength of an alloy compare with the pure metal?', b: 'Alloys can be harder and stronger than the pure metals.' },
      { n: 5, f: 'Explain why an alloy is harder than the pure metal', b: 'The different-sized atoms disrupt the regular layers, so the layers cannot slide over each other as easily.' },
    ]),
    ...sub('metals', 'reactivity-series', '9.4', [
      { n: 1, f: 'The reactivity series (most to least reactive), with carbon and hydrogen', b: 'Potassium, sodium, calcium, magnesium, aluminium, (carbon), zinc, iron, (hydrogen), copper, silver, gold.' },
      { n: 2, f: 'Which metals react with cold water, and which only with steam?', b: 'Cold water: potassium, sodium, calcium.\nSteam: magnesium (very slow with cold water), zinc and iron.' },
      { n: 3, f: 'Will magnesium displace zinc from zinc sulfate solution?', b: 'Yes. Magnesium is more reactive than zinc, so it gives up electrons more readily and displaces it.' },
      { n: 4, f: 'Why does aluminium seem unreactive?', b: 'It is covered by a thin, protective layer of aluminium oxide.' },
    ]),
    ...sub('metals', 'corrosion-of-metals', '9.5', [
      { n: 1, f: 'What two things are needed for iron to rust?', b: 'Water and oxygen.' },
      { n: 2, f: 'Rust', b: 'Hydrated iron(III) oxide.' },
      { n: 3, f: 'Barrier methods of rust prevention', b: 'Painting, greasing (oiling) and coating with plastic — they keep out water and oxygen.' },
      { n: 4, f: 'Sacrificial protection', b: 'Attaching a more reactive metal (such as zinc or magnesium) to iron. It corrodes instead of the iron.' },
      { n: 5, f: 'Galvanising, and why it beats tin plating', b: 'Coating iron with zinc. It is a barrier and also sacrificial, so iron is still protected if scratched. Tin is less reactive than iron, so scratched tin plate rusts faster.' },
    ]),
    ...sub('metals', 'extraction-of-metals', '9.6', [
      { n: 1, f: 'How a metal’s position in the reactivity series decides its extraction method', b: 'More reactive than carbon: electrolysis.\nLess reactive than carbon: reduction by heating with carbon.' },
      { n: 2, f: 'Raw materials of the blast furnace', b: 'Hematite (iron ore), coke (carbon), limestone and hot air.' },
      { n: 3, f: 'What reduces iron(III) oxide in the blast furnace?', b: 'Carbon monoxide.' },
      { n: 4, f: 'Main ore of aluminium, and how aluminium is extracted', b: 'Bauxite. Aluminium is extracted by electrolysis.' },
      { n: 5, f: 'Equation for the reduction of iron(III) oxide in the blast furnace', b: 'Fe₂O₃ + 3CO → 2Fe + 3CO₂' },
      { n: 6, f: 'How limestone removes impurities in the blast furnace', b: 'CaCO₃ → CaO + CO₂, then CaO + SiO₂ → CaSiO₃ (slag).' },
      { n: 7, f: 'Role of cryolite in aluminium extraction', b: 'Aluminium oxide is dissolved in molten cryolite, which lowers the operating temperature and improves conductivity.' },
    ]),

    // 10 Chemistry of the environment
    ...sub('chemistry-of-the-environment', 'water', '10.1', [
      { n: 1, f: 'Two chemical tests for water', b: 'Anhydrous copper(II) sulfate turns from white to blue.\nAnhydrous cobalt(II) chloride turns from blue to pink.' },
      { n: 2, f: 'Physical test for pure water', b: 'It melts at exactly 0 °C and boils at exactly 100 °C.' },
      { n: 3, f: 'Stages of water treatment, in order', b: '1. Sedimentation and filtration — remove solids.\n2. Carbon — removes tastes and odours.\n3. Chlorination — kills bacteria.' },
    ]),
    ...sub('chemistry-of-the-environment', 'fertilisers', '10.2', [
      { n: 1, f: 'NPK fertilisers: the three elements', b: 'Nitrogen, phosphorus and potassium.' },
      { n: 2, f: 'Role of nitrogen, phosphorus and potassium in plants', b: 'Nitrogen: protein synthesis, leaf growth.\nPhosphorus: root growth.\nPotassium: flowering, fruit, disease resistance.' },
      { n: 3, f: 'Two types of compound used as nitrogen fertilisers', b: 'Ammonium salts and nitrates.' },
    ]),
    ...sub('chemistry-of-the-environment', 'air-quality-and-climate', '10.3', [
      { n: 1, f: 'Composition of clean, dry air', b: 'About 78% nitrogen and 21% oxygen. The rest is mainly argon, with a little carbon dioxide.' },
      { n: 2, f: 'Carbon monoxide: source and effect', b: 'Incomplete combustion of carbon-containing fuels. Toxic — it reduces the blood’s ability to carry oxygen.' },
      { n: 3, f: 'Sulfur dioxide: source and effect', b: 'Burning fossil fuels that contain sulfur impurities. Causes acid rain.' },
      { n: 4, f: 'Two greenhouse gases and their sources', b: 'Carbon dioxide: complete combustion of fuels, respiration.\nMethane: livestock, decomposition of vegetation, rice paddies.' },
      { n: 5, f: 'What does a catalytic converter in a car remove?', b: 'Oxides of nitrogen (and carbon monoxide), cutting acid rain.' },
      { n: 6, f: 'Catalytic converter equation removing CO and NO together', b: '2CO + 2NO → 2CO₂ + N₂' },
      { n: 7, f: 'Symbol equation for photosynthesis', b: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂' },
    ]),

    // 11 Organic chemistry
    ...sub('organic-chemistry', 'formulae-functional-groups-and-terminology', '11.1', [
      { n: 1, f: 'Functional group', b: 'An atom or group of atoms that determines the chemical properties of a homologous series.' },
      { n: 2, f: 'Homologous series', b: 'A family of compounds with the same functional group and similar chemical properties.' },
      { n: 3, f: 'Saturated', b: 'Contains only single carbon–carbon bonds (e.g. alkanes).', src: ORG },
      { n: 4, f: 'Unsaturated', b: 'Contains at least one carbon–carbon double or triple bond, most commonly C=C (e.g. alkenes).', src: ORG },
      { n: 5, f: 'Homologous series: the full description', b: 'Same functional group, same general formula, each member differs by CH₂, a gradual trend in physical properties, similar chemical properties.' },
      { n: 6, f: 'Structural isomers', b: 'Compounds with the same molecular formula but different structural formulae.' },
    ]),
    ...sub('organic-chemistry', 'naming-organic-compounds', '11.2', [
      { n: 1, f: 'Name endings for alkanes, alkenes, alcohols and carboxylic acids', b: 'Alkane: -ane. Alkene: -ene. Alcohol: -ol. Carboxylic acid: -oic acid.' },
      { n: 2, f: 'Name C₂H₅OH and CH₃COOH', b: 'Ethanol and ethanoic acid.' },
      { n: 3, f: 'Name the two unbranched alkenes with formula C₄H₈', b: 'But-1-ene and but-2-ene.' },
      { n: 4, f: 'Name the ester formed from propanoic acid and methanol', b: 'Methyl propanoate — the alcohol part is named first.' },
    ]),
    ...sub('organic-chemistry', 'fuels', '11.3', [
      { n: 1, f: 'Three fossil fuels, and the main constituent of natural gas', b: 'Coal, natural gas and petroleum. Natural gas is mainly methane.' },
      { n: 2, f: 'How is petroleum separated?', b: 'By fractional distillation, into fractions with different boiling point ranges.' },
      { n: 3, f: 'Going UP the fractionating column: chain length, boiling point, volatility, viscosity', b: 'Chain length decreases, boiling point is lower, volatility is higher, viscosity is lower.' },
      { n: 4, f: 'Uses of: refinery gas, gasoline, naphtha, kerosene', b: 'Refinery gas: heating and cooking.\nGasoline/petrol: car fuel.\nNaphtha: chemical feedstock.\nKerosene/paraffin: jet fuel.' },
      { n: 5, f: 'Uses of: diesel oil, fuel oil, lubricating oil, bitumen', b: 'Diesel oil/gas oil: diesel engines.\nFuel oil: ships and home heating.\nLubricating oil: lubricants, waxes, polishes.\nBitumen: making roads.' },
    ]),
    ...sub('organic-chemistry', 'alkanes', '11.4', [
      { n: 1, f: 'General formula of the alkanes', b: 'CₙH₂ₙ₊₂' },
      { n: 2, f: 'Reactivity of alkanes', b: 'Generally unreactive, apart from combustion. They are saturated hydrocarbons.' },
      { n: 3, f: 'Products of the complete combustion of an alkane', b: 'Carbon dioxide and water.' },
      { n: 4, f: 'Reaction of methane with chlorine: type, condition and equation', b: 'Substitution, in ultraviolet light.\nCH₄ + Cl₂ → CH₃Cl + HCl' },
    ]),
    ...sub('organic-chemistry', 'alkenes', '11.5', [
      { n: 1, f: 'General formula of the alkenes', b: 'CₙH₂ₙ' },
      { n: 2, f: 'Cracking', b: 'Breaking larger alkane molecules into smaller alkanes, alkenes and hydrogen, using a high temperature and a catalyst.' },
      { n: 3, f: 'Why is cracking done?', b: 'There is more demand for short-chain fractions such as petrol than is supplied, and the alkenes made are useful (for example, to make polymers).' },
      { n: 4, f: 'Test to tell an alkene from an alkane', b: 'Add bromine water. Alkene: orange → colourless. Alkane: stays orange.' },
      { n: 5, f: 'Addition reactions of ethene: catalyst and product with hydrogen and with steam', b: 'Hydrogen: nickel catalyst → ethane.\nSteam: acid catalyst → ethanol.' },
    ]),
    ...sub('organic-chemistry', 'alcohols', '11.6', [
      { n: 1, f: 'Two ways of making ethanol', b: 'Fermentation of glucose with yeast.\nCatalytic addition of steam to ethene.' },
      { n: 2, f: 'Conditions for fermentation', b: '25–35 °C, yeast, absence of oxygen.' },
      { n: 3, f: 'Conditions for making ethanol from ethene and steam', b: '300 °C, 6000 kPa (60 atm), acid catalyst.' },
      { n: 4, f: 'Two uses of ethanol', b: 'As a solvent and as a fuel.' },
      { n: 5, f: 'Fermentation compared with hydration of ethene', b: 'Fermentation: renewable raw material, but slow, batch process, dilute impure product.\nFrom ethene: fast, continuous, pure product, but uses a non-renewable raw material and lots of energy.' },
      { n: 6, f: 'Complete combustion of an alcohol: products and two examples', b: 'Carbon dioxide and water.\nC₂H₅OH + 3O₂ → 2CO₂ + 3H₂O\n2C₃H₇OH + 9O₂ → 6CO₂ + 8H₂O (propan-1-ol)' },
    ]),
    ...sub('organic-chemistry', 'carboxylic-acids', '11.7', [
      { n: 1, f: 'Ethanoic acid + a metal', b: 'Salt + hydrogen.\n2CH₃COOH + Mg → (CH₃COO)₂Mg + H₂ (magnesium ethanoate)', src: ALC },
      { n: 2, f: 'Ethanoic acid + a base', b: 'Salt + water.\nCH₃COOH + NaOH → CH₃COONa + H₂O (sodium ethanoate)', src: ALC },
      { n: 3, f: 'Ethanoic acid + a carbonate', b: 'Salt + water + carbon dioxide.\n2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂', src: ALC },
      { n: 4, f: 'Two ways of making ethanoic acid', b: 'Oxidising ethanol with acidified potassium manganate(VII), or by bacterial oxidation (fermentation of ethanol in air).' },
      { n: 5, f: 'Making an ester', b: 'Carboxylic acid + alcohol, with an acid catalyst → ester + water. Ethanoic acid + ethanol → ethyl ethanoate.' },
      { n: 6, f: 'Why does ethanoic acid react more slowly than hydrochloric acid of the same concentration?', b: 'Ethanoic acid is a weak acid: it is only partially dissociated in water, so there are fewer H⁺ ions.' },
      { n: 7, f: 'Do other carboxylic acids react like ethanoic acid? Give an example.', b: 'Yes — methanoic and propanoic acids give methanoates and propanoates.\n2C₂H₅COOH + Mg → (C₂H₅COO)₂Mg + H₂ (magnesium propanoate)' },
    ]),
    ...sub('organic-chemistry', 'polymers', '11.8', [
      { n: 1, f: 'Polymer', b: 'A large molecule built up from many small units called monomers.' },
      { n: 2, f: 'Problems with disposing of plastics', b: 'Most are non-biodegradable, so they fill landfill and harm aquatic life; burning them can release toxic gases.' },
      { n: 3, f: 'Addition polymerisation', b: 'Many monomers with a C=C double bond join together. Nothing else is formed. Ethene → poly(ethene).' },
      { n: 4, f: 'Polyamide (nylon)', b: 'A dicarboxylic acid + a diamine → amide link –CONH–, with water lost.', src: POLY },
      { n: 5, f: 'Polyester (PET)', b: 'A dicarboxylic acid + a diol → ester link –COO–, with water lost.', src: POLY },
      { n: 6, f: 'Proteins as polymers', b: 'Natural polyamides formed from amino acid monomers.' },
    ]),

    // 12 Experimental techniques and chemical analysis
    ...sub('experimental-techniques-and-chemical-analysis', 'experimental-design', '12.1', [
      { n: 1, f: 'Apparatus to measure time, temperature, mass and volume', b: 'Time: stopwatch. Temperature: thermometer. Mass: balance.\nVolume: burette, volumetric pipette, measuring cylinder, gas syringe.' },
      { n: 2, f: 'Solvent', b: 'A substance that dissolves a solute.', src: PRAC },
      { n: 3, f: 'Solute', b: 'A substance that is dissolved in a solvent.', src: PRAC },
      { n: 4, f: 'Solution', b: 'A mixture of one or more solutes dissolved in a solvent.', src: PRAC },
      { n: 5, f: 'Saturated solution', b: 'A solution containing the maximum concentration of a solute dissolved in the solvent at a specified temperature.', src: PRAC },
      { n: 6, f: 'Residue', b: 'A substance that remains after evaporation, distillation, filtration or any similar process.', src: PRAC },
      { n: 7, f: 'Filtrate', b: 'A liquid or solution that has passed through a filter.', src: PRAC },
    ]),
    ...sub('experimental-techniques-and-chemical-analysis', 'acid-base-titrations', '12.2', [
      { n: 1, f: 'Apparatus for an acid–base titration', b: 'Burette, volumetric pipette, conical flask and a suitable indicator.' },
      { n: 2, f: 'When do you stop adding from the burette, and how many runs do you need?', b: 'Stop when the indicator just changes colour (the end-point). Repeat until you have concordant titres.' },
      { n: 3, f: 'Why not use universal indicator in a titration?', b: 'It changes colour gradually across the pH range, so it gives no sharp end-point. Use methyl orange or thymolphthalein.' },
    ]),
    ...sub('experimental-techniques-and-chemical-analysis', 'chromatography', '12.3', [
      { n: 1, f: 'Why is the baseline on a chromatogram drawn in pencil, above the solvent?', b: 'Pencil does not dissolve and run. Above the solvent so the spots do not dissolve into the solvent in the beaker.' },
      { n: 2, f: 'How does a chromatogram show that a substance is pure?', b: 'A pure substance gives a single spot.' },
      { n: 3, f: 'Rf value', b: 'distance moved by the substance ÷ distance moved by the solvent front, both measured from the baseline.' },
      { n: 4, f: 'A spot moves 4.5 cm and the solvent front 7.5 cm. What is the Rf?', b: '4.5 ÷ 7.5 = 0.6' },
      { n: 5, f: 'How are colourless substances seen on a chromatogram?', b: 'By spraying the paper with a locating agent.' },
    ]),
    ...sub('experimental-techniques-and-chemical-analysis', 'separation-and-purification', '12.4', [
      { n: 1, f: 'Filtration separates…', b: 'An insoluble solid from a liquid. The solid is the residue; the liquid is the filtrate.', src: PRAC },
      { n: 2, f: 'Crystallisation: what it separates and the method', b: 'A dissolved solid from its solution. Heat to evaporate some solvent until saturated, then cool; filter off the crystals, wash with a little cold solvent and dry.', src: PRAC },
      { n: 3, f: 'Simple distillation separates…', b: 'A solvent from a dissolved solid (for example, water from salt water). The solvent evaporates and is condensed in a condenser.', src: PRAC },
      { n: 4, f: 'Fractional distillation separates…', b: 'Miscible liquids with different boiling points (for example, ethanol and water). Uses a fractionating column; the liquid with the lower boiling point distils first.', src: PRAC },
      { n: 5, f: 'Separating one soluble solid from an insoluble one', b: 'Add a suitable solvent to dissolve the soluble one, then filter.', src: PRAC },
      { n: 6, f: 'How do melting and boiling points show whether a substance is pure?', b: 'A pure substance has a sharp, fixed melting point and boiling point. Impurities lower the melting point and raise the boiling point, and make them happen over a range.' },
    ]),
    ...sub('experimental-techniques-and-chemical-analysis', 'identification-of-ions-and-gases', '12.5', [
      { n: 1, f: 'Tests for hydrogen and oxygen', b: 'Hydrogen: a lighted splint gives a squeaky pop.\nOxygen: relights a glowing splint.' },
      { n: 2, f: 'Tests for carbon dioxide and ammonia', b: 'Carbon dioxide: turns limewater milky.\nAmmonia: turns damp red litmus paper blue.' },
      { n: 3, f: 'Tests for chlorine and sulfur dioxide', b: 'Chlorine: bleaches damp litmus paper.\nSulfur dioxide: turns acidified potassium manganate(VII) from purple to colourless.' },
      { n: 4, f: 'Aqueous sodium hydroxide: precipitate colours for Cu²⁺, Fe²⁺ and Fe³⁺', b: 'Cu²⁺: light blue.\nFe²⁺: green.\nFe³⁺: red-brown.\nAll insoluble in excess.' },
      { n: 5, f: 'Zn²⁺ and Al³⁺ both give a white precipitate that dissolves in excess NaOH. How do you tell them apart?', b: 'Use aqueous ammonia: the zinc precipitate dissolves in excess; the aluminium precipitate does not.' },
      { n: 6, f: 'Test for halide ions, and the precipitate colours', b: 'Acidify with dilute nitric acid, add aqueous silver nitrate.\nCl⁻: white. Br⁻: cream. I⁻: yellow.' },
      { n: 7, f: 'Test for sulfate ions', b: 'Acidify with dilute nitric acid, add aqueous barium nitrate: white precipitate.' },
      { n: 8, f: 'Test for carbonate ions', b: 'Add dilute acid: effervescence, and the gas turns limewater milky.' },
      { n: 9, f: 'Flame test colours: Li⁺, Na⁺, K⁺, Ca²⁺, Ba²⁺, Cu²⁺', b: 'Li⁺: red. Na⁺: yellow. K⁺: lilac.\nCa²⁺: orange-red. Ba²⁺: light green. Cu²⁺: blue-green.' },
    ]),
  ],
};
