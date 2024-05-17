const onedrive = require('onedrive-api');

const saveManual = async (title, content, res) => {
    // Initialize OneDrive client
    const accessToken = process.env.ONEDRIVE_ACCESS_TOKEN;

    const manualContent = Buffer.from(content, 'utf8');
    const fileName = `${title || 'Manual'}.txt`;

    try {
        const response = await onedrive.items.uploadSimple({
            accessToken,
            filename: fileName,
            parentPath: '/Documents', // Update this path as needed
            readableStream: manualContent
        });

        res.json({ message: 'Manual saved to OneDrive successfully!', response });
    } catch (error) {
        res.json({ message: 'Error saving manual to OneDrive.', error });
    }
};

module.exports = {
    saveManual
};
