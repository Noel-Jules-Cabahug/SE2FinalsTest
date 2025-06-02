# XU Employee Authentication System

A Node.js application implementing Google OAuth authentication for Xavier University employees.

## Features
- Google OAuth authentication
- Domain restriction (@xu.edu.ph and @my.xu.edu.ph)
- Whitelist-based access control
- Role-based authorization
- Session management

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with the following variables:
```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SESSION_SECRET=your_session_secret
PORT=3000
NODE_ENV=development
```

4. Get Google OAuth credentials:
   - Go to Google Cloud Console
   - Create a new project
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI: `http://localhost:3000/auth/google/callback`

5. Start the server:
```bash
npm run dev
```

## Testing

Run the test suite:
```bash
npm test
```

## Authentication Flow

1. User accesses `/auth/google`
2. Redirected to Google login
3. After successful Google login:
   - Email domain is verified (@xu.edu.ph or @my.xu.edu.ph)
   - Email is checked against whitelist
   - If authorized, role is assigned and session created
   - If unauthorized, access is denied
4. Authenticated users are redirected to dashboard

## Protected Routes

- `/dashboard`: Requires authentication
- `/auth/session`: Check session status
- `/auth/logout`: End session