import ecosystem from '../../../../assets/images/ecosystem.png';

function Stats() {
    return (
        <>
            <div className="container p-3">
                <div className="row p-5">
                    <div className="col-6 p-5">
                        <h1 className="fs-2 mb-5">Trust with Confidence</h1>
                        <h2 className="fs-4">Customers Always Come First</h2>
                        <p className="text-muted">That's why 1.3 million customers trust us with 3.5 million worth of investments.</p>
                        <h2 className="fs-4">No Spam or Gimmicks</h2>
                        <p className="text-muted">No gimmicks, just straightforward investment solutions. High quality apps that you use at your pace, the way you want.</p>
                        <h2 className="fs-4">The NextVest Universe</h2>
                        <p className="text-muted">Not just a platform, but a complete ecosystem for your financial journey.</p>
                        <h2 className="fs-4">Do Better With Money</h2>
                        <p className="text-muted">With our tools and resources, you can make smarter financial decisions and achieve your goals.</p>
                    </div>
                    <div className="col-6 p-5">
                        <img src={ecosystem} alt="Stats" className="img-fluid" style={{ width: "90%" }} />
                        <div className="text-center mt-3">
                            <a href="" className="mx-5" style={{ textDecoration: "none" }}>Explore Our Ecosystem<i className="fas fa-arrow-right ml-2"></i></a>
                            <a href="" style={{ textDecoration: "none" }}>Learn More <i className="fas fa-arrow-right ml-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Stats;