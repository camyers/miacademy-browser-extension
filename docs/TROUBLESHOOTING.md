# Troubleshooting

## Extension Not Working

### Check the Domain
- Ensure you're on `miacademy.co` or `www.miacademy.co` (not subdomains)
- The extension will not work on subdomains like `parents.miacademy.co`

### Reload the Page
- Sometimes a page reload is needed after installation
- Try refreshing the page (F5 or Ctrl+R)

### Check Browser Console
- Open Developer Tools (F12)
- Check the Console tab for any error messages
- Look for messages related to the extension

### Reinstall Extension
- Try removing the extension completely
- Reload it using the installation steps
- This can resolve permission or loading issues

## Elements Not Hiding

### Verify Selector
- The element selector might have changed if Miacademy.co updated their UI
- Check if the element still exists on the page using Developer Tools

### Check Console
- Look for error messages in the browser console
- Errors will indicate which selector failed

### Test Selector
- Use Developer Tools to verify the CSS selector still works
- Right-click the element → Inspect → Check if the selector matches

## Preferences Not Saving

### Check Storage Permissions
- Ensure the extension has storage permissions
- Check in browser extension settings

### Browser Sync
- If using sync storage, ensure you're signed into your browser account
- Sync storage requires browser account sign-in

### Clear and Reset
- Try clearing extension data and reconfiguring
- Go to extension settings → Clear storage

## Still Having Issues?

1. Check existing issues in the repository
2. Create a new issue with detailed information:
   - Browser version
   - Extension version
   - Steps to reproduce
   - Console error messages (if any)

