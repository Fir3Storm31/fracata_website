# Portfolio Website

A modern, responsive portfolio website built with Node.js and Express.js. This template includes multiple pages to showcase your work, education, and personal interests.

## Features

- Responsive design that works on all devices
- Multiple pages: Home, About, Work, Education, and Curiosity
- Modern UI with smooth animations
- Easy to customize and extend
- Mobile-friendly navigation
- SEO-friendly structure

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
portfolio-website/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── views/
│   ├── layouts/
│   │   └── main.ejs
│   ├── index.ejs
│   ├── about.ejs
│   ├── work.ejs
│   ├── education.ejs
│   └── curiosity.ejs
├── app.js
└── package.json
```

## Customization

1. Update the content in the EJS templates under the `views` directory
2. Modify the styles in `public/css/style.css`
3. Add your own images to the `public/images` directory
4. Update the navigation links and social media links in `views/layouts/main.ejs`

## Deployment

The application can be deployed to any Node.js hosting platform (e.g., Heroku, DigitalOcean, AWS).

1. Create a `Procfile` (for Heroku):
```
web: node app.js
```

2. Set the environment variable for the port:
```bash
PORT=3000
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details. 