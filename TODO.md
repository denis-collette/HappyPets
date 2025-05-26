# 🔜 What's Next: Roadmap Ahead

## Step 2: Enhance Login Page

Disable login button while loading

Show a spinner while logging in

Add show/hide password toggle

Add “Remember me” checkbox

Add form validation feedback

## Step 3: API Integration & Environment Configuration

Replace mock login logic with real /api/users/login/ call

Store accessToken and refreshToken in localStorage

Setup HttpClientModule in AppModule

Add proxy.conf.json for dev (to avoid CORS and use /api/)

Create auth.interceptor.ts to add Authorization: Bearer header to API calls

Update AuthService with real login/logout logic

## Step 4: Style System Cleanup (SASS Files)

Review contents of _styles/ folder

Decide whether to consolidate or simplify partials

Identify unused files and remove or reintegrate them

Ensure SASS structure aligns with mobile/tablet-first strategy and theme support