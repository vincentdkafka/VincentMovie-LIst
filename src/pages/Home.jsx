import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api"; // Fix the duplicate import
import "../css/Home.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies(); // Rename the variable to avoid overwriting
                setMovies(popularMovies);
            } catch (err) {
                console.error(err);
                setError("Failed to load");
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, []);

    const handleSearch =  async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
         }catch (err) {
            console.log(err)
            setError("Failed to search movies ... ")
        } finally {
            setLoading(false)
         }
        
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movie..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>


            {error && <div className="error">{error}</div>}

            {loading ? 
                (<div className="loading">Loading...</div> 
            ) : (
            <div className="movies-grid">
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))} 
            </div>
            )}

            
        </div>
    );
}

export default Home;
