/**
 * D-438 -- flashcards for AQA A-level Physics 7408 (for first teaching 2015).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 * The course is not tiered, so no card is marked upper tier. Sections 3.9 to
 * 3.13 are the options (a student studies one, for Paper 3 Section B).
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 7408); origin 'revision-notes'.
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

const EST = 'aqa-alevel-physics-estimation-of-physical-quantities-revision-notes';
const MEAS = 'aqa-a-level-physics-measurements-revision-notes';
const PR = 'aqa-a-level-physics-particles-and-radiation-revision-notes';
const WAV = 'aqa-a-level-physics-waves-revision-notes';
const MM = 'aqa-a-level-physics-mechanics-and-materials-revision-notes';
const ELEC = 'aqa-a-level-physics-electricity-revision-notes';
const FMT = 'aqa-a-level-physics-further-mechanics-and-thermal-physics-revision-notes';
const FLD = 'aqa-a-level-physics-fields-and-their-consequences-revision-notes';
const NUC = 'aqa-a-level-physics-nuclear-physics-revision-notes';
const AST = 'aqa-a-level-physics-astrophysics-revision-notes';
const MED = 'aqa-a-level-physics-medical-physics-revision-notes';
const ENG = 'aqa-a-level-physics-engineering-physics-revision-notes';
const TP = 'aqa-a-level-physics-turning-points-in-physics-revision-notes';
const ELN = 'aqa-a-level-physics-electronics-revision-notes';

export const DECK_AQA_A_LEVEL_PHYSICS: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'physics',
  syllabusCode: '7408',
  syllabusSeries: 'For first teaching 2015',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // 3.1 Measurements and their errors
    ...sub('measurements-and-their-errors-aqa-alevel', 'use-of-si-units-and-their-prefixes', '3.1.1', [
      { n: 1, f: 'The six SI base quantities used in the course, with their units', b: 'Mass: kilogram (kg). Length: metre (m). Time: second (s). Amount of substance: mole (mol). Temperature: kelvin (K). Electric current: ampere (A).\nThe candela is excluded from the specification.' },
      { n: 2, f: 'Write the newton, joule, watt and pascal in SI base units', b: 'N = kg m s⁻²\nJ = kg m² s⁻²\nW = kg m² s⁻³\nPa = kg m⁻¹ s⁻²' },
      { n: 3, f: 'Values of the prefixes T, G, M, k', b: 'T (tera) 10¹², G (giga) 10⁹, M (mega) 10⁶, k (kilo) 10³.' },
      { n: 4, f: 'Values of the prefixes c, m, μ, n, p, f', b: 'c (centi) 10⁻², m (milli) 10⁻³, μ (micro) 10⁻⁶, n (nano) 10⁻⁹, p (pico) 10⁻¹², f (femto) 10⁻¹⁵.' },
      { n: 5, f: 'How do you convert between eV and J, and between kW h and J?', b: 'eV → J: multiply by 1.6 × 10⁻¹⁹ (J → eV: divide).\nkW h → J: multiply by 3.6 × 10⁶, since 1 kW h = 1000 W × 3600 s (J → kW h: divide).' },
      { n: 6, f: 'Convert 8.5 cm² into m²', b: '1 cm² = (10⁻² m)² = 10⁻⁴ m², so 8.5 cm² = 8.5 × 10⁻⁴ m². The prefix is raised to the same power as the unit.' },
    ]),
    ...sub('measurements-and-their-errors-aqa-alevel', 'limitation-of-physical-measurements', '3.1.2', [
      { n: 1, f: 'Accurate (measurement)', b: 'Close to the true value.', src: MEAS },
      { n: 2, f: 'Precise (measurements)', b: 'Repeat readings close to each other. A miscalibrated instrument can give precise but inaccurate readings.', src: MEAS },
      { n: 3, f: 'Resolution (of an instrument)', b: 'The smallest change in a quantity an instrument can detect.', src: MEAS },
      { n: 4, f: 'Repeatable vs reproducible', b: 'Repeatable: the same result on repeating with the same method and equipment.\nReproducible: the same result with a different method or by a different person.', src: MEAS },
      { n: 5, f: 'Random vs systematic error: what each does and how to reduce it', b: 'Random: unpredictable scatter about the true value; reduced by repeating and averaging.\nSystematic: every reading offset the same way; repeating does not help, so recalibrate or zero the instrument.' },
      { n: 6, f: 'Combining uncertainties: adding/subtracting, multiplying/dividing, raising to a power n', b: 'Adding or subtracting: add the absolute uncertainties.\nMultiplying or dividing: add the percentage uncertainties.\nRaising to a power n: multiply the percentage uncertainty by n.', src: MEAS },
      { n: 7, f: 'A radius is measured to 2%. What is the percentage uncertainty in a volume proportional to r³?', b: '3 × 2% = 6%.' },
      { n: 8, f: 'How do you find the uncertainty in a gradient from a graph with error bars?', b: 'Draw the steepest and shallowest lines that pass through all the error bars. Uncertainty in gradient = (maximum gradient − minimum gradient) ÷ 2.' },
      { n: 9, f: 'How does a zero error show up on a straight-line graph?', b: 'The gradient is correct but there is an unexpected intercept: a line that should pass through the origin does not.' },
    ]),
    ...sub('measurements-and-their-errors-aqa-alevel', 'estimation-of-physical-quantities', '3.1.3', [
      { n: 1, f: 'Order of magnitude of a × 10ⁿ (1 ≤ a < 10): the rounding convention', b: 'The nearest power of ten by ratio: 10ⁿ if a is below about 3.16 (√10), and 10ⁿ⁺¹ if a is above it.' },
      { n: 2, f: 'Order of magnitude of 2.9 × 10⁴, and of 8 × 10⁵', b: '2.9 × 10⁴ → 10⁴.\n8 × 10⁵ → 10⁶ (8 is above 3.16).' },
      { n: 3, f: 'Steps for a derived estimate', b: 'Split the quantity into parts you can estimate, state each assumption, convert to SI units, combine using the physics, then round to the nearest order of magnitude and check it is sensible.' },
      { n: 4, f: 'Estimate the kinetic energy of a sprinter to the nearest order of magnitude', b: 'm ≈ 80 kg, v ≈ 10 m s⁻¹.\nEk = ½mv² = 0.5 × 80 × 10² = 4 × 10³ J, so the order of magnitude is 10⁴ J.' },
    ]),

    // 3.2 Particles and radiation
    ...sub('particles-and-radiation-aqa-alevel', 'particles-aqa-alevel', '3.2.1', [
      { n: 1, f: 'Specific charge: definition and unit', b: 'Charge ÷ mass, in C kg⁻¹. For an ion use the net charge and mass ≈ A × 1.67 × 10⁻²⁷ kg.' },
      { n: 2, f: 'Range and nature of the strong nuclear force', b: 'Acts between nucleons. Attractive up to about 3 fm, repulsive below about 0.5 fm (which stops the nucleus collapsing).' },
      { n: 3, f: 'Why was the neutrino proposed?', b: 'Beta particles are emitted with a range of energies, so to conserve energy another particle had to carry the rest.' },
      { n: 4, f: 'Annihilation', b: 'Particle + antiparticle → two photons (two, to conserve momentum). Minimum energy of each photon = the rest energy of one particle.', src: PR },
      { n: 5, f: 'Pair production', b: 'One photon → particle + antiparticle. Minimum photon energy = 2 × the rest energy of the particle; any extra becomes kinetic energy.', src: PR },
      { n: 6, f: 'Exchange particles for the electromagnetic, weak and strong (nucleon) interactions', b: 'Electromagnetic: virtual photon.\nWeak: W⁺ or W⁻.\nStrong between nucleons: pion.' },
      { n: 7, f: 'Hadron vs lepton', b: 'Hadrons feel the strong interaction; leptons do not.', src: PR },
      { n: 8, f: 'Baryon vs meson', b: 'Baryon: three quarks (baryon number B = ±1). Meson: a quark and an antiquark (B = 0).', src: PR },
      { n: 9, f: 'Charge Q, baryon number B and strangeness S of the u, d and s quarks', b: 'u: Q = +⅔, B = +⅓, S = 0.\nd: Q = −⅓, B = +⅓, S = 0.\ns: Q = −⅓, B = +⅓, S = −1.\nAntiquarks: reverse every sign.' },
      { n: 10, f: 'Quark change in β⁻ decay and in β⁺ decay', b: 'β⁻: d → u (n → p + e⁻ + ν̄ₑ).\nβ⁺: u → d (p → n + e⁺ + νₑ).' },
      { n: 11, f: 'Which quantities are conserved in particle interactions, and which can change in the weak interaction?', b: 'Charge, baryon number, and the lepton numbers Lₑ and L_μ (separately) are always conserved, as are energy and momentum. Strangeness is conserved in the strong interaction but can change by 0 or ±1 in the weak interaction.' },
      { n: 12, f: 'How are strange particles produced, and how do they decay?', b: 'Produced in pairs by the strong interaction; they decay by the weak interaction.' },
    ]),
    ...sub('particles-and-radiation-aqa-alevel', 'electromagnetic-radiation-and-quantum-phenomena', '3.2.2', [
      { n: 1, f: 'Photoelectric equation, threshold frequency and stopping potential', b: 'hf = ϕ + Ek(max), where ϕ is the work function.\nThreshold frequency f₀ = ϕ/h.\nStopping potential: eVs = Ek(max).' },
      { n: 2, f: 'Photoelectric effect: what intensity changes vs what frequency changes', b: 'Intensity sets the number of photoelectrons per second; frequency sets Ek(max). Below the threshold frequency there is no emission at any intensity.', src: PR },
      { n: 3, f: 'Light of photon energy 3.0 eV falls on a metal with work function 2.3 eV. Find Ek(max) and the stopping potential.', b: 'Ek(max) = 3.0 − 2.3 = 0.7 eV, so the stopping potential is 0.7 V.' },
      { n: 4, f: 'Excitation vs ionisation', b: 'Excitation: an electron moves up to a higher energy level.\nIonisation: an electron is removed from the atom.', src: PR },
      { n: 5, f: 'How does a fluorescent tube produce visible light?', b: 'Electrons collide with mercury atoms and excite them. The mercury atoms de-excite, emitting UV photons. The phosphor coating absorbs the UV and emits visible light.' },
      { n: 6, f: 'Energy of a photon emitted when an electron falls between two levels', b: 'hf = E₁ − E₂ (convert the levels to joules before using h). Line spectra are evidence for discrete energy levels.' },
      { n: 7, f: 'de Broglie wavelength, and the evidence for wave-particle duality', b: 'λ = h/mv. Electron diffraction shows particles behaving as waves; the photoelectric effect shows light behaving as particles.' },
      { n: 8, f: 'Electron diffraction: effect of increasing the electrons\' speed', b: 'Greater momentum → shorter de Broglie wavelength → less diffraction, so the rings are smaller.' },
    ]),

    // 3.3 Waves
    ...sub('waves-aqa-alevel', 'progressive-and-stationary-waves', '3.3.1', [
      { n: 1, f: 'Wavelength (of a progressive wave)', b: 'The distance between adjacent points in phase.', src: WAV },
      { n: 2, f: 'Phase difference', b: 'How far one point is ahead of another in its cycle, as a fraction of a cycle, in degrees or in radians: ¼ cycle = 90° = π/2 rad; ½ cycle = 180° = π rad.', src: WAV },
      { n: 3, f: 'Transverse vs longitudinal waves, and what polarisation shows', b: 'Transverse: oscillation perpendicular to the direction of energy transfer (all EM waves). Longitudinal: parallel (sound). Only transverse waves can be polarised, so polarisation is evidence that a wave is transverse.' },
      { n: 4, f: 'How is a stationary wave formed?', b: 'Two progressive waves of the same frequency travelling in opposite directions (often a wave and its reflection) superpose. Nodes form where they are always in antiphase, antinodes where always in phase.' },
      { n: 5, f: 'Progressive vs stationary wave: energy, amplitude and phase', b: 'Progressive: transfers energy; same amplitude everywhere; phase changes continuously along the wave.\nStationary: stores energy; zero at nodes, maximum at antinodes; same phase within a loop, antiphase in adjacent loops.' },
      { n: 6, f: 'Distance between adjacent nodes of a stationary wave', b: 'λ/2. Count the gaps between nodes, not the nodes.' },
      { n: 7, f: 'First harmonic on a string: the equation, and the effect of quadrupling the tension', b: 'f = (1/2l)√(T/μ), where μ is mass per unit length. f ∝ √T, so quadrupling T doubles f.' },
    ]),
    ...sub('waves-aqa-alevel', 'refraction-diffraction-and-interference', '3.3.2', [
      { n: 1, f: 'Coherent sources', b: 'Same frequency and a constant phase difference.' },
      { n: 2, f: 'Young\'s double slits: λ = 600 nm, D = 2.0 m, s = 0.50 mm. Find the fringe spacing.', b: 'w = λD/s = (6.0 × 10⁻⁷ × 2.0) ÷ (5.0 × 10⁻⁴) = 2.4 × 10⁻³ m = 2.4 mm.' },
      { n: 3, f: 'Diffraction grating equation, and how to find the highest order', b: 'd sin θ = nλ, with d = 1 ÷ (lines per metre). Highest order = the largest whole number ≤ d/λ (round down).' },
      { n: 4, f: 'Single-slit diffraction: the pattern, and what makes the central maximum wider', b: 'A bright central maximum twice the width of the dimmer side maxima. It is wider if the wavelength increases or the slit width decreases.' },
      { n: 5, f: 'Conditions for total internal reflection, and the critical angle equation', b: 'Light travels from higher to lower refractive index (n₁ > n₂) at an angle of incidence greater than the critical angle.\nsin θc = n₂/n₁.' },
      { n: 6, f: 'Cladding of an optical fibre: why is it used?', b: 'It has a lower refractive index than the core (allowing TIR), protects the core from scratches, and stops crossover of signals between fibres.', src: WAV },
      { n: 7, f: 'Material dispersion vs modal dispersion in a fibre, with the fix for each', b: 'Material: different wavelengths travel at different speeds; fix with a monochromatic source.\nModal: rays take different paths of different lengths; fix with a very narrow (single-mode) core.' },
      { n: 8, f: 'Double-slit fringes with white light', b: 'A white central fringe; the other fringes are coloured, with blue nearer the centre.' },
    ]),

    // 3.4 Mechanics and materials
    ...sub('mechanics-and-materials-aqa-alevel', 'force-energy-and-momentum', '3.4.1', [
      { n: 1, f: 'Resolving the weight mg of an object on a slope at angle θ', b: 'mg sin θ along (down) the slope; mg cos θ perpendicular to (into) the surface.' },
      { n: 2, f: 'Moment, couple and the principle of moments', b: 'Moment = force × perpendicular distance from the pivot to the line of action.\nCouple: equal, opposite, coplanar forces; moment = one force × separation of their lines of action.\nIn equilibrium, sum of clockwise moments = sum of anticlockwise moments about any point.' },
      { n: 3, f: 'When can the suvat equations be used?', b: 'Only for uniform (constant) acceleration, so not, for example, when air resistance changes the acceleration.' },
      { n: 4, f: 'Required practical 3: finding g by free fall from a graph', b: 'Plot h against t² for a ball released from rest. Gradient = g/2, so g = 2 × gradient.' },
      { n: 5, f: 'Projectile method', b: 'Split the launch velocity into horizontal (u cos θ) and vertical (u sin θ) parts. Horizontal: constant velocity. Vertical: acceleration −g, use suvat. Time links the two.' },
      { n: 6, f: 'Newton\'s third law, and why weight and normal reaction are not a pair', b: 'Equal and opposite forces of the same type acting on different bodies. Weight and normal reaction act on the same body and are different types of force.' },
      { n: 7, f: 'Impulse', b: 'FΔt = Δ(mv), the change in momentum. Equal to the area under a force–time graph. Unit N s.' },
      { n: 8, f: 'Elastic vs inelastic collision', b: 'Momentum is conserved in both. Elastic: kinetic energy also conserved. Inelastic: kinetic energy not conserved.' },
      { n: 9, f: 'Why does a longer contact time reduce the force (crumple zones, packaging)?', b: 'F = Δ(mv)/Δt. For the same change in momentum, a longer time gives a smaller force.' },
      { n: 10, f: 'Work done by a force at angle θ to the motion, and power at constant velocity', b: 'W = Fs cos θ.\nP = Fv.' },
      { n: 11, f: 'When does a falling object or a vehicle reach terminal (top) speed?', b: 'When the resistive forces (drag and friction) equal the weight or driving force, so the resultant force is zero and the acceleration is zero.' },
    ]),
    ...sub('mechanics-and-materials-aqa-alevel', 'materials-aqa-alevel', '3.4.2', [
      { n: 1, f: 'Limit of proportionality', b: 'The end of the straight-line (Hooke\'s law) region.', src: MM },
      { n: 2, f: 'Elastic limit', b: 'Beyond it, a permanent extension remains after unloading.', src: MM },
      { n: 3, f: 'Plastic vs brittle behaviour', b: 'Plastic: large permanent extension for little extra force (copper). Brittle: fractures with almost no plastic deformation (glass).', src: MM },
      { n: 4, f: 'Tensile stress, tensile strain and the Young modulus', b: 'Stress = F/A (Pa). Strain = ΔL/L (no unit).\nYoung modulus E = stress/strain = FL/(AΔL), the gradient of the linear part of the stress–strain graph.' },
      { n: 5, f: 'Elastic strain energy', b: '½FΔL = area under the force–extension graph. In the Hooke\'s law region it equals ½kΔL².' },
      { n: 6, f: 'Required practical 4 (Young modulus): which measurement dominates the uncertainty, and why?', b: 'The wire\'s diameter, because the area depends on d². Measure it with a micrometer at several places and take the mean.' },
      { n: 7, f: 'Loading beyond the elastic limit then unloading: what does the graph show?', b: 'The unloading line is parallel to the loading line. The area between them is the energy used to deform the material permanently.' },
      { n: 8, f: 'Stiffness k vs Young modulus E', b: 'k is a property of one object (depends on its shape and size); E is a property of the material.' },
    ]),

    // 3.5 Electricity
    ...sub('electricity-aqa-alevel', 'current-electricity-aqa-alevel', '3.5.1', [
      { n: 1, f: 'Potential difference', b: 'Work done per unit charge (V = W/Q).', src: ELEC },
      { n: 2, f: 'Emf vs pd', b: 'Emf: energy given to each coulomb by the source. Pd: energy transferred from each coulomb by a component.', src: ELEC },
      { n: 3, f: 'Resistance on a curved I–V graph', b: 'R = V/I, valid at any point on any I–V graph. It is not the gradient.', src: ELEC },
      { n: 4, f: 'Ohm\'s law', b: 'Current is proportional to pd under constant physical conditions (such as constant temperature). It is a special case, not the definition of resistance.' },
      { n: 5, f: 'Explain the shape of a filament lamp\'s I–V graph', b: 'As current rises, the filament gets hotter, the metal ions vibrate more, and resistance rises, so the gradient of I against V falls. The graph is symmetrical for reversed pd.' },
      { n: 6, f: 'A wire\'s length is doubled and its diameter doubled. What happens to its resistance?', b: 'R = ρL/A and A ∝ d², so R ∝ L/d². Doubling L doubles R; doubling d divides it by 4. Overall R halves.' },
      { n: 7, f: 'ntc thermistor', b: 'Resistance decreases as temperature increases (a falling R–T curve). Used as a temperature sensor.' },
      { n: 8, f: 'Superconductor', b: 'Zero resistivity at and below a critical temperature, which depends on the material. Uses: producing strong magnetic fields; less energy loss in power transmission.', src: ELEC },
      { n: 9, f: 'Cells in series vs n identical cells in parallel', b: 'Series: emfs add (watch their direction), internal resistances add.\nn identical cells in parallel: emf of one cell, internal resistance r/n.', src: ELEC },
      { n: 10, f: 'Potential divider with a thermistor: what happens to its pd as it warms?', b: 'Hotter → its resistance falls → its share of the pd falls. To make V_out rise with temperature, take it across the fixed resistor.', src: ELEC },
      { n: 11, f: 'Required practical 6: finding emf and internal resistance from a graph', b: 'Vary an external resistor and record terminal pd V and current I. Plot V against I: y-intercept = ε, gradient = −r (from V = ε − Ir).' },
      { n: 12, f: 'Terminal pd is 5.6 V at 0.40 A and 4.8 V at 1.20 A. Find r and ε.', b: 'r = (5.6 − 4.8) ÷ (1.20 − 0.40) = 1.0 Ω.\nε = V + Ir = 5.6 + 0.40 × 1.0 = 6.0 V.' },
    ]),

    // 3.6 Further mechanics and thermal physics
    ...sub('further-mechanics-and-thermal-physics', 'periodic-motion-aqa-alevel', '3.6.1', [
      { n: 1, f: 'Centripetal acceleration and force', b: 'a = v²/r = ω²r, towards the centre.\nF = mv²/r = mω²r. It is a resultant supplied by real forces, never an extra force.' },
      { n: 2, f: 'Condition for simple harmonic motion', b: 'Acceleration is proportional to displacement and directed towards the equilibrium position: a = −ω²x.' },
      { n: 3, f: 'SHM: maximum speed, maximum acceleration, and speed at displacement x', b: 'v_max = ωA (at equilibrium). a_max = ω²A (at the extremes).\nv = ±ω√(A² − x²).' },
      { n: 4, f: 'Periods of a mass-spring system and a simple pendulum', b: 'Mass-spring: T = 2π√(m/k).\nPendulum (small angles): T = 2π√(l/g), independent of the mass of the bob.\nNeither depends on amplitude.' },
      { n: 5, f: 'SHM energy: where Ek and Ep are greatest, and their period against time', b: 'Ek is greatest at x = 0; Ep at x = ±A; the total is constant (undamped). Each energy varies with half the period of the oscillation.' },
      { n: 6, f: 'Light, critical and heavy damping', b: 'Light: amplitude decays gradually, period about the same. Critical: returns to equilibrium in the shortest time without oscillating. Heavy: returns slowly without oscillating.' },
      { n: 7, f: 'Free vs forced vibration, and resonance', b: 'Free: no driving force; oscillates at its natural frequency. Forced: oscillates at the driving frequency.\nResonance: driving frequency = natural frequency, giving maximum amplitude.' },
      { n: 8, f: 'Effect of more damping on a resonance curve', b: 'The peak is lower and broader, and occurs at a slightly lower frequency.' },
      { n: 9, f: 'Required practical 7: good technique and the graph', b: 'Time many oscillations, repeat, and time from the equilibrium position; plot T² against m or l and use the gradient (4π²/k or 4π²/g).', src: FMT },
    ]),
    ...sub('further-mechanics-and-thermal-physics', 'thermal-physics-aqa-alevel', '3.6.2', [
      { n: 1, f: 'Internal energy', b: 'The sum of the randomly distributed kinetic and potential energies of the particles in a body.' },
      { n: 2, f: 'Why does temperature stay constant during a change of state?', b: 'The energy supplied changes the potential energies of the particles, not their kinetic energies.' },
      { n: 3, f: 'Specific heat capacity and specific latent heat equations', b: 'Q = mcΔθ (c: energy per kg per K).\nQ = ml (l: energy per kg to change state at constant temperature).' },
      { n: 4, f: 'Boyle\'s law, Charles\'s law and the pressure law (fixed mass of gas)', b: 'Boyle: pV constant at constant T.\nCharles: V ∝ T at constant p.\nPressure law: p ∝ T at constant V.\nT is in kelvin; absolute zero is about −273 °C.' },
      { n: 5, f: 'Ideal gas equation, and the link between k, R and N_A', b: 'pV = nRT = NkT, with T in kelvin.\nk = R/N_A.' },
      { n: 6, f: 'Kinetic theory assumptions', b: 'Many identical molecules in random motion; elastic collisions; negligible molecular volume; no intermolecular forces except during collisions; negligible collision time.' },
      { n: 7, f: 'Mean kinetic energy of a gas molecule', b: '½m(c_rms)² = (3/2)kT = (3/2)RT/N_A.\nAt 300 K: 1.5 × 1.38 × 10⁻²³ × 300 = 6.2 × 10⁻²¹ J.' },
      { n: 8, f: 'Root mean square speed', b: 'c_rms = √(mean of c²). It is not the same as the mean speed.' },
      { n: 9, f: 'Brownian motion', b: 'The random motion of visible particles (such as smoke) caused by collisions with invisible molecules. Evidence for molecules.' },
      { n: 10, f: 'Work done by a gas expanding at constant pressure', b: 'W = pΔV, the area under the p–V graph.' },
    ]),

    // 3.7 Fields and their consequences
    ...sub('fields-and-their-consequences', 'fields-aqa-alevel', '3.7.1', [
      { n: 1, f: 'Force field', b: 'A region in which a body experiences a non-contact force.', src: FLD },
      { n: 2, f: 'What produces gravitational, electric and magnetic fields?', b: 'Gravitational: mass. Electric: static charge. Magnetic: moving charge.' },
      { n: 3, f: 'Gravitational vs electrostatic fields: one similarity and one difference', b: 'Similar: both obey inverse-square laws and use field lines, potential and equipotential surfaces.\nDifferent: masses always attract; charges can attract or repel.' },
    ]),
    ...sub('fields-and-their-consequences', 'gravitational-fields-aqa-alevel', '3.7.2', [
      { n: 1, f: 'Newton\'s law of gravitation and field strength in a radial field', b: 'F = Gm₁m₂/r².\ng = F/m; for a radial field g = GM/r², with r measured from the centre of mass.' },
      { n: 2, f: 'Gravitational potential: definition, and why it is negative', b: 'The work done per unit mass in bringing a mass from infinity to that point. V = −GM/r. It is zero at infinity and negative elsewhere because the force is attractive.' },
      { n: 3, f: 'Equipotential surfaces', b: 'No work is done moving along them; they are perpendicular to field lines.', src: FLD },
      { n: 4, f: 'Derive T² ∝ r³ for a circular orbit', b: 'GMm/r² = mv²/r. Substitute v = 2πr/T and rearrange: T² = (4π²/GM)r³. 4π²/GM is constant for one central mass.' },
      { n: 5, f: 'Kinetic, potential and total energy of an orbiting satellite', b: 'Ek = GMm/2r, Ep = −GMm/r, total = −GMm/2r.', src: FLD },
      { n: 6, f: 'Geostationary orbit', b: 'Earth-synchronous (24 h period), in the equatorial plane, moving west to east, radius about 4.2 × 10⁷ m. Fixed dishes can point at it.', src: FLD },
      { n: 7, f: 'Escape velocity', b: 'v = √(2GM/R), from ½mv² = GMm/R: the kinetic energy equals the energy needed to reach infinity.' },
      { n: 8, f: 'Link between g and the V–r graph', b: 'g = −ΔV/Δr: g is minus the gradient of the V–r graph. The area under a g–r graph gives the potential difference.' },
    ]),
    ...sub('fields-and-their-consequences', 'electric-fields-aqa-alevel', '3.7.3', [
      { n: 1, f: 'Coulomb\'s law', b: 'F = (1/4πε₀) Q₁Q₂/r², for point charges in a vacuum (air counts as a vacuum). A charged sphere acts as if its charge were at its centre.' },
      { n: 2, f: 'Electric field strength: definition, radial field and uniform field', b: 'E = F/Q.\nRadial: E = (1/4πε₀) Q/r².\nUniform (parallel plates): E = V/d.' },
      { n: 3, f: 'Absolute electric potential', b: 'Work done per unit positive charge in bringing it from infinity. Positive near a positive charge, negative near a negative one. Radial: V = (1/4πε₀) Q/r.', src: FLD },
      { n: 4, f: 'Path of a charged particle entering a uniform electric field at right angles', b: 'A parabola: constant velocity along the plates, constant acceleration (a = QE/m) across them.' },
      { n: 5, f: 'Gravitational vs electrostatic force between a proton and an electron', b: 'The gravitational force is negligible: smaller by a factor of order 10³⁹.' },
    ]),
    ...sub('fields-and-their-consequences', 'capacitance-aqa-alevel', '3.7.4', [
      { n: 1, f: 'Capacitance, and capacitance of a parallel-plate capacitor', b: 'C = Q/V (farads).\nC = Aε₀εᵣ/d, where εᵣ is the relative permittivity (dielectric constant).' },
      { n: 2, f: 'Dielectric action', b: 'Polar molecules rotate to line up with the field. Their own field opposes the applied field, so the pd falls for a given charge and C rises.', src: FLD },
      { n: 3, f: 'Energy stored by a capacitor', b: 'The area under the charge–pd graph: E = ½QV = ½CV² = ½Q²/C.', src: FLD },
      { n: 4, f: 'Time constant: what fraction remains after one RC on discharge, and is reached after one RC on charge?', b: 'Discharge: about 37% left.\nCharge: about 63% reached.' },
      { n: 5, f: 'Time constant vs half-time', b: 'Time constant = RC. Half-time = 0.69RC.', src: FLD },
      { n: 6, f: 'Required practical 9: the graph for a capacitor discharge', b: 'Plot ln V against t. Gradient = −1/RC.', src: FLD },
      { n: 7, f: 'Discharge equation, and R = 10 kΩ, C = 100 μF: find RC', b: 'Q = Q₀e^(−t/RC) (V and I follow the same form).\nRC = 10 × 10³ × 100 × 10⁻⁶ = 1.0 s.' },
    ]),
    ...sub('fields-and-their-consequences', 'magnetic-fields-aqa-alevel', '3.7.5', [
      { n: 1, f: 'The tesla', b: '1 T gives a force of 1 N on 1 m of wire carrying 1 A perpendicular to the field (F = BIl).', src: FLD },
      { n: 2, f: 'Charged particle moving at right angles to a magnetic field', b: 'F = BQv, perpendicular to the velocity, so no work is done: constant speed in a circle of radius r = mv/BQ.', src: FLD },
      { n: 3, f: 'Why can a cyclotron use a fixed-frequency alternating pd?', b: 'The time per orbit, 2πm/BQ, does not depend on speed.', src: FLD },
      { n: 4, f: 'Magnetic flux and flux linkage', b: 'Φ = BA (webers). Flux linkage NΦ = BAN cos θ, where θ is the angle between the field and the normal to the coil.' },
      { n: 5, f: 'Faraday\'s law and Lenz\'s law', b: 'Faraday: induced emf = rate of change of flux linkage (ε = NΔΦ/Δt).\nLenz: the induced current opposes the change producing it.', src: FLD },
      { n: 6, f: 'Emf of a rotating coil, and when it is greatest', b: 'ε = BANω sin ωt. It is maximum when the plane of the coil is parallel to B (flux linkage zero).', src: FLD },
      { n: 7, f: 'Peak 325 V sinusoidal supply: find the rms voltage', b: 'V_rms = V₀/√2 = 325 ÷ 1.41 ≈ 230 V. (Sinusoidal waveforms only.)' },
      { n: 8, f: 'Transformer equation and causes of energy loss', b: 'Nₛ/Nₚ = Vₛ/Vₚ.\nLosses: eddy currents (reduced by a laminated core), coil resistance, magnetising the core, flux leakage.' },
      { n: 9, f: 'Why is electricity transmitted at high voltage?', b: 'For the same power, high voltage means low current, so the I²R loss in the cables is low.', src: FLD },
    ]),

    // 3.8 Nuclear physics
    ...sub('nuclear-physics-aqa-alevel', 'radioactivity-aqa-alevel', '3.8.1', [
      { n: 1, f: 'Rutherford scattering: observations and conclusions', b: 'Most α pass straight through → the atom is mostly empty space. Some deflect through large angles → a small, concentrated positive charge. Very few rebound → the nucleus holds most of the mass.' },
      { n: 2, f: 'α, β⁻ and γ: ionising ability and what stops them', b: 'α: strongly ionising, a few cm in air, stopped by paper.\nβ⁻: less ionising, about a metre in air, stopped by a few mm of aluminium.\nγ: weakly ionising, reduced by thick lead; obeys I = k/x² in air.', src: NUC },
      { n: 3, f: 'Required practical 12: testing the inverse-square law for γ', b: 'Measure background first and subtract it. Record count rates at several distances d. A graph of 1/√C against d is a straight line if I ∝ 1/x².' },
      { n: 4, f: 'Decay constant λ, activity, and half-life', b: 'λ is the probability of a nucleus decaying per unit time. Activity A = λN (Bq, with λ in s⁻¹). N = N₀e^(−λt). T½ = ln 2/λ.' },
      { n: 5, f: 'Graph of ln A against t for a radioactive sample', b: 'ln A = ln A₀ − λt: a straight line with gradient −λ and intercept ln A₀.', src: NUC },
      { n: 6, f: 'Which decay for an unstable nucleus with too many neutrons, too many protons, or very heavy?', b: 'Too many neutrons (above the stability line): β⁻.\nToo many protons: β⁺ or electron capture.\nVery heavy: α.' },
      { n: 7, f: 'Nuclear radius equation, and the radius for A = 64 with R₀ = 1.2 fm', b: 'R = R₀A^(1/3).\nR = 1.2 × 64^(1/3) = 1.2 × 4 = 4.8 fm.' },
      { n: 8, f: 'Why is nuclear density roughly constant?', b: 'Volume ∝ R³ ∝ A and mass ∝ A, so density is the same for all nuclei, about 10¹⁷ kg m⁻³.' },
      { n: 9, f: 'Why does α closest approach give only an estimate of nuclear radius?', b: 'It overestimates R (the α never touches the nucleus), and the α can be affected by the strong force near the nucleus. Electron diffraction is better: electrons feel no strong force.', src: NUC },
      { n: 10, f: 'Atomic mass unit', b: '1 u is one-twelfth of the mass of a carbon-12 atom (1.661 × 10⁻²⁷ kg); 1 u = 931.5 MeV.', src: NUC },
      { n: 11, f: 'Binding energy and mass difference', b: 'Binding energy: the energy needed to separate the nucleus into its nucleons.\nMass difference: mass of the separate nucleons minus mass of the nucleus.', src: NUC },
      { n: 12, f: 'Binding energy per nucleon curve: where is the peak, and why do fission and fusion release energy?', b: 'The peak is near A ≈ 56 (about 8.8 MeV). Fusion of light nuclei and fission of heavy nuclei both increase the binding energy per nucleon, so both release energy.' },
      { n: 13, f: 'Moderator vs control rods in a thermal reactor', b: 'Moderator (water, graphite): slows neutrons by elastic collisions.\nControl rods (boron, cadmium): absorb neutrons, to keep one further fission per fission.' },
      { n: 14, f: 'Critical mass', b: 'The minimum mass of fuel for a self-sustaining chain reaction.', src: NUC },
    ]),

    // 3.9 Astrophysics (option)
    ...sub('astrophysics-aqa-alevel', 'telescopes-aqa-alevel', '3.9.1', [
      { n: 1, f: 'Refracting telescope in normal adjustment: angular magnification and length', b: 'M = β/α = fₒ/fₑ. The lenses are fₒ + fₑ apart, the principal foci coincide, and the final image is at infinity.' },
      { n: 2, f: 'Cassegrain telescope', b: 'Parabolic concave primary mirror and convex secondary mirror; light returns through a hole in the primary to the eyepiece.', src: AST },
      { n: 3, f: 'Spherical aberration', b: 'Edge and central rays focus at different points (spherical surfaces). Cured by using a parabolic mirror.', src: AST },
      { n: 4, f: 'Chromatic aberration', b: 'Lenses focus different colours at different points. Mirrors do not have it.', src: AST },
      { n: 5, f: 'Resolving power vs collecting power', b: 'Resolving power: θ ≈ λ/D (Rayleigh criterion, θ in radians), the detail seen.\nCollecting power ∝ D², which sets how faint an object can be seen.', src: AST },
      { n: 6, f: 'CCD vs the eye', b: 'A CCD has much higher quantum efficiency, resolution set by pixel spacing, long exposures and digital storage. The eye is real-time and needs no equipment.', src: AST },
    ]),
    ...sub('astrophysics-aqa-alevel', 'classification-of-stars-aqa-alevel', '3.9.2', [
      { n: 1, f: 'Apparent magnitude m', b: 'The Hipparcos scale: the dimmest visible stars are m = 6; a lower number means brighter. A difference of 1 magnitude is a brightness ratio of 2.51; 5 magnitudes is about 100.', src: AST },
      { n: 2, f: 'Absolute magnitude M, and the distance modulus', b: 'M is the apparent magnitude the star would have at 10 pc.\nm − M = 5 log₁₀(d/10), with d in parsecs.' },
      { n: 3, f: 'A star has m − M = 5. How far away is it?', b: '5 log₁₀(d/10) = 5, so d/10 = 10 and d = 100 pc.' },
      { n: 4, f: 'Wien\'s law and Stefan\'s law', b: 'Wien: λₘₐₓT = 2.9 × 10⁻³ m K.\nStefan: P = σAT⁴, with A = 4πr² for a star.' },
      { n: 5, f: 'In which stars are the hydrogen Balmer lines strongest, and why?', b: 'In A stars. The lines need hydrogen atoms in the n = 2 level: cooler stars have too few excited atoms, and in the hottest stars the hydrogen is mostly ionised.' },
      { n: 6, f: 'HR diagram axes and regions', b: 'Absolute magnitude from +15 (bottom) to −10 (top); temperature from 50 000 K (left) to 2 500 K (right). Main sequence diagonal; giants top right; white dwarfs bottom left.' },
      { n: 7, f: 'Evolution of a Sun-like star', b: 'Protostar → main sequence → red giant (moving up and right on the HR diagram) → white dwarf (moving left and down).', src: AST },
      { n: 8, f: 'Type 1a supernova', b: 'Always the same peak absolute magnitude, so it is a standard candle; quick rise, slow fall. Faint distant ones suggest the Universe\'s expansion is accelerating (dark energy, controversial).', src: AST },
    ]),
    ...sub('astrophysics-aqa-alevel', 'cosmology-aqa-alevel', '3.9.3', [
      { n: 1, f: 'Red shift and recession speed', b: 'z = Δλ/λ = −v/c for v ≪ c, with v positive for approach. A receding source has negative v, so λ increases (red shift), z is positive and the recession speed is zc. Applies to optical and radio frequencies.', src: AST },
      { n: 2, f: 'Hubble\'s law and the age of the Universe', b: 'v = Hd. The Universe is expanding; if H has been constant, its age ≈ 1/H (H in s⁻¹).', src: AST },
      { n: 3, f: 'H = 70 km s⁻¹ Mpc⁻¹ (1 Mpc = 3.08 × 10²² m). Estimate the age of the Universe.', b: 'H = 70 × 10³ ÷ 3.08 × 10²² = 2.27 × 10⁻¹⁸ s⁻¹.\n1/H = 4.4 × 10¹⁷ s ≈ 1.4 × 10¹⁰ years.' },
      { n: 4, f: 'Two pieces of evidence for the Big Bang (besides Hubble\'s law)', b: 'The cosmic microwave background (about 2.7 K, nearly uniform in all directions), and the relative abundance of hydrogen and helium (about 3 : 1 by mass).', src: AST },
      { n: 5, f: 'Quasars', b: 'The most distant measurable objects; discovered as bright radio sources; large optical red shifts; huge power output; thought to be active supermassive black holes.', src: AST },
      { n: 6, f: 'Detecting exoplanets: radial velocity vs transit method', b: 'Radial velocity: a periodic Doppler shift in the star\'s light. Transit: a periodic dip in the star\'s intensity, dip ≈ (r_planet/r_star)².', src: AST },
    ]),

    // 3.10 Medical physics (option)
    ...sub('medical-physics-aqa-alevel', 'physics-of-the-eye-aqa-alevel', '3.10.1', [
      { n: 1, f: 'Where is light refracted in the eye, and what is the image on the retina like?', b: 'Mostly at the cornea; the lens fine-tunes the focus. The image is real and inverted.', src: MED },
      { n: 2, f: 'Cones', b: 'Work in bright light; give colour vision (three types, peaks near 420, 530 and 560 nm); packed in the fovea; one nerve connection each, so high resolution.', src: MED },
      { n: 3, f: 'Rods', b: 'Work in dim light; one type (peak near 498 nm), so no colour; many share one nerve fibre, so low resolution but high sensitivity.', src: MED },
      { n: 4, f: 'Myopia vs hypermetropia: the defect and the correcting lens', b: 'Myopia: far point too close; corrected with a diverging lens.\nHypermetropia: near point too far; corrected with a converging lens.', src: MED },
      { n: 5, f: 'A myopic eye has a far point of 2.0 m. What is the power of the correcting lens?', b: 'u = ∞, v = −2.0 m (virtual image).\nP = 1/u + 1/v = 0 − 0.5 = −0.5 D (diverging).' },
      { n: 6, f: 'Astigmatism', b: 'The eye has different power in different planes. Corrected with a cylindrical lens. A prescription gives sphere power, cylinder power and axis angle in degrees.', src: MED },
    ]),
    ...sub('medical-physics-aqa-alevel', 'physics-of-the-ear-aqa-alevel', '3.10.2', [
      { n: 1, f: 'What does the middle ear do?', b: 'The ossicles act as a lever, and the oval window has a much smaller area than the eardrum, so the pressure rises.', src: MED },
      { n: 2, f: 'Inner ear: how is sound turned into nerve impulses?', b: 'Vibrations pass into the fluid of the cochlea; hair cells on the basilar membrane produce nerve impulses. The position along the membrane depends on the frequency.', src: MED },
      { n: 3, f: 'Intensity level equation, and the effect of ×10 and ×2 in intensity', b: 'Intensity level = 10 log(I/I₀) dB, with I₀ = 1.0 × 10⁻¹² W m⁻².\n×10 in I: +10 dB. ×2 in I: +3 dB.' },
      { n: 4, f: 'dB vs dBA', b: 'dBA is weighted for the ear\'s frequency response; dB is not.', src: MED },
      { n: 5, f: 'Equal loudness curve', b: 'Joins sounds that seem equally loud; built by matching tones to a 1 kHz reference. The lowest curve is the threshold of hearing; the ear is most sensitive in the middle of its range.', src: MED },
      { n: 6, f: 'Effect of noise damage and of age on hearing', b: 'Noise: the threshold rises over a band of frequencies (a notch).\nAge: the threshold rises most at high frequency, and the upper limit falls.', src: MED },
    ]),
    ...sub('medical-physics-aqa-alevel', 'biological-measurement-aqa-alevel', '3.10.3', [
      { n: 1, f: 'How is an ECG obtained?', b: 'Electrodes on the limbs and chest; skin cleaned and a conducting gel used for low-resistance contact. A high-gain amplifier with high input impedance amplifies the signal, about 1 mV, for display.' },
      { n: 2, f: 'ECG waveform: what do the P wave, QRS complex and T wave show?', b: 'P: atrial depolarisation.\nQRS: ventricular depolarisation (the largest).\nT: ventricular repolarisation.', src: MED },
      { n: 3, f: 'Why is the QRS complex the largest part of the ECG?', b: 'It comes from the ventricles depolarising and contracting, and the ventricles have the most muscle.' },
    ]),
    ...sub('medical-physics-aqa-alevel', 'non-ionising-imaging-aqa-alevel', '3.10.4', [
      { n: 1, f: 'Acoustic impedance and the fraction of ultrasound reflected at a boundary', b: 'Z = ρc.\nI_r/I_i = ((Z₂ − Z₁)/(Z₂ + Z₁))².' },
      { n: 2, f: 'Why is coupling gel used in ultrasound scanning?', b: 'Air and skin have very different acoustic impedances, so almost all the ultrasound would be reflected at an air–skin boundary. Gel removes the air.' },
      { n: 3, f: 'How does a piezoelectric transducer send and receive ultrasound?', b: 'A pd pulse makes the crystal vibrate, sending an ultrasound pulse. Returning echoes deform the crystal, producing a pd. Backing material damps the crystal to give short pulses.' },
      { n: 4, f: 'A-scan vs B-scan', b: 'A-scan: amplitude against time in one direction, giving depths.\nB-scan: swept probe; brightness shows echo strength, giving a 2D image.', src: MED },
      { n: 5, f: 'Endoscope: coherent vs non-coherent fibre bundle', b: 'Non-coherent bundle: carries light in (illumination).\nCoherent bundle (fibre positions match at both ends): carries the image out.', src: MED },
      { n: 6, f: 'MR scanner: the sequence', b: 'A superconducting magnet aligns protons, which precess about the field. Gradient coils select the cross-section. RF pulses excite protons; as they de-excite they emit RF signals, which a computer processes into an image.' },
    ]),
    ...sub('medical-physics-aqa-alevel', 'x-ray-imaging-aqa-alevel', '3.10.5', [
      { n: 1, f: 'Continuous vs characteristic X-ray spectrum', b: 'Continuous: electrons decelerate in the target. Characteristic lines: inner-shell vacancies are filled. The cut-off is at E = eV.', src: MED },
      { n: 2, f: 'Maximum photon energy and minimum wavelength from a 100 kV X-ray tube', b: 'E = eV = 100 keV.\nλ_min = hc/eV = (6.63 × 10⁻³⁴ × 3.00 × 10⁸) ÷ (1.60 × 10⁻¹⁹ × 1.0 × 10⁵) = 1.24 × 10⁻¹¹ m.' },
      { n: 3, f: 'Effect of tube current, tube voltage and an aluminium filter on an X-ray beam', b: 'Current controls intensity. Voltage controls photon energy. The aluminium filter removes soft (low-energy) X-rays, lowering the patient\'s dose.' },
      { n: 4, f: 'Attenuation equation and half-value thickness', b: 'I = I₀e^(−μx), with μ the linear attenuation coefficient (m⁻¹).\nx½ = ln 2/μ. Mass attenuation coefficient μm = μ/ρ.' },
      { n: 5, f: 'Flat panel detector', b: 'A scintillator converts X-rays to light, photodiode pixels detect it, and the pixels are scanned electronically. Instant, digital, and a lower dose than film.', src: MED },
      { n: 6, f: 'Intensifying screen vs image intensifier', b: 'Intensifying screen: light from a phosphor exposes the film, so less dose is needed.\nImage intensifier: X-rays → light → electrons → accelerated onto an output phosphor, giving a bright live image.', src: MED },
      { n: 7, f: 'CT scanner', b: 'A rotating X-ray tube with a narrow monochromatic beam and a detector array; a computer builds the image. High resolution and 3D, but costly and a high dose.', src: MED },
    ]),
    ...sub('medical-physics-aqa-alevel', 'radionuclide-imaging-and-therapy-aqa-alevel', '3.10.6', [
      { n: 1, f: 'Properties of a good medical tracer', b: 'γ only; a half-life suited to the scan; γ energy that escapes the body yet is stopped in the camera crystal; can be labelled to an organ-seeking compound.', src: MED },
      { n: 2, f: 'Why is technetium-99m so widely used?', b: 'A pure γ emitter (about 140 keV), half-life about 6 h, and easily labelled to many compounds.', src: MED },
      { n: 3, f: 'Molybdenum-technetium generator', b: 'Longer-lived Mo-99 (half-life about 66 h) decays to Tc-99m, which is eluted with saline on site.', src: MED },
      { n: 4, f: 'Effective half-life: T_P = 6 h and T_B = 24 h. Find T_E.', b: '1/T_E = 1/T_B + 1/T_P = 1/24 + 1/6 = 5/24, so T_E = 4.8 h, shorter than both.' },
      { n: 5, f: 'PET scanning', b: 'A positron emitter is used. Annihilation gives two γ photons travelling back to back; coincidence detection locates the line on which the source lies.', src: MED },
      { n: 6, f: 'Gamma camera: the parts in order', b: 'Collimator → scintillator crystal → photomultiplier tubes → position logic → computer.', src: MED },
      { n: 7, f: 'Photomultiplier tube', b: 'Photocathode (photoelectric effect) → dynodes at rising potentials multiply the electrons → a pulse at the anode.', src: MED },
      { n: 8, f: 'High-energy X-ray therapy: how is healthy tissue protected?', b: 'Several beams crossing at the tumour, or rotation about it; beam shaping; shielding; dose split into several sessions.', src: MED },
    ]),

    // 3.11 Engineering physics (option)
    ...sub('engineering-physics-aqa-alevel', 'rotational-dynamics-aqa-alevel', '3.11.1', [
      { n: 1, f: 'Moment of inertia: equation and what it depends on', b: 'I = Σmr² (kg m²). It depends on the mass, how far the mass is from the axis, and where the axis is. Mass at the rim counts most.' },
      { n: 2, f: 'Rotational kinetic energy, torque and angular momentum', b: 'Ek = ½Iω².\nT = Iα (T is the resultant torque).\nL = Iω.' },
      { n: 3, f: 'A wheel turns at 300 rpm. What is ω?', b: '300 rpm = 5.0 rev s⁻¹. ω = 2π × 5.0 = 31.4 rad s⁻¹.' },
      { n: 4, f: 'Flywheels: what increases the energy stored, and three uses', b: 'Energy = ½Iω², so a large I (heavy rim) and high ω (limited by the material\'s strength). Uses: smoothing torque and speed in engines, storing braking energy in vehicles, releasing energy quickly in presses.' },
      { n: 5, f: 'Conservation of angular momentum: a spinning body pulls its mass inwards', b: 'With no external resultant torque, Iω is constant. I falls, so ω rises. Kinetic energy rises because work is done pulling the mass in.' },
      { n: 6, f: 'Work and power for a torque', b: 'W = Tθ. P = Tω. At constant speed, driving torque = frictional torque.' },
      { n: 7, f: 'Angular velocity–time graph: gradient and area', b: 'Gradient = angular acceleration α. Area = angular displacement θ.' },
    ]),
    ...sub('engineering-physics-aqa-alevel', 'thermodynamics-and-engines-aqa-alevel', '3.11.2', [
      { n: 1, f: 'First law of thermodynamics (AQA form) and the meaning of each term', b: 'Q = ΔU + W. Q: energy supplied to the gas by heating. ΔU: increase in internal energy. W: work done by the gas.' },
      { n: 2, f: 'Isothermal vs adiabatic change', b: 'Isothermal: T constant, pV = constant, ΔU = 0, so Q = W.\nAdiabatic: no heat flow, pV^γ = constant, Q = 0, so W = −ΔU. Adiabatic compression heats the gas.' },
      { n: 3, f: 'Work done in a p–V cycle', b: 'The area enclosed by the loop. ΔU = 0 over a complete cycle.' },
      { n: 4, f: 'Petrol vs diesel engine', b: 'Petrol: fuel–air mixture compressed and ignited by a spark; theoretical heat input at constant volume.\nDiesel: air only compressed; fuel ignites in the hot air; theoretical heat input at constant pressure.' },
      { n: 5, f: 'Indicated power, brake power and friction power', b: 'Indicated power = loop area × cycles per second × number of cylinders.\nBrake power = Tω at the output shaft.\nFriction power = indicated − brake.' },
      { n: 6, f: 'Overall, thermal and mechanical efficiency', b: 'Overall = brake ÷ input power. Thermal = indicated ÷ input. Mechanical = brake ÷ indicated. Overall = thermal × mechanical.' },
      { n: 7, f: 'Maximum efficiency of a heat engine with T_H = 800 K, T_C = 300 K', b: '(T_H − T_C)/T_H = 500 ÷ 800 = 0.625 (62.5%). Temperatures must be in kelvin.' },
      { n: 8, f: 'Coefficient of performance of a refrigerator and a heat pump', b: 'Refrigerator: COP = Q_C/W, maximum T_C/(T_H − T_C).\nHeat pump: COP = Q_H/W, maximum T_H/(T_H − T_C). COP can be greater than 1.' },
    ]),

    // 3.12 Turning points in physics (option)
    ...sub('turning-points-in-physics-aqa-alevel', 'the-discovery-of-the-electron-aqa-alevel', '3.12.1', [
      { n: 1, f: 'Thermionic emission', b: 'Heating a metal gives conduction electrons enough energy to leave the surface. An anode in a vacuum accelerates them: ½mv² = eV.' },
      { n: 2, f: 'Why does a discharge tube glow?', b: 'Positive ions hit the cathode and free electrons, which accelerate to the anode, ionising and exciting gas atoms. The atoms de-excite and emit light.' },
      { n: 3, f: 'Specific charge of the electron from a fine-beam tube', b: 'Combine Bev = mv²/r with ½mv² = eV: e/m = 2V/(B²r²).' },
      { n: 4, f: 'Significance of Thomson\'s measurement of e/m', b: 'The same value for any gas or cathode, so electrons are in all matter. It is about 1800 times the specific charge of the hydrogen ion, so the electron is much less massive than any atom.' },
      { n: 5, f: 'Millikan: condition for a stationary oil drop, and the significance of his results', b: 'QV/d = mg. All charges were whole-number multiples of e, so charge is quantised.' },
      { n: 6, f: 'Millikan: how is the drop\'s radius found?', b: 'With the field off, the drop falls at terminal speed: mg = 6πηrv with m = (4/3)πr³ρ, giving r = √(9ηv/(2ρg)).' },
    ]),
    ...sub('turning-points-in-physics-aqa-alevel', 'wave-particle-duality-aqa-alevel', '3.12.2', [
      { n: 1, f: 'Newton\'s corpuscular theory vs Huygens\' wave theory: prediction for light in water', b: 'Newton: light travels faster in water. Huygens: light travels slower in water.' },
      { n: 2, f: 'Why was Newton\'s theory preferred for so long?', b: 'His reputation; it explained reflection, refraction and sharp shadows; and the speed of light in water could not then be measured.' },
      { n: 3, f: 'Speed of EM waves from Maxwell\'s theory, and its significance', b: 'c = 1/√(μ₀ε₀). Fizeau\'s measured speed of light matched it, so light is an electromagnetic wave.' },
      { n: 4, f: 'Ultraviolet catastrophe and Planck\'s explanation', b: 'Classical theory predicted black-body intensity rising without limit as λ → 0; the observed curve peaks and falls to zero. Planck proposed energy is emitted in quanta, E = hf.' },
      { n: 5, f: 'Three features of photoelectricity that wave theory cannot explain', b: 'A threshold frequency; instant emission; Ek(max) depends on frequency, not intensity. Einstein: one photon (energy hf) gives its energy to one electron.' },
      { n: 6, f: 'Wavelength of an electron accelerated through pd V', b: 'λ = h/√(2meV).' },
      { n: 7, f: 'TEM vs STM', b: 'TEM: electrons are transmitted through a thin sample and focused by magnetic lenses.\nSTM: electrons tunnel between a conducting tip and surface about 1 nm apart; the current is very sensitive to the gap.' },
    ]),
    ...sub('turning-points-in-physics-aqa-alevel', 'special-relativity-aqa-alevel', '3.12.3', [
      { n: 1, f: 'Michelson-Morley experiment: what was expected, what was found, and the significance', b: 'Rotating the interferometer through 90° was expected to shift the fringes if the Earth moved through the ether. No shift: absolute motion cannot be detected; the speed of light is invariant.' },
      { n: 2, f: 'The two postulates of special relativity', b: '1. Physical laws have the same form in all inertial frames.\n2. The speed of light in free space is invariant.' },
      { n: 3, f: 'Time dilation and proper time', b: 't = t₀/√(1 − v²/c²). Proper time t₀ is measured in the frame where the clock is at rest; a moving observer measures a longer time.' },
      { n: 4, f: 'How do muons provide evidence for time dilation?', b: 'Muons made high in the atmosphere reach the ground in far greater numbers than their proper half-life would allow without time dilation.' },
      { n: 5, f: 'Length contraction', b: 'l = l₀√(1 − v²/c²). Proper length l₀ is measured at rest relative to the object. Only lengths along the direction of motion contract.' },
      { n: 6, f: 'Relativistic mass and energy', b: 'E = mc², with m = m₀/√(1 − v²/c²). Kinetic energy = mc² − m₀c². The mass rises towards infinity as v → c.' },
      { n: 7, f: 'Bertozzi\'s experiment', b: 'Electrons of known energy were timed over a known distance, with the energy checked by the heating of the target. Their speed approached but never exceeded c.' },
    ]),

    // 3.13 Electronics (option)
    ...sub('electronics-aqa-alevel', 'discrete-semiconductor-devices-aqa-alevel', '3.13.1', [
      { n: 1, f: 'N-channel enhancement MOSFET', b: 'Terminals: drain, source, gate. The gate is insulated, so input resistance is very high. Off when V_GS is below the threshold voltage V_th; on above it.', src: ELN },
      { n: 2, f: 'Zener diode', b: 'Used reverse biased. Conducts at the breakdown voltage V_Z if the current is above the minimum operating current. With a series resistor it gives a constant reference voltage.', src: ELN },
      { n: 3, f: 'Photodiode', b: 'Reverse biased (photoconductive mode): the reverse current rises with light intensity. Its spectral response curve has a peak and a long-wavelength cut-off.', src: ELN },
      { n: 4, f: 'Hall effect sensor', b: 'Output depends on magnetic flux density. Uses: attitude monitoring, and as a tachometer (one pulse per turn).', src: ELN },
      { n: 5, f: 'Choosing the series resistor for a zener diode', b: 'Resistor current = load current + minimum zener current. Resistor pd = supply − V_Z. R(max) = pd ÷ current; choose the next value below.' },
    ]),
    ...sub('electronics-aqa-alevel', 'analogue-and-digital-signals-aqa-alevel', '3.13.2', [
      { n: 1, f: 'Noise: analogue vs digital signals', b: 'Analogue noise is amplified along with the signal; digital pulses are regenerated by comparing with a threshold.', src: ELN },
      { n: 2, f: 'Pulse code modulation (PCM)', b: 'Each sample is sent as a binary code.', src: ELN },
      { n: 3, f: 'Number of levels and step size for an 8-bit ADC with a 0–5.0 V input', b: 'Levels = 2⁸ = 256.\nStep size = 5.0 ÷ 256 ≈ 0.020 V (19.5 mV).' },
      { n: 4, f: 'Effect of more bits and a faster sampling rate', b: 'Better quality (finer quantisation, follows faster changes) but more data. The highest frequency reproduced is about half the sampling rate.' },
    ]),
    ...sub('electronics-aqa-alevel', 'analogue-signal-processing-aqa-alevel', '3.13.3', [
      { n: 1, f: 'Resonant frequency of an LC circuit', b: 'f₀ = 1/(2π√(LC)).' },
      { n: 2, f: 'Q factor of an LC filter', b: 'Q = f₀/f_B, where f_B is the bandwidth between the 50% energy points. High Q gives a narrow peak.' },
      { n: 3, f: 'Ideal op-amp', b: 'Infinite open-loop gain and infinite input resistance. Connections: supply rails, V₊, V₋ and output.', src: ELN },
      { n: 4, f: 'Op-amp as a comparator', b: 'V_out = A_OL(V₊ − V₋). Output goes to positive saturation when V₊ > V₋ and negative saturation when V₋ > V₊.', src: ELN },
    ]),
    ...sub('electronics-aqa-alevel', 'operational-amplifier-aqa-alevel', '3.13.4', [
      { n: 1, f: 'Inverting vs non-inverting amplifier', b: 'Inverting: gain −R_f/R_in; low input resistance.\nNon-inverting: gain 1 + R_f/R₁; very high input resistance.', src: ELN },
      { n: 2, f: 'Derive the gain of an inverting amplifier', b: 'Huge gain and finite output make V₋ ≈ V₊ = 0 V (virtual earth). No current enters the op-amp, so V_in/R_in = −V_out/R_f, giving V_out/V_in = −R_f/R_in.' },
      { n: 3, f: 'Inverting amplifier with R_f = 100 kΩ and R_in = 10 kΩ; V_in = 0.50 V. Find V_out.', b: 'Gain = −100/10 = −10, so V_out = −5.0 V (within the supply rails).' },
      { n: 4, f: 'Summing and difference amplifiers', b: 'Summing: V_out = −R_f(V₁/R₁ + V₂/R₂ + …).\nDifference: V_out = (V₊ − V₋)R_f/R₁.' },
      { n: 5, f: 'Real op-amp vs ideal', b: 'Finite gain that falls with frequency, finite input resistance, output limited by the rails. Gain × bandwidth is constant, so a higher closed-loop gain gives a narrower bandwidth.', src: ELN },
      { n: 6, f: 'Open-loop vs closed-loop gain', b: 'Open-loop A_OL: the op-amp alone. Closed-loop (such as R_f/R_in): the circuit with feedback.', src: ELN },
    ]),
    ...sub('electronics-aqa-alevel', 'digital-signal-processing-aqa-alevel', '3.13.5', [
      { n: 1, f: 'When is the output 1 for AND, NAND, OR, NOR and EOR gates?', b: 'AND: both inputs 1. NAND: not both 1. OR: at least one 1. NOR: both 0. EOR: exactly one 1.' },
      { n: 2, f: 'Binary vs BCD vs Johnson counter', b: 'Binary: n outputs, 2ⁿ states. BCD: counts 0 to 9 (10 states). Johnson: n stages, 2n states, one bit changes per pulse.', src: ELN },
      { n: 3, f: 'How do you make a modulo-n counter?', b: 'Write n in binary, AND together the outputs that are 1 in n, and connect the AND output to reset. The counter shows 0 to n − 1.' },
      { n: 4, f: 'Duty cycle vs mark-to-space ratio', b: 'Duty cycle = mark ÷ period. Mark-to-space ratio = mark ÷ space.', src: ELN },
      { n: 5, f: 'Astable: effect of a larger R or C in the timing network', b: 'Longer period, so a lower clock frequency.' },
    ]),
    ...sub('electronics-aqa-alevel', 'data-communication-systems-aqa-alevel', '3.13.6', [
      { n: 1, f: 'Wire vs optical fibre vs radio/microwave links', b: 'Wire: cheap, low bandwidth, interference. Fibre: high bandwidth, secure, low loss, costly to lay. Radio/microwave: no cable; microwaves are line of sight.', src: ELN },
      { n: 2, f: 'Ground wave vs sky wave', b: 'Ground wave: long wavelengths diffract round the Earth. Sky wave: refracted and reflected by the ionosphere.', src: ELN },
      { n: 3, f: 'Why do satellites use different up-link and down-link frequencies?', b: 'So the satellite\'s receiver is not de-sensed by its own powerful transmitter.', src: ELN },
      { n: 4, f: 'Time-division multiplexing (TDM)', b: 'Channels share one link in turn, in time slots.', src: ELN },
      { n: 5, f: 'AM vs FM bandwidth', b: 'AM: 2f_M. FM: 2(Δf + f_M), where f_M is the highest information frequency and Δf the frequency deviation.', src: ELN },
      { n: 6, f: 'Purpose of the modulator, the multiplexer and the tuned receiver in a communication system', b: 'Modulator: puts the signal onto a carrier. Multiplexer: combines channels on one link. Tuned receiver: selects the wanted carrier.' },
    ]),
  ],
};
