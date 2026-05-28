// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load cars only if on browse page
    if (document.getElementById('carsGrid')) {
        loadAllCars();
        populateFilterOptions();
    }
    
    // Load comparison selects only if on compare page
    if (document.getElementById('compareSelect1')) {
        populateComparisonSelects();
    }
});

// Generate SVG car image based on type
function generateCarSVG(type, color = '#667eea') {
    const svgMap = {
        'sedan': `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
            <!-- Body -->
            <ellipse cx="100" cy="60" rx="70" ry="35" fill="${color}" stroke="#333" stroke-width="2"/>
            <!-- Top -->
            <rect x="60" y="35" width="80" height="25" fill="${color}" stroke="#333" stroke-width="2" rx="5"/>
            <!-- Windows -->
            <rect x="70" y="40" width="25" height="15" fill="#87CEEB" stroke="#333" stroke-width="1" rx="2"/>
            <rect x="105" y="40" width="25" height="15" fill="#87CEEB" stroke="#333" stroke-width="1" rx="2"/>
            <!-- Wheels -->
            <circle cx="50" cy="85" r="12" fill="#333"/>
            <circle cx="50" cy="85" r="8" fill="#666"/>
            <circle cx="150" cy="85" r="12" fill="#333"/>
            <circle cx="150" cy="85" r="8" fill="#666"/>
            <!-- Headlights -->
            <circle cx="20" cy="55" r="5" fill="#FFD700"/>
            <circle cx="20" cy="65" r="5" fill="#FFD700"/>
        </svg>`,
        'suv': `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
            <!-- Body -->
            <polygon points="30,70 50,40 150,40 170,70" fill="${color}" stroke="#333" stroke-width="2"/>
            <rect x="30" y="70" width="140" height="30" fill="${color}" stroke="#333" stroke-width="2"/>
            <!-- Windows -->
            <polygon points="60,50 75,45 75,60 60,65" fill="#87CEEB" stroke="#333" stroke-width="1"/>
            <polygon points="90,50 120,45 120,60 90,65" fill="#87CEEB" stroke="#333" stroke-width="1"/>
            <polygon points="125,50 140,45 140,60 125,65" fill="#87CEEB" stroke="#333" stroke-width="1"/>
            <!-- Wheels -->
            <circle cx="45" cy="95" r="14" fill="#333"/>
            <circle cx="45" cy="95" r="9" fill="#666"/>
            <circle cx="155" cy="95" r="14" fill="#333"/>
            <circle cx="155" cy="95" r="9" fill="#666"/>
            <!-- Headlights -->
            <circle cx="20" cy="60" r="5" fill="#FFD700"/>
            <circle cx="20" cy="72" r="5" fill="#FFD700"/>
        </svg>`,
        'truck': `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
            <!-- Cab -->
            <rect x="20" y="50" width="40" height="45" fill="${color}" stroke="#333" stroke-width="2"/>
            <!-- Windows -->
            <rect x="25" y="55" width="15" height="15" fill="#87CEEB" stroke="#333" stroke-width="1"/>
            <rect x="43" y="55" width="12" height="15" fill="#87CEEB" stroke="#333" stroke-width="1"/>
            <!-- Cargo bed -->
            <rect x="65" y="55" width="110" height="40" fill="${color}" stroke="#333" stroke-width="2"/>
            <!-- Wheels -->
            <circle cx="35" cy="95" r="12" fill="#333"/>
            <circle cx="35" cy="95" r="8" fill="#666"/>
            <circle cx="95" cy="95" r="12" fill="#333"/>
            <circle cx="95" cy="95" r="8" fill="#666"/>
            <circle cx="155" cy="95" r="12" fill="#333"/>
            <circle cx="155" cy="95" r="8" fill="#666"/>
            <!-- Headlights -->
            <circle cx="15" cy="60" r="4" fill="#FFD700"/>
            <circle cx="15" cy="72" r="4" fill="#FFD700"/>
        </svg>`
    };
    
    return svgMap[type.toLowerCase()] || svgMap['sedan'];
}

// Create car card element
function createCarCard(car) {
    const svgImage = generateCarSVG(car.type, '#667eea');
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
        <div class="car-image">${svgImage}</div>
        <div class="car-info">
            <div class="car-title">${car.year} ${car.make} ${car.model}</div>
            <div style="color: #ff6b6b; font-weight: 600; margin-bottom: 0.5rem;">★ ${car.rating}</div>
            <div class="car-specs">
                <div class="spec-item">
                    <span>Type:</span>
                    <span>${car.type}</span>
                </div>
                <div class="spec-item">
                    <span>MPG:</span>
                    <span>${car.mpg}</span>
                </div>
                <div class="spec-item">
                    <span>Mileage:</span>
                    <span>${car.mileage.toLocaleString()} mi</span>
                </div>
                <div class="spec-item">
                    <span>Transmission:</span>
                    <span>${car.transmission}</span>
                </div>
            </div>
            <div class="car-price">${formatPrice(car.price)}</div>
            <div class="car-actions">
                <button class="btn-primary" onclick="viewCarDetails(${car.id})">View Details</button>
                <button class="btn-secondary" onclick="addToComparison(${car.id})">Compare</button>
            </div>
        </div>
    `;
    return card;
}

// Load and display all cars
function loadAllCars() {
    const cars = getAllCars();
    displayCars(cars);
}

// Display cars in grid
function displayCars(cars) {
    const carsGrid = document.getElementById('carsGrid');
    carsGrid.innerHTML = '';

    if (cars.length === 0) {
        carsGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 2rem;">No cars found matching your criteria.</p>';
        return;
    }

    cars.forEach(car => {
        const carCard = createCarCard(car);
        carsGrid.appendChild(carCard);
    });
}

// View car details in modal
function viewCarDetails(id) {
    const car = getCarById(id);
    if (!car) return;

    const modal = document.getElementById('carModal');
    const details = document.getElementById('carDetails');

    const svgImage = generateCarSVG(car.type, '#667eea');
    let featuresHTML = car.features.map(feature => `<li>${feature}</li>`).join('');

    details.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="width: 200px; height: 150px; margin: 0 auto 1rem;">${svgImage}</div>
            <h2>${car.year} ${car.make} ${car.model}</h2>
            <div style="color: #ff6b6b; font-size: 1.2rem; margin: 1rem 0;">★ ${car.rating}/5.0</div>
        </div>

        <div style="margin-bottom: 2rem;">
            <h3>Description</h3>
            <p>${car.description}</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
            <div>
                <h3>Key Specifications</h3>
                <table style="width: 100%;">
                    <tr><td><strong>Price:</strong></td><td>${formatPrice(car.price)}</td></tr>
                    <tr><td><strong>Make:</strong></td><td>${car.make}</td></tr>
                    <tr><td><strong>Model:</strong></td><td>${car.model}</td></tr>
                    <tr><td><strong>Year:</strong></td><td>${car.year}</td></tr>
                    <tr><td><strong>Type:</strong></td><td>${car.type}</td></tr>
                    <tr><td><strong>Color:</strong></td><td>${car.color}</td></tr>
                </table>
            </div>
            <div>
                <h3>Performance & Efficiency</h3>
                <table style="width: 100%;">
                    <tr><td><strong>Engine:</strong></td><td>${car.engine}</td></tr>
                    <tr><td><strong>Power:</strong></td><td>${car.power}</td></tr>
                    <tr><td><strong>Fuel Type:</strong></td><td>${car.fuelType}</td></tr>
                    <tr><td><strong>MPG:</strong></td><td>${car.mpg}</td></tr>
                    <tr><td><strong>Transmission:</strong></td><td>${car.transmission}</td></tr>
                    <tr><td><strong>Mileage:</strong></td><td>${car.mileage.toLocaleString()} miles</td></tr>
                </table>
            </div>
        </div>

        <div style="margin-bottom: 2rem;">
            <h3>Additional Details</h3>
            <table style="width: 100%;">
                <tr><td><strong>Seats:</strong></td><td>${car.seats}</td></tr>
            </table>
        </div>

        <div>
            <h3>Features</h3>
            <ul style="list-style-type: none; padding: 0;">
                ${featuresHTML}
            </ul>
        </div>

        <div style="margin-top: 2rem; display: flex; gap: 1rem;">
            <button class="btn-primary" style="flex: 1;" onclick="addToComparison(${car.id})">Add to Comparison</button>
            <button style="flex: 1; padding: 12px; background-color: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: 600;" onclick="contactAboutCar(${car.id})">Inquire About Car</button>
        </div>
    `;

    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('carModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('carModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Handle search
function handleSearch() {
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput.trim() === '') {
        loadAllCars();
    } else {
        const results = searchCars(searchInput);
        displayCars(results);
    }
}

// Apply filters
function applyFilters() {
    const make = document.getElementById('makeFilter').value;
    const priceRange = document.getElementById('priceFilter').value;
    const type = document.getElementById('typeFilter').value;
    const year = document.getElementById('yearFilter').value;

    const filteredCars = filterCars(make, priceRange, type, year);
    displayCars(filteredCars);
}

// Reset filters
function resetFilters() {
    document.getElementById('makeFilter').value = '';
    document.getElementById('priceFilter').value = '';
    document.getElementById('typeFilter').value = '';
    document.getElementById('yearFilter').value = '';
    document.getElementById('searchInput').value = '';
    loadAllCars();
}

// Populate filter options
function populateFilterOptions() {
    // Populate makes
    const makes = getUniqueMakes();
    const makeFilter = document.getElementById('makeFilter');
    makes.forEach(make => {
        const option = document.createElement('option');
        option.value = make;
        option.textContent = make;
        makeFilter.appendChild(option);
    });

    // Populate types
    const types = getUniqueTypes();
    const typeFilter = document.getElementById('typeFilter');
    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        typeFilter.appendChild(option);
    });

    // Populate years
    const years = getUniqueYears();
    const yearFilter = document.getElementById('yearFilter');
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
}

// Comparison functionality
let comparisonCars = [];

function addToComparison(carId) {
    const car = getCarById(carId);
    if (!car) return;

    if (comparisonCars.length < 2 && !comparisonCars.find(c => c.id === carId)) {
        comparisonCars.push(car);
        alert(`${car.year} ${car.make} ${car.model} added to comparison!`);
        populateComparisonSelects();
    } else if (comparisonCars.find(c => c.id === carId)) {
        alert('This car is already in the comparison!');
    } else {
        alert('You can only compare 2 cars at a time. Remove one first.');
    }
}

function populateComparisonSelects() {
    const cars = getAllCars();
    const select1 = document.getElementById('compareSelect1');
    const select2 = document.getElementById('compareSelect2');

    // Store current selections
    const selected1 = select1.value;
    const selected2 = select2.value;

    // Clear and repopulate
    select1.innerHTML = '<option value="">Select first car</option>';
    select2.innerHTML = '<option value="">Select second car</option>';

    cars.forEach(car => {
        const option1 = document.createElement('option');
        option1.value = car.id;
        option1.textContent = `${car.year} ${car.make} ${car.model}`;
        select1.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = car.id;
        option2.textContent = `${car.year} ${car.make} ${car.model}`;
        select2.appendChild(option2);
    });

    // Restore selections if they still exist
    select1.value = selected1;
    select2.value = selected2;
}

function updateComparison() {
    const select1 = document.getElementById('compareSelect1').value;
    const select2 = document.getElementById('compareSelect2').value;
    const comparisonTable = document.getElementById('comparisonTable');

    if (!select1 && !select2) {
        comparisonTable.innerHTML = '<p style="text-align: center; padding: 2rem;">Select two cars to compare</p>';
        return;
    }

    if (!select1 || !select2) {
        comparisonTable.innerHTML = '<p style="text-align: center; padding: 2rem;">Please select both cars to compare</p>';
        return;
    }

    const car1 = getCarById(parseInt(select1));
    const car2 = getCarById(parseInt(select2));

    comparisonTable.innerHTML = `
        <table>
            <tr>
                <th>Specification</th>
                <th>${car1.year} ${car1.make} ${car1.model}</th>
                <th>${car2.year} ${car2.make} ${car2.model}</th>
            </tr>
            <tr>
                <td><strong>Price</strong></td>
                <td>${formatPrice(car1.price)}</td>
                <td>${formatPrice(car2.price)}</td>
            </tr>
            <tr>
                <td><strong>Type</strong></td>
                <td>${car1.type}</td>
                <td>${car2.type}</td>
            </tr>
            <tr>
                <td><strong>Year</strong></td>
                <td>${car1.year}</td>
                <td>${car2.year}</td>
            </tr>
            <tr>
                <td><strong>Color</strong></td>
                <td>${car1.color}</td>
                <td>${car2.color}</td>
            </tr>
            <tr>
                <td><strong>Engine</strong></td>
                <td>${car1.engine}</td>
                <td>${car2.engine}</td>
            </tr>
            <tr>
                <td><strong>Power</strong></td>
                <td>${car1.power}</td>
                <td>${car2.power}</td>
            </tr>
            <tr>
                <td><strong>Fuel Type</strong></td>
                <td>${car1.fuelType}</td>
                <td>${car2.fuelType}</td>
            </tr>
            <tr>
                <td><strong>MPG</strong></td>
                <td>${car1.mpg}</td>
                <td>${car2.mpg}</td>
            </tr>
            <tr>
                <td><strong>Transmission</strong></td>
                <td>${car1.transmission}</td>
                <td>${car2.transmission}</td>
            </tr>
            <tr>
                <td><strong>Seats</strong></td>
                <td>${car1.seats}</td>
                <td>${car2.seats}</td>
            </tr>
            <tr>
                <td><strong>Mileage</strong></td>
                <td>${car1.mileage.toLocaleString()} miles</td>
                <td>${car2.mileage.toLocaleString()} miles</td>
            </tr>
            <tr>
                <td><strong>Rating</strong></td>
                <td>★ ${car1.rating}/5.0</td>
                <td>★ ${car2.rating}/5.0</td>
            </tr>
        </table>
    `;
}

// Contact about car
function contactAboutCar(carId) {
    const car = getCarById(carId);
    const messageField = document.querySelector('.contact-form textarea');
    if (messageField) {
        messageField.value = `I'm interested in the ${car.year} ${car.make} ${car.model} (${formatPrice(car.price)}). Please contact me with more information.`;
        messageField.scrollIntoView({ behavior: 'smooth' });
    }
}

// Allow Enter key to trigger search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
});
