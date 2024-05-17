/*const Evernote = require('evernote').Evernote;

const client = new Evernote.Client({
    consumerKey: process.env.EVERNOTE_CONSUMER_KEY,
    consumerSecret: process.env.EVERNOTE_CONSUMER_SECRET,
    sandbox: true
});

const authenticate = (callbackUrl, req, res) => {
    client.getRequestToken(callbackUrl, (error, oauthToken, oauthTokenSecret) => {
        if (error) {
            res.send(error);
        } else {
            req.session.oauthToken = oauthToken;
            req.session.oauthTokenSecret = oauthTokenSecret;
            res.redirect(client.getAuthorizeUrl(oauthToken));
        }
    });
};

const callback = (req, res) => {
    client.getAccessToken(
        req.session.oauthToken,
        req.session.oauthTokenSecret,
        req.query.oauth_verifier,
        (error, oauthAccessToken, oauthAccessTokenSecret, results) => {
            if (error) {
                res.send(error);
            } else {
                req.session.oauthAccessToken = oauthAccessToken;
                req.session.oauthAccessTokenSecret = oauthAccessTokenSecret;
                res.send('Authentication successful! You can now close this window.');
            }
        }
    );
};

const saveManual = (title, content, req, res) => {
    const client = new Evernote.Client({
        token: req.session.oauthAccessToken,
        sandbox: true
    });

    const noteStore = client.getNoteStore();

    const note = new Evernote.Note();
    note.title = title || "Manual";
    note.content = `<?xml version="1.0" encoding="UTF-8"?>
                    <!DOCTYPE en-note SYSTEM "http://xml.evernote.com/pub/enml2.dtd">
                    <en-note>${content}</en-note>`;

    noteStore.createNote(note, (error, note) => {
        if (error) {
            res.json({ message: 'Error saving note to Evernote.', error });
        } else {
            res.json({ message: 'Manual saved to Evernote successfully!', note });
        }
    });
};

module.exports = {
    authenticate,
    callback,
    saveManual
};
*/