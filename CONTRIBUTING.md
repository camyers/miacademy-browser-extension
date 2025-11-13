# Contributing to Miacademy Element Hider

Thank you for your interest in contributing to the Miacademy Element Hider browser extension! This document provides guidelines and instructions for contributing.

## Getting Started

1. **Fork the repository** (if applicable) or clone it locally
2. **Set up your development environment:**
   - Ensure you have a modern browser (Chrome, Edge, or Firefox)
   - Load the extension in developer mode (see [README.md](README.md) for instructions)

## Development Workflow

### Making Changes

1. **Create a branch** for your feature or bug fix
2. **Make your changes** following the code style guidelines below
3. **Test your changes** thoroughly on Miacademy.co
4. **Update documentation** if needed (README.md, comments, etc.)

### Code Style

- Use consistent indentation (2 spaces)
- Follow existing code patterns and structure
- Add comments for complex logic
- Keep functions focused and single-purpose
- Use meaningful variable and function names

### File Structure

- `manifest.json` - Extension configuration
- `popup.html` - Extension popup UI
- `popup.js` - Popup logic and user interactions
- `content.js` - Content script that runs on Miacademy.co pages
- `styles.css` - Popup styling
- `README.md` - Project documentation
- `CONTRIBUTING.md` - This file

## Adding New Elements to Hide

To add a new element hiding option:

1. **Add the checkbox** to `popup.html` in the appropriate section:
   ```html
   <label class="checkbox-label">
     <input type="checkbox" id="hide-new-element" data-category="category" data-element="new-element">
     <span>Hide New Element</span>
   </label>
   ```

2. **Add the selector** to `content.js` in the `elementSelectors` object:
   ```javascript
   'category-new-element': 'your-css-selector-here'
   ```

3. **Test thoroughly** to ensure the selector works correctly

### Finding CSS Selectors

1. Open Miacademy.co in your browser and log in
2. Open Developer Tools (F12)
3. Use the element inspector to find the element
4. Right-click the element → Copy → Copy selector
5. Verify the selector works by testing it in the console: `document.querySelector('your-selector')`

## Domain Restrictions

**Important:** This extension is designed to work ONLY on `miacademy.co` and `www.miacademy.co`. It should NOT work on subdomains like `parents.miacademy.co`.

When making changes:
- Ensure `manifest.json` only includes `https://miacademy.co/*` and `https://www.miacademy.co/*` (not `https://*.miacademy.co/*`)
- The domain check in `content.js` and `popup.js` should remain strict
- Test that the extension does NOT work on subdomains

## Testing

Before submitting changes:

1. **Test on the correct domain:**
   - Verify it works on `miacademy.co`
   - Verify it works on `www.miacademy.co`
   - Verify it does NOT work on subdomains (e.g., `parents.miacademy.co`)

2. **Test all functionality:**
   - Toggle individual checkboxes
   - Use Select All / Deselect All buttons
   - Verify preferences persist after page reload
   - Test on different pages within Miacademy.co

3. **Test cross-browser compatibility:**
   - Chrome/Edge (Chromium-based)
   - Firefox (if applicable)

## Submitting Changes

1. **Write clear commit messages** describing what and why
2. **Test your changes** thoroughly
3. **Update documentation** if needed
4. **Submit a pull request** (if applicable) with a clear description

## Questions or Issues?

If you encounter issues or have questions:
- Check existing issues/PRs
- Create a new issue with detailed information
- Include browser version, extension version, and steps to reproduce

## Code of Conduct

- Be respectful and constructive
- Focus on what's best for the project
- Welcome newcomers and help them learn

Thank you for contributing! 🎉

