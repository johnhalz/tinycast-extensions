import { Action, ActionPanel, Detail, Icon, launchCommand, LaunchType } from "@raycast/api";
import { useState } from "react";
import { isCaffeinated } from "./caffeine";

export default function Command() {
  const [awake, setAwake] = useState(isCaffeinated);

  const markdown = awake
    ? "# ☕ Caffeinated\n\nThis Mac will stay awake — the display stays on and idle sleep is prevented."
    : "# 😴 Not caffeinated\n\nThis Mac will sleep normally.";

  return (
    <Detail
      markdown={markdown}
      actions={
        <ActionPanel>
          {awake ? (
            <Action
              title="Decaffeinate"
              icon={Icon.Moon}
              onAction={async () => {
                await launchCommand({ name: "decaffeinate", type: LaunchType.UserInitiated });
                setAwake(false);
              }}
            />
          ) : (
            <Action
              title="Caffeinate"
              icon={Icon.Bolt}
              onAction={async () => {
                await launchCommand({ name: "caffeinate", type: LaunchType.UserInitiated });
                setAwake(true);
              }}
            />
          )}
          <Action title="Refresh" icon={Icon.ArrowClockwise} onAction={() => setAwake(isCaffeinated())} />
        </ActionPanel>
      }
    />
  );
}
