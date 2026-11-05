/**
 * D-438 -- flashcards for OCR A Level Physics A H556 (Version 3.0, March 2026).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 * The course is not tiered, so no card is marked upper tier.
 *
 *   src: '...'  The card restates a term or definition on that revision-notes
 *               page (candidates found with scripts/flashcard-candidates.mjs
 *               H556, plus definition tables on the same pages); origin
 *               'revision-notes'. Every source maps to the card's subtopic.
 *
 * Plain text only (see types.ts). Unicode for symbols and formulae.
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

const R = (slug: string) => `ocr-a-level-physics-${slug}-revision-notes`;
const PRAC = R('practical-skills');
const PEND = R('practical-endorsement-skills-apparatus-and-techniques');
const UNITS = R('units-measurement-uncertainty-and-vectors');
const DYN = R('dynamics-free-body-diagrams-drag-and-terminal-velocity');
const MOM = R('moments-equilibrium-density-and-pressure');
const WEP = R('work-energy-power-and-efficiency');
const SPR = R('springs-stress-strain-and-the-young-modulus');
const NEWT = R('newtons-laws-momentum-impulse-and-collisions');
const CHG = R('charge-current-drift-velocity-p-d-and-e-m-f');
const RES = R('resistance-resistivity-and-electrical-power');
const WAVE = R('wave-motion-polarisation-and-wave-effects');
const SUP = R('superposition-interference-and-the-double-slit');
const STAT = R('stationary-waves-harmonics-and-resonance-tubes');
const PHOT = R('photons-photoelectric-effect-and-wave-particle-duality');
const TEMP = R('temperature-kinetic-model-internal-energy-specific');
const SHM = R('simple-harmonic-motion-energy-damping-and-resonance');
const GFLD = R('gravitational-fields-newtons-law-and-planetary-motion');
const GPOT = R('gravitational-potential-potential-energy-and-escape');
const STARS = R('stars-stellar-evolution-and-the-hr-diagram');
const EFLD = R('electric-fields-coulombs-law-potential-and-uniform');
const EMI = R('electromagnetic-induction-generators-and-transformers');
const NUCA = R('the-nuclear-atom-nuclear-size-and-fundamental-particles');
const DECAY = R('radioactive-decay-activity-half-life-and-dating');
const MASS = R('mass-energy-binding-energy-fission-and-fusion');

const M1 = 'development-of-practical-skills-in-physics-ocr-alevel';
const M2 = 'foundations-of-physics-ocr-alevel';
const M3 = 'forces-and-motion-ocr-alevel';
const M4 = 'electrons-waves-and-photons';
const M5 = 'newtonian-world-and-astrophysics';
const M6 = 'particles-and-medical-physics';

export const DECK_OCR_A_LEVEL_PHYSICS: FlashcardDeck = {
  boardSlug: 'ocr',
  qualificationSlug: 'a-level',
  subjectSlug: 'physics',
  syllabusCode: 'H556',
  syllabusSeries: 'Version 3.0 (March 2026), for first assessment in 2017',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // Module 1 Development of practical skills in physics
    ...sub(M1, 'practical-skills-assessed-in-a-written-examination', '1.1', [
      { n: 1, f: 'Accurate (results)', b: 'Close to the true value.', src: PRAC },
      { n: 2, f: 'Precise (results)', b: 'Repeat readings agree with each other. A miscalibrated instrument gives precise but inaccurate readings.', src: PRAC },
      { n: 3, f: 'Repeatable vs reproducible', b: 'Repeatable: the same result with the same method and the same person.\nReproducible: the same result with a different method or person.', src: PRAC },
      { n: 4, f: 'Control variable vs control experiment', b: 'A control variable is kept constant. A control experiment is a parallel run with the independent variable absent, showing the effect is caused by the factor being tested.', src: PRAC },
      { n: 5, f: 'What do repeat readings improve, and what do they not fix?', b: 'They reveal anomalies and reduce the effect of random error on the mean. They do nothing for a systematic error, which needs recalibration or zeroing.' },
      { n: 6, f: 'Pendulum: what do you plot to find g, and how do you get g from the gradient?', b: 'Plot T² against l: a straight line through the origin with gradient 4π²/g, so g = 4π² ÷ gradient.' },
      { n: 7, f: 'How should a gradient be measured from a straight-line graph?', b: 'With a large triangle spanning most of the line, taking coordinates from the line itself, not from individual data points.' },
      { n: 8, f: 'Give two specific improvements to a timing experiment, with reasons', b: 'Use light gates rather than a stopwatch, to remove human reaction time. Time many oscillations and divide, or measure a larger quantity, to reduce the percentage uncertainty.' },
    ]),
    ...sub(M1, 'practical-skills-assessed-in-the-practical-endorsement', '1.2', [
      { n: 1, f: 'How is the Practical Endorsement assessed and reported?', b: 'Teacher assessed and reported separately; it does not contribute to the A level grade. At least 12 practical activities covering PAG1 to PAG12, plus consistent display of the CPAC.', src: PEND },
      { n: 2, f: 'The five CPAC competencies', b: '1. Follows written procedures.\n2. Applies investigative approaches and methods with instruments and equipment.\n3. Safely uses a range of practical equipment and materials.\n4. Makes and records observations.\n5. Researches, references and reports.', src: PEND },
      { n: 3, f: 'Steps in a specific risk assessment', b: 'Name the hazard; say what could be harmed and how; state a specific control measure; say what to do if something goes wrong.' },
      { n: 4, f: 'How do you read a micrometer correctly?', b: 'Note the zero error with the jaws closed. Close on the object using the ratchet only. Read the sleeve (including any half-millimetre mark), add the thimble reading, subtract the zero error. Repeat at other positions and average.' },
      { n: 5, f: 'Reading an oscilloscope: peak voltage and frequency', b: 'Peak-to-peak divisions × V/div, halved, gives the peak value. Divisions for one cycle × time/div gives T; then f = 1/T.' },
      { n: 6, f: 'Counting radiation: corrected count rate and the uncertainty in a count', b: 'Corrected count rate = source count rate − background count rate (background measured separately with no source).\nUncertainty in N counts is about √N.' },
      { n: 7, f: 'What is a fiducial marker and where is it placed for an oscillation?', b: 'A fixed reference mark for starting and stopping timing. Place it at the equilibrium position, where the object moves fastest, so timing is most consistent.' },
    ]),

    // Module 2 Foundations of physics
    ...sub(M2, 'physical-quantities-and-units-ocr-alevel', '2.1', [
      { n: 1, f: 'The six SI base quantities used in H556, with units', b: 'Length (m), mass (kg), time (s), current (A), temperature (K), amount of substance (mol). The specification excludes luminous intensity.' },
      { n: 2, f: 'The volt and the ohm in SI base units', b: 'V = kg m² s⁻³ A⁻¹\nΩ = kg m² s⁻³ A⁻²' },
      { n: 3, f: 'Homogeneity check: what it is, and what it cannot show', b: 'Reduce every term to base units: both sides, and any terms added or subtracted, must match. A match does not prove the equation is right, because missing numerical constants are invisible.', src: UNITS },
      { n: 4, f: 'Prefixes p, n, μ, m, c, d', b: 'p 10⁻¹², n 10⁻⁹, μ 10⁻⁶, m 10⁻³, c 10⁻², d 10⁻¹.' },
      { n: 5, f: 'Prefixes k, M, G, T, and converting km h⁻¹ to m s⁻¹', b: 'k 10³, M 10⁶, G 10⁹, T 10¹².\nDivide a speed in km h⁻¹ by 3.6 to get m s⁻¹.' },
      { n: 6, f: 'How should table headings and graph axes be labelled?', b: 'Quantity / unit, for example current / A or speed / m s⁻¹. The entries are then pure numbers.', src: UNITS },
    ]),
    ...sub(M2, 'making-measurements-and-analysing-data-ocr-alevel', '2.2', [
      { n: 1, f: 'Systematic vs random error: effect, example and how to reduce', b: 'Systematic: same offset in every reading (zero error, uncalibrated scale); calibrate or correct; damages accuracy.\nRandom: scatter about the true value (hand timing); repeat and average; damages precision.', src: UNITS },
      { n: 2, f: 'Combining uncertainties', b: 'a + b or a − b: add absolute uncertainties.\na × b or a ÷ b: add percentage uncertainties.\naⁿ: n × the percentage uncertainty.', src: UNITS },
      { n: 3, f: 'v = √(2gh) and h has a 3.0% uncertainty. What is the percentage uncertainty in v from h?', b: 'The power is ½, so 0.5 × 3.0% = 1.5%.' },
      { n: 4, f: 'Two readings 120.0 cm and 45.0 cm, each ±0.5 cm. Uncertainty in the difference?', b: '75.0 cm ± 1.0 cm (absolute uncertainties add), which is about 1.3%.' },
      { n: 5, f: 'Uncertainty in a gradient using worst lines', b: 'Draw the steepest and shallowest lines through all the error bars. Uncertainty = (steepest − shallowest) ÷ 2. Percentage uncertainty = that ÷ best gradient × 100.' },
      { n: 6, f: 'Common estimates of uncertainty for a single reading and for repeats', b: 'Single reading: half the smallest scale division.\nRepeated readings: half the range.\nQuote it to 1 significant figure (occasionally 2) and match the decimal places of the value.' },
    ]),
    ...sub(M2, 'nature-of-quantities-ocr-alevel', '2.3', [
      { n: 1, f: 'Scalar vs vector, with examples', b: 'Scalar: magnitude only, e.g. distance, speed, mass, energy, temperature.\nVector: magnitude and direction, e.g. displacement, velocity, acceleration, force, momentum.' },
      { n: 2, f: 'Forces of 24 N and 10 N act at right angles. Find the resultant.', b: '√(24² + 10²) = 26 N, at tan⁻¹(10/24) = 22.6° to the 24 N force.' },
      { n: 3, f: 'Resolving a force F at angle θ to an axis', b: 'Along the axis: F cos θ. Perpendicular to it: F sin θ. Cos goes with the axis the angle is measured from.' },
      { n: 4, f: 'Weight components of a 5.0 kg block on a 20° slope (g = 9.81 N kg⁻¹)', b: 'Weight = 49.05 N.\nAlong the slope: 49.05 sin 20° = 16.8 N.\nPerpendicular to the slope: 49.05 cos 20° = 46.1 N.' },
      { n: 5, f: 'How do you add two vectors that are not at right angles?', b: 'Draw them tip to tail; the resultant joins the start to the finish. Use a scale drawing (stating the scale), or the cosine and sine rules, or resolve both into perpendicular components first.' },
    ]),

    // Module 3 Forces and motion
    ...sub(M3, 'motion-ocr-alevel', '3.1', [
      { n: 1, f: 'Displacement, velocity and acceleration', b: 'Displacement: straight-line distance from the start in a stated direction.\nVelocity: rate of change of displacement.\nAcceleration: rate of change of velocity, a = Δv/Δt.\nAll are vectors.' },
      { n: 2, f: 'What do the gradient and area give on s–t, v–t and a–t graphs?', b: 's–t gradient: velocity.\nv–t gradient: acceleration; area: displacement.\na–t area: change in velocity.' },
      { n: 3, f: 'The four constant-acceleration equations', b: 'v = u + at\ns = ½(u + v)t\ns = ut + ½at²\nv² = u² + 2as\nOnly for constant acceleration in a straight line.' },
      { n: 4, f: 'A train slows from 30 m s⁻¹ to 12 m s⁻¹ in 360 m. Find its acceleration.', b: 'v² = u² + 2as: a = (12² − 30²) ÷ (2 × 360) = −756 ÷ 720 = −1.05 m s⁻².' },
      { n: 5, f: 'Measuring g with an electromagnet and trapdoor', b: 'h = ½gt², so plot h against t²: gradient = g/2 and g = 2 × gradient. A late release from residual magnetism is a possible systematic error.' },
      { n: 6, f: 'Thinking distance vs braking distance', b: 'Thinking distance = speed × reaction time, so ∝ speed.\nBraking distance = v²/(2a) for constant deceleration, so ∝ speed².\nStopping distance = thinking + braking.' },
      { n: 7, f: 'Projectile: what is constant horizontally and vertically?', b: 'Horizontal velocity is constant (no horizontal force). Vertical acceleration is g downwards. Only the time is shared between the two directions.' },
      { n: 8, f: 'A ball is launched at 20 m s⁻¹ at 30° above level ground. Find its time of flight and range.', b: 'vₓ = 17.3 m s⁻¹, vᵧ = 10.0 m s⁻¹.\nT = 2vᵧ/g = 2 × 10.0 ÷ 9.81 = 2.04 s.\nRange = 17.3 × 2.04 ≈ 35 m.' },
    ]),
    ...sub(M3, 'forces-in-action-ocr-alevel', '3.2', [
      { n: 1, f: 'Define the newton', b: 'The net force that gives a 1 kg mass an acceleration of 1 m s⁻². 1 N = 1 kg m s⁻².', src: DYN },
      { n: 2, f: 'Direction of the normal contact force, friction and upthrust', b: 'Normal contact force: perpendicular to the surface (not vertical on a slope).\nFriction: parallel to the surface, against the relative motion.\nUpthrust: upwards, from the fluid.' },
      { n: 3, f: 'Explain how a falling object reaches terminal velocity in air', b: 'Weight acts down, drag up. As speed increases, drag increases, so the net force and the acceleration decrease. When drag equals weight the net force is zero and the velocity is constant.' },
      { n: 4, f: 'Condition for terminal velocity in a liquid', b: 'Weight = drag + upthrust.' },
      { n: 5, f: 'Moment of a force, and torque of a couple', b: 'Moment = force × perpendicular distance from the pivot to the line of action of the force.\nCouple: two equal, opposite, parallel forces; torque = one force × perpendicular separation of the lines.', src: MOM },
      { n: 6, f: 'The two conditions for equilibrium', b: 'Resultant force zero and resultant moment zero (about any point).', src: MOM },
      { n: 7, f: 'Three coplanar forces in equilibrium', b: 'Their lines of action meet at a point, and the force vectors form a closed triangle when drawn head to tail.' },
      { n: 8, f: 'Finding the centre of gravity of an irregular lamina', b: 'Hang it freely from a pin through one hole, hang a plumb line from the same pin and draw the vertical. Repeat from a second hole. The centre of gravity is where the lines cross; a third hole is a check.' },
      { n: 9, f: 'Pressure, and pressure due to a liquid', b: 'Pressure = normal force per unit area, p = F/A (Pa).\nIn a liquid, p = hρg with h the vertical depth; add atmospheric pressure for the total.' },
      { n: 10, f: 'Archimedes\' principle', b: 'The upthrust on an object in a fluid equals the weight of fluid it displaces: U = ρgV.', src: MOM },
      { n: 11, f: 'Ice (density 920 kg m⁻³) floats in sea water (1030 kg m⁻³). What fraction is submerged?', b: 'Floating: upthrust = weight, so V_displaced/V = ρ_object/ρ_fluid = 920/1030 = 0.89, about 89%.' },
    ]),
    ...sub(M3, 'work-energy-and-power-ocr-alevel', '3.3', [
      { n: 1, f: 'Define the joule', b: 'The work done when a force of 1 N moves its point of application 1 m along the line of the force.', src: WEP },
      { n: 2, f: 'Work done by a force at an angle', b: 'W = Fx cos θ, where θ is the angle between the force and the displacement. At 90° no work is done.' },
      { n: 3, f: 'Derive Ek = ½mv²', b: 'From rest under force F: v² = 2ax, so x = v²/2a. W = Fx = ma × v²/2a = ½mv², and the work done equals the kinetic energy gained.' },
      { n: 4, f: 'Derive P = Fv', b: 'P = W/t = Fx/t, and at constant speed x/t = v, so P = Fv.' },
      { n: 5, f: 'A ball falls 3.0 m from rest with no air resistance. Find its speed. Does mass matter?', b: 'mgh = ½mv², so v = √(2gh) = √(2 × 9.81 × 3.0) = 7.7 m s⁻¹. The mass cancels, so no.' },
      { n: 6, f: 'Efficiency, and two machines of 70% and 50% in series', b: 'Efficiency = useful output energy ÷ total input energy × 100% (never more than 100%).\nIn series: 0.70 × 0.50 = 0.35, so 35%.' },
      { n: 7, f: 'Principle of conservation of energy', b: 'The total energy of an isolated system is constant: energy is only transferred between forms. Energy against resistive forces is dissipated as thermal energy, not destroyed.', src: WEP },
    ]),
    ...sub(M3, 'materials-ocr-alevel', '3.4', [
      { n: 1, f: 'Hooke\'s law and the force constant', b: 'Below the limit of proportionality, F = kx: extension is proportional to force.\nk is force per unit extension (N m⁻¹).', src: SPR },
      { n: 2, f: 'Elastic vs plastic deformation', b: 'Elastic: returns to its original size and shape when the force is removed.\nPlastic: a permanent change in size or shape remains.', src: SPR },
      { n: 3, f: 'Limit of proportionality vs elastic limit', b: 'Limit of proportionality: where the force–extension graph stops being a straight line through the origin.\nElastic limit: beyond it, the object no longer returns to its original size.' },
      { n: 4, f: 'Tensile stress, tensile strain and ultimate tensile strength', b: 'Stress σ = F/A (Pa). Strain ε = x/L (no unit).\nUTS: the maximum tensile stress a material can withstand before breaking.', src: SPR },
      { n: 5, f: 'Young modulus', b: 'E = stress/strain = FL/(Ax), within the limit of proportionality. It is the gradient of the straight part of the stress–strain graph.', src: SPR },
      { n: 6, f: 'Energy stored in a stretched spring', b: 'Area under the force–extension graph. For a straight line through the origin: E = ½Fx = ½kx².' },
      { n: 7, f: 'Young modulus practical: extension is plotted against force. How is E found?', b: 'The gradient is L/(EA), so E = L ÷ (A × gradient), with A = πd²/4 from the mean micrometer diameter. The diameter dominates the uncertainty: 2% in d gives 4% in A.' },
      { n: 8, f: 'Stress–strain behaviour: ductile, brittle and rubber', b: 'Ductile (copper): straight, then large plastic deformation before breaking.\nBrittle (glass): straight almost to the end, then sudden fracture.\nRubber: curved; loading and unloading curves differ; the loop is energy dissipated as heat.' },
      { n: 9, f: 'Stiffness k vs Young modulus E', b: 'k depends on the sample\'s size; E depends only on the material. k = EA/L.' },
    ]),
    ...sub(M3, 'newtons-laws-of-motion-and-momentum', '3.5', [
      { n: 1, f: 'Newton\'s three laws of motion', b: '1. With no resultant force, a body\'s velocity does not change.\n2. Resultant force = rate of change of momentum, in the direction of the change.\n3. Forces between two bodies are equal, opposite and of the same type, acting on different bodies.', src: NEWT },
      { n: 2, f: 'Why is F = ma a special case of Newton\'s second law?', b: 'F = Δp/Δt. Only for constant mass does Δp = mΔv, giving F = ma. If the mass changes, only F = Δp/Δt works.' },
      { n: 3, f: 'Impulse', b: 'Force × time for which it acts, FΔt. It equals the change in momentum and the area under a force–time graph. Unit N s.', src: NEWT },
      { n: 4, f: 'Principle of conservation of momentum', b: 'The total momentum of a system is constant provided no resultant external force acts on it.', src: NEWT },
      { n: 5, f: 'Perfectly elastic vs inelastic collision', b: 'Perfectly elastic: total kinetic energy unchanged.\nInelastic: total kinetic energy decreases.\nMomentum is conserved in both (closed system), and total energy is always conserved.', src: NEWT },
      { n: 6, f: 'A 12 000 kg truck at 1.5 m s⁻¹ couples with a stationary 8000 kg truck. Common speed?', b: '(12 000 × 1.5) ÷ 20 000 = 0.90 m s⁻¹. Kinetic energy falls from 13 500 J to 8100 J, so the collision is inelastic.' },
      { n: 7, f: 'Why are the weight of a book and the push of the table not a Newton\'s third law pair?', b: 'They act on the same body and are different types of force. The partner of the book\'s weight is the book\'s gravitational pull on the Earth.' },
      { n: 8, f: 'How do air bags and crumple zones reduce injury?', b: 'They lengthen the stopping time. The change in momentum is the same, so the average force (Δp/Δt) is smaller.' },
    ]),

    // Module 4 Electrons, waves and photons
    ...sub(M4, 'charge-and-current-ocr-alevel', '4.1', [
      { n: 1, f: 'Electric current, and the coulomb', b: 'Current: rate of flow of charge, I = ΔQ/Δt.\n1 C is the charge delivered by a steady current of 1 A in 1 s.', src: CHG },
      { n: 2, f: 'What does it mean that charge is quantised?', b: 'The net charge on any object or particle is ne, where n is a whole number and e = 1.6 × 10⁻¹⁹ C.' },
      { n: 3, f: 'Conventional current vs electron flow', b: 'Conventional current leaves the source at its positive terminal. Electrons drift the opposite way, from negative towards positive.' },
      { n: 4, f: 'Kirchhoff\'s first law', b: 'The total current into a junction equals the total current out. It follows from conservation of charge.' },
      { n: 5, f: 'Drift velocity equation, and why drift velocity in a metal is tiny', b: 'I = Anev, where n is the number density of charge carriers. In a metal n is very large, so v is small, of the order of a fraction of a millimetre per second.' },
      { n: 6, f: 'Charge carriers in a metal and in an electrolyte', b: 'Metal: electrons. Electrolyte: positive and negative ions, moving in opposite directions, both adding to the current.' },
      { n: 7, f: 'Conductors, semiconductors and insulators in terms of n', b: 'Conductor: very large number density of charge carriers. Semiconductor: much smaller (not zero), rising with temperature. Insulator: almost zero.' },
    ]),
    ...sub(M4, 'energy-power-and-resistance', '4.2', [
      { n: 1, f: 'Potential difference vs e.m.f.', b: 'P.d.: energy transferred per unit charge from electrical to other forms between two points (W = VQ).\nE.m.f.: energy given to each unit of charge by a source, converting other forms to electrical (W = EQ).', src: CHG },
      { n: 2, f: 'Speed of a charged particle accelerated from rest through a p.d. V', b: 'qV = ½mv², so v = √(2qV/m). Use q = e for an electron or proton, 2e for an alpha particle.' },
      { n: 3, f: 'Resistance, and Ohm\'s law', b: 'R = V/I at a given p.d. (1 Ω = 1 V A⁻¹).\nOhm\'s law: current is directly proportional to p.d. at constant temperature (and other physical conditions).', src: RES },
      { n: 4, f: 'I–V characteristics of a filament lamp and a diode', b: 'Lamp: curve that flattens, symmetrical about the origin; the filament heats, ions vibrate more, R rises.\nDiode: negligible current in reverse and below about 0.6–0.7 V forward, then a steep rise.' },
      { n: 5, f: 'Resistivity, and the effect of doubling L and halving d', b: 'R = ρL/A (ρ in Ω m), with A = πd²/4.\nDoubling L doubles R; halving d quarters A, so R × 4. Overall R × 8.' },
      { n: 6, f: 'Effect of temperature on the resistivity of a metal and of a semiconductor', b: 'Metal: increases (ions vibrate more, more collisions; carrier number barely changes).\nSemiconductor (e.g. NTC thermistor): decreases, because many more charge carriers are released.' },
      { n: 7, f: 'The three equations for electrical power', b: 'P = VI = I²R = V²/R. Energy W = VIt = Pt.' },
      { n: 8, f: 'A 3.0 kW heater runs for 2.0 h at 20p per kW h. Find the energy in kW h and J, and the cost.', b: 'Energy = 3.0 × 2.0 = 6.0 kW h = 6.0 × 3.6 × 10⁶ = 2.16 × 10⁷ J. Cost = 6.0 × 20p = £1.20.' },
      { n: 9, f: 'Why use small currents when measuring the resistivity of a wire?', b: 'So the wire does not heat up: a temperature rise would change its resistivity.' },
    ]),
    ...sub(M4, 'electrical-circuits-ocr-alevel', '4.3', [
      { n: 1, f: 'Kirchhoff\'s second law', b: 'Around any closed loop, the sum of the e.m.f.s equals the sum of the p.d.s (ΣIR). It follows from conservation of energy.' },
      { n: 2, f: 'Total resistance in series and in parallel', b: 'Series: R = R₁ + R₂ + … (larger than any one).\nParallel: 1/R = 1/R₁ + 1/R₂ + … (smaller than the smallest). Take the reciprocal at the end.' },
      { n: 3, f: 'Internal resistance, terminal p.d. and lost volts', b: 'E = I(R + r) = V + Ir. Terminal p.d. V = E − Ir. Lost volts = Ir, which grows with current. With no current, V = E. Short-circuit current = E/r.' },
      { n: 4, f: 'Graph of terminal p.d. V against current I for a cell', b: 'Vertical intercept = E. Gradient = −r. Horizontal intercept = E/r (the short-circuit current).' },
      { n: 5, f: 'Potential divider output', b: 'V_out = R₂/(R₁ + R₂) × V_in, where R₂ is the component the output is across. Also V₁/V₂ = R₁/R₂.' },
      { n: 6, f: 'Thermistor potential divider: where should V_out be taken to rise with temperature?', b: 'Across the fixed resistor. The NTC thermistor\'s resistance falls as it warms, so the fixed resistor takes a larger share of the p.d.' },
      { n: 7, f: 'Effect of connecting a load across the output of a potential divider', b: 'The load is in parallel with R₂, so the effective resistance of that part falls and V_out falls.' },
      { n: 8, f: 'Potentiometer as a potential divider', b: 'A uniform resistive track across a supply with a sliding contact. V_out is proportional to the length from the end: V_out = (l/L) × V_in.' },
    ]),
    ...sub(M4, 'waves-ocr-alevel', '4.4', [
      { n: 1, f: 'Transverse vs longitudinal waves', b: 'Transverse: oscillations perpendicular to the direction of energy transfer.\nLongitudinal: oscillations along it, with compressions and rarefactions.', src: WAVE },
      { n: 2, f: 'Phase difference between two points a distance x apart on a wave', b: 'Phase difference = 2πx/λ radians (360x/λ degrees). In phase: 0 or whole cycles. Antiphase: half a cycle (π rad).' },
      { n: 3, f: 'Intensity of a wave, and how it depends on distance and amplitude', b: 'Intensity = power per unit area, I = P/A. For an isotropic point source I = P/(4πr²), so doubling r gives ¼. I ∝ amplitude².' },
      { n: 4, f: 'When is diffraction significant?', b: 'When the wavelength is comparable to the gap width. A gap much larger than λ gives little spreading.' },
      { n: 5, f: 'What does polarisation show?', b: 'Only transverse waves can be polarised, so a wave that can be polarised is transverse. Sound cannot be polarised.' },
      { n: 6, f: 'EM spectrum in order of increasing frequency, and properties shared by all EM waves', b: 'Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma.\nAll are transverse, travel through a vacuum at 3.00 × 10⁸ m s⁻¹, and can be reflected, refracted, diffracted, polarised and interfere.' },
      { n: 7, f: 'Refractive index and Snell\'s law', b: 'n = c/v.\nn₁ sin i₁ = n₂ sin i₂ (angles from the normal). Frequency is unchanged; speed and wavelength change.' },
      { n: 8, f: 'Critical angle, and the conditions for total internal reflection', b: 'Critical angle: the angle of incidence in the denser medium for which the angle of refraction is 90°. sin C = 1/n (into air).\nTIR needs light going from higher to lower n, at an angle of incidence greater than C.' },
      { n: 9, f: 'Principle of superposition', b: 'Where waves overlap, the resultant displacement is the sum of the displacements each wave would give alone.', src: SUP },
      { n: 10, f: 'Coherent sources, and the path difference for constructive and destructive interference', b: 'Coherent: a constant phase difference (so the same frequency).\nFor sources in phase: constructive when path difference = nλ; destructive when (n + ½)λ.' },
      { n: 11, f: 'Young\'s double-slit equation, and the effect of halving a and doubling D', b: 'λ = ax/D (a slit separation, x fringe spacing, D slit–screen distance; needs a ≪ D). x = λD/a, so halving a and doubling D multiplies x by 4.' },
      { n: 12, f: 'Diffraction grating: 600 lines per mm, λ = 650 nm. Find the first-order angle.', b: 'd = 1/(6.00 × 10⁵) = 1.667 × 10⁻⁶ m.\nsin θ = λ/d = 650 × 10⁻⁹ ÷ 1.667 × 10⁻⁶ = 0.39, so θ = 23.0°.' },
      { n: 13, f: 'Stationary wave: how it forms, and node spacing', b: 'Two progressive waves of the same frequency travelling in opposite directions superpose. Nodes (always antiphase) and antinodes (always in phase) alternate; adjacent nodes are λ/2 apart, node to antinode λ/4.', src: STAT },
      { n: 14, f: 'Harmonics of a tube closed at one end', b: 'Node at the closed end, antinode at the open end. L = λ/4 for the fundamental; only odd harmonics: f = (2n − 1)v/4L.' },
      { n: 15, f: 'Resonance tube: why use λ = 2(L₂ − L₁)?', b: 'The antinode is slightly above the tube mouth. The same end correction appears in both resonance lengths, so it cancels in the difference.' },
    ]),
    ...sub(M4, 'quantum-physics-ocr-alevel', '4.5', [
      { n: 1, f: 'Photon', b: 'A quantum (packet) of electromagnetic energy, with energy E = hf = hc/λ.', src: PHOT },
      { n: 2, f: 'Electronvolt', b: 'The energy an electron gains when accelerated across 1 V: 1 eV = 1.60 × 10⁻¹⁹ J.', src: PHOT },
      { n: 3, f: 'Work function and threshold frequency', b: 'Work function φ: the minimum energy needed to remove an electron from the surface of the metal.\nThreshold frequency f₀: the minimum frequency causing emission; hf₀ = φ.', src: PHOT },
      { n: 4, f: 'Einstein\'s photoelectric equation', b: 'hf = φ + KEmax. One photon gives all its energy to one electron.' },
      { n: 5, f: 'Graph of KEmax against frequency', b: 'A straight line KEmax = hf − φ. Gradient = h; frequency-axis intercept = f₀; KEmax-axis intercept = −φ.' },
      { n: 6, f: 'Photoelectric effect: what does increasing the intensity change?', b: 'Above f₀, the emission rate (photoelectric current) is proportional to intensity. KEmax does not change: it depends only on frequency. Below f₀ there is no emission at any intensity.' },
      { n: 7, f: 'Estimating h with LEDs', b: 'Find the p.d. V at which each LED just lights; eV = hc/λ. Plot V against 1/λ: gradient = hc/e, so h = gradient × e/c.' },
      { n: 8, f: 'Evidence for wave-particle duality', b: 'Photoelectric effect: the particle nature of EM radiation.\nElectron diffraction through polycrystalline graphite (rings): the wave nature of particles.' },
      { n: 9, f: 'de Broglie wavelength, and the effect of a higher accelerating voltage on electron diffraction rings', b: 'λ = h/p = h/mv. Higher voltage → faster electrons → smaller λ → rings of smaller radius.' },
    ]),

    // Module 5 Newtonian world and astrophysics
    ...sub(M5, 'thermal-physics-ocr-alevel', '5.1', [
      { n: 1, f: 'Thermal equilibrium', b: 'No net energy transfer between objects in thermal contact; they are at the same temperature.', src: TEMP },
      { n: 2, f: 'Absolute zero, and converting °C to K', b: 'The lowest limit of temperature, 0 K, where a substance has minimum internal energy.\nT (K) ≈ θ (°C) + 273; a temperature change is the same in K and °C.' },
      { n: 3, f: 'Internal energy', b: 'The total of the randomly distributed kinetic and potential energies of the molecules in a system.', src: TEMP },
      { n: 4, f: 'Specific heat capacity and specific latent heat', b: 'c: energy to raise the temperature of 1 kg by 1 K, E = mcΔθ.\nl: energy to change the phase of 1 kg at constant temperature, E = ml (fusion: solid to liquid; vaporisation: liquid to gas).' },
      { n: 5, f: 'During melting, what happens to temperature, internal energy and molecular energies?', b: 'Temperature is constant; internal energy rises; the potential energy of the molecules rises as they separate, while their mean kinetic energy stays the same.' },
      { n: 6, f: 'Brownian motion: what is seen and what it shows', b: 'Smoke particles move in random zig-zags, from unbalanced impacts of fast-moving air molecules. It shows molecules are in continuous random motion.' },
      { n: 7, f: 'Kinetic theory assumptions', b: 'Large number of molecules in rapid random motion; negligible volume compared with the gas; perfectly elastic collisions of negligible duration; negligible forces between molecules except during collisions.' },
      { n: 8, f: 'Ideal gas equations', b: 'pV = nRT = NkT (T in kelvin), with k = R/N_A.\npV = ⅓Nm⟨c²⟩.' },
      { n: 9, f: 'Mean kinetic energy of a molecule, and internal energy of an ideal gas', b: '½m⟨c²⟩ = (3/2)kT.\nU = (3/2)NkT = (3/2)nRT: only kinetic energy, since there are no intermolecular forces.' },
      { n: 10, f: 'How does c_rms depend on temperature? What happens if T in kelvin is quadrupled?', b: 'c_rms ∝ √(T/m). Quadrupling T doubles c_rms.' },
      { n: 11, f: 'Effect of a higher temperature on the Maxwell–Boltzmann distribution', b: 'The peak moves to a higher speed and becomes lower and broader; more molecules have high speeds. The area (number of molecules) is unchanged.' },
    ]),
    ...sub(M5, 'circular-motion-ocr-alevel', '5.2', [
      { n: 1, f: 'The radian', b: 'The angle at the centre of a circle subtended by an arc equal in length to the radius. 2π rad = 360°.' },
      { n: 2, f: 'Angular velocity and speed in a circle', b: 'ω = Δθ/Δt = 2π/T = 2πf (rad s⁻¹).\nv = ωr.' },
      { n: 3, f: 'Centripetal acceleration and force', b: 'a = v²/r = ω²r, towards the centre.\nF = mv²/r = mω²r, supplied by a real force (tension, friction, gravity, magnetic force…).' },
      { n: 4, f: 'Why does an object in uniform circular motion keep a constant speed?', b: 'The net force is perpendicular to the velocity, so it has no component along the motion, does no work, and cannot change the kinetic energy.' },
      { n: 5, f: 'A 0.90 kg mass moves in a circle of radius 0.35 m at 2.0 Hz. Find the centripetal force.', b: 'ω = 2π × 2.0 = 12.57 rad s⁻¹.\nF = mω²r = 0.90 × 12.57² × 0.35 ≈ 50 N.' },
      { n: 6, f: 'In F = mv²/r, what happens to F if v doubles, or r doubles (v fixed)?', b: 'v doubles: F × 4.\nr doubles at fixed v: F halves.' },
    ]),
    ...sub(M5, 'oscillations-ocr-alevel', '5.3', [
      { n: 1, f: 'Simple harmonic motion', b: 'Acceleration is proportional to displacement and always directed towards the equilibrium position: a = −ω²x.', src: SHM },
      { n: 2, f: 'SHM equations for displacement and speed', b: 'x = A cos ωt (timing from maximum displacement) or x = A sin ωt (from equilibrium).\nv = ±ω√(A² − x²); vmax = ωA; amax = ω²A.' },
      { n: 3, f: 'Isochronous oscillator', b: 'One whose period is independent of its amplitude.', src: SHM },
      { n: 4, f: 'Phase of velocity and acceleration relative to displacement in SHM', b: 'Velocity leads displacement by π/2. Acceleration is in antiphase (π) with displacement.' },
      { n: 5, f: 'Energy in SHM', b: 'Total E = ½mω²A². Ek is maximum at x = 0, Ep is maximum at x = ±A. Ek and Ep each vary at twice the oscillation frequency.' },
      { n: 6, f: 'k = 36 N m⁻¹, m = 0.25 kg. Find the period.', b: 'ω² = k/m = 144 s⁻², so ω = 12 rad s⁻¹ and T = 2π/12 = 0.52 s.' },
      { n: 7, f: 'Light, critical and heavy damping', b: 'Light: oscillates, amplitude decays steadily. Critical: settles at equilibrium in the least time with no oscillation (car suspension). Heavy: no oscillation, very slow return.' },
      { n: 8, f: 'Resonance, and the effect of damping on the resonance curve', b: 'Maximum amplitude when the driving frequency equals the natural frequency. More damping gives a lower, broader peak at a slightly lower frequency.' },
    ]),
    ...sub(M5, 'gravitational-fields-ocr-alevel', '5.4', [
      { n: 1, f: 'Gravitational field strength', b: 'The force per unit mass on a small test mass, g = F/m, in N kg⁻¹. A vector, pointing towards the source.', src: GFLD },
      { n: 2, f: 'Newton\'s law of gravitation and g in a radial field', b: 'F = GMm/r² (attractive).\ng = GM/r², with r measured from the centre of the body, not the surface.' },
      { n: 3, f: 'Kepler\'s three laws', b: '1. Orbits are ellipses with the Sun at one focus.\n2. The line from the Sun to a planet sweeps equal areas in equal times.\n3. T² ∝ r³.' },
      { n: 4, f: 'Derive T² = (4π²/GM)r³', b: 'Gravity provides the centripetal force: GMm/r² = mv²/r, so v² = GM/r. Substitute v = 2πr/T: 4π²r²/T² = GM/r, giving T² = (4π²/GM)r³.' },
      { n: 5, f: 'Geostationary orbit: conditions and radius', b: 'Above the equator, moving west to east, circular, period 24 h, so it stays above one point. For the Earth r ≈ 4.22 × 10⁷ m.' },
      { n: 6, f: 'Gravitational potential', b: 'The work done per unit mass in bringing a small mass from infinity to the point. Vg = −GM/r (J kg⁻¹). Zero at infinity, negative everywhere else.', src: GPOT },
      { n: 7, f: 'Gravitational potential energy of a mass m at distance r', b: 'E = mVg = −GMm/r. Work done moving between two points = mΔVg = area under the force–distance graph.' },
      { n: 8, f: 'Escape velocity: definition and equation', b: 'The minimum launch speed for an object to just reach infinity with no further propulsion. ½mv² − GMm/r = 0, so v = √(2GM/r) = √(2gR) at the surface.' },
      { n: 9, f: 'g vs G', b: 'g is the field strength at a place; it varies with r. G is the universal gravitational constant.' },
    ]),
    ...sub(M5, 'astrophysics-and-cosmology-ocr-alevel', '5.5', [
      { n: 1, f: 'How does a star form?', b: 'A cloud of dust and gas collapses under gravity; gravitational potential energy becomes thermal energy, forming a protostar. When the core is hot enough, hydrogen fuses into helium and the star is on the main sequence.' },
      { n: 2, f: 'What keeps a main sequence star stable?', b: 'Gravity inwards is balanced by gas pressure plus radiation pressure outwards.' },
      { n: 3, f: 'Evolution of a low-mass star', b: 'Main sequence → red giant → planetary nebula (outer layers ejected) → white dwarf.' },
      { n: 4, f: 'Electron degeneracy pressure', b: 'Electrons cannot share quantum states (Pauli exclusion principle), so compressing them forces them into higher energy states. This gives an outward pressure that does not depend on temperature.', src: STARS },
      { n: 5, f: 'Chandrasekhar limit', b: 'The maximum mass of a stable white dwarf, about 1.4 solar masses.', src: STARS },
      { n: 6, f: 'Evolution of a massive star', b: 'Main sequence → red supergiant (fusing heavier nuclei up to iron) → core collapse and supernova → neutron star, or a black hole if the remnant core is massive enough.' },
      { n: 7, f: 'HR diagram: axes and regions', b: 'Luminosity up the vertical axis; surface temperature along the horizontal, decreasing left to right. Main sequence: diagonal band. Red giants and supergiants: upper right. White dwarfs: bottom left.' },
      { n: 8, f: 'Why are atomic energy levels negative?', b: 'Zero is the energy of a free electron at rest; a bound electron has less energy than that. Ionisation from a level needs energy equal to its magnitude.' },
      { n: 9, f: 'Emission line vs absorption line spectrum', b: 'Emission: bright lines on dark, from hot low-pressure gas.\nAbsorption: dark lines on a continuous spectrum, from light passing through cooler gas.\nAn element\'s lines are at the same wavelengths in both.' },
      { n: 10, f: 'Wien\'s law and Stefan\'s law', b: 'Wien: λmax T = 2.90 × 10⁻³ m K.\nStefan: L = 4πr²σT⁴. Use Wien for T, then Stefan for r.' },
      { n: 11, f: 'Astronomical unit, light-year and parsec', b: 'AU: mean Earth–Sun distance, 1.50 × 10¹¹ m.\nLight-year: distance light travels in a vacuum in one year, 9.46 × 10¹⁵ m.\nParsec: distance at which a star has a parallax of 1 second of arc, 3.09 × 10¹⁶ m.' },
      { n: 12, f: 'A star has a parallax angle of 0.20 seconds of arc. How far away is it?', b: 'd = 1/p = 1/0.20 = 5.0 pc (about 16 ly).' },
      { n: 13, f: 'Cosmological principle', b: 'On a large scale the universe is homogeneous, isotropic, and the laws of physics are the same everywhere.' },
      { n: 14, f: 'Doppler red shift and Hubble\'s law', b: 'Δλ/λ ≈ Δf/f ≈ v/c (v ≪ c); a receding source is red shifted.\nHubble: v ≈ H₀d, so recession speed is proportional to distance.' },
      { n: 15, f: 'Two pieces of evidence for the Big Bang', b: 'Galactic red shift and Hubble\'s law (expansion). The cosmic microwave background, observed from all directions at about 2.7 K.' },
      { n: 16, f: 'Estimate the age of the universe from H₀ = 70 km s⁻¹ Mpc⁻¹', b: 'H₀ = 70 ÷ 3.09 × 10¹⁹ = 2.27 × 10⁻¹⁸ s⁻¹.\nt ≈ 1/H₀ = 4.4 × 10¹⁷ s ≈ 1.4 × 10¹⁰ years.' },
    ]),

    // Module 6 Particles and medical physics
    ...sub(M6, 'capacitors-ocr-alevel', '6.1', [
      { n: 1, f: 'Capacitance', b: 'C = Q/V, the charge stored per unit p.d. (Q is the charge on one plate). 1 F = 1 C V⁻¹.' },
      { n: 2, f: 'Capacitors in series vs in parallel', b: 'Series: same charge on each, p.d.s add, 1/C = 1/C₁ + 1/C₂ + … (below the smallest).\nParallel: same p.d., charges add, C = C₁ + C₂ + … (above the largest).' },
      { n: 3, f: 'Energy stored by a capacitor', b: 'The area under the p.d.–charge graph: W = ½QV = ½Q²/C = ½V²C.' },
      { n: 4, f: 'A battery charges a capacitor to its e.m.f. V. How much energy does it supply, and how much is stored?', b: 'Supplied: QV. Stored: ½QV. The other half is transferred as thermal energy in the circuit.' },
      { n: 5, f: 'Why is a capacitor useful as an energy store (flash, defibrillator)?', b: 'It stores far less energy than a battery of the same mass, but can release it very quickly.' },
      { n: 6, f: 'Time constant and the discharge equation', b: 'τ = CR (seconds).\nQ, V and I all decay as x = x₀e^(−t/CR).' },
      { n: 7, f: 'Fraction left after 1 CR, 2 CR and 3 CR of discharge', b: '1 CR: 36.8%. 2 CR: 13.5%. 3 CR: 5.0%.\n(When charging, Q and V reach 63.2%, 86.5% and 95.0%.)' },
      { n: 8, f: 'Graph of ln V against t for a discharging capacitor', b: 'A straight line: ln V = ln V₀ − t/CR. Gradient = −1/CR; intercept = ln V₀.' },
      { n: 9, f: 'Half-time of a capacitor discharge', b: 't½ = CR ln 2 = 0.693 CR, the same wherever you start on the curve.' },
      { n: 10, f: 'Charging through a resistor: how do V_C and the current change?', b: 'V_C and Q rise from zero as V₀(1 − e^(−t/CR)). The current starts at V₀/R and decays as I₀e^(−t/CR).' },
      { n: 11, f: 'Iterative model of a discharge', b: 'Choose Δt much smaller than CR. ΔQ = −(Q/CR)Δt, then Q_new = Q_old + ΔQ, repeated. A smaller Δt brings the model closer to the exact curve.' },
    ]),
    ...sub(M6, 'electric-fields-ocr-alevel', '6.2', [
      { n: 1, f: 'Electric field strength', b: 'Force per unit positive charge, E = F/q, in N C⁻¹ (= V m⁻¹). A vector, in the direction of the force on a positive charge.', src: EFLD },
      { n: 2, f: 'Coulomb\'s law and the field of a point charge', b: 'F = Qq/(4πε₀r²).\nE = Q/(4πε₀r²).\nA uniformly charged sphere acts, outside, as if its charge were at its centre.' },
      { n: 3, f: 'Uniform field between parallel plates', b: 'E = V/d: parallel, evenly spaced field lines; the same field strength everywhere in the gap.' },
      { n: 4, f: 'Capacitance of parallel plates and the role of permittivity', b: 'C = εA/d with ε = εᵣε₀ (C = ε₀A/d in a vacuum or air). The relative permittivity εᵣ is at least 1.' },
      { n: 5, f: 'Electric potential at a point', b: 'The work done in bringing unit positive charge from infinity to that point. V = Q/(4πε₀r). Zero at infinity; a scalar.', src: EFLD },
      { n: 6, f: 'Capacitance of an isolated sphere, and electric potential energy of two charges', b: 'Sphere: C = 4πε₀R.\nPotential energy: Ep = Vq = Qq/(4πε₀r).' },
      { n: 7, f: 'Gravitational vs electric fields: similarities and differences', b: 'Both inverse-square, radial for a point source, potential zero at infinity.\nGravity is always attractive (force per unit mass); electric forces can attract or repel (force per unit charge).' },
      { n: 8, f: 'Charged particle entering a uniform field at right angles', b: 'Horizontal speed constant; constant acceleration a = qE/m across the field; sideways displacement y = ½at² with t = plate length ÷ speed. The path is a parabola.' },
    ]),
    ...sub(M6, 'electromagnetism-ocr-alevel', '6.3', [
      { n: 1, f: 'Magnetic field patterns of a long straight wire and a long solenoid', b: 'Wire: concentric circles in planes perpendicular to the wire, weaker with distance (right-hand grip rule).\nSolenoid: uniform parallel lines inside; bar-magnet pattern outside.' },
      { n: 2, f: 'Fleming\'s left-hand rule', b: 'Thumb: force (motion). First finger: field (north to south). Second finger: conventional current. All at right angles.' },
      { n: 3, f: 'Force on a current-carrying wire, and the tesla', b: 'F = BIL sin θ, θ between wire and field.\n1 T: a 1 m conductor carrying 1 A at right angles to the field feels a force of 1 N.' },
      { n: 4, f: 'Measuring B with a current balance', b: 'Magnets on a digital balance, wire through the field. Force on the wire F = Δm g. Plot Δm against I: gradient = BL/g, so B = gradient × g/L (gradient in kg A⁻¹).' },
      { n: 5, f: 'Charged particle moving at right angles to a magnetic field', b: 'F = BQv, perpendicular to the velocity, so no work is done and speed is constant. Circular path: r = mv/(BQ); period T = 2πm/(BQ), independent of speed.' },
      { n: 6, f: 'Velocity selector', b: 'Electric and magnetic fields at right angles, with opposing forces. Particles are undeflected when QE = BQv, so v = E/B, independent of charge and mass.' },
      { n: 7, f: 'Magnetic flux and the weber', b: 'Φ = BA cos θ, θ between B and the normal to the area. 1 Wb is the flux through 1 m² perpendicular to a uniform field of 1 T.', src: EMI },
      { n: 8, f: 'Faraday\'s law and Lenz\'s law', b: 'Faraday: induced e.m.f. is directly proportional to the rate of change of magnetic flux linkage, E = −Δ(NΦ)/Δt.\nLenz: the induced e.m.f. acts to oppose the change that causes it.', src: EMI },
      { n: 9, f: 'How does Lenz\'s law follow from conservation of energy?', b: 'Pushing a magnet into a coil needs a force because the induced current opposes the motion; the work done becomes electrical energy. If the induced effect helped the change, energy would be created from nothing.' },
      { n: 10, f: 'a.c. generator: e.m.f. equation and when it is greatest', b: 'E = NBAω sin ωt; peak E₀ = NBAω. The e.m.f. is greatest when the coil is parallel to the field (flux linkage zero) and zero when the coil is perpendicular to it.' },
      { n: 11, f: 'Ideal transformer equations, and why the core is laminated', b: 'Ns/Np = Vs/Vp = Ip/Is (VpIp = VsIs for no losses).\nLamination reduces eddy currents and the energy wasted as heat.' },
      { n: 12, f: 'Why does a transformer need an alternating input?', b: 'A steady current gives a constant flux, so there is no changing flux linkage in the secondary and no induced e.m.f.' },
    ]),
    ...sub(M6, 'nuclear-and-particle-physics-ocr-alevel', '6.4', [
      { n: 1, f: 'Alpha scattering: observations and conclusions', b: 'Most pass straight through: the atom is mostly empty space. A few deflect through large angles: positive charge is concentrated in a small nucleus. Very few rebound: the nucleus is massive.' },
      { n: 2, f: 'Nuclear radius and why nuclear density is constant', b: 'R = r₀A^(1/3), with r₀ ≈ 1.2 fm. Volume ∝ A and mass ∝ A, so density is the same for all nuclei, about 2.3 × 10¹⁷ kg m⁻³.' },
      { n: 3, f: 'Strong nuclear force: range and behaviour', b: 'Repulsive below about 0.5 fm, attractive from about 0.5 fm to 3 fm, negligible beyond a few fm. It beats proton repulsion but stops the nucleus collapsing.' },
      { n: 4, f: 'Hadron vs lepton', b: 'Hadron: feels both the strong and the weak force; made of quarks (proton, neutron).\nLepton: feels the weak force but not the strong force (electron, neutrino).', src: NUCA },
      { n: 5, f: 'Quark charges, and the quark make-up of the proton and neutron', b: 'u +⅔e, d −⅓e, s −⅓e (antiquarks opposite).\nProton uud (+1); neutron udd (0).' },
      { n: 6, f: 'β⁻ and β⁺ decay in terms of quarks', b: 'β⁻: d → u + e⁻ + ν̄ (n → p + e⁻ + ν̄).\nβ⁺: u → d + e⁺ + ν (p → n + e⁺ + ν).\nBoth are weak interactions.' },
      { n: 7, f: 'Radioactive decay is spontaneous and random. What does each word mean?', b: 'Spontaneous: no trigger; unaffected by temperature, pressure or chemical state.\nRandom: you cannot predict which nucleus will decay, or when.' },
      { n: 8, f: 'Activity, decay constant and half-life', b: 'Activity A = λN (Bq). λ: the probability per second that a given nucleus decays. Half-life: time for the number of undecayed nuclei (or the activity) to halve. λt½ = ln 2.', src: DECAY },
      { n: 9, f: 'Exponential decay equations', b: 'N = N₀e^(−λt); A = A₀e^(−λt).\nln N = ln N₀ − λt, so a graph of ln N against t has gradient −λ.' },
      { n: 10, f: 'Carbon dating: the principle and the assumptions', b: 'Living things keep a constant carbon-14 activity per gram of carbon; after death it decays (half-life 5730 years). t = (1/λ) ln(A₀/A). Assumes the past ratio was the same and there is no contamination.' },
      { n: 11, f: 'Mass defect and binding energy', b: 'Mass defect: total mass of the free protons and neutrons minus the mass of the nucleus.\nBinding energy: energy needed to separate the nucleus into free nucleons = mass defect × c².', src: MASS },
      { n: 12, f: 'Why do both fission and fusion release energy?', b: 'Binding energy per nucleon peaks near A = 56 (iron). Fusion of light nuclei and fission of heavy nuclei both produce nuclei with higher binding energy per nucleon.' },
      { n: 13, f: 'Minimum photon energy for electron–positron pair creation, and annihilation at rest', b: 'Pair creation: at least 2 × 0.511 = 1.02 MeV.\nAnnihilation at rest: two photons in opposite directions, each of about 0.511 MeV, so momentum stays zero.' },
      { n: 14, f: 'Roles of the moderator and control rods in a fission reactor', b: 'Moderator (water, graphite): slows fast neutrons so they are likely to cause further fission.\nControl rods (boron, cadmium): absorb neutrons to control the rate; one neutron per fission should cause another.' },
      { n: 15, f: 'Why does fusion need a very high temperature?', b: 'Nuclei repel electrostatically and must get within about 10⁻¹⁵ m for the strong force to act. They need very high kinetic energy, mean (3/2)kT, so the fuel is a plasma at millions of kelvin.' },
    ]),
    ...sub(M6, 'medical-imaging-ocr-alevel', '6.5', [
      { n: 1, f: 'X-ray tube: what do the tube voltage and the heater (tube) current control?', b: 'Voltage: the maximum photon energy and penetration.\nCurrent: the number of electrons, so the beam intensity.\nTarget: tungsten (high atomic number, high melting point); about 1% of the energy becomes X-rays.' },
      { n: 2, f: 'Minimum wavelength from an X-ray tube at 120 kV', b: 'E_max = eV = 1.60 × 10⁻¹⁹ × 120 000 = 1.92 × 10⁻¹⁴ J.\nλ_min = hc/E_max = (6.63 × 10⁻³⁴ × 3.00 × 10⁸) ÷ 1.92 × 10⁻¹⁴ = 1.04 × 10⁻¹¹ m.' },
      { n: 3, f: 'Simple scatter vs Compton scattering', b: 'Simple scatter: the photon changes direction with the same energy; the atom is not ionised (low photon energies).\nCompton: the photon is scattered with reduced energy and an outer electron is ejected.' },
      { n: 4, f: 'Photoelectric effect and pair production as X-ray attenuation mechanisms', b: 'Photoelectric: the photon is absorbed and an inner-shell electron ejected; much more likely at high atomic number, giving bone–tissue contrast.\nPair production: photon of at least 1.02 MeV becomes an electron and a positron near a nucleus.' },
      { n: 5, f: 'Attenuation of X-rays', b: 'I = I₀e^(−μx), μ the attenuation coefficient (m⁻¹). Half-value thickness x½ = ln 2/μ.' },
      { n: 6, f: 'Barium and iodine contrast media', b: 'High atomic number, so strong absorption by the photoelectric effect. Barium sulfate is swallowed to outline the gut; iodine compounds are injected for blood vessels and the urinary tract.' },
      { n: 7, f: 'CAT scan: how it works and its advantages over an X-ray image', b: 'A rotating tube sends a thin fan beam through one slice to a ring of detectors; a computer works out the attenuation of each voxel. No overlapping structures, better soft-tissue contrast, 3D views; but a higher dose and costly.' },
      { n: 8, f: 'Technetium-99m vs fluorine-18 as tracers', b: 'Tc-99m: gamma only (about 140 keV), half-life about 6 h, used with a gamma camera.\nF-18: positron emitter, half-life about 110 minutes, used in fluorodeoxyglucose for PET.' },
      { n: 9, f: 'Gamma camera: the job of each part', b: 'Collimator: lead with parallel holes, passing only photons travelling along them. Scintillator: turns each gamma photon into a flash of light. Photomultiplier tubes: turn light into an electrical pulse. Computer: finds positions and builds the image.' },
      { n: 10, f: 'PET scanning', b: 'A positron annihilates with an electron, giving two 0.511 MeV gamma photons in opposite directions. A ring of detectors records pairs arriving together; each pair defines a line, and the computer finds where many lines cross. No collimator is needed.' },
      { n: 11, f: 'Ultrasound frequency: the trade-off', b: 'Ultrasound is above 20 kHz; scanners use a few MHz. Higher frequency gives a shorter wavelength and more detail, but more absorption, so less depth.' },
      { n: 12, f: 'Acoustic impedance and the reflected fraction at a boundary', b: 'Z = ρc.\nIr/I₀ = (Z₂ − Z₁)²/(Z₂ + Z₁)². A big difference in Z means strong reflection. Gel removes the air gap and has Z close to skin.' },
      { n: 13, f: 'A-scan vs B-scan', b: 'A-scan: echo strength against time along one line; depth d = ct/2.\nB-scan: many A-scans combined into a 2D image; brightness shows echo strength.' },
      { n: 14, f: 'Doppler ultrasound for blood flow', b: 'Δf/f = 2v cos θ/c, θ the angle between the beam and the blood flow. The 2 arises because the blood acts first as a receiver, then as a source. At 90° there is no shift.' },
    ]),
  ],
};
