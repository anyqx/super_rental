import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class FavoriteItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: [],
            id: this.props.favorite.id, 
        };

        // this.handleSubmit = this.handleSubmit.bind(this);
        this.removeFavorite = this.removeFavorite.bind(this);
    }


    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.props.updateCartItem(this.state);
    //     // this.props.history.push(`/cart`);
    // }

    removeFavorite(e){
        this.props.deleteFavorite(this.props.favorite.id);
    }
    render() {
        const { favorite } = this.props;
        return (
            <>
            <div className="favorites-container">
            <li key={favorite.id}>
                <div className="favorite photo">
                    <p>{favorite.address}</p>
                    <img src={favorite.photoUrl} alt="" />
            

                </div>
                    <div>
                        <p>Unfavorite</p>
                        <button onClick={this.removeFavorite} >Unfavorite this property</button>
                    </div>

            </li>
            </div>
            </>
        )
    }

}


export default withRouter(FavoriteItem);