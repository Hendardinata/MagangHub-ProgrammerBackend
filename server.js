const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

//Route
app.use('/api/pegawai', require('./routes/pegawaiRoutes'));

//Default Route
app.get('/', (req, res) => {
    res.json({message: 'API Pegawai Bank sedang running'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server Berjalan di PORT'));