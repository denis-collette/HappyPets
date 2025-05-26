# 🗺️ Backend Roadmap (Step-by-Step)

## 📍 Phase 1: Setup & Core APIs (MVP foundation)

### Environment config

- [x] Setup .env with Django secret, DB, media path, etc.

- [x] Use django-environ to load these settings securely

### Authentication

- [x] Install and configure djangorestframework-simplejwt

- [x] Create endpoints:

    - /api/token/ (login)

    - /api/token/refresh/

    - /api/register/ (custom user signup)

### User System

- [x] Extend AbstractUser for a custom user model

- [ ] Create UserSerializer, UserViewSet

- [ ] Add friend relationship model (ManyToMany through model)

- [ ] Create API endpoints for:

    - User detail/profile update

    - Friend list & search

### Pets

- [ ] Define Pet model (FK to User, name, species, avatar, etc.)

- [ ] Create serializer, viewset

- [ ] Endpoints:

    - List pets (by user)

    - Create/edit/delete pet

### Events

- [ ] Define event model: title, date, location, description, visibility

- [ ] Add optional FK to Pet or User (host)

- [ ] Endpoints:

    - List events (all/nearby)

    - Create/edit/join event

### Integrate with Angular Frontend

- [ ] Create /api/ prefix for all REST routes

- [ ] Allow CORS for frontend dev origin (localhost:4200)

- [ ] Test JWT token exchange via frontend

## 📍 Phase 2: Real-time & Advanced Features

### Django Channels

- [ ] Install, set up Redis for channel layer

- [ ] Define consumers for 1:1 messaging

- [ ] Use WebSocket auth via JWT

- [ ] Add typing/read indicators

### Inbox/Messaging

- [ ] Models:

    - Conversation (participants, last_updated)

    - Message (FK to conversation, sender, content, timestamp, attachments)

- [ ] Create API endpoints (non-real-time fallback)

- [ ] Enable file/image attachment storage

### Map Integration for Events

- [ ] Add lat/lng fields to events

- [ ] Optional integration with frontend Leaflet/Maps API

### Profile/Event Visibility

- [ ] Add visibility (public/friends-only/private)

- [ ] Apply logic to list views based on JWT user context

## 📍 Phase 3: Media, Settings, Admin

### Media Upload

- [ ] Use MEDIA_ROOT for local testing

- [ ] Prepare for migration to S3-compatible storage later

### Admin Panel

- [ ] Register all models with Django Admin

- [ ] Customize list display for users/pets/events/messages

### Testing

- [ ] Add basic pytest or unittest coverage for:

    - Authentication

    - Pet CRUD

    - Event logic

    - Permissions

### Documentation

- [ ] Use drf-spectacular or drf-yasg to auto-generate OpenAPI docs

- [ ] Provide frontend with swagger.json