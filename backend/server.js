const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');
const uploadRoutes = require('./routes/upload');
const chartRoutes = require('./routes/chart');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/chart', chartRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
