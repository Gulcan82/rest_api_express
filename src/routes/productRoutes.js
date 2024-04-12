const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
  res.send("List of all products");
});

router.get('/search', (req, res) => {
  res.send("Product search page");
});

router.get('/details', (req, res) => {
  res.send("Product details page");
});

module.exports = router;