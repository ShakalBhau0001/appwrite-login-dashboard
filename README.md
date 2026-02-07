# 🔐 Appwrite Login Dashboard

A **learning-focused authentication dashboard** built using **Appwrite** to understand modern auth workflows, session handling, and secure user management.
This project is created strictly for **educational purposes**, focusing on how authentication systems work in real applications.

---

## 📌 Project Overview

**Appwrite Login Dashboard** demonstrates:
- User authentication using Appwrite
- Secure login & logout flow
- Session-based authentication handling
- Dashboard access control after login

The goal of this project is to **learn backend-as-a-service authentication concepts** and how frontend applications securely interact with them.

---

## ✨ Features

- User Signup & Login
- Secure Session Handling
- Logout Functionality
- Protected Dashboard Access
- Appwrite SDK Integration
- Clean & minimal UI (learning-focused)

---

## 🛠 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend / Services
- Appwrite (Authentication & Sessions)

---

## 🔐 Authentication Flow (High Level)

1. User registers or logs in
2. Appwrite validates credentials
3. Secure session is created
4. User is redirected to dashboard
5. Unauthorized users cannot access protected routes

---

## 🚀 Getting Started

### Prerequisites
- Appwrite instance (Cloud or Self-hosted)
- Basic knowledge of JavaScript
- Node.js (if required by your setup)

---

### Setup Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/appwrite-login-dashboard.git
   ```
2. Configure Appwrite:
- Create a project in Appwrite
- Enable **Email/Password Authentication**
- Copy your **Project ID** and **Endpoint**

3. Update configuration:
- Add your Appwrite credentials in the config file
- **Do NOT expose secret keys in public repos**

4. Run the project:
- Open `index.html` (or run via local server)

---
## Configuration

Replace the following placeholders in JavaScript files with your own Appwrite details:

- YOUR_APPWRITE_ENDPOINT
- YOUR_PROJECT_ID
- YOUR_DATABASE_ID
- YOUR_COLLECTION_ID

---

## ⚠️ Security Notes

- No admin or secret keys are committed
- All credentials must be stored securely
- This project is not production-ready
- Created for learning authentication concepts only

---

📚 Learning Outcomes

Understanding Appwrite authentication

Session-based access control

Secure frontend-backend interaction

Safe handling of user login flows

--
