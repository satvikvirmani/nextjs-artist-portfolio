# Artist Portfolio

<p align="center">
    <img alt="Logo" src="https://res.cloudinary.com/wecloud/image/upload/v1662881132/artist-portfolio/logo_png_gacjtg.png" height="120">
    <h3 align="center">A Modern Portfolio Website for Artists</h3>
</p>

<p align="center">
    <img src="https://img.shields.io/badge/Made%20by%20Satvik%20Virmani-000000?style=for-the-badge">
    <img src="https://img.shields.io/github/license/satvikvirmani/nextjs-artist-portfolio?color=000000&style=for-the-badge">
    <img src="https://img.shields.io/website?color=000000&down_color=red&down_message=offline&style=for-the-badge&up_color=green&up_message=online&url=https%3A%2F%2Fnextjs-artist-portfolio.vercel.app%2F">
</p>

---

## Overview

A beautiful, responsive portfolio website built specifically for artists to showcase their creative work. This Next.js-powered application combines elegant design with powerful features like offline support, real-time image management, and smooth animations to create a professional online presence.

## Features

### **For Visitors**
- **Stunning Gallery** - Browse artwork in a responsive grid layout
- **Full-Screen Viewer** - Immersive image viewing with swipe navigation
- **Artist Bio** - Learn about the artist's journey and background
- **Contact Form** - Easy communication directly through the website
- **PWA Support** - Install as an app and access offline

### **For Artists (Admin)**
- **Secure Login** - Firebase authentication protects your admin panel
- **Easy Upload** - Drag-and-drop image uploads with progress tracking
- **Content Management** - Add labels, descriptions, and showcase flags
- **Real-Time Updates** - Changes appear instantly across the site

### **Technical Highlights**
- **Lightning Fast** - Next.js with optimized images and caching
- **Fully Responsive** - Beautiful on mobile, tablet, and desktop
- **Smooth Animations** - Framer Motion for buttery transitions
- **Real-Time Sync** - Firebase Firestore for live data updates
- **SEO Optimized** - Open Graph and Twitter Card support
- **TypeScript** - Type-safe codebase for reliability

## Tech Stack

```
Frontend:       Next.js 11, React 17, TypeScript
Styling:        Tailwind CSS
Backend:        Firebase (Firestore, Storage, Auth)
Animations:     Framer Motion, React Reveal
Components:     Swiper (Carousel)
PWA:            next-offline
```

## Quick Start

### Prerequisites
- Node.js 14+ and npm/yarn
- Firebase project with Firestore, Storage, and Authentication enabled

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/satvikvirmani/nextjs-artist-portfolio.git
cd nextjs-artist-portfolio
```

2. **Install dependencies**
```bash
yarn install
# or
npm install
```

3. **Configure Firebase**
   
   Update `backend/firebase-config.ts` with your Firebase credentials:
```typescript
const config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

4. **Update mock data**
   
   Create `mock/mock.ts` with your information:
```typescript
export const data = {
  name: "Your Name",
  job: "Your Title",
  email: "your.email@example.com",
  facebook_link: "https://facebook.com/yourprofile",
  instagram_link: "https://instagram.com/yourprofile",
  aboutme_para1: "First bio paragraph...",
  aboutme_para2: "Second bio paragraph..."
};
```

5. **Update contact form**
   
   In `components/Contact.tsx`, change the FormSubmit email:
```typescript
action="https://formsubmit.co/YOUR_EMAIL@example.com"
```

6. **Run development server**
```bash
yarn dev
# or
npm run dev
```

Visit `http://localhost:3000` to see your portfolio! 🎉

## Project Structure

```
nextjs-artist-portfolio/
├── backend/
│   └── firebase-config.ts      # Firebase initialization
├── components/
│   ├── Bio.tsx                 # Artist biography section
│   ├── Contact.tsx             # Contact form
│   ├── Footer.tsx              # Site footer
│   ├── Gallery.tsx             # Full-screen image viewer
│   ├── Hero.tsx                # Homepage hero section
│   ├── ImageComponent.tsx      # Individual image card
│   ├── Layout.tsx              # Page layout wrapper
│   ├── ListMobile.tsx          # Mobile navigation menu
│   ├── LoginForm.tsx           # Admin authentication
│   ├── Navbar.tsx              # Navigation bar
│   ├── Progressbar.tsx         # Upload progress indicator
│   ├── Showcase.tsx            # Portfolio grid
│   └── UploadForm.tsx          # Admin upload interface
├── hooks/
│   ├── useDatabase.ts          # Fetch images from Firestore
│   ├── useLogin.ts             # Authentication helper
│   ├── useStorage.ts           # Handle file uploads
│   └── uniqueFunction.ts       # Calculate image dimensions
├── pages/
│   ├── _app.tsx                # Custom App component
│   ├── _document.tsx           # Custom Document
│   ├── index.tsx               # Homepage
│   ├── portfolio.tsx           # Full portfolio page
│   ├── bio.tsx                 # Biography page
│   ├── contact.tsx             # Contact page
│   └── admin.tsx               # Admin panel
├── public/
│   ├── icons/                  # PWA app icons
│   └── manifest.json           # PWA manifest
└── mock/
    └── mock.ts                 # Artist data (create this!)
```

## Customization

### Change Colors
Edit `tailwind.config.js` and component styling. Default theme uses cream (#f8edeb) and pink (#fcd5ce).

### Update Images
Replace URLs in Hero.tsx and Bio.tsx with your Cloudinary/hosting URLs.

### Modify Layout
All components use Tailwind's grid system - adjust column spans for different layouts.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Environment variables are not needed (Firebase config is client-side)
4. Deploy! ✨

### Other Platforms
```bash
yarn build
yarn start
```

## Usage Guide

### As a Visitor
1. Browse the homepage to see featured artwork
2. Click "Portfolio" to view all pieces
3. Click any image to open full-screen gallery
4. Use arrow keys or swipe to navigate
5. Visit "Bio" to learn about the artist
6. Use "Contact" form to send a message

### As an Admin
1. Navigate to `/admin`
2. Log in with your Firebase credentials
3. Upload new images with labels and descriptions
4. Check "Show in Showcase" to feature on homepage
5. Images appear instantly on the live site

## Security Notes

- Admin route is protected by Firebase Authentication
- Use Firebase Console to create admin users
- Never commit Firebase credentials to public repos
- Consider adding custom claims for role-based access

## Troubleshooting

**Images not loading?**
- Check Firebase Storage security rules
- Verify image URLs are publicly accessible

**Upload failing?**
- Ensure Firebase Storage is enabled
- Check file size (recommended < 5MB)
- Verify file format (PNG/JPEG only)

**Build errors?**
- Delete `.next` folder and `node_modules`
- Run `yarn install` again
- Check Node.js version (14+ required)

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Feel free to check the [issues page](https://github.com/satvikvirmani/nextjs-artist-portfolio/issues).

## Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **PWA**: Fully installable with offline support

## License

This project is [MIT](LICENSE) licensed.

Copyright (c) 2021 Satvik Virmani

## Author

### **Satvik Virmani**

- Twitter: [@satvikvirmani](https://twitter.com/satvikvirmani)
- Medium: [satvikvirmani.medium.com](https://satvikvirmani.medium.com/)
- Email: virmanisatvik01@gmail.com

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Firebase](https://firebase.google.com/) - Backend services
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Swiper](https://swiperjs.com/) - Touch slider

## Show Your Support

Give a ⭐️ if this project helped you create an amazing portfolio!

---

<p align="center">Made with ❤️ and ☕</p>
