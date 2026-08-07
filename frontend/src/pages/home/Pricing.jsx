function Pricing() {
    return ( 
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h1 className="mb-3 fs-2">Unbeatable Pricing</h1>
                        <p>We pioneer transparent pricing with no hidden fees. Flat fees and no hidden costs.</p>
                        <a href="" style={{ textDecoration: "none" }}>See Pricing<i className="fas fa-arrow-right ml-2"></i></a>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-6 mb-5">
                        <div className="row text-center">
                            <div className="col border p-3">
                                <h1 className="mb-3">₹0</h1>
                                <p>Free equity delivery and <br /> direct mutual funds</p>
                            </div>
                            <div className="col border p-3">
                                <h1 className="mb-3">₹20</h1>
                                <p>Flat fee for intraday <br /> and F&O trades</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;
