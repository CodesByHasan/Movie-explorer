🎬 Movie Explorer

A modern and responsive React application for discovering TV shows, searching for your favorite titles, and viewing detailed information through an interactive interface.

---

📑 Table of Contents

- "About the Project" (#about-the-project)
- "Live Demo" (#live-demo)
- "Preview" (#preview)
- "Project Overview" (#project-overview)
- "Key Features" (#key-features)
- "Tech Stack" (#tech-stack)
- "API Used" (#api-used)
- "Project Structure" (#project-structure)
- "API Service" (#api-service)
- "Loading & Error Handling" (#loading--error-handling)
- "Installation & Setup" (#installation--setup)
- "Build for Production" (#build-for-production)
- "Dependencies" (#dependencies)
- "Developer" (#developer)
- "License" (#license)

---

📌 About the Project

Movie Explorer is a React-based web application powered by the TVMaze API.

The application allows users to browse TV shows, search for specific titles, explore ratings, genres, premiered dates, posters, and summaries, and view detailed information through an interactive modal.

The project focuses on building a clean, responsive, and user-friendly movie/show discovery experience using modern React development practices.

---

🌐 Live Demo

🔗 Live Website:
https://movie-explorer-zeta-one.vercel.app/

🔗 GitHub Repository:
https://github.com/CodesByHasan/Movie-explorer.git

---

📸 Preview

<img width="1907" height="874" alt="Movie Explorer Preview" src="https://github.com/user-attachments/assets/627ba416-08f4-435b-8349-04af2b67c187" />---

🚀 Project Overview

Movie Explorer was developed to practice and demonstrate modern frontend development concepts including:

- React component architecture
- React Router navigation
- API integration
- Asynchronous data fetching
- Search functionality
- Loading and error states
- Interactive modal interfaces
- Responsive design
- Reusable components
- Tailwind CSS and DaisyUI styling

The application retrieves TV show data from the TVMaze API and presents it through a responsive user interface.

---

✨ Key Features

- 🎬 Browse TV shows
- 🔍 Search shows by title
- ⭐ Display show ratings
- 📅 Display premiered/release dates
- 🖼️ Display show poster images
- 🏷️ Display genres
- 📝 Display show summaries
- 📖 View detailed show information
- 🪟 Interactive details modal
- ❌ Close movie/show details modal
- 🧭 Navigation between Home, Movies, and About pages
- ⚡ Loading state while fetching API data
- 🚨 Error handling for failed API requests
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS and DaisyUI
- 🧩 Reusable React components
- 🌐 API-based dynamic content

---

🛠️ Tech Stack

Frontend

- ⚛️ React.js — Build the user interface and reusable components
- 📜 JavaScript (ES6+) — Application logic, state management, API handling, and event handling
- 🧭 React Router — Handle navigation between application pages
- 🎨 Tailwind CSS — Responsive utility-first styling
- 🌼 DaisyUI — Reusable UI components and styling
- ⚡ Vite — Development server and production build tool

API

- 🌐 TVMaze API — Fetch TV show information, search results, ratings, genres, images, and summaries

---

🔗 API Used

Movie Explorer uses the free TVMaze API to retrieve TV show data.

📺 Get All Shows

https://api.tvmaze.com/shows

Used to fetch available TV shows.

🔍 Search Shows

https://api.tvmaze.com/search/shows?q={query}

Used to search TV shows by title.

📚 TVMaze Documentation

https://www.tvmaze.com/api

---

📂 Project Structure

Movie-explorer/
└── my-movie-explorer/
    ├── public/
    │
    ├── src/
    │   ├── assets/
    │   │
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Banner.jsx
    │   │   ├── MovieCard.jsx
    │   │   ├── MovieDetails.jsx
    │   │   └── Footer.jsx
    │   │
    │   ├── layouts/
    │   │   └── MainLayout.jsx
    │   │
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Movies.jsx
    │   │   └── AboutUS.jsx
    │   │
    │   ├── services/
    │   │   └── movieApi.js
    │   │
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    │
    ├── package.json
    ├── vite.config.js
    └── README.md

📁 Folder Responsibilities

Folder/File| Purpose
"components/"| Reusable UI components
"layouts/"| Shared application layouts
"pages/"| Application pages
"services/"| API-related functions
"assets/"| Local images and other assets
"App.jsx"| Main application component and routing
"main.jsx"| React application entry point
"index.css"| Global styles
"package.json"| Project dependencies and scripts
"vite.config.js"| Vite configuration
"README.md"| Project documentation

---

🔄 API Service

API-related functions are separated into:

src/services/movieApi.js

This keeps API communication separate from the UI components and makes the code easier to maintain and reuse.

📺 Get All Shows

getMovies()

Fetches show data from:

https://api.tvmaze.com/shows

🔍 Search Shows

searchMovies(query)

Fetches search results from:

https://api.tvmaze.com/search/shows?q={query}

---

⚡ Loading & Error Handling

The application provides feedback to users while API requests are being processed.

Loading State

While data is being fetched, a loading indicator is displayed:

Loading...

Error Handling

If an API request fails, the application displays an error message:

Movies could not be loaded!

This helps users understand that the application is still processing or that a request was unsuccessful.

---

🚀 Installation & Setup

Follow these steps to run Movie Explorer locally.

1. Clone the Repository

git clone https://github.com/CodesByHasan/Movie-explorer.git

2. Open the Project

cd Movie-explorer

If the React application is inside the "my-movie-explorer" directory:

cd my-movie-explorer

3. Install Dependencies

npm install

4. Start the Development Server

npm run dev

5. Open in Browser

Vite will provide a local development URL, usually:

http://localhost:5173/

Open the URL in your browser to use the application.

---

🏗️ Build for Production

To create an optimized production build:

npm run build

To preview the production build locally:

npm run preview

---

📦 Dependencies

The project uses the following major dependencies:

- React
- React DOM
- React Router
- Tailwind CSS
- DaisyUI
- Vite

Install all required dependencies with:

npm install

---

👨‍💻 Developer

Md Hasan

🔗 GitHub:
https://github.com/CodesByHasan

---

📄 License

This project was created for educational purposes.

---

⭐ Movie Explorer

Discover something great to watch! 🎬

If you found this project interesting, feel free to explore the repository and check out the live demo.
