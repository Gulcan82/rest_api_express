const express = require('express');
const router = express.Router();

router.get('/friends', (req, res) => {
  res.send("List of all users' friends");
});

router.get('/login', (req, res) => {
  res.send("Login page");
});

router.get('/logout', (req, res) => {
  res.send("Logout page");
});

module.exports = router;