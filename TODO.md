# 🔜 What's Next: Roadmap Ahead

## API Integration & Environment Configuration

Replace mock login logic with real /api/users/login/ call

Store accessToken and refreshToken in localStorage (automatically)

Setup HttpClientModule in AppModule

Add proxy.conf.json for dev (to avoid CORS and use /api/)

Create auth.interceptor.ts to add Authorization: Bearer header to API calls

Update AuthService with real login/logout logic

## Style System Cleanup (SASS Files)

Review contents of _styles/ folder

Decide whether to consolidate or simplify partials

Identify unused files and remove or reintegrate them

Ensure SASS structure aligns with mobile/tablet-first strategy and theme support

## Testing (Future)

- [ ] Unit tests for services and components (`*.spec.ts`)
- [ ] Mock JWT authentication for test coverage
- [ ] Explore Angular test runners (Karma + Jasmine or Jest)
- [ ] Backend API tests using Django `TestCase`
- [ ] Consider adding CI for test automation

## API Documentation

- [ ] Document all API endpoints (e.g. login, register, profile, pets, events, etc.)
- [ ] Generate OpenAPI/Swagger schema from Django REST Framework (DRF)
- [ ] Export Postman collection (or equivalent) for frontend/backend devs