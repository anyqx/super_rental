import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
            {/* main intro */}
            <div className='main-box'>
                <img id='main-img' src={window.splash1URL}></img>
                <h3>for investors</h3>
                <p>Build wealth through real estate</p>
                <p>Roofstock makes investing in single-family properties radically simple.</p>

            </div>    

            {/* why-invest */}
            <div className='section-container'>
                <div className='section-head-text'>Why invest through SuperRental?</div>
                <div>
                    <ul className='why-details-container'>
                        <li>
                            <img id='why-img' src={window.splashWhyInvest1URL} />
                            <h2>completed transactions</h2>
                            <p>more than $2 billion in completed SFR transactions in less than four years</p>
                        </li>
                        <li>
                            <img id='why-img' src={window.splashWhyInvest2URL} />
                            <h2>roofstock guarantee</h2>
                            <p>unique 30-day money-back guarantee + guaranteed lease up on vacant properties</p>
                        </li>
                        <li>
                            <img id='why-img' src={window.splashWhyInvest3URL} />
                            <h2>technology advantage</h2>
                            <p>make investment decisions using insights, proprietary data and technology</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* featured properties */}
            <div className='featured-box'>

                <Link className='link-box'>view all properties</Link>
            </div>

            {/* why sfr */}
            <div className='section-container'>
                <div className='section-head-text'>Why single-family rentals(SFR)</div>
                    <h2>Provides strong, stable cash flows even through economic cycles</h2>
                <ul className='why-details-container'>
                    <li><img id='why-img' src={window.splashWhySfh1URL} />sfr market</li>
                    <li><img id='why-img' src={window.splashWhySfh2URL} />current sfrs in us</li>
                    <li><img id='why-img' src={window.splashWhySfh3URL} />new rental households by 2030</li>
                </ul>
            </div>

            <div className='section-container'>
                <div className='section-head-text'>Meet our investor/site creator</div>
                <p>Annie Xu</p>
                <p> intro </p>

            </div>


            {/* story box */}
            <div className='section-container'>
                <div className='section-head-text'>Our Story</div>
                <h2>Founded by pioneers in the single-family rental space, 
                    SuperRental has assembled a world-class team of real estate 
                    and technology professionals committed to a clear mission:</h2>
                    <h3>Making real estate investing radically accessible, cost-effective and simple</h3>
            </div>
            </>
                                                                                                                                        
        );
    }
}

export default Splash;

