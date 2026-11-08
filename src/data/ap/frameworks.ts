/**
 * Advanced-course (College Board AP) framework map -- 2026-27 school year, May 2027 exams.
 *
 * Every unit and topic number/title below was extracted from the official Course and
 * Exam Description (CED) PDF's own bookmarks, checked against the course page on
 * apcentral.collegeboard.org, and checked on `checkedOn`. Unit weightings are the
 * multiple-choice weightings published on each course page. Exam formats are from each
 * course's "The Exam" page and the 2026-27 clarifications PDFs (see ./sources.ts).
 *
 * Exception (topicSource: 'marlbridge'): the two English CEDs number their units but
 * have no numbered topics (English Language does not title its units either). For those
 * courses the topics, and the English Language unit titles, are Marlbridge groupings of
 * the CED's skills and essential knowledge statements; each topic's `cedRefs` lists the
 * CED codes it groups, so a topic number like "3.2" is a Marlbridge number, never an
 * official one. Computer Science Principles uses the CED's five big ideas as Units 1-5.
 *
 * This file is reference data for Marlbridge's own original learning resources. It holds
 * structure only (numbers, titles, weightings, formats) -- never College Board question
 * text. Change it only from a re-checked official source, and update `checkedOn`.
 *
 * Trademark note: "AP", "Advanced Placement" and "College Board" are trademarks of the
 * College Board. See docs/ap-library/editorial-integration-note.md before using any of
 * them in public titles, URLs, metadata or promotion.
 */
export interface ApTopic {
  number: string;
  title: string;
  /** Calculus only: BC-only topic. */
  bcOnly?: boolean;
  /** Courses with topicSource 'marlbridge' only: the CED skill / essential-knowledge codes this topic groups. */
  cedRefs?: readonly string[];
}
export interface ApUnit { number: number; title: string; /** Multiple-choice exam weighting, as published. */ weighting: string; bcOnly?: boolean; topics: readonly ApTopic[] }
export interface ApExamSection { name: string; questions: string; time: string; weight: string; detail?: readonly string[] }
export interface ApPractice { number: string; name: string; description: string }
export interface ApCourse {
  /** Neutral route segment under /advanced-course-resources/. */
  slug: string;
  /** Short course name without the trademark (used in neutral contexts). */
  name: string;
  /** Official College Board course title (a trademark; see note above). */
  officialName: string;
  /** Existing Marlbridge subject hubs this course is listed under. */
  subjectHubs: readonly string[];
  family: 'chemistry' | 'biology' | 'physics' | 'maths' | 'economics' | 'computing' | 'english';
  /** Official May 2027 exam date (ISO). */
  examDate: string;
  examMode: string;
  sections: readonly ApExamSection[];
  calculator: string;
  practices: readonly ApPractice[];
  may2027Change?: string;
  clarifications: string;
  prerequisiteNote: string;
  labRequirement?: string;
  unitNumbering?: string;
  /** 'ced' (default): topic numbers and titles are the CED's own. 'marlbridge': the CED has no numbered topics; see the header note. */
  topicSource?: 'ced' | 'marlbridge';
  /** 'ced' (default) or 'marlbridge' when the CED leaves units untitled (English Language). */
  unitTitleSource?: 'ced' | 'marlbridge';
  /** Set when the exam is not weighted unit by unit; replaces "Weightings are the official multiple-choice ranges". */
  unitWeightingNote?: string;
  units: readonly ApUnit[];
  cedUrl: string;
  coursePageUrl: string;
  examPageUrl: string;
  checkedOn: string;
  schoolYear: '2026-27';
  examSeries: 'May 2027';
}

export const AP_COURSES: readonly ApCourse[] = [
  {
    "slug": "chemistry",
    "name": "Chemistry",
    "officialName": "AP Chemistry",
    "subjectHubs": [
      "chemistry"
    ],
    "family": "chemistry",
    "examDate": "2027-05-06",
    "examMode": "Hybrid digital: multiple-choice answered in the Bluebook app; free-response viewed in Bluebook and handwritten in a paper booklet.",
    "sections": [
      {
        "name": "Section I: Multiple choice",
        "questions": "60",
        "time": "90 minutes",
        "weight": "50%"
      },
      {
        "name": "Section II: Free response",
        "questions": "7",
        "time": "105 minutes",
        "weight": "50%",
        "detail": [
          "3 long-answer questions (10 points each)",
          "4 short-answer questions (4 points each)"
        ]
      }
    ],
    "calculator": "A scientific or graphing calculator is recommended for both sections; a periodic table and formula sheet are provided.",
    "practices": [
      {
        "number": "1",
        "name": "Models and Representations",
        "description": "Describe models and representations, including across scales."
      },
      {
        "number": "2",
        "name": "Question and Method",
        "description": "Determine scientific questions and methods."
      },
      {
        "number": "3",
        "name": "Representing Data and Phenomena",
        "description": "Create representations or models of chemical phenomena. (Not assessed in multiple choice.)"
      },
      {
        "number": "4",
        "name": "Model Analysis",
        "description": "Analyze and interpret models and representations on a single scale or across multiple scales."
      },
      {
        "number": "5",
        "name": "Mathematical Routines",
        "description": "Solve problems using mathematical relationships."
      },
      {
        "number": "6",
        "name": "Argumentation",
        "description": "Develop an explanation or scientific argument."
      }
    ],
    "clarifications": "June 2026 clarifications are editorial (front matter, resource locations, Progress Check wording). No content change was listed.",
    "prerequisiteNote": "An introductory high-school chemistry course and Algebra II (or equivalent), per the CED.",
    "units": [
      {
        "number": 1,
        "title": "Atomic Structure and Properties",
        "weighting": "7–9%",
        "topics": [
          {
            "number": "1.1",
            "title": "Moles and Molar Mass"
          },
          {
            "number": "1.2",
            "title": "Mass Spectra of Elements"
          },
          {
            "number": "1.3",
            "title": "Elemental Composition of Pure Substances"
          },
          {
            "number": "1.4",
            "title": "Composition of Mixtures"
          },
          {
            "number": "1.5",
            "title": "Atomic Structure and Electron Configuration"
          },
          {
            "number": "1.6",
            "title": "Photoelectron Spectroscopy"
          },
          {
            "number": "1.7",
            "title": "Periodic Trends"
          },
          {
            "number": "1.8",
            "title": "Valence Electrons and Ionic Compounds"
          }
        ]
      },
      {
        "number": 2,
        "title": "Compound Structure and Properties",
        "weighting": "7–9%",
        "topics": [
          {
            "number": "2.1",
            "title": "Types of Chemical Bonds"
          },
          {
            "number": "2.2",
            "title": "Intramolecular Force and Potential Energy"
          },
          {
            "number": "2.3",
            "title": "Structure of Ionic Solids"
          },
          {
            "number": "2.4",
            "title": "Structure of Metals and Alloys"
          },
          {
            "number": "2.5",
            "title": "Lewis Diagrams"
          },
          {
            "number": "2.6",
            "title": "Resonance and Formal Charge"
          },
          {
            "number": "2.7",
            "title": "VSEPR and Hybridization"
          }
        ]
      },
      {
        "number": 3,
        "title": "Properties of Substances and Mixtures",
        "weighting": "18–22%",
        "topics": [
          {
            "number": "3.1",
            "title": "Intermolecular and Interparticle Forces"
          },
          {
            "number": "3.2",
            "title": "Properties of Solids"
          },
          {
            "number": "3.3",
            "title": "Solids, Liquids, and Gases"
          },
          {
            "number": "3.4",
            "title": "Ideal Gas Law"
          },
          {
            "number": "3.5",
            "title": "Kinetic Molecular Theory"
          },
          {
            "number": "3.6",
            "title": "Deviation from Ideal Gas Law"
          },
          {
            "number": "3.7",
            "title": "Solutions and Mixtures"
          },
          {
            "number": "3.8",
            "title": "Representations of Solutions"
          },
          {
            "number": "3.9",
            "title": "Separation of Solutions and Mixtures"
          },
          {
            "number": "3.10",
            "title": "Solubility"
          },
          {
            "number": "3.11",
            "title": "Spectroscopy and the Electromagnetic Spectrum"
          },
          {
            "number": "3.12",
            "title": "Properties of Photons"
          },
          {
            "number": "3.13",
            "title": "Beer-Lambert Law"
          }
        ]
      },
      {
        "number": 4,
        "title": "Chemical Reactions",
        "weighting": "7–9%",
        "topics": [
          {
            "number": "4.1",
            "title": "Introduction for Reactions"
          },
          {
            "number": "4.2",
            "title": "Net Ionic Equations"
          },
          {
            "number": "4.3",
            "title": "Representations of Reactions"
          },
          {
            "number": "4.4",
            "title": "Physical and Chemical Changes"
          },
          {
            "number": "4.5",
            "title": "Stoichiometry"
          },
          {
            "number": "4.6",
            "title": "Introduction to Titration"
          },
          {
            "number": "4.7",
            "title": "Types of Chemical Reactions"
          },
          {
            "number": "4.8",
            "title": "Introduction to Acid-Base Reactions"
          },
          {
            "number": "4.9",
            "title": "Oxidation-Reduction (Redox) Reactions"
          }
        ]
      },
      {
        "number": 5,
        "title": "Kinetics",
        "weighting": "7–9%",
        "topics": [
          {
            "number": "5.1",
            "title": "Reaction Rates"
          },
          {
            "number": "5.2",
            "title": "Introduction to Rate Law"
          },
          {
            "number": "5.3",
            "title": "Concentration Changes Over Time"
          },
          {
            "number": "5.4",
            "title": "Elementary Reactions"
          },
          {
            "number": "5.5",
            "title": "Collision Model"
          },
          {
            "number": "5.6",
            "title": "Reaction Energy Profile"
          },
          {
            "number": "5.7",
            "title": "Introduction to Reaction Mechanisms"
          },
          {
            "number": "5.8",
            "title": "Reaction Mechanism and Rate Law"
          },
          {
            "number": "5.9",
            "title": "Pre-Equilibrium Approximation"
          },
          {
            "number": "5.10",
            "title": "Multistep Reaction Energy Profile"
          },
          {
            "number": "5.11",
            "title": "Catalysis"
          }
        ]
      },
      {
        "number": 6,
        "title": "Thermochemistry",
        "weighting": "7–9%",
        "topics": [
          {
            "number": "6.1",
            "title": "Endothermic and Exothermic Processes"
          },
          {
            "number": "6.2",
            "title": "Energy Diagrams"
          },
          {
            "number": "6.3",
            "title": "Heat Transfer and Thermal Equilibrium"
          },
          {
            "number": "6.4",
            "title": "Heat Capacity and Calorimetry"
          },
          {
            "number": "6.5",
            "title": "Energy of Phase Changes"
          },
          {
            "number": "6.6",
            "title": "Introduction to Enthalpy of Reaction"
          },
          {
            "number": "6.7",
            "title": "Bond Enthalpies"
          },
          {
            "number": "6.8",
            "title": "Enthalpy of Formation"
          },
          {
            "number": "6.9",
            "title": "Hess’s Law"
          }
        ]
      },
      {
        "number": 7,
        "title": "Equilibrium",
        "weighting": "7–9%",
        "topics": [
          {
            "number": "7.1",
            "title": "Introduction to Equilibrium"
          },
          {
            "number": "7.2",
            "title": "Direction of Reversible Reactions"
          },
          {
            "number": "7.3",
            "title": "Reaction Quotient and Equilibrium Constant"
          },
          {
            "number": "7.4",
            "title": "Calculating the Equilibrium Constant"
          },
          {
            "number": "7.5",
            "title": "Magnitude of the Equilibrium Constant"
          },
          {
            "number": "7.6",
            "title": "Properties of the Equilibrium Constant"
          },
          {
            "number": "7.7",
            "title": "Calculating Equilibrium Concentrations"
          },
          {
            "number": "7.8",
            "title": "Representations of Equilibrium"
          },
          {
            "number": "7.9",
            "title": "Introduction to Le Châtelier’s Principle"
          },
          {
            "number": "7.10",
            "title": "Reaction Quotient and Le Châtelier’s Principle"
          },
          {
            "number": "7.11",
            "title": "Introduction to Solubility Equilibria"
          },
          {
            "number": "7.12",
            "title": "Common-Ion Effect"
          }
        ]
      },
      {
        "number": 8,
        "title": "Acids and Bases",
        "weighting": "11–15%",
        "topics": [
          {
            "number": "8.1",
            "title": "Introduction to Acids and Bases"
          },
          {
            "number": "8.2",
            "title": "pH and pOH of Strong Acids and Bases"
          },
          {
            "number": "8.3",
            "title": "Weak Acid and Base Equilibria"
          },
          {
            "number": "8.4",
            "title": "Acid-Base Reactions and Buffers"
          },
          {
            "number": "8.5",
            "title": "Acid-Base Titrations"
          },
          {
            "number": "8.6",
            "title": "Molecular Structure of Acids and Bases"
          },
          {
            "number": "8.7",
            "title": "pH and pKa"
          },
          {
            "number": "8.8",
            "title": "Properties of Buffers"
          },
          {
            "number": "8.9",
            "title": "Henderson-Hasselbalch Equation"
          },
          {
            "number": "8.10",
            "title": "Buffer Capacity"
          },
          {
            "number": "8.11",
            "title": "pH and Solubility"
          }
        ]
      },
      {
        "number": 9,
        "title": "Thermodynamics and Electrochemistry",
        "weighting": "7–9%",
        "topics": [
          {
            "number": "9.1",
            "title": "Introduction to Entropy"
          },
          {
            "number": "9.2",
            "title": "Absolute Entropy and Entropy Change"
          },
          {
            "number": "9.3",
            "title": "Gibbs Free Energy and Thermodynamic Favorability"
          },
          {
            "number": "9.4",
            "title": "Thermodynamic and Kinetic Control"
          },
          {
            "number": "9.5",
            "title": "Free Energy and Equilibrium"
          },
          {
            "number": "9.6",
            "title": "Free Energy of Dissolution"
          },
          {
            "number": "9.7",
            "title": "Coupled Reactions"
          },
          {
            "number": "9.8",
            "title": "Galvanic (Voltaic) and Electrolytic Cells"
          },
          {
            "number": "9.9",
            "title": "Cell Potential and Free Energy"
          },
          {
            "number": "9.10",
            "title": "Cell Potential Under Nonstandard Conditions"
          },
          {
            "number": "9.11",
            "title": "Electrolysis and Faraday’s Law"
          }
        ]
      }
    ],
    "cedUrl": "https://apcentral.collegeboard.org/media/pdf/ap-chemistry-course-and-exam-description.pdf",
    "coursePageUrl": "https://apcentral.collegeboard.org/courses/ap-chemistry",
    "examPageUrl": "https://apcentral.collegeboard.org/courses/ap-chemistry/exam",
    "checkedOn": "2026-10-05",
    "schoolYear": "2026-27",
    "examSeries": "May 2027",
    "labRequirement": "The CED requires 25% of instructional time on hands-on laboratory work, with at least 16 hands-on labs (six or more inquiry-based)."
  },
  {
    "slug": "biology",
    "name": "Biology",
    "officialName": "AP Biology",
    "subjectHubs": [
      "biology"
    ],
    "family": "biology",
    "examDate": "2027-05-03",
    "examMode": "Hybrid digital: multiple-choice answered in the Bluebook app; free-response viewed in Bluebook and handwritten in a paper booklet.",
    "sections": [
      {
        "name": "Section I: Multiple choice",
        "questions": "60",
        "time": "90 minutes",
        "weight": "50%"
      },
      {
        "name": "Section II: Free response",
        "questions": "6",
        "time": "90 minutes",
        "weight": "50%",
        "detail": [
          "2 long questions (9 points each): interpreting and evaluating experimental results, one with graphing",
          "4 short questions (4 points each): scientific investigation, conceptual analysis, analysis of a model or visual representation, data analysis"
        ]
      }
    ],
    "calculator": "A four-function, scientific or graphing calculator is allowed on both sections.",
    "practices": [
      {
        "number": "1",
        "name": "Concept Explanation",
        "description": "Explain biological concepts, processes and models presented in written format."
      },
      {
        "number": "2",
        "name": "Visual Representations",
        "description": "Analyze visual representations of biological concepts and processes."
      },
      {
        "number": "3",
        "name": "Questions and Methods",
        "description": "Determine scientific questions and methods."
      },
      {
        "number": "4",
        "name": "Representing and Describing Data",
        "description": "Represent and describe data."
      },
      {
        "number": "5",
        "name": "Statistical Tests and Data Analysis",
        "description": "Perform statistical tests and mathematical calculations to analyze and interpret data."
      },
      {
        "number": "6",
        "name": "Argumentation",
        "description": "Develop and justify scientific arguments using evidence."
      }
    ],
    "clarifications": "June 2025: FRQ 5 retitled \"Analyze Model or Visual Representation of a Biological Concept or Process\"; sample FRQ 2 added and FRQ 5 replaced. June 2026: editorial updates only.",
    "prerequisiteNote": "High-school courses in biology and chemistry, per the CED.",
    "units": [
      {
        "number": 1,
        "title": "Chemistry of Life",
        "weighting": "8–11%",
        "topics": [
          {
            "number": "1.1",
            "title": "Structure of Water and Hydrogen Bonding"
          },
          {
            "number": "1.2",
            "title": "Elements of Life"
          },
          {
            "number": "1.3",
            "title": "Introduction to Macromolecules"
          },
          {
            "number": "1.4",
            "title": "Carbohydrates"
          },
          {
            "number": "1.5",
            "title": "Lipids"
          },
          {
            "number": "1.6",
            "title": "Nucleic Acids"
          },
          {
            "number": "1.7",
            "title": "Proteins"
          }
        ]
      },
      {
        "number": 2,
        "title": "Cells",
        "weighting": "10–13%",
        "topics": [
          {
            "number": "2.1",
            "title": "Cell Structure and Function"
          },
          {
            "number": "2.2",
            "title": "Cell Size"
          },
          {
            "number": "2.3",
            "title": "Plasma Membrane"
          },
          {
            "number": "2.4",
            "title": "Membrane Permeability"
          },
          {
            "number": "2.5",
            "title": "Membrane Transport"
          },
          {
            "number": "2.6",
            "title": "Facilitated Diffusion"
          },
          {
            "number": "2.7",
            "title": "Tonicity and Osmoregulation"
          },
          {
            "number": "2.8",
            "title": "Mechanisms of Transport"
          },
          {
            "number": "2.9",
            "title": "Cell Compartmentalization"
          },
          {
            "number": "2.10",
            "title": "Origins of Cell Compartmentalization"
          }
        ]
      },
      {
        "number": 3,
        "title": "Cellular Energetics",
        "weighting": "12–16%",
        "topics": [
          {
            "number": "3.1",
            "title": "Enzymes"
          },
          {
            "number": "3.2",
            "title": "Environmental Impacts on Enzyme Function"
          },
          {
            "number": "3.3",
            "title": "Cellular Energy"
          },
          {
            "number": "3.4",
            "title": "Photosynthesis"
          },
          {
            "number": "3.5",
            "title": "Cellular Respiration"
          }
        ]
      },
      {
        "number": 4,
        "title": "Cell Communication and Cell Cycle",
        "weighting": "10–15%",
        "topics": [
          {
            "number": "4.1",
            "title": "Cell Communication"
          },
          {
            "number": "4.2",
            "title": "Introduction to Signal Transduction"
          },
          {
            "number": "4.3",
            "title": "Signal Transduction Pathways"
          },
          {
            "number": "4.4",
            "title": "Feedback"
          },
          {
            "number": "4.5",
            "title": "Cell Cycle"
          },
          {
            "number": "4.6",
            "title": "Regulation of Cell Cycle"
          }
        ]
      },
      {
        "number": 5,
        "title": "Heredity",
        "weighting": "8–11%",
        "topics": [
          {
            "number": "5.1",
            "title": "Meiosis"
          },
          {
            "number": "5.2",
            "title": "Meiosis and Genetic Diversity"
          },
          {
            "number": "5.3",
            "title": "Mendelian Genetics"
          },
          {
            "number": "5.4",
            "title": "Non-Mendelian Genetics"
          },
          {
            "number": "5.5",
            "title": "Environmental Effects on Phenotype"
          }
        ]
      },
      {
        "number": 6,
        "title": "Gene Expression and Regulation",
        "weighting": "12–16%",
        "topics": [
          {
            "number": "6.1",
            "title": "DNA and RNA Structure"
          },
          {
            "number": "6.2",
            "title": "DNA Replication"
          },
          {
            "number": "6.3",
            "title": "Transcription and RNA Processing"
          },
          {
            "number": "6.4",
            "title": "Translation"
          },
          {
            "number": "6.5",
            "title": "Regulation of Gene Expression"
          },
          {
            "number": "6.6",
            "title": "Gene Expression and Cell Specialization"
          },
          {
            "number": "6.7",
            "title": "Mutations"
          },
          {
            "number": "6.8",
            "title": "Biotechnology"
          }
        ]
      },
      {
        "number": 7,
        "title": "Natural Selection",
        "weighting": "13–20%",
        "topics": [
          {
            "number": "7.1",
            "title": "Introduction to Natural Selection"
          },
          {
            "number": "7.2",
            "title": "Natural Selection"
          },
          {
            "number": "7.3",
            "title": "Artificial Selection"
          },
          {
            "number": "7.4",
            "title": "Population Genetics"
          },
          {
            "number": "7.5",
            "title": "Hardy–Weinberg Equilibrium"
          },
          {
            "number": "7.6",
            "title": "Evidence of Evolution"
          },
          {
            "number": "7.7",
            "title": "Common Ancestry"
          },
          {
            "number": "7.8",
            "title": "Continuing Evolution"
          },
          {
            "number": "7.9",
            "title": "Phylogeny"
          },
          {
            "number": "7.10",
            "title": "Speciation"
          },
          {
            "number": "7.11",
            "title": "Variations in Populations"
          },
          {
            "number": "7.12",
            "title": "Origins of Life on Earth"
          }
        ]
      },
      {
        "number": 8,
        "title": "Ecology",
        "weighting": "10–15%",
        "topics": [
          {
            "number": "8.1",
            "title": "Responses to the Environment"
          },
          {
            "number": "8.2",
            "title": "Energy Flow Through Ecosystems"
          },
          {
            "number": "8.3",
            "title": "Population Ecology"
          },
          {
            "number": "8.4",
            "title": "Effect of Density on Populations"
          },
          {
            "number": "8.5",
            "title": "Community Ecology"
          },
          {
            "number": "8.6",
            "title": "Biodiversity"
          },
          {
            "number": "8.7",
            "title": "Disruptions in Ecosystems"
          }
        ]
      }
    ],
    "cedUrl": "https://apcentral.collegeboard.org/media/pdf/ap-biology-course-and-exam-description.pdf",
    "coursePageUrl": "https://apcentral.collegeboard.org/courses/ap-biology",
    "examPageUrl": "https://apcentral.collegeboard.org/courses/ap-biology/exam",
    "checkedOn": "2026-10-05",
    "schoolYear": "2026-27",
    "examSeries": "May 2027",
    "labRequirement": "The CED requires 25% of instructional time on hands-on laboratory work."
  },
  {
    "slug": "calculus-ab",
    "name": "Calculus AB",
    "officialName": "AP Calculus AB",
    "subjectHubs": [
      "mathematics"
    ],
    "family": "maths",
    "examDate": "2027-05-10",
    "examMode": "Hybrid digital: multiple-choice answered in the Bluebook app; free-response viewed in Bluebook and handwritten in a paper booklet.",
    "sections": [
      {
        "name": "Section I: Multiple choice",
        "questions": "42",
        "time": "100 minutes",
        "weight": "50%",
        "detail": [
          "Part A: 29 questions, 62 minutes, no calculator (35% of exam score)",
          "Part B: 13 questions, 38 minutes, graphing calculator required (15%)"
        ]
      },
      {
        "name": "Section II: Free response",
        "questions": "6",
        "time": "90 minutes",
        "weight": "50%",
        "detail": [
          "Part A: 2 questions, 30 minutes, graphing calculator required",
          "Part B: 4 questions, 60 minutes, no calculator"
        ]
      }
    ],
    "calculator": "Graphing calculator required for MCQ Part B and FRQ Part A; not permitted in MCQ Part A and FRQ Part B.",
    "practices": [
      {
        "number": "1",
        "name": "Implementing Mathematical Processes",
        "description": "Determine expressions and values using mathematical procedures and rules."
      },
      {
        "number": "2",
        "name": "Connecting Representations",
        "description": "Translate mathematical information from a single representation or across multiple representations."
      },
      {
        "number": "3",
        "name": "Justification",
        "description": "Justify reasoning and solutions."
      },
      {
        "number": "4",
        "name": "Communication and Notation",
        "description": "Use correct notation, language and mathematical conventions to communicate results or solutions. (Free response only.)"
      }
    ],
    "may2027Change": "Multiple choice Part A changed from 30 questions in 60 minutes to 29 in 62 minutes; Part B from 15 in 45 minutes to 13 in 38 minutes (effective May 2027).",
    "clarifications": "Fall 2026: EK FUN-1.C.1 (Extreme Value Theorem) and EK FUN-7.B.2 reworded; \"course content has not changed\".",
    "prerequisiteNote": "The equivalent of four years of college-preparatory secondary mathematics, including the functions, trigonometry and graphs listed in the CED.",
    "units": [
      {
        "number": 1,
        "title": "Limits and Continuity",
        "weighting": "10–15%",
        "topics": [
          {
            "number": "1.1",
            "title": "Introducing Calculus: Can Change Occur at an Instant?"
          },
          {
            "number": "1.2",
            "title": "Defining Limits and Using Limit Notation"
          },
          {
            "number": "1.3",
            "title": "Estimating Limit Values from Graphs"
          },
          {
            "number": "1.4",
            "title": "Estimating Limit Values from Tables"
          },
          {
            "number": "1.5",
            "title": "Determining Limits Using Algebraic Properties of Limits"
          },
          {
            "number": "1.6",
            "title": "Determining Limits Using Algebraic Manipulation"
          },
          {
            "number": "1.7",
            "title": "Selecting Procedures for Determining Limits"
          },
          {
            "number": "1.8",
            "title": "Determining Limits Using the Squeeze Theorem"
          },
          {
            "number": "1.9",
            "title": "Connecting Multiple Representations of Limits"
          },
          {
            "number": "1.10",
            "title": "Exploring Types of Discontinuities"
          },
          {
            "number": "1.11",
            "title": "Defining Continuity at a Point"
          },
          {
            "number": "1.12",
            "title": "Confirming Continuity over an Interval"
          },
          {
            "number": "1.13",
            "title": "Removing Discontinuities"
          },
          {
            "number": "1.14",
            "title": "Connecting Infinite Limits and Vertical Asymptotes"
          },
          {
            "number": "1.15",
            "title": "Connecting Limits at Infinity and Horizontal Asymptotes"
          },
          {
            "number": "1.16",
            "title": "Working with the Intermediate Value Theorem (IVT)"
          }
        ]
      },
      {
        "number": 2,
        "title": "Differentiation: Definition and Fundamental Properties",
        "weighting": "10–15%",
        "topics": [
          {
            "number": "2.1",
            "title": "Defining Average and Instantaneous Rates of Change at a Point"
          },
          {
            "number": "2.2",
            "title": "Defining the Derivative of a Function and Using Derivative Notation"
          },
          {
            "number": "2.3",
            "title": "Estimating Derivatives of a Function at a Point"
          },
          {
            "number": "2.4",
            "title": "Connecting Differentiability and Continuity: Determining When Derivatives Do and Do Not Exist"
          },
          {
            "number": "2.5",
            "title": "Applying the Power Rule"
          },
          {
            "number": "2.6",
            "title": "Derivative Rules: Constant, Sum, Difference, and Constant Multiple"
          },
          {
            "number": "2.7",
            "title": "Derivatives of cos x, sin x, eˣ, and ln x"
          },
          {
            "number": "2.8",
            "title": "The Product Rule"
          },
          {
            "number": "2.9",
            "title": "The Quotient Rule"
          },
          {
            "number": "2.10",
            "title": "Finding the Derivatives of Tangent, Cotangent, Secant, and/or Cosecant Functions"
          }
        ]
      },
      {
        "number": 3,
        "title": "Differentiation: Composite, Implicit, and Inverse Functions",
        "weighting": "5–10%",
        "topics": [
          {
            "number": "3.1",
            "title": "The Chain Rule"
          },
          {
            "number": "3.2",
            "title": "Implicit Differentiation"
          },
          {
            "number": "3.3",
            "title": "Differentiating Inverse Functions"
          },
          {
            "number": "3.4",
            "title": "Differentiating Inverse Trigonometric Functions"
          },
          {
            "number": "3.5",
            "title": "Selecting Procedures for Calculating Derivatives"
          },
          {
            "number": "3.6",
            "title": "Calculating Higher-Order Derivatives"
          }
        ]
      },
      {
        "number": 4,
        "title": "Contextual Applications of Differentiation",
        "weighting": "10–15%",
        "topics": [
          {
            "number": "4.1",
            "title": "Interpreting the Meaning of the Derivative in Context"
          },
          {
            "number": "4.2",
            "title": "Straight-Line Motion: Connecting Position, Velocity, and Acceleration"
          },
          {
            "number": "4.3",
            "title": "Rates of Change in Applied Contexts Other Than Motion"
          },
          {
            "number": "4.4",
            "title": "Introduction to Related Rates"
          },
          {
            "number": "4.5",
            "title": "Solving Related Rates Problems"
          },
          {
            "number": "4.6",
            "title": "Approximating Values of a Function Using Local Linearity and Linearization"
          },
          {
            "number": "4.7",
            "title": "Using L’Hospital’s Rule for Determining Limits of Indeterminate Forms"
          }
        ]
      },
      {
        "number": 5,
        "title": "Analytical Applications of Differentiation",
        "weighting": "15–20%",
        "topics": [
          {
            "number": "5.1",
            "title": "Using the Mean Value Theorem"
          },
          {
            "number": "5.2",
            "title": "Extreme Value Theorem, Global Versus Local Extrema, and Critical Points"
          },
          {
            "number": "5.3",
            "title": "Determining Intervals on Which a Function Is Increasing or Decreasing"
          },
          {
            "number": "5.4",
            "title": "Using the First Derivative Test to Determine Relative (Local) Extrema"
          },
          {
            "number": "5.5",
            "title": "Using the Candidates Test to Determine Absolute (Global) Extrema"
          },
          {
            "number": "5.6",
            "title": "Determining Concavity of Functions over Their Domains"
          },
          {
            "number": "5.7",
            "title": "Using the Second Derivative Test to Determine Extrema"
          },
          {
            "number": "5.8",
            "title": "Sketching Graphs of Functions and Their Derivatives"
          },
          {
            "number": "5.9",
            "title": "Connecting a Function, Its First Derivative, and Its Second Derivative"
          },
          {
            "number": "5.10",
            "title": "Introduction to Optimization Problems"
          },
          {
            "number": "5.11",
            "title": "Solving Optimization Problems"
          },
          {
            "number": "5.12",
            "title": "Exploring Behaviors of Implicit Relations"
          }
        ]
      },
      {
        "number": 6,
        "title": "Integration and Accumulation of Change",
        "weighting": "15–20%",
        "topics": [
          {
            "number": "6.1",
            "title": "Exploring Accumulations of Change"
          },
          {
            "number": "6.2",
            "title": "Approximating Areas with Riemann Sums"
          },
          {
            "number": "6.3",
            "title": "Riemann Sums, Summation Notation, and Definite Integral Notation"
          },
          {
            "number": "6.4",
            "title": "The Fundamental Theorem of Calculus and Accumulation Functions"
          },
          {
            "number": "6.5",
            "title": "Interpreting the Behavior of Accumulation Functions Involving Area"
          },
          {
            "number": "6.6",
            "title": "Applying Properties of Definite Integrals"
          },
          {
            "number": "6.7",
            "title": "The Fundamental Theorem of Calculus and Definite Integrals"
          },
          {
            "number": "6.8",
            "title": "Finding Antiderivatives and Indefinite Integrals: Basic Rules and Notation"
          },
          {
            "number": "6.9",
            "title": "Integrating Using Substitution"
          },
          {
            "number": "6.10",
            "title": "Integrating Functions Using Long Division and Completing the Square"
          },
          {
            "number": "6.14",
            "title": "Selecting Techniques for Antidifferentiation"
          }
        ]
      },
      {
        "number": 7,
        "title": "Differential Equations",
        "weighting": "5–10%",
        "topics": [
          {
            "number": "7.1",
            "title": "Modeling Situations with Differential Equations"
          },
          {
            "number": "7.2",
            "title": "Verifying Solutions for Differential Equations"
          },
          {
            "number": "7.3",
            "title": "Sketching Slope Fields"
          },
          {
            "number": "7.4",
            "title": "Reasoning Using Slope Fields"
          },
          {
            "number": "7.6",
            "title": "Finding General Solutions Using Separation of Variables"
          },
          {
            "number": "7.7",
            "title": "Finding Particular Solutions Using Initial Conditions and Separation of Variables"
          },
          {
            "number": "7.8",
            "title": "Exponential Models with Differential Equations"
          }
        ]
      },
      {
        "number": 8,
        "title": "Applications of Integration",
        "weighting": "10–15%",
        "topics": [
          {
            "number": "8.1",
            "title": "Finding the Average Value of a Function on an Interval"
          },
          {
            "number": "8.2",
            "title": "Connecting Position, Velocity, and Acceleration of Functions Using Integrals"
          },
          {
            "number": "8.3",
            "title": "Using Accumulation Functions and Definite Integrals in Applied Contexts"
          },
          {
            "number": "8.4",
            "title": "Finding the Area Between Curves Expressed as Functions of x"
          },
          {
            "number": "8.5",
            "title": "Finding the Area Between Curves Expressed as Functions of y"
          },
          {
            "number": "8.6",
            "title": "Finding the Area Between Curves That Intersect at More Than Two Points"
          },
          {
            "number": "8.7",
            "title": "Volumes with Cross Sections: Squares and Rectangles"
          },
          {
            "number": "8.8",
            "title": "Volumes with Cross Sections: Triangles and Semicircles"
          },
          {
            "number": "8.9",
            "title": "Volume with Disc Method: Revolving Around the x- or y-Axis"
          },
          {
            "number": "8.10",
            "title": "Volume with Disc Method: Revolving Around Other Axes"
          },
          {
            "number": "8.11",
            "title": "Volume with Washer Method: Revolving Around the x- or y-Axis"
          },
          {
            "number": "8.12",
            "title": "Volume with Washer Method: Revolving Around Other Axes"
          }
        ]
      }
    ],
    "cedUrl": "https://apcentral.collegeboard.org/media/pdf/ap-calculus-ab-and-bc-course-and-exam-description.pdf",
    "coursePageUrl": "https://apcentral.collegeboard.org/courses/ap-calculus-ab",
    "examPageUrl": "https://apcentral.collegeboard.org/courses/ap-calculus-ab/exam",
    "checkedOn": "2026-10-05",
    "schoolYear": "2026-27",
    "examSeries": "May 2027"
  },
  {
    "slug": "calculus-bc",
    "name": "Calculus BC",
    "officialName": "AP Calculus BC",
    "subjectHubs": [
      "mathematics"
    ],
    "family": "maths",
    "examDate": "2027-05-10",
    "examMode": "Hybrid digital: multiple-choice answered in the Bluebook app; free-response viewed in Bluebook and handwritten in a paper booklet.",
    "sections": [
      {
        "name": "Section I: Multiple choice",
        "questions": "42",
        "time": "100 minutes",
        "weight": "50%",
        "detail": [
          "Part A: 29 questions, 62 minutes, no calculator (35% of exam score)",
          "Part B: 13 questions, 38 minutes, graphing calculator required (15%)"
        ]
      },
      {
        "name": "Section II: Free response",
        "questions": "6",
        "time": "90 minutes",
        "weight": "50%",
        "detail": [
          "Part A: 2 questions, 30 minutes, graphing calculator required",
          "Part B: 4 questions, 60 minutes, no calculator"
        ]
      }
    ],
    "calculator": "Graphing calculator required for MCQ Part B and FRQ Part A; not permitted in MCQ Part A and FRQ Part B.",
    "practices": [
      {
        "number": "1",
        "name": "Implementing Mathematical Processes",
        "description": "Determine expressions and values using mathematical procedures and rules."
      },
      {
        "number": "2",
        "name": "Connecting Representations",
        "description": "Translate mathematical information from a single representation or across multiple representations."
      },
      {
        "number": "3",
        "name": "Justification",
        "description": "Justify reasoning and solutions."
      },
      {
        "number": "4",
        "name": "Communication and Notation",
        "description": "Use correct notation, language and mathematical conventions to communicate results or solutions. (Free response only.)"
      }
    ],
    "may2027Change": "Multiple choice Part A changed from 30 questions in 60 minutes to 29 in 62 minutes; Part B from 15 in 45 minutes to 13 in 38 minutes (effective May 2027).",
    "clarifications": "Fall 2026: EK FUN-1.C.1 (Extreme Value Theorem) and EK FUN-7.B.2 reworded; \"course content has not changed\".",
    "prerequisiteNote": "As for Calculus AB (four years of college-preparatory mathematics). BC covers all AB content plus BC-only topics and Units 9–10.",
    "units": [
      {
        "number": 1,
        "title": "Limits and Continuity",
        "weighting": "5–10%",
        "topics": [
          {
            "number": "1.1",
            "title": "Introducing Calculus: Can Change Occur at an Instant?"
          },
          {
            "number": "1.2",
            "title": "Defining Limits and Using Limit Notation"
          },
          {
            "number": "1.3",
            "title": "Estimating Limit Values from Graphs"
          },
          {
            "number": "1.4",
            "title": "Estimating Limit Values from Tables"
          },
          {
            "number": "1.5",
            "title": "Determining Limits Using Algebraic Properties of Limits"
          },
          {
            "number": "1.6",
            "title": "Determining Limits Using Algebraic Manipulation"
          },
          {
            "number": "1.7",
            "title": "Selecting Procedures for Determining Limits"
          },
          {
            "number": "1.8",
            "title": "Determining Limits Using the Squeeze Theorem"
          },
          {
            "number": "1.9",
            "title": "Connecting Multiple Representations of Limits"
          },
          {
            "number": "1.10",
            "title": "Exploring Types of Discontinuities"
          },
          {
            "number": "1.11",
            "title": "Defining Continuity at a Point"
          },
          {
            "number": "1.12",
            "title": "Confirming Continuity over an Interval"
          },
          {
            "number": "1.13",
            "title": "Removing Discontinuities"
          },
          {
            "number": "1.14",
            "title": "Connecting Infinite Limits and Vertical Asymptotes"
          },
          {
            "number": "1.15",
            "title": "Connecting Limits at Infinity and Horizontal Asymptotes"
          },
          {
            "number": "1.16",
            "title": "Working with the Intermediate Value Theorem (IVT)"
          }
        ]
      },
      {
        "number": 2,
        "title": "Differentiation: Definition and Fundamental Properties",
        "weighting": "5–10%",
        "topics": [
          {
            "number": "2.1",
            "title": "Defining Average and Instantaneous Rates of Change at a Point"
          },
          {
            "number": "2.2",
            "title": "Defining the Derivative of a Function and Using Derivative Notation"
          },
          {
            "number": "2.3",
            "title": "Estimating Derivatives of a Function at a Point"
          },
          {
            "number": "2.4",
            "title": "Connecting Differentiability and Continuity: Determining When Derivatives Do and Do Not Exist"
          },
          {
            "number": "2.5",
            "title": "Applying the Power Rule"
          },
          {
            "number": "2.6",
            "title": "Derivative Rules: Constant, Sum, Difference, and Constant Multiple"
          },
          {
            "number": "2.7",
            "title": "Derivatives of cos x, sin x, eˣ, and ln x"
          },
          {
            "number": "2.8",
            "title": "The Product Rule"
          },
          {
            "number": "2.9",
            "title": "The Quotient Rule"
          },
          {
            "number": "2.10",
            "title": "Finding the Derivatives of Tangent, Cotangent, Secant, and/or Cosecant Functions"
          }
        ]
      },
      {
        "number": 3,
        "title": "Differentiation: Composite, Implicit, and Inverse Functions",
        "weighting": "5–10%",
        "topics": [
          {
            "number": "3.1",
            "title": "The Chain Rule"
          },
          {
            "number": "3.2",
            "title": "Implicit Differentiation"
          },
          {
            "number": "3.3",
            "title": "Differentiating Inverse Functions"
          },
          {
            "number": "3.4",
            "title": "Differentiating Inverse Trigonometric Functions"
          },
          {
            "number": "3.5",
            "title": "Selecting Procedures for Calculating Derivatives"
          },
          {
            "number": "3.6",
            "title": "Calculating Higher-Order Derivatives"
          }
        ]
      },
      {
        "number": 4,
        "title": "Contextual Applications of Differentiation",
        "weighting": "5–10%",
        "topics": [
          {
            "number": "4.1",
            "title": "Interpreting the Meaning of the Derivative in Context"
          },
          {
            "number": "4.2",
            "title": "Straight-Line Motion: Connecting Position, Velocity, and Acceleration"
          },
          {
            "number": "4.3",
            "title": "Rates of Change in Applied Contexts Other Than Motion"
          },
          {
            "number": "4.4",
            "title": "Introduction to Related Rates"
          },
          {
            "number": "4.5",
            "title": "Solving Related Rates Problems"
          },
          {
            "number": "4.6",
            "title": "Approximating Values of a Function Using Local Linearity and Linearization"
          },
          {
            "number": "4.7",
            "title": "Using L’Hospital’s Rule for Determining Limits of Indeterminate Forms"
          }
        ]
      },
      {
        "number": 5,
        "title": "Analytical Applications of Differentiation",
        "weighting": "10–15%",
        "topics": [
          {
            "number": "5.1",
            "title": "Using the Mean Value Theorem"
          },
          {
            "number": "5.2",
            "title": "Extreme Value Theorem, Global Versus Local Extrema, and Critical Points"
          },
          {
            "number": "5.3",
            "title": "Determining Intervals on Which a Function Is Increasing or Decreasing"
          },
          {
            "number": "5.4",
            "title": "Using the First Derivative Test to Determine Relative (Local) Extrema"
          },
          {
            "number": "5.5",
            "title": "Using the Candidates Test to Determine Absolute (Global) Extrema"
          },
          {
            "number": "5.6",
            "title": "Determining Concavity of Functions over Their Domains"
          },
          {
            "number": "5.7",
            "title": "Using the Second Derivative Test to Determine Extrema"
          },
          {
            "number": "5.8",
            "title": "Sketching Graphs of Functions and Their Derivatives"
          },
          {
            "number": "5.9",
            "title": "Connecting a Function, Its First Derivative, and Its Second Derivative"
          },
          {
            "number": "5.10",
            "title": "Introduction to Optimization Problems"
          },
          {
            "number": "5.11",
            "title": "Solving Optimization Problems"
          },
          {
            "number": "5.12",
            "title": "Exploring Behaviors of Implicit Relations"
          }
        ]
      },
      {
        "number": 6,
        "title": "Integration and Accumulation of Change",
        "weighting": "15–20%",
        "topics": [
          {
            "number": "6.1",
            "title": "Exploring Accumulations of Change"
          },
          {
            "number": "6.2",
            "title": "Approximating Areas with Riemann Sums"
          },
          {
            "number": "6.3",
            "title": "Riemann Sums, Summation Notation, and Definite Integral Notation"
          },
          {
            "number": "6.4",
            "title": "The Fundamental Theorem of Calculus and Accumulation Functions"
          },
          {
            "number": "6.5",
            "title": "Interpreting the Behavior of Accumulation Functions Involving Area"
          },
          {
            "number": "6.6",
            "title": "Applying Properties of Definite Integrals"
          },
          {
            "number": "6.7",
            "title": "The Fundamental Theorem of Calculus and Definite Integrals"
          },
          {
            "number": "6.8",
            "title": "Finding Antiderivatives and Indefinite Integrals: Basic Rules and Notation"
          },
          {
            "number": "6.9",
            "title": "Integrating Using Substitution"
          },
          {
            "number": "6.10",
            "title": "Integrating Functions Using Long Division and Completing the Square"
          },
          {
            "number": "6.11",
            "title": "Integrating Using Integration by Parts",
            "bcOnly": true
          },
          {
            "number": "6.12",
            "title": "Integrating Using Linear Partial Fractions",
            "bcOnly": true
          },
          {
            "number": "6.13",
            "title": "Evaluating Improper Integrals",
            "bcOnly": true
          },
          {
            "number": "6.14",
            "title": "Selecting Techniques for Antidifferentiation"
          }
        ]
      },
      {
        "number": 7,
        "title": "Differential Equations",
        "weighting": "5–10%",
        "topics": [
          {
            "number": "7.1",
            "title": "Modeling Situations with Differential Equations"
          },
          {
            "number": "7.2",
            "title": "Verifying Solutions for Differential Equations"
          },
          {
            "number": "7.3",
            "title": "Sketching Slope Fields"
          },
          {
            "number": "7.4",
            "title": "Reasoning Using Slope Fields"
          },
          {
            "number": "7.5",
            "title": "Approximating Solutions Using Euler’s Method",
            "bcOnly": true
          },
          {
            "number": "7.6",
            "title": "Finding General Solutions Using Separation of Variables"
          },
          {
            "number": "7.7",
            "title": "Finding Particular Solutions Using Initial Conditions and Separation of Variables"
          },
          {
            "number": "7.8",
            "title": "Exponential Models with Differential Equations"
          },
          {
            "number": "7.9",
            "title": "Logistic Models with Differential Equations",
            "bcOnly": true
          }
        ]
      },
      {
        "number": 8,
        "title": "Applications of Integration",
        "weighting": "5–10%",
        "topics": [
          {
            "number": "8.1",
            "title": "Finding the Average Value of a Function on an Interval"
          },
          {
            "number": "8.2",
            "title": "Connecting Position, Velocity, and Acceleration of Functions Using Integrals"
          },
          {
            "number": "8.3",
            "title": "Using Accumulation Functions and Definite Integrals in Applied Contexts"
          },
          {
            "number": "8.4",
            "title": "Finding the Area Between Curves Expressed as Functions of x"
          },
          {
            "number": "8.5",
            "title": "Finding the Area Between Curves Expressed as Functions of y"
          },
          {
            "number": "8.6",
            "title": "Finding the Area Between Curves That Intersect at More Than Two Points"
          },
          {
            "number": "8.7",
            "title": "Volumes with Cross Sections: Squares and Rectangles"
          },
          {
            "number": "8.8",
            "title": "Volumes with Cross Sections: Triangles and Semicircles"
          },
          {
            "number": "8.9",
            "title": "Volume with Disc Method: Revolving Around the x- or y-Axis"
          },
          {
            "number": "8.10",
            "title": "Volume with Disc Method: Revolving Around Other Axes"
          },
          {
            "number": "8.11",
            "title": "Volume with Washer Method: Revolving Around the x- or y-Axis"
          },
          {
            "number": "8.12",
            "title": "Volume with Washer Method: Revolving Around Other Axes"
          },
          {
            "number": "8.13",
            "title": "The Arc Length of a Smooth, Planar Curve and Distance Traveled",
            "bcOnly": true
          }
        ]
      },
      {
        "number": 9,
        "title": "Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
        "weighting": "10–15%",
        "bcOnly": true,
        "topics": [
          {
            "number": "9.1",
            "title": "Defining and Differentiating Parametric Equations",
            "bcOnly": true
          },
          {
            "number": "9.2",
            "title": "Second Derivatives of Parametric Equations",
            "bcOnly": true
          },
          {
            "number": "9.3",
            "title": "Finding Arc Lengths of Curves Given by Parametric Equations",
            "bcOnly": true
          },
          {
            "number": "9.4",
            "title": "Defining and Differentiating Vector-Valued Functions",
            "bcOnly": true
          },
          {
            "number": "9.5",
            "title": "Integrating Vector-Valued Functions",
            "bcOnly": true
          },
          {
            "number": "9.6",
            "title": "Solving Motion Problems Using Parametric and Vector-Valued Functions",
            "bcOnly": true
          },
          {
            "number": "9.7",
            "title": "Defining Polar Coordinates and Differentiating in Polar Form",
            "bcOnly": true
          },
          {
            "number": "9.8",
            "title": "Finding the Area of a Polar Region or the Area Bounded by a Single Polar Curve",
            "bcOnly": true
          },
          {
            "number": "9.9",
            "title": "Finding the Area of the Region Bounded by Two Polar Curves",
            "bcOnly": true
          }
        ]
      },
      {
        "number": 10,
        "title": "Infinite Sequences and Series",
        "weighting": "15–20%",
        "bcOnly": true,
        "topics": [
          {
            "number": "10.1",
            "title": "Defining Convergent and Divergent Infinite Series",
            "bcOnly": true
          },
          {
            "number": "10.2",
            "title": "Working with Geometric Series",
            "bcOnly": true
          },
          {
            "number": "10.3",
            "title": "The nth Term Test for Divergence",
            "bcOnly": true
          },
          {
            "number": "10.4",
            "title": "Integral Test for Convergence",
            "bcOnly": true
          },
          {
            "number": "10.5",
            "title": "Harmonic Series and p-Series",
            "bcOnly": true
          },
          {
            "number": "10.6",
            "title": "Comparison Tests for Convergence",
            "bcOnly": true
          },
          {
            "number": "10.7",
            "title": "Alternating Series Test for Convergence",
            "bcOnly": true
          },
          {
            "number": "10.8",
            "title": "Ratio Test for Convergence",
            "bcOnly": true
          },
          {
            "number": "10.9",
            "title": "Determining Absolute or Conditional Convergence",
            "bcOnly": true
          },
          {
            "number": "10.10",
            "title": "Alternating Series Error Bound",
            "bcOnly": true
          },
          {
            "number": "10.11",
            "title": "Finding Taylor Polynomial Approximations of Functions",
            "bcOnly": true
          },
          {
            "number": "10.12",
            "title": "Lagrange Error Bound",
            "bcOnly": true
          },
          {
            "number": "10.13",
            "title": "Radius and Interval of Convergence of Power Series",
            "bcOnly": true
          },
          {
            "number": "10.14",
            "title": "Finding Taylor or Maclaurin Series for a Function",
            "bcOnly": true
          },
          {
            "number": "10.15",
            "title": "Representing Functions as Power Series",
            "bcOnly": true
          }
        ]
      }
    ],
    "cedUrl": "https://apcentral.collegeboard.org/media/pdf/ap-calculus-ab-and-bc-course-and-exam-description.pdf",
    "coursePageUrl": "https://apcentral.collegeboard.org/courses/ap-calculus-bc",
    "examPageUrl": "https://apcentral.collegeboard.org/courses/ap-calculus-bc/exam",
    "checkedOn": "2026-10-05",
    "schoolYear": "2026-27",
    "examSeries": "May 2027"
  },
  {
    "slug": "statistics",
    "name": "Statistics",
    "officialName": "AP Statistics",
    "subjectHubs": [
      "mathematics",
      "statistics"
    ],
    "family": "maths",
    "examDate": "2027-05-11",
    "examMode": "Fully digital: both sections answered in the Bluebook app (new for May 2027).",
    "sections": [
      {
        "name": "Section I: Multiple choice",
        "questions": "42",
        "time": "90 minutes",
        "weight": "50%",
        "detail": [
          "Discrete questions and sets based on a shared prompt; 4 answer choices each"
        ]
      },
      {
        "name": "Section II: Free response",
        "questions": "4",
        "time": "90 minutes",
        "weight": "50%",
        "detail": [
          "Q1: multi-focus on Practices 1 and 2 (10 points)",
          "Q2: multi-focus on Practices 3 and 4 (10 points)",
          "Q3: inference — hypothesis test or confidence interval (10 points)",
          "Q4: multi-focus on Practices 2, 3 and 4 (10 points)"
        ]
      }
    ],
    "calculator": "A graphing calculator with statistical capabilities is expected on both sections; formulas and tables are provided.",
    "practices": [
      {
        "number": "1",
        "name": "Formulate Questions",
        "description": "Determine a valid investigative question that requires a statistical investigation."
      },
      {
        "number": "2",
        "name": "Collect Data",
        "description": "Identify and justify methods for collecting data and for statistical inference."
      },
      {
        "number": "3",
        "name": "Analyze Data",
        "description": "Construct representations of data and calculate statistical outputs."
      },
      {
        "number": "4",
        "name": "Interpret Results",
        "description": "Interpret results and justify conclusions and methods."
      }
    ],
    "may2027Change": "Revised framework from 2026–27: nine units consolidated into five; investigative-question topics added; removed departures from linearity, combining random variables, the geometric distribution, chi-square goodness of fit and inference for slopes. Exam: 42 MCQs (was 40) with 4 options (was 5); 4 FRQs of 10 points (was 6 of 4 points); fully digital.",
    "clarifications": "No separate clarifications document is published; the revised CED is effective Fall 2026.",
    "prerequisiteNote": "A first-year algebra course (the second-year algebra prerequisite was removed in the 2026–27 revision).",
    "units": [
      {
        "number": 1,
        "title": "Exploring One-Variable Data and Collecting Data",
        "weighting": "20–30%",
        "topics": [
          {
            "number": "1.1",
            "title": "Introducing Statistics: What Can We Learn from Data?"
          },
          {
            "number": "1.2",
            "title": "Variables"
          },
          {
            "number": "1.3",
            "title": "Tabular Representation and Summary Statistics for One Categorical Variable"
          },
          {
            "number": "1.4",
            "title": "Graphical Representations for One Categorical Variable"
          },
          {
            "number": "1.5",
            "title": "Graphical Representations for One Quantitative Variable"
          },
          {
            "number": "1.6",
            "title": "Descriptions for One Quantitative Variable Distributions"
          },
          {
            "number": "1.7",
            "title": "Summary Statistics for One Quantitative Variable"
          },
          {
            "number": "1.8",
            "title": "Graphical Representations of Summary Statistics for One Quantitative Variable"
          },
          {
            "number": "1.9",
            "title": "Comparisons of the Distributions for One Quantitative Variable"
          },
          {
            "number": "1.10",
            "title": "The Investigative Question Revisited and Data Collection"
          },
          {
            "number": "1.11",
            "title": "Random Sampling"
          },
          {
            "number": "1.12",
            "title": "Potential Problems with Sampling"
          },
          {
            "number": "1.13",
            "title": "Experimental Design"
          }
        ]
      },
      {
        "number": 2,
        "title": "Probability, Random Variables, and Probability Distributions",
        "weighting": "15–25%",
        "topics": [
          {
            "number": "2.1",
            "title": "Tabular and Graphical Representations for the Distributions of Two Categorical Variables"
          },
          {
            "number": "2.2",
            "title": "Summary Statistics for Two Categorical Variables"
          },
          {
            "number": "2.3",
            "title": "Estimating Probabilities Using Simulation"
          },
          {
            "number": "2.4",
            "title": "Introduction to Probability"
          },
          {
            "number": "2.5",
            "title": "Mutually Exclusive Events"
          },
          {
            "number": "2.6",
            "title": "Conditional Probability"
          },
          {
            "number": "2.7",
            "title": "Independent Events and Unions of Events"
          },
          {
            "number": "2.8",
            "title": "Introduction to Random Variables and Probability Distributions"
          },
          {
            "number": "2.9",
            "title": "Parameters of Random Variables"
          },
          {
            "number": "2.10",
            "title": "The Binomial Distribution"
          },
          {
            "number": "2.11",
            "title": "The Normal Distribution"
          },
          {
            "number": "2.12",
            "title": "Sampling Distributions and the Central Limit Theorem"
          }
        ]
      },
      {
        "number": 3,
        "title": "Inference for Categorical Data: Proportions",
        "weighting": "15–25%",
        "topics": [
          {
            "number": "3.1",
            "title": "Estimators"
          },
          {
            "number": "3.2",
            "title": "Sampling Distributions for Sample Proportions"
          },
          {
            "number": "3.3",
            "title": "Constructing a Confidence Interval for a Population Proportion"
          },
          {
            "number": "3.4",
            "title": "Justifying a Claim Based on a Confidence Interval for a Population Proportion"
          },
          {
            "number": "3.5",
            "title": "Setting Up a Test for a Population Proportion"
          },
          {
            "number": "3.6",
            "title": "p-Values"
          },
          {
            "number": "3.7",
            "title": "Carrying Out a Test for a Population Proportion"
          },
          {
            "number": "3.8",
            "title": "Potential Errors When Performing Tests"
          },
          {
            "number": "3.9",
            "title": "Sampling Distributions for the Difference Between Sample Proportions"
          },
          {
            "number": "3.10",
            "title": "Constructing a Confidence Interval for the Difference Between Two Population Proportions"
          },
          {
            "number": "3.11",
            "title": "Justifying a Claim Based on a Confidence Interval for the Difference Between Two Population Proportions"
          },
          {
            "number": "3.12",
            "title": "Setting Up a Test for the Difference Between Two Population Proportions"
          },
          {
            "number": "3.13",
            "title": "Carrying Out a Test for the Difference Between Two Population Proportions"
          },
          {
            "number": "3.14",
            "title": "Setting Up a Chi-Square Test for Homogeneity or Independence"
          },
          {
            "number": "3.15",
            "title": "Carrying Out a Chi-Square Test for Homogeneity or Independence"
          }
        ]
      },
      {
        "number": 4,
        "title": "Inference for Quantitative Data: Means",
        "weighting": "10–20%",
        "topics": [
          {
            "number": "4.1",
            "title": "Sampling Distributions for Sample Means"
          },
          {
            "number": "4.2",
            "title": "Constructing a Confidence Interval for a Population Mean or Population Mean Difference"
          },
          {
            "number": "4.3",
            "title": "Justifying a Claim Based on a Confidence Interval for a Population Mean or Population Mean Difference"
          },
          {
            "number": "4.4",
            "title": "Setting Up a Test for a Population Mean or Population Mean Difference"
          },
          {
            "number": "4.5",
            "title": "Carrying Out a Test for a Population Mean or Population Mean Difference"
          },
          {
            "number": "4.6",
            "title": "Sampling Distributions for the Difference Between Two Sample Means"
          },
          {
            "number": "4.7",
            "title": "Constructing a Confidence Interval for the Difference Between Two Population Means"
          },
          {
            "number": "4.8",
            "title": "Justifying a Claim Based on a Confidence Interval for the Difference Between Two Population Means"
          },
          {
            "number": "4.9",
            "title": "Setting Up a Test for the Difference Between Two Population Means"
          },
          {
            "number": "4.10",
            "title": "Carrying Out a Test for the Difference Between Two Population Means"
          }
        ]
      },
      {
        "number": 5,
        "title": "Regression Analysis",
        "weighting": "10–20%",
        "topics": [
          {
            "number": "5.1",
            "title": "Graphical Representations Between Two Quantitative Variables"
          },
          {
            "number": "5.2",
            "title": "Correlation"
          },
          {
            "number": "5.3",
            "title": "Linear Regression Models"
          },
          {
            "number": "5.4",
            "title": "Residuals"
          },
          {
            "number": "5.5",
            "title": "Least-Squares Regression"
          }
        ]
      }
    ],
    "cedUrl": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description.pdf",
    "coursePageUrl": "https://apcentral.collegeboard.org/courses/ap-statistics",
    "examPageUrl": "https://apcentral.collegeboard.org/courses/ap-statistics/exam",
    "checkedOn": "2026-10-05",
    "schoolYear": "2026-27",
    "examSeries": "May 2027"
  },
  {
    "slug": "physics-1",
    "name": "Physics 1: Algebra-Based",
    "officialName": "AP Physics 1: Algebra-Based",
    "subjectHubs": [
      "physics"
    ],
    "family": "physics",
    "examDate": "2027-05-05",
    "examMode": "Hybrid digital: multiple-choice answered in the Bluebook app; free-response viewed in Bluebook and handwritten in a paper booklet.",
    "sections": [
      {
        "name": "Section I: Multiple choice",
        "questions": "42",
        "time": "85 minutes",
        "weight": "50%"
      },
      {
        "name": "Section II: Free response",
        "questions": "4",
        "time": "95 minutes",
        "weight": "50%",
        "detail": [
          "Mathematical Routines (10 points)",
          "Translation Between Representations (12 points)",
          "Experimental Design and Analysis (10 points)",
          "Qualitative/Quantitative Translation (8 points)"
        ]
      }
    ],
    "calculator": "A four-function, scientific or graphing calculator is allowed on both sections.",
    "practices": [
      {
        "number": "1",
        "name": "Creating Representations",
        "description": "Create diagrams, tables, charts, schematics, quantitative graphs and qualitative sketches that represent physical situations."
      },
      {
        "number": "2",
        "name": "Mathematical Routines",
        "description": "Derive symbolic expressions, calculate or estimate quantities with units, compare quantities between scenarios and predict factors of change."
      },
      {
        "number": "3",
        "name": "Scientific Questioning and Argumentation",
        "description": "Create experimental procedures, apply a law or model to make a claim, and justify claims with evidence."
      }
    ],
    "may2027Change": "Multiple choice changed from 40 questions in 80 minutes to 42 questions in 85 minutes; free response changed from 100 to 95 minutes (effective May 2027).",
    "clarifications": "Fall 2026: resource-location updates; exam timing change only.",
    "prerequisiteNote": "Geometry completed, with Algebra II (or equivalent) taken alongside; no calculus.",
    "unitNumbering": "Units 1–8",
    "units": [
      {
        "number": 1,
        "title": "Kinematics",
        "weighting": "10–15%",
        "topics": [
          {
            "number": "1.1",
            "title": "Scalars and Vectors in One Dimension"
          },
          {
            "number": "1.2",
            "title": "Displacement, Velocity, and Acceleration"
          },
          {
            "number": "1.3",
            "title": "Representing Motion"
          },
          {
            "number": "1.4",
            "title": "Reference Frames and Relative Motion"
          },
          {
            "number": "1.5",
            "title": "Vectors and Motion in Two Dimensions"
          }
        ]
      },
      {
        "number": 2,
        "title": "Force and Translational Dynamics",
        "weighting": "18–23%",
        "topics": [
          {
            "number": "2.1",
            "title": "Systems and Center of Mass"
          },
          {
            "number": "2.2",
            "title": "Forces and Free-Body Diagrams"
          },
          {
            "number": "2.3",
            "title": "Newton’s Third Law"
          },
          {
            "number": "2.4",
            "title": "Newton’s First Law"
          },
          {
            "number": "2.5",
            "title": "Newton’s Second Law"
          },
          {
            "number": "2.6",
            "title": "Gravitational Force"
          },
          {
            "number": "2.7",
            "title": "Kinetic and Static Friction"
          },
          {
            "number": "2.8",
            "title": "Spring Forces"
          },
          {
            "number": "2.9",
            "title": "Circular Motion"
          }
        ]
      },
      {
        "number": 3,
        "title": "Work, Energy, and Power",
        "weighting": "18–23%",
        "topics": [
          {
            "number": "3.1",
            "title": "Translational Kinetic Energy"
          },
          {
            "number": "3.2",
            "title": "Work"
          },
          {
            "number": "3.3",
            "title": "Potential Energy"
          },
          {
            "number": "3.4",
            "title": "Conservation of Energy"
          },
          {
            "number": "3.5",
            "title": "Power"
          }
        ]
      },
      {
        "number": 4,
        "title": "Linear Momentum",
        "weighting": "10–15%",
        "topics": [
          {
            "number": "4.1",
            "title": "Linear Momentum"
          },
          {
            "number": "4.2",
            "title": "Change in Momentum and Impulse"
          },
          {
            "number": "4.3",
            "title": "Conservation of Linear Momentum"
          },
          {
            "number": "4.4",
            "title": "Elastic and Inelastic Collisions"
          }
        ]
      },
      {
        "number": 5,
        "title": "Torque and Rotational Dynamics",
        "weighting": "10–15%",
        "topics": [
          {
            "number": "5.1",
            "title": "Rotational Kinematics"
          },
          {
            "number": "5.2",
            "title": "Connecting Linear and Rotational Motion"
          },
          {
            "number": "5.3",
            "title": "Torque"
          },
          {
            "number": "5.4",
            "title": "Rotational Inertia"
          },
          {
            "number": "5.5",
            "title": "Rotational Equilibrium and Newton’s First Law in Rotational Form"
          },
          {
            "number": "5.6",
            "title": "Newton’s Second Law in Rotational Form"
          }
        ]
      },
      {
        "number": 6,
        "title": "Energy and Momentum of Rotating Systems",
        "weighting": "5–8%",
        "topics": [
          {
            "number": "6.1",
            "title": "Rotational Kinetic Energy"
          },
          {
            "number": "6.2",
            "title": "Torque and Work"
          },
          {
            "number": "6.3",
            "title": "Angular Momentum and Angular Impulse"
          },
          {
            "number": "6.4",
            "title": "Conservation of Angular Momentum"
          },
          {
            "number": "6.5",
            "title": "Rolling"
          },
          {
            "number": "6.6",
            "title": "Motion of Orbiting Satellites"
          }
        ]
      },
      {
        "number": 7,
        "title": "Oscillations",
        "weighting": "5–8%",
        "topics": [
          {
            "number": "7.1",
            "title": "Defining Simple Harmonic Motion (SHM)"
          },
          {
            "number": "7.2",
            "title": "Frequency and Period of SHM"
          },
          {
            "number": "7.3",
            "title": "Representing and Analyzing SHM"
          },
          {
            "number": "7.4",
            "title": "Energy of Simple Harmonic Oscillators"
          }
        ]
      },
      {
        "number": 8,
        "title": "Fluids",
        "weighting": "10–15%",
        "topics": [
          {
            "number": "8.1",
            "title": "Internal Structure and Density"
          },
          {
            "number": "8.2",
            "title": "Pressure"
          },
          {
            "number": "8.3",
            "title": "Fluids and Newton’s Laws"
          },
          {
            "number": "8.4",
            "title": "Fluids and Conservation Laws"
          }
        ]
      }
    ],
    "cedUrl": "https://apcentral.collegeboard.org/media/pdf/ap-physics-1-course-and-exam-description.pdf",
    "coursePageUrl": "https://apcentral.collegeboard.org/courses/ap-physics-1",
    "examPageUrl": "https://apcentral.collegeboard.org/courses/ap-physics-1/exam",
    "checkedOn": "2026-10-05",
    "schoolYear": "2026-27",
    "examSeries": "May 2027",
    "labRequirement": "The CED requires 25% of instructional time on hands-on laboratory work."
  },
  {
    "slug": "physics-2",
    "name": "Physics 2: Algebra-Based",
    "officialName": "AP Physics 2: Algebra-Based",
    "subjectHubs": [
      "physics"
    ],
    "family": "physics",
    "examDate": "2027-05-06",
    "examMode": "Hybrid digital: multiple-choice answered in the Bluebook app; free-response viewed in Bluebook and handwritten in a paper booklet.",
    "sections": [
      {
        "name": "Section I: Multiple choice",
        "questions": "42",
        "time": "85 minutes",
        "weight": "50%"
      },
      {
        "name": "Section II: Free response",
        "questions": "4",
        "time": "95 minutes",
        "weight": "50%",
        "detail": [
          "Mathematical Routines (10 points)",
          "Translation Between Representations (12 points)",
          "Experimental Design and Analysis (10 points)",
          "Qualitative/Quantitative Translation (8 points)"
        ]
      }
    ],
    "calculator": "A four-function, scientific or graphing calculator is allowed on both sections.",
    "practices": [
      {
        "number": "1",
        "name": "Creating Representations",
        "description": "Create diagrams, tables, charts, schematics, quantitative graphs and qualitative sketches that represent physical situations."
      },
      {
        "number": "2",
        "name": "Mathematical Routines",
        "description": "Derive symbolic expressions, calculate or estimate quantities with units, compare quantities between scenarios and predict factors of change."
      },
      {
        "number": "3",
        "name": "Scientific Questioning and Argumentation",
        "description": "Create experimental procedures, apply a law or model to make a claim, and justify claims with evidence."
      }
    ],
    "may2027Change": "Multiple choice changed from 40 questions in 80 minutes to 42 questions in 85 minutes; free response changed from 100 to 95 minutes (effective May 2027).",
    "clarifications": "Fall 2026: EK 15.7.B.1 (radioactive decay) clarified; some exam conventions in the equations table updated.",
    "prerequisiteNote": "Physics 1 or a comparable introductory physics course, with precalculus taken before or alongside; no calculus.",
    "unitNumbering": "Units 9–15 (numbering continues from Physics 1)",
    "units": [
      {
        "number": 9,
        "title": "Thermodynamics",
        "weighting": "15–18%",
        "topics": [
          {
            "number": "9.1",
            "title": "Kinetic Theory of Temperature and Pressure"
          },
          {
            "number": "9.2",
            "title": "The Ideal Gas Law"
          },
          {
            "number": "9.3",
            "title": "Thermal Energy Transfer and Equilibrium"
          },
          {
            "number": "9.4",
            "title": "The First Law of Thermodynamics"
          },
          {
            "number": "9.5",
            "title": "Specific Heat and Thermal Conductivity"
          },
          {
            "number": "9.6",
            "title": "Entropy and the Second Law of Thermodynamics"
          }
        ]
      },
      {
        "number": 10,
        "title": "Electric Force, Field, and Potential",
        "weighting": "15–18%",
        "topics": [
          {
            "number": "10.1",
            "title": "Electric Charge and Electric Force"
          },
          {
            "number": "10.2",
            "title": "Conservation of Electric Charge and the Process of Charging"
          },
          {
            "number": "10.3",
            "title": "Electric Fields"
          },
          {
            "number": "10.4",
            "title": "Electric Potential Energy"
          },
          {
            "number": "10.5",
            "title": "Electric Potential"
          },
          {
            "number": "10.6",
            "title": "Capacitors"
          },
          {
            "number": "10.7",
            "title": "Conservation of Electric Energy"
          }
        ]
      },
      {
        "number": 11,
        "title": "Electric Circuits",
        "weighting": "15–18%",
        "topics": [
          {
            "number": "11.1",
            "title": "Electric Current"
          },
          {
            "number": "11.2",
            "title": "Simple Circuits"
          },
          {
            "number": "11.3",
            "title": "Resistance, Resistivity, and Ohm’s Law"
          },
          {
            "number": "11.4",
            "title": "Electric Power"
          },
          {
            "number": "11.5",
            "title": "Compound Direct Current (DC) Circuits"
          },
          {
            "number": "11.6",
            "title": "Kirchhoff’s Loop Rule"
          },
          {
            "number": "11.7",
            "title": "Kirchhoff’s Junction Rule"
          },
          {
            "number": "11.8",
            "title": "Resistor-Capacitor (RC) Circuits"
          }
        ]
      },
      {
        "number": 12,
        "title": "Magnetism and Electromagnetism",
        "weighting": "12–15%",
        "topics": [
          {
            "number": "12.1",
            "title": "Magnetic Fields"
          },
          {
            "number": "12.2",
            "title": "Magnetism and Moving Charges"
          },
          {
            "number": "12.3",
            "title": "Magnetism and Current-Carrying Wires"
          },
          {
            "number": "12.4",
            "title": "Electromagnetic Induction and Faraday’s Law"
          }
        ]
      },
      {
        "number": 13,
        "title": "Geometric Optics",
        "weighting": "12–15%",
        "topics": [
          {
            "number": "13.1",
            "title": "Reflection"
          },
          {
            "number": "13.2",
            "title": "Images Formed by Mirrors"
          },
          {
            "number": "13.3",
            "title": "Refraction"
          },
          {
            "number": "13.4",
            "title": "Images Formed by Lenses"
          }
        ]
      },
      {
        "number": 14,
        "title": "Waves, Sound, and Physical Optics",
        "weighting": "12–15%",
        "topics": [
          {
            "number": "14.1",
            "title": "Properties of Wave Pulses and Waves"
          },
          {
            "number": "14.2",
            "title": "Periodic Waves"
          },
          {
            "number": "14.3",
            "title": "Boundary Behavior of Waves and Polarization"
          },
          {
            "number": "14.4",
            "title": "Electromagnetic Waves"
          },
          {
            "number": "14.5",
            "title": "The Doppler Effect"
          },
          {
            "number": "14.6",
            "title": "Wave Interference and Standing Waves"
          },
          {
            "number": "14.7",
            "title": "Diffraction"
          },
          {
            "number": "14.8",
            "title": "Double-Slit Interference and Diffraction Gratings"
          },
          {
            "number": "14.9",
            "title": "Thin-Film Interference"
          }
        ]
      },
      {
        "number": 15,
        "title": "Modern Physics",
        "weighting": "12–15%",
        "topics": [
          {
            "number": "15.1",
            "title": "Quantum Theory and Wave-Particle Duality"
          },
          {
            "number": "15.2",
            "title": "The Bohr Model of Atomic Structure"
          },
          {
            "number": "15.3",
            "title": "Emission and Absorption Spectra"
          },
          {
            "number": "15.4",
            "title": "Blackbody Radiation"
          },
          {
            "number": "15.5",
            "title": "The Photoelectric Effect"
          },
          {
            "number": "15.6",
            "title": "Compton Scattering"
          },
          {
            "number": "15.7",
            "title": "Fission, Fusion, and Nuclear Decay"
          },
          {
            "number": "15.8",
            "title": "Types of Radioactive Decay"
          }
        ]
      }
    ],
    "cedUrl": "https://apcentral.collegeboard.org/media/pdf/ap-physics-2-course-and-exam-description.pdf",
    "coursePageUrl": "https://apcentral.collegeboard.org/courses/ap-physics-2",
    "examPageUrl": "https://apcentral.collegeboard.org/courses/ap-physics-2/exam",
    "checkedOn": "2026-10-05",
    "schoolYear": "2026-27",
    "examSeries": "May 2027",
    "labRequirement": "The CED requires 25% of instructional time on hands-on laboratory work."
  },
  {
    "slug": "physics-c-mechanics",
    "name": "Physics C: Mechanics",
    "officialName": "AP Physics C: Mechanics",
    "subjectHubs": [
      "physics"
    ],
    "family": "physics",
    "examDate": "2027-05-03",
    "examMode": "Hybrid digital: multiple-choice answered in the Bluebook app; free-response viewed in Bluebook and handwritten in a paper booklet.",
    "sections": [
      {
        "name": "Section I: Multiple choice",
        "questions": "42",
        "time": "85 minutes",
        "weight": "50%"
      },
      {
        "name": "Section II: Free response",
        "questions": "4",
        "time": "95 minutes",
        "weight": "50%",
        "detail": [
          "Mathematical Routines (10 points)",
          "Translation Between Representations (12 points)",
          "Experimental Design and Analysis (10 points)",
          "Qualitative/Quantitative Translation (8 points)"
        ]
      }
    ],
    "calculator": "A four-function, scientific or graphing calculator is allowed on both sections.",
    "practices": [
      {
        "number": "1",
        "name": "Creating Representations",
        "description": "Create diagrams, tables, charts, schematics, quantitative graphs and qualitative sketches that represent physical situations."
      },
      {
        "number": "2",
        "name": "Mathematical Routines",
        "description": "Derive symbolic expressions, calculate or estimate quantities with units, compare quantities between scenarios and predict factors of change."
      },
      {
        "number": "3",
        "name": "Scientific Questioning and Argumentation",
        "description": "Create experimental procedures, apply a law or model to make a claim, and justify claims with evidence."
      }
    ],
    "may2027Change": "Multiple choice changed from 40 questions in 80 minutes to 42 questions in 85 minutes; free response changed from 100 to 95 minutes (effective May 2027).",
    "clarifications": "Fall 2026: resource-location updates; exam timing change only.",
    "prerequisiteNote": "Calculus taken before or alongside the course.",
    "unitNumbering": "Units 1–7",
    "units": [
      {
        "number": 1,
        "title": "Kinematics",
        "weighting": "10–15%",
        "topics": [
          {
            "number": "1.1",
            "title": "Scalars and Vectors"
          },
          {
            "number": "1.2",
            "title": "Displacement, Velocity, and Acceleration"
          },
          {
            "number": "1.3",
            "title": "Representing Motion"
          },
          {
            "number": "1.4",
            "title": "Reference Frames and Relative Motion"
          },
          {
            "number": "1.5",
            "title": "Motion in Two or Three Dimensions"
          }
        ]
      },
      {
        "number": 2,
        "title": "Force and Translational Dynamics",
        "weighting": "20–25%",
        "topics": [
          {
            "number": "2.1",
            "title": "Systems and Center of Mass"
          },
          {
            "number": "2.2",
            "title": "Forces and Free-Body Diagrams"
          },
          {
            "number": "2.3",
            "title": "Newton’s Third Law"
          },
          {
            "number": "2.4",
            "title": "Newton’s First Law"
          },
          {
            "number": "2.5",
            "title": "Newton’s Second Law"
          },
          {
            "number": "2.6",
            "title": "Gravitational Force"
          },
          {
            "number": "2.7",
            "title": "Kinetic and Static Friction"
          },
          {
            "number": "2.8",
            "title": "Spring Forces"
          },
          {
            "number": "2.9",
            "title": "Resistive Forces"
          },
          {
            "number": "2.10",
            "title": "Circular Motion"
          }
        ]
      },
      {
        "number": 3,
        "title": "Work, Energy, and Power",
        "weighting": "15–25%",
        "topics": [
          {
            "number": "3.1",
            "title": "Translational Kinetic Energy"
          },
          {
            "number": "3.2",
            "title": "Work"
          },
          {
            "number": "3.3",
            "title": "Potential Energy"
          },
          {
            "number": "3.4",
            "title": "Conservation of Energy"
          },
          {
            "number": "3.5",
            "title": "Power"
          }
        ]
      },
      {
        "number": 4,
        "title": "Linear Momentum",
        "weighting": "10–20%",
        "topics": [
          {
            "number": "4.1",
            "title": "Linear Momentum"
          },
          {
            "number": "4.2",
            "title": "Change in Momentum and Impulse"
          },
          {
            "number": "4.3",
            "title": "Conservation of Linear Momentum"
          },
          {
            "number": "4.4",
            "title": "Elastic and Inelastic Collisions"
          }
        ]
      },
      {
        "number": 5,
        "title": "Torque and Rotational Dynamics",
        "weighting": "10–15%",
        "topics": [
          {
            "number": "5.1",
            "title": "Rotational Kinematics"
          },
          {
            "number": "5.2",
            "title": "Connecting Linear and Rotational Motion"
          },
          {
            "number": "5.3",
            "title": "Torque"
          },
          {
            "number": "5.4",
            "title": "Rotational Inertia"
          },
          {
            "number": "5.5",
            "title": "Rotational Equilibrium and Newton’s First Law in Rotational Form"
          },
          {
            "number": "5.6",
            "title": "Newton’s Second Law in Rotational Form"
          }
        ]
      },
      {
        "number": 6,
        "title": "Energy and Momentum of Rotating Systems",
        "weighting": "10–15%",
        "topics": [
          {
            "number": "6.1",
            "title": "Rotational Kinetic Energy"
          },
          {
            "number": "6.2",
            "title": "Torque and Work"
          },
          {
            "number": "6.3",
            "title": "Angular Momentum and Angular Impulse"
          },
          {
            "number": "6.4",
            "title": "Conservation of Angular Momentum"
          },
          {
            "number": "6.5",
            "title": "Rolling"
          },
          {
            "number": "6.6",
            "title": "Motion of Orbiting Satellites"
          }
        ]
      },
      {
        "number": 7,
        "title": "Oscillations",
        "weighting": "10–15%",
        "topics": [
          {
            "number": "7.1",
            "title": "Defining Simple Harmonic Motion (SHM)"
          },
          {
            "number": "7.2",
            "title": "Frequency and Period of SHM"
          },
          {
            "number": "7.3",
            "title": "Representing and Analyzing SHM"
          },
          {
            "number": "7.4",
            "title": "Energy of Simple Harmonic Oscillators"
          },
          {
            "number": "7.5",
            "title": "Simple and Physical Pendulums"
          }
        ]
      }
    ],
    "cedUrl": "https://apcentral.collegeboard.org/media/pdf/ap-physics-c-mechanics-course-and-exam-description.pdf",
    "coursePageUrl": "https://apcentral.collegeboard.org/courses/ap-physics-c-mechanics",
    "examPageUrl": "https://apcentral.collegeboard.org/courses/ap-physics-c-mechanics/exam",
    "checkedOn": "2026-10-05",
    "schoolYear": "2026-27",
    "examSeries": "May 2027",
    "labRequirement": "The CED requires 25% of instructional time on hands-on laboratory work."
  },
  {
    "slug": "physics-c-electricity-and-magnetism",
    "name": "Physics C: Electricity and Magnetism",
    "officialName": "AP Physics C: Electricity and Magnetism",
    "subjectHubs": [
      "physics"
    ],
    "family": "physics",
    "examDate": "2027-05-05",
    "examMode": "Hybrid digital: multiple-choice answered in the Bluebook app; free-response viewed in Bluebook and handwritten in a paper booklet.",
    "sections": [
      {
        "name": "Section I: Multiple choice",
        "questions": "42",
        "time": "85 minutes",
        "weight": "50%"
      },
      {
        "name": "Section II: Free response",
        "questions": "4",
        "time": "95 minutes",
        "weight": "50%",
        "detail": [
          "Mathematical Routines (10 points)",
          "Translation Between Representations (12 points)",
          "Experimental Design and Analysis (10 points)",
          "Qualitative/Quantitative Translation (8 points)"
        ]
      }
    ],
    "calculator": "A four-function, scientific or graphing calculator is allowed on both sections.",
    "practices": [
      {
        "number": "1",
        "name": "Creating Representations",
        "description": "Create diagrams, tables, charts, schematics, quantitative graphs and qualitative sketches that represent physical situations."
      },
      {
        "number": "2",
        "name": "Mathematical Routines",
        "description": "Derive symbolic expressions, calculate or estimate quantities with units, compare quantities between scenarios and predict factors of change."
      },
      {
        "number": "3",
        "name": "Scientific Questioning and Argumentation",
        "description": "Create experimental procedures, apply a law or model to make a claim, and justify claims with evidence."
      }
    ],
    "may2027Change": "Multiple choice changed from 40 questions in 80 minutes to 42 questions in 85 minutes; free response changed from 100 to 95 minutes (effective May 2027).",
    "clarifications": "Fall 2026: some exam conventions in the equations table updated; exam timing change.",
    "prerequisiteNote": "Calculus taken before or alongside, and a prior mechanics course (Physics C: Mechanics, Physics 1 or similar).",
    "unitNumbering": "Units 8–13 (numbering continues from Physics C: Mechanics)",
    "units": [
      {
        "number": 8,
        "title": "Electric Charges, Fields, and Gauss’s Law",
        "weighting": "15–25%",
        "topics": [
          {
            "number": "8.1",
            "title": "Electric Charge and Electric Force"
          },
          {
            "number": "8.2",
            "title": "Conservation of Electric Charge and the Process of Charging"
          },
          {
            "number": "8.3",
            "title": "Electric Fields"
          },
          {
            "number": "8.4",
            "title": "Electric Fields of Charge Distributions"
          },
          {
            "number": "8.5",
            "title": "Electric Flux"
          },
          {
            "number": "8.6",
            "title": "Gauss’s Law"
          }
        ]
      },
      {
        "number": 9,
        "title": "Electric Potential",
        "weighting": "10–20%",
        "topics": [
          {
            "number": "9.1",
            "title": "Electric Potential Energy"
          },
          {
            "number": "9.2",
            "title": "Electric Potential"
          },
          {
            "number": "9.3",
            "title": "Conservation of Electric Energy"
          }
        ]
      },
      {
        "number": 10,
        "title": "Conductors and Capacitors",
        "weighting": "10–15%",
        "topics": [
          {
            "number": "10.1",
            "title": "Electrostatics with Conductors"
          },
          {
            "number": "10.2",
            "title": "Redistribution of Charge Between Conductors"
          },
          {
            "number": "10.3",
            "title": "Capacitors"
          },
          {
            "number": "10.4",
            "title": "Dielectrics"
          }
        ]
      },
      {
        "number": 11,
        "title": "Electric Circuits",
        "weighting": "15–25%",
        "topics": [
          {
            "number": "11.1",
            "title": "Electric Current"
          },
          {
            "number": "11.2",
            "title": "Simple Circuits"
          },
          {
            "number": "11.3",
            "title": "Resistance, Resistivity, and Ohm’s Law"
          },
          {
            "number": "11.4",
            "title": "Electric Power"
          },
          {
            "number": "11.5",
            "title": "Compound Direct Current Circuits"
          },
          {
            "number": "11.6",
            "title": "Kirchhoff’s Loop Rule"
          },
          {
            "number": "11.7",
            "title": "Kirchhoff’s Junction Rule"
          },
          {
            "number": "11.8",
            "title": "Resistor-Capacitor (RC) Circuits"
          }
        ]
      },
      {
        "number": 12,
        "title": "Magnetic Fields and Electromagnetism",
        "weighting": "10–20%",
        "topics": [
          {
            "number": "12.1",
            "title": "Magnetic Fields"
          },
          {
            "number": "12.2",
            "title": "Magnetism and Moving Charges"
          },
          {
            "number": "12.3",
            "title": "Magnetic Fields of Current-Carrying Wires and the Biot-Savart Law"
          },
          {
            "number": "12.4",
            "title": "Ampère’s Law"
          }
        ]
      },
      {
        "number": 13,
        "title": "Electromagnetic Induction",
        "weighting": "10–20%",
        "topics": [
          {
            "number": "13.1",
            "title": "Magnetic Flux"
          },
          {
            "number": "13.2",
            "title": "Electromagnetic Induction"
          },
          {
            "number": "13.3",
            "title": "Induced Currents and Magnetic Forces"
          },
          {
            "number": "13.4",
            "title": "Inductance"
          },
          {
            "number": "13.5",
            "title": "Circuits with Resistors and Inductors (LR Circuits)"
          },
          {
            "number": "13.6",
            "title": "Circuits with Capacitors and Inductors (LC Circuits)"
          }
        ]
      }
    ],
    "cedUrl": "https://apcentral.collegeboard.org/media/pdf/ap-physics-c-electricity-and-magnetism-course-and-exam-description.pdf",
    "coursePageUrl": "https://apcentral.collegeboard.org/courses/ap-physics-c-electricity-and-magnetism",
    "examPageUrl": "https://apcentral.collegeboard.org/courses/ap-physics-c-electricity-and-magnetism/exam",
    "checkedOn": "2026-10-05",
    "schoolYear": "2026-27",
    "examSeries": "May 2027",
    "labRequirement": "The CED requires 25% of instructional time on hands-on laboratory work."
  },
  {
    "slug": "microeconomics",
    "name": "Microeconomics",
    "officialName": "AP Microeconomics",
    "subjectHubs": [
      "economics"
    ],
    "family": "economics",
    "examDate": "2027-05-04",
    "examMode": "Hybrid digital: multiple-choice answered in the Bluebook app; free-response viewed in Bluebook and handwritten in a paper booklet.",
    "sections": [
      {
        "name": "Section I: Multiple choice",
        "questions": "60",
        "time": "70 minutes",
        "weight": "66%"
      },
      {
        "name": "Section II: Free response",
        "questions": "3",
        "time": "60 minutes (includes a 10-minute reading period)",
        "weight": "33%",
        "detail": [
          "1 long question (10 points; 50% of section score)",
          "2 short questions (5 points each; 25% each)"
        ]
      }
    ],
    "calculator": "A four-function calculator is allowed on both sections.",
    "practices": [
      {
        "number": "1",
        "name": "Principles and Models",
        "description": "Define economic principles and models."
      },
      {
        "number": "2",
        "name": "Interpretation",
        "description": "Explain given economic outcomes."
      },
      {
        "number": "3",
        "name": "Manipulation",
        "description": "Determine outcomes of specific economic situations."
      },
      {
        "number": "4",
        "name": "Graphing and Visuals",
        "description": "Model economic situations using graphs or visual representations."
      }
    ],
    "clarifications": "June 2026 clarifications are editorial only.",
    "prerequisiteNote": "No prerequisites; students should read a college-level textbook and have basic mathematics and graphing skills.",
    "units": [
      {
        "number": 1,
        "title": "Basic Economic Concepts",
        "weighting": "12–15%",
        "topics": [
          {
            "number": "1.1",
            "title": "Scarcity"
          },
          {
            "number": "1.2",
            "title": "Resource Allocation and Economic Systems"
          },
          {
            "number": "1.3",
            "title": "Production Possibilities Curve"
          },
          {
            "number": "1.4",
            "title": "Comparative Advantage and Trade"
          },
          {
            "number": "1.5",
            "title": "Cost-Benefit Analysis"
          },
          {
            "number": "1.6",
            "title": "Marginal Analysis and Consumer Choice"
          }
        ]
      },
      {
        "number": 2,
        "title": "Supply and Demand",
        "weighting": "20–25%",
        "topics": [
          {
            "number": "2.1",
            "title": "Demand"
          },
          {
            "number": "2.2",
            "title": "Supply"
          },
          {
            "number": "2.3",
            "title": "Price Elasticity of Demand"
          },
          {
            "number": "2.4",
            "title": "Price Elasticity of Supply"
          },
          {
            "number": "2.5",
            "title": "Other Elasticities"
          },
          {
            "number": "2.6",
            "title": "Market Equilibrium and Consumer and Producer Surplus"
          },
          {
            "number": "2.7",
            "title": "Market Disequilibrium and Changes in Equilibrium"
          },
          {
            "number": "2.8",
            "title": "The Effects of Government Intervention in Markets"
          },
          {
            "number": "2.9",
            "title": "International Trade and Public Policy"
          }
        ]
      },
      {
        "number": 3,
        "title": "Production, Cost, and the Perfect Competition Model",
        "weighting": "22–25%",
        "topics": [
          {
            "number": "3.1",
            "title": "The Production Function"
          },
          {
            "number": "3.2",
            "title": "Short-Run Production Costs"
          },
          {
            "number": "3.3",
            "title": "Long-Run Production Costs"
          },
          {
            "number": "3.4",
            "title": "Types of Profit"
          },
          {
            "number": "3.5",
            "title": "Profit Maximization"
          },
          {
            "number": "3.6",
            "title": "Firms’ Short-Run Decisions to Produce and Long-Run Decisions to Enter or Exit a Market"
          },
          {
            "number": "3.7",
            "title": "Perfect Competition"
          }
        ]
      },
      {
        "number": 4,
        "title": "Imperfect Competition",
        "weighting": "15–22%",
        "topics": [
          {
            "number": "4.1",
            "title": "Introduction to Imperfectly Competitive Markets"
          },
          {
            "number": "4.2",
            "title": "Monopoly"
          },
          {
            "number": "4.3",
            "title": "Price Discrimination"
          },
          {
            "number": "4.4",
            "title": "Monopolistic Competition"
          },
          {
            "number": "4.5",
            "title": "Oligopoly and Game Theory"
          }
        ]
      },
      {
        "number": 5,
        "title": "Factor Markets",
        "weighting": "10–13%",
        "topics": [
          {
            "number": "5.1",
            "title": "Introduction to Factor Markets"
          },
          {
            "number": "5.2",
            "title": "Changes in Factor Demand and Factor Supply"
          },
          {
            "number": "5.3",
            "title": "Profit-Maximizing Behavior in Perfectly Competitive Factor Markets"
          },
          {
            "number": "5.4",
            "title": "Monopsonistic Markets"
          }
        ]
      },
      {
        "number": 6,
        "title": "Market Failure and the Role of Government",
        "weighting": "8–13%",
        "topics": [
          {
            "number": "6.1",
            "title": "Socially Efficient and Inefficient Market Outcomes"
          },
          {
            "number": "6.2",
            "title": "Externalities"
          },
          {
            "number": "6.3",
            "title": "Public and Private Goods"
          },
          {
            "number": "6.4",
            "title": "The Effects of Government Intervention in Different Market Structures"
          },
          {
            "number": "6.5",
            "title": "Inequality"
          }
        ]
      }
    ],
    "cedUrl": "https://apcentral.collegeboard.org/media/pdf/ap-microeconomics-course-and-exam-description.pdf",
    "coursePageUrl": "https://apcentral.collegeboard.org/courses/ap-microeconomics",
    "examPageUrl": "https://apcentral.collegeboard.org/courses/ap-microeconomics/exam",
    "checkedOn": "2026-10-05",
    "schoolYear": "2026-27",
    "examSeries": "May 2027"
  },
  {
    "slug": "macroeconomics",
    "name": "Macroeconomics",
    "officialName": "AP Macroeconomics",
    "subjectHubs": [
      "economics"
    ],
    "family": "economics",
    "examDate": "2027-05-07",
    "examMode": "Hybrid digital: multiple-choice answered in the Bluebook app; free-response viewed in Bluebook and handwritten in a paper booklet.",
    "sections": [
      {
        "name": "Section I: Multiple choice",
        "questions": "60",
        "time": "70 minutes",
        "weight": "66%"
      },
      {
        "name": "Section II: Free response",
        "questions": "3",
        "time": "60 minutes (includes a 10-minute reading period)",
        "weight": "33%",
        "detail": [
          "1 long question (10 points; 50% of section score)",
          "2 short questions (5 points each; 25% each)"
        ]
      }
    ],
    "calculator": "A four-function calculator is allowed on both sections.",
    "practices": [
      {
        "number": "1",
        "name": "Principles and Models",
        "description": "Define economic principles and models."
      },
      {
        "number": "2",
        "name": "Interpretation",
        "description": "Explain given economic outcomes."
      },
      {
        "number": "3",
        "name": "Manipulation",
        "description": "Determine outcomes of specific economic situations."
      },
      {
        "number": "4",
        "name": "Graphing and Visuals",
        "description": "Model economic situations using graphs or visual representations."
      }
    ],
    "clarifications": "June 2026 clarifications are editorial only.",
    "prerequisiteNote": "No prerequisites; students should read a college-level textbook and have basic mathematics and graphing skills.",
    "units": [
      {
        "number": 1,
        "title": "Basic Economic Concepts",
        "weighting": "5–10%",
        "topics": [
          {
            "number": "1.1",
            "title": "Scarcity"
          },
          {
            "number": "1.2",
            "title": "Opportunity Cost and the Production Possibilities Curve (PPC)"
          },
          {
            "number": "1.3",
            "title": "Comparative Advantage and Gains from Trade"
          },
          {
            "number": "1.4",
            "title": "Demand"
          },
          {
            "number": "1.5",
            "title": "Supply"
          },
          {
            "number": "1.6",
            "title": "Market Equilibrium, Disequilibrium, and Changes in Equilibrium"
          }
        ]
      },
      {
        "number": 2,
        "title": "Economic Indicators and the Business Cycle",
        "weighting": "12–17%",
        "topics": [
          {
            "number": "2.1",
            "title": "The Circular Flow and GDP"
          },
          {
            "number": "2.2",
            "title": "Limitations of GDP"
          },
          {
            "number": "2.3",
            "title": "Unemployment"
          },
          {
            "number": "2.4",
            "title": "Price Indices and Inflation"
          },
          {
            "number": "2.5",
            "title": "Costs of Inflation"
          },
          {
            "number": "2.6",
            "title": "Real v. Nominal GDP"
          },
          {
            "number": "2.7",
            "title": "Business Cycles"
          }
        ]
      },
      {
        "number": 3,
        "title": "National Income and Price Determination",
        "weighting": "17–27%",
        "topics": [
          {
            "number": "3.1",
            "title": "Aggregate Demand (AD)"
          },
          {
            "number": "3.2",
            "title": "Multipliers"
          },
          {
            "number": "3.3",
            "title": "Short-Run Aggregate Supply (SRAS)"
          },
          {
            "number": "3.4",
            "title": "Long-Run Aggregate Supply (LRAS)"
          },
          {
            "number": "3.5",
            "title": "Equilibrium in the Aggregate Demand–Aggregate Supply (AD–AS) Model"
          },
          {
            "number": "3.6",
            "title": "Changes in the AD–AS Model in the Short Run"
          },
          {
            "number": "3.7",
            "title": "Long-Run Self-Adjustment"
          },
          {
            "number": "3.8",
            "title": "Fiscal Policy"
          },
          {
            "number": "3.9",
            "title": "Automatic Stabilizers"
          }
        ]
      },
      {
        "number": 4,
        "title": "Financial Sector",
        "weighting": "18–23%",
        "topics": [
          {
            "number": "4.1",
            "title": "Financial Assets"
          },
          {
            "number": "4.2",
            "title": "Nominal v. Real Interest Rates"
          },
          {
            "number": "4.3",
            "title": "Definition, Measurement, and Functions of Money"
          },
          {
            "number": "4.4",
            "title": "Banking and the Expansion of the Money Supply"
          },
          {
            "number": "4.5",
            "title": "The Money Market"
          },
          {
            "number": "4.6",
            "title": "Monetary Policy"
          },
          {
            "number": "4.7",
            "title": "The Loanable Funds Market"
          }
        ]
      },
      {
        "number": 5,
        "title": "Long-Run Consequences of Stabilization Policies",
        "weighting": "20–30%",
        "topics": [
          {
            "number": "5.1",
            "title": "Fiscal and Monetary Policy Actions in the Short Run"
          },
          {
            "number": "5.2",
            "title": "The Phillips Curve"
          },
          {
            "number": "5.3",
            "title": "Money Growth and Inflation"
          },
          {
            "number": "5.4",
            "title": "Government Deficits and the National Debt"
          },
          {
            "number": "5.5",
            "title": "Crowding Out"
          },
          {
            "number": "5.6",
            "title": "Economic Growth"
          },
          {
            "number": "5.7",
            "title": "Public Policy and Economic Growth"
          }
        ]
      },
      {
        "number": 6,
        "title": "Open Economy—International Trade and Finance",
        "weighting": "10–13%",
        "topics": [
          {
            "number": "6.1",
            "title": "Balance of Payments Accounts"
          },
          {
            "number": "6.2",
            "title": "Exchange Rates"
          },
          {
            "number": "6.3",
            "title": "The Foreign Exchange Market"
          },
          {
            "number": "6.4",
            "title": "Effect of Changes in Policies and Economic Conditions on the Foreign Exchange Market"
          },
          {
            "number": "6.5",
            "title": "Changes in the Foreign Exchange Market and Net Exports"
          },
          {
            "number": "6.6",
            "title": "Real Interest Rates and International Capital Flows"
          }
        ]
      }
    ],
    "cedUrl": "https://apcentral.collegeboard.org/media/pdf/ap-macroeconomics-course-and-exam-description.pdf",
    "coursePageUrl": "https://apcentral.collegeboard.org/courses/ap-macroeconomics",
    "examPageUrl": "https://apcentral.collegeboard.org/courses/ap-macroeconomics/exam",
    "checkedOn": "2026-10-05",
    "schoolYear": "2026-27",
    "examSeries": "May 2027"
  },
  {
    "slug": "computer-science-a",
    "name": "Computer Science A",
    "officialName": "AP Computer Science A",
    "subjectHubs": [
      "computer-science"
    ],
    "family": "computing",
    "examDate": "2027-05-12",
    "examMode": "Fully digital: both sections answered in the Bluebook app. The Java Quick Reference is provided in Bluebook.",
    "sections": [
      {
        "name": "Section I: Multiple choice",
        "questions": "42",
        "time": "90 minutes",
        "weight": "55%",
        "detail": [
          "Mostly individual questions, occasionally 1–2 sets of 2 questions",
          "All five computational thinking practices are assessed"
        ]
      },
      {
        "name": "Section II: Free response",
        "questions": "4",
        "time": "90 minutes",
        "weight": "45%",
        "detail": [
          "Question 1: Methods and Control Structures (7 points)",
          "Question 2: Class Design (7 points)",
          "Question 3: Data Analysis with ArrayList (5 points)",
          "Question 4: 2D Array (6 points)",
          "Answers are written in Java; all four questions assess Practice 2 (Develop Code)"
        ]
      }
    ],
    "calculator": "No calculator is allowed on either section. The Java Quick Reference (accessible Java library methods) is provided.",
    "practices": [
      {
        "number": "1",
        "name": "Design Code",
        "description": "Determine an appropriate program design and develop algorithms. (2–10% of multiple choice.)"
      },
      {
        "number": "2",
        "name": "Develop Code",
        "description": "Write and implement program code. (22–38% of multiple choice; every free-response question.)"
      },
      {
        "number": "3",
        "name": "Analyze Code",
        "description": "Determine the output or result of given program code or explain why code may not work as intended. (37–53% of multiple choice.)"
      },
      {
        "number": "4",
        "name": "Document Code and Computing Systems",
        "description": "Describe the behavior and conditions that produce specified results in a program. (10–15% of multiple choice.)"
      },
      {
        "number": "5",
        "name": "Use Computers Responsibly",
        "description": "Understand the ethical and social implications of computer use. (2–10% of multiple choice.)"
      }
    ],
    "clarifications": "The clarifications document (implemented August 2025) is editorial: front matter, plus forthcoming updates to resource links and Progress Check wording. No change to units, topics or the exam is listed.",
    "prerequisiteNote": "A first-year high-school algebra course with a strong foundation in linear functions, composition of functions and problem solving, and the ability to use a Cartesian (x, y) coordinate system, per the CED. Programs are written in Java (the exam covers a subset of the language).",
    "labRequirement": "The CED requires at least 20 hours of hands-on, structured lab work in which students design, write, test and correct programs.",
    "units": [
      {
        "number": 1,
        "title": "Using Objects and Methods",
        "weighting": "15–25%",
        "topics": [
          {
            "number": "1.1",
            "title": "Introduction to Algorithms, Programming, and Compilers"
          },
          {
            "number": "1.2",
            "title": "Variables and Data Types"
          },
          {
            "number": "1.3",
            "title": "Expressions and Output"
          },
          {
            "number": "1.4",
            "title": "Assignment Statements and Input"
          },
          {
            "number": "1.5",
            "title": "Casting and Range of Variables"
          },
          {
            "number": "1.6",
            "title": "Compound Assignment Operators"
          },
          {
            "number": "1.7",
            "title": "Application Program Interface (API) and Libraries"
          },
          {
            "number": "1.8",
            "title": "Documentation with Comments"
          },
          {
            "number": "1.9",
            "title": "Method Signatures"
          },
          {
            "number": "1.10",
            "title": "Calling Class Methods"
          },
          {
            "number": "1.11",
            "title": "Math Class"
          },
          {
            "number": "1.12",
            "title": "Objects: Instances of Classes"
          },
          {
            "number": "1.13",
            "title": "Object Creation and Storage (Instantiation)"
          },
          {
            "number": "1.14",
            "title": "Calling Instance Methods"
          },
          {
            "number": "1.15",
            "title": "String Manipulation"
          }
        ]
      },
      {
        "number": 2,
        "title": "Selection and Iteration",
        "weighting": "25–35%",
        "topics": [
          {
            "number": "2.1",
            "title": "Algorithms with Selection and Repetition"
          },
          {
            "number": "2.2",
            "title": "Boolean Expressions"
          },
          {
            "number": "2.3",
            "title": "if Statements"
          },
          {
            "number": "2.4",
            "title": "Nested if Statements"
          },
          {
            "number": "2.5",
            "title": "Compound Boolean Expressions"
          },
          {
            "number": "2.6",
            "title": "Comparing Boolean Expressions"
          },
          {
            "number": "2.7",
            "title": "while Loops"
          },
          {
            "number": "2.8",
            "title": "for Loops"
          },
          {
            "number": "2.9",
            "title": "Implementing Selection and Iteration Algorithms"
          },
          {
            "number": "2.10",
            "title": "Implementing String Algorithms"
          },
          {
            "number": "2.11",
            "title": "Nested Iteration"
          },
          {
            "number": "2.12",
            "title": "Informal Run-Time Analysis"
          }
        ]
      },
      {
        "number": 3,
        "title": "Class Creation",
        "weighting": "10–18%",
        "topics": [
          {
            "number": "3.1",
            "title": "Abstraction and Program Design"
          },
          {
            "number": "3.2",
            "title": "Impact of Program Design"
          },
          {
            "number": "3.3",
            "title": "Anatomy of a Class"
          },
          {
            "number": "3.4",
            "title": "Constructors"
          },
          {
            "number": "3.5",
            "title": "Methods: How to Write Them"
          },
          {
            "number": "3.6",
            "title": "Methods: Passing and Returning References of an Object"
          },
          {
            "number": "3.7",
            "title": "Class Variables and Methods"
          },
          {
            "number": "3.8",
            "title": "Scope and Access"
          },
          {
            "number": "3.9",
            "title": "this Keyword"
          }
        ]
      },
      {
        "number": 4,
        "title": "Data Collections",
        "weighting": "30–40%",
        "topics": [
          {
            "number": "4.1",
            "title": "Ethical and Social Issues Around Data Collection"
          },
          {
            "number": "4.2",
            "title": "Introduction to Using Data Sets"
          },
          {
            "number": "4.3",
            "title": "Array Creation and Access"
          },
          {
            "number": "4.4",
            "title": "Array Traversals"
          },
          {
            "number": "4.5",
            "title": "Implementing Array Algorithms"
          },
          {
            "number": "4.6",
            "title": "Using Text Files"
          },
          {
            "number": "4.7",
            "title": "Wrapper Classes"
          },
          {
            "number": "4.8",
            "title": "ArrayList Methods"
          },
          {
            "number": "4.9",
            "title": "ArrayList Traversals"
          },
          {
            "number": "4.10",
            "title": "Implementing ArrayList Algorithms"
          },
          {
            "number": "4.11",
            "title": "2D Array Creation and Access"
          },
          {
            "number": "4.12",
            "title": "2D Array Traversals"
          },
          {
            "number": "4.13",
            "title": "Implementing 2D Array Algorithms"
          },
          {
            "number": "4.14",
            "title": "Searching Algorithms"
          },
          {
            "number": "4.15",
            "title": "Sorting Algorithms"
          },
          {
            "number": "4.16",
            "title": "Recursion"
          },
          {
            "number": "4.17",
            "title": "Recursive Searching and Sorting"
          }
        ]
      }
    ],
    "cedUrl": "https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-course-and-exam-description.pdf",
    "coursePageUrl": "https://apcentral.collegeboard.org/courses/ap-computer-science-a",
    "examPageUrl": "https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam",
    "checkedOn": "2026-11-08",
    "schoolYear": "2026-27",
    "examSeries": "May 2027"
  },
  {
    "slug": "computer-science-principles",
    "name": "Computer Science Principles",
    "officialName": "AP Computer Science Principles",
    "subjectHubs": [
      "computer-science"
    ],
    "family": "computing",
    "examDate": "2027-05-14",
    "examMode": "Through-course and end-of-course: the Create performance task (program code, video and Personalized Project Reference) is completed in class and submitted in the AP Digital Portfolio by 30 April 2027, 11:59 p.m. ET; the end-of-course exam is fully digital in the Bluebook app.",
    "sections": [
      {
        "name": "Section I: Multiple choice",
        "questions": "70",
        "time": "120 minutes",
        "weight": "70%",
        "detail": [
          "57 single-select questions",
          "5 single-select questions on a reading passage about a computing innovation",
          "8 multiple-select questions (select 2 answers)",
          "4 answer options; the Exam Reference Sheet is provided"
        ]
      },
      {
        "name": "Section II: Create performance task",
        "questions": "2",
        "time": "60 minutes on exam day, after at least 9 hours of in-class work on the task",
        "weight": "30%",
        "detail": [
          "Program code, video and Personalized Project Reference submitted by 30 April 2027",
          "2 written-response questions (4 prompts: 1, 2(a), 2(b), 2(c)) about the student’s own program, answered with the Personalized Project Reference"
        ]
      }
    ],
    "calculator": "No calculator is allowed. The Exam Reference Sheet (block-based and text-based programming constructs) is provided.",
    "practices": [
      {
        "number": "1",
        "name": "Computational Solution Design",
        "description": "Design and evaluate computational solutions for a purpose. (18–25% of multiple choice.)"
      },
      {
        "number": "2",
        "name": "Algorithms and Program Development",
        "description": "Develop and implement algorithms. (20–28% of multiple choice.)"
      },
      {
        "number": "3",
        "name": "Abstraction in Program Development",
        "description": "Develop programs that incorporate abstractions. (7–12% of multiple choice.)"
      },
      {
        "number": "4",
        "name": "Code Analysis",
        "description": "Evaluate and test algorithms and programs. (12–19% of multiple choice.)"
      },
      {
        "number": "5",
        "name": "Computing Innovations",
        "description": "Investigate computing innovations. (28–33% of multiple choice.)"
      },
      {
        "number": "6",
        "name": "Responsible Computing",
        "description": "Contribute to an inclusive, safe, collaborative, and ethical computing culture. (Not assessed in multiple choice.)"
      }
    ],
    "clarifications": "The clarifications document (implemented August 2025) is editorial (front matter only), and none are forthcoming. No change to big ideas, topics or the exam is listed. The CED in use is the Fall 2023 edition.",
    "prerequisiteNote": "A first-year high-school algebra course with a strong foundation in linear functions, composition of functions and problem solving, and the ability to use a Cartesian (x, y) coordinate system, per the CED. No prior computer science experience is required, and the course has no set programming language.",
    "unitNumbering": "Units 1–5 (the CED's five big ideas: CRD, DAT, AAP, CSN and IOC; topic numbers are the CED's own)",
    "units": [
      {
        "number": 1,
        "title": "Creative Development (CRD)",
        "weighting": "10–13%",
        "topics": [
          {
            "number": "1.1",
            "title": "Collaboration"
          },
          {
            "number": "1.2",
            "title": "Program Function and Purpose"
          },
          {
            "number": "1.3",
            "title": "Program Design and Development"
          },
          {
            "number": "1.4",
            "title": "Identifying and Correcting Errors"
          }
        ]
      },
      {
        "number": 2,
        "title": "Data (DAT)",
        "weighting": "17–22%",
        "topics": [
          {
            "number": "2.1",
            "title": "Binary Numbers"
          },
          {
            "number": "2.2",
            "title": "Data Compression"
          },
          {
            "number": "2.3",
            "title": "Extracting Information from Data"
          },
          {
            "number": "2.4",
            "title": "Using Programs with Data"
          }
        ]
      },
      {
        "number": 3,
        "title": "Algorithms and Programming (AAP)",
        "weighting": "30–35%",
        "topics": [
          {
            "number": "3.1",
            "title": "Variables and Assignments"
          },
          {
            "number": "3.2",
            "title": "Data Abstraction"
          },
          {
            "number": "3.3",
            "title": "Mathematical Expressions"
          },
          {
            "number": "3.4",
            "title": "Strings"
          },
          {
            "number": "3.5",
            "title": "Boolean Expressions"
          },
          {
            "number": "3.6",
            "title": "Conditionals"
          },
          {
            "number": "3.7",
            "title": "Nested Conditionals"
          },
          {
            "number": "3.8",
            "title": "Iteration"
          },
          {
            "number": "3.9",
            "title": "Developing Algorithms"
          },
          {
            "number": "3.10",
            "title": "Lists"
          },
          {
            "number": "3.11",
            "title": "Binary Search"
          },
          {
            "number": "3.12",
            "title": "Calling Procedures"
          },
          {
            "number": "3.13",
            "title": "Developing Procedures"
          },
          {
            "number": "3.14",
            "title": "Libraries"
          },
          {
            "number": "3.15",
            "title": "Random Values"
          },
          {
            "number": "3.16",
            "title": "Simulations"
          },
          {
            "number": "3.17",
            "title": "Algorithmic Efficiency"
          },
          {
            "number": "3.18",
            "title": "Undecidable Problems"
          }
        ]
      },
      {
        "number": 4,
        "title": "Computer Systems and Networks (CSN)",
        "weighting": "11–15%",
        "topics": [
          {
            "number": "4.1",
            "title": "The Internet"
          },
          {
            "number": "4.2",
            "title": "Fault Tolerance"
          },
          {
            "number": "4.3",
            "title": "Parallel and Distributed Computing"
          }
        ]
      },
      {
        "number": 5,
        "title": "Impact of Computing (IOC)",
        "weighting": "21–26%",
        "topics": [
          {
            "number": "5.1",
            "title": "Beneficial and Harmful Effects"
          },
          {
            "number": "5.2",
            "title": "Digital Divide"
          },
          {
            "number": "5.3",
            "title": "Computing Bias"
          },
          {
            "number": "5.4",
            "title": "Crowdsourcing"
          },
          {
            "number": "5.5",
            "title": "Legal and Ethical Concerns"
          },
          {
            "number": "5.6",
            "title": "Safe Computing"
          }
        ]
      }
    ],
    "cedUrl": "https://apcentral.collegeboard.org/media/pdf/ap-computer-science-principles-course-and-exam-description.pdf",
    "coursePageUrl": "https://apcentral.collegeboard.org/courses/ap-computer-science-principles",
    "examPageUrl": "https://apcentral.collegeboard.org/courses/ap-computer-science-principles/exam",
    "checkedOn": "2026-11-08",
    "schoolYear": "2026-27",
    "examSeries": "May 2027"
  },
  {
    "slug": "english-language-and-composition",
    "name": "English Language and Composition",
    "officialName": "AP English Language and Composition",
    "subjectHubs": [
      "english"
    ],
    "family": "english",
    "examDate": "2027-05-12",
    "examMode": "Fully digital: multiple-choice and free-response (essays) both answered in the Bluebook app.",
    "sections": [
      {
        "name": "Section I: Multiple choice",
        "questions": "45",
        "time": "60 minutes",
        "weight": "45%",
        "detail": [
          "5 question sets",
          "23–25 reading questions on nonfiction texts",
          "20–22 writing questions on revising draft texts"
        ]
      },
      {
        "name": "Section II: Free response",
        "questions": "3",
        "time": "2 hours 15 minutes (includes a 15-minute reading period)",
        "weight": "55%",
        "detail": [
          "Question 1: Synthesis (6 points), using at least 3 of 6 sources",
          "Question 2: Rhetorical Analysis (6 points)",
          "Question 3: Argument (6 points)",
          "About 40 minutes recommended per essay"
        ]
      }
    ],
    "calculator": "No calculator is used on this exam.",
    "practices": [
      {
        "number": "1",
        "name": "Rhetorical Situation: Reading",
        "description": "Explain how writers’ choices reflect the components of the rhetorical situation. (11–14% of multiple choice.)"
      },
      {
        "number": "2",
        "name": "Rhetorical Situation: Writing",
        "description": "Make strategic choices in a text to address a rhetorical situation. (11–14% of multiple choice.)"
      },
      {
        "number": "3",
        "name": "Claims and Evidence: Reading",
        "description": "Identify and describe the claims and evidence of an argument. (13–16% of multiple choice.)"
      },
      {
        "number": "4",
        "name": "Claims and Evidence: Writing",
        "description": "Analyze and select evidence to develop and refine a claim. (11–14% of multiple choice.)"
      },
      {
        "number": "5",
        "name": "Reasoning and Organization: Reading",
        "description": "Describe the reasoning, organization, and development of an argument. (13–16% of multiple choice.)"
      },
      {
        "number": "6",
        "name": "Reasoning and Organization: Writing",
        "description": "Use organization and commentary to illuminate the line of reasoning in an argument. (11–14% of multiple choice.)"
      },
      {
        "number": "7",
        "name": "Style: Reading",
        "description": "Explain how writers’ stylistic choices contribute to the purpose of an argument. (11–14% of multiple choice.)"
      },
      {
        "number": "8",
        "name": "Style: Writing",
        "description": "Select words and use elements of composition to advance an argument. (11–14% of multiple choice.)"
      }
    ],
    "clarifications": "The clarifications document (implemented June 2025) is editorial: front matter, an updated list of speechmakers, removal of named example authors and texts, and forthcoming updates to resource links and Progress Check wording. No change to units, skills or the exam is listed.",
    "prerequisiteNote": "No prerequisite courses. Students should be able to read and understand college-level texts and express themselves clearly in writing, per the CED.",
    "unitNumbering": "Units 1–9 (the CED numbers the units but gives them no titles or topic numbers; unit titles and topics here are Marlbridge groupings of the CED’s skills and essential knowledge statements)",
    "topicSource": "marlbridge",
    "unitTitleSource": "marlbridge",
    "unitWeightingNote": "The exam is not weighted by unit: the official multiple-choice weightings are by skill category (shown under Course skills).",
    "units": [
      {
        "number": 1,
        "title": "Claims, Evidence and the Rhetorical Situation",
        "weighting": "Not weighted by unit",
        "topics": [
          {
            "number": "1.1",
            "title": "The rhetorical situation",
            "cedRefs": [
              "1.A",
              "RHS-1.A"
            ]
          },
          {
            "number": "1.2",
            "title": "Exigence and purpose",
            "cedRefs": [
              "1.A",
              "RHS-1.B",
              "RHS-1.C"
            ]
          },
          {
            "number": "1.3",
            "title": "Audience and context",
            "cedRefs": [
              "1.A",
              "RHS-1.D",
              "RHS-1.E"
            ]
          },
          {
            "number": "1.4",
            "title": "Claims that need a defence",
            "cedRefs": [
              "3.A",
              "CLE-1.A",
              "CLE-1.D"
            ]
          },
          {
            "number": "1.5",
            "title": "Evidence and its types",
            "cedRefs": [
              "3.A",
              "CLE-1.B",
              "CLE-1.C"
            ]
          },
          {
            "number": "1.6",
            "title": "Writing a paragraph with a claim and evidence",
            "cedRefs": [
              "4.A",
              "CLE-1.E"
            ]
          }
        ]
      },
      {
        "number": 2,
        "title": "Audience, Appeals and the Thesis",
        "weighting": "Not weighted by unit",
        "topics": [
          {
            "number": "2.1",
            "title": "Writing for an audience’s beliefs, values and needs",
            "cedRefs": [
              "1.B",
              "2.B",
              "RHS-1.F"
            ]
          },
          {
            "number": "2.2",
            "title": "Relating to an audience’s emotions and values",
            "cedRefs": [
              "1.B",
              "2.B",
              "RHS-1.G"
            ]
          },
          {
            "number": "2.3",
            "title": "Appeals: the modes of persuasion",
            "cedRefs": [
              "1.B",
              "2.B",
              "RHS-1.H"
            ]
          },
          {
            "number": "2.4",
            "title": "Choosing evidence strategically",
            "cedRefs": [
              "3.A",
              "4.A",
              "CLE-1.F",
              "CLE-1.G"
            ]
          },
          {
            "number": "2.5",
            "title": "Sufficient evidence",
            "cedRefs": [
              "3.A",
              "4.A",
              "CLE-1.H"
            ]
          },
          {
            "number": "2.6",
            "title": "Identifying the thesis of an argument",
            "cedRefs": [
              "3.B",
              "CLE-1.I",
              "CLE-1.J"
            ]
          },
          {
            "number": "2.7",
            "title": "Writing a defensible thesis statement",
            "cedRefs": [
              "4.B",
              "CLE-1.I",
              "CLE-1.J"
            ]
          }
        ]
      },
      {
        "number": 3,
        "title": "Commentary, Line of Reasoning and Methods of Development",
        "weighting": "Not weighted by unit",
        "topics": [
          {
            "number": "3.1",
            "title": "Commentary that links evidence to a claim",
            "cedRefs": [
              "3.A",
              "4.A",
              "CLE-1.K",
              "CLE-1.L"
            ]
          },
          {
            "number": "3.2",
            "title": "Synthesis and acknowledging sources",
            "cedRefs": [
              "3.A",
              "4.A",
              "CLE-1.M",
              "CLE-1.N"
            ]
          },
          {
            "number": "3.3",
            "title": "Following and building a line of reasoning",
            "cedRefs": [
              "5.A",
              "6.A",
              "REO-1.A",
              "REO-1.B",
              "REO-1.E"
            ]
          },
          {
            "number": "3.4",
            "title": "Commentary across a whole argument",
            "cedRefs": [
              "5.A",
              "6.A",
              "REO-1.C",
              "REO-1.D"
            ]
          },
          {
            "number": "3.5",
            "title": "Flaws in a line of reasoning",
            "cedRefs": [
              "5.A",
              "6.A",
              "REO-1.F"
            ]
          },
          {
            "number": "3.6",
            "title": "Methods of development",
            "cedRefs": [
              "5.C",
              "6.C",
              "REO-1.G",
              "REO-1.H"
            ]
          },
          {
            "number": "3.7",
            "title": "Developing ideas through narration and cause-effect",
            "cedRefs": [
              "5.C",
              "6.C",
              "REO-1.I",
              "REO-1.J"
            ]
          }
        ]
      },
      {
        "number": 4,
        "title": "Introductions, Conclusions and Further Methods of Development",
        "weighting": "Not weighted by unit",
        "topics": [
          {
            "number": "4.1",
            "title": "Introductions",
            "cedRefs": [
              "1.A",
              "2.A",
              "RHS-1.I"
            ]
          },
          {
            "number": "4.2",
            "title": "Conclusions",
            "cedRefs": [
              "1.A",
              "2.A",
              "RHS-1.J"
            ]
          },
          {
            "number": "4.3",
            "title": "Thesis statements that preview the line of reasoning",
            "cedRefs": [
              "3.B",
              "4.B",
              "CLE-1.O"
            ]
          },
          {
            "number": "4.4",
            "title": "Developing ideas through comparison-contrast",
            "cedRefs": [
              "5.C",
              "6.C",
              "REO-1.G",
              "REO-1.K"
            ]
          },
          {
            "number": "4.5",
            "title": "Developing ideas through definition and description",
            "cedRefs": [
              "5.C",
              "6.C",
              "REO-1.G",
              "REO-1.L"
            ]
          }
        ]
      },
      {
        "number": 5,
        "title": "Coherence, Transitions and Word Choice",
        "weighting": "Not weighted by unit",
        "topics": [
          {
            "number": "5.1",
            "title": "Body paragraphs and the line of reasoning",
            "cedRefs": [
              "5.A",
              "6.A",
              "REO-1.M"
            ]
          },
          {
            "number": "5.2",
            "title": "Unity and coherence",
            "cedRefs": [
              "5.B",
              "6.B",
              "REO-1.N"
            ]
          },
          {
            "number": "5.3",
            "title": "Repetition, synonyms, pronouns and parallel structure",
            "cedRefs": [
              "5.B",
              "6.B",
              "REO-1.O"
            ]
          },
          {
            "number": "5.4",
            "title": "Transitional elements",
            "cedRefs": [
              "5.B",
              "6.B",
              "REO-1.P",
              "REO-1.Q"
            ]
          },
          {
            "number": "5.5",
            "title": "Connotation and denotation",
            "cedRefs": [
              "7.A",
              "8.A",
              "STL-1.A"
            ]
          },
          {
            "number": "5.6",
            "title": "Descriptive words and precise word choice",
            "cedRefs": [
              "7.A",
              "8.A",
              "STL-1.B",
              "STL-1.C"
            ]
          }
        ]
      },
      {
        "number": 6,
        "title": "Sources, Bias and Tone",
        "weighting": "Not weighted by unit",
        "topics": [
          {
            "number": "6.1",
            "title": "Synthesising material from several sources",
            "cedRefs": [
              "3.A",
              "4.A",
              "CLE-1.P",
              "CLE-1.Q"
            ]
          },
          {
            "number": "6.2",
            "title": "Position and perspective",
            "cedRefs": [
              "3.A",
              "4.A",
              "CLE-1.R"
            ]
          },
          {
            "number": "6.3",
            "title": "Bias and limitations in sources",
            "cedRefs": [
              "3.A",
              "4.A",
              "CLE-1.S",
              "CLE-1.T"
            ]
          },
          {
            "number": "6.4",
            "title": "Revising a thesis for new evidence",
            "cedRefs": [
              "3.B",
              "4.B",
              "CLE-1.U"
            ]
          },
          {
            "number": "6.5",
            "title": "Tone and connotation",
            "cedRefs": [
              "7.A",
              "8.A",
              "STL-1.D",
              "STL-1.E"
            ]
          },
          {
            "number": "6.6",
            "title": "Shifts in tone",
            "cedRefs": [
              "7.A",
              "8.A",
              "STL-1.F"
            ]
          }
        ]
      },
      {
        "number": 7,
        "title": "Qualifying Claims, Sentence Structure and Punctuation",
        "weighting": "Not weighted by unit",
        "topics": [
          {
            "number": "7.1",
            "title": "Introductions and conclusions for a complex argument",
            "cedRefs": [
              "1.A",
              "2.A",
              "RHS-1.I",
              "RHS-1.J"
            ]
          },
          {
            "number": "7.2",
            "title": "Complexity and avoiding oversimplification",
            "cedRefs": [
              "3.C",
              "4.C",
              "CLE-1.V",
              "CLE-1.W"
            ]
          },
          {
            "number": "7.3",
            "title": "Qualifying a claim with modifiers",
            "cedRefs": [
              "3.C",
              "4.C",
              "CLE-1.X"
            ]
          },
          {
            "number": "7.4",
            "title": "Clauses and the arrangement of sentences",
            "cedRefs": [
              "7.B",
              "8.B",
              "STL-1.G",
              "STL-1.H",
              "STL-1.L"
            ]
          },
          {
            "number": "7.5",
            "title": "Coordination and subordination",
            "cedRefs": [
              "7.B",
              "8.B",
              "STL-1.I",
              "STL-1.J",
              "STL-1.K"
            ]
          },
          {
            "number": "7.6",
            "title": "Grammar, mechanics and punctuation",
            "cedRefs": [
              "7.C",
              "8.C",
              "STL-1.M",
              "STL-1.N",
              "STL-1.O"
            ]
          },
          {
            "number": "7.7",
            "title": "Design features for emphasis",
            "cedRefs": [
              "7.C",
              "8.C",
              "STL-1.P"
            ]
          }
        ]
      },
      {
        "number": 8,
        "title": "Audience, Style and Irony",
        "weighting": "Not weighted by unit",
        "topics": [
          {
            "number": "8.1",
            "title": "Comparisons that relate to an audience",
            "cedRefs": [
              "1.B",
              "2.B",
              "RHS-1.K"
            ]
          },
          {
            "number": "8.2",
            "title": "Diction, syntax and credibility",
            "cedRefs": [
              "1.B",
              "2.B",
              "RHS-1.L",
              "RHS-1.M"
            ]
          },
          {
            "number": "8.3",
            "title": "Making choices for a particular audience",
            "cedRefs": [
              "1.B",
              "2.B",
              "RHS-1.N"
            ]
          },
          {
            "number": "8.4",
            "title": "Style",
            "cedRefs": [
              "7.A",
              "8.A",
              "STL-1.Q"
            ]
          },
          {
            "number": "8.5",
            "title": "Irony and complex perspectives",
            "cedRefs": [
              "7.A",
              "8.A",
              "STL-1.R"
            ]
          },
          {
            "number": "8.6",
            "title": "Modifiers and parenthetical elements",
            "cedRefs": [
              "7.B",
              "8.B",
              "STL-1.S",
              "STL-1.T"
            ]
          }
        ]
      },
      {
        "number": 9,
        "title": "Counterarguments: Concession, Rebuttal and Refutation",
        "weighting": "Not weighted by unit",
        "topics": [
          {
            "number": "9.1",
            "title": "Entering an ongoing conversation",
            "cedRefs": [
              "3.C",
              "4.C",
              "CLE-1.Y"
            ]
          },
          {
            "number": "9.2",
            "title": "Evidence that supports, complements or contradicts a thesis",
            "cedRefs": [
              "3.C",
              "4.C",
              "CLE-1.Z"
            ]
          },
          {
            "number": "9.3",
            "title": "Conceding",
            "cedRefs": [
              "3.C",
              "4.C",
              "CLE-1.AA",
              "CLE-1.AB"
            ]
          },
          {
            "number": "9.4",
            "title": "Rebutting and refuting",
            "cedRefs": [
              "3.C",
              "4.C",
              "CLE-1.AC",
              "CLE-1.AD"
            ]
          },
          {
            "number": "9.5",
            "title": "Introducing counterarguments, and when to address them",
            "cedRefs": [
              "3.C",
              "4.C",
              "CLE-1.AE",
              "CLE-1.AF"
            ]
          }
        ]
      }
    ],
    "cedUrl": "https://apcentral.collegeboard.org/media/pdf/ap-english-language-and-composition-course-and-exam-description.pdf",
    "coursePageUrl": "https://apcentral.collegeboard.org/courses/ap-english-language-and-composition",
    "examPageUrl": "https://apcentral.collegeboard.org/courses/ap-english-language-and-composition/exam",
    "checkedOn": "2026-11-08",
    "schoolYear": "2026-27",
    "examSeries": "May 2027"
  },
  {
    "slug": "english-literature-and-composition",
    "name": "English Literature and Composition",
    "officialName": "AP English Literature and Composition",
    "subjectHubs": [
      "english-literature",
      "english"
    ],
    "family": "english",
    "examDate": "2027-05-05",
    "examMode": "Fully digital: multiple-choice and free-response (essays) both answered in the Bluebook app.",
    "sections": [
      {
        "name": "Section I: Multiple choice",
        "questions": "55",
        "time": "60 minutes",
        "weight": "45%",
        "detail": [
          "5 sets of 8–13 questions, each on a passage of prose fiction, drama or poetry",
          "At least 2 prose fiction passages and at least 2 poetry passages"
        ]
      },
      {
        "name": "Section II: Free response",
        "questions": "3",
        "time": "2 hours",
        "weight": "55%",
        "detail": [
          "Question 1: Poetry Analysis (6 points)",
          "Question 2: Prose Fiction Analysis (6 points)",
          "Question 3: Literary Argument (6 points), on a work of fiction the student chooses",
          "About 40 minutes recommended per essay"
        ]
      }
    ],
    "calculator": "No calculator is used on this exam.",
    "practices": [
      {
        "number": "1",
        "name": "Character",
        "description": "Explain the function of character. (16–20% of multiple choice.)"
      },
      {
        "number": "2",
        "name": "Setting",
        "description": "Explain the function of setting. (3–6% of multiple choice.)"
      },
      {
        "number": "3",
        "name": "Plot and Structure",
        "description": "Explain the function of plot and structure. (16–20% of multiple choice.)"
      },
      {
        "number": "4",
        "name": "Narrator or Speaker",
        "description": "Explain the function of the narrator or speaker. (21–26% of multiple choice.)"
      },
      {
        "number": "5",
        "name": "Word Choice, Imagery and Symbols",
        "description": "Explain the function of word choice, imagery, and symbols. (10–13% of multiple choice.)"
      },
      {
        "number": "6",
        "name": "Comparison",
        "description": "Explain the function of comparison. (10–13% of multiple choice.)"
      },
      {
        "number": "7",
        "name": "Literary Argumentation",
        "description": "Develop textually substantiated arguments about interpretations of part or all of a text. (10–13% of multiple choice.)"
      }
    ],
    "clarifications": "The clarifications document (implemented August 2025) is editorial: front matter, plus forthcoming updates to resource links and Progress Check wording. No change to units, skills or the exam is listed.",
    "prerequisiteNote": "No prerequisite courses. Students should be able to read and understand college-level texts and express themselves clearly in writing, per the CED.",
    "unitNumbering": "Units 1–9 (unit titles are the CED’s; the CED has no numbered topics, so topics here are Marlbridge groupings of the CED’s skills under its six big ideas)",
    "topicSource": "marlbridge",
    "unitWeightingNote": "The official multiple-choice weightings are given per genre, not per unit: Short Fiction (Units 1, 4, 7) 42–49%, Poetry (Units 2, 5, 8) 36–45%, Longer Fiction or Drama (Units 3, 6, 9) 15–18%.",
    "units": [
      {
        "number": 1,
        "title": "Short Fiction I",
        "weighting": "42–49% (Short Fiction: Units 1, 4 and 7 together)",
        "topics": [
          {
            "number": "1.1",
            "title": "Character: what details reveal about perspective and motive",
            "cedRefs": [
              "CHR",
              "1.A"
            ]
          },
          {
            "number": "1.2",
            "title": "Setting: details that convey a time and place",
            "cedRefs": [
              "SET",
              "2.A"
            ]
          },
          {
            "number": "1.3",
            "title": "Plot: how events are ordered and why",
            "cedRefs": [
              "STR",
              "3.A",
              "3.B"
            ]
          },
          {
            "number": "1.4",
            "title": "Narrator and point of view",
            "cedRefs": [
              "NAR",
              "4.A",
              "4.B"
            ]
          },
          {
            "number": "1.5",
            "title": "Writing a paragraph with a claim and textual evidence",
            "cedRefs": [
              "LAN",
              "7.A"
            ]
          }
        ]
      },
      {
        "number": 2,
        "title": "Poetry I",
        "weighting": "36–45% (Poetry: Units 2, 5 and 8 together)",
        "topics": [
          {
            "number": "2.1",
            "title": "The speaker as a character",
            "cedRefs": [
              "CHR",
              "1.A"
            ]
          },
          {
            "number": "2.2",
            "title": "The structure of a poem",
            "cedRefs": [
              "STR",
              "3.C"
            ]
          },
          {
            "number": "2.3",
            "title": "Contrasts within a poem",
            "cedRefs": [
              "STR",
              "3.D"
            ]
          },
          {
            "number": "2.4",
            "title": "The function of specific words and phrases",
            "cedRefs": [
              "FIG",
              "5.B"
            ]
          },
          {
            "number": "2.5",
            "title": "Simile and metaphor",
            "cedRefs": [
              "FIG",
              "6.A",
              "6.B"
            ]
          },
          {
            "number": "2.6",
            "title": "Writing a paragraph about a poem",
            "cedRefs": [
              "LAN",
              "7.A"
            ]
          }
        ]
      },
      {
        "number": 3,
        "title": "Longer Fiction or Drama I",
        "weighting": "15–18% (Longer Fiction or Drama: Units 3, 6 and 9 together)",
        "topics": [
          {
            "number": "3.1",
            "title": "Character in longer works",
            "cedRefs": [
              "CHR",
              "1.A"
            ]
          },
          {
            "number": "3.2",
            "title": "Characters who change or remain unchanged",
            "cedRefs": [
              "CHR",
              "1.B"
            ]
          },
          {
            "number": "3.3",
            "title": "Setting in longer works",
            "cedRefs": [
              "SET",
              "2.A"
            ]
          },
          {
            "number": "3.4",
            "title": "Significant events in a plot",
            "cedRefs": [
              "STR",
              "3.E"
            ]
          },
          {
            "number": "3.5",
            "title": "Conflict",
            "cedRefs": [
              "STR",
              "3.F"
            ]
          },
          {
            "number": "3.6",
            "title": "From claim-and-evidence paragraph to defensible thesis",
            "cedRefs": [
              "LAN",
              "7.A",
              "7.B"
            ]
          },
          {
            "number": "3.7",
            "title": "Commentary and the line of reasoning",
            "cedRefs": [
              "LAN",
              "7.C"
            ]
          },
          {
            "number": "3.8",
            "title": "Selecting evidence and controlling composition",
            "cedRefs": [
              "LAN",
              "7.D",
              "7.E"
            ]
          }
        ]
      },
      {
        "number": 4,
        "title": "Short Fiction II",
        "weighting": "42–49% (Short Fiction: Units 1, 4 and 7 together)",
        "topics": [
          {
            "number": "4.1",
            "title": "Contrasting characters",
            "cedRefs": [
              "CHR",
              "1.A",
              "1.C"
            ]
          },
          {
            "number": "4.2",
            "title": "Nuance and complexity in character relationships",
            "cedRefs": [
              "CHR",
              "1.D"
            ]
          },
          {
            "number": "4.3",
            "title": "The function of setting, and character and setting",
            "cedRefs": [
              "SET",
              "2.B",
              "2.C"
            ]
          },
          {
            "number": "4.4",
            "title": "Plot order and contrasts",
            "cedRefs": [
              "STR",
              "3.A",
              "3.D"
            ]
          },
          {
            "number": "4.5",
            "title": "Narrator, point of view and perspective",
            "cedRefs": [
              "NAR",
              "4.A",
              "4.B",
              "4.C"
            ]
          },
          {
            "number": "4.6",
            "title": "Thesis and commentary in a prose analysis",
            "cedRefs": [
              "LAN",
              "7.B",
              "7.C"
            ]
          },
          {
            "number": "4.7",
            "title": "Evidence and composition in a prose analysis",
            "cedRefs": [
              "LAN",
              "7.D",
              "7.E"
            ]
          }
        ]
      },
      {
        "number": 5,
        "title": "Poetry II",
        "weighting": "36–45% (Poetry: Units 2, 5 and 8 together)",
        "topics": [
          {
            "number": "5.1",
            "title": "Structure in poetry",
            "cedRefs": [
              "STR",
              "3.C"
            ]
          },
          {
            "number": "5.2",
            "title": "Literal and figurative meaning",
            "cedRefs": [
              "FIG",
              "5.A",
              "5.B"
            ]
          },
          {
            "number": "5.3",
            "title": "Imagery",
            "cedRefs": [
              "FIG",
              "5.D"
            ]
          },
          {
            "number": "5.4",
            "title": "Metaphor and personification",
            "cedRefs": [
              "FIG",
              "6.B",
              "6.C"
            ]
          },
          {
            "number": "5.5",
            "title": "Allusion",
            "cedRefs": [
              "FIG",
              "6.D"
            ]
          },
          {
            "number": "5.6",
            "title": "Thesis and commentary in a poetry analysis",
            "cedRefs": [
              "LAN",
              "7.B",
              "7.C"
            ]
          },
          {
            "number": "5.7",
            "title": "Evidence and composition in a poetry analysis",
            "cedRefs": [
              "LAN",
              "7.D",
              "7.E"
            ]
          }
        ]
      },
      {
        "number": 6,
        "title": "Longer Fiction or Drama II",
        "weighting": "15–18% (Longer Fiction or Drama: Units 3, 6 and 9 together)",
        "topics": [
          {
            "number": "6.1",
            "title": "Contrasting characters in longer works",
            "cedRefs": [
              "CHR",
              "1.A",
              "1.C"
            ]
          },
          {
            "number": "6.2",
            "title": "How choices, actions and speech reveal complexity",
            "cedRefs": [
              "CHR",
              "1.E"
            ]
          },
          {
            "number": "6.3",
            "title": "Sequence and contrasts in a longer plot",
            "cedRefs": [
              "STR",
              "3.A",
              "3.B",
              "3.D"
            ]
          },
          {
            "number": "6.4",
            "title": "Narrator perspective and reliability",
            "cedRefs": [
              "NAR",
              "4.C",
              "4.D"
            ]
          },
          {
            "number": "6.5",
            "title": "Symbol",
            "cedRefs": [
              "FIG",
              "5.C"
            ]
          },
          {
            "number": "6.6",
            "title": "Thesis and commentary in a literary argument",
            "cedRefs": [
              "LAN",
              "7.B",
              "7.C"
            ]
          },
          {
            "number": "6.7",
            "title": "Evidence and composition in a literary argument",
            "cedRefs": [
              "LAN",
              "7.D",
              "7.E"
            ]
          }
        ]
      },
      {
        "number": 7,
        "title": "Short Fiction III",
        "weighting": "42–49% (Short Fiction: Units 1, 4 and 7 together)",
        "topics": [
          {
            "number": "7.1",
            "title": "Character change and complex relationships",
            "cedRefs": [
              "CHR",
              "1.B",
              "1.D"
            ]
          },
          {
            "number": "7.2",
            "title": "Setting and its relationship to character",
            "cedRefs": [
              "SET",
              "2.B",
              "2.C"
            ]
          },
          {
            "number": "7.3",
            "title": "Plot order and sequence",
            "cedRefs": [
              "STR",
              "3.A",
              "3.B"
            ]
          },
          {
            "number": "7.4",
            "title": "Narrator reliability",
            "cedRefs": [
              "NAR",
              "4.D"
            ]
          },
          {
            "number": "7.5",
            "title": "Symbol and imagery in fiction",
            "cedRefs": [
              "FIG",
              "5.C",
              "5.D"
            ]
          },
          {
            "number": "7.6",
            "title": "Simile and personification in fiction",
            "cedRefs": [
              "FIG",
              "6.A",
              "6.C"
            ]
          },
          {
            "number": "7.7",
            "title": "Thesis and commentary",
            "cedRefs": [
              "LAN",
              "7.B",
              "7.C"
            ]
          },
          {
            "number": "7.8",
            "title": "Selecting relevant and sufficient evidence",
            "cedRefs": [
              "LAN",
              "7.D"
            ]
          }
        ]
      },
      {
        "number": 8,
        "title": "Poetry III",
        "weighting": "36–45% (Poetry: Units 2, 5 and 8 together)",
        "topics": [
          {
            "number": "8.1",
            "title": "Structure and contrasts in poetry",
            "cedRefs": [
              "STR",
              "3.C",
              "3.D"
            ]
          },
          {
            "number": "8.2",
            "title": "Word choice in complex poems",
            "cedRefs": [
              "FIG",
              "5.B"
            ]
          },
          {
            "number": "8.3",
            "title": "Symbol in poetry",
            "cedRefs": [
              "FIG",
              "5.C"
            ]
          },
          {
            "number": "8.4",
            "title": "Extended and complex metaphor",
            "cedRefs": [
              "FIG",
              "6.B"
            ]
          },
          {
            "number": "8.5",
            "title": "Allusion in poetry",
            "cedRefs": [
              "FIG",
              "6.D"
            ]
          },
          {
            "number": "8.6",
            "title": "Thesis and commentary in a poetry essay",
            "cedRefs": [
              "LAN",
              "7.B",
              "7.C"
            ]
          },
          {
            "number": "8.7",
            "title": "Evidence and composition in a poetry essay",
            "cedRefs": [
              "LAN",
              "7.D",
              "7.E"
            ]
          }
        ]
      },
      {
        "number": 9,
        "title": "Longer Fiction or Drama III",
        "weighting": "15–18% (Longer Fiction or Drama: Units 3, 6 and 9 together)",
        "topics": [
          {
            "number": "9.1",
            "title": "Characters who change or remain unchanged",
            "cedRefs": [
              "CHR",
              "1.B"
            ]
          },
          {
            "number": "9.2",
            "title": "Complexity revealed through choices, actions and speech",
            "cedRefs": [
              "CHR",
              "1.E"
            ]
          },
          {
            "number": "9.3",
            "title": "Significant events",
            "cedRefs": [
              "STR",
              "3.E"
            ]
          },
          {
            "number": "9.4",
            "title": "Conflict and its function",
            "cedRefs": [
              "STR",
              "3.F"
            ]
          },
          {
            "number": "9.5",
            "title": "Details, diction and syntax that reveal perspective",
            "cedRefs": [
              "NAR",
              "4.C"
            ]
          },
          {
            "number": "9.6",
            "title": "Thesis and commentary in a literary argument essay",
            "cedRefs": [
              "LAN",
              "7.B",
              "7.C"
            ]
          },
          {
            "number": "9.7",
            "title": "Selecting evidence for a literary argument",
            "cedRefs": [
              "LAN",
              "7.D"
            ]
          }
        ]
      }
    ],
    "cedUrl": "https://apcentral.collegeboard.org/media/pdf/ap-english-literature-and-composition-course-and-exam-description.pdf",
    "coursePageUrl": "https://apcentral.collegeboard.org/courses/ap-english-literature-and-composition",
    "examPageUrl": "https://apcentral.collegeboard.org/courses/ap-english-literature-and-composition/exam",
    "checkedOn": "2026-11-08",
    "schoolYear": "2026-27",
    "examSeries": "May 2027"
  }
] as const;

export const apCourseBySlug = (slug: string): ApCourse | undefined => AP_COURSES.find((c) => c.slug === slug);

/** All topic numbers for a course, e.g. '1.1'. */
export const apTopicNumbers = (course: ApCourse): string[] => course.units.flatMap((u) => u.topics.map((t) => t.number));

export const apTopic = (course: ApCourse, number: string): ApTopic | undefined =>
  course.units.flatMap((u) => u.topics).find((t) => t.number === number);

export const apUnit = (course: ApCourse, number: number): ApUnit | undefined => course.units.find((u) => u.number === number);
