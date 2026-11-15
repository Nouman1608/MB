/**
 * D-466 -- country calling codes for the trial form's phone field.
 *
 * Owner, 15 Nov 2026: "keep the phone required add a country code also".
 * The form shows a country-code select beside the number; the server joins
 * the two (`joinPhone`) so the team always receives an international number
 * it can WhatsApp, whatever the family typed.
 *
 * `id` is the ISO 3166-1 alpha-2 code (XK for Kosovo, the code in common
 * use). `aliases` are other names the trial form's Country field accepts,
 * so choosing a country there can pre-select its code.
 */
export interface DialCode {
  id: string;
  name: string;
  dial: string;
  aliases?: string[];
}

export const DIAL_CODES: readonly DialCode[] = [
  { id: 'PK', name: 'Pakistan', dial: '+92' },
  { id: 'AF', name: 'Afghanistan', dial: '+93' },
  { id: 'AL', name: 'Albania', dial: '+355' },
  { id: 'DZ', name: 'Algeria', dial: '+213' },
  { id: 'AD', name: 'Andorra', dial: '+376' },
  { id: 'AM', name: 'Armenia', dial: '+374' },
  { id: 'AU', name: 'Australia', dial: '+61' },
  { id: 'AT', name: 'Austria', dial: '+43' },
  { id: 'AZ', name: 'Azerbaijan', dial: '+994' },
  { id: 'BH', name: 'Bahrain', dial: '+973' },
  { id: 'BD', name: 'Bangladesh', dial: '+880' },
  { id: 'BY', name: 'Belarus', dial: '+375' },
  { id: 'BE', name: 'Belgium', dial: '+32' },
  { id: 'BA', name: 'Bosnia and Herzegovina', dial: '+387' },
  { id: 'BW', name: 'Botswana', dial: '+267' },
  { id: 'BR', name: 'Brazil', dial: '+55' },
  { id: 'BN', name: 'Brunei', dial: '+673' },
  { id: 'BG', name: 'Bulgaria', dial: '+359' },
  { id: 'CM', name: 'Cameroon', dial: '+237' },
  { id: 'CA', name: 'Canada', dial: '+1' },
  { id: 'CN', name: 'China', dial: '+86' },
  { id: 'HR', name: 'Croatia', dial: '+385' },
  { id: 'CY', name: 'Cyprus', dial: '+357' },
  { id: 'CZ', name: 'Czechia', dial: '+420', aliases: ['Czech Republic'] },
  { id: 'DK', name: 'Denmark', dial: '+45' },
  { id: 'EG', name: 'Egypt', dial: '+20' },
  { id: 'EE', name: 'Estonia', dial: '+372' },
  { id: 'ET', name: 'Ethiopia', dial: '+251' },
  { id: 'FI', name: 'Finland', dial: '+358' },
  { id: 'FR', name: 'France', dial: '+33' },
  { id: 'GE', name: 'Georgia', dial: '+995' },
  { id: 'DE', name: 'Germany', dial: '+49' },
  { id: 'GH', name: 'Ghana', dial: '+233' },
  { id: 'GR', name: 'Greece', dial: '+30' },
  { id: 'HK', name: 'Hong Kong', dial: '+852' },
  { id: 'HU', name: 'Hungary', dial: '+36' },
  { id: 'IS', name: 'Iceland', dial: '+354' },
  { id: 'IN', name: 'India', dial: '+91' },
  { id: 'ID', name: 'Indonesia', dial: '+62' },
  { id: 'IR', name: 'Iran', dial: '+98' },
  { id: 'IQ', name: 'Iraq', dial: '+964' },
  { id: 'IE', name: 'Ireland', dial: '+353' },
  { id: 'IT', name: 'Italy', dial: '+39' },
  { id: 'JP', name: 'Japan', dial: '+81' },
  { id: 'JO', name: 'Jordan', dial: '+962' },
  { id: 'KZ', name: 'Kazakhstan', dial: '+7' },
  { id: 'KE', name: 'Kenya', dial: '+254' },
  { id: 'XK', name: 'Kosovo', dial: '+383' },
  { id: 'KW', name: 'Kuwait', dial: '+965' },
  { id: 'LV', name: 'Latvia', dial: '+371' },
  { id: 'LB', name: 'Lebanon', dial: '+961' },
  { id: 'LY', name: 'Libya', dial: '+218' },
  { id: 'LI', name: 'Liechtenstein', dial: '+423' },
  { id: 'LT', name: 'Lithuania', dial: '+370' },
  { id: 'LU', name: 'Luxembourg', dial: '+352' },
  { id: 'MY', name: 'Malaysia', dial: '+60' },
  { id: 'MV', name: 'Maldives', dial: '+960' },
  { id: 'MT', name: 'Malta', dial: '+356' },
  { id: 'MU', name: 'Mauritius', dial: '+230' },
  { id: 'MD', name: 'Moldova', dial: '+373' },
  { id: 'MC', name: 'Monaco', dial: '+377' },
  { id: 'ME', name: 'Montenegro', dial: '+382' },
  { id: 'MA', name: 'Morocco', dial: '+212' },
  { id: 'NP', name: 'Nepal', dial: '+977' },
  { id: 'NL', name: 'Netherlands', dial: '+31' },
  { id: 'NZ', name: 'New Zealand', dial: '+64' },
  { id: 'NG', name: 'Nigeria', dial: '+234' },
  { id: 'MK', name: 'North Macedonia', dial: '+389' },
  { id: 'NO', name: 'Norway', dial: '+47' },
  { id: 'OM', name: 'Oman', dial: '+968' },
  { id: 'PH', name: 'Philippines', dial: '+63' },
  { id: 'PL', name: 'Poland', dial: '+48' },
  { id: 'PT', name: 'Portugal', dial: '+351' },
  { id: 'QA', name: 'Qatar', dial: '+974' },
  { id: 'RO', name: 'Romania', dial: '+40' },
  { id: 'RU', name: 'Russia', dial: '+7' },
  { id: 'RW', name: 'Rwanda', dial: '+250' },
  { id: 'SM', name: 'San Marino', dial: '+378' },
  { id: 'SA', name: 'Saudi Arabia', dial: '+966', aliases: ['KSA'] },
  { id: 'RS', name: 'Serbia', dial: '+381' },
  { id: 'SG', name: 'Singapore', dial: '+65' },
  { id: 'SK', name: 'Slovakia', dial: '+421' },
  { id: 'SI', name: 'Slovenia', dial: '+386' },
  { id: 'ZA', name: 'South Africa', dial: '+27' },
  { id: 'KR', name: 'South Korea', dial: '+82' },
  { id: 'ES', name: 'Spain', dial: '+34' },
  { id: 'LK', name: 'Sri Lanka', dial: '+94' },
  { id: 'SD', name: 'Sudan', dial: '+249' },
  { id: 'SE', name: 'Sweden', dial: '+46' },
  { id: 'CH', name: 'Switzerland', dial: '+41' },
  { id: 'TZ', name: 'Tanzania', dial: '+255' },
  { id: 'TH', name: 'Thailand', dial: '+66' },
  { id: 'TN', name: 'Tunisia', dial: '+216' },
  { id: 'TR', name: 'Türkiye', dial: '+90', aliases: ['Turkey'] },
  { id: 'UG', name: 'Uganda', dial: '+256' },
  { id: 'UA', name: 'Ukraine', dial: '+380' },
  { id: 'AE', name: 'United Arab Emirates', dial: '+971', aliases: ['UAE'] },
  { id: 'GB', name: 'United Kingdom', dial: '+44', aliases: ['UK', 'Great Britain', 'England', 'Scotland', 'Wales', 'Northern Ireland'] },
  { id: 'US', name: 'United States', dial: '+1', aliases: ['USA', 'United States of America'] },
  { id: 'UZ', name: 'Uzbekistan', dial: '+998' },
  { id: 'VN', name: 'Vietnam', dial: '+84' },
  { id: 'ZM', name: 'Zambia', dial: '+260' },
  { id: 'ZW', name: 'Zimbabwe', dial: '+263' },
];

/** The select's last option: the family types the code into the number. */
export const DIAL_OTHER = 'other';

/** Countries whose national numbers keep their leading 0 after the code. */
const KEEPS_LEADING_ZERO = new Set(['IT', 'SM']);

/** The calling code for an id, or undefined. */
export function dialFor(id: string): string | undefined {
  return DIAL_CODES.find((d) => d.id === id)?.dial;
}

/** True when the number already carries a country code (+ or 00 prefix). */
export function hasInternationalPrefix(phone: string): boolean {
  const t = phone.trim();
  return t.startsWith('+') || t.startsWith('00');
}

/**
 * Joins the selected country code and the typed number into one
 * international number.
 * - A number typed with + or 00 is kept as typed (00 becomes +): the family
 *   has already given the code, which may differ from the select.
 * - Otherwise the national trunk 0 is dropped (except Italy and San Marino,
 *   where it is part of the number) and the code is put in front.
 * Returns undefined when the code is unknown and the number has no prefix.
 */
export function joinPhone(id: string, phone: string): string | undefined {
  const t = phone.trim();
  if (t.startsWith('+')) return t;
  if (t.startsWith('00')) return `+${t.slice(2).trim()}`;
  const dial = dialFor(id);
  if (!dial) return undefined;
  const national = KEEPS_LEADING_ZERO.has(id) ? t : t.replace(/^0+/, '');
  return `${dial} ${national}`;
}
