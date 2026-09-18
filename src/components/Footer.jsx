const Footer = () => {

    return (

        <footer className="footer footer-center bg-base-200 text-base-content p-10">

            <aside>

                <h2 className="text-2xl font-bold text-primary">
                    Movie Explorer
                </h2>

                <p>
                    Discover movies and TV shows from around the world.
                </p>

                <p>
                    © {new Date().getFullYear()} Movie Explorer.
                    All rights reserved.
                </p>

            </aside>

        </footer>

    );

};

export default Footer;