# 🔐 Appwrite Login Dashboard (Practice + Learning Project)

A **frontend-based authentication dashboard** built using **HTML**, **CSS**, **JavaScript**, and **Appwrite Cloud** that allows users to **register**, **log in**, and **access a protected dashboard using secure sessions**.
This project is designed as a **learning-focused authentication lab**,helping developers understand how frontend applications interact with **Backend-as-a-Service (BaaS)** platforms like Appwrite.
The project intentionally avoids frameworks to focus on **core frontend + authentication concepts**.

It focuses on:
- Authentication workflows
- Session-based access control
- Secure login & logout handling
- Protected routes
- Frontend-to-BaaS interaction

---

## 🧱 Project Structure

``` bash
appwrite-login-dashboard/
│
├── register.html            # User registration page
├── login.html               # User login page
├── dashboard.html           # Protected dashboard
│
├── css/
│   └── style.css            # Global styles
│
├── js/
│   ├── register.js          # Registration logic
│   ├── login.js             # Login logic
│   └── dashboard.js         # Session check & logout
│
├── README.md                # Project documentation
└── .gitignore
```

---

## ✨ Features

### 🔐 User Authentication

- Email & password based registration
- Secure login using Appwrite sessions
- Logout functionality
- Session validation on page load

### 🔒 Protected Dashboard

- Dashboard accessible only to authenticated users
- Automatic redirect if session is invalid
- Session-based route protection

### 🧪 Learning-Oriented Design

- Single `app.js` for authentication logic
- No frameworks -- pure frontend JavaScript
- Clear separation between UI and auth logic
- Easy to understand and extend

---

## 🛠 Technologies Used

| Technology       | Role                              |
| ---------------- | --------------------------------- |
| **HTML5**        | Page structure                    |
| **CSS3**         | Styling and layout                |
| **JavaScript**   | Client-side logic                 |
| **Appwrite**     | Authentication & Sessions         |
| **Appwrite SDK** | Frontend cloud interaction        |

---

## 📌 Requirements

- A modern web browser
- An **Appwrite Cloud project** (or self-hosted Appwrite)

> No frameworks, build tools, or backend servers are required.

---

## ▶️ How to Use (Local)

### 1️⃣ Clone the repository

``` bash
git clone https://github.com/ShakalBhau0001/appwrite-login-dashboard.git
```

### 2️⃣ Open the project

Simply open `index.html` in your browser\
( use **Live Server** for better experience).

### 3️⃣ Configure Appwrite (Required)

> ⚠️ Appwrite credentials are **intentionally removed** from this repository.

To run the project:

- Open `app.js`
- Replace placeholder values with **your Appwrite project details**

``` js
.setEndpoint("YOUR_APPWRITE_ENDPOINT")
.setProject("YOUR_PROJECT_ID");
```

- Enable **Email/Password Authentication** in Appwrite Console

---

## ⚙️ How It Works

### 1️⃣ Authentication

- Users register or log in using Appwrite Account APIs
- Appwrite creates a secure session

### 2️⃣ Session Validation

- Session is checked on dashboard load
- Unauthorized users are redirected to login page

### 3️⃣ Logout

- Session is destroyed using Appwrite API
- User is safely logged out

---

## ⚠️ Limitations

- Frontend-only project
- Appwrite configuration must be added manually
- No role-based access control
- UI kept intentionally minimal

---

## 🌟 Future Enhancements

- Role-based dashboard access
- Password reset flow
- Session expiration handling
- Improved UI/UX
- Multi-factor authentication (MFA)

---

## ⚠️ Disclaimer

This project is created **strictly for educational and learning purposes**.
It demonstrates **authentication concepts and frontend-to-BaaS communication**.
It is **not intended for production use** without additional security hardening.

---

## 🪪 Author

> **Developer: Shakal Bhau**

> **GitHub: [ShakalBhau0001](https://github.com/ShakalBhau0001)**

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

---
