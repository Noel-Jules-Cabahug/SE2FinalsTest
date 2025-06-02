const request = require('supertest');
const { app, closeServer } = require('../src/app');
const { employeeWhitelist } = require('../src/auth');

describe('Employee Authentication', () => {
  afterAll(async () => {
    await closeServer();
  });

  describe('Google OAuth Authentication', () => {
    test('should redirect to Google OAuth when accessing /auth/google', async () => {
      const response = await request(app).get('/auth/google');
      expect(response.status).toBe(302); // Redirect status
      expect(response.header.location).toContain('accounts.google.com');
    });
  });

  describe('Authentication Callback', () => {
    const mockGoogleProfile = {
      emails: [{ value: 'employee@xu.edu.ph' }],
      displayName: 'Test Employee',
      id: '12345'
    };

    test('should allow whitelisted @xu.edu.ph email', async () => {
      const response = await request(app)
        .get('/auth/google/callback')
        .query({ code: 'mock_code' })
        .set('user', JSON.stringify({ ...mockGoogleProfile }));
      
      expect(response.status).toBe(302);
      expect(response.header.location).toBe('/dashboard');
    });

    test('should allow whitelisted @my.xu.edu.ph email', async () => {
      const response = await request(app)
        .get('/auth/google/callback')
        .query({ code: 'mock_code' })
        .set('user', JSON.stringify({ 
          ...mockGoogleProfile, 
          emails: [{ value: 'employee@my.xu.edu.ph' }]
        }));
      
      expect(response.status).toBe(302);
      expect(response.header.location).toBe('/dashboard');
    });

    test('should reject non-whitelisted XU domain email', async () => {
      const response = await request(app)
        .get('/auth/google/callback')
        .query({ code: 'mock_code' })
        .set('user', JSON.stringify({ 
          ...mockGoogleProfile, 
          emails: [{ value: 'random@xu.edu.ph' }]
        }));
      
      expect(response.status).toBe(403);
    });

    test('should reject non-XU domain email', async () => {
      const response = await request(app)
        .get('/auth/google/callback')
        .query({ code: 'mock_code' })
        .set('user', JSON.stringify({ 
          ...mockGoogleProfile, 
          emails: [{ value: 'employee@gmail.com' }]
        }));
      
      expect(response.status).toBe(403);
    });
  });

  describe('Session Management', () => {
    test('should create session with correct role for whitelisted employee', async () => {
      const response = await request(app)
        .get('/auth/session')
        .set('Cookie', ['connect.sid=test-session']);
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('role');
      expect(response.body.isAuthenticated).toBe(true);
    });

    test('should clear session on logout', async () => {
      const response = await request(app)
        .get('/auth/logout');
      
      expect(response.status).toBe(302);
      expect(response.header.location).toBe('/');
    });
  });
}); 