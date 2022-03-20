import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class FavoriteItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: [],
        };
        this.removeFavorite = this.removeFavorite.bind(this);
    }

    removeFavorite(e){
        this.props.deleteFavorite(this.props.favorite.id)
            .then(()=> this.props.fetchFavorites(this.props.favorites))
    }
    
    addComma(num){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        const { favorite } = this.props;
        return (
            <>
            <div className="favorites-container">
            <ul key={favorite.id}>
                <div className="favorite-item">
                    <div id='address-column'>
                        <div><Link to={ `/properties/${favorite.property_id}`}>
                                <img id='property-img' src={favorite.photoUrl} alt=""/>
                            </Link>
                        </div>
                        <div><span id='address1'>{favorite.address} <br/></span>
                            <span id='address2'>{favorite.city}, {favorite.state} <br/> {favorite.zipcode}</span>
                        </div>
                    
                    </div>
                    
                    <p>$ {this.addComma(favorite.price)}</p>
                    <p>{favorite.bedroom}</p>
                    <p>{favorite.bathroom}</p> 
                    <p>{this.addComma(favorite.sqft)}</p>
                    <p>${this.addComma(favorite.rent)}</p>
                    <p>{favorite.gross_yield}%</p>
                    <p>{favorite.cap_rate}%</p>
                    <p>{favorite.annualized_return} %</p>
                    <p>${this.addComma(favorite.total_return)} </p>
                    
                    <div className='heart-container'>
                        <img id='heart-img' onClick={this.removeFavorite} src={window.heartURL}  />
                    </div>
                </div>

            

            </ul>
            </div>
            </>
        )
    }

}


export default withRouter(FavoriteItem);