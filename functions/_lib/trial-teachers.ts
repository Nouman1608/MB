/**
 * D-330 (2026-09-25) -- the teachers a trial request may name, keyed by the
 * author slug the profile pages use (/authors/<slug>/, ?teacher=<slug>).
 *
 * The enquiry Function cannot read the Astro content collection, so this is a
 * plain list. functions/api/__tests__/trial-teachers.test.mjs fails if it ever
 * differs from the `entityType: person` entries in src/content/authors/, so a
 * new or removed teacher cannot drift silently.
 *
 * Used to (1) drop a `teacher` value that names nobody real, and (2) write the
 * teacher's name, not just the slug, into the staff email and the family's
 * acknowledgement. A named teacher is always a PREFERENCE: nothing here checks
 * or promises availability.
 */
export const TRIAL_TEACHERS: Readonly<Record<string, string>> = {
  'aizaz-raoof-ali': 'Aizaz Raoof Ali',
  'ameer-hamza': 'Ameer Hamza',
  'arslan-tanvir': 'Arslan Tanvir',
  'asif-iqbal': 'Asif Iqbal',
  'azam-siddique': 'Azam Siddique',
  'farheen-zehra': 'Farheen Zehra',
  'harris-khan': 'Harris Khan',
  'harris-zaman': 'Harris Zaman',
  'hassan': 'Hassan',
  'hina-mogul': 'Hina Mogul',
  'iftikhar-azeemi': 'Iftikhar Azeemi',
  'javaid-iqbal-sabri': 'Javaid Iqbal Sabri',
  'jawad-tariq': 'Jawad Tariq',
  'lubna-waseem': 'Lubna Waseem',
  'muhammad-ghazali-siddiqui': 'Muhammad Ghazali Siddiqui',
  'nouman-ahmed': 'Nouman Ahmed',
  'saad-zai': 'Saad Zai',
  'sajawal-zahid': 'Sajawal Zahid',
  'salman-ahmad': 'Salman Ahmad',
  'zain-ud-din-ahmed': 'Zain Ud Din Ahmed',
};
