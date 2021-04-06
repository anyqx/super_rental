import React, { Component } from 'react';

class FavoriteCreate extends React.Component {

    constructor(props) {
        super(props);
        debugger
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {addFavorite, propertyId, userId} = this.props;
        const favorite = { property_id: propertyId, user_id: userId };
        addFavorite(favorite);
    }

    render() {
        debugger
        return (
            <div className='cart-container'>
                <h2>Favorite feature</h2>
                <form className='favorite-create-form'onSubmit={this.handleSubmit}>
                <button className='submit-button'>Favorite</button>
                </form>
            </div>
        )
    }
}

export default FavoriteCreate;