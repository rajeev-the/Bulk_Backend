// index.js
const express = require('express');
const app = express();
const connectDB = require('./Database/DBConnection.js');
const UserRoutes =  require('./Router/UserRoutes.js');
const cors = require('cors');
const categoryRoutes = require('./Router/categoryRoutes.js');
require('dotenv').config();




app.use(express.json());

app.use(cors())


connectDB();



app.use('/api/category',categoryRoutes );


app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
