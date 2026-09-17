/**
 * D-259 (I397 (1) follow-on): assessment records store firstTeaching as
 * 'YYYY-MM' or 'YYYY'. Pages print it as 'August 2025' / '2025', never the
 * raw machine form.
 */
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function teachingMonthLabel(value: string | undefined): string {
  if (!value) return '';
  const m = /^(\d{4})-(\d{2})$/.exec(value);
  if (!m) return value;
  const month = MONTHS[Number(m[2]) - 1];
  return month ? `${month} ${m[1]}` : value;
}
