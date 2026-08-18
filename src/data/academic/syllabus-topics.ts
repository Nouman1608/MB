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
import type { BoardSlug } from './boards';

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
  boardSlug: BoardSlug;
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
    notes: 'Official title: Cambridge O Level Mathematics (Syllabus D) 4024. NOT tiered - single set of outcomes for every candidate, unlike IGCSE 0580 which splits Core/Extended. Shares 9 top-level topic NAMES with IGCSE 0580, but subtopic numbering and depth genuinely differ between the two qualifications - the two are not a like-for-like substitute for each other at subtopic level. Phase 11 recorded Topic 2 as 2.1-2.10 (an undercount - see Phase 14). Phase 14 re-verified Topic 2 directly against the syllabus PDF and found it actually runs 2.1-2.12 (2.11 Sketching curves and 2.12 Functions were missing); corrected here, and full resource coverage written for 2.4-2.12 (2.1-2.3 were already covered from Phase 11). Topics 1 and 3-9 remain name-only (verified from the official content overview) pending subtopic-level research in a later phase.',
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
        { number: '2.11', name: 'Sketching curves', slug: 'sketching-curves' },
        { number: '2.12', name: 'Functions', slug: 'functions' },
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
  {
    boardSlug: 'cambridge', qualificationSlug: 'o-level', subjectSlug: 'biology',
    syllabusCode: '5090', syllabusSeries: '2026-2028',
    effectiveFrom: '2026', effectiveTo: '2028', status: 'current',
    tiered: false,
    source: 'Cambridge Assessment International Education — official syllabus PDF',
    sourceUrl: 'https://www.cambridgeinternational.org/Images/697330-2026-2028-syllabus.pdf', verifiedDate: '2026-08-18',
    notes: 'NOT tiered - single set of outcomes for every candidate (Paper 1 + Paper 2 + a practical paper, all externally assessed, no Core/Extended split), matching the pattern already verified for Chemistry 5070, Physics 5054 and Mathematics 4024. Phase 15: first Biology taxonomy entry. Topics 1 (Cells), 4 (Biological molecules) and 5 (Enzymes) verified in full against the syllabus PDF and given full resource coverage. Topics 2-3 and 6-19 are recorded here as name-only (verified from the official content overview) pending subtopic-level research in a later phase.',
    topics: [
      { number: 1, name: 'Cells', slug: 'cells', subtopics: [
        { number: '1.1', name: 'Cell structure and function', slug: 'cell-structure-and-function' },
        { number: '1.2', name: 'Specialised cells, tissues and organs', slug: 'specialised-cells-tissues-and-organs' },
      ] },
      { number: 2, name: 'Classification', slug: 'classification', subtopics: [] },
      { number: 3, name: 'Movement into and out of cells', slug: 'movement-into-and-out-of-cells', subtopics: [] },
      { number: 4, name: 'Biological molecules', slug: 'biological-molecules', subtopics: [
        { number: '4.1', name: 'Biological molecules', slug: 'biological-molecules-content' },
      ] },
      { number: 5, name: 'Enzymes', slug: 'enzymes', subtopics: [
        { number: '5.1', name: 'Enzyme action', slug: 'enzyme-action' },
        { number: '5.2', name: 'Effects of temperature and pH', slug: 'effects-of-temperature-and-ph' },
      ] },
      { number: 6, name: 'Plant nutrition', slug: 'plant-nutrition', subtopics: [] },
      { number: 7, name: 'Transport in flowering plants', slug: 'transport-in-flowering-plants', subtopics: [] },
      { number: 8, name: 'Human nutrition', slug: 'human-nutrition', subtopics: [] },
      { number: 9, name: 'Human gas exchange', slug: 'human-gas-exchange', subtopics: [] },
      { number: 10, name: 'Respiration', slug: 'respiration', subtopics: [] },
      { number: 11, name: 'Transport in humans', slug: 'transport-in-humans', subtopics: [] },
      { number: 12, name: 'Disease and immunity', slug: 'disease-and-immunity', subtopics: [] },
      { number: 13, name: 'Excretion', slug: 'excretion', subtopics: [] },
      { number: 14, name: 'Coordination and control', slug: 'coordination-and-control', subtopics: [] },
      { number: 15, name: 'Coordination and response in plants', slug: 'coordination-and-response-in-plants', subtopics: [] },
      { number: 16, name: 'Development of organisms and continuity of life', slug: 'development-of-organisms-and-continuity-of-life', subtopics: [] },
      { number: 17, name: 'Inheritance', slug: 'inheritance', subtopics: [] },
      { number: 18, name: 'Biotechnology and genetic modification', slug: 'biotechnology-and-genetic-modification', subtopics: [] },
      { number: 19, name: 'Relationships of organisms with one another and with the environment', slug: 'relationships-of-organisms-with-one-another-and-with-the-environment', subtopics: [] },
    ],
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'o-level', subjectSlug: 'business',
    syllabusCode: '7115', syllabusSeries: '2026',
    effectiveFrom: '2026', effectiveTo: '2026', status: 'current',
    tiered: false,
    source: 'Cambridge Assessment International Education — official syllabus PDF',
    sourceUrl: 'https://www.cambridgeinternational.org/Images/697338-2026-syllabus.pdf', verifiedDate: '2026-08-18',
    notes: 'IMPORTANT: this syllabus is valid for 2026 ONLY (single examination year, not a 2026-2028 series like most other subjects on this site) - confirmed directly from the PDF ("Use this syllabus for exams in 2026"). Cambridge replaces 7115 with 7081 ("Cambridge O Level Business", shortened name, same lineage per Phase 11 research) from 2027; whoever next touches this subject should re-verify against 7081 rather than assume continuity. Not tiered. Phase 16: Topic 1 subtopics 1.1 and 1.2 verified in full against the PDF; 1.3 (Enterprise, business growth and size) was reached but only its 1.3.1 sub-point (Enterprise and entrepreneurship) was captured before the extraction ran out of budget for this phase - recorded as a known partial gap rather than guessed. Topics 2-6 (People in business; Marketing; Operations management; Financial information and decisions; External influences on business activity) are name-only from search-result context, NOT yet verified against the primary PDF, and are deliberately not entered into the topics array below until they are.',
    topics: [
      { number: 1, name: 'Understanding business activity', slug: 'understanding-business-activity', subtopics: [
        { number: '1.1', name: 'Business activity', slug: 'business-activity' },
        { number: '1.2', name: 'Classification of businesses', slug: 'classification-of-businesses' },
      ] },
    ],
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'o-level', subjectSlug: 'economics',
    syllabusCode: '2281', syllabusSeries: '2026',
    effectiveFrom: '2026', effectiveTo: '2026', status: 'current',
    tiered: false,
    source: 'Cambridge Assessment International Education — official syllabus PDF',
    sourceUrl: 'https://www.cambridgeinternational.org/Images/697295-2026-syllabus.pdf', verifiedDate: '2026-08-18',
    notes: 'IMPORTANT: like Business 7115, this syllabus is valid for 2026 ONLY (confirmed directly from the PDF: "Use this syllabus for exams in 2026"), not a multi-year series. No successor code has been confirmed for Economics (unlike Business, where 7081 is a known, sourced replacement) - this should be checked fresh, not assumed, whenever this subject is next touched. Not tiered. Phase 16: Topic 1 (The basic economic problem) verified in full - all three of its subtopics. Topics 2-6+ (covering markets/resource allocation, firms, income/poverty, and international trade among other areas, per partial section titles seen during research) are not yet verified and are deliberately not entered below.',
    topics: [
      { number: 1, name: 'The basic economic problem', slug: 'the-basic-economic-problem', subtopics: [
        { number: '1.1', name: 'The nature of the economic problem', slug: 'the-nature-of-the-economic-problem' },
        { number: '1.2', name: 'The factors of production', slug: 'the-factors-of-production' },
        { number: '1.3', name: 'Opportunity cost', slug: 'opportunity-cost' },
      ] },
    ],
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'a-level', subjectSlug: 'accounting',
    syllabusCode: '9706', syllabusSeries: '2026-2028',
    effectiveFrom: '2026', effectiveTo: '2028', status: 'current',
    tiered: false,
    source: 'Cambridge Assessment International Education — official syllabus PDF',
    sourceUrl: 'https://www.cambridgeinternational.org/Images/697417-2026-2028-syllabus.pdf', verifiedDate: '2026-08-18',
    notes: 'Not tiered, but staged: AS Level candidates study topics 1.1-2.2 only; A Level candidates study all of 1.1-4.4 (AS Level content is assumed knowledge for A Level Papers 3-4). No Cambridge O Level Accounting exists in the approved scope - Learners Academy\'s own subject list (the matrix\'s evidence source) only shows Accounting at IGCSE and A Level, matching the finding already recorded in Phase 11, so this AS/A Level entry point was chosen deliberately rather than an unverified O Level substitute. Phase 16: AS Level topics 1.1 (Types of business entity) and 1.2 (The accounting system) verified in full against the PDF. Topics 1.3-1.6 and all of Section 2 (AS Level) plus Sections 3-4 (A Level only) are name-only from the content-overview table, not yet subtopic-verified.',
    topics: [
      { number: 1, name: 'Financial accounting', slug: 'financial-accounting', stage: 'AS', subtopics: [
        { number: '1.1', name: 'Types of business entity', slug: 'types-of-business-entity' },
        { number: '1.2', name: 'The accounting system', slug: 'the-accounting-system' },
        { number: '1.3', name: 'Accounting for non-current assets', slug: 'accounting-for-non-current-assets' },
        { number: '1.4', name: 'Reconciliation and verification', slug: 'reconciliation-and-verification' },
        { number: '1.5', name: 'Preparation of financial statements', slug: 'preparation-of-financial-statements' },
        { number: '1.6', name: 'Analysis and communication of accounting information', slug: 'as-analysis-and-communication-of-accounting-information' },
      ] },
      { number: 2, name: 'Cost and management accounting', slug: 'as-cost-and-management-accounting', stage: 'AS', subtopics: [
        { number: '2.1', name: 'Costs and cost behaviour', slug: 'costs-and-cost-behaviour' },
        { number: '2.2', name: 'Traditional costing methods', slug: 'traditional-costing-methods' },
      ] },
      { number: 3, name: 'Financial accounting', slug: 'a-financial-accounting', stage: 'A', subtopics: [
        { number: '3.1', name: 'Preparation of financial statements', slug: 'a-preparation-of-financial-statements' },
        { number: '3.2', name: 'Regulatory and ethical considerations', slug: 'regulatory-and-ethical-considerations' },
        { number: '3.3', name: 'Business acquisition and merger', slug: 'business-acquisition-and-merger' },
        { number: '3.4', name: 'Computerised accounting systems', slug: 'computerised-accounting-systems' },
        { number: '3.5', name: 'Analysis and communication of accounting information', slug: 'a-analysis-and-communication-of-accounting-information' },
      ] },
      { number: 4, name: 'Cost and management accounting', slug: 'a-cost-and-management-accounting', stage: 'A', subtopics: [
        { number: '4.1', name: 'Activity based costing (ABC)', slug: 'activity-based-costing-abc' },
        { number: '4.2', name: 'Standard costing', slug: 'standard-costing' },
        { number: '4.3', name: 'Budgeting and budgetary control', slug: 'budgeting-and-budgetary-control' },
        { number: '4.4', name: 'Investment appraisal', slug: 'investment-appraisal' },
      ] },
    ],
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'a-level', subjectSlug: 'physics',
    syllabusCode: '9702', syllabusSeries: '2025-2027',
    effectiveFrom: '2025', effectiveTo: '2027', status: 'current',
    tiered: false,
    source: 'Cambridge Assessment International Education — official syllabus PDF',
    sourceUrl: 'https://www.cambridgeinternational.org/Images/664565-2025-2027-syllabus.pdf', verifiedDate: '2026-08-18',
    notes: 'Two stages: AS Level topics 1-11, A Level topics 12-25 (AS content is assumed knowledge for A Level). Slugs are stage-qualified (as-/a-) since Cambridge Physics topic names do not recur across stages the way Chemistry\'s do, but the as-/a- convention is kept consistent with the 9701 entry above.',
    topics: [
      { number: 1, name: 'Physical quantities and units', slug: 'as-physical-quantities-and-units', stage: 'AS', subtopics: [{ number: '1.1', name: 'Physical quantities', slug: 'as-physical-quantities' }, { number: '1.2', name: 'SI units', slug: 'as-si-units' }, { number: '1.3', name: 'Errors and uncertainties', slug: 'as-errors-and-uncertainties' }, { number: '1.4', name: 'Scalars and vectors', slug: 'as-scalars-and-vectors' }] },
      { number: 2, name: 'Kinematics', slug: 'as-kinematics', stage: 'AS', subtopics: [{ number: '2.1', name: 'Equations of motion', slug: 'as-equations-of-motion' }] },
      { number: 3, name: 'Dynamics', slug: 'as-dynamics', stage: 'AS', subtopics: [{ number: '3.1', name: 'Momentum and Newton\'s laws of motion', slug: 'as-momentum-and-newtons-laws-of-motion' }, { number: '3.2', name: 'Non-uniform motion', slug: 'as-non-uniform-motion' }, { number: '3.3', name: 'Linear momentum and its conservation', slug: 'as-linear-momentum-and-its-conservation' }] },
      { number: 4, name: 'Forces, density and pressure', slug: 'as-forces-density-and-pressure', stage: 'AS', subtopics: [{ number: '4.1', name: 'Turning effects of forces', slug: 'as-turning-effects-of-forces' }, { number: '4.2', name: 'Equilibrium of forces', slug: 'as-equilibrium-of-forces' }, { number: '4.3', name: 'Density and pressure', slug: 'as-density-and-pressure' }] },
      { number: 5, name: 'Work, energy and power', slug: 'as-work-energy-and-power', stage: 'AS', subtopics: [{ number: '5.1', name: 'Energy conservation', slug: 'as-energy-conservation' }, { number: '5.2', name: 'Gravitational potential energy and kinetic energy', slug: 'as-gravitational-potential-energy-and-kinetic-energy' }] },
      { number: 6, name: 'Deformation of solids', slug: 'as-deformation-of-solids', stage: 'AS', subtopics: [{ number: '6.1', name: 'Stress and strain', slug: 'as-stress-and-strain' }, { number: '6.2', name: 'Elastic and plastic behaviour', slug: 'as-elastic-and-plastic-behaviour' }] },
      { number: 7, name: 'Waves', slug: 'as-waves', stage: 'AS', subtopics: [{ number: '7.1', name: 'Progressive waves', slug: 'as-progressive-waves' }, { number: '7.2', name: 'Transverse and longitudinal waves', slug: 'as-transverse-and-longitudinal-waves' }, { number: '7.3', name: 'Doppler effect for sound waves', slug: 'as-doppler-effect-for-sound-waves' }, { number: '7.4', name: 'Electromagnetic spectrum', slug: 'as-electromagnetic-spectrum' }, { number: '7.5', name: 'Polarisation', slug: 'as-polarisation' }] },
      { number: 8, name: 'Superposition', slug: 'as-superposition', stage: 'AS', subtopics: [{ number: '8.1', name: 'Stationary waves', slug: 'as-stationary-waves' }, { number: '8.2', name: 'Diffraction', slug: 'as-diffraction' }, { number: '8.3', name: 'Interference', slug: 'as-interference' }, { number: '8.4', name: 'The diffraction grating', slug: 'as-the-diffraction-grating' }] },
      { number: 9, name: 'Electricity', slug: 'as-electricity', stage: 'AS', subtopics: [{ number: '9.1', name: 'Electric current', slug: 'as-electric-current' }, { number: '9.2', name: 'Potential difference and power', slug: 'as-potential-difference-and-power' }, { number: '9.3', name: 'Resistance and resistivity', slug: 'as-resistance-and-resistivity' }] },
      { number: 10, name: 'D.C. circuits', slug: 'as-dc-circuits', stage: 'AS', subtopics: [{ number: '10.1', name: 'Practical circuits', slug: 'as-practical-circuits' }, { number: '10.2', name: 'Kirchhoff\'s laws', slug: 'as-kirchhoffs-laws' }, { number: '10.3', name: 'Potential dividers', slug: 'as-potential-dividers' }] },
      { number: 11, name: 'Particle physics', slug: 'as-particle-physics', stage: 'AS', subtopics: [{ number: '11.1', name: 'Atoms, nuclei and radiation', slug: 'as-atoms-nuclei-and-radiation' }, { number: '11.2', name: 'Fundamental particles', slug: 'as-fundamental-particles' }] },
      { number: 12, name: 'Motion in a circle', slug: 'a-motion-in-a-circle', stage: 'A', subtopics: [{ number: '12.1', name: 'Kinematics of uniform circular motion', slug: 'a-kinematics-of-uniform-circular-motion' }, { number: '12.2', name: 'Centripetal acceleration', slug: 'a-centripetal-acceleration' }] },
      { number: 13, name: 'Gravitational fields', slug: 'a-gravitational-fields', stage: 'A', subtopics: [{ number: '13.1', name: 'Gravitational field', slug: 'a-gravitational-field' }, { number: '13.2', name: 'Gravitational force between point masses', slug: 'a-gravitational-force-between-point-masses' }, { number: '13.3', name: 'Gravitational field of a point mass', slug: 'a-gravitational-field-of-a-point-mass' }, { number: '13.4', name: 'Gravitational potential', slug: 'a-gravitational-potential' }] },
      { number: 14, name: 'Temperature', slug: 'a-temperature', stage: 'A', subtopics: [{ number: '14.1', name: 'Thermal equilibrium', slug: 'a-thermal-equilibrium' }, { number: '14.2', name: 'Temperature scales', slug: 'a-temperature-scales' }, { number: '14.3', name: 'Specific heat capacity and specific latent heat', slug: 'a-specific-heat-capacity-and-specific-latent-heat' }] },
      { number: 15, name: 'Ideal gases', slug: 'a-ideal-gases', stage: 'A', subtopics: [{ number: '15.1', name: 'The mole', slug: 'a-the-mole' }, { number: '15.2', name: 'Equation of state', slug: 'a-equation-of-state' }, { number: '15.3', name: 'Kinetic theory of gases', slug: 'a-kinetic-theory-of-gases' }] },
      { number: 16, name: 'Thermodynamics', slug: 'a-thermodynamics', stage: 'A', subtopics: [{ number: '16.1', name: 'Internal energy', slug: 'a-internal-energy' }, { number: '16.2', name: 'The first law of thermodynamics', slug: 'a-the-first-law-of-thermodynamics' }] },
      { number: 17, name: 'Oscillations', slug: 'a-oscillations', stage: 'A', subtopics: [{ number: '17.1', name: 'Simple harmonic oscillations', slug: 'a-simple-harmonic-oscillations' }, { number: '17.2', name: 'Energy in simple harmonic motion', slug: 'a-energy-in-simple-harmonic-motion' }, { number: '17.3', name: 'Damped and forced oscillations, resonance', slug: 'a-damped-and-forced-oscillations-resonance' }] },
      { number: 18, name: 'Electric fields', slug: 'a-electric-fields', stage: 'A', subtopics: [{ number: '18.1', name: 'Electric fields and field lines', slug: 'a-electric-fields-and-field-lines' }, { number: '18.2', name: 'Uniform electric fields', slug: 'a-uniform-electric-fields' }, { number: '18.3', name: 'Electric force between point charges', slug: 'a-electric-force-between-point-charges' }, { number: '18.4', name: 'Electric field of a point charge', slug: 'a-electric-field-of-a-point-charge' }, { number: '18.5', name: 'Electric potential', slug: 'a-electric-potential' }] },
      { number: 19, name: 'Capacitance', slug: 'a-capacitance', stage: 'A', subtopics: [{ number: '19.1', name: 'Capacitors and capacitance', slug: 'a-capacitors-and-capacitance' }, { number: '19.2', name: 'Energy stored in a capacitor', slug: 'a-energy-stored-in-a-capacitor' }, { number: '19.3', name: 'Discharging a capacitor', slug: 'a-discharging-a-capacitor' }] },
      { number: 20, name: 'Magnetic fields', slug: 'a-magnetic-fields', stage: 'A', subtopics: [{ number: '20.1', name: 'Concept of a magnetic field', slug: 'a-concept-of-a-magnetic-field' }, { number: '20.2', name: 'Force on a current-carrying conductor', slug: 'a-force-on-a-current-carrying-conductor' }, { number: '20.3', name: 'Force on a moving charge', slug: 'a-force-on-a-moving-charge' }, { number: '20.4', name: 'Magnetic fields due to currents', slug: 'a-magnetic-fields-due-to-currents' }, { number: '20.5', name: 'Electromagnetic induction', slug: 'a-electromagnetic-induction' }] },
      { number: 21, name: 'Alternating currents', slug: 'a-alternating-currents', stage: 'A', subtopics: [{ number: '21.1', name: 'Characteristics of alternating currents', slug: 'a-characteristics-of-alternating-currents' }, { number: '21.2', name: 'Rectification and smoothing', slug: 'a-rectification-and-smoothing' }] },
      { number: 22, name: 'Quantum physics', slug: 'a-quantum-physics', stage: 'A', subtopics: [{ number: '22.1', name: 'Energy and momentum of a photon', slug: 'a-energy-and-momentum-of-a-photon' }, { number: '22.2', name: 'Photoelectric effect', slug: 'a-photoelectric-effect' }, { number: '22.3', name: 'Wave-particle duality', slug: 'a-wave-particle-duality' }, { number: '22.4', name: 'Energy levels in atoms and line spectra', slug: 'a-energy-levels-in-atoms-and-line-spectra' }] },
      { number: 23, name: 'Nuclear physics', slug: 'a-nuclear-physics', stage: 'A', subtopics: [{ number: '23.1', name: 'Mass defect and nuclear binding energy', slug: 'a-mass-defect-and-nuclear-binding-energy' }, { number: '23.2', name: 'Radioactive decay', slug: 'a-radioactive-decay' }] },
      { number: 24, name: 'Medical physics', slug: 'a-medical-physics', stage: 'A', subtopics: [{ number: '24.1', name: 'Production and use of ultrasound', slug: 'a-production-and-use-of-ultrasound' }, { number: '24.2', name: 'Production and use of X-rays', slug: 'a-production-and-use-of-x-rays' }, { number: '24.3', name: 'PET scanning', slug: 'a-pet-scanning' }] },
      { number: 25, name: 'Astronomy and cosmology', slug: 'a-astronomy-and-cosmology', stage: 'A', subtopics: [{ number: '25.1', name: 'Standard candles', slug: 'a-standard-candles' }, { number: '25.2', name: 'Stellar radii', slug: 'a-stellar-radii' }, { number: '25.3', name: 'Hubble\'s law and the Big Bang theory', slug: 'a-hubbles-law-and-the-big-bang-theory' }] },
    ],
  },
  {
    boardSlug: 'edexcel', qualificationSlug: 'igcse', subjectSlug: 'physics',
    syllabusCode: '4PH1', syllabusSeries: 'Issue 4',
    effectiveFrom: '2017', effectiveTo: '2027', status: 'current',
    tiered: false,
    source: 'Pearson Edexcel -- official International GCSE Physics specification PDF',
    sourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Physics/2017/specification-and-sample-assessments/international-gcse-physics-2017-specification.pdf', verifiedDate: '2026-08-18',
    notes: 'Pearson Edexcel International GCSE in Physics (4PH1), first teaching September 2017, Issue 4 (September 2024). Untiered -- assessed across two papers (1P core content, 2P all content including bold "P" statements). Subtopics use the specification\'s own lettered sub-headings (a, b, c, d), not numbered x.y like Cambridge, since that is how Pearson itself structures this document.',
    topics: [
      { number: 1, name: 'Forces and motion', slug: 'forces-and-motion', subtopics: [{ number: '1a', name: 'Units', slug: 'units-forces-and-motion' }, { number: '1b', name: 'Movement and position', slug: 'movement-and-position' }, { number: '1c', name: 'Forces, movement, shape and momentum', slug: 'forces-movement-shape-and-momentum' }] },
      { number: 2, name: 'Electricity', slug: 'electricity', subtopics: [{ number: '2a', name: 'Units', slug: 'units-electricity' }, { number: '2b', name: 'Mains electricity', slug: 'mains-electricity' }, { number: '2c', name: 'Energy and voltage in circuits', slug: 'energy-and-voltage-in-circuits' }, { number: '2d', name: 'Electric charge', slug: 'electric-charge' }] },
      { number: 3, name: 'Waves', slug: 'waves', subtopics: [{ number: '3a', name: 'Units', slug: 'units-waves' }, { number: '3b', name: 'Properties of waves', slug: 'properties-of-waves' }, { number: '3c', name: 'The electromagnetic spectrum', slug: 'the-electromagnetic-spectrum' }, { number: '3d', name: 'Light and sound', slug: 'light-and-sound' }] },
      { number: 4, name: 'Energy resources and energy transfers', slug: 'energy-resources-and-energy-transfers', subtopics: [{ number: '4a', name: 'Units', slug: 'units-energy-resources' }, { number: '4b', name: 'Energy transfers', slug: 'energy-transfers' }, { number: '4c', name: 'Work and power', slug: 'work-and-power' }, { number: '4d', name: 'Energy resources and electricity generation', slug: 'energy-resources-and-electricity-generation' }] },
      { number: 5, name: 'Solids, liquids and gases', slug: 'solids-liquids-and-gases-edexcel', subtopics: [{ number: '5a', name: 'Units', slug: 'units-solids-liquids-and-gases' }, { number: '5b', name: 'Density and pressure', slug: 'density-and-pressure' }, { number: '5c', name: 'Change of state', slug: 'change-of-state' }, { number: '5d', name: 'Ideal gas molecules', slug: 'ideal-gas-molecules' }] },
      { number: 6, name: 'Magnetism and electromagnetism', slug: 'magnetism-and-electromagnetism', subtopics: [{ number: '6a', name: 'Units', slug: 'units-magnetism' }, { number: '6b', name: 'Magnetism', slug: 'magnetism' }, { number: '6c', name: 'Electromagnetism', slug: 'electromagnetism' }, { number: '6d', name: 'Electromagnetic induction', slug: 'electromagnetic-induction' }] },
      { number: 7, name: 'Radioactivity and particles', slug: 'radioactivity-and-particles', subtopics: [{ number: '7a', name: 'Units', slug: 'units-radioactivity' }, { number: '7b', name: 'Radioactivity', slug: 'radioactivity' }, { number: '7c', name: 'Fission and fusion', slug: 'fission-and-fusion' }] },
      { number: 8, name: 'Astrophysics', slug: 'astrophysics', subtopics: [{ number: '8a', name: 'Units', slug: 'units-astrophysics' }, { number: '8b', name: 'Motion in the universe', slug: 'motion-in-the-universe' }, { number: '8c', name: 'Stellar evolution', slug: 'stellar-evolution' }, { number: '8d', name: 'Cosmology', slug: 'cosmology' }] },
    ],
  },
  {
    boardSlug: 'edexcel', qualificationSlug: 'a-level', subjectSlug: 'physics',
    syllabusCode: 'YPH11', syllabusSeries: 'Issue 3',
    effectiveFrom: '2018', effectiveTo: '2027', status: 'current',
    tiered: false,
    source: 'Pearson Edexcel -- official International Advanced Level Physics specification PDF',
    sourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Physics/2018/Specification%20and%20Sample%20Assessment/9781446957783_IAL_Physics_Iss3.pdf', verifiedDate: '2026-08-18',
    notes: "Pearson Edexcel International Advanced Subsidiary in Physics (XPH11) and International Advanced Level in Physics (YPH11), first teaching September 2018, Issue 3 (July 2021), current for the 2026 series. Six modular units: Unit 1 Mechanics and Materials, Unit 2 Waves and Electricity, Unit 3 Practical Skills in Physics I (IAS); Unit 4 Further Mechanics, Fields and Particles, Unit 5 Thermodynamics, Radiation, Oscillations and Cosmology, Unit 6 Practical Skills in Physics II (IA2). Units 3 and 6 are practical-skills-only externally examined papers with no separate content sub-topics of their own -- they assess experimental technique developed while studying the other units -- so they are intentionally not represented as taxonomy topics here, matching how this site treats practical endorsements elsewhere. All content sub-topics (1.3, 1.4, 2.3, 2.4, 4.3, 4.4, 4.5, 5.3, 5.4, 5.5, 5.6) were verified directly against the official specification PDF in full.",
    topics: [
      { number: 1, name: 'Mechanics and Materials', slug: 'unit-1-mechanics-and-materials', subtopics: [{ number: '1.3', name: 'Mechanics', slug: 'mechanics' }, { number: '1.4', name: 'Materials', slug: 'materials' }] },
      { number: 2, name: 'Waves and Electricity', slug: 'unit-2-waves-and-electricity', subtopics: [{ number: '2.3', name: 'Waves and Particle Nature of Light', slug: 'waves-and-particle-nature-of-light' }, { number: '2.4', name: 'Electric Circuits', slug: 'electric-circuits' }] },
      { number: 4, name: 'Further Mechanics, Fields and Particles', slug: 'unit-4-further-mechanics-fields-and-particles', subtopics: [{ number: '4.3', name: 'Further Mechanics', slug: 'further-mechanics' }, { number: '4.4', name: 'Electric and Magnetic Fields', slug: 'electric-and-magnetic-fields' }, { number: '4.5', name: 'Nuclear and Particle Physics', slug: 'nuclear-and-particle-physics' }] },
      { number: 5, name: 'Thermodynamics, Radiation, Oscillations and Cosmology', slug: 'unit-5-thermodynamics-radiation-oscillations-and-cosmology', subtopics: [{ number: '5.3', name: 'Thermodynamics', slug: 'thermodynamics-edexcel' }, { number: '5.4', name: 'Nuclear Decay', slug: 'nuclear-decay' }, { number: '5.5', name: 'Oscillations', slug: 'oscillations-edexcel' }, { number: '5.6', name: 'Astrophysics and Cosmology', slug: 'astrophysics-and-cosmology' }] },
    ],
  },
  {
    boardSlug: 'aqa', qualificationSlug: 'gcse', subjectSlug: 'physics',
    syllabusCode: '8463', syllabusSeries: 'For first teaching 2016',
    effectiveFrom: '2016', effectiveTo: 'ongoing', status: 'current',
    tiered: false,
    source: 'AQA -- official GCSE Physics (8463) specification, live subject-content pages',
    sourceUrl: 'https://www.aqa.org.uk/subjects/physics/gcse/physics-8463/specification/subject-content', verifiedDate: '2026-08-19',
    notes: "AQA GCSE Physics (8463), first teaching September 2016. Untiered as a standalone Physics GCSE (Foundation/Higher tier applies within each paper via 'HT only' content flags, not via separate specifications). Most content is co-teachable with GCSE Combined Science: Trilogy; content marked '(physics only)' in the official specification is Physics-only and not shared with Combined Science -- flagged in resource prose the same way Edexcel's 'P' references are. All 8 topics (4.1-4.8) and their sub-topic structure verified directly against the live AQA specification subject-content pages (aqa.org.uk), fetched in full 2026-08-19.",
    topics: [
      { number: 1, name: 'Energy', slug: 'energy-aqa-gcse', subtopics: [
        { number: '4.1.1', name: 'Energy changes in a system', slug: 'energy-changes-in-a-system' },
        { number: '4.1.2', name: 'Conservation and dissipation of energy', slug: 'conservation-and-dissipation-of-energy' },
        { number: '4.1.3', name: 'National and global energy resources', slug: 'national-and-global-energy-resources' },
      ] },
      { number: 2, name: 'Electricity', slug: 'electricity-aqa-gcse', subtopics: [
        { number: '4.2.1', name: 'Current, potential difference and resistance', slug: 'current-potential-difference-and-resistance-aqa' },
        { number: '4.2.2', name: 'Series and parallel circuits', slug: 'series-and-parallel-circuits-aqa' },
        { number: '4.2.3', name: 'Domestic uses and safety', slug: 'domestic-uses-and-safety' },
        { number: '4.2.4', name: 'Energy transfers', slug: 'energy-transfers-aqa-electricity' },
        { number: '4.2.5', name: 'Static electricity', slug: 'static-electricity' },
      ] },
      { number: 3, name: 'Particle model of matter', slug: 'particle-model-of-matter-aqa-gcse', subtopics: [
        { number: '4.3.1', name: 'Changes of state and the particle model', slug: 'changes-of-state-and-the-particle-model' },
        { number: '4.3.2', name: 'Internal energy and energy transfers', slug: 'internal-energy-and-energy-transfers' },
        { number: '4.3.3', name: 'Particle model and pressure', slug: 'particle-model-and-pressure' },
      ] },
      { number: 4, name: 'Atomic structure', slug: 'atomic-structure-aqa-gcse', subtopics: [
        { number: '4.4.1', name: 'Atoms and isotopes', slug: 'atoms-and-isotopes-aqa' },
        { number: '4.4.2', name: 'Atoms and nuclear radiation', slug: 'atoms-and-nuclear-radiation' },
        { number: '4.4.3', name: 'Hazards and uses of radioactive emissions and background radiation', slug: 'hazards-and-uses-of-radioactive-emissions' },
        { number: '4.4.4', name: 'Nuclear fission and fusion', slug: 'nuclear-fission-and-fusion-aqa-gcse' },
      ] },
      { number: 5, name: 'Forces', slug: 'forces-aqa-gcse', subtopics: [
        { number: '4.5.1', name: 'Forces and their interactions', slug: 'forces-and-their-interactions' },
        { number: '4.5.2', name: 'Work done and energy transfer', slug: 'work-done-and-energy-transfer-aqa' },
        { number: '4.5.3', name: 'Forces and elasticity', slug: 'forces-and-elasticity' },
        { number: '4.5.4', name: 'Moments, levers and gears', slug: 'moments-levers-and-gears' },
        { number: '4.5.5', name: 'Pressure and pressure differences in fluids', slug: 'pressure-and-pressure-differences-in-fluids' },
        { number: '4.5.6', name: 'Forces and motion', slug: 'forces-and-motion-aqa-gcse' },
        { number: '4.5.7', name: 'Momentum', slug: 'momentum-aqa-gcse' },
      ] },
      { number: 6, name: 'Waves', slug: 'waves-aqa-gcse', subtopics: [
        { number: '4.6.1', name: 'Waves in air, fluids and solids', slug: 'waves-in-air-fluids-and-solids' },
        { number: '4.6.2', name: 'Electromagnetic waves', slug: 'electromagnetic-waves-aqa-gcse' },
        { number: '4.6.3', name: 'Black body radiation', slug: 'black-body-radiation-aqa-gcse' },
      ] },
      { number: 7, name: 'Magnetism and electromagnetism', slug: 'magnetism-and-electromagnetism-aqa-gcse', subtopics: [
        { number: '4.7.1', name: 'Permanent and induced magnetism, magnetic forces and fields', slug: 'permanent-and-induced-magnetism' },
        { number: '4.7.2', name: 'The motor effect', slug: 'the-motor-effect' },
        { number: '4.7.3', name: 'Induced potential, transformers and the National Grid', slug: 'induced-potential-transformers-and-the-national-grid' },
      ] },
      { number: 8, name: 'Space physics', slug: 'space-physics-aqa-gcse', subtopics: [
        { number: '4.8.1', name: 'Solar system; stability of orbital motions; satellites', slug: 'solar-system-orbital-motions-satellites' },
        { number: '4.8.2', name: 'Red-shift', slug: 'red-shift' },
      ] },
    ],
  },

  {
    boardSlug: 'aqa', qualificationSlug: 'a-level', subjectSlug: 'physics',
    syllabusCode: '7408', syllabusSeries: 'For first teaching 2015',
    effectiveFrom: '2015', effectiveTo: 'ongoing', status: 'current',
    tiered: false,
    source: 'AQA -- official A-level Physics (7408) specification, live subject-content pages',
    sourceUrl: 'https://www.aqa.org.uk/subjects/physics/a-level/physics-7408/specification/subject-content', verifiedDate: '2026-08-19',
    notes: "AQA A-level Physics (7408), first teaching September 2015 (co-teachable AS Physics is 7407). Sections 3.1-3.5 are the shared AS/A-level content, taught in year 1; sections 3.6-3.8 are A-level only, taught in year 2. Beyond 3.1-3.8, the specification also offers five optional A-level-only topics (3.9 Astrophysics, 3.10 Medical physics, 3.11 Engineering physics, 3.12 Turning points in physics, 3.13 Electronics) of which each centre selects exactly one for its cohort -- these five optional topics are not yet represented in this taxonomy and will be added in a future update once a specific option is prioritised. Practical skills are assessed indirectly through written papers and separately certificated via 12 required practical activities woven through 3.1-3.8. All 8 compulsory topics and their sub-topic structure verified directly against the live AQA specification subject-content pages (aqa.org.uk), fetched in full 2026-08-19.",
    topics: [
      { number: 1, name: 'Measurements and their errors', slug: 'measurements-and-their-errors-aqa-alevel', subtopics: [
        { number: '3.1.1', name: 'Use of SI units and their prefixes', slug: 'use-of-si-units-and-their-prefixes' },
        { number: '3.1.2', name: 'Limitation of physical measurements', slug: 'limitation-of-physical-measurements' },
        { number: '3.1.3', name: 'Estimation of physical quantities', slug: 'estimation-of-physical-quantities' },
      ] },
      { number: 2, name: 'Particles and radiation', slug: 'particles-and-radiation-aqa-alevel', subtopics: [
        { number: '3.2.1', name: 'Particles', slug: 'particles-aqa-alevel' },
        { number: '3.2.2', name: 'Electromagnetic radiation and quantum phenomena', slug: 'electromagnetic-radiation-and-quantum-phenomena' },
      ] },
      { number: 3, name: 'Waves', slug: 'waves-aqa-alevel', subtopics: [
        { number: '3.3.1', name: 'Progressive and stationary waves', slug: 'progressive-and-stationary-waves' },
        { number: '3.3.2', name: 'Refraction, diffraction and interference', slug: 'refraction-diffraction-and-interference' },
      ] },
      { number: 4, name: 'Mechanics and materials', slug: 'mechanics-and-materials-aqa-alevel', subtopics: [
        { number: '3.4.1', name: 'Force, energy and momentum', slug: 'force-energy-and-momentum' },
        { number: '3.4.2', name: 'Materials', slug: 'materials-aqa-alevel' },
      ] },
      { number: 5, name: 'Electricity', slug: 'electricity-aqa-alevel', subtopics: [
        { number: '3.5.1', name: 'Current electricity', slug: 'current-electricity-aqa-alevel' },
      ] },
      { number: 6, name: 'Further mechanics and thermal physics', slug: 'further-mechanics-and-thermal-physics', subtopics: [
        { number: '3.6.1', name: 'Periodic motion', slug: 'periodic-motion-aqa-alevel' },
        { number: '3.6.2', name: 'Thermal physics', slug: 'thermal-physics-aqa-alevel' },
      ] },
      { number: 7, name: 'Fields and their consequences', slug: 'fields-and-their-consequences', subtopics: [
        { number: '3.7.1', name: 'Fields', slug: 'fields-aqa-alevel' },
        { number: '3.7.2', name: 'Gravitational fields', slug: 'gravitational-fields-aqa-alevel' },
        { number: '3.7.3', name: 'Electric fields', slug: 'electric-fields-aqa-alevel' },
        { number: '3.7.4', name: 'Capacitance', slug: 'capacitance-aqa-alevel' },
        { number: '3.7.5', name: 'Magnetic fields', slug: 'magnetic-fields-aqa-alevel' },
      ] },
      { number: 8, name: 'Nuclear physics', slug: 'nuclear-physics-aqa-alevel', subtopics: [
        { number: '3.8.1', name: 'Radioactivity', slug: 'radioactivity-aqa-alevel' },
      ] },
    ],
  },

  {
    boardSlug: 'ocr', qualificationSlug: 'gcse', subjectSlug: 'physics',
    syllabusCode: 'J249', syllabusSeries: 'For first teaching 2016',
    effectiveFrom: '2016', effectiveTo: 'ongoing', status: 'current',
    tiered: true,
    source: 'OCR -- official GCSE (9-1) Physics A (Gateway Science) J249 specification (accredited PDF, version 5.0)',
    sourceUrl: 'https://www.ocr.org.uk/Images/234600-specification-accredited-gcse-gateway-science-suite-physics-a-j249.pdf', verifiedDate: '2026-08-19',
    notes: "OCR GCSE (9-1) Physics A (Gateway Science) (J249), first teaching September 2016. Tiered (Foundation and Higher tier papers). Content is divided into eight teaching topics P1-P8 plus a ninth practical-skills topic, P9, which is not separately content-assessed but underpins the 15% practical-skills component woven through the written papers. All 8 content topics and their sub-topic structure verified directly against the official accredited specification PDF (ocr.org.uk), fetched in full 2026-08-19.",
    topics: [
      { number: 1, name: 'Matter', slug: 'matter-ocr-gcse', subtopics: [
        { number: 'P1.1', name: 'The particle model', slug: 'the-particle-model-ocr-gcse' },
        { number: 'P1.2', name: 'Changes of state', slug: 'changes-of-state-ocr-gcse' },
        { number: 'P1.3', name: 'Pressure', slug: 'pressure-ocr-gcse' },
      ] },
      { number: 2, name: 'Forces', slug: 'forces-ocr-gcse', subtopics: [
        { number: 'P2.1', name: 'Motion', slug: 'motion-ocr-gcse' },
        { number: 'P2.2', name: "Newton's laws", slug: 'newtons-laws-ocr-gcse' },
        { number: 'P2.3', name: 'Forces in action', slug: 'forces-in-action-ocr-gcse' },
      ] },
      { number: 3, name: 'Electricity', slug: 'electricity-ocr-gcse', subtopics: [
        { number: 'P3.1', name: 'Static and charge', slug: 'static-and-charge-ocr-gcse' },
        { number: 'P3.2', name: 'Simple circuits', slug: 'simple-circuits-ocr-gcse' },
      ] },
      { number: 4, name: 'Magnetism and magnetic fields', slug: 'magnetism-and-magnetic-fields-ocr-gcse', subtopics: [
        { number: 'P4.1', name: 'Magnets and magnetic fields', slug: 'magnets-and-magnetic-fields-ocr-gcse' },
        { number: 'P4.2', name: 'Uses of magnetism', slug: 'uses-of-magnetism-ocr-gcse' },
      ] },
      { number: 5, name: 'Waves in matter', slug: 'waves-in-matter-ocr-gcse', subtopics: [
        { number: 'P5.1', name: 'Wave behaviour', slug: 'wave-behaviour-ocr-gcse' },
        { number: 'P5.2', name: 'The electromagnetic spectrum', slug: 'the-electromagnetic-spectrum-ocr-gcse' },
        { number: 'P5.3', name: 'Wave interaction', slug: 'wave-interaction-ocr-gcse' },
      ] },
      { number: 6, name: 'Radioactivity', slug: 'radioactivity-ocr-gcse', subtopics: [
        { number: 'P6.1', name: 'Radioactive emissions', slug: 'radioactive-emissions-ocr-gcse' },
        { number: 'P6.2', name: 'Uses and hazards', slug: 'uses-and-hazards-ocr-gcse' },
      ] },
      { number: 7, name: 'Energy', slug: 'energy-ocr-gcse', subtopics: [
        { number: 'P7.1', name: 'Work done', slug: 'work-done-ocr-gcse' },
        { number: 'P7.2', name: 'Power and efficiency', slug: 'power-and-efficiency-ocr-gcse' },
      ] },
      { number: 8, name: 'Global challenges', slug: 'global-challenges-ocr-gcse', subtopics: [
        { number: 'P8.1', name: 'Physics on the move', slug: 'physics-on-the-move-ocr-gcse' },
        { number: 'P8.2', name: 'Powering Earth', slug: 'powering-earth-ocr-gcse' },
        { number: 'P8.3', name: 'Beyond Earth', slug: 'beyond-earth-ocr-gcse' },
      ] },
    ],
  },

  {
    boardSlug: 'ocr', qualificationSlug: 'a-level', subjectSlug: 'physics',
    syllabusCode: 'H556', syllabusSeries: 'For first teaching 2015',
    effectiveFrom: '2015', effectiveTo: 'ongoing', status: 'current',
    tiered: false,
    source: 'OCR -- official A Level GCE Physics A H556 specification (accredited PDF)',
    sourceUrl: 'https://www.ocr.org.uk/Images/171726-specification-accredited-a-level-gce-physics-a-h556.pdf', verifiedDate: '2026-08-19',
    notes: "OCR A Level Physics A (H556), first teaching September 2015, co-teachable with AS Physics A (H156). Content is organised into 6 modules: Module 1 (Development of practical skills in physics) and Module 2 (Foundations of physics) are foundational skills threaded throughout the course; Modules 3-4 (Forces and motion; Electrons, waves and photons) are typically year 12 content; Modules 5-6 (Newtonian world and astrophysics; Particles and medical physics) are typically year 13 content. Assessed across three written components (H556/01, H556/02, H556/03) plus a separately-reported Practical Endorsement. All 6 modules and their sub-topic structure verified directly against the official accredited specification PDF (ocr.org.uk), fetched in full 2026-08-19.",
    topics: [
      { number: 1, name: 'Development of practical skills in physics', slug: 'development-of-practical-skills-in-physics-ocr-alevel', subtopics: [
        { number: '1.1', name: 'Practical skills assessed in a written examination', slug: 'practical-skills-assessed-in-a-written-examination' },
        { number: '1.2', name: 'Practical skills assessed in the practical endorsement', slug: 'practical-skills-assessed-in-the-practical-endorsement' },
      ] },
      { number: 2, name: 'Foundations of physics', slug: 'foundations-of-physics-ocr-alevel', subtopics: [
        { number: '2.1', name: 'Physical quantities and units', slug: 'physical-quantities-and-units-ocr-alevel' },
        { number: '2.2', name: 'Making measurements and analysing data', slug: 'making-measurements-and-analysing-data-ocr-alevel' },
        { number: '2.3', name: 'Nature of quantities', slug: 'nature-of-quantities-ocr-alevel' },
      ] },
      { number: 3, name: 'Forces and motion', slug: 'forces-and-motion-ocr-alevel', subtopics: [
        { number: '3.1', name: 'Motion', slug: 'motion-ocr-alevel' },
        { number: '3.2', name: 'Forces in action', slug: 'forces-in-action-ocr-alevel' },
        { number: '3.3', name: 'Work, energy and power', slug: 'work-energy-and-power-ocr-alevel' },
        { number: '3.4', name: 'Materials', slug: 'materials-ocr-alevel' },
        { number: '3.5', name: "Newton's laws of motion and momentum", slug: 'newtons-laws-of-motion-and-momentum' },
      ] },
      { number: 4, name: 'Electrons, waves and photons', slug: 'electrons-waves-and-photons', subtopics: [
        { number: '4.1', name: 'Charge and current', slug: 'charge-and-current-ocr-alevel' },
        { number: '4.2', name: 'Energy, power and resistance', slug: 'energy-power-and-resistance' },
        { number: '4.3', name: 'Electrical circuits', slug: 'electrical-circuits-ocr-alevel' },
        { number: '4.4', name: 'Waves', slug: 'waves-ocr-alevel' },
        { number: '4.5', name: 'Quantum physics', slug: 'quantum-physics-ocr-alevel' },
      ] },
      { number: 5, name: 'Newtonian world and astrophysics', slug: 'newtonian-world-and-astrophysics', subtopics: [
        { number: '5.1', name: 'Thermal physics', slug: 'thermal-physics-ocr-alevel' },
        { number: '5.2', name: 'Circular motion', slug: 'circular-motion-ocr-alevel' },
        { number: '5.3', name: 'Oscillations', slug: 'oscillations-ocr-alevel' },
        { number: '5.4', name: 'Gravitational fields', slug: 'gravitational-fields-ocr-alevel' },
        { number: '5.5', name: 'Astrophysics and cosmology', slug: 'astrophysics-and-cosmology-ocr-alevel' },
      ] },
      { number: 6, name: 'Particles and medical physics', slug: 'particles-and-medical-physics', subtopics: [
        { number: '6.1', name: 'Capacitors', slug: 'capacitors-ocr-alevel' },
        { number: '6.2', name: 'Electric fields', slug: 'electric-fields-ocr-alevel' },
        { number: '6.3', name: 'Electromagnetism', slug: 'electromagnetism-ocr-alevel' },
        { number: '6.4', name: 'Nuclear and particle physics', slug: 'nuclear-and-particle-physics-ocr-alevel' },
        { number: '6.5', name: 'Medical imaging', slug: 'medical-imaging-ocr-alevel' },
      ] },
    ],
  },

  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'igcse', subjectSlug: 'physics',
    syllabusCode: '9203', syllabusSeries: 'For exams May/June 2018 onwards',
    effectiveFrom: '2018', effectiveTo: 'ongoing', status: 'current',
    tiered: false,
    source: 'OxfordAQA -- official International GCSE Physics (9203) specification PDF',
    sourceUrl: 'https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-international-gcse-physics-specification.pdf', verifiedDate: '2026-08-19',
    notes: "OxfordAQA International GCSE Physics (9203). Linear qualification (all exams at the end of the course); guided learning hours (GLH) 120. Untiered. Content marked 'P' in the official specification is assessed only in the full Physics (9203) award and is not shared with the smaller International GCSE Core Physics (9223) qualification. All 8 topics and their sub-topic structure verified directly against the official specification PDF (oxfordaqa.com), fetched in full 2026-08-19.",
    topics: [
      { number: 1, name: 'Forces and their effects', slug: 'forces-and-their-effects-oxfordaqa-igcse', subtopics: [
        { number: '3.1.1', name: 'Forces and their interactions', slug: 'forces-and-their-interactions-oxfordaqa' },
        { number: '3.1.2', name: 'Motion', slug: 'motion-oxfordaqa-igcse' },
        { number: '3.1.3', name: 'Resultant forces', slug: 'resultant-forces-oxfordaqa' },
        { number: '3.1.4', name: 'Momentum', slug: 'momentum-oxfordaqa-igcse' },
        { number: '3.1.5', name: 'Safety in public transport', slug: 'safety-in-public-transport' },
        { number: '3.1.6', name: 'Forces and terminal velocity', slug: 'forces-and-terminal-velocity' },
        { number: '3.1.7', name: 'Centre of mass', slug: 'centre-of-mass-oxfordaqa' },
        { number: '3.1.8', name: 'Moments and levers', slug: 'moments-and-levers-oxfordaqa' },
      ] },
      { number: 2, name: 'Energy', slug: 'energy-oxfordaqa-igcse', subtopics: [
        { number: '3.2.1', name: 'Forces and energy', slug: 'forces-and-energy-oxfordaqa' },
        { number: '3.2.2', name: 'Energy transfers, conservation and dissipation of energy', slug: 'energy-transfers-conservation-and-dissipation' },
        { number: '3.2.3', name: 'Energy resources', slug: 'energy-resources-oxfordaqa-igcse' },
      ] },
      { number: 3, name: 'Waves', slug: 'waves-oxfordaqa-igcse', subtopics: [
        { number: '3.3.1', name: 'General properties of waves', slug: 'general-properties-of-waves' },
        { number: '3.3.2', name: 'The electromagnetic spectrum', slug: 'the-electromagnetic-spectrum-oxfordaqa' },
        { number: '3.3.3', name: 'Sound and ultrasound', slug: 'sound-and-ultrasound-oxfordaqa' },
        { number: '3.3.4', name: 'Reflection', slug: 'reflection-oxfordaqa-igcse' },
        { number: '3.3.5', name: 'Refraction and total internal reflection', slug: 'refraction-and-total-internal-reflection-oxfordaqa' },
        { number: '3.3.6', name: 'Lenses and the eye', slug: 'lenses-and-the-eye-oxfordaqa' },
      ] },
      { number: 4, name: 'Particle model of matter', slug: 'particle-model-of-matter-oxfordaqa-igcse', subtopics: [
        { number: '3.4.1', name: 'Kinetic theory', slug: 'kinetic-theory-oxfordaqa-igcse' },
        { number: '3.4.2', name: 'Energy transfers and particle motion', slug: 'energy-transfers-and-particle-motion' },
      ] },
      { number: 5, name: 'Electricity and magnetism', slug: 'electricity-and-magnetism-oxfordaqa-igcse', subtopics: [
        { number: '3.5.1', name: 'Electrical circuits', slug: 'electrical-circuits-oxfordaqa-igcse' },
        { number: '3.5.2', name: 'Magnetism and electromagnetism', slug: 'magnetism-and-electromagnetism-oxfordaqa-igcse' },
      ] },
      { number: 6, name: 'Generating and distributing electricity and household use', slug: 'generating-and-distributing-electricity-and-household-use', subtopics: [
        { number: '3.6.1', name: 'Generating electricity', slug: 'generating-electricity-oxfordaqa' },
        { number: '3.6.2', name: 'Electricity transmission and distribution', slug: 'electricity-transmission-and-distribution' },
        { number: '3.6.3', name: 'Using electricity in the home', slug: 'using-electricity-in-the-home-oxfordaqa' },
        { number: '3.6.4', name: 'The motor effect', slug: 'the-motor-effect-oxfordaqa-igcse' },
        { number: '3.6.5', name: 'Transferring electrical energy', slug: 'transferring-electrical-energy-oxfordaqa' },
      ] },
      { number: 7, name: 'Nuclear physics', slug: 'nuclear-physics-oxfordaqa-igcse', subtopics: [
        { number: '3.7.1', name: 'Atomic structure', slug: 'atomic-structure-oxfordaqa-igcse' },
        { number: '3.7.2', name: 'Ionizing radiation from the nucleus', slug: 'ionizing-radiation-from-the-nucleus' },
        { number: '3.7.3', name: 'Nuclear fission', slug: 'nuclear-fission-oxfordaqa-igcse' },
        { number: '3.7.4', name: 'Nuclear fusion', slug: 'nuclear-fusion-oxfordaqa-igcse' },
      ] },
      { number: 8, name: 'Space physics', slug: 'space-physics-oxfordaqa-igcse', subtopics: [
        { number: '3.8.1', name: 'Life cycle of a star', slug: 'life-cycle-of-a-star' },
        { number: '3.8.2', name: 'Solar system and orbital motion', slug: 'solar-system-and-orbital-motion-oxfordaqa' },
        { number: '3.8.3', name: 'Red shift and the expanding universe', slug: 'red-shift-and-the-expanding-universe' },
      ] },
    ],
  },

  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'a-level', subjectSlug: 'physics',
    syllabusCode: '9630', syllabusSeries: 'International AS and A-level',
    effectiveFrom: '2017', effectiveTo: 'ongoing', status: 'current',
    tiered: false,
    source: 'OxfordAQA -- official International AS and A-level Physics specification PDF',
    sourceUrl: 'https://www.oxfordaqa.com/oaqaresources/specifications/oxfordaqa-international-as-and-a-level-physics-specification.pdf', verifiedDate: '2026-08-19',
    notes: "OxfordAQA International AS and A-level Physics (9630); International AS (9610) is co-teachable. Guided learning hours: 180 for the International AS, 360 for the full International A-level. Sections 3.1-3.5 are the shared AS/A-level content; sections 3.6-3.9 (Circular and periodic motion; Gravitational fields and satellites; Electric fields and capacitance; Exponential change) are International A-level only. All 9 topics and their sub-topic structure verified directly against the official specification PDF (oxfordaqa.com), fetched in full 2026-08-19.",
    topics: [
      { number: 1, name: 'Measurements and their errors', slug: 'measurements-and-their-errors-oxfordaqa-alevel', subtopics: [
        { number: '3.1.1', name: 'Use of SI units and their prefixes', slug: 'use-of-si-units-and-their-prefixes-oxfordaqa' },
        { number: '3.1.2', name: 'Limitation of physical measurements', slug: 'limitation-of-physical-measurements-oxfordaqa' },
        { number: '3.1.3', name: 'Estimation of physical quantities', slug: 'estimation-of-physical-quantities-oxfordaqa' },
      ] },
      { number: 2, name: 'Mechanics and materials', slug: 'mechanics-and-materials-oxfordaqa-alevel', subtopics: [
        { number: '3.2.1', name: 'Scalars and vectors', slug: 'scalars-and-vectors-oxfordaqa' },
        { number: '3.2.2', name: 'Moments', slug: 'moments-oxfordaqa-alevel' },
        { number: '3.2.3', name: 'Motion along a straight line', slug: 'motion-along-a-straight-line-oxfordaqa' },
        { number: '3.2.4', name: 'Projectile motion', slug: 'projectile-motion-oxfordaqa' },
        { number: '3.2.5', name: "Newton's laws of motion", slug: 'newtons-laws-of-motion-oxfordaqa' },
        { number: '3.2.6', name: 'Momentum', slug: 'momentum-oxfordaqa-alevel' },
        { number: '3.2.7', name: 'Work, energy and power', slug: 'work-energy-and-power-oxfordaqa' },
        { number: '3.2.8', name: 'Conservation of energy', slug: 'conservation-of-energy-oxfordaqa-alevel' },
        { number: '3.2.9', name: 'Bulk properties of solids', slug: 'bulk-properties-of-solids-oxfordaqa' },
        { number: '3.2.10', name: 'The Young modulus', slug: 'the-young-modulus-oxfordaqa' },
      ] },
      { number: 3, name: 'Particles, radiation and radioactivity', slug: 'particles-radiation-and-radioactivity', subtopics: [
        { number: '3.3.1', name: 'Constituents of the atom', slug: 'constituents-of-the-atom-oxfordaqa' },
        { number: '3.3.2', name: 'Elementary particles', slug: 'elementary-particles-oxfordaqa' },
        { number: '3.3.3', name: 'Radioactivity', slug: 'radioactivity-oxfordaqa-alevel' },
      ] },
      { number: 4, name: 'Electricity', slug: 'electricity-oxfordaqa-alevel', subtopics: [
        { number: '3.4.1', name: 'Basics of electricity', slug: 'basics-of-electricity-oxfordaqa' },
        { number: '3.4.2', name: 'Current-voltage characteristics', slug: 'current-voltage-characteristics-oxfordaqa' },
        { number: '3.4.3', name: 'Resistivity', slug: 'resistivity-oxfordaqa-alevel' },
        { number: '3.4.4', name: 'Circuits', slug: 'circuits-oxfordaqa-alevel' },
        { number: '3.4.5', name: 'Potential divider', slug: 'potential-divider-oxfordaqa' },
        { number: '3.4.6', name: 'Electromotive force and internal resistance', slug: 'electromotive-force-and-internal-resistance-oxfordaqa' },
      ] },
      { number: 5, name: 'Oscillations and waves', slug: 'oscillations-and-waves-oxfordaqa-alevel', subtopics: [
        { number: '3.5.1', name: 'Oscillating systems', slug: 'oscillating-systems-oxfordaqa' },
        { number: '3.5.2', name: 'Forced vibrations and resonance', slug: 'forced-vibrations-and-resonance-oxfordaqa' },
        { number: '3.5.3', name: 'Progressive waves', slug: 'progressive-waves-oxfordaqa-alevel' },
        { number: '3.5.4', name: 'Longitudinal and transverse waves', slug: 'longitudinal-and-transverse-waves-oxfordaqa' },
        { number: '3.5.5', name: 'Principle of superposition of waves and formation of stationary waves', slug: 'principle-of-superposition-and-stationary-waves-oxfordaqa' },
        { number: '3.5.6', name: 'Interference', slug: 'interference-oxfordaqa-alevel' },
        { number: '3.5.7', name: 'Diffraction', slug: 'diffraction-oxfordaqa-alevel' },
        { number: '3.5.8', name: 'Refraction at a plane surface', slug: 'refraction-at-a-plane-surface-oxfordaqa' },
        { number: '3.5.9', name: 'Collisions of electrons with atoms', slug: 'collisions-of-electrons-with-atoms-oxfordaqa' },
        { number: '3.5.10', name: 'Photoelectric effect', slug: 'photoelectric-effect-oxfordaqa' },
        { number: '3.5.11', name: 'Wave-particle duality', slug: 'wave-particle-duality-oxfordaqa' },
      ] },
      { number: 6, name: 'Circular and periodic motion', slug: 'circular-and-periodic-motion-oxfordaqa', subtopics: [
        { number: '3.6.1', name: 'Circular motion', slug: 'circular-motion-oxfordaqa-alevel' },
        { number: '3.6.2', name: 'Simple harmonic motion', slug: 'simple-harmonic-motion-oxfordaqa' },
      ] },
      { number: 7, name: 'Gravitational fields and satellites', slug: 'gravitational-fields-and-satellites', subtopics: [
        { number: '3.7.1', name: "Newton's gravitational law", slug: 'newtons-gravitational-law' },
        { number: '3.7.2', name: 'Gravitational field strength', slug: 'gravitational-field-strength-oxfordaqa' },
        { number: '3.7.3', name: 'Gravitational potential', slug: 'gravitational-potential-oxfordaqa' },
        { number: '3.7.4', name: 'Orbits of planets and satellites', slug: 'orbits-of-planets-and-satellites-oxfordaqa' },
      ] },
      { number: 8, name: 'Electric fields and capacitance', slug: 'electric-fields-and-capacitance', subtopics: [
        { number: '3.8.1', name: "Coulomb's law", slug: 'coulombs-law-oxfordaqa' },
        { number: '3.8.2', name: 'Electric field strength', slug: 'electric-field-strength-oxfordaqa' },
        { number: '3.8.3', name: 'Electric potential', slug: 'electric-potential-oxfordaqa' },
        { number: '3.8.4', name: 'Capacitors', slug: 'capacitors-oxfordaqa-alevel' },
      ] },
      { number: 9, name: 'Exponential change', slug: 'exponential-change-oxfordaqa', subtopics: [
        { number: '3.9.1', name: 'Capacitor charge and discharge', slug: 'capacitor-charge-and-discharge-oxfordaqa' },
        { number: '3.9.2', name: 'Exponential changes in radioactivity', slug: 'exponential-changes-in-radioactivity-oxfordaqa' },
      ] },
    ],
  },

  {
    boardSlug: 'cambridge', qualificationSlug: 'igcse', subjectSlug: 'mathematics',
    syllabusCode: '0580', syllabusSeries: '2025-2027',
    effectiveFrom: '2025', effectiveTo: '2027', status: 'current',
    tiered: true,
    source: 'Cambridge Assessment International Education -- official syllabus PDF',
    sourceUrl: 'https://www.cambridgeinternational.org/Images/662466-2025-2027-syllabus.pdf', verifiedDate: '2026-08-19',
    notes: "Cambridge IGCSE Mathematics (0580). Tiered: Core subject content (grades C-G) and Extended subject content (grades A*-C, containing all Core content plus additional material). Shares the same 9 top-level topic NAMES as Cambridge O Level Mathematics 4024, but the two syllabuses are not a like-for-like substitute for each other at subtopic level -- 0580's content is organised by topic rather than numbered X.Y sub-topics in the official specification. All 9 topic names verified directly against the official syllabus PDF content overview (cambridgeinternational.org), fetched 2026-08-19. Subtopic-level detail not yet researched -- topics recorded name-only pending a later phase, following the same honest partial-taxonomy approach used for 4024's Topics 1 and 3-9.",
    topics: [
      { number: 1, name: 'Number', slug: 'number-cambridge-igcse-maths', subtopics: [] },
      { number: 2, name: 'Algebra and graphs', slug: 'algebra-and-graphs-cambridge-igcse-maths', subtopics: [] },
      { number: 3, name: 'Coordinate geometry', slug: 'coordinate-geometry-cambridge-igcse-maths', subtopics: [] },
      { number: 4, name: 'Geometry', slug: 'geometry-cambridge-igcse-maths', subtopics: [] },
      { number: 5, name: 'Mensuration', slug: 'mensuration-cambridge-igcse-maths', subtopics: [] },
      { number: 6, name: 'Trigonometry', slug: 'trigonometry-cambridge-igcse-maths', subtopics: [] },
      { number: 7, name: 'Transformations and vectors', slug: 'transformations-and-vectors-cambridge-igcse-maths', subtopics: [] },
      { number: 8, name: 'Probability', slug: 'probability-cambridge-igcse-maths', subtopics: [] },
      { number: 9, name: 'Statistics', slug: 'statistics-cambridge-igcse-maths', subtopics: [] },
    ],
  },

  {
    boardSlug: 'cambridge', qualificationSlug: 'a-level', subjectSlug: 'mathematics',
    syllabusCode: '9709', syllabusSeries: '2026-2027',
    effectiveFrom: '2026', effectiveTo: '2027', status: 'current',
    tiered: false,
    source: 'Cambridge Assessment International Education -- official syllabus PDF',
    sourceUrl: 'https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf', verifiedDate: '2026-08-19',
    notes: "Cambridge International AS & A Level Mathematics (9709). Modular: 6 papers across 3 content strands -- Pure Mathematics (Papers 1-3), Mechanics (Paper 4), Probability & Statistics (Papers 5-6). Different combinations of papers lead to different awards (e.g. Paper 1+2 for AS Pure Mathematics only; Paper 1,3,4,5 for the full A-level with Mechanics and Probability & Statistics 1). Not tiered in the Core/Extended sense. All 6 content sections and their sub-topic structure verified directly against the official syllabus PDF content overview (cambridgeinternational.org), fetched 2026-08-19.",
    topics: [
      { number: 1, name: 'Pure Mathematics 1', slug: 'pure-mathematics-1-cambridge-alevel', subtopics: [
        { number: '1.1', name: 'Quadratics', slug: 'quadratics-cambridge-alevel-maths' },
        { number: '1.2', name: 'Functions', slug: 'functions-cambridge-alevel-maths' },
        { number: '1.3', name: 'Coordinate geometry', slug: 'coordinate-geometry-cambridge-alevel-maths' },
        { number: '1.4', name: 'Circular measure', slug: 'circular-measure-cambridge-alevel-maths' },
        { number: '1.5', name: 'Trigonometry', slug: 'trigonometry-cambridge-alevel-maths-1' },
        { number: '1.6', name: 'Series', slug: 'series-cambridge-alevel-maths' },
        { number: '1.7', name: 'Differentiation', slug: 'differentiation-cambridge-alevel-maths-1' },
        { number: '1.8', name: 'Integration', slug: 'integration-cambridge-alevel-maths-1' },
      ] },
      { number: 2, name: 'Pure Mathematics 2', slug: 'pure-mathematics-2-cambridge-alevel', subtopics: [
        { number: '2.1', name: 'Algebra', slug: 'algebra-cambridge-alevel-maths-2' },
        { number: '2.2', name: 'Logarithmic and exponential functions', slug: 'logarithmic-and-exponential-functions-cambridge-2' },
        { number: '2.3', name: 'Trigonometry', slug: 'trigonometry-cambridge-alevel-maths-2' },
        { number: '2.4', name: 'Differentiation', slug: 'differentiation-cambridge-alevel-maths-2' },
        { number: '2.5', name: 'Integration', slug: 'integration-cambridge-alevel-maths-2' },
        { number: '2.6', name: 'Numerical solution of equations', slug: 'numerical-solution-of-equations-cambridge-2' },
      ] },
      { number: 3, name: 'Pure Mathematics 3', slug: 'pure-mathematics-3-cambridge-alevel', subtopics: [
        { number: '3.1', name: 'Algebra', slug: 'algebra-cambridge-alevel-maths-3' },
        { number: '3.2', name: 'Logarithmic and exponential functions', slug: 'logarithmic-and-exponential-functions-cambridge-3' },
        { number: '3.3', name: 'Trigonometry', slug: 'trigonometry-cambridge-alevel-maths-3' },
        { number: '3.4', name: 'Differentiation', slug: 'differentiation-cambridge-alevel-maths-3' },
        { number: '3.5', name: 'Integration', slug: 'integration-cambridge-alevel-maths-3' },
        { number: '3.6', name: 'Numerical solution of equations', slug: 'numerical-solution-of-equations-cambridge-3' },
        { number: '3.7', name: 'Vectors', slug: 'vectors-cambridge-alevel-maths' },
        { number: '3.8', name: 'Differential equations', slug: 'differential-equations-cambridge-alevel-maths' },
        { number: '3.9', name: 'Complex numbers', slug: 'complex-numbers-cambridge-alevel-maths' },
      ] },
      { number: 4, name: 'Mechanics', slug: 'mechanics-cambridge-alevel-maths', subtopics: [
        { number: '4.1', name: 'Forces and equilibrium', slug: 'forces-and-equilibrium-cambridge-alevel-maths' },
        { number: '4.2', name: 'Kinematics of motion in a straight line', slug: 'kinematics-of-motion-in-a-straight-line-cambridge' },
        { number: '4.3', name: 'Momentum', slug: 'momentum-cambridge-alevel-maths' },
        { number: '4.4', name: "Newton's laws of motion", slug: 'newtons-laws-of-motion-cambridge-alevel-maths' },
        { number: '4.5', name: 'Energy, work and power', slug: 'energy-work-and-power-cambridge-alevel-maths' },
      ] },
      { number: 5, name: 'Probability & Statistics 1', slug: 'probability-and-statistics-1-cambridge-alevel', subtopics: [
        { number: '5.1', name: 'Representation of data', slug: 'representation-of-data-cambridge-alevel-maths' },
        { number: '5.2', name: 'Permutations and combinations', slug: 'permutations-and-combinations-cambridge-alevel-maths' },
        { number: '5.3', name: 'Probability', slug: 'probability-cambridge-alevel-maths' },
        { number: '5.4', name: 'Discrete random variables', slug: 'discrete-random-variables-cambridge-alevel-maths' },
        { number: '5.5', name: 'The normal distribution', slug: 'the-normal-distribution-cambridge-alevel-maths' },
      ] },
      { number: 6, name: 'Probability & Statistics 2', slug: 'probability-and-statistics-2-cambridge-alevel', subtopics: [
        { number: '6.1', name: 'The Poisson distribution', slug: 'the-poisson-distribution-cambridge-alevel-maths' },
        { number: '6.2', name: 'Linear combinations of random variables', slug: 'linear-combinations-of-random-variables-cambridge' },
        { number: '6.3', name: 'Continuous random variables', slug: 'continuous-random-variables-cambridge-alevel-maths' },
        { number: '6.4', name: 'Sampling and estimation', slug: 'sampling-and-estimation-cambridge-alevel-maths' },
        { number: '6.5', name: 'Hypothesis tests', slug: 'hypothesis-tests-cambridge-alevel-maths' },
      ] },
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
/**
 * v1.2 WS1 fix: this MUST be keyed by board, not just qualification+subject.
 * Before this fix, topicsFor('a-level', 'chemistry') returned Cambridge's
 * 9701 topic list for every board sharing that qualification+subject pair
 * -- so OCR, AQA, Pearson Edexcel and OxfordAQA A-level Chemistry pages all
 * silently rendered Cambridge's topic list, tiering language and syllabus
 * PDF citation as if it were their own official content. Every entry in
 * this file is Cambridge-only today (see file header), so requiring an
 * exact boardSlug match means a non-Cambridge page now correctly gets no
 * match -- and the template's existing honest "being verified" fallback
 * takes over -- instead of silently inheriting Cambridge's data.
 */
export const topicsFor = (boardSlug: string, qualificationSlug: string, subjectSlug: string = 'chemistry'): SyllabusVersion | undefined =>
  SYLLABUS_VERSIONS.find((s) =>
    s.boardSlug === boardSlug && s.qualificationSlug === qualificationSlug && s.subjectSlug === subjectSlug && s.status === 'current');

/** Back-compat alias. */
export const SYLLABUS_TOPICS = SYLLABUS_VERSIONS;

export const asTopics = (v: SyllabusVersion) => v.topics.filter((t) => t.stage === 'AS');
export const aLevelTopics = (v: SyllabusVersion) => v.topics.filter((t) => t.stage === 'A');
export const hasStages = (v: SyllabusVersion) => v.topics.some((t) => t.stage);

