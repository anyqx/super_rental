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
        const redHeart = <img id='heart-img'  onClick={this.handleSubmit} src={window.heartURL}  />
        const whiteHeart = <img id='heart-img' onClick={this.handleSubmit} src={window.unHeartURL}  />
        let heart = whiteHeart;
        if (this.props.isFavorited === true) {heart = redHeart}
        return (
            <div className='heart-container'>
                <div className="heart-container-2">
                    {heart}

                </div>
            </div>
        )
    }
}

export default FavoriteCreate;