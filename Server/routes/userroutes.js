const express = require("express");
const router = express.Router();

// auth middleware
const authmiddleware = require("../middleware/authmiddleware");

// user controller
const {
  register,
  login,
  checkuser,
  resetPassword,
  forgotPassword,
} = require("../controllers/usercontrollers");

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

// User checking route
router.get("/checkUser", authmiddleware, checkuser);

// Forgot Password (lowercase p)
router.post("/forgot-password", forgotPassword);

// Reset Password (lowercase p)
router.post("/reset-password", resetPassword);

module.exports = router;
