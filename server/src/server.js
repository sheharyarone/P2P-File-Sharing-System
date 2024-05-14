// app.js

const express = require('express');
const app = express();
const fileRoutes = require('./routes/files');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/files', fileRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
