# 🔐 Password Reset Application

A full-stack web application that implements a secure **password reset flow using email verification**. Users can request a reset link, receive it via email, and update their password with token validation and expiry handling.

---

## 🚀 Live Demo

* 🌐 **Frontend (Netlify):** https://password-resetsda.netlify.app
* 🔗 **Backend (Render):** https://password-reset-3axg.onrender.com

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
* Brevo (Email API)
* Bcrypt
* Crypto

---

## 📌 Features

* ✅ User registration
* ✅ Login functionality
* ✅ Forgot password functionality
* ✅ Secure token generation using crypto
* ✅ Email-based password reset link (via Brevo)
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
   * Send email with reset link (Brevo API)
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
├── config/
│   └── db.js
├── controllers/
│   └── authController.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── utils/
│   └── sendEmail.js
├── index.js
└── .env (local only, not pushed)
```

### Frontend

```
frontend/
├── src/
│   ├── pages/
│   │   ├── ForgotPassword.jsx
│   │   └── ResetPassword.jsx
│   ├── App.jsx
│   └── main.jsx
└── index.html
```

---

## ⚙️ Environment Variables

### Backend (.env for local development)

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
BREVO_API_KEY=your_brevo_api_key
EMAIL_USER=your_verified_email@gmail.com
```

⚠️ Note:

* `.env` is used only for local development
* In production (Render), environment variables must be added in the dashboard

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/sdaabimanyu/password-reset.git
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
* Environment-based secret management
* CORS configuration for restricted access

---

## ⚠️ Error Handling

* User not found
* Invalid token
* Expired token
* Server errors

---

## 📸 Screenshots

(Optional: Add UI screenshots here)

---

## 🧠 Future Improvements

* Add JWT authentication
* Add password strength validation
* Add rate limiting
* Improve UI/UX (loading states, notifications)

---

## 👨‍💻 Author

**Abimanyu S**

---

## 📜 License

This project is for educational purposes.
