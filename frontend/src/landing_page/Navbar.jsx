function Navbar() {
    return (
        <>
            <nav
                class="navbar navbar-expand-lg border-bottom"
                style={{ backgroundColor: "#FFF" }}
            >
                <div class="container p-2">
                    <a class="navbar-brand" href="#">
                        <img
                            src="assets/logo.svg"
                            style={{ width: "25%", overflow: "hidden", scale: "1.75" }}
                            alt="Logo"
                        />
                    </a>

                    <form class="d-flex flex-row-reverse" role="search">
                        <ul class="navbar-nav mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    Signup
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">
                                    About
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">
                                    Product
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">
                                    Pricing
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
