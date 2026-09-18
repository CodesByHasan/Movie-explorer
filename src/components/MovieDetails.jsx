import { X } from "lucide-react";

const MovieDetails = ({ movie, onClose }) => {

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-950/70 p-5">

            <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-base-100 shadow-2xl">

                {/* Header */}
                <div className="flex justify-between items-center p-5">

                    <h2 className="text-xl font-bold">
                        Movie Details
                    </h2>

                    <button
                        type="button"
                        onClick={onClose}
                        className="cursor-pointer"
                    >
                        <X />
                    </button>

                </div>


                {/* Movie Poster */}
                <div>
                    <img
                        src={movie.image?.original || movie.image?.medium}
                        alt={movie.name}
                        className="w-full h-[300px] md:h-[400px] object-cover"
                    />
                </div>


                {/* Movie Information */}
                <div className="p-5 space-y-4">

                    <h1 className="text-3xl font-extrabold text-primary">
                        {movie.name}
                    </h1>


                    {/* Rating and Release Date */}
                    <div className="flex flex-wrap gap-3">

                        <span className="badge badge-warning p-3">
                            ⭐ {movie.rating?.average || "N/A"}
                        </span>

                        <span className="badge badge-info p-3">
                            📅 {movie.premiered || "N/A"}
                        </span>

                    </div>


                    {/* Genre */}
                    <div>

                        <h3 className="font-bold text-lg">
                            Genre
                        </h3>

                        <div className="flex flex-wrap gap-2 mt-2">

                            {movie.genres?.map((genre) => (
                                <span
                                    key={genre}
                                    className="badge badge-primary"
                                >
                                    {genre}
                                </span>
                            ))}

                        </div>

                    </div>


                    {/* Summary */}
                    <div>

                        <h3 className="font-bold text-lg">
                            Overview
                        </h3>

                        <div
                            className="text-gray-500 leading-7"
                            dangerouslySetInnerHTML={{
                                __html: movie.summary || "No summary available."
                            }}
                        />

                    </div>


                    {/* Close Button */}
                    <div className="flex justify-end pt-3">

                        <button
                            type="button"
                            onClick={onClose}
                            className="btn btn-primary rounded-full px-6"
                        >
                            Close
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default MovieDetails;