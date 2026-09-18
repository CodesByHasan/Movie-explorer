import Banner from "../components/Banner";


const Home = () => {

    return (

        <div>

            <Banner />

            <div className="container mx-auto px-5 py-16 text-center">

                <h2 className="text-3xl md:text-4xl font-bold">

                    Find Something Great to Watch

                </h2>


                <p className="py-5 text-gray-500 max-w-2xl mx-auto">

                    Search thousands of movies and TV shows, check ratings,
                    explore genres, and find your next favorite title.

                </p>

            </div>

        </div>

    );

};

export default Home;