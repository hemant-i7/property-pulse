# PropertyPulse - Premium Real Estate Platform

A modern, sleek real estate platform built with Next.js 15, TypeScript, and Tailwind CSS, integrated with Contentstack CMS for dynamic property management.

## ✨ Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dynamic Content**: Properties fetched from Contentstack CMS
- **Advanced Filtering**: Search by location, type, price range
- **Property Details**: Comprehensive property information pages
- **Contact Forms**: Lead generation with inquiry forms
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Optimized images and fast loading times

## 🎨 Design System

- **Colors**: Modern blue and orange color palette
- **Typography**: Inter for body text, Poppins for headings
- **Components**: Reusable, accessible components
- **Animations**: Smooth transitions and hover effects

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Contentstack account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd propertypulse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   
   Copy `.env.local` and update with your Contentstack credentials:
   ```bash
   cp .env.local .env.local
   ```
   
   Update the following variables:
   ```env
   NEXT_PUBLIC_CONTENTSTACK_API_KEY=your_stack_api_key
   NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN=your_stack_delivery_token
   NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT=development
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Contentstack Setup

### Content Type: Properties

Create a content type called `properties` with the following fields:

```json
{
  "title": "Single Line Textbox",
  "type": "Single Line Textbox", 
  "location": "Single Line Textbox",
  "price": "Single Line Textbox",
  "size": "Single Line Textbox",
  "description": "Rich Text Editor",
  "amenities": "Single Line Textbox",
  "url": "Single Line Textbox"
}
```

### Sample Property Entry

```json
{
  "title": "Villa in Juhu",
  "type": "Villa",
  "location": "Juhu, Mumbai",
  "price": "₹12,00,00,000",
  "size": "3500 sq. ft",
  "description": {
    "type": "doc",
    "children": [
      {
        "type": "p",
        "children": [
          {
            "text": "Premium villa with private garden and pool, located in the prestigious Juhu area. This luxurious property features 4 bedrooms, a spacious living area, and direct beach access."
          }
        ]
      }
    ]
  },
  "amenities": "Garden, Pool, Security, Clubhouse",
  "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
}
```

## 🛠 Development

### Project Structure

```
├── app/                    # Next.js 15 App Router
│   ├── page.tsx           # Home page
│   ├── properties/        # Properties pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── hero/             # Hero section components
│   ├── layout/           # Layout components
│   ├── property/         # Property-related components
│   └── chat/             # Chat widget
├── lib/                  # Utilities and services
│   ├── contentstack.ts   # Contentstack integration
│   ├── providers/        # React context providers
│   └── utils/            # Utility functions
└── types/                # TypeScript type definitions
```

### Key Components

- **PropertyCard**: Individual property display card
- **PropertyGrid**: Grid layout for multiple properties
- **HeroBanner**: Hero section with search functionality
- **Header/Footer**: Navigation and site information

### Contentstack Integration

The `lib/contentstack.ts` file provides:

- **PropertyService.getAllProperties()**: Fetch all properties
- **PropertyService.getPropertyByUid()**: Get single property
- **PropertyService.searchProperties()**: Filter properties
- **PropertyService.extractDescriptionText()**: Parse rich text

## 🎯 API Integration

### Contentstack API Usage

```javascript
// Get all properties
const properties = await PropertyService.getAllProperties();

// Search with filters
const filteredProperties = await PropertyService.searchProperties({
  location: 'Juhu',
  type: 'Villa',
  minPrice: 10000000,
  maxPrice: 50000000
});

// Get single property
const property = await PropertyService.getPropertyByUid('property_uid');
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Environment Variables for Production

Ensure these environment variables are set in your production environment:

- `NEXT_PUBLIC_CONTENTSTACK_API_KEY`
- `NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN` 
- `NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT`

## 🎨 Customization

### Colors

Update colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Main brand color
    600: '#0284c7', // Hover state
  },
  accent: {
    500: '#f59e0b', // Secondary color
  }
}
```

### Typography

Fonts are configured in `app/layout.tsx`:

- **Inter**: Body text and UI elements
- **Poppins**: Headings and emphasis
- **JetBrains Mono**: Code and monospace text

## 📱 Features

### Property Search & Filtering
- Location-based search
- Property type filtering
- Price range selection
- Real-time results

### Property Details
- High-resolution images
- Comprehensive descriptions
- Amenities listing
- Contact forms
- Virtual tour integration

### Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop enhancements
- Touch-friendly interactions

## 🔧 Technical Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Contentstack
- **Fonts**: Google Fonts (Inter, Poppins)
- **Icons**: Heroicons (SVG)
- **Images**: Next.js Image Optimization

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

Built with ❤️ using Next.js and Contentstack