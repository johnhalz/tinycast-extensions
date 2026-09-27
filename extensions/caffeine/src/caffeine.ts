// Shared bits. Kept tiny and inlined by the bundler into each command.

/**
 * `caffeinate` is a system tool other apps run too. We tag ours via `exec -a`
 * so Decaffeinate matches only this extension's process and never kills
 * someone else's assertion.
 */
export const MARKER = "tinycast-caffeinate";

/** -d keeps the display on, -i prevents idle system sleep. */
export const LAUNCH = `exec -a ${MARKER} /usr/bin/caffeinate -d -i`;

import { execFileSync } from "node:child_process";

export function isCaffeinated(): boolean {
  try {
    execFileSync("/usr/bin/pgrep", ["-f", MARKER], { stdio: "ignore" });
    return true;
  } catch {
    // pgrep exits 1 when nothing matches
    return false;
  }
}
