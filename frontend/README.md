# XU Registrar Request Tracking System - Frontend

A modern, responsive frontend application for tracking registrar document requests at Xavier University.

## 🧪 Testing

This project includes comprehensive unit tests covering all aspects of the frontend functionality.

### Test Structure

```
src/js/__tests__/
├── setup.js           # Jest configuration and global test utilities
├── index.test.js      # Main JavaScript functions tests
├── dom.test.js        # DOM structure and interaction tests
├── validation.test.js # Input validation and sanitization tests
└── integration.test.js # End-to-end workflow tests
```

### What We Test

#### 1. **JavaScript Functions** (`index.test.js`)
- ✅ `handleTrackingSearch()` function with various inputs
- ✅ `handleGoogleLogin()` redirect functionality
- ✅ Form submission and validation
- ✅ Event handlers (focus, blur, hover, keypress)
- ✅ Edge cases and error handling
- ✅ Lucide icons integration

#### 2. **DOM Structure** (`dom.test.js`)
- ✅ HTML structure validation
- ✅ CSS class verification
- ✅ Accessibility features (ARIA labels, alt text)
- ✅ Form behavior and attributes
- ✅ Image sources and paths
- ✅ Layout structure (Bulma CSS framework)
- ✅ Button interactions

#### 3. **Input Validation** (`validation.test.js`)
- ✅ Tracking code format validation (SURNAME_NUMBER)
- ✅ Input sanitization and trimming
- ✅ XSS prevention
- ✅ Length validation (short and long inputs)
- ✅ Numeric component validation
- ✅ Surname component validation
- ✅ Error handling for edge cases
- ✅ Case sensitivity normalization
- ✅ URL encoding/decoding
- ✅ Performance tests

#### 4. **Integration Tests** (`integration.test.js`)
- ✅ Complete user workflows
- ✅ Error handling integration
- ✅ Browser compatibility
- ✅ Responsive design
- ✅ Performance under load
- ✅ Accessibility compliance
- ✅ Data flow from input to output

### Running Tests

#### Prerequisites

```bash
npm install
```

#### Available Test Commands

```bash
# Run all tests once
npm test

# Run tests in watch mode (re-runs on file changes)
npm test:watch

# Run tests with coverage report
npm test:coverage

# Run tests for CI/CD (with JUnit output)
npm test:ci

# Lint JavaScript code
npm lint

# Fix linting issues automatically
npm lint:fix
```

#### Test Coverage

The project maintains high test coverage standards:

- **Branches**: 80% minimum
- **Functions**: 80% minimum  
- **Lines**: 80% minimum
- **Statements**: 80% minimum

#### Example Test Run Output

```bash
$ npm test

> xu-registrar-tracking-frontend@1.0.0 test
> jest

 PASS  src/js/__tests__/index.test.js
 PASS  src/js/__tests__/dom.test.js  
 PASS  src/js/__tests__/validation.test.js
 PASS  src/js/__tests__/integration.test.js

Test Suites: 4 passed, 4 total
Tests:       45 passed, 45 total
Snapshots:   0 total
Time:        2.543 s
Ran all test suites.
```

### Test Categories Explained

#### **Unit Tests**
Test individual functions and components in isolation:
- Function input/output validation
- Error handling
- Edge cases
- Pure function behavior

#### **Integration Tests**  
Test how different parts work together:
- User interaction workflows
- DOM manipulation + JavaScript
- Form submission + validation
- Event handling chains

#### **Accessibility Tests**
Ensure the application is usable by everyone:
- ARIA labels and roles
- Keyboard navigation
- Screen reader compatibility
- Focus management

#### **Performance Tests**
Verify the application performs well:
- Rapid user interactions
- Large input handling
- Memory usage
- Response times

### Testing Best Practices

#### **Arrange-Act-Assert Pattern**
```javascript
test('should redirect with valid tracking code', () => {
  // Arrange - Set up test data
  const trackingCode = 'ERASMO_12345';
  document.getElementById('trackingCode').value = trackingCode;
  
  // Act - Execute the function
  window.handleTrackingSearch(mockEvent);
  
  // Assert - Verify the result
  expect(window.location.href).toBe(`/tracking/${trackingCode}`);
});
```

#### **Mock External Dependencies**
```javascript
// Mock browser APIs
global.alert = jest.fn();
Object.defineProperty(window, 'location', {
  value: { href: '' },
  writable: true,
});
```

#### **Test Edge Cases**
```javascript
test('should handle null tracking code input', () => {
  document.getElementById('trackingCode').value = null;
  // ... test implementation
});
```

### Custom Test Utilities

The project includes custom Jest matchers for better testing:

```javascript
// Check if element is in DOM
expect(element).toBeInDOM();

// Check if element has CSS class
expect(element).toHaveClass('navbar');

// Check if element is visible
expect(element).toBeVisible();
```

### CI/CD Integration

Tests are configured for continuous integration:

```javascript
// Jest configuration in package.json
"jest": {
  "testEnvironment": "jsdom",
  "collectCoverageFrom": ["src/js/**/*.js"],
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    }
  }
}
```

### Debugging Tests

#### Run Specific Test File
```bash
npm test -- index.test.js
```

#### Run Tests Matching Pattern
```bash
npm test -- --testNamePattern="tracking search"
```

#### Debug Mode
```bash
npm test -- --runInBand --no-cache --verbose
```

### Browser Testing Environment

Tests run in `jsdom` environment which simulates:
- DOM manipulation
- Event handling
- CSS styling
- Browser APIs
- Local/Session Storage
- Performance APIs

### Contributing to Tests

When adding new features:

1. **Write tests first** (TDD approach)
2. **Cover happy path and edge cases**
3. **Mock external dependencies**
4. **Maintain coverage thresholds**
5. **Update this documentation**

### Test File Naming Convention

```
feature.test.js    # Unit tests for feature
feature.dom.test.js    # DOM-specific tests
feature.integration.test.js    # Integration tests
```

---

## 🚀 Development

### Local Development Server

```bash
npm run serve
```

Starts a development server at `http://localhost:3000`

### Project Structure

```
frontend/
├── src/
│   ├── index.html          # Main HTML file
│   ├── js/
│   │   ├── index.js        # Main JavaScript functionality
│   │   └── __tests__/      # Test files
│   ├── styles/
│   │   └── main.css        # Custom styles
│   └── assets/             # Images and static files
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

### Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling
- **Bulma** - CSS framework
- **Vanilla JavaScript** - Core functionality
- **Jest** - Testing framework
- **jsdom** - Browser environment simulation

---

## 📝 License

MIT License - see LICENSE file for details. 