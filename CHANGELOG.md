# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-11-12

### Added
- Initial release of Miacademy Element Hider extension
- Support for hiding navigation elements (All Lessons, My World)
- Support for hiding left navigation elements (On your Learning Path, Tell me more, Your Challenges Solved Link)
- Support for hiding header elements (Tutorial Videos)
- Support for hiding footer elements
- Support for hiding global elements (Help Icon)
- Select All / Deselect All functionality for quick bulk changes
- Persistent preferences with browser sync storage
- Real-time updates without page reload
- Dynamic content support via MutationObserver
- Domain-specific restrictions (only works on miacademy.co, not subdomains)
- Cross-browser compatibility (Edge, Chrome, Firefox)
- Auto-close popup on "Apply Changes" button click
- Comprehensive documentation (README, CONTRIBUTING)

### Security
- Domain validation to ensure extension only runs on miacademy.co
- No external network requests
- Local storage only for preferences

[1.0.0]: https://github.com/yourusername/miacademy-browser-extension/releases/tag/v1.0.0

