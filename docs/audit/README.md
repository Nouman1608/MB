# Auditor findings drop folder

Nouman drops each new auditor handoff file here directly (e.g. `2026-09-11-findings.md`).
The external auditor already clones `main` and reads `docs/decision-log.md`, so this closes
the remaining one-way gap: findings now travel through the repo in both directions instead of
being relayed by hand.

Convention: date-prefixed filename, left as delivered. Once a file's findings are fully
processed (fixed, closed-no-change, or superseded), it stays here as a historical record --
the decision log is the authoritative record of what was done and why; this folder is the
audit trail of what was received.
