# RelooMate API

A REST API for the RelooMate student housing platform. Built with Node.js, Express, MongoDB, and JWT.

## Features

- User registration with hashed passwords
- JWT-based login and authentication
- Protected profile route
- Static onboarding steps
- CORS enabled for React Native integration
- Dockerized for easy deployment

## Endpoints

### Auth

- `POST /api/register`  
  Payload: `{ name, email, password }`

- `POST /api/login`  
  Payload: `{ email, password }`  
  Response: `{ token }`

### User

- `GET /api/profile`  
  Protected. Requires Bearer token.

### Onboarding

- `GET /api/onboarding`  
  Returns static 3-step array

## Running Locally

```bash
git clone https://github.com/your-username/reloomate-api.git
cd reloomate-api
npm install
cp .env.example .env
npm run dev
