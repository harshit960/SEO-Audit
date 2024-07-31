import express from 'express';
import axios from 'axios';
import puppeteer from 'puppeteer';
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import nodemailer from 'nodemailer';
const prisma = new PrismaClient()

const app = express();
const port = 10000;
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
        const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${API_KEY}&category=ACCESSIBILITY&category=BEST_PRACTICES&category=PERFORMANCE&category=SEO&category=PWA`;
        const response = await axios.get(apiUrl);
        console.log("PSI Data Received");
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the PageSpeed Insights data', errors: error });
    }
});
// Puppeteer Endpoint
app.get('/scrape', async (req, res) => {
    const { url } = req.query;
    console.log("Scraping");
    if (!url) {
        return res.status(400).json({ error: 'URL parameter is required' });
    }

    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox']
        });
        const page = await browser.newPage();
        await page.goto(url);

        const data = await page.evaluate(() => {
            const title = document.querySelector('title')?.innerText;
            const keywordsMeta = document.querySelector('meta[name="keywords"]');
            const keywords = keywordsMeta ? keywordsMeta.getAttribute('content') : null;
            const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content');
            const languageCode = document.documentElement.lang;
            const countryCode = document.querySelector('meta[name="geo.country"]')?.getAttribute('content');
            const htmlText = document.documentElement.innerHTML;

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
        console.log("Scrapped successfully");
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while scraping the page', errors: error });
    }
});

app.post('/createUser', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await prisma.user.create({
            data: { name, email, password },
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});
app.get('/pricing', async (req, res) => {
    try {
        const Basic = await prisma.PlanPricing.findFirst(
            {
                where: {
                    name: 'Basic',
                    country: 'India',
                },
            }
        );
        const Professional = await prisma.PlanPricing.findFirst(
            {
                where: {
                    name: 'Professional',
                    country: 'India',
                },
            }
        );
        const Enterprise = await prisma.PlanPricing.findFirst(
            {
                where: {
                    name: 'Enterprise',
                    country: 'India',
                },
            }
        );
        res.json({ Basic: Basic.price, Professional: Professional.price, Enterprise: Enterprise.price });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post('/createPlan', async (req, res) => {
    try {
        const { name, price, currency, country } = req.body;
        const plan = await prisma.PlanPricing.create({
            data: { name, price, currency, country },
        });
        res.json(plan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post('/createReview', async (req, res) => {

    try {
        const { userName, userRole, imgUrl, message, rating } = req.body;
        const reviewData = await prisma.Rating.create({
            data: { userName, userRole, imgUrl, message, rating },
        });
        res.json(reviewData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.get('/getReviews', async (req, res) => {
    try {
        const reviews = await prisma.Rating.findMany(
            {
                take: 2
            }
        );
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post('/contact', async (req, res) => {
    console.log(req.body);
    try {
        const { name, email, message } = req.body;
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your-email@gmail.com',
                pass: 'your-password'
            }
        });
        const mailOptions = {
            from: 'your-email@gmail.com',
            to: 'recipient-email@example.com',
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };
        await transporter.sendMail(mailOptions);
        res.json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.listen(process.env.PORT || 10000, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
