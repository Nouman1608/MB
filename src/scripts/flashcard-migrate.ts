/**
 * D-505 -- moves saved flashcard progress onto a deck's new card ids after a
 * re-filing (FlashcardDeck.idMigration in src/data/flashcards/types.ts).
 * Pure, with no DOM or storage access, so it can be unit tested
 * (src/scripts/__tests__/flashcard-migrate.test.mjs); flashcard-ui.ts calls
 * it right after loading the store.
 *
 * Rule, for a migration { id, before, map }:
 *   - a mark dated before `before` uses an OLD id: it moves to map[oldId], or
 *     is dropped when the old id is not in the map (a removed card);
 *   - a mark dated on or after `before` already uses a NEW id: kept as it is;
 *   - if two marks land on the same id, the later date wins, and on a tie the
 *     kept (new-id) mark wins.
 * Old and new ids overlap (an old id can now name a different card), so the
 * migration must never run twice: its id is recorded in `m`, and a store
 * that already lists it is returned unchanged (the same object). The store
 * stays `v: 1`, so code that does not know about `m` still reads it.
 */

export interface StoreEntry { k: 0 | 1; t: string }
export interface Store { v: 1; cards: Record<string, StoreEntry>; m?: string[] }
export interface IdMigration { id: string; before: string; map: Readonly<Record<string, string>> }

/** True when the mark is dated on or after the cutoff, i.e. it already uses a new id. */
const isNew = (e: StoreEntry, before: string): boolean => typeof e?.t === 'string' && e.t >= before;

/**
 * Returns the migrated store, or `store` itself when there is nothing to do
 * (no migration, or this one is already recorded). Never mutates `store`.
 */
export function migrateStore(store: Store, migration: IdMigration | undefined | null): Store {
  if (!migration) return store;
  const done = Array.isArray(store.m) ? store.m : [];
  if (done.includes(migration.id)) return store;

  const cards: Record<string, StoreEntry> = {};
  for (const [id, e] of Object.entries(store.cards)) {
    if (isNew(e, migration.before)) cards[id] = e;
  }
  for (const [oldId, e] of Object.entries(store.cards)) {
    if (!e || typeof e !== 'object' || isNew(e, migration.before)) continue;
    const to = Object.prototype.hasOwnProperty.call(migration.map, oldId) ? migration.map[oldId] : undefined;
    if (to === undefined) continue;
    const there = cards[to];
    // Strictly later replaces, so a kept mark wins a tie. (Two remapped marks
    // could only meet if the map were not one-to-one; the first one wins a tie.)
    if (!there || e.t > there.t) cards[to] = e;
  }
  return { ...store, cards, m: [...done, migration.id] };
}
