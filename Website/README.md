# Grade Calculator Website

A web-based grade calculator application built with HTML, CSS, and JavaScript. Easily input assignment grades, set category weights, and calculate your overall course grade in real-time.

## Features

### 📊 Core Functionality
- **Add Assignments**: Input assignment names, scores, and categories
- **Category Weights**: Define custom weights for different assignment categories
- **Automatic Calculation**: Real-time grade calculation as you enter data
- **Grade Breakdown**: View detailed breakdown by category
- **Clear & Reset**: Easy data management with clear button

### ✨ Features Included
- Responsive design for mobile and desktop
- Intuitive user interface
- Real-time grade updates
- Support for multiple assignment categories
- Visual grade display
- Easy-to-use input forms
- Persistent calculations

## Project Structure

```
Website/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## How It Works

The grade calculator uses a weighted system where:
1. Assignments are organized by category (e.g., Homework, Quizzes, Exams)
2. Each category has a weight percentage (must total 100%)
3. Your overall grade is calculated as: **(Category Average × Weight) + (Category Average × Weight) + ...**

## How to Use

### Opening the Website
1. Open `index.html` in a web browser
2. The grade calculator interface will load

### Setting Up Categories
1. Define your assignment categories (Homework, Quizzes, Exams, etc.)
2. Set the weight percentage for each category
3. Weights must total 100%

### Adding Assignments
1. For each category, add individual assignment scores
2. Enter the assignment name and score (0-100)
3. Grades update automatically

### Viewing Your Grade
- Your overall course grade displays prominently
- Category averages are calculated automatically
- Grade breakdown shows contribution of each category

### Clearing Data
- Click the "Clear" button to reset all data and start fresh

## Customizing Your Grade Calculator

### Categories
Edit the categories and their weights in your initialization:
- Homework: 20%
- Quizzes: 30%
- Exams: 50%

### Styling
All CSS is contained in `styles.css` with sections for:
- Overall layout and typography
- Input forms and buttons
- Grade display
- Category breakdowns
- Responsive design

### JavaScript Functions

Key functions in `script.js`:
- `addAssignment()` - Add new assignment
- `calculateGrade()` - Calculate overall grade
- `calculateCategoryAverage()` - Get average for a category
- `clearAll()` - Reset calculator
- `displayGrade()` - Update grade display

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Design

The calculator is fully responsive with breakpoints for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (below 768px)

## License

This grade calculator is free to use and modify for personal or educational purposes.

## Support

For issues or questions, refer to the inline comments in the code or modify as needed.

---

Happy calculating! 📚✏️
