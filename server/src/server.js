// app.js

const express = require('express');
const app = express();
const cors=require('cors')
const fileRoutes = require('./routes/files');
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes
app.use('/files', fileRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
