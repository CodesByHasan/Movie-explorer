import { Link } from "react-router";


const Navbar = () => {

    return (

        <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">

            {/* Logo */}

            <div className="navbar-start">

                <Link
                    to="/"
                    className="text-2xl font-bold text-primary"
                >
                    🎬 MovieExplorer
                </Link>

            </div>


            {/* Navigation */}

            <div className="navbar-center hidden md:flex">

                <ul className="menu menu-horizontal px-1">

                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/movies">
                            Movies
                        </Link>
                    </li>

                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>

                </ul>

            </div>


            {/* Movies Button */}

            <div className="navbar-end">

                <Link
                    to="/movies"
                    className="btn btn-primary rounded-full"
                >
                    Movies
                </Link>

            </div>

        </div>

    );

};

export default Navbar;