# Loopish

Local-first block canvas inspired by Microsoft Loop.

## Quick Start

```bash
cd loopish
npm install
npm run dev
```

## Keybindings
- `/` open slash menu
- `Enter` new sibling block
- `Tab` / `Shift+Tab` indent or outdent
- `Cmd/Ctrl+K` search
- `Cmd/Ctrl+S` export workspace
- `Cmd/Ctrl+/` open cheatsheet

## Export / Import
Use the export/import utilities in `src/lib/exportImport.ts` to save or load workspace JSON.

## Collaboration
State is stored locally via IndexedDB. Set `VITE_ROOM_ID` and `VITE_SIGNALING` environment variables to enable optional WebRTC sync.
