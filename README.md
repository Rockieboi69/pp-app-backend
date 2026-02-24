# Parking App Backend

## Run
npm install
npm run dev
# 🅿️ Parking App Backend

A robust Node.js/Express API for managing parking slots and real-time bookings.

## 🚀 Quick Start
1. `git clone <your-repo-url>`
2. `npm install`
3. Create a `.env` file (see below)
4. `npm run dev`

## 🔑 Environment Variables
Required variables in your `.env`:
- `PORT=5000`
- `MONGO_URI=your_mongodb_atlas_link`
- `JWT_SECRET=your_super_secret_key`

## 🛣️ API Endpoints (Snapshot)
| Method | Endpoint | Description | Auth Req? |
| :--- | :--- | :--- | :--- |
| POST | /api/auth/register | Create new account | No |
| GET | /api/parkings | List all locations | No |
| POST | /api/bookings | Reserve a slot | Yes (JWT) |
