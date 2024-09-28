# Note-Tation

Note-Tation is a web application designed to help users write, save, and manage their notes efficiently. It features a front end created to provide an intuitive user experience, while the back end, built with Express.js, handles data storage and retrieval.

## Table of Contents

- [User Story](#user-story)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Links](#links)

## User Story

As a small business owner, I want to be able to write and save notes so that I can organize my thoughts and keep track of tasks I need to complete.

## Features

- **Landing Page:** A welcoming page with a link to the notes page.
- **Notes Page:** 
  - Displays existing notes in the left-hand column.
  - Provides fields to enter a new note title and text in the right-hand column.
  - Allows saving and clearing of notes through buttons.
  - Displays existing notes when clicked.
  - Provides a "New Note" button to create a new note.

## Technologies Used

- **Front End:** HTML, CSS, JavaScript (already completed).
- **Back End:** Node.js, Express.js
- **Database:** JSON file (`db.json`)
- **Utilities:** UUID (for generating unique note IDs)

## Installation

To run Note-Tation locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/note-tation.git
   cd note-tation
   ```

2. **Install Dependencies:**
   ```bash
   npm install express uuid
   ```

3. **Start the Server:**
   ```bash
   npm start
   ```

## Usage

Open your browser and navigate to http://localhost:3001/notes to access the application. You can create, save, and view your notes from here.

## Screenshots

![Example Screenshot](path/to/screenshot.png)

## Links

- GitHub Repository: [https://github.com/yourusername/note-tation](https://github.com/yourusername/note-tation)
- Deployed Application: [https://your-deployed-url.com](https://your-deployed-url.com)
