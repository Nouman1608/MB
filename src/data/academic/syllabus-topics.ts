/**
 * OFFICIAL SYLLABUS TOPIC TAXONOMY — Cambridge Chemistry.
 *
 * Extracted from the awarding body's syllabus PDFs. Topic and subtopic names
 * are reproduced exactly as Cambridge publishes them. Nothing is invented,
 * renamed or merged.
 *
 * VERSIONING: syllabuses are stored per series and never overwritten. Adding a
 * new series means adding an entry, not editing one. `status` marks which is
 * current; only 'current' is used for public structure.
 *
 * SEPARATION: 0620 and 5070 share topic NAMES in 2026-2028 but are different
 * qualifications with different requirements — 0620 is tiered Core/Extended,
 * 5070 is not. 9701 is a different structure again, with AS and A Level stages
 * kept distinct by stage-qualified slugs.
 */
export type SyllabusStatus = 'current' | 'future' | 'superseded';

export interface Subtopic {
  number: string;
  name: string;
  slug: string;
  /**
   * 0620 only. Which tier the subtopic's outcomes sit in, read from the
   * syllabus table's Core / Supplement columns.
   *   'core'       all outcomes in the Core column
   *   'supplement' all outcomes in the Supplement column (Extended only)
   *   'both'       outcomes split across the two columns
   * Set ONLY where the printed table has been inspected visually.
   */
  tier?: 'core' | 'supplement' | 'both';
  /** True where `tier` was confirmed against the rendered syllabus page. */
  tierVerified?: boolean;
}

export interface SyllabusTopic {
  number: number;
  name: string;
  /** Unique within the syllabus. Stage-qualified for 9701 (as-/a-). */
  slug: string;
  /** 9701 only: which stage this topic belongs to. */
  stage?: 'AS' | 'A';
  subtopics: readonly Subtopic[];
}

export interface SyllabusVersion {
  boardSlug: 'cambridge';
  qualificationSlug: string;
  /**
   * Phase 11: widened from the literal 'chemistry' to any registered
   * canonical subject slug (see src/data/academic/subjects.ts), so this file
   * can hold more than one subject's topic taxonomy. Every reader
   * (topicsFor(), the coverage dashboard, the hub template) must key off
   * BOTH qualificationSlug and subjectSlug together — never qualification
   * alone, since two different subjects legitimately share qualification
   * slugs like 'igcse'.
   */
  subjectSlug: string;
  syllabusCode: string;
  syllabusSeries: string;
  effectiveFrom: string;
  effectiveTo: string;
  status: SyllabusStatus;
  /** True where the syllabus splits outcomes into tiers (0620 Core/Extended). */
  tiered: boolean;
  source: string;
  sourceUrl: string;
  verifiedDate: string;
  notes: string;
  topics: readonly SyllabusTopic[];
}

export const SYLLABUS_VERSIONS: readonly SyllabusVersion[] = [
  {
    boardSlug: 'cambridge', qualificationSlug: 'igcse', subjectSlug: 'chemistry',
    syllabusCode: '0620', syllabusSeries: '2026-2028',
    effectiveFrom: '2026', effectiveTo: '2028', status: 'current',
    tiered: true,
    source: 'Cambridge Assessment International Education — official syllabus PDF',
    sourceUrl: 'https://www.cambridgeinternational.org/Images/697205-2026-2028-syllabus.pdf', verifiedDate: '2026-08-17',
    notes: 'Tiered: Core and Extended. Extended = Core + Supplement. Any resource must state which tier an outcome belongs to.',
    topics: [
      { number: 1, name: 'States of matter', slug: 'states-of-matter', subtopics: [{ number: '1.1', name: 'Solids, liquids and gases', slug: 'solids-liquids-and-gases', tier: 'both', tierVerified: true }, { number: '1.2', name: 'Diffusion', slug: 'diffusion', tier: 'both', tierVerified: true }] },
      { number: 2, name: 'Atoms, elements and compounds', slug: 'atoms-elements-and-compounds', subtopics: [{ number: '2.1', name: 'Elements, compounds and mixtures', slug: 'elements-compounds-and-mixtures', tier: 'core', tierVerified: true }, { number: '2.2', name: 'Atomic structure and the Periodic Table', slug: 'atomic-structure-and-the-periodic-table', tier: 'core', tierVerified: true }, { number: '2.3', name: 'Isotopes', slug: 'isotopes', tier: 'both', tierVerified: true }, { number: '2.4', name: 'Ions and ionic bonds', slug: 'ions-and-ionic-bonds', tier: 'both', tierVerified: true }, { number: '2.5', name: 'Simple molecules and covalent bonds', slug: 'simple-molecules-and-covalent-bonds', tier: 'both', tierVerified: true }, { number: '2.6', name: 'Giant covalent structures', slug: 'giant-covalent-structures', tier: 'both', tierVerified: true }, { number: '2.7', name: 'Metallic bonding', slug: 'metallic-bonding', tier: 'supplement', tierVerified: true }] },
      { number: 3, name: 'Stoichiometry', slug: 'stoichiometry', subtopics: [{ number: '3.1', name: 'Formulae', slug: 'formulae', tier: 'both', tierVerified: true }, { number: '3.2', name: 'Relative masses of atoms and molecules', slug: 'relative-masses-of-atoms-and-molecules', tier: 'core', tierVerified: true }, { number: '3.3', name: 'The mole and the Avogadro constant', slug: 'the-mole-and-the-avogadro-constant', tier: 'both', tierVerified: true }] },
      { number: 4, name: 'Electrochemistry', slug: 'electrochemistry', subtopics: [{ number: '4.1', name: 'Electrolysis', slug: 'electrolysis', tier: 'both', tierVerified: true }, { number: '4.2', name: 'Hydrogen–oxygen fuel cells', slug: 'hydrogen-oxygen-fuel-cells', tier: 'both', tierVerified: true }] },
      { number: 5, name: 'Chemical energetics', slug: 'chemical-energetics', subtopics: [{ number: '5.1', name: 'Exothermic and endothermic reactions', slug: 'exothermic-and-endothermic-reactions', tier: 'both', tierVerified: true }] },
      { number: 6, name: 'Chemical reactions', slug: 'chemical-reactions', subtopics: [{ number: '6.1', name: 'Physical and chemical changes', slug: 'physical-and-chemical-changes' }, { number: '6.2', name: 'Rate of reaction', slug: 'rate-of-reaction', tier: 'both', tierVerified: true }, { number: '6.3', name: 'Reversible reactions and equilibrium', slug: 'reversible-reactions-and-equilibrium', tier: 'both', tierVerified: true }, { number: '6.4', name: 'Redox', slug: 'redox', tier: 'both', tierVerified: true }] },
      { number: 7, name: 'Acids, bases and salts', slug: 'acids-bases-and-salts', subtopics: [{ number: '7.1', name: 'The characteristic properties of acids and bases', slug: 'the-characteristic-properties-of-acids-and-bases', tier: 'both', tierVerified: true }, { number: '7.2', name: 'Oxides', slug: 'oxides', tier: 'both', tierVerified: true }, { number: '7.3', name: 'Preparation of salts', slug: 'preparation-of-salts', tier: 'both', tierVerified: true }] },
      { number: 8, name: 'The Periodic Table', slug: 'the-periodic-table', subtopics: [{ number: '8.1', name: 'Arrangement of elements', slug: 'arrangement-of-elements', tier: 'both', tierVerified: true }, { number: '8.2', name: 'Group I properties', slug: 'group-i-properties', tier: 'core', tierVerified: true }, { number: '8.3', name: 'Group VII properties', slug: 'group-vii-properties', tier: 'core', tierVerified: true }, { number: '8.4', name: 'Transition elements', slug: 'transition-elements', tier: 'both', tierVerified: true }, { number: '8.5', name: 'Noble gases', slug: 'noble-gases', tier: 'core', tierVerified: true }] },
      { number: 9, name: 'Metals', slug: 'metals', subtopics: [{ number: '9.1', name: 'Properties of metals', slug: 'properties-of-metals', tier: 'core', tierVerified: true }, { number: '9.2', name: 'Uses of metals', slug: 'uses-of-metals', tier: 'core', tierVerified: true }, { number: '9.3', name: 'Alloys and their properties', slug: 'alloys-and-their-properties', tier: 'both', tierVerified: true }, { number: '9.4', name: 'Reactivity series', slug: 'reactivity-series', tier: 'both', tierVerified: true }, { number: '9.5', name: 'Corrosion of metals', slug: 'corrosion-of-metals', tier: 'both', tierVerified: true }, { number: '9.6', name: 'Extraction of metals', slug: 'extraction-of-metals', tier: 'both', tierVerified: true }] },
      { number: 10, name: 'Chemistry of the environment', slug: 'chemistry-of-the-environment', subtopics: [{ number: '10.1', name: 'Water', slug: 'water', tier: 'core', tierVerified: true }, { number: '10.2', name: 'Fertilisers', slug: 'fertilisers', tier: 'core', tierVerified: true }, { number: '10.3', name: 'Air quality and climate', slug: 'air-quality-and-climate', tier: 'both', tierVerified: true }] },
      { number: 11, name: 'Organic chemistry', slug: 'organic-chemistry', subtopics: [{ number: '11.1', name: 'Formulae, functional groups and terminology', slug: 'formulae-functional-groups-and-terminology', tier: 'both', tierVerified: true }, { number: '11.2', name: 'Naming organic compounds', slug: 'naming-organic-compounds', tier: 'both', tierVerified: true }, { number: '11.3', name: 'Fuels', slug: 'fuels', tier: 'core', tierVerified: true }, { number: '11.4', name: 'Alkanes', slug: 'alkanes', tier: 'both', tierVerified: true }, { number: '11.5', name: 'Alkenes', slug: 'alkenes', tier: 'both', tierVerified: true }, { number: '11.6', name: 'Alcohols', slug: 'alcohols', tier: 'both', tierVerified: true }, { number: '11.7', name: 'Carboxylic acids', slug: 'carboxylic-acids', tier: 'both', tierVerified: true }, { number: '11.8', name: 'Polymers', slug: 'polymers', tier: 'both', tierVerified: true }] },
      { number: 12, name: 'Experimental techniques and chemical analysis', slug: 'experimental-techniques-and-chemical-analysis', subtopics: [{ number: '12.1', name: 'Experimental design', slug: 'experimental-design' }, { number: '12.2', name: 'Acid–base titrations', slug: 'acid-base-titrations' }, { number: '12.3', name: 'Chromatography', slug: 'chromatography' }, { number: '12.4', name: 'Separation and purification', slug: 'separation-and-purification' }, { number: '12.5', name: 'Identification of ions and gases', slug: 'identification-of-ions-and-gases', tier: 'core', tierVerified: true }] },
    ],
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'o-level', subjectSlug: 'chemistry',
    syllabusCode: '5070', syllabusSeries: '2026-2028',
    effectiveFrom: '2026', effectiveTo: '2028', status: 'current',
    tiered: false,
    source: 'Cambridge Assessment International Education — official syllabus PDF',
    sourceUrl: 'https://www.cambridgeinternational.org/Images/697326-2026-2028-syllabus.pdf', verifiedDate: '2026-08-17',
    notes: 'NOT tiered - single set of learning outcomes, unlike 0620. Verified: zero Core/Supplement/Extended headings in the syllabus document.',
    topics: [
      { number: 1, name: 'States of matter', slug: 'states-of-matter', subtopics: [{ number: '1.1', name: 'Solids, liquids and gases', slug: 'solids-liquids-and-gases' }, { number: '1.2', name: 'Diffusion', slug: 'diffusion' }] },
      { number: 2, name: 'Atoms, elements and compounds', slug: 'atoms-elements-and-compounds', subtopics: [{ number: '2.1', name: 'Elements, compounds and mixtures', slug: 'elements-compounds-and-mixtures' }, { number: '2.2', name: 'Atomic structure and the Periodic Table', slug: 'atomic-structure-and-the-periodic-table' }, { number: '2.3', name: 'Isotopes', slug: 'isotopes' }, { number: '2.4', name: 'Ion and ionic bonds', slug: 'ion-and-ionic-bonds' }, { number: '2.5', name: 'Simple molecules and covalent bonds', slug: 'simple-molecules-and-covalent-bonds' }, { number: '2.6', name: 'Giant covalent structures', slug: 'giant-covalent-structures' }, { number: '2.7', name: 'Metallic bonding', slug: 'metallic-bonding' }] },
      { number: 3, name: 'Stoichiometry', slug: 'stoichiometry', subtopics: [{ number: '3.1', name: 'Formulae', slug: 'formulae' }, { number: '3.2', name: 'Relative masses of atoms and molecules', slug: 'relative-masses-of-atoms-and-molecules' }, { number: '3.3', name: 'The mole and the Avogadro constant', slug: 'the-mole-and-the-avogadro-constant' }] },
      { number: 4, name: 'Electrochemistry', slug: 'electrochemistry', subtopics: [{ number: '4.1', name: 'Electrolysis', slug: 'electrolysis' }, { number: '4.2', name: 'Hydrogen–oxygen fuel cells', slug: 'hydrogen-oxygen-fuel-cells' }] },
      { number: 5, name: 'Chemical energetics', slug: 'chemical-energetics', subtopics: [{ number: '5.1', name: 'Exothermic and endothermic reactions', slug: 'exothermic-and-endothermic-reactions' }] },
      { number: 6, name: 'Chemical reactions', slug: 'chemical-reactions', subtopics: [{ number: '6.1', name: 'Physical and chemical changes', slug: 'physical-and-chemical-changes' }, { number: '6.2', name: 'Rate of reaction', slug: 'rate-of-reaction' }, { number: '6.3', name: 'Reversible reactions and equilibrium', slug: 'reversible-reactions-and-equilibrium' }, { number: '6.4', name: 'Redox', slug: 'redox' }] },
      { number: 7, name: 'Acids, bases and salts', slug: 'acids-bases-and-salts', subtopics: [{ number: '7.1', name: 'The characteristic properties of acids and bases', slug: 'the-characteristic-properties-of-acids-and-bases' }, { number: '7.2', name: 'Oxides', slug: 'oxides' }, { number: '7.3', name: 'Preparation of salts', slug: 'preparation-of-salts' }] },
      { number: 8, name: 'The Periodic Table', slug: 'the-periodic-table', subtopics: [{ number: '8.1', name: 'Arrangement of elements', slug: 'arrangement-of-elements' }, { number: '8.2', name: 'Group I properties', slug: 'group-i-properties' }, { number: '8.3', name: 'Group VII properties', slug: 'group-vii-properties' }, { number: '8.4', name: 'Transition elements', slug: 'transition-elements' }, { number: '8.5', name: 'Noble gases', slug: 'noble-gases' }] },
      { number: 9, name: 'Metals', slug: 'metals', subtopics: [{ number: '9.1', name: 'Properties of metals', slug: 'properties-of-metals' }, { number: '9.2', name: 'Uses of metals', slug: 'uses-of-metals' }, { number: '9.3', name: 'Alloys and their properties', slug: 'alloys-and-their-properties' }, { number: '9.4', name: 'Reactivity series', slug: 'reactivity-series' }, { number: '9.5', name: 'Corrosion of metals', slug: 'corrosion-of-metals' }, { number: '9.6', name: 'Extraction of metals', slug: 'extraction-of-metals' }] },
      { number: 10, name: 'Chemistry of the environment', slug: 'chemistry-of-the-environment', subtopics: [{ number: '10.1', name: 'Water', slug: 'water' }, { number: '10.2', name: 'Fertilisers', slug: 'fertilisers' }, { number: '10.3', name: 'Air quality and climate', slug: 'air-quality-and-climate' }] },
      { number: 11, name: 'Organic chemistry', slug: 'organic-chemistry', subtopics: [{ number: '11.1', name: 'Formulae, functional groups and terminology', slug: 'formulae-functional-groups-and-terminology' }, { number: '11.2', name: 'Naming organic compounds', slug: 'naming-organic-compounds' }, { number: '11.3', name: 'Fuels', slug: 'fuels' }, { number: '11.4', name: 'Alkanes', slug: 'alkanes' }, { number: '11.5', name: 'Alkenes', slug: 'alkenes' }, { number: '11.6', name: 'Alcohols', slug: 'alcohols' }, { number: '11.7', name: 'Carboxylic acids', slug: 'carboxylic-acids' }, { number: '11.8', name: 'Polymers', slug: 'polymers' }] },
      { number: 12, name: 'Experimental techniques and chemical analysis', slug: 'experimental-techniques-and-chemical-analysis', subtopics: [{ number: '12.1', name: 'Experimental design', slug: 'experimental-design' }, { number: '12.2', name: 'Acid–base titrations', slug: 'acid-base-titrations' }, { number: '12.3', name: 'Chromatography', slug: 'chromatography' }, { number: '12.4', name: 'Separation and purification', slug: 'separation-and-purification' }, { number: '12.5', name: 'Identification of ions and gases', slug: 'identification-of-ions-and-gases' }] },
    ],
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'a-level', subjectSlug: 'chemistry',
    syllabusCode: '9701', syllabusSeries: '2025-2027',
    effectiveFrom: '2025', effectiveTo: '2027', status: 'current',
    tiered: false,
    source: 'Cambridge Assessment International Education — official syllabus PDF',
    sourceUrl: 'https://www.cambridgeinternational.org/Images/664563-2025-2027-syllabus.pdf', verifiedDate: '2026-08-17',
    notes: 'Two stages: AS Level topics 1-22, A Level topics 23-37. 13 topic names recur across stages at greater depth, so slugs are stage-qualified (as-/a-) and must never be merged.',
    topics: [
      { number: 1, name: 'Atomic structure', slug: 'as-atomic-structure', stage: 'AS', subtopics: [{ number: '1.1', name: 'Particles in the atom and atomic radius', slug: 'as-particles-in-the-atom-and-atomic-radius' }, { number: '1.2', name: 'Isotopes', slug: 'as-isotopes' }, { number: '1.3', name: 'Electrons, energy levels and atomic orbitals', slug: 'as-electrons-energy-levels-and-atomic-orbitals' }, { number: '1.4', name: 'Ionisation energy', slug: 'as-ionisation-energy' }] },
      { number: 2, name: 'Atoms, molecules and stoichiometry', slug: 'as-atoms-molecules-and-stoichiometry', stage: 'AS', subtopics: [{ number: '2.1', name: 'Relative masses of atoms and molecules', slug: 'as-relative-masses-of-atoms-and-molecules' }, { number: '2.2', name: 'The mole and the Avogadro constant', slug: 'as-the-mole-and-the-avogadro-constant' }, { number: '2.3', name: 'Formulas', slug: 'as-formulas' }, { number: '2.4', name: 'Reacting masses and volumes (of solutions and gases)', slug: 'as-reacting-masses-and-volumes-of-solutions-and-gases' }] },
      { number: 3, name: 'Chemical bonding', slug: 'as-chemical-bonding', stage: 'AS', subtopics: [{ number: '3.1', name: 'Electronegativity and bonding', slug: 'as-electronegativity-and-bonding' }, { number: '3.2', name: 'Ionic bonding', slug: 'as-ionic-bonding' }, { number: '3.3', name: 'Metallic bonding', slug: 'as-metallic-bonding' }, { number: '3.4', name: 'Covalent bonding and coordinate (dative covalent) bonding', slug: 'as-covalent-bonding-and-coordinate-dative-covalent-bonding' }, { number: '3.5', name: 'Shapes of molecules', slug: 'as-shapes-of-molecules' }, { number: '3.6', name: 'Intermolecular forces, electronegativity and bond properties', slug: 'as-intermolecular-forces-electronegativity-and-bond-properties' }, { number: '3.7', name: 'Dot-and-cross diagrams', slug: 'as-dot-and-cross-diagrams' }] },
      { number: 4, name: 'States of matter', slug: 'as-states-of-matter', stage: 'AS', subtopics: [{ number: '4.1', name: 'The gaseous state', slug: 'as-the-gaseous-state' }, { number: '4.2', name: 'Bonding and structure', slug: 'as-bonding-and-structure' }] },
      { number: 5, name: 'Chemical energetics', slug: 'as-chemical-energetics', stage: 'AS', subtopics: [{ number: '5.1', name: 'Enthalpy change', slug: 'as-enthalpy-change' }, { number: '5.2', name: "Hess's law", slug: 'as-hess-s-law' }] },
      { number: 6, name: 'Electrochemistry', slug: 'as-electrochemistry', stage: 'AS', subtopics: [{ number: '6.1', name: 'Redox processes', slug: 'as-redox-processes' }] },
      { number: 7, name: 'Equilibria', slug: 'as-equilibria', stage: 'AS', subtopics: [{ number: '7.1', name: 'Chemical equilibria', slug: 'as-chemical-equilibria' }, { number: '7.2', name: 'Brønsted-Lowry theory of acids and bases', slug: 'as-bronsted-lowry-theory-of-acids-and-bases' }] },
      { number: 8, name: 'Reaction kinetics', slug: 'as-reaction-kinetics', stage: 'AS', subtopics: [{ number: '8.1', name: 'Rate of reaction', slug: 'as-rate-of-reaction' }, { number: '8.2', name: 'Effect of temperature on reaction rates and the concept of activation energy', slug: 'as-effect-of-temperature-on-reaction-rates-and-the-concept-of-activation-energy' }, { number: '8.3', name: 'Homogeneous and heterogeneous catalysts', slug: 'as-homogeneous-and-heterogeneous-catalysts' }] },
      { number: 9, name: 'The Periodic Table: chemical periodicity', slug: 'as-the-periodic-table-chemical-periodicity', stage: 'AS', subtopics: [{ number: '9.1', name: 'Periodicity of physical properties of the elements in Period 3', slug: 'as-periodicity-of-physical-properties-of-the-elements-in-period-3' }, { number: '9.2', name: 'Periodicity of chemical properties of the elements in Period 3', slug: 'as-periodicity-of-chemical-properties-of-the-elements-in-period-3' }, { number: '9.3', name: 'Chemical periodicity of other elements', slug: 'as-chemical-periodicity-of-other-elements' }] },
      { number: 10, name: 'Group 2', slug: 'as-group-2', stage: 'AS', subtopics: [{ number: '10.1', name: 'Similarities and trends in the properties of the Group 2 metals and their compounds', slug: 'as-similarities-and-trends-in-the-properties-of-the-group-2-metals-and-their-compounds' }] },
      { number: 11, name: 'Group 17', slug: 'as-group-17', stage: 'AS', subtopics: [{ number: '11.1', name: 'Physical properties of the Group 17 elements', slug: 'as-physical-properties-of-the-group-17-elements' }, { number: '11.2', name: 'The chemical properties of the halogen elements and the hydrogen halides', slug: 'as-the-chemical-properties-of-the-halogen-elements-and-the-hydrogen-halides' }, { number: '11.3', name: 'Some reactions of the halide ions', slug: 'as-some-reactions-of-the-halide-ions' }, { number: '11.4', name: 'The reactions of chlorine', slug: 'as-the-reactions-of-chlorine' }] },
      { number: 12, name: 'Nitrogen and sulfur', slug: 'as-nitrogen-and-sulfur', stage: 'AS', subtopics: [{ number: '12.1', name: 'Nitrogen and sulfur', slug: 'as-nitrogen-and-sulfur' }] },
      { number: 13, name: 'An introduction to AS Level organic chemistry', slug: 'as-an-introduction-to-as-level-organic-chemistry', stage: 'AS', subtopics: [{ number: '13.1', name: 'Formulas, functional groups and the naming of organic compounds', slug: 'as-formulas-functional-groups-and-the-naming-of-organic-compounds' }, { number: '13.2', name: 'Characteristic organic reactions', slug: 'as-characteristic-organic-reactions' }, { number: '13.3', name: 'Shapes of organic molecules; sigma and pi bonds', slug: 'as-shapes-of-organic-molecules' }, { number: '13.4', name: 'Isomerism: structural isomerism and stereoisomerism', slug: 'as-isomerism' }] },
      { number: 14, name: 'Hydrocarbons', slug: 'as-hydrocarbons', stage: 'AS', subtopics: [{ number: '14.1', name: 'Alkanes', slug: 'as-alkanes' }, { number: '14.2', name: 'Alkenes', slug: 'as-alkenes' }] },
      { number: 15, name: 'Halogen compounds', slug: 'as-halogen-compounds', stage: 'AS', subtopics: [{ number: '15.1', name: 'Halogenoalkanes', slug: 'as-halogenoalkanes' }] },
      { number: 16, name: 'Hydroxy compounds', slug: 'as-hydroxy-compounds', stage: 'AS', subtopics: [{ number: '16.1', name: 'Alcohols', slug: 'as-alcohols' }] },
      { number: 17, name: 'Carbonyl compounds', slug: 'as-carbonyl-compounds', stage: 'AS', subtopics: [{ number: '17.1', name: 'Aldehydes and ketones', slug: 'as-aldehydes-and-ketones' }] },
      { number: 18, name: 'Carboxylic acids and derivatives', slug: 'as-carboxylic-acids-and-derivatives', stage: 'AS', subtopics: [{ number: '18.1', name: 'Carboxylic acids', slug: 'as-carboxylic-acids' }, { number: '18.2', name: 'Esters', slug: 'as-esters' }] },
      { number: 19, name: 'Nitrogen compounds', slug: 'as-nitrogen-compounds', stage: 'AS', subtopics: [{ number: '19.1', name: 'Primary amines', slug: 'as-primary-amines' }, { number: '19.2', name: 'Nitriles and hydroxynitriles', slug: 'as-nitriles-and-hydroxynitriles' }] },
      { number: 20, name: 'Polymerisation', slug: 'as-polymerisation', stage: 'AS', subtopics: [{ number: '20.1', name: 'Addition polymerisation', slug: 'as-addition-polymerisation' }] },
      { number: 21, name: 'Organic synthesis', slug: 'as-organic-synthesis', stage: 'AS', subtopics: [{ number: '21.1', name: 'Organic synthesis', slug: 'as-organic-synthesis' }] },
      { number: 22, name: 'Analytical techniques', slug: 'as-analytical-techniques', stage: 'AS', subtopics: [{ number: '22.1', name: 'Infrared spectroscopy', slug: 'as-infrared-spectroscopy' }, { number: '22.2', name: 'Mass spectrometry', slug: 'as-mass-spectrometry' }] },
      { number: 23, name: 'Chemical energetics', slug: 'a-chemical-energetics', stage: 'A', subtopics: [{ number: '23.1', name: 'Lattice energy and Born-Haber cycles', slug: 'a-lattice-energy-and-born-haber-cycles' }, { number: '23.2', name: 'Enthalpies of solution and hydration', slug: 'a-enthalpies-of-solution-and-hydration' }, { number: '23.3', name: 'Entropy change', slug: 'a-entropy-change' }, { number: '23.4', name: 'Gibbs free energy change', slug: 'a-gibbs-free-energy-change' }] },
      { number: 24, name: 'Electrochemistry', slug: 'a-electrochemistry', stage: 'A', subtopics: [{ number: '24.1', name: 'Electrolysis', slug: 'a-electrolysis' }, { number: '24.2', name: 'Standard electrode potentials, standard cell potentials and the Nernst equation', slug: 'a-standard-electrode-potentials-cell-potentials-and-the-nernst-equation' }] },
      { number: 25, name: 'Equilibria', slug: 'a-equilibria', stage: 'A', subtopics: [{ number: '25.1', name: 'Acids and bases', slug: 'a-acids-and-bases' }, { number: '25.2', name: 'Partition coefficients', slug: 'a-partition-coefficients' }] },
      { number: 26, name: 'Reaction kinetics', slug: 'a-reaction-kinetics', stage: 'A', subtopics: [{ number: '26.1', name: 'Simple rate equations, orders of reaction and rate constants', slug: 'a-simple-rate-equations-orders-of-reaction-and-rate-constants' }, { number: '26.2', name: 'Homogeneous and heterogeneous catalysts', slug: 'a-homogeneous-and-heterogeneous-catalysts' }] },
      { number: 27, name: 'Group 2', slug: 'a-group-2', stage: 'A', subtopics: [{ number: '27.1', name: 'Similarities and trends in the properties of the Group 2 metals and their compounds', slug: 'a-similarities-and-trends-in-the-properties-of-the-group-2-metals-and-their-compounds' }] },
      { number: 28, name: 'Chemistry of transition elements', slug: 'a-chemistry-of-transition-elements', stage: 'A', subtopics: [{ number: '28.1', name: 'General physical and chemical properties of the first row of transition elements, titanium to copper', slug: 'a-general-physical-and-chemical-properties-of-the-first-row-of-transition-elements-titanium-to-copper' }, { number: '28.2', name: 'General characteristic chemical properties of the first set of transition elements, titanium to copper', slug: 'a-general-characteristic-chemical-properties-of-the-first-set-of-transition-elements-titanium-to-copper' }, { number: '28.3', name: 'Colour of complexes', slug: 'a-colour-of-complexes' }, { number: '28.4', name: 'Stereoisomerism in transition element complexes', slug: 'a-stereoisomerism-in-transition-element-complexes' }, { number: '28.5', name: 'Stability constants, Kstab', slug: 'a-stability-constants-kstab' }] },
      { number: 29, name: 'An introduction to A Level organic chemistry', slug: 'a-an-introduction-to-a-level-organic-chemistry', stage: 'A', subtopics: [{ number: '29.1', name: 'Formulas, functional groups and the naming of organic compounds', slug: 'a-formulas-functional-groups-and-the-naming-of-organic-compounds' }, { number: '29.2', name: 'Characteristic organic reactions', slug: 'a-characteristic-organic-reactions' }, { number: '29.3', name: 'Shapes of aromatic organic molecules; σ and π bonds', slug: 'a-shapes-of-aromatic-organic-molecules' }, { number: '29.4', name: 'Isomerism: optical', slug: 'a-isomerism' }] },
      { number: 30, name: 'Hydrocarbons', slug: 'a-hydrocarbons', stage: 'A', subtopics: [{ number: '30.1', name: 'Arenes', slug: 'a-arenes' }] },
      { number: 31, name: 'Halogen compounds', slug: 'a-halogen-compounds', stage: 'A', subtopics: [{ number: '31.1', name: 'Halogen compounds', slug: 'a-halogen-compounds' }] },
      { number: 32, name: 'Hydroxy compounds', slug: 'a-hydroxy-compounds', stage: 'A', subtopics: [{ number: '32.1', name: 'Alcohols', slug: 'a-alcohols' }, { number: '32.2', name: 'Phenol', slug: 'a-phenol' }] },
      { number: 33, name: 'Carboxylic acids and derivatives', slug: 'a-carboxylic-acids-and-derivatives', stage: 'A', subtopics: [{ number: '33.1', name: 'Carboxylic acids', slug: 'a-carboxylic-acids' }, { number: '33.2', name: 'Esters', slug: 'a-esters' }, { number: '33.3', name: 'Acyl chlorides', slug: 'a-acyl-chlorides' }] },
      { number: 34, name: 'Nitrogen compounds', slug: 'a-nitrogen-compounds', stage: 'A', subtopics: [{ number: '34.1', name: 'Primary and secondary amines', slug: 'a-primary-and-secondary-amines' }, { number: '34.2', name: 'Phenylamine and azo compounds', slug: 'a-phenylamine-and-azo-compounds' }, { number: '34.3', name: 'Amides', slug: 'a-amides' }, { number: '34.4', name: 'Amino acids', slug: 'a-amino-acids' }] },
      { number: 35, name: 'Polymerisation', slug: 'a-polymerisation', stage: 'A', subtopics: [{ number: '35.1', name: 'Condensation polymerisation', slug: 'a-condensation-polymerisation' }, { number: '35.2', name: 'Predicting the type of polymerisation', slug: 'a-predicting-the-type-of-polymerisation' }, { number: '35.3', name: 'Degradable polymers', slug: 'a-degradable-polymers' }] },
      { number: 36, name: 'Organic synthesis', slug: 'a-organic-synthesis', stage: 'A', subtopics: [{ number: '36.1', name: 'Organic synthesis', slug: 'a-organic-synthesis' }] },
      { number: 37, name: 'Analytical techniques', slug: 'a-analytical-techniques', stage: 'A', subtopics: [{ number: '37.1', name: 'Thin-layer chromatography', slug: 'a-thin-layer-chromatography' }, { number: '37.2', name: 'Gas/liquid chromatography', slug: 'a-gas-liquid-chromatography' }, { number: '37.3', name: 'Carbon-13 NMR spectroscopy', slug: 'a-carbon-13-nmr-spectroscopy' }, { number: '37.4', name: 'Proton (1H) NMR spectroscopy', slug: 'a-proton-1h-nmr-spectroscopy' }] },
    ],
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'o-level', subjectSlug: 'mathematics',
    syllabusCode: '4024', syllabusSeries: '2025-2027',
    effectiveFrom: '2025', effectiveTo: '2027', status: 'current',
    tiered: false,
    source: 'Cambridge Assessment International Education — official syllabus PDF',
    sourceUrl: 'https://www.cambridgeinternational.org/Images/662480-2025-2027-syllabus.pdf', verifiedDate: '2026-08-18',
    notes: 'Official title: Cambridge O Level Mathematics (Syllabus D) 4024. NOT tiered - single set of outcomes for every candidate, unlike IGCSE 0580 which splits Core/Extended. Shares 9 top-level topic NAMES with IGCSE 0580, but subtopic numbering and depth genuinely differ between the two qualifications (verified for Topic 2: 4024 uses one flat Algebra sequence 2.1-2.10; 0580 splits the same territory Core/Extended under a different "C"-prefixed numbering with several Extended-only gaps) - the two are not a like-for-like substitute for each other at subtopic level. Phase 11: Topic 2 subtopics fully verified against the syllabus PDF. Topics 1 and 3-9 are recorded here as name-only (verified from the official content overview) pending subtopic-level research in a later phase.',
    topics: [
      { number: 1, name: 'Number', slug: 'number', subtopics: [] },
      { number: 2, name: 'Algebra and graphs', slug: 'algebra-and-graphs', subtopics: [
        { number: '2.1', name: 'Introduction to algebra', slug: 'introduction-to-algebra' },
        { number: '2.2', name: 'Algebraic manipulation', slug: 'algebraic-manipulation' },
        { number: '2.3', name: 'Algebraic fractions', slug: 'algebraic-fractions' },
        { number: '2.4', name: 'Indices II', slug: 'indices-ii' },
        { number: '2.5', name: 'Equations', slug: 'equations' },
        { number: '2.6', name: 'Inequalities', slug: 'inequalities' },
        { number: '2.7', name: 'Sequences', slug: 'sequences' },
        { number: '2.8', name: 'Proportion', slug: 'proportion' },
        { number: '2.9', name: 'Graphs in practical situations', slug: 'graphs-in-practical-situations' },
        { number: '2.10', name: 'Graphs of functions', slug: 'graphs-of-functions' },
      ] },
      { number: 3, name: 'Coordinate geometry', slug: 'coordinate-geometry', subtopics: [] },
      { number: 4, name: 'Geometry', slug: 'geometry', subtopics: [] },
      { number: 5, name: 'Mensuration', slug: 'mensuration', subtopics: [] },
      { number: 6, name: 'Trigonometry', slug: 'trigonometry', subtopics: [] },
      { number: 7, name: 'Transformations and vectors', slug: 'transformations-and-vectors', subtopics: [] },
      { number: 8, name: 'Probability', slug: 'probability', subtopics: [] },
      { number: 9, name: 'Statistics', slug: 'statistics', subtopics: [] },
    ],
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'o-level', subjectSlug: 'physics',
    syllabusCode: '5054', syllabusSeries: '2026-2028',
    effectiveFrom: '2026', effectiveTo: '2028', status: 'current',
    tiered: false,
    source: 'Cambridge Assessment International Education — official syllabus PDF',
    sourceUrl: 'https://www.cambridgeinternational.org/Images/697324-2026-2028-syllabus.pdf', verifiedDate: '2026-08-18',
    notes: 'NOT tiered - single set of outcomes for every candidate (Paper 1 + Paper 2 + a practical paper, all externally assessed, no Core/Extended split). Phase 11 verified Topic 1 subtopics through 1.6 (Momentum) against the syllabus PDF. Phase 13 verified and completed the remainder of Topic 1 (1.7 Energy, work and power; 1.8 Pressure) and wrote full resource coverage for all of Topic 1 (1.1-1.8). Topics 2-6 remain name-only (verified from the official content overview) pending subtopic-level research in a later phase.',
    topics: [
      { number: 1, name: 'Motion, forces and energy', slug: 'motion-forces-and-energy', subtopics: [
        { number: '1.1', name: 'Physical quantities and measurement techniques', slug: 'physical-quantities-and-measurement-techniques' },
        { number: '1.2', name: 'Motion', slug: 'motion' },
        { number: '1.3', name: 'Mass and weight', slug: 'mass-and-weight' },
        { number: '1.4', name: 'Density', slug: 'density' },
        { number: '1.5', name: 'Forces', slug: 'forces' },
        { number: '1.6', name: 'Momentum', slug: 'momentum' },
        { number: '1.7', name: 'Energy, work and power', slug: 'energy-work-and-power' },
        { number: '1.8', name: 'Pressure', slug: 'pressure' },
      ] },
      { number: 2, name: 'Thermal physics', slug: 'thermal-physics', subtopics: [] },
      { number: 3, name: 'Waves', slug: 'waves', subtopics: [] },
      { number: 4, name: 'Electricity and magnetism', slug: 'electricity-and-magnetism', subtopics: [] },
      { number: 5, name: 'Nuclear physics', slug: 'nuclear-physics', subtopics: [] },
      { number: 6, name: 'Space physics', slug: 'space-physics', subtopics: [] },
    ],
  },
] as const;

/**
 * Known future/superseded series, recorded so a transition is visible without
 * their topics being published. Topics are extracted only when a series
 * becomes current.
 */
export const KNOWN_OTHER_SERIES = [
  { syllabusCode: '9701', syllabusSeries: '2028-2030', status: 'future' as const,
    sourceUrl: 'https://www.cambridgeinternational.org/Images/744624-2028-2030-syllabus.pdf',
    notes: 'Published by Cambridge. REVIEW REQUIRED before the 2028 series: 9701 content must be re-verified against it.' },
  { syllabusCode: '0620', syllabusSeries: '2023-2025', status: 'superseded' as const,
    sourceUrl: 'https://www.cambridgeinternational.org/Images/595428-2023-2025-syllabus.pdf', notes: 'Superseded by 2026-2028.' },
  { syllabusCode: '5070', syllabusSeries: '2023-2025', status: 'superseded' as const,
    sourceUrl: 'https://www.cambridgeinternational.org/Images/595448-2023-2025-syllabus.pdf', notes: 'Superseded by 2026-2028.' },
];

/**
 * The current syllabus for a subject + qualification — the default public
 * structure. subjectSlug defaults to 'chemistry' only for backward
 * compatibility with call sites written before Phase 11; every new call
 * site should pass both arguments explicitly.
 */
export const topicsFor = (qualificationSlug: string, subjectSlug: string = 'chemistry'): SyllabusVersion | undefined =>
  SYLLABUS_VERSIONS.find((s) =>
    s.qualificationSlug === qualificationSlug && s.subjectSlug === subjectSlug && s.status === 'current');

/** Back-compat alias. */
export const SYLLABUS_TOPICS = SYLLABUS_VERSIONS;

export const asTopics = (v: SyllabusVersion) => v.topics.filter((t) => t.stage === 'AS');
export const aLevelTopics = (v: SyllabusVersion) => v.topics.filter((t) => t.stage === 'A');
export const hasStages = (v: SyllabusVersion) => v.topics.some((t) => t.stage);

