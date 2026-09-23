/**
 * D-286 -- unambiguous workshop times. Every time shown is printed with its
 * zone name and UTC offset, in UTC and in Pakistan time (where the teachers
 * are), and the browser adds the visitor's own local time.
 */
export const TEACHING_TIME_ZONE = 'Asia/Karachi';

export function formatInZone(iso: string, timeZone: string): string {
  const d = new Date(iso);
  const date = new Intl.DateTimeFormat('en-GB', { timeZone, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(d);
  const time = new Intl.DateTimeFormat('en-GB', { timeZone, hour: '2-digit', minute: '2-digit', hour12: false }).format(d);
  return `${date}, ${time}`;
}

export const endIso = (startIso: string, minutes: number): string =>
  new Date(Date.parse(startIso) + minutes * 60_000).toISOString();

export const isUpcoming = (startIso: string, minutes: number, now = Date.now()): boolean =>
  Date.parse(startIso) + minutes * 60_000 > now;
