# Test-Driven Development (TDD) Guide

## 🔄 The TDD Cycle: Red-Green-Refactor

This guide demonstrates **Test-Driven Development** using the XU Registrar Tracking System as an example.

### TDD Philosophy

> "Write tests first, then write code to make them pass"

**Benefits:**
- ✅ Better code design
- ✅ Higher test coverage
- ✅ Fewer bugs
- ✅ More maintainable code
- ✅ Clear requirements

---

## 🔴 RED Phase: Write Failing Tests First

In the RED phase, we write tests for functionality that **doesn't exist yet**. These tests will fail initially.

### Example: Input Validation Feature

```javascript
// ❌ This test will FAIL initially (RED)
test('should validate tracking code format in real-time', () => {
  // Arrange
  const validator = new InputValidator(mockInput); // Class doesn't exist yet!
  const validCode = 'ERASMO_12345';
  
  // Act
  const result = validator.validateFormat(validCode); // Method doesn't exist!
  
  // Assert
  expect(result.isValid).toBe(true);
  expect(result.message).toBe('Valid tracking code format');
});
```

**Why this fails:**
- `InputValidator` class doesn't exist
- `validateFormat` method doesn't exist
- We haven't written any implementation yet

### Running the Test (RED)

```bash
$ npm test tdd-features.test.js

FAIL src/js/__tests__/tdd-features.test.js
  ● Test suite failed to run
    Cannot resolve module '../features.js'
    
  ● TDD: Real-time Input Validation Feature › should validate tracking code format
    ReferenceError: InputValidator is not defined
```

---

## 🟢 GREEN Phase: Make Tests Pass with Minimal Code

In the GREEN phase, we write **just enough code** to make the failing tests pass.

### Example: Minimal InputValidator Implementation

```javascript
// ✅ Minimal implementation to make tests PASS (GREEN)
export class InputValidator {
  constructor(inputElement) {
    this.input = inputElement;
  }

  validateFormat(code) {
    // Just enough logic to pass the test
    if (code === 'ERASMO_12345') {
      return { isValid: true, message: 'Valid tracking code format' };
    }
    return { isValid: false, message: 'Format should be SURNAME_NUMBER' };
  }
}
```

**Key Principles:**
- Write the **minimum code** to pass
- Don't worry about edge cases yet
- Hard-code values if needed
- Focus on making tests green

### Running the Test (GREEN)

```bash
$ npm test tdd-features.test.js

PASS src/js/__tests__/tdd-features.test.js
  ✓ should validate tracking code format in real-time (2ms)
  
Test Suites: 1 passed, 1 total  
Tests: 1 passed, 1 total
```

---

## 🔵 REFACTOR Phase: Improve Code While Keeping Tests Passing

In the REFACTOR phase, we improve the implementation while keeping all tests passing.

### Example: Improved InputValidator Implementation

```javascript
// 🔵 REFACTORED version - better implementation (REFACTOR)
export class InputValidator {
  constructor(inputElement) {
    this.input = inputElement;
    this.messageElement = document.getElementById('validation-message');
    this.patterns = {
      basic: /^[A-Z_]+_\d+$/,
      minLength: 3,
      maxLength: 56
    };
  }

  validateFormat(code) {
    // Handle edge cases
    if (!code || code.trim() === '') {
      return this.createResult(false, 'Tracking code is required');
    }

    if (code.length > this.patterns.maxLength) {
      return this.createResult(false, 'Tracking code too long (max 50 characters)');
    }

    if (!this.patterns.basic.test(code)) {
      return this.createResult(false, 'Format should be SURNAME_NUMBER');
    }

    // Validate surname length
    const [surname] = code.split('_');
    if (surname.length < 2) {
      return this.createResult(false, 'Surname must be at least 2 characters');
    }

    return this.createResult(true, 'Valid tracking code format');
  }

  createResult(isValid, message) {
    return { isValid, message };
  }

  // Additional methods for better UX
  showValidationMessage(code) {
    const result = this.validateFormat(code);
    this.updateUI(result);
  }

  updateUI(result) {
    if (this.messageElement) {
      this.messageElement.textContent = result.isValid ? '' : result.message;
      this.messageElement.classList.toggle('error', !result.isValid);
    }
  }
}
```

### Running Tests After Refactoring

```bash
$ npm test tdd-features.test.js

PASS src/js/__tests__/tdd-features.test.js
  ✓ should validate tracking code format in real-time (2ms)
  ✓ should show error for invalid format (1ms)
  ✓ should validate minimum surname length (1ms)
  ✓ should validate maximum tracking code length (1ms)
  
Test Suites: 1 passed, 1 total  
Tests: 4 passed, 4 total
```

---

## 🔄 Complete TDD Cycle Examples

### 1. Recent Searches Feature

#### 🔴 RED: Write failing test
```javascript
test('should save successful searches to localStorage', () => {
  const recentSearches = new RecentSearches(); // Doesn't exist yet
  recentSearches.add('ERASMO_12345');
  
  const stored = recentSearches.getAll();
  expect(stored).toContain('ERASMO_12345');
});
```

#### 🟢 GREEN: Minimal implementation
```javascript
export class RecentSearches {
  add(code) {
    localStorage.setItem('searches', JSON.stringify([code]));
  }
  
  getAll() {
    return JSON.parse(localStorage.getItem('searches') || '[]');
  }
}
```

#### 🔵 REFACTOR: Improved implementation
```javascript
export class RecentSearches {
  constructor() {
    this.storageKey = 'xu-recent-searches';
    this.maxItems = 5;
  }

  add(trackingCode) {
    const searches = this.getAll();
    const uniqueSearches = searches.filter(code => code !== trackingCode);
    uniqueSearches.unshift(trackingCode);
    
    const limitedSearches = uniqueSearches.slice(0, this.maxItems);
    localStorage.setItem(this.storageKey, JSON.stringify(limitedSearches));
  }

  getAll() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }
}
```

### 2. Loading Manager Feature

#### 🔴 RED: Write failing test
```javascript
test('should show loading state when search starts', () => {
  const loadingManager = new LoadingManager(mockButton); // Doesn't exist
  loadingManager.showLoading();
  
  expect(mockButton.disabled).toBe(true);
  expect(mockButton.classList.contains('is-loading')).toBe(true);
});
```

#### 🟢 GREEN: Minimal implementation
```javascript
export class LoadingManager {
  constructor(button) {
    this.button = button;
  }
  
  showLoading() {
    this.button.disabled = true;
    this.button.classList.add('is-loading');
  }
}
```

#### 🔵 REFACTOR: Complete implementation
```javascript
export class LoadingManager {
  constructor(buttonElement) {
    this.button = buttonElement;
    this.originalText = buttonElement.querySelector('.button-text').textContent;
    this.isLoading = false;
    this.timeoutMs = 5000;
  }

  showLoading() {
    this.isLoading = true;
    this.button.disabled = true;
    this.button.classList.add('is-loading');
    this.updateButtonText('Searching...');
    this.addSpinner();
    this.setAutoTimeout();
  }

  hideLoading() {
    this.isLoading = false;
    this.button.disabled = false;
    this.button.classList.remove('is-loading');
    this.updateButtonText(this.originalText);
    this.removeSpinner();
    this.clearTimeout();
  }

  // Helper methods...
}
```

---

## 🎯 TDD Best Practices

### 1. Write the Simplest Test First
```javascript
// ✅ Good: Simple, focused test
test('should return true for valid code', () => {
  expect(validator.isValid('ERASMO_12345')).toBe(true);
});

// ❌ Bad: Complex test with multiple assertions
test('should handle all validation scenarios', () => {
  // Testing too many things at once
});
```

### 2. Make Tests Fail for the Right Reason
```javascript
// ✅ Good: Clear failure reason
test('should validate surname length', () => {
  const result = validator.validateFormat('A_12345');
  expect(result.message).toBe('Surname must be at least 2 characters');
});
```

### 3. Write Minimal Implementation
```javascript
// ✅ Good: Just enough to pass
validateFormat(code) {
  if (code === 'A_12345') {
    return { message: 'Surname must be at least 2 characters' };
  }
  return { message: 'Valid' };
}

// ❌ Bad: Over-engineering in GREEN phase
validateFormat(code) {
  // Complex regex, error handling, edge cases...
  // Save this for REFACTOR phase!
}
```

### 4. Refactor with Confidence
```javascript
// 🔵 REFACTOR: Now improve the implementation
validateFormat(code) {
  const validationRules = [
    { check: code => !code, message: 'Required' },
    { check: code => code.length < 3, message: 'Too short' },
    { check: code => !code.includes('_'), message: 'Invalid format' }
  ];

  for (const rule of validationRules) {
    if (rule.check(code)) {
      return { isValid: false, message: rule.message };
    }
  }

  return { isValid: true, message: 'Valid' };
}
```

---

## 🚀 Running TDD Tests

### Initial Run (All RED)
```bash
$ npm test tdd-features.test.js

FAIL  src/js/__tests__/tdd-features.test.js
  ● Test suite failed to run
    Cannot resolve module '../features.js'

  ● TDD: Real-time Input Validation Feature › InputValidator Class › should validate tracking code format
    ReferenceError: InputValidator is not defined

  ● TDD: Recent Searches Feature › RecentSearches Class › should save searches
    ReferenceError: RecentSearches is not defined

Tests:       0 passed, 5 failed
```

### After Implementation (All GREEN)
```bash
$ npm test tdd-features.test.js

PASS  src/js/__tests__/tdd-features.test.js
  TDD: Real-time Input Validation Feature
    InputValidator Class
      ✓ should validate tracking code format in real-time (3ms)
      ✓ should show error for invalid format (2ms)
      ✓ should validate minimum surname length (1ms)
  
  TDD: Recent Searches Feature  
    RecentSearches Class
      ✓ should save successful searches to localStorage (2ms)
      ✓ should limit recent searches to maximum of 5 (4ms)

Test Suites: 1 passed, 1 total
Tests:       15 passed, 15 total
Time:        2.341 s
```

---

## 📊 TDD vs Traditional Development

| Aspect | Traditional | TDD |
|--------|------------|-----|
| **When tests are written** | After code | Before code |
| **Test coverage** | Often incomplete | High coverage |
| **Design quality** | Varies | Better design |
| **Debugging time** | Higher | Lower |
| **Confidence in changes** | Lower | Higher |
| **Requirements clarity** | Can be vague | Crystal clear |

---

## 🎉 TDD Benefits in Practice

### 1. **Better API Design**
Writing tests first forces you to think about how your code will be used:

```javascript
// TDD leads to cleaner APIs
const validator = new InputValidator(inputElement);
const result = validator.validateFormat(code);

// Instead of confusing APIs
const isValid = checkTrackingCodeFormatValidation(code, element, options);
```

### 2. **Living Documentation**
Tests serve as documentation that never gets outdated:

```javascript
test('should handle compound surnames like DELA_CRUZ', () => {
  const result = validator.validateFormat('DELA_CRUZ_12345');
  expect(result.isValid).toBe(true);
});
```

### 3. **Confident Refactoring**
Change implementation without fear of breaking functionality:

```javascript
// Refactor from regex to rules engine
// Tests ensure behavior stays the same
```

### 4. **Faster Development**
Less debugging time, fewer bugs in production:

```bash
# Before TDD: Write code → Manual testing → Fix bugs → Repeat
# With TDD: Write test → Write code → Refactor → Done
```

---

## 🔧 TDD Tools and Setup

### Jest Configuration for TDD
```json
{
  "scripts": {
    "tdd": "jest --watch --testNamePattern='TDD:'",
    "tdd:focus": "jest --watch --testNamePattern"
  },
  "jest": {
    "watchMode": {
      "usageHint": true,
      "watchPlugins": ["jest-watch-typeahead/filename"]
    }
  }
}
```

### Running TDD Session
```bash
# Start TDD watch mode
npm run tdd

# Focus on specific feature
npm run tdd:focus -- "InputValidator"

# Run with coverage
npm run test:coverage -- --testNamePattern="TDD:"
```

---

## 📝 TDD Checklist

### Before Writing Code:
- [ ] Write a failing test first
- [ ] Test fails for the right reason  
- [ ] Test is simple and focused
- [ ] Test has clear assertions

### When Writing Implementation:
- [ ] Write minimal code to pass
- [ ] Don't over-engineer
- [ ] Focus on making tests green
- [ ] One test at a time

### During Refactoring:
- [ ] All tests still pass
- [ ] Code is cleaner/more maintainable
- [ ] No new functionality added
- [ ] Performance improved if needed

### Final Check:
- [ ] Tests are comprehensive
- [ ] Code is production-ready
- [ ] Documentation is updated
- [ ] Team review completed

---

## 🎯 Next Steps

1. **Practice TDD** with new features
2. **Integrate TDD tests** with existing test suite
3. **Set up CI/CD** to run TDD tests
4. **Train team** on TDD practices
5. **Measure improvements** in code quality

Remember: **TDD is a discipline, not just a testing strategy!** 🚀 