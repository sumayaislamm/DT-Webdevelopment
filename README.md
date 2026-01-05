# DT Web Development Assignment

## Overview
This project is a **Frontend Internship assignment** for DeepThought CultureTech Ventures. It demonstrates skills in **HTML, CSS, and Vanilla JavaScript**, including dynamic rendering of content based on JSON data, reusable components, and responsive UI inspired by Figma designs.
- **Live Demo:** 


The project contains two main tasks:

1. **Task 1: Webpage Creation**  
   - Build a webpage interface based on the given Figma design.
   - Features a **Journey Board**, **Notice Board**, and **Task Cards**.
   - Layout and styling follow a **professional style guide** extracted from Figma.
   - Implemented **static and dynamic elements** for better scalability.

2. **Task 2: Dynamic Functionality**  
   - Render assets for a given task dynamically using **JSON objects**.
   - Asset types include:
     - **Video**
     - **Thread Builder**
     - **Articles**
     - **4SA Method**
   - Reusable components (functions/templates) are used to generate asset cards.
   - Demonstrates **avoidance of hardcoding**, making the page scalable for multiple tasks and users.

---

## Project Structure

/frontend-assignment
│
├── index.html # Main HTML file
├── CSS/
│ └── style.css # Stylesheet for layout and components
├── JS/
│ ├── script.js # Handles dynamic rendering of asset cards
│ ├── journey.js # Handles the Journey Board functionality
│ └── notice.js # Handles the Notice Board functionality
├── images/ # All images, icons, and logos used
│ └── icons/
│ └── ... # Icon images
└── README.md # Project documentation (this file)

markdown
Copy code

---

## Features

### 1. Journey Board
- Collapsible and expandable sidebar.
- Displays **all tasks and their assets**.
- Dynamically updates based on JSON data.

### 2. Notice Board
- Fixed vertical sidebar on the right.
- Can be hidden by clicking the **close button**.
- Simple and interactive UI.

### 3. Task Cards
- Dynamically rendered based on JSON objects.
- Supports multiple asset types:
  - **Video** – embedded YouTube player.
  - **Thread Builder** – interactive input fields for sub-threads.
  - **Articles** – textarea and toolbar for user input.
  - **4SA Method** – structured content sections with collapsible areas.
- Reusable components for **scalable and maintainable code**.

---

## Technologies Used
- **HTML5** – Semantic structure.
- **CSS3** – Styling with variables, flexbox, and grid.
- **Vanilla JavaScript** – DOM manipulation, event handling, dynamic content rendering.
- **Figma** – Design reference for UI and styling.
- **Remix Icon** – Icons for interface elements.

---

## How It Works

1. **Dynamic Asset Rendering**  
   - `script.js` reads a JSON object (`dummyData`) containing tasks and assets.
   - Each asset is rendered using a **reusable card component**.
   - Supports different asset types with conditional rendering.

2. **Journey Board Functionality**  
   - `journey.js` handles expanding/collapsing the journey board.
   - Displays tasks and their assets dynamically.

3. **Notice Board Functionality**  
   - `notice.js` creates a collapsible notice board on the right.
   - Can be closed using the "X" button.

---

## How to Run
1. Clone or download the repository.
2. Open `index.html` in a web browser.
3. No server or backend required; the JSON data is loaded locally.

---

## Additional Notes
- **Avoided hardcoding:** All asset content is dynamically inserted from JavaScript objects.
- **Reusable components:** Each asset type uses a template function for maintainability.
- **Figma compliance:** UI closely follows the provided design for aesthetics and professional layout.
- **Extensibility:** Easy to integrate backend APIs in the future for real-time data fetching.

---

## Author
- **Name:** Sumaya Islam
- **Role:** Frontend Intern Applicant  
- **Email:** sheikhsumaya622@gmail.com

---

## Submission
- **GitHub Repository:** [(https://github.com/sumayaislamm/DT-Webdevelopment) ]
- **Voice Note:** Explaining the approach, structure, and reasoning behind your implementation.