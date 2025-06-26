const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const { port} = require('./config/config')
const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/signUp'));

// Server listen
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
