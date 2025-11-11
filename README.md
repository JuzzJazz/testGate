# Ad1Gate Portal

A modern, enhanced login and dashboard application built with Next.js and Tailwind CSS.

## Features

### Login Page
- 🎨 Modern UI with gradient backgrounds and animations
- 🔒 Password visibility toggle
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🎯 Clean and professional interface
- 🌙 Beautiful glassmorphism effects
- ⚡ Loading states on form submission

### Dashboard Page
- 📊 Interactive sidebar navigation with 10+ menu items
- 👤 User profile display with email
- 🔔 Notification system
- 📈 Statistics cards showing order metrics
- 🎯 Quick action buttons
- 📝 Recent activities feed
- 🔍 Global search functionality
- 📱 Fully responsive mobile menu
- ⚙️ System status indicator
- 🎨 Modern card-based layout

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Pages

### 1. Login Page (`/`)
- Enhanced login form with validation
- Remember me functionality
- Links to forgot password, contact, and registration
- Auto-redirect to dashboard on successful login

### 2. Dashboard (`/dashboard`)
- Collapsible sidebar navigation
- Statistics overview
- Recent activities tracking
- Quick action buttons
- User profile header
- System status monitoring
- Breadcrumb navigation

## UI Enhancements

This design includes several enhancements over the original:

**Login Page:**
- Animated background with floating gradient orbs
- Grid pattern overlay for depth
- Glassmorphism card design
- Smooth hover effects and transitions
- Better form input styling with icons
- Password show/hide toggle
- Loading animation on submit
- Enhanced color scheme with gradients
- Modern typography and spacing
- Responsive contact options in footer
- Professional shadow and border effects

**Dashboard:**
- Modern sidebar with smooth transitions
- Highlighted active menu items (Home in yellow)
- Statistics cards with gradient icons
- Recent activity feed with timestamps
- Quick action gradient buttons
- System status indicator
- Responsive mobile hamburger menu
- User avatar with initials
- Notification badge
- Breadcrumb navigation
- Card-based layout with hover effects

## Color Scheme

- Primary Green: #22C55E
- Accent Yellow: #FFC107
- Dark Gray: #1F2937 - #111827
- White backgrounds with transparency for glassmorphism

## Customization

You can customize colors in `tailwind.config.ts` and modify the component in `app/page.tsx`.
