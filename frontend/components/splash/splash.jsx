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
            <div className='main-container'>
                <ul>
                    <li id='line1'>for investors</li>
                    <li id='line2'>Build wealth through real estate</li>
                    <li id='line3'>Roofstock makes investing in single-family properties radically simple.</li>
                </ul>
                <img id='main-img' src={window.splash1URL}></img>

            </div>    

            {/* why-invest */}
            <div className='section-container'>
                <div className='section-title'>Why invest through SuperRental?</div>
                <div>
                    <div className='why-details-container'>
                        <ul>
                            <img id='why-img' src={window.splashWhyInvest1URL} />
                            <li id='title'>completed transactions</li>
                            <li id='text'>more than $2 billion in completed SFR transactions in less than four years</li>
                        </ul>
                        <ul>
                            <img id='why-img' src={window.splashWhyInvest2URL} />
                            <li id='title'>roofstock guarantee</li>
                            <li id='text'>unique 30-day money-back guarantee + guaranteed lease up on vacant properties</li>
                        </ul>
                        <ul>
                            <img id='why-img' src={window.splashWhyInvest3URL} />
                            <li id='title'>technology advantage</li>
                            <li id='text'>make investment decisions using insights, proprietary data and technology</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* featured properties */}
            <div className='featured-container'>
                <Link className='link-button'>view all properties</Link>
            </div>

            {/* why sfr */}
            <div className='section-container'>
                <div className='section-title'>Why single-family rentals(SFR)</div>
                <div className='section-subheader'>Provides strong, stable cash flows even through economic cycles</div>
                <div className='why-details-container'>
                    <ul>
                        <li><img id='why-img' src={window.splashWhySfh1URL} /></li>
                        <li id='why-img-text'>sfr market</li>
                    </ul>
                    <ul>
                        <li><img id='why-img' src={window.splashWhySfh2URL} /></li>
                        <li id='why-img-text'>current sfrs in us</li>
                    </ul>
                    <ul>
                        <li><img id='why-img' src={window.splashWhySfh3URL} /></li>
                        <li id='why-img-text'>new rental households by 2030</li>
                    </ul>
                </div>
            </div>

            {/* investor container */}
            <div className='investor-container'>
                <div className='section-title'>Meet our investor</div>
                <div className='investor-intro-container'>
                    <p id='name'>Annie Xu</p>
                    <p id='intro-text'>I love real estate since I was a child! I've been involved in multiple
                    real estate transactions including sale, design, cost analysis! Super Rental helps you find out comps about rental property invesment
                    and makes it easy to invest out-of-state.</p>
                </div>

            </div>


            {/* story container */}
            <div className='story-container'>
                <div className='story-title'>Our Story</div>
                <div id='text1'>Founded by pioneers in the single-family rental space, 
                    SuperRental has assembled a world-class team of real estate 
                    and technology professionals committed to a clear mission:</div>
                    <div id='text2'>Making real estate investing radically accessible, cost-effective and simple</div>
            </div>
            </>
                                                                                                                                        
        );
    }
}

export default Splash;

