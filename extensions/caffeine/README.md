# Caffeine — a Tinycast extension

Keep this Mac awake from the Tinycast launcher.

| Command | Mode | What it does |
|---|---|---|
| **Caffeinate** | no-view | Starts `caffeinate -d -i`, HUD confirms |
| **Decaffeinate** | no-view | Stops it, HUD confirms |
| **Caffeine Status** | view | Shows current state, with actions to toggle |

`-d` keeps the display on, `-i` prevents idle system sleep.

## Install

See the [repo README](../../README.md#install). You can add this repo as a
Tinycast GitHub registry, or build the extension yourself.

## Build locally

```sh
npm install
npm run build       # ray build -e dist -o dist (without -o it builds into Raycast's folder)
cp -R dist ~/Library/"Application Support"/com.tinycast.app/extensions/caffeine
```

Restart Tinycast if the commands don't show up. You can also use
**Tinycast → Settings → Extensions → Add from folder** and point it at `dist/`.

## Notes for future edits

Tinycast runs Raycast-format extensions, so this is a normal Raycast extension.
Two runtime constraints shaped the code — worth knowing before changing it:

1. **`spawn` only detaches when `stdio` is `"ignore"`.** From Tinycast's
   `RaycastRuntime.generated.js`:
   `detached: !!s.detached && (... s.stdio) === "ignore"`.
   Any other stdio and `caffeinate` dies with the command's JS engine.

2. **`spawn` never returns a real pid** (`pid:0`/`pid:1`) and `kill()` is a
   no-op. So we can't track the child by handle — the process is tagged via
   `exec -a tinycast-caffeinate` and found with `pgrep -f`.

   This tag also means Decaffeinate kills *only* ours. A bare
   `pkill -x caffeinate` would kill any other app's caffeinate too.

**No menubar icon:** Tinycast refuses menu-bar commands — *"Menu bar commands
aren't supported yet / Tinycast only runs view and no-view commands."*
`MenuBarExtra` is exported by its runtime (so the import resolves) but the
command fails when it runs. Hence the `status` view command instead.

Status is a `view` command, not a no-view subtitle, because subtitles only
refresh when Background refresh is enabled — which is off by default.

## Check it works

```sh
pmset -g assertions | grep PreventUserIdleDisplaySleep   # 0 before, 1 after Caffeinate
ps -A -o pid,ppid,command | grep [t]inycast-caffeinate   # PPID must be 1
```
