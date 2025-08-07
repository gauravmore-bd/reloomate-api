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

## 🔗 Live Deployment

🌐 **API Base URL**: [https://reloomate-api.onrender.com](https://reloomate-api.onrender.com)


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
CLIENT_URL=https://reloomate-api.onrender.com
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

## 🌐 🚀 Deployment on Render (Free Hosting)

You can deploy this API on [Render](https://render.com) for temporary hosting (~2 weeks):

### 🔸 Steps:

1. Go to [https://dashboard.render.com](https://dashboard.render.com)
2. Click **"New Web Service"**
3. Connect your GitHub repo containing this project
4. Fill the form:
   - **Name**: `reloomate-api`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Root Directory**: Leave blank
5. Add the following **Environment Variables**:
   - `PORT` → `5000`
   - `MONGO_URI` → _Your MongoDB Atlas URI_
   - `JWT_SECRET` → _Your custom secret string_

6. **Whitelist Render IPs in MongoDB Atlas**  
   Add the following IPs to your MongoDB Atlas network access:
   ```
   13.228.225.19
   18.142.128.26
   54.254.162.138
   ```

7. Click **Deploy Web Service**

8. Once deployed, you will get a **public API URL** (e.g., `https://reloomate-api.onrender.com`)

9. Test using Postman or your mobile frontend.

✅ Now your backend is live and publicly accessible for testing/interviews!

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
Make sure to use this base URL: [https://reloomate-api.onrender.com](https://reloomate-api.onrender.com)
> You can import `RelooMate.postman_collection.json` from the root directory.


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