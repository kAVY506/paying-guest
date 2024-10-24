require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const ownerRoutes = require('./routes/ownerRoutes');
const listingRoutes = require('./routes/listingRoutes');
const app = express();
connectDB();

app.use(express.json());

// Routes
app.use('/api/owners', ownerRoutes);
app.use('/api/owners', listingRoutes);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
