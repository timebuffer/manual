const fs = require('fs');
const path = require('path');

const saveManual = (title, content, res) => {
    const filePath = path.join(__dirname, '..', `${title || 'Manual'}.txt`);
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            res.json({ message: 'Error saving manual as .txt file.', error: err });
        } else {
            res.json({ message: 'Manual saved as .txt file successfully!', filePath });
        }
    });
};

module.exports = {
    saveManual
};
