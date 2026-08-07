import education from '../../assets/images/education.svg';

function Education() {
    return ( 
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <img src={education} alt="Education" style={{width: "70%"}} />
                    </div>
                    <div className="col">
                        <h1 className="mb-3 fs-2">Free and Open Market Education</h1>

                        <p className="mt-5">Varsity is our free online stock market learning platform. It offers comprehensive courses for beginners and advanced traders alike.</p>
                        <a href="" style={{ textDecoration: "none" }}>Varsity<i className="fas fa-arrow-right ml-2"></i></a>

                        <p className="mt-5">TradingQ&A, the most active community of traders and investors in India for all your market questions.</p>
                        <a href="" style={{ textDecoration: "none" }}>TradingQ&A<i className="fas fa-arrow-right ml-2"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Education;
