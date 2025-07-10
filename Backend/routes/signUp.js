const express = require('express');
const router = express.Router();

const authController = require('../controllers/signUp');
const { signupValidation, validateUser } = require('../middleware/validators');

router.post(
  '/signup',
  signupValidation,
  validateUser,
  authController.signup
);

module.exports = router;
