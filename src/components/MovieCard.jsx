const MovieCard = ({ movie, onSeeDetails }) => {

    return (
        <div className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden">

            <figure>
                <img
                    src={movie.image?.medium}
                    alt={movie.name}
                    className="w-full h-[350px] object-cover"
                />
            </figure>

            <div className="card-body">

                <h2 className="card-title">
                    {movie.name}
                </h2>

                <div className="flex items-center justify-between text-sm text-gray-500">

                    <p>
                        ⭐ {movie.rating?.average || "N/A"}
                    </p>

                    <p>
                        📅 {movie.premiered || "N/A"}
                    </p>

                </div>

                <div className="card-actions justify-end mt-3">

                    <button
                        type="button"
                        onClick={() => onSeeDetails(movie)}
                        className="btn btn-primary rounded-full"
                    >
                        See Details
                    </button>

                </div>

            </div>

        </div>
    );
};

export default MovieCard;