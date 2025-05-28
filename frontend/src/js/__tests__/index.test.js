/**
 * @jest-environment jsdom
 */

// Mock global functions
global.alert = jest.fn();
const mockLocationAssign = jest.fn();
Object.defineProperty(window, 'location', {
  value: {
    href: '',
    assign: mockLocationAssign,
  },
  writable: true,
});

// Import the module under test
import '../index.js';

describe('XU Registrar Tracking System - JavaScript Functions', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
    
    // Reset DOM
    document.body.innerHTML = `
      <form onsubmit="handleTrackingSearch(event)">
        <div class="search-bar-pill">
          <input type="text" placeholder="Enter code..." id="trackingCode">
          <button type="submit">
            <img src="./assets/search.png" alt="Search">
          </button>
        </div>
      </form>
    `;
  });

  describe('handleTrackingSearch', () => {
    test('should redirect to tracking page with valid tracking code', () => {
      // Arrange
      const trackingCode = 'ERASMO_12345';
      document.getElementById('trackingCode').value = trackingCode;
      
      const mockEvent = {
        preventDefault: jest.fn()
      };

      // Act
      window.handleTrackingSearch(mockEvent);

      // Assert
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(window.location.href).toBe(`/tracking/${encodeURIComponent(trackingCode)}`);
    });

    test('should handle tracking code with special characters', () => {
      // Arrange
      const trackingCode = 'SMITH_123-45@TEST';
      document.getElementById('trackingCode').value = trackingCode;
      
      const mockEvent = {
        preventDefault: jest.fn()
      };

      // Act
      window.handleTrackingSearch(mockEvent);

      // Assert
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(window.location.href).toBe(`/tracking/${encodeURIComponent(trackingCode)}`);
    });

    test('should trim whitespace from tracking code', () => {
      // Arrange
      const trackingCode = '  ERASMO_12345  ';
      const expectedCode = 'ERASMO_12345';
      document.getElementById('trackingCode').value = trackingCode;
      
      const mockEvent = {
        preventDefault: jest.fn()
      };

      // Act
      window.handleTrackingSearch(mockEvent);

      // Assert
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(window.location.href).toBe(`/tracking/${encodeURIComponent(expectedCode)}`);
    });

    test('should show alert for empty tracking code', () => {
      // Arrange
      document.getElementById('trackingCode').value = '';
      
      const mockEvent = {
        preventDefault: jest.fn()
      };

      // Act
      window.handleTrackingSearch(mockEvent);

      // Assert
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(global.alert).toHaveBeenCalledWith('Please enter a tracking code.');
      expect(window.location.href).toBe('');
    });

    test('should show alert for whitespace-only tracking code', () => {
      // Arrange
      document.getElementById('trackingCode').value = '   ';
      
      const mockEvent = {
        preventDefault: jest.fn()
      };

      // Act
      window.handleTrackingSearch(mockEvent);

      // Assert
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(global.alert).toHaveBeenCalledWith('Please enter a tracking code.');
      expect(window.location.href).toBe('');
    });

    test('should handle null tracking code input', () => {
      // Arrange
      document.getElementById('trackingCode').value = null;
      
      const mockEvent = {
        preventDefault: jest.fn()
      };

      // Act
      window.handleTrackingSearch(mockEvent);

      // Assert
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(global.alert).toHaveBeenCalledWith('Please enter a tracking code.');
    });
  });

  describe('handleGoogleLogin', () => {
    test('should redirect to Google OAuth endpoint', () => {
      // Act
      window.handleGoogleLogin();

      // Assert
      expect(window.location.href).toBe('/auth/google');
    });
  });

  describe('DOM Event Handlers', () => {
    test('should add focus effects to search input', () => {
      // Arrange
      const searchInput = document.getElementById('trackingCode');
      const searchPill = searchInput.parentElement;

      // Act
      searchInput.dispatchEvent(new Event('focus'));

      // Assert
      expect(searchPill.style.borderColor).toBe('rgb(58, 79, 164)');
      expect(searchPill.style.boxShadow).toBe('rgba(58, 79, 164, 0.2) 0px 4px 16px');
    });

    test('should remove focus effects on blur', () => {
      // Arrange
      const searchInput = document.getElementById('trackingCode');
      const searchPill = searchInput.parentElement;
      
      // First focus the input
      searchInput.dispatchEvent(new Event('focus'));

      // Act
      searchInput.dispatchEvent(new Event('blur'));

      // Assert
      expect(searchPill.style.borderColor).toBe('rgb(233, 236, 239)');
      expect(searchPill.style.boxShadow).toBe('rgba(0, 0, 0, 0.1) 0px 2px 12px');
    });

    test('should handle Enter key press in search input', () => {
      // Arrange
      const searchInput = document.getElementById('trackingCode');
      searchInput.value = 'TEST_12345';
      
      const mockEvent = {
        key: 'Enter',
        preventDefault: jest.fn()
      };

      // Act
      searchInput.dispatchEvent(new KeyboardEvent('keypress', mockEvent));

      // Assert - This test checks if the event handler is properly attached
      // The actual functionality is tested in handleTrackingSearch tests
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });

    test('should add hover effects to search button', () => {
      // Arrange
      const searchButton = document.querySelector('.search-bar-pill button');

      // Act
      searchButton.dispatchEvent(new Event('mouseenter'));

      // Assert
      expect(searchButton.style.transform).toBe('scale(1.05)');
    });

    test('should remove hover effects from search button', () => {
      // Arrange
      const searchButton = document.querySelector('.search-bar-pill button');
      
      // First add hover effect
      searchButton.dispatchEvent(new Event('mouseenter'));

      // Act
      searchButton.dispatchEvent(new Event('mouseleave'));

      // Assert
      expect(searchButton.style.transform).toBe('scale(1)');
    });
  });

  describe('Form Submission Integration', () => {
    test('should handle form submission with valid data', () => {
      // Arrange
      const form = document.querySelector('form');
      const trackingInput = document.getElementById('trackingCode');
      trackingInput.value = 'INTEGRATION_TEST_123';

      const mockEvent = {
        preventDefault: jest.fn(),
        target: form
      };

      // Act
      window.handleTrackingSearch(mockEvent);

      // Assert
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(window.location.href).toBe('/tracking/INTEGRATION_TEST_123');
    });
  });

  describe('Edge Cases', () => {
    test('should handle missing DOM elements gracefully', () => {
      // Arrange
      document.body.innerHTML = ''; // Remove all DOM elements
      
      const mockEvent = {
        preventDefault: jest.fn()
      };

      // Act & Assert - Should not throw error
      expect(() => {
        window.handleTrackingSearch(mockEvent);
      }).not.toThrow();
    });

    test('should handle very long tracking codes', () => {
      // Arrange
      const longTrackingCode = 'A'.repeat(1000);
      document.getElementById('trackingCode').value = longTrackingCode;
      
      const mockEvent = {
        preventDefault: jest.fn()
      };

      // Act
      window.handleTrackingSearch(mockEvent);

      // Assert
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(window.location.href).toBe(`/tracking/${encodeURIComponent(longTrackingCode)}`);
    });

    test('should handle tracking codes with only numbers', () => {
      // Arrange
      const numericCode = '12345';
      document.getElementById('trackingCode').value = numericCode;
      
      const mockEvent = {
        preventDefault: jest.fn()
      };

      // Act
      window.handleTrackingSearch(mockEvent);

      // Assert
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(window.location.href).toBe(`/tracking/${numericCode}`);
    });
  });

  describe('Lucide Icons Integration', () => {
    test('should initialize Lucide icons when available', () => {
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

    test('should handle missing Lucide gracefully', () => {
      // Arrange
      global.lucide = undefined;

      // Act & Assert - Should not throw error
      expect(() => {
        document.dispatchEvent(new Event('DOMContentLoaded'));
      }).not.toThrow();
    });
  });
}); 