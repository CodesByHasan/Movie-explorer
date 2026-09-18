const AboutUS = () => {

    return (

        <div className="container mx-auto px-5 py-16">

            <div className="max-w-3xl mx-auto text-center">

                <h1 className="text-4xl font-extrabold text-primary">
                    About Movie Explorer
                </h1>


                <p className="py-6 text-gray-500 leading-7">

                    Movie Explorer is a simple movie discovery application
                    where users can browse movies and TV shows, search for
                    specific titles, and view detailed information about
                    each title.

                </p>


                <div className="grid md:grid-cols-3 gap-5 mt-8">

                    <div className="card bg-base-200 p-6">

                        <h2 className="font-bold text-xl">
                            Search
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Find your favorite movies quickly.
                        </p>

                    </div>


                    <div className="card bg-base-200 p-6">

                        <h2 className="font-bold text-xl">
                            Explore
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Browse movies and TV shows.
                        </p>

                    </div>


                    <div className="card bg-base-200 p-6">

                        <h2 className="font-bold text-xl">
                            Details
                        </h2>

                        <p className="text-gray-500 mt-2">
                            View ratings, genres, and summaries.
                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default AboutUS;