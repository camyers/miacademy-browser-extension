# Technical Details

## Architecture

- **Manifest V3** - Uses the latest extension API for compatibility
- **Content Scripts** - Injects functionality into Miacademy.co pages
- **Browser Storage API** - Uses sync storage for cross-device preferences
- **MutationObserver** - Watches for dynamically loaded content

## File Structure

```
miacademy-browser-extension/
├── manifest.json       # Extension manifest (Manifest V3)
├── popup.html         # Extension popup UI
├── popup.js           # Popup logic and storage handling
├── content.js         # Content script that runs on Miacademy.co pages
├── styles.css         # Popup styling
├── README.md          # Main documentation
├── CONTRIBUTING.md    # Contribution guidelines
├── CHANGELOG.md       # Version history
├── docs/              # Detailed documentation
│   ├── INSTALLATION.md
│   ├── FEATURES.md
│   ├── USAGE.md
│   ├── TROUBLESHOOTING.md
│   └── TECHNICAL.md
└── icons/             # Extension icons
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## How It Works

1. **User Interaction**: User toggles checkboxes in the extension popup
2. **Storage**: Preferences are saved to `chrome.storage.sync`
3. **Content Script**: The content script receives updates via messages
4. **DOM Manipulation**: Elements are hidden/shown using CSS `display` property
5. **Persistence**: A MutationObserver ensures settings persist for dynamically loaded content

## Permissions

- `storage` - For saving user preferences
- `activeTab` - For accessing the current tab
- `scripting` - For programmatic script injection (fallback)

## Domain Restrictions

The extension is restricted to:
- `https://miacademy.co/*`
- `https://www.miacademy.co/*`

It will not run on subdomains for security reasons.

## Browser Compatibility

- ✅ Microsoft Edge (Chromium-based)
- ✅ Google Chrome
- ✅ Mozilla Firefox (with Manifest V3 support)

