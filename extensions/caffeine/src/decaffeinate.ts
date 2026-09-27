import { showHUD } from "@raycast/api";
import { execFileSync } from "node:child_process";
import { MARKER } from "./caffeine";

export default async function Command() {
  try {
    execFileSync("/usr/bin/pkill", ["-f", MARKER], { stdio: "ignore" });
    await showHUD("😴 Decaffeinated — this Mac can sleep again");
  } catch {
    await showHUD("😴 Wasn't caffeinated");
  }
}
