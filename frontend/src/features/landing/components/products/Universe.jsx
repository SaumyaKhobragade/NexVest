import smallcaseLogo from '../../../../assets/logos/smallcaseLogo.png';
import streakLogo from '../../../../assets/logos/streakLogo.png';
import sensibullLogo from '../../../../assets/logos/sensibullLogo.svg';
import zerodhaFundhouse from '../../../../assets/logos/zerodhaFundhouse.png';
import goldenpiLogo from '../../../../assets/logos/goldenpiLogo.png';
import dittoLogo from '../../../../assets/logos/dittoLogo.png';

function Universe() {
    return (
        <>
            <div className="container mt-5">
                <div className="row text-center">
                    <h1>The NexVest Universe</h1>
                    <p>
                        Extend your trading and investment experience even further with our
                        partner platforms
                    </p>

                    <div className="col-4 p-3 mt-5">
                        <img src={smallcaseLogo} alt="Smallcase" style={{ width: "50%" }} />
                        <p className="text-small text-muted">Thematic investment platform</p>
                    </div>
                    <div className="col-4 p-3 mt-5">
                        <img src={streakLogo} alt="Streak" style={{ width: "50%" }} />
                        <p className="text-small text-muted">Algo & Strategy platform</p>
                    </div>
                    <div className="col-4 p-3 mt-5">
                        <img src={sensibullLogo} alt="Sensibull" style={{ width: "50%" }} />
                        <p className="text-small text-muted">Options trading platform</p>
                    </div>
                    <div className="col-4 p-3 mt-5">
                        <img src={zerodhaFundhouse} alt="Zerodha Fund House" style={{ width: "50%" }} />
                        <p className="text-small text-muted">Asset management platform</p>
                    </div>
                    <div className="col-4 p-3 mt-5">
                        <img src={goldenpiLogo} alt="GoldenPi" style={{ width: "50%" }} />
                        <p className="text-small text-muted">Bonds Trading platform</p>
                    </div>
                    <div className="col-4 p-3 mt-5">
                        <img src={dittoLogo} alt="Ditto" style={{ width: "40%" }} />
                        <p className="text-small text-muted">Insurance</p>
                    </div>
                    <button
                        className="p-2 btn btn-primary fs-5 mb-5"
                        style={{ width: "20%", margin: "0 auto" }}
                    >
                        Signup Now
                    </button>
                </div>
            </div>
        </>
    );
}

export default Universe;