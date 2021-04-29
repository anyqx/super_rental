import React, { Component } from 'react';

class FavoriteCreate extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchFavorites();
    // }

    handleSubmit(e) {
        e.preventDefault();
        const {addFavorite, propertyId, userId} = this.props;
        const favorite = { property_id: propertyId, user_id: userId };
        addFavorite(favorite);
    }

    render() {
        // if (this.props.favorites ) return (
        //     <div className='cart-container'>
        //         <img id='heart-img' onClick={this.handleSubmit} src={window.unHeartURL}  />
        //     </div>
        // );
        return (
            <div className='cart-container'>
                <img id='heart-img' onClick={this.handleSubmit} src={window.unHeartURL}  />
            </div>
        )
    }
}

export default FavoriteCreate;