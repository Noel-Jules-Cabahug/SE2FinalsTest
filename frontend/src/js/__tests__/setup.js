/**
 * Jest Setup File
 * This file runs before each test file is executed
 */

// Mock browser APIs that might not be available in Jest environment
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock performance API
Object.defineProperty(global, 'performance', {
  value: {
    now: jest.fn(() => Date.now()),
    mark: jest.fn(),
    measure: jest.fn(),
  },
});

// Mock requestAnimationFrame
global.requestAnimationFrame = jest.fn((cb) => setTimeout(cb, 0));
global.cancelAnimationFrame = jest.fn((id) => clearTimeout(id));

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock CSS properties
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: () => '',
    borderColor: 'rgb(233, 236, 239)',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 12px',
    transform: 'scale(1)',
  }),
});

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  key: jest.fn(),
  length: 0,
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock sessionStorage
const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  key: jest.fn(),
  length: 0,
};
Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock,
});

// Mock console methods to reduce noise in tests
const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = originalError;
});

// Custom matchers for better testing experience
expect.extend({
  toBeInDOM(received) {
    const pass = document.body.contains(received);
    if (pass) {
      return {
        message: () => `expected element not to be in the DOM`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected element to be in the DOM`,
        pass: false,
      };
    }
  },
  
  toHaveClass(received, className) {
    const pass = received.classList.contains(className);
    if (pass) {
      return {
        message: () => `expected element not to have class "${className}"`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected element to have class "${className}"`,
        pass: false,
      };
    }
  },
  
  toBeVisible(received) {
    const style = window.getComputedStyle(received);
    const pass = style.display !== 'none' && 
                 style.visibility !== 'hidden' && 
                 style.opacity !== '0';
    if (pass) {
      return {
        message: () => `expected element not to be visible`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected element to be visible`,
        pass: false,
      };
    }
  }
});

// Global test utilities
global.createMockEvent = (type, options = {}) => {
  const event = new Event(type, options);
  event.preventDefault = jest.fn();
  event.stopPropagation = jest.fn();
  return event;
};

global.createMockKeyboardEvent = (key, options = {}) => {
  const event = new KeyboardEvent('keypress', { key, ...options });
  event.preventDefault = jest.fn();
  event.stopPropagation = jest.fn();
  return event;
};

global.waitForNextTick = () => new Promise(resolve => setTimeout(resolve, 0));

// Clean up after each test
afterEach(() => {
  // Clear all mocks
  jest.clearAllMocks();
  
  // Reset DOM
  document.body.innerHTML = '';
  document.head.innerHTML = '';
  
  // Reset location
  delete window.location;
  window.location = { href: '', assign: jest.fn() };
  
  // Clear storage mocks
  localStorageMock.getItem.mockClear();
  localStorageMock.setItem.mockClear();
  localStorageMock.removeItem.mockClear();
  localStorageMock.clear.mockClear();
  
  sessionStorageMock.getItem.mockClear();
  sessionStorageMock.setItem.mockClear();
  sessionStorageMock.removeItem.mockClear();
  sessionStorageMock.clear.mockClear();
  
  // Clear global variables that might be set by tests
  delete global.lucide;
  delete global.alert;
});

// Test environment information
console.log('Jest setup complete - Environment: jsdom');
console.log('Custom matchers available: toBeInDOM, toHaveClass, toBeVisible');
console.log('Global utilities available: createMockEvent, createMockKeyboardEvent, waitForNextTick'); 