# MVC Counter Example

## Overview
This repository demonstrates the implementation of the Model-View-Controller (MVC) architectural pattern in JavaScript. The project consists of a simple counter application, showcasing both modular and single-file approaches to MVC architecture.

## Source and Learning Process

This example is taken directly from the "Clean Code in JavaScript" book by James Padolsey, specifically from the Architectural Design Patterns module. This was studied as part of the Introduction to Software Engineering course by [Professor Fatma Meawad](https://www.linkedin.com/in/fmeawad/) in the Bachelor of Modern Computer Science at OPIT. 

To deepen my understanding, I used various Large Language Models (LLMs) to:
- Break down the code step by step
- Understand each component's role in depth
- Learn how to build it from scratch
- Implement both single-file and modular versions
- Gain deeper insights into MVC architecture principles

## Project Structure

The project includes two implementations to demonstrate different approaches:

```plaintext
javascript-mvc-counter/
├── modular/                 # Modular version with separated concerns
│   ├── controllers/
│   │   └── numberController.js
│   ├── models/
│   │   └── numberModel.js
│   ├── views/
│   │   └── numberView.js
│   ├── app.js              # Main application file
│   └── index.html          # Entry point
│
└── single-file/            # All-in-one version for learning
    ├── app.js              # Contains all MVC components
    └── index.html          # Entry point
```

## About MVC Pattern

The application demonstrates core MVC concepts:
- **Model (numberModel.js)**: Handles data and business logic for the counter
- **View (numberView.js)**: Manages the UI elements (display, buttons) and user interaction
- **Controller (numberController.js)**: Coordinates between Model and View, handling user actions and updates

## Features

- Interactive counter with increment/decrement functionality
- Real-time display updates
- Demonstrates:
  - MVC architectural pattern
  - Separation of concerns
  - JavaScript module system
  - Clean code principles

## How to Run

1. Clone the repository
2. Use a live server to run either version:
   - For modular version: `javascript-mvc-counter/modular/index.html`
   - For single-file version: `javascript-mvc-counter/single-file/index.html`
3. You should see a counter with + and - buttons

## Technologies Used
- HTML
- JavaScript (ES6+)
- JavaScript Modules

## Learning Outcomes

This project helped me understand:
- Practical implementation of MVC architecture
- Benefits and trade-offs of modular vs single-file approaches
- JavaScript module system (import/export)
- Event handling and DOM manipulation
- Clean code principles in real applications

## Credits
- Book: "Clean Code in JavaScript" by James Padolsey
- Course: Introduction to Software Engineering by [Professor Fatma Meawad](https://www.linkedin.com/in/fmeawad/), Bachelor of Modern Computer Science at OPIT
- Learning assistance: Large Language Models

This repository serves as documentation of my learning journey, combining academic coursework, textbook study, and AI-assisted deep code analysis to gain a comprehensive understanding of MVC patterns in JavaScript.