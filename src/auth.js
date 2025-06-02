const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Whitelist of allowed employees (simulating future access control)
const employeeWhitelist = [
  'employee@xu.edu.ph',
  'admin@xu.edu.ph',
  'faculty@my.xu.edu.ph'
];

/**
 * Validates if the email belongs to Xavier University domains
 * @param {string} email - The email to validate
 * @returns {boolean} - True if email is from valid XU domain
 */
function validateEmailDomain(email) {
  // Check for null, undefined or empty string
  if (!email || typeof email !== 'string') {
    return false;
  }

  // Basic email format validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  // Convert to lowercase for case-insensitive comparison
  const lowerEmail = email.toLowerCase();
  
  // List of valid XU domains
  const validDomains = ['@xu.edu.ph', '@my.xu.edu.ph'];
  
  // Check if email ends with any of the valid domains
  return validDomains.some(domain => lowerEmail.endsWith(domain));
}

/**
 * Validates if the email is in the employee whitelist
 * @param {string} email - The email to validate
 * @returns {boolean} - True if email is whitelisted
 */
function isWhitelisted(email) {
  return employeeWhitelist.includes(email.toLowerCase());
}

/**
 * Determines user role based on email domain
 * @param {string} email - The user's email
 * @returns {string} - The assigned role
 */
function determineRole(email) {
  const lowerEmail = email.toLowerCase();
  if (lowerEmail.endsWith('@xu.edu.ph')) {
    return 'staff';
  } else if (lowerEmail.endsWith('@my.xu.edu.ph')) {
    return 'faculty';
  }
  return null;
}

// Configure Passport Google Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const email = profile.emails[0].value;
      
      // Check if email is from XU domain and whitelisted
      if (!validateEmailDomain(email) || !isWhitelisted(email)) {
        return done(null, false, { message: 'Unauthorized email' });
      }

      // Create user object with role
      const user = {
        googleId: profile.id,
        email: email,
        name: profile.displayName,
        role: determineRole(email)
      };

      return done(null, user);
    } catch (error) {
      return done(error, null);
    }
  }
));

// Serialize user for the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from the session
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Middleware to check if user is authenticated
const ensureAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};

module.exports = {
  validateEmailDomain,
  isWhitelisted,
  determineRole,
  ensureAuth,
  employeeWhitelist,
  passport
}; 