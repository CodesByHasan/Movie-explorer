import { useNavigate } from "react-router";


const Banner = () => {

    const navigate = useNavigate();


    const handleExplore = () => {

        navigate("/movies");

    };


    return (

        <div className="hero min-h-[500px] bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">

            <div className="hero-content text-center text-white">

                <div className="max-w-2xl">

                    <h1 className="text-5xl md:text-6xl font-extrabold">

                        Discover Your

                        <span className="text-primary">
                            {" "}Favorite Movies
                        </span>

                    </h1>


                    <p className="py-6 text-base md:text-lg text-gray-300">

                        Explore movies and TV shows from around the world.
                        Search for your favorite titles and discover something
                        new to watch.

                    </p>


                    <button
                        type="button"
                        onClick={handleExplore}
                        className="btn btn-primary rounded-full px-6 hover:scale-105 transition-all"
                    >
                        Explore Now
                    </button>

                </div>

            </div>

        </div>

    );

};

export default Banner;