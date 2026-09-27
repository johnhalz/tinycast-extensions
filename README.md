# Tinycast extensions

Extensions for [Tinycast](https://github.com/abue-ammar/tinycast). They use the
Raycast extension format, laid out like
[raycast/extensions](https://github.com/raycast/extensions).

| Extension | What it does |
|---|---|
| [Caffeine](extensions/caffeine) | Keep your Mac awake: Caffeinate, Decaffeinate, Caffeine Status |

## Install

Add this repo to Tinycast once. After that, you can install and update
extensions from inside Tinycast.

1. Open **Tinycast → Settings → Extensions → GitHub Registries**.
2. Add this registry:
   ```
   https://github.com/johnhalz/tinycast-extensions/tree/main/extensions
   ```
3. Search for the extension (e.g. **Caffeine**) in Tinycast's extension
   installer and click install.

Tinycast builds registry extensions on your Mac, so you need a package manager:
npm, pnpm, Yarn or Bun. To get npm, run `brew install node`.

### Manual install

```sh
git clone https://github.com/johnhalz/tinycast-extensions.git
cd tinycast-extensions/extensions/caffeine
npm install && npm run build
```

Then open **Tinycast → Settings → Extensions → Add from folder** and choose the
`dist/` folder.
