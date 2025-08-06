# 🏠 RelooMate API

![Node.js CI](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue)

**RelooMate** is a RESTful backend service designed to support a student housing mobile app (built with React Native). It handles user authentication, onboarding steps, and profile management.

Built with:
- Node.js + Express
- MongoDB Atlas
- JWT for authentication
- Docker for easy deployment

---

## 🚀 Features

- 🔐 **User Registration** with hashed passwords (bcrypt)
- 🔑 **User Login** with JWT authentication
- 👤 **Protected Profile Route**
- 🎓 **Static Onboarding Steps**
- 🌍 **CORS enabled** for React Native mobile integration
- 🐳 **Dockerized** for consistent testing

---

## 📁 Folder Structure

```bash
RelooMate/
├── config/               # DB config
├── controllers/          # Route logic
├── middleware/           # JWT auth middleware
├── models/               # Mongoose schemas
├── routes/               # Express routes
├── .env                  # Environment variables (not committed)
├── Dockerfile            # Docker container setup
├── docker-compose.yml    # Easy multi-service dev env
├── server.js             # Entry point
├── package.json
└── README.md
```

---

## 🔧 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/reloomate-api.git
cd reloomate-api
```

### 2. Create `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

> ⚠️ Never commit this file to GitHub!

### 3. Install Dependencies

```bash
npm install
```

---

## 🧪 Run the App

### ➤ Local Dev Mode

```bash
npm run dev
```

### ➤ Docker Mode

```bash
docker-compose up --build
```

---

## 📫 API Endpoints

### 🔐 Auth

| Method | Endpoint        | Description         |
|--------|------------------|---------------------|
| POST   | `/api/register` | Register new user   |
| POST   | `/api/login`    | Login & get token   |

### 👤 User

| Method | Endpoint        | Description                        |
|--------|------------------|------------------------------------|
| GET    | `/api/profile`  | Get user profile (JWT protected)   |

### 🎓 Onboarding

| Method | Endpoint           | Description              |
|--------|--------------------|--------------------------|
| GET    | `/api/onboarding`  | Get 3 onboarding steps   |

---

## 🔐 Security Notes

- Passwords are hashed using bcrypt.
- JWT secret and MongoDB URI are stored in `.env` file and **not** committed to the repo.
- CORS is enabled for mobile/web frontend communication.

---

## 📦 Postman Collection

A Postman collection is available to test all endpoints easily.  
(You can export your collection as `.json` and include it in the repo.)

---

## 🧱 Architecture Notes

- Modular code (controllers, models, routes, middleware)
- Uses Express Router for route grouping
- MongoDB Atlas used for cloud-based document storage
- Docker enables easy testing with consistent environments

---

## 🧑‍💻 Author

**Gaurav More**  
Built as part of the RelooMate backend challenge.

---

## 🛡 License

This project is licensed for academic and technical demonstration purposes.
