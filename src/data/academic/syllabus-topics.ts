/**
 * OFFICIAL SYLLABUS TOPIC TAXONOMY — Cambridge Chemistry.
 *
 * Extracted from the awarding body's own syllabus PDFs (see sourceUrl and
 * verifiedOn per syllabus). Topic and subtopic names are reproduced as
 * Cambridge publishes them. NOTHING here is invented, renamed or merged.
 *
 * The three qualifications are SEPARATE academic structures. 0620 and 5070
 * happen to share topic names in the 2026-2028 series; they are still stored
 * independently and must never be collapsed into one list. 9701 is entirely
 * different (37 topics split across AS and A Level).
 *
 * Model: Board > Qualification > Subject > Topic > Subtopic.
 */
export interface Subtopic { number: string; name: string; slug: string }
export interface SyllabusTopic {
  number: number;
  name: string;
  slug: string;
  /** 'AS' or 'A' for 9701, which separates them. undefined elsewhere. */
  stage?: 'AS' | 'A';
  subtopics: readonly Subtopic[];
}
export interface SyllabusTopics {
  boardSlug: 'cambridge';
  qualificationSlug: string;
  subjectSlug: 'chemistry';
  code: string;
  officialTitle: string;
  /** Examination series this syllabus applies to. */
  series: string;
  source: string;
  sourceUrl: string;
  verifiedOn: string;
  topics: readonly SyllabusTopic[];
}

export const SYLLABUS_TOPICS: readonly SyllabusTopics[] = [
  {
    boardSlug: 'cambridge', qualificationSlug: 'igcse', subjectSlug: 'chemistry',
    code: '0620', officialTitle: 'Cambridge IGCSE Chemistry (0620)', series: '2026-2028',
    source: 'Cambridge Assessment International Education, official syllabus PDF',
    sourceUrl: 'https://www.cambridgeinternational.org/Images/697205-2026-2028-syllabus.pdf', verifiedOn: '2026-08-17',
    topics: [
      { number: 1, name: 'States of matter', slug: 'states-of-matter', subtopics: [{ number: '1.1', name: 'Solids, liquids and gases', slug: 'solids-liquids-and-gases' }, { number: '1.2', name: 'Diffusion', slug: 'diffusion' }] },
      { number: 2, name: 'Atoms, elements and compounds', slug: 'atoms-elements-and-compounds', subtopics: [{ number: '2.1', name: 'Elements, compounds and mixtures', slug: 'elements-compounds-and-mixtures' }, { number: '2.2', name: 'Atomic structure and the Periodic Table', slug: 'atomic-structure-and-the-periodic-table' }, { number: '2.3', name: 'Isotopes', slug: 'isotopes' }, { number: '2.4', name: 'Ions and ionic bonds', slug: 'ions-and-ionic-bonds' }, { number: '2.5', name: 'Simple molecules and covalent bonds', slug: 'simple-molecules-and-covalent-bonds' }, { number: '2.6', name: 'Giant covalent structures', slug: 'giant-covalent-structures' }, { number: '2.7', name: 'Metallic bonding', slug: 'metallic-bonding' }] },
      { number: 3, name: 'Stoichiometry', slug: 'stoichiometry', subtopics: [{ number: '3.1', name: 'Formulae', slug: 'formulae' }, { number: '3.2', name: 'Relative masses of atoms and molecules', slug: 'relative-masses-of-atoms-and-molecules' }, { number: '3.3', name: 'The mole and the Avogadro constant', slug: 'the-mole-and-the-avogadro-constant' }] },
      { number: 4, name: 'Electrochemistry', slug: 'electrochemistry', subtopics: [{ number: '4.1', name: 'Electrolysis', slug: 'electrolysis' }, { number: '4.2', name: 'Hydrogen', slug: 'hydrogen' }] },
      { number: 5, name: 'Chemical energetics', slug: 'chemical-energetics', subtopics: [{ number: '5.1', name: 'Exothermic and endothermic reactions', slug: 'exothermic-and-endothermic-reactions' }] },
      { number: 6, name: 'Chemical reactions', slug: 'chemical-reactions', subtopics: [{ number: '6.1', name: 'Physical and chemical changes', slug: 'physical-and-chemical-changes' }, { number: '6.2', name: 'Rate of reaction', slug: 'rate-of-reaction' }, { number: '6.3', name: 'Reversible reactions and equilibrium', slug: 'reversible-reactions-and-equilibrium' }, { number: '6.4', name: 'Redox', slug: 'redox' }] },
      { number: 7, name: 'Acids, bases and salts', slug: 'acids-bases-and-salts', subtopics: [{ number: '7.1', name: 'The characteristic properties of acids and bases', slug: 'the-characteristic-properties-of-acids-and-bases' }, { number: '7.2', name: 'Oxides', slug: 'oxides' }, { number: '7.3', name: 'Preparation of salts', slug: 'preparation-of-salts' }] },
      { number: 8, name: 'The Periodic Table', slug: 'the-periodic-table', subtopics: [{ number: '8.1', name: 'Arrangement of elements', slug: 'arrangement-of-elements' }, { number: '8.2', name: 'Group I properties', slug: 'group-i-properties' }, { number: '8.3', name: 'Group VII properties', slug: 'group-vii-properties' }, { number: '8.4', name: 'Transition elements', slug: 'transition-elements' }, { number: '8.5', name: 'Noble gases', slug: 'noble-gases' }] },
      { number: 9, name: 'Metals', slug: 'metals', subtopics: [{ number: '9.1', name: 'Properties of metals', slug: 'properties-of-metals' }, { number: '9.2', name: 'Uses of metals', slug: 'uses-of-metals' }, { number: '9.3', name: 'Alloys and their properties', slug: 'alloys-and-their-properties' }, { number: '9.4', name: 'Reactivity series', slug: 'reactivity-series' }, { number: '9.5', name: 'Corrosion of metals', slug: 'corrosion-of-metals' }, { number: '9.6', name: 'Extraction of metals', slug: 'extraction-of-metals' }] },
      { number: 10, name: 'Chemistry of the environment', slug: 'chemistry-of-the-environment', subtopics: [{ number: '10.1', name: 'Water', slug: 'water' }, { number: '10.2', name: 'Fertilisers', slug: 'fertilisers' }, { number: '10.3', name: 'Air quality and climate', slug: 'air-quality-and-climate' }] },
      { number: 11, name: 'Organic chemistry', slug: 'organic-chemistry', subtopics: [{ number: '11.1', name: 'Formulae, functional groups and terminology', slug: 'formulae-functional-groups-and-terminology' }, { number: '11.2', name: 'Naming organic compounds', slug: 'naming-organic-compounds' }, { number: '11.3', name: 'Fuels', slug: 'fuels' }, { number: '11.4', name: 'Alkanes', slug: 'alkanes' }, { number: '11.5', name: 'Alkenes', slug: 'alkenes' }, { number: '11.6', name: 'Alcohols', slug: 'alcohols' }, { number: '11.7', name: 'Carboxylic acids', slug: 'carboxylic-acids' }, { number: '11.8', name: 'Polymers', slug: 'polymers' }] },
      { number: 12, name: 'Experimental techniques and chemical analysis', slug: 'experimental-techniques-and-chemical-analysis', subtopics: [{ number: '12.1', name: 'Experimental design', slug: 'experimental-design' }, { number: '12.2', name: 'Acid', slug: 'acid' }, { number: '12.3', name: 'Chromatography', slug: 'chromatography' }, { number: '12.4', name: 'Separation and purification', slug: 'separation-and-purification' }, { number: '12.5', name: 'Identification of ions and gases', slug: 'identification-of-ions-and-gases' }] },
    ],
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'o-level', subjectSlug: 'chemistry',
    code: '5070', officialTitle: 'Cambridge O Level Chemistry (5070)', series: '2026-2028',
    source: 'Cambridge Assessment International Education, official syllabus PDF',
    sourceUrl: 'https://www.cambridgeinternational.org/Images/697326-2026-2028-syllabus.pdf', verifiedOn: '2026-08-17',
    topics: [
      { number: 1, name: 'States of matter', slug: 'states-of-matter', subtopics: [{ number: '1.1', name: 'Solids, liquids and gases', slug: 'solids-liquids-and-gases' }, { number: '1.2', name: 'Diffusion', slug: 'diffusion' }] },
      { number: 2, name: 'Atoms, elements and compounds', slug: 'atoms-elements-and-compounds', subtopics: [{ number: '2.1', name: 'Elements, compounds and mixtures', slug: 'elements-compounds-and-mixtures' }, { number: '2.2', name: 'Atomic structure and the Periodic Table', slug: 'atomic-structure-and-the-periodic-table' }, { number: '2.3', name: 'Isotopes', slug: 'isotopes' }, { number: '2.4', name: 'Ion and ionic bonds', slug: 'ion-and-ionic-bonds' }, { number: '2.5', name: 'Simple molecules and covalent bonds', slug: 'simple-molecules-and-covalent-bonds' }, { number: '2.6', name: 'Giant covalent structures', slug: 'giant-covalent-structures' }, { number: '2.7', name: 'Metallic bonding', slug: 'metallic-bonding' }] },
      { number: 3, name: 'Stoichiometry', slug: 'stoichiometry', subtopics: [{ number: '3.1', name: 'Formulae', slug: 'formulae' }, { number: '3.2', name: 'Relative masses of atoms and molecules', slug: 'relative-masses-of-atoms-and-molecules' }, { number: '3.3', name: 'The mole and the Avogadro constant', slug: 'the-mole-and-the-avogadro-constant' }] },
      { number: 4, name: 'Electrochemistry', slug: 'electrochemistry', subtopics: [{ number: '4.1', name: 'Electrolysis', slug: 'electrolysis' }, { number: '4.2', name: 'Hydrogen', slug: 'hydrogen' }] },
      { number: 5, name: 'Chemical energetics', slug: 'chemical-energetics', subtopics: [{ number: '5.1', name: 'Exothermic and endothermic reactions', slug: 'exothermic-and-endothermic-reactions' }] },
      { number: 6, name: 'Chemical reactions', slug: 'chemical-reactions', subtopics: [{ number: '6.1', name: 'Physical and chemical changes', slug: 'physical-and-chemical-changes' }, { number: '6.2', name: 'Rate of reaction', slug: 'rate-of-reaction' }, { number: '6.3', name: 'Reversible reactions and equilibrium', slug: 'reversible-reactions-and-equilibrium' }, { number: '6.4', name: 'Redox', slug: 'redox' }] },
      { number: 7, name: 'Acids, bases and salts', slug: 'acids-bases-and-salts', subtopics: [{ number: '7.1', name: 'The characteristic properties of acids and bases', slug: 'the-characteristic-properties-of-acids-and-bases' }, { number: '7.2', name: 'Oxides', slug: 'oxides' }, { number: '7.3', name: 'Preparation of salts', slug: 'preparation-of-salts' }] },
      { number: 8, name: 'The Periodic Table', slug: 'the-periodic-table', subtopics: [{ number: '8.1', name: 'Arrangement of elements', slug: 'arrangement-of-elements' }, { number: '8.2', name: 'Group I properties', slug: 'group-i-properties' }, { number: '8.3', name: 'Group VII properties', slug: 'group-vii-properties' }, { number: '8.4', name: 'Transition elements', slug: 'transition-elements' }, { number: '8.5', name: 'Noble gases', slug: 'noble-gases' }] },
      { number: 9, name: 'Metals', slug: 'metals', subtopics: [{ number: '9.1', name: 'Properties of metals', slug: 'properties-of-metals' }, { number: '9.2', name: 'Uses of metals', slug: 'uses-of-metals' }, { number: '9.3', name: 'Alloys and their properties', slug: 'alloys-and-their-properties' }, { number: '9.4', name: 'Reactivity series', slug: 'reactivity-series' }, { number: '9.5', name: 'Corrosion of metals', slug: 'corrosion-of-metals' }, { number: '9.6', name: 'Extraction of metals', slug: 'extraction-of-metals' }] },
      { number: 10, name: 'Chemistry of the environment', slug: 'chemistry-of-the-environment', subtopics: [{ number: '10.1', name: 'Water', slug: 'water' }, { number: '10.2', name: 'Fertilisers', slug: 'fertilisers' }, { number: '10.3', name: 'Air quality and climate', slug: 'air-quality-and-climate' }] },
      { number: 11, name: 'Organic chemistry', slug: 'organic-chemistry', subtopics: [{ number: '11.1', name: 'Formulae, functional groups and terminology', slug: 'formulae-functional-groups-and-terminology' }, { number: '11.2', name: 'Naming organic compounds', slug: 'naming-organic-compounds' }, { number: '11.3', name: 'Fuels', slug: 'fuels' }, { number: '11.4', name: 'Alkanes', slug: 'alkanes' }, { number: '11.5', name: 'Alkenes', slug: 'alkenes' }, { number: '11.6', name: 'Alcohols', slug: 'alcohols' }, { number: '11.7', name: 'Carboxylic acids', slug: 'carboxylic-acids' }, { number: '11.8', name: 'Polymers', slug: 'polymers' }] },
      { number: 12, name: 'Experimental techniques and chemical analysis', slug: 'experimental-techniques-and-chemical-analysis', subtopics: [{ number: '12.1', name: 'Experimental design', slug: 'experimental-design' }, { number: '12.2', name: 'Acid', slug: 'acid' }, { number: '12.3', name: 'Chromatography', slug: 'chromatography' }, { number: '12.4', name: 'Separation and purification', slug: 'separation-and-purification' }, { number: '12.5', name: 'Identification of ions and gases', slug: 'identification-of-ions-and-gases' }] },
    ],
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'a-level', subjectSlug: 'chemistry',
    code: '9701', officialTitle: 'Cambridge International AS & A Level Chemistry (9701)', series: '2025-2027',
    source: 'Cambridge Assessment International Education, official syllabus PDF',
    sourceUrl: 'https://www.cambridgeinternational.org/Images/664563-2025-2027-syllabus.pdf', verifiedOn: '2026-08-17',
    topics: [
      { number: 1, name: 'Atomic structure', slug: 'atomic-structure', stage: 'AS', subtopics: [{ number: '1.1', name: 'Particles in the atom and atomic radius', slug: 'particles-in-the-atom-and-atomic-radius' }, { number: '1.2', name: 'Isotopes', slug: 'isotopes' }, { number: '1.3', name: 'Electrons, energy levels and atomic orbitals', slug: 'electrons-energy-levels-and-atomic-orbitals' }, { number: '1.4', name: 'Ionisation energy', slug: 'ionisation-energy' }] },
      { number: 2, name: 'Atoms, molecules and stoichiometry', slug: 'atoms-molecules-and-stoichiometry', stage: 'AS', subtopics: [{ number: '2.1', name: 'Relative masses of atoms and molecules', slug: 'relative-masses-of-atoms-and-molecules' }, { number: '2.2', name: 'The mole and the Avogadro constant', slug: 'the-mole-and-the-avogadro-constant' }, { number: '2.3', name: 'Formulas', slug: 'formulas' }, { number: '2.4', name: 'Reacting masses and volumes (of solutions and gases)', slug: 'reacting-masses-and-volumes-of-solutions-and-gases' }] },
      { number: 3, name: 'Chemical bonding', slug: 'chemical-bonding', stage: 'AS', subtopics: [{ number: '3.1', name: 'Electronegativity and bonding', slug: 'electronegativity-and-bonding' }, { number: '3.2', name: 'Ionic bonding', slug: 'ionic-bonding' }, { number: '3.3', name: 'Metallic bonding', slug: 'metallic-bonding' }, { number: '3.4', name: 'Covalent bonding and coordinate (dative covalent) bonding', slug: 'covalent-bonding-and-coordinate-dative-covalent-bonding' }, { number: '3.5', name: 'Shapes of molecules', slug: 'shapes-of-molecules' }, { number: '3.6', name: 'Intermolecular forces, electronegativity and bond propertie', slug: 'intermolecular-forces-electronegativity-and-bond-propertie' }, { number: '3.7', name: 'Dot-and-cross diagrams', slug: 'dot-and-cross-diagrams' }] },
      { number: 4, name: 'States of matter', slug: 'states-of-matter', stage: 'AS', subtopics: [{ number: '4.1', name: 'The gaseous state', slug: 'the-gaseous-state' }, { number: '4.2', name: 'Bonding and structure', slug: 'bonding-and-structure' }] },
      { number: 5, name: 'Chemical energetics', slug: 'chemical-energetics', stage: 'AS', subtopics: [{ number: '5.1', name: 'Enthalpy change,', slug: 'enthalpy-change' }, { number: '5.2', name: 'Hess', slug: 'hess' }] },
      { number: 6, name: 'Electrochemistry', slug: 'electrochemistry', stage: 'AS', subtopics: [{ number: '6.1', name: 'Redox processes', slug: 'redox-processes' }] },
      { number: 7, name: 'Equilibria', slug: 'equilibria', stage: 'AS', subtopics: [{ number: '7.1', name: 'Chemical equilibria', slug: 'chemical-equilibria' }] },
      { number: 8, name: 'Reaction kinetics', slug: 'reaction-kinetics', stage: 'AS', subtopics: [{ number: '8.1', name: 'Rate of reaction', slug: 'rate-of-reaction' }, { number: '8.2', name: 'Effect of temperature on reaction rates and the concept of', slug: 'effect-of-temperature-on-reaction-rates-and-the-concept-of' }, { number: '8.3', name: 'Homogeneous and heterogeneous catalysts', slug: 'homogeneous-and-heterogeneous-catalysts' }] },
      { number: 9, name: 'The Periodic Table: chemical periodicity', slug: 'the-periodic-table-chemical-periodicity', stage: 'AS', subtopics: [{ number: '9.1', name: 'Periodicity of physical properties of the elements in Perio', slug: 'periodicity-of-physical-properties-of-the-elements-in-perio' }, { number: '9.2', name: 'Periodicity of chemical properties of the elements in Perio', slug: 'periodicity-of-chemical-properties-of-the-elements-in-perio' }, { number: '9.3', name: 'Chemical periodicity of other elements', slug: 'chemical-periodicity-of-other-elements' }] },
      { number: 10, name: 'Group 2', slug: 'group-2', stage: 'AS', subtopics: [{ number: '10.1', name: 'Similarities and trends in the properties of the Group 2 me', slug: 'similarities-and-trends-in-the-properties-of-the-group-2-me' }] },
      { number: 11, name: 'Group 17', slug: 'group-17', stage: 'AS', subtopics: [{ number: '11.1', name: 'Physical properties of the Group 17 elements', slug: 'physical-properties-of-the-group-17-elements' }, { number: '11.2', name: 'The chemical properties of the halogen elements and the hyd', slug: 'the-chemical-properties-of-the-halogen-elements-and-the-hyd' }, { number: '11.3', name: 'Some reactions of the halide ions', slug: 'some-reactions-of-the-halide-ions' }, { number: '11.4', name: 'The reactions of chlorine', slug: 'the-reactions-of-chlorine' }] },
      { number: 12, name: 'Nitrogen and sulfur', slug: 'nitrogen-and-sulfur', stage: 'AS', subtopics: [{ number: '12.1', name: 'Nitrogen and sulfur', slug: 'nitrogen-and-sulfur' }] },
      { number: 13, name: 'An introduction to AS Level organic chemistry', slug: 'an-introduction-to-as-level-organic-chemistry', stage: 'AS', subtopics: [{ number: '13.1', name: 'Formulas, functional groups and the naming of organic compo', slug: 'formulas-functional-groups-and-the-naming-of-organic-compo' }, { number: '13.2', name: 'Characteristic organic reactions', slug: 'characteristic-organic-reactions' }, { number: '13.3', name: 'Shapes of organic molecules', slug: 'shapes-of-organic-molecules' }, { number: '13.4', name: 'Isomerism', slug: 'isomerism' }] },
      { number: 14, name: 'Hydrocarbons', slug: 'hydrocarbons', stage: 'AS', subtopics: [{ number: '14.1', name: 'Alkanes', slug: 'alkanes' }, { number: '14.2', name: 'Alkenes', slug: 'alkenes' }] },
      { number: 15, name: 'Halogen compounds', slug: 'halogen-compounds', stage: 'AS', subtopics: [{ number: '15.1', name: 'Halogenoalkanes', slug: 'halogenoalkanes' }] },
      { number: 16, name: 'Hydroxy compounds', slug: 'hydroxy-compounds', stage: 'AS', subtopics: [{ number: '16.1', name: 'Alcohols', slug: 'alcohols' }] },
      { number: 17, name: 'Carbonyl compounds', slug: 'carbonyl-compounds', stage: 'AS', subtopics: [{ number: '17.1', name: 'Aldehydes and ketones', slug: 'aldehydes-and-ketones' }] },
      { number: 18, name: 'Carboxylic acids and derivatives', slug: 'carboxylic-acids-and-derivatives', stage: 'AS', subtopics: [{ number: '18.1', name: 'Carboxylic acids', slug: 'carboxylic-acids' }, { number: '18.2', name: 'Esters', slug: 'esters' }] },
      { number: 19, name: 'Nitrogen compounds', slug: 'nitrogen-compounds', stage: 'AS', subtopics: [{ number: '19.1', name: 'Primary amines', slug: 'primary-amines' }, { number: '19.2', name: 'Nitriles and hydroxynitriles', slug: 'nitriles-and-hydroxynitriles' }] },
      { number: 20, name: 'Polymerisation', slug: 'polymerisation', stage: 'AS', subtopics: [{ number: '20.1', name: 'Addition polymerisation', slug: 'addition-polymerisation' }] },
      { number: 21, name: 'Organic synthesis', slug: 'organic-synthesis', stage: 'AS', subtopics: [{ number: '21.1', name: 'Organic synthesis', slug: 'organic-synthesis' }] },
      { number: 22, name: 'Analytical techniques', slug: 'analytical-techniques', stage: 'AS', subtopics: [{ number: '22.1', name: 'Infrared spectroscopy', slug: 'infrared-spectroscopy' }, { number: '22.2', name: 'Mass spectrometry', slug: 'mass-spectrometry' }] },
      { number: 23, name: 'Chemical energetics', slug: 'chemical-energetics', stage: 'A', subtopics: [{ number: '23.1', name: 'Lattice energy and Born-Haber cycles', slug: 'lattice-energy-and-born-haber-cycles' }, { number: '23.2', name: 'Enthalpies of solution and hydration', slug: 'enthalpies-of-solution-and-hydration' }, { number: '23.3', name: 'Entropy change,', slug: 'entropy-change' }, { number: '23.4', name: 'Gibbs free energy change,', slug: 'gibbs-free-energy-change' }] },
      { number: 24, name: 'Electrochemistry', slug: 'electrochemistry', stage: 'A', subtopics: [{ number: '24.1', name: 'Electrolysis', slug: 'electrolysis' }, { number: '24.2', name: 'Standard electrode potentials E', slug: 'standard-electrode-potentials-e' }] },
      { number: 25, name: 'Equilibria', slug: 'equilibria', stage: 'A', subtopics: [{ number: '25.1', name: 'Acids and bases', slug: 'acids-and-bases' }, { number: '25.2', name: 'Partition coefficients', slug: 'partition-coefficients' }] },
      { number: 26, name: 'Reaction kinetics', slug: 'reaction-kinetics', stage: 'A', subtopics: [{ number: '26.1', name: 'Simple rate equations, orders of reaction and rate constant', slug: 'simple-rate-equations-orders-of-reaction-and-rate-constant' }, { number: '26.2', name: 'Homogeneous and heterogeneous catalysts', slug: 'homogeneous-and-heterogeneous-catalysts' }] },
      { number: 27, name: 'Group 2', slug: 'group-2', stage: 'A', subtopics: [{ number: '27.1', name: 'Similarities and trends in the properties of the Group 2 me', slug: 'similarities-and-trends-in-the-properties-of-the-group-2-me' }] },
      { number: 28, name: 'Chemistry of transition elements', slug: 'chemistry-of-transition-elements', stage: 'A', subtopics: [{ number: '28.1', name: 'General physical and chemical properties of the first row o', slug: 'general-physical-and-chemical-properties-of-the-first-row-o' }, { number: '28.2', name: 'General characteristic chemical properties of the first set', slug: 'general-characteristic-chemical-properties-of-the-first-set' }, { number: '28.3', name: 'Colour of complexes', slug: 'colour-of-complexes' }, { number: '28.4', name: 'Stereoisomerism in transition element complexes', slug: 'stereoisomerism-in-transition-element-complexes' }, { number: '28.5', name: 'Stability constants, Kstab', slug: 'stability-constants-kstab' }] },
      { number: 29, name: 'An introduction to A Level organic chemistry', slug: 'an-introduction-to-a-level-organic-chemistry', stage: 'A', subtopics: [{ number: '29.1', name: 'Formulas, functional groups and the naming of organic compo', slug: 'formulas-functional-groups-and-the-naming-of-organic-compo' }, { number: '29.2', name: 'Characteristic organic reactions', slug: 'characteristic-organic-reactions' }, { number: '29.3', name: 'Shapes of aromatic organic molecules', slug: 'shapes-of-aromatic-organic-molecules' }, { number: '29.4', name: 'Isomerism', slug: 'isomerism' }] },
      { number: 30, name: 'Hydrocarbons', slug: 'hydrocarbons', stage: 'A', subtopics: [{ number: '30.1', name: 'Arenes', slug: 'arenes' }] },
      { number: 31, name: 'Halogen compounds', slug: 'halogen-compounds', stage: 'A', subtopics: [{ number: '31.1', name: 'Halogen compounds', slug: 'halogen-compounds' }] },
      { number: 32, name: 'Hydroxy compounds', slug: 'hydroxy-compounds', stage: 'A', subtopics: [{ number: '32.1', name: 'Alcohols', slug: 'alcohols' }, { number: '32.2', name: 'Phenol', slug: 'phenol' }] },
      { number: 33, name: 'Carboxylic acids and derivatives', slug: 'carboxylic-acids-and-derivatives', stage: 'A', subtopics: [{ number: '33.1', name: 'Carboxylic acids', slug: 'carboxylic-acids' }, { number: '33.2', name: 'Esters', slug: 'esters' }, { number: '33.3', name: 'Acyl chlorides', slug: 'acyl-chlorides' }] },
      { number: 34, name: 'Nitrogen compounds', slug: 'nitrogen-compounds', stage: 'A', subtopics: [{ number: '34.1', name: 'Primary and secondary amines', slug: 'primary-and-secondary-amines' }, { number: '34.2', name: 'Phenylamine and azo compounds', slug: 'phenylamine-and-azo-compounds' }, { number: '34.3', name: 'Amides', slug: 'amides' }, { number: '34.4', name: 'Amino acids', slug: 'amino-acids' }] },
      { number: 35, name: 'Polymerisation', slug: 'polymerisation', stage: 'A', subtopics: [{ number: '35.1', name: 'Condensation polymerisation', slug: 'condensation-polymerisation' }, { number: '35.2', name: 'Predicting the type of polymerisation', slug: 'predicting-the-type-of-polymerisation' }, { number: '35.3', name: 'Degradable polymers', slug: 'degradable-polymers' }] },
      { number: 36, name: 'Organic synthesis', slug: 'organic-synthesis', stage: 'A', subtopics: [{ number: '36.1', name: 'Organic synthesis', slug: 'organic-synthesis' }] },
      { number: 37, name: 'Analytical techniques', slug: 'analytical-techniques', stage: 'A', subtopics: [{ number: '37.1', name: 'Thin-layer chromatography', slug: 'thin-layer-chromatography' }, { number: '37.2', name: 'Gas/liquid chromatography', slug: 'gas-liquid-chromatography' }, { number: '37.3', name: 'Carbon-13 NMR spectroscopy', slug: 'carbon-13-nmr-spectroscopy' }, { number: '37.4', name: 'Proton (1H) NMR spectroscopy', slug: 'proton-1h-nmr-spectroscopy' }] },
    ],
  },
] as const;

export const topicsFor = (qualificationSlug: string): SyllabusTopics | undefined =>
  SYLLABUS_TOPICS.find((s) => s.qualificationSlug === qualificationSlug && s.subjectSlug === 'chemistry');

/** Total official topics across the three approved Chemistry qualifications. */
export const topicCount = () =>
  SYLLABUS_TOPICS.reduce((n, s) => n + s.topics.length, 0);

