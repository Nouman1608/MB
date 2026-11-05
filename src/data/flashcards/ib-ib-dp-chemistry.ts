/**
 * D-438 -- flashcards for IB Diploma Programme Chemistry (first assessment 2025).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 * Id note: the syllabus numbers the Structure and Reactivity sub-topics in the
 * same way (Structure 1.1 and Reactivity 1.1 are both '1.1'), so both share the
 * `1.1-<n>` id pattern. Structure cards use n = 1, 2, 3...; Reactivity cards use
 * n = 101, 102, 103... so no id can collide. Keep to that split when adding cards.
 *
 * No tierScheme: the syllabus record is not tiered. Content the IB guide lists as
 * additional higher level (AHL), following the HL marks on Marlbridge's own DP
 * Chemistry revision notes, ends its back with "(HL only)" instead.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 'DP Chemistry'); origin 'revision-notes'.
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

const P = 'ib-dp-chemistry-';
const ECONF = `${P}electron-configurations-revision-notes`;
const IONIC = `${P}the-ionic-model-revision-notes`;
const SIGMA = `${P}the-covalent-model-formal-charge-sigma-and-pi-bonds-revision-notes`;
const PTABLE = `${P}the-periodic-table-classification-of-elements-revision-notes`;
const FGROUPS = `${P}functional-groups-and-naming-organic-compounds-revision-notes`;
const MEASURE = `${P}measuring-enthalpy-changes-revision-notes`;
const HOWMUCH = `${P}how-much-the-amount-of-chemical-change-revision-notes`;
const RATES = `${P}how-fast-rates-and-collision-theory-revision-notes`;

const S1 = 'ib-dp-chemistry-structure-1';
const S2 = 'ib-dp-chemistry-structure-2';
const S3 = 'ib-dp-chemistry-structure-3';
const R1 = 'ib-dp-chemistry-reactivity-1';
const R2 = 'ib-dp-chemistry-reactivity-2';
const R3 = 'ib-dp-chemistry-reactivity-3';

export const DECK_IB_IB_DP_CHEMISTRY: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-dp',
  subjectSlug: 'chemistry',
  syllabusCode: 'DP Chemistry',
  syllabusSeries: 'First assessment 2025',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // Structure 1 Models of the particulate nature of matter
    ...sub(S1, 'ib-dp-chemistry-structure-1-1', '1.1', [
      { n: 1, f: 'Element, compound and mixture', b: 'Element: one type of atom only.\nCompound: atoms of different elements chemically bonded in a fixed ratio; separated only by a chemical reaction.\nMixture: not chemically bonded, no fixed ratio; separable by physical methods.' },
      { n: 2, f: 'Homogeneous vs heterogeneous mixture', b: 'Homogeneous: uniform composition, one phase (vinegar, bronze, filtered air).\nHeterogeneous: non-uniform, two or more phases (muddy water).' },
      { n: 3, f: 'Recrystallization: method', b: 'Dissolve the impure solid in the minimum of hot solvent; filter hot to remove insoluble impurities; cool so the product crystallizes (soluble impurities stay in solution); filter, wash with a little cold solvent, dry.' },
      { n: 4, f: 'Solvent front 9.0 cm, spot 2.7 cm from the base line. Rf?', b: 'Rf = 2.7 ÷ 9.0 = 0.30. Rf always lies between 0 and 1; both distances are measured from the base line.' },
      { n: 5, f: 'Evaporation vs boiling', b: 'Evaporation: at the surface only, below the boiling point; the most energetic particles escape, so the liquid cools.\nBoiling: throughout the liquid, at a fixed temperature for a given external pressure.' },
      { n: 6, f: 'What does kelvin temperature measure? Convert −18 °C to kelvin.', b: 'The average kinetic energy of the particles (double the kelvin temperature, double the average kinetic energy).\n−18 + 273.15 = 255.15 K.' },
      { n: 7, f: 'Why is a heating curve flat during melting and boiling?', b: 'The energy supplied overcomes the attractions between particles, so the average kinetic energy and temperature stay constant while two states coexist.' },
    ]),
    ...sub(S1, 'ib-dp-chemistry-structure-1-2', '1.2', [
      { n: 1, f: 'Relative charge, relative mass and location of the three subatomic particles', b: 'Proton: +1, 1, nucleus.\nNeutron: 0, 1, nucleus.\nElectron: −1, negligible (about 1/1836), outside the nucleus.' },
      { n: 2, f: 'Protons, neutrons and electrons in ¹¹⁹₅₀Sn²⁺', b: '50 protons, 119 − 50 = 69 neutrons, 50 − 2 = 48 electrons.' },
      { n: 3, f: 'Why do isotopes have the same chemical properties but different physical properties?', b: 'Same number of protons, so the same number and arrangement of electrons, which decide reactions. Different numbers of neutrons, so different masses: density, melting and boiling points and diffusion rate differ.' },
      { n: 4, f: 'Rhenium is 37.4% ¹⁸⁵Re (184.95) and 62.6% ¹⁸⁷Re (186.96). Ar?', b: '(184.95 × 37.4 + 186.96 × 62.6) ÷ 100 = 186.21' },
      { n: 5, f: 'Isotopes of masses 64.00 and 66.00 give Ar = 64.70. Percentage abundances?', b: '64.00x + 66.00(1 − x) = 64.70, so 66.00 − 2.00x = 64.70 and x = 0.650.\n65.0% of mass 64.00 and 35.0% of mass 66.00.' },
      { n: 6, f: 'Reading a mass spectrum of an element', b: 'Each peak is one isotope (m/z = isotope mass for 1+ ions); peak height is relative abundance. Ar is the weighted mean of the m/z values. (HL only)' },
    ]),
    ...sub(S1, 'ib-dp-chemistry-structure-1-3', '1.3', [
      { n: 1, f: 'Hydrogen emission spectrum: which transitions give ultraviolet, visible and infrared lines?', b: 'Falls to n = 1: ultraviolet. To n = 2: visible. To n = 3: infrared. In each series the lines converge at higher frequency, because the levels get closer together as n increases.' },
      { n: 2, f: 'Orbitals per sublevel, and the maximum electrons in main level n', b: 's 1, p 3, d 5, f 7 orbitals. Main level n holds n² orbitals and up to 2n² electrons. Each orbital holds two electrons of opposite spin.' },
      { n: 3, f: 'Aufbau principle, Pauli exclusion principle, Hund’s rule', b: 'Aufbau: fill the lowest-energy orbital first.\nPauli: at most two electrons per orbital, with opposite spins.\nHund: occupy equal-energy orbitals singly with parallel spins before pairing.' },
      { n: 4, f: 'Configurations of chromium and copper', b: 'Cr: [Ar] 3d⁵ 4s¹ (half-filled 3d). Cu: [Ar] 3d¹⁰ 4s¹ (filled 3d). Each gives a lower overall energy than the expected form.' },
      { n: 5, f: 'Filling order vs loss order', b: '4s fills before 3d but empties before 3d.', src: ECONF },
      { n: 6, f: 'Configuration of Ni²⁺ (Z = 28), and its unpaired electrons', b: 'Ni: [Ar] 3d⁸ 4s². Ni²⁺: [Ar] 3d⁸ (4s emptied first), with 2 unpaired electrons.' },
      { n: 7, f: 'Lithium’s convergence limit is at 1.30 × 10¹⁵ Hz (h = 6.63 × 10⁻³⁴ J s). First ionization energy?', b: 'E = hf = 6.63 × 10⁻³⁴ × 1.30 × 10¹⁵ = 8.62 × 10⁻¹⁹ J.\n× 6.02 × 10²³ = 5.19 × 10⁵ J mol⁻¹ = 519 kJ mol⁻¹. (HL only)' },
      { n: 8, f: 'Successive ionization energies of boron: 801, 2427, 3660, 25 026 kJ mol⁻¹. Group?', b: 'The biggest increase comes after the third electron, so boron has three outer electrons: group 13. Look for the biggest increase, not the biggest value. (HL only)' },
    ]),
    ...sub(S1, 'ib-dp-chemistry-structure-1-4', '1.4', [
      { n: 1, f: 'The mole and the Avogadro constant', b: 'The mole is the SI unit for amount of substance; one mole contains NA elementary entities. NA = 6.02 × 10²³ mol⁻¹.' },
      { n: 2, f: 'Ar and Mr versus molar mass M', b: 'The same number, but Ar and Mr are ratios with no units, and M is the mass of one mole in g mol⁻¹. n = m ÷ M.' },
      { n: 3, f: 'How many sodium ions are in 0.0200 mol of Na₂CO₃?', b: '2 × 0.0200 = 0.0400 mol Na⁺; 0.0400 × 6.02 × 10²³ = 2.41 × 10²² ions.' },
      { n: 4, f: '5.55 g of CaCl₂ (M = 110.98 g mol⁻¹) is made up to 500.0 cm³. [CaCl₂] and [Cl⁻]?', b: 'n = 5.55 ÷ 110.98 = 0.0500 mol.\n[CaCl₂] = 0.0500 ÷ 0.5000 = 0.100 mol dm⁻³; [Cl⁻] = 0.200 mol dm⁻³.' },
      { n: 5, f: 'Empirical formula: what to do with a mole ratio ending in .5, .33 or .25', b: '.5: multiply by 2. .33 or .67: multiply by 3. .25 or .75: multiply by 4. Molecular formula multiple = M ÷ empirical formula mass.' },
      { n: 6, f: "Avogadro's law", b: 'At equal temperature and pressure, equal volumes of gases contain equal numbers of molecules, so gas volume ratios equal mole ratios.' },
      { n: 7, f: 'Dilution', b: 'The amount of solute stays the same, so C₁V₁ = C₂V₂. Concentration uses the final volume of solution.' },
    ]),
    ...sub(S1, 'ib-dp-chemistry-structure-1-5', '1.5', [
      { n: 1, f: 'Assumptions of the ideal gas model', b: 'Particles move constantly and randomly; their own volume is negligible; there are no intermolecular forces; collisions are elastic.' },
      { n: 2, f: 'When and why do real gases deviate from ideal behaviour?', b: 'High pressure: the particles’ own volume is no longer negligible.\nLow temperature: intermolecular attractions are no longer negligible.\nMost ideal at high T, low P, with small non-polar particles.' },
      { n: 3, f: 'Molar volume of an ideal gas at STP', b: '22.7 dm³ mol⁻¹ at 273.15 K and 100 kPa. Under other conditions Vm = RT ÷ P.' },
      { n: 4, f: 'PV = nRT: the units to use', b: 'P in Pa, V in m³, T in K, R = 8.31 J K⁻¹ mol⁻¹. kPa × 10³ = Pa; dm³ × 10⁻³ = m³; cm³ × 10⁻⁶ = m³.' },
      { n: 5, f: 'A gas at 100 kPa and 20.0 °C is compressed to half its volume; the pressure becomes 230 kPa. New temperature?', b: 'T₂ = T₁ × P₂V₂ ÷ (P₁V₁) = 293.15 × (230 × 0.5) ÷ (100 × 1) = 337 K (64.0 °C).' },
      { n: 6, f: 'Volume against temperature in °C for a fixed mass of gas at constant pressure', b: 'A straight line that does not pass through the origin; extrapolated to V = 0 it meets the temperature axis near −273 °C (absolute zero). V is proportional to T only in kelvin.' },
    ]),

    // Structure 2 Models of bonding and structure
    ...sub(S2, 'ib-dp-chemistry-structure-2-1', '2.1', [
      { n: 1, f: 'Ionic bond', b: 'Electrostatic attraction between oppositely charged ions.' },
      { n: 2, f: 'Structure of an ionic compound', b: 'Giant 3D lattice; each ion surrounded by oppositely charged ions; attractions act in all directions.', src: IONIC },
      { n: 3, f: 'Why is the formula of an ionic compound an empirical formula?', b: 'Because a crystal has no fixed number of ions and no discrete molecules.', src: IONIC },
      { n: 4, f: 'Formulas of rubidium nitride and iron(III) carbonate', b: 'Rb⁺ and N³⁻: Rb₃N.\nFe³⁺ and CO₃²⁻: Fe₂(CO₃)₃.' },
      { n: 5, f: 'Why does CaS have a larger lattice enthalpy than K₂S?', b: 'Both contain S²⁻, but Ca²⁺ has a higher charge and is smaller than K⁺, so the ion centres are closer and the electrostatic attraction is stronger. Charge usually dominates.' },
      { n: 6, f: 'Electrical conductivity: molten vs aqueous vs solid ionic compound', b: 'The first two conduct, the last does not. Ions move; electrons do not.', src: IONIC },
      { n: 7, f: 'The seven polyatomic ions to know', b: 'Ammonium NH₄⁺, hydroxide OH⁻, nitrate NO₃⁻, hydrogencarbonate HCO₃⁻, carbonate CO₃²⁻, sulfate SO₄²⁻, phosphate PO₄³⁻.' },
    ]),
    ...sub(S2, 'ib-dp-chemistry-structure-2-2', '2.2', [
      { n: 1, f: 'Covalent bond, and coordination bond', b: 'Covalent: two nuclei both attracting the same shared electron pair.\nCoordination: a covalent bond where both shared electrons come from the same atom (H₃O⁺, NH₄⁺, Al₂Cl₆, CO). Once formed it is identical to the others.' },
      { n: 2, f: 'Shapes and approximate angles of BF₃, NH₃ and OF₂', b: 'BF₃: 3 domains, 0 lone pairs, trigonal planar, 120°.\nNH₃: 4 domains, 1 lone pair, trigonal pyramidal, about 107°.\nOF₂: 4 domains, 2 lone pairs, bent, about 104.5°.' },
      { n: 3, f: 'Single, double and triple bonds between the same two atoms: length and strength', b: 'More shared pairs means more electron density between the nuclei: triple is shortest and strongest, single is longest and weakest.' },
      { n: 4, f: 'Why does SiF₄ have polar bonds but no net dipole?', b: 'It is tetrahedral with identical outer atoms, so the bond dipoles cancel. Lone pairs on the central atom (pyramidal, bent) or different outer atoms usually prevent cancelling.' },
      { n: 5, f: 'Intermolecular forces in order of strength (similar molar mass)', b: 'London (always present) < dipole-induced dipole < dipole–dipole < hydrogen bond (H on N, O or F plus a lone pair on N, O or F).' },
      { n: 6, f: 'Diamond, graphite, graphene and C₆₀: bonds per carbon and conductivity', b: 'Diamond: 4, does not conduct.\nGraphite: 3 in layers, conducts along the layers.\nGraphene: 3 in one sheet, conducts very well.\nC₆₀: 3 in a cage, molecular, conducts poorly.' },
      { n: 7, f: 'Resonance', b: 'Two or more valid Lewis formulas differ only in where π electrons sit. The real species is one resonance hybrid; its delocalized bonds are equal in length, between single and double (e.g. 1.5 for three pairs over two positions). (HL only)' },
      { n: 8, f: 'Formal charge: formula and how to choose the preferred Lewis formula', b: 'FC = V − (L + ½B). Prefer formal charges closest to zero; if tied, put the negative formal charge on the more electronegative atom. (HL only)' },
      { n: 9, f: 'σ vs π bonds', b: 'Head-on vs sideways; on the axis vs either side of it. A single bond is 1 σ; a double bond 1 σ + 1 π; a triple bond 1 σ + 2 π. (HL only)', src: SIGMA },
      { n: 10, f: 'Hybridization for 4, 3 and 2 electron domains', b: '4 domains: sp³, tetrahedral, 109.5°.\n3: sp², trigonal planar, 120° (one p left for a π bond).\n2: sp, linear, 180° (two p left). Count domains, not atoms. (HL only)' },
      { n: 11, f: 'Molecular geometry of XeF₄ and ClF₃', b: 'XeF₄: 6 domains, 2 lone pairs opposite each other, square planar.\nClF₃: 5 domains, 2 lone pairs equatorial, T-shaped. (HL only)' },
    ]),
    ...sub(S2, 'ib-dp-chemistry-structure-2-3', '2.3', [
      { n: 1, f: 'Metallic bond', b: 'The electrostatic attraction holding a lattice of cations to the delocalized electrons around them. The bonding is non-directional.' },
      { n: 2, f: 'How the metallic model explains electrical and thermal conductivity', b: 'Electrical: under a potential difference the delocalized electrons drift, carrying charge; the cations stay put.\nThermal: mobile electrons gain kinetic energy at the hot end and carry it to cooler regions.' },
      { n: 3, f: 'Why are metals malleable and ductile?', b: 'Layers of cations slide over each other and the delocalized electrons move with them, so the attraction is kept and the metal reshapes instead of breaking.' },
      { n: 4, f: 'What makes a metallic bond stronger?', b: 'A higher cation charge (more delocalized electrons per atom) and a smaller ion radius. Example: melting point rises Na → Mg → Al.' },
      { n: 5, f: 'Why does strontium melt higher than rubidium?', b: 'Sr gives Sr²⁺ and two delocalized electrons per atom; Rb gives Rb⁺ and one. Sr²⁺ is also smaller, so the attraction is stronger and more energy is needed (about 1050 K vs about 312 K).' },
      { n: 6, f: 'Why do transition elements have high melting points and conduct well?', b: '3d as well as 4s electrons can be delocalized, giving greater electron density and higher cation charge with small ions: very strong metallic bonding and more mobile charge carriers. (HL only)' },
    ]),
    ...sub(S2, 'ib-dp-chemistry-structure-2-4', '2.4', [
      { n: 1, f: 'The bonding triangle: what the axes show', b: 'Vertical: electronegativity difference, Δχ. Horizontal: average electronegativity, (χA + χB) ÷ 2. Top: ionic; bottom left: metallic; bottom right: covalent.' },
      { n: 2, f: 'Place NaBr on the bonding triangle (χ: Na 0.93, Br 2.96)', b: 'Δχ = 2.03; average = 1.945. Ionic region: high melting point, conducts when molten.' },
      { n: 3, f: 'Why is an alloy harder than the pure metal?', b: 'Atoms of a different size distort the layers of the lattice, so the layers resist sliding. The delocalized electrons remain, so the alloy still conducts.' },
      { n: 4, f: 'Why are most plastics insulators that soften on heating?', b: 'No mobile ions or delocalized electrons, so no conduction. Heating overcomes only the intermolecular forces between chains, so they are mouldable (cross-linked ones do not soften).' },
      { n: 5, f: 'Repeating unit of the addition polymer from 3-chloropropene, CH₂=CH–CH₂Cl', b: '–[–CH₂–CH(CH₂Cl)–]–ₙ. The C=C becomes C–C; CH₂Cl is a side chain. Addition polymerization has 100% atom economy.' },
      { n: 6, f: 'Polyesters vs polyamides', b: 'Polyester: –COOH + –OH, ester link –COO–.\nPolyamide: –COOH + –NH₂, amide link –CONH–.\nBoth are condensation polymers that release water at each link. (HL only)' },
      { n: 7, f: 'How many water molecules are released when N monomer units form a condensation polymer chain?', b: 'N − 1 links, so N − 1 water molecules; the same number is needed to hydrolyse it completely. Proteins, polysaccharides and nucleic acids all form this way. (HL only)' },
    ]),

    // Structure 3 Classification of matter
    ...sub(S3, 'ib-dp-chemistry-structure-3-1', '3.1', [
      { n: 1, f: 'Period and group from an electron configuration', b: 'Period = outer occupied main level (n). Group = number of valence electrons for groups 1 and 2; group number minus 10 for groups 13 to 18. The block shows which sublevel is filling.' },
      { n: 2, f: 'First ionization energy', b: 'The energy, per mole, to take the outermost electron from each atom of a gaseous element in its ground state, giving gaseous 1+ ions.', src: PTABLE },
      { n: 3, f: 'Electron affinity', b: 'The energy change, per mole, as each gaseous atom picks up one electron to become a gaseous 1− ion.', src: PTABLE },
      { n: 4, f: 'Periodic trends: the explanation across a period', b: 'More protons, same main level, similar shielding → outer electrons pulled harder.', src: PTABLE },
      { n: 5, f: 'Periodic trends: the explanation down a group', b: 'Extra main level, more shielding → outer electrons further away and held less tightly.', src: PTABLE },
      { n: 6, f: 'Order the radii of N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺', b: 'N³⁻ > O²⁻ > F⁻ > Na⁺ > Mg²⁺. All have 10 electrons; more protons pull them in more tightly.' },
      { n: 7, f: 'Ocean acidification', b: 'Extra CO₂ dissolves → H₂CO₃ ⇌ H⁺ + HCO₃⁻ → pH falls; H⁺ removes CO₃²⁻ as HCO₃⁻, so less carbonate is available for shells.', src: PTABLE },
      { n: 8, f: 'Oxidation state of iodine in HIO₃', b: '(+1) + x + 3(−2) = 0, so x = +5. Write the sign first (+5); 5+ would be an ion charge.' },
      { n: 9, f: 'Why does first ionization energy dip from group 2 to 13 and from group 15 to 16?', b: '2 → 13: the electron removed is in a p sublevel, higher in energy than s.\n15 → 16: the electron removed is paired, and repulsion raises its energy. (HL only)' },
      { n: 10, f: 'Typical transition element properties, and why zinc is excluded', b: 'Variable oxidation states, high melting points, magnetic and catalytic properties, coloured compounds, complex ions. Caused by an incomplete d-sublevel; Zn is 3d¹⁰ in the atom and in Zn²⁺. (HL only)' },
      { n: 11, f: 'Why are transition element complexes coloured?', b: 'Ligands split the d orbitals into two sets; an electron absorbs visible light matching the gap and is promoted. The colour seen is the complementary colour. (HL only)' },
    ]),
    ...sub(S3, 'ib-dp-chemistry-structure-3-2', '3.2', [
      { n: 1, f: 'Homologous series', b: 'Same functional group and general formula; successive members differ by CH₂; similar chemistry and a gradual trend in physical properties.' },
      { n: 2, f: 'Effect of branching on boiling point', b: 'Branching lowers the boiling point: less surface contact, weaker London forces.', src: FGROUPS },
      { n: 3, f: 'Effect of the functional group on boiling point', b: 'For similar numbers of electrons, hydrogen bonding (–OH, –COOH) > dipole–dipole (C=O, C–X) > London forces only (alkanes).', src: FGROUPS },
      { n: 4, f: 'Name ClCH₂CH₂CH₂CH(CH₃)₂ and CH₂=CHCOCH₂CH₃', b: '1-chloro-4-methylpentane (lowest locants {1,4}).\nPent-1-en-3-one (C=O is C3 either way, so the C=C decides).' },
      { n: 5, f: 'Alcohol vs amine classification (primary, secondary, tertiary)', b: 'Count around the carbon vs around the nitrogen. So (CH₃)₃CNH₂ is a primary amine.', src: FGROUPS },
      { n: 6, f: 'Isomer vs homologue', b: 'Isomers share a molecular formula; homologues differ by CH₂.', src: FGROUPS },
      { n: 7, f: 'When does a compound show cis-trans isomerism?', b: 'When rotation is restricted (a C=C, or a C₃ or C₄ ring) and each of the two carbons carries two different groups. (HL only)' },
      { n: 8, f: 'Chiral carbon, enantiomers and a racemic mixture', b: 'A chiral carbon has four different groups. Enantiomers are non-superimposable mirror images that rotate plane-polarized light by equal angles in opposite directions. A racemic mixture has equal amounts: no net rotation. (HL only)' },
      { n: 9, f: 'IR: wavenumbers for C=O, alcohol O–H and carboxylic acid O–H', b: 'C=O: 1700–1750 cm⁻¹.\nAlcohol O–H: broad, 3200–3600 cm⁻¹.\nAcid O–H: very broad, 2500–3000 cm⁻¹. (HL only)' },
      { n: 10, f: 'Which vibrations are IR active?', b: 'Only those that change the dipole moment. N₂ and O₂ stretches and the CO₂ symmetric stretch are not; the CO₂ asymmetric stretch and bend are. (HL only)' },
      { n: 11, f: '¹H NMR: what the number of signals, integration and splitting tell you', b: 'Signals: number of hydrogen environments.\nIntegration: ratio of H in each.\nSplitting: n H on adjacent carbons give n + 1 peaks (ethyl: quartet + triplet). (HL only)' },
      { n: 12, f: 'Mass spectra of butan-1-ol and butan-2-ol (both M = 74): what distinguishes them?', b: 'A strong peak at m/z 31 (CH₂OH⁺) points to OH on the end carbon: butan-1-ol. A strong peak at 45 (CH₃CHOH⁺) points to OH on carbon 2: butan-2-ol. (HL only)' },
    ]),

    // Reactivity 1 What drives chemical reactions? (n from 101: see the id note above)
    ...sub(R1, 'ib-dp-chemistry-reactivity-1-1', '1.1', [
      { n: 101, f: 'Heat vs temperature', b: 'Energy on the move (J) vs a measure of mean particle kinetic energy (K). Heat depends on the amount of substance; temperature does not.', src: MEASURE },
      { n: 102, f: 'The thermometer rises during a reaction in solution. Exothermic or endothermic, and the sign of ΔH?', b: 'The thermometer reads the surroundings. They gained energy, so the system lost it: exothermic, ΔH negative.' },
      { n: 103, f: 'Standard enthalpy change, ΔH⦵', b: 'ΔH under standard conditions (100 kPa; values usually for 298 K) with every substance in its standard state, in kJ mol⁻¹.' },
      { n: 104, f: '0.0150 mol of limiting reactant raises 40.0 g of solution by 4.3 K. ΔH?', b: 'Q = mcΔT = 40.0 × 4.18 × 4.3 = 719 J = 0.719 kJ.\nΔH = −Q ÷ n = −0.719 ÷ 0.0150 = −47.9 kJ mol⁻¹.' },
      { n: 105, f: 'Why is an experimental ΔH usually less negative than the data value?', b: 'Energy is lost to the air and bench; energy warms the cup or can; combustion is incomplete; fuel evaporates; products are not in standard states.' },
      { n: 106, f: 'ΔH vs Ea on an energy profile', b: 'Gap between reactant and product levels vs gap from reactants up to the peak.', src: MEASURE },
    ]),
    ...sub(R1, 'ib-dp-chemistry-reactivity-1-2', '1.2', [
      { n: 101, f: 'Bond enthalpy', b: 'The energy absorbed when one mole of a particular covalent bond is broken in the gas phase; always positive. Average bond enthalpies are means over a range of compounds.' },
      { n: 102, f: 'CH₂=CHCH₃ + Cl₂ → CH₂ClCHClCH₃. C=C 614, Cl–Cl 242, C–C 346, C–Cl 324 kJ mol⁻¹. ΔH?', b: 'Broken: 614 + 242 = 856. Formed: 346 + 2 × 324 = 994.\nΔH = Σ(broken) − Σ(formed) = 856 − 994 = −138 kJ mol⁻¹.' },
      { n: 103, f: 'Why is a ΔH from bond enthalpies only an estimate?', b: 'The values are averages over many molecules, and they apply to gases, so intermolecular forces in liquids or solids are ignored.' },
      { n: 104, f: "Hess's law", b: 'ΔH for a reaction is the same whatever pathway links the initial and final states (conservation of energy). Reverse an equation: change the sign of ΔH; scale it: scale ΔH.' },
      { n: 105, f: 'Standard enthalpy of formation, and its value for an element', b: 'ΔH for making one mole of a substance from its elements, every species in its standard state. It is zero for an element in its standard state. (HL only)' },
      { n: 106, f: 'Calculating ΔH⦵ from formation data vs combustion data', b: 'Formation: Σ ΔHf⦵(products) − Σ ΔHf⦵(reactants).\nCombustion: Σ ΔHc⦵(reactants) − Σ ΔHc⦵(products). (HL only)' },
      { n: 107, f: 'Born–Haber: Li(s) → Li(g) +159; IE₁ +520; ½I₂ → I(g) +107; EA −295; lattice enthalpy +759 kJ mol⁻¹. ΔHf⦵ of LiI?', b: 'Elements to gaseous ions: 159 + 520 + 107 − 295 = +491.\nΔHf⦵ = 491 − 759 = −268 kJ mol⁻¹ (lattice enthalpy here is for separating the solid). (HL only)' },
    ]),
    ...sub(R1, 'ib-dp-chemistry-reactivity-1-3', '1.3', [
      { n: 101, f: 'Complete vs incomplete combustion of an organic fuel', b: 'Complete: excess oxygen; CO₂ and H₂O only; blue, clean flame.\nIncomplete: limited oxygen; carbon ends up as CO and/or C (soot); yellow, sooty flame; less energy per mole.' },
      { n: 102, f: 'Balanced equation for the complete combustion of propan-2-ol, C₃H₇OH', b: '2C₃H₇OH + 9O₂ → 6CO₂ + 8H₂O (3CO₂ + 4H₂O need 10 O atoms; subtract the 1 in the alcohol: 4½O₂ per molecule).' },
      { n: 103, f: 'Why is carbon monoxide dangerous?', b: 'It attaches to haemoglobin more tightly than oxygen, so the blood carries less oxygen; it has no colour or smell.' },
      { n: 104, f: 'Coal, crude oil and natural gas: energy per gram and CO₂ per unit of energy', b: 'Natural gas (mostly methane): highest energy per gram, lowest CO₂ per unit energy. Coal (mostly carbon): lowest energy per gram, highest CO₂ per unit energy. Crude oil in between.' },
      { n: 105, f: 'How do greenhouse gases warm the lower atmosphere?', b: 'The ground absorbs visible light and emits infrared. CO₂, H₂O and CH₄ absorb the infrared (their bonds vibrate) and re-emit it randomly, so part of it returns to the ground.' },
      { n: 106, f: 'Why is a biofuel rarely fully carbon neutral?', b: 'Its carbon was fixed recently by photosynthesis (6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂), but farming, fertiliser, processing and transport usually burn fossil fuels.' },
      { n: 107, f: 'Hydrogen fuel cell half-equations with an acidic electrolyte', b: 'Anode (negative, oxidation): H₂ → 2H⁺ + 2e⁻.\nCathode (positive, reduction): O₂ + 4H⁺ + 4e⁻ → 2H₂O. Overall 2H₂ + O₂ → 2H₂O.' },
    ]),
    ...sub(R1, 'ib-dp-chemistry-reactivity-1-4', '1.4', [
      { n: 101, f: 'Entropy, and the standard entropy of an element', b: 'A measure of how dispersed the matter and energy of a system are (J K⁻¹ mol⁻¹). S⦵ is positive for every pure substance above 0 K, elements included; a perfect crystal at 0 K has zero entropy. (HL only)' },
      { n: 102, f: 'When is ΔS of the system positive?', b: 'When the moles of gas increase (strongest effect); when a solid melts, a liquid boils or a solid sublimes; when a solid dissolves or substances mix; when a substance is heated. (HL only)' },
      { n: 103, f: 'Gibbs energy equation and its units', b: 'ΔG⦵ = ΔH⦵ − TΔS⦵, with ΔH and ΔG in kJ mol⁻¹, ΔS divided by 1000 to kJ K⁻¹ mol⁻¹, T in K. Spontaneous when ΔG is negative. (HL only)' },
      { n: 104, f: 'Spontaneity from the signs of ΔH and ΔS', b: 'ΔH −, ΔS +: at all temperatures.\nΔH +, ΔS −: never.\nΔH −, ΔS −: below T = ΔH/ΔS.\nΔH +, ΔS +: above T = ΔH/ΔS. (HL only)' },
      { n: 105, f: 'ΔH = +65.0 kJ mol⁻¹, ΔS = +160 J K⁻¹ mol⁻¹. When is the change spontaneous?', b: 'T = 65.0 ÷ 0.160 = 406 K. Both positive, so spontaneous above 406 K. (HL only)' },
      { n: 106, f: 'Link between ΔG⦵ and K', b: 'ΔG⦵ = −RT lnK (ΔG⦵ in J mol⁻¹, R = 8.31 J K⁻¹ mol⁻¹). Negative ΔG⦵ gives K > 1, products favoured; positive gives K < 1. At equilibrium ΔG = 0. (HL only)' },
      { n: 107, f: 'ΔG for a mixture that is not at equilibrium', b: 'ΔG = ΔG⦵ + RT lnQ. If Q < K, ΔG is negative and the forward reaction proceeds, even if ΔG⦵ is positive. (HL only)' },
    ]),

    // Reactivity 2 How much, how fast and how far?
    ...sub(R2, 'ib-dp-chemistry-reactivity-2-1', '2.1', [
      { n: 101, f: 'Limiting reactant', b: 'The reactant that is used up first. It caps the amount of product.', src: HOWMUCH },
      { n: 102, f: 'Theoretical yield', b: 'The amount of product calculated from the limiting reactant, assuming complete reaction and no losses.', src: HOWMUCH },
      { n: 103, f: 'Atom economy', b: 'Molar mass of the desired product as a percentage of the total molar mass of all reactants in the balanced equation; a green chemistry measure of efficiency.', src: HOWMUCH },
      { n: 104, f: '4Li + O₂ → 2Li₂O with 0.50 mol Li and 0.15 mol O₂. Which is limiting, and how much Li₂O forms?', b: 'Divide by coefficients: Li 0.50 ÷ 4 = 0.125; O₂ 0.15 ÷ 1 = 0.15. Lithium is limiting.\nLi₂O = 0.50 × 2/4 = 0.25 mol; 0.025 mol O₂ is left over.' },
      { n: 105, f: '2C₃H₆(g) + 9O₂(g) → 6CO₂(g) + 6H₂O(l). Volumes for 10 cm³ of propene?', b: 'Oxygen needed: 10 × 9/2 = 45 cm³. CO₂ made: 10 × 6/2 = 30 cm³. Liquid water takes up no gas volume.' },
      { n: 106, f: 'Percentage yield vs atom economy', b: 'Yield depends on how the reaction is carried out (experimental ÷ theoretical × 100). Atom economy is fixed by the equation, so better technique cannot change it.' },
    ]),
    ...sub(R2, 'ib-dp-chemistry-reactivity-2-2', '2.2', [
      { n: 101, f: 'Rate of reaction, and the instantaneous rate', b: 'Rate: how fast the concentration of a named reactant or product changes per unit time (mol dm⁻³ s⁻¹).\nInstantaneous rate: gradient of the tangent to the curve at that moment.' },
      { n: 102, f: 'The two conditions for a successful collision', b: 'Energy at least equal to the activation energy, Ea, and the proper orientation (collision geometry).' },
      { n: 103, f: 'Which factors change collision frequency only, and which change the fraction with E ≥ Ea?', b: 'Concentration, pressure, surface area: frequency only.\nTemperature: the fraction with E ≥ Ea (main effect), and frequency slightly.\nCatalyst: the fraction, because Ea is lower.' },
      { n: 104, f: 'Maxwell–Boltzmann: temperature vs catalyst', b: 'Temperature changes the curve; a catalyst moves the Ea line.', src: RATES },
      { n: 105, f: 'Kinetic vs thermodynamic stability', b: 'A high Ea makes a reaction slow; a positive or negative ΔH says nothing about speed. A high Ea lets a fuel be stored in air without igniting.' },
      { n: 106, f: 'An endothermic reaction has Ea = 140 kJ mol⁻¹ and ΔH = +35 kJ mol⁻¹. Ea of the reverse reaction?', b: 'Ea(reverse) = 140 − 35 = 105 kJ mol⁻¹.' },
      { n: 107, f: 'How are the orders in a rate equation found?', b: 'Only by experiment, never from the coefficients of the balanced equation. rate = k[A]ᵐ[B]ⁿ; overall order = m + n. (HL only)' },
      { n: 108, f: 'Mechanism: L + M → LM (slow); LM + M → LM₂ (fast). Rate equation?', b: 'rate = k[L][M]. Only one M is in the rate-determining (slow) step, so it is first order in M even though the overall equation has 2M. LM is an intermediate. (HL only)' },
      { n: 109, f: 'Intermediate vs transition state', b: 'Intermediate: made in one step and used in a later one; a trough on the profile; can be detected.\nTransition state: the highest-energy arrangement in one step; a peak; cannot be isolated. (HL only)' },
      { n: 110, f: 'Units of k for zero, first, second and third order overall', b: 'Zero: mol dm⁻³ s⁻¹. First: s⁻¹. Second: mol⁻¹ dm³ s⁻¹. Third: mol⁻² dm⁶ s⁻¹. (HL only)' },
      { n: 111, f: 'Arrhenius plot: what is plotted, and how are Ea and A found?', b: 'ln k against 1/T (K). Gradient = −Ea/R, so Ea = −gradient × 8.31 J mol⁻¹. The y-intercept is ln A. (HL only)' },
    ]),
    ...sub(R2, 'ib-dp-chemistry-reactivity-2-3', '2.3', [
      { n: 101, f: 'Features of a dynamic equilibrium', b: 'Closed system; forward and backward rates equal and not zero; concentrations constant (not necessarily equal); observable properties constant; it can be reached from either side.' },
      { n: 102, f: 'Equilibrium constant expression for 2N₂O(g) + 3O₂(g) ⇌ 4NO₂(g)', b: 'K = [NO₂]⁴ ÷ ([N₂O]²[O₂]³). Products on top; coefficients as powers.' },
      { n: 103, f: 'K for the forward reaction is 0.25. K for the reverse at the same temperature?', b: 'K(reverse) = 1 ÷ K(forward) = 4.0.' },
      { n: 104, f: 'Effect of heating on K for an exothermic forward reaction', b: 'K gets smaller and there is less product. Only temperature changes K; concentration and pressure move the position but leave K the same.' },
      { n: 105, f: 'Effect of a catalyst on an equilibrium', b: 'No shift in position and no change in K: it increases the forward and backward rates by the same factor, so equilibrium is reached faster.' },
      { n: 106, f: 'Q compared with K: which way does the reaction go?', b: 'Q < K: forward, making more products. Q = K: at equilibrium. Q > K: backward. Compare only at the same temperature. (HL only)' },
      { n: 107, f: '0.50 mol SO₂Cl₂ in 2.0 dm³ gives 0.10 mol Cl₂ at equilibrium (SO₂Cl₂ ⇌ SO₂ + Cl₂). K?', b: 'Equilibrium: SO₂Cl₂ 0.40 mol, SO₂ 0.10, Cl₂ 0.10. Concentrations 0.20, 0.050, 0.050 mol dm⁻³.\nK = (0.050 × 0.050) ÷ 0.20 = 0.0125. (HL only)' },
      { n: 108, f: 'ΔG⦵ = +10.0 kJ mol⁻¹ at 400 K. K?', b: 'lnK = −10 000 ÷ (8.31 × 400) = −3.01, so K = 0.0494. Positive ΔG⦵ and K < 1: reactants favoured. (HL only)' },
    ]),

    // Reactivity 3 What are the mechanisms of chemical change?
    ...sub(R3, 'ib-dp-chemistry-reactivity-3-1', '3.1', [
      { n: 101, f: 'Brønsted–Lowry acid and base, and a conjugate pair', b: 'Acid: proton (H⁺) donor. Base: proton acceptor.\nConjugate pair: two species whose formulas differ by a single H⁺, e.g. H₂PO₄⁻ / HPO₄²⁻.' },
      { n: 102, f: 'Amphiprotic vs amphoteric', b: 'Amphiprotic: can donate or accept a proton (H₂O, HSO₄⁻).\nAmphoteric: a substance, such as Al₂O₃, that reacts with both acids and bases.' },
      { n: 103, f: 'pH of 0.0040 mol dm⁻³ NaOH at 298 K', b: '[H⁺] = Kw ÷ [OH⁻] = 1.0 × 10⁻¹⁴ ÷ 0.0040 = 2.5 × 10⁻¹² mol dm⁻³. pH = 11.60' },
      { n: 104, f: 'Strong vs weak acids, with examples', b: 'Strong: completely ionized (HCl, HBr, HI, HNO₃, H₂SO₄).\nWeak: partially ionized, an equilibrium (carboxylic acids, H₂CO₃, HF). Strong is not the same as concentrated.' },
      { n: 105, f: 'Products of an acid with a carbonate, and with ammonia', b: 'Carbonate (or hydrogencarbonate): salt + water + CO₂.\nAmmonia: an ammonium salt only, e.g. HNO₃ + NH₃ → NH₄NO₃ (no water).' },
      { n: 106, f: 'Why is pure water above 298 K not pH 7, and is it still neutral?', b: 'Water’s ionization is endothermic, so Kw rises with temperature and the pH falls below 7. It is still neutral because [H⁺] = [OH⁻].' },
      { n: 107, f: 'Strong acid titrated with strong base: shape of the pH curve', b: 'Starts low, rises slowly while acid is in excess, then rises almost vertically (about pH 3 to 11) around the equivalence point at pH 7 (298 K), then levels off.' },
      { n: 108, f: 'Relationship between Ka and Kb for a conjugate pair', b: 'Ka × Kb = Kw, so pKa + pKb = 14.00 at 298 K. A weaker acid has a stronger conjugate base. (HL only)' },
      { n: 109, f: 'pH of 0.0800 mol dm⁻³ weak acid with pKa 4.87', b: '[H⁺] = √(Ka × c) = √(10⁻⁴·⁸⁷ × 0.0800) = 1.04 × 10⁻³ mol dm⁻³. pH = 2.98 (HL only)' },
      { n: 110, f: 'Is NH₄Br solution acidic, neutral or basic? Why?', b: 'Acidic: it comes from a strong acid and a weak base, and NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺. (HL only)' },
      { n: 111, f: 'pH of an acidic buffer, and its pH when [HA] = [A⁻]', b: 'pH = pKa + log₁₀([A⁻]/[HA]). Equal concentrations give pH = pKa. Dilution leaves the pH nearly unchanged but lowers the capacity. (HL only)' },
      { n: 112, f: 'How is an acid–base indicator chosen?', b: 'It changes colour near pH = pKa(HInd). Its range must sit inside the vertical section of the pH curve around the equivalence pH. Weak acid with weak base: no indicator is suitable. (HL only)' },
    ]),
    ...sub(R3, 'ib-dp-chemistry-reactivity-3-2', '3.2', [
      { n: 101, f: 'Oxidation and reduction (four definitions)', b: 'Oxidation: electrons lost, oxidation state rises, oxygen gained, hydrogen lost.\nReduction: electrons gained, oxidation state falls, oxygen lost, hydrogen gained.' },
      { n: 102, f: 'Cu²⁺ + Fe → Cu + Fe²⁺: oxidizing agent and reducing agent', b: 'Fe 0 → +2 is oxidized, so Fe is the reducing agent. Cu +2 → 0 is reduced, so Cu²⁺ is the oxidizing agent.' },
      { n: 103, f: 'Oxidation state of sulfur in HSO₃⁻', b: '+1 + x + 3(−2) = −1, so x = +4.' },
      { n: 104, f: 'Half-equation for manganate(VII) being reduced in acid', b: 'MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O. Charge: −1 + 8 − 5 = +2 on each side.' },
      { n: 105, f: 'Electrode signs in voltaic and electrolytic cells', b: 'Oxidation at the anode and reduction at the cathode in both.\nVoltaic: anode negative, cathode positive.\nElectrolytic: anode positive, cathode negative.' },
      { n: 106, f: 'What does the salt bridge do in a voltaic cell?', b: 'Anions move towards the anode half-cell and cations towards the cathode half-cell, keeping each solution electrically neutral and completing the circuit. Electrons travel only through the wire.' },
      { n: 107, f: 'Oxidizing a primary alcohol: aldehyde vs carboxylic acid', b: 'Aldehyde: distil it off as it forms (lower boiling point, no hydrogen bonding between its molecules).\nCarboxylic acid: reflux with excess oxidizing agent. A tertiary alcohol does not react.' },
      { n: 108, f: 'Standard hydrogen electrode', b: 'H⁺(aq) + e⁻ ⇌ ½H₂(g): platinum electrode, H₂ at 100 kPa, [H⁺] = 1.00 mol dm⁻³, 298 K. E⦵ = 0.00 V by convention. (HL only)' },
      { n: 109, f: 'Mg²⁺/Mg −2.37 V and Sn²⁺/Sn −0.14 V. E⦵cell and ΔG⦵ (F = 96 500 C mol⁻¹)?', b: 'E⦵cell = E⦵(cathode) − E⦵(anode) = −0.14 − (−2.37) = +2.23 V.\nΔG⦵ = −nFE⦵cell = −2 × 96 500 × 2.23 = −430 kJ mol⁻¹. (HL only)' },
      { n: 110, f: 'Electrolysis of concentrated vs dilute NaCl(aq) with inert electrodes', b: 'Both: hydrogen at the cathode.\nConcentrated: chlorine at the anode (NaOH forms).\nDilute: mainly oxygen at the anode. (HL only)' },
      { n: 111, f: 'Electroplating: what is the anode, the cathode and the electrolyte?', b: 'Cathode: the object to be plated (Mⁿ⁺ + ne⁻ → M). Anode: the plating metal (M → Mⁿ⁺ + ne⁻). Electrolyte: a solution of the plating metal’s ions. (HL only)' },
    ]),
    ...sub(R3, 'ib-dp-chemistry-reactivity-3-3', '3.3', [
      { n: 101, f: 'Radical, and homolytic fission', b: 'Radical: a species with an unpaired electron (Cl•, CH₃•).\nHomolytic fission: a bond splits evenly, one electron to each atom, giving two radicals (X₂ → 2X• with UV light or heat).' },
      { n: 102, f: 'How is homolytic fission shown with curly arrows?', b: 'Two single-barbed (fish-hook) arrows, each from the centre of the bond to one atom. Each shows one electron moving.' },
      { n: 103, f: 'Why do alkanes react only by radical substitution?', b: 'C–C and C–H bonds are strong (high Ea) and essentially non-polar, so there is no δ+ or δ− site for nucleophiles or electrophiles.' },
      { n: 104, f: 'Mechanism for an alkane RH with halogen X₂', b: 'Initiation: X₂ → 2X• (UV).\nPropagation: X• + RH → R• + HX; R• + X₂ → RX + X•.\nTermination: X• + X• → X₂; R• + X• → RX; R• + R• → R–R.' },
      { n: 105, f: 'Why does radical substitution give a mixture of products?', b: 'Further substitution (RX still has C–H bonds), hydrogens in different environments can all be replaced, and termination R• + R• gives a longer alkane.' },
      { n: 106, f: 'How many monochloro structural isomers does heptane give?', b: 'Four: heptane has four hydrogen environments (C1/C7, C2/C6, C3/C5, C4), giving 1-, 2-, 3- and 4-chloroheptane.' },
      { n: 107, f: 'Why does an alkane not decolourize bromine water in the dark?', b: 'Without UV light (or heat) Br₂ does not undergo homolytic fission, so no radicals form, and the non-polar alkane offers nothing for bromine to attack.' },
    ]),
    ...sub(R3, 'ib-dp-chemistry-reactivity-3-4', '3.4', [
      { n: 101, f: 'Nucleophile', b: 'A species that supplies both electrons of a new covalent bond. It can be neutral (H₂O, NH₃) or negative (OH⁻, CN⁻).' },
      { n: 102, f: 'Electrophile', b: 'A species that takes in both electrons of a new covalent bond. It can be neutral (HBr, Br₂) or positive (H⁺, NO₂⁺).' },
      { n: 103, f: 'Heterolytic fission', b: 'Bond breaking in which one fragment keeps the whole bonding pair, giving an anion and a cation; one double-barbed arrow. Example: (CH₃)₂CHBr → (CH₃)₂CH⁺ + Br⁻.' },
      { n: 104, f: '1-bromobutane + CN⁻: product', b: 'CH₃CH₂CH₂CH₂CN + Br⁻: pentanenitrile, because the CN carbon counts in the chain. Nucleophilic substitution; Br⁻ is the leaving group.' },
      { n: 105, f: 'Electrophilic addition to alkenes: reagents and products', b: 'X₂ → dihalogenoalkane. HX → halogenoalkane. Steam with an acid catalyst → alcohol. Example: but-2-ene + Br₂ → 2,3-dibromobutane.' },
      { n: 106, f: 'Lewis acid and Lewis base', b: 'Lewis acid: electron-pair acceptor (an electrophile). Lewis base: electron-pair donor (a nucleophile). In SnCl₄ + 2Cl⁻ → SnCl₆²⁻, Cl⁻ is the base. (HL only)' },
      { n: 107, f: 'SN1 vs SN2', b: 'SN2 (primary): one step, rate = k[RX][Nu], attack opposite the leaving group with inversion.\nSN1 (tertiary): two steps via a carbocation, rate = k[RX], not stereospecific. Secondary can react by both. (HL only)' },
      { n: 108, f: '[RX] is halved and [Nu] tripled. How does the rate change for SN2 and for SN1?', b: 'SN2: × 0.5 × 3 = × 1.5. SN1: × 0.5, because only [RX] is in its rate equation. (HL only)' },
      { n: 109, f: 'Why does rate follow RI > RBr > RCl in nucleophilic substitution?', b: 'C–I is the longest and weakest bond, and I⁻ is the best leaving group (largest, most stable ion). C–Cl is the most polar but the slowest. (HL only)' },
      { n: 110, f: 'Major product of HBr with an unsymmetrical alkene', b: 'The product from the more stable carbocation (tertiary > secondary > primary, from the positive inductive effect of alkyl groups). 2-methylhex-1-ene gives mainly 2-bromo-2-methylhexane. (HL only)' },
      { n: 111, f: 'Oxidation state of iron in [Fe(H₂O)₅(OH)]²⁺', b: 'x + 5(0) + (−1) = +2, so x = +3. Neutral ligands: H₂O, NH₃; anionic ligands: Cl⁻, OH⁻, CN⁻ (−1 each). (HL only)' },
    ]),
  ],
};
