const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();

// Serve static files from the root directory
app.use(express.static('.'));

// Endpoint to get list of markdown files in projects directory
app.get('/api/projects', async (req, res) => {
    try {
        const files = await fs.readdir('projects');
        const markdownFiles = files.filter(file => file.endsWith('.md'));
        res.json(markdownFiles);
    } catch (error) {
        console.error('Error reading projects directory:', error);
        res.status(500).json({ error: 'Failed to read projects' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
