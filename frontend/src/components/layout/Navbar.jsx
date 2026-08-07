import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo.svg';

function Navbar() {
    return (
        <>
            <nav
                class="navbar navbar-expand-lg border-bottom"
                style={{ backgroundColor: "#FFF" }}
            >
                <div class="container p-2">
                    <Link class="navbar-brand" to="/">
                        <img
                            src={logo}
                            style={{ width: "25%", overflow: "hidden", scale: "1.75" }}
                            alt="Logo"
                        />
                    </Link>

                    <form class="d-flex flex-row-reverse" role="search">
                        <ul class="navbar-nav mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/signup">
                                    Signup
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/about">
                                    About
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/product">
                                    Product
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/pricing">
                                    Pricing
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/support">
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
