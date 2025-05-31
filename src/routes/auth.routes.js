const express = require('express');
const passport = require('passport');
const router = express.Router();
const { isAuthenticated } = require('../auth');

// Login page route (RS001)
router.get('/', (req, res) => {
  res.render('login', { title: 'Login - Xavier University' });
});

// Initiate Google OAuth login (RS002)
router.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    hostedDomain: 'xu.edu.ph' // Restrict to XU domains
  })
);

// Google OAuth callback (RS003, RS004)
router.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    failureMessage: true
  }),
  (req, res) => {
    // RS008: Redirect to appropriate dashboard
    const dashboardPath = `/${req.user.role}/dashboard`;
    res.redirect(dashboardPath);
  }
);

// Protected route example (RS007)
router.get('/dashboard', isAuthenticated, (req, res) => {
  res.json({
    message: 'Welcome to your dashboard',
    user: req.user
  });
});

// Logout route (RS009)
router.post('/auth/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: 'Error during logout' });
    }
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.json({ message: 'Logged out successfully' });
  });
});

module.exports = router; 