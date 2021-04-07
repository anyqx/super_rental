import React from 'react';
import FavoriteItem from './favorite_item';
import { withRouter } from 'react-router-dom';

class FavoriteIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchFavorites();
    }

    render() {
        const {favorites} = this.props;
        if (!favorites) return null;
        return (
            <>
            <div className='favorite-index-container'>
                <p>Browse Favorites</p>
                <ul className='favorite-item-container'>
                    {favorites.map(favorite => {
                        return <FavoriteItem favorite={favorite} key={favorite.id} 
                        deleteFavorite={this.props.deleteFavorite}/>
                    })}
                </ul>
            </div>
            </>
        )
    }
}
export default withRouter(FavoriteIndex);