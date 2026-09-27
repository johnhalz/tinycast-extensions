import { showHUD } from "@raycast/api";
import { spawn } from "node:child_process";
import { LAUNCH, isCaffeinated } from "./caffeine";

export default async function Command() {
  if (isCaffeinated()) {
    await showHUD("☕ Already caffeinated");
    return;
  }

  // ponytail: detached + stdio "ignore" is the only combination the Tinycast
  // runtime actually detaches; anything else dies with this command's JS engine.
  spawn("/bin/sh", ["-c", LAUNCH], { detached: true, stdio: "ignore" });

  await showHUD("☕ Caffeinated — this Mac will stay awake");
}
