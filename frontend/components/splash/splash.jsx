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
            <div className='main-box'>
                <h3>for investors</h3>
                <p>Build wealth through real estate</p>
                <p>Roofstock makes investing in single-family properties radically simple.</p>

            </div>    

            <div className='why-invest-box'>
                <h1>Why invest through SuperRental?</h1>
                <ul>
                    <li>
                        <h2>completed trasnsactions</h2>
                        <p>More than $2 billion in completed SFR transactions in less than four years</p>
                    </li>
                    <li>
                        <h2>roofstock guarantee</h2>
                        <p>Unique 30-day money-back guarantee + guaranteed lease up on vacant properties</p>
                    </li>
                    <li>
                        <h2>technology advantage</h2>
                        <p>make investment decisions using insights, proprietary data and technology</p>
                    </li>
                </ul>
            </div>

            <div className='featured-box'>

                <Link className='link-box'>view all properties</Link>
            </div>

            <div className='why-sfr-box'>
                <h1>Why single-family rentals(SFR)</h1>
                <h2>Provides strong, stable cash flows even through economic cycles</h2>
                <ul>
                    <li>sfr market</li>
                    <li>current sfrs in us</li>
                    <li>new rental households by 2030</li>
                </ul>
                <Link className='link-box'>learn more</Link>
            </div>

            <div className='meet-investors'>
                <h1>Annie Xu</h1>
                <p> intro </p>

            </div>

            <div className='story-box'>
                <h1>Our story</h1>
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

