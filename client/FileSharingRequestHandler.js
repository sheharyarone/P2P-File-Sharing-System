const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;


// Endpoint to handle file requests
app.get('/download', (req, res) => {
    const fileName = req.query.fileName;
    if (!fileName) {
        return res.status(400).send('Filename is required');
    }

    const filePath = path.join(__dirname, 'shared', fileName);

    if (fs.existsSync(filePath)) {
        res.download(filePath, fileName, (err) => {
            if (err) {
                res.status(500).send('Error occurred while sending the file');
            }
        });
    } else {
        res.status(404).send('File not found');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
