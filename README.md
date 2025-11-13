# Miacademy Element Hider Browser Extension

A browser extension that allows you to customize your Miacademy.co experience by hiding specific UI elements based on your preferences. Perfect for creating a cleaner, more focused learning environment.

## 🌟 Features

### Element Hiding Options

The extension provides granular control over various UI elements:

#### Navigation
- **Hide All Lessons** - Removes the "All Lessons" navigation item
- **Hide My World** - Removes the "My World" navigation item

#### Left Navigation
- **Hide On your Learning Path** - Hides the learning path video panel
- **Hide Tell me more** - Removes the "Tell me more" explanation button
- **Hide Your Challenges Solved Link** - Hides the "Solved" link in the challenges section

#### Header
- **Hide Tutorial Videos** - Removes the tutorial videos dropdown from the header

#### Footer
- **Hide Footer** - Completely hides the page footer

#### Global
- **Hide Help Icon** - Removes the floating help icon

### Additional Features

- ✅ **Select All / Deselect All** - Quickly enable or disable all options
- ✅ **Persistent Preferences** - Your settings are saved and synced across devices
- ✅ **Real-time Updates** - Changes apply immediately without page reload
- ✅ **Dynamic Content Support** - Automatically handles dynamically loaded content
- ✅ **Domain-Specific** - Only works on miacademy.co (not subdomains) for security

## 🚀 Installation

### For End Users

#### Microsoft Edge / Chrome

1. Download or clone this repository
2. Open your browser and navigate to:
   - Edge: `edge://extensions/`
   - Chrome: `chrome://extensions/`
3. Enable **Developer mode** (toggle in the top right corner)
4. Click **"Load unpacked"**
5. Select the folder containing this extension
6. The extension icon should now appear in your browser toolbar

#### Firefox

1. Download or clone this repository
2. Open Firefox and navigate to `about:debugging`
3. Click **"This Firefox"** in the left sidebar
4. Click **"Load Temporary Add-on"**
5. Select the `manifest.json` file in this extension folder
6. The extension will be loaded (note: temporary add-ons are removed when Firefox restarts)

### For Developers

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed development setup instructions.

## 📖 Usage

1. **Navigate to Miacademy.co** and log in to your account
2. **Click the extension icon** in your browser toolbar to open the popup
3. **Toggle checkboxes** for the elements you want to hide
4. **Changes apply immediately** - no need to reload the page
5. **Use "Select All" or "Deselect All"** for quick bulk changes

Your preferences are automatically saved and will persist across:
- Page reloads
- Browser sessions
- Different devices (if you're signed into your browser account)

## 🔒 Privacy & Security

- **No Data Collection**: The extension does not collect, store, or transmit any personal data
- **Local Storage Only**: All preferences are stored locally in your browser
- **Domain-Specific**: The extension only runs on `miacademy.co` and `www.miacademy.co`
- **No External Requests**: The extension does not make any network requests
- **Open Source**: Full source code is available for review

## 🛠️ Technical Details

### Architecture

- **Manifest V3** - Uses the latest extension API for compatibility
- **Content Scripts** - Injects functionality into Miacademy.co pages
- **Browser Storage API** - Uses sync storage for cross-device preferences
- **MutationObserver** - Watches for dynamically loaded content

### Browser Compatibility

- ✅ Microsoft Edge (Chromium-based)
- ✅ Google Chrome
- ✅ Mozilla Firefox (with Manifest V3 support)

### File Structure

```
miacademy-browser-extension/
├── manifest.json       # Extension manifest (Manifest V3)
├── popup.html         # Extension popup UI
├── popup.js           # Popup logic and storage handling
├── content.js         # Content script that runs on Miacademy.co pages
├── styles.css         # Popup styling
├── README.md          # This file
├── CONTRIBUTING.md    # Contribution guidelines
└── icons/             # Extension icons
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

### How It Works

1. **User Interaction**: User toggles checkboxes in the extension popup
2. **Storage**: Preferences are saved to `chrome.storage.sync`
3. **Content Script**: The content script receives updates via messages
4. **DOM Manipulation**: Elements are hidden/shown using CSS `display` property
5. **Persistence**: A MutationObserver ensures settings persist for dynamically loaded content

## 🐛 Troubleshooting

### Extension Not Working

- **Check the domain**: Ensure you're on `miacademy.co` or `www.miacademy.co` (not subdomains)
- **Reload the page**: Sometimes a page reload is needed after installation
- **Check browser console**: Open Developer Tools (F12) and check for errors
- **Reinstall extension**: Try removing and re-adding the extension

### Elements Not Hiding

- **Verify selector**: The element selector might have changed if Miacademy.co updated their UI
- **Check console**: Look for error messages in the browser console
- **Test selector**: Use Developer Tools to verify the CSS selector still works

### Preferences Not Saving

- **Check storage permissions**: Ensure the extension has storage permissions
- **Browser sync**: If using sync storage, ensure you're signed into your browser account
- **Clear and reset**: Try clearing extension data and reconfiguring

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Adding new features
- Reporting bugs
- Code style guidelines
- Testing requirements

## 📝 License

This project is open source. Please check the repository for license information.

## ⚠️ Important Notes

- **Domain Restriction**: This extension is specifically designed for `miacademy.co` and will not work on subdomains like `parents.miacademy.co`
- **UI Changes**: If Miacademy.co updates their UI, selectors may need to be updated
- **Browser Updates**: Keep your browser updated for best compatibility
- **No Warranty**: This is a community project - use at your own discretion

## 📋 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed list of changes and version history.

## 📧 Support

For issues, questions, or feature requests, please:
1. Check existing issues in the repository
2. Create a new issue with detailed information
3. Include browser version and steps to reproduce

---

## ⚠️ Disclaimer

This browser extension is an independent, community-developed project and is in no way affiliated with, endorsed by, or connected to Miacademy.co or its parent company. This is an unofficial extension created for the convenience of users.

---

**Made with ❤️ for the Miacademy.co community**
