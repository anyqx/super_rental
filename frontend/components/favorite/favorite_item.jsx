import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class FavoriteItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: [],
            id: this.props.favorite.id,
        };


        this.removeFavorite = this.removeFavorite.bind(this);
    }

    removeFavorite(e){
        const favorite = this.props.favorite.id;
        const {favorites} = this.props;
        this.props.deleteFavorite(favorite);
        // this.props.history.push('./favorites')
        this.setState({
            favorites: favorites,
            id: ''
        })
    }
    render() {
        const { favorite } = this.props;
        return (
            <>
            <div className="favorites-container">
            <ul key={favorite.id}>
                <div className="favorite-item">
                    <p>{favorite.address} &nbsp;
                        {favorite.city}, {favorite.state} &nbsp; {favorite.zipcode}
                    </p>
                    <img src={favorite.photoUrl} alt=""/>
                    <p>$ {favorite.price}</p>
                    <p>{favorite.bedroom} bd, {favorite.bathroom} ba | {favorite.sqft} sqft</p>
                    <p>Current Rent${favorite.rent}</p>
                    <p>Cap Rate {favorite.cap_rate}%</p>
                    <p>Gross Yield: {favorite.gross_yield}%</p>
                    <p>Annualized Return: {favorite.annualized_return} %</p>
                    <p>10 year total return: ${favorite.total_return} </p>
                    <img id='heart-img' onClick={this.removeFavorite} src={window.favoriteHeartURL}  />
                    {/* <button id='unfavorite-button' onClick={this.removeFavorite} >Unfavorite</button> */}
                </div>


            </ul>
            </div>
            </>
        )
    }

}


export default withRouter(FavoriteItem);