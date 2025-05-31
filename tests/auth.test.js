const { validateEmailDomain } = require('../src/auth');

describe('Email Domain Validation (RS003, RS004)', () => {
  describe('Valid XU Email Domains', () => {
    test('should accept email with @xu.edu.ph domain', () => {
      expect(validateEmailDomain('employee@xu.edu.ph')).toBe(true);
    });

    test('should accept email with @my.xu.edu.ph domain', () => {
      expect(validateEmailDomain('student@my.xu.edu.ph')).toBe(true);
    });
  });

  describe('Invalid Email Domains', () => {
    test('should reject email from non-XU domain', () => {
      expect(validateEmailDomain('user@gmail.com')).toBe(false);
      expect(validateEmailDomain('user@yahoo.com')).toBe(false);
    });

    test('should reject email with similar but invalid XU domain', () => {
      expect(validateEmailDomain('user@fake-xu.edu.ph')).toBe(false);
      expect(validateEmailDomain('user@xu.edu.ph.com')).toBe(false);
    });
  });

  describe('Invalid Email Formats', () => {
    test('should reject empty or null input', () => {
      expect(validateEmailDomain('')).toBe(false);
      expect(validateEmailDomain(null)).toBe(false);
      expect(validateEmailDomain(undefined)).toBe(false);
    });

    test('should reject malformed email addresses', () => {
      expect(validateEmailDomain('invalid-email')).toBe(false);
      expect(validateEmailDomain('@xu.edu.ph')).toBe(false);
      expect(validateEmailDomain('user@')).toBe(false);
      expect(validateEmailDomain('user@xu')).toBe(false);
    });
  });
}); 