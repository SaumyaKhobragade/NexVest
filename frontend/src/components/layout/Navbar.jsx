import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo.svg';

function Navbar() {
    return (
        <>
            <nav
                className="navbar navbar-expand-lg border-bottom"
                style={{ backgroundColor: "#FFF" }}
            >
                <div className="container p-2">
                    <Link className="navbar-brand" to="/">
                        <img
                            src={logo}
                            style={{ width: "25%", overflow: "hidden", scale: "1.75" }}
                            alt="Logo"
                        />
                    </Link>

                    <form className="d-flex flex-row-reverse" role="search">
                        <ul className="navbar-nav mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/signup">
                                    Signup
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/product">
                                    Product
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/pricing">
                                    Pricing
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/support">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
