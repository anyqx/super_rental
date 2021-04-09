import React from 'react';
import FavoriteItem from './favorite_item';
import { withRouter } from 'react-router-dom';

class FavoriteIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: []
        };
        
        // this.updateLocalFavoriteStore = this.updateLocalFavoriteStore.bind(this);
        //this.state on parent component, render from this.state

        //updateLocalFavoriteState (take in an id to remove from parent state)
    }

    // updateLocalFavoriteStore( id ) {
    //     this.setState (i)
    // }
    //setState on the new array parent component, pass the whole to the child, so child can call it to handle the delete
    componentDidMount() {
        this.props.fetchFavorites();
    }

    render() {
        const {favorites} = this.props;
        if (!favorites) return null;
        return (
            <>
            <div className='favorite-index-container'>
                <p id='title'>Favorite Properties</p>
                <div className='favorite-item-container'>
                    {favorites.map(favorite => {
                        return <FavoriteItem favorite={favorite} key={favorite.id} 
                        deleteFavorite={this.props.deleteFavorite}/>
                    })}
                </div>
            </div>
            </>
        )
    }
}
export default withRouter(FavoriteIndex);