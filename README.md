🎬 Movie Explorer
Discover movies and TV shows, search for your favorite titles, and explore detailed information in a simple and responsive React application. 🚀
Movie Explorer is a React-based web application powered by the TVMaze API. Users can browse available shows, search by title, and view detailed information through an interactive modal.

🌐 Live Demo
🔗 Live Website: https://movie-explorer-zeta-one.vercel.app/
🔗 GitHub Repository: https://github.com/CodesByHasan/Movie-explorer.git

📸 Preview / Screenshot
<img width="1907" height="874" alt="Screenshot 2026-09-25 at 8 01 11 PM" src="https://github.com/user-attachments/assets/627ba416-08f4-435b-8349-04af2b67c187" />


✨ Features
* 🎬 Browse movies and TV shows
* 🔍 Search movies/shows by title
* ⭐ Display ratings
* 📅 Display release/premiered date
* 🖼️ Display movie/show poster images
* 📖 View detailed information in an interactive modal
* 🏷️ Display genres
* 📝 Display movie/show overview
* ❌ Close movie details modal
* 📱 Fully responsive design
* 🧭 Navigation between Home, Movies, and About pages
* ⚡ Loading state while fetching data
* 🚨 Error handling for API requests
* 🎨 Modern UI using Tailwind CSS and DaisyUI
* 🧩 Reusable React components

🛠️ Technologies Used
⚛️ React.js
Purpose: Build the user interface and reusable components.
📜 JavaScript (ES6+)
Purpose: Application logic, state management, API handling, and event handling.
🎨 Tailwind CSS
Purpose: Style the application using responsive utility classes.
🌼 DaisyUI
Purpose: Provide reusable UI components such as cards, buttons, badges, navbar, and loading indicators.
🌐 TVMaze API
Purpose: Fetch TV show information, search results, ratings, genres, images, and summaries.
🧭 React Router
Purpose: Handle navigation between application pages.
⚡ Vite
Purpose: Development server and production build tool.

🔗 API Used
Movie Explorer uses the free TVMaze API.
All Shows
https://api.tvmaze.com/shows
Used to fetch available TV shows.
Search Shows
https://api.tvmaze.com/search/shows?q={query}
Used to search shows by title.
TVMaze Documentation
https://www.tvmaze.com/api

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


🔄 API Service
API-related functions are separated into:
src/services/movieApi.js
The service contains functions for fetching and searching movies/shows.
Get All Shows
getMovies()
Fetches data from:
https://api.tvmaze.com/shows
Search Shows
searchMovies(query)
Fetches data from:
https://api.tvmaze.com/search/shows?q={query}

⚡ Loading & Error Handling
The application provides a loading indicator while data is being fetched.
Loading...
If the API request fails, the application displays an error message:
Movies could not be loaded!
This provides users with feedback during API requests.

🚀 Getting Started
Follow these steps to run the project locally.
1. Clone the Repository
git clone https://github.com/hasanmh9988770-MHR/Movie-explorer.git
2. Open the Project
cd Movie-explorer
If your React project is inside my-movie-explorer:
cd my-movie-explorer
3. Install Dependencies
npm install
4. Start the Development Server
npm run dev
5. Open in Browser
Vite will provide a local development URL, usually:
http://localhost:5173/

🏗️ Build for Production
To create a production build:
npm run build
To preview the production build:
npm run preview

📦 Main Dependencies
React
React DOM
React Router
Tailwind CSS
DaisyUI
Vite



👨‍💻 Developer
Md Hasan
GitHub:
https://github.com/CodesByHasan


📄 License
This project was created for educational purposes.

⭐ Movie Explorer — Discover Something Great to Watch! 🎬
