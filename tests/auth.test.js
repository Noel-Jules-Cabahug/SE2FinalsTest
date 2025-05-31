const request = require('supertest');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const { validateEmailDomain, createUserSession } = require('../src/auth');

const app = express();
let mockUser;

// Mock session middleware
beforeAll(() => {
  app.use(session({ 
    secret: 'test-secret',
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
});

beforeEach(() => {
  mockUser = {
    id: '123',
    email: 'employee@xu.edu.ph',
    name: 'Test Employee',
    role: 'evaluator'
  };
});

describe('Landing Page Login (RS001)', () => {
  test('should have login button available', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    // Check for login button in response body
    expect(response.text).toContain('Login with Google');
  });
});

describe('Google OAuth Authentication (RS002)', () => {
  test('should redirect to Google OAuth when login is initiated', async () => {
    const response = await request(app).get('/auth/google');
    expect(response.status).toBe(302); // Redirect status
    expect(response.header.location).toContain('accounts.google.com');
  });
});

describe('Email Domain Validation (RS003, RS004)', () => {
  test('should accept valid @xu.edu.ph email', () => {
    expect(validateEmailDomain('employee@xu.edu.ph')).toBe(true);
  });

  test('should accept valid @my.xu.edu.ph email', () => {
    expect(validateEmailDomain('student@my.xu.edu.ph')).toBe(true);
  });

  test('should reject email from invalid domain', () => {
    expect(validateEmailDomain('user@gmail.com')).toBe(false);
  });

  test('should reject malformed email addresses', () => {
    expect(validateEmailDomain('invalid-email')).toBe(false);
    expect(validateEmailDomain('@xu.edu.ph')).toBe(false);
    expect(validateEmailDomain('user@')).toBe(false);
  });
});

describe('Role Assignment (RS005)', () => {
  test('should assign correct role based on email domain and metadata', async () => {
    const response = await request(app)
      .get('/auth/google/callback')
      .query({ code: 'mock-code' });
    
    expect(response.status).toBe(200);
    expect(response.body.role).toBeDefined();
    expect(['evaluator', 'intern', 'admin']).toContain(response.body.role);
  });

  test('should fetch role metadata from database', async () => {
    // Mock database call
    const userRole = await getUserRole(mockUser.email);
    expect(userRole).toBe('evaluator');
  });
});

describe('Session Management (RS006)', () => {
  test('should create session with user data on successful login', async () => {
    const session = await createUserSession(mockUser);
    expect(session).toBeDefined();
    expect(session.user.email).toBe(mockUser.email);
    expect(session.user.role).toBe(mockUser.role);
  });

  test('should store user data securely in session', () => {
    const sessionData = createUserSession(mockUser);
    expect(sessionData.user).toEqual({
      id: mockUser.id,
      email: mockUser.email,
      name: mockUser.name,
      role: mockUser.role
    });
  });
});

describe('Role-based Access Control (RS007)', () => {
  test('should restrict access based on user role', async () => {
    const response = await request(app)
      .get('/admin/dashboard')
      .set('Cookie', ['connect.sid=test-session']);
    
    expect(response.status).toBe(403); // Forbidden for non-admin roles
  });

  test('should allow access to authorized routes', async () => {
    const response = await request(app)
      .get('/evaluator/dashboard')
      .set('Cookie', ['connect.sid=test-session']);
    
    expect(response.status).toBe(200); // Allowed for evaluator role
  });
});

describe('Login Success Handling (RS008)', () => {
  test('should redirect to appropriate dashboard after successful login', async () => {
    const response = await request(app)
      .get('/auth/google/callback')
      .query({ 
        code: 'valid-code',
        state: 'test-state'
      });
    
    expect(response.status).toBe(302);
    expect(response.header.location).toContain('/dashboard');
  });

  test('should display success message on login', async () => {
    const response = await request(app)
      .get('/auth/google/callback')
      .query({ code: 'valid-code' });
    
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login successful');
  });
});

describe('Logout Functionality (RS009)', () => {
  test('should destroy session on logout', async () => {
    const response = await request(app).post('/auth/logout');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Logged out successfully');
  });

  test('should clear authentication cookies', async () => {
    const response = await request(app).post('/auth/logout');
    expect(response.header['set-cookie']).toBeDefined();
    expect(response.header['set-cookie'][0]).toContain('connect.sid=;');
  });
});
