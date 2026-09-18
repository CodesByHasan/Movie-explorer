import { useEffect, useState } from "react";

import { getMovies, searchMovies } from "../services/movieApi";

import MovieCard from "../components/MovieCard";

import MovieDetails from "../components/MovieDetails";


const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null);


    useEffect(() => {

        const fetchMovies = async () => {

            try {

                setLoading(true);
                setError("");

                let result;

                if (search.trim()) {

                    result = await searchMovies(search);

                } else {

                    result = await getMovies();

                }

                setMovies(result);

            } catch (error) {

                console.log(error);

                setError("Movies could not be loaded!");

            } finally {

                setLoading(false);

            }

        };

        fetchMovies();

    }, [search]);


    const handleSeeDetails = (movie) => {

        setSelectedMovie(movie);

    };


    const handleCloseDetails = () => {

        setSelectedMovie(null);

    };


    return (

        <div className="container mx-auto px-5 py-10">

            <div className="text-center mb-8">

                <h1 className="text-4xl font-extrabold text-primary">
                    Explore Movies
                </h1>

                <p className="py-3 text-gray-500">
                    Search and discover your favorite movies and shows.
                </p>

            </div>


            <div className="flex justify-center mb-10">

                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input input-bordered w-full max-w-xl rounded-full"
                />

            </div>


            {loading && (

                <div className="flex justify-center">

                    <span className="loading loading-spinner loading-lg"></span>

                </div>

            )}


            {error && (

                <div className="text-center text-red-500">

                    {error}

                </div>

            )}


            {!loading && !error && (

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {movies.slice(0, 16).map((movie) => (

                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            onSeeDetails={handleSeeDetails}
                        />

                    ))}

                </div>

            )}


            {selectedMovie && (

                <MovieDetails
                    movie={selectedMovie}
                    onClose={handleCloseDetails}
                />

            )}

        </div>

    );

};

export default Movies;