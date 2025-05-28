/**
 * @jest-environment jsdom
 */

// Import the main module
import '../index.js';

describe('XU Registrar Tracking System - Integration Tests', () => {
  beforeEach(() => {
    // Set up complete HTML structure
    document.body.innerHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>XU Registrar Request Tracking System</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">
          <link rel="stylesheet" href="./styles/main.css">
      </head>
      <body>
          <nav class="navbar is-white" role="navigation" aria-label="main navigation">
              <div class="container is-flex is-align-items-center is-justify-content-space-between">
                  <div class="is-flex is-align-items-center">
                      <img src="./assets/logo.png" alt="Xavier University Logo">
                  </div>
                  <div>
                      <button onclick="handleGoogleLogin()" class="button is-white has-text-weight-bold">
                          <img src="./assets/account.png" alt="Account">
                          <span>Login</span>
                      </button>
                  </div>
              </div>
          </nav>
          
          <section class="section">
              <div class="container">
                  <div class="columns is-centered">
                      <div class="column is-10">
                          <div class="has-text-centered mb-5">
                              <h1 class="title">XU Registrar Request<br>Tracking System</h1>
                          </div>
                          
                          <div class="custom-box-border mb-5">
                              <div class="content">
                                  <p>Welcome to the Xavier University Registrar's Office document tracking portal.</p>
                                  <div>
                                      <p>Control Number: 12345</p>
                                      <p>Surname: Erasmo</p>
                                      <p>Enter as: ERASMO_12345</p>
                                  </div>
                              </div>
                          </div>
                          
                          <form onsubmit="handleTrackingSearch(event)" class="mb-6">
                              <div class="search-bar-pill">
                                  <input type="text" placeholder="Enter code..." id="trackingCode">
                                  <button type="submit">
                                      <img src="./assets/search.png" alt="Search">
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
          
          <footer class="custom-footer has-text-white">
              <div class="container">
                  <div class="has-text-centered">
                      <p>Registrar's Office | Ground Floor, Xavier Hall | Tel: (088) 853-9800 loc. 9101</p>
                      <p>Office Hours: Monday to Friday, 8:00 AM - 5:00 PM</p>
                  </div>
              </div>
          </footer>
      </body>
      </html>
    `;

    // Mock global functions
    global.alert = jest.fn();
    Object.defineProperty(window, 'location', {
      value: { href: '' },
      writable: true,
    });
  });

  describe('Complete User Workflow', () => {
    test('should complete full tracking search workflow', async () => {
      // Arrange - User loads the page
      const searchInput = document.getElementById('trackingCode');
      const searchForm = document.querySelector('form');
      
      expect(searchInput).toBeInDOM();
      expect(searchForm).toBeInDOM();
      
      // Act - User types tracking code
      searchInput.value = 'ERASMO_12345';
      searchInput.dispatchEvent(new Event('input'));
      
      // User submits form
      const submitEvent = new Event('submit', { bubbles: true });
      submitEvent.preventDefault = jest.fn();
      
      searchForm.dispatchEvent(submitEvent);
      
      // Assert - System should process the request
      await waitForNextTick();
      expect(window.location.href).toBe('/tracking/ERASMO_12345');
    });

    test('should handle complete login workflow', () => {
      // Arrange
      const loginButton = document.querySelector('button[onclick="handleGoogleLogin()"]');
      
      expect(loginButton).toBeInDOM();
      expect(loginButton.textContent).toContain('Login');
      
      // Act - User clicks login
      loginButton.click();
      
      // Assert - Should redirect to auth endpoint
      expect(window.location.href).toBe('/auth/google');
    });

    test('should handle user interaction with search input focus effects', () => {
      // Arrange
      const searchInput = document.getElementById('trackingCode');
      const searchPill = searchInput.parentElement;
      
      // Act - User focuses on input
      searchInput.dispatchEvent(new Event('focus'));
      
      // Assert - Visual feedback should be applied
      expect(searchPill.style.borderColor).toBe('rgb(58, 79, 164)');
      expect(searchPill.style.boxShadow).toContain('rgba(58, 79, 164, 0.2)');
      
      // Act - User blurs input
      searchInput.dispatchEvent(new Event('blur'));
      
      // Assert - Visual feedback should be removed
      expect(searchPill.style.borderColor).toBe('rgb(233, 236, 239)');
      expect(searchPill.style.boxShadow).toContain('rgba(0, 0, 0, 0.1)');
    });

    test('should handle keyboard navigation and Enter key submission', () => {
      // Arrange
      const searchInput = document.getElementById('trackingCode');
      searchInput.value = 'SANTOS_67890';
      
      // Act - User presses Enter
      const enterEvent = new KeyboardEvent('keypress', { key: 'Enter' });
      enterEvent.preventDefault = jest.fn();
      
      searchInput.dispatchEvent(enterEvent);
      
      // Assert
      expect(enterEvent.preventDefault).toHaveBeenCalled();
      expect(window.location.href).toBe('/tracking/SANTOS_67890');
    });
  });

  describe('Error Handling Integration', () => {
    test('should handle empty input submission gracefully', () => {
      // Arrange
      const searchInput = document.getElementById('trackingCode');
      const searchForm = document.querySelector('form');
      
      searchInput.value = '';
      
      // Act
      const submitEvent = new Event('submit');
      submitEvent.preventDefault = jest.fn();
      
      searchForm.dispatchEvent(submitEvent);
      
      // Assert
      expect(global.alert).toHaveBeenCalledWith('Please enter a tracking code.');
      expect(window.location.href).toBe('');
    });

    test('should handle malformed tracking codes', () => {
      // Arrange
      const searchInput = document.getElementById('trackingCode');
      const searchForm = document.querySelector('form');
      
      // Test various malformed inputs
      const malformedInputs = [
        'ERASMO12345',      // Missing underscore
        '_12345',           // Missing surname
        'ERASMO_',          // Missing number
        '   ',              // Only whitespace
        'ERASMO__12345'     // Double underscore
      ];
      
      malformedInputs.forEach(input => {
        // Reset mocks
        jest.clearAllMocks();
        window.location.href = '';
        
        searchInput.value = input;
        
        const submitEvent = new Event('submit');
        submitEvent.preventDefault = jest.fn();
        
        // Act
        searchForm.dispatchEvent(submitEvent);
        
        // Assert - System should either reject or handle gracefully
        if (input.trim() === '') {
          expect(global.alert).toHaveBeenCalledWith('Please enter a tracking code.');
          expect(window.location.href).toBe('');
        } else {
          // Even malformed codes are passed through - backend validation
          expect(window.location.href).toBe(`/tracking/${encodeURIComponent(input.trim())}`);
        }
      });
    });
  });

  describe('Browser Compatibility Integration', () => {
    test('should work without Lucide icons library', () => {
      // Arrange - Simulate missing Lucide
      delete global.lucide;
      
      // Act - Trigger DOMContentLoaded
      document.dispatchEvent(new Event('DOMContentLoaded'));
      
      // Assert - Should not throw errors
      expect(() => {
        document.dispatchEvent(new Event('DOMContentLoaded'));
      }).not.toThrow();
    });

    test('should work with Lucide icons library present', () => {
      // Arrange
      const mockCreateIcons = jest.fn();
      global.lucide = {
        createIcons: mockCreateIcons
      };
      
      // Act
      document.dispatchEvent(new Event('DOMContentLoaded'));
      
      // Assert
      expect(mockCreateIcons).toHaveBeenCalled();
    });
  });

  describe('Responsive Design Integration', () => {
    test('should maintain functionality across different viewport sizes', () => {
      // Test mobile viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });
      
      window.dispatchEvent(new Event('resize'));
      
      // Elements should still be functional
      const searchInput = document.getElementById('trackingCode');
      const loginButton = document.querySelector('button[onclick="handleGoogleLogin()"]');
      
      expect(searchInput).toBeInDOM();
      expect(loginButton).toBeInDOM();
      
      // Test desktop viewport
      Object.defineProperty(window, 'innerWidth', {
        value: 1920,
      });
      
      window.dispatchEvent(new Event('resize'));
      
      expect(searchInput).toBeInDOM();
      expect(loginButton).toBeInDOM();
    });
  });

  describe('Performance Integration', () => {
    test('should handle rapid user interactions without errors', async () => {
      const searchInput = document.getElementById('trackingCode');
      const searchButton = document.querySelector('.search-bar-pill button');
      
      // Simulate rapid interactions
      for (let i = 0; i < 100; i++) {
        searchInput.dispatchEvent(new Event('focus'));
        searchInput.value = `TEST_${i}`;
        searchInput.dispatchEvent(new Event('input'));
        searchInput.dispatchEvent(new Event('blur'));
        
        if (searchButton) {
          searchButton.dispatchEvent(new Event('mouseenter'));
          searchButton.dispatchEvent(new Event('mouseleave'));
        }
      }
      
      // Should complete without errors
      expect(searchInput.value).toBe('TEST_99');
    });

    test('should handle multiple rapid form submissions', () => {
      const searchInput = document.getElementById('trackingCode');
      const searchForm = document.querySelector('form');
      
      searchInput.value = 'RAPID_TEST_123';
      
      // Submit form multiple times rapidly
      for (let i = 0; i < 10; i++) {
        const submitEvent = new Event('submit');
        submitEvent.preventDefault = jest.fn();
        searchForm.dispatchEvent(submitEvent);
      }
      
      // Should handle all submissions
      expect(window.location.href).toBe('/tracking/RAPID_TEST_123');
    });
  });

  describe('Accessibility Integration', () => {
    test('should support keyboard-only navigation', () => {
      const searchInput = document.getElementById('trackingCode');
      const loginButton = document.querySelector('button[onclick="handleGoogleLogin()"]');
      
      // Tab to search input
      searchInput.focus();
      expect(document.activeElement).toBe(searchInput);
      
      // Type tracking code
      searchInput.value = 'KEYBOARD_TEST_123';
      
      // Submit with Enter
      const enterEvent = new KeyboardEvent('keypress', { key: 'Enter' });
      enterEvent.preventDefault = jest.fn();
      searchInput.dispatchEvent(enterEvent);
      
      expect(window.location.href).toBe('/tracking/KEYBOARD_TEST_123');
    });

    test('should have proper ARIA attributes and labels', () => {
      const navbar = document.querySelector('.navbar');
      const images = document.querySelectorAll('img');
      
      // Check navigation accessibility
      expect(navbar.getAttribute('role')).toBe('navigation');
      expect(navbar.getAttribute('aria-label')).toBe('main navigation');
      
      // Check image alt texts
      images.forEach(img => {
        expect(img.getAttribute('alt')).toBeTruthy();
      });
    });
  });

  describe('Data Flow Integration', () => {
    test('should properly encode and pass tracking codes through the system', () => {
      const testCases = [
        { input: 'SIMPLE_123', expected: 'SIMPLE_123' },
        { input: 'DELA_CRUZ_456', expected: 'DELA_CRUZ_456' },
        { input: 'SPECIAL@CHAR_789', expected: 'SPECIAL%40CHAR_789' },
        { input: 'SPACES AND_STUFF_999', expected: 'SPACES%20AND_STUFF_999' }
      ];
      
      testCases.forEach(({ input, expected }) => {
        // Reset location
        window.location.href = '';
        
        const searchInput = document.getElementById('trackingCode');
        const searchForm = document.querySelector('form');
        
        searchInput.value = input;
        
        const submitEvent = new Event('submit');
        submitEvent.preventDefault = jest.fn();
        searchForm.dispatchEvent(submitEvent);
        
        expect(window.location.href).toBe(`/tracking/${expected}`);
      });
    });

    test('should maintain state consistency across user interactions', () => {
      const searchInput = document.getElementById('trackingCode');
      
      // User types, clears, types again
      searchInput.value = 'FIRST_123';
      expect(searchInput.value).toBe('FIRST_123');
      
      searchInput.value = '';
      expect(searchInput.value).toBe('');
      
      searchInput.value = 'SECOND_456';
      expect(searchInput.value).toBe('SECOND_456');
      
      // Submit final value
      const searchForm = document.querySelector('form');
      const submitEvent = new Event('submit');
      submitEvent.preventDefault = jest.fn();
      searchForm.dispatchEvent(submitEvent);
      
      expect(window.location.href).toBe('/tracking/SECOND_456');
    });
  });
}); 