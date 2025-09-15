
# Mahesh Purohit - Portfolio Website

A modern, responsive, and visually stunning personal portfolio website built with React.js, Tailwind CSS, and Framer Motion animations.

## ✨ Features

- **Modern Design**: Dark theme with gradient highlights and elegant typography
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for fade-ins, slide-ins, and hover effects
- **Interactive Elements**: Floating cursor effect, particle animations, and smooth transitions
- **Professional Sections**: Hero, About, Skills, Projects, Achievements, and Contact
- **Mobile-First**: Optimized for mobile devices with touch-friendly interactions

## 🚀 Sections

### 1. Hero Section
- Fullscreen landing with animated text and tagline
- Download Resume button
- Floating particles and gradient backgrounds
- Smooth scroll indicator

### 2. About Section
- Profile picture with animated floating elements
- Personal description and key features
- Statistics and achievements overview

### 3. Skills Section
- Interactive skill cards with progress bars
- Technology icons and proficiency levels
- Additional skills showcase

### 4. Projects Section
- 6 featured projects with descriptions
- Technology tags and live/github links
- Hover effects and smooth animations

### 5. Achievements Section
- Timeline layout for major achievements
- Awards, competitions, and recognitions
- Statistics and metrics

### 6. Contact Section
- Contact form with validation
- Contact information and social links
- Social media integration

## 🛠️ Technologies Used

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Responsiveness**: React Intersection Observer
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mahesh-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## ✉️ Contact Form Email Setup (EmailJS)

The contact form sends messages via EmailJS (client-side, no backend needed).

1. Create an account at https://www.emailjs.com/.
2. Create an Email Service and note the Service ID.
3. Create an Email Template with fields `from_name`, `reply_to`, and `message` (or map these names in the template).
4. Copy your Public Key from EmailJS dashboard (Account → API Keys).
5. Create a `.env` file in the project root with:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Restart `npm start` after adding the `.env` file.

Validation covers name, email format, and minimum message length; success/error alerts appear above the form.

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.js` - Name, tagline, and description
- `src/components/About.js` - Personal details and stats
- `src/components/Contact.js` - Contact details and social links
- `src/components/Projects.js` - Your projects and links
- `src/components/Achievements.js` - Your achievements and awards

### Profile Picture
Replace the placeholder in `src/components/About.js` with your actual profile picture.

### Colors and Theme
Customize colors in `tailwind.config.js` under the `primary` and `dark` color schemes.

### Social Links
Update social media URLs in `src/components/Contact.js` with your actual profiles.

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first approach
- Touch-friendly interactions
- Optimized layouts for all screen sizes
- Smooth mobile navigation

## 🎭 Animations

- **Framer Motion**: Smooth page transitions and scroll animations
- **Intersection Observer**: Trigger animations when elements come into view
- **Hover Effects**: Interactive elements with smooth transitions
- **Floating Cursor**: Custom cursor effect for enhanced interactivity

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

**Built with ❤️ by Mahesh Purohit**




