// Load saved preferences and update checkboxes
document.addEventListener('DOMContentLoaded', async () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
  // Load saved preferences
  const result = await chrome.storage.sync.get('hiddenElements');
  const hiddenElements = result.hiddenElements || {};
  
  // Set checkbox states based on saved preferences
  checkboxes.forEach(checkbox => {
    const elementId = checkbox.dataset.element;
    const category = checkbox.dataset.category;
    const key = `${category}-${elementId}`;
    
    if (hiddenElements[key]) {
      checkbox.checked = true;
    }
  });
  
  // Add event listeners to checkboxes
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', async () => {
      const elementId = checkbox.dataset.element;
      const category = checkbox.dataset.category;
      const key = `${category}-${elementId}`;
      
      // Get current preferences
      const result = await chrome.storage.sync.get('hiddenElements');
      const hiddenElements = result.hiddenElements || {};
      
      // Update preferences
      if (checkbox.checked) {
        hiddenElements[key] = {
          category: category,
          element: elementId,
          hidden: true
        };
      } else {
        delete hiddenElements[key];
      }
      
      // Save preferences
      await chrome.storage.sync.set({ hiddenElements: hiddenElements });
      
      // Apply changes immediately
      applyChanges();
    });
  });
  
  // Apply changes button
  document.getElementById('apply-changes').addEventListener('click', () => {
    applyChanges();
    // Close the popup after applying changes
    window.close();
  });
  
  // Cancel button - close without saving
  document.getElementById('cancel').addEventListener('click', () => {
    window.close();
  });
  
  // Close button (X icon) - close without saving
  document.getElementById('close-popup').addEventListener('click', () => {
    window.close();
  });
  
  // Select All button
  document.getElementById('select-all').addEventListener('click', async () => {
    const result = await chrome.storage.sync.get('hiddenElements');
    const hiddenElements = result.hiddenElements || {};
    
    checkboxes.forEach(checkbox => {
      const elementId = checkbox.dataset.element;
      const category = checkbox.dataset.category;
      const key = `${category}-${elementId}`;
      
      checkbox.checked = true;
      hiddenElements[key] = {
        category: category,
        element: elementId,
        hidden: true
      };
    });
    
    await chrome.storage.sync.set({ hiddenElements: hiddenElements });
    applyChanges();
  });
  
  // Deselect All button
  document.getElementById('deselect-all').addEventListener('click', async () => {
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
    
    await chrome.storage.sync.set({ hiddenElements: {} });
    applyChanges();
  });
  
  // Initial apply on load
  applyChanges();
});

// Check if URL is exactly miacademy.co (not subdomains)
function isMiacademyCo(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname === 'miacademy.co' || urlObj.hostname === 'www.miacademy.co';
  } catch (e) {
    return false;
  }
}

// Send message to content script to apply changes
async function applyChanges() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  if (tab && tab.url && isMiacademyCo(tab.url)) {
    // Get current preferences
    const result = await chrome.storage.sync.get('hiddenElements');
    const hiddenElements = result.hiddenElements || {};
    
    // Send message to content script
    chrome.tabs.sendMessage(tab.id, {
      action: 'updateVisibility',
      hiddenElements: hiddenElements
    }).catch(err => {
      console.log('Error sending message:', err);
      // Content script might not be loaded yet, try injecting it
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
      }).then(() => {
        // Retry sending message
        chrome.tabs.sendMessage(tab.id, {
          action: 'updateVisibility',
          hiddenElements: hiddenElements
        });
      });
    });
  }
}

