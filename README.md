# Note-Tation

## Table of Contents
1. [Description](#description)
2. [User Story](#user-story)
3. [Acceptance Criteria](#acceptance-criteria)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Screenshots](#screenshots)
7. [Links](#links)

## Description
Note-Tation is a web application that allows users to create, save, and manage notes. Built with an Express.js backend and a JSON file for storing data, this application provides a simple and intuitive interface for note-taking.

## User Story
```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria
- GIVEN a note-taking application
- WHEN I open the Note Taker
- THEN I am presented with a landing page with a link to a notes page
- WHEN I click on the link to the notes page
- THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
- WHEN I enter a new note title and the note’s text
- THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
- WHEN I click on the Save button
- THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
- WHEN I click on an existing note in the list in the left-hand column
- THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
- WHEN I click on the "New Note" button in the navigation at the top of the page
- THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/awb2987/note-tation.git
   ```
2. Navigate to the project directory:
   ```bash
   cd note-tation
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Install uuid extension
```bash
   npm install uuid
```

## Usage
To start the application, run:
```bash
npm start
```
Open your web browser and navigate to `http://localhost:3000` to use the Note-Tation app.

## Screenshots
![Landing Page](./assets/screenshot1.png)
![Notes Page](./assets/screenshot2.png)

## Links
- GitHub Repository: [yourusername/note-tation](https://github.com/awb2987/note-tation)
- Deployed Application: [Note-Tation Live](https://your-deployed-url.com)
