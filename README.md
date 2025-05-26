# 🐾 Happy Pets

**Happy Pets** is a mobile-first social networking app dedicated to our furry, scaly, feathery friends! Create pet profiles, connect with other pet owners, chat, and organize pet-friendly events—all in one place.

---

## 📱 Project Focus

- **Mobile-first design:** Optimized for mobile with plans to support desktop browsers.
- **Pet-first social experience:** Each user can add and manage multiple pet cards.
- **Community building:** Users can meet, chat, and attend or host events such as pet walks or play-dates.

---

## ✨ Features

- 🔐 Authentication (Sign up / Login)
- 🐶 Create and manage pet cards
- 🧑‍🤝‍🧑 Add friends and search pet owners
- 💬 Chat system (1:1 messaging + attachments, reactions, read status)
- 📍 Create and join neighborhood walks and events (with map integration)
- 🖼 Share status updates, photos, and videos (coming soon)
- 🔐 Privacy controls on user/pet profiles & event visibility

---

## 🧩 Future Features

- 📸 Media sharing and gallery
- 🐾 Pet timelines and memories
- 📍 Geolocation of events
- 🗨️ Group chats
- 🔔 Push notifications
- 🎁 Gamification: badges, likes, and pet contests

---

## 🚀 Tech Stack

### Frontend

- **Angular** (v16+)
- **Sass** for styling
- **Angular Router** for SPA navigation
- **Angular Universal** (SSR enabled)

### Backend – Django (Python)

- **Django REST Framework** – API layer
- **PostgreSQL** – Primary relational database
- **Django Channels** – Real-time messaging
- **SimpleJWT** – Secure token-based authentication
- **Media hosting** – Initially local, future S3-compatible (e.g. Cloudflare R2 or MinIO)

---

## 🎨 Color Palette

- Primary: #FFB570 (Peach/Orange)
- Secondary: #FF6F61 (Coral)
- Accent: #3BACAF (Blue)
- Background: #FAFAFA (Light Grey)
- Text: #333333

Inspired by a playful, warm, and approachable tone suited for pet communities.

---

## 📁 Project Structure

```
HappyPets/
├── front/
│   ├── src/
│   │   ├── _styles/
│   │   │   ├── _base.sass
│   │   │   ├── _layout.sass
│   │   │   ├── _mixins.sass
│   │   │   ├── _responsive.sass
│   │   │   ├── _typography.sass
│   │   │   └── _variables.sass
│   │   ├── app/
│   │   │   ├── AdminSettings/
│   │   │   │   ├── login/          # Component: .html + .sass + .spec.ts + .ts
│   │   │   │   ├── messages/       # Component: .html + .sass + .spec.ts + .ts
│   │   │   │   ├── notifications/  # Component: .html + .sass + .spec.ts + .ts
│   │   │   │   └── signup/         # Component: .html + .sass + .spec.ts + .ts
│   │   │   ├── Events/
│   │   │   │   ├── eventcard/      # Component: .html + .sass + .spec.ts + .ts
│   │   │   │   └── meet/           # Component: .html + .sass + .spec.ts + .ts
│   │   │   ├── Human/
│   │   │   │   ├── humancard/      # Component: .html + .sass + .spec.ts + .ts
│   │   │   │   ├── myfriends/      # Component: .html + .sass + .spec.ts + .ts
│   │   │   │   └── profile/        # Component: .html + .sass + .spec.ts + .ts
│   │   │   ├── navbar/             # Component: .html + .sass + .spec.ts + .ts
│   │   │   ├── Pets/
│   │   │   │   ├── mypets/         # Component: .html + .sass + .spec.ts + .ts
│   │   │   │   └── petcard/        # Component: .html + .sass + .spec.ts + .ts
│   │   │   ├── Shared/
│   │   │   │   ├── home/           # Component: .html + .sass + .spec.ts + .ts
│   │   │   │   └── not
│   │   │   ├── searchbar/          # Component: .html + .sass + .spec.ts + .ts
│   │   │   ├── app.component.html
│   │   │   ├── app.component.sass
│   │   │   ├── app.component.spec.ts
│   │   │   ├── app.component.ts
│   │   │   ├── app.config.server.ts
│   │   │   ├── app.config.ts
│   │   │   ├── app.routes.server.ts
│   │   │   └── app.routes.ts
│   │   ├── assets/
│   │   │   └──...
│   │   ├── index.html
│   │   ├── main.server.ts
│   │   ├── main.ts
│   │   ├── server.ts
│   │   └── styles.sass
│   └── ...
├── back/ # ! ADD THE SHARED .ENV IN THIS FOLDER ALONGSIDE MANAGE.PY !
│   ├── backend/ 
│   │   ├── __pycache__/
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── conversations/ # App: __pycache__ + migrations/ + __init__ + admin + apps + models + serializers + tests + urls + views 
│   ├── events/ # App: __pycache__ + migrations/ + __init__ + admin + apps + models + serializers + tests + urls + views 
│   ├── inbox/ # App: __pycache__ + migrations/ + __init__ + admin + apps + models + serializers + tests + urls + views
│   ├── pets/ # App: __pycache__ + migrations/ + __init__ + admin + apps + models + serializers + tests + urls + views
│   ├── users/ # App: __pycache__ + migrations/ + __init__ + admin + apps + models + serializers + tests + urls + views
│   ├── .gitignore
│   ├── manage.py
│   └── requirements.txt
└── README.md
```

---

## 🧪 Running the App Locally

### If not done yet, create the local DB

If you have PostgreSQL installed, you can connect to it using the psql command.
```bash
psql -U postgres  # or psql -U <your_user> # may need to use "sudo -u postgres psql" on Linux
```
If you are prompted for a password, enter the password you set for the postgres user.

List databases
```bash
\l
```

List users
```bash
\du
```

Exit with:
```bash
\q
```

If you want to create a new database and user, you can do so with the following commands:
```bash
CREATE DATABASE happypets;
CREATE USER user_name WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE happypets TO user_name;
```

Drop databases you don't want:
```bash
DROP DATABASE old_db_name;
```

Drop users you no longer need:
```bash
DROP USER old_username;
```

Change password of a user:
```bash
ALTER ROLE user_name WITH PASSWORD 'your_new_password';
```

### Prerequisites

- Node.js
- Angular CLI
- Python 3.10+
- PostgreSQL
- pipenv or virtualenv

### Frontend

```bash
cd front/
npm install
ng serve
```

Open your browser at [http://localhost:4200](http://localhost:4200)

### Backend

```bash
cd back/
python -m venv env # On Linux, it might be python3
source env/bin/activate  # On Windows use `env\Scripts\activate`
pip install -r requirements.txt
# Don't forget to create a superuser if not done yet (should be done in shared DB): 
python manage.py createsuperuser
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

---

## 🗺️ Roadmap

### MVP (Minimum Viable Product)
- [x] Set up Django & Angular structure
- [x] Create local database
- [x] Create core apps: users, pets, events, messages, chat
- [x] Enable authentication (JWT)
- [ ] Basic UI routing & navigation
- [ ] Display mock user & pet profiles
- [ ] Simple chat & event listing (no real-time yet)

### Phase 2
- [ ] Connect backend auth to frontend
- [ ] Implement real chat system (w/ read status, emojis, attachments)
- [ ] Add map for "meet" events (e.g. Leaflet.js or Google Maps)
- [ ] Toggle profile/event visibility
- [ ] Style UI with Sass and theme colors

### Phase 3: Real-time & Advanced Features
- [ ] Setup Redis and Django Channels
- [ ] WebSocket auth with JWT
- [ ] Typing indicators and read receipts
- [ ] Inbox system (conversations, messages, attachments)
- [ ] Events with geolocation
- [ ] Visibility filters for profiles/events

### Later
- [ ] Media uploads (local -> scalable S3-compatible)
- [ ] Push notifications
- [ ] Pet memories and gallery
- [ ] Gamification features
- [ ] Admin panel customization
- [ ] Unit tests and API documentation

---

## 🛡️ Security & Privacy

- JWT token-based authentication
- GDPR-compliant data handling
- Optional profile/event visibility
- Message visibility filters (e.g. messages from friends only)

---

## 🤝 Contribution

Want to help grow the Happy Pets community?

- Fork the repo
- Create a feature branch
- Submit a PR

---

## 📄 License

MIT License