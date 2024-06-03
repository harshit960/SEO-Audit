const express = require('express');
const axios = require('axios');
const puppeteer = require('puppeteer');
const app = express();
const port = 10000;
const cors = require('cors')
// Replace with your actual Google PSI API key
const API_KEY = 'AIzaSyACLmKUkHHdaqeaIznrqBibQ2XQGw1HEks';

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())
app.get('/psi', async (req, res) => {
    console.log("psi");
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'URL parameter is required' });
    }

    try {
        const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${API_KEY}&strategy=MOBILE&category=ACCESSIBILITY&category=BEST_PRACTICES&category=PERFORMANCE&category=SEO&category=PWA`;
        const response = await axios.get(apiUrl);
        console.log("ghj");
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the PageSpeed Insights data' });
    }
});
// Puppeteer Endpoint
app.get('/scrape', async (req, res) => {
    const { url } = req.query;
    console.log("scrape");
    if (!url) {
        return res.status(400).json({ error: 'URL parameter is required' });
    }

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);

        const data = await page.evaluate(() => {
            const title = document.querySelector('title')?.innerText;
            const htmlText = document.documentElement.innerHTML;
            const keywordsMeta = document.querySelector('meta[name="keywords"]');
            const keywords = keywordsMeta ? keywordsMeta.getAttribute('content') : null;
            const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content');
            const languageCode = document.documentElement.lang;
            const countryCode = document.querySelector('meta[name="geo.country"]')?.getAttribute('content');

            return {
                title,
                keywords,
                subKeywords: keywords ? keywords.split(',').map(kw => kw.trim()) : [],
                metaDescription,
                languageCode,
                countryCode,
                htmlText,
            };
        });

        await browser.close();
        console.log("2hh");
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while scraping the page' });
    }
});






app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
