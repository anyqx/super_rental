import React, { Component } from 'react';

class FavoriteCreate extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {addFavorite, propertyId, userId} = this.props;
        const favorite = { property_id: propertyId, user_id: userId };
        addFavorite(favorite);
    }

    render() {
        
        return (
            <div className='cart-container'>
                <img id='heart-img' onClick={this.handleSubmit} src={window.favoriteHeartURL}  />
            </div>
        )
    }
}

export default FavoriteCreate;