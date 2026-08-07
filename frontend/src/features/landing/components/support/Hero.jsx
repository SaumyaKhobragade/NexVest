function Hero() {
    const inputStyles = {
        padding: "20px 50px",
        width: "100%",
        fontSize: "20px",
        borderRadius: "10px",
        border: "none"
    };

    return (
        <>
            <section className="container-fluid" id="supportHero" style={{ backgroundColor: "rgb(56, 126, 209)", color: "white" }}>
                <div className="p-5 " id="supportWrapper" style={{ display: "flex", justifyContent: "space-around", gap: "18rem" }}>
                    <h4>Support Portal</h4>
                    <a href="" style={{ color: "white" }}>
                        Track Tickets
                    </a>
                </div>
                <div className="row p-5 m-3">
                    <div className="col-2 p-3"> </div>
                    <div className="col-6 p-3">
                        <h1 className="fs-3">
                            Search for an answer or browse help topics to create a ticket
                        </h1>
                        <input placeholder="Eg. how do I activate F&O" style={inputStyles} />
                        <br />
                        <a href="" style={{ color: "white" }}>
                            Track account opening
                        </a>
                        <a href="" style={{ color: "white" }}>
                            Track segment activation
                        </a>
                        <a href="" style={{ color: "white" }}>
                            Intraday margins
                        </a>
                        <a href="" style={{ color: "white" }}>
                            Kite user manual
                        </a>
                    </div>
                    <div className="col-4 p-3">
                        <h1 className="fs-3">Featured</h1>
                        <ol>
                            <li>
                                <a href="" style={{ color: "white" }}>
                                    Current Takeovers and Delisting - January 2024
                                </a>
                            </li>
                            <li>
                                <a href="" style={{ color: "white" }}>
                                    Latest Intraday leverages - MIS & CO
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;