# 🐾 Happy Pets

**Happy Pets** is a mobile-first social networking app dedicated to our furry friends! Create pet profiles, connect with other pet owners, chat, and organize pet-friendly events—all in one place.

---

## 📱 Project Focus

- **Mobile-first design:** Optimized for mobile with plans to support desktop browsers.
- **Pet-first social experience:** Each user can add multiple pet cards and interact through their pets.
- **Community building:** Users can meet, chat, and attend or host events such as pet walks or play-dates.

---

## ✨ Features

- 🔐 Authentication (Sign up / Login)
- 🐶 Create and manage pet profiles
- 🧑‍🤝‍🧑 Add friends and search pet owners
- 💬 Chat system (1:1 messaging)
- 📍 Create and join neighborhood walks and events
- 🖼 Share status updates, photos, and videos (coming soon)

---

## 🚀 Tech Stack

### Frontend

- **Angular** (v16+)
- **Sass** for styling
- **Angular Router** for SPA navigation

### Backend – Django (Python)

- **Django REST Framework** – API layer
- **PostgreSQL** – Relational data with Django ORM
- **Django Channels** – For real-time messaging
- **Amazon S3** – For storing profile images, pet media, and event pictures
- **SimpleJWT** – For secure token-based authentication

---

## 📁 Project Structure (Frontend)

```
HappyPets/
├── front/
│   ├── src/
│   │   └── app/
│   │       ├── AdminSettings/
│   │       │   ├── login/
│   │       │   ├── messages/
│   │       │   └── notifications/
│   │       ├── Events/
│   │       │   ├── eventcard/
│   │       │   └── meet/
│   │       ├── home/
│   │       ├── Human/
│   │       │   ├── humancard/
│   │       │   ├── myfriends/
│   │       │   └── profile/
│   │       ├── navbar/
│   │       ├── Pets/
│   │       │   ├── mypets/
│   │       │   └── petcard/
│   │       └── searchbar/
│   └── ...
├── back/
│   ├── backend/
│   │   └── ...
│   ├── env/
│   │   └── ...
│   ├── events/
│   │   └── ...
│   ├── messages/
│   │   └── ...
│   ├── pets/
│   │   └── ...
│   ├── users/
│   │   └── ...
│   └── manage.py
└── README.md
```

---

## 🧪 Running the App Locally

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
cd backend/
python -m venv env
source env/bin/activate  # On Windows use `env\Scripts\activate`
pip install -r requirements.txt

python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

Set up `.env` with variables like:

```
DJANGO_SECRET_KEY=your_secret_key_here
DATABASE_URL=postgres://username:password@localhost:5432/happypets
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
```

---

## 🧩 Future Features

- 📸 Media sharing and gallery
- 🐾 Pet timelines and memories
- 📍 Geolocation of events
- 🗨️ Group chats
- 🔔 Push notifications
- 🎁 Gamification: badges, likes, and pet contests

---

## 🛡️ Security & Privacy

- JWT token-based authentication (SimpleJWT)
- GDPR-compliant data handling
- Optional profile visibility (private/public)

---

## 🤝 Contribution

Want to help grow the Happy Pets community?

- Fork the repo
- Create a feature branch
- Submit a PR

---

## 📄 License

MIT License
