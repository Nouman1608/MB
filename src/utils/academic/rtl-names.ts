/**
 * D-263 follow-on: topic and subtopic names in Arabic script (first used by the
 * 9UR0 record) need dir="rtl" and a lang. Detecting the language name by name
 * mislabels an Urdu record's short names as Arabic, because rtlLangFor() can
 * only answer 'ur' when a name happens to contain an Urdu-only letter. The
 * language is a property of the record, so it is decided once from all of its
 * names together and used for every name in it.
 */
import { rtlLangFor } from '../markdown/hast-rtl-blocks.mjs';

interface NamedTopic { name: string; subtopics: readonly { name: string }[] }

export function recordRtlLang(topics: readonly NamedTopic[]): 'ar' | 'ur' | null {
  const all = topics.flatMap((t) => [t.name, ...t.subtopics.map((s) => s.name)]).join(' ');
  return (rtlLangFor(all) as 'ar' | 'ur' | null) ?? null;
}

/** The lang to print for one name: null when the name carries no Arabic script. */
export function nameRtlLang(name: string, recordLang: 'ar' | 'ur' | null): 'ar' | 'ur' | null {
  return rtlLangFor(name) ? (recordLang ?? (rtlLangFor(name) as 'ar' | 'ur')) : null;
}
