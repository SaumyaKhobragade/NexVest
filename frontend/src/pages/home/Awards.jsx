import largestBroker from '../../assets/images/largestBroker.svg';
import pressLogos from '../../assets/logos/pressLogos.png';

function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src={largestBroker} alt="Awards" className="img-fluid" />
                </div>
                <div className="col-6 p-5 mt-3">
                    <h1>Largest Broker in the Country</h1>
                    <p className="mb-5">2+ million clients contribute to over 15% of all retail order volumes in our market by trading and investing in:</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity Derivatives</li>
                                <li>Currency Derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Bonds and Government Securities</li>
                                <li>Mutual Funds</li>
                            </ul>
                        </div>
                    </div>
                    <img src={pressLogos} alt="Awards" style={{ width: "90%" }} />
                </div>
            </div>
        </div>
    );
}

export default Awards;
