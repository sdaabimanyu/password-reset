const express = require("express");
const authRoutes = express.Router();
const {
  forgotPassword,
  resetPassword,
  register,
  login,
} = require("../controllers/authController");

authRoutes.post("/", login);
authRoutes.post("/register", register);
authRoutes.post("/forgot-password", forgotPassword);
authRoutes.post("/reset-password/:token", resetPassword);

module.exports = authRoutes;
