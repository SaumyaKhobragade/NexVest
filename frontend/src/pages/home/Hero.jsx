import homeHero from '../../assets/images/homeHero.png';

function Hero() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src={homeHero} alt="Hero" className="mb-5" />
                <h1 className="mt-5">
                    Invest in Everything You Want, All in One Place
                </h1>
                <p>
                    Invest in everything you want, from stocks to crypto, all in one place.
                </p>
                <button style={{ width: "20%", margin: "0 auto" }} className="btn btn-primary p-2 fs-5 mb-5">
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default Hero;
