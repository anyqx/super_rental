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
                    <p id='address'>{favorite.address} <br/>
                        {favorite.city}, {favorite.state} &nbsp; {favorite.zipcode}
                    </p>
                    <Link to={ `/properties/${favorite.property_id}`}>
                        <img id='property-img' src={favorite.photoUrl} alt=""/>
                    </Link>
                    <p>$ {this.addComma(favorite.price)}</p>
                    <p>{favorite.bedroom} bd, {favorite.bathroom} bath <br/> {this.addComma(favorite.sqft)} sqft</p>
                    <p>Current Rent <br/> ${this.addComma(favorite.rent)}</p>
                    <p>Cap Rate <br/>{favorite.cap_rate}%</p>
                    <p>Gross Yield <br/>{favorite.gross_yield}%</p>
                    <p>Annualized Return <br/>{favorite.annualized_return} %</p>
                    <p>10 yr total return <br/>${favorite.total_return} </p>
                    <img id='heart-img' onClick={this.removeFavorite} src={window.heartURL}  />
                </div>


            </ul>
            </div>
            </>
        )
    }

}


export default withRouter(FavoriteItem);