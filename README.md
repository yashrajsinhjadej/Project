# Project

**Project Name:** SmartHome Services

**Project Type:** Mobile + Web Application

**Objective:** Provide an app-based platform that connects customers with verified home service professionals like electricians, plumbers, carpenters, painters, and interior designers.

---

## 🔧 Tech Stack

* **Frontend (Mobile App):** React Native
* **Backend:** Node.js with Express.js
* **Database:** MongoDB (using Mongoose ODM)
* **Payments:** Razorpay
* **Design Tools:** Figma, Adobe XD

---

## 📄 Core Features

* **Authentication:** User & Professional login/signup using JWT
* **Service Browsing:** Filterable categories with details and ratings
* **Booking System:** Real-time service booking and tracking
* **In-App Chat:** Customer-to-Professional messaging
* **Payment Integration:** Using Razorpay for secure payments
* **Professional Profiles:** Ratings, reviews, availability, services offered
* **Service History & Rebooking**
* **Push Notifications:** For status updates

---

## 📆 Future Features (Planned)

* AI-based professional recommendations
* Service package bundles
* Loyalty rewards and coupons
* Web dashboard for professionals

---

## 👥 Team Structure

| Role                    | Members                      |
| ----------------------- | ---------------------------- |
| **Team Lead**           | Yash                         |
| **Backend Developers**  | Yash, Krupa, Rudra           |
| **Frontend Developers** | Harsh, Yash, Rudra, Dev, Dia |

---

## 🔢 Backend APIs (from `Api's.txt`)

### Authentication

* `POST /auth/signup` – Create user/professional
* `POST /auth/login` – Login, return JWT
* `POST /auth/logout` – Logout
* `GET /auth/me` – Current user

### User Profile

* `GET /users/:id`
* `PUT /users/:id`
* `GET /users/:id/history`
* `GET /users/:id/notifications`

### Professionals

* `GET /professionals`
* `GET /professionals/:id`
* `GET /professionals/:id/availability`
* `POST /professionals/:id/review`
* `POST /professionals/register`

### Services

* `GET /services`
* `GET /services?filter=...`
* `GET /services/:id`
* `POST /services` (admin only)

---

## ✅ Status

* Project is in active development
* Week 1 goal: Setup + Auth module

---

This file can be reused in new chats to avoid repeating the context.
