const express = require("express");
const authRoutes = express.Router();
const {
  forgotPassword,
  resetPassword,
  register,
} = require("../controllers/authController");

authRoutes.post("/register", register);
authRoutes.post("/forgot-password", forgotPassword);
authRoutes.post("/reset-password/:token", resetPassword);

module.exports = authRoutes;
