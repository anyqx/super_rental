import React, { Component } from 'react';

class FavoriteCreate extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeFavorite = this.removeFavorite.bind(this);
    }

    componentDidUpdate(prevProps, PrevState) {
        if (prevProps.favorite !== this.props.favorite) {

        }
    }


    handleSubmit(e) {
        e.preventDefault();
        const {addFavorite, propertyId, userId} = this.props;
        const favorite = { property_id: propertyId, user_id: userId };
        addFavorite(favorite);
    }

    removeFavorite(){
        this.props.deleteFavorite(this.props.favorite.id);
    }


    render() {
        const redHeart = <img id='heart-img'  onClick={this.removeFavorite} src={window.heartURL}  />
        const whiteHeart = <img id='heart-img' onClick={this.handleSubmit} src={window.unHeartURL}  />
        let heart = whiteHeart;
        // if (this.props.isFavorited === true) {
        if (this.props.favorite) {

            heart = redHeart;
        } else {
            heart = whiteHeart;
        }
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