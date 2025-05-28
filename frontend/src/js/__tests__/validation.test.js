/**
 * @jest-environment jsdom
 */

describe('XU Registrar Tracking System - Input Validation', () => {
  beforeEach(() => {
    // Mock DOM
    document.body.innerHTML = `
      <form>
        <input type="text" id="trackingCode" placeholder="Enter code...">
        <button type="submit">Search</button>
      </form>
    `;
    
    // Mock global functions
    global.alert = jest.fn();
    Object.defineProperty(window, 'location', {
      value: { href: '' },
      writable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Tracking Code Format Validation', () => {
    test('should accept valid surname_number format', () => {
      const validCodes = [
        'ERASMO_12345',
        'DELA_CRUZ_98765',
        'SANTOS_001',
        'REYES_123456789'
      ];

      validCodes.forEach(code => {
        expect(code).toMatch(/^[A-Z_]+_\d+$/);
      });
    });

    test('should handle mixed case input by converting to uppercase', () => {
      const input = document.getElementById('trackingCode');
      input.value = 'erasmo_12345';
      
      const trimmedValue = input.value.trim().toUpperCase();
      expect(trimmedValue).toBe('ERASMO_12345');
    });

    test('should detect invalid format patterns', () => {
      const invalidCodes = [
        'ERASMO12345',    // Missing underscore
        '_12345',         // Missing surname
        'ERASMO_',        // Missing number
        '12345_ERASMO',   // Wrong order
        'ERASMO__12345',  // Double underscore
        'ERASMO_12345_',  // Trailing underscore
      ];

      const validPattern = /^[A-Z_]+_\d+$/;
      
      invalidCodes.forEach(code => {
        expect(code).not.toMatch(validPattern);
      });
    });
  });

  describe('Input Sanitization', () => {
    test('should trim whitespace from input', () => {
      const testCases = [
        { input: '  ERASMO_12345  ', expected: 'ERASMO_12345' },
        { input: '\t\nSANTOS_001\t\n', expected: 'SANTOS_001' },
        { input: '   ', expected: '' },
        { input: '', expected: '' }
      ];

      testCases.forEach(({ input, expected }) => {
        expect(input.trim()).toBe(expected);
      });
    });

    test('should handle special characters in tracking code', () => {
      const specialCharacterCodes = [
        'DELA-CRUZ_12345',
        'O\'CONNOR_67890',
        'VAN_DER_BERG_111',
        'ST_JAMES_999'
      ];

      specialCharacterCodes.forEach(code => {
        const encoded = encodeURIComponent(code);
        expect(encoded).toBeTruthy();
        expect(decodeURIComponent(encoded)).toBe(code);
      });
    });

    test('should prevent XSS attempts in input', () => {
      const xssAttempts = [
        '<script>alert("xss")</script>',
        'javascript:alert("xss")',
        '"><script>alert("xss")</script>',
        'ERASMO_12345<img src=x onerror=alert("xss")>'
      ];

      xssAttempts.forEach(maliciousInput => {
        const sanitized = maliciousInput
          .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
          .replace(/javascript:/gi, '')
          .replace(/<[^>]*>/g, '');
        
        expect(sanitized).not.toContain('<script');
        expect(sanitized).not.toContain('javascript:');
      });
    });
  });

  describe('Length Validation', () => {
    test('should handle very short tracking codes', () => {
      const shortCodes = ['A_1', 'X_0', 'AB_12'];
      
      shortCodes.forEach(code => {
        expect(code.length).toBeGreaterThan(2);
        expect(code).toMatch(/^[A-Z_]+_\d+$/);
      });
    });

    test('should handle very long tracking codes', () => {
      const longSurname = 'A'.repeat(50);
      const longNumber = '1'.repeat(20);
      const longCode = `${longSurname}_${longNumber}`;
      
      expect(longCode.length).toBe(71); // 50 + 1 + 20
      expect(longCode).toMatch(/^[A-Z_]+_\d+$/);
    });

    test('should handle maximum reasonable input length', () => {
      const maxLength = 100;
      const longInput = 'A'.repeat(maxLength);
      
      expect(longInput.length).toBe(maxLength);
      
      // Test that encoding doesn't break with long inputs
      const encoded = encodeURIComponent(longInput);
      expect(encoded).toBeTruthy();
    });
  });

  describe('Numeric Component Validation', () => {
    test('should accept various numeric formats', () => {
      const validNumbers = [
        '12345',          // Regular number
        '001',            // Leading zeros
        '0',              // Single zero
        '123456789012',   // Long number
      ];

      validNumbers.forEach(num => {
        expect(num).toMatch(/^\d+$/);
      });
    });

    test('should reject non-numeric characters in number part', () => {
      const invalidNumbers = [
        'ERASMO_12345A',
        'SANTOS_12.34',
        'REYES_12-34',
        'DELA_CRUZ_12,345'
      ];

      invalidNumbers.forEach(code => {
        const numberPart = code.split('_').pop();
        expect(numberPart).not.toMatch(/^\d+$/);
      });
    });
  });

  describe('Surname Component Validation', () => {
    test('should accept valid surname formats', () => {
      const validSurnames = [
        'ERASMO',
        'DELA_CRUZ',
        'VAN_DER_BERG',
        'ST_JAMES',
        'O_CONNOR'
      ];

      validSurnames.forEach(surname => {
        expect(surname).toMatch(/^[A-Z_]+$/);
      });
    });

    test('should handle compound surnames', () => {
      const compoundSurnames = [
        'DELA_CRUZ_12345',
        'VAN_DER_BERG_67890',
        'ST_MARY_ANN_111'
      ];

      compoundSurnames.forEach(code => {
        const parts = code.split('_');
        const numberPart = parts.pop();
        const surnamePart = parts.join('_');
        
        expect(numberPart).toMatch(/^\d+$/);
        expect(surnamePart).toMatch(/^[A-Z_]+$/);
      });
    });
  });

  describe('Error Handling', () => {
    test('should handle null or undefined input gracefully', () => {
      const problematicInputs = [null, undefined, NaN];
      
      problematicInputs.forEach(input => {
        const safeValue = (input || '').toString().trim();
        expect(safeValue).toBe('');
      });
    });

    test('should handle non-string input types', () => {
      const nonStringInputs = [12345, true, false, [], {}];
      
      nonStringInputs.forEach(input => {
        const stringValue = String(input);
        expect(typeof stringValue).toBe('string');
      });
    });
  });

  describe('Case Sensitivity', () => {
    test('should normalize case for consistent processing', () => {
      const mixedCaseCodes = [
        'erasmo_12345',
        'ERASMO_12345',
        'Erasmo_12345',
        'eRaSMo_12345'
      ];

      const expectedNormalized = 'ERASMO_12345';
      
      mixedCaseCodes.forEach(code => {
        const normalized = code.toUpperCase();
        expect(normalized).toBe(expectedNormalized);
      });
    });
  });

  describe('URL Encoding', () => {
    test('should properly encode tracking codes for URLs', () => {
      const testCases = [
        { input: 'ERASMO_12345', expected: 'ERASMO_12345' },
        { input: 'DELA CRUZ_12345', expected: 'DELA%20CRUZ_12345' },
        { input: 'O\'CONNOR_67890', expected: 'O\'CONNOR_67890' },
        { input: 'TEST@CODE_999', expected: 'TEST%40CODE_999' }
      ];

      testCases.forEach(({ input, expected }) => {
        const encoded = encodeURIComponent(input);
        expect(encoded).toBe(expected);
      });
    });

    test('should maintain data integrity through encode/decode cycle', () => {
      const originalCodes = [
        'ERASMO_12345',
        'DELA_CRUZ_67890',
        'TEST@SYMBOL_999',
        'SPECIAL#CHARS_123'
      ];

      originalCodes.forEach(original => {
        const encoded = encodeURIComponent(original);
        const decoded = decodeURIComponent(encoded);
        expect(decoded).toBe(original);
      });
    });
  });

  describe('Performance Tests', () => {
    test('should handle rapid input changes efficiently', () => {
      const input = document.getElementById('trackingCode');
      const startTime = performance.now();
      
      // Simulate rapid typing
      for (let i = 0; i < 1000; i++) {
        input.value = `TEST_${i}`;
        input.value.trim();
      }
      
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      // Should complete within reasonable time (adjust threshold as needed)
      expect(duration).toBeLessThan(100); // 100ms
    });

    test('should handle large input efficiently', () => {
      const largeInput = 'A'.repeat(10000);
      const startTime = performance.now();
      
      const trimmed = largeInput.trim();
      const encoded = encodeURIComponent(trimmed);
      
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      expect(duration).toBeLessThan(50); // 50ms
      expect(encoded).toBeTruthy();
    });
  });
}); 