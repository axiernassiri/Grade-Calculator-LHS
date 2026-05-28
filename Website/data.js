// Car Database with Sample Data
const carsData = [
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
        image: "sedan",
        description: "The 2024 Toyota Camry combines reliability with efficiency. Features a hybrid powertrain delivering excellent fuel economy.",
        features: ["Hybrid Engine", "Toyota Safety Sense", "8-inch Touchscreen", "Bluetooth", "Backup Camera", "Cruise Control"],
        rating: 4.7
    },
    {
        id: 2,
        make: "Honda",
        model: "Civic",
        year: 2024,
        type: "Sedan",
        price: 24500,
        mileage: 3000,
        color: "Blue",
        transmission: "Automatic",
        fuelType: "Gasoline",
        mpg: 35,
        engine: "1.5L Turbocharged",
        power: "174 hp",
        seats: 5,
        image: "🚗",
        description: "The Honda Civic is a sporty sedan with responsive handling and modern technology.",
        features: ["Turbocharged Engine", "Honda Sensing", "7-inch Touchscreen", "Apple CarPlay/Android Auto", "Sunroof", "Heated Seats"],
        rating: 4.6
    },
    {
        id: 3,
        make: "BMW",
        model: "X5",
        year: 2024,
        type: "SUV",
        price: 65000,
        mileage: 2000,
        color: "Black",
        transmission: "Automatic",
        fuelType: "Hybrid",
        mpg: 26,
        engine: "3.0L Twin-Turbocharged",
        power: "335 hp",
        seats: 7,
        image: "suv",
        description: "Luxury SUV with premium features, advanced technology, and powerful performance.",
        features: ["Twin-Turbocharged Engine", "All-Wheel Drive", "Premium Sound System", "Panoramic Sunroof", "Leather Interior", "Head-Up Display"],
        rating: 4.8
    },
    {
        id: 4,
        make: "Tesla",
        model: "Model 3",
        year: 2024,
        type: "Sedan",
        price: 42900,
        mileage: 0,
        color: "Pearl White",
        transmission: "Automatic",
        fuelType: "Electric",
        mpg: "142 MPGe",
        engine: "Electric Motor",
        power: "272 hp",
        seats: 5,
        image: "sedan",
        description: "Full electric sedan with impressive range, minimal maintenance, and cutting-edge technology.",
        features: ["All-Electric", "Autopilot", "300+ Mile Range", "Supercharging", "Touchscreen Controls", "Over-the-Air Updates"],
        rating: 4.9
    },
    {
        id: 5,
        make: "Ford",
        model: "F-150",
        year: 2024,
        type: "Truck",
        price: 35900,
        mileage: 4000,
        color: "Red",
        transmission: "Automatic",
        fuelType: "Gasoline",
        mpg: 24,
        engine: "3.5L EcoBoost",
        power: "400 hp",
        seats: 5,
        image: "truck",
        description: "America's best-selling truck. Powerful towing capacity and modern comfort features.",
        features: ["EcoBoost Engine", "Towing Package", "Sync 4 Infotainment", "Rear View Camera", "Trailer Hitch", "Available 4WD"],
        rating: 4.5
    },
    {
        id: 6,
        make: "Mercedes",
        model: "C-Class",
        year: 2024,
        type: "Sedan",
        price: 48500,
        mileage: 1500,
        color: "White",
        transmission: "Automatic",
        fuelType: "Gasoline",
        mpg: 28,
        engine: "2.0L Turbocharged",
        power: "255 hp",
        seats: 5,
        image: "sedan",
        description: "Premium luxury sedan with elegant design and advanced safety features.",
        features: ["Turbocharged Engine", "Attention Assist", "COMAND System", "Premium Sound System", "Leather Seats", "LED Lighting"],
        rating: 4.7
    },
    {
        id: 7,
        make: "Chevrolet",
        model: "Silverado",
        year: 2024,
        type: "Truck",
        price: 33900,
        mileage: 3500,
        color: "Gray",
        transmission: "Automatic",
        fuelType: "Gasoline",
        mpg: 23,
        engine: "5.3L V8",
        power: "355 hp",
        seats: 5,
        image: "truck",
        description: "Full-size pickup with powerful V8 engine and advanced technology.",
        features: ["V8 Engine", "Chevrolet MyLink", "Available 4WD", "Apple CarPlay/Android Auto", "Remote Start", "Bed Utility Features"],
        rating: 4.4
    },
    {
        id: 8,
        make: "Toyota",
        model: "RAV4",
        year: 2024,
        type: "SUV",
        price: 32500,
        mileage: 2500,
        color: "Silver",
        transmission: "Automatic",
        fuelType: "Hybrid",
        mpg: 40,
        engine: "2.5L 4-Cylinder Hybrid",
        power: "203 hp",
        seats: 5,
        image: "suv",
        description: "Compact SUV with excellent fuel economy and all-wheel drive capability.",
        features: ["Hybrid Engine", "All-Wheel Drive", "Toyota Safety Sense 2.5", "8-inch Touchscreen", "Roof Rails", "Cargo Space"],
        rating: 4.8
    },
    {
        id: 9,
        make: "Honda",
        model: "Accord",
        year: 2023,
        type: "Sedan",
        price: 32000,
        mileage: 8000,
        color: "Red",
        transmission: "Manual",
        fuelType: "Gasoline",
        mpg: 32,
        engine: "2.0L Turbocharged",
        power: "180 hp",
        seats: 5,
        image: "sedan",
        description: "Mid-size sedan known for reliability and excellent driving dynamics.",
        features: ["Turbocharged Engine", "Manual Transmission", "Honda Sensing", "Sunroof", "Apple CarPlay", "Backup Camera"],
        rating: 4.6
    },
    {
        id: 10,
        make: "BMW",
        model: "3 Series",
        year: 2023,
        type: "Sedan",
        price: 52000,
        mileage: 5500,
        color: "Navy Blue",
        transmission: "Automatic",
        fuelType: "Gasoline",
        mpg: 31,
        engine: "2.0L Turbocharged",
        power: "255 hp",
        seats: 5,
        image: "sedan",
        description: "Sporty luxury sedan with responsive handling and premium interior.",
        features: ["Turbocharged Engine", "All-Wheel Drive", "Premium Sound System", "Panoramic Sunroof", "Leather Upholstery", "Navigation System"],
        rating: 4.7
    },
    {
        id: 11,
        make: "Tesla",
        model: "Model Y",
        year: 2024,
        type: "SUV",
        price: 55900,
        mileage: 500,
        color: "Solid Black",
        transmission: "Automatic",
        fuelType: "Electric",
        mpg: "130 MPGe",
        engine: "Electric Motor",
        power: "351 hp",
        seats: 5,
        image: "suv",
        description: "Electric SUV with impressive acceleration and advanced Autopilot features.",
        features: ["All-Electric", "Autopilot", "330+ Mile Range", "Supercharging", "Glass Roof", "Minimalist Interior"],
        rating: 4.8
    },
    {
        id: 12,
        make: "Mercedes",
        model: "GLC",
        year: 2024,
        type: "SUV",
        price: 62000,
        mileage: 1000,
        color: "Silver",
        transmission: "Automatic",
        fuelType: "Gasoline",
        mpg: 25,
        engine: "2.0L Turbocharged",
        power: "255 hp",
        seats: 5,
        image: "suv",
        description: "Luxury compact SUV combining elegant design with performance.",
        features: ["Turbocharged Engine", "All-Wheel Drive", "AIRMATIC Suspension", "Premium Sound System", "Panoramic Sunroof", "Leather Interior"],
        rating: 4.7
    }
];

// Function to get all cars
function getAllCars() {
    return carsData;
}

// Function to get car by ID
function getCarById(id) {
    return carsData.find(car => car.id === id);
}

// Function to search cars
function searchCars(query) {
    const lowerQuery = query.toLowerCase();
    return carsData.filter(car =>
        car.make.toLowerCase().includes(lowerQuery) ||
        car.model.toLowerCase().includes(lowerQuery) ||
        car.type.toLowerCase().includes(lowerQuery)
    );
}

// Function to filter cars
function filterCars(make, priceRange, type, year) {
    return carsData.filter(car => {
        let matches = true;

        if (make && car.make !== make) matches = false;
        if (type && car.type !== type) matches = false;
        if (year && car.year !== parseInt(year)) matches = false;

        if (priceRange) {
            const [minPrice, maxPrice] = parsePriceRange(priceRange);
            if (car.price < minPrice || car.price > maxPrice) matches = false;
        }

        return matches;
    });
}

// Helper function to parse price range
function parsePriceRange(range) {
    if (range === "0-20000") return [0, 20000];
    if (range === "20000-40000") return [20000, 40000];
    if (range === "40000-60000") return [40000, 60000];
    if (range === "60000-100000") return [60000, 100000];
    if (range === "100000+") return [100000, Infinity];
    return [0, Infinity];
}

// Function to get unique values
function getUniqueMakes() {
    return [...new Set(carsData.map(car => car.make))].sort();
}

function getUniqueTypes() {
    return [...new Set(carsData.map(car => car.type))].sort();
}

function getUniqueYears() {
    return [...new Set(carsData.map(car => car.year))].sort((a, b) => b - a);
}

// Format price for display
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    }).format(price);
}
