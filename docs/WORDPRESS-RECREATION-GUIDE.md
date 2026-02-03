# PowerFit Gym - WordPress Recreation Guide

> Complete design specification for recreating this React website in WordPress

---

## 📐 Design System

### Color Palette (HSL Values)

| Token | HSL Value | Hex Approx | Usage |
|-------|-----------|------------|-------|
| `--background` | 0 0% 5% | #0D0D0D | Page background |
| `--foreground` | 0 0% 98% | #FAFAFA | Primary text |
| `--primary` | 142 100% 50% | #00FF66 | Neon green accent |
| `--secondary` | 0 0% 12% | #1F1F1F | Card backgrounds |
| `--muted` | 0 0% 15% | #262626 | Subtle backgrounds |
| `--muted-foreground` | 0 0% 65% | #A6A6A6 | Secondary text |
| `--card` | 0 0% 8% | #141414 | Card surfaces |
| `--border` | 0 0% 18% | #2E2E2E | Borders |
| `--energy-orange` | 25 100% 55% | #FF8C1A | Secondary accent |

### Typography

| Element | Font | Weight | Size | Style |
|---------|------|--------|------|-------|
| Display/Headings | Oswald | 600 | 4xl-8xl | Uppercase, tracking: 0.02em |
| Body Text | Inter | 300-500 | base-lg | Normal |

**Google Fonts Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
```

---

## 🎨 Component Styles

### Buttons

**Primary Neon Button:**
```css
.btn-neon {
  background: hsl(142, 100%, 50%);
  color: hsl(0, 0%, 5%);
  padding: 1rem 2rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 0.75rem;
  transition: all 0.3s;
}
.btn-neon:hover {
  box-shadow: 0 0 30px hsla(142, 100%, 50%, 0.5);
  transform: scale(1.05);
}
```

**Outline Button:**
```css
.btn-neon-outline {
  background: transparent;
  border: 2px solid hsl(142, 100%, 50%);
  color: hsl(142, 100%, 50%);
  /* Same padding/font as above */
}
.btn-neon-outline:hover {
  background: hsl(142, 100%, 50%);
  color: hsl(0, 0%, 5%);
}
```

### Glass Card Effect
```css
.glass-card {
  background: hsla(0, 0%, 8%, 0.8);
  backdrop-filter: blur(24px);
  border: 1px solid hsl(0, 0%, 18%);
  border-radius: 1rem;
  box-shadow: 0 10px 40px hsla(0, 0%, 0%, 0.5);
}
```

---

## 📄 Section Breakdown

### 1. Hero Section
- **Layout:** Full viewport height, centered content
- **Background:** Large gym image with gradient overlays
- **Content:**
  - Badge: "Transform Your Body"
  - H1: "BUILD YOUR STRONGEST SELF" (gradient on "STRONGEST SELF")
  - Subheadline paragraph
  - Two CTAs: "Join Now" (filled), "Book Free Trial" (outline)
  - Stats row: 5000+ Members | 20+ Trainers | 50+ Classes

### 2. About Section
- **Layout:** Two columns (text + image grid)
- **Content:**
  - Section label: "Who We Are"
  - H2: "MORE THAN A GYM"
  - Mission/values paragraphs
  - 4 feature cards with icons

### 3. Classes Section
- **Layout:** Grid of 7 program cards
- **Programs:**
  1. Strength Training (Dumbbell icon)
  2. Personal Training (Users icon)
  3. Cardio & HIIT (Heart Pulse icon)
  4. Yoga & Flexibility (Sparkles icon)
  5. CrossFit (Flame icon)
  6. Zumba & Dance (Music icon)
  7. Boxing & MMA (Trophy icon)

### 4. Trainers Section
- **Layout:** 4-column grid
- **Trainer Cards:**
  - Circular image
  - Name (Oswald font)
  - Specialty
  - Years of experience badge
  - Short quote

### 5. Pricing Section
- **Layout:** 3 pricing cards
- **Plans:**
  | Plan | Price | Features |
  |------|-------|----------|
  | Basic | $29/mo | Gym access, locker, basic equipment |
  | Pro | $59/mo | + All classes, trainer consultation |
  | Elite | $99/mo | + Personal training, 24/7 access, nutrition |
- **Popular Badge:** On Pro plan

### 6. Calculators Section
- **Layout:** 3 interactive calculator cards
- **Tools:**
  1. BMI Calculator (Height, Weight → BMI + Category)
  2. Daily Calories (Age, Gender, Height, Weight, Activity → TDEE)
  3. Ideal Weight (Height, Gender → Weight range)

### 7. Testimonials Section
- **Layout:** Carousel with 3 visible cards
- **Card Content:**
  - 5-star rating
  - Quote text
  - Client name + membership type

### 8. Gallery Section
- **Layout:** 6-image filtered grid
- **Filters:** All, Gym Floor, Equipment, Classes
- **Interaction:** Click to enlarge in lightbox

### 9. Timetable Section
- **Layout:** Table (desktop) / Cards (mobile)
- **Days:** Monday-Saturday
- **Time slots:** 6 AM, 9 AM, 12 PM, 4 PM, 6 PM, 8 PM

### 10. CTA Section
- **Layout:** Centered with gradient background
- **Content:**
  - H2: "READY TO START?"
  - Subtext
  - Two CTAs

### 11. Contact Section
- **Layout:** Two columns (info cards + form)
- **Info Cards:** Location, Phone, Email, Hours
- **Form Fields:** Name, Email, Phone, Message
- **Embedded:** Google Maps iframe

### 12. Footer
- **Layout:** 4 columns
- **Columns:**
  1. Logo + description + social icons
  2. Quick Links
  3. Contact Info
  4. Opening Hours

---

## 🔧 WordPress Implementation Notes

### Recommended Plugins

| Feature | Plugin Suggestion |
|---------|------------------|
| Page Builder | Elementor Pro / Bricks |
| Forms | WPForms / Contact Form 7 |
| SEO | Yoast SEO / RankMath |
| Speed | WP Rocket / LiteSpeed |
| Custom Fields | ACF Pro |

### Customizer Options to Add

```php
// In functions.php
$wp_customize->add_section('gym_colors', [...]);
$wp_customize->add_setting('primary_color', ['default' => '#00FF66']);
$wp_customize->add_setting('secondary_color', ['default' => '#1F1F1F']);
$wp_customize->add_setting('accent_color', ['default' => '#FF8C1A']);
```

### Custom Post Types to Register

1. **Trainers** - name, specialty, experience, image, quote
2. **Classes** - name, description, icon, schedule
3. **Testimonials** - quote, client name, membership type, rating
4. **Pricing Plans** - name, price, features list, is_popular

### Menu Locations

```php
register_nav_menus([
  'primary' => 'Header Navigation',
  'footer' => 'Footer Quick Links'
]);
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, stacked nav |
| Tablet | 640-1024px | 2 columns, condensed cards |
| Desktop | > 1024px | Full multi-column layouts |

---

## ⚡ Animation Specifications

| Element | Animation | Duration | Trigger |
|---------|-----------|----------|---------|
| Hero content | Fade up | 0.8s | Page load |
| Section titles | Fade up | 0.6s | Scroll into view |
| Cards | Scale + shadow | 0.3s | Hover |
| Buttons | Scale + glow | 0.3s | Hover |
| Stats counters | Number count | 2s | Scroll into view |

---

## 📂 Asset Locations

All gallery images should be uploaded to WordPress Media Library.

Current placeholder images:
- `gallery-1.jpg` through `gallery-6.jpg`
- Trainer images from Unsplash
- Hero background from Unsplash

---

*Generated for WordPress recreation from React/Lovable source*
