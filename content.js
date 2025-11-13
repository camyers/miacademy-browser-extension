// Check if we're on the correct domain (only miacademy.co, not subdomains)
function isMiacademyCo() {
  const hostname = window.location.hostname;
  return hostname === 'miacademy.co' || hostname === 'www.miacademy.co';
}

// Only execute extension code if on correct domain
if (isMiacademyCo()) {
  // Element selectors mapping
  // For simple CSS selectors, use a string
  // For special cases requiring DOM traversal, use a function
  const elementSelectors = {
    'navigation-all-lessons': 'li.mia-Navbar-item:nth-child(2)',
    'navigation-my-world': 'li.mia-Navbar-item:nth-child(3)',
    'left-nav-learning-path': '.mia-VideoPanel',
    'left-nav-tell-me-more': '.mia-ExplanationButton',
    'left-nav-your-challenges': '#contentcontent__ctl4 > .mia-sidebar > div:nth-child(1) > div > div.panel-body > div > ul > li:nth-child(2)',
    'header-tutorial-videos': '.mia-TutorialVideosDropdown',
    'footer-footer': 'body > div.mia-pageWrapper > footer',
    'global-help-icon': '.mia-FloatingHelpButton > div:nth-child(1)'
  };

  // Store original display styles to restore if needed
  const originalStyles = new Map();

  // Function to hide an element
  function hideElement(selector, key) {
    if (!selector) return;
    
    try {
      let elements = [];
      
      // Handle function-based selectors (for DOM traversal)
      if (typeof selector === 'function') {
        const element = selector();
        if (element) {
          elements = [element];
        }
      } else {
        // Handle CSS selector strings
        elements = Array.from(document.querySelectorAll(selector));
      }
      
      elements.forEach(element => {
        if (!originalStyles.has(element)) {
          originalStyles.set(element, element.style.display);
        }
        element.style.display = 'none';
      });
    } catch (error) {
      console.error(`Error hiding element with selector "${selector}":`, error);
    }
  }

  // Function to show an element
  function showElement(selector) {
    if (!selector) return;
    
    try {
      let elements = [];
      
      // Handle function-based selectors (for DOM traversal)
      if (typeof selector === 'function') {
        const element = selector();
        if (element) {
          elements = [element];
        }
      } else {
        // Handle CSS selector strings
        elements = Array.from(document.querySelectorAll(selector));
      }
      
      elements.forEach(element => {
        const originalDisplay = originalStyles.get(element);
        if (originalDisplay !== undefined) {
          element.style.display = originalDisplay || '';
        } else {
          element.style.display = '';
        }
        originalStyles.delete(element);
      });
    } catch (error) {
      console.error(`Error showing element with selector "${selector}":`, error);
    }
  }

  // Function to update visibility based on preferences
  function updateVisibility(hiddenElements) {
    // First, show all elements that are not in hiddenElements
    Object.keys(elementSelectors).forEach(key => {
      if (!hiddenElements[key] && elementSelectors[key]) {
        showElement(elementSelectors[key]);
      }
    });
    
    // Then, hide elements that are in hiddenElements
    Object.keys(hiddenElements).forEach(key => {
      if (hiddenElements[key].hidden && elementSelectors[key]) {
        hideElement(elementSelectors[key], key);
      }
    });
  }

  // Listen for messages from popup
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'updateVisibility') {
      updateVisibility(request.hiddenElements);
      sendResponse({ success: true });
    } else if (request.action === 'setSelectors') {
      // Update selectors when user provides them
      Object.assign(elementSelectors, request.selectors);
      sendResponse({ success: true });
    }
    return true;
  });

  // Load preferences on page load
  chrome.storage.sync.get('hiddenElements', (result) => {
    const hiddenElements = result.hiddenElements || {};
    updateVisibility(hiddenElements);
  });

  // Use MutationObserver to handle dynamically loaded content
  const observer = new MutationObserver(() => {
    chrome.storage.sync.get('hiddenElements', (result) => {
      const hiddenElements = result.hiddenElements || {};
      updateVisibility(hiddenElements);
    });
  });

  // Start observing when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  } else {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
} else {
  console.log('Miacademy Element Hider: Extension only works on miacademy.co (not subdomains)');
}
