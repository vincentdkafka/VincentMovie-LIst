
# Movie Search App

A simple React-based web application that allows users to search for movies and view popular titles using a clean and responsive UI.

---

## ✨ Features

- Search movies by title using a form  
- Automatically loads and displays popular movies on first load  
- Clean error handling and loading states  
- Displays movie data using `MovieCard` component  
- Fast and responsive user experience  

---

## 📁 Project Structure

```
src/
├── components/
│   └── MovieCard.js       # Component for rendering individual movies
├── css/
│   └── Home.css           # Styling for Home component
├── services/
│   └── api.js             # API functions (searchMovies, getPopularMovies)
├── pages/
│   └── Home.js            # Main logic for home page (this file)
```

---

## 🛠️ Technologies Used

- React  
- JavaScript (ES6+)  
- CSS Modules  
- TMDB API (or a custom movie API)  

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js and npm installed on your machine

### ⚙️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/movie-search-app.git
   cd movie-search-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure your API:**

   Create or update the `services/api.js` file with your API key and endpoints.

   Example using TMDB:

   ```js
   const API_KEY = 'your_api_key';
   const BASE_URL = 'https://api.themoviedb.org/3';

   export const getPopularMovies = async () => {
     const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
     const data = await response.json();
     return data.results;
   };

   export const searchMovies = async (query) => {
     const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
     const data = await response.json();
     return data.results;
   };
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

---

## 📸 Preview

_Add screenshots or a GIF here to show how the app looks and works._

---

## 👨‍💻 Author

Developed by **[Your Name]**  
GitHub: [https://github.com/your-username](https://github.com/your-username)

---

## 📄 License

This project is licensed under the **MIT License**.  
See the `LICENSE` file for more information.
