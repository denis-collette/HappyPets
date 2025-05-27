# 🧭 HappyPets Project Roadmap (Updated)

## 🛠 Recommended Next Step: Style System Cleanup

Lock in a clean style system before you scale component UI

Then tackle login/signup polish while reusing your style foundation

This will make building the rest of the frontend significantly easier and more consistent.

## 🔄 Style System Cleanup (Next Up)

Goal: Ensure a clean, scalable SASS setup aligned with your mobile/tablet-first approach.

Tasks:
    - Review _styles/ contents

    - Remove or consolidate unused partials

    - Organize mixins, variables (colors, breakpoints, shadows, etc.)

    - Standardize file naming (e.g. _mixins.sass, _variables.sass)

    - Add utility mixins if missing (text-ellipsis, center-flex, etc.)

    - Confirm dark/light mode toggle support is ready

⏩ Suggested start: clean up partials, establish a base foundation for forms, buttons, and layout.

## 🎨 UI Enhancements: Auth Pages

Goal: Style and finalize login + signup pages

Login Page:
    - Apply brand styling (colors, padding, spacing)

    - Use theme-aware SASS variables

    - Improve mobile layout and responsiveness

Signup Page:
    - Create /register route + form

    - Implement userApi.register() and handle response

    - Add form validation (password strength, email format, etc.)

    - Show feedback messages

    - Reuse styles from login form

✅ Use existing AuthService and the same reactive patterns.

## 🔐 Route Protection & Authenticated API Calls

Goal: Secure private routes and test real authenticated APIs.

Tasks:
    - Add Angular route guard using CanActivate

    - Protect /home, /mypets, /myfriends, etc.

    - Redirect to /login if not authenticated

    - Call an authenticated endpoint (/api/users/me/) and show data

    - Logout on 401 if token is invalid

## 🧼 Frontend Buildout (Main Focus After Above)

Goal: Shift focus to building core UI features & layouts.

Suggested Features (to start):
    - Home Feed / Meet Page (swipeable pet cards or scrollable list)

    - My Pets (list + detail views)

    - My Friends (followers/following)

    - Events (list + calendar or cards)

    - Profile Drawer or Page (edit info, avatar, etc.)

Each feature can be a standalone component with its own route.

## 🧪 Testing Setup (Parallel or Later)

Goal: Start building test coverage and CI foundation.

    - Unit tests for AuthService, userApi, and components

    - Use mocks for JWT + backend calls

    - Choose test runner (Jest suggested over Karma/Jasmine)

    - Django API tests (TestCase for login, register, user, etc.)

    - Optional: Add GitHub Actions or similar for test automation

## 📚 API Documentation (Parallel with Frontend Buildout)

    - Use DRF's drf-yasg or drf-spectacular to generate OpenAPI docs

    - Document endpoints for login, register, profile, pets, friends, events

    - Export Postman collection for easier collaboration

    - Optional: Host docs via Swagger UI or Redoc
