const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">

            {/* Logo */}
            <div className="navbar-start">
                <a className="text-2xl font-bold text-primary">
                    🎬 MovieExplorer
                </a>
            </div>

            {/* Navigation */}
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Movies</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>

            {/* Movies Button */}
            <div className="navbar-end">
                <button
                    type="button"
                    className="btn btn-primary rounded-full"
                >
                    Movies
                </button>
            </div>

        </div>
    );
};

export default Navbar;