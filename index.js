const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authroutes = require('./routes/authoroutes');
const onboardingRoutes = require('./routes/onboardingRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json()); 
app.use('/api', authroutes);
app.use('/api', onboardingRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
