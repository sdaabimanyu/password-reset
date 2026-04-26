# 🔐 Password Reset Application

A full-stack web application that implements a secure **password reset flow using email verification**. Users can request a reset link, receive it via email, and update their password with token validation and expiry handling.

---

## 🚀 Live Demo

* 🌐 **Frontend (Netlify):** https://password-resetsda.netlify.app
* 🔗 **Backend (Render):** https://your-backend-url.onrender.com

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Bootstrap
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose
* Nodemailer
* Bcrypt
* Crypto

---

## 📌 Features

* ✅ User registration
* ✅ Forgot password functionality
* ✅ Secure token generation using crypto
* ✅ Email-based password reset link
* ✅ Token stored in database
* ✅ Token expiry handling (1 hour)
* ✅ Password hashing using bcrypt
* ✅ Reset password form with validation
* ✅ Clean MVC architecture
* ✅ Fully deployed (Frontend + Backend)

---

## 🔄 Password Reset Flow

1. User enters email in "Forgot Password" page
2. Server checks if user exists in database
3. If user exists:

   * Generate secure random token
   * Save token + expiry in DB
   * Send email with reset link
4. User clicks link from email
5. Frontend opens reset password page
6. Backend verifies:

   * Token matches
   * Token is not expired
7. User enters new password
8. Password is hashed and updated in DB
9. Token is cleared

---

## 📁 Project Structure

### Backend

```
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── authController.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── authRoutes.js
│
├── utils/
│   └── sendEmail.js
│
├── index.js
└── .env
```

### Frontend

```
frontend/
│
├── src/
│   ├── pages/
│   │   ├── ForgotPassword.jsx
│   │   └── ResetPassword.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── index.html
```

---

## ⚙️ Environment Variables

Create a `.env` file in backend:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/password-reset.git
```

### 2️⃣ Install backend dependencies

```
cd backend
npm install
```

### 3️⃣ Install frontend dependencies

```
cd frontend
npm install
```

---

## ▶️ Running the Project

### Start Backend

```
npm run dev
```

### Start Frontend

```
npm run dev
```

---

## 🌍 Deployment

### Frontend (Netlify)

* Build command: `npm run build`
* Publish directory: `dist`

### Backend (Render)

* Start command: `node index.js`
* Add environment variables in Render dashboard

---

## 🔐 Security Features

* Password hashing using bcrypt
* Secure token generation using crypto
* Token expiration (1 hour)
* Sensitive data stored in environment variables
* CORS configuration for restricted access

---

## ⚠️ Error Handling

* User not found
* Invalid token
* Expired token
* Server errors

---

## 📸 Screenshots

* Forgot Password Page
* Reset Password Page
* Email with Reset Link

*(You can add screenshots here if needed)*

---

## 🧠 Future Improvements

* Add JWT authentication
* Add password strength validation
* Add rate limiting
* Use email templates
* Add loading indicators

---

## 👨‍💻 Author

**Abimanyu S**

---

## 📜 License

This project is for educational purposes.

---
