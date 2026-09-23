/**
 * D-286 -- browser helpers for workshop pages: the visitor's own local time
 * (with its zone named, so the time is never ambiguous) and an .ics file for
 * their calendar, built on the device. Nothing is sent anywhere.
 */
export function applyLocalTimes(): void {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  document.querySelectorAll<HTMLElement>('[data-local-time]').forEach((el) => {
    const d = new Date(el.dataset.localTime ?? '');
    if (Number.isNaN(d.valueOf())) return;
    const s = new Intl.DateTimeFormat(undefined, { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }).format(d);
    el.textContent = `Your time: ${s}${tz ? ` (${tz})` : ''}`;
  });
}

const icsDate = (iso: string) => new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
const icsText = (s: string) => s.replace(/\\/g, '\\\\').replace(/[,;]/g, (m) => `\\${m}`).replace(/\n/g, '\\n');

export function icsHref(opts: { uid: string; title: string; start: string; end: string; url: string; description: string }): string {
  const lines = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Marlbridge//Workshops//EN', 'BEGIN:VEVENT',
    `UID:${opts.uid}@marlbridge.com`, `DTSTAMP:${icsDate(new Date().toISOString())}`,
    `DTSTART:${icsDate(opts.start)}`, `DTEND:${icsDate(opts.end)}`,
    `SUMMARY:${icsText(opts.title)}`, `DESCRIPTION:${icsText(opts.description)}`, `URL:${opts.url}`,
    'END:VEVENT', 'END:VCALENDAR',
  ];
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join('\r\n'))}`;
}
