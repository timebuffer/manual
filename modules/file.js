const fs = require('fs');
const path = require('path');
const os = require('os');


const saveManual = (title, content, res) => {
    
    const homeDir = os.homedir();
    const dir = homeDir+"/desktop/manuals";
    
    const filePath = path.join(dir, `${title || 'Manual'}.txt`);
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
