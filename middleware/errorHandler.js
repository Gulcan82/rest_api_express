const express = require('express');
const app = express();
const errorHandler = require('./errorHandler');

// Hier deine Routen und Middleware

// Error-Handling-Middleware verwenden
app.use(errorHandler);

// Starte den Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});