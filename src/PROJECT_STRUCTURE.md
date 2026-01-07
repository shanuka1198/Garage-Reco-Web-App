# Garage Reco - Project Structure & Documentation

## 🚗 Overview
A modern, fully responsive vehicle service garage website built with React, Vite, Tailwind CSS, and Motion (Framer Motion).

## 📁 Project Structure

```
garage-reco/
├── App.tsx                          # Main app component with routing
├── components/
│   ├── AnimatedCounter.tsx          # Animated counter for stats
│   ├── ServiceCard.tsx              # Reusable service card component
│   └── ScrollToTop.tsx              # Scroll to top on route change
├── layout/
│   ├── Navbar.tsx                   # Responsive navigation with mobile menu
│   └── Footer.tsx                   # Footer with links and contact info
├── pages/
│   ├── Home.tsx                     # Landing page with hero section
│   ├── Services.tsx                 # All services display
│   ├── Booking.tsx                  # Booking form with validation
│   ├── About.tsx                    # Company info and stats
│   ├── Contact.tsx                  # Contact form and information
│   └── Admin.tsx                    # Admin dashboard (UI only)
├── data/
│   └── servicesData.ts              # Service data and mock bookings
└── styles/
    └── globals.css                  # Global styles and theme
```

## 🎨 Design System

### Color Scheme
- **Background**: #0a0a0a (Dark Black)
- **Card Background**: #141414 (Dark Gray)
- **Primary/Accent**: #dc2626 (Red)
- **Text**: #ffffff (White)
- **Muted Text**: #9ca3af (Gray)
- **Input Background**: #1f1f1f

### Features
- **Dark Automotive Theme**: Professional black/dark gray design
- **Glassmorphism Effects**: Modern glass-like cards with backdrop blur
- **Red Accent Color**: Eye-catching CTAs and highlights
- **Custom Scrollbar**: Themed scrollbar matching the design

## 📱 Pages

### 1. Home Page (`/`)
- **Hero Section**: Full-screen with background image
- **Animated Headline**: "Professional Car Care You Can Trust"
- **CTA Buttons**: "Book Service" and "Our Services"
- **Features Section**: Why choose us cards
- **Services Preview**: First 6 services in responsive grid
- **Final CTA**: Call to action section

### 2. Services Page (`/services`)
- **All Services Grid**: Responsive 1-2-3 column layout
- **Service Cards**: With icons, descriptions, pricing, duration
- **Hover Animations**: Lift effect on cards
- **Stats Display**: Years experience, vehicles serviced
- **Booking CTA**: Quick link to booking page

### 3. Booking Page (`/booking`)
- **Responsive Form**: Mobile-friendly inputs
- **Fields**:
  - Name (text input)
  - Phone (tel input)
  - Vehicle Type (select dropdown)
  - Service Type (select dropdown)
  - Date (date picker - min: today)
  - Time (time picker)
- **Validation**: Required fields with error messages
- **Success Animation**: Animated confirmation message
- **Info Cards**: Business hours, phone, same-day service

### 4. About Page (`/about`)
- **Company Story**: Text + image responsive layout
- **Animated Counters**: Experience, vehicles serviced, customers, technicians
- **Values Section**: Integrity, excellence, customer-first, innovation
- **Team Info**: Certifications and qualifications

### 5. Contact Page (`/contact`)
- **Contact Form**: Name, email, phone, message
- **Validation**: Email format and required fields
- **Contact Cards**:
  - Phone with clickable link
  - Email with mailto link
  - Location with maps link
  - Business hours
- **Social Media Icons**: Facebook, Twitter, Instagram
- **Google Maps Embed**: Interactive map

### 6. Admin Dashboard (`/admin`)
- **Responsive Sidebar**: Collapsible on mobile
- **Dashboard Stats**:
  - Total Bookings
  - Active Customers
  - Revenue
  - Growth percentage
- **Bookings Table**: 
  - Desktop: Full table view
  - Mobile: Card layout
- **Status Indicators**: Color-coded booking statuses
- **Mock Data**: Sample bookings for UI demonstration

## 🎭 Components

### Navbar
- **Desktop**: Horizontal menu with active state indicator
- **Mobile**: Hamburger menu with slide-out animation
- **Logo**: Animated wrench icon
- **Active Route**: Red underline indicator with smooth animation

### Footer
- **Responsive Grid**: 1-2-4 column layout
- **Sections**:
  - Company info and social links
  - Quick navigation links
  - Services list
  - Contact information
- **Clickable Links**: Phone (tel:), email (mailto:)

### ServiceCard
- **Animated Entry**: Fade and slide up on scroll
- **Hover Effects**: Lift animation and icon rotation
- **Content**: Icon, title, description, price, duration
- **Responsive**: Adapts to grid layout

### AnimatedCounter
- **Scroll Trigger**: Animates when in viewport
- **Easing**: Smooth ease-out animation
- **Customizable**: Duration and suffix props

## 🎬 Animations

### Motion (Framer Motion) Effects
1. **Page Transitions**: Fade and slide animations
2. **Scroll Animations**: Elements animate on scroll into view
3. **Hover Effects**: Scale, lift, and rotate transforms
4. **Button Interactions**: Scale on hover/tap
5. **Menu Animations**: Smooth slide and fade
6. **Success Messages**: Scale spring animation
7. **Counter Animations**: Number counting with easing

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (1 column layouts)
- **Tablet**: 768px - 1024px (2 column layouts)
- **Desktop**: > 1024px (3-4 column layouts)

### Mobile-First Approach
- All layouts start mobile and expand
- Touch-friendly button sizes
- Collapsible navigation
- Stacked forms on small screens
- Card layouts for tables on mobile

## 🔧 Technical Features

### Routing
- React Router DOM v6
- Clean URL structure
- Scroll to top on route change
- Active route indication

### Form Handling
- Controlled components
- Real-time validation
- Error state management
- Success feedback
- Phone number formatting

### Data Management
- TypeScript interfaces
- Centralized data file
- Mock data for demo
- Type-safe props

### Performance
- Motion viewport optimization (once: true)
- Lazy loading ready structure
- Optimized animations
- Minimal re-renders

## 🎯 Key Features

✅ Fully responsive (mobile, tablet, desktop)
✅ Dark automotive theme
✅ Smooth animations throughout
✅ Form validation
✅ Interactive components
✅ Accessible navigation
✅ SEO-friendly structure
✅ Mobile-first design
✅ Glassmorphism effects
✅ Custom scrollbar
✅ Animated counters
✅ Status indicators
✅ Interactive maps
✅ Social media integration
✅ Clean, maintainable code
✅ TypeScript support ready

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Required Dependencies
```bash
npm install react-router-dom
npm install motion
npm install lucide-react
```

### Run the Application
```bash
npm run dev
```

## 📝 Code Quality

- **Comments**: All components well-documented
- **Structure**: Clean, organized file structure
- **Reusability**: Modular, reusable components
- **Consistency**: Uniform coding style
- **TypeScript**: Type-safe interfaces

## 🎨 Styling Approach

- **Tailwind CSS v4**: Utility-first CSS
- **Custom CSS Variables**: Defined in globals.css
- **No Inline Styles**: Except for dynamic images
- **Glass Effects**: Custom .glass-card class
- **Responsive Classes**: Mobile-first breakpoints

## 📊 Data Structure

### Service Interface
```typescript
{
  id: number;
  title: string;
  description: string;
  icon: string;
  price: string;
  duration: string;
}
```

### Booking Interface
```typescript
{
  id: number;
  customerName: string;
  phone: string;
  vehicleType: string;
  service: string;
  date: string;
  time: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
}
```

## 🔮 Future Enhancements (Suggestions)

- Add backend integration
- Implement user authentication
- Add payment processing
- Include review/rating system
- Add real-time booking calendar
- Implement email notifications
- Add service history tracking
- Include vehicle make/model selection
- Add photo gallery
- Implement chat support

---

**Built with ❤️ for Garage Reco**
