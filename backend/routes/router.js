const express = require('express');
const Url = require('../model/url');
const router = express.Router();

router.post('/shorten', async (req, res) => {
    const { nanoid } = await import('nanoid');
    try {
        let { originalUrl } = req.body;
        const shortCode = nanoid(8);

        // Check if `originalUrl` starts with 'http://', 'https://', or 'www'

        if (originalUrl.startsWith('www.')) {
            originalUrl = `http://${originalUrl}`;
        } else {
            originalUrl = `http://www.${originalUrl}`;
        }

        const url = new Url({ originalUrl, shortCode });
        await url.save();
        res.json({ shortUrl: shortCode });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
});


router.get('/:shortCode', async (req, res) => {
    const { shortCode } = req.params;
    console.log(shortCode)
    try {
        const url = await Url.findOne({ shortCode });
       
        return res.json(url.originalUrl)

    } catch (error) {

        return res.status(400).json({ msg: 'url not found' })
    }

});

module.exports = router;
