/**
 * TDD Implementation - GREEN PHASE
 * 
 * Minimal implementations to make the failing tests pass.
 * These will be refactored in the REFACTOR phase.
 */

// 🟢 GREEN PHASE: InputValidator Class
export class InputValidator {
  constructor(inputElement) {
    this.input = inputElement;
    this.messageElement = document.getElementById('validation-message');
  }

  validateFormat(code) {
    // Basic format validation: SURNAME_NUMBER
    const pattern = /^[A-Z_]+_\d+$/;
    
    if (!code || code.trim() === '') {
      return { isValid: false, message: 'Tracking code is required' };
    }

    if (code.length > 56) { // 50 + '_12345' = 56
      return { isValid: false, message: 'Tracking code too long (max 50 characters)' };
    }

    if (!pattern.test(code)) {
      return { isValid: false, message: 'Format should be SURNAME_NUMBER' };
    }

    // Check minimum surname length
    const parts = code.split('_');
    if (parts[0].length < 2) {
      return { isValid: false, message: 'Surname must be at least 2 characters' };
    }

    return { isValid: true, message: 'Valid tracking code format' };
  }

  showValidationMessage(code) {
    const result = this.validateFormat(code);
    
    if (this.messageElement) {
      this.messageElement.textContent = result.isValid ? '' : result.message;
      this.messageElement.classList.toggle('error', !result.isValid);
    }
  }
}

// 🟢 GREEN PHASE: RecentSearches Class
export class RecentSearches {
  constructor() {
    this.storageKey = 'xu-recent-searches';
    this.maxItems = 5;
  }

  add(trackingCode) {
    const searches = this.getAll();
    
    // Remove if already exists (to avoid duplicates)
    const filteredSearches = searches.filter(code => code !== trackingCode);
    
    // Add to beginning
    filteredSearches.unshift(trackingCode);
    
    // Limit to maxItems
    const limitedSearches = filteredSearches.slice(0, this.maxItems);
    
    // Save to localStorage
    localStorage.setItem(this.storageKey, JSON.stringify(limitedSearches));
  }

  getAll() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  renderDropdown() {
    const dropdown = document.getElementById('recent-searches');
    const searches = this.getAll();
    
    dropdown.innerHTML = '';
    
    searches.forEach(code => {
      const item = document.createElement('div');
      item.className = 'recent-search-item';
      item.textContent = code;
      item.addEventListener('click', () => {
        document.getElementById('trackingCode').value = code;
      });
      dropdown.appendChild(item);
    });
  }
}

// 🟢 GREEN PHASE: AutoComplete Class
export class AutoComplete {
  constructor(inputElement, surnames) {
    this.input = inputElement;
    this.surnames = surnames;
    this.dropdown = document.getElementById('autocomplete-suggestions');
  }

  getSuggestions(input) {
    const upperInput = input.toUpperCase();
    return this.surnames.filter(surname => 
      surname.startsWith(upperInput)
    );
  }

  showSuggestions(input) {
    const suggestions = this.getSuggestions(input);
    this.dropdown.innerHTML = '';
    
    suggestions.forEach(suggestion => {
      const item = document.createElement('div');
      item.className = 'autocomplete-item';
      item.textContent = suggestion;
      item.addEventListener('click', () => {
        this.input.value = suggestion + '_';
        this.input.setSelectionRange(suggestion.length + 1, suggestion.length + 1);
        this.hideSuggestions();
      });
      this.dropdown.appendChild(item);
    });
    
    this.dropdown.style.display = suggestions.length > 0 ? 'block' : 'none';
    
    // Handle arrow key navigation
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        const firstItem = this.dropdown.querySelector('.autocomplete-item');
        if (firstItem) {
          firstItem.classList.add('selected');
        }
      }
    });
  }

  hideSuggestions() {
    this.dropdown.style.display = 'none';
  }
}

// 🟢 GREEN PHASE: LoadingManager Class
export class LoadingManager {
  constructor(buttonElement) {
    this.button = buttonElement;
    this.originalText = buttonElement.querySelector('.button-text').textContent;
    this.isLoading = false;
    this.timeoutMs = 5000; // Default timeout
  }

  showLoading() {
    this.isLoading = true;
    this.button.disabled = true;
    this.button.classList.add('is-loading');
    this.button.querySelector('.button-text').textContent = 'Searching...';
    
    // Add spinner
    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner spin';
    this.button.appendChild(spinner);
    
    // Set timeout
    this.timeoutId = setTimeout(() => {
      this.hideLoading();
      this.button.classList.add('timeout');
    }, this.timeoutMs);
  }

  hideLoading() {
    this.isLoading = false;
    this.button.disabled = false;
    this.button.classList.remove('is-loading');
    this.button.querySelector('.button-text').textContent = this.originalText;
    
    // Remove spinner
    const spinner = this.button.querySelector('.loading-spinner');
    if (spinner) {
      spinner.remove();
    }
    
    // Clear timeout
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleClick(event) {
    if (this.isLoading) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  setTimeout(ms) {
    this.timeoutMs = ms;
  }
}

// 🟢 GREEN PHASE: ThemeManager Class
export class ThemeManager {
  constructor() {
    this.storageKey = 'xu-theme';
    this.callbacks = [];
    this.currentTheme = this.initializeTheme();
  }

  initializeTheme() {
    // Check localStorage first
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      this.setTheme(stored);
      return stored;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.setTheme('dark');
      return 'dark';
    }

    // Default to light
    this.setTheme('light');
    return 'light';
  }

  getCurrentTheme() {
    return this.currentTheme;
  }

  setTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.storageKey, theme);
    
    // Notify callbacks
    this.callbacks.forEach(callback => callback(theme));
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  updateToggleButton() {
    const toggleButton = document.getElementById('theme-toggle');
    const icon = toggleButton?.querySelector('.theme-icon');
    
    if (icon) {
      icon.textContent = this.currentTheme === 'dark' ? '☀️' : '🌙';
    }
  }

  onThemeChange(callback) {
    this.callbacks.push(callback);
  }
} 