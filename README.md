# SEO-Audit

Hey there! Welcome to SEO-Audit, a comprehensive web application I built to provide in-depth website SEO analysis and performance metrics. I created this tool to help identify and fix common SEO issues, improve website performance, and enhance search engine visibility for any website.

## 📋 Table of Contents

- Tech Stack
- Features
- File Structure
- Installation
- Local Deployment
- Production Deployment
- Contributing
- License

## 🛠️ Tech Stack

After trying various combinations, here's the stack I settled on:

### Frontend
- **Next.js** - I chose this React framework with app router for better performance and SEO
- **TypeScript** - Added for type safety and to improve my development workflow
- **TailwindCSS** - My go-to for styling and responsive design
- **DaisyUI** - This component library built on Tailwind saved me tons of time
- **Vercel Analytics** - I implemented this to track user interactions

### Backend
- **Node.js** - My preferred JavaScript runtime
- **Express** - A lightweight web framework I used for the API
- **Puppeteer** - I utilized this for web scraping and data extraction
- **Prisma** - My choice for database operations with type safety

### APIs and Services
- **Google PageSpeed Insights** - I integrated this for performance analysis
- **Lighthouse** - Used for comprehensive web quality metrics

### Data Storage
- **Database** - I implemented a relational database with Prisma for data persistence

## ✨ Features

Here's what my SEO audit tool can do:

### SEO Analysis
- **Meta Tags Analysis** - I built checks for title, description, and social media tags
- **Content Analysis** - Keyword usage, heading structure, and content quality evaluation
- **Technical SEO** - HTML validation, sitemap, robots.txt checks, and more

### Performance Testing
- **Page Speed Analysis** - I implemented measures for load time, TTFB, and rendering metrics
- **Resource Optimization** - CSS/JavaScript minification, image optimization suggestions
- **Caching Analysis** - Checks for proper implementation of browser caching

### Mobile Testing
- **Viewport Configuration** - Meta viewport validation I coded from scratch
- **Responsive Design Analysis** - Media queries and mobile-friendly design checks
- **Mobile Performance** - Mobile-specific performance metrics I found crucial

### Security Checks
- **SSL Checker** - HTTPS implementation verification
- **Mixed Content Detection** - I added security vulnerability scanning
- **Cross-Origin Link Safety** - Link security verification

### Comprehensive Reports
- **Visual Dashboard** - I designed an intuitive performance score visualization
- **Detailed Analysis** - In-depth explanation of issues I find most important
- **Recommendation Engine** - Actionable tips for improvement based on my experience

## 📁 File Structure

Here's how I organized my project:

```
SEO-Audit/
├── backend/
│   └── app.js                      # My Node.js backend server
│
├── seoaudit/                       # My Next.js frontend application
│   ├── app/
│   │   ├── blogs/                  # Blog content I wrote
│   │   ├── components/             # UI components I built
│   │   ├── contexts/               # React contexts for state management
│   │   ├── data/                   # Static data files
│   │   │   └── data.tsx            # SEO test definitions I created
│   │   ├── run/
│   │   │   └── result/
│   │   │       ├── page.tsx        # Results page
│   │   │       └── test/           # Individual test implementations
│   │   ├── sections/               # Page sections I designed
│   │   ├── tools/                  # Individual tools pages
│   │   ├── Footer.tsx              # My footer component
│   │   ├── Nav.tsx                 # Navigation component
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout
│   │   └── page.tsx                # Homepage
│   ├── public/                     # Static assets
│   └── tailwind.config.ts          # My Tailwind configuration
```

## 🚀 Installation

Want to run my project locally? Here's how:

1. Clone my repository:
   ```bash
   git clone https://github.com/harshit960/SEO-Audit.git
   cd SEO-Audit
   ```

2. Install frontend dependencies:
   ```bash
   cd seoaudit
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../backend
   npm install
   ```

## 💻 Local Deployment

### Frontend

1. Create a `.env.local` file in the seoaudit directory with:
   ```env
   NEXT_PUBLIC_API_HOST=http://localhost:3001
   ```

2. Start my development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend

1. Create a `.env` file in the backend directory with your database connection:
   ```env
   DATABASE_URL="your-database-connection-string"
   ```

2. Start the backend server:
   ```bash
   npm run start
   ```

My backend will run on [http://localhost:3001](http://localhost:3001).

## 🌐 Production Deployment

I've successfully deployed this project using:

### Frontend (Vercel)

I deployed the Next.js frontend using [Vercel](https://vercel.com):

1. Pushed my code to a GitHub repository
2. Imported the project into Vercel
3. Set up the environment variables
4. Clicked Deploy

### Backend (Heroku)

For the backend, I chose Heroku:

1. Created a new Heroku app
2. Connected my GitHub repository
3. Set up the required environment variables
4. Deployed from the main branch

I made sure to set the appropriate environment variables in my production environment, including:
- `DATABASE_URL` for my database connection
- `EMAIL_USER` and `EMAIL_PASS` for email functionality
- `GOOGLE_PSI_API_KEY` for PageSpeed Insights

## 🔍 Key Files

Here are the files I'm most proud of:
- data.tsx - Contains all my SEO test definitions
- page.tsx - My main results display page
- test - Individual test implementations
- app.js - My backend API implementation

## 🤝 Contributing

I welcome contributions! Feel free to submit a Pull Request.

1. Fork my repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

I've licensed this project under the MIT License - see the LICENSE file for details.

---

I built this with ❤️ to help make the web better, one SEO audit at a time. If you have any questions or feedback, please reach out!
