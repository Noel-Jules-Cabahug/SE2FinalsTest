const express = require('express');
const session = require('express-session');
const { passport, ensureAuth } = require('./auth');
require('dotenv').config();

const app = express();

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Initialize Passport and restore authentication state from session
app.use(passport.initialize());
app.use(passport.session());

// Auth Routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { 
    failureRedirect: '/login',
    failureMessage: true
  }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

// Protected route example
app.get('/dashboard', ensureAuth, (req, res) => {
  res.json({
    user: req.user,
    message: 'Welcome to the dashboard!'
  });
});

// Session status check
app.get('/auth/session', (req, res) => {
  res.json({
    isAuthenticated: req.isAuthenticated(),
    user: req.user
  });
});

// Logout route
app.get('/auth/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error('Logout error:', err);
    }
    res.redirect('/');
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

let server;
const startServer = (port = process.env.PORT || 3000) => {
  server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  return server;
};

const closeServer = async () => {
  if (server) {
    await new Promise((resolve) => server.close(resolve));
  }
};

module.exports = { app, startServer, closeServer }; 