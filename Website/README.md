# AutoHub - Car Selling & Research Website Template

A comprehensive car selling and research platform template built with HTML, CSS, and JavaScript. Features modern UI, interactive car browsing, comparisons, and research tools.

## Features

### 🚗 Core Functionality
- **Browse Cars**: View a grid of available vehicles with key specs
- **Search**: Search cars by make, model, or type
- **Filter**: Advanced filtering by make, price, type, and year
- **Car Details**: Modal popup with comprehensive vehicle information
- **Comparison**: Compare up to 2 cars side-by-side
- **Research Hub**: Information about buying guides, maintenance, safety ratings, and fuel efficiency

### 💎 Features Included
- Responsive design for mobile and desktop
- Sticky navigation bar
- Hero section with search
- Multiple filter options
- Car ratings and specifications
- Detailed vehicle information panels
- Contact form for inquiries
- Interactive comparison table
- Research articles section

## Project Structure

```
Website/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── data.js             # Car data and model database
└── README.md           # This file
```

## Car Data Model

Each car in the database contains:

```javascript
{
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2024,
    type: "Sedan",
    price: 28900,
    mileage: 5000,
    color: "Silver",
    transmission: "Automatic",
    fuelType: "Hybrid",
    mpg: 51,
    engine: "2.5L 4-Cylinder",
    power: "208 hp",
    seats: 5,
    image: "🚗",
    description: "The 2024 Toyota Camry...",
    features: ["Feature1", "Feature2", ...],
    rating: 4.7
}
```

## Sample Data

The template includes 12 sample vehicles:

1. **Toyota Camry** (Sedan) - $28,900
2. **Honda Civic** (Sedan) - $24,500
3. **BMW X5** (SUV) - $65,000
4. **Tesla Model 3** (Sedan) - $42,900
5. **Ford F-150** (Truck) - $35,900
6. **Mercedes C-Class** (Sedan) - $48,500
7. **Chevrolet Silverado** (Truck) - $33,900
8. **Toyota RAV4** (SUV) - $32,500
9. **Honda Accord** (Sedan) - $32,000
10. **BMW 3 Series** (Sedan) - $52,000
11. **Tesla Model Y** (SUV) - $55,900
12. **Mercedes GLC** (SUV) - $62,000

## How to Use

### Opening the Website
1. Open `index.html` in a web browser
2. The home page will load with the hero section and search bar

### Browsing Cars
- View all available cars in the main grid
- Each car card shows: model, type, MPG, mileage, transmission, and price

### Searching
1. Type in the search box (e.g., "Toyota", "Sedan", "40000")
2. Click "Search" or press Enter
3. Results update in real-time

### Filtering
1. Use the filter section to narrow down by:
   - **Make**: Car manufacturer
   - **Price Range**: Budget constraints
   - **Type**: Vehicle category (Sedan, SUV, Truck, etc.)
   - **Year**: Model year
2. Click "Reset Filters" to clear all filters

### Viewing Details
1. Click "View Details" on any car card
2. A modal popup opens with comprehensive information including:
   - Full specifications
   - Performance metrics
   - Features list
   - Rating
3. From the details view, you can "Add to Comparison" or "Inquire About Car"

### Comparing Cars
1. Select two cars from the comparison dropdown menus at the bottom
2. A side-by-side comparison table displays all key specifications
3. Easily compare prices, engines, fuel efficiency, and more

### Contacting
1. Scroll to the Contact section at the bottom
2. Fill in your name, email, and message
3. When clicking "Inquire About Car" from a vehicle detail, the message is pre-filled

## Adding Custom Data

To add new cars to the database, edit `data.js`:

```javascript
const carsData = [
    {
        id: 13,
        make: "Audi",
        model: "A4",
        year: 2024,
        type: "Sedan",
        price: 55000,
        // ... other properties
    },
    // Add more cars here
];
```

## Customization

### Colors
Edit the color variables in `styles.css`:
- Primary purple: `#667eea`
- Accent red: `#ff6b6b`
- Dark background: `#1a1a1a`

### Styling
All CSS is contained in `styles.css` with clear sections for:
- Navigation
- Hero section
- Filters
- Car cards
- Modals
- Forms
- Responsive design

### JavaScript Functions

Key functions in `script.js`:
- `loadAllCars()` - Load all cars
- `displayCars(cars)` - Display cars in grid
- `filterCars(make, priceRange, type, year)` - Filter cars
- `searchCars(query)` - Search cars
- `viewCarDetails(id)` - Show car details modal
- `updateComparison()` - Update comparison table

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Design

The template is fully responsive with breakpoints for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (below 768px)

## Features to Implement

Future enhancements you might consider:

- Backend integration with a database (MongoDB, PostgreSQL)
- User authentication and accounts
- Wishlist functionality
- Advanced filtering with more criteria
- Vehicle history reports (Carfax/AutoCheck integration)
- Financing calculator
- Trade-in valuation tool
- User reviews and ratings
- Dealer locator
- Email notifications for price drops

## License

This template is free to use and modify for personal or commercial projects.

## Support

For issues or questions, refer to the inline comments in the code or modify the template as needed.

---

Happy selling! 🚗
