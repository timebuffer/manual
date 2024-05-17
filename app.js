require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('cookie-session');

const evernote = require('./modules/evernote');
const file = require('./modules/file');
const onedrive = require('./modules/onedrive');

const app = express();
app.use(bodyParser.json());
app.use(session({ secret: 'your_secret_key' }));

const callbackUrl = 'http://localhost:3000/oauth_callback';

// Authentication route for Evernote
app.get('/oauth', (req, res) => {
    evernote.authenticate(callbackUrl, req, res);
});

app.get('/oauth_callback', (req, res) => {
    evernote.callback(req, res);
});

// Endpoint to save a manual
app.post('/save_manual', (req, res) => {
    const { title, content, location } = req.body;

    switch (location) {
        case 'evernote':
            evernote.saveManual(title, content, req, res);
            break;
        case 'file':
            file.saveManual(title, content, res);
            break;
        case 'onedrive':
            onedrive.saveManual(title, content, res);
            break;
        default:
            res.json({ message: 'Invalid location specified.' });
    }
});

// Serve static files (frontend)
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
