/**
 * D-438 -- flashcards for Cambridge International AS & A Level Physics 9702 (2025-2027).
 *
 * One block per subtopic, in syllabus order (AS topics 1-11, A Level topics 12-25).
 * Card ids are `<subtopic number>-<n>` and are permanent (browser progress is
 * keyed by them): add a new card with the next unused n, never renumber.
 *
 * 9702 is not tiered, so the deck has no tierScheme and no card is marked u: true.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9702); origin 'revision-notes'.
 *
 * Values follow Marlbridge's own 9702 study guides and revision notes
 * (g = 9.81 m s⁻², e = 1.60 × 10⁻¹⁹ C, h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹).
 * Plain text only (see types.ts). Unicode for symbols.
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

const QU = 'as-physics-quantities-units-revision-notes';
const DYN = 'as-physics-dynamics-revision-notes';
const DEF = 'as-physics-deformation-of-solids-revision-notes';
const SUP = 'as-physics-superposition-revision-notes';
const ELEC = 'as-physics-electricity-revision-notes';
const DC = 'as-physics-dc-circuits-revision-notes';
const PART = 'as-physics-particle-physics-revision-notes';
const TEMP = 'a-physics-temperature-revision-notes';
const THERMO = 'a-physics-thermodynamics-revision-notes';
const OSC = 'a-physics-oscillations-revision-notes';
const QUANT = 'a-physics-quantum-physics-revision-notes';
const MED = 'a-physics-medical-physics-revision-notes';

export const DECK_CAMBRIDGE_A_LEVEL_PHYSICS: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'a-level',
  subjectSlug: 'physics',
  syllabusCode: '9702',
  syllabusSeries: '2025-2027',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // 1 Physical quantities and units
    ...sub('as-physical-quantities-and-units', 'as-physical-quantities', '1.1', [
      { n: 1, f: 'What two parts must every physical quantity have?', b: 'A numerical magnitude and a unit. "20" means nothing until it is 20 m, 20 s or 20 N.' },
      { n: 2, f: 'How many significant figures should a calculated answer have?', b: 'No more than the data justify: if the least precise measurement has 2 significant figures, the answer should not claim 5.' },
      { n: 3, f: 'Estimate the speed of sound in air and the speed of light in a vacuum', b: 'Sound in air: about 340 m s⁻¹.\nLight in a vacuum: 3.00 × 10⁸ m s⁻¹.' },
      { n: 4, f: 'Estimate the wavelength range of visible light', b: 'About 400 nm (violet) to 700 nm (red), i.e. 4 × 10⁻⁷ m to 7 × 10⁻⁷ m.' },
      { n: 5, f: 'Order-of-magnitude estimate: the diameter of an atom', b: 'About 10⁻¹⁰ m.' },
    ]),
    ...sub('as-physical-quantities-and-units', 'as-si-units', '1.2', [
      { n: 1, f: 'The five SI base quantities and units used in 9702', b: 'Mass: kilogram (kg).\nLength: metre (m).\nTime: second (s).\nElectric current: ampere (A).\nTemperature: kelvin (K).' },
      { n: 2, f: 'Express the newton and the joule in SI base units', b: 'N = kg m s⁻² (from F = ma).\nJ = kg m² s⁻² (from W = Fs).' },
      { n: 3, f: 'Express the watt and the pascal in SI base units', b: 'W = kg m² s⁻³ (J s⁻¹).\nPa = kg m⁻¹ s⁻² (N m⁻²).' },
      { n: 4, f: 'Express the volt in SI base units', b: 'V = J C⁻¹ = J (A s)⁻¹ = kg m² s⁻³ A⁻¹.' },
      { n: 5, f: 'Homogeneity of an equation: what it is, and its limit', b: 'Both sides must reduce to the same base units. It shows an equation could be right, not that it is: it cannot detect a wrong dimensionless constant (s = ut + at² is homogeneous but wrong).' },
      { n: 6, f: 'Prefixes: T, G, M, k, d, c, m, μ, n, p', b: 'T 10¹², G 10⁹, M 10⁶, k 10³, d 10⁻¹, c 10⁻², m 10⁻³, μ 10⁻⁶, n 10⁻⁹, p 10⁻¹².' },
    ]),
    ...sub('as-physical-quantities-and-units', 'as-errors-and-uncertainties', '1.3', [
      { n: 1, f: 'Random error', b: 'Readings scatter unpredictably above and below the true value (for example, reaction time with a stopwatch). Reduced by repeating and averaging.', src: QU },
      { n: 2, f: 'Systematic error', b: 'A consistent offset in every reading (for example, a ruler with a worn end). Not reduced by repeating; only by recalibration or zeroing.', src: QU },
      { n: 3, f: 'Zero error', b: 'The instrument does not read zero when it should: a specific example of a systematic error.', src: QU },
      { n: 4, f: 'Precision vs accuracy', b: 'Precise: repeated readings agree closely (small random error).\nAccurate: close to the true value (small systematic error).\nReadings can be precise but not accurate.' },
      { n: 5, f: 'How do uncertainties combine when quantities are added or subtracted, multiplied or divided, or raised to a power n?', b: 'Add or subtract: add absolute uncertainties.\nMultiply or divide: add percentage uncertainties.\nPower n: multiply the percentage uncertainty by n.' },
      { n: 6, f: 'A sphere has radius (2.0 ± 0.1) cm. What is the percentage uncertainty in its volume?', b: '% uncertainty in r = 0.1 ÷ 2.0 × 100 = 5%. V ∝ r³, so 3 × 5% = 15%.' },
    ]),
    ...sub('as-physical-quantities-and-units', 'as-scalars-and-vectors', '1.4', [
      { n: 1, f: 'Scalar vs vector, with examples', b: 'Scalar: magnitude only (distance, speed, mass, time, energy, temperature).\nVector: magnitude and direction (displacement, velocity, acceleration, force, momentum).' },
      { n: 2, f: 'Components of a force F at angle θ to the horizontal', b: 'Horizontal: F cos θ.\nVertical: F sin θ.\ncos θ is always the component along the reference direction the angle is measured from.' },
      { n: 3, f: 'Forces of 3.0 N and 4.0 N act at right angles. Find the resultant.', b: '√(3.0² + 4.0²) = 5.0 N, at tan⁻¹(4.0/3.0) = 53° to the 3.0 N force.' },
      { n: 4, f: 'Two ways to add coplanar vectors', b: 'Draw them tip-to-tail in a scale vector diagram, or resolve each into perpendicular components, add the components, then recombine.' },
      { n: 5, f: 'How do you subtract one vector from another?', b: 'Add its negative: A − B = A + (−B), where −B has the same magnitude as B but the opposite direction.' },
    ]),

    // 2 Kinematics
    ...sub('as-kinematics', 'as-equations-of-motion', '2.1', [
      { n: 1, f: 'The four equations of motion, and the condition for using them', b: 'v = u + at\ns = ut + ½at²\nv² = u² + 2as\ns = (u + v)t ÷ 2\nValid only for uniform (constant) acceleration.' },
      { n: 2, f: 'Derive v = u + at', b: 'Acceleration is the rate of change of velocity: a = (v − u) ÷ t. Rearranging: at = v − u, so v = u + at.' },
      { n: 3, f: 'Velocity–time graph: what do the gradient and the area give?', b: 'Gradient: acceleration.\nArea under the line: displacement (area below the time axis counts as negative displacement).' },
      { n: 4, f: 'How do you find the velocity at an instant from a curved displacement–time graph?', b: 'Draw the tangent to the curve at that instant and find its gradient (not the gradient of a chord between two points).' },
      { n: 5, f: 'The key method for projectile motion', b: 'Treat horizontal and vertical motion independently; they share only the time. Horizontal: a = 0, constant velocity. Vertical: a = g downwards, use the equations of motion.' },
      { n: 6, f: 'A ball is thrown at 20 m s⁻¹ at 30° above the horizontal. Find its initial velocity components.', b: 'Horizontal: 20 cos 30° = 17.3 m s⁻¹.\nVertical: 20 sin 30° = 10 m s⁻¹.' },
      { n: 7, f: 'At the top of a projectile’s path, which velocity component is zero?', b: 'The vertical component. The horizontal component is unchanged (with no air resistance).' },
      { n: 8, f: 'How can g be determined by a free-fall experiment?', b: 'Drop an object from rest through a measured height s, timing the fall electronically (light gates or an electromagnet release). s = ½gt², so g = 2s ÷ t². Repeat and average t.' },
    ]),

    // 3 Dynamics
    ...sub('as-dynamics', 'as-momentum-and-newtons-laws-of-motion', '3.1', [
      { n: 1, f: 'Newton’s first law', b: 'An object stays at rest or moves with constant velocity unless acted on by a resultant force.' },
      { n: 2, f: 'Newton’s second law, stated properly', b: 'The resultant force is proportional to the rate of change of momentum, and acts in its direction: F = Δp ÷ Δt. F = ma follows only when the mass is constant.' },
      { n: 3, f: 'Newton’s third law, and the conditions for a force pair', b: 'If body A exerts a force on body B, B exerts an equal and opposite force on A. The pair act on two different bodies and are the same type of force.' },
      { n: 4, f: 'Linear momentum: definition and unit', b: 'p = mv, mass × velocity. A vector. Unit: kg m s⁻¹ (equivalent to N s).' },
      { n: 5, f: 'Impulse', b: 'Impulse = FΔt = change in momentum. Unit N s. It is the area under a force–time graph.' },
      { n: 6, f: 'How does a crumple zone or airbag reduce the force in a crash?', b: 'It increases the time over which the same momentum change happens. Since F = Δp ÷ Δt, the average force is smaller. (Not "absorbing the force".)' },
    ]),
    ...sub('as-dynamics', 'as-non-uniform-motion', '3.2', [
      { n: 1, f: 'How do frictional and viscous (drag) forces such as air resistance behave?', b: 'They oppose the relative motion, and drag increases as the speed increases.' },
      { n: 2, f: 'Describe the motion of an object falling from rest through air', b: 'It starts with acceleration g. As speed rises, drag rises, so the resultant force and the acceleration fall. Eventually drag equals weight and it falls at constant terminal velocity.' },
      { n: 3, f: 'What is the resultant force on an object at terminal velocity?', b: 'Zero: the drag equals the weight, so the acceleration is zero and the velocity is constant.' },
      { n: 4, f: 'With no air resistance, how does the acceleration of a falling object depend on its mass?', b: 'It does not: every object falls with the same uniform acceleration g.' },
      { n: 5, f: 'A parachute opens during a fall at terminal velocity. What happens?', b: 'Drag suddenly exceeds weight, so there is an upward resultant force and the skydiver decelerates. Drag falls as speed falls until it equals weight again at a new, lower terminal velocity.' },
    ]),
    ...sub('as-dynamics', 'as-linear-momentum-and-its-conservation', '3.3', [
      { n: 1, f: 'Principle of conservation of momentum', b: 'In a closed system (no external resultant force), the total momentum before an interaction equals the total momentum after it.' },
      { n: 2, f: 'Elastic collision: is momentum conserved? Is kinetic energy conserved?', b: 'Momentum: conserved.\nKinetic energy: conserved.', src: DYN },
      { n: 3, f: 'Inelastic collision: is momentum conserved? Is kinetic energy conserved?', b: 'Momentum: conserved.\nKinetic energy: not conserved (some becomes thermal energy, sound and deformation).', src: DYN },
      { n: 4, f: 'In a perfectly elastic collision, how do the relative speeds compare?', b: 'The relative speed of approach equals the relative speed of separation.' },
      { n: 5, f: 'A 2.0 kg trolley at 3.0 m s⁻¹ hits a stationary 1.0 kg trolley and they stick. Find the common speed and the KE lost.', b: '2.0 × 3.0 = 3.0v, so v = 2.0 m s⁻¹.\nKE before = 9.0 J, KE after = 6.0 J, so 3.0 J is transferred to heat and sound.' },
      { n: 6, f: 'An object at rest explodes into two pieces. What can you say about their momenta?', b: 'Total momentum stays zero, so the pieces have equal and opposite momenta. Kinetic energy increases, supplied from chemical or elastic potential energy.' },
    ]),

    // 4 Forces, density and pressure
    ...sub('as-forces-density-and-pressure', 'as-turning-effects-of-forces', '4.1', [
      { n: 1, f: 'Moment of a force', b: 'The force × the perpendicular distance from the pivot to the line of action of the force. Unit N m.' },
      { n: 2, f: 'Couple', b: 'A pair of equal, opposite, parallel forces whose lines of action do not coincide. It produces rotation only: zero resultant force.' },
      { n: 3, f: 'Torque of a couple', b: 'One of the forces × the perpendicular distance between their lines of action.' },
      { n: 4, f: 'Centre of gravity', b: 'The single point where the whole weight of a body can be taken to act. For a uniform body it is at the geometric centre.' },
      { n: 5, f: 'When does an object topple, and how is stability improved?', b: 'It topples when the line of action of its weight falls outside its base. A lower centre of gravity and a wider base make it more stable.' },
    ]),
    ...sub('as-forces-density-and-pressure', 'as-equilibrium-of-forces', '4.2', [
      { n: 1, f: 'Principle of moments', b: 'For a body in rotational equilibrium, the sum of the clockwise moments about any point equals the sum of the anticlockwise moments about that point.' },
      { n: 2, f: 'The two conditions for a body to be in equilibrium', b: '1. The resultant force is zero (no translational acceleration).\n2. The resultant moment (torque) about any point is zero (no rotation).' },
      { n: 3, f: 'Exam technique: about which point should you take moments?', b: 'About a point where an unknown force acts. Its moment there is zero, so it drops out of the equation.' },
      { n: 4, f: 'A 30 N weight hangs 0.8 m from a pivot. Where must a 20 N weight hang on the other side to balance it?', b: '30 × 0.8 = 20 × d, so d = 24 ÷ 20 = 1.2 m.' },
      { n: 5, f: 'How can three coplanar forces in equilibrium be represented?', b: 'As a closed vector triangle: the forces drawn tip-to-tail return to the starting point. Used to find an unknown force or angle.' },
    ]),
    ...sub('as-forces-density-and-pressure', 'as-density-and-pressure', '4.3', [
      { n: 1, f: 'Density and pressure: definitions and units', b: 'Density ρ = mass ÷ volume (kg m⁻³).\nPressure p = normal force ÷ area (Pa = N m⁻²).' },
      { n: 2, f: 'Derive Δp = ρgΔh', b: 'A column of fluid of height Δh and area A has volume AΔh, mass ρAΔh and weight ρAΔhg. Pressure = weight ÷ area = ρgΔh.' },
      { n: 3, f: 'Does the pressure at a given depth depend on the shape of the container?', b: 'No. Δp = ρgΔh depends only on depth, density and g, not on the container’s width, shape or volume.' },
      { n: 4, f: 'Where does upthrust come from?', b: 'Pressure increases with depth, so the upward pressure on the bottom of a submerged object is greater than the downward pressure on its top. The difference gives a net upward force.' },
      { n: 5, f: 'Archimedes’ principle and the upthrust formula', b: 'Upthrust equals the weight of fluid displaced: F = ρgV, where ρ is the fluid’s density and V the volume of fluid displaced (only the submerged volume).' },
      { n: 6, f: 'Why does a steel ship float?', b: 'Its average density, including the enclosed air, is less than that of water, so it displaces its own weight of water before it is fully submerged. Upthrust = weight.' },
    ]),

    // 5 Work, energy and power
    ...sub('as-work-energy-and-power', 'as-energy-conservation', '5.1', [
      { n: 1, f: 'Work done', b: 'Force × displacement in the direction of the force: W = Fs cos θ, where θ is the angle between F and s. Unit J.' },
      { n: 2, f: 'Why does a force perpendicular to the motion do no work?', b: 'cos 90° = 0: no component of the force acts along the displacement. So a centripetal force does no work.' },
      { n: 3, f: 'Principle of conservation of energy', b: 'Energy cannot be created or destroyed, only transferred from one store to another. The total energy of a closed system is constant.' },
      { n: 4, f: 'Efficiency', b: 'Efficiency = useful energy (or power) output ÷ total energy (or power) input, × 100%. It can never exceed 100%.' },
      { n: 5, f: 'Power, and derive P = Fv', b: 'Power is work done per unit time, P = W ÷ t (unit W). For a constant force: P = Fs ÷ t = Fv.' },
      { n: 6, f: 'A car moves at a constant 25 m s⁻¹ against 800 N of resistance. Find the engine’s useful power.', b: 'At constant velocity the driving force equals the resistance: P = Fv = 800 × 25 = 20 kW.' },
    ]),
    ...sub('as-work-energy-and-power', 'as-gravitational-potential-energy-and-kinetic-energy', '5.2', [
      { n: 1, f: 'Derive ΔEp = mgΔh', b: 'Lifting a mass at steady speed needs a force equal to its weight, mg. Work done = force × distance = mg × Δh, which is stored as gravitational potential energy (in a uniform field).' },
      { n: 2, f: 'Derive Ek = ½mv² from the equations of motion', b: 'Accelerate from rest with constant force F: v² = 2as, so s = v² ÷ 2a. W = Fs = ma × v² ÷ 2a = ½mv².' },
      { n: 3, f: 'A ball is dropped 20 m. Find its impact speed (no air resistance).', b: 'mgh = ½mv², so v = √(2gh) = √(2 × 9.81 × 20) = 19.8 m s⁻¹. The mass cancels.' },
      { n: 4, f: 'The speed of a car doubles. What happens to its kinetic energy?', b: 'It quadruples, because Ek ∝ v².' },
      { n: 5, f: 'An object slides down a ramp. Which height goes in mgΔh?', b: 'The vertical height fallen, not the length of the slope.' },
      { n: 6, f: 'A 0.50 kg ball is dropped from 4.0 m and rebounds to 2.0 m. Find the energy dissipated in the bounce.', b: 'GPE lost = 0.50 × 9.81 × 4.0 = 19.6 J. GPE regained = 0.50 × 9.81 × 2.0 = 9.81 J. Dissipated = 19.6 − 9.81 = 9.81 J.' },
    ]),

    // 6 Deformation of solids
    ...sub('as-deformation-of-solids', 'as-stress-and-strain', '6.1', [
      { n: 1, f: 'Hooke’s law, in full', b: 'The force applied is directly proportional to the extension produced, up to the limit of proportionality: F = kx, where k = F ÷ x is the spring constant (N m⁻¹).' },
      { n: 2, f: 'Stress and strain: definitions and units', b: 'Stress = force ÷ cross-sectional area (Pa).\nStrain = extension ÷ original length (no unit).' },
      { n: 3, f: 'Young modulus', b: 'E = stress ÷ strain = FL ÷ (Ax). Unit Pa. Found from the gradient of the straight-line region of a stress–strain graph.' },
      { n: 4, f: 'Two wires of the same metal have different diameters. Which has the greater Young modulus?', b: 'Neither: the Young modulus is a property of the material. Only their spring constants (stiffness as objects) differ.' },
      { n: 5, f: 'A wire 1.5 m long, area 2.0 × 10⁻⁶ m², extends 1.2 mm under 80 N. Find the Young modulus.', b: 'Stress = 80 ÷ 2.0 × 10⁻⁶ = 4.0 × 10⁷ Pa. Strain = 1.2 × 10⁻³ ÷ 1.5 = 8.0 × 10⁻⁴. E = 5.0 × 10¹⁰ Pa.' },
      { n: 6, f: 'Young modulus experiment: why a long, thin wire, and why a reference wire?', b: 'Long: a measurable extension. Thin: a large stress for a modest load. Measure the diameter at several points with a micrometer. An unstretched reference wire alongside cancels effects such as thermal expansion.' },
    ]),
    ...sub('as-deformation-of-solids', 'as-elastic-and-plastic-behaviour', '6.2', [
      { n: 1, f: 'Elastic deformation', b: 'The material returns to its original shape when the load is removed.', src: DEF },
      { n: 2, f: 'Plastic deformation', b: 'A permanent extension remains when the load is removed.', src: DEF },
      { n: 3, f: 'Put in order on a loading graph: elastic limit, breaking point, limit of proportionality, yield point', b: 'Limit of proportionality → elastic limit → yield point → breaking point. The elastic limit comes after the limit of proportionality.' },
      { n: 4, f: 'Elastic potential (strain) energy', b: 'The area under the force–extension graph. Within the limit of proportionality, Ep = ½Fx = ½kx². For a non-linear graph, find the area.' },
      { n: 5, f: 'A material is stretched beyond its elastic limit and unloaded. What does the area between the loading and unloading curves represent?', b: 'Energy dissipated (mostly as thermal energy) in permanently deforming the material. Only the area under the unloading curve is recoverable.' },
      { n: 6, f: 'Brittle, ductile and polymeric materials', b: 'Brittle: breaks at the elastic limit with no plastic deformation (glass).\nDuctile: large plastic deformation before breaking (copper).\nPolymeric: very large extensions; loading and unloading curves differ (rubber).', src: DEF },
    ]),

    // 7 Waves
    ...sub('as-waves', 'as-progressive-waves', '7.1', [
      { n: 1, f: 'Define amplitude, wavelength, period and frequency', b: 'Amplitude: maximum displacement from equilibrium.\nWavelength λ: distance between adjacent points in phase.\nPeriod T: time for one oscillation.\nFrequency f: oscillations per second (Hz).' },
      { n: 2, f: 'Phase difference vs path difference', b: 'Phase difference: how far out of step two points or waves are, as an angle (360° or 2π rad per cycle).\nPath difference: a distance. They are related through the wavelength.' },
      { n: 3, f: 'Derive v = fλ', b: 'In one period T the wave travels one wavelength λ, so v = λ ÷ T. Since f = 1 ÷ T, v = fλ.' },
      { n: 4, f: 'Intensity of a wave, and how it depends on amplitude', b: 'Intensity = power ÷ area (W m⁻²). Intensity ∝ amplitude², so doubling the amplitude quadruples the intensity.' },
      { n: 5, f: 'CRO: peak 2.5 divisions high at 2.0 V/div; one cycle 4.0 divisions at 5.0 ms/div. Find amplitude and frequency.', b: 'Amplitude = 2.5 × 2.0 = 5.0 V.\nT = 4.0 × 5.0 ms = 0.020 s, so f = 1 ÷ T = 50 Hz.' },
      { n: 6, f: 'What does a progressive wave transfer?', b: 'Energy, from source to receiver, without transferring matter: each part of the medium oscillates about a fixed position.' },
    ]),
    ...sub('as-waves', 'as-transverse-and-longitudinal-waves', '7.2', [
      { n: 1, f: 'Transverse wave', b: 'The oscillations are perpendicular to the direction of energy transfer. Crests and troughs. Examples: all electromagnetic waves, waves on a rope, water waves.' },
      { n: 2, f: 'Longitudinal wave', b: 'The oscillations are parallel to the direction of energy transfer. Compressions and rarefactions. Examples: sound, ultrasound.' },
      { n: 3, f: 'How can a slinky spring show both types of wave?', b: 'Pushed and pulled along its length: longitudinal (compressions and rarefactions). Moved side to side: transverse.' },
      { n: 4, f: 'How is a ripple tank used to measure the speed of water waves?', b: 'A stroboscope flashing at the wave frequency "freezes" the pattern so λ can be measured (across several waves, then divided). Then v = fλ.' },
      { n: 5, f: 'Which type of wave can be polarised?', b: 'Only transverse waves. A longitudinal wave oscillates only along its direction of travel, so there is no plane to select.' },
    ]),
    ...sub('as-waves', 'as-doppler-effect-for-sound-waves', '7.3', [
      { n: 1, f: 'Doppler equation for a moving source and a stationary observer', b: 'f₀ = fₛv ÷ (v ± vₛ), where v is the wave speed and vₛ the source speed.\nSource approaching: minus (higher observed frequency).\nSource receding: plus (lower observed frequency).' },
      { n: 2, f: 'Explain why an approaching siren sounds higher pitched', b: 'The wavefronts ahead of the moving source are bunched together, so the observed wavelength is shorter and the observed frequency higher. The source frequency itself is unchanged.' },
      { n: 3, f: 'A 500 Hz horn approaches at 20 m s⁻¹ (sound speed 340 m s⁻¹). Find the observed frequency.', b: 'f₀ = 500 × 340 ÷ (340 − 20) = 500 × 340 ÷ 320 = 531 Hz.' },
      { n: 4, f: 'The same 500 Hz horn moves away at 20 m s⁻¹ (sound speed 340 m s⁻¹). Find the observed frequency.', b: 'f₀ = 500 × 340 ÷ (340 + 20) = 500 × 340 ÷ 360 = 472 Hz.' },
    ]),
    ...sub('as-waves', 'as-electromagnetic-spectrum', '7.4', [
      { n: 1, f: 'The electromagnetic spectrum in order of decreasing wavelength', b: 'Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma. Frequency increases in the same order.' },
      { n: 2, f: 'Properties shared by all electromagnetic waves', b: 'They are transverse and travel at the same speed in a vacuum, c = 3.00 × 10⁸ m s⁻¹.' },
      { n: 3, f: 'Wavelength range of visible light', b: '400 nm (violet) to 700 nm (red).' },
      { n: 4, f: 'Approximate wavelengths of microwaves, infrared and ultraviolet', b: 'Microwaves: about 1 mm to 0.1 m.\nInfrared: about 700 nm to 1 mm.\nUltraviolet: about 10 nm to 400 nm.\n(The boundaries are not sharp.)' },
      { n: 5, f: 'Approximate wavelengths of radio waves, X-rays and gamma rays', b: 'Radio: longer than about 0.1 m.\nX-rays: about 10 pm to 10 nm.\nGamma rays: shorter than about 10 pm.\n(The regions overlap at their boundaries.)' },
    ]),
    ...sub('as-waves', 'as-polarisation', '7.5', [
      { n: 1, f: 'Polarisation', b: 'Restricting the oscillations of a transverse wave to a single plane (containing the direction of travel).' },
      { n: 2, f: 'Malus’s law', b: 'I = I₀ cos²θ, for plane-polarised light of intensity I₀ passing through a polarising filter whose transmission axis is at θ to the plane of polarisation.' },
      { n: 3, f: 'Plane-polarised light of 12 W m⁻² meets a filter at 60° to its plane of polarisation. Find the transmitted intensity.', b: 'I = 12 × cos²60° = 12 × 0.25 = 3.0 W m⁻².' },
      { n: 4, f: 'What intensity passes through two crossed polarisers (at 90°)?', b: 'Zero: cos²90° = 0 exactly.' },
      { n: 5, f: 'Why can light be polarised but sound cannot?', b: 'Light is transverse, so it can oscillate in many planes and one can be selected. Sound is longitudinal: its oscillation is along the direction of travel, so there is no plane to filter.' },
    ]),

    // 8 Superposition
    ...sub('as-superposition', 'as-stationary-waves', '8.1', [
      { n: 1, f: 'How is a stationary wave formed?', b: 'Two waves of the same frequency (and amplitude) travelling in opposite directions superpose, usually a wave and its reflection.' },
      { n: 2, f: 'Node and antinode', b: 'Node: a point of zero amplitude (destructive superposition).\nAntinode: a point of maximum amplitude.' },
      { n: 3, f: 'Distance between adjacent nodes', b: 'λ ÷ 2 (half a wavelength), not λ. The same for adjacent antinodes.' },
      { n: 4, f: 'Three differences between progressive and stationary waves', b: 'Progressive: transfers energy; same amplitude everywhere; phase varies continuously along the wave.\nStationary: no energy transfer; amplitude varies from zero at nodes to a maximum at antinodes; points between adjacent nodes are in phase.' },
      { n: 5, f: 'Fundamental frequency of a string fixed at both ends', b: 'A node at each end and one antinode in the middle: L = λ ÷ 2, so f = v ÷ 2L.' },
      { n: 6, f: 'Fundamental of an air column closed at one end (end correction neglected)', b: 'A node at the closed end and an antinode at the open end: L = λ ÷ 4. A pipe closed at one end supports only odd harmonics.' },
    ]),
    ...sub('as-superposition', 'as-diffraction', '8.2', [
      { n: 1, f: 'Diffraction', b: 'The spreading of a wave as it passes through a gap or around an obstacle.' },
      { n: 2, f: 'When is diffraction most noticeable?', b: 'When the gap width is comparable to the wavelength. A gap much wider than the wavelength gives little spreading.' },
      { n: 3, f: 'Why does sound diffract around a doorway but light does not noticeably?', b: 'Sound wavelengths (around a metre) are comparable to the doorway width; light wavelengths (400–700 nm) are far smaller.' },
      { n: 4, f: 'How is diffraction shown in a ripple tank?', b: 'Straight wavefronts pass through a gap in a barrier. With a narrow gap (comparable to λ) they spread out into circular wavefronts; with a wide gap they barely spread. The wavelength is unchanged.' },
    ]),
    ...sub('as-superposition', 'as-interference', '8.3', [
      { n: 1, f: 'Principle of superposition', b: 'When two or more waves meet at a point, the resultant displacement is the vector sum of the individual displacements.' },
      { n: 2, f: 'Coherence', b: 'Two sources are coherent if they have a constant phase difference (which needs the same frequency). It is needed for a stable interference pattern.' },
      { n: 3, f: 'Path difference for constructive interference (sources in phase)', b: 'nλ, a whole number of wavelengths.', src: SUP },
      { n: 4, f: 'Path difference for destructive interference (sources in phase)', b: '(n + ½)λ, an odd number of half-wavelengths.', src: SUP },
      { n: 5, f: 'Young’s double-slit equation', b: 'λ = ax ÷ D\na: slit separation\nx: fringe spacing\nD: slit-to-screen distance' },
      { n: 6, f: 'Why do two separate lamps of the same colour not give a stable interference pattern?', b: 'They are not coherent: there is no constant phase relationship between them, so any pattern shifts randomly. A single source split by two slits is used instead.' },
    ]),
    ...sub('as-superposition', 'as-the-diffraction-grating', '8.4', [
      { n: 1, f: 'Diffraction grating equation', b: 'd sin θ = nλ, where d is the slit spacing (d = 1 ÷ number of lines per metre), θ the angle of the nth-order maximum from the straight-through direction.' },
      { n: 2, f: 'How do you find the highest order a grating can produce?', b: 'Set sin θ = 1: n = d ÷ λ, then round down to a whole number.' },
      { n: 3, f: 'A grating has 500 lines per mm and λ = 600 nm. How many orders can be seen on each side?', b: 'd = 1 ÷ 500 000 = 2.0 × 10⁻⁶ m. d ÷ λ = 3.3, so the highest order is 3.' },
      { n: 4, f: 'Light of 589 nm falls on a grating of 600 lines per mm. Find the first-order angle.', b: 'd = 1.67 × 10⁻⁶ m. sin θ = 589 × 10⁻⁹ ÷ 1.67 × 10⁻⁶ = 0.353, so θ = 20.7°.' },
      { n: 5, f: 'Why is a grating better than a double slit for measuring wavelength?', b: 'Many slits contribute, so the maxima are much sharper and narrower and their angles can be measured more precisely.' },
    ]),

    // 9 Electricity
    ...sub('as-electricity', 'as-electric-current', '9.1', [
      { n: 1, f: 'Electric current', b: 'The rate of flow of charge: I = Q ÷ t, so Q = It. Unit A; one coulomb is the charge passing when 1 A flows for 1 s.' },
      { n: 2, f: 'What does it mean that charge is quantised?', b: 'Charge on charge carriers comes only in whole-number multiples of the elementary charge e = 1.60 × 10⁻¹⁹ C.' },
      { n: 3, f: 'A current of 2.0 A flows for 3.0 minutes. How much charge passes?', b: 'Q = It = 2.0 × 180 = 360 C.' },
      { n: 4, f: 'I = Anvq: what does each symbol mean?', b: 'A: cross-sectional area.\nn: number density of charge carriers (per m³).\nv: mean drift velocity.\nq: charge on each carrier.' },
      { n: 5, f: 'The same current flows through a thick and a thin section of a wire. Where is the drift velocity higher?', b: 'In the thin section: with I and n fixed, a smaller A means a larger v (I = Anvq).' },
    ]),
    ...sub('as-electricity', 'as-potential-difference-and-power', '9.2', [
      { n: 1, f: 'Potential difference', b: 'The energy transferred (work done) per unit charge as charge passes between two points: V = W ÷ Q. 1 V = 1 J C⁻¹.' },
      { n: 2, f: 'Three expressions for electrical power', b: 'P = VI = I²R = V² ÷ R.' },
      { n: 3, f: 'Electrical energy transferred in time t', b: 'W = VIt (from W = VQ and Q = It).' },
      { n: 4, f: 'A 12 V supply drives 2.0 A for 5.0 minutes. How much energy is transferred?', b: 'W = VIt = 12 × 2.0 × 300 = 7200 J.' },
      { n: 5, f: 'A 60 W lamp runs on 230 V. Find the current.', b: 'I = P ÷ V = 60 ÷ 230 = 0.26 A.' },
    ]),
    ...sub('as-electricity', 'as-resistance-and-resistivity', '9.3', [
      { n: 1, f: 'Resistance', b: 'The ratio of potential difference to current: R = V ÷ I. Unit ohm (Ω = V A⁻¹).' },
      { n: 2, f: 'Ohm’s law', b: 'The current in a conductor is directly proportional to the potential difference across it, provided physical conditions, especially temperature, stay constant.' },
      { n: 3, f: 'Filament lamp I–V characteristic', b: 'A curve whose gradient falls as V rises. The filament heats up, lattice ions vibrate more, electrons collide more often, so resistance increases.', src: ELEC },
      { n: 4, f: 'Semiconductor diode I–V characteristic', b: 'Almost zero current until about 0.6 V in forward bias, then a steep rise. Negligible current in reverse bias.', src: ELEC },
      { n: 5, f: 'NTC thermistor and LDR: how does each one’s resistance change?', b: 'Thermistor: resistance falls as temperature rises.\nLDR: resistance falls as light intensity rises.\nIn both, more charge carriers are released.', src: ELEC },
      { n: 6, f: 'Resistivity equation and unit', b: 'R = ρL ÷ A, where ρ is the resistivity of the material. Unit Ω m (not Ω/m). Resistivity is a property of the material, not of the wire’s shape.' },
    ]),

    // 10 D.C. circuits
    ...sub('as-dc-circuits', 'as-practical-circuits', '10.1', [
      { n: 1, f: 'Electromotive force (e.m.f.)', b: 'The energy transferred per unit charge from other forms (such as chemical) to electrical, in driving charge round a complete circuit.' },
      { n: 2, f: 'e.m.f. vs potential difference', b: 'e.m.f.: energy transferred to each unit charge by the source.\np.d.: energy transferred from each unit charge into other forms in a component.\nBoth are measured in volts.' },
      { n: 3, f: 'Equation linking e.m.f., terminal p.d. and internal resistance', b: 'E = I(R + r) = V + Ir, so the terminal p.d. V = E − Ir. Ir is the "lost volts" inside the source.' },
      { n: 4, f: 'Why does the terminal p.d. of a cell fall as the current increases?', b: 'More energy per unit charge is dissipated in the internal resistance (Ir increases), so less is available at the terminals. That is why headlights dim when a starter motor runs.' },
      { n: 5, f: 'Terminal p.d. V plotted against current I: what do the gradient and intercept give?', b: 'Gradient = −r (the internal resistance). Intercept on the V axis = E (the e.m.f.).' },
      { n: 6, f: 'Circuit symbols: cell and capacitor', b: 'Cell: two parallel lines of unequal length (long line = positive).\nCapacitor: two parallel lines of equal length.', src: DC },
    ]),
    ...sub('as-dc-circuits', 'as-kirchhoffs-laws', '10.2', [
      { n: 1, f: 'Kirchhoff’s first law, and what it is a consequence of', b: 'The sum of the currents into a junction equals the sum of the currents out. A consequence of conservation of charge.' },
      { n: 2, f: 'Kirchhoff’s second law, and what it is a consequence of', b: 'Around any closed loop, the sum of the e.m.f.s equals the sum of the p.d.s. A consequence of conservation of energy.' },
      { n: 3, f: 'Derive the formula for resistors in series', b: 'The same current I flows through each. By the second law, V = V₁ + V₂, so IR = IR₁ + IR₂, giving R = R₁ + R₂.' },
      { n: 4, f: 'Derive the formula for resistors in parallel', b: 'Each has the same p.d. V. By the first law, I = I₁ + I₂, so V ÷ R = V ÷ R₁ + V ÷ R₂, giving 1/R = 1/R₁ + 1/R₂.' },
      { n: 5, f: 'Find the combined resistance of 6.0 Ω and 3.0 Ω in parallel.', b: '1/R = 1/6.0 + 1/3.0 = 3/6.0, so R = 2.0 Ω, less than either resistor.' },
      { n: 6, f: 'What happens to the total resistance when another resistor is added in parallel?', b: 'It decreases, because there is an extra path for current: more current flows for the same p.d.' },
    ]),
    ...sub('as-dc-circuits', 'as-potential-dividers', '10.3', [
      { n: 1, f: 'Output of a potential divider', b: 'Vout = Vin × R₂ ÷ (R₁ + R₂), where R₂ is the resistor the output is taken across. The supply p.d. is shared in the ratio of the resistances.' },
      { n: 2, f: '12 V across a fixed 2.0 kΩ resistor and a 6.0 kΩ thermistor in series. Find the p.d. across the thermistor.', b: 'Vout = 12 × 6.0 ÷ (2.0 + 6.0) = 9.0 V.' },
      { n: 3, f: 'The output is taken across an NTC thermistor in a potential divider. The temperature rises. What happens to Vout?', b: 'The thermistor’s resistance falls, so its share of the total resistance falls and Vout falls.' },
      { n: 4, f: 'An LDR is in the lower position of a potential divider, with the output across it. It is illuminated. What happens to Vout?', b: 'The LDR’s resistance falls, so its share of the total resistance falls and Vout decreases.' },
      { n: 5, f: 'Potentiometer and null method: how are two p.d.s compared?', b: 'Move the contact along the potentiometer until a galvanometer shows zero current (balance). No current is drawn from the p.d. being measured, so the measurement does not disturb the circuit.' },
    ]),

    // 11 Particle physics
    ...sub('as-particle-physics', 'as-atoms-nuclei-and-radiation', '11.1', [
      { n: 1, f: 'What did the alpha-particle scattering experiment show?', b: 'Most alpha particles pass straight through a thin gold foil, but a very few are deflected through large angles. So the mass and positive charge of an atom are concentrated in a tiny, dense nucleus.' },
      { n: 2, f: 'Nucleon number and proton number', b: 'Nucleon number A: protons + neutrons.\nProton number Z: protons only.\nA nuclide is written with A as the superscript and Z as the subscript before the symbol.' },
      { n: 3, f: 'Composition, mass and charge of α, β⁻, β⁺ and γ radiation', b: 'α: 2 protons + 2 neutrons (helium nucleus), 4 u, +2e.\nβ⁻: electron, about 0 u, −e.\nβ⁺: positron, about 0 u, +e.\nγ: electromagnetic radiation, no mass, no charge.' },
      { n: 4, f: 'Balance the alpha decay of uranium-238 (Z = 92) to thorium', b: '²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂α. Nucleon number: 238 = 234 + 4. Proton number: 92 = 90 + 2.' },
      { n: 5, f: 'What extra particle is emitted in β⁻ decay, and in β⁺ decay?', b: 'β⁻: an electron antineutrino.\nβ⁺: an electron neutrino. (The positron emitted in β⁺ decay is the antiparticle of the electron: same mass, opposite charge.)' },
      { n: 6, f: 'Why do α particles have discrete energies but β particles a continuous range?', b: 'In β decay the released energy is shared in a variable proportion between the β particle and the (anti)neutrino. In α decay the fixed energy release is shared between just two bodies.' },
    ]),
    ...sub('as-particle-physics', 'as-fundamental-particles', '11.2', [
      { n: 1, f: 'The six quark flavours, and the charges of up, down and strange', b: 'Flavours: up, down, strange, charm, top, bottom.\nUp: +⅔e.\nDown: −⅓e.\nStrange: −⅓e.\nTheir antiquarks have the opposite charges.' },
      { n: 2, f: 'Quark composition of the proton and neutron, with a charge check', b: 'Proton uud: +⅔ + ⅔ − ⅓ = +1.\nNeutron udd: +⅔ − ⅓ − ⅓ = 0.\nSo protons and neutrons are not fundamental.' },
      { n: 3, f: 'Baryons', b: 'Hadrons made of three quarks, for example the proton and the neutron.', src: PART },
      { n: 4, f: 'Mesons', b: 'Hadrons made of one quark and one antiquark, for example the pion and the kaon.', src: PART },
      { n: 5, f: 'Leptons', b: 'Fundamental particles such as the electron and the neutrino. They are not made of quarks and are not hadrons.' },
      { n: 6, f: 'Quark change in β⁻ decay and in β⁺ decay', b: 'β⁻: a down quark changes to an up quark (n → p + e⁻ + antineutrino).\nβ⁺: an up quark changes to a down quark (p → n + e⁺ + neutrino).' },
    ]),

    // 12 Motion in a circle
    ...sub('a-motion-in-a-circle', 'a-kinematics-of-uniform-circular-motion', '12.1', [
      { n: 1, f: 'The radian', b: 'The angle subtended at the centre of a circle by an arc equal in length to the radius. Angle in radians = arc length ÷ radius.' },
      { n: 2, f: 'Converting between degrees and radians', b: '360° = 2π rad, so θ (rad) = θ (degrees) × π ÷ 180. 1 rad ≈ 57.3°.' },
      { n: 3, f: 'Angular speed', b: 'The rate of change of angle swept out: ω = θ ÷ t = 2π ÷ T = 2πf. Unit rad s⁻¹.' },
      { n: 4, f: 'Relationship between linear speed and angular speed', b: 'v = rω, with ω in rad s⁻¹.' },
      { n: 5, f: 'A wheel of radius 0.30 m turns at 5.0 revolutions per second. Find ω and the rim speed.', b: 'ω = 2π × 5.0 = 31.4 rad s⁻¹.\nv = rω = 0.30 × 31.4 = 9.4 m s⁻¹.' },
    ]),
    ...sub('a-motion-in-a-circle', 'a-centripetal-acceleration', '12.2', [
      { n: 1, f: 'Why is an object moving in a circle at constant speed accelerating?', b: 'Its direction keeps changing, so its velocity (a vector) changes even though its speed is constant.' },
      { n: 2, f: 'Centripetal acceleration and force', b: 'a = v² ÷ r = rω².\nF = mv² ÷ r = mrω².\nBoth are directed towards the centre of the circle.' },
      { n: 3, f: 'Is centripetal force an extra force on a free-body diagram?', b: 'No. It is the resultant of the real forces acting, for example tension (ball on a string), friction (car on a flat bend) or gravity (planet in orbit).' },
      { n: 4, f: 'Why does a centripetal force do no work?', b: 'It is perpendicular to the velocity at every instant, so there is no displacement along it. The kinetic energy stays constant.' },
      { n: 5, f: 'Minimum speed at the top of a vertical circle (mass on a string)', b: 'At minimum speed the tension is zero and weight alone provides the centripetal force: mg = mv² ÷ r, so v = √(gr).' },
      { n: 6, f: 'Tension at the top and bottom of a vertical circle', b: 'Top: T + mg = mv² ÷ r.\nBottom: T − mg = mv² ÷ r.\nThe tension is greatest at the bottom.' },
    ]),

    // 13 Gravitational fields
    ...sub('a-gravitational-fields', 'a-gravitational-field', '13.1', [
      { n: 1, f: 'Gravitational field', b: 'A region of space in which a mass experiences a force due to another mass. A field of force.' },
      { n: 2, f: 'What do gravitational field lines show?', b: 'The direction of the force on a small test mass. They are drawn closer together where the field is stronger.' },
      { n: 3, f: 'Field-line pattern around an isolated spherical mass', b: 'Radial lines pointing in towards the centre of the mass, getting further apart with distance (the field weakens).' },
      { n: 4, f: 'Field-line pattern close to the Earth’s surface', b: 'Parallel, equally spaced lines pointing vertically down: the field is approximately uniform over small height changes.' },
    ]),
    ...sub('a-gravitational-fields', 'a-gravitational-force-between-point-masses', '13.2', [
      { n: 1, f: 'Newton’s law of gravitation', b: 'F = Gm₁m₂ ÷ r², an attractive force between two point masses, where r is the distance between their centres. G = 6.67 × 10⁻¹¹ N m² kg⁻².' },
      { n: 2, f: 'The separation of two masses doubles. What happens to the gravitational force?', b: 'It falls to a quarter: an inverse square law, F ∝ 1/r².' },
      { n: 3, f: 'Derive the orbital speed of a satellite in a circular orbit', b: 'Gravity provides the centripetal force: GMm ÷ r² = mv² ÷ r, so v = √(GM ÷ r). The satellite’s mass m cancels.' },
      { n: 4, f: 'Derive T² ∝ r³ for a circular orbit', b: 'v² = GM ÷ r and v = 2πr ÷ T, so 4π²r² ÷ T² = GM ÷ r, giving T² = (4π² ÷ GM) r³.' },
      { n: 5, f: 'Three conditions for a geostationary orbit', b: 'Period of 24 hours; orbiting west to east (the same direction as the Earth spins); directly above the Equator. Radius about 42 000 km from the Earth’s centre.' },
    ]),
    ...sub('a-gravitational-fields', 'a-gravitational-field-of-a-point-mass', '13.3', [
      { n: 1, f: 'Gravitational field strength', b: 'The force per unit mass on a small test mass placed at that point: g = F ÷ m. Unit N kg⁻¹. A vector.' },
      { n: 2, f: 'Field strength of a point mass M', b: 'g = GM ÷ r², with r measured from the centre of the mass. For a satellite at height h above a planet of radius R, r = R + h.' },
      { n: 3, f: 'Why can g = GM/r² be used for the field at the Earth’s surface?', b: 'Outside a uniform sphere, the mass acts as if concentrated at its centre. Near the surface r ≈ R, so g is roughly constant.' },
      { n: 4, f: 'Earth: M = 5.97 × 10²⁴ kg, R = 6.37 × 10⁶ m. Find g at the surface.', b: 'g = GM ÷ R² = (6.67 × 10⁻¹¹ × 5.97 × 10²⁴) ÷ (6.37 × 10⁶)² = 9.8 N kg⁻¹.' },
      { n: 5, f: 'A planet has mass 6.4 × 10²³ kg and radius 3.4 × 10⁶ m. Find g at its surface.', b: 'g = (6.67 × 10⁻¹¹ × 6.4 × 10²³) ÷ (3.4 × 10⁶)² = 3.7 N kg⁻¹.' },
    ]),
    ...sub('a-gravitational-fields', 'a-gravitational-potential', '13.4', [
      { n: 1, f: 'Gravitational potential', b: 'The work done per unit mass in bringing a small test mass from infinity to that point. φ = −GM ÷ r. Unit J kg⁻¹. A scalar.' },
      { n: 2, f: 'Why is gravitational potential always negative?', b: 'It is defined as zero at infinity, and gravity is attractive: work must be done on a mass to move it out to infinity, so at any finite distance the potential is below zero.' },
      { n: 3, f: 'Gravitational potential energy of a mass m at distance r from M', b: 'Ep = mφ = −GMm ÷ r.' },
      { n: 4, f: 'How does gravitational potential change as r increases?', b: 'It increases (becomes less negative), approaching zero at infinity.' },
      { n: 5, f: 'Field strength vs potential for a point mass', b: 'g = GM/r²: a vector, falls off as 1/r².\nφ = −GM/r: a scalar, falls off as 1/r.\ng = −dφ/dr: field strength is minus the potential gradient.' },
    ]),

    // 14 Temperature
    ...sub('a-temperature', 'a-thermal-equilibrium', '14.1', [
      { n: 1, f: 'In which direction is thermal energy transferred?', b: 'From a region of higher temperature to a region of lower temperature, not from higher to lower internal energy.' },
      { n: 2, f: 'Thermal equilibrium', b: 'Two bodies are in thermal equilibrium when there is no net transfer of thermal energy between them. This happens when they are at the same temperature.' },
      { n: 3, f: 'Why does a thermometer read the temperature of the body it touches?', b: 'Once thermal equilibrium is reached there is no net energy flow, so the thermometer is at the same temperature as the body.' },
      { n: 4, f: 'Are temperature and thermal energy the same thing?', b: 'No. A large bath of warm water can hold far more thermal energy than a cup of boiling water, yet energy flows from the cup to the bath if they are in contact.' },
    ]),
    ...sub('a-temperature', 'a-temperature-scales', '14.2', [
      { n: 1, f: 'Physical properties that vary with temperature and can be used to measure it', b: 'For example: the density of a liquid, the volume of a gas at constant pressure, the resistance of a metal, the e.m.f. of a thermocouple.' },
      { n: 2, f: 'What is special about the thermodynamic (Kelvin) scale?', b: 'It is an absolute scale that does not depend on the property of any particular substance. Two empirical thermometers can agree at the fixed points yet disagree between them.' },
      { n: 3, f: 'Absolute zero, 0 K', b: 'The temperature at which all substances have minimum internal energy.', src: TEMP },
      { n: 4, f: 'Converting between kelvin and degrees Celsius', b: 'T/K = θ/°C + 273.15.' },
      { n: 5, f: 'Is a temperature change of 15 °C the same as a change of 15 K?', b: 'Yes. Intervals are the same size on both scales; only absolute temperatures differ (by 273.15). T must still be in kelvin in pV = nRT.' },
      { n: 6, f: 'Triple point of water, 273.16 K', b: 'The unique temperature and pressure at which ice, water and water vapour coexist in equilibrium.', src: TEMP },
    ]),
    ...sub('a-temperature', 'a-specific-heat-capacity-and-specific-latent-heat', '14.3', [
      { n: 1, f: 'Specific heat capacity', b: 'The energy needed per unit mass to raise the temperature by one degree (1 K), without a change of state. Q = mcΔθ. Unit J kg⁻¹ K⁻¹.' },
      { n: 2, f: 'How much energy heats 500 g of water (c = 4200 J kg⁻¹ K⁻¹) from 20 °C to 80 °C?', b: 'Q = mcΔθ = 0.500 × 4200 × 60 = 126 000 J.' },
      { n: 3, f: 'Specific latent heat', b: 'The energy needed per unit mass to change the state of a substance without a change of temperature. Q = mL. Unit J kg⁻¹.' },
      { n: 4, f: 'Specific latent heat of fusion vs of vaporisation', b: 'Fusion: solid ↔ liquid (melting or freezing).\nVaporisation: liquid ↔ gas (boiling or condensing).' },
      { n: 5, f: 'Why is the specific latent heat of vaporisation larger than that of fusion?', b: 'Boiling must separate the molecules completely, overcoming the intermolecular forces, and also do work pushing back the atmosphere. Melting only loosens the forces.' },
      { n: 6, f: 'Why is the temperature constant on a heating or cooling curve during a change of state?', b: 'The energy transferred changes the potential energy of the molecules (latent heat), not their mean kinetic energy.' },
    ]),

    // 15 Ideal gases
    ...sub('a-ideal-gases', 'a-the-mole', '15.1', [
      { n: 1, f: 'Amount of substance', b: 'A fundamental (SI base) quantity, measured in moles (mol).' },
      { n: 2, f: 'Avogadro constant', b: 'Nₐ = 6.02 × 10²³ mol⁻¹: the number of particles in one mole of any substance.' },
      { n: 3, f: 'How many molecules are in 0.50 mol of gas?', b: 'N = nNₐ = 0.50 × 6.02 × 10²³ = 3.01 × 10²³.' },
      { n: 4, f: 'How is the Boltzmann constant related to the molar gas constant?', b: 'k = R ÷ Nₐ = 8.31 ÷ 6.02 × 10²³ = 1.38 × 10⁻²³ J K⁻¹.' },
    ]),
    ...sub('a-ideal-gases', 'a-equation-of-state', '15.2', [
      { n: 1, f: 'Ideal gas', b: 'A gas that obeys pV = nRT at all pressures, volumes and temperatures.' },
      { n: 2, f: 'pV = nRT and pV = NkT: what do n and N count?', b: 'n: number of moles (R = 8.31 J mol⁻¹ K⁻¹).\nN: number of molecules (k = 1.38 × 10⁻²³ J K⁻¹).\nT is the thermodynamic temperature, in kelvin.' },
      { n: 3, f: '2.0 mol of an ideal gas at 300 K occupies 0.020 m³. Find its pressure.', b: 'p = nRT ÷ V = (2.0 × 8.31 × 300) ÷ 0.020 = 2.49 × 10⁵ Pa.' },
      { n: 4, f: 'Boyle’s law, Charles’s law and the pressure law as special cases of pV = nRT', b: 'Constant T: p ∝ 1/V.\nConstant p: V ∝ T.\nConstant V: p ∝ T.\n(Fixed mass of gas, T in kelvin.)' },
      { n: 5, f: 'A fixed mass of gas at 1.0 × 10⁵ Pa, 2.0 × 10⁻³ m³, 300 K goes to 1.0 × 10⁻³ m³ and 350 K. Find the new pressure.', b: 'p₁V₁/T₁ = p₂V₂/T₂, so p₂ = (1.0 × 10⁵ × 2.0 × 10⁻³ × 350) ÷ (1.0 × 10⁻³ × 300) = 2.33 × 10⁵ Pa.' },
    ]),
    ...sub('a-ideal-gases', 'a-kinetic-theory-of-gases', '15.3', [
      { n: 1, f: 'Assumptions of the kinetic theory of gases', b: 'Many molecules in random motion; molecular volume negligible compared with the container; no intermolecular forces except during collisions; collisions perfectly elastic; collision time negligible compared with the time between collisions.' },
      { n: 2, f: 'How do moving molecules cause gas pressure?', b: 'Molecules collide with the walls and rebound, so their momentum changes. The walls exert a force to change it, and the molecules exert an equal and opposite force on the walls. Pressure = total force ÷ area.' },
      { n: 3, f: 'Kinetic theory equation for pressure', b: 'pV = ⅓Nm⟨c²⟩, where N is the number of molecules, m the mass of one molecule and ⟨c²⟩ the mean-square speed.' },
      { n: 4, f: 'Mean translational kinetic energy of a gas molecule', b: 'Comparing pV = ⅓Nm⟨c²⟩ with pV = NkT gives ½m⟨c²⟩ = (3/2)kT. It depends only on the thermodynamic temperature, not on the gas: helium and xenon at the same T have equal mean KE.' },
      { n: 5, f: 'Find the r.m.s. speed of nitrogen molecules (M = 0.028 kg mol⁻¹) at 300 K.', b: 'c_rms = √(3RT ÷ M) = √(3 × 8.31 × 300 ÷ 0.028) = 517 m s⁻¹.' },
      { n: 6, f: 'When do real gases deviate most from ideal behaviour, and why?', b: 'At high pressure and low temperature: the molecules are close together, so their own volume and the intermolecular attractions are no longer negligible.' },
    ]),

    // 16 Thermodynamics
    ...sub('a-thermodynamics', 'a-internal-energy', '16.1', [
      { n: 1, f: 'Internal energy', b: 'The sum of the random distribution of kinetic and potential energies of the molecules in a system.' },
      { n: 2, f: 'What does each component of internal energy depend on?', b: 'Kinetic: the temperature.\nPotential: the separation of the molecules, so it changes during a change of state.' },
      { n: 3, f: 'Why is the internal energy of an ideal gas purely kinetic?', b: 'An ideal gas has no intermolecular forces (except during collisions), so there is no molecular potential energy. Its internal energy depends only on temperature.' },
      { n: 4, f: 'What does a rise in the temperature of an object tell you about its internal energy?', b: 'Its internal energy has increased: the random kinetic energy of its molecules is greater.' },
      { n: 5, f: 'Internal energy is determined by the state of the system. What does that mean?', b: 'It depends only on the current state (for example temperature, pressure, volume), not on how that state was reached. Two routes between the same states give the same ΔU.' },
    ]),
    ...sub('a-thermodynamics', 'a-the-first-law-of-thermodynamics', '16.2', [
      { n: 1, f: 'First law of thermodynamics', b: 'ΔU = q + W\nΔU: increase in internal energy\nq: energy supplied to the system by heating\nW: work done on the system' },
      { n: 2, f: 'Work done when a gas changes volume at constant pressure', b: 'pΔV. For an expansion this is work done by the gas, so the work done on the gas is W = −pΔV. For a compression, work done on the gas is positive.' },
      { n: 3, f: 'A gas absorbs 500 J of heat and does 200 J of work expanding. Find ΔU.', b: 'Work done on the gas W = −200 J. ΔU = q + W = 500 − 200 = +300 J.' },
      { n: 4, f: 'A gas at a constant 1.0 × 10⁵ Pa is compressed by 2.0 × 10⁻³ m³. How much work is done on it?', b: 'W = pΔV = 1.0 × 10⁵ × 2.0 × 10⁻³ = 200 J, positive because work is done on the gas.' },
      { n: 5, f: 'Isothermal change of an ideal gas: ΔU and q', b: 'Constant temperature, so ΔU = 0 and q = −W.', src: THERMO },
      { n: 6, f: 'Adiabatic change: q and ΔU', b: 'No heat transfer, so q = 0 and ΔU = W.', src: THERMO },
    ]),

    // 17 Oscillations
    ...sub('a-oscillations', 'a-simple-harmonic-oscillations', '17.1', [
      { n: 1, f: 'Simple harmonic motion', b: 'Motion in which the acceleration is proportional to the displacement from a fixed point and always directed towards that point: a = −ω²x.' },
      { n: 2, f: 'Angular frequency of an oscillation', b: 'ω = 2πf = 2π ÷ T. Unit rad s⁻¹.' },
      { n: 3, f: 'When do you use x = x₀ sin ωt and when x = x₀ cos ωt?', b: 'x = x₀ sin ωt: timing starts at the equilibrium position.\nx = x₀ cos ωt: timing starts at maximum displacement.' },
      { n: 4, f: 'Speed in SHM at displacement x, and the maximum speed', b: 'v = ±ω√(x₀² − x²).\nMaximum v₀ = ωx₀, at the equilibrium position (x = 0).' },
      { n: 5, f: 'Amplitude 0.030 m, ω = 6.0 rad s⁻¹. Find the maximum acceleration.', b: 'a_max = ω²x₀ = 36 × 0.030 = 1.08 m s⁻², at maximum displacement.' },
      { n: 6, f: 'Phase relationships between displacement, velocity and acceleration in SHM', b: 'Velocity is 90° (π/2) out of phase with displacement.\nAcceleration is 180° (π) out of phase with displacement.' },
    ]),
    ...sub('a-oscillations', 'a-energy-in-simple-harmonic-motion', '17.2', [
      { n: 1, f: 'Total energy of a simple harmonic oscillator', b: 'E = ½mω²x₀². It is constant (no damping).' },
      { n: 2, f: 'Kinetic and potential energy at displacement x in SHM', b: 'Ek = ½mω²(x₀² − x²).\nEp = ½mω²x².\nThey add up to the constant total ½mω²x₀².' },
      { n: 3, f: 'Describe the energy interchange in one cycle of SHM', b: 'At equilibrium the energy is all kinetic; at maximum displacement it is all potential. Energy transfers back and forth twice per cycle; the total stays constant.' },
      { n: 4, f: 'A 0.20 kg mass oscillates with amplitude 0.050 m and ω = 4.0 rad s⁻¹. Find its total energy.', b: 'E = ½mω²x₀² = 0.5 × 0.20 × 4.0² × 0.050² = 4.0 × 10⁻³ J.' },
      { n: 5, f: 'Shape of graphs of Ek and Ep against displacement in SHM', b: 'Both are parabolas (they vary with x²): Ep is zero at x = 0, Ek is zero at x = ±x₀, and their sum is a horizontal line.' },
    ]),
    ...sub('a-oscillations', 'a-damped-and-forced-oscillations-resonance', '17.3', [
      { n: 1, f: 'Free, damped and forced oscillations', b: 'Free: at the natural frequency, with no external driving force (and ideally no energy loss).\nDamped: energy lost to resistive forces, so the amplitude falls.\nForced: driven by an external periodic force at the driving frequency.' },
      { n: 2, f: 'Light damping', b: 'The amplitude decays exponentially over many oscillations. The period is almost unchanged.', src: OSC },
      { n: 3, f: 'Critical damping', b: 'The system returns to equilibrium in the shortest time without oscillating. Used in car suspension.', src: OSC },
      { n: 4, f: 'Heavy (over) damping', b: 'The system returns to equilibrium slowly, without oscillating.', src: OSC },
      { n: 5, f: 'Resonance', b: 'When the driving frequency equals the natural frequency of the system, energy transfer is maximum and the amplitude of the forced oscillation is greatest.' },
      { n: 6, f: 'How does increasing damping change a resonance curve?', b: 'The peak amplitude is lower, the peak moves to a slightly lower frequency, and the curve becomes broader (flatter).' },
    ]),

    // 18 Electric fields
    ...sub('a-electric-fields', 'a-electric-fields-and-field-lines', '18.1', [
      { n: 1, f: 'Electric field', b: 'A region of space in which a charge experiences a force due to other charges. A field of force.' },
      { n: 2, f: 'Which way do electric field lines point?', b: 'In the direction of the force on a small positive test charge: away from positive charges, towards negative charges. Closer lines mean a stronger field.' },
      { n: 3, f: 'Field-line pattern around an isolated point charge', b: 'Radial lines: outward from a positive charge, inward to a negative charge, spreading apart with distance.' },
      { n: 4, f: 'Field-line pattern between two charged parallel plates', b: 'Parallel, equally spaced lines from the positive to the negative plate: a uniform field (with some curving at the edges).' },
    ]),
    ...sub('a-electric-fields', 'a-uniform-electric-fields', '18.2', [
      { n: 1, f: 'Field strength between charged parallel plates', b: 'E = V ÷ d, where V is the p.d. between the plates and d their separation. Unit V m⁻¹ (= N C⁻¹). It holds only for a uniform field.' },
      { n: 2, f: 'Plates 5.0 mm apart have a p.d. of 200 V. Find the field strength.', b: 'E = V ÷ d = 200 ÷ 0.0050 = 4.0 × 10⁴ V m⁻¹.' },
      { n: 3, f: 'A charged particle enters a uniform electric field at right angles to it. Describe its path.', b: 'A parabola, like a projectile: constant velocity across the field, constant acceleration a = qE ÷ m along it.' },
      { n: 4, f: 'An electron is accelerated from rest through 500 V. Find its speed.', b: 'eV = ½mv², so v = √(2eV ÷ m) = √(2 × 1.60 × 10⁻¹⁹ × 500 ÷ 9.11 × 10⁻³¹) = 1.33 × 10⁷ m s⁻¹.' },
      { n: 5, f: 'The electronvolt', b: 'The energy gained by an electron accelerated through a p.d. of 1 V: 1 eV = 1.60 × 10⁻¹⁹ J.' },
    ]),
    ...sub('a-electric-fields', 'a-electric-force-between-point-charges', '18.3', [
      { n: 1, f: 'Coulomb’s law', b: 'F = Qq ÷ (4πε₀r²): the force between two point charges is proportional to the product of the charges and inversely proportional to the square of their separation.' },
      { n: 2, f: 'Value of 1/(4πε₀), and the unit of ε₀', b: '1/(4πε₀) ≈ 8.99 × 10⁹ N m² C⁻². ε₀ = 8.85 × 10⁻¹² F m⁻¹.' },
      { n: 3, f: 'Two +2.0 μC point charges are 0.10 m apart. Find the force between them.', b: 'F = 8.99 × 10⁹ × (2.0 × 10⁻⁶)² ÷ 0.10² = 3.6 N, repulsive.' },
      { n: 4, f: 'Electric vs gravitational force between point objects', b: 'Both are inverse square laws. Gravity is always attractive; the electric force is attractive or repulsive, depending on the signs of the charges.' },
    ]),
    ...sub('a-electric-fields', 'a-electric-field-of-a-point-charge', '18.4', [
      { n: 1, f: 'Electric field strength', b: 'The force per unit positive charge on a small test charge at that point: E = F ÷ q. Unit N C⁻¹. A vector.' },
      { n: 2, f: 'Field strength of a point charge Q', b: 'E = Q ÷ (4πε₀r²), with r measured from the charge.' },
      { n: 3, f: 'Find the field strength 0.20 m from a point charge of +5.0 × 10⁻⁶ C.', b: 'E = 8.99 × 10⁹ × 5.0 × 10⁻⁶ ÷ 0.20² = 1.12 × 10⁶ N C⁻¹, directed radially outward.' },
      { n: 4, f: 'How is an isolated charged sphere treated for points outside it?', b: 'As a point charge at its centre, so r is measured from the centre, not the surface.' },
      { n: 5, f: 'Force on a charge q in a field of strength E', b: 'F = Eq, in the direction of E for a positive charge and opposite to E for a negative charge.' },
    ]),
    ...sub('a-electric-fields', 'a-electric-potential', '18.5', [
      { n: 1, f: 'Electric potential', b: 'The work done per unit positive charge in bringing a small test charge from infinity to that point. V = Q ÷ (4πε₀r). Unit V (J C⁻¹). A scalar.' },
      { n: 2, f: 'How does the sign of electric potential differ from gravitational potential?', b: 'Gravitational potential is always negative (gravity only attracts). Electric potential is positive near a positive charge and negative near a negative charge.' },
      { n: 3, f: 'Electric potential energy of a pair of point charges', b: 'Ep = Qq ÷ (4πε₀r), the work done bringing one charge from infinity to distance r from the other.' },
      { n: 4, f: 'Relationship between field strength and potential', b: 'E = −dV/dr: the field strength is minus the potential gradient. The field points towards decreasing potential.' },
      { n: 5, f: 'Equipotentials', b: 'Lines or surfaces of constant potential. They are perpendicular to field lines, and no work is done moving a charge along one.' },
    ]),

    // 19 Capacitance
    ...sub('a-capacitance', 'a-capacitors-and-capacitance', '19.1', [
      { n: 1, f: 'Capacitance', b: 'The charge stored per unit potential difference: C = Q ÷ V. Unit farad (1 F = 1 C V⁻¹).' },
      { n: 2, f: 'Capacitors in parallel and in series', b: 'Parallel: C = C₁ + C₂ + …\nSeries: 1/C = 1/C₁ + 1/C₂ + …\nThe opposite of the resistor rules.' },
      { n: 3, f: '4 μF and 12 μF capacitors: find the combined capacitance in series and in parallel.', b: 'Series: 1/C = 1/4 + 1/12 = 1/3, so 3 μF (less than the smallest).\nParallel: 4 + 12 = 16 μF (more than the largest).' },
      { n: 4, f: 'Derive the formula for capacitors in parallel', b: 'Each has the same p.d. V and the total charge is Q = Q₁ + Q₂. So CV = C₁V + C₂V, giving C = C₁ + C₂.' },
      { n: 5, f: 'Capacitance of an isolated conducting sphere of radius r', b: 'Its potential is V = Q ÷ (4πε₀r), so C = Q ÷ V = 4πε₀r.' },
      { n: 6, f: 'What happens when a capacitor is connected to a d.c. supply?', b: 'Charge flows briefly: one plate gains charge +Q and the other −Q. The current falls to zero when the p.d. across the capacitor equals the supply p.d.' },
    ]),
    ...sub('a-capacitance', 'a-energy-stored-in-a-capacitor', '19.2', [
      { n: 1, f: 'Energy stored in a capacitor', b: 'W = ½QV = ½CV² = ½Q² ÷ C.' },
      { n: 2, f: 'Why is the energy stored ½QV and not QV?', b: 'The p.d. rises from zero as charge is added, so the energy is the area under the potential–charge graph: a triangle, ½QV.' },
      { n: 3, f: 'A 100 μF capacitor is charged to 20 V. Find the energy stored.', b: 'W = ½CV² = 0.5 × 100 × 10⁻⁶ × 20² = 0.020 J.' },
      { n: 4, f: 'The p.d. across a capacitor doubles. What happens to the energy stored?', b: 'It quadruples, because W = ½CV² ∝ V².' },
    ]),
    ...sub('a-capacitance', 'a-discharging-a-capacitor', '19.3', [
      { n: 1, f: 'Equations for a capacitor discharging through a resistor', b: 'x = x₀e^(−t/RC), where x is the charge Q, the p.d. V or the current I. All three decay with the same time constant.' },
      { n: 2, f: 'Time constant', b: 'τ = RC (seconds, with R in Ω and C in F). After one time constant, Q, V and I have fallen to 1/e (about 37%) of their initial values.' },
      { n: 3, f: 'A 100 μF capacitor discharges through 10 kΩ. Find the time constant.', b: 'τ = RC = 10 000 × 100 × 10⁻⁶ = 1.0 s.' },
      { n: 4, f: 'How can RC be found from discharge data?', b: 'Plot ln Q (or ln V) against t. ln Q = ln Q₀ − t ÷ RC, so the line has gradient −1 ÷ RC.' },
      { n: 5, f: 'Half-life of a capacitor discharge', b: 't½ = RC ln 2 ≈ 0.69 RC.' },
    ]),

    // 20 Magnetic fields
    ...sub('a-magnetic-fields', 'a-concept-of-a-magnetic-field', '20.1', [
      { n: 1, f: 'Magnetic field', b: 'A region of space in which a magnet, a current-carrying conductor or a moving charge experiences a force. It is produced by moving charges (currents) or permanent magnets.' },
      { n: 2, f: 'Magnetic field lines outside a bar magnet', b: 'They run from the north pole to the south pole, form closed loops, and are closer together where the field is stronger.' },
      { n: 3, f: 'Magnetic flux density B: unit', b: 'The tesla (T). B is a measure of the strength of the magnetic field.' },
    ]),
    ...sub('a-magnetic-fields', 'a-force-on-a-current-carrying-conductor', '20.2', [
      { n: 1, f: 'Force on a current-carrying wire in a magnetic field', b: 'F = BIL sin θ, where θ is the angle between the wire (current) and the field. Maximum at 90°, zero when the wire is parallel to the field.' },
      { n: 2, f: 'The tesla', b: 'The flux density that gives a force of 1 N on each metre of a conductor carrying a current of 1 A at right angles to the field.' },
      { n: 3, f: 'Fleming’s left-hand rule', b: 'First finger: field.\nSecond finger: current (conventional).\nThumb: motion (force).\nAll at right angles to each other.' },
      { n: 4, f: 'A 0.20 m wire carries 5.0 A at right angles to a 0.30 T field. Find the force.', b: 'F = BIL = 0.30 × 5.0 × 0.20 = 0.30 N.' },
      { n: 5, f: 'Forces between two parallel current-carrying wires', b: 'Currents in the same direction: the wires attract.\nCurrents in opposite directions: they repel.\nEach wire is in the other’s magnetic field.' },
    ]),
    ...sub('a-magnetic-fields', 'a-force-on-a-moving-charge', '20.3', [
      { n: 1, f: 'Force on a charge moving in a magnetic field', b: 'F = BQv sin θ, where θ is the angle between the velocity and the field. For a negative charge, the conventional current is opposite to its velocity.' },
      { n: 2, f: 'Path of a charged particle moving at right angles to a uniform magnetic field', b: 'A circle. The force is always perpendicular to the velocity, so it does no work: the speed and kinetic energy stay constant.' },
      { n: 3, f: 'Radius of a charged particle’s circular path in a magnetic field', b: 'BQv = mv² ÷ r, so r = mv ÷ (BQ). Larger mass or speed: larger radius. Stronger field or larger charge: tighter circle.' },
      { n: 4, f: 'Hall voltage', b: 'V_H = BI ÷ (ntq): B flux density, I current, n charge-carrier number density, t thickness of the slice (in the direction of B), q carrier charge. It is proportional to B, so a Hall probe can measure B.' },
      { n: 5, f: 'Why is a semiconductor used in a Hall probe?', b: 'It has a small charge-carrier number density n, so V_H = BI ÷ (ntq) is larger and easier to measure.' },
      { n: 6, f: 'Velocity selector', b: 'Crossed electric and magnetic fields. Only particles for which the forces balance, qE = Bqv, pass undeflected: v = E ÷ B.' },
    ]),
    ...sub('a-magnetic-fields', 'a-magnetic-fields-due-to-currents', '20.4', [
      { n: 1, f: 'Magnetic field of a long straight wire', b: 'Concentric circles around the wire. The field is stronger with a larger current and weaker further from the wire.' },
      { n: 2, f: 'Magnetic field of a flat circular coil', b: 'Similar to that of a short bar magnet, with the field lines passing through the centre of the coil.' },
      { n: 3, f: 'Magnetic field of a long solenoid', b: 'Strong and uniform inside (parallel, equally spaced lines); outside it is like the field of a bar magnet.' },
      { n: 4, f: 'Effect of a ferrous (iron) core in a solenoid', b: 'The core becomes magnetised and greatly increases the flux density for the same current: the basis of an electromagnet.' },
    ]),
    ...sub('a-magnetic-fields', 'a-electromagnetic-induction', '20.5', [
      { n: 1, f: 'Magnetic flux and flux linkage', b: 'Flux Φ = BA cos θ, θ measured from the normal to the area (Wb).\nFlux linkage = NΦ for a coil of N turns.' },
      { n: 2, f: 'Faraday’s law', b: 'The magnitude of the induced e.m.f. is proportional to (equal to) the rate of change of magnetic flux linkage: E = −d(NΦ)/dt.' },
      { n: 3, f: 'Lenz’s law', b: 'The direction of the induced e.m.f. is such that it opposes the change producing it. It is the minus sign in Faraday’s law.' },
      { n: 4, f: 'Why is Lenz’s law a consequence of conservation of energy?', b: 'If the induced current helped the change, energy would be created from nothing. Because it opposes it, work must be done (for example, pushing a magnet in) to produce the electrical energy.' },
      { n: 5, f: 'A magnet is pushed into a coil connected to a centre-zero galvanometer, held still, then pulled out. What is seen?', b: 'In: a brief deflection.\nAt rest: no deflection (no change in flux linkage).\nOut: a deflection the other way.' },
      { n: 6, f: 'Three ways to increase the e.m.f. induced by moving a magnet into a coil', b: 'Move the magnet faster, use a stronger magnet, use more turns. Each increases the rate of change of flux linkage.' },
    ]),

    // 21 Alternating currents
    ...sub('a-alternating-currents', 'a-characteristics-of-alternating-currents', '21.1', [
      { n: 1, f: 'Equation for a sinusoidal alternating current', b: 'I = I₀ sin ωt, where I₀ is the peak current and ω = 2πf = 2π ÷ T.' },
      { n: 2, f: 'r.m.s. value of an alternating current', b: 'The value of the direct current that would dissipate the same mean power in the same resistor.' },
      { n: 3, f: 'r.m.s. and peak values for a sinusoidal supply', b: 'I_rms = I₀ ÷ √2 and V_rms = V₀ ÷ √2.' },
      { n: 4, f: 'Why is the mean current not used to describe an alternating current?', b: 'It spends equal time in each direction, so the mean over a cycle is zero. Squaring makes every value positive, so the mean of the squares reflects the power.' },
      { n: 5, f: 'Mean power vs peak power in a resistive load (sinusoidal a.c.)', b: 'Mean power is half the peak power: ⟨P⟩ = I_rms V_rms = ½I₀V₀.' },
      { n: 6, f: 'Mains is 230 V r.m.s. Find the peak voltage.', b: 'V₀ = 230 × √2 ≈ 325 V.' },
    ]),
    ...sub('a-alternating-currents', 'a-rectification-and-smoothing', '21.2', [
      { n: 1, f: 'Half-wave rectification', b: 'A single diode conducts on one half-cycle only. The output is a series of positive humps with flat gaps at zero between them.' },
      { n: 2, f: 'Full-wave rectification', b: 'Four diodes in a bridge. Both half-cycles give a positive hump (the negative half is inverted), so there are twice as many pulses and no gaps.' },
      { n: 3, f: 'How is a rectified output smoothed?', b: 'A capacitor in parallel with the load. It charges at each peak and discharges through the load between peaks, so the output falls only slightly before the next peak (ripple).' },
      { n: 4, f: 'How do capacitance and load resistance affect the ripple?', b: 'A larger capacitance or a larger load resistance gives a longer time constant RC, so the capacitor discharges more slowly and the ripple is smaller. The ripple is never zero.' },
    ]),

    // 22 Quantum physics
    ...sub('a-quantum-physics', 'a-energy-and-momentum-of-a-photon', '22.1', [
      { n: 1, f: 'Photon', b: 'A quantum (discrete packet) of electromagnetic energy. Electromagnetic radiation has a particulate nature.' },
      { n: 2, f: 'Energy of a photon', b: 'E = hf = hc ÷ λ, where h = 6.63 × 10⁻³⁴ J s.' },
      { n: 3, f: 'Momentum of a photon', b: 'p = E ÷ c = h ÷ λ.' },
      { n: 4, f: 'Find the momentum of a photon of wavelength 500 nm.', b: 'p = h ÷ λ = 6.63 × 10⁻³⁴ ÷ 500 × 10⁻⁹ = 1.33 × 10⁻²⁷ kg m s⁻¹.' },
      { n: 5, f: 'Find the wavelength of a photon of energy 2.0 eV.', b: 'E = 2.0 × 1.60 × 10⁻¹⁹ = 3.2 × 10⁻¹⁹ J. λ = hc ÷ E = (6.63 × 10⁻³⁴ × 3.00 × 10⁸) ÷ 3.2 × 10⁻¹⁹ = 6.2 × 10⁻⁷ m (622 nm).' },
    ]),
    ...sub('a-quantum-physics', 'a-photoelectric-effect', '22.2', [
      { n: 1, f: 'Work function and threshold frequency', b: 'Work function Φ: the minimum energy needed to remove an electron from the metal surface.\nThreshold frequency f₀: the minimum frequency for emission, Φ = hf₀.' },
      { n: 2, f: 'Photoelectric equation', b: 'hf = Φ + Ek(max): the photon energy provides the work function and the maximum kinetic energy of the emitted electron.' },
      { n: 3, f: 'Why does intense red light eject no electrons from a metal when faint blue light does?', b: 'One photon gives all its energy to one electron. Each red photon has less energy than Φ, and the energy is not accumulated, so more photons do not help.' },
      { n: 4, f: 'Why is Ek(max) independent of intensity, while the photoelectric current is proportional to it?', b: 'Ek(max) depends on the energy of each photon, which depends only on frequency. Higher intensity means more photons per second, so more electrons per second (a larger current).' },
      { n: 5, f: 'Φ = 2.0 eV; light of 8.0 × 10¹⁴ Hz. Find Ek(max) in eV.', b: 'hf = 6.63 × 10⁻³⁴ × 8.0 × 10¹⁴ = 5.30 × 10⁻¹⁹ J = 3.31 eV. Ek(max) = 3.31 − 2.0 = 1.31 eV.' },
      { n: 6, f: 'Threshold wavelength', b: 'The maximum wavelength that causes emission: λ₀ = hc ÷ Φ. Longer wavelengths (lower frequencies) cause no emission, whatever the intensity.' },
    ]),
    ...sub('a-quantum-physics', 'a-wave-particle-duality', '22.3', [
      { n: 1, f: 'Evidence that electromagnetic radiation has both wave and particle natures', b: 'Particle: the photoelectric effect.\nWave: interference and diffraction.\nSo light has a dual wave–particle nature.' },
      { n: 2, f: 'de Broglie wavelength', b: 'λ = h ÷ p = h ÷ mv: a moving particle has a wavelength set by its momentum.' },
      { n: 3, f: 'Evidence that electrons have wave properties', b: 'Electron diffraction: electrons passed through a thin graphite (crystal) film produce rings on a screen. Diffraction is a wave property.' },
      { n: 4, f: 'Find the de Broglie wavelength of an electron accelerated from rest through 100 V.', b: 'p = √(2meV) = √(2 × 9.11 × 10⁻³¹ × 1.60 × 10⁻¹⁹ × 100) = 5.4 × 10⁻²⁴ kg m s⁻¹. λ = h ÷ p = 1.2 × 10⁻¹⁰ m.' },
      { n: 5, f: 'Why do electrons diffract from crystals but everyday objects never show diffraction?', b: 'Electrons of a few hundred eV have wavelengths comparable to atomic spacing. Everyday objects have so much momentum that their wavelength is far smaller than any gap.' },
    ]),
    ...sub('a-quantum-physics', 'a-energy-levels-in-atoms-and-line-spectra', '22.4', [
      { n: 1, f: 'Electron energy levels in an isolated atom', b: 'Discrete (only certain values allowed) and negative, because zero energy is defined for an electron at infinity (free of the atom).' },
      { n: 2, f: 'Photon emitted or absorbed in a transition between levels', b: 'hf = E₁ − E₂: the photon energy equals exactly the difference between the two levels.' },
      { n: 3, f: 'Emission line', b: 'An electron falls from a higher to a lower energy level, emitting a photon of energy exactly ΔE.', src: QUANT },
      { n: 4, f: 'Absorption line', b: 'A photon of energy exactly ΔE is absorbed, lifting an electron to a higher energy level.', src: QUANT },
      { n: 5, f: 'Why do line spectra show that energy levels are discrete?', b: 'Only photons whose energy equals a difference between two levels are emitted or absorbed, so only certain wavelengths appear. Each element’s pattern is unique.' },
      { n: 6, f: 'An electron falls from −3.4 eV to −13.6 eV. Find the photon wavelength.', b: 'ΔE = 10.2 eV = 1.63 × 10⁻¹⁸ J. λ = hc ÷ ΔE = (6.63 × 10⁻³⁴ × 3.00 × 10⁸) ÷ 1.63 × 10⁻¹⁸ = 1.22 × 10⁻⁷ m (ultraviolet).' },
    ]),

    // 23 Nuclear physics
    ...sub('a-nuclear-physics', 'a-mass-defect-and-nuclear-binding-energy', '23.1', [
      { n: 1, f: 'Mass–energy equivalence', b: 'E = mc²: mass and energy are equivalent. In a nuclear reaction, the energy released is ΔE = Δmc², where Δm is the decrease in mass.' },
      { n: 2, f: 'Mass defect', b: 'The total mass of the separate nucleons minus the mass of the nucleus. The separate nucleons are heavier than the bound nucleus.' },
      { n: 3, f: 'Binding energy of a nucleus', b: 'The energy needed to separate a nucleus completely into its individual protons and neutrons. Binding energy = mass defect × c².' },
      { n: 4, f: 'Helium-4 nucleus 4.00150 u; proton 1.00728 u; neutron 1.00867 u (1 u = 931.5 MeV). Find the binding energy per nucleon.', b: 'Nucleons: 2(1.00728) + 2(1.00867) = 4.03190 u. Δm = 0.03040 u. Binding energy = 0.03040 × 931.5 = 28.3 MeV. Per nucleon: 28.3 ÷ 4 = 7.08 MeV.' },
      { n: 5, f: 'Shape of the graph of binding energy per nucleon against nucleon number', b: 'It rises steeply for light nuclei to a peak near iron-56, then falls slowly for heavier nuclei. A higher binding energy per nucleon means a more stable nucleus.' },
      { n: 6, f: 'Why do both fusion and fission release energy?', b: 'Fusion of light nuclei and fission of heavy nuclei both give products with a higher binding energy per nucleon (closer to iron). The increase in binding energy is released.' },
    ]),
    ...sub('a-nuclear-physics', 'a-radioactive-decay', '23.2', [
      { n: 1, f: 'What do fluctuations in count rate show about radioactive decay?', b: 'That decay is random (you cannot predict which nucleus decays next, or when) and spontaneous (not affected by external factors such as temperature or pressure).' },
      { n: 2, f: 'Activity', b: 'The number of nuclei decaying per unit time. A = λN, where N is the number of undecayed nuclei and λ the decay constant (the probability that a nucleus decays per unit time). Unit becquerel (1 Bq = 1 decay per second).' },
      { n: 3, f: 'Exponential decay equation', b: 'x = x₀e^(−λt), where x is the activity, the number of undecayed nuclei, or the received count rate.' },
      { n: 4, f: 'Relationship between decay constant and half-life', b: 't½ = ln 2 ÷ λ ≈ 0.693 ÷ λ. A long half-life means a small decay constant.' },
      { n: 5, f: 'Half-life 8.0 days, initial activity 4.8 × 10⁵ Bq. Find the activity after 20 days.', b: 'λ = 0.693 ÷ 8.0 = 0.0866 day⁻¹. A = 4.8 × 10⁵ × e^(−0.0866 × 20) = 8.5 × 10⁴ Bq.' },
      { n: 6, f: 'Changes in nucleon number A and proton number Z in α and β⁻ decay', b: 'α: A falls by 4, Z falls by 2.\nβ⁻: A unchanged, Z rises by 1.\n(β⁺: A unchanged, Z falls by 1.)' },
    ]),

    // 24 Medical physics
    ...sub('a-medical-physics', 'a-production-and-use-of-ultrasound', '24.1', [
      { n: 1, f: 'How is ultrasound produced and detected?', b: 'By a piezo-electric transducer: an alternating p.d. makes the crystal vibrate, producing ultrasound; returning vibrations make the same crystal produce an alternating p.d.' },
      { n: 2, f: 'Specific acoustic impedance', b: 'Z = ρc, the density of the medium × the speed of sound in it. Unit kg m⁻² s⁻¹.' },
      { n: 3, f: 'Intensity reflection coefficient at a boundary', b: 'I_R ÷ I = (Z₂ − Z₁)² ÷ (Z₂ + Z₁)². The bigger the difference in acoustic impedance, the more is reflected.' },
      { n: 4, f: 'Why is coupling gel used in ultrasound scanning?', b: 'Air and skin have very different acoustic impedances, so almost all the ultrasound would reflect at the skin. Gel has an impedance close to skin’s and displaces the air (impedance matching).' },
      { n: 5, f: 'Soft tissue Z = 1.63 × 10⁶, bone Z = 6.40 × 10⁶ kg m⁻² s⁻¹. What fraction of the intensity is reflected?', b: '(6.40 − 1.63)² ÷ (6.40 + 1.63)² = 22.75 ÷ 64.48 = 0.35, about 35%.' },
      { n: 6, f: 'Attenuation of ultrasound, and how a pulse-echo scan gives diagnostic information', b: 'Intensity falls as I = I₀e^(−μx). A pulse is partly reflected at each boundary between tissues of different acoustic impedance; the echo times give the depths of the boundaries.' },
    ]),
    ...sub('a-medical-physics', 'a-production-and-use-of-x-rays', '24.2', [
      { n: 1, f: 'How are X-rays produced?', b: 'Electrons are accelerated through a large p.d. and strike a metal target. Most of their energy becomes heat (the anode is cooled); a very small fraction becomes X-rays.' },
      { n: 2, f: 'Minimum X-ray wavelength for an accelerating p.d. V', b: 'λ_min = hc ÷ eV: an electron transfers all its kinetic energy eV to one photon. It depends only on V, not on the target.' },
      { n: 3, f: 'Braking radiation (bremsstrahlung) in an X-ray spectrum', b: 'The continuous background, from electrons decelerating in the target. Its maximum photon energy equals eV.', src: MED },
      { n: 4, f: 'Characteristic lines in an X-ray spectrum', b: 'Sharp peaks from electron transitions in the target atoms. Their positions depend only on the target material.', src: MED },
      { n: 5, f: 'Attenuation of X-rays, and why bone shows up white', b: 'I = I₀e^(−μx). μ depends strongly on atomic number: bone (calcium) absorbs much more than soft tissue, giving contrast. Contrast media of high atomic number (barium, iodine) make soft tissue such as the gut visible.' },
      { n: 6, f: 'How does CT scanning produce a 3D image?', b: 'X-ray images of the same section are taken from many angles and combined by computer into a 2D image of that section. This is repeated along an axis and the 2D sections are combined into a 3D image.' },
    ]),
    ...sub('a-medical-physics', 'a-pet-scanning', '24.3', [
      { n: 1, f: 'What tracer is used in PET scanning?', b: 'A substance labelled with a positron-emitting isotope (commonly fluorine-18 in a glucose compound), injected into the patient. Active tissue, such as a tumour, takes up more of it.' },
      { n: 2, f: 'What happens to an emitted positron in PET?', b: 'It travels a short distance and annihilates with an electron, producing two identical gamma-ray photons travelling in opposite directions.' },
      { n: 3, f: 'Why do the two annihilation photons travel in opposite directions?', b: 'Conservation of momentum: the initial momentum is (almost) zero, so the photons’ momenta must cancel.' },
      { n: 4, f: 'Energy of each annihilation photon', b: 'E = mc² for the rest mass of the electron (and of the positron): 9.11 × 10⁻³¹ × (3.00 × 10⁸)² = 8.2 × 10⁻¹⁴ J, about 0.511 MeV.' },
      { n: 5, f: 'How is the location of an annihilation found?', b: 'A ring of detectors records both photons. The line between the two detectors and the difference in arrival times locate the annihilation; a computer builds an image of tracer concentration.' },
    ]),

    // 25 Astronomy and cosmology
    ...sub('a-astronomy-and-cosmology', 'a-standard-candles', '25.1', [
      { n: 1, f: 'Luminosity of a star', b: 'The total power of radiation it emits. Unit W.' },
      { n: 2, f: 'Radiant flux intensity, and the inverse square law', b: 'The power received per unit area at the observer: F = L ÷ (4πd²). Unit W m⁻².' },
      { n: 3, f: 'Standard candle', b: 'An astronomical object of known luminosity. Measuring its radiant flux intensity on Earth gives its distance from F = L ÷ (4πd²).' },
      { n: 4, f: 'Why are Type Ia supernovae used as standard candles?', b: 'They all explode at the same critical mass, so they reach the same peak luminosity and can be seen across very large distances, giving distances to galaxies.' },
    ]),
    ...sub('a-astronomy-and-cosmology', 'a-stellar-radii', '25.2', [
      { n: 1, f: 'Wien’s displacement law', b: 'λ_max ∝ 1/T: the peak wavelength is inversely proportional to the surface temperature. λ_max T = 2.9 × 10⁻³ m K.' },
      { n: 2, f: 'Stefan–Boltzmann law', b: 'L = 4πσr²T⁴, where r is the star’s radius, T its surface temperature (in K) and σ the Stefan–Boltzmann constant.' },
      { n: 3, f: 'How do you estimate the radius of a star?', b: 'Use Wien’s law with the peak wavelength to find T. Then put T and the luminosity into L = 4πσr²T⁴ and solve for r.' },
      { n: 4, f: 'A star’s peak emission is at 480 nm. Estimate its surface temperature.', b: 'T = 2.9 × 10⁻³ ÷ 480 × 10⁻⁹ = 6.0 × 10³ K.' },
      { n: 5, f: 'Two stars have the same radius; one is twice as hot. Compare their luminosities.', b: 'L ∝ T⁴, so the hotter star is 2⁴ = 16 times as luminous.' },
    ]),
    ...sub('a-astronomy-and-cosmology', 'a-hubbles-law-and-the-big-bang-theory', '25.3', [
      { n: 1, f: 'Redshift', b: 'Lines in the spectra of distant galaxies appear at longer wavelengths than their known (laboratory) values, because the source is moving away.' },
      { n: 2, f: 'Redshift equation', b: 'Δλ ÷ λ ≈ Δf ÷ f ≈ v ÷ c, where Δλ = observed − laboratory wavelength and v is the speed of recession (v much less than c).' },
      { n: 3, f: 'A line of laboratory wavelength 656.3 nm is observed at 660.4 nm. Find the recession speed.', b: 'Δλ = 4.1 nm. v = c × Δλ ÷ λ = 3.00 × 10⁸ × 4.1 ÷ 656.3 = 1.9 × 10⁶ m s⁻¹.' },
      { n: 4, f: 'Hubble’s law', b: 'v ≈ H₀d: the recession speed of a galaxy is proportional to its distance (SI units: v in m s⁻¹, d in m, H₀ in s⁻¹).' },
      { n: 5, f: 'Why does redshift lead to the idea of an expanding Universe?', b: 'Almost all galaxies are redshifted, and the redshift increases with distance. So galaxies are moving apart, faster the further away they are: the Universe is expanding.' },
      { n: 6, f: 'How does Hubble’s law lead to the Big Bang theory?', b: 'If the galaxies are moving apart now, they were closer together in the past. Tracing back, the Universe began in a very small, dense, hot state and has been expanding since.' },
    ]),
  ],
};
